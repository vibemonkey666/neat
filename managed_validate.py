"""Run the complete standalone recipe in a managed build worker."""

import hashlib
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

from release_check import check, export_verified


def main():
    output = Path("/build-results/workflow-alternatives")
    if not Path("/build-results").is_dir():
        raise RuntimeError("Run this recipe through buildctl")
    output.mkdir(parents=True, exist_ok=False)
    original = Path(__file__).resolve().parent
    isolated = output / "standalone"
    # A fixed export excludes every sibling project, vendor, and recovered
    # artifact. Validate the resulting package with only its own input files.
    inventory = check(original)
    isolated.mkdir()
    for row in inventory:
        source = original / row["path"]
        target = isolated / row["path"]
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
    if check(isolated) != inventory:
        raise ValueError("The isolated package differs from the reviewed source")
    environment = dict(os.environ)
    environment.pop("PYTHONPATH", None)
    environment["PYTHONNOUSERSITE"] = "1"
    environment["PYTHONDONTWRITEBYTECODE"] = "1"
    stages = []
    archive_sha256 = None

    def run(name, command, expected=0):
        completed = subprocess.run(command, cwd=isolated, env=environment, stdout=subprocess.PIPE,
                                   stderr=subprocess.STDOUT, timeout=120)
        (output / (name + ".log")).write_bytes(completed.stdout)
        stages.append({"name": name, "returncode": completed.returncode, "expected": expected,
                       "sha256": hashlib.sha256(completed.stdout).hexdigest()})
        if completed.returncode != expected:
            raise RuntimeError(name + " failed; inspect its log")
        return completed.stdout

    try:
        run("tests", [sys.executable, "-B", "-m", "unittest", "discover", "-s", "tests", "-v"])
        command = [sys.executable, "-B", "-m", "workflow_alt", "--script", "examples/stream.json", "--state",
                   str(output / "demo-state"), "--effects", str(output / "demo-effects.sqlite"), "--allow", "echo,read,store"]
        first = json.loads(run("cli-first", command))
        second = json.loads(run("cli-resume", command))
        if len(first["effects"]) != 1 or first["effects"] != second["effects"] or first["context"] != second["context"]:
            raise ValueError("CLI resume changed effects or duplicated context")
        denied = command.copy()
        denied[denied.index("--state") + 1] = str(output / "denied-state")
        denied[denied.index("--effects") + 1] = str(output / "denied-effects.sqlite")
        denied[-1] = "echo,read"
        rejection = json.loads(run("cli-denied", denied, 2))
        if rejection["effects"] or rejection["report"]["status"] != "incomplete":
            raise ValueError("Permission denial allowed an effect or claimed success")
        archive_sha256 = export_verified(isolated, inventory, output / "workflow-alternatives.tar.gz")
        status = "passed"
    except Exception:
        status = "failed"
        raise
    finally:
        report = {"schema": "workflow-alternatives-validation/1", "status": status,
                  "python": sys.version, "stages": stages, "files": inventory,
                  "archive_sha256": archive_sha256,
                  "third_party_dependencies": [], "official_client_comparison": "not-run",
                  "power_loss_test": "not-run", "full_client_replacement": False}
        (output / "report.json").write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps({"status": status, "files": len(inventory), "stages": stages}))


if __name__ == "__main__":
    main()
