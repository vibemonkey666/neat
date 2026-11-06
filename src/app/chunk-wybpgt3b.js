import {
  fileURLToPath as __sourceFilePath_5ec583893896a49c,
  URL as __sourceFilePath_5ec583893896a49c_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, ci, dm, rAn } from "./chunk-wrtp8qz8.js";
import { c_ } from "./chunk-wejdb0zs.js";
import { p } from "./chunk-qmkm2x59.js";
import { AP } from "./chunk-j0tbz6ra.js";
import { yn, Yf } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { oV, HS, VT, YA } from "./chunk-d5zj5299.js";
import { Pl } from "./chunk-xe386mry.js";
import { gt } from "./chunk-wr0p4ndg.js";
import { ql, Bbe } from "./chunk-5rw2zfa0.js";
import { ri } from "./chunk-63a6mqbs.js";
import { pr } from "./chunk-7c3thgax.js";
import { st, Xe, bnr, jf, ba, nd } from "./chunk-ajtyjx88.js";
import { Ks, zz } from "./chunk-znkwh1rm.js";
import { on } from "./chunk-cr7a2cdd.js";
import { ht, cf } from "./chunk-gdcb8skc.js";
import { BXs } from "./chunk-cn4azb2f.js";
import { Dr, jQs } from "./chunk-kc27mwew.js";
import { QOo } from "./chunk-6h7ejyet.js";
import { Gm } from "./chunk-g49hnbqz.js";
import { Idt } from "./chunk-e40v5eqb.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { randomUUID as I } from "crypto";
var m = 6,
  f = 32,
  _ = p(() => u({ text: o().optional() }));
function g(e) {
  let r = _().safeParse(e);
  if (!r.success || r.data.text === void 0) return null;
  let a = c(r.data.text);
  return a.length > 0 ? a : null;
}
function Pio(e, r, a) {
  let s = BXs("footer_indicator_", Xe(r), r);
  for (let n of [e, s])
    if (n !== void 0) {
      let t = c(n);
      if (t.length > 0) return t;
    }
  return g(a);
}
function e_r() {
  let e = Pio(i.CLAUDE_CODE_FOOTER_INDICATOR, st(), nd()?.footer_indicator);
  return e === null ? void 0 : { text: e };
}
function c(e) {
  let r = Yf(yn(e))
    .replace(/[\x00-\x1f\x7f-\x9f]/g, "")
    .trim();
  return gt(re(r, f), m);
}
function tXt(e) {
  return e === ht ? cf : e;
}
var Iio = "interrupt_receipt_v1",
  Oio = "msg_lifecycle_v1",
  y = "request_marker_lists_v1",
  Ihs = "lifecycle_wakeup_source_v1",
  S = "interrupt_cancel_queued_v1",
  A = "interrupt_requeue_taken_v1",
  Mio = "interrupt_send_now_v1",
  Ohs = "task_list_restore_v1",
  Mhs = "task_list_restored_v1";
var Dhs = "mcp_read_resource_v1",
  Hhs = "read_file_as_written_v1",
  Lhs = "mcp_tool_ui_meta_v1",
  t_r = "mcp_call_result_not_for_model_v1";
function qMn(e) {
  return !e.redactsWhatItPersists && !e.isRemoteTransport;
}
var Dio = "ui_surface_v1",
  Nhs = "prompts_screened_v1",
  Hio = "ui_hooked_v1";
