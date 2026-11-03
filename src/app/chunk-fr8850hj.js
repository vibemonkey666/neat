// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { E, G, ui } from "./chunk-fs43t96t.js";
import { Nt, Pe } from "./chunk-4hww8411.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { l } from "./chunk-ewvf3tep.js";
import { Rbe, Sr, Ae, Qs } from "./chunk-dvghjmtr.js";
import {
  iVe,
  due,
  lS,
  d0e,
  Wyn,
  Rei,
  mqo,
  dVr,
  ltr,
  d2t,
  c2t,
  g5,
  ptr,
  pVr,
  u2t,
  mtr,
  MCe,
  nnt,
  Nei,
  mVr,
  f2t,
  qyn,
  $ei,
  Fei,
  Uei,
  voe,
  hVe,
  XVr,
  M2t,
  Kqo,
  Aj,
  w0,
  jt
} from "./chunk-ajtyjx88.js";
import {
  $Er,
  FEr,
  Sgo,
  HBe,
  Fve,
  UEr,
  but,
  q7t,
  BEr,
  wgo,
  Y7t,
  vTs,
  ETs,
  Sut,
  KIe,
  m8e,
  yte,
  aJ
} from "./chunk-7wy55s2g.js";
import { g, f } from "./chunk-brszmkb3.js";
import { Tm, VS, wse, Cb } from "./chunk-5rw2zfa0.js";
import { Y } from "./chunk-arw2bgak.js";
import {
  cyr,
  wso,
  hgs,
  vso,
  uyr,
  Eso,
  ygs,
  _gs,
  kso,
  B6e,
  oMn,
  fyr,
  M9t,
  sMn,
  Tso
} from "./chunk-wbks46wa.js";
import { yjn, qHt } from "./chunk-ze6ha8yq.js";
import { gjn, cnn, gPs, B9e, hjn, VHt } from "./chunk-qd2ec3fx.js";
import { sR } from "./chunk-h2tyaevk.js";
import { py } from "./chunk-tdv74tcm.js";
var de = 5000,
  le = ["not_permitted", "ip_restricted", "lane_unavailable"];
function F(e) {
  return le.some((r) => r === e);
}
async function K(e, r, { etag: o } = {}) {
  let a = HBe(e);
  try {
    let n = ue(e, r),
      s = { ...n.headers, ...(o !== void 0 && { "If-None-Match": o }) },
      i = await jt.get(n.path, {
        auth: n.auth,
        isBackground: !0,
        timeout: de,
        maxContentLength: c2t,
        validateStatus: () => !0,
        ...(Object.keys(s).length > 0 && { headers: s })
      });
    if (!i.ok)
      return (
        t(
          `[servedCatalog] fetch (${a}) skipped: ${i.reason}${i.reason === "no-auth" ? ` (${i.detail})` : ""}`
        ),
        { status: "skipped", reason: i.reason }
      );
    let d = i.status;
    if (d === 304 && o !== void 0)
      return (
        t(`[servedCatalog] fetch (${a}): not modified`),
        { status: "not_modified", httpStatus: d }
      );
    if (d < 200 || d >= 300) {
      let u = H(e, d, i.data);
      return (
        t(`[servedCatalog] fetch (${a}): HTTP ${d}${ge(u)}`),
        u ?? { status: "error", reason: "http_status", httpStatus: d }
      );
    }
    let S = pVr().safeParse(i.data);
    if (!S.success)
      return (
        t(`[servedCatalog] fetch (${a}): response failed validation`),
        { status: "error", reason: "parse_failed", httpStatus: d }
      );
    let h = ve(i.response?.headers),
      p = a === "orgless" ? fe(S.data) : {},
      m = u2t(S.data, r);
    if (m === null)
      return (
        t(`[servedCatalog] fetch (${a}) ok: surface not served${T(p)}`),
        { status: "empty", etag: h, httpStatus: d, ...p }
      );
    if (Wyn(m))
      return (
        t(
          `[servedCatalog] fetch (${a}) ok: ${m.config.models?.length ?? 0} rows kept after row validation dropped others; etag withheld, full refetch next refresh${T(p)}`
        ),
        { status: "ok", catalog: m, etag: void 0, httpStatus: d, ...p }
      );
    return (
      t(`[servedCatalog] fetch (${a}) ok: ${m.config.models?.length ?? 0} rows${T(p)}`),
      { status: "ok", catalog: m, etag: h, httpStatus: d, ...p }
    );
  } catch (n) {
    let { kind: s, status: i } = ui(n);
    switch ((t(`[servedCatalog] fetch (${a}) failed: ${s}${i !== void 0 ? ` ${i}` : ""}`), s)) {
      case "timeout":
        return { status: "error", reason: "timeout" };
      case "network":
        return { status: "error", reason: "network" };
      case "auth":
      case "http":
        return i === void 0
          ? { status: "error", reason: "network" }
          : (H(e, i, Se(n)) ?? { status: "error", reason: "http_status", httpStatus: i });
      case "other":
        return { status: "error", reason: "exception" };
    }
  }
}
function ue(e, r) {
  switch (e.kind) {
    case "account":
      return {
        path: `/api/organizations/:orgUUID/model_selector/${r}`,
        auth: "teleport-org",
        headers: {}
      };
    case "token":
      return {
        path: `/api/model_selector/${r}`,
        auth: "claude-ai-oauth",
        headers: { "anthropic-client-platform": py() }
      };
    case "api_key":
      return {
        path: `/api/model_selector/${r}`,
        auth: "required",
        headers: { "anthropic-client-platform": py() }
      };
    case "profile":
    case "federation":
      return {
        path: `/api/model_selector/${r}`,
        auth: "async",
        headers: { "anthropic-client-platform": py() }
      };
  }
}
function fe(e) {
  let r = Kt(e.organization_uuid)?.toLowerCase(),
    o = ptr.find((a) => a === e.resolution);
  return { ...(r !== void 0 && { organizationUuid: r }), ...(o !== void 0 && { resolution: o }) };
}
function T(e) {
  return e.resolution === void 0 ? "" : ` (resolution ${e.resolution})`;
}
var N = ["oauth_scope_insufficient", "oauth_token_narrowed"],
  I = "ip_not_in_allowed_range",
  j = ["not_found", "account_session_invalid", "organization_not_visible"],
  dt = [...N, I, ...j];
