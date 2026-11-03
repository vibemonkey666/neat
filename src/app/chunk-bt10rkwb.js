// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _ } from "./chunk-4kxznmzw.js";
function h5n(t, e, r, n) {
  return { method: "project_read", path: t, ...(e !== void 0 && { version: e }), ...r, ...n };
}
function lLo(t) {
  return { method: "project_read", path: t };
}
function y5n({ docId: t, read: e }) {
  return { input: _(lLo(t)), result: _(e) };
}
export { h5n, lLo, y5n };

//# sourceMappingURL=chunk-bt10rkwb.js.map
