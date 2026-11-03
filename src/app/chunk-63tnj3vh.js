// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wn, ke, no } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { R, d, E } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { _, te, ie, t } from "./chunk-4kxznmzw.js";
import { uA, Hr, Lbe, km, md } from "./chunk-5rw2zfa0.js";
import { LD, g8 } from "./chunk-783pymr7.js";
import { l } from "./chunk-ewvf3tep.js";
import { Dn } from "./chunk-qywdxehb.js";
import { Fu } from "./chunk-13nwb0xt.js";
import { We } from "./chunk-pgnjjhxv.js";
import { $y, Am, vfe } from "./chunk-d54avynm.js";
import { gM } from "./chunk-7c3thgax.js";
import { Sf } from "./chunk-vn4qkmxw.js";
import { Fd, Cet } from "./chunk-p56qmwgb.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import {
  dXe,
  ib,
  zF,
  $sn,
  JNs,
  Ic,
  Rd,
  Lle,
  BRo,
  o$t,
  Pk,
  mG,
  n$s,
  bc,
  nY,
  a$t
} from "./chunk-j0tbz6ra.js";
import { _pe } from "./chunk-nsach619.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { readFile as j } from "fs/promises";
import { join as x } from "path";
var L = "flagged-plugins.json",
  U = 172800000;
