# Observe the standalone alternative through public interfaces

These eight protocols define comparisons through external interfaces.
All eight are **unexecuted**. The prototype's internal contract tests do not
establish results for these protocols or an official client.

The experiments use documented CLI interfaces, a scripted provider, owned MCP
servers, operating-system process observations, and an independent effect ledger.
They do not require reconstructed modules, private entrypoints, or internal
implementation names.

## Record conditions before each experiment

Record the executable hash, reported version, platform, runtime, working
directory, configuration, and exact argument array. Record every enabled tool
and permission rule. Preserve the relevant public documentation revision.

Use [CLI documentation](https://code.claude.com/docs/en/cli-reference),
[headless execution documentation](https://code.claude.com/docs/en/headless),
[hook documentation](https://code.claude.com/docs/en/hooks), and the negotiated
[MCP tool protocol](https://modelcontextprotocol.io/specification/latest/server/tools)
as interface references. Confirm each required interface through the installed
client's help or its applicable documentation.

For an official-client comparison, require a documented way to select the
scripted provider. If that route is unavailable, record the comparison as
`blocked`. A live model run is a separate experiment with different controls.
Do not enable an undocumented configuration override to force a path.

Run each executable in fresh owned storage. Use the same authored tool inputs,
provider responses, permissions, and release conditions for both executables.
Record differences in supported interfaces rather than hiding them in adapters.
The controller must bound execution, output, requests, and cleanup.
Declare the trial count and alternate client order. Retain every trial outcome.

## Establish order through controller acknowledgments

The controller assigns a run ID and records its own sequence numbers. It gives
each model attempt, tool invocation, external operation, and release a distinct
ID. Preserve client-provided correlation IDs separately.

Use a separate fixture service to record external operations. Its append-only
ledger records accepted requests, committed effects, withheld responses, and
released responses. The client cannot rewrite that ledger. A committed fixture
effect requires the service's persistence acknowledgment before the controller
releases the next stage.

Record three separate facts: a tool request was issued, an external effect
committed, and the client reported a result. A missing result does not undo a
committed effect. A visible result does not establish durable session storage.

Use acknowledgment chains to establish order. For example, release the stream
tail only after the controller receives the effect service's commit
acknowledgment. Local monotonic timestamps support diagnosis; timestamps from
different processes do not establish causality by themselves.

Capture raw CLI stdout and stderr separately. Retain provider frames, MCP
messages, controller acknowledgments, effect records, process identities, exit
codes, and artifact hashes. Record timeout, cancellation, and controller cleanup
as different events. Observe client cleanup before the controller terminates
remaining fixture processes.

Use partial-order comparisons for concurrent work. Preserve receipt identities,
missing receipts, duplicates, errors, and terminal outcomes. Do not require an
arbitrary order between operations that have no declared dependency.

## Observe dispatch before the model stream ends

**Status:** Unexecuted.

**Conditions:** Use the documented streaming input and output modes. Discover
the tool schema from the selected public interface. Choose an owned tool whose
only effect is a durable fixture-ledger entry.

**Procedure:** Send one complete tool call through the scripted provider. Flush
its completion frame, then withhold the remainder of the response. Wait for the
independent effect acknowledgment. Release the remaining frames after that
acknowledgment or the declared observation deadline. Record which condition
released the stream.

**Oracle:** Dispatch overlaps the unfinished response when the effect commits
before the controller releases the stream tail. This establishes overlap with
stream delivery. It does not measure computation inside a model server.

**Controls:**

- Withhold the tool input's final fragment; require no premature effect.
- Release a complete response without a hold; require the tool to work.
- Split valid protocol frames and input JSON across different byte boundaries.
- Cancel while the tail is held; record the effect and receipt independently.

A missing effect before the deadline is a bounded negative observation. If the
complete-response control fails, the overlap experiment is inconclusive.

## Observe concurrency and tool barriers

**Status:** Unexecuted.

**Conditions:** The alternative declares which tools permit concurrency and
which tools require a barrier. For another client, record the advertised
metadata and observed policy. MCP read-only hints do not grant permission or
prove a scheduling guarantee.

**Procedure:** Offer three calls in order: read A, write B, and read C. Each
fixture tool reports its start to the controller and waits for a release.
Hold A, then release it. Hold B after its start, then release it. Let B commit
a versioned fixture value. Record the value returned by C.

**Oracle:** Under the alternative's declared barrier contract, B starts only
after A completes, and C starts only after B completes. C observes B's committed
value. Returned results remain correlated with the correct calls.

**Controls:**

- Offer A and C alone; require both start acknowledgments before either release.
- Reverse the read durations; preserve their identities and independent results.
- Make B fail before committing; record the declared policy for subsequent work.
- Verify that every held tool completes after its release.

Observe later public model requests to check which tool results the client
includes. These observations do not reveal internal context-update operations.
Record each negative observation window; absence during that window is not an
unbounded serialization proof.

## Interrupt after an effect but before its receipt

**Status:** Unexecuted.

**Conditions:** Use a fixture service that survives client termination. Give
each external operation an ID independent of the client's tool-call ID. The
service can commit the operation while withholding its response.

**Procedure:** Wait for the effect service's commit acknowledgment. Keep the
response withheld, then interrupt the CLI through its documented cancellation
interface or an operating-system signal. Observe the client and its children
before controller cleanup. Restart with the same retained session storage.

**Oracle:** Compare the committed effect, cancellation report, retained receipt,
and resumed public requests. The alternative must represent an unresolved
operation when its effect may have committed but no durable result exists.
It must not silently repeat that operation without an explicit recovery policy.

**Controls:**

- Interrupt before the effect commits; the ledger must show no committed effect.
- Interrupt after the client receives and durably records a result.
- Resume without requesting another operation; detect automatic repetition.
- Explicitly request a retry; distinguish the original operation ID from a new ID.
- Test a service with documented idempotency separately from one without it.

A no-retry resume cannot establish deduplication. Exactly-once effects require
an external idempotency or reconciliation contract. A missing receipt alone
cannot tell the client whether an effect occurred.

## Observe write failure and restart

**Status:** Unexecuted.

**Conditions:** Use isolated session storage and two distinct facts supplied
through public input. Require a qualified filesystem fault mechanism with
observable acknowledgments. If it is unavailable, mark the fault case `blocked`.

**Procedure:** Complete a first turn and preserve its storage state. Enable a
write failure for the owned persistence location. Send the second fact and
record the terminal report, observed filesystem error, and remaining files.
Stop the client, remove the fault, and resume from the remaining storage.
Do not restore saved records during the main recovery case.

**Oracle:** Inspect the first resumed provider request for each fact. Compare
surviving data with the client's completion and persistence claims. The
alternative must keep a persistence failure visible even if response generation
completed. A storage acknowledgment must name the boundary it guarantees.

**Controls:**

- Run the same turns without a storage fault and require both facts after restart.
- Prove the fault affects an owned write under the same filesystem conditions.
- Test process termination before and after the recorded persistence boundary.
- Treat restoration from a saved copy as a separate operator-repair case.

File permissions alone do not prove that the client's write failed. Process
restart, `chmod`, and `fsync` tests do not prove power-loss durability. That claim
requires a separate qualified storage or virtual-machine fault experiment.

## Compact while workers and pending work remain

**Status:** Unexecuted.

**Conditions:** Use a publicly supported background task or subagent interface.
Keep task IDs distinct from process IDs. Track process start identity and
controller handshakes so PID reuse cannot appear to restore a worker.

**Procedure:** Start one task and hold it before its external effect. Queue a
second task through the supported interface. Request compaction and acknowledge
its public boundary. Inspect task status and public requests. Release the first
task and observe completion before testing a separate restart variant.

**Oracle:** For the alternative, compaction changes conversation representation
while the operational store retains task identities, dependencies, pending work,
and unresolved effects. Restart must reconcile that store with actual worker
state before reporting a task as running or complete.

**Controls:**

- Release active work without compaction and require successful completion.
- Compact without restarting, then release work and require completion.
- Restart without compaction to separate restart behavior from summarization.
- Exercise graceful interruption and abrupt process loss as separate cases.
- Detect replacement workers through new handshakes, not only an old PID.

A retained task name is not proof of a restored worker. A stopped worker is not
proof that pending work completed. A background shell result does not establish
subagent or queue recovery. Summary usefulness requires separate model-quality
experiments.

## Exhaust a blocking stop hook

**Status:** Unexecuted.

**Conditions:** Install an owned hook through the documented settings interface.
The hook records every invocation in the independent ledger, then returns a
documented blocking result. Record any public turn limit separately.

**Procedure:** Supply scripted successful model responses while the hook keeps
blocking. Observe hook feedback and public terminal output. Stop at the
controller's declared bound if the client does not terminate. Do not force an
undocumented internal retry limit.

**Oracle:** Record model completion, validation outcome, pending work,
persistence outcome, and interruption separately. The alternative must report
unresolved validation when its declared hook limit is exhausted. An unqualified
success result must not imply that a still-blocking hook passed.

**Controls:**

- Use a hook that passes immediately.
- Block once, then pass after the controller records the retry.
- Distinguish documented hook errors from blocking decisions.
- Compare a client termination with a controller-imposed timeout.

If the controller reaches its bound, hook exhaustion remains unobserved. A
public terminal success and a blocking hook can coexist as an observed result;
they must not be merged into a fabricated validation pass.

## Observe explicit reentry and worker invocation

**Status:** Unexecuted.

**Conditions:** Use the alternative's documented entrypoints and packaged
launcher. For another client, require a documented feature that actually starts
the process under study. Unsupported host integrations remain `blocked`.

**Procedure:** Invoke the packaged command through an owned fixture tool. Test
literal arguments, paths with spaces, Unicode, working directories, and standard
input. Independently observe executable identity, argument boundaries, parent
identity, child start identity, output, and exit status. Require a child-produced
acknowledgment before continuing the parent.

**Oracle:** The requested program starts once with the intended arguments and
context. The alternative's worker reports readiness before accepting work.
Cancellation and parent exit produce the documented worker outcome, without
confusing fixture cleanup with application cleanup.

**Controls:**

- Compare direct invocation with invocation through the packaged launcher.
- Verify literal shell punctuation remains data where the interface promises it.
- Test a missing executable and an early child failure.
- Hold child readiness to detect premature acceptance of work.
- Track descendants until the declared observation boundary, before cleanup.

Explicitly calling a CLI from a tool tests reentry, not every internal launch
path. Help and version comparisons do not verify worker startup. Thread-based
features do not establish subprocess behavior. Do not infer an internal worker
protocol from a successful public interaction.

## Observe permission and MCP boundaries

**Status:** Unexecuted.

**Conditions:** Use an owned MCP server with declared schemas and negotiated
protocol version. Apply permissions through documented client configuration.
Keep server protocol output separate from diagnostic output.

**Procedure:** Advertise one read operation and one write operation. Record
discovery, call IDs, arguments, cancellation messages, and external effects.
Run an allowed call, a refused call, a server error, and a call whose response
remains held after an effect. Observe CLI reporting and subsequent provider
requests for each case.

**Oracle:** Under the alternative's permission contract, a refused call produces
no dispatch acknowledgment or effect. An allowed call returns a result with the
correct correlation ID. Server errors and cancellation remain distinct from
successful tool execution. Permission is not inferred from tool metadata alone.

**Controls:**

- Run the same operation with explicit permission and require an actual effect.
- Return a malformed result and observe the declared protocol-error behavior.
- Advertise an unavailable tool and require an explicit failure or blocked result.
- Cancel a held call and observe the server before controller cleanup.
- Test conflicting read-only hints and write behavior in the owned fixture.

A denial message alone does not prove that dispatch was prevented. A successful
tool result alone does not prove the external effect committed. Keep the
independent ledger and public protocol observations separate.

## Compare outcomes without promoting the evidence

For each protocol, retain the conditions, controls, observations, and unresolved
questions. Report `observed`, `contradicted`, `inconclusive`, or `blocked` only
after execution. A failed positive control prevents a behavioral conclusion.

Compare the alternative with its declared contracts first. Compare an
official client under matching public conditions separately. A deliberate
improvement, such as exposing unresolved validation, is a design difference.
It is not evidence of exact product equivalence.

Direct module fixtures and invocation-adapter unit tests do not substitute for
these public-interface experiments. The standalone package requires no other
application's source tree to build or run its own contract tests.
