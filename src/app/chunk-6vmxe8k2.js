// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, G, Vt } from "./chunk-fs43t96t.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { Mt, gd } from "./chunk-adv24f35.js";
import {
  so,
  Sn,
  Hr,
  pdi,
  km,
  iE,
  TZ,
  Vf,
  B9,
  G_,
  On,
  Zz,
  Vs,
  jg,
  md,
  Vn,
  Rir,
  Bbe
} from "./chunk-5rw2zfa0.js";
import { yk } from "./chunk-2qx8pe6s.js";
import { L } from "./chunk-wrtp8qz8.js";
import { yo } from "./chunk-azq9hjy0.js";
import { jvn, r6, Bot, qvn, K$ } from "./chunk-d54avynm.js";
import { l } from "./chunk-ewvf3tep.js";
import { Wt } from "./chunk-7svjr0za.js";
import { fe } from "./chunk-xe386mry.js";
import { q_, Rs } from "./chunk-cjnzngfc.js";
import { No } from "./chunk-8r2m7vfp.js";
import { Mfe, lst, hr, It } from "./chunk-dc0nzty2.js";
import { it } from "./chunk-qmmh8tq2.js";
import { oy } from "./chunk-at88wjsn.js";
import { nP } from "./chunk-5y69fhjv.js";
import { lV, bmn } from "./chunk-p56qmwgb.js";
import { gU, G_t } from "./chunk-5bpsfngr.js";
import { oU, kO, sU } from "./chunk-6h7ejyet.js";
import { m7e } from "./chunk-783pymr7.js";
import { Qme, v1, _0s, asn, Bv, I_, BA, bc, yO } from "./chunk-j0tbz6ra.js";
import { iS } from "./chunk-0v8111n2.js";
import { ne } from "./chunk-39xmt821.js";
import { w } from "./chunk-7m7t89vx.js";
import { $2 } from "./chunk-9ctchnmq.js";
import { nJt, mbr, gbr, rJt, wh, _br } from "./chunk-pxfm2rr2.js";
import { e } from "./chunk-f790ajz4.js";
import { vLn } from "./chunk-34xjg9wp.js";
import { a8e, oEr, x7t, P7t, I7t } from "./chunk-1w30mhyz.js";
import { y, j } from "./chunk-bq35vvkw.js";
import { df } from "./chunk-gjsrpxk2.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { Ce } from "./chunk-a2y39866.js";
var We = /^[\x21-\x7e]+$/,
  se = /^[A-Za-z0-9._-]{1,64}$/;
