// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Gvt, W_n, uf, jt } from "./chunk-ajtyjx88.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { F, L, nt, ye } from "./chunk-wrtp8qz8.js";
import { d, E } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { Bu, rn } from "./chunk-xc1j8sdj.js";
import { bt, Kg, _, h6, Ms, t } from "./chunk-4kxznmzw.js";
import { I, re } from "./chunk-a16y5hcz.js";
import { PI, AM, Dfe } from "./chunk-dc0nzty2.js";
import { jr, zt } from "./chunk-brszmkb3.js";
import { fe } from "./chunk-xe386mry.js";
import { Ap } from "./chunk-v4kbwz0z.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { Uy } from "./chunk-4nzy53ma.js";
import { yM } from "./chunk-5rw2zfa0.js";
import { Mt, hi } from "./chunk-adv24f35.js";
import { IZ } from "./chunk-d54avynm.js";
import { wb, at, qt } from "./chunk-at88wjsn.js";
import { I0 } from "./chunk-znkwh1rm.js";
import { tn } from "./chunk-wany0nxw.js";
import { Att, Xc, TKe } from "./chunk-cr7a2cdd.js";
import { Zp, qyt } from "./chunk-w35wpr7b.js";
import { rce, C1r, Rbt, _2e, YHe, V1, b2e, r_ } from "./chunk-d5zj5299.js";
import { aO, kk, Yvo, Ck, a2n, Z0t, zNs } from "./chunk-j0tbz6ra.js";
import { Mqs, W1, b3n } from "./chunk-frrn501g.js";
import { U2e, Pd, oo } from "./chunk-39ayby14.js";
import { c3e } from "./chunk-fydq2gm2.js";
import { oU, kO, sU, zK } from "./chunk-6h7ejyet.js";
import { cre, EKs, kKs } from "./chunk-s4n2rnah.js";
import { wh, ybr, d3e } from "./chunk-pxfm2rr2.js";
import { Obr, Mdo, fHn, pJt, ybs, Mbr } from "./chunk-fkbes5mr.js";
import { vc } from "./chunk-5ns6j8e0.js";
import { zL } from "./chunk-gceqyggc.js";
import { Ca } from "./chunk-87f056s4.js";
import { Up } from "./chunk-t1ptejf0.js";
import { o, v, M, oe, T, u, Ue, B, A } from "./chunk-0bqrj5ah.js";
import { Mb, et } from "./chunk-c9re0p40.js";
import { en } from "./chunk-rc7xvf0x.js";
import { Ce, $r } from "./chunk-a2y39866.js";
var tJt = {};
$r(tJt, { MAX_CARD_FILES: () => ddo, default: () => tJt });
import { resolve as qu } from "path";
var dp = (e) => (e.kind === "needs-manifest" ? e.draft : void 0);
import { realpath as em } from "fs/promises";
import { join as rm, resolve as om } from "path";
import { dirname as cp, join as hp } from "path";
var po = aO(cp(hp(Zp)));
function mo(e) {
  let r = e instanceof Error ? e.cause : void 0;
  return [d(e), typeof r === "string" ? r : ""].filter(Boolean);
}
var gp = (e, r) => ({ kind: e, details: r });
var l = (e, r = []) => ({ kind: "refused", refusal: gp(e, r) });
var j = (e) => e.catch((r) => l("unreadable", mo(r)));
import { rm as bp } from "fs/promises";
var xp = 3;
var yp = 100;
async function Ie(e, r = xp) {
  let s = await bp(e, { recursive: !0, force: !0 }).then(
    () => {
      return;
    },
    (n) => n
  );
  if (s === void 0) return;
  if (r > 0) return (await X(yp), Ie(e, r - 1));
  t(`A copy made to validate a plugin could not be removed: ${E(s) ?? "no code"}`, {
    level: "warn"
  });
}
var te = () => Error("The copy to validate was ended as the process ends");
var Ne = (e, r) => e.path.localeCompare(r.path, "en");
var Fe = 1e4;
import { readdir as Qp } from "fs/promises";
import { join as Yp } from "path";
import { lstat as Sp } from "fs/promises";
var Rp = (e) =>
  (e.isSymbolicLink() && "link") ||
  (e.isDirectory() && "folder") ||
  (e.isFile() && "file") ||
  "special";
async function Op(e) {
  let r = await Sp(e);
  return { path: e, kind: Rp(r), bytes: r.size, mode: r.mode, links: r.nlink };
}
var ze = 32;
import { join as Ep } from "path";
var xo = ".gitignore";
var So = Ce(rce(), 1);
import { join as Lp } from "path";
var Pp = (e) =>
  e
    .split(/\r?\n/)
    .map((r, s) => ({ line: r, named: `line ${s + 1}: ${r}` }))
    .find((r) => C1r(r.line) !== null)?.named;
import { lstat as vp } from "fs/promises";
var _p = Object.freeze(["ENOENT", "ENOTDIR"]);
var Ro = (e) => _p.includes(E(e) ?? "");
var wp = (e) =>
  vp(e).then(
    () => Promise.reject(Error("A .gitignore here cannot be read")),
    (r) => (Ro(r) ? "" : Promise.reject(r))
  );
async function Oo(e) {
  let r = Lp(e, xo),
    s = (await sU(r)) ?? (await wp(r)),
    n = Pp(s);
  if (n !== void 0) throw Error("A .gitignore line cannot be read", { cause: `${r} ${n}` });
  let a = Rbt(s);
  return a.length > 0 ? [{ base: e, rules: So.default().add(a) }] : [];
}
async function Tp(e, r) {
  let s = Ep(e, xo);
  if (r.some((a) => a.path === s && a.kind === "file" && a.links > 1))
    throw Error("A .gitignore here cannot be read", { cause: s });
  return Oo(e);
}
import { relative as Ip } from "path";
var K = (e, r) => aO(Ip(e, r.path));
import { basename as jp } from "path";
import { basename as Mp } from "path";
var _o = Object.freeze([".mcp.json"]);
var kp = (e, r) => !_o.includes(r) && (W1(`/${r}`) || W1(`/${Mp(e)}/${r}`) || b3n(`/${r}`));
import { dirname as Dp, join as Fp } from "path";
var Np = Object.freeze({ file: "", folder: "/", link: "", special: "" });
var Lo = (e, r) =>
  e
    .toReversed()
    .map(({ base: s, rules: n }) => n.test(K(s, r) + Np[r.kind]))
    .find((s) => s.ignored || s.unignored)?.ignored ?? !1;
function zp(e, r, s) {
  let n = Fp(e, Zp),
    a = Dp(n);
  return (
    !(s.path === n || s.path === a) &&
    (Lo(r.scope, s) ||
      (r.path === a &&
        Lo(
          r.scope.filter((f) => f.base !== a),
          { ...s, path: a, kind: "folder" }
        )))
  );
}
import { basename as Mo } from "path";
var Cp = [...a2n, ".hg", ".svn", ".jj", ".sl", ".bzr"];
function Hp(e) {
  let r = [Mo(e.path), ...Mqs(Mo(e.path))];
  return (
    (e.kind === "folder" && r.some((s) => s.endsWith(".git"))) || r.some((s) => Cp.includes(s))
  );
}
var Bp = (e, r, s) =>
  Mdo([
    s.kind === "link" && "link",
    s.kind === "special" && "special",
    s.kind === "file" && s.links > 1 && "hard-link",
    jp(s.path).includes("\\") && "backslash",
    Hp(s) && "never",
    Z0t(e, s.path) && "generated",
    kp(e, K(e, s)) && "secret",
    zp(e, r, s) && "ignored"
  ]);
function Kp(e, r, s) {
  let n = Bp(e, r, s);
  return n === void 0 ? [] : [{ path: K(e, s), why: n }];
}
var Fo = 33188;
var qp = 73;
var Co = 33261;
function Xp(e) {
  return (e.mode & qp) !== 0 ? Co : Fo;
}
var $p = (e, r) => ({ path: K(e, r), bytes: r.bytes, mode: Xp(r) });
function Gp(e, r, s) {
  let n = s.flatMap((m) => Kp(e, r, m)),
    a = new Set(n.map((m) => m.path)),
    f = s.filter((m) => !a.has(K(e, m)));
  return {
    files: f.filter((m) => m.kind === "file").map((m) => $p(e, m)),
    leftOut: n,
    folders: f.filter((m) => m.kind === "folder").map((m) => ({ path: m.path, scope: r.scope }))
  };
}
async function Vp(e, r) {
  let s = Ca(ze, (a) => Op(Yp(r.path, a))),
    n = await Promise.all((await Qp(r.path)).toSorted().map(s));
  return Gp(e, { path: r.path, scope: r.scope.concat(await Tp(r.path, n)) }, n);
}
import { dirname as Jp } from "path";
function Bo(e) {
  let r = Jp(e);
  return r === e ? [e] : [e, ...Bo(r)];
}
import { lstat as ef } from "fs/promises";
import { join as rf } from "path";
var of = (e) =>
  ef(rf(e, ".git")).then(
    () => !0,
    (r) => (Ro(r) ? !1 : Promise.reject(r))
  );
