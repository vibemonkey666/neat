// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { di } from "./chunk-a16y5hcz.js";
var ZRn = "[changes pane] repository not shown:",
  dZr =
    'See the runner option --diff-finds-nested-repository in "claude self-hosted-runner --help" and in the operator guide.',
  cZr = `${ZRn} Further reasons are not shown: eight have been, for this session's process.`,
  uZr = `${ZRn} The runner's first argument did not reach Claude Code in first place, so --diff-finds-nested-repository is off for this session. If a wrapper script or command hook starts Claude Code, it must put nothing before "$@": its own options go after. See "Pass every argument through" in the operator guide.`,
  fZr =
    "The variable in which the runner names the folder for the checked copy of the repository's git settings (CLAUDE_CODE_DIFF_COPY_ROOT) did not reach Claude Code as an absolute path. If a wrapper script or command hook starts Claude Code, it must pass the runner's environment on unchanged.",
  pZr =
    "The git that Claude Code runs is older than 2.32, or its version could not be read; an older git would follow a .gitattributes or .gitignore committed as a link. Update git to 2.32 or newer.",
  t = di("Its own git settings (.git/config or .git/config.worktree)"),
  o = String.raw`"[a-z0-9-]{1,40}(?:\.<\.\.\.>)?\.[a-z0-9-]{1,40}" \(shown in lower case(?:, "<\.\.\.>" for the middle of its name)?\)`,
  s = "commondir|gitdir|reftable",
  n = String.raw`config|config\.worktree|HEAD|packed-refs|shallow`,
  r = "refs|info",
  i = [
    String.raw`oversized \.git`,
    String.raw`unknown \.git entry`,
    String.raw`no \.git/config or \.git/HEAD`,
    String.raw`symlinked, hardlinked or unexpected \.git/index`,
    String.raw`symlinked or oversized \.git/objects entry`,
    String.raw`\.git/objects/info/alternates`,
    String.raw`config config(?:\.worktree)? unlistable`,
    "a folder that is no longer the one that was checked",
    String.raw`\.git/(?:${s})`,
    String.raw`symlinked or unexpected \.git/(?:${n}|${r}|objects)`,
    String.raw`unreadable, linked or oversized \.git/(?:${n})`,
    String.raw`unreadable, linked or oversized entry under \.git/(?:${r})`
  ].join("|");
function jls(e) {
  return new RegExp(`^(?:${i})$`).test(e);
}
var a = [
    `${t} have a setting whose name is not shown: it is too long, or not plain letters, digits and dashes\\.`,
    `${t} have the setting ${o}, which is not one Claude Code accepts there\\.`,
    `${t} give the setting ${o} a value that is not one Claude Code accepts there\\.`,
    `${t} give the setting ${o} a value that runs over several lines\\.`,
    di(
      "An unexpected error stopped the check of its .git folder; the session's debug log has the details."
    ),
    `The check of its \\.git folder stopped at: (?:${i})\\.`,
    di("The check of its .git folder stopped for a reason that is not shown."),
    di(fZr),
    di(pZr)
  ],
  d = new RegExp(`^${di(ZRn)} (?:${a.join("|")}) ${di(dZr)}$`);
function Wls(e) {
  return e === cZr || e === uZr || d.test(e);
}
export { ZRn, dZr, cZr, uZr, fZr, pZr, jls, Wls };

//# sourceMappingURL=chunk-42gtc8xf.js.map
