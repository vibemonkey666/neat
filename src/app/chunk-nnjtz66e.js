// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vC, Ft } from "./chunk-a16y5hcz.js";
import { lP } from "./chunk-4kxznmzw.js";
import { w } from "./chunk-7m7t89vx.js";
import { vu } from "./chunk-wr0p4ndg.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Te } from "./chunk-pbpv20s6.js";
import { Ge } from "./chunk-1sr6vjz6.js";
import { NR, vpe } from "./chunk-3jdct3h7.js";
import { e, r } from "./chunk-f790ajz4.js";
import { en } from "./chunk-rc7xvf0x.js";
import { S } from "./chunk-a2y39866.js";
var L = 5,
  G = 5;
function eUe(b) {
  let t = w(27),
    {
      output: m,
      fullOutput: p,
      elapsedTimeSeconds: i,
      totalLines: l,
      totalBytes: u,
      timeoutMs: o,
      verbose: a
    } = b,
    { columns: d } = Te(),
    z;
  if (t[0] !== d || t[1] !== m || t[2] !== a)
    ((z = a ? null : C(m, d)), (t[0] = d), (t[1] = m), (t[2] = a), (t[3] = z));
  else z = t[3];
  let g = z,
    A;
  if (t[4] !== p || t[5] !== g)
    ((A = g ? g.text : lP(p.trim())), (t[4] = p), (t[5] = g), (t[6] = A));
  else A = t[6];
  let M = A;
  if (!M) {
    let c;
    if (t[7] === S) ((c = e(n, { dimColor: !0, children: "Running\u2026 " })), (t[7] = c));
    else c = t[7];
    let f;
    if (t[8] !== i || t[9] !== o)
      ((f = e(Ge, {
        children: r(NR, { children: [c, e(vpe, { elapsedTimeSeconds: i, timeoutMs: o })] })
      })),
        (t[8] = i),
        (t[9] = o),
        (t[10] = f));
    else f = t[10];
    return f;
  }
  let _ = g
      ? L
      : Ft(
          p,
          `
`
        ) + 1,
    E = (l ? Math.max(0, l - _) : 0) + (g?.dropped ?? 0),
    x = "";
  if (u && l) x = `~${l} lines`;
  else if (E > 0) x = `+${E} lines`;
  let c;
  if (t[11] !== M) ((c = e(n, { dimColor: !0, children: M })), (t[11] = M), (t[12] = c));
  else c = t[12];
  let f;
  if (t[13] !== x) ((f = x ? e(n, { dimColor: !0, children: x }) : null), (t[13] = x), (t[14] = f));
  else f = t[14];
  let B;
  if (t[15] !== i || t[16] !== o)
    ((B = e(vpe, { elapsedTimeSeconds: i, timeoutMs: o })), (t[15] = i), (t[16] = o), (t[17] = B));
  else B = t[17];
  let O;
  if (t[18] !== u)
    ((O = u ? e(n, { dimColor: !0, children: en(u) }) : null), (t[18] = u), (t[19] = O));
  else O = t[19];
  let R;
  if (t[20] !== f || t[21] !== B || t[22] !== O)
    ((R = r(s, { flexDirection: "row", gap: 1, children: [f, B, O] })),
      (t[20] = f),
      (t[21] = B),
      (t[22] = O),
      (t[23] = R));
  else R = t[23];
  let F;
  if (t[24] !== c || t[25] !== R)
    ((F = e(Ge, {
      children: e(NR, { children: r(s, { flexDirection: "column", children: [c, R] }) })
    })),
      (t[24] = c),
      (t[25] = R),
      (t[26] = F));
  else F = t[26];
  return F;
}
function kto({ output: b, fullOutput: m, totalLines: p }, i) {
  if (!m.trim()) return !1;
  return (p ?? 0) > L || C(b, i).clipped;
}
function C(b, m) {
  let p = Math.max(1, m - G),
    i = lP(b.trim())
      .replace(
        /\r\n?/g,
        `
`
      )
      .split(
        `
`
      )
      .filter((a) => a),
    l = [],
    u = 0,
    o = i.length;
  while (o > 0 && u < L) {
    let a = i[--o],
      d = vu(a, p, { hard: !0, trim: !1 }).split(`
`),
      t = L - u;
    if (d.length > t)
      return (
        l.unshift(vC(d.slice(-t).join(""), " ")),
        {
          text: l.join(`
`),
          clipped: !0,
          dropped: o
        }
      );
    (l.unshift(a), (u += d.length));
  }
  return {
    text: l.join(`
`),
    clipped: o > 0,
    dropped: o
  };
}
export { eUe, kto };

//# sourceMappingURL=chunk-nnjtz66e.js.map
