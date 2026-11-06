import {
  fileURLToPath as __sourceFilePath_1efb67b9c6e343d2,
  URL as __sourceFilePath_1efb67b9c6e343d2_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { g, f, jr, da } from "./chunk-brszmkb3.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { jh } from "./chunk-d54avynm.js";
import { cr, crr, m4r, Loe, td, cRe } from "./chunk-ajtyjx88.js";
import { xt, tse } from "./chunk-qakn3b85.js";
import { Nde, f_t, $Q, $de } from "./chunk-e0ax8qma.js";
import { cRr, KF, DP, Io } from "./chunk-j0tbz6ra.js";
async function C(e, r, t) {
  if (
    !(e instanceof Error) ||
    !e.message.startsWith("SDK auth failed: ") ||
    !(e.cause instanceof Error)
  )
    return !1;
  let { cause: n } = e,
    i = import.meta
      .require(
        __sourceFilePath_1efb67b9c6e343d2(
          new __sourceFilePath_1efb67b9c6e343d2_URL("./chunk-43z4gqzg.js", import.meta.url)
        )
      )
      .mcpAuthModule()
      .classifySdkAuthFailure(e.message, n);
  if (i !== "dcr_failed" && i !== "dcr_rejected") return !1;
  if (!("status" in n) && !("errorCode" in n))
    return n.message === "Incompatible auth server: does not support dynamic client registration";
  if (!(
    (await Loe())?.[td(r, t)]?.discoveryState?.oauthMetadataFound ??
    t.oauth?.authServerMetadataUrl !== void 0
  ))
    return !1;
  let s =
    "status" in n
      ? n.status
      : Number(/^HTTP (\d{3}): Invalid OAuth error response: /.exec(n.message)?.[1]);
  if (typeof s === "number" && Number.isFinite(s))
    return s >= 400 && s < 500 && s !== 408 && s !== 429;
  switch ("errorCode" in n ? n.errorCode : void 0) {
    case "invalid_client_metadata":
    case "invalid_client":
    case "unauthorized_client":
      return !0;
    default:
      return !1;
  }
}
var S = new Set(["id_jag_with_auto_connect", "auto_connect", "auth_allows_auto_connect"]);
async function Rxn(e, r, t, n) {
  if (!cRr() || (t.type !== "sse" && t.type !== "http") || !(await C(e, r, t))) return;
  let i = xt(),
    o = cRe(r, { ...t, redialToRelearnRegistration: void 0 }, await Loe())
      ? i.claudeAiConfigsFetch
      : null,
    { listed: s, connectorNames: l, connectors: u } = y(o === null ? {} : await o, t),
    a;
  switch (t.scope) {
    case "local":
    case "user":
    case "project":
      a = { kind: "register-app", fixer: "you" };
      break;
    case "enterprise":
    case "managed":
      a = { kind: "register-app", fixer: "administrator" };
      break;
    case "dynamic":
    case "agent":
    case "claudeai":
      a = { kind: "register-app", fixer: jh(t) ? "plugin-author" : "configurer" };
      break;
  }
  let [d] = u;
  if (u.some((p) => p.ineligibleReason === "connected"))
    a = { kind: "connected", connectorNames: l };
  else if (u.some((p) => S.has(p.ineligibleReason ?? ""))) a = { kind: "organization-connects" };
  else if (d !== void 0)
    a = {
      kind: "connect",
      connectorNames: l,
      url: (u.length === 1 && d.ineligibleReason ? $de(d) : null) ?? $Q()
    };
  else if (
    !s &&
    o !== null &&
    i.claudeAiConnectorListSettledSeq === i.claudeAiConnectorListFetchSeq
  ) {
    if (n === "mcp_login" && i.officialUrls === void 0) await crr();
    let p = tse(t);
    if (p !== void 0 && m4r(p))
      switch (cr()) {
        case "pro":
        case "max":
          a = { kind: "connect", url: $Q(), connectorNames: l };
          break;
        case "team":
        case "enterprise":
          a = { kind: "ask-admin" };
          break;
        case null:
          break;
      }
  }
  let h = { advice: c(a.kind), site: c(n) };
  switch (a.kind) {
    case "connected":
    case "connect":
    case "organization-connects":
      await jr("mcp_registration_advice", h);
      break;
    case "ask-admin":
    case "register-app":
      await da("mcp_registration_advice", "no_route_known", h);
      break;
  }
  return a;
}
async function Nds(e, r, { storageV5: t, credentials: n }) {
  let i = xt();
  if (i.claudeAiConnectorListStatus !== "settled") return m("list_unavailable", r);
  let o = i.claudeAiConfigsFetch;
  f_t();
  let { connectorNames: s, connectors: l } = y(await Nde(n), e);
  if (i.claudeAiConnectorListSettledSeq !== i.claudeAiConnectorListFetchSeq)
    return ((i.claudeAiConfigsFetch ??= o), m("list_unavailable", r));
  let u = l.some((d) => d.ineligibleReason === "connected");
  if (!u && l.every((d) => d.eligible === !1)) return m("not_connected", r);
  let a = import.meta
    .require(
      __sourceFilePath_1efb67b9c6e343d2(
        new __sourceFilePath_1efb67b9c6e343d2_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule();
  for (let d of s) await a.removeMcpAuthCacheEntry(d, t);
  return m(u ? "connected" : "state_unknown", r);
}
function J6t(e) {
  switch (e.kind) {
    case "connected":
      return "This service doesn't accept sign-ins from Claude Code. It's already connected through your claude.ai account, and its tools load as a claude.ai connector. If they're missing, restart Claude Code.";
    case "connect":
      return "This service doesn't accept sign-ins from Claude Code. Connect it on claude.ai to use it here.";
    case "organization-connects":
      return "This service doesn't accept sign-ins from Claude Code. Your organization connects it for you on claude.ai. If its tools are missing, ask your admin.";
    case "ask-admin":
      return "This service doesn't accept sign-ins from Claude Code. No claude.ai connector for it is available to you. Your organization's Owner or admin can add one or give you access.";
    case "register-app":
      switch (e.fixer) {
        case "you":
          return "This service doesn't accept sign-ins from Claude Code. To fix that, register an app with the service (redirect URL http://localhost:<port>/callback), then remove this server and add it again with the same options plus --client-id <id>, --callback-port <port> and, if the service issues a secret, --client-secret.";
        case "plugin-author":
          return "This service doesn't accept sign-ins from Claude Code. The plugin's author can fix that by registering an app with the service.";
        case "administrator":
          return "This service doesn't accept sign-ins from Claude Code. Your administrator can fix that by registering an app with the service.";
        case "configurer":
          return "This service doesn't accept sign-ins from Claude Code. Whoever configured this server can fix that by registering an app with the service.";
      }
  }
}
function m(e, r) {
  let t = { waited_ms: Date.now() - r };
  switch (e) {
    case "connected":
    case "not_connected":
      g("mcp_claudeai_handoff", { ...t, outcome: c(e) });
      break;
    case "state_unknown":
    case "list_unavailable":
      f("mcp_claudeai_handoff", e, t);
      break;
  }
  return e;
}
function y(e, r) {
  let t = KF(r),
    n = Ko(e, (o) => t !== null && KF(o) === t),
    i = Ko(DP(n).allowed, (o, s) => !Io(s));
  return {
    listed: Object.keys(n).length > 0,
    connectorNames: Object.keys(i),
    connectors: Object.values(i).flatMap((o) => (o.type === "claudeai-proxy" ? [o] : []))
  };
}
export { Rxn, Nds, J6t };

//# sourceMappingURL=chunk-kgbpprz6.js.map
