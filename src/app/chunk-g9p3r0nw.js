// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function Vgs(t) {
  return /\bgit\b(?:\s+(?:-C\s+\S+|-c\s+\S+=\S+|--\S+))*\s+commit(?:\s|$)/.test(t);
}
function qgs(t, n, s) {
  if (s !== void 0) return s === 0;
  let e = [
      /\[\w+[^\]]*\]\s+/,
      /create mode/,
      /\d+ files? changed/,
      /\d+ insertions?/,
      /\d+ deletions?/
    ],
    i = t + n;
  return e.some((o) => o.test(i));
}
export { Vgs, qgs };

//# sourceMappingURL=chunk-g9p3r0nw.js.map
