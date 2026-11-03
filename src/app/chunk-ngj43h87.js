// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { sl, ds } from "./chunk-1kj0zhn3.js";
import { Mm } from "./chunk-b77hptpq.js";
import { zr } from "./chunk-a16y5hcz.js";
import { Ir, uB, _M, aXo, Ab } from "./chunk-5rw2zfa0.js";
import { le } from "./chunk-vw9e882a.js";
import { fn, rt, s, n, GB, yf, HPe, Wee, Ml, Ys } from "./chunk-h56pfqh7.js";
import { Vc, Eg } from "./chunk-rwaeax2b.js";
import { ZM } from "./chunk-7nfw1dx3.js";
import { R_ } from "./chunk-65wf35er.js";
import { wT, PPe, IPe, FR, Bee, au } from "./chunk-fgf47p3n.js";
import { aw } from "./chunk-y5em6mt4.js";
import { U2, Fxt } from "./chunk-px793g1m.js";
import { Te } from "./chunk-pbpv20s6.js";
import { B2, j2 } from "./chunk-vgsmcxaz.js";
import { f8t } from "./chunk-c9m48h9f.js";
import { Md } from "./chunk-ftfxe7en.js";
import { an } from "./chunk-kk8f9f8q.js";
import { Flt, mt } from "./chunk-18g32wet.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { Jh, Gt, Og, be, P, Bo, Xt, C, y, kt, j } from "./chunk-bq35vvkw.js";
import { S, vn } from "./chunk-a2y39866.js";
j();
j();
j();
j();
var jn = 150,
  Un = 400,
  Kn = 60;
