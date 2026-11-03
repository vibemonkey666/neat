// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { ye, J } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { ZH } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { _t } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { _l } from "./chunk-at88wjsn.js";
import { Uu, Nc, dX, Rv, g2, iy, mf, VZo, MM, YZo } from "./chunk-4nzy53ma.js";
import { j$, Qt } from "./chunk-1e5yp9hx.js";
import { mg, pe, $5r, Gp, VRe, ife, Abe } from "./chunk-7c3thgax.js";
import { P0e, cr, k } from "./chunk-ajtyjx88.js";
import { DRe, Zc, Cqe } from "./chunk-r1dvrqha.js";
import { Z, aj } from "./chunk-p27rr8yn.js";
import { roe, uj, gCe } from "./chunk-8v77jr62.js";
import { PLe, PGt, QT } from "./chunk-6dwr3g2n.js";
import { wGt, ALe, Ct } from "./chunk-khq9hq2s.js";
import { VJs } from "./chunk-hetc6t05.js";
import { EKe, Mzr, Fce, Mh, wV, Rhn, on, m_e, Xc, TKe, Pw } from "./chunk-cr7a2cdd.js";
import { tm, toe } from "./chunk-h2tyaevk.js";
import { a_e, E7n } from "./chunk-ctvsv6p4.js";
import { woe } from "./chunk-s6fbb5tf.js";
var q = "/_warmup",
  x = 3000,
  z = 600000,
  Q = 262144;
function UJs(e) {
  let n = Z();
  return n.contentHostEgressDenied.has(e.env) || n.contentHostEgressUnanswered.has(Cqe(e));
}
function T(e) {
  let n = Z().contentHostEgressProbed.get(e);
  return n !== void 0 && Date.now() - n < z;
}
function KGo(e) {
  return J() || Z().contentHostEgressDenied.has(e.env) || T(Cqe(e));
}
async function ett(e, n) {
  let r = Z(),
    o = Cqe(e);
  if (J()) {
    (r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o));
    return;
  }
  if (r.contentHostEgressDenied.has(e.env)) {
    (r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o));
    return;
  }
  if (T(o)) return;
  let s = r.contentHostEgressInFlight.get(o);
  if (s !== void 0)
    return s.catch((l) => {
      if (n.aborted) throw l;
      return ett(e, n);
    });
  let f = X(e, o, n).finally(() => {
    r.contentHostEgressInFlight.delete(o);
  });
  return (r.contentHostEgressInFlight.set(o, f), f);
}
async function X(e, n, r) {
  let o = Z(),
    s = () => {
      (o.contentHostEgressUnanswered.delete(n), o.contentHostEgressProbed.set(n, Date.now()));
    },
    f = (p) => {
      (t(`[artifact] egress probe of ${n}: ${p}; reading the host as unreachable for this check`),
        o.contentHostEgressProbed.delete(n),
        o.contentHostEgressUnanswered.add(n));
    },
    l = () => {
      (o.contentHostEgressProbed.delete(n),
        o.contentHostEgressUnanswered.add(n),
        o.contentHostEgressDenied.add(e.env));
    },
    u;
  try {
    u = await _l.get(`${n}${q}`, {
      signal: AbortSignal.any([r, AbortSignal.timeout(x)]),
      timeout: x,
      maxRedirects: 0,
      maxContentLength: Q,
      responseType: "text",
      validateStatus: () => !0
    });
  } catch (p) {
    if (r.aborted) throw p;
    if (gCe(p)) return l();
    return f(ZH(p) ? "an answer larger than the cap" : "no answer");
  }
  if (uj(u.status, u.headers)) return l();
  let h = () => roe(u.headers, u.data, (p) => p);
  if (!(
    (u.status >= 200 && u.status < 300) ||
    (u.status === 403 && ALe(u.headers, h())) ||
    (u.status === 404 && wGt(u.headers, h()))
  ))
    return f(`unrecognised HTTP ${u.status}`);
  return s();
}
var A = "classifier",
  _ = "person",
  BJs = "classifier";
