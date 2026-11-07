"""Launch the fixed worker with explicit paths and bounded communication.

This module requires POSIX and Python 3.11 or newer. The operation timeout
excludes cleanup: cancellation and failures return only after the owned
process has been killed and reaped. The callback must return promptly.
"""

from __future__ import annotations

import asyncio
from collections.abc import Callable
import json
import math
import os
from pathlib import Path
import signal
import sys

from .worker import encode_payload


_WORKER_PATH = Path(__file__).with_name("worker.py").resolve()


class InvocationError(RuntimeError):
    """The fixed worker failed or returned an invalid response."""


class OutputLimitError(InvocationError):
    """Combined stdout and stderr exceeded the caller's byte limit."""


async def _discard(reader: asyncio.StreamReader) -> None:
    while await reader.read(16384):
        pass


async def _cleanup(startup: asyncio.Task, tasks: list[asyncio.Task], *, kill: bool) -> None:
    # Creation remains shielded until we receive either a process or its
    # creation error. A cancellation during creation must not lose the child.
    try:
        process = await startup
    except (Exception, asyncio.CancelledError):
        return
    if kill:
        try:
            os.killpg(process.pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
    if process.stdin is not None:
        process.stdin.close()
    for task in tasks:
        if not task.done():
            task.cancel()
    await asyncio.gather(*tasks, return_exceptions=True)
    # A stopped reader can leave the transport paused with a full buffer.
    # Drain both pipes after killing the group so wait() can finish.
    await asyncio.gather(_discard(process.stdout), _discard(process.stderr), process.wait())


async def invoke(payload: object, *, cwd: Path, timeout: float = 10,
                 output_limit: int = 65536,
                 started: Callable[[int], None] | None = None) -> dict:
    """Echo ``payload['value']`` in an isolated child and report cwd and pid.

    ``wait_seconds`` is an optional fixture delay, limited to 30 seconds.
    Output includes stdout and stderr combined. ``started(pid)`` acknowledges
    process creation, not completion of request parsing. This launcher is
    environment isolation, not a filesystem or network sandbox.
    """
    if os.name != "posix":
        raise NotImplementedError("Worker invocation requires POSIX process groups")
    if type(timeout) not in (int, float):
        raise ValueError("timeout must be a positive finite number")
    try:
        timeout = float(timeout)
    except OverflowError as error:
        raise ValueError("timeout must be a positive finite number") from error
    if not math.isfinite(timeout) or timeout <= 0:
        raise ValueError("timeout must be a positive finite number")
    if type(output_limit) is not int or output_limit < 1:
        raise ValueError("output_limit must be a positive integer")
    if started is not None and not callable(started):
        raise TypeError("started must be callable")
    encoded = encode_payload(payload)
    expected = json.loads(encoded)
    directory = Path(cwd).resolve(strict=True)
    if not directory.is_dir():
        raise NotADirectoryError(directory)
    if not sys.executable:
        raise InvocationError("The current interpreter has no executable path")
    interpreter = str(Path(sys.executable).resolve(strict=True))
    worker = str(_WORKER_PATH.resolve(strict=True))
    startup = asyncio.create_task(asyncio.create_subprocess_exec(
        interpreter, "-I", worker,
        cwd=directory,
        env={"PATH": os.defpath, "LANG": "C.UTF-8", "LC_ALL": "C.UTF-8"},
        stdin=asyncio.subprocess.PIPE,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
        start_new_session=True,
        limit=min(output_limit, 65536),
    ))
    tasks: list[asyncio.Task] = []
    succeeded = False
    try:
        async with asyncio.timeout(timeout):
            process = await asyncio.shield(startup)
            if started is not None:
                started(process.pid)
            total = 0

            async def read(reader: asyncio.StreamReader) -> bytes:
                nonlocal total
                parts = []
                while chunk := await reader.read(16384):
                    total += len(chunk)
                    if total > output_limit:
                        raise OutputLimitError("Worker exceeded the combined output limit")
                    parts.append(chunk)
                return b"".join(parts)

            async def write() -> None:
                try:
                    process.stdin.write(encoded)
                    await process.stdin.drain()
                except (BrokenPipeError, ConnectionResetError):
                    # The exit status or response validation describes an
                    # early worker exit after the other pipes are drained.
                    pass
                finally:
                    process.stdin.close()

            tasks = [asyncio.create_task(read(process.stdout)),
                     asyncio.create_task(read(process.stderr)),
                     asyncio.create_task(write()),
                     asyncio.create_task(process.wait())]
            stdout, _, _, returncode = await asyncio.gather(*tasks)
            if returncode != 0:
                raise InvocationError(f"Worker exited with status {returncode}")
            try:
                response = json.loads(stdout.decode("utf-8"))
                if type(response) is not dict or set(response) != {"value", "cwd", "pid"}:
                    raise ValueError("Response fields do not match the worker protocol")
                if type(response["pid"]) is not int or response["pid"] != process.pid:
                    raise ValueError("Response process identity does not match")
                if response["cwd"] != str(directory):
                    raise ValueError("Response working directory does not match")
                received = json.dumps(response["value"], sort_keys=True, ensure_ascii=False,
                                      allow_nan=False, separators=(",", ":"))
                sent = json.dumps(expected["value"], sort_keys=True, ensure_ascii=False,
                                  allow_nan=False, separators=(",", ":"))
                if received != sent:
                    raise ValueError("Response value does not match")
            except (ValueError, TypeError, UnicodeError, RecursionError) as error:
                raise InvocationError("Worker returned an invalid response") from error
            succeeded = True
            return response
    finally:
        cleanup = asyncio.create_task(_cleanup(startup, tasks, kill=not succeeded))
        cancelled = False
        while not cleanup.done():
            try:
                await asyncio.shield(cleanup)
            except asyncio.CancelledError:
                # Repeated caller cancellation must not abandon cleanup.
                cancelled = True
        cleanup.result()
        if cancelled:
            raise asyncio.CancelledError
