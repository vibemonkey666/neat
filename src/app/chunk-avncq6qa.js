// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { y5 } from "./chunk-ajtyjx88.js";
import { w } from "./chunk-7m7t89vx.js";
import { s, n, Yt } from "./chunk-h56pfqh7.js";
import { ji } from "./chunk-jfdswx4x.js";
import { fp } from "./chunk-bzww5k40.js";
import { vs } from "./chunk-artk45zy.js";
import { e, r } from "./chunk-f790ajz4.js";
import { P, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function Y(l, c) {
  let p = l.match(A);
  if (!p) {
    return e(n, { dimColor: !0, children: l }, c);
  }
  let R = p[0];
  let B = p.index ?? 0;
  let E = l.slice(0, B);
  let F = l.slice(B + R.length);
  return r(n, { dimColor: !0, children: [E, e(Yt, { url: R, children: R }), F] }, c);
}
var A = /https?:\/\/\S+/;
function ylt() {
  let a = w(10),
    f;
  if (a[0] === S) ((f = y5.getInstance().getStatus()), (a[0] = f));
  else f = a[0];
  let [t, C] = y(f),
    m,
    d;
  if (a[1] === S) ((m = () => y5.getInstance().subscribe(C)), (d = []), (a[1] = m), (a[2] = d));
  else ((m = a[1]), (d = a[2]));
  if ((P(m, d), !t.isAuthenticating && !t.error && t.output.length === 0)) {
    return null;
  }
  if (!t.isAuthenticating && !t.error) {
    return null;
  }
  let u;
  if (a[3] !== t.output)
    ((u =
      t.output.length > 0 &&
      e(s, { flexDirection: "column", children: t.output.slice(-5).map(Y) })),
      (a[3] = t.output),
      (a[4] = u));
  else u = a[4];
  let i;
  if (a[5] !== t.error) ((i = t.error && e(vs, { error: t.error })), (a[5] = t.error), (a[6] = i));
  else i = a[6];
  let g;
  if (a[7] !== u || a[8] !== i)
    ((g = e(s, {
      marginY: 1,
      children: r(fp, { color: "permission", title: "Authentication", children: [u, i] })
    })),
      (a[7] = u),
      (a[8] = i),
      (a[9] = g));
  else g = a[9];
  return g;
}
function qr(a) {
  let i = w(10),
    { message: f, bold: t, dimColor: C, subtitle: m } = a,
    d = t === void 0 ? !1 : t,
    u = C === void 0 ? !1 : C,
    g;
  if (i[0] === S) ((g = e(ji, {})), (i[0] = g));
  else g = i[0];
  let l;
  if (i[1] !== d || i[2] !== u || i[3] !== f)
    ((l = r(s, {
      flexDirection: "row",
      children: [g, r(n, { bold: d, dimColor: u, children: [" ", f] })]
    })),
      (i[1] = d),
      (i[2] = u),
      (i[3] = f),
      (i[4] = l));
  else l = i[4];
  let c;
  if (i[5] !== m) ((c = m && e(n, { dimColor: !0, children: m })), (i[5] = m), (i[6] = c));
  else c = i[6];
  let p;
  if (i[7] !== l || i[8] !== c)
    ((p = r(s, { flexDirection: "column", children: [l, c] })), (i[7] = l), (i[8] = c), (i[9] = p));
  else p = i[9];
  return p;
}
export { ylt, qr };

//# sourceMappingURL=chunk-avncq6qa.js.map