function V(e, r) {
  let o = W(r);
  return e.find((a) => a === o);
}
function H(e, r, o) {
  return he(r, o) ?? me(r, o) ?? pe(e, r, o);
}
function ge(e) {
  if (e === void 0 || !F(e.reason)) return "";
  return `${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""} (${L(e.reason)})`;
}
function L(e) {
  switch (e) {
    case "not_permitted":
      return "this credential cannot read the served list";
    case "ip_restricted":
      return "the organization's IP allowlist refuses this network";
    case "lane_unavailable":
      return "the server has not enabled the org-less route for this session";
  }
}
function he(e, r) {
  let o = V(N, r);
  if (e === 403 && o !== void 0)
    return { status: "error", reason: "not_permitted", httpStatus: e, errorCode: o };
  return;
}
function me(e, r) {
  if (e === 403 && W(r) === I)
    return { status: "error", reason: "ip_restricted", httpStatus: e, errorCode: I };
  return;
}
function pe(e, r, o) {
  if (HBe(e) !== "orgless") return;
  let a = V(j, o);
  if (
    r === 404 ||
    (r === 403 && a === "account_session_invalid") ||
    (r === 401 && a === "organization_not_visible" && Fve(e) === "profile")
  )
    return {
      status: "error",
      reason: "lane_unavailable",
      httpStatus: r,
      ...(a !== void 0 && { errorCode: a })
    };
  return;
}
function W(e) {
  let r = A(e, "error"),
    o = A(A(r, "details"), "error_code");
  return typeof o === "string" && o.length > 0 ? o : void 0;
}
function A(e, r) {
  return typeof e === "object" && e !== null && r in e ? e[r] : void 0;
}
function Se(e) {
  return A(A(e, "response"), "data");
}
function ve(e) {
  let r = e?.etag;
  return g5(r) ? r : void 0;
}
var Ce = 30000,
  z = $Er,
  be = 256;
