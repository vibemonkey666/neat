// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F } from "./chunk-wrtp8qz8.js";
import { yi, pee, bX } from "./chunk-a16y5hcz.js";
import { w } from "./chunk-7m7t89vx.js";
import { Pc } from "./chunk-t776tmr7.js";
import { qo } from "./chunk-61vn6n52.js";
import { Ea } from "./chunk-0bynhaq9.js";
import { W6, kF } from "./chunk-rwaeax2b.js";
import { rt, s, n, Yt, ts, wk, HPe, Zi, Kr } from "./chunk-h56pfqh7.js";
import { R_ } from "./chunk-65wf35er.js";
import { st } from "./chunk-ajtyjx88.js";
import { Pr } from "./chunk-rf7g1m78.js";
import { Goe, he } from "./chunk-95k4nfdh.js";
import { le } from "./chunk-vw9e882a.js";
import { gt } from "./chunk-wr0p4ndg.js";
import { tkt } from "./chunk-rj6gws00.js";
import { uw } from "./chunk-ykrqc7ar.js";
import { ZM } from "./chunk-7nfw1dx3.js";
import { aL, ga } from "./chunk-xkry565w.js";
import { ds } from "./chunk-1kj0zhn3.js";
import { Te } from "./chunk-pbpv20s6.js";
import { Md } from "./chunk-ftfxe7en.js";
import { V } from "./chunk-j32s98r9.js";
import { tb } from "./chunk-63vsgmqn.js";
import { mt } from "./chunk-18g32wet.js";
import { lt, an } from "./chunk-kk8f9f8q.js";
import { Ee } from "./chunk-xzcese97.js";
import { uIn, I8t, Tr } from "./chunk-nh2498vy.js";
import { O1 } from "./chunk-yyq6mj0n.js";
import { ne } from "./chunk-39xmt821.js";
import { ld } from "./chunk-53nx6xac.js";
import { Qus } from "./chunk-sr5xxc5x.js";
import { aw, nPt } from "./chunk-y5em6mt4.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { Qn } from "./chunk-n35x7axc.js";
import { wme } from "./chunk-ea3kv9gs.js";
import { Jh, Sc, Gt, Og, de, be, P, Bo, Xt, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
j();
function Oa(t = aL) {
  let o = Zi(),
    i = C(Date.now());
  return de(() => ga(o, i.current, t), [o, t]);
}
function eb() {
  return C(Date.now()).current;
}
function xc(t, o = aL) {
  let i = Kr(o, t);
  return { remountKey: i ? "settled" : "held", settled: i };
}
function R8t() {
  let [t, o] = y(0),
    i = de(() => o((a) => a + 1), []);
  return { epoch: t, noteAttempt: i };
}
function Wo() {
  let t = Zi(),
    o = C(null),
    { epoch: i, noteAttempt: a } = R8t(),
    l = de((c = aL) => o.current !== null && ga(t, o.current, c), [t]),
    m = de(() => {
      ((o.current = Date.now()), a());
    }, [a]);
  return { refusedWithin: l, noteRefused: m, epoch: i };
}
function Fu(kt) {
  return String(kt.value);
}
function ku() {
  return null;
}
function Ru() {
  return "";
}
function Mu() {
  return null;
}
function Eu() {
  return "";
}
function Pu() {
  return "";
}
function Au() {
  return null;
}
function Wu() {
  return "";
}
function Bu() {
  return "";
}
function Nu() {
  return null;
}
function Lu() {
  return "";
}
function Uu() {
  return null;
}
function Ku() {
  return null;
}
function $u() {
  return "";
}
function Hu(ct) {
  return ct.type !== "input";
}
function ju() {
  return "";
}
function zu() {
  return null;
}
function _u(Ql) {
  return String(Ql.value);
}
function Gu() {
  return null;
}
function qu() {
  return null;
}
function Yu() {
  return "";
}
function Ju() {
  return null;
}
function Xu() {
  return "";
}
function Qu() {
  return "";
}
function Zu() {
  return null;
}
function ed() {
  return null;
}
function td() {
  return null;
}
function nd() {
  return "";
}
function od() {
  return "";
}
function id() {
  return "";
}
function sd() {
  return "";
}
function rd() {
  return null;
}
function ad() {
  return null;
}
function ud() {
  return null;
}
function dd(ss) {
  return ss.type !== "input";
}
function cd() {
  return "";
}
function pd(Zl, ea) {
  return Zl - ea;
}
function fd(rs) {
  return String(rs + 1);
}
function md() {
  return null;
}
function hd() {
  return "";
}
function bd() {
  return null;
}
function gd() {
  return null;
}
function vd() {
  return "";
}
function xd() {
  return "";
}
function Id(Ve) {
  return Ve.slice(0, -1);
}
function ze(t) {
  let l = w(3),
    [o, i] = y(t),
    a = C(t),
    m;
  if (l[0] === S)
    ((m = (c) => {
      ((a.current = c(a.current)), i(a.current));
    }),
      (l[0] = m));
  else m = l[0];
  let u = m,
    g;
  if (l[1] !== o) ((g = [o, a, u]), (l[1] = o), (l[2] = g));
  else g = l[2];
  return g;
}
function Qt() {
  return ze("");
}
function yo(t) {
  if (t.length <= 1) return t[0] ?? "";
  if (t.length === 2) return `${t[0]} or ${t[1]}`;
  return `${t.slice(0, -1).join(", ")}, or ${t.at(-1)}`;
}
var ei = 300;
function Da(t) {
  return ` \u2026 +${t} more characters`;
}
function Is(t) {
  if (t.length <= ei) return t;
  let o = yi(t, ei);
  if (o === t) return t;
  let i = [...t].length - ei;
  return o + Da(i);
}
function vi(t, o) {
  let m = w(18),
    i = o === void 0 ? aL : o,
    a = Zi(),
    l = Oa(i),
    c;
  if (m[0] !== t || m[1] !== a || m[2] !== l || m[3] !== i)
    ((c = t === void 0 ? l : () => ga(a, t, i)),
      (m[0] = t),
      (m[1] = a),
      (m[2] = l),
      (m[3] = i),
      (m[4] = c));
  else c = m[4];
  let u = c,
    { refusedWithin: g, noteRefused: d } = Wo(),
    b;
  if (m[5] !== u || m[6] !== d || m[7] !== g || m[8] !== i)
    ((b = () => {
      if (u() || g(i)) {
        return (d(), !0);
      }
      return !1;
    }),
      (m[5] = u),
      (m[6] = d),
      (m[7] = g),
      (m[8] = i),
      (m[9] = b));
  else b = m[9];
  let k = b,
    x;
  if (m[10] !== u || m[11] !== d || m[12] !== g || m[13] !== i)
    ((x = () => {
      if (!u() && !g(i)) {
        return !1;
      }
      return (d(), !0);
    }),
      (m[10] = u),
      (m[11] = d),
      (m[12] = g),
      (m[13] = i),
      (m[14] = x));
  else x = m[14];
  let I = x,
    B;
  if (m[15] !== k || m[16] !== I)
    ((B = { refuse: k, refuseCharacter: I }), (m[15] = k), (m[16] = I), (m[17] = B));
  else B = m[17];
  return B;
}
function Bee(t) {
  let T = w(73),
    {
      options: o,
      onChange: i,
      onFocus: a,
      onCancel: l,
      isDisabled: m,
      disableSelection: c,
      defaultValue: u,
      refuseInput: g,
      headings: d,
      drawLabels: b,
      hidePromptWhileDisabled: k
    } = t,
    x = m === void 0 ? !1 : m,
    I = c === void 0 ? !1 : c,
    B = b === void 0 ? !1 : b,
    N = k === void 0 ? !1 : k,
    [h, K, f] = Qt(),
    [A, O] = y(null),
    L;
  if (T[0] === S) ((L = tkt()), (T[0] = L));
  else L = T[0];
  let R = L,
    [E, H, v] = ze(null),
    ae;
  if (T[1] !== o) ((ae = o.map(Fu).join("\x00")), (T[1] = o), (T[2] = ae));
  else ae = T[2];
  let ve = ae,
    [q, Y] = y(ve);
  if (q !== ve) (Y(ve), v(ku), f(Ru));
  let [ye, pe, X] = ze(null);
  if (q !== ve && ye !== null) (X(Mu), f(Eu));
  let D = ye !== null && o[ye - 1]?.type === "input" ? o[ye - 1] : null,
    xe = C(null);
  (R_(xe, !x), Ea("select", !!l && !x));
  let U;
  if (
    T[3] !== I ||
    T[4] !== D ||
    T[5] !== i ||
    T[6] !== a ||
    T[7] !== o ||
    T[8] !== f ||
    T[9] !== v ||
    T[10] !== X
  )
    ((U = (fe) => {
      if (I) {
        return;
      }
      if (D) {
        if (fe === "" && !D.screenReaderEmptySubmit) {
          O("Enter some text, or Escape for the list.");
          return;
        }
        if (i?.(D.value) === !1) {
          return;
        }
        (f(Pu), X(Au));
        return;
      }
      let J = Number.parseInt(fe, 10);
      if (!Number.isFinite(J) || J < 1 || J > o.length) {
        (O(
          o.length === 0
            ? `Invalid selection "${fe}". Nothing to select.`
            : `Invalid selection "${fe}". Enter a number between 1 and ${o.length}.`
        ),
          f(Wu));
        return;
      }
      let se = o[J - 1];
      if (se.disabled) {
        (O(`Option ${J} is disabled.`), f(Bu));
        return;
      }
      if (se.type === "input") {
        (X(() => J), v(Nu));
        let Oe = se.initialValue ?? "";
        (f(() => Oe), se.onChange(Oe), a?.(se.value));
        return;
      }
      if (i?.(se.value) === !1) {
        return;
      }
      (f(Lu), v(Uu));
    }),
      (T[3] = I),
      (T[4] = D),
      (T[5] = i),
      (T[6] = a),
      (T[7] = o),
      (T[8] = f),
      (T[9] = v),
      (T[10] = X),
      (T[11] = U));
  else U = T[11];
  let Ve = U,
    te;
  if (
    T[12] !== K ||
    T[13] !== I ||
    T[14] !== H ||
    T[15] !== D ||
    T[16] !== pe ||
    T[17] !== x ||
    T[18] !== l ||
    T[19] !== a ||
    T[20] !== o ||
    T[21] !== g ||
    T[22] !== f ||
    T[23] !== v ||
    T[24] !== X ||
    T[25] !== Ve
  )
    ((te = (W) => {
      if (x) {
        return;
      }
      if (W.key === "escape" && W.name === "escape") {
        if ((W.preventDefault(), D)) {
          (X(Ku), f($u));
          let Se = o.find(Hu) ?? o[0];
          if (Se) a?.(Se.value);
          return;
        }
        l?.();
        return;
      }
      if (I) {
        return;
      }
      if (W.key === "return" && W.name === "return") {
        if ((W.preventDefault(), g?.())) {
          return;
        }
        if (D || K.current.length > 0) {
          Ve(K.current);
          return;
        }
        if (R && H.current !== null) Ve(String(H.current + 1));
        return;
      }
      if (W.key === "backspace" || W.key === "delete") {
        W.preventDefault();
        let Z = K.current.slice(0, -1);
        if (D && D.onChange(Z) === !1) {
          return;
        }
        f(() => Z);
        return;
      }
      if (R && !D && pe.current === null && (W.name === "up" || W.name === "down")) {
        if ((W.preventDefault(), g?.())) {
          return;
        }
        (O(null), f(ju));
        let $e = o.length;
        if ($e === 0) {
          return;
        }
        let we = H.current;
        let ut =
          we === null
            ? W.name === "down"
              ? 0
              : $e - 1
            : (we + (W.name === "down" ? 1 : -1) + $e) % $e;
        v(() => ut);
        let Ae = o[ut];
        if (Ae) a?.(Ae.value);
        return;
      }
      if (D) {
        if (W.key.length === 1 && !W.ctrl && !W.meta) {
          W.preventDefault();
          let Wt = K.current + W.key;
          if (D.onChange(Wt) === !1) {
            return;
          }
          f(() => Wt);
        }
        return;
      }
      let Vt = pee(W.key);
      if (/^[0-9]$/.test(Vt)) {
        if ((W.preventDefault(), g?.())) {
          return;
        }
        (O(null), f((Bt) => Bt + Vt), v(zu));
      }
    }),
      (T[12] = K),
      (T[13] = I),
      (T[14] = H),
      (T[15] = D),
      (T[16] = pe),
      (T[17] = x),
      (T[18] = l),
      (T[19] = a),
      (T[20] = o),
      (T[21] = g),
      (T[22] = f),
      (T[23] = v),
      (T[24] = X),
      (T[25] = Ve),
      (T[26] = te));
  else te = T[26];
  let Fe = te,
    It;
  if (T[27] !== h || T[28] !== D || T[29] !== ye || T[30] !== l || T[31] !== o.length)
    ((It = D
      ? `Enter text for option ${ye} (${ZM(D.label)}), or Escape for the list: ${h}`
      : o.length === 0
        ? `Nothing to select${l ? ". Escape to cancel" : ""}: ${h}`
        : `Select with numbers [1-${o.length}]${R ? " or up / down arrow keys" : ""}. Then ${yo(["Enter to submit", ...(l ? ["Escape to cancel"] : [])])}: ${h}`),
      (T[27] = h),
      (T[28] = D),
      (T[29] = ye),
      (T[30] = l),
      (T[31] = o.length),
      (T[32] = It));
  else It = T[32];
  let He = It,
    ke;
  if (T[33] !== He) ((ke = le(He)), (T[33] = He), (T[34] = ke));
  else ke = T[34];
  const it = !x && !I && E === null;
  let qe;
  if (T[35] !== ke || T[36] !== it)
    ((qe = { line: 0, column: ke, active: it, visible: !0 }),
      (T[35] = ke),
      (T[36] = it),
      (T[37] = qe));
  else qe = T[37];
  let at = wk(qe),
    dt;
  if (T[38] !== Fe || T[39] !== x)
    ((dt = x ? {} : { tabIndex: 0, onKeyDown: Fe }), (T[38] = Fe), (T[39] = x), (T[40] = dt));
  else dt = T[40];
  let De;
  if (
    T[41] !== u ||
    T[42] !== I ||
    T[43] !== B ||
    T[44] !== E ||
    T[45] !== d ||
    T[46] !== x ||
    T[47] !== o
  ) {
    let We;
    if (T[49] !== u || T[50] !== I || T[51] !== B || T[52] !== E || T[53] !== d || T[54] !== x)
      ((We = (p, Ft) =>
        r(
          Sc,
          {
            children: [
              d?.get(Ft),
              e(Bn, {
                index: Ft + 1,
                option: p,
                selected: u !== void 0 && p.value === u,
                focused: E === Ft && !x && !I,
                drawLabel: B
              })
            ]
          },
          String(p.value)
        )),
        (T[49] = u),
        (T[50] = I),
        (T[51] = B),
        (T[52] = E),
        (T[53] = d),
        (T[54] = x),
        (T[55] = We));
    else We = T[55];
    De = o.map(We);
    ((T[41] = u),
      (T[42] = I),
      (T[43] = B),
      (T[44] = E),
      (T[45] = d),
      (T[46] = x),
      (T[47] = o),
      (T[48] = De));
  } else De = T[48];
  let We;
  if (T[56] !== d || T[57] !== o.length)
    ((We = d?.get(o.length)), (T[56] = d), (T[57] = o.length), (T[58] = We));
  else We = T[58];
  let yt;
  if (T[59] !== A) ((yt = A && e(n, { children: A })), (T[59] = A), (T[60] = yt));
  else yt = T[60];
  let Be;
  if (T[61] !== at || T[62] !== I || T[63] !== N || T[64] !== x || T[65] !== He)
    ((Be = !I && !(x && N) && e(s, { ref: at, children: e(n, { children: He }) })),
      (T[61] = at),
      (T[62] = I),
      (T[63] = N),
      (T[64] = x),
      (T[65] = He),
      (T[66] = Be));
  else Be = T[66];
  let St;
  if (T[67] !== dt || T[68] !== De || T[69] !== We || T[70] !== yt || T[71] !== Be)
    ((St = r(s, { ref: xe, flexDirection: "column", ...dt, children: [De, We, yt, Be] })),
      (T[67] = dt),
      (T[68] = De),
      (T[69] = We),
      (T[70] = yt),
      (T[71] = Be),
      (T[72] = St));
  else St = T[72];
  return St;
}
function dgr(t) {
  let b = w(91),
    {
      options: o,
      defaultValue: i,
      onChange: a,
      onSubmit: l,
      onFocus: m,
      onCancel: c,
      isDisabled: u,
      submitButtonText: g,
      refuseInput: d
    } = t,
    k;
  if (b[0] !== i) ((k = i === void 0 ? [] : i), (b[0] = i), (b[1] = k));
  else k = b[1];
  let x = k,
    I = u === void 0 ? !1 : u,
    [B, N, h] = Qt(),
    [K, f] = y(null),
    A;
  if (b[2] === S) ((A = tkt()), (b[2] = A));
  else A = b[2];
  let O = A,
    [T, L, R] = ze(null),
    [E, H, v] = ze(null),
    ae;
  if (b[3] !== o) ((ae = o.map(_u).join("\x00")), (b[3] = o), (b[4] = ae));
  else ae = b[4];
  let ve = ae,
    [q, Y] = y(ve);
  if (q !== ve) (Y(ve), R(Gu), v(qu), h(Yu));
  let ye;
  if (b[5] !== x || b[6] !== o)
    ((ye = () => new Set(o.flatMap((pe, X) => (!pe.disabled && x.includes(pe.value) ? [X] : [])))),
      (b[5] = x),
      (b[6] = o),
      (b[7] = ye));
  else ye = b[7];
  let D = ye,
    [xe, U] = y(null),
    fe = C(!1),
    J = C(!1),
    se;
  if (b[8] !== l || b[9] !== xe)
    ((se = () => {
      if (xe !== null) {
        let Oe = [...xe];
        (U(null), (fe.current = !1), l?.(Oe));
      }
    }),
      (b[8] = l),
      (b[9] = xe),
      (b[10] = se));
  else se = b[10];
  let Ve;
  if (b[11] !== xe) ((Ve = [xe]), (b[11] = xe), (b[12] = Ve));
  else Ve = b[12];
  P(se, Ve);
  let [te, W, Se] = ze(null);
  if (q !== ve && te !== null) (Se(Ju), h(Xu));
  let Z = te && o[te.index - 1]?.type === "input" ? o[te.index - 1] : null,
    $e = C(null);
  (R_($e, !I), Ea("multi-select", !!c && !I));
  let we;
  if (b[13] !== a || b[14] !== h || b[15] !== R || b[16] !== Se || b[17] !== v)
    ((we = (ut) => {
      if (((fe.current = !0), a?.([...ut]) === !1)) {
        fe.current = !1;
        return;
      }
      (U(ut), h(Qu), Se(Zu), R(ed), v(td));
    }),
      (b[13] = a),
      (b[14] = h),
      (b[15] = R),
      (b[16] = Se),
      (b[17] = v),
      (b[18] = we));
  else we = b[18];
  let Ae = we,
    Wt;
  if (
    b[19] !== x ||
    b[20] !== Ae ||
    b[21] !== Z ||
    b[22] !== te ||
    b[23] !== m ||
    b[24] !== o ||
    b[25] !== h ||
    b[26] !== R ||
    b[27] !== Se ||
    b[28] !== v
  )
    ((Wt = (Vt) => {
      if (Z && te) {
        if (Vt === "") {
          f("Enter some text, or Escape for the list.");
          return;
        }
        Ae([...te.stashed, Z.value]);
        return;
      }
      let Bt = Vt.trim();
      if (Bt === "") {
        Ae(x);
        return;
      }
      let Fe = Bt.split(/[\s,]+/).filter(Boolean);
      if (Fe.length === 0) {
        Ae(x);
        return;
      }
      let It = new Set();
      let He = [];
      let ke = null;
      for (const it of Fe) {
        if (!/^\d+$/.test(it)) {
          (f(
            `Invalid selection "${it}". Enter numbers between 1 and ${o.length}, comma- or space-separated.`
          ),
            h(nd));
          return;
        }
        let qe = Number.parseInt(it, 10);
        if (It.has(qe)) {
          continue;
        }
        if ((It.add(qe), qe < 1 || qe > o.length)) {
          (f(
            `Invalid selection "${it}". Enter numbers between 1 and ${o.length}, comma- or space-separated.`
          ),
            h(od));
          return;
        }
        let at = o[qe - 1];
        if (at.disabled) {
          (f(`Option ${qe} is disabled.`), h(id));
          return;
        }
        if (at.type === "input") {
          if (ke) {
            (f("Only one free-text option can be included per selection."), h(sd));
            return;
          }
          ke = { index: qe, opt: at };
          continue;
        }
        He.push(at.value);
      }
      if (ke?.opt) {
        (Se(() => ({ index: ke.index, stashed: He, raw: Bt })), R(rd), v(ad));
        let dt = ke.opt.initialValue ?? "";
        (h(() => dt), ke.opt.onChange(dt), m?.(ke.opt.value));
        return;
      }
      Ae(He);
    }),
      (b[19] = x),
      (b[20] = Ae),
      (b[21] = Z),
      (b[22] = te),
      (b[23] = m),
      (b[24] = o),
      (b[25] = h),
      (b[26] = R),
      (b[27] = Se),
      (b[28] = v),
      (b[29] = Wt));
  else Wt = b[29];
  let De = Wt,
    We;
  if (
    b[30] !== N ||
    b[31] !== D ||
    b[32] !== Ae ||
    b[33] !== L ||
    b[34] !== Z ||
    b[35] !== te ||
    b[36] !== W ||
    b[37] !== I ||
    b[38] !== c ||
    b[39] !== m ||
    b[40] !== o ||
    b[41] !== d ||
    b[42] !== h ||
    b[43] !== R ||
    b[44] !== Se ||
    b[45] !== v ||
    b[46] !== De ||
    b[47] !== H
  )
    ((We = (p) => {
      if (I) {
        return;
      }
      if (p.key === "escape" && p.name === "escape") {
        if ((p.preventDefault(), te)) {
          let { raw: Ft } = te;
          (Se(ud), h(() => Ft));
          let yt = o.find(dd) ?? o[0];
          if (yt) m?.(yt.value);
          return;
        }
        c?.();
        return;
      }
      if (p.key === "return" && p.name === "return") {
        if ((p.preventDefault(), J.current)) {
          (d?.(),
            (J.current = !1),
            h(cd),
            f(
              "Part of that entry arrived before the list was ready \u2014 enter your selection again."
            ));
          return;
        }
        if (d?.()) {
          return;
        }
        if (fe.current) {
          return;
        }
        if (O && !Z && N.current.length === 0 && H.current !== null) {
          let Be = [...H.current].sort(pd);
          if (Be.length === 0) Ae([]);
          else De(Be.map(fd).join(" "));
          return;
        }
        De(N.current);
        return;
      }
      if (p.key === "backspace" || p.key === "delete") {
        p.preventDefault();
        let St = N.current;
        let kt = St.slice(0, -1);
        if (Z && Z.onChange(kt) === !1) {
          return;
        }
        if ((h(() => kt), !Z && St !== kt)) v(md);
        return;
      }
      if (O && !Z && W.current === null && (p.name === "up" || p.name === "down")) {
        if ((p.preventDefault(), d?.())) {
          return;
        }
        (f(null), h(hd), (J.current = !1));
        let ct = o.length;
        if (ct === 0) {
          return;
        }
        let sn = L.current;
        let je =
          sn === null
            ? p.name === "down"
              ? 0
              : ct - 1
            : (sn + (p.name === "down" ? 1 : -1) + ct) % ct;
        R(() => je);
        let Nt = o[je];
        if (Nt) m?.(Nt.value);
        return;
      }
      if (O && !Z && W.current === null && L.current !== null && bX(p.key) === " ") {
        if ((p.preventDefault(), d?.())) {
          return;
        }
        let Ye = L.current;
        let rn = o[Ye];
        if (!rn) {
          return;
        }
        if (rn.disabled) {
          f(`Option ${Ye + 1} is disabled.`);
          return;
        }
        (f(null),
          v((_n) => {
            let Lt = new Set(_n ?? D());
            if (Lt.has(Ye)) Lt.delete(Ye);
            else Lt.add(Ye);
            return Lt;
          }));
        return;
      }
      if (Z) {
        if (p.key.length === 1 && !p.ctrl && !p.meta) {
          p.preventDefault();
          let Gn = N.current + p.key;
          if (Z.onChange(Gn) === !1) {
            return;
          }
          h(() => Gn);
        }
        return;
      }
      let qn = bX(pee(p.key)).replace("\uFF0C", ",").replace("\u3001", ",");
      if (/^[0-9, ]$/.test(qn)) {
        if ((p.preventDefault(), J.current)) {
          d?.();
          return;
        }
        if (d?.()) {
          J.current = !0;
          return;
        }
        (f(null), h((pt) => pt + qn), R(bd), v(gd));
      }
    }),
      (b[30] = N),
      (b[31] = D),
      (b[32] = Ae),
      (b[33] = L),
      (b[34] = Z),
      (b[35] = te),
      (b[36] = W),
      (b[37] = I),
      (b[38] = c),
      (b[39] = m),
      (b[40] = o),
      (b[41] = d),
      (b[42] = h),
      (b[43] = R),
      (b[44] = Se),
      (b[45] = v),
      (b[46] = De),
      (b[47] = H),
      (b[48] = We));
  else We = b[48];
  let ln = We,
    wt;
  if (
    b[49] !== B ||
    b[50] !== x ||
    b[51] !== Z ||
    b[52] !== te?.index ||
    b[53] !== c ||
    b[54] !== o.length ||
    b[55] !== g ||
    b[56] !== E
  )
    ((wt = Z
      ? `Enter text for option ${te?.index} (${ZM(Z.label)}), or Escape for the list: ${B}`
      : `Select with numbers [1-${o.length}] (comma- or space-separated for several)${O ? " or up / down arrow keys" : ""}. Then ${yo([...(O ? ["Space to toggle"] : []), `Enter to ${g ?? "submit"}`, ...(x.length > 0 && E === null ? ["bare Enter for defaults"] : []), ...(c ? ["Escape to cancel"] : [])])}: ${B}`),
      (b[49] = B),
      (b[50] = x),
      (b[51] = Z),
      (b[52] = te?.index),
      (b[53] = c),
      (b[54] = o.length),
      (b[55] = g),
      (b[56] = E),
      (b[57] = wt));
  else wt = b[57];
  let Ct = wt,
    ht;
  if (b[58] !== Ct) ((ht = le(Ct)), (b[58] = Ct), (b[59] = ht));
  else ht = b[59];
  const Xe = !I && T === null;
  let un;
  if (b[60] !== ht || b[61] !== Xe)
    ((un = { line: 0, column: ht, active: Xe, visible: !0 }),
      (b[60] = ht),
      (b[61] = Xe),
      (b[62] = un));
  else un = b[62];
  let _ = wk(un),
    dn;
  if (b[63] !== x) ((dn = new Set(x)), (b[63] = x), (b[64] = dn));
  else dn = b[64];
  let bt = dn,
    Ut;
  if (b[65] !== ln || b[66] !== I)
    ((Ut = I ? {} : { tabIndex: 0, onKeyDown: ln }), (b[65] = ln), (b[66] = I), (b[67] = Ut));
  else Ut = b[67];
  let cn;
  if (b[68] !== bt || b[69] !== T || b[70] !== I || b[71] !== o || b[72] !== E) {
    let Qe;
    if (b[74] !== bt || b[75] !== T || b[76] !== I || b[77] !== E)
      ((Qe = (On, pn) =>
        e(
          Bn,
          {
            index: pn + 1,
            option: On,
            selected: E ? E.has(pn) : bt.has(On.value),
            focused: T === pn && !I
          },
          String(On.value)
        )),
        (b[74] = bt),
        (b[75] = T),
        (b[76] = I),
        (b[77] = E),
        (b[78] = Qe));
    else Qe = b[78];
    cn = o.map(Qe);
    ((b[68] = bt), (b[69] = T), (b[70] = I), (b[71] = o), (b[72] = E), (b[73] = cn));
  } else cn = b[73];
  let Qe;
  if (b[79] !== K) ((Qe = K && e(n, { children: K })), (b[79] = K), (b[80] = Qe));
  else Qe = b[80];
  let fn;
  if (b[81] !== Ct) ((fn = e(n, { children: Ct })), (b[81] = Ct), (b[82] = fn));
  else fn = b[82];
  let Yn;
  if (b[83] !== _ || b[84] !== fn)
    ((Yn = e(s, { ref: _, children: fn })), (b[83] = _), (b[84] = fn), (b[85] = Yn));
  else Yn = b[85];
  let is;
  if (b[86] !== Ut || b[87] !== cn || b[88] !== Qe || b[89] !== Yn)
    ((is = r(s, { ref: $e, flexDirection: "column", ...Ut, children: [cn, Qe, Yn] })),
      (b[86] = Ut),
      (b[87] = cn),
      (b[88] = Qe),
      (b[89] = Yn),
      (b[90] = is));
  else is = b[90];
  return is;
}
function Bn(t) {
  let u = w(26),
    { index: o, option: i, selected: a, focused: l, drawLabel: m } = t,
    c = m === void 0 ? !1 : m,
    g;
  if (u[0] !== l) ((g = { line: 0, column: 0, active: l, visible: !0 }), (u[0] = l), (u[1] = g));
  else g = u[1];
  let d = wk(g),
    b;
  if (u[2] !== i.label) ((b = ZM(i.label)), (u[2] = i.label), (u[3] = b));
  else b = u[3];
  let k = b,
    x = i.description ? ` \u2014 ${i.description}` : "";
  const I = `${k}${x}`;
  let B;
  if (u[4] !== I) ((B = Is(I)), (u[4] = I), (u[5] = B));
  else B = u[5];
  let N = B;
  const h = i.disabled ? "(disabled)" : null,
    K = a ? "(selected)" : null;
  let f;
  if (u[6] !== h || u[7] !== K) ((f = [h, K].filter(Boolean)), (u[6] = h), (u[7] = K), (u[8] = f));
  else f = u[8];
  let A = f.join(" ");
  if (c) {
    const O = A ? ` ${A}` : "";
    let T;
    if (u[9] !== o || u[10] !== O)
      ((T = r(n, { children: [o, ".", O] })), (u[9] = o), (u[10] = O), (u[11] = T));
    else T = u[11];
    let L;
    if (u[12] !== i.description)
      ((L = i.description && r(n, { children: ["\u2014 ", i.description] })),
        (u[12] = i.description),
        (u[13] = L));
    else L = u[13];
    let R;
    if (u[14] !== d || u[15] !== i.label || u[16] !== T || u[17] !== L)
      ((R = r(s, { ref: d, children: [T, i.label, L] })),
        (u[14] = d),
        (u[15] = i.label),
        (u[16] = T),
        (u[17] = L),
        (u[18] = R));
    else R = u[18];
    return R;
  }
  const O = A ? `${A} ` : "";
  let T;
  if (u[19] !== N || u[20] !== o || u[21] !== O)
    ((T = r(n, { children: [o, ". ", O, N] })), (u[19] = N), (u[20] = o), (u[21] = O), (u[22] = T));
  else T = u[22];
  let L;
  if (u[23] !== d || u[24] !== T)
    ((L = e(s, { ref: d, children: T })), (u[23] = d), (u[24] = T), (u[25] = L));
  else L = u[25];
  return L;
}
function cgr(t) {
  let h = w(43),
    {
      confirmLabel: o,
      cancelLabel: i,
      onConfirm: a,
      onCancel: l,
      refuseInput: m,
      openedAt: c,
      windowMs: u
    } = t,
    [g, d, b] = Qt(),
    [k, x] = y(null),
    I = C(null);
  (R_(I, !0), Ea("select", !0));
  let { refuse: B, refuseCharacter: N } = vi(c, u),
    K;
  if (h[0] !== m || h[1] !== B)
    ((K = function f() {
      return (m?.() ?? !1) || B();
    }),
      (h[0] = m),
      (h[1] = B),
      (h[2] = K));
  else K = h[2];
  let f = K,
    A;
  if (h[3] !== m || h[4] !== N)
    ((A = function O() {
      return (m?.() ?? !1) || N();
    }),
      (h[3] = m),
      (h[4] = N),
      (h[5] = A));
  else A = h[5];
  let O = A,
    T;
  if (h[6] !== l || h[7] !== a || h[8] !== f || h[9] !== b)
    ((T = (L) => {
      let R = L.trim().toLowerCase();
      if ((R === "y" || R === "yes" || R === "n" || R === "no") && f()) {
        b(vd);
        return;
      }
      if (R === "y" || R === "yes") {
        return a();
      }
      if (R === "n" || R === "no") {
        return l();
      }
      (x("Please answer y or n."), b(xd));
    }),
      (h[6] = l),
      (h[7] = a),
      (h[8] = f),
      (h[9] = b),
      (h[10] = T));
  else T = h[10];
  let E = T,
    H;
  if (h[11] !== d || h[12] !== l || h[13] !== f || h[14] !== O || h[15] !== b || h[16] !== E)
    ((H = (v) => {
      if (v.key === "escape" && v.name === "escape") {
        if ((v.preventDefault(), f())) {
          return;
        }
        return l();
      }
      if (v.key === "return" && v.name === "return") {
        return (v.preventDefault(), E(d.current));
      }
      if (v.key === "backspace" || v.key === "delete") {
        (v.preventDefault(), b(Id));
        return;
      }
      if (v.key.length === 1 && !v.ctrl && !v.meta) {
        if ((v.preventDefault(), O())) {
          return;
        }
        (x(null), b((ae) => ae + v.key));
      }
    }),
      (h[11] = d),
      (h[12] = l),
      (h[13] = f),
      (h[14] = O),
      (h[15] = b),
      (h[16] = E),
      (h[17] = H));
  else H = h[17];
  let ve = H,
    q = `Enter y/n: ${g}`,
    Y;
  if (h[18] !== q) ((Y = le(q)), (h[18] = q), (h[19] = Y));
  else Y = h[19];
  let ye;
  if (h[20] !== Y)
    ((ye = { line: 0, column: Y, active: !0, visible: !0 }), (h[20] = Y), (h[21] = ye));
  else ye = h[21];
  let pe = wk(ye),
    X;
  if (h[22] !== o) ((X = ZM(o)), (h[22] = o), (h[23] = X));
  else X = h[23];
  let D;
  if (h[24] !== X) ((D = r(n, { children: ["y. ", X] })), (h[24] = X), (h[25] = D));
  else D = h[25];
  let xe;
  if (h[26] !== i) ((xe = ZM(i)), (h[26] = i), (h[27] = xe));
  else xe = h[27];
  let U;
  if (h[28] !== xe) ((U = r(n, { children: ["n. ", xe] })), (h[28] = xe), (h[29] = U));
  else U = h[29];
  let fe;
  if (h[30] !== k) ((fe = k && e(n, { children: k })), (h[30] = k), (h[31] = fe));
  else fe = h[31];
  let J;
  if (h[32] !== q) ((J = e(n, { children: q })), (h[32] = q), (h[33] = J));
  else J = h[33];
  let se;
  if (h[34] !== pe || h[35] !== J)
    ((se = e(s, { ref: pe, children: J })), (h[34] = pe), (h[35] = J), (h[36] = se));
  else se = h[36];
  let Oe;
  if (h[37] !== ve || h[38] !== U || h[39] !== fe || h[40] !== se || h[41] !== D)
    ((Oe = r(s, {
      ref: I,
      flexDirection: "column",
      tabIndex: 0,
      onKeyDown: ve,
      children: [D, U, fe, se]
    })),
      (h[37] = ve),
      (h[38] = U),
      (h[39] = fe),
      (h[40] = se),
      (h[41] = D),
      (h[42] = Oe));
  else Oe = h[42];
  return Oe;
}
j();
j();
function Ud(x) {
  return Og(x) ? x.key : "";
}
var wT = "userMessageBackground";
function PPe(t = "tint") {
  return he.level === 0 ? "inverse" : t;
}
var wo = Gt("");
function IPe(t) {
  let o = w(14),
    i,
    a;
  if (o[0] !== t) (({ windowStart: a, ...i } = t), (o[0] = t), (o[1] = i), (o[2] = a));
  else ((i = o[1]), (a = o[2]));
  let l = a === void 0 ? 0 : a,
    m,
    c,
    u;
  if (o[3] !== i.children || o[4] !== l) {
    let g = Jh.toArray(i.children).map(Ud);
    m = wo.Provider;
    c = l;
    u = g.join();
    ((o[3] = i.children), (o[4] = l), (o[5] = m), (o[6] = c), (o[7] = u));
  } else ((m = o[5]), (c = o[6]), (u = o[7]));
  const d = `${c} ${u}`;
  let b;
  if (o[8] !== i) ((b = e(s, { flexDirection: "column", ...i })), (o[8] = i), (o[9] = b));
  else b = o[9];
  let k;
  if (o[10] !== m || o[11] !== d || o[12] !== b)
    ((k = e(m, { value: d, children: b })), (o[10] = m), (o[11] = d), (o[12] = b), (o[13] = k));
  else k = o[13];
  return k;
}
function m6e(t) {
  let m = w(5),
    o = be(wo),
    [i, a] = y(null),
    l = t && i === o;
  if (i !== null && !l) a(null);
  let c;
  if (m[0] !== o) ((c = (u) => a(u ? o : null)), (m[0] = o), (m[1] = c));
  else c = m[1];
  let g;
  if (m[2] !== l || m[3] !== c) ((g = [l, c]), (m[2] = l), (m[3] = c), (m[4] = g));
  else g = m[4];
  return g;
}
function FR(t) {
  let H = w(47),
    {
      isFocused: o,
      isSelected: i,
      children: a,
      description: l,
      showScrollDown: m,
      showScrollUp: c,
      styled: u,
      disabled: g,
      idle: d,
      declareCursor: b,
      onClick: k,
      hoverStyle: x,
      onHoverChange: I
    } = t,
    B = i === void 0 ? !1 : i,
    N = u === void 0 ? !0 : u,
    h = g === void 0 ? !1 : g,
    K = d === void 0 ? !1 : d,
    f = x === void 0 ? "tint" : x,
    A = !h && k !== void 0,
    O = !h && (k !== void 0 || I !== void 0),
    [T, L] = m6e(O),
    R = T && A,
    E = PPe(f),
    v;
  if (H[0] !== I || H[1] !== L)
    ((v = (ae) => {
      (L(ae), I?.(ae));
    }),
      (H[0] = I),
      (H[1] = L),
      (H[2] = v));
  else v = H[2];
  let ve = v,
    q;
  if (H[3] !== h || H[4] !== K || H[5] !== o || H[6] !== B || H[7] !== N)
    ((q = function Y() {
      if (h) {
        return "inactive";
      }
      if (!N) {
        return;
      }
      if (B) {
        return "success";
      }
      if (o && !K) {
        return "suggestion";
      }
    }),
      (H[3] = h),
      (H[4] = K),
      (H[5] = o),
      (H[6] = B),
      (H[7] = N),
      (H[8] = q));
  else q = H[8];
  let Y = q,
    ye = Y();
  const pe = o && !h && b !== !1;
  let X;
  if (H[9] !== pe) ((X = { line: 0, column: 0, active: pe }), (H[9] = pe), (H[10] = X));
  else X = H[10];
  let D = wk(X);
  const xe = R && E === "tint" ? wT : void 0,
    U = A ? k : void 0;
  let fe;
  if (H[11] !== O || H[12] !== ve)
    ((fe = O ? () => ve(!0) : void 0), (H[11] = O), (H[12] = ve), (H[13] = fe));
  else fe = H[13];
  let J;
  if (H[14] !== O || H[15] !== ve)
    ((J = O ? () => ve(!1) : void 0), (H[14] = O), (H[15] = ve), (H[16] = J));
  else J = H[16];
  const se = R && E === "pointer",
    Oe = R && E === "inverse";
  let Ve;
  if (
    H[17] !== h ||
    H[18] !== K ||
    H[19] !== o ||
    H[20] !== m ||
    H[21] !== c ||
    H[22] !== se ||
    H[23] !== Oe
  )
    ((Ve = e(s, {
      flexShrink: 0,
      children: e(Oi, {
        disabled: h,
        isFocused: o,
        idle: K,
        showScrollUp: c,
        showScrollDown: m,
        hovered: se,
        inverse: Oe
      })
    })),
      (H[17] = h),
      (H[18] = K),
      (H[19] = o),
      (H[20] = m),
      (H[21] = c),
      (H[22] = se),
      (H[23] = Oe),
      (H[24] = Ve));
  else Ve = H[24];
  let te;
  if (H[25] !== a || H[26] !== h || H[27] !== N || H[28] !== ye)
    ((te = N ? e(n, { color: ye, dimColor: h, wrap: "truncate-end", children: a }) : a),
      (H[25] = a),
      (H[26] = h),
      (H[27] = N),
      (H[28] = ye),
      (H[29] = te));
  else te = H[29];
  let W;
  if (H[30] !== h || H[31] !== B)
    ((W =
      B &&
      !h &&
      e(s, {
        flexShrink: 0,
        children: e(n, { "aria-label": "(selected)", color: "success", children: ne.tick })
      })),
      (H[30] = h),
      (H[31] = B),
      (H[32] = W));
  else W = H[32];
  let Se;
  if (H[33] !== Ve || H[34] !== te || H[35] !== W)
    ((Se = r(s, { flexDirection: "row", gap: 1, children: [Ve, te, W] })),
      (H[33] = Ve),
      (H[34] = te),
      (H[35] = W),
      (H[36] = Se));
  else Se = H[36];
  let Z;
  if (H[37] !== l)
    ((Z =
      l &&
      e(s, {
        paddingLeft: 2,
        children: e(n, { dimColor: !0, wrap: "truncate-end", children: l })
      })),
      (H[37] = l),
      (H[38] = Z));
  else Z = H[38];
  let $e;
  if (
    H[39] !== D ||
    H[40] !== xe ||
    H[41] !== U ||
    H[42] !== fe ||
    H[43] !== J ||
    H[44] !== Se ||
    H[45] !== Z
  )
    (($e = r(s, {
      ref: D,
      flexDirection: "column",
      backgroundColor: xe,
      onClick: U,
      onMouseEnter: fe,
      onMouseLeave: J,
      children: [Se, Z]
    })),
      (H[39] = D),
      (H[40] = xe),
      (H[41] = U),
      (H[42] = fe),
      (H[43] = J),
      (H[44] = Se),
      (H[45] = Z),
      (H[46] = $e));
  else $e = H[46];
  return $e;
}
function Oi(t) {
  let g = w(12),
    {
      disabled: o,
      isFocused: i,
      idle: a,
      showScrollUp: l,
      showScrollDown: m,
      hovered: c,
      inverse: u
    } = t;
  if (o) {
    let d;
    if (g[0] === S) ((d = e(n, { "aria-hidden": !0, children: " " })), (g[0] = d));
    else d = g[0];
    return d;
  }
  if (i) {
    const d = a ? void 0 : "suggestion";
    let b;
    if (g[1] !== a || g[2] !== u || g[3] !== d)
      ((b = e(n, { "aria-hidden": !0, color: d, dimColor: a, inverse: u, children: ne.pointer })),
        (g[1] = a),
        (g[2] = u),
        (g[3] = d),
        (g[4] = b));
    else b = g[4];
    return b;
  }
  if (m) {
    let d;
    if (g[5] !== u)
      ((d = e(n, {
        "aria-label": "(more below)",
        dimColor: !0,
        inverse: u,
        children: ne.arrowDown
      })),
        (g[5] = u),
        (g[6] = d));
    else d = g[6];
    return d;
  }
  if (l) {
    let d;
    if (g[7] !== u)
      ((d = e(n, { "aria-label": "(more above)", dimColor: !0, inverse: u, children: ne.arrowUp })),
        (g[7] = u),
        (g[8] = d));
    else d = g[8];
    return d;
  }
  if (c) {
    let d;
    if (g[9] === S)
      ((d = e(n, { "aria-hidden": !0, dimColor: !0, children: ne.pointer })), (g[9] = d));
    else d = g[9];
    return d;
  }
  let d;
  if (g[10] !== u)
    ((d = e(n, { "aria-hidden": !0, inverse: u, children: " " })), (g[10] = u), (g[11] = d));
  else d = g[11];
  return d;
}
j();
function Oo(t) {
  let g = w(15),
    { imageId: o, backgroundColor: i, isSelected: a } = t,
    l = a === void 0 ? !1 : a,
    c = qo((m) => m.storedImagePaths.get(o) ?? null) ?? null,
    u = `[Image #${o}]`,
    d;
  if (g[0] !== c) ((d = c && uw() ? O1(c) : null), (g[0] = c), (g[1] = d));
  else d = g[1];
  let b = d;
  if (b) {
    let k, x;
    if (g[2] !== i || g[3] !== u || g[4] !== l)
      ((k = e(n, { backgroundColor: i, inverse: l, children: u })),
        (x = e(n, { backgroundColor: i, inverse: l, bold: l, children: u })),
        (g[2] = i),
        (g[3] = u),
        (g[4] = l),
        (g[5] = k),
        (g[6] = x));
    else ((k = g[5]), (x = g[6]));
    let I;
    if (g[7] !== b || g[8] !== k || g[9] !== x)
      ((I = e(Yt, { url: b, fallback: k, children: x })),
        (g[7] = b),
        (g[8] = k),
        (g[9] = x),
        (g[10] = I));
    else I = g[10];
    return I;
  }
  let k;
  if (g[11] !== i || g[12] !== u || g[13] !== l)
    ((k = e(n, { backgroundColor: i, inverse: l, children: u })),
      (g[11] = i),
      (g[12] = u),
      (g[13] = l),
      (g[14] = k));
  else k = g[14];
  return k;
}
j();
function Zxt(t) {
  let [o] = Pr(),
    i = Pc(),
    a = ee(kF, []),
    l = rt();
  uIn({ isTerminalFocused: i, canPasteImages: !!t.onImagePaste });
  let m = Qus({
      value: t.value,
      onChange: t.onChange,
      onSubmit: t.onSubmit,
      onExit: t.onExit,
      onExitMessage: t.onExitMessage,
      onLeftArrowOnEmpty: t.onLeftArrowOnEmpty,
      leftArrowConfirmHint: t.leftArrowConfirmHint,
      onHistoryReset: t.onHistoryReset,
      onHistoryUp: t.onHistoryUp,
      onHistoryDown: t.onHistoryDown,
      focus: t.focus,
      mask: t.mask,
      maskWhole: t.maskWhole,
      multiline: t.multiline,
      disableBackslashReturn: t.disableBackslashReturn,
      clearOnSubmit: t.clearOnSubmit,
      disableCtrlCClear: t.disableCtrlCClear,
      cursorChar: t.showCursor && !a ? " " : "",
      preserveTrailingWhitespace: l,
      highlightPastedText: t.highlightPastedText,
      invert: i ? Goe : (O) => O,
      themeText: Qn("text", o),
      columns: t.columns,
      leadingPill: t.leadingPill,
      maxVisibleLines: t.maxVisibleLines,
      onImagePaste: t.onImagePaste,
      disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys,
      disableEscapeDoublePress: t.disableEscapeDoublePress,
      externalOffset: t.cursorOffset,
      onOffsetChange: t.onChangeCursorOffset,
      inputFilter: t.inputFilter,
      editRelay: t.editRelay,
      commitEdit: t.commitEdit,
      virtualTexts: l ? void 0 : t.virtualTexts,
      getPastedContents: t.getPastedContents,
      getInputMode: t.getInputMode,
      onModeChange: t.onModeChange,
      onUndo: t.onUndo,
      onOpenHistorySearch: t.onOpenHistorySearch,
      onToggleHelp: t.onToggleHelp
    }),
    { mode: c, setMode: u, cancelPendingRemap: g, forgetColumn: d, isCommandPending: b } = m,
    k = C(!1),
    x = Bo(u);
  P(() => {
    let O = !k.current;
    k.current = !0;
    let T =
      O && (t.initialMode === "VISUAL" || t.initialMode === "VISUAL LINE")
        ? "NORMAL"
        : t.initialMode;
    if (T && T !== c) x(T);
  }, [t.initialMode, c]);
  let { recordInsertRef: I } = t,
    { recordInsert: B } = m;
  P(() => {
    if (!I) return;
    return (
      (I.current = B),
      () => {
        I.current = null;
      }
    );
  }, [I, B]);
  let { cancelRemapRef: N } = t;
  P(() => {
    if (!N) return;
    return (
      (N.current = g),
      () => {
        N.current = null;
      }
    );
  }, [N, g]);
  let { forgetColumnRef: h } = t;
  P(() => {
    if (!h) return;
    return (
      (h.current = d),
      () => {
        h.current = null;
      }
    );
  }, [h, d]);
  let { onEditingStateChange: K } = t,
    f = t.focus !== !1,
    A = c !== "NORMAL" || b;
  return (
    Xt(() => {
      if (!K || !f) return;
      return (K({ mode: c, takesEscape: A }), () => K(null));
    }, [K, f, c, A]),
    e(s, {
      flexDirection: "column",
      children: e(I8t, { inputState: m, terminalFocus: i, highlights: t.highlights, ...t })
    })
  );
}
function Yie(t) {
  let b = w(10),
    {
      isFocused: o,
      isSelected: i,
      children: a,
      description: l,
      shouldShowDownArrow: m,
      shouldShowUpArrow: c,
      declareCursor: u,
      onClick: g,
      hoverStyle: d
    } = t,
    k;
  if (
    b[0] !== a ||
    b[1] !== u ||
    b[2] !== l ||
    b[3] !== d ||
    b[4] !== o ||
    b[5] !== i ||
    b[6] !== g ||
    b[7] !== m ||
    b[8] !== c
  )
    ((k = e(FR, {
      isFocused: o,
      isSelected: i,
      description: l,
      showScrollDown: m,
      showScrollUp: c,
      styled: !1,
      declareCursor: u,
      onClick: g,
      hoverStyle: d,
      children: a
    })),
      (b[0] = a),
      (b[1] = u),
      (b[2] = l),
      (b[3] = d),
      (b[4] = o),
      (b[5] = i),
      (b[6] = g),
      (b[7] = m),
      (b[8] = c),
      (b[9] = k));
  else k = b[9];
  return k;
}
function To(t) {
  return t?.name === "escape" && !t.ctrl && !t.meta;
}
function fc(pn) {
  return pn.type === "image";
}
function Ur(t, o, i, a) {
  let l = 2 + o + 2;
  return Math.max(1, t - l - i - a);
}
function OPe(t) {
  let D = w(107),
    {
      option: o,
      isFocused: i,
      isSelected: a,
      shouldShowDownArrow: l,
      shouldShowUpArrow: m,
      maxIndexWidth: c,
      index: u,
      hideIndex: g,
      inputValue: d,
      onInputChange: b,
      onSubmit: k,
      onExit: x,
      layout: I,
      children: B,
      showLabel: N,
      onOpenEditor: h,
      resetCursorOnUpdate: K,
      canPasteImage: f,
      onImagePaste: A,
      pastedContents: O,
      onRemoveImage: T,
      imagesSelected: L,
      selectedImageIndex: R,
      onImagesSelectedChange: E,
      onSelectedImageIndexChange: H,
      extraChromeWidth: v,
      onClick: ae,
      hoverStyle: ve
    } = t,
    q = g === void 0 ? !1 : g,
    Y = N === void 0 ? !1 : N,
    ye = K === void 0 ? !1 : K,
    pe = R === void 0 ? 0 : R,
    X = v === void 0 ? 0 : v,
    xe;
  if (D[0] !== O) ((xe = O ? Object.values(O).filter(fc) : []), (D[0] = O), (D[1] = xe));
  else xe = D[1];
  let U = xe,
    fe = Y || o.showLabelWithValue === !0,
    [J, se] = y(d.length),
    Oe = C(!1),
    Ve;
  if (D[2] !== d.length || D[3] !== i || D[4] !== ye)
    ((Ve = () => {
      if (ye && i) {
        if (Oe.current) Oe.current = !1;
        else se(d.length);
      }
    }),
      (D[2] = d.length),
      (D[3] = i),
      (D[4] = ye),
      (D[5] = Ve));
  else Ve = D[5];
  let te;
  if (D[6] !== d || D[7] !== i || D[8] !== ye)
    ((te = [ye, i, d]), (D[6] = d), (D[7] = i), (D[8] = ye), (D[9] = te));
  else te = D[9];
  P(Ve, te);
  let W;
  if (D[10] !== d || D[11] !== b || D[12] !== h)
    ((W = () => {
      h?.(d, b);
    }),
      (D[10] = d),
      (D[11] = b),
      (D[12] = h),
      (D[13] = W));
  else W = D[13];
  const Se = i && !!h;
  let Z;
  if (D[14] !== Se) ((Z = { context: "Chat", isActive: Se }), (D[14] = Se), (D[15] = Z));
  else Z = D[15];
  lt("chat:externalEditor", W, Z);
  let $e;
  if (D[16] !== f || D[17] !== A)
    (($e = () => {
      if (!A) {
        return;
      }
      if (f?.() === !1) {
        return;
      }
      wme(ld(st())).then((we) => {
        if (we) A(we.base64, { mediaType: we.mediaType, dimensions: we.dimensions });
      });
    }),
      (D[16] = f),
      (D[17] = A),
      (D[18] = $e));
  else $e = D[18];
  const ut = i && !!A;
  let Ae;
  if (D[19] !== ut) ((Ae = { context: "Chat", isActive: ut }), (D[19] = ut), (D[20] = Ae));
  else Ae = D[20];
  lt("chat:imagePaste", $e, Ae);
  let Wt;
  if (D[21] !== U || D[22] !== T)
    ((Wt = () => {
      if (U.length > 0 && T) T(U.at(-1).id);
    }),
      (D[21] = U),
      (D[22] = T),
      (D[23] = Wt));
  else Wt = D[23];
  const Vt = i && !L && d === "" && U.length > 0 && !!T;
  let Bt;
  if (D[24] !== Vt) ((Bt = { context: "Attachments", isActive: Vt }), (D[24] = Vt), (D[25] = Bt));
  else Bt = D[25];
  lt("attachments:remove", Wt, Bt);
  let Fe, It;
  if (D[26] !== U.length || D[27] !== H || D[28] !== pe)
    ((Fe = () => {
      if (U.length > 1) H?.((pe + 1) % U.length);
    }),
      (It = () => {
        if (U.length > 1) H?.((pe - 1 + U.length) % U.length);
      }),
      (D[26] = U.length),
      (D[27] = H),
      (D[28] = pe),
      (D[29] = Fe),
      (D[30] = It));
  else ((Fe = D[29]), (It = D[30]));
  let He;
  if (D[31] !== U || D[32] !== E || D[33] !== T || D[34] !== H || D[35] !== pe)
    ((He = () => {
      let ke = U[pe];
      if (ke && T) {
        if (T(ke.id) === !1) {
          return;
        }
        if (U.length <= 1) E?.(!1);
        else H?.(Math.min(pe, U.length - 2));
      }
    }),
      (D[31] = U),
      (D[32] = E),
      (D[33] = T),
      (D[34] = H),
      (D[35] = pe),
      (D[36] = He));
  else He = D[36];
  let it;
  if (D[37] !== E)
    ((it = () => {
      E?.(!1);
    }),
      (D[37] = E),
      (D[38] = it));
  else it = D[38];
  let qe;
  if (D[39] !== Fe || D[40] !== It || D[41] !== He || D[42] !== it)
    ((qe = {
      "attachments:next": Fe,
      "attachments:previous": It,
      "attachments:remove": He,
      "attachments:exit": it
    }),
      (D[39] = Fe),
      (D[40] = It),
      (D[41] = He),
      (D[42] = it),
      (D[43] = qe));
  else qe = D[43];
  const at = i && !!L;
  let dt;
  if (D[44] !== at) ((dt = { context: "Attachments", isActive: at }), (D[44] = at), (D[45] = dt));
  else dt = D[45];
  an(qe, dt);
  let { vimEditing: De } = o,
    We = De ? Zxt : Tr,
    p = C(null),
    Ft,
    yt;
  if (D[46] !== L || D[47] !== i || D[48] !== E)
    ((Ft = () => {
      if (!i && L) E?.(!1);
    }),
      (yt = [i, L, E]),
      (D[46] = L),
      (D[47] = i),
      (D[48] = E),
      (D[49] = Ft),
      (D[50] = yt));
  else ((Ft = D[49]), (yt = D[50]));
  P(Ft, yt);
  let Be = I === "expanded" ? c + 3 : c + 4,
    { columns: St } = ds(Te()),
    kt = fe && typeof o.label === "string" ? le(o.label) + le(o.labelValueSeparator ?? ", ") : 0,
    ct;
  if (D[51] !== St || D[52] !== X || D[53] !== kt || D[54] !== c)
    ((ct = Ur(St, c, kt, X)), (D[51] = St), (D[52] = X), (D[53] = kt), (D[54] = c), (D[55] = ct));
  else ct = D[55];
  let sn = ct;
  const je = De?.takesEscape ? al : void 0,
    Nt = I === "compact" ? 0 : void 0;
  let Ye;
  if (D[56] !== q || D[57] !== u || D[58] !== c)
    ((Ye =
      !q &&
      e(s, { flexShrink: 0, children: e(n, { dimColor: !0, children: `${u}.`.padEnd(c + 2) }) })),
      (D[56] = q),
      (D[57] = u),
      (D[58] = c),
      (D[59] = Ye));
  else Ye = D[59];
  let rn;
  if (
    D[60] !== We ||
    D[61] !== J ||
    D[62] !== L ||
    D[63] !== d ||
    D[64] !== i ||
    D[65] !== x ||
    D[66] !== A ||
    D[67] !== b ||
    D[68] !== k ||
    D[69] !== o ||
    D[70] !== fe ||
    D[71] !== sn ||
    D[72] !== De?.onStateChange
  )
    ((rn = fe
      ? i
        ? r(Q, {
            children: [
              r(n, { color: "suggestion", children: [o.label, o.labelValueSeparator ?? ", "] }),
              e(We, {
                value: d,
                onChange: (_n) => {
                  if (o.onChange(_n) === !1) {
                    return;
                  }
                  ((Oe.current = !0), b(_n));
                },
                onSubmit: k,
                onExit: x,
                placeholder: o.placeholder,
                focus: !L,
                showCursor: !0,
                multiline: !0,
                cursorOffset: J,
                onChangeCursorOffset: se,
                columns: sn,
                onEditingStateChange: De?.onStateChange,
                cancelRemapRef: p,
                onImagePaste: A,
                onPaste: (Lt) => {
                  p.current?.();
                  let Gn = d.slice(0, J);
                  let qn = d.slice(J);
                  let pt = Gn + Lt + qn;
                  if (o.onChange(pt) === !1) {
                    return;
                  }
                  ((Oe.current = !0), b(pt), se(Gn.length + Lt.length));
                }
              })
            ]
          })
        : r(n, { children: [o.label, d ? (o.labelValueSeparator ?? ", ") : null, d || null] })
      : i
        ? e(We, {
            value: d,
            onChange: (ln) => {
              if (o.onChange(ln) === !1) {
                return;
              }
              ((Oe.current = !0), b(ln));
            },
            onSubmit: k,
            onExit: x,
            placeholder: o.placeholder || (typeof o.label === "string" ? o.label : void 0),
            focus: !L,
            showCursor: !0,
            multiline: !0,
            cursorOffset: J,
            onChangeCursorOffset: se,
            columns: sn,
            onEditingStateChange: De?.onStateChange,
            cancelRemapRef: p,
            onImagePaste: A,
            onPaste: (wt) => {
              p.current?.();
              let Ct = d.slice(0, J);
              let ht = d.slice(J);
              let Xe = Ct + wt + ht;
              if (o.onChange(Xe) === !1) {
                return;
              }
              ((Oe.current = !0), b(Xe), se(Ct.length + wt.length));
            }
          })
        : e(n, { color: d ? void 0 : "inactive", children: d || o.placeholder || o.label })),
      (D[60] = We),
      (D[61] = J),
      (D[62] = L),
      (D[63] = d),
      (D[64] = i),
      (D[65] = x),
      (D[66] = A),
      (D[67] = b),
      (D[68] = k),
      (D[69] = o),
      (D[70] = fe),
      (D[71] = sn),
      (D[72] = De?.onStateChange),
      (D[73] = rn));
  else rn = D[73];
  let un;
  if (D[74] !== B || D[75] !== Nt || D[76] !== Ye || D[77] !== rn)
    ((un = r(s, { flexDirection: "row", flexShrink: Nt, children: [Ye, B, rn] })),
      (D[74] = B),
      (D[75] = Nt),
      (D[76] = Ye),
      (D[77] = rn),
      (D[78] = un));
  else un = D[78];
  let _;
  if (
    D[79] !== ve ||
    D[80] !== i ||
    D[81] !== a ||
    D[82] !== ae ||
    D[83] !== l ||
    D[84] !== m ||
    D[85] !== un
  )
    ((_ = e(Yie, {
      isFocused: i,
      isSelected: a,
      shouldShowDownArrow: l,
      shouldShowUpArrow: m,
      declareCursor: !1,
      onClick: ae,
      hoverStyle: ve,
      children: un
    })),
      (D[79] = ve),
      (D[80] = i),
      (D[81] = a),
      (D[82] = ae),
      (D[83] = l),
      (D[84] = m),
      (D[85] = un),
      (D[86] = _));
  else _ = D[86];
  let dn;
  if (
    D[87] !== Be ||
    D[88] !== i ||
    D[89] !== a ||
    D[90] !== o.description ||
    D[91] !== o.dimDescription
  )
    ((dn =
      o.description &&
      e(s, {
        paddingLeft: Be,
        children: e(n, {
          dimColor: o.dimDescription !== !1,
          color: a ? "success" : i ? "suggestion" : void 0,
          children: o.description
        })
      })),
      (D[87] = Be),
      (D[88] = i),
      (D[89] = a),
      (D[90] = o.description),
      (D[91] = o.dimDescription),
      (D[92] = dn));
  else dn = D[92];
  let bt;
  if (D[93] !== Be || D[94] !== U || D[95] !== L || D[96] !== i || D[97] !== pe)
    ((bt =
      U.length > 0 &&
      r(s, {
        flexDirection: "row",
        gap: 1,
        paddingLeft: Be,
        children: [
          U.map((Ut, cn) => e(Oo, { imageId: Ut.id, isSelected: !!L && cn === pe }, Ut.id)),
          e(s, {
            flexGrow: 1,
            justifyContent: "flex-start",
            flexDirection: "row",
            children: e(n, {
              dimColor: !0,
              children: L
                ? r(Ee, {
                    children: [
                      U.length > 1 &&
                        r(Q, {
                          children: [
                            e(ft, {
                              action: "attachments:next",
                              context: "Attachments",
                              fallback: "\u2192",
                              description: "next"
                            }),
                            e(ft, {
                              action: "attachments:previous",
                              context: "Attachments",
                              fallback: "\u2190",
                              description: "prev"
                            })
                          ]
                        }),
                      e(ft, {
                        action: "attachments:remove",
                        context: "Attachments",
                        fallback: "backspace",
                        description: "remove"
                      }),
                      e(ft, {
                        action: "attachments:exit",
                        context: "Attachments",
                        fallback: "esc",
                        description: "cancel"
                      })
                    ]
                  })
                : i
                  ? e(V, { chord: "down", action: "select", parens: !0 })
                  : null
            })
          })
        ]
      })),
      (D[93] = Be),
      (D[94] = U),
      (D[95] = L),
      (D[96] = i),
      (D[97] = pe),
      (D[98] = bt));
  else bt = D[98];
  let Qe;
  if (D[99] !== I) ((Qe = I === "expanded" && e(n, { children: " " })), (D[99] = I), (D[100] = Qe));
  else Qe = D[100];
  let On;
  if (D[101] !== je || D[102] !== _ || D[103] !== dn || D[104] !== bt || D[105] !== Qe)
    ((On = r(s, {
      flexDirection: "column",
      flexShrink: 0,
      onKeyDown: je,
      children: [_, dn, bt, Qe]
    })),
      (D[101] = je),
      (D[102] = _),
      (D[103] = dn),
      (D[104] = bt),
      (D[105] = Qe),
      (D[106] = On));
  else On = D[106];
  return On;
}
function al(t) {
  if (To(t)) t.stopImmediatePropagation();
}
j();
var ki = ({
  isDisabled: t = !1,
  disableSelection: o = !1,
  state: i,
  options: a,
  isMultiSelect: l = !1,
  onUpFromFirstItem: m,
  onDownFromLastItem: c,
  onInputModeToggle: u,
  inputValues: g,
  imagesSelected: d = !1,
  onEnterImageSelection: b,
  onExitImageSelection: k,
  hasInkFocus: x = !0
}) => {
  let { focusDirection: I } = HPe(),
    B = Md();
  Ea("select", !!i.onCancel);
  let N = ee(
      () => a.find((A) => A.value === i.focusedValue)?.type === "input",
      [a, i.focusedValue]
    ),
    h = ee(() => {
      let f = {};
      if (!N)
        ((f["select:next"] = () => {
          let A = a.at(-1);
          if (A && i.getFocusedValue() === A.value) {
            if (c) {
              c();
              return;
            }
            if (I("down")) return;
          }
          i.focusNextOption();
        }),
          (f["select:previous"] = () => {
            let A = a[0];
            if (A && i.getFocusedValue() === A.value) {
              if (m) {
                m();
                return;
              }
              if (I("up")) return;
            }
            i.focusPreviousOption();
          }),
          (f["select:first"] = () => {
            i.focusOption(a[0]?.value);
          }),
          (f["select:last"] = () => {
            i.focusOption(a.at(-1)?.value);
          }),
          (f["select:accept"] = () => {
            if (o === !0) return;
            let A = i.getFocusedValue();
            if (A === void 0) return;
            let O = a.find((T) => T.value === A);
            if (O?.disabled === !0) return;
            if (O?.type === "input") return;
            (i.selectFocusedOption?.(), i.onChange?.(A));
          }));
      if (i.onCancel)
        f["select:cancel"] = () => {
          let A = i.getFocusedValue(),
            O = a.find((T) => T.value === A);
          if (O?.type === "input" && O.vimEditing?.takesEscape && To(B?.singleKeyEvent() ?? null))
            return !1;
          i.onCancel();
        };
      return f;
    }, [a, i, c, m, N, o, I, B]);
  return (
    an(h, { context: "Select", isActive: !t && x }),
    {
      handleKeyDown: (f) => {
        if (t) return;
        let A = pee(f.key),
          O = i.getFocusedValue(),
          T = a.find((R) => R.value === O),
          L = T?.type === "input";
        if (f.key === "tab") {
          if ((f.preventDefault(), u && O !== void 0)) u(O);
          return;
        }
        if (L) {
          if (d) {
            if (f.key === "up") (f.preventDefault(), k?.());
            return;
          }
          if (f.key === "down" && b?.()) {
            f.stopImmediatePropagation();
            return;
          }
          if (f.key === "down" || (f.ctrl && f.key === "n")) {
            if (c) {
              let R = a.at(-1);
              if (R && O === R.value) {
                (c(), f.stopImmediatePropagation());
                return;
              }
            }
            (i.focusNextOption(), f.stopImmediatePropagation());
            return;
          }
          if (f.key === "up" || (f.ctrl && f.key === "p")) {
            if (m) {
              let R = a[0];
              if (R && O === R.value) {
                (m(), f.stopImmediatePropagation());
                return;
              }
            }
            (i.focusPreviousOption(), f.stopImmediatePropagation());
            return;
          }
          return;
        }
        if (N) {
          if (f.key === "down" || (f.ctrl && f.key === "n")) {
            if (c) {
              let R = a.at(-1);
              if (R && O === R.value) {
                (c(), f.stopImmediatePropagation());
                return;
              }
            }
            (i.focusNextOption(), f.stopImmediatePropagation());
            return;
          }
          if (f.key === "up" || (f.ctrl && f.key === "p")) {
            if (m) {
              let R = a[0];
              if (R && O === R.value) {
                (m(), f.stopImmediatePropagation());
                return;
              }
            }
            (i.focusPreviousOption(), f.stopImmediatePropagation());
            return;
          }
        }
        if (f.key === "pagedown") {
          (f.preventDefault(), i.focusNextPage());
          return;
        }
        if (f.key === "pageup") {
          (f.preventDefault(), i.focusPreviousPage());
          return;
        }
        if (o !== !0) {
          if (l && bX(f.key) === " " && O !== void 0) {
            if (T?.disabled !== !0)
              (f.preventDefault(), i.selectFocusedOption?.(), i.onChange?.(O));
            return;
          }
          if (o !== "numeric" && /^[0-9]$/.test(A)) {
            f.preventDefault();
            let R = parseInt(A) - 1;
            if (R >= 0 && R < i.options.length) {
              let E = i.options[R];
              if (E.disabled === !0) return;
              if (E.type === "input") {
                if ((g?.get(E.value) ?? "").trim()) {
                  i.onChange?.(E.value);
                  return;
                }
                if (E.allowEmptySubmitToCancel) {
                  i.onChange?.(E.value);
                  return;
                }
                i.focusOption(E.value);
                return;
              }
              i.onChange?.(E.value);
              return;
            }
          }
        }
      }
    }
  );
};
j();
j();
import { isDeepStrictEqual as bc } from "util";
j();
function au(t) {
  let [o] = y(() => ({ value: mc(t) ? t() : t })),
    [i, a] = y(o.value),
    l = de(
      (c) => {
        let u = hc(c) ? c(o.value) : c;
        if (Object.is(u, o.value)) return;
        ((o.value = u), a(() => u));
      },
      [o]
    ),
    m = de(() => o.value, [o]);
  return [i, l, m];
}
function mc(t) {
  return typeof t === "function";
}
function hc(t) {
  return typeof t === "function";
}
class Mo extends Map {
  first;
  last;
  constructor(t) {
    let o = [],
      i,
      a,
      l,
      m = 0;
    for (let c of t) {
      let u = { value: c.value, previous: l, next: void 0, index: m };
      if (l) l.next = u;
      ((i ||= u), (a = u), o.push([c.value, u]), m++, (l = u));
    }
    super(o);
    ((this.first = i), (this.last = a));
  }
}
var gc = (t, o) => {
    switch (o.type) {
      case "focus-next-option": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = i.next || t.optionMap.first;
        if (!a) return t;
        if (!i.next && a === t.optionMap.first)
          return {
            ...t,
            focusedValue: a.value,
            visibleFromIndex: 0,
            visibleToIndex: t.visibleOptionCount
          };
        if (!(a.index >= t.visibleToIndex)) return { ...t, focusedValue: a.value };
        let m = Math.min(t.optionMap.size, t.visibleToIndex + 1),
          c = m - t.visibleOptionCount;
        return { ...t, focusedValue: a.value, visibleFromIndex: c, visibleToIndex: m };
      }
      case "focus-previous-option": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = i.previous || t.optionMap.last;
        if (!a) return t;
        if (!i.previous && a === t.optionMap.last) {
          let u = t.optionMap.size,
            g = Math.max(0, u - t.visibleOptionCount);
          return { ...t, focusedValue: a.value, visibleFromIndex: g, visibleToIndex: u };
        }
        if (!(a.index <= t.visibleFromIndex)) return { ...t, focusedValue: a.value };
        let m = Math.max(0, t.visibleFromIndex - 1),
          c = m + t.visibleOptionCount;
        return { ...t, focusedValue: a.value, visibleFromIndex: m, visibleToIndex: c };
      }
      case "focus-next-page": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = Math.min(t.optionMap.size - 1, i.index + t.visibleOptionCount),
          l = t.optionMap.first;
        while (l && l.index < a)
          if (l.next) l = l.next;
          else break;
        if (!l) return t;
        let m = Math.min(t.optionMap.size, l.index + 1),
          c = Math.max(0, m - t.visibleOptionCount);
        return { ...t, focusedValue: l.value, visibleFromIndex: c, visibleToIndex: m };
      }
      case "focus-previous-page": {
        if (t.focusedValue === void 0) return t;
        let i = t.optionMap.get(t.focusedValue);
        if (!i) return t;
        let a = Math.max(0, i.index - t.visibleOptionCount),
          l = t.optionMap.first;
        while (l && l.index < a)
          if (l.next) l = l.next;
          else break;
        if (!l) return t;
        let m = Math.max(0, l.index),
          c = Math.min(t.optionMap.size, m + t.visibleOptionCount);
        return { ...t, focusedValue: l.value, visibleFromIndex: m, visibleToIndex: c };
      }
      case "reset":
        return o.state;
      case "scroll-viewport": {
        let i = Math.min(
          Math.max(0, t.optionMap.size - t.visibleOptionCount),
          Math.max(0, t.visibleFromIndex + o.delta)
        );
        if (i === t.visibleFromIndex) return t;
        let a = Math.min(t.optionMap.size, i + t.visibleOptionCount),
          l = t.focusedValue === void 0 ? void 0 : t.optionMap.get(t.focusedValue);
        while (l?.next && l.index < i) l = l.next;
        while (l?.previous && l.index >= a) l = l.previous;
        return { ...t, focusedValue: l?.value, visibleFromIndex: i, visibleToIndex: a };
      }
      case "set-focus": {
        if (t.focusedValue === o.value) return t;
        let i = t.optionMap.get(o.value);
        if (!i) return t;
        if (i.index >= t.visibleFromIndex && i.index < t.visibleToIndex)
          return { ...t, focusedValue: o.value };
        let a, l;
        if (i.index < t.visibleFromIndex)
          ((a = i.index), (l = Math.min(t.optionMap.size, a + t.visibleOptionCount)));
        else
          ((l = Math.min(t.optionMap.size, i.index + 1)),
            (a = Math.max(0, l - t.visibleOptionCount)));
        return { ...t, focusedValue: o.value, visibleFromIndex: a, visibleToIndex: l };
      }
    }
  },
  dl = ({ visibleOptionCount: t, options: o, initialFocusValue: i, currentViewport: a }) => {
    let l = typeof t === "number" ? Math.min(t, o.length) : o.length,
      m = new Mo(o),
      c = i !== void 0 && m.get(i),
      u = c ? i : m.first?.value,
      g = 0,
      d = l;
    if (c) {
      let b = c.index;
      if (a)
        if (b >= a.visibleFromIndex && b < a.visibleToIndex) {
          if (((g = a.visibleFromIndex), (d = Math.min(m.size, g + l)), b >= d))
            ((d = Math.min(m.size, b + 1)), (g = Math.max(0, d - l)));
          if (d - g < l) g = Math.max(0, d - l);
        } else if (b < a.visibleFromIndex) {
          if (((g = b), (d = Math.min(m.size, g + l)), d - g < l)) g = Math.max(0, d - l);
        } else ((d = Math.min(m.size, b + 1)), (g = Math.max(0, d - l)));
      else if (b >= l) ((d = Math.min(m.size, b + 1)), (g = Math.max(0, d - l)));
      ((g = Math.max(0, Math.min(g, m.size - 1))), (d = Math.min(m.size, Math.max(l, d))));
    }
    return {
      optionMap: m,
      visibleOptionCount: l,
      focusedValue: u,
      visibleFromIndex: g,
      visibleToIndex: d
    };
  };
