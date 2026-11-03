// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Iv } from "./chunk-h5gbmqm1.js";
import { Ze, fee } from "./chunk-a16y5hcz.js";
function kNo(n) {
  return n.birthtimeNs > 0n && n.birthtimeNs !== n.ctimeNs ? n.birthtimeNs.toString() : void 0;
}
function i(n) {
  return n >= -(2n ** 63n) && n < -1n ? n + 2n ** 64n : n;
}
function tun(n, t) {
  return i(n) === i(t);
}
function e(n) {
  return fee(Ze(n, "."), " ");
}
function TNo(n) {
  return /^con(in|out)\$$/i.test(e(n));
}
var o = /[<>"|?*\\\x00-\x1f]/;
function jVs(n) {
  return n.split("/").some((t) => o.test(t));
}
function W6n(n) {
  return n
    .split("/")
    .some(
      (t) =>
        t.includes(":") ||
        t.endsWith(".") ||
        t.endsWith(" ") ||
        Iv(e(t).replace(/ {2,}/g, " ")) ||
        TNo(t)
    );
}
var r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function s(n) {
  return fee(Ze(n, ":"), ". ");
}
function nun(n) {
  return n.split("/").some((t) => r.test(s(t)));
}
export { kNo, tun, TNo, jVs, W6n, nun };

//# sourceMappingURL=chunk-wp7k62hm.js.map
