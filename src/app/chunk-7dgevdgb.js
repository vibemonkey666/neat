// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { fh } from "./chunk-63a6mqbs.js";
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { i } from "./chunk-cj37hmns.js";
import { QZo, Hlr } from "./chunk-4nzy53ma.js";
import { whe } from "./chunk-6h7ejyet.js";
import { cV } from "./chunk-wany0nxw.js";
var $7t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
  F7t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
  CMt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
  U7t = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";
function uTs(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e;
}
function QNn({ toolPermissionContext: e }) {
  let t = e.proactivityBaseline;
  return t === void 0 ? {} : { [$7t]: t.mode };
}
function ZNn({ proactivityLevel: e, toolPermissionContext: t }) {
  let n = { [F7t]: e };
  if (t.startupModeDecidedByProactivityLevel !== void 0) n[CMt] = "1";
  if (cV()) n[U7t] = "1";
  return n;
}
function fTs({ toolPermissionContext: e }) {
  return e.startupModeDecidedByProactivityLevel === void 0 ? { [CMt]: "0" } : {};
}
function pTs(e) {
  return (
    Hlr(e) !== "fresh" ||
    QZo(e).some((t) => t === "--permission-mode" || t.startsWith("--permission-mode="))
  );
}
function mTs(e) {
  let t = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = fh(t);
  if (n === "bypassPermissions" && !e) return;
  return n;
}
function gTs() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if ((i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), whe(e))) return e;
  (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"),
    i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"));
  return;
}
function hTs() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return (i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), Ne(e));
}
function yTs() {
  return (
    whe(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Ne(i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON)
  );
}
function e$n() {
  let e = i.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if ((i.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), Ne(e))) return !0;
  if (is(e)) return !1;
  return;
}
export { $7t, F7t, CMt, U7t, uTs, QNn, ZNn, fTs, pTs, mTs, gTs, hTs, yTs, e$n };

//# sourceMappingURL=chunk-7dgevdgb.js.map
