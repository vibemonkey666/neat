# Included materials and dependencies

The release inclusion list is [release-policy.json](release-policy.json).
It includes Python implementation files, tests, one JSON example, and project
documentation. The release contains no vendored software packages or copied
runtime distributions. The prototype carries no claim of certified independent
development under a clean-room process.

Python is a user-supplied dependency. The implementation uses Python's standard
library, including its SQLite binding, POSIX file locking, and process APIs.
The Python distributor's notices and the applicable operating-system component
licenses remain relevant to those installations. This project does not bundle
those components or extend their license grants.

Documentation links identify public interface references. No linked software,
manual, font, or other asset is included merely because a link appears here.

If a dependency is proposed later, record its exact version, source, digest,
license, required notices, and distribution obligations before adding it.
Inspect generated archives as well as source. Record each accepted inclusion
and make unresolved materials fail the release check.
