// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { Ze } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { it } from "./chunk-qmmh8tq2.js";
import { Wue } from "./chunk-jwqtbev0.js";
var c = "it2";
class u {
  inITerm2 = null;
  it2Command = "it2";
  recordInITerm2(e) {
    this.inITerm2 = e;
  }
  recordIt2Command(e) {
    this.it2Command = e;
  }
}
function I() {
  return {
    cachedDetectionResult: null,
    backendsRegistered: !1,
    inProcessFallbackActive: !1,
    TmuxBackendClass: null,
    ITermBackendClass: null,
    tmuxBackend: null,
    itermBackend: null,
    terminalProbes: new u()
  };
}
var lAe = I();
var d = i.TMUX,
  T = i.TMUX_PANE;
function g8n() {
  return !!d;
}
async function Kde() {
  return g8n();
}
function mBr() {
  return T || null;
}
function gBr() {
  if (!d) return null;
  return Ze(d, ",") || null;
}
async function Vze() {
  return (await it(Wue, ["-V"])).code === 0;
}
function KQ(e = lAe) {
  let { terminalProbes: o } = e;
  if (o.inITerm2 !== null) return o.inITerm2;
  let a = i.TERM_PROGRAM,
    s = !!i.ITERM_SESSION_ID,
    l = i.terminal === "iTerm.app",
    n = a === "iTerm.app" || s || l;
  return (o.recordInITerm2(n), n);
}
function EFo(e = lAe) {
  return e.terminalProbes.it2Command;
}
async function D1t(e = lAe) {
  let o = i.SHELL || "/bin/zsh",
    a = await it(o, ["-lc", `command -v ${c}`], { useCwd: !1, timeout: 2000 }),
    s =
      a.code === 0
        ? (a.stdout
            .split(
              `
`
            )
            .map((m) => m.trim())
            .filter(Boolean)
            .at(-1) ?? "")
        : "",
    l = async (m) => it(m, ["session", "list"]),
    n = s || c,
    r = await l(n);
  if (s && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? "")))
    ((n = c), (r = await l(n)));
  if (r.code !== 0)
    return (
      t(
        `[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` +
          (s
            ? "it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled " +
              "(Preferences > General > Magic > Enable Python API)."
            : "it2 was not found on PATH (including login-shell PATH).")
      ),
      !1
    );
  return (e.terminalProbes.recordIt2Command(n), !0);
}
export { lAe, g8n, Kde, mBr, gBr, Vze, KQ, EFo, D1t };

//# sourceMappingURL=chunk-pfg5vy47.js.map
