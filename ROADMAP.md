# Build a complete workflow application in verifiable stages

The current prototype supports a scripted JSON workflow, cooperative tools,
concurrency barriers, durable receipts, conservative restart, and a bounded
subprocess fixture. Its supported platform is POSIX with Python 3.11 or later.
It does not implement a complete coding client or establish product equivalence.

Apply the prospective review process in [CLEANROOM.md](CLEANROOM.md) before
starting an implementation intended to claim that separation. This roadmap
defines desired functions; its implementation suggestions are not observations
of another application's private design.

| Area | Present status | Next implementation | Acceptance criteria |
| --- | --- | --- | --- |
| Packaging and runtime | Scripted prototype runs with standard Python | Supported versions, installation, upgrade, uninstall, release manifests | Clean installation and identical declared input/output inventory |
| Headless CLI | JSON script file and JSON result | Stable command contract, streaming input/output, configuration precedence, resume | Invalid input, stdin, Unicode, spaces, exit status, and signal matrix |
| Model integration | Not implemented | Documented API adapter, streaming assembly, authentication, retries, usage limits | Fragmented frames, malformed data, retries, cancellation, and bounded costs |
| File and search tools | Not implemented | Explicit workspace reads, writes, patching, and search | Independent effect ledger, symlink boundaries, atomic edits, and output limits |
| Command execution | Fixed worker only | Explicit permission and isolated subprocess tools | Denied operations cause no effect; timeout, child cleanup, and environment checks |
| Permissions | Per-tool allowlist | Resource-level decisions and explicit interactive approval | Decisions bind exact operation inputs; changed inputs require reevaluation |
| MCP | Not implemented | Documented discovery, schemas, transport, errors, correlation, and cancellation | Owned protocol servers, malformed frames, reconnects, and denied effects |
| Hooks | In-process stop hook only | Original documented lifecycle hook interface with deadlines | Passing, blocking, failing, cancelled, and exhausted validation cases |
| Workers and subagents | Bounded echo worker | Readiness, task ownership, reconnection, quotas, and parent-loss policy | Child handshakes, interruption during startup/effects, and orphan observation |
| Storage and resume | Append-only journal; unresolved calls block success | Schema migrations, reconciliation, safe retries, and explicit abandonment | Competing writers, corrupt tails, fault injection, and operator resolution |
| Summaries and memory | Text is separate from operation state | Bounded context management and optional retrieval | Active work survives summaries; quality measured in separate task trials |
| Interactive terminal | Not implemented | Original layout, editing, progress, permissions, and accessible status | PTY tests, resize, Unicode, cancellation, and terminal capability differences |
| Native integrations | Not implemented | Optional clipboard, audio, PTY, and sandbox providers | Real platform operations; absent prerequisites report unsupported status |
| Assets and prompts | Authored fixture text only | Original product prose, prompts, templates, and licensed visual assets | Authorship or license basis for each inclusion; no unexplained embedded text |
| Notices and maps | No bundled external packages or maps | Per-release component inventory and generated maps when needed | Complete notices and mapping inputs bound to accepted source hashes |

## Sequence the implementation

1. Establish admitted requirements, an eligible implementation role, isolated
   inputs, runtime selection, and reproducible packaging.
2. Deliver a headless CLI with one documented model adapter and one read tool.
   Prove cancellation, streamed output, and bounded requests before adding writes.
3. Add file changes and command tools with explicit permission, isolation,
   independent effects, and reliable cleanup.
4. Add durable resume, reconciliation of uncertain operations, schema migration,
   and truthful completion across failures.
5. Add MCP, hooks, workers, and subagents with separately tested ownership and
   lifecycle rules.
6. Add the interactive terminal and optional platform integrations. Preserve
   explicit unsupported states until each host operation passes.

Each stage must produce an executable slice, an inclusion manifest, tests,
recorded results, and a revised feature matrix. Do not present a stub or
success-shaped fallback as a completed feature.

## First external behavior experiments

The eight protocols in [INSTRUMENTS.md](INSTRUMENTS.md) cover streamed dispatch,
tool barriers, interruption after effects, write failure and restart, compaction
with active work, stop-hook exhaustion, invocation, and permission/MCP boundaries.
All eight external comparison protocols remain unexecuted.

Use controller acknowledgments and a separate effect service to establish
causal order. Retain negative results and failed controls. Compare concurrent
events only where ordering is required by the contract. The tests of this
prototype do not substitute for those external comparisons.

## Conditions for a broader release

- Every advertised feature has an executable acceptance test and bounded claim.
- Every file has an inclusion decision and any required rights and notices.
- The build works without the research workspace or undeclared inputs.
- Runtime, optional platform operations, and authentication limits are explicit.
- Required validation and persistence failures prevent unqualified success.
- Uncertain external effects require an explicit recovery decision.
- Legal and process statements match the actual evidence for that release.
