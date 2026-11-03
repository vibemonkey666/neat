// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { EC } from "./chunk-wrtp8qz8.js";
import { Z } from "./chunk-p27rr8yn.js";
import { a } from "./chunk-4cgvah10.js";
import { Q7, As, k } from "./chunk-ajtyjx88.js";
import { i, Zn } from "./chunk-cj37hmns.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ls } from "./chunk-at88wjsn.js";
import { vm, ar, Jt, Kf, eT, Zue, f_ } from "./chunk-r1dvrqha.js";
import { ZA, uz, ny } from "./chunk-6dwr3g2n.js";
import { zJs, ntt, eE, i_e } from "./chunk-fh50nzzj.js";
import { Ct, l_e, lz, cz, rH, tc, d_e, fzo } from "./chunk-khq9hq2s.js";
import { Hme } from "./chunk-2nwr73hs.js";
import { gw } from "./chunk-v3dqhn7m.js";
import { Kae } from "./chunk-5kfjd6mt.js";
import { E$n } from "./chunk-3bmk6ayz.js";
import { Ih, sh, ae } from "./chunk-ar6ynjt8.js";
import { o3, KEs } from "./chunk-7nmtb4b4.js";
import { J0n } from "./chunk-d9b6ed2g.js";
import { o, M, u, $e, B, A } from "./chunk-0bqrj5ah.js";
function R(e, t) {
  return typeof e === "string" || typeof t === "string" ? e === t : EC(e, t);
}
var E = 64;
function I(e) {
  let t = e.url;
  return typeof t === "string" ? (Jt(t) ?? void 0) : void 0;
}
async function nvr(e, t) {
  let n = Z().typeCapabilityReads,
    r = n.get(e);
  if (r !== void 0 && (!t.toolUseId || r.toolUseId === t.toolUseId)) return r.capabilities;
  let s = Date.now(),
    d = await Kae(e, { signal: t.abortController.signal, credentials: t.credentials }),
    c = d.err === null ? d.detail : null,
    l = c === null || c.declaration === "malformed" ? null : c.capabilities,
    _ = l !== null && (c?.declaration === void 0 || Object.keys(c.declaration).length === l.length);
  if (rH(s)) return null;
  if (!n.has(e) && n.size >= E) {
    let m = n.keys().next().value;
    if (m !== void 0) n.delete(m);
  }
  return (n.set(e, { toolUseId: t.toolUseId, capabilities: l, whole: _ }), l);
}
function mpo(e) {
  return Z().typeCapabilityReads.get(e)?.whole === !0;
}
function KOt(e) {
  return Z().typeCapabilityReads.get(e)?.capabilities?.includes("room") === !0;
}
function rvr(e, t) {
  if (As(t.agentContext)) return;
  if (r3(e, t))
    t.setAppState((n) =>
      f(n, t, (r) => (r.artifactWatchApproved ? r : { ...r, artifactWatchApproved: !0 }))
    );
}
var gpo = {
  get: { pages: !1, cursor: "", none: "" },
  list: {
    pages: !0,
    cursor: "page with a smaller `query.limit`",
    none: "a smaller read is the only way to see them"
  },
  query: {
    pages: !0,
    cursor: "page with a smaller `query.limit`",
    none: "narrow with a `query.where`"
  },
  replayed: { pages: !1, cursor: "", none: "" }
};
function hpo(e, t) {
  if (As(e.agentContext)) return;
  e.setAppState((n) =>
    f(n, e, (r) =>
      r.artifactReadPageDataApproved && (!t || r.artifactReadPageDataHumanApproved)
        ? r
        : {
            ...r,
            artifactReadPageDataApproved: !0,
            ...(t && { artifactReadPageDataHumanApproved: !0 })
          }
    )
  );
}
function r3(e, t) {
  return Reflect.get(e, Ip) === !0 && Ih(t) && !K0n(t);
}
function ypo(e) {
  if (e.toolUseId === void 0) return;
  let t = Z(),
    { consentCheckScopes: n } = t;
  if ((n.delete(e.toolUseId), n.size >= x)) {
    let r = n.keys().next().value;
    if (r !== void 0) (n.delete(r), (t.consentCheckScopesEvicted = !0));
  }
  n.set(e.toolUseId, ntt());
}
var x = 256;
function K0n(e) {
  if (e.toolUseId === void 0) return !1;
  let t = Z(),
    n = t.consentCheckScopes.get(e.toolUseId);
  return n === void 0 ? t.consentCheckScopesEvicted : n !== ntt();
}
function zQt(e) {
  return Ih(e) && !Ls(ae(e).mode);
}
function cBe(e, t) {
  return ((e[_y] ?? !1) && ae(t).mode === "plan") || ovr(e);
}
function ovr(e) {
  return Reflect.get(e, bP) === !0;
}
function f(e, t, n) {
  if (K0n(t)) return e;
  let { accountEpoch: r } = Z();
  if ((e.artifactConsentEpoch ?? 0) === r) return n(e);
  return n({ ...e, ...Object.fromEntries(zJs.map((s) => [s, E$n[s]])), artifactConsentEpoch: r });
}
function _po(e, t, n, r) {
  return f(e, t, (s) => ({
    ...s,
    artifactPlanPublishConsentPaths: { ...s.artifactPlanPublishConsentPaths, [n]: { slug: r } }
  }));
}
function C(e, t, n, r, s = () => !0) {
  return f(e, t, (d) => {
    if (n.every((l) => D(d[l]?.[r], s(d[l]?.[r])))) return d;
    let c = { ...d };
    for (let l of n) c[l] = { ...c[l], [r]: s(d[l]?.[r]) };
    return { ...d, ...c };
  });
}
function D(e, t) {
  return e === void 0 || e === !0 || e === "script" || t === !0 || t === "script"
    ? e === t
    : R(e, t);
}
function y(e, t) {
  return t ? [`${e}ConsentSlugs`, `${e}HumanConsentSlugs`] : [`${e}ConsentSlugs`];
}
function bpo(e, t, n) {
  if (As(t.agentContext)) return;
  if (!r3(e, t) || tc(Ct(n))) return;
  t.setAppState((r) => C(r, t, y("artifactDbRead", cBe(e, t)), n));
}
function svr(e, t) {
  if (As(t.agentContext) || Z().routineSourceWriteRefused) return;
  if (!r3(e, t)) return;
  let n = cBe(e, t);
  t.setAppState((r) =>
    f(r, t, (s) =>
      s.artifactDbWriteApproved && (!n || s.artifactDbWriteHumanApproved)
        ? s
        : { ...s, artifactDbWriteApproved: !0, ...(n && { artifactDbWriteHumanApproved: !0 }) }
    )
  );
}
function GW(e) {
  return e?.cowritten === !0 || e?.artifactKind === ZA;
}
function rJ(e) {
  return e?.typeLocked === !0 || e?.typeLock != null;
}
function t1(e, t = tc(e)) {
  return t && rJ(e) && e?.artifactKind !== ZA;
}
function VOt(e, t = tc(e)) {
  let n = lz(e);
  return t1(e, t) && n !== void 0 && gw(n) === "first_party_type";
}
function Spo(e) {
  return (
    e !== void 0 &&
    e.typeLock != null &&
    VOt(e) &&
    !d_e(e) &&
    e.capabilitiesUnknown !== !0 &&
    e.capsReadNotFound !== !0 &&
    l_e(e) &&
    uz(e.capabilities)
  );
}
function K3e() {
  let e = Z();
  if (e.inheritedTypeGrantLatch === null)
    ((e.inheritedTypeGrantLatch =
      Zn.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? k("tengu_swirling_squid", !1) === !0),
      a("tengu_artifact_inherited_type_grant", { on: e.inheritedTypeGrantLatch }));
  return e.inheritedTypeGrantLatch;
}
function V3e(e, t, n, r = !1) {
  if (As(t.agentContext)) return;
  let s = Ct(n),
    d = Reflect.get(e, gL),
    c = (S) => typeof d === "object" && d !== null && Reflect.get(d, S) === !0,
    l = c("classifier") || (ae(t).mode === "auto" && !c("userOnly"));
  if (!P(e, t) || c("once") || l || (tc(s) && !GW(s) && !rJ(s))) return;
  let _ = L(e, t) || (r && LIe(t)),
    m = r && !dme(t);
  t.setAppState((S) =>
    C(S, t, [...y("artifactAssetRead", _), ...(m ? ["artifactOutsideOrgConsentSlugs"] : [])], n)
  );
}
function wpo(e, t) {
  if (t.length === 0 || As(e.agentContext)) return;
  e.setAppState((n) => t.reduce((r, s) => C(r, e, ["artifactOutsideOrgConsentSlugs"], s), n));
}
function vpo(e, t, n) {
  if (As(t.agentContext)) return;
  if (!P(e, t) || dme(t) || (ae(t).mode === "auto" && !eE(I(e)) && !i_e(n)) || tc(Ct(n))) return;
  t.setAppState((r) => C(r, t, ["artifactReadConsentSlugs"], n));
}
function qOt(e, t, n, r) {
  if (As(t.agentContext)) return;
  if (!r3(e, t) || ae(t).mode === "auto") return;
  (fzo(n, r), t.setAppState((s) => C(s, t, y("artifactAssetUpload", cBe(e, t)), n)));
}
function V0n(e, t) {
  return Reflect.get(e, lte) === "auto" && !LIe(t);
}
function q3e(e, t) {
  return e === "auto" && !Z().roomStoppedByUser.has(t);
}
function T(e) {
  let t = e.queryTracking;
  return t === void 0 ? void 0 : `${t.chainId}:${t.depth}`;
}
function Epo(e, t, n) {
  let { roomArmAsked: r } = Z();
  if (n === void 0) r.delete(t);
  else r.set(t, { ...n, at: T(e) });
}
function kpo(e, t) {
  for (let [n, r] of Z().roomArmAsked) {
    if (n === t) continue;
    if (e.keys.includes(r.key) || (e.slug !== void 0 && r.slug === e.slug)) return !0;
  }
  return !1;
}
function Tpo(e) {
  if (e !== void 0) Z().roomArmAsked.delete(e);
}
var q0n = "path:*";
function ivr(e) {
  let t = Z(),
    n = T(e);
  for (let [r, s] of t.roomArmAsked) {
    if (r === e.toolUseId) continue;
    let d = N(e.messages, r);
    if (d === void 0 && s.at !== void 0 && s.at === n) continue;
    t.roomArmAsked.delete(r);
    let c = d?.toolDenialKind;
    if (d === void 0 || c === "user-rejected" || c === "permission-rule") {
      if ((t.roomArmRefusedByUser.add(s.key), t.roomArmRefusedByUser.add(q0n), s.slug !== void 0))
        t.roomStoppedByUser.add(s.slug);
    }
  }
}
function N(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (
      r?.type === "user" &&
      Array.isArray(r.message.content) &&
      r.message.content.some((s) => s.type === "tool_result" && s.tool_use_id === t)
    )
      return r;
  }
  return;
}
function avr(e, t, n) {
  if (As(t.agentContext)) return;
  let r = Reflect.get(e, lte);
  if ((r !== !0 && r !== "auto") || sh(t)) return;
  let s = V0n(e, t) ? "classifier" : !0;
  if (s === "classifier" && !q3e(ae(t).mode, n)) return;
  t.setAppState((d) =>
    f(d, t, (c) =>
      c.artifactRoomJoinConsentSlugs?.[n] === s || c.artifactRoomJoinConsentSlugs?.[n] === !0
        ? c
        : { ...c, artifactRoomJoinConsentSlugs: { ...c.artifactRoomJoinConsentSlugs, [n]: s } }
    )
  );
}
function nK(e) {
  let t = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : void 0,
    n = "text" in e && typeof e.text === "string" ? e.text : void 0,
    r = "cursor" in e && typeof e.cursor === "string" ? e.cursor : void 0;
  return { threadId: t, replyText: n, cursor: r };
}
function Apo(e, t) {
  let n = t !== void 0 && ar.test(t) ? t : "(invalid)",
    r = "viewers of this artifact (share status could not be confirmed)";
  if (e !== null) {
    let s = Ct(e.slug);
    if (s !== void 0 && s.probeFailed !== !0)
      r =
        s.mode === "owner"
          ? "viewers of this artifact (not currently shared)"
          : `${cz(s)} (the artifact is shared)`;
  }
  return { tid: n, audience: r };
}
function Aae(e) {
  let t = (n) => {
    let r = e[n];
    return typeof r === "string" ? r : void 0;
  };
  return { assetId: t("asset_id"), outDir: t("out_dir"), after: t("after") };
}
function KQt(e, t = 1024) {
  return eT(Kf(ny(e, { max: t })) ?? "")
    .replace(f_, " ")
    .replace(Zue, " ");
}
function Cve(e, t = 1024) {
  return `"${KQt(e, t).replace(/\\$/, "\\ ")}"`;
}
function Cpo(e, t) {
  let n = e.trimEnd().replace(/\.$/, "");
  if (n === "") {
    let r = t.replace(/^[\s;,\u2014-]+/, "");
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  return `${n}${t}`;
}
function Rve(e) {
  if (e.behavior !== "ask") return -1;
  let t = e.decisionReason;
  switch (t?.type) {
    case "rule":
      return 4;
    case "safetyCheck":
      return t.classifierApprovable ? 1 : 3;
    case "mode":
      return 2;
    default:
      return 0;
  }
}
var Ip = "__artifactConsentAskCanReachUser",
  YOt = "__artifactWatchWouldArmReplies",
  _y = "__artifactPlanConsentAsk",
  bP = "__artifactUserOnlyConsentAsk",
  Y0n = "__artifactVerifyTargetPinned";
function rut(e) {
  return typeof e.url === "string" ? Jt(e.url) : (Z().verify.lastPublish ?? null);
}
var oJ = "__artifactPublishTarget",
  Y3e = "__artifactRoutineUnaskedFirstPublish",
  VQt = "__artifactPublishSourcePin",
  h = p(() =>
    u({
      path: o(),
      kind: B(["file", "absent", "network"]),
      redirected: M(),
      sha256: o().optional(),
      root: u({ spelling: o(), base: o(), redirected: M().optional() }).optional(),
      copies: o().optional(),
      minted: o().optional(),
      type: $e([o(), A(!1)]),
      shim: M().optional()
    })
  );
function lvr(e) {
  let t = Reflect.get(e, VQt);
  if (t === void 0) return;
  let n = h().safeParse(t);
  return n.success ? n.data : null;
}
var U = p(() => h().omit({ type: !0 }));
function dvr(e) {
  let t = Reflect.get(e, VQt);
  if (t === void 0) return "source_pin_missing";
  return typeof t === "object" &&
    t !== null &&
    Reflect.get(t, "type") === void 0 &&
    U().safeParse(t).success
    ? "source_pin_stale_build"
    : "source_pin_unreadable";
}
var lte = "__artifactRoomJoinDisclosed",
  uBe = "__artifactTypeCreatePin",
  fBe = "__artifactAssetUploadPin",
  X3e = "__artifactRoomSendTarget",
  gL = "__artifactAssetTargetPin",
  qQt = "__artifactReadTargetPin",
  XOt = "__artifactDeletePin",
  JOt = "__artifactDeleteTarget",
  AT = "__artifactDisplayTarget",
  w = "__artifactEndpointBodyFile",
  g = "__artifactConsentPin",
  cvr = "__artifactSyncTargetPin";
function Nv(e, t) {
  return { [g]: t === null ? null : { action: e, slug: t.slug } };
}
var b = [oJ, fBe, X3e, gL, qQt, XOt, g, cvr];
function sJ(e, t) {
  return b.some((n) => n !== t && Reflect.get(e, n) !== void 0);
}
function out(e) {
  return b.some((t) => Reflect.get(e, t) !== void 0);
}
function dte(e, t, n) {
  let r = Reflect.get(e, g);
  return (
    typeof r === "object" &&
    r !== null &&
    Reflect.get(r, "action") === t &&
    Reflect.get(r, "slug") === n
  );
}
function a4(e, t, n) {
  return sJ(e, g) || (Reflect.get(e, g) !== void 0 && !dte(e, t, n));
}
var YQt = "__artifactDbReadTargetPin",
  XQt = "__artifactDbWriteSourcePin",
  v = "__artifactHandlersPin",
  O = "__artifactLiveDocStandIn",
  QOt = "__artifactAsk",
  G = [Ip, O, _y, bP, YOt, ...b, lte, uBe, Y0n, VQt, YQt, XQt, v, JOt, AT, w, J0n, QOt, Y3e];
function Rpo(e) {
  return typeof e === "object" && e !== null && G.some((t) => Reflect.get(e, t) !== void 0);
}
function cte(e, t, n, r, s = !1) {
  if (t.toolUseId !== void 0)
    Z().shareStatus.noticeReadSights[e].note(t.toolUseId, n, r && (s || Ih(t)));
}
function uvr(e, t, n) {
  return Z().shareStatus.noticeReadSights[e].take(t, n);
}
function HIe(e, t, n, r) {
  return t.toolUseId === void 0 ? r : uvr(e, t.toolUseId, n) === !0;
}
function xpo(e, t) {
  if (As(t.agentContext)) return !1;
  return (e[_y] ?? !1) && ae(t).mode === "plan" && Ih(t);
}
function xF(e) {
  return Hme({
    agentId: e.agentId,
    agentType: e.agentContext?.agentType,
    isNonInteractiveSession: e.options.isNonInteractiveSession
  });
}
function sut(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) || o3(xF(e).publishContext);
}
function LIe(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId)?.source;
  return t === "user_temporary" || t === "user_permanent";
}
function dme(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId);
  return (
    t !== void 0 &&
    t.decision !== "reject" &&
    t.source !== "user_temporary" &&
    t.source !== "user_permanent"
  );
}
function P(e, t) {
  return r3(e, t) && !sh(t);
}
function L(e, t) {
  return cBe(e, t) && !dme(t);
}
function X0n(e) {
  return sut(e) && !As(e.agentContext) ? KEs : void 0;
}
function fvr(e) {
  return Q7(e) && !vm(e);
}
export {
  nvr,
  mpo,
  KOt,
  rvr,
  gpo,
  hpo,
  r3,
  ypo,
  K0n,
  zQt,
  cBe,
  ovr,
  _po,
  bpo,
  svr,
  GW,
  rJ,
  t1,
  VOt,
  Spo,
  K3e,
  V3e,
  wpo,
  vpo,
  qOt,
  V0n,
  q3e,
  Epo,
  kpo,
  Tpo,
  q0n,
  ivr,
  avr,
  nK,
  Apo,
  Aae,
  KQt,
  Cve,
  Cpo,
  Rve,
  Ip,
  YOt,
  _y,
  bP,
  Y0n,
  rut,
  oJ,
  Y3e,
  VQt,
  lvr,
  dvr,
  lte,
  uBe,
  fBe,
  X3e,
  gL,
  qQt,
  XOt,
  JOt,
  AT,
  cvr,
  Nv,
  sJ,
  out,
  dte,
  a4,
  YQt,
  XQt,
  QOt,
  Rpo,
  cte,
  uvr,
  HIe,
  xpo,
  xF,
  sut,
  LIe,
  dme,
  X0n,
  fvr
};

//# sourceMappingURL=chunk-hkkvy507.js.map
