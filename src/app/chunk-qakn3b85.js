// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { L, U, nAn } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { iYe } from "./chunk-xc1j8sdj.js";
import { JSe } from "./chunk-c3npf81n.js";
import { rr } from "./chunk-ak0cmk10.js";
import { hd } from "./chunk-zem4yd4w.js";
import { wkt, Td, nse } from "./chunk-exz0w70z.js";
import { Mrt, oB, ZSn, z5, Drt } from "./chunk-zf79f62g.js";
import { Jvn, u$e } from "./chunk-gg53p5cf.js";
import { za } from "./chunk-j4601ec1.js";
import { Yi } from "./chunk-yvs3tmdx.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { cC } from "./chunk-928ws1pg.js";
import { ve } from "./chunk-vk5p9xv3.js";
class q {
  reconnect = null;
  toggle = null;
  isDisabled = null;
  dialBlockCause = null;
  policyColdStartWaiter = null;
  skippedDynamicServers = [];
  subagentBroughtOwnArtifactsServer = !1;
  cliOwnedConfigs = new WeakSet();
  cliOwnedFirstPartyServerIds = new WeakMap();
  cliOwnedFileUploadSwitches = new WeakMap();
  cliOwnedBearerProviders = new WeakMap();
  cliOwnedAsyncBearerProviders = new WeakMap();
  cliOwnedResponseObservers = new WeakMap();
  cliOwnedRequestHeaderProviders = new WeakMap();
  cliOwnedBeforeRequestHooks = new WeakMap();
  cliOwnedCredentialRequestHeaders = new WeakMap();
  cliOwnedWithheldBearerRefusals = new WeakMap();
  cliOwnedResendDeciders = new WeakMap();
  ccrInjectedConfigs = new WeakSet();
  ccrMetaEntries = new WeakSet();
  ownToolContainerConfigs = new WeakSet();
  ownReplyServerConfigs = new WeakSet();
  clientAuthProviders = new WeakMap();
  clientFirstPartyBearers = new WeakMap();
  clientTasksDeclaredBeforeServerList = new WeakMap();
  firstToolsListReports = new WeakMap();
  toolsListAhead = new WeakMap();
  stepUpReauthFlights = new Map();
  stepUpReauthExhausted = new Map();
  identityEpoch = 0;
  identityBaseline = void 0;
  identitySeedAttempted = !1;
  identityChangedThisProcess = !1;
  identityTrippedHandler = null;
  identityTripUnowned = !1;
  headlessMcpTeardown = null;
  headlessConnectorMountInFlight = void 0;
  transientRetryPasses = new Map();
  awaitsNextTurnRedial = null;
  authCacheRead = null;
  authCacheWriteChain = Promise.resolve();
  discoverVerdictsRead = null;
  discoverVerdictsWriteChain = Promise.resolve();
  firstPartyDesignConsentAsks = new Map();
  claudeAiConfigsFetch = null;
  claudeAiConnectorIdIndex = void 0;
  claudeAiConnectorListStatus = "pending";
  claudeAiConnectorListGeneration = 0;
  claudeAiConnectorListFetchSeq = 0;
  claudeAiConnectorListSettledSeq = 0;
  claudeAiConfigsFetchTransientFailures = new WeakSet();
  pendingCrossOrgNotice = void 0;
  claudeAiConnectedThisSession = new Set();
  needsAuthNoticedThisSession = new Set();
  pendingScopeExpansionNotice = void 0;
  scopeExpansionDisclosed = !1;
  officialUrls = void 0;
  vscodeClient = null;
  stopVscodePolicyGatesRefresh = null;
  notificationErrorHookedClients = new WeakSet();
  toolRefreshSequences = new WeakMap();
  droppedToolsSeqByConnection = new WeakMap();
  toolsListErrorByResult = new WeakMap();
  discoveryFetchErrors = new WeakMap();
  rawToolsByResult = new WeakMap();
  rawCommandsByResult = new WeakMap();
  rawResourcesByResult = new WeakMap();
  rawFetchedAtByResult = new WeakMap();
  persistedDiscoveryRounds = new WeakSet();
  listChangedRefetchHandlers = new WeakMap();
  burnedListingDiscoverPriors = new Set();
  skillsFunnelSeen = new Set();
  skillsFetcher = null;
  discoveryCacheStore = null;
  connectionCache = null;
  cachedFirstDialArmsRan = new WeakSet();
  supersededDials = new WeakSet();
  swrRefreshDialsInFlight = new WeakSet();
  reauthDecisionSinkForTest = void 0;
  holdStaleReauthEntryForTest = !1;
  stdioProbeTimeoutMsForTest = void 0;
  oauthCallbackListeners = new Map();
  oauthCallbackSubmitters = new Map();
  activeOAuthFlows = new Map();
  authLost = De();
  reauthReconnect = De();
  cachedAdopt = De();
  cachedDialFailed = De();
}
var ue = new W(() => new q());
function xt() {
  return ue.of(U().host);
}
function wor(e) {
  return xt().clientAuthProviders.has(Yi(e.client));
}
function mZ(e, r) {
  let n = xt();
  if ((n.cliOwnedConfigs.add(e), r?.firstPartyServer !== void 0))
    (n.cliOwnedFirstPartyServerIds.set(e, r.firstPartyServer.id),
      n.cliOwnedFileUploadSwitches.set(e, r.firstPartyServer.allowsFileUpload));
  if (r?.getBearerToken) n.cliOwnedBearerProviders.set(e, r.getBearerToken);
  if (r?.resolveBearerToken) n.cliOwnedAsyncBearerProviders.set(e, r.resolveBearerToken);
  if (r?.onResponse) n.cliOwnedResponseObservers.set(e, r.onResponse);
  if (r?.requestHeaders) n.cliOwnedRequestHeaderProviders.set(e, r.requestHeaders);
  if (r?.beforeRequest) n.cliOwnedBeforeRequestHooks.set(e, r.beforeRequest);
  if (r?.credentialRequestHeaders)
    n.cliOwnedCredentialRequestHeaders.set(
      e,
      new Set(r.credentialRequestHeaders.map((t) => t.toLowerCase()))
    );
  if (r?.resendAfter) n.cliOwnedResendDeciders.set(e, r.resendAfter);
  if (r?.withheldBearerRefusal !== void 0)
    n.cliOwnedWithheldBearerRefusals.set(e, r.withheldBearerRefusal);
  return e;
}
function vor(e) {
  return typeof e === "object" && e !== null ? xt().cliOwnedWithheldBearerRefusals.get(e) : void 0;
}
function Vd(e) {
  return typeof e === "object" && e !== null && xt().cliOwnedConfigs.has(e);
}
function brt(e) {
  return typeof e === "object" && e !== null ? xt().cliOwnedFirstPartyServerIds.get(e) : void 0;
}
function cii(e) {
  if (typeof e !== "object" || e === null) return !0;
  let r = xt().cliOwnedFileUploadSwitches.get(e);
  if (r === void 0) return brt(e) === void 0;
  return r();
}
function _qe(e) {
  if (typeof e !== "object" || e === null) return !1;
  let r = xt();
  return r.cliOwnedBearerProviders.has(e) || r.cliOwnedAsyncBearerProviders.has(e);
}
function pe(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = xt().cliOwnedBearerProviders.get(e);
  if (!r) return null;
  try {
    return r() || null;
  } catch {
    return null;
  }
}
async function Eor(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = xt().cliOwnedAsyncBearerProviders.get(e);
  if (!r) return pe(e);
  try {
    return (await r()) || null;
  } catch {
    return null;
  }
}
async function kor(e, r) {
  if (typeof e !== "object" || e === null) return;
  try {
    await xt().cliOwnedBeforeRequestHooks.get(e)?.(r);
  } catch {}
}
function Tor(e, r) {
  if (typeof e !== "object" || e === null) return {};
  let n = xt().cliOwnedRequestHeaderProviders.get(e);
  if (!n) return {};
  try {
    return n(r);
  } catch {
    return {};
  }
}
function kVt(e, r) {
  return (
    typeof e === "object" &&
    e !== null &&
    (xt().cliOwnedCredentialRequestHeaders.get(e)?.has(r.toLowerCase()) ?? !1)
  );
}
async function TVt(e, r, n) {
  if (typeof e !== "object" || e === null) return !1;
  try {
    let t = xt().cliOwnedResendDeciders.get(e);
    return t === void 0 ? !1 : await t({ status: r.status, headers: r.headers }, n);
  } catch {
    return !1;
  }
}
function Aor(e, r) {
  if (typeof e !== "object" || e === null) return;
  let n = xt().cliOwnedResponseObservers.get(e);
  if (!n) return;
  try {
    n({
      method: r.method,
      status: r.status,
      headers: r.headers,
      requestHeaders: r.requestHeaders,
      bearerFingerprint: r.bearerFingerprint
    });
  } catch {}
}
import { posix as g } from "path";
var S = (e) => JSON.stringify(e);
var V = new Set(["api.anthropic.com", "api-staging.anthropic.com"]),
  fe = new Set([...V, ...iYe.map((e) => new URL(e).hostname)]);
