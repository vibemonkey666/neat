// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { n } from "./chunk-h56pfqh7.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { Jh, Sc, Og, j } from "./chunk-bq35vvkw.js";
import { vn } from "./chunk-a2y39866.js";
j();
j();
function y(s) {
  return s !== "";
}
function C(o, a) {
  return r(
    Sc,
    { children: [a > 0 && e(n, { dimColor: !0, children: " \xB7 " }), o] },
    Og(o) ? (o.key ?? a) : a
  );
}
function Ee(g) {
  let m = w(5),
    { children: l } = g,
    i,
    c;
  if (m[0] !== l) {
    c = vn;
    T: {
      let R = Jh.toArray(l).filter(y);
      if (R.length === 0) {
        c = null;
        break T;
      }
      i = R.map(C);
    }
    ((m[0] = l), (m[1] = i), (m[2] = c));
  } else ((i = m[1]), (c = m[2]));
  if (c !== vn) return c;
  let f;
  if (m[3] !== i) ((f = e(Q, { children: i })), (m[3] = i), (m[4] = f));
  else f = m[4];
  return f;
}
export { Ee };

//# sourceMappingURL=chunk-xzcese97.js.map
