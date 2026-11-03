// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { R, E } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { O } from "./chunk-19xvg81r.js";
import { randomBytes as Te } from "crypto";
import {
  closeSync as b,
  constants as a,
  fchmodSync as re,
  fstatSync as J,
  ftruncateSync as _e,
  lstatSync as V,
  openSync as H,
  readFileSync as Re,
  renameSync as Fe,
  unlinkSync as ie,
  writeFileSync as K
} from "fs";
import {
  lstat as I,
  open as L,
  rename as j,
  stat as Pe,
  unlink as x,
  writeFile as oe
} from "fs/promises";
import { basename as ve, join as xe } from "path";
import { constants as F, createWriteStream as Z } from "fs";
import { copyFile as ge, lstat as U, open as D, readlink as Oe } from "fs/promises";
import { join as Se } from "path";
import { pipeline as ee } from "stream/promises";
async function Z4e(e, t, n) {
  let r = F.O_NOFOLLOW;
  if (r === void 0 || O() === "windows") {
    if (!(await U(e)).isFile()) throw X8r(e);
    await ge(e, t, n?.exclusive ? F.COPYFILE_EXCL : 0);
    return;
  }
  let o = await D(e, F.O_RDONLY | r | (n?.nonBlocking ? (F.O_NONBLOCK ?? 0) : 0));
  try {
    let i = await o.stat();
    if (!i.isFile()) throw X8r(e);
    if (n?.exactMode) {
      let s = await D(t, n.exclusive ? "wx" : "w", i.mode);
      try {
        (await ee(o.createReadStream(), Z(t, { fd: s.fd, autoClose: !1 })),
          await s.chmod(i.mode & 4095));
      } finally {
        await s.close();
      }
    } else await ee(o.createReadStream(), Z(t, { mode: i.mode, flags: n?.exclusive ? "wx" : "w" }));
  } finally {
    await o.close();
  }
}
function X8r(e) {
  return new R(
    `Refusing to copy ${e}: it is no longer a regular file (swapped during the copy).`,
    "plugin copy source swapped for a non-regular file mid-copy"
  );
}
var Ne = new Set([
  "ENOENT",
  "ENOTDIR",
  "ELOOP",
  "EMLINK",
  "EFTYPE",
  "EISDIR",
  "ENAMETOOLONG",
  "EINVAL"
]);
async function jst(e, t, n) {
  let r = (c) => {
      let S = E(c);
      if (n?.throwTransient && (S === void 0 || !Ne.has(S))) throw c;
      return null;
    },
    o = O() === "windows",
    i = o ? void 0 : F.O_NOFOLLOW,
    s = o ? 0 : (F.O_NONBLOCK ?? 0);
  if (i === void 0) {
    let c = await U(e).catch(r);
    if (c === null || !c.isFile()) return null;
  }
  let f;
  try {
    f = await D(e, F.O_RDONLY | (i ?? 0) | s);
  } catch (c) {
    return r(c);
  }
  try {
    let c = await f.stat();
    if (!c.isFile() || c.size > t) return null;
    let { buffer: S, bytesRead: w } = await f.read(Buffer.alloc(t + 1), 0, t + 1, 0);
    if (w > t) return null;
    return S.subarray(0, w).toString("utf-8");
  } catch (c) {
    return r(c);
  } finally {
    await f.close();
  }
}
async function sW(e, t) {
  let n = Se(e, t);
  try {
    return (await Oe(n), !1);
  } catch (r) {
    if (E(r) === "EINVAL") return !(await U(n)).isSymbolicLink();
    throw r;
  }
}
var te = !1;
function pfi() {
  te = !0;
}
function ne() {
  return te;
}
function be() {
  return !1;
}
function J8r({ served: e }) {
  if (!ne()) return !1;
  return e ? !1 : be();
}
var iW = ".cc-writes",
  iP = new Set(["EXDEV", "EPERM", "EEXIST", "EBUSY"]);
