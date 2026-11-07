import json
from pathlib import Path
import tempfile
import tarfile
import unittest

from release_check import check, export_verified


class ReleaseTests(unittest.TestCase):
    def setUp(self):
        self.scratch = tempfile.TemporaryDirectory()
        self.addCleanup(self.scratch.cleanup)
        self.root = Path(self.scratch.name)
        self.policy = {"schema": "neat-release-policy/1", "files": ["release-policy.json", "app.py"]}
        (self.root / "app.py").write_text("import json\n")
        self.write_policy()

    def write_policy(self):
        (self.root / "release-policy.json").write_text(json.dumps(self.policy))

    def test_exact_text_inventory(self):
        rows = check(self.root)
        self.assertEqual([row["path"] for row in rows], self.policy["files"])
        self.assertTrue(all(len(row["sha256"]) == 64 for row in rows))

    def test_unlisted_payload_is_rejected(self):
        (self.root / "payload.node").write_bytes(b"\x7fELF")
        with self.assertRaisesRegex(ValueError, "unexpected"):
            check(self.root)

    def test_missing_file_is_rejected(self):
        (self.root / "app.py").unlink()
        with self.assertRaisesRegex(ValueError, "missing"):
            check(self.root)

    def test_link_is_rejected(self):
        (self.root / "alias.py").symlink_to(self.root / "app.py")
        with self.assertRaisesRegex(ValueError, "symlink"):
            check(self.root)

    def test_escape_is_rejected(self):
        self.policy["files"].append("../outside.py")
        self.write_policy()
        with self.assertRaisesRegex(ValueError, "relative path"):
            check(self.root)

    def test_binary_format_needs_review_even_when_listed(self):
        self.policy["files"].append("font.woff2")
        self.write_policy()
        with self.assertRaisesRegex(ValueError, "separate review"):
            check(self.root)

    def test_external_dependency_is_rejected(self):
        (self.root / "app.py").write_text("import unknown_vendor_package\n")
        with self.assertRaisesRegex(ValueError, "external import"):
            check(self.root)

    def test_embedded_mapping_payload_is_rejected(self):
        field = "sources" + "Content"
        (self.root / "app.py").write_text("payload = {" + repr(field) + ": ['text']}\n")
        with self.assertRaisesRegex(ValueError, "payload marker"):
            check(self.root)

    def test_export_rejects_post_validation_source_change(self):
        inventory = check(self.root)
        (self.root / "app.py").write_text("import os\n")
        with tempfile.TemporaryDirectory() as export_dir:
            with self.assertRaisesRegex(ValueError, "changed after"):
                export_verified(self.root, inventory, Path(export_dir) / "package.tar.gz")

    def test_export_omits_unlisted_runtime_outputs(self):
        inventory = check(self.root)
        outputs = self.root / "outputs"
        outputs.mkdir()
        (outputs / "payload.bin").write_bytes(b"not a release input")
        (outputs / "alias").symlink_to(self.root / "app.py")
        with tempfile.TemporaryDirectory() as export_dir:
            destination = Path(export_dir) / "package.tar.gz"
            digest = export_verified(self.root, inventory, destination)
            self.assertEqual(len(digest), 64)
            with tarfile.open(destination) as archive:
                self.assertEqual(set(archive.getnames()), {"workflow-alternatives/" + row["path"] for row in inventory})
                self.assertTrue(all(member.isfile() for member in archive.getmembers()))


if __name__ == "__main__":
    unittest.main()
