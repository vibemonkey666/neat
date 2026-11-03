// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function r(n) {
  return n;
}
function b(n) {
  return r(n);
}
function c(n) {
  return r(n);
}
function ce(n) {
  return n == null ? void 0 : r(n);
}
function Vr(n) {
  return r(String(n));
}
function Wq(n) {
  return n == null ? void 0 : r(String(n));
}
function Ku(...n) {
  return r(n.join(""));
}
function Scr(n) {
  return r(n.join(","));
}
function Ka(n) {
  return r([...n].sort().join(","));
}
function $b(n, e) {
  return r(n.join(e ?? ","));
}
function Hn(n) {
  return r(n);
}
function Xw(n, e) {
  return e ? Hn(n) : void 0;
}
function Uss(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? Hn(n) : b("none");
}
function dpe(n, e) {
  return e ? Hn(n) : b("custom");
}
function cpe(n) {
  return dpe(n.agentType, n.source === "built-in");
}
function gJr(n, e) {
  return e ? Hn(n) : b("third-party");
}
export { b, c, ce, Vr, Wq, Ku, Scr, Ka, $b, Hn, Xw, Uss, dpe, cpe, gJr };

//# sourceMappingURL=chunk-acd8w9vv.js.map
