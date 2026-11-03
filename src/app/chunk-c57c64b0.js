// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, es, q, ye, J, cm } from "./chunk-wrtp8qz8.js";
import { b, ce } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { _, nit, ie, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { Uu } from "./chunk-4nzy53ma.js";
import { _e } from "./chunk-n8wdmnah.js";
import { en } from "./chunk-rc7xvf0x.js";
import { Fe } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
import H from "os";
function V4t() {
  for (let e of [process.env.CCR_SPAWN_TIMESTAMP_MS, process.env.CLAUDE_CODE_SPAWN_TIMESTAMP_MS]) {
    if (e === void 0 || e.trim() === "") continue;
    let o = Number.parseInt(e, 10);
    if (Number.isFinite(o)) return o;
  }
  return;
}
import { dirname as it, join as j } from "path";
var Z = [
    "init_after_graceful_shutdown",
    "init_network_configured",
    "preAction_after_init",
    "preAction_after_migrations",
    "preAction_after_remote_settings",
    "action_handler_start",
    "action_before_mcp_policy_wait",
    "action_before_permission_context",
    "action_after_input_prompt",
    "action_before_setup",
    "action_after_policy_limits_cold_await",
    "action_after_setup",
    "action_commands_loaded",
    "action_mcp_configs_loaded",
    "action_after_plugins_init",
    "before_validateForceLoginOrg",
    "before_connectMcp",
    "after_connectMcp_claudeai",
    "before_print_import",
    "after_print_import",
    "runHeadless_entry",
    "after_grove_check",
    "before_sandbox_init",
    "after_sandbox_init",
    "before_loadInitialMessages",
    "after_loadInitialMessages",
    "after_modelStrings",
    "before_runHeadlessStreaming",
    "stdin_listen_started"
  ],
  Q = new Set(Z);
function C(e) {
  return Q.has(e);
}
var Alr = "startup_mark";
var wfi = 64;
var g = ve({ writeLine: void 0, ended: !1, written: new Set() }, (e) => {
  ((e.writeLine = void 0), (e.ended = !1), e.written.clear());
});
function vfi(e) {
  if (g.ended || g.writeLine !== void 0) return;
  g.writeLine = e;
}
function q4t(e) {
  if (g.writeLine === void 0) return;
  if (!C(e) || g.written.has(e)) return;
  g.written.add(e);
  try {
    g.writeLine(`{"type":"keep_alive","${Alr}":"${e}"}
`);
  } catch (o) {
    (GZo(),
      t(
        `The start-up mark report ended, because its writer threw: ${o instanceof Error && typeof o.message === "string" ? o.message : typeof o}`,
        { level: "error" }
      ));
  }
}
function GZo() {
  ((g.writeLine = void 0), (g.ended = !0));
}
var I = null;
function Vfe() {
  if (!I) I = Fe("perf_hooks").performance;
  return I;
}
function W$e(e) {
  return e.toFixed(3);
}
function o9r(e, o, r, s, p, c, u = "") {
  let n = s ? ` | RSS: ${en(s.rss)}, Heap: ${en(s.heapUsed)}` : "";
  return `[+${W$e(e).padStart(p)}ms] (+${W$e(o).padStart(c)}ms) ${r}${u}${n}`;
}
var A = i.CLAUDE_CODE_PROFILE_STARTUP,
  tt = 0.05,
  D = Math.random() < tt,
  et = A || D,
  y = "headless_";
class N {
  current = -1;
  turn0Marks = [];
  advance() {
    this.current++;
  }
}
var rt = new W(() => new N());
function x() {
  return rt.of(U().host);
}
function F() {
  return x().turn0Marks;
}
function nt() {
  let e = Vfe(),
    o = e.getEntriesByType("mark");
  for (let r of o) if (r.name.startsWith(y)) e.clearMarks(r.name);
}
function s9r() {
  if (!L()) return;
  let e = x();
  if ((e.advance(), nt(), Vfe().mark(`${y}turn_start`), A))
    t(`[headlessProfiler] Started turn ${e.current}`);
}
function gh(e) {
  if ((q4t(e), !L())) return;
  let o = Vfe();
  if ((o.mark(`${y}${e}`), A)) t(`[headlessProfiler] Checkpoint: ${e} at ${o.now().toFixed(1)}ms`);
}
function i9r() {
  if (!L()) return;
  let r = Vfe()
    .getEntriesByType("mark")
    .filter((f) => f.name.startsWith(y));
  if (r.length === 0) return;
  let s = new Map();
  for (let f of r) {
    let d = f.name.slice(y.length);
    s.set(d, f.startTime);
  }
  let p = s.get("turn_start");
  if (p === void 0) return;
  let c = x(),
    u = c.current;
  if (A && u === 0)
    c.turn0Marks = r.map(({ name: f, startTime: d }) => ({ name: f, startTime: d }));
  let n = { turn_number: u };
  if (u === 0)
    for (let [f, [d, m]] of Object.entries({
      load_initial_messages_ms: ["before_loadInitialMessages", "after_loadInitialMessages"],
      system_prompt_ms: ["before_getSystemPrompt", "after_getSystemPrompt"],
      streaming_setup_ms: ["before_runHeadlessStreaming", "stdin_listen_started"],
      stdin_wait_ms: ["stdin_listen_started", "run_entry"],
      mcp_prewait_ms: ["before_mcp_prewait", "after_mcp_prewait"]
    })) {
      let l = s.get(d),
        M = s.get(m);
      if (l !== void 0 && M !== void 0 && M > l) n[f] = Math.round(M - l);
    }
  let T = s.get("system_message_yielded");
  if (T !== void 0 && u === 0) n.time_to_system_message_ms = Math.round(T);
  let S = s.get("query_started");
  if (S !== void 0) n.time_to_query_start_ms = Math.round(S - p);
  let k = s.get("first_chunk");
  if (k !== void 0) n.time_to_first_response_ms = Math.round(k - p);
  let E = s.get("api_request_sent");
  if (S !== void 0 && E !== void 0) n.query_overhead_ms = Math.round(E - S);
  let h = ot(r);
  if (h.length > 0) {
    n.query_round_count = h.length;
    let f = h.flatMap((m) => (m.overheadMs === void 0 ? [] : [m.overheadMs]));
    if (f.length > 0)
      ((n.query_overhead_first_ms = f[0]),
        (n.query_overhead_max_ms = f.reduce((m, l) => Math.max(m, l))),
        (n.query_overhead_total_ms = f.reduce((m, l) => m + l, 0)));
    let d = h[0]?.firstChunkAt;
    if (d !== void 0) n.time_to_first_response_first_round_ms = Math.round(d - p);
  }
  if (((n.checkpoint_count = r.length), i.CLAUDE_CODE_ENTRYPOINT))
    n.entrypoint = ce(Uu()) ?? b("other");
  if (D) a("tengu_headless_latency", n);
  if (A) t(`[headlessProfiler] Turn ${u} metrics: ${_(n)}`);
}
function ot(e) {
  let o = [];
  for (let r of e) {
    let s = r.name.startsWith(y) ? r.name.slice(y.length) : r.name,
      p = o.at(-1);
    if (s === "query_started") o.push({ startedAt: r.startTime });
    else if (p !== void 0 && s === "api_request_sent") p.dispatchedAt ??= r.startTime;
    else if (p !== void 0 && s === "first_chunk") p.firstChunkAt ??= r.startTime;
  }
  return o.map((r) => ({
    ...(r.dispatchedAt !== void 0 && { overheadMs: Math.round(r.dispatchedAt - r.startedAt) }),
    ...(r.firstChunkAt !== void 0 && { firstChunkAt: r.firstChunkAt })
  }));
}
function L() {
  return et && ye() && !J();
}
var w = i.CLAUDE_CODE_PROFILE_STARTUP,
  st = 0.005,
  z = Math.random() < st,
  P = w || z;
class V {
  memorySnapshots = [];
  startupContext = {};
  bootstrapEntry = "cli";
  onceMarked = new Set();
  reported = !1;
  lateReported = !1;
  firstEmitPhases = new Set();
}
var at = new W(() => new V());
function R() {
  return es(at);
}
var _t = {
    import_time: ["cli_entry", "main_tsx_imports_loaded"],
    main_imports: ["cli_before_main_import", "main_tsx_entry"],
    mdm_keychain_await: ["preAction_start", "preAction_after_mdm"],
    init_time: ["init_function_start", "init_function_end"],
    init_safe_env: ["init_configs_enabled", "init_safe_env_vars_applied"],
    init_network: ["init_after_remote_settings_check", "init_network_configured"],
    init_tail: ["init_network_configured", "init_function_end"],
    settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
    tools_loaded: ["init_function_end", "action_tools_loaded"],
    preaction_tail: ["init_function_end", "action_handler_start"],
    action_prologue: ["action_handler_start", "action_after_input_prompt"],
    action_setup_span: ["action_after_input_prompt", "action_after_setup"],
    setup_uds_messaging: ["setup_uds_start", "setup_uds_end"],
    setup_uds_import: ["setup_uds_start", "setup_uds_imported"],
    setup_uds_dir: ["setup_uds_imported", "uds_inbox_dir_ready"],
    setup_uds_listen: ["uds_inbox_dir_ready", "uds_inbox_listening"],
    setup_uds_publish: ["uds_inbox_listening", "uds_inbox_key_published"],
    mcp_configs: ["action_tools_loaded", "action_mcp_configs_loaded"],
    plugins_init: ["action_mcp_configs_loaded", "action_after_plugins_init"],
    headless_setup: ["action_after_plugins_init", "before_validateForceLoginOrg"],
    force_login_org: ["before_validateForceLoginOrg", "before_connectMcp"],
    mcp_connect: ["before_connectMcp", "after_connectMcp_claudeai"],
    mcp_connect_user: ["before_mcp_connect_user", "after_mcp_connect_user"],
    mcp_connect_connector: ["before_mcp_connect_connector", "after_mcp_connect_connector"],
    growthbook_init: ["before_growthbook_init", "after_growthbook_init"],
    prewait: ["after_connectMcp_claudeai", "after_print_import"],
    sandbox_init: ["before_sandbox_init", "after_sandbox_init"],
    load_initial_messages: ["before_loadInitialMessages", "after_loadInitialMessages"],
    process_user_input: ["before_processUserInput", "after_processUserInput"],
    total_time: ["cli_entry", "main_after_run"]
  },
  ft = new Set([
    "total_time",
    "main_imports",
    "mdm_keychain_await",
    "init_safe_env",
    "init_network",
    "init_tail",
    "mcp_connect_user",
    "mcp_connect_connector",
    "growthbook_init",
    "preaction_tail",
    "action_prologue",
    "action_setup_span",
    "setup_uds_messaging",
    "setup_uds_import",
    "setup_uds_dir",
    "setup_uds_listen",
    "setup_uds_publish"
  ]);
if (P) go("profiler_initialized");
var B = P ? Date.now() : void 0,
  v = P ? Math.round(process.uptime() * 1000) : void 0;
function J0(e) {
  if (!P) return;
  Object.assign(R().startupContext, e);
}
function zZo() {
  return R().bootstrapEntry;
}
function go(e, { once: o = !1 } = {}) {
  if ((q4t(e), !P)) return !1;
  let { onceMarked: r, memorySnapshots: s } = R();
  if (o) {
    if (r.has(e)) return !1;
    r.add(e);
  }
  if ((Vfe().mark(e), w)) s.push(process.memoryUsage());
  return !0;
}
function G({ memorySnapshots: e }) {
  if (!w) return "Startup profiling not enabled";
  let r = Vfe().getEntriesByType("mark");
  if (r.length === 0) return "No profiling checkpoints recorded";
  let s = [];
  (s.push("=".repeat(80)), s.push("STARTUP PROFILING REPORT"), s.push("=".repeat(80)), s.push(""));
  let p = 0;
  for (let [u, n] of r.entries())
    (s.push(o9r(n.startTime, n.startTime - p, n.name, e[u], 8, 7)), (p = n.startTime));
  let c = r.at(-1);
  return (
    s.push(""),
    s.push(`Total startup time: ${W$e(c?.startTime ?? 0)}ms`),
    s.push("=".repeat(80)),
    s.join(`
`)
  );
}
function Mkn() {
  let e = R();
  if (e.reported) {
    if (!e.lateReported) ((e.lateReported = !0), Y({ late: !0 }), K(e));
    return;
  }
  ((e.reported = !0), Y({ late: !1 }), K(e));
}
function K(e) {
  if (!w) return;
  let o = pt(),
    r = it(o);
  (ie().mkdirSync(r), nit(o, G(e), { encoding: "utf8", flush: !0 }));
  let c = Vfe().getEntriesByType("mark");
  (nit(
    ut(),
    JSON.stringify(
      {
        metadata: X(e, { late: !1 }) ?? {},
        marks: c.map((u) => ({ name: u.name, startTime: u.startTime })),
        memory: e.memorySnapshots,
        nodeBootMs: v,
        headlessTurn0Marks: F()
      },
      null,
      2
    ),
    { encoding: "utf8", flush: !0 }
  ),
    t("Startup profiling report:"),
    t(G(e)));
}
function pt() {
  return j(Le(), "startup-perf", `${q()}.txt`);
}
function ut() {
  return j(Le(), "startup-perf", `${q()}.json`);
}
function X({ firstEmitPhases: e, startupContext: o }, { late: r }) {
  let p = Vfe().getEntriesByType("mark");
  if (p.length === 0) return null;
  let c = new Map();
  for (let f of p) c.set(f.name, f.startTime);
  let u = c.get("main_after_run"),
    n = {},
    T = 0,
    S = 0;
  for (let [f, [d, m]] of Object.entries(_t)) {
    if (r && e.has(f)) continue;
    let l = c.get(d),
      M = c.get(m);
    if (l !== void 0 && M !== void 0) {
      let O = Math.round(M - l);
      if (((n[`${f}_ms`] = O), T++, !r)) e.add(f);
      if (!ft.has(f) && (u === void 0 || M <= u)) S += O;
    }
  }
  if (r) {
    if (T === 0) return null;
    n.late = !0;
  } else n.late = !1;
  let k = n.total_time_ms;
  if (typeof k === "number") n.gap_unaccounted_ms = Math.max(0, k - S);
  ((n.free_mem_mb = Math.round(H.freemem() / 1048576)),
    (n.load_avg_1m = Math.round((H.loadavg()[0] ?? 0) * 100) / 100),
    (n.checkpoint_count = p.length));
  let E = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (E) n.ccr_session_id = _e(E);
  if (v !== void 0) n.node_boot_ms = v;
  let h = V4t();
  if (h !== void 0 && B !== void 0) n.spawn_to_first_checkpoint_ms = Math.round(B - h);
  return (Object.assign(n, o), n);
}
function Y({ late: e } = { late: !1 }) {
  if (!z || cm()) return;
  let o = X(R(), { late: e });
  if (o === null) return;
  a("tengu_startup_perf", o);
}
export { V4t, Alr, wfi, vfi, q4t, GZo, Vfe, W$e, o9r, s9r, gh, i9r, J0, zZo, go, Mkn };

//# sourceMappingURL=chunk-c57c64b0.js.map
