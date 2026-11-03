// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Rr, d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { co, jl, bw } from "./chunk-ybr49gcx.js";
import { Zt } from "./chunk-d54avynm.js";
import { hD, lu } from "./chunk-egk1yzkg.js";
var a = new Set([
  "INVALID_CONFIG",
  "UNCONFIGURED",
  "AUTH_HEADER_REJECTED",
  "HEADERS_HELPER_AUTH_REJECTED",
  "CLI_OWNED_BEARER_REJECTED",
  "FIRST_PARTY_AUTH_REJECTED",
  "CLAUDEAI_BEARER_REJECTED",
  "ENDPOINT_NOT_FOUND",
  "CONNECT_TIMEOUT",
  "CONNECT_SUSPENDED",
  "CREDENTIAL_STORE_UNAVAILABLE",
  "POLICY_BLOCKED",
  "APPROVAL_REQUIRED",
  "DISABLED",
  "IDENTITY_CHANGED",
  "SHUTTING_DOWN"
]);
function _mr(e) {
  let o = hD(e.name, e.config, { detail: "origin" }),
    n = e.errorCode,
    s = (r) => lu(e.name, e.config, r);
  if (n !== void 0 && a.has(n)) return e.error !== void 0 ? s(e.error) : n;
  if (n) {
    let r = u(n);
    return o ? `${r} at ${o}` : r;
  }
  return e.error !== void 0 ? s(e.error) : "";
}
function u(e) {
  let o = Number(e);
  return e === "23"
    ? "request timed out"
    : Number.isInteger(o) && o >= 100 && o <= 599
      ? `HTTP ${e}`
      : e;
}
function Pus(e) {
  let { errorCode: o, displayDetail: n } = e,
    s = (i) => bw(lu(e.name, e.config, i));
  if (o && !a.has(o)) {
    let i = u(o),
      f = e.error !== void 0 ? `${i}: ${e.error}` : i;
    return s(n ? `${f} ${n}` : f);
  }
  let r = e.error ?? o ?? "",
    c = n ? `${r} ${n}`.trim() : r;
  return c === "" ? c : s(c);
}
function Ext(e, o, n, s) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected)
        return {
          message: `Reconnected to ${co(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
          success: !1
        };
      if (e.client.toolsListError) {
        if (n.persistsOffBox)
          return (
            t(
              `mcp reconnect tools/list failed for ${Zt(o)}: ${lu(o, e.client.config, e.client.toolsListError)}`,
              { level: "error" }
            ),
            {
              message: `Reconnected to ${co(o)}, but fetching tools failed (detail withheld on this connection).`,
              success: !1
            }
          );
        return {
          message: `Reconnected to ${co(o)}, but fetching tools failed: ${jl(lu(o, e.client.config, e.client.toolsListError))}`,
          success: !1
        };
      }
      return { message: `Reconnected to ${co(o)}.`, success: !0 };
    case "needs-auth":
      return {
        message: s?.hasHeadersHelper
          ? `${co(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.`
          : `${co(o)} requires authentication. Use the 'Authenticate' option.`,
        success: !1
      };
    case "failed": {
      let r = _mr(e.client);
      if (n.persistsOffBox) {
        if (r) t(`mcp reconnect failed for ${Zt(o)}: ${r}`, { level: "error" });
        return {
          message: `Failed to reconnect to ${co(o)}${r ? " (detail withheld on this connection)" : ""}.`,
          success: !1
        };
      }
      return {
        message: r
          ? `Failed to reconnect to ${co(o)}: ${jl(r)}`
          : `Failed to reconnect to ${co(o)}.`,
        success: !1
      };
    }
    default:
      return { message: `Unknown result when reconnecting to ${co(o)}.`, success: !1 };
  }
}
function flt(e, o, n) {
  let s = n.config ? lu(o, n.config, d(e)) : d(e);
  if (e instanceof Rr) return jl(d(e), void 0, "none");
  if (n.persistsOffBox)
    return (
      t(`mcp reconnect error for ${Zt(o)}: ${s}`, { level: "error" }),
      `Error reconnecting to ${co(o)} (detail withheld on this connection).`
    );
  return `Error reconnecting to ${co(o)}: ${jl(s)}`;
}
function rUe(e, o, n, s) {
  let r = s.config ? lu(o, s.config, d(e)) : d(e);
  if (e instanceof Rr) return jl(d(e), void 0, "none");
  if (s.persistsOffBox)
    return (
      t(`mcp ${n} failed for ${Zt(o)}: ${r}`, { level: "error" }),
      `Failed to ${n} MCP server "${co(o)}" (detail withheld on this connection).`
    );
  return `Failed to ${n} MCP server "${co(o)}": ${jl(r)}`;
}
export { _mr, Pus, Ext, flt, rUe };

//# sourceMappingURL=chunk-56ys521g.js.map
