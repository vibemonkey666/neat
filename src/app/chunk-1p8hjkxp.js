// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ye } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { R } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import {
  Mvt,
  tl,
  U_,
  ua,
  Ng,
  nf,
  P0e,
  Cnr,
  gn,
  b0,
  YVe,
  UV,
  Ai,
  gH,
  _H
} from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { Zs } from "./chunk-4cgvah10.js";
import { jr, zt, da } from "./chunk-brszmkb3.js";
import { Sse, VS, wse, Cb, rd } from "./chunk-5rw2zfa0.js";
import { Ae, of } from "./chunk-dvghjmtr.js";
import { Z7n, _7s } from "./chunk-cr7a2cdd.js";
import { a9, ZQs, n2o, d2o, vKe, Dy, Shn } from "./chunk-gjpjdnzc.js";
import { Lun, r4s } from "./chunk-1ww4jg8j.js";
import { Jne } from "./chunk-0a97myps.js";
import { cNn, SN, r8e } from "./chunk-5hjs1kac.js";
import { I9t, iso, aso } from "./chunk-tdrdhd0g.js";
import { F1 } from "./chunk-eq25erm1.js";
import { Obn, A5o } from "./chunk-62m282bz.js";
import { ve } from "./chunk-vk5p9xv3.js";
var Q = 600000;
function Z(e, n) {
  if (n.tierVerifiedAtMs === void 0 || n.tier === null)
    return { tier: n.tier, credentialShape: n.credentialShape };
  let o = n.nowMs ?? Date.now(),
    r = n.tierVerifiedAtMs === null ? null : o - n.tierVerifiedAtMs;
  if (r !== null && r >= -Q && r <= e.graceTtlHours * 60 * 60 * 1000)
    return { tier: n.tier, credentialShape: n.credentialShape };
  return {
    tier: null,
    credentialShape: n.credentialShape === "stored_login" ? "untiered_login" : n.credentialShape
  };
}
function h(e, n) {
  if (n.provider !== "firstParty") return { candidate: !1, exclusion: "provider" };
  if (!n.firstPartyBaseUrl) return { candidate: !1, exclusion: "base_url" };
  if (n.authRecoveryCommand) return { candidate: !1, exclusion: "auth_command" };
  let o = Z(e, n);
  switch (o.credentialShape) {
    case "stored_login":
    case "untiered_login":
      break;
    case "api_key":
    case "env_token_only":
    case "key_helper_only":
    case "none":
      return { candidate: !1, exclusion: "credential_shape" };
  }
  let r =
    Obn(o.tier) || o.credentialShape !== "untiered_login" || n.storedLoginOrigin !== !0
      ? o.tier
      : (e.plans[0] ?? "team");
  if (!Obn(r)) return { candidate: !1, exclusion: "tier_unknown" };
  if (!e.enabled) return { candidate: !1, exclusion: "flag_off" };
  if (!e.plans.includes(r)) return { candidate: !1, exclusion: "tier_not_in_plans" };
  if (n.hostToken === !0 && !e.hostTokens) return { candidate: !1, exclusion: "host_token" };
  if (!aso(e, n.bucket)) return { candidate: !1, exclusion: "rollout_percent" };
  return { candidate: !0, tier: r };
}
var ee = 3600000;
function L(e, n) {
  if (e.exemptReasons.includes(n)) return !0;
  return n === "refused_not_entitled" && !e.refuseNotEntitled;
}
function te(e, n) {
  if (A5o(e.reason) === "fetched") return "fetched";
  if (!e.hasAdmittedCache) return "no";
  if (e.admittedCacheAgeMs === void 0 || e.admittedCacheAgeMs < 0) return "no";
  return e.admittedCacheAgeMs <= n * ee ? "cached" : "no";
}
function S(e) {
  let { flag: n, candidacy: o, surface: r } = e,
    a = e.blockedMs ?? 0;
  if (!n.enabled || !o.candidate) return { verdict: "pass", blockedMs: a, surface: r };
  let d = [
      ["policy", e.policy],
      ["settings", e.settings]
    ],
    u = !1;
  for (let [f, m] of d) {
    if (A5o(m.reason) !== "refused") continue;
    if (L(n, m.reason)) {
      u = !0;
      continue;
    }
    return { verdict: "refused", reason: m.reason, resource: f, blockedMs: a, surface: r };
  }
  let s = !1,
    g;
  for (let [f, m] of d) {
    let _ = te(m, n.graceTtlHours);
    if (_ === "fetched") continue;
    if (_ === "cached") {
      s = !0;
      continue;
    }
    if (L(n, m.reason)) {
      u = !0;
      continue;
    }
    if (
      g === void 0 ||
      (g[1].reason === "unavailable_pending" && m.reason !== "unavailable_pending")
    )
      g = [f, m];
  }
  if (g !== void 0)
    return { verdict: "blocked", reason: g[1].reason, resource: g[0], blockedMs: a, surface: r };
  return { verdict: u ? "pass_exempt" : s ? "pass_cached" : "pass", blockedMs: a, surface: r };
}
function ne(e) {
  if (e.hasOAuthToken && e.oauthEffective)
    return e.subscriptionType === null ? "untiered_login" : "stored_login";
  if (e.apiKeyEnv) return "api_key";
  if (e.envToken) return "env_token_only";
  if (e.keyHelper) return "key_helper_only";
  return "none";
}
function k() {
  try {
    switch (ua().source) {
      case "claude.ai":
        return tl();
      case "CCR_OAUTH_TOKEN_FILE":
      case "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR":
        return tl() && b0();
      default:
        return !1;
    }
  } catch {
    return !0;
  }
}
function re() {
  try {
    return tl();
  } catch {
    return !1;
  }
}
function oe() {
  let e = nf();
  return ne({
    hasOAuthToken: e,
    oauthEffective: e && re(),
    subscriptionType: P0e(),
    apiKeyEnv: !!i.ANTHROPIC_API_KEY,
    envToken: U_() !== void 0,
    keyHelper: Ng() !== void 0
  });
}
function v(e) {
  let n = oe(),
    o = k();
  return {
    provider: Ae(),
    firstPartyBaseUrl: of(),
    authRecoveryCommand: e.authRecoveryCommand,
    tier: P0e(),
    credentialShape: n,
    storedLoginOrigin: o,
    hostToken: n === "stored_login" && !o,
    tierVerifiedAtMs: Cnr(),
    nowMs: Date.now(),
    bucket: iso(_H())
  };
}
function y(e, n) {
  let o = e?.[n];
  return typeof o === "string" ? o : void 0;
}
function H(e, n) {
  let o = e?.[n];
  return typeof o === "number" ? o : void 0;
}
function ie(e, n) {
  let o = H(n, "policy_cache_age_ms"),
    r = e?.hadCache === !0 || e?.source === "cache",
    a = { hasAdmittedCache: r, admittedCacheAgeMs: r ? o : void 0 };
  if (y(n, "policy_ineligible_reason") !== void 0 || e?.source === "ineligible")
    return { ...a, reason: "not_attempted" };
  let d = y(n, "policy_load_state");
  if (d === "succeeded" || n?.policy_live_verdict === !0 || e?.source === "fetch")
    return { ...a, reason: "ok" };
  if (e?.source === "none") return { ...a, reason: "none_configured" };
  if (d === "in_flight" || d === "not_started" || (d === void 0 && e === void 0))
    return { ...a, reason: "unavailable_pending" };
  let u = y(n, "policy_server_error_code"),
    s = y(n, "policy_server_auth_denial"),
    g = H(n, "policy_http_status");
  return {
    ...a,
    reason: b(
      y(n, "policy_error_code"),
      y(n, "policy_credential_state"),
      g,
      y(n, "policy_server_error_type"),
      Z7n.find((f) => f === u),
      _7s.find((f) => f === s)
    ),
    httpStatus: g
  };
}
function F(e) {
  return e === 429 || e === 408 || e === 409 || e === 425;
}
function A(e) {
  return e === "other" ? void 0 : e;
}
function q(e, n, o) {
  return e === "dead" && n2o(n, o) !== "organization";
}
function U(e, n, o, r) {
  if (A(n) === void 0) return;
  let a = n2o(o, r);
  if (a === "organization") return "refused_not_entitled";
  if (a === "credential") return "refused_credential";
  if (e === 404) return "none_configured";
  if (e === 401 || e === void 0) return;
  if (e === 403) return "refused_not_entitled";
  if (F(e) || e >= 500) return;
  return "unavailable_server";
}
function b(e, n, o, r, a, d) {
  if (q(n, a, d)) return "refused_credential";
  let u = A(r),
    s = U(o, u, a, d);
  if (s !== void 0 && (e === "auth_failed" || e === "request_failed")) return s;
  switch (e) {
    case "auth_failed":
      if (n === "dead") return "refused_credential";
      if (o === 401) return "unavailable_credential_refresh";
      if (o === 403) return "blocked_by_intermediary";
      if (o === void 0 && u === void 0)
        return n === void 0 ? "client_no_credentials" : "unavailable_credential_refresh";
      return "refused_not_entitled";
    case "timeout":
      return "unavailable_timeout";
    case "network_error":
      return "unavailable_connect";
    case "request_failed":
      if (F(o)) return "unavailable_rate_limited";
      if (o === 304 || o === 404) return "blocked_by_intermediary";
      return o === void 0 ? "unavailable_connect" : "unavailable_server";
    case "spurious_304":
    case "stale_tunnel_credential":
      return "unavailable_server";
    case "parse_failed":
      return "blocked_by_intermediary";
    case "session_changed":
    case void 0:
      return "unavailable_pending";
    default:
      return "client_error";
  }
}
var W = () => r4s(),
  ae = ve({ read: W }, (e) => {
    e.read = W;
  });