function fP(r) {
  return Hr === "" || Y(r, We) ? r : Z(r);
}
function WRt(r) {
  if (Y(r, se)) return r;
  return Wt(Hr === "" ? Mt(r, 64) : Z(r));
}
function Sxn(r) {
  return Y(r, se) ? r : Z(r);
}
function Y(r, n) {
  return n.test(r) && !r6(r) && !pdi(Hr, ae(r));
}
function Z(r) {
  return gd(Mt(ae(r), 64)) || "\u201C\u201D";
}
function ae(r) {
  return Vn(r).replace(Rir, "").trimEnd();
}
import { join as le } from "path";
async function v5e(r, n, i, a) {
  let s = Object.hasOwn(i, r) ? i[r]?.installLocation : void 0;
  if (s === void 0) return n;
  let f;
  try {
    f = Bv();
  } catch {
    return n;
  }
  return iS(n, (p) => ze(p, r, s, i, f, a), { concurrency: 8 });
}
async function ze(r, n, i, a, s, f) {
  let p = r.source;
  if (!Bot(p)) return r;
  try {
    let c = await lV(v1(r.name, n), i, p, a, s, f, I_(i) !== void 0 ? "system" : "workspace");
    if (c.kind !== "ok") return r;
    let m = le(c.entryPath, ".claude-plugin");
    if (!(await oU(m))) return r;
    let h = le(m, "plugin.json"),
      P = await sU(h);
    if (P === void 0) return r;
    let b = Qme(te(No(P)), "plugin-json", { pluginName: r.name, manifestPath: h });
    if (!b.ok) return r;
    let x = b.manifest,
      g = { ...r };
    if (C(g.displayName) && x.displayName !== void 0) g.displayName = x.displayName;
    if (C(g.description) && x.description !== void 0) g.description = x.description;
    if (g.author === void 0 && x.author !== void 0) g.author = x.author;
    if (C(g.homepage) && x.homepage !== void 0) g.homepage = x.homepage;
    if (C(g.repository) && x.repository !== void 0) g.repository = x.repository;
    if (C(g.license) && x.license !== void 0) g.license = x.license;
    if (!g.keywords?.length && x.keywords !== void 0) g.keywords = x.keywords;
    return g;
  } catch (c) {
    return (t(`Display metadata for ${v1(r.name, n)} not read from its plugin.json: ${d(c)}`), r);
  }
}
function C(r) {
  return Bbe(r) === void 0;
}
j();
function ot(Be) {
  return { label: Be, value: Be };
}
function Wfr(r, n, i, a) {
  let s = {};
  for (let f of r) {
    let p = i[f],
      c = O(so(n, f) ?? "");
    if (c === "") {
      if (p?.sensitive === !0 && so(a ?? {}, f) !== void 0) continue;
      if (p?.type === "number") continue;
      if (p?.required !== !0 && so(a ?? {}, f) === void 0) continue;
    }
    if (p?.type === "number") {
      let m = Number(c);
      s[f] = Number.isNaN(m) ? c : m;
    } else if (p?.type === "boolean") {
      let m = a8e(c);
      if (m !== void 0) s[f] = m;
    } else s[f] = c;
  }
  return s;
}
function z6t(r) {
  let m = w(22),
    { title: n, subtitle: i, configSchema: a, initialValues: s, onSave: f, onCancel: p } = r,
    c = Object.keys(a),
    h;
  if (m[0] !== a || m[1] !== s) ((h = () => Gfr(a, s)), (m[0] = a), (m[1] = s), (m[2] = h));
  else h = m[2];
  let [P, b] = y(h),
    x;
  if (m[3] !== a || m[4] !== s)
    ((x = (g) => {
      let k = a[g];
      let S = wxn(k);
      if (S !== void 0) {
        return {
          type: "select",
          key: g,
          label: k?.title || g,
          options: S.map(ot),
          hint: () => k?.description
        };
      }
      let A = k?.sensitive === !0;
      let v = A && so(s ?? {}, g) !== void 0;
      return {
        type: "text",
        key: g,
        label: k?.title || g,
        required: k?.required === !0 && !v,
        mask: A ? "*" : void 0,
        placeholder: v ? "(unchanged)" : void 0,
        validate:
          k?.type === "number"
            ? (R) =>
                O(R) === "" || I7t.numberOfInput(O(R), k) !== void 0 ? null : I7t.numberInputHint(k)
            : void 0,
        hint: () => k?.description
      };
    }),
      (m[3] = a),
      (m[4] = s),
      (m[5] = x));
  else x = m[5];
  let T = c.map(x);
  if (c.length === 0) {
    return null;
  }
  let z;
  if (m[6] !== b) ((z = (ur, cr) => b((fr) => ({ ...fr, [ur]: cr }))), (m[6] = b), (m[7] = z));
  else z = m[7];
  let q;
  if (m[8] !== a || m[9] !== c || m[10] !== s || m[11] !== f || m[12] !== P)
    ((q = () => f(Wfr(c, P, a, s))),
      (m[8] = a),
      (m[9] = c),
      (m[10] = s),
      (m[11] = f),
      (m[12] = P),
      (m[13] = q));
  else q = m[13];
  let Ke;
  if (
    m[14] !== T ||
    m[15] !== p ||
    m[16] !== i ||
    m[17] !== z ||
    m[18] !== q ||
    m[19] !== n ||
    m[20] !== P
  )
    ((Ke = e($2, {
      title: n,
      subtitle: i,
      fields: T,
      values: P,
      onChange: z,
      onSubmit: q,
      onCancel: p,
      submitLabel: "Save configuration"
    })),
      (m[14] = T),
      (m[15] = p),
      (m[16] = i),
      (m[17] = z),
      (m[18] = q),
      (m[19] = n),
      (m[20] = P),
      (m[21] = Ke));
  else Ke = m[21];
  return Ke;
}
function Gfr(r, n) {
  let i = {};
  for (let a of Object.keys(r)) {
    let s = r[a],
      f = s?.sensitive === !0 ? void 0 : so(n ?? {}, a),
      p = wxn(s);
    if (s?.type === "boolean") {
      i[a] = String(oEr(so(n ?? {}, a) ?? s.default));
      continue;
    }
    i[a] =
      p === void 0
        ? f === void 0
          ? ""
          : String(f)
        : ([f, s?.default].find((c) => typeof c === "string" && p.includes(c)) ?? p[0] ?? "");
  }
  return i;
}
function wxn(r) {
  if (r?.type === "boolean") return nt;
  return r?.type === "string" && r.multiple !== !0 ? r.options : void 0;
}
var nt = ["true", "false"];
function O(r) {
  return (r.split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
}
function K6t(r, n) {
  return r.map((i) => {
    let a = n[i.marketplaceName]?.source;
    return a && km(a) ? { ...i, fromPluginDirectory: !0 } : i;
  });
}
var E = (r) => r.fromPluginDirectory === !0;
function st(r, n) {
  let i = (f) => r[f] ?? n.find((p) => p.entry[f] !== void 0)?.entry[f],
    a = [
      "displayName",
      "description",
      "author",
      "homepage",
      "category",
      "tags",
      "keywords",
      "relevance"
    ],
    s = {};
  for (let f of a) {
    let p = i(f);
    if (p !== void 0) Object.assign(s, { [f]: p });
  }
  return s;
}
function Ids(r, n) {
  let i = (c) => iE(c.entry.source, TZ(n[c.marketplaceName]?.source)),
    a = (c) => E(c) && m7e(c.entry.name),
    s = new Set();
  for (let c of r)
    if (a(c)) {
      let m = i(c);
      if (m !== void 0) s.add(m);
    }
  if (s.size === 0) return r;
  let f = new Map();
  for (let c of r) {
    if (E(c) || !md(c.marketplaceName)) continue;
    if (asn(c.marketplaceName, c.entry)) continue;
    let m = i(c);
    if (m !== void 0 && s.has(m)) f.set(m, [...(f.get(m) ?? []), c]);
  }
  let p = [];
  for (let c of r) {
    let m = i(c),
      h = m === void 0 ? void 0 : f.get(m);
    if (!E(c)) {
      if (!h?.includes(c)) p.push(c);
      continue;
    }
    if (h === void 0 || !a(c)) {
      p.push(c);
      continue;
    }
    p.push({
      ...c,
      entry: { ...c.entry, ...st(c.entry, h) },
      isInstalled: c.isInstalled || h.some((P) => P.isInstalled),
      alsoListedIn: L(h.map((P) => P.marketplaceName)),
      installCountIds: h.map((P) => P.pluginId)
    });
  }
  return p;
}
async function vxn(r, n) {
  let i = new Set(),
    a = bc().plugins;
  for (let [s, f] of Object.entries(a)) {
    if (On(s).marketplace !== Sn || !f.some(yO)) continue;
    let p = await BA(s, n),
      c = p && iE(p.entry.source, TZ(r[Sn]?.source));
    if (c) i.add(c);
  }
  return i;
}
function Exn(r, n, i = new Set()) {
  let a = (c) => iE(c.entry.source, TZ(n[c.marketplaceName]?.source)),
    s = new Set(i),
    f = new Set(),
    p = new Set();
  for (let c of r) {
    let m = c.isInstalled ? a(c) : void 0;
    if (m === void 0) continue;
    if (E(c)) (s.add(m), f.add(m));
    else if (md(c.marketplaceName)) p.add(m);
  }
  if (s.size === 0 && p.size === 0) return r;
  return r.filter((c) => {
    if (c.isInstalled) return !0;
    let m = a(c);
    if (m === void 0) return !0;
    if (E(c)) return !p.has(m) && !f.has(m);
    return !md(c.marketplaceName) || !s.has(m);
  });
}
function zfr(r, n) {
  if (!n) return;
  let i = n.get(r.pluginId);
  for (let a of r.installCountIds ?? []) {
    let s = n.get(a);
    if (s !== void 0 && (i === void 0 || s > i)) i = s;
  }
  return i;
}
function VZr(r, n) {
  let i = new Map(r.map((a, s) => [a, s]));
  r.sort((a, s) => {
    let f = zfr(a, n) ?? 0,
      p = zfr(s, n) ?? 0;
    if (f !== p) return p - f;
    let c = E(a),
      m = E(s);
    if (c !== m) return c ? -1 : 1;
    return c ? (i.get(a) ?? 0) - (i.get(s) ?? 0) : a.entry.name.localeCompare(s.entry.name);
  });
}
function kxn(r) {
  return E(r) ? Hr : Sxn(r.marketplaceName);
}
function Txn(r) {
  let n = r.alsoListedIn ?? [];
  if (n.length === 0) return;
  let i = new Map(qZr(r).map((a) => [a.marketplace, a.name]));
  return `Also listed in ${n
    .map((a) => {
      let s = i.get(a);
      return s === void 0 ? a : `${a} as ${s}`;
    })
    .join(", ")}`;
}
function qZr(r) {
  {
    let n = [];
    for (let i of r.installCountIds ?? []) {
      let { name: a, marketplace: s } = On(i);
      if (s !== void 0 && a !== r.entry.name) n.push({ marketplace: s, name: a });
    }
    return n;
  }
  return [];
}
function Ods(r) {
  let n = (i) => (i === df ? "official" : i);
  return [E(r) ? Hr : r.marketplaceName, ...(r.alsoListedIn ?? []).map(n)].join(" + ");
}
function ye(r) {
  return /^[A-Za-z0-9._/@:~-]{1,120}$/.test(r) ? r : gd(Mt(r, 120));
}
function Axn(r) {
  let n = r.entry.source;
  if (typeof n !== "object" || n === null) return;
  let i;
  if (n.source === "github") i = n.repo;
  else if (n.source === "url" || n.source === "git-subdir") i = n.url;
  if (i === void 0) return;
  let a = i;
  try {
    let f = new URL(i);
    a = yo(f.hostname) ? f.pathname.replace(/^\/+/, "") : `${f.host}${f.pathname}`;
  } catch {}
  if (((a = ye(a.replace(/\.git$/, "").replace(/\/+$/, ""))), a === "")) return;
  let s = n.source === "git-subdir" ? ye(n.path) : "";
  return s === "" ? a : `${a} (${s})`;
}
function Mds(r) {
  let n = new Map(),
    i;
  for (let s of r) {
    if (E(s)) i = s.marketplaceName;
    for (let f of [s.marketplaceName, ...(s.alsoListedIn ?? [])]) n.set(f, (n.get(f) ?? 0) + 1);
  }
  let a = [...n]
    .map(([s, f]) => ({ marketplace: s, label: s === i ? Hr : Sxn(s), count: f }))
    .sort((s, f) => {
      if (s.marketplace === i) return -1;
      if (f.marketplace === i) return 1;
      return f.count - s.count || s.label.localeCompare(f.label);
    });
  return [{ marketplace: null, label: "All", count: r.length }, ...a];
}
var Kfr = 4;
function Dds(r, n) {
  let i = r.slice(0, Kfr),
    a = r.find((s) => s.marketplace === n);
  if (a && !i.includes(a)) i[i.length - 1] = a;
  return i;
}
function Hds(r, n, i) {
  return [r.marketplaceName, ...(r.alsoListedIn ?? [])].some((a) => {
    if (!n.has(a)) return !1;
    if (a === df) return !0;
    let s = i[a]?.source;
    return s !== void 0 && bmn(a, s);
  });
}
function Lds(r, n) {
  return n === null || r.marketplaceName === n || (r.alsoListedIn?.includes(n) ?? !1);
}
function ee(r, n, i) {
  if (Cxn(r)) return !1;
  if (r.source === n) return !0;
  return "plugin" in r && r.plugin === i && G_(r.source) === G_(n);
}
function Cxn(r) {
  return "orphan" in r && r.orphan === !0;
}
function Vfr(r, n) {
  return ee(r, n.source, n.name);
}
function qfr(r, n) {
  return ee(r, n.source, n.name);
}
function at(r, n, i) {
  if (B9(r.source)) return !1;
  if (r.source === n) return !0;
  let a = Vs(r.source);
  return "plugin" in r && r.plugin === i && (a === void 0 || a === Vs(n));
}
function cPe(r, n, i) {
  return Vf(Vs(n)) ? ee(r, n, i) : at(r, n, i) && !Cxn(r);
}
function YZr(r, n) {
  let i = n.filter((m) => cPe(r, m.source, m.name)),
    a = i.length === 1 ? i[0] : i.find((m) => jg(m.source, r.source));
  if (a) return { name: a.name, marketplace: Vs(a.source) };
  let [s] = i;
  if (s !== void 0) return { name: s.name, marketplace: void 0 };
  let { name: f, marketplace: p } = Zz(r.source);
  if (p !== void 0) return { name: f, marketplace: p };
  let c = G_(r.source);
  return { name: c !== void 0 && "plugin" in r && r.plugin ? r.plugin : f, marketplace: c };
}
var he = Ce(oy(), 1);
import { readFile as lt, stat as ut } from "fs/promises";
import { dirname as V, join as U, relative as D, resolve as ct } from "path";
async function V6t(r, n = {}) {
  let i = [],
    a = await ft(r);
  if (!a.ok) return { ok: !1, error: a.error, warnings: i };
  let { pluginRoot: s, manifestPath: f, manifest: p } = a,
    c = typeof p.name === "string" && p.name.length > 0 ? await pt(s, p.name) : void 0,
    m = await rJt(
      f,
      c !== void 0 && jvn(c.marketplaceName) ? { kind: "anthropic" } : { kind: "alone" }
    ),
    h = [m];
  if (m.success) h.push(...(await _br(s)));
  for (let v of h) for (let R of v.warnings) i.push(`${D(fe(), v.filePath)}: ${R.message}`);
  let P = h.find((v) => !v.success);
  if (P) {
    let v = P.errors.map((R) => `  ${R.path}: ${R.message}`).join(`
`);
    return {
      ok: !1,
      error: `Plugin validation failed for ${P.filePath}:
${v}`,
      warnings: i
    };
  }
  let b = p.name;
  if (typeof b !== "string" || b.length === 0)
    return { ok: !1, error: `plugin.json at ${f} has no "name" field`, warnings: i };
  let x = typeof p.version === "string" && p.version.length > 0 ? p.version : void 0,
    g,
    k;
  if (x !== void 0) ((g = x), (k = "plugin.json"));
  else if (c?.entry.version) ((g = c.entry.version), (k = "marketplace entry"));
  else
    return {
      ok: !1,
      error:
        `No version to tag. Set "version" in ${D(fe(), f)}` +
        (c ? ` or in the marketplace entry at ${D(fe(), c.path)} plugins[${c.entryIndex}].` : ".") +
        " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
      warnings: i
    };
  if (c?.entry.version && x !== void 0 && c.entry.version !== x)
    return {
      ok: !1,
      error: `Version mismatch: plugin.json says "${x}" but ${D(fe(), c.path)} plugins[${c.entryIndex}].version says "${c.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${x}" (or remove it) before tagging.`,
      warnings: i
    };
  if (he.valid(g) === null)
    return {
      ok: !1,
      error: `Version "${g}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
      warnings: i
    };
  let S = _0s(b, g);
  if (!yk(S))
    return {
      ok: !1,
      error: `Computed tag name "${S}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
      warnings: i
    };
  let A = hr(s);
  if (A === null)
    return {
      ok: !1,
      error: `${s} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
      warnings: i
    };
  if (!n.force) {
    let v = await dt(A, c ? [s, c.path] : [s]);
    if (v.length > 0) {
      let R = v.slice(0, 5).join(`
  `),
        T =
          v.length > 5
            ? `
  \u2026and ${v.length - 5} more`
            : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):
  ${R}${T}`,
        warnings: i
      };
    }
  }
  if (!n.force) {
    if (await mt(A, S))
      return {
        ok: !1,
        error: `Tag "${S}" already exists locally. Bump the version in ${k}, or re-run with --force to move the tag.`,
        warnings: i
      };
  }
  return {
    ok: !0,
    warnings: i,
    plan: {
      pluginName: b,
      version: g,
      versionFrom: k,
      tag: S,
      pluginRoot: s,
      gitRoot: A,
      marketplace: c
        ? { path: c.path, entryIndex: c.entryIndex, entryVersion: c.entry.version }
        : void 0,
      validation: h
    }
  };
}
async function q6t(r, n) {
  let i = Rs(void 0, { userLocale: !0 }),
    a = await G_t(r.gitRoot, gt, { envPins: {}, base: i, repository: gU(r.gitRoot) });
  if (a === null)
    t(
      `[plugin tag] could not read the user's git signing configuration; ${r.tag} is created unsigned`,
      { level: "warn" }
    );
  let s = [
    "-C",
    r.gitRoot,
    ...[...yt, ...(a ?? [])].flatMap(([m, h]) => ["-c", `${m}=${h}`]),
    "tag"
  ];
  if (n.force) s.push("-f");
  s.push("-a", "-m", GRt(r, n.message), "--", r.tag, "HEAD");
  let f = await it(It(), s, { env: i, useCwd: !0 });
  if (f.code !== 0)
    return {
      ok: !1,
      error: `git tag failed (exit ${f.code}): ${f.stderr.trim() || f.stdout.trim()}`
    };
  if (!n.push) return { ok: !0, pushed: !1 };
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(n.remote))
    return {
      ok: !1,
      error: `Tag created locally but not pushed: "${n.remote}" is not a valid remote name.`
    };
  let p = ["-C", r.gitRoot, "push"];
  if (n.force) p.push("--force");
  p.push(n.remote, `refs/tags/${r.tag}`);
  let c = await it("git", p, {
    allowRepoGitHooks: !0,
    allowGitTerminalPrompt: n.allowGitTerminalPrompt,
    useCwd: !0
  });
  if (c.code !== 0)
    return {
      ok: !1,
      error: `Tag created locally but push failed (exit ${c.code}): ${c.stderr.trim() || c.stdout.trim()}`
    };
  return { ok: !0, pushed: !0 };
}
function GRt(r, n) {
  return n === void 0 ? `${r.pluginName} ${r.version}` : n.replaceAll("%s", r.version);
}
async function ft(r) {
  let n = ct(r),
    i;
  try {
    i = await ut(n);
  } catch (s) {
    return { ok: !1, error: G(s) ? `Path not found: ${n}` : `Cannot stat ${n}: ${d(s)}` };
  }
  let a = i.isFile()
    ? [[V(V(n)), n]]
    : [
        [n, U(n, ".claude-plugin", "plugin.json")],
        [V(n), U(n, "plugin.json")]
      ];
  for (let [s, f] of a) {
    let p;
    try {
      p = await lt(f, { encoding: "utf-8" });
    } catch (m) {
      if (G(m)) continue;
      return { ok: !1, error: `Cannot read ${f}: ${d(m)}` };
    }
    let c;
    try {
      c = te(No(p));
    } catch (m) {
      return { ok: !1, error: `Invalid JSON in ${f}: ${d(m)}` };
    }
    return {
      ok: !0,
      pluginRoot: s,
      manifestPath: f,
      manifest: typeof c === "object" && c !== null ? c : {}
    };
  }
  return {
    ok: !1,
    error: `No plugin manifest found. Expected ${U(n, ".claude-plugin", "plugin.json")}.`
  };
}
async function pt(r, n) {
  let i = hr(r) ?? void 0,
    a = r;
  for (;;) {
    let s = U(a, ".claude-plugin", "marketplace.json"),
      f = await gbr(s);
    if (f) {
      for (let [c, m] of f.plugins.entries())
        if (mbr(m, a, { root: r, name: n }))
          return { path: s, marketplaceName: f.name, entryIndex: c, entry: m };
    }
    if (a === i) return;
    let p = V(a);
    if (p === a) return;
    a = p;
  }
}
async function dt(r, n) {
  let i = n.map((s) => D(r, s) || "."),
    a = await it(It(), ["-C", r, "--no-optional-locks", "status", "--porcelain", q_, "--", ...i], {
      env: Rs(void 0, { userLocale: !0 }),
      useCwd: !0
    });
  if (a.code !== 0) return [];
  return a.stdout
    .split(
      `
`
    )
    .map((s) => s.slice(3).trim())
    .filter((s) => s.length > 0);
}
async function mt(r, n) {
  let i = await it(It(), ["-C", r, "tag", "-l", "--", n], { env: Rs(), useCwd: !0 });
  return i.code === 0 && i.stdout.trim() === n;
}
var gt =
    "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$",
  yt = [
    ["tag.gpgSign", "false"],
    ["tag.forceSignAnnotated", "false"],
    ["gpg.format", "openpgp"],
    ["gpg.program", "gpg"],
    ["gpg.x509.program", "gpgsm"],
    ["gpg.ssh.program", "ssh-keygen"],
    ["gpg.ssh.defaultKeyCommand", ""]
  ];
