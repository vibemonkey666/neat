// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { In } from "./chunk-h5gbmqm1.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { Z2e, egn } from "./chunk-yv5e7kyr.js";
import { Hqs, b3n, kHe, xze, Pze, xun } from "./chunk-frrn501g.js";
import { p } from "./chunk-qmkm2x59.js";
import { arr, jt } from "./chunk-ajtyjx88.js";
import { YS } from "./chunk-jtb5bzvb.js";
import { cet } from "./chunk-d5zj5299.js";
import { W8e } from "./chunk-5tt7a3m0.js";
import { yx } from "./chunk-1ky5r8qb.js";
import { o, v, u } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { basename as z, join as B, sep as k } from "path";
var y = new Set(["x-upload-token", "content-type"]),
  A = 4096,
  P = 120000,
  D = 4096,
  U = p(() => u({ sha256: o(), size: v() })),
  F = {
    400: "put_hash_mismatch",
    403: "put_refused",
    409: "put_already_used",
    410: "put_expired",
    413: "put_size_mismatch",
    429: "put_busy",
    503: "put_busy"
  },
  C = 2,
  O = 2000,
  x = 1e4;
async function T(e, a, m, h, n) {
  let _ = arr(e.url),
    f = _ === void 0 ? void 0 : new URL(e.url);
  if (
    _ === void 0 ||
    f === void 0 ||
    f.search !== "" ||
    f.hash !== "" ||
    !h.endsWith("/") ||
    !f.pathname.startsWith(h) ||
    !/^[A-Za-z0-9_-]{1,256}$/.test(f.pathname.slice(h.length))
  )
    return "put_url_refused";
  let s = { "content-type": "application/octet-stream" };
  for (let [c, r] of Object.entries(e.headers)) {
    if (!y.has(c.toLowerCase()) || r.length > A || /[^\x20-\x7e]/.test(r))
      return "put_header_refused";
    s[c.toLowerCase()] = r;
  }
  try {
    for (let c = 0; ; c++) {
      let r = await jt.put(`/${f.pathname.slice(1)}`, a, {
        auth: "none",
        baseUrl: _,
        headers: s,
        maxRedirects: 0,
        maxBodyLength: a.length,
        maxContentLength: D,
        timeout: P,
        signal: n,
        validateStatus: () => !0
      });
      if (!r.ok)
        return r.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (r.status === 200) {
        let b = U().safeParse(r.data);
        return b.success && b.data.sha256 === m && b.data.size === a.length
          ? void 0
          : "put_bad_answer";
      }
      let l = F[r.status] ?? "put_failed";
      if (l !== "put_busy" || c === C) return l;
      let R = Number(r.response.headers["retry-after"]);
      if ((await X(Number.isFinite(R) && R >= 0 ? Math.min(R * 1000, x) : O, n), n.aborted))
        return "canceled";
    }
  } catch (c) {
    if (n.aborted) return "canceled";
    return (
      t(`[file inputs] upload threw: ${d(c)}`, { level: "error" }),
      E(c) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network"
    );
  }
}
function yUn({
  screen: e,
  maxFileBytes: a,
  maxTotalBytes: m,
  uploadPathPrefix: h,
  namesResolvedPaths: n = !1
}) {
  return {
    async hash(_, f) {
      let s = [],
        c = 0;
      for (let r of _) {
        if (f.aborted) return [...s, { path: r, code: "canceled" }];
        let l = await DTr(r, e, a);
        if ("code" in l) return [...s, n ? l : { path: r, code: l.code }];
        if (((c += l.buf.length), c > m)) return [...s, { path: r, code: "too_large_total" }];
        s.push({ path: r, name: l.name, size: l.buf.length, sha256: l.sha256 });
      }
      return s;
    },
    async put(_, f) {
      let s = [],
        c = 0;
      for (let { path: r, sha256: l, url: R, headers: b } of _) {
        if (f.aborted) return [...s, { path: r, code: "canceled" }];
        let g = await DTr(r, e, a);
        if ("code" in g)
          return [...s, g.code === "resolves_elsewhere" ? { path: r, code: "changed" } : g];
        if (((c += g.buf.length), c > m)) return [...s, { path: r, code: "too_large_total" }];
        if (g.sha256 !== l) return [...s, { path: r, code: "changed" }];
        let S = await T({ url: R, headers: b }, g.buf, l, h, f);
        if (S !== void 0) return [...s, { path: r, code: S }];
        s.push({ path: r, ok: !0 });
      }
      return s;
    }
  };
}
function H(e, a) {
  let m = YS(e);
  if (m === null) return !0;
  return (
    e !== a &&
    w(m) !== w(a) &&
    !(i.CLAUDE_CODE_REMOTE === !0 && xun(m, a, { product: Z2e, attach: egn }))
  );
}
function w(e) {
  return cet(In(e.length > 1 && e.endsWith(k) ? e.slice(0, -1) : e)).replace(/^[a-z]:/, (a) =>
    a.toUpperCase()
  );
}
async function lbo(e, a, { fromChat: m = !1 } = {}) {
  return (await kHe(e, a)) || (!m && [e, a].some((h) => b3n(h) || Hqs(h)));
}
async function DTr(e, a, m, { followsLinks: h = !1 } = {}) {
  let n = await a(e);
  if (n === void 0) return { path: e, code: "path_rejected" };
  if (n.requiredDigest === void 0 && (await lbo(e, n.realPath, n)))
    return (
      t("[file inputs] a path was rejected: a credential, or Claude's own"),
      { path: e, code: "path_rejected" }
    );
  if (!h && H(e, n.realPath) && !(n.requiredDigest !== void 0 && YS(e) === B(yx(), z(n.realPath))))
    return { path: e, code: "resolves_elsewhere", resolved: n.realPath };
  let _ = await xze(n.realPath);
  if (W8e.test(_)) return { path: e, code: "name_direction" };
  let f = await Pze(n.realPath, m);
  if (!("buf" in f)) return { path: e, code: f.refusal };
  let s = et(f.buf);
  if (n.requiredDigest !== void 0 && s !== n.requiredDigest)
    return { path: e, code: "path_rejected" };
  return { buf: f.buf, name: _, sha256: s };
}
export { yUn, lbo, DTr };

//# sourceMappingURL=chunk-xbn9v0mz.js.map
