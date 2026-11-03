// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vr } from "./chunk-azq9hjy0.js";
import { Fj } from "./chunk-r00j5r9s.js";
function Yhs(e, n = !1) {
  return (
    (!n
      ? `if [ -n "\${GH_TOKEN:-}\${GITHUB_TOKEN:-}\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then
  exec '${e}' "$@"
fi
`
      : `case "\${GH_TOKEN:-}" in ''|'${Fj}') ;; *) exec '${e}' "$@" ;; esac
case "\${GITHUB_TOKEN:-}" in ''|'${Fj}') ;; *) exec '${e}' "$@" ;; esac
if [ -n "\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then
  exec '${e}' "$@"
fi
`) +
    `host="\${GH_HOST:-}"
repo="\${GH_REPO:-}"
prev=''
for a in "$@"; do
  if [ "$prev" = '--hostname' ]; then host="$a"; prev=''; continue; fi
  if [ "$prev" = '--repo' ]; then repo="$a"; prev=''; continue; fi
  case "$a" in
    --hostname) prev='--hostname' ;;
    --hostname=*) host="\${a#--hostname=}" ;;
    -R|--repo) prev='--repo' ;;
    --repo=*) repo="\${a#--repo=}" ;;
    -R=*) repo="\${a#-R=}" ;;
    -R?*) repo="\${a#-R}" ;;
  esac
done
` +
    `# Hostnames are case-insensitive \u2014 normalize before every compare.
` +
    `host="$(printf %s "$host" | tr '[:upper:]' '[:lower:]')"
if [ -n "$host" ] && [ "$host" != '${vr}' ]; then
  exec '${e}' "$@"
fi
# A -R/--repo/GH_REPO [HOST/]OWNER/REPO (or URL) carries its own host
# and overrides the checkout. Otherwise repo-scoped commands resolve
` +
    `# their target from the checkout remote, not GH_HOST \u2014 treat a
` +
    `# non-github.com origin as a GHE signal. An EXPLICIT github.com host
# above skips the origin probe: it must not be kicked off the relay
# by the checkout heuristic.
rhost=''
if [ -n "$repo" ]; then
  case "$repo" in
    *://*) rhost="\${repo#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;
    */*/*) rhost="\${repo%%/*}" ;;
  esac
elif [ -z "$host" ]; then
  origin="$(git config --get remote.origin.url 2>/dev/null || true)"
  case "$origin" in
    *://*) rhost="\${origin#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;
    *@*:*) rhost="\${origin#*@}"; rhost="\${rhost%%:*}" ;;
  esac
fi
rhost="$(printf %s "$rhost" | tr '[:upper:]' '[:lower:]')"
if [ -n "$rhost" ] && [ "$rhost" != '${vr}' ]; then
  exec '${e}' "$@"
fi
`
  );
}
export { Yhs };

//# sourceMappingURL=chunk-wd29gnhh.js.map
