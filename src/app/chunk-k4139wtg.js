// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt } from "./chunk-wrtp8qz8.js";
import { hQn } from "./chunk-wany0nxw.js";
var t = new nt(() => ({ byToolUse: new Map() }));
function ibo(n, e, i) {
  (t.of(n).byToolUse.set(e, i),
    hQn(n, e, () => {
      hUn(n, e);
    }));
}
function hUn(n, e) {
  t.peek(n)?.byToolUse.delete(e);
}
function UAi(n, e) {
  return e !== void 0 && t.peek(n)?.byToolUse.has(e) === !0;
}
function abo(n, e) {
  if (e === void 0) return;
  let i = t.peek(n)?.byToolUse.get(e);
  return (hUn(n, e), i);
}
export { ibo, hUn, UAi, abo };

//# sourceMappingURL=chunk-k4139wtg.js.map
