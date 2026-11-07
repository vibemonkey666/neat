"""An independent SQLite effect recorder for controlled experiments."""

import hashlib
import json
import sqlite3
from pathlib import Path


class Effects:
    def __init__(self, path: Path):
        path.parent.mkdir(parents=True, exist_ok=True)
        self.path = path
        connection = self._connect()
        try:
            with connection:
                connection.execute("CREATE TABLE IF NOT EXISTS effects "
                                   "(operation_id TEXT PRIMARY KEY, digest TEXT NOT NULL, value TEXT NOT NULL)")
        finally:
            connection.close()

    def _connect(self):
        connection = sqlite3.connect(self.path)
        connection.execute("PRAGMA synchronous=FULL")
        return connection

    def put(self, operation_id, value):
        data = json.dumps(value, sort_keys=True, separators=(",", ":"), allow_nan=False)
        digest = hashlib.sha256(data.encode()).hexdigest()
        connection = self._connect()
        try:
            with connection:
                connection.execute("BEGIN IMMEDIATE")
                row = connection.execute("SELECT digest FROM effects WHERE operation_id = ?", (operation_id,)).fetchone()
                if row and row[0] != digest:
                    raise ValueError("An effect identity cannot select different data")
                if not row:
                    connection.execute("INSERT INTO effects VALUES (?, ?, ?)", (operation_id, digest, data))
            return {"operation_id": operation_id, "digest": digest}
        finally:
            connection.close()

    def read(self):
        connection = self._connect()
        try:
            rows = connection.execute("SELECT operation_id, value FROM effects ORDER BY operation_id").fetchall()
            return [{"operation_id": key, "value": json.loads(value)} for key, value in rows]
        finally:
            connection.close()

