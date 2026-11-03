// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { GUe, uw } from "./chunk-ykrqc7ar.js";
import { g, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { qi } from "./chunk-rh5ymkjp.js";
import { w } from "./chunk-7m7t89vx.js";
import { n, Yt } from "./chunk-h56pfqh7.js";
import { K } from "./chunk-61vn6n52.js";
import { yQ } from "./chunk-6h7ejyet.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { P, j } from "./chunk-bq35vvkw.js";
j();
j();
var Gpr = "current-pr";
function tto(s, o) {
  if (!s || !o) return null;
  let d = s.kind === "cr" && !1,
    u = s.kind === "mr";
  return {
    prefix: u ? "MR" : "PR",
    label: `${u ? "!" : "#"}${s.number}`,
    url: o,
    dedupUrl: s.url,
    color: de(s.reviewState)
  };
}
function de(s) {
  switch (s) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function S(s, o, d) {
  return;
}
function nto(s, o, d) {
  P(() => {
    if (o === void 0) return;
    S(s, o, d === "cr" || d === "mr");
  }, [s, o, d]);
}
function fe(ge) {
  return ge.settings?.prUrlTemplate;
}
function Lie(s) {
  let p = w(41),
    {
      number: o,
      url: d,
      reviewState: u,
      bold: l,
      color: c,
      dimColor: b,
      inverse: a,
      underline: x,
      hidePrefix: A,
      kind: Z
    } = s,
    be = x === void 0 ? !0 : x,
    R = Z === "cr" && !1,
    m = Z === "mr",
    C = m ? "!" : "#",
    I = K(fe),
    ee;
  if (p[0] !== R || p[1] !== m || p[2] !== I || p[3] !== d)
    ((ee = R || m ? d : yQ(d, I)), (p[0] = R), (p[1] = m), (p[2] = I), (p[3] = d), (p[4] = ee));
  else ee = p[4];
  let v = ee,
    re,
    oe;
  if (p[5] !== R || p[6] !== m || p[7] !== d || p[8] !== v)
    ((re = () => {
      S(v, d, R || m);
    }),
      (oe = [v, d, R, m]),
      (p[5] = R),
      (p[6] = m),
      (p[7] = d),
      (p[8] = v),
      (p[9] = re),
      (p[10] = oe));
  else ((re = p[9]), (oe = p[10]));
  P(re, oe);
  let te;
  if (p[11] !== c || p[12] !== u) ((te = c ?? V(u)), (p[11] = c), (p[12] = u), (p[13] = te));
  else te = p[13];
  let _ = te,
    k = !a && (b || (!_ && !l)),
    ne;
  if (p[14] !== l || p[15] !== k || p[16] !== C || p[17] !== a || p[18] !== o || p[19] !== _)
    ((ne = r(n, { color: _, dimColor: k, bold: l, inverse: a, children: [C, o] })),
      (p[14] = l),
      (p[15] = k),
      (p[16] = C),
      (p[17] = a),
      (p[18] = o),
      (p[19] = _),
      (p[20] = ne));
  else ne = p[20];
  let B = ne,
    U;
  if (p[21] !== l || p[22] !== b || p[23] !== A || p[24] !== m)
    ((U = !A && r(Q, { children: [e(n, { dimColor: b || !l, children: m ? "MR" : "PR" }), " "] })),
      (p[21] = l),
      (p[22] = b),
      (p[23] = A),
      (p[24] = m),
      (p[25] = U));
  else U = p[25];
  const G = !a && be;
  let F;
  if (
    p[26] !== l ||
    p[27] !== k ||
    p[28] !== C ||
    p[29] !== a ||
    p[30] !== o ||
    p[31] !== _ ||
    p[32] !== G
  )
    ((F = r(n, { color: _, dimColor: k, underline: G, bold: l, inverse: a, children: [C, o] })),
      (p[26] = l),
      (p[27] = k),
      (p[28] = C),
      (p[29] = a),
      (p[30] = o),
      (p[31] = _),
      (p[32] = G),
      (p[33] = F));
  else F = p[33];
  let O;
  if (p[34] !== B || p[35] !== F || p[36] !== v)
    ((O = e(Yt, { url: v, fallback: B, assumeSupport: !0, children: F })),
      (p[34] = B),
      (p[35] = F),
      (p[36] = v),
      (p[37] = O));
  else O = p[37];
  let ie;
  if (p[38] !== O || p[39] !== U)
    ((ie = r(n, { children: [U, O] })), (p[38] = O), (p[39] = U), (p[40] = ie));
  else ie = p[40];
  return ie;
}
function V(s) {
  switch (s) {
    case "approved":
      return "success";
    case "changes_requested":
      return "error";
    case "pending":
      return "warning";
    case "merged":
      return "merged";
    default:
      return;
  }
}
function Ov(s) {
  let l = w(10),
    { added: o, removed: d, bold: u } = s;
  if (o === 0 && d === 0) {
    return null;
  }
  let c;
  if (l[0] !== o || l[1] !== u)
    ((c = o > 0 && r(n, { color: "diffAddedWord", bold: u, children: ["+", o] })),
      (l[0] = o),
      (l[1] = u),
      (l[2] = c));
  else c = l[2];
  const b = o > 0 && d > 0 && " ";
  let a;
  if (l[3] !== u || l[4] !== d)
    ((a = d > 0 && r(n, { color: "diffRemovedWord", bold: u, children: ["-", d] })),
      (l[3] = u),
      (l[4] = d),
      (l[5] = a));
  else a = l[5];
  let x;
  if (l[6] !== c || l[7] !== b || l[8] !== a)
    ((x = r(n, { children: [c, b, a] })), (l[6] = c), (l[7] = b), (l[8] = a), (l[9] = x));
  else x = l[9];
  return x;
}
export { Ov, Gpr, tto, nto, Lie };

//# sourceMappingURL=chunk-ed0saqtf.js.map