var M = "<owner>/<repo>";
var xe = [
  "Validate the folder that holds its marketplace.json",
  `to have ${M} filled in,`,
  "and the name its marketplace lists it under."
].join(" ");
import { join as kt } from "path";
function Pe({ name: r, listing: n }) {
  let i = n !== void 0 && n.entry === void 0;
  return [
    `This README has no line that installs "${r}"`,
    "from a marketplace.",
    ...(i
      ? [kt(n.root, ".claude-plugin", "marketplace.json"), "has no entry for it. Add one."]
      : []),
    `${i ? "Then add" : "Add"} the install line,`,
    "which works in one step on Claude Code 2.1.275 or later."
  ].join(" ");
}
var ke = 128;
function F(r, n, i) {
  let a = r.get(n) ?? i(n);
  return (r.set(n, a), a);
}
var ve = [`In it, replace ${M}`, "with the repository that holds the marketplace."].join(" ");
var H = 1024;
import { join as Ee } from "path";
var be = (r) =>
  Mfe(r) ? "" : lst(r, "remote", "origin", "pushurl") || lst(r, "remote", "origin", "url") || "";
function Ie({ host: r, owner: n, name: i }) {
  let a = yo(r),
    s = r.includes(":");
  return a ? `${n}/${i}` : s ? void 0 : `https://${r}/${n}/${i}.git`;
}
async function we(r) {
  let n = Ee(r, ".git"),
    a = (await oU(n))
      ? await sU(Ee(n, "config")).catch(() => {
          return;
        })
      : void 0,
    s = be(a ?? ""),
    p = /^(https|ssh):\/\//i.test(s) || !s.includes("://") ? nP(s) : null;
  return p === null ? void 0 : Ie(p);
}
function K(r) {
  let n = r.split("").map((i) => !"`'\"()<>[]*.,;:!?".includes(i));
  return r.slice(n.findIndex(Boolean), n.findLastIndex(Boolean) + 1);
}
var re = (r, n) => r.byName.has(n) || r.bySource.has(K(n));
import { readdir as _t } from "fs/promises";
import { join as Le } from "path";
var Re = (r) =>
  r.some((n, i) =>
    n.startsWith("--marketplace=")
      ? /^--marketplace=[^<>]+$/.test(n)
      : n === "--marketplace" && /^[^-<>][^<>]*$/.test(r[i + 1] ?? "")
  );
