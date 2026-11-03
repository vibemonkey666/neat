// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { Jw } from "./chunk-1kj0zhn3.js";
import { sfs, MW, VI, Eg } from "./chunk-rwaeax2b.js";
import { s, n, Ys } from "./chunk-h56pfqh7.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Md } from "./chunk-ftfxe7en.js";
import { g, f } from "./chunk-brszmkb3.js";
import { le } from "./chunk-vw9e882a.js";
import { Sj } from "./chunk-dmwqqfc0.js";
import { AG, Yhe, J5n } from "./chunk-ce3m2y48.js";
import { qc } from "./chunk-b77hptpq.js";
import { Uxt } from "./chunk-vgsmcxaz.js";
import { V, GI } from "./chunk-j32s98r9.js";
import { Ee } from "./chunk-xzcese97.js";
import { Te } from "./chunk-pbpv20s6.js";
import { Hs } from "./chunk-j7vwsewt.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { Gt, de, be, P, a0o, Xt, ee, C, y, j } from "./chunk-bq35vvkw.js";
j();
j();
var mt = {
  "confirm:yes": { description: "confirm" },
  "confirm:no": { description: "cancel" },
  "confirm:previous": { description: "navigate" },
  "confirm:next": { description: "navigate" },
  "confirm:nextField": { description: "next field" },
  "confirm:previousField": { description: "previous field" },
  "confirm:toggle": { description: "toggle" },
  "confirm:cycleMode": { description: "cycle mode" },
  ...{},
  "select:next": { description: "navigate" },
  "select:previous": { description: "navigate" },
  "select:pageUp": { description: "page up" },
  "select:pageDown": { description: "page down" },
  "select:first": { description: "first" },
  "select:last": { description: "last" },
  "select:accept": { description: "select" },
  "select:cancel": { description: "cancel" },
  "abovePrompt:toggle": { description: "hide/show plugin panel" },
  "abovePrompt:focus": { description: "focus plugin buttons, inputs and selects" },
  "abovePrompt:next": { description: "navigate" },
  "abovePrompt:previous": { description: "navigate" },
  "abovePrompt:press": { description: "press / submit / pick" },
  "abovePrompt:leave": { description: "back to prompt" },
  "abovePrompt:highlightNext": { description: "next option" },
  "abovePrompt:highlightPrevious": { description: "previous option" },
  "pane:scrollUp": { description: "scroll" },
  "pane:scrollDown": { description: "scroll" },
  "pane:pageUp": { description: "page up" },
  "pane:pageDown": { description: "page down" },
  "pane:top": { description: "top" },
  "pane:bottom": { description: "bottom" },
  "pane:grow": { description: "widen / heighten plugin pane" },
  "pane:shrink": { description: "narrow / shorten plugin pane" },
  "pane:close": { description: "close plugin pane" },
  "pane:next": { description: "show next plugin pane" },
  "pane:previous": { description: "show previous plugin pane" },
  "tabs:next": { description: "switch tab" },
  "tabs:previous": { description: "switch tab" },
  "app:toggleReplTab": { description: "switch tab" },
  "app:toggleDiffNoiseFilter": { description: "show/hide tests in diff panel" },
  "app:diffFileListUp": { description: "scroll diff panel file list" },
  "app:diffFileListDown": { description: "scroll diff panel file list" },
  "app:toggleDiffPreSession": { description: "show/hide pre-session changes in diff panel" },
  "app:cycleDiffBase": { description: "switch diff panel base" },
  ...{}
};
function He(i) {
  if (i.startsWith("command:")) return { description: i.slice(8) };
  return mt[i];
}
j();
var J = Gt(null);
var gt = 4,
  bt = [
    ["select:previous", "select:next"],
    ["confirm:previous", "confirm:next"],
    ["tabs:next", "tabs:previous"]
  ];
