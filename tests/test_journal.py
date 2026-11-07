"""Durability and integrity contracts for the standalone JSON journal."""

from __future__ import annotations

import errno
import hashlib
import json
import os
from pathlib import Path
import stat
import subprocess
import sys
import tempfile
import threading
import unittest
from unittest import mock

from workflow_alt import journal as journal_module
from workflow_alt.journal import Journal, JournalBusy, JournalError, snapshot


def canonical(value: dict) -> bytes:
    return json.dumps(
        value, ensure_ascii=False, sort_keys=True, separators=(",", ":"), allow_nan=False
    ).encode("utf-8")


class JournalTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temporary = tempfile.TemporaryDirectory(prefix="workflow-journal-test-")
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name) / "journal"
        self.path = self.root / "journal.jsonl"

    def test_hash_chain_and_reopen(self) -> None:
        with Journal(self.root) as journal:
            self.assertEqual(journal.root, self.root)
            first = journal.append({"event": "started", "text": "café\nnext"})
            second = journal.append({"event": "finished", "success": True})
            self.assertEqual(first["seq"], 1)
            self.assertEqual(first["prev_sha256"], "0" * 64)
            self.assertEqual(second["seq"], 2)
            self.assertEqual(second["prev_sha256"], first["sha256"])
            for row in (first, second):
                unsigned = {key: value for key, value in row.items() if key != "sha256"}
                self.assertEqual(row["sha256"], hashlib.sha256(canonical(unsigned)).hexdigest())
            self.assertEqual(self.path.read_bytes(), canonical(first) + b"\n" + canonical(second) + b"\n")
        with Journal(self.root) as reopened:
            self.assertEqual(reopened.records, [first, second])
            self.assertEqual(reopened.append({"event": "again"})["seq"], 3)

    def test_records_and_append_result_do_not_share_caller_data(self) -> None:
        event = {"items": [{"value": 7}], "options": {"enabled": True}}
        with Journal(self.root) as journal:
            returned = journal.append(event)
            event["items"][0]["value"] = 8
            returned["items"][0]["value"] = 9
            returned["sha256"] = "changed"
            snapshot = journal.records
            snapshot[0]["options"]["enabled"] = False
            snapshot.clear()
            second = journal.append({"event": "next"})
            rows = journal.records
            self.assertEqual(rows[0]["items"], [{"value": 7}])
            self.assertTrue(rows[0]["options"]["enabled"])
            self.assertEqual(second["prev_sha256"], rows[0]["sha256"])
        self.assertEqual(journal.records, rows)
        with Journal(self.root) as reopened:
            self.assertEqual(reopened.records, rows)

    def test_snapshot_copies_strict_json_without_a_writer(self) -> None:
        value = {"nested": [{"number": 7}], "plain": [None, False, 1.25, "café"]}
        with mock.patch.object(
            journal_module.fcntl, "flock", side_effect=AssertionError("snapshot acquired a writer")
        ), mock.patch.object(
            journal_module.os, "write", side_effect=AssertionError("snapshot wrote a file")
        ), mock.patch.object(
            journal_module.os, "fsync", side_effect=AssertionError("snapshot synced a file")
        ):
            copied = snapshot(value)
            self.assertEqual(copied, value)
            copied["nested"][0]["number"] = 8
            self.assertEqual(value["nested"][0]["number"], 7)
            for scalar in (None, True, 3, 1.25, "text"):
                result = snapshot(scalar)
                self.assertEqual(result, scalar)
                self.assertIs(type(result), type(scalar))
            for invalid in ((1, 2), {1: "value"}, {"value": float("nan")}, float("inf")):
                with self.subTest(invalid=repr(invalid)), self.assertRaises(JournalError):
                    snapshot(invalid)
        self.assertFalse(self.root.exists())

    def test_envelope_fields_are_reserved_without_poisoning_writer(self) -> None:
        with Journal(self.root) as journal:
            for field in ("seq", "prev_sha256", "sha256"):
                with self.subTest(field=field), self.assertRaises(JournalError):
                    journal.append({field: "caller value"})
            self.assertEqual(self.path.read_bytes(), b"")
            self.assertEqual(journal.append({"event": "valid"})["seq"], 1)

    def test_only_json_types_and_finite_numbers_are_accepted(self) -> None:
        cyclic: list = []
        cyclic.append(cyclic)
        invalid = [
            [], {"value": float("nan")}, {"value": float("inf")},
            {"value": float("-inf")}, {"value": (1, 2)}, {1: "integer key"},
            {"value": b"bytes"}, {"value": {1, 2}}, {"value": cyclic},
            {"value": "\ud800"},
        ]
        with Journal(self.root) as journal:
            for event in invalid:
                with self.subTest(kind=type(event).__name__), self.assertRaises(JournalError):
                    journal.append(event)
            self.assertEqual(self.path.read_bytes(), b"")
            row = journal.append({"values": [None, False, 0, 1.25, "text", [], {}]})
            self.assertEqual(row["seq"], 1)

    def test_second_handle_is_busy_and_close_releases_lock(self) -> None:
        first = Journal(self.root)
        self.addCleanup(first.close)
        row = first.append({"event": "first"})
        with self.assertRaises(JournalBusy):
            Journal(self.root)
        self.assertEqual(first.records, [row])
        first.close()
        first.close()
        with Journal(self.root) as second:
            self.assertEqual(second.append({"event": "second"})["seq"], 2)
        with self.assertRaises(JournalError):
            first.append({"event": "after close"})

    def test_claim_rejects_competitors_and_reentry(self) -> None:
        owner, competitor = object(), object()
        with Journal(self.root) as journal:
            journal.claim(owner)
            with self.assertRaises(JournalBusy):
                journal.claim(owner)
            with self.assertRaises(JournalBusy):
                journal.claim(competitor)
            journal.release(owner)
            journal.claim(competitor)
            journal.release(competitor)
            self.assertEqual(journal.records, [])
            self.assertEqual(self.path.read_bytes(), b"")

    def test_release_matches_identity_and_preserves_another_claim(self) -> None:
        class Owner:
            def __eq__(self, other: object) -> bool:
                raise AssertionError("owner comparison must not call equality")

        owner, other = Owner(), Owner()
        with Journal(self.root) as journal:
            with self.assertRaises(JournalBusy):
                journal.release(owner)
            journal.claim(owner)
            with self.assertRaises(JournalBusy):
                journal.release(other)
            with self.assertRaises(JournalBusy):
                journal.claim(other)
            journal.release(owner)
            with self.assertRaises(JournalBusy):
                journal.release(owner)
            journal.claim(other)
            journal.release(other)

    def test_none_is_a_valid_owner_token(self) -> None:
        with Journal(self.root) as journal:
            journal.claim(None)
            with self.assertRaises(JournalBusy):
                journal.claim(None)
            with self.assertRaises(JournalBusy):
                journal.release(object())
            journal.release(None)
            with self.assertRaises(JournalBusy):
                journal.release(None)

    def test_competing_threads_acquire_only_one_claim(self) -> None:
        tokens = [object() for _ in range(4)]
        start = threading.Barrier(len(tokens))
        outcomes = []
        failures = []
        result_lock = threading.Lock()
        with Journal(self.root) as journal:
            def attempt(token: object) -> None:
                try:
                    start.wait(timeout=10)
                    journal.claim(token)
                except JournalBusy:
                    with result_lock:
                        outcomes.append((False, token))
                except BaseException as error:
                    with result_lock:
                        failures.append(error)
                else:
                    with result_lock:
                        outcomes.append((True, token))

            threads = [threading.Thread(target=attempt, args=(token,), daemon=True) for token in tokens]
            for thread in threads:
                thread.start()
            for thread in threads:
                thread.join(timeout=10)
                self.assertFalse(thread.is_alive())
            self.assertEqual(failures, [])
            winners = [token for success, token in outcomes if success]
            self.assertEqual(len(winners), 1)
            self.assertEqual(sum(not success for success, _ in outcomes), 3)
            journal.release(winners[0])
            journal.claim(tokens[0])
            journal.release(tokens[0])

    def test_close_clears_claim_and_stays_idempotent(self) -> None:
        owner = object()
        journal = Journal(self.root)
        self.addCleanup(journal.close)
        journal.claim(owner)
        durable = journal.append({"event": "durable"})
        journal.close()
        journal.close()
        with self.assertRaises(JournalBusy):
            journal.release(owner)
        with self.assertRaises(JournalError):
            journal.claim(owner)
        self.assertEqual(journal.records, [durable])
        with Journal(self.root) as reopened:
            reopened.claim(owner)
            self.assertEqual(reopened.records, [durable])
        with self.assertRaises(JournalBusy):
            reopened.release(owner)

    def test_append_failure_does_not_release_claim(self) -> None:
        owner, competitor = object(), object()
        with Journal(self.root) as journal:
            journal.claim(owner)
            with mock.patch.object(
                journal_module.os, "write", side_effect=OSError(errno.ENOSPC, "disk full")
            ):
                with self.assertRaises(JournalError):
                    journal.append({"event": "failed"})
            with self.assertRaises(JournalBusy):
                journal.claim(competitor)
            with self.assertRaises(JournalBusy):
                journal.release(competitor)
            journal.release(owner)
            with self.assertRaises(JournalError):
                journal.claim(competitor)
            self.assertEqual(journal.records, [])

    def test_another_process_cannot_write(self) -> None:
        program = (
            "from pathlib import Path\n"
            "import sys\n"
            "from workflow_alt.journal import Journal, JournalBusy\n"
            "try:\n"
            "    with Journal(Path(sys.argv[1])):\n"
            "        raise SystemExit(3)\n"
            "except JournalBusy:\n"
            "    raise SystemExit(0)\n"
        )
        with Journal(self.root):
            completed = subprocess.run(
                [sys.executable, "-c", program, str(self.root)],
                cwd=Path(__file__).resolve().parents[1], capture_output=True, timeout=10,
            )
        self.assertEqual(completed.returncode, 0, completed.stderr.decode())

    def test_inherited_handle_cannot_append(self) -> None:
        owner = object()
        with Journal(self.root) as journal:
            with mock.patch.object(journal_module.os, "getpid", return_value=os.getpid() + 1):
                with self.assertRaises(JournalBusy):
                    journal.append({"event": "wrong process"})
                with self.assertRaises(JournalBusy):
                    journal.claim(owner)
            journal.claim(owner)
            self.assertEqual(journal.append({"event": "owner"})["seq"], 1)
            journal.release(owner)

    def test_threads_share_one_contiguous_sequence(self) -> None:
        failures = []
        with Journal(self.root) as journal:
            def write(index: int) -> None:
                try:
                    for number in range(10):
                        journal.append({"writer": index, "number": number})
                except BaseException as error:
                    failures.append(error)

            threads = [threading.Thread(target=write, args=(index,)) for index in range(3)]
            for thread in threads:
                thread.start()
            for thread in threads:
                thread.join(timeout=10)
                self.assertFalse(thread.is_alive())
            self.assertEqual(failures, [])
            self.assertEqual([row["seq"] for row in journal.records], list(range(1, 31)))
        with Journal(self.root) as reopened:
            self.assertEqual(len(reopened.records), 30)

    def test_truncated_tail_is_rejected_and_preserved(self) -> None:
        with Journal(self.root) as journal:
            journal.append({"event": "durable"})
        original = self.path.read_bytes()
        for tail in (b'{"event":', b" ", canonical({"event": "no newline"})):
            damaged = original + tail
            self.path.write_bytes(damaged)
            with self.subTest(tail=tail), self.assertRaises(JournalError):
                Journal(self.root)
            self.assertEqual(self.path.read_bytes(), damaged)
        self.path.write_bytes(original)
        with Journal(self.root) as reopened:
            self.assertEqual(len(reopened.records), 1)

    def test_missing_newline_on_complete_row_is_rejected(self) -> None:
        with Journal(self.root) as journal:
            journal.append({"event": "row"})
        damaged = self.path.read_bytes().removesuffix(b"\n")
        self.path.write_bytes(damaged)
        with self.assertRaises(JournalError):
            Journal(self.root)
        self.assertEqual(self.path.read_bytes(), damaged)

    def test_corruption_reordering_and_sequence_gaps_are_rejected(self) -> None:
        with Journal(self.root) as journal:
            first = journal.append({"event": "first"})
            second = journal.append({"event": "second"})
        original = self.path.read_bytes()
        tampered = dict(first, event="changed")
        broken_link = dict(second, prev_sha256="0" * 64)
        broken_link["sha256"] = hashlib.sha256(canonical({
            key: value for key, value in broken_link.items() if key != "sha256"
        })).hexdigest()
        bad_seq = dict(first, seq=True)
        bad_seq["sha256"] = hashlib.sha256(canonical({
            key: value for key, value in bad_seq.items() if key != "sha256"
        })).hexdigest()
        invalid = [
            canonical(tampered) + b"\n" + canonical(second) + b"\n",
            canonical(second) + b"\n" + canonical(first) + b"\n",
            canonical(second) + b"\n",
            canonical(first) + b"\n" + canonical(first) + b"\n",
            canonical(first) + b"\n" + canonical(broken_link) + b"\n",
            canonical(bad_seq) + b"\n",
            original + b"garbage\n",
            b"\xff\n", b"[]\n", b"{}\n", b"\n",
            b'{"value":NaN}\n',
            b'{"value":1,"value":2}\n',
            json.dumps(first).encode() + b"\n",
        ]
        for damaged in invalid:
            self.path.write_bytes(damaged)
            with self.subTest(damaged=damaged[:80]), self.assertRaises(JournalError):
                Journal(self.root)
            self.assertEqual(self.path.read_bytes(), damaged)
        self.path.write_bytes(original)
        with Journal(self.root) as reopened:
            self.assertEqual(reopened.records, [first, second])

    def test_append_fsyncs_before_acknowledgment(self) -> None:
        with Journal(self.root) as journal:
            actual_fsync = os.fsync
            observed = []

            def inspect_fsync(descriptor: int) -> None:
                observed.append((self.path.read_bytes(), journal.records))
                actual_fsync(descriptor)

            with mock.patch.object(journal_module.os, "fsync", side_effect=inspect_fsync):
                row = journal.append({"event": "committed"})
            self.assertEqual(observed, [(canonical(row) + b"\n", [])])
            self.assertEqual(journal.records, [row])

    def test_new_directories_and_file_are_synced(self) -> None:
        root = self.root / "nested"
        actual_sync_directory = journal_module._sync_directory
        actual_fsync = os.fsync
        synced_paths = []
        synced_modes = []

        def sync_directory(path: Path) -> None:
            synced_paths.append(path)
            actual_sync_directory(path)

        def inspect_fsync(descriptor: int) -> None:
            synced_modes.append(os.fstat(descriptor).st_mode)
            actual_fsync(descriptor)

        with mock.patch.object(journal_module, "_sync_directory", side_effect=sync_directory):
            with mock.patch.object(journal_module.os, "fsync", side_effect=inspect_fsync):
                with Journal(root):
                    pass
        self.assertEqual(synced_paths, [self.root.parent, self.root, root])
        self.assertTrue(any(stat.S_ISREG(mode) for mode in synced_modes))
        self.assertEqual(sum(stat.S_ISDIR(mode) for mode in synced_modes), 3)

    def test_short_writes_are_completed(self) -> None:
        actual_write = os.write
        with Journal(self.root) as journal:
            with mock.patch.object(
                journal_module.os, "write",
                side_effect=lambda descriptor, data: actual_write(descriptor, data[:7]),
            ):
                row = journal.append({"event": "short writes", "payload": "x" * 100})
            self.assertEqual(self.path.read_bytes(), canonical(row) + b"\n")
        with Journal(self.root) as reopened:
            self.assertEqual(reopened.records, [row])

    def test_write_failure_poisoning_preserves_acknowledged_records(self) -> None:
        with Journal(self.root) as journal:
            durable = journal.append({"event": "durable"})
            before = self.path.read_bytes()
            with mock.patch.object(
                journal_module.os, "write", side_effect=OSError(errno.ENOSPC, "disk full")
            ):
                with self.assertRaises(JournalError):
                    journal.append({"event": "uncertain"})
            self.assertEqual(journal.records, [durable])
            with self.assertRaises(JournalError):
                journal.append({"event": "must not write"})
            self.assertEqual(self.path.read_bytes(), before)
        with Journal(self.root) as reopened:
            self.assertEqual(reopened.records, [durable])
            self.assertEqual(reopened.append({"event": "recovered"})["seq"], 2)

    def test_partial_write_failure_leaves_rejected_tail(self) -> None:
        actual_write = os.write
        with Journal(self.root) as journal:
            durable = journal.append({"event": "durable"})
            calls = 0

            def failing_write(descriptor: int, data: memoryview) -> int:
                nonlocal calls
                calls += 1
                if calls == 1:
                    return actual_write(descriptor, data[:13])
                raise OSError(errno.ENOSPC, "disk full")

            with mock.patch.object(journal_module.os, "write", side_effect=failing_write):
                with self.assertRaises(JournalError):
                    journal.append({"event": "partial"})
            self.assertEqual(journal.records, [durable])
            damaged = self.path.read_bytes()
            with self.assertRaises(JournalError):
                journal.append({"event": "must not write"})
            self.assertEqual(self.path.read_bytes(), damaged)
        with self.assertRaises(JournalError):
            Journal(self.root)
        self.assertEqual(self.path.read_bytes(), damaged)

    def test_fsync_failure_preserves_uncertainty_until_reopen(self) -> None:
        with Journal(self.root) as journal:
            durable = journal.append({"event": "durable"})
            with mock.patch.object(
                journal_module.os, "fsync", side_effect=OSError(errno.EIO, "disk error")
            ):
                with self.assertRaises(JournalError):
                    journal.append({"event": "unacknowledged"})
            self.assertEqual(journal.records, [durable])
            on_disk = self.path.read_bytes()
            with self.assertRaises(JournalError):
                journal.append({"event": "must not write"})
            self.assertEqual(self.path.read_bytes(), on_disk)
        with Journal(self.root) as reopened:
            self.assertEqual([row["event"] for row in reopened.records], ["durable", "unacknowledged"])
            self.assertEqual(reopened.append({"event": "after verification"})["seq"], 3)

    def test_failed_open_releases_lock(self) -> None:
        with Journal(self.root):
            pass
        with mock.patch.object(
            journal_module.os, "fsync", side_effect=OSError(errno.EIO, "disk error")
        ):
            with self.assertRaises(JournalError):
                Journal(self.root)
        with Journal(self.root) as reopened:
            self.assertEqual(reopened.records, [])

    def test_symlink_journal_is_rejected(self) -> None:
        self.root.mkdir()
        other = self.root / "other.jsonl"
        other.write_bytes(b"")
        self.path.symlink_to(other)
        with self.assertRaises(JournalError):
            Journal(self.root)
        self.assertEqual(other.read_bytes(), b"")


if __name__ == "__main__":
    unittest.main()
