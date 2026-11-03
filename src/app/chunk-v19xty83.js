// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { sr, d, Vt, EA } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { p } from "./chunk-qmkm2x59.js";
import { L, U, J } from "./chunk-wrtp8qz8.js";
import { Pm, te, ie, t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { o, oe, u, B, A } from "./chunk-0bqrj5ah.js";
import { Zm } from "./chunk-dsrz10z8.js";
var d4t = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;
function v(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}
var K = { ")": "(", "]": "[", "}": "{" };
function Ise(e) {
  while (e.length > 0) {
    let n = e.at(-1);
    if (".,;:!?".includes(n)) {
      e = e.slice(0, -1);
      continue;
    }
    let r = K[n];
    if (!r) break;
    let s = 0,
      c = 0;
    for (let a of e)
      if (a === r) s++;
      else if (a === n) c++;
    if (c > s) e = e.slice(0, -1);
    else break;
  }
  return e;
}
function ZQo(e) {
  for (let n of e.matchAll(d4t)) return Ise(n[0]);
  return;
}
var Z = "tengu_lively_beaver";
class N {
  reader = null;
  register(e) {
    let n = this.reader;
    return ((this.reader = e), n);
  }
}
var T = new N();
function bci(e) {
  return T.register(e);
}
function c4t() {
  let e = T.reader;
  if (!e) return !1;
  try {
    return e(Z, !1) === !0;
  } catch {
    return !1;
  }
}
var cAt = "account_on_hold",
  u4t = "https://claude.ai/restricted",
  R = "Your account is on hold and can't use Claude Code. View details or appeal: ";
function e7o(e) {
  return `${R}${e}`;
}
function kar(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`;
}
var Te = e7o(u4t);
function t7o(e) {
  if (!c4t() || !e.startsWith(R)) return !1;
  let n = e.slice(R.length);
  return v(n) && T4e(n) === n;
}
var S = 2048,
  X = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;
function Q(e) {
  try {
    return e === new URL(rn().CLAUDE_AI_ORIGIN).origin;
  } catch {
    return !1;
  }
}
function T4e(e) {
  if (typeof e !== "string" || e.length > S) return u4t;
  let n;
  try {
    n = new URL(e);
  } catch {
    return u4t;
  }
  if (n.protocol !== "https:" || n.username || n.password || n.port || n.hash) return u4t;
  let r = n.hostname;
  return (r === "claude.ai" ||
    r.endsWith(".claude.ai") ||
    r === "anthropic.com" ||
    r.endsWith(".anthropic.com") ||
    Q(n.origin)) &&
    n.href.length <= S &&
    X.test(n.href)
    ? n.href
    : u4t;
}
var ee = p(() =>
  u({
    error: B(["invalid_grant", "access_denied"]),
    error_description: A(cAt),
    error_uri: oe().optional()
  })
);
function gEn(e) {
  if (!c4t()) return null;
  let n = e;
  if (typeof n === "string") {
    if (!n.includes(cAt)) return null;
    try {
      n = te(n);
    } catch {
      return null;
    }
  }
  let r = ee().safeParse(n);
  return r.success ? { url: T4e(r.data.error_uri) } : null;
}
class Qbe extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError";
  }
}
class FZ extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, n, r) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = n;
    this.errorUri = r;
    ((this.name = "OAuthCallbackError"), (this.displayMessage = n ? `${e}: ${n}` : e));
  }
}
function Tar(e) {
  return e instanceof FZ && e.errorDescription === cAt;
}
var Sci = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  wci = "refresh_token",
  B3r = "/v1/oauth/token",
  uAt = "oauth-2025-04-20",
  vci = "oidc-federation-2026-04-01",
  Eci = 120,
  fAt = 30,
  kci = 5,
  C = 1048576;
function j3r(e) {
  if (!e) return;
  let n;
  try {
    n = new URL(e);
  } catch (s) {
    throw new Cf(`Invalid token endpoint base URL "${e}": ${s}`);
  }
  if (n.protocol === "https:") return;
  let r = n.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.protocol === "http:" && (r === "localhost" || r === "127.0.0.1" || r === "::1")) return;
  throw new Cf(`Refusing to send credential over non-https token endpoint "${e}"`);
}
async function W3r(e, n) {
  let r = await re(e),
    s;
  try {
    s = JSON.parse(r);
  } catch {
    throw new Cf(
      `Token endpoint returned non-JSON response (status ${e.status})`,
      e.status,
      Rfe(r),
      n
    );
  }
  if (!s.access_token)
    throw new Cf(
      `Token endpoint response missing access_token: ${JSON.stringify(Rfe(s))}`,
      e.status,
      Rfe(s),
      n
    );
  if (s.token_type && s.token_type.toLowerCase() !== "bearer")
    throw new Cf(
      `Token endpoint response: unsupported token_type "${s.token_type}" (want Bearer)`,
      e.status,
      Rfe(s),
      n
    );
  return s;
}
var w = 2000,
  ne = new Set(["error", "error_description", "error_uri"]);
function Rfe(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let n;
    try {
      n = JSON.parse(e);
    } catch {
      if (e.length <= w) return e;
      return e.slice(0, w) + `... <${e.length - w} more chars>`;
    }
    return JSON.stringify(Rfe(n));
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let n = {};
    for (let [r, s] of Object.entries(e)) if (ne.has(r)) n[r] = s;
    return n;
  }
  return null;
}
async function hEn(e, n = (r) => console.warn(`anthropic-sdk: ${r}`)) {
  if (typeof process > "u") return;
  let { fs: r } = await import("./chunk-1napwf8e.js"),
    s = e,
    c;
  try {
    ((s = await r.promises.realpath(e)), (c = await r.promises.stat(s)));
  } catch {
    return;
  }
  let a = c.mode & 511;
  if (a & 18)
    throw new Cf(
      `Credentials file at ${s} is group/world-writable (mode 0o${a.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${s}\`.`
    );
  if (a & 36)
    throw new Cf(
      `Credentials file at ${s} is group/world-readable (mode 0o${a.toString(8)}); run \`chmod 600 ${s}\` before retrying.`
    );
  if (typeof process.getuid === "function" && c.uid !== process.getuid())
    n(
      `credentials file at ${s} is owned by uid ${c.uid} (current process uid ${process.getuid()}); verify this is intentional.`
    );
}
async function A4e(e, n) {
  let { fs: r, path: s } = await import("./chunk-1napwf8e.js"),
    c = s.dirname(e);
  await r.promises.mkdir(c, { recursive: !0, mode: 448 });
  let a = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let l = await r.promises.open(a, "w", 384);
    try {
      (await l.writeFile(JSON.stringify(n, null, 2)), await l.sync());
    } finally {
      await l.close();
    }
    await r.promises.rename(a, e);
  } catch (l) {
    throw (await r.promises.unlink(a).catch(() => {}), l);
  }
  try {
    let l = await r.promises.open(c, "r");
    try {
      await l.sync();
    } finally {
      await l.close();
    }
  } catch {}
}
async function re(e) {
  if (!e.body) return "";
  let n = e.body.getReader(),
    r = [],
    s = 0;
  for (;;) {
    let { done: a, value: l } = await n.read();
    if (a) break;
    if (s + l.length > C) {
      let h = C - s;
      if (h > 0) r.push(l.subarray(0, h));
      await n.cancel();
      break;
    }
    (r.push(l), (s += l.length));
  }
  let c;
  if (r.length === 1) c = r[0];
  else {
    c = new Uint8Array(r.reduce((l, h) => l + h.length, 0));
    let a = 0;
    for (let l of r) (c.set(l, a), (a += l.length));
  }
  return new TextDecoder("utf-8").decode(c);
}
class Cf extends sr {
  constructor(e, n = null, r = null, s = null) {
    super(e);
    ((this.statusCode = n), (this.body = r), (this.requestId = s));
  }
}
import { lstatSync as se, readdirSync as $e, readFileSync as ae, realpathSync as ce } from "fs";
import {
  basename as P,
  dirname as le,
  isAbsolute as b,
  join as f,
  parse as ue,
  relative as fe,
  resolve as O,
  sep as z
} from "path";
function C4e(e) {
  if (!(e instanceof Cf) || (e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403))
    return null;
  return gEn(e.body);
}
function pAt(e) {
  return (
    e instanceof Cf &&
    e.statusCode === null &&
    e.message.includes("has expired and no refresh is available")
  );
}
var de = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class j {
  precedenceSource = { filled: !1 };
  authType = { filled: !1 };
  profileBaseUrl = { filled: !1 };
  accountInfo = { filled: !1 };
  federationIdentity = { filled: !1 };
  profileStoreDenyPaths = { filled: !1 };
  settingsBearerRejected = !1;
  primedFiles = void 0;
}
var g = new W(() => new j());
function Av() {
  let e = g.of(U().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let n = pe();
  return ((e.precedenceSource = { filled: !0, value: n }), n);
}
function pe() {
  let e = MH(),
    n = G();
  if (n) {
    if (e === null) return null;
    let r = E(e, n);
    return r === "oidc_federation" || r === "user_oauth" ? "profile-explicit" : null;
  }
  if (Y()) return "env-quad";
  if (e !== null) {
    let r = E(e, sxe(e));
    if (r === "oidc_federation" || r === "user_oauth") return "profile-implicit";
  }
  return null;
}
function yEn() {
  let e = g.of(U().host);
  ((e.precedenceSource = { filled: !1 }),
    (e.authType = { filled: !1 }),
    (e.profileBaseUrl = { filled: !1 }),
    (e.federationIdentity = { filled: !1 }),
    (e.profileStoreDenyPaths = { filled: !1 }),
    (e.settingsBearerRejected = !1),
    f4t());
}
function f4t() {
  g.of(U().host).accountInfo = { filled: !1 };
}
function nst() {
  return Av() !== null;
}
function xfe() {
  let e = g.of(U().host);
  if (e.authType.filled) return e.authType.value;
  let n = ge();
  return ((e.authType = { filled: !0, value: n }), n);
}
function ge() {
  let e = Av();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let n = MH();
  if (n === null) return null;
  let r = e === "profile-explicit" ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default") : sxe(n),
    s = E(n, r);
  return s === "oidc_federation" || s === "user_oauth" ? s : null;
}
function R4e() {
  return Av() === "profile-implicit" && xfe() === "user_oauth";
}
function i6() {
  let e = g.of(U().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let n = he();
  return ((e.accountInfo = { filled: !0, value: n }), n);
}
function he() {
  let e = Av();
  if (e === null || e === "env-quad") return;
  let n = MH();
  if (n === null) return;
  let r = e === "profile-explicit" ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default") : sxe(n);
  return G3r(n, r);
}
function G3r(e, n) {
  let r = m(x(e, n));
  if (r === null) return;
  try {
    let s = JSON.parse(r);
    return {
      organizationUuid: s.organization_uuid,
      organizationName: s.organization_name,
      accountEmail: s.account_email,
      workspaceId: s.workspace_id,
      workspaceName: s.workspace_name
    };
  } catch {
    return;
  }
}
function p4t() {
  let e = Av();
  if (e === "env-quad") {
    let n = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xB7 org ${F(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xB7 rule ${F(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${n ? ` \xB7 ws ${n.startsWith("wrkspc_") ? F(n) : n}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let n = MH(),
      r =
        n === null
          ? "default"
          : e === "profile-explicit"
            ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
            : sxe(n);
    return `credentials-file \xB7 ${xfe() ?? "unknown"} \xB7 profile ${r}`;
  }
  return "inactive";
}
function F(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`;
}
function w$e() {
  let e = g.of(U().host);
  if (e.profileBaseUrl.filled) return e.profileBaseUrl.value;
  let n = me();
  return ((e.profileBaseUrl = { filled: !0, value: n }), n);
}
function me() {
  let e = Av();
  if (e === null || e === "env-quad") return;
  let n = MH();
  if (n === null) return;
  try {
    let r =
        e === "profile-explicit" ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default") : sxe(n),
      s = m(f(n, "configs", `${r}.json`));
    if (s === null) return;
    let c = JSON.parse(s);
    return typeof c.base_url === "string" && c.base_url.trim() ? c.base_url.trim() : void 0;
  } catch {
    return;
  }
}
var _e = p(() =>
  u({
    organization_id: o().optional(),
    workspace_id: o().optional(),
    authentication: u({ type: o().optional(), federation_rule_id: o().optional() })
      .loose()
      .optional()
  }).loose()
);
function QPi() {
  let e = g.of(U().host);
  if (e.federationIdentity.filled) return e.federationIdentity.value;
  let n = Ie();
  return ((e.federationIdentity = { filled: !0, value: n }), n);
}
function Ie() {
  let e = Av();
  if (e === null) return;
  if (e === "env-quad")
    return k({
      organizationId: i.ANTHROPIC_ORGANIZATION_ID,
      federationRuleId: i.ANTHROPIC_FEDERATION_RULE_ID,
      workspaceId: i.ANTHROPIC_WORKSPACE_ID
    });
  let n = MH();
  if (n === null) return;
  try {
    let r = m(f(n, "configs", `${bEn(n)}.json`));
    if (r === null) return;
    let s = _e().safeParse(te(r));
    if (!s.success || s.data.authentication?.type !== "oidc_federation") return;
    return k({
      organizationId: s.data.organization_id,
      federationRuleId: s.data.authentication.federation_rule_id,
      workspaceId: s.data.workspace_id
    });
  } catch {
    return;
  }
}
function k({ organizationId: e, federationRuleId: n, workspaceId: r }) {
  let s = e?.trim(),
    c = n?.trim();
  if (!s || !c) return;
  let a = r?.trim() || void 0;
  return { organizationId: s, federationRuleId: c, ...(a !== void 0 && { workspaceId: a }) };
}
function n7o() {
  return g.of(U().host).settingsBearerRejected;
}
function r7o(e) {
  g.of(U().host).settingsBearerRejected = e;
}
var Oe = ["configs", "credentials"],
  Ae = ["active_config"];
function _En() {
  let e = g.of(U().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let { value: n, complete: r } = ye();
  if (r) e.profileStoreDenyPaths = { filled: !0, value: n };
  return n;
}
function ye() {
  let e = MH();
  if (e === null) return { value: null, complete: !0 };
  let n = { dirs: [e], files: [] };
  try {
    let r = O(e);
    n = D(r)
      ? { dirs: Oe.map((a) => f(r, a)), files: Ae.map((a) => f(r, a)) }
      : { dirs: [r], files: [] };
    let c = we(e, bEn(e)).filter(
      (a) =>
        !n.dirs.some((l) => a === l || a.startsWith(l + z)) &&
        !n.files.includes(a) &&
        !D(a) &&
        !Fe(a)
    );
    return { value: { dirs: n.dirs, files: [...n.files, ...c] }, complete: !0 };
  } catch (r) {
    return (
      t(
        `WIF profile store: could not resolve the active profile's credentials path (${d(r)}); denying the store root only`,
        { level: "warn" }
      ),
      { value: n, complete: !1 }
    );
  }
}
function Re(e, n) {
  let r = x(e, n);
  if (!r) return f(e, "credentials", `${n}.json`);
  return typeof r === "string" ? r : null;
}
function we(e, n) {
  let r = Re(e, n);
  if (r === null || !r.trim()) return [];
  return L(b(r) ? [O(r)] : [O(e, r), O(r)]);
}
function z3r(e) {
  return !!e && /^[A-Za-z0-9_.-]+$/.test(e) && e !== "." && e !== "..";
}
function sxe(e) {
  return m(f(e, "active_config"))?.trim() || "default";
}
function bEn(e) {
  return process.env.ANTHROPIC_PROFILE?.trim() || sxe(e);
}
function E(e, n) {
  let r = m(f(e, "configs", `${n}.json`));
  if (r === null) return null;
  let s;
  try {
    s = JSON.parse(r);
  } catch {
    return null;
  }
  let c = s?.authentication?.type ?? null;
  if (c === "user_oauth") {
    if (!m(x(e, n, s))?.trim()) return null;
  }
  return c;
}
function x(e, n, r) {
  if (r === void 0) {
    let s = m(f(e, "configs", `${n}.json`));
    if (s !== null)
      try {
        r = JSON.parse(s);
      } catch {}
  }
  return r?.authentication?.credentials_path ?? f(e, "credentials", `${n}.json`);
}
function MH() {
  return M()?.dir ?? null;
}
function M() {
  if (J()) return null;
  let e = process.env,
    n = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (n) return { dir: n, space: "userNamed" };
  let r = e.XDG_CONFIG_HOME?.trim();
  if (r) return { dir: f(r, "anthropic"), space: "home" };
  let s = e.HOME?.trim();
  return s ? { dir: f(s, ".config", "anthropic"), space: "home" } : null;
}
function G() {
  return process.env.ANTHROPIC_PROFILE?.trim();
}
function Y() {
  return de.every((e) => process.env[e]?.trim());
}
function D(e) {
  let n = H(e);
  if (n === ue(n).root) return !0;
  let r = fe(n, H(ie().cwd())),
    s = r.split(z)[0];
  return r === "" || (s !== ".." && !b(r));
}
function H(e) {
  let n = O(e),
    r = "";
  for (;;)
    try {
      n = f(ce.native(n), r);
      break;
    } catch {
      let s = le(n);
      if (s === n) {
        n = f(n, r);
        break;
      }
      ((r = r ? f(P(n), r) : P(n)), (n = s));
    }
  return n.toLowerCase();
}
function Fe(e) {
  try {
    return se(e).isDirectory();
  } catch {
    return !1;
  }
}
function m(e) {
  let n = g.of(U().host).primedFiles;
  if (n !== void 0 && n.has(e)) return n.get(e) ?? null;
  try {
    return ae(e, "utf-8");
  } catch (r) {
    if (Vt(r)) return null;
    throw r;
  }
}
async function o7o(e) {
  let n = g.of(U().host),
    r = M();
  if (n.precedenceSource.filled || r === null) return;
  let { dir: s, space: c } = r,
    a = new Map(),
    l = async (_) => {
      let I;
      try {
        I = await e.hostFiles.readText(Pm[c](_));
      } catch (y) {
        return (
          t(`WIF profile read-ahead: the storage backend threw reading ${_}: ${d(y)}`, {
            level: "warn"
          }),
          null
        );
      }
      if (I.ok) {
        let y = I.value.found ? I.value.value : null;
        return (a.set(_, y), y);
      }
      if (EA(Zm(I.error))) a.set(_, null);
      return null;
    },
    h = G();
  if (!h && Y()) return;
  let q = h || (await l(f(s, "active_config")))?.trim() || "default";
  (await l(f(s, "configs", `${q}.json`)), (n.primedFiles = a));
  try {
    (Av(), xfe());
  } catch (_) {
    t(`WIF profile read-ahead: left to the first reader: ${d(_)}`);
  } finally {
    n.primedFiles = void 0;
  }
}
export {
  d4t,
  Ise,
  ZQo,
  bci,
  c4t,
  cAt,
  u4t,
  e7o,
  kar,
  t7o,
  T4e,
  gEn,
  Qbe,
  FZ,
  Tar,
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
  yEn,
  f4t,
  nst,
  xfe,
  R4e,
  i6,
  G3r,
  p4t,
  w$e,
  QPi,
  n7o,
  r7o,
  _En,
  z3r,
  sxe,
  bEn,
  MH,
  o7o
};

//# sourceMappingURL=chunk-v19xty83.js.map