function q(e) {
  return `${e.replace(/\.json$/, "")}.headless-failed.json`;
}
function _e(e, r = Math.random()) {
  return Sgo(J(e), r);
}
function J(e) {
  return Math.min(Ce * 2 ** (Math.max(1, e) - 1), z);
}
function ye(e) {
  return J(e) * (1 + FEr);
}
async function O9t(e, r = Date.now(), o = Math.random()) {
  let a = await X(e);
  if (a === void 0 || a.failedAt > r) return !0;
  return r - a.failedAt >= _e(a.failures, o);
}
async function X(e) {
  let r;
  try {
    r = (await Aj().readRange(q(e), 0, be)).toString("utf8");
  } catch (s) {
    if (!G(s)) t(`[servedCatalog] headless retry marker read failed: ${E(s) ?? "unknown"}`);
    return;
  }
  let o = ot(r, !1);
  if (typeof o !== "object" || o === null) return;
  let a = "failedAt" in o ? o.failedAt : void 0;
  if (typeof a !== "number" || !Number.isFinite(a)) return;
  let n = "failures" in o ? o.failures : void 0;
  return {
    failedAt: a,
    failures: typeof n === "number" && Number.isSafeInteger(n) && n >= 1 ? n : 1
  };
}
function Re(e, r) {
  return e.failedAt <= r && r - e.failedAt < ye(e.failures) + z;
}
async function QOn(e, r, o = Date.now()) {
  let a = Aj(),
    n = q(e);
  try {
    if (r === "clear") {
      await a.delete(n);
      return;
    }
    let s = r === "back_off" ? await X(e) : void 0,
      i = { failedAt: o, failures: s !== void 0 && Re(s, o) ? s.failures + 1 : 1 };
    (await a.mkdir(w0()), await a.atomicWrite(n, _(i), 384));
  } catch (s) {
    if (!G(s)) t(`[servedCatalog] headless retry marker write failed: ${E(s) ?? "unknown"}`);
  }
}
async function dyr(e, r) {
  let o = Sr().servedCatalogSettledRefreshes;
  if (o.has(r)) return;
  switch ((o.add(r), r.fetchStatus)) {
    case "error":
    case "skipped":
      await QOn(e, we(r) ? "retry_soon" : "back_off");
      return;
    case "ok":
    case "empty":
    case "not_modified":
      await QOn(e, r.entry === void 0 || Sut(r.entry) ? "back_off" : "clear");
      return;
    default:
      return;
  }
}
function we(e) {
  return e.prior === void 0 && e.fetchStatus === "error" && !F(e.fetchReason);
}
function ZOn({ allowNetwork: e }) {
  let r = KIe(),
    o = aJ(),
    a = yte();
  if (r === "off" || a === null)
    return Promise.resolve({
      mode: "off",
      surface: o,
      fetchStatus: "off",
      entry: void 0,
      prior: void 0
    });
  let n = Sr().servedCatalogRefreshes,
    s = q7t(a, o),
    i = n.get(s);
  if (i) return i;
  let d = ke({ mode: r, surface: o, scope: a, allowNetwork: e }).finally(() => {
    n.delete(s);
  });
  return (n.set(s, d), d);
}
async function ke({ mode: e, surface: r, scope: o, allowNetwork: a }) {
  let n,
    s,
    i = HBe(o),
    d = Fve(o),
    S = (p) => ({
      mode: e,
      surface: r,
      route: i,
      credential: d,
      ...(p?.resolution !== void 0 && { resolution: p.resolution }),
      prior: n,
      ...(s !== void 0 && { fetchMs: s })
    }),
    h = () => S(n);
  try {
    if (((n = await BEr(o, r)), n && !Sut(n)))
      return { ...h(), fetchStatus: "cache_fresh", entry: n };
    if (!a) return { ...h(), fetchStatus: "cache_only", entry: n };
    let p = Sr().servedCatalogRefusal;
    if (p !== void 0) return { ...h(), fetchStatus: "cache_only", fetchReason: p, entry: n };
    let m = performance.now(),
      u = await K(o, r, { etag: n?.etag });
    if (((s = Math.round(performance.now() - m)), !UEr(yte(), o)))
      return (
        t("[servedCatalog] scope changed during fetch; answer dropped"),
        { ...h(), fetchStatus: "error", fetchReason: "scope_changed", entry: void 0 }
      );
    switch (u.status) {
      case "ok":
      case "empty": {
        let v = vTs({
          catalog: u.status === "ok" ? u.catalog : null,
          etag: u.etag,
          organizationUuid: u.organizationUuid,
          resolution: u.resolution
        });
        if ((await Y7t(o, r, v), u.status === "ok")) ltr(u.catalog);
        return {
          ...h(),
          resolution: u.resolution,
          fetchStatus: u.status,
          httpStatus: u.httpStatus,
          entry: v
        };
      }
      case "not_modified": {
        let v = n ? ETs(n) : void 0;
        if (v) await Y7t(o, r, v);
        return { ...h(), fetchStatus: "not_modified", httpStatus: u.httpStatus, entry: v };
      }
      case "skipped":
        return { ...h(), fetchStatus: "skipped", fetchReason: u.reason, entry: n };
      case "error": {
        if (F(u.reason)) Sr().servedCatalogRefusal = u.reason;
        let v = n;
        if (u.reason === "lane_unavailable" && n !== void 0)
          (t("[servedCatalog] org-less route not enabled; cached entry discarded"),
            await wgo(o, r),
            (v = void 0));
        return {
          ...S(v),
          fetchStatus: "error",
          fetchReason: u.reason,
          httpStatus: u.httpStatus,
          ...(u.errorCode !== void 0 && { errorCode: u.errorCode }),
          entry: v
        };
      }
    }
  } catch (p) {
    return (l(p), { ...h(), fetchStatus: "error", fetchReason: "exception", entry: n });
  }
}
async function M(e) {
  if (e.trust.kind === "untrusted") return;
  let r = await cyr(e.cacheKey);
  if (r === void 0) return;
  let o = await Ee(r, e);
  if (!o.ok) {
    if (o.reason === "unknown_key" && e.kind !== "hosted" && cnn()) {
      (t(
        "[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file"
      ),
        hgs(e.cacheKey));
      return;
    }
    (t(`[publishedCatalog] cached document not re-established (${o.reason}); discarding`),
      await wso(e.cacheKey));
    return;
  }
  let a = o.entry;
  return (await uyr(e.cacheKey, a, { verified: !0 }), a);
}
async function Ee(e, r) {
  let o = r.trust;
  if (o.kind === "untrusted") return { ok: !1, reason: "untrusted_source" };
  let a = Fe(e.documentBytes);
  if (a === void 0) return { ok: !1, reason: "undecodable_bytes" };
  let n = await VHt({ documentBytes: a, sidecar: e.sidecar, roots: o.roots });
  if (!n.ok) return { ok: !1, reason: n.reason };
  let s = Oe(a);
  if (s === void 0) return { ok: !1, reason: "unparseable_document" };
  let i = await U(s, r, void 0, n.rootId);
  if (i !== void 0) return { ok: !1, reason: i };
  return (
    await qHt(r.cacheKey, s),
    { ok: !0, entry: { ...e, document: s, rootId: n.rootId, source: r.kind } }
  );
}
function Fe(e) {
  let r = Buffer.from(e, "base64");
  if (r.toString("base64") !== e) return;
  return r.length > 0 && r.length <= MCe ? new Uint8Array(r) : void 0;
}
function Oe(e) {
  let r = ot(Buffer.from(e).toString("utf8"), !1);
  if (mVr(r) !== mtr) return;
  let o = nnt().safeParse(r);
  return o.success ? o.data : void 0;
}
function $e(e, r, o) {
  let a = e.kind === "hosted" || gjn(o) === "compiled_roots";
  return Math.max(r?.document.version ?? 0, a ? $ei() : 0);
}
async function U(e, r, o, a) {
  if (e.version < $e(r, o, a)) return "replayed_version";
  if (e.version < (await yjn(r.cacheKey))) return "catalog_version_rollback";
  return;
}
function eMn({ allowNetwork: e }) {
  let r = sMn();
  if (!M9t())
    return Promise.resolve({
      mode: r,
      source: void 0,
      fetchStatus: "off",
      expired: !1,
      entry: void 0
    });
  let o = B9e();
  if (!o.ok)
    return Promise.resolve({
      mode: r,
      source: void 0,
      fetchStatus: "invalid_url",
      expired: !1,
      entry: void 0
    });
  let { source: a } = o,
    n = Sr().publishedCatalogRefreshes,
    s = n.get(a.cacheKey);
  if (s) return s;
  let i = Me({ mode: r, source: a, allowNetwork: e }).finally(() => {
    n.delete(a.cacheKey);
  });
  return (n.set(a.cacheKey, i), i);
}
async function Me({ mode: e, source: r, allowNetwork: o }) {
  let a = { mode: e, source: r },
    n,
    s = (i) => i !== void 0 && kso(i.document);
  try {
    if (r.trust.kind === "untrusted")
      return (
        t(`[publishedCatalog] ${r.kind} source skipped: ${r.trust.reason}`),
        { ...a, fetchStatus: "skipped", fetchReason: r.trust.reason, expired: !1, entry: void 0 }
      );
    if (((n = await M(r)), n && !B6e(n)))
      return { ...a, fetchStatus: "cache_fresh", expired: !1, entry: n };
    if (n && s(n)) t("[publishedCatalog] cached document is past its expires_at; refreshing");
    if (!o && r.kind !== "file")
      return { ...a, fetchStatus: "cache_only", expired: s(n), entry: n };
    let i = await hjn(r, { etag: n?.etag });
    switch (i.status) {
      case "not_modified": {
        let d = n ? _gs(n) : void 0;
        if (d) await vso(r.cacheKey, d);
        return {
          ...a,
          fetchStatus: "not_modified",
          httpStatus: i.httpStatus,
          expired: s(d),
          entry: d
        };
      }
      case "error":
        return {
          ...a,
          fetchStatus: "error",
          fetchReason: i.reason,
          httpStatus: i.httpStatus,
          expired: s(n),
          entry: n
        };
      case "ok": {
        let d = await xe({ source: r, cached: n, result: i });
        if (!d.ok)
          return (
            t(
              `[publishedCatalog] document rejected: ${d.reason}; keeping ${n ? "last good document" : "nothing"}`
            ),
            {
              ...a,
              fetchStatus: "rejected",
              fetchReason: d.reason,
              httpStatus: i.httpStatus,
              expired: s(n),
              entry: n
            }
          );
        let S = ygs({
          document: d.document,
          documentBytes: i.documentBytes,
          sidecar: i.sidecar,
          etag: i.etag,
          source: r.kind,
          rootId: d.rootId
        });
        await vso(r.cacheKey, S);
        let h = s(S);
        return (
          t(
            `[publishedCatalog] accepted ${r.kind} document v${d.document.version} (verified by ${d.rootId})${h ? ", past its expires_at" : ""}`
          ),
          { ...a, fetchStatus: "ok", httpStatus: i.httpStatus, expired: h, entry: S }
        );
      }
    }
  } catch (i) {
    return (
      l(i),
      { ...a, fetchStatus: "error", fetchReason: "exception", expired: s(n), entry: n }
    );
  }
}
async function xe({ source: e, cached: r, result: o }) {
  let a = e.trust;
  if (a.kind === "untrusted") return { ok: !1, reason: "unsigned" };
  if (!o.hasSidecar) return { ok: !1, reason: "unsigned" };
  let n = await VHt({ documentBytes: o.documentBytes, sidecar: o.sidecar, roots: a.roots });
  if (!n.ok) return { ok: !1, reason: n.reason };
  let s = ot(Buffer.from(o.documentBytes).toString("utf8"), !1),
    i = mVr(s);
  if (i === void 0) return { ok: !1, reason: "parse_failed" };
  if (i !== mtr) return { ok: !1, reason: "unsupported_schema" };
  let d = nnt().safeParse(s);
  if (!d.success) return { ok: !1, reason: "parse_failed" };
  let S = d.data,
    h = await U(S, e, r, n.rootId);
  if (h !== void 0) return (await Eso(S), { ok: !1, reason: h });
  return (await qHt(e.cacheKey, S), { ok: !0, document: S, rootId: n.rootId });
}
var De = 1750,
  Te = 1500,
  Ie = 4500;
