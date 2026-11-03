import {
  fileURLToPath as __filePath_50791cbfd1e6af98,
  URL as __filePath_50791cbfd1e6af98_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke, yts, Pn } from "./chunk-wrtp8qz8.js";
import { Ji } from "./chunk-a16y5hcz.js";
import { Fw } from "./chunk-5rw2zfa0.js";
import { Te } from "./chunk-pbpv20s6.js";
import { i } from "./chunk-cj37hmns.js";
import { Et, Oqr, Wn } from "./chunk-ajtyjx88.js";
import { w } from "./chunk-7m7t89vx.js";
import { tk, Ae } from "./chunk-dvghjmtr.js";
import { le } from "./chunk-vw9e882a.js";
import { fe } from "./chunk-xe386mry.js";
import { os } from "./chunk-jtb5bzvb.js";
import { Zo } from "./chunk-13nwb0xt.js";
import { lc, gt, LH, _B, hs } from "./chunk-wr0p4ndg.js";
import { pt } from "./chunk-7c3thgax.js";
import { _i, rt, s, n, Yt, wk } from "./chunk-h56pfqh7.js";
import { aw } from "./chunk-y5em6mt4.js";
import { K } from "./chunk-61vn6n52.js";
import { D8t, WB, Rpe, MPe, Iwe, Agr } from "./chunk-1xqkrp78.js";
import { Mv } from "./chunk-p65ccy96.js";
import { Ho } from "./chunk-6dqmkjzd.js";
import { lw } from "./chunk-nkq17e49.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { ne } from "./chunk-39xmt821.js";
import { Gt, th, ee, y, j } from "./chunk-bq35vvkw.js";
import { a$o } from "./chunk-frrn501g.js";
import { l5 } from "./chunk-pfc5159p.js";
import { to } from "./chunk-vjef4vba.js";
import { $a } from "./chunk-2bsye2b3.js";
import { S, vn } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
j();
function bF(o) {
  let l = w(10),
    t,
    a,
    c;
  if (l[0] !== o)
    (({ active: t, children: c, ...a } = o), (l[0] = o), (l[1] = t), (l[2] = a), (l[3] = c));
  else ((t = l[1]), (a = l[2]), (c = l[3]));
  let m;
  if (l[4] !== t) ((m = { line: 0, column: 0, active: t }), (l[4] = t), (l[5] = m));
  else m = l[5];
  let p = wk(m),
    d;
  if (l[6] !== a || l[7] !== c || l[8] !== p)
    ((d = e(s, { ...a, ref: p, children: c })), (l[6] = a), (l[7] = c), (l[8] = p), (l[9] = d));
  else d = l[9];
  return d;
}
var yt = /\s+/g;
function mlt(o) {
  let l = o.arrowedSuggestionId;
  return l != null && o.suggestions[o.selectedSuggestion]?.id === l ? l : null;
}
function xo(o, l, t, a) {
  let c = (d) => o[d] ?? 1,
    m = (d) => {
      let f = d + 1,
        h = c(d);
      while (f < o.length && h + c(f) <= l) ((h += c(f)), f++);
      return { start: d, end: f, usedRows: h };
    },
    p = m(Math.max(0, Math.min(a, o.length - 1)));
  if (t >= p.end) p = m(t);
  else if (t < p.start) p = { start: t, end: t + 1, usedRows: c(t) };
  while (p.start > 0 && p.usedRows + c(p.start - 1) <= l) (p.start--, (p.usedRows += c(p.start)));
  return m(p.start);
}
var bo = 5;
function ue(o) {
  if (o.startsWith("file-")) return "+";
  if (o.startsWith("mcp-resource-")) return Fw;
  if (o.startsWith("mcp-template")) return Fw;
  if (o.startsWith("agent-")) return "*";
  return "+";
}
function me(o, l, t = !1) {
  let a = o.toLowerCase();
  if (a.length !== o.length) return [];
  let c = a.indexOf(l);
  if (c !== -1) return ze(o, [[c, c + l.length]]);
  if (t) return [];
  let m = [],
    p = 0;
  for (let d of l) {
    let f = a.indexOf(d, p);
    if (f === -1) return [];
    let h = f + d.length,
      u = m.at(-1);
    if (u && u[1] === f) u[1] = h;
    else m.push([f, h]);
    p = h;
  }
  return ze(o, m);
}
function ot(o) {
  let d = w(13),
    { text: l, query: t, color: a, isSelected: c, bold: m, contiguousOnly: p } = o,
    f,
    h;
  if (d[0] !== m || d[1] !== a || d[2] !== p || d[3] !== c || d[4] !== t || d[5] !== l) {
    h = vn;
    g: {
      let u = t ? me(l, t, p) : [];
      if (u.length === 0) {
        const b = !c;
        let C;
        if (d[8] !== m || d[9] !== a || d[10] !== b || d[11] !== l)
          ((C = e(n, { color: a, dimColor: b, bold: m, children: l })),
            (d[8] = m),
            (d[9] = a),
            (d[10] = b),
            (d[11] = l),
            (d[12] = C));
        else C = d[12];
        h = C;
        break g;
      }
      let W = [];
      let M = (B, Y, H) => {
        if (B >= Y) {
          return;
        }
        W.push(e(n, { color: a, dimColor: !H && !c, bold: m || H, children: l.slice(B, Y) }, B));
      };
      let I = 0;
      for (const [v, P] of u) (M(I, v, !1), M(v, P, !0), (I = P));
      M(I, l.length, !1);
      f = e(Q, { children: W });
    }
    ((d[0] = m),
      (d[1] = a),
      (d[2] = p),
      (d[3] = c),
      (d[4] = t),
      (d[5] = l),
      (d[6] = f),
      (d[7] = h));
  } else ((f = d[6]), (h = d[7]));
  if (h !== vn) return h;
  return f;
}
function Zt(o) {
  return (
    o.startsWith("file-") ||
    o.startsWith("mcp-resource-") ||
    o.startsWith("mcp-template") ||
    o.startsWith("agent-")
  );
}
var Ye = th(function (l) {
  let u = w(101),
    { item: t, maxColumnWidth: a, isSelected: c, allowWrap: m } = l,
    p = m === void 0 ? !0 : m,
    d = Te().columns,
    f = rt(),
    h = Zt(t.id),
    b;
  if (u[0] !== t.id) ((b = t.id.startsWith("emoji:")), (u[0] = t.id), (u[1] = b));
  else b = u[1];
  let C = b,
    g = f && !C ? "" : c ? `${ne.pointer} ` : "  ",
    W = le(g);
  if (h) {
    let B;
    if (u[2] !== t.id) ((B = ue(t.id)), (u[2] = t.id), (u[3] = B));
    else B = u[3];
    let Y = B;
    let H = c ? "suggestion" : void 0;
    let M = !c;
    let I = t.id.startsWith("file-");
    let v = t.id.startsWith("mcp-resource-");
    let P;
    if (u[4] !== t.id) ((P = t.id.startsWith("mcp-template-value::")), (u[4] = t.id), (u[5] = P));
    else P = u[5];
    let q = P;
    let A = t.id.startsWith("mcp-template::");
    let G = t.description ? 3 : 0;
    let R;
    if (I || A || q) {
      let T;
      if (u[6] !== t.description)
        ((T = t.description ? Math.min(20, le(t.description)) : 0),
          (u[6] = t.description),
          (u[7] = T));
      else T = u[7];
      let O = T;
      let F = d - W - 2 - 4 - G - O;
      let J;
      if (u[8] !== q || u[9] !== t.displayText || u[10] !== F)
        ((J = q ? LH(t.displayText, F) : lc(t.displayText, F)),
          (u[8] = q),
          (u[9] = t.displayText),
          (u[10] = F),
          (u[11] = J));
      else J = u[11];
      R = J;
    } else if (v) {
      let T;
      if (u[12] !== t.displayText)
        ((T = gt(t.displayText, 30)), (u[12] = t.displayText), (u[13] = T));
      else T = u[13];
      R = T;
    } else R = t.displayText;
    let ce = d - W - 2 - le(R) - G - 4;
    let st;
    if (t.description) {
      let wt = Math.max(0, ce);
      let T;
      if (u[14] !== t.description || u[15] !== wt)
        ((T = gt(t.description.replace(yt, " "), wt)),
          (u[14] = t.description),
          (u[15] = wt),
          (u[16] = T));
      else T = u[16];
      let de = T;
      st = `${g}${Y} ${R} \u2013 ${de}`;
    } else st = `${g}${Y} ${R}`;
    let T;
    if (u[17] !== M || u[18] !== st || u[19] !== H)
      ((T = e(n, { color: H, dimColor: M, wrap: "truncate", children: st })),
        (u[17] = M),
        (u[18] = st),
        (u[19] = H),
        (u[20] = T));
    else T = u[20];
    return T;
  }
  let k = t.description || t.tag || t.kind !== void 0 || t.sourceTag,
    U = a ?? le(t.displayText) + 5,
    B;
  if (u[21] !== U || u[22] !== d || u[23] !== k || u[24] !== f || u[25] !== t)
    ((B = k ? te(t, d, U, f) : Math.min(U, d - 4)),
      (u[21] = U),
      (u[22] = d),
      (u[23] = k),
      (u[24] = f),
      (u[25] = t),
      (u[26] = B));
  else B = u[26];
  let V = B,
    D = t.color || (c ? "suggestion" : void 0),
    X = !c,
    E = C && c,
    Ct = V - 2 - (k && !C ? W : 0),
    L = t.displayText;
  if (le(L) > Ct) {
    let P;
    if (u[27] !== L || u[28] !== Ct)
      ((P = L.includes("/") || L.includes("\\") ? LH(L, Ct) : gt(L, Ct)),
        (u[27] = L),
        (u[28] = Ct),
        (u[29] = P));
    else P = u[29];
    L = P;
  }
  let P;
  if (u[30] !== V || u[31] !== L || u[32] !== W)
    ((P = " ".repeat(Math.max(0, V - le(L) - W))),
      (u[30] = V),
      (u[31] = L),
      (u[32] = W),
      (u[33] = P));
  else P = u[33];
  let kt = P,
    it = t.tag ? `[${t.tag}] ` : "",
    vt = le(it),
    lt,
    tt,
    et,
    T,
    J;
  if (u[34] !== t) {
    let { kindLaneText: Ot, kindLabel: ao, sourceText: Rt } = $t(t);
    tt = Ot;
    et = Rt;
    lt = ao === "skill" ? "skill" : ao === "agent" ? "background" : void 0;
    T = le(tt);
    J = le(et);
    ((u[34] = t), (u[35] = lt), (u[36] = tt), (u[37] = et), (u[38] = T), (u[39] = J));
  } else ((lt = u[35]), (tt = u[36]), (et = u[37]), (T = u[38]), (J = u[39]));
  let Bt = T + J,
    Ft = Math.max(0, d - V - vt - Bt - 4),
    St,
    Tt,
    Wt,
    Ot,
    Rt;
  if (
    u[40] !== p ||
    u[41] !== E ||
    u[42] !== d ||
    u[43] !== Ft ||
    u[44] !== V ||
    u[45] !== L ||
    u[46] !== c ||
    u[47] !== t.description ||
    u[48] !== t.query ||
    u[49] !== lt ||
    u[50] !== tt ||
    u[51] !== Bt ||
    u[52] !== kt ||
    u[53] !== g ||
    u[54] !== X ||
    u[55] !== et ||
    u[56] !== it ||
    u[57] !== vt ||
    u[58] !== D
  ) {
    Rt = vn;
    _n: {
      let co = t.description ? t.description.replace(yt, " ").trim() : "";
      let [nr, po] = p ? Ue(co, Ft) : [gt(co, Ft), ""];
      St = c ? "suggestion" : void 0;
      let at;
      if (u[64] !== E || u[65] !== g || u[66] !== X || u[67] !== D)
        ((at = g ? e(n, { color: D, dimColor: X, bold: E, children: g }) : null),
          (u[64] = E),
          (u[65] = g),
          (u[66] = X),
          (u[67] = D),
          (u[68] = at));
      else at = u[68];
      let ct;
      if (u[69] !== E || u[70] !== L || u[71] !== c || u[72] !== t.query || u[73] !== D)
        ((ct = e(ot, { text: L, query: t.query, color: D, isSelected: c, bold: E })),
          (u[69] = E),
          (u[70] = L),
          (u[71] = c),
          (u[72] = t.query),
          (u[73] = D),
          (u[74] = ct));
      else ct = u[74];
      let dt;
      if (u[75] !== E || u[76] !== kt || u[77] !== X || u[78] !== D)
        ((dt = e(n, { color: D, dimColor: X, bold: E, children: kt })),
          (u[75] = E),
          (u[76] = kt),
          (u[77] = X),
          (u[78] = D),
          (u[79] = dt));
      else dt = u[79];
      let Mt;
      if (u[80] !== lt || u[81] !== tt)
        ((Mt = tt ? e(n, { color: lt, dimColor: lt === void 0, children: tt }) : null),
          (u[80] = lt),
          (u[81] = tt),
          (u[82] = Mt));
      else Mt = u[82];
      let uo;
      if (u[83] !== it)
        ((uo = it ? e(n, { dimColor: !0, children: it }) : null), (u[83] = it), (u[84] = uo));
      else uo = u[84];
      let mo;
      if (u[85] !== et)
        ((mo = et ? e(n, { dimColor: !0, children: et }) : null), (u[85] = et), (u[86] = mo));
      else mo = u[86];
      Tt = r(n, {
        wrap: "truncate",
        children: [
          at,
          ct,
          dt,
          Mt,
          uo,
          mo,
          e(ot, { text: nr, query: t.query, color: St, isSelected: c, bold: E, contiguousOnly: !0 })
        ]
      });
      if (!po) {
        Rt = Tt;
        break _n;
      }
      Wt = V + vt + Bt;
      Ot = gt(po, Math.max(0, d - Wt - 4));
    }
    ((u[40] = p),
      (u[41] = E),
      (u[42] = d),
      (u[43] = Ft),
      (u[44] = V),
      (u[45] = L),
      (u[46] = c),
      (u[47] = t.description),
      (u[48] = t.query),
      (u[49] = lt),
      (u[50] = tt),
      (u[51] = Bt),
      (u[52] = kt),
      (u[53] = g),
      (u[54] = X),
      (u[55] = et),
      (u[56] = it),
      (u[57] = vt),
      (u[58] = D),
      (u[59] = St),
      (u[60] = Tt),
      (u[61] = Wt),
      (u[62] = Ot),
      (u[63] = Rt));
  } else ((St = u[59]), (Tt = u[60]), (Wt = u[61]), (Ot = u[62]), (Rt = u[63]));
  if (Rt !== vn) return Rt;
  let pe = Ot,
    at;
  if (u[87] !== Wt) ((at = " ".repeat(Wt)), (u[87] = Wt), (u[88] = at));
  else at = u[88];
  let ct;
  if (u[89] !== E || u[90] !== St || u[91] !== pe || u[92] !== c || u[93] !== t.query)
    ((ct = e(ot, {
      text: pe,
      query: t.query,
      color: St,
      isSelected: c,
      bold: E,
      contiguousOnly: !0
    })),
      (u[89] = E),
      (u[90] = St),
      (u[91] = pe),
      (u[92] = c),
      (u[93] = t.query),
      (u[94] = ct));
  else ct = u[94];
  let dt;
  if (u[95] !== ct || u[96] !== at)
    ((dt = r(n, { wrap: "truncate", children: [at, ct] })),
      (u[95] = ct),
      (u[96] = at),
      (u[97] = dt));
  else dt = u[97];
  let Mt;
  if (u[98] !== Tt || u[99] !== dt)
    ((Mt = r(s, { flexDirection: "column", children: [Tt, dt] })),
      (u[98] = Tt),
      (u[99] = dt),
      (u[100] = Mt));
  else Mt = u[100];
  return Mt;
});
function wPe({
  suggestions: o,
  selectedSuggestion: l,
  maxColumnWidth: t,
  emptyMessage: a,
  overlay: c,
  noPad: m,
  onSelect: p,
  hoveredId: d,
  onHoverChange: f,
  cursorRowId: h,
  keepWindow: u = !1
}) {
  let { rows: b, columns: C } = Te(),
    g = rt(),
    W = aw(),
    B = ee(() => t ?? o.reduce((k, U) => Math.max(k, le(U.displayText)), 0) + 5, [o, t]),
    [Y, H] = y(null),
    M = c ? bo : Math.max(1, Math.min(Math.max(6, Math.floor(b / 2)), b - 3));
  if (o.length === 0) {
    if (!a) return null;
    let k = m ? 0 : Math.max(0, M - 1);
    return r(s, {
      flexDirection: "column",
      justifyContent: c ? void 0 : "flex-end",
      children: [
        e(Ho, { children: a }),
        Array.from({ length: k }, (U, V) => e(n, { children: " " }, `pad-${V}`))
      ]
    });
  }
  let I = Math.max(0, Math.min(l, o.length - 1)),
    v = Math.max(0, I - M),
    P = o.slice(v, I + M + 1),
    q = M >= 2,
    A = P.map((k) => (q ? vo(k, C, B, g) : 1)),
    G = I - v,
    R = G,
    T = G + 1,
    O = A[G] ?? 1,
    F = 0,
    J = Math.floor(M / 2);
  while (R > 0 && O < M && F + (A[R - 1] ?? 1) <= J) (R--, (F += A[R] ?? 1));
  O += F;
  while (T < P.length && O + (A[T] ?? 1) <= M) ((O += A[T] ?? 1), T++);
  while (R > 0 && O + (A[R - 1] ?? 1) <= M) (R--, (O += A[R] ?? 1));
  if (u) {
    let k = xo(A, M, G, (Y ?? v + R) - v);
    if (((R = k.start), (T = k.end), (O = k.usedRows), v + R !== Y)) H(v + R);
  }
  let ce = P.slice(R, T),
    st = m ? 0 : Math.max(0, M - O),
    wt = o[l]?.id,
    de = d != null && o.some((k) => k.id === d) ? d : void 0;
  return r(s, {
    flexDirection: "column",
    justifyContent: c ? void 0 : "flex-end",
    onMouseLeave: p ? () => f?.(null) : void 0,
    children: [
      ce.map((k, U) => {
        let V = v + R + U,
          D = e(
            Ye,
            { item: k, maxColumnWidth: B, isSelected: k.id === (de ?? wt), allowWrap: q },
            k.id
          );
        if (h != null && k.id === h) return e(bF, { active: !0, children: D }, k.id);
        if (!p) return D;
        return e(
          s,
          {
            onMouseEnter: () => f?.(k.id),
            onClick: (X) => {
              if (W(X)) return;
              p(V, k.id);
            },
            children: D
          },
          k.id
        );
      }),
      Array.from({ length: st }, (k, U) => e(n, { children: " " }, `pad-${U}`))
    ]
  });
}
var Bto = th(wPe);
function $t(o) {
  let t = o.kind === void 0 || o.kind === "action" ? "" : o.kind === "info" ? "config" : o.kind,
    a = o.kind === void 0 ? "" : t + Ji(" ", 7 - le(t)),
    c = o.sourceTag ? `[${o.sourceTag}] ` : "";
  return { kindLaneText: a, kindLabel: t, sourceText: c };
}
function te(o, l, t, a) {
  let c = Math.floor(l * 0.4);
  return t > c ? c + Ao(o, l, a) : t;
}
function Ao(o, l, t) {
  if (t || o.id.startsWith("emoji:")) return 0;
  let a = o.tag ? le(`[${o.tag}] `) : 0,
    { kindLaneText: c, sourceText: m } = $t(o),
    p = l - Math.floor(l * 0.4) - a - le(c) - le(m) - 4 - (o.description ? 1 : 0),
    d = le(`${ne.pointer} `);
  return p < 0 ? d : Math.min(d, p);
}
function vo(o, l, t, a) {
  if (Zt(o.id) || !o.description) return 1;
  let c = te(o, l, t, a),
    m = o.tag ? le(`[${o.tag}] `) : 0,
    { kindLaneText: p, sourceText: d } = $t(o),
    f = Math.max(0, l - c - m - le(p) - le(d) - 4);
  if (f <= 0) return 1;
  let h = o.description.replace(yt, " ").trim();
  return le(h) > f ? 2 : 1;
}
function Ue(o, l) {
  if (l <= 0 || le(o) <= l) return [o, ""];
  let t = _B(o, l),
    a = o.slice(t.length);
  if (a.startsWith(" ")) return [t, a.trimStart()];
  let c = t.lastIndexOf(" ");
  if (c > 0) return [t.slice(0, c), o.slice(c + 1)];
  return [t, a];
}
var Oo = /[^\u0020-\u02ff]/;
function ze(o, l) {
  if (l.length === 0 || !Oo.test(o)) return l;
  let t = new Set();
  for (let { index: c } of $a().segment(o)) t.add(c);
  let a = [];
  for (let [c, m] of l) {
    let p = c;
    while (p > 0 && !t.has(p)) p--;
    let d = m;
    while (d < o.length && !t.has(d)) d++;
    let f = a.at(-1);
    if (f && p <= f[1]) f[1] = Math.max(f[1], d);
    else a.push([p, d]);
  }
  return a;
}
var glt = ve(to(), (o) => o.set(void 0));
var Wie = () => glt.get() ?? { kept: void 0, takenAfter: 0, runs: 0 };
var Gie = () => glt.set({ ...Wie(), kept: void 0 });
var jo = {
    default: { eyes: "open", arms: "down", feet: "both" },
    "arms-up": { eyes: "open", arms: "up", feet: "both" },
    "look-left": { eyes: "left", arms: "down", feet: "both" },
    "look-right": { eyes: "right", arms: "down", feet: "both" }
  },
  Xe = {
    down: { r1L: " \u2590", r1R: "", r2L: "\u259D\u259C", r2R: "\u2588\u2580" },
    up: { r1L: "\u2597\u259F", r1R: "\u2584", r2L: " \u259C", r2R: "\u2588\u2598" },
    "one-up": { r1L: " \u2590", r1R: "\u2584", r2L: "\u259D\u259C", r2R: "\u2588\u2598" }
  },
  Je = {
    open: [{ glyphs: "\u259B\u2588\u2588\u2588\u259B\u2588" }],
    left: [{ glyphs: "\u259F\u2588\u2588\u2588\u259F\u2588" }],
    right: [{ glyphs: "\u2588\u259F\u2588\u2588\u2588\u259F" }],
    closed: [
      { glyphs: "\u2582", lid: !0 },
      { glyphs: "\u2588\u2588\u2588" },
      { glyphs: "\u2582", lid: !0 },
      { glyphs: "\u2588" }
    ],
    wink: [
      { glyphs: "\u259B\u2588\u2588\u2588" },
      { glyphs: "\u2582", lid: !0 },
      { glyphs: "\u2588" }
    ]
  },
  Qe = {
    both: " \u259D\u259D   \u259D\u259D ",
    left: " \u259D\u259D      ",
    right: "      \u259D\u259D "
  },
  Ze = {
    open: " \u2597   \u2596 ",
    left: " \u2598   \u2598 ",
    right: " \u259D   \u259D ",
    closed: " \u2582   \u2582 ",
    wink: " \u2597   \u2582 "
  },
  eo = {
    "right-12": [
      { glyphs: " \u2590\u2588\u259C\u2588\u2588\u259B\u2588 ", from: 2, to: 8 },
      { glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580", from: 2, to: 7 },
      { glyphs: " \u259D\u259D   \u259D\u259D ", from: 0, to: 0 }
    ],
    "right-30": [
      { glyphs: "  \u2588\u259B\u2588\u2588\u259B\u258C ", from: 2, to: 7 },
      { glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ", from: 2, to: 7 },
      { glyphs: "  \u2598\u2598  \u2598\u2598 ", from: 0, to: 0 }
    ],
    "right-55": [
      { glyphs: "  \u2590\u2588\u259B\u2588\u259C  ", from: 3, to: 7 },
      { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 },
      { glyphs: "  \u259D\u259D \u259D\u259D  ", from: 0, to: 0 }
    ],
    "right-75": [
      { glyphs: "   \u2588\u2588\u259B\u258C  ", from: 3, to: 6 },
      { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 },
      { glyphs: "   \u2598  \u2598  ", from: 0, to: 0 }
    ],
    edge: [
      { glyphs: "   \u2590\u2588\u2588   ", from: 4, to: 6 },
      { glyphs: "   \u2590\u2588\u2588   ", from: 4, to: 6 },
      { glyphs: "   \u259D \u259D   ", from: 0, to: 0 }
    ],
    "back-105": [
      { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 },
      { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 },
      { glyphs: "   \u2598  \u2598  ", from: 0, to: 0 }
    ],
    "back-125": [
      { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 },
      { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 },
      { glyphs: "  \u259D\u259D \u259D\u259D  ", from: 0, to: 0 }
    ],
    "back-150": [
      { glyphs: "  \u2588\u2588\u2588\u2588\u2588\u258C ", from: 2, to: 7 },
      { glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ", from: 2, to: 7 },
      { glyphs: "  \u2598\u2598  \u2598\u2598 ", from: 0, to: 0 }
    ],
    back: [
      { glyphs: " \u2590\u2588\u2588\u2588\u2588\u2588\u2588 ", from: 2, to: 8 },
      { glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580", from: 2, to: 7 },
      { glyphs: " \u259D\u259D   \u259D\u259D ", from: 0, to: 0 }
    ],
    "left-75": [
      { glyphs: "   \u259B\u2588\u2588\u258C  ", from: 3, to: 6 },
      { glyphs: "   \u2588\u2588\u2588\u258C  ", from: 3, to: 6 },
      { glyphs: "   \u2598  \u2598  ", from: 0, to: 0 }
    ],
    "left-55": [
      { glyphs: "  \u2590\u259C\u259B\u2588\u2588  ", from: 3, to: 7 },
      { glyphs: "  \u2590\u2588\u2588\u2588\u2588  ", from: 3, to: 7 },
      { glyphs: "  \u259D\u259D \u259D\u259D  ", from: 0, to: 0 }
    ],
    "left-30": [
      { glyphs: "  \u259B\u2588\u2588\u259B\u2588\u258C ", from: 2, to: 7 },
      { glyphs: " \u259D\u2588\u2588\u2588\u2588\u2588\u259B ", from: 2, to: 7 },
      { glyphs: "  \u2598\u2598  \u2598\u2598 ", from: 0, to: 0 }
    ],
    "left-12": [
      { glyphs: " \u2590\u259B\u2588\u2588\u2588\u259C\u2588 ", from: 2, to: 8 },
      { glyphs: "\u259D\u259C\u2588\u2588\u2588\u2588\u2588\u2588\u2580", from: 2, to: 7 },
      { glyphs: " \u259D\u259D   \u259D\u259D ", from: 0, to: 0 }
    ]
  };
function bmr(o) {
  return typeof o === "string" ? jo[o] : o;
}
function RPn(o) {
  return typeof o !== "string" && "facing" in o;
}
function vPe() {
  return i.terminal !== "Apple_Terminal";
}
function EPe(o) {
  let l = w(47),
    t;
  if (l[0] !== o) ((t = o === void 0 ? {} : o), (l[0] = o), (l[1] = t));
  else t = l[1];
  let { pose: a, color: c, paint: m } = t,
    p = a === void 0 ? "default" : a,
    d = c === void 0 ? "clawd_body" : c;
  if (rt()) {
    return null;
  }
  if (RPn(p)) {
    let h;
    if (l[2] !== d || l[3] !== p)
      ((h = vPe() ? e(ae, { facing: p.facing, color: d }) : e(bt, { eyes: "open", color: d })),
        (l[2] = d),
        (l[3] = p),
        (l[4] = h));
    else h = l[4];
    return h;
  }
  let h;
  if (l[5] !== p) ((h = bmr(p)), (l[5] = p), (l[6] = h));
  else h = l[6];
  let u = h;
  if (!vPe()) {
    let b;
    if (l[7] !== d || l[8] !== u.eyes)
      ((b = e(bt, { eyes: u.eyes, color: d })), (l[7] = d), (l[8] = u.eyes), (l[9] = b));
    else b = l[9];
    return b;
  }
  let C = Xe[u.arms],
    b;
  if (l[10] !== d || l[11] !== m) ((b = m ?? (() => d)), (l[10] = d), (l[11] = m), (l[12] = b));
  else b = l[12];
  let g = b,
    W;
  if (l[13] !== u.eyes) {
    W = [];
    for (const B of Je[u.eyes]) {
      let Y = W.at(-1);
      W.push({ span: B, column: Y ? Y.column + Y.span.glyphs.length : 2 });
    }
    ((l[13] = u.eyes), (l[14] = W));
  } else W = l[14];
  let H;
  if (l[15] !== C.r1L || l[16] !== g)
    ((H = e(N, { glyphs: C.r1L, column: 0, row: 0, paint: g })),
      (l[15] = C.r1L),
      (l[16] = g),
      (l[17] = H));
  else H = l[17];
  let M;
  if (l[18] !== g || l[19] !== W)
    ((M = W.map((I) => {
      let { span: v, column: P } = I;
      return e(N, { glyphs: v.glyphs, column: P, row: 0, paint: g, on: v.lid ? "lid" : "eyes" }, P);
    })),
      (l[18] = g),
      (l[19] = W),
      (l[20] = M));
  else M = l[20];
  let I;
  if (l[21] !== C.r1R || l[22] !== g)
    ((I = e(N, { glyphs: C.r1R, column: 8, row: 0, paint: g })),
      (l[21] = C.r1R),
      (l[22] = g),
      (l[23] = I));
  else I = l[23];
  let q;
  if (l[24] !== H || l[25] !== M || l[26] !== I)
    ((q = r(n, { children: [H, M, I] })), (l[24] = H), (l[25] = M), (l[26] = I), (l[27] = q));
  else q = l[27];
  let A;
  if (l[28] !== C.r2L || l[29] !== g)
    ((A = e(N, { glyphs: C.r2L, column: 0, row: 1, paint: g })),
      (l[28] = C.r2L),
      (l[29] = g),
      (l[30] = A));
  else A = l[30];
  let G;
  if (l[31] !== g)
    ((G = e(N, {
      glyphs: "\u2588\u2588\u2588\u2588\u2588",
      column: 2,
      row: 1,
      paint: g,
      on: "eyes"
    })),
      (l[31] = g),
      (l[32] = G));
  else G = l[32];
  let R;
  if (l[33] !== C.r2R || l[34] !== g)
    ((R = e(N, { glyphs: C.r2R, column: 7, row: 1, paint: g })),
      (l[33] = C.r2R),
      (l[34] = g),
      (l[35] = R));
  else R = l[35];
  let T;
  if (l[36] !== A || l[37] !== G || l[38] !== R)
    ((T = r(n, { children: [A, G, R] })), (l[36] = A), (l[37] = G), (l[38] = R), (l[39] = T));
  else T = l[39];
  const O = Qe[u.feet];
  let F;
  if (l[40] !== g || l[41] !== O)
    ((F = e(n, { children: e(N, { glyphs: O, column: 0, row: 2, paint: g }) })),
      (l[40] = g),
      (l[41] = O),
      (l[42] = F));
  else F = l[42];
  let J;
  if (l[43] !== T || l[44] !== F || l[45] !== q)
    ((J = r(s, { flexDirection: "column", flexShrink: 0, children: [q, T, F] })),
      (l[43] = T),
      (l[44] = F),
      (l[45] = q),
      (l[46] = J));
  else J = l[46];
  return J;
}
function N({ glyphs: o, column: l, row: t, paint: a, on: c }) {
  let m = [];
  for (let [p, d] of Array.from(o).entries()) {
    let f = m.at(-1),
      h = d === " " && f ? f.color : a(l + p, t);
    if (f?.color === h) f.glyphs += d;
    else m.push({ glyphs: d, color: h });
  }
  return m.map((p, d) =>
    e(
      n,
      {
        color: c === "lid" ? "clawd_background" : p.color,
        backgroundColor: c === "lid" ? p.color : c && "clawd_background",
        children: p.glyphs
      },
      d
    )
  );
}
function ae(o) {
  let c = w(7),
    { facing: l, color: t } = o;
  const a = eo[l];
  let m;
  if (c[0] !== t || c[1] !== a) {
    let p;
    if (c[3] !== t)
      ((p = (d, f) => {
        let { glyphs: h, from: u, to: b } = d;
        return r(
          n,
          {
            color: t,
            children: [
              h.slice(0, u),
              e(n, { backgroundColor: "clawd_background", children: h.slice(u, b) }),
              h.slice(b)
            ]
          },
          f
        );
      }),
        (c[3] = t),
        (c[4] = p));
    else p = c[4];
    m = a.map(p);
    ((c[0] = t), (c[1] = a), (c[2] = m));
  } else m = c[2];
  let p;
  if (c[5] !== m)
    ((p = e(s, { flexDirection: "column", flexShrink: 0, children: m })), (c[5] = m), (c[6] = p));
  else p = c[6];
  return p;
}
function bt(o) {
  let a = w(19),
    { eyes: l, color: t } = o,
    c;
  if (a[0] !== t) ((c = e(n, { color: t, children: "\u2597" })), (a[0] = t), (a[1] = c));
  else c = a[1];
  const m = Ze[l];
  let p;
  if (a[2] !== t || a[3] !== m)
    ((p = e(n, { color: "clawd_background", backgroundColor: t, children: m })),
      (a[2] = t),
      (a[3] = m),
      (a[4] = p));
  else p = a[4];
  let d;
  if (a[5] !== t) ((d = e(n, { color: t, children: "\u2596" })), (a[5] = t), (a[6] = d));
  else d = a[6];
  let f;
  if (a[7] !== c || a[8] !== p || a[9] !== d)
    ((f = r(n, { children: [c, p, d] })), (a[7] = c), (a[8] = p), (a[9] = d), (a[10] = f));
  else f = a[10];
  let h;
  if (a[11] === S) ((h = " ".repeat(7)), (a[11] = h));
  else h = a[11];
  let u, b;
  if (a[12] !== t)
    ((u = e(n, { backgroundColor: t, children: h })),
      (b = e(n, { color: t, children: "\u2598\u2598   \u259D\u259D" })),
      (a[12] = t),
      (a[13] = u),
      (a[14] = b));
  else ((u = a[13]), (b = a[14]));
  let C;
  if (a[15] !== f || a[16] !== u || a[17] !== b)
    ((C = r(s, { flexDirection: "column", alignItems: "center", children: [f, u, b] })),
      (a[15] = f),
      (a[16] = u),
      (a[17] = b),
      (a[18] = C));
  else C = a[18];
  return C;
}
function Wto(o) {
  if (o >= 70) return "horizontal";
  return "compact";
}
function oUe(o, l) {
  if (le(o) <= l) return o;
  let t = "/",
    a = "\u2026",
    c = 1,
    m = 1,
    p = o.split(t),
    d = p[0] || "",
    f = p.at(-1) || "",
    h = le(d),
    u = le(f);
  if (p.length === 1) return gt(o, l);
  if (d === "" && c + m + u >= l) return `${t}${gt(f, Math.max(1, l - m))}`;
  if (d !== "" && c * 2 + m + u >= l) return `${a}${t}${gt(f, Math.max(1, l - c - m))}`;
  if (p.length === 2) {
    let g = l - c - m - u;
    return `${_B(d, g)}${a}${t}${f}`;
  }
  let b = l - h - u - c - 2 * m;
  if (b <= 0) {
    let g = Math.max(0, l - u - c - 2 * m);
    return `${_B(d, g)}${t}${a}${t}${f}`;
  }
  let C = [];
  for (let g = p.length - 2; g > 0; g--) {
    let W = p[g];
    if (W && le(W) + m <= b) (C.unshift(W), (b -= le(W) + m));
    else break;
  }
  if (C.length === 0) return `${d}${t}${a}${t}${f}`;
  return `${d}${t}${a}${t}${C.join(t)}${t}${f}`;
}
function J5e() {
  let o =
      i.DEMO_VERSION ??
      `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_50791cbfd1e6af98(new __filePath_50791cbfd1e6af98_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}${l5()}`,
    l = yts(),
    t = i.DEMO_VERSION
      ? "/code/claude"
      : Pn() && (Wn("tengu_violin_wood", !1) || Wn(a$o, !1))
        ? os(ke())
        : Zo(fe()),
    a = i.CLAUDE_CODE_HIDE_CWD ? "" : l ? `${t} in ${l.replace(/^https?:\/\//, "")}` : t,
    c = Ae(),
    m = c !== "firstParty" ? tk[c] : Et() ? Oqr() : "API Usage Billing",
    p = pt().agent;
  return { version: o, cwd: a, billingType: m, agentName: p };
}
function Gto(o, l, t) {
  if (le(o) + 3 + le(l) > t)
    return { shouldSplit: !0, truncatedModel: hs(o, t), truncatedBilling: hs(l, t) };
  return {
    shouldSplit: !1,
    truncatedModel: hs(o, Math.max(t - le(l) - 3, 10)),
    truncatedBilling: l
  };
}
function At(o) {
  let t = w(2),
    { text: l } = o,
    a;
  if (t[0] !== l)
    ((a = e(n, { dimColor: !0, italic: !0, wrap: "truncate-end", children: l })),
      (t[0] = l),
      (t[1] = a));
  else a = t[1];
  return a;
}
function Vy() {
  let o = rt(),
    l = _i();
  return Mv(D8t) && l && !o;
}
function kxt() {
  let o = rt(),
    l = _i();
  return Mv(lw) && l && !o;
}
function kPe({ segments: o }) {
  return o.map((l, t) => {
    let a = e(n, { color: l.color, dimColor: l.dim, bold: l.bold, children: l.text }, t);
    return l.url === void 0 ? a : e(Yt, { url: l.url, children: a }, t);
  });
}
function rr(C) {
  return C.notifications.current;
}
function Ewe(o) {
  let d = w(18),
    { drawnOnRow1: l } = o,
    t = l === void 0 ? !1 : l,
    a = K(rr),
    c = K(WB),
    m = Vy(),
    p = Iwe();
  if (!a || !Rpe(a, c) || (m && MPe(a, p))) {
    return null;
  }
  if (t) {
    return null;
  }
  let f;
  if (d[0] !== a || d[1] !== m) ((f = m ? Agr(a) : void 0), (d[0] = a), (d[1] = m), (d[2] = f));
  else f = d[2];
  let h = f;
  if (h?.surface === "toast") {
    let u;
    if (d[3] !== a.key || d[4] !== h.text)
      ((u = e(At, { text: h.text }, a.key)), (d[3] = a.key), (d[4] = h.text), (d[5] = u));
    else u = d[5];
    return u;
  }
  if ("jsx" in a) {
    let u;
    if (d[6] !== a.jsx || d[7] !== a.key)
      ((u = e(n, { wrap: "truncate", children: a.jsx }, a.key)),
        (d[6] = a.jsx),
        (d[7] = a.key),
        (d[8] = u));
    else u = d[8];
    return u;
  }
  if ("segments" in a) {
    let u;
    if (d[9] !== a.segments)
      ((u = e(kPe, { segments: a.segments })), (d[9] = a.segments), (d[10] = u));
    else u = d[10];
    let b;
    if (d[11] !== a.key || d[12] !== u)
      ((b = e(n, { wrap: "truncate", children: u }, a.key)),
        (d[11] = a.key),
        (d[12] = u),
        (d[13] = b));
    else b = d[13];
    return b;
  }
  const u = !a.color;
  let b;
  if (d[14] !== a.color || d[15] !== a.text || d[16] !== u)
    ((b = e(n, { color: a.color, dimColor: u, wrap: "truncate", children: a.text })),
      (d[14] = a.color),
      (d[15] = a.text),
      (d[16] = u),
      (d[17] = b));
  else b = d[17];
  return b;
}
j();
var jto = 2,
  Y3t = 15,
  X3t = Gt(null);
export {
  bF,
  mlt,
  wPe,
  Bto,
  jto,
  Y3t,
  X3t,
  glt,
  Wie,
  Gie,
  Wto,
  oUe,
  J5e,
  Gto,
  Vy,
  kxt,
  bmr,
  RPn,
  vPe,
  EPe,
  kPe,
  Ewe
};

//# sourceMappingURL=chunk-jv280qck.js.map
