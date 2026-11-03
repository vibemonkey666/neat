// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import {
  Yz,
  jsr,
  U9,
  Eli,
  kli,
  Tli,
  lqt,
  Ali,
  tq,
  t6r,
  dTt,
  zqe,
  n6r,
  WNe
} from "./chunk-5rw2zfa0.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { F, L, U, _W, Prs, J, Il } from "./chunk-wrtp8qz8.js";
import { d, E, G, _ie } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Le, wr } from "./chunk-jazcqqqr.js";
import { fk } from "./chunk-xc1j8sdj.js";
import { i } from "./chunk-cj37hmns.js";
import { _, SC, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { _t } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ae, Ci, of } from "./chunk-dvghjmtr.js";
import { Ux, Xoi } from "./chunk-at88wjsn.js";
import { $s } from "./chunk-vw9e882a.js";
import { Dn } from "./chunk-qywdxehb.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { Xkt, Rwn } from "./chunk-7c3thgax.js";
import { nr } from "./chunk-tcvjb2c0.js";
import {
  XU,
  pd,
  Y2t,
  kc,
  tl,
  U_,
  Hw,
  Ep,
  nA,
  Ng,
  Ln,
  dR,
  Lh,
  $4o,
  Et,
  uf
} from "./chunk-ajtyjx88.js";
import { p5r, iai, I0, yZ, m5r, dai } from "./chunk-znkwh1rm.js";
import { Av, f4t, i6, G3r, sxe, bEn, MH } from "./chunk-v19xty83.js";
import { CVt, yNe, ube, Ekt, For, Uii, Bii, i3o } from "./chunk-r1dvrqha.js";
import { zoe } from "./chunk-wejdb0zs.js";
import { aii } from "./chunk-r00j5r9s.js";
import { xtt } from "./chunk-2shtjvf4.js";
import { x7 } from "./chunk-fcym4pv0.js";
import { $Le } from "./chunk-ttxbg7sf.js";
import { otr } from "./chunk-qfvcfbk8.js";
import { ose } from "./chunk-hk0dvhmb.js";
import { o, v, M, oe, T, u, me, B, A } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { z } from "./chunk-p197ae0z.js";
import { sd } from "./chunk-6jbh8yja.js";
import { readFileSync as xe } from "fs";
import { join as Te, resolve as Me } from "path";
function HLe() {
  if (sd()) return "tool_container_daemon";
  if (Il()) return "ccs_tenant";
  return nr() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) ? "hosted_worker" : "none";
}
import { createHash as ve } from "crypto";
import { constants as be } from "fs";
import { unlink as ke, open as Re } from "fs/promises";
function eZn(e) {
  return e !== null && e.admitsOnly !== !0;
}
var P = 8,
  X = 4096,
  Ee = ".stamp.json",
  Z = p(() =>
    u({
      v: A(1),
      identity: o().regex(/^[0-9a-f]{64}$/),
      kind: B(["org", "key", "wif", "token"]),
      sha: o().min(1).max(128),
      confirmed_at: v().int().nonnegative(),
      hipaa_seen: T(o().regex(/^[0-9a-f]{64}$/))
        .max(P)
        .default([]),
      hipaa_seen_incomplete: M().optional(),
      hipaa_ruled_out: T(o().regex(/^[0-9a-f]{64}$/))
        .max(P)
        .optional()
    })
  );
