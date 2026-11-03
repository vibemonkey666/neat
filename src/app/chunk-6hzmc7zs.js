// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function V9(n) {
  return n.replace(/[-_]/g, "").toLowerCase();
}
function Gir(n) {
  return new Map(n.map((t) => [V9(t), t]));
}
function mn(n) {
  if (typeof n !== "object" || n === null) return !1;
  let t = Object.getPrototypeOf(n);
  return t === Object.prototype || t === null;
}
export { V9, Gir, mn };

//# sourceMappingURL=chunk-6hzmc7zs.js.map
