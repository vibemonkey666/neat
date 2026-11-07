"""Stream operations into an ordered scheduler with durable execution receipts.

Tool implementations are trusted, cooperative async functions. The registry,
not the input stream, decides which operations can mutate external state.
"""

from __future__ import annotations

import asyncio
import copy
import hashlib
import json
import uuid
from dataclasses import dataclass
from typing import Any, AsyncIterable, Awaitable, Callable

from .journal import Journal, JournalError, snapshot


@dataclass(frozen=True)
class Call:
    id: str
    tool: str
    arguments: dict


@dataclass(frozen=True)
class ToolContext:
    call_id: str
    attempt_id: str
    cancelled: asyncio.Event
    preceding_results: tuple


@dataclass(frozen=True)
class Tool:
    run: Callable[[dict, ToolContext], Awaitable[Any]]
    mutates: bool

    def __post_init__(self):
        if type(self.mutates) is not bool or not callable(self.run):
            raise TypeError("A tool needs a callable and an explicit boolean effect policy")


def identity(call: Call) -> str:
    data = json.dumps(snapshot([call.tool, call.arguments]), sort_keys=True,
                      separators=(",", ":"), allow_nan=False).encode()
    return hashlib.sha256(data).hexdigest()


class Engine:
    def __init__(self, journal: Journal, tools: dict[str, Tool], *,
                 allowed: set[str], readers: int = 4, pending_limit: int = 32):
        if readers < 1 or pending_limit < readers:
            raise ValueError("Require positive readers and pending_limit >= readers")
        self.journal = journal
        self.tools = dict(tools)
        self.allowed = frozenset(allowed)
        self.cancelled = asyncio.Event()
        self._slots = asyncio.Semaphore(readers)
        self._admission = asyncio.Semaphore(pending_limit)
        self._tasks: set[asyncio.Task] = set()
        self._queue: asyncio.Queue = asyncio.Queue()
        self._consumer = None
        self._hook_task = None
        self._running = False
        self._used = False
        self._storage_error = None
        self._input_error = None
        self.calls: dict[str, dict] = {}
        self.context: list[dict] = []
        self.summary = ""
        self.stop_policy = None
        self.attempt_id = str(uuid.uuid4())
        self._ownership = object()
        journal.claim(self._ownership)
        try:
            self._restore()
        except BaseException:
            journal.release(self._ownership)
            raise

    def _restore(self):
        for row in self.journal.records:
            kind = row.get("kind")
            if kind == "accepted":
                self.calls[row["call_id"]] = {**row, "state": "queued"}
            elif kind in {"started", "receipt", "recovered"}:
                self.calls[row["call_id"]].update(row)
            elif kind == "summary":
                self.summary = row["text"]
            elif kind == "validation_policy":
                self.stop_policy = row["policy"]
        # A fresh process has no live workers. A durable intent without a
        # receipt cannot establish whether an external operation took effect.
        for call_id, state in self.calls.items():
            if state["state"] in {"queued", "running"}:
                status = "uncertain" if state["state"] == "running" and state["mutates"] else "interrupted"
                row = self._record("recovered", call_id=call_id, state=status)
                state.update(row)
            if state["state"] == "succeeded":
                self.context.append({"call_id": call_id, "value": copy.deepcopy(state["value"])})

    def _record(self, kind: str, **fields) -> dict:
        try:
            return self.journal.append({"kind": kind, "attempt_id": self.attempt_id, **fields})
        except (JournalError, OSError, ValueError, TypeError) as exc:
            self._storage_error = str(exc)
            self.cancel()
            raise

    def cancel(self):
        self.cancelled.set()
        try:
            current = asyncio.current_task()
        except RuntimeError:
            current = None
        if self._consumer and self._consumer is not current and not self._consumer.done():
            self._consumer.cancel()
        for task in self._tasks:
            if task is not current and not task.done():
                task.cancel()
        if self._hook_task and self._hook_task is not current and not self._hook_task.done():
            self._hook_task.cancel()

    def compact(self, text: str):
        if self._used and not self._running:
            raise RuntimeError("This attempt has ended")
        if not isinstance(text, str):
            raise TypeError("Summary must be text")
        self._record("summary", text=text)
        self.summary = text

    def _receipt(self, call: Call, state: str, **fields):
        row = self._record("receipt", call_id=call.id, state=state, **fields)
        self.calls[call.id].update(row)
        return copy.deepcopy(self.calls[call.id])

    async def _execute(self, call: Call):
        started = False
        spec = self.tools[call.tool]
        try:
            async with self._slots:
                if self.cancelled.is_set():
                    return self._receipt(call, "cancelled")
                row = self._record("started", call_id=call.id, state="running")
                self.calls[call.id].update(row)
                started = True
                context = ToolContext(call.id, self.attempt_id, self.cancelled,
                                      tuple(copy.deepcopy(self.context)))
                value = await spec.run(copy.deepcopy(call.arguments), context)
                return self._receipt(call, "succeeded", value=value)
        except asyncio.CancelledError:
            if self._storage_error:
                return None
            status = "uncertain" if started and spec.mutates else "cancelled"
            return self._receipt(call, status)
        except (JournalError, OSError, ValueError, TypeError) as exc:
            if self._storage_error:
                return None
            return self._receipt(call, "uncertain" if started and spec.mutates else "failed", error=str(exc))
        except Exception as exc:
            return self._receipt(call, "uncertain" if started and spec.mutates else "failed", error=str(exc))

    async def _publish(self):
        while True:
            item = await self._queue.get()
            try:
                if item is None:
                    return
                call, task = item
                try:
                    result = await task
                except asyncio.CancelledError:
                    result = None if self._storage_error else self._receipt(call, "cancelled")
                except Exception as exc:
                    self._storage_error = self._storage_error or str(exc)
                    self.cancel()
                    result = None
                if result and not self._storage_error and result["state"] == "succeeded":
                    update = {"call_id": call.id, "value": result["value"]}
                    self._record("context", **update)
                    self.context.append(copy.deepcopy(update))
            except (JournalError, OSError, ValueError, TypeError) as exc:
                self._storage_error = str(exc)
                self.cancel()
            finally:
                if item is not None:
                    self._tasks.discard(item[1])
                    self._admission.release()
                self._queue.task_done()

    async def _drain(self):
        if self._tasks:
            await asyncio.gather(*self._tasks, return_exceptions=True)
        await self._queue.join()

    async def _consume(self, stream: AsyncIterable[Call]):
        async for supplied in stream:
            call = supplied
            if not isinstance(call, Call) or not isinstance(call.id, str) or not call.id or not isinstance(call.tool, str) or type(call.arguments) is not dict:
                raise ValueError("Each operation requires a nonempty id and object arguments")
            call = Call(call.id, call.tool, snapshot(call.arguments))
            signature = identity(call)
            if call.id in self.calls:
                if self.calls[call.id]["identity"] != signature:
                    raise ValueError("Operation id was reused with different inputs: " + call.id)
                self._record("reused", call_id=call.id, state=self.calls[call.id]["state"])
                continue
            if self.cancelled.is_set() or self._storage_error:
                break
            spec = self.tools.get(call.tool)
            if spec is None or call.tool not in self.allowed:
                self.calls[call.id] = self._record("accepted", call_id=call.id, tool=call.tool,
                    arguments=call.arguments, identity=signature, mutates=spec.mutates if spec else True, state="queued")
                self._receipt(call, "denied")
                continue
            if spec.mutates:
                await self._drain()
            await self._admission.acquire()
            if self.cancelled.is_set() or self._storage_error:
                self._admission.release()
                break
            try:
                self.calls[call.id] = self._record("accepted", call_id=call.id, tool=call.tool,
                    arguments=call.arguments, identity=signature, mutates=spec.mutates, state="queued")
                task = asyncio.create_task(self._execute(call), name="operation:" + call.id)
                self._tasks.add(task)
                self._queue.put_nowait((call, task))
            except BaseException:
                self._admission.release()
                raise
            if spec.mutates:
                await self._drain()

    async def run(self, stream: AsyncIterable[Call], *,
                  stop_hook: Callable[[int], Awaitable[bool]] | None = None,
                  stop_attempts: int = 2, stop_policy: str = "default") -> dict:
        if self._used:
            raise RuntimeError("Create a new Engine for each attempt")
        if stop_attempts < 1:
            raise ValueError("stop_attempts must be positive")
        self._used = True
        try:
            if stop_hook is not None:
                if not isinstance(stop_policy, str) or not stop_policy:
                    raise ValueError("A stop hook needs a stable policy identity")
                if self.stop_policy not in {None, stop_policy}:
                    raise ValueError("The required validation policy changed")
                if self.stop_policy is None:
                    self._record("validation_policy", policy=stop_policy)
                    self.stop_policy = stop_policy
            return await self._attempt(stream, stop_hook, stop_attempts)
        finally:
            self._running = False
            self.journal.release(self._ownership)

    async def _attempt(self, stream, stop_hook, stop_attempts):
        self._used = self._running = True
        publisher = asyncio.create_task(self._publish())
        self._consumer = asyncio.create_task(self._consume(stream))
        if self.cancelled.is_set():
            self._consumer.cancel()
        try:
            await self._consumer
        except asyncio.CancelledError:
            self.cancel()
        except Exception as exc:
            self._input_error = str(exc)
            self.cancel()
        finally:
            async def cleanup():
                await self._drain()
                await self._queue.put(None)
                await publisher

            cleanup_task = asyncio.create_task(cleanup())
            # Caller cancellation requests interruption, then waits for owned
            # tasks to finish. Repeated cancellation cannot skip this cleanup.
            while True:
                try:
                    await asyncio.shield(cleanup_task)
                    break
                except asyncio.CancelledError:
                    self.cancel()
        if not self._storage_error:
            # Inputs accepted immediately before a barrier can remain queued
            # when cancellation prevents their dispatch.
            for call_id, state in self.calls.items():
                if state["state"] == "queued":
                    try:
                        state.update(self._record("receipt", call_id=call_id, state="cancelled"))
                    except (JournalError, OSError, ValueError, TypeError):
                        break
        pending = [key for key, value in self.calls.items() if value["state"] != "succeeded"]
        validation, hook_error, attempts = "not-run", None, 0
        if not pending and not self.cancelled.is_set() and not self._storage_error and not self._input_error:
            validation = "missing-required-hook" if stop_hook is None and self.stop_policy else "passed" if stop_hook is None else "blocked"
            for number in range(1, stop_attempts + 1) if stop_hook else ():
                if self.cancelled.is_set():
                    validation = "interrupted"
                    break
                attempts = number
                try:
                    self._hook_task = asyncio.create_task(stop_hook(number))
                    accepted = await self._hook_task
                    if not isinstance(accepted, bool):
                        raise ValueError("Stop hook must return a boolean")
                    self._record("validation", number=number, accepted=accepted)
                    if accepted:
                        validation = "passed"
                        break
                except asyncio.CancelledError:
                    self.cancel()
                    validation = "interrupted"
                    break
                except Exception as exc:
                    validation, hook_error = "failed", str(exc)
                    break
                finally:
                    self._hook_task = None
        report = {"attempt_id": self.attempt_id,
                  "execution": "cancelled" if self.cancelled.is_set() else "incomplete" if pending or self._input_error else "complete",
                  "validation": validation, "validation_attempts": attempts,
                  "validation_error": hook_error, "unresolved": pending,
                  "input_error": self._input_error,
                  "durability": "failed" if self._storage_error else "acknowledged"}
        report["status"] = "succeeded" if report["execution"] == "complete" and validation == "passed" and not self._storage_error else "incomplete"
        if not self._storage_error:
            try:
                self._record("finished", report=report)
            except (JournalError, OSError, ValueError, TypeError):
                report.update(status="incomplete", durability="failed")
        report["storage_error"] = self._storage_error
        return report
