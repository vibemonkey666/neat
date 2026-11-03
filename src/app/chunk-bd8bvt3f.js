// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  FFn,
  Xkr,
  Jkr,
  ZI,
  Jut,
  XBe,
  JZt,
  QZt,
  eO,
  Nae,
  iOe,
  Qkr,
  hDt,
  zyo,
  Vyo
} from "./chunk-xkhy2efq.js";
import { Ht } from "./chunk-ddpw2j06.js";
import { J } from "./chunk-wrtp8qz8.js";
import { b, c, ce, Wq } from "./chunk-acd8w9vv.js";
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
import { xt } from "./chunk-qakn3b85.js";
import { Fme } from "./chunk-2f82hv4z.js";
import { p } from "./chunk-qmkm2x59.js";
import { q0e, Unt, xj, Hoe, Noe, td } from "./chunk-ajtyjx88.js";
import { AN } from "./chunk-tpjq0nvg.js";
import { qh, ZDt, TN } from "./chunk-w1mqqc2v.js";
import { Wme, V1n, MA, ho, xN, PN } from "./chunk-tbj8hqy2.js";
import { Ak } from "./chunk-j0tbz6ra.js";
import { NHn, aSr, lSr, $Hn, _co } from "./chunk-3kg2jnyz.js";
import { yOe, pBn, mBn, JDt, Eme, gBn, hBn, yBn } from "./chunk-pqth9145.js";
import { t9e, bOe } from "./chunk-bw100rmb.js";
import { yV, Js } from "./chunk-6jn0brsm.js";
import { g$e } from "./chunk-vt31n0jt.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { _e } from "./chunk-n8wdmnah.js";
import { randomBytes as Je, randomUUID as Ve } from "crypto";
import { createServer as Ye } from "http";
import { join as Ze } from "path";
import { parse as Qe } from "url";
var Le = 30000,
  ze = "urn:ietf:params:oauth:grant-type:token-exchange",
  Ue = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  Ce = "urn:ietf:params:oauth:token-type:id-jag",
  De = "urn:ietf:params:oauth:token-type:id_token";
function Oe(e) {
  return (t, r) => {
    let n = AbortSignal.timeout(Le),
      l = e ? AbortSignal.any([n, e]) : n;
    return fetch(t, { ...r, ...oa({ url: String(t) }), signal: l }).catch((h) => PN(h, t));
  };
}
var de = Oe();
function ae(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
class G extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    ((this.name = "XaaTokenExchangeError"), (this.shouldClearIdToken = t));
  }
}
var Xe =
  /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function ne(e) {
  return (typeof e === "string" ? e : _(e)).replace(Xe, (r, n) => `"${n}":"[REDACTED]"`);
}
var He = p(() =>
    u({
      access_token: o().optional(),
      issued_token_type: o().optional(),
      expires_in: g$e().optional(),
      scope: o().optional()
    })
  ),
  je = p(() =>
    u({
      access_token: o().min(1),
      token_type: o().default("Bearer"),
      expires_in: g$e().optional(),
      scope: o().optional(),
      refresh_token: o().optional()
    })
  );
