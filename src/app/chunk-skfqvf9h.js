// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { R, d, E, G } from "./chunk-fs43t96t.js";
import { Qi } from "./chunk-h5gbmqm1.js";
import { Wu, t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { CM, zEn, V$, It } from "./chunk-dc0nzty2.js";
import { i } from "./chunk-cj37hmns.js";
import { ws, gst } from "./chunk-v4kbwz0z.js";
import { _n, Rs } from "./chunk-cjnzngfc.js";
import { ct } from "./chunk-qmmh8tq2.js";
import { XVt } from "./chunk-7c3thgax.js";
import { sp, nGr, Zd, b7, qSt, sGt, PU, oGo, sGo } from "./chunk-65jwz3rm.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { constants as K } from "fs";
import { lstat as Me, open as he, realpath as ne, stat as At } from "fs/promises";
import {
  basename as ye,
  dirname as M,
  isAbsolute as St,
  join as F,
  normalize as re,
  parse as we,
  relative as Fe,
  resolve as We,
  sep as Le
} from "path";
import { lstat as C, readdir as Oe, readlink as Ne, realpath as ce, stat as le } from "fs/promises";
import {
  dirname as yt,
  isAbsolute as ue,
  join as x,
  normalize as Q,
  relative as bt,
  resolve as ee,
  sep as Z
} from "path";
var Re = 65536,
  vt = 4096,
  Et = (e, n) => ct(It(), e, n);
async function mht(e, { dotGitLink: n = "refuse", run: o = Et } = {}) {
  let r = (p, v) => (
      t(`Could not vet the worktree registrations of ${e}: ${v}`, { level: "warn" }),
      { skipped: p, why: v }
    ),
    s = O() === "windows",
    a = async (p) => {
      let v = await Ne(p).then(
        () => "link",
        (b) => (E(b) === "EINVAL" ? "clear" : G(b) ? "missing" : "unknown")
      );
      if (v !== "missing") return v;
      return (await sGo(p)) ? "missing" : "unknown";
    },
    l = x(e, ".git"),
    u = await PU(l, e),
    c,
    w;
  if (u === "clear") {
    let [p, v] = await Promise.all([
      C(l).catch(() => null),
      le(e).then(
        (b) => b,
        (b) => (G(b) ? null : void 0)
      )
    ]);
    if (v === null) return r("gone", "the repository root is gone");
    if (v === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (p === null) return r("unvettable", ".git vanished");
    if (!p.isDirectory()) return r("pointer", ".git is not a real directory (a pointer file)");
    ((c = l), (w = [p.uid, v.uid]));
  } else if (u === "missing") {
    let [p, v, b] = await Promise.all([
      C(x(e, "HEAD")).catch(() => null),
      C(x(e, "objects")).catch(() => null),
      le(e).then(
        (k) => k,
        (k) => (G(k) ? null : void 0)
      )
    ]);
    if (b === null) return r("gone", "the repository root is gone");
    if (b === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (p === null || !p.isFile() || v === null || !v.isDirectory())
      return r("not-a-repository", "no .git, and the root is not a bare git directory");
    ((c = e), (w = [b.uid]));
  } else if (u === "link" && n === "vet") {
    let p = await fe(l, e);
    if ("refused" in p) return r("unvettable", `.git is a link whose text ${p.refused}`);
    let v = p.text,
      b = Zd(ee(e, v)),
      k = Zd(Q(e));
    if ((await PU(b, b.startsWith(k + Z) ? k : void 0)) !== "clear")
      return r(
        "unvettable",
        ".git is a link whose target is missing, goes through another link, or cannot be probed"
      );
    let [P, D, z, U] = await Promise.all([
      C(b).catch(() => null),
      C(x(b, "HEAD")).catch(() => null),
      C(x(b, "objects")).catch(() => null),
      le(e).then(
        (B) => B,
        (B) => (G(B) ? null : void 0)
      )
    ]);
    if (U === null) return r("gone", "the repository root is gone");
    if (U === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (
      P === null ||
      !P.isDirectory() ||
      D === null ||
      !D.isFile() ||
      z === null ||
      !z.isDirectory()
    )
      return r("unvettable", ".git is a link to something other than a git directory");
    ((c = b), (w = [P.uid, U.uid]));
  } else return r("unvettable", ".git is a link, a mount point, or cannot be probed");
  if ((await a(x(c, "commondir"))) !== "missing")
    return r("unvettable", `${c}/commondir exists, which git never writes into a main git dir`);
  let h = s || !w.every(_t) ? await Tt(e, c, o) : null;
  if (h !== null) return r("unvettable", h);
  let g = x(c, "worktrees"),
    y = await PU(g, e),
    T = new Map(),
    m = new Map();
  if (y === "missing") return { gitDir: c, vetted: T, refused: m };
  let f = y === "clear" ? await Oe(g, { encoding: "buffer" }).catch(() => null) : null;
  if (f === null) return r("unvettable", `${g} is a link or cannot be read`);
  for (let p of f) {
    let v = xe(p);
    if (v === null) {
      let A = x(g, `<${p.toString("hex")}>`),
        P = "has a name this check and git would read differently";
      (m.set(A, "has a name this check and git would read differently"),
        t(
          `Refused worktree admin entry ${A}: has a name this check and git would read differently`,
          { level: "warn" }
        ));
      continue;
    }
    let b = x(g, v),
      k = await $t(b, e, a, s);
    if (k === "missing") continue;
    if (k === null) continue;
    if (typeof k === "object") T.set(b, k.worktree);
    else (m.set(b, k), t(`Refused worktree admin entry ${b}: ${k}`, { level: "warn" }));
  }
  return { gitDir: c, vetted: T, refused: m };
}
async function te(e) {
  for (let n of ["objects", "config", "packed-refs", "hooks", "worktrees"])
    if ((await e(n).catch(() => "unchecked")) !== null) return !0;
  return !1;
}
async function $t(e, n, o, r) {
  let s = await PU(e, n);
  if (s === "missing") return "missing";
  if (s !== "clear") return "is a link, a mount point, or cannot be probed";
  let a = await C(e).then(
    (m) => m,
    (m) => (G(m) ? null : void 0)
  );
  if (a === void 0) return "cannot be probed";
  if (a === null) return "missing";
  if (a.isSymbolicLink()) return "became a link";
  if (!a.isDirectory()) return r ? "is not a directory" : null;
  let l = await Pt(e, o, r ? 1 / 0 : 1);
  if (l !== null) return l;
  if (
    await te((m) =>
      C(x(e, m)).catch((f) => {
        if (G(f)) return null;
        throw f;
      })
    )
  )
    return "holds a git directory's own files (objects, config, packed-refs, hooks or worktrees), or could not be checked for them";
  let u = x(e, "gitdir"),
    c = await C(u).then(
      (m) => m,
      (m) => (G(m) ? null : void 0)
    );
  if (c === void 0) return "gitdir cannot be probed";
  if (c === null)
    return (await o(u)) === "missing"
      ? { worktree: null }
      : "gitdir is absent to lstat but not to the probe (a shortcut beside it, or a race)";
  if (!c.isFile()) return "gitdir is not a regular file";
  if (c.size > Re) return "gitdir is larger than any git writes";
  let w = await CM(u, Re, { noFollow: !0 }).catch(() => null);
  if (w === null) return "gitdir cannot be read";
  let h = w.replace(/[\r\n]+$/, "");
  if (h === "") return { worktree: null };
  let g = de(h, n, r);
  if (g !== null) return g;
  let y, T;
  if (ue(h)) {
    let m = Q(h),
      f = Zd(Q(n));
    y = [m];
    let p = (k, A) => (r && A === 0 ? k.toLowerCase() : k),
      v = m.split(Z),
      b = f.split(Z);
    T =
      v.length > b.length && b.every((k, A) => p(k, A) === p(v[A] ?? "", A))
        ? v.slice(0, b.length).join(Z)
        : void 0;
  } else {
    let m = await ce(n).catch(() => null);
    if (m === null) return "the repository root does not resolve";
    T = m;
    let f = Zd(Q(n)),
      p = e.startsWith(f + Z) ? x(m, bt(n, e)) : e;
    y = [ee(p, h), ee(m, h)];
  }
  for (let m of y) {
    if (Qi(m, T ?? n)) return "gitdir names another host";
    let f = await PU(yt(m), T);
    if (f === "link" || f === "unknown")
      return "gitdir walks through a link, or a component cannot be probed";
    if (f === "clear") {
      let p = await o(m);
      if (p === "link" || p === "unknown")
        return "gitdir names a link, or one that cannot be probed";
    }
  }
  return { worktree: y[0] ?? null };
}
async function Tt(e, n, o) {
  let r = {};
  for (let c of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let w = process.env[c];
    if (w !== void 0) r[c] = w;
  }
  let s = await o([..._n, "-C", e, "rev-parse", "--git-dir"], {
    cwd: e,
    env: Rs({ ...r, ...XVt() }),
    timeout: 1e4
  }).catch(
    (c) => (
      t(`Could not run git to check the ownership of ${n}: ${d(c)}`, { level: "error" }),
      null
    )
  );
  if (s === null) return `git could not be run to check the ownership of ${n}`;
  if (s.code !== 0)
    return `git's ownership check for ${n} failed (exit ${s.code}); if another user owns it, it needs a safe.directory entry`;
  let a = s.stdout.trim();
  if (a === "") return `git gave no answer when checking the ownership of ${n}`;
  let [l, u] = await Promise.all([ce(ee(e, a)).catch(() => null), ce(n).catch(() => null)]);
  return l !== null && u !== null && Zd(l) === Zd(u)
    ? null
    : `git's ownership check did not name ${n}`;
}
function _t(e) {
  let n = process.geteuid?.();
  if (n === void 0 || e === n) return !0;
  if (n !== 0) return !1;
  let o = i.SUDO_UID;
  return e === 0 || (o !== void 0 && e === o);
}
function de(e, n, o) {
  if (e.includes("\uFFFD") || /\p{Cc}/u.test(e) || /^[A-Za-z]:(?![\\/])/.test(e))
    return "gitdir holds bytes git would read differently";
  let r = o ? /[\\/]+/ : /\/+/;
  if (o && e.split(r).some((s) => s !== "." && s !== ".." && /[. ]$/.test(s)))
    return "gitdir holds a component ending in a dot or space";
  if (!ue(e)) {
    let s = e.split(r),
      a = s.findIndex((u) => u !== "..");
    return (a < 0 ? [] : s.slice(a)).some((u) => u === "" || u === "." || u === "..")
      ? "gitdir is a relative value git would not write"
      : null;
  }
  if (e.split(r).some((s) => s === "." || s === ".."))
    return "gitdir holds a dot segment git would not write";
  if (!sGt(e)) return "gitdir is rooted without a drive or a host";
  if (Qi(e, n)) return "gitdir names another host";
  return r.test(e.slice(-1)) ? "gitdir ends in a separator git would not write" : null;
}
async function fe(e, n) {
  let o = await Ne(e, { encoding: "buffer" }).then(
    (a) => {
      let l = a.toString("utf-8");
      return l.includes("\x00") || !Buffer.from(l, "utf-8").equals(a) ? null : l;
    },
    () => null
  );
  if (o === null) return { refused: "cannot be read" };
  if (/[\p{Cc}\uFFFD]/u.test(o)) return { refused: "holds a control character or U+FFFD" };
  if (Qi(o, n)) return { refused: "names another host" };
  let r = O() === "windows",
    s = r ? /[\\/]+/ : /\/+/;
  if (
    o === "" ||
    s.test(o.slice(-1)) ||
    o.split(s).some((a) => a === "." || a === "..") ||
    (ue(o) && !sGt(o)) ||
    (r && /^[A-Za-z]:(?![\\/])/.test(o))
  )
    return {
      refused:
        "is empty, ends in a separator, holds a dot segment, or is rooted or drive-relative in a way git would read differently"
    };
  return { text: o };
}
function xe(e) {
  let n = e.toString("utf8");
  return !n.includes("\uFFFD") &&
    !/\p{Cc}/u.test(n) &&
    !(O() === "windows" && /[. ]$/.test(n)) &&
    Buffer.from(n, "utf8").equals(e)
    ? n
    : null;
}
async function Pt(e, n, o) {
  let r = O() === "windows",
    s = vt,
    a = async (l, u) => {
      let c = await Oe(l, { encoding: "buffer" }).catch(() => null);
      if (c === null) return `${l} cannot be read`;
      for (let w of c) {
        if (--s < 0) return "holds more files than any entry git writes";
        let h = xe(w);
        if (h === null) return `${l} holds a name that is not valid UTF-8`;
        if (r && h.toLowerCase().endsWith(".lnk"))
          return `${x(l, h)} is named as a shortcut, which git never writes here`;
        let g = x(l, h),
          y = await C(g).catch(() => null);
        if (y === null) return `${g} cannot be probed`;
        let T = r && y.isDirectory() ? await PU(g, l) : await n(g);
        if (T === "link" || T === "unknown") return `${g} is a link or cannot be probed`;
        if (y.isDirectory() && u > 1) {
          let m = await a(g, u - 1);
          if (m !== null) return m;
        }
      }
      return null;
    };
  return a(e, o);
}
var He = 65536,
  je = 65536,
  me = ve({ afterMatch: null, beforeMutation: null }, (e) => {
    ((e.afterMatch = null), (e.beforeMutation = null));
  });
async function Aan(e) {
  let n = await mht(e, { dotGitLink: "vet" });
  if ("skipped" in n) return null;
  let o = await nGe(e, n.gitDir);
  if ("refused" in o)
    return (
      t(`Could not vet the worktree registrations of ${e}: ${o.refused}`, { level: "warn" }),
      null
    );
  return o.gitDir;
}
async function nGe(e, n) {
  let o = q(e),
    r = q(n);
  if (r === o)
    return (await Me(F(o, ".git")).then(
      () => !0,
      (l) => !G(l)
    ))
      ? {
          refused: `the repository's .git is a link to its own root, ${o}, which cannot be used as a git directory safely`
        }
      : Ge(o, "");
  if (r === q(F(e, ".git"))) return Ge(o, ".git");
  let s = await Rt(r, o);
  return s === "elsewhere"
    ? { gitDir: r }
    : {
        refused:
          s === "inside"
            ? `the repository's .git is a link to ${r}, inside its own working tree, which cannot be opened safely`
            : `the repository's .git is a link to ${r}, which could not be checked against the working tree`
      };
}
async function Ge(e, n) {
  let o = await ne(e).catch(() => null);
  return o === null ? { refused: `${e} could not be resolved` } : { gitDir: F(o, n) };
}
function q(e) {
  let n = re(e);
  return we(n).root === n ? n : Zd(n);
}
async function Rt(e, n) {
  if (be(b7(e), b7(n))) return "inside";
  let o = await At(n, { bigint: !0 }).catch(() => null);
  if (o === null) return "unknown";
  for (let r = e; ; r = M(r)) {
    let s = await Me(r, { bigint: !0 }).catch(() => null);
    if (s === null) return "unknown";
    if (s.dev === o.dev && s.ino === o.ino) return "inside";
    if (M(r) === r) return "elsewhere";
  }
}
async function Ue(e) {
  let n = q(e),
    o = await ne(n).catch(() => null);
  return { root: n, tops: [n, o].filter((r) => r !== null) };
}
async function Ot(e, n) {
  let o = new Set(),
    r = [],
    { root: s, tops: a } = await Ue(n);
  for (let l of e) {
    let u = Zd(re(l));
    if ((o.add(F(u, ".git")), Qi(u, s))) continue;
    let c = M(u),
      w = await Nt(c, Ye(c, a));
    if ("refused" in w) {
      r.push(`${u}: ${w.refused}`);
      continue;
    }
    o.add(F(w.resolved, ye(u), ".git"));
  }
  return { gitdirs: o, unresolved: r, tops: a };
}
var Ce = 16;
async function Nt(e, n) {
  let o = e,
    r = n;
  for (let s = 0; s <= Ce; s++) {
    let a = o === r ? { verdict: "clear", at: void 0 } : await oGo(o, r);
    if (a.verdict === "clear" || a.verdict === "missing") {
      if (r === void 0) return { resolved: o };
      let c = await ne(r).catch(() => null);
      return c === null ? { refused: `${r} could not be resolved` } : { resolved: F(c, Fe(r, o)) };
    }
    if (a.verdict !== "link" || a.at === void 0)
      return { refused: `a component of ${o} cannot be probed` };
    let l = await fe(a.at, M(a.at));
    if ("refused" in l) return { refused: `the text of the link ${a.at} ${l.refused}` };
    let u = We(M(a.at), l.text);
    if (((o = F(u, Fe(a.at, o))), r !== void 0 && !be(u, r))) r = void 0;
  }
  return { refused: `more than ${Ce} links lead to ${e}` };
}
function be(e, n) {
  return e === n || e.startsWith(n.endsWith(Le) ? n : n + Le);
}
function Ke(e, n) {
  let o = e.replace(/[\r\n]+$/, "");
  if (o === "" || de(o, n, O() === "windows") !== null || Qi(o, n)) return null;
  let r = re(St(o) ? o : We(n, o));
  return ye(r) === ".git" && sGt(r) ? r : null;
}
function Ye(e, n) {
  let o;
  for (let r of n)
    for (let s = r; ; s = M(s)) {
      if (be(e, s)) {
        if (o === void 0 || s.length > o.length) o = s;
        break;
      }
      if (M(s) === s) break;
    }
  return o;
}
async function Ve(e, n, o) {
  let r = o?.tops ?? (await Ue(n.repoSpelled)).tops;
  return (await PU(e, Ye(M(e), r))) === "missing";
}
function ze(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\\/\p{Cc}\uFFFD]/u.test(e);
}
function Xe(e) {
  let n = new Set();
  for (let o of e) {
    let r = ye(Zd(re(o)));
    for (let s of [xt(r), r]) {
      if (s === "") continue;
      n.add(s);
      for (let a = 1; a <= 99; a++) n.add(`${s}${a}`);
    }
  }
  return [...n];
}
function xt(e) {
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let r = e[o],
      s = r.charCodeAt(0);
    if (r === "." && (o === 0 || e[o - 1] === ".")) n += o === 0 ? "-" : "";
    else if (r === "{" && e[o - 1] === "@") n += "-";
    else if (s < 32 || s === 127 || " :?[\\^~*".includes(r)) n += "-";
    else n += r;
  }
  while (n.endsWith(".lock")) n = n.slice(0, -5);
  return n;
}
async function Ft() {
  let [e, n] = await Promise.all([import("./chunk-8et31asy.js"), import("./chunk-sdddg3wm.js")]);
  return { ...e, host: n.createDeviceTreeHost() };
}
async function Ze(e, n) {
  let o = await Ft().catch((u) => ({ failed: d(u) }));
  if ("failed" in o) return { unavailable: `its module did not load: ${o.failed}`, modules: null };
  let r = await ne(q(n)).catch(() => null),
    s = r !== null && we(r).root !== r && e === F(r, ".git"),
    a = s ? r : e,
    l = await (
      s || we(e).root === e
        ? o.openTreeAnchor(o.host, { gitRoot: a, realRoot: a })
        : o.openTreeAnchorAtName(o.host, e)
    ).catch((u) => ({ unavailable: d(u) }));
  if ("unavailable" in l) return { unavailable: l.unavailable, modules: o };
  if (!s) return l;
  try {
    let u = await l.anchorBeneath(".git"),
      c = await u.lstat("").catch(() => null);
    if (c === null || c.ino === 0n)
      return (
        await u.close().catch(() => {}),
        {
          refused:
            c === null
              ? `${e}: its file id could not be read once it was opened`
              : `${e} is on a volume that reports no file ids`
        }
      );
    return u;
  } catch (u) {
    return { refused: `could not open ${e} from ${a} without following a link: ${d(u)}` };
  } finally {
    await l.close().catch(() => {});
  }
}
async function qe(e, n, o) {
  let r = await e.open(n, K.O_RDONLY | K.O_NONBLOCK).catch((s) => E(s) ?? "EIO");
  if (typeof r === "string") {
    if (r !== "ENOENT") return { unread: ke(r) };
    let s = await e.lstat(n).then(
      () => "present",
      (a) => E(a) ?? "EIO"
    );
    return s === "ENOENT"
      ? "absent"
      : { unread: s === "present" ? "could not be opened where the held folder has it" : ke(s) };
  }
  try {
    let s = await r.stat({ bigint: !0 });
    if (e.backend === "darwin_at") {
      let l = await e.lstat(n);
      if (s.dev !== l.dev || s.ino !== l.ino) return { unread: "was replaced as it was opened" };
    }
    if (!s.isFile()) return { unread: "is not a regular file" };
    let a = await pe(r, o);
    return a === null ? { unread: "is larger than git writes" } : { text: a };
  } catch {
    return { unread: "could not be read" };
  } finally {
    await r.close().catch(() => {});
  }
}
async function pe(e, n) {
  let o = Buffer.alloc(n + 1),
    r = 0;
  for (;;) {
    let { bytesRead: s } = await e.read(o, r, o.length - r, r);
    if (s === 0) break;
    if (((r += s), r > n)) return null;
  }
  return o.subarray(0, r).toString("utf-8");
}
function Ee(e) {
  return typeof e.worktreePath === "string" ? [e.worktreePath] : e.worktreePath;
}
async function $e(e) {
  return "worktreePath" in e ? Ot(Ee(e), e.repoSpelled) : null;
}
function L(e, n) {
  (e.unchecked++, e.kinds.add(n));
}
function ke(e) {
  return e === "ELOOP"
    ? "is a link"
    : e === "EISDIR"
      ? "is not a regular file"
      : "could not be opened";
}
function Je(e) {
  return e.replace(/[\r\n]+$/, "") === "";
}
function Te(e, n, o) {
  let r = F(e, "worktrees"),
    { unchecked: s, kinds: a } = o,
    l = [
      ...(n === null || n.unresolved.length === 0
        ? []
        : [
            `a folder on the way to the worktree could not be resolved safely (${n.unresolved.join("; ")}), so a registration recorded under its resolved path could not be matched`
          ]),
      ...(o.guessed
        ? [
            `${r} cannot be listed here without following links, so only the names git would have given this worktree were checked, and a registration under another name may remain`
          ]
        : []),
      ...(s === 0
        ? []
        : [
            o.guessed
              ? `some of the names tried in ${r} could not be checked (${[...a].join(", ")}), so one of them may still register this worktree`
              : `${s === 1 ? "one entry" : `${s} entries`} in ${r} could not be checked (${[...a].join(", ")}), so ${s === 1 ? "it" : "one of them"} may still register this worktree`
          ])
    ];
  return l.length === 0 ? { outcome: "none" } : { unmatched: l.join("; ") };
}
function Qe(e, n) {
  return n === null || qSt(De(e), [...n.gitdirs].map(De));
}
function De(e) {
  return O() === "windows" ? e.replace(/^[a-z](?=:)/, (n) => n.toUpperCase()) : e;
}
async function et(e, n, o, r) {
  let s = { guessed: !1, unchecked: 0, kinds: new Set() },
    a =
      "entryId" in o
        ? [o.entryId]
        : await e.list("worktrees").catch((l) => {
            if (G(l)) return [];
            if (E(l) === "WORKING_LIST_UNSUPPORTED") return ((s.guessed = !0), Xe(Ee(o)));
            throw l;
          });
  for (let l of a) {
    if (!ze(l)) {
      if (!s.guessed) L(s, "an entry name this check cannot read exactly");
      continue;
    }
    let u = `worktrees/${l}`,
      c = await e.lstat(u).catch((y) => (G(y) ? null : void 0));
    if (c === void 0) {
      L(s, "an entry that could not be inspected");
      continue;
    }
    if (c === null || !c.isDirectory()) {
      if (c?.isSymbolicLink()) L(s, "an entry that is a link");
      else if (c !== null && O() === "windows") L(s, "an entry that is not a folder");
      continue;
    }
    let w = await qe(e, `${u}/gitdir`, He);
    if (w === "absent") continue;
    if ("unread" in w) {
      L(s, `a gitdir file that ${w.unread}`);
      continue;
    }
    let h = Ke(w.text, F(n, "worktrees", l));
    if (h === null && !Je(w.text)) L(s, "a gitdir file whose path could not be checked safely");
    if (h === null || !Qe(h, r)) continue;
    let g = await e.lstat(`${u}/locked`).then(
      () => !0,
      (y) => !G(y)
    );
    return {
      entryId: l,
      locked: g,
      recordedGitdir: h,
      rel: u,
      identity: { dev: c.dev, ino: c.ino }
    };
  }
  return s;
}
async function _e(e, n) {
  return Lt(e, n).catch((o) => ({ unavailable: d(o) }));
}
async function Lt(e, n) {
  let o = await Ze(e, n.repoSpelled);
  if ("refused" in o) return { unavailable: o.refused };
  if ("unavailable" in o) return { unavailable: o.unavailable };
  try {
    let r = await $e(n),
      s = await et(o, e, n, r);
    if ("unchecked" in s) {
      let a = Te(e, r, s);
      return "unmatched" in a ? { unavailable: a.unmatched } : null;
    }
    return { entryId: s.entryId, locked: s.locked, recordedGitdir: s.recordedGitdir };
  } finally {
    await o.close().catch(() => {});
  }
}
async function Mne(e, n, o) {
  return Gt(e, n, o).catch((r) => S(e, d(r)));
}
async function Gt(e, n, o) {
  let r = await Ze(e, n.repoSpelled);
  if ("refused" in r) return S(e, r.refused);
  if ("unavailable" in r) {
    let { modules: s } = r;
    return r.unavailable === "no_ffi" && s !== null && s.host.platform() === "macos"
      ? Kt(e, n, o, await s.darwinNoFollowAnyEnforced(s.host))
      : S(e, `this build cannot open files here without following links (${r.unavailable})`);
  }
  try {
    let s = await $e(n),
      a = await et(r, e, n, s);
    if ("unchecked" in a) {
      let c = Te(e, s, a);
      return "unmatched" in c ? S(e, c.unmatched) : c;
    }
    if (!(await Ve(a.recordedGitdir, n, s)))
      return S(
        e,
        `could not confirm the worktree is gone: ${a.recordedGitdir} exists, or a link or unreadable folder is on the way to it`
      );
    await me.afterMatch?.(a.entryId);
    let l = async () => {
      let c = await r.lstat(a.rel).catch(() => null);
      return c !== null && ie(c, a.identity);
    };
    if (!(await l()))
      return S(
        e,
        `worktrees/${a.entryId} changed since it was read, or this volume cannot show it is the same folder`
      );
    if (await Be(r, a.rel)) return S(e, `${tt(a.entryId)}, so nothing in it was removed`);
    if (a.locked) {
      if (!(await Ut(r, a.rel, o.locked))) return S(e, `worktrees/${a.entryId} is locked`);
    }
    if ((await me.beforeMutation?.(a.entryId), await r.unlink(`${a.rel}/gitdir`), !(await l())))
      return { outcome: "dropped", entryId: a.entryId, adminRemoved: !1 };
    if (await Be(r, a.rel))
      return (
        t(
          `Dropped the registration worktrees/${a.entryId} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`,
          { level: "warn" }
        ),
        { outcome: "dropped", entryId: a.entryId, adminRemoved: !1 }
      );
    let u = await Bt(r, a.rel, a.identity);
    return (
      await r.rmdir("worktrees").catch(() => {}),
      { outcome: "dropped", entryId: a.entryId, adminRemoved: u }
    );
  } catch (s) {
    return S(e, d(s));
  } finally {
    await r.close().catch(() => {});
  }
}
async function qJe(e, n, o = { locked: "keep" }) {
  let r = await Aan(e);
  return r === null
    ? S(
        e,
        'the repository could not be vetted (see the "Could not vet the worktree registrations" line above)'
      )
    : Mne(r, { worktreePath: n, repoSpelled: e }, o);
}
function S(e, n) {
  return (
    t(`Left a git worktree registration in ${e} in place: ${n}`, { level: "warn" }),
    { outcome: "kept", reason: n }
  );
}
var Ct = [
    "logs/HEAD",
    "HEAD",
    "ORIG_HEAD",
    "FETCH_HEAD",
    "AUTO_MERGE",
    "MERGE_HEAD",
    "MERGE_MSG",
    "MERGE_RR",
    "MERGE_AUTOSTASH",
    "MERGE_MODE",
    "SQUASH_MSG",
    "COMMIT_EDITMSG",
    "REBASE_HEAD",
    "CHERRY_PICK_HEAD",
    "REVERT_HEAD",
    "BISECT_LOG",
    "BISECT_START",
    "BISECT_TERMS",
    "BISECT_NAMES",
    "BISECT_EXPECTED_REV",
    "BISECT_ANCESTORS_OK",
    "BISECT_RUN",
    "BISECT_FIRST_PARENT",
    "BISECT_HEAD",
    "index",
    "index.lock",
    "commondir",
    "locked",
    "config.worktree",
    "info/sparse-checkout",
    "CLAUDE_BASE"
  ],
  Dt = ["refs/bisect", "refs/worktree", "refs/rewritten", "refs", "logs", "info"];
function Be(e, n) {
  return te((o) =>
    e.lstat(`${n}/${o}`).catch((r) => {
      if (G(r)) return null;
      throw r;
    })
  );
}
function tt(e) {
  return `worktrees/${e} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them`;
}
async function Bt(e, n, o) {
  return (
    await Pe(e, n, o),
    e.rmdir(n).then(
      () => !0,
      (r) => (
        t(`Dropped the registration ${n} but left its folder: ${d(r)}`, { level: "warn" }),
        !1
      )
    )
  );
}
function ie(e, n) {
  return e.isDirectory() && e.dev !== 0n && !Wu(e.ino) && e.dev === n.dev && e.ino === n.ino;
}
async function Pe(e, n, o) {
  for (let r of Ct) await e.unlink(`${n}/${r}`).catch(() => {});
  await jt(e, n, o);
  for (let r of Dt) await e.rmdir(`${n}/${r}`).catch(() => {});
}
var Mt =
    /^(?:tables\.list(?:\.lock)?|0x[0-9a-f]{12,16}-0x[0-9a-f]{12,16}-[0-9a-f]{8}\.(?:(?:ref|log)(?:\.lock)?|temp\.[A-Za-z0-9]{6}))$/,
  Wt = 1024,
  Ht = "refs/heads",
  ge = "reftable";
async function jt(e, n, o) {
  let r = await Promise.resolve()
    .then(() => e.anchorBeneath(n))
    .catch(() => null);
  if (r === null) return;
  try {
    let s = await r.lstat("").catch(() => null);
    if (s === null || !ie(s, o)) return;
    let a = await r.anchorBeneath(ge).catch(() => null);
    if (a === null) return;
    try {
      let [l, u] = await Promise.all([
        a.lstat("").catch(() => null),
        e.lstat(ge).catch(() => null)
      ]);
      if (
        l === null ||
        u === null ||
        !l.isDirectory() ||
        !u.isDirectory() ||
        (l.dev === u.dev && l.ino === u.ino)
      )
        return;
      let c = await a
        .list("", Wt)
        .catch((w) => (E(w) === "WORKING_LIST_UNSUPPORTED" ? a.list("").catch(() => null) : null));
      if (c === null) return;
      for (let w of c) if (Mt.test(w)) await a.unlink(w).catch(() => {});
    } finally {
      await a.close().catch(() => {});
    }
    (await r.unlink(Ht).catch(() => {}), await r.rmdir(ge).catch(() => {}));
  } finally {
    await r.close().catch(() => {});
  }
}
async function Ut(e, n, o) {
  if (o === "drop") return !0;
  if (o === "keep") return !1;
  let r = await qe(e, `${n}/locked`, je);
  if (r === "absent" || "unread" in r || !o.unlockIf(r.text.replace(/[\r\n]+$/, ""))) return !1;
  return (await e.unlink(`${n}/locked`), !0);
}
async function Kt(e, n, o, r) {
  if (!r)
    return S(e, "this macOS version does not enforce O_NOFOLLOW_ANY, so links cannot be refused");
  let s = await $e(n),
    a = "entryId" in n ? [n.entryId] : Xe(Ee(n)),
    l = { guessed: !("entryId" in n), unchecked: 0, kinds: new Set() },
    u = K.O_NONBLOCK | gst | ws;
  for (let w of a) {
    if (!ze(w)) {
      if (!l.guessed) L(l, "an entry name this check cannot read exactly");
      continue;
    }
    let h = F(e, "worktrees", w),
      g = await he(F(h, "gitdir"), K.O_RDWR | u).catch((y) => E(y) ?? "EIO");
    if (typeof g === "string") {
      if (g !== "ENOENT" && g !== "ENOTDIR")
        L(
          l,
          g === "ELOOP"
            ? "a gitdir file that is a link, or a link on the way to it"
            : `a gitdir file that ${ke(g)}`
        );
      continue;
    }
    try {
      let y = await g.stat();
      if (!y.isFile() || y.nlink !== 1) {
        L(
          l,
          !y.isFile()
            ? "a gitdir file that is not a regular file"
            : y.nlink > 1
              ? "a gitdir file with more than one name"
              : "a gitdir file that was removed after it was opened"
        );
        continue;
      }
      let T = await pe(g, He),
        m = T === null ? null : Ke(T, h);
      if (T === null) L(l, "a gitdir file that is larger than git writes");
      else if (m === null && !Je(T)) L(l, "a gitdir file whose path could not be checked safely");
      if (m === null || !Qe(m, s)) continue;
      let f = await he(F(h, "locked"), K.O_RDONLY | u).catch((p) => (G(p) ? null : void 0));
      if (f !== null) {
        let p = await f?.stat().catch(() => null),
          v = f !== void 0 && p?.isFile() === !0 ? await pe(f, je).catch(() => null) : null;
        if (
          (await f?.close().catch(() => {}),
          v === null ||
            o.locked === "keep" ||
            (o.locked !== "drop" && !o.locked.unlockIf(v.replace(/[\r\n]+$/, ""))))
        )
          return S(e, `worktrees/${w} is locked`);
      }
      if (!(await Ve(m, n, s)))
        return S(
          e,
          `could not confirm the worktree is gone: ${m} exists, or a link or unreadable folder is on the way to it`
        );
      if (
        await te(async (p) => {
          let v = await he(F(h, p), K.O_RDONLY | u).catch((b) => {
            if (G(b)) return null;
            throw b;
          });
          if (v === null) return null;
          try {
            return await v.stat();
          } finally {
            await v.close().catch(() => {});
          }
        })
      )
        return S(e, `${tt(w)}, so nothing in it was changed`);
      return (
        await me.beforeMutation?.(w),
        await g.truncate(0),
        { outcome: "dropped", entryId: w, adminRemoved: !1 }
      );
    } catch (y) {
      return S(e, d(y));
    } finally {
      await g.close().catch(() => {});
    }
  }
  let c = Te(e, s, l);
  return "unmatched" in c ? S(e, c.unmatched) : c;
}
import { randomBytes as Yt } from "crypto";
import { constants as Y } from "fs";
import { access as Vt, lstat as j, readlink as zt, realpath as W, rm as Xt } from "fs/promises";
import {
  basename as lt,
  dirname as V,
  isAbsolute as Ae,
  join as N,
  normalize as H,
  parse as J,
  resolve as Zt,
  sep as I
} from "path";
var qt = 65536,
  Jt = 3,
  nt = null;
function Qt() {
  return (nt ??= Promise.all([import("./chunk-8et31asy.js"), import("./chunk-sdddg3wm.js")])
    .then(([e, n]) => ({ tree: e, host: n.createDeviceTreeHost() }))
    .catch((e) => {
      throw ((nt = null), e);
    }));
}
function en() {
  return O() === "windows" ? Y.O_RDONLY : Y.O_RDONLY | Y.O_NONBLOCK;
}
async function ght(
  e,
  n,
  {
    forceTwice: o = !1,
    git: r,
    trustedRoot: s,
    resolveAboveParent: a = !1,
    deregisterIfStopped: l = !1,
    pointerFirst: u = !1
  } = {}
) {
  let c = await ht(s === void 0 ? [e] : [e, s], n, { parentLinkToRoot: a });
  if (c === null) return { outcome: "refused", reason: `${n} has no parent directory` };
  if ("refused" in c) return { outcome: "refused", reason: c.refused };
  let { base: w, rel: h, underRoot: g } = c,
    y = r ?? (await ln(e));
  if ("why" in y)
    return {
      outcome: "refused",
      reason: `the repository's git directory failed its safety checks (${y.why})`
    };
  let T = y.dir,
    m = await ae(w, g ? "root" : a ? "not_a_link" : "canonical");
  if (!("held" in m))
    return m.outcome === "unanchored" ? m : { outcome: "refused", reason: m.reason };
  let { held: f, realBase: p } = m;
  try {
    let v = await f.lstat(h).then(
      (_) => _.isDirectory(),
      () => !1
    );
    if (
      v &&
      (await f.list(h).then(
        () => !1,
        (_) => Se(_)
      ))
    )
      return { outcome: "unanchored", reason: "no_descriptor_listing" };
    let b = g || a ? [n, N(p, ...h.split("/"))] : [n],
      k = await _e(T, { worktreePath: b, repoSpelled: y.root });
    if (v && k !== null && !("unavailable" in k)) {
      let _ = await hn(f, h, [n, N(p, ...h.split("/"))], e, T);
      if (_ !== null && _ !== k.entryId) {
        let X = await _e(T, { entryId: _, worktreePath: b, repoSpelled: y.root });
        if (X !== null && !("unavailable" in X)) k = X;
      }
    }
    if (k !== null && "unavailable" in k)
      return {
        outcome: "refused",
        reason: `git's records of worktrees in ${T} could not be checked safely (${k.unavailable})`
      };
    if (k === null) return { outcome: "not_registered" };
    if (
      !g &&
      !dt(
        k.recordedGitdir,
        [n, N(p, ...h.split("/"))].map((_) => N(H(_), ".git"))
      )
    )
      return {
        outcome: "refused",
        reason: `the folder holding ${n} resolved to a different place while it was being checked (a link may have been swapped in)`
      };
    if (k.locked && !o) return { outcome: "locked" };
    let A = o ? "drop" : "keep",
      P = await f.lstat(h).then(
        (_) => _,
        (_) => ({ error: _ })
      );
    if (
      "error" in P &&
      G(P.error) &&
      (await f.lstat(nn(h)).then(
        (_) => _.isDirectory(),
        () => !1
      ))
    )
      return st(
        n,
        await Mne(T, { entryId: k.entryId, repoSpelled: y.root }, { locked: A }),
        T,
        k.entryId
      );
    if ("error" in P || !P.isDirectory())
      return {
        outcome: "refused",
        reason:
          "error" in P && G(P.error)
            ? `the directory holding ${n} is missing`
            : `${n} is not a directory reachable without a link (${"error" in P ? (E(P.error) ?? "unknown error") : "not a directory"})`
      };
    let D = await mt(f, `${h}/.git`);
    if ("error" in D)
      return { outcome: "refused", reason: `the .git file in ${n} could not be read (${D.error})` };
    if (D.value === null || !(await wt(D.value, [n, N(p, ...h.split("/"))], e, T, k.entryId)))
      return { outcome: "not_pointing_back" };
    let z = l ? await ut(T, k.entryId) : null,
      U = typeof z === "object" ? z : null,
      B = { deleted: !1 };
    try {
      await wn(f, h, D.bytes, B, { pointerFirst: u });
    } catch (_) {
      if (!B.deleted && Se(_)) return { outcome: "unanchored", reason: "no_descriptor_listing" };
      let X = un(_);
      t(`Worktree checkout ${n} not fully deleted: ${d(_)}`, { level: "warn" });
      let kt = U !== null && B.deleted && (await cn(T, k.entryId, U, A));
      return { outcome: "delete_failed", reason: X, started: B.deleted, deregistered: kt };
    }
    return st(
      n,
      await Mne(T, { entryId: k.entryId, repoSpelled: y.root }, { locked: A }),
      T,
      k.entryId
    );
  } finally {
    await f.close().catch(() => {});
  }
}
async function tn(e, n, { rootIsCanonical: o = !1 } = {}) {
  let r = n === void 0 ? gt(e) : await ht([n], e);
  if (r === null)
    throw new R(`${e} has no parent directory`, "the path to delete has no parent directory");
  if ("refused" in r)
    throw new R(
      r.refused,
      "the path to delete reaches its root by a spelling that cannot be checked safely"
    );
  let s = await ae(r.base, n === void 0 || !r.underRoot ? "not_a_link" : o ? "canonical" : "root");
  if (!("held" in s)) {
    if (s.outcome === "unanchored") return { unanchored: s.reason };
    if (s.absent === !0) return "absent";
    throw new R(
      `could not open the directory above ${e}: ${s.reason}`,
      "the directory above the path to delete could not be opened"
    );
  }
  try {
    return (await pt(s.held, r.rel)) ? "deleted" : "absent";
  } catch (a) {
    if (Se(a)) return { unanchored: "no_descriptor_listing" };
    throw a;
  } finally {
    await s.held.close().catch(() => {});
  }
}
async function QUs(e, n, o = {}) {
  if (typeof (await tn(e, n, o)) === "object") await Xt(e, { recursive: !0, force: !0 });
}
function fDe(e) {
  switch (e.outcome) {
    case "removed":
      return "removed";
    case "not_registered":
      return "git has no usable record of a worktree at this path; nothing was deleted";
    case "locked":
      return "the worktree is locked (by `git worktree lock`); nothing was deleted. `git worktree unlock <path>` unlocks it";
    case "not_pointing_back":
      return "the worktree's .git file is missing or does not point to git's record of it; nothing was deleted";
    case "refused":
      return `${e.reason}; nothing was deleted`;
    case "delete_failed":
      if (e.reason === rt) return `${rt}; try removing it again once nothing is writing to it`;
      if (e.reason === "WORKING_NAME_NOT_PLAIN")
        return "it holds a file name that Windows cannot delete this way; some of its other files may already be deleted";
      if (e.reason === "ENOTEMPTY")
        return "a folder in it could not be emptied: it may be unreadable, or something may still be writing to it; check its permissions and try removing it again";
      if (e.reason === "WORKING_FILE_HELD")
        return "a program has one of its files open; try removing it again once that program closes it";
      return e.reason === "EBUSY"
        ? "some of its files could not be deleted: EBUSY; a program may have them open, so try removing it again"
        : `some of its files could not be deleted: ${e.reason}`;
    case "registration_kept":
      return `its files were deleted, but git still lists it (${e.reason})`;
    case "unanchored":
      return e.reason === "no_descriptor_listing"
        ? "this machine cannot list a folder it holds open, so it cannot delete it without following links"
        : `this machine cannot open folders without following links (${e.reason})`;
  }
}
var rt = "files kept appearing in the worktree while it was being deleted";
function Se(e) {
  return E(e) === "WORKING_LIST_UNSUPPORTED";
}
function nn(e) {
  return e.includes("/") ? e.slice(0, e.lastIndexOf("/")) : "";
}
async function ae(e, n, { holdBase: o = !1 } = {}) {
  let r = (f, p = !1) => ({ outcome: "refused", reason: f, absent: p }),
    a = await (async () => {
      if (n === "root") return W(e);
      let f = N(await W(V(e)), lt(e));
      return n === "not_a_link" && O() !== "windows" && (await sn(f)) ? W(f) : f;
    })().catch((f) => (G(f) ? void 0 : E(f) === "ELOOP" ? "link" : null));
  if (a === "link") return r(`${e} is a link, or its spelling differs from the one on disk`);
  if (a === void 0 || a === null) return r(`${e} does not exist or cannot be read`, a === void 0);
  if (n === "canonical" && !oe(a, e))
    return r(
      `${e} is reached through a link, or its spelling differs from the one on disk (it resolves to ${a})`
    );
  let l = J(a).root,
    u = O() === "windows" || o ? a : await rn(a);
  if (u === null) return r(`a directory above ${e} cannot be read`);
  let c = await Qt().catch((f) => ({ failed: d(f) }));
  if ("failed" in c) return r(`${e} could not be opened safely (${c.failed})`);
  let { tree: w, host: h } = c,
    g = await w
      .openTreeAnchor(h, { gitRoot: u, realRoot: u })
      .catch((f) => ({ failed: d(f), code: E(f) }));
  if ("failed" in g) {
    let f = u === a;
    return f && g.code === "ENOENT"
      ? r(`${e} does not exist`, !0)
      : f && (g.code === "ELOOP" || g.code === "ENOTDIR")
        ? r(`${e} is a link, or changed while it was being opened`)
        : f && g.code === "WORKING_ROOT_NOT_CANONICAL"
          ? r(`${e} is reached through a link, or its spelling differs from the one on disk`)
          : r(`${e} could not be opened safely (${g.failed})`);
  }
  if ("unavailable" in g) {
    let f = w.getUnavailableReason(await w.checkAnchoring(l, { host: h })),
      p = f === "no_ffi" || (f === "remote_volume" && (n !== "not_a_link" || (await on(e, l))));
    return f !== null && (O() !== "windows" || p)
      ? { outcome: "unanchored", reason: f }
      : r(`${e} could not be opened safely (${g.unavailable})`);
  }
  let y = u === a ? "" : a.slice(Zd(u).length).split(I).filter(Boolean).join("/"),
    T = an(g, y),
    m = await T.lstat("").then(
      (f) => f,
      (f) => ({ error: f })
    );
  if ("error" in m || !m.isDirectory())
    return (
      await g.close().catch(() => {}),
      "error" in m && G(m.error)
        ? r(`${e} does not exist`, !0)
        : r(`${e} is a link, or changed while it was being opened`)
    );
  return { held: T, realBase: a };
}
async function rn(e) {
  let n = J(e).root,
    o = e.slice(n.length).split(I).filter(Boolean),
    r = n,
    s = n,
    a = !1;
  for (let l of o) {
    let u = await Ie(s, Y.R_OK),
      c = await Ie(s, Y.W_OK);
    if (u === null || c === null) return null;
    if (!u) {
      let w = await j(s).then(
        (h) => h.uid,
        () => null
      );
      if (w === null || w === process.getuid?.() || c || a) return null;
      r = N(s, l);
    }
    ((a ||= c), (s = N(s, l)));
  }
  return r;
}
async function on(e, n) {
  let o = await W(J(e).root).catch(() => null);
  return o !== null && sp(Zd(J(o).root)) === sp(Zd(n));
}
async function Ie(e, n) {
  return Vt(e, n).then(
    () => !0,
    (o) => (["EACCES", "EPERM", "EROFS"].includes(E(o) ?? "") ? !1 : null)
  );
}
async function sn(e) {
  let n = await j(e).catch(() => null);
  if (n === null || !n.isSymbolicLink()) return !1;
  for (let o = V(e); ; o = V(o)) {
    if (
      (await j(o).then(
        (s) => s.uid,
        () => null
      )) !== 0 ||
      (await Ie(o, Y.W_OK)) !== !1
    )
      return !1;
    if (V(o) === o) return !0;
  }
}
function an(e, n) {
  let o = (r) => (n === "" ? r : r === "" ? n : `${n}/${r}`);
  return {
    lstat: (r) => e.lstat(o(r)),
    list: (r, s) => e.list(o(r), s),
    unlink: (r) => e.unlink(o(r)),
    rmdir: (r) => e.rmdir(o(r)),
    rename: (r, s) => e.rename(o(r), o(s)),
    removeTree: (r, s) => e.removeTree(o(r), s),
    open: (r, s) => e.open(o(r), s),
    create: (r, s, a) => e.create(o(r), s, a),
    close: () => e.close(),
    anchorBeneath: (r) => e.anchorBeneath(o(r))
  };
}
async function ln(e) {
  let n = e,
    o = await mht(e, { dotGitLink: "vet" });
  if ("skipped" in o && o.skipped === "pointer") {
    let s = V$(e);
    if (s !== null && s !== e) ((n = s), (o = await mht(s, { dotGitLink: "vet" })));
    else {
      let a = await zEn(e);
      if (a === null) return { why: "its .git file names no usable git directory" };
      if ("refused" in (await nGe(e, a)))
        return {
          why: `its .git file names ${a}, which is inside the working tree, or could not be checked against it`
        };
      let [l, u] = await Promise.all([a, e].map((w) => W(w).catch(() => null)));
      if (l == null || u == null)
        return {
          why:
            l == null
              ? `its .git file names ${a}, which does not exist or cannot be resolved`
              : "the repository root cannot be resolved"
        };
      if (ft(nGr(l), nGr(u)))
        return { why: `its .git file names ${a}, which resolves into the working tree` };
      return (await j(N(l, "commondir")).then(
        () => !1,
        (w) => G(w)
      ))
        ? { dir: l, root: e }
        : { why: "its .git file names another worktree" };
    }
  }
  if ("skipped" in o) return { why: o.why };
  let r = await nGe(n, o.gitDir);
  return "refused" in r ? { why: r.refused } : { dir: r.gitDir, root: n };
}
async function it(e, n, o) {
  return e.lstat(n).then(
    (r) => ie(r, o),
    () => !1
  );
}
async function ot(e, n) {
  for (let o of ["objects", "config", "packed-refs", "hooks", "worktrees"])
    if (
      await e.lstat(`${n}/${o}`).then(
        () => !0,
        (s) => !G(s)
      )
    )
      return !0;
  return !1;
}
async function cn(e, n, o, r) {
  let s = await ae(e, "canonical", { holdBase: !0 });
  if (!("held" in s))
    return (t(`Kept the registration ${n} in ${e}: ${s.reason}`, { level: "warn" }), !1);
  try {
    let a = `worktrees/${n}`;
    if (!(await it(s.held, a, o)))
      throw Error(
        "its folder changed after it was checked, or this volume cannot show it is the same folder"
      );
    if (
      r === "keep" &&
      (await s.held.lstat(`worktrees/${n}/locked`).then(
        () => !0,
        (c) => !G(c)
      ))
    )
      throw Error("it was locked while the checkout was being deleted");
    let l = new R(
      `${a} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them, so nothing in it was removed`,
      "the registration entry has a git directory's own files in it, or could not be checked for them"
    );
    if (await ot(s.held, a)) throw l;
    if (
      (await s.held.unlink(`${a}/gitdir`).catch((c) => {
        if (!G(c)) throw c;
      }),
      await ot(s.held, a))
    )
      return (
        t(
          `Dropped the registration ${a} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`,
          { level: "warn" }
        ),
        !1
      );
    if (
      (await Pe(s.held, a, o),
      await s.held.rmdir(a).then(
        () => !0,
        (c) => G(c)
      ))
    )
      return !0;
    if (!(await it(s.held, a, o)))
      return (
        t(
          `Dropped the registration ${a} in ${e} (git no longer lists it) but left its folder: it changed while it was being emptied`,
          { level: "warn" }
        ),
        !1
      );
    let u = `${a}.claude-dropped-${Yt(4).toString("hex")}`;
    return await s.held.rename(a, u).then(
      () => (
        t(
          `Dropped the registration ${a} in ${e}; its folder held files Claude Code does not delete (such as a submodule's git directory), so it was moved to ${u}; git worktree prune removes it`,
          { level: "warn" }
        ),
        !0
      ),
      (c) => (
        t(
          `Dropped the registration ${a} in ${e} (git no longer lists it) but could not move its folder aside (${d(c)}); git worktree prune removes it`,
          { level: "warn" }
        ),
        !1
      )
    );
  } catch (a) {
    return (t(`Kept the registration ${n} in ${e}: ${d(a)}`, { level: "warn" }), !1);
  } finally {
    await s.held.close().catch(() => {});
  }
}
async function st(e, n, o, r) {
  let s = N(o, "worktrees", r);
  if (n.outcome === "dropped" || (n.outcome === "none" && (await ut(o, r)) === "absent"))
    return { outcome: "removed" };
  let a = n.outcome === "kept" ? n.reason : `git's record of it at ${s} could not be read`;
  return (
    t(`Worktree ${e} is gone but git still lists it: ${a}`, { level: "warn" }),
    { outcome: "registration_kept", reason: a }
  );
}
async function ut(e, n) {
  let o = await ae(e, "canonical", { holdBase: !0 });
  if (!("held" in o)) return null;
  try {
    return await o.held.lstat(`worktrees/${n}`).then(
      (r) => ({ dev: r.dev, ino: r.ino }),
      (r) => (G(r) ? "absent" : null)
    );
  } finally {
    await o.held.close().catch(() => {});
  }
}
function un(e) {
  return E(e) === "ENOTEMPTY" && !("syscall" in Object(e)) ? d(e) : (E(e) ?? "an unknown error");
}
function oe(e, n) {
  return se(e) === se(n);
}
function dt(e, n) {
  return qSt(se(e), n.map(se));
}
function se(e) {
  return O() === "windows" ? e.replace(/^[a-z](?=:)/, (n) => n.toUpperCase()) : e;
}
function at(e, n) {
  return e.length > n.length + 1 && oe(e.slice(0, n.length + 1), n + I);
}
function ft(e, n) {
  return e === n || e.startsWith(n.endsWith(I) ? n : n + I);
}
async function dn(e, n) {
  let [o, r, s] = await Promise.all([
    j(e, { bigint: !0 }).catch(() => null),
    j(n, { bigint: !0 }).catch(() => null),
    j(V(n), { bigint: !0 }).catch(() => null)
  ]);
  return (
    o !== null &&
    r !== null &&
    s !== null &&
    o.dev !== 0n &&
    !Wu(o.ino) &&
    o.dev === r.dev &&
    o.ino === r.ino &&
    !(s.dev === r.dev && s.ino === r.ino)
  );
}
async function ht(e, n, { parentLinkToRoot: o = !1 } = {}) {
  let r = Zd(H(n)),
    s = (h, g) =>
      h
        .slice(g.length + 1)
        .split(I)
        .join("/"),
    a = [],
    l = [];
  for (let h of e) {
    let g = await W(h).catch(() => null);
    if ((a.push(h, ...(g === null ? [] : [g])), g !== null)) l.push(Zd(g));
  }
  let u = a.map((h) => Zd(H(h)));
  for (let h of u)
    if (at(r, h)) {
      let g = r.slice(0, h.length);
      return { base: g.endsWith(":") ? g + I : g, rel: s(r, h), underRoot: !0 };
    }
  let c = (h) => sp(h.normalize("NFC")),
    w = u.find((h) => at(c(r), c(h)));
  if (w !== void 0) {
    let h = r.split(I),
      g = w.split(I).length;
    if (O() !== "windows" && (await dn(h.slice(0, g).join(I), w)))
      return { base: w, rel: h.slice(g).join("/"), underRoot: !0 };
    return {
      refused: `${n} spells the repository folder ${w} in another letter case or Unicode form (use the path as git records it)`
    };
  }
  if (l.length > 0) {
    let h = r.split(I),
      g = null;
    for (let f = 1; f < h.length - 1; f++) {
      let p = h.slice(0, f).join(I),
        v = p === "" || p.endsWith(":") ? p + I : p,
        b = await W(v).catch(() => null);
      g = b;
      let k = b === null ? null : Zd(b),
        A = k === null ? void 0 : l.find((P) => oe(k, P));
      if (A !== void 0) return { base: A, rel: h.slice(f).join("/"), underRoot: !0 };
      if (k !== null && l.some((P) => ft(k, P)))
        return { refused: `${n} is reached through a link into the repository at ${v}` };
    }
    let y = g === null ? null : N(g, h.at(-2)),
      T = y === null || !o ? null : await fn(y),
      m = [y, T]
        .flatMap((f) => (f === null ? [] : [f]))
        .map((f) => l.find((p) => oe(f, p)))
        .find((f) => f !== void 0);
    if (m !== void 0) return { base: m, rel: h.at(-1), underRoot: !0 };
  }
  return gt(r);
}
async function fn(e) {
  let n = await zt(e).catch(() => null);
  if (n === null) return null;
  let o = O() === "windows" && /^\\\\\?\\[A-Za-z]:\\/.test(n);
  if (o && n.includes("/")) return null;
  let r = o ? n.slice(4) : n,
    s = r.split(I === "\\" ? /[\\/]/ : /\//);
  if (
    (Ae(r)
      ? s
      : s.slice(
          Math.max(
            0,
            s.findIndex((l) => l !== "..")
          )
        )
    ).some((l) => l === "." || l === "..")
  )
    return null;
  return Zd(H(Ae(r) ? r : N(V(e), r)));
}
function gt(e) {
  let n = Zd(H(e)),
    o = J(n).root,
    r = n.lastIndexOf(I);
  if (n === o || r === n.length - 1 || r < 0) return null;
  return { base: r < o.length ? o : n.slice(0, r), rel: n.slice(r + 1), underRoot: !1 };
}
async function wt(e, n, o, r, s) {
  let a = Ae(e) ? [H(e)] : n.map((c) => H(Zt(c, e))),
    l = await W(o).catch(() => null),
    u = [r, N(o, ".git")].concat(l === null ? [] : [N(l, ".git")]).map((c) => N(c, "worktrees", s));
  return a.some((c) => dt(c, u));
}
async function hn(e, n, o, r, s) {
  let a = await mt(e, `${n}/.git`);
  if ("error" in a || a.value === null) return null;
  let l = lt(H(a.value));
  return (await wt(a.value, o, r, s, l)) ? l : null;
}
async function gn(e, n) {
  let o = Buffer.alloc(n + 1),
    r = 0;
  for (;;) {
    let { bytesRead: s } = await e.read(o, r, o.length - r, r);
    if (s === 0) return o.subarray(0, r);
    if (((r += s), r > n)) return null;
  }
}
async function mt(e, n) {
  let o = { value: null, bytes: Buffer.alloc(0) },
    r;
  try {
    r = await e.open(n, en());
  } catch (s) {
    let a = E(s);
    return a === "ENOENT" || a === "ELOOP" || a === "EISDIR" ? o : { error: a ?? d(s) };
  }
  try {
    if (!(await r.stat()).isFile()) return o;
    let s = await gn(r, qt);
    if (s === null) return o;
    let a = /^gitdir: ([^\r\n]+)[\r\n]*$/.exec(s.toString("utf8"));
    return { value: a ? a[1] : null, bytes: s };
  } catch (s) {
    return { error: E(s) ?? d(s) };
  } finally {
    await r.close().catch(() => {});
  }
}
async function pt(e, n, o = { deleted: !1 }) {
  try {
    return (await e.unlink(n), (o.deleted = !0), !0);
  } catch (r) {
    let s = E(r);
    if (s === "ENOENT") return !1;
    if (s !== "EISDIR" && s !== "EPERM" && s !== "EACCES") throw r;
    let a = await e.lstat(n).catch(() => null);
    if (a === null || !a.isDirectory()) throw r;
    return (
      await e.removeTree(n, {
        onDeleted: () => {
          o.deleted = !0;
        }
      }),
      !0
    );
  }
}
async function wn(e, n, o, r = { deleted: !1 }, { pointerFirst: s = !1 } = {}) {
  if (s) (await e.unlink(`${n}/.git`), (r.deleted = !0));
  for (let a = 0; ; a++) {
    let l = (await e.list(n)).filter((u) => u !== ".git");
    if (l.length === 0) break;
    if (a === Jt) {
      let u = Error("files kept appearing in the worktree while it was being deleted");
      throw ((u.code = "ENOTEMPTY"), u);
    }
    if (l.some((u) => u.includes("\uFFFD"))) {
      await e.removeTree(n, {
        keep: ".git",
        onDeleted: () => {
          r.deleted = !0;
        }
      });
      continue;
    }
    for (let u of l) await pt(e, `${n}/${u}`, r);
  }
  if (!s) (await e.unlink(`${n}/.git`), (r.deleted = !0));
  try {
    await e.removeTree(n);
  } catch (a) {
    if (!s) await e.create(`${n}/.git`, o, 420).catch(() => {});
    throw a;
  }
}
export { mht, Aan, nGe, Mne, qJe, ght, QUs, fDe };

//# sourceMappingURL=chunk-skfqvf9h.js.map
