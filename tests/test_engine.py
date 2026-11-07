import asyncio
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from workflow_alt.effects import Effects
from workflow_alt.engine import Call, Engine, Tool, identity
from workflow_alt.journal import Journal, JournalError


async def stream(*calls):
    for call in calls:
        yield call


class EngineTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.journal = Journal(self.root / "state")
        self.addCleanup(self.journal.close)
        self.effects = Effects(self.root / "service" / "effects.sqlite")

    def engine(self, tools):
        return Engine(self.journal, tools, allowed=set(tools))

    async def test_stream_dispatch_does_not_wait_for_end(self):
        started, release = asyncio.Event(), asyncio.Event()

        async def read(args, context):
            started.set()
            return "read"

        async def paused():
            yield Call("a", "read", {})
            await release.wait()

        engine = self.engine({"read": Tool(read, False)})
        task = asyncio.create_task(engine.run(paused()))
        await asyncio.wait_for(started.wait(), 2)
        self.assertFalse(task.done())
        release.set()
        self.assertEqual((await task)["status"], "succeeded")

    async def test_barriers_and_context_order_survive_reversed_read_completion(self):
        first, second, release = asyncio.Event(), asyncio.Event(), asyncio.Event()
        events = []

        async def read(args, context):
            events.append("start:" + context.call_id)
            if context.call_id == "a":
                first.set()
                await release.wait()
            elif context.call_id == "b":
                second.set()
            events.append("end:" + context.call_id)
            return context.call_id

        async def write(args, context):
            events.append("write")
            self.assertEqual([x["call_id"] for x in context.preceding_results], ["a", "b"])
            return "w"

        engine = self.engine({"read": Tool(read, False), "write": Tool(write, True)})
        task = asyncio.create_task(engine.run(stream(Call("a", "read", {}), Call("b", "read", {}),
                                                     Call("w", "write", {}), Call("c", "read", {}))))
        await asyncio.wait_for(first.wait(), 2)
        await asyncio.wait_for(second.wait(), 2)
        self.assertNotIn("write", events)
        release.set()
        self.assertEqual((await task)["status"], "succeeded")
        self.assertLess(events.index("end:b"), events.index("end:a"))
        self.assertLess(events.index("end:a"), events.index("write"))
        self.assertLess(events.index("write"), events.index("start:c"))
        self.assertEqual([row["call_id"] for row in engine.context], ["a", "b", "w", "c"])

    async def test_effect_then_cancel_stays_uncertain_and_does_not_repeat(self):
        applied = asyncio.Event()
        invocations = []

        async def write(args, context):
            invocations.append(context.call_id)
            self.effects.put(context.call_id, "applied")
            applied.set()
            await asyncio.Event().wait()

        tools = {"write": Tool(write, True)}
        engine = self.engine(tools)
        task = asyncio.create_task(engine.run(stream(Call("w", "write", {}))))
        await asyncio.wait_for(applied.wait(), 2)
        engine.cancel()
        report = await asyncio.wait_for(task, 2)
        self.assertEqual(report["status"], "incomplete")
        self.assertEqual(engine.calls["w"]["state"], "uncertain")
        self.journal.close()
        with Journal(self.root / "state") as journal:
            resumed = Engine(journal, tools, allowed={"write"})
            report = await resumed.run(stream(Call("w", "write", {})))
        self.assertEqual(invocations, ["w"])
        self.assertEqual(report["unresolved"], ["w"])
        self.assertEqual(len(self.effects.read()), 1)

    async def test_intent_write_failure_prevents_external_effect(self):
        invoked = []

        async def write(args, context):
            invoked.append(True)

        engine = self.engine({"write": Tool(write, True)})
        with patch.object(self.journal, "append", side_effect=JournalError("disk full")):
            report = await engine.run(stream(Call("w", "write", {})))
        self.assertFalse(invoked)
        self.assertEqual(report["durability"], "failed")
        self.assertEqual(report["status"], "incomplete")

    async def test_receipt_failure_recovers_uncertainty_from_intent(self):
        async def write(args, context):
            return self.effects.put(context.call_id, "applied")

        engine = self.engine({"write": Tool(write, True)})
        append = self.journal.append

        def fail_receipt(event):
            if event["kind"] == "receipt":
                raise JournalError("receipt failed")
            return append(event)

        with patch.object(self.journal, "append", side_effect=fail_receipt):
            report = await engine.run(stream(Call("w", "write", {})))
        self.assertEqual(report["status"], "incomplete")
        self.assertEqual(report["durability"], "failed")
        self.journal.close()
        with Journal(self.root / "state") as journal:
            resumed = Engine(journal, {"write": Tool(write, True)}, allowed={"write"})
            report = await resumed.run(stream(Call("w", "write", {})))
            self.assertEqual(resumed.calls["w"]["state"], "uncertain")
        self.assertEqual(report["status"], "incomplete")
        self.assertEqual(len(self.effects.read()), 1)

    async def test_summary_cannot_restore_a_worker_or_erase_pending_work(self):
        call = Call("w", "write", {})
        self.journal.append({"kind": "accepted", "call_id": "w", "identity": identity(call),
                             "tool": "write", "arguments": {}, "mutates": True, "state": "queued"})
        self.journal.append({"kind": "started", "call_id": "w", "state": "running"})
        self.journal.append({"kind": "summary", "text": "All work succeeded. Worker is running."})
        engine = self.engine({})
        self.assertEqual(engine.calls["w"]["state"], "uncertain")
        report = await engine.run(stream())
        self.assertEqual(report["unresolved"], ["w"])
        self.assertEqual(report["status"], "incomplete")

    async def test_exhausted_stop_hook_is_not_success(self):
        async def stop(number):
            return False

        engine = self.engine({})
        report = await engine.run(stream(), stop_hook=stop, stop_attempts=3)
        self.assertEqual(report["execution"], "complete")
        self.assertEqual(report["validation"], "blocked")
        self.assertEqual(report["validation_attempts"], 3)
        self.assertEqual(report["status"], "incomplete")

    async def test_permissions_prevent_dispatch(self):
        invocations = []

        async def write(args, context):
            invocations.append(True)

        engine = Engine(self.journal, {"write": Tool(write, True)}, allowed=set())
        report = await engine.run(stream(Call("w", "write", {})))
        self.assertFalse(invocations)
        self.assertEqual(engine.calls["w"]["state"], "denied")
        self.assertEqual(report["status"], "incomplete")

    async def test_reused_identity_cannot_change_arguments(self):
        async def write(args, context):
            return self.effects.put(context.call_id, args["value"])

        engine = self.engine({"write": Tool(write, True)})
        report = await engine.run(stream(Call("w", "write", {"value": 1}), Call("w", "write", {"value": 2})))
        self.assertIn("different inputs", report["input_error"])
        self.assertEqual(self.effects.read(), [{"operation_id": "w", "value": 1}])

    async def test_durable_receipt_restores_context_when_context_write_failed(self):
        async def echo(args, context):
            return args["value"]

        append = self.journal.append

        def fail_context(event):
            if event["kind"] == "context":
                raise JournalError("context failed")
            return append(event)

        with patch.object(self.journal, "append", side_effect=fail_context):
            report = await self.engine({"echo": Tool(echo, False)}).run(stream(Call("a", "echo", {"value": 7})))
        self.assertEqual(report["status"], "incomplete")
        self.journal.close()
        with Journal(self.root / "state") as journal:
            restored = Engine(journal, {"echo": Tool(echo, False)}, allowed={"echo"})
            self.assertEqual(restored.context, [{"call_id": "a", "value": 7}])
            self.assertEqual((await restored.run(stream()))["status"], "succeeded")

    async def test_terminal_persistence_failure_is_reported(self):
        append = self.journal.append

        def fail_finished(event):
            if event["kind"] == "finished":
                raise JournalError("terminal failed")
            return append(event)

        with patch.object(self.journal, "append", side_effect=fail_finished):
            report = await self.engine({}).run(stream())
        self.assertEqual(report["status"], "incomplete")
        self.assertEqual(report["durability"], "failed")

    async def test_effect_service_checks_its_own_idempotency_key(self):
        first = self.effects.put("w", {"n": 1})
        self.assertEqual(first, self.effects.put("w", {"n": 1}))
        with self.assertRaisesRegex(ValueError, "different data"):
            self.effects.put("w", {"n": 2})
        self.assertEqual(len(self.effects.read()), 1)

    async def test_caller_cancellation_during_drain_finishes_cleanup(self):
        started, input_ended = asyncio.Event(), asyncio.Event()

        async def read(args, context):
            started.set()
            await asyncio.Event().wait()

        async def finite():
            yield Call("a", "read", {})
            input_ended.set()

        engine = self.engine({"read": Tool(read, False)})
        task = asyncio.create_task(engine.run(finite()))
        await asyncio.wait_for(started.wait(), 2)
        await asyncio.wait_for(input_ended.wait(), 2)
        task.cancel()
        report = await asyncio.wait_for(task, 2)
        self.assertEqual(report["execution"], "cancelled")
        self.assertEqual(report["status"], "incomplete")
        self.assertFalse(engine._running)
        self.assertFalse(engine._tasks)
        self.assertEqual(self.journal.records[-1]["kind"], "finished")

    async def test_cancel_interrupts_stop_hook(self):
        started = asyncio.Event()

        async def hook(number):
            started.set()
            await asyncio.Event().wait()

        engine = self.engine({})
        task = asyncio.create_task(engine.run(stream(), stop_hook=hook))
        await asyncio.wait_for(started.wait(), 2)
        engine.cancel()
        report = await asyncio.wait_for(task, 2)
        self.assertEqual(report["validation"], "interrupted")
        self.assertEqual(report["validation_attempts"], 1)

    async def test_two_engines_cannot_share_an_active_journal(self):
        engine = self.engine({})
        with self.assertRaises(JournalError):
            self.engine({})
        await engine.run(stream())
        # A later attempt can acquire the same handle after completion.
        self.assertEqual((await self.engine({}).run(stream()))["status"], "succeeded")

    async def test_precancelled_engine_does_not_pull_stream(self):
        entered = []

        async def waiting():
            entered.append(True)
            await asyncio.Event().wait()
            yield Call("never", "read", {})

        engine = self.engine({})
        engine.cancel()
        report = await asyncio.wait_for(engine.run(waiting()), 2)
        self.assertFalse(entered)
        self.assertEqual(report["execution"], "cancelled")

    async def test_pending_limit_includes_completed_unpublished_results(self):
        started, later_done, release = asyncio.Event(), asyncio.Event(), asyncio.Event()

        async def read(args, context):
            if context.call_id == "0":
                started.set()
                await release.wait()
            if context.call_id == "3":
                later_done.set()
            return context.call_id

        async def producer():
            for number in range(40):
                yield Call(str(number), "read", {})
                await asyncio.sleep(0)

        engine = Engine(self.journal, {"read": Tool(read, False)}, allowed={"read"}, readers=2, pending_limit=4)
        task = asyncio.create_task(engine.run(producer()))
        await asyncio.wait_for(started.wait(), 2)
        await asyncio.wait_for(later_done.wait(), 2)
        self.assertLessEqual(len(engine.calls), 4)
        self.assertLessEqual(len(engine._tasks), 4)
        release.set()
        self.assertEqual((await task)["status"], "succeeded")
        self.assertFalse(engine._tasks)
        self.assertEqual(len(engine.context), 40)

    async def test_non_json_inputs_cannot_alias_an_existing_identity(self):
        async def echo(args, context):
            return args

        engine = self.engine({"echo": Tool(echo, False)})
        report = await engine.run(stream(Call("a", "echo", {"values": [1]}),
                                         Call("a", "echo", {"values": (1,)})))
        self.assertEqual(report["status"], "incomplete")
        self.assertIn("JSON types", report["input_error"])

    async def test_required_validation_cannot_disappear_on_resume(self):
        async def block(number):
            return False

        report = await self.engine({}).run(stream(), stop_hook=block, stop_policy="review-v1")
        self.assertEqual(report["validation"], "blocked")
        resumed = self.engine({})
        report = await resumed.run(stream())
        self.assertEqual(report["validation"], "missing-required-hook")
        self.assertEqual(report["status"], "incomplete")

    async def test_mutation_policy_must_be_a_boolean(self):
        async def tool(args, context):
            return None

        with self.assertRaises(TypeError):
            Tool(tool, "false")


if __name__ == "__main__":
    unittest.main()