function Stt(e) {
  return `${e}${Ee}`;
}
function p_e(e) {
  return ve("sha256").update(e.descriptor).digest("hex");
}
function $ce(e) {
  return et(e).slice(0, 32);
}
var Q = { seen: [], incomplete: !1, ruledOut: [] };
function Ehn(e) {
  return {
    seen: e.hipaa_seen,
    incomplete: e.hipaa_seen_incomplete === !0,
    ruledOut: e.hipaa_ruled_out ?? []
  };
}
function kzr(e, n) {
  switch (e.kind) {
    case "ok":
      return Ehn(e.stamp);
    case "absent":
      return n;
    case "unusable":
      return { seen: n.seen, incomplete: !0, ruledOut: [] };
  }
}
function ee(e) {
  return e.incomplete ? { hipaa_seen_incomplete: !0, hipaa_ruled_out: e.ruledOut.slice(-P) } : {};
}
function ne(e, n, r) {
  if (e === null || e.sha !== r) return { kind: "unstamped", hipaaSeen: e?.hipaa_seen ?? [] };
  if (e.identity !== n) return { kind: "foreign", hipaaSeen: e.hipaa_seen };
  return { kind: "match", stamp: e };
}
var Ie = new Set(["EMFILE", "ENFILE", "EAGAIN", "EBUSY", "EINTR"]);
function te(e) {
  let n = E(e);
  return n !== void 0 && Ie.has(n)
    ? { kind: "unusable", cause: "io", code: n }
    : { kind: "unusable", cause: "content" };
}
function tZn(e) {
  return e.kind === "unusable" && e.cause === "io";
}
function I(e) {
  let n = t6r(Stt(e), X, { refuseLinkOnWindows: Yz() });
  switch (n.kind) {
    case "absent":
      return { kind: "absent" };
    case "refused":
      return { kind: "unusable", cause: "content" };
    case "error":
      return (
        t(`Policy limits: stamp unreadable (${d(n.error)}); cache reads as unvouched`),
        te(n.error)
      );
    case "ok":
      try {
        let r = Z().safeParse(ot(n.text, !1));
        return r.success ? { kind: "ok", stamp: r.data } : { kind: "unusable", cause: "content" };
      } catch {
        return { kind: "unusable", cause: "content" };
      }
  }
}
async function wtt(e) {
  let n;
  try {
    n = await Re(Stt(e), be.O_RDONLY | $s);
    let r = await n.stat();
    if (!r.isFile() || r.size > X) return { kind: "unusable", cause: "content" };
    let s = Z().safeParse(ot(await n.readFile({ encoding: "utf-8" }), !1));
    return s.success ? { kind: "ok", stamp: s.data } : { kind: "unusable", cause: "content" };
  } catch (r) {
    return G(r) ? { kind: "absent" } : te(r);
  } finally {
    await n?.close().catch(() => {});
  }
}
function S2o({
  principal: e,
  bodySha: n,
  confirmedAt: r,
  bodyTaints: s,
  previous: l,
  authority: f
}) {
  let c = p_e(e),
    y = s.includes("hipaa"),
    h,
    m;
  if (f === "prior_evidence" && !y) ((h = l.seen.slice()), (m = l.ruledOut.slice()));
  else if (((h = l.seen.filter((g) => g !== c)), (m = l.ruledOut.filter((g) => g !== c)), y))
    h.push(c);
  else if (l.incomplete) m.push(c);
  let R = h.length > P;
  return {
    v: 1,
    identity: c,
    kind: e.kind,
    sha: n,
    confirmed_at: r,
    hipaa_seen: h.slice(-P),
    ...ee({ ...l, incomplete: l.incomplete || R, ruledOut: m })
  };
}
var we = "0".repeat(64);
function b7s(e) {
  return {
    v: 1,
    identity: we,
    kind: "token",
    sha: "none",
    confirmed_at: 0,
    hipaa_seen: e.seen.slice(-P),
    ...ee(e)
  };
}
async function Tzr(e, n) {
  await Dn(Stt(e), _(n), 384);
}
async function Azr(e, n) {
  try {
    return (await Tzr(e, n), !0);
  } catch (r) {
    return (t(`Policy limits: failed to write the cache stamp - ${d(r)}`), !1);
  }
}
async function S7s(e) {
  try {
    await ke(Stt(e));
  } catch (n) {
    if (!G(n)) t(`Policy limits: failed to remove the cache stamp - ${d(n)}`);
  }
}
class ie {
  notice = null;
  changed = De();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    ((this.notice = e), this.changed.emit(this.notice));
  }
}
var Oe = new W(() => new ie());
function w() {
  return Oe.of(U().host);
}
function se(e) {
  w().replaceNotice(e);
}
function Nwt() {
  return w().notice;
}
function w7s(e) {
  return w().changed.subscribe(e);
}
var w2o = { subscribe: (e) => w().changed.subscribe(e), getSnapshot: Nwt };
function btt(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || x7(e);
}
function D(e) {
  let n = re(SC(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(n) ? n : "";
}
var Lwt = 16;
function Ezr(e) {
  let n =
    typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : void 0;
  if (!Array.isArray(n)) return 0;
  let r = F(n, (l) => typeof l !== "string" || D(l) === ""),
    s = L(
      n
        .filter((l) => typeof l === "string")
        .map(D)
        .filter((l) => l.length > 0)
    );
  return r + Math.max(0, s.length - Lwt);
}
var ae = p(() =>
    u({
      restrictions: me(o(), u({ allowed: M() })),
      compliance_taints: T(oe())
        .default([])
        .transform((e, n) => {
          let r = L(
            e
              .filter((s) => typeof s === "string")
              .map(D)
              .filter((s) => s.length > 0)
          ).slice(0, Lwt);
          if (e.length > 0 && r.length === 0)
            n.addIssue({
              code: "custom",
              message: "compliance_taints had entries but none were well-formed regime names"
            });
          return r;
        }),
      monitoring_notice: u({
        text: o()
          .max(500)
          .transform((e) => SC(e, "", { keepEmojiJoiners: !0 })),
        url: o()
          .max(2048)
          .url()
          .startsWith("https://")
          .refine((e) => !btt(e))
          .nullish()
          .catch(null)
      })
        .nullable()
        .default(null)
        .catch(null),
      defaults: me(o(), oe()).default({}).catch({}),
      core_skills: T(o().max(128)).max(256).optional().catch([]),
      artifact_create_notice: u({
        text: o()
          .transform((e) =>
            SC(re(e, 500), " ", { keepEmojiJoiners: !0 }).replace(/\s+/g, " ").trim()
          )
          .pipe(o().min(1))
      })
        .nullish()
        .catch({ text: "Your organization requires a person to approve each new artifact." })
    })
  ),
  EKe = { restrictions: {}, compliance_taints: [], monitoring_notice: null, defaults: {} },
  h7s = [
    "ENOTFOUND",
    "EAI_AGAIN",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT",
    "EHOSTUNREACH",
    "ENETUNREACH",
    "EPIPE",
    "CERT_ERROR",
    "ABORTED",
    "OTHER"
  ],
  y7s = [
    "invalid_request_error",
    "authentication_error",
    "permission_error",
    "not_found_error",
    "rate_limit_error"
  ],
  Z7n = [
    "ip_not_in_allowed_range",
    "claude_code_key_creator_not_member",
    "organization_disabled",
    "organization_on_hold",
    "restricted_regime_endpoint",
    "oauth_not_allowed_for_organization",
    "oauth_scope_insufficient",
    "token_expired",
    "oauth_application_deactivated"
  ],
  _7s = [
    "token_expired",
    "token_revoked",
    "token_invalid",
    "credential_invalid",
    "org_access_revoked",
    "workspace_revoked",
    "application_deactivated"
  ];
var Czr = "policy-limits.json",
  Fe = 5000,
  le = 256,
  ue = { kind: "absent" },
  Rzr = 30000;
function xzr() {
  return jsr() ? ue : I(xx());
}
function Pzr(e) {
  return e.kind === "absent" && !jsr() ? I(xx()) : e;
}
class v7s {
  sessionCache = null;
  lastFetchOutcome = null;
  settledWithoutVerdictFor = null;
  failOpenVerdict = !1;
  sessionFromServerFetch = !1;
  lastServedCoreSkills = null;
  verdictEnvBearerDigest = null;
  diskAdoptionSuppressed = !1;
  diskAdoptionEpoch = 0;
  storageV5 = void 0;
  lastStampVerdict = "none";
  storedCopyTrust = "not_asked";
  lastStampMatchedIdentity = null;
  hipaaEvidence = Q;
  hipaaSeenUnreadable = !1;
  diskBodyChecksum = null;
  diskConfirmedAtMs = null;
  sessionBodyReceivedAtMs = null;
  diskRefusedAtMs = null;
  hipaaEvidenceLoaded = !1;
  hintedTaints = [];
  hintedDeniedKeys = [];
  hintedEnforcedKeys = [];
  sessionAttributed = !1;
  attributedBearerDigest = null;
  sessionVerdictDisowned = !1;
  principalRung = "none";
  evidenceRereadForBearer = void 0;
  wifRecordedOrg = void 0;
  wifAccountDiverged = !1;
  wifSourceLocation = void 0;
  wifRecordProfile = void 0;
  oauthPrincipalMemo = null;
  storedLoginAccountAtWire = null;
  storedLoginNotedTokenDigest = null;
  tunnelSocket = void 0;
  machinePinsSignIn = void 0;
  cacheRevision = 0;
  verdictChanged = De();
  heldStartSignal = De();
  replaceSessionCache(e, n = !1, r = !1) {
    if (
      ((this.failOpenVerdict =
        e !== null && (n || (this.failOpenVerdict && (r || e === this.sessionCache)))),
      (this.sessionCache = e),
      e?.core_skills !== void 0)
    )
      this.lastServedCoreSkills = this.sessionFromServerFetch
        ? e.core_skills
        : this.narrowedServedList(e.core_skills);
    if (!r) this.verdictEnvBearerDigest = null;
    if (e === null)
      ((this.sessionAttributed = !1),
        (this.attributedBearerDigest = null),
        (this.sessionVerdictDisowned = !1),
        (this.evidenceRereadForBearer = void 0));
    this.cacheRevision++;
    let s = p5r(this.effectiveTaints());
    if ((se(e?.monitoring_notice ?? null), s)) XU();
    this.emitVerdictChanged();
  }
  effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
    return this.hintedTaints.length === 0 ? e : L([...this.hintedTaints, ...e]).slice(0, Lwt);
  }
  dropHintedTaints() {
    if (
      this.hintedTaints.length === 0 &&
      this.hintedDeniedKeys.length === 0 &&
      this.hintedEnforcedKeys.length === 0
    )
      return;
    if (
      ((this.hintedTaints = []),
      (this.hintedDeniedKeys = []),
      (this.hintedEnforcedKeys = []),
      this.cacheRevision++,
      p5r(this.effectiveTaints()))
    )
      XU();
    this.emitVerdictChanged();
  }
  hintFromRefusedBody(e) {
    if (this.sessionCache !== null && this.sessionAttributed) return;
    let n = e.compliance_taints.filter((h) => F2o.some(([m]) => m === h)),
      r = L([...this.hintedTaints, ...n]),
      s = Object.entries(e.restrictions)
        .filter(([h, m]) => m?.allowed === !1 && !N(h))
        .map(([h]) => h),
      l = L([...this.hintedDeniedKeys, ...s]).slice(0, le),
      f = Object.entries(e.restrictions)
        .filter(([h, m]) => m?.allowed === !0 && N(h))
        .map(([h]) => h),
      c = L([...this.hintedEnforcedKeys, ...f]).slice(0, le),
      y = !1;
    if (e.core_skills !== void 0) {
      let h = this.narrowedServedList(e.core_skills);
      if (
        this.lastServedCoreSkills === null ||
        h.join(`
`) !==
          this.lastServedCoreSkills.join(`
`)
      )
        ((this.lastServedCoreSkills = h), (y = !0));
    }
    if (
      !y &&
      r.length === this.hintedTaints.length &&
      l.length === this.hintedDeniedKeys.length &&
      c.length === this.hintedEnforcedKeys.length
    )
      return;
    if (
      ((this.hintedTaints = r),
      (this.hintedDeniedKeys = l),
      (this.hintedEnforcedKeys = c),
      this.cacheRevision++,
      p5r(this.effectiveTaints()))
    )
      XU();
    this.emitVerdictChanged();
  }
  narrowedServedList(e) {
    let n = new Set(this.lastServedCoreSkills ?? otr);
    return e.filter((r) => n.has(r));
  }
  emitVerdictChanged() {
    try {
      this.heldStartSignal.emit();
    } catch (e) {
      t(`Policy limits: a held-start listener threw: ${d(e)}`, { level: "error" });
    }
    if (U9()) return;
    try {
      this.verdictChanged.emit();
    } catch (e) {
      t(`Policy limits: a verdict-change listener threw: ${d(e)}`, { level: "error" });
    }
  }
}
var Cbi = new W(() => new v7s());
function a() {
  return Cbi.of(U().host);
}
function khn(e) {
  let n = a();
  if (((n.sessionFromServerFetch = e !== null), e === null)) n.sessionBodyReceivedAtMs = null;
  n.replaceSessionCache(e);
}
function v2o(e) {
  a().sessionBodyReceivedAtMs = e;
}
function E2o() {
  return a().sessionBodyReceivedAtMs;
}
function nZn(e) {
  let n = a();
  ((n.sessionFromServerFetch = !1), n.replaceSessionCache(e));
}
function Izr(e) {
  a().verdictEnvBearerDigest = e;
}
function VGt() {
  let e = a().verdictEnvBearerDigest;
  if (e === null) return null;
  let n = U_();
  if (lqt() || !n || xtt({ anthropicAuthEnabled: tl(), oauthScopes: Ln()?.scopes }) || Hw() != null)
    return "gone";
  return $ce(n) === e ? "same" : "replaced";
}
function k2o() {
  let e = a();
  ((e.sessionFromServerFetch = !1),
    (e.sessionBodyReceivedAtMs = null),
    e.replaceSessionCache(EKe, !0));
}
function qGt(e) {
  let n = a(),
    r = n.sessionCache !== null;
  if (!r)
    ((n.sessionFromServerFetch = !1),
      (n.sessionAttributed = n.lastStampVerdict === "match"),
      (n.attributedBearerDigest = n.sessionAttributed ? he() : null),
      (n.sessionVerdictDisowned = n.lastStampVerdict === "disabled"),
      (n.evidenceRereadForBearer = void 0),
      (n.sessionBodyReceivedAtMs = null));
  n.replaceSessionCache(e, !1, r);
}
function T2o(e) {
  if (iai(e)) XU();
}
function Ozr(e, n, r = !0) {
  let s = a();
  if (((s.lastFetchOutcome = e), e === null || e.success)) s.settledWithoutVerdictFor = null;
  else if (!e.retrying && (r || !Mzr(e))) {
    let l =
      e.errorCode === "network_error" ||
      e.errorCode === "timeout" ||
      (e.errorCode === "request_failed" &&
        e.httpStatus !== null &&
        (e.httpStatus === 404 || e.httpStatus >= 500));
    s.settledWithoutVerdictFor = l ? (n ?? E7s() ?? "") : null;
  }
  (s.cacheRevision++, s.emitVerdictChanged());
}
function Mzr(e) {
  return (
    e.errorCode === "network_error" ||
    e.errorCode === "timeout" ||
    (e.errorCode === "request_failed" &&
      (e.httpStatus === null || e.httpStatus >= 500 || (e.httpStatus >= 400 && !_ie(e.httpStatus))))
  );
}
function Fce() {
  return a().lastFetchOutcome;
}
function A2o() {
  a().storageV5 = void 0;
}
function yCe() {
  return f0() !== void 0 || J();
}
function rZn() {
  return HLe() !== "none";
}
function oZn() {
  return yCe() || a().diskAdoptionSuppressed;
}
function u0() {
  return a().sessionCache;
}
function Thn() {
  let e = a();
  ((e.diskAdoptionSuppressed = !0), e.diskAdoptionEpoch++);
}
function vtt() {
  return a().diskAdoptionEpoch;
}
function sZn() {
  a().diskAdoptionSuppressed = !1;
}
function iZn() {
  return a().diskAdoptionSuppressed;
}
function YGt() {
  return a().cacheRevision;
}
function C2o() {
  return U9() ? -1 : YGt();
}
function VO(e) {
  return a().verdictChanged.subscribe(e);
}
function Ett(e) {
  return a().heldStartSignal.subscribe(e);
}
function xx() {
  return Te(Le(), Czr);
}
function f0() {
  let e = a();
  if (e.tunnelSocket === void 0) {
    let n = i.ANTHROPIC_UNIX_SOCKET;
    e.tunnelSocket =
      n &&
      aii({
        ANTHROPIC_UNIX_SOCKET: n,
        CLAUDE_CODE_OAUTH_TOKEN: i.CLAUDE_CODE_OAUTH_TOKEN,
        ANTHROPIC_API_KEY: i.ANTHROPIC_API_KEY,
        ANTHROPIC_AUTH_TOKEN: i.ANTHROPIC_AUTH_TOKEN
      })
        ? n
        : null;
  }
  return e.tunnelSocket ?? void 0;
}
function R2o() {
  a().tunnelSocket = void 0;
}
function pe() {
  let e = a();
  if (e.machinePinsSignIn !== void 0) return e.machinePinsSignIn;
  let n = Rwn();
  if (Xkt()) e.machinePinsSignIn = n;
  return n;
}
function x2o() {
  a().machinePinsSignIn = void 0;
}
var Ahn = new Set(["prosumer_oauth", "third_party_provider", "custom_base_url"]);
function Dzr(e = {}) {
  if (Ae() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !f0() && !Ci()) return "custom_base_url";
  return;
}
function Mh() {
  return wV() === void 0;
}
function wV(e = {}) {
  let n = Dzr(e);
  if (n !== void 0) return n;
  if (f0()) return;
  try {
    let { key: s } = nA({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (s) return;
  } catch {}
  if (kc()) return;
  if (Y2t() && !lqt()) return;
  let r = Ln();
  if (!r?.accessToken) return "no_auth";
  if (!r.scopes?.includes(fk)) return "oauth_no_inference_scope";
  if (r.subscriptionType == null) return;
  if (r.subscriptionType !== "enterprise" && r.subscriptionType !== "team")
    return pe() ? void 0 : "prosumer_oauth";
  return;
}
function XGt() {
  let e = a();
  if (z() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  if (oZn()) return a().sessionCache;
  if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < Fe) return null;
  let n = xzr();
  if (!e.hipaaEvidenceLoaded && !jsr()) b(n);
  e.storedCopyTrust = "not_asked";
  let r;
  try {
    r = cZn(xe(xx(), "utf-8"));
  } catch {
    return null;
  }
  if (r === null) return null;
  try {
    return Hzr(r, Pzr(n));
  } catch (s) {
    return (
      t(`Policy limits: cache admission failed (${d(s)}); cold start`, { level: "error" }),
      null
    );
  }
}
function Hzr(e, n) {
  let r = a();
  if (jsr())
    return (
      (r.lastStampVerdict = "disabled"),
      (r.lastStampMatchedIdentity = null),
      (r.diskConfirmedAtMs = null),
      (r.diskRefusedAtMs = null),
      H(e, void 0)
    );
  let s = tq(Ttt(e));
  if ((b(n), n.kind === "absent"))
    return (
      (r.lastStampVerdict = "legacy"),
      (r.lastStampMatchedIdentity = null),
      (r.diskBodyChecksum = s),
      (r.diskConfirmedAtMs = null),
      (r.diskRefusedAtMs = null),
      H(e, s)
    );
  let l = n.kind === "ok" ? n.stamp : null,
    f = l9(),
    c = f === null ? "" : p_e(f),
    y = ne(l, c, s);
  switch (((r.lastStampMatchedIdentity = null), y.kind)) {
    case "match":
      ((r.lastStampVerdict = "match"),
        (r.lastStampMatchedIdentity = c),
        (r.diskBodyChecksum = s),
        (r.diskConfirmedAtMs = y.stamp.confirmed_at),
        (r.diskRefusedAtMs = null));
      let h = H(e, s);
      if (h !== null) r.dropHintedTaints();
      return h;
    case "unstamped":
      return (
        (r.lastStampVerdict = "torn"),
        (r.diskBodyChecksum = null),
        (r.diskConfirmedAtMs = null),
        (r.diskRefusedAtMs = Date.now()),
        r.hintFromRefusedBody(e),
        t(
          "Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)"
        ),
        null
      );
    case "foreign":
      return (
        (r.lastStampVerdict = "foreign"),
        (r.diskBodyChecksum = null),
        (r.diskConfirmedAtMs = null),
        (r.diskRefusedAtMs = Date.now()),
        r.hintFromRefusedBody(e),
        t(
          "Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)"
        ),
        null
      );
  }
}
function H(e, n) {
  let r = a();
  if (!Yz()) return ((r.storedCopyTrust = "not_asked"), e);
  let s, l;
  try {
    l = { orgs: $Le() };
  } catch (f) {
    (t(`Policy limits: the admin organization pin is not known: ${d(f)}`), (l = void 0));
  }
  if (l === void 0) s = "org_pin_unknown";
  else
    try {
      let f = n6r({
        kind: "policy-limits",
        cachePath: xx(),
        body: Ttt(e),
        bodySha: n ?? tq(Ttt(e)),
        account: uf(),
        pinnedOrgs: l.orgs,
        nowMs: Date.now(),
        roots: WNe()
      });
      if (f.trusted) return ((r.storedCopyTrust = f), e);
      s = f.reason;
    } catch (f) {
      (t(`Policy limits: the gate on a stored copy failed: ${d(f)}`, { level: "error" }),
        (s = "error"));
    }
  return (
    (r.storedCopyTrust = { trusted: !1, reason: s }),
    (r.diskBodyChecksum = null),
    (r.diskConfirmedAtMs = null),
    (r.diskRefusedAtMs = Date.now()),
    r.hintFromRefusedBody(e),
    t(
      `Policy limits: the stored copy is not trusted at rest (${s}); cold start (its compliance taints and explicit denials still deny)`
    ),
    null
  );
}
function l9() {
  let e = a();
  if (((e.principalRung = "none"), f0() !== void 0)) return ((e.principalRung = "tunnel"), null);
  let n = null,
    r = "none";
  try {
    ({ key: n, source: r } = nA());
  } catch {}
  if (!n && kc()) {
    if (((e.principalRung = "wif"), e.wifAccountDiverged)) return null;
    let s = Av(),
      l = i.ANTHROPIC_PROFILE,
      f;
    try {
      if (
        ((f =
          (s === "env-quad"
            ? i.ANTHROPIC_ORGANIZATION_ID?.trim()
            : i6()?.organizationUuid?.trim()) || ""),
        f && e.wifSourceLocation === void 0)
      ) {
        if (s === "profile-implicit") {
          let m = MH();
          e.wifRecordProfile = m === null ? void 0 : sxe(m);
        } else if (s === "profile-explicit") e.wifRecordProfile = l;
        e.wifSourceLocation = K(s);
      }
    } catch (m) {
      return (
        t(
          `Policy limits: WIF profile unreadable (${d(m)}); its policy verdicts are session-only until restart`
        ),
        (e.wifAccountDiverged = !0),
        null
      );
    }
    if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = f.toLowerCase() || null;
    else if (e.wifRecordedOrg !== (f.toLowerCase() || null))
      return (
        t(
          "Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"
        ),
        (e.wifAccountDiverged = !0),
        null
      );
    if (!f) return null;
    let c = s === "env-quad" ? null : MH(),
      y = s === "env-quad" ? K("env-quad") : l ? q(c, l) : void 0;
    if (
      (s === "profile-implicit" && l !== void 0 && l !== e.wifRecordProfile) ||
      (s === "profile-explicit" && (l === void 0 || l !== e.wifRecordProfile)) ||
      (y !== void 0 && y !== e.wifSourceLocation) ||
      (y === void 0 &&
        s !== "env-quad" &&
        e.wifSourceLocation !== void 0 &&
        (c === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(q(c, ""))))
    )
      return (
        t(
          "Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart"
        ),
        (e.wifAccountDiverged = !0),
        null
      );
    let h = Kt(f);
    if (h) return O(h);
    return {
      kind: "wif",
      descriptor: `wif:${$ce([e.wifSourceLocation, f.toLowerCase()].join("\x00"))}`
    };
  }
  if (Et()) {
    let s = Ln()?.accessToken;
    if (s) return ((e.principalRung = "oauth"), He(s));
  }
  if (r === "apiKeyHelper") return ((e.principalRung = "helper"), null);
  if (n) return ((e.principalRung = "key"), { kind: "key", descriptor: `key:${$ce(n)}` });
  return null;
}
function P2o() {
  let e = a();
  if (e.wifAccountDiverged || Hw() || !kc()) return;
  let n;
  try {
    n = e.wifSourceLocation !== void 0 && K(Av()) !== e.wifSourceLocation;
  } catch (s) {
    (t(
      `Policy limits: WIF profile selection unreadable (${d(s)}); its policy verdicts are session-only until restart`
    ),
      (e.wifAccountDiverged = !0));
    return;
  }
  if (n) {
    ((e.wifAccountDiverged = !0),
      t(
        "Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart"
      ));
    return;
  }
  let r;
  try {
    if (Av() === "env-quad") r = i.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null;
    else (f4t(), (r = i6()?.organizationUuid?.trim().toLowerCase() ?? null));
  } catch (s) {
    (t(
      `Policy limits: WIF account record unreadable (${d(s)}); its policy verdicts are session-only until restart`
    ),
      (e.wifAccountDiverged = !0));
    return;
  }
  if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = r;
  else if (e.wifRecordedOrg !== r)
    ((e.wifAccountDiverged = !0),
      t(
        "Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"
      ));
}
function GRi() {
  let e = a();
  try {
    if (Hw() || !kc() || Av() === "env-quad") return "not_in_use";
    let n = MH(),
      r = n === null ? void 0 : G3r(n, e.wifRecordProfile ?? bEn(n));
    if (r === void 0) return "unreadable";
    let s = ce(i6()),
      l = e.wifRecordedOrg === void 0 ? s : e.wifRecordedOrg;
    if (ce(r) !== l) return "moved";
    return s === l ? "same" : "memory_differs";
  } catch {
    return "unreadable";
  }
}
function ce(e) {
  let n = e?.organizationUuid;
  return typeof n === "string" ? n.trim().toLowerCase() || null : null;
}
async function Lzr(e, n) {
  let r = Ln()?.accessToken;
  if (!r) return;
  let s = a(),
    l = await Lh(n);
  if (l !== "store") {
    if (l !== "none") s.storedLoginNotedTokenDigest = $ce(r);
    return;
  }
  let f = await $4o(e),
    c = Ln()?.accessToken;
  if (!c) return;
  ((s.storedLoginNotedTokenDigest = $ce(c)),
    (s.storedLoginAccountAtWire = { tokenDigest: $ce(c), organizationUuid: c === r ? f : null }));
}
function I2o() {
  let e = Ln()?.accessToken;
  if (!e) return !1;
  let n = a(),
    r = $ce(e);
  if (n.storedLoginNotedTokenDigest !== r) return !0;
  let s = n.storedLoginAccountAtWire;
  return (
    s !== null && s.tokenDigest === r && s.organizationUuid !== (Kt(uf()?.organizationUuid) ?? null)
  );
}
function He(e) {
  let n = a(),
    r = uf(),
    s = Kt(i.CLAUDE_CODE_ORGANIZATION_UUID),
    l = $ce(e),
    f = n.storedLoginAccountAtWire,
    c = f !== null && f.tokenDigest === l ? f.organizationUuid : void 0,
    y = [
      l,
      s ?? "",
      r?.organizationUuid ?? "",
      c === void 0 ? "" : `fresh:${c ?? "-"}`,
      i.CLAUDE_CODE_OAUTH_TOKEN ? "env" : ""
    ].join("|"),
    h = n.oauthPrincipalMemo;
  if (h?.key === y && (h.expiresAtMs === null || Date.now() < h.expiresAtMs)) return h.principal;
  let m = { kind: "token", descriptor: `token:${l}` },
    R = !1,
    g = dR();
  switch (g) {
    case "store": {
      let S = Kt(r?.organizationUuid) ?? null;
      if (c !== void 0 && c !== S)
        m = { kind: "token", descriptor: `token:${l}`, unclassified: !0 };
      else if (S) m = O(S);
      else m = { kind: "token", descriptor: `token:${l}`, storedLoginOrgless: !0 };
      break;
    }
    case "env":
    case "fd":
      if (g === "fd" && _W() && !pd()) {
        let S = Kt(Prs()),
          Pe = Kt(r?.organizationUuid);
        ((m =
          S !== null && S.toLowerCase() === Pe?.toLowerCase() ? { ...O(S), admitsOnly: !0 } : null),
          (R = !0));
      } else if (s) m = { ...O(s), bearerDigest: l };
      break;
    case "none":
      m = { kind: "token", descriptor: `token:${l}`, unclassified: !0 };
      break;
  }
  return (
    (n.oauthPrincipalMemo = {
      key: y,
      principal: m,
      daemonSnapshotWorker: R,
      expiresAtMs: g === "none" || m === null ? Date.now() + Rzr : null
    }),
    m
  );
}
function O(e) {
  return { kind: "org", descriptor: `org:${e.toLowerCase()}` };
}
function Nzr() {
  let e = a();
  ((e.sessionAttributed = !0),
    (e.attributedBearerDigest = he()),
    (e.sessionVerdictDisowned = !1),
    (e.evidenceRereadForBearer = void 0),
    e.dropHintedTaints());
}
function fe() {
  let e = Ln()?.accessToken;
  return e ? $ce(e) : null;
}
function he() {
  let e = a();
  try {
    l9();
  } catch {
    return null;
  }
  return e.principalRung === "oauth" ? fe() : null;
}
function JGt() {
  let e = a(),
    n = !e.sessionVerdictDisowned;
  if (
    ((e.sessionAttributed = !1),
    (e.attributedBearerDigest = null),
    (e.sessionVerdictDisowned = !0),
    (e.evidenceRereadForBearer = void 0),
    n)
  )
    (e.cacheRevision++, e.emitVerdictChanged());
}
function E7s() {
  let e = l9();
  return e === null ? null : p_e(e);
}
function aZn() {
  let e = a().storedCopyTrust;
  return e === "not_asked" ? e : dTt(e);
}
function O2o() {
  return zqe(a().storedCopyTrust);
}
function lZn() {
  return a().lastStampVerdict;
}
function M2o() {
  return a().lastStampMatchedIdentity;
}
function $zr() {
  let e = a();
  if (!e.hipaaEvidenceLoaded) b(ye());
  return e.hipaaEvidence;
}
function b(e) {
  let n = a();
  if (((n.hipaaEvidenceLoaded = !tZn(e)), e.kind === "ok")) n.hipaaEvidence = Ehn(e.stamp);
  else if (e.kind === "unusable" && !tZn(e)) n.hipaaSeenUnreadable = !0;
}
function ye() {
  return yCe() ? ue : I(xx());
}
function dZn() {
  return a().hipaaEvidence;
}
function D2o() {
  let e;
  try {
    e = l9();
  } catch (s) {
    (t(
      `Policy limits: principal unreadable for the evidence tier (${d(s)}); judged on the machine's evidence`,
      { level: "error" }
    ),
      (e = { kind: "token", descriptor: "token:unreadable", unclassified: !0 }));
  }
  if (e === null || e.admitsOnly === !0) {
    let s = a().oauthPrincipalMemo;
    if (e === null && (!s?.daemonSnapshotWorker || s.principal !== null)) return !1;
    let l = $zr();
    return l.seen.length > 0 || l.incomplete;
  }
  let n = $zr();
  if (j(e)) {
    let s = e.storedLoginOrgless === !0 && e.unclassified !== !0 && n.ruledOut.includes(p_e(e));
    return n.seen.length > 0 || (n.incomplete && !s);
  }
  let r = p_e(e);
  return n.seen.includes(r) || (n.incomplete && !n.ruledOut.includes(r));
}
function j(e) {
  return e.unclassified === !0 || e.storedLoginOrgless === !0;
}
function Fzr(e, n, r) {
  let s = a();
  ((s.diskBodyChecksum = e),
    (s.diskConfirmedAtMs = r),
    (s.hipaaEvidence = n),
    (s.hipaaEvidenceLoaded = !0),
    (s.diskRefusedAtMs = null));
}
function ktt(e) {
  let n = a(),
    { hipaaEvidence: r, hipaaSeenUnreadable: s } = n;
  if ((b(e), s !== n.hipaaSeenUnreadable || !Ne(r, n.hipaaEvidence)))
    (n.cacheRevision++, n.emitVerdictChanged());
}
function Ne(e, n) {
  return (
    e.incomplete === n.incomplete &&
    e.seen.length === n.seen.length &&
    e.seen.every((r, s) => r === n.seen[s]) &&
    e.ruledOut.length === n.ruledOut.length &&
    e.ruledOut.every((r, s) => r === n.ruledOut[s])
  );
}
function H2o() {
  return a().diskBodyChecksum;
}
function L2o() {
  return a().diskConfirmedAtMs;
}
function QGt() {
  let e = a();
  ((e.diskBodyChecksum = null),
    (e.diskConfirmedAtMs = null),
    (e.diskRefusedAtMs = null),
    (e.hipaaEvidenceLoaded = !1),
    (e.lastStampVerdict = "none"),
    (e.lastStampMatchedIdentity = null),
    (e.storedCopyTrust = "not_asked"),
    e.dropHintedTaints());
}
function cZn(e) {
  let n = Chn(ot(e, !1));
  return n.success ? n.data : null;
}
var ge = new WeakMap();
function Chn(e) {
  let n = ae().safeParse(e);
  if (n.success) ge.set(n.data, e);
  return n;
}
function Ttt(e) {
  return ge.get(e) ?? e;
}
function Uzr(e, n) {
  let r = a();
  if (((r.storageV5 = e), n !== null && r.sessionCache === null && !r.diskAdoptionSuppressed))
    qGt(n);
}
var N2o = {
  allow_product_feedback: {
    deniedUnder: ["hipaa", "zdr"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Feedback",
    verb: "is",
    requirementId: "HIPAA-R1"
  },
  allow_web_fetch: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Web fetch",
    verb: "is",
    requirementId: "HIPAA-R3"
  },
  allow_memory_sync: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "allow",
    label: "Memory sync",
    verb: "is",
    requirementId: "HIPAA-R5",
    hardBlockUnder: ["hipaa"]
  },
  allow_design_sync: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "Design sync",
    verb: "is",
    requirementId: "HIPAA-R9"
  },
  allow_channels: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Channels",
    verb: "are",
    requirementId: "HIPAA-R71"
  },
  ...{},
  allow_projects_tool: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Projects",
    verb: "are",
    requirementId: "HIPAA-R17",
    hardBlockUnder: ["hipaa"]
  },
  allow_claude_browser_extension: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Claude in Chrome",
    verb: "is",
    requirementId: "HIPAA-R34"
  },
  allow_remote_sessions: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Cloud sessions",
    verb: "are",
    requirementId: "HIPAA-R6"
  },
  allow_remote_control: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Remote Control",
    verb: "is",
    requirementId: "HIPAA-R6"
  },
  allow_cobalt_plinth: {
    deniedUnder: ["hipaa", "zdr"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Artifacts",
    verb: "are",
    requirementId: "HIPAA-R16"
  },
  allow_team_onboarding: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Team onboarding",
    verb: "is",
    requirementId: "HIPAA-R13",
    hardBlockUnder: ["hipaa"]
  },
  allow_error_reporting: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Error reporting",
    verb: "is",
    requirementId: "HIPAA-R19"
  },
  allow_auto_mode_sibling_docs: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Repository lookups",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_repo_visibility_probe: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Repository visibility checks",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_send_file: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "File upload",
    verb: "is",
    requirementId: "HIPAA-R37"
  },
  allow_drive_file_references: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "File references for connectors",
    verb: "are",
    requirementId: "HIPAA-R87"
  },
  allow_heap_dump: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Heap dumps",
    verb: "are",
    requirementId: "HIPAA-R38"
  },
  allow_local_checkpoint_commit: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Usage-limit checkpoints",
    verb: "are",
    requirementId: "HIPAA-R39"
  },
  allow_plugin_skill_search: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Plugin and skill search",
    verb: "is",
    requirementId: "HIPAA-R26"
  },
  allow_plugin_directory_search: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "The plugin directory",
    verb: "is",
    requirementId: "HIPAA-R35"
  },
  allow_connector_suggest: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Connector suggestions",
    verb: "are",
    requirementId: "HIPAA-R43"
  },
  ...{
    allow_mcp_task_worker_wake: {
      deniedUnder: ["hipaa"],
      onCacheMiss: "deny",
      label: "Restarting a worker for a background task",
      verb: "is",
      requirementId: "HIPAA-R57"
    }
  },
  allow_plugin_publish: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Publishing a plugin from Claude Code",
    verb: "is",
    requirementId: "HIPAA-R72"
  },
  ...{},
  allow_account_skills_sync: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account skills sync",
    verb: "is",
    requirementId: "HIPAA-R29"
  },
  allow_account_plugins_sync: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account plugins sync",
    verb: "is",
    requirementId: "HIPAA-R30"
  },
  allow_bundled_skills: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "Bundled skills",
    verb: "are",
    requirementId: "HIPAA-R56"
  },
  allow_mycelium: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Peer messaging",
    verb: "is",
    requirementId: "HIPAA-R25",
    hardBlockUnder: ["hipaa"]
  },
  ...{},
  allow_usage_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage patterns",
    verb: "are",
    requirementId: "HIPAA-R31"
  },
  allow_skill_doctor_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Skill token counts",
    verb: "are",
    requirementId: "HIPAA-R32"
  },
  allow_insights: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Insights",
    verb: "are",
    requirementId: "HIPAA-R40"
  },
  allow_stats_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage stats",
    verb: "are",
    requirementId: "HIPAA-R42"
  },
  ...{},
  allow_model_catalog: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "The model catalog",
    verb: "is",
    requirementId: "HIPAA-R33"
  },
  allow_container_result_files: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Saving large tool results in the tool container",
    verb: "is",
    requirementId: "HIPAA-R53"
  },
  allow_promo_offers: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Promotional offers",
    verb: "are",
    requirementId: "HIPAA-R54"
  },
  allow_previous_conversation_pointer: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Linking a new conversation to the one it replaces",
    verb: "is",
    requirementId: "HIPAA-R58"
  },
  allow_api_auth_warm: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Warming the API credential cache",
    verb: "is",
    requirementId: "HIPAA-R59"
  },
  allow_cache_keepalive: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Renewing the prompt cache lifetime",
    verb: "is",
    requirementId: "HIPAA-R65"
  }
};
function $2o(e) {
  return Object.hasOwn(N2o, e);
}
function $wt(e) {
  return $2o(e) ? N2o[e] : void 0;
}
var de = new Set(["hipaa"]);
function Rbi(e) {
  return $wt(e)?.serverPopulated === !0 && !Eli();
}
function k7s(e) {
  return $wt(e)?.transcriptScan === !0 && !Ali();
}
function k() {
  return Object.keys(N2o).filter($2o);
}
function C7(e) {
  let n = $wt(e);
  return { featureLabel: n?.label ?? e, verb: n?.verb ?? "is" };
}
var F2o = k().flatMap((e) => ($wt(e)?.deniedUnder ?? []).map((n) => [n, e])),
  xbi = k().flatMap((e) => ($wt(e)?.hardBlockUnder ?? []).map((n) => [n, e])),
  Pbi = new Set(k().filter((e) => $wt(e)?.onCacheMiss !== "allow")),
  U2o = new Set(k().filter((e) => $wt(e)?.onCacheMiss === "hold")),
  T7s = new Set(k().filter((e) => $wt(e)?.onFailOpenVerdict === "deny")),
  Ue = new Set(["allow_product_feedback"]),
  _e = new Set(["allow_web_fetch", "allow_design_sync", "allow_channels", ...[]]);
