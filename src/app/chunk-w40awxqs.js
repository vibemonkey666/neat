// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z } from "./chunk-p27rr8yn.js";
import { xn } from "./chunk-r1dvrqha.js";
import { As } from "./chunk-ajtyjx88.js";
import { Ct, rH, tc, XP, ym, MU } from "./chunk-khq9hq2s.js";
import { gw, ZRs } from "./chunk-v3dqhn7m.js";
import { wL } from "./chunk-2nwr73hs.js";
import { Ih, pb, KSt, sh, ae } from "./chunk-ar6ynjt8.js";
import { BJs, Zv, QY, _Gt, T7, rR, eE, TLe, k$, i_e, Tx } from "./chunk-fh50nzzj.js";
import { GW, rJ, t1, VOt, cte, HIe } from "./chunk-hkkvy507.js";
import { _P, Jwr, Tae, jOt, Zwr } from "./chunk-8xk8sdq7.js";
import { qn } from "./chunk-0ex22bw7.js";
function OIe() {
  return Z().frozenMultiFile ?? wL();
}
function bN(t) {
  return rR() && sh(t);
}
function W3e() {
  return {
    behavior: "deny",
    message:
      "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.",
    decisionReason: {
      type: "safetyCheck",
      reason:
        "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  };
}
function GQt(t, e = "file_path") {
  return {
    behavior: "deny",
    message: `cannot read ${e} (${t}) \u2014 the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`,
    decisionReason: {
      type: "safetyCheck",
      reason:
        "A local file that could not be examined requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  };
}
function MIe(t, e, n) {
  if (ite(t, e.slug) || VOt(Ct(e.slug), n)) return !0;
  if (!(Jwr && ae(t).mode === "plan")) {
    let o = Ct(e.slug);
    if (k$(o))
      return (
        _Gt("foreign_read", e.slug) || T7(KSt(t), "artifactAssetReadHumanConsentSlugs", e.slug)
      );
    return (
      n ||
      (XP(o) && jOt(e) === !1) ||
      (TLe(n, e) ? _Gt("foreign_read", e.slug) : QY("foreign_read", e.slug))
    );
  }
  return T7(
    KSt(t),
    ae(t).mode === "plan" || TLe(n, e)
      ? "artifactAssetReadHumanConsentSlugs"
      : "artifactAssetReadConsentSlugs",
    e.slug
  );
}
function kae(t, e, n, s = "copy") {
  let o = Ct(e.slug);
  if (s === "copy" && Tx(o)) return Zwr(t, e.slug);
  let i = tc(o);
  return (i && (!GW(o) || t1(o)) && !(n === "files" && rJ(o))) || MIe(t, e, i);
}
function ite(t, e) {
  return g(ae(t).mode, e);
}
function g(t, e) {
  return t !== "plan" && f(e);
}
function f(t) {
  let e = Ct(t);
  return XP(e) && !k$(e) && e?.lastProbeIssuedAt !== void 0 && !rH(e.lastProbeIssuedAt) && ZRs(t);
}
function G3e(t, e) {
  return qwr(ae(t).mode, e);
}
function qwr(t, e) {
  return t !== "plan" && H0n(e);
}
function H0n(t) {
  return p(t) && f(t);
}
function p(t) {
  let e = Ct(t);
  return e !== void 0 && e.probeFailed !== !0 && e.mode === "org";
}
function m(t, e) {
  let n = Ct(e);
  return (
    ae(t).mode !== "plan" &&
    n?.probeFailed === !0 &&
    n.probeGone === !0 &&
    n.lastProbeIssuedAt !== void 0 &&
    !rH(n.lastProbeIssuedAt) &&
    gw(e) === "first_party_type"
  );
}
function ate(t, e, n = !1) {
  let s = _P("read", t, e);
  return (n ? G3e(e, t.slug) : ite(e, t.slug) || m(e, t.slug))
    ? { ask: !1, foreignRead: !0, attested: !0 }
    : Zv(s);
}
function L0n(t, e) {
  let n = Ct(t.slug),
    s = Tx(n) ? Zv({ ..._P("read", t, e), owned: !1, outsideOrg: !0 }) : ate(t, e);
  return s.ask && s.about === "outside_org" ? { ...s, answeredBy: BJs, informedOnly: !0 } : s;
}
function npo(t, e) {
  if (pb(t) || bN(t)) return () => "none";
  let n = eE(e) || i_e(e.slug);
  if (!Ih(t)) return (a) => (n && !a ? "none" : "save");
  let s = ae(t),
    o = s.mode === "auto",
    i = s.shouldAvoidPermissionPrompts === !0;
  return (a) => (o && !(n && !a) ? "save" : i ? "none" : "ask");
}
function GTi(t, e, n) {
  if (!(ym(e.slug) && !As(t.agentContext))) return (cte("webfetch", t, e.slug, !1), null);
  let o = n(),
    i = xn(e);
  return ({ forcedBy: a, personOnly: u }) => {
    let r = a ?? o;
    cte("webfetch", t, e.slug, !0, r !== null);
    let l = `${u?.lead ?? `Claude wants to fetch the artifact at ${i}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
    if (r === null) {
      let c = Tae(t, "Nothing was fetched", l);
      if (c !== null) return c;
    }
    let d =
      r === null
        ? l
        : `${l} \u2014 your ${r.ruleValue.toolName} ask rule covers ${r.ruleValue.toolName !== qn && r.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
    return {
      behavior: "ask",
      message: d,
      decisionReason: {
        type: "safetyCheck",
        reason: d,
        classifierApprovable: r === null && u === void 0
      },
      ...(r !== null && { matchedAskRule: r }),
      suppressAlwaysAllowRule: !0,
      localDisplayOnly: !0
    };
  };
}
function zTi(t, e) {
  if (HIe("webfetch", t, e.slug, !1) && !As(t.agentContext)) MU(e.slug);
}
export { OIe, bN, W3e, GQt, MIe, kae, ite, G3e, qwr, H0n, ate, L0n, npo, GTi, zTi };

//# sourceMappingURL=chunk-w40awxqs.js.map