async function tf(e) {
  let r = Bo(e);
  for (let [s, n] of r.entries()) if (await of(n)) return r.slice(1, s + 1).toReversed();
  return [];
}
var sf = async (e) => (await Promise.all((await tf(e)).map(Oo))).flat();
async function Xe(e) {
  let r = [],
    s = [],
    n = [{ path: e, scope: await sf(e) }];
  for (let a of n) {
    if (r.length > Fe) break;
    let m = await Vp(e, a);
    (r.push(...m.files), s.push(...m.leftOut), n.push(...m.folders));
  }
  return { files: r.toSorted(Ne), leftOut: s.toSorted(Ne) };
}
import { mkdir as vf, mkdtemp as wf } from "fs/promises";
import { basename as Lf, join as ut } from "path";
import { mkdir as bf, writeFile as Rf } from "fs/promises";
import { dirname as Af, join as it } from "path";
var Go = 448;
var nf = 384;
import { join as yf } from "path";
import { lstat as pf, realpath as ff } from "fs/promises";
var af = !1;
var Vo = 1n;
var Zo = Object.freeze({ bigint: !0 });
async function mf(e, r, s) {
  let n = await ff(r).catch(() => e),
    f = Up(e, n, af)
      ? await pf(n, Zo).catch(() => {
          return;
        })
      : void 0;
  return f?.ino === s.ino && f.dev === s.dev && f.nlink === Vo;
}
import { open as df } from "fs/promises";
var lf = Object.freeze(["ENOENT", "ENOTDIR", "ELOOP", "EISDIR"]);
var cf = (e) => df(e, vc()).catch((r) => (lf.includes(E(r) ?? "") ? void 0 : Promise.reject(r)));
import { lstat as hf } from "fs/promises";
import { dirname as gf } from "path";
var xf = async (e, r) =>
  (await kO(e, gf(r))) === "ok" &&
  (
    await hf(r).catch(() => {
      return;
    })
  )?.isFile() === !0;
async function Ye(e, r) {
  let s = yf(e, r.path),
    a = (await xf(e, s)) ? await cf(s) : void 0;
  try {
    let f = await a?.stat(Zo),
      h =
        f?.isFile() === !0 && f.size === BigInt(r.bytes) && f.nlink === Vo && (await mf(e, s, f))
          ? await a?.readFile()
          : void 0;
    return h?.length === r.bytes ? h : void 0;
  } finally {
    await a?.close();
  }
}
async function Sf(e, r, s) {
  let n = await Ye(e, s);
  if (n === void 0) return;
  return (
    await bf(Af(it(r, s.path)), { recursive: !0, mode: Go })
      .then(() => Rf(it(r, s.path), n, { flag: "wx", mode: nf }))
      .catch((a) =>
        Promise.reject(
          Error("A file could not be copied to be validated", {
            cause: `${E(a) ?? ""} ${s.path}`.trim()
          })
        )
      ),
    et(n)
  );
}
async function Of(e, r, s) {
  (e.abort(), await r, await s());
}
var Pf = (e, r) => Object.fromEntries(e.map((s, n) => [s.path, r[n] ?? ""]));
var _f = (e, r, s) => ({ home: e, dir: r, hashes: s });
async function Ef(e, r) {
  if (Kg()) return Promise.reject(te());
  let s = await wf(ut(Ap(), "claude-publish-")).catch((R) =>
      Promise.reject(
        Error("A folder to validate a copy in could not be made", { cause: E(R) ?? "" })
      )
    ),
    n = wb(() => Ie(s));
  if (Kg()) return (await n(), Promise.reject(te()));
  let a = ut(s, "copy", Lf(e)),
    f = new AbortController(),
    m = Promise.resolve()
      .then(() => vf(a, { recursive: !0, mode: Go }))
      .catch(() => {
        return;
      })
      .then(() =>
        Promise.allSettled(
          r.map(
            Ca(ze, (R) =>
              f.signal.aborted
                ? Promise.resolve(void 0)
                : Sf(e, a, R).catch((O) => (f.abort(), Promise.reject(O)))
            )
          )
        )
      );
  using h = bt(() => Of(f, m, n));
  let g = await m,
    b = g.find((R) => R.status === "rejected"),
    y = r.find((R, O) => g[O]?.status === "fulfilled" && !g[O].value);
  if (
    (await (b === void 0 && y === void 0 && !f.signal.aborted ? void 0 : n()),
    b?.status === "rejected")
  )
    return Promise.reject(b.reason);
  if (f.signal.aborted) return (await n(), Promise.reject(te()));
  if (y !== void 0) return { missed: y.path };
  return _f(
    s,
    a,
    Pf(
      r,
      g.map((R) => (R.status === "fulfilled" ? R.value : void 0))
    )
  );
}
var Ve = (e) => l("changed", [`${e.missed} is not the file that was listed`]);
function Tf(e, r) {
  let s = new Set(e.listing.files.map((n) => n.path));
  return [
    ...e.listing.files
      .filter((n) => !Object.hasOwn(r.hashes, n.path))
      .map((n) => "Among the files to send only since the folder was read: " + n.path),
    ...Object.keys(r.hashes)
      .filter((n) => !s.has(n))
      .map((n) => "No longer among the files to send since the folder was read: " + n),
    ...e.listing.files
      .filter((n) => Object.hasOwn(r.hashes, n.path) && e.hashes[n.path] !== r.hashes[n.path])
      .map((n) => `${n.path} is not the file that was listed`)
  ].slice(0, 1);
}
function If(e, r) {
  let s = e.kind === "ready" ? Tf(e, r) : [];
  return s.length === 0 &&
    (e.kind !== "ready" || e.listing.files.length === Object.keys(r.hashes).length)
    ? e
    : l("changed", s);
}
import { basename as Mf } from "path";
var me = (e) =>
  e
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "") || "plugin";
function kf(e) {
  let r = c3e(me(Mf(e)));
  return r?.severity === "error" ? [`${r.message} The name comes from the folder: rename it.`] : [];
}
import { basename as Ff } from "path";
var xt = 300;
var Nf = (e) => e && Mt(e, xt);
var Df = "0.1.0";
var zf = (e, r) => `${_({ name: me(Ff(e)), version: Df, description: Nf(r) }, null, 2)}
`;
var Cf = (e, r) => ({ kind: "needs-manifest", root: e, draft: zf(e, r) });
var Uf = (e) => e.flatMap((r) => r.errors.map((s) => `${r.filePath}: ${s.path}: ${Ms(s.message)}`));
import { join as jf } from "path";
var Hf = (e) => ({ name: e.name, version: e.version, description: e.description });
var Wf = p(() => u({ name: o(), version: o().optional(), description: o().optional() }));
async function Bf(e) {
  let r = await zK(jf(e, Zp)),
    s = Wf().safeParse(ot(r.kind === "ok" ? r.content : ""));
  if (r.kind === "absent") return "absent";
  return s.success ? Hf(s.data) : "unreadable";
}
function Kf(e, r) {
  return e !== void 0 && r !== void 0 ? [[e.path, et(r)]] : [];
}
async function Lt(e, r, s) {
  let n = await Promise.all(e.map(Ca(ze, r))),
    a = e.find((m, h) => n[h] === void 0);
  return a === void 0 ? n.flatMap((m, h) => s(e[h], m)) : { missed: a.path };
}
async function qf(e, r) {
  let s = await Lt(r, (n) => Ye(e, n), Kf);
  return "missed" in s ? s : { hashes: Object.fromEntries(s) };
}
var Tt = (e) => e.files.map((r) => r.path).filter((r) => `/${r}`.endsWith(`/${aO(Zp)}`));
var rr = 52428800;
function It(e, r) {
  let s = Tt(e);
  if (s.length > 1) return l("findings", [`More than one manifest: ${s.join(", ")}`]);
  if (e.files.length > Fe) return l("too-many-files");
  return r > rr ? l("too-large") : void 0;
}
async function kt(e, r) {
  let s = await Xe(e),
    n = s.files.reduce((h, g) => h + g.bytes, 0),
    a = It(s, n);
  if (a !== void 0) return a;
  let f = await qf(e, s.files);
  return "missed" in f
    ? Ve(f)
    : { kind: "ready", root: e, manifest: r, listing: s, bytes: n, hashes: f.hashes };
}
import { basename as Ct, dirname as Ut } from "path";
var Xf = [
  " ",
  "\t",
  `
`,
  '"',
  "'",
  "("
];
var $f = (e) => e.slice(0, 1 + Math.max(...Xf.map((r) => e.lastIndexOf(r))));
function Gf(e, r, s) {
  let n = e.split(r);
  return n
    .slice(0, -1)
    .map((a) => $f(a) + s)
    .concat(n.at(-1) ?? "")
    .join("");
}
function sr(e, r, s) {
  let n = Ut(r.dir),
    a = Ut(s).replace(/[\\/]$/, "");
  return [`${Ct(r.home)}/copy`, `${Ct(r.home)}\\copy`].reduce(
    (f, m) => Gf(f, m, a),
    e.replaceAll(n, () => a).replaceAll(wh(n, n.length), () => a)
  );
}
var Qf = (e, r, s) =>
  e.map((n) => ({
    ...n,
    filePath: sr(n.filePath, r, s),
    errors: n.errors.map((a) => ({ ...a, message: sr(a.message, r, s) }))
  }));
