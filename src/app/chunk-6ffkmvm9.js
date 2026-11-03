import {
  fileURLToPath as __filePath_16506a25dfc6a1df,
  URL as __filePath_16506a25dfc6a1df_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { hc, i } from "./chunk-cj37hmns.js";
import { _t } from "./chunk-ewvf3tep.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { II } from "./chunk-8w2npe9a.js";
import { spawn as h } from "child_process";
import { isAbsolute as v } from "path";
import { createInterface as T } from "readline";
var _ = "/root/.local/bin/vitals-emitter-guest",
  w = "vitals-emitter-guest",
  o = 5000,
  l = 1000,
  p = 30000;
async function dCn(e) {
  let { log: n } = e;
  try {
    if (i.CLAUDE_CODE_DISABLE_VITALS_EMITTER || _t())
      return (n("[vitals] kill switch or essential-traffic-only set; guest vitals disabled"), null);
    let t = await y(e);
    if (!t) return null;
    let s = new c(t.binary, t.viaFallback, e);
    return (await s.launch(), s.disabled ? null : s);
  } catch (t) {
    return (n(`[vitals] not started: ${d(t)}`), null);
  }
}
async function y({ binaryResolution: e, log: n }) {
  let t = i.VITALS_EMITTER_BIN;
  if (t && !v(t))
    return (
      n(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${t}); guest vitals disabled`),
      null
    );
  switch (e) {
    case "pinned":
      if (!t)
        return (
          n(
            "[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)"
          ),
          null
        );
      return { binary: t, viaFallback: !1 };
    case "search": {
      let s = t || (await hc(w));
      return s ? { binary: s, viaFallback: !1 } : { binary: _, viaFallback: !0 };
    }
  }
}
class c {
  binary;
  binaryViaFallback;
  options;
  child = null;
  spawnedAt = 0;
  respawnTimer = null;
  nextBackoffMs = l;
  stopping = !1;
  disabled = !1;
  reportedOk = !1;
  reportedUnexpectedExit = !1;
  constructor(e, n, t) {
    this.binary = e;
    this.binaryViaFallback = n;
    this.options = t;
  }
  async stop() {
    if (((this.stopping = !0), this.respawnTimer))
      (clearTimeout(this.respawnTimer), (this.respawnTimer = null));
    let e = this.child;
    if (!e) return;
    let n = new Promise((s) => {
      (e.once("exit", () => s()), e.once("error", () => s()));
    });
    e.kill("SIGTERM");
    let t = setTimeout((s) => s.kill("SIGKILL"), o, e);
    (t.unref(), await Pe(n, 2 * o), clearTimeout(t));
  }
  async launch() {
    let { sessionId: e, apiBaseUrl: n, tokenFilePath: t, log: s } = this.options,
      r;
    try {
      r = h(this.binary, ["--session-id", e, "--api-url", n, "--token-file", t], {
        cwd: void 0,
        env: b(),
        stdio: ["pipe", "ignore", "pipe"],
        windowsHide: !0
      });
    } catch (a) {
      (s(`[vitals] spawn threw: ${d(a)}; guest vitals disabled for this session`),
        (this.disabled = !0));
      return;
    }
    if (
      (II(r.pid),
      (this.child = r),
      (this.spawnedAt = Date.now()),
      r.stdin?.on("error", () => {}),
      r.on("error", (a) => this.onChildGone(r, a)),
      r.on("exit", (a, u) => this.onChildGone(r, null, `exited (code=${a} signal=${u})`)),
      r.on("spawn", () => {
        if ((s(`[vitals] spawned ${this.binary} pid=${r.pid}`), !this.reportedOk))
          ((this.reportedOk = !0), g("ccr_vitals_emitter"));
      }),
      r.stderr)
    )
      T({ input: r.stderr }).on("line", (a) => s(`[vitals] ${a}`));
    await new Promise((a) => {
      (r.once("spawn", () => a()), r.once("error", () => a()));
    });
  }
  onChildGone(e, n, t = `spawn error: ${n?.message}`) {
    if (this.child !== e) return;
    ((this.child = null), e.stdin?.destroy());
    let { log: s } = this.options;
    if (this.stopping) {
      s(`[vitals] emitter stopped (${t})`);
      return;
    }
    if (n) {
      let r = E(n);
      if (r === "EAGAIN" || r === "ENOMEM") {
        (s(`[vitals] transient spawn failure (${r}); respawning`), this.scheduleRespawn());
        return;
      }
      if (((this.disabled = !0), r === "ENOENT" || (r === "EACCES" && this.binaryViaFallback)))
        s(`[vitals] ${this.binary} not found; guest vitals disabled for this session`);
      else
        (s(`[vitals] ${t}; guest vitals disabled for this session`),
          m("ccr_vitals_emitter", "spawn_failed"));
      return;
    }
    if ((s(`[vitals] emitter ${t}`), !this.reportedUnexpectedExit))
      ((this.reportedUnexpectedExit = !0), f("ccr_vitals_emitter", "exited_unexpectedly"));
    if (Date.now() - this.spawnedAt > p) this.nextBackoffMs = l;
    this.scheduleRespawn();
  }
  scheduleRespawn() {
    let e = this.nextBackoffMs;
    ((this.nextBackoffMs = Math.min(e * 2, p)),
      this.options.log(`[vitals] respawning in ${e}ms`),
      (this.respawnTimer = setTimeout(() => {
        ((this.respawnTimer = null), this.launch());
      }, e)),
      this.respawnTimer.unref());
  }
}
function b() {
  let e = {
      USER_TYPE: "external",
      NODE_ENV: "production",
      VITALS_CLI_VERSION: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_16506a25dfc6a1df(
          new __filePath_16506a25dfc6a1df_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
    },
    n = {
      PATH: i.PATH,
      HOME: i.HOME,
      TMPDIR: i.TMPDIR,
      HTTPS_PROXY: i.HTTPS_PROXY,
      https_proxy: i.https_proxy,
      HTTP_PROXY: i.HTTP_PROXY,
      http_proxy: i.http_proxy,
      NO_PROXY: i.NO_PROXY,
      no_proxy: i.no_proxy,
      SSL_CERT_FILE: i.SSL_CERT_FILE
    };
  for (let [t, s] of Object.entries(n)) if (s !== void 0) e[t] = s;
  return e;
}
export { dCn };

//# sourceMappingURL=chunk-6ffkmvm9.js.map
