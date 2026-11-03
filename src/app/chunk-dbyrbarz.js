// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Tu } from "./chunk-jazcqqqr.js";
var a = 120000,
  i = 600000;
function Rde(n = process.env) {
  let e = n.BASH_DEFAULT_TIMEOUT_MS;
  if (e) {
    let t = Tu(e);
    if (!isNaN(t) && t > 0) return t;
  }
  return a;
}
function JDe(n = process.env) {
  let e = n.BASH_MAX_TIMEOUT_MS;
  if (e) {
    let t = Tu(e);
    if (!isNaN(t) && t > 0) return Math.max(t, Rde(n));
  }
  return Math.max(i, Rde(n));
}
var s = 1800000;
function Jhe() {
  return Math.min(Math.max(7200000, JDe()), 2147483647);
}
function $Ks(n) {
  return Math.max(s, Rde(n));
}
function o6n(n, e) {
  return n !== void 0 && n > 0 ? e : void 0;
}
var _ = 2000;
function s6n({
  requestedTimeoutMs: n,
  isMainAgent: e,
  canAutoBackground: t,
  env: u = process.env
}) {
  if (!e || !t) return n;
  let o = u.CLAUDE_CODE_AUTO_BACKGROUND_TIMEOUT_MS;
  if (!o) return n;
  let r = Tu(o);
  if (isNaN(r) || r <= 0) return n;
  return Math.min(n, Math.max(r, _));
}
export { Rde, JDe, Jhe, $Ks, o6n, s6n };

//# sourceMappingURL=chunk-dbyrbarz.js.map
