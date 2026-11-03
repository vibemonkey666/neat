// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { yk, De } from "./chunk-2qx8pe6s.js";
import { pSe, $s, le } from "./chunk-vw9e882a.js";
import { Ye, R, d, E, Er, G, Us, tg } from "./chunk-fs43t96t.js";
import { So, nt, U, q, ke, ci, wTn, J } from "./chunk-wrtp8qz8.js";
import { si } from "./chunk-4hww8411.js";
import { In, Yn, YH, Qi, Fa, dl, XH, aN, EAn, Fl, jCt, xf } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { jy, Cp, Pm, bt, Wu, cYt, Po, Pxe, Ui, ie, Hb, Yf, hW, t } from "./chunk-4kxznmzw.js";
import { I, Ze } from "./chunk-a16y5hcz.js";
import { Pt, Pl, fe } from "./chunk-xe386mry.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { hc, EB, i } from "./chunk-cj37hmns.js";
import { im, fT, JS, Fst, K4t } from "./chunk-t0wrcf3t.js";
import { iP, vq, Os } from "./chunk-qywdxehb.js";
import { tkn, eX, ws, EAt, Gar, kAt, Ap, rkn } from "./chunk-v4kbwz0z.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { h_, tee } from "./chunk-13nwb0xt.js";
import { _n, q_, Rs } from "./chunk-cjnzngfc.js";
import { H$e, it, ct } from "./chunk-qmmh8tq2.js";
import { Hfe, hn } from "./chunk-wr0p4ndg.js";
import { Y } from "./chunk-arw2bgak.js";
import { _r, cT, fkn, JZ, We } from "./chunk-pgnjjhxv.js";
import { m6 } from "./chunk-ak0cmk10.js";
import { vr, yo } from "./chunk-azq9hjy0.js";
import { $a } from "./chunk-2bsye2b3.js";
import { la } from "./chunk-8fp2d2p3.js";
import { zfe, kxe } from "./chunk-hc5j8sxy.js";
import { Ac } from "./chunk-mapzg9k3.js";
import { en } from "./chunk-rc7xvf0x.js";
import { El, Qkn, Zkn, eTn, Mpi } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import {
  closeSync as Is,
  constants as vs,
  fstatSync as Cs,
  lstatSync as As,
  openSync as Ls,
  readlinkSync as Ts,
  readSync as Fs,
  realpathSync as Ds,
  statSync as Ns,
  unwatchFile as Be
} from "fs";
import {
  lstat as gr,
  readdir as js,
  readFile as Ke,
  realpath as Ms,
  stat as Qe
} from "fs/promises";
import { constants as Do } from "fs";
import * as pe from "fs/promises";
import { randomUUID as mo } from "crypto";
import { constants as Cn } from "fs";
import {
  copyFile as ho,
  mkdir as bo,
  mkdtemp as wo,
  open as Eo,
  readdir as Fn,
  rm as Ro
} from "fs/promises";
import { basename as _o, dirname as ko, join as Ie, win32 as An } from "path";
var nui = 10485760;
var GZ = 512000;
var Rt = { imageMaxRawBytes: 307200, wholePdfMaxRawBytes: 0, pdfMaxPagesPerRead: 3 },
  xr = { imageMaxRawBytes: 512000, wholePdfMaxRawBytes: 2500000, pdfMaxPagesPerRead: 6 };
function s8r(e) {
  switch (e) {
    case "session":
    case "relay":
      return xr;
    case "bridge":
    case "direct":
      return Rt;
    default: {
      let n = e;
      return Rt;
    }
  }
}
var _t = 28;
function _At(e, n) {
  if (e <= 0 || n <= 0) return 0;
  return Math.ceil(e / _t) * Math.ceil(n / _t);
}
var AR = { maxWidth: 2000, maxHeight: 2000, maxBase64Size: 5242880, targetRawSize: 3932160 },
  dst = 33554432,
  Far = 20971520,
  rui = 100,
  NEn = 104857600,
  l6 = 20,
  bAt = 10,
  oui = 100,
  sui = 600,
  M7o = 20,
  iui = [510, 255, 127],
  aui = 78643200,
  D7o = dst - 8388608,
  lui = 25165824,
  H7o = 10485760,
  $En = 64000;
import { constants as Tt } from "fs";
import { lstat as Gr, open as $r, readlink as Wr, realpath as Ur, stat as Ra } from "fs/promises";
function vt(e) {
  if (e === 9 || e === 10) return !1;
  return e < 32 || (e >= 127 && e <= 159);
}
function Ct(e) {
  return e === 1564 || (e >= 8234 && e <= 8238) || (e >= 8294 && e <= 8297);
}
function Ir(e) {
  return e === 65038 || e === 65039;
}
function Cr(e) {
  return e >= 55296 && e <= 57343;
}
function At(e) {
  let n = e.codePointAt(0);
  if (e.length === 1) {
    if (n <= 31) return 0;
    if (Ct(n)) return 1;
  }
  let r = le(e);
  return r === 0 ? 0 : r === 1 ? 1 : r;
}
var Te = 4096,
  A$e = /\u2026 \[\+\d+ graphemes\]/,
  Ar = 4064,
  Or = 256;
function dui(e) {
  if (e.length <= Te) return e;
  return e
    .split(
      `
`
    )
    .map((n) => {
      if (n.length <= Te) return n;
      let r = [],
        o = "";
      for (let { segment: s } of $a().segment(n))
        if (o.length > 0 && o.length + s.length > Or) (r.push(o), (o = s));
        else o += s;
      if (o.length > 0) r.push(o);
      return r.join(`
`);
    }).join(`
`);
}
function kt(e) {
  let n = "",
    r = 0;
  for (let { segment: o } of $a().segment(e)) {
    n += o;
    let s = le(n),
      a = s - r;
    if (((r = s), a !== At(o))) return !1;
  }
  return !0;
}
function Lr(e) {
  let n = "",
    r = "",
    o = 0;
  for (let { segment: s } of $a().segment(e)) {
    r += s;
    let a = le(r),
      c = a - o;
    ((o = a), (n += c === At(s) ? s : "\uFFFD"));
  }
  return n;
}
function xt(e) {
  let n = e;
  for (let r = 0; r < 16; r++) {
    if (kt(n)) return n;
    let o = Lr(n);
    if (o === n) break;
    n = o;
  }
  if (kt(n)) return n;
  return [...$a().segment(n)].map(() => "\uFFFD").join("");
}
function Tr(e, n) {
  let r = "";
  for (let { segment: o } of $a().segment(e)) {
    if (r.length + o.length > n) break;
    r += o;
  }
  return r;
}
function Fr(e) {
  return Ot(e, Ar);
}
function Ot(e, n) {
  let r = Tr(e, n);
  if (r.length > 0) return r;
  let o = Math.min(n, e.length),
    s = e.charCodeAt(o - 1);
  if (s >= 55296 && s <= 56319) o -= 1;
  return e.slice(0, o);
}
var Dr = 4 * Te * Te,
  st = 1024,
  Nr = 64 * st * st;
function jr(e) {
  let n = Dr,
    r = Nr,
    o = (s) => [...$a().segment(s)].length;
  return e
    .split(
      `
`
    )
    .map((s) => {
      if (s === "") return s;
      if (/^\u2026 \[\+\d+ graphemes\]$/.test(s)) return s;
      let a = s.match(/\u2026 \[\+\d+ graphemes\]$/),
        c = a ? a[0] : "",
        u = a ? s.slice(0, s.length - c.length) : s,
        p = u.length > Te,
        h = p ? Fr(u) : u,
        S = p ? `\u2026 [+${o(u.slice(h.length))} graphemes]` : "",
        w = h.length + S.length + c.length,
        y = w * w;
      if (y <= n) return ((n -= y), xt(h) + S + c);
      let b = Ot(u, st),
        v = b.length < u.length ? `\u2026 [+${o(u.slice(b.length))} graphemes]` : "",
        k = b.length + v.length + c.length,
        P = k * k;
      if (b.length > 0 && P <= r) return ((r -= P), xt(b) + v + c);
      return `\u2026 [+${o(u)} graphemes]` + c;
    }).join(`
`);
}
function xI(e) {
  for (let n = 0; n < e.length; n++) if (vt(e.charCodeAt(n))) return !1;
  return !0;
}
function Oi(e) {
  return Lt(e, !0);
}
function Lt(e, n) {
  let r = "";
  for (let s of e) {
    let a = s.codePointAt(0);
    if (Ir(a)) continue;
    r += vt(a) || Ct(a) || Cr(a) ? "\uFFFD" : s;
  }
  let o = Hfe(r);
  return n ? jr(o) : o;
}
var Mr = /\p{DI}/gu;
function cst(e) {
  return e.replace(Mr, "");
}
function i8r(e) {
  return L7o(e) === void 0;
}
function L7o(e) {
  let n = Br.exec(e);
  if (n !== null) return n[0].codePointAt(0);
  if (Kr.test(e)) return;
  for (let { segment: r } of $a().segment(e)) {
    if (Hr.test(r)) continue;
    let o = le(r);
    if (o === 0) return r.codePointAt(0);
    if (o > 2 && r.length > 1) {
      for (let s of r) if (le(s) === 0) return s.codePointAt(0);
    }
  }
  return;
}
var Br = new RegExp(`(?![\\t\\n\\r])[${Hb}]`, "u"),
  Hr = /^[\t\n\r]+$/,
  Kr = /^[\t\n\r\x20-\x7e]*$/;
