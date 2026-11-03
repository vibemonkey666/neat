// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { Wr, Ndr, Rit, Pit } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { vj, X2t, dEt, R4o, nA, nf, P0e, uf, ue } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { ma, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { G$e, Nc, OM, cX } from "./chunk-4nzy53ma.js";
import { p } from "./chunk-qmkm2x59.js";
import {
  Ii,
  Yz,
  aa,
  Lu,
  Nli,
  fqt,
  Xsr,
  s6r,
  Mbe,
  Vwn,
  Jsr,
  KNe,
  Yj,
  cfe,
  Ywn,
  $li,
  Xwn,
  rot,
  X9o,
  oot,
  J9o,
  pTt,
  Fli,
  NXo,
  UXo,
  BXo,
  GXo,
  AI,
  zXo,
  ak,
  YXo,
  XXo,
  Cb
} from "./chunk-5rw2zfa0.js";
import { Ae, Ci } from "./chunk-dvghjmtr.js";
import { er, Ro, Qt } from "./chunk-1e5yp9hx.js";
import {
  usr,
  _I,
  hwn,
  Xkt,
  R8o,
  x8o,
  Nai,
  $ai,
  sli,
  N5r,
  ln,
  J8o,
  pe,
  Rwn,
  u9o
} from "./chunk-7c3thgax.js";
import { OZ, lEn, pq, BQo, O3r, qS, HZ } from "./chunk-7zgz07kc.js";
import { w$e } from "./chunk-v19xty83.js";
import { gkt, G6o, xYr, j5, yqe } from "./chunk-r00j5r9s.js";
import { eC } from "./chunk-0hjcje8e.js";
import { YQs, My } from "./chunk-enp5gvra.js";
import { d7s, u7s, f7s, p7s } from "./chunk-kpmehc55.js";
import { $Le } from "./chunk-ttxbg7sf.js";
import { Ot } from "./chunk-ya7n419k.js";
import { o, M, T, u, B } from "./chunk-0bqrj5ah.js";
import { m2 } from "./chunk-njpzwa1b.js";
import { sd } from "./chunk-6jbh8yja.js";
function cj() {
  return i.CLAUDE_CODE_REMOTE && i.CLAUDE_CODE_REMOTE_HERMETIC_MODE;
}
var De = null;
function j(e) {
  De = e;
}
function X(e) {
  try {
    return new URL(e).host;
  } catch {
    return;
  }
}
function ozr(e = i.ANTHROPIC_BASE_URL || w$e()) {
  if (!e) return !0;
  let n = X(rn().BASE_API_URL);
  return n !== void 0 && X(e) === n;
}
function o9() {
  NXo();
}
function zQs() {
  BXo(J());
}
function J() {
  if (!Yz()) return { kind: "unreadable" };
  try {
    return { kind: "read", orgs: $Le() };
  } catch {
    return { kind: "unreadable" };
  }
}
function sR() {
  let e = AI();
  if (e !== void 0) return e;
  let {
    eligible: n,
    ineligibleReason: s,
    hybridOrganizationUuid: r,
    hybridSignInEnded: E,
    hybridBlockFilter: a
  } = ce();
  if ((XXo(r ?? null, E === !0, a ?? null), n && r === void 0))
    UXo({
      readAccount: uf,
      covers: Ae() !== "gateway" || (R4o() && !Rit() && !Pit()),
      orgPin: J()
    });
  let _ = i.CLAUDE_CODE_EVAL_CONFINED === !0,
    C = !n && _;
  YXo(C);
  let D = n || C;
  return GXo(D, D ? void 0 : s);
}
function Se() {
  return szr() || (nf() && (P0e() === null || Rwn()));
}
function ge() {
  let e = p7s();
  return e === null ? { eligible: !0 } : { eligible: !1, ineligibleReason: e };
}
function szr() {
  if (!nf()) return !1;
  let e = P0e();
  return e === "enterprise" || e === "team" || zXo(u9o, Xkt);
}
function ce() {
  if (ak()) return { eligible: !0 };
  if (cj()) return { eligible: !1, ineligibleReason: "hermetic_remote_session" };
  if (Lu()) return ge();
  if (Ae() === "gateway") {
    let E = Wr(),
      a = Ndr(E);
    return {
      eligible: a,
      ineligibleReason: a
        ? void 0
        : E?.hostVerdict !== void 0
          ? "host_gateway_not_accepted"
          : "unpinned_gateway"
    };
  }
  let e = Ae() !== "firstParty" ? "third_party_provider" : !Ci() ? "custom_base_url" : void 0;
  if (e) return z(!1) ?? { eligible: !1, ineligibleReason: e };
  let n = i.CLAUDE_CODE_ENTRYPOINT;
  if (n === "local-agent" || cX() || n?.startsWith("claude-coworker"))
    return { eligible: !1, ineligibleReason: "sandboxed_entrypoint" };
  let s = !1;
  try {
    s = dEt();
  } catch (E) {
    t(
      `Remote settings: could not read the profile store (${d(E)}); not treating this session as profile-authenticated`,
      { level: "warn" }
    );
  }
  if (s)
    return ozr()
      ? { eligible: !0 }
      : { eligible: !1, ineligibleReason: "profile_base_url_mismatch" };
  if (Se()) return { eligible: !0 };
  try {
    let { key: E } = nA({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (E) return { eligible: !0 };
  } catch {}
  if (X2t() !== void 0) return { eligible: !0 };
  let r = z(!0);
  if (r !== null) return r;
  return { eligible: !1, ineligibleReason: nf() ? "unsupported_subscription" : "no_auth" };
}
function z(e) {
  return null;
}
function G(e, n) {
  return Nli.test(e)
    ? "invalid-name"
    : typeof n !== "string"
      ? "non-string-value"
      : n.includes("\x00")
        ? "nul-in-value"
        : void 0;
}
var FGt = {
  "invalid-name": "it isn't a valid environment variable name",
  "non-string-value": "its value isn't a string",
  "nul-in-value": "its value contains a NUL character"
};
function j7n(e) {
  let n = Object.entries(e),
    s = n.flatMap(([E, a]) => {
      let _ = G(E, a);
      return _ === void 0 ? [] : [{ name: E, problem: _ }];
    });
  if (s.length === 0) return { kept: e, dropped: s };
  let r = new Set(s.map((E) => E.name));
  return { kept: Object.fromEntries(n.filter(([E]) => !r.has(E))), dropped: s };
}
var q = 200;
function Re(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function h(e) {
  return ma(e)
    .slice(1, -1)
    .replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Cwt(e) {
  let n = e.indexOf("="),
    s = n === -1 ? e : e.slice(0, n),
    r = s.length > q,
    E = `"${h(r ? s.slice(0, q) : s)}"${r ? "\u2026" : ""}`;
  return n === -1 ? E : `${E} (then '=' and ${Re(e.length - n - 1)}, not shown)`;
}
var Z = null;
function Q(e) {
  Z = e;
}
function KQs(e, n) {
  return Z?.(e, n) ?? !1;
}
var ee = () =>
    o()
      .trim()
      .min(1)
      .max(100)
      .refine((e) => Ot(e) === e),
  Et = p(() =>
    u({
      lead: ee(),
      worker: ee(),
      effort: B(aa).optional(),
      coordinator: M().default(!0),
      label: o().trim().min(1).max(60).default("Mix"),
      prompt: o().trim().min(1).max(4000).optional(),
      whenToUse: o().trim().max(4000).optional(),
      removePromptStrings: T(
        o()
          .max(2000)
          .refine((e) => e.trim() !== "")
      )
        .max(20)
        .optional()
    })
  );
function W7n() {
  return;
}
function H() {}
var fe = ["CLAUDE_CODE_REMOTE", "CLAUDE_CODE_IS_COWORK"];
function _Ke(e) {
  return fe.some((n) => (e ? Ne(e[n]) : i[n]));
}
var Te = [],
  U = new Set([
    ...oot,
    "CLAUDE_CODE_HOST_GATEWAY_LINEAGE",
    "CLAUDE_CODE_HOST_CREDS_FILE",
    "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
    "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
    "CLAUDE_BG_SOCKET_TOKENS_PATH",
    ...cfe,
    "CLAUDE_CODE_MESSAGING_SOCKET",
    "CLAUDE_CODE_MESSAGING_TOKEN",
    "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION",
    "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT",
    "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_MOUNTED_DRIVE_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY",
    "CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK",
    "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE",
    "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC",
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_EVAL_CONFINED",
    "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN",
    "CLAUDE_CODE_TUI_TRIAL",
    "CLAUDE_RELAUNCH_SESSION_ADD_DIRS",
    "CLAUDE_BG_SESSION_PERMISSION_RULES",
    "CLAUDE_BG_GATEWAY_WITHHELD",
    "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    "CLAUDE_SESSION_INGRESS_TOKEN_FILE",
    "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
    "CLAUDE_CODE_SESSION_KIND",
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_BG_WORKSPACE_TRUSTED",
    "CLAUDE_BG_CARRIED_PROMPTS_SHA256",
    "CLAUDE_CODE_RELAUNCH_HOME_TRUST",
    "CLAUDE_BRIDGE_REATTACH_SESSION",
    "CLAUDE_CODE_IGNORE_PERSISTED_TRUST",
    "CLAUDE_CODE_PROJECT_DIR_NAME",
    "CLAUDE_PTY_HOST_EXEC",
    "CLAUDE_BG_PTY_AUTH",
    "CLAUDE_BG_RV_AUTH",
    "CLAUDE_BG_CLAIM_AUTH",
    "CLAUDE_BG_RENDEZVOUS_SOCK",
    "CLAUDE_BG_BACKEND",
    "CLAUDE_BG_TCC_DISCLAIMED",
    "CLAUDE_PTY_HOST_NO_STABLE_PATH",
    "CLAUDE_CODE_DISABLE_LAUNCHER_SIGN_IN"
  ]),
  Le = new Set([
    "CLAUDE_CODE_REMOTE",
    "CLAUDE_CODE_ATTRIBUTION_PROJECT",
    "CLAUDE_CODE_REMOTE_HERMETIC_MODE",
    "CLAUDE_CODE_HOSTED_DESKTOP",
    "CLAUDE_CODE_ENVIRONMENT_KIND",
    "CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE",
    "CLAUDE_RUNNER_ACTIVITY_FD",
    "CLAUDE_RUNNER_UPDATE_BIN",
    "CLAUDE_CODE_WARN_DISK_FREE_GIB",
    "CLAUDE_CODE_WARN_MEMORY_FREE_GIB",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
    "CLAUDE_CODE_BRIDGE_MCP_CARRIER",
    "CLAUDE_CODE_BRIDGE_PROMPT_SHA256",
    "CLAUDE_CODE_APPEND_PROMPT_HEAD",
    "CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID",
    "CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID",
    "CLAUDE_CODE_BRIDGE_SOURCE_DIR",
    "VOICE_STREAM_BASE_URL",
    "CLAUDE_CODE_POLL_EVENTS",
    "CLAUDE_CODE_POLL_EVENT_DECLARATIONS",
    "CLAUDE_CODE_ACCOUNT_UUID",
    "CLAUDE_CODE_ORGANIZATION_UUID",
    "CLAUDE_CODE_USER_EMAIL",
    "CLAUDE_CODE_CONTAINER_ID",
    "CLAUDE_CODE_SESSION_ID",
    "CLAUDE_CODE_SYNC_SESSION_REFS",
    "CLAUDE_CODE_SKILL_PROPOSALS",
    "CLAUDE_CODE_REMOTE_SESSION_ID",
    "CLAUDE_CODE_REMOTE_MCP_CONFIG",
    "CLAUDE_CODE_HOVER_REST",
    "CCR_AGENT_PROXY_ENABLED",
    "CCR_AGENT_PROXY_RELAY_MODE",
    "CCR_AGENT_PROXY_INCLUDE_HOSTS",
    "CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED",
    "CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED",
    "CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY",
    "CCR_AGENT_PROXY_CA_WATCH_ENABLED",
    "CCR_AGENT_PROXY_CA_CERT_B64",
    "CCR_AGENT_PROXY_FRAME_HOSTS",
    "SELF_HOSTED_RUNNER_AGENT_PROXY_URL",
    "CCR_AGENT_PROXY_STANDALONE_URL",
    "AGENT_PROXY_URL",
    "AGENT_PROXY_AUTH_TOKEN",
    "CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN",
    "CLAUDE_CODE_MCP_SERVE_SETTINGS",
    "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT",
    "CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT",
    "CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION",
    "CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS",
    ...[],
    "CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG",
    "CLAUDE_CODE_AGENT_PROXY_GH_SHIM",
    "CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS",
    "SESSION_INGRESS_URL",
    "CLAUDE_CODE_REMOTE_SDK_URL",
    "CCR_SESSION_PROFILE",
    "CLAUDE_CODE_REMOTE_SESSION_ORIGIN",
    "CLAUDE_CODE_WORKER_EPOCH",
    "CLAUDE_CODE_DISABLE_WORKING_SYNC",
    ...[],
    "CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH",
    "CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT",
    "CLAUDE_CODE_CCR_WORKER_SOCKET",
    "CLAUDE_CODE_CCR_OWN_CONNECTION_POOL",
    "CLAUDE_CODE_CCR_EARLY_PLUGINS_SYNC",
    "CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC",
    "CLAUDE_CODE_CCR_EARLY_SYNC_AFTER_SETTINGS_REFUSAL",
    "CLAUDE_CODE_SYNC_REUSE_WITHIN_MS",
    "CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_CONCURRENCY",
    "CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN",
    "CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT",
    "CLAUDE_CODE_GROWTHBOOK_KICK_FROM_INIT",
    "CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE",
    "CLAUDE_CODE_SLEEP_COMPACT",
    "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS",
    "CLAUDE_CODE_CCR_SKIP_FRESH_MIGRATIONS",
    "CLAUDE_CODE_ATTACHMENTS_IN_USER_DATA",
    "CLAUDE_CODE_MANAGED_CONFIG_PREFETCH",
    "CLAUDE_CODE_CONFIG_WATCH_EVENTS",
    "CLAUDE_CODE_FLAG_FETCH_WAIT_MS",
    "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF",
    "CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS",
    "CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS",
    "CLAUDE_CODE_TRANSCRIPT_SLIM_TOOL_RESULTS",
    "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS",
    "CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP",
    "CLAUDE_CODE_DISABLE_HOOK_FORWARDING",
    "CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING",
    "CLAUDE_CODE_DISABLE_TURN_HANDOFF",
    "CLAUDE_CODE_LAZY_ENV_GETTERS",
    "CLAUDE_CODE_RESTRICTED",
    "CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG",
    "CLAUDE_CODE_PERSONAL_CONFIG_FIX"
  ]),
  he = new Set([
    "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
    "CLAUDE_REMOTE_WORKFLOW_ARGS",
    "CLAUDE_WORKFLOW_NAME_ONLY"
  ]),
  Ue = new Set([
    "CLAUDE_CODE_ENTRYPOINT",
    "CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS",
    "CLAUDE_CODE_HOST_SESSION_ID",
    "CLAUDE_CODE_HOST_WORKTREE",
    "CLAUDE_CODE_HOST_WORKTREE_FENCE",
    "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST",
    "CLAUDE_CODE_IS_COWORK",
    "CLAUDE_CODE_COWORK_FRAME_ARTIFACTS",
    "CLAUDE_CODE_HOST_SCHEDULED_RUN",
    "CLAUDE_CODE_ARTIFACT_SHARE",
    "CLAUDE_CODE_ARTIFACT_VERSIONS",
    "CLAUDE_CODE_CCR_SURFACE",
    "CLAUDE_CODE_SESSION_ORIGIN",
    "CLAUDE_CODE_WITTY_DEWDROP",
    "CLAUDE_CODE_CCR_EVENT_FLUSH_POLICY",
    "SYSTEM_REMINDER_MEMORY_CONTEXT",
    "CLAUDE_CODE_MEMORY_SUBAGENT_APPEND",
    "CLAUDE_CODE_POST_TURN_MEMORY",
    "CLAUDE_CODE_POST_TURN_MEMORY_CONFIG",
    "CLAUDE_CODE_POST_TURN_MEMORY_SYNC",
    "CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS",
    ...Te,
    "CLAUDE_CODE_QUESTION_EXTENDED",
    "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS",
    "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES",
    "CLAUDE_CODE_ATTACHMENTS_BY_PATH",
    "CLAUDE_CODE_MCP_APPS_HOST",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
    "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
    "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH",
    "CLAUDE_CODE_SDK_READS_SESSION_STATE",
    "CLAUDE_CODE_SDK_READS_STARTUP_MARKS",
    "CLAUDE_CHROME_PAIRED_DEVICE_ID",
    "CLAUDE_CHROME_TAB_GROUP_KEY",
    G$e,
    "CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR",
    "CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES",
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS",
    "CLAUDE_CODE_TOOL_USE_ID",
    "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO",
    "CLAUDE_CODE_CONFIG_PROBE",
    "CLAUDE_RUNNER_ALIVE_EVERY_MS"
  ]),
  Ie = new Set([
    "CLAUDE_STAGE_FILE_ROOT",
    "CLAUDE_CODE_DIFF_COPY_ROOT",
    "CLAUDE_CODE_FOUND_REPOSITORY_GIT"
  ]),
  N = new Map([
    ["CLAUDE_CHROME_CLASSIFIER_FLOOR", "1"],
    ["CLAUDE_CHROME_PERMISSION_MODE", "ask"],
    ["CLAUDE_CODE_ENABLE_CFC", "0"]
  ]);
function w(e, n) {
  switch (e) {
    case "CLAUDE_CHROME_CLASSIFIER_FLOOR":
      return Ne(n);
    case "CLAUDE_CHROME_PERMISSION_MODE":
      return n === "ask";
    case "CLAUDE_CODE_ENABLE_CFC":
      return is(n);
    default:
      return !1;
  }
}
var ve = "CLAUDE_CODE_DISABLE_DIR_";
function K(e, n) {
  let s = e.toUpperCase();
  return (
    Le.has(s) ||
    s.startsWith(ve) ||
    he.has(s) ||
    Ue.has(s) ||
    Ie.has(s) ||
    (N.has(s) && _Ke() && !w(s, n)) ||
    !1 ||
    s === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD"
  );
}
function shn(e, n) {
  return U.has(e.toUpperCase()) || K(e, n);
}
var me = new Set([
  "ANTHROPIC_UNIX_SOCKET",
  "ANTHROPIC_BASE_URL",
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "CLAUDE_CODE_OAUTH_TOKEN",
  ...Yj.filter((e) => e.startsWith("CLAUDE_CODE_ARTIFACT") || KNe(e))
]);
function ne(e) {
  if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) return e || {};
  let n = {};
  for (let [s, r] of Object.entries(e)) if (!me.has(s.toUpperCase())) n[s] = r;
  return n;
}
var I = Object.freeze({
  coworkCloud: !1,
  managedByHost: !1,
  managedByHostFlag: !1,
  desktopHost: !1,
  hostOrchestrated: !1,
  storedLoginPinned: !1
});
function v() {
  let e = Ne(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
    n = Nc(),
    s = process.env.CLAUDE_CODE_ENVIRONMENT_KIND;
  return {
    coworkCloud: Lu(),
    managedByHost: e || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR,
    managedByHostFlag: e,
    desktopHost: n,
    hostOrchestrated: n || s === "byoc",
    storedLoginPinned: _I()
  };
}
var Pe = new Set(["policySettings", "projectSettings", "localSettings"]),
  ye = [],
  Me = [],
  Ce = [],
  izr = new Set([
    eC,
    "CLAUDE_CODE_CUSTOM_OAUTH_URL",
    "CLAUDE_CODE_SYNC_SKILLS",
    "CLAUDE_CODE_SYNC_PLUGINS",
    "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC",
    "CLAUDE_CODE_CCR_SURFACE",
    "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
    "CLAUDE_CODE_DISABLE_PROACTIVITY",
    "CLAUDE_CODE_DISABLE_ATTACHMENTS",
    "CLAUDE_CODE_TETHER_LIVE",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
    "CLAUDE_CODE_MCP_APPS_HOST",
    "CLAUDE_CODE_COORDINATOR_MODE",
    "CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
    "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
    "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT",
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS",
    "CLAUDE_CODE_TOOL_USE_ID",
    "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO",
    "CLAUDE_CODE_DISABLE_WEB_FETCH",
    "CLAUDE_CODE_DISABLE_FILE_MENTIONS",
    "CCR_SESSION_PROFILE",
    "CLAUDE_CODE_MCP_STARTUP_WAIT_MS",
    "CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS",
    "CLAUDE_CODE_SKILL_PROPOSALS",
    "CLAUDE_CODE_PLUGIN_CACHE_DIR",
    "CLAUDE_CODE_PLUGIN_SEED_DIR",
    "CLAUDE_CODE_PLUGIN_DIRS",
    "CLAUDE_CODE_PLUGIN_DIR_WATCH",
    "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS",
    "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
    "CLAUDE_CODE_SKILL_ATTRIBUTION",
    "CLAUDE_CODE_MODEL_CATALOG_URL",
    "CLAUDE_CODE_MODEL_CATALOG",
    "CLAUDE_CODE_CLIENT_DATA_URL",
    "CLAUDE_CODE_ALLOW_OTHER_MODELS",
    "CLAUDE_CODE_REMOVE_PROMPT_STRINGS",
    ...gkt,
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN",
    "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE",
    "CLAUDE_CODE_NANKEEN_KESTREL",
    "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT",
    "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_IGNORE_PERSISTED_TRUST",
    "CLAUDE_CODE_DISABLE_MOUNTED_DRIVE_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY",
    "CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK",
    "CLAUDE_CODE_FEDERATION_CACHE_DIR",
    "ANTHROPIC_CONFIG_DIR",
    "XDG_CONFIG_HOME",
    "HOME",
    "APPDATA",
    "USERPROFILE",
    "HOMEDRIVE",
    "HOMEPATH",
    "PROGRAMDATA",
    "ALLUSERSPROFILE",
    "SYSTEMROOT",
    "WINDIR",
    "COMSPEC",
    "SYSTEMDRIVE",
    "PROGRAMFILES",
    "PROGRAMFILES(X86)",
    "PROGRAMW6432",
    "LOCALAPPDATA",
    "PATHEXT",
    "COMMONPROGRAMFILES",
    "COMMONPROGRAMFILES(X86)",
    "COMMONPROGRAMW6432",
    "PSMODULEPATH",
    "HOMESHARE",
    "ONEDRIVE",
    "ONEDRIVECONSUMER",
    "ONEDRIVECOMMERCIAL",
    "CDPATH",
    "PWD",
    "XDG_DATA_HOME",
    "XDG_CACHE_HOME",
    "XDG_STATE_HOME",
    "CLAUDE_CODE_SAFE_MODE",
    "CLAUDE_CODE_SIMPLE",
    "CLAUDE_CODE_HARBOR_KITE",
    "CLAUDE_CODE_HARBOR_KITE_CLOUD",
    "CLAUDE_CODE_HARBOR_KITE_PACING_OFF",
    "CLAUDE_CODE_SILENT_TURN_REMINDER",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_SECONDS",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT",
    "CLAUDE_CODE_MODEL_CAPABILITIES",
    "CLAUDE_CODE_ARTIFACT_ROOM",
    "CLAUDE_CODE_BASH_EDIT_DIFF",
    "CLAUDE_CODE_FORWARD_USER_INTENT",
    "CLAUDE_CODE_WHIMSICAL_ELEPHANT",
    "CLAUDE_CODE_ARTIFACT_PRESENCE",
    "CLAUDE_CODE_ARTIFACT_OPEN_ACTION",
    "CLAUDE_CODE_ARTIFACT_REPL",
    "CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR",
    "USER_TYPE",
    "CLAUDE_CODE_MESSAGING_SOCKET",
    "CLAUDE_CODE_MESSAGING_TOKEN",
    "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION",
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_TOASTY_THIMBLE",
    "CLAUDE_CODE_GENTLE_PARASOL",
    "CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT",
    "CLAUDE_CODE_LEGACY_BUNDLE",
    "CCR_ENABLE_BUNDLE",
    "CCR_FORCE_BUNDLE",
    ...Ce.flatMap((e) => e.names),
    "GITHUB_ACTIONS",
    "RUNNER_ENVIRONMENT",
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "ENABLE_BETA_TRACING_DETAILED",
    "BETA_TRACING_ENDPOINT",
    "OTEL_LOG_RAW_API_BODIES",
    ...Vwn,
    "CLAUDE_PTY_RECORD",
    "CLAUDE_CODE_DEBUG_LOGS_DIR",
    "CLAUDE_CODE_DIAGNOSTICS_FILE",
    "CLAUDE_CODE_PERFETTO_TRACE",
    "CLAUDE_CODE_FRAME_TIMING_LOG",
    "CLAUDE_CODE_REMOTE_MEMORY_DIR",
    "CLAUDE_COWORK_MEMORY_PATH_OVERRIDE",
    "AUTOMODE_DECISION_LOG",
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
    "CLAUDE_CODE_TMPDIR",
    "CLAUDE_TMPDIR",
    "TMPDIR",
    "TMP",
    "TEMP",
    "XDG_RUNTIME_DIR",
    "CLAUDE_JOB_DIR",
    "CLAUDE_CODE_DISABLE_BG_STABLE_PATH",
    "CLAUDE_CODE_REMOTE_TOOLS_FORWARD",
    "CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS",
    "CLAUDE_AFK_TIMEOUT_MS",
    "CLAUDE_AFK_COUNTDOWN_MS",
    "CLAUDE_AX_SCREEN_READER",
    "INK_SCREEN_READER",
    "CLAUDE_CHROME_CLASSIFIER_FLOOR",
    "CLAUDE_CHROME_PERMISSION_MODE",
    "CLAUDE_CODE_ENABLE_CFC",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    ...ye
  ]),
  be = ["CLAUDE_AX_", ...Ce.flatMap((e) => e.prefixes), ...Me];
function azr(e) {
  let n = e.toUpperCase();
  return izr.has(n) || be.some((s) => n.startsWith(s));
}
function te(e, n, s, r, E) {
  if (!e || !Mbe(n)) return e;
  let a = !0,
    _;
  for (let C of Object.keys(e)) {
    if (
      !azr(C) ||
      Jsr(C, e[C], r) ||
      (J9o.has(C) && Ne(e[C])) ||
      w(C.toUpperCase(), e[C]) ||
      We(C.toUpperCase(), e[C])
    )
      continue;
    if (((_ ??= { ...e }), delete _[C], s?.has(C) === !1)) {
      s.add(C);
      let D = n === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json",
        g = N.get(C.toUpperCase());
      t(
        g !== void 0
          ? `${C} in ${D} is ignored: a project's settings can only set it to "${g}". Set any other value in ~/.claude/settings.json or managed settings; in a remote or Cowork session, only in the environment Claude Code is started with.`
          : shn(C, e[C])
            ? `${C} in ${D} is ignored: no settings file can set this key, only the environment Claude Code is started with or Claude Code itself.`
            : C.toUpperCase() === "CLAUDE_CODE_MODEL_CATALOG"
              ? `${C} in ${D} is ignored: a project's settings can only turn the model catalog off ("off"). Set any other value in ~/.claude/settings.json or managed settings.`
              : `${C} in ${D} is ignored \u2014 project-scoped settings can't set this key. Set it in ~/.claude/settings.json or managed settings instead.`,
        { level: "warn" }
      );
    }
  }
  return _ ?? e;
}
var Fe = { ...FGt, "non-string-value": "its value isn't a string, a number or a boolean" };
function m(e, n, s) {
  if (!e) return e;
  let r;
  for (let [E, a] of Object.entries(e)) {
    let _ = a,
      C =
        typeof _ === "string"
          ? _
          : typeof _ === "number" || typeof _ === "boolean"
            ? String(_)
            : void 0,
      D = G(E, C);
    if (D === void 0) {
      if (C !== void 0 && C !== _) ((r ??= { ...e }), (r[E] = C));
      continue;
    }
    ((r ??= { ...e }), delete r[E]);
    let g = Fe[D],
      A = Cwt(E),
      L = `${n}:${g}:${A}`;
    if (s !== void 0 && !s.has(L))
      (s.add(L), t(`Env key ${A} from ${n} is ignored: ${g}.`, { level: "warn" }));
  }
  return r ?? e;
}
var Ge = new Set(["CLAUDE_CODE_TRANSCRIPT_LOCAL_GC"]);
function He(e, n, s) {
  return s === "policySettings" && Ge.has(e.toUpperCase()) && is(n);
}
var Be = new Set(["CLAUDE_CODE_ATTRIBUTION_HEADER"]);
function Ve(e, n, s) {
  return (
    s === "policySettings" &&
    Be.has(e.toUpperCase()) &&
    is(n) &&
    OM() &&
    Ndr(Wr()) &&
    is(Cb()?.env?.[e])
  );
}
function P(e, n, s, r = !1) {
  if (e === void 0 || e.has(n)) return;
  e.add(n);
  let E = h(n);
  t(
    r
      ? `Ignoring ${E} from ${s} \u2014 repo-committed settings can't re-point the TLS/proxy channel of a session whose credential comes from the host. Set it in ~/.claude/settings.json or managed settings instead.`
      : `Ignoring ${E} from ${s} \u2014 this session's provider routing is managed by the host (CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST or a host-auth-callback marker), so settings-sourced provider/auth configuration does not apply.`,
    { level: "warn" }
  );
}
function ie(e, n, s, r) {
  if (!e) return {};
  let E = s.managedByHost || (s.desktopHost && Pe.has(n)),
    a = {};
  for (let [_, C] of Object.entries(e)) {
    if (U.has(_.toUpperCase()) && !He(_, C, n)) continue;
    if (s.coworkCloud && X9o(_)) {
      P(r, _, n);
      continue;
    }
    if (!E) {
      a[_] = C;
      continue;
    }
    if (Ywn(_) && (s.managedByHost || !$li(_))) {
      if (s.managedByHost) P(r, _, n);
      continue;
    }
    if (s.managedByHost && _.toUpperCase() === "ANTHROPIC_CUSTOM_HEADERS") {
      P(r, _, n);
      continue;
    }
    if (s.managedByHostFlag && (!s.desktopHost || Mbe(n)) && (Xwn(_) || rot(_))) {
      P(r, _, n, s.desktopHost);
      continue;
    }
    a[_] = C;
  }
  return a;
}
function re(e, n, s, r) {
  if (!e || !s) return e || {};
  let E = {},
    a = [];
  for (let [_, C] of Object.entries(e)) {
    if (!s.has(_.toUpperCase()) || Ve(_, C, n)) {
      E[_] = C;
      continue;
    }
    if (r && process.env[_] !== C) a.push(_);
  }
  if (r && a.length > 0) we(a, n, r);
  return E;
}
function we(e, n, s) {
  let r = e.filter((a) => {
    let _ = `${n}:${a}`;
    if (s.has(_)) return !1;
    return (s.add(_), !0);
  });
  if (r.length === 0) return;
  let E = r.map(h).join(", ");
  t(
    `Ignoring ${E} from ${n}: the environment this session was launched with already sets ${r.length === 1 ? "it" : "them"}, and when the desktop app or a runner starts the session, the launch environment takes precedence over settings.`,
    { level: "warn" }
  );
}
var Ke = new Set(["CLAUDE_CODE_SUBPROCESS_ENV_SCRUB", "CLAUDE_CODE_PERFORCE_MODE"]),
  de = new Set(Vwn);
function le(e, n) {
  let s = e.toUpperCase();
  return sd() && !(pTt(e, n) && !Ywn(e) && !yqe(s) && !de.has(s)) && !(Ke.has(s) && Ne(n));
}
function Y(e) {
  return e === "NO_COLOR" || e === "FORCE_COLOR";
}
function W(e, n, s, r) {
  if (!e) return {};
  let E = {};
  for (let [a, _] of Object.entries(e)) {
    let C = a.toUpperCase();
    if (Y(C) || le(a, _)) {
      let g = j5(n, a);
      if (r === !0) {
        if (s?.has(g) === !1) s.set(g, n[g]);
      } else s?.delete(g);
      n[g] = _;
      continue;
    }
    let D = j5(n, a);
    (delete n[D], s?.delete(D), (E[a] = _));
  }
  return E;
}
function We(e, n) {
  return e === "CLAUDE_CODE_MODEL_CATALOG" && is(n);
}
function Lzo() {
  for (let e of N.keys()) delete process.env[e];
}
var ke = new Set([
  "CLAUDE_CODE_PLUGIN_DIRS",
  "CLAUDE_CODE_PLUGIN_DIR_WATCH",
  "CLAUDE_CODE_PROCESS_WRAPPER"
]);
function xe(e, n) {
  if (e === void 0 || !My() || (n !== "userSettings" && n !== "globalConfig")) return e;
  return Ii(e, (s, r) => ke.has(r.toUpperCase()));
}
function b(e) {
  if (!e) return {};
  let n = {};
  for (let [s, r] of Object.entries(e)) if (!K(s, r)) n[s] = r;
  return n;
}
function Nzo() {
  return S.envAboveProjectSettings();
}
function KE() {
  return S.getPreSettingsEnvSnapshot();
}
function utt() {
  let e = { ...KE() };
  for (let n of Object.keys(e)) if (process.env[n] === void 0) delete e[n];
  return e;
}
function o5(e, n) {
  return S.isSettingsSourcedEnvValue(e, n);
}
function $zo(e, n) {
  return S.personsSettingsEnvKeeps(e, n);
}
function Fzo() {
  return S.putBackUnsuppliedTelemetryEnv();
}
function Uzo(e) {
  S.setToolServerLaunchEnv(e);
}
function Bzo(e, n) {
  S.recordPersonsEnvValue(e, n);
}
function tm() {
  return S.peekPreSettingsEnvSnapshot();
}
function ihn() {
  return S.getLegacyEnvMap();
}
function toe() {
  return S.getAppliedGlobalConfigEnv();
}
sli(KE);
Nai(() => S.takeChildEnvFromRepository());
YQs(tm);
$ai(() => pe("policySettings")?.env ?? {});
Q(o5);
j((e) => S.routeAfterVerdict(e));
d7s({
  env: () => S.getHostLaunchEnv(),
  credential: () => S.getLaunchCredential(),
  road: () => S.getLaunchCredentialRoad()
});
function jzo(e, n) {
  return S.dropPreSettingsEnvSnapshot(e, n);
}
function c(e) {
  return O() === "windows" ? e.toUpperCase() : e;
}
function lzr(e, n, s) {
  if (e === void 0) return Object.freeze({ ...process.env });
  let r = new Set(n.map(c)),
    E = new Map(Object.entries(e).map(([_, C]) => [c(_), C])),
    a = {};
  for (let _ of Object.keys(process.env))
    if (r.has(c(_))) a[_] = s?.[_] ?? process.env[_];
    else if (E.has(c(_))) a[_] = E.get(c(_));
  return Object.freeze(a);
}
function G7n(e, n) {
  let s = Object.keys(process.env).filter((r) => n(r) && process.env[r] !== e[r]);
  for (let r of s)
    if (e[r] === void 0) delete process.env[r];
    else process.env[r] = e[r];
  return s.length > 0;
}
function s5(e, n = "policySettings") {
  return S.filterPolicyPredicateEnv(e, n, { forPolicyMatch: !1 });
}
function UGt(e, n = "policySettings") {
  return S.filterPolicyPredicateEnv(e, n, { forPolicyMatch: !0 });
}
function z7n(e, n) {
  return S.withoutInvalidSettingsEnv(e, n);
}
function ahn(e, n) {
  return b(z7n(e, n));
}
var Ye = ["userSettings", "flagSettings", "policySettings"],
  k = ["TRACES", "METRICS", "LOGS", "PROFILES"],
  R = fqt,
  oe = new Set(["HEADERS", "CLIENT_KEY", "CLIENT_CERTIFICATE"]),
  se = new Set(["OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER"]),
  Ee = "CLAUDE_CODE_ENABLE_TELEMETRY",
  _e = "BETA_TRACING_ENDPOINT";
var ui = new Set([`${fqt}ENDPOINT`, `${fqt}HEADERS`, `${fqt}PROTOCOL`]);
function x(e) {
  return e;
}
function je(e) {
  return !e
    .split(",")
    .map((n) => n.trim())
    .includes("otlp");
}
function ae(e) {
  return O() === "windows" ? e.toUpperCase() : e;
}
function y(e, n) {
  let s = {};
  for (let [r, E] of Object.entries(e ?? {}))
    if (n.includes(r.toUpperCase()) && E !== void 0) s[r] = String(E);
  return s;
}
class Oe {
  providerStripContext = I;
  projectScopeDropWarned = new Set();
  fullPassDroppedGitKey = !1;
  hostManagedDropWarned = new Set();
  invalidEnvKeyWarned = new Set();
  hostSpawnEnvKeys = void 0;
  settingsEnvForChildren = {};
  settingsEnvForChildrenFromRepository = new Map();
  publishedChildEnv = {};
  publishedChildEnvFromRepository = new Map();
  toolServerLaunchEnv = {};
  materializedProcessWrapper = void 0;
  preSettingsEnvSnapshot = void 0;
  userTierNames = new Set();
  launchNamesBeforeClaim = void 0;
  userTierNamesInSnapshot = new Set();
  claimLaunchEnv = void 0;
  launchCredentialRoad = "none";
  launchCredential = void 0;
  otelDominanceDropWarned = new Set();
  hostSpawnEnvDropWarned = new Set();
  servedFolderEnvWithheld = !1;
  getPreSettingsEnvSnapshot() {
    return (
      (this.preSettingsEnvSnapshot ??= this.latchPreSettingsEnvSnapshot({ ...process.env })),
      this.preSettingsEnvSnapshot
    );
  }
  latchPreSettingsEnvSnapshot(e) {
    let n = this.launchNamesBeforeClaim;
    this.userTierNamesInSnapshot = new Set(
      n === void 0
        ? []
        : Object.keys(e)
            .map((r) => r.toUpperCase())
            .filter((r) => this.userTierNames.has(r) && !n.has(r))
    );
    let s = this.claimLaunchEnv ?? e;
    return (
      (this.launchCredential = Lu() ? f7s(s) : null),
      (this.launchCredentialRoad = Lu() ? u7s(s, this.launchCredential) : "none"),
      Object.freeze(e)
    );
  }
  getLaunchCredentialRoad() {
    return (this.getPreSettingsEnvSnapshot(), this.launchCredentialRoad);
  }
  getLaunchCredential() {
    return (this.getPreSettingsEnvSnapshot(), this.launchCredential ?? null);
  }
  getHostLaunchEnv() {
    let e = this.getPreSettingsEnvSnapshot();
    return this.claimLaunchEnv ?? e;
  }
  envAboveProjectSettings() {
    let e = this.getPreSettingsEnvSnapshot(),
      n = {};
    for (let [s, r] of Object.entries(e))
      if (!this.userTierNamesInSnapshot.has(s.toUpperCase())) n[s] = r;
    return { ...n, ...pe("flagSettings")?.env, ...pe("policySettings")?.env };
  }
  peekPreSettingsEnvSnapshot() {
    return this.preSettingsEnvSnapshot;
  }
  appliedGlobalConfigEnv = void 0;
  legacyEnvMapAtLaunch = void 0;
  settingsOfferedEnvValues = new Map();
  personsWrittenEnvValues = new Map();
  otelDominatedAsked = void 0;
  getAppliedGlobalConfigEnv() {
    return this.appliedGlobalConfigEnv;
  }
  getLegacyEnvMap() {
    return this.legacyEnvMapAtLaunch ?? ue().env;
  }
  dropPreSettingsEnvSnapshot(e, n) {
    let s = this.preSettingsEnvSnapshot;
    if (
      ((this.preSettingsEnvSnapshot = void 0),
      (this.launchCredential = void 0),
      (this.claimLaunchEnv = void 0),
      (this.legacyEnvMapAtLaunch = void 0),
      e === void 0)
    )
      return !1;
    let r = [...e];
    if (s)
      this.launchNamesBeforeClaim = new Set([...Object.keys(s), ...r].map((_) => _.toUpperCase()));
    if (!Lu()) return !1;
    let E = lzr(s, r, n);
    this.claimLaunchEnv = E;
    let a = s !== void 0 && G7n(E, X9o);
    return (this.getPreSettingsEnvSnapshot(), a);
  }
  reset() {
    ((this.providerStripContext = I),
      this.projectScopeDropWarned.clear(),
      this.hostManagedDropWarned.clear(),
      this.invalidEnvKeyWarned.clear(),
      (this.hostSpawnEnvKeys = void 0),
      (this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()),
      (this.toolServerLaunchEnv = {}),
      (this.materializedProcessWrapper = void 0),
      (this.preSettingsEnvSnapshot = void 0),
      this.userTierNames.clear(),
      (this.launchNamesBeforeClaim = void 0),
      (this.userTierNamesInSnapshot = new Set()),
      (this.claimLaunchEnv = void 0),
      (this.launchCredential = void 0),
      (this.launchCredentialRoad = "none"),
      (this.appliedGlobalConfigEnv = void 0),
      (this.legacyEnvMapAtLaunch = void 0),
      this.settingsOfferedEnvValues.clear(),
      this.personsWrittenEnvValues.clear(),
      this.otelDominanceDropWarned.clear(),
      this.hostSpawnEnvDropWarned.clear(),
      (this.servedFolderEnvWithheld = !1),
      (this.fullPassDroppedGitKey = !1));
  }
  lastFullPassDroppedProjectGitKey() {
    return this.fullPassDroppedGitKey;
  }
  servedFolderEnvWasWithheld() {
    return this.servedFolderEnvWithheld;
  }
  strippedSettingsEnv(e, n, s, r) {
    let E = re(
      ie(
        b(
          ne(
            te(
              m(
                xe(this.asFromAFolderNobodyTrusted(e, n, r !== void 0), n),
                n,
                r && this.invalidEnvKeyWarned
              ),
              n,
              r && this.projectScopeDropWarned,
              () => this.envAboveProjectSettings(),
              r?.onGitKeyDropped
            )
          )
        ),
        n,
        s,
        r && this.hostManagedDropWarned
      ),
      n,
      this.hostSpawnEnvKeys,
      r && this.hostSpawnEnvDropWarned
    );
    if (r)
      return W(E, this.settingsEnvForChildren, this.settingsEnvForChildrenFromRepository, Mbe(n));
    let a = {},
      _ = W(E, a);
    for (let [C, D] of Object.entries(a)) if (Y(C.toUpperCase())) _[C] = D;
    return _;
  }
  keptSettingsEnv(e, n, s, r) {
    return this.withholdsEnvFrom(n, s) ? {} : this.strippedSettingsEnv(e, n, s, r);
  }
  routeAfterVerdict(e) {
    let n = this.providerStripContext === I ? v() : this.providerStripContext,
      s = this.claimLaunchEnv ?? this.peekPreSettingsEnvSnapshot() ?? process.env,
      r = [
        y(s, e),
        this.keptSettingsEnv(y(this.getLegacyEnvMap(), e), "globalConfig", n, void 0),
        ...Ro()
          .filter((a) => a !== "policySettings" && !Mbe(a))
          .map((a) => this.keptSettingsEnv(y(pe(a)?.env, e), a, n, void 0)),
        this.strippedSettingsEnv(y(J8o(), e), "policySettings", n, void 0)
      ],
      E = new Map(r.flatMap((a) => Object.entries(a).map(([_, C]) => [ae(_), C])));
    return (a) => E.get(ae(a));
  }
  setToolServerLaunchEnv(e) {
    this.toolServerLaunchEnv = e;
  }
  assignFromAboveTheRepository(e) {
    Object.assign(process.env, e);
    for (let n of Object.keys(e)) x8o(n);
  }
  takeChildEnvFromRepository() {
    let e = this.publishedChildEnv,
      n = [];
    for (let [s, r] of this.publishedChildEnvFromRepository) {
      let E = e[s];
      if (E === void 0) continue;
      if ((n.push([s, E]), r === void 0)) delete e[s];
      else e[s] = r;
    }
    if (n.length === 0) return;
    return () => {
      for (let [s, r] of n) e[s] = r;
    };
  }
  publishChildEnv() {
    ((this.publishedChildEnv = this.settingsEnvForChildren),
      (this.publishedChildEnvFromRepository = this.settingsEnvForChildrenFromRepository),
      G6o(this.settingsEnvForChildren));
  }
  takenFromToolServerLaunchEnv() {
    let e = {};
    for (let [n, s] of Object.entries(
      b(m(this.toolServerLaunchEnv, "globalConfig", this.invalidEnvKeyWarned))
    ))
      if (!U.has(n.toUpperCase())) e[n] = s;
    return this.filterSettingsEnv(W(e, this.settingsEnvForChildren), "globalConfig");
  }
  filterSettingsEnv(e, n, s) {
    let r = this.keptSettingsEnv(e, n, this.providerStripContext, { onGitKeyDropped: s });
    for (let [E, a] of Object.entries(r)) this.recordOfferedEnvValue(E, a);
    if (n === "globalConfig" || n === "userSettings")
      for (let E of Object.keys(r)) this.userTierNames.add(E.toUpperCase());
    return r;
  }
  withoutInvalidSettingsEnv(e, n) {
    return m(e, n, this.invalidEnvKeyWarned);
  }
  putBackUnsuppliedTelemetryEnv() {
    let e = this.preSettingsEnvSnapshot;
    if (e === void 0 || this.appliedGlobalConfigEnv === void 0) return !1;
    let n = !1,
      s = Object.keys(process.env).filter((r) => {
        let E = r.toUpperCase(),
          a = process.env[r];
        return (
          a !== void 0 &&
          a !== e[r] &&
          (s6r.some((_) => E.startsWith(_)) || Xsr.includes(E) || de.has(E)) &&
          this.settingsOfferedEnvValues.get(E)?.has(a.trim()) === !0 &&
          this.personsWrittenEnvValues.get(c(r)) !== a.trim()
        );
      });
    if (s.length > 0) {
      let r = new Map();
      for (let a of [
        this.toolServerLaunchEnv,
        this.appliedGlobalConfigEnv ?? {},
        ...Ro().map((_) => this.keptSettingsEnv(pe(_)?.env, _, this.providerStripContext, void 0))
      ])
        for (let [_, C] of Object.entries(a)) r.set(c(_), C.trim());
      let E = s.filter((a) => r.get(c(a)) !== process.env[a]?.trim());
      if (((n = G7n(e, (a) => E.includes(a))), n))
        t(
          `Telemetry environment variables put back to their startup values, or removed, because no settings source still sets their current value: ${E.map(h).join(", ")}`
        );
    }
    return (this.enforceManagedOtelFamilyDominance(), n);
  }
  isSettingsSourcedEnvValue(e, n) {
    let s = n.trim();
    return (
      this.settingsOfferedEnvValues.get(e.toUpperCase())?.has(s) === !0 ||
      this.personsWrittenEnvValues.get(c(e)) === s
    );
  }
  recordPersonsEnvValue(e, n) {
    if (n === void 0) this.personsWrittenEnvValues.delete(c(e));
    else this.personsWrittenEnvValues.set(c(e), n.trim());
  }
  recordOfferedEnvValue(e, n) {
    let s = e.toUpperCase(),
      r = n.trim(),
      E = this.settingsOfferedEnvValues.get(s);
    if (E) E.add(r);
    else this.settingsOfferedEnvValues.set(s, new Set([r]));
  }
  personsSettingsEnvKeeps(e, n) {
    let s = this.providerStripContext === I ? v() : this.providerStripContext,
      r = Ro(),
      E = r.slice(r.indexOf("userSettings") + 1),
      a = (_, C) => Object.keys(this.keptSettingsEnv(_, C, s, void 0));
    return (
      r.includes("userSettings") &&
      a({ [e]: n }, "userSettings").includes(e) &&
      !E.some((_) => a(pe(_)?.env, _).some((C) => c(C) === c(e))) &&
      !this.otelDominates(e) &&
      !(n === "" && c(e) === c(eC) && this.processWrapperKeyAbove() !== void 0)
    );
  }
  otelDominates(e) {
    let n = new Set();
    this.otelDominatedAsked = n;
    try {
      this.enforceManagedOtelFamilyDominance();
    } finally {
      this.otelDominatedAsked = void 0;
    }
    return n.has(e.toUpperCase());
  }
  otelClaimInForce(e, n) {
    return this.otelDominatedAsked !== void 0 || process.env[e] === n;
  }
  processWrapperKeyAbove() {
    return [
      this.processWrapperKeyFrom("policySettings"),
      this.processWrapperKeyFrom("flagSettings")
    ].find((e) => typeof e === "string" && e !== "");
  }
  filterPolicyPredicateEnv(e, n, { forPolicyMatch: s }) {
    if (!s && this.withholdsEnvFrom(n)) return {};
    let r = re(
        ie(
          b(
            ne(
              te(
                m(s ? e : this.asFromAFolderNobodyTrusted(e, n, !1), n, this.invalidEnvKeyWarned),
                n,
                this.projectScopeDropWarned,
                () => this.envAboveProjectSettings()
              )
            )
          ),
          n,
          this.providerStripContext,
          this.hostManagedDropWarned
        ),
        n,
        this.hostSpawnEnvKeys
      ),
      E = {};
    for (let [a, _] of Object.entries(r)) {
      let C = a.toUpperCase();
      if (Y(C)) continue;
      if (!s && le(a, _)) continue;
      E[a] = _;
    }
    return E;
  }
  withholdsEnvFrom(e, n = this.providerStripContext) {
    return n.storedLoginPinned && N5r(e);
  }
  asFromAFolderNobodyTrusted(e, n, s) {
    if (e === void 0 || !usr(n)) return e;
    let r = {};
    for (let [E, a] of Object.entries(e))
      if (typeof a === "string" && Fli(E, a)) r[E] = a;
      else if (s) this.servedFolderEnvWithheld = !0;
    return r;
  }
  processWrapperKeyFrom(e) {
    return this.withholdsEnvFrom(e) || sd() || (e === "userSettings" && My())
      ? void 0
      : pe(e)?.processWrapper;
  }
  dropDominatedOtelKey(e, n, s, r, E = "managed settings") {
    let a = this.otelDominatedAsked;
    if (a !== void 0) {
      if (
        !(r.has(e) && r.get(e) === process.env[e]) &&
        !this.hostSpawnEnvKeys?.has(e.toUpperCase())
      )
        a.add(e.toUpperCase());
      return;
    }
    if (r.get(e) === process.env[e]) return;
    if (this.hostSpawnEnvKeys?.has(e.toUpperCase())) return;
    if (process.env[e] === void 0) return;
    if (!this.otelDominanceDropWarned.has(e))
      (this.otelDominanceDropWarned.add(e),
        t(
          `Dropping ${h(e)}: ${h(s)} is claimed by ${E}, so lower-trust scopes cannot redirect ${n}`,
          { level: "warn" }
        ));
    delete process.env[e];
  }
  dropDominatedAntAlias(e, n, s, r = "managed settings") {
    return;
  }
  dropDominatedBetaTracingEndpoint(e, n, s = "managed settings") {
    this.dropDominatedOtelKey(
      _e,
      "the logs and traces signals through detailed beta tracing",
      e,
      n,
      s
    );
  }
  hostSpawnOtelClaims() {
    let e = new Map(),
      n = this.hostSpawnEnvKeys;
    if (!n) return e;
    let s = [...n].some((r) => {
      let E = x(r);
      return (
        ((E.startsWith(R) && E.endsWith("_ENDPOINT")) || E === _e) &&
        (process.env[r] ?? "").trim() !== ""
      );
    });
    for (let r of n) {
      let E = x(r),
        a = se.has(E) || E === Ee,
        _ = s && E.startsWith(R);
      if (!a && !_) continue;
      let C = process.env[r];
      if (C !== void 0) e.set(r, C);
    }
    return e;
  }
  enforceManagedOtelFamilyDominance() {
    let e = pe("policySettings"),
      n = e?.env,
      s = (e?.otelHeadersHelper ?? "").trim() !== "",
      r = new Map();
    for (let [E, a] of Object.entries(n ?? {})) {
      let _ = E.toUpperCase();
      if (!r.has(_) || E === _) r.set(_, a);
    }
    if ((this.applyOtelFamilyClaims(this.hostSpawnOtelClaims(), r, "the host spawn env"), !n && !s))
      return;
    if (s) {
      for (let E of k)
        this.dropDominatedOtelKey(
          `${R}${E}_ENDPOINT`,
          `the ${E.toLowerCase()} signal`,
          "otelHeadersHelper",
          r
        );
      (this.dropDominatedOtelKey(
        `${R}ENDPOINT`,
        "telemetry for any signal",
        "otelHeadersHelper",
        r
      ),
        this.dropDominatedAntAlias(`${R}ENDPOINT`, "otelHeadersHelper", r),
        this.dropDominatedBetaTracingEndpoint("otelHeadersHelper", r));
    }
    this.applyOtelFamilyClaims(r, r, "managed settings");
  }
  applyOtelFamilyClaims(e, n, s) {
    for (let [r, E] of e) {
      let a = x(r);
      if (a === Ee) {
        if (this.otelClaimInForce(r, E) && !Ne(E)) this.dropDominatedBetaTracingEndpoint(r, n, s);
        continue;
      }
      if (se.has(a)) {
        if (this.otelClaimInForce(r, E) && je(E)) this.dropDominatedBetaTracingEndpoint(r, n, s);
        continue;
      }
      if (!a.startsWith(R)) continue;
      if (E.trim() === "") continue;
      if (!this.otelClaimInForce(r, E)) continue;
      let _ = k.find((A) => a.startsWith(`${R}${A}_`));
      if (_) {
        let A = a.slice(`${R}${_}_`.length),
          L = _ === "TRACES" || _ === "LOGS";
        if (oe.has(A)) {
          if (
            (this.dropDominatedOtelKey(
              `${R}${_}_ENDPOINT`,
              `the ${_.toLowerCase()} signal`,
              r,
              n,
              s
            ),
            L)
          )
            this.dropDominatedBetaTracingEndpoint(r, n, s);
        } else if (A === "ENDPOINT" && L) this.dropDominatedBetaTracingEndpoint(r, n, s);
        continue;
      }
      let C = a.slice(R.length),
        D = oe.has(C),
        g = D ? [C, "ENDPOINT"] : [C];
      for (let A of g)
        for (let L of k)
          this.dropDominatedOtelKey(`${R}${L}_${A}`, `the ${L.toLowerCase()} signal`, r, n, s);
      if (D)
        (this.dropDominatedOtelKey(`${R}ENDPOINT`, "telemetry for any signal", r, n, s),
          this.dropDominatedAntAlias(`${R}ENDPOINT`, r, n, s));
      if (g.includes("ENDPOINT")) this.dropDominatedBetaTracingEndpoint(r, n, s);
      this.dropDominatedAntAlias(a, r, n, s);
    }
  }
  resetSettingsIfUserSettingsFileMoved(e) {
    if (ln("userSettings") !== e) er();
  }
  applySafeConfigEnvironmentVariables() {
    (this.getPreSettingsEnvSnapshot(), (this.providerStripContext = v()));
    let e = ln("userSettings");
    if (this.hostSpawnEnvKeys === void 0) {
      if (
        ((this.hostSpawnEnvKeys = this.providerStripContext.hostOrchestrated
          ? new Set(Object.keys(process.env).map((r) => r.toUpperCase()))
          : null),
        xYr())
      )
        this.hostSpawnEnvKeys?.delete("FORCE_COLOR");
    }
    ((this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()),
      Object.assign(process.env, this.takenFromToolServerLaunchEnv()),
      (this.appliedGlobalConfigEnv = this.filterSettingsEnv(
        this.getLegacyEnvMap(),
        "globalConfig"
      )),
      this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv));
    for (let r of Ye) {
      if (r === "policySettings") continue;
      if (!Qt(r)) continue;
      this.assignFromAboveTheRepository(this.filterSettingsEnv(pe(r)?.env, r));
    }
    (sR(),
      this.assignFromAboveTheRepository(
        this.filterSettingsEnv(pe("policySettings")?.env, "policySettings")
      ));
    let n = new Map();
    for (let r of Ro()) {
      let E = this.filterSettingsEnv(pe(r)?.env, r);
      for (let [a, _] of Object.entries(E)) n.set(a.toUpperCase(), { key: a, value: _, source: r });
    }
    for (let { key: r, value: E, source: a } of n.values()) {
      if (!pTt(r, E)) continue;
      if (Mbe(a)) {
        let _ = R8o(r);
        ((process.env[r] = E), _());
      } else ((process.env[r] = E), x8o(r));
    }
    this.publishChildEnv();
    let s = process.env[eC];
    if (!s || s === this.materializedProcessWrapper) {
      let r = Qt("userSettings") ? this.processWrapperKeyFrom("userSettings") : void 0,
        E = this.processWrapperKeyAbove() ?? (r === "" ? void 0 : r);
      if (E !== void 0) ((process.env[eC] = E), (this.materializedProcessWrapper = E));
    }
    (this.enforceManagedOtelFamilyDominance(), this.resetSettingsIfUserSettingsFileMoved(e));
  }
  applyConfigEnvironmentVariables() {
    (this.getPreSettingsEnvSnapshot(),
      (this.providerStripContext = v()),
      (this.settingsEnvForChildren = {}),
      (this.settingsEnvForChildrenFromRepository = new Map()));
    let e = i.NODE_EXTRA_CA_CERTS,
      n = i.CLAUDE_CODE_CERT_STORE,
      s = i.NODE_OPTIONS,
      r = i.CLAUDE_CODE_CLIENT_CERT,
      E = i.CLAUDE_CODE_CLIENT_KEY;
    ((this.legacyEnvMapAtLaunch ??= { ...ue().env }),
      Object.assign(process.env, this.takenFromToolServerLaunchEnv()),
      (this.appliedGlobalConfigEnv = this.filterSettingsEnv(
        this.getLegacyEnvMap(),
        "globalConfig"
      )),
      this.assignFromAboveTheRepository(this.appliedGlobalConfigEnv),
      (this.fullPassDroppedGitKey = !1));
    for (let g of Ro()) {
      let A = this.filterSettingsEnv(pe(g)?.env, g, () => {
        this.fullPassDroppedGitKey = !0;
      });
      if (Mbe(g)) {
        let L = Object.keys(A).map((F) => R8o(F));
        Object.assign(process.env, A);
        for (let F of L) F();
      } else this.assignFromAboveTheRepository(A);
    }
    (this.publishChildEnv(), this.enforceManagedOtelFamilyDominance());
    let a =
      i.NODE_EXTRA_CA_CERTS !== e ||
      i.CLAUDE_CODE_CLIENT_CERT !== r ||
      i.CLAUDE_CODE_CLIENT_KEY !== E;
    if (i.NODE_EXTRA_CA_CERTS !== e || i.CLAUDE_CODE_CERT_STORE !== n || i.NODE_OPTIONS !== s)
      lEn();
    let { certPath: _, keyPath: C } = BQo(),
      D =
        (i.CLAUDE_CODE_CLIENT_CERT !== _ || i.CLAUDE_CODE_CLIENT_KEY !== C) &&
        (_ !== void 0 || C !== void 0);
    if (!D) O3r();
    (HZ(),
      qS(),
      Promise.all([OZ(), pq()])
        .then(([g, A]) => {
          if (D && A.readFailed) O3r();
          if (a || D || g || A.changed) (HZ(), qS());
        })
        .catch(l));
  }
}
var S = new Oe(),
  fi = m2({ clear: Xe });
function noe() {
  try {
    S.applySafeConfigEnvironmentVariables();
  } finally {
    hwn();
  }
  (H(), vj());
}
function Cx() {
  try {
    S.applyConfigEnvironmentVariables();
  } finally {
    hwn();
  }
  (H(), vj());
}
function Wzo() {
  return S.servedFolderEnvWasWithheld();
}
function Xe() {
  S.reset();
}
export {
  cj,
  ozr,
  o9,
  zQs,
  sR,
  szr,
  FGt,
  j7n,
  Cwt,
  KQs,
  W7n,
  _Ke,
  shn,
  izr,
  azr,
  Lzo,
  Nzo,
  KE,
  utt,
  o5,
  $zo,
  Fzo,
  Uzo,
  Bzo,
  tm,
  ihn,
  toe,
  jzo,
  lzr,
  G7n,
  s5,
  UGt,
  z7n,
  ahn,
  noe,
  Cx,
  Wzo
};

//# sourceMappingURL=chunk-h2tyaevk.js.map
