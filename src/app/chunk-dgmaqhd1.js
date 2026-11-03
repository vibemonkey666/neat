// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Te } from "./chunk-pbpv20s6.js";
import { Mos } from "./chunk-wrtp8qz8.js";
import { w } from "./chunk-7m7t89vx.js";
import { le } from "./chunk-vw9e882a.js";
import { zst } from "./chunk-xe386mry.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Vc } from "./chunk-rwaeax2b.js";
import { ZM } from "./chunk-7nfw1dx3.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { Jh, Sc, Og, kt, j } from "./chunk-bq35vvkw.js";
j();
function re(ce) {
  return Jh.toArray(ce.props.children);
}
function ie(de) {
  return de.header !== void 0;
}
function se(me) {
  return me.header;
}
var k = { start: "flex-start", center: "center", end: "flex-end" },
  A = 2,
  Txt = 12;
function I(o) {
  if (typeof o === "string" || typeof o === "number") return !0;
  if (Og(o) && o.type === Sc) return !0;
  return !1;
}
function H(o, i, h) {
  if (!I(o)) return o;
  return e(n, { dimColor: i.dim && !h, bold: i.bold || h, children: o });
}
function B(o) {
  return le(ZM(o));
}
function G(o, i, h, b) {
  let y = o.length,
    c = o.map((t, l) => {
      let u = h ? B(t.header) : 0;
      for (let d of i) u = Math.max(u, B(d[l]));
      return u;
    }),
    p = Array(y),
    a = [];
  for (let t = 0; t < y; t++) {
    let l = o[t].width;
    if (l === "fill") p[t] = 0;
    else if (typeof l === "number") p[t] = l;
    else if (l && "ratio" in l && l.ratio !== void 0) (a.push(t), (p[t] = 0));
    else if (l) p[t] = Vc(c[t], l.min ?? 0, l.max ?? 1 / 0);
    else p[t] = c[t];
  }
  if (a.length > 0) {
    let t = p.reduce((d, m) => d + m, 0),
      l = Math.max(0, b - A * (y - 1) - t),
      u = a.reduce((d, m) => d + (o[m].width.ratio ?? 0), 0);
    for (let d of a) {
      let m = o[d].width,
        f = u > 0 ? Math.floor((l * (m.ratio ?? 0)) / u) : 0;
      p[d] = Vc(f, m.min ?? 1, m.max ?? 1 / 0);
    }
  }
  return p;
}
function W(o) {
  let l = w(16),
    { cells: i, columns: h, widths: b, isHeader: y } = o,
    c = h.length - 1,
    p = h[c]?.width,
    a = p === "fill" ? Txt : p === void 0 ? Math.min(Txt, b[c] ?? 0) : 0;
  const t = a > 0 ? "wrap" : "nowrap";
  let u;
  if (l[0] !== i || l[1] !== h || l[2] !== a || l[3] !== y || l[4] !== c || l[5] !== b) {
    let d;
    if (l[7] !== i || l[8] !== a || l[9] !== y || l[10] !== c || l[11] !== b)
      ((d = (m, f) =>
        m.width === "fill"
          ? e(
              s,
              {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                minWidth: f === c ? a : 1,
                justifyContent: k[m.align ?? "start"],
                children: H(i[f], m, y)
              },
              f
            )
          : e(
              s,
              {
                width: b[f] || void 0,
                flexShrink: f === c && m.width === void 0 ? 1 : 0,
                flexBasis: f === c && a > 0 ? a : void 0,
                flexGrow: f === c && a > 0 ? 1 : 0,
                maxWidth: f === c && a > 0 ? b[f] : void 0,
                justifyContent: k[m.align ?? "start"],
                children: H(i[f], m, y)
              },
              f
            )),
        (l[7] = i),
        (l[8] = a),
        (l[9] = y),
        (l[10] = c),
        (l[11] = b),
        (l[12] = d));
    else d = l[12];
    u = h.map(d);
    ((l[0] = i), (l[1] = h), (l[2] = a), (l[3] = y), (l[4] = c), (l[5] = b), (l[6] = u));
  } else u = l[6];
  let d;
  if (l[13] !== t || l[14] !== u)
    ((d = e(s, { flexDirection: "row", columnGap: A, flexWrap: t, children: u })),
      (l[13] = t),
      (l[14] = u),
      (l[15] = d));
  else d = l[15];
  return d;
}
function L(o) {
  let h = w(2),
    { children: i } = o,
    b;
  if (h[0] !== i) ((b = e(Q, { children: i })), (h[0] = i), (h[1] = b));
  else b = h[1];
  return b;
}
function P(o) {
  let p = w(12),
    { columns: i, children: h, forceWidth: b } = o,
    { columns: y } = Te(),
    c = b ?? y,
    a,
    t,
    l,
    u;
  if (p[0] !== h || p[1] !== i || p[2] !== c) {
    let d = Jh.toArray(h).filter(Og);
    let m = d.map(re);
    let f = i.some(ie);
    let V = G(i, m, f, c);
    a = s;
    t = "column";
    l = f && e(W, { cells: i.map(se), columns: i, widths: V, isHeader: !0 });
    u = m.map((ae, X) => e(W, { cells: ae, columns: i, widths: V, isHeader: !1 }, d[X].key ?? X));
    ((p[0] = h), (p[1] = i), (p[2] = c), (p[3] = a), (p[4] = t), (p[5] = l), (p[6] = u));
  } else ((a = p[3]), (t = p[4]), (l = p[5]), (u = p[6]));
  let Z;
  if (p[7] !== a || p[8] !== t || p[9] !== l || p[10] !== u)
    ((Z = r(a, { flexDirection: t, children: [l, u] })),
      (p[7] = a),
      (p[8] = t),
      (p[9] = l),
      (p[10] = u),
      (p[11] = Z));
  else Z = p[11];
  return Z;
}
var Zf = Object.assign(P, { Row: L });
j();
function TPe(o) {
  return kt(Mos, () => zst(o));
}
export { Txt, Zf, TPe };

//# sourceMappingURL=chunk-dgmaqhd1.js.map
