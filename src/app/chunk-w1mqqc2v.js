import {
  fileURLToPath as __sourceFilePath_bf3f0f5d129bce0a,
  URL as __sourceFilePath_bf3f0f5d129bce0a_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Wot } from "./chunk-gg53p5cf.js";
import { U } from "./chunk-wrtp8qz8.js";
import { d, E, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { xt, Vd, _qe, Gf, HYr, _kt, PRe } from "./chunk-qakn3b85.js";
import { bt, ma, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { re } from "./chunk-a16y5hcz.js";
import { vl } from "./chunk-6xjawpfq.js";
import { i } from "./chunk-cj37hmns.js";
import { se } from "./chunk-ewvf3tep.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { Noe, td, v0, D$, foi } from "./chunk-ajtyjx88.js";
import { p } from "./chunk-qmkm2x59.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { $s } from "./chunk-vw9e882a.js";
import { We } from "./chunk-pgnjjhxv.js";
import { jh } from "./chunk-d54avynm.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { rr, m6 } from "./chunk-ak0cmk10.js";
import { hd } from "./chunk-zem4yd4w.js";
import { Sl, Kn } from "./chunk-x8k0r295.js";
import { nse } from "./chunk-exz0w70z.js";
import { LVt, oB, ZSn, ewn, z5, Drt, Xor, W3o, hbe, Id } from "./chunk-zf79f62g.js";
import { o5 } from "./chunk-h2tyaevk.js";
import { R5n } from "./chunk-ybr49gcx.js";
import { XBt, KFr, Sze } from "./chunk-14k612dp.js";
import { ir, YOs, Ul, cO, NLt, QOs, BEo, jEo, axr, TL } from "./chunk-j0tbz6ra.js";
import { _un } from "./chunk-e0ax8qma.js";
import { o, v, T, u, B, A } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { createHash as Be } from "crypto";
import { basename as yt, join as Y } from "path";
var YTr = [Drt, ewn, W3o, Xor, nse, ZSn, hbe];
function Ee(e) {
  if (e.kind !== "resolved" || !Ul()) return;
  let r = TL(),
    n = r.lastResolvedAccountToken;
  if (((r.lastResolvedAccountToken = e.token), n === void 0 || n === e.token)) return;
  ((xt().identityEpoch += 1), stn(), tt());
}
function tt() {
  let e = xt();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = !0;
    return;
  }
  queueMicrotask(() => {
    let r = xt().identityTrippedHandler;
    if (!r) {
      xt().identityTripUnowned = !0;
      return;
    }
    try {
      r();
    } catch (n) {
      t(`MCP identity-change handler failed: ${d(n)}`, { level: "warn" });
    }
  });
}
function _Bn(e) {
  let r = xt();
  return (
    (r.identityTrippedHandler = e),
    () => {
      if (r.identityTrippedHandler === e) r.identityTrippedHandler = null;
    }
  );
}
function bBn() {
  let e = xt(),
    r = e.identityTripUnowned;
  return ((e.identityTripUnowned = !1), r);
}
function ue() {
  if (!Ul()) return;
  Ee(jEo());
}
function cEe() {
  let e = jEo();
  return (Ee(e), e);
}
function Cbo() {
  let e = cEe();
  return e.kind === "unwired" || e.kind === "incomplete" ? void 0 : e.token;
}
function Fr() {
  return (ue(), xt().identityEpoch);
}
function otn() {
  let e = xt();
  if (!Ul()) return e.identityEpoch;
  return ((e.identityEpoch += 1), e.identityEpoch);
}
var rt = "baseline:rearmed";
function rRs() {
  if (!Ul()) return;
  (otn(), (TL().lastResolvedAccountToken = rt));
}
function rO(e) {
  return (ue(), e === xt().identityEpoch);
}
function stn() {
  let e = xt();
  if (e.identityChangedThisProcess) return;
  ((e.identityChangedThisProcess = !0), f("mcp_discovery_cache", "identity_changed"));
}
function we() {
  return (ue(), xt().identityChangedThisProcess);
}
import {
  createCipheriv as nt,
  createDecipheriv as it,
  createHash as st,
  randomBytes as _e
} from "crypto";
var ke = 32,
  J = 12,
  K = 16,
  V = "v2:",
  Ce = Buffer.from("mcp-dc", "utf8"),
  ct = /^[A-Za-z0-9+/]{43}=$/;
function Re(e) {
  if (typeof e !== "string" || !ct.test(e)) return;
  let r = Buffer.from(e, "base64");
  return r.length === ke ? r : void 0;
}
async function N() {
  let e = await Noe();
  if (e === Sl) return;
  let r = De(e?.mcpDiscoveryCacheKey);
  if (r) return r;
  let n = _e(ke).toString("base64"),
    s = !1;
  try {
    s = (
      await Kn().mutate((y) => (Re(y.mcpDiscoveryCacheKey) ? y : { ...y, mcpDiscoveryCacheKey: n }))
    ).success;
  } catch {
    s = !1;
  }
  if (!s) return;
  let c = await Noe();
  if (c === Sl) return;
  return De(c?.mcpDiscoveryCacheKey);
}
function De(e) {
  return Re(e);
}
function be(e, r, n) {
  if (!Number.isInteger(e) || e < 0 || e > 255)
    throw Error("discovery-cache seal: schema version must fit one byte");
  let s = [r, n].map((y) => Buffer.from(y, "utf8")),
    c = Buffer.allocUnsafe(Ce.length + 1 + s.reduce((y, l) => y + 4 + l.length, 0)),
    a = Ce.copy(c, 0);
  a = c.writeUInt8(e, a);
  for (let y of s) ((a = c.writeUInt32BE(y.length, a)), (a += y.copy(c, a)));
  return c;
}
function Me(e, r) {
  let n = _e(J),
    s = nt("aes-256-gcm", e.key, n, { authTagLength: K });
  s.setAAD(e.aad);
  let c = Buffer.concat([s.update(r, "utf8"), s.final()]),
    a = s.getAuthTag();
  return V + Q(e.cacheKey) + ":" + Buffer.concat([n, c, a]).toString("base64url");
}
function Q(e) {
  return st("sha256").update(e, "utf8").digest().subarray(0, Ae).toString("base64url");
}
var Ae = 16,
  Pe = Math.ceil((Ae * 4) / 3),
  at = new RegExp(`^[A-Za-z0-9_-]{${Pe}}$`),
  dt = /^[A-Za-z0-9_-]*$/;
function Te(e) {
  return xe(e)?.digest;
}
function xe(e) {
  if (!e.startsWith(V)) return;
  let r = V.length + Pe;
  if (e.length <= r || e[r] !== ":") return;
  let n = e.slice(V.length, r),
    s = e.slice(r + 1);
  if (!at.test(n) || !dt.test(s)) return;
  return { digest: n, body: s };
}
function fe(e, r) {
  if (!r.startsWith(V)) return { ok: !1, reason: "v1" };
  let n = xe(r);
  if (!n) return { ok: !1, reason: "short" };
  if (n.digest !== Q(e.cacheKey)) return { ok: !1, reason: "header" };
  let s = Buffer.from(n.body, "base64url");
  if (s.length < J + K) return { ok: !1, reason: "short" };
  let c = s.subarray(0, J),
    a = s.subarray(s.length - K),
    y = s.subarray(J, s.length - K);
  try {
    let l = it("aes-256-gcm", e.key, c, { authTagLength: K });
    return (
      l.setAuthTag(a),
      l.setAAD(e.aad),
      { ok: !0, plaintext: Buffer.concat([l.update(y), l.final()]).toString("utf8") }
    );
  } catch {
    return { ok: !1, reason: "tag" };
  }
}
var ut = 4096,
  ft = 1024,
  lt = new W(() => new Ie());
function qh() {
  return lt.of(U().host);
}
function ZDt(e, r) {
  if (!e || !r) return;
  try {
    return btoa(`${e}:${r}`);
  } catch {
    return;
  }
}
function pt() {
  return QOs() !== void 0;
}
class Ie {
  seen = new Set();
  off = !1;
  incomplete = !1;
  overflowNotice = null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let r = re(e, ft);
    if (this.seen.has(r)) return;
    if (this.seen.size >= ut) {
      ((this.incomplete = !0), (this.overflowNotice ??= !0));
      return;
    }
    this.seen.add(r);
  }
  recordingOff() {
    if (!this.off && pt())
      ((this.off = !0), this.seen.clear(), (this.incomplete = !1), (this.overflowNotice = null));
    return this.off;
  }
  takeOverflowNotice() {
    if (this.overflowNotice === !0) return ((this.overflowNotice = !1), !0);
    return !1;
  }
  snapshot() {
    return (this.recordingOff(), { atoms: [...this.seen], complete: !this.incomplete });
  }
}
function SBn(e) {
  let r = TL();
  ((r.accountResolver = e), (r.lastResolvedAccountToken = void 0));
}
function wBn(e) {
  TL().eraResolver = e;
}
function ht() {
  return TL().eraResolver();
}
function vBn() {
  return TL().accountResolver !== void 0;
}
function xT(e) {
  switch (e.type) {
    case "stdio":
    case void 0:
    case "sdk":
    case "sse-ide":
    case "ws-ide":
      return !1;
    default:
      return !0;
  }
}
function hft(e, r) {
  return !rO(r) && xT(e);
}
function EBn(e, r) {
  return { name: e, type: "failed", config: r, error: R5n, errorCode: "IDENTITY_CHANGED" };
}
function kBn(e) {
  return e.some((r) => xT(r.config));
}
function gt() {
  return cEe().token;
}
var pe = 1,
  mt = 900,
  vt = 14400,
  St = 604800,
  Et = 1;