function Yf(e) {
  return e.kind === "ready" && Tt(e.listing).length === 0 ? l("unreadable", [aO(Zp)]) : e;
}
async function Vf(e, r, s) {
  let { manifest: n, contents: a } = await d3e(r.dir),
    f = n?.errors.some((y) => y.code === ybr) ?? !0,
    m = Uf(Qf(f ? a : [n ?? [], a].flat(), r, e)).concat(f ? kf(e) : []),
    h = f ? await qyt(r.dir) : n?.fileType === "plugin",
    g = await Bf(r.dir);
  if (!h) return l("not-a-plugin");
  if (m.length > 0) return l("findings", m);
  if (g === "unreadable") return l("unreadable", [aO(Zp)]);
  return g === "absent" ? Cf(e, s) : If(Yf(await kt(e, g)), r);
}
function Zf(e) {
  let r = aO(Zp);
  return e.leftOut.some((n) => n.path === r) ? l("unreadable", [r]) : void 0;
}
async function Jf(e, r) {
  let s = await Xe(e),
    n =
      Zf(s) ??
      It(
        s,
        s.files.reduce((h, g) => h + g.bytes, 0)
      );
  if (n !== void 0) return n;
  let a = await Ef(e, s.files);
  if ("missed" in a) return Ve(a);
  let f = wb(() => Ie(a.home));
  using m = bt(f);
  if (Kg()) return (await f(), Promise.reject(te()));
  try {
    return await Vf(e, a, r).catch((h) =>
      l(
        "unreadable",
        mo(h).map((g) => sr(g, a, e))
      )
    );
  } finally {
    await f();
  }
}
async function Gt(e, r) {
  let s = await em(om(fe(), e)).catch(() => {
    return;
  });
  if (!(s !== void 0 && (await oU(s)))) return l("no-folder", [e]);
  return (await kO(s, rm(s, po))) === "refused" ? l("unreadable", [po]) : j(Jf(s, r));
}
var tm = (e) => ({ path: aO(Zp), bytes: Buffer.byteLength(e.draft), mode: Fo });
import { basename as sm } from "path";
function im(e) {
  let r = IZ().safeParse(ot(e.draft));
  return {
    name: r.data?.name ?? sm(e.root),
    version: r.data?.version,
    description: r.data?.description
  };
}
var nm = (e, r) => ({ files: e.files.concat(r).toSorted(Ne), leftOut: e.leftOut });
var am = (e, r, s) => ({ ...e, [r]: et(s) });
var pm = (e, r, s) => ({
  ...e,
  bytes: e.bytes + r.bytes,
  listing: nm(e.listing, r),
  hashes: am(e.hashes, r.path, s.draft)
});
async function fm(e) {
  let r = tm(e),
    s = await kt(e.root, im(e));
  return s.kind === "ready" ? pm(s, r, e) : s;
}
async function mm(e) {
  return e.kind === "needs-manifest" ? j(fm(e)) : e;
}
async function ar(e, r) {
  let s = await Gt(e.folder, e.description),
    n = await mm(s);
  if (n.kind === "refused") return n;
  return n.kind === "ready"
    ? { wanted: e, plan: n, organization: r, draft: dp(s), withheld: !1 }
    : l("unreadable");
}
var os = Object.freeze({
  nothing: "Nothing was sent.",
  uploading:
    "The upload was on its way: look in your uploads on claude.ai, where it may have arrived. Nothing was submitted.",
  shelved: "The upload had arrived on your own shelf, where only you see it. It was not submitted.",
  submitting:
    "The upload had arrived, and its submission was on its way: it may have reached your organization."
});
function k(e, r, s) {
  return e.signal.aborted ? l("stopped", [os[s]]) : r;
}
function ts(e) {
  return e === "." || e === ".."
    ? e.replaceAll(".", "%252E")
    : encodeURIComponent(e).replaceAll(".", "%2E");
}
var lm = (e) => `/api/oauth/organizations/${ts(e.organization.id)}`;
var lr = (e, r) => `${lm(e)}/${r.map(ts).join("/")}`;
var ce = (e, r) => ({
  method: "get",
  path: lr(e, r),
  body: void 0,
  headers: {},
  bound: "clock",
  signal: e.signal
});
var um = 200;
var dm = 300;
var N = (e) => e.status >= um && e.status < dm;
var cm = 400;
var hm = 405;
var gm = 404;
var xm = 501;
var ym = 422;
var bm = Object.freeze([cm, gm, hm, ym, xm]);
var Rm = 20;
var Am = 300;
var Sm = Object.freeze(["scan", "other"]);
var Om = (e, r) =>
  [...r.findings, ...[r.message ?? ""].filter((s) => s !== "" && Sm.includes(e))]
    .slice(0, Rm)
    .map((s) => re(s, Am));
var Pm = p(() =>
  u({
    error: u({
      message: o().optional(),
      details: u({
        error_code: o().optional(),
        validation_errors: u({
          message: o().optional(),
          plugins: T(u({ name: o().optional(), error: o().optional() })).optional()
        }).optional()
      }).optional()
    }).optional()
  })
);
function ur(e) {
  let r = Pm().safeParse(e.data).data?.error,
    s = r?.details?.validation_errors;
  return {
    code: r?.details?.error_code,
    message: r?.message,
    findings: [
      s?.message ?? "",
      ...(s?.plugins ?? []).map((n) => [n.name, n.error].filter(Boolean).join(": "))
    ].filter(Boolean)
  };
}
function ge(e, r) {
  let s = ur(e),
    n = r.codes[s.code ?? ""] ?? r.statuses[e.status] ?? "other";
  return l(n, Om(n, s));
}
var _m = Object.freeze({});
var vm = 120000;
var wm = 15000;
var Lm = Object.freeze({ get: wm, post: vm });
function Em(e) {
  return e.bound === "progress" ? { streamUpload: _m } : { timeout: Lm[e.method] };
}
var Tm = (e) => ({ ...e.headers, "anthropic-beta": Bu });
var Im = 4194304;
var _s = (e) => ({
  auth: "teleport-org",
  headers: Tm(e),
  ...Em(e),
  signal: e.signal,
  maxBodyLength: Buffer.byteLength(e.body ?? ""),
  maxContentLength: Im,
  maxRedirects: 0,
  validateStatus: () => !0
});
function Mm(e) {
  return e.method === "get" ? jt.get(e.path, _s(e)) : jt.post(e.path, e.body, _s(e));
}
var Ls = Object.freeze({ status: 0, data: void 0 });
function km(e, r) {
  return (
    t(`plugin publish: ${e.method} ${e.path} got no answer: ` + d(r), { level: "error" }),
    Ls
  );
}
var Nm = Object.freeze({
  "data-residency": "third-party",
  "essential-traffic-only": "traffic-off",
  "no-auth": "signed-out"
});
async function xe(e) {
  let r = await Mm(e).catch((n) => km(e, n));
  return "status" in r ? { status: r.status, data: r.data } : l(Nm[r.reason] ?? "other");
}
var Dm = Object.freeze([
  "plugin_upload_conflict",
  "plugin_previous_save_scanning",
  "plugin_upload_busy",
  "plugin_content_scan_rate_limited",
  "org_library_submission_conflict",
  "org_library_submission_source_changed"
]);
var Fm = 429;
var zm = 503;
var Cm = Object.freeze([Fm, zm]);
var Um = (e, r) =>
  (e.method === "get" && r.status === Ls.status) ||
  Cm.includes(r.status) ||
  Dm.includes(ur(r).code ?? "");