function pe({ children: o, paddingX: t = 0, onPress: i, repeat: a = !1 }) {
  let m = fn(),
    f = aw(),
    l = PPe(),
    [g, b] = y(!1),
    [D, W] = y(!1),
    [R, x] = y(null),
    k = C(null);
  P(() => () => k.current?.(), []);
  let T = i !== void 0;
  if (!T && (g || D || R !== null)) (b(!1), W(!1), x(null));
  let O = Bo((p) => i?.({ row: p }));
  P(() => {
    if (R === null) return;
    let p = m.setTimeout(function A() {
      (O(R), (p = m.setTimeout(A, Kn)));
    }, Un);
    return () => p();
  }, [R, m]);
  function H(p) {
    if ((p.stopImmediatePropagation(), k.current !== null || f(p))) return;
    (p.endClickChain(),
      W(!0),
      (k.current = m.setTimeout(() => {
        ((k.current = null), W(!1), i?.(p));
      }, jn)));
  }
  function E(p) {
    if (p.type === "down" && p.button === 0) (W(!0), x(p.row), i?.(p));
    else if (p.type === "up") (W(!1), x(null));
  }
  let B = l === "inverse",
    L = B ? void 0 : D ? "text" : g ? wT : void 0,
    [N = "", ...U] = o;
  return r(s, {
    paddingLeft: t,
    flexShrink: 1,
    alignSelf: "flex-start",
    backgroundColor: L,
    onClick: T && !a ? H : void 0,
    onPointer: T && a ? E : void 0,
    onMouseEnter: T ? () => b(!0) : void 0,
    onMouseLeave: T ? () => b(!1) : void 0,
    hoverFollowsPaint: T,
    noSelect: !0,
    children: [
      e(n, {
        color: D && !B ? "inverseText" : void 0,
        dimColor: !D,
        inverse: D && B,
        wrap: "truncate-end",
        children:
          g && !D && B ? r(Q, { children: [e(n, { inverse: !0, children: N }), U.join("")] }) : o
      }),
      t > 0 && T && e(s, { width: t, flexShrink: 1000 })
    ]
  });
}
var Vo = 1000;
function ro() {
  let t = w(2),
    o = fn(),
    i;
  if (t[0] !== o)
    ((i = () => {
      let a = { at: Number.NEGATIVE_INFINITY, row: -1 };
      return {
        pressed: (m) => {
          a = { at: o.now(), row: m.row };
        },
        dropsClick: (f) => {
          if (f.row !== a.row || o.now() - a.at >= Vo) {
            return !1;
          }
          return (f.dropAsStray(), !0);
        }
      };
    }),
      (t[0] = o),
      (t[1] = i));
  else i = t[1];
  let [l] = y(i);
  return l;
}
var u8t = Gt(() => !1);
function l6e(o) {
  let l = w(3),
    { direction: t, count: i, onPress: a } = o;
  if (i <= 0) {
    return null;
  }
  const f = `${t === "above" ? uB : _M} ${i} more`;
  let g;
  if (l[0] !== a || l[1] !== f)
    ((g = e(s, { paddingLeft: 1, children: e(pe, { paddingX: 1, onPress: a, children: f }) })),
      (l[0] = a),
      (l[1] = f),
      (l[2] = g));
  else g = l[2];
  return g;
}
j();
j();
function io() {
  let o = be(f8t),
    { subscribeHoverTracked: t, isHoverTracked: i } = be(Eg),
    a = kt(t, i);
  return o ?? a;
}
j();
var Yo = 5;
function Ge(o) {
  let E = w(47),
    { offset: t, visible: i, total: a, height: m, onScrollTo: f, onScrollBy: l, arrows: g } = o,
    b = m === void 0 ? i : m,
    D = g === void 0 ? !1 : g,
    W = C(null),
    [R, x] = y(!1),
    [k, T] = y(!1);
  if (a <= i || b < 1) {
    return null;
  }
  let O = D && b >= Yo,
    H = O ? b - 2 : b,
    B;
  if (E[0] !== H || E[1] !== t || E[2] !== a || E[3] !== i)
    ((B = uo({ offset: t, visible: i, total: a, height: H })),
      (E[0] = H),
      (E[1] = t),
      (E[2] = a),
      (E[3] = i),
      (E[4] = B));
  else B = E[4];
  let { top: L, size: N } = B,
    U = H - L - N,
    p;
  if (
    E[5] !== H ||
    E[6] !== t ||
    E[7] !== f ||
    E[8] !== N ||
    E[9] !== L ||
    E[10] !== a ||
    E[11] !== i
  )
    ((p = function oe(A) {
      if (A.type === "up") {
        ((W.current = null), x(!1));
        return;
      }
      let ee = A.type === "down" && A.button === 0;
      let z = ee && A.localRow >= L && A.localRow < L + N;
      if (ee)
        ((W.current = {
          trackRow: A.row - A.localRow,
          visible: i,
          total: a,
          height: H,
          grab: z ? A.localRow - L : Math.floor(N / 2),
          asked: t
        }),
          x(!0));
      let v = W.current;
      if (v === null) {
        return;
      }
      let M = on({
        top: A.row - v.trackRow - v.grab,
        visible: v.visible,
        total: v.total,
        height: v.height
      });
      let K = M >= v.total - v.visible ? v.total - Math.min(v.visible, i) : M;
      if (K === v.asked) {
        return;
      }
      if (((v.asked = K), !z)) f?.(K);
    }),
      (E[5] = H),
      (E[6] = t),
      (E[7] = f),
      (E[8] = N),
      (E[9] = L),
      (E[10] = a),
      (E[11] = i),
      (E[12] = p));
  else p = E[12];
  let oe = p,
    X = k || R ? "suggestion" : void 0,
    F;
  if (E[13] !== O || E[14] !== t || E[15] !== l)
    ((F = O && e(pe, { repeat: !0, onPress: l && t > 0 ? () => l(-1) : void 0, children: uB })),
      (E[13] = O),
      (E[14] = t),
      (E[15] = l),
      (E[16] = F));
  else F = E[16];
  const G = f || R ? oe : void 0;
  let q;
  if (E[17] !== f) ((q = f && (() => T(!0))), (E[17] = f), (E[18] = q));
  else q = E[18];
  let d;
  if (E[19] !== f) ((d = f && (() => T(!1))), (E[19] = f), (E[20] = d));
  else d = E[20];
  let h;
  if (E[21] !== L)
    ((h = L > 0 && e(n, { dimColor: !0, children: Se(Ab.pipe, L) })), (E[21] = L), (E[22] = h));
  else h = E[22];
  let u;
  if (E[23] !== N) ((u = Se(aXo, N)), (E[23] = N), (E[24] = u));
  else u = E[24];
  let te;
  if (E[25] !== u || E[26] !== X)
    ((te = e(n, { color: X, children: u })), (E[25] = u), (E[26] = X), (E[27] = te));
  else te = E[27];
  let J;
  if (E[28] !== U)
    ((J = U > 0 && e(n, { dimColor: !0, children: Se(Ab.pipe, U) })), (E[28] = U), (E[29] = J));
  else J = E[29];
  let Y;
  if (E[30] !== te || E[31] !== J || E[32] !== G || E[33] !== q || E[34] !== d || E[35] !== h)
    ((Y = r(yf, {
      flexDirection: "column",
      flexShrink: 0,
      onPointer: G,
      onMouseEnter: q,
      onMouseLeave: d,
      children: [h, te, J]
    })),
      (E[30] = te),
      (E[31] = J),
      (E[32] = G),
      (E[33] = q),
      (E[34] = d),
      (E[35] = h),
      (E[36] = Y));
  else Y = E[36];
  let V;
  if (E[37] !== O || E[38] !== t || E[39] !== l || E[40] !== a || E[41] !== i)
    ((V = O && e(pe, { repeat: !0, onPress: l && t < a - i ? () => l(1) : void 0, children: _M })),
      (E[37] = O),
      (E[38] = t),
      (E[39] = l),
      (E[40] = a),
      (E[41] = i),
      (E[42] = V));
  else V = E[42];
  let Z;
  if (E[43] !== Y || E[44] !== V || E[45] !== F)
    ((Z = e(GB, {
      children: r(s, { flexDirection: "column", flexShrink: 0, children: [F, Y, V] })
    })),
      (E[43] = Y),
      (E[44] = V),
      (E[45] = F),
      (E[46] = Z));
  else Z = E[46];
  return Z;
}
function uo({ offset: o, visible: t, total: i, height: a }) {
  let m = Vc(Math.round((t / i) * a), 1, Math.max(1, a - 1)),
    f = a - m,
    l = i - t;
  if (o <= 0) return { top: 0, size: m };
  if (o >= l) return { top: f, size: m };
  let g = Math.round((o / l) * f);
  if (f < 2) return { top: g, size: m };
  return { top: Vc(g, 1, f - 1), size: m };
}
function on({ top: o, visible: t, total: i, height: a }) {
  let { size: m } = uo({ offset: 0, visible: t, total: i, height: a }),
    f = a - m,
    l = i - t;
  if (o <= 0) return 0;
  if (o >= f) return l;
  let g = Math.round((o / f) * l);
  if (l < 2) return g;
  return Vc(g, 1, l - 1);
}
function Se(o, t) {
  return Array.from({ length: t }, () => o).join(`
`);
}
function qPn(o) {
  let b = w(12),
    { bar: t, height: i, children: a } = o,
    [m, f] = y(!1),
    l = io();
  if (m && !l) f(!1);
  let g = l && t.total > t.visible,
    D,
    W;
  if (b[0] === S) ((D = () => f(!0)), (W = () => f(!1)), (b[0] = D), (b[1] = W));
  else ((D = b[0]), (W = b[1]));
  let R;
  if (b[2] !== a)
    ((R = e(s, { flexDirection: "column", flexGrow: 1, children: a })), (b[2] = a), (b[3] = R));
  else R = b[3];
  let x;
  if (b[4] !== t || b[5] !== g || b[6] !== i || b[7] !== m)
    ((x = g && (m ? e(Ge, { ...t, height: i }) : e(s, { width: 1, flexShrink: 0 }))),
      (b[4] = t),
      (b[5] = g),
      (b[6] = i),
      (b[7] = m),
      (b[8] = x));
  else x = b[8];
  let k;
  if (b[9] !== R || b[10] !== x)
    ((k = r(s, { gap: 1, onMouseEnter: D, onMouseLeave: W, children: [R, x] })),
      (b[9] = R),
      (b[10] = x),
      (b[11] = k));
  else k = b[11];
  return k;
}
j();
j();
function ino(o, t, i, a = null) {
  let m = Vc(a === null ? o - i + 1 : Vc(a, o - i + 1, o), 0, Math.max(0, t - i)),
    f = Math.min(m + i, t);
  return { windowStart: m, windowEnd: f, moreAbove: m, moreBelow: t - f };
}
var ot = new Set();
function rn({
  lineCount: o,
  visibleCount: t,
  cursorLine: i,
  getCursorLine: a,
  headings: m = ot,
  boundaries: f,
  markerLines: l = 0,
  onScroll: g
}) {
  let b = Math.max(0, o - 1),
    D = Vc(i, 0, b),
    W = () => Vc(a(), 0, b),
    [R, x, k] = au(null),
    T = t + 2 * l,
    O = 0;
  while (O < o && m.has(O)) O++;
  let H = o - 1;
  while (H >= 0 && m.has(H)) H--;
  function E(d, h) {
    return (d > O ? l : 0) + (h <= H ? l : 0);
  }
  function B(d) {
    return d <= 0 || d >= o || f === void 0 || f.has(d) || m.has(d);
  }
  function L(d) {
    let h = Math.min(d + 1, o);
    while (!B(h)) h++;
    return h;
  }
  function N(d) {
    return B(d) && !(d > O && d <= O + l);
  }
  function U(d, h) {
    let u = d + h;
    while (u > 0 && u < o && !N(u)) u += h;
    return Vc(u, 0, o);
  }
  function p(d) {
    for (let h = Math.min(d + T, o); h > d; h--) if (B(h) && h - d + E(d, h) <= T) return h;
    return L(d);
  }
  let A = 0;
  for (let d = o - 1; d >= 0; d--)
    if (N(d) && p(d) < o) {
      A = U(d, 1);
      break;
    }
  function ee(d) {
    let h = p(d);
    return m.has(h - 1) && h < o;
  }
  function z(d) {
    let h = p(d);
    for (let u = d; u < h; u++) if (!m.has(u)) return !0;
    return !1;
  }
  function v(d, h) {
    let u = d;
    while (!B(u)) u--;
    let te = L(u),
      J = te > H ? o : te,
      Y = Math.min(u, A);
    while (!N(Y)) Y--;
    let V = u <= O ? 0 : Y;
    while (V < Y && p(V) < te) V = U(V, 1);
    let Z = Math.min(Y, Math.max(0, J - T));
    while (Z < Y && (!N(Z) || p(Z) < J)) Z++;
    let re = Vc(h ?? Z, Math.min(Z, V), V);
    while (!N(re)) re--;
    if (h !== null && h > u)
      for (let me = U(re, -1); me < re && p(me) >= J && (m.has(re - 1) || ee(re)); me = U(me, -1))
        re = me;
    return re;
  }
  let M = v(D, R),
    K = p(M);
  P(() => {
    if (R !== null && R !== M) x(M);
  }, [R, M, x]);
  function oe(d) {
    let h = v(W(), k()),
      u = Vc(d, 0, A);
    while (!N(u)) u--;
    let te = u < h ? -1 : 1;
    while (u !== h && u > 0 && u < A && ((m.has(u - 1) && (te < 0 || !m.has(u))) || ee(u) || !z(u)))
      u = U(u, te);
    let J = z(u) ? u : h;
    x(J);
    let Y = J,
      V = p(J);
    while (Y < V && v(Y, J) !== J) Y++;
    while (V > Y && v(V - 1, J) !== J) V--;
    g?.(Y, V);
  }
  function X(d) {
    let h = v(W(), k());
    for (let u = 0; u < Math.abs(d); u++) h = U(h, d < 0 ? -1 : 1);
    if (d !== 0) oe(h);
  }
  let F = K - M >= o,
    G = F ? 0 : Math.max(0, T - E(M, K) - K + M),
    q = K - M + G;
  return {
    windowStart: M,
    windowEnd: K,
    spareLines: G,
    fits: F,
    getWindow: () => {
      let d = v(W(), k());
      return { windowStart: d, windowEnd: p(d) };
    },
    scrollBy: X,
    scrollTo: oe,
    pin: () => x(v(W(), k())),
    bar: {
      offset: M,
      visible: q,
      total: o,
      onScrollTo: F ? void 0 : (d) => oe(d + q >= o ? A : d),
      onScrollBy: F ? void 0 : X
    }
  };
}
function ln({
  count: o,
  visibleCount: t,
  headingLines: i,
  rowHeights: a,
  moreRowLines: m = !1,
  rowKeys: f,
  resetKey: l,
  initialCursor: g = 0,
  isDisabled: b = !1,
  onAccept: D,
  onRowKeyDown: W,
  onCursorChange: R,
  edge: x = "clamp",
  onUpFromFirstItem: k,
  onDownFromLastItem: T,
  declineHomeEnd: O = !1,
  keybindingContext: H = "Select"
}) {
  let E = C(null),
    B = Math.max(0, o - 1),
    [L, N, U] = au(() => {
      let c = Vc(g, 0, B);
      return { index: c, key: f?.[c], resetKey: l };
    }),
    p = Wee(E),
    { focusDirection: A } = HPe(),
    ee = L6(b);
  function z(c) {
    if (!Object.is(c.resetKey, l)) return 0;
    let I = Vc(c.index, 0, B);
    if (c.key === void 0 || f?.[I] === c.key) return I;
    let ie = f?.indexOf(c.key) ?? -1;
    return ie < 0 ? I : ie;
  }
  let v = z(L);
  function M() {
    return z(U());
  }
  function K(c) {
    N((I) =>
      I.index === c && I.key === f?.[c] && Object.is(I.resetKey, l)
        ? I
        : { index: c, key: f?.[c], resetKey: l }
    );
  }
  let oe = new Set(i),
    X = oe.size;
  for (let c = 0; c < o; c++) X += a?.[c] ?? 1;
  let F = [],
    G = [0],
    q = new Set();
  for (let c = 0, I = 0; c < X; c++) {
    if (c >= I) {
      if ((q.add(c), !oe.has(c))) ((I = c + (a?.[F.length] ?? 1)), F.push(c));
    }
    G.push(F.length);
  }
  let d = m ? 1 : 0;
  function h(c) {
    Z((I) => {
      let ie = I + c;
      if (x === "wrap" && o > 0) return ((ie % o) + o) % o;
      return Vc(ie, 0, B);
    });
  }
  function u(c) {
    if (ne.fits) return !1;
    if (t === 1) {
      h(c);
      return;
    }
    Z((I) => {
      let ie = ne.getWindow(),
        ce = Vc((F[I] ?? 0) + c * (ie.windowEnd - ie.windowStart), 0, X - 1);
      while (!q.has(ce)) ce--;
      return Vc(c > 0 ? Math.max((G[ce + 1] ?? 0) - 1, I + 1) : Math.min(G[ce] ?? 0, I - 1), 0, B);
    });
  }
  function te(c) {
    if (M() === (c < 0 ? 0 : B)) {
      let I = c < 0 ? k : T;
      if (I) {
        I();
        return;
      }
      if (x !== "wrap" && A(c < 0 ? "up" : "down")) return;
    }
    h(c);
  }
  function J(c) {
    if (O && ne.fits) return !1;
    Z(c);
  }
  P(() => {
    if (U() === L) K(v);
  });
  let Y = Bo((c) => R?.(c)),
    V = C(null);
  P(() => {
    if (o === 0) {
      V.current = null;
      return;
    }
    if (V.current !== v) ((V.current = v), Y(v));
  }, [v, o]);
  function Z(c) {
    let I = Vc(typeof c === "function" ? c(M()) : c, 0, B);
    if ((K(I), o === 0 || I === V.current)) return;
    ((V.current = I), R?.(I));
  }
  (an(
    Ir(
      {
        "select:next": () => te(1),
        "select:previous": () => te(-1),
        "select:pageDown": () => u(1),
        "select:pageUp": () => u(-1),
        "select:first": () => J(0),
        "select:last": () => J(B)
      },
      (c) => () => (L6(b) ? !1 : c())
    ),
    { context: H, isActive: p && !ee && o > 0 }
  ),
    an(
      { "select:accept": () => (L6(b) ? !1 : D?.(M())) },
      { context: H, isActive: p && !ee && o > 0 && D !== void 0 }
    ));
  let re = Md() !== null;
  function me(c) {
    if (L6(b) || o === 0) return;
    let I = M();
    if (c.key === "return" && D && !re) {
      (D(I), c.preventDefault(), c.stopImmediatePropagation());
      return;
    }
    W?.(c, I);
  }
  let ne = rn({
    lineCount: X,
    visibleCount: t,
    cursorLine: F[v] ?? 0,
    getCursorLine: () => F[M()] ?? 0,
    headings: oe,
    boundaries: q,
    markerLines: d,
    onScroll: (c, I) => {
      let ie = M(),
        ce = G[c] ?? 0,
        Fe = (G[I] ?? o) - 1;
      Z(ce > Fe ? ie : Vc(ie, ce, Fe));
    }
  });
  function De(c) {
    if (c.deltaY === 0 || L6(b)) return;
    (ne.scrollBy(c.deltaY > 0 ? 1 : -1), c.stopImmediatePropagation());
  }
  function He(c, I = !1) {
    if (!I && L6(b)) return;
    ne.scrollTo(c < 0 ? 0 : X);
  }
  function Ae(c) {
    (ne.pin(), Z(Vc(c, 0, B)));
  }
  return {
    cursor: v,
    windowStart: ne.windowStart,
    windowEnd: ne.windowEnd,
    spareLines: ne.spareLines,
    moreAbove: G[ne.windowStart] ?? 0,
    moreBelow: o - (G[ne.windowEnd] ?? o),
    isCursor: (c) => c === v && o > 0,
    hasFocus: p,
    scrollBar: {
      ...ne.bar,
      onScrollTo: ee ? void 0 : ne.bar.onScrollTo,
      onScrollBy: ee ? void 0 : ne.bar.onScrollBy
    },
    setCursor: Ae,
    scrollToEdge: He,
    containerRef: E,
    bind: { ref: E, tabIndex: 0, onKeyDown: me, onWheel: !ee && !ne.fits ? De : void 0 }
  };
}
function L6(o) {
  return typeof o === "function" ? o() : o === !0;
}
function ht(H, E) {
  return { label: H, value: E };
}
function wt(J, Y) {
  return J + Y;
}
var Ye = 3,
  cn = 7,
  So = Gt(!1);
