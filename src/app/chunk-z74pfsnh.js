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
import { s, n, Ml, BX } from "./chunk-h56pfqh7.js";
import { i } from "./chunk-cj37hmns.js";
import { EF } from "./chunk-ftfxe7en.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { Un } from "./chunk-7c3thgax.js";
import { qs } from "./chunk-y43e6aw3.js";
import { yyt } from "./chunk-b08qnart.js";
import { Me, Pr, Gee, kIn, Dwe } from "./chunk-rf7g1m78.js";
import { hte, uD } from "./chunk-sdv7wcwv.js";
import { ls, B2, klt, j2 } from "./chunk-vgsmcxaz.js";
import { Te } from "./chunk-pbpv20s6.js";
import { K, Gn } from "./chunk-61vn6n52.js";
import { Xn } from "./chunk-j0tbz6ra.js";
import { Ee } from "./chunk-xzcese97.js";
import { V } from "./chunk-j32s98r9.js";
import { sn } from "./chunk-ngj43h87.js";
import { Flt, mt } from "./chunk-18g32wet.js";
import { l8t, tno } from "./chunk-8ba87q4q.js";
import { $X } from "./chunk-bbcypp50.js";
import { Tl } from "./chunk-ga7dw895.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { be, P, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function fo(Do) {
  return Do.settings.syntaxHighlightingDisabled;
}
function xo(xe) {
  return {
    label: xe.name,
    origin: xe.source === "user" ? "custom" : `from ${xe.source.plugin}`,
    value: hte(xe.slug)
  };
}
var Ye = "__new_custom_theme__";
function nUe(vo) {
  let t = w(109),
    {
      onThemeSelect: Oe,
      showIntroText: ut,
      helpText: gt,
      showHelpTextBelow: pt,
      hideEscToCancel: ft,
      skipExitHandling: xt,
      onCancel: De,
      onCustomTheme: l
    } = vo,
    g = ut === void 0 ? !1 : ut,
    c = gt === void 0 ? "" : gt,
    x = pt === void 0 ? !1 : pt,
    X = ft === void 0 ? !1 : ft,
    p = xt === void 0 ? !1 : xt,
    { storageV5: Ie } = Me(),
    [Le] = Pr(),
    v = Gee(),
    { columns: To } = Te(),
    vt;
  if (t[0] === S) ((vt = l8t()), (t[0] = vt));
  else vt = t[0];
  let _e = vt,
    Tt;
  if (t[1] !== Le) ((Tt = _e === null ? tno(Le) : null), (t[1] = Le), (t[2] = Tt));
  else Tt = t[2];
  let z = Tt,
    { setPreviewTheme: Ae, cancelPreview: o } = kIn(),
    d = C(void 0),
    wt;
  if (t[3] !== o)
    ((wt = (wo) => {
      let Ct = Symbol("commit");
      d.current = Ct;
      let bt = () => {
        if (d.current === Ct) ((d.current = void 0), o());
      };
      Promise.resolve(wo).then(bt, bt);
    }),
      (t[3] = o),
      (t[4] = wt));
  else wt = t[4];
  let T = wt,
    St,
    yt;
  if (t[5] !== o)
    ((yt = () => () => {
      if (d.current === void 0) o();
    }),
      (St = [o]),
      (t[5] = o),
      (t[6] = St),
      (t[7] = yt));
  else ((St = t[6]), (yt = t[7]));
  P(yt, St);
  let W = K(fo) ?? !1,
    Re = Gn();
  EF("ThemePicker");
  let Be = qs("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"),
    Pt;
  if (t[8] !== Re || t[9] !== Ie || t[10] !== W)
    ((Pt = () => {
      if (_e === null) {
        let kt = !W;
        (Un("userSettings", { syntaxHighlightingDisabled: kt }, void 0, Ie),
          Re((Ht) => ({ ...Ht, settings: { ...Ht.settings, syntaxHighlightingDisabled: kt } })));
      }
    }),
      (t[8] = Re),
      (t[9] = Ie),
      (t[10] = W),
      (t[11] = Pt));
  else Pt = t[11];
  let Ot;
  if (t[12] === S) ((Ot = { context: "ThemePicker" }), (t[12] = Ot));
  else Ot = t[12];
  lt("theme:toggleSyntaxHighlighting", Pt, Ot);
  let Dt;
  if (t[13] !== o || t[14] !== De)
    ((Dt = () => {
      ((d.current = void 0), o(), De?.());
    }),
      (t[13] = o),
      (t[14] = De),
      (t[15] = Dt));
  else Dt = t[15];
  let Y = Dt,
    It;
  if (t[16] !== Y || t[17] !== o || t[18] !== p)
    ((It = p
      ? Y
      : async () => {
          (o(), await Xn(0));
        }),
      (t[16] = Y),
      (t[17] = o),
      (t[18] = p),
      (t[19] = It));
  else It = t[19];
  let Et;
  if (t[20] === S) ((Et = { context: "Select" }), (t[20] = Et));
  else Et = t[20];
  lt("select:cancel", It, Et);
  let q = ls(p ? Y : void 0),
    { customThemes: b } = Dwe(),
    Mt,
    Lt,
    _t,
    At,
    Rt,
    Bt,
    Nt;
  if (t[21] === S)
    ((Mt = { label: "Auto (match terminal)", value: "auto" }),
      (Lt = { label: "Dark mode", value: "dark" }),
      (_t = { label: "Light mode", value: "light" }),
      (At = { label: "Dark mode (colorblind-friendly)", value: "dark-daltonized" }),
      (Rt = { label: "Light mode (colorblind-friendly)", value: "light-daltonized" }),
      (Bt = { label: "Dark mode (ANSI colors only)", value: "dark-ansi" }),
      (Nt = { label: "Light mode (ANSI colors only)", value: "light-ansi" }),
      (t[21] = Mt),
      (t[22] = Lt),
      (t[23] = _t),
      (t[24] = At),
      (t[25] = Rt),
      (t[26] = Bt),
      (t[27] = Nt));
  else
    ((Mt = t[21]),
      (Lt = t[22]),
      (_t = t[23]),
      (At = t[24]),
      (Rt = t[25]),
      (Bt = t[26]),
      (Nt = t[27]));
  let $t;
  if (t[28] !== b || t[29] !== l) {
    const J = b.map(xo);
    let E;
    if (t[31] !== l)
      ((E = l ? [{ label: "New custom theme\u2026", value: Ye }] : []), (t[31] = l), (t[32] = E));
    else E = t[32];
    $t = [Mt, Lt, _t, At, Rt, Bt, Nt, ...J, ...E];
    ((t[28] = b), (t[29] = l), (t[30] = $t));
  } else $t = t[30];
  let a = $t,
    Z = a.findIndex((Co) => Co.value === v),
    [k, Ut] = y(a[Math.max(0, Z)]?.value ?? v),
    [bo, So] = y(!1),
    [Ft, yo] = y(Z !== -1);
  if (!Ft && !bo && Z !== -1) (yo(!0), Ut(v));
  let J;
  if (t[33] !== k) ((J = uD(k)), (t[33] = k), (t[34] = J));
  else J = t[34];
  let ee = J,
    E;
  if (t[35] !== b || t[36] !== ee)
    ((E = ee ? b.find((Po) => Po.slug === ee) : void 0), (t[35] = b), (t[36] = ee), (t[37] = E));
  else E = t[37];
  let f = E,
    Ne = qs("theme:editCustom", "ThemePicker", "ctrl+e"),
    Vt;
  if (t[38] !== f || t[39] !== T || t[40] !== l)
    ((Vt = () => {
      if (f && l && d.current === void 0) T(l(f));
    }),
      (t[38] = f),
      (t[39] = T),
      (t[40] = l),
      (t[41] = Vt));
  else Vt = t[41];
  let Gt;
  if (t[42] === S) ((Gt = { context: "ThemePicker" }), (t[42] = Gt));
  else Gt = t[42];
  lt("theme:editCustom", Vt, Gt);
  let h = j2(),
    M = be(Jw),
    Xt = C(null),
    zt;
  if (t[43] !== h)
    ((zt = () => {
      let $e = Xt.current;
      if ($e === null) {
        return 0;
      }
      let te = h?.box.current ?? $e;
      while (h === null && te.parentNode !== void 0) te = te.parentNode;
      return Math.max(0, BX($e, te));
    }),
      (t[43] = h),
      (t[44] = zt));
  else zt = t[44];
  let ko = Ml(zt),
    oe = g ? 0 : ko + (X ? 1 : 0),
    ne;
  if (t[45] !== g)
    ((ne = g
      ? e(n, { children: "Let's get started." })
      : e(n, { bold: !0, color: "permission", children: "Theme" })),
      (t[45] = g),
      (t[46] = ne));
  else ne = t[46];
  let Wt;
  if (t[47] === S)
    ((Wt = e(n, {
      bold: !0,
      children: "Choose the text style that looks best with your terminal"
    })),
      (t[47] = Wt));
  else Wt = t[47];
  let ie;
  if (t[48] !== c || t[49] !== x)
    ((ie = c && !x && e(n, { dimColor: !0, children: c })), (t[48] = c), (t[49] = x), (t[50] = ie));
  else ie = t[50];
  let se;
  if (t[51] !== ie)
    ((se = r(s, { flexDirection: "column", children: [Wt, ie] })), (t[51] = ie), (t[52] = se));
  else se = t[52];
  const Ue = Ft ? "on-saved-theme" : "on-first-theme",
    Fe = Math.max(0, Z);
  let le;
  if (t[53] !== o || t[54] !== k || t[55] !== Ae || t[56] !== a)
    ((le = (Ho) => {
      let L = a[Ho]?.value;
      if (L === void 0 || L === k || d.current !== void 0) {
        return;
      }
      if ((Ut(L), So(!0), yyt(L))) Ae(L);
      else o();
    }),
      (t[53] = o),
      (t[54] = k),
      (t[55] = Ae),
      (t[56] = a),
      (t[57] = le));
  else le = t[57];
  let ae;
  if (t[58] !== o || t[59] !== T || t[60] !== l || t[61] !== Oe || t[62] !== a)
    ((ae = (Oo) => {
      let Ve = a[Oo]?.value;
      if (Ve === void 0 || d.current !== void 0) {
        return;
      }
      if (!yyt(Ve)) {
        (o(), l?.(void 0));
        return;
      }
      T(Oe(Ve));
    }),
      (t[58] = o),
      (t[59] = T),
      (t[60] = l),
      (t[61] = Oe),
      (t[62] = a),
      (t[63] = ae));
  else ae = t[63];
  let re;
  if (t[64] !== a || t[65] !== v)
    ((re = a.map((_) =>
      e(
        sn.Item,
        {
          label: _.label,
          icon:
            _.value === v
              ? e(mt, { status: "success", "aria-label": "current:" })
              : e(n, { "aria-hidden": !0, children: " ".repeat(Flt()) }),
          meta: _.origin === void 0 ? void 0 : [_.origin]
        },
        _.value
      )
    )),
      (t[64] = a),
      (t[65] = v),
      (t[66] = re));
  else re = t[66];
  let me;
  if (t[67] !== Ue || t[68] !== Fe || t[69] !== le || t[70] !== ae || t[71] !== re)
    ((me = e(sn, { defaultFocusIndex: Fe, onFocus: le, onSelect: ae, children: re }, Ue)),
      (t[67] = Ue),
      (t[68] = Fe),
      (t[69] = le),
      (t[70] = ae),
      (t[71] = re),
      (t[72] = me));
  else me = t[72];
  let ce;
  if (t[73] !== ne || t[74] !== se || t[75] !== me)
    ((ce = r(s, { flexDirection: "column", gap: 1, children: [ne, se, me] })),
      (t[73] = ne),
      (t[74] = se),
      (t[75] = me),
      (t[76] = ce));
  else ce = t[76];
  let Yt;
  if (t[77] === S)
    ((Yt = {
      oldStart: 1,
      newStart: 1,
      oldLines: 3,
      newLines: 3,
      lines: [
        " function greet() {",
        '-  console.log("Hello, World!");',
        '+  console.log("Hello, Claude!");',
        " }"
      ]
    }),
      (t[77] = Yt));
  else Yt = t[77];
  const Ge = To - 6;
  let de;
  if (t[78] !== Ge)
    ((de = e(Tl, {
      paddingX: 0,
      children: e($X, { patch: Yt, dim: !1, filePath: "demo.js", firstLine: null, width: Ge })
    })),
      (t[78] = Ge),
      (t[79] = de));
  else de = t[79];
  const Xe =
    _e === "env"
      ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${i.CLAUDE_CODE_SYNTAX_HIGHLIGHT})`
      : W
        ? `Syntax highlighting disabled (${Be} to enable)`
        : z
          ? `Syntax theme: ${z.theme}${z.source ? ` (from ${z.source})` : ""} (${Be} to disable)`
          : `Syntax highlighting enabled (${Be} to disable)`;
  let he;
  if (t[80] !== Xe)
    ((he = r(n, { dimColor: !0, children: [" ", Xe] })), (t[80] = Xe), (t[81] = he));
  else he = t[81];
  let ue;
  if (t[82] !== de || t[83] !== he)
    ((ue = r(s, { flexDirection: "column", width: "100%", children: [de, he] })),
      (t[82] = de),
      (t[83] = he),
      (t[84] = ue));
  else ue = t[84];
  let jt;
  if (t[85] !== ce || t[86] !== ue)
    ((jt = r(s, { ref: Xt, flexDirection: "column", gap: 1, children: [ce, ue] })),
      (t[85] = ce),
      (t[86] = ue),
      (t[87] = jt));
  else jt = t[87];
  let ze = jt,
    ge;
  if (t[88] !== h?.rows || t[89] !== oe || t[90] !== M)
    ((ge = M && { ...M, rows: Math.max(0, (h?.rows ?? M.rows) - oe) }),
      (t[88] = h?.rows),
      (t[89] = oe),
      (t[90] = M),
      (t[91] = ge));
  else ge = t[91];
  const We = (h?.reserve ?? B2) + oe;
  let pe;
  if (
    t[92] !== Ne ||
    t[93] !== q ||
    t[94] !== f ||
    t[95] !== c ||
    t[96] !== X ||
    t[97] !== l ||
    t[98] !== x ||
    t[99] !== g ||
    t[100] !== p
  )
    ((pe =
      !g &&
      r(s, {
        marginTop: 1,
        children: [
          x && c && e(s, { marginLeft: 3, children: e(n, { dimColor: !0, children: c }) }),
          !X &&
            e(s, {
              children: e(n, {
                dimColor: !0,
                italic: !0,
                children: q.pending
                  ? r(Q, {
                      children: ["Press ", q.keyName, " again to", " ", p ? "cancel" : "exit"]
                    })
                  : r(Ee, {
                      children: [
                        e(V, { chord: "enter", action: "select" }),
                        f && l && e(V, { chord: Ne, action: "edit" }),
                        e(V, { chord: "escape", action: "cancel" })
                      ]
                    })
              })
            })
        ]
      })),
      (t[92] = Ne),
      (t[93] = q),
      (t[94] = f),
      (t[95] = c),
      (t[96] = X),
      (t[97] = l),
      (t[98] = x),
      (t[99] = g),
      (t[100] = p),
      (t[101] = pe));
  else pe = t[101];
  let fe;
  if (t[102] !== ze || t[103] !== We || t[104] !== pe)
    ((fe = r(klt, { reserve: We, children: [ze, pe] })),
      (t[102] = ze),
      (t[103] = We),
      (t[104] = pe),
      (t[105] = fe));
  else fe = t[105];
  let qt;
  if (t[106] !== ge || t[107] !== fe)
    ((qt = e(Jw, { value: ge, children: fe })), (t[106] = ge), (t[107] = fe), (t[108] = qt));
  else qt = t[108];
  return qt;
}
export { nUe };

//# sourceMappingURL=chunk-z74pfsnh.js.map