function dxe(e) {
  return Lt(cst(Yf(e)), !1);
}
function N7o(e, n = "linux") {
  return EAn(e) || aN(e, n);
}
async function Ww(e, n, r) {
  let o = n + 1,
    s = Buffer.alloc(r === void 0 ? o : Math.min(Math.max(Number(r) + 1, 1), o)),
    a = 0;
  while (a < o) {
    if (a === s.length) {
      let u = Buffer.alloc(o);
      (s.copy(u), (s = u));
    }
    let { bytesRead: c } = await e.read(s, a, s.length - a, a);
    if (c === 0) break;
    a += c;
  }
  return { bytes: s.subarray(0, Math.min(a, n)), overLimit: a > n };
}
var Yr = { realpath: Ur, lstat: Gr, readlink: Wr };
async function FEn(e, n, r, o = Yr) {
  let s;
  try {
    s = await o.lstat(r, { bigint: !0 });
  } catch {
    return;
  }
  if (s.dev !== n.dev || s.ino !== n.ino) return;
  try {
    let a = await o.readlink(`/proc/self/fd/${e.fd}`);
    if (!a.startsWith("/") || a.endsWith(" (deleted)")) return;
    let c = await o.lstat(a, { bigint: !0 });
    if (c.dev !== n.dev || c.ino !== n.ino) return;
    return a;
  } catch {
    return;
  }
  try {
    if ((await o.realpath(r)) !== r) return;
  } catch {
    return;
  }
  return r;
}
async function UEn(e) {
  return $r(e, Tt.O_RDONLY | Tt.O_NONBLOCK | ws);
}
import { constants as N } from "fs";
import { lstat as de, mkdir as Vr, open as xe, readlink as zr } from "fs/promises";
import { basename as Fe, dirname as K, isAbsolute as Bt, join as M } from "path";
async function v4t(e, n, r, o, s) {
  s?.throwIfAborted();
  let a = o ? Q9(e, n, r) : xe(e, n | ws);
  if (!s) return a;
  let c,
    u = new Promise((p, h) => {
      ((c = () => h(s.reason ?? Error("aborted"))), s.addEventListener("abort", c, { once: !0 }));
    });
  try {
    return await Promise.race([a, u]);
  } catch (p) {
    throw (
      a.then(
        (h) => h.close(),
        () => {}
      ),
      p
    );
  } finally {
    if (c) s.removeEventListener("abort", c);
  }
}
var Xr = /^(?:\/dev\/(?:stdin|stdout|stderr|fd\/\d+)|\/proc\/self\/fd\/\d+)$/;
function Ht(e) {
  return (
    Xr.test(e) || (/^\/proc\/\d+\/fd\/\d+$/.test(e) && e.startsWith(`/proc/${process.pid}/fd/`))
  );
}
function C$e(e) {
  return `/proc/self/fd/${e}`;
}
var Jr = 2097152;
async function Q9(e, n, r) {
  if (r !== "macos" || (await Gar())) return xe(e, n | ws);
  return xe(e, (n & ~N.O_NOFOLLOW) | EAt | ws);
}
async function Ft(e, n, r) {
  if (r !== "macos") return !1;
  for (let s = e; ; s = K(s)) {
    try {
      if (!(await de(s)).isDirectory()) return !1;
    } catch {
      return !1;
    }
    if (K(s) === s) break;
  }
  let o;
  try {
    o = await xe(e, N.O_RDONLY | N.O_DIRECTORY | EAt | ws);
  } catch {
    return !1;
  }
  try {
    let [s, a] = await Promise.all([o.stat({ bigint: !0 }), n.stat({ bigint: !0 })]);
    return s.ino === a.ino && s.dev === a.dev;
  } catch {
    return !1;
  } finally {
    await o.close();
  }
}
var Zr = {
  chain: "a link on the way now leads somewhere the check did not see",
  networkLink: "a link now stands at the network path",
  junction: "the junction no longer leads to the approved share",
  unrenderable: "its real path can no longer be determined",
  rendering: "it now resolves to a path the check did not see",
  linkOnApproved: "a link now stands on the approved path",
  openedElsewhere: "it opened at a different path than approved",
  afterOpen: "it re-resolved elsewhere once opened"
};
async function a8r(e) {
  try {
    return await zr(C$e(e));
  } catch (n) {
    if (Us(n)) return;
    throw n;
  }
}
async function Dt(e, n, r) {
  try {
    return await a8r(e.fd);
  } catch (o) {
    if (r === "by-spelling") return;
    throw new tee(
      `Refusing to read ${n}: the system would not say where it was opened (reading /proc/self/fd failed with ${E(o) ?? "an error"}), so it cannot be told apart from a path this session may not read.`
    );
  }
}
function ae(e, n) {
  return new tee(
    `Refusing to read ${e}: its symlink resolution changed after permission was checked (${Zr[n]}). If a link in the working directory is being rewritten concurrently, stop that and retry.`
  );
}
var Kt = !1;
async function BEn(e) {
  let n = [];
  for (let c = e; ; c = K(c)) if ((n.unshift(c), K(c) === c)) break;
  let r = ie(),
    o,
    s = [],
    a = [];
  for (let c of n) {
    try {
      let u = await de(c, { bigint: !0 });
      if (!(c === e ? u.isFile() : u.isDirectory())) return;
      (s.push(u), a.push("lstat"));
      continue;
    } catch (u) {
      let p = E(u);
      if (c === e || (p !== "EPERM" && p !== "EACCES")) return;
    }
    {
      let u = await Nt(c);
      if (u === void 0) return;
      (s.push(u), a.push("open"));
      continue;
    }
    if (((o ??= Pxe(r)), o !== null && a.slice(1).every((u) => u === "passed") && cYt(c, o))) {
      (s.push(void 0), a.push("passed"));
      continue;
    }
    return;
  }
  for (let c = 0; c < n.length - 1; c++) {
    let u = s[c];
    if (u === void 0) continue;
    let p;
    try {
      p = a[c] === "open" ? await Nt(n[c]) : await de(n[c], { bigint: !0 });
    } catch {
      return;
    }
    if (p === void 0 || !p.isDirectory() || p.dev !== u.dev || p.ino !== u.ino) return;
  }
  return s.at(-1);
}
async function Nt(e) {
  let n;
  try {
    n = await xe(e, N.O_RDONLY | N.O_DIRECTORY | N.O_NOFOLLOW | ws);
  } catch {
    return;
  }
  try {
    let r = await n.stat({ bigint: !0 });
    return r.isDirectory() ? r : void 0;
  } catch {
    return;
  } finally {
    await n.close().catch(() => {});
  }
}
function at(e) {
  return Bt(e) && !dl(e) && !Ht(e);
}
async function nSe(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (!at(r)) continue;
    let o = await BEn(r);
    if (o) return { dev: o.dev, ino: o.ino };
  }
  return null;
}
async function jt(e, n, r, o, s) {
  if (s == null) return;
  for (let a = n.length - 1; a >= 0; a--) {
    let c = n[a];
    if (!at(c) || (!Kt && !(await BEn(c)))) continue;
    let u;
    try {
      u = await v4t(c, (r & ~N.O_NOFOLLOW) | EAt | N.O_NONBLOCK, "macos", !1, o);
    } catch (h) {
      if (o?.aborted) throw o.reason ?? h;
      continue;
    }
    let p = await u.stat({ bigint: !0 }).catch(() => {
      return;
    });
    if (p?.isFile() && p.dev === s.dev && p.ino === s.ino)
      return (
        t(
          `openReadBoundToApproval: the fresh resolution of ${e} is not verbatim what the check approved (or realpath could not render it); reading approved ${c}, opened link-free`
        ),
        { canonicalPath: c, ioPath: c, handle: u, close: () => u.close() }
      );
    await u.close().catch(() => {});
  }
  return;
}
async function E4t(e, n, r, o, s = "by-spelling") {
  let a = new Set(n),
    c = O(),
    u = c === "windows" ? N.O_RDONLY : N.O_RDONLY | N.O_NOCTTY,
    p = c === "windows" ? u : u | N.O_NOFOLLOW,
    h = Po(ie(), e),
    S = (x) => o != null && x.isFile() && x.dev === o.dev && x.ino === o.ino,
    w = async (x = h) => {
      let B = x.resolvedPath;
      if (o == null || !x.isCanonical || !at(B) || B.startsWith("/dev/")) return !1;
      if (!Kt) {
        let A = await BEn(B);
        return A !== void 0 && S(A);
      }
      let _;
      try {
        _ = await v4t(B, (p & ~N.O_NOFOLLOW) | EAt | N.O_NONBLOCK, "macos", !1, r);
      } catch (A) {
        if (r?.aborted) throw r.reason ?? A;
        return !1;
      }
      try {
        return await _.stat({ bigint: !0 }).then(S, () => !1);
      } finally {
        await _.close().catch(() => {});
      }
    },
    y = async (x) => {
      if (c === "macos" && (await w())) {
        let B = await jt(e, n, p, r, o);
        if (B) return B;
      }
      throw ae(e, x);
    },
    b = Ui(e);
  if (b.unresolved) throw ae(e, "unrenderable");
  for (let x of b.spellings)
    if (!a.has(x)) return y(h.isCanonical && x === h.resolvedPath ? "rendering" : "chain");
  let v = async (x, B) => {
    if ((await de(x)).isSymbolicLink()) throw ae(e, "networkLink");
    let _ = await v4t(x, p, c, !B, r);
    if (c === "linux" || c === "wsl") {
      let A = await Dt(_, e, s).catch(async (C) => {
        throw (await _.close().catch(() => {}), C);
      });
      if (A !== void 0 && A !== x && !a.has(A))
        throw (await _.close().catch(() => {}), ae(e, "openedElsewhere"));
      if (A !== void 0)
        return { ioPath: C$e(_.fd), canonicalPath: x, handle: _, close: () => _.close() };
    }
    return { ioPath: x, canonicalPath: x, handle: _, close: () => _.close() };
  };
  if (kAt(e, c)) return v(e, !1);
  let k =
    Ht(e) &&
    !Bt(h.resolvedPath) &&
    /^(?:pipe|socket|anon_inode):\[/.test(h.resolvedPath) &&
    Fe(b.landing) === h.resolvedPath;
  if (!h.isCanonical && !k) {
    if (h.isSymlink || h.resolvedPath !== e) {
      if (a.has(h.resolvedPath) && kAt(h.resolvedPath, c)) {
        let _ = c === "macos" ? await v(h.resolvedPath, !1) : await v(e, !0),
          A = Po(ie(), e);
        if (A.isCanonical || A.resolvedPath !== h.resolvedPath)
          throw (await _.close().catch(() => {}), ae(e, "junction"));
        return _;
      }
      throw ae(e, "junction");
    }
    let x = await v4t(e, c === "macos" ? u | N.O_NONBLOCK : u, c, !1, r),
      B =
        c === "macos" && o != null
          ? await x.stat({ bigint: !0 }).catch(() => {
              return;
            })
          : void 0;
    if ((await x.close().catch(() => {}), B && S(B))) {
      let _ = await jt(e, n, p, r, o);
      if (_) return _;
    }
    throw ae(e, "unrenderable");
  }
  if (!k && !a.has(h.resolvedPath)) return y("rendering");
  let P = k ? e : h.resolvedPath,
    j;
  try {
    j = await v4t(P, k ? p & ~N.O_NOFOLLOW : p, c, !k, r);
  } catch (x) {
    if (E(x) === "ELOOP") throw ae(e, "linkOnApproved");
    throw x;
  }
  try {
    let x = P;
    if (c === "linux" || c === "wsl") {
      let _ = await Dt(j, e, s);
      if (_ !== void 0) {
        if (_ !== (k ? h.resolvedPath : P)) throw ae(e, "openedElsewhere");
        x = C$e(j.fd);
      }
    }
    if (x === P) {
      let _ = Ui(e);
      if (_.unresolved) throw ae(e, "afterOpen");
      for (let A of _.spellings)
        if (!a.has(A)) {
          if (
            c === "macos" &&
            (await w(Po(ie(), e))) &&
            (await j.stat({ bigint: !0 }).then(S, () => !1))
          )
            break;
          throw ae(e, "afterOpen");
        }
    }
    let B = j;
    return { canonicalPath: P, ioPath: x, handle: B, close: () => B.close() };
  } catch (x) {
    throw (await j.close().catch(() => {}), x);
  }
}
class Ne extends Error {
  dir;
  reported;
  constructor(e, n) {
    super("held directory vanished");
    this.dir = e;
    this.reported = n;
  }
}
var Mt = 3;
function te(e) {
  return new h_(
    `Refusing to write ${e}: its parent-directory symlink resolution changed after permission was checked.`
  );
}
async function ust(e, n, r, o, s = !1) {
  let a = () =>
    new h_(
      `Refusing to write ${n}: it is a symbolic link. Write to the link's target path instead.`
    );
  if (r === "windows")
    try {
      if ((await de(e)).isSymbolicLink()) throw a();
    } catch (p) {
      if (E(p) === "ENOENT") return null;
      throw p;
    }
  let c =
      r === "windows" ? N.O_RDONLY : N.O_RDONLY | N.O_NOFOLLOW | N.O_NONBLOCK | (N.O_NOCTTY ?? 0),
    u;
  try {
    u = s ? await xe(e, c | ws) : await Q9(e, c, r);
  } catch (p) {
    let h = E(p);
    if (h === "ENOENT") return null;
    if (h === "ELOOP" || h === "EMLINK" || h === "EFTYPE") throw a();
    throw p;
  }
  try {
    return await kxe(u, n, o);
  } finally {
    await u.close();
  }
}
async function cE(e, n, r) {
  for (let o = 1; ; o++)
    try {
      return await Qr(e, n, r);
    } catch (s) {
      if (!(s instanceof Ne)) throw s;
      if (
        (t(
          `pinWriteTarget: ${s.dir} was removed while held (attempt ${o}); ${o < Mt ? "taking the pin again" : "refusing"}`,
          { level: "warn" }
        ),
        o >= Mt)
      )
        throw s.reported ?? te(e);
    }
}
async function Qr(e, n, r) {
  let o = new Set(n),
    s = Fe(e),
    a = O(),
    c = () => {
      let _ = Ui(r?.leaf === "replace" ? K(e) : e),
        A = r?.leaf === "replace" ? _.spellings.map((C) => M(C, s)) : _.spellings;
      return !_.unresolved && A.every((C) => o.has(C));
    },
    u = () => {
      if (!c()) throw te(e);
    },
    p = c();
  if (!p && !(a === "macos" && !kAt(e, a))) throw te(e);
  let h = async (_, A, C) => {
      if (!(await Ft(_, C, a)))
        return (
          t(
            `pinWriteTarget: ${_} resolves to ${A}: not the same directory by a link-free route; refused`,
            { level: "warn" }
          ),
          !1
        );
      return (
        t(
          `pinWriteTarget: ${_} is rendered ${A} by realpath; same directory (device and inode), treated as an alias`
        ),
        !0
      );
    },
    S = (_) => o.has(M(_, s)),
    w = (_) => {
      let A = Po(ie(), _);
      if (!A.isCanonical) throw te(e);
      return A.resolvedPath;
    },
    y = (_) => {
      let A = Po(ie(), _);
      return A.isCanonical ? A.resolvedPath : _;
    };
  if (kAt(e, a) && a !== "linux" && a !== "wsl") {
    let _ = async (C) => {
      if (a !== "macos") return;
      for (let T = C; ; T = K(T))
        try {
          await (await Q9(T, N.O_RDONLY | N.O_DIRECTORY, a)).close();
          return;
        } catch (H) {
          let ee = E(H);
          if (ee === "ELOOP") throw te(e);
          if (ee !== "ENOENT" || K(T) === T) throw H;
        }
    };
    if ((await _(K(e)), r?.createParents)) (await ie().mkdir(K(e)), await _(K(e)));
    let A = async () => {
      if ((u(), a !== "macos")) return;
      try {
        await (await Q9(K(e), N.O_RDONLY | N.O_DIRECTORY, a)).close();
      } catch (C) {
        throw E(C) === "ELOOP" ? te(e) : C;
      }
    };
    return {
      ioPath: e,
      canonicalPath: e,
      readExisting: async (C) => {
        await A();
        let T = await ust(e, e, a, C, !1);
        return (await A(), T);
      },
      recheckBeforeWrite: A,
      close: async () => {}
    };
  }
  let b = async () => {
    if (r?.createParents) (await ie().mkdir(K(e)), u());
    let _ = Po(ie(), K(e));
    if (!_.isCanonical && !(_.isSymlink && S(_.resolvedPath) && kAt(M(_.resolvedPath, s), a))) {
      if (!_.isSymlink) await de(K(e));
      throw te(e);
    }
    let A = !_.isCanonical,
      C = _.resolvedPath;
    if (!S(C)) throw te(e);
    return {
      ioPath: e,
      canonicalPath: M(C, s),
      readExisting: async (T) => {
        u();
        let H = await ust(e, e, a, T, A);
        if ((u(), A && Po(ie(), K(e)).resolvedPath !== C)) throw te(e);
        return H;
      },
      recheckBeforeWrite: u,
      close: async () => {}
    };
  };
  if (a === "windows") return b();
  let k = a === "linux" || a === "wsl" ? Jr | N.O_DIRECTORY : N.O_RDONLY | N.O_DIRECTORY,
    P = K(e),
    j = [],
    x,
    B = "";
  for (;;)
    try {
      ((B = a === "macos" ? y(P) : P), (x = await Q9(B, k, a)));
      break;
    } catch (_) {
      let A = E(_),
        C = K(P),
        T = A === "ELOOP" && a === "macos" && B === P && !Po(ie(), P).isCanonical;
      if (A === "ELOOP" && !T) {
        let H = Po(ie(), K(e));
        if (p && !H.isCanonical && H.isSymlink && S(H.resolvedPath) && kAt(M(H.resolvedPath, s), a))
          return b();
        throw te(e);
      }
      if (T && !r?.createParents) {
        let H = [Fe(P)];
        for (let ee = C; ; ee = K(ee)) {
          let F = Po(ie(), ee);
          if (F.isCanonical) {
            await de(M(F.resolvedPath, H[0]));
            break;
          }
          if (K(ee) === ee) break;
          H.unshift(Fe(ee));
        }
        throw te(e);
      }
      if ((A === "ENOENT" || T) && r?.createParents && C !== P) {
        (j.unshift(Fe(P)), (P = C));
        continue;
      }
      throw _;
    }
  try {
    let _ = !1,
      A = async (F, V) => {
        let Z =
          a === "linux" || a === "wsl"
            ? await a8r(F.fd).catch(() => {
                return;
              })
            : void 0;
        if (Z === void 0) return w(V);
        if (((_ = !0), Z.endsWith(" (deleted)"))) throw new Ne(V);
        return Z;
      },
      C = await A(x, P);
    if (!_ && C !== P && !S(M(C, ...j)) && S(M(P, ...j)) && (await h(P, C, x))) C = P;
    let T = M(C, ...j);
    if (!S(T)) {
      if (
        j.length === 0 &&
        (await de(M(_ ? `/proc/self/fd/${x.fd}` : C, s)).then(
          (V) => V.isSymbolicLink(),
          () => !1
        ))
      )
        throw new h_(
          `Refusing to write ${e}: it is a symbolic link. Write to the link's target path instead.`
        );
      throw te(e);
    }
    for (let F of j) {
      let V = _ ? `/proc/self/fd/${x.fd}` : C,
        Z = null;
      try {
        await Vr(M(V, F));
      } catch (se) {
        if (((Z = se), E(se) === "ENOENT")) throw new Ne(C);
        if (E(se) !== "EEXIST") R$e(se, { ioPath: M(V, F), canonicalPath: M(C, F) }, M(C, F));
      }
      let re;
      try {
        re = await Q9(M(V, F), k | N.O_NOFOLLOW, a);
      } catch (se) {
        if (E(se) === "ELOOP" || E(se) === "ENOTDIR") throw te(e);
        if (E(se) === "ENOENT") {
          let Le;
          if (Z !== null)
            try {
              R$e(Z, { ioPath: M(V, F), canonicalPath: M(C, F) }, M(C, F));
            } catch (Ge) {
              Le = Ge;
            }
          throw new Ne(M(C, F), Le);
        }
        R$e(Z !== null ? Z : se, { ioPath: M(V, F), canonicalPath: M(C, F) }, M(C, F));
      }
      (await x.close(), (x = re));
      let ue = M(C, F);
      if (((C = await A(x, ue)), C !== ue)) {
        if (_ || !(await h(ue, C, x))) throw te(e);
        C = ue;
      }
    }
    if (!_) {
      let F = x,
        V = async () => {
          if (c()) return;
          if (!(await Ft(T, F, a))) throw te(e);
          if (
            r?.leaf !== "replace" &&
            (await de(M(T, s)).then(
              (re) => re.isSymbolicLink(),
              (re) => E(re) !== "ENOENT"
            ))
          )
            throw te(e);
        };
      await V();
      let Z = M(T, s);
      return {
        ioPath: Z,
        canonicalPath: Z,
        readExisting: async (re) => {
          await V();
          let ue = await ust(Z, e, a, re);
          return (await V(), ue);
        },
        recheckBeforeWrite: V,
        close: () => F.close()
      };
    }
    let H = x,
      ee = `/proc/self/fd/${H.fd}/${s}`;
    return {
      ioPath: ee,
      canonicalPath: M(T, s),
      readExisting: (F) => ust(ee, e, a, F),
      recheckBeforeWrite: () => {},
      close: () => H.close()
    };
  } catch (_) {
    throw (await x.close().catch(() => {}), _);
  }
}
function R$e(e, n, r) {
  if (e instanceof Error) {
    let o = e.message;
    for (let s of [n.ioPath, n.canonicalPath]) if (s !== r) o = o.split(s).join(r);
    if (o !== e.message) e.message = o;
  }
  throw e;
}
import {
  basename as ao,
  dirname as lo,
  isAbsolute as co,
  join as ft,
  relative as uo,
  sep as Pn
} from "path";
import { basename as Sn, dirname as Rn } from "path";
import { constants as lt } from "fs";
import {
  link as ri,
  lstat as we,
  open as ut,
  readlink as ii,
  realpath as ai,
  stat as li,
  unlink as ui
} from "fs/promises";
import { basename as rl, dirname as Gt, isAbsolute as il, join as ol, parse as sl } from "path";
var qr = new Set(["ENOENT", "ENOTDIR"]),
  ei = new Set(["EAGAIN", "EBUSY", "EMFILE", "ENFILE", "ENOSPC", "EDQUOT", "ENOMEM"]);
function ti(e) {
  let n = E(e);
  return n !== void 0 && qr.has(n);
}
function hAt(e, n) {
  return E(e) === n;
}
function Lar(e) {
  let n = E(e);
  return n !== void 0 && ei.has(n);
}
function ni(e) {
  return ti(e) ? { kind: "absent" } : { kind: "fs", error: e };
}
function Vci(e) {
  return e.kind === "fs" ? (E(e.error) ?? "unknown") : e.kind;
}
async function X(e) {
  try {
    return jy(await e);
  } catch (n) {
    return Cp(ni(n));
  }
}
var r8r = 384;
async function A7o(e, n, r = r8r) {
  let o = await X(we(e));
  if (!o.ok && o.error.kind !== "absent") return Cp(o.error);
  if (o.ok && !o.value.isFile()) return Cp(fi(e, o.value));
  return X(ut(e, n | $s, r));
}
async function DH(e) {
  if ($s === 0) return A7o(e, lt.O_RDONLY);
  return di(e, await X(ut(e, lt.O_RDONLY | $s)));
}
function di(e, n) {
  return !n.ok && n.error.kind === "fs" && hAt(n.error.error, "ELOOP")
    ? Cp({ kind: "fs", error: Wt(e, "ELOOP") })
    : n;
}
function Wt(e, n) {
  return Object.assign(gi(n), { code: n, path: e });
}
function fi(e, n) {
  return { kind: "fs", error: Wt(e, n.isSymbolicLink() ? "ELOOP" : "ENXIO") };
}
function gi(e) {
  switch (e) {
    case "ELOOP":
      return Error("refusing a symlinked path");
    case "ENXIO":
      return Error("refusing a non-regular file");
    case "EISDIR":
      return Error("refusing a directory at the leaf");
    case "ENOTDIR":
      return Error("refusing a non-directory node on a write path");
    case "EFBIG":
      return Error("refusing a file over the size cap");
    case Zkn:
      return Error("refusing a value that has a second name (hard link)");
    case eTn:
      return Error("refusing a value whose opened object is no longer at its key");
    case Mpi:
      return Error("refusing a hardened read the host cannot verify");
  }
}
async function qci(e, n) {
  let r = await mi();
  if (!r.ok) return r;
  if (r.value) {
    let h = await X(ii(`/proc/self/fd/${e.fd}`));
    if (h.ok) return jy(!h.value.endsWith(" (deleted)") && h.value === n);
    if (h.error.kind === "fs" && Lar(h.error.error)) return h;
    return h.error.kind === "fs" && hAt(h.error.error, "ENAMETOOLONG") ? jy(!1) : jy("unavailable");
  }
  hi();
  let [o, s] = await Promise.all([X(we(n, { bigint: !0 })), X(e.stat({ bigint: !0 }))]);
  if (!s.ok) return s;
  let a = $t(o, s.value);
  if (!a.ok || a.value !== !0) return a;
  let c = await X(ai(Gt(n)));
  if (!c.ok) return c.error.kind === "absent" ? jy(!1) : c;
  if (c.value !== Gt(n)) return jy(!1);
  let u = await X(we(n, { bigint: !0 })),
    p = $t(u, s.value);
  if (!p.ok || p.value !== !0) return p;
  return (o.ok && o.value.nlink > 1n) || (u.ok && u.value.nlink > 1n) || s.value.nlink > 1n
    ? jy("otherNames")
    : jy(!0);
}
function $t(e, n) {
  if (!e.ok) return e.error.kind === "absent" ? jy(!1) : e;
  if (!e.value.isFile()) return jy(!1);
  if (!Ofe(n.ino) || !Ofe(e.value.ino) || n.nlink === 0n || e.value.nlink === 0n)
    return jy("unavailable");
  return jy(e.value.ino === n.ino && e.value.dev === n.dev);
}
class Ut {
  available = void 0;
  probing = void 0;
  procUnreadableLogged = !1;
}
var pi = new W(() => new Ut());
function Yt() {
  return pi.of(U().host);
}
async function mi() {
  let e = Yt();
  if (e.available !== void 0) return jy(e.available);
  return (
    (e.probing ??= X(we("/proc/self/fd")).then((n) => {
      if (((e.probing = void 0), !n.ok && n.error.kind === "fs" && Lar(n.error.error))) return n;
      return ((e.available = n.ok), jy(e.available));
    })),
    e.probing
  );
}
function hi() {
  let e = Yt();
  if (e.procUnreadableLogged) return;
  ((e.procUnreadableLogged = !0),
    t(
      "storage: /proc descriptor record unreadable for hardened reads on this host; using the post-open recheck"
    ));
}
function Ofe(e) {
  return !Wu(e);
}
var C7o = "LinkMisdirected",
  Nar = "LinkUnverified";
async function Yci(e, n, r) {
  if (!Ofe(n.inode))
    return Cp({ kind: "classified", error: Qkn("unknown", { telemetryCode: Nar }) });
  let o = await X(ri(e, r));
  if (!o.ok) return o;
  let s = await X(we(r, { bigint: !0 }));
  if (!s.ok)
    return s.error.kind === "absent"
      ? Cp({ kind: "classified", error: Qkn("unknown", { telemetryCode: Nar }) })
      : s;
  if (!Ofe(s.value.ino))
    return Cp({ kind: "classified", error: Qkn("unknown", { telemetryCode: Nar }) });
  if (je(s.value, n) || (await yi(r, n))) return jy(void 0);
  let a = { device: s.value.dev, inode: s.value.ino },
    [c, u] = await Promise.all([X(we(e, { bigint: !0 })), X(li(e, { bigint: !0 }))]),
    p = (c.ok && je(c.value, a)) || (u.ok && je(u.value, a));
  if (
    (t(
      `storage: a link publish landed on another object (expected ${n.device}:${n.inode}, found ${a.device}:${a.inode}, ${s.value.isSymbolicLink() ? "a symlink" : `nlink ${s.value.nlink}`}); ${p ? "the staged name was swapped \u2014 removing the entry" : "leaving the entry"}`,
      { level: "warn" }
    ),
    p)
  ) {
    let h = await X(we(r, { bigint: !0 }));
    if (h.ok && je(h.value, a)) await X(ui(r));
  }
  return Cp({ kind: "classified", error: Qkn("unknown", { telemetryCode: C7o }) });
}
async function yi(e, n) {
  let r = await X(ut(e, lt.O_RDONLY | $s));
  if (!r.ok) return !1;
  try {
    let o = await X(r.value.stat({ bigint: !0 }));
    return o.ok && je(o.value, n);
  } finally {
    await X(r.value.close());
  }
}
function je(e, n) {
  return Ofe(e.ino) && e.dev === n.device && e.ino === n.inode;
}
function bi(e) {
  return El(
    e,
    "expected a segment that is not empty or made only of dots and spaces, with no path separator, NUL or set-aside shape"
  );
}
function Rm(e) {
  if (typeof e !== "object" || e === null) return El("key", "expected a key object");
  let n = vi(e);
  if (n !== void 0) return n;
  let r = no(e);
  if (r === void 0) return El("key", `${e.namespace} is not a storage namespace`);
  return zt("key", r);
}
function zt(e, n) {
  for (let [r, o, s] of n) {
    let a = `${e}.${r}`;
    if (o === void 0) {
      if (s !== "optional") return El(a, "required");
    } else if (wi(r)) {
      if (
        !(e === "scope" && r === "agentRelPath" && Array.isArray(o) && o.length === 0) &&
        (!Array.isArray(o) || !cT(o))
      )
        return El(
          a,
          "expected a non-empty array of segments, none empty or made only of dots and spaces, with no path separator, NUL or set-aside shape"
        );
    } else if (typeof o !== "string" || !_r(o)) return bi(a);
  }
  return;
}
function wi(e) {
  return e === "relPath" || e === "agentRelPath";
}
var Xt = [
  "commands",
  "agents",
  "output-styles",
  "skills",
  "workflows",
  "routines",
  "themes",
  "rules",
  "session-env",
  "uploads",
  "mcp-skill-archives",
  "usage-data",
  "mcp-discovery-cache"
];
var Jt = new Set(Xt),
  Zt = `must be one of the userConfigDir directory names (${Xt.join(", ")})`,
  Qt = ["installed", "marketplaces", "flagged", "catalog", "inUseSweep"];
var Ei = new Set(Qt),
  Si = `must be one of the pluginRegistry files (${Qt.join(", ")})`,
  qt = ["manifest", "catalog"];
var Ri = new Set(qt),
  _i = `must be one of the marketplaceCache forms (${qt.join(", ")})`;
var tn = ["world"];
var Pi = new Set(tn),
  ki = `must be one of the session journal names (${tn.join(", ")})`;
function xi(e) {
  return Pi.has(e);
}
function Ii(e) {
  return typeof e === "string" && /^[0-9a-f]{64}$/.test(e);
}
function vi(e) {
  if (e.namespace === "transcript") return Li(e);
  if (e.namespace === "pluginAssetCache" && !Ii(e.digest))
    return El("key.digest", "must be a SHA-256 digest: 64 lowercase hexadecimal characters");
  if (e.namespace === "globalConfig" && "kind" in e) {
    if (!sn(e.kind)) return El("key.kind", on);
    if (typeof e.stamp !== "string")
      return El("key.stamp", "a recovery copy key carries its stamp");
  }
  if (e.namespace === "task") return Yi(e);
  if (e.namespace === "sidecar") {
    let n = Ue("key.sessionId", e.sessionId);
    if (n !== void 0) return n;
    if (Ve(e.relPath)) return El("key.relPath", Me);
    return un(e.relPath) ? El("key.relPath", ln) : void 0;
  }
  if (e.namespace === "recording")
    return Ue("key.sessionId", e.sessionId) ?? (cn(e.stamp) ? void 0 : El("key.stamp", Fi));
  if (e.namespace === "jobsRoot") return Vi(e);
  if (e.namespace === "userConfigDir" && !Jt.has(e.dir)) return El("key.dir", Zt);
  if (e.namespace === "fileHistory") return Ci(e);
  if (e.namespace === "settings" && !$i(e.layer))
    return El("key.layer", "must be user, project or local");
  if (e.namespace === "log") return Wi(e);
  if (e.namespace === "job" && wn(e.relPath)) return El("key.relPath", bn);
  if (e.namespace === "sessionLog")
    return (
      En("key", e) ??
      (qi(e.logName)
        ? void 0
        : El(
            "key.logName",
            "must be the session-log stem <sessionId8>[-<title-slug>]: up to eight word characters, then lower-case a-z / 0-9 runs joined by single hyphens; not a bare device name"
          ))
    );
  if (e.namespace === "pluginRegistry" && !Ei.has(e.file)) return El("key.file", Si);
  if (e.namespace === "marketplaceCache") {
    if (!("relPath" in e)) return Ri.has(e.form) ? void 0 : El("key.form", _i);
    return e.form === void 0 ? void 0 : El("key.form", "a tree file key carries relPath, not form");
  }
  if (e.namespace !== "agentMemory") return;
  if (!nn(e.layer)) return El("key.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e)
    return El("key.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string")
    return El("key.projectKey", "required for the project and local layers");
  return typeof e.agentType === "string"
    ? void 0
    : El("key.agentType", "an agent memory key names its agent");
}
function Ci(e) {
  return typeof e.backupFileName !== "string" || !K4t.test(e.backupFileName)
    ? El(
        "key.backupFileName",
        "must be a backup file name the engine has ever written (hex hash @v version)"
      )
    : void 0;
}
function nn(e) {
  return e === "user" || e === "project" || e === "local";
}
var rn = ["backup", "corrupted"];
var Ai = new Set(rn),
  on = `must be one of the global-config copy kinds (${rn.join(", ")})`;
function sn(e) {
  return Ai.has(e);
}
function Li(e) {
  let n = Ue("key.sessionId", e.sessionId);
  if (n !== void 0) return n;
  if (Ve(e.agentRelPath)) return El("key.agentRelPath", Me);
  if ("sessionJournal" in e) {
    if (typeof e.sessionJournal !== "string" || !xi(e.sessionJournal))
      return El("key.sessionJournal", ki);
    return e.agentId === void 0 && e.agentRelPath === void 0 && !("journal" in e)
      ? void 0
      : El(
          "key.sessionJournal",
          "a session journal key names the session's own journal: no agentId, agentRelPath or run journal"
        );
  }
  if ("journal" in e) {
    if (e.journal !== !0) return El("key.journal", "must be true");
    if (!Array.isArray(e.agentRelPath))
      return El("key.agentRelPath", "a run journal key carries its run directory");
    return e.agentId === void 0
      ? void 0
      : El(
          "key.agentId",
          "a transcript key names an agent transcript or the run journal, never both"
        );
  }
  return e.agentRelPath !== void 0 && e.agentId === void 0
    ? El("key.agentRelPath", "requires agentId or journal")
    : void 0;
}
var w4t = "cloud-snapshots",
  $ar = "side.git",
  Xci = "archive-sync",
  Jci = "folder-sync";
var R7o = "steps-under-way",
  an = new Set(["memory", "tiny_memory", "bagel", w4t, "bridge-pointer.json", ".session-aliases"]),
  Ti = /^[0-9]{1,16}$/,
  Fi = "must be the recording stamp: 1 to 16 decimal digits (epoch milliseconds)",
  $e = ".cast",
  ln = `<stamp>${$e} inside a session's folder is that session's terminal recording stream: address it as keys.recording(projectKey, sessionId, stamp)`;
function cn(e) {
  return typeof e === "string" && Ti.test(e);
}
function un(e) {
  return Array.isArray(e) && typeof e[0] === "string" && JZ(e[0]).some((n) => x7o(n) !== void 0);
}
function x7o(e) {
  if (!e.endsWith($e)) return;
  let n = e.slice(0, -$e.length);
  return cn(n) ? n : void 0;
}
var dn = [".ccr-tip.json", ".precompact.json", $e],
  Di = `must not end with ${dn.join(", ")}: those name a session's project-level sibling files`;
function fn(e) {
  return JZ(e).some((n) => dn.some((r) => n.endsWith(r)));
}
var o8r = ".dir-sync.json",
  Ni = `must not end with ${o8r}: that name is reserved for a cloud session's record at the project level`;
function ji(e) {
  return JZ(e).some((n) => n.endsWith(o8r));
}
var Mi = `${[...an].join(", ")} are reserved: they name project-level entries, not sessions`;
function gn(e) {
  return JZ(e).some((n) => an.has(n));
}
function Qci(e) {
  return !gn(e) && !fkn(e) && !fn(e);
}
function Ue(e, n) {
  if (typeof n !== "string") return;
  if (gn(n)) return El(e, Mi);
  if (fn(n)) return El(e, Di);
  if (ji(n)) return El(e, Ni);
  return fkn(n) ? El(e, Me) : void 0;
}
var Bi = ".meta.json",
  Hi = ".meta is reserved for the list metadata key, under every spelling that opens its file";
function Ki(e) {
  return Gi(`${e}.json`);
}
function Gi(e) {
  return JZ(e).includes(Bi);
}
var Me = "names a .jsonl stream, which only a transcript key addresses";
function Ve(e) {
  return Array.isArray(e) && e.some((n) => typeof n === "string" && fkn(n));
}
function $i(e) {
  return e === "user" || e === "project" || e === "local";
}
var pn = "must be debug, telemetry or apiDump";
function mn(e) {
  return e === "debug" || e === "telemetry" || e === "apiDump";
}
function Wi(e) {
  if (!mn(e.channel)) return El("key.channel", pn);
  if (e.channel !== "apiDump") return;
  for (let n of ["agentId", "runId"])
    if (n in e && e[n] !== void 0)
      return El(
        `key.${n}`,
        "an apiDump key names its dump by one id \u2014 the agent's for a subagent's requests, else the session's (today's dump-prompts/<id>.jsonl); agentId and runId nest nothing on this channel"
      );
  return;
}
function Yi(e) {
  if ("taskId" in e && ("meta" in e || "highWaterMark" in e))
    return El(
      "key.taskId",
      "a task key names an item, the list metadata or the list high-water mark, never more than one"
    );
  if ("meta" in e && "highWaterMark" in e)
    return El(
      "key.highWaterMark",
      "a task key names an item, the list metadata or the list high-water mark, never more than one"
    );
  if ("meta" in e && e.meta !== !0) return El("key.meta", "must be true");
  if ("highWaterMark" in e && e.highWaterMark !== !0)
    return El("key.highWaterMark", "must be true");
  if (typeof e.listId !== "string") return El("key.listId", "a task key carries its listId");
  if ("meta" in e || "highWaterMark" in e) return;
  if (typeof e.taskId !== "string") return El("key.taskId", "a task item key carries its taskId");
  if (Ki(e.taskId)) return El("key.taskId", Hi);
  return;
}
function Vi(e) {
  if ("file" in e && "draftKey" in e)
    return El("key.draftKey", "a jobs-root key names the pins file or one draft, never both");
  if ("file" in e) return e.file === "pins" ? void 0 : El("key.file", "must be pins");
  if (typeof e.draftKey !== "string")
    return El("key.draftKey", "a jobs-root draft key carries its draftKey");
  return to.test(e.draftKey) ? void 0 : El("key.draftKey", "must be 8 lowercase hex characters");
}
var yn = "timeline.jsonl",
  bn = `${yn} is the job's timeline stream: address it as keys.jobTimeline(jobId)`;
function wn(e) {
  return Array.isArray(e) && typeof e[0] === "string" && JZ(e[0]).includes(yn);
}
var zi = /^\d{4}$/,
  Vt = /^\d{2}$/,
  Xi = /^[A-Za-z0-9_-]{1,8}(?:-[a-z0-9]+)*$/,
  Ji = 128,
  Zi = /^(?:con|prn|aux|nul|com\d|lpt\d)$/i;
function qi(e) {
  return typeof e === "string" && e.length <= Ji && Xi.test(e) && !Zi.test(e);
}
function En(e, n) {
  if (n.year !== void 0 && !dt(zi, n.year)) return El(`${e}.year`, "must be four digits (YYYY)");
  if (n.month !== void 0 && !dt(Vt, n.month)) return El(`${e}.month`, "must be two digits (MM)");
  if (n.day !== void 0 && !dt(Vt, n.day)) return El(`${e}.day`, "must be two digits (DD)");
  return;
}
function dt(e, n) {
  return typeof n === "string" && e.test(n);
}
function eo(e) {
  if (e.year !== void 0 && e.projectKey === void 0)
    return El("scope.projectKey", "required when year is given");
  if (e.month !== void 0 && e.year === void 0)
    return El("scope.year", "required when month is given");
  if (e.day !== void 0 && e.month === void 0)
    return El("scope.month", "required when day is given");
  return En("scope", e);
}
var to = /^[0-9a-f]{8}$/;
function no(e) {
  switch (e.namespace) {
    case "transcript":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["agentId", e.agentId, "optional"],
        ["agentRelPath", e.agentRelPath, "optional"]
      ];
    case "history":
    case "identity":
      return [];
    case "globalConfig":
      return "kind" in e ? [["stamp", e.stamp]] : [];
    case "settings":
      return e.layer === "user"
        ? []
        : e.layer === "project"
          ? [["projectKey", e.projectKey]]
          : [["consentRootKey", e.consentRootKey]];
    case "task":
      return "taskId" in e
        ? [
            ["listId", e.listId],
            ["taskId", e.taskId]
          ]
        : [["listId", e.listId]];
    case "memory":
      return [
        ["projectKey", e.projectKey],
        ["relPath", e.relPath]
      ];
    case "pluginRegistry":
      return [];
    case "marketplaceCache":
      return "relPath" in e
        ? [
            ["marketplace", e.marketplace],
            ["relPath", e.relPath]
          ]
        : [["marketplace", e.marketplace]];
    case "pluginCache":
      return [
        ["marketplace", e.marketplace],
        ["plugin", e.plugin],
        ["version", e.version],
        ["relPath", e.relPath]
      ];
    case "cache":
      return [
        ["store", e.store],
        ["id", e.id]
      ];
    case "paste":
      return [["id", e.id]];
    case "pluginAssetCache":
      return [["digest", e.digest]];
    case "state":
      return [["id", e.id]];
    case "plan":
      return [["name", e.name]];
    case "feedbackDraft":
      return [["draftId", e.draftId]];
    case "agentMemory":
      return [
        ...(e.layer === "user" ? [] : [["projectKey", e.projectKey]]),
        ["agentType", e.agentType],
        ["relPath", e.relPath]
      ];
    case "team":
      return [["team", e.team]];
    case "sidecar":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["relPath", e.relPath]
      ];
    case "scratch":
      return [
        ["sessionId", e.sessionId],
        ["relPath", e.relPath]
      ];
    case "userConfigDir":
      return [["relPath", e.relPath]];
    case "fileHistory":
      return [
        ["sessionId", e.sessionId],
        ["backupFileName", e.backupFileName]
      ];
    case "job":
      return [
        ["jobId", e.jobId],
        ["relPath", e.relPath]
      ];
    case "daemon":
      return [["relPath", e.relPath]];
    case "jobsRoot":
      return "file" in e ? [] : [["draftKey", e.draftKey]];
    case "session":
      return [["file", e.file]];
    case "bridgePointer":
    case "sessionAliases":
      return [["projectKey", e.projectKey]];
    case "dirSyncRecord":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId]
      ];
    case "mailbox":
      return [
        ["team", e.team],
        ["teammate", e.teammate]
      ];
    case "log":
      return [
        ["sessionId", e.sessionId],
        ["agentId", e.agentId, "optional"],
        ["runId", e.runId, "optional"]
      ];
    case "jobTimeline":
      return [["jobId", e.jobId]];
    case "recording":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["stamp", e.stamp]
      ];
    case "sessionLog":
      return [
        ["projectKey", e.projectKey],
        ["year", e.year],
        ["month", e.month],
        ["day", e.day],
        ["logName", e.logName]
      ];
  }
  return;
}
function yAt(e) {
  if (typeof e !== "object" || e === null) return El("scope", "expected a scope object");
  let n = so(e);
  if (n === void 0) return El("scope", `${String(e.namespace)} is not a listable namespace`);
  return io(e) ?? zt("scope", n);
}
var ro = {
  transcript: [
    [
      "agentId",
      "names one agent transcript, a stream key, not a scope: narrow a scope with agentRelPath"
    ],
    ["journal", "names a run journal, a stream key, not a scope: narrow a scope with agentRelPath"],
    [
      "sessionJournal",
      "names a session's own journal, a stream key, not a scope: the session scope lists it"
    ]
  ],
  log: [
    ["agentId", "names one log stream, a stream key, not a scope"],
    ["runId", "names one log stream, a stream key, not a scope"]
  ],
  sessionLog: [
    ["logName", "names one session's log, a stream key, not a scope: a day scope lists its logs"]
  ],
  task: [
    ["taskId", "names one task value, a key, not a scope: a list scope narrows with listId only"],
    ["meta", "names one task value, a key, not a scope: a list scope narrows with listId only"],
    [
      "highWaterMark",
      "names one task value, a key, not a scope: a list scope narrows with listId only"
    ]
  ],
  mailbox: [["teammate", "names one inbox, a key, not a scope"]],
  cache: [
    ["id", "names one cached value, a key, not a scope: a cache scope narrows with store only"]
  ],
  pluginAssetCache: [["digest", "names one cached asset, a key, not a scope"]],
  fileHistory: [
    [
      "backupFileName",
      "names one backup, a key, not a scope: a file-history scope narrows with sessionId only"
    ]
  ],
  state: [["id", "names one value, a key, not a scope"]],
  feedbackDraft: [["draftId", "names one draft, a key, not a scope"]],
  jobsRoot: [
    ["file", "names one value, a key, not a scope"],
    ["draftKey", "names one value, a key, not a scope"]
  ],
  plan: [["name", "names one plan, a key, not a scope"]],
  paste: [["id", "names one paste, a key, not a scope"]],
  session: [["file", "names one value, a key, not a scope"]],
  globalConfig: [
    ["stamp", "names one recovery copy, a key, not a scope: the scope narrows with kind only"]
  ],
  marketplaceCache: [
    [
      "form",
      "names one of the marketplace's two engine-written files, a key, not a scope: the tree narrows with relPath only"
    ]
  ],
  memory: [],
  pluginCache: [],
  daemon: [],
  sidecar: [],
  agentMemory: [],
  scratch: [],
  userConfigDir: [],
  job: [],
  bridgeSpawn: []
};
function io(e) {
  let n = e.namespace === "agentMemory" ? oo(e) : void 0;
  if (n !== void 0) return n;
  if (e.namespace === "transcript" || e.namespace === "sidecar") {
    let o = Ue("scope.sessionId", e.sessionId);
    if (o !== void 0) return o;
  }
  for (let [o, s] of ro[e.namespace]) if (o in e && e[o] !== void 0) return El(`scope.${o}`, s);
  if (e.namespace === "sidecar" && Ve(e.relPath)) return El("scope.relPath", Me);
  if (e.namespace === "sidecar" && un(e.relPath)) return El("scope.relPath", ln);
  if (e.namespace === "log" && e.channel !== void 0 && !mn(e.channel))
    return El("scope.channel", pn);
  if (e.namespace === "job" && wn(e.relPath)) return El("scope.relPath", bn);
  let r = e.namespace === "sessionLog" ? eo(e) : void 0;
  if (r !== void 0) return r;
  if (e.namespace === "scratch" && e.sessionId === void 0 && e.relPath !== void 0)
    return El(
      "scope.relPath",
      "requires scope.sessionId: a scratch relPath narrows one session directory, and no cross-session prefix filter exists"
    );
  if (e.namespace === "userConfigDir" && !Jt.has(e.dir)) return El("scope.dir", Zt);
  if (
    e.namespace === "transcript" &&
    e.agentRelPath !== void 0 &&
    (e.projectKey === void 0 || e.sessionId === void 0)
  )
    return El(
      "scope.agentRelPath",
      "requires scope.projectKey and scope.sessionId: an agentRelPath narrows the subagents/ tree of one session directory"
    );
  if (e.namespace === "transcript" && Ve(e.agentRelPath)) return El("scope.agentRelPath", Me);
  if (e.namespace === "pluginCache") {
    if (e.marketplace === void 0 && e.plugin !== void 0)
      return El(
        "scope.plugin",
        "requires scope.marketplace: a plugin narrows one marketplace folder"
      );
    if (e.plugin === void 0 && e.version !== void 0)
      return El("scope.version", "requires scope.plugin: a version narrows one plugin folder");
    if (e.version === void 0 && e.relPath !== void 0)
      return El("scope.relPath", "requires scope.version: a relPath narrows one version folder");
  }
  if (e.namespace === "job" && e.jobId === void 0 && e.relPath !== void 0)
    return El(
      "scope.relPath",
      "requires scope.jobId: a job relPath narrows one job directory, and no cross-job prefix filter exists"
    );
  if (e.namespace === "transcript" && e.projectKey === void 0 && e.sessionId !== void 0)
    return El(
      "scope.sessionId",
      "requires scope.projectKey: a session narrows one project folder, and no cross-project session filter exists"
    );
  if (e.namespace === "globalConfig" && e.kind !== void 0 && !sn(e.kind))
    return El("scope.kind", on);
  return;
}
function oo(e) {
  if (!nn(e.layer)) return El("scope.layer", "must be user, project or local");
  if (e.layer === "user" && "projectKey" in e)
    return El("scope.projectKey", "the user layer is not keyed by project");
  if (e.layer !== "user" && typeof e.projectKey !== "string")
    return El("scope.projectKey", "required for the project and local layers");
  return e.agentType === void 0 && e.relPath !== void 0
    ? El(
        "scope.relPath",
        "requires scope.agentType: an agent-memory relPath narrows one agent directory"
      )
    : void 0;
}
function so(e) {
  switch (e.namespace) {
    case "transcript":
      return [
        ["projectKey", e.projectKey, "optional"],
        ["sessionId", e.sessionId, "optional"],
        ["agentRelPath", e.agentRelPath, "optional"]
      ];
    case "task":
      return [["listId", e.listId, "optional"]];
    case "mailbox":
      return [["team", e.team, "optional"]];
    case "memory":
      return [
        ["projectKey", e.projectKey],
        ["relPath", e.relPath, "optional"]
      ];
    case "pluginCache":
      return [
        ["marketplace", e.marketplace, "optional"],
        ["plugin", e.plugin, "optional"],
        ["version", e.version, "optional"],
        ["relPath", e.relPath, "optional"]
      ];
    case "marketplaceCache":
      return [
        ["marketplace", e.marketplace],
        ["relPath", e.relPath, "optional"]
      ];
    case "cache":
      return [["store", e.store]];
    case "state":
    case "plan":
    case "paste":
    case "pluginAssetCache":
    case "feedbackDraft":
      return [];
    case "sidecar":
      return [
        ["projectKey", e.projectKey],
        ["sessionId", e.sessionId],
        ["relPath", e.relPath, "optional"]
      ];
    case "agentMemory":
      return [
        ["projectKey", e.layer === "user" ? void 0 : e.projectKey, "optional"],
        ["agentType", e.agentType, "optional"],
        ["relPath", e.relPath, "optional"]
      ];
    case "scratch":
      return [
        ["sessionId", e.sessionId, "optional"],
        ["relPath", e.relPath, "optional"]
      ];
    case "userConfigDir":
      return [["relPath", e.relPath, "optional"]];
    case "fileHistory":
      return [["sessionId", e.sessionId, "optional"]];
    case "job":
      return [
        ["jobId", e.jobId, "optional"],
        ["relPath", e.relPath, "optional"]
      ];
    case "daemon":
      return [["relPath", e.relPath, "optional"]];
    case "jobsRoot":
    case "session":
      return [];
    case "bridgeSpawn":
      return [["dir", e.dir, "optional"]];
    case "globalConfig":
      return [["kind", e.kind, "optional"]];
    case "log":
      return [["sessionId", e.sessionId, "optional"]];
    case "sessionLog":
      return [
        ["projectKey", e.projectKey, "optional"],
        ["year", e.year, "optional"],
        ["month", e.month, "optional"],
        ["day", e.day, "optional"]
      ];
  }
  return;
}
var $7o = 6;
function $4e(e) {
  return e.endsWith(".meta.json") ? dT(e) : void 0;
}
function dT(e) {
  let n = Sn(e);
  if (fkn(n)) return;
  let r = im(),
    o = [n],
    s = Rn(e);
  while (s !== r && o.length <= $7o + 1) {
    let h = Rn(s);
    if (h === s) return;
    (o.unshift(Sn(s)), (s = h));
  }
  if (s !== r || o.length < 3) return;
  let [a, c, ...u] = o;
  if (!_r(a) || !_r(c) || u.length === 0 || !u.every(_r)) return;
  let p = We.sidecar(a, c, u);
  return Rm(p) === void 0 ? p : void 0;
}
function jEn(e) {
  return typeof e === "string" ? dT(e) : e.key;
}
var cxe = "tool-results";
function PI(e) {
  return kn(e.root.id, () => So(e.root).originalCwd);
}
function hC() {
  return kn(q(), ke);
}
function yq(e) {
  return J() ? null : PI(e);
}
function Uar() {
  return J() ? null : hC();
}
function kn(e, n) {
  return ft(Fst() ?? JS(n()), e, cxe);
}
function d6(e, n) {
  if (ao(e) !== cxe || !_r(n)) return;
  return dT(ft(e, n));
}
function fo(e) {
  let n = d6(e, "probe");
  if (n === void 0 || n.namespace !== "sidecar") return;
  return {
    namespace: "sidecar",
    projectKey: n.projectKey,
    sessionId: n.sessionId,
    relPath: n.relPath.slice(0, -1)
  };
}
async function AM(e, n) {
  if (z() && n !== void 0) {
    let s = fo(e);
    if (s !== void 0)
      try {
        if ((await n.ensureScope(s)).ok) return;
      } catch {}
  }
  if (J()) {
    t("tool-results folder not made: diskless session");
    return;
  }
  let r = hn(),
    o = !1;
  try {
    o = await po(r, e);
  } catch {}
  if (!o) return;
  try {
    await r.mkdir(e);
  } catch (s) {
    return s;
  }
}
var go = 3;
async function po(e, n) {
  return (await xn(e, n)) === void 0;
}
async function xn(e, n) {
  let r = im(),
    o = uo(r, n);
  if (o === "" || o === ".." || o.startsWith(".." + Pn) || co(o)) return;
  let s = r;
  for (let a of o.split(Pn)) {
    s = ft(s, a);
    let c = await e.lstat(s);
    if (c === void 0) return;
    if (c.isSymbolicLink || !c.isDirectory) return s;
  }
  return;
}
async function WEn(e, n) {
  if (J()) throw new R("tool-results file refused: this session keeps no files on this machine");
  let r = await xn(n, e);
  if (r !== void 0)
    throw new R(
      `tool-results path refused: ${r} is a link or not a directory`,
      "tool-results path refused: a directory on the way is a link or not a directory"
    );
}
async function Dfe(e, n, r) {
  let o = hn();
  await WEn(lo(e), o);
  for (let s = 1; ; s++) {
    if (s > 1) await vn(o, e);
    else await F7o(e, o);
    try {
      await o.writeBytesExclusive(e, n, r);
      return;
    } catch (a) {
      if (E(a) !== "EEXIST" || s >= go) throw a;
    }
  }
}
async function F7o(e, n) {
  if ((await n.lstat(e))?.isSymbolicLink) await vn(n, e);
}
async function vn(e, n) {
  try {
    await e.delete(n);
  } catch (r) {
    if (E(r) !== "ENOENT") throw r;
  }
}
function xo(e) {
  let { firstPage: n, lastPage: r } = e ?? {};
  if (n === void 0) return "page range";
  if (r === void 0 || r === 1 / 0) return `pages ${n}-`;
  if (n === r) return `page ${n}`;
  return `pages ${n}-${r}`;
}
async function cui(e, n) {
  try {
    let o = (await e.stat()).size;
    if (o === 0)
      return { success: !1, error: { reason: "empty", message: `PDF file is empty: ${n}` } };
    if (o > Far)
      return {
        success: !1,
        error: {
          reason: "too_large",
          message: `PDF file exceeds maximum allowed size of ${en(Far)}.`
        }
      };
    let { bytes: s } = await Ww(e, o, o);
    if (!s.subarray(0, 5).toString("ascii").startsWith("%PDF-"))
      return {
        success: !1,
        error: {
          reason: "corrupted",
          message: `File is not a valid PDF (missing %PDF- header): ${n}`
        }
      };
    let c = s.toString("base64");
    return {
      success: !0,
      data: { type: "pdf", file: { filePath: n, base64: c, originalSize: o } }
    };
  } catch (r) {
    if (tg(r)) throw r;
    return {
      success: !1,
      error: { reason: "unknown", message: d(r), category: ze(r), site: "read" }
    };
  }
}
async function l8r(e, n, r = "linux") {
  if (n === void 0) return gt(Bn(e, r), void 0);
  if (e === C$e(n.handle.fd)) return gt(H$e, { inheritFd: n.handle.fd, abortSignal: n.signal });
  if ((await hc("pdfinfo").catch(() => null)) === null)
    return { pageCount: null, pdfinfoFailure: { reason: "not_found" } };
  if (n.size > NEn) return { pageCount: null, pdfinfoFailure: { reason: "not_run" } };
  try {
    return await gt(jn, {
      input: await Mn(n.handle, n.size, AbortSignal.any([n.signal, AbortSignal.timeout(Nn)])),
      abortSignal: n.signal
    });
  } catch (o) {
    if (o instanceof Ye || tg(o))
      t(
        `PDF page count: the open file was not read for pdfinfo (${E(o) ?? d(o)}); going without a count`,
        { level: "warn" }
      );
    else l(o);
    return { pageCount: null, pdfinfoFailure: { reason: "not_run" } };
  }
}
async function gt(e, n) {
  let {
    code: r,
    stdout: o,
    exitCode: s,
    timedOut: a
  } = await it("pdfinfo", [e], { timeout: Nn, useCwd: !1, ...n });
  if (r === 0) {
    let p = /^Pages:\s+(\d+)/m.exec(o);
    return p
      ? { pageCount: parseInt(p[1], 10) }
      : { pageCount: null, pdfinfoFailure: { reason: "no_page_count" } };
  }
  if (a) return { pageCount: null, pdfinfoFailure: { reason: "timeout" } };
  if (s !== void 0)
    return { pageCount: null, pdfinfoFailure: { reason: "nonzero_exit", exitCode: s } };
  return {
    pageCount: null,
    pdfinfoFailure: {
      reason: (await hc("pdfinfo").catch(() => null)) === null ? "not_found" : "no_exit_status"
    }
  };
}
function uui(e) {
  switch (e.reason) {
    case "timeout":
      return "pdfinfo timed out";
    case "not_found":
      return "pdfinfo was not found";
    case "no_exit_status":
      return "pdfinfo did not run to completion";
    case "nonzero_exit":
      return `pdfinfo failed (exit code ${e.exitCode})`;
    case "no_page_count":
      return "pdfinfo did not report a page count";
    case "not_run":
      return "pdfinfo was not run";
  }
}
function pt(e) {
  let n = e === "win32" ? 0 : (Cn.O_NONBLOCK ?? 0);
  return Cn.O_RDONLY | n;
}
var Dn = 259,
  Nn = 1e4,
  jn = "-",
  Io = 1048576;
