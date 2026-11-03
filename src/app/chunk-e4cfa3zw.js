// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { n } from "./chunk-h56pfqh7.js";
import { w } from "./chunk-7m7t89vx.js";
import { ls } from "./chunk-vgsmcxaz.js";
import { e } from "./chunk-f790ajz4.js";
function HR(m) {
  let R = w(2),
    { children: f, exitActive: o, onInterrupt: l } = m,
    s = o === void 0 ? !0 : o,
    { pending: u, keyName: x } = ls(void 0, l, s);
  const t = u ? `Press ${x} again to exit` : f;
  let r;
  if (R[0] !== t) ((r = e(n, { dimColor: !0, children: t })), (R[0] = t), (R[1] = r));
  else r = R[1];
  return r;
}
export { HR };

//# sourceMappingURL=chunk-e4cfa3zw.js.map
