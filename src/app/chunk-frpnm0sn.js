// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { yn, t } from "./chunk-4kxznmzw.js";
import { Ft } from "./chunk-a16y5hcz.js";
import { Pr } from "./chunk-rf7g1m78.js";
import { he, iNe } from "./chunk-95k4nfdh.js";
import { wxe } from "./chunk-13nwb0xt.js";
import { _i, z2, s, n, ts, yf, Ys } from "./chunk-h56pfqh7.js";
import { sDe } from "./chunk-4h2t9wzn.js";
import { PW } from "./chunk-jwhvhjej.js";
import { jPn, wlt, s6e, eno } from "./chunk-8ba87q4q.js";
import { Wd } from "./chunk-358y3whe.js";
import { e, r } from "./chunk-f790ajz4.js";
import { th, P, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { edr } from "./chunk-19egh6zj.js";
import { S, vn } from "./chunk-a2y39866.js";
j();
j();
import { extname as pt } from "path";
var Xt = 500;
function Slt(l, a, i, u) {
  let d = `${u}\x00${sDe.pluginGrammarGeneration}\x00${iNe()}`,
    o = edr(d, i),
    m = l.get(o);
  if (m !== void 0) {
    if ((l.delete(o), m.code === i && m.variant === d)) return (l.set(o, m), m.highlighted);
  }
  let c = a.highlight(i, { language: u });
  if (l.size >= Xt) {
    let g = l.keys().next().value;
    if (g !== void 0) l.delete(g);
  }
  return (l.set(o, { variant: d, code: i, highlighted: c }), c);
}
function X(l) {
  let a = new Map();
  if (l.length <= jPn) return { text: l, markers: a };
  return {
    text: l
      .split(
        `
`
      )
      .map((d, o) => {
        let { code: m, truncatedChars: c } = wlt(d);
        if (c > 0) return (a.set(o, s6e(c)), m);
        return d;
      }).join(`
`),
    markers: a
  };
}
function H(l, a) {
  if (a.size === 0) return l;
  return l
    .split(
      `
`
    )
    .map((i, u) => {
      let d = a.get(u);
      return d ? i + he.dim(d) : i;
    }).join(`
`);
}
function B(l) {
  let c = w(16),
    { code: a, filePath: i, dim: u, skipColoring: d } = l,
    o = u === void 0 ? !1 : u,
    m = d === void 0 ? !1 : d,
    g,
    h;
  if (c[0] !== a || c[1] !== o || c[2] !== m) {
    h = vn;
    ce: {
      g = wxe(a);
      if (m) {
        let { text: k, markers: A } = X(g);
        const x = e(ts, { children: H(k, A) });
        let W;
        if (c[5] !== o || c[6] !== x)
          ((W = e(n, { dimColor: o, children: x })), (c[5] = o), (c[6] = x), (c[7] = W));
        else W = c[7];
        h = W;
        break ce;
      }
    }
    ((c[0] = a), (c[1] = o), (c[2] = m), (c[3] = g), (c[4] = h));
  } else ((g = c[3]), (h = c[4]));
  if (h !== vn) return h;
  let x;
  if (c[8] !== i) ((x = pt(i).slice(1)), (c[8] = i), (c[9] = x));
  else x = c[9];
  let p = x,
    W;
  if (c[10] !== g || c[11] !== p)
    ((W = e(rt, { codeWithSpaces: g, language: p })), (c[10] = g), (c[11] = p), (c[12] = W));
  else W = c[12];
  let At;
  if (c[13] !== o || c[14] !== W)
    ((At = e(n, { dimColor: o, children: W })), (c[13] = o), (c[14] = W), (c[15] = At));
  else At = c[15];
  return At;
}
function rt(l) {
  let u = w(7),
    { codeWithSpaces: a, language: i } = l,
    d;
  if (u[0] === S) ((d = PW()), (u[0] = d));
  else d = u[0];
  let o = d,
    { highlightedCode: m } = z2(),
    c = sDe.pluginGrammarGeneration,
    g;
  if (u[1] !== a || u[2] !== m || u[3] !== i) {
    ce: {
      let { text: h, markers: k } = X(a);
      let A = "markdown";
      if (i) {
        if (o.supportsLanguage(i)) A = i;
        else t(`Language not supported while highlighting code, falling back to markdown: ${i}`);
      }
      ;
      try {
        g = H(Slt(m, o, h, A), k);
      } catch (x) {
        let W = x;
        if (W instanceof Error && W.message.includes("Unknown language")) {
          g =
            (t(`Language not supported while highlighting code, falling back to markdown: ${W}`),
            H(Slt(m, o, h, "markdown"), k));
          break ce;
        }
        g = H(h, k);
      }
    }
    ((u[1] = a), (u[2] = m), (u[3] = i), (u[4] = g));
  } else g = u[4];
  let p = g,
    x;
  if (u[5] !== p) ((x = e(ts, { children: p })), (u[5] = p), (u[6] = x));
  else x = u[6];
  return x;
}
function me(ke, xe) {
  return e(n, { children: e(ts, { children: ke }) }, xe);
}
var Ct = 80,
  Hv = th(function (a) {
    let N = w(40),
      { code: i, filePath: u, width: d, dim: o, startLine: m, lineNumbers: c } = a,
      g = o === void 0 ? !1 : o,
      h = m === void 0 ? 1 : m,
      k = c === void 0 ? !0 : c,
      A = C(null),
      [x, W] = y(Ct),
      ce = d || x,
      [p] = Pr(),
      _ = Wd().syntaxHighlightingDisabled ?? !1,
      z;
    if (N[0] !== i || N[1] !== u || N[2] !== _) {
      Ye: {
        if (_) {
          z = null;
          break Ye;
        }
        let _t = eno();
        if (!_t) {
          z = null;
          break Ye;
        }
        z = new _t(wxe(i), u);
      }
      ((N[0] = i), (N[1] = u), (N[2] = _), (N[3] = z));
    } else z = N[3];
    let F = z,
      $t,
      vt;
    if (N[4] !== d)
      (($t = () => {
        if (!d && A.current) {
          let { width: It } = Ys(A.current);
          if (It > 0) W(It - 2);
        }
      }),
        (vt = [d]),
        (N[4] = d),
        (N[5] = $t),
        (N[6] = vt));
    else (($t = N[5]), (vt = N[6]));
    P($t, vt);
    let Tt;
    if (N[7] !== i) ((Tt = K(i)), (N[7] = i), (N[8] = Tt));
    else Tt = N[8];
    let fe = String(Tt).length + 2,
      gt;
    Ze: {
      if (!k || h === 1) {
        gt = null;
        break Ze;
      }
      let zt = K(i);
      let Q = String(h + zt - 1).length;
      const M = Math.max(0, Q - String(zt).length);
      let f;
      if (N[9] !== Q || N[10] !== M)
        ((f = { digits: Q, extraCols: M }), (N[9] = Q), (N[10] = M), (N[11] = f));
      else f = N[11];
      gt = f;
    }
    let ut = gt,
      pe = _i() || h !== 1,
      M;
    ei: {
      if (F === null) {
        M = null;
        break ei;
      }
      let v = ce - (ut?.extraCols ?? 0) + (k ? 0 : fe);
      if (k && !pe) {
        let f;
        if (N[12] !== F || N[13] !== v || N[14] !== g || N[15] !== p)
          ((f = F.render(p, v, g) ?? []),
            (N[12] = F),
            (N[13] = v),
            (N[14] = g),
            (N[15] = p),
            (N[16] = f));
        else f = N[16];
        let G;
        if (N[17] !== f) ((G = { split: !1, lines: f }), (N[17] = f), (N[18] = G));
        else G = N[18];
        M = G;
        break ei;
      }
      let f;
      if (N[19] !== F || N[20] !== v || N[21] !== g || N[22] !== p)
        ((f = F.renderSplit(p, v, g)),
          (N[19] = F),
          (N[20] = v),
          (N[21] = g),
          (N[22] = p),
          (N[23] = f));
      else f = N[23];
      let { gutters: mt, contents: ht } = f;
      let G;
      if (N[24] !== ht || N[25] !== mt)
        ((G = { split: !0, gutters: mt, contents: ht }), (N[24] = ht), (N[25] = mt), (N[26] = G));
      else G = N[26];
      M = G;
    }
    let b = M,
      f;
    ii: {
      if (ut === null || b === null || !b.split) {
        f = null;
        break ii;
      }
      let { digits: V } = ut;
      let G;
      if (N[27] !== V || N[28] !== b.gutters || N[29] !== h) {
        let ct = h;
        G = b.gutters.map((be) => {
          if (yn(be).trim() === "") {
            return " ".repeat(V + 2);
          }
          let ye = ct;
          return ((ct = ct + 1), ` ${String(ye).padStart(V)} `);
        });
        ((N[27] = V), (N[28] = b.gutters), (N[29] = h), (N[30] = G));
      } else G = N[30];
      f = G;
    }
    let ft = f,
      G;
    if (
      N[31] !== i ||
      N[32] !== g ||
      N[33] !== ft ||
      N[34] !== u ||
      N[35] !== k ||
      N[36] !== b ||
      N[37] !== h ||
      N[38] !== _
    )
      ((G = e(s, {
        ref: A,
        children: b
          ? e(s, {
              flexDirection: "column",
              children: b.split
                ? b.contents.map((Ot, Y) =>
                    !k
                      ? e(n, { children: e(ts, { children: Ot }) }, Y)
                      : e(dt, { gutter: b.gutters[Y], content: Ot, displayGutter: ft?.[Y] }, Y)
                  )
                : b.lines.map(me)
            })
          : r(s, {
              flexDirection: "column",
              children: [
                k && h !== 1 && r(n, { dimColor: !0, children: ["\u2026 from line ", h] }),
                e(B, { code: i, filePath: u, dim: g, skipColoring: _ })
              ]
            })
      })),
        (N[31] = i),
        (N[32] = g),
        (N[33] = ft),
        (N[34] = u),
        (N[35] = k),
        (N[36] = b),
        (N[37] = h),
        (N[38] = _),
        (N[39] = G));
    else G = N[39];
    return G;
  });
function K(l) {
  let a =
    Ft(
      l,
      `
`
    ) + 1;
  return l.endsWith(`
`)
    ? a - 1
    : a;
}
function dt(l) {
  let d = w(8),
    { gutter: a, content: i, displayGutter: u } = l,
    o;
  if (d[0] !== u || d[1] !== a)
    ((o = e(yf, {
      fromLeftEdge: !0,
      children:
        u === void 0
          ? e(n, { children: e(ts, { children: a }) })
          : e(n, { dimColor: !0, children: u })
    })),
      (d[0] = u),
      (d[1] = a),
      (d[2] = o));
  else o = d[2];
  let m;
  if (d[3] !== i) ((m = e(n, { children: e(ts, { children: i }) })), (d[3] = i), (d[4] = m));
  else m = d[4];
  let c;
  if (d[5] !== o || d[6] !== m)
    ((c = r(s, { flexDirection: "row", children: [o, m] })), (d[5] = o), (d[6] = m), (d[7] = c));
  else c = d[7];
  return c;
}
export { Slt, Hv };

//# sourceMappingURL=chunk-frpnm0sn.js.map