function blr() {
  return J8r({ served: !1 });
}
function UZo(e, t) {
  return `Could not rewrite ${e} in place: this file has other names on disk (it is hard-linked, ${t} names in all), and writing it in place would change the file under every one of those names. Remove the extra links, then try again.`;
}
function ae(e, t) {
  return Object.assign(
    new R(UZo(e, t), "in-place write refused: the target has other names (a hard link)"),
    { code: "EMLINK", path: e }
  );
}
var vq = new Set(["EPERM", "EBUSY", "EACCES"]);
function OI(e) {
  return `${e}.tmp.${Te(4).toString("hex")}`;
}
function xM(e, t) {
  let n = `${t}.tmp.`;
  return e.startsWith(n) && /^[0-9a-f]{8}$/.test(e.slice(n.length));
}
function Slr(e) {
  return /\.tmp\.(?:[0-9a-f]{8}|\d+\.[0-9a-f]{12})$/.test(e);
}
var se = 4,
  ce = 50,
  ke = Array.from({ length: se - 1 }, () => ce),
  Q8r = [100, 500, 2000],
  Ae = new Int32Array(new SharedArrayBuffer(4));
function Le(e) {
  Atomics.wait(Ae, 0, 0, e);
}
function le(e, t, n = se - 1) {
  return !1;
}
var ue = 128;
async function Ce(e) {
  try {
    return ((await I(e)).mode & ue) === 0;
  } catch {
    return !1;
  }
}
async function aP(e, t, n = ke) {
  let r = !1;
  for (let o = 0; ; o++)
    try {
      return (await e(), r);
    } catch (i) {
      if (le(i, o, n.length)) {
        if (o === 0 && t !== void 0 && (await Ce(t))) throw i;
        ((r = !0), await X(n[o]));
        continue;
      }
      throw i;
    }
}
function Os(e, t, n = j) {
  return aP(() => n(e, t), t);
}
function UAt(e, t, n = j) {
  return aP(() => n(e, t), t, Q8r);
}
function Ie(e) {
  try {
    return (V(e).mode & ue) === 0;
  } catch {
    return !1;
  }
}
function kkn(e, t, n = Fe) {
  let r = !1;
  for (let o = 0; ; o++)
    try {
      return (n(e, t), r);
    } catch (i) {
      if (le(i, o)) {
        if (o === 0 && Ie(t)) throw i;
        ((r = !0), Le(ce));
        continue;
      }
      throw i;
    }
}
var mfi = new Set(["ENOSPC", "EIO", "EDQUOT", "EFBIG"]),
  fe = 67108864,
  Kfe = a.O_NONBLOCK;