var Hm = 3;
var Wm = 2000;
async function Y(e, r = Hm) {
  let s = await xe(e);
  if (!(r > 0 && !e.signal.aborted && "status" in s && Um(e, s))) return s;
  return (await X(Wm, e.signal), Y(e, r - 1));
}
var Us = (e) => [e, ...Object.values(Object(e))].find(Array.isArray) ?? [];
var Hs = p(() =>
  u({
    uuid: o().optional(),
    plugin_id: o().nullish(),
    plugin_name: o().nullish(),
    status: o().optional(),
    publish_state: o().nullish(),
    updates_published_plugin_id: o().nullish(),
    denial_reason: o().nullish(),
    content_scan: oe().optional(),
    outcome: u({
      published_plugin_id: o().nullish(),
      published_marketplace_id: o().nullish(),
      failure_reason: o().nullish()
    }).nullish()
  })
);
var jm = (e) =>
  Us(e).flatMap((r) => [Hs().safeParse(r)].flatMap((s) => (s.success ? [s.data] : [])));
var Bm = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_already_pending: "already-pending",
  org_library_submission_installs_for_members: "installs-for-members",
  org_library_submission_nothing_to_publish: "nothing-new",
  org_library_submission_publish_in_progress: "in-progress",
  org_library_submission_update_needs_admin: "needs-admin",
  org_library_submission_update_needs_org_settings: "needs-org-settings",
  org_library_submission_name_taken: "name-conflict",
  org_library_submission_library_full: "library-full",
  org_library_submission_update_name_mismatch: "busy",
  org_library_submission_update_target_deleted: "busy",
  org_library_submission_install_preference_requires_review: "busy",
  org_library_submission_conflict: "busy",
  org_library_submission_source_changed: "busy",
  plugin_upload_busy: "busy",
  plugin_content_scan_rate_limited: "busy",
  legal_attestation_required: "legal"
});
var Km = Object.freeze({
  0: "busy",
  401: "signed-out",
  404: "publishing-off",
  429: "busy",
  503: "busy"
});
var Ks = Object.freeze({ codes: Bm, statuses: Km });
async function qs(e) {
  let r = await Y(ce(e, ["library_submissions", "me"]));
  if ("kind" in r) return r;
  if (bm.includes(r.status)) return l("not-served");
  return N(r) ? jm(r.data) : ge(r, Ks);
}
var yr = (e) => `${rn().CLAUDE_AI_ORIGIN}/customize/plugins/` + encodeURIComponent(e);
var br = (e, r) =>
  l(e.refusal.kind, e.refusal.details.concat(`See or remove the upload: ${yr(r.id)}`));
var qm = Object.freeze({
  plugin_version_scan_pending: "scan-pending",
  plugin_version_scan_failed: "scan",
  org_library_submission_publish_not_started: "busy",
  org_library_submission_publish_timed_out: "busy",
  org_library_submission_publisher_unavailable: "busy"
});
var Xm = "claudeai-organization-library";
var $m = p(() => u({ name: o().optional(), marketplace_name: o().optional() }));
function Gm(e, r) {
  let s = $m().safeParse(e).data,
    n = Yvo(s?.marketplace_name ?? "") ?? Xm;
  return `${s?.name ?? r}@${n}`;
}
async function Qm(e, r, s) {
  let n = await xe(ce(e, ["plugins", r]));
  return Gm("status" in n ? n.data : void 0, s);
}
var Ym = 64;
var Ae = (e) => me(me(e.name).slice(0, Ym));
async function Vm(e, r, s, n) {
  let a = await Qm(e, r, Ae(e.manifest));
  return {
    kind: "published",
    manifest: e.manifest,
    isUnscanned: n,
    verdict: s.verdict,
    install: a,
    link: yr(r)
  };
}
var Zm = (e, r, s, n) => ({
  kind: r,
  manifest: e.manifest,
  isUnscanned: n,
  verdict: s.verdict,
  id: s.id
});
async function Jm(e, r, s) {
  let n = r.outcome?.published_plugin_id ?? void 0,
    a = r.publish_state === "completed" && n !== void 0,
    f = r.status === "approved" && r.publish_state === "failed",
    m = r.status === "approved";
  if (f) return l(qm[r.outcome?.failure_reason ?? ""] ?? "other");
  let h = m && a,
    g = s.scan === "none" && r.content_scan === null;
  return h ? Vm(e, n, s, g) : Zm(e, m ? "publishing" : "in-review", s, g);
}
var ri = (e, r, s) => e.find((n) => n.plugin_id === r.id && n.status === s);
var el = (e) => (e === void 0 ? "available" : void 0);
var rl = (e) => ({ kind: "plugin", id: e.id });
var ol = (e, r) => ({
  source: rl(e),
  proposed_install_preference: el(ri(r, e, "approved")),
  predecessor_uuid: ri(r, e, "denied")?.uuid
});
var tl = Object.freeze({ "Content-Type": "application/json" });
var ai = (e, r, s) => ({
  method: "post",
  path: lr(e, r),
  body: _(s),
  headers: tl,
  bound: "clock",
  signal: e.signal
});
async function sl(e, r) {
  let s = await Y(ai(e, ["library_submissions"], r));
  if ("kind" in s) return s;
  return N(s) ? (Hs().safeParse(s.data).data ?? l("other")) : ge(s, Ks);
}
var il = 40;
var mi = (e) =>
  [e.verdict ?? ""].filter(Boolean).map((r) => "Security scan on claude.ai: " + Mt(r, il));
function nl(e, r) {
  if (e.signal.aborted || r.scan === "failed") return br(k(e, l("scan", mi(r)), "shelved"), r);
  if (r.isAwaitingCurrent) return br(l("not-current"), r);
  return r.scan === "processing" ? { kind: "on-shelf", manifest: e.manifest, id: r.id } : void 0;
}
async function al(e, r, s) {
  let n = nl(e, r);
  if (n !== void 0) return n;
  let a = await sl(e, ol(r, s));
  return "kind" in a ? br(k(e, a, "submitting"), r) : Jm(e, a, r);
}
var di = "manual";
var pl = Object.freeze({ name: "My Uploads", source: di, source_url: "" });
var fl = p(() => u({ id: o().min(1), source: o().optional() }));
var ml = (e) => [e, ...Us(e)].map((r) => fl().safeParse(r).data).find((r) => r?.source === di)?.id;
var ll = Object.freeze({
  plugin_upload_already_exists: "exists",
  plugin_upload_validation_failed: "invalid",
  plugin_upload_limit_reached: "shelf-full",
  plugin_previous_save_failed_scan: "scan",
  plugin_upload_conflict: "busy",
  plugin_previous_save_scanning: "busy",
  plugin_upload_busy: "busy",
  plugin_content_scan_rate_limited: "busy",
  legal_attestation_required: "legal"
});
var ul = Object.freeze({
  0: "busy",
  401: "signed-out",
  403: "creation-off",
  413: "too-large",
  429: "busy",
  503: "busy"
});
var Ri = Object.freeze({ codes: ll, statuses: ul });
async function Ai(e, r) {
  let s = await Y(e);
  if ("kind" in s) return s;
  return N(s) ? (ml(s.data) ?? r()) : ge(s, Ri);
}
var dl = (e) =>
  Ai(ai(e, ["marketplaces", "create-account-marketplace"], pl), async () => l("other"));
var cl = 60;
var hl = (e) => ({ "Content-Type": `multipart/form-data; boundary=${e.boundary}` });
var gl = (e, r, s) => ({ ...s, archive: e, manifest: r.manifest });
var xl = Object.freeze(["pass", "warn", "unknown"]);
function yl(e, r, s) {
  let n = s ? e.content_scan === null : e.content_scan == null,
    a = r === !1 && n,
    f = Boolean(e.pending_version) && e.served !== !0,
    m = xl.includes(e.content_scan?.combined_assessment ?? "");
  return (
    Mdo([
      e.content_scan?.status === "errored" && "failed",
      !a && e.content_scan?.status !== "completed" && "processing",
      e.served === !1 && "processing",
      f && "processing",
      a && "none",
      !m && "failed"
    ]) ?? "passed"
  );
}
var bl = (e, r, s) => ({
  id: e,
  name: r.name,
  version: r.version,
  scan: yl(r, r.scan_requested ?? s?.isScanAsked, s !== void 0),
  isScanAsked: r.scan_requested ?? s?.isScanAsked,
  verdict: r.content_scan?.combined_assessment ?? r.content_scan?.status,
  isAwaitingCurrent: r.awaiting_make_current === !0 || s?.isAwaitingCurrent === !0
});
var Rl = p(() =>
  u({
    id: o().min(1).optional(),
    name: o().optional(),
    version: o().optional(),
    marketplace_id: o().optional(),
    served: M().optional(),
    pending_version: o().nullish(),
    scan_requested: M().nullish(),
    awaiting_make_current: oe().optional(),
    content_scan: u({ status: o().optional(), combined_assessment: o().nullish() }).nullish()
  })
);
function Ti(e, r) {
  let s = Rl().safeParse(e).data ?? {},
    n = r?.id ?? s.id;
  return n !== void 0 ? bl(n, s, r) : void 0;
}
var Al = (e, r, s) =>
  `${lr(r, ["marketplaces", e, "plugins", "account-upload"])}?overwrite=${String(s === "replace")}`;
