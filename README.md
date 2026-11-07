# Neat

Neat is a small, runnable workflow prototype. It demonstrates streaming tool
dispatch, execution barriers, durable receipts, cancellation uncertainty, and
completion status that distinguishes execution from validation.

It uses Python's standard library. This tree includes no recovered application
modules, source maps, bundled fonts, native addons, or external runtime binaries.
It is not a complete Claude Code replacement or a certified clean-room
implementation. [CLEANROOM.md](CLEANROOM.md) defines a prospective process for
future work. [ROADMAP.md](ROADMAP.md) lists the missing capabilities.

## Run the example

Install Python 3.11 or later through your operating system's supported package
channel. POSIX file locking and process groups are required. No package-registry
installation is needed.

```sh
python3 -B -m workflow_alt \
  --script examples/stream.json \
  --state ./example-state \
  --effects ./example-effects.sqlite \
  --allow echo,read,store
```

The example performs a read, one explicitly permitted effect, and another read.
Repeating the command reuses completed operation identities without repeating
the effect. Changing an operation's arguments under the same identity fails.
An unfinished effect remains unresolved after restart.

Only `echo` and `read` are permitted by default. The `store` fixture writes to
a separate SQLite database and requires explicit permission. The command emits
JSON. Exit zero means acknowledged execution and passed validation. Exit two
means incomplete work or an error.

## Validate the source

On an ordinary development host:

```sh
python3 -B release_check.py
python3 -B -m unittest discover -s tests -v
```

Where managed builds are required, run the complete recipe from this checkout:

```sh
buildctl run --profile rust-node --lane neat-validation \
  --id YOUR_UNIQUE_JOB_ID --cpus 2 --memory 4 --timeout 600 \
  --artifact @results -- python3 -B managed_validate.py
buildctl fetch YOUR_UNIQUE_JOB_ID
```

The recipe checks the exact inclusion list, copies only those files into a
standalone directory, runs all tests, and checks CLI execution, resume, and
permission denial. It exports source hashes, logs, and a package archive.

## Read the design

- [DESIGN.md](DESIGN.md) defines the prototype's behavior and recovery contracts.
- [INSTRUMENTS.md](INSTRUMENTS.md) defines eight external experiment protocols.
- [CLEANROOM.md](CLEANROOM.md) defines review and implementation boundaries.
- [ROADMAP.md](ROADMAP.md) defines completion criteria for each missing feature.
- [LEGAL.md](LEGAL.md) explains the limited purpose of this notice.
- [NOTICE.md](NOTICE.md) describes included materials and runtime dependencies.

The prototype does not provide a live model adapter, interactive terminal,
arbitrary shell tool, MCP client, or full application equivalence. Its permission
list and worker helper are not an operating-system sandbox. Registered tools
must cooperate with cancellation. Storage reconciliation and power-loss
qualification remain unfinished.

A journal hash chain cannot detect deletion of whole final records or a fully
recomputed history without an external anchor. Its history grows without
compaction. A summary never replaces operational records.
