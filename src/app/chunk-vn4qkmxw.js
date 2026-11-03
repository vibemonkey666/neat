// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { GNe, bir, Uh, tu, ni, Ns, Vf, Bw, Air, On, Vs, or, md, Rir } from "./chunk-5rw2zfa0.js";
import { t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Mt, Ve, gd } from "./chunk-adv24f35.js";
import { SM } from "./chunk-d54avynm.js";
import { O } from "./chunk-19xvg81r.js";
import { ggn } from "./chunk-hshhqqgx.js";
import { Bc, cr } from "./chunk-ajtyjx88.js";
import { Ro } from "./chunk-1e5yp9hx.js";
import { X8o, pe, Nqe, dse, tqt, qRe, Asr, v9o } from "./chunk-7c3thgax.js";
import { oy } from "./chunk-at88wjsn.js";
import { xvt } from "./chunk-m5htsswa.js";
import { oS } from "./chunk-rve8yzwm.js";
import { hjo, TWt, Smn } from "./chunk-p56qmwgb.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { qY, Iy } from "./chunk-nsr849np.js";
import { m7s } from "./chunk-kpmehc55.js";
import { H } from "./chunk-p8tprgqa.js";
import { Ce } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
var jye = GNe + "@" + Ns;
var Z6s = () => ({
  outermost: [jye],
  seat: `${jye} seated outermost by default: it is not known that neither policy nor plan would seat it`
});
var Nre = ve(Bc(), (e) => e.set(null));
function UXn() {
  let e = ggn.get(),
    n = e === "pro" || e === "max",
    o = Nre.get() === "empty" && Iy() === "answered";
  return n && o && m7s() === e;
}
function Ejr() {
  if (Nre.get() === "empty") Nre.set(null);
}
function kjr() {
  if (Nre.get() !== "served") Nre.set("empty");
}
function Tjr(e) {
  let n = H(e),
    o = n ? e.settings : void 0,
    r = H(o) && Object.keys(o).length === 0,
    i = e === null || e === void 0 || e === "" || (n && Object.keys(e).length === 0);
  if (!r && !i) Nre.set("served");
}
var lWt = Bc();
function $re() {
  let e = pe("policySettings");
  return e !== null && Object.keys(e).length > 0;
}
var Ajr = ve(Bc(), (e) => e.set(null));
function Cjr(e) {
  let n = e !== void 0,
    o = e?.indexOf(jye) ?? -1,
    r = o !== -1,
    i = $re() || Asr(),
    a = i || lWt.get()?.() === !0,
    u = n || a ? void 0 : cr(),
    f = u === "team" || u === "enterprise",
    l = Ajr.get() === !0,
    s = n ? r : a || f || l,
    d = n
      ? r
        ? `seated by managed prependPlugins at position ${o + 1}`
        : "not seated: managed prependPlugins does not list it"
      : a
        ? i
          ? "seated outermost: this machine has managed settings"
          : "seated outermost: this machine has a managed MCP server file"
        : f
          ? `seated outermost: the organization is ${u}`
          : l
            ? "seated outermost: it was seated earlier in this session, and a seat holds until the session ends"
            : `not seated: no managed settings and not a Team or Enterprise organization (${u ?? "none"})`;
  if (s) Ajr.set(!0);
  return { outermost: s ? [jye] : [], seat: `${jye} ${d}` };
}
var e3s = !0;
var P = Ce(oy(), 1);
import { win32 as K } from "path";
function BXn(e, n) {
  return V(e) === V(n);
}
function C(e, n, o) {
  return e.scope === n && e.projectPath === o;
}
function jXn(e, n, o) {
  if (e.scope !== n) return !1;
  if (e.projectPath === void 0 || o === void 0) return e.projectPath === o;
  return BXn(e.projectPath, o);
}
function t3s(e, n, o) {
  return !C(e, n, o) && jXn(e, n, o);
}
function kx(e, n, o) {
  let r = J1o(e, n, o);
  return r >= 0 ? e?.[r] : void 0;
}
function J1o(e, n, o) {
  if (e === void 0) return -1;
  let r = e.findIndex((i) => C(i, n, o));
  return r >= 0 ? r : e.findIndex((i) => jXn(i, n, o));
}
function dWt(e, n, o) {
  let r = (e ?? []).filter((a) => C(a, n, o));
  if (r.length > 0) return r;
  let i = kx(e, n, o);
  return i === void 0 ? [] : [i];
}
function V(e) {
  if (
    O() !== "windows" ||
    /^\/(?!\/)/.test(e) ||
    /^[\\/]{2}[?.][\\/]/.test(e) ||
    /(^|[\\/])\.{1,2}([\\/]|$)/.test(e)
  )
    return e;
  let n = K.normalize(e),
    o = n.length > K.parse(n).root.length ? n.replace(/[\\/]+$/, "") : n;
  return /^[a-z]:/i.test(o) ? o[0].toLowerCase() + o.slice(1) : o;
}
function n3s(e) {
  if (e === null || typeof e !== "object") return;
  let n = "dependencies" in e ? e.dependencies : void 0;
  if (!Array.isArray(n)) return;
  let o = new Map();
  for (let r of n) {
    if (r === null || typeof r !== "object") continue;
    let i = "name" in r ? r.name : void 0;
    if (typeof i !== "string" || i.length === 0) continue;
    let a = "version" in r && typeof r.version === "string" ? r.version : void 0,
      c = "sha" in r && typeof r.sha === "string" ? r.sha : void 0;
    if (a === void 0 && c === void 0) continue;
    let u = "marketplace" in r && typeof r.marketplace === "string" ? r.marketplace : void 0,
      f = u ? `${i}@${u}` : i;
    o.set(f, { version: a, sha: c });
  }
  return o.size > 0 ? o : void 0;
}
function TU(e, n) {
  if (On(e).marketplace) return e;
  let o = On(n).marketplace;
  if (!o || Vf(o)) return e;
  return `${e}@${o}`;
}
function WXn(e, n, o) {
  let r = Bw(e),
    i = On(r),
    a = On(n);
  if (!i.marketplace) return a.name === i.name || n === j(e);
  return n === r || (a.name === i.name && a.marketplace === tu) || n === D(r, o);
}
function D(e, n) {
  let { name: o, marketplace: r } = On(e);
  if (r === void 0 || SM(r.toLowerCase()) || On(n).marketplace !== ni) return;
  let i = `${o}@${ni}`;
  return i === n ? void 0 : i;
}
var L = 1024,
  G = 4096;
