// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { g, m } from "./chunk-brszmkb3.js";
import { jt } from "./chunk-ajtyjx88.js";
import { pS, bR, q5 } from "./chunk-znkwh1rm.js";
import { Fkt } from "./chunk-zf79f62g.js";
import { o, M, T, u, yt } from "./chunk-0bqrj5ah.js";
var a3e = p(() => yt({ name: o().optional() })),
  C = p(() => u({ results: T(a3e()), opt_in_required: M().optional(), message: o().nullish() }));
function cIe(e) {
  return !Array.isArray(e) && e.opt_in_required === !0;
}
class rve extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}
var y = 15000,
  h = "/api/oauth/organizations/:orgUUID/mcp/connectors/search",
  S = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest",
  R = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function l(e, n, r, a) {
  let i = await jt.post(e, n, { auth: "teleport-org", timeout: y, signal: r, credentials: a });
  if (!i.ok)
    throw Error(
      i.reason === "no-auth"
        ? "Not authenticated with a claude.ai account."
        : `connector route unavailable: ${i.reason}`
    );
  if (i.status >= 400) {
    let c = u({ error: u({ type: o(), message: o() }) }).safeParse(i.data);
    throw Error(
      c.success
        ? `connector route ${i.status} ${c.data.error.type}: ${c.data.error.message}`
        : `connector route ${i.status}`
    );
  }
  let s = C().safeParse(i.data);
  if (!s.success) throw Error("malformed connector response");
  if (s.data.opt_in_required)
    return {
      opt_in_required: !0,
      message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this."
    };
  return s.data.results;
}
function _(e) {
  if (pS("allow_connector_suggest")) return;
  let n = bR("allow_connector_suggest"),
    r = e === "search" ? "Connector search" : "Connector lookup";
  throw (
    m(
      e === "search" ? "connector_suggest_search" : "connector_suggest_lookup",
      n === "org_denied"
        ? "policy_denied"
        : n === "unregistered"
          ? "policy_mirror_unregistered"
          : n === "route_missing"
            ? "policy_route_missing"
            : "policy_cache_miss"
    ),
    new rve(
      q5("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`
    )
  );
}
async function g_s(e, n, r) {
  _("search");
  let a = await l(h, { keywords: e, include_custom: !0 }, n, r);
  if (!cIe(a)) g("connector_suggest_search");
  return a;
}
async function h_s(e, n, r) {
  _("lookup");
  let a = await l(S, { uuids: e }, n, r);
  if (!cIe(a)) g("connector_suggest_lookup");
  return a;
}
function WDn(e, n, r) {
  let a = Fkt.peek(r)?.read?.(),
    i = new Set();
  for (let s of n) {
    if (s.type === "disabled") continue;
    let c = s.config,
      f = ("headers" in c ? c.headers?.["X-MCP-Server-ID"] : void 0) ?? a?.[s.name];
    if (f) i.add(f.toLowerCase());
  }
  return e.map((s) => {
    let c = typeof s.installedServerId === "string" ? s.installedServerId : void 0;
    return { ...s, enabledInChat: c !== void 0 && i.has(c.toLowerCase()) };
  });
}
async function y_s(e, n) {
  let r = await l(R, {}, e, n);
  if (!cIe(r)) g("connector_suggest_list");
  return r;
}
function Qdt(e, n) {
  (t(`[connector-suggest] ${e} failed: ${d(n)}`, { level: "error" }),
    m(
      e === "search"
        ? "connector_suggest_search"
        : e === "lookup"
          ? "connector_suggest_lookup"
          : "connector_suggest_list",
      "fetch_failed"
    ));
}
export { a3e, cIe, rve, g_s, h_s, WDn, y_s, Qdt };

//# sourceMappingURL=chunk-g893nfpg.js.map