import { randomUUID as Ol } from "crypto";
function Sl(e, r) {
  let s = Ae(r);
  return s !== r.name
    ? `\r
--${e}\r
Content-Disposition: form-data; name="new_name"\r
\r
` + s
    : "";
}
function Pl(e, r) {
  let s = `----PluginPublish${Ol()}`,
    n = Ae(r);
  return {
    boundary: s,
    body: Buffer.concat([
      Buffer.from(`--${s}\r
Content-Disposition: form-data; name="file"; filename="${n}.zip"\r
Content-Type: application/zip\r
\r
`),
      e,
      Buffer.from(
        Sl(s, r) +
          `\r
--${s}--\r
`
      )
    ])
  };
}
function _l(e, r, s) {
  let n = Pl(r.archive, r.manifest);
  return {
    method: "post",
    path: Al(e, r, s),
    body: n.body,
    headers: hl(n),
    bound: "progress",
    signal: r.signal
  };
}
async function Di(e, r, s) {
  let n = await Y(_l(e, r, s));
  if ("kind" in n) return n;
  if (ur(n).code === "plugin_upload_already_exists") return "exists";
  return N(n) ? (Ti(n.data, void 0) ?? l("other")) : ge(n, Ri);
}
async function vl(e, r) {
  let s = await Di(e, r, "replace");
  return s === "exists" ? l("busy") : s;
}
var wl = 5000;
async function Ll(e, r) {
  let s = await xe(ce(e, ["plugins", r.id, "scan-status"]));
  return "status" in s && N(s) ? (Ti(s.data, r) ?? r) : r;
}
var El = 300000;
async function Hi(e, r, s = { left: cl, until: Date.now() + El }) {
  if (!(
    r.scan === "processing" &&
    !r.isAwaitingCurrent &&
    !e.signal.aborted &&
    s.left > 0 &&
    Date.now() < s.until
  ))
    return r;
  return (await X(wl, e.signal), Hi(e, await Ll(e, r), { left: s.left - 1, until: s.until }));
}
var Tl = (e) => Ai(ce(e, ["marketplaces", "list-account-marketplaces"]), () => dl(e));
async function Il(e, r) {
  let s = await Di(e, r, "new");
  if (s !== "exists") return s;
  return r.mode === "replace" ? vl(e, r) : l("exists");
}
var Ml = p(() => u({ organization: u({ uuid: o(), name: o().min(1) }) }));
var kl = 5000;
async function Nl(e, r) {
  if (!W_n()) return;
  let s = await xe({
      method: "get",
      path: "/api/oauth/profile",
      body: void 0,
      headers: {},
      bound: "clock",
      signal: AbortSignal.any([r, AbortSignal.timeout(kl)])
    }),
    n = Ml().safeParse("status" in s && N(s) ? s.data : void 0).data;
  return n?.organization.uuid === e ? n.organization.name : void 0;
}
async function Dl(e, r) {
  return e.name !== void 0 ? e : { ...e, name: await Nl(e.id, r) };
}
async function zl() {
  let e = Kt(fHn() ? i.CLAUDE_CODE_ORGANIZATION_UUID : await Gvt()),
    r = uf(),
    s = r?.organizationUuid === e;
  if (e === null) return;
  return { id: e, name: (s && r?.organizationName) || void 0 };
}
async function Yi(e) {
  return e !== void 0 ? void 0 : zl();
}
var Vi = () => (fHn() ? "no-organization" : ybs());
async function Cl(e, r) {
  let s = await Yi(e);
  if (s === void 0) return l(e ?? Vi());
  let n = { organization: s, signal: r },
    a = await qs(n);
  return Array.isArray(a) ? Dl(s, r) : k(n, a, "nothing");
}
var F_s = (e) =>
  [e ?? []].flat().flatMap((r) => [
    `Writes this manifest first, to ${r.path}:`,
    ...r.text.trimEnd().split(`
`)
  ]);
function on(e) {
  return e.draft !== void 0 ? { path: aO(Zp), text: e.draft ?? "" } : void 0;
}
var Ul = (e) => F_s(on(e));
var z = 4096;
var nn = (e) => `${hi(e.path, z)} (${en(e.bytes)})`;
var $_s = (e) =>
  [e]
    .filter((r) => r > 0)
    .map(
      (r) =>
        `${r} ${I(r, "entry stays", "entries stay")} on this machine (secrets, links, ignored files)`
    );
var Hl = (e) => $_s(e.plan.listing.leftOut.length);
var Mr = (e) => Mt([e.name, e.version].filter(Boolean).join(" "));
var kr = (e) => Mt(e.organization.name ?? `organization ${e.organization.id}`);
var fn = (e) => [
  "First uploads it to your own shelf on claude.ai (My Uploads); whether it is scanned there depends on your organization",
  `Then submits it to ${kr(e)} for an administrator's review; where the organization publishes without review, it is published at once`,
  ...[Ae(e.plan.manifest)]
    .filter((r) => r !== e.plan.manifest.name)
    .map((r) => `Listed under the name ${r}`),
  ...[e.wanted.mode]
    .filter((r) => r === "replace")
    .map(() => "Replaces the plugin of this name on your shelf, if any")
];
var Wl = (e) =>
  e.plan.listing.files
    .filter((r) => _o.includes(r.path))
    .map((r) => `Sends ${r.path}: keys and tokens written in it go with it`);
var jl =
  "Entries stay behind that are neither named nor counted here: this session's rules deny reading them.";
var un = (e) => (e.withheld ? [jl] : []);
var dn = (e) => [...Wl(e), ...un(e)];
var C = (e) => ({
  question: `Publish ${Mr(e.plan.manifest)} to ${kr(e)}?`,
  lines: [
    `Folder: ${hi(e.plan.root)}`,
    `Sends ${e.plan.listing.files.length} ${I(e.plan.listing.files.length, "file")}, ` +
      en(e.plan.bytes),
    ...dn(e),
    ...Hl(e),
    ...fn(e),
    ...Ul(e)
  ],
  values: e.plan.listing.files.map(nn)
});
var Bl = 48;
var ddo = 20;
function Kl(e, r) {
  let s = e.slice(0, ddo).filter(
      (f, m) =>
        e.slice(0, m + 1).join(`
`).length +
          Bl <=
        r
    ),
    n = e.length - s.length;
  return n === 0 ? s : s.concat(`and ${n} more ${I(n, "file")} not named here`);
}
var gn = (e, r) => [C(e).question, `Organization: ${kr(e)}`, ...C(e).lines, ...r];
var ql = 1800;
function Xl(e, r) {
  let s = gn(e, r);
  return s.concat(
    Kl(
      C(e).values,
      ql -
        s.join(`
`).length
    )
  );
}
function bn(e, r) {
  let s = r.withheld
    ? "Every file, and what stays behind that is named, is listed in"
    : "Every file, and what stays behind, is listed in";
  return [e ?? ""].filter(Boolean).map((n) => `${s} ${n}`);
}
var $l = (e) => ({
  type: "other",
  reason: e.join(`
`)
});
var N_s = (e) => `${e.path} (${en(e.bytes)})`;
var ado = (e, r) => [e].filter((s) => s > 0).map((s) => `and ${s} more ${I(s, r)} not named here`);
var Gl = 128;
var x = 2 * z + Gl;
var ubr = (e) => (/^ */.exec(e)?.[0] ?? "") + Mt(e, x);
var Ql = (e) => `stays here: ${e.path} (${e.words})`;
var U_s = (e) =>
  [
    ...e.files.map(N_s),
    ...ado(e.unnamed?.files ?? 0, "file"),
    ...e.stays.map(Ql),
    ...ado(e.unnamed?.stays ?? 0, "entry")
  ].map(ubr);
var H = 500;
var Yl = 1e5;
function Ln(e) {
  let r = e.slice(0, H);
  return r.slice(
    0,
    F(
      r.reduce((s, n) => s.concat((s.at(-1) ?? 0) + n.path.length), []),
      (s) => s <= Yl
    )
  );
}
var Vl = (e) => ({ files: Ln(e.files), stays: Ln(e.leftOut) });
var Ur = (e) =>
  et(
    _([
      e.plan.root,
      e.wanted.destination,
      e.organization.id,
      Mr(e.plan.manifest),
      e.wanted.mode,
      e.plan.listing.files.map((r) => [r.path, r.bytes, r.mode, e.plan.hashes[r.path]])
    ])
  );