function w() {
  let e = !1;
  try {
    e = Cb() !== null;
  } catch {
    e = !1;
  }
  let n;
  try {
    n = e ? ae.read() : void 0;
  } catch {
    n = void 0;
  }
  return { present: e, ageMs: n };
}
var se = new Set(["sandboxed_entrypoint", "claude_tag", "hermetic_remote_session"]);
function T(e, n, o, r = { present: !1, ageMs: void 0 }, a = !1) {
  let d = r.present || e?.hadCache === !0 || e?.source === "cache" || n?.state === "stale_cache",
    u = { hasAdmittedCache: d, admittedCacheAgeMs: d ? r.ageMs : void 0 },
    s = o ?? (n?.state === "ineligible" ? n.reason : void 0);
  if (s !== void 0 || e?.source === "ineligible")
    return { ...u, reason: s !== void 0 && se.has(s) && !a ? "not_required" : "not_attempted" };
  if (n?.state === "ok") return { ...u, reason: n.hasSettings ? "ok" : "none_configured" };
  if (e?.source === "fetch") return { ...u, reason: "ok" };
  if (e?.source === "none") return { ...u, reason: "none_configured" };
  if (n?.state === "failed" || n?.state === "stale_cache")
    return {
      ...u,
      reason: de(
        n.failure.errorKind,
        n.failure.httpStatus,
        n.failure.serverErrorType,
        n.failure.credentialState,
        n.failure.serverErrorCode,
        n.failure.serverAuthDenial,
        n.failure.noResponse
      ),
      httpStatus: n.failure.httpStatus
    };
  if (e?.source === "error" || e?.source === "rejected") return { ...u, reason: "client_error" };
  return { ...u, reason: "unavailable_pending" };
}
function de(e, n, o, r, a, d, u) {
  if (q(r, a, d)) return "refused_credential";
  let s = A(o),
    f = U(n ?? (e === "http_401" ? 401 : e === "http_403" ? 403 : void 0), s, a, d);
  if (f !== void 0 && (e === "http_401" || e === "http_403" || e === "http_4xx")) return f;
  switch (e) {
    case "http_401":
      return r === "dead" ? "refused_credential" : "unavailable_credential_refresh";
    case "profile_credential_error":
      return "refused_credential";
    case "http_403":
      return r === "dead" ? "refused_credential" : "blocked_by_intermediary";
    case "parse_error":
      return "blocked_by_intermediary";
    case "http_4xx":
      if (F(n)) return "unavailable_rate_limited";
      return "blocked_by_intermediary";
    case "ruled_empty":
      return "unavailable_settings_unusable";
    case "http_5xx":
      return "unavailable_server";
    case "timeout":
      return "unavailable_timeout";
    case "network_error":
      return "unavailable_connect";
    case "no_auth_available":
    case "api_key_not_sent":
      return "client_no_credentials";
    case "unknown_error":
      if (n === 304) return "blocked_by_intermediary";
      return u === !0 ? "unavailable_connect" : "client_error";
    default:
      return "client_error";
  }
}
function ue() {
  return ye() ? "noninteractive" : "startup";
}
function ge(e, n, o, r, a, d = "fallback", u = { present: !1, ageMs: void 0 }, s = !1, g) {
  let f = h(e, n),
    m = h({ ...e, enabled: !0, plans: ["team", "enterprise"], percent: 100 }, n),
    _ = ie(o.policy, o.policyGateFields),
    G = T(o.settings, r, a, u, s),
    I = {
      flag: { ...e, enabled: !0, plans: ["team", "enterprise"], percent: 100 },
      candidacy: m,
      policy: _,
      settings: G,
      surface: ue()
    },
    E = S(I);
  return {
    decision: c(E.verdict),
    decision_reason: ce(E.reason),
    decision_resource: ce(E.resource),
    surface: c(E.surface),
    blocked_ms: 0,
    candidate_if_armed: m.candidate,
    exclusion_if_armed: ce(m.candidate ? void 0 : m.exclusion),
    candidate_now: f.candidate,
    exclusion_now: ce(f.candidate ? void 0 : f.exclusion),
    flag_enabled: e.enabled,
    flag_source: c(d),
    flag_percent: e.percent,
    grace_ttl_hours: e.graceTtlHours,
    tier: ce(Ce(n.tier)),
    credential_shape: c(n.credentialShape),
    policy_reason: c(_.reason),
    policy_has_cache: _.hasAdmittedCache,
    policy_cache_age_ms: _.admittedCacheAgeMs,
    settings_reason: c(G.reason),
    settings_has_cache: G.hasAdmittedCache,
    settings_cache_age_ms: G.admittedCacheAgeMs,
    ...fe(I, g)
  };
}
function fe(e, n) {
  if (n === void 0) return {};
  try {
    let o = n();
    return {
      settings_stored_copy: c(o.settings.storedCopy),
      policy_stored_copy: c(o.policy.storedCopy),
      settings_live_signed: c(o.settings.liveSigned),
      policy_live_signed: c(o.policy.liveSigned),
      decision_if_strict: c(le(e, o))
    };
  } catch (o) {
    return (
      l(
        new R(
          `org-config gate: the signature facts threw (${a9(o)})`,
          "org-config gate: the signature facts threw"
        )
      ),
      {}
    );
  }
}
function le(e, n) {
  let o = N(e, n, !0),
    r = N(e, n, !1);
  return o === r ? o : "pending";
}
function N(e, n, o) {
  return S({ ...e, policy: z(e.policy, n.policy, o), settings: z(e.settings, n.settings, o) })
    .verdict;
}
function z(e, { storedCopy: n }, o) {
  return n === "trusted" || n === "not_read" || (n === "pending" && o)
    ? e
    : { ...e, hasAdmittedCache: !1, admittedCacheAgeMs: void 0 };
}
function rgs(e) {
  ZQs(
    (n) => {
      let { flag: o, source: r } = I9t();
      return ge(o, v(e), n, VS(), Sse(), r, w(), k(), e.readSignatureFacts);
    },
    e.settle === void 0 ? void 0 : pe(e.settle, me)
  );
}
var me = 35000;
function pe(e, n) {
  return () => Promise.race([e().catch(() => {}), X(n, void 0, { unref: !0 })]);
}
function Ce(e) {
  switch (e) {
    case "max":
    case "pro":
    case "team":
    case "enterprise":
      return e;
    default:
      return;
  }
}
function _e(e) {
  let n = { hasAdmittedCache: e.hasCache, admittedCacheAgeMs: e.hasCache ? e.cacheAgeMs : void 0 };
  if (!e.eligible) return { ...n, reason: "not_attempted" };
  let o = !e.loadFromEarlierGeneration;
  if (e.liveVerdict || (o && e.loadState === "succeeded")) return { ...n, reason: "ok" };
  let r = e.latestLoad;
  if (r !== void 0)
    return r.succeeded
      ? { ...n, reason: "ok" }
      : {
          ...n,
          reason: b(
            r.errorCode,
            r.credentialState,
            r.httpStatus,
            r.serverErrorType,
            r.serverErrorCode,
            r.serverAuthDenial
          ),
          httpStatus: r.httpStatus
        };
  if (!o) return { ...n, reason: "unavailable_pending" };
  if (e.loadState === "not_started" || e.loadState === "in_flight") {
    let a = e.loadLastAttempt;
    return a === void 0
      ? { ...n, reason: "unavailable_pending" }
      : {
          ...n,
          reason: b(
            a.errorCode,
            "unknown",
            a.httpStatus,
            a.serverErrorType,
            a.serverErrorCode,
            a.serverAuthDenial
          ),
          httpStatus: a.httpStatus
        };
  }
  return {
    ...n,
    reason: b(
      e.loadErrorCode,
      e.loadCredentialState,
      e.loadHttpStatus,
      e.loadServerErrorType,
      e.loadServerErrorCode,
      e.loadServerAuthDenial
    ),
    httpStatus: e.loadHttpStatus
  };
}
function he() {
  return _e(d2o());
}
function Qoo() {
  return T(void 0, VS(), Sse(), w(), k());
}
function V() {
  return { policy: he(), settings: Qoo() };
}
function K(e, n) {
  let o = n === void 0 ? void 0 : e[n].httpStatus,
    r = gn()?.organizationName;
  return { organizationName: r === void 0 || r === null ? void 0 : rd(r), httpStatus: o };
}
var j =
  "api.anthropic.com/api/claude_code/policy_limits and api.anthropic.com/api/claude_code/settings";
