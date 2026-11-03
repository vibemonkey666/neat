// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  cft,
  $Dt,
  FDt,
  Uae,
  y4,
  uft,
  jTr,
  nO,
  BDt,
  o1e,
  WTr,
  jDt,
  GTr,
  bbo
} from "./chunk-ktghwym4.js";
import { Ht } from "./chunk-ddpw2j06.js";
import { J } from "./chunk-wrtp8qz8.js";
import { b, c, ce, Wq, Ka, Xw } from "./chunk-acd8w9vv.js";
import { Ke, R, d, E } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { sYe } from "./chunk-xc1j8sdj.js";
import { _, te, ie } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { se } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { vl } from "./chunk-6xjawpfq.js";
import { oa } from "./chunk-7zgz07kc.js";
import { Sl, Kn, aB, XV, Ym } from "./chunk-x8k0r295.js";
import { O0, X5 } from "./chunk-vbnb89qh.js";
import { q0e, Unt, xj, Hoe, Noe, td, sC, k } from "./chunk-ajtyjx88.js";
import { p } from "./chunk-qmkm2x59.js";
import { xt } from "./chunk-qakn3b85.js";
import { Fme } from "./chunk-2f82hv4z.js";
import { AN } from "./chunk-tpjq0nvg.js";
import { qh, ZDt, TN } from "./chunk-w1mqqc2v.js";
import { Wme, V1n, MA, ho, xN, PN } from "./chunk-tbj8hqy2.js";
import { Ak } from "./chunk-j0tbz6ra.js";
import { AUn, NTr, $Tr, CUn, mbo } from "./chunk-dcyhhgvc.js";
import { yOe, pBn, mBn, JDt, Eme, gBn, hBn, yBn } from "./chunk-pqth9145.js";
import { atn, t9e, bOe } from "./chunk-bw100rmb.js";
import { yV, Js } from "./chunk-6jn0brsm.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { g$e } from "./chunk-vt31n0jt.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { _e } from "./chunk-n8wdmnah.js";
import { randomBytes as tt, randomUUID as rt } from "crypto";
import { createServer as it } from "http";
import { join as nt } from "path";
import { parse as st } from "url";
var Be = 30000,
  We = "urn:ietf:params:oauth:grant-type:token-exchange",
  Ee = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  Re = "urn:ietf:params:oauth:token-type:id-jag",
  Ge = "urn:ietf:params:oauth:token-type:id_token";
function Me(e) {
  return (t, n) => {
    let r = AbortSignal.timeout(Be),
      h = e ? AbortSignal.any([r, e]) : r;
    return fetch(t, { ...n, ...oa({ url: String(t) }), signal: h }).catch((l) => PN(l, t));
  };
}
var he = Me();
function ue(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
class q extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
  }
}
var qe =
  /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function ne(e) {
  return (typeof e === "string" ? e : _(e)).replace(qe, (n, r) => `"${r}":"[REDACTED]"`);
}
var Ve = p(() =>
    u({
      access_token: o().optional(),
      issued_token_type: o().optional(),
      expires_in: g$e().optional(),
      scope: o().optional()
    })
  ),
  Je = p(() =>
    u({
      access_token: o().min(1),
      token_type: o().default("Bearer"),
      expires_in: g$e().optional(),
      scope: o().optional(),
      refresh_token: o().optional()
    })
  );
