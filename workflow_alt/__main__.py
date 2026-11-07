"""Run a scripted workflow without loading any external application source."""

import argparse
import asyncio
import json
from pathlib import Path

from .effects import Effects
from .engine import Call, Engine, Tool
from .journal import Journal


async def execute(args):
    def invalid_constant(value):
        raise ValueError("Non-finite JSON number: " + value)

    document = json.loads(args.script.read_text(), parse_constant=invalid_constant)
    if document.get("schema") != "workflow-script/1":
        raise ValueError("Expected workflow-script/1")
    calls = [Call(row["id"], row["tool"], row["arguments"]) for row in document["operations"]]
    if any(not isinstance(call.id, str) or not call.id or not isinstance(call.tool, str)
           or not isinstance(call.arguments, dict) for call in calls):
        raise ValueError("Invalid operation")
    hook = document.get("stop", {})
    block = hook.get("block_attempts", 0)
    limit = hook.get("limit", 2)
    if type(block) is not int or block < 0 or type(limit) is not int or not 1 <= limit <= 100:
        raise ValueError("Invalid stop-hook attempt limits")
    effects = Effects(args.effects)

    async def echo(arguments, context):
        return arguments.get("value")

    async def store(arguments, context):
        return effects.put(context.call_id, arguments["value"])

    async def read(arguments, context):
        return effects.read()

    async def stream():
        for call in calls:
            yield call
            await asyncio.sleep(0)

    async def stop(number):
        return number > block

    with Journal(args.state) as journal:
        engine = Engine(journal, {"echo": Tool(echo, False), "store": Tool(store, True),
                                  "read": Tool(read, False)}, allowed=set(args.allow.split(",")))
        if "summary" in document:
            engine.compact(document["summary"])
        report = await engine.run(stream(), stop_hook=stop, stop_attempts=limit)
        print(json.dumps({"report": report, "context": engine.context, "effects": effects.read()}, sort_keys=True))
        return 0 if report["status"] == "succeeded" else 2


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--script", type=Path, required=True)
    parser.add_argument("--state", type=Path, required=True)
    parser.add_argument("--effects", type=Path, required=True)
    parser.add_argument("--allow", default="echo,read", help="Comma-separated tool permissions")
    args = parser.parse_args()
    try:
        return asyncio.run(execute(args))
    except (OSError, ValueError, RuntimeError, KeyError, TypeError) as exc:
        print(json.dumps({"status": "incomplete", "error": str(exc)}, sort_keys=True))
        return 2


if __name__ == "__main__":
    raise SystemExit(main())

