"""Process lifetime, protocol, and isolation contracts for the fixed worker."""

from __future__ import annotations

import asyncio
import os
from pathlib import Path
import signal
import sys
import tempfile
import unittest
from unittest.mock import patch

from workflow_alt import invocation
from workflow_alt.invocation import InvocationError, OutputLimitError, invoke
from workflow_alt.worker import MAX_INPUT_BYTES


@unittest.skipUnless(os.name == "posix", "Worker invocation requires POSIX")
class InvocationTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.temporary = tempfile.TemporaryDirectory(prefix="workflow-invocation-")
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.cwd = self.root / "working directory with spaces café"
        self.cwd.mkdir()

    def assert_reaped(self, pid: int) -> None:
        with self.assertRaises(ProcessLookupError):
            os.kill(pid, 0)
        with self.assertRaises(ProcessLookupError):
            os.killpg(pid, 0)
        with self.assertRaises(ChildProcessError):
            os.waitpid(pid, os.WNOHANG)

    async def cancel_and_wait(self, task: asyncio.Task) -> None:
        if not task.done():
            task.cancel()
        await asyncio.gather(task, return_exceptions=True)

    def fixture(self, body: str) -> Path:
        path = self.root / "replacement worker.py"
        path.write_text("import json, os, sys, time\n" + body + "\n", encoding="utf-8")
        return path

    async def test_literal_data_and_arbitrary_cwd(self) -> None:
        value = {"text": "café 雪 ; $(touch injected) `touch injected` & | > injected\n'\"",
                 "args": ["--help", "$HOME", "*.py", "", None, True, 1.25]}
        pids = []
        response = await invoke({"value": value}, cwd=self.cwd, started=pids.append)
        self.assertEqual(response, {"value": value, "cwd": str(self.cwd), "pid": pids[0]})
        self.assertFalse((self.cwd / "injected").exists())
        self.assert_reaped(pids[0])

    async def test_isolated_imports_ignore_cwd_and_pythonpath(self) -> None:
        for name in ("json.py", "sitecustomize.py"):
            (self.cwd / name).write_text("raise RuntimeError('ambient import executed')\n")
        with patch.dict(os.environ, {"PYTHONPATH": str(self.cwd), "PYTHONHOME": str(self.cwd)}):
            response = await invoke({"value": 7}, cwd=self.cwd)
        self.assertEqual(response["value"], 7)
        self.assert_reaped(response["pid"])

    async def test_child_does_not_inherit_credentials_or_python_environment(self) -> None:
        path = self.fixture(
            "request = json.load(sys.stdin)\n"
            "value = {'secret': os.environ.get('WORKFLOW_TEST_SECRET'),\n"
            "         'pythonpath': os.environ.get('PYTHONPATH'),\n"
            "         'isolated': bool(sys.flags.isolated)}\n"
            "json.dump({'value': value, 'cwd': os.getcwd(), 'pid': os.getpid()}, sys.stdout)"
        )
        value = {"secret": None, "pythonpath": None, "isolated": True}
        with patch.object(invocation, "_WORKER_PATH", path), patch.dict(
            os.environ, {"WORKFLOW_TEST_SECRET": "test-only", "PYTHONPATH": str(self.cwd)}
        ):
            response = await invoke({"value": value}, cwd=self.cwd)
        self.assertEqual(response["value"], value)
        self.assert_reaped(response["pid"])

    async def test_worker_has_its_own_process_session(self) -> None:
        pids = []

        def started(pid: int) -> None:
            pids.append(pid)
            self.assertEqual(os.getsid(pid), pid)
            self.assertEqual(os.getpgid(pid), pid)
            self.assertNotEqual(os.getpgid(pid), os.getpgrp())

        await invoke({"value": None}, cwd=self.cwd, started=started)
        self.assert_reaped(pids[0])

    async def test_timeout_kills_and_reaps_the_worker(self) -> None:
        pids = []
        with self.assertRaises(TimeoutError):
            await invoke({"value": 1, "wait_seconds": 30}, cwd=self.cwd,
                         timeout=2, started=pids.append)
        self.assertEqual(len(pids), 1)
        self.assert_reaped(pids[0])

    async def test_cancellation_after_start_kills_and_reaps_the_worker(self) -> None:
        acknowledged = asyncio.Event()
        pids = []

        def started(pid: int) -> None:
            pids.append(pid)
            acknowledged.set()

        task = asyncio.create_task(invoke({"value": 1, "wait_seconds": 30},
                                          cwd=self.cwd, started=started))
        self.addAsyncCleanup(self.cancel_and_wait, task)
        await asyncio.wait_for(acknowledged.wait(), 10)
        task.cancel()
        with self.assertRaises(asyncio.CancelledError):
            await asyncio.wait_for(task, 10)
        self.assert_reaped(pids[0])

    async def test_cancellation_during_creation_does_not_lose_the_worker(self) -> None:
        created, release = asyncio.Event(), asyncio.Event()
        pids, acknowledgments = [], []
        create = asyncio.create_subprocess_exec

        async def delayed_create(*args, **kwargs):
            process = await create(*args, **kwargs)
            pids.append(process.pid)
            created.set()
            await release.wait()
            return process

        with patch.object(invocation.asyncio, "create_subprocess_exec", delayed_create):
            task = asyncio.create_task(invoke({"value": 1}, cwd=self.cwd,
                                              started=acknowledgments.append))
            self.addAsyncCleanup(self.cancel_and_wait, task)
            try:
                await asyncio.wait_for(created.wait(), 10)
                task.cancel()
                await asyncio.sleep(0)
                self.assertFalse(task.done())
            finally:
                release.set()
            with self.assertRaises(asyncio.CancelledError):
                await asyncio.wait_for(task, 10)
        self.assertEqual(acknowledgments, [])
        self.assert_reaped(pids[0])

    async def test_repeated_cancellation_cannot_interrupt_cleanup(self) -> None:
        acknowledged, cleaning, release = asyncio.Event(), asyncio.Event(), asyncio.Event()
        pids = []
        cleanup = invocation._cleanup

        def started(pid: int) -> None:
            pids.append(pid)
            acknowledged.set()

        async def delayed_cleanup(*args, **kwargs):
            cleaning.set()
            await release.wait()
            await cleanup(*args, **kwargs)

        with patch.object(invocation, "_cleanup", delayed_cleanup):
            task = asyncio.create_task(invoke({"value": 1, "wait_seconds": 30},
                                              cwd=self.cwd, started=started))
            self.addAsyncCleanup(self.cancel_and_wait, task)
            try:
                await asyncio.wait_for(acknowledged.wait(), 10)
                task.cancel()
                await asyncio.wait_for(cleaning.wait(), 10)
                task.cancel()
                await asyncio.sleep(0)
                self.assertFalse(task.done())
            finally:
                release.set()
            with self.assertRaises(asyncio.CancelledError):
                await asyncio.wait_for(task, 10)
        self.assert_reaped(pids[0])

    async def test_callback_failure_still_kills_and_reaps_the_worker(self) -> None:
        pids = []

        def fail(pid: int) -> None:
            pids.append(pid)
            raise LookupError("callback failed")

        with self.assertRaisesRegex(LookupError, "callback failed"):
            await invoke({"value": 1, "wait_seconds": 30}, cwd=self.cwd, started=fail)
        self.assert_reaped(pids[0])

    async def test_output_limit_kills_and_reaps_the_worker(self) -> None:
        pids = []
        with self.assertRaises(OutputLimitError):
            await invoke({"value": "x" * 100000}, cwd=self.cwd,
                         output_limit=128, started=pids.append)
        self.assert_reaped(pids[0])

    async def test_combined_output_limit_counts_both_pipes(self) -> None:
        path = self.fixture("os.write(1, b'a' * 100)\nos.write(2, b'b' * 100)\ntime.sleep(30)")
        pids = []
        with patch.object(invocation, "_WORKER_PATH", path), self.assertRaises(OutputLimitError):
            await invoke({"value": 1}, cwd=self.cwd, output_limit=150, started=pids.append)
        self.assert_reaped(pids[0])

    async def test_stderr_flood_cannot_block_stdout_collection(self) -> None:
        path = self.fixture("os.write(2, b'x' * 1048576)\ntime.sleep(30)")
        pids = []
        with patch.object(invocation, "_WORKER_PATH", path), self.assertRaises(OutputLimitError):
            await invoke({"value": 1}, cwd=self.cwd, output_limit=128, started=pids.append)
        self.assert_reaped(pids[0])

    async def test_nonzero_exit_is_an_invocation_failure(self) -> None:
        path = self.fixture("sys.exit(3)")
        pids = []
        with patch.object(invocation, "_WORKER_PATH", path), self.assertRaisesRegex(
            InvocationError, "status 3"
        ):
            await invoke({"value": "x" * 100000}, cwd=self.cwd, started=pids.append)
        self.assert_reaped(pids[0])

    async def test_malformed_responses_are_rejected(self) -> None:
        for response in (b"{", b"[]", b"{}", b"\xff", b"{}\n{}"):
            with self.subTest(response=response):
                path = self.fixture(f"sys.stdout.buffer.write({response!r})")
                pids = []
                with patch.object(invocation, "_WORKER_PATH", path), self.assertRaisesRegex(
                    InvocationError, "invalid response"
                ):
                    await invoke({"value": 1}, cwd=self.cwd, started=pids.append)
                self.assert_reaped(pids[0])

    async def test_response_must_match_value_directory_and_process(self) -> None:
        alterations = ("response['value'] = True", "response['value'] = 1.0",
                       "response['cwd'] = '/'", "response['pid'] = 0",
                       "response['extra'] = 1", "response['value'] = float('nan')")
        for alteration in alterations:
            with self.subTest(alteration=alteration):
                path = self.fixture(
                    "request = json.load(sys.stdin)\n"
                    "response = {'value': request['value'], 'cwd': os.getcwd(), 'pid': os.getpid()}\n"
                    + alteration + "\njson.dump(response, sys.stdout)"
                )
                pids = []
                with patch.object(invocation, "_WORKER_PATH", path), self.assertRaisesRegex(
                    InvocationError, "invalid response"
                ):
                    await invoke({"value": 1}, cwd=self.cwd, started=pids.append)
                self.assert_reaped(pids[0])

    async def test_invalid_requests_do_not_start_a_process(self) -> None:
        invalid = [None, {}, {"value": 1, "command": "echo test"},
                   {"value": (1, 2)}, {"value": {1: "key"}}, {"value": float("nan")},
                   {"value": "\ud800"}, {"value": "x" * MAX_INPUT_BYTES}]
        invalid.extend({"value": 1, "wait_seconds": wait}
                       for wait in (-1, 31, True, "1", float("nan"), float("inf")))
        with patch.object(invocation.asyncio, "create_subprocess_exec") as create:
            for payload in invalid:
                with self.subTest(kind=type(payload).__name__), self.assertRaises(ValueError):
                    await invoke(payload, cwd=self.cwd)
            create.assert_not_called()

    async def test_invalid_limits_do_not_start_a_process(self) -> None:
        with patch.object(invocation.asyncio, "create_subprocess_exec") as create:
            for timeout in (0, -1, True, "1", float("nan"), float("inf"), 10 ** 1000):
                with self.subTest(timeout=timeout), self.assertRaises(ValueError):
                    await invoke({"value": 1}, cwd=self.cwd, timeout=timeout)
            for limit in (0, -1, True, 1.5, "1"):
                with self.subTest(output_limit=limit), self.assertRaises(ValueError):
                    await invoke({"value": 1}, cwd=self.cwd, output_limit=limit)
            create.assert_not_called()

    async def test_missing_cwd_does_not_start_a_process(self) -> None:
        with patch.object(invocation.asyncio, "create_subprocess_exec") as create:
            with self.assertRaises(FileNotFoundError):
                await invoke({"value": 1}, cwd=self.root / "missing")
            create.assert_not_called()

    async def test_creation_error_is_preserved(self) -> None:
        async def fail(*args, **kwargs):
            raise OSError("cannot create worker")

        with patch.object(invocation.asyncio, "create_subprocess_exec", fail):
            with self.assertRaisesRegex(OSError, "cannot create worker"):
                await invoke({"value": 1}, cwd=self.cwd)

    async def test_standalone_worker_rejects_bad_requests(self) -> None:
        requests = (b"{", b"{}", b"[]", b'{"value":NaN}',
                    b'{"value":1,"wait_seconds":31}', b'{"value":1,"command":"echo test"}',
                    b" " * (MAX_INPUT_BYTES + 1))
        for request in requests:
            with self.subTest(bytes=len(request)):
                process = await asyncio.create_subprocess_exec(
                    str(Path(sys.executable).resolve()), "-I", str(invocation._WORKER_PATH),
                    cwd=self.cwd, start_new_session=True,
                    stdin=asyncio.subprocess.PIPE, stdout=asyncio.subprocess.PIPE,
                    stderr=asyncio.subprocess.PIPE,
                )
                try:
                    stdout, stderr = await asyncio.wait_for(process.communicate(request), 10)
                    self.assertEqual(process.returncode, 2)
                    self.assertEqual(stdout, b"")
                    self.assertEqual(stderr, b"Worker could not process the JSON request\n")
                finally:
                    if process.returncode is None:
                        os.killpg(process.pid, signal.SIGKILL)
                    await process.communicate()
                self.assert_reaped(process.pid)


if __name__ == "__main__":
    unittest.main()
