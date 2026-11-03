// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { Jw, sl, ds, Owe, $lt } from "./chunk-1kj0zhn3.js";
import { Te } from "./chunk-pbpv20s6.js";
import { MW } from "./chunk-rwaeax2b.js";
import { mP } from "./chunk-d8j226h8.js";
import { s, n, wk, HPe, Wee, Ys } from "./chunk-h56pfqh7.js";
import { he } from "./chunk-95k4nfdh.js";
import { le } from "./chunk-vw9e882a.js";
import { an } from "./chunk-kk8f9f8q.js";
import { aw } from "./chunk-y5em6mt4.js";
import { SS } from "./chunk-e2007qpr.js";
import { e, r } from "./chunk-f790ajz4.js";
import { Gt, de, be, Xt, ee, Qh, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function ko(dt) {
  return [dt.props.id ?? dt.props.title, dt.props.title];
}
function xo(Qo) {
  return Qo + 1;
}
function To(Xo, d) {
  let [, xn] = d;
  return Xo + (xn ? le(xn) : 0) + 2 + 1;
}
function Fo(x) {
  return x + 1;
}
function Co(H) {
  return H - 1;
}
var m = Gt({
  selectedTab: void 0,
  width: void 0,
  headerFocused: !1,
  focusHeader: () => {},
  blurHeader: () => {},
  registerOptIn: () => () => {},
  registerNavigationOwner: () => () => {}
});
function sw(d) {
  let h = w(52),
    {
      title: l,
      color: a,
      defaultTab: c,
      children: u,
      hidden: t,
      useFullWidth: b,
      selectedTab: x,
      onTabChange: H,
      banner: v,
      disableNavigation: ge,
      initialHeaderFocused: R,
      contentHeight: I,
      stableHeight: ne,
      navFromContent: Ge
    } = d,
    K = R === void 0 ? !0 : R,
    p = ne === void 0 ? !1 : ne,
    jt = Ge === void 0 ? !1 : Ge,
    { columns: ve } = Te(),
    g = u.map(ko),
    we = c ? g.findIndex((oe) => c === oe[0]) : 0,
    Ue = x !== void 0,
    [Ho, Ro] = y(we !== -1 ? we : 0),
    Ut = Ue ? g.findIndex((yo) => yo[0] === x) : -1,
    D = Ue ? (Ut !== -1 ? Ut : 0) : Ho,
    ke = be(Jw),
    N = Owe(),
    O = $lt(),
    Ye = C(null),
    [xe, So] = y(0),
    re = C(null),
    [Fe, Io] = y(1),
    Yt;
  if (h[0] !== xe || h[1] !== Fe)
    ((Yt = () => {
      let _t = Ye.current ? Ys(Ye.current).height : 0;
      if (_t !== xe) So(_t);
      let qt = re.current ? Math.max(1, Ys(re.current).height) : 1;
      if (qt !== Fe) Io(qt);
    }),
      (h[0] = xe),
      (h[1] = Fe),
      (h[2] = Yt));
  else Yt = h[2];
  Xt(Yt);
  let ie = (t ? 0 : Fe + 1) + xe,
    zt,
    Jt;
  if (h[3] !== O || h[4] !== ie)
    ((zt = () => {
      if (!O) {
        return;
      }
      return (O(ie), () => O(null));
    }),
      (Jt = [O, ie]),
      (h[3] = O),
      (h[4] = ie),
      (h[5] = zt),
      (h[6] = Jt));
  else ((zt = h[5]), (Jt = h[6]));
  Xt(zt, Jt);
  let Qt;
  if (h[7] === S) ((Qt = { rows: 0, columns: 0 }), (h[7] = Qt));
  else Qt = h[7];
  let { rows: Do } = ds(Qt),
    M = O !== null && N !== null,
    _e = N?.attach,
    Ce = M ? Do - ie : void 0,
    Zt;
  if (h[8] !== ke || h[9] !== M)
    ((Zt = ke && M ? { ...ke, claimScrollBox: null } : null),
      (h[8] = ke),
      (h[9] = M),
      (h[10] = Zt));
  else Zt = h[10];
  let qe = Zt,
    wr = !0,
    ae = C(null),
    ze = C(null),
    { focus: W, activeElement: L, focusDirection: Je, blur: Qe } = HPe(),
    [G, se] = y(K),
    $t;
  if (h[11] !== L || h[12] !== W)
    (($t = () => {
      if (!0 && re.current) W(re.current);
      else if (!1 && ae.current) {
        if (L && L !== ae.current && MW(L, ae.current)) ze.current = L;
        W(ae.current);
      }
      se(!0);
    }),
      (h[11] = L),
      (h[12] = W),
      (h[13] = $t));
  else $t = h[13];
  let en = $t,
    tn;
  if (h[14] !== Qe || h[15] !== W)
    ((tn = (nn) => {
      if (!0 && nn) W(nn);
      else Qe();
      ((ze.current = null), se(!1));
    }),
      (h[14] = Qe),
      (h[15] = W),
      (h[16] = tn));
  else tn = h[16];
  let No = tn,
    [B, Oo] = te(),
    [Mo, Wo] = te(),
    E = ge || Mo,
    on = G || !B,
    Xe = C(null),
    Bo = Wee(Xe),
    Eo = !0 && !B ? !Bo : on,
    [rn, Ao] = Qh(xo, 0),
    ln = C(null),
    dn;
  if (h[17] === S)
    ((dn = () => {
      ze.current = null;
    }),
      (h[17] = dn));
  else dn = h[17];
  Xt(dn, [D]);
  let un = (Ze, sn) => {
      let Po = sn === void 0 ? !1 : sn;
      ((ln.current = { epoch: rn, index: Ze }), Ao());
      let cn = g[Ze]?.[0];
      if (Ue && H && cn) H(cn);
      else Ro(Ze);
      if (Po) {
        return;
      }
      en();
    },
    He = (Vo, hn) => {
      let Ko = hn === void 0 ? !1 : hn;
      let fn = ln.current;
      let Lo = fn?.epoch === rn ? fn.index : D;
      un((Lo + g.length + Vo) % g.length, Ko);
    };
  const $e = !t && !E && on;
  let bn;
  if (h[18] !== $e) ((bn = { context: "Tabs", isActive: $e }), (h[18] = $e), (h[19] = bn));
  else bn = h[19];
  an({ "tabs:next": () => He(1), "tabs:previous": () => He(-1) }, bn);
  let pn;
  if (h[20] !== E || h[21] !== Je || h[22] !== G || h[23] !== t || h[24] !== B)
    ((pn = (f) => {
      if (t || E) {
        return;
      }
      if (!G) {
        if (
          f.key === "left" ||
          f.key === "right" ||
          f.key === "tab" ||
          (B && (f.key === "up" || f.key === "down"))
        )
          f.preventDefault();
        return;
      }
      if (f.key === "left" || f.key === "right" || f.key === "tab") f.preventDefault();
      else if (f.key === "down" && B) (f.preventDefault(), Je("down"), se(!1));
    }),
      (h[20] = E),
      (h[21] = Je),
      (h[22] = G),
      (h[23] = t),
      (h[24] = B),
      (h[25] = pn));
  else pn = h[25];
  let mn = pn;
  const et = jt && !G && B && !t && !E;
  let gn;
  if (h[26] !== et) ((gn = { context: "Tabs", isActive: et }), (h[26] = et), (h[27] = gn));
  else gn = h[27];
  an({ "tabs:next": () => He(1, !0), "tabs:previous": () => He(-1, !0) }, gn);
  let jo = l ? le(l) + 1 : 0,
    Go = g.reduce(To, 0),
    Uo = jo + Go,
    vn = b ? Math.max(0, ve - Uo) : 0,
    ce = b ? ve : void 0;
  const Yo = {
      selectedTab: g[D][0],
      width: ce,
      headerFocused: G,
      focusHeader: en,
      blurHeader: No,
      registerOptIn: Oo,
      registerNavigationOwner: Wo
    },
    tt = s,
    nt = !0 ? void 0 : ae,
    _o = "column",
    ot = !0 ? void 0 : 0,
    rt = !0 ? void 0 : K,
    it = !0 ? void 0 : mn,
    at = N ? 0 : void 0,
    lt =
      !t &&
      r(s, {
        ref: re,
        tabIndex: !0 ? 0 : void 0,
        autoFocus: !0 ? K : void 0,
        onFocus: !0 ? () => se(!0) : void 0,
        onBlur: !0 ? () => se(!1) : void 0,
        onKeyDown: !0 ? mn : void 0,
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: 1,
        flexShrink: N ? 0 : void 0,
        alignSelf: !0 && !b ? "flex-start" : void 0,
        children: [
          l !== null &&
            e(s, { flexShrink: 0, children: e(n, { bold: !0, color: a, children: l }) }),
          g.map((qo, wn) => {
            let [zo, Jo] = qo;
            return e(
              je,
              {
                title: Jo,
                isCurrent: D === wn,
                headerFocused: Eo && !E,
                color: a ?? (!0 ? "suggestion" : void 0),
                onClick: E ? void 0 : () => un(wn)
              },
              zo
            );
          }),
          vn > 0 && e(n, { children: " ".repeat(vn) })
        ]
      });
  let Re;
  if (h[28] !== v)
    ((Re = v != null && e(s, { ref: Ye, flexDirection: "column", flexShrink: 0, children: v })),
      (h[28] = v),
      (h[29] = Re));
  else Re = h[29];
  let ye;
  if (
    h[30] !== _e ||
    h[31] !== qe ||
    h[32] !== u ||
    h[33] !== I ||
    h[34] !== ce ||
    h[35] !== t ||
    h[36] !== N ||
    h[37] !== M ||
    h[38] !== Ce ||
    h[39] !== D ||
    h[40] !== p
  )
    ((ye = M
      ? e(s, {
          ref: Xe,
          width: ce,
          marginTop: t ? 0 : 1,
          flexShrink: 0,
          children: e(
            mP,
            {
              ref: _e,
              flexDirection: "column",
              flexShrink: 0,
              height: p ? Ce : void 0,
              maxHeight: p ? void 0 : Ce,
              stickyScroll: !1,
              children: e(Jw, { value: qe, children: u })
            },
            D
          )
        })
      : e(s, {
          ref: Xe,
          width: ce,
          marginTop: t ? 0 : 1,
          height: p ? void 0 : I,
          minHeight: p ? I : void 0,
          overflowY: I !== void 0 && !p ? "hidden" : void 0,
          flexShrink: N ? 0 : void 0,
          children: u
        })),
      (h[30] = _e),
      (h[31] = qe),
      (h[32] = u),
      (h[33] = I),
      (h[34] = ce),
      (h[35] = t),
      (h[36] = N),
      (h[37] = M),
      (h[38] = Ce),
      (h[39] = D),
      (h[40] = p),
      (h[41] = ye));
  else ye = h[41];
  let kn;
  if (
    h[42] !== tt ||
    h[43] !== nt ||
    h[44] !== ot ||
    h[45] !== rt ||
    h[46] !== it ||
    h[47] !== at ||
    h[48] !== lt ||
    h[49] !== Re ||
    h[50] !== ye
  )
    ((kn = r(tt, {
      ref: nt,
      flexDirection: _o,
      tabIndex: ot,
      autoFocus: rt,
      onKeyDown: it,
      flexShrink: at,
      children: [lt, Re, ye]
    })),
      (h[42] = tt),
      (h[43] = nt),
      (h[44] = ot),
      (h[45] = rt),
      (h[46] = it),
      (h[47] = at),
      (h[48] = lt),
      (h[49] = Re),
      (h[50] = ye),
      (h[51] = kn));
  else kn = h[51];
  return e(m.Provider, { value: Yo, children: kn });
}
function je(d) {
  let R = w(18),
    { title: l, isCurrent: a, headerFocused: c, color: u, onClick: t } = d,
    [b, x] = y(!1),
    H = aw(),
    v = t !== void 0;
  const ge = a && c;
  let I;
  if (R[0] !== ge) ((I = { line: 0, column: 1, active: ge }), (R[0] = ge), (R[1] = I));
  else I = R[1];
  let ne = wk(I),
    Ge = he.level === 0,
    K = u && a && c && !Ge,
    p;
  if (R[2] !== t || R[3] !== H)
    ((p =
      t === void 0
        ? void 0
        : (jt) => {
            if (H(jt)) {
              return;
            }
            t();
          }),
      (R[2] = t),
      (R[3] = H),
      (R[4] = p));
  else p = R[4];
  let ve, g;
  if (R[5] === S) ((ve = () => x(!0)), (g = () => x(!1)), (R[5] = ve), (R[6] = g));
  else ((ve = R[5]), (g = R[6]));
  let oe;
  if (R[7] !== v || R[8] !== u || R[9] !== K || R[10] !== b || R[11] !== a || R[12] !== l)
    ((oe = K
      ? e(SS, { color: u, bold: !0, padded: !0, children: l })
      : r(n, { inverse: a, bold: a, underline: b && v, children: [" ", l, " "] })),
      (R[7] = v),
      (R[8] = u),
      (R[9] = K),
      (R[10] = b),
      (R[11] = a),
      (R[12] = l),
      (R[13] = oe));
  else oe = R[13];
  let we;
  if (R[14] !== ne || R[15] !== p || R[16] !== oe)
    ((we = e(s, {
      ref: ne,
      flexShrink: 0,
      onClick: p,
      onMouseEnter: ve,
      onMouseLeave: g,
      children: oe
    })),
      (R[14] = ne),
      (R[15] = p),
      (R[16] = oe),
      (R[17] = we));
  else we = R[17];
  return we;
}
function hl(d) {
  let H = w(4),
    { title: l, id: a, children: c } = d,
    { selectedTab: u, width: t } = be(m),
    b = sl();
  if (u !== (a ?? l)) {
    return null;
  }
  const x = b ? 0 : void 0;
  let v;
  if (H[0] !== c || H[1] !== x || H[2] !== t)
    ((v = e(s, { width: t, flexShrink: x, children: c })),
      (H[0] = c),
      (H[1] = x),
      (H[2] = t),
      (H[3] = v));
  else v = H[3];
  return v;
}
function Mxt() {
  let { width: d } = be(m);
  return d;
}
function Fb() {
  let u = w(6),
    { headerFocused: d, focusHeader: l, blurHeader: a, registerOptIn: c } = be(m),
    t;
  if (u[0] !== c) ((t = [c]), (u[0] = c), (u[1] = t));
  else t = u[1];
  Xt(c, t);
  let b;
  if (u[2] !== a || u[3] !== l || u[4] !== d)
    ((b = { headerFocused: d, focusHeader: l, blurHeader: a }),
      (u[2] = a),
      (u[3] = l),
      (u[4] = d),
      (u[5] = b));
  else b = u[5];
  return b;
}
function te() {
  let a = w(3),
    [d, l] = y(0),
    c;
  if (a[0] === S) ((c = () => (l(Fo), () => l(Co))), (a[0] = c));
  else c = a[0];
  let u = c;
  const t = d > 0;
  let b;
  if (a[1] !== t) ((b = [t, u]), (a[1] = t), (a[2] = b));
  else b = a[2];
  return b;
}
function _lt() {
  let l = w(2),
    { registerNavigationOwner: d } = be(m),
    a;
  if (l[0] !== d) ((a = [d]), (l[0] = d), (l[1] = a));
  else a = l[1];
  Xt(d, a);
}
export { sw, hl, Mxt, Fb, _lt };

//# sourceMappingURL=chunk-cmgqtn3b.js.map
