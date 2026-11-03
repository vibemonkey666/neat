// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var o = new RegExp("^(?:settings|(?:plugin|skill)(?::[A-Za-z0-9][A-Za-z0-9._-]{0,63})?)$"),
  t = new RegExp("^[A-Za-z0-9][A-Za-z0-9._-]{0,63}@[A-Za-z0-9][A-Za-z0-9._-]{0,63}$");
function QMn(n) {
  return typeof n === "string" && o.test(n) ? n : void 0;
}
function ZMn(n) {
  return typeof n === "string" && t.test(n) ? n : void 0;
}
function jhs(n, e) {
  if (n === `PreToolUse:${e}`) return "PreToolUse";
  return n === "tool.check" ? "tool.check" : void 0;
}
function Whs(n) {
  return n === "PreToolUse" || n === "tool.check" ? n : void 0;
}
export { QMn, ZMn, jhs, Whs };

//# sourceMappingURL=chunk-1nnn2mdy.js.map
