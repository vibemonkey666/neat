# Claude Code 2.1.310

JavaScript harness sources and bundled assets for the Claude Code 2.1.310
Linux x64 client. The tree is arranged for source browsing and module-level
experimentation.

## Layout

- [`src/app/`](src/app/) — application JavaScript modules and source maps.
- [`src/file-modules/`](src/file-modules/) — file-backed module adapters.
- [`src/text-modules/`](src/text-modules/) — embedded text-module adapters.
- [`src/assets/`](src/assets/) — shipped text, web, font and native assets.
- [`src/bin/`](src/bin/) — command-line launch helpers.

The module files retain their bundled names and relative layout. Source maps are
kept beside the JavaScript modules. The launch helper expects the matching Bun
runtime to be supplied separately.

## Version

This tree corresponds to Claude Code 2.1.310 for Linux x64. It is a source
publication for inspection and experimentation and is not an official product
distribution. Review applicable notices for Claude Code and bundled dependencies
before redistribution or deployment.

## Legal status and research use

This repository is intended for research and learning. The maintainer reports
legal-counsel approval of the project's clean-room reverse-engineering process
and fair-use position. See [Legal status and research use](LEGAL.md) for the
statement, supporting authorities, and scope. Existing third-party rights and
notices continue to apply.
