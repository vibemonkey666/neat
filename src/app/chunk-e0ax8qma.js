// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { is } from "./chunk-2qx8pe6s.js";
import { b, Wq } from "./chunk-acd8w9vv.js";
import { yie } from "./chunk-fs43t96t.js";
import { Ky, X } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { Bi } from "./chunk-wrtp8qz8.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { _t, ZAt } from "./chunk-ewvf3tep.js";
import { he } from "./chunk-95k4nfdh.js";
import { Nbn } from "./chunk-at88wjsn.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Fn } from "./chunk-dvghjmtr.js";
import { yfe } from "./chunk-d54avynm.js";
import { afe } from "./chunk-7c3thgax.js";
import { Ln, fa, Et, gn, Sv, k, Re, ue } from "./chunk-ajtyjx88.js";
import { aB } from "./chunk-x8k0r295.js";
import { xt, gNe } from "./chunk-qakn3b85.js";
import { xqe } from "./chunk-zf79f62g.js";
import { mr } from "./chunk-spwjh8kb.js";
import { NO } from "./chunk-1p2e13sm.js";
import { zT } from "./chunk-sdz0xp27.js";
import { JUr } from "./chunk-vxpcbg5q.js";
import { qAe, Kye } from "./chunk-stzrz9z3.js";
import { En } from "./chunk-errevp3y.js";
import { Ds } from "./chunk-tdv74tcm.js";
function L() {
  return k("tengu_mcp_url_elicitation", !0);
}
function P() {
  return k("tengu_mcp_legacy_url_elicitation", !0) === !0;
}
var H = "io.modelcontextprotocol/ui",
  K = "text/html;profile=mcp-app";
function _un() {
  return i.CLAUDE_CODE_MCP_APPS_HOST === !0;
}
function V() {
  return {
    roots: { listChanged: !0 },
    elicitation: {},
    ...(_un() && { extensions: { [H]: { mimeTypes: [K] } } })
  };
}
function i3n(e) {
  let { tasks: r, extensions: n, ...s } = e;
  if (n === void 0 || !(JUr in n)) return n === void 0 ? s : { ...s, extensions: n };
  let { [JUr]: A, ...p } = n;
  return Object.keys(p).length > 0 ? { ...s, extensions: p } : s;
}
function bun() {
  let e = V();
  return NO() === "v2" ? q(e) : e;
}
function q(e) {
  if (!zT()) return e;
  return { ...e, extensions: { ...e.extensions, [JUr]: {} } };
}
function Sun() {
  let e = bun();
  if (!L()) return e;
  return { ...e, elicitation: { form: {}, url: {} } };
}
function ZBt(e, { denylisted: r }) {
  return P() &&
    !r &&
    (e.type === void 0 ||
      e.type === "stdio" ||
      e.type === "sse" ||
      e.type === "http" ||
      e.type === "ws") &&
    !gNe(e) &&
    !("bareElicitationCapability" in e && e.bareElicitationCapability === !0)
    ? Sun()
    : bun();
}
function wun() {
  return k("tengu_mcp_stateless_skip_init", !0);
}
function a3n() {
  let e = k("tengu_mcp_discover_projection_prior", "off");
  return e === "legacy_only" || e === "all" ? e : "off";
}
var W = 6144;
function U() {
  let e = a3n();
  if (!wun() && e === "off") return {};
  let r = bun(),
    n = Buffer.from(_(r)).toString("base64");
  if (Buffer.byteLength(n, "ascii") > W)
    return (
      t(
        "[claudeai-mcp] client capabilities header exceeds size limit \u2014 omitting init-projection headers"
      ),
      {}
    );
  return {
    "anthropic-mcp-client-capabilities": n,
    "MCP-Protocol-Version": qAe,
    ...(e !== "off" && { "anthropic-mcp-discover-protocol-version": Kye })
  };
}
var w = 5000,
  F = 3,
  Z = 500,
  J = 3,
  Q = 12000,
  j = new Set([
    "ECONNABORTED",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EAI_AGAIN",
    "ERR_SOCKET_CLOSED",
    "ERR_PROXY_TUNNEL"
  ]),
  ee = new Set([...j, ...aB, "ERR_NETWORK"]);
