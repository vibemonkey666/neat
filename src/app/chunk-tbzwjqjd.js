// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Urr } from "./chunk-at88wjsn.js";
import "./chunk-63a6mqbs.js";
import "./chunk-qmkm2x59.js";
import "./chunk-dmtyt8s1.js";
import { ur } from "./chunk-t86k189s.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import { d, E, G } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { _ } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import { pxe } from "./chunk-v4kbwz0z.js";
import "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { jQe } from "./chunk-6h7ejyet.js";
import "./chunk-qywdxehb.js";
import "./chunk-mgcw65qt.js";
import "./chunk-ddpw2j06.js";
import "./chunk-c3npf81n.js";
import "./chunk-qakn3b85.js";
import "./chunk-ajtyjx88.js";
import "./chunk-afxq0vrk.js";
import "./chunk-95k4nfdh.js";
import "./chunk-dvghjmtr.js";
import { Ir } from "./chunk-5rw2zfa0.js";
import "./chunk-vw9e882a.js";
import "./chunk-6xjawpfq.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-4nzy53ma.js";
import "./chunk-cjnzngfc.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-xe386mry.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-8w2npe9a.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-rhk37je5.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-nrysaqwk.js";
import "./chunk-zem4yd4w.js";
import "./chunk-7zgz07kc.js";
import "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-rj6gws00.js";
import "./chunk-v19xty83.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-7svjr0za.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-5y69fhjv.js";
import { pZt, k8e, q$n, iK, skr, Sho, who } from "./chunk-w14ey53v.js";
import { Vme } from "./chunk-0yxktkgq.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import { H } from "./chunk-p8tprgqa.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
import { constants as z } from "fs";
import {
  mkdir as K,
  mkdtemp as ot,
  open as it,
  realpath as Z,
  rm as V,
  writeFile as at
} from "fs/promises";
import { posix as st } from "path";
var { extname: ut, join: x } = st,
  lt = 120000,
  ct = 600000,
  ft = 1000,
  dt = 2000,
  tt = /^\{\{(in|out):([A-Za-z0-9_-]{1,64})\}\}$/,
  I = "cancelled by client";