async function Ye(e, t) {
  let n;
  try {
    n = await WTr(e, void 0, t?.fetchFn ?? he);
  } catch (r) {
    if (Ke(r)) throw r;
    let h = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw Error(
      `XAA: PRM discovery failed for ${ho(e)} (${h ? `HTTP ${h}` : r instanceof Error ? r.name : typeof r})`
    );
  }
  if (!n.resource || !n.authorization_servers?.[0])
    throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ue(n.resource) !== ue(e))
    throw Error(
      `XAA: PRM discovery failed: PRM resource mismatch: expected ${ho(e)}, got ${ho(n.resource)}`
    );
  return { resource: n.resource, authorization_servers: n.authorization_servers };
}
async function Ze(e, t) {
  let n;
  try {
    n = await jDt(e, { fetchFn: t?.fetchFn ?? he, skipIssuerValidation: !0 });
  } catch (r) {
    if (Ke(r)) throw r;
    let h = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw new R(
      `XAA: AS metadata discovery failed (${h ? `HTTP ${h}` : r instanceof Error ? r.name : typeof r})`,
      "XAA: AS metadata discovery failed"
    );
  }
  if (!n?.issuer || !n.token_endpoint)
    throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${ho(e)}`);
  if (ue(n.issuer) !== ue(e))
    throw Error(
      `XAA: AS metadata discovery failed: issuer mismatch: expected ${ho(e)}, got ${ho(n.issuer)}`
    );
  if (!URL.canParse(n.token_endpoint) || new URL(n.token_endpoint).protocol !== "https:")
    throw Error(`XAA: refusing non-HTTPS token endpoint: ${ho(n.token_endpoint)}`);
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported
  };
}
async function Qe(e) {
  let t = e.fetchFn ?? he,
    n = new URLSearchParams({
      grant_type: We,
      requested_token_type: Re,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: Ge,
      client_id: e.clientId
    });
  if (e.clientSecret) n.set("client_secret", e.clientSecret);
  if (e.scope) n.set("scope", e.scope);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: n
  });
  if (!r.ok) {
    let S = ne(await r.text()).slice(0, 200),
      v = r.status < 500;
    throw new q(`XAA: token exchange failed: HTTP ${r.status}: ${S}`, v);
  }
  let h;
  try {
    h = await r.json();
  } catch {
    throw new q(
      `XAA: token exchange returned non-JSON (captive portal?) at ${ho(e.tokenEndpoint)}`,
      !1
    );
  }
  let l = Ve().safeParse(h);
  if (!l.success)
    throw new q(`XAA: token exchange response did not match expected shape: ${ne(h)}`, !0);
  let s = l.data;
  if (!s.access_token)
    throw new q(`XAA: token exchange response missing access_token: ${ne(s)}`, !0);
  if (s.issued_token_type !== Re)
    throw new q(
      `XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`,
      !0
    );
  return { jwtAuthGrant: s.access_token, expiresIn: s.expires_in, scope: s.scope };
}
async function et(e) {
  let t = e.fetchFn ?? he,
    n = e.authMethod ?? "client_secret_basic",
    r = new URLSearchParams({ grant_type: Ee, assertion: e.assertion });
  if (e.scope) r.set("scope", e.scope);
  let h = { "Content-Type": "application/x-www-form-urlencoded" };
  if (n === "client_secret_basic") {
    let v = Buffer.from(
      `${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`
    ).toString("base64");
    ((h.Authorization = `Basic ${v}`), qh().record(v));
  } else (r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret));
  (qh().record(e.clientSecret), qh().record(e.assertion));
  let l = await t(e.tokenEndpoint, { method: "POST", headers: h, body: r });
  if (!l.ok) {
    let v = ne(await l.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${l.status}: ${v}`);
  }
  let s;
  try {
    s = await l.json();
  } catch {
    throw Error(
      `XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${ho(e.tokenEndpoint)}`
    );
  }
  let S = Je().safeParse(s);
  if (!S.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${ne(s)}`);
  return S.data;
}
async function ke(e, t, n = "xaa", r) {
  let h = Me(r);
  se(n, `XAA: discovering PRM for ${ho(e)}`);
  let l = await Ye(e, { fetchFn: h });
  se(
    n,
    `XAA: discovered resource=${ho(l.resource)} ASes=[${l.authorization_servers.map(ho).join(", ")}]`
  );
  let s,
    S = [];
  for (let w of l.authorization_servers) {
    let I;
    try {
      I = await Ze(w, { fetchFn: h });
    } catch (P) {
      if (r?.aborted) throw P;
      S.push(`${ho(w)}: ${P instanceof Error ? P.message : String(P)}`);
      continue;
    }
    if (I.grant_types_supported && !I.grant_types_supported.includes(Ee)) {
      S.push(
        `${ho(w)}: does not advertise jwt-bearer grant (supported: ${I.grant_types_supported.join(", ")})`
      );
      continue;
    }
    s = I;
    break;
  }
  if (!s)
    throw new R(
      `XAA: no authorization server supports jwt-bearer. Tried: ${S.join("; ")}`,
      `XAA: no authorization server supports jwt-bearer (tried ${l.authorization_servers.length})`
    );
  let v = s.token_endpoint_auth_methods_supported,
    A =
      v && !v.includes("client_secret_basic") && v.includes("client_secret_post")
        ? "client_secret_post"
        : "client_secret_basic";
  (se(n, `XAA: AS issuer=${ho(s.issuer)} token_endpoint=${ho(s.token_endpoint)} auth_method=${A}`),
    se(n, "XAA: exchanging id_token for ID-JAG at IdP"));
  let y = await Qe({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: l.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: h
  });
  (se(n, "XAA: ID-JAG obtained"), se(n, "XAA: exchanging ID-JAG for access_token at AS"));
  let C = await et({
    tokenEndpoint: s.token_endpoint,
    assertion: y.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: A,
    fetchFn: h
  });
  return (se(n, "XAA: access_token obtained"), { ...C, authorizationServerUrl: s.issuer });
}
var ot = 30000,
  at = 500,
  be = 600000,
  ct = new Set([...XV, ...aB, "ETIMEDOUT"]);
function dt(e) {
  if (Ke(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = Ym(e);
  return t !== null && ct.has(t.code);
}
function ye(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
var ut = new Set(Object.values(Uae)),
  ht = ["authorization_pending", "expired_token", "slow_down"],
  lt = [...Object.values(Uae), ...ht];
function Ohi(e) {
  let t = lt.find((n) => n === e);
  return ce(t) ?? b("other");
}
function Mhi(e, t) {
  let n =
    t instanceof Error
      ? `${e}
${t.message}`
      : e;
  if (t instanceof h4) return "issuer_echo_denied";
  if (t instanceof uft)
    return t.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
  if (t instanceof jTr) return "dcr_rejected";
  if (
    n.includes("dynamic client registration") ||
    (t instanceof y4 && t.code === "invalid_client_metadata")
  )
    return "dcr_failed";
  if (
    (n.includes("trying to load") && n.includes("metadata")) ||
    n.includes("Incompatible auth server")
  )
    return "discovery_failed";
  if (t instanceof y4) return "dcr_rejected";
  if (n.includes("Issuer mismatch in authorization server metadata")) return "issuer_echo_mismatch";
  if (n.includes("Issuer mismatch in authorization response")) return "issuer_response_mismatch";
  let r = E(t) ?? E(t instanceof Error ? t.cause : void 0);
  if (r && Unt.has(r)) return "network_failed";
  return "sdk_auth_failed";
}
var Ae = 5;
function GCs(e) {
  return ho(e.origin + e.pathname) + V1n(e);
}
var ft = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function zCs(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    n;
  try {
    n = te(t);
  } catch {
    return new Response(t, e);
  }
  if ($Dt.safeParse(n).success) return new Response(t, e);
  let r = FDt.safeParse(n);
  if (!r.success) return new Response(t, e);
  let h = ft.has(r.data.error)
    ? {
        error: "invalid_grant",
        error_description:
          r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`
      }
    : r.data;
  return new Response(_(h), { status: 400, statusText: "Bad Request", headers: e.headers });
}
function Fen() {
  return async (e, t) => {
    try {
      return await Ie(e, t);
    } catch (n) {
      if (t?.signal?.aborted || !dt(n)) throw n;
      return (await X(at, t?.signal ?? void 0), await Ie(e, t));
    }
  };
}
async function Ie(e, t) {
  let n = AbortSignal.timeout(ot),
    r = t?.method?.toUpperCase() === "POST",
    h = oa({ url: String(e) });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, { ...t, ...h, signal: n });
    } catch (A) {
      PN(A, e);
    }
    return r ? zCs(v) : v;
  }
  let l = new AbortController(),
    s = () => l.abort();
  (t.signal.addEventListener("abort", s), n.addEventListener("abort", s));
  let S = () => {
    (t.signal?.removeEventListener("abort", s), n.removeEventListener("abort", s));
  };
  if (t.signal.aborted) l.abort();
  try {
    let v = await fetch(e, { ...t, ...h, signal: l.signal });
    return (S(), r ? zCs(v) : v);
  } catch (v) {
    (S(), PN(v, e));
  }
}
async function fe(e, t, n) {
  let {
      configuredMetadataUrl: r,
      fetchFn: h,
      resourceMetadataUrl: l,
      serverConfigForAnalytics: s
    } = n ?? {},
    S = h ?? Fen();
  if (r) {
    if (!r.startsWith("https://"))
      throw Error(`authServerMetadataUrl must use https:// (got: ${ho(r)})`);
    let A = await S(r, { headers: { Accept: "application/json" } });
    if (A.ok) {
      let y;
      try {
        y = await A.json();
      } catch {
        throw Error(`Configured auth server metadata at ${ho(r)} is not valid JSON`);
      }
      return cft.parse(y);
    }
    throw Error(`HTTP ${A.status} fetching configured auth server metadata from ${ho(r)}`);
  }
  try {
    let { authorizationServerUrl: A, authorizationServerMetadata: y } = await GTr(t, {
      fetchFn: S,
      ...(l && { resourceMetadataUrl: l }),
      skipIssuerMetadataValidation: !0
    });
    if (y)
      return (
        kUn({
          serverName: e,
          site: "rfc9728_chain",
          expectedIssuer: A,
          receivedIssuer: y.issuer,
          serverConfig: s
        }),
        y
      );
  } catch (A) {
    if (A instanceof h4) throw A;
    se(e, `RFC 9728 discovery failed, falling back: ${xN(A, t)}`);
  }
  let v = new URL(t);
  if (v.pathname === "/") return;
  try {
    let A = await jDt(v, { fetchFn: S, skipIssuerValidation: !0 });
    if (A)
      kUn({
        serverName: e,
        site: "legacy_path_fallback",
        expectedIssuer: v.href,
        receivedIssuer: A.issuer,
        serverConfig: s
      });
    return A;
  } catch (A) {
    if (A instanceof h4) throw A;
    se(e, `Path-aware auth server discovery failed: ${xN(A, t)}`);
    return;
  }
}
class h4 extends R {
  expected;
  received;
  constructor(e, t) {
    super(
      `Issuer echo cross-origin mismatch (RFC 8414 \xA73.3): expected ${_(e)}, received ${_(t)}`,
      "issuer echo cross-origin mismatch (RFC 8414 \xA73.3)",
      "issuer_echo_denied"
    );
    this.expected = e;
    this.received = t;
    this.name = "IssuerEchoCrossOriginError";
  }
}
function le() {
  try {
    return k("tengu_mcp_issuer_strict_echo", !1) === !0;
  } catch {
    return !1;
  }
}
function pt(e, t) {
  return t === e || (e.endsWith("/") && t === e.slice(0, -1));
}
function pe(e) {
  try {
    let t = new URL(e);
    if ((t.protocol === "https:" || t.protocol === "http:") && t.origin !== "null") return t;
  } catch {}
  return;
}
function _t(e, t) {
  let n = pe(e),
    r = pe(t);
  if (!n || !r) return "unparseable";
  if (
    n.username !== "" ||
    n.password !== "" ||
    r.username !== "" ||
    r.password !== "" ||
    r.search !== "" ||
    r.hash !== ""
  )
    return "cross_origin";
  return n.origin === r.origin ? "same_origin" : "cross_origin";
}
function mt(e, t) {
  let n = pe(e),
    r = pe(t);
  if (!n || !r) return [];
  let h = [];
  if (n.protocol !== r.protocol) h.push("scheme");
  if (n.username !== r.username || n.password !== r.password) h.push("userinfo");
  if (n.hostname !== r.hostname) h.push("host");
  if (n.port !== r.port) h.push("port");
  if (n.pathname !== r.pathname) h.push("path");
  if (n.search !== r.search) h.push("query");
  if (n.hash !== r.hash) h.push("fragment");
  if (h.length === 0) h.push("normalization_only");
  return h;
}
function kUn({ serverName: e, site: t, expectedIssuer: n, receivedIssuer: r, serverConfig: h }) {
  if (n === void 0) return;
  if (r !== void 0 && pt(n, r)) return;
  let l = r === void 0 ? "unparseable" : _t(n, r),
    s = le() ? "enforce" : "observe",
    S = s === "enforce" && l !== "same_origin";
  try {
    let v = r === void 0 ? ["issuer_missing"] : mt(n, r),
      A = h ? Ak(h) : void 0,
      y = h ? Xw(e, sC(e, h)) : void 0;
    a("tengu_mcp_oauth_issuer_echo_mismatch", {
      site: c(t),
      mode: c(s),
      originRelation: c(l),
      outcome: S ? b("denied") : b("proceeded"),
      ...(v.length > 0 && { mismatchFacets: Ka(v) }),
      expectedIssuerHash: cn(n),
      ...(r !== void 0 && { receivedIssuerHash: cn(r) }),
      ...(A && { mcpServerBaseUrl: A }),
      ...(y && { mcpServerName: y })
    });
  } catch (v) {
    try {
      se(e, `issuer-echo telemetry failed: ${d(v)}`);
    } catch {}
  }
  if (S) throw new h4(n, r);
}
class KCs extends nO {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError";
  }
}
class Uen extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}
function we(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function De(e) {
  let t = we(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function Pe(e) {
  if (!e?.clientId || !e.redirectUri || !De(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === t9e(t) ? t : void 0;
}
function Fe() {
  return i.MCP_OAUTH_CLIENT_METADATA_URL || sYe;
}
function xe(e) {
  if (!De(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function gt(e) {
  return e !== void 0 && (e === sYe || e === Fe());
}
function BAi(e) {
  return xt().oauthCallbackSubmitters.get(e);
}
function jAi(e, t) {
  let n = xt().activeOAuthFlows;
  (n.set(e, t),
    t
      .finally(() => {
        if (n.get(e) === t) n.delete(e);
      })
      .catch(() => {}));
}
function WAi(e) {
  return xt().activeOAuthFlows.get(e);
}
async function LTr(e, t) {
  let n = td(e, t),
    r = (await Kn().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken) return;
  try {
    await Kn().mutate((h) => {
      let l = h.mcpOAuth?.[n];
      if (!l || l.accessToken || l.refreshToken) return h;
      let s = { ...h.mcpOAuth };
      return (delete s[n], { ...h, mcpOAuth: s });
    });
  } catch (h) {
    se(e, `clear tokenless stub failed: ${d(h)}`);
  }
}
async function $e({
  serverName: e,
  endpoint: t,
  token: n,
  tokenTypeHint: r,
  clientId: h,
  clientSecret: l,
  accessToken: s,
  authMethod: S = "client_secret_basic",
  configuredHeaders: v
}) {
  let A = new URLSearchParams();
  (A.set("token", n), A.set("token_type_hint", r));
  let y = { ...v, "Content-Type": "application/x-www-form-urlencoded" },
    C = Object.keys(v).length > 0 ? { beforeRedirect: hBn(t) } : {};
  if (h && l)
    if (S === "client_secret_post") (A.set("client_id", h), A.set("client_secret", l));
    else {
      let w = Buffer.from(`${encodeURIComponent(h)}:${encodeURIComponent(l)}`).toString("base64");
      ((y.Authorization = `Basic ${w}`), qh().record(w));
    }
  else if (h) A.set("client_id", h);
  else se(e, `No client_id available for ${r} revocation - server may reject`);
  try {
    (await Ht.post(t, A, { headers: y, ...C }), se(e, `Successfully revoked ${r}`));
  } catch (w) {
    if (Ht.isAxiosError(w) && w.response?.status === 401 && s)
      (se(e, `Got 401, retrying ${r} revocation with Bearer auth`),
        A.delete("client_id"),
        A.delete("client_secret"),
        await Ht.post(t, A, { headers: { ...y, Authorization: `Bearer ${s}` }, ...C }),
        se(e, `Successfully revoked ${r} with Bearer auth`));
    else throw w;
  }
}
async function GAi(e, t) {
  let r = (await Kn().readAsync())?.mcpOAuth?.[td(e, t)];
  if (!r?.accessToken && !r?.refreshToken) return;
  return {
    accessToken: r.accessToken || void 0,
    refreshToken: r.refreshToken,
    clientId: r.clientId,
    clientSecret: r.clientSecret,
    ...(r.discoveryState && { discoveryState: yOe(r.discoveryState) })
  };
}
async function Ne(e, t, n) {
  let r = qh();
  (r.record(n.accessToken), r.record(n.refreshToken), r.record(n.clientSecret));
  let h;
  try {
    let l = n.discoveryState?.authorizationServerUrl ?? t.url,
      s = await fe(e, l, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: Eme(e, t, Fen()),
        serverConfigForAnalytics: t
      });
    if (!s) (se(e, "No OAuth metadata found"), (h = "no_metadata"));
    else {
      let S = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!S) (se(e, "Server does not support token revocation"), (h = "no_revocation_endpoint"));
      else {
        let v = String(S),
          A = await gBn(e, t, v),
          y =
            ("revocation_endpoint_auth_methods_supported" in s
              ? s.revocation_endpoint_auth_methods_supported
              : void 0) ??
            ("token_endpoint_auth_methods_supported" in s
              ? s.token_endpoint_auth_methods_supported
              : void 0),
          C =
            y && !y.includes("client_secret_basic") && y.includes("client_secret_post")
              ? "client_secret_post"
              : "client_secret_basic";
        if ((se(e, `Revoking tokens via ${ho(v)} (${C})`), n.refreshToken))
          try {
            await $e({
              serverName: e,
              endpoint: v,
              token: n.refreshToken,
              tokenTypeHint: "refresh_token",
              clientId: n.clientId,
              clientSecret: n.clientSecret,
              accessToken: n.accessToken,
              authMethod: C,
              configuredHeaders: A
            });
          } catch (w) {
            (se(e, `Failed to revoke refresh token: ${d(w)}`), (h = "server_revoke_failed"));
          }
        if (n.accessToken)
          try {
            await $e({
              serverName: e,
              endpoint: v,
              token: n.accessToken,
              tokenTypeHint: "access_token",
              clientId: n.clientId,
              clientSecret: n.clientSecret,
              accessToken: n.accessToken,
              authMethod: C,
              configuredHeaders: A
            });
          } catch (w) {
            (se(e, `Failed to revoke access token: ${d(w)}`), (h = "server_revoke_failed"));
          }
      }
    }
  } catch (l) {
    (se(e, `Failed to revoke tokens: ${d(l)}`),
      (h = l instanceof h4 ? "issuer_echo_denied" : "server_revoke_failed"));
  }
  return h;
}
async function zAi(e, t, n) {
  let r;
  try {
    let h = (await Kn().readAsync())?.mcpOAuth?.[td(e, t)],
      l = {
        ...n,
        accessToken: n.accessToken && n.accessToken !== h?.accessToken ? n.accessToken : void 0,
        refreshToken: n.refreshToken && n.refreshToken !== h?.refreshToken ? n.refreshToken : void 0
      };
    if (!l.accessToken && !l.refreshToken) {
      (se(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke"));
      return;
    }
    r = await Ne(e, t, l);
  } catch (h) {
    (se(e, `Failed to revoke replaced tokens: ${d(h)}`), (r = "server_revoke_failed"));
  }
  if (r) f("mcp_oauth_revoke", r);
  else g("mcp_oauth_revoke");
}
async function KAi(e, t, { preserveStepUpState: n = !1 } = {}) {
  let r = Kn(),
    h = await r.readAsync();
  if (!h?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return;
  }
  let l = td(e, t),
    s = h.mcpOAuth[l],
    S;
  if (s?.accessToken || s?.refreshToken)
    S = await Ne(e, t, {
      accessToken: s.accessToken || void 0,
      refreshToken: s.refreshToken,
      clientId: s.clientId,
      clientSecret: s.clientSecret,
      ...(s.discoveryState && { discoveryState: yOe(s.discoveryState) })
    });
  else se(e, "No tokens to revoke");
  try {
    if (n && s && (s.stepUpScope || s.discoveryState || s.clientId))
      (await r.mutate((v) => {
        let A = v.mcpOAuth?.[l];
        if (A?.accessToken !== s.accessToken || A?.clientId !== s.clientId) return v;
        return {
          ...v,
          mcpOAuth: {
            ...v.mcpOAuth,
            [l]: {
              serverName: e,
              serverUrl: t.url,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: void 0,
              ...(s.clientId && {
                clientId: s.clientId,
                ...(s.redirectUri && { redirectUri: s.redirectUri }),
                ...(s.clientSecret !== void 0 && { clientSecret: s.clientSecret })
              }),
              ...(s.stepUpScope && { stepUpScope: s.stepUpScope }),
              ...(s.discoveryState && {
                discoveryState: {
                  ...yOe(s.discoveryState),
                  resourceMetadataUrl: s.discoveryState.resourceMetadataUrl
                }
              })
            }
          }
        };
      }),
        se(e, "Preserved step-up auth state across revocation"));
    else await VCs(e, t);
  } catch (v) {
    (se(e, `clear local tokens failed: ${d(v)}`), (S ??= "local_clear_failed"));
  }
  if ((TN(e), S)) f("mcp_oauth_revoke", S);
  else g("mcp_oauth_revoke");
}
async function VCs(e, t, n) {
  let r = td(e, t),
    h;
  if (
    (await Kn().mutate((l) => {
      let s = l.mcpOAuth?.[r];
      if (!s) return l;
      let S = { ...l.mcpOAuth };
      if (s.clientId && n?.preserveClientRegistration?.(s)) {
        if (!s.accessToken && !s.refreshToken) return l;
        ((S[r] = { ...s, accessToken: "", refreshToken: void 0, expiresAt: 0, scope: void 0 }),
          (h = "tokens"));
      } else (delete S[r], (h = "all"));
      return { ...l, mcpOAuth: S };
    }),
    h)
  )
    se(
      e,
      h === "tokens"
        ? "Cleared stored tokens (preserved client registration)"
        : "Cleared stored tokens"
    );
}
function ze(e, t, n, r) {
  if (n?.success) return;
  let h = r ? "mutate_rejected" : "storage_write_failed",
    l = r ? d(r) : (n?.warning ?? "storage write failed");
  se(e, `Token persist failed: ${l}`);
  let s = Ak(t);
  a("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...(s && { mcpServerBaseUrl: s }),
    reason: c(h)
  });
}
async function vt(e, t, n, r, h) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let l = Hoe();
  if (!l)
    throw Error(
      "XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure."
    );
  let s = t.oauth?.clientId;
  if (!s) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let v = (await qCs(e, t))?.clientSecret;
  if (!v) {
    let w = td(e, t),
      I = Object.keys((await Kn().readAsync())?.mcpOAuthClientConfig ?? {}),
      P = Wme(t.headers ?? {});
    throw (
      se(e, `XAA: secret lookup miss. wanted=${w} have=[${I.join(", ")}] configHeaders=${_(P)}`),
      Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`)
    );
  }
  se(e, "XAA: starting cross-app access flow");
  let A = await $Tr(l.issuer),
    y = (await AUn(l.issuer)) !== void 0,
    C = "idp_login";
  try {
    let w;
    try {
      w = await mbo({
        idpIssuer: l.issuer,
        idpClientId: l.clientId,
        idpClientSecret: A,
        callbackPort: l.callbackPort,
        onAuthorizationUrl: n,
        skipBrowserOpen: h,
        abortSignal: r
      });
    } catch (F) {
      if (r?.aborted) throw new Uen();
      throw F;
    }
    C = "discovery";
    let I = await CUn(l.issuer);
    ((C = "token_exchange"), qh().record(v));
    let P;
    try {
      P = await ke(
        t.url,
        {
          clientId: s,
          clientSecret: v,
          idpClientId: l.clientId,
          idpClientSecret: A,
          idpIdToken: w,
          idpTokenEndpoint: I.token_endpoint
        },
        e,
        r
      );
    } catch (F) {
      if (r?.aborted) throw new Uen();
      let U = d(F);
      if (F instanceof q) {
        if (F.shouldClearIdToken)
          (await NTr(l.issuer), se(e, "XAA: cleared cached id_token after token-exchange failure"));
      } else if (
        U.includes("PRM discovery failed") ||
        U.includes("AS metadata discovery failed") ||
        U.includes("no authorization server supports jwt-bearer")
      )
        C = "discovery";
      else if (U.includes("jwt-bearer")) C = "jwt_bearer";
      throw F;
    }
    let W = td(e, t),
      T = qh();
    (T.record(P.access_token), T.record(P.refresh_token));
    let M, D;
    try {
      M = await Kn().mutate((F) => {
        let U = F.mcpOAuth?.[W];
        return {
          ...F,
          mcpOAuth: {
            ...F.mcpOAuth,
            [W]: {
              ...U,
              serverName: e,
              serverUrl: t.url,
              accessToken: P.access_token,
              refreshToken: P.refresh_token ?? U?.refreshToken,
              expiresAt: P.expires_in != null ? Date.now() + P.expires_in * 1000 : void 0,
              scope: P.scope,
              clientId: s,
              clientSecret: v,
              discoveryState: JDt({
                previous: U?.discoveryState,
                issuedBy: P.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (F) {
      D = F;
    }
    if (M?.success) se(e, "XAA: tokens saved");
    else ze(e, t, M, D);
    (a("tengu_mcp_oauth_flow_success", { authMethod: b("xaa"), idTokenCacheHit: y }),
      g("mcp_oauth_flow"));
  } catch (w) {
    if (w instanceof Uen) throw w;
    throw (
      m("mcp_oauth_flow", "mcp_oauth_xaa_failed"),
      a("tengu_mcp_oauth_flow_failure", {
        authMethod: b("xaa"),
        xaaFailureStage: c(C),
        idTokenCacheHit: y
      }),
      w
    );
  }
}
async function pbo(e, t, n, r, h) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let T = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new R(
      T ||
        "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.",
      "MCP OAuth refused: no valid server URL"
    );
  }
  if (t.oauth?.xaa) {
    if (!xj())
      throw Error(
        `XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`
      );
    (a("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: c(t.type),
      ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
    }),
      await vt(e, t, n, r, h?.skipBrowserOpen));
    return;
  }
  let l = Kn(),
    s = td(e, t),
    S = (await l.readAsync())?.mcpOAuth?.[s],
    v = S?.stepUpScope,
    A = S?.discoveryState?.resourceMetadataUrl,
    y = Pe(S),
    C;
  if (A)
    try {
      C = new URL(A);
    } catch {
      se(e, `Invalid cached resourceMetadataUrl: ${ho(A)}`);
    }
  let w = { scope: v, resourceMetadataUrl: C },
    I = rt(),
    P = yBn(t, h?.redirectUri);
  a("tengu_mcp_oauth_flow_start", {
    flowAttemptId: _e(I),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...P,
    ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
  });
  let W = !1;
  try {
    let T = t.oauth?.callbackPort,
      M = !!h?.redirectUri,
      D = M ? 0 : (T ?? (await bOe(y))),
      F = h?.redirectUri ?? t9e(D);
    se(
      e,
      M
        ? `Using custom redirectUri: ${ho(F)} (no localhost listener)`
        : `Using redirect port: ${D}${T ? " (from config)" : y && D === y ? " (reusing registered port)" : ""}`
    );
    try {
      await VCs(e, t, { preserveClientRegistration: (L) => D === Pe(L) || L.redirectUri === F });
    } catch (L) {
      se(e, `clear stored credentials failed: ${d(L)}`);
    }
    let U = xt(),
      j = new AbortController();
    if (!M) (U.oauthCallbackListeners.get(D)?.abort(), U.oauthCallbackListeners.set(D, j));
    let G = new Ben(e, t, F, !0, n, h?.skipBrowserOpen),
      oe = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (w.scope && !oe) G.markStepUpPending(w.scope);
    let me = Eme(e, t, Fen());
    try {
      let L = await fe(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: me,
        resourceMetadataUrl: w.resourceMetadataUrl,
        serverConfigForAnalytics: t
      });
      if (L)
        (G.setMetadata(L),
          se(e, `Fetched OAuth metadata with scope: ${MA("scope", Le(L) ?? "") || "NONE"}`));
    } catch (L) {
      if (L instanceof h4) throw L;
      se(e, `Failed to fetch OAuth metadata: ${xN(L, t.url)}`);
    }
    let Q = await G.state(),
      z = null,
      N = null,
      H = null,
      Te = null,
      V = () => {
        if (z) (z.removeAllListeners(), z.on("error", () => {}), z.close(), (z = null));
        if (N) (clearTimeout(N), (N = null));
        if (H)
          (r?.removeEventListener("abort", H),
            j.signal.removeEventListener("abort", H),
            (H = null));
        if (U.oauthCallbackListeners.get(D) === j) U.oauthCallbackListeners.delete(D);
        if (U.oauthCallbackSubmitters.get(e) === Te) U.oauthCallbackSubmitters.delete(e);
        se(e, "MCP OAuth server cleaned up");
      },
      { code: Ce, iss: He } = await new Promise((L, Xe) => {
        let ae = !1,
          Ue = (x, B) => {
            if (ae) return;
            ((ae = !0), L({ code: x, iss: B }));
          },
          Y = (x) => {
            if (ae) return;
            ((ae = !0), Xe(x));
          };
        if (
          ((H = () => {
            (V(), Y(new Uen()));
          }),
          r?.aborted || j.signal.aborted)
        ) {
          H();
          return;
        }
        (r?.addEventListener("abort", H), j.signal.addEventListener("abort", H));
        {
          let x = (B) => {
            try {
              let K = new URL(B),
                ee = K.searchParams.get("code"),
                ve = K.searchParams.get("state"),
                Z = K.searchParams.get("error"),
                re = atn(K.searchParams.get("iss"));
              if (!ee && !Z) return !1;
              if (ve !== Q)
                return (
                  se(e, "Ignoring manual callback URL whose state belongs to a different flow"),
                  !1
                );
              if (Z) {
                let de = K.searchParams.get("error_description") || "";
                return (V(), Y(Error(`OAuth error: ${Z} - ${de}`)), !0);
              }
              if (!ee) return !1;
              return (se(e, "Received auth code via manual callback URL"), V(), Ue(ee, re), !0);
            } catch {
              return !1;
            }
          };
          ((Te = x), U.oauthCallbackSubmitters.set(e, x), h?.onWaitingForCallback?.(x, D, Q));
        }
        let Oe = async () => {
          try {
            (se(e, "Starting SDK auth"), se(e, `Server URL: ${ho(t.url)}`));
            let x = await BDt(G, {
              serverUrl: t.url,
              scope: w.scope,
              resourceMetadataUrl: w.resourceMetadataUrl,
              fetchFn: me,
              skipIssuerMetadataValidation: !0
            });
            if ((se(e, `Initial auth result: ${x}`), x !== "REDIRECT"))
              se(e, `Unexpected auth result, expected REDIRECT: ${x}`);
          } catch (x) {
            (se(e, `SDK auth error: ${xN(x, t.url)}`),
              V(),
              Y(
                Object.assign(new R(`SDK auth failed: ${xN(x, t.url)}`, "SDK auth failed"), {
                  cause: x
                })
              ));
          }
        };
        if (M) Oe();
        else
          ((z = it((x, B) => {
            let K = st(x.url || "", !0);
            if (K.pathname === "/callback") {
              let ee = K.query.code,
                ve = K.query.state,
                Z = K.query.error,
                re = K.query.error_description,
                de = K.query.error_uri,
                je = atn(K.query.iss);
              if (ve !== Q) {
                (B.writeHead(400, { "Content-Type": "text/html" }),
                  B.end(
                    AN({
                      ok: !1,
                      heading: "Authentication failed",
                      message:
                        "Invalid state parameter. Close this tab and try again from Claude Code."
                    })
                  ));
                return;
              }
              if (Z) {
                (B.writeHead(200, { "Content-Type": "text/html" }),
                  B.end(
                    AN({
                      ok: !1,
                      heading: "Authentication failed",
                      message: "Close this tab and try again from Claude Code.",
                      detail: `${String(Z)}: ${re ?? ""}`
                    })
                  ),
                  V());
                let Se = `OAuth error: ${Z}`;
                if (re) Se += ` - ${re}`;
                if (de) Se += ` (See: ${de})`;
                Y(Error(Se));
                return;
              }
              if (ee)
                (B.writeHead(200, { "Content-Type": "text/html" }),
                  B.end(
                    AN({
                      ok: !0,
                      heading: "Authentication successful",
                      message: "You can close this tab and return to Claude Code."
                    })
                  ),
                  V(),
                  Ue(ee, je));
            } else
              (B.writeHead(404, { "Content-Type": "text/html" }),
                B.end(
                  AN({
                    ok: !1,
                    heading: "Not found",
                    message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${ho(F)}.`
                  })
                ));
          })),
            z.on("error", (x) => {
              if ((V(), x.code === "EADDRINUSE")) {
                let B =
                  O() === "windows" ? `netstat -ano | findstr :${D}` : `lsof -ti:${D} -sTCP:LISTEN`;
                Y(
                  new R(
                    `OAuth callback port ${D} is already in use \u2014 another process may be holding it. ` +
                      `Run \`${B}\` to find it.`,
                    "OAuth callback port already in use"
                  )
                );
              } else
                Y(
                  new R(
                    `OAuth callback server failed: ${x.message}`,
                    "OAuth callback server failed"
                  )
                );
            }),
            z.listen(D, "127.0.0.1", () => void Oe()),
            z.unref());
        ((N = setTimeout(
          (x, B) => {
            (x(), B(new R("Authentication timeout", "Authentication timeout")));
          },
          300000,
          V,
          Y
        )),
          N.unref());
      });
    ((W = !0), se(e, "Completing auth flow with authorization code"), qh().record(Ce));
    let ge = await BDt(G, {
      serverUrl: t.url,
      authorizationCode: Ce,
      iss: He,
      resourceMetadataUrl: w.resourceMetadataUrl,
      fetchFn: Eme(e, t, Fen()),
      skipIssuerMetadataValidation: !0
    });
    if ((se(e, `Auth result: ${ge}`), ge === "AUTHORIZED")) {
      let L = await G.tokens().catch(() => {
        return;
      });
      if ((se(e, `Tokens after auth: ${L ? "Present" : "Missing"}`), L))
        se(e, `Token expires_in: ${L.expires_in}`);
      (a("tengu_mcp_oauth_flow_success", {
        flowAttemptId: _e(I),
        transportType: c(t.type),
        ...P,
        ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
      }),
        g("mcp_oauth_flow"));
    } else throw new R("Unexpected auth result: " + ge, "Unexpected auth result");
  } catch (T) {
    se(e, `Error during auth completion: ${xN(T, t.url)}`);
    let M = "unknown",
      D,
      F,
      U = d(T),
      j = T instanceof Error ? T.cause : void 0;
    if (T instanceof Uen) M = "cancelled";
    else if (T instanceof h4 || j instanceof h4) M = "issuer_echo_denied";
    else if (T instanceof uft || j instanceof uft)
      M =
        [T, j].find((N) => N instanceof uft)?.kind === "metadata"
          ? "issuer_echo_mismatch"
          : "issuer_response_mismatch";
    else if (/AADSTS\d/.test(U)) M = "entra_specific";
    else if (/redirect[_ ]uri/i.test(U)) M = "redirect_uri_mismatch";
    else if (W && (ye(T) || ye(j))) M = "token_response_schema_rejected";
    else if (W) M = "token_exchange_failed";
    else if (U.includes("Authentication timeout")) M = "timeout";
    else if (U.includes("OAuth error:")) M = "provider_denied";
    else if (
      U.includes("already in use") ||
      U.includes("EADDRINUSE") ||
      U.includes("callback server failed") ||
      U.includes("No available port")
    )
      M = "port_unavailable";
    else if (U.includes("SDK auth failed")) M = Mhi(U, j);
    let G = [j, T].find((z) => z instanceof jTr),
      oe = (j instanceof Error ? j : T instanceof Error ? T : null)?.message.match(
        /^HTTP (\d{3})\b/
      );
    if (G) F = G.status;
    else if (oe) F = Number(oe[1]);
    if (j instanceof y4) D = j.code;
    if (T instanceof y4) {
      if (((D = T.code), T.code === "invalid_client" || T.code === "unauthorized_client")) {
        let z = td(e, t);
        try {
          await Kn().mutate((N) => {
            let H = N.mcpOAuth?.[z];
            if (!H) return N;
            return {
              ...N,
              mcpOAuth: { ...N.mcpOAuth, [z]: { ...H, clientId: void 0, clientSecret: void 0 } }
            };
          });
        } catch (N) {
          se(e, `clear clientId failed: ${d(N)}`);
        }
      }
    }
    if (
      !/^OAuth error: access_denied(?: |$)/.test(U) &&
      (M === "timeout" || U.includes("OAuth error:"))
    ) {
      let z = td(e, t);
      await Kn()
        .mutate((N) => {
          let H = N.mcpOAuth?.[z];
          if (!H?.clientId || H.accessToken || H.refreshToken || H.clientId !== S?.clientId)
            return N;
          return {
            ...N,
            mcpOAuth: { ...N.mcpOAuth, [z]: { ...H, clientId: void 0, clientSecret: void 0 } }
          };
        })
        .catch((N) => se(e, `drop clientId failed: ${d(N)}`));
    }
    if (M !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    a("tengu_mcp_oauth_flow_error", {
      flowAttemptId: _e(I),
      reason: c(M),
      error_code: D === void 0 ? void 0 : Ohi(D),
      http_status: Wq(F),
      transportType: c(t.type),
      ...P,
      ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
    });
    let Q = xN(T, t.url);
    throw Q === d(T) ? T : Error(Q, { cause: T });
  }
}
function TUn(e, t) {
  return async (n, r) => {
    let h = await e(n, r);
    if (h.status === 401 || h.status === 403) t.sawAuthChallenge = !0;
    if (
      (t.noteServerAnswer(
        n,
        h.status === 401 || (h.status === 403 && o1e(h).error === "insufficient_scope")
      ),
      !new Headers(r?.headers).has("authorization"))
    )
      return h;
    if (h.status === 403) {
      let { error: l, scope: s } = o1e(h);
      if (l === "insufficient_scope" && s) t.markStepUpPending(s);
    } else if (h.status === 401) t.clearStepUpPending();
    return h;
  };
}
class Ben {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _flowDiscoveryState;
  _flowDiscoveryStateAt = 0;
  _flowDiscoveryStateFromConfiguredUrl = !1;
  _metadataEchoMode;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _servedOverrideAuthorizationServerUrl;
  _servedOverrideDocuments = new WeakMap();
  _discoveredAuthorizationServer;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = t9e(), r = !1, h, l) {
    ((this.serverName = e),
      (this.serverConfig = t),
      (this.redirectUri = n),
      (this.handleRedirection = r),
      (this.onAuthorizationUrlCallback = h),
      (this.skipBrowserOpen = l ?? !1),
      (this._presented = qh()));
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  get clientMetadata() {
    let e = {
        client_name: `Claude Code (${this.serverName})`,
        redirect_uris: [this.redirectUri],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none"
      },
      t = this.getCuratedMetadataScope();
    if (t)
      ((e.scope = t), se(this.serverName, `Using scope from metadata: ${MA("scope", e.scope)}`));
    return e;
  }
  get clientMetadataUrl() {
    if (!xe(this.redirectUri)) {
      se(
        this.serverName,
        `redirectUri ${ho(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`
      );
      return;
    }
    let e = Fe();
    if (e !== sYe) se(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    ((this._metadata = e), (this._metadataEchoMode = le() ? "enforce" : "observe"));
  }
  getCuratedMetadataScope() {
    let e = Le(this._metadata);
    if (e !== void 0) return e;
    if (
      this.serverConfig.oauth?.authServerMetadataUrl &&
      Array.isArray(this._metadata?.scopes_supported)
    )
      return this._metadata.scopes_supported.join(" ");
    return;
  }
  markStepUpPending(e) {
    ((this._pendingStepUpScope = e),
      se(this.serverName, `Marked step-up pending: ${MA("scope", e)}`));
  }
  get pendingStepUpScope() {
    return this._pendingStepUpScope;
  }
  clearStepUpPending() {
    this._pendingStepUpScope = void 0;
  }
  clearStepUpPendingOnCredentialGone() {
    if (!this.handleRedirection) this.clearStepUpPending();
  }
  sawAuthChallenge = !1;
  authChallengeOpen = !1;
  noteServerAnswer(e, t) {
    let n = this.serverConfig.url;
    if (String(e) === (URL.canParse(n) ? new URL(n).href : n)) this.authChallengeOpen = t;
  }
  registrationOfferedByDiscovery = !1;
  async readCredentialStore() {
    let e = await Noe(
      this.handleRedirection
        ? void 0
        : {
            serverName: this.serverName,
            serverConfig: this.serverConfig,
            challenged: this.authChallengeOpen
          }
    );
    if (e === Sl)
      throw (
        se(
          this.serverName,
          "Credential store could not be read (the login keychain may be locked); not reporting credentials as absent"
        ),
        new q0e(this.serverName)
      );
    return e;
  }
  async state() {
    if (!this._state)
      ((this._state = tt(32).toString("base64url")),
        se(this.serverName, "Generated new OAuth state"));
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return (
      this._presented.record(e?.client_secret),
      this._presented.record(ZDt(e?.client_id, e?.client_secret)),
      e
    );
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(),
      t = td(this.serverName, this.serverConfig),
      n = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      r = this.serverConfig.oauth?.clientId,
      h = e?.mcpOAuth?.[t],
      l = this.handleRedirection && gt(h?.clientId) && !xe(this.redirectUri);
    if (l) {
      if (
        (se(
          this.serverName,
          `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${ho(this.redirectUri)} \u2014 ${r ? "serving the configured client" : "registering via DCR"} instead`
        ),
        r)
      )
        await this.patchStoredClientEntry(
          t,
          { clientId: r, clientSecret: void 0, redirectUri: this.redirectUri },
          "stale CIMD client_id repair"
        );
    }
    if (h?.clientId && !l) {
      let s = h.redirectUri;
      if (
        this.handleRedirection &&
        (s ? we(s) !== we(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))
      ) {
        let S = s ? ho(s) : "localhost";
        if (!r) {
          se(
            this.serverName,
            `Cached client_id was registered for ${S}; current redirectUri is ${ho(this.redirectUri)} \u2014 forcing re-DCR`
          );
          return;
        }
        if (h.clientId !== r)
          return (
            se(
              this.serverName,
              `Stored client_id is stale and its redirectUri ${S} predates ${ho(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`
            ),
            await this.patchStoredClientEntry(
              t,
              { clientId: r, clientSecret: void 0, redirectUri: this.redirectUri },
              "stale client_id repair"
            ),
            (this._lastServedClientId = r),
            { client_id: r, issuer: h.issuer, client_secret: n }
          );
        (se(
          this.serverName,
          `Stored redirectUri ${S} predates ${ho(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`
        ),
          await this.patchStoredClientEntry(
            t,
            { redirectUri: this.redirectUri },
            "stored redirectUri convergence"
          ));
      }
      return (
        se(this.serverName, "Found client info"),
        (this._lastServedClientId = h.clientId),
        {
          client_id: h.clientId,
          issuer: h.issuer,
          client_secret: h.clientSecret ?? (h.clientId === r ? n : void 0)
        }
      );
    }
    if (r)
      return (
        se(this.serverName, "Using pre-configured client ID"),
        (this._lastServedClientId = r),
        { client_id: r, client_secret: n }
      );
    if (
      !this.handleRedirection &&
      this.registrationOfferedByDiscovery &&
      !h?.accessToken &&
      !h?.refreshToken
    )
      throw (
        se(
          this.serverName,
          "No client info found; deferring client registration to authentication time"
        ),
        new KCs(this.serverName)
      );
    se(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, n) {
    try {
      if (
        !(
          await Kn().mutate((h) => {
            let l = h.mcpOAuth?.[e];
            if (!l) return h;
            return { ...h, mcpOAuth: { ...h.mcpOAuth, [e]: { ...l, ...t } } };
          })
        )?.success
      )
        se(this.serverName, `${n} resolved unsuccessful`);
    } catch (r) {
      se(this.serverName, `${n} failed: ${d(r)}`);
    }
  }
  async saveClientInformation(e) {
    (this._presented.record(e.client_secret),
      this._presented.record(ZDt(e.client_id, e.client_secret)));
    let t = td(this.serverName, this.serverConfig);
    try {
      if (
        (
          await Kn().mutate((r) => ({
            ...r,
            mcpOAuth: {
              ...r.mcpOAuth,
              [t]: {
                ...r.mcpOAuth?.[t],
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                clientId: e.client_id,
                clientSecret:
                  e.issuer !== void 0 &&
                  e.client_id === r.mcpOAuth?.[t]?.clientId &&
                  r.mcpOAuth?.[t]?.clientSecret === void 0 &&
                  e.client_id === this.serverConfig.oauth?.clientId
                    ? void 0
                    : e.client_secret,
                issuer: e.issuer ?? r.mcpOAuth?.[t]?.issuer,
                redirectUri:
                  !this.handleRedirection && e.client_id === r.mcpOAuth?.[t]?.clientId
                    ? r.mcpOAuth?.[t]?.redirectUri
                    : this.redirectUri,
                accessToken: r.mcpOAuth?.[t]?.accessToken || "",
                expiresAt: r.mcpOAuth?.[t]?.expiresAt
              }
            }
          }))
        )?.success
      )
        this._lastServedClientId = e.client_id;
      else se(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (n) {
      se(this.serverName, `saveClientInformation persist failed: ${d(n)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = td(this.serverName, this.serverConfig),
      n = e?.mcpOAuth?.[t];
    if (
      xj() &&
      this.serverConfig.oauth?.xaa &&
      !n?.refreshToken &&
      (!n?.accessToken || (n.expiresAt != null && (n.expiresAt - Date.now()) / 1000 <= 300))
    ) {
      if (!this._refreshInProgress)
        (se(
          this.serverName,
          n
            ? "XAA: access_token expiring, attempting silent exchange"
            : "XAA: no access_token yet, attempting silent exchange"
        ),
          (this._refreshInProgress = this.xaaRefresh().finally(() => {
            this._refreshInProgress = void 0;
          })));
      try {
        let S = await this._refreshInProgress;
        if (S)
          return (
            (this._lastServedAccessToken = S.access_token),
            this._presented.record(S.access_token),
            this._presented.record(S.refresh_token),
            (this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken),
            { ...S, issuer: n?.issuer }
          );
      } catch (S) {
        se(this.serverName, `XAA silent exchange failed: ${d(S)}`);
      }
    }
    if (!n) {
      (se(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone());
      return;
    }
    if (!n.accessToken) {
      (se(this.serverName, "No access token in storage"),
        this.clearStepUpPendingOnCredentialGone());
      return;
    }
    ((this._lastServedAccessToken = n.accessToken),
      this._presented.record(n.accessToken),
      this._presented.record(n.refreshToken),
      (this._lastServedRefreshToken = n.refreshToken));
    let r = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1000 : void 0,
      h = this._pendingStepUpScope,
      l = h !== void 0;
    if (l) se(this.serverName, `Step-up pending (${MA("scope", h)}), omitting refresh_token`);
    if (r != null && r <= 0 && !n.refreshToken) {
      (se(this.serverName, "Token expired without refresh token"),
        this.clearStepUpPendingOnCredentialGone());
      return;
    }
    if (r != null && r <= 300 && n.refreshToken && !l) {
      if (!this._refreshInProgress)
        (se(this.serverName, `Token expires in ${Math.floor(r)}s, attempting proactive refresh`),
          (this._refreshInProgress = this.refreshAuthorization(n.refreshToken).finally(() => {
            this._refreshInProgress = void 0;
          })));
      else se(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let S = await this._refreshInProgress;
        if (S)
          return (
            se(this.serverName, "Token refreshed successfully"),
            (this._lastServedAccessToken = S.access_token),
            this._presented.record(S.access_token),
            this._presented.record(S.refresh_token),
            (this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken),
            { ...S, issuer: n?.issuer }
          );
        se(this.serverName, "Token refresh failed, returning current tokens");
      } catch (S) {
        se(this.serverName, `Token refresh error: ${xN(S, this.serverConfig.url)}`);
      }
    }
    let s = {
      access_token: n.accessToken,
      refresh_token: l ? void 0 : n.refreshToken,
      expires_in: r,
      scope: n.scope,
      token_type: "Bearer",
      issuer: n.issuer
    };
    return (
      se(this.serverName, "Returning tokens"),
      se(this.serverName, `Has refresh token: ${!!s.refresh_token}`),
      se(this.serverName, r != null ? `Expires in: ${Math.floor(r)}s` : "No expiration specified"),
      s
    );
  }
  async saveTokens(e) {
    (this._presented.record(e.access_token), this._presented.record(e.refresh_token));
    let t = e.access_token !== this._lastServedAccessToken,
      n = this._flowDiscoveryStateAt;
    if (t && this.handleRedirection) this._pendingStepUpScope = void 0;
    let r = td(this.serverName, this.serverConfig);
    (se(this.serverName, "Saving tokens"),
      se(this.serverName, `Token expires in: ${e.expires_in}`),
      se(this.serverName, `Has refresh token: ${!!e.refresh_token}`));
    let h =
        this._servedOverrideAuthorizationServerUrl === void 0
          ? this._discoveredAuthorizationServer
          : {
              authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
              oauthMetadataFound: !0
            },
      l = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      s,
      S;
    try {
      s = await Kn().mutate((v) => ({
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [r]: {
            ...v.mcpOAuth?.[r],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? v.mcpOAuth?.[r]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            issuer: e.issuer ?? v.mcpOAuth?.[r]?.issuer,
            discoveryState: mBn({
              previous: v.mcpOAuth?.[r]?.discoveryState,
              signIn: h,
              servedMetadataUrl: l,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }));
    } catch (v) {
      S = v;
    }
    if (s?.success)
      ((this._lastServedAccessToken = e.access_token),
        (this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken));
    if ((this.logTokenPersistFailed(s, S), t && this._flowDiscoveryStateAt === n))
      ((this._flowDiscoveryState = void 0), (this._flowDiscoveryStateAt = 0));
  }
  logTokenPersistFailed(e, t) {
    ze(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Hoe();
    if (!e) return;
    let t = await AUn(e.issuer);
    if (!t) {
      se(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let n = this.serverConfig.oauth?.clientId,
      r = await qCs(this.serverName, this.serverConfig);
    if (!n || !r?.clientSecret) {
      se(
        this.serverName,
        "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh"
      );
      return;
    }
    let h = await $Tr(e.issuer),
      l;
    try {
      l = await CUn(e.issuer);
    } catch (s) {
      se(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(s)}`);
      return;
    }
    this._presented.record(r.clientSecret);
    try {
      let s = await ke(
          this.serverConfig.url,
          {
            clientId: n,
            clientSecret: r.clientSecret,
            idpClientId: e.clientId,
            idpClientSecret: h,
            idpIdToken: t,
            idpTokenEndpoint: l.token_endpoint
          },
          this.serverName
        ),
        S = td(this.serverName, this.serverConfig),
        v,
        A;
      try {
        v = await Kn().mutate((y) => {
          let C = y.mcpOAuth?.[S];
          return {
            ...y,
            mcpOAuth: {
              ...y.mcpOAuth,
              [S]: {
                ...C,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? C?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : void 0,
                scope: s.scope,
                clientId: n,
                clientSecret: r.clientSecret,
                discoveryState: JDt({
                  previous: C?.discoveryState,
                  issuedBy: s.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          };
        });
      } catch (y) {
        A = y;
      }
      return (
        this.logTokenPersistFailed(v, A),
        {
          access_token: s.access_token,
          token_type: "Bearer",
          expires_in: s.expires_in,
          scope: s.scope,
          refresh_token: s.refresh_token
        }
      );
    } catch (s) {
      if (s instanceof q && s.shouldClearIdToken)
        (await NTr(e.issuer), se(this.serverName, "XAA: cleared id_token after exchange failure"));
      throw s;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope
        ? void 0
        : this.serverConfig.oauth?.scopes ||
          (this.serverConfig.oauth?.authServerMetadataUrl
            ? this.getCuratedMetadataScope()
            : void 0),
      n = e.searchParams.get("scope"),
      r = t ?? n;
    if (r !== n)
      se(
        this.serverName,
        `Overrode authorization scope from ${n ? MA("scope", n) : "NONE"} to configured: ${r ? MA("scope", r) : "NONE"}`
      );
    let h = r === null ? null : Dhi(r, this._metadata);
    if (h !== null && h !== n) {
      if ((e.searchParams.set("scope", h), h !== t))
        se(this.serverName, "Appended offline_access to authorization scope");
    }
    let l = Hhi(e),
      s = e.searchParams.getAll("prompt"),
      S = l ? s.filter((I) => I !== "consent") : s;
    if (S.length !== s.length || S.length > 1) {
      if ((e.searchParams.delete("prompt"), S.length > 0))
        e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (
      (se(this.serverName, `Authorization URL: ${GCs(e)}`),
      se(this.serverName, `Scopes in URL: ${v ? MA("scope", v) : "NOT FOUND"}`),
      v)
    )
      ((this._scopes = v),
        se(this.serverName, `Captured scopes from authorization URL: ${MA("scope", v)}`));
    else {
      let I = this.getCuratedMetadataScope();
      if (I)
        ((this._scopes = I), se(this.serverName, `Using scopes from metadata: ${MA("scope", I)}`));
      else se(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let I = td(this.serverName, this.serverConfig),
        P = this._scopes,
        W = !1;
      try {
        await Kn().mutate((T) => {
          let M = T.mcpOAuth?.[I];
          if (!M) return T;
          return ((W = !0), { ...T, mcpOAuth: { ...T.mcpOAuth, [I]: { ...M, stepUpScope: P } } });
        });
      } catch (T) {
        se(this.serverName, `step-up scope persist failed: ${d(T)}`);
      }
      if (W) se(this.serverName, `Persisted step-up scope: ${MA("scope", P)}`);
    }
    if (!this.handleRedirection) {
      se(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let A = e.toString();
    if (!A.startsWith("http://") && !A.startsWith("https://"))
      throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    se(this.serverName, "Redirecting to authorization URL");
    let y = GCs(e);
    if ((se(this.serverName, `Authorization URL: ${y}`), this.onAuthorizationUrlCallback))
      this.onAuthorizationUrlCallback(A);
    if (this.skipBrowserOpen) {
      se(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
      return;
    }
    let C = yV();
    if (C) se(this.serverName, `Skipping browser open (headless environment). URL: ${y}`);
    else se(this.serverName, `Opening authorization URL: ${y}`);
    let w = C ? !1 : await Js(A);
    if (
      (a("tengu_mcp_oauth_browser_open", { success: w, headless: C, platform: c(O()) }), !C && !w)
    )
      se(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(e) {
    (se(this.serverName, "Saving code verifier"), (this._codeVerifier = e));
  }
  async codeVerifier() {
    if (!this._codeVerifier)
      throw (se(this.serverName, "No code verifier saved"), Error("No code verifier saved"));
    return (
      se(this.serverName, "Returning code verifier"),
      this._presented.record(this._codeVerifier),
      this._codeVerifier
    );
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      ((this._codeVerifier = void 0),
        se(this.serverName, "Invalidated credentials (scope: verifier)"));
      return;
    }
    let t = e,
      n = td(this.serverName, this.serverConfig),
      r = !1;
    try {
      let h = this._lastServedClientId,
        l = this._lastServedAccessToken,
        s = this._lastServedRefreshToken;
      await Kn().mutate((S) => {
        let v = S.mcpOAuth?.[n];
        if (!v) return S;
        let A = { ...S.mcpOAuth };
        switch (t) {
          case "all": {
            let y = l != null && !!v.accessToken && v.accessToken !== l,
              C = h != null && v.clientId != null && v.clientId !== h;
            if (y || C)
              return (
                se(
                  this.serverName,
                  `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`
                ),
                S
              );
            if (!v.clientId && !v.refreshToken && v.accessToken === "") return S;
            A[n] = {
              serverName: v.serverName,
              serverUrl: v.serverUrl,
              accessToken: "",
              ...(v.discoveryState && { discoveryState: v.discoveryState }),
              ...(v.stepUpScope && { stepUpScope: v.stepUpScope })
            };
            break;
          }
          case "client":
            A[n] = { ...v, clientId: void 0, clientSecret: void 0 };
            break;
          case "tokens": {
            if (
              (s != null && v.refreshToken && v.refreshToken !== s) ||
              (l != null && !!v.accessToken && v.accessToken !== l)
            )
              return (
                se(
                  this.serverName,
                  "invalidateCredentials('tokens') preserved: concurrent rotation"
                ),
                S
              );
            A[n] = { ...v, accessToken: "", refreshToken: void 0, expiresAt: 0 };
            break;
          }
          case "discovery": {
            if (!v.discoveryState?.authorizationServerMetadata)
              return (
                se(
                  this.serverName,
                  "invalidateCredentials('discovery') preserved: concurrent URL-only re-save"
                ),
                S
              );
            A[n] = { ...v, discoveryState: yOe(v.discoveryState) };
            break;
          }
        }
        return ((r = !0), { ...S, mcpOAuth: A });
      });
    } catch (h) {
      se(this.serverName, `invalidateCredentials persist failed: ${d(h)}`);
    }
    if (r) se(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (e.authorizationServerMetadata)
      kUn({
        serverName: this.serverName,
        site: "sdk_auth",
        expectedIssuer: e.authorizationServerUrl,
        receivedIssuer: e.authorizationServerMetadata.issuer,
        serverConfig: this.serverConfig
      });
    ((this._flowDiscoveryState = e),
      (this._flowDiscoveryStateAt = Date.now()),
      (this._flowDiscoveryStateFromConfiguredUrl = !1));
    let t = td(this.serverName, this.serverConfig);
    se(this.serverName, `Saving discovery state (authServer: ${ho(e.authorizationServerUrl)})`);
    let n = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery =
      n !== void 0 &&
      (typeof n.registration_endpoint === "string" ||
        (n.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0));
    let r = {
        authorizationServerUrl: e.authorizationServerUrl,
        oauthMetadataFound: !!e.authorizationServerMetadata
      },
      h =
        (e.authorizationServerMetadata !== void 0
          ? this._servedOverrideDocuments.get(e.authorizationServerMetadata)
          : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = { ...r, servedMetadataUrl: h };
    try {
      await Kn().mutate((l) => {
        let s = pBn({
          previous: l.mcpOAuth?.[t]?.discoveryState,
          discovered: r,
          servedMetadataUrl: h
        });
        return {
          ...l,
          mcpOAuth: {
            ...l.mcpOAuth,
            [t]: {
              ...l.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: l.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: l.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...s,
                resourceMetadataUrl: e.resourceMetadataUrl,
                registrationNotOfferedAt:
                  n === void 0
                    ? l.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt
                    : typeof n.registration_endpoint !== "string" &&
                        n.client_id_metadata_document_supported !== !0
                      ? Date.now()
                      : void 0
              }
            }
          }
        };
      });
    } catch (l) {
      se(this.serverName, `saveDiscoveryState persist failed: ${d(l)}`);
    }
  }
  servePolicyCheckedDiscoveryState(e) {
    if (e?.authorizationServerMetadata && e.authorizationServerUrl)
      try {
        kUn({
          serverName: this.serverName,
          site: "persisted_state",
          expectedIssuer: e.authorizationServerUrl,
          receivedIssuer: e.authorizationServerMetadata.issuer,
          serverConfig: this.serverConfig
        });
      } catch (t) {
        if (t instanceof h4 && this._flowDiscoveryState === e)
          ((this._flowDiscoveryState = void 0), (this._flowDiscoveryStateAt = 0));
        throw t;
      }
    return e;
  }
  servedMetadataUrl() {
    return this._servedOverrideAuthorizationServerUrl === void 0
      ? void 0
      : this.serverConfig.oauth?.authServerMetadataUrl;
  }
  async discoveryState() {
    this._servedOverrideAuthorizationServerUrl = void 0;
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (this.authChallengeOpen) await this.readCredentialStore();
    if (e) {
      se(this.serverName, `Fetching metadata from configured URL: ${ho(e)}`);
      try {
        let s = await fe(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
          fetchFn: Eme(this.serverName, this.serverConfig, Fen())
        });
        if (s) {
          let S = { authorizationServerUrl: s.issuer, authorizationServerMetadata: s };
          return (
            (this._servedOverrideAuthorizationServerUrl = s.issuer),
            this._servedOverrideDocuments.set(s, e),
            (this._flowDiscoveryState = S),
            (this._flowDiscoveryStateFromConfiguredUrl = !0),
            this.servePolicyCheckedDiscoveryState(S)
          );
        }
      } catch (s) {
        se(
          this.serverName,
          `Failed to fetch from configured metadata URL: ${xN(s, this.serverConfig.url)}`
        );
      }
      if (this._flowDiscoveryStateFromConfiguredUrl)
        this._servedOverrideAuthorizationServerUrl =
          this._flowDiscoveryState?.authorizationServerUrl;
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    if (this._flowDiscoveryState && Date.now() - this._flowDiscoveryStateAt < be)
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let t = this._flowDiscoveryStateAt,
      r = await Kn().readAsync();
    if (
      this._flowDiscoveryState &&
      this._flowDiscoveryStateAt !== t &&
      Date.now() - this._flowDiscoveryStateAt < be
    )
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let h = td(this.serverName, this.serverConfig),
      l = r?.mcpOAuth?.[h]?.discoveryState;
    if (l?.authorizationServerUrl) {
      se(
        this.serverName,
        `Returning cached discovery state (authServer: ${ho(l.authorizationServerUrl)})`
      );
      let s = {
        authorizationServerUrl: l.authorizationServerUrl,
        resourceMetadataUrl: l.resourceMetadataUrl,
        resourceMetadata: l.resourceMetadata,
        authorizationServerMetadata: l.authorizationServerMetadata
      };
      try {
        this.servePolicyCheckedDiscoveryState(s);
      } catch (S) {
        if (S instanceof h4) {
          if (
            (await this.invalidateCredentials("discovery").catch(() => {}),
            this._flowDiscoveryStateAt === t)
          )
            ((this._flowDiscoveryState = void 0), (this._flowDiscoveryStateAt = 0));
        }
        throw S;
      }
      return ((this._flowDiscoveryStateFromConfiguredUrl = !1), (this._flowDiscoveryState = s));
    }
    return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
  }
  async refreshAuthorization(e) {
    if (J()) {
      se(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let t = td(this.serverName, this.serverConfig),
      n = O0();
    await ie().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"),
      h = nt(n, `mcp-refresh-${r}.lock`),
      l;
    for (let s = 0; s < Ae; s++)
      try {
        (se(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`),
          (l = await vl(h, {
            realpath: !1,
            stale: 60000,
            update: 5000,
            onCompromised: () => {
              se(this.serverName, "Refresh lock was compromised");
            }
          })),
          se(this.serverName, "Acquired refresh lock"));
        break;
      } catch (S) {
        let v = E(S);
        if (v === "ELOCKED") {
          (se(
            this.serverName,
            `Refresh lock held by another process, waiting (attempt ${s + 1}/${Ae})`
          ),
            await X(1000 + Math.random() * 1000));
          continue;
        }
        se(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
        return;
      }
    if (!l) {
      se(this.serverName, `Could not acquire refresh lock after ${Ae} retries; skipping refresh`);
      return;
    }
    try {
      X5();
      let v = (await Kn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let A = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1000 : void 0;
        if (v.accessToken && (A == null || A > 300))
          return (
            se(
              this.serverName,
              A != null
                ? `Another process already refreshed tokens (expires in ${Math.floor(A)}s)`
                : "Another process already refreshed tokens (no expiration)"
            ),
            {
              access_token: v.accessToken,
              refresh_token: v.refreshToken,
              expires_in: A,
              scope: v.scope,
              token_type: "Bearer"
            }
          );
        if (v.refreshToken)
          ((e = v.refreshToken),
            (this._lastServedRefreshToken = v.refreshToken),
            this._presented.record(v.refreshToken));
      }
      return await this._doRefresh(e);
    } finally {
      if (l)
        try {
          (await l(), se(this.serverName, "Released refresh lock"));
        } catch {
          se(this.serverName, "Failed to release refresh lock");
        }
    }
  }
  async readConcurrentRefreshWinner() {
    X5();
    let t = (await Kn().readAsync())?.mcpOAuth?.[td(this.serverName, this.serverConfig)],
      n = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (n == null || n > 300)) {
      se(this.serverName, "Another process landed fresh tokens; using those");
      let r = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: n,
        scope: t.scope,
        token_type: "Bearer"
      };
      return { tokenData: t, freshTokens: r };
    }
    return { tokenData: t, freshTokens: void 0 };
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3,
      n = Ak(this.serverConfig),
      r = (h, l) => {
        a(h === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: c(this.serverConfig.type),
          ...(n && { mcpServerBaseUrl: n }),
          ...(l && { reason: c(l) })
        });
      };
    for (let h = 1; h <= t; h++) {
      let l;
      try {
        se(this.serverName, "Starting token refresh");
        let s = Eme(this.serverName, this.serverConfig, Fen()),
          S = le() ? "enforce" : "observe",
          v = this._metadataEchoMode === S ? this._metadata : void 0;
        if (!v) {
          let y = await this.discoveryState();
          if (y?.authorizationServerMetadata) v = y.authorizationServerMetadata;
          else if (y?.authorizationServerUrl) {
            se(
              this.serverName,
              `Re-discovering metadata from persisted auth server URL: ${ho(y.authorizationServerUrl)}`
            );
            let C = y.authorizationServerUrl;
            if (((v = await jDt(C, { fetchFn: s, skipIssuerValidation: !0 })), v))
              kUn({
                serverName: this.serverName,
                site: "refresh_rediscovery",
                expectedIssuer: C,
                receivedIssuer: v.issuer,
                serverConfig: this.serverConfig
              });
          }
        }
        if (!v)
          v = await fe(this.serverName, this.serverConfig.url, {
            configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
            fetchFn: s,
            serverConfigForAnalytics: this.serverConfig
          });
        if (!v) {
          (se(this.serverName, "Failed to discover OAuth metadata"),
            r("failure", "metadata_discovery_failed"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed"));
          return;
        }
        if (
          ((this._metadata = v),
          (this._metadataEchoMode = le() ? "enforce" : "observe"),
          (l = await this.clientInformation()),
          !l)
        ) {
          (se(this.serverName, "No client information available"),
            r("failure", "no_client_info"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info"));
          return;
        }
        let A = await bbo(new URL(this.serverConfig.url), {
          metadata: v,
          clientInformation: l,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: s
        });
        if (A)
          return (
            se(this.serverName, "Token refresh successful"),
            await this.saveTokens(A),
            r("success"),
            g("mcp_oauth_refresh"),
            A
          );
        (se(this.serverName, "Token refresh returned no tokens"),
          r("failure", "no_tokens_returned"),
          m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens"));
        return;
      } catch (s) {
        if (s instanceof h4) {
          (se(this.serverName, `Token refresh denied by issuer-echo policy: ${d(s)}`),
            r("failure", "issuer_echo_denied"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied"));
          return;
        }
        if (s instanceof y4 && s.code === Uae.InvalidGrant) {
          se(this.serverName, `Token refresh failed with invalid_grant: ${s.message}`);
          let { freshTokens: w } = await this.readConcurrentRefreshWinner();
          if (w) return (f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), w);
          (se(this.serverName, "No valid tokens in storage, clearing stored tokens"),
            r("failure", "invalid_grant"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"),
            await this.invalidateCredentials("tokens"),
            Fme.emit(this.serverName));
          return;
        }
        if (s instanceof y4 && (s.code === "invalid_client" || s.code === "unauthorized_client")) {
          se(
            this.serverName,
            "Token refresh failed: DCR client expired or invalid; clearing stored client registration"
          );
          let { tokenData: w, freshTokens: I } = await this.readConcurrentRefreshWinner();
          if (I) return (f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), I);
          if (w?.clientId && l && w.clientId !== l.client_id) {
            (se(this.serverName, "Another process re-registered client; preserving"),
              r("failure", "concurrent_reregister"),
              f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister"));
            return;
          }
          (r(
            "failure",
            s.code === "unauthorized_client" ? "unauthorized_client" : "invalid_client"
          ),
            m(
              "mcp_oauth_refresh",
              s.code === "unauthorized_client"
                ? "mcp_oauth_refresh_unauthorized_client"
                : "mcp_oauth_refresh_invalid_client"
            ),
            await this.invalidateCredentials("all"),
            Fme.emit(this.serverName));
          return;
        }
        if (ye(s)) {
          (se(
            this.serverName,
            `Token refresh failed: token response rejected by SDK schema: ${d(s)}`
          ),
            r("failure", "token_response_schema_rejected"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected"));
          return;
        }
        let S = s instanceof q0e,
          v = s instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(s.message),
          A =
            s instanceof y4 &&
            (s.code === Uae.ServerError ||
              s.code === Uae.TemporarilyUnavailable ||
              s.code === Uae.TooManyRequests ||
              !ut.has(s.code)),
          y = v || A || S;
        if (!y || h >= t) {
          (se(this.serverName, `Token refresh failed: ${xN(s, this.serverConfig.url)}`),
            r("failure", y ? "transient_retries_exhausted" : "request_failed"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed"));
          return;
        }
        let C = 1000 * Math.pow(2, h - 1);
        (se(this.serverName, `Token refresh failed, retrying in ${C}ms (attempt ${h}/${t})`),
          await X(C));
      }
    }
    return;
  }
}
async function VAi() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY)
    throw Error(
      "No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead."
    );
  return new Promise((t, n) => {
    (process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0));
    let r = "",
      h = (l) => {
        let s = l.toString();
        if (
          s ===
            `
` ||
          s === "\r"
        )
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", h),
            process.stderr.write(`
`),
            t(r));
        else if (s === "\x03")
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", h),
            n(Error("Cancelled")));
        else if (s === "\x7F" || s === "\b") r = r.slice(0, -1);
        else r += s;
      };
    process.stdin.on("data", h);
  });
}
async function qAi(e, t, n) {
  let r = td(e, t);
  try {
    return await Kn().mutate((h) => ({
      ...h,
      mcpOAuthClientConfig: { ...h.mcpOAuthClientConfig, [r]: { clientSecret: n } }
    }));
  } catch (h) {
    return { success: !1, warning: d(h) };
  }
}
async function YAi(e, t) {
  let n = td(e, t);
  await Kn().mutate((r) => {
    if (!r.mcpOAuthClientConfig?.[n]) return r;
    let h = { ...r.mcpOAuthClientConfig };
    return (delete h[n], { ...r, mcpOAuthClientConfig: h });
  });
}
async function qCs(e, t) {
  let r = await Kn().readAsync(),
    h = td(e, t);
  return r?.mcpOAuthClientConfig?.[h];
}
function Le(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Dhi(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var St = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn"
  ],
  kt = [".b2clogin.com", ".ciamlogin.com"];
function Hhi(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return St.includes(t) || kt.some((n) => t.endsWith(n));
  } catch {
    return !1;
  }
}
export {
  Ohi,
  Mhi,
  GCs,
  zCs,
  Fen,
  h4,
  kUn,
  KCs,
  Uen,
  BAi,
  jAi,
  WAi,
  LTr,
  GAi,
  zAi,
  KAi,
  VCs,
  pbo,
  TUn,
  Ben,
  VAi,
  qAi,
  YAi,
  qCs,
  Dhi,
  Hhi
};

//# sourceMappingURL=chunk-x436erds.js.map
