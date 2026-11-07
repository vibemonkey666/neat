"""An append-only JSON journal with one writer and explicit durability failures.

The journal uses POSIX advisory locks. All writers must use this implementation
or respect its lock. Each hash covers canonical JSON without the ``sha256``
field. A failed append can leave an unacknowledged row or a partial final row;
the caller must preserve that uncertainty. This module never repairs a file.
"""

from __future__ import annotations

import copy
import errno
import fcntl
import hashlib
import json
import math
import os
from pathlib import Path
import stat
import threading
from typing import Any


class JournalError(RuntimeError):
    """The journal cannot accept or verify an operation."""


class JournalBusy(JournalError):
    """Another writer holds the journal, or this handle belongs to a parent."""


_ENVELOPE = frozenset({"seq", "prev_sha256", "sha256"})
_GENESIS_HASH = "0" * 64
_NO_CLAIM = object()


def _validate_json(value: Any, ancestors: set[int] | None = None) -> None:
    """Accept plain JSON values, with string keys and finite numbers only."""
    kind = type(value)
    if value is None or kind in (bool, int, str):
        return
    if kind is float:
        if not math.isfinite(value):
            raise JournalError("journal values must contain only finite numbers")
        return
    if kind not in (dict, list):
        raise JournalError("journal values must contain only JSON types")
    if ancestors is None:
        ancestors = set()
    identity = id(value)
    if identity in ancestors:
        raise JournalError("journal values must not contain cycles")
    ancestors.add(identity)
    try:
        if kind is dict:
            for key, child in value.items():
                if type(key) is not str:
                    raise JournalError("journal object keys must be strings")
                _validate_json(child, ancestors)
        else:
            for child in value:
                _validate_json(child, ancestors)
    finally:
        ancestors.remove(identity)


def _canonical(value: Any) -> bytes:
    return json.dumps(
        value, ensure_ascii=False, sort_keys=True, separators=(",", ":"), allow_nan=False
    ).encode("utf-8")


def snapshot(value: Any) -> Any:
    """Return an independent JSON copy without opening or writing a journal.

    Only plain JSON types, string object keys, and finite numbers are accepted.
    Serialization uses the journal's canonical representation.
    """
    try:
        _validate_json(value)
        return json.loads(_canonical(value))
    except JournalError:
        raise
    except (ValueError, TypeError, UnicodeError, RecursionError) as error:
        raise JournalError("value cannot be encoded as JSON") from error


def _unique_object(pairs: list[tuple[str, Any]]) -> dict[str, Any]:
    value: dict[str, Any] = {}
    for key, child in pairs:
        if key in value:
            raise JournalError("journal contains a duplicate object key")
        value[key] = child
    return value


def _sync_directory(path: Path) -> None:
    descriptor = os.open(path, os.O_RDONLY | os.O_DIRECTORY | os.O_CLOEXEC)
    try:
        os.fsync(descriptor)
    finally:
        os.close(descriptor)


def _make_directory(path: Path) -> None:
    try:
        path.mkdir(mode=0o700)
    except FileNotFoundError:
        _make_directory(path.parent)
        _make_directory(path)
    except FileExistsError:
        if not path.is_dir():
            raise JournalError("journal directory is not a directory")
    else:
        # Persist each newly created directory's entry in its parent.
        _sync_directory(path.parent)


