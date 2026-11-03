// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { FE } from "./chunk-t7kfat3g.js";
import { d, E } from "./chunk-fs43t96t.js";
import { wn } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ir } from "./chunk-5rw2zfa0.js";
import { Mpe } from "./chunk-k8kjagwj.js";
import { x6e, SPt } from "./chunk-rk9gqbt8.js";
import { aD } from "./chunk-yhfqc2mr.js";
import { o, T, u, $e } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
import { stat as C } from "fs/promises";
import { basename as w, dirname as h, normalize as y } from "path";
function x(r) {
  return $e([r, T(r)])
    .optional()
    .transform((n) => (n === void 0 ? [] : Array.isArray(n) ? n : [n]));
}
var g = p(() => {
  let r = Ir(Mpe, (n) => x(n.schema()));
  return u({ $schema: o().optional(), ...r });
});
function Mfr() {
  return g().parse({});
}
async function S5e(r, n) {
  let i;
  if (z() && n !== void 0 && r === aD()) {
    let e = await D(n, r);
    if (!e.ok) return e.result;
    i = e.raw;
  } else
    try {
      let e = await C(r).catch((l) => (E(l) === "ENOENT" ? null : Promise.reject(l)));
      if (e && (!e.isFile() || e.size > x6e))
        return { ok: !1, error: `${r} is not a regular file (or exceeds 1MiB)` };
      i = await hn().read(r);
    } catch (e) {
      if (E(e) === "ENOENT") return { ok: !0, config: Mfr(), unknownKeys: [] };
      return { ok: !1, error: `failed to read ${r}: ${d(e)}` };
    }
  let s = ot(i, !1);
  if (s === null) return { ok: !1, error: `failed to parse ${r} as JSON` };
  let f = g().safeParse(s);
  if (!f.success) return { ok: !1, error: `config validation failed: ${f.error.message}` };
  let a = new Set(Object.keys(g().shape)),
    c = typeof s === "object" && s !== null ? Object.keys(s).filter((e) => !a.has(e)) : [];
  return { ok: !0, config: f.data, unknownKeys: c };
}
async function D(r, n) {
  let i = await SPt(r);
  switch (i.kind) {
    case "text":
      return { ok: !0, raw: i.text };
    case "absent":
      return { ok: !1, result: { ok: !0, config: Mfr(), unknownKeys: [] } };
    case "refused":
      return { ok: !1, result: { ok: !1, error: `${n} is not a regular file (or exceeds 1MiB)` } };
    case "failed":
      return { ok: !1, result: { ok: !1, error: `failed to read ${n}: ${i.error.code}` } };
    case "threw":
      return { ok: !1, result: { ok: !1, error: `failed to read ${n}: ${d(i.error)}` } };
  }
}
function Dfr(r, n) {
  let i = h(r),
    s = y(i),
    f = w(r),
    a = FE.watch(i, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 0,
      usePolling: O() === "macos",
      interval: 100,
      ignored: (c) => {
        let e = y(c);
        return e !== s && w(e) !== f;
      },
      awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
      atomic: !0,
      ignorePermissionErrors: !0
    });
  return (
    a.on("add", n),
    a.on("change", n),
    a.on("unlink", n),
    a.on("error", (c) => t(`[daemon-config] watcher error: ${d(c)}`, { level: "warn" })),
    () => void a.close().catch(() => {})
  );
}
function Eds(r, n) {
  let i = { stop: [], start: [], restart: [] };
  for (let s of Object.keys(Mpe)) {
    let f = r[s] ?? [],
      a = n[s] ?? [],
      c = Math.max(f.length, a.length);
    for (let e = 0; e < c; e++) {
      let l = `${s}:${e}`,
        m = f[e],
        k = a[e];
      if (m !== void 0 && k === void 0) i.stop.push({ id: l, kind: s, previousConfig: m });
      else if (m === void 0 && k !== void 0) i.start.push({ id: l, kind: s, config: k });
      else if (!wn(m, k)) i.restart.push({ id: l, kind: s, config: k, previousConfig: m });
    }
  }
  return i;
}
export { Mfr, S5e, Dfr, Eds };

//# sourceMappingURL=chunk-xvmrngkh.js.map