function p(e) {
  let n = e.organizationName !== void 0 ? rd(e.organizationName).trim() : "";
  return n !== "" ? n : "Your organization";
}
function C(e) {
  return e.requestId !== void 0 ? ` Request id: ${rd(e.requestId)}.` : "";
}
function B(e, n = {}) {
  if (e.verdict === "pass" || e.verdict === "pass_cached" || e.verdict === "pass_exempt") return;
  switch (e.reason) {
    case "refused_credential":
      return "Your Claude session has expired. Sign in again to continue (claude auth login).";
    case "refused_not_entitled":
      return `${p(n)} doesn't allow Claude Code for this account. Ask an admin of your organization, or sign in with a different account (claude auth login).${C(n)}`;
    case "refused_other":
      return `${p(n)} refused this session's organization settings${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. Sign in again, or ask an admin of your organization.${C(n)}`;
    case "blocked_by_intermediary":
      return `Claude Code couldn't load your organization's settings: the reply came from a network proxy, not Anthropic${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus}, no request id)` : ""}. ${p(n)} requires these settings before a session can start. Ask IT to allow HTTPS to ${j}, then retry.`;
    case "unavailable_timeout":
      return `Claude Code couldn't load your organization's settings (timed out). ${p(n)} requires them before a session can start. Retrying; check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_connect":
      return `Claude Code couldn't reach Anthropic to load your organization's settings (could not connect). ${p(n)} requires them before a session can start. Check your network connection and retry; if you are on a corporate network, ask IT to allow HTTPS to ${j}.`;
    case "unavailable_server":
      return `Claude Code couldn't load your organization's settings: Anthropic returned an error${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. ${p(n)} requires them before a session can start. Retrying; check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_rate_limited":
      return `Claude Code couldn't load your organization's settings: Anthropic asked it to retry shortly${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. ${p(n)} requires them before a session can start. Retrying; check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_credential_refresh":
      return e.surface === "noninteractive"
        ? `Claude Code couldn't verify your sign-in with Anthropic yet (its sign-in token was still being refreshed, often by another Claude Code process), so it couldn't load your organization's settings. ${p(n)} requires them before a session can start. Run the command again; if this persists, sign in again (claude auth login).${C(n)}`
        : `Claude Code couldn't verify your sign-in with Anthropic yet, so it couldn't load your organization's settings. ${p(n)} requires them before a session can start. Retrying; if this persists, sign in again (claude auth login).${C(n)}`;
    case "unavailable_pending":
      return `Claude Code is still loading your organization's settings. ${p(n)} requires them before a session can start; this usually takes a few seconds.`;
    case "unavailable_settings_unusable":
      return `Claude Code couldn't apply your organization's managed settings: none of the settings the server returned could be applied as written. ${p(n)} requires them before a session can start. Ask your administrator to fix the published settings, then retry.${C(n)}`;
    case "client_no_credentials":
    case "client_error":
      return `Claude Code couldn't load your organization's settings because of an internal error. ${p(n)} requires them before a session can start. Retry, and if this persists report it with /bug.${C(n)}`;
    case "not_attempted":
      return `Claude Code does not load your organization's settings in the mode this session was launched in, and ${p(n)} requires them before a session can start. If CLAUDE_CODE_ENTRYPOINT or a remote-session variable is set in your environment, unset it and start Claude Code again; otherwise sign in again (claude auth login).`;
    case "ok":
    case "none_configured":
    case "not_required":
    case void 0:
      return;
  }
}
function Fpe(e) {
  return e.verdict === "blocked" || e.verdict === "refused";
}
function ogs(e) {
  return e.verdict === "refused" ? "org_config_refused" : "org_config_required_unavailable";
}
function Zoo(e) {
  return (
    e.verdict === "refused" ||
    e.reason === "not_attempted" ||
    e.reason === "client_no_credentials" ||
    e.reason === "unavailable_credential_refresh"
  );
}
function Oe() {
  let e = () => {};
  return {
    recorded: new Promise((o) => {
      e = wse(() => {
        (e(), o());
      });
    }),
    dispose: e
  };
}
var Se = {
  kickPolicy: vKe,
  policySettled: Dy,
  settingsSettled: SN,
  pendingConsentDialog: cNn,
  nextSettingsOutcome: Oe,
  now: () => performance.now()
};
async function be(e, n = Se) {
  let o = n.now();
  try {
    n.kickPolicy();
  } catch (a) {
    l(
      new R(
        `org-config gate: the policy kick threw (${a9(a)})`,
        "org-config gate: the policy kick threw"
      )
    );
  }
  await Pe(
    Promise.all([n.policySettled().catch(() => {}), n.settingsSettled().catch(() => {})]),
    e
  );
  let r = n.pendingConsentDialog();
  if (r !== null) {
    let a = n.nextSettingsOutcome();
    try {
      (await r.catch(() => {}),
        await Pe(Promise.all([n.settingsSettled().catch(() => {}), a.recorded]), e));
    } finally {
      a.dispose();
    }
  }
  return Math.max(0, Math.round(n.now() - o));
}
function x(e) {
  if (e.readFlag !== void 0)
    return { flag: e.readFlag(), source: e.readFlagSource?.() ?? "override" };
  return I9t();
}
function O(e, n, o, r) {
  return {
    decision: { verdict: "pass", blockedMs: 0, surface: r },
    message: void 0,
    flag: e,
    flagSource: n,
    candidacy: o,
    armed: !1,
    context: {},
    attempt: 0,
    decidedWithoutWaiting: !0,
    outcomes: void 0
  };
}
var P = { candidate: !1, exclusion: "flag_off" };
function Ge(e, n, o) {
  return e !== "fallback" || !o() || n();
}
function x9t(e) {
  let { flag: n, source: o } = x(e);
  if (!n.enabled && Ge(o, e.isFlagFetchHeld ?? P9t, e.isFlagCacheEmpty ?? UV))
    return O(n, o, P, e.surface);
  let r = h(n, (e.readCandidateInputs ?? v)({ authRecoveryCommand: e.authRecoveryCommand }));
  if (!n.enabled || !r.candidate) return O(n, o, r, e.surface);
  return D(e, n, o, r, 0, 0, { report: !1, decidedWithoutWaiting: !0 });
}
async function sgs(e) {
  let n = e.isFlagFetchHeld ?? P9t,
    o = e.isFlagCacheEmpty ?? UV,
    r = x9t(e);
  if (rso(r, n, o)) (await oso(e.fetchFlag), (r = x9t(e)));
  if (!r.armed || r.outcomes === void 0) return r;
  if (
    ((r = await eso(r, () => x9t(e), e.primeSettingsCacheAge)), !r.armed || r.outcomes === void 0)
  )
    return r;
  if (!Fpe(r.decision)) return (await (e.report ?? VPt)(r, r.outcomes), r);
  let { flag: a, flagSource: d } = r,
    [u] = await Promise.all([
      (e.settle ?? be)(a.budgetMs),
      nso(d, n, o) ? oyr(a.budgetMs, e.fetchFlag) : void 0
    ]),
    s = x(e);
  if (!s.flag.enabled) return O(s.flag, s.source, P, e.surface);
  let g = h(s.flag, (e.readCandidateInputs ?? v)({ authRecoveryCommand: e.authRecoveryCommand }));
  if (!g.candidate) return O(s.flag, s.source, g, e.surface);
  return D(e, s.flag, s.source, g, u, 0, { report: !0, decidedWithoutWaiting: !1 });
}
async function eso(e, n, o = ke) {
  if (!e.armed || e.outcomes === void 0 || !Fpe(e.decision) || !Ee(e.outcomes)) return e;
  return (await o(), n());
}
function Ee(e) {
  return e.settings.hasAdmittedCache && e.settings.admittedCacheAgeMs === void 0;
}
async function ke() {
  await Lun().then(
    () => {
      return;
    },
    () => {
      return;
    }
  );
}
function tso(e, n, o = 1) {
  let { flag: r, source: a } = x(e);
  if (!r.enabled) return O(r, a, P, e.surface);
  let d = h(r, (e.readCandidateInputs ?? v)({ authRecoveryCommand: e.authRecoveryCommand }));
  if (!d.candidate) return O(r, a, d, e.surface);
  return D(e, r, a, d, n, o, { report: !0, decidedWithoutWaiting: !1 });
}
function D(e, n, o, r, a, d, u) {
  let s = (e.readOutcomes ?? V)(),
    g = S({
      flag: n,
      candidacy: r,
      policy: s.policy,
      settings: s.settings,
      surface: e.surface,
      blockedMs: a
    }),
    f = (e.readContext ?? K)(s, g.resource),
    m = {
      decision: g,
      message: B(g, f),
      flag: n,
      flagSource: o,
      candidacy: r,
      armed: !0,
      context: f,
      attempt: d,
      decidedWithoutWaiting: u.decidedWithoutWaiting,
      outcomes: s
    };
  if (u.report) (e.report ?? VPt)(m, s);
  return m;
}
function VPt(e, n, o) {
  let { decision: r, flag: a, candidacy: d } = e,
    u = Zs("tengu_org_config_gate", {
      decision: c(r.verdict),
      decision_reason: ce(r.reason),
      decision_resource: ce(r.resource),
      surface: c(r.surface),
      blocked_ms: r.blockedMs,
      attempt: e.attempt,
      decided_without_waiting: e.decidedWithoutWaiting,
      final_outcome: ce(o?.outcome),
      recovered_after_ms: o?.recoveredAfterMs,
      tier: ce(d.candidate ? d.tier : void 0),
      flag_source: c(e.flagSource),
      flag_percent: a.percent,
      grace_ttl_hours: a.graceTtlHours,
      budget_ms: a.budgetMs,
      policy_reason: ce(n?.policy.reason),
      policy_has_cache: n?.policy.hasAdmittedCache,
      policy_cache_age_ms: n?.policy.admittedCacheAgeMs,
      settings_reason: ce(n?.settings.reason),
      settings_has_cache: n?.settings.hasAdmittedCache,
      settings_cache_age_ms: n?.settings.admittedCacheAgeMs,
      http_status: e.context.httpStatus
    }).catch(() => {}),
    s = !Y.done && (o !== void 0 || (e.attempt === 0 && !Fpe(r)));
  if (s) Y.done = !0;
  let g = !s
      ? void 0
      : r.verdict === "pass"
        ? jr("org_config_gate")
        : r.verdict === "pass_cached" || r.verdict === "pass_exempt"
          ? da("org_config_gate", r.verdict)
          : zt("org_config_gate", r.reason ?? r.verdict),
    f = Promise.all([u, g]).then(() => {
      return;
    });
  return (
    M.set.add(f),
    f.finally(() => M.set.delete(f)),
    t(
      `org-config gate: ${r.verdict}${r.reason ? ` (${r.resource} ${r.reason})` : ""} on ${r.surface} after ${r.blockedMs}ms`
    ),
    f
  );
}
var Y = ve({ done: !1 }, (e) => {
    e.done = !1;
  }),
  M = ve({ set: new Set() }, (e) => {
    e.set = new Set();
  });