function B(e) {
  if (!Ht.isAxiosError(e)) return !1;
  let r = e.response?.status;
  if (r !== void 0) return r >= 500 && r < 600;
  return e.code !== void 0 && j.has(e.code);
}
function zNo(e) {
  return xt().claudeAiConfigsFetchTransientFailures.has(e);
}
function KNo() {
  let e = xt(),
    r = e.pendingCrossOrgNotice;
  return ((e.pendingCrossOrgNotice = void 0), r);
}
function u_t() {
  let e = KNo();
  if (!e) return;
  let r = e.level === "error" ? he.red(e.message) : he.yellow(`\u26A0 ${e.message}`);
  process.stderr.write(`${r}
`);
}
function te(e) {
  let r = Object.create(null);
  for (let n of e ?? []) {
    if (n.effective_max_permission === void 0) continue;
    let s = yfe().safeParse(n.effective_max_permission);
    r[n.name] = s.success ? s.data : "blocked";
  }
  return Object.keys(r).length > 0 ? r : void 0;
}
function G(e) {
  try {
    return new URL(e).href.replace(/\/+$/, "");
  } catch {
    return e;
  }
}
function Nde(e) {
  let r = xt();
  if (r.claudeAiConfigsFetch === null) r.claudeAiConfigsFetch = ne(e);
  return r.claudeAiConfigsFetch;
}
async function ne(e) {
  let r = 0,
    n = xt();
  n.pendingCrossOrgNotice = void 0;
  let s = !1,
    A = n.claudeAiConnectorListGeneration,
    p = ++n.claudeAiConnectorListFetchSeq;
  try {
    let c = is(process.env.ENABLE_CLAUDEAI_MCP_SERVERS),
      C = afe();
    if (c || C)
      return (
        t(`[claudeai-mcp] Disabled via ${c ? "env var" : "disableClaudeAiConnectors setting"}`),
        a("tengu_claudeai_mcp_eligibility", {
          state: c ? b("disabled_env_var") : b("disabled_setting")
        }),
        {}
      );
    if (mr("mcpClaudeAi"))
      return (
        t("[claudeai-mcp] Disabled in safe mode"),
        a("tengu_claudeai_mcp_eligibility", { state: b("safe_mode") }),
        {}
      );
    if (!Fn())
      return (
        t("[claudeai-mcp] Disabled on third-party provider"),
        a("tengu_claudeai_mcp_eligibility", { state: b("third_party_provider") }),
        {}
      );
    if (!Et()) {
      if (
        (t("[claudeai-mcp] Disabled: API-key auth precedence active"),
        a("tengu_claudeai_mcp_eligibility", { state: b("api_key_precedence") }),
        Ln()?.scopes?.includes("user:mcp_servers"))
      )
        n.pendingCrossOrgNotice = {
          level: "warn",
          message:
            "claude.ai connectors are disabled because ANTHROPIC_API_KEY or another auth source is set and takes precedence over your claude.ai login \xB7 Unset it to load your organization's connectors"
        };
      return {};
    }
    await fa({ credentials: e });
    let l = Ln();
    if (!l?.accessToken)
      return (
        t("[claudeai-mcp] No access token"),
        a("tengu_claudeai_mcp_eligibility", { state: b("no_oauth_token") }),
        {}
      );
    if (!l.scopes?.includes("user:mcp_servers")) {
      let o = i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE
        ? "[claudeai-mcp] inference token lacks user:mcp_servers scope \u2014 claude.ai org connectors disabled (locally-configured MCP servers in managed-mcp.json / .claude.json / .mcp.json are NOT affected by this check)"
        : `[claudeai-mcp] Missing user:mcp_servers scope (scopes=${l.scopes?.join(",") || "none"})`;
      return (t(o), a("tengu_claudeai_mcp_eligibility", { state: b("missing_scope") }), {});
    }
    let u = `${rn().BASE_API_URL}/v1/mcp_servers?limit=1000`,
      S = `${u}&include_additional_installs=true`;
    t(`[claudeai-mcp] Fetching from ${S}`);
    let I = () =>
        Sv(
          () =>
            Ht.get(S, {
              headers: {
                "User-Agent": Ds(),
                Authorization: `Bearer ${Ln()?.accessToken ?? l.accessToken}`,
                "Content-Type": "application/json",
                "anthropic-beta": Nbn.header,
                "anthropic-version": "2023-06-01",
                ...U()
              },
              timeout: w
            }),
          { credentials: e }
        ),
      z = Date.now(),
      D = 0,
      T;
    while (!0) {
      r++;
      try {
        T = await I();
        break;
      } catch (o) {
        let d = Ht.isAxiosError(o) ? o.response?.status : void 0,
          E = () => {
            if (S === u || d === void 0 || d === 401 || d === 429) return !1;
            if (
              (t(
                `[claudeai-mcp] Connector list request got HTTP ${d}, asking once more without include_additional_installs (a connector's additional accounts will not be listed)`
              ),
              (S = u),
              !B(o))
            )
              D++;
            return !0;
          },
          h = r - D;
        if (h >= F || !B(o)) {
          if (E()) continue;
          throw o;
        }
        let y = Ky({ attempt: h, baseMs: Z, factor: J });
        if (Date.now() - z + y + w >= Q) {
          if ((t(`[claudeai-mcp] Retry budget exhausted after ${r} attempt(s)`), E())) continue;
          throw o;
        }
        let Y = Ht.isAxiosError(o) ? (o.response?.status ?? o.code ?? "unknown") : "unknown";
        (t(`[claudeai-mcp] Transient fetch error (${Y}), retrying in ${y}ms (attempt ${h}/${F})`),
          await X(y));
      }
    }
    let R = new Map(),
      M = [];
    for (let o of T.data.data) {
      if (o.additional_install === !0) {
        M.push(o);
        continue;
      }
      let d = G(o.url),
        E = R.get(d);
      if (E) {
        t(`[claudeai-mcp] Dropping duplicate upstream ${d}: keeping ${E.id}, dropping ${o.id}`);
        continue;
      }
      R.set(d, o);
    }
    let O = {},
      N = new Set([xqe]);
    M.sort(
      (o, d) =>
        (Date.parse(o.created_at) || 0) - (Date.parse(d.created_at) || 0) ||
        (o.id < d.id ? -1 : o.id > d.id ? 1 : 0)
    );
    for (let o of [...R.values(), ...M]) {
      let d = `claude.ai ${o.display_name}`,
        E = d,
        h = En(E),
        y = 1;
      while (N.has(h)) (y++, (E = `${d} (${y})`), (h = En(E)));
      if (y > 1) t(`[claudeai-mcp] Display-name collision: "${E}" (${o.id}, ${o.url})`);
      (N.add(h),
        (O[E] = {
          type: "claudeai-proxy",
          url: o.url,
          id: o.id,
          displayName: o.display_name,
          iconUrl: o.icon_url,
          scope: "claudeai",
          toolPermissions: te(o.tools),
          stateless: o.stateless,
          cachedInitResponse: o.cached_init_response,
          discoverSupport: o.discover_support,
          cachedDiscoverResponse: o.cached_discover_response,
          eligible: o.eligible,
          ineligibleReason: o.eligibility_reason,
          enterpriseManaged: o.enterprise_managed
        }));
    }
    if (
      (t(`[claudeai-mcp] Fetched ${Object.keys(O).length} servers`),
      a("tengu_claudeai_mcp_eligibility", { state: b("eligible") }),
      S === u)
    )
      f("mcp_claudeai_fetch_configs", "fetch_additional_installs_param_refused");
    else g("mcp_claudeai_fetch_configs");
    if (n.claudeAiConnectorListGeneration === A && p > n.claudeAiConnectorListSettledSeq)
      ((n.claudeAiConnectorIdIndex = ie(O, T.data.data, R)),
        (n.claudeAiConnectorListStatus = "settled"),
        (n.claudeAiConnectorListSettledSeq = p),
        (s = !0));
    return O;
  } catch (c) {
    let C = Ht.isAxiosError(c) ? c : void 0,
      l = C?.response?.status,
      v = C?.code,
      u = String(l ?? v ?? "unknown");
    if (
      (t(`[claudeai-mcp] Fetch failed (${u}) after ${r} attempt(s)`),
      a("tengu_claudeai_mcp_eligibility", {
        state: b("fetch_failed"),
        status: Wq(l) ?? yie(v) ?? b("unknown"),
        attempts: r
      }),
      u === "401" || u === "403")
    )
      f("mcp_claudeai_fetch_configs", "fetch_needs_auth");
    else if (u === "429") f("mcp_claudeai_fetch_configs", "fetch_rate_limited");
    else if (u === "ECONNABORTED" || u === "ETIMEDOUT")
      f("mcp_claudeai_fetch_configs", "fetch_timeout");
    else if (/^\d+$/.test(u)) m("mcp_claudeai_fetch_configs", `fetch_failed_http_${u}`);
    else if (u !== "unknown") f("mcp_claudeai_fetch_configs", "fetch_network_error");
    else m("mcp_claudeai_fetch_configs", "fetch_failed");
    n.claudeAiConfigsFetch = null;
    let S =
        C !== void 0 &&
        (l !== void 0 ? (l >= 500 && l < 600) || l === 429 : v !== void 0 && ee.has(v)),
      I = {};
    if (S) n.claudeAiConfigsFetchTransientFailures.add(I);
    return I;
  } finally {
    if (
      !s &&
      n.claudeAiConnectorListGeneration === A &&
      n.claudeAiConnectorListStatus !== "settled"
    )
      n.claudeAiConnectorListStatus = "unavailable";
  }
}
function ie(e, r, n) {
  let s = new Map(),
    A = new Map();
  for (let [p, c] of Object.entries(e)) {
    if (c.type !== "claudeai-proxy") continue;
    let C = { name: p, config: c, siblingIds: [c.id] };
    (A.set(c.id, C), s.set(SHe(c.id), C));
  }
  for (let p of r) {
    let c = SHe(p.id);
    if (s.has(c)) continue;
    let C = n.get(G(p.url)),
      l = C === void 0 ? void 0 : A.get(C.id);
    if (l !== void 0) (l.siblingIds.push(p.id), s.set(c, l));
  }
  return s;
}
function f_t() {
  let e = xt();
  ((e.claudeAiConfigsFetch = null), (e.pendingCrossOrgNotice = void 0));
}
function l3n(e) {
  let r = xt(),
    n = r.claudeAiConnectorIdIndex;
  if (r.claudeAiConnectorListStatus !== "settled" || n === void 0)
    return r.claudeAiConnectorListStatus === "unavailable"
      ? { kind: "unavailable" }
      : { kind: "pending" };
  let s = n.get(SHe(e));
  return s === void 0 ? { kind: "absent" } : { kind: "found", ...s };
}
function d3n() {
  let e = xt();
  if (e.claudeAiConnectorListStatus !== "settled") e.claudeAiConnectorListStatus = "unavailable";
}
function oe() {
  let e = xt();
  ((e.claudeAiConnectorIdIndex = void 0),
    (e.claudeAiConnectorListStatus = "pending"),
    (e.claudeAiConnectorListSettledSeq = 0),
    (e.claudeAiConnectorListGeneration += 1));
}
function e1t(e, r) {
  (xt().claudeAiConnectedThisSession.add(e),
    Re((n) => {
      let s = x(n);
      if (s.includes(e)) return n;
      return { ...n, claudeAiMcpEverConnected: [...s, e] };
    }, r));
}
function vun(e) {
  return xt().claudeAiConnectedThisSession.has(e);
}
function c3n() {
  (xt().claudeAiConnectedThisSession.clear(), oe());
}
function Eun(e) {
  return x(ue()).includes(e);
}
function kun() {
  return new Set(x(ue()));
}
function x(e) {
  return Bi(e.claudeAiMcpEverConnected);
}
function $Q() {
  return `${rn().CLAUDE_AI_ORIGIN}/customize/connectors`;
}
function SHe(e) {
  return typeof e === "string" && e.startsWith("mcprs") ? `mcpsrv${e.slice(5)}` : e;
}
function pU(e) {
  return e.type === "claudeai-proxy" && e.scope === "claudeai" && e.id ? SHe(e.id) : void 0;
}
function $de(e) {
  let r = gn()?.organizationUuid;
  if (!r || !e.id) return null;
  let n = rn().CLAUDE_AI_ORIGIN,
    s = SHe(e.id),
    A = encodeURIComponent(i.CLAUDE_CODE_ENTRYPOINT || "cli");
  return `${n}/api/organizations/${r}/mcp/start-auth/${s}?product_surface=${A}`;
}
export {
  _un,
  i3n,
  bun,
  Sun,
  ZBt,
  wun,
  a3n,
  zNo,
  KNo,
  u_t,
  Nde,
  f_t,
  l3n,
  d3n,
  e1t,
  vun,
  c3n,
  Eun,
  kun,
  $Q,
  SHe,
  pU,
  $de
};

//# sourceMappingURL=chunk-e0ax8qma.js.map