function V6o(e) {
  return V.has(e);
}
function dii(e) {
  let r = dbe();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected"
      ? { code: r.code, reason: r.reason }
      : {
          code: "view_mismatch",
          reason: "the eager argv scan sees a --sdk-url value commander did not bind"
        };
  }
  if (r.status === "rejected") return { code: r.code, reason: r.reason };
  if (r.status === "absent" || r.url !== e)
    return {
      code: "view_mismatch",
      reason: "the --sdk-url value commander bound disagrees with the eager argv scan"
    };
  return null;
}
function ykt(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return { code: "unparseable", reason: `could not parse ${S(e)} as a URL` };
  }
  if (fe.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:")
      return {
        code: "bad_scheme",
        reason: `scheme ${S(r.protocol)} is not permitted for host ${S(r.hostname)}; only wss:// and https:// are accepted`
      };
    return null;
  }
  return {
    code: "not_allowlisted",
    reason: `host ${S(r.hostname)} is not an approved Anthropic endpoint`
  };
}
function dbe() {
  let e = nAn();
  if (e !== void 0) return { status: "ok", url: e };
  let r = JSe("--sdk-url"),
    n = r.filter(Boolean).at(-1);
  if (!n) return { status: "absent" };
  if (new Set(r).size > 1)
    return { status: "rejected", code: "conflicting", reason: "conflicting --sdk-url occurrences" };
  let t = ykt(n);
  if (t) return { status: "rejected", ...t };
  return { status: "ok", url: n };
}
function pNe(e) {
  if (e.protocol === "wss:") e.protocol = "https:";
  else if (e.protocol === "ws:") e.protocol = "http:";
  return e;
}
var $h = "remote-browser",
  M = "972fb542-4a76-509d-9058-f6b954ee456c",
  SSn = [
    "browser_click",
    "browser_close_file_chooser",
    "browser_close_window",
    "browser_drag",
    "browser_drag_to_offset",
    "browser_file_upload",
    "browser_fill_form",
    "browser_handle_dialog",
    "browser_hover",
    "browser_list_downloads",
    "browser_navigate",
    "browser_navigate_back",
    "browser_open_window",
    "browser_press_and_hold",
    "browser_press_key",
    "browser_resize",
    "browser_save_download",
    "browser_select_option",
    "browser_snapshot",
    "browser_tabs",
    "browser_take_screenshot",
    "browser_type",
    "browser_wait_for"
  ],
  q6o = "tengu_recursive_puddle",
  C = null,
  b = ve({ on: !1 }, (e) => {
    e.on = !1;
  }),
  z = ve({ allowed: !1 }, (e) => {
    e.allowed = !1;
  });