function WI() {
  return be(So);
}
function Sn(o) {
  let m = w(27),
    t = rt(),
    { onFocus: i, onSelect: a } = o;
  if (t && a !== void 0) {
    let f, l;
    if (m[0] !== o.children) {
      l = [];
      f = new Map();
      for (const g of Jh.toArray(o.children)) {
        if (!Me(g)) {
          l.push(g);
          continue;
        }
        f.set(l.length, [...(f.get(l.length) ?? []), g]);
      }
      ((m[0] = o.children), (m[1] = f), (m[2] = l));
    } else ((f = m[1]), (l = m[2]));
    if (l.length === 0) {
      let b;
      if (m[3] !== o.emptyMessage)
        ((b = o.emptyMessage ? e(n, { children: o.emptyMessage }) : null),
          (m[3] = o.emptyMessage),
          (m[4] = b));
      else b = m[4];
      return b;
    }
    let b;
    if (m[5] !== o.isDisabled)
      ((b = (D) => {
        if (L6(o.isDisabled) || D.ctrl || D.meta) {
          return;
        }
        if (D.key === "return" || D.key === " ") D.stopPropagation();
      }),
        (m[5] = o.isDisabled),
        (m[6] = b));
    else b = m[6];
    let W;
    if (m[7] !== l) ((W = l.map(ht)), (m[7] = l), (m[8] = W));
    else W = m[8];
    let R;
    if (m[9] !== o.isDisabled) ((R = L6(o.isDisabled)), (m[9] = o.isDisabled), (m[10] = R));
    else R = m[10];
    let x;
    if (m[11] !== i || m[12] !== a)
      ((x = (k) => {
        (i?.(k), a(k));
      }),
        (m[11] = i),
        (m[12] = a),
        (m[13] = x));
    else x = m[13];
    let T;
    if (m[14] !== f || m[15] !== i || m[16] !== W || m[17] !== R || m[18] !== x)
      ((T = e(Bee, {
        options: W,
        headings: f,
        drawLabels: !0,
        isDisabled: R,
        onFocus: i,
        onChange: x
      })),
        (m[14] = f),
        (m[15] = i),
        (m[16] = W),
        (m[17] = R),
        (m[18] = x),
        (m[19] = T));
    else T = m[19];
    let O;
    if (m[20] !== b || m[21] !== T)
      ((O = e(s, { flexDirection: "column", onKeyDown: b, children: T })),
        (m[20] = b),
        (m[21] = T),
        (m[22] = O));
    else O = m[22];
    return O;
  }
  if (o.visibleCount === void 0) {
    let b;
    if (m[23] !== o) ((b = e(ko, { ...o })), (m[23] = o), (m[24] = b));
    else b = m[24];
    return b;
  }
  let b;
  if (m[25] !== o)
    ((b = e(Je, { props: o, visibleCount: o.visibleCount })), (m[25] = o), (m[26] = b));
  else b = m[26];
  return b;
}
function ko(o) {
  let b = w(21),
    t = j2(),
    i = be(U2),
    a = Te(),
    { rows: m } = ds(a),
    f = sl(),
    l = i !== null && !f,
    g = C(null),
    D;
  if (b[0] !== l || b[1] !== t)
    ((D = () => {
      let W = g.current;
      if (W === null) {
        return null;
      }
      let R = t?.box.current ?? W;
      while (t === null && !l && R.parentNode !== void 0) R = R.parentNode;
      return Ys(R).height - Ys(W).height;
    }),
      (b[0] = l),
      (b[1] = t),
      (b[2] = D));
  else D = b[2];
  let x = Ml(D),
    k;
  if (b[3] !== i || b[4] !== t?.box.current)
    ((k = () => {
      let T = t?.box.current ?? g.current;
      let O = i === null ? null : i();
      return T === null || O === null ? null : O + Ys(T).height;
    }),
      (b[3] = i),
      (b[4] = t?.box.current),
      (b[5] = k));
  else k = b[5];
  let H = Ml(k),
    E = be(Fxt),
    B;
  if (b[6] !== o.children || b[7] !== o.emptyMessage) {
    let L = Jh.toArray(o.children);
    B = L.every(Me) ? Number(Boolean(o.emptyMessage)) : L.map(Mo).reduce(wt, 0);
    ((b[6] = o.children), (b[7] = o.emptyMessage), (b[8] = B));
  } else B = b[8];
  let N = B,
    U = o.maxVisibleCount === void 0 ? N : Math.min(N, o.maxVisibleCount),
    p,
    A;
  if (b[9] !== E || b[10] !== l || b[11] !== U)
    ((p = () =>
      l ? E?.({ rows: () => (g.current === null ? U : Ys(g.current).height), owed: U }) : void 0),
      (A = [l, E, U]),
      (b[9] = E),
      (b[10] = l),
      (b[11] = U),
      (b[12] = p),
      (b[13] = A));
  else ((p = b[12]), (A = b[13]));
  Xt(p, A);
  let ee;
  if (b[14] === S) ((ee = () => (g.current === null ? 0 : Ys(g.current).width)), (b[14] = ee));
  else ee = b[14];
  let z = Ml(ee),
    [v, M] = y(null),
    K = f ? (t?.rows ?? m) : a.rows,
    oe = v?.rows === K && v.width === z;
  if (x !== null && (v === null || !oe || x > v.chrome)) M({ rows: K, width: z, chrome: x });
  let X = oe ? Math.max(v.chrome, x ?? v.chrome) : x,
    F = f ? K : l ? H : a.rows - (t?.reserve ?? B2),
    G =
      X === null || F === null
        ? Ye
        : f || l
          ? F - X
          : Math.min(Math.max(cn, Math.floor(a.rows / 2)), F - X),
    q = o.maxVisibleCount === void 0 ? G : Math.min(G, o.maxVisibleCount),
    d = Math.max(1, q),
    h =
      d === 1
        ? "none"
        : d < Ye && o.overflowHint !== "none"
          ? "glyph"
          : o.overflowHint === "count"
            ? void 0
            : o.overflowHint,
    u;
  if (b[15] !== h || b[16] !== o)
    ((u = { ...o, overflowHint: h }), (b[15] = h), (b[16] = o), (b[17] = u));
  else u = b[17];
  let te;
  if (b[18] !== d || b[19] !== u)
    ((te = e(s, {
      ref: g,
      flexDirection: "column",
      children: e(Je, { props: u, visibleCount: d })
    })),
      (b[18] = d),
      (b[19] = u),
      (b[20] = te));
  else te = b[20];
  return te;
}
function Je({
  props: {
    children: o,
    defaultFocusIndex: t,
    resetKey: i,
    onSelect: a,
    onFocus: m,
    onRowKeyDown: f,
    isDisabled: l,
    onDisabledRowClick: g,
    wrap: b = !1,
    onUpFromFirstItem: D,
    onDownFromLastItem: W,
    declineHomeEnd: R = !1,
    keybindingContext: x,
    overflowHint: k,
    scrollBar: T = !0,
    emptyMessage: O,
    hoverStyle: H,
    rowClick: E = "select",
    styled: B = !1
  },
  visibleCount: L
}) {
  let N = Jh.toArray(o),
    U = [],
    p = 0;
  for (let _ of N) (U.push(Mo(_)), (p += U.at(-1) ?? 1));
  let A = k === void 0 && p > L,
    ee = A ? Math.max(1, L - 2) : L,
    z = A && ee === L - 2,
    v = [],
    M = [],
    K = [],
    oe = [],
    X = [],
    F = 0;
  for (let [_, ae] of N.entries()) {
    if ((oe.push(M.length), X.push(F), Me(ae))) {
      v.push(F++);
      continue;
    }
    (M.push(Math.min(U[_] ?? 1, ee)),
      K.push(Og(ae) ? (ae.key ?? void 0) : void 0),
      (F += M.at(-1) ?? 1));
  }
  let G = M.length,
    q = L6(l),
    d = C(null),
    { containerRef: h, ...u } = ln({
      count: G,
      visibleCount: ee,
      moreRowLines: z,
      headingLines: v,
      rowHeights: M,
      rowKeys: K,
      resetKey: i,
      initialCursor: t,
      isDisabled: l,
      edge: b ? "wrap" : "clamp",
      onUpFromFirstItem: D,
      onDownFromLastItem: W,
      declineHomeEnd: R,
      keybindingContext: x,
      onAccept: a,
      onRowKeyDown: f,
      onCursorChange: (_) => {
        ((d.current = { cursor: _, count: G }), m?.(_));
      }
    }),
    te = Bo((_) => m?.(_));
  (P(() => {
    let _ = d.current;
    if (G === 0 || (_?.cursor === u.cursor && _.count === G)) return;
    ((d.current = { cursor: u.cursor, count: G }), te(u.cursor));
  }, [u.cursor, G]),
    R_(h, !q));
  let J = aw(),
    Y = ro(),
    V = (_) => J(_) || Y.dropsClick(_);
  if (G === 0)
    return e(s, {
      ref: h,
      flexDirection: "column",
      tabIndex: 0,
      children: O && e(n, { dimColor: !0, children: O })
    });
  let Z = k === void 0 || (k === "glyph" && L === 1) ? "count" : k,
    { windowStart: re, windowEnd: me, moreAbove: ne, moreBelow: De } = u,
    He = N.flatMap((_, ae) => {
      let ye = X[ae] ?? 0;
      return ye >= re && ye < me ? [{ child: _, index: ae, line: ye }] : [];
    }),
    Ae = (_) =>
      q && g === void 0
        ? void 0
        : (ae) => {
            if ((u.scrollToEdge(_, q), Y.pressed(ae), q)) g?.(d.current?.cursor ?? u.cursor);
          },
    c = Z === "count" && e(l6e, { direction: "above", count: ne, onPress: Ae(-1) }),
    I = Z === "count" && e(l6e, { direction: "below", count: De, onPress: Ae(1) }),
    ie = He.map(({ child: _, index: ae, line: ye }, Ao) => {
      let Fo = Og(_) ? (_.key ?? ye) : ye,
        jo = Ao === 0 && ne > 0,
        Uo = Ao === He.length - 1 && De > 0;
      if (Me(_))
        return e(
          FR,
          {
            isFocused: !1,
            showScrollUp: Z === "glyph" && jo,
            showScrollDown: Z === "glyph" && Uo,
            styled: !1,
            children: _
          },
          Fo
        );
      let we = oe[ae] ?? 0,
        Ko = u.isCursor(we);
      return e(
        So.Provider,
        {
          value: Ko && !q,
          children: e(s, {
            flexDirection: "column",
            height: M[we],
            overflow: "hidden",
            onClick:
              q && g !== void 0
                ? (ve) => {
                    if (ve.droppedAsStray || V(ve)) return;
                    (u.setCursor(we), g(we));
                  }
                : E === "move" && !q && a !== void 0
                  ? (ve) => {
                      if (ve.droppedAsStray || V(ve) || L6(l)) return;
                      u.setCursor(we);
                    }
                  : void 0,
            children: e(FR, {
              isFocused: Ko,
              idle: q,
              showScrollUp: Z === "glyph" && jo,
              showScrollDown: Z === "glyph" && Uo,
              styled: B,
              hoverStyle: H,
              declareCursor: !q && kn(_)?.declareCursor !== !1,
              onClick:
                q || a === void 0 || E === "move"
                  ? void 0
                  : (ve) => {
                      if (V(ve) || L6(l)) return;
                      (u.setCursor(we), a(we));
                    },
              children: _
            })
          })
        },
        Fo
      );
    }),
    ce = u.spareLines > 0 && e(s, { flexShrink: 0, height: u.spareLines });
  if (!T)
    return e(u8t, {
      value: Y.dropsClick,
      children: r(IPe, { windowStart: re, ...u.bind, children: [c, ie, ce, I] })
    });
  let Fe = r(IPe, { windowStart: re, children: [ie, ce] });
  return e(u8t, {
    value: Y.dropsClick,
    children: r(s, {
      flexDirection: "column",
      ...u.bind,
      children: [
        z ? null : c,
        r(qPn, {
          bar: z ? { ...u.scrollBar, arrows: !0 } : u.scrollBar,
          height: z ? L : void 0,
          children: [z ? c : null, Fe, z ? I : null]
        }),
        z ? null : I
      ]
    })
  });
}
function Eo(o) {
  let i = w(2),
    { children: t } = o,
    a;
  if (i[0] !== t) ((a = e(Q, { children: t })), (i[0] = t), (i[1] = a));
  else a = i[1];
  return a;
}
function Co(o) {
  let i = w(2),
    { children: t } = o,
    a;
  if (i[0] !== t) ((a = e(Q, { children: t })), (i[0] = t), (i[1] = a));
  else a = i[1];
  return a;
}
function Me(o) {
  return Og(o) && o.type === Co;
}
function Mo(o) {
  let t = kn(o)?.lines ?? 1;
  return Number.isFinite(t) ? Math.max(1, Math.trunc(t)) : 1;
}
function kn(o) {
  return Og(o) && o.type === Eo ? o.props : void 0;
}
var Sd = Object.assign(Sn, { Item: Eo, Heading: Co });
function Nt() {
  return new Set();
}
function Ot(X) {
  if (!Ce(X)) {
    return 0;
  }
  let { icon: F } = X.props;
  return Og(F) && F.type === mt ? Flt() : le(ZM(F));
}
function Tt(G) {
  return he(G.props.meta).length > 0;
}
function Dt(q) {
  return le(N6(q.props.label));
}
function Ht(d) {
  return le(he(d.props.meta).join(" \xB7 "));
}
var Mn = 2,
  oo = 3,
  En = 50,
  Cn = 6;