function $hs() {
  return [];
}
var Fhs = [Iio, S, Mio, A, Oio, y];
function n_r(e) {
  let r = Bbe(e.manifest.version);
  return { name: e.name, path: e.path, source: e.source, ...(r && { version: r }) };
}
function YMn() {
  try {
    return zz() || Ks("hipaa");
  } catch (e) {
    return (l(e), !0);
  }
}
function nXt() {
  let e = pr(),
    r;
  if (jf()) {
    if (((r = { auto: ba() }), oV())) r.team = HS();
  }
  let a;
  a = import.meta
    .require(
      __sourceFilePath_5ec583893896a49c(
        new __sourceFilePath_5ec583893896a49c_URL("./chunk-x07ar0v0.js", import.meta.url)
      )
    )
    .getUdsMessagingSocketPath();
  let s = q();
  return {
    cwd: Pl() ?? "",
    sessionId: s,
    apiKeySource: bnr(),
    betas: dm(),
    outputStyle: e?.outputStyle ?? AP,
    analyticsDisabled: c_(),
    productFeedbackDisabled: !on("allow_product_feedback"),
    memoryPaths: r,
    scratchpadPath: VT() ? (YA(s) ?? void 0) : void 0,
    originalCwd: YMn() ? void 0 : (ci() ?? void 0),
    messagingSocketPath: a,
    workerEpoch: Gm() ? i.CLAUDE_CODE_WORKER_EPOCH : void 0,
    powerShellPath: O() === "windows" ? QOo() : void 0,
    footerIndicator: e_r()
  };
}
function XMn() {
  let e = nXt();
  return {
    cwd: rAn()?.directory?.path ?? "",
    sessionId: e.sessionId,
    apiKeySource: e.apiKeySource,
    betas: void 0,
    outputStyle: e.outputStyle,
    analyticsDisabled: e.analyticsDisabled,
    productFeedbackDisabled: e.productFeedbackDisabled,
    memoryPaths: void 0,
    scratchpadPath: void 0,
    originalCwd: void 0,
    messagingSocketPath: void 0,
    workerEpoch: e.workerEpoch,
    powerShellPath: void 0,
    footerIndicator: void 0
  };
}
function Pdt(e) {
  let r = new Set(e.mcpClients.map((t) => t.name)),
    a = e.mcpServerErrors.filter((t) => !r.has(t.name)),
    s = e.commands
      .filter((t) => t.userInvocable !== !1 && t.terminalOriented === !0)
      .map((t) => t.name),
    n = {
      type: "system",
      subtype: "init",
      cwd: e.cwd,
      session_id: e.sessionId,
      tools: e.tools.map((t) => tXt(t.name)),
      mcp_servers: e.mcpClients.map((t) => ({
        name: t.name,
        status: Idt(t.type),
        ...(t.source !== void 0 && { source: t.source })
      })),
      model: e.model,
      permissionMode: ql(e.permissionMode),
      slash_commands: e.commands.filter((t) => t.userInvocable !== !1).map((t) => t.name),
      ...(s.length > 0 && { terminal_slash_commands: s }),
      apiKeySource: e.apiKeySource,
      betas: e.betas,
      claude_code_version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_5ec583893896a49c(
          new __sourceFilePath_5ec583893896a49c_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      output_style: e.outputStyle,
      agents: e.agents.map((t) => t.agentType),
      skills: ri(e.skills, "name")
        .filter((t) => t.userInvocable !== !1)
        .map((t) => t.name),
      plugins: e.plugins.map(n_r),
      ...(e.pluginErrors.length > 0 && { plugin_errors: e.pluginErrors.map((t) => ({ ...t })) }),
      ...(e.pluginWarnings.length > 0 && {
        plugin_warnings: e.pluginWarnings.map((t) => ({ ...t }))
      }),
      ...(e.capabilities && { capabilities: [...e.capabilities] }),
      ...(a.length > 0 && { mcp_server_errors: a.map((t) => ({ ...t })) }),
      analytics_disabled: e.analyticsDisabled,
      product_feedback_disabled: e.productFeedbackDisabled,
      uuid: I()
    };
  if (e.memoryPaths) n.memory_paths = { ...e.memoryPaths };
  if (e.scratchpadPath !== void 0) n.scratchpad_path = e.scratchpadPath;
  if (e.originalCwd !== void 0) n.original_cwd = e.originalCwd;
  if (e.additionalDirectories !== void 0) n.additional_directories = [...e.additionalDirectories];
  if (e.workerEpoch !== void 0 && e.workerEpoch >= 1) n.worker_epoch = e.workerEpoch;
  if (e.messagingSocketPath !== void 0) n.messaging_socket_path = e.messagingSocketPath;
  if (
    ((n.fast_mode_state = e.fastModeState),
    (n.fast_mode_disabled_reason = e.fastModeDisabledReason),
    e.footerIndicator)
  )
    n.footer_indicator = { ...e.footerIndicator };
  if (e.effort !== void 0) n.effort = e.effort;
  if (e.perTurnEffortActive !== void 0) n.per_turn_effort_active = e.perTurnEffortActive;
  if (e.viewMode !== void 0) n.view_mode = e.viewMode;
  if (e.powerShellPath !== void 0) n.powershell_path = e.powerShellPath;
  return n;
}
function JMn(e, r) {
  Dr("init_emit_ms", performance.now() - r, r);
  let a = jQs();
  if (a) e.startup_timing = a;
}
export {
  Pio,
  e_r,
  tXt,
  Iio,
  Oio,
  Ihs,
  Mio,
  Ohs,
  Mhs,
  Dhs,
  Hhs,
  Lhs,
  t_r,
  qMn,
  Dio,
  Nhs,
  Hio,
  $hs,
  Fhs,
  n_r,
  YMn,
  nXt,
  XMn,
  Pdt,
  JMn
};

//# sourceMappingURL=chunk-wybpgt3b.js.map
