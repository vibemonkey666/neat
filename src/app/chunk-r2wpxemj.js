import {
  fileURLToPath as __filePath_5606361948bdcc74,
  URL as __filePath_5606361948bdcc74_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ku, ITn } from "./chunk-wrtp8qz8.js";
import {
  sr,
  Dt,
  zu,
  Au,
  hk,
  AAn,
  e5t,
  UYe,
  t5t,
  BYe,
  n5t,
  r5t,
  o5t,
  s5t,
  wFe,
  kW,
  N,
  Er,
  Pss,
  FI,
  Mss,
  Fs
} from "./chunk-fs43t96t.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { Uu, g2 } from "./chunk-4nzy53ma.js";
import { Cf } from "./chunk-v19xty83.js";
import { Lui, Xar, Nui, $ui, lkn, Fui } from "./chunk-qmmh8tq2.js";
import { nni, rni, st, Xe, Zqr, dKt, Mz, Hz, VYo, _H, GEt } from "./chunk-ajtyjx88.js";
import { g7s } from "./chunk-88c2sbvj.js";
import { dhn, Kzo, Vzo } from "./chunk-8exhrsmj.js";
import { xbe, Ot } from "./chunk-ya7n419k.js";
import { createHash as R } from "crypto";
import { release as F } from "os";
var I = "claude-code-error-tracking";
function k(e) {
  return e
    ? {
        version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_5606361948bdcc74(new __filePath_5606361948bdcc74_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}_${e}`,
        sourcemapGroup: e
      }
    : {
        version: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_5606361948bdcc74(
            new __filePath_5606361948bdcc74_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        sourcemapGroup: "none"
      };
}
var D = 30;
function v() {
  let e = dhn();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = _H(),
    o = R("sha256").update(r).digest("hex");
  return ((e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % D), e.cachedUserBucket);
}
function b(e, r) {
  let o = r
    .slice(0, 3)
    .map((n) =>
      $ui(n)
        ? `${n.function ?? "?"}@${n.file}:${n.line ?? "?"}:${n.column ?? "?"}`
        : `${n.function ?? "?"}@${Lui(n.file)}`
    )
    .join("|");
  return R("sha256")
    .update(
      `${e}
${o}`
    )
    .digest("hex")
    .slice(0, 16);
}
var M = new Set(xbe);
function P() {
  try {
    let e = st();
    if (!e) return;
    let r = Xe(Ot(e), { identity: !0 });
    return M.has(r) ? r : "other";
  } catch {
    return;
  }
}
var U = 50;
function x() {
  try {
    let e = Hz(),
      r = VYo(),
      o = {},
      n = 0;
    for (let [t, s] of Object.entries(e))
      if (typeof s === "boolean" && r.has(t)) {
        if (((o[t] = s), ++n >= U)) break;
      }
    return o;
  } catch {
    return {};
  }
}
function L(e) {
  let r = e.issues;
  if (!Array.isArray(r) || r.length === 0) return;
  let o = r.map((n) => n?.code).filter((n) => typeof n === "string" && /^[a-z_]{1,40}$/.test(n));
  return `${r.length} issue(s): ${o.join(",")}`;
}
function B() {}
var w = !B.name.startsWith("errorTrackingIdentifierProbe"),
  j = [
    ["APIUserAbortError", zu],
    ["APIConnectionTimeoutError", hk],
    ["APIConnectionError", Au],
    ["BadRequestError", e5t],
    ["AuthenticationError", UYe],
    ["PermissionDeniedError", t5t],
    ["NotFoundError", BYe],
    ["ConflictError", n5t],
    ["UnprocessableEntityError", r5t],
    ["RateLimitError", o5t],
    ["InternalServerError", s5t],
    ["APIError", Dt],
    ["RetryableError", AAn],
    ["WorkloadIdentityError", Cf],
    ["AnthropicError", sr],
    ["ClaudeError", wFe]
  ],
  S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function wOo(e, r = w) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0,
    n = r && e instanceof wFe && e.name === o,
    c = (
      (typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) ||
      (!r && FI(o) !== void 0 ? o : j.find(([, a]) => e instanceof a)?.[0]) ||
      "Error"
    ).replace(S, "");
  return FI(c) ?? "Error";
}
var G = 20;
function K(e, r, o) {
  let n = lkn(e),
    t = Nui(n),
    s = n.slice(0, G),
    c = kW(e),
    a =
      t && c === void 0
        ? `thrown outside the Claude Code bundle (${o})`
        : rni(nni(e, c ?? L(e) ?? e.message ?? String(e))),
    A = Fui({ name: o, message: a }, s),
    { version: l, sourcemapGroup: C } = k(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_5606361948bdcc74(
          new __filePath_5606361948bdcc74_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.DD_SOURCEMAP_GROUP
    ),
    T = b(o, s),
    E = v(),
    u = P(),
    y = typeof Bun < "u" && !0,
    m = Er(e),
    p = Pss(e),
    f = i.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : (Uu() ?? "other"),
    d = Mz(),
    g = ITn(),
    _ = Zqr(),
    h = X(F());
  return {
    ddtags: [
      `service:${I}`,
      "team:claude-code",
      `version:${l}`,
      "env:external",
      `origin:${r}`,
      `platform:${O()}`,
      `os_release:${h}`,
      `user_bucket:${E}`,
      `entrypoint:${f}`,
      `node_version:${process.versions.node}`,
      "bun_version:1.4.4",
      `is_native_runtime:${y}`,
      ...(u ? [`model:${u}`] : []),
      ...(m ? [`error_code:${m}`] : []),
      ...(p !== void 0 ? [`child_exit_status:${p}`] : []),
      ...(d ? [`session_kind:${d}`] : []),
      ...(d ? [`has_attacher:${ku() ? "1" : "0"}`] : []),
      ...(g ? [`renderer_mode:${g}`] : []),
      ...(_ ? [`remote_control_lane:${_}`] : []),
      ...(dKt() ? ["projects_session:1"] : [])
    ].join(","),
    service: I,
    hostname: "claude-code",
    status: "error",
    message: `${o}: ${a}`.slice(0, 4000),
    timestamp: new Date().toISOString(),
    error: {
      kind: o,
      message: a.slice(0, 4000),
      stack: A.slice(0, 16000),
      fingerprint: T,
      handling: r === "logError" ? "handled" : "unhandled"
    },
    version: l,
    sourcemap_group: C,
    env: "external",
    user_bucket: E,
    origin: r,
    host_platform: O(),
    host_os_release: h,
    host_name_redacted: GEt().slice(0, 12),
    entrypoint: f,
    node_version: process.versions.node,
    bun_version: "1.4.4",
    ...(u && { model: u }),
    error_frames: s,
    feature_flags: x()
  };
}
var V = new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]),
  W = [{ messagePrefix: "File does not exist", topFrameIncludes: "FileReadTool.ts" }],
  z = [
    { topFile: "node:net", topFunction: "internalConnectMultipleTimeout" },
    { topFile: "node:_http_server", topFunction: "#onClose" }
  ];
function H(e) {
  let r = lkn(e, 20),
    o = r[0];
  if (!o || r.some(Xar)) return !1;
  return z.some((n) => o.file === n.topFile && o.function === n.topFunction);
}
function Y() {
  return (
    i.CLAUDE_CODE_REMOTE === !0 ||
    Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) ||
    Boolean(i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE)
  );
}
function q(e, r) {
  if (V.has(r)) return !0;
  if (
    g2() &&
    !Y() &&
    Fs(e) &&
    e.code !== void 0 &&
    Mss.has(e.code) &&
    (e.syscall === "mkdir" || e.syscall === "open") &&
    O() !== "windows"
  )
    return !0;
  let o = e.message ?? "";
  return W.some(
    (n) =>
      o.startsWith(n.messagePrefix) &&
      (
        e.stack
          ?.split(
            `
`
          )
          .find((t) => t.trim().startsWith("at ")) ?? ""
      ).includes(n.topFrameIncludes)
  );
}
function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function sGe(e, r = "logError") {
  if (!g7s()) return;
  try {
    let o = N(e),
      n = wOo(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) return;
    if (Kzo()) return;
    let t = K(o, r, n);
    Vzo(t);
  } catch {}
}
export { wOo, sGe };

//# sourceMappingURL=chunk-r2wpxemj.js.map