function r(e, t, n, a) {
  return { staging: et(e, t, n), telemetryCode: a };
}
function P(e, t) {
  if (typeof e === "string") {
    if (tt.test(e)) t.add(e);
    return;
  }
  if (Array.isArray(e)) {
    for (let n of e) P(n, t);
    return;
  }
  if (H(e)) for (let n of Object.values(e)) P(n, t);
}
function U(e, t) {
  if (typeof e === "string") {
    if (tt.test(e)) return t.get(e) ?? e;
    return e;
  }
  if (Array.isArray(e)) return e.map((n) => U(n, t));
  if (H(e)) return Ir(e, (n) => U(n, t));
  return e;
}
function J(e) {
  let t = ut(e);
  return /^\.[A-Za-z0-9]{1,8}$/.test(t) ? t : "";
}
function Q(e, t) {
  let n;
  try {
    n = skr(k8e, t);
  } catch (a) {
    return { refused: r("tool_error", `invalid ${e} lane_path ${_(t)}: ${d(a)}`) };
  }
  if (jQe(n))
    return {
      refused: r(
        "tool_error",
        `invalid ${e} lane_path ${_(t)}: ${q$n}`,
        void 0,
        "lane_path_reserved"
      )
    };
  return { rel: n };
}
async function Nt(e, t) {
  let n, a, y;
  try {
    let c = await gt(e, t);
    ((n = c.staging), (a = c.tool), (y = c.telemetryCode));
  } catch (c) {
    let N = E(c);
    n = et("tool_error", `unexpected failure: ${N ?? d(c)}`);
  }
  if (t.signal?.aborted) return { staging: n, tool: a };
  if (n.ok) g("ccr_mcp_call_staged");
  else m("ccr_mcp_call_staged", y ?? n.error_code);
  return { staging: n, tool: a };
}
function et(e, t, n) {
  return {
    ok: !1,
    error_code: e,
    detail: t.slice(0, dt).replace(/[\uD800-\uDBFF]$/, ""),
    ...(n !== void 0 && { retryable: n })
  };
}
function pt(e) {
  if (typeof e === "string") return e;
  if (Array.isArray(e))
    return e
      .map((t) =>
        t !== null && typeof t === "object" && "text" in t && typeof t.text === "string"
          ? t.text
          : ""
      )
      .filter(Boolean).join(`
`);
  return "";
}
async function gt(e, t) {
  let n = Urr().safeParse(e);
  if (!n.success) return r("tool_error", `invalid request: ${n.error.message}`);
  let a = n.data;
  if (O() === "windows")
    return r("tool_error", "staged mcp_call is not supported on this platform");
  if (a.output_files !== void 0 && a.expires_at === void 0)
    return r(
      "tool_error",
      "invalid request: expires_at is required when output_files are declared"
    );
  if (a.expires_at !== void 0) {
    let i = Vme(a.expires_at);
    if (Number.isNaN(i))
      return r(
        "expired",
        `expires_at is not an RFC3339 timestamp with a zone: ${a.expires_at}`,
        void 0,
        "expires_at_unparseable"
      );
    if (Date.now() > i) return r("expired", `request expired at ${a.expires_at}`);
  }
  let y = [];
  for (let i of a.input_files ?? []) {
    let s = Q("input", i.lane_path);
    if ("refused" in s) return s.refused;
    y.push({ spec: i, rel: s.rel });
  }
  let c = [],
    N = new Map();
  for (let i of a.output_files ?? []) {
    let s = Q("output", i.lane_path);
    if ("refused" in s) return s.refused;
    let { rel: f } = s,
      p = N.get(f);
    if (p !== void 0)
      return r("tool_error", `duplicate output lane_path: ${i.lane_path} collides with ${p}`);
    (N.set(f, i.lane_path), c.push({ spec: i, rel: f }));
  }
  for (let [i, s] of [
    ["input", a.input_files ?? []],
    ["output", a.output_files ?? []]
  ]) {
    let f = new Set();
    for (let { name: p } of s) {
      if (f.has(p)) return r("tool_error", `duplicate ${i} name: ${p}`);
      f.add(p);
    }
  }
  let W = a.input_files !== void 0 || a.output_files !== void 0;
  if (W) {
    let i = new Set([
        ...y.map(({ spec: u }) => `{{in:${u.name}}}`),
        ...c.map(({ spec: u }) => `{{out:${u.name}}}`)
      ]),
      s = new Set();
    P(a.arguments ?? {}, s);
    let f = [...s].filter((u) => !i.has(u));
    if (f.length > 0)
      return r("tool_error", `invalid request: args token names no declared file: ${f.join(", ")}`);
    let p = c.filter(({ spec: u }) => !s.has(`{{out:${u.name}}}`)).map(({ spec: u }) => u.name);
    if (p.length > 0)
      return r(
        "tool_error",
        `invalid request: declared output not referenced by any {{out:NAME}} token in arguments: ${p.join(", ")}`
      );
  }
  let R;
  try {
    let i;
    if (t.tempRoot === void 0) i = pxe();
    else ((i = t.tempRoot), await K(i, { recursive: !0, mode: 448 }));
    ((R = await ot(x(i, "plugin-tool-"))),
      await K(x(R, "in"), { mode: 448 }),
      await K(x(R, "out"), { mode: 448 }));
  } catch (i) {
    if (R !== void 0) await V(R, { recursive: !0, force: !0 }).catch(() => {});
    let s = E(i);
    return (
      Y("warn", "ptc_staging_unavailable", { code: s ?? "temp_dir_refused" }),
      r("tool_error", `staging unavailable: ${s ?? "temp_dir_refused"}`)
    );
  }
  let D = R;
  try {
    let i = new Map(),
      s = [];
    for (let [o, { spec: h, rel: k }] of y.entries()) {
      if (t.signal?.aborted) return r("tool_error", I);
      let l = await Sho(k);
      if (l.kind === "not_found") return r("input_missing", `input not found: ${h.lane_path}`);
      if (l.kind === "error")
        return r("tool_error", `input fetch failed for ${h.lane_path}: ${l.message}`, l.retryable);
      let A = x(D, "in", `${o}${J(h.lane_path)}`);
      try {
        await at(A, l.buf, { mode: 384 });
      } catch (M) {
        return r("tool_error", `input stage failed: ${E(M) ?? "unknown"}`);
      }
      (i.set(`{{in:${h.name}}}`, A), s.push({ lane_path: h.lane_path, etag: l.content_sha256 }));
    }
    let f = c.map(({ spec: o, rel: h }, k) => {
        let l = x(D, "out", `${k}${J(o.lane_path)}`);
        return (i.set(`{{out:${o.name}}}`, l), { spec: o, rel: h, path: l });
      }),
      p = W ? Ir(a.arguments ?? {}, (o) => U(o, i)) : (a.arguments ?? {}),
      u = Math.min(Math.max(a.timeout_ms ?? lt, ft), ct),
      L = ur(),
      F = !1,
      rt = setTimeout(() => {
        if (L.signal.aborted) return;
        ((F = !0), L.abort(Error("staged mcp_call timed out")));
      }, u),
      q = () => L.abort(t.signal?.reason);
    if (t.signal?.aborted) q();
    else t.signal?.addEventListener("abort", q, { once: !0 });
    let b;
    try {
      b = await t.call(p, L.signal);
    } catch (o) {
      if (F) return r("timeout", `tool did not complete within ${u}ms (${d(o)})`);
      if (t.signal?.aborted) return r("tool_error", `${I} (${d(o)})`);
      return r("tool_error", `tool call failed: ${d(o)}`);
    } finally {
      (clearTimeout(rt), t.signal?.removeEventListener("abort", q));
    }
    if (b.isError) {
      if (F) return r("timeout", `tool call exceeded ${u}ms`);
      if (t.signal?.aborted) return r("tool_error", I);
      let o = pt(b.content);
      return r("tool_error", o || "tool returned an error result");
    }
    let nt = await Z(D),
      j = [];
    for (let { spec: o, rel: h, path: k } of f) {
      if (t.signal?.aborted) return r("tool_error", I);
      let l;
      try {
        l = await Z(k);
      } catch (w) {
        if (G(w)) return r("tool_error", `tool did not produce output: ${o.name}`);
        return r("tool_error", `output read failed for ${o.name}: ${E(w) ?? "unknown"}`);
      }
      if (!l.startsWith(nt + "/"))
        return r("tool_error", `output path escapes the staging dir: ${o.name}`);
      let A = iK,
        M;
      try {
        let w = await it(l, z.O_RDONLY | z.O_NOFOLLOW | z.O_NONBLOCK);
        try {
          let T = await w.stat();
          if (!T.isFile()) return r("tool_error", `output is not a regular file: ${o.name}`);
          if (T.nlink > 1) return r("tool_error", `output has multiple hard links: ${o.name}`);
          if (T.size > A)
            return r("output_too_large", `output ${o.name} is ${T.size} bytes (cap ${A})`);
          let B = Number(T.size),
            v = Buffer.allocUnsafe(B + 1),
            S = 0;
          for (;;) {
            let { bytesRead: X } = await w.read(v, S, B + 1 - S, S);
            if (X === 0) break;
            S += X;
          }
          if (S !== B) return r("tool_error", `output changed during collection: ${o.name}`);
          M = v.subarray(0, S);
        } finally {
          await w.close();
        }
      } catch (w) {
        if (G(w)) return r("tool_error", `tool did not produce output: ${o.name}`);
        return r("tool_error", `output read failed for ${o.name}: ${E(w) ?? "unknown"}`);
      }
      let C = await who(t.syncDir ?? pZt, h, M, o.if_match);
      if (!C.ok)
        return r(
          C.reason === "too_large"
            ? "output_too_large"
            : C.reason === "conflict"
              ? "output_conflict"
              : "tool_error",
          `output write failed for ${o.lane_path}: ${C.error}`,
          C.retryable
        );
      j.push({ lane_path: o.lane_path, etag: C.etag, bytes: M.length });
    }
    return (
      Y("info", "mcp_call_staged_ok", { inputs: s.length, outputs: j.length }),
      {
        staging: { ok: !0, outputs: j, inputs_used: s },
        tool: { content: b.content, structuredContent: b.structuredContent, _meta: b._meta }
      }
    );
  } finally {
    await V(D, { recursive: !0, force: !0 }).catch(() => {});
  }
}
export { Nt as runStagedMcpCall };

//# sourceMappingURL=chunk-tbzwjqjd.js.map
