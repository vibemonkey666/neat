import {
  fileURLToPath as __sourceFilePath_da8382a3dc56975c,
  URL as __sourceFilePath_da8382a3dc56975c_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { is } from "./chunk-2qx8pe6s.js";
import { Wr, LI, Wdr, vee } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { fk } from "./chunk-xc1j8sdj.js";
import { Bei, ytr, wj, Jyn, iA } from "./chunk-ajtyjx88.js";
import { kfi, Dkn, c9r } from "./chunk-4nzy53ma.js";
import { Ae, Ci, of, Jrt } from "./chunk-dvghjmtr.js";
import { Zrr } from "./chunk-rh5ymkjp.js";
function v(e) {
  return LI(e) || Jyn(e?.jwt ?? i.ANTHROPIC_AUTH_TOKEN) || Bei();
}
var H = ["harness", "user", "project", "local", "flag", "managed", "admin_default"],
  q2o = /^claude_proj_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22}$/;
function x7s(e) {
  return e.isSubscriber && m();
}
function Y2o(e, r, a, c, u, _, E) {
  let n = Ae();
  if (!(E?.ignoreEnvOptOut === !0 && y()) && R()) return "";
  let S = `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_da8382a3dc56975c(new __sourceFilePath_da8382a3dc56975c_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}.${e}`,
    N = vee() ?? process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    b = (n === "firstParty" && Ci()) || n === "vertex" ? " cch=00000;" : "",
    T = Zrr(),
    C = T ? ` cc_workload=${T};` : "",
    h = iA(r) && !r.isMainSession ? " cc_is_subagent=true;" : "",
    I =
      a !== void 0 && /^req_[A-Za-z0-9_-]{1,36}$/.test(a) && n === "firstParty" && Ci()
        ? ` cc_prev_req=${a};`
        : "",
    U =
      c !== void 0 &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(c) &&
      n === "firstParty" &&
      Ci()
        ? ` cc_prompt_id=${c};`
        : "",
    D =
      typeof u === "string" && /^[a-z][a-z_]{0,31}$/.test(u) && n === "firstParty" && Ci()
        ? ` cc_turn_origin=${u};`
        : "",
    l = _?.promptIndex,
    f = _?.turnIndex,
    w =
      g(l, 0) && g(f, 1) && n === "firstParty" && Ci()
        ? ` cc_prompt_index=${l}; cc_turn_index=${f};`
        : "",
    s = n === "gateway" ? Wr() : null,
    A = (n === "gateway" || Jrt() !== void 0) && v(s),
    p = s?.url ?? i.ANTHROPIC_BASE_URL,
    x =
      (p !== void 0 && (!URL.canParse(p) || ytr(wj(new URL(p))))) ||
      (s?.hostVerdict !== void 0 && "vouched" in s.hostVerdict),
    k = (n === "gateway" || A) && !x ? ` cc_gateway=${A ? "1" : "env"};` : "",
    o = E?.attributionProject,
    j =
      o !== void 0 && q2o.test(o.taggedId) && L.has(o.source) && m()
        ? ` cc_project=${o.taggedId}; cc_project_src=${o.source};`
        : "",
    O = `x-anthropic-billing-header: cc_version=${S}; cc_entrypoint=${N};${b}${C}${h}${I}${U}${D}${w}${k}${j}`;
  return (t(`attribution header ${O}`), O);
}
var d = "local_projects";
function hZn() {
  if (vee() !== void 0) return !1;
  return (Wdr(d), !0);
}
function P7s() {
  if (vee() === d) Wdr(void 0);
}
var P = "claude-desktop-3p";
function I7s() {
  let e = i.CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS;
  if ((i.unset("CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS"), e === void 0)) return;
  let r = vee();
  if (r !== void 0) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: requests already go out under the name "${r}"`);
    return;
  }
  if (i.CLAUDE_CODE_ENTRYPOINT !== P) {
    t(
      `CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: it is read only when CLAUDE_CODE_ENTRYPOINT is ${P}, not "${i.CLAUDE_CODE_ENTRYPOINT ?? ""}"`
    );
    return;
  }
  if (!kfi(e)) {
    t(
      `CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: "${e}" must be 1 to 32 characters of a-z, 0-9, _ and -, start with a letter and not start with sdk`
    );
    return;
  }
  if (Dkn(e) !== void 0 || c9r(e) || e === d) {
    t(
      `CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: "${e}" is reserved (an entrypoint name, a name beginning with remote, or local_projects)`
    );
    return;
  }
  Wdr(e);
}
function xtt(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(fk));
}
function O7s(e) {
  if (e.isSubscriber) return { apiKey: null, authToken: e.oauthAccessToken ?? null };
  return { apiKey: e.apiKey, authToken: null };
}
function g(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e >= r && e <= 1e7;
}
function y() {
  return Ae() === "firstParty" && of() && !i.ANTHROPIC_UNIX_SOCKET;
}
function m() {
  return y() && !i.CLAUDE_CODE_REMOTE && !R();
}
function R() {
  return is(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER);
}
var L = new Set(H);
export { q2o, x7s, Y2o, hZn, P7s, I7s, xtt, O7s };

//# sourceMappingURL=chunk-2shtjvf4.js.map