function He() {
  let e = i.MCP_DISCOVERY_CACHE_STRIKES;
  return e && e > 0 ? e : Et;
}
var wt = 384,
  $e = 448,
  ne = p(() => {
    let e = import.meta
      .require(
        __sourceFilePath_bf3f0f5d129bce0a(
          new __sourceFilePath_bf3f0f5d129bce0a_URL("./chunk-43z4gqzg.js", import.meta.url)
        )
      )
      .mcpClientModule()
      .discoveryWireSchemas();
    return u({
      v: A(pe),
      serverName: o(),
      cacheKey: o(),
      savedAt: v(),
      toolsSavedAt: v().optional(),
      consecutiveRefreshFailures: v().int().nonnegative(),
      serverInfo: e.implementation.optional(),
      negotiatedEra: B(axr).optional(),
      capabilities: e.serverCapabilities,
      tools: T(e.tool),
      commands: T(e.prompt),
      resources: T(e.resource),
      templates: T(e.resourceTemplate).optional()
    });
  });
function Ct() {
  let e = i.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((e && e > 0 ? e : mt) * 1000, Ke());
}
function Ke() {
  let e = i.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(e && e > 0 ? e : vt, St) * 1000;
}
function uEe(e) {
  return Ge(e) === void 0;
}
function Dt(e) {
  return ie.some((r) => r.reason === e);
}
var ie = [
  {
    prop: "discoveryCache",
    reason: "opt-out",
    excludes: (e) => e === !1,
    normalize: (e) => (e === !1 ? !1 : void 0),
    valueDomain: [void 0, !1]
  },
  {
    prop: "headersHelper",
    reason: "headers-helper",
    excludes: (e) => Boolean(e),
    normalize: (e) => (e ? e : void 0),
    valueDomain: [void 0]
  }
];
function Ve(e) {
  let r = { ...e };
  for (let { prop: n, normalize: s } of ie) {
    if (!(n in r)) continue;
    let c = s(r[n]);
    if (c === void 0) delete r[n];
    else r[n] = c;
  }
  return r;
}
function _t(e) {
  let r = e;
  if (typeof r.url === "string" && Wot(r.url)) return !0;
  if (r.headers && typeof r.headers === "object") {
    for (let n of Object.values(r.headers)) if (typeof n === "string" && Wot(n)) return !0;
  }
  return !1;
}
var kt = [
    "MCP_DISCOVERY_CACHE_TTL_S",
    "MCP_DISCOVERY_CACHE_MAX_STALE_S",
    "MCP_DISCOVERY_CACHE_STRIKES"
  ],
  Rt = [LVt, oB, Id];
