// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, J } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { sr, Qe, N, d, Fs, Vt } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, fo } from "./chunk-brszmkb3.js";
import {
  Sci,
  wci,
  B3r,
  uAt,
  vci,
  Eci,
  fAt,
  kci,
  j3r,
  W3r,
  Rfe,
  hEn,
  A4e,
  Cf,
  C4e,
  pAt,
  Av,
  yEn
} from "./chunk-v19xty83.js";
import { vl } from "./chunk-6xjawpfq.js";
import { yrt } from "./chunk-r00j5r9s.js";
import { et } from "./chunk-c9re0p40.js";
var iR = "0.128.0";
var J7s = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u";
function te() {
  if (typeof Deno < "u" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime < "u") return "edge";
  if (
    Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) ===
    "[object process]"
  )
    return "node";
  return "unknown";
}
var ne = () => {
  let e = te();
  if (e === "deno")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": iR,
      "X-Stainless-OS": b(Deno.build.os),
      "X-Stainless-Arch": x(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version":
        typeof Deno.version === "string" ? Deno.version : (Deno.version?.deno ?? "unknown")
    };
  if (typeof EdgeRuntime < "u")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": iR,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": globalThis.process?.version ?? "unknown"
    };
  if (e === "node")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": iR,
      "X-Stainless-OS": b(globalThis.process.platform ?? "unknown"),
      "X-Stainless-Arch": x(globalThis.process.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
    };
  let n = re();
  if (n)
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": iR,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${n.browser}`,
      "X-Stainless-Runtime-Version": n.version
    };
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": iR,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
};
function re() {
  if (typeof navigator > "u" || !navigator) return null;
  let e = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }
  ];
  for (let { key: n, pattern: r } of e) {
    let s = r.exec(navigator.userAgent);
    if (s) {
      let o = s[1] || 0,
        u = s[2] || 0,
        f = s[3] || 0;
      return { browser: n, version: `${o}.${u}.${f}` };
    }
  }
  return null;
}
var x = (e) => {
    if (e === "x32") return "x32";
    if (e === "x86_64" || e === "x64") return "x64";
    if (e === "arm") return "arm";
    if (e === "aarch64" || e === "arm64") return "arm64";
    if (e) return `other:${e}`;
    return "unknown";
  },
  b = (e) => {
    if (((e = e.toLowerCase()), e.includes("ios"))) return "iOS";
    if (e === "android") return "Android";
    if (e === "darwin") return "MacOS";
    if (e === "win32") return "Windows";
    if (e === "freebsd") return "FreeBSD";
    if (e === "openbsd") return "OpenBSD";
    if (e === "linux") return "Linux";
    if (e) return `Other:${e}`;
    return "Unknown";
  },
  H,
  RZn = () => H ?? (H = ne());
function y() {
  return Math.floor(Date.now() / 1000);
}
class uzt {
  constructor(e, n) {
    ((this.cached = null),
      (this.pendingRefresh = null),
      (this.nextForce = !1),
      (this.lastAdvisoryError = 0),
      (this.provider = e),
      (this.onAdvisoryRefreshError = n));
  }
  async getToken() {
    let e = this.nextForce;
    this.nextForce = !1;
    let n = this.cached;
    if (e || n == null) return (await this.refresh(e)).token;
    if (n.expiresAt == null) return n.token;
    let r = n.expiresAt - y();
    if (r > Eci) return n.token;
    if (r > fAt) return (this.backgroundRefresh(), n.token);
    return (await this.refresh()).token;
  }
  invalidate() {
    ((this.cached = null), (this.nextForce = !0));
  }
  refresh(e = !1) {
    if (this.pendingRefresh && !e) return this.pendingRefresh;
    return this.doRefresh(e);
  }
  backgroundRefresh() {
    if (this.pendingRefresh) return;
    if (y() - this.lastAdvisoryError < kci) return;
    this.doRefresh().catch((e) => {
      ((this.lastAdvisoryError = y()), this.onAdvisoryRefreshError?.(e));
    });
  }
  doRefresh(e = !1) {
    return (
      (this.pendingRefresh = this.provider(e ? { forceRefresh: !0 } : void 0).then(
        (n) => ((this.cached = n), (this.pendingRefresh = null), n),
        (n) => {
          throw ((this.pendingRefresh = null), n);
        }
      )),
      this.pendingRefresh
    );
  }
}
var mb = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var Q7s = "1.0",
  Ghn = "1.0",
  ie = /^[A-Za-z0-9_.-]+$/;
