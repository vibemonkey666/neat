// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { ka } from "./chunk-rv488r12.js";
import { V } from "./chunk-j32s98r9.js";
import { e } from "./chunk-f790ajz4.js";
function ft(x) {
  let N = w(7),
    {
      action: h,
      context: k,
      fallback: K,
      description: o,
      parens: t,
      bold: n,
      terse: r,
      format: i
    } = x,
    a = ka(h, k, K),
    s;
  if (N[0] !== n || N[1] !== a || N[2] !== o || N[3] !== i || N[4] !== t || N[5] !== r)
    ((s = e(V, { chord: a, action: o, parens: t, bold: n, terse: r, format: i })),
      (N[0] = n),
      (N[1] = a),
      (N[2] = o),
      (N[3] = i),
      (N[4] = t),
      (N[5] = r),
      (N[6] = s));
  else s = N[6];
  return s;
}
export { ft };

//# sourceMappingURL=chunk-g2kc6h82.js.map
