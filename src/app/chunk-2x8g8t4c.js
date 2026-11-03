// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Gc } from "./chunk-wrtp8qz8.js";
import { Pt } from "./chunk-xe386mry.js";
import { hM } from "./chunk-7c3thgax.js";
import { Ut, k } from "./chunk-ajtyjx88.js";
function J7t() {
  return hM("autoContinueAtUsageLimit")[0];
}
function u$n(e) {
  return J7t() ?? e === "absent";
}
var u = "tengu_marble_heron";
function zEr() {
  let e = n();
  return o(e) ? e : {};
}
function NBe() {
  let e = n();
  return r(o(e) ? e.enabled : e);
}
function Q7t() {
  return Gc() && !Ut() && !Pt();
}
function ITs() {
  return Q7t() && NBe();
}
function f$n() {
  return r(zEr().autoArm);
}
function n() {
  return k(u, {});
}
function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function r(e) {
  if (e === void 0) return !0;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0";
  }
  return Boolean(e);
}
export { J7t, u$n, zEr, NBe, Q7t, ITs, f$n };

//# sourceMappingURL=chunk-2x8g8t4c.js.map
