// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { ui } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { Ynr, jt } from "./chunk-ajtyjx88.js";
import { p } from "./chunk-qmkm2x59.js";
import { Kqt, BTt } from "./chunk-d54avynm.js";
import { F4t, yo, f6 } from "./chunk-azq9hjy0.js";
import { pS, bR, q5 } from "./chunk-znkwh1rm.js";
import { Oh } from "./chunk-yw4wqxm9.js";
import { eS } from "./chunk-p56qmwgb.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, oe, T, u, A } from "./chunk-0bqrj5ah.js";
var I = 25,
  U = "public",
  O = 3,
  B = 200,
  G = 8000,
  Y = 3600000,
  q = 8388608,
  F = p(() =>
    u({
      id: o().min(1),
      name: o().min(1),
      summary: o()
        .optional()
        .catch(void 0),
      description: o()
        .optional()
        .catch(void 0),
      release: u({ version: o() })
        .optional()
        .catch(void 0),
      publisher: u({ name: o() })
        .optional()
        .catch(void 0),
      links: u({
        documentation: o()
          .optional()
          .catch(void 0)
      })
        .optional()
        .catch(void 0),
      surfaces: T(o())
        .optional()
        .catch(void 0),
      source: u({
        type: A("directory"),
        repository: u({ url: o().min(1), path: o().optional(), reviewed_commit: o().optional() })
      }),
      checks: u({
        review: u({
          state: o(),
          by: u({ type: o() })
            .optional()
            .catch(void 0)
        })
      })
    })
  );
