// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Te } from "./chunk-pbpv20s6.js";
import { F } from "./chunk-wrtp8qz8.js";
import { Zo } from "./chunk-13nwb0xt.js";
import { w } from "./chunk-7m7t89vx.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Pf, tb } from "./chunk-63vsgmqn.js";
import { my } from "./chunk-mmhbf5yf.js";
import { Hv } from "./chunk-frpnm0sn.js";
import { Ge } from "./chunk-1sr6vjz6.js";
import { H6 } from "./chunk-bbcypp50.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { S } from "./chunk-a2y39866.js";
var D = 10;
function jie(Z) {
  let t = w(39),
    {
      file_path: o,
      operation: p,
      patch: h,
      firstLine: R,
      fileContent: k,
      content: v,
      style: C,
      verbose: m
    } = Z,
    { columns: q } = Te(),
    d;
  if (t[0] !== p)
    ((d = r(n, { color: "subtle", children: ["User rejected ", p, " to "] })),
      (t[0] = p),
      (t[1] = d));
  else d = t[1];
  let c;
  if (t[2] !== o || t[3] !== m) ((c = m ? o : Zo(o)), (t[2] = o), (t[3] = m), (t[4] = c));
  else c = t[4];
  let P;
  if (t[5] !== o || t[6] !== c)
    ((P = e(n, { bold: !0, color: "subtle", children: e(my, { filePath: o, children: c }) })),
      (t[5] = o),
      (t[6] = c),
      (t[7] = P));
  else P = t[7];
  let H;
  if (t[8] !== d || t[9] !== P)
    ((H = r(s, { flexDirection: "row", children: [d, P] })), (t[8] = d), (t[9] = P), (t[10] = H));
  else H = t[10];
  let i = H;
  if (C === "condensed" && !m) {
    let l;
    if (t[11] !== i) ((l = e(Ge, { children: i })), (t[11] = i), (t[12] = l));
    else l = t[12];
    return l;
  }
  if (p === "write" && v !== void 0) {
    let a, l;
    if (t[13] !== v || t[14] !== m) {
      let u = v.split(`
`);
      a = u.length - D;
      l = m
        ? v
        : u.slice(0, D).join(`
`);
      ((t[13] = v), (t[14] = m), (t[15] = a), (t[16] = l));
    } else ((a = t[15]), (l = t[16]));
    let x = l;
    const f = x || "(No content)";
    const b = q - 12;
    let _;
    if (t[17] !== o || t[18] !== f || t[19] !== b)
      ((_ = e(Hv, { code: f, filePath: o, width: b, dim: !0 })),
        (t[17] = o),
        (t[18] = f),
        (t[19] = b),
        (t[20] = _));
    else _ = t[20];
    let A;
    if (t[21] !== a || t[22] !== m)
      ((A = !m && e(tb, { count: a })), (t[21] = a), (t[22] = m), (t[23] = A));
    else A = t[23];
    let z;
    if (t[24] !== _ || t[25] !== A || t[26] !== i)
      ((z = e(Ge, { children: r(s, { flexDirection: "column", children: [i, _, A] }) })),
        (t[24] = _),
        (t[25] = A),
        (t[26] = i),
        (t[27] = z));
    else z = t[27];
    return z;
  }
  if (!h || h.length === 0) {
    let l;
    if (t[28] !== i) ((l = e(Ge, { children: i })), (t[28] = i), (t[29] = l));
    else l = t[29];
    return l;
  }
  const l = q - 12;
  let f;
  if (t[30] !== k || t[31] !== o || t[32] !== R || t[33] !== h || t[34] !== l)
    ((f = e(H6, { hunks: h, dim: !0, width: l, filePath: o, firstLine: R, fileContent: k })),
      (t[30] = k),
      (t[31] = o),
      (t[32] = R),
      (t[33] = h),
      (t[34] = l),
      (t[35] = f));
  else f = t[35];
  let b;
  if (t[36] !== f || t[37] !== i)
    ((b = e(Ge, { children: r(s, { flexDirection: "column", children: [i, f] }) })),
      (t[36] = f),
      (t[37] = i),
      (t[38] = b));
  else b = t[38];
  return b;
}
function pt(_) {
  return _.startsWith("+");
}
function dt(A, z) {
  return A + F(z.lines, pt);
}
function ht(vt) {
  return vt.startsWith("-");
}
function at(Pt, bt) {
  return Pt + F(bt.lines, ht);
}
function B3t(Z) {
  let c = w(25),
    {
      filePath: o,
      structuredPatch: p,
      firstLine: h,
      fileContent: R,
      style: k,
      verbose: v,
      previewHint: C,
      collapsed: m
    } = Z,
    { columns: q } = Te(),
    t = p.reduce(dt, 0),
    d = p.reduce(at, 0),
    P;
  if (c[0] !== t)
    ((P =
      t > 0
        ? r(Q, {
            children: ["Added ", e(n, { bold: !0, children: t }), " ", t > 1 ? "lines" : "line"]
          })
        : null),
      (c[0] = t),
      (c[1] = P));
  else P = c[1];
  const H = t > 0 && d > 0 ? ", " : null;
  let i;
  if (c[2] !== t || c[3] !== d)
    ((i =
      d > 0
        ? r(Q, {
            children: [
              t === 0 ? "R" : "r",
              "emoved ",
              e(n, { bold: !0, children: d }),
              " ",
              d > 1 ? "lines" : "line"
            ]
          })
        : null),
      (c[2] = t),
      (c[3] = d),
      (c[4] = i));
  else i = c[4];
  let l;
  if (c[5] !== P || c[6] !== H || c[7] !== i)
    ((l = r(n, { children: [P, H, i] })), (c[5] = P), (c[6] = H), (c[7] = i), (c[8] = l));
  else l = c[8];
  let a = l;
  if (C) {
    if (k !== "condensed" && !v) {
      let u;
      if (c[9] !== C)
        ((u = e(Ge, { children: e(n, { dimColor: !0, children: C }) })), (c[9] = C), (c[10] = u));
      else u = c[10];
      return u;
    }
  } else if (k === "condensed" && !v) {
    return a;
  } else if (m && !v && t + d > 0) {
    let u;
    if (c[11] === S) ((u = e(Pf, {})), (c[11] = u));
    else u = c[11];
    let x;
    if (c[12] !== a)
      ((x = e(Ge, { children: r(n, { children: [a, " ", u] }) })), (c[12] = a), (c[13] = x));
    else x = c[13];
    return x;
  }
  let u;
  if (c[14] !== a) ((u = e(n, { children: a })), (c[14] = a), (c[15] = u));
  else u = c[15];
  const x = q - 12;
  let f;
  if (c[16] !== R || c[17] !== o || c[18] !== h || c[19] !== p || c[20] !== x)
    ((f = e(H6, { hunks: p, dim: !1, width: x, filePath: o, firstLine: h, fileContent: R })),
      (c[16] = R),
      (c[17] = o),
      (c[18] = h),
      (c[19] = p),
      (c[20] = x),
      (c[21] = f));
  else f = c[21];
  let b;
  if (c[22] !== u || c[23] !== f)
    ((b = e(Ge, { children: r(s, { flexDirection: "column", children: [u, f] }) })),
      (c[22] = u),
      (c[23] = f),
      (c[24] = b));
  else b = c[24];
  return b;
}
export { jie, B3t };

//# sourceMappingURL=chunk-hp01dsmt.js.map