var Se = (r) =>
  r
    .split(/\s+/)
    .map(K)
    .filter((n) => n !== "");
var Ae = Object.freeze([
  "--marketplace",
  "--scope",
  "-s",
  "--config",
  "--accept-command",
  "--registry"
]);
var Ne = (r) => r.find((n, i) => !n.startsWith("-") && !Ae.includes(r[i - 1] ?? "")) ?? "";
function Me(r) {
  let n = r.find((s) => s.lastIndexOf("@") > 0) ?? "",
    i = n.indexOf("@");
  return i > 0 && n.length > i + 1 && !/[<>]/.test(n) ? n.slice(0, i) : "";
}
function Oe(r) {
  let n = r
    .split(
      `
`
    )
    .flatMap((i) => i.split(/plugin[ \t]+(?:install|i)[ \t]+/).slice(1))
    .map(Se);
  return { bySource: new Set(n.filter(Re).map(Ne)), byName: new Set(n.map(Me)) };
}
async function oe(r) {
  let n = (await _t(r, { withFileTypes: !0 }).catch(() => []))
      .filter((f) => f.isFile())
      .map((f) => f.name)
      .filter((f) => /^readme(\.[a-z0-9.-]+)?$/i.test(f)),
    i = n.find((f) => f.toLowerCase() === "readme.md") ?? n.toSorted()[0],
    a =
      i === void 0
        ? void 0
        : await sU(Le(r, i)).catch(() => {
            return;
          });
  return i !== void 0 && a !== void 0 ? { file: Le(r, i), installs: Oe(a) } : void 0;
}
async function je({ root: r, name: n, listing: i }, a) {
  let s = await F(a.readmes, r, oe),
    f = i?.entry !== void 0 && !nJt(i.root, r),
    p = f && i.marketplace.plugins.length === 1,
    c = s !== void 0 && !re(s.installs, n),
    h = f && (p || c) ? await F(a.readmes, i.root, oe) : void 0;
  return [s, h].some((b) => b !== void 0 && re(b.installs, n)) ? void 0 : (s ?? (p ? h : void 0));
}
async function $e(r, n) {
  let { name: i, listing: a } = r,
    f = i.length <= ke && K$(i) ? await je(r, n) : void 0;
  if (f === void 0) return [];
  let p = a === void 0,
    c = p ? void 0 : await F(n.sources, a.root, we),
    h = p ? [xe] : c !== void 0 ? [] : [ve];
  return [
    {
      file: wh(f.file, H),
      message: wh([Pe(r), ...h].join(" "), H),
      installLine: wh(vLn({ plugin: i, marketplaceSource: c ?? M }), H)
    }
  ];
}
function Y6t(r) {
  return r.length === 0
    ? []
    : [
        `${ne.info} Advice (does not change the verdict):`,
        "",
        ...r.flatMap((i) => [`  ${ne.pointer} ${i.file}: ${i.message}`, `      ${i.installLine}`]),
        ""
      ];
}
var De = (r, n) =>
  r.reduce(async (i, a) => [...(await i), ...(await $e(a, n))], Promise.resolve([]));