function PHn(e) {
  return F().safeParse(x(e)).data;
}
function N(e) {
  if (Kqt(e) !== null) return !0;
  if (!e.startsWith("https://") || f6(e)) return !1;
  let n;
  try {
    n = new URL(e);
  } catch {
    return !1;
  }
  return !yo(n.hostname) && !F4t(n.hostname, "ssh.github.com");
}
function eco(e) {
  let { state: n, by: h } = e.checks.review;
  if (n !== "done") return !1;
  switch (h?.type) {
    case "partner":
      return N(e.source.repository.url);
    case "anthropic":
      return BTt(e.source.repository.url);
    default:
      return !1;
  }
}
var V = p(() => u({ data: T(oe()).nullish(), next_page: o().nullish() }));
function m3e() {
  return pS("allow_plugin_directory_search") && eS() === null;
}
function Vki() {
  let e = bR("allow_plugin_directory_search");
  return (
    (e === "cache_miss" || e === "unregistered"
      ? null
      : q5("allow_plugin_directory_search", "it", "is")) ??
    "your organization's policy could not be checked yet; try again in a moment"
  );
}
function qki() {
  if (m3e() || eS() !== null) return null;
  return "policy-not-known";
}
async function tco({
  query: e,
  pageToken: n,
  signal: h,
  pageSize: w = I,
  include: E,
  keepTokenWhenEmpty: j = !1
}) {
  let L = re(e.trim(), B),
    l = L !== "",
    d = n !== void 0,
    _ = performance.now();
  if (!pS("allow_plugin_directory_search")) {
    let i = bR("allow_plugin_directory_search");
    return (
      z("unavailable", _, l, d, { cause: c("policy") }),
      m(
        "plugin_directory_search",
        i === "org_denied"
          ? "policy_denied"
          : i === "unregistered"
            ? "policy_mirror_unregistered"
            : i === "route_missing"
              ? "policy_route_missing"
              : "policy_cache_miss"
      ),
      {
        ok: !1,
        reason: "unavailable",
        cause: "policy",
        message:
          (i === "cache_miss" || i === "unregistered"
            ? null
            : q5("allow_plugin_directory_search", "it", "is")) ??
          "your organization's policy could not be checked yet; try again in a moment",
        blockedBy: i === "org_denied" || i === "latched" ? "policy_limit" : void 0
      }
    );
  }
  let M = eS();
  if (M !== null)
    return (
      z("unavailable", _, l, d, { cause: c("policy") }),
      {
        ok: !1,
        reason: "unavailable",
        cause: "policy",
        message: "it is blocked by your organization",
        blockedBy: M
      }
    );
  let D = [],
    P = 0,
    v = 0,
    b = n;
  try {
    do {
      let s = new URLSearchParams({ limit: String(w), visibility: U });
      if (E !== void 0) s.set("include", E);
      if (l) s.set("q", L);
      if (b !== void 0) s.set("page", b);
      let r = await jt.get(`${Ynr}?${s}`, {
        auth: "none",
        publicPluginDirectoryCatalog: !0,
        timeout: G,
        maxContentLength: q,
        signal: h,
        validateStatus: () => !0
      });
      if ((v++, !r.ok)) {
        let y = r.reason === "essential-traffic-only",
          R = y ? "essential-traffic-only" : "data-residency";
        return (
          z("unavailable", _, l, d, { cause: c(R) }),
          f("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"),
          { ok: !1, reason: "unavailable", cause: R }
        );
      }
      if (r.status === 404)
        return (
          z("not_served", _, l, d, { http_status: 404 }),
          f("plugin_directory_search", "not_served"),
          { ok: !1, reason: "not-served" }
        );
      if (r.status >= 400) {
        (z("failed", _, l, d, { error_kind: c("http"), http_status: r.status }),
          m("plugin_directory_search", `http_${r.status}`));
        let y;
        if (r.status === 400 && d)
          y = "it could not continue this results page; search again to start from the first page";
        else if (r.status === 429 || r.status >= 500)
          y = "it is temporarily unavailable; try again shortly";
        else y = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0,
          C = Oh(typeof R === "string" ? R : void 0);
        return {
          ok: !1,
          reason: "failed",
          message: y,
          ...(C !== void 0 && { retryAfterMs: Math.min(C, Y) })
        };
      }
      let S = V().safeParse(r.data);
      if (!S.success)
        return (
          z("failed", _, l, d, { error_kind: c("invalid_schema") }),
          m("plugin_directory_search", "invalid_schema"),
          { ok: !1, reason: "failed", message: "it returned a response Claude Code could not read" }
        );
      for (let y of S.data.data ?? []) {
        let R = PHn(y);
        if (R) D.push(R);
        else P++;
      }
      b = S.data.next_page || void 0;
    } while (D.length < w && b !== void 0 && v < O);
    let i = D.length === 0 && b !== void 0,
      k = i && !j;
    if (k) b = void 0;
    return (
      z("success", _, l, d, {
        result_count: D.length,
        skipped_count: P,
        request_count: v,
        has_more: b !== void 0,
        chase_exhausted: i
      }),
      g("plugin_directory_search"),
      { ok: !0, page: { listings: D, nextPageToken: b, skippedRows: P, truncated: k || void 0 } }
    );
  } catch (i) {
    if (h?.aborted) return { ok: !1, reason: "aborted" };
    let { kind: k, status: s, message: r } = ui(i);
    return (
      t(`plugin directory search failed (${k}${s ? ` ${s}` : ""}): ${r}`),
      z("failed", _, l, d, { error_kind: c(k), ...(s !== void 0 && { http_status: s }) }),
      m("plugin_directory_search", k),
      {
        ok: !1,
        reason: "failed",
        message:
          s === void 0 && k !== "other"
            ? "it could not be reached; check your network connection"
            : "the request failed"
      }
    );
  }
}
function x(e) {
  if (Array.isArray(e)) return e.map(x);
  if (H(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e)) if (w !== null) n[h] = x(w);
    return n;
  }
  return e;
}
function z(e, n, h, w, E = {}) {
  a("tengu_plugin_directory_search", {
    outcome: c(e),
    has_query: h,
    is_continuation: w,
    duration_ms: Math.round(performance.now() - n),
    ...E
  });
}
export { PHn, eco, m3e, Vki, qki, tco };

//# sourceMappingURL=chunk-jvcbfwgk.js.map