function T(e) {
  return (
    t(`intersectConstraints: ${e} \u2014 treating as too complex`, { level: "warn" }),
    { ok: !1, reason: "too-complex" }
  );
}
function cWt(e) {
  if (e.length === 0) return { ok: !0, range: "*" };
  let n = 0;
  for (let c of e) n += c.length;
  if (n > G) return T(`total input ${n} chars > ${G}`);
  let o = [];
  for (let c of e) {
    let u = P.validRange(c);
    if (u === null) return { ok: !1, reason: "invalid" };
    o.push(
      u
        .split("||")
        .map((f) => f.trim())
        .filter(Boolean)
    );
  }
  let r = o[0] ?? [];
  if (r.length > L) return T(`${r.length} conjuncts after 1/${e.length} inputs > ${L}`);
  for (let c = 1; c < o.length; c++) {
    let u = o[c] ?? [],
      f = r.length * u.length;
    if (f > L) return T(`${f} conjuncts after ${c + 1}/${e.length} inputs > ${L}`);
    let l = [];
    for (let s of r) for (let d of u) l.push(`${s} ${d}`);
    r = l;
  }
  let i = r.filter((c) => {
    let u = P.validRange(c);
    return u !== null && P.minVersion(u) !== null;
  });
  if (i.length === 0) return { ok: !1, reason: "disjoint" };
  let a = P.validRange(i.join(" || "));
  return a === null ? { ok: !1, reason: "disjoint" } : { ok: !0, range: a };
}
var J = 200;
function q(e) {
  return /^[\x20-\x7e]+$/.test(e) && P.validRange(e) !== null ? e : gd(Mt(e, 64)) || "\u201C\u201D";
}
function ce(e) {
  return /^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/.test(e) ? e : gd(Mt(e, 64)) || "\u201C\u201D";
}
function W(e) {
  if (e.length <= J) return e;
  let n = e.slice(0, J),
    o = n.lastIndexOf("\u201C") > n.lastIndexOf("\u201D") ? n.slice(0, n.lastIndexOf("\u201C")) : n;
  return `${o}\u2026 (+${e.length - o.length} chars)`;
}
function omn(e, n, o, r, i, a) {
  let c = W(o.map(q).join(", ")),
    u = oSt(P2e(n));
  switch (r) {
    case "disjoint":
      return `${e} ${u} has conflicting version requirements (no version satisfies all of: ${c})`;
    case "too-complex":
      return `${e} ${u} has version requirements too complex to intersect \u2014 simplify the ranges: ${c}`;
    case "invalid":
      return `${e} ${u} has an invalid version requirement among: ${c}`;
    case "installed-unsatisfied":
      return `${e} ${u} is installed at ${i === void 0 ? "an unknown version" : ce(i)}, which does not satisfy: ${c}${a ? `. To look for a version in range, ${Uh("plugin update", n, { fallback: "update that plugin" })}` : ""}`;
  }
}
function GXn(e, n, o) {
  let r = W(q(o));
  return `${e} ${oSt(P2e(n))} has no git tag satisfying ${r}`;
}
function zXn(e, n) {
  let o = P.valid(e) ?? P.coerce(e)?.version;
  return o !== void 0 && P.satisfies(o, n);
}
function r3s(e, n) {
  let o = [];
  for (let r of n) {
    if (!r.depConstraints) continue;
    for (let [i, a] of r.depConstraints)
      if (TU(i, r.source) === e) {
        o.push({ plugin: r, constraint: a });
        break;
      }
  }
  return o;
}
async function o3s(e, n, o, r = new Set(), i) {
  let a = On(e).marketplace,
    c = [],
    u = new Set(),
    f = [];
  async function l(d, g) {
    if (d !== e && o.has(d) && !i?.has(d)) return null;
    let p = On(d).marketplace;
    if (!o.has(d) && p !== a && !(p && r.has(p)))
      return { ok: !1, reason: "cross-marketplace", dependency: d, requiredBy: g };
    if (f.includes(d)) return { ok: !1, reason: "cycle", chain: [...f, d] };
    if (u.has(d)) return null;
    u.add(d);
    let b = await n(d);
    if (!b) {
      if (d !== e && o.has(d))
        return (
          t(
            `resolveDependencyClosure: force-included ${d} has no catalog entry; skipping (pinner stays demoted)`
          ),
          null
        );
      return { ok: !1, reason: "not-found", missing: d, requiredBy: g };
    }
    f.push(d);
    for (let h of b.dependencies ?? []) {
      let S = TU(h, d),
        y = await l(S, d);
      if (y) return y;
    }
    return (f.pop(), c.push(d), null);
  }
  let s = await l(e, e);
  if (s) return s;
  return { ok: !0, closure: c };
}
function s3s(e) {
  let n = new Set(e.map((s) => s.source)),
    o = new Set(e.filter((s) => s.enabled).map((s) => s.source)),
    r = new Map(e.map((s) => [s.source, s])),
    i = new Set(e.map((s) => On(s.source).name)),
    a = new Map();
  for (let s of o) {
    let d = On(s).name;
    a.set(d, (a.get(d) ?? 0) + 1);
  }
  let c = [],
    u = !0;
  while (u) {
    u = !1;
    for (let s of e) {
      if (!o.has(s.source)) continue;
      for (let d of s.manifest.dependencies ?? []) {
        let g = Bw(TU(d, s.source)),
          p = !On(g).marketplace,
          b = p ? j(g) : void 0,
          h = p ? void 0 : `${On(g).name}@${tu}`,
          S = h !== void 0 && !o.has(g) && o.has(h),
          y = D(g, s.source),
          w = y !== void 0 && !o.has(g) && !S && o.has(y),
          M = p ? (a.get(g) ?? 0) > 0 || (b !== void 0 && o.has(b)) : o.has(g) || S || w,
          k;
        if (!M) {
          let m = h !== void 0 && !n.has(g) && n.has(h),
            x = y !== void 0 && !n.has(g) && !m && n.has(y);
          k = {
            type: "dependency-unsatisfied",
            source: s.source,
            plugin: s.name,
            dependency: m ? h : x ? y : g,
            reason: (p ? i.has(g) || (b !== void 0 && n.has(b)) : n.has(g) || m || x)
              ? "not-enabled"
              : "not-found"
          };
        } else if (!p && !S) {
          let m = s.depConstraints?.get(d)?.version;
          if (m !== void 0) {
            let x = w ? y : g,
              v = r.get(x),
              N = v?.resolvedVersion ?? v?.manifest.version;
            if (!(w && N === void 0) && !zXn(N, m))
              k = {
                type: "dependency-version-unsatisfied",
                source: s.source,
                plugin: s.name,
                dependency: x,
                required: m,
                installed: N
              };
          }
        }
        if (k) {
          o.delete(s.source);
          let m = On(s.source).name,
            x = a.get(m) ?? 0;
          if (x <= 1) a.delete(m);
          else a.set(m, x - 1);
          (c.push(k), (u = !0));
          break;
        }
      }
    }
  }
  let f = new Set(e.filter((s) => s.enabled && !o.has(s.source)).map((s) => s.source)),
    l = new Map();
  for (let s of o) {
    let { name: d, marketplace: g } = On(s);
    if (g === ni) l.set(or(d), s);
  }
  return {
    demoted: f,
    errors: c.map((s) => {
      if (s.type !== "dependency-unsatisfied" || s.reason !== "not-found") return s;
      let { name: d, marketplace: g } = On(s.dependency),
        p =
          g === void 0 || SM(g.toLowerCase()) || On(s.source).marketplace === ni
            ? void 0
            : l.get(or(d));
      return p === void 0 ? s : { ...s, sameNameSyncedPlugin: p };
    })
  };
}
function uWt(e, n) {
  return Y(e, n).map((o) => o.name);
}
function Y(e, n) {
  return n.filter(
    (o) =>
      o.enabled &&
      o.source !== e &&
      (o.manifest.dependencies ?? []).some((r) => WXn(TU(r, o.source), e, o.source))
  );
}
function i3s(e, n) {
  let o = new Set([e]),
    r = [],
    i = (a) => {
      for (let { source: c } of Y(a, n)) {
        if (o.has(c)) continue;
        (o.add(c), i(c), r.push(c));
      }
    };
  return (i(e), r);
}
function qP(e) {
  return e === !0 || Array.isArray(e);
}
function ket(e) {
  return new Set(
    Object.entries(pe(e)?.enabledPlugins ?? {})
      .filter(([, n]) => qP(n))
      .map(([n]) => n)
  );
}
function a3s(e, n, o, r) {
  let i = new Set(),
    a = new Set();
  for (let [d, g] of Object.entries(e)) {
    let p = kx(g, o, r);
    if (!p) continue;
    if (p.auto === !0) a.add(d);
    else i.add(d);
  }
  if (a.size === 0) return { orphans: new Set(), unloadable: [], autoCount: 0 };
  let c = new Map(n.map((d) => [d.source, d])),
    u = [];
  for (let d of [...i, ...a]) if (!c.has(d)) u.push(d);
  if (u.length > 0) return { orphans: new Set(), unloadable: u, autoCount: a.size };
  let f = new Set();
  function l(d) {
    if (f.has(d)) return;
    f.add(d);
    let g = c.get(d);
    if (!g) return;
    for (let p of g.manifest.dependencies ?? []) l(TU(p, g.source));
  }
  for (let d of i) l(d);
  let s = new Set();
  for (let d of a) if (!f.has(d)) s.add(d);
  return { orphans: s, unloadable: [], autoCount: a.size };
}
function l3s(e, n) {
  if (e.size === 0) return "";
  let o = [...e].map((c) => x2e(On(c).name)),
    r = 5,
    i = o.length <= r ? o.join(", ") : `${o.slice(0, r).join(", ")}, \u2026`,
    a = n === "user" ? "" : ` --scope ${n}`;
  return `
${e.size} auto-installed ${I(e.size, "dependency", "dependencies")} no longer needed: ${i}. Run \`claude plugin prune${a}\` to remove.`;
}
var le = /^[A-Za-z0-9][-A-Za-z0-9._]*$/,
  fe = 64,
  Rjr = 256,
  E = 5;
