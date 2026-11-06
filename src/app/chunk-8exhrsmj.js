import {
  fileURLToPath as __sourceFilePath_f5bfadc1b2dbb6e6,
  URL as __sourceFilePath_f5bfadc1b2dbb6e6_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { _l } from "./chunk-at88wjsn.js";
import { Yd } from "./chunk-ddpw2j06.js";
import { dzr, czr } from "./chunk-ya0dkdy0.js";
import { b2o } from "./chunk-88c2sbvj.js";
import { randomUUID as c } from "crypto";
var p = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  g = 30000,
  u = 25,
  l = 1e4,
  n = 100;
function m() {
  return i.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || g;
}
async function f(e) {
  if (!b2o()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, {
      level: "warn"
    });
    return;
  }
  let r = _(e),
    a = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": czr,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_f5bfadc1b2dbb6e6(
          new __sourceFilePath_f5bfadc1b2dbb6e6_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      "dd-request-id": c()
    });
  try {
    await _l.post(`${p}?${a}`, r, { headers: { "Content-Type": "application/json" }, timeout: l });
  } catch (o) {
    if (Yd(o) && o.response)
      t(`dd-error-tracking: intake responded ${o.response.status} (batch=${e.length})`, {
        level: "warn"
      });
    else t(`dd-error-tracking: intake failed: ${d(o)}`, { level: "warn" });
  }
}
class s {
  reportsEnqueued = 0;
  capSentinelSent = !1;
  cachedUserBucket = void 0;
  sender = dzr({ maxBatchSize: u, getFlushIntervalMs: m, post: f });
}
var E = new W(() => new s());
function dhn() {
  return E.of(U().host);
}
function Kzo() {
  return dhn().reportsEnqueued >= n;
}
function h(e) {
  return {
    ...e,
    message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`,
    error: {
      kind: "ErrorTrackingCapReached",
      message: `per-process cap of ${n} hit`,
      stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
      fingerprint: "cap-reached-sentinel",
      handling: "handled"
    },
    error_frames: void 0
  };
}
function Vzo(e) {
  let r = dhn();
  if (r.reportsEnqueued >= n) return;
  if ((r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent))
    ((r.capSentinelSent = !0),
      t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, {
        level: "warn"
      }),
      r.sender.enqueue(h(e)));
  else r.sender.enqueue(e);
}
async function IRi() {
  await dhn().sender.shutdown();
}
export { dhn, Kzo, Vzo, IRi };

//# sourceMappingURL=chunk-8exhrsmj.js.map