function L(e) {
  if (!e) throw Error("profile name is empty");
  if (e === "." || e === "..") throw Error(`profile name "${e}" is not allowed`);
  if (e.includes("/") || e.includes("\\"))
    throw Error(`profile name "${e}" must not contain path separators`);
  if (!ie.test(e))
    throw Error(
      `profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`
    );
}
var K = async (e) => (await O(e))?.config ?? null,
  O = async (e) => {
    var n, r;
    let s = await C();
    if (s === null) return null;
    let o = e ?? (await V());
    if (o === null) return null;
    L(o);
    let { fs: u, path: f } = await import("./chunk-1napwf8e.js"),
      h = f.join(s, "configs", `${o}.json`),
      _;
    try {
      _ = await u.promises.readFile(h, "utf-8");
    } catch (E) {
      if (E?.code !== "ENOENT") throw Error(`failed to read config file ${h}: ${E}`);
      _ = null;
    }
    if (_ === null) {
      let E = mb("ANTHROPIC_ORGANIZATION_ID"),
        k = mb("ANTHROPIC_IDENTITY_TOKEN_FILE"),
        T = mb("ANTHROPIC_FEDERATION_RULE_ID");
      if (T && E)
        return {
          fromFile: !1,
          config: {
            organization_id: E,
            workspace_id: mb("ANTHROPIC_WORKSPACE_ID"),
            base_url: mb("ANTHROPIC_BASE_URL"),
            authentication: {
              type: "oidc_federation",
              federation_rule_id: T,
              service_account_id: mb("ANTHROPIC_SERVICE_ACCOUNT_ID"),
              identity_token: k ? { source: "file", path: k } : void 0,
              scope: mb("ANTHROPIC_SCOPE")
            }
          }
        };
      return null;
    }
    let p;
    try {
      p = JSON.parse(_);
    } catch (E) {
      throw Error(`failed to parse config file ${h}: ${E}`);
    }
    if (!p.authentication) throw Error(`config file ${h} is missing "authentication"`);
    let w = p.authentication.type;
    if (w !== "oidc_federation" && w !== "user_oauth")
      throw Error(`authentication.type "${w}" is not a known authentication type`);
    if (
      (p.organization_id ?? (p.organization_id = mb("ANTHROPIC_ORGANIZATION_ID")),
      p.workspace_id ?? (p.workspace_id = mb("ANTHROPIC_WORKSPACE_ID")),
      p.base_url ?? (p.base_url = mb("ANTHROPIC_BASE_URL")),
      (n = p.authentication).scope ?? (n.scope = mb("ANTHROPIC_SCOPE")),
      p.authentication.type === "oidc_federation")
    ) {
      if (!p.authentication.identity_token) {
        let E = mb("ANTHROPIC_IDENTITY_TOKEN_FILE");
        if (E) p.authentication.identity_token = { source: "file", path: E };
      }
      if (!p.authentication.federation_rule_id)
        p.authentication.federation_rule_id = mb("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
      (r = p.authentication).service_account_id ??
        (r.service_account_id = mb("ANTHROPIC_SERVICE_ACCOUNT_ID"));
    }
    return { config: p, fromFile: !0 };
  };
var S = async (e, n) => {
    if (e?.authentication.credentials_path) return e.authentication.credentials_path;
    let r = await C();
    if (!r) return null;
    let s = n ?? (await V());
    if (!s) return null;
    L(s);
    let { path: o } = await import("./chunk-1napwf8e.js");
    return o.join(r, "credentials", `${s}.json`);
  },
  C = async () => {
    if (!oe()) return null;
    let { path: e } = await import("./chunk-1napwf8e.js"),
      n = mb("ANTHROPIC_CONFIG_DIR");
    if (n) return n;
    if (RZn()["X-Stainless-OS"] === "Windows") {
      let u = mb("APPDATA");
      if (u) return e.join(u, "Anthropic");
      let f = mb("USERPROFILE");
      if (f) return e.join(f, "AppData", "Roaming", "Anthropic");
      return null;
    }
    let s = mb("XDG_CONFIG_HOME");
    if (s) return e.join(s, "anthropic");
    let o = mb("HOME");
    if (o) return e.join(o, ".config", "anthropic");
    return null;
  },
  oe = () => {
    let e = RZn()["X-Stainless-Runtime"];
    return e === "node" || e === "deno";
  },
  V = async () => {
    let e = await C();
    if (!e) return null;
    let n = mb("ANTHROPIC_PROFILE");
    if (n) return n;
    let { fs: r, path: s } = await import("./chunk-1napwf8e.js"),
      o = s.join(e, "active_config");
    try {
      return (await r.promises.readFile(o, "utf-8")).trim() || "default";
    } catch (u) {
      if (u?.code !== "ENOENT") throw Error(`failed to read ${o}: ${u}`);
      return "default";
    }
  };
function P(e) {
  if (!e) throw new sr("Identity token file path is empty");
  return async () => {
    let { fs: n } = await import("./chunk-1napwf8e.js"),
      r;
    try {
      r = await n.promises.readFile(e, "utf-8");
    } catch (o) {
      throw new sr(`Failed to read identity token file at ${e}: ${o}`);
    }
    let s = r.trim();
    if (!s) throw new sr(`Identity token file at ${e} is empty`);
    return s;
  };
}
function j(e) {
  if (!e) throw new sr("Identity token value is empty");
  return () => e;
}
function B(e) {
  return async () => {
    j3r(e.baseURL);
    let n = await e.identityTokenProvider();
    if (n.length > 16384)
      throw new Cf(
        `Identity token is ${Math.ceil(n.length / 1024)} KiB, exceeds the 16 KiB assertion limit`
      );
    let r = {
      grant_type: Sci,
      assertion: n,
      federation_rule_id: e.federationRuleId,
      organization_id: e.organizationId
    };
    if (e.serviceAccountId) r.service_account_id = e.serviceAccountId;
    if (e.workspaceId) r.workspace_id = e.workspaceId;
    let s = `${e.baseURL}${B3r}`,
      o;
    try {
      o = await e.fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": `${uAt},${vci}`,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${iR} oidcFederationProvider`
        },
        body: JSON.stringify(r)
      });
    } catch (_) {
      throw new Cf(`Failed to reach token endpoint ${s}: ${_}`);
    }
    let u = o.headers.get("Request-Id");
    if (!o.ok) {
      let _ = await o.text().catch(() => ""),
        p = Rfe(_),
        w = "";
      if (o.status === 401)
        w = ` Ensure your federation rule matches your identity token. ${e.workspaceId ? "" : "If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
      throw new Cf(
        `Token exchange failed with status ${o.status}${u ? ` (request-id ${u})` : ""}: ${p}${w}`,
        o.status,
        p,
        u
      );
    }
    let f = await W3r(o, u),
      h = Number(f.expires_in);
    if (!Number.isFinite(h))
      throw new Cf(
        `Token endpoint response missing required fields: ${JSON.stringify(Rfe(f))}`,
        o.status,
        Rfe(f),
        u
      );
    return { token: f.access_token, expiresAt: y() + h };
  };
}
function z(e) {
  return async (n) => {
    let { fs: r } = await import("./chunk-1napwf8e.js");
    await hEn(e.credentialsPath, e.onSafetyWarning);
    let s;
    try {
      s = await r.promises.readFile(e.credentialsPath, "utf-8");
    } catch (R) {
      throw new Cf(`Credentials file not found at ${e.credentialsPath}: ${R}`);
    }
    let o;
    try {
      o = JSON.parse(s);
    } catch (R) {
      throw new Cf(`Credentials file at ${e.credentialsPath} is not valid JSON: ${R}`);
    }
    let u = o.access_token;
    if (!u) throw new Cf(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
    let f = o.expires_at;
    if (!n?.forceRefresh && (f == null || y() < f - fAt)) return { token: u, expiresAt: f ?? null };
    let h = o.refresh_token;
    if (!e.clientId || !h)
      throw new Cf(
        `Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId ? "set" : "empty"}, refresh_token ${h ? "set" : "empty"})`
      );
    j3r(e.baseURL);
    let _ = { grant_type: wci, refresh_token: h, client_id: e.clientId },
      p = `${e.baseURL}${B3r}`,
      w;
    try {
      w = await e.fetch(p, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": uAt,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${iR} userOAuthProvider`
        },
        body: JSON.stringify(_)
      });
    } catch (R) {
      throw new Cf(`User OAuth refresh failed to reach token endpoint: ${R}`);
    }
    let E = w.headers.get("Request-Id");
    if (!w.ok) {
      let R = await w.text().catch(() => "");
      throw new Cf(`User OAuth refresh failed (HTTP ${w.status}): ${Rfe(R)}`, w.status, Rfe(R), E);
    }
    let k = await W3r(w, E),
      T = Number(k.expires_in);
    if (!Number.isFinite(T))
      throw new Cf(
        `User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(Rfe(k))}`,
        w.status,
        Rfe(k),
        E
      );
    let D = y() + T,
      ee = k.refresh_token || h;
    return (
      await A4e(e.credentialsPath, {
        ...o,
        version: Ghn,
        type: "oauth_token",
        access_token: k.access_token,
        expires_at: D,
        refresh_token: ee
      }),
      { token: k.access_token, expiresAt: D }
    );
  };
}
function fzt(e, n) {
  let r = e.authentication.credentials_path ?? null,
    s = (e.base_url || n.baseURL).replace(/\/+$/, ""),
    o = se(e, r, s, n),
    u = {};
  if (e.workspace_id && e.authentication.type === "user_oauth")
    u["anthropic-workspace-id"] = e.workspace_id;
  return { provider: o, extraHeaders: u, baseURL: e.base_url || void 0 };
}
async function Z7s(e, n) {
  let r = await O(n);
  if (!r) return null;
  let { config: s, fromFile: o } = r,
    u =
      s.authentication.credentials_path || !o
        ? s
        : {
            ...s,
            authentication: { ...s.authentication, credentials_path: (await S(s, n)) ?? void 0 }
          };
  return fzt(u, e);
}
function se(e, n, r, s) {
  switch (e.authentication.type) {
    case "oidc_federation": {
      let o = e.authentication,
        u = ae(o);
      if (!u)
        throw new Cf(
          "oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)"
        );
      if (!o.federation_rule_id)
        throw new Cf(
          "oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence)."
        );
      if (!e.organization_id)
        throw new Cf(
          "oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)"
        );
      let f = B({
        identityTokenProvider: u,
        federationRuleId: o.federation_rule_id,
        organizationId: e.organization_id,
        serviceAccountId: o.service_account_id,
        workspaceId: e.workspace_id,
        baseURL: r,
        fetch: s.fetch,
        userAgent: s.userAgent
      });
      if (n) return ce(f, n, s.onCacheWriteError, s.onSafetyWarning);
      return f;
    }
    case "user_oauth": {
      if (!n)
        throw new Cf(
          "user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)"
        );
      return z({
        credentialsPath: n,
        clientId: e.authentication.client_id,
        baseURL: r,
        fetch: s.fetch,
        userAgent: s.userAgent,
        onSafetyWarning: s.onSafetyWarning
      });
    }
    default: {
      let o = e.authentication.type;
      throw new Cf(`authentication.type "${o}" is not a known authentication type`);
    }
  }
}
function ae(e) {
  if (e.identity_token) {
    let s = e.identity_token.source;
    if (s !== "file")
      throw new Cf(
        `identity_token.source "${s}" is not supported by this SDK version (only "file")`
      );
    if (!e.identity_token.path)
      throw new Cf('identity_token.source "file" requires a non-empty path');
    return P(e.identity_token.path);
  }
  let n = mb("ANTHROPIC_IDENTITY_TOKEN_FILE");
  if (n) return P(n);
  let r = mb("ANTHROPIC_IDENTITY_TOKEN");
  if (r) return j(r);
  return null;
}
function ce(e, n, r, s) {
  return async (o) => {
    let { fs: u } = await import("./chunk-1napwf8e.js");
    await hEn(n, s);
    let f;
    try {
      let _ = await u.promises.readFile(n, "utf-8");
      f = JSON.parse(_);
      let p = f?.access_token;
      if (p && !o?.forceRefresh) {
        let w = f?.expires_at;
        if (w == null || y() < w - fAt) return { token: p, expiresAt: w ?? null };
      }
    } catch (_) {
      if (_?.code !== "ENOENT" && !(_ instanceof SyntaxError)) r?.(_);
    }
    let h = await e(o);
    try {
      await A4e(n, {
        ...(f ?? {}),
        version: Ghn,
        type: "oauth_token",
        access_token: h.token,
        expires_at: h.expiresAt
      });
    } catch (_) {
      r?.(_);
    }
    return h;
  };
}
import { mkdir as G, readFile as fe, stat as he } from "fs/promises";
import { dirname as pe, join as _e } from "path";
import { dirname as de } from "path";
var le = { "fail-closed": 5, "fail-open": 15 };
function v(e, n, r) {
  return (s) => M(n, () => e(s), r);
}
function uKo(e, n) {
  return M(de(e), n, "fail-closed");
}
async function M(e, n, r) {
  let s = le[r],
    o;
  try {
    o = await ue(e, s, r);
  } catch (u) {
    if (r === "fail-closed" || u instanceof Cf) throw u;
    return (
      t(
        `wif: credentials lock unavailable at ${e} (${d(u)}); refreshing without cross-process serialization`
      ),
      n()
    );
  }
  try {
    return (a("tengu_wif_user_oauth_lock_acquired", { mode: c(r) }), await n());
  } finally {
    a("tengu_wif_user_oauth_lock_released", { mode: c(r) });
    try {
      await o();
    } catch (u) {
      if (Fs(u)) t(`wif: lock release failed: ${u}`);
      else l(u);
    }
  }
}
async function ue(e, n, r) {
  for (let s = 0; ; s++)
    try {
      return await vl(e, {
        stale: 60000,
        update: 5000,
        onCompromised: (o) => t(`WIF credentials lock compromised: ${o}`, { level: "error" })
      });
    } catch (o) {
      if (o.code !== "ELOCKED") throw o;
      if (s >= n) {
        a("tengu_wif_user_oauth_lock_retry_limit", { attempt: s, mode: c(r) });
        let u = new Cf(`Could not acquire credentials lock at ${e} after ${n} retries`);
        throw ((u.cause = Object.assign(Error("credentials lock busy"), { code: "ELOCKED" })), u);
      }
      (a("tengu_wif_user_oauth_lock_retry", { attempt: s, mode: c(r) }),
        await X(1000 + Math.random() * 1000));
    }
}
class Z {
  generation = 0;
  credentialsPromise = void 0;
  tokenCachePromise = void 0;
  resolvedBaseUrlSnapshot = void 0;
  failedAccessTokens = new Set();
  reset() {
    ((this.generation += 1),
      (this.credentialsPromise = void 0),
      (this.tokenCachePromise = void 0),
      (this.resolvedBaseUrlSnapshot = void 0),
      this.failedAccessTokens.clear());
  }
}
var we = new W(() => new Z());
function A() {
  return we.of(U().host);
}
var me = 20;
function S_e() {
  return A().resolvedBaseUrlSnapshot;
}
function PKe() {
  return F(A());
}
function F(e) {
  if (e.credentialsPromise === void 0) {
    let { generation: n } = e;
    e.credentialsPromise = fo("wif_credentials_resolve", async () => {
      let r = await Te();
      if (e.generation !== n) return q(e);
      if (r === null) return ((e.resolvedBaseUrlSnapshot = null), null);
      let s = i.ANTHROPIC_BASE_URL || r.base_url,
        o = s || "https://api.anthropic.com",
        f = Av() === "env-quad" ? await ge(r, o) : await S(r),
        h = {
          ...r,
          base_url: s,
          ...(r.authentication.credentials_path || f === null
            ? {}
            : { authentication: { ...r.authentication, credentials_path: f } })
        },
        [{ getUserAgent: _ }, { getTLSFetchOptions: p }, { getProxyFetchOptions: w }] =
          await Promise.all([
            import("./chunk-m8rp5kaj.js"),
            import("./chunk-svpk2wbs.js"),
            import("./chunk-pzqns6vt.js")
          ]),
        E = fzt(h, {
          baseURL: o,
          fetch: (k, T) =>
            fetch(k, {
              ...T,
              ...w({ forAnthropicAPI: !0, url: String(k) }),
              ...p(void 0),
              signal: AbortSignal.timeout(1e4)
            }),
          userAgent: _(),
          onSafetyWarning: (k) => t(k, { level: "warn" }),
          onCacheWriteError: (k) => t(String(k), { level: "warn" })
        });
      if (f)
        switch (r.authentication.type) {
          case "user_oauth":
            E.provider = v(
              Y(Ee(E.provider, f), f, "after-recorded-401", e.failedAccessTokens),
              pe(f),
              "fail-closed"
            );
            break;
          case "oidc_federation": {
            let k = yrt();
            if (k === null) break;
            (await G(k, { recursive: !0, mode: 448 }).catch((T) =>
              t(`wif: cannot create ${k} (${d(T)}); the credentials lock may be unavailable`, {
                level: "warn"
              })
            ),
              (E.provider = v(Y(E.provider, f, "always", e.failedAccessTokens), k, "fail-open")));
            break;
          }
        }
      if (e.generation !== n) return q(e);
      return ((e.resolvedBaseUrlSnapshot = E.baseURL ?? null), E);
    }).catch((r) => {
      throw (
        t(`WIF credential resolution failed: ${d(r)}`, { level: "error" }),
        r instanceof Cf ? r : new Cf(d(r))
      );
    });
  }
  return e.credentialsPromise;
}
function q(e) {
  return (t("wif: sign-in state was reset during this lookup; looking it up again"), F(e));
}
async function fKo(e) {
  let n = A(),
    r = await Q(n).catch(() => null);
  if (r === null) return;
  if (e) {
    if ((n.failedAccessTokens.add(e), n.failedAccessTokens.size > me))
      for (let s of n.failedAccessTokens) {
        n.failedAccessTokens.delete(s);
        break;
      }
  }
  r.invalidate();
}
function vCe() {
  return Q(A());
}
function Q(e) {
  return (
    (e.tokenCachePromise ??= F(e).then((n) => {
      if (n === null) return null;
      return new uzt(
        async (s) => {
          try {
            let o = await n.provider(s);
            return (g("wif_token_exchange"), o);
          } catch (o) {
            let u = o instanceof Cf ? o : new Cf(o instanceof Error ? o.message : String(o), null);
            if (u !== o) u.cause = o;
            throw (m("wif_token_exchange", ye(u)), u);
          }
        },
        (s) => t(String(s), { level: "warn" })
      );
    })),
    e.tokenCachePromise
  );
}
function Y(e, n, r, s) {
  return async (o) => {
    if (!o?.forceRefresh) return e(o);
    if (r === "always" || s.size > 0)
      try {
        await hEn(n, (p) => t(p, { level: "warn" }));
        let u = await import("fs"),
          f = JSON.parse(await u.promises.readFile(n, "utf-8")),
          h = f.access_token,
          _ = f.expires_at == null ? null : Number(f.expires_at);
        if (
          typeof h === "string" &&
          h &&
          !s.has(h) &&
          (_ === null || Date.now() / 1000 < _ - fAt)
        ) {
          let { logEvent: p } = await import("./chunk-hmdcqdk1.js"),
            { fromEnum: w } = await import("./chunk-8sz22y29.js");
          return (
            p("tengu_wif_user_oauth_refresh_race_resolved", { mode: w(r) }),
            t(
              "wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"
            ),
            { token: h, expiresAt: _ }
          );
        }
      } catch (u) {
        t(`wif: rotated-token adoption check failed: ${d(u)}`);
      }
    return e(o);
  };
}
function Ee(e, n) {
  let r = async () => {
    try {
      let s = await import("fs");
      return JSON.parse(await s.promises.readFile(n, "utf-8"));
    } catch {
      return null;
    }
  };
  return async (s) => {
    let u = (await r())?.refresh_token;
    try {
      return await e(s);
    } catch (f) {
      if (
        f instanceof Cf &&
        (f.statusCode === 400 || f.statusCode === 401) &&
        typeof f.body === "string" &&
        f.body.includes('"invalid_grant"') &&
        C4e(f) === null &&
        typeof u === "string" &&
        u
      )
        try {
          let h = await r();
          if (h && h.refresh_token === u) {
            let { logEvent: _ } = await import("./chunk-hmdcqdk1.js");
            (await A4e(n, { ...h, refresh_token: void 0 }),
              _("tengu_wif_user_oauth_refresh_token_cleared", {}));
          }
        } catch (h) {
          if (Vt(h)) t(`wif: refresh-token cleanup write failed: ${h}`);
          else l(Qe(N(h), "WIF: failed to clear stale user_oauth refresh_token"));
        }
      throw f;
    }
  };
}
function XRi(e) {
  if (e instanceof Cf && typeof e.statusCode === "number")
    return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
  let n = e;
  for (let r = 0; r < 4 && n instanceof Error; r++) {
    if (n.name === "TimeoutError" || ke(n)) return !0;
    n = n.cause;
  }
  return !1;
}
function ke(e) {
  switch ("code" in e && typeof e.code === "string" ? e.code : "") {
    case "ECONNRESET":
    case "ECONNREFUSED":
    case "ECONNABORTED":
    case "ETIMEDOUT":
    case "EHOSTUNREACH":
    case "ENETUNREACH":
    case "ENETDOWN":
    case "ENOTFOUND":
    case "EAI_AGAIN":
    case "EPIPE":
    case "UND_ERR_SOCKET":
    case "UND_ERR_CONNECT_TIMEOUT":
    case "ELOCKED":
    case "ConnectionRefused":
    case "ConnectionClosed":
    case "FailedToOpenSocket":
    case "Timeout":
      return !0;
    default:
      return !1;
  }
}
function ye(e) {
  if (pAt(e)) return "no_refresh_available";
  if (C4e(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx";
  }
  let n = e.message.toLowerCase();
  if (n.includes("parse") || n.includes("json")) return "parse_failed";
  return "network_error";
}
function u2r() {
  (A().reset(), yEn());
}
var I = (e) => process.env[e]?.trim() || void 0;
async function Te() {
  if (Av() === "env-quad") {
    let e = I("ANTHROPIC_FEDERATION_RULE_ID"),
      n = I("ANTHROPIC_ORGANIZATION_ID");
    if (e && n) {
      let r = I("ANTHROPIC_IDENTITY_TOKEN_FILE");
      if (r && J()) return null;
      return {
        organization_id: n,
        workspace_id: I("ANTHROPIC_WORKSPACE_ID"),
        base_url: I("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: I("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: r ? { source: "file", path: r } : void 0,
          scope: I("ANTHROPIC_SCOPE")
        }
      };
    }
  }
  if (J()) return null;
  return K();
}
async function ge(e, n) {
  if (e.authentication.type !== "oidc_federation") return null;
  let r = e.authentication.identity_token?.path,
    s;
  if (r)
    try {
      s = (await fe(r, "utf-8")).trim();
    } catch (f) {
      return (
        t(`wif: cannot read identity token at ${r} (${d(f)}); federation token cache disabled`),
        null
      );
    }
  else s = I("ANTHROPIC_IDENTITY_TOKEN");
  if (!s) return (t("wif: no identity token; federation token cache disabled"), null);
  let o = yrt();
  if (o === null)
    return (
      t("wif: no config directory, or a diskless session; federation token cache disabled"),
      null
    );
  try {
    await G(o, { recursive: !0, mode: 448 });
    {
      let f = await he(o),
        h = f.mode & 511;
      if (h & 63)
        return (
          t(
            `wif: ${o} is mode 0o${h.toString(8)} (filesystem ignores modes, or directory pre-existed shared); federation token cache disabled`
          ),
          null
        );
      let _ = process.getuid?.();
      if (_ !== void 0 && f.uid !== _)
        return (
          t(`wif: ${o} is owned by uid ${f.uid}, not ${_}; federation token cache disabled`),
          null
        );
    }
  } catch (f) {
    return (t(`wif: cannot prepare ${o} (${d(f)}); federation token cache disabled`), null);
  }
  let u = et(
    JSON.stringify([
      e.authentication.federation_rule_id,
      e.organization_id,
      e.workspace_id ?? "",
      e.authentication.service_account_id ?? "",
      e.authentication.scope ?? "",
      n,
      et(s)
    ])
  );
  return _e(o, `${u}.json`);
}
export { iR, J7s, RZn, uzt, mb, Q7s, Ghn, fzt, Z7s, uKo, S_e, PKe, fKo, vCe, XRi, u2r };

//# sourceMappingURL=chunk-3k9fdhf3.js.map
