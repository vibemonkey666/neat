// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ai, k } from "./chunk-ajtyjx88.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { i, Zn } from "./chunk-cj37hmns.js";
import { va } from "./chunk-a16y5hcz.js";
import { j$ } from "./chunk-1e5yp9hx.js";
function EFt() {
  return r() !== null;
}
function r() {
  if (i.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (j$()?.settings.disableAgentView === !0)
    return "is disabled by the 'disableAgentView' setting";
  return null;
}
function CE() {
  return !EFt();
}
var s = "tengu_fleetview_simple";
function aOo() {
  return i.CLAUDE_CODE_FLEETVIEW_SIMPLE || k(s, !1);
}
async function kFt(e = {}) {
  if (j$() === null) {
    let { getSettingsWithErrors: t } = await import("./chunk-pc5tq34f.js");
    t();
  }
  if (e.kickGrowthBook !== !1) Ai().catch(() => {});
}
function Pan() {
  return Zn.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 || k("tengu_fleet_past_sessions", !1);
}
function XJe() {
  return CE();
}
function cQ() {
  return !1;
}
function JJe() {
  return k("tengu_amber_anchor", !1);
}
function lOo() {
  return k("tengu_copper_lantern", !1);
}
function a() {
  return k("tengu_quiet_harbor", !1) ? "ask" : "transient";
}
function TLr() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = j$()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return a();
}
function Qp() {
  return JJe() ? "daemon" : "background service";
}
function dhe() {
  return va(Qp());
}
function dTe(e) {
  return XJe() ? ` \u2014 run 'claude daemon ${e}'` : "";
}
function QJe(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  (process.stderr.write(`'${e}' ${o}.
`),
    process.exit(1));
}
var Mqn = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";
function ALr() {
  return !1;
}
function dOo() {
  return !!i.CLAUDE_AGENTS_SELECT;
}
function cOo() {
  let e = Ne(process.env[Mqn]);
  return (delete process.env[Mqn], e);
}
export { EFt, CE, aOo, kFt, Pan, XJe, cQ, JJe, lOo, TLr, Qp, dhe, dTe, QJe, Mqn, ALr, dOo, cOo };

//# sourceMappingURL=chunk-b9vagsrs.js.map
