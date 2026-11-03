// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Of } from "./chunk-rwaeax2b.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Zr } from "./chunk-xkry565w.js";
import { mE } from "./chunk-mnrc938a.js";
import { I, Ft } from "./chunk-a16y5hcz.js";
import { F } from "./chunk-wrtp8qz8.js";
import { w } from "./chunk-7m7t89vx.js";
import { Jj, bse, xXo, PXo, IXo, OXo } from "./chunk-5rw2zfa0.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { Ee } from "./chunk-xzcese97.js";
import { Oa, eb, xc, Wo } from "./chunk-fgf47p3n.js";
import { Te } from "./chunk-pbpv20s6.js";
import { V } from "./chunk-j32s98r9.js";
import { dr } from "./chunk-zgvc8m5v.js";
import { Ba } from "./chunk-7y9rpkcp.js";
import { HR } from "./chunk-e4cfa3zw.js";
import { e, r } from "./chunk-f790ajz4.js";
import { P, ee, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function ft(It) {
  return It + 1;
}
function yt(Tt, At) {
  return r(
    s,
    {
      paddingLeft: 2,
      flexDirection: "row",
      children: [e(n, { dimColor: !0, children: "\xB7 " }), e(n, { children: Tt })]
    },
    At
  );
}
function wt(Mt, Dt) {
  return r(
    s,
    {
      paddingLeft: 2,
      flexDirection: "row",
      children: [e(n, { dimColor: !0, children: "\xB7 " }), e(n, { children: Mt })]
    },
    `tail-${Dt}`
  );
}
var z = 20,
  On = 40,
  _n = 14,
  jn = 4,
  zn = 6;
function Q(t, a) {
  let c = Math.max(1, a - zn);
  return (
    Ft(
      Of(t, c, "wrap"),
      `
`
    ) + 1
  );
}
function rn(t, a, c) {
  let l = _n + c.reduce((u, h) => u + Q(h, a), 0);
  return Math.min(On, t - l);
}
function U(t, a, c, l, u, h) {
  let m = c ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)",
    i =
      (l > 0 ? `, ${l} executing ${I(l, "a command", "commands")}` : "") +
      (u > 0 ? `, ${u} ${I(u, "sandbox setting")}` : "") +
      (h > 0 ? `, ${h} ${I(h, "isolation setting")}` : "");
  return a
    ? `\u22EF and ${t} more not shown ${m}${i} \u2014 choose No unless you expected every one of these settings`
    : `${t} ${I(t, "setting")} not shown ${m}${i} \u2014 choose No unless you expected every one of these settings`;
}
function an(t, a, c) {
  if (t.length === 0) return { head: [], tail: [], elided: 0 };
  let l = t.map((o) => Q(o, a)),
    u = l.reduce((o, C) => o + C, 0),
    h = Math.max(
      Q(U(t.length, !0, !1, t.length, t.length, t.length), a),
      Q(U(t.length, !0, !0, t.length, t.length, t.length), a)
    );
  if (t.length <= z && u <= Math.max(c, h)) return { head: t, tail: [], elided: 0 };
  let m = h,
    i = 0,
    d = t.length,
    p = (o) => m + l[o] <= c;
  if (p(0)) ((m += l[0]), (i = 1));
  while (d - 1 >= Math.max(i, t.length - jn) && d - 1 > 0 && p(d - 1)) (d--, (m += l[d]));
  while (i < d && i + (t.length - d) < z && p(i)) ((m += l[i]), i++);
  return { head: t.slice(0, i), tail: t.slice(d), elided: d - i };
}
function dn(t, { commandRows: a, sandboxRows: c, isolationRows: l, envRows: u, categoryRows: h }) {
  let m = F(Object.values(t.payloadSlots), (p) => p?.shellSettings.hooks !== void 0),
    i = a.length - m,
    d = [];
  if (i > 0) d.push(`${I(i, "command setting")} \xD7${i}`);
  if (c.length > 0) d.push(`${I(c.length, "sandbox setting")} \xD7${c.length}`);
  if (l.length > 0) d.push(`${I(l.length, "isolation setting")} \xD7${l.length}`);
  if (u.length > 0) d.push(`${I(u.length, "env var")} \xD7${u.length}`);
  if (h.length > 0 || m > 0) d.push("hooks");
  return d.join(", ");
}
var Z = {
    intro:
      "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
    listLabel: "Settings requiring approval:",
    advice:
      "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
    risk: "these can run code or redirect traffic on this machine."
  },
  cn = {
    intro:
      "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
    listLabel: "Telemetry destination:",
    advice: "Only accept if you recognize this as your organization's telemetry collector.",
    risk: "this redirects where telemetry from this machine is sent."
  },
  ln = {
    intro:
      "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.",
    listLabel: Z.listLabel,
    advice: Z.advice,
    risk: "these can change where Claude Code runs or what it can connect to."
  },
  f = Zr;