function fe({
  boundary: i,
  fallback: l = null,
  order: a,
  omit: p,
  max: x = gt,
  maxWidth: b,
  terse: E = !1,
  format: k
}) {
  let K = Md(),
    { focusManager: H, rootNode: O } = be(Eg),
    u = be(J),
    [D, I] = y(0);
  P(() => {
    if (!K || !H) return;
    let R = () => I((v) => v + 1),
      B = H.subscribe(R),
      T = K.keyHandlerRegistry.scopesChanged.subscribe(R);
    return (
      R(),
      () => {
        (B(), T());
      }
    );
  }, [K, H]);
  let A = ee(
      () =>
        ht({
          ctx: K,
          activeElement: H?.activeElement ?? null,
          boundaryNode: i ? i.current : (O ?? null),
          rendered: i ? u : null,
          order: a,
          omit: p,
          max: x,
          maxWidth: b,
          terse: E,
          format: k
        }),
      [K, H, i, O, u, a, p, x, b, E, k, D]
    ),
    L = C(null);
  if (
    (P(() => {
      let R = A.fellBack ? "fell_back" : A.hadEntryWithoutDescription ? "no_description" : "ok";
      if (R === L.current) return;
      let B = L.current === null;
      if (((L.current = R), B && R === "fell_back")) return;
      if (R === "ok") g("keybinding_auto_hints");
      else f("keybinding_auto_hints", R);
    }, [A.fellBack, A.hadEntryWithoutDescription]),
    A.fellBack)
  )
    return l;
  return e(n, { dimColor: !0, italic: !0, children: A.text });
}
function ht({
  ctx: i,
  activeElement: l,
  boundaryNode: a,
  rendered: p,
  order: x,
  omit: b,
  max: E,
  maxWidth: k,
  terse: K,
  format: H
}) {
  let O = { fellBack: !0, text: "", hadEntryWithoutDescription: !1 };
  if (!i) return O;
  let u = [],
    D = !1,
    I = 0,
    A = a === null ? void 0 : (l ?? void 0);
  while (A) {
    let o = A === a,
      d = i.keyHandlerRegistry.decls.get(A);
    if (d) Oe(u, d, I, o);
    if (o) {
      D = !0;
      break;
    }
    ((A = A.parentNode), I++);
  }
  if (!D) {
    if (!p) return O;
    let o = p.chain.length - 1,
      d = p.chain;
    for (let h of p.below[o]?.values() ?? [])
      if (h.claimFocus && h.chain.length > d.length) d = h.chain;
    u = [];
    for (let h = d.length - 1; h >= o; h--) {
      let G = d[h];
      if (G) Oe(u, G, d.length - 1 - h, h === o);
    }
  }
  if (!u.some((o) => !o.isBoundary)) return O;
  let L = new Set(b ?? []),
    R = Yhe(Sj),
    B = !1,
    T = [];
  for (let o of u) {
    if (L.has(o.action) || !o.scope) continue;
    let d = J5n(o.action, o.scope, i.bindings, R);
    if (!d) continue;
    let h = o.hint ?? He(o.action)?.description;
    if (!h) {
      B = !0;
      continue;
    }
    T.push({ action: o.action, description: h, chord: AG(d), depth: o.depth });
  }
  let v = new Map();
  (x ?? []).forEach((o, d) => v.set(o, d));
  let q = new Set(),
    M = [];
  for (let o of T) {
    if (q.has(o.description)) continue;
    q.add(o.description);
    let h = bt
        .find((N) => N.some((X) => X === o.action))
        ?.flatMap((N) => T.find((X) => X.action === N && X.description === o.description) ?? []),
      G = h?.length === 2 ? h : [o];
    M.push({
      order: Math.min(...G.map((N) => v.get(N.action) ?? 1 / 0)),
      text: GI({ chord: G.map((N) => N.chord), action: o.description, terse: K, format: H }),
      depth: o.depth
    });
  }
  M.sort((o, d) => {
    if (o.order !== d.order) return o.order - d.order;
    return o.depth - d.depth;
  });
  let U = " \xB7 ",
    F = le(U),
    c = 0,
    m = [];
  for (;;) {
    m = [];
    let o = 0;
    for (let G of M) {
      if (m.length >= E) break;
      let N = (m.length === 0 ? 0 : F) + le(G.text);
      if (k !== void 0 && o + N + c > k && m.length > 0) break;
      (m.push(G.text), (o += N));
    }
    let d = M.length - m.length;
    if (k === void 0 || d === 0) break;
    let h = le(`${U}+${d} more`);
    if (h <= c) break;
    c = h;
  }
  if (m.length === 0) return O;
  let S = M.length - m.length;
  return {
    fellBack: !1,
    text: S > 0 ? `${m.join(U)}${U}+${S} more` : m.join(U),
    hadEntryWithoutDescription: B
  };
}
function Oe(i, { scope: l, entriesRef: a }, p, x) {
  for (let b of a.current) {
    if (!b.action) continue;
    i.push({ action: b.action, hint: b.hint, scope: l, depth: p, isBoundary: x });
  }
}
j();
function hE({
  scope: i,
  bindings: l,
  active: a = !0,
  preemptive: p = !1,
  swallowAll: x = !1,
  claimFocus: b = !1,
  ref: E,
  flexGrow: k = 0,
  flexDirection: K,
  flexShrink: H,
  children: O
}) {
  let u = C(null),
    D = Md(),
    I = C([]);
  I.current = a ? l : [];
  let A = de((c) => yt(c, I.current), []),
    L = xt(i, a, p, x, I.current),
    R = a && p && Boolean(i),
    B = R && x;
  Xt(() => {
    if (!D) return;
    let c = u.current;
    if (!c) return;
    let { decls: m, scopesChanged: S, preemptiveScopes: W, swallowAll: o } = D.keyHandlerRegistry,
      d = { scope: i, active: a, preemptive: p, swallowAll: x, entriesRef: I };
    if ((m.set(c, d), R && i)) {
      if ((Ae(W, i), B)) Ae(o, i);
    }
    return (
      S.emit(),
      () => {
        if ((m.delete(c), R && i)) {
          if ((_e(W, i), B)) _e(o, i);
        }
        S.emit();
      }
    );
  }, [D, i, R, B, L]);
  let T = be(J),
    v = a0o(),
    [q] = y(() => new Map()),
    M = ee(
      () => ({
        chain: [...(T?.chain ?? []), { scope: i, entriesRef: I }],
        below: [...(T?.below ?? []), q]
      }),
      [T, i, q]
    );
  for (let c of T?.below ?? []) c.set(v, { chain: M.chain, claimFocus: b });
  (P(() => {
    let c = T?.below ?? [];
    for (let m of c) m.set(v, { chain: M.chain, claimFocus: b });
    return () => {
      for (let m of c) m.delete(v);
    };
  }, [T, v, M, b]),
    Xt(() => {
      if (!b) return;
      let c = u.current;
      if (!c) return;
      let m = VI(c),
        S = !1,
        W = () => {
          if (S) return;
          let o = u.current;
          if (!o) return;
          let d = m.activeElement;
          if (d && MW(d, o)) return;
          S = !0;
          try {
            m.focus(o);
          } finally {
            S = !1;
          }
        };
      return (m.pushAutoFocusFallback(c), W(), m.subscribe(W));
    }, [b]));
  let U = C(!1);
  Xt(() => {
    return;
  }, [i, b, D]);
  let F = de(
    (c) => {
      if (((u.current = c), typeof E === "function")) E(c);
      else if (E) E.current = c;
    },
    [E]
  );
  return e(qc, {
    ref: F,
    keybindingScope: i,
    onAction: A,
    tabIndex: b ? -1 : void 0,
    flexGrow: k,
    flexDirection: K,
    flexShrink: H,
    children: e(J, { value: M, children: O })
  });
}
function yt(i, l) {
  for (let a of l) {
    if (a.action !== i.action) continue;
    if (a.chordOnly && !i.isChordCompletion) continue;
    if (a.run() === !1) continue;
    i.consume();
    return;
  }
}
function Ae(i, l) {
  i.set(l, (i.get(l) ?? 0) + 1);
}
function _e(i, l) {
  let a = (i.get(l) ?? 0) - 1;
  if (a <= 0) i.delete(l);
  else i.set(l, a);
}
function xt(i, l, a, p, x) {
  return _([i ?? "", l, a, p, x.map((b) => [b.action ?? "", b.hint ?? "", Boolean(b.chordOnly)])]);
}
var Pe = {},
  Ct = Pe;
