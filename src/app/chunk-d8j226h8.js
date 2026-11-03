// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { eXr } from "./chunk-wrtp8qz8.js";
import { tD, G8t, ero, Ppe } from "./chunk-rwaeax2b.js";
import { w } from "./chunk-7m7t89vx.js";
import { qc } from "./chunk-b77hptpq.js";
import { e } from "./chunk-f790ajz4.js";
import { $Te, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function xe(De) {
  return De + 1;
}
function K(A) {
  let o = w(28),
    v,
    x,
    L,
    c,
    f;
  if (o[0] !== A)
    (({ children: v, ref: L, stickyScroll: c, followGrowth: x, ...f } = A),
      (o[0] = A),
      (o[1] = v),
      (o[2] = x),
      (o[3] = L),
      (o[4] = c),
      (o[5] = f));
  else ((v = o[1]), (x = o[2]), (L = o[3]), (c = o[4]), (f = o[5]));
  let r = C(null),
    [, Se] = y(0),
    U;
  if (o[6] === S) ((U = new Set()), (o[6] = U));
  else U = o[6];
  let P = C(U),
    Q = C(!1),
    Z;
  if (o[7] === S)
    ((Z = () => {
      for (const be of P.current) be();
    }),
      (o[7] = Z));
  else Z = o[7];
  let _ = Z,
    ee;
  if (o[8] === S)
    ((ee = function b(W) {
      if ((eXr(), tD(W), ero(W), _(), Q.current)) {
        return;
      }
      ((Q.current = !0),
        queueMicrotask(() => {
          ((Q.current = !1), G8t(W));
        }));
    }),
      (o[8] = ee));
  else ee = o[8];
  let b = ee,
    le,
    re;
  if (o[9] !== c)
    ((le = () => ({
      scrollTo(we, Re) {
        let u = r.current;
        if (!u) {
          return;
        }
        if (((u.stickyScroll = !1), !Re?.preserveHwm)) u.scrollHeightHwm = void 0;
        ((u.pendingScrollDelta = void 0),
          (u.scrollAnchor = void 0),
          (u.scrollTop = Math.max(0, Math.floor(we))),
          b(u));
      },
      scrollToElement(ke, p, He) {
        let ve = p === void 0 ? 0 : p;
        let h = r.current;
        if (!h) {
          return;
        }
        ((h.stickyScroll = !1),
          (h.scrollHeightHwm = void 0),
          (h.pendingScrollDelta = void 0),
          (h.scrollAnchor = { el: ke, offset: ve, block: He?.block ?? "start" }),
          b(h));
      },
      scrollBy(Me) {
        let i = r.current;
        if (!i) {
          return;
        }
        ((i.stickyScroll = !1),
          (i.scrollHeightHwm = void 0),
          (i.scrollTop = Ppe(i)),
          (i.scrollAnchor = void 0),
          (i.pendingScrollDelta = (i.pendingScrollDelta ?? 0) + Math.floor(Me)),
          b(i));
      },
      scrollToBottom() {
        let s = r.current;
        if (!s) {
          return;
        }
        if (((s.pendingScrollDelta = void 0), c === !1)) {
          ((s.scrollAnchor = void 0),
            (s.scrollTop = Math.max(0, (s.scrollHeight ?? 0) - (s.scrollViewportHeight ?? 0))),
            b(s));
          return;
        }
        ((s.stickyScroll = !0), tD(s), _(), Se(xe));
      },
      getScrollTop() {
        return r.current?.scrollTop ?? 0;
      },
      getPendingDelta() {
        return r.current?.pendingScrollDelta ?? 0;
      },
      getScrollHeight() {
        return r.current?.scrollHeight ?? 0;
      },
      getFreshScrollHeight() {
        return (
          r.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? r.current?.scrollHeight ?? 0
        );
      },
      getViewportHeight() {
        return r.current?.scrollViewportHeight ?? 0;
      },
      getViewportTop() {
        return r.current?.scrollViewportTop ?? 0;
      },
      isSticky() {
        let F = r.current;
        if (!F) {
          return !1;
        }
        return F.stickyScroll ?? Boolean(F.attributes.stickyScroll);
      },
      subscribe(oe) {
        return (P.current.add(oe), () => P.current.delete(oe));
      },
      setClampBounds(te, ne) {
        let g = r.current;
        if (!g) {
          return;
        }
        if (g.scrollClampMin === te && g.scrollClampMax === ne) {
          return;
        }
        ((g.scrollClampMin = te), (g.scrollClampMax = ne), tD(g));
      },
      getDomElement() {
        return r.current;
      }
    })),
      (re = [c]),
      (o[9] = c),
      (o[10] = le),
      (o[11] = re));
  else ((le = o[10]), (re = o[11]));
  $Te(L, le, re);
  const p = f.flexDirection ?? "row",
    N = f.flexGrow ?? 0,
    X = f.flexShrink ?? 1;
  let M;
  if (o[12] !== f || o[13] !== p || o[14] !== N || o[15] !== X)
    ((M = {
      flexWrap: "nowrap",
      flexDirection: p,
      flexGrow: N,
      flexShrink: X,
      selectionScope: !0,
      ...f,
      overflowX: "scroll",
      overflowY: "scroll"
    }),
      (o[12] = f),
      (o[13] = p),
      (o[14] = N),
      (o[15] = X),
      (o[16] = M));
  else M = o[16];
  let D;
  if (o[17] !== c) ((D = c !== void 0 && { stickyScroll: c }), (o[17] = c), (o[18] = D));
  else D = o[18];
  let T;
  if (o[19] !== x) ((T = x !== void 0 && { followGrowth: x }), (o[19] = x), (o[20] = T));
  else T = o[20];
  let B;
  if (o[21] !== v)
    ((B = e(qc, {
      flexDirection: "column",
      flexGrow: 1,
      flexShrink: 0,
      width: "100%",
      children: v
    })),
      (o[21] = v),
      (o[22] = B));
  else B = o[22];
  let ce;
  if (o[23] !== D || o[24] !== T || o[25] !== B || o[26] !== M)
    ((ce = e("ink-box", { ref: r, style: M, ...D, ...T, children: B })),
      (o[23] = D),
      (o[24] = T),
      (o[25] = B),
      (o[26] = M),
      (o[27] = ce));
  else ce = o[27];
  return ce;
}
var mP = K;
export { mP };

//# sourceMappingURL=chunk-d8j226h8.js.map