function BFe(t) {
  let a = w(2),
    c;
  if (a[0] !== t) ((c = e(je, { ...t }, t.reveal)), (a[0] = t), (a[1] = c));
  else c = a[1];
  return c;
}
function je(t) {
  let o = w(98),
    { settings: a, baseline: c, reveal: l, onAccept: u, onReject: h, wouldTakeAnswer: m } = t,
    i = l !== "default",
    { columns: d, rows: p } = Te(),
    C,
    x,
    E,
    ze,
    T,
    N,
    Ne,
    Pe,
    Rn;
  if (o[0] !== c || o[1] !== d || o[2] !== a || o[3] !== p) {
    let $n = Jj(a);
    let W = xXo(c, $n);
    let q = bse(W.changed) ? W.changed : $n;
    x = PXo(q, a) ? cn : IXo(q, a) ? ln : Z;
    let We = q === W.changed ? W.unchangedCount : 0;
    let A = W.removedCount;
    E =
      We > 0
        ? `\uFF0B ${We} other active ${I(We, "setting")} unchanged since your last approval`
        : null;
    let Y;
    if (o[13] !== A)
      ((Y =
        A > 0
          ? `\u2212 ${A} previously approved ${I(A, "setting")} no longer ${A === 1 ? "requires" : "require"} approval`
          : null),
        (o[13] = A),
        (o[14] = Y));
    else Y = o[14];
    T = Y;
    let kn = OXo(q);
    N = `Approving applies: ${dn(q, kn)} \u2014 ${x.risk}`;
    let bt = rn(p, d, [x.intro, x.advice, N, ...(E ? [E] : []), ...(T ? [T] : [])]);
    let { commandRows: H, sandboxRows: ne, isolationRows: te, envRows: vt, categoryRows: Ct } = kn;
    C = H;
    Pe = ne;
    ze = te;
    Ne = [...C, ...Pe, ...ze, ...vt, ...Ct];
    Rn = an(Ne, d, bt);
    ((o[0] = c),
      (o[1] = d),
      (o[2] = a),
      (o[3] = p),
      (o[4] = C),
      (o[5] = x),
      (o[6] = E),
      (o[7] = ze),
      (o[8] = T),
      (o[9] = N),
      (o[10] = Ne),
      (o[11] = Pe),
      (o[12] = Rn));
  } else
    ((C = o[4]),
      (x = o[5]),
      (E = o[6]),
      (ze = o[7]),
      (T = o[8]),
      (N = o[9]),
      (Ne = o[10]),
      (Pe = o[11]),
      (Rn = o[12]));
  let G = Rn,
    qe = G.head.length,
    Fe = Ne.length - G.tail.length,
    Ye = Math.max(0, Math.min(C.length, Fe) - qe),
    Ge = C.length + Pe.length,
    Je = Math.max(0, Math.min(Ge, Fe) - Math.max(C.length, qe)),
    xt = Ge + ze.length,
    Xe = Math.max(0, Math.min(xt, Fe) - Math.max(Ge, qe)),
    Y;
  if (
    o[15] !== x ||
    o[16] !== Ye ||
    o[17] !== Xe ||
    o[18] !== Je ||
    o[19] !== E ||
    o[20] !== T ||
    o[21] !== N ||
    o[22] !== G
  )
    ((Y = {
      ...G,
      elidedCommandCount: Ye,
      elidedSandboxCount: Je,
      elidedIsolationCount: Xe,
      copy: x,
      riskLine: N,
      hiddenLine: E,
      removedLine: T
    }),
      (o[15] = x),
      (o[16] = Ye),
      (o[17] = Xe),
      (o[18] = Je),
      (o[19] = E),
      (o[20] = T),
      (o[21] = N),
      (o[22] = G),
      (o[23] = Y));
  else Y = o[23];
  let {
      head: L,
      tail: R,
      elided: oe,
      elidedCommandCount: Be,
      elidedSandboxCount: Ke,
      elidedIsolationCount: Ve,
      copy: g,
      riskLine: Qe,
      hiddenLine: ie,
      removedLine: se
    } = Y,
    H;
  if (o[24] !== u || o[25] !== h)
    ((H = (Lt) => (Lt === "confirm" ? u() : h())), (o[24] = u), (o[25] = h), (o[26] = H));
  else H = o[26];
  let M = mE(H),
    Ue = Oa(f),
    { refusedWithin: Ze, noteRefused: He, epoch: Rt } = Wo(),
    en = eb(),
    [$t, kt] = y(0),
    ne;
  if (o[27] === S)
    ((ne = () => {
      kt(ft);
    }),
      (o[27] = ne));
  else ne = o[27];
  let te;
  if (o[28] !== a) ((te = [a]), (o[28] = a), (o[29] = te));
  else te = o[29];
  P(ne, te);
  let Et = xc(`${Rt}:${$t}`, f),
    En;
  if (o[30] !== i || o[31] !== Ue || o[32] !== He || o[33] !== Ze)
    ((En = function k() {
      if (!i) {
        return !1;
      }
      if (Ue() || Ze(f)) {
        return (He(), !0);
      }
      return !1;
    }),
      (o[30] = i),
      (o[31] = Ue),
      (o[32] = He),
      (o[33] = Ze),
      (o[34] = En));
  else En = o[34];
  let k = En,
    Sn;
  if (o[35] !== k || o[36] !== m)
    ((Sn = function re() {
      if (k()) {
        return !0;
      }
      return m?.() === !1;
    }),
      (o[35] = k),
      (o[36] = m),
      (o[37] = Sn));
  else Sn = o[37];
  let re = Sn,
    In;
  if (o[38] !== M || o[39] !== k)
    ((In = function v(St) {
      if (k()) {
        return;
      }
      M.answer(St);
    }),
      (o[38] = M),
      (o[39] = k),
      (o[40] = In));
  else In = o[40];
  let v = In,
    Tn;
  if (o[41] !== v) ((Tn = () => v("cancel")), (o[41] = v), (o[42] = Tn));
  else Tn = o[42];
  let An;
  if (o[43] === S) ((An = { context: "Confirmation" }), (o[43] = An));
  else An = o[43];
  lt("confirm:no", Tn, An);
  let ae;
  if (o[44] !== g.intro) ((ae = e(n, { children: g.intro })), (o[44] = g.intro), (o[45] = ae));
  else ae = o[45];
  let de;
  if (o[46] !== g.listLabel)
    ((de = e(n, { dimColor: !0, children: g.listLabel })), (o[46] = g.listLabel), (o[47] = de));
  else de = o[47];
  let ce;
  if (o[48] !== L) ((ce = L.map(yt)), (o[48] = L), (o[49] = ce));
  else ce = o[49];
  let le;
  if (
    o[50] !== oe ||
    o[51] !== Be ||
    o[52] !== Ve ||
    o[53] !== Ke ||
    o[54] !== L.length ||
    o[55] !== R.length
  )
    ((le =
      oe > 0 &&
      e(s, {
        paddingLeft: 2,
        children: e(n, {
          color: "warning",
          children: U(oe, L.length + R.length > 0, L.length + R.length === z, Be, Ke, Ve)
        })
      })),
      (o[50] = oe),
      (o[51] = Be),
      (o[52] = Ve),
      (o[53] = Ke),
      (o[54] = L.length),
      (o[55] = R.length),
      (o[56] = le));
  else le = o[56];
  let ue;
  if (o[57] !== R) ((ue = R.map(wt)), (o[57] = R), (o[58] = ue));
  else ue = o[58];
  let he;
  if (o[59] !== ie)
    ((he = ie && e(s, { paddingLeft: 2, children: e(n, { dimColor: !0, children: ie }) })),
      (o[59] = ie),
      (o[60] = he));
  else he = o[60];
  let me;
  if (o[61] !== se)
    ((me = se && e(s, { paddingLeft: 2, children: e(n, { dimColor: !0, children: se }) })),
      (o[61] = se),
      (o[62] = me));
  else me = o[62];
  let pe;
  if (o[63] !== de || o[64] !== ce || o[65] !== le || o[66] !== ue || o[67] !== he || o[68] !== me)
    ((pe = r(s, { flexDirection: "column", children: [de, ce, le, ue, he, me] })),
      (o[63] = de),
      (o[64] = ce),
      (o[65] = le),
      (o[66] = ue),
      (o[67] = he),
      (o[68] = me),
      (o[69] = pe));
  else pe = o[69];
  let ge;
  if (o[70] !== g.advice) ((ge = e(n, { children: g.advice })), (o[70] = g.advice), (o[71] = ge));
  else ge = o[71];
  let fe;
  if (o[72] !== Qe) ((fe = e(n, { color: "warning", children: Qe })), (o[72] = Qe), (o[73] = fe));
  else fe = o[73];
  const nn = i ? `${M.attempts}:${Et.remountKey}` : `${M.attempts}`,
    tn = i ? f : void 0,
    on = i ? "cancel" : (M.refused ?? "confirm");
  let ye, we;
  if (o[74] !== v)
    ((ye = () => v("confirm")), (we = () => v("cancel")), (o[74] = v), (o[75] = ye), (o[76] = we));
  else ((ye = o[75]), (we = o[76]));
  let be;
  if (
    o[77] !== i ||
    o[78] !== re ||
    o[79] !== en ||
    o[80] !== nn ||
    o[81] !== tn ||
    o[82] !== on ||
    o[83] !== ye ||
    o[84] !== we
  )
    ((be = e(
      dr,
      {
        openedAt: en,
        windowMs: tn,
        refuseInput: re,
        confirmLabel: "Yes, I trust these settings",
        cancelLabel: "No, exit Claude Code",
        cancelFirst: i,
        focus: on,
        hideIndexes: i,
        disablePrintableKeybindings: i,
        onConfirm: ye,
        onCancel: we
      },
      nn
    )),
      (o[77] = i),
      (o[78] = re),
      (o[79] = en),
      (o[80] = nn),
      (o[81] = tn),
      (o[82] = on),
      (o[83] = ye),
      (o[84] = we),
      (o[85] = be));
  else be = o[85];
  const sn = i ? "select" : "confirm";
  let ve;
  if (o[86] !== sn) ((ve = e(V, { chord: "enter", action: sn })), (o[86] = sn), (o[87] = ve));
  else ve = o[87];
  let Mn;
  if (o[88] === S) ((Mn = e(V, { chord: "escape", action: "exit" })), (o[88] = Mn));
  else Mn = o[88];
  let Ce;
  if (o[89] !== ve)
    ((Ce = e(HR, { children: r(Ee, { children: [ve, Mn] }) })), (o[89] = ve), (o[90] = Ce));
  else Ce = o[90];
  let Dn;
  if (o[91] !== ae || o[92] !== pe || o[93] !== ge || o[94] !== fe || o[95] !== be || o[96] !== Ce)
    ((Dn = e(Ba, {
      color: "warning",
      titleColor: "warning",
      title: "Managed settings require approval",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        paddingTop: 1,
        children: [ae, pe, ge, fe, be, Ce]
      })
    })),
      (o[91] = ae),
      (o[92] = pe),
      (o[93] = ge),
      (o[94] = fe),
      (o[95] = be),
      (o[96] = Ce),
      (o[97] = Dn));
  else Dn = o[97];
  return Dn;
}
export { BFe };

//# sourceMappingURL=chunk-yf3mms6g.js.map