function A() {
  return x(Fd(), L);
}
function F(e) {
  let r = te(e);
  if (
    typeof r !== "object" ||
    r === null ||
    !("plugins" in r) ||
    typeof r.plugins !== "object" ||
    r.plugins === null
  )
    return {};
  let s = r.plugins,
    g = {};
  for (let [o, n] of Object.entries(s))
    if (n && typeof n === "object" && "flaggedAt" in n && typeof n.flaggedAt === "string") {
      let u = { flaggedAt: n.flaggedAt };
      if ("seenAt" in n && typeof n.seenAt === "string") u.seenAt = n.seenAt;
      g[o] = u;
    }
  return g;
}
var M = new Set(["ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR"]),
  B = new Set([...M, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent"]);
function T(e) {
  return z() && e !== void 0 && dXe("flagged") !== null ? e : void 0;
}
async function h(e) {
  let r = T(e);
  if (r) {
    let g = await r.read([We.pluginRegistry("flagged")]),
      o = g.ok ? g.value.items[0] : void 0;
    if (!o?.found) return {};
    let n = o.value;
    try {
      return F(Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf-8"));
    } catch {
      return {};
    }
  }
  let s = A();
  try {
    let g = await j(s, { encoding: "utf-8" });
    return F(g);
  } catch {
    return {};
  }
}
async function I(e, r) {
  let s = T(r);
  if (s) {
    let o = await s.write(We.pluginRegistry("flagged"), _({ plugins: e }, null, 2));
    if (o.ok) {
      Ie().flaggedPlugins = e;
      return;
    }
    let n = "telemetryCode" in o.error ? o.error.telemetryCode : void 0;
    if (n !== void 0 && B.has(n))
      t(`Failed to persist flagged plugins: ${vt(o.error)}`, { level: "error" });
    else
      l(
        new R(
          `Failed to persist flagged plugins: ${o.error.code}${n === void 0 ? "" : ` ${n}`}`,
          "flagged plugins v5 write failed"
        )
      );
    return;
  }
  let g = A();
  try {
    await ie().mkdir(Fd());
    let o = _({ plugins: e }, null, 2);
    (await Dn(g, o, 384), (Ie().flaggedPlugins = e));
  } catch (o) {
    let n = E(o);
    if (n !== void 0 && M.has(n)) t(`Failed to persist flagged plugins: ${o}`, { level: "error" });
    else l(o);
  }
}
async function v(e) {
  let r = await h(e),
    s = Date.now(),
    g = !1;
  for (let [o, n] of Object.entries(r))
    if (n.seenAt && s - new Date(n.seenAt).getTime() >= U) (delete r[o], (g = !0));
  if (((Ie().flaggedPlugins = r), g)) await I(r, e);
}
function ARt() {
  return Ie().flaggedPlugins ?? {};
}
async function O(e, r) {
  let s = Ie();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await h(r);
  let g = { ...s.flaggedPlugins, [e]: { flaggedAt: new Date().toISOString() } };
  (await I(g, r), t(`Flagged plugin: ${e}`));
}
async function rls(e, r) {
  let s = Ie();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await h(r);
  let g = new Date().toISOString(),
    o = !1,
    n = { ...s.flaggedPlugins };
  for (let u of e) {
    let f = n[u];
    if (f && !f.seenAt) ((n[u] = { ...f, seenAt: g }), (o = !0));
  }
  if (o) await I(n, r);
}
async function ols(e, r) {
  let s = Ie();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await h(r);
  if (!(e in s.flaggedPlugins)) return;
  let { [e]: g, ...o } = s.flaggedPlugins;
  ((s.flaggedPlugins = o), await I(o, r));
}
function G(e, r, s) {
  let g = new Set(r.plugins.map((u) => u.name)),
    o = `@${s}`,
    n = [];
  for (let u of Object.keys(e.plugins)) {
    if (!u.endsWith(o)) continue;
    let f = u.slice(0, -o.length),
      y = r.renames && a$t(f, r.renames, g)?.kind === "renamed";
    if (!g.has(f) && !y) n.push(u);
  }
  return n;
}
async function RRn(e) {
  await v(e);
  let r = z() && e !== void 0 ? await nY(e) : bc(),
    s = ARt(),
    g = await Rd(e),
    o = [];
  for (let [n, u] of Object.entries(g))
    try {
      if (n.toLowerCase() === $y) continue;
      if (km(u.source) && !Object.keys(r.plugins).some((m) => m.endsWith(`@${n}`))) continue;
      let f = km(u.source) ? await Pk(n, e, { registryEntry: u }) : await mG(n, e);
      if (f === null) {
        if (Object.keys(r.plugins).some((m) => m.endsWith(`@${n}`)))
          a("tengu_plugin_delisted_enforcement", {
            outcome: b("scan-skipped-no-catalog"),
            is_official_marketplace: !1
          });
        continue;
      }
      if (!f.forceRemoveDeletedPlugins) continue;
      let y = G(r, f, n);
      for (let m of y) {
        if (m in s) continue;
        let S = r.plugins[m] ?? [];
        if (!S.some((p) => p.scope === "user" || p.scope === "project" || p.scope === "local"))
          continue;
        for (let p of S) {
          let { scope: k } = p;
          if (k !== "user" && k !== "project" && k !== "local") continue;
          try {
            let P = await _pe(m, k, !0, e, { settingsStillOn: "remove-anyway" });
            a("tengu_plugin_delisted_enforcement", {
              outcome: P.success ? b("uninstalled") : b("uninstall-failed"),
              scope: c(k),
              ...(!P.success && { error_kind: c(g8(P.message)) }),
              ...LD(m, Sf())
            });
          } catch (P) {
            (t(`Failed to auto-uninstall delisted plugin ${m} from ${k}: ${d(P)}`, {
              level: "error"
            }),
              a("tengu_plugin_delisted_enforcement", {
                outcome: b("uninstall-failed"),
                scope: c(k),
                error_kind: c(g8(P)),
                ...LD(m, Sf())
              }));
          }
        }
        (await O(m, e), o.push(m));
      }
    } catch (f) {
      (t(`Failed to check for delisted plugins in "${n}": ${d(f)}`, { level: "warn" }),
        a("tengu_plugin_delisted_enforcement", {
          outcome: b("scan-failed"),
          error_kind: c(g8(f)),
          _PROTO_marketplace_name: n,
          is_official_marketplace: md(n)
        }));
    }
  return o;
}
import { isAbsolute as K, resolve as W } from "path";
function W7r(e, r, s) {
  let g = [],
    o = [],
    n = [];
  for (let [u, f] of Object.entries(e)) {
    let y = ib(r, u),
      m = N(f.source, s?.projectRoot);
    if (!y) g.push(u);
    else if (f.sourceIsFallback) n.push(u);
    else if (!wn(m, y.source)) o.push({ name: u, declaredSource: m, materializedSource: y.source });
    else n.push(u);
  }
  return { missing: g, sourceChanged: o, upToDate: n };
}
async function CRn(e) {
  let r = zF();
  if (Object.keys(r).length === 0)
    return { installed: [], updated: [], failed: [], upToDate: [], skipped: [] };
  let s = e?.storageV5,
    g;
  try {
    g = await Ic(s);
  } catch (i) {
    (t(`reconciler: failed to load known_marketplaces.json, treating as empty: ${d(i)}`, {
      level: "error"
    }),
      (g = {}));
  }
  let o = W7r(r, g, { projectRoot: ke() }),
    n = [
      ...o.missing.map((i) => ({ name: i, source: N(r[i].source), action: "install" })),
      ...o.sourceChanged.map(({ name: i, declaredSource: p }) => ({
        name: i,
        source: p,
        action: "update"
      }))
    ],
    u = [],
    f = [],
    y = [];
  for (let i of n) {
    if (JNs(i.name)) {
      (t(
        `[reconcile] '${i.name}' is the built-in ${Hr}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${$sn} counts, and only while the Directory is turned on.`
      ),
        u.push(i.name));
      continue;
    }
    let p = o$t(i.name);
    if (uA(i.name) || p !== void 0) {
      let P = `${p === void 0 ? Lbe(i.name) : BRo(i.name, p)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
      (t(`[reconcile] '${i.name}' ${P}`, { level: "warn" }),
        y.push({ name: i.name, error: P }),
        e?.onProgress?.({ type: "failed", name: i.name, error: P }));
      continue;
    }
    if (e?.skip?.(i.name, i.source)) {
      u.push(i.name);
      continue;
    }
    if (Cet(i.name)) {
      let k = `not materialized: names starting with "${vfe}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
      (t(`[reconcile] '${i.name}' ${k}`, { level: "warn" }),
        y.push({ name: i.name, error: k }),
        e?.onProgress?.({ type: "failed", name: i.name, error: k }));
      continue;
    }
    if (i.action === "update" && Am(i.source) && !(await Fu(i.source.path))) {
      (t(`[reconcile] '${i.name}' declared path does not exist; keeping materialized entry`),
        u.push(i.name));
      continue;
    }
    f.push(i);
  }
  let m = [],
    S = [];
  if (f.length > 0) {
    t(
      `[reconcile] ${f.length} marketplace(s): ${f.map((i) => `${i.name}(${i.action})`).join(", ")}`
    );
    for (let i = 0; i < f.length; i++) {
      let { name: p, source: k, action: P } = f[i];
      e?.onProgress?.({ type: "installing", name: p, action: P, index: i + 1, total: f.length });
      try {
        let w = await Lle(k, void 0, s, p);
        if (P === "install") m.push(p);
        else S.push(p);
        e?.onProgress?.({ type: "installed", name: p, alreadyMaterialized: w.alreadyMaterialized });
      } catch (w) {
        let D = d(w);
        (y.push({ name: p, error: D }),
          e?.onProgress?.({ type: "failed", name: p, error: D }),
          t(`[reconcile] failed to ${P} marketplace '${p}': ${D}`, { level: "error" }));
      }
    }
  }
  return (await n$s(s), { installed: m, updated: S, failed: y, upToDate: o.upToDate, skipped: u });
}
function N(e, r) {
  if ((e.source === "directory" || e.source === "file") && !K(e.path)) {
    let s = no(),
      g = s ?? r ?? ke(),
      o = s === null ? gM(g) : null;
    return { ...e, path: W(o ?? g, e.path) };
  }
  return e;
}
export { ARt, rls, ols, W7r, CRn, RRn };

//# sourceMappingURL=chunk-63tnj3vh.js.map