function Zv(e) {
  switch (e.operation) {
    case "delete":
      return d("delete", "person", "this_call", "known");
    case "change_access":
      return d("access_change", "person", "this_call", "known");
    case "standing_job":
      return e.turnStartedByHuman
        ? d("standing_job", "classifier", "artifact", "known")
        : d("standing_job", "classifier", "this_call", "unattended");
    case "write": {
      if (!e.turnStartedByHuman) {
        if (
          (e.routineWrite === !0 || e.commentWrite === !0) &&
          e.public === !1 &&
          e.canWrite === !0 &&
          e.invitedByOtherOrg !== !0
        )
          return { ask: !1, foreignRead: !1 };
        return d("public_change", "classifier", "this_call", "unattended");
      }
      if (e.public === !0) return d("public_change", "classifier", "artifact", "known");
      if (e.public === void 0)
        return d("public_change", "classifier", "this_call", "facts_missing", "public");
      if (e.invitedByOtherOrg === !0)
        return { ...d("public_change", "classifier", "artifact", "known"), about: "someone_else" };
      return { ask: !1, foreignRead: !1 };
    }
    case "read": {
      if (e.owned === !0) return { ask: !1, foreignRead: !1 };
      if (e.outsideOrg === !0)
        return {
          ...d("foreign_read", _, e.turnStartedByHuman ? "artifact" : "this_call", "known"),
          about: "outside_org"
        };
      if (e.owned === void 0) return d("foreign_read", A, "this_call", "facts_missing", "owned");
      if (e.networkOff === void 0)
        return d("foreign_read", A, "this_call", "facts_missing", "networkOff");
      if (e.networkOff)
        return d("foreign_read", A, e.turnStartedByHuman ? "artifact" : "this_call", "known");
      return { ask: !1, foreignRead: !0 };
    }
  }
}
var ee = !0;
function jJs(e) {
  if (!ee || e.public === !1) return { ask: !1, foreignRead: !1 };
  return e.public === !0
    ? d("public_change", "classifier", "this_call", "known")
    : d("public_change", "classifier", "this_call", "facts_missing", "public");
}
function d(e, n, r, o, s) {
  return {
    ask: !0,
    class: e,
    answeredBy: n,
    remember: r,
    basis: o,
    ...(s !== void 0 && { missing: s })
  };
}
function _7n(e) {
  return e.ask && e.remember === "artifact";
}
function cwt(e) {
  return e.endpoint ? `${e.class}:endpoint` : e.class;
}
function QY(e, n) {
  return Z().askClassConsent.has(g(e, n));
}
function WJs(e, n, r = !1) {
  let o = Z();
  if ((o.askClassConsent.add(g(e, n)), r)) o.askClassPersonConsent.add(g(e, n));
}
function sCe(e, n, r = !1) {
  let o = cwt(e);
  return e.informedOnly ? VGo(n) : e.answeredBy === "person" || r ? _Gt(o, n) : QY(o, n);
}
function GJs(e) {
  Z().askClassOutsideOrgConsent.add(g("foreign_read", e));
}
function VGo(e) {
  return Z().askClassOutsideOrgConsent.has(g("foreign_read", e));
}
var te = 512;
function ttt(e, n, r) {
  if (e.toolUseId === void 0) return;
  let o = Z().askNamedOtherOrg,
    s = o.get(e.toolUseId),
    f = r ? n : [],
    l = s === void 0 ? f : f.filter((u) => s.includes(u));
  if ((o.delete(e.toolUseId), o.set(e.toolUseId, l), o.size > te)) {
    let u = o.keys().next().value;
    if (u !== void 0) o.delete(u);
  }
}
function DGr(e) {
  if (e.toolUseId !== void 0) Z().askNamedOtherOrg.delete(e.toolUseId);
}
function uwt(e, n) {
  return e.toolUseId !== void 0 && (Z().askNamedOtherOrg.get(e.toolUseId) ?? []).includes(n);
}
function _Gt(e, n) {
  return Z().askClassPersonConsent.has(g(e, n));
}
var ne = [
    "artifactDbReadConsentSlugs",
    "artifactDbReadHumanConsentSlugs",
    "artifactReadConsentSlugs",
    "artifactAssetUploadConsentSlugs",
    "artifactAssetUploadHumanConsentSlugs",
    "artifactAssetReadConsentSlugs",
    "artifactAssetReadHumanConsentSlugs",
    "artifactOutsideOrgConsentSlugs",
    "artifactHandlersReadConsentSlugs",
    "artifactHandlersReadHumanConsentSlugs",
    "artifactHandlersWriteConsentSlugs",
    "artifactHandlersWriteHumanConsentSlugs"
  ],
  zJs = [
    ...ne,
    "artifactRoomJoinConsentSlugs",
    "artifactPlanPublishConsentPaths",
    "artifactWatchApproved",
    "artifactDbWriteApproved",
    "artifactDbWriteHumanApproved",
    "artifactReadPageDataApproved",
    "artifactReadPageDataHumanApproved"
  ],
  re = Object.freeze({});
