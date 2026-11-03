import {
  fileURLToPath as __filePath_faf8e30656b8e410,
  URL as __filePath_faf8e30656b8e410_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { fk } from "./chunk-xc1j8sdj.js";
import { Ae, Ci } from "./chunk-dvghjmtr.js";
import { oy } from "./chunk-at88wjsn.js";
import { ua, Ng, nf, T5, k } from "./chunk-ajtyjx88.js";
import { c_ } from "./chunk-wejdb0zs.js";
import { on, Bzr, Pw } from "./chunk-cr7a2cdd.js";
import { Ce } from "./chunk-a2y39866.js";
var r = Ce(oy(), 1);
var t = "tengu_orford_ness",
  n = "2.1.193";
function l() {
  try {
    return k(t, !1);
  } catch {
    return !1;
  }
}
function _2o() {
  let e = Pw();
  if (!on("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === !1
      ? "blocked_restriction"
      : "blocked_tainted";
  }
  let o = Bzr();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (nf() && !T5(fk)) return "blocked_scopeless_oauth";
  if (ua().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (Ng()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function b2o() {
  let e = _2o();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function g7s() {
  if (process.env.DISABLE_ERROR_REPORTING) return !1;
  if (J()) return !1;
  if (c_()) return !1;
  if (Ae() !== "firstParty" || !Ci()) return !1;
  if (
    !r.gte(
      r.coerce(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_faf8e30656b8e410(
            new __filePath_faf8e30656b8e410_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      )?.version ??
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_faf8e30656b8e410(
            new __filePath_faf8e30656b8e410_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
      n
    )
  )
    return !1;
  if (!b2o()) return !1;
  return l();
}
export { _2o, b2o, g7s };

//# sourceMappingURL=chunk-88c2sbvj.js.map