async function igs() {
  await Promise.allSettled([...M.set]);
}
async function ryr() {
  await Promise.all([
    Shn({ singleAttempt: !0 }).catch((e) =>
      l(
        new R(
          `org-config gate: the policy retry threw (${a9(e)})`,
          "org-config gate: the policy retry threw"
        )
      )
    ),
    r8e(void 0, void 0, { singleAttempt: !0 }).catch(
      (e) => (
        l(
          new R(
            `org-config gate: the settings retry threw (${a9(e)})`,
            "org-config gate: the settings retry threw"
          )
        ),
        !1
      )
    ),
    Pe(
      gH().catch((e) =>
        l(
          new R(
            `org-config gate: the flag refresh threw (${a9(e)})`,
            "org-config gate: the flag refresh threw"
          )
        )
      ),
      Re
    )
  ]);
}
var Re = 3000;
function nso(e, n = P9t, o = UV) {
  if (e === "disk") return !n();
  return e === "fallback" && o() && !n();
}
function rso(e, n = P9t, o = UV) {
  return (
    !e.armed &&
    e.flagSource === "fallback" &&
    !e.candidacy.candidate &&
    e.candidacy.exclusion === "flag_off" &&
    o() &&
    !n()
  );
}
function P9t() {
  return Mvt(Jne()) || !YVe();
}
async function oyr(e, n = Ai) {
  await Pe(
    n().then(
      () => {
        return;
      },
      () => {
        return;
      }
    ),
    e
  );
}
var J = ve({ byFetcher: new WeakMap() }, (e) => {
  e.byFetcher = new WeakMap();
});
function oso(e = Ai) {
  let n = J.byFetcher.get(e);
  if (n === void 0) ((n = oyr(F1, e)), J.byFetcher.set(e, n));
  return n;
}
var Fe = [15000, 15000, 30000, 60000, 180000, 600000],
  we = 0.3;
function sso(e, n = Math.random) {
  let o = Fe[e];
  if (o === void 0) return;
  let r = (n() * 2 - 1) * we;
  return Math.max(1000, Math.round(o * (1 + r)));
}
export { rgs, Qoo, Fpe, ogs, Zoo, x9t, sgs, eso, tso, VPt, igs, ryr, nso, rso, P9t, oyr, oso, sso };

//# sourceMappingURL=chunk-1p8hjkxp.js.map
