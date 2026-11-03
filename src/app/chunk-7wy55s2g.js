// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { is } from "./chunk-2qx8pe6s.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { E, G } from "./chunk-fs43t96t.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { wr } from "./chunk-jazcqqqr.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { _t } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { Sr, Qs } from "./chunk-dvghjmtr.js";
import { i } from "./chunk-cj37hmns.js";
import {
  atr,
  Wyn,
  Gyn,
  ftr,
  c2t,
  g5,
  Dei,
  Vyn,
  ptr,
  kc,
  U_,
  P_n,
  dR,
  Et,
  Ent,
  gn,
  Aj,
  w0,
  Vnr,
  kn
} from "./chunk-ajtyjx88.js";
import { Nc } from "./chunk-4nzy53ma.js";
import { xfe } from "./chunk-v19xty83.js";
import { on } from "./chunk-cr7a2cdd.js";
import { o, v, u, B, A } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { join as l } from "path";
var f = 2,
  $Er = 3600000,
  FEr = 0.1;
function Sgo(e, r) {
  return Math.round(e * (1 + FEr * (2 * r - 1)));
}
var y = p(() =>
  u({
    version: A(f),
    fetchedAt: v(),
    staleAt: v(),
    etag: o().refine(g5).optional(),
    organizationUuid: o()
      .refine((r) => Kt(r)?.toLowerCase() === r)
      .optional(),
    resolution: B(ptr).optional(),
    catalog: u({ surface: B(ftr), config: Dei(), state: Vyn().optional() }).nullable()
  }).transform((r) => {
    if (r.etag === void 0 || r.catalog === null || !Wyn(r.catalog)) return r;
    let { etag: n, ...a } = r;
    return a;
  })
);
function HBe(e) {
  switch (e.kind) {
    case "account":
      return "org";
    case "token":
    case "api_key":
    case "profile":
    case "federation":
      return "orgless";
  }
}
function Fve(e) {
  switch (e.kind) {
    case "account":
    case "token":
      return "oauth";
    case "api_key":
      return "api_key";
    case "profile":
      return "profile";
    case "federation":
      return "federation";
  }
}
function UEr(e, r) {
  if (e === null || r === null) return !1;
  switch (e.kind) {
    case "account":
      return r.kind === "account" && e.orgUuid === r.orgUuid && e.accountScope === r.accountScope;
    case "token":
      return r.kind === "token" && e.tokenScope === r.tokenScope;
    case "api_key":
      return r.kind === "api_key" && e.keyScope === r.keyScope;
    case "profile":
      return r.kind === "profile" && e.profileScope === r.profileScope;
    case "federation":
      return r.kind === "federation" && e.federationScope === r.federationScope;
  }
}
function but(e, r) {
  switch (e.kind) {
    case "account":
      return l(w0(), `${e.orgUuid}-${e.accountScope}-${r}.json`);
    case "token":
      return l(w0(), `tok-${e.tokenScope}-${r}.json`);
    case "api_key":
      return l(w0(), `key-${e.keyScope}-${r}.json`);
    case "profile":
      return l(w0(), `prof-${e.profileScope}-${r}.json`);
    case "federation":
      return l(w0(), `fed-${e.federationScope}-${r}.json`);
  }
}
function d() {
  return Sr().servedCatalogByKey;
}
function q7t(e, r) {
  switch (e.kind) {
    case "account":
      return `${e.orgUuid}:${e.accountScope}:${r}`;
    case "token":
      return `tok:${e.tokenScope}:${r}`;
    case "api_key":
      return `key:${e.keyScope}:${r}`;
    case "profile":
      return `prof:${e.profileScope}:${r}`;
    case "federation":
      return `fed:${e.federationScope}:${r}`;
  }
}
function wTs(e, r) {
  return d().get(q7t(e, r)) ?? void 0;
}
var s = c2t + 4096;
async function k(e) {
  let r;
  try {
    r = await Aj().readRange(e, 0, s + 1);
  } catch (a) {
    if (!G(a)) t(`[servedCatalog] cache read failed: ${E(a) ?? "unknown"}`);
    return;
  }
  if (r.length > s) return (t("[servedCatalog] cache file oversized"), "invalid");
  let n = y().safeParse(ot(r.toString("utf8"), !1));
  if (!n.success) return (t("[servedCatalog] cache file invalid"), "invalid");
  return n.data;
}
async function BEr(e, r) {
  let n = q7t(e, r),
    a = d().get(n);
  if (a !== void 0) return a ?? void 0;
  let c = await k(but(e, r));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || (c.catalog !== null && c.catalog.surface !== r)) {
    (t(
      `[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`
    ),
      await wgo(e, r));
    return;
  }
  return (await S(n, c), c);
}
async function wgo(e, r) {
  d().set(q7t(e, r), null);
  try {
    await Aj().delete(but(e, r));
  } catch (n) {
    if (!G(n)) t(`[servedCatalog] cache delete failed: ${E(n) ?? "unknown"}`);
  }
}
async function Y7t(e, r, n) {
  await S(q7t(e, r), n);
  try {
    let a = Aj();
    (await a.mkdir(w0()), await a.atomicWrite(but(e, r), _(n), 384));
  } catch (a) {
    t(`[servedCatalog] cache write failed: ${E(a) ?? "unknown"}`);
  }
}
async function S(e, r) {
  if ((O(e, r), r.catalog !== null)) await Vnr(atr(r.catalog));
}
function O(e, r) {
  if ((d().set(e, r), r.catalog !== null)) Gyn(r.catalog);
}
function vTs({
  catalog: e,
  etag: r,
  organizationUuid: n,
  resolution: a,
  now: c = Date.now(),
  random: m = Math.random()
}) {
  return {
    version: f,
    fetchedAt: c,
    staleAt: g(c, m),
    ...(r !== void 0 && (e === null || !Wyn(e)) && { etag: r }),
    ...(n !== void 0 && { organizationUuid: n }),
    ...(a !== void 0 && { resolution: a }),
    catalog: e
  };
}
function ETs(e, r = Date.now(), n = Math.random()) {
  return { ...e, fetchedAt: r, staleAt: g(r, n) };
}
function g(e, r) {
  return e + Sgo($Er, r);
}
function Sut(e, r = Date.now()) {
  let n = e.fetchedAt + $Er * (1 + FEr);
  return r < e.fetchedAt || r >= e.staleAt || e.staleAt > n;
}
var F = "tengu_delegated_quail",
  R = { mode: "off" };
