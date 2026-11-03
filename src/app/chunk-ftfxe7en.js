// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { w } from "./chunk-7m7t89vx.js";
import { e } from "./chunk-f790ajz4.js";
import { C7e, R7e } from "./chunk-ce3m2y48.js";
import { Gt, be, Xt, ee, j } from "./chunk-bq35vvkw.js";
function rfs(n) {
  let t = J[n.name],
    i = {
      upArrow: t === "upArrow",
      downArrow: t === "downArrow",
      leftArrow: t === "leftArrow",
      rightArrow: t === "rightArrow",
      pageDown: t === "pageDown",
      pageUp: t === "pageUp",
      wheelUp: !1,
      wheelDown: !1,
      home: t === "home",
      end: t === "end",
      return: t === "return",
      escape: t === "escape",
      tab: t === "tab",
      backspace: t === "backspace",
      delete: t === "delete",
      ctrl: n.ctrl,
      shift: n.shift,
      super: n.superKey,
      meta: n.meta
    };
  return {
    input:
      n.name === "enter"
        ? `
`
        : [...n.key].length === 1
          ? n.key
          : "",
    key: i
  };
}
var J = {
    up: "upArrow",
    down: "downArrow",
    left: "leftArrow",
    right: "rightArrow",
    pagedown: "pageDown",
    pageup: "pageUp",
    home: "home",
    end: "end",
    return: "return",
    escape: "escape",
    tab: "tab",
    backspace: "backspace",
    delete: "delete"
  },
  Q = [
    ["escape", "escape"],
    ["return", "return"],
    ["tab", "tab"],
    ["backspace", "backspace"],
    ["delete", "delete"],
    ["upArrow", "up"],
    ["downArrow", "down"],
    ["leftArrow", "left"],
    ["rightArrow", "right"],
    ["pageUp", "pageup"],
    ["pageDown", "pagedown"],
    ["wheelUp", "wheelup"],
    ["wheelDown", "wheeldown"],
    ["home", "home"],
    ["end", "end"]
  ];
function C(n, t) {
  return {
    name:
      Q.find(([r]) => t[r])?.[1] ??
      (n ===
      `
`
        ? "enter"
        : ""),
    key: n,
    ctrl: t.ctrl,
    shift: t.shift,
    meta: t.meta,
    superKey: t.super
  };
}
j();
function ae() {}
function H8t() {
  return {
    decls: new WeakMap(),
    scopesChanged: De(),
    preemptiveScopes: new Map(),
    swallowAll: new Map(),
    keyDispatchTrace: De()
  };
}
var u = Gt(null);
function iPt(n) {
  let a = w(27),
    {
      bindings: t,
      pendingChordRef: i,
      pendingChord: r,
      setPendingChord: h,
      activeContexts: c,
      registerActiveContext: p,
      unregisterActiveContext: D,
      handlerRegistryRef: P,
      preDispatchRef: x,
      singleKeyEventRef: E,
      keyHandlerRegistry: H,
      children: N
    } = n,
    v;
  if (a[0] !== t || a[1] !== i)
    ((v = (se, de, ge) => R7e(C(se, de), ge, t, i.current)), (a[0] = t), (a[1] = i), (a[2] = v));
  else v = a[2];
  let f;
  if (a[3] !== t) ((f = (ce, pe) => C7e(ce, pe, t)), (a[3] = t), (a[4] = f));
  else f = a[4];
  let b;
  if (a[5] !== P)
    ((b = (s) => {
      let g = P.current;
      if (!g) {
        return ae;
      }
      if (!g.has(s.action)) g.set(s.action, new Set());
      return (
        g.get(s.action).add(s),
        () => {
          let M = g.get(s.action);
          if (M) {
            if ((M.delete(s), M.size === 0)) g.delete(s.action);
          }
        }
      );
    }),
      (a[5] = P),
      (a[6] = b));
  else b = a[6];
  let K;
  if (a[7] !== x)
    ((K = (z) => (x.current.add(z), () => x.current.delete(z))), (a[7] = x), (a[8] = K));
  else K = a[8];
  let m;
  if (a[9] !== E) ((m = () => E.current), (a[9] = E), (a[10] = m));
  else m = a[10];
  let Y;
  if (
    a[11] !== c ||
    a[12] !== t ||
    a[13] !== H ||
    a[14] !== r ||
    a[15] !== p ||
    a[16] !== h ||
    a[17] !== v ||
    a[18] !== f ||
    a[19] !== b ||
    a[20] !== K ||
    a[21] !== m ||
    a[22] !== D
  )
    ((Y = {
      resolve: v,
      setPendingChord: h,
      getDisplayText: f,
      bindings: t,
      pendingChord: r,
      activeContexts: c,
      registerActiveContext: p,
      unregisterActiveContext: D,
      registerHandler: b,
      registerPreDispatch: K,
      singleKeyEvent: m,
      keyHandlerRegistry: H
    }),
      (a[11] = c),
      (a[12] = t),
      (a[13] = H),
      (a[14] = r),
      (a[15] = p),
      (a[16] = h),
      (a[17] = v),
      (a[18] = f),
      (a[19] = b),
      (a[20] = K),
      (a[21] = m),
      (a[22] = D),
      (a[23] = Y));
  else Y = a[23];
  let S = Y,
    I;
  if (a[24] !== N || a[25] !== S)
    ((I = e(u.Provider, { value: S, children: N })), (a[24] = N), (a[25] = S), (a[26] = I));
  else I = a[26];
  return I;
}
function Md() {
  return be(u);
}
function EF(n, t) {
  let h = w(5),
    i = t === void 0 ? !0 : t,
    r = Md(),
    c,
    p;
  if (h[0] !== n || h[1] !== i || h[2] !== r)
    ((c = () => {
      if (!r || !i) {
        return;
      }
      return (
        r.registerActiveContext(n),
        () => {
          r.unregisterActiveContext(n);
        }
      );
    }),
      (p = [n, r, i]),
      (h[0] = n),
      (h[1] = i),
      (h[2] = r),
      (h[3] = c),
      (h[4] = p));
  else ((c = h[3]), (p = h[4]));
  Xt(c, p);
}
export { rfs, H8t, iPt, Md, EF };

//# sourceMappingURL=chunk-ftfxe7en.js.map
