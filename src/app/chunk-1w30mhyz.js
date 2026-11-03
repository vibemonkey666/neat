// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { $r } from "./chunk-a2y39866.js";
var I7t = {};
$r(I7t, {
  booleanOfInput: () => a8e,
  default: () => I7t,
  isHeldTrue: () => oEr,
  numberInputHint: () => x7t,
  numberOfInput: () => P7t
});
var a8e = (n) => (Ne(n) ? !0 : is(n) ? !1 : void 0);
var oEr = (n) => n === !0 || n === "true";
function x7t(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-\u221E"} and ${n.max ?? "\u221E"}` : ""}.`;
}
function P7t(n, e) {
  let r = n.trim(),
    t = Number(r);
  return r !== "" &&
    Number.isFinite(t) &&
    (e.min === void 0 || t >= e.min) &&
    (e.max === void 0 || t <= e.max)
    ? t
    : void 0;
}
export { a8e, oEr, x7t, P7t, I7t };

//# sourceMappingURL=chunk-1w30mhyz.js.map
