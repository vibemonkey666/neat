// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { E, G } from "./chunk-fs43t96t.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { Sr, Ae, Fn, qx } from "./chunk-dvghjmtr.js";
import { i } from "./chunk-cj37hmns.js";
import {
  atr,
  ltr,
  Gyn,
  d2t,
  ftr,
  g5,
  u2t,
  MCe,
  tnt,
  Lei,
  nnt,
  Aj,
  w0,
  Vnr
} from "./chunk-ajtyjx88.js";
import { on } from "./chunk-cr7a2cdd.js";
import { Fve, MMt, jEr, yte } from "./chunk-7wy55s2g.js";
import { mjn, lvo } from "./chunk-qd2ec3fx.js";
import { o, v, oe, u, B, A } from "./chunk-0bqrj5ah.js";
import { join as O } from "path";
var C = 2,
  h = 3600000,
  m = 0.1,
  D = ["hosted", "custom_url", "file"],
  w = p(() =>
    u({
      version: A(C),
      fetchedAt: v(),
      staleAt: v(),
      etag: o().refine(g5).optional(),
      source: B(D),
      documentBytes: o(),
      sidecar: oe(),
      rootId: o(),
      document: nnt()
    })
  );
function rMn(e) {
  return O(w0(), `published-${e}.json`);
}
function s() {
  return Sr().publishedCatalogByKey;
}
var g = MCe * 3 + tnt + 4096;
async function cyr(e) {
  let a = s().get(e);
  if (a !== void 0) return a ?? void 0;
  let r = rMn(e),
    n;
  try {
    n = await Aj().readRange(r, 0, g + 1);
  } catch (d) {
    if (!G(d)) t(`[publishedCatalog] cache read failed: ${E(d) ?? "unknown"}`);
    s().set(e, null);
    return;
  }
  let l = n.length > g ? void 0 : w().safeParse(ot(n.toString("utf8"), !1));
  if (!l?.success) {
    (t(`[publishedCatalog] cache file ${l === void 0 ? "oversized" : "invalid"}, discarding`),
      await wso(e));
    return;
  }
  return (await uyr(e, l.data, { verified: !1 }), l.data);
}
async function wso(e) {
  s().set(e, null);
  try {
    await Aj().delete(rMn(e));
  } catch {}
}
function hgs(e) {
  s().set(e, null);
}
async function vso(e, a) {
  await uyr(e, a, { verified: !0 });
  try {
    let r = Aj();
    (await r.mkdir(w0()), await r.atomicWrite(rMn(e), _(a), 384));
  } catch (r) {
    t(`[publishedCatalog] cache write failed: ${E(r) ?? "unknown"}`);
  }
}
async function uyr(e, a, { verified: r }) {
  if ((s().set(e, a), r && a.rootId !== mjn)) for (let n of S(a.document)) ltr(n);
  await Eso(a.document);
}
async function Eso(e) {
  let a = S(e);
  for (let r of a) Gyn(r);
  await Vnr(new Set(a.flatMap((r) => [...atr(r)])));
}
function S(e) {
  return ftr.flatMap((a) => {
    let r = e.surfaces[a],
      n = r === void 0 ? null : u2t(r, a);
    return n === null ? [] : [n];
  });
}
function ygs({
  document: e,
  documentBytes: a,
  sidecar: r,
  etag: n,
  source: l,
  rootId: d,
  now: f = Date.now(),
  random: R = Math.random()
}) {
  return {
    version: C,
    fetchedAt: f,
    staleAt: b(f, R),
    ...(n !== void 0 && { etag: n }),
    source: l,
    documentBytes: Buffer.from(a).toString("base64"),
    sidecar: r,
    rootId: d,
    document: e
  };
}
function _gs(e, a = Date.now(), r = Math.random()) {
  return { ...e, fetchedAt: a, staleAt: b(a, r) };
}
function b(e, a) {
  let r = 1 + m * (2 * a - 1);
  return e + Math.round(h * r);
}
function kso(e, a = Date.now()) {
  let r = Lei(e.expires_at);
  return r !== void 0 && a >= r;
}
function B6e(e, a = Date.now()) {
  let r = e.fetchedAt + h * (1 + m);
  return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || kso(e.document, a);
}
var T = [];
function c() {
  return T;
}
function P(e) {
  return e === "bedrock" || e === "vertex" || e === "foundry" || e === "mantle";
}
function oMn() {
  let e = MMt();
  if (e === "essential_traffic" && lvo()) {
    let a = MMt({ skipEssentialTrafficGate: !0 });
    return y(a);
  }
  return y(e);
}
function fyr(e) {
  return e.source === "fallback" && e.credential !== void 0 && x(e.credential);
}
function k(e) {
  return e !== null && x(Fve(e));
}
function x(e) {
  switch (e) {
    case "oauth":
      return !1;
    case "api_key":
    case "profile":
    case "federation":
      return !0;
  }
}
function y(e) {
  switch (e) {
    case "env_off":
    case "bare":
    case "essential_traffic":
    case "unix_socket":
    case "policy":
      return e;
    case "not_first_party":
      return L();
    case "not_claude_ai_auth":
    case "api_key_helper":
      return on("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
      return "served_applies";
    case null:
      if (k(yte())) return d2t()?.source === "served" ? "served_applies" : null;
      return "served_applies";
  }
}
function L() {
  let e = Ae();
  if (e === "gateway") return "cloud_gateway";
  let a = qx(e),
    r = !a && Fn(),
    n = a ? "platform_flag_off" : r && !lvo() ? "gateway_flag_off" : null;
  if (n !== null && jEr("published") === "off") return n;
  if ((a || r) && !I()) return "release_off";
  if (P(e) && !M(e)) return "release_off";
  return null;
}
function I() {
  return c().length > 0;
}
function M(e) {
  return c().includes(e) || Ne(i.CLAUDE_CODE_MODEL_CATALOG);
}
function M9t() {
  return oMn() === null;
}
function sMn() {
  return Fn() || qx() ? jEr("published") : "primary";
}
function Tso() {
  if (!M9t()) return "off";
  return sMn();
}
export { rMn, cyr, wso, hgs, vso, uyr, Eso, ygs, _gs, kso, B6e, oMn, fyr, M9t, sMn, Tso };

//# sourceMappingURL=chunk-wbks46wa.js.map
