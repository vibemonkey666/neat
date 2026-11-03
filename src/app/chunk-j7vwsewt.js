// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { sl } from "./chunk-1kj0zhn3.js";
import { s } from "./chunk-h56pfqh7.js";
import { Ql } from "./chunk-q7wvyqpk.js";
import { e, r } from "./chunk-f790ajz4.js";
var iw = 2,
  IC = 1,
  Vq = 2;
function Hs(d) {
  let c = w(9),
    { children: t, color: i } = d;
  if (sl()) {
    let o;
    if (c[0] !== t)
      ((o = e(s, { flexDirection: "column", paddingX: IC, flexShrink: 0, children: t })),
        (c[0] = t),
        (c[1] = o));
    else o = c[1];
    return o;
  }
  let o;
  if (c[2] !== i) ((o = e(Ql, { color: i })), (c[2] = i), (c[3] = o));
  else o = c[3];
  let n;
  if (c[4] !== t)
    ((n = e(s, { flexDirection: "column", paddingX: iw, children: t })), (c[4] = t), (c[5] = n));
  else n = c[5];
  let l;
  if (c[6] !== o || c[7] !== n)
    ((l = r(s, { flexDirection: "column", paddingTop: 1, children: [o, n] })),
      (c[6] = o),
      (c[7] = n),
      (c[8] = l));
  else l = c[8];
  return l;
}
export { iw, IC, Vq, Hs };

//# sourceMappingURL=chunk-j7vwsewt.js.map