function Rhn(e) {
  let n = Be(e);
  return Ibi(e) || n;
}
function Ibi(e) {
  if (!_e.has(e) || Tli() || !Mh()) return !1;
  let n = a();
  if (n.sessionCache !== null && !n.failOpenVerdict && !n.sessionVerdictDisowned) return !1;
  let r;
  try {
    (l9(), (r = n.principalRung));
  } catch {
    return !0;
  }
  if (r === "wif" && Et()) return !0;
  if (r === "none" && U_() !== void 0 && lqt()) return !1;
  return r === "oauth" || r === "tunnel" || r === "none";
}
function Be(e) {
  if (!_e.has(e) || !Mh() || kli()) return !1;
  let n = a();
  if (n.sessionCache !== null && n.sessionAttributed) {
    let r = fe();
    if (r !== null && r === n.attributedBearerDigest) return !1;
    if (n.evidenceRereadForBearer !== r)
      ((n.evidenceRereadForBearer = r), (n.hipaaEvidenceLoaded = !1));
    let s = $zr();
    if ((s.seen.length === 0 && !s.incomplete) || !Ve()) return !1;
  }
  return D2o();
}
function Ve() {
  try {
    let e = l9();
    return e !== null && j(e);
  } catch {
    return !0;
  }
}
function on(e) {
  let n = Pw();
  if (k7s(e)) {
    let r = n?.restrictions[e];
    if (r) return r.allowed;
    return !(Mh() && a().hintedDeniedKeys.includes(e));
  }
  if (!n) {
    if (Pbi.has(e)) {
      if (Mh() && !(U2o.has(e) && LLe() && !kKe())) return !1;
      if (Ue.has(e) && _t() && !(e === "allow_product_feedback" && zoe())) return !1;
    }
    if (x(e, m5r())) return !1;
    if (Rhn(e)) return !1;
    let r = a();
    if (r.hintedDeniedKeys.length === 0 && r.hintedTaints.length === 0) return !0;
    if (!Mh()) return !0;
    if (r.hintedDeniedKeys.includes(e)) return !1;
    return Att({ restrictions: {}, compliance_taints: [] }, e, r.hintedTaints);
  }
  if (U2o.has(e) && vV() && !(LLe() && !kKe())) return !1;
  if (T7s.has(e) && vV()) return !1;
  if (Rhn(e)) return !1;
  return !Se(e, n);
}
function Se(e, n) {
  let r = a();
  if (n.restrictions[e] === void 0 && r.hintedDeniedKeys.includes(e)) return !0;
  let s = r.sessionFromServerFetch;
  return !Att(
    { restrictions: n.restrictions, compliance_taints: s ? n.compliance_taints : [] },
    e,
    [...m5r(), ...r.hintedTaints, ...(s ? [] : n.compliance_taints)]
  );
}
function Att(e, n, r = []) {
  let s = e.compliance_taints;
  if (xbi.some(([c, y]) => y === n && (s.includes(c) || r.includes(c)))) return !1;
  let l = e.restrictions[n];
  if (l) return l.allowed;
  if (k7s(n)) return !0;
  let f = Rbi(n)
    ? [...r.filter((c) => !(de.has(c) && s.includes(c))), ...s.filter((c) => !de.has(c))]
    : [...r, ...s];
  return !x(n, f);
}
function B2o(e) {
  if (e.compliance_taints.some((n) => F2o.some(([r]) => r === n))) return !1;
  if (
    Object.keys(e.defaults ?? {}).length > 0 ||
    (e.monitoring_notice !== null && e.monitoring_notice !== void 0) ||
    (e.artifact_create_notice !== null && e.artifact_create_notice !== void 0)
  )
    return !1;
  return Object.entries(e.restrictions).every(([n, r]) =>
    N(n) ? r?.allowed !== !0 : r?.allowed !== !1
  );
}
function N(e) {
  return e.startsWith("enforce_") || e.startsWith("require_");
}
function x(e, n) {
  if (n.length === 0) return !1;
  for (let [r, s] of F2o) if (s === e && n.includes(r)) return !0;
  return !1;
}
dai({
  isPolicyAllowed: (e) => on(e),
  commandPolicyGateAllows: (e) => Mbi(e),
  policyDenyKind: (e) => Xc(e),
  policyDeniedReason: (e, n, r) => Sp(e, n, r),
  complianceTaintsSettled: () => Bzr(),
  policyLimitsCacheLoaded: () => R7(),
  autoDefaultVerdictState: () => Obi(),
  policyVerdictAbsent: () => vV(),
  principalSeenUnderHipaa: () => D2o(),
  coreSkills: () => Dbi(),
  rememberedCoreSkills: () => Hbi()
});
function Obi() {
  if (!vV()) return "loaded";
  if (LLe()) return Ke() ? "unobtainable_seen_hipaa" : "unobtainable";
  return "pending";
}
function Ke() {
  let e;
  try {
    e = l9();
  } catch {
    return !1;
  }
  if (e === null || j(e)) return !1;
  return $zr().seen.includes(p_e(e));
}
function Mbi(e) {
  if (!$2o(e))
    return (
      t(`[policy] policyGate names unknown policy key "${e}"; denying`, { level: "warn" }),
      !1
    );
  return on(e);
}
function vV() {
  if (!Mh()) return !1;
  return Pw() === null || a().failOpenVerdict;
}
function d9() {
  return Pw() !== null && a().sessionFromServerFetch;
}
function j2o() {
  return a().sessionVerdictDisowned;
}
function LLe() {
  if (!vV()) return !1;
  let e = a();
  if (e.settledWithoutVerdictFor === null) return !1;
  let n;
  try {
    n = E7s();
  } catch {
    return !1;
  }
  return e.settledWithoutVerdictFor === (n ?? "");
}
function kKe() {
  let e;
  try {
    e = l9();
  } catch {
    return !0;
  }
  if (e === null || e.unclassified || e.admitsOnly) return !0;
  let n = a();
  if (!n.hipaaSeenUnreadable) b(ye());
  let r = D2o();
  return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || r;
}
function m_e() {
  if (!Mh() || Pw() !== null || rZn()) return !1;
  return V();
}
function V() {
  let e = a().lastFetchOutcome;
  return e !== null && !e.success && e.httpStatus === 404;
}
function Sp(e, n, r, s) {
  if (on(e)) return null;
  if (m_e()) return Ekt(n);
  switch (Xc(e)) {
    case "route_missing":
      return Ekt(n);
    case "cache_miss":
      return ube(n);
    case "latched":
      return yNe(n, r);
    case "org_denied":
    case null:
      return CVt(n, r, yZ(), s);
  }
}
function W2o() {
  return ose(I0()).length > 0;
}
function Xc(e) {
  if (on(e)) return null;
  if (uZn(e)) return "latched";
  let n = Pw();
  if (n !== null) {
    if ((U2o.has(e) || (T7s.has(e) && !Se(e, n))) && vV())
      return V() ? "route_missing" : "cache_miss";
    if (!Rhn(e)) return "org_denied";
    return V() && !rZn() ? "route_missing" : "cache_miss";
  }
  return m_e() ? "route_missing" : "cache_miss";
}
function uZn(e) {
  if (!x(e, m5r()) || x(e, yZ())) return !1;
  if (Pw() === null) return !0;
  return Y()?.[e]?.allowed !== !1;
}
function G2o(e) {
  let n = Xc(e);
  if (n === null) return null;
  if (m_e()) return i3o();
  switch (n) {
    case "route_missing":
      return i3o();
    case "cache_miss":
      return Bii();
    case "latched":
      return Uii();
    case "org_denied":
      return For(yZ());
  }
}
function Bzr() {
  let e = VGt();
  if (e !== null && e !== "same") return !1;
  if (
    Ux() ||
    Xoi() ||
    !of() ||
    Ae() !== "firstParty" ||
    i.ANTHROPIC_UNIX_SOCKET !== void 0 ||
    Ng() !== void 0 ||
    (U_() !== void 0 &&
      !xtt({ anthropicAuthEnabled: tl(), oauthScopes: Ln()?.scopes }) &&
      !(e === "same" && Pw() !== null))
  )
    return !1;
  if (Pw() !== null) return !0;
  let n = Ln();
  return (
    (n?.subscriptionType === "pro" || n?.subscriptionType === "max") &&
    n.scopes?.includes(fk) === !0 &&
    dR() === "store" &&
    !pe() &&
    !wr() &&
    !Ep({ skipRetrievingKeyFromApiKeyHelper: !0 }).key &&
    !kc()
  );
}
function TKe(e) {
  if (!Mh()) return !1;
  let n = a();
  return (
    n.hintedDeniedKeys.includes(e) ||
    !Att({ restrictions: {}, compliance_taints: [] }, e, n.hintedTaints)
  );
}
function zRi(e) {
  return Y()?.[e]?.allowed === !0;
}
function ZGt(e) {
  let n = Y();
  if (n?.[e]?.allowed === !0) return !0;
  let r = a();
  return (
    r.hintedEnforcedKeys.includes(e) &&
    n?.[e] === void 0 &&
    (n === null || !r.sessionAttributed) &&
    Mh()
  );
}
function z2o(e) {
  let n = Pw()?.defaults[e];
  return typeof n === "boolean" ? n : void 0;
}
function Dbi() {
  return Pw()?.core_skills ?? [];
}
function Fwt() {
  return (Pw() ?? a().sessionCache)?.artifact_create_notice?.text ?? null;
}
function Hbi() {
  if (!Mh()) return [];
  return Pw()?.core_skills ?? a().lastServedCoreSkills;
}
function K2o() {
  a().lastServedCoreSkills = null;
}
function Pw() {
  if (!Mh()) return null;
  let e = a();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let n = XGt();
  if (n) return (qGt(n), n);
  return null;
}
function R7() {
  if (!Mh()) return !0;
  return Pw() !== null;
}
function Y() {
  return Pw()?.restrictions ?? null;
}
function K(e) {
  if (e === "env-quad") return i.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
  let n = MH();
  return n === null || e === null ? "" : q(n, bEn(n));
}
function q(e, n) {
  return e === null ? "" : `${Me(e)}\x00${n}`;
}
export {
  btt,
  Lwt,
  Ezr,
  EKe,
  h7s,
  y7s,
  Z7n,
  _7s,
  HLe,
  eZn,
  Stt,
  p_e,
  $ce,
  Ehn,
  kzr,
  tZn,
  wtt,
  S2o,
  b7s,
  Tzr,
  Azr,
  S7s,
  Nwt,
  w7s,
  w2o,
  Czr,
  Rzr,
  xzr,
  Pzr,
  v7s,
  Cbi,
  khn,
  v2o,
  E2o,
  nZn,
  Izr,
  VGt,
  k2o,
  qGt,
  T2o,
  Ozr,
  Mzr,
  Fce,
  A2o,
  yCe,
  rZn,
  oZn,
  u0,
  Thn,
  vtt,
  sZn,
  iZn,
  YGt,
  C2o,
  VO,
  Ett,
  xx,
  f0,
  R2o,
  x2o,
  Ahn,
  Dzr,
  Mh,
  wV,
  XGt,
  Hzr,
  l9,
  P2o,
  GRi,
  Lzr,
  I2o,
  Nzr,
  JGt,
  E7s,
  aZn,
  O2o,
  lZn,
  M2o,
  $zr,
  dZn,
  D2o,
  Fzr,
  ktt,
  H2o,
  L2o,
  QGt,
  cZn,
  Chn,
  Ttt,
  Uzr,
  N2o,
  $2o,
  $wt,
  Rbi,
  k7s,
  C7,
  F2o,
  xbi,
  Pbi,
  U2o,
  T7s,
  Rhn,
  Ibi,
  on,
  Att,
  B2o,
  Obi,
  Mbi,
  vV,
  d9,
  j2o,
  LLe,
  kKe,
  m_e,
  Sp,
  W2o,
  Xc,
  uZn,
  G2o,
  Bzr,
  TKe,
  zRi,
  ZGt,
  z2o,
  Dbi,
  Fwt,
  Hbi,
  K2o,
  Pw,
  R7
};

//# sourceMappingURL=chunk-cr7a2cdd.js.map