function Le(e) {
  if (aJ() === "ccr") return Ie;
  return e ? Te : De;
}
var Ue = 2000;
async function Z({ headless: e }) {
  if (Sr().servedCatalogActive !== void 0) return;
  try {
    if (KIe() !== "primary" || Be()) {
      He(e);
      return;
    }
    let r = yte();
    if (r === null) {
      O("no_scope", "no cache scope");
      return;
    }
    let o = aJ(),
      a = await BEr(r, o),
      n = "cache",
      s,
      i = {},
      d,
      S = !1,
      h;
    if (a === void 0) {
      let C = e ? but(r, o) : null;
      if (C !== null && !(await O9t(C))) S = !0;
      else {
        let P = ZOn({ allowNetwork: !0 });
        if (C !== null) P = P.then(async (b) => (await dyr(C, b), b));
        let y = await Q(P, { wait: "first_fetch", headless: e, budgetMs: Le(e), scope: r });
        ((d = y.timing),
          (h = y.outcome),
          (a = y.outcome?.entry),
          (s = y.outcome === void 0 ? "timeout" : y.outcome.fetchStatus),
          (i = ee(y.outcome)),
          (n = `fetch:${s}`));
      }
    } else if (!e && Sut(a)) {
      let C = await Q(ZOn({ allowNetwork: !0 }), {
        wait: "stale_refresh",
        headless: e,
        budgetMs: Ue,
        scope: r
      });
      if (
        ((d = C.timing),
        (h = C.outcome),
        (s = C.outcome === void 0 ? "timeout" : C.outcome.fetchStatus),
        C.outcome?.fetchReason === "lane_unavailable")
      )
        a = void 0;
      else
        ((a = C.outcome?.entry ?? a),
          (n = `stale cache: waited ${d.wait_ms}ms for refresh \u2192 ${Sut(a) ? "kept stale" : "refreshed"} (fetch:${s})`));
    }
    if (Sr().servedCatalogActive !== void 0 || !UEr(yte(), r)) return;
    let p = a?.catalog ?? null,
      m = a?.resolution ?? h?.resolution,
      u = te(r, m);
    if (p === null) {
      if (a !== void 0)
        O("surface_not_served", "server serves this surface no rows", { ...u, ...d }, r);
      else if (S)
        O(
          "headless_held_off",
          "nothing cached, and a recent headless request failed, so this run does not ask again",
          u,
          r
        );
      else if (h !== void 0 && je(h)) We(h, { headless: e, timing: d, lane: u, scope: r });
      else
        O(
          `${e ? "headless_" : ""}fetch_${s ?? "none"}`,
          `nothing cached, ${n} produced no rows`,
          { ...u, ...i, ...d },
          r
        );
      return;
    }
    if (hVe(p).length === 0) {
      O(
        d0e(p).length === 0 ? "no_selectable_rows" : "no_offered_rows",
        `served rows hold no model this build offers (${lS(p).length} rows via ${n})`,
        { ...u, ...d },
        r
      );
      return;
    }
    let v = a !== void 0 && Sut(a);
    (Rei(p, a?.fetchedAt, v, {
      route: HBe(r),
      credential: Fve(r),
      organizationUuid: a?.organizationUuid,
      resolution: a?.resolution
    }),
      g("model_catalog_primary", { decision: c("served"), ...u, ...d }),
      t(
        `[servedCatalog] primary: using served rows (${lS(p).length} rows via ${n} over the ${HBe(r)} route${Ke(Fve(r))}, fetched ${Math.max(0, Math.round((Date.now() - (a?.fetchedAt ?? Date.now())) / 1000))}s ago${v ? ", stale" : ""}); the served list replaces the compiled picker for this session`
      ));
  } catch (r) {
    if ((l(r), Sr().servedCatalogActive === void 0 && KIe() === "primary"))
      O("exception", "exception");
  }
}
async function pgs() {}
function Be() {
  return !1;
}
function He(e) {}
function ee(e) {
  let r = ce(e?.fetchReason),
    o = e?.httpStatus;
  return { ...(r !== void 0 && { fetch_reason: r }), ...(o !== void 0 && { http_status: o }) };
}
function te(e, r) {
  let o = HBe(e);
  return {
    route: c(o),
    credential: c(Fve(e)),
    auth_kind: c(m8e()),
    ...(o === "orgless" && { resolution: c(r ?? "unknown") })
  };
}
function Ke(e) {
  switch (e) {
    case "oauth":
      return "";
    case "api_key":
      return " with the API key";
    case "profile":
      return " with the Console profile";
    case "federation":
      return " with the federation credential";
  }
}
function re(e) {
  return { route: HBe(e), credential: Fve(e) };
}
async function Q(e, r) {
  let { budgetMs: o } = r,
    a = performance.now(),
    n = await Nt(e, o, `served catalog ${r.wait}`).catch(() => {
      return;
    });
  if (n === void 0) e.then((i) => Ne(i, r)).catch((i) => l(i));
  let s = n?.fetchMs;
  return (
    Y(n === void 0 ? "warn" : "info", "model_catalog_refresh_wait", {
      budget_ms: o,
      waited_ms: Math.round(performance.now() - a),
      timed_out: n === void 0,
      first_fetch: r.wait === "first_fetch"
    }),
    {
      outcome: n,
      timing: {
        wait_ms: Math.round(performance.now() - a),
        wait_budget_ms: o,
        wait_timed_out: n === void 0,
        ...(s !== void 0 && { fetch_ms: s }),
        startup_ms: Math.round(a)
      }
    }
  );
}
function Ne(e, { wait: r, headless: o, budgetMs: a, scope: n }) {
  let s = e.fetchStatus === "error" || e.fetchStatus === "skipped",
    i = {
      wait: c(r),
      headless: o,
      wait_budget_ms: a,
      ...te(n, e.resolution),
      ...(e.fetchMs !== void 0 && { fetch_ms: e.fetchMs }),
      fetch_status: c(e.fetchStatus),
      ...ee(e),
      cache_written:
        !s &&
        e.fetchStatus !== "cache_fresh" &&
        e.fetchStatus !== "cache_only" &&
        e.entry !== void 0
    };
  if (s) f("model_catalog_late_fetch", `fetch_${e.fetchStatus}`, i);
  else g("model_catalog_late_fetch", i);
  t(
    `[servedCatalog] ${r} settled after its ${a}ms wait: fetch:${e.fetchStatus}, request took ${e.fetchMs ?? "?"}ms`
  );
}
function je(e) {
  return F(e.fetchReason);
}
var Ve = {
  not_permitted: "credential_scope",
  ip_restricted: "ip_restricted",
  lane_unavailable: "lane_unavailable"
};
function We(e, { headless: r, timing: o, lane: a, scope: n }) {
  let s = Ve[e.fetchReason];
  (mqo(s, re(n)),
    g("model_catalog_primary", {
      decision: c("off"),
      off_reason: c(s),
      ...oe(s),
      headless: r,
      ...a,
      ...(e.httpStatus !== void 0 && { http_status: e.httpStatus }),
      ...(e.errorCode !== void 0 && { refusal_code: c(e.errorCode) }),
      ...o
    }));
  let i = `${e.httpStatus ?? "?"}${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""}`;
  t(
    `[servedCatalog] primary: served rows unavailable (${L(e.fetchReason)}: ${i}); using compiled behavior`
  );
}
function O(e, r, o, a, n) {
  (mqo(e, { ...(a !== void 0 && re(a)), ...(n !== void 0 && { organizationUuid: n }) }),
    f("model_catalog_primary", e, { ...oe(e), ...o }),
    t(`[servedCatalog] primary: served rows unavailable (${r}); using compiled behavior`));
}
function oe(e) {
  return {};
}
var ae = 2000;
async function se({ allowNetwork: e }) {
  try {
    let r = d2t();
    if (r !== void 0 && !fyr(r)) return;
    let o = e && Qs(),
      a = Date.now() + (o ? ae : 0),
      n = qe() && sMn() === "primary" && (await Ye(a)),
      s = { ...D(), ...(n && { remote_settings_unconfirmed: !0 }) },
      i = oMn();
    if (i !== null) {
      if (n && i === "essential_traffic")
        (f("model_catalog_published", "essential_traffic", s),
          t(
            "[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session"
          ));
      return;
    }
    let d = Tso(),
      S = B9e();
    if (!S.ok) {
      if (d === "primary") w(S.reason, "configured catalog URL is unusable", s);
      return;
    }
    let { source: h } = S;
    if (h.trust.kind === "untrusted") {
      if (d === "primary") w(h.trust.reason, `custom source is untrusted (${h.trust.reason})`, s);
      return;
    }
    if (d !== "primary") {
      await cyr(h.cacheKey);
      return;
    }
    let p = aJ(),
      m = await M(h),
      u = "cache",
      v,
      C = o || h.kind === "file",
      P = () => (o ? Math.max(0, a - Date.now()) : ae);
    if (m === void 0 && C) {
      u = "fetch";
      let R = await Nt(eMn({ allowNetwork: e }), P(), "published catalog first fetch").catch(() => {
        return;
      });
      ((m = R?.entry), (v = R === void 0 ? "timeout" : R.fetchStatus), (u = `fetch:${v}`));
    } else if (m !== void 0 && C && B6e(m)) {
      let R = Date.now(),
        k = await Nt(eMn({ allowNetwork: e }), P(), "published catalog stale refresh").catch(() => {
          return;
        });
      ((v = k === void 0 ? "timeout" : k.fetchStatus),
        (m = k?.entry ?? m),
        (u = `stale cache: waited ${Date.now() - R}ms for refresh \u2192 ${B6e(m) ? "kept stale" : "refreshed"} (fetch:${v})`));
    }
    if (d2t() !== r) return;
    let y = m?.document ?? qyn();
    if (y !== null && Nei(y, due(Ae()))) {
      w("publisher_hold", "the publisher holds this backend on compiled behavior", s);
      return;
    }
    let { catalog: b, kind: x } = Ge(m, p);
    if (b === null) {
      if (m !== void 0) w("surface_not_served", "document serves this surface no rows", s);
      else if (C) w(`fetch_${v ?? "none"}`, `nothing cached and no seed, ${u} produced no rows`, s);
      else
        w(
          e ? "deferred_no_cache" : "headless_no_cache",
          `nothing cached, ${e ? "a third-party launch does not wait for the fetch" : "headless launch does not fetch"}, no seed`,
          s
        );
      return;
    }
    if (x === "seed") {
      let R = Uei(b);
      if (R !== null) {
        w(
          "seed_stale",
          `compiled seed resolves ${R.family} to ${R.seed}, this build to ${R.compiled}`,
          s
        );
        return;
      }
      let k = Qs() ? null : ze(b);
      if (k !== null) {
        w(
          "seed_moves_model",
          `compiled seed would move ${k.what} to ${k.seed}${k.compiled === void 0 ? "" : `, this build's table says ${k.compiled}`}`,
          s
        );
        return;
      }
    }
    if (hVe(b).length === 0) {
      w(
        d0e(b).length === 0 ? "no_selectable_rows" : "no_offered_rows",
        `published rows hold no model this build offers (${lS(b).length} rows via ${x})`,
        s
      );
      return;
    }
    let B = m !== void 0 && B6e(m);
    if ((dVr(b, m?.fetchedAt, B), x === "seed")) f("model_catalog_published", "seed", s);
    else if (n) f("model_catalog_published", "remote_settings_unconfirmed", D());
    else g("model_catalog_published", D());
    t(
      `[publishedCatalog] primary: using ${x} rows (${lS(b).length} rows via ${u}${B ? ", stale" : ""})`
    );
  } catch (r) {
    l(r);
    let o = d2t();
    if ((o === void 0 || fyr(o)) && Tso() === "primary") w("exception", "exception", D());
  }
}
async function ie() {
  try {
    if (oMn() === "policy") return;
    let { hasManagedModelDenies: e } = await import("./chunk-yxvdkct2.js");
    if (!e()) return;
    let r = new Set(),
      o = [];
    for (let n of [B9e({ ignoreEnvUrl: !0 }), B9e()]) {
      if (!n.ok || r.has(n.source.cacheKey)) continue;
      r.add(n.source.cacheKey);
      let s = await M(n.source);
      if (s !== void 0) o.push(s.document);
    }
    let a = Sr();
    ((a.publishedDenyDocuments = o), (a.publishedRowNames = void 0));
  } catch (e) {
    l(e);
  }
}
function ze(e) {
  let r = Ae();
  for (let n of [...iVe, "fable"]) {
    let s = Kqo(e, n);
    if (s === void 0) continue;
    let i = Rbe(n, due(r));
    if (i === void 0 || voe(s) !== voe(i) || ne(s) !== ne(i))
      return { what: `the ${n} alias`, seed: s, compiled: i };
  }
  let o = M2t() ? XVr(e, "default") : {},
    a = o.perProvider ?? o.everywhere ?? (r === "firstParty" ? e.state?.model : void 0);
  return a === void 0 ? null : { what: "the Default", seed: a, compiled: void 0 };
}
function ne(e) {
  return /\[1m\]/i.test(e);
}
function Ge(e, r) {
  if (e !== void 0) return { catalog: f2t(e.document, r), kind: e.source };
  return { catalog: Fei(r), kind: "seed" };
}
async function Ye(e) {
  if (Je()) {
    let r = e - Date.now();
    if (r > 0)
      (t(`[publishedCatalog] waiting up to ${r}ms for server-managed settings to be confirmed`),
        await Xe(r));
  }
  if (!cnn()) return !1;
  return (
    t(
      "[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them"
    ),
    !0
  );
}
function qe() {
  let e = oMn();
  return e === null || (e === "essential_traffic" && (gPs() || Cb() === null));
}
function Je() {
  if (!sR() || Tm() || VS() !== void 0) return !1;
  return cnn() || Cb() === null;
}
async function Xe(e) {
  let r = () => {},
    o = new Promise((a) => {
      if (
        ((r = wse((n) => {
          if (n !== void 0) a();
        })),
        VS() !== void 0)
      )
        a();
    });
  try {
    await Pe(o, e);
  } finally {
    r();
  }
}
function D() {
  return { auth_kind: c(m8e()) };
}
function w(e, r, o) {
  (dVr(null),
    f("model_catalog_published", e, o),
    t(`[publishedCatalog] primary: published rows unavailable (${r}); using compiled behavior`));
}
function tMn({ headless: e }) {
  let r = Sr();
  if (r.catalogDecision === void 0) r.catalogDecision = Qe(e).catch((o) => l(o));
  return r.catalogDecision;
}
async function Qe(e) {
  (await Z({ headless: e }), await se({ allowNetwork: !e }), await ie());
}
export { O9t, QOn, dyr, ZOn, eMn, pgs, tMn };

//# sourceMappingURL=chunk-fr8850hj.js.map