function ugr({ visibleOptionCount: t = 5, options: o, onFocus: i, focusValue: a }) {
  let [l, m, c] = au(() => dl({ visibleOptionCount: t, options: o, initialFocusValue: a })),
    u = de(
      (v) => {
        m((ae) => gc(ae, v));
      },
      [m]
    ),
    g = Bo((v) => i?.(v)),
    d = C(void 0),
    [b, k] = y(o),
    [x, I] = y(t),
    B = o !== b && !bc(o, b),
    N = t !== x;
  if (B || N) {
    let v = c();
    if (
      (u({
        type: "reset",
        state: dl({
          visibleOptionCount: t,
          options: o,
          initialFocusValue: B ? (a ?? v.focusedValue) : (v.focusedValue ?? a),
          currentViewport: {
            visibleFromIndex: v.visibleFromIndex,
            visibleToIndex: v.visibleToIndex
          }
        })
      }),
      B)
    )
      k(o);
    if (N) I(t);
  }
  let h = de(
      (v) => {
        u(v);
        let ae = Ri(c().focusedValue, o);
        if (ae !== void 0 && ae !== d.current) ((d.current = ae), i?.(ae));
      },
      [u, c, o, i]
    ),
    K = de(() => {
      h({ type: "focus-next-option" });
    }, [h]),
    f = de(() => {
      h({ type: "focus-previous-option" });
    }, [h]),
    A = de(() => {
      h({ type: "focus-next-page" });
    }, [h]),
    O = de(() => {
      h({ type: "focus-previous-page" });
    }, [h]),
    T = de(
      (v) => {
        let ae = c().visibleFromIndex;
        return (h({ type: "scroll-viewport", delta: v }), c().visibleFromIndex !== ae);
      },
      [h, c]
    ),
    L = de(
      (v) => {
        if (v !== void 0) h({ type: "set-focus", value: v });
      },
      [h]
    ),
    R = ee(
      () => o.map((v, ae) => ({ ...v, index: ae })).slice(l.visibleFromIndex, l.visibleToIndex),
      [o, l.visibleFromIndex, l.visibleToIndex]
    ),
    E = ee(() => Ri(l.focusedValue, o), [l.focusedValue, o]),
    H = de(() => Ri(c().focusedValue, o), [c, o]);
  return (
    P(() => {
      if (E === void 0) {
        d.current = void 0;
        return;
      }
      if (E !== d.current) ((d.current = E), g(E));
    }, [E]),
    P(() => {
      if (a !== void 0) u({ type: "set-focus", value: a });
    }, [a, u]),
    {
      focusedValue: E,
      getFocusedValue: H,
      visibleFromIndex: l.visibleFromIndex,
      visibleToIndex: l.visibleToIndex,
      visibleOptions: R,
      focusNextOption: K,
      focusPreviousOption: f,
      focusNextPage: A,
      focusPreviousPage: O,
      focusOption: L,
      scrollViewport: T,
      options: o
    }
  );
}
function Ri(t, o) {
  if (t === void 0) return;
  if (o.some((i) => i.value === t)) return t;
  return o[0]?.value;
}
function Mi({
  visibleOptionCount: t = 5,
  options: o,
  defaultValue: i,
  selectedValue: a,
  onChange: l,
  onCancel: m,
  onFocus: c,
  focusValue: u
}) {
  let [g, d] = y(i),
    b = ugr({ visibleOptionCount: t, options: o, onFocus: c, focusValue: u }),
    { getFocusedValue: k } = b,
    x = de(() => {
      d(k());
    }, [k]);
  return { ...b, value: a !== void 0 ? a : g, selectFocusedOption: x, onChange: l, onCancel: m };
}
j();
function x8t({
  isDisabled: t,
  visibleFromIndex: o,
  visibleToIndex: i,
  optionCount: a,
  scrollViewport: l,
  shouldDropWheel: m
}) {
  let c = C(null);
  if (t || i - o >= a) return { ref: c, onWheel: void 0 };
  return {
    ref: c,
    onWheel: (g) => {
      if (g.deltaY === 0 || m()) return;
      let d = c.current;
      if (d !== null && g.col !== void 0 && g.row !== void 0 && W6(d, g.col, g.row) === null)
        return;
      if (l(g.deltaY > 0 ? 1 : -1)) g.stopImmediatePropagation();
    }
  };
}
function qp(Wf) {
  return Wf.type === "input";
}
function Yp(Bf) {
  return Bf.description;
}
function Jp(Nf) {
  return Nf.type === "image";
}
function Xp(Lf) {
  return Lf.type === "image";
}
function Qp() {
  return { bold: !0 };
}
function Zp(Uf) {
  return Uf.type === "image";
}
function ef(Kf) {
  return Kf.type === "image";
}
function tf($f) {
  return $f.type === "image";
}
var xs = Symbol("NO_COMMITTED_ROW");
function Je(t) {
  let a = w(12);
  if (rt()) {
    const i = t.selectedValue === xs ? t.defaultValue : (t.selectedValue ?? t.defaultValue);
    let l;
    if (
      a[0] !== t.disableSelection ||
      a[1] !== t.hidePromptWhileDisabled ||
      a[2] !== t.isDisabled ||
      a[3] !== t.onCancel ||
      a[4] !== t.onChange ||
      a[5] !== t.onFocus ||
      a[6] !== t.options ||
      a[7] !== t.refuseInput ||
      a[8] !== i
    )
      ((l = e(Bee, {
        options: t.options,
        onChange: t.onChange,
        onFocus: t.onFocus,
        onCancel: t.onCancel,
        isDisabled: t.isDisabled,
        disableSelection: t.disableSelection,
        refuseInput: t.refuseInput,
        hidePromptWhileDisabled: t.hidePromptWhileDisabled,
        defaultValue: i
      })),
        (a[0] = t.disableSelection),
        (a[1] = t.hidePromptWhileDisabled),
        (a[2] = t.isDisabled),
        (a[3] = t.onCancel),
        (a[4] = t.onChange),
        (a[5] = t.onFocus),
        (a[6] = t.options),
        (a[7] = t.refuseInput),
        (a[8] = i),
        (a[9] = l));
    else l = a[9];
    return l;
  }
  let i;
  if (a[10] !== t) ((i = e(ns, { ...t })), (a[10] = t), (a[11] = i));
  else i = a[11];
  return i;
}
function ns(t) {
  let W = w(84),
    {
      isDisabled: o,
      hideIndexes: i,
      disablePrintableKeybindings: a,
      visibleOptionCount: l,
      hiddenBelowUnit: m,
      highlightText: c,
      options: u,
      columnSizingOptions: g,
      defaultValue: d,
      selectedValue: b,
      onCancel: k,
      onChange: x,
      onFocus: I,
      defaultFocusValue: B,
      layout: N,
      disableSelection: h,
      inlineDescriptions: K,
      hoverStyle: f,
      inputChromeWidth: A,
      onUpFromFirstItem: O,
      onDownFromLastItem: T,
      onInputModeToggle: L,
      onOpenEditor: R,
      canPasteImage: E,
      onImagePaste: H,
      pastedContents: v,
      onRemoveImage: ae,
      pointerWhileDisabled: ve
    } = t,
    q = o === void 0 ? !1 : o,
    Y = i === void 0 ? !1 : i,
    ye = a === void 0 ? !1 : a,
    pe = l === void 0 ? 5 : l,
    X = g === void 0 ? u : g,
    D = N === void 0 ? "compact" : N,
    xe = h === void 0 ? !1 : h,
    U = K === void 0 ? !1 : K,
    fe = A === void 0 ? 0 : A,
    J = ve === void 0 ? !1 : ve,
    [se, Oe] = y(!1),
    [Ve, te] = y(0),
    Se;
  if (W[0] !== u)
    ((Se = () => {
      let Z = new Map();
      return (
        u.forEach(($e) => {
          if ($e.type === "input" && $e.initialValue) Z.set($e.value, $e.initialValue);
        }),
        Z
      );
    }),
      (W[0] = u),
      (W[1] = Se));
  else Se = W[1];
  let [we, ut] = y(Se),
    Ae;
  if (W[2] === S) ((Ae = new Map()), (W[2] = Ae));
  else Ae = W[2];
  let Wt = C(Ae),
    Vt,
    Bt;
  if (W[3] !== we || W[4] !== u)
    ((Vt = () => {
      for (const Fe of u) {
        if (Fe.type === "input" && Fe.initialValue !== void 0) {
          let It = Wt.current.get(Fe.value) ?? "";
          let He = we.get(Fe.value) ?? "";
          let ke = Fe.initialValue;
          if (ke !== It && He === It)
            ut((it) => {
              let qe = new Map(it);
              return (qe.set(Fe.value, ke), qe);
            });
          Wt.current.set(Fe.value, ke);
        }
      }
    }),
      (Bt = [u, we]),
      (W[3] = we),
      (W[4] = u),
      (W[5] = Vt),
      (W[6] = Bt));
  else ((Vt = W[5]), (Bt = W[6]));
  P(Vt, Bt);
  let at = D === "compact" && !U && !X.some(qp) && X.some(Yp),
    { columns: dt } = ds(Te());
  const De = cUe(pe, at ? "compact-vertical" : D);
  let We;
  if (
    W[7] !== B ||
    W[8] !== d ||
    W[9] !== k ||
    W[10] !== x ||
    W[11] !== I ||
    W[12] !== u ||
    W[13] !== b ||
    W[14] !== De
  )
    ((We = {
      visibleOptionCount: De,
      options: u,
      defaultValue: d,
      selectedValue: b,
      onChange: x,
      onCancel: k,
      onFocus: I,
      focusValue: B
    }),
      (W[7] = B),
      (W[8] = d),
      (W[9] = k),
      (W[10] = x),
      (W[11] = I),
      (W[12] = u),
      (W[13] = b),
      (W[14] = De),
      (W[15] = We));
  else We = W[15];
  let p = Mi(We),
    [Ft, yt] = y(!0),
    Be = aw(),
    St = nPt(),
    kt;
  if (W[16] !== xe || W[17] !== q || W[18] !== J || W[19] !== Be || W[20] !== p)
    ((kt = (ct) =>
      (q && !J) || xe === !0 || ct.disabled === !0
        ? void 0
        : (sn) => {
            if (Be(sn)) {
              return;
            }
            if (ct.type === "input") p.focusOption(ct.value);
            else p.onChange?.(ct.value);
          }),
      (W[16] = xe),
      (W[17] = q),
      (W[18] = J),
      (W[19] = Be),
      (W[20] = p),
      (W[21] = kt));
  else kt = W[21];
  let je = kt;
  const Nt = xe || (Y ? "numeric" : !1);
  let Ye;
  if (W[22] !== v)
    ((Ye = () => {
      if (v && Object.values(v).some(Jp)) {
        let rn = F(Object.values(v), Xp);
        return (Oe(!0), te(rn - 1), !0);
      }
      return !1;
    }),
      (W[22] = v),
      (W[23] = Ye));
  else Ye = W[23];
  let _n;
  if (W[24] === S)
    ((_n = () => {
      Oe(!1);
    }),
      (W[24] = _n));
  else _n = W[24];
  let Lt;
  if (
    W[25] !== Ft ||
    W[26] !== se ||
    W[27] !== we ||
    W[28] !== q ||
    W[29] !== T ||
    W[30] !== L ||
    W[31] !== O ||
    W[32] !== u ||
    W[33] !== p ||
    W[34] !== Nt ||
    W[35] !== Ye
  )
    ((Lt = {
      isDisabled: q,
      hasInkFocus: Ft,
      disableSelection: Nt,
      state: p,
      options: u,
      isMultiSelect: !1,
      onUpFromFirstItem: O,
      onDownFromLastItem: T,
      onInputModeToggle: L,
      inputValues: we,
      imagesSelected: se,
      onEnterImageSelection: Ye,
      onExitImageSelection: _n
    }),
      (W[25] = Ft),
      (W[26] = se),
      (W[27] = we),
      (W[28] = q),
      (W[29] = T),
      (W[30] = L),
      (W[31] = O),
      (W[32] = u),
      (W[33] = p),
      (W[34] = Nt),
      (W[35] = Ye),
      (W[36] = Lt));
  else Lt = W[36];
  let { handleKeyDown: Gn } = ki(Lt),
    qn = C(null);
  R_(qn, !q);
  let pt = {
      container: () => ({
        flexDirection: "column",
        ref: qn,
        ...(q
          ? {}
          : {
              tabIndex: 0,
              textEntry: ye ? !0 : void 0,
              onKeyDown: Gn,
              onFocus: () => yt(!0),
              onBlur: () => yt(!1)
            })
      }),
      highlightedText: Qp
    },
    ln;
  if (
    W[37] !== m ||
    W[38] !== u.length ||
    W[39] !== p.visibleFromIndex ||
    W[40] !== p.visibleToIndex
  )
    ((ln =
      m !== void 0 && p.visibleToIndex - p.visibleFromIndex < u.length
        ? e(s, {
            paddingLeft: 3,
            height: 1,
            children: e(tb, { count: u.length - p.visibleToIndex, unit: m })
          })
        : null),
      (W[37] = m),
      (W[38] = u.length),
      (W[39] = p.visibleFromIndex),
      (W[40] = p.visibleToIndex),
      (W[41] = ln));
  else ln = W[41];
  let wt = ln,
    Ct;
  if (
    W[42] !== q ||
    W[43] !== u.length ||
    W[44] !== St ||
    W[45] !== p.scrollViewport ||
    W[46] !== p.visibleFromIndex ||
    W[47] !== p.visibleToIndex
  )
    ((Ct = {
      isDisabled: q,
      visibleFromIndex: p.visibleFromIndex,
      visibleToIndex: p.visibleToIndex,
      optionCount: u.length,
      scrollViewport: p.scrollViewport,
      shouldDropWheel: St
    }),
      (W[42] = q),
      (W[43] = u.length),
      (W[44] = St),
      (W[45] = p.scrollViewport),
      (W[46] = p.visibleFromIndex),
      (W[47] = p.visibleToIndex),
      (W[48] = Ct));
  else Ct = W[48];
  let ht = x8t(Ct);
  if (D === "expanded") {
    let Xe;
    if (W[49] !== Y || W[50] !== p.options)
      ((Xe = Y ? 0 : p.options.length.toString().length),
        (W[49] = Y),
        (W[50] = p.options),
        (W[51] = Xe));
    else Xe = W[51];
    let un = Xe;
    return e(Dt, {
      container: pt.container(),
      rows: ht,
      hiddenBelow: wt,
      children: p.visibleOptions.map((_, dn) => {
        let bt = _.index === p.visibleFromIndex;
        let Ut = _.index === p.visibleToIndex - 1;
        let cn = p.visibleToIndex < u.length;
        let Qe = p.visibleFromIndex > 0;
        let On = p.visibleFromIndex + dn + 1;
        let pn = !q && p.focusedValue === _.value;
        let fn = p.value === _.value;
        if (_.type === "input") {
          let Yn = we.has(_.value) ? we.get(_.value) : _.initialValue || "";
          return e(
            OPe,
            {
              option: _,
              onClick: je(_),
              hoverStyle: f,
              isFocused: pn,
              isSelected: fn,
              shouldShowDownArrow: cn && Ut,
              shouldShowUpArrow: Qe && bt,
              maxIndexWidth: un,
              index: On,
              hideIndex: Y,
              extraChromeWidth: fe,
              inputValue: Yn,
              onInputChange: (is) => {
                ut((Ql) => {
                  let ss = new Map(Ql);
                  return (ss.set(_.value, is), ss);
                });
              },
              onSubmit: (Zl) => {
                let ea = v && Object.values(v).some(Zp);
                if (Zl.trim() || ea || _.allowEmptySubmitToCancel) x?.(_.value);
                else if (!_.ignoreEmptySubmit) k?.();
              },
              onExit: k,
              layout: "expanded",
              showLabel: U,
              onOpenEditor: R,
              resetCursorOnUpdate: _.resetCursorOnUpdate,
              canPasteImage: E,
              onImagePaste: H,
              pastedContents: v,
              onRemoveImage: ae,
              imagesSelected: se,
              selectedImageIndex: Ve,
              onImagesSelectedChange: Oe,
              onSelectedImageIndexChange: te
            },
            String(_.value)
          );
        }
        let rs = _.label;
        if (typeof _.label === "string" && c && _.label.includes(c)) {
          let ls = _.label;
          let ta = ls.indexOf(c);
          rs = r(Q, {
            children: [
              ls.slice(0, ta),
              e(n, { ...pt.highlightedText(), children: c }),
              ls.slice(ta + c.length)
            ]
          });
        }
        let as = _.disabled === !0;
        let na = as ? void 0 : fn ? "success" : pn ? "suggestion" : void 0;
        return r(
          s,
          {
            flexDirection: "column",
            flexShrink: 0,
            children: [
              e(Yie, {
                isFocused: pn,
                isSelected: fn,
                shouldShowDownArrow: cn && Ut,
                shouldShowUpArrow: Qe && bt,
                onClick: je(_),
                hoverStyle: f,
                children: e(n, { dimColor: as, color: na, children: rs })
              }),
              _.description &&
                e(s, {
                  paddingLeft: 2,
                  children: e(n, {
                    dimColor: as || _.dimDescription !== !1,
                    color: na,
                    children: e(ts, { children: _.description })
                  })
                }),
              e(n, { children: " " })
            ]
          },
          String(_.value)
        );
      })
    });
  }
  if (D === "compact-vertical") {
    let Xe;
    if (W[52] !== Y || W[53] !== p.options)
      ((Xe = Y ? 0 : p.options.length.toString().length),
        (W[52] = Y),
        (W[53] = p.options),
        (W[54] = Xe));
    else Xe = W[54];
    let us = Xe;
    return e(Dt, {
      container: pt.container(),
      rows: ht,
      hiddenBelow: wt,
      children: p.visibleOptions.map((re, nf) => {
        let oa = re.index === p.visibleFromIndex;
        let ia = re.index === p.visibleToIndex - 1;
        let sa = p.visibleToIndex < u.length;
        let ra = p.visibleFromIndex > 0;
        let la = p.visibleFromIndex + nf + 1;
        let Xo = !q && p.focusedValue === re.value;
        let Qo = p.value === re.value;
        if (re.type === "input") {
          let of = we.has(re.value) ? we.get(re.value) : re.initialValue || "";
          return e(
            OPe,
            {
              option: re,
              onClick: je(re),
              hoverStyle: f,
              isFocused: Xo,
              isSelected: Qo,
              shouldShowDownArrow: sa && ia,
              shouldShowUpArrow: ra && oa,
              maxIndexWidth: us,
              index: la,
              hideIndex: Y,
              extraChromeWidth: fe,
              inputValue: of,
              onInputChange: (sf) => {
                ut((rf) => {
                  let aa = new Map(rf);
                  return (aa.set(re.value, sf), aa);
                });
              },
              onSubmit: (lf) => {
                let af = v && Object.values(v).some(ef);
                if (lf.trim() || af || re.allowEmptySubmitToCancel) x?.(re.value);
                else if (!re.ignoreEmptySubmit) k?.();
              },
              onExit: k,
              layout: "compact",
              showLabel: U,
              onOpenEditor: R,
              resetCursorOnUpdate: re.resetCursorOnUpdate,
              canPasteImage: E,
              onImagePaste: H,
              pastedContents: v,
              onRemoveImage: ae,
              imagesSelected: se,
              selectedImageIndex: Ve,
              onImagesSelectedChange: Oe,
              onSelectedImageIndexChange: te
            },
            String(re.value)
          );
        }
        let ua = re.label;
        if (typeof re.label === "string" && c && re.label.includes(c)) {
          let cs = re.label;
          let da = cs.indexOf(c);
          ua = r(Q, {
            children: [
              cs.slice(0, da),
              e(n, { ...pt.highlightedText(), children: c }),
              cs.slice(da + c.length)
            ]
          });
        }
        let Zo = re.disabled === !0;
        return r(
          s,
          {
            flexDirection: "column",
            flexShrink: 0,
            children: [
              e(Yie, {
                isFocused: Xo,
                isSelected: Qo,
                shouldShowDownArrow: sa && ia,
                shouldShowUpArrow: ra && oa,
                onClick: je(re),
                hoverStyle: f,
                children: r(Q, {
                  children: [
                    !Y && e(n, { dimColor: !0, children: `${la}.`.padEnd(us + 1) }),
                    e(n, {
                      dimColor: Zo,
                      color: Zo ? void 0 : Qo ? "success" : Xo ? "suggestion" : void 0,
                      children: ua
                    })
                  ]
                })
              }),
              re.description &&
                e(s, {
                  paddingLeft: Y ? 4 : us + 4,
                  children: e(n, {
                    dimColor: Zo || re.dimDescription !== !1,
                    color: Zo ? void 0 : Qo ? "success" : Xo ? "suggestion" : void 0,
                    children: e(ts, { children: re.description })
                  })
                })
            ]
          },
          String(re.value)
        );
      })
    });
  }
  let Xe;
  if (W[55] !== X || W[56] !== Y)
    ((Xe = Y ? 0 : X.length.toString().length), (W[55] = X), (W[56] = Y), (W[57] = Xe));
  else Xe = W[57];
  let Kt = Xe;
  if (at) {
    let $t, Jn;
    if (W[58] !== dt || W[59] !== X || W[60] !== Y || W[61] !== Kt || W[62] !== p.value) {
      $t = Y ? 0 : Kt + 2;
      let Ht;
      if (W[65] !== X || W[66] !== $t || W[67] !== p.value) {
        let Rt;
        if (W[69] !== $t || W[70] !== p.value)
          ((Rt = (ps) => {
            if (ps.type === "input") {
              return 0;
            }
            let uf = p.value === ps.value ? 2 : 0;
            return 2 + $t + le(ZM(ps.label)) + uf;
          }),
            (W[69] = $t),
            (W[70] = p.value),
            (W[71] = Rt));
        else Rt = W[71];
        Ht = Math.max(...X.map(Rt));
        ((W[65] = X), (W[66] = $t), (W[67] = p.value), (W[68] = Ht));
      } else Ht = W[68];
      Jn = Math.min(Ht, Math.floor(dt * Gl));
      ((W[58] = dt),
        (W[59] = X),
        (W[60] = Y),
        (W[61] = Kt),
        (W[62] = p.value),
        (W[63] = $t),
        (W[64] = Jn));
    } else (($t = W[63]), (Jn = W[64]));
    let vf = p.visibleOptions.map((jt, df) => {
      let cf = jt.index === p.visibleFromIndex;
      let pf = jt.index === p.visibleToIndex - 1;
      let ff = p.visibleToIndex < u.length;
      let mf = p.visibleFromIndex > 0;
      let hf = p.visibleFromIndex + df + 1;
      let bf = !q && p.focusedValue === jt.value;
      let ca = p.value === jt.value;
      let gf = jt.disabled === !0;
      let pa = ca ? 2 : 0;
      let Xn = ZM(jt.label);
      let Tn = jt.label;
      let fa = Jn - 2 - $t - pa;
      if (le(Xn) > fa) ((Xn = gt(Xn, fa)), (Tn = Xn));
      if (typeof Tn === "string" && c && Tn.includes(c)) {
        let fs = Tn;
        let ma = fs.indexOf(c);
        Tn = r(Q, {
          children: [
            fs.slice(0, ma),
            e(n, { ...pt.highlightedText(), children: c }),
            fs.slice(ma + c.length)
          ]
        });
      }
      return {
        option: jt,
        index: hf,
        label: Tn,
        labelWidth: 2 + $t + le(Xn) + pa,
        isFocused: bf,
        isSelected: ca,
        isOptionDisabled: gf,
        shouldShowDownArrow: ff && pf,
        shouldShowUpArrow: mf && cf
      };
    });
    const Ht = pt.container();
    let Rt;
    if (W[72] !== je || W[73] !== Y || W[74] !== f || W[75] !== Kt || W[76] !== Jn)
      ((Rt = (me) => {
        if (me.option.type === "input") {
          return null;
        }
        let ha = Jn - me.labelWidth;
        return r(
          os,
          {
            isFocused: me.isFocused,
            shouldShowDownArrow: me.shouldShowDownArrow,
            shouldShowUpArrow: me.shouldShowUpArrow,
            onClick: je(me.option),
            hoverStyle: f,
            children: [
              r(s, {
                flexDirection: "row",
                flexShrink: 0,
                children: [
                  e(n, { children: " " }),
                  r(n, {
                    dimColor: me.isOptionDisabled,
                    color: me.isOptionDisabled
                      ? void 0
                      : me.isSelected
                        ? "success"
                        : me.isFocused
                          ? "suggestion"
                          : void 0,
                    children: [
                      !Y && e(n, { dimColor: !0, children: `${me.index}.`.padEnd(Kt + 2) }),
                      me.label
                    ]
                  }),
                  me.isSelected && r(n, { children: [" ", e(mt, { status: "success" })] }),
                  ha > 0 && e(n, { children: " ".repeat(ha) })
                ]
              }),
              e(s, {
                flexGrow: 1,
                marginLeft: 2,
                children: e(n, {
                  wrap: "wrap",
                  dimColor:
                    me.option.descriptionColor === void 0 &&
                    (me.isOptionDisabled || me.option.dimDescription !== !1),
                  color: me.isOptionDisabled
                    ? me.option.descriptionColor
                    : me.isSelected
                      ? "success"
                      : me.isFocused
                        ? "suggestion"
                        : me.option.descriptionColor,
                  children: e(ts, { children: me.option.description || " " })
                })
              })
            ]
          },
          String(me.option.value)
        );
      }),
        (W[72] = je),
        (W[73] = Y),
        (W[74] = f),
        (W[75] = Kt),
        (W[76] = Jn),
        (W[77] = Rt));
    else Rt = W[77];
    return e(Dt, { container: Ht, rows: ht, hiddenBelow: wt, children: vf.map(Rt) });
  }
  const ms = Dt,
    Ht = pt.container(),
    Rt = p.visibleOptions.map((G, ba) => {
      if (G.type === "input") {
        let xf = we.has(G.value) ? we.get(G.value) : G.initialValue || "";
        let If = G.index === p.visibleFromIndex;
        let yf = G.index === p.visibleToIndex - 1;
        let Sf = p.visibleToIndex < u.length;
        let wf = p.visibleFromIndex > 0;
        let Cf = p.visibleFromIndex + ba + 1;
        let Of = !q && p.focusedValue === G.value;
        let Tf = p.value === G.value;
        return e(
          OPe,
          {
            option: G,
            onClick: je(G),
            hoverStyle: f,
            isFocused: Of,
            isSelected: Tf,
            shouldShowDownArrow: Sf && yf,
            shouldShowUpArrow: wf && If,
            maxIndexWidth: Kt,
            index: Cf,
            hideIndex: Y,
            extraChromeWidth: fe,
            inputValue: xf,
            onInputChange: (Df) => {
              ut((Vf) => {
                let va = new Map(Vf);
                return (va.set(G.value, Df), va);
              });
            },
            onSubmit: (Ff) => {
              let kf = v && Object.values(v).some(tf);
              if (Ff.trim() || kf || G.allowEmptySubmitToCancel) x?.(G.value);
              else if (!G.ignoreEmptySubmit) k?.();
            },
            onExit: k,
            layout: "compact",
            showLabel: U,
            onOpenEditor: R,
            resetCursorOnUpdate: G.resetCursorOnUpdate,
            canPasteImage: E,
            onImagePaste: H,
            pastedContents: v,
            onRemoveImage: ae,
            imagesSelected: se,
            selectedImageIndex: Ve,
            onImagesSelectedChange: Oe,
            onSelectedImageIndexChange: te
          },
          String(G.value)
        );
      }
      let xa = G.label;
      if (typeof G.label === "string" && c && G.label.includes(c)) {
        let hs = G.label;
        let Ia = hs.indexOf(c);
        xa = r(Q, {
          children: [
            hs.slice(0, Ia),
            e(n, { ...pt.highlightedText(), children: c }),
            hs.slice(Ia + c.length)
          ]
        });
      }
      let Rf = G.index === p.visibleFromIndex;
      let Mf = G.index === p.visibleToIndex - 1;
      let Ef = p.visibleToIndex < u.length;
      let Pf = p.visibleFromIndex > 0;
      let Af = p.visibleFromIndex + ba + 1;
      let bs = !q && p.focusedValue === G.value;
      let gs = p.value === G.value;
      let Zn = G.disabled === !0;
      return r(
        Yie,
        {
          isFocused: bs,
          isSelected: gs,
          shouldShowDownArrow: Ef && Mf,
          shouldShowUpArrow: Pf && Rf,
          onClick: je(G),
          hoverStyle: f,
          children: [
            r(s, {
              flexDirection: "row",
              flexShrink: 0,
              children: [
                !Y && e(n, { dimColor: !0, children: `${Af}.`.padEnd(Kt + 2) }),
                r(n, {
                  dimColor: Zn,
                  color: Zn ? void 0 : gs ? "success" : bs ? "suggestion" : void 0,
                  children: [
                    xa,
                    U &&
                      G.description &&
                      r(n, {
                        dimColor: Zn || G.dimDescription !== !1,
                        children: [" ", G.description]
                      })
                  ]
                })
              ]
            }),
            !U &&
              G.description &&
              e(s, {
                flexShrink: 99,
                marginLeft: 2,
                children: e(n, {
                  wrap: "wrap-trim",
                  dimColor: Zn || G.dimDescription !== !1,
                  color: Zn ? void 0 : gs ? "success" : bs ? "suggestion" : void 0,
                  children: e(ts, { children: G.description })
                })
              })
          ]
        },
        String(G.value)
      );
    });
  let ya;
  if (W[78] !== ms || W[79] !== wt || W[80] !== ht || W[81] !== Ht || W[82] !== Rt)
    ((ya = e(ms, { container: Ht, rows: ht, hiddenBelow: wt, children: Rt })),
      (W[78] = ms),
      (W[79] = wt),
      (W[80] = ht),
      (W[81] = Ht),
      (W[82] = Rt),
      (W[83] = ya));
  else ya = W[83];
  return ya;
}
var _l = 8,
  Gl = 0.6;