function Zl(e, r) {
  let s = e.files.length - r.files.length,
    n = e.leftOut.length - r.stays.length;
  return s === 0 && n === 0 ? void 0 : { files: s, stays: n };
}
var Mn = Object.freeze({
  link: "a link, not followed",
  "hard-link": "shares what it holds with another name on this disk",
  ignored: "ignored by .gitignore",
  secret: "may hold a secret",
  never: "never sent",
  generated: "made by Claude Code",
  special: "not a file",
  backslash: "a backslash in its name"
});
var Jl = (e) => "stays here: " + hi(e.path, z) + ` (${Mn[e.why]})`;
var Nn = (e) => [...e.plan.listing.files.map(nn), ...e.plan.listing.leftOut.map(Jl)];
var eu = (e) => [...Nn(e), ...un(e)];
var Fn = (e) => `${eu(e).join(`
`)}
`;
var ru = (e, r, s) => ({
  digest: Ur(e),
  title: C(e).question,
  organization: { id: Mt(e.organization.id), name: e.organization.name && Mt(e.organization.name) },
  plugin: {
    name: Mt(e.plan.manifest.name),
    version: e.plan.manifest.version && Mt(e.plan.manifest.version)
  },
  folder: hi(e.plan.root, z),
  mode: e.wanted.mode,
  steps: fn(e),
  warnings: dn(e),
  writes: on(e),
  sends: { files: e.plan.listing.files.length, bytes: e.plan.bytes },
  files: s.files.map((n) => ({
    path: hi(n.path, z),
    bytes: n.bytes,
    sha256: e.plan.hashes[n.path] ?? "",
    runs: n.mode === Co
  })),
  staying: e.plan.listing.leftOut.length,
  stays: s.stays.map((n) => ({ path: hi(n.path, z), why: n.why, words: Mn[n.why] })),
  list: { sha256: et(Fn(e)), path: r },
  unnamed: Zl(e.plan.listing, s)
});
var ou = (e, r) => ru(e, r, Vl(e.plan.listing));
function tu(e, r) {
  let s = ou(e, r);
  return {
    path: e.plan.root,
    destination: e.wanted.destination,
    description: e.wanted.description,
    replace: e.wanted.mode === "replace" || void 0,
    shown: [...gn(e, bn(r, e)), ...U_s(s)],
    question: s
  };
}
function su(e, r) {
  let s = Xl(e, bn(r, e));
  return {
    behavior: "ask",
    message: C(e).question,
    updatedInput: tu(e, r),
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !1,
    decisionReason: $l(s)
  };
}
var iu =
  "Publishing from a cloud session isn't offered yet, and the plugin's files are in this cloud session, where the Claude app or a terminal on your computer can't reach them. Nothing was sent.";
var nu = () => !ye() && !i.DISABLE_LOGIN_COMMAND;
var au = () => {
  let e = Xc(pJt);
  return (
    (e === "cache_miss" || e === "route_missing") &&
    !TKe(pJt) &&
    Att({ restrictions: {}, compliance_taints: [] }, pJt, I0())
  );
};
var pu =
  "Claude Code couldn't load your organization's policy, so publishing from here is off for now: try again in a moment, or publish this plugin from claude.ai. Nothing was sent.";
var fu = Object.freeze({
  "flag-off": "Publishing plugins isn't available in this session. Nothing was sent.",
  "third-party":
    "Publishing goes through claude.ai, and this session uses another provider. Nothing was sent.",
  bare: "Publishing is off under --bare. Nothing was sent.",
  "traffic-off":
    "Publishing is off while nonessential traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC). Nothing was sent.",
  policy:
    "Your organization's policy doesn't allow publishing from Claude Code: publish this plugin from claude.ai. Nothing was sent.",
  "cloud-session":
    "Publishing from a cloud session isn't offered yet. Publish from the Claude app or from a terminal on your own computer. Nothing was sent.",
  "signed-out": "Publishing needs a claude.ai sign-in. Sign in with /login, then publish again.",
  "no-organization":
    "This session is signed in by the app that started it, which didn't say which organization that is. Publish this plugin from claude.ai, or ask Claude in a terminal session signed in to claude.ai. Nothing was sent.",
  "nobody-to-ask":
    "Publishing waits for your answer, and this session has nobody to ask. Ask Claude to publish it in a session of your own. Nothing was sent.",
  "other-question":
    "The answer that came back was to another question than the one this session asked, so nothing was sent. Ask Claude to publish again.",
  "network-path":
    "That path names a place on the network, which publishing does not open. Nothing was read or sent.",
  "read-denied":
    "This session's permissions don't allow reading that folder, or a file in it that would be sent. Nothing was sent.",
  "write-denied":
    "This session's permissions don't allow writing the manifest this publish would add to the folder. Nothing was written or sent.",
  "no-folder": "No folder at that path. Nothing was sent.",
  "not-a-plugin":
    "That folder holds no plugin: no manifest, commands, skills, agents or hooks. Nothing was sent.",
  findings: "The plugin didn't pass validation. Fix these, then publish again. Nothing was sent.",
  "too-many-files": `The plugin has more than ${Fe} files to send. Name what isn't part of it in .gitignore. Nothing was sent.`,
  "too-large": `The plugin is larger than ${en(rr)}, the most publishing sends. Nothing was published.`,
  unreadable: "Part of the folder couldn't be read, so nothing was sent.",
  changed: "The folder changed while it was being published, so nothing was sent. Publish again.",
  unwritten: "The manifest couldn't be written to .claude-plugin/plugin.json, so nothing was sent.",
  stopped: "Publishing was stopped.",
  failed: "Publishing ran into an error and stopped.",
  "not-served":
    "claude.ai doesn't offer publishing from Claude Code for your organization yet. Nothing was sent.",
  "publishing-off":
    "Your organization doesn't accept member submissions. The upload is on your own shelf on claude.ai (My Uploads), where only you see it and where you can remove it. An administrator chooses a publishing policy in the organization settings.",
  "creation-off":
    "Your organization has plugin creation turned off. An administrator turns it on in the organization settings on claude.ai.",
  exists: "A plugin of this name is already in your uploads on claude.ai, and it was not replaced.",
  invalid: "claude.ai didn't take the plugin: it failed validation.",
  "shelf-full": "Your uploads on claude.ai are full. Remove one there, then publish again.",
  scan: "The plugin didn't pass the security scan on claude.ai, so it wasn't submitted. It is on your own shelf, where only you see it.",
  "scan-pending":
    "The security scan of the plugin is still running. Publish again in a few minutes.",
  "not-current":
    "The new version is saved to your uploads on claude.ai, but it isn't the plugin's current version there, so nothing was sent to your organization. Open the plugin on claude.ai, make the new version current, and publish it from there.",
  "already-pending":
    "Your earlier submission of this plugin is still waiting for review. To send this version instead, withdraw that submission from the plugin's page on claude.ai, then publish again.",
  "installs-for-members":
    "A plugin published under this name may be installed automatically for some or all of your organization's members, so it can only be published from claude.ai. Nothing was sent to your organization. Publish it from your uploads on claude.ai.",
  "nothing-new": "This version is already in your organization's library.",
  "in-progress":
    "An earlier submission of this plugin is being published. Publish again once it is in the library.",
  "needs-admin": "This update needs an administrator: ask one to publish it from claude.ai.",
  "needs-org-settings":
    "This update needs a change to the organization's settings on claude.ai first. Ask an administrator.",
  "name-conflict":
    "An item with this name is already in your organization's library. Rename yours and publish again.",
  "library-full": "Your organization's library is full. An administrator makes room on claude.ai.",
  legal:
    "Your organization requires an attestation with each submission. Publish this plugin from claude.ai.",
  busy: "claude.ai was busy with this plugin or did not answer. Publish again in a moment.",
  other: "claude.ai didn't take the plugin."
});
var mu =
  "Publishing needs a claude.ai sign-in, and this session has none it can publish on. Publish this plugin from claude.ai, or ask Claude to publish it from a session signed in to claude.ai.";