function x2e(e, n = fe) {
  return e.length <= n && le.test(e) ? e : gd(Mt(e.replace(Rir, ""), 64)) || "\u201C\u201D";
}
function P2e(e) {
  let { name: n, marketplace: o } = On(e);
  if (o === void 0) return x2e(n);
  return `${n}@${o}` === e ? `${x2e(n)}@${x2e(o)}` : x2e(e);
}
function oSt(e) {
  return e.startsWith("\u201C") ? e : `"${e}"`;
}
function Fre(e) {
  if (e.length === 0) return "";
  let n = e.length,
    o = e.slice(0, E).map((i) => x2e(On(i).name)),
    r = n <= E ? o.join(", ") : `${o.join(", ")}, \u2026`;
  return ` (+ ${n} ${I(n, "dependency", "dependencies")}: ${r})`;
}
function d3s(e, n) {
  if (e.length === 0) return "";
  let o = e.length,
    r = n.map((u) => On(u).marketplace).find((u) => u !== void 0),
    i =
      r !== void 0
        ? ` Is the ${oSt(x2e(r, Rjr))} marketplace added?`
        : n.length > 0
          ? " Add the dependency's marketplace, then re-run install."
          : "",
    a = e.slice(0, E).map(P2e).join(", "),
    c = o <= E ? `${a}.` : `${a} and ${o - E} more.`;
  return ` \u2014 ${o} ${I(o, "dependency", "dependencies")} still unresolved: ${c}${i}`;
}
function Q1o(e) {
  if (!e || e.length === 0) return "";
  return ` \u2014 warning: required by ${e.map(P2e).join(", ")}`;
}
function smn(e, n) {
  let o = new Map(n.map((s) => [s.source, s])),
    r = new Map();
  for (let s of n) {
    let d = r.get(s.name);
    if (!d || (!d.enabled && s.enabled)) r.set(s.name, s);
  }
  let i = (s, d) => {
      let g = Bw(s),
        { name: p, marketplace: b } = On(g);
      if (!b) {
        let M = o.get(g) ?? r.get(g),
          k = j(g),
          m = k === void 0 ? void 0 : o.get(k);
        return M?.enabled || !m?.enabled ? (M ?? m) : m;
      }
      let h = o.get(g);
      if (h?.enabled) return h;
      let S = o.get(`${p}@${tu}`);
      if (S?.enabled) return S;
      let y = d === void 0 ? void 0 : D(g, d),
        w = y === void 0 ? void 0 : o.get(y);
      if (w?.enabled) return w;
      return h ?? S ?? w;
    },
    a = [],
    c = [],
    u = i(e, void 0),
    f = new Set([e]);
  if (u) f.add(u.source);
  let l = u ? (u.manifest.dependencies ?? []).map((s) => ({ id: s, declaringId: u.source })) : [];
  while (l.length > 0) {
    let s = l.shift();
    if (!s) break;
    let d = TU(s.id, s.declaringId),
      g = i(d, s.declaringId);
    if (!g) {
      if (!f.has(d)) (f.add(d), c.push(d));
      continue;
    }
    if (f.has(g.source)) continue;
    (f.add(g.source), a.push(g.source));
    for (let p of g.manifest.dependencies ?? []) l.push({ id: p, declaringId: g.source });
  }
  return { closure: a, missing: c };
}
function j(e) {
  let n = bir(e);
  return n === e ? void 0 : `${n}@${Ns}`;
}
function Sf() {
  let e = sSt();
  return e ? new Set(e.map((n) => n.name)) : null;
}
function qD() {
  let e = pe("policySettings"),
    n = B(),
    o = A(e),
    r = n === e ? null : A(n);
  return o && r ? new Set([...o, ...r]) : (o ?? r);
}
function Z1o() {
  let e = qRe(),
    n = _(e),
    o = X(n),
    r = o ? e : pe("policySettings"),
    i = dse();
  if (Nqe().servedSnapshot) return { enables: r, names: i };
  if (o) return { enables: r, names: e };
  let a = new Map(),
    c = new Set();
  for (let f of n) {
    let l = Object.entries(f.extraKnownMarketplaces ?? {}).filter(([s]) => !c.has(or(s)));
    for (let [s, d] of l) a.set(s, d);
    for (let [s] of l) c.add(or(s));
  }
  let u = c.size > 0 || n.some((f) => f.strictKnownMarketplaces !== void 0);
  return {
    enables: r,
    names: u
      ? {
          extraKnownMarketplaces: Object.fromEntries(a),
          ...(e?.strictKnownMarketplaces !== void 0 && {
            strictKnownMarketplaces: e.strictKnownMarketplaces
          })
        }
      : i
  };
}
function AU() {
  let e = A(B());
  if (e === null || xvt()) return e;
  let n = Ie().vouchedManagedPluginIds,
    o = [...e].filter((r) => Vs(r) === Ns || n.has(or(r)));
  return o.length > 0 ? new Set(o) : null;
}
function FAe(e) {
  let n = or(e);
  return [...(AU() ?? [])].some((o) => or(o) === n);
}
function c3s(e) {
  let n = Z1o(),
    o = new Set([...(A(n.enables) ?? [])].map(or)),
    r = e.filter((l) => o.has(or(l.source))),
    i = r.filter((l) => Vs(l.source) !== Ns && !Z(l, n.names)),
    a = dse();
  for (let l of i) {
    if (l.modulePath === void 0) continue;
    let s = Ve(l.source);
    if (l.readInPlace !== !0)
      t(
        `${s} is enabled by managed settings, but it is not read in place from a local folder its marketplace is registered from: it loads from a copy (the plugin cache, an archive or a seed directory), or that marketplace has no folder of its own. Nothing yet records which source a copy was taken from, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It is seated when managed settings declare its marketplace under extraKnownMarketplaces as a local directory and that marketplace lists it by a relative path. A plugin delivered from a remote source gains the tier in a later release.`,
        { level: "warn" }
      );
    else if (Z(l, a))
      t(
        `${s} is enabled by managed settings, but the source its marketplace is registered from is named only by ${Q}, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when managed settings the session vouches for (this machine's own, or remote managed settings once the server confirms them) declare that source for its marketplace under extraKnownMarketplaces.`,
        { level: "warn" }
      );
    else
      t(
        `${s} is enabled by managed settings, but managed settings do not name the source its marketplace is registered from, so it is not treated as the organization's: its hooks module runs in the user tier. It is seated when the marketplace is registered from the source that managed settings declare for it under extraKnownMarketplaces.`,
        { level: "warn" }
      );
  }
  let c = U(_(qRe()))
      ? "settings it does vouch for list or enable plugins on this machine"
      : "a managed settings source on this machine was not read whole (a load error, or a plugin key it could not apply), so what it says of plugins is not known",
    u = new Set([...(A(pe("policySettings")) ?? [])].map(or));
  for (let l of e) {
    let s = or(l.source);
    if (l.modulePath !== void 0 && Vs(l.source) !== Ns && u.has(s) && !o.has(s))
      t(
        `${Ve(l.source)} is enabled only by ${Q}, while ${c}, so it is not treated as the organization's: its hooks module runs in the user tier, and does not load where only managed hooks may. It can be seated only once managed settings the session vouches for enable it: this machine's own, or remote managed settings once the server confirms them.`,
        { level: "warn" }
      );
  }
  let f = new Set(i.map((l) => or(l.source)));
  Ie().vouchedManagedPluginIds = new Set(r.map((l) => or(l.source)).filter((l) => !f.has(l)));
}
function Z(e, n) {
  let o = Vs(e.source),
    r = e.marketplaceSource;
  if (o === void 0 || r === void 0 || e.readInPlace !== !0 || SM(or(o))) return !1;
  if (md(o)) return Smn(r) || TWt(r, void 0, { policySettings: n, declaredUnder: o });
  return TWt(r, void 0, { policySettings: n, declaredUnder: hjo(o, n) ? o : void 0 });
}
var Q =
  "managed settings this session does not vouch for (such as remote managed settings the server has not confirmed this session, or a document your user account can write)";