function cUe(t, o) {
  let i = o === void 0 ? "compact" : o,
    { rows: a } = ds(Te()),
    l = i === "expanded" ? 3 : i === "compact" ? 1 : 2,
    m = Math.max(1, Math.floor((a - _l) / l));
  return Math.min(t, m);
}
function Dt(t) {
  let m = w(7),
    { container: o, rows: i, hiddenBelow: a, children: l } = t,
    c;
  if (m[0] !== l || m[1] !== i)
    ((c = e(IPe, { ...i, children: l })), (m[0] = l), (m[1] = i), (m[2] = c));
  else c = m[2];
  let u;
  if (m[3] !== o || m[4] !== a || m[5] !== c)
    ((u = r(s, { ...o, children: [c, a] })), (m[3] = o), (m[4] = a), (m[5] = c), (m[6] = u));
  else u = m[6];
  return u;
}
function os(t) {
  let x = w(24),
    {
      isFocused: o,
      shouldShowDownArrow: i,
      shouldShowUpArrow: a,
      onClick: l,
      hoverStyle: m,
      children: c
    } = t,
    u = l !== void 0,
    [g, d] = m6e(u),
    b = PPe(m),
    k = u && g && b === "inverse",
    I;
  if (x[0] !== o) ((I = { line: 0, column: 0, active: o }), (x[0] = o), (x[1] = I));
  else I = x[1];
  let B = wk(I);
  const N = u && g && b === "tint" ? wT : void 0;
  let h;
  if (x[2] !== u || x[3] !== d)
    ((h = u ? () => d(!0) : void 0), (x[2] = u), (x[3] = d), (x[4] = h));
  else h = x[4];
  let K;
  if (x[5] !== u || x[6] !== d)
    ((K = u ? () => d(!1) : void 0), (x[5] = u), (x[6] = d), (x[7] = K));
  else K = x[7];
  let f;
  if (
    x[8] !== u ||
    x[9] !== b ||
    x[10] !== g ||
    x[11] !== k ||
    x[12] !== o ||
    x[13] !== i ||
    x[14] !== a
  )
    ((f = e(s, {
      flexShrink: 0,
      children: o
        ? e(n, { color: "suggestion", inverse: k, children: ne.pointer })
        : i
          ? e(n, { dimColor: !0, inverse: k, children: ne.arrowDown })
          : a
            ? e(n, { dimColor: !0, inverse: k, children: ne.arrowUp })
            : u && g && b === "pointer"
              ? e(n, { dimColor: !0, children: ne.pointer })
              : e(n, { inverse: k, children: " " })
    })),
      (x[8] = u),
      (x[9] = b),
      (x[10] = g),
      (x[11] = k),
      (x[12] = o),
      (x[13] = i),
      (x[14] = a),
      (x[15] = f));
  else f = x[15];
  let A;
  if (
    x[16] !== c ||
    x[17] !== B ||
    x[18] !== l ||
    x[19] !== N ||
    x[20] !== h ||
    x[21] !== K ||
    x[22] !== f
  )
    ((A = r(s, {
      ref: B,
      flexDirection: "row",
      flexShrink: 0,
      backgroundColor: N,
      onClick: l,
      onMouseEnter: h,
      onMouseLeave: K,
      children: [f, c]
    })),
      (x[16] = c),
      (x[17] = B),
      (x[18] = l),
      (x[19] = N),
      (x[20] = h),
      (x[21] = K),
      (x[22] = f),
      (x[23] = A));
  else A = x[23];
  return A;
}
export {
  wT,
  PPe,
  IPe,
  m6e,
  FR,
  Oa,
  eb,
  xc,
  R8t,
  Wo,
  Bee,
  dgr,
  cgr,
  Zxt,
  Yie,
  OPe,
  au,
  ugr,
  x8t,
  xs,
  Je,
  cUe
};

//# sourceMappingURL=chunk-fgf47p3n.js.map