import { basename as Jt, dirname as Ue, resolve as Qt } from "path";
import { join as Fe } from "path";
async function B(r, n) {
  let i = Fe(r, ".claude-plugin");
  return (await oU(i)) ? ((await sU(Fe(i, n))) ?? "") : "";
}
async function W(r) {
  try {
    let n = u({ name: o() }).safeParse(te(No(await B(r, "plugin.json"))));
    return n.success ? n.data.name : void 0;
  } catch {
    return;
  }
}
import { resolve as ie } from "path";
var Te = 64;
async function _e(r) {
  try {
    let n = qvn().safeParse(te(No(await B(r, "marketplace.json"))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}
async function Ve(r) {
  let n = await _e(r),
    i = await Promise.all(
      (n?.plugins ?? [])
        .filter((p) => typeof p.source === "string")
        .slice(0, Te)
        .map(async (p) => {
          let { source: c } = p;
          return n !== void 0 &&
            typeof c === "string" &&
            !c.split(/[\\/]/).includes("..") &&
            (await kO(r, ie(r, c))) === "ok"
            ? [{ root: ie(r, c), name: p.name, listing: { root: r, marketplace: n, entry: p } }]
            : [];
        })
    ),
    a = (await W(r)) ?? "",
    s = n?.plugins.find((p) => mbr(p, r, { root: r, name: a }));
  return n !== void 0 && !i.flat().some((p) => p.root === ie(r))
    ? [...i.flat(), { root: r, name: s?.name ?? a, listing: { root: r, marketplace: n, entry: s } }]
    : i.flat();
}
async function He(r, n, i) {
  let a = Ue(n?.filePath ?? ""),
    s = Ue(a),
    f = Jt(a) === ".claude-plugin" && [n, ...i].every((h) => h?.errors.length === 0),
    p = f && n?.fileType === "plugin",
    m = f && n?.fileType === "marketplace" && nJt(Qt(r), s) ? await Ve(s) : [];
  return p ? [{ root: s, name: (await W(s)) ?? "", listing: void 0 }] : m;
}
function Ge(r) {
  return (Vt(r) ? t(`No install advice: ${d(r)}`) : l(r), []);
}
var X6t = (r, n, i) =>
  He(r, n, i)
    .then((a) => De(a, { readmes: new Map(), sources: new Map() }))
    .catch(Ge);
export {
  fP,
  WRt,
  Sxn,
  v5e,
  Wfr,
  z6t,
  Gfr,
  wxn,
  K6t,
  Ids,
  vxn,
  Exn,
  zfr,
  VZr,
  kxn,
  Txn,
  qZr,
  Ods,
  Axn,
  Mds,
  Kfr,
  Dds,
  Hds,
  Lds,
  Cxn,
  Vfr,
  qfr,
  cPe,
  YZr,
  V6t,
  q6t,
  GRt,
  Y6t,
  X6t
};

//# sourceMappingURL=chunk-6vmxe8k2.js.map
