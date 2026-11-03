// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { pS, cai, q5 } from "./chunk-znkwh1rm.js";
import { i } from "./chunk-cj37hmns.js";
import { pt } from "./chunk-7c3thgax.js";
import { otr } from "./chunk-qfvcfbk8.js";
function f5(e) {
  return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (e ?? pt()).disableBundledSkills === !0;
}
var sVr = "allow_bundled_skills";
function rVe() {
  return !pS(sVr);
}
function n() {
  return cai() ?? otr;
}
function RV(e) {
  return rVe() && !n().includes(e);
}
function woe(e, t) {
  return f5(t) || RV(e);
}
function wei() {
  return q5(sVr, "Bundled skills", "are");
}
function rtr(e) {
  let t = rVe();
  return `${f5(e)}:${t}:${t ? n().join(",") : ""}`;
}
function iVr(e, t) {
  return e.type === "prompt" && e.source === "builtin" && woe(e.name, t);
}
export { f5, sVr, rVe, RV, woe, wei, rtr, iVr };

//# sourceMappingURL=chunk-s6fbb5tf.js.map
