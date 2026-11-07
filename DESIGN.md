# Implement explicit workflow contracts

The program accepts complete operations through an asynchronous stream. Each
operation has a stable identity, a tool name, and JSON arguments. The registry
declares each tool's effect policy. The caller supplies explicit permissions.
The program never trusts the input stream to label an operation safe.

## Dispatch and publish in separate steps

A complete operation can start while the producer still holds later input.
Several registered read operations can run together. A mutation waits for all
preceding operations and their context updates. Later operations wait for that
mutation and its context update.

Receipts can arrive in execution order. Context updates use input order.
An admission semaphore bounds operations that have not finished publication.
The publisher releases each admission slot and discards its task reference.
The journal and accumulated conversation still grow with completed history.

The public API is `Engine.run(async_stream, stop_hook=..., stop_policy=...)`.
`Call` contains `id`, `tool`, and `arguments`. `Tool` contains an async function
and a boolean `mutates` declaration. Canonical JSON values define both the
persisted identity and the exact arguments sent to the tool.

## Persist before starting an effect

The journal acknowledges an accepted operation and a start record before
dispatching its tool. It acknowledges the receipt before publishing a context
update. Each append writes a canonical JSON row and calls `fsync`.
New directory entries also receive directory synchronization.

A POSIX file lock excludes other writers. A logical ownership claim excludes
competing engines sharing one journal object. Recovery begins only after that
claim succeeds. The journal rejects malformed, truncated, or broken hash chains.
A failed write poisons the current handle, which cannot acknowledge later writes.

These operations establish the requested filesystem acknowledgment behavior.
They do not constitute a power-loss qualification. A complete appended record
can survive even when the caller did not receive its acknowledgment.

## Keep effect uncertainty explicit

The fixture effect service uses its own SQLite transaction and operation key.
That record is separate from the workflow's start and receipt records.
The service rejects reuse of an operation key with different content.

An interruption after a mutating tool starts can leave its effect applied.
Without a durable receipt, the workflow records `uncertain`. On restart, a
mutating start without a receipt has the same state. No unresolved operation
is automatically repeated. Read interruptions remain distinguishable from
uncertain writes.

The system does not claim exactly-once execution for arbitrary effects.
That property needs an external service's idempotency or reconciliation
contract. The current CLI intentionally leaves manual reconciliation unfinished.

## Restore operational state independently of summaries

`Engine.compact(text)` appends a summary without deleting operation records.
Recovery reconstructs operations and receipts from their authoritative journal.
It never treats prose as proof that a worker is running or an effect completed.
No live worker is assumed to survive a fresh process without a separate owner
and reconnection protocol.

Durable successful receipts reconstruct context in input order. A lost context
publication does not erase an acknowledged receipt. An unfinished operation
still prevents completion, even if a later summary calls it successful.

## Report completion dimensions separately

The final report includes execution, validation, durability, unresolved
identities, and a combined status. An exhausted stop-hook limit reports blocked
validation. A failed final journal append reports failed durability.
Neither result produces combined success.

Declaring a required stop hook persists its policy identity. A later attempt
without that hook reports `missing-required-hook`. A different policy identity
requires an explicit policy migration, which this prototype does not implement.
Caller cancellation interrupts the current hook and prevents subsequent retries.

Cancellation also stops input consumption and signals active operations. Owned
tasks settle before the attempt releases its journal claim. Repeated caller
cancellation cannot skip this cleanup. The current contract assumes cooperative
in-process tools; arbitrary tool code needs a process boundary.

## Launch a worker through an explicit command

The invocation helper selects the Python interpreter and an absolute worker
script path. It passes arguments as an array and sends the request through stdin.
Shell punctuation and Unicode remain input data. The worker has a separate
process session, a minimal environment, bounded output, and a deadline.
The helper terminates and reaps its owned process on failure or cancellation.

The helper's process-created callback does not prove application readiness.
The final child response identifies its process and working directory.
Long-lived workers need a separate readiness and ownership protocol.

## Compare behavior through external instruments

Public documentation identifies observation interfaces, including structured
CLI output, session resume, hooks, and MCP tool calls. It does not establish
that a specific application version provides every proposed guarantee.

Use the [instrument designs](INSTRUMENTS.md) to test matching conditions and
record counterexamples. A desired improvement is a new design contract, not
evidence that another client already behaves that way. Measure model quality
separately from scheduler and persistence behavior.
