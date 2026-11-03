// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { rt, n, Kr } from "./chunk-h56pfqh7.js";
import { Pc } from "./chunk-t776tmr7.js";
import { cgr, xs, Je } from "./chunk-fgf47p3n.js";
import { e } from "./chunk-f790ajz4.js";
import { y, j } from "./chunk-bq35vvkw.js";
j();
var Cmr = 500;
function n6e(L = Cmr) {
  let r = Pc();
  return Kr(L, r);
}
function dr(L) {
  let s = w(33),
    {
      onConfirm: r,
      onCancel: o,
      confirmLabel: K,
      cancelLabel: _,
      cancelFirst: D,
      focus: V,
      hideIndexes: X,
      disablePrintableKeybindings: Y,
      refuseInput: M,
      openedAt: F,
      windowMs: ee,
      armAfterMs: I
    } = L,
    i = K === void 0 ? "Yes" : K,
    c = _ === void 0 ? "No" : _,
    g = D === void 0 ? !1 : D,
    ne = V === void 0 ? "confirm" : V,
    v = X === void 0 ? !1 : X,
    x = Y === void 0 ? !1 : Y,
    [N] = y(ne),
    l = n6e(I ?? null) || I === void 0;
  if (rt()) {
    const a = ee ?? I;
    let t;
    if (
      s[0] !== c ||
      s[1] !== i ||
      s[2] !== o ||
      s[3] !== r ||
      s[4] !== F ||
      s[5] !== M ||
      s[6] !== a
    )
      ((t = e(cgr, {
        confirmLabel: i,
        cancelLabel: c,
        onConfirm: r,
        onCancel: o,
        refuseInput: M,
        openedAt: F,
        windowMs: a
      })),
        (s[0] = c),
        (s[1] = i),
        (s[2] = o),
        (s[3] = r),
        (s[4] = F),
        (s[5] = M),
        (s[6] = a),
        (s[7] = t));
    else t = s[7];
    return t;
  }
  let a;
  if (s[8] !== i || s[9] !== l)
    ((a = l ? i : e(n, { dimColor: !0, children: i })), (s[8] = i), (s[9] = l), (s[10] = a));
  else a = s[10];
  let t;
  if (s[11] !== a) ((t = { label: a, value: "confirm" }), (s[11] = a), (s[12] = t));
  else t = s[12];
  let m = t,
    d;
  if (s[13] !== c || s[14] !== l)
    ((d = l ? c : e(n, { dimColor: !0, children: c })), (s[13] = c), (s[14] = l), (s[15] = d));
  else d = s[15];
  let k;
  if (s[16] !== d) ((k = { label: d, value: "cancel" }), (s[16] = d), (s[17] = k));
  else k = s[17];
  let f = k,
    u;
  if (s[18] !== f || s[19] !== g || s[20] !== m)
    ((u = g ? [f, m] : [m, f]), (s[18] = f), (s[19] = g), (s[20] = m), (s[21] = u));
  else u = s[21];
  const P = !l;
  let b;
  if (s[22] !== o || s[23] !== r)
    ((b = (oe) => (oe === "confirm" ? r() : o())), (s[22] = o), (s[23] = r), (s[24] = b));
  else b = s[24];
  let q;
  if (
    s[25] !== x ||
    s[26] !== v ||
    s[27] !== o ||
    s[28] !== N ||
    s[29] !== u ||
    s[30] !== P ||
    s[31] !== b
  )
    ((q = e(Je, {
      options: u,
      selectedValue: xs,
      hideIndexes: v,
      disablePrintableKeybindings: x,
      isDisabled: P,
      defaultFocusValue: N,
      onChange: b,
      onCancel: o
    })),
      (s[25] = x),
      (s[26] = v),
      (s[27] = o),
      (s[28] = N),
      (s[29] = u),
      (s[30] = P),
      (s[31] = b),
      (s[32] = q));
  else q = s[32];
  return q;
}
export { Cmr, n6e, dr };

//# sourceMappingURL=chunk-zgvc8m5v.js.map