function MMt({ skipEssentialTrafficGate: e = !1 } = {}) {
  if (is(i.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (wr()) return "bare";
  if (!e && _t()) return "essential_traffic";
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!Qs()) return "not_first_party";
  let r = h();
  if (r.scope === null) return r.reason;
  if (!on("allow_model_catalog")) return "policy";
  return null;
}
function KIe() {
  if (MMt() !== null) return "off";
  return jEr("served");
}
function jEr(e) {
  let { value: r, source: n } = kn(F, R);
  return T(r, n, e);
}
function T(e, r, n) {
  return w(e, n);
}
function w(e, r) {
  switch (I(e, r)) {
    case "shadow":
      return "shadow";
    case "primary":
      return "primary";
    default:
      return "off";
  }
}
function I(e, r) {
  if (e === null || typeof e !== "object") return;
  let n;
  if (r === "served") n = "served" in e ? e.served : void 0;
  else n = "published" in e ? e.published : void 0;
  if (typeof n === "string") return n;
  return "mode" in e ? e.mode : void 0;
}
function U() {
  let e = i.CLAUDE_CODE_ORGANIZATION_UUID ?? gn()?.organizationUuid;
  return Kt(e)?.toLowerCase() ?? null;
}
var C = 12;
function h() {
  if (!Et()) return x();
  let e = dR(),
    r = e === "store" ? Kt(gn()?.accountUuid) : Kt(i.CLAUDE_CODE_ACCOUNT_UUID),
    n = U();
  if (r !== null && n !== null)
    return {
      scope: { kind: "account", orgUuid: n, accountScope: et(r.toLowerCase()).slice(0, C) }
    };
  switch (e) {
    case "env":
    case "fd": {
      let a = Ent();
      if (a === null) return { scope: null, reason: "no_account" };
      return { scope: { kind: "token", tokenScope: a.slice(0, C) } };
    }
    case "store":
    case "none":
      return { scope: null, reason: n === null ? "no_org" : "no_account" };
  }
}
function x() {
  if (!1)
    switch (e) {
      case "none":
      case "ANTHROPIC_API_KEY":
      case "/login managed key":
    }
  return { scope: null, reason: "not_claude_ai_auth" };
}
function m8e() {
  if (!Qs()) return "third_party";
  if (Et())
    switch (dR()) {
      case "env":
      case "fd":
        return "host_token";
      case "store":
      case "none":
        return "claudeai_login";
    }
  if (U_()) return "auth_token_env";
  switch (P_n().source) {
    case "ANTHROPIC_API_KEY":
      return "api_key_env";
    case "/login managed key":
      return "api_key_login";
    case "apiKeyHelper":
      return "api_key_helper";
    case "none":
      return L() ?? "none";
  }
}
function L() {
  if (!kc()) return null;
  return xfe() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}
function yte() {
  return h().scope;
}
function aJ() {
  if (i.CLAUDE_CODE_REMOTE) return "ccr";
  if (Nc()) return "ccd";
  return "cc";
}
export {
  $Er,
  FEr,
  Sgo,
  HBe,
  Fve,
  UEr,
  but,
  q7t,
  wTs,
  BEr,
  wgo,
  Y7t,
  vTs,
  ETs,
  Sut,
  MMt,
  KIe,
  jEr,
  m8e,
  yte,
  aJ
};

//# sourceMappingURL=chunk-7wy55s2g.js.map