function uii(e) {
  let r = C;
  return ((C = e), (b.on = !1), r);
}
function wSn() {
  let e = C?.(q6o, !1) === !0;
  if (e) b.on = !0;
  return e;
}
function y() {
  return z.allowed;
}
function bqe() {
  return wSn() || b.on || z.allowed;
}
var f = [
    "/v2/session_ingress/shttp/mcp/",
    "/v2/session_ingress/mcp/ws/",
    "/v2/ccr-sessions/",
    "/v1/code/"
  ],
  fii = "spent";
function Y6o() {
  return hd.bridgeCarrier
    ? [
        "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
        "SESSION_INGRESS_URL",
        "CLAUDE_CODE_BRIDGE_PROMPT_SHA256"
      ]
    : [];
}
function Gf(e) {
  let r = hd.atStartup;
  if (!r) return !1;
  let n, t;
  try {
    ((n = new URL(e)), (t = new URL(r)));
  } catch {
    return !1;
  }
  if (
    (n.protocol === "wss:"
      ? `https://${n.host}`
      : n.protocol === "ws:"
        ? `http://${n.host}`
        : n.origin) !== t.origin
  )
    return !1;
  return f.some((o) => n.pathname.includes(o));
}
function mNe(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return !1;
  if (!Gf(r.url)) return !1;
  switch (hd.bridgeCarrier) {
    case void 0:
      return !0;
    case "child":
      return "scope" in r && r.scope === "dynamic" && e === Td;
    case "descendant":
      return !1;
  }
}
function me(e, r) {
  let n = p(e, r);
  if (!n) return !1;
  if (n.pathname === wkt) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return f.some((s) => n.pathname.includes(s)) && t.length === 1 && t[0] === nse;
}
function pii(e) {
  let r = wrt();
  if (r === null) return !1;
  let n = p(e, r);
  if (!n) return !1;
  let t = cbe.exec(n.pathname)?.[1];
  if (t === void 0) return !1;
  if (!hd.ownCcrSessionIds.some((d) => rr(d) === rr(t))) return !1;
  let s = [...n.searchParams.keys()],
    o = n.searchParams.getAll("toolbox_mcp_server_id"),
    i = n.searchParams.get("mcp_server_id"),
    a = n.searchParams.get("mcp_url");
  return (
    new Set(s).size === s.length &&
    s.every((d) => xor.includes(d)) &&
    o.length === 1 &&
    o[0] === Drt &&
    (i === null || ee().has(i)) &&
    (a === null || p(a, r) !== null)
  );
}
function mii(e) {
  if (!Gf(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  let n = [
    ...r.searchParams.getAll("mcp_server_id"),
    ...r.searchParams.getAll("toolbox_mcp_server_id")
  ];
  if (n.length === 0) return !1;
  let t;
  try {
    t = decodeURIComponent(r.pathname);
  } catch {
    return !0;
  }
  let s = g.normalize(t),
    o;
  for (let c of [cbe, _, k, T])
    if (((o = c.exec(r.pathname)?.[1] ?? c.exec(s)?.[1]), o !== void 0)) break;
  if (
    o === void 0 &&
    [
      "/v2/ccr-sessions/",
      "/v1/code/sessions/",
      "/v2/session_ingress/shttp/mcp/",
      "/v2/session_ingress/mcp/ws/"
    ].some((c) => r.pathname.includes(c) || t.includes(c) || s.includes(c))
  )
    return !0;
  if (o === ie && hd.ownCcrSessionIds.length === 0) return !0;
  let a = ee(),
    d = o === void 0 ? [] : re(rr(o));
  return n.some((c) => a.has(c) || d.includes(c) || c.toLowerCase() === za);
}
function ee() {
  let e = new Set([Drt]);
  for (let r of hd.ownCcrSessionIds) for (let n of re(rr(r))) e.add(n);
  return e;
}
function re(e) {
  return x(e, za);
}
function x(e, r) {
  return [`cse_${e}`, `session_${e}`].map((n) => z5(n, r));
}
var ge = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/memory\/mcp$/;
function Cor(e, r) {
  if (
    e !== oB ||
    r.scope !== "dynamic" ||
    Vd(r) ||
    !("url" in r) ||
    typeof r.url !== "string" ||
    !Gf(r.url)
  )
    return !1;
  let n;
  try {
    n = new URL(r.url);
  } catch {
    return !1;
  }
  if (n.username !== "" || n.password !== "" || n.hash !== "") return !1;
  if (ge.test(n.pathname)) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return cbe.test(n.pathname) && t.length === 1 && t[0] === ZSn;
}
function gii(e) {
  if (!("url" in e) || typeof e.url !== "string" || Vd(e)) return !1;
  let r = "headers" in e ? e.headers : void 0,
    n = Object.entries(typeof r === "object" && r !== null ? r : {}),
    t = n.flatMap(([s, o]) =>
      u(s) === "xmcpserverid" && typeof o === "string" && o.trim() !== "" ? [o.trim()] : []
    );
  if ("headersHelper" in e && e.headersHelper) return Gf(e.url);
  return we(
    e.url,
    t,
    n.flat().filter((s) => typeof s === "string")
  );
}
function he(e) {
  return [
    ZSn,
    ...e.flatMap((r) => {
      let n = rr(r);
      return [`cse_${n}`, `session_${n}`].map((t) => z5(t, oB));
    })
  ].map(u);
}
function v(e, r, { orItsName: n = !0 } = {}) {
  if (n && m(e).some((s) => s.replace(ye, "") === oB)) return !0;
  let t = e;
  for (let s = 0; s <= 3; s++) {
    if (ne(t, r)) return !0;
    let o = se(t);
    if (s === 3 && o !== t) return !0;
    t = o;
  }
  return !1;
}
function ne(e, r) {
  let n = [e, e.replace(/%[0-9a-f]{2}/gi, "")].map(u);
  return r.some((t) => n.some((s) => s.includes(t)));
}
var Y = /[\\\p{Cc}]/u,
  te = /[%?#\\\s\p{Cc}]/u,
  G = /^(?:https?|wss?):\/\/(?:[^/?#\\]*@)?[^/?#\\@:]+(?::[^/?#\\@]*)?(?=[/?#\\]|$)/i;
function u(e) {
  return e.toLowerCase().replace(/[^0-9a-z]/g, "");
}
function we(e, r = [], n = r) {
  if (!Gf(e)) return !1;
  if (e.length > 32768) return !0;
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  if ([e, ...r].some((l) => l.includes("${"))) return !0;
  if (Me(t.pathname)) return !0;
  let s = [
    ...[...t.searchParams].flat(),
    ...[t.hash, t.username, t.password].filter((l) => l !== ""),
    ...n
  ];
  if (s.length > 64 || t.pathname.length + s.join("").length > 8192) return !0;
  let o = L(s.flatMap(m));
  if (o.some((l) => A(l, Re)) || O(t, ["mcp_url"]).some((l) => Se(l, t.hostname))) return !0;
  let i = O(t, ["mcp_server_id", "toolbox_mcp_server_id"]),
    a = [t.pathname, g.normalize(t.pathname)],
    d = h(k, a) ?? h(T, a),
    c = h(cbe, a) ?? h(_, a) ?? d,
    { ownCcrSessionIds: D } = hd,
    j = L(
      [...a, ...o].flatMap((l) =>
        P.flatMap((R) => {
          let H = l.indexOf(R),
            N = H === -1 ? void 0 : /^[A-Za-z0-9_-]+(?=[/?#&;]|$)/.exec(l.slice(H + R.length))?.[0];
          return N === void 0 ? [] : [N];
        })
      )
    );
  if (j.length > 8) return !0;
  let w = he(L([...D, ...(c === void 0 ? [] : [c]), ...j]));
  if ([...o, ...m(t.pathname + t.search + t.hash)].some((l) => ne(l, w))) return !0;
  if (
    [...r, ...(d === void 0 ? [] : [d])].some((l) => v(l, w)) ||
    t.pathname.split("/").some((l) => v(l, w, { orItsName: !1 }))
  )
    return !0;
  let F = c === ie && D.length === 0;
  if (r.length > 0 && F) return !0;
  if (i.length === 0) return !1;
  if (c === void 0 ? P.some((l) => a.some((R) => R.includes(l))) : F) return !0;
  return i.some((l) => v(l, w));
}
function O(e, r) {
  let n = r.map(u);
  return [...e.searchParams].filter(([t]) => m(t).some((s) => n.includes(u(s)))).map(([, t]) => t);
}
function h(e, r) {
  for (let n of r) {
    let t = e.exec(n)?.[1];
    if (t !== void 0) return t;
  }
  return;
}
var AVt = ["/v2/ccr-sessions/", "/v1/code/sessions/"],
  P = [...AVt, "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"],
  Re = [...P, "/v1/code/local/", "/v1/code/mcp/"];
function Se(e, r) {
  return !be(e, r) && (te.test(e) || A(e, f));
}
function m(e) {
  let r = [e],
    n = [e];
  for (let t = 1; t <= 3; t++)
    ((n = L(
      n.flatMap((s) => [K(s), K(s.replace(_e, (o, i, a) => (o.length === 3 ? o : `	%${i}${a}	`)))])
    )),
      r.push(...n));
  return L(r);
}
var ye = /[\s\p{Cc}\ufffd+]/gu,
  _e = /%[\s\p{Cc}\ufffd+]*([0-9a-f])[\s\p{Cc}\ufffd+]*([0-9a-f])/giu;
function K(e) {
  return e.replace(/(?:%[0-9a-f]{2})+/gi, (r) =>
    new TextDecoder().decode(Uint8Array.from(r.slice(1).split("%"), (n) => parseInt(n, 16)))
  );
}
function A(e, r) {
  let n = Z(e);
  return r.some((t) => {
    let s = Z(t).filter((o) => o !== "");
    return [
      [...s, "memory", "mcp"],
      [...s, "mcp", "memory"],
      ...(s.includes("mcp") ? [[...s, "memory"]] : [])
    ].some((o) => Ce(n, o));
  });
}
function Z(e) {
  return e
    .toLowerCase()
    .split(/[^a-z0-9_\-\s\p{Cc}\ufffd+]+/u)
    .flatMap((r) => [...r.split(/[\s\p{Cc}\ufffd+]+/u), ""]);
}
function Ce(e, r) {
  let n = 0;
  for (let t = 0; t < e.length && n < r.length; t++) {
    let s = r[n] ?? "",
      o = 0;
    for (let i = t; ; i++) {
      let a = e[i] ?? "";
      if (a === "" || !s.startsWith(a, o)) break;
      if (((o += a.length), o === s.length)) {
        (n++, (t = i));
        break;
      }
    }
  }
  return n === r.length;
}
function Me(e) {
  if (te.test(e) || A(e, f)) return !0;
  let r = e.toLowerCase();
  return [r, g.normalize(r)].some((n) =>
    f.some((t) => {
      let s = n.indexOf(t);
      return s !== -1 && Oe(n.slice(s));
    })
  );
}
function be(e, r) {
  let n = G.exec(e)?.[0];
  if (n === void 0 || Y.test(e) || !URL.canParse(e) || X(e, r)) return !1;
  for (let t = 0; t <= 3; t++) {
    let s = se(n);
    if (s === n) return !0;
    if (Y.test(s) || !G.test(s) || s.toLowerCase().includes(E(r)) || (URL.canParse(s) && X(s, r)))
      return !1;
    n = s;
  }
  return !1;
}
function X(e, r) {
  return [E(r), ""].includes(E(new URL(e).hostname));
}
function E(e) {
  let r = e.length;
  while (e[r - 1] === ".") r--;
  return e.slice(0, r);
}
function Oe(e) {
  return [e, g.normalize(e)].some((r) => {
    let n = r.split("/").filter((s) => s !== ""),
      t = n.indexOf("memory");
    return (
      (t !== -1 && n.includes("mcp", t + 1)) ||
      n.some((s, o) => s === "mcp" && n[o + 1] === "memory")
    );
  });
}
function se(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.replace(/%[0-7][0-9a-f]/gi, (r) =>
      String.fromCharCode(Number.parseInt(r.slice(1), 16))
    );
  }
}
var cbe = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/,
  _ = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;
function oe(e) {
  return `/internal/v2/ccr-sessions/${e}/toolport/`;
}
var Pe = new RegExp(`^${oe("[A-Za-z0-9_-]+")}mcp$`);
function X6o(e) {
  return Gf(e) && Pe.test(new URL(e).pathname);
}
var Ee = new RegExp(`^${oe("[^/]+")}`);
function Srt(e) {
  if (!Gf(e)) return !1;
  let r;
  try {
    r = g.normalize(decodeURIComponent(new URL(e).pathname));
  } catch {
    return !0;
  }
  return Ee.test(r);
}
var k = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/,
  T = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/,
  ie = "-";
function Ror(e, r, n) {
  let t = p(e, r);
  if (!t) return null;
  let s = cbe.exec(t.pathname),
    o = xe(t, r);
  if (!s || s[1] !== n || !o) return null;
  return `${r}/v2/ccr-sessions/${n}/mcp?${o}`;
}
var xor = ["mcp_url", "mcp_server_id", "toolbox_mcp_server_id"],
  HYr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function xe(e, r) {
  let n = [...e.searchParams.keys()];
  if (
    new Set(n).size !== n.length ||
    n.some((i) => !xor.includes(i)) ||
    e.searchParams.get("toolbox_mcp_server_id") !== nse
  )
    return null;
  let t = new URLSearchParams(),
    s = e.searchParams.get("mcp_url");
  if (s !== null) {
    let i = p(s, r);
    if (!i || i.pathname !== wkt || i.search !== "") return null;
    t.set("mcp_url", `${r}${wkt}`);
  }
  let o = e.searchParams.get("mcp_server_id");
  if (o !== null) {
    if (!HYr.test(o)) return null;
    t.set("mcp_server_id", o);
  }
  return (t.set("toolbox_mcp_server_id", nse), t.toString());
}
function p(e, r) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return null;
  }
  return n.origin === r && n.username === "" && n.password === "" && n.hash === "" ? n : null;
}
function wrt() {
  let e = hd.atStartup;
  if (!e) return null;
  try {
    return new URL(e).origin;
  } catch {
    return null;
  }
}
function vSn(e) {
  let r = wrt(),
    n = r === null ? null : p(e, r);
  if (!n) return !1;
  let t = (cbe.exec(n.pathname) ?? _.exec(n.pathname))?.[1];
  return t !== void 0 && hd.ownCcrSessionIds.some((s) => rr(s) === rr(t));
}
function Por(e) {
  let r = wrt();
  return r !== null && me(e, r);
}
function _kt(e) {
  let r = wrt(),
    n = r === null ? null : p(e, r),
    t = n ? cbe.exec(n.pathname)?.[1] : void 0;
  if (!n || t === void 0) return null;
  let s = [...n.searchParams.keys()],
    o = n.searchParams.get("mcp_server_id"),
    i = n.searchParams.get("toolbox_mcp_server_id");
  if (
    new Set(s).size !== s.length ||
    s.some((a) => !xor.includes(a)) ||
    o === null ||
    !HYr.test(o) ||
    i === null
  )
    return null;
  return {
    sessionSegment: t,
    mcpServerId: o,
    toolboxMcpServerId: i,
    upstreamUrl: n.searchParams.get("mcp_url") ?? void 0
  };
}
function bkt(e) {
  return e !== void 0 && ykt(e) === null ? new URL(e).origin : null;
}
var Ae = "/v1/code/mcp/hearthbot",
  Ue = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;
function Ior(e) {
  if (!Gf(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return (
    r.username === "" &&
    r.password === "" &&
    r.hash === "" &&
    r.search === "" &&
    (r.pathname === Ae || Ue.test(r.pathname))
  );
}
var ke = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/email\/mcp$/;
function hii(e, r) {
  if (
    e !== Mrt ||
    r.scope !== "dynamic" ||
    Vd(r) ||
    !("url" in r) ||
    typeof r.url !== "string" ||
    !Gf(r.url)
  )
    return !1;
  let n;
  try {
    n = new URL(r.url);
  } catch {
    return !1;
  }
  return (
    n.username === "" &&
    n.password === "" &&
    n.hash === "" &&
    n.search === "" &&
    ke.test(n.pathname)
  );
}
var ae = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/remote-browser\/mcp$/;
function yii(e) {
  if (!Gf(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return (
    (r.protocol === "https:" || r.protocol === "http:") &&
    r.username === "" &&
    r.password === "" &&
    r.hash === "" &&
    r.search === "" &&
    ae.test(r.pathname)
  );
}
function J6o(e) {
  if (!y() || !vSn(e)) return !1;
  let r = new URL(e),
    n = cbe.exec(r.pathname)?.[1],
    t = r.searchParams.get("mcp_server_id");
  return (
    n !== void 0 &&
    [...r.searchParams.keys()].length === 2 &&
    r.searchParams.get("toolbox_mcp_server_id") === M &&
    x(rr(n), $h).some((s) => s === t)
  );
}
function _ii(e, r) {
  if (!y() || !Gf(r)) return !1;
  let n = new URL(r),
    t = O(n, ["mcp_server_id", "toolbox_mcp_server_id"]).flatMap(m);
  if (t.some(Ie)) return !(e === $h && J6o(r));
  let s = m(n.pathname).map((i) => g.normalize(i).replace(/\/+$/, "")),
    o = [...hd.ownCcrSessionIds, ...[cbe, _, k, T].flatMap((i) => h(i, s) ?? [])]
      .flatMap((i) => x(rr(i), $h))
      .map(le);
  return (
    s.some((i) => ae.test(i)) || t.some((i) => u(i) === u($h) || o.some((a) => I(i).includes(a)))
  );
}
var Te = /(?![0-9])\p{Nd}/u;
function Ie(e) {
  return y() && (Te.test(e) || I(e).includes(le(M)));
}
function le(e) {
  return I(e).replace(/^0+/, "");
}
function I(e) {
  let r = cC(e)?.replaceAll("-", "") ?? "",
    n = e
      .toLowerCase()
      .replaceAll("urn:", "")
      .replaceAll("uuid:", "")
      .replace(/[^0-9a-f]/g, "");
  return `${r}${n}`;
}
var B = new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]),
  ce = "/devices/mcp";
function LYr(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return r.protocol === "wss:" && r.username === "" && r.password === "" && B.has(r.hostname);
}
function gNe(e) {
  if ("url" in e && typeof e.url === "string" && Gf(e.url)) return !0;
  return Vd(e);
}
function de(e) {
  if (!Gf(e) || !URL.canParse(e)) return;
  return new URL(e).searchParams.get("mcp_url") || void 0;
}
var Le = new Set(["http:", "https:", "ws:", "wss:"]);
function Oor(e) {
  let r = de(e);
  if (r === void 0 || !URL.canParse(r)) return;
  let n = new URL(r);
  return Le.has(n.protocol) ? n.hostname.toLowerCase() : void 0;
}
function PRe(e) {
  let r = de(e);
  if (!r) return !1;
  try {
    let n = new URL(r);
    return B.has(n.hostname) && n.pathname === ce;
  } catch {
    return !1;
  }
}
var bii = [...B].map((e) => `https://${e}${ce}`);
function tse(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return (
      (r.search = ""),
      (r.username = ""),
      (r.password = ""),
      (r.hash = ""),
      r.toString().replace(/\/$/, "")
    );
  } catch {
    return;
  }
}
function tB(e) {
  return e ? cn(e) : void 0;
}
function Sii(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e);
  if (r.origin === "null") return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== "" ? `${r.origin}/\u2026` : r.origin;
}
function Sqe(e) {
  return "url" in e ? e.url : null;
}
function vrt(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let r = e;
  return [r.command, ...(r.args ?? [])];
}
function Q6o(e) {
  if (!f.some((r) => e.includes(r))) return e;
  try {
    return new URL(e).searchParams.get("mcp_url") || e;
  } catch {
    return e;
  }
}
function Yue(e) {
  return e.type ?? ("command" in e ? "stdio" : "unknown");
}
function Mor(e) {
  let { authoredUnexpanded: r, expanded: n, cliOwned: t } = e,
    s = e.detail ?? "endpoint";
  if (r) {
    let i = Sqe(r);
    if (i) {
      if (s === "endpoint") return u$e(i);
      if (Be(i)) return J(i);
      return Q(i) ?? J(i);
    }
    let a = vrt(r);
    if (a) return s === "endpoint" ? u$e(a.join(" ")) : void 0;
    return s === "endpoint" ? Yue(r) : void 0;
  }
  let o = Sqe(n);
  if (o) {
    let i = t && Gf(o) ? Q6o(o) : o,
      a = Q(i);
    if (a !== void 0) return a;
  }
  return s === "endpoint" ? Yue(n) : void 0;
}
function Q(e) {
  try {
    let r = new URL(e).origin;
    return r === "null" ? void 0 : r;
  } catch {
    return;
  }
}
function ESn(e, r = e) {
  let n = (i) => {
      let a = e.length;
      for (let d of ["/", "?", "#", "\\"]) {
        let c = r.indexOf(d, i);
        if (c !== -1 && c < a) a = c;
      }
      return a;
    },
    t = r.indexOf("://"),
    s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0,
    o = n(s);
  return { scheme: e.slice(0, s), authority: e.slice(s, o), rest: e.slice(o) };
}
function Be(e) {
  return ESn(e, Jvn(e)).authority.includes("${");
}
function J(e) {
  let r = Jvn(e),
    { scheme: n, authority: t } = ESn(r),
    s = n.length,
    o = s + t.length;
  if (r.includes("@", o)) return u$e(e.slice(0, s)) + "[unparseable-authority]";
  let i = t.lastIndexOf("@"),
    a = e.slice(i === -1 ? s : s + i + 1, o);
  if (a === "") return;
  return u$e(e.slice(0, s) + a);
}
export {
  V6o,
  dii,
  ykt,
  dbe,
  pNe,
  xt,
  wor,
  mZ,
  vor,
  Vd,
  brt,
  cii,
  _qe,
  Eor,
  kor,
  Tor,
  kVt,
  TVt,
  Aor,
  $h,
  SSn,
  q6o,
  uii,
  wSn,
  bqe,
  fii,
  Y6o,
  Gf,
  mNe,
  pii,
  mii,
  Cor,
  gii,
  AVt,
  cbe,
  X6o,
  Srt,
  Ror,
  xor,
  HYr,
  wrt,
  vSn,
  Por,
  _kt,
  bkt,
  Ior,
  hii,
  yii,
  J6o,
  _ii,
  LYr,
  gNe,
  Oor,
  PRe,
  bii,
  tse,
  tB,
  Sii,
  Sqe,
  vrt,
  Q6o,
  Yue,
  Mor,
  ESn
};

//# sourceMappingURL=chunk-qakn3b85.js.map
