// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { le } from "./chunk-vw9e882a.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { lt, an } from "./chunk-kk8f9f8q.js";
import { Tr } from "./chunk-nh2498vy.js";
import { ne } from "./chunk-39xmt821.js";
import { Ee } from "./chunk-xzcese97.js";
import { we } from "./chunk-bf8qkzmg.js";
import { V } from "./chunk-j32s98r9.js";
import { _lt } from "./chunk-cmgqtn3b.js";
import { vs } from "./chunk-artk45zy.js";
import { e, r } from "./chunk-f790ajz4.js";
import { ee, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function Oo(_o) {
  return le(_o.label);
}
function Go(jo) {
  return jo !== null;
}
function $2(Ye) {
  let o = w(107),
    {
      title: l,
      subtitle: c,
      fields: t,
      values: i,
      onChange: C,
      onSubmit: B,
      onCancel: a,
      submitLabel: X
    } = Ye,
    I = X === void 0 ? "Save" : X,
    f = t.length + 1,
    [d, h] = y(0),
    Y;
  if (o[0] !== t[0] || o[1] !== i)
    ((Y = () => {
      let se = t[0];
      return se?.type === "text" ? (i[se.key] ?? "").length : 0;
    }),
      (o[0] = t[0]),
      (o[1] = i),
      (o[2] = Y));
  else Y = o[2];
  let [R, Z] = y(Y),
    u = d < t.length ? t[d] : null,
    Te = u?.type === "text",
    M;
  if (o[3] !== t) ((M = Math.max(...t.map(Oo))), (o[3] = t), (o[4] = M));
  else M = o[4];
  let A = M,
    N;
  if (o[5] !== i)
    ((N = function F(U) {
      if (U.type !== "text") {
        return null;
      }
      let P = i[U.key] ?? "";
      if (U.required && P.trim() === "") {
        return `${U.label} is required`;
      }
      return U.validate ? U.validate(P, i) : null;
    }),
      (o[5] = i),
      (o[6] = N));
  else N = o[6];
  let F = N,
    Re;
  if (o[7] !== F || o[8] !== t) ((Re = t.map(F).find(Go)), (o[7] = F), (o[8] = t), (o[9] = Re));
  else Re = o[9];
  let b = Re,
    E;
  if (o[10] !== t || o[11] !== d || o[12] !== f || o[13] !== i)
    ((E = function m(Se) {
      let Me = Math.max(0, Math.min(f - 1, Se));
      if (Me === d) {
        return;
      }
      h(Me);
      let Ze = t[Me];
      if (Ze?.type === "text") Z((i[Ze.key] ?? "").length);
    }),
      (o[10] = t),
      (o[11] = d),
      (o[12] = f),
      (o[13] = i),
      (o[14] = E));
  else E = o[14];
  let m = E,
    _e;
  if (o[15] !== b || o[16] !== B)
    ((_e = function D() {
      if (b) {
        return;
      }
      B();
    }),
      (o[15] = b),
      (o[16] = B),
      (o[17] = _e));
  else _e = o[17];
  let D = _e,
    je;
  if (o[18] !== u || o[19] !== C || o[20] !== i)
    ((je = function K($o) {
      if (u?.type !== "select") {
        return;
      }
      let _ = u.options;
      let zo = i[u.key] ?? _[0]?.value ?? "";
      let Qo = _.findIndex((Jo) => Jo.value === zo);
      let Ke = _[(Qo + $o + _.length) % _.length];
      if (Ke) C(u.key, Ke.value);
    }),
      (o[18] = u),
      (o[19] = C),
      (o[20] = i),
      (o[21] = je));
  else je = o[21];
  let K = je,
    de,
    ue;
  if (o[22] !== d || o[23] !== m)
    ((ue = () => m(d - 1)),
      (de = () => m(d + 1)),
      (o[22] = d),
      (o[23] = m),
      (o[24] = de),
      (o[25] = ue));
  else ((de = o[24]), (ue = o[25]));
  let ce;
  if (o[26] !== d || o[27] !== m || o[28] !== f || o[29] !== D)
    ((ce = () => {
      if (d === f - 1) D();
      else m(d + 1);
    }),
      (o[26] = d),
      (o[27] = m),
      (o[28] = f),
      (o[29] = D),
      (o[30] = ce));
  else ce = o[30];
  let eo;
  if (o[31] !== a || o[32] !== de || o[33] !== ce || o[34] !== ue)
    ((eo = { "select:previous": ue, "select:next": de, "select:accept": ce, "select:cancel": a }),
      (o[31] = a),
      (o[32] = de),
      (o[33] = ce),
      (o[34] = ue),
      (o[35] = eo));
  else eo = o[35];
  const Ae = !Te;
  let oo;
  if (o[36] !== Ae) ((oo = { context: "Select", isActive: Ae }), (o[36] = Ae), (o[37] = oo));
  else oo = o[37];
  an(eo, oo);
  let to;
  if (o[38] === S) ((to = { context: "Settings" }), (o[38] = to));
  else to = o[38];
  (lt("confirm:no", a, to), _lt());
  let lo;
  if (o[39] !== K)
    ((lo = { "tabs:previous": () => K(-1), "tabs:next": () => K(1) }), (o[39] = K), (o[40] = lo));
  else lo = o[40];
  const Ue = u?.type === "select";
  let io;
  if (o[41] !== Ue) ((io = { context: "Tabs", isActive: Ue }), (o[41] = Ue), (o[42] = io));
  else io = o[42];
  an(lo, io);
  let O = u ? (i[u.key] ?? "") : "",
    no;
  if (o[43] !== u || o[44] !== O || o[45] !== i)
    ((no = u?.type === "text" && u.validate ? u.validate(O, i) : null),
      (o[43] = u),
      (o[44] = O),
      (o[45] = i),
      (o[46] = no));
  else no = o[46];
  let q = no,
    ro;
  if (o[47] !== q || o[48] !== u || o[49] !== O || o[50] !== i)
    ((ro = !q && u?.hint ? u.hint(O, i) : void 0),
      (o[47] = q),
      (o[48] = u),
      (o[49] = O),
      (o[50] = i),
      (o[51] = ro));
  else ro = o[51];
  let ae = ro,
    fe;
  if (
    o[52] !== R ||
    o[53] !== t ||
    o[54] !== d ||
    o[55] !== A ||
    o[56] !== m ||
    o[57] !== a ||
    o[58] !== C ||
    o[59] !== D ||
    o[60] !== i
  ) {
    let G;
    if (
      o[62] !== R ||
      o[63] !== t.length ||
      o[64] !== d ||
      o[65] !== A ||
      o[66] !== m ||
      o[67] !== a ||
      o[68] !== C ||
      o[69] !== D ||
      o[70] !== i
    )
      ((G = (me, oe) => {
        let Xo = oe === d;
        let Yo = i[me.key] ?? "";
        return e(
          De,
          {
            field: me,
            value: Yo,
            isFocused: Xo,
            labelWidth: A,
            cursor: R,
            setCursor: Z,
            onChange: (Zo) => C(me.key, Zo),
            onCancel: a,
            onUp: () => m(oe - 1),
            onDown: () => m(oe + 1),
            onEnter: () => {
              if (oe === t.length - 1) D();
              else m(oe + 1);
            }
          },
          me.key
        );
      }),
        (o[62] = R),
        (o[63] = t.length),
        (o[64] = d),
        (o[65] = A),
        (o[66] = m),
        (o[67] = a),
        (o[68] = C),
        (o[69] = D),
        (o[70] = i),
        (o[71] = G));
    else G = o[71];
    fe = t.map(G);
    ((o[52] = R),
      (o[53] = t),
      (o[54] = d),
      (o[55] = A),
      (o[56] = m),
      (o[57] = a),
      (o[58] = C),
      (o[59] = D),
      (o[60] = i),
      (o[61] = fe));
  } else fe = o[61];
  const G = d === f - 1 ? "suggestion" : void 0,
    Pe = d === f - 1 ? ne.pointer : " ";
  let pe;
  if (o[72] !== G || o[73] !== Pe)
    ((pe = r(n, { color: G, children: [Pe, " "] })), (o[72] = G), (o[73] = Pe), (o[74] = pe));
  else pe = o[74];
  const qe = d === f - 1,
    Le = !!b;
  let ve;
  if (o[75] !== I || o[76] !== qe || o[77] !== Le)
    ((ve = e(n, { bold: qe, dimColor: Le, children: I })),
      (o[75] = I),
      (o[76] = qe),
      (o[77] = Le),
      (o[78] = ve));
  else ve = o[78];
  let ge;
  if (o[79] !== b || o[80] !== d || o[81] !== f)
    ((ge = b && d === f - 1 && r(n, { color: "error", children: [" \xB7 ", b] })),
      (o[79] = b),
      (o[80] = d),
      (o[81] = f),
      (o[82] = ge));
  else ge = o[82];
  let be;
  if (o[83] !== pe || o[84] !== ve || o[85] !== ge)
    ((be = r(s, { marginTop: 1, children: [pe, ve, ge] })),
      (o[83] = pe),
      (o[84] = ve),
      (o[85] = ge),
      (o[86] = be));
  else be = o[86];
  let Ce;
  if (o[87] !== q || o[88] !== ae)
    ((Ce = e(s, {
      marginTop: 1,
      minHeight: 1,
      children: q
        ? e(vs, { error: q })
        : ae
          ? e(n, { dimColor: !0, children: ae })
          : e(n, { children: " " })
    })),
      (o[87] = q),
      (o[88] = ae),
      (o[89] = Ce));
  else Ce = o[89];
  let so;
  if (o[90] === S) ((so = e(V, { chord: ["up", "down"], action: "move" })), (o[90] = so));
  else so = o[90];
  let he;
  if (o[91] !== u?.type)
    ((he = u?.type === "select" && e(V, { chord: ["left", "right"], action: "change" })),
      (o[91] = u?.type),
      (o[92] = he));
  else he = o[92];
  let uo, co;
  if (o[93] === S)
    ((uo = e(V, { chord: "enter", action: "continue" })),
      (co = e(V, { chord: "escape", action: "cancel" })),
      (o[93] = uo),
      (o[94] = co));
  else ((uo = o[93]), (co = o[94]));
  let Fe;
  if (o[95] !== he)
    ((Fe = e(s, {
      marginTop: 1,
      children: e(n, { dimColor: !0, children: r(Ee, { children: [so, he, uo, co] }) })
    })),
      (o[95] = he),
      (o[96] = Fe));
  else Fe = o[96];
  let ye;
  if (o[97] !== fe || o[98] !== be || o[99] !== Ce || o[100] !== Fe)
    ((ye = r(s, { flexDirection: "column", children: [fe, be, Ce, Fe] })),
      (o[97] = fe),
      (o[98] = be),
      (o[99] = Ce),
      (o[100] = Fe),
      (o[101] = ye));
  else ye = o[101];
  let ao;
  if (o[102] !== a || o[103] !== c || o[104] !== ye || o[105] !== l)
    ((ao = e(we, {
      title: l,
      subtitle: c,
      onCancel: a,
      hideInputGuide: !0,
      isCancelActive: !1,
      children: ye
    })),
      (o[102] = a),
      (o[103] = c),
      (o[104] = ye),
      (o[105] = l),
      (o[106] = ao));
  else ao = o[106];
  return ao;
}
function De(Ye) {
  let h = w(44),
    {
      field: l,
      value: c,
      isFocused: t,
      labelWidth: i,
      cursor: C,
      setCursor: B,
      onChange: a,
      onCancel: X,
      onUp: I,
      onDown: f,
      onEnter: d
    } = Ye,
    o;
  if (h[0] !== l.label || h[1] !== i)
    ((o = " ".repeat(Math.max(0, i - le(l.label)))), (h[0] = l.label), (h[1] = i), (h[2] = o));
  else o = h[2];
  let Y = o,
    se;
  if (h[3] !== l.required || h[4] !== l.type || h[5] !== c)
    ((se = l.type === "text" && l.required && c.trim() === ""),
      (h[3] = l.required),
      (h[4] = l.type),
      (h[5] = c),
      (h[6] = se));
  else se = h[6];
  let R = se;
  const Z = t ? "suggestion" : void 0,
    u = t ? ne.pointer : " ";
  let Te;
  if (h[7] !== Z || h[8] !== u)
    ((Te = r(n, { color: Z, children: [u, " "] })), (h[7] = Z), (h[8] = u), (h[9] = Te));
  else Te = h[9];
  let M = Te;
  const A = !t;
  let N;
  if (h[10] !== R)
    ((N = R ? e(n, { color: "error", children: "*" }) : " "), (h[10] = R), (h[11] = N));
  else N = h[11];
  let U;
  if (h[12] !== l.label || h[13] !== Y || h[14] !== A || h[15] !== N)
    ((U = r(n, { dimColor: A, children: [l.label, N, Y, " "] })),
      (h[12] = l.label),
      (h[13] = Y),
      (h[14] = A),
      (h[15] = N),
      (h[16] = U));
  else U = h[16];
  let P = U;
  if (l.type === "select") {
    let F;
    if (h[17] !== l.options || h[18] !== c)
      ((F = l.options.find((Re) => Re.value === c) ?? l.options[0]),
        (h[17] = l.options),
        (h[18] = c),
        (h[19] = F));
    else F = h[19];
    let b = F;
    let E;
    if (h[20] !== t || h[21] !== b?.label || h[22] !== c)
      ((E = t
        ? r(n, {
            children: [
              r(n, { dimColor: !0, children: [ne.triangleLeft, " "] }),
              b?.label ?? c,
              r(n, { dimColor: !0, children: [" ", ne.triangleRight] })
            ]
          })
        : e(n, { children: b?.label ?? c })),
        (h[20] = t),
        (h[21] = b?.label),
        (h[22] = c),
        (h[23] = E));
    else E = h[23];
    let Se;
    if (h[24] !== P || h[25] !== M || h[26] !== E)
      ((Se = r(s, { children: [M, P, E] })), (h[24] = P), (h[25] = M), (h[26] = E), (h[27] = Se));
    else Se = h[27];
    return Se;
  }
  let F;
  if (
    h[28] !== C ||
    h[29] !== l.mask ||
    h[30] !== l.placeholder ||
    h[31] !== t ||
    h[32] !== X ||
    h[33] !== a ||
    h[34] !== f ||
    h[35] !== d ||
    h[36] !== I ||
    h[37] !== B ||
    h[38] !== c
  )
    ((F = t
      ? e(Tr, {
          value: c,
          onChange: a,
          onSubmit: () => d(),
          onExit: X,
          onHistoryUp: I,
          onHistoryDown: f,
          placeholder: l.placeholder,
          mask: l.mask,
          columns: 60,
          cursorOffset: C,
          onChangeCursorOffset: B,
          disableCursorMovementForUpDownKeys: !0,
          disableEscapeDoublePress: !0,
          focus: !0,
          showCursor: !0
        })
      : c
        ? e(n, { children: l.mask ? l.mask.repeat(Math.min(le(c), 60)) : c })
        : e(n, { dimColor: !0, children: l.placeholder ?? "" })),
      (h[28] = C),
      (h[29] = l.mask),
      (h[30] = l.placeholder),
      (h[31] = t),
      (h[32] = X),
      (h[33] = a),
      (h[34] = f),
      (h[35] = d),
      (h[36] = I),
      (h[37] = B),
      (h[38] = c),
      (h[39] = F));
  else F = h[39];
  let E;
  if (h[40] !== P || h[41] !== M || h[42] !== F)
    ((E = r(s, { children: [M, P, F] })), (h[40] = P), (h[41] = M), (h[42] = F), (h[43] = E));
  else E = h[43];
  return E;
}
export { $2 };

//# sourceMappingURL=chunk-9ctchnmq.js.map