function iCe(e) {
  return (e.artifactConsentEpoch ?? 0) === Z().accountEpoch ? e : re;
}
function T7(e, n, r) {
  return iCe(e)[n]?.[r] === !0;
}
function b7n(e, n) {
  return T7(
    {
      artifactConsentEpoch: e.consentEpoch.get(),
      artifactReadConsentSlugs: e.sharedReadConsent.get()
    },
    "artifactReadConsentSlugs",
    n
  );
}
function ntt() {
  let { accountEpoch: e, conversationEpoch: n } = Z();
  return `${e}:${n}`;
}
function g(e, n) {
  return `${ntt()}:${e}:${n}`;
}
var m = " \xB7 web fetch, design sync and Channels wait for it";
function S() {
  let e = Pw();
  if (e === null) return "nothing";
  return e === EKe ? "unrestricted" : "stale_cache";
}
function S7n() {
  let e = wV();
  if (e !== void 0) return { state: "ineligible", reason: e };
  let n = Fce(),
    r = Pw() !== null,
    o = Rhn("allow_web_fetch");
  if (n === null) return { state: "pending", hasCache: r, egressKeysWithheld: o };
  return { state: "settled", outcome: n, served: S(), egressKeysWithheld: o };
}
function oe(e) {
  switch (e) {
    case "third_party_provider":
      return "not fetched: this session doesn't connect to the Anthropic API directly (Bedrock, Vertex, Foundry, or a gateway)";
    case "custom_base_url":
      return "not fetched with a custom ANTHROPIC_BASE_URL";
    case "no_auth":
      return "not fetched: no API key or claude.ai sign-in for the policy lookup (apiKeyHelper keys are not used for it)";
    case "oauth_no_inference_scope":
      return "not fetched: this sign-in lacks the inference scope";
    case "prosumer_oauth":
      return "not applicable to Pro and Max accounts";
  }
}
function ie(e, n, r, o) {
  let s = o ? "" : " \xB7 Retried hourly while Claude Code runs; restart to retry now";
  switch (e) {
    case "auth_failed":
      if (n === 403)
        return `${r}, or a proxy in front of it, refused the request (HTTP 403) \xB7 Fix: if you use a web proxy make sure it allows ${r}; if your organization restricts by IP, check this machine is allowed${s}`;
      if (n === 401 && o)
        return `${r} rejected this session's sign-in (HTTP 401) while it was being refreshed \xB7 Claude Code is retrying with the refreshed sign-in`;
      return n
        ? `${r} rejected this session's credentials (HTTP ${n}) \xB7 Fix: sign in again or check the API key this session uses`
        : "Couldn't attach credentials to the request \xB7 Fix: sign in, set the API key this session should use, or check your workload-identity setup";
    case "timeout":
      return `${r} took too long to answer \xB7 Fix: check your network or proxy${s}`;
    case "network_error":
      return `Couldn't reach ${r} \xB7 Fix: check your network or proxy${s}`;
    case "parse_failed":
      return `The answer from ${r} couldn't be read, either because a proxy replaced it or because this version of Claude Code doesn't understand it \xB7 Fix: check your proxy settings, or update Claude Code${s}`;
    case "spurious_304":
      return `${r} confirmed a cached copy from a previous sign-in, which this session can't use${s}`;
    case "stale_tunnel_credential":
      return `The machine running claude ssh changed credentials while ${r} was answering, so that answer wasn't used${s}`;
    case "request_failed":
      if (n === 404)
        return `The request for ${DRe} on ${r} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path \xB7 Fix: ask your network admin to allow it${s}`;
      if (n === 304)
        return `A caching proxy between you and ${r} answered in place of the API (HTTP 304) \xB7 Fix: ask your network admin to stop caching ${DRe}${s}`;
      if (n === 407)
        return `Your proxy asked for authentication before it would forward the request to ${r} (HTTP 407) \xB7 Fix: check your proxy credentials${s}`;
      return n
        ? `HTTP ${n} on the request to ${r}${s}`
        : `Couldn't complete the request to ${r}; if a proxy intercepts TLS, its certificate must be trusted (NODE_EXTRA_CA_CERTS) \xB7 Fix: check your network or proxy${s}`;
  }
}
function w7n(e) {
  switch (e.state) {
    case "ineligible":
      return oe(e.reason);
    case "pending":
      return e.hasCache
        ? `Using the copy on disk \xB7 not refreshed yet this session${e.egressKeysWithheld ? m : ""}`
        : `Not loaded yet${e.egressKeysWithheld ? m : ""} \xB7 if this persists, check your network or proxy`;
    case "settled": {
      let { outcome: n } = e;
      if (n.success) return `Loaded from ${n.host}`;
      let r = ie(n.errorCode, n.httpStatus, n.host, n.retrying),
        o = n.retrying ? " yet, still retrying" : "",
        s = e.egressKeysWithheld ? ", web fetch, design sync, Channels" : "";
      switch (e.served) {
        case "stale_cache":
          return `Couldn't refresh${o} \xB7 using the last copy on this machine${e.egressKeysWithheld ? m : ""} \xB7 ${r}`;
        case "unrestricted":
          return e.egressKeysWithheld
            ? `Couldn't load${o} \xB7 no restrictions applied this session, except that web fetch, design sync and Channels stay off until it loads \xB7 ${r}`
            : `Couldn't load${o} \xB7 no restrictions applied this session \xB7 ${r}`;
        case "nothing":
          return `Couldn't load${o} \xB7 features that must check it first (Remote Control, cloud sessions, /feedback${s} and others) stay off, and some need a restart once it loads \xB7 ${r}`;
      }
    }
  }
}
function KJs(e) {
  switch (e.state) {
    case "pending":
      return !1;
    case "settled":
      return !e.outcome.success;
    case "ineligible":
      return e.reason === "third_party_provider" || e.reason === "custom_base_url";
  }
}
var se = ["policySettings", "flagSettings", "userSettings"],
  ae = ["localSettings", "projectSettings"];