function bT(i) {
  return i ? Ct : Pe;
}
j();
function Nt() {
  return !1;
}
var Z = Gt(!1);
function iUe() {
  return be(Z);
}
function ngi(i) {
  let { children: l } = i;
  return (Te(), y(Nt), l);
}
function jmr(i) {
  let a = w(2),
    { children: l } = i,
    p;
  if (a[0] !== l)
    ((p = e(Z, {
      value: !0,
      children: e(s, { flexDirection: "column", paddingLeft: 1, children: l })
    })),
      (a[0] = l),
      (a[1] = p));
  else p = a[1];
  return p;
}
function RPe(i) {
  let { children: l, bold: a, color: p } = i;
  return iUe() ? e(n, { children: l }) : e(n, { bold: a, color: p, children: l });
}
function qt() {
  return !1;
}
function ci() {
  return !1;
}
var ye = Vt({}),
  Me = bT(!0),
  Be = ye;
function we(i) {
  let c = w(48),
    {
      title: l,
      titleEnd: a,
      titleSuffix: p,
      subtitle: x,
      isSubtitleDimmed: b,
      children: E,
      onCancel: k,
      color: K,
      hideInputGuide: H,
      hideBorder: O,
      inputGuide: u,
      truncateInputGuide: D,
      isCancelActive: I,
      onInterrupt: A,
      exitOnCtrlCD: L,
      onExit: R
    } = i,
    B = b === void 0 ? !0 : b,
    T = K === void 0 ? "permission" : K,
    v = I === void 0 ? !0 : I,
    q = L === void 0 ? !1 : L,
    M = iUe(),
    [U] = y(qt),
    F = M || U,
    m;
  if (c[0] !== T || c[1] !== F) ((m = nt(T, F)), (c[0] = T), (c[1] = F), (c[2] = m));
  else m = c[2];
  let S = m,
    W = M ? void 0 : S,
    o = F ? Be : ye,
    d = C(null),
    h = q || R !== void 0,
    { entries: G, exitState: N } = Uxt(h ? R : k, A, v),
    X;
  if (c[3] !== v || c[4] !== k)
    ((X = v ? [{ action: "confirm:no", run: k, hint: "cancel" }] : []),
      (c[3] = v),
      (c[4] = k),
      (c[5] = X));
  else X = c[5];
  let ot;
  if (c[6] !== G || c[7] !== X) ((ot = [...X, ...G]), (c[6] = G), (c[7] = X), (c[8] = ot));
  else ot = c[8];
  let Ce = ot,
    Y = be(Jw),
    Re = C(null),
    [se, zt] = y(x ? 2 : 1),
    rt;
  if (c[9] !== Y || c[10] !== se)
    ((rt = () => {
      if (!Y || !Re.current) {
        return;
      }
      let st = Ys(Re.current).height;
      if (st !== se) zt(st);
    }),
      (c[9] = Y),
      (c[10] = se),
      (c[11] = rt));
  else rt = c[11];
  Xt(rt);
  let De = se + 1 + (H ? 0 : 2),
    ct;
  if (c[12] !== Y || c[13] !== De)
    ((ct = Y ? { ...Y, rows: Math.max(0, Y.rows - De) } : null),
      (c[12] = Y),
      (c[13] = De),
      (c[14] = ct));
  else ct = c[14];
  let ve = ct,
    lt;
  if (c[15] !== h || c[16] !== N || c[17] !== u)
    ((lt =
      typeof u === "function"
        ? u(N)
        : N.pending
          ? r(n, { children: ["Press ", N.keyName, " again to ", h ? "exit" : "cancel"] })
          : u != null
            ? u
            : void 0),
      (c[15] = h),
      (c[16] = N),
      (c[17] = u),
      (c[18] = lt));
  else lt = c[18];
  let Se = lt,
    Ne = typeof u === "function" || N.pending || u != null,
    at;
  if (
    c[19] !== Se ||
    c[20] !== o ||
    c[21] !== H ||
    c[22] !== v ||
    c[23] !== F ||
    c[24] !== Ne ||
    c[25] !== D
  )
    ((at =
      !H &&
      e(s, {
        marginTop: 1,
        flexShrink: 0,
        children: Ne
          ? e(n, { dimColor: !0, italic: !0, wrap: D ? "truncate" : void 0, children: Se })
          : !v
            ? e(n, { dimColor: !0, italic: !0, children: o })
            : e(fe, {
                boundary: d,
                terse: F,
                format: F ? Me.format : void 0,
                fallback: e(n, { dimColor: !0, italic: !0, children: o })
              })
      })),
      (c[19] = Se),
      (c[20] = o),
      (c[21] = H),
      (c[22] = v),
      (c[23] = F),
      (c[24] = Ne),
      (c[25] = D),
      (c[26] = at));
  else at = c[26];
  let ke = at;
  const Ke = O || M ? 0 : 1;
  let ce;
  if (c[27] !== B || c[28] !== x || c[29] !== l || c[30] !== W || c[31] !== a || c[32] !== p)
    ((ce = e(s, {
      ref: Re,
      flexDirection: "column",
      children: e(xe, {
        title: l,
        titleEnd: a,
        titleSuffix: p,
        subtitle: x,
        isSubtitleDimmed: B,
        color: W
      })
    })),
      (c[27] = B),
      (c[28] = x),
      (c[29] = l),
      (c[30] = W),
      (c[31] = a),
      (c[32] = p),
      (c[33] = ce));
  else ce = c[33];
  let ae;
  if (c[34] !== ve || c[35] !== E)
    ((ae = e(Jw, { value: ve, children: E })), (c[34] = ve), (c[35] = E), (c[36] = ae));
  else ae = c[36];
  let pe;
  if (c[37] !== ce || c[38] !== ae)
    ((pe = r(s, { flexDirection: "column", gap: 1, children: [ce, ae] })),
      (c[37] = ce),
      (c[38] = ae),
      (c[39] = pe));
  else pe = c[39];
  let dt;
  if (c[40] !== Ce || c[41] !== ke || c[42] !== Ke || c[43] !== pe)
    ((dt = r(hE, {
      ref: d,
      scope: "Confirmation",
      claimFocus: !0,
      flexGrow: Ke,
      flexDirection: "column",
      bindings: Ce,
      children: [pe, ke]
    })),
      (c[40] = Ce),
      (c[41] = ke),
      (c[42] = Ke),
      (c[43] = pe),
      (c[44] = dt));
  else dt = c[44];
  let ue = dt;
  if (O || M) {
    return ue;
  }
  let pt;
  if (c[45] !== ue || c[46] !== S)
    ((pt = e(Hs, { color: S, children: ue })), (c[45] = ue), (c[46] = S), (c[47] = pt));
  else pt = c[47];
  return pt;
}
function xe(i) {
  let K = w(13),
    { title: l, titleEnd: a, titleSuffix: p, subtitle: x, isSubtitleDimmed: b, color: E } = i,
    k = b === void 0 ? !0 : b,
    H;
  if (K[0] !== E || K[1] !== l || K[2] !== p)
    ((H =
      p == null
        ? e(n, { bold: !0, color: E, children: l })
        : r(n, { children: [e(n, { bold: !0, color: E, children: l }), p] })),
      (K[0] = E),
      (K[1] = l),
      (K[2] = p),
      (K[3] = H));
  else H = K[3];
  let O = H,
    u;
  if (K[4] !== a || K[5] !== O)
    ((u = a
      ? r(s, {
          justifyContent: "space-between",
          gap: 2,
          children: [O, e(n, { dimColor: !0, wrap: "truncate-start", children: a })]
        })
      : O),
      (K[4] = a),
      (K[5] = O),
      (K[6] = u));
  else u = K[6];
  let D;
  if (K[7] !== k || K[8] !== x)
    ((D = x && (k ? e(n, { dimColor: !0, children: x }) : x)), (K[7] = k), (K[8] = x), (K[9] = D));
  else D = K[9];
  let I;
  if (K[10] !== u || K[11] !== D)
    ((I = r(Q, { children: [u, D] })), (K[10] = u), (K[11] = D), (K[12] = I));
  else I = K[12];
  return I;
}
function nt(i, l) {
  return i;
}
function Vt(i) {
  return r(Ee, {
    children: [
      e(V, { chord: "enter", action: "confirm", ...i }),
      e(ft, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel",
        ...i
      })
    ]
  });
}
export { hE, bT, iUe, ngi, jmr, RPe, we };

//# sourceMappingURL=chunk-bf8qkzmg.js.map
