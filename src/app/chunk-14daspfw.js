// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { vr } from "./chunk-azq9hjy0.js";
import { df } from "./chunk-gjsrpxk2.js";
var s = [
  vr,
  "raw.githubusercontent.com",
  "objects.githubusercontent.com",
  "gist.githubusercontent.com",
  "gitlab.com",
  "bitbucket.org",
  "codeberg.org",
  "dev.azure.com",
  "ssh.dev.azure.com",
  "storage.googleapis.com"
];
function l(t) {
  let e,
    n = /^[^@/]+@([^:/]+):/.exec(t);
  if (n) e = n[1];
  else
    try {
      e = new URL(t).hostname;
    } catch {
      return "unknown";
    }
  let i = e.toLowerCase();
  return s.find((r) => r === i) ?? "other";
}
function m(t) {
  return t.includes(`anthropics/${df}`);
}
function FD(t, e, n, i, r, u, o) {
  a("tengu_plugin_remote_fetch", {
    source: c(t),
    host: c(e ? l(e) : "unknown"),
    is_official: t === "plugin_catalog" || (e ? m(e) : !1),
    outcome: c(n),
    duration_ms: Math.round(i),
    ...(r && { error_kind: c(r) }),
    ...(u !== void 0 ? { is_directory: u } : {}),
    ...(o && {
      submodule_selection: c(o.fetched === "all" ? "all" : "selected"),
      submodules_recorded: o.recorded,
      submodules_fetched: o.fetched === "all" ? o.recorded : o.fetched
    })
  });
}
function kY(t) {
  let e = String(t?.message ?? t);
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(e))
    return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(e)) return "timeout";
  if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(e))
    return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(e)) return "auth";
  if (/404|not found|repository not found/i.test(e)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(e)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(e)) return "invalid_schema";
  return "other";
}
export { FD, kY };

//# sourceMappingURL=chunk-14daspfw.js.map