function An(o) {
  let t = w(30),
    i,
    a;
  if (t[0] !== o) (({ children: i, ...a } = o), (t[0] = o), (t[1] = i), (t[2] = a));
  else ((i = t[1]), (a = t[2]));
  let m = ds(be(Mm) ?? { rows: 0, columns: 0 }),
    f = C(null),
    [l] = y(Nt),
    g;
  if (t[3] !== l || t[4] !== m)
    ((g = () => {
      let [b] = l;
      if (b) {
        return Ys(b).width;
      }
      return ((f.current && Ys(f.current).width) || m.columns) - Mn;
    }),
      (t[3] = l),
      (t[4] = m),
      (t[5] = g));
  else g = t[5];
  let D = Ml(g),
    W,
    R,
    x,
    k,
    T,
    O;
  if (t[6] !== i || t[7] !== a || t[8] !== l || t[9] !== D) {
    let H = Jh.toArray(i);
    let E = H.filter(Ce);
    let B = Math.max(0, ...H.map(Ot));
    let L = E.filter(Tt);
    let N = Math.min(En, Math.max(0, ...L.map(Dt)));
    let U = Math.max(0, ...L.map(Ht));
    let p = D - (B > 0 ? B + 1 : 0) - oo;
    let A = p - Math.min(N, Math.max(Math.ceil(p / 2), p - U));
    let z =
      N + U > p && p < 2 * Cn
        ? 0
        : Math.min(A, Math.max(0, ...L.map((ee) => le(no(he(ee.props.meta), A)))));
    let v = Math.min(N, p - z);
    R = s;
    T = f;
    O = "column";
    W = Sd;
    x = a;
    let M;
    if (t[16] !== z || t[17] !== B || t[18] !== v || t[19] !== l)
      ((M = (K) =>
        Ce(K)
          ? e(
              Sd.Item,
              {
                lines: N6(K.props.description) ? 2 : 1,
                children: e(Ho, {
                  item: K.props,
                  iconWidth: B,
                  nameWidth: v,
                  factsWidth: z,
                  rowLines: l
                })
              },
              K.key
            )
          : K),
        (t[16] = z),
        (t[17] = B),
        (t[18] = v),
        (t[19] = l),
        (t[20] = M));
    else M = t[20];
    k = H.map(M);
    ((t[6] = i),
      (t[7] = a),
      (t[8] = l),
      (t[9] = D),
      (t[10] = W),
      (t[11] = R),
      (t[12] = x),
      (t[13] = k),
      (t[14] = T),
      (t[15] = O));
  } else ((W = t[10]), (R = t[11]), (x = t[12]), (k = t[13]), (T = t[14]), (O = t[15]));
  let M;
  if (t[21] !== W || t[22] !== x || t[23] !== k)
    ((M = e(W, { ...x, children: k })), (t[21] = W), (t[22] = x), (t[23] = k), (t[24] = M));
  else M = t[24];
  let oe;
  if (t[25] !== R || t[26] !== T || t[27] !== O || t[28] !== M)
    ((oe = e(R, { ref: T, flexDirection: O, children: M })),
      (t[25] = R),
      (t[26] = T),
      (t[27] = O),
      (t[28] = M),
      (t[29] = oe));
  else oe = t[29];
  return oe;
}
function Ho(o) {
  let k = w(42),
    { item: t, iconWidth: i, nameWidth: a, factsWidth: m, rowLines: f } = o,
    { icon: l, meta: g, ...b } = t,
    D = WI(),
    W = rt(),
    R = N6(b.label),
    x = N6(b.description),
    T,
    O;
  if (k[0] !== x || k[1] !== m || k[2] !== l || k[3] !== W || k[4] !== R || k[5] !== g) {
    O = vn;
    U: {
      let H = he(g);
      if (W) {
        const E = H.length > 0 && `, ${H.join(" \xB7 ")}`;
        const B = x && `. ${x}`;
        let L;
        if (k[8] !== R || k[9] !== E || k[10] !== B)
          ((L = r(n, { children: [R, E, B] })), (k[8] = R), (k[9] = E), (k[10] = B), (k[11] = L));
        else L = k[11];
        let N;
        if (k[12] !== l || k[13] !== L)
          ((N = r(s, { children: [l, L] })), (k[12] = l), (k[13] = L), (k[14] = N));
        else N = k[14];
        O = N;
        break U;
      }
      T = m > 0 && H.length > 0 ? no(H, m) : void 0;
    }
    ((k[0] = x),
      (k[1] = m),
      (k[2] = l),
      (k[3] = W),
      (k[4] = R),
      (k[5] = g),
      (k[6] = T),
      (k[7] = O));
  } else ((T = k[6]), (O = k[7]));
  if (O !== vn) return O;
  let p = T,
    E;
  if (k[15] !== f)
    ((E = (A) => {
      if (!A) {
        return;
      }
      return (
        f.add(A),
        () => {
          f.delete(A);
        }
      );
    }),
      (k[15] = f),
      (k[16] = E));
  else E = k[16];
  let B;
  if (k[17] !== l || k[18] !== i)
    ((B = i > 0 && e(s, { flexShrink: 0, width: i, marginRight: 1, children: l })),
      (k[17] = l),
      (k[18] = i),
      (k[19] = B));
  else B = k[19];
  const L = p === void 0 ? 1 : 0,
    N = p === void 0 ? void 0 : a,
    ee = p === void 0 ? 0 : oo,
    z = D ? "suggestion" : void 0;
  let v;
  if (k[20] !== R || k[21] !== z)
    ((v = e(n, { color: z, wrap: "truncate-end", children: R })),
      (k[20] = R),
      (k[21] = z),
      (k[22] = v));
  else v = k[22];
  let M;
  if (k[23] !== v || k[24] !== L || k[25] !== N || k[26] !== ee)
    ((M = e(s, { flexShrink: L, width: N, marginRight: ee, children: v })),
      (k[23] = v),
      (k[24] = L),
      (k[25] = N),
      (k[26] = ee),
      (k[27] = M));
  else M = k[27];
  let K;
  if (k[28] !== m || k[29] !== p)
    ((K =
      p !== void 0 &&
      e(s, {
        flexShrink: 1,
        maxWidth: m,
        children: e(n, { dimColor: !0, wrap: "truncate-end", children: p })
      })),
      (k[28] = m),
      (k[29] = p),
      (k[30] = K));
  else K = k[30];
  let oe;
  if (k[31] !== M || k[32] !== K || k[33] !== E || k[34] !== B)
    ((oe = r(s, { ref: E, children: [B, M, K] })),
      (k[31] = M),
      (k[32] = K),
      (k[33] = E),
      (k[34] = B),
      (k[35] = oe));
  else oe = k[35];
  let X;
  if (k[36] !== x || k[37] !== i)
    ((X =
      x &&
      e(s, {
        paddingLeft: i > 0 ? i + 1 : 0,
        children: e(n, { dimColor: !0, wrap: "truncate-end", children: x })
      })),
      (k[36] = x),
      (k[37] = i),
      (k[38] = X));
  else X = k[38];
  let F;
  if (k[39] !== oe || k[40] !== X)
    ((F = r(s, { flexDirection: "column", flexGrow: 1, flexShrink: 1, children: [oe, X] })),
      (k[39] = oe),
      (k[40] = X),
      (k[41] = F));
  else F = k[41];
  return F;
}
function Fn(o) {
  return null;
}
function Ce(o) {
  return Og(o) && o.type === Fn;
}
function he(o) {
  return (o ?? []).map(N6).filter((t) => t !== "");
}
function no(o, t) {
  return (
    o.map((i, a) => o.slice(0, a + 1).join(" \xB7 ")).findLast((i, a) => a === 0 || le(i) <= t) ??
    ""
  );
}
function N6(o) {
  if (typeof o === "string") return zr(o);
  return typeof o === "number" || typeof o === "boolean" ? String(o) : "";
}
var sn = Object.assign(An, { Item: Fn });
export { u8t, l6e, qPn, ino, L6, WI, Sd, N6, sn };

//# sourceMappingURL=chunk-ngj43h87.js.map
