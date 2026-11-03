// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { W } from "./chunk-jgvfzp2r.js";
import { EB, i } from "./chunk-cj37hmns.js";
import { U, ke, J } from "./chunk-wrtp8qz8.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { Y6o } from "./chunk-qakn3b85.js";
import { Ks } from "./chunk-znkwh1rm.js";
import { MH } from "./chunk-v19xty83.js";
import {
  QV,
  gM,
  _I,
  Jkt,
  P8o,
  bwn,
  I8o,
  Qkt,
  R5r,
  Uai,
  Grt,
  M8o,
  ofe,
  JVt,
  wwn,
  Ebe,
  vwn,
  _sr,
  Bai,
  Ewn,
  bI,
  Gp
} from "./chunk-7c3thgax.js";
import { oE } from "./chunk-xt4k95hv.js";
import { oi } from "./chunk-dc0nzty2.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { mxe } from "./chunk-v4kbwz0z.js";
import { KNe, qwn, sot, mB } from "./chunk-5rw2zfa0.js";
import { QQo } from "./chunk-tcvjb2c0.js";
import { D3r } from "./chunk-7zgz07kc.js";
import { ve } from "./chunk-vk5p9xv3.js";
var gkt = ["CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE", "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER"];
function iii(e) {
  return {
    ...(e.subscriptionType && { CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType }),
    ...(e.rateLimitTier && { CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier })
  };
}
function U6o() {
  if (i.CLAUDE_CODE_SESSION_KIND !== "bg")
    return { subscriptionType: void 0, rateLimitTier: void 0 };
  return {
    subscriptionType: i.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: i.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0
  };
}
import { homedir as K } from "os";
import { dirname as I, posix as T } from "path";
import { resolve as x } from "path";
function yrt() {
  if (J()) return null;
  let e = i.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (e) return x(e);
  let n = MH();
  return n === null ? null : x(n, "credentials", "federation");
}
var Fj = "proxy-injected";
var hkt = "ssh-placeholder";
function aii(e) {
  let { CLAUDE_CODE_OAUTH_TOKEN: n, ANTHROPIC_API_KEY: r } = e;
  return (
    !!e.ANTHROPIC_UNIX_SOCKET &&
    !e.ANTHROPIC_AUTH_TOKEN &&
    ((n === "ssh-placeholder" && !r) || (r === "ssh-placeholder" && !n))
  );
}
function Sor() {
  return Gp()
    .map((e) => e.sandbox?.bwrapPath)
    .find((e) => e != null);
}
function lii() {
  return Gp()
    .map((e) => e.sandbox?.socatPath)
    .find((e) => e != null);
}
function _Sn() {
  let e = Sor();
  if (e) return EB(e);
  return EB("bwrap");
}
var ye = /[ \t\n\v\f\r'"]/;
function wVt(e) {
  let n = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY,
    r = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY,
    s = D3r(e);
  if (!n && !r) return {};
  let C = B(n),
    a = B(r);
  if (!a.host) a = C;
  let c = {},
    E = (u, _) => {
      if (_ && e[u] === void 0) c[u] = _;
    };
  if (
    (E("YARN_HTTP_PROXY", n),
    E("YARN_HTTPS_PROXY", r),
    E("npm_config_proxy", n),
    E("npm_config_https_proxy", r),
    E("npm_config_noproxy", s),
    E("GLOBAL_AGENT_HTTP_PROXY", n),
    E("GLOBAL_AGENT_HTTPS_PROXY", r),
    E("GLOBAL_AGENT_NO_PROXY", s),
    E("ELECTRON_GET_USE_PROXY", "1"),
    E("DOCKER_HTTP_PROXY", n),
    E("DOCKER_HTTPS_PROXY", r),
    a.host)
  )
    (E("CLOUDSDK_PROXY_TYPE", "http"),
      E("CLOUDSDK_PROXY_ADDRESS", a.host),
      E("CLOUDSDK_PROXY_PORT", a.port),
      E("CLOUDSDK_PROXY_USERNAME", a.user),
      E("CLOUDSDK_PROXY_PASSWORD", a.pass));
  if ((E("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), a.host)) {
    let u = e.JAVA_TOOL_OPTIONS;
    if (!u?.includes("-Dhttps.proxyHost=")) {
      let _ = He(C, a, s);
      c.JAVA_TOOL_OPTIONS = u ? `${u} ${_}` : _;
    }
  }
  return c;
}
function B(e) {
  if (!e) return { host: "", port: "", user: "", pass: "" };
  try {
    let n = new URL(e);
    if (!n.hostname) return { host: "", port: "", user: "", pass: "" };
    return {
      host:
        n.hostname.startsWith("[") && n.hostname.endsWith("]")
          ? n.hostname.slice(1, -1)
          : n.hostname,
      port: n.port || (n.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(n.username),
      pass: decodeURIComponent(n.password)
    };
  } catch {
    return { host: "", port: "", user: "", pass: "" };
  }
}
function He(e, n, r) {
  let s = [],
    C = (a, c) => {
      if (c && !ye.test(c)) s.push(`-D${a}=${c}`);
    };
  if (
    (C("http.proxyHost", e.host),
    C("http.proxyPort", e.port),
    C("https.proxyHost", n.host),
    C("https.proxyPort", n.port),
    C("http.proxyUser", e.user),
    C("http.proxyPassword", e.pass),
    C("https.proxyUser", n.user),
    C("https.proxyPassword", n.pass),
    r)
  )
    C("http.nonProxyHosts", $e(r));
  return (
    s.push("-Djdk.http.auth.tunneling.disabledSchemes="),
    s.push("-Djdk.http.auth.proxying.disabledSchemes="),
    s.join(" ")
  );
}
function $e(e) {
  return e
    .split(/[,\s]+/)
    .map((n) => n.trim())
    .filter(Boolean)
    .flatMap((n) => {
      if (n.startsWith(".")) return [`*${n}`];
      return xe(n) ?? [n];
    })
    .join("|");
}
function xe(e) {
  let n = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!n) return;
  let r = [Number(n[1]), Number(n[2]), Number(n[3]), Number(n[4])],
    s = Number(n[5]);
  if (r.some((_) => _ > 255) || s < 8 || s > 24) return [e];
  let C = Math.floor(s / 8),
    a = s % 8;
  if (a === 0) return [`${r.slice(0, C).join(".")}.*`];
  let c = 2 ** (8 - a);
  if (c > 16) return [e];
  let E = r[C] - (r[C] % c),
    u = [];
  for (let _ = E; _ < E + c; _++) u.push(`${[...r.slice(0, C), _].join(".")}.*`);
  return u;
}
var _rt = [
  "CLAUDE_CODE_SESSION_KIND",
  "CLAUDE_BG_SOURCE",
  "CLAUDE_BG_ISOLATION",
  "CLAUDE_BG_BACKEND",
  "CLAUDE_CODE_SESSION_NAME",
  "CLAUDE_CODE_RESUME_INTERRUPTED_TURN",
  "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS",
  "CLAUDE_CODE_RESUME_PROMPT",
  "CLAUDE_CODE_RESUME_SHOWS_CUT_OFF_CALLS",
  "CLAUDE_CODE_RESUME_REASON",
  "CLAUDE_CODE_RESUME_SOURCE_ALIVE",
  "CLAUDE_BG_POST_CLEAR_RESPAWN",
  "CLAUDE_BG_SESSION_PERMISSION_RULES",
  "CLAUDE_BG_MEMORY_TOGGLED_OFF",
  "CLAUDE_BG_AUTO_MEMORY_OFF",
  "CLAUDE_BG_WORKSPACE_TRUSTED",
  "CLAUDE_BG_CARRIED_PROMPTS_SHA256",
  "CLAUDE_BG_GATEWAY_WITHHELD",
  "CLAUDE_CODE_RELAUNCH_HOME_TRUST",
  ...gkt
];
class j {
  scrubEnabledLatched = void 0;
  scrubSandboxAvailableLatched = void 0;
  scrubPathsLatched = void 0;
  scriptCallCounts = new Map();
  scriptCapsLatched = void 0;
  setScrubEnabledLatched(e) {
    this.scrubEnabledLatched = e;
  }
  setScrubSandboxAvailableLatched(e) {
    this.scrubSandboxAvailableLatched = e;
  }
  setScrubPathsLatched(e) {
    this.scrubPathsLatched = e;
  }
  setScriptCapsLatched(e) {
    this.scriptCapsLatched = e;
  }
  reset() {
    ((this.scrubEnabledLatched = void 0),
      (this.scrubSandboxAvailableLatched = void 0),
      (this.scrubPathsLatched = void 0),
      this.scriptCallCounts.clear(),
      (this.scriptCapsLatched = void 0));
  }
}
var l = ve(new j(), (e) => {
  (e.reset(), Uai());
});
class V {
  getAgentProxyEnv = void 0;
  getGhStandinDir = void 0;
  settingsEnvForChildren = {};
  hipaaTierNoticeGiven = !1;
}
var A = new W(() => new V());
function rf() {
  let e = l.scrubEnabledLatched;
  if (e !== void 0) return e;
  let n = Ne(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return (l.setScrubEnabledLatched(n), n);
}
function CYr() {
  if (rf()) return !0;
  if (is(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
var b = [
    ".env",
    ".env.local",
    ".env.development",
    ".env.development.local",
    ".env.test",
    ".env.test.local",
    ".env.production",
    ".env.production.local"
  ],
  Y = ["home", "root", "tmp", "var", "opt", "run", "mnt"].map((e) => `/${e}`),
  G = ".";
function X(e) {
  let n = new Set();
  for (let r of [gM, oi, QV])
    try {
      n.add(`${mB(e, r)}/.claude`);
    } catch {}
  return [...n];
}
function H9() {
  if (l.scrubSandboxAvailableLatched !== void 0) return l.scrubSandboxAvailableLatched;
  return _Sn() !== null;
}
async function B6o() {
  if ((R5r(), !rf())) return;
  let e = K(),
    n = ke(),
    r = process.env.GITHUB_ENV ? I(process.env.GITHUB_ENV) : void 0,
    s = process.env.GITHUB_WORKSPACE;
  l.setScrubSandboxAvailableLatched(_Sn() !== null);
  let C = (process.env.PATH ?? "")
    .split(":")
    .map((_) => (_ ? T.normalize(_).replace(/\/+$/, "") : _))
    .filter((_) => _ && Y.some((D) => _.startsWith(`${D}/`)));
  if (
    (l.setScrubPathsLatched({
      home: e,
      originalCwd: n,
      claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
      federationCacheDir: yrt() ?? void 0,
      canonicalClaudeDirs: X(n),
      runnerFileCommandsDir: r,
      workspace: s,
      GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
      GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
      pathDirs: C
    }),
    z(),
    _Sn() === null)
  ) {
    let _ = Sor();
    throw Error(
      _
        ? `sandbox.bwrapPath is set to ${_} but it is not an executable file. Fix the path in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).`
        : "bubblewrap is required for subprocess env scrubbing and isolation. Install with: sudo apt-get install -y bubblewrap, set sandbox.bwrapPath in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation)."
    );
  }
  if (J()) return;
  let { appendFile: a, mkdir: c, open: E } = await import("fs/promises");
  try {
    mxe();
  } catch {}
  for (let _ of [
    `${e}/.gitconfig`,
    `${e}/.bash_profile`,
    `${e}/.bashrc`,
    `${e}/.bash_aliases`,
    `${e}/.profile`,
    `${e}/.zshrc`,
    `${e}/.bunfig.toml`,
    `${e}/.netrc`,
    `${e}/.npmrc`,
    `${e}/.yarnrc`,
    `${e}/.yarnrc.yml`,
    `${n}/.npmrc`,
    `${n}/.yarnrc`,
    `${n}/.yarnrc.yml`,
    `${n}/bunfig.toml`,
    `${n}/package.json`,
    `${n}/.gitmodules`,
    `${n}/package-lock.json`,
    `${n}/yarn.lock`,
    `${n}/pnpm-lock.yaml`,
    "/tmp/inline-comments-buffer.jsonl",
    ...b.map((D) => `${n}/${D}`)
  ])
    try {
      (await c(I(_), { recursive: !0 }), await (await E(_, "a")).close());
    } catch {}
  for (let _ of [
    `${e}/.config/gh`,
    `${e}/.config/glab-cli`,
    `${e}/.config/git`,
    `${e}/.config/pip`,
    `${e}/.pip`,
    `${n}/.claude/commands`,
    `${n}/.claude/agents`,
    `${n}/node_modules/.bin`,
    ...(r ? [r] : []),
    ...C
  ])
    try {
      await c(_, { recursive: !0 });
    } catch {}
  if (s && T.resolve(s) !== T.resolve(n)) {
    (await c(`${s}/.git/hooks`).catch(() => {}),
      await c(`${s}/.git/glab-cli`).catch(() => {}),
      await c(`${s}/.git/modules`).catch(() => {}),
      await c(`${s}/.git/worktrees`).catch(() => {}),
      await c(`${s}/.git/info`).catch(() => {}),
      await c(`${s}/.github`, { recursive: !0 }).catch(() => {}));
    for (let _ of [
      `${s}/.git/config`,
      `${s}/.git/config.worktree`,
      `${s}/.git/info/exclude`,
      `${s}/.gitmodules`
    ])
      try {
        await (await E(_, "a")).close();
      } catch {}
    try {
      let _ = await E(`${s}/.git/commondir`, "wx");
      (await _.writeFile(G), await _.close());
    } catch {}
  }
  let u = [
    "bunfig.toml",
    "package.json",
    ".npmrc",
    ".yarnrc",
    ".yarnrc.yml",
    ".gitmodules",
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    ...b
  ];
  (await c(`${n}/.git/info`).catch(() => {}),
    await c(`${n}/.git/modules`).catch(() => {}),
    await c(`${n}/.git/worktrees`).catch(() => {}),
    await c(`${n}/.git/glab-cli`).catch(() => {}));
  try {
    await (await E(`${n}/.git/config.worktree`, "a")).close();
  } catch {}
  try {
    let _ = await E(`${n}/.git/commondir`, "wx");
    (await _.writeFile(G), await _.close());
  } catch {}
  try {
    await a(
      `${n}/.git/info/exclude`,
      `
# claude-code scrub-mode stubs
${u.map((_) => `/${_}`).join(`
`)}
`
    );
  } catch {}
}
function z() {
  if (l.scriptCapsLatched !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    l.setScriptCapsLatched(null);
    return;
  }
  try {
    let n = te(e);
    if (n && typeof n === "object" && !Array.isArray(n)) {
      let r = Ko(n, (s, C) => typeof s === "number" && Number.isFinite(s) && C.trim().length > 0);
      l.setScriptCapsLatched(Object.keys(r).length > 0 ? r : null);
    } else l.setScriptCapsLatched(null);
  } catch {
    l.setScriptCapsLatched(null);
  }
}
function j6o(e) {
  if (!rf()) return;
  if ((z(), !l.scriptCapsLatched)) return;
  let { scriptCapsLatched: n, scriptCallCounts: r } = l;
  for (let [s, C] of Object.entries(n)) {
    let a = e.split(s).length - 1;
    if (a > 0) {
      let c = (r.get(s) ?? 0) + a;
      if ((r.set(s, c), c > C))
        throw Error(
          `Script call limit exceeded: ${s} has been called ${c} times (cap: ${C}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`
        );
    }
  }
}
function DPi(e) {
  A.of(U().host).getAgentProxyEnv = e;
}
function HPi(e) {
  A.of(U().host).getGhStandinDir = e;
}
function xRe() {
  return A.of(U().host).getAgentProxyEnv?.() ?? {};
}
function W6o() {
  return A.of(U().host).getGhStandinDir?.();
}
function G6o(e) {
  A.of(U().host).settingsEnvForChildren = e;
}
function RYr(e) {
  let { settingsEnvForChildren: n } = A.of(U().host);
  return n[j5(n, e)];
}
function z6o() {
  return RYr("PATH");
}
function vVt(e) {
  let { settingsEnvForChildren: n } = A.of(U().host);
  return n[j5(n, e)] ?? process.env[e];
}
var Be = "3";
function xYr() {
  return i.CLAUDE_BG_BACKEND === "daemon" && i.FORCE_COLOR === Be;
}
function PYr() {
  if (!xYr()) return !1;
  let { settingsEnvForChildren: e } = A.of(U().host);
  return !Object.hasOwn(e, j5(e, "FORCE_COLOR"));
}
function j5(e, n) {
  if (O() !== "windows" || Object.hasOwn(e, n)) return n;
  let r = n.toUpperCase();
  return Object.keys(e).find((s) => s.toUpperCase() === r) ?? n;
}
function IYr(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}
function OYr(e) {
  let n = e.toUpperCase();
  return !JVt(e) && Ebe(e) && !Bai.has(n) && !_sr(n);
}
var w = new Set(qwn.map((e) => e.toUpperCase()));
function MYr() {
  if (!EVt()) return [];
  let e = A.of(U().host);
  if (!e.hipaaTierNoticeGiven)
    ((e.hipaaTierNoticeGiven = !0),
      t(
        "HIPAA: withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion"
      ));
  return M8o;
}
function EVt() {
  return Ks("hipaa");
}
var M = new Set(M8o.map((e) => e.toUpperCase()));
function yqe(e) {
  let n = e.replace(/^INPUT_/, "");
  return IYr(n) || KNe(n) || n.startsWith("OTEL_") || n === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}
function g(e, n) {
  return (
    (e === "CLAUDE_CODE_OAUTH_TOKEN" || e === "ANTHROPIC_API_KEY") &&
    n[e] === hkt &&
    n.ANTHROPIC_UNIX_SOCKET !== void 0
  );
}
function DYr() {
  let e = process.env,
    n = (r) => g(r, e) && !Object.keys(e).some((s) => s !== r && s.toUpperCase() === r);
  return [
    ...qwn.filter((r) => !n(r)),
    ...Object.keys(e).filter((r) => yqe(r.toUpperCase())),
    ...sot(e),
    ...Y6o(),
    ...QQo(),
    ...MYr().filter((r) => !n(r)),
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
    "CLAUDE_CODE_SKILL_ATTRIBUTION",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
    "CLAUDE_CODE_CONFIG_PROBE",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_MCP_SERVE_SETTINGS",
    "CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS",
    "CLAUDE_CODE_REMOTE_TOOLS_FORWARD",
    "CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT",
    ..._rt
  ];
}
var Ge = new Set([
    "BUN_GC_TIMER_INTERVAL",
    "BUN_GC_TIMER_DISABLE",
    "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS",
    "BUN_IDLE_GC_SECONDS"
  ]),
  we = new Set(["MIMALLOC_PURGE_HOLES_MIN_INTERVAL"]);
function k(e) {
  let n = e.toUpperCase();
  return n.startsWith("BUN_JSC_") || Ge.has(n) || we.has(n);
}
function Mo(e) {
  let n = A.of(U().host),
    r = n.getAgentProxyEnv?.() ?? {},
    s = Object.keys(r).length > 0,
    { settingsEnvForChildren: C } = n,
    a = Object.keys(C).length > 0,
    c = process.env;
  if (a || e !== void 0) {
    c = { ...e, ...process.env };
    for (let [o, p] of Object.entries(C)) c[j5(c, o)] = p;
  }
  let E = i.CLAUDE_CODE_REMOTE === !0,
    u = E ? wVt(s ? { ...c, ...r } : c) : {},
    _ = Object.keys(u).length > 0,
    D = CYr(),
    Q =
      Object.keys(process.env).some((o) => w.has(o.toUpperCase())) ||
      Object.keys(process.env).some((o) => yqe(o.toUpperCase())) ||
      process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 ||
      process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0,
    q = sot(process.env),
    Z = Y6o(),
    ee = QQo(),
    N = EVt() && Object.keys(process.env).some((o) => M.has(ofe(o))),
    v = !1;
  v = _rt.some((o) => process.env[o] !== void 0);
  let ne = Object.keys(process.env).some((o) =>
      /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(o)
    ),
    re = i.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 || i.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0,
    oe = i.CLAUDE_CODE_QUESTION_EXTENDED || i.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS,
    se = i.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES,
    ie = i.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH,
    ce = i.CLAUDE_CODE_SDK_READS_SESSION_STATE,
    _e = i.CLAUDE_CODE_SDK_READS_STARTUP_MARKS,
    ae = _I(),
    Ee = i.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED,
    Ce = Object.keys(c).some((o) => o.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD"),
    de =
      i.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT ||
      i.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT ||
      i.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS ||
      i.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT,
    le = i.CLAUDE_CODE_CONFIG_PROBE,
    ue = i.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0,
    pe = i.CLAUDE_CODE_REMOTE_MCP_CONFIG,
    Oe = i.CLAUDE_CODE_MCP_APPS_HOST,
    Ae = i.CLAUDE_CODE_ATTACHMENTS_BY_PATH,
    De = i.CLAUDE_CODE_SLEEP_COMPACT || i.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== void 0,
    fe = i.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== void 0,
    Te = i.CLAUDE_CODE_ARTIFACT_SHARE !== void 0,
    Se = i.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST,
    Re = Object.keys(c).some((o) => o.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"),
    he =
      i.CLAUDE_CODE_WARN_DISK_FREE_GIB !== void 0 || i.CLAUDE_CODE_WARN_MEMORY_FREE_GIB !== void 0,
    Le = i.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0,
    ge = i.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD,
    Ue =
      oE.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0 ||
      oE.CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS !== void 0 ||
      oE.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT !== void 0,
    P = !1;
  P = Object.keys(c).some(F);
  let y = E && Object.keys(c).some(k),
    Pe = !1;
  if (
    e === void 0 &&
    !s &&
    !_ &&
    !D &&
    !v &&
    !Q &&
    !q.length &&
    !Z.length &&
    !ee.length &&
    !N &&
    !ne &&
    !a &&
    !re &&
    !oe &&
    !se &&
    !ie &&
    !ce &&
    !_e &&
    !ae &&
    !Ee &&
    !Ce &&
    !de &&
    !le &&
    !ue &&
    !pe &&
    !Oe &&
    !Ae &&
    !De &&
    !fe &&
    !Te &&
    !Se &&
    !he &&
    !Re &&
    !Le &&
    !ge &&
    !Ue &&
    !P &&
    !y &&
    !Pe
  )
    return process.env;
  let H = { ...r, ...u },
    d = { ...c };
  for (let o of Object.keys(H)) {
    let p = j5(d, o);
    if (p !== o) delete d[p];
  }
  Object.assign(d, H);
  let me = new Set(
    [
      ...DYr(),
      "CLAUDE_CODE_SUBSCRIPTION_TYPE",
      "CLAUDE_CODE_RATE_LIMIT_TIER",
      "CLAUDE_CODE_QUESTION_EXTENDED",
      "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS",
      "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES",
      "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH",
      "CLAUDE_CODE_SDK_READS_SESSION_STATE",
      "CLAUDE_CODE_SDK_READS_STARTUP_MARKS",
      "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
      "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
      "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
      "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
      "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
      "CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT",
      "CLAUDE_CODE_CONFIG_PROBE",
      "CLAUDE_CODE_MCP_STARTUP_WAIT_MS",
      "CLAUDE_CODE_REMOTE_MCP_CONFIG",
      "CLAUDE_CODE_MCP_APPS_HOST",
      "CLAUDE_CODE_ATTACHMENTS_BY_PATH",
      "CLAUDE_CODE_SLEEP_COMPACT",
      "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS",
      "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS",
      "CLAUDE_CODE_ARTIFACT_SHARE",
      "CLAUDE_CODE_ARTIFACT_VERSIONS",
      "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST",
      "CLAUDE_CODE_WARN_DISK_FREE_GIB",
      "CLAUDE_CODE_WARN_MEMORY_FREE_GIB",
      "CLAUDE_CHROME_TAB_GROUP_KEY"
    ].map((o) => o.toUpperCase())
  );
  for (let o of Object.keys(d))
    if (
      me.has(o.toUpperCase()) ||
      yqe(o.toUpperCase()) ||
      (w.has(o.toUpperCase()) && !g(o, d)) ||
      (N && M.has(ofe(o)) && (o.includes("-") || !g(o, d)))
    )
      delete d[o];
  for (let o of _rt) delete d[o];
  if (PYr()) delete d[j5(d, "FORCE_COLOR")];
  for (let o of Object.keys(d)) if (o.startsWith("OTEL_")) delete d[o];
  if (
    (delete d.CLAUDE_CODE_OTEL_DIAG_STDERR,
    delete d.CLAUDE_CODE_PLUGIN_ATTRIBUTION,
    delete d.CLAUDE_CODE_SKILL_ATTRIBUTION,
    P)
  ) {
    for (let o of Object.keys(d)) if (F(o)) delete d[o];
  }
  if (y) {
    for (let o of Object.keys(d)) if (k(o)) delete d[o];
  }
  if (!D) return d;
  let Ie = Me(),
    be = Qkt().length > 0;
  for (let [o, p] of Object.entries(d)) {
    if (p === Fj && Object.hasOwn(r, o)) continue;
    if (g(o, d)) continue;
    if (Ie.has(ofe(o)) || vwn.test(o) || Ewn(o) || (be && OYr(o))) {
      delete d[o];
      continue;
    }
    if (p === void 0 || JVt(o)) continue;
    let f = typeof p === "string" ? p : String(p);
    if (Jkt(o)) {
      let R = bwn(o, f);
      if (R.value !== f) d[o] = R.value;
      if (R.cut) {
        let h = I8o(o, R.value);
        if (h !== void 0 && !P8o(d, h.name)) d[h.name] = h.value;
      }
      continue;
    }
    let S = wwn(o, f);
    if (S === void 0) {
      if (bI(f)) delete d[o];
    } else if (S !== f)
      if (S === "") delete d[o];
      else d[o] = S;
  }
  return d;
}
function bSn() {
  let e = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Ne(e)) return !0;
  if (is(e)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}
function K6o() {
  let e = l.scrubPathsLatched,
    n = e?.home ?? K(),
    r = e?.originalCwd ?? ke(),
    s = e?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH,
    C = e?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? I(process.env.GITHUB_ENV) : void 0),
    a = e?.workspace ?? process.env.GITHUB_WORKSPACE,
    c =
      a && T.resolve(a) !== T.resolve(r)
        ? [
            `${a}/.git/hooks`,
            `${a}/.git/config`,
            `${a}/.git/config.lock`,
            `${a}/.git/config.worktree`,
            `${a}/.git/config.worktree.lock`,
            `${a}/.git/commondir`,
            `${a}/.git/worktrees`,
            `${a}/.git/modules`,
            `${a}/.git/info/exclude`,
            `${a}/.git/glab-cli`,
            `${a}/.gitmodules`,
            `${a}/.github`,
            `${a}/.claude`
          ]
        : [];
  return {
    filesystem: {
      allowWrite: Y,
      denyRead: [
        "/run/docker.sock",
        "/run/containerd/containerd.sock",
        "/run/podman/podman.sock",
        "/run/buildkit/buildkitd.sock",
        "/run/dbus",
        "/run/user",
        e?.federationCacheDir ?? yrt()
      ].filter((E) => !!E),
      denyWrite: [
        `${n}/.bash_profile`,
        `${n}/.bashrc`,
        `${n}/.bash_aliases`,
        `${n}/.bash_login`,
        `${n}/.bash_logout`,
        `${n}/.profile`,
        `${n}/.zshrc`,
        `${n}/.zprofile`,
        `${n}/.zshenv`,
        `${n}/.zlogin`,
        `${n}/.zlogout`,
        `${n}/.claude`,
        `${n}/.claude.json`,
        e?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR,
        `${n}/.gitconfig`,
        `${n}/.config/git`,
        `${n}/.bunfig.toml`,
        `${r}/bunfig.toml`,
        `${r}/package.json`,
        ...b.map((E) => `${r}/${E}`),
        `${n}/.npmrc`,
        `${r}/.npmrc`,
        `${n}/.yarnrc`,
        `${n}/.yarnrc.yml`,
        `${r}/.yarnrc`,
        `${r}/.yarnrc.yml`,
        `${n}/.config/pip`,
        `${n}/.pip`,
        `${r}/package-lock.json`,
        `${r}/yarn.lock`,
        `${r}/pnpm-lock.yaml`,
        `${r}/node_modules/.bin`,
        `${r}/.git/modules`,
        `${r}/scripts`,
        `${r}/.claude`,
        ...(e?.canonicalClaudeDirs ?? X(r)),
        `${r}/.github`,
        `${n}/.local/bin`,
        `${n}/runners`,
        `${n}/actions-runner`,
        "/tmp/inline-comments-buffer.jsonl",
        ...(e?.pathDirs ?? []),
        C,
        s,
        s && s.includes("/_actions/") ? s.slice(0, s.indexOf("/_actions/") + 9) : void 0,
        e?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH,
        `${n}/.config/gh`,
        `${n}/.config/glab-cli`,
        `${n}/.netrc`,
        `${n}/.ssh`,
        `${r}/.git/hooks`,
        `${r}/.git/config`,
        `${r}/.git/config.lock`,
        `${r}/.git/config.worktree`,
        `${r}/.git/config.worktree.lock`,
        `${r}/.git/commondir`,
        `${r}/.git/worktrees`,
        `${r}/.gitmodules`,
        `${r}/.git/info/exclude`,
        `${r}/.git/glab-cli`,
        ...c
      ].filter((E) => !!E)
    }
  };
}
function F(e) {
  return e.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}
var m;
function Me() {
  let e = Qkt(),
    n = e.length > 0;
  if (m?.armed !== n) m = { armed: n, names: new Set([...Grt, ...e].map((r) => r.toUpperCase())) };
  return m.names;
}
export {
  gkt,
  iii,
  U6o,
  yrt,
  hkt,
  aii,
  Fj,
  Sor,
  lii,
  _Sn,
  wVt,
  _rt,
  rf,
  CYr,
  H9,
  B6o,
  j6o,
  DPi,
  HPi,
  xRe,
  W6o,
  G6o,
  RYr,
  z6o,
  vVt,
  xYr,
  PYr,
  j5,
  IYr,
  OYr,
  MYr,
  EVt,
  yqe,
  DYr,
  Mo,
  bSn,
  K6o
};

//# sourceMappingURL=chunk-r00j5r9s.js.map
