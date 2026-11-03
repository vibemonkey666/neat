// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nir, rir } from "./chunk-5rw2zfa0.js";
import { w } from "./chunk-7m7t89vx.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Hxt } from "./chunk-d7ydc2jy.js";
import { blt } from "./chunk-9m3pz4v7.js";
import { F2 } from "./chunk-vs92m95f.js";
import { lw } from "./chunk-nkq17e49.js";
import { e, r } from "./chunk-f790ajz4.js";
import { Gt, be, j } from "./chunk-bq35vvkw.js";
j();
j();
var CPe = Gt(!1),
  s8t = Gt(!1);
function Cwe(i) {
  let p = w(26),
    { tone: o, text: a, detail: m, subLines: b, linkify: G } = i,
    t = G ? F2 : n,
    E = be(s8t) ? " " : i.state === "live" && !i.reducedMotion ? rir[i.frame % rir.length] : nir,
    T = o === "gold" ? "warning" : o === "red" ? "error" : void 0,
    P = o === "red";
  const L = o === "dim",
    R = o === "red" ? "error:" : o === "gold" ? "warning:" : void 0,
    h = o === "dim";
  let c;
  if (p[0] !== E || p[1] !== T || p[2] !== L || p[3] !== R || p[4] !== h)
    ((c = r(n, {
      "aria-hidden": L,
      "aria-label": R,
      italic: !0,
      color: T,
      dimColor: h,
      children: [E, " "]
    })),
      (p[0] = E),
      (p[1] = T),
      (p[2] = L),
      (p[3] = R),
      (p[4] = h),
      (p[5] = c));
  else c = p[5];
  const I = P ? "error" : void 0,
    k = !P;
  let u;
  if (p[6] !== t || p[7] !== a) ((u = e(t, { children: a })), (p[6] = t), (p[7] = a), (p[8] = u));
  else u = p[8];
  let f;
  if (p[9] !== t || p[10] !== m)
    ((f = m !== void 0 && r(n, { dimColor: !0, children: [" \xB7 ", e(t, { children: m })] })),
      (p[9] = t),
      (p[10] = m),
      (p[11] = f));
  else f = p[11];
  let g;
  if (p[12] !== I || p[13] !== k || p[14] !== u || p[15] !== f)
    ((g = r(n, { italic: !0, color: I, dimColor: k, children: [u, f] })),
      (p[12] = I),
      (p[13] = k),
      (p[14] = u),
      (p[15] = f),
      (p[16] = g));
  else g = p[16];
  let C;
  if (p[17] !== t || p[18] !== b)
    ((C = b?.map((U, B) => e(n, { dimColor: !0, children: e(t, { children: U }) }, B))),
      (p[17] = t),
      (p[18] = b),
      (p[19] = C));
  else C = p[19];
  let y;
  if (p[20] !== g || p[21] !== C)
    ((y = r(s, { flexDirection: "column", flexGrow: 1, children: [g, C] })),
      (p[20] = g),
      (p[21] = C),
      (p[22] = y));
  else y = p[22];
  let S;
  if (p[23] !== y || p[24] !== c)
    ((S = r(s, { flexDirection: "row", children: [c, y] })), (p[23] = y), (p[24] = c), (p[25] = S));
  else S = p[25];
  return S;
}
function Dv(i) {
  let o = Hxt(),
    a = blt()?.isQueued === !0;
  return !i && !o && !a && lw();
}
function Jto(i) {
  let o = Dv(i),
    a = blt();
  return a?.isQueued === !0 ? a.noticeSystemLines : o;
}
export { CPe, s8t, Cwe, Dv, Jto };

//# sourceMappingURL=chunk-tgsekzq8.js.map
