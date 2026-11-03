// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { Ke, E } from "./chunk-fs43t96t.js";
import { Yn, Rc, Fa, Fl, zs } from "./chunk-h5gbmqm1.js";
import { Le } from "./chunk-jazcqqqr.js";
import { F, L, ke, no, J, Tee, Ol } from "./chunk-wrtp8qz8.js";
import { l } from "./chunk-ewvf3tep.js";
import { _, LM, tCt, Po, ie, Cn, t } from "./chunk-4kxznmzw.js";
import { I, Ad, Ze, Ft } from "./chunk-a16y5hcz.js";
import { ut, os } from "./chunk-jtb5bzvb.js";
import { er, Is, Ro, Qt, Tf } from "./chunk-1e5yp9hx.js";
import { M9, tqe } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { nu } from "./chunk-13nwb0xt.js";
import { pl, Af, ni, Vs, or, aE } from "./chunk-5rw2zfa0.js";
import { Tv, tAt } from "./chunk-9z5ybxhe.js";
import { ln, ZE, Fh, pe, Xm } from "./chunk-7c3thgax.js";
import { UU, gz } from "./chunk-g49hnbqz.js";
import { _3n } from "./chunk-frrn501g.js";
import { KT, zjt } from "./chunk-d5zj5299.js";
import { zG } from "./chunk-p56qmwgb.js";
import { tzn, XPr, non, Pmt, yMe, pRo, mRo, IMr, fG, Wge, Uke } from "./chunk-j0tbz6ra.js";
import { WC } from "./chunk-6h7ejyet.js";
import { mr, YC } from "./chunk-spwjh8kb.js";
import { CQ } from "./chunk-tsf65jkw.js";
import { cAs, uAs, zMt, Gve, V$n, hho } from "./chunk-jrtr06zc.js";
import { iK, gme } from "./chunk-w14ey53v.js";
import { v8e, Iae, uZt, wte, XIe, E8e, fZt, JIe, Rut } from "./chunk-54jzcsty.js";
import { bL } from "./chunk-vqrcgm9z.js";
import { xut } from "./chunk-42v7dsg4.js";
import { vc } from "./chunk-5ns6j8e0.js";
import { H } from "./chunk-p8tprgqa.js";
import { et } from "./chunk-c9re0p40.js";
import { en } from "./chunk-rc7xvf0x.js";
import {
  lstat as Oe,
  readdir as De,
  readlink as Ln,
  realpath as Pn,
  stat as Ne
} from "fs/promises";
import {
  dirname as vt,
  extname as de,
  join as re,
  posix as ne,
  relative as K,
  resolve as En,
  sep as j,
  win32 as he
} from "path";
import { lstat as tn, open as nn, realpath as rn } from "fs/promises";
import { isAbsolute as on, join as sn, relative as an, sep as un } from "path";
function tt(e, n = iK) {
  if (e.isSymbolicLink()) return "symlink";
  if (!e.isFile()) return "not_regular_file";
  if (e.nlink > 1) return "hard_link";
  if (e.size > n) return "too_large";
  return null;
}
function dn(e) {
  return e === "" || e === ".." || e.startsWith(`..${un}`) || on(e);
}
async function cn(e, n) {
  let r = Buffer.allocUnsafe(n),
    o = 0;
  while (o < n) {
    let { bytesRead: i } = await e.read(r, o, n - o, o);
    if (i === 0) break;
    o += i;
  }
  return r.subarray(0, o);
}
async function nt(e, n, r) {
  let o = await cn(e, Number(n.size));
  if (BigInt(o.length) < n.size)
    return (
      t(
        `working file ${r}: ${o.length} of the ${n.size} bytes that its stat promised came, with no error; skipped as changed`
      ),
      { kind: "skip", skipped: { path: r, reason: "changed" } }
    );
  return {
    kind: "read",
    content: o,
    mode: Number(n.mode) & 511,
    dev: n.dev,
    ino: n.ino,
    mtimeMs: Number(n.mtimeNs) / 1e6,
    ctimeMs: Number(n.ctimeNs) / 1e6
  };
}
async function rt(e, n, r, o = null, i = iK) {
  try {
    if (o !== null) return await fn(o, r, i);
    let s = sn(e, r),
      u = await tn(s, { bigint: !0 }),
      d = tt(u, i);
    if (d !== null) return { kind: "skip", skipped: { path: r, reason: d } };
    if (Rc(s)) return { kind: "skip", skipped: { path: r, reason: "unreadable" } };
    if (dn(an(n, await rn(s))))
      return { kind: "skip", skipped: { path: r, reason: "outside_root" } };
    let f = await nn(s, vc());
    try {
      let p = await f.stat({ bigint: !0 });
      if (p.dev !== u.dev || p.ino !== u.ino)
        return { kind: "skip", skipped: { path: r, reason: "changed" } };
      if (p.size > i) return { kind: "skip", skipped: { path: r, reason: "too_large" } };
      return await nt(f, p, r);
    } finally {
      await f.close();
    }
  } catch (s) {
    let u = E(s),
      d =
        u === "ELOOP" || u === "EMLINK" || u === "WORKING_PARENT_NOT_DIRECTORY"
          ? "symlink"
          : "unreadable";
    return {
      kind: "skip",
      skipped: { path: r, reason: d },
      ...(d === "unreadable" && u !== void 0 && { errnoCode: u })
    };
  }
}
async function fn(e, n, r) {
  let o = await e.open(n, vc());
  try {
    let i = await o.stat({ bigint: !0 }),
      s = tt(i, r);
    if (s !== null) return { kind: "skip", skipped: { path: n, reason: s } };
    return await nt(o, i, n);
  } finally {
    await o.close();
  }
}
var He = /(^|[\s\][])@(?=((?:[^\s\\]|\\ )+))/g;
function Pe(e, n = oe, r) {
  let o = e.replace(
      /\r\n?/g,
      `
`
    ),
    i =
      r === void 0
        ? n
        : (u) => {
            let d = n(u);
            if (!d) r.push(u);
            return d;
          },
    s = at(o, new WC({ gfm: !1 }).lex(o), lt, i);
  return Te(s, n) ? te(s) : s;
}
var oe = () => !1;
function pn(e, n) {
  if (e.type === "code" || e.type === "codespan" || e.type === "escape") return e.raw;
  if (e.type === "html") return mn(e.raw, n);
  let r = [...(e.tokens ?? []), ...(e.items ?? [])];
  if (r.length === 0) return e.type === "text" ? ot(e.raw, n) : e.raw;
  let o = at(e.raw, r, (i) => i, n);
  return e.type === "text" ? ot(o, n) : o;
}
function at(e, n, r, o) {
  let i = "",
    s = 0;
  for (let u of n) {
    let d = e.indexOf(u.raw, s);
    if (d === -1) return i + lt(e.slice(s));
    ((i += r(e.slice(s, d)) + pn(u, o)), (s = d + u.raw.length));
  }
  return i + r(e.slice(s));
}
function ot(e, n) {
  return e.replace(He, (r, o, i) => (n(me(i)) ? r : `${o}\\@`));
}
function me(e) {
  return Ze(e, "#").replaceAll("\\ ", " ");
}
function mn(e, n) {
  let r = e.trimStart();
  if (!(r.startsWith("<!--") && r.includes("-->"))) return e;
  let o = [],
    i = "",
    s = 0;
  for (let d of e.matchAll(/<!--[\s\S]*?-->/g))
    (o.push({ rawStart: s, residueStart: i.length }),
      (i += e.slice(s, d.index)),
      (s = d.index + d[0].length));
  return (
    o.push({ rawStart: s, residueStart: i.length }),
    (i += e.slice(s)),
    [...i.matchAll(He)]
      .filter((d) => !n(me(d[2] ?? "")))
      .map((d) => {
        let f = d.index + (d[1] ?? "").length,
          { rawStart: p, residueStart: g } = o.findLast((S) => S.residueStart <= f) ?? {
            rawStart: 0,
            residueStart: 0
          };
        return p + (f - g);
      })
      .reduceRight((d, f) => `${d.slice(0, f)}\\${d.slice(f)}`, e)
  );
}
function lt(e) {
  let n = null;
  return e
    .split(
      `
`
    )
    .map((r) => {
      let o = /^[\s>]*(`{3,}|~{3,})/.exec(r)?.[1] ?? null;
      if (n === null) {
        if (o === null) return gn(r);
        return ((n = o), r);
      }
      if (o !== null && o[0] === n[0] && o.length >= n.length && /^[\s>]*[`~]+\s*$/.test(r))
        n = null;
      return r;
    }).join(`
`);
}
function gn(e) {
  return e.replace(/@/g, (n, r) => (Ee(e, r) || /[\p{L}\p{N}]/u.test(e[r - 1] ?? "") ? n : "\\@"));
}
function dt(e) {
  return Object.keys(new WC({ gfm: !1 }).lex(e).links).length > 0;
}
function te(e) {
  return e.replace(/@/g, (n, r) => (Ee(e, r) ? n : "\\@"));
}
function Ee(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r % 2 === 1;
}
var Re = { vettable: !1 };
function Fe(e, n) {
  let r = new WC({ gfm: !1 }).lex(n),
    i = [
      ...L(L([n, e]).flatMap((u) => [u, u.replace(/\\([[\]])/g, "$1")])).map((u) =>
        it(u, "as_loader")
      ),
      ...hn(r).map((u) => it(u, "every_at"))
    ],
    s = L([...ft(r), ...i.flatMap((u) => (u.vettable ? u.spellings : []))]);
  return i.every((u) => u.vettable) && s.length <= _n ? { vettable: !0, spellings: s } : Re;
}
function hn(e) {
  let n = (r) =>
    r.flatMap((o) => {
      if (o.type === "code" || o.type === "codespan") return [];
      if (o.type === "html") {
        let i = o.raw.trimStart();
        return i.startsWith("<!--") && i.includes("-->")
          ? [o.raw.replace(/<!--[\s\S]*?-->/g, "")]
          : [];
      }
      return n([...(o.tokens ?? []), ...(o.items ?? [])]);
    });
  return n(e);
}
var ct = 4096,
  yn = 64,
  _n = 4096,
  Sn = 1048576,
  bn = /@(?!@)(?=[^\s\\]|\\ )/g,
  kn = new RegExp(String.raw`(?:[^\s\\]|\\ ){1,${ct + 1}}`, "y"),
  ve = /[\p{L}\p{N}]/u,
  wn = /[*_[\]!<`]/g;
function it(e, n) {
  let r = [],
    o = 0,
    i = new RegExp(kn);
  for (let s of e.matchAll(bn)) {
    if (n === "as_loader" && (ve.test(e[s.index - 1] ?? "") || Ee(e, s.index))) continue;
    i.lastIndex = s.index + 1;
    let u = i.exec(e)?.[0] ?? "";
    if (((o += u.length), u.length > ct || o > Sn)) return Re;
    let d = Rn(u);
    if (d.length > yn) return Re;
    r.push({ run: u, closers: d });
  }
  return {
    vettable: !0,
    spellings: r.flatMap(({ run: s, closers: u }) =>
      L([s, ...u.map((d) => s.slice(0, d))]).flatMap((d) => {
        let f = me(d);
        return f === "" || f.startsWith("@") ? [] : [f];
      })
    )
  };
}
function Rn(e) {
  return [...e.matchAll(wn)].filter((n) => n.index > 0 && !vn(e, n)).map((n) => n.index);
}
function vn(e, n) {
  return n[0] === "_" && ve.test(e[n.index - 1] ?? "") && ve.test(e[n.index + 1] ?? "");
}
function Te(e, n = oe) {
  return xe(e).some((r) => !n(r));
}
function xe(e) {
  return ft(new WC({ gfm: !1 }).lex(e));
}
function ft(e) {
  let n = (r) =>
    r.flatMap((o) => {
      if (o.type === "code" || o.type === "codespan") return [];
      if (o.type === "html") {
        let i = o.raw.trimStart();
        return i.startsWith("<!--") && i.includes("-->")
          ? st(o.raw.replace(/<!--[\s\S]*?-->/g, ""))
          : [];
      }
      return [
        ...(o.type === "text" ? st(o.text ?? o.raw) : []),
        ...n([...(o.tokens ?? []), ...(o.items ?? [])])
      ];
    });
  return n(e);
}
function st(e) {
  return [...e.matchAll(He)].flatMap((n) => {
    let r = me(n[2] ?? "");
    return r.startsWith("./") ||
      r.startsWith("~/") ||
      (r.startsWith("/") && r !== "/") ||
      (!r.startsWith("@") && !/^[#%^&*()]+/.test(r) && /^[a-zA-Z0-9._-]/.test(r))
      ? [r]
      : [];
  });
}
function Ie(e) {
  let o = new WC({ gfm: !1 })
    .lex(
      `${e}

<!-- ccr-home-probe -->
`
    )
    .findLast((i) => i.type !== "space");
  return !(o?.type === "html" && o.raw.trim() === "<!-- ccr-home-probe -->");
}
function pt(e) {
  return `

<!-- inlined import: ${encodeURI(e)} -->

`;
}
import { join as mt } from "path";
var gt = 4096,
  ge = !0;
async function ht(e, n) {
  if (J())
    return (
      t("home inventory: memory files not read in a diskless session; nothing is sent"),
      null
    );
  let r = { reads: 0 },
    o = await Hn(e, r, n);
  if (o === null) return null;
  let i = new Map();
  for (let s = o.pop(); s !== void 0; s = o.pop()) {
    let u = `${s.type}\x00${nu(s.path)}`;
    if (i.has(u)) continue;
    if (n?.aborted) return null;
    i.set(u, s);
    let d = await fG(s.path, s.type, new Set(), ge, IMr - 2);
    if (((r.reads += d.length), r.reads > gt)) return null;
    o.push(...d.filter((f) => f.path !== s.path));
  }
  return [...i.values()];
}
async function Hn(e, n, r) {
  let o = (d, f) => () => fG(d, f, new Set(), ge, f === "User" ? 0 : IMr - 1),
    i = (d, f) => async () => [
      ...(await Wge({
        rulesDir: d,
        type: f,
        processedPaths: new Set(),
        includeExternal: ge,
        conditionalRule: !1
      })),
      ...(await Wge({
        rulesDir: d,
        type: f,
        processedPaths: new Set(),
        includeExternal: ge,
        conditionalRule: !0
      }))
    ],
    s = [
      o(M9("Managed"), "Managed"),
      i(tqe(), "Managed"),
      o(mt(e, wte), "User"),
      i(mt(e, XIe), "User")
    ],
    u = [];
  for (let d of s) {
    if (r?.aborted) return null;
    let f = await d();
    if (((n.reads += f.length), n.reads > gt)) return null;
    u.push(...f);
  }
  return u;
}
var se = ".md",
  Fn = 50000,
  Ht = j === he.sep ? he : ne,
  Tn = j === he.sep ? /[\\/]+/ : /\/+/;
function ce(e, n) {
  return (n === "/" ? e : e.split(n).join("/")).normalize("NFC");
}
function G(e, n = Ht) {
  return e === ".." || e.startsWith(`..${n.sep}`) || n.isAbsolute(e);
}
function xn(e, n, r = Ht) {
  let o = r.relative(e, n);
  if (r.isAbsolute(o)) return null;
  let i = r.resolve(e, o),
    s = r.resolve(n);
  return (r === he ? i.toLowerCase() === s.toLowerCase() : i === s) ? o : null;
}
async function W(e) {
  if (Rc(e)) throw Error("realpath would misread a backslash in the path");
  return Pn(e);
}
function yt(e) {
  return Rc(e) ? { resolvedPath: e, isSymlink: !1, isCanonical: !1 } : Po(ie(), e);
}
var In = 4096;
async function $e(e, n, r, o) {
  let i;
  try {
    i = await W(n);
  } catch {
    return "unresolvable";
  }
  let s = K(e.realConfigHome, i);
  if (s === "" || G(s)) return "outside";
  let u = ce(s, j);
  return {
    realPath: i,
    nativeRel: s,
    rel: u,
    lexicalRel: r ?? u,
    rawRels: L([Lt(s), ...(o === null ? [] : [o])])
  };
}
async function An(e, n) {
  try {
    let r = await W(n);
    return _e(e, r) || !G(K(e.realConfigHome, r));
  } catch {
    return !0;
  }
}
function _e(e, n) {
  return !G(K(n, e.realConfigHome));
}
function Lt(e) {
  return j === "/" ? e : e.split(j).join("/");
}
function Pt(e, n) {
  let r = [e.configHome, e.realConfigHome].map((o) => K(o, n)).find((o) => o !== "" && !G(o));
  return r === void 0 ? null : { rel: ce(r, j), raw: Lt(r) };
}
function je(e) {
  let n = pl(Ze(e, "/"));
  return (
    Ad(e) &&
    e.includes("/") &&
    de(e).toLowerCase() === se &&
    !gme(e) &&
    !Un.test(e) &&
    !tzn.has(n) &&
    !n.startsWith("agent-memory") &&
    !Mn(e) &&
    !Et(e)
  );
}
function Et(e) {
  let n = pl(Ze(e, "/"));
  return n === pl(XIe) || n === pl(E8e);
}
function Mn(e) {
  let [n, r] = e.split("/");
  return pl(n ?? "") === "skills" && pl(r ?? "") === zG;
}
var Un = /~\d/,
  Bn = 32;
async function On(e) {
  let n = e,
    r = new Set();
  for (let o = 0; o < Bn; o += 1) {
    if (r.has(n)) return !1;
    r.add(n);
    let i;
    try {
      i = await Ln(n);
    } catch (u) {
      return _t(u);
    }
    if (i.includes("\uFFFD")) throw Error("link body is not valid UTF-8");
    let s;
    try {
      s = En(await W(vt(n)), i);
    } catch (u) {
      if (E(u) === "ENAMETOOLONG") throw u;
      return _t(u);
    }
    if ($n(i)) throw Error("link body climbs out of a directory it entered");
    if (zs(i) || LM(s)) return !0;
    try {
      if (!(await Oe(s)).isSymbolicLink()) return !1;
    } catch (u) {
      if (!D(u) || (E(u) === "ENAMETOOLONG" && !Dn(i))) throw u;
      return !1;
    }
    n = s;
  }
  throw Error("link chain too long to vet");
}
function _t(e) {
  if (D(e) || E(e) === "EINVAL") return !0;
  throw e;
}
function D(e) {
  let n = E(e);
  return n === "ENOENT" || n === "ENOTDIR" || n === "ELOOP" || n === "ENAMETOOLONG";
}
function Dn(e) {
  return e.split(/[\\/]/).some((n) => [...n].length > 255);
}
async function Tt(e) {
  try {
    return (await Ne(e), !1);
  } catch (n) {
    return D(n);
  }
}
async function Nn(e) {
  try {
    return !(await Ne(e)).isDirectory();
  } catch (n) {
    return D(n);
  }
}
function $n(e) {
  let n = !1;
  for (let r of e.split(Tn))
    if (r === "..") {
      if (n) return !0;
    } else if (r !== "" && r !== ".") n = !0;
  return !1;
}
var ue = { ok: !1, reason: "aborted" };
async function xt({
  configHome: e,
  isUserSettingsFileSendable: n,
  readRules: r,
  createFilter: o,
  signal: i,
  aliasDirectories: s = In,
  settingsToCloud: u = UU
}) {
  if (J()) return { ok: !1, reason: "diskless" };
  if (!(await u().catch(() => !1))) return { ok: !1, reason: "flag_off" };
  try {
    if (!n || !r.complete) return Ae({ rulesUnreadable: !0 });
    if (!Qt("userSettings")) return Ae({ rulesUnreadable: !1 });
    let d;
    try {
      d = await W(e);
    } catch (R) {
      if (D(R) && (await Tt(e))) return Ae({ rulesUnreadable: !1 });
      return { ok: !1, reason: "alias_unreadable" };
    }
    let f = {
      configHome: e,
      realConfigHome: d,
      aliasBudget: { left: s },
      giveUp: null,
      topLevelLinks: []
    };
    f.topLevelLinks = await Gn(f);
    let p = o(e, { realRoot: d, readRules: r }),
      g = { held: new Map() },
      S = new Set(),
      y = new Set(),
      T = new Map(),
      v = new Map(),
      P = YC() ? { files: [], leftBehind: [] } : await jn(f);
    if (f.giveUp === null) {
      let R = await ht(e, i);
      if (bL(i)) return ue;
      if (R === null) return { ok: !1, reason: "too_many_links" };
      for (let x of R) {
        if (bL(i)) return ue;
        await ze(f, p, x, v);
      }
    }
    let M = await Vn(f, p, P.files, g, S, y, T, v, i);
    if (M === null) return ue;
    let A = mr("outputStyles") ? { files: [], leftBehind: [] } : await At(f, E8e),
      h = await qn(f, p, A.files, g, S, y, v);
    if (f.giveUp !== null) return { ok: !1, reason: f.giveUp };
    let m = [...g.held.values()],
      B = new Set(),
      k = new Map();
    for (let R of [
      ...m.filter((x) => x.kind === "output_style"),
      ...m.filter((x) => x.kind !== "output_style")
    ]) {
      if (bL(i)) return ue;
      let x = await Zn(f, p, R, v, B, y);
      if (x.entry === null) B.add(R.location.realPath);
      k.set(R, x);
    }
    let w = m.flatMap((R) => k.get(R) ?? []),
      { kept: U, droppedOverCap: O } = uAs(
        w
          .flatMap(({ entry: R, foldedIncludes: x }) =>
            R === null ? [] : [{ content: R.content, entry: R, foldedIncludes: x }]
          )
          .toSorted((R, x) => Kn(R.entry, x.entry))
      ),
      N = [...T].filter(([R]) => !S.has(R) && !y.has(R)).map(([R, x]) => v.get(R) ?? x),
      X = [
        ...P.leftBehind,
        ...M,
        ...N,
        ...A.leftBehind,
        ...h,
        ...w.flatMap((R) => R.leftBehind),
        ...O.flatMap(({ entry: R, foldedIncludes: x }) => [
          { path: R.path, reason: "over_cap" },
          ...x.map((le) => ({ path: le, reason: "include_not_sent" }))
        ])
      ],
      C = U.map(({ entry: R }) => R);
    return { ok: !0, inventory: { entries: C, summary: It(C, X), leftBehind: X } };
  } catch (d) {
    if (bL(i)) return ue;
    return (
      t(`home inventory: gave the run up \u2014 ${d instanceof Error ? d.message : String(d)}`),
      { ok: !1, reason: "alias_unreadable" }
    );
  }
}
function Ae({ rulesUnreadable: e }) {
  return {
    ok: !0,
    inventory: { entries: [], summary: { ...It([], []), rulesUnreadable: e }, leftBehind: [] }
  };
}
function It(e, n) {
  return {
    withheldSensitive: Y(n, "sensitive"),
    withheldReadDenied: Y(n, "read_denied"),
    rulesUnreadable: !1,
    includesNotSent: Y(n, "include_not_sent"),
    symlinksNotSent: Y(n, "symlink_not_sent"),
    notDestinations: Y(n, "not_destination"),
    unreadable: Y(n, "unreadable"),
    overCap: Y(n, "over_cap"),
    undefusable: Y(n, "undefusable"),
    inlinedImports: e.reduce((r, o) => r + o.folded.length, 0),
    defusedImports: e.reduce((r, o) => r + o.defused, 0)
  };
}
function Y(e, n) {
  return F(e, (r) => r.reason === n);
}
var St = { claude_md: 0, rule: 1, output_style: 2 };
function Kn(e, n) {
  return (
    St[e.kind] - St[n.kind] ||
    e.content.length - n.content.length ||
    (e.path < n.path ? -1 : e.path > n.path ? 1 : 0)
  );
}
async function jn(e) {
  let n = re(e.configHome, wte),
    r = await Mt(e, n),
    o = await At(e, XIe);
  if (r === null) return o;
  let i = r.isSymlink ? await fe(e, n) : void 0;
  if (i?.isDirectory() === !0 && (await An(e, n))) e.giveUp ??= "alias_unreadable";
  if (i === null || (i !== void 0 && !i.isFile()))
    return {
      files: o.files,
      leftBehind: [{ path: wte, reason: "symlink_not_sent" }, ...o.leftBehind]
    };
  return {
    files: [
      { path: n, lexicalRel: wte, rawLexicalRel: wte, viaSymlink: r.isSymlink, aliasOnly: !1 },
      ...o.files
    ],
    leftBehind: o.leftBehind
  };
}
async function At(e, n) {
  let r = re(e.configHome, n),
    o = await Mt(e, r);
  if (o === null) return { files: [], leftBehind: [] };
  if (o.isSymlink) {
    let i = await fe(e, r);
    if (i === null || !i.isDirectory())
      return {
        files:
          i !== null && i.isFile()
            ? [{ path: r, lexicalRel: n, rawLexicalRel: n, viaSymlink: !0, aliasOnly: !0 }]
            : [],
        leftBehind: [{ path: n, reason: "symlink_not_sent" }]
      };
  }
  return Ct(e, r, [n], o.isSymlink, new Set());
}
async function Gn(e) {
  let n;
  try {
    n = await De(e.configHome, { withFileTypes: !0 });
  } catch (o) {
    if (!D(o)) e.giveUp ??= "alias_unreadable";
    return [];
  }
  let r = [];
  for (let o of n) {
    let i = re(e.configHome, o.name),
      s = await Ge(e, i, o);
    if (s === null || !s.isSymbolicLink()) continue;
    if ((await fe(e, i)) === null) continue;
    let u;
    try {
      u = await W(i);
    } catch {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (_e(e, u)) {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    let d = K(e.realConfigHome, u);
    if (!G(d)) r.push({ name: o.name.normalize("NFC"), targetRel: ce(d, j) });
  }
  return r;
}
function Wn(e, n) {
  return e.topLevelLinks.flatMap(({ name: r, targetRel: o }) =>
    n === o ? [r] : n.startsWith(`${o}/`) ? [`${r}/${n.slice(o.length + 1)}`] : []
  );
}
async function Mt(e, n) {
  try {
    return { isSymlink: (await Oe(n)).isSymbolicLink() };
  } catch (r) {
    if (!D(r)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function Ct(e, n, r, o, i) {
  let s = r.join("/").normalize("NFC"),
    u = { files: [], leftBehind: [{ path: s, reason: "symlink_not_sent" }] },
    d;
  try {
    let g = await W(n);
    if (i.has(g)) return { files: await Ue(e, n, r, new Set([g])), leftBehind: [] };
    let S = K(e.realConfigHome, g);
    if (_e(e, g)) return ((e.giveUp ??= "alias_unreadable"), u);
    if (G(S)) return u;
    let y = `${ce(S, j)}/x.md`;
    if (o && JIe(y) === null)
      return { files: je(y) ? await Ue(e, n, r, new Set([g])) : [], leftBehind: u.leftBehind };
    (i.add(g), (d = await De(n, { withFileTypes: !0 })));
  } catch (g) {
    if (o || !D(g) || !(await Nn(n))) e.giveUp ??= "alias_unreadable";
    return { files: [], leftBehind: [] };
  }
  let f = [],
    p = [];
  for (let g of d.toSorted(Ut)) {
    let S = re(n, g.name),
      y = [...r, g.name].join("/"),
      T = y.normalize("NFC"),
      v = await Ge(e, S, g);
    if (v === null) continue;
    let P = v.isSymbolicLink(),
      M = g.name.endsWith(se),
      A = P ? await fe(e, S) : v;
    if (A === null) {
      if (de(g.name).toLowerCase() === se) p.push({ path: T, reason: "symlink_not_sent" });
    } else if (A.isDirectory()) {
      let h = await Ct(e, S, [...r, g.name], o || P, i);
      (f.push(...h.files), p.push(...h.leftBehind));
    } else if (A.isFile() && (M || P || (o && de(g.name).toLowerCase() === se)))
      f.push({ path: S, lexicalRel: T, rawLexicalRel: y, viaSymlink: o || P, aliasOnly: !M });
  }
  return { files: f, leftBehind: p };
}
async function Ue(e, n, r, o) {
  let i;
  try {
    i = await De(n, { withFileTypes: !0 });
  } catch {
    return ((e.giveUp ??= "alias_unreadable"), []);
  }
  let s = [];
  for (let u of i.toSorted(Ut)) {
    let d = re(n, u.name),
      f = [...r, u.name].join("/"),
      p = await Ge(e, d, u);
    if (p === null) continue;
    let g = p.isSymbolicLink(),
      S = g ? await fe(e, d) : p;
    if (S === null) continue;
    if (S.isDirectory()) {
      let y = await zn(e, d, o);
      if (y !== null) s.push(...(await Ue(e, d, [...r, u.name], new Set([...o, y]))));
    } else if (S.isFile() && (g || de(u.name).toLowerCase() === se))
      s.push({
        path: d,
        lexicalRel: f.normalize("NFC"),
        rawLexicalRel: f,
        viaSymlink: g,
        aliasOnly: !0
      });
  }
  return s;
}
async function zn(e, n, r) {
  let o;
  try {
    o = await W(n);
  } catch {
    return ((e.giveUp ??= "alias_unreadable"), null);
  }
  let i = K(e.realConfigHome, o);
  if (_e(e, o)) return ((e.giveUp ??= "alias_unreadable"), null);
  if (r.has(o) || G(i)) return null;
  let s = `${ce(i, j)}/x.md`;
  if (JIe(s) === null && !je(s)) return null;
  if (e.aliasBudget.left <= 0) return ((e.giveUp ??= "too_many_links"), null);
  return ((e.aliasBudget.left -= 1), o);
}
async function Ge(e, n, r) {
  if (
    r.isSymbolicLink() ||
    r.isFile() ||
    r.isDirectory() ||
    r.isFIFO() ||
    r.isSocket() ||
    r.isCharacterDevice() ||
    r.isBlockDevice()
  )
    return r;
  try {
    return await Oe(n);
  } catch (o) {
    if (!D(o)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
async function fe(e, n) {
  let r;
  try {
    r = await On(n);
  } catch {
    return ((e.giveUp ??= "alias_unreadable"), null);
  }
  if (r) return null;
  try {
    return await Ne(n);
  } catch (o) {
    if (!D(o)) e.giveUp ??= "alias_unreadable";
    return null;
  }
}
function Ut(e, n) {
  return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
}
function Z(e, n, r) {
  if (r !== null || !e.has(n)) e.set(n, r);
}
async function Bt(e, n, r, o, i, s) {
  let u = await $e(e, r.path, r.lexicalRel, r.rawLexicalRel);
  if (r.aliasOnly) {
    if (u === "unresolvable") e.giveUp ??= "alias_unreadable";
    else if (u !== "outside") {
      let p = Q(e, n, u, r.lexicalRel);
      if (p !== null) Z(s, u.realPath, p);
    }
    return { kind: "attributed" };
  }
  if (u === "unresolvable") {
    if (r.viaSymlink) e.giveUp ??= "alias_unreadable";
    return Me(r, r.viaSymlink ? "symlink_not_sent" : "unreadable");
  }
  if (u === "outside") return Me(r, "symlink_not_sent");
  let d = r.viaSymlink ? u.rel : r.lexicalRel,
    f = Rut(d);
  if (f === null) {
    let p = r.viaSymlink ? Q(e, n, u, r.lexicalRel) : null;
    if (!r.viaSymlink || p !== null) Z(s, u.realPath, p);
    if (i.has(u.realPath)) return { kind: "attributed" };
    return (
      i.add(u.realPath),
      p === null
        ? Me(r, r.viaSymlink ? "symlink_not_sent" : "not_destination")
        : { kind: "refused", left: p }
    );
  }
  if (o.has(u.realPath)) {
    let p = Q(e, n, u, r.lexicalRel);
    if (p !== null) Z(s, u.realPath, p);
    return { kind: "attributed" };
  }
  return { kind: "candidate", candidate: { ...f, location: u, imports: [], styleVia: new Map() } };
}
function Me(e, n) {
  return { kind: "refused", left: { path: e.lexicalRel, reason: n } };
}
function We(e, n) {
  let r = fZt(n.destination);
  if (e.held.has(r)) return null;
  return (e.held.set(r, n), n);
}
async function Vn(e, n, r, o, i, s, u, d, f) {
  let p = [];
  for (let g of r) {
    if (bL(f)) return null;
    let S = await Bt(e, n, g, i, s, d);
    if (S.kind === "refused") p.push(S.left);
    if (S.kind !== "candidate") continue;
    let { candidate: y } = S,
      T = g.lexicalRel === wte ? g.path : y.location.realPath,
      v = await fG(T, "User", new Set(), !0);
    if (v.length === 0) {
      let P = await Be(e, y.location);
      if (P.kind === "read" && P.content.includes(0))
        p.push({ path: g.lexicalRel, reason: "unreadable" });
      continue;
    }
    if (We(o, y) === null) {
      for (let P of v) await ze(e, n, P, d);
      p.push({ path: g.lexicalRel, reason: "not_destination" });
      continue;
    }
    (i.add(y.location.realPath), p.push(...(await Xn(e, n, y, v, o, i, s, u, d))));
  }
  return p;
}
function Ce(e) {
  return e.globs === void 0 ? "" : _(e.globs.toSorted());
}
async function Xn(e, n, r, o, i, s, u, d, f) {
  let p = [],
    g = o.find((h) => h.parent === void 0),
    S = o.filter((h) => h !== g),
    y = new Map(),
    T = (h, m) => ({
      candidate: h,
      isStyle: h.kind === "output_style",
      withheld: bt(e, n, h.location) !== null || f.get(h.location.realPath) != null,
      scope: Ce(m)
    }),
    v = new Map(g === void 0 ? [] : [[g.path, T(r, g)]]),
    P = new Map(),
    M = (h, m) => {
      if (!u.has(h)) (u.add(h), P.set(h, p.push(m) - 1));
    },
    A = (h, m) => {
      let B = P.get(h);
      if (B === void 0) M(h, m);
      else p[B] = m;
    };
  for (let h of o) await ze(e, n, h, f);
  for (let h of S) {
    let m = v.get(h.parent ?? "");
    if (m === void 0) continue;
    let B = Pt(e, h.path),
      k = await $e(e, h.path, B?.rel ?? null, B?.raw ?? null);
    if (k === "outside" || k === "unresolvable") {
      M(h.path, { path: B?.rel ?? h.path, reason: "include_not_sent" });
      continue;
    }
    if (s.has(k.realPath) || f.has(k.realPath)) {
      let C = f.get(k.realPath) ?? Q(e, n, k, k.lexicalRel);
      if (C !== null) (Z(f, k.realPath, C), A(k.realPath, C));
      continue;
    }
    let w = Rut(k.rel);
    if (w !== null) {
      let C = We(i, { ...w, location: k, imports: [], styleVia: new Map() });
      if (C === null) {
        M(k.realPath, { path: k.lexicalRel, reason: "not_destination" });
        continue;
      }
      if ((s.add(k.realPath), C.kind === "output_style")) {
        y.set(h.path, k.realPath);
        let R = h.parent === void 0 ? void 0 : y.get(h.parent);
        if (R !== void 0) m.candidate.styleVia.set(k.realPath, R);
        if (!m.withheld && !m.isStyle && m.scope === Ce(h))
          m.candidate.imports.push({ location: k, via: R ?? null, asStyle: !0 });
      }
      v.set(
        h.path,
        C.kind === "output_style"
          ? { ...m, withheld: m.withheld || bt(e, n, C.location) !== null }
          : T(C, h)
      );
      continue;
    }
    if (m.withheld) continue;
    let U = L([k.rel, k.lexicalRel, ...k.rawRels]).every(je),
      O = U ? Q(e, n, k, k.lexicalRel) : null,
      N = O?.reason ?? null,
      X = Et(k.rel) && de(k.rel).toLowerCase() === se;
    if (O !== null || X) Z(f, k.realPath, O);
    if (!U || N !== null) {
      M(k.realPath, {
        path: k.lexicalRel,
        reason: N ?? (X ? "not_destination" : "include_not_sent")
      });
      continue;
    }
    if (m.isStyle || m.scope !== Ce(h)) {
      d.set(k.realPath, { path: k.lexicalRel, reason: "include_not_sent" });
      continue;
    }
    (m.candidate.imports.push({
      location: k,
      via: h.parent === void 0 ? null : (y.get(h.parent) ?? null)
    }),
      y.set(h.path, k.realPath),
      s.add(k.realPath),
      v.set(h.path, m));
  }
  return p;
}
async function ze(e, n, r, o) {
  if (Rc(r.path)) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  let i = vt(yt(r.path).resolvedPath),
    s = Fe(r.content, ee(r.rawContent ?? r.content).body);
  if (!s.vettable) {
    e.giveUp ??= "alias_unreadable";
    return;
  }
  for (let u of s.spellings) {
    if (u.includes("\x00")) continue;
    let d = ut(u, i);
    if ((Yn(u) || Yn(d)) && G(K(e.configHome, d))) continue;
    let f = yt(d);
    if (!f.isCanonical) {
      if (!f.isSymlink && !(await Jn(d))) e.giveUp ??= "alias_unreadable";
      continue;
    }
    let p = Pt(e, d);
    if (p === null) {
      let y = f.resolvedPath;
      if (o.get(y) != null || G(K(e.realConfigHome, y))) continue;
      let T = xn(e.configHome, d);
      if (T === null) {
        e.giveUp ??= "alias_unreadable";
        continue;
      }
      switch (_3n(d) || _3n(y) ? "sensitive" : n(T, !0)) {
        case "sensitive":
        case "sensitive_tracked":
        case "host_config":
          Z(o, y, { path: u, reason: "sensitive" });
          break;
        case "read_denied":
        case "rules_unreadable":
          Z(o, y, { path: u, reason: "read_denied" });
          break;
        case "content_filter":
        case null:
          break;
      }
      continue;
    }
    let g = await $e(e, d, p.rel, p.raw);
    if (g === "unresolvable") {
      e.giveUp ??= "alias_unreadable";
      continue;
    }
    if (g === "outside" || o.get(g.realPath) != null) continue;
    let S = Q(e, n, g, g.lexicalRel);
    if (S !== null) Z(o, g.realPath, S);
  }
}
async function Jn(e) {
  if ((Yn(e) && !Fl(e)) || Fa(e)) return !0;
  try {
    return (await W(e), !1);
  } catch (n) {
    return D(n) && (await Tt(e));
  }
}
async function qn(e, n, r, o, i, s, u) {
  let d = [];
  for (let f of r) {
    let p = await Bt(e, n, f, i, s, u);
    if (p.kind === "refused") d.push(p.left);
    else if (p.kind === "candidate")
      if (p.candidate.kind !== "output_style")
        d.push({ path: f.lexicalRel, reason: "symlink_not_sent" });
      else if (We(o, p.candidate) === null)
        d.push({ path: f.lexicalRel, reason: "not_destination" });
      else i.add(p.candidate.location.realPath);
  }
  return d;
}
function bt(e, n, r) {
  return Ot(e, n, r)?.reason ?? null;
}
function Q(e, n, r, o) {
  let i = Ot(e, n, r);
  return i === null ? null : { path: i.alias ?? o, reason: i.reason };
}
function Ot(e, n, r) {
  let o = L([r.lexicalRel, r.rel, ...r.rawRels]),
    i = L(o.flatMap((d) => Wn(e, d))).filter((d) => !o.includes(d)),
    s = [...o, ...i];
  if ([...s, ...s.map((d) => re(e.configHome, ...d.split("/"))), r.realPath].some((d) => _3n(d)))
    return { reason: "sensitive", alias: null };
  for (let d of s) {
    let f = i.includes(d) ? d : null;
    switch (n(d, !1)) {
      case "sensitive":
      case "sensitive_tracked":
      case "host_config":
        return { reason: "sensitive", alias: f };
      case "read_denied":
      case "rules_unreadable":
        return { reason: "read_denied", alias: f };
      case "content_filter":
      case null:
        break;
    }
  }
  return null;
}
async function Zn(e, n, r, o, i, s) {
  let u = Q(e, n, r.location, r.destination),
    d = o.get(r.location.realPath) ?? null;
  if (u !== null) return q(r, u.reason, s, u.path);
  if (d !== null) return q(r, d.reason, s, d.path);
  if (!(await wt(e, r.location))) return q(r, "unreadable", s);
  let f = await Be(e, r.location);
  if (f.kind === "skip") return q(r, ir(f.skipped.reason), s);
  if (f.content.length > Iae) return q(r, "over_cap", s);
  let p = f.content.toString("utf8");
  if (Gve(p)) {
    let w = q(r, "credential", s);
    return {
      ...w,
      leftBehind: w.leftBehind.map((U) => (U.reason === "credential" ? { ...U, ...Rt(p, 0) } : U))
    };
  }
  let g =
      r.kind === "output_style"
        ? { content: f.content, defusedPaths: [] }
        : Qn(r.destination, f.content, r.imports.length > 0),
    S = [g.content],
    y = [],
    T = [],
    v = g.content.length,
    P = [],
    M = r.imports.length > 0 && Ie(ee(g.content.toString("utf8")).body),
    A = new Set(i);
  for (let { location: w, via: U, asStyle: O } of r.imports) {
    let N = (Zt) => {
        if (!O) P.push(Zt);
      },
      X = Q(e, n, w, w.lexicalRel);
    if (
      X !== null ||
      o.has(w.realPath) ||
      A.has(w.realPath) ||
      (U !== null && rr(U, A, r.styleVia)) ||
      M
    ) {
      if ((A.add(w.realPath), !s.has(w.realPath)))
        (s.add(w.realPath),
          N(X ?? o.get(w.realPath) ?? { path: w.lexicalRel, reason: "include_not_sent" }));
      continue;
    }
    let C = (await wt(e, w)) ? await Be(e, w) : null;
    if (C === null || C.kind === "skip") {
      (A.add(w.realPath), N({ path: w.lexicalRel, reason: "include_not_sent" }));
      continue;
    }
    let { head: R, body: x } = ee(C.content.toString("utf8"));
    if (Ie(x) || dt(x)) {
      (A.add(w.realPath), N({ path: w.lexicalRel, reason: "include_not_sent" }));
      continue;
    }
    let le = Buffer.from(pt(w.rel) + Pe(x));
    if (v + le.length > Iae) {
      (A.add(w.realPath), N({ path: w.lexicalRel, reason: "over_cap" }));
      continue;
    }
    if (Gve(x)) {
      (A.add(w.realPath),
        N({
          path: w.lexicalRel,
          reason: "credential",
          ...Rt(
            x,
            Ft(
              R,
              `
`
            )
          )
        }));
      continue;
    }
    if ((S.push(le), y.push(w.lexicalRel), !O)) T.push(w.lexicalRel);
    v += le.length;
  }
  let h = Buffer.concat(S),
    m = r.kind !== "output_style" && S.length > 1 && tr(g.content, h, r.destination) ? nr(h) : h;
  if (r.kind !== "output_style" && m !== h && ye(m, oe)) return q(r, "undefusable", s);
  if (!m.equals(f.content) && Gve(m.toString("utf8"))) {
    let w = q(r, "credential", s),
      U = new Set(P.map((O) => O.path));
    return { ...w, leftBehind: [...w.leftBehind.filter((O) => !U.has(O.path)), ...P] };
  }
  let B = new Set(y),
    k = F(
      g.defusedPaths,
      (w) => !B.has(ne.normalize(ne.join(ne.dirname(r.destination), w)).normalize("NFC"))
    );
  return {
    entry: { path: r.destination, kind: r.kind, content: m, sha256: et(m), folded: y, defused: k },
    foldedIncludes: T,
    leftBehind: P
  };
}
function Qn(e, n, r) {
  let o = (M) => Dt(e, M),
    i = n.toString("utf8").replace(
      /\r\n?/g,
      `
`
    ),
    s = ee(i),
    u = s.head,
    d = u !== "" && i.startsWith("\uFEFF") ? "\uFEFF" : "",
    f =
      r && u === "" && /^\uFEFF?---\s*\n/.test(i)
        ? `
`
        : "",
    p = f + d + u,
    g = s.body,
    S = [],
    y = Pe(g, o, S),
    T =
      y === g && f === ""
        ? { content: n, defusedPaths: [] }
        : { content: Buffer.from(p + y), defusedPaths: S };
  if (T.content !== n && (ee(n.toString("utf8")).head === "") !== (u === ""))
    return { content: Buffer.from(te(i)), defusedPaths: kt(g, o) };
  if (!ye(T.content, o)) return T;
  let v = kt(g, o),
    P = Buffer.from(p + te(g));
  return ye(P, oe)
    ? { content: Buffer.from(f + te(i)), defusedPaths: v }
    : { content: P, defusedPaths: v };
}
function kt(e, n) {
  let r = Fe(e, e);
  return r.vettable ? r.spellings.filter((o) => !n(o)) : [];
}
function tr(e, n, r) {
  let o = (u) => Dt(r, u),
    i = (u) => xe(ee(u.toString("utf8")).body),
    s = i(n);
  return s.some((u) => !o(u)) || F(s, o) > F(i(e), o);
}
function nr(e) {
  let n = e.toString("utf8"),
    { head: r, body: o } = ee(n),
    i = r !== "" && n.startsWith("\uFEFF") ? "\uFEFF" : "",
    s = Buffer.from(i + r + te(o));
  return ye(s, oe) ? Buffer.from(te(n)) : s;
}
function ye(e, n) {
  return Te(ee(e.toString("utf8")).body, n);
}
function ee(e) {
  let n = e.startsWith("\uFEFF") ? e.slice(1) : e,
    r = KT.exec(n)?.[0];
  return r === void 0 ? { head: "", body: e } : { head: r, body: n.slice(r.length) };
}
function Dt(e, n) {
  if (n.startsWith("/") || n.startsWith("~")) return !1;
  let r = ne.normalize(ne.join(ne.dirname(e), n)),
    o = r.startsWith("../") ? null : JIe(r);
  return o === "claude_md" || o === "rule";
}
function rr(e, n, r) {
  let o = new Set();
  for (let i = e; i !== void 0 && !o.has(i); i = r.get(i)) {
    if (n.has(i)) return !0;
    o.add(i);
  }
  return !1;
}
async function wt(e, n) {
  try {
    return (await W(re(e.realConfigHome, n.nativeRel))) === n.realPath;
  } catch {
    return !1;
  }
}
function Rt(e, n) {
  let r = e.split(`
`),
    o = r.length > Fn ? -1 : r.findIndex((i) => Gve(i));
  return o === -1 ? {} : { line: n + o + 1 };
}
function q(e, n, r, o = e.destination) {
  let i = [
      { realPath: e.location.realPath, row: { path: o, reason: n } },
      ...e.imports
        .filter((u) => !u.asStyle)
        .map(({ location: u }) => ({
          realPath: u.realPath,
          row: { path: u.lexicalRel, reason: "include_not_sent" }
        }))
    ],
    s = [];
  for (let { realPath: u, row: d } of i) if (!r.has(u)) (r.add(u), s.push(d));
  return { entry: null, foldedIncludes: [], leftBehind: s };
}
function Be(e, n) {
  return rt(e.realConfigHome, e.realConfigHome, n.nativeRel);
}
function ir(e) {
  switch (e) {
    case "symlink":
    case "hard_link":
      return "symlink_not_sent";
    case "too_large":
      return "over_cap";
    case "sensitive":
    case "sensitive_tracked":
    case "host_config":
      return "sensitive";
    case "read_denied":
    case "rules_unreadable":
      return "read_denied";
    case "content_filter":
    case "filtered":
    case "dependency_dir":
    case "outside_root":
    case "changed":
    case "not_regular_file":
    case "lane_path":
    case "over_budget":
    case "left_behind":
    case "unreadable":
    case "upload_failed":
    case "unpushed_only":
    case "ignored":
      return "unreadable";
  }
}
import { readdir as sr } from "fs/promises";
import { isAbsolute as ar, join as ae, relative as lr, sep as ur } from "path";
var z = { covers: "all" };
function Se(e) {
  if (!hho(e)) return { covers: "matchers", matchers: [] };
  let n = jt(e);
  if (!Array.isArray(n)) return z;
  let r = [];
  for (let o of n) {
    let i = H(o) ? o.matcher : void 0;
    if (typeof i !== "string") return z;
    if (i.trim() === "" || i === "*" || i === ".*") return z;
    r.push(i);
  }
  return { covers: "matchers", matchers: r };
}
function Kt(e) {
  if (e.covers === "all") return !0;
  let n = e.matchers;
  if (n.length === 0) return !1;
  return (r) =>
    Tv(r)
      ? n.some((o) => {
          let i = mRo(o);
          return i === void 0 || i.some((s) => tAt(r, s));
        })
      : n.some((o) => pRo(o, r));
}
function dr(e) {
  let n = e.filter(hho);
  if (n.length === 0) return;
  let r = n.map(jt);
  return (
    n.find((i, s) => !Array.isArray(r[s])) ?? {
      PreToolUse: r.flatMap((i) => (Array.isArray(i) ? i : []))
    }
  );
}
function jt(e) {
  return H(e) && Object.hasOwn(e, "PreToolUse") ? e.PreToolUse : void 0;
}
function Gt(e, n) {
  return e.covers === "all" || n.covers === "all"
    ? z
    : { covers: "matchers", matchers: L([...e.matchers, ...n.matchers]) };
}
function cr({
  sources: e,
  sourcesIncomplete: n,
  processGuard: r,
  plugins: o,
  repoEnabledPluginKeys: i
}) {
  if (
    n ||
    e.some((d) => !d.read) ||
    o === null ||
    o.errors.length > 0 ||
    o.warnings.some((d) => d.type === "project-scope-suppressed-untrusted") ||
    o.warnings.some((d) => d.type === "plugin-renamed" && (i === void 0 || i.has(or(d.source)))) ||
    o === null
  )
    return z;
  let u = o.enabled.filter(
    (d) =>
      d.scope === "project" ||
      Vs(d.source) === ni ||
      (d.scope !== "user" && (i === void 0 || i.has(or(d.source))))
  );
  if (u.some((d) => d.hooksConfig === void 0 && d.manifest.hooks !== void 0)) return z;
  return [
    r,
    ...e.map((d) => (d.read ? Se(d.hooks) : z)),
    ...u.map((d) => Se(d.hooksConfig))
  ].reduce(Gt, { covers: "matchers", matchers: [] });
}
function Ve(e) {
  return e.some(
    (n) => n.severity !== "warning" || n.path === "hooks" || n.path.startsWith("hooks.")
  );
}
function Wt(e, n, r = UU) {
  return {
    sources: Is,
    hooksOf: (o) => {
      if (o === "userSettings" || o === "flagSettings") return;
      if (o === "policySettings") return pe(o)?.hooks;
      let i = Je(o).map(we);
      return dr([...i.map((s) => s?.hooks), pe(o)?.hooks]);
    },
    sourcesIncomplete: () =>
      Ve(Xm().errors) || Xe().some((o) => Ve(zt(o).errors)) || (be.some((o) => !Qt(o)) && pr()),
    processGuard: () => {
      let o = gr(),
        i = (n() ?? []).filter((s) => s.hooks.length > 0 && !hr(s.skillRoot, o));
      return Gt(Se(Tee()), Se({ PreToolUse: i }));
    },
    loadPlugins: async () => {
      if ((await Promise.all(Xe().map(tCt))).some(Boolean))
        throw Error("an --add-dir settings file names another host");
      let [o, i] = await Promise.all([Uke(e), Qt("projectSettings") ? 0 : fr()]),
        s =
          i === 0
            ? o
            : {
                ...o,
                warnings: [
                  ...o.warnings,
                  {
                    type: "project-scope-suppressed-untrusted",
                    source: `(unlisted)@${Af}`,
                    count: i,
                    warning:
                      "project skill directories on disk were not loaded: the project settings source is off for this process"
                  }
                ]
              },
        u = new Set(Ye({ enabledPlugins: { ...CQ(), ...(Xm().settings?.enabledPlugins ?? {}) } })),
        d = $t().filter((p) => !u.has(p)),
        f = be.some((p) => !Qt(p)) ? s.enabled.filter((p) => p.settings?.agent !== void 0) : [];
      return d.length === 0 && f.length === 0
        ? s
        : {
            ...s,
            errors: [
              ...s.errors,
              ...d.map((p) => ({
                type: "generic-error",
                source: p,
                error: "enabled in a settings file this process did not load"
              })),
              ...f.map((p) => ({
                type: "generic-error",
                source: p.source,
                error: "names a main-thread agent this process did not resolve"
              }))
            ]
          };
    },
    repoEnabledPluginKeys: () => new Set([...$t(), ...Ye(pe("policySettings"))].map(or)),
    settingsToCloud: r
  };
}
async function fr() {
  let e = ae(no() ?? ke(), ".claude", "skills");
  if (e === ae(Le(), "skills")) return 0;
  if (await tCt(e)) return 1;
  return sr(e, { withFileTypes: !0 }).then(
    (n) => F(n, (r) => r.isDirectory() || r.isSymbolicLink()),
    (n) => (["ENOENT", "ENOTDIR"].includes(E(n) ?? "") ? 0 : 1)
  );
}
function pr() {
  return (
    Xm().settings?.agent !== void 0 ||
    be.flatMap((e) => Je(e).map(we)).some((e) => e?.agent !== void 0)
  );
}
var be = Is.filter((e) => e !== "policySettings" && Tf.has(e));
function gr() {
  let e = ae(Le(), "skills");
  return { own: [e, ae(Le(), "commands"), zjt()], synced: ae(e, zG) };
}
function hr(e, n) {
  return e !== void 0 && !Nt(n.synced, e) && n.own.some((r) => Nt(r, e));
}
function Nt(e, n) {
  let r = lr(e, n);
  return r !== "" && r.split(ur)[0] !== ".." && !ar(r);
}
function Je(e) {
  return [ln(e), e === "localSettings" ? Fh() : void 0].filter((n) => n !== void 0);
}
function Xe() {
  return Ol().flatMap((e) =>
    ["settings.json", "settings.local.json"].map((n) => ae(e, ".claude", n))
  );
}
function we(e) {
  let { settings: n, errors: r } = zt(e);
  if (Ve(r)) throw Error("a settings file could not be read");
  return n;
}
function zt(e) {
  if (LM(e)) throw Error("a settings file names another host");
  return aE(e);
}
function $t() {
  return [...be.flatMap((n) => Je(n).map(we)), ...Xe().map(we)].flatMap(Ye);
}
function Ye(e) {
  return Object.entries(e?.enabledPlugins ?? {})
    .filter(([, n]) => n !== !1)
    .map(([n]) => n);
}
async function Vt(e) {
  if (
    !(await Promise.resolve()
      .then(e.settingsToCloud)
      .catch(() => !1))
  )
    return z;
  let n = e.sources.map((u) => {
      try {
        return { read: !0, hooks: e.hooksOf(u) };
      } catch {
        return { read: !1 };
      }
    }),
    r;
  try {
    r = e.sourcesIncomplete();
  } catch {
    r = !0;
  }
  let o;
  try {
    o = e.processGuard();
  } catch {
    o = z;
  }
  let i;
  try {
    i = await e.loadPlugins();
  } catch {
    i = null;
  }
  let s;
  try {
    s = e.repoEnabledPluginKeys?.();
  } catch {
    s = void 0;
  }
  return cr({
    sources: n,
    sourcesIncomplete: r,
    processGuard: o,
    plugins: i,
    repoEnabledPluginKeys: s
  });
}
async function Xt() {
  er();
  let e = ZE("userSettings"),
    n = pe("userSettings");
  return e.some(yr) || (n === null && (await _r(ln("userSettings"))))
    ? { kind: "broken" }
    : { kind: "sendable", settings: n ?? {}, hasLostAnAllowEntry: e.some(Yt) };
}
function yr(e) {
  return (
    e.severity !== "warning" ||
    e.path === "permissions" ||
    (e.path.startsWith("permissions.") && !Yt(e))
  );
}
function Yt({ path: e }) {
  return e.startsWith("permissions.allow");
}
async function _r(e) {
  try {
    return e !== void 0 && (await ie().lstat(e)).isSymbolicLink();
  } catch {
    return !1;
  }
}
var Sr = 3,
  br = 0;
async function cho({
  signal: e,
  storageV5: n,
  sessionPreToolUse: r = () => {
    return;
  },
  launchConsent: o,
  now: i = Date.now,
  hookGuardHere: s = () => Vt(Wt(n, r, Pmt(o).enabled))
} = {}) {
  let u = Pmt(o);
  if (!gz(u.enabledNow())) return { kind: "none", reason: "flag_off" };
  let d = i(),
    f = await kr(e, s, o, u).catch((p) => {
      if (Ke(p) || bL(e)) return { kind: "none", reason: "aborted" };
      return (l(p), { kind: "none", reason: "failed" });
    });
  return (Jt(f, i() - d), f);
}
async function kr(e, n, r, o) {
  if (!yMe(r)) return { kind: "none", reason: "no_consent" };
  if (!Ro().includes("userSettings")) return { kind: "none", reason: "user_settings_disabled" };
  let i = Le(),
    s = await Xt(),
    u = s.kind === "sendable" ? s : null,
    d = non(),
    [f, p] = await Promise.all([
      xt({
        configHome: i,
        isUserSettingsFileSendable: u !== null,
        readRules: d,
        createFilter: XPr,
        signal: e,
        settingsToCloud: o.enabled
      }),
      n().catch(() => ({ covers: "all" }))
    ]);
  if (
    (a("tengu_home_seed_hook_guard", {
      kind: b(p.covers === "all" ? "all" : p.matchers.length > 0 ? "matchers" : "none"),
      matcher_count: p.covers === "all" ? 0 : p.matchers.length,
      allow_entry_lost_at_parse: u?.hasLostAnAllowEntry ?? !1
    }),
    bL(e) || (!f.ok && f.reason === "aborted"))
  )
    return { kind: "none", reason: "aborted" };
  if (!f.ok)
    return f.reason === "flag_off"
      ? { kind: "none", reason: "flag_off" }
      : {
          kind: "none",
          reason: "home_unvettable",
          cause: f.reason === "too_many_links" ? f.reason : "alias_unreadable",
          configHome: i
        };
  let g = V$n(u?.settings ?? null, {
    preToolUseHookActiveHere: Kt(p),
    hasLostAnAllowEntryAtParse: u?.hasLostAnAllowEntry ?? !1,
    settingsToCloud: o.enabledNow
  });
  return wr({
    inventory: f.inventory,
    settings: g,
    configHome: i,
    unreadableSettingsFiles: (d.unreadableSettingsFiles ?? []).map(xut),
    writtenAtMs: br
  });
}
function wr({
  inventory: e,
  settings: n,
  configHome: r,
  unreadableSettingsFiles: o,
  writtenAtMs: i
}) {
  let s = n.document,
    u = Hr(e, n),
    d = {
      summary: u,
      leftBehind: e.leftBehind,
      unreadable: e.summary.unreadable,
      settings: s === null ? n.reason : "sent",
      configHome: r
    };
  if (e.summary.rulesUnreadable)
    return {
      kind: "empty",
      reason: "rules_unreadable",
      unreadableSettingsFiles: o,
      ...d,
      settings: s === null ? n.reason : "nothing_to_send"
    };
  if (e.entries.length === 0 && s === null)
    return { kind: "empty", reason: "nothing_to_send", ...d };
  return {
    kind: "ready",
    pack: zMt({
      generation: 1,
      writtenAtMs: i,
      files: e.entries.map((p) => cAs(p.path, p.content)),
      settings: s,
      summary: u
    }),
    description: Rr(e, s),
    ...d
  };
}
function Rr(e, n) {
  return {
    claudeMd: e.entries.some((r) => r.kind === "claude_md"),
    rules: F(e.entries, (r) => r.kind === "rule"),
    outputStyles: F(e.entries, (r) => r.kind === "output_style"),
    inlinedImports: e.summary.inlinedImports,
    settingsKeys: n === null ? [] : vr(n),
    permissionRules:
      (n?.permissions?.allow?.length ?? 0) +
      (n?.permissions?.deny?.length ?? 0) +
      (n?.permissions?.ask?.length ?? 0)
  };
}
function vr(e) {
  return Object.keys(qt).filter((n) => e[n] !== void 0);
}
function Hr(e, n) {
  let { counts: r } = n;
  return {
    withheldSensitive: e.summary.withheldSensitive,
    withheldReadDenied: e.summary.withheldReadDenied,
    rulesUnreadable: e.summary.rulesUnreadable,
    includesNotSent: e.summary.includesNotSent,
    symlinksNotSent: e.summary.symlinksNotSent,
    notDestinations: e.summary.notDestinations,
    overCap: e.summary.overCap,
    unreadable: e.summary.unreadable,
    settingsKeysWithheld: r.withheldKeys,
    credentialTextsWithheld: r.withheldCredentialTexts,
    rulesCoveringDeviceTools: r.rules.coveringDeviceTools,
    droppedRules: {
      rooted: r.rules.droppedRooted,
      device: r.rules.droppedDevice,
      invalid: r.rules.droppedInvalid,
      guarded: r.rules.droppedGuarded,
      overCap: r.rules.droppedOverCap,
      credential: r.rules.droppedCredential,
      credentialRestrictions: r.rules.droppedCredentialRestrictions
    }
  };
}
var ekr = { kind: "none", reason: "self_hosted_runner" };
function uho() {
  Jt(ekr, 0);
}
function Jt(e, n) {
  if (e.kind === "none") {
    a("tengu_home_seed_plan", {
      outcome: c(e.reason),
      cause: e.reason === "home_unvettable" ? c(e.cause) : void 0,
      duration_ms: n
    });
    return;
  }
  let { summary: r } = e,
    o = nkr(e.leftBehind),
    i = {
      settings_keys_withheld: r.settingsKeysWithheld,
      credential_texts_withheld: r.credentialTextsWithheld,
      rules_dropped_rooted: r.droppedRules.rooted,
      rules_dropped_device: r.droppedRules.device,
      rules_dropped_invalid: r.droppedRules.invalid,
      rules_dropped_over_cap: r.droppedRules.overCap,
      rules_dropped_credential: r.droppedRules.credential,
      restrictions_dropped_credential: r.droppedRules.credentialRestrictions,
      rules_dropped_guarded: r.droppedRules.guarded,
      rules_covering_device_tools: r.rulesCoveringDeviceTools,
      withheld_sensitive: r.withheldSensitive,
      withheld_read_denied: r.withheldReadDenied,
      withheld_credential: o.others + (o.claudeMd ? 1 : 0),
      claude_md_withheld_credential: o.claudeMd,
      includes_not_sent: r.includesNotSent,
      symlinks_not_sent: r.symlinksNotSent,
      claude_md_link_not_sent: e.leftBehind.some(
        (u) => u.reason === "symlink_not_sent" && u.path === wte
      ),
      not_destinations: r.notDestinations,
      over_cap: r.overCap,
      unreadable: e.unreadable,
      duration_ms: n
    };
  if (e.kind === "empty") {
    a("tengu_home_seed_plan", {
      outcome: c(e.reason),
      settings: c(e.settings),
      settings_files_in_error:
        e.reason === "rules_unreadable" ? e.unreadableSettingsFiles.length : void 0,
      ...i
    });
    return;
  }
  let { description: s } = e;
  a("tengu_home_seed_plan", {
    outcome: b("ready"),
    settings: c(e.settings),
    files: s.rules + s.outputStyles + (s.claudeMd ? 1 : 0),
    pack_bytes: e.pack.length,
    settings_keys: s.settingsKeys.length,
    rules_kept: s.permissionRules,
    includes_inlined: s.inlinedImports,
    ...i
  });
}
var qt = {
  language: "language",
  outputStyle: "output style",
  attribution: "attribution",
  includeCoAuthoredBy: "co-author preference",
  includeGitInstructions: "git-instructions preference",
  alwaysThinkingEnabled: "thinking preference",
  showThinkingSummaries: "thinking-summary preference",
  permissions: "permission rules"
};
function fho(e) {
  let n = [
    ...(e.claudeMd ? ["CLAUDE.md"] : []),
    ...qe(e.rules, "rules file"),
    ...qe(e.outputStyles, "output-style file"),
    ...qe(e.permissionRules, "permission rule"),
    ...e.settingsKeys.flatMap((r) => (r === "permissions" ? [] : [qt[r]])),
    ...(e.inlinedImports > 0
      ? [`${e.inlinedImports} @${I(e.inlinedImports, "import")} folded in`]
      : [])
  ];
  return n.length === 0
    ? "Sent settings from this machine to the cloud session: only the narrowed permission allow list"
    : `Sent settings from this machine to the cloud session: ${n.join(", ")}`;
}
function qe(e, n) {
  return e > 0 ? [`${e} ${I(e, n)}`] : [];
}
var W$n = "Your deny and ask rules are not in force in the cloud session",
  G$n = "The cloud session's settings stay as they were",
  z$n = "Your deny and ask rules may not be in force in the cloud session";
function tkr(
  { summary: e, leftBehind: n, unreadable: r, settings: o, configHome: i },
  { launch: s, settingsFile: u }
) {
  let d = os(i),
    f = [
      V(
        n,
        "symlink_not_sent",
        e.symlinksNotSent,
        (m) => `${m} linked ${I(m, "file")} (links are not followed)`
      ),
      V(
        n,
        "include_not_sent",
        e.includesNotSent,
        (m) => `${m} @${I(m, "import")} outside ${d} or not markdown`
      ),
      V(n, "sensitive", e.withheldSensitive, (m) => `${m} ${I(m, "file")} named like credentials`),
      V(
        n,
        "read_denied",
        e.withheldReadDenied,
        (m) => `${m} ${I(m, "file")} your Read rules or sandbox settings cover`
      ),
      V(
        n,
        "not_destination",
        e.notDestinations,
        (m) =>
          `${m} ${I(m, "file")} with ${I(m, "a name", "names")} the cloud session cannot create`
      ),
      V(
        n,
        "over_cap",
        e.overCap,
        (m) =>
          `${m} ${I(m, "file")} over a limit of ${v8e} files, ${en(Iae)} per file or ${en(uZt)} in total`
      ),
      V(n, "unreadable", r, (m) => `${m} ${I(m, "file")} that changed while being read`),
      V(
        n,
        "undefusable",
        F(n, (m) => m.reason === "undefusable"),
        (m) => `${m} ${I(m, "file")} whose @imports could not be made safe`
      ),
      V(
        n,
        "credential",
        F(n, (m) => m.reason === "credential"),
        (m) => `${m} ${I(m, "file")} ${Qe(m)}`
      )
    ].flatMap((m) => (m === null ? [] : [m])),
    p =
      e.droppedRules.rooted +
      e.droppedRules.device +
      e.droppedRules.invalid +
      e.droppedRules.overCap,
    g = e.droppedRules.credentialRestrictions,
    S = e.droppedRules.credential - g,
    y = e.credentialTextsWithheld,
    T = e.droppedRules.guarded,
    v =
      o === "schema_rejected"
        ? "failed validation"
        : o === "settings_too_large"
          ? "is over the size limit"
          : o === "settings_unreadable"
            ? "could not be read"
            : null,
    P = [
      ...(e.settingsKeysWithheld > 0
        ? [
            `${e.settingsKeysWithheld} ${I(e.settingsKeysWithheld, "key")} (hooks, env and the like are never sent)`
          ]
        : []),
      ...(p > 0
        ? [
            `${p} permission ${I(p, "rule")} that ${I(p, "names", "name")} a path or device tool on this machine or could not be read`
          ]
        : []),
      ...(S > 0 ? [`${S} allow ${I(S, "rule")} ${Qe(S)}`] : []),
      ...(y > 0 ? [`${y} ${I(y, "text")} (attribution, language, output style) ${Qe(y)}`] : []),
      ...(T > 0
        ? [
            `${T} allow ${I(T, "rule")} that stayed because a hook, a plugin or a rule that was not sent may guard ${I(T, "it", "them")}`
          ]
        : [])
    ],
    M = f.length > 0 ? [`Not sent from ${d}: ${f.join("; ")}`] : [];
  if (v !== null)
    return [
      s === "reopen_sent_nothing"
        ? `${G$n}: ${u} ${v}`
        : `${W$n}: ${u} ${v}; ${o === "settings_too_large" ? "make it smaller" : "fix it"} and ${s === "reopen_sent" ? "re-open the session" : "start a new cloud session"}`,
      ...M
    ].join(". ");
  let A = P.length > 0 ? [`Settings kept on this machine: ${P.join("; ")}`] : [],
    h =
      g > 0
        ? [
            `${g} deny or ask ${I(g, "rule is", "rules are")} not in force in the cloud session: ${I(g, "it looks like it holds", "they look like they hold")} a credential (reword ${I(g, "it", "them")} in ${u})`,
            ...A,
            ...M
          ]
        : [...M, ...A];
  return h.length === 0 ? null : h.join(". ");
}
function nkr(e) {
  let n = e.filter((r) => r.reason === "credential").map((r) => r.path);
  return { claudeMd: n.includes(wte), others: F(n, (r) => r !== wte) };
}
function pho(e) {
  let n = e.filter((o) => o.reason === "symlink_not_sent").map((o) => o.path),
    r = [...n.filter((o) => o === wte), ...n.filter((o) => o !== wte)]
      .slice(0, 2)
      .map((o) => (o === XIe || o === E8e ? `${o}/` : Cn(o)));
  return { names: r, more: n.length - r.length };
}
function Qe(e) {
  return `that ${I(e, "looks", "look")} like ${I(e, "it holds", "they hold")} a credential`;
}
function V(e, n, r, o) {
  if (r === 0) return null;
  let i = e
      .filter((f) => f.reason === n)
      .map((f) => Cn(f.path) + (f.line === void 0 ? "" : `:${f.line}`)),
    s = i.slice(0, Sr),
    u = i.length - s.length,
    d = s.length === 0 ? "" : ` (${s.join(", ")}${u > 0 ? ` and ${u} more` : ""})`;
  return o(r) + d;
}
export { cho, ekr, uho, fho, W$n, G$n, z$n, tkr, nkr, pho };

//# sourceMappingURL=chunk-798ep0ad.js.map
