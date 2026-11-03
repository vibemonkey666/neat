// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { s } from "./chunk-h56pfqh7.js";
import { e } from "./chunk-f790ajz4.js";
function Do(P) {
  let K = w(8),
    {
      onKeyDown: o,
      onPaste: t,
      flexDirection: p,
      gap: n,
      tabIndex: d,
      autoFocus: u,
      children: a
    } = P,
    r = p === void 0 ? "column" : p,
    c = d === void 0 ? 0 : d,
    i = u === void 0 ? !0 : u,
    v;
  if (
    K[0] !== i ||
    K[1] !== a ||
    K[2] !== r ||
    K[3] !== n ||
    K[4] !== o ||
    K[5] !== t ||
    K[6] !== c
  )
    ((v = e(s, {
      flexDirection: r,
      gap: n,
      tabIndex: c,
      autoFocus: i,
      onKeyDown: o,
      onPaste: t,
      children: a
    })),
      (K[0] = i),
      (K[1] = a),
      (K[2] = r),
      (K[3] = n),
      (K[4] = o),
      (K[5] = t),
      (K[6] = c),
      (K[7] = v));
  else v = K[7];
  return v;
}
export { Do };

//# sourceMappingURL=chunk-bffrn2r2.js.map