function C(e) {
  let n = [];
  if (e.envDisableVar !== void 0 && ue(e.envDisableVar)) n.push({ layer: "env", via: "envVar" });
  let r;
  for (let l of se) {
    let u = v(l, e);
    if (
      (L(n, l, l === "policySettings" ? [...u, ...ife()] : u, e),
      r === void 0 && u.some((h) => h?.[e.enableKey] === !0) && (l !== "policySettings" || Abe()))
    )
      r = l;
  }
  let o = n.some(
    (l) => l.layer === "env" || l.layer === "policySettings" || l.layer === "flagSettings"
  );
  for (let l of ae) L(n, l, v(l, e), e);
  let s = n.some((l) => l.layer === "localSettings" || l.layer === "projectSettings");
  return {
    enabled: n.length === 0 && (e.defaultOn || r !== void 0),
    decidedBy: n[0]?.layer ?? r ?? "default",
    offSources: n,
    lockedAboveUser: o,
    userControllable: !o && !s && Qt("userSettings")
  };
}
function v(e, n) {
  if (e === "policySettings") return [...Gp(), pe("policySettings")];
  if (!Qt(e)) return [];
  if (e === "localSettings") return [pe(e), $5r()];
  let r = pe(e);
  if (e === "projectSettings" && le(r, n) && Qt("userSettings") && mg()) return [];
  return [r];
}
function le(e, n) {
  return (
    e?.[n.enableKey] !== void 0 ||
    (n.legacyDisableKey !== void 0 && e?.[n.legacyDisableKey] !== void 0)
  );
}
function L(e, n, r, o) {
  if (r.some((f) => f?.[o.enableKey] === !1)) e.push({ layer: n, via: "enableKey" });
  let s = o.legacyDisableKey;
  if (s !== void 0 && r.some((f) => f?.[s] === !0)) e.push({ layer: n, via: "legacyDisableKey" });
}
function ue(e) {
  if (i[e] || Ne(E(tm(), e)) || Ne(VRe(e)) || Ne(E(toe(), e))) return !0;
  for (let n of ["flagSettings", "userSettings"]) if (Qt(n) && Ne(E(pe(n)?.env, e))) return !0;
  return !1;
}
function E(e, n) {
  if (e === void 0) return;
  if (n in e) return e[n];
  let r = D.get(e);
  if (r?.has(n)) return r.get(n);
  let o = Object.entries(e).find(([s]) => s.toUpperCase() === n)?.[1];
  if (Object.isFrozen(e))
    if (r) r.set(n, o);
    else D.set(e, new Map([[n, o]]));
  return o;
}
var D = new WeakMap();
var F = { enableKey: "enableArtifact", legacyDisableKey: "disableArtifact", defaultOn: !0 },
  U = { ...F, envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT" };
function uKe() {
  return C(U);
}
function y() {
  return !uKe().enabled;
}
function qGo() {
  return !C(F).enabled || Ne(VRe("CLAUDE_CODE_DISABLE_ARTIFACT"));
}
function HGr() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  return g2() || e === "claude-code-github-action" || e === "mcp";
}
function W(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === !0;
}
function rR() {
  return iy() === "local-agent" && mf() && !MM() && YZo();
}
function Q8() {
  return (dX() && VZo()) || rR();
}
function fKe() {
  return Rv();
}
function eE(e) {
  return e !== void 0 && fKe() && UJs(e);
}
function TLe(e, n) {
  return !e && (eE(n) || i_e(n.slug));
}
function k$(e) {
  return e !== void 0 && e.outsideOrgReader === !0 && QT();
}
function i_e(e) {
  return _ === "person" && k$(Ct(e));
}
function Tx(e) {
  return k$(e) || bGt(e);
}
function bGt(e) {
  return e !== void 0 && e.external === !0 && QT();
}
function LGr(e) {
  return (
    e !== void 0 &&
    e.probeFailed !== !0 &&
    e.external !== !0 &&
    (e.outsideOrgReader === !1 || e.role === "owner")
  );
}
function fe() {
  let e = i.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" && rR()) return !1;
  return W(e);
}
function Lgn() {
  return W(iy()) && !rR();
}
function de() {
  return PLe() && ge();
}
function ge() {
  return N() === null;
}
function N() {
  if (Ae() !== "firstParty") return "third_party_provider";
  if (_t()) return "essential_traffic_only";
  if (is(i.CLAUDE_CODE_ARTIFACT)) return "artifact_env_off";
  if (!Ne(i.CLAUDE_CODE_ARTIFACT) && !Ne(i.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT) && HGr())
    return "sdk_default_off";
  return null;
}
function K() {
  return PLe() && w();
}
function w() {
  return B() === null;
}
function B() {
  if (fe()) return "surface_excluded";
  return N();
}
function CRi() {
  if (y()) return !1;
  return K();
}
function YGo() {
  return i.CLAUDE_CODE_ARTIFACT_ASSETS === void 0 && oR() && Zc() === null && !i.CLAUDE_CODE_REMOTE;
}
function he() {
  let e = wV();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}