function lu(e) {
  if (e === "signed-out" && !nu()) return mu;
  if (e === "policy" && au()) return pu;
  if (e === "cloud-session" && Uy()) return iu;
  return fu[e];
}
function uu(e) {
  return e.kind === "published"
    ? [
        "Send colleagues this link to add it: " + Mt(e.link),
        "In Claude Code, they can also add the organization library under " +
          "/plugin \u2192 Marketplaces, then run /plugin install " +
          Mt(e.install)
      ]
    : [];
}
var du = Object.freeze({
  published: "published to your organization's library.",
  "in-review":
    "uploaded to your shelf and sent to your organization for an administrator's review. It reaches the library once approved.",
  publishing:
    "uploaded to your shelf and approved. It is on its way into your organization's library.",
  "on-shelf":
    "uploaded to your own shelf on claude.ai, and not submitted yet: its scan was still running when the wait for it ended. Submit it from claude.ai once the scan has passed."
});
var cu = (e) => [
  du[e.kind],
  ...[e].flatMap((r) => ("verdict" in r ? [r] : [])).flatMap(mi),
  ...[e]
    .filter((r) => "isUnscanned" in r && r.isUnscanned)
    .map(() => "claude.ai didn't run a security scan on this plugin."),
  ...uu(e),
  ...[e].flatMap((r) => ("id" in r ? [r.id] : [])).map((r) => `Follow it on claude.ai: ${yr(r)}`)
];
var hu = " (the plugin's own version; the library numbers its copies itself)";
var gu = (e) => Mr(e) + (e.version ? hu : "");
function Kr(e) {
  return e.kind === "refused"
    ? [lu(e.refusal.kind), ...e.refusal.details.map((s) => Mt(s))]
    : cu(e).map((s, n) => (n === 0 ? `${gu(e.manifest)}: ` : "") + s);
}
var xu = (e) => ({ type: "other", reason: e });
var yu = (e) => ({ behavior: "deny", message: e, decisionReason: xu(e) });
var qr = (e, r = []) =>
  yu(
    Kr(l(e, r)).join(`
`)
  );
function ra(e, r) {
  return e.refusal.kind === "unreadable" && YHe(r.permissions())
    ? { ...e, refusal: { ...e.refusal, details: [] } }
    : e;
}
function ee(e, r) {
  let s = ra(e, r);
  return qr(s.refusal.kind, s.refusal.details);
}
import { join as ta } from "path";
var bu = (e, r, s) =>
  r.files
    .map((n) => n.path)
    .filter((n) =>
      V1(
        ta(e[0] ?? "", n),
        s.permissions(),
        e.map((a) => ta(a, n))
      )
    );
function ia(e, r, s) {
  return bu(e, r, s).length === 0 ? void 0 : l("read-denied");
}
var Ru = (e, r) =>
  r !== void 0 ||
  e.shouldAvoidPermissionPrompts === !0 ||
  e.servedCall === !0 ||
  e.mode === "dontAsk";
import { dirname as Su, join as Ou } from "path";
var Au = 384;
async function Pu(e, r, s) {
  let n = PI(s.session),
    a = zL(e),
    f = Ou(n, `publish-${a}.txt`);
  return (
    a !== void 0 && Su(f) === n
      ? AM(n, void 0)
      : Promise.reject(Error("The tool use id is no plain token"))
  )
    .then(() => Dfe(f, Buffer.from(Fn(r)), Au))
    .then(
      () => f,
      () => {
        return;
      }
    );
}
import { realpath as wu } from "fs/promises";
import { resolve as Lu } from "path";
var _u = ["bare-deny", "path-deny"];
var vu = (e, r) => _u.includes(b2e([e], r.permissions(), { refuseAutomounterShapes: !0 }).layer);
async function la(e, r) {
  let s = Lu(fe(), e.path);
  if (vu(s, r)) return l("read-denied");
  if (!YHe(r.permissions())) return;
  let n = await wu(s).catch(() => s),
    a = await j(Xe(n));
  return "kind" in a ? a : ia([s, n], a, r);
}
import { resolve as Eu } from "path";
var ua = (e, r, s) => _2e(s.tool, { path: e }, s.permissions(), r) !== null;
function Tu(e, r) {
  if (ua(e.path, [e.path], r)) return "network-path";
  let s = Eu(fe(), e.path),
    n = h6(s);
  return ua(s, n.paths, r) ? "network-path" : n.vetted ? void 0 : "unreadable";
}
var ha = (e, r) => (Obr() ? Tu(e, r) : "flag-off");
var Mu = 16;
var ldo = new nt(() => new Map());
function ku(e, r, s) {
  let n = ldo.of(s.session);
  (n.set(e, r),
    Array.from(n.keys())
      .slice(0, Math.max(0, n.size - Mu))
      .forEach((a) => n.delete(a)));
}
var Nu = 4000;
var ba = p(() =>
  u({
    digest: o().regex(Mb).describe("What a yes binds to: the publish is of this, or refused."),
    title: o().max(x),
    organization: u({ id: o().max(x), name: o().max(x).optional() }),
    plugin: u({ name: o().max(x), version: o().max(x).optional() }),
    folder: o().max(x),
    mode: B(["new", "replace"]).describe("Whether a plugin of this name on the shelf is replaced."),
    steps: T(o().max(x)).max(H).describe("What a yes sets off, a sentence each, in order."),
    warnings: T(o().max(x))
      .max(H)
      .describe(
        "What the person is warned of, a sentence each: a file sent although its name is one a secret hides under, and that other entries stay behind unnamed."
      ),
    writes: u({ path: o().max(x), text: o().max(Nu) })
      .optional()
      .describe("The manifest a yes writes into the folder first, if any."),
    sends: u({ files: v(), bytes: v() }).describe("The whole count and size of what is sent."),
    files: T(
      u({
        path: o().max(x),
        bytes: v(),
        sha256: o().regex(Mb),
        runs: M().describe("Whether it is sent as runnable.")
      })
    )
      .max(H)
      .describe("The files sent, in the order of their paths."),
    staying: v().describe("How many entries stay on the machine and are counted here."),
    stays: T(
      u({
        path: o().max(x),
        why: B([
          "link",
          "hard-link",
          "ignored",
          "secret",
          "never",
          "generated",
          "special",
          "backslash"
        ]),
        words: o().max(x)
      })
    )
      .max(H)
      .describe("The entries that stay and are named, each with why."),
    list: u({ sha256: o().regex(Mb), path: o().max(x).optional() }).describe(
      "The list, a line each, of every file sent and every entry that stays and is named, and a last line saying so where entries stay unnamed: its sha256, and the file that holds it."
    ),
    unnamed: u({ files: v(), stays: v() })
      .optional()
      .describe(
        "Present only when the lists are over the bound: how many files and entries they do not name. The list file names them."
      )
  })
);
var Jr = (e) => et(_(yM(e)));
var Ra = (e) => Jr(ba().safeParse(e).data ?? e);
var Du = (e, r) => ({
  digest: Ur(e),
  question: Ra(r.question),
  lines: Jr(r.shown),
  drafts: e.draft !== void 0,
  card: C(e),
  everything: Nn(e)
});
var ro = (e) => (e.signal.aborted ? l("stopped", [os.nothing]) : void 0);
import { join as to } from "path";
var Fu = (e, r, s) =>
  [r, to(r, "within")].some((n) =>
    V1(
      to(e[0] ?? "", n),
      s.permissions(),
      e.map((a) => to(a, n))
    )
  );