async function Mn(e, n, r) {
  let o = Buffer.allocUnsafe(n),
    s = 0;
  while (s < n) {
    let a = e.read(o, s, Math.min(Io, n - s), s),
      { bytesRead: c } = r === void 0 ? await a : await si(a, r, () => new Ye());
    if (c === 0) break;
    s += c;
  }
  return o.subarray(0, s);
}
var vo = String(2147483647).length;
function Bn(e, n) {
  if (n !== "win32" || e.length <= Dn || !An.isAbsolute(e)) return e;
  return An.toNamespacedPath(e);
}
async function Co(e, { platform: n, scratchRoot: r }) {
  let o = {
      prefix: Ie(e, "page"),
      collect: () => Promise.resolve(),
      [Symbol.asyncDispose]: () => Promise.resolve()
    },
    s = o.prefix.length + 1 + vo + 4;
  if (n !== "win32" || s <= Dn) return o;
  let a;
  try {
    a = await wo(Ie(r(), rkn));
  } catch (p) {
    return (
      t(
        `PDF extraction: could not create a scratch directory under the temp dir (${E(p) ?? d(p)}); rendering page images directly into the tool-results directory`,
        { level: "warn" }
      ),
      o
    );
  }
  let c = () => Ro(a, { recursive: !0, force: !0 }),
    u = bt(c);
  return {
    prefix: Ie(a, "p"),
    collect: () => Ao(a, e),
    [Symbol.asyncDispose]: () =>
      c().then(u, (p) =>
        t(
          `PDF extraction: scratch directory not removed (${E(p) ?? d(p)}); removal is retried at exit`,
          { level: "warn" }
        )
      )
  };
}
async function Ao(e, n) {
  let r = await Fn(e),
    s = (
      await Promise.allSettled(
        r.filter((a) => /^p-\d+\.jpg$/.test(a)).map((a) => Oo(Ie(e, a), Ie(n, `page${a.slice(1)}`)))
      )
    ).find((a) => a.status === "rejected");
  if (s !== void 0) throw s.reason;
}
async function Oo(e, n) {
  try {
    await Os(e, n);
  } catch (r) {
    let o = E(r);
    if (o === void 0 || !(iP.has(o) || vq.has(o))) throw r;
    await ho(e, n);
  }
}
class Hn {
  available = void 0;
  markAvailable() {
    this.available = !0;
  }
  reset() {
    this.available = void 0;
  }
}
var Lo = new W(() => new Hn());
function To() {
  return Lo.of(U().host);
}
async function U7o() {
  let e = To();
  if (e.available !== void 0) return e.available;
  let { code: n, stderr: r } = await it("pdftoppm", ["-v"], { timeout: 5000, useCwd: !1 }),
    o = n === 0 || (n !== 127 && r.length > 0);
  if (o) e.markAvailable();
  return o;
}
async function fui(e, n, r, o = { platform: "linux", scratchRoot: Ap }) {
  try {
    let s = n?.held !== void 0 && e === C$e(n.held.fd) ? n.held : void 0,
      a = s === void 0 ? n?.held : void 0,
      c = a ?? (await Eo(e, pt("linux"))),
      u = await c.stat().finally(() => (c === a ? void 0 : c.close()));
    if (!u.isFile())
      return {
        success: !1,
        error: { reason: "corrupted", message: `Path is not a regular file: ${e}` }
      };
    let p = u.size;
    if (p === 0)
      return { success: !1, error: { reason: "empty", message: `PDF file is empty: ${e}` } };
    if (p > NEn)
      return {
        success: !1,
        error: {
          reason: "too_large",
          message: `PDF file exceeds maximum allowed size for text extraction (${en(NEn)}).`
        }
      };
    if (n?.signal?.aborted) throw new Ye();
    if (!(await U7o()))
      return {
        success: !1,
        error: {
          reason: "unavailable",
          message:
            "pdftoppm is not installed. Install poppler-utils (e.g. `brew install poppler` or `apt-get install poppler-utils`) to enable PDF page rendering."
        }
      };
    let S = a === void 0 ? void 0 : await Mn(a, p, n?.signal),
      w = mo(),
      y = Ie(hC(), `pdf-${w}`),
      b = r === void 0 ? void 0 : Gn(y);
    await bo(y, { recursive: !0 });
    await using v = await Co(y, o);
    let k = s === void 0 ? Bn(e, o.platform) : H$e,
      P = ["-jpeg", "-r", "100"];
    if (n?.firstPage) P.push("-f", String(n.firstPage));
    if (n?.lastPage && n.lastPage !== 1 / 0) P.push("-l", String(n.lastPage));
    P.push(S === void 0 ? k : jn, v.prefix);
    let {
      code: j,
      stderr: x,
      exitCode: B
    } = await it("pdftoppm", P, {
      timeout: 120000,
      abortSignal: n?.signal,
      waitForExitAfterKill: !0,
      useCwd: !1,
      ...(S !== void 0 && { input: S }),
      ...(s !== void 0 && { inheritFd: s.fd })
    });
    if (j !== 0) {
      if (n?.signal?.aborted && B === void 0) throw new Ye();
      let T = Ln(k),
        H = x
          .split(T)
          .map((Q) => Q.replaceAll(k, () => e))
          .join(e),
        ee = (Q) => ({
          success: !1,
          error: {
            reason: "unknown",
            message: `pdftoppm failed: ${H}`,
            category: Q,
            site: "extract",
            exitCode: B
          }
        }),
        F = x.split(/\r?\n/);
      if (F.some((Q) => Kn.test(Q))) return ee(On(x));
      let V = `I/O Error: Couldn't open file '${T}'`,
        Z = F.find((Q) => {
          let Pe = Q.trimEnd();
          return (
            Pe === V ||
            (Pe.startsWith(`${V}: `) &&
              !Pe.endsWith("'") &&
              !Pe.slice(V.length + 2).includes("': "))
          );
        }),
        re = F.filter((Q) => Q !== Z)
          .join(
            `
`
          )
          .replaceAll(T, " ")
          .replaceAll(k, " ")
          .replaceAll(Ln(v.prefix), " ")
          .replaceAll(v.prefix, " ");
      if (/password/i.test(re))
        return {
          success: !1,
          error: {
            reason: "password_protected",
            message: "PDF is password-protected. Please provide an unprotected version."
          }
        };
      let ue = /Wrong page range given.*last page \((\d+)\)/i.exec(re);
      if (ue) {
        let Q = Number(ue[1]);
        if (Q === 0)
          return {
            success: !1,
            error: {
              reason: "corrupted",
              message: "PDF reports 0 pages (empty page tree). The PDF may be invalid."
            }
          };
        let Pe = Math.min(Q, l6);
        return {
          success: !1,
          error: {
            reason: "page_out_of_range",
            message: `Requested ${xo(n)} is outside the document (PDF has ${Q} ${I(Q, "page")}). Use a range within 1-${Q}, maximum ${l6} pages per request (e.g. pages: "1-${Pe}").`
          }
        };
      }
      let se = /Syntax Error(?: \(\d+\))?: Couldn't (?:find trailer dictionary|read xref table)/i;
      if (/damaged|corrupt|invalid/i.test(re) || se.test(re))
        return {
          success: !1,
          error: { reason: "corrupted", message: "PDF file is corrupted or invalid." }
        };
      let Le = F[0] ?? "",
        Ge = F.some((Q) => /^(Command Line Error|Internal Error)(?: \(\d+\))?: /.test(Q));
      if (!Ge && Z !== void 0 && B === 1) {
        if (k !== e) return ee("rewritten_input_unopenable");
        return {
          success: !1,
          error: {
            reason: "pdftoppm_input_error",
            message: `Could not render PDF: ${Z.replaceAll(T, () => e)}`
          }
        };
      }
      if (!Ge && Le.startsWith("Permission Error: "))
        return {
          success: !1,
          error: { reason: "pdftoppm_input_error", message: `Could not render PDF: ${Le}` }
        };
      return ee(On(x));
    }
    try {
      await v.collect();
    } catch (T) {
      return {
        success: !1,
        error: {
          reason: "unknown",
          message: `Could not move the rendered PDF pages into ${y} (${E(T) ?? "no error code"})`,
          category: ze(T),
          site: "extract",
          exitCode: B
        }
      };
    }
    let _;
    if (r !== void 0) {
      let T = await B7o(r, y, b);
      if (!T.ok)
        return {
          success: !1,
          error: {
            reason: "unknown",
            message: `Failed to list extracted PDF pages: ${T.code}`,
            category: `storage_list_${T.code}`,
            site: "extract"
          }
        };
      if (T.names.length === 0 && !T.directoryExists)
        return {
          success: !1,
          error: {
            reason: "unknown",
            message: `Extraction directory missing after pdftoppm ran: ${y}`,
            category: ze({ code: "ENOENT" }),
            site: "extract"
          }
        };
      _ = T.names;
    } else _ = (await Fn(y)).filter((H) => H.endsWith(".jpg")).sort();
    if (_.length === 0)
      return {
        success: !1,
        error: {
          reason: "corrupted",
          message: "pdftoppm produced no output pages. The PDF may be invalid."
        }
      };
    let C = _.length;
    return {
      success: !0,
      data: {
        type: "parts",
        file: { filePath: e, originalSize: p, outputDir: y, count: C },
        ...(b !== void 0 && { v5SidecarScope: { ...b, pageNames: _ } })
      }
    };
  } catch (s) {
    let a = s && typeof s === "object" && "path" in s ? s.path : void 0;
    if (s instanceof Ye || (tg(s) && (a === e || a === void 0))) throw s;
    return {
      success: !1,
      error: { reason: "unknown", message: d(s), category: ze(s), site: "extract" }
    };
  }
}
var Kn = /^Could not write image to [\s\S]*; exiting\s*$/,
  Fo = [
    [/^Internal Error(?: \(\d+\))?: /, "internal_error"],
    [/^Command Line Error(?: \(\d+\))?: /, "command_line_error"],
    [Kn, "output_write_failed"],
    [/^Config Error(?: \(\d+\))?: /, "config_error"],
    [/^Unimplemented Feature(?: \(\d+\))?: /, "unimplemented_feature"],
    [/^I\/O Error(?: \(\d+\))?: /, "io_output"],
    [/^Syntax (?:Error|Warning)(?: \(\d+\))?: /, "syntax_diagnostics"]
  ];
