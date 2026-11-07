"""Echo one JSON value from stdin without executing caller-supplied code."""

from __future__ import annotations

import json
import math
import os
import sys
import time


MAX_INPUT_BYTES = 1024 * 1024
MAX_WAIT_SECONDS = 30


def _reject_constant(value: str) -> None:
    raise ValueError("JSON numbers must be finite")


def encode_payload(payload: object) -> bytes:
    """Validate the request and return its bounded UTF-8 representation."""
    if type(payload) is not dict or "value" not in payload:
        raise ValueError("Request must be an object containing value")
    if set(payload) - {"value", "wait_seconds"}:
        raise ValueError("Request contains an unknown field")
    wait = payload.get("wait_seconds", 0)
    if type(wait) not in (int, float) or not 0 <= wait <= MAX_WAIT_SECONDS:
        raise ValueError("wait_seconds must be between 0 and 30")

    def check(value: object) -> None:
        if value is None or type(value) in (bool, int, str):
            return
        if type(value) is float and math.isfinite(value):
            return
        if type(value) is list:
            for item in value:
                check(item)
            return
        if type(value) is dict and all(type(key) is str for key in value):
            for item in value.values():
                check(item)
            return
        raise ValueError("Request values must use JSON types and finite numbers")

    try:
        check(payload)
        encoded = json.dumps(payload, ensure_ascii=False, allow_nan=False,
                             separators=(",", ":")).encode("utf-8")
    except (RecursionError, UnicodeError) as error:
        raise ValueError("Request is not valid UTF-8 JSON") from error
    if len(encoded) > MAX_INPUT_BYTES:
        raise ValueError("Request exceeds the input limit")
    return encoded


def main() -> int:
    try:
        data = sys.stdin.buffer.read(MAX_INPUT_BYTES + 1)
        if len(data) > MAX_INPUT_BYTES:
            raise ValueError("Request exceeds the input limit")
        payload = json.loads(data.decode("utf-8"), parse_constant=_reject_constant)
        encode_payload(payload)
        time.sleep(payload.get("wait_seconds", 0))
        result = {"value": payload["value"], "cwd": os.getcwd(), "pid": os.getpid()}
        encoded = json.dumps(result, ensure_ascii=False, allow_nan=False,
                             separators=(",", ":")).encode("utf-8")
        sys.stdout.buffer.write(encoded + b"\n")
        sys.stdout.buffer.flush()
        return 0
    except (ValueError, TypeError, OSError, RecursionError):
        # Do not copy request contents into error output.
        sys.stderr.write("Worker could not process the JSON request\n")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
