import {
  fileURLToPath as __sourceFilePath_f6f7b1399e4057de,
  URL as __sourceFilePath_f6f7b1399e4057de_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q } from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
import { _ } from "./chunk-4kxznmzw.js";
import { Nc } from "./chunk-4nzy53ma.js";
import { Ufn } from "./chunk-07aq7e5p.js";
import { rW } from "./chunk-m25ae09s.js";
function c(e, t) {
  var n,
    o = -1,
    p = e.length;
  while (++o < p) {
    var r = t(e[o]);
    if (r !== void 0) n = n === void 0 ? r : n + r;
  }
  return n;
}
var s = c;
function u(e, t) {
  return e && e.length ? s(e, rW(t, 2)) : 0;
}
var IHe = u;
var YL = 20971520,
  f = "application/vnd.ant.frame-refusal+json";
function Yc() {
  return {
    Accept: `application/json, ${f}`,
    "X-Frame-CP": "go",
    "X-Frame-Surface": "code",
    "X-Frame-Platform": Nc() ? "desktop" : "cli",
    "X-Frame-Client-Version": {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __sourceFilePath_f6f7b1399e4057de(
        new __sourceFilePath_f6f7b1399e4057de_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    "X-Frame-Session-Id": iFo() ?? q()
  };
}
var E = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function iFo() {
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? Ufn();
  return e && E.test(e) ? e : void 0;
}
var m = /^req_[A-Za-z0-9_-]{4,128}$/;
function oAe(e) {
  return e !== void 0 && m.test(e) ? { request_id: e } : {};
}
var L_t = "create_confirmed=1",
  d8n = "anthropic/frameCreateConfirmed",
  pye = /unknown field|not a recognized|not allowlisted/i;
function f$(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let t = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return e.error + t;
    }
    return _(e) ?? "";
  }
  return "";
}
function N_t(e, t) {
  return e.includes(`'${t}'`) || new RegExp(`"${t}"(?!\\??:)`).test(e);
}
function c8n(e, t) {
  let n = f$(e);
  return pye.test(n) && N_t(n, t);
}
var xY = /^[A-Za-z0-9_-]{1,64}$/;
export { IHe, YL, Yc, iFo, oAe, L_t, d8n, pye, f$, N_t, c8n, xY };

//# sourceMappingURL=chunk-9v1g0mex.js.map