function On(e) {
  if (e.trim() === "") return "empty_stderr";
  let n = e.split(/\r?\n/);
  return Fo.find(([o]) => n.some((s) => o.test(s)))?.[1] ?? "other";
}
function Ln(e) {
  return Array.from(Buffer.from(e, "utf8"), (n) =>
    n < 32 || n >= 127 ? `<${n.toString(16).padStart(2, "0")}>` : String.fromCharCode(n)
  ).join("");
}
function ze(e) {
  return `fs_wrapped_${Er(e) ?? "none"}`;
}
var Tn = "ListCapExceeded";
function Gn(e) {
  let n = hC();
  if (ko(e) !== n)
    throw new R(
      `PDF extraction directory is outside the session tool-results store: ${e}`,
      "pdf extraction dir outside tool-results"
    );
  return { projectKey: fT(ke()), sessionId: q(), relPath: [cxe, _o(e)] };
}
async function B7o(e, n, r) {
  let o = r ?? Gn(n),
    { projectKey: s, sessionId: a, relPath: c } = o,
    u = [],
    p = await la(
      (S) =>
        e.listEntries(
          { namespace: "sidecar", projectKey: s, sessionId: a, relPath: c },
          { cursor: S, skipKeyStats: !0, skipScopeStats: !0 }
        ),
      (S) => {
        for (let w of S) {
          if (w.kind !== "key" || w.key.namespace !== "sidecar") continue;
          let y = w.key.relPath.at(-1);
          if (y === void 0 || w.key.relPath.length !== c.length + 1) continue;
          if (!y.endsWith(".jpg")) continue;
          u.push(y);
        }
      }
    );
  switch (p.status) {
    case "done":
      break;
    case "error":
      return { ok: !1, code: p.error.code };
    case "capped":
      return { ok: !1, code: Tn };
  }
  u.sort();
  let h = !0;
  if (u.length === 0) {
    h = !1;
    let S = c.at(-1),
      w = await la(
        (y) =>
          e.listEntries(
            { namespace: "sidecar", projectKey: s, sessionId: a, relPath: c.slice(0, -1) },
            { suffix: S, cursor: y, skipScopeStats: !0 }
          ),
        (y) => {
          h ||= y.some(
            (b) =>
              b.kind === "scope" &&
              b.scope.namespace === "sidecar" &&
              (b.scope.relPath ?? []).length === c.length &&
              b.scope.relPath?.at(-1) === S
          );
        },
        { until: () => h }
      );
    switch (w.status) {
      case "done":
        break;
      case "error":
        return { ok: !1, code: w.error.code };
      case "capped":
        return { ok: !1, code: Tn };
    }
  }
  return { ok: !0, names: u, directoryExists: h, scope: o };
}
async function CM(e, n, r) {
  let o = r?.fromTail === !0 ? "unreadable" : null,
    s;
  try {
    let a = r?.noFollow ? (Do.O_NOFOLLOW ?? 0) : 0;
    s = await pe.open(e, pt("linux") | a);
    let c = await s.stat();
    if (!c.isFile()) return o;
    if (r?.requireNlink1 && c.nlink !== 1) return o;
    if (r?.verifyHandlePath) {
      let w = null;
      if (
        ((w = await pe.readlink(`/proc/self/fd/${s.fd}`).catch(() => null)),
        w !== null && w.endsWith(" (deleted)"))
      )
        return o;
      if (w === null) {
        w = await pe.realpath(e);
        let y = await pe.stat(w);
        if (y.dev !== c.dev || y.ino !== c.ino) return o;
      }
      if (!r.verifyHandlePath(w)) return o;
    }
    if (r?.fromTail === !0) {
      let w = c.size > n ? c.size - n : 0,
        y = Buffer.alloc(c.size - w),
        b = await $n(s, y, w),
        v = mt(y.subarray(0, b), r.sniffEncoding),
        k = w + b;
      if (w === 0) return { content: v, truncated: !1, end: k };
      let P = v.indexOf(`
`);
      return { content: P === -1 ? "" : v.slice(P + 1), truncated: !0, end: k };
    }
    let u = Math.min(c.size, n + 1),
      p = Buffer.alloc(u),
      h = await $n(s, p, 0);
    if (r?.sniffEncoding === !0) {
      let w = c.size > n ? Math.min(h, n) : h,
        y = p.subarray(0, w),
        b = mt(y, !0),
        v = c.size > n,
        k = v
          ? `${b}
\u2026[truncated at ${n} bytes of ${c.size} bytes]`
          : b;
      return r.withBytes === !0 ? { content: k, bytes: y, truncated: v } : k;
    }
    let S = mt(p.subarray(0, h), !1);
    return S.length > n
      ? `${S.slice(0, n)}
\u2026[truncated at ${n} chars of ${c.size} bytes]`
      : S;
  } catch (a) {
    return fst(a) ? null : o;
  } finally {
    await s?.close().catch(() => {
      return;
    });
  }
}
function fst(e) {
  let n = E(e);
  return n === "ENOENT" || n === "ENOTDIR";
}
async function $n(e, n, r) {
  let o = 0;
  while (o < n.length) {
    let { bytesRead: s } = await e.read(n, o, n.length - o, r + o);
    if (s === 0) break;
    o += s;
  }
  return o;
}
function mt(e, n) {
  if (n !== !0) return e.toString("utf8");
  let r = zfe(e),
    o = 0;
  if (r === "utf8") {
    let a = e.subarray(0, Math.min(e.length, 512)),
      c = 0,
      u = 0;
    for (let p = 0; p < a.length; p++)
      if (a[p] === 0)
        if (p % 2 === 0) c++;
        else u++;
    if (a.length >= 8 && (c + u) * 4 > a.length) ((r = "utf16le"), (o = c > u ? 1 : 0));
  }
  let s = e.subarray(o).toString(r);
  return s.charCodeAt(0) === 65279 ? s.slice(1) : s;
}
import {
  dirname as Ae,
  isAbsolute as Bs,
  join as L,
  relative as Hs,
  resolve as ce,
  sep as qe
} from "path";
import { createHash as es } from "crypto";
import {
  accessSync as ts,
  constants as ns,
  lstatSync as Jn,
  readFileSync as he,
  realpathSync as zn,
  statSync as Zn
} from "fs";
import { lstat as rs, realpath as is } from "fs/promises";
import { homedir as os } from "os";
import {
  basename as Xe,
  dirname as Re,
  isAbsolute as wt,
  join as D,
  resolve as ge,
  sep as ne
} from "path";
import * as ye from "path/win32";
function N4e(e) {
  return e.flatMap((n) => [`Bash(${n})`, `PowerShell(${n})`]);
}
function Wn(e) {
  return e.filter((n) => n !== "PowerShell(git checkout -b *)");
}
var PEn = [
    "git commit *--fil*",
    "git commit * -F*",
    "git commit *--te*",
    "git commit * -t*",
    "git commit *--pathspec-fr*",
    "git commit *--no-veri*",
    "git commit *--no-g*",
    "git commit *--am*",
    "git commit *--allow-empty*",
    "git commit *--reu*",
    "git commit *--ree*"
  ],
  IEn = [
    "git push *--force*",
    "git push * -f*",
    "git push *--de*",
    "git push * -d*",
    "git push * :**",
    'git push *":**',
    "git push *':**",
    "git push * +*",
    'git push *"+*',
    "git push *'+*",
    "git push *--pu*",
    "git push * -o*",
    "git push *--m*",
    "git push *--pru*",
    "git push *--no-veri*",
    "git push *--rece*",
    "git push *--e*"
  ],
  OEn = [
    "gh pr create *--repo*",
    "gh pr create * -R*",
    "gh pr create *--body-file*",
    "gh pr create * -F*",
    "gh pr create *--head*",
    "gh pr create * -H*",
    "gh pr create *--recover*"
  ],
  MEn = ["gh pr create *--base*", "gh pr create * -B*"],
  P7o = ["git *--output*"],
  DEn = ["git checkout *--f*", "git checkout * -f*"],
  HEn = [
    "git add --f*",
    "git add * --f*",
    "git add -f*",
    "git add * -f*",
    "git add --c*",
    "git add * --c*"
  ],
  I7o = [
    "gh pr edit *--repo*",
    "gh pr edit -R*",
    "gh pr edit * -R*",
    "gh pr edit *--body-file*",
    "gh pr edit -F*",
    "gh pr edit * -F*",
    "gh pr edit *--base*",
    "gh pr edit -B*",
    "gh pr edit * -B*",
    "gh pr edit http*"
  ],
  me = "A skill active in this turn",
  ve =
    "The match is on the raw command text (case-insensitive in PowerShell, so a lowercase short flag can trip an uppercase one), so message, body or path text that merely contains one of these fragments trips it too; reword that text if so.",
  Se =
    "If the user explicitly asked for the refused form, say it cannot run inside this skill instead of substituting something else or routing it through another tool.",
  No = `${me} refuses \`git commit\` options that read the message from a file or template, skip hooks, amend, reuse a message or allow an empty commit (tokens starting \`--fil\`, \`--te\`, \`--pathspec-fr\`, \`--no-veri\`, \`--no-g\`, \`--am\`, \`--allow-empty\`, \`--reu\`, \`--ree\`, \` -F\`, \` -t\`). The option is refused, not the commit: pass the message inline with \`-m\` as the skill's example shows. ${ve} ${Se}`,
  jo = `${me} refuses \`git push\` forms that force, delete, mirror or prune refs, set push options, skip the pre-push hook or name a receive-pack (tokens starting \`--force\`, \` -f\`, \` +\`, \`--de\`, \` -d\`, \` :\`, \`--m\`, \`--pru\`, \`--pu\`, \` -o\`, \`--no-veri\`, \`--rece\`, \`--e\`). A plain push of the branch to the configured remote is fine. The match is on the raw command text, so a ref name containing one of these fragments trips it too; tell the user rather than rewriting the command to slip past. ${Se}`,
  Mo = `${me} runs \`gh pr create\` only in its instructed form and refuses \`--repo\`/\`-R\`, \`--head\`/\`-H\`, \`--body-file\`/\`-F\` and \`--recover\` on it. The option is refused, not opening the pull request: re-run it with the title and body passed inline as the skill's example shows; that retry is the intended fix, not a workaround. ${ve} ${Se}`,
  Bo = `${me} refuses \`--base\`/\`-B\` on \`gh pr create\` in PowerShell, where the \`-b\` short form of \`--body\` trips it too: spell it \`--body\`. The option is refused, not opening the pull request: if the default branch is the intended target, re-run it without \`--base\`, with the title and body passed inline as the skill's example shows, and the pull request opens against it. ${ve} ${Se}`,
  Ho = `${me} refuses \`gh pr edit\` with \`--repo\`/\`-R\`, \`--body-file\`/\`-F\`, \`--base\`/\`-B\` or a URL selector: edit the current branch's PR with the title and body passed inline and no selector. ${ve} ${Se}`,
  Ko = `${me} refuses \`--output\` on git commands (it writes to an arbitrary path): drop it and read stdout. ${ve}`,
  Go = `${me} refuses \`git checkout\` with \`--force\`/\`-f\` (tokens starting \`--f\` or \` -f\`): create the branch with a plain \`git checkout -b\`. The match is on the raw command text, so a branch name containing \`--f\` trips it too. ${Se}`,
  $o = `${me} refuses \`git add\` with \`--force\`/\`-f\` (it stages ignored files such as \`.env\`) or \`--chmod\` (tokens starting \`--f\`, \`-f\`, \`--c\`): stage the paths by name without the option. ${ve} ${Se}`;