function M() {
  return (Ne(i.CLAUDE_CODE_ARTIFACT) && !1) || k("tengu_cobalt_plinth", he());
}
function Y() {
  return M() && pKe();
}
function be() {
  return G() === null;
}
function G() {
  if (!M()) return "growthbook_off";
  if (PGt() || pKe()) return (j(), null);
  if (v7n() !== null) return null;
  return "admin_policy";
}
function v7n() {
  if (PGt()) return null;
  if (!P(cr())) return null;
  let e = Xc("allow_cobalt_plinth");
  if (e !== "cache_miss" && e !== "route_missing") return (j(), null);
  if (TKe("allow_cobalt_plinth")) return null;
  let n = e === "route_missing" ? "policy_route_missing" : "policy_fetch_failed",
    r = Fce();
  if (r !== null && !r.success && _e(r))
    return ((Z().artifactPolicyFetchAnswer = r), { cause: n, outcome: r });
  let o = NGr();
  return o === null ? null : { cause: n, outcome: o };
}
function NGr() {
  return aj() ? Z().artifactPolicyFetchAnswer : null;
}
function XGo() {
  if (TKe("allow_cobalt_plinth")) return "org_denied";
  let e = Xc("allow_cobalt_plinth");
  return e === "org_denied" || e === "latched" ? e : null;
}
function _e(e) {
  if (!e.retrying) return !0;
  if ((e.errorCode === "auth_failed" && e.httpStatus === 401) || e.errorCode === "spurious_304")
    return !1;
  return !Mzr(e);
}
function j() {
  if (aj()) Z().artifactPolicyFetchAnswer = null;
}
function oR() {
  if (Zc() !== null) return nH();
  return PLe() && nH() && pKe();
}
function nH() {
  return SGt() === null;
}
function SGt() {
  if (y()) return "switched_off";
  if (Zc() !== null) return null;
  return B() ?? G();
}
function Ngn() {
  if (y()) return !1;
  if (!de()) return !1;
  return Y();
}
function O() {
  let e = new Set(),
    n = !1,
    r = !1;
  for (let s of uKe().offSources)
    switch (s.layer) {
      case "env":
        e.add("env");
        break;
      case "userSettings":
        e.add(s.via === "legacyDisableKey" ? "setting" : "config_pref");
        break;
      case "policySettings":
      case "flagSettings":
        n = !0;
        break;
      case "localSettings":
      case "projectSettings":
        r = !0;
        break;
    }
  if (n) (e.delete("setting"), e.delete("config_pref"));
  if (e.size > 1) return "multiple";
  let [o] = e;
  if (o !== void 0) return o;
  return n || r ? "admin_managed" : null;
}
function me() {
  return O() !== null && K() && Y();
}
function JGo() {
  let e = Z();
  if (e.artifactDisabledSessionEvaluated) return;
  if (j$() === null) return;
  if (((e.artifactDisabledSessionEvaluated = !0), !me())) return;
  let n = O();
  if (n === null) return;
  R("tengu_artifact_disabled_session", {
    mechanism: c(n),
    session_interactivity:
      !ye() || Uu() === "claude-vscode" || Nc() ? b("interactive") : b("noninteractive")
  });
}
function QGo(e) {
  if (!YZo() || iy() !== "local-agent" || MM()) return;
  let n = Z(),
    r = e === null && !PGt() && !pKe() && v7n() !== null,
    o = r ? "admin_policy" : e;
  if (o === null) {
    n.artifactRegisteredSeen = !0;
    let l = n.artifactWithheldReasonsLogged.at(-1);
    if (l === void 0 || n.artifactWithheldRecoveryLogged) return;
    ((n.artifactWithheldRecoveryLogged = !0),
      R("tengu_artifact_tool_recovered", { withheld_reason: c(l), ...H(l) }));
    return;
  }
  if (j$() === null) return;
  let s = Se(o),
    f = n.artifactWithheldReasonsLogged.includes(s);
  if (f && (!r || n.artifactWithheldListedLogged)) return;
  if (!f) n.artifactWithheldReasonsLogged.push(s);
  if (r) n.artifactWithheldListedLogged = !0;
  R("tengu_artifact_tool_withheld", {
    reason: c(s),
    off_mechanism: ce(s === "switched_off" ? O() : null),
    after_registered: n.artifactRegisteredSeen,
    tool_listed: r,
    ...H(s)
  });
}
function H(e) {
  if (
    e !== "org_policy_denied" &&
    e !== "compliance_taint" &&
    e !== "policy_cache_miss" &&
    e !== "policy_route_missing"
  )
    return {};
  let n = Fce(),
    r = S(),
    o =
      r === "nothing"
        ? "none"
        : r === "unrestricted"
          ? "fail_open"
          : n?.success
            ? "network"
            : "disk",
    s = !Mh()
      ? "ineligible"
      : n === null || (!n.success && n.retrying)
        ? "pending"
        : n.success
          ? "ok"
          : "failed";
  return { policy_source: c(o), policy_fetch: c(s) };
}
function RRi() {
  return ((Z().heldStartupTelemetry ??= []), { flush: I, [Symbol.dispose]: I });
}
function I() {
  let e = Z(),
    n = e.heldStartupTelemetry;
  e.heldStartupTelemetry = null;
  for (let r of n ?? []) r();
}
function $gn(e) {
  let n = Z().heldStartupTelemetry;
  if (n === null) {
    e();
    return;
  }
  n.push(e);
}
function R(...e) {
  $gn(() => a(...e));
}
function Se(e) {
  switch (e) {
    case "surface_excluded":
      return mf() ? "surface_excluded" : "nested_child_session";
    case "admin_policy": {
      if (!P(cr())) return "subscription_ineligible";
      let n = Pw();
      if (n === null) return m_e() ? "policy_route_missing" : "policy_cache_miss";
      return n.restrictions.allow_cobalt_plinth === void 0
        ? "compliance_taint"
        : "org_policy_denied";
    }
    default:
      return e;
  }
}
function $Gr() {
  return U.defaultOn;
}
function Ee() {
  return w() && be();
}
function Fgn() {
  return Ee() && uKe().userControllable;
}
function pKe() {
  return FGr();
}
function FGr() {
  if (PGt()) return V() === null;
  if (!P(cr())) return !1;
  return on("allow_cobalt_plinth");
}
function P(e) {
  return e === "team" || e === "enterprise" || e === "pro" || e === "max" || e == null;
}
function ZGo() {
  return V();
}
function V() {
  if (!PGt()) return null;
  let e = P0e();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!Mh()) return "policy_unavailable";
  if (on("allow_cobalt_plinth")) return null;
  let n = Xc("allow_cobalt_plinth") ?? "org_denied";
  switch (n) {
    case "org_denied":
    case "latched":
    case "cache_miss":
      return n;
    case "route_missing":
      return "policy_route_missing";
  }
}
function Ice() {
  return oR() && k("tengu_gable_onyx_sluice", !1);
}
VJs(Ice);
function ezo() {
  return nH() && k("tengu_gable_onyx_sluice", !1);
}
function UGr() {
  return !1;
}
function tzo() {
  return Ice() && !woe(a_e) && !k("tengu_cedar_transom", !1);
}
function nzo() {
  return UGr() && !woe(E7n) && !(aj() && Z().builtInArtifactHiddenForMcp);
}
function rzo() {
  return !1;
}
function Ugn() {
  return k("tengu_cobalt_plinth_thrift", !1) === !0;
}
var Ce = "tengu_russet_pergola";
function ozo() {
  return !1;
}
function aCe() {
  return oR();
}
function mKe() {
  return !y() && w();
}
export {
  UJs,
  KGo,
  ett,
  BJs,
  Zv,
  jJs,
  _7n,
  cwt,
  QY,
  WJs,
  sCe,
  GJs,
  VGo,
  ttt,
  DGr,
  uwt,
  _Gt,
  zJs,
  iCe,
  T7,
  b7n,
  ntt,
  S7n,
  w7n,
  KJs,
  uKe,
  qGo,
  HGr,
  rR,
  Q8,
  fKe,
  eE,
  TLe,
  k$,
  i_e,
  Tx,
  bGt,
  LGr,
  Lgn,
  CRi,
  YGo,
  v7n,
  NGr,
  XGo,
  oR,
  nH,
  SGt,
  Ngn,
  JGo,
  QGo,
  RRi,
  $gn,
  $Gr,
  Fgn,
  pKe,
  FGr,
  ZGo,
  Ice,
  ezo,
  UGr,
  tzo,
  nzo,
  rzo,
  Ugn,
  ozo,
  aCe,
  mKe
};

//# sourceMappingURL=chunk-fh50nzzj.js.map
