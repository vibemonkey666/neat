# A prospective clean-room implementation process

This document defines a process to establish an independently expressed future
implementation. It does not certify the current prototype. A fresh repository,
new contributor name, rewritten history, or new agent session does not establish
independence.

## Separate research, review, and implementation

Use three roles with distinct access:

1. Researchers retain the studied program, acquisition records, observations,
   and any restricted material in a private evidence workspace.
2. Specification reviewers admit necessary functional requirements and author
   an implementation packet with public references and bounded observations.
3. Implementers receive only the admitted packet in an isolated workspace.
   They choose their own internal design, source names, prompts, and assets.

Select implementers whose relevant project-source exposure is known and
compatible with the intended separation. A role label alone is insufficient.
Do not transfer recovered source, source-bearing maps, internal architecture
descriptions, implementation suggestions derived from them, or shared research
conversations. Do not use this demonstration's source or tests as the seed for
an implementation claimed to follow that separate process.

An isolated workspace needs separate repositories, mounts, credentials, indexes,
retrieval stores, agent memory, prompts, and logs. Record the inputs actually
supplied and the boundaries actually enforced. Do not claim knowledge of a
model's full training history. If a boundary is crossed, preserve what happened,
identify affected outputs, and review the next step before proceeding.

## Admit functional requirements before implementation

Each requirement needs these fields:

| Field | Required content |
| --- | --- |
| Identity | Stable requirement ID and revision |
| Purpose | Observable function or concrete interoperability objective |
| Interface | Inputs, outputs, errors, and necessary protocol fields |
| Conditions | Product version, configuration, permissions, and platform |
| Evidence | Public documentation or an authorized observation with retained identity |
| Oracle | A reproducible external check and its positive controls |
| Limits | Unknown behavior, contradictory observations, and unsupported cases |
| Review | Reviewer, date, approved packet hash, and recipients |

Describe what an implementation must do without translating another program's
control flow. Include only interface spellings that are necessary for the
declared compatibility objective. Do not copy distinctive prompts, prose,
private symbol names, arbitrary constants, module layouts, or internal data
structures when specifying behavior.

Reviewers should author new acceptance fixtures from the admitted contract.
Send implementation questions through the reviewer and record the answer in a
new packet revision. New observations do not alter the content or date of an
earlier packet. Behavior matching supports compatibility; it does not establish
independent authorship by itself.

## Select the observation route

Use public protocol documentation first. Confirm the documented interface
exists in the selected release. Use entitled copies and permitted operations
for controlled external experiments. Record exact commands, settings, fixture
inputs, output, effects, and applicable restrictions.

If necessary interface information is unavailable, define the missing exchange
and document available alternatives before deciding how to obtain it. Any
reliance on a statutory interoperability exception requires a separate review
of its conditions, necessary portions, subsequent use, and disclosure.
General feature parity or learning does not establish those conditions.

Public references include the
[CLI interface](https://code.claude.com/docs/en/cli-reference),
[headless interface](https://code.claude.com/docs/en/headless),
[hook interface](https://code.claude.com/docs/en/hooks), and
[MCP specification](https://modelcontextprotocol.io/specification/latest).
These links identify candidate interface sources, not permission to redistribute
the linked material or proof about any particular executable version.

## Replace each class of material

| Material | Replacement approach | Required release evidence |
| --- | --- | --- |
| Application modules | Write new code from admitted functional contracts | Packet-to-commit trace and independent review |
| Source maps | Generate maps exclusively from accepted replacement inputs | Enumerate and hash every embedded source payload |
| Prompts, manuals, templates | Author new text for the intended behavior | Authorship record and separate quality evaluation |
| Fonts and icons | Use system assets or separately licensed resources | Exact license, notices, and redistribution conditions |
| Native addons | Implement documented OS interfaces or use licensed packages | Platform tests, dependency identity, and build correspondence |
| Launchers and search helpers | Build explicit launch code and select a documented search implementation | Argument, signal, output-limit, and lifecycle tests |
| Third-party packages | Admit exact versions with verified license obligations | Component inventory and complete package notices |
| Runtime | Use a supported public runtime from a documented distribution | Version, acquisition instructions, and installation checks |
| Fixtures and logs | Author test data and retain only approved export content | Inclusion review covering encoded and generated files |

Avoid recreating proprietary visual assets or copying substantial prose to
make a prototype look complete. Unsupported optional capabilities must report
their absence explicitly.

## Validate the exact release

Build from an explicit file list in a fresh directory without access to the
research checkout. Inspect every included source file and generated output.
Reject undeclared downloads, archives, native files, maps, symlinks, and encoded
payloads until their inclusion has been reviewed.

Run the complete tests against that export. Record source and artifact hashes,
runtime identity, failures, and unsupported features. Compare external behavior
under matching conditions. Test model quality separately with fixed tasks,
repeated trials, measured cost, and correctness criteria.

Similarity and known-hash checks are useful screening tools. They do not prove
independence or determine legal rights. A reviewer needs the development record,
admitted inputs, license decisions, and actual release contents.

## Review claims and preserve the record

Keep acquisition, analysis, implementation, and publication decisions separate.
Identify the actual agreements, actors, dates, copies, territories, and uses.
Any counsel review must identify the release and factual assumptions it covers.
Missing facts remain unknown; a statement of approval does not fill them in.

Preserve available originals and contemporaneous records privately before
changing public distribution. Corrections should use their actual dates.
Do not remove records to create an appearance of independent development.
Record the disposition of unresolved materials separately from accepted files.

Before publishing, review branch and tag histories, releases, workflow artifacts,
packages, Pages, and references retained by the hosting provider. A new root
commit removes old branch ancestry; it does not remove all cached objects,
pull-request references, forks, or copies held by others.
