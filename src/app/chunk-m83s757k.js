// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { cr, k } from "./chunk-ajtyjx88.js";
import { S_, i } from "./chunk-cj37hmns.js";
import { j$ } from "./chunk-1e5yp9hx.js";
import { on } from "./chunk-cr7a2cdd.js";
import { js } from "./chunk-96sx3c3k.js";
var TGo = ["unrestricted", "small", "medium", "large"],
  a = "medium",
  u = "small";
function Tgn(e) {
  return TGo.find((o) => o === e);
}
var n = { small: 5, medium: 10, large: 50 };
function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`;
}
function yJs(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}
function _Js(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}
function f(e) {
  if (!(e in n)) return e;
  return `${e} \u2014 keep workflows under ${n[e]} agents`;
}
function d() {
  return "This is a guideline, not a hard limit \u2014 follow it unless the user's prompt calls for a different scale.";
}
function bJs(e, o) {
  let t = o
      ? "This session has the default workflow size guideline:"
      : "A workflow size guideline is configured for this session:",
    r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
function SJs(e) {
  if (e === "unrestricted")
    return "Workflow size is now unrestricted \u2014 no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function i7n() {
  return SGr() || j$()?.settings.disableWorkflows === !0;
}
function SGr() {
  return i.CLAUDE_CODE_DISABLE_WORKFLOWS;
}
class w {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return ((this.cached = m()), this.cached);
  }
}
var p = new W(() => new w());
function jm() {
  return AGo() === void 0;
}
function AGo() {
  if (!S_()) return "unsupported_runtime";
  let e = i7n(),
    o =
      e && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && js("disableWorkflows", !1).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!l7n()) return "org_policy";
  let { available: t, defaultOn: r } = l();
  if (!t) return "unavailable";
  if (!(j$()?.settings.enableWorkflows ?? r)) {
    let s = js("enableWorkflows", r).source;
    return s === "userSettings" || s === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
function CGo() {
  return l().defaultOn;
}
function o_e() {
  return cr() === "pro" ? u : a;
}
function a7n() {
  return l7n() && !i.CLAUDE_CODE_DISABLE_WORKFLOWS && l().available;
}
function Agn() {
  return j$()?.settings.workflowKeywordTriggerEnabled ?? !0;
}
function l7n() {
  return on("allow_workflows");
}
function wJs() {
  if (!S_() || i7n() || !l7n()) return !0;
  if (j$()?.settings.enableWorkflows === !1) return !0;
  return i.CLAUDE_CODE_WORKFLOWS === !1 || !k("tengu_workflows_enabled", !0);
}
function l() {
  return p.of(U().host).resolve();
}
function m() {
  if (!S_()) return { available: !1, defaultOn: !1 };
  if (i.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = k("tengu_workflows_enabled", !0);
    return { available: o, defaultOn: o };
  }
  if (i.CLAUDE_CODE_WORKFLOWS === !1) return { available: !1, defaultOn: !1 };
  if (!k("tengu_workflows_enabled", !0)) return { available: !1, defaultOn: !1 };
  return { available: !0, defaultOn: cr() !== "pro" };
}
function RGo() {
  return k("tengu_jade_compass", !0);
}
export { TGo, Tgn, yJs, _Js, bJs, SJs, i7n, SGr, jm, AGo, CGo, o_e, a7n, Agn, l7n, wJs, RGo };

//# sourceMappingURL=chunk-m83s757k.js.map