async function Be(e, t) {
  let r;
  try {
    r = await Qkr(e, void 0, t?.fetchFn ?? de);
  } catch (n) {
    if (Ke(n)) throw n;
    let l = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw Error(
      `XAA: PRM discovery failed for ${ho(e)} (${l ? `HTTP ${l}` : n instanceof Error ? n.name : typeof n})`
    );
  }
  if (!r.resource || !r.authorization_servers?.[0])
    throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ae(r.resource) !== ae(e))
    throw Error(
      `XAA: PRM discovery failed: PRM resource mismatch: expected ${ho(e)}, got ${ho(r.resource)}`
    );
  return { resource: r.resource, authorization_servers: r.authorization_servers };
}
async function We(e, t) {
  let r;
  try {
    r = await hDt(e, { fetchFn: t?.fetchFn ?? de });
  } catch (n) {
    if (Ke(n)) throw n;
    let l = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw new R(
      `XAA: AS metadata discovery failed (${l ? `HTTP ${l}` : n instanceof Error ? n.name : typeof n})`,
      "XAA: AS metadata discovery failed"
    );
  }
  if (!r?.issuer || !r.token_endpoint)
    throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${ho(e)}`);
  if (ae(r.issuer) !== ae(e))
    throw Error(
      `XAA: AS metadata discovery failed: issuer mismatch: expected ${ho(e)}, got ${ho(r.issuer)}`
    );
  if (!URL.canParse(r.token_endpoint) || new URL(r.token_endpoint).protocol !== "https:")
    throw Error(`XAA: refusing non-HTTPS token endpoint: ${ho(r.token_endpoint)}`);
  return {
    issuer: r.issuer,
    token_endpoint: r.token_endpoint,
    grant_types_supported: r.grant_types_supported,
    token_endpoint_auth_methods_supported: r.token_endpoint_auth_methods_supported
  };
}
async function Ge(e) {
  let t = e.fetchFn ?? de,
    r = new URLSearchParams({
      grant_type: ze,
      requested_token_type: Ce,
      audience: e.audience,
      resource: e.resource,
      subject_token: e.idToken,
      subject_token_type: De,
      client_id: e.clientId
    });
  if (e.clientSecret) r.set("client_secret", e.clientSecret);
  if (e.scope) r.set("scope", e.scope);
  let n = await t(e.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: r
  });
  if (!n.ok) {
    let k = ne(await n.text()).slice(0, 200),
      v = n.status < 500;
    throw new G(`XAA: token exchange failed: HTTP ${n.status}: ${k}`, v);
  }
  let l;
  try {
    l = await n.json();
  } catch {
    throw new G(
      `XAA: token exchange returned non-JSON (captive portal?) at ${ho(e.tokenEndpoint)}`,
      !1
    );
  }
  let h = He().safeParse(l);
  if (!h.success)
    throw new G(`XAA: token exchange response did not match expected shape: ${ne(l)}`, !0);
  let s = h.data;
  if (!s.access_token)
    throw new G(`XAA: token exchange response missing access_token: ${ne(s)}`, !0);
  if (s.issued_token_type !== Ce)
    throw new G(
      `XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`,
      !0
    );
  return { jwtAuthGrant: s.access_token, expiresIn: s.expires_in, scope: s.scope };
}
async function qe(e) {
  let t = e.fetchFn ?? de,
    r = e.authMethod ?? "client_secret_basic",
    n = new URLSearchParams({ grant_type: Ue, assertion: e.assertion });
  if (e.scope) n.set("scope", e.scope);
  let l = { "Content-Type": "application/x-www-form-urlencoded" };
  if (r === "client_secret_basic") {
    let v = Buffer.from(
      `${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`
    ).toString("base64");
    ((l.Authorization = `Basic ${v}`), qh().record(v));
  } else (n.set("client_id", e.clientId), n.set("client_secret", e.clientSecret));
  (qh().record(e.clientSecret), qh().record(e.assertion));
  let h = await t(e.tokenEndpoint, { method: "POST", headers: l, body: n });
  if (!h.ok) {
    let v = ne(await h.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${h.status}: ${v}`);
  }
  let s;
  try {
    s = await h.json();
  } catch {
    throw Error(
      `XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${ho(e.tokenEndpoint)}`
    );
  }
  let k = je().safeParse(s);
  if (!k.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${ne(s)}`);
  return k.data;
}
async function pe(e, t, r = "xaa", n) {
  let l = Oe(n);
  se(r, `XAA: discovering PRM for ${ho(e)}`);
  let h = await Be(e, { fetchFn: l });
  se(
    r,
    `XAA: discovered resource=${ho(h.resource)} ASes=[${h.authorization_servers.map(ho).join(", ")}]`
  );
  let s,
    k = [];
  for (let A of h.authorization_servers) {
    let U;
    try {
      U = await We(A, { fetchFn: l });
    } catch (I) {
      if (n?.aborted) throw I;
      k.push(`${ho(A)}: ${I instanceof Error ? I.message : String(I)}`);
      continue;
    }
    if (U.grant_types_supported && !U.grant_types_supported.includes(Ue)) {
      k.push(
        `${ho(A)}: does not advertise jwt-bearer grant (supported: ${U.grant_types_supported.join(", ")})`
      );
      continue;
    }
    s = U;
    break;
  }
  if (!s)
    throw new R(
      `XAA: no authorization server supports jwt-bearer. Tried: ${k.join("; ")}`,
      `XAA: no authorization server supports jwt-bearer (tried ${h.authorization_servers.length})`
    );
  let v = s.token_endpoint_auth_methods_supported,
    S =
      v && !v.includes("client_secret_basic") && v.includes("client_secret_post")
        ? "client_secret_post"
        : "client_secret_basic";
  (se(r, `XAA: AS issuer=${ho(s.issuer)} token_endpoint=${ho(s.token_endpoint)} auth_method=${S}`),
    se(r, "XAA: exchanging id_token for ID-JAG at IdP"));
  let y = await Ge({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: h.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: l
  });
  (se(r, "XAA: ID-JAG obtained"), se(r, "XAA: exchanging ID-JAG for access_token at AS"));
  let w = await qe({
    tokenEndpoint: s.token_endpoint,
    assertion: y.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: S,
    fetchFn: l
  });
  return (se(r, "XAA: access_token obtained"), { ...w, authorizationServerUrl: s.issuer });
}
var et = 30000,
  tt = 500,
  rt = new Set([...XV, ...aB, "ETIMEDOUT"]);
function nt(e) {
  if (Ke(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = Ym(e);
  return t !== null && rt.has(t.code);
}
function ge(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
var it = [
  "invalid_request",
  "invalid_client",
  "invalid_grant",
  "unauthorized_client",
  "unsupported_grant_type",
  "invalid_scope",
  "access_denied",
  "server_error",
  "temporarily_unavailable",
  "unsupported_response_type",
  "unsupported_token_type",
  "invalid_token",
  "method_not_allowed",
  "too_many_requests",
  "invalid_client_metadata",
  "insufficient_scope",
  "invalid_target",
  "authorization_pending",
  "expired_token",
  "slow_down"
];
function Bgi(e) {
  let t = it.find((r) => r === e);
  return ce(t) ?? b("other");
}
function jgi(e, t) {
  let r =
    t instanceof Error
      ? `${e}
${t.message}`
      : e;
  if (
    r.includes("dynamic client registration") ||
    (t instanceof ZI && t.errorCode === "invalid_client_metadata")
  )
    return "dcr_failed";
  if (
    (r.includes("trying to load") && r.includes("metadata")) ||
    r.includes("Incompatible auth server")
  )
    return "discovery_failed";
  if (t instanceof ZI) return "dcr_rejected";
  let n = E(t) ?? E(t instanceof Error ? t.cause : void 0);
  if (n && Unt.has(n)) return "network_failed";
  return "sdk_auth_failed";
}
var me = 5;
function mSs(e) {
  return ho(e.origin + e.pathname) + V1n(e);
}
var st = new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function gSs(e) {
  if (!e.ok) return e;
  let t = await e.text(),
    r;
  try {
    r = te(t);
  } catch {
    return new Response(t, e);
  }
  if (Xkr.safeParse(r).success) return new Response(t, e);
  let n = Jkr.safeParse(r);
  if (!n.success) return new Response(t, e);
  let l = st.has(n.data.error)
    ? {
        error: "invalid_grant",
        error_description:
          n.data.error_description ?? `Server returned non-standard error code: ${n.data.error}`
      }
    : n.data;
  return new Response(_(l), { status: 400, statusText: "Bad Request", headers: e.headers });
}
function AJt() {
  return async (e, t) => {
    try {
      return await Re(e, t);
    } catch (r) {
      if (t?.signal?.aborted || !nt(r)) throw r;
      return (await X(tt, t?.signal ?? void 0), await Re(e, t));
    }
  };
}
async function Re(e, t) {
  let r = AbortSignal.timeout(et),
    n = t?.method?.toUpperCase() === "POST",
    l = oa({ url: String(e) });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, { ...t, ...l, signal: r });
    } catch (S) {
      PN(S, e);
    }
    return n ? gSs(v) : v;
  }
  let h = new AbortController(),
    s = () => h.abort();
  (t.signal.addEventListener("abort", s), r.addEventListener("abort", s));
  let k = () => {
    (t.signal?.removeEventListener("abort", s), r.removeEventListener("abort", s));
  };
  if (t.signal.aborted) h.abort();
  try {
    let v = await fetch(e, { ...t, ...l, signal: h.signal });
    return (k(), n ? gSs(v) : v);
  } catch (v) {
    (k(), PN(v, e));
  }
}
async function ue(e, t, r) {
  let { configuredMetadataUrl: n, fetchFn: l, resourceMetadataUrl: h } = r ?? {},
    s = l ?? AJt();
  if (n) {
    if (!n.startsWith("https://"))
      throw Error(`authServerMetadataUrl must use https:// (got: ${ho(n)})`);
    let v = await s(n, { headers: { Accept: "application/json" } });
    if (v.ok) {
      let S;
      try {
        S = await v.json();
      } catch {
        throw Error(`Configured auth server metadata at ${ho(n)} is not valid JSON`);
      }
      return FFn.parse(S);
    }
    throw Error(`HTTP ${v.status} fetching configured auth server metadata from ${ho(n)}`);
  }
  try {
    let { authorizationServerMetadata: v } = await zyo(t, {
      fetchFn: s,
      ...(h && { resourceMetadataUrl: h })
    });
    if (v) return v;
  } catch (v) {
    se(e, `RFC 9728 discovery failed, falling back: ${xN(v, t)}`);
  }
  let k = new URL(t);
  if (k.pathname === "/") return;
  try {
    return await hDt(k, { fetchFn: s });
  } catch (v) {
    se(e, `Path-aware auth server discovery failed: ${xN(v, t)}`);
    return;
  }
}
class hSs extends eO {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError";
  }
}
class CJt extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}
function ve(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}
function Ie(e) {
  let t = ve(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}
function Ee(e) {
  if (!e?.clientId || !e.redirectUri || !Ie(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === t9e(t) ? t : void 0;
}
function Pe() {
  return i.MCP_OAUTH_CLIENT_METADATA_URL || sYe;
}
function be(e) {
  if (!Ie(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}
function ot(e) {
  return e !== void 0 && (e === sYe || e === Pe());
}
function sTi(e) {
  return xt().oauthCallbackSubmitters.get(e);
}
function iTi(e, t) {
  let r = xt().activeOAuthFlows;
  (r.set(e, t),
    t
      .finally(() => {
        if (r.get(e) === t) r.delete(e);
      })
      .catch(() => {}));
}
function aTi(e) {
  return xt().activeOAuthFlows.get(e);
}
async function iSr(e, t) {
  let r = td(e, t),
    n = (await Kn().readAsync())?.mcpOAuth?.[r];
  if (!n || n.accessToken || n.refreshToken) return;
  try {
    await Kn().mutate((l) => {
      let h = l.mcpOAuth?.[r];
      if (!h || h.accessToken || h.refreshToken) return l;
      let s = { ...l.mcpOAuth };
      return (delete s[r], { ...l, mcpOAuth: s });
    });
  } catch (l) {
    se(e, `clear tokenless stub failed: ${d(l)}`);
  }
}
async function Me({
  serverName: e,
  endpoint: t,
  token: r,
  tokenTypeHint: n,
  clientId: l,
  clientSecret: h,
  accessToken: s,
  authMethod: k = "client_secret_basic",
  configuredHeaders: v
}) {
  let S = new URLSearchParams();
  (S.set("token", r), S.set("token_type_hint", n));
  let y = { ...v, "Content-Type": "application/x-www-form-urlencoded" },
    w = Object.keys(v).length > 0 ? { beforeRedirect: hBn(t) } : {};
  if (l && h)
    if (k === "client_secret_post") (S.set("client_id", l), S.set("client_secret", h));
    else {
      let A = Buffer.from(`${encodeURIComponent(l)}:${encodeURIComponent(h)}`).toString("base64");
      ((y.Authorization = `Basic ${A}`), qh().record(A));
    }
  else if (l) S.set("client_id", l);
  else se(e, `No client_id available for ${n} revocation - server may reject`);
  try {
    (await Ht.post(t, S, { headers: y, ...w }), se(e, `Successfully revoked ${n}`));
  } catch (A) {
    if (Ht.isAxiosError(A) && A.response?.status === 401 && s)
      (se(e, `Got 401, retrying ${n} revocation with Bearer auth`),
        S.delete("client_id"),
        S.delete("client_secret"),
        await Ht.post(t, S, { headers: { ...y, Authorization: `Bearer ${s}` }, ...w }),
        se(e, `Successfully revoked ${n} with Bearer auth`));
    else throw A;
  }
}
async function lTi(e, t) {
  let n = (await Kn().readAsync())?.mcpOAuth?.[td(e, t)];
  if (!n?.accessToken && !n?.refreshToken) return;
  return {
    accessToken: n.accessToken || void 0,
    refreshToken: n.refreshToken,
    clientId: n.clientId,
    clientSecret: n.clientSecret,
    ...(n.discoveryState && { discoveryState: yOe(n.discoveryState) })
  };
}
async function xe(e, t, r) {
  let n = qh();
  (n.record(r.accessToken), n.record(r.refreshToken), n.record(r.clientSecret));
  let l;
  try {
    let h = r.discoveryState?.authorizationServerUrl ?? t.url,
      s = await ue(e, h, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: Eme(e, t, AJt())
      });
    if (!s) (se(e, "No OAuth metadata found"), (l = "no_metadata"));
    else {
      let k = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!k) (se(e, "Server does not support token revocation"), (l = "no_revocation_endpoint"));
      else {
        let v = String(k),
          S = await gBn(e, t, v),
          y =
            ("revocation_endpoint_auth_methods_supported" in s
              ? s.revocation_endpoint_auth_methods_supported
              : void 0) ??
            ("token_endpoint_auth_methods_supported" in s
              ? s.token_endpoint_auth_methods_supported
              : void 0),
          w =
            y && !y.includes("client_secret_basic") && y.includes("client_secret_post")
              ? "client_secret_post"
              : "client_secret_basic";
        if ((se(e, `Revoking tokens via ${ho(v)} (${w})`), r.refreshToken))
          try {
            await Me({
              serverName: e,
              endpoint: v,
              token: r.refreshToken,
              tokenTypeHint: "refresh_token",
              clientId: r.clientId,
              clientSecret: r.clientSecret,
              accessToken: r.accessToken,
              authMethod: w,
              configuredHeaders: S
            });
          } catch (A) {
            (se(e, `Failed to revoke refresh token: ${d(A)}`), (l = "server_revoke_failed"));
          }
        if (r.accessToken)
          try {
            await Me({
              serverName: e,
              endpoint: v,
              token: r.accessToken,
              tokenTypeHint: "access_token",
              clientId: r.clientId,
              clientSecret: r.clientSecret,
              accessToken: r.accessToken,
              authMethod: w,
              configuredHeaders: S
            });
          } catch (A) {
            (se(e, `Failed to revoke access token: ${d(A)}`), (l = "server_revoke_failed"));
          }
      }
    }
  } catch (h) {
    (se(e, `Failed to revoke tokens: ${d(h)}`), (l = "server_revoke_failed"));
  }
  return l;
}
async function dTi(e, t, r) {
  let n;
  try {
    let l = (await Kn().readAsync())?.mcpOAuth?.[td(e, t)],
      h = {
        ...r,
        accessToken: r.accessToken && r.accessToken !== l?.accessToken ? r.accessToken : void 0,
        refreshToken: r.refreshToken && r.refreshToken !== l?.refreshToken ? r.refreshToken : void 0
      };
    if (!h.accessToken && !h.refreshToken) {
      (se(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke"));
      return;
    }
    n = await xe(e, t, h);
  } catch (l) {
    (se(e, `Failed to revoke replaced tokens: ${d(l)}`), (n = "server_revoke_failed"));
  }
  if (n) f("mcp_oauth_revoke", n);
  else g("mcp_oauth_revoke");
}
async function cTi(e, t, { preserveStepUpState: r = !1 } = {}) {
  let n = Kn(),
    l = await n.readAsync();
  if (!l?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return;
  }
  let h = td(e, t),
    s = l.mcpOAuth[h],
    k;
  if (s?.accessToken || s?.refreshToken)
    k = await xe(e, t, {
      accessToken: s.accessToken || void 0,
      refreshToken: s.refreshToken,
      clientId: s.clientId,
      clientSecret: s.clientSecret,
      ...(s.discoveryState && { discoveryState: yOe(s.discoveryState) })
    });
  else se(e, "No tokens to revoke");
  try {
    if (r && s && (s.stepUpScope || s.discoveryState || s.clientId))
      (await n.mutate((v) => {
        let S = v.mcpOAuth?.[h];
        if (S?.accessToken !== s.accessToken || S?.clientId !== s.clientId) return v;
        return {
          ...v,
          mcpOAuth: {
            ...v.mcpOAuth,
            [h]: {
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
    else await ySs(e, t);
  } catch (v) {
    (se(e, `clear local tokens failed: ${d(v)}`), (k ??= "local_clear_failed"));
  }
  if ((TN(e), k)) f("mcp_oauth_revoke", k);
  else g("mcp_oauth_revoke");
}
async function ySs(e, t, r) {
  let n = td(e, t),
    l;
  if (
    (await Kn().mutate((h) => {
      let s = h.mcpOAuth?.[n];
      if (!s) return h;
      let k = { ...h.mcpOAuth };
      if (s.clientId && r?.preserveClientRegistration?.(s)) {
        if (!s.accessToken && !s.refreshToken) return h;
        ((k[n] = { ...s, accessToken: "", refreshToken: void 0, expiresAt: 0, scope: void 0 }),
          (l = "tokens"));
      } else (delete k[n], (l = "all"));
      return { ...h, mcpOAuth: k };
    }),
    l)
  )
    se(
      e,
      l === "tokens"
        ? "Cleared stored tokens (preserved client registration)"
        : "Cleared stored tokens"
    );
}
function $e(e, t, r, n) {
  if (r?.success) return;
  let l = n ? "mutate_rejected" : "storage_write_failed",
    h = n ? d(n) : (r?.warning ?? "storage write failed");
  se(e, `Token persist failed: ${h}`);
  let s = Ak(t);
  a("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...(s && { mcpServerBaseUrl: s }),
    reason: c(l)
  });
}
async function at(e, t, r, n, l) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let h = Hoe();
  if (!h)
    throw Error(
      "XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure."
    );
  let s = t.oauth?.clientId;
  if (!s) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let v = (await _Ss(e, t))?.clientSecret;
  if (!v) {
    let A = td(e, t),
      U = Object.keys((await Kn().readAsync())?.mcpOAuthClientConfig ?? {}),
      I = Wme(t.headers ?? {});
    throw (
      se(e, `XAA: secret lookup miss. wanted=${A} have=[${U.join(", ")}] configHeaders=${_(I)}`),
      Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`)
    );
  }
  se(e, "XAA: starting cross-app access flow");
  let S = await lSr(h.issuer),
    y = (await NHn(h.issuer)) !== void 0,
    w = "idp_login";
  try {
    let A;
    try {
      A = await _co({
        idpIssuer: h.issuer,
        idpClientId: h.clientId,
        idpClientSecret: S,
        callbackPort: h.callbackPort,
        onAuthorizationUrl: r,
        skipBrowserOpen: l,
        abortSignal: n
      });
    } catch (F) {
      if (n?.aborted) throw new CJt();
      throw F;
    }
    w = "discovery";
    let U = await $Hn(h.issuer);
    ((w = "token_exchange"), qh().record(v));
    let I;
    try {
      I = await pe(
        t.url,
        {
          clientId: s,
          clientSecret: v,
          idpClientId: h.clientId,
          idpClientSecret: S,
          idpIdToken: A,
          idpTokenEndpoint: U.token_endpoint
        },
        e,
        n
      );
    } catch (F) {
      if (n?.aborted) throw new CJt();
      let C = d(F);
      if (F instanceof G) {
        if (F.shouldClearIdToken)
          (await aSr(h.issuer), se(e, "XAA: cleared cached id_token after token-exchange failure"));
      } else if (
        C.includes("PRM discovery failed") ||
        C.includes("AS metadata discovery failed") ||
        C.includes("no authorization server supports jwt-bearer")
      )
        w = "discovery";
      else if (C.includes("jwt-bearer")) w = "jwt_bearer";
      throw F;
    }
    let B = td(e, t),
      T = qh();
    (T.record(I.access_token), T.record(I.refresh_token));
    let M, N;
    try {
      M = await Kn().mutate((F) => {
        let C = F.mcpOAuth?.[B];
        return {
          ...F,
          mcpOAuth: {
            ...F.mcpOAuth,
            [B]: {
              ...C,
              serverName: e,
              serverUrl: t.url,
              accessToken: I.access_token,
              refreshToken: I.refresh_token ?? C?.refreshToken,
              expiresAt: I.expires_in != null ? Date.now() + I.expires_in * 1000 : void 0,
              scope: I.scope,
              clientId: s,
              clientSecret: v,
              discoveryState: JDt({
                previous: C?.discoveryState,
                issuedBy: I.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (F) {
      N = F;
    }
    if (M?.success) se(e, "XAA: tokens saved");
    else $e(e, t, M, N);
    (a("tengu_mcp_oauth_flow_success", { authMethod: b("xaa"), idTokenCacheHit: y }),
      g("mcp_oauth_flow"));
  } catch (A) {
    if (A instanceof CJt) throw A;
    throw (
      m("mcp_oauth_flow", "mcp_oauth_xaa_failed"),
      a("tengu_mcp_oauth_flow_failure", {
        authMethod: b("xaa"),
        xaaFailureStage: c(w),
        idTokenCacheHit: y
      }),
      A
    );
  }
}
async function uTi(e, t, r, n, l) {
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
      await at(e, t, r, n, l?.skipBrowserOpen));
    return;
  }
  let h = Kn(),
    s = td(e, t),
    k = (await h.readAsync())?.mcpOAuth?.[s],
    v = k?.stepUpScope,
    S = k?.discoveryState?.resourceMetadataUrl,
    y = Ee(k),
    w;
  if (S)
    try {
      w = new URL(S);
    } catch {
      se(e, `Invalid cached resourceMetadataUrl: ${ho(S)}`);
    }
  let A = { scope: v, resourceMetadataUrl: w },
    U = Ve(),
    I = yBn(t, l?.redirectUri);
  a("tengu_mcp_oauth_flow_start", {
    flowAttemptId: _e(U),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...I,
    ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
  });
  let B = !1;
  try {
    let T = t.oauth?.callbackPort,
      M = !!l?.redirectUri,
      N = M ? 0 : (T ?? (await bOe(y))),
      F = l?.redirectUri ?? t9e(N);
    se(
      e,
      M
        ? `Using custom redirectUri: ${ho(F)} (no localhost listener)`
        : `Using redirect port: ${N}${T ? " (from config)" : y && N === y ? " (reusing registered port)" : ""}`
    );
    try {
      await ySs(e, t, { preserveClientRegistration: (L) => N === Ee(L) || L.redirectUri === F });
    } catch (L) {
      se(e, `clear stored credentials failed: ${d(L)}`);
    }
    let C = xt(),
      H = new AbortController();
    if (!M) (C.oauthCallbackListeners.get(N)?.abort(), C.oauthCallbackListeners.set(N, H));
    let K = new RJt(e, t, F, !0, r, l?.skipBrowserOpen),
      ke = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (A.scope && !ke) K.markStepUpPending(A.scope);
    let ee = Eme(e, t, AJt());
    try {
      let L = await ue(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: ee,
        resourceMetadataUrl: A.resourceMetadataUrl
      });
      if (L)
        (K.setMetadata(L),
          se(e, `Fetched OAuth metadata with scope: ${MA("scope", Ne(L) ?? "") || "NONE"}`));
    } catch (L) {
      se(e, `Failed to fetch OAuth metadata: ${xN(L, t.url)}`);
    }
    let W = await K.state(),
      P = null,
      z = null,
      q = null,
      Se = null,
      V = () => {
        if (P) (P.removeAllListeners(), P.on("error", () => {}), P.close(), (P = null));
        if (z) (clearTimeout(z), (z = null));
        if (q)
          (n?.removeEventListener("abort", q),
            H.signal.removeEventListener("abort", q),
            (q = null));
        if (C.oauthCallbackListeners.get(N) === H) C.oauthCallbackListeners.delete(N);
        if (C.oauthCallbackSubmitters.get(e) === Se) C.oauthCallbackSubmitters.delete(e);
        se(e, "MCP OAuth server cleaned up");
      },
      Ae = await new Promise((L, Fe) => {
        let oe = !1,
          ye = (x) => {
            if (oe) return;
            ((oe = !0), L(x));
          },
          Y = (x) => {
            if (oe) return;
            ((oe = !0), Fe(x));
          };
        if (
          ((q = () => {
            (V(), Y(new CJt()));
          }),
          n?.aborted || H.signal.aborted)
        ) {
          q();
          return;
        }
        (n?.addEventListener("abort", q), H.signal.addEventListener("abort", q));
        {
          let x = (D) => {
            try {
              let j = new URL(D),
                Q = j.searchParams.get("code"),
                he = j.searchParams.get("state"),
                Z = j.searchParams.get("error");
              if (!Q && !Z) return !1;
              if (he !== W)
                return (
                  se(e, "Ignoring manual callback URL whose state belongs to a different flow"),
                  !1
                );
              if (Z) {
                let re = j.searchParams.get("error_description") || "";
                return (V(), Y(Error(`OAuth error: ${Z} - ${re}`)), !0);
              }
              if (!Q) return !1;
              return (se(e, "Received auth code via manual callback URL"), V(), ye(Q), !0);
            } catch {
              return !1;
            }
          };
          ((Se = x), C.oauthCallbackSubmitters.set(e, x), l?.onWaitingForCallback?.(x, N, W));
        }
        let we = async () => {
          try {
            (se(e, "Starting SDK auth"), se(e, `Server URL: ${ho(t.url)}`));
            let x = await Nae(K, {
              serverUrl: t.url,
              scope: A.scope,
              resourceMetadataUrl: A.resourceMetadataUrl,
              fetchFn: ee
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
        if (M) we();
        else
          ((P = Ye((x, D) => {
            let j = Qe(x.url || "", !0);
            if (j.pathname === "/callback") {
              let Q = j.query.code,
                he = j.query.state,
                Z = j.query.error,
                re = j.query.error_description,
                Te = j.query.error_uri;
              if (he !== W) {
                (D.writeHead(400, { "Content-Type": "text/html" }),
                  D.end(
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
                (D.writeHead(200, { "Content-Type": "text/html" }),
                  D.end(
                    AN({
                      ok: !1,
                      heading: "Authentication failed",
                      message: "Close this tab and try again from Claude Code.",
                      detail: `${String(Z)}: ${re ?? ""}`
                    })
                  ),
                  V());
                let fe = `OAuth error: ${Z}`;
                if (re) fe += ` - ${re}`;
                if (Te) fe += ` (See: ${Te})`;
                Y(Error(fe));
                return;
              }
              if (Q)
                (D.writeHead(200, { "Content-Type": "text/html" }),
                  D.end(
                    AN({
                      ok: !0,
                      heading: "Authentication successful",
                      message: "You can close this tab and return to Claude Code."
                    })
                  ),
                  V(),
                  ye(Q));
            } else
              (D.writeHead(404, { "Content-Type": "text/html" }),
                D.end(
                  AN({
                    ok: !1,
                    heading: "Not found",
                    message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${ho(F)}.`
                  })
                ));
          })),
            P.on("error", (x) => {
              if ((V(), x.code === "EADDRINUSE")) {
                let D =
                  O() === "windows" ? `netstat -ano | findstr :${N}` : `lsof -ti:${N} -sTCP:LISTEN`;
                Y(
                  new R(
                    `OAuth callback port ${N} is already in use \u2014 another process may be holding it. ` +
                      `Run \`${D}\` to find it.`,
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
            P.listen(N, "127.0.0.1", () => void we()),
            P.unref());
        ((z = setTimeout(
          (x, D) => {
            (x(), D(new R("Authentication timeout", "Authentication timeout")));
          },
          300000,
          V,
          Y
        )),
          z.unref());
      });
    ((B = !0), se(e, "Completing auth flow with authorization code"), qh().record(Ae));
    let le = await Nae(K, {
      serverUrl: t.url,
      authorizationCode: Ae,
      resourceMetadataUrl: A.resourceMetadataUrl,
      fetchFn: Eme(e, t, AJt())
    });
    if ((se(e, `Auth result: ${le}`), le === "AUTHORIZED")) {
      let L = await K.tokens().catch(() => {
        return;
      });
      if ((se(e, `Tokens after auth: ${L ? "Present" : "Missing"}`), L))
        se(e, `Token expires_in: ${L.expires_in}`);
      (a("tengu_mcp_oauth_flow_success", {
        flowAttemptId: _e(U),
        transportType: c(t.type),
        ...I,
        ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
      }),
        g("mcp_oauth_flow"));
    } else throw new R("Unexpected auth result: " + le, "Unexpected auth result");
  } catch (T) {
    se(e, `Error during auth completion: ${xN(T, t.url)}`);
    let M = "unknown",
      N,
      F,
      C = d(T),
      H = T instanceof Error ? T.cause : void 0;
    if (T instanceof CJt) M = "cancelled";
    else if (/AADSTS\d/.test(C)) M = "entra_specific";
    else if (/redirect[_ ]uri/i.test(C)) M = "redirect_uri_mismatch";
    else if (B && (ge(T) || ge(H))) M = "token_response_schema_rejected";
    else if (B) M = "token_exchange_failed";
    else if (C.includes("Authentication timeout")) M = "timeout";
    else if (C.includes("OAuth error:")) M = "provider_denied";
    else if (
      C.includes("already in use") ||
      C.includes("EADDRINUSE") ||
      C.includes("callback server failed") ||
      C.includes("No available port")
    )
      M = "port_unavailable";
    else if (C.includes("SDK auth failed")) M = jgi(C, H);
    let K = (H instanceof Error ? H : T instanceof Error ? T : null)?.message.match(
      /^HTTP (\d{3})\b/
    );
    if (K) F = Number(K[1]);
    if (H instanceof ZI) N = H.errorCode;
    if (T instanceof ZI) {
      if (
        ((N = T.errorCode),
        T.errorCode === "invalid_client" || T.errorCode === "unauthorized_client")
      ) {
        let W = td(e, t);
        try {
          await Kn().mutate((P) => {
            let z = P.mcpOAuth?.[W];
            if (!z) return P;
            return {
              ...P,
              mcpOAuth: { ...P.mcpOAuth, [W]: { ...z, clientId: void 0, clientSecret: void 0 } }
            };
          });
        } catch (P) {
          se(e, `clear clientId failed: ${d(P)}`);
        }
      }
    }
    if (
      !/^OAuth error: access_denied(?: |$)/.test(C) &&
      (M === "timeout" || C.includes("OAuth error:"))
    ) {
      let W = td(e, t);
      await Kn()
        .mutate((P) => {
          let z = P.mcpOAuth?.[W];
          if (!z?.clientId || z.accessToken || z.refreshToken || z.clientId !== k?.clientId)
            return P;
          return {
            ...P,
            mcpOAuth: { ...P.mcpOAuth, [W]: { ...z, clientId: void 0, clientSecret: void 0 } }
          };
        })
        .catch((P) => se(e, `drop clientId failed: ${d(P)}`));
    }
    if (M !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    a("tengu_mcp_oauth_flow_error", {
      flowAttemptId: _e(U),
      reason: c(M),
      error_code: N === void 0 ? void 0 : Bgi(N),
      http_status: Wq(F),
      transportType: c(t.type),
      ...I,
      ...(Ak(t) && { mcpServerBaseUrl: Ak(t) })
    });
    let ee = xN(T, t.url);
    throw ee === d(T) ? T : Error(ee, { cause: T });
  }
}
function LHn(e, t) {
  return async (r, n) => {
    let l = await e(r, n);
    if (l.status === 401 || l.status === 403) t.sawAuthChallenge = !0;
    if (
      (t.noteServerAnswer(
        r,
        l.status === 401 || (l.status === 403 && iOe(l).error === "insufficient_scope")
      ),
      !new Headers(n?.headers).has("authorization"))
    )
      return l;
    if (l.status === 403) {
      let { error: h, scope: s } = iOe(l);
      if (h === "insufficient_scope" && s) t.markStepUpPending(s);
    } else if (l.status === 401) t.clearStepUpPending();
    return l;
  };
}
class RJt {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
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
  constructor(e, t, r = t9e(), n = !1, l, h) {
    ((this.serverName = e),
      (this.serverConfig = t),
      (this.redirectUri = r),
      (this.handleRedirection = n),
      (this.onAuthorizationUrlCallback = l),
      (this.skipBrowserOpen = h ?? !1),
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
    if (!be(this.redirectUri)) {
      se(
        this.serverName,
        `redirectUri ${ho(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`
      );
      return;
    }
    let e = Pe();
    if (e !== sYe) se(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e;
  }
  getCuratedMetadataScope() {
    let e = Ne(this._metadata);
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
    let r = this.serverConfig.url;
    if (String(e) === (URL.canParse(r) ? new URL(r).href : r)) this.authChallengeOpen = t;
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
      ((this._state = Je(32).toString("base64url")),
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
      r = e?.mcpOAuthClientConfig?.[t]?.clientSecret,
      n = this.serverConfig.oauth?.clientId,
      l = e?.mcpOAuth?.[t],
      h = this.handleRedirection && ot(l?.clientId) && !be(this.redirectUri);
    if (h) {
      if (
        (se(
          this.serverName,
          `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${ho(this.redirectUri)} \u2014 ${n ? "serving the configured client" : "registering via DCR"} instead`
        ),
        n)
      )
        await this.patchStoredClientEntry(
          t,
          { clientId: n, clientSecret: void 0, redirectUri: this.redirectUri },
          "stale CIMD client_id repair"
        );
    }
    if (l?.clientId && !h) {
      let s = l.redirectUri;
      if (
        this.handleRedirection &&
        (s ? ve(s) !== ve(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))
      ) {
        let k = s ? ho(s) : "localhost";
        if (!n) {
          se(
            this.serverName,
            `Cached client_id was registered for ${k}; current redirectUri is ${ho(this.redirectUri)} \u2014 forcing re-DCR`
          );
          return;
        }
        if (l.clientId !== n)
          return (
            se(
              this.serverName,
              `Stored client_id is stale and its redirectUri ${k} predates ${ho(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`
            ),
            await this.patchStoredClientEntry(
              t,
              { clientId: n, clientSecret: void 0, redirectUri: this.redirectUri },
              "stale client_id repair"
            ),
            (this._lastServedClientId = n),
            { client_id: n, client_secret: r }
          );
        (se(
          this.serverName,
          `Stored redirectUri ${k} predates ${ho(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`
        ),
          await this.patchStoredClientEntry(
            t,
            { redirectUri: this.redirectUri },
            "stored redirectUri convergence"
          ));
      }
      return (
        se(this.serverName, "Found client info"),
        (this._lastServedClientId = l.clientId),
        { client_id: l.clientId, client_secret: l.clientSecret ?? (l.clientId === n ? r : void 0) }
      );
    }
    if (n)
      return (
        se(this.serverName, "Using pre-configured client ID"),
        (this._lastServedClientId = n),
        { client_id: n, client_secret: r }
      );
    if (
      !this.handleRedirection &&
      this.registrationOfferedByDiscovery &&
      !l?.accessToken &&
      !l?.refreshToken
    )
      throw (
        se(
          this.serverName,
          "No client info found; deferring client registration to authentication time"
        ),
        new hSs(this.serverName)
      );
    se(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, r) {
    try {
      if (
        !(
          await Kn().mutate((l) => {
            let h = l.mcpOAuth?.[e];
            if (!h) return l;
            return { ...l, mcpOAuth: { ...l.mcpOAuth, [e]: { ...h, ...t } } };
          })
        )?.success
      )
        se(this.serverName, `${r} resolved unsuccessful`);
    } catch (n) {
      se(this.serverName, `${r} failed: ${d(n)}`);
    }
  }
  async saveClientInformation(e) {
    (this._presented.record(e.client_secret),
      this._presented.record(ZDt(e.client_id, e.client_secret)));
    let t = td(this.serverName, this.serverConfig);
    try {
      if (
        (
          await Kn().mutate((n) => ({
            ...n,
            mcpOAuth: {
              ...n.mcpOAuth,
              [t]: {
                ...n.mcpOAuth?.[t],
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                clientId: e.client_id,
                clientSecret: e.client_secret,
                redirectUri: this.redirectUri,
                accessToken: n.mcpOAuth?.[t]?.accessToken || "",
                expiresAt: n.mcpOAuth?.[t]?.expiresAt
              }
            }
          }))
        )?.success
      )
        this._lastServedClientId = e.client_id;
      else se(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (r) {
      se(this.serverName, `saveClientInformation persist failed: ${d(r)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(),
      t = td(this.serverName, this.serverConfig),
      r = e?.mcpOAuth?.[t];
    if (
      xj() &&
      this.serverConfig.oauth?.xaa &&
      !r?.refreshToken &&
      (!r?.accessToken || (r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300))
    ) {
      if (!this._refreshInProgress)
        (se(
          this.serverName,
          r
            ? "XAA: access_token expiring, attempting silent exchange"
            : "XAA: no access_token yet, attempting silent exchange"
        ),
          (this._refreshInProgress = this.xaaRefresh().finally(() => {
            this._refreshInProgress = void 0;
          })));
      try {
        let k = await this._refreshInProgress;
        if (k)
          return (
            (this._lastServedAccessToken = k.access_token),
            this._presented.record(k.access_token),
            this._presented.record(k.refresh_token),
            (this._lastServedRefreshToken = k.refresh_token ?? this._lastServedRefreshToken),
            k
          );
      } catch (k) {
        se(this.serverName, `XAA silent exchange failed: ${d(k)}`);
      }
    }
    if (!r) {
      (se(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone());
      return;
    }
    if (!r.accessToken) {
      (se(this.serverName, "No access token in storage"),
        this.clearStepUpPendingOnCredentialGone());
      return;
    }
    ((this._lastServedAccessToken = r.accessToken),
      this._presented.record(r.accessToken),
      this._presented.record(r.refreshToken),
      (this._lastServedRefreshToken = r.refreshToken));
    let n = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : void 0,
      l = this._pendingStepUpScope,
      h = l !== void 0;
    if (h) se(this.serverName, `Step-up pending (${MA("scope", l)}), omitting refresh_token`);
    if (n != null && n <= 0 && !r.refreshToken) {
      (se(this.serverName, "Token expired without refresh token"),
        this.clearStepUpPendingOnCredentialGone());
      return;
    }
    if (n != null && n <= 300 && r.refreshToken && !h) {
      if (!this._refreshInProgress)
        (se(this.serverName, `Token expires in ${Math.floor(n)}s, attempting proactive refresh`),
          (this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(() => {
            this._refreshInProgress = void 0;
          })));
      else se(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let k = await this._refreshInProgress;
        if (k)
          return (
            se(this.serverName, "Token refreshed successfully"),
            (this._lastServedAccessToken = k.access_token),
            this._presented.record(k.access_token),
            this._presented.record(k.refresh_token),
            (this._lastServedRefreshToken = k.refresh_token ?? this._lastServedRefreshToken),
            k
          );
        se(this.serverName, "Token refresh failed, returning current tokens");
      } catch (k) {
        se(this.serverName, `Token refresh error: ${xN(k, this.serverConfig.url)}`);
      }
    }
    let s = {
      access_token: r.accessToken,
      refresh_token: h ? void 0 : r.refreshToken,
      expires_in: n,
      scope: r.scope,
      token_type: "Bearer"
    };
    return (
      se(this.serverName, "Returning tokens"),
      se(this.serverName, `Has refresh token: ${!!s.refresh_token}`),
      se(this.serverName, n != null ? `Expires in: ${Math.floor(n)}s` : "No expiration specified"),
      s
    );
  }
  async saveTokens(e) {
    if (
      (this._presented.record(e.access_token),
      this._presented.record(e.refresh_token),
      this.handleRedirection)
    )
      this._pendingStepUpScope = void 0;
    let t = td(this.serverName, this.serverConfig);
    (se(this.serverName, "Saving tokens"),
      se(this.serverName, `Token expires in: ${e.expires_in}`),
      se(this.serverName, `Has refresh token: ${!!e.refresh_token}`));
    let r =
        this._servedOverrideAuthorizationServerUrl === void 0
          ? this._discoveredAuthorizationServer
          : {
              authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
              oauthMetadataFound: !0
            },
      n = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl,
      l,
      h;
    try {
      l = await Kn().mutate((s) => ({
        ...s,
        mcpOAuth: {
          ...s.mcpOAuth,
          [t]: {
            ...s.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? s.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : void 0,
            scope: e.scope,
            discoveryState: mBn({
              previous: s.mcpOAuth?.[t]?.discoveryState,
              signIn: r,
              servedMetadataUrl: n,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }));
    } catch (s) {
      h = s;
    }
    if (l?.success)
      ((this._lastServedAccessToken = e.access_token),
        (this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken));
    this.logTokenPersistFailed(l, h);
  }
  logTokenPersistFailed(e, t) {
    $e(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = Hoe();
    if (!e) return;
    let t = await NHn(e.issuer);
    if (!t) {
      se(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let r = this.serverConfig.oauth?.clientId,
      n = await _Ss(this.serverName, this.serverConfig);
    if (!r || !n?.clientSecret) {
      se(
        this.serverName,
        "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh"
      );
      return;
    }
    let l = await lSr(e.issuer),
      h;
    try {
      h = await $Hn(e.issuer);
    } catch (s) {
      se(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${d(s)}`);
      return;
    }
    this._presented.record(n.clientSecret);
    try {
      let s = await pe(
          this.serverConfig.url,
          {
            clientId: r,
            clientSecret: n.clientSecret,
            idpClientId: e.clientId,
            idpClientSecret: l,
            idpIdToken: t,
            idpTokenEndpoint: h.token_endpoint
          },
          this.serverName
        ),
        k = td(this.serverName, this.serverConfig),
        v,
        S;
      try {
        v = await Kn().mutate((y) => {
          let w = y.mcpOAuth?.[k];
          return {
            ...y,
            mcpOAuth: {
              ...y.mcpOAuth,
              [k]: {
                ...w,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? w?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : void 0,
                scope: s.scope,
                clientId: r,
                clientSecret: n.clientSecret,
                discoveryState: JDt({
                  previous: w?.discoveryState,
                  issuedBy: s.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          };
        });
      } catch (y) {
        S = y;
      }
      return (
        this.logTokenPersistFailed(v, S),
        {
          access_token: s.access_token,
          token_type: "Bearer",
          expires_in: s.expires_in,
          scope: s.scope,
          refresh_token: s.refresh_token
        }
      );
    } catch (s) {
      if (s instanceof G && s.shouldClearIdToken)
        (await aSr(e.issuer), se(this.serverName, "XAA: cleared id_token after exchange failure"));
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
      r = e.searchParams.get("scope"),
      n = t ?? r;
    if (n !== r)
      se(
        this.serverName,
        `Overrode authorization scope from ${r ? MA("scope", r) : "NONE"} to configured: ${n ? MA("scope", n) : "NONE"}`
      );
    let l = n === null ? null : Wgi(n, this._metadata);
    if (l !== null && l !== r) {
      if ((e.searchParams.set("scope", l), l !== t))
        se(this.serverName, "Appended offline_access to authorization scope");
    }
    let h = Ggi(e),
      s = e.searchParams.getAll("prompt"),
      k = h ? s.filter((U) => U !== "consent") : s;
    if (k.length !== s.length || k.length > 1) {
      if ((e.searchParams.delete("prompt"), k.length > 0))
        e.searchParams.set("prompt", k.includes("consent") ? "consent" : k.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (
      (se(this.serverName, `Authorization URL: ${mSs(e)}`),
      se(this.serverName, `Scopes in URL: ${v ? MA("scope", v) : "NOT FOUND"}`),
      v)
    )
      ((this._scopes = v),
        se(this.serverName, `Captured scopes from authorization URL: ${MA("scope", v)}`));
    else {
      let U = this.getCuratedMetadataScope();
      if (U)
        ((this._scopes = U), se(this.serverName, `Using scopes from metadata: ${MA("scope", U)}`));
      else se(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let U = td(this.serverName, this.serverConfig),
        I = this._scopes,
        B = !1;
      try {
        await Kn().mutate((T) => {
          let M = T.mcpOAuth?.[U];
          if (!M) return T;
          return ((B = !0), { ...T, mcpOAuth: { ...T.mcpOAuth, [U]: { ...M, stepUpScope: I } } });
        });
      } catch (T) {
        se(this.serverName, `step-up scope persist failed: ${d(T)}`);
      }
      if (B) se(this.serverName, `Persisted step-up scope: ${MA("scope", I)}`);
    }
    if (!this.handleRedirection) {
      se(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let S = e.toString();
    if (!S.startsWith("http://") && !S.startsWith("https://"))
      throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    se(this.serverName, "Redirecting to authorization URL");
    let y = mSs(e);
    if ((se(this.serverName, `Authorization URL: ${y}`), this.onAuthorizationUrlCallback))
      this.onAuthorizationUrlCallback(S);
    if (this.skipBrowserOpen) {
      se(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
      return;
    }
    let w = yV();
    if (w) se(this.serverName, `Skipping browser open (headless environment). URL: ${y}`);
    else se(this.serverName, `Opening authorization URL: ${y}`);
    let A = w ? !1 : await Js(S);
    if (
      (a("tengu_mcp_oauth_browser_open", { success: A, headless: w, platform: c(O()) }), !w && !A)
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
      r = td(this.serverName, this.serverConfig),
      n = !1;
    try {
      let l = this._lastServedClientId,
        h = this._lastServedAccessToken,
        s = this._lastServedRefreshToken;
      await Kn().mutate((k) => {
        let v = k.mcpOAuth?.[r];
        if (!v) return k;
        let S = { ...k.mcpOAuth };
        switch (t) {
          case "all": {
            let y = h != null && !!v.accessToken && v.accessToken !== h,
              w = l != null && v.clientId != null && v.clientId !== l;
            if (y || w)
              return (
                se(
                  this.serverName,
                  `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`
                ),
                k
              );
            if (!v.clientId && !v.refreshToken && v.accessToken === "") return k;
            S[r] = {
              serverName: v.serverName,
              serverUrl: v.serverUrl,
              accessToken: "",
              ...(v.discoveryState && { discoveryState: v.discoveryState }),
              ...(v.stepUpScope && { stepUpScope: v.stepUpScope })
            };
            break;
          }
          case "client":
            S[r] = { ...v, clientId: void 0, clientSecret: void 0 };
            break;
          case "tokens": {
            if (
              (s != null && v.refreshToken && v.refreshToken !== s) ||
              (h != null && !!v.accessToken && v.accessToken !== h)
            )
              return (
                se(
                  this.serverName,
                  "invalidateCredentials('tokens') preserved: concurrent rotation"
                ),
                k
              );
            S[r] = { ...v, accessToken: "", refreshToken: void 0, expiresAt: 0 };
            break;
          }
          case "discovery":
            S[r] = {
              ...v,
              discoveryState: v.discoveryState && yOe(v.discoveryState),
              stepUpScope: void 0
            };
            break;
        }
        return ((n = !0), { ...k, mcpOAuth: S });
      });
    } catch (l) {
      se(this.serverName, `invalidateCredentials persist failed: ${d(l)}`);
    }
    if (n) se(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    let t = td(this.serverName, this.serverConfig);
    se(this.serverName, `Saving discovery state (authServer: ${ho(e.authorizationServerUrl)})`);
    let r = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery =
      r !== void 0 &&
      (typeof r.registration_endpoint === "string" ||
        (r.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0));
    let n = {
        authorizationServerUrl: e.authorizationServerUrl,
        oauthMetadataFound: !!e.authorizationServerMetadata
      },
      l =
        (e.authorizationServerMetadata !== void 0
          ? this._servedOverrideDocuments.get(e.authorizationServerMetadata)
          : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = { ...n, servedMetadataUrl: l };
    try {
      await Kn().mutate((h) => {
        let s = pBn({
          previous: h.mcpOAuth?.[t]?.discoveryState,
          discovered: n,
          servedMetadataUrl: l
        });
        return {
          ...h,
          mcpOAuth: {
            ...h.mcpOAuth,
            [t]: {
              ...h.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: h.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: h.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...s,
                resourceMetadataUrl: e.resourceMetadataUrl,
                registrationNotOfferedAt:
                  r === void 0
                    ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt
                    : typeof r.registration_endpoint !== "string" &&
                        r.client_id_metadata_document_supported !== !0
                      ? Date.now()
                      : void 0
              }
            }
          }
        };
      });
    } catch (h) {
      se(this.serverName, `saveDiscoveryState persist failed: ${d(h)}`);
    }
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
        let h = await ue(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
          fetchFn: Eme(this.serverName, this.serverConfig, AJt())
        });
        if (h)
          return (
            (this._servedOverrideAuthorizationServerUrl = h.issuer),
            this._servedOverrideDocuments.set(h, e),
            { authorizationServerUrl: h.issuer, authorizationServerMetadata: h }
          );
      } catch (h) {
        se(
          this.serverName,
          `Failed to fetch from configured metadata URL: ${xN(h, this.serverConfig.url)}`
        );
      }
      return;
    }
    let r = await Kn().readAsync(),
      n = td(this.serverName, this.serverConfig),
      l = r?.mcpOAuth?.[n]?.discoveryState;
    if (l?.authorizationServerUrl)
      return (
        se(
          this.serverName,
          `Returning cached discovery state (authServer: ${ho(l.authorizationServerUrl)})`
        ),
        {
          authorizationServerUrl: l.authorizationServerUrl,
          resourceMetadataUrl: l.resourceMetadataUrl,
          resourceMetadata: l.resourceMetadata,
          authorizationServerMetadata: l.authorizationServerMetadata
        }
      );
    return;
  }
  async refreshAuthorization(e) {
    if (J()) {
      se(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let t = td(this.serverName, this.serverConfig),
      r = O0();
    await ie().mkdir(r);
    let n = t.replace(/[^a-zA-Z0-9]/g, "_"),
      l = Ze(r, `mcp-refresh-${n}.lock`),
      h;
    for (let s = 0; s < me; s++)
      try {
        (se(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`),
          (h = await vl(l, {
            realpath: !1,
            stale: 60000,
            update: 5000,
            onCompromised: () => {
              se(this.serverName, "Refresh lock was compromised");
            }
          })),
          se(this.serverName, "Acquired refresh lock"));
        break;
      } catch (k) {
        let v = E(k);
        if (v === "ELOCKED") {
          (se(
            this.serverName,
            `Refresh lock held by another process, waiting (attempt ${s + 1}/${me})`
          ),
            await X(1000 + Math.random() * 1000));
          continue;
        }
        se(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
        return;
      }
    if (!h) {
      se(this.serverName, `Could not acquire refresh lock after ${me} retries; skipping refresh`);
      return;
    }
    try {
      X5();
      let v = (await Kn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let S = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1000 : void 0;
        if (v.accessToken && (S == null || S > 300))
          return (
            se(
              this.serverName,
              S != null
                ? `Another process already refreshed tokens (expires in ${Math.floor(S)}s)`
                : "Another process already refreshed tokens (no expiration)"
            ),
            {
              access_token: v.accessToken,
              refresh_token: v.refreshToken,
              expires_in: S,
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
      if (h)
        try {
          (await h(), se(this.serverName, "Released refresh lock"));
        } catch {
          se(this.serverName, "Failed to release refresh lock");
        }
    }
  }
  async readConcurrentRefreshWinner() {
    X5();
    let t = (await Kn().readAsync())?.mcpOAuth?.[td(this.serverName, this.serverConfig)],
      r = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1000 : void 0;
    if (t?.accessToken && (r == null || r > 300)) {
      se(this.serverName, "Another process landed fresh tokens; using those");
      let n = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: r,
        scope: t.scope,
        token_type: "Bearer"
      };
      return { tokenData: t, freshTokens: n };
    }
    return { tokenData: t, freshTokens: void 0 };
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3,
      r = Ak(this.serverConfig),
      n = (l, h) => {
        a(l === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
          transportType: c(this.serverConfig.type),
          ...(r && { mcpServerBaseUrl: r }),
          ...(h && { reason: c(h) })
        });
      };
    for (let l = 1; l <= t; l++) {
      let h;
      try {
        se(this.serverName, "Starting token refresh");
        let s = Eme(this.serverName, this.serverConfig, AJt()),
          k = this._metadata;
        if (!k) {
          let S = await this.discoveryState();
          if (S?.authorizationServerMetadata) k = S.authorizationServerMetadata;
          else if (S?.authorizationServerUrl)
            (se(
              this.serverName,
              `Re-discovering metadata from persisted auth server URL: ${ho(S.authorizationServerUrl)}`
            ),
              (k = await hDt(S.authorizationServerUrl, { fetchFn: s })));
        }
        if (!k)
          k = await ue(this.serverName, this.serverConfig.url, {
            configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
            fetchFn: s
          });
        if (!k) {
          (se(this.serverName, "Failed to discover OAuth metadata"),
            n("failure", "metadata_discovery_failed"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed"));
          return;
        }
        if (((this._metadata = k), (h = await this.clientInformation()), !h)) {
          (se(this.serverName, "No client information available"),
            n("failure", "no_client_info"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info"));
          return;
        }
        let v = await Vyo(new URL(this.serverConfig.url), {
          metadata: k,
          clientInformation: h,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: s
        });
        if (v)
          return (
            se(this.serverName, "Token refresh successful"),
            await this.saveTokens(v),
            n("success"),
            g("mcp_oauth_refresh"),
            v
          );
        (se(this.serverName, "Token refresh returned no tokens"),
          n("failure", "no_tokens_returned"),
          m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens"));
        return;
      } catch (s) {
        if (s instanceof Jut) {
          se(this.serverName, `Token refresh failed with invalid_grant: ${s.message}`);
          let { freshTokens: A } = await this.readConcurrentRefreshWinner();
          if (A) return (f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), A);
          (se(this.serverName, "No valid tokens in storage, clearing stored tokens"),
            n("failure", "invalid_grant"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"),
            await this.invalidateCredentials("tokens"),
            Fme.emit(this.serverName));
          return;
        }
        if (
          s instanceof ZI &&
          (s.errorCode === "invalid_client" || s.errorCode === "unauthorized_client")
        ) {
          se(
            this.serverName,
            "Token refresh failed: DCR client expired or invalid; clearing stored client registration"
          );
          let { tokenData: A, freshTokens: U } = await this.readConcurrentRefreshWinner();
          if (U) return (f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), U);
          if (A?.clientId && h && A.clientId !== h.client_id) {
            (se(this.serverName, "Another process re-registered client; preserving"),
              n("failure", "concurrent_reregister"),
              f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister"));
            return;
          }
          (n(
            "failure",
            s.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client"
          ),
            m(
              "mcp_oauth_refresh",
              s.errorCode === "unauthorized_client"
                ? "mcp_oauth_refresh_unauthorized_client"
                : "mcp_oauth_refresh_invalid_client"
            ),
            await this.invalidateCredentials("all"),
            Fme.emit(this.serverName));
          return;
        }
        if (ge(s)) {
          (se(
            this.serverName,
            `Token refresh failed: token response rejected by SDK schema: ${d(s)}`
          ),
            n("failure", "token_response_schema_rejected"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected"));
          return;
        }
        let k = s instanceof q0e,
          v = s instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(s.message),
          S = s instanceof XBe || s instanceof JZt || s instanceof QZt,
          y = v || S || k;
        if (!y || l >= t) {
          (se(this.serverName, `Token refresh failed: ${xN(s, this.serverConfig.url)}`),
            n("failure", y ? "transient_retries_exhausted" : "request_failed"),
            m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed"));
          return;
        }
        let w = 1000 * Math.pow(2, l - 1);
        (se(this.serverName, `Token refresh failed, retrying in ${w}ms (attempt ${l}/${t})`),
          await X(w));
      }
    }
    return;
  }
}
async function fTi() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY)
    throw Error(
      "No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead."
    );
  return new Promise((t, r) => {
    (process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0));
    let n = "",
      l = (h) => {
        let s = h.toString();
        if (
          s ===
            `
` ||
          s === "\r"
        )
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", l),
            process.stderr.write(`
`),
            t(n));
        else if (s === "\x03")
          (process.stdin.setRawMode?.(!1),
            process.stdin.removeListener("data", l),
            r(Error("Cancelled")));
        else if (s === "\x7F" || s === "\b") n = n.slice(0, -1);
        else n += s;
      };
    process.stdin.on("data", l);
  });
}
async function pTi(e, t, r) {
  let n = td(e, t);
  try {
    return await Kn().mutate((l) => ({
      ...l,
      mcpOAuthClientConfig: { ...l.mcpOAuthClientConfig, [n]: { clientSecret: r } }
    }));
  } catch (l) {
    return { success: !1, warning: d(l) };
  }
}
async function mTi(e, t) {
  let r = td(e, t);
  await Kn().mutate((n) => {
    if (!n.mcpOAuthClientConfig?.[r]) return n;
    let l = { ...n.mcpOAuthClientConfig };
    return (delete l[r], { ...n, mcpOAuthClientConfig: l });
  });
}
async function _Ss(e, t) {
  let n = await Kn().readAsync(),
    l = td(e, t);
  return n?.mcpOAuthClientConfig?.[l];
}
function Ne(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Wgi(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var ct = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn"
  ],
  dt = [".b2clogin.com", ".ciamlogin.com"];
function Ggi(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return ct.includes(t) || dt.some((r) => t.endsWith(r));
  } catch {
    return !1;
  }
}
export {
  Bgi,
  jgi,
  mSs,
  gSs,
  AJt,
  hSs,
  CJt,
  sTi,
  iTi,
  aTi,
  iSr,
  lTi,
  dTi,
  cTi,
  ySs,
  uTi,
  LHn,
  RJt,
  fTi,
  pTi,
  mTi,
  _Ss,
  Wgi,
  Ggi
};

//# sourceMappingURL=chunk-bd8bvt3f.js.map
