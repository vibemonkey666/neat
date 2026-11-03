// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { s, n, yf } from "./chunk-h56pfqh7.js";
import { $6 } from "./chunk-j4ng5v52.js";
import { e, r } from "./chunk-f790ajz4.js";
import { Gt, be, j } from "./chunk-bq35vvkw.js";
j();
j();
function Ge(m) {
  let a = w(11),
    { children: t, height: c, screenReaderLabel: i } = m;
  if (be(o)) {
    return t;
  }
  const R = i === void 0;
  let d;
  if (a[0] !== i || a[1] !== R)
    ((d = e(yf, {
      fromLeftEdge: !0,
      flexShrink: 0,
      children: r(n, {
        "aria-hidden": R,
        "aria-label": i,
        dimColor: !0,
        children: ["  ", "\u23BF \xA0"]
      })
    })),
      (a[0] = i),
      (a[1] = R),
      (a[2] = d));
  else d = a[2];
  let l;
  if (a[3] !== t) ((l = e(s, { flexShrink: 1, flexGrow: 1, children: t })), (a[3] = t), (a[4] = l));
  else l = a[4];
  let x;
  if (a[5] !== c || a[6] !== d || a[7] !== l)
    ((x = e(f, {
      children: r(s, { flexDirection: "row", height: c, overflowY: "hidden", children: [d, l] })
    })),
      (a[5] = c),
      (a[6] = d),
      (a[7] = l),
      (a[8] = x));
  else x = a[8];
  let h = x;
  if (c !== void 0) {
    return h;
  }
  let L;
  if (a[9] !== h) ((L = e($6, { lock: "offscreen", children: h })), (a[9] = h), (a[10] = L));
  else L = a[10];
  return L;
}
var o = Gt(!1);
function Elt() {
  return be(o);
}
function f(m) {
  let c = w(2),
    { children: t } = m,
    i;
  if (c[0] !== t) ((i = e(o.Provider, { value: !0, children: t })), (c[0] = t), (c[1] = i));
  else i = c[1];
  return i;
}
export { Ge, Elt };

//# sourceMappingURL=chunk-1sr6vjz6.js.map