function ze(e) {
  let r = process.env[e];
  return r !== void 0 && o5(e, r);
}
function Ue() {
  return nr() && i.MCP_DISCOVERY_CACHE === !0 && !ze("MCP_DISCOVERY_CACHE");
}
function Ye(e) {
  if (
    !Ue() ||
    kt.some(ze) ||
    e.type !== "http" ||
    e.scope !== "dynamic" ||
    e.agentSource !== void 0 ||
    jh(e)
  )
    return !1;
  let r = _kt(e.url);
  if (r === null) return !1;
  let n = rr(r.sessionSegment);
  if (!m6(r.sessionSegment) || !hd.ownCcrSessionIds.some((h) => rr(h) === n)) return !1;
  let s = Sze(e.headers, "x-mcp-server-id"),
    c = s[0];
  if (
    s.length !== 1 ||
    c === void 0 ||
    !HYr.test(c) ||
    r.toolboxMcpServerId !== c ||
    r.mcpServerId === c
  )
    return !1;
  let a = Sze(e.headers, XBt);
  if (a.length !== 1 || (a[0] !== "directory" && a[0] !== "custom")) return !1;
  if (
    Sze(e.headers, KFr).length > 0 ||
    !r.upstreamUrl ||
    /^ccr-owner-resolved:/i.test(r.upstreamUrl)
  )
    return !1;
  let y = [r.mcpServerId, c],
    l = [`cse_${n}`, `session_${n}`];
  return !(
    PRe(e.url) ||
    y.some((h) => YTr.includes(h)) ||
    [...foi(), ...Rt].some((h) => l.some((S) => y.includes(z5(S, h))))
  );
}
function e9e(e) {
  return uEe(e) && !Ye(e);
}
function Ge(e) {
  let r = NLt();
  if (r !== void 0) return r;
  if (we()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if (Vd(e) || _qe(e)) return "cli-owned";
  if (_t(e)) return "env-placeholder";
  if (D$(e.url) && !v0(e)) return "ambient-credential";
  if (Gf(e.url)) {
    if (!Ye(e)) return "ambient-credential";
  } else if (Ue()) return "ambient-credential";
  let n = e;
  for (let { prop: s, reason: c, excludes: a } of ie) if (a(n[s])) return c;
  return;
}
function O() {
  return Y(Le(), "mcp-discovery-cache");
}
async function Mt(e, r) {
  if (!uEe(r)) return !1;
  return (await je(e, r)).kind !== "degenerate";
}
async function je(e, r) {
  if (r.type !== "http" && r.type !== "sse") return { kind: "none" };
  let n = await Noe();
  if (n === Sl) return { kind: "degenerate" };
  let s = n?.mcpOAuth?.[td(e, r)];
  if (!s) return { kind: "none" };
  let c = s.refreshToken;
  if (!c) return { kind: "degenerate" };
  return { kind: "resolved", hash: et(c).slice(0, 16) };
}
async function At(e, r) {
  if (r.type !== "http" && r.type !== "sse") return "grant:none";
  let n = await je(e, r);
  switch (n.kind) {
    case "none":
      return "grant:none";
    case "resolved":
      return `grant:${n.hash}`;
    case "degenerate":
      return;
  }
}
async function Pt(e, r) {
  let n = cEe();
  if (n.kind === "unwired" || n.kind === "incomplete") return;
  let s = await At(e, r);
  if (s === void 0) return;
  let c = [n.token];
  if (r.type === "http" || r.type === "sse") c.push(s);
  return { fingerprint: Be("sha256").update(c.join("\x00")).digest("hex"), grantToken: s };
}
function ye(e, r, n, s) {
  let c = [
    e,
    r,
    `era:${n}`,
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __sourceFilePath_bf3f0f5d129bce0a(
        new __sourceFilePath_bf3f0f5d129bce0a_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION ?? "unknown",
    ...(s ? ["offer:io.modelcontextprotocol/ui"] : [])
  ].join("\x00");
  return `${Be("sha256").update(c).digest("hex").slice(0, 32)}.json`;
}
var Tt = /^[0-9a-f]{16}\0/;
function TN(e) {
  let r = `${e}-`,
    n = TL().filePathMemo;
  for (let s of n.keys()) {
    if (!s.startsWith(r)) continue;
    if (Tt.test(s.slice(r.length))) n.delete(s);
  }
}
function x(e, r) {
  return ir(e, Ve(r));
}
async function It(e, r) {
  return (await b(e, r))?.path;
}
async function lK(e, r) {
  if (!Ul()) return;
  try {
    return (await b(e, r))?.legToken;
  } catch {
    return;
  }
}
async function b(e, r) {
  let n = x(e, r),
    s = ht(),
    c = _un(),
    a = gt(),
    y = `${n}\x00${a}\x00era:${s}\x00ui:${c}`,
    l = TL().filePathMemo,
    h = l.get(y);
  if (h) return h;
  let S = (async () => {
    let w = await Pt(e, r);
    if (w === void 0) return;
    return {
      path: Y(O(), ye(n, w.fingerprint, s, c)),
      grantToken: w.grantToken,
      fingerprint: w.fingerprint,
      cacheKey: n,
      aad: be(pe, n, w.fingerprint),
      legToken: `${w.grantToken}\x00era:${s}\x00${a}`
    };
  })();
  l.set(y, S);
  let C = () => {
    if (l.get(y) === S) l.delete(y);
  };
  return (
    S.then((w) => {
      if (w === void 0) C();
    }, C),
    S
  );
}
function L() {
  return TL().storage;
}
function R() {
  return TL().storageV5;
}
function he(e) {
  return We.userConfigDir("mcp-discovery-cache", [yt(e)]);
}
var Ot = { namespace: "userConfigDir", dir: "mcp-discovery-cache" },
  F = 8388608;
function ge(e) {
  return Math.max(e.savedAt, e.toolsSavedAt ?? 0);
}
class j extends Error {
  entryPath;
  reason;
  constructor(e, r, n) {
    super(n);
    this.entryPath = e;
    this.reason = r;
    this.name = "RefusedDiscoveryEntryError";
  }
}
class me extends j {
  constructor(e) {
    super(e, "oversize", "discovery-cache: oversize entry");
    this.name = "OversizeDiscoveryEntryError";
  }
}
class ee extends j {
  constructor(e) {
    super(e, "symlink", "discovery-cache: symlinked entry refused");
    this.name = "SymlinkedDiscoveryEntryError";
  }
}
class te extends j {
  constructor(e) {
    super(e, "non-regular", "discovery-cache: non-regular entry refused");
    this.name = "NonRegularDiscoveryEntryError";
  }
}
function oe(e) {
  return e instanceof j;
}
async function ce(e, r) {
  let n = TL().readGateForTest;
  if (n) await n;
  if (r) return Lt(r, e);
  try {
    if ($s === 0) {
      let c = await L().lstat(e);
      if (c === void 0) return;
      if (c.isSymbolicLink) throw new ee(e);
      if (!c.isFile) throw new te(e);
    }
    let s;
    try {
      s = await L().readTail(e, F + 1, { noFollow: !0 });
    } catch (c) {
      let a = E(c);
      if (a === "ELOOP") throw new ee(e);
      if (a === "ENXIO") throw new te(e);
      throw c;
    }
    if (s.length > F) throw new me(e);
    return s.toString("utf8");
  } catch (s) {
    if (G(s)) return;
    throw s;
  }
}
async function Lt(e, r) {
  let n = he(r),
    s = await e.read([{ key: n, offset: 0, length: F + 1 }], { symlinks: "refuse" });
  if (!s.ok) {
    let a = "cause" in s.error ? E(s.error.cause) : void 0;
    if (a === "ELOOP") throw new ee(r);
    if (a === "ENXIO") throw new te(r);
    throw Error("discovery-cache: read failed", { cause: s.error });
  }
  let c = s.value.items[0];
  if (!c.found) return;
  if (c.totalBytes > F) throw new me(r);
  return Buffer.from(c.value).toString("utf8");
}
async function Ft(e, r, n) {
  if (n) {
    let c = await n.write(he(e), r);
    if (!c.ok) throw Error("discovery-cache: write failed", { cause: c.error });
    return;
  }
  let s = L();
  (await s.mkdir(O(), $e), await s.atomicWrite(e, r, wt));
}
async function Bt(e) {
  if (!e) return L().list(O());
  let r = [],
    n;
  do {
    let s = await e.listEntries(Ot, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...(n !== void 0 && { cursor: n })
    });
    if (!s.ok) throw Error("discovery-cache: list failed", { cause: s.error });
    for (let c of s.value.items)
      if (c.kind === "key" && c.key.namespace === "userConfigDir") {
        let a = c.key.relPath[0];
        if (a !== void 0 && c.key.relPath.length === 1) r.push(a);
      }
    n = s.value.cursor;
  } while (n);
  return r;
}
async function z(e, r) {
  if (r) {
    let n = await r.delete(he(e));
    if (!n.ok) throw Error("discovery-cache: delete failed", { cause: n.error });
    return;
  }
  try {
    await L().delete(e);
  } catch (n) {
    if (!G(n)) throw n;
  }
}
async function TBn(e, r, n = Date.now()) {
  let s = Ge(r);
  if (s !== void 0 && !Dt(s))
    return { kind: "miss", reason: s === "transport" ? "transport" : "disabled" };
  if (s !== void 0) {
    H();
    let _ = Yt(e, r),
      M = Gt(_),
      de = TL().admissionPurgedKeySets;
    if (!de.has(M))
      (de.add(M),
        Ut(e, r, _).then((Qe) => {
          if (!Qe) de.delete(M);
        }));
    return (
      se(e, `discovery-cache: ${s} \u2014 purging this server's cache-key family, serving miss`),
      { kind: "miss", reason: "disabled" }
    );
  }
  let c;
  try {
    c = await b(e, r);
  } catch (_) {
    return (
      se(e, `discovery-cache: fingerprint failed: ${_}`),
      { kind: "miss", reason: "no-fingerprint" }
    );
  }
  if (c === void 0) return { kind: "miss", reason: "no-fingerprint" };
  let a = c.path,
    y = () => {
      P(a, e, void 0).catch(() => {});
    },
    l = () => (y(), m("mcp_discovery_cache", "corrupt_entry"), { kind: "miss", reason: "corrupt" }),
    h;
  try {
    h = await ce(a, R());
  } catch (_) {
    if (oe(_)) return (se(e, `discovery-cache: ${_.reason} entry, deleting`), l());
    return (se(e, `discovery-cache: read failed: ${_}`), { kind: "miss", reason: "absent" });
  }
  if (h === void 0) return { kind: "miss", reason: "absent" };
  let S = await Ze(h, c, e, () => P(a, e, void 0));
  if (S.miss) {
    if (S.miss === "unsealed")
      if (S.cause === "v1") f("mcp_discovery_cache", "unsealed_v1");
      else m("mcp_discovery_cache", `unsealed_${S.cause}`);
    return { kind: "miss", reason: S.miss };
  }
  let C = ne().safeParse(ot(S.plaintext, !1));
  if (!C.success) return (se(e, "discovery-cache: corrupt entry, deleting"), l());
  let w = C.data;
  if (w.cacheKey !== x(e, r))
    return (se(e, "discovery-cache: entry keyed for another server, deleting"), l());
  if (w.consecutiveRefreshFailures >= He())
    return (y(), { kind: "miss", reason: "strike-threshold" });
  let k = Ke();
  if (ge(w) - n > k) return (y(), { kind: "miss", reason: "expired" });
  let D = Math.max(0, n - w.savedAt);
  if (D >= k) return (y(), { kind: "miss", reason: "expired" });
  if (D < Ct() && !(w.capabilities.tools && w.tools.length === 0))
    return { kind: "fresh", entry: w, ageMs: D };
  return { kind: "stale", entry: w, ageMs: D };
}
function q(e, r, n) {
  return TL()
    .serializeWrite(e, n)
    .catch((s) => {
      se(r, `discovery-cache: write op failed: ${s}`);
    });
}
function Z(e) {
  return TL().deleteGenerationByCacheKey.get(e) ?? 0;
}
function ae(e) {
  TL().deleteGenerationByCacheKey.set(e, Z(e) + 1);
}
var Xe = 8;
async function Ht(e, r) {
  if (r.type !== "http" && r.type !== "sse") return [];
  let n = await Noe();
  if (n === Sl) return Sl;
  let s = td(e, r),
    c = n?.mcpOAuth?.[s],
    a = [];
  if (typeof c?.accessToken === "string") a.push(c.accessToken);
  if (typeof c?.refreshToken === "string") a.push(c.refreshToken);
  if (typeof c?.clientSecret === "string") a.push(c.clientSecret);
  let y = n?.mcpOAuthClientConfig?.[s]?.clientSecret;
  if (typeof y === "string") a.push(y);
  return a;
}
var le = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i,
  $t = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function qe(e, r, n) {
  if (typeof r !== "string" || !le.test(e)) return;
  if ((n(r.trim()), n(r.replace($t, "").trim()), /^cookie$/i.test(e)))
    for (let s of r.split(";")) {
      let c = s.indexOf("=");
      n((c === -1 ? s : s.slice(c + 1)).trim());
    }
}
function fEe(e, r) {
  let n = qh();
  if (n.recordingOff()) return;
  let s = new Map();
  for (let [c, a] of Object.entries(e ?? {})) s.set(c.toLowerCase(), a);
  for (let [c, a] of Object.entries(r)) {
    if (s.get(c.toLowerCase()) === a) continue;
    qe(c, a, (y) => {
      if (y.length >= Xe) n.record(y);
    });
  }
}
var Kt = 268435456;
function Oe(e) {
  let r = [e],
    n = ma(e).slice(1, -1);
  if (n !== e) r.push(n);
  try {
    let s = encodeURIComponent(e);
    if (s !== e) r.push(s);
  } catch {}
  return r;
}
function Vt(e, r, n = []) {
  let s = r,
    c = new Set(),
    a = (l) => {
      if (l !== void 0 && l.length >= Xe) c.add(l);
    };
  for (let [l, h] of Object.entries(s.headers ?? {})) qe(l, h, a);
  try {
    let l = typeof s.url === "string" ? new URL(s.url) : void 0;
    for (let [h, S] of l?.searchParams.entries() ?? []) if (le.test(h)) for (let C of Oe(S)) a(C);
    for (let h of l?.search.replace(/^\?/, "").split("&") ?? []) {
      let S = h.indexOf("=");
      if (S > 0 && le.test(h.slice(0, S))) a(h.slice(S + 1));
    }
    for (let h of l ? [l.password, l.username] : [])
      if (h) {
        a(h);
        try {
          a(decodeURIComponent(h));
        } catch {}
      }
  } catch {}
  for (let l of n) a(l);
  let y = qh().snapshot();
  if (!y.complete) return "presented-log-incomplete";
  for (let l of y.atoms) a(l);
  if (c.size * e.length > Kt) return "scan-budget";
  for (let l of c) for (let h of Oe(l)) if (e.includes(h)) return "material";
  return;
}
function ve(e, r) {
  return { key: e, cacheKey: r.cacheKey, aad: r.aad };
}
async function Ze(e, r, n, s) {
  let c = await N();
  if (c === void 0)
    return (
      se(
        n,
        "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process"
      ),
      BEo(),
      { miss: "key-unavailable" }
    );
  let a = fe(ve(c, r), e);
  if (a.ok) return { plaintext: a.plaintext };
  se(n, `Discovery cache: entry did not open (${a.reason}) \u2014 discarded`);
  try {
    await s();
  } catch (y) {
    se(n, `discovery-cache: reap after failed open skipped ${y}`);
  }
  return { miss: "unsealed", cause: a.reason };
}
function I({ verdict: e, code: r }) {
  if (e === "written") g("mcp_discovery_cache");
  else if (e === "terminal") m("mcp_discovery_cache", r);
  else f("mcp_discovery_cache", r);
  return e;
}
async function Se(e) {
  let { path: r, serverName: n, config: s, cacheKey: c, entry: a, context: y, label: l } = e;
  if (NLt() !== void 0)
    return (
      se(n, `Discovery cache ${l} refused: the cache turned off since this round started`),
      { verdict: "superseded", code: "disabled" }
    );
  if (Z(c) !== e.capturedDeleteGeneration)
    return (
      se(n, `Discovery cache ${l} refused: entry deleted since this round started (tombstone)`),
      { verdict: "superseded", code: "tombstone" }
    );
  if (!rO(y.identityEpoch))
    return (
      se(
        n,
        `Discovery cache ${l} refused: identity changed since this round was fetched (stale epoch)`
      ),
      { verdict: "superseded", code: "stale_epoch" }
    );
  let h = await N();
  if (h === void 0)
    return (
      BEo(),
      se(
        n,
        `Discovery cache ${l} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`
      ),
      { verdict: "superseded", code: "key_unavailable" }
    );
  let S;
  try {
    S = await Ht(n, s);
  } catch {
    S = Sl;
  }
  if (S === Sl)
    return (
      se(
        n,
        `Discovery cache ${l} refused: OAuth token store unreadable (cannot verify no secrets on disk)`
      ),
      { verdict: "transient", code: "transient" }
    );
  let C;
  try {
    C = await b(n, s);
  } catch {
    return { verdict: "transient", code: "transient" };
  }
  if (C === void 0 || C.path !== r || C.legToken !== y.grantLeg)
    return (
      se(
        n,
        `Discovery cache ${l} refused: grant or era changed since this round was fetched (stale leg)`
      ),
      { verdict: "superseded", code: "stale_grant" }
    );
  let w = ne().safeParse(a);
  if (!w.success)
    return (
      se(n, `Discovery cache ${l} refused: entry failed schema validation`),
      { verdict: "terminal", code: "schema" }
    );
  let k = ma(w.data);
  if (Buffer.byteLength(k, "utf8") > F)
    return (
      se(n, `Discovery cache ${l} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`),
      { verdict: "terminal", code: "oversize" }
    );
  if (NLt() !== void 0)
    return (
      se(n, `Discovery cache ${l} refused: the cache turned off since this round started`),
      { verdict: "superseded", code: "disabled" }
    );
  let D = Vt(k, s, S);
  if (D !== void 0) {
    if (qh().takeOverflowNotice())
      se(
        n,
        "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process"
      );
    if (D === "scan-budget")
      return (
        se(
          n,
          `Discovery cache ${l} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`
        ),
        { verdict: "terminal", code: "scan_budget" }
      );
    if (D === "presented-log-incomplete")
      return (
        se(
          n,
          `Discovery cache ${l} refused: presented-credential log incomplete (cannot verify no secrets on disk)`
        ),
        { verdict: "terminal", code: "presented_log_incomplete" }
      );
    return (
      se(n, `Discovery cache ${l} refused: entry would carry presented secret material`),
      { verdict: "terminal", code: "secret_material" }
    );
  }
  let _ = Me(ve(h, C), k);
  if (Buffer.byteLength(_, "utf8") > F)
    return (
      se(n, `Discovery cache ${l} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`),
      { verdict: "terminal", code: "oversize" }
    );
  try {
    await Ft(r, _, R());
  } catch (M) {
    return (
      se(n, `Discovery cache ${l} refused: disk write failed (${d(M)})`),
      { verdict: "transient", code: "transient" }
    );
  }
  return { verdict: "written", code: "written" };
}
async function P(e, r, n) {
  if (n !== void 0) ae(n);
  await q(e, r, () => z(e, R()));
}
async function zt(e, r) {
  await Promise.race([
    e.then(
      () => {},
      () => {}
    ),
    X(r, void 0, { unref: !0 })
  ]);
}
async function mJ(e, r = 1500) {
  (H(), await zt(e, r));
}
function H() {
  if (!cO()) return;
  let e = TL();
  if (e.flushCleanup) return;
  e.flushCleanup = bt(() => e.drain(YOs));
}
async function ABn(e, r, n, s) {
  let c = s.now ?? Date.now(),
    a = x(e, r),
    y = Z(a);
  if (!rO(s.identityEpoch)) return "superseded";
  if (s.grantLeg === void 0) return "superseded";
  if (!uEe(r)) return "superseded";
  H();
  let l;
  try {
    l = await b(e, r);
  } catch {
    return I({ verdict: "transient", code: "transient" });
  }
  if (l === void 0) return "superseded";
  if (l.legToken !== s.grantLeg)
    return (
      se(
        e,
        "Discovery cache write refused: grant changed since this round was fetched (stale grant)"
      ),
      I({ verdict: "superseded", code: "stale_grant" })
    );
  let h = l.path,
    S = {
      v: pe,
      serverName: e,
      cacheKey: a,
      savedAt: c,
      consecutiveRefreshFailures: 0,
      ...(n.serverInfo && { serverInfo: n.serverInfo }),
      ...(n.negotiatedEra !== void 0 && { negotiatedEra: n.negotiatedEra }),
      capabilities: n.capabilities,
      tools: n.tools,
      commands: n.commands,
      resources: n.resources,
      templates: n.templates
    },
    C = h,
    w;
  return (
    await q(C, e, async () => {
      if (!(await Mt(e, r))) return;
      let k;
      try {
        k = await ce(C, R());
      } catch (D) {
        if (!oe(D)) {
          (se(e, `Discovery cache write deferred: existing entry unreadable (${d(D)})`),
            (w = { verdict: "transient", code: "transient" }));
          return;
        }
        k = void 0;
      }
      if (k !== void 0) {
        let D = await N(),
          _ = D && l ? fe(ve(D, l), k) : void 0,
          M = _?.ok ? ne().safeParse(ot(_.plaintext, !1)) : void 0;
        if (M?.success && ge(M.data) > c) {
          w = { verdict: "superseded", code: "fresher_on_disk" };
          return;
        }
      }
      w = await Se({
        path: C,
        serverName: e,
        config: r,
        cacheKey: a,
        entry: S,
        context: s,
        capturedDeleteGeneration: y,
        label: "write"
      });
    }),
    w ? I(w) : "superseded"
  );
}
async function Je(e, r) {
  let n = e.path,
    s;
  try {
    s = await ce(n, R());
  } catch (y) {
    if (oe(y)) {
      await z(n, R());
      return;
    }
    throw y;
  }
  if (s === void 0) return;
  let c = await Ze(s, e, r, () => z(n, R()));
  if (c.miss) return;
  let a = ne().safeParse(ot(c.plaintext, !1));
  if (!a.success) {
    await z(n, R());
    return;
  }
  return a.data;
}
async function CBn(e, r, n, s) {
  if (!rO(s.identityEpoch)) return;
  if (s.grantLeg === void 0) return;
  let c = x(e, r),
    a = Z(c);
  if ((H(), !uEe(r))) return;
  let y;
  try {
    y = await b(e, r);
  } catch {
    I({ verdict: "transient", code: "transient" });
    return;
  }
  if (y === void 0) return;
  if (y.legToken !== s.grantLeg) {
    (se(
      e,
      "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)"
    ),
      I({ verdict: "superseded", code: "stale_grant" }));
    return;
  }
  let l = y.path;
  await q(l, e, async () => {
    let h = await Je(y, e);
    if (!h) return;
    if (ge(h) > s.fetchedAt) {
      I({ verdict: "superseded", code: "fresher_on_disk" });
      return;
    }
    let S = {
      ...h,
      tools: n,
      ...(Number.isFinite(s.fetchedAt) && s.fetchedAt > h.savedAt && { toolsSavedAt: s.fetchedAt })
    };
    I(
      await Se({
        path: l,
        serverName: e,
        config: r,
        cacheKey: c,
        entry: S,
        context: s,
        capturedDeleteGeneration: a,
        label: "tools merge"
      })
    );
  });
}
async function itn(e, r, n) {
  if (!rO(n.identityEpoch)) return;
  if (n.grantLeg === void 0) return;
  let s = x(e, r),
    c = Z(s);
  if ((H(), !uEe(r))) return;
  let a;
  try {
    a = await b(e, r);
  } catch {
    return;
  }
  if (a === void 0) return;
  if (a.legToken !== n.grantLeg) {
    se(
      e,
      "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)"
    );
    return;
  }
  let y = a.path;
  await q(y, e, async () => {
    let l = await Je(a, e);
    if (!l) return;
    if (!rO(n.identityEpoch)) {
      se(
        e,
        "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)"
      );
      return;
    }
    let h;
    try {
      h = await b(e, r);
    } catch {
      return;
    }
    if (h === void 0 || h.path !== y || h.legToken !== n.grantLeg) {
      se(
        e,
        "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)"
      );
      return;
    }
    let S = { ...l, consecutiveRefreshFailures: l.consecutiveRefreshFailures + 1 };
    if (S.consecutiveRefreshFailures >= He()) {
      (ae(s), await z(y, R()));
      return;
    }
    await Se({
      path: y,
      serverName: e,
      config: r,
      cacheKey: s,
      entry: S,
      context: n,
      capturedDeleteGeneration: c,
      label: "refresh-failure strike"
    });
  });
}
function RBn(e, r) {
  (async () => {
    let n = Fr();
    await itn(e, r, { identityEpoch: n, grantLeg: await lK(e, r) });
  })().catch((n) =>
    t(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${d(n)}`)
  );
}
async function Ne(e, r) {
  for (let c of r) ae(c);
  let n = new Set([...r].map(Q)),
    s = await Bt(R());
  for (let c of s) {
    if (!c.endsWith(".json")) continue;
    let a = Y(O(), c);
    try {
      let y;
      try {
        y = await ce(a, R());
      } catch (h) {
        if (oe(h)) {
          await P(a, e, void 0);
          continue;
        }
        throw h;
      }
      if (y === void 0) continue;
      let l = Te(y);
      if (l === void 0) {
        await P(a, e, void 0);
        continue;
      }
      if (n.has(l)) await P(a, e, void 0);
    } catch (y) {
      se(e, `discovery-cache: purge scan skipped ${y}`);
    }
  }
}
async function Fe(e, r) {
  await Ne(e, new Set([x(e, r)]));
}
function Ut(e, r, n) {
  let s = O(),
    c = !1;
  return q(s, e, async () => {
    let a;
    try {
      a = (await b(e, r))?.fingerprint;
    } catch {
      a = void 0;
    }
    if (a === void 0) {
      (await Ne(e, n), (c = !0));
      return;
    }
    let y = [];
    for (let l of n) {
      let h = l;
      for (let S of axr)
        for (let C of [!1, !0]) (y.push(P(Y(s, ye(l, a, S, C)), e, h)), (h = void 0));
    }
    (await Promise.all(y), (c = !0));
  }).then(() => c);
}
function Yt(e, r) {
  let n = Ve(r),
    s = ie.map(({ prop: y, normalize: l, valueDomain: h }) => {
      let S = new Set(h.map((w) => l(w))),
        C = n[y];
      if (C !== void 0) S.add(C);
      return { prop: y, states: [...S] };
    }),
    c = new Set(),
    a = (y, l) => {
      if (y === s.length) {
        c.add(ir(e, l));
        return;
      }
      let { prop: h, states: S } = s[y];
      for (let C of S) {
        let w = { ...l };
        if (C === void 0) delete w[h];
        else w[h] = C;
        a(y + 1, w);
      }
    };
  return (a(0, { ...n }), c);
}
function Gt(e) {
  return [...e].sort().join(`
`);
}
async function eHt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return;
  if (!cO()) return;
  (H(), ae(x(e, r)));
  try {
    let n = await b(e, r);
    if (n === void 0) {
      await Fe(e, r);
      return;
    }
    let s = x(e, r),
      c = O(),
      a = new Set(axr.flatMap((l) => [!1, !0].map((h) => Y(c, ye(s, n.fingerprint, l, h))))),
      y = [P(n.path, e, s)];
    for (let l of a) if (l !== n.path) y.push(P(l, e, void 0));
    (await Promise.all(y), await Fe(e, r));
  } catch (n) {
    se(e, `discovery-cache: delete failed: ${n}`);
  }
}
async function xBn(e, r) {
  let n;
  try {
    n = await It(e, r);
  } catch {
    return async () => {};
  }
  if (n === void 0) return async () => {};
  try {
    return (
      await L().mkdir(O(), $e),
      await vl(n, {
        realpath: !1,
        retries: 0,
        stale: 60000,
        onCompromised: (s) =>
          se(e, `discovery-cache: refresh lock compromised, skipping refresh: ${s}`)
      })
    );
  } catch (s) {
    let c = s instanceof Error ? s.message : String(s);
    if (s?.code === "ELOCKED" || c.includes("already being held")) {
      se(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return (se(e, `discovery-cache: lock error, proceeding: ${c}`), async () => {});
  }
}
export {
  _Bn,
  bBn,
  cEe,
  Cbo,
  Fr,
  otn,
  rRs,
  rO,
  stn,
  YTr,
  qh,
  ZDt,
  SBn,
  wBn,
  vBn,
  xT,
  hft,
  EBn,
  kBn,
  uEe,
  e9e,
  TN,
  lK,
  TBn,
  fEe,
  mJ,
  ABn,
  CBn,
  itn,
  RBn,
  eHt,
  xBn
};

//# sourceMappingURL=chunk-w1mqqc2v.js.map