async function de(e, t, n = "linux") {
  return (await We(e, t, n)).kind === "pass";
}
async function We(e, t, n = "linux") {
  if (n !== "win32") return { kind: "pass" };
  try {
    return { kind: (await I(e)).isFile() ? "pass" : "refuse" };
  } catch (r) {
    if (E(r) === "ENOENT") return { kind: t ? "pass" : "refuse" };
    return { kind: "failed", error: r };
  }
}
function we(e, t, n = "linux") {
  if (n !== "win32") return !0;
  try {
    return V(e).isFile();
  } catch (r) {
    return t && E(r) === "ENOENT";
  }
}
async function Me(e, t = !1) {
  if (!t && !(await de(e, !0))) return { kind: "unavailable" };
  let n;
  try {
    n = await L(e, a.O_RDONLY | (t ? 0 : a.O_NOFOLLOW) | Kfe);
  } catch (r) {
    return E(r) === "ENOENT" ? { kind: "absent" } : { kind: "unavailable" };
  }
  try {
    let r = await n.stat();
    if (!r.isFile() || r.size > fe) return { kind: "unavailable" };
    return { kind: "snapshot", bytes: new Uint8Array(await n.readFile()), mode: r.mode & 4095 };
  } catch {
    return { kind: "unavailable" };
  } finally {
    await n.close().catch(() => {});
  }
}
async function Ye(e, t, n = !1) {
  if (!n && !(await de(e, !0))) return !1;
  let r;
  try {
    r = await L(e, a.O_WRONLY | a.O_CREAT | a.O_TRUNC | (n ? 0 : a.O_NOFOLLOW) | Kfe, t.mode);
  } catch {
    return !1;
  }
  try {
    if (!(await r.stat()).isFile()) return (await r.close().catch(() => {}), !1);
    return (await r.writeFile(t.bytes), await r.chmod(t.mode).catch(() => {}), await r.close(), !0);
  } catch {
    return (await r.close().catch(() => {}), !1);
  }
}
function P(e, t, n) {
  try {
    if (e instanceof Error)
      ((e.message = `${e.message}; ${t !== void 0 ? `new contents preserved at ${t}; ` : ""}${n === "restored" ? "original target restored" : n === "removed" ? "partial target removed" : n === "untouched" ? "target untouched" : "target left partial \u2014 treat contents as torn"}`),
        Object.assign(e, { ...(t !== void 0 && { preservedTmp: t }), targetOutcome: n }));
  } catch {}
  return e;
}
function bSe(e) {
  let t = E(e);
  return t === "EINVAL" || t === "ENOTSUP" || t === "EPERM" || t === "ENOSYS";
}
class wlr extends Error {
  target;
  constructor(e) {
    super("beforePublish refused the write; nothing was published");
    this.target = e;
    this.name = "PublishRefusedError";
  }
}
async function De(e, t) {
  if (t === void 0) return e;
  try {
    await (await L(t, a.O_RDONLY | a.O_DIRECTORY | a.O_NOFOLLOW)).close();
  } catch (n) {
    switch (E(n)) {
      case "ENOENT":
      case "ELOOP":
      case "ENOTDIR":
        return e;
      case "EACCES":
      case "EPERM":
        if (await Ue(t)) return e;
        throw n;
      default:
        throw n;
    }
  }
  return xe(t, ve(e));
}
async function Ue(e) {
  let t = process.getuid?.();
  if (t === void 0) return !1;
  try {
    return (await I(e)).uid !== t;
  } catch {
    return !1;
  }
}
var C = 3;
async function me(e, t) {
  if (t !== "win32") return !1;
  try {
    return (await I(e), !0);
  } catch (n) {
    return E(n) === "ENOENT" ? !1 : { cause: n };
  }
}
function W(e, t) {
  return Object.assign(
    Error(
      "EEXIST: name already taken (exclusive create)",
      typeof t === "object" ? { cause: t.cause } : void 0
    ),
    { code: "EEXIST", syscall: "lstat", path: e }
  );
}
async function G(e, t, n) {
  for (let r = 1; ; r++) {
    let o = OI(e),
      i = await me(o, t);
    if (i !== !1) {
      if (r < C) continue;
      throw W(o, i);
    }
    try {
      return await n(o);
    } catch (s) {
      if (E(s) === "EEXIST" && r < C) continue;
      throw s;
    }
  }
}
async function PM(e, t, n, r = "linux") {
  return G(e, r, async (o) => {
    try {
      return (await oe(o, t, { encoding: "utf8", mode: n, flag: "wx" }), o);
    } catch (i) {
      if (E(i) !== "EEXIST") await x(o).catch(() => {});
      throw i;
    }
  });
}
var he = { exclusive: !0, exactMode: !1, nonBlocking: !0 };
async function gfi(e, t, n = "linux") {
  return G(t, n, async (r) => {
    try {
      return (await Z4e(e, r, he), r);
    } catch (o) {
      if (E(o) !== "EEXIST") await x(r).catch(() => {});
      throw o;
    }
  });
}
async function Be(e, t, n = "linux") {
  return G(e, n, async (r) => ({
    fh: await L(r, n === "win32" ? "wx" : a.O_WRONLY | a.O_CREAT | a.O_EXCL, t),
    tmp: r
  }));
}
async function aW(e, t, n, r = "linux") {
  (await lW(e, r), await oe(e, t, { encoding: "utf8", mode: n, flag: "wx" }));
}
async function hfi(e, t, n = "linux") {
  (await lW(t, n), await Z4e(e, t, he));
}
async function lW(e, t = "linux") {
  let n = await me(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause;
}
async function Dn(e, t, n, r) {
  return ree(e, t, { mode: n, renameFn: r });
}
async function ree(e, t, n) {
  let {
      mode: r,
      createMode: o,
      exactMode: i,
      flush: s,
      followSymlinks: f,
      inPlaceOnTempCreateRefused: c,
      stagingDir: S,
      renameFn: w,
      beforePublish: g
    } = n,
    v = r ?? o,
    k = () => {
      if (g !== void 0 && !g()) throw new wlr(e);
    },
    y = await De(e, S),
    A = f === !0 ? 0 : a.O_NOFOLLOW,
    m,
    T = !1,
    M = !1,
    z = async (p) => {
      let l = await Me(e, f === !0),
        h = l.kind === "snapshot" ? l : void 0;
      k();
      let u = await L(e, a.O_WRONLY | a.O_CREAT | A | Kfe, i ?? v),
        N;
      try {
        N = await u.stat();
      } catch (_) {
        throw (await u.close().catch(() => {}), (T = p !== void 0), P(_, p, "untouched"));
      }
      let d = N.isCharacterDevice();
      if (!N.isFile() && !d)
        throw (
          await u.close().catch(() => {}),
          Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: e
          })
        );
      if (!d && N.nlink > 1 && blr()) throw (await u.close().catch(() => {}), ae(e, N.nlink));
      if (g !== void 0 && !g()) {
        if ((await u.close().catch(() => {}), l.kind === "absent" && N.size === 0 && !d))
          await x(e).catch(() => {});
        throw new wlr(e);
      }
      let Q = !1;
      try {
        if (!d) (await u.truncate(0), (Q = !0));
        await u.writeFile(t, { encoding: "utf8" });
        let _ = d ? void 0 : (i ?? (l.kind !== "absent" ? r : void 0));
        if (_ !== void 0) await u.chmod(_).catch(() => {});
        if (s === !0)
          try {
            await u.sync();
          } catch (Y) {
            if (!bSe(Y)) throw Y;
          }
        await u.close();
      } catch (_) {
        if ((await u.close().catch(() => {}), !Q)) throw ((T = p !== void 0), P(_, p, "untouched"));
        T = p !== void 0;
        let Ee =
          h !== void 0 && (await Ye(e, h, f === !0))
            ? "restored"
            : (await x(e).then(
                  () => !0,
                  (ye) => E(ye) === "ENOENT"
                ))
              ? "removed"
              : "partial";
        throw P(_, p, Ee);
      }
      let q = p ?? m;
      if (q !== void 0) await x(q).catch(() => {});
    };
  try {
    try {
      if (i !== void 0 || s === !0) {
        let l = await Be(y, i ?? v),
          h = l.fh;
        m = l.tmp;
        let u = !1,
          N;
        try {
          if ((await h.writeFile(t, { encoding: "utf8" }), i !== void 0))
            try {
              await h.chmod(i);
            } catch (d) {
              if (!bSe(d)) throw d;
            }
          if (s === !0)
            try {
              await h.sync();
            } catch (d) {
              if (!bSe(d)) throw d;
            }
        } catch (d) {
          ((u = !0), (N = d));
        }
        if (!u) M = !0;
        try {
          await h.close();
        } catch (d) {
          if (!u) throw ((T = !0), P(d, m, "untouched"));
        }
        if (u) throw N;
      } else ((m = await PM(y, t, v)), (M = !0));
    } catch (l) {
      if (c !== !0) throw l;
      if (M) throw l;
      if (E(l) !== "EACCES") throw l;
      if (
        !(await Pe(e).then(
          () => !0,
          () => !1
        ))
      )
        throw l;
      await z(void 0);
      return;
    }
    if (m === void 0) throw Error("staging block exited without a staging file");
    let p = m;
    try {
      let l = w ?? j;
      await Os(p, e, (h, u) => (k(), l(h, u)));
    } catch (l) {
      let h = E(l);
      if (h === void 0 || !iP.has(h)) throw l;
      await z(p);
    }
  } catch (p) {
    if (m !== void 0 && !T) await x(m).catch(() => {});
    throw p;
  }
}
function B(e) {
  try {
    ie(e);
  } catch {}
}
function Je(e) {
  if (!we(e, !0)) return { kind: "unavailable" };
  let t;
  try {
    t = H(e, a.O_RDONLY | a.O_NOFOLLOW | Kfe);
  } catch (n) {
    return E(n) === "ENOENT" ? { kind: "absent" } : { kind: "unavailable" };
  }
  try {
    let n = J(t);
    if (!n.isFile() || n.size > fe) return { kind: "unavailable" };
    return { kind: "snapshot", bytes: new Uint8Array(Re(t)), mode: n.mode & 4095 };
  } catch {
    return { kind: "unavailable" };
  } finally {
    try {
      b(t);
    } catch {}
  }
}
function Xe(e, t) {
  if (!we(e, !0)) return !1;
  let n;
  try {
    n = H(e, a.O_WRONLY | a.O_CREAT | a.O_TRUNC | a.O_NOFOLLOW | Kfe, t.mode);
  } catch {
    return !1;
  }
  let r = !1;
  try {
    if (!J(n).isFile()) return ((r = !0), b(n), !1);
    K(n, t.bytes);
    try {
      re(n, t.mode);
    } catch {}
    return ((r = !0), b(n), !0);
  } catch {
    if (!r)
      try {
        b(n);
      } catch {}
    return !1;
  }
}
function pe(e, t) {
  if (t !== "win32") return !1;
  try {
    return (V(e), !0);
  } catch (n) {
    return E(n) === "ENOENT" ? !1 : { cause: n };
  }
}
function yfi(e, t = "linux") {
  let n = pe(e, t);
  if (n === !0) throw W(e, n);
  if (n !== !1) throw n.cause;
}
function $e(e, t, n, r = "linux") {
  for (let o = 1; ; o++) {
    let i = OI(e),
      s = pe(i, r);
    if (s !== !1) {
      if (o < C) continue;
      throw W(i, s);
    }
    try {
      return (K(i, t, { encoding: "utf8", mode: n, flag: "wx" }), i);
    } catch (f) {
      if (E(f) === "EEXIST") {
        if (o < C) continue;
        throw f;
      }
      throw (B(i), f);
    }
  }
}
function X0(e, t, n, r) {
  let o = !1,
    i;
  try {
    i = $e(e, t, n);
    try {
      kkn(i, e, r);
    } catch (s) {
      let f = E(s);
      if (f === void 0 || !iP.has(f)) throw s;
      let c = Je(e),
        S = c.kind === "snapshot" ? c : void 0,
        w = H(e, a.O_WRONLY | a.O_CREAT | a.O_NOFOLLOW | Kfe, n),
        g = !1;
      {
        let y;
        try {
          y = J(w);
        } catch (A) {
          try {
            b(w);
          } catch {}
          throw ((o = !0), P(A, i, "untouched"));
        }
        if (((g = y.isCharacterDevice()), !y.isFile() && !g)) {
          try {
            b(w);
          } catch {}
          throw Object.assign(Error("refusing the in-place arm on a non-regular target"), {
            code: "ENXIO",
            path: e
          });
        }
        if (!g && y.nlink > 1 && blr()) {
          try {
            b(w);
          } catch {}
          throw ae(e, y.nlink);
        }
      }
      let v = !1,
        k = !1;
      try {
        if (!g) (_e(w, 0), (k = !0));
        if ((K(w, t, { encoding: "utf8" }), n !== void 0 && c.kind !== "absent" && !g))
          try {
            re(w, n);
          } catch {}
        ((v = !0), b(w));
      } catch (y) {
        if (!v)
          try {
            b(w);
          } catch {}
        if (!k) throw ((o = !0), P(y, i, "untouched"));
        o = !0;
        let A = S !== void 0 && Xe(e, S),
          m = "partial";
        if (A) m = "restored";
        else
          try {
            (ie(e), (m = "removed"));
          } catch (T) {
            m = E(T) === "ENOENT" ? "removed" : "partial";
          }
        throw P(y, i, m);
      }
      B(i);
    }
  } catch (s) {
    if (i !== void 0 && !o) B(i);
    throw s;
  }
}
export {
  Z4e,
  X8r,
  jst,
  sW,
  pfi,
  J8r,
  iW,
  iP,
  blr,
  UZo,
  vq,
  OI,
  xM,
  Slr,
  Q8r,
  aP,
  Os,
  UAt,
  kkn,
  mfi,
  Kfe,
  bSe,
  wlr,
  PM,
  gfi,
  aW,
  hfi,
  lW,
  Dn,
  ree,
  yfi,
  X0
};

//# sourceMappingURL=chunk-qywdxehb.js.map
