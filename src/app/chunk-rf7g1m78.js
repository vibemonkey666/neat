// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wG, Adn } from "./chunk-b08qnart.js";
import { Lwe } from "./chunk-b77hptpq.js";
import { w } from "./chunk-7m7t89vx.js";
import { qW, DEr, uD, PMt, LEr } from "./chunk-sdv7wcwv.js";
import { js, r5 } from "./chunk-96sx3c3k.js";
import { e } from "./chunk-f790ajz4.js";
import { $ve, xMt } from "./chunk-62j8frac.js";
import { Gt, de, be, P, ee, y, kt, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
j();
var Ue = () => be(Lwe),
  lL = Ue;
j();
var M = Object.freeze({}),
  k = Gt(M);
function aPt(o) {
  let a = w(6),
    { storageV5: r, credentials: s, children: n } = o,
    t;
  if (a[0] !== s || a[1] !== r)
    ((t = r === void 0 && s === void 0 ? M : { storageV5: r, credentials: s }),
      (a[0] = s),
      (a[1] = r),
      (a[2] = t));
  else t = a[2];
  let C = t,
    q;
  if (a[3] !== n || a[4] !== C)
    ((q = e(k.Provider, { value: C, children: n })), (a[3] = n), (a[4] = C), (a[5] = q));
  else q = a[5];
  return q;
}
function Me() {
  return be(k);
}
var z = "dark",
  i = Gt({
    themeSetting: z,
    setThemeSetting: () => {},
    setPreviewTheme: () => {},
    cancelPreview: () => {},
    currentTheme: z,
    resolvedTheme: wG(z),
    activeThemeOverrides: void 0,
    customThemes: [],
    activeCustomTheme: void 0,
    reloadCustomThemes: () => Promise.resolve(),
    setPreviewOverrides: () => {}
  });
function vIn() {
  return js("theme", "dark").value;
}
function EIn(o) {
  let t = w(46),
    { children: r, initialState: s, onThemeSave: n } = o,
    { storageV5: a } = Me(),
    C;
  if (t[0] !== n || t[1] !== a)
    ((C = (q) => (n ? n(q) : r5("theme", q, a))), (t[0] = n), (t[1] = a), (t[2] = C));
  else C = t[2];
  let I = C,
    [T, rt] = y(s ?? vIn),
    [it, J] = y(null),
    [nt, st] = y(null),
    [K, mt] = y(DEr),
    ue;
  if (t[3] === S) ((ue = qW()), (t[3] = ue));
  else ue = t[3];
  let ve = ue.pluginThemes,
    Q = kt(ve.subscribe, ve.getState),
    le;
  if (t[4] !== Q || t[5] !== K) ((le = [...K, ...Q]), (t[4] = Q), (t[5] = K), (t[6] = le));
  else le = t[6];
  let u = le,
    Se;
  if (t[7] !== s || t[8] !== T)
    ((Se = () => ((s ?? T) === "auto" ? $ve() : "dark")), (t[7] = s), (t[8] = T), (t[9] = Se));
  else Se = t[9];
  let [ot, O] = y(Se),
    m = it ?? T,
    ge;
  if (t[10] !== a) ((ge = () => PMt(a).then(mt)), (t[10] = a), (t[11] = ge));
  else ge = t[11];
  let h = ge,
    pe,
    fe;
  if (t[12] !== h)
    ((pe = () => (h(), LEr(() => void h()))), (fe = [h]), (t[12] = h), (t[13] = pe), (t[14] = fe));
  else ((pe = t[13]), (fe = t[14]));
  P(pe, fe);
  let { internal_querier: V } = lL(),
    Pe,
    we;
  if (t[15] !== m)
    ((Pe = () => {
      if (m !== "auto") {
        return;
      }
      return (O($ve()), xMt(() => O($ve())));
    }),
      (we = [m]),
      (t[15] = m),
      (t[16] = Pe),
      (t[17] = we));
  else ((Pe = t[16]), (we = t[17]));
  P(Pe, we);
  let Ce, ye;
  if (t[18] !== m || t[19] !== V)
    ((Ce = () => {
      if (m !== "auto" || !V) {
        return;
      }
      let Oe;
      let Ve = !1;
      return (
        import("./chunk-tymejpvj.js").then((H) => {
          let { watchSystemTheme: at } = H;
          if (Ve) {
            return;
          }
          Oe = at(V, O);
        }),
        () => {
          ((Ve = !0), Oe?.());
        }
      );
    }),
      (ye = [m, V]),
      (t[18] = m),
      (t[19] = V),
      (t[20] = Ce),
      (t[21] = ye));
  else ((Ce = t[20]), (ye = t[21]));
  P(Ce, ye);
  let H;
  if (t[22] !== m) ((H = uD(m)), (t[22] = m), (t[23] = H));
  else H = t[23];
  let R = H,
    Re;
  if (t[24] !== R || t[25] !== u)
    ((Re = R ? u.find((ht) => ht.slug === R) : void 0), (t[24] = R), (t[25] = u), (t[26] = Re));
  else Re = t[26];
  let v = Re,
    l = v ? v.base : m === "auto" ? ot : R ? "dark" : m,
    d = nt ?? v?.overrides,
    ke;
  if (t[27] !== d || t[28] !== l) ((ke = Adn(wG(l), d)), (t[27] = d), (t[28] = l), (t[29] = ke));
  else ke = t[29];
  let W = ke,
    xe;
  if (t[30] === S) ((xe = () => J(null)), (t[30] = xe));
  else xe = t[30];
  let ct = xe,
    U;
  if (t[31] !== I)
    ((U = (X) => {
      if ((rt(X), J(null), X === "auto")) O($ve());
      I(X);
    }),
      (t[31] = I),
      (t[32] = U));
  else U = t[32];
  let _e;
  if (t[33] === S)
    ((_e = (Ne) => {
      if ((J(Ne), Ne === "auto")) O($ve());
    }),
      (t[33] = _e));
  else _e = t[33];
  let qe;
  if (
    t[34] !== v ||
    t[35] !== d ||
    t[36] !== l ||
    t[37] !== u ||
    t[38] !== h ||
    t[39] !== W ||
    t[40] !== U ||
    t[41] !== T
  )
    ((qe = {
      themeSetting: T,
      setThemeSetting: U,
      setPreviewTheme: _e,
      cancelPreview: ct,
      currentTheme: l,
      resolvedTheme: W,
      activeThemeOverrides: d,
      customThemes: u,
      activeCustomTheme: v,
      reloadCustomThemes: h,
      setPreviewOverrides: st
    }),
      (t[34] = v),
      (t[35] = d),
      (t[36] = l),
      (t[37] = u),
      (t[38] = h),
      (t[39] = W),
      (t[40] = U),
      (t[41] = T),
      (t[42] = qe));
  else qe = t[42];
  let Z = qe,
    He;
  if (t[43] !== r || t[44] !== Z)
    ((He = e(i.Provider, { value: Z, children: r })), (t[43] = r), (t[44] = Z), (t[45] = He));
  else He = t[45];
  return He;
}
function Pr() {
  let s = w(3),
    { currentTheme: o, setThemeSetting: r } = be(i),
    n;
  if (s[0] !== o || s[1] !== r) ((n = [o, r]), (s[0] = o), (s[1] = r), (s[2] = n));
  else n = s[2];
  return n;
}
function Gee() {
  return be(i).themeSetting;
}
function kIn() {
  let s = w(3),
    { setPreviewTheme: o, cancelPreview: r } = be(i),
    n;
  if (s[0] !== r || s[1] !== o)
    ((n = { setPreviewTheme: o, cancelPreview: r }), (s[0] = r), (s[1] = o), (s[2] = n));
  else n = s[2];
  return n;
}
function Zw() {
  return be(i).resolvedTheme;
}
function TIn() {
  return be(i).activeThemeOverrides;
}
function Dwe() {
  let a = w(5),
    {
      customThemes: o,
      activeCustomTheme: r,
      reloadCustomThemes: s,
      setPreviewOverrides: n
    } = be(i),
    t;
  if (a[0] !== r || a[1] !== o || a[2] !== s || a[3] !== n)
    ((t = { customThemes: o, activeCustomTheme: r, reloadCustomThemes: s, setPreviewOverrides: n }),
      (a[0] = r),
      (a[1] = o),
      (a[2] = s),
      (a[3] = n),
      (a[4] = t));
  else t = a[4];
  return t;
}
export { aPt, Me, lL, vIn, EIn, Pr, Gee, kIn, Zw, TIn, Dwe };

//# sourceMappingURL=chunk-rf7g1m78.js.map
