// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ji, Vg } from "./chunk-a16y5hcz.js";
import { ko, gTt } from "./chunk-5rw2zfa0.js";
import { w } from "./chunk-7m7t89vx.js";
import { le } from "./chunk-vw9e882a.js";
import { he } from "./chunk-95k4nfdh.js";
import { rt, n, hUe, ja } from "./chunk-h56pfqh7.js";
import { Zw } from "./chunk-rf7g1m78.js";
import { mUe, x_, Yg, dw } from "./chunk-0grh2x0w.js";
import { If } from "./chunk-df5gvbw5.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { Sh } from "./chunk-r4m4whra.js";
import { ne } from "./chunk-39xmt821.js";
var Mwe = {
    success: { icon: ne.tick, color: "success", ariaLabel: "done:" },
    error: { icon: ne.cross, color: "error", ariaLabel: "failed:" },
    warning: { icon: ne.warning, color: "warning", ariaLabel: "warning:" },
    info: { icon: ne.info, color: "suggestion", ariaLabel: "note:" },
    pending: { icon: ne.circle, color: void 0, ariaLabel: "pending:" },
    loading: { icon: "\u2026", color: void 0, ariaLabel: "loading:" },
    running: { icon: ko, color: void 0, ariaLabel: "running:" },
    on: { icon: ne.tick, color: "success", ariaLabel: "on:" },
    off: { icon: ne.circle, color: void 0, ariaLabel: "off:" },
    working: { icon: gTt, color: void 0, ariaLabel: "working:" },
    needsYou: { icon: gTt, color: "warning", ariaLabel: "needs you:" },
    idle: { icon: gTt, color: void 0, ariaLabel: "idle:" },
    failed: { icon: gTt, color: "error", ariaLabel: "error:" }
  },
  I = { working: gTt, needsYou: "!", idle: "\u25E6", failed: "\xD7" },
  L = 8,
  Y = 200;
function Flt() {
  return Math.max(...Object.values(Mwe).map((l) => le(l.icon)));
}
function _In() {
  return Flt() + 1;
}
function mt(l) {
  let a = w(20),
    { status: i, "aria-label": s, withSpace: u, slot: o } = l,
    c = u === void 0 ? !1 : u;
  if (i === void 0) {
    let p;
    if (a[0] !== o) ((p = o && e(n, { children: " ".repeat(_In()) })), (a[0] = o), (a[1] = p));
    else p = a[1];
    return p;
  }
  let t = Mwe[i],
    p;
  if (a[2] !== s || a[3] !== t || a[4] !== o)
    ((p = s ?? (o === "trailing" ? Vg(t.ariaLabel, ":") : t.ariaLabel)),
      (a[2] = s),
      (a[3] = t),
      (a[4] = o),
      (a[5] = p));
  else p = a[5];
  let d = p;
  if (B(i)) {
    let f;
    if (a[6] !== o || a[7] !== d || a[8] !== i || a[9] !== c)
      ((f = e(M, { status: i, spoken: d, slot: o, withSpace: c })),
        (a[6] = o),
        (a[7] = d),
        (a[8] = i),
        (a[9] = c),
        (a[10] = f));
    else f = a[10];
    return f;
  }
  const f = t.color,
    m = !t.color;
  let g;
  if (a[11] !== t.icon || a[12] !== o || a[13] !== d || a[14] !== c)
    ((g = x(t.icon, d, o, c)),
      (a[11] = t.icon),
      (a[12] = o),
      (a[13] = d),
      (a[14] = c),
      (a[15] = g));
  else g = a[15];
  let k;
  if (a[16] !== t.color || a[17] !== m || a[18] !== g)
    ((k = e(n, { color: f, dimColor: m, children: g })),
      (a[16] = t.color),
      (a[17] = m),
      (a[18] = g),
      (a[19] = k));
  else k = a[19];
  return k;
}
function x(l, i, s, u) {
  let o = s === void 0 ? u && " " : Ji(" ", _In() - le(l));
  return r(Q, {
    children: [s === "trailing" && o, e(n, { "aria-label": i, children: l }), s !== "trailing" && o]
  });
}
function B(l) {
  return l in I;
}
function M(l) {
  let a = w(17),
    { status: i, spoken: s, slot: u, withSpace: o } = l,
    c = Zw(),
    p;
  if (a[0] !== c.subtle) ((p = dw(c.subtle)), (a[0] = c.subtle), (a[1] = p));
  else p = a[1];
  let t = p,
    d;
  if (a[2] !== c.inactive) ((d = dw(c.inactive)), (a[2] = c.inactive), (a[3] = d));
  else d = a[3];
  let f = d,
    { color: m } = Mwe[i],
    g = he.level >= 2 && t !== null && f !== null;
  const k = g ? gTt : I[i];
  let K;
  if (a[4] !== u || a[5] !== s || a[6] !== k || a[7] !== o)
    ((K = x(k, s, u, o)), (a[4] = u), (a[5] = s), (a[6] = k), (a[7] = o), (a[8] = K));
  else K = a[8];
  let b = K;
  if (g && i === "working") {
    let S;
    if (a[9] !== f || a[10] !== t || a[11] !== b)
      ((S = e(N, { dimmer: t, dim: f, children: b })),
        (a[9] = f),
        (a[10] = t),
        (a[11] = b),
        (a[12] = S));
    else S = a[12];
    return S;
  }
  const S = !m;
  let X;
  if (a[13] !== m || a[14] !== b || a[15] !== S)
    ((X = e(n, { color: m, dimColor: S, children: b })),
      (a[13] = m),
      (a[14] = b),
      (a[15] = S),
      (a[16] = X));
  else X = a[16];
  return X;
}
function N(l) {
  let d = w(8),
    { dimmer: i, dim: s, children: u } = l,
    o = If(),
    c = rt(),
    a = o || c,
    p = Math.ceil(hUe(Y) / Sh) * Sh,
    [, t] = ja(a ? null : p),
    f;
  if (d[0] !== s || d[1] !== i || d[2] !== a || d[3] !== t)
    ((f = a ? "subtle" : Yg(x_(i, s, mUe(Math.floor(t / p) % L, L)))),
      (d[0] = s),
      (d[1] = i),
      (d[2] = a),
      (d[3] = t),
      (d[4] = f));
  else f = d[4];
  let m = f,
    g;
  if (d[5] !== u || d[6] !== m)
    ((g = e(n, { color: m, children: u })), (d[5] = u), (d[6] = m), (d[7] = g));
  else g = d[7];
  return g;
}
export { Mwe, Flt, _In, mt };

//# sourceMappingURL=chunk-18g32wet.js.map
