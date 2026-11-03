// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  st,
  JCe,
  ua,
  nA,
  Ng,
  Ln,
  Et,
  kf,
  Ent,
  Hz,
  $i,
  jp,
  wbn,
  kn,
  k,
  cS,
  lI,
  ue,
  Znt,
  b5o,
  Ibn,
  J4r,
  trt
} from "./chunk-ajtyjx88.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { FSe, SXr, Pn } from "./chunk-wrtp8qz8.js";
import { Nt, Pe } from "./chunk-4hww8411.js";
import { wr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { fk } from "./chunk-xc1j8sdj.js";
import { v2, t } from "./chunk-4kxznmzw.js";
import { aYt, S9r, l } from "./chunk-ewvf3tep.js";
import { mo } from "./chunk-ak0cmk10.js";
import { j$ } from "./chunk-1e5yp9hx.js";
import { Sr, tk, Xrt, Ae, Fn, UNe, of } from "./chunk-dvghjmtr.js";
import { I0, yZ } from "./chunk-znkwh1rm.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { CVt, yNe, ube, Ekt } from "./chunk-r1dvrqha.js";
import { nor } from "./chunk-wejdb0zs.js";
import { hkt } from "./chunk-r00j5r9s.js";
import {
  YGt,
  f0,
  Ahn,
  Mh,
  wV,
  C7,
  on,
  vV,
  d9,
  m_e,
  W2o,
  Xc,
  uZn,
  ZGt,
  z2o,
  Pw,
  R7
} from "./chunk-cr7a2cdd.js";
import { Sre, NBr, kUo } from "./chunk-fkrhc02x.js";
import { gr } from "./chunk-z2vz1f06.js";
import { ose } from "./chunk-hk0dvhmb.js";
var W = "tengu_reflective_wolf";
function z1t() {
  let e = Lo();
  return (
    (e.attributionAnnouncementEnabled ??= i.CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT ?? k(W, !0)),
    e.attributionAnnouncementEnabled
  );
}
function V8n(e) {
  let o = z1t() ? Ibn() : void 0,
    n = st();
  if ((e(), o === void 0 || st() === n)) return;
  return (b5o(o, { forContextWindow: !0 }), o);
}
function P(e, o, n) {
  let r = import("./chunk-czdwggd8.js")
    .then(({ refreshBootstrapData: a }) => a(e, o, { renderedClientData: n }))
    .then(
      () => {},
      (a) => l(a)
    );
  return (K1t(r), r);
}
function q8n(e, o, n) {
  return P(e, o, n);
}
function CYs(e) {
  Sr().fetchesClientData = e;
}
function sUo() {
  return Sr().fetchesClientData && Ae() === "firstParty";
}
function K1t(e) {
  let o = J4r(),
    n = Sr().providerCache.clientDataFetches;
  if (o !== void 0 && !(n.get(o) instanceof Promise)) {
    let r = FSe();
    (n.set(o, e),
      e.finally(() => {
        if (n.get(o) === e)
          if (FSe() === r) n.set(o, "over");
          else n.delete(o);
      }));
  }
}
function v() {
  return [...Sr().providerCache.clientDataFetches.values()].filter((e) => e !== "over");
}
function RYs(e) {
  let o = Sr().providerCache.clientDataFetches;
  for (let [n, r] of o) if (r === e) o.set(n, "over");
}
function xYs(e, o) {
  let n = J4r();
  if (n === void 0 || !sUo() || trt()) return;
  let r = Sr().providerCache.clientDataFetches.get(n);
  if (r !== void 0) return r === "over" ? void 0 : r;
  return P(e, o, Ibn());
}
function JL() {
  if (!Fn()) return !1;
  if (f0() !== void 0) return !0;
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  return of();
}
function tbt() {
  return JL() && f() && (k("tengu_ccr_bridge", !1) || C());
}
function C() {
  if (!E() || !JL() || le()) return !1;
  let e = N();
  if (e !== null) return M.includes(e) && ((e !== "team" && e !== "enterprise") || Mh());
  if (!b() || !m()?.organizationUuid) return !1;
  try {
    let o = Ln(),
      n = o?.refreshToken ? (o.subscriptionType ?? null) : null;
    return n !== null && M.includes(n);
  } catch {
    return !1;
  }
}
function E() {
  return !jp() && !i.DISABLE_GROWTHBOOK && aYt() === "no-telemetry" && !nor();
}
function N() {
  let e = SXr(),
    o = e?.named;
  if (!o || e?.bearerSha256 !== y()) return null;
  return (i.CLAUDE_CODE_ORGANIZATION_UUID || m()?.organizationUuid)?.toLowerCase() ===
    o.organizationUuid.toLowerCase()
    ? o.subscriptionType
    : null;
}
function x() {
  let e = SXr();
  return (
    e !== null && e.bearerSha256 === y() && (e.named !== null || Date.now() - e.answeredAtMs < F)
  );
}
function U() {
  return E() && N() !== null;
}
function y() {
  try {
    let e = Ln();
    return e && !e.refreshToken && e.accessToken !== hkt ? Ent() : null;
  } catch {
    return null;
  }
}
var j = 6000,
  F = 60000;
async function H(e) {
  if (y() === null || !E() || x()) return;
  await Pe(
    Promise.allSettled(v()).then(async () => {
      if (e !== void 0) (await w(e), await w(e));
    }),
    j
  );
}
function w({ storageV5: e, credentials: o }) {
  let n = y();
  if (n === null || x()) return;
  let r = mo();
  if (r.bearerPlanFetch?.bearerSha256 !== n || Date.now() - r.bearerPlanFetch.startedAtMs >= F)
    r.bearerPlanFetch = {
      bearerSha256: n,
      startedAtMs: Date.now(),
      answered: import("./chunk-czdwggd8.js")
        .then(({ refreshBootstrapData: a }) => a(e, o, { keepRenderCaches: !0 }))
        .then(
          () => {},
          (a) => l(a)
        )
    };
  return r.bearerPlanFetch.answered;
}
var M = ["pro", "max", "team", "enterprise"];
function Rfn() {
  if (tbt()) return null;
  if (!p()) return "not_signed_in";
  if (!f()) return "api_key_auth";
  if (!b()) return "no_profile_scope";
  return "not_in_rollout";
}
function c() {
  return !1;
}
function tV() {
  return j$()?.settings.disableRemoteControl === !0;
}
function GP() {
  if (c()) return !0;
  return q();
}
function q() {
  if (tV()) return !1;
  return !p$() && tbt();
}
function iUo() {
  return !1;
}
function aUo() {
  if (c()) return !0;
  return !tV() && !p$() && JL();
}
async function lUo(e) {
  return (await ABr(e)) === null;
}
async function ABr(e) {
  if (c()) return null;
  if (tV()) return "managed_disabled";
  if (!JL()) return "not_first_party";
  if (p$()) return "cloud_session";
  if (!f()) return p() ? "not_subscription_auth" : "not_signed_in";
  if ((await H(e), C() || (await cS("tengu_ccr_bridge")))) return null;
  if (!jp()) return "flags_disabled";
  return $i() ? "gate_off" : "flags_unreachable";
}
var K =
    "Remote Control is disabled by your organization's policy. Contact your organization admin for access.",
  X = 86400000,
  J = 2147483647;
function G() {
  return R7();
}
function Y8n() {
  let { featureLabel: e, verb: o } = C7("allow_remote_control");
  return CVt(e, o, I0(), K);
}
function DHe(e) {
  let o = e ? ["allow_remote_control", "allow_remote_sessions"] : ["allow_remote_control"];
  try {
    for (let n of o) {
      let r = Xc(n);
      switch (r) {
        case null:
        case "cache_miss":
        case "route_missing":
          continue;
        case "latched": {
          if (!d9() && !L()) continue;
          let { featureLabel: a, verb: _ } = C7(n);
          return { policy: n, kind: r, detail: yNe(a, _) };
        }
        case "org_denied":
          if (Pw()?.restrictions[n]?.allowed !== !1 && !d9() && !L()) continue;
          return {
            policy: n,
            kind: r,
            detail:
              n === "allow_remote_control"
                ? kUo
                : "Session mirroring was turned off by your organization's policy (allow_remote_sessions)."
          };
        default:
          return { policy: n, kind: "org_denied", detail: kUo };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function L() {
  let e = wV();
  return e !== void 0 && Ahn.has(e);
}
var s = (e, o) => ({ reason: o, code: e, orgPolicyDenied: !1 });
async function V1t() {
  if (c()) return null;
  if (!JL()) return s("not_first_party", ae());
  if (p$()) return s("cloud_session", "Remote Control is not available inside a cloud session.");
  if (tV()) return s("managed_disabled", Sre);
  if (!p())
    return s(
      "not_signed_in",
      "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account."
    );
  if (!f())
    return s(
      "not_subscription_auth",
      q1t({
        prefix: "Remote Control requires claude.ai subscription auth.",
        suffix: "to use Remote Control."
      })
    );
  await H(void 0);
  let e = U();
  if (!e && !b())
    return s(
      "token_scope_limited",
      "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control."
    );
  if (!e && !m()?.organizationUuid)
    return s(
      "no_organization",
      "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information."
    );
  await Xde();
  let o = Y1t();
  if (o === "unavailable") return s("policy_unverified", NBr);
  if (o === "denied") return { reason: Y(), code: "org_policy_denied", orgPolicyDenied: !0 };
  if (C()) return null;
  if (!jp()) {
    let n = S9r();
    if (n)
      return s(
        "flags_disabled",
        `Remote Control requires feature-flag evaluation, which is disabled because ${n} is set. Unset it (or run in a shell without it) to use Remote Control.`
      );
    if (i.DISABLE_GROWTHBOOK)
      return s(
        "flags_disabled",
        "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control."
      );
    return s(
      "flags_disabled",
      "Remote Control requires feature-flag evaluation, which is unavailable in this environment."
    );
  }
  if (!(await cS("tengu_ccr_bridge"))) {
    if (!$i()) {
      if ((lI(), await cS("tengu_ccr_bridge"))) return null;
      if (!$i())
        return s(
          "flags_unreachable",
          "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details."
        );
    }
    return s(
      "gate_off",
      "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details."
    );
  }
  return null;
}
async function Q() {
  return (await V1t())?.reason ?? null;
}
function Y() {
  try {
    if (m_e()) return Ekt("Remote Control");
    if (uZn("allow_remote_control")) return yNe("Remote Control", "is");
    if (!G()) return ube("Remote Control");
    if (!W2o()) return K;
    return Y8n();
  } catch {
    return NBr;
  }
}
var Z = "set by your organization's configuration, not an admin setting";
function ee({ policyVerdict: e, policyDenialIsAuthoritative: o, currentTaints: n }) {
  if (e !== "denied" || !o) return !1;
  try {
    return !m_e() && !uZn("allow_remote_control") && ose(n).length > 0;
  } catch {
    return !1;
  }
}
function nbt() {
  if (c()) return null;
  if (tV()) return Sre;
  let e = mo(),
    o = YGt(),
    n = e.remoteControlLockReason;
  if (n !== void 0 && n.policyCacheRevision === o) return n.reason;
  let r = te();
  return ((e.remoteControlLockReason = { policyCacheRevision: o, reason: r }), r);
}
function te() {
  let e = Y1t();
  if (e === "allowed") return null;
  if (e === "unavailable") return NBr;
  return Y();
}
function _Ri() {
  if (!v2()) return "";
  let e = (o) => (o ? "set" : "unset");
  try {
    let o = Ln(),
      n = Object.values(Xrt).filter((r) => Ne(process.env[r]));
    return [
      "",
      "[debug] Remote Control auth state:",
      `  isBareMode=${wr()}`,
      `  hasOAuthAccessToken=${!!o?.accessToken}`,
      `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`,
      `  hasClaudeAIInferenceScope=${p()}`,
      `  isClaudeAISubscriber=${f()}`,
      `  hasProfileScope=${b()}`,
      `  oauthAccount.organizationUuid=${m()?.organizationUuid ? "set" : "unset"}`,
      `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`,
      `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`,
      `  apiKeyHelper=${Ng() ? "set" : "unset"}`,
      `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`,
      `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`,
      `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`,
      `  3P env=${n.length ? n.join(",") : "none"}`,
      ...oe()
    ].join(`
`);
  } catch (o) {
    return `
[debug] failed to collect auth state: ${o}`;
  }
}
function oe() {
  let e = (r) => (r ? "set" : "unset"),
    o = Hz(),
    n = ne();
  return [
    `  isGrowthBookEnabled=${jp()}`,
    `  telemetryDisabledBy=${S9r() ?? "none"}`,
    `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`,
    `  hasFreshGrowthBookFeatures=${$i()}`,
    `  growthBookFeaturesLoaded=${Object.keys(o).length}`,
    `  growthBookLastFetched=${n ? `${re(Date.now() - n)} ago` : "never"}`,
    `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}`
  ];
}
async function dUo() {
  if (p$() && !c()) return { disabledReason: null, inRemoteSession: !0, checks: [] };
  (lI(), await Xde());
  let e = await Q(),
    o = S9r() ?? (i.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null),
    n = JL(),
    r = !tV(),
    a = p(),
    _ = f(),
    D = U(),
    R = D || b(),
    A = D || !!m()?.organizationUuid,
    g = Y1t(),
    O = G(),
    V = ee({ policyVerdict: g, policyDenialIsAuthoritative: O, currentTaints: yZ() }),
    B = jp(),
    h = C(),
    I = h || (await cS("tengu_ccr_bridge")),
    T = $i(),
    z = [
      {
        label: n
          ? "Connected to the Anthropic API (api.anthropic.com)"
          : "Not connected to the Anthropic API (api.anthropic.com)",
        ok: n
      },
      {
        label: r
          ? "Not disabled by org policy (disableRemoteControl)"
          : "Disabled by org policy (disableRemoteControl)",
        ok: r
      },
      { label: a ? "Signed in to claude.ai" : "Not signed in to claude.ai", ok: a },
      {
        label: _ ? "claude.ai subscription active" : "claude.ai subscription auth not active",
        ok: _
      },
      {
        label: R
          ? "Sign-in includes the user:profile scope"
          : "Sign-in is missing the user:profile scope",
        ok: R
      },
      { label: A ? "Organization resolved" : "Organization not resolved", ok: A },
      {
        label:
          g === "allowed"
            ? "Org policy allows Remote Control (allow_remote_control)"
            : g === "unavailable"
              ? "Org policy could not be verified (allow_remote_control)"
              : !O
                ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)"
                : "Org policy does not allow Remote Control (allow_remote_control)",
        ok: g === "allowed",
        detail: V ? Z : void 0
      },
      {
        label: B ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled",
        ok: B || h,
        detail: o
          ? h
            ? `disabled by ${o}; Remote Control does not need it on a paid plan`
            : `disabled by ${o}`
          : void 0
      },
      {
        label: I
          ? "Remote Control enabled for this account"
          : T
            ? "Remote Control not enabled for this account"
            : "Remote Control availability could not be verified",
        ok: I,
        detail: h
          ? "decided from your plan, feature flags are off"
          : T
            ? void 0
            : "no server response this session"
      }
    ];
  return {
    disabledReason:
      e !== null && n && r && a && _ && R && A && g === "denied" && !O
        ? "Remote Control needs your organization's policy, which isn't loaded \u2014 see the Organization policy line above."
        : e,
    inRemoteSession: !1,
    checks: z
  };
}
function ne() {
  try {
    return ue().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}
function re(e) {
  let o = Math.round(e / 1000);
  if (o < 120) return `${o}s`;
  let n = Math.round(o / 60);
  if (n < 120) return `${n}m`;
  let r = Math.round(n / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function q1t({ prefix: e, suffix: o }) {
  try {
    let { source: n } = nA({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (n === "ANTHROPIC_API_KEY")
      return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${o}`;
    if (n === "apiKeyHelper")
      return `${e} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${o}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN)
      return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${o}`;
    let { source: r } = ua(),
      a = JCe(r);
    if (r !== "none" && a) return `${e} This session is using ${r} auth \u2014 ${a}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET)
      return `${e} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
  } catch {}
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${o}`;
}
var d = "Remote Control is only available when using Claude via api.anthropic.com.",
  S = "unset it (or run in a shell without it) to use Remote Control.",
  ie = "unset them (or run in a shell without them) to use Remote Control.";
function ae() {
  let e = Ae();
  if (e !== "firstParty") {
    if (e === "gateway")
      return `${d} This session uses a ${tk.gateway}, which does not support Remote Control.`;
    if (e === "bedrock" && UNe() === "mantle")
      return `${d} ${Xrt.bedrock} and ${Xrt.mantle} are set, so this session is using ${tk.bedrock} + ${tk.mantle} \u2014 ${ie}`;
    return `${d} ${Xrt[e]} is set, so this session is using ${tk[e]} \u2014 ${S}`;
  }
  if (!of()) {
    let o = i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL
      ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)"
      : "";
    return `${d} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${S}${o}`;
  }
  if (i.ANTHROPIC_UNIX_SOCKET)
    return `${d} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com \u2014 ${S}`;
  return d;
}
function p() {
  try {
    return Boolean(Ln()?.scopes?.includes(fk));
  } catch {
    return !1;
  }
}
function f() {
  try {
    return Et();
  } catch {
    return !1;
  }
}
function b() {
  try {
    return kf();
  } catch {
    return !1;
  }
}
function m() {
  try {
    return ue().oauthAccount;
  } catch {
    return;
  }
}
function le() {
  try {
    return ZGt("require_trusted_devices") || vV();
  } catch {
    return !0;
  }
}
async function Xde() {
  try {
    await se();
  } catch (e) {
    t(
      `[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${e instanceof Error ? e.message : String(e)}`
    );
  }
}
async function se() {
  try {
    if (Pw() !== null) return;
  } catch {}
  let e = await import("./chunk-g6pqvqm7.js");
  e.initializePolicyLimitsLoadingPromise();
  let o = mo();
  if (o.diagnosticPolicyKick === void 0) {
    let n = e.loadPolicyLimits();
    (n
      .catch(() => {})
      .finally(() => {
        o.diagnosticPolicyKick = void 0;
      }),
      (o.diagnosticPolicyKick = Nt(
        n,
        e.POLICY_LIMITS_COLD_AWAIT_MS,
        "bridge_diagnostic_policy_limits"
      ).catch(() => {})));
  }
  await o.diagnosticPolicyKick;
}
function Y1t() {
  try {
    return on("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function _Ae() {
  return GP() && Y1t() === "allowed";
}
function p$() {
  return Ne(process.env.CLAUDE_CODE_REMOTE) || Pn();
}
function cUo() {
  return k("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}
function bAe() {
  return k("tengu_luminous_seal", !0);
}
function uUo() {
  return k("tengu_bridge_partial_messages", !1);
}
function X8n() {
  return k("tengu_wobbly_pinwheel", !0);
}
function CBr() {
  return k("tengu_copper_kestrel", !0);
}
function X1t() {
  return k("tengu_bridge_auth_revive", !0);
}
function RBr() {
  return k("tengu_ethereal_mist", !0);
}
function fUo() {
  return k("tengu_wild_gosling", !1);
}
function rbt() {
  return k("tengu_humble_petal", !0);
}
function pUo() {
  return k("tengu_moonlit_lagoon", !0);
}
function mUo() {
  return k("tengu_bridge_resume_respects_local_owner", !0);
}
function gUo() {
  return k("tengu_sequential_puffin", !0);
}
function SAe() {
  return k("tengu_bridge_owner_pinned_end", !0);
}
function xBr() {
  return k("tengu_bridge_owner_check_attribution", !0);
}
function J8n() {
  return k("tengu_glimmering_glade", !0);
}
function hUo() {
  return k("tengu_lucky_quill", !0);
}
function yUo() {
  return k("tengu_keen_lantern", !0);
}
function _Uo() {
  return k("tengu_zany_melody", !0);
}
function PBr() {
  return k("tengu_bridge_host_declined_end", !0);
}
function bUo() {
  return k("tengu_bridge_signed_out_neutral", !0);
}
function xfn() {
  return k("tengu_ccr_v2_send_events_cli", !0);
}
function yU() {
  return k("tengu_ccr_v2_session_crud_cli", !1);
}
function bRi() {
  return k("tengu_ccr_v2_bridge_create_cli", !1);
}
function Pfn() {
  return k("tengu_composed_quail", !0);
}
function SUo() {
  return k("tengu_gravel_chorus", !0);
}
function obt() {
  return IBr().value;
}
function IBr() {
  if (p$()) return { value: !1, source: "remote_env" };
  let e = z2o("remote_control_at_startup");
  if (E()) return { value: !1, source: e === !1 ? "org_policy" : "growthbook" };
  if (HHe()) return { value: !0, source: "persistent_remote_session" };
  if (e !== void 0) return { value: e, source: "org_policy" };
  return { value: k("tengu_cobalt_harbor", !1), source: "growthbook" };
}
function Jde() {
  let e = Znt();
  return e !== void 0 ? e : obt();
}
function HHe() {
  return !1;
}
function SRi() {
  return !1;
}
function Ifn() {
  return k("tengu_amber_relay", !1);
}
async function wRi() {
  return !1;
}
function IZe() {
  {
    let { value: e, source: o } = kn("tengu_bridge_apply_server_session_config", !0);
    if (e !== !1) return !0;
    if (o === "override") return !1;
    return !(o === "payload" && wbn().organizationUUID);
  }
  return !1;
}
function OBr() {
  return k("tengu_bridge_child_auto_mode", !0);
}
function wUo() {
  return k("tengu_bridge_child_auto_over_settings", !0);
}
function MBr() {
  return k("tengu_bridge_rc_child_artifact", !0);
}
function J1t() {
  return k("tengu_bridge_rc_projects_hint", !0);
}
function DBr() {
  return k("tengu_bridge_child_machine_settings", !0);
}
function HBr() {
  return k("tengu_bridge_rc_child_auto_compact", !0);
}
function LBr() {
  return gr("tengu_gentle_grove", { safe: !1 });
}
function vUo() {
  let e = k("tengu_bridge_rc_child_idle_exit_ms", X);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), J);
}
function Ofn() {
  return k("tengu_bridge_rc_child_restart_resume", !0);
}
function Mfn() {
  return {
    enabled: k("tengu_bridge_subagent_frames", !0),
    forwardText: k("tengu_bridge_subagent_text", !1)
  };
}
function EUo(e, o) {
  if (e.replBridgeOutboundOnly && !o)
    return e.replBridgeSessionGroupingId !== void 0
      ? { ...e, replBridgeSessionGroupingId: void 0 }
      : e;
  if (e.replBridgeEnabled === o && !e.replBridgeOutboundOnly)
    return !o && e.replBridgeSessionGroupingId !== void 0
      ? { ...e, replBridgeSessionGroupingId: void 0 }
      : e;
  return {
    ...e,
    replBridgeEnabled: o,
    replBridgeOutboundOnly: !1,
    ...(!o && { replBridgeSessionGroupingId: void 0 })
  };
}
export {
  z1t,
  V8n,
  q8n,
  CYs,
  sUo,
  K1t,
  RYs,
  xYs,
  JL,
  tbt,
  Rfn,
  tV,
  GP,
  iUo,
  aUo,
  lUo,
  ABr,
  Y8n,
  DHe,
  V1t,
  nbt,
  _Ri,
  dUo,
  q1t,
  Xde,
  Y1t,
  _Ae,
  p$,
  cUo,
  bAe,
  uUo,
  X8n,
  CBr,
  X1t,
  RBr,
  fUo,
  rbt,
  pUo,
  mUo,
  gUo,
  SAe,
  xBr,
  J8n,
  hUo,
  yUo,
  _Uo,
  PBr,
  bUo,
  xfn,
  yU,
  bRi,
  Pfn,
  SUo,
  obt,
  IBr,
  Jde,
  HHe,
  SRi,
  Ifn,
  wRi,
  IZe,
  OBr,
  wUo,
  MBr,
  J1t,
  DBr,
  HBr,
  LBr,
  vUo,
  Ofn,
  Mfn,
  EUo
};

//# sourceMappingURL=chunk-r5xsp8d0.js.map