function Ee(e, n) {
  return N4e(e).map((r) => [r, n]);
}
var Zci = Object.fromEntries([
  ...Ee(PEn, No),
  ...Ee(IEn, jo),
  ...Ee(OEn, Mo),
  ...MEn.map((e) => [`PowerShell(${e})`, Bo]),
  ...Ee(I7o, Ho),
  ...Ee(P7o, Ko),
  ...Ee(DEn, Go),
  ...Ee(HEn, $o)
]);
import { open as Wo } from "fs/promises";
import { join as Uo } from "path";
function Mfe(e) {
  return e.includes("\x00");
}
async function LEn(e, n, r, o) {
  let s = await Yo(e);
  return s.ok ? lst(s.text, n, r, o) : null;
}
async function Yo(e) {
  try {
    let n = await Wo(Uo(e, "config"), "r");
    try {
      let o = Buffer.allocUnsafe(1e6),
        s = 0;
      while (s < 1e6) {
        let { bytesRead: u } = await n.read(o, s, 1e6 - s, s);
        if (u === 0) break;
        s += u;
      }
      let a = !1;
      if (s === 1e6) {
        let u = Buffer.allocUnsafe(1),
          { bytesRead: p } = await n.read(u, 0, 1, s);
        a = p > 0;
      }
      let c = o.subarray(0, s).toString("utf-8");
      if (a) {
        let u = c.lastIndexOf(`
`);
        c = u === -1 ? "" : c.slice(0, u);
      }
      return Mfe(c) ? { ok: !1, cause: "nul_byte" } : { ok: !0, text: c };
    } finally {
      await n.close();
    }
  } catch {
    return { ok: !1, cause: "read_failed" };
  }
}
function lst(e, n, r, o) {
  for (let s of yt(e, n, r, o)) return s;
  return null;
}
function O7o(e, n, r, o) {
  return [...yt(e, n, r, o)];
}
function eui(e, n, r, o) {
  return [...yt(e, n, r, o, "true")];
}
var Vo = /^([A-Za-z][A-Za-z0-9-]*)\s*(?:[#;].*)?$/;
function* yt(e, n, r, o, s) {
  let a = e.split(`
`),
    c = n.toLowerCase(),
    u = o.toLowerCase(),
    p = !1;
  for (let h of a) {
    let S = h.trim();
    if (S.length === 0 || S[0] === "#" || S[0] === ";") continue;
    if (S[0] === "[") {
      p = ht(S, c, r);
      continue;
    }
    if (!p) continue;
    let w = Un(S);
    if (w && w.key.toLowerCase() === u) yield w.value;
    else if (s !== void 0 && Vo.exec(S)?.[1]?.toLowerCase() === u) yield s;
  }
}
function tui(e) {
  let n = [],
    r = [],
    o = null;
  for (let s of e.split(`
`)) {
    let a = s.trim();
    if (a.length === 0 || a[0] === "#" || a[0] === ";") continue;
    if (a[0] === "[") {
      o = ht(a, "include", null) || zo.test(a) ? "include" : ht(a, "core", null) ? "core" : null;
      continue;
    }
    let c = o === null ? null : Un(a);
    if (!c || c.value.length === 0) continue;
    let u = c.key.toLowerCase();
    if (o === "include" && u === "path") n.push(c.value);
    else if (o === "core" && (u === "excludesfile" || u === "attributesfile")) r.push(c.value);
  }
  return { includes: n, files: r };
}
var zo = /^\[includeif[ \t]*"(?:[^"\\]|\\.)*"\]/i;
function Un(e) {
  let n = 0;
  while (n < e.length && Qo(e[n])) n++;
  if (n === 0) return null;
  let r = e.slice(0, n);
  while (n < e.length && (e[n] === " " || e[n] === "\t")) n++;
  if (n >= e.length || e[n] !== "=") return null;
  n++;
  while (n < e.length && (e[n] === " " || e[n] === "\t")) n++;
  let o = Xo(e, n);
  return { key: r, value: o };
}
function Xo(e, n) {
  let r = "",
    o = !1,
    s = n;
  while (s < e.length) {
    let a = e[s];
    if (!o && (a === "#" || a === ";")) break;
    if (a === '"') {
      ((o = !o), s++);
      continue;
    }
    if (a === "\\" && s + 1 < e.length) {
      let c = e[s + 1];
      if (o) {
        switch (c) {
          case "n":
            r += `
`;
            break;
          case "t":
            r += "\t";
            break;
          case "b":
            r += "\b";
            break;
          case '"':
            r += '"';
            break;
          case "\\":
            r += "\\";
            break;
          default:
            r += c;
            break;
        }
        s += 2;
        continue;
      }
      if (c === "\\") {
        ((r += "\\"), (s += 2));
        continue;
      }
    }
    ((r += a), s++);
  }
  if (!o) r = Jo(r);
  return r;
}
function Jo(e) {
  let n = e.length;
  while (n > 0 && (e[n - 1] === " " || e[n - 1] === "\t")) n--;
  return e.slice(0, n);
}
function ht(e, n, r) {
  let o = Zo(e);
  return o !== null && o.sectionLower === n && o.subsection === r;
}
function Zo(e) {
  let n = 1;
  while (n < e.length && e[n] !== "]" && e[n] !== " " && e[n] !== "\t" && e[n] !== '"') n++;
  let r = e.slice(1, n).toLowerCase();
  if (n < e.length && e[n] === "]") return { sectionLower: r, subsection: null };
  while (n < e.length && (e[n] === " " || e[n] === "\t")) n++;
  if (n >= e.length || e[n] !== '"') return null;
  n++;
  let o = "";
  while (n < e.length && e[n] !== '"') {
    if (e[n] === "\\" && n + 1 < e.length) {
      let s = e[n + 1];
      if (s === "\\" || s === '"') {
        ((o += s), (n += 2));
        continue;
      }
      ((o += s), (n += 2));
      continue;
    }
    ((o += e[n]), n++);
  }
  if (n >= e.length || e[n] !== '"') return null;
  if ((n++, n >= e.length || e[n] !== "]")) return null;
  return { sectionLower: r, subsection: o };
}
function Qo(e) {
  return (e >= "a" && e <= "z") || (e >= "A" && e <= "Z") || (e >= "0" && e <= "9") || e === "-";
}
var WZ = Symbol("git-repo-negative-result"),
  Ce = Symbol("git-repo-unreadable-result");
class Vn {
  rootByPath = new Ac({ max: 50 });
  canonicalRootByRoot = new Ac({ max: 50 });
  remoteSlugByRoot = new Ac({ max: 50 });
  monorepoRuledOutByRoot = new Ac({ max: 50 });
  monorepoVerdictByDir = new Ac({ max: 50 });
  gitDirByCwd = new Map();
  linkedFromRootByPin = new Ac({ max: 64 });
  hostWorktreeReport;
  markersByRoot = new Ac({ max: 50 });
  repositoryByCwd = new Map();
  remoteHostByCwd = new Map();
  repoClassByCanonicalRoot = new Map();
  linguistGeneratedByPath = new Map();
  wcRootByPath = new Ac({ max: 50 });
  wcTrunkByRoot = new Map();
  wcWorktreesByRoot = new Ac({ max: 50, ttl: 60000 });
  wcRemoteHashByRoot = new Ac({ max: 50 });
  wcHeadByRoot = new Map();
  sessionRepoNameByCwd = new Ac({ max: 50 });
  diffCheckoutIsRepo = new Map();
  gitExecutable = null;
  gitBehindLauncher = null;
  gitLauncherProbe = null;
  reportedHookInstallSkips = new Set();
  clear() {
    (this.rootByPath.clear(),
      this.canonicalRootByRoot.clear(),
      this.remoteSlugByRoot.clear(),
      this.monorepoRuledOutByRoot.clear(),
      this.monorepoVerdictByDir.clear(),
      this.gitDirByCwd.clear(),
      this.linkedFromRootByPin.clear(),
      (this.hostWorktreeReport = void 0),
      this.markersByRoot.clear(),
      this.repositoryByCwd.clear(),
      this.remoteHostByCwd.clear(),
      this.repoClassByCanonicalRoot.clear(),
      this.linguistGeneratedByPath.clear(),
      this.wcRootByPath.clear(),
      this.wcTrunkByRoot.clear(),
      this.wcWorktreesByRoot.clear(),
      this.wcRemoteHashByRoot.clear(),
      this.wcHeadByRoot.clear(),
      this.sessionRepoNameByCwd.clear(),
      this.diffCheckoutIsRepo.clear(),
      (this.gitExecutable = null),
      (this.gitBehindLauncher = null),
      (this.gitLauncherProbe = null),
      this.reportedHookInstallSkips.clear());
  }
}
function L4e(e, n, r) {
  let o = e.get(n);
  if (o !== void 0) return o;
  let s = r(n);
  return (e.set(n, s), s);
}
var qo = new W(() => new Vn());
function zp() {
  return qo.of(U().host);
}
function Je(e, n) {
  try {
    let r = Jn(e);
    if (r.isSymbolicLink()) {
      let o = x$e(e);
      if (o === null) return !1;
      if (Qi(o, n)) return !1;
      if (xb(o, n)) return !1;
      let s = Zn(e);
      return s.isDirectory() || s.isFile();
    }
    return r.isDirectory() || r.isFile();
  } catch {
    return !1;
  }
}
function Qn(e) {
  if (J()) return WZ;
  let n = Date.now();
  Y("info", "find_git_root_started");
  let r = ge(e),
    o = r.substring(0, r.indexOf(ne) + 1) || ne,
    s = 0;
  while (r !== o) {
    let a = D(r, ".git");
    if ((s++, Je(a, r)))
      return (
        Y("info", "find_git_root_completed", {
          duration_ms: Date.now() - n,
          stat_count: s,
          found: !0
        }),
        In(r)
      );
    let c = Re(r);
    if (c === r) break;
    r = c;
  }
  if ((s++, Je(D(o, ".git"), o)))
    return (
      Y("info", "find_git_root_completed", {
        duration_ms: Date.now() - n,
        stat_count: s,
        found: !0
      }),
      In(o)
    );
  return (
    Y("info", "find_git_root_completed", { duration_ms: Date.now() - n, stat_count: s, found: !1 }),
    WZ
  );
}
function hr(e) {
  let n = L4e(zp().rootByPath, e, Qn);
  return n === WZ ? null : n;
}
function V_(e) {
  let n = Qn(e);
  return n === WZ ? null : n;
}
async function f8r(e, n) {
  if (J()) return { gitRoot: null };
  let r = ge(n),
    o = r.substring(0, r.indexOf(ne) + 1) || ne;
  for (;;) {
    let s = await e.stat(Pm.workspace(D(r, ".git")), { follow: !1 });
    if (!s.ok || s.value.kind === "link") return;
    if (s.value.kind === "directory" || s.value.kind === "file")
      return { gitRoot: In(r), entry: s.value.kind };
    if (r === o) return { gitRoot: null };
    let a = Re(r);
    r = a === r ? o : a;
  }
}
function Pb(e) {
  let n = zp().rootByPath;
  if (n.peek(e) === WZ) n.delete(e);
  return hr(e);
}
async function XEn(e) {
  let n = Pb(e);
  if (n === null) return null;
  try {
    return (await rs(D(n, ".git")), n);
  } catch (r) {
    let o = r?.code;
    if (o !== "ENOENT" && o !== "ENOTDIR") return n;
    return (zp().rootByPath.delete(e), Pb(e));
  }
}
function wAt(e) {
  let n = In(ge(e)),
    r = zp();
  for (let o of [
    r.rootByPath,
    r.canonicalRootByRoot,
    r.remoteSlugByRoot,
    r.monorepoRuledOutByRoot,
    r.monorepoVerdictByDir,
    r.gitDirByCwd,
    r.markersByRoot,
    r.repositoryByCwd,
    r.repoClassByCanonicalRoot,
    r.wcRootByPath,
    r.wcWorktreesByRoot
  ])
    for (let s of [...o.keys()]) if (xf(n, In(ge(s)))) o.delete(s);
}
function Et(e) {
  try {
    return qn(e, he(D(e, ".git"), "utf-8"));
  } catch {
    return e;
  }
}
function qn(e, n) {
  try {
    let r = n.trim();
    if (!r.startsWith("gitdir:")) return e;
    let o = r.slice(7).trim();
    if (Qi(o, e)) return e;
    if (xb(o, e)) return e;
    let s = ge(e, o);
    if (nW(D(s, "commondir"), s)) return e;
    let a = he(D(s, "commondir"), "utf-8").trim();
    if (Qi(a, s)) return e;
    if (xb(a, s)) return e;
    let c = ge(s, a);
    if (ge(Re(s)) !== D(c, "worktrees")) return e;
    if (nW(D(s, "gitdir"), s)) return e;
    let u = he(D(s, "gitdir"), "utf-8").trim();
    if (Qi(u, e)) return e;
    if (xb(u, s, e)) return e;
    if (ne === "/" && [e, s, u, c].some((h) => h.includes("\\"))) return e;
    if (zn(ge(s, u)) !== D(zn(e), ".git")) return e;
    if (Xe(c) !== ".git") {
      if (Je(D(c, ".git"), c)) return e;
      return In(c);
    }
    return In(Re(c));
  } catch {
    return e;
  }
}
async function ss(e, n) {
  let r = await e.readText(Pm.workspace(D(n, ".git")));
  if (!r.ok || !r.value.found) return;
  return qn(n, r.value.value);
}
function oi(e) {
  let n = hr(e);
  if (!n) return null;
  return L4e(zp().canonicalRootByRoot, n, Et);
}
function V$(e) {
  let n = V_(e);
  if (!n) return null;
  return Et(n);
}
async function J7o(e, n) {
  if (e.hostFiles.serving("workspace") !== "host") return;
  let r = zp(),
    o = r.rootByPath.peek(n);
  if (o !== void 0) {
    let c = o === WZ ? null : o;
    return { gitRoot: c, canonicalRoot: c === null ? null : r.canonicalRootByRoot.peek(c) };
  }
  let s = await f8r(e.hostFiles, n);
  if (s === void 0) return;
  let a =
    s.gitRoot === null
      ? { gitRoot: null, canonicalRoot: null }
      : {
          gitRoot: s.gitRoot,
          canonicalRoot: s.entry === "directory" ? s.gitRoot : await ss(e.hostFiles, s.gitRoot)
        };
  return (p8r(n, a.gitRoot, a.canonicalRoot), a);
}
function p8r(e, n, r) {
  let o = zp(),
    s = n ?? WZ,
    a = o.rootByPath.peek(e);
  if (a === void 0) o.rootByPath.set(e, s);
  else if (a !== s) {
    t(
      "git root prime: findGitRoot already holds a different answer for the start path; keeping the first",
      { level: "warn" }
    );
    return;
  }
  if (n === null || r === void 0 || r === null) return;
  let c = o.canonicalRootByRoot.peek(n);
  if (c === void 0) o.canonicalRootByRoot.set(n, r);
  else if (c !== r)
    t(
      "git root prime: findCanonicalGitRoot already holds a different answer for the root; keeping the first",
      { level: "warn" }
    );
}
function Sq(e) {
  let n = hr(e);
  return n !== null && oi(e) !== n;
}
function Q7o(e) {
  let n = V_(e);
  return n !== null && Et(n) !== n;
}
async function Z7o(e) {
  if (Pt()) return null;
  let n = await CR(e);
  if (!n || Xe(n) === ".git" || Xe(Re(n)) !== "worktrees") return null;
  return Xe(n);
}
var C4t = ["--no-ext-diff", "--no-textconv"],
  eZo = ["--no-color", "--src-prefix=a/", "--dst-prefix=b/", "--submodule=short"];
function It() {
  if (J()) return "git";
  let e = zp();
  if (((e.gitExecutable ??= EB("git") || "git"), e.gitLauncherProbe === null)) {
    let r = e.gitExecutable,
      o = ls(r).then((s) => {
        if (s !== null && e.gitLauncherProbe === o)
          e.gitBehindLauncher = { launcher: r, program: s };
      }, l);
    e.gitLauncherProbe = o;
  }
  let n = e.gitBehindLauncher;
  return n?.launcher === e.gitExecutable && process.env.MSYSTEM === void 0
    ? n.program
    : e.gitExecutable;
}
var as = ["mingw64", "ucrt64"];
async function ls(e) {
  return null;
}
var er = new nt(() => new Map());
async function cs() {
  let e = Date.now();
  Y("info", "is_git_check_started");
  let n = Pl(),
    r = n !== null && hr(n) !== null;
  return (Y("info", "is_git_check_completed", { duration_ms: Date.now() - e, is_git: r }), r);
}
function tr() {
  return U();
}
function HH() {
  let e = er.of(tr()),
    n = q(),
    r = e.get(n);
  if (r !== void 0) return r;
  let o = cs();
  return (e.set(n, o), o);
}
function R4t(e) {
  (er.of(e).clear(), zp().diffCheckoutIsRepo.clear());
}
function m8r() {
  R4t(tr());
}
function Z9(e) {
  return CR(e);
}
var tZo = async (e) => hr(e) !== null,
  x4t = async () => Bar(),
  wu = async (e, n = { env: Rs() }) => {
    if (e === void 0) return pui();
    let { stdout: r, code: o } = await ct(It(), [..._n, "rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: e,
      preserveOutputOnError: !1,
      ...n
    });
    return o === 0 ? r.trim() || "HEAD" : "HEAD";
  };
async function JEn(e, n) {
  return (
    (
      await ct(It(), [..._n, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${e}`], {
        cwd: n ?? fe(),
        preserveOutputOnError: !1,
        env: Rs()
      })
    ).code === 0
  );
}
var rP = async (e, n = { env: Rs() }) => {
    if (e === void 0) return mui();
    let r = await g8r(e, n);
    if (r) return r;
    for (let o of qEn)
      if (
        (
          await ct(It(), [..._n, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${o}`], {
            cwd: e,
            preserveOutputOnError: !1,
            ...n
          })
        ).code === 0
      )
        return o;
    return "main";
  },
  g8r = async (e, n = { env: Rs() }) => {
    let { stdout: r, code: o } = await ct(
      It(),
      [..._n, "symbolic-ref", "--short", "refs/remotes/origin/HEAD"],
      { cwd: e ?? fe(), preserveOutputOnError: !1, ...n }
    );
    if (o !== 0) return null;
    let s = r.trim().replace(/^origin\//, "");
    if (!s) return null;
    return (
      await ct(It(), [..._n, "show-ref", "--verify", "--quiet", `refs/remotes/origin/${s}`], {
        cwd: e ?? fe(),
        preserveOutputOnError: !1,
        ...n
      })
    ).code === 0
      ? s
      : null;
  },
  us = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
async function War(e) {
  let { stdout: n, code: r } = await it(It(), [..._n, "config", "--get", e], {
    preserveOutputOnError: !1,
    useCwd: !0,
    env: Rs()
  });
  if (r !== 0) return null;
  let o = n.trim();
  return o.length > 0 ? o : null;
}
async function h8r(e, n) {
  let { stdout: r, code: o } = await it(
      It(),
      [..._n, "config", "--global", "--includes", "--get", e],
      { preserveOutputOnError: !1, cwd: n, env: Rs() }
    ),
    s = r.trim();
  return o === 0 && s.length > 0 ? s : null;
}
async function ds(e) {
  let n = await War("remote.pushDefault");
  if (n && e.includes(n)) return n;
  if (e.length === 1) return e[0] ?? null;
  return null;
}
async function QEn() {
  let { stdout: e, code: n } = await it(It(), [..._n, "remote"], {
    preserveOutputOnError: !1,
    useCwd: !0,
    env: Rs()
  });
  if (n !== 0) return [];
  let r = e
      .split(
        `
`
      )
      .map((a) => a.trim())
      .filter(Boolean),
    o = new Set();
  if (r.includes("origin")) o.add("origin");
  let s = await ds(r);
  if (s && us.test(s)) o.add(s);
  return [...o];
}
function ZEn(e) {
  return e.flatMap((n) => [`git push ${n} *`, `git push -u ${n} *`]);
}
function P$e(e) {
  return Wn(N4e(e)).filter((n) => n.startsWith("PowerShell("));
}
var sSe = async () => j7o(),
  y8r = async () => {
    let e = Pl(),
      n = e === null ? null : hr(e);
    if (n === null || (await _8r(n))) return null;
    return j7o();
  };
async function _8r(e) {
  let n;
  try {
    n = os();
  } catch {
    return !1;
  }
  if (!n) return !1;
  if (e === In(ge(n))) return !0;
  let r = await is(n).then(
    (o) => In(o),
    () => null
  );
  return r !== null && e === r;
}
var pst = async () => {
  let [e, n, r] = await Promise.all([wu(), y8r(), gui()]);
  return { branch: e, gitRepoUrl: n, defaultBranch: r };
};
function U4e(e) {
  return e == null ? e : e.replace(/:\/\/[^/]*@/, "://***@");
}
function zZ(e) {
  let n = e.trim();
  if (!n || hW(n) || eX(n)) return null;
  let r = n.match(/^git@([^:/@]+):(.+?)(?:\.git)?$/);
  if (r && r[1] && r[2]) {
    if (tkn(r[2])) return null;
    return `${r[1]}/${r[2]}`.toLowerCase();
  }
  let o = n.match(/^(?:https?|ssh):\/\/(?:[^@/?#]*@)?([^/?#@]+)\/(.+?)(?:\.git)?$/);
  if (o && o[1] && o[2]) {
    let s = o[1],
      a = o[2];
    if (tkn(a)) return null;
    if (S8r() && w8r(s) && a.startsWith("git/")) {
      let c = a.slice(4),
        u = c.split("/");
      if (u.length >= 3 && u[0].includes(".")) return c.toLowerCase();
      return `github.com/${c}`.toLowerCase();
    }
    return `${s}/${a}`.toLowerCase();
  }
  return null;
}
function fs(e) {
  let n = e ? Ze(e, ":").toLowerCase() : null;
  if (!n) return "none";
  if (yo(n) || n.endsWith(`.${vr}`)) return "github";
  if (n.endsWith(".ghe.com") || n.includes("github")) return "ghe";
  if (n === "gitlab.com" || n.includes("gitlab")) return "gitlab";
  if (n === "bitbucket.org" || n.includes("bitbucket")) return "bitbucket";
  if (
    n === "dev.azure.com" ||
    n === "ssh.dev.azure.com" ||
    n.endsWith(".visualstudio.com") ||
    n.endsWith(".azure.com")
  )
    return "azure";
  return "other";
}
async function nZo() {
  if (Pt()) return null;
  let [e, n] = await Promise.all([HH(), sSe()]).catch(() => [!1, null]),
    r = n ? zZ(n) : null;
  return { is_git: e, has_remote: r !== null, remote_host_class: fs(r ? Ze(r, "/") : null) };
}
function gs(e) {
  try {
    let n = Je(D(e, ".git"), e),
      r = D(n ? D(e, ".git") : e, "config");
    if (K0(r, e)) return Ce;
    let o = he(r, "utf-8");
    return Mfe(o) ? Ce : o;
  } catch (n) {
    return Us(n) ? WZ : Ce;
  }
}
function ps(e) {
  let n = gs(e);
  if (n === Ce)
    t(
      `[git] could not read the git config of ${e} (a NUL byte, an unsafe path or a read error), so its origin is unknown`
    );
  if (typeof n !== "string") return n;
  let r = (o) => {
    let s = lst(n, "remote", "origin", o);
    return s ? zZ(s) : null;
  };
  return r("pushurl") ?? r("url") ?? WZ;
}
function nr(e) {
  return L4e(zp().remoteSlugByRoot, e, ps);
}
function vAt(e) {
  let n = nr(e);
  return typeof n === "string" ? n : null;
}
function tIi(e) {
  return nr(e) === Ce;
}
var ms = 128000;
function Zwi(e, n) {
  try {
    let r = !0;
    try {
      if (Jn(D(e, ".git")).isFile()) return { ok: !1, cause: "pointer_file" };
    } catch (a) {
      if (!G(a)) return { ok: !1, cause: "read_failed" };
      r = !1;
    }
    let o = r ? D(e, ".git") : e,
      s = hs(D(o, "config"), e, n);
    return s.ok ? { ...s, gitDir: o } : s;
  } catch {
    return { ok: !1, cause: "read_failed" };
  }
}
function hs(e, n, r) {
  if (K0(e, n)) return { ok: !1, cause: "unsafe_path" };
  let o = Zn(e);
  if (!o.isFile()) return { ok: !1, cause: "not_a_file" };
  if (o.size > r) return { ok: !1, cause: "oversize" };
  let s = he(e, "utf-8");
  return Mfe(s) ? { ok: !1, cause: "nul_byte" } : { ok: !0, text: s };
}
function nIi(e) {
  let n = Zwi(e, ms);
  return n.ok && !n.text.includes("\x00") ? n.text : null;
}
async function rZo() {
  let e = await sSe();
  if (!e) return null;
  let n = zZ(e);
  if (!n) return null;
  return es("sha256").update(n).digest("hex").substring(0, 16);
}
var evi = async () => {
    let { code: e } = await it(It(), [..._n, "rev-parse", "@{u}"], {
      preserveOutputOnError: !1,
      env: Rs()
    });
    return e === 0;
  },
  oZo = async (e) => {
    let { stdout: n, code: r } = await ct(It(), [..._n, "rev-list", "--count", "@{u}..HEAD"], {
      cwd: e,
      preserveOutputOnError: !1,
      env: Rs()
    });
    return r === 0 && parseInt(n.trim(), 10) > 0;
  },
  P4t = async (e) => {
    let n = [..._n, "--no-optional-locks", "status", "--porcelain", q_];
    if (e?.ignoreUntracked) n.push("-uno");
    let { stdout: r } = await it(It(), n, {
      preserveOutputOnError: !1,
      env: Rs(void 0, { userLocale: !0 })
    });
    return r.trim().length === 0;
  },
  ekn = async (e, n = Rs(void 0, { userLocale: !0 })) => {
    let r = [..._n, "--no-optional-locks", "status", "--porcelain", q_],
      { stdout: o } =
        e === void 0
          ? await it(It(), r, { preserveOutputOnError: !1, env: n })
          : await ct(It(), r, { cwd: e, preserveOutputOnError: !1, env: n }),
      s = [],
      a = [];
    return (
      o
        .split(/\r?\n/)
        .filter((c) => c.length > 0)
        .forEach((c) => {
          let u = c.substring(0, 2),
            p = c.substring(3);
          if (u === "??") a.push(p);
          else if (p) s.push(p);
        }),
      { tracked: s, untracked: a }
    );
  },
  I4t = async () => hui();
async function b8r() {
  try {
    let [e, n, r, o, s, a] = await Promise.all([x4t(), wu(), sSe(), evi(), P4t(), I4t()]);
    return (
      g("git_status_fetch"),
      {
        commitHash: e,
        branchName: n,
        remoteUrl: r,
        isHeadOnRemote: o,
        isClean: s,
        worktreeCount: a
      }
    );
  } catch (e) {
    return (m("git_status_fetch", "git_status_fetch_failed"), null);
  }
}
async function sZo() {
  let { parseGitRemote: e } = await import("./chunk-bt0dt01v.js"),
    n = await sSe();
  if (!n) return (t("Local GitHub repo: unknown"), null);
  let r = e(n);
  if (r && yo(r.host)) {
    let o = `${r.owner}/${r.name}`;
    return (t(`Local GitHub repo: ${o}`), o);
  }
  return (t("Local GitHub repo: unknown"), null);
}
function S8r() {
  return (
    i.CLAUDE_CODE_REMOTE ||
    (m6(i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0)
  );
}
function w8r(e) {
  let n = e.indexOf(":"),
    r = n === -1 ? e : e.slice(0, n),
    o = n === -1 ? "" : e.slice(n + 1);
  if (o !== "" && !/^\d+$/.test(o)) return !1;
  return r === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(r);
}
var ys = 4096;
function Xn(e, n, r) {
  let o = /\/+/,
    s = n.split(o),
    a = s[0] === "" ? ne : s[0] + ne,
    c = 0;
  for (let u = 1; u < s.length; u++) {
    let p = s[u];
    if (p === "" || p === ".") continue;
    if (p === "..") {
      a = Re(a);
      continue;
    }
    let h = a.endsWith(ne) ? a + p : a + ne + p;
    if (r !== void 0 ? YH(h, r) : Fa(h)) return null;
    let S;
    try {
      S = e.lstatSync(h);
    } catch {
      return null;
    }
    if (!S.isSymbolicLink()) {
      a = h;
      continue;
    }
    if (++c > 64) return null;
    let w;
    try {
      w = e.readlinkSync(h);
    } catch {
      return null;
    }
    if (Yn(w)) return null;
    if (r !== void 0 ? YH(w, r) : Fa(w)) return null;
    let y = w.split(o);
    if (wt(w)) (s.splice(0, u + 1, ...y), (a = y[0] === "" ? ne : y[0] + ne), (u = 0));
    else (s.splice(u, 1, ...y), u--);
  }
  return a;
}
function mst() {
  let e = ie(),
    n = fe(),
    r = Xn(e, n, n) ?? n;
  r = r.normalize("NFC").toLowerCase();
  let o = r.endsWith(ne) ? r : r + ne,
    s = (y) => {
      let b = y.toLowerCase();
      return b === r || b.startsWith(o);
    };
  function a(y) {
    if (YH(y, n)) return null;
    if (Yn(y)) {
      if (!Fl(y)) return null;
      if (!Yn(n)) return { canonical: y.normalize("NFC"), crossOs: !0 };
    }
    let b = Xn(e, y, n);
    if (b === null) return null;
    return { canonical: b.normalize("NFC"), crossOs: !1 };
  }
  function c(y, b) {
    if (!b && s(y)) return !0;
    for (let v of y.split(b ? /[\\/]+/ : ne)) if (v.toLowerCase() === ".git") return !1;
    return !0;
  }
  function u(y) {
    try {
      let b = e.lstatSync(D(y, "HEAD"));
      if (!b.isFile() || b.size > 4096) return !1;
      let v = he(D(y, "HEAD"), "utf8").slice(0, 255);
      return /^ref:[ \t]*refs\//.test(v) || /^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(v);
    } catch {
      return !1;
    }
  }
  function p(y) {
    try {
      let b = D(y, "HEAD"),
        v = e.lstatSync(b);
      if (!v.isFile() || v.size > 4096) return !1;
      let k = he(b, "utf8").slice(0, 255);
      if (!/^ref:[ \t]*refs\//.test(k) && !/^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(k))
        return !1;
      for (let P of ["objects", "refs"]) {
        let j = D(y, P);
        if (!e.statSync(j).isDirectory()) return !1;
        ts(j, ns.X_OK);
      }
      try {
        return (e.statSync(D(y, "commondir")), !1);
      } catch {}
      return !0;
    } catch {
      return !1;
    }
  }
  function h(y) {
    try {
      let b = e.lstatSync(D(y, "HEAD"));
      if (b.isFile() || b.isSymbolicLink()) return !0;
    } catch {}
    for (let b of ["objects", "refs"])
      try {
        return (e.statSync(D(y, b)), !0);
      } catch {}
    return !1;
  }
  function S(y) {
    let b = (v) => {
      let k = a(v);
      if (k === null) return (f("git_bare_repo_gate", "gitdir_target_uncanonical"), "plantable");
      if (c(k.canonical, k.crossOs))
        return (f("git_bare_repo_gate", "gitdir_target_plantable"), "plantable");
      return u(k.canonical) ? "trusted" : "none";
    };
    try {
      let v = e.lstatSync(D(y, ".git"));
      if (v.isSymbolicLink()) {
        let k;
        try {
          k = e.readlinkSync(D(y, ".git"));
        } catch {
          return "plantable";
        }
        return b(wt(k) ? k : y + ne + k);
      }
      if (v.isFile()) {
        if (v.size > ys) return "oversized";
        try {
          let k = he(D(y, ".git"), "utf8");
          if (k.includes("\x00")) return "plantable";
          if (!k.startsWith("gitdir: ")) return "none";
          let P = k.slice(8).replace(/[\r\n]+$/, "");
          return b(wt(P) ? P : y + ne + P);
        } catch {
          return "none";
        }
      }
      if (v.isDirectory()) return p(D(y, ".git")) ? "trusted" : "none";
    } catch {}
    return "none";
  }
  switch (S(n)) {
    case "plantable":
      return "gitdir-redirect-plantable";
    case "oversized":
      return "gitdir-file-oversized";
    case "trusted":
      return (g("git_bare_repo_gate"), !1);
    case "none":
      break;
  }
  let w = n;
  for (;;) {
    if (h(w)) return (f("git_bare_repo_gate", "bare_indicators"), "bare-indicators");
    let y = Re(w);
    if (y === w) break;
    switch (S(y)) {
      case "trusted":
        return (g("git_bare_repo_gate"), !1);
      case "plantable":
        return "gitdir-redirect-plantable";
      case "oversized":
        return "gitdir-file-oversized";
      case "none":
        break;
    }
    w = y;
  }
  return (g("git_bare_repo_gate"), !1);
}
import { watchFile as bs } from "fs";
function k4t(e, n, r) {
  let o = (s, a) => {
    try {
      r(s, a);
    } catch (c) {
      l(c);
    }
  };
  try {
    bs(e, n, o);
  } catch (s) {
    l(s);
  }
  return o;
}
class rr {
  guards = null;
  setGuards(e) {
    this.guards = e;
  }
  blocked() {
    if (!this.guards) return !0;
    try {
      return !this.guards.trustProbe();
    } catch {
      return !0;
    }
  }
}
var d8r = new W(() => new rr());
import { open as Es } from "fs/promises";
import { join as Ss } from "path";
var ir = 65536,
  _s = 4096,
  _e = 10,
  Ps = 32,
  or = 94,
  ks = 35,
  xs = /^[0-9a-f]+$/;
async function sr(e, n) {
  let r = Buffer.from(n, "utf-8"),
    o = r.length,
    s = Buffer.allocUnsafe(ir + 1),
    a,
    c = 0,
    u = 0,
    p = 0,
    h = 0,
    S = 0,
    w = 0,
    y = 0,
    b = 0,
    v = 0,
    k = 0,
    P = 0,
    j = 0,
    x;
  try {
    ((a = await Es(Ss(e, "packed-refs"), "r")), (c = (await a.stat()).size), (p = c));
    while (u < p) {
      if (
        ((h = u + Math.floor((p - u) / 2)),
        (w = Math.max(u, h - _s)),
        (y = (await a.read(s, 0, Math.min(ir, c - w), w)).bytesRead),
        (S = h - w),
        S >= y)
      )
        return null;
      if (((s[y] = _e), (b = S > 0 ? s.lastIndexOf(_e, S - 1) + 1 : 0), b > 1 && s[b] === or))
        b = s.lastIndexOf(_e, b - 2) + 1;
      if (s[b] === ks) {
        ((P = s.indexOf(_e, b)), (u = w + (P < 0 || P >= y ? y : P + 1)));
        continue;
      }
      if (v === 0) v = b + 40 < y && s[b + 40] === Ps ? 40 : 64;
      if (((k = b + v + 1), k >= y)) return null;
      if (((j = s.compare(r, 0, o, k, Math.min(k + o, y))), j === 0)) {
        if (k + o < y && s[k + o] !== _e) {
          p = w + b;
          continue;
        }
        return ((x = s.toString("ascii", b, b + v)), xs.test(x) ? x : null);
      }
      if (j < 0) {
        if (((P = s.indexOf(_e, S)), P < 0 || P >= y)) P = y - 1;
        if (P + 1 < y && s[P + 1] === or) {
          if (((P = s.indexOf(_e, P + 1)), P < 0 || P >= y)) P = y - 1;
        }
        u = w + P + 1;
      } else p = w + b;
    }
    return null;
  } catch {
    return null;
  } finally {
    await a?.close();
  }
}
function GEn() {
  zp().gitDirByCwd.clear();
}
async function CR(e) {
  let n = e ?? (Pt() ? ci() : Pl());
  if (n === null) return null;
  let r = ce(n),
    o = zp().gitDirByCwd.get(r);
  if (o !== void 0) return o;
  return pr(r, hr(r));
}
async function zEn(e) {
  let n = ce(e);
  return pr(n, V_(n));
}
async function pr(e, n) {
  let r = zp().gitDirByCwd;
  if (!n) return (r.set(e, null), null);
  let o = L(n, ".git");
  try {
    if ((await Qe(o)).isFile()) {
      let a = await CM(o, rSe, { sniffEncoding: !0, withBytes: !0 });
      if (a === null || a.truncated) return (r.set(e, null), null);
      let c = a.content.trim();
      if (c.startsWith("gitdir:")) {
        let u = c.slice(7).trim();
        if (Qi(u, n)) return (r.set(e, null), null);
        let p = ce(n, u);
        if (be(u, n)) return (r.set(e, null), null);
        return (r.set(e, p), p);
      }
    }
    return (r.set(e, o), o);
  } catch {
    return (r.set(e, null), null);
  }
}
function St(e) {
  try {
    let n = As(e);
    if (n.isSymbolicLink()) return "symlink";
    return n.isFile() ? "file" : n.isDirectory() ? "dir" : "special";
  } catch (n) {
    let r = E(n);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "other";
  }
}
function x$e(e) {
  try {
    let n = Ts(e, { encoding: "buffer" }),
      r = n.toString("utf-8");
    if (r.includes("\x00") || !Buffer.from(r, "utf-8").equals(n)) return null;
    return r;
  } catch {
    return null;
  }
}
function nW(e, n) {
  if (!He(e, n)) return !0;
  let r = St(e);
  return r === "symlink" || r === "special" || r === "other";
}
function Ks(e, n) {
  let r = Hs(n, e);
  return !(r === "" || r.startsWith("..") || Bs(r));
}
function K0(e, n) {
  if (!Ks(e, n)) return !0;
  return !He(e, n);
}
function Gs(e, n) {
  return Qi(e, n);
}
var Ws = /\/+/,
  Ys = /\/$/,
  mr = /^\//,
  Vs = /^\//;
function He(e, n, r = 40, o = n, s = !1, a, c = Number.POSITIVE_INFINITY, u) {
  if (r <= 0) return !1;
  let p = Vs.exec(e),
    h = p ? p[0] : "",
    S = e.slice(h.length).split(Ws),
    w = Math.min(c, S.length);
  for (let y = 0; y < S.length; y++) {
    let b = S[y];
    if (b === "" || b === ".") continue;
    if (b === "..") {
      if (((h = Ae(h)), a && y >= S.length - w)) a.missingTail = null;
      continue;
    }
    if (((h = L(h, b)), YH(h, o) || XH(h))) return !1;
    let v = u ? ar(u.kinds, h, St) : St(h);
    if (a && a.stoppedAt === void 0 && (v === "absent" || v === "other" || (v === "special" && !s)))
      a.stoppedAt = { path: h, kind: v };
    if (v === "other" || (v === "special" && !s)) return !1;
    if (v === "absent" && a && a.missingTail === void 0)
      a.missingTail = y >= S.length - w ? S.length - y : null;
    if (v === "symlink") {
      if (a) a.throughLink = !0;
      let k = u ? ar(u.linkTexts, h, x$e) : x$e(h);
      if (k === null) return !1;
      if (Gs(k, Ae(h))) return !1;
      let P = mr.test(k) ? k : Ae(h) + qe + k,
        j = S.slice(y + 1).join(qe),
        x = j ? (Ys.test(P) ? P + j : P + qe + j) : P;
      return He(x, n, r - 1, o, s, a, Math.min(w, S.length - y - 1), u);
    }
  }
  if (a && a.missingTail === void 0) a.missingTail = 0;
  return !0;
}
function KEn() {
  return { kinds: new Map(), linkTexts: new Map() };
}
function ar(e, n, r) {
  let o = e.get(n);
  if (o === void 0 && !e.has(n)) ((o = r(n)), e.set(n, o));
  return o;
}
function be(e, n, r = n, o = !1, s, a) {
  let c = mr.test(e) ? e : n + qe + e,
    u = ce(n, e),
    p = u === c ? s : void 0;
  if (s && !p) s.throughLink = !0;
  if (!He(c, n, void 0, r, o, p, void 0, a)) {
    if (s) s.missingTail = null;
    return !0;
  }
  if (u === c) return !1;
  if (s) s.missingTail = null;
  return !He(u, n, void 0, r, o, void 0, void 0, a);
}
function xb(e, n, r = n) {
  return be(e, n, r);
}
function VEn(e, n, r) {
  let o = { missingTail: void 0 };
  return {
    unsafe: be(e, n, n, !1, o, r),
    missingTail: o.missingTail ?? null,
    stoppedAt: o.stoppedAt,
    throughLink: o.throughLink ?? !1
  };
}
function F4e(e, n) {
  return be(e, n, n, !0);
}
function _q(e) {
  return /^[0-9a-f]{40}$/.test(e) || /^[0-9a-f]{64}$/.test(e);
}
async function Ose(e) {
  try {
    if (K0(L(e, "HEAD"), e)) return null;
    let n = (await Ke(L(e, "HEAD"), "utf-8")).trim();
    if (n.startsWith("ref:")) {
      let r = n.slice(4).trim();
      if (r === br) {
        let s = await Oe(e, ["symbolic-ref", "-q", "--no-recurse", "HEAD"]);
        if (s?.exitCode === 1) {
          let a = await bq(e, "HEAD");
          return a ? { type: "detached", sha: a } : null;
        }
        if (s === null || s.code !== 0) return null;
        r = s.stdout.trim();
      }
      if (r.startsWith("refs/heads/")) {
        let s = r.slice(11);
        if (!yk(s)) return null;
        return { type: "branch", name: s };
      }
      if (!yk(r)) return null;
      let o = await bq(e, r);
      return o ? { type: "detached", sha: o } : { type: "detached", sha: "" };
    }
    if (!_q(n)) return null;
    return { type: "detached", sha: n };
  } catch {
    return null;
  }
}
async function bq(e, n, r = 5) {
  if (r <= 0) return null;
  if (await SAt(e)) {
    if (n !== "HEAD" && (!n.startsWith("refs/") || !yk(n))) return null;
    let a = await Oe(e, ["show-ref", "--verify", "--hash", "--end-of-options", n]),
      c = a?.code === 0 ? a.stdout.trim() : null;
    return c !== null && _q(c) ? c : null;
  }
  let o = await lr(e, n, r);
  if (o) return o;
  let s = await a2(e);
  if (s && s !== e) return lr(s, n, r);
  return null;
}
async function lr(e, n, r) {
  try {
    if (K0(L(e, n), e)) return null;
    let o = (await Ke(L(e, n), "utf-8")).trim();
    if (o.startsWith("ref:")) {
      let s = o.slice(4).trim();
      if (!yk(s)) return null;
      return bq(e, s, r - 1);
    }
    if (!_q(o)) return null;
    return o;
  } catch {}
  if (K0(L(e, "packed-refs"), e)) return null;
  return sr(e, n);
}
var rSe = 65536;
async function a2(e) {
  try {
    if (nW(L(e, "commondir"), e)) return null;
    let n = await CM(L(e, "commondir"), rSe, { sniffEncoding: !0, withBytes: !0 });
    if (n === null || n.truncated) return null;
    let r = n.content.trim();
    if (Qi(r, e)) return null;
    if (be(r, e)) return null;
    return ce(e, r);
  } catch {
    return null;
  }
}
async function yr(e, n, r) {
  if (await SAt(e)) {
    if (!n.startsWith("refs/") || !yk(n)) return null;
    let o = await Oe(e, ["symbolic-ref", "-q", "--no-recurse", "--end-of-options", n]),
      s = o?.code === 0 ? o.stdout.trim() : "";
    if (!s.startsWith(r)) return null;
    let a = s.slice(r.length);
    return yk(a) ? a : null;
  }
  try {
    if (K0(L(e, n), e)) return null;
    let o = (await Ke(L(e, n), "utf-8")).trim();
    if (o.startsWith("ref:")) {
      let s = o.slice(4).trim();
      if (s.startsWith(r)) {
        let a = s.slice(r.length);
        if (!yk(a)) return null;
        return a;
      }
    }
  } catch {}
  return null;
}
var br = "refs/heads/.invalid",
  zs = 5000,
  Xs = 3;
function et() {
  return d8r.of(U().host).blocked();
}
async function SAt(e) {
  if (K0(L(e, "HEAD"), e)) return !1;
  try {
    let n = (await Ke(L(e, "HEAD"), "utf-8")).trim();
    return n.startsWith("ref:") && n.slice(4).trim() === br;
  } catch {
    return !1;
  }
}
async function Oe(e, n) {
  if (et()) return null;
  let r = (await a2(e)) ?? e,
    o = ci(),
    s = o === null ? null : await CR(o);
  if (s === null) return null;
  let [a, c, u] = await Promise.all([tt(e), tt(r), tt((await a2(s)) ?? s)]);
  if (a === null || c === null || u === null || (a !== c && Ae(a) !== L(c, "worktrees")))
    return null;
  let [p, h, S] = await Promise.all([
    Qe(c, { bigint: !0 }).catch(() => null),
    Qe(u, { bigint: !0 }).catch(() => null),
    Qe(Ae(c), { bigint: !0 }).catch(() => null)
  ]);
  if (p === null || !p.isDirectory()) return null;
  if (
    !(S !== null && p.dev !== 0n && !Wu(p.ino) && !(p.dev === S.dev && p.ino === S.ino)
      ? h !== null && p.dev === h.dev && p.ino === h.ino
      : c === u)
  )
    return null;
  let b = await ct(It(), [..._n, ...n], {
    cwd: a,
    timeout: zs,
    preserveOutputOnError: !1,
    env: Rs(void 0, { repository: { gitDir: a, commonDir: c, workTree: null } })
  });
  if (b.exitCode === void 0) oe().noteInconclusiveRefRead();
  return b;
}
var cr = 1000;
class wr {
  gitDir = null;
  commonDir = null;
  initialized = !1;
  initPromise = null;
  watchedFiles = [];
  branchRefPath = null;
  reftable = !1;
  generation = 0;
  cache = new Map();
  computing = new Map();
  inconclusiveRefReads = 0;
  retriesLeft = new Map();
  stateChanged = De();
  repoBranches = new Map();
  repoWatchers = new Map();
  repoBranchListeners = [];
  async ensureStarted() {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;
    return ((this.initPromise = this.start()), this.initPromise);
  }
  cleanupHandle = null;
  async start() {
    let e = this.generation;
    if (Pt()) {
      ((this.gitDir = null), (this.initialized = !0));
      return;
    }
    let n = await CR(),
      r = n !== null && (await SAt(n));
    if (e !== this.generation) return;
    if (((this.gitDir = n), (this.reftable = r), (this.initialized = !0), !this.cleanupHandle))
      this.cleanupHandle = bt(async () => {
        this.stopWatching();
      });
    if (!this.gitDir) return;
    let o = await a2(this.gitDir);
    if (e !== this.generation) return;
    if (
      ((this.commonDir = o),
      this.watchPath(L(this.gitDir, "HEAD"), this.gitDir, () => {
        this.onHeadChanged();
      }),
      this.watchPath(
        L(this.commonDir ?? this.gitDir, "config"),
        this.commonDir ?? this.gitDir,
        () => {
          this.invalidate();
        }
      ),
      this.watchPath(
        L(this.commonDir ?? this.gitDir, "refs", "remotes", "origin", "HEAD"),
        this.commonDir ?? this.gitDir,
        () => {
          this.invalidate();
        }
      ),
      this.reftable)
    ) {
      if (
        (this.watchPath(L(this.gitDir, "reftable", "tables.list"), this.gitDir, () => {
          this.onHeadChanged();
        }),
        this.commonDir && this.commonDir !== this.gitDir)
      )
        this.watchPath(L(this.commonDir, "reftable", "tables.list"), this.commonDir, () => {
          this.invalidate();
        });
    }
    await this.watchCurrentBranchRef();
  }
  watchPath(e, n, r) {
    if (K0(e, n)) return;
    let o = k4t(e, { interval: cr }, r);
    this.watchedFiles.push({ path: e, listener: o });
  }
  async watchCurrentBranchRef() {
    if (!this.gitDir) return;
    let e = this.generation,
      n = this.reftable ? null : await Ose(this.gitDir);
    if (e !== this.generation) return;
    let r = this.commonDir ?? this.gitDir,
      o = n?.type === "branch" ? L(r, "refs", "heads", n.name) : null;
    if (o === this.branchRefPath) return;
    if (this.branchRefPath) {
      for (let { path: s, listener: a } of this.watchedFiles)
        if (s === this.branchRefPath) Be(s, a);
      this.watchedFiles = this.watchedFiles.filter((s) => s.path !== this.branchRefPath);
    }
    if (((this.branchRefPath = o), !o)) return;
    this.watchPath(o, r, () => {
      this.invalidate();
    });
  }
  async onHeadChanged() {
    (this.invalidate(), await wTn(), await this.watchCurrentBranchRef());
  }
  invalidate() {
    for (let e of this.cache.values()) e.dirty = !0;
    (this.computing.clear(), this.retriesLeft.clear(), this.stateChanged.emit());
  }
  onStateChange(e) {
    return this.stateChanged.subscribe(e);
  }
  stopWatching() {
    for (let { path: e, listener: n } of this.watchedFiles) Be(e, n);
    for (let { headPath: e, listener: n } of this.repoWatchers.values()) Be(e, n);
    ((this.watchedFiles = []), (this.branchRefPath = null));
  }
  async get(e, n) {
    for (;;) {
      let r = this.generation;
      await this.ensureStarted();
      let o = this.cache.get(e);
      if (o && !o.dirty) return o.value;
      let s = o ? void 0 : this.computing.get(e);
      if (s?.generation === r && !(s.awaitedTrust && !(this.reftable && et()))) {
        let y = await s.value;
        if (r !== this.generation) continue;
        return y;
      }
      if (o) o.dirty = !1;
      let a = this.reftable && et(),
        c = this.inconclusiveRefReads,
        u = n(),
        p = { generation: r, awaitedTrust: a, value: u };
      this.computing.set(e, p);
      let h;
      try {
        h = await u;
      } finally {
        if (this.computing.get(e) === p) this.computing.delete(e);
      }
      if (r !== this.generation) continue;
      let S = a || this.retryAfterNoAnswer(e, c),
        w = this.cache.get(e);
      if (w && !w.dirty) ((w.value = h), (w.dirty = S));
      if (!w) this.cache.set(e, { value: h, dirty: S });
      return h;
    }
  }
  async getDefaultBranchIfKnownAnchored() {
    let e = await this.get("defaultBranchIfKnown", this.computeDefaultBranchIfKnownAnchored);
    if (e === null) return e;
    let n = this.commonDir ?? this.gitDir;
    if (n && (await bq(n, `refs/remotes/origin/${e}`))) return e;
    let r = this.cache.get("defaultBranchIfKnown");
    if (r) r.dirty = !0;
    return this.get("defaultBranchIfKnown", this.computeDefaultBranchIfKnownAnchored);
  }
  computeDefaultBranchIfKnownAnchored = async () => {
    let e = this.gitDir;
    if (!e) return null;
    let n = this.commonDir ?? e,
      r = await yr(n, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
    if (r && (await bq(n, `refs/remotes/origin/${r}`))) return r;
    return null;
  };
  async addRepo(e) {
    if (this.repoWatchers.has(e)) return;
    let n = await CR(e);
    if (!n) return;
    let r = await SAt(n);
    if (this.repoWatchers.has(e)) return;
    let o = r ? L(n, "reftable", "tables.list") : L(n, "HEAD");
    if (K0(o, n)) return;
    let s = k4t(o, { interval: cr }, () => {
      (this.repoBranches.delete(e), this.retriesLeft.delete(`repo:${e}`));
      for (let a of this.repoBranchListeners) a();
    });
    this.repoWatchers.set(e, { gitDir: n, headPath: o, listener: s, reftable: r });
  }
  removeRepo(e) {
    let n = this.repoWatchers.get(e);
    if (!n) return;
    (Be(n.headPath, n.listener),
      this.repoWatchers.delete(e),
      this.repoBranches.delete(e),
      this.retriesLeft.delete(`repo:${e}`));
  }
  onRepoBranchChange(e) {
    return (
      this.repoBranchListeners.push(e),
      () => {
        let n = this.repoBranchListeners.indexOf(e);
        if (n !== -1) this.repoBranchListeners.splice(n, 1);
      }
    );
  }
  async getBranchForRepo(e) {
    if (this.repoBranches.has(e)) return this.repoBranches.get(e);
    let n = this.repoWatchers.get(e);
    if (!n) return;
    let r = n.reftable && et(),
      o = this.inconclusiveRefReads,
      s = await Ose(n.gitDir),
      a = s?.type === "branch" ? s.name : null;
    if (!r && !this.retryAfterNoAnswer(`repo:${e}`, o)) this.repoBranches.set(e, a);
    return a;
  }
  noteInconclusiveRefRead() {
    this.inconclusiveRefReads++;
  }
  retryAfterNoAnswer(e, n) {
    if (this.inconclusiveRefReads === n) return !1;
    let r = this.retriesLeft.get(e) ?? Xs;
    if (r === 0) return !1;
    return (this.retriesLeft.set(e, r - 1), !0);
  }
  reset() {
    (this.generation++,
      this.stopWatching(),
      this.cleanupHandle?.(),
      (this.cleanupHandle = null),
      this.cache.clear(),
      this.computing.clear(),
      this.retriesLeft.clear(),
      this.stateChanged.clear(),
      this.repoBranches.clear(),
      this.repoWatchers.clear(),
      (this.repoBranchListeners = []),
      (this.initialized = !1),
      (this.initPromise = null),
      (this.gitDir = null),
      (this.commonDir = null),
      (this.reftable = !1));
  }
  reanchor() {
    this.generation++;
    for (let { path: e, listener: n } of this.watchedFiles) Be(e, n);
    ((this.watchedFiles = []),
      (this.branchRefPath = null),
      this.cache.clear(),
      this.computing.clear(),
      this.retriesLeft.clear(),
      (this.initialized = !1),
      (this.initPromise = null),
      (this.gitDir = null),
      (this.commonDir = null),
      (this.reftable = !1));
  }
}
var Js = new W(() => new wr());
function oe() {
  return Js.of(U().host);
}
async function Zs() {
  let e = await CR();
  if (!e) return "";
  let n = await Ose(e);
  if (!n) return "";
  if (n.type === "branch") return (await bq(e, `refs/heads/${n.name}`)) ?? "";
  return n.sha;
}
async function rt(e) {
  if (K0(L(e, "config"), e)) return null;
  return (await LEn(e, "remote", "origin", "pushurl")) || (await LEn(e, "remote", "origin", "url"));
}
async function Qs() {
  let e = await CR();
  if (!e) return null;
  let n = await rt(e);
  if (n) return n;
  let r = await a2(e);
  if (r && r !== e) return rt(r);
  return null;
}
var qEn = ["main", "master"];
async function qs() {
  let e = await CR();
  if (!e) return "main";
  let n = (await a2(e)) ?? e,
    r = await yr(n, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
  if (r && (await bq(n, `refs/remotes/origin/${r}`))) return r;
  for (let o of qEn) if (await bq(n, `refs/remotes/origin/${o}`)) return o;
  return "main";
}
function pui() {
  return oe().get("branch", () => c8r());
}
function Bar() {
  return oe().get("head", Zs);
}
function j7o() {
  return oe().get("remoteUrl", Qs);
}
function mui() {
  return oe().get("defaultBranch", qs);
}
function gui() {
  return oe().getDefaultBranchIfKnownAnchored();
}
function W7o(e) {
  return oe().addRepo(e);
}
function ZPi(e) {
  oe().removeRepo(e);
}
function G7o(e) {
  return oe().onRepoBranchChange(e);
}
function z7o(e) {
  let n = oe();
  return (n.ensureStarted(), n.onStateChange(e));
}
function K7o(e) {
  return oe().getBranchForRepo(e);
}
function V7o() {
  oe().reset();
}
function c6() {
  oe().reanchor();
}
async function T4t(e) {
  let n = await CR(e);
  if (!n) return null;
  let r = await Ose(n);
  if (!r) return null;
  if (r.type === "branch") return bq(n, `refs/heads/${r.name}`);
  return r.sha;
}
async function c8r(e) {
  let n = await CR(e);
  if (!n) return "HEAD";
  let r = await Ose(n);
  return r?.type === "branch" ? r.name : "HEAD";
}
var ot = new Map(),
  ea = 4096,
  Sr = /^commit(?: \((?:amend|initial|merge|cherry-pick|rebase)\))?: /;
async function ta(e) {
  if (K0(L(e, "logs", "HEAD"), e)) return null;
  try {
    let n = await gr(L(e, "logs", "HEAD"));
    return n.isFile() ? n.size : null;
  } catch (n) {
    let r = E(n);
    return r === "ENOENT" || r === "ENOTDIR" ? 0 : null;
  }
}
async function q7o(e) {
  if (Pt()) return;
  let n;
  try {
    let r = await CR(e);
    if (r === null) return;
    if (F4e(r, e)) return;
    let o = Ds(r),
      s = ot.get(o) ?? new Set();
    n = { gitDir: r, realGitDir: o, size: 0, overlapped: s.size > 0 };
    for (let c of s) c.overlapped = !0;
    if ((ot.set(o, s.add(n)), await SAt(r))) {
      let c = await Pr(r, 1);
      if (c === void 0) {
        YEn(n);
        return;
      }
      return ((n.reftableNewest = c[0]?.key ?? null), n);
    }
    let a = await ta(r);
    if (a === null) {
      YEn(n);
      return;
    }
    return ((n.size = a), n);
  } catch {
    if (n !== void 0) YEn(n);
    return;
  }
}
function YEn(e) {
  for (let [n, r] of ot)
    if (r.delete(e)) {
      if (r.size === 0) ot.delete(n);
      return;
    }
}
async function Y7o(e) {
  if (e.reftableNewest !== void 0) return na(e, e.reftableNewest);
  let n = L(e.gitDir, "logs", "HEAD");
  if (e.overlapped || K0(n, e.gitDir)) return;
  let r = await CM(n, ea, {
    noFollow: !0,
    fromTail: !0,
    requireNlink1: !0,
    verifyHandlePath: (p) => p === L(e.realGitDir, "logs", "HEAD")
  });
  if (
    r === null ||
    r === "unreadable" ||
    r.end <= e.size ||
    !r.content.endsWith(`
`)
  )
    return;
  let o = r.content.slice(0, -1),
    s = o.slice(
      o.lastIndexOf(`
`) + 1
    );
  if (s.includes("\uFFFD") || r.end - Buffer.byteLength(s) - 1 !== e.size) return;
  let a = s.indexOf("\t");
  if (a === -1) return;
  let [c = "", u = ""] = s.slice(0, a).split(" ");
  if (!_q(c) || !_q(u) || c === u || !Sr.test(s.slice(a + 1))) return;
  return Rr(e, u);
}
async function na(e, n) {
  if (e.overlapped) return;
  let r = await Pr(e.gitDir, 2),
    [o, s] = r ?? [];
  if (
    o === void 0 ||
    o.key === n ||
    (s?.key ?? null) !== n ||
    o.id === s?.id ||
    !Sr.test(o.subject)
  )
    return;
  return Rr(e, o.id);
}
async function Rr(e, n) {
  let r = await Ose(e.gitDir);
  if (
    (r?.type === "branch" ? await bq(e.gitDir, `refs/heads/${r.name}`) : r?.sha) !== n ||
    e.overlapped
  )
    return;
  return { commitId: n, ...(r?.type === "branch" && { branch: r.name }) };
}
async function Pr(e, n) {
  let r = await Oe(e, [
    "log",
    "--walk-reflogs",
    `--max-count=${n}`,
    "--no-show-signature",
    "--no-mailmap",
    "--no-decorate",
    "--no-color",
    "--date=raw",
    "--format=%H%x09%gd%x09%gs",
    "HEAD",
    "--"
  ]);
  if (r === null || r.exitCode === void 0) return;
  if (r.code !== 0) {
    let s = await Oe(e, ["symbolic-ref", "-q", "HEAD"]),
      a = s?.code === 0 ? s.stdout.trim() : "";
    if (!a.startsWith("refs/heads/") || !yk(a)) return;
    return (await Oe(e, ["show-ref", "--exists", "--end-of-options", a]))?.exitCode === 2
      ? []
      : void 0;
  }
  let o = [];
  for (let s of r.stdout.split(`
`)) {
    if (s === "") continue;
    let [a = "", c = "", ...u] = s.split("\t");
    if (!_q(a) || c === "") return;
    o.push({ key: s, id: a, subject: u.join("\t") });
  }
  return o;
}
async function X7o(e, n) {
  if (J()) return { repo: !0, sha: null };
  let r = ce(e),
    o = hr(r),
    s = In(ce(n));
  if (o === null || !xf(s, o, { alreadyComparable: !0 }))
    return (await ur(r, s)) ? { repo: !1 } : { repo: !0, sha: null };
  let [a, c] = await Promise.all([dr(s), dr(o)]);
  if (a === null || c === null || !xf(a, c, { alreadyComparable: !0 }))
    return { repo: !0, sha: null };
  let u = await CR(r);
  if (u !== null && (await kr(L(u, "HEAD")))) {
    if (await ur(r, s, o)) return { repo: !1 };
    return { repo: !0, sha: null };
  }
  return { repo: !0, sha: await T4t(r) };
}
async function ur(e, n, r) {
  let o = e;
  for (;;) {
    let s = In(o);
    if (s !== r && !(await kr(L(o, ".git")))) return !1;
    let a = Ae(o);
    if (s === n || a === o) return !0;
    o = a;
  }
}
async function kr(e) {
  try {
    return (await gr(e), !1);
  } catch (n) {
    let r = E(n);
    return r === "ENOENT" || r === "ENOTDIR";
  }
}
async function dr(e) {
  let n = await tt(e);
  return n === null ? null : In(n);
}
async function tt(e) {
  try {
    return await Ms(e);
  } catch {
    return null;
  }
}
async function jar(e) {
  let n;
  try {
    if (nW(L(e, ".git"), e)) return null;
    let o = (await Ke(L(e, ".git"), "utf-8")).trim();
    if (!o.startsWith("gitdir:")) return null;
    let s = o.slice(7).trim();
    if (Qi(s, e)) return null;
    if (be(s, e)) return null;
    n = ce(e, s);
  } catch {
    return null;
  }
  let r = await Ose(n);
  if (!r) return null;
  if (r.type === "branch") return bq(n, `refs/heads/${r.name}`);
  return r.sha;
}
async function uxe(e) {
  let n = await CR(e);
  if (!n) return null;
  return u8r(n);
}
async function u8r(e, n) {
  let r = await rt(e);
  if (r) return r;
  let o = n ?? (await a2(e));
  if (o && o !== e) return rt(o);
  return null;
}
function eIi(e) {
  let n = ra(e);
  if (!n) return null;
  let r = fr(n);
  if (r) return r;
  let o = ia(n);
  return o && o !== n ? fr(o) : null;
}
function ra(e) {
  let n = ce(e),
    r = zp().gitDirByCwd.get(n);
  if (r !== void 0) return r;
  let o = hr(n);
  if (!o) return null;
  let s = L(o, ".git");
  try {
    if (!Ns(s).isFile()) return s;
    let a = oSe(s, rSe)?.trim();
    if (a === void 0 || !a.startsWith("gitdir:")) return a === void 0 ? null : s;
    let c = a.slice(7).trim();
    return Qi(c, o) || be(c, o) ? null : ce(o, c);
  } catch {
    return null;
  }
}
function ia(e) {
  try {
    if (nW(L(e, "commondir"), e)) return null;
    let n = oSe(L(e, "commondir"), rSe)?.trim();
    return n === void 0 || Qi(n, e) || be(n, e) ? null : ce(e, n);
  } catch {
    return null;
  }
}
var A4t = 1e6;
function fr(e) {
  let n = L(e, "config");
  if (K0(n, e)) return null;
  let r = oSe(n, A4t);
  if (r === void 0 || Mfe(r)) return null;
  return lst(r, "remote", "origin", "pushurl") || lst(r, "remote", "origin", "url");
}
function oSe(e, n) {
  let r;
  try {
    r = Ls(e, vs.O_RDONLY | pSe);
    let o = Cs(r);
    if (!o.isFile() || o.size > n) return;
    let s = Buffer.allocUnsafe(n + 1),
      a = 0;
    while (a < s.length) {
      let c = Fs(r, s, a, s.length - a, a);
      if (c === 0) break;
      a += c;
    }
    return a > n ? void 0 : s.toString("utf-8", 0, a);
  } catch {
    return;
  } finally {
    if (r !== void 0) Is(r);
  }
}
async function hui() {
  try {
    let e = await CR();
    if (!e) return 0;
    let n = (await a2(e)) ?? e;
    if (K0(L(n, "worktrees"), n)) return 1;
    return (await js(L(n, "worktrees"))).length + 1;
  } catch {
    return 1;
  }
}
export {
  hAt,
  Lar,
  Vci,
  r8r,
  A7o,
  DH,
  qci,
  Ofe,
  C7o,
  Nar,
  Yci,
  Rm,
  w4t,
  $ar,
  Xci,
  Jci,
  R7o,
  x7o,
  o8r,
  Qci,
  yAt,
  WZ,
  L4e,
  zp,
  N4e,
  PEn,
  IEn,
  OEn,
  MEn,
  P7o,
  DEn,
  HEn,
  I7o,
  Zci,
  Mfe,
  LEn,
  lst,
  O7o,
  eui,
  tui,
  nui,
  GZ,
  s8r,
  _At,
  AR,
  dst,
  Far,
  rui,
  NEn,
  l6,
  bAt,
  oui,
  sui,
  M7o,
  iui,
  aui,
  D7o,
  lui,
  H7o,
  $En,
  A$e,
  dui,
  xI,
  Oi,
  cst,
  i8r,
  L7o,
  dxe,
  N7o,
  Ww,
  FEn,
  UEn,
  v4t,
  C$e,
  Q9,
  a8r,
  BEn,
  nSe,
  E4t,
  ust,
  cE,
  R$e,
  $7o,
  $4e,
  dT,
  jEn,
  cxe,
  PI,
  hC,
  yq,
  Uar,
  d6,
  AM,
  WEn,
  Dfe,
  F7o,
  cui,
  l8r,
  uui,
  U7o,
  fui,
  B7o,
  CM,
  fst,
  k4t,
  d8r,
  GEn,
  CR,
  zEn,
  x$e,
  nW,
  K0,
  KEn,
  xb,
  VEn,
  F4e,
  _q,
  Ose,
  bq,
  rSe,
  a2,
  SAt,
  qEn,
  pui,
  Bar,
  j7o,
  mui,
  gui,
  W7o,
  ZPi,
  G7o,
  z7o,
  K7o,
  V7o,
  c6,
  T4t,
  c8r,
  q7o,
  YEn,
  Y7o,
  X7o,
  jar,
  uxe,
  u8r,
  eIi,
  A4t,
  oSe,
  hui,
  hr,
  V_,
  f8r,
  Pb,
  XEn,
  wAt,
  oi,
  V$,
  J7o,
  p8r,
  Sq,
  Q7o,
  Z7o,
  C4t,
  eZo,
  It,
  HH,
  R4t,
  m8r,
  Z9,
  tZo,
  x4t,
  wu,
  JEn,
  rP,
  g8r,
  War,
  h8r,
  QEn,
  ZEn,
  P$e,
  sSe,
  y8r,
  _8r,
  pst,
  U4e,
  zZ,
  nZo,
  vAt,
  tIi,
  Zwi,
  nIi,
  rZo,
  evi,
  oZo,
  P4t,
  ekn,
  I4t,
  b8r,
  sZo,
  S8r,
  w8r,
  mst
};

//# sourceMappingURL=chunk-dc0nzty2.js.map
