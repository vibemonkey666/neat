"""Check the exact, text-only contents admitted to this prototype release."""

from __future__ import annotations

import ast
import hashlib
import json
from pathlib import Path, PurePosixPath
import sys
import tarfile


def check(root: Path) -> list[dict]:
    root = root.resolve(strict=True)
    policy = json.loads((root / "release-policy.json").read_text())
    if policy.get("schema") != "neat-release-policy/1":
        raise ValueError("Unknown release policy")
    allowed = policy["files"]
    if type(allowed) is not list or not allowed or any(type(name) is not str for name in allowed):
        raise ValueError("Release policy needs explicit file paths")
    if len(allowed) != len(set(allowed)):
        raise ValueError("Release policy repeats a path")
    for name in allowed:
        path = PurePosixPath(name)
        if path.is_absolute() or ".." in path.parts or path.as_posix() != name:
            raise ValueError("Release path is not a canonical relative path")
        if any(part.startswith(".") for part in path.parts) and name != ".gitignore":
            raise ValueError("Unexpected hidden release path")
        if name != ".gitignore" and path.suffix not in {".py", ".json", ".md"}:
            raise ValueError("Release format requires a separate review: " + name)
    observed = set()
    for path in root.rglob("*"):
        relative = path.relative_to(root)
        # These are local Git/runtime outputs, never export inputs. A symlink
        # elsewhere is rejected, even when it points to an allowed file.
        if relative.parts[0] in {".git", "outputs", "example-state"} or "__pycache__" in relative.parts:
            continue
        if len(relative.parts) == 1 and relative.name.startswith("example-effects.sqlite"):
            continue
        if path.is_symlink():
            raise ValueError("Release tree contains a symlink: " + relative.as_posix())
        if path.is_file():
            observed.add(relative.as_posix())
    if observed != set(allowed):
        raise ValueError("Release inventory differs: " + json.dumps({
            "missing": sorted(set(allowed) - observed), "unexpected": sorted(observed - set(allowed))}))
    inventory = []
    for name in allowed:
        path = root / name
        content = path.read_bytes()
        if len(content) > 128 * 1024 or b"\0" in content:
            raise ValueError("Release file exceeds the reviewed text boundary: " + name)
        text = content.decode("utf-8")
        if "sourcesContent" in text or "extracted:source-original" in text:
            # The check script itself contains these screening strings.
            if name != "release_check.py":
                raise ValueError("Embedded source-map payload marker: " + name)
        if path.suffix == ".py":
            tree = ast.parse(text, filename=name)
            for node in ast.walk(tree):
                names = []
                if isinstance(node, ast.Import):
                    names = [row.name for row in node.names]
                elif isinstance(node, ast.ImportFrom) and node.level == 0:
                    names = [node.module]
                for module in names:
                    first = module.split(".")[0]
                    if first not in sys.stdlib_module_names and first not in {"workflow_alt", "release_check"}:
                        raise ValueError("Undeclared external import: " + module)
        inventory.append({"path": name, "bytes": len(content),
                          "sha256": hashlib.sha256(content).hexdigest()})
    return inventory


def export_verified(root: Path, inventory: list[dict], destination: Path) -> str:
    """Export only reverified ordinary files, then verify every archive member."""
    root = root.resolve(strict=True)
    if destination.resolve().is_relative_to(root):
        raise ValueError("Export archive must be outside the source tree")
    if check(root) != inventory:
        raise ValueError("Source changed after validation")
    expected = {"workflow-alternatives/" + row["path"]: row for row in inventory}
    with tarfile.open(destination, "w:gz", dereference=True) as archive:
        for row in inventory:
            path = root / row["path"]
            if path.is_symlink() or not path.is_file():
                raise ValueError("Export input is not a regular file")
            archive.add(path, arcname="workflow-alternatives/" + row["path"], recursive=False)
    with tarfile.open(destination, "r:gz") as archive:
        members = archive.getmembers()
        if len(members) != len(expected) or {m.name for m in members} != set(expected):
            raise ValueError("Export archive has an unexpected inventory")
        for member in members:
            if not member.isfile():
                raise ValueError("Export archive contains a nonregular entry")
            content = archive.extractfile(member).read()
            row = expected[member.name]
            if len(content) != row["bytes"] or hashlib.sha256(content).hexdigest() != row["sha256"]:
                raise ValueError("Export bytes differ from validated inputs")
    return hashlib.sha256(destination.read_bytes()).hexdigest()


if __name__ == "__main__":
    print(json.dumps({"status": "passed", "files": check(Path(__file__).parent)}, indent=2))
