// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, w6 } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { g, m } from "./chunk-brszmkb3.js";
import { xCe, tl, Ep, Ng, Et, kf, gn, rA, kj, Sv, R5, jt, Re, ue, Jk } from "./chunk-ajtyjx88.js";
import { mM } from "./chunk-38g9s4wc.js";
import { Wse } from "./chunk-njpzwa1b.js";
import { et } from "./chunk-c9re0p40.js";
var S = 3600000,
  _ = 86400000,
  h = "/api/claude_code/organizations/metrics_enabled";
class a extends Error {}
async function w() {
  let e = xCe(await kj(), `${rn().BASE_API_URL}${h}`);
  if (e.error) throw new a("Auth error: no credential usable for the metrics opt-out check");
  let n = await jt.get(h, {
    auth: "none",
    headers: e.headers,
    timeout: 5000,
    bypassEssentialTrafficOnly: !0,
    maxRedirects: 0
  });
  if (!n.ok) throw new a(`metrics_enabled unavailable: ${n.reason}`);
  if (typeof n.data?.metrics_logging_enabled !== "boolean")
    throw Error("metrics_enabled response missing metrics_logging_enabled");
  return n.data;
}
async function M(e) {
  try {
    let n = await Sv(w, {
      also403Revoked: !0,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: e
    });
    return (
      (e.attempted = !1),
      t(`${R5} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`),
      g("api_metrics_opt_out_check"),
      { enabled: n.metrics_logging_enabled, hasError: !1 }
    );
  } catch (n) {
    return (
      t(
        `${R5} Failed to check metrics opt-out status: ${d(n)}`,
        n instanceof a ? { level: "error" } : void 0
      ),
      m("api_metrics_opt_out_check", "request_failed"),
      { enabled: !1, hasError: !0 }
    );
  }
}
var y = new W(() => {
    let e = { attempted: !1 };
    return { memo: Wse(() => M(e), S), oauthRefreshLatch: e };
  }),
  E = new W(() => ({ identity: void 0 }));
function u() {
  let { key: e, source: n } = Ep();
  if (e === null) return null;
  if (n === "apiKeyHelper") {
    let r = Ng();
    return r ? `key:helper:${et(r).slice(0, 16)}` : null;
  }
  return `key:${et(e).slice(0, 16)}`;
}
function c(e) {
  let n = rA();
  if (n !== void 0)
    return n.organizationUuid !== void 0 ? `acct:${n.accountUuid}/${n.organizationUuid}` : null;
  if (!e?.accountUuid || !e.organizationUuid) return null;
  return i.CLAUDE_CODE_OAUTH_TOKEN || w6() || mM() !== null
    ? null
    : `acct:${e.accountUuid}/${e.organizationUuid}`;
}
function s() {
  let e = gn();
  if (e !== void 0) return c(e);
  return tl() ? null : u();
}
async function p(e) {
  let n = gn();
  if (n === void 0) return tl() ? null : u();
  if (rA() !== void 0) return c(n);
  return c(await Jk(e));
}
function P() {
  let e = gn();
  if (e !== void 0 || tl()) {
    let n = rA();
    if (n !== void 0) return `acct:${n.accountUuid}/${n.organizationUuid ?? "?"}`;
    if (e !== void 0) return `acct:${e.accountUuid ?? "?"}/${e.organizationUuid ?? "?"}`;
    return "oauth:no-record";
  }
  return u() ?? "none";
}
function I() {
  let e = U().host,
    n = y.of(e),
    r = E.of(e),
    o = P();
  if (r.identity !== void 0 && r.identity !== o)
    (n.memo.cache.clear(), (n.oauthRefreshLatch.attempted = !1));
  return ((r.identity = o), n.memo());
}
function Lks() {
  let e = U().host,
    n = y.of(e);
  (n.memo.cache.clear(), (n.oauthRefreshLatch.attempted = !1), (E.of(e).identity = void 0));
}
async function b(e) {
  let n = s() === null ? null : await p(e),
    r = await I();
  if (r.hasError) return r;
  if (n === null) return r;
  if ((await p(e)) !== n)
    return (
      m("api_metrics_opt_out_check", "principal_changed_mid_flight"),
      { enabled: !1, hasError: !0 }
    );
  if (s() !== n) return r;
  let o = k(n);
  if (o !== void 0 && o.enabled === r.enabled && Date.now() - o.timestamp < _) return r;
  return (await Re((C) => T(C, n, r.enabled), e), r);
}
function T(e, n, r) {
  if (s() !== n || (n.startsWith("acct:") && e.oauthAccount === void 0)) return e;
  return {
    ...e,
    metricsStatusCache: void 0,
    metricsStatusCacheByPrincipal: O({
      ...e.metricsStatusCacheByPrincipal,
      [n]: { enabled: r, timestamp: Date.now() }
    })
  };
}
var F = 8;
function O(e) {
  let r = Object.entries(e)
    .filter(([, o]) => A(o))
    .sort(([, o], [, f]) => f.timestamp - o.timestamp)
    .slice(0, F);
  return Object.fromEntries(r);
}
function A(e) {
  return (
    typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now()
  );
}
function k(e) {
  let n = ue().metricsStatusCacheByPrincipal?.[e];
  return n !== void 0 && A(n) ? n : void 0;
}
async function Nks(e) {
  if (Et() && !kf()) return { enabled: !1, hasError: !1 };
  let n = s(),
    r = n === null ? void 0 : k(n);
  if (r !== void 0) {
    if (Date.now() - r.timestamp > _) b(e).catch(l);
    return { enabled: r.enabled, hasError: !1 };
  }
  return b(e);
}
export { Lks, Nks };

//# sourceMappingURL=chunk-x520c54y.js.map
