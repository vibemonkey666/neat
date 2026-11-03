// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { oAt } from "./chunk-adv24f35.js";
import { cn } from "./chunk-4q6qmmwb.js";
var i = 2000,
  f = ["session_ingress_token", "environment_secret", "access_token", "secret", "token"],
  u = new RegExp(`"(${f.join("|")})"\\s*:\\s*"[^"]*"`, "g");
function g(e) {
  return e.replace(u, '"$1":"[REDACTED]"');
}
function Zzo(e) {
  let n = e.replaceAll(
    `
`,
    "\\n"
  );
  if (n.length <= i) return n;
  return n.slice(0, i) + `... (${n.length} chars)`;
}
function gzr(e) {
  let n = typeof e === "string" ? e : _(e),
    r = g(n);
  if (r.length <= i) return r;
  return r.slice(0, i) + `... (${r.length} chars)`;
}
function c_e(e) {
  return `sha12:${cn(typeof e === "string" ? e : `${_(e)}`)}`;
}
function e2o(e) {
  return typeof e === "string" && /^[\w.-]{1,64}$/.test(e) ? e : `<${typeof e}>`;
}
function q7n(e) {
  let n = d(e);
  if (e && typeof e === "object" && "response" in e) {
    let r = e.response,
      o = NU(r?.data);
    if (o) return `${n}: ${o}`;
  }
  return n;
}
function Oh(e, n = Date.now()) {
  if (!e) return;
  let r = Number(e);
  if (Number.isFinite(r) && r >= 0) return r * 1000;
  let o = Date.parse(e);
  if (Number.isFinite(o)) {
    let s = o - n;
    return s > 0 ? s : void 0;
  }
  return;
}
function QP(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if (
    "error" in e &&
    e.error !== null &&
    typeof e.error === "object" &&
    "message" in e.error &&
    typeof e.error.message === "string"
  )
    return e.error.message;
  return;
}
function NU(e) {
  let n = QP(e);
  return n ? fhn(n, "error_message") : void 0;
}
function fhn(e, n) {
  if (oAt(e, 1024)) return e;
  (t(
    `[error-detail] left the service's text (${n}) out of the error shown: it has ${e.length} UTF-16 units and is not one plain line of at most 1,024 units`
  ),
    a("tengu_service_error_detail_not_plain", { length: e.length, source: c(n) }));
  return;
}
function Owt(e) {
  if (!e || typeof e !== "object" || !("error" in e)) return;
  let n = e.error;
  if (!n || typeof n !== "object" || !("details" in n)) return;
  let r = n.details;
  if (r && typeof r === "object" && "error_code" in r && typeof r.error_code === "string")
    return r.error_code;
  return;
}
function Rx(e, n, r, o) {
  if (n) t(n);
  a("tengu_bridge_repl_skipped", { reason: c(e), ...(r !== void 0 && { v2: r }), ...o });
}
export { Zzo, gzr, c_e, e2o, q7n, Oh, QP, NU, fhn, Owt, Rx };

//# sourceMappingURL=chunk-yw4wqxm9.js.map
