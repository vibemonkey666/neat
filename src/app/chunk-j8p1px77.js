// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { WL, XK } from "./chunk-xq3dwnzp.js";
import { w } from "./chunk-7m7t89vx.js";
import { lkt, pSn } from "./chunk-jwqtbev0.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { ka } from "./chunk-rv488r12.js";
import { V } from "./chunk-j32s98r9.js";
import { e, r } from "./chunk-f790ajz4.js";
import { ne } from "./chunk-39xmt821.js";
import { ee, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
var G = "cyan_FOR_SUBAGENTS_ONLY";
function VM(a) {
  if (!a) return G;
  if (XK(a)) return WL[a];
  return `ansi:${a}`;
}
j();
var N = { keyCase: "lower" };
function Bie(a) {
  let o = w(19),
    { displayName: f, qualifier: E, count: k, addMargin: M, fallbackLabel: c, body: t } = a,
    R = k === void 0 ? 1 : k,
    H = M === void 0 ? !0 : M,
    b = ka("app:toggleTranscript", "Global", "ctrl+o"),
    h;
  if (o[0] !== f || o[1] !== c) ((h = lkt(f) || c), (o[0] = f), (o[1] = c), (o[2] = h));
  else h = o[2];
  let u = h,
    A;
  if (o[3] !== t) ((A = t ? pSn(t) : ""), (o[3] = t), (o[4] = A));
  else A = o[4];
  let i = A;
  const g = H ? 1 : 0;
  let P;
  if (o[5] === S) ((P = r(n, { "aria-hidden": !0, children: [ne.pointerSmall, " "] })), (o[5] = P));
  else P = o[5];
  const y = R === 1 ? "Message" : `${R} messages`,
    T = E ? ` (${E})` : "";
  let p;
  if (o[6] !== i)
    ((p = i ? r(n, { italic: !0, children: [": ", i] }) : ""), (o[6] = i), (o[7] = p));
  else p = o[7];
  let l;
  if (o[8] !== b)
    ((l = e(V, { chord: b, action: "expand", parens: !0, format: N })), (o[8] = b), (o[9] = l));
  else l = o[9];
  let m;
  if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p)
    ((m = r(n, { dimColor: !0, children: [P, y, " from @", u, T, p, " ", l] })),
      (o[10] = u),
      (o[11] = l),
      (o[12] = y),
      (o[13] = T),
      (o[14] = p),
      (o[15] = m));
  else m = o[15];
  let q;
  if (o[16] !== m || o[17] !== g)
    ((q = e(s, { marginTop: g, children: m })), (o[16] = m), (o[17] = g), (o[18] = q));
  else q = o[18];
  return q;
}
export { VM, Bie };

//# sourceMappingURL=chunk-j8p1px77.js.map
