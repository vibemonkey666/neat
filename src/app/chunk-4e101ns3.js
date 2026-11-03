// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { I } from "./chunk-a16y5hcz.js";
import { ch } from "./chunk-ajtyjx88.js";
import { Me } from "./chunk-rf7g1m78.js";
import { w } from "./chunk-7m7t89vx.js";
import { s, n, Yt } from "./chunk-h56pfqh7.js";
import { Oa, eb, xc, Wo } from "./chunk-fgf47p3n.js";
import { Jn } from "./chunk-d5zj5299.js";
import { dr } from "./chunk-zgvc8m5v.js";
import { we } from "./chunk-bf8qkzmg.js";
import { SPe } from "./chunk-63gfc77e.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { P, C, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function me() {
  a("tengu_claude_md_includes_dialog_shown", {});
}
function ge(De, Ee) {
  return r(n, { dimColor: !0, wrap: "truncate-middle", children: ["  ", Jn(De.path)] }, Ee);
}
function bPn(g, h, o) {
  (ch(
    (l) => ({
      ...l,
      hasClaudeMdExternalIncludesApproved: g,
      hasClaudeMdExternalIncludesWarningShown: !0
    }),
    o
  ),
    a(
      g
        ? "tengu_claude_md_external_includes_dialog_accepted"
        : "tengu_claude_md_external_includes_dialog_declined",
      { source: c(h) }
    ));
}
function smr(g) {
  let t = w(37),
    { onDone: h, isStandaloneDialog: o, externalIncludes: l } = g,
    { storageV5: k } = Me(),
    G;
  if (t[0] === S) ((G = []), (t[0] = G));
  else G = t[0];
  P(me, G);
  let d = Oa(),
    { refusedWithin: u, noteRefused: p, epoch: Ie } = Wo(),
    z;
  if (t[1] !== d || t[2] !== p || t[3] !== u)
    ((z = function y() {
      if (d() || u()) {
        return (p(), !0);
      }
      return !1;
    }),
      (t[1] = d),
      (t[2] = p),
      (t[3] = u),
      (t[4] = z));
  else z = t[4];
  let y = z,
    L = eb(),
    O = xc(Ie),
    H;
  if (t[5] !== l) ((H = l ?? []), (t[5] = l), (t[6] = H));
  else H = t[6];
  let f = H,
    J;
  if (t[7] !== f) ((J = f.length <= SPe ? f : f.slice(0, SPe - 2)), (t[7] = f), (t[8] = J));
  else J = t[8];
  let X = J,
    W = f.slice(X.length),
    Z = C(!1),
    ee;
  if (t[9] !== d || t[10] !== p || t[11] !== h || t[12] !== u || t[13] !== k)
    ((ee = (ye) => {
      if (d() || u()) {
        p();
        return;
      }
      if (Z.current) {
        return;
      }
      ((Z.current = !0), bPn(ye === "yes", "dialog", k), h());
    }),
      (t[9] = d),
      (t[10] = p),
      (t[11] = h),
      (t[12] = u),
      (t[13] = k),
      (t[14] = ee));
  else ee = t[14];
  let i = ee,
    te;
  if (t[15] !== i)
    ((te = () => {
      i("no");
    }),
      (t[15] = i),
      (t[16] = te));
  else te = t[16];
  let M = te;
  const B = we,
    xe = "Allow external CLAUDE.md file imports?",
    Ce = "warning",
    U = !o,
    N = !o;
  let x;
  if (t[17] === S)
    ((x = e(n, {
      children:
        "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories."
    })),
      (t[17] = x));
  else x = t[17];
  const F =
    l &&
    l.length > 0 &&
    r(s, {
      flexDirection: "column",
      children: [
        e(n, { dimColor: !0, children: "External imports:" }),
        X.map(ge),
        W.length > 0
          ? r(Q, {
              children: [
                r(n, {
                  dimColor: !0,
                  wrap: "truncate",
                  children: ["  ", "\u2026 +", W.length, " ", I(W.length, "import"), " not shown."]
                }),
                r(n, {
                  dimColor: !0,
                  wrap: "truncate",
                  children: ["  ", "Yes covers those too, plus any this project adds later."]
                })
              ]
            })
          : null
      ]
    });
  let oe;
  if (t[18] === S)
    ((oe = r(n, {
      dimColor: !0,
      children: [
        "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks",
        " ",
        e(Yt, { url: "https://code.claude.com/docs/en/security" }),
        " "
      ]
    })),
      (t[18] = oe));
  else oe = t[18];
  let D, E;
  if (t[19] !== i)
    ((D = () => i("yes")), (E = () => i("no")), (t[19] = i), (t[20] = D), (t[21] = E));
  else ((D = t[20]), (E = t[21]));
  let b;
  if (t[22] !== O.remountKey || t[23] !== y || t[24] !== L || t[25] !== D || t[26] !== E)
    ((b = e(
      dr,
      {
        refuseInput: y,
        openedAt: L,
        hideIndexes: !0,
        confirmLabel: "Yes, allow external imports",
        cancelLabel: "No, disable external imports",
        cancelFirst: !0,
        focus: "cancel",
        onConfirm: D,
        onCancel: E
      },
      O.remountKey
    )),
      (t[22] = O.remountKey),
      (t[23] = y),
      (t[24] = L),
      (t[25] = D),
      (t[26] = E),
      (t[27] = b));
  else b = t[27];
  let ne;
  if (
    t[28] !== B ||
    t[29] !== M ||
    t[30] !== o ||
    t[31] !== N ||
    t[32] !== x ||
    t[33] !== F ||
    t[34] !== b ||
    t[35] !== U
  )
    ((ne = r(B, {
      title: xe,
      color: Ce,
      onCancel: M,
      exitOnCtrlCD: o,
      hideBorder: U,
      hideInputGuide: N,
      children: [x, F, oe, b]
    })),
      (t[28] = B),
      (t[29] = M),
      (t[30] = o),
      (t[31] = N),
      (t[32] = x),
      (t[33] = F),
      (t[34] = b),
      (t[35] = U),
      (t[36] = ne));
  else ne = t[36];
  return ne;
}
export { bPn, smr };

//# sourceMappingURL=chunk-4e101ns3.js.map
