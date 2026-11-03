// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Swn, ln, Fh, pe, qrt } from "./chunk-7c3thgax.js";
import { L, dP, VH, gT, iie } from "./chunk-wrtp8qz8.js";
import { d, E } from "./chunk-fs43t96t.js";
import { Yn, Rc, zy, k6, aJr, gl, Yw, Sg, $Ye, zs } from "./chunk-h5gbmqm1.js";
import { Gy, rit, rdr, Im, sF, Db, t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { cTt, STt, aE, n4e } from "./chunk-5rw2zfa0.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { zar, jd, mxe } from "./chunk-v4kbwz0z.js";
import { Is, Qt } from "./chunk-1e5yp9hx.js";
import { Pi } from "./chunk-bh50mq9d.js";
import { RYr, j5 } from "./chunk-r00j5r9s.js";
import { o5, tm, toe, s5 } from "./chunk-h2tyaevk.js";
import { dd, LO, P1t, mZe, zD } from "./chunk-5x56j97h.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { realpathSync as Fn } from "fs";
import { basename as Gn, join as U } from "path";
var o_t = [
  "GIT_EXEC_PATH",
  "DEVELOPER_DIR",
  "GIT_TEXTDOMAINDIR",
  "LD_PRELOAD",
  "LD_LIBRARY_PATH",
  "LD_AUDIT",
  "GCONV_PATH",
  "NLSPATH",
  "LOCPATH",
  "PSMODULEPATH",
  "DYLD_INSERT_LIBRARIES",
  "DYLD_LIBRARY_PATH",
  "DYLD_FRAMEWORK_PATH",
  "DYLD_FALLBACK_LIBRARY_PATH",
  "DYLD_FALLBACK_FRAMEWORK_PATH",
  "DYLD_VERSIONED_LIBRARY_PATH",
  "DYLD_VERSIONED_FRAMEWORK_PATH",
  "OPENSSL_CONF",
  "OPENSSL_CONF_INCLUDE",
  "OPENSSL_MODULES",
  "OPENSSL_ENGINES"
];
import { constants as wn } from "fs";
import {
  access as _n,
  lstat as B,
  open as Jn,
  readlink as tn,
  realpath as M,
  stat as On
} from "fs/promises";
import { homedir as rn } from "os";
import {
  basename as Sn,
  dirname as h,
  isAbsolute as D,
  join as _,
  parse as Tn,
  posix as F,
  relative as Nn,
  resolve as C,
  sep as p,
  win32 as b
} from "path";
function xNo(n, e, o, r = process.env) {
  let i = Pi(r, "GIT_CONFIG_GLOBAL"),
    s = Pi(r, "XDG_CONFIG_HOME");
  return [
    ...n.filter((u) => u !== ""),
    ...on(o, r),
    ...(i ? [i] : []),
    ...$Fr(r).flatMap((u) => [`${s || `${u}${p}.config`}${p}git${p}config`, `${u}${p}.gitconfig`])
  ].map((u) => XTe(e, u));
}
function zVs(n, e, o, r) {
  return [...n.filter((i) => i !== ""), ...on(o, r)].map((i) => XTe(e, i));
}
function on(n, e) {
  if (PNo(Pi(e, "GIT_CONFIG_NOSYSTEM"))) return [];
  let o = Pi(e, "GIT_CONFIG_SYSTEM"),
    r = Pi(e, "PROGRAMDATA"),
    i = O() === "windows";
  return [
    ...(o ? [o] : []),
    ...(i ? [] : ["/etc/gitconfig"]),
    ...(n === null ? [] : [`${n}${p}etc${p}gitconfig`]),
    ...(i && r ? [`${r}${p}Git${p}config`] : [])
  ];
}
function PNo(n) {
  let e = n?.trim().toLowerCase();
  if (e === void 0 || ["", "false", "no", "off"].includes(e)) return !1;
  if (["true", "yes", "on"].includes(e)) return !0;
  return /^[-+]?\d+$/.test(e) && Number(e) !== 0;
}
function sn() {
  return L([
    jd(),
    mxe(),
    ...zD().map((n) => (n === "~" || n.startsWith("~/") ? _(rn(), n.slice(1)) : n))
  ]);
}
function un(n, e, o) {
  return o.find((r) => !cn(r) && zBt(r, e).verdict === "foreign" && Mg(r, n));
}
function K6n(n, e, o, { pattern: r = !1 } = {}) {
  if (n.verdict !== "foreign") return n;
  let i = un(n.spelling, e, o);
  return i === void 0 ? n : j(n.spelling, i, O() === "windows", r);
}
async function pHe(n, e, o) {
  if (n.verdict !== "foreign") return n;
  let r = un(n.spelling, e, o);
  return r === void 0 ? n : dn(n.spelling, r, O() === "windows");
}
function $Fr(n = process.env) {
  let e = Pi(n, "HOME"),
    o = Pi(n, "HOMEDRIVE"),
    r = Pi(n, "HOMEPATH");
  return L([e, O() === "windows" && o && r ? `${o}${r}` : void 0, rn()].filter((i) => Boolean(i)));
}
async function KVs(n, e, o, r = [], i = []) {
  let s = e.GIT_DIR ?? _(o, ".git"),
    u = e.GIT_COMMON_DIR ?? s,
    l = async (a) => (Rc(a) ? null : M(a).catch((g) => (E(g) === "ENOENT" ? a : null))),
    c = await Promise.all(
      [[o, C(n)], [s], [u]].map(async (a) => [...a, ...(await Promise.all(a.map(l)))])
    );
  if (c.some((a) => a.includes(null))) return null;
  let [y, w, m] = c.map((a) => L(a.filter((g) => g !== null))),
    N = async (a) => {
      if (Dn(a)) return { derived: [a] };
      let g = await pHe(await mHe(a, o), o, i);
      if (g.verdict === "foreign")
        return {
          unexamined: a,
          detail:
            "it names another host than this checkout\u2019s or the owner\u2019s home and temp server"
        };
      if (g.verdict !== "local")
        return { unexamined: a, detail: `its route cannot be vouched for (${g.verdict})` };
      return v(g.spelling);
    },
    v = (a) =>
      M(a).then(
        (g) => ({ resolved: g }),
        async (g) => {
          let T = E(g);
          if (T === "ENOENT" || T === "ENOTDIR") return en(a, o);
          let R = await B(a).catch(() => null);
          if (R === null || R.isDirectory()) return { unexamined: a, detail: T ?? d(g) };
          return R.isSymbolicLink() ? en(a, o) : { derived: [a] };
        }
      ),
    P = await Promise.all(r.map(N)),
    f = P.find((a) => "unexamined" in a);
  if (f !== void 0) return f;
  let I = P.flatMap((a) => ("resolved" in a ? [a.resolved] : [])).filter((a) => D(a)),
    S = P.flatMap((a) => ("derived" in a ? a.derived : [])).filter((a) => D(a)),
    A = L([...r, ...I, ...S]),
    x = L([...y, ...w, ...m, ...A]),
    k = O() === "windows" ? [] : await Promise.all(L([...y, ...w, ...m]).map(l));
  if (k.includes(null)) return null;
  let Z = (a, g) =>
      On(a, { bigint: !0 }).then(
        (T) => {
          let R = mn(T);
          return R === void 0 ? [] : [[R, a]];
        },
        async (T) => {
          let R = E(T);
          if (R === "ENOENT" || (R === "ENOTDIR" && !g)) return [];
          if (g) return null;
          let nn = await B(a).catch(() => null);
          return nn !== null && !nn.isDirectory() ? [] : { unexamined: a, detail: R ?? d(T) };
        }
      ),
    H = await Promise.all([
      ...L(k.filter((a) => a !== null)).map((a) => Z(a, !0)),
      ...(O() === "windows" ? [] : L(I).map((a) => Z(a, !1)))
    ]);
  if (H.includes(null)) return null;
  let Q = H.find((a) => a !== null && !Array.isArray(a));
  if (Q !== void 0) return Q;
  return {
    ids: new Map(H.filter((a) => Array.isArray(a)).flat()),
    roots: x,
    trees: y,
    fixed: L([
      ...w.flatMap((a) => [a, _(a, "config"), _(a, "config.worktree"), _(a, "commondir")]),
      ...m.flatMap((a) => [a, _(a, "config"), _(a, "worktrees")])
    ])
  };
}
async function en(n, e) {
  let o = await V(n, e);
  return o === null
    ? { unexamined: n, detail: "it is too deep or too long to resolve" }
    : { derived: [n, o] };
}
var Pn = 8;
async function V(n, e, o = Pn, r = 0) {
  if (iun(n, r)) return null;
  let i = await M(n).catch(() => null);
  if (i !== null) return i;
  let s = o > 0 ? await tn(n).catch(() => null) : null;
  if (s !== null) {
    let c = await M(h(n)).catch(() => h(n)),
      { spelling: y, verdict: w } = await vn(s, c, e);
    return w === "local" ? V(y, e, o - 1, r) : n;
  }
  let u = h(n);
  if (u === n) return n;
  let l = await V(u, e, o, r + 1);
  return l === null ? null : _(l, Sn(n));
}
var INo = 256;
function iun(n, e) {
  return e > INo || n.length > 32767;
}
function Dn(n) {
  return O() === "macos" && Mg("/dev/fd", n);
}
async function ONo(n, e) {
  let o = await Promise.all(
      L(e.filter((i) => i !== null)).map(async (i) => ({ path: i, reachable: await W(i, n) }))
    ),
    r = o.find(({ reachable: i }) => i === !0);
  if (r !== void 0) return r.path;
  return o.some(({ reachable: i }) => i === null) ? null : void 0;
}
function bn(n) {
  return /^[A-Za-z]:[\\/][^:]*$/.test(n);
}
function aun(n) {
  return O() === "windows" && !bn(n);
}
function zBt(n, e, { pattern: o = !1 } = {}) {
  let r = O() === "windows";
  return j(an(n, r), e, r, o);
}
function an(n, e) {
  return e ? P1t(X(LO(mZe(n)))) : P1t(n).replace(/^\/\/+/, "/");
}
function MNo(n, e, o) {
  let r = O() === "windows";
  if (rdr(n, r)) return { spelling: n, verdict: "opaque" };
  let { isAbsolute: i, join: s } = r ? b : F,
    u = i(n) ? n : s(e, n);
  return j(r ? X(LO(u)) : u, o, r);
}
async function vn(n, e, o) {
  let r = O() === "windows";
  if (rdr(n, r)) return { spelling: n, verdict: "opaque" };
  let { isAbsolute: i, join: s } = r ? b : F,
    u = i(n) ? n : s(e, n);
  return dn(r ? X(LO(u)) : u, o, r);
}
async function dn(n, e, o) {
  let r = J(n, e, o);
  return "verdict" in r ? r : K(r.spelling, await sF(Db, r.spelling, { anchor: e, ...Y }), e);
}
function j(n, e, o, r = !1) {
  let i = J(n, e, o, r);
  return "verdict" in i ? i : K(i.spelling, Im(Db, i.spelling, { anchor: e, ...Y }), e);
}
async function mHe(n, e) {
  let o = O() === "windows",
    r = J(an(n, o), e, o);
  return "verdict" in r ? r : K(r.spelling, await sF(Db, r.spelling, { anchor: e, ...Y }), e);
}
var Y = { unreadableAncestry: "unverified", literalLinkText: "opaque" };
function J(n, e, o, r = !1) {
  if (o) {
    let c = b.normalize(n);
    if (/^[\\/]{2}[.?](?:[\\/]|$)/.test(c)) return { spelling: c, verdict: "opaque" };
    if (zs(c) && k6(c, e)) return { spelling: c, verdict: "foreign" };
  }
  let i = (o ? b : F).resolve(n);
  if (!o && zy(i)) return { spelling: i, verdict: "opaque" };
  if (s_t(i, e)) return { spelling: i, verdict: "foreign" };
  let s = i.split("/"),
    u = r ? s.findIndex((c) => dd(c)) : -1,
    l = u === -1 ? i : s.slice(0, u).join("/");
  return !o && l.includes("\\") ? { spelling: i, verdict: "opaque" } : { spelling: i };
}
function s_t(n, e, o = !1) {
  if (O() === "windows") return zs(n) && k6(n, e);
  let r = n.replace(/^\/{2,}/, "/"),
    i = $Ye(e);
  return (
    Yn(r) ||
    $Ye(r).some((s) => !i.includes(s)) ||
    (In(r) && ((o && cn(r)) || (!Mg(r, e) && !Mg(e, r)))) ||
    aJr(r, e)
  );
}
function K(n, e, o) {
  if (e === void 0) return { spelling: n, verdict: "local" };
  if (e === n)
    return s_t(n, o) ? { spelling: n, verdict: "foreign" } : { spelling: n, verdict: "unreadable" };
  if (e === Gy) return { spelling: n, verdict: "unreadable" };
  if (e === rit) return { spelling: n, verdict: "opaque" };
  return { spelling: n, verdict: "linked", via: e };
}
function gHe({ spelling: n, verdict: e, via: o }, r) {
  if (e === "foreign") return [n];
  return O() === "windows"
    ? L([...An, ...[n, r, o ?? ""].filter(Yn).map((i) => b.parse(i).root)])
    : ["/"];
}
function cn(n) {
  return Yw(n) || /^\/network(?:\/servers)?$/i.test(F.resolve("/", n));
}
function In(n) {
  return Sg(n) && !gl(n);
}
var An = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ", (n) => `${n}:\\`);
function X(n) {
  let e = /^[\\/]{2}\.(?:[\\/](.*))?$/s.exec(n);
  if (e === null) return n;
  let o = (e[1] ?? "").split(/[\\/]+/).reduce((s, u) => {
      if (u === "..") s.pop();
      else if (u !== "" && u !== ".") s.push(u);
      return s;
    }, []),
    [r = "", ...i] = o;
  if (/^[A-Za-z]:$/.test(r)) return `${r}\\${i.join("\\")}`;
  if (r.toUpperCase() === "UNC" && i.length >= 2) return `\\\\${i.join("\\")}`;
  return `\\\\.\\${o.join("\\")}`;
}
function fn(n) {
  return process.getuid === void 0 || n === process.getuid();
}
async function gn(n) {
  return _n(n, wn.W_OK).then(
    () => !0,
    (e) => !["EACCES", "EROFS", "EPERM"].includes(E(e) ?? "")
  );
}
async function VVs(n, e) {
  return !e.isDirectory() && e.nlink > 1 && (fn(e.uid) || (await gn(n)));
}
function mn(n) {
  return n.isDirectory() && n.ino !== 0n ? `${n.dev}:${n.ino}` : void 0;
}
var xn = 40;
async function W(n, e, o = xn, r = { secondNames: !0 }) {
  let { nestedRoot: i, replaceable: s, lands: u, asksForAnotherHost: l } = kn(e);
  if (hn(n, e)) return !0;
  if (O() === "windows" && n !== C(n)) return W(C(n), e, o, r);
  let { root: y } = Tn(n),
    w = Ln(n, y),
    m = y,
    N = !1;
  for (let [v, P] of w.entries()) {
    if (P === "..") {
      if (N) return !0;
      m = h(m);
      continue;
    }
    let f = _(m, P);
    if (s(f) || l(f)) return !0;
    let { entry: I, alias: S } = await Cn(f, e, r.secondNames);
    switch (I) {
      case null:
        return null;
      case "device":
        return i(f);
      case "shared":
        return !0;
      case "shared_if_writable":
        if (await gn(f)) return !0;
        ((N = S !== void 0 && S !== f), (m = S ?? f));
        break;
      case "sealed":
        ((N = !1), (m = f));
        break;
      case "absent":
        return u(C(f, ...w.slice(v + 1)));
      case "link": {
        if (i(f)) return !0;
        let A = await tn(f).catch(() => null);
        if (A === null || o === 0) return null;
        let x = Mn(f, A);
        if (x === null) return !0;
        let k = [XTe(m, x), ...w.slice(v + 1)];
        return W(k.join(p), e, o - 1, r);
      }
      case "entry":
        ((N = S !== void 0 && S !== f), (m = S ?? f));
    }
  }
  return u(m);
}
function Ln(n, e) {
  return n
    .slice(e.length)
    .split(p === "/" ? /\/+/ : /[\\/]+/)
    .filter((o) => o !== "" && o !== ".");
}
function kn(n) {
  let e = (i) => n.roots.some((s) => Mg(s, i)),
    o = (i) => n.roots.some((s) => Mg(s, i) && Mg(i, s)),
    r = (i) => n.fixed.includes(i);
  return {
    inside: e,
    kept: r,
    nestedRoot: (i) => o(i) && !r(i) && n.roots.some((s) => Mg(s, i) && !Mg(i, s)),
    replaceable: (i) => e(i) && !o(i) && !r(i),
    lands: (i) => e(i) && !r(i),
    asksForAnotherHost: (i) => n.roots.every((s) => s_t(i, s))
  };
}
function hn(n, e) {
  return !D(n) || aun(n) || e.roots.every((o) => s_t(n, o, !0)) || n.includes("\uFFFD");
}
async function Cn(n, e, o) {
  let r;
  return {
    entry: await B(n, { bigint: !0 }).then(
      (s) => {
        let u = mn(s);
        return (
          (r = u === void 0 ? void 0 : e.ids.get(u)),
          s.isSymbolicLink()
            ? "link"
            : s.isCharacterDevice()
              ? "device"
              : o && !s.isDirectory() && s.nlink > 1n
                ? fn(Number(s.uid))
                  ? "shared"
                  : "shared_if_writable"
                : "entry"
        );
      },
      (s) => {
        let u = E(s);
        return u === "ENOENT" || u === "ENOTDIR"
          ? "absent"
          : ["EACCES", "EPERM"].includes(u ?? "")
            ? "sealed"
            : null;
      }
    ),
    alias: r
  };
}
function Mn(n, e) {
  let o = O() === "windows",
    r = o ? /^[A-Za-z]:/.exec(n)?.[0] : void 0;
  if (o && /^[A-Za-z]:(?![\\/])/.test(e)) return null;
  let i = r !== void 0 && /^[\\/](?![\\/])/.test(e) ? `${r}${e}` : e;
  return i.includes("\uFFFD") ? null : i;
}
function lun(n) {
  let e = V6n(n);
  return e === null ? void 0 : /^gitdir: (.+)$/s.exec(e)?.[1];
}
function V6n(n) {
  if (n === void 0) return null;
  let e = n.replace(/[\r\n]+$/, "");
  return e === "" || /[\r\n\0\uFFFD]/.test(e) ? null : e;
}
function XTe(n, e) {
  return D(e) ? e : `${n}${p}${e}`;
}
function Mg(n, e) {
  if (!D(e)) return !1;
  let o = O(),
    r = o === "macos" || o === "windows",
    i = (l) => (r ? l.normalize("NFC").toLowerCase() : l),
    s = Nn(i(n), i(e)),
    u = s === ".." || s.startsWith(`..${p}`) || s.startsWith("../");
  return s === "" || (!u && !D(s));
}
var z = ["projectSettings", "localSettings"],
  Un = ["CLAUDE_CODE_TMPDIR", "TMPDIR", "TEMP", "TMP"],
  hze = [
    "CLAUDE_CONFIG_DIR",
    "HOME",
    "USERPROFILE",
    "HOMEDRIVE",
    "HOMEPATH",
    "CLAUDE_CODE_USE_COWORK_PLUGINS"
  ],
  DNo = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"],
  HNo = [...DNo, ...hze, ...Un, "XDG_CONFIG_HOME", "PATH", ...o_t];
function FFr() {
  return gT() === void 0 && VH() !== void 0 ? [...z, "flagSettings"] : z;
}
function Hn() {
  let n = FFr();
  return Is.filter((e) => !n.includes(e) && Qt(e));
}
function qVs(n, e = "unknown") {
  let o = FFr().includes("flagSettings") ? VH() : void 0,
    r = o === void 0 ? [] : [q(o, iie())],
    i = [
      ...z.map((l) => ({ tier: l, file: ln(l) })),
      { tier: "localSettings", file: Fh() }
    ].flatMap(({ tier: l, file: c }) =>
      c === void 0 ? [] : [{ tier: l, file: c, names: q(c, void 0, e) }]
    ),
    s = [U(n.workTree, ".claude", "settings.json"), U(n.workTree, ".claude", "settings.local.json")]
      .filter((l) => !i.some(({ file: c }) => c === l))
      .map((l) => q(l, void 0, e)),
    u = i.map(({ names: l }) => l);
  if ([...r, ...u, ...s].includes(null)) return null;
  return [...r, ...i.filter(({ tier: l }) => !dP() && !qrt(l)).map(({ names: l }) => l)].flatMap(
    (l) => l ?? []
  );
}
function q(n, e, o = "unknown") {
  let {
    settings: r,
    errors: i,
    textRead: s
  } = e === void 0 ? n4e(n, new Map()) : { ...aE(n, e), textRead: void 0 };
  if (r === null && i.length === 0) return [];
  return r === null || i.some((u) => u.severity !== "warning") ? null : Object.keys(r.env ?? {});
}
function Bn(n) {
  let e = {};
  for (let o of n)
    try {
      let r = pe(o)?.env;
      if (r) {
        let i = Ko(r, (s) => typeof s === "string");
        Object.assign(e, s5(i, o));
      }
    } catch {}
  return e;
}
function dun() {
  let n = tm(),
    e = n === void 0 || hze.every((o) => Pi(process.env, o) === Pi(n, o));
  return { ...toe(), ...(e ? Bn(Hn()) : {}) };
}
function q6n(n) {
  let e = tm();
  if (e === void 0) return;
  let o = dun(),
    r = hze;
  return n.find((i) => {
    let s = Pi(process.env, i);
    return s !== Pi(e, i) && (r.includes(i) || s !== Pi(o, i));
  });
}
function i_t(n) {
  let e = tm();
  if (e === void 0) return n;
  let o = dun(),
    r = hze,
    i = new Set(
      Object.keys(n).filter((s) => {
        let u = n[s];
        return (
          u !== void 0 &&
          u !== Pi(e, s) &&
          (r.includes(s.toUpperCase()) || u !== Pi(o, s)) &&
          o5(s, u)
        );
      })
    );
  if (i.size === 0) return n;
  return {
    ...Ko(n, (s, u) => !i.has(u)),
    ...Object.fromEntries(
      [...i].flatMap((s) => {
        let u = Pi(e, s);
        return u === void 0 ? [] : [[s, u]];
      })
    )
  };
}
function LNo() {
  let n = sn(),
    e = tm();
  if (e === void 0) return n;
  let o = pn(e);
  if (o === void 0) return n;
  let r = Gn(jd()),
    i = U(o, r),
    s = Buffer.byteLength(i) <= zar ? i : U(yn(e) ?? o, r);
  return L([...n, i, s]);
}
function Hde() {
  let n = tm();
  if (n !== void 0 && G.snapshot === n) return G.roots;
  let e = n ?? process.env,
    i = [
      Pi(e, "HOME") ||
        (O() === "windows"
          ? Pi(e, "USERPROFILE") ||
            (Pi(e, "HOMEDRIVE") && Pi(e, "HOMEPATH")
              ? `${Pi(e, "HOMEDRIVE")}${Pi(e, "HOMEPATH")}`
              : void 0)
          : void 0),
      pn(e)
    ]
      .filter((u) => u !== void 0 && u !== "")
      .map((u) => {
        let l = zBt(u, u);
        if (l.verdict !== "local")
          return (
            t(
              `[repositorySettings] start root ${u} cannot be vouched for (${l.verdict}): it exempts nothing`,
              { level: "warn" }
            ),
            { roots: [], transient: l.verdict === "unreadable" }
          );
        try {
          let c = Fn(l.spelling);
          return { roots: L([u, l.spelling, c]), transient: !1 };
        } catch {
          return { roots: [u, l.spelling], transient: !1 };
        }
      }),
    s = L(i.flatMap(({ roots: u }) => u));
  if (n !== void 0 && !i.some(({ transient: u }) => u)) ((G.snapshot = n), (G.roots = s));
  return s;
}
var G = ve({ snapshot: void 0, roots: [] }, (n) => {
  ((n.snapshot = void 0), (n.roots = []));
});
function pn(n) {
  return En(Pi(n, "CLAUDE_CODE_TMPDIR") || void 0) ?? yn(n);
}
function yn(n) {
  let e = (r) => Pi(n, r) || void 0,
    o = "/tmp";
  return En(e("TMPDIR") ?? e("TMP") ?? e("TEMP") ?? "/tmp");
}
function En(n) {
  return n !== void 0 && n.length > 1 ? n.replace(/[\\/]+$/, "") : n;
}
function cun(n) {
  return n !== void 0 && STt(n);
}
function Y7e(n, e) {
  if (cun(n)) {
    if (cTt().some((y) => y.toUpperCase() === "BUN_OPTIONS")) return "--install=disable";
    let o = j5(e, "BUN_OPTIONS"),
      r = e[o],
      i = Pi(dun(), "BUN_OPTIONS"),
      s = Pi(tm() ?? {}, "BUN_OPTIONS"),
      u =
        r === void 0 ||
        r === i ||
        (i === void 0 && (r === s || !o5(o, r)) && r !== RYr("BUN_OPTIONS")),
      l = i ?? s,
      c = u ? r : l !== void 0 && !Swn("BUN_OPTIONS", l) ? l : void 0;
    return c ? `--install=disable ${c}` : "--install=disable";
  }
  return;
}
function NNo(n, e) {
  for (let o of Object.keys(n)) if (o.toUpperCase() === "BUN_OPTIONS") delete n[o];
  n.BUN_OPTIONS = e;
}
function LQ(n, e, o) {
  {
    let r = Y7e(n, o);
    if (r === void 0) return;
    if (e[j5(e, "BUN_OPTIONS")] !== o[j5(o, "BUN_OPTIONS")])
      t(
        `Plugin ${n} set BUN_OPTIONS for a program it starts; Claude Code replaced it, because programs of Anthropic Directory plugins run with Bun's automatic install off and must ship the packages they import`
      );
    NNo(e, r);
  }
}
export {
  o_t,
  xNo,
  zVs,
  PNo,
  K6n,
  pHe,
  $Fr,
  KVs,
  INo,
  iun,
  ONo,
  aun,
  zBt,
  MNo,
  mHe,
  s_t,
  gHe,
  VVs,
  lun,
  V6n,
  XTe,
  Mg,
  hze,
  DNo,
  HNo,
  FFr,
  qVs,
  dun,
  q6n,
  i_t,
  LNo,
  Hde,
  cun,
  Y7e,
  NNo,
  LQ
};

//# sourceMappingURL=chunk-ssq884a9.js.map