class Journal:
    """Hold an exclusive lock on ``directory/journal.jsonl`` until close().

    Sequence numbers start at one. The first row's ``prev_sha256`` is 64 zeroes.
    ``records`` and append results are copies. They remain available after close
    or a failed write, but exclude rows this instance did not acknowledge.
    Reopening verifies the complete file, including any unacknowledged tail.
    Engines sharing this handle must claim it before reading or recovering work.
    A claim lasts until its owner releases it or the handle closes.
    """

    def __init__(self, directory: Path):
        self.root = Path(directory).resolve()
        self._records: list[dict[str, Any]] = []
        self._descriptor: int | None = None
        self._closed = False
        self._poisoned = False
        self._owner_pid = os.getpid()
        self._claim_owner: object = _NO_CLAIM
        self._mutex = threading.RLock()
        try:
            _make_directory(self.root)
            flags = os.O_RDWR | os.O_APPEND | os.O_CREAT | os.O_CLOEXEC | os.O_NOFOLLOW
            self._descriptor = os.open(self.root / "journal.jsonl", flags, 0o600)
            if not stat.S_ISREG(os.fstat(self._descriptor).st_mode):
                raise JournalError("journal file must be a regular file")
            try:
                fcntl.flock(self._descriptor, fcntl.LOCK_EX | fcntl.LOCK_NB)
            except OSError as error:
                if error.errno in (errno.EACCES, errno.EAGAIN):
                    raise JournalBusy("another writer holds this journal") from error
                raise
            self._load()
            # Also persist a file created by a writer that lost the lock race.
            os.fsync(self._descriptor)
            _sync_directory(self.root)
        except BaseException as error:
            self._closed = True
            if self._descriptor is not None:
                descriptor, self._descriptor = self._descriptor, None
                try:
                    os.close(descriptor)
                except OSError:
                    pass
            if isinstance(error, JournalError):
                raise
            if isinstance(error, Exception):
                raise JournalError("cannot open or verify journal") from error
            raise

    @property
    def records(self) -> list[dict[str, Any]]:
        """Return an independent copy of rows this instance acknowledged or read."""
        with self._mutex:
            return copy.deepcopy(self._records)

    def claim(self, owner: object) -> None:
        """Claim this writable handle for one logical owner, without reentry."""
        with self._mutex:
            if self._claim_owner is not _NO_CLAIM:
                raise JournalBusy("journal handle already has an active owner")
            self._check_writer()
            self._claim_owner = owner

    def release(self, owner: object) -> None:
        """Release a matching claim, including after a failed append.

        Owner tokens match by identity. Releasing an absent claim is an error.
        """
        with self._mutex:
            if self._claim_owner is _NO_CLAIM or self._claim_owner is not owner:
                raise JournalBusy("journal claim belongs to another owner or is absent")
            self._claim_owner = _NO_CLAIM

    def _load(self) -> None:
        assert self._descriptor is not None
        previous = _GENESIS_HASH
        with os.fdopen(os.dup(self._descriptor), "rb") as stream:
            for expected_seq, wire in enumerate(stream, start=1):
                if not wire.endswith(b"\n"):
                    raise JournalError("journal has a truncated final row")
                try:
                    row = json.loads(wire.decode("utf-8"), object_pairs_hook=_unique_object)
                    _validate_json(row)
                    if type(row) is not dict or not _ENVELOPE.issubset(row):
                        raise JournalError("journal row is missing its envelope")
                    if type(row["seq"]) is not int or row["seq"] != expected_seq:
                        raise JournalError("journal sequence is not contiguous")
                    if row["prev_sha256"] != previous:
                        raise JournalError("journal hash chain does not match")
                    unsigned = {key: value for key, value in row.items() if key != "sha256"}
                    expected_hash = hashlib.sha256(_canonical(unsigned)).hexdigest()
                    if row["sha256"] != expected_hash:
                        raise JournalError("journal row hash does not match")
                    if _canonical(row) + b"\n" != wire:
                        raise JournalError("journal row is not canonical JSON")
                except JournalError:
                    raise
                except (ValueError, TypeError, UnicodeError, RecursionError) as error:
                    raise JournalError("journal contains an invalid JSON row") from error
                self._records.append(row)
                previous = expected_hash

    def _check_writer(self) -> None:
        if self._closed:
            raise JournalError("journal is closed")
        if self._owner_pid != os.getpid():
            raise JournalBusy("journal handle belongs to another process; reopen it")
        if self._poisoned:
            raise JournalError("journal failed a write; close and verify it before continuing")

    def append(self, event: dict[str, Any]) -> dict[str, Any]:
        """Write and fsync an event, then return its persisted row.

        The caller cannot supply envelope fields. A write or fsync failure makes
        this instance reject every later append, even if its file looks complete.
        """
        with self._mutex:
            self._check_writer()
            try:
                if type(event) is not dict:
                    raise JournalError("journal event must be a JSON object")
                if _ENVELOPE.intersection(event):
                    raise JournalError("journal event must not supply envelope fields")
                # Freeze caller data before adding the envelope or writing bytes.
                row = snapshot(event)
                row["seq"] = len(self._records) + 1
                row["prev_sha256"] = (
                    self._records[-1]["sha256"] if self._records else _GENESIS_HASH
                )
                row["sha256"] = hashlib.sha256(_canonical(row)).hexdigest()
                wire = _canonical(row) + b"\n"
                result = copy.deepcopy(row)
            except JournalError:
                raise
            except (ValueError, TypeError, UnicodeError, RecursionError) as error:
                raise JournalError("journal event cannot be encoded as JSON") from error

            assert self._descriptor is not None
            try:
                remaining = memoryview(wire)
                while remaining:
                    written = os.write(self._descriptor, remaining)
                    if written <= 0:
                        raise OSError(errno.EIO, "journal write made no progress")
                    remaining = remaining[written:]
                os.fsync(self._descriptor)
                self._records.append(row)
                return result
            except BaseException as error:
                self._poisoned = True
                if isinstance(error, Exception):
                    raise JournalError("journal append failed; its outcome is uncertain") from error
                raise

    def close(self) -> None:
        """Release this handle. Closing does not acknowledge a failed append."""
        with self._mutex:
            self._claim_owner = _NO_CLAIM
            if self._closed:
                return
            self._closed = True
            descriptor, self._descriptor = self._descriptor, None
            if descriptor is not None:
                try:
                    # Closing, without LOCK_UN, also handles an inherited fd safely.
                    os.close(descriptor)
                except OSError as error:
                    raise JournalError("cannot close journal") from error

    def __enter__(self) -> Journal:
        with self._mutex:
            self._check_writer()
        return self

    def __exit__(self, exc_type: Any, exc_value: Any, traceback: Any) -> None:
        self.close()
