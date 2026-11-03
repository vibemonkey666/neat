// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { hb, bv } from "./chunk-ajtyjx88.js";
import { kk } from "./chunk-j0tbz6ra.js";
function o(e) {
  let t = hb(e);
  return t === hb("") ? "(unnamed agent)" : t;
}
function r(e, t, i) {
  return `${o(e)} agent: ${bv(t, i)}`;
}
function s(e, t, i) {
  return {
    type: "notification",
    notification: {
      key: `agent-model-restricted-${o(e)}-${hb(t)}`,
      text: r(e, t, i),
      priority: "medium",
      color: "warning",
      timeoutMs: 1e4
    }
  };
}
function r0n(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}
function xIe(e, t) {
  return (i, n) => {
    t?.(kk(r(e, i, n), "warning"));
  };
}
export { r0n, xIe };

//# sourceMappingURL=chunk-p8e74wwb.js.map