var zu = (e, r) => ({
  ...e,
  plan: { ...e.plan, listing: { ...e.plan.listing, leftOut: r } },
  withheld: r.length < e.plan.listing.leftOut.length
});
function Cu(e, r, s) {
  let n = !YHe(s.permissions());
  return zu(
    e,
    e.plan.listing.leftOut.filter((a) => n || !Fu(r, a.path, s))
  );
}
var va = (e) => ({
  folder: e.path,
  destination: e.destination ?? "organization",
  description: e.description,
  mode: e.replace === !0 ? "replace" : "new"
});
import { join as Wu } from "path";
var Uu = (e, r) => r_(Ck, { file_path: e, content: "" }, r).behavior === "deny" || V1(e, r);
var Hu = Object.freeze(
  [qt, at].map((e) =>
    Object.freeze({
      name: e,
      mcpInfo: void 0,
      familyParentToolName: void 0,
      aliasSkillToolNames: void 0,
      packagingAliasSkillToolNames: void 0
    })
  )
);
function Ea(e, r) {
  let s = r.permissions(),
    n = Pd(s).filter((a) => !U2e.includes(a.source));
  return Hu.some((a) => oo(s, a, n) !== null) || L(e).some((a) => Uu(Wu(a, Zp), s));
}
function ju(e, r, s) {
  return r.draft !== void 0 && Ea(e, s) ? l("write-denied") : void 0;
}
async function Xu(e, r, s) {
  let { toolUseId: n } = r,
    a = ha(e, s),
    f = n === void 0 || Ru(s.permissions(), s.agentId);
  if (a !== void 0 || f) return qr(a ?? "nobody-to-ask");
  let m = ro(r) ?? (await Cl(Mbr(), r.signal));
  if ("kind" in m) return ee(m, s);
  let h = (await la(e, s)) ?? ro(r);
  if (h !== void 0) return ee(h, s);
  let g = await j(ar(va(e), m));
  if ("kind" in g) return ee(g, s);
  let b = [qu(fe(), e.path), g.plan.root],
    y = ia(b, g.plan.listing, s) ?? ju(b, g, s);
  if (y !== void 0) return ee(y, s);
  let W = Cu(g, b, s),
    R = await Pu(n, W, s),
    O = ro(r);
  if (O !== void 0) return ee(O, s);
  let no = su(W, R);
  return (ku(n, Du(W, no.updatedInput), s), no);
}
var $u = 1024;
var Gu = x;
var Qu = 100;
var Yu = 2 * H + Qu;
var B_s = p(() =>
  Ue({
    path: o()
      .min(1)
      .max($u)
      .describe(
        "The plugin's folder on this machine: the one that holds .claude-plugin/plugin.json, or a mod's hooks/ where there is no manifest yet."
      ),
    destination: A("organization")
      .optional()
      .describe(
        "Where to publish. The one destination is the library of the organization the session is signed in to."
      ),
    description: o()
      .max(xt)
      .optional()
      .describe(
        "What the plugin does, in a sentence: used only for a manifest written for a folder that has none."
      ),
    replace: M()
      .optional()
      .describe(
        "True only when the person said to replace the plugin of the same name that is already in their uploads on claude.ai."
      ),
    shown: T(o().max(Gu))
      .max(Yu)
      .optional()
      .describe(
        "Leave out. The tool fills it for the question the person answers: the organization, the folder, the steps, and the files sent."
      ),
    question: ba()
      .optional()
      .describe(
        "Leave out. The tool fills it with the same question as data, for a surface that draws its own: what a yes binds to, every file sent, and the entries that stay and are named."
      )
  })
);
var Vu = 4000;
var Zu = (e) => ({
  state: e.kind,
  refusal: e.kind === "refused" ? e.refusal.kind : void 0,
  lines: Kr(e)
});
var Ju = p(() =>
  Ue({
    state: B(["published", "in-review", "publishing", "on-shelf", "refused"]),
    refusal: o().optional(),
    lines: T(o())
  })
);
function ed(e) {
  let s = typeof e === "object" && e !== null && "path" in e ? e.path : void 0;
  return typeof s === "string" ? s : "";
}
var ja = (e, r) => "plan" in e && Ur(e) === r.digest;
import { mkdir as rd, writeFile as od } from "fs/promises";
import { dirname as Ka, join as td } from "path";
async function sd(e) {
  let r = td(e.root, Zp);
  return (
    await rd(Ka(r), { recursive: !0 }).catch(() => {
      return;
    }),
    (await oU(Ka(r)))
      ? od(r, e.draft, { flag: "wx" }).then(
          () => !0,
          () => !1
        )
      : !1
  );
}
import { posix as nd } from "path";
var id = 420;
async function ad(e, r) {
  let s = aO(Zp);
  try {
    return (await e.mkdirp(nd.dirname(s)), await e.create(s, Buffer.from(r.draft), id), !0);
  } catch {
    return !1;
  } finally {
    await e.close();
  }
}
async function pd(e) {
  let { openTreeAnchor: r } = await import("./chunk-8et31asy.js"),
    s = await r(await zNs(), { gitRoot: e.root, realRoot: e.root }).catch(() => {
      return;
    });
  if (s === void 0) return !1;
  return !("unavailable" in s) ? ad(s, e) : sd(e);
}
async function fd(e, r) {
  let s = await Gt(e.folder, e.description),
    n = await ar(e, r.organization),
    a = ja(n, r) && s.kind === "needs-manifest";
  if (a && !r.drafts) return l("changed");
  let m = a && (await pd(s));
  if (a && !m) return l("unwritten");
  let h = m ? await ar(e, r.organization) : n;
  return ja(h, r) || "kind" in h ? h : l("changed");
}
async function md(e, r, s) {
  let n = await Ye(e, r);
  return n !== void 0 && et(n) === s ? n : void 0;
}
var ld = 65535;
var ud = 16;
var dd = 3;
var cd = (e) => ({ os: dd, attrs: (e & ld) << ud });
function hd(e, r) {
  return e !== void 0 && r !== void 0 ? [[e.path, [r, cd(e.mode)]]] : [];
}
var gd = 6;
var xd = "1980-01-01T00:00:00";
async function yd(e) {
  let { zipSync: r } = await import("./chunk-29ts50se.js"),
    s = await Lt(e.listing.files, (a) => md(e.root, a, e.hashes[a.path]), hd);
  return "missed" in s ? s : r(Object.fromEntries(s), { level: gd, mtime: xd });
}
async function bd(e) {
  let r = await qs(e);
  if (!Array.isArray(r)) return k(e, r, "nothing");
  let s = await Tl(e);
  if (typeof s !== "string") return k(e, s, "nothing");
  let n = await Il(s, e);
  return "kind" in n ? k(e, n, "uploading") : al(e, await Hi(e, n), r);
}
async function Rd(e, r) {
  let s = await j(yd(e));
  if ("kind" in s) return s;
  if ("missed" in s) return Ve(s);
  return s.length > rr ? l("too-large") : bd(gl(s, e, r)).catch((a) => l("failed", [d(a)]));
}
async function Ad(e, r, s) {
  let n = await fd(e, r);
  return "kind" in n ? n : Rd(n.plan, { organization: r.organization, mode: e.mode, signal: s });
}
async function Sd(e, r) {
  let { refusal: s, organization: n, shown: a } = r;
  if (s !== void 0) return l(s);
  if (n === void 0) return l(Vi());
  return a !== void 0
    ? Ad(va(e), { digest: a, drafts: r.drafts, organization: n }, r.signal)
    : l("nobody-to-ask");
}
function Od(e, r) {
  let s = r.question !== void 0 && Ra(r.question) !== e?.question,
    n = r.shown !== void 0 && Jr(r.shown) !== e?.lines;
  return e !== void 0 && (s || n) ? "other-question" : void 0;
}
function _d(e, r) {
  if (!(e.kind === "refused" && e.refusal.kind === "stopped")) return;
  (t(`plugin publish: stopped: ${e.refusal.details.join(" ")}`),
    r.appendSystemMessage?.(
      kk(
        Kr(e).join(`
`),
        "warning"
      )
    ));
}
import { realpath as vd } from "fs/promises";
import { resolve as wd } from "path";
async function Ld(e, r, s) {
  let n = wd(fe(), e.path);
  return r && Ea([n, await vd(n).catch(() => n)], s) ? "write-denied" : void 0;
}
async function Ed(e, r, s) {
  let n = ldo.of(s.session),
    a = n.get(r.toolUseId ?? ""),
    f = a?.digest;
  n.delete(r.toolUseId ?? "");
  let m = a?.drafts === !0,
    h = ha(e, s) ?? Mbr() ?? Od(a, e) ?? (await la(e, s))?.refusal.kind ?? (await Ld(e, m, s)),
    g = await Yi(h),
    b = await Sd(e, { shown: f, drafts: m, organization: g, refusal: h, signal: r.signal }),
    y = b.kind === "refused" ? ra(b, s) : b;
  return (
    _d(y, s),
    await (y.kind === "refused" ? zt("plugin_publish", y.refusal.kind) : jr("plugin_publish")),
    y
  );
}
var fbr = tn({
  name: cre,
  searchHint: "publish or share a plugin or mod with the team or organization library",
  shouldDefer: !0,
  backgrounding: "never",
  maxResultSizeChars: Vu,
  async description() {
    return EKs;
  },
  async prompt() {
    return kKs;
  },
  get inputSchema() {
    return B_s();
  },
  get outputSchema() {
    return Ju();
  },
  userFacingName() {
    return "Publish plugin";
  },
  isEnabled() {
    return Obr();
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !1;
  },
  requiresUserInteraction() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return _(e);
  },
  getToolUseSummary() {
    return "Publish a plugin to your organization's library on claude.ai";
  },
  getPath(e) {
    return ed(e);
  },
  renderToolUseMessage(e) {
    return e.path ?? "";
  },
  create(e) {
    let r = { ...e, tool: fbr };
    return {
      permissionCheckFailureDecision() {
        return qr("failed");
      },
      async checkPermissions(s, n) {
        return Xu(s, n, r);
      },
      async call(s, n) {
        return { data: Zu(await Ed(s, n, r)) };
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      type: "tool_result",
      tool_use_id: r,
      ...(e.state === "refused" && { is_error: !0 }),
      content: _(e)
    };
  }
});
export { N_s, ado, ubr, $_s, F_s, U_s, B_s, ldo, ddo, tJt, fbr };

//# sourceMappingURL=chunk-mbsnh3kz.js.map