function B() {
  let e = qRe();
  return X(_(e)) ? e : pe("policySettings");
}
function X(e) {
  return U(e) || v9o();
}
function A(e) {
  let n = xvt();
  if (n) return new Set(n.managedIds);
  let o = e?.enabledPlugins;
  if (!o) return null;
  let r = new Set();
  for (let [i, a] of Object.entries(o)) if (a === !0 && i.includes("@")) r.add(Bw(i));
  return r.size > 0 ? r : null;
}
function sSt() {
  let e = pe("policySettings")?.enabledPlugins;
  if (!e) return null;
  let n = new Set(X8o()),
    o = [];
  for (let [r, i] of Object.entries(e)) {
    if (typeof i !== "boolean" || !r.includes("@")) continue;
    let { name: a, marketplace: c } = On(r);
    if (a) {
      let u = `${a}@${c ?? ""}` === r;
      o.push({
        name: a,
        marketplace: u ? (c ?? "") : "",
        enabled: i,
        ...(!i && n.has(r) && { heldOff: !0 })
      });
    }
  }
  return o.length > 0 ? o : null;
}
function UAe(e, n, o) {
  if (!e) return { outcome: "unmatched" };
  let r = or(n),
    i = e.filter((f) => Air(f).some((l) => or(l) === r)),
    a = i.some((f) => f.enabled) ? i.filter((f) => f.heldOff !== !0) : i,
    c = a[0];
  if (c === void 0) return { outcome: "unmatched" };
  let u = a.find((f) => !f.enabled);
  if (u) return { outcome: "locked", entry: u };
  if (o !== void 0 && a.some((f) => !SM(or(f.marketplace)) && or(f.marketplace) === or(o)))
    return { outcome: "admitted" };
  return { outcome: "locked", entry: c };
}
function F8() {
  let e = xvt();
  if (e) return e.order;
  let n = $re() || Asr(),
    o = Ro().includes("userSettings") ? pe("userSettings") : null,
    r = n ? void 0 : Cjr(),
    i = r !== void 0 && r.outermost.length > 0,
    a = qY(),
    c = a && !n && UXn(),
    u = !n && !i && a && !c,
    f = !n && !i && !u,
    l = n ? qRe() : f ? o : null,
    s = n ? pe("policySettings") : null,
    d = ["prependPlugins", "appendPlugins"],
    g = d.map((m) => l?.[m]?.map(R)),
    p = r ?? Cjr(g[0]),
    h = n && p.outermost.length === 0 ? Cjr(s?.prependPlugins?.map(R)) : p,
    S = h.outermost.length > 0 ? h : p,
    w = a && !c && S.outermost.length === 0 && (!n || e3s) ? Z6s() : S,
    [M, k] = d.map((m, x) => {
      let v = g[x] ?? ge({ key: m, slot: s, holder: l, outermost: w.outermost });
      return {
        ids: v,
        from: v === void 0 ? "none" : n ? "policy" : "user",
        shadowed: !f && o?.[m] !== void 0
      };
    });
  return {
    prepend: M.ids ?? [],
    append: k.ids ?? [],
    from: { prepend: M.from, append: k.from },
    shadowed: d.filter((m, x) => [M, k][x].shadowed),
    ...(i && { shadowedBy: "seat" }),
    ...(u && { shadowedBy: "host" }),
    ...w
  };
}
function R(e) {
  return Bw(or(e));
}
function ge({ key: e, slot: n, holder: o, outermost: r }) {
  let i = n?.[e]?.map(R);
  if (i === void 0) return;
  let a = _(o);
  if (e === "prependPlugins" && U(a)) return;
  let c = new Set(
    a
      .flatMap((u) => [
        ...(u.prependPlugins ?? []),
        ...(u.appendPlugins ?? []),
        ...Object.keys(u.enabledPlugins ?? {})
      ])
      .map(R)
  );
  return i.filter((u) => !c.has(u) && !r.includes(u));
}
function _(e) {
  return [e ?? {}, ...tqt()];
}
function U(e) {
  return e.some(
    (n) =>
      (n.prependPlugins?.length ?? 0) > 0 ||
      (n.appendPlugins?.length ?? 0) > 0 ||
      Object.values(n.enabledPlugins ?? {}).some((o) => o !== !1)
  );
}
function z() {
  let e = xvt();
  if (e) return [...e.managedIds];
  return [pe("policySettings"), B()]
    .flatMap((n) => Object.entries(n?.enabledPlugins ?? {}))
    .filter(([n, o]) => qP(o) && n.includes("@"))
    .map(([n]) => Bw(n));
}
function iSt() {
  return oS() || z().length > 0;
}
function u3s() {
  let e = z();
  return e.length > 0 ? new Set(e) : null;
}
function f3s(e) {
  let n = or(e);
  return oS() || z().some((o) => or(o) === n);
}
export {
  jye,
  Z6s,
  Nre,
  UXn,
  Ejr,
  kjr,
  Tjr,
  lWt,
  $re,
  Ajr,
  Cjr,
  e3s,
  BXn,
  jXn,
  t3s,
  kx,
  J1o,
  dWt,
  n3s,
  TU,
  WXn,
  cWt,
  omn,
  GXn,
  zXn,
  r3s,
  o3s,
  s3s,
  uWt,
  i3s,
  qP,
  ket,
  a3s,
  l3s,
  Rjr,
  x2e,
  P2e,
  oSt,
  Fre,
  d3s,
  Q1o,
  smn,
  Sf,
  qD,
  Z1o,
  AU,
  FAe,
  c3s,
  sSt,
  UAe,
  F8,
  iSt,
  u3s,
  f3s
};

//# sourceMappingURL=chunk-vn4qkmxw.js.map
