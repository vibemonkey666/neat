// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-acd8w9vv.js";
import { E } from "./chunk-fs43t96t.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-4hww8411.js";
import { Iv } from "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import { aP } from "./chunk-qywdxehb.js";
import { SZt } from "./chunk-mb4r4r9v.js";
import { vE, akr, tFn, GBe, aK, fD, lkr, dkr, ZIe, _Zt, $ho } from "./chunk-ht1g5fya.js";
import { tun, TNo, nun } from "./chunk-wp7k62hm.js";
import { constants as w } from "fs";
var Y = vE.FILE_LIST_DIRECTORY | vE.FILE_TRAVERSE | vE.FILE_READ_ATTRIBUTES | vE.SYNCHRONIZE,
  ne = vE.FILE_TRAVERSE | vE.FILE_READ_ATTRIBUTES | vE.SYNCHRONIZE,
  v = aK.FILE_DIRECTORY_FILE | aK.FILE_OPEN_REPARSE_POINT | aK.FILE_SYNCHRONOUS_IO_NONALERT,
  D = aK.FILE_OPEN_REPARSE_POINT | aK.FILE_SYNCHRONOUS_IO_NONALERT,
  ie = 4096,
  se = 4194304,
  oe = new Set([2147483693, 3221226763]);
function j(i) {
  return (i & se) !== 0 || ((i & ie) !== 0 && (i & fD.REPARSE_POINT) !== 0);
}
var ae = /[. ]+$/,
  H = vE.FILE_READ_ATTRIBUTES | vE.SYNCHRONIZE,
  F = 1048576,
  J = 262144,
  ce = w.O_WRONLY | w.O_RDWR | w.O_APPEND | w.O_TRUNC,
  le = (w.O_NOFOLLOW ?? 0) | (w.O_NONBLOCK ?? 0),
  ee = 116444736000000000n;
function Ee(i) {
  switch (i) {
    case "EBADF":
      return Error("the file is closed");
    case "EEXIST":
      return Error("the name is taken");
    case "EINVAL":
      return Error(
        "write(): offset, length and position must be whole numbers of at least 0, and offset plus length must not pass the end of the buffer"
      );
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file");
    case "ELOOP":
      return Error("a link stands at the name");
    case "EISDIR":
      return Error("a directory stands at the name");
    case "ENOTDIR":
      return Error("a link stands where a directory should be");
    case "WORKING_ROOT_NOT_CANONICAL":
      return Error("tree anchor root is not a canonical path");
    case "WORKING_FILE_NOT_SERVED":
      return Error(
        "this file is stored through a Windows storage feature (cloud sync, deduplication) and could not be reopened to read its real contents; it is skipped this round"
      );
    case "WORKING_FILE_OFFLINE":
      return Error(
        "this file is online-only (its data is not on this machine); it is not downloaded, so it is skipped this round"
      );
  }
}
function I(i) {
  let e = Ee(i);
  return ((e.code = i), e);
}
function f(i, e = !1) {
  if (
    i === "" ||
    i === "." ||
    i === ".." ||
    /[\\/:*?"<>|\x00-\x1f]/.test(i) ||
    ae.test(i) ||
    Iv(i) ||
    TNo(i) ||
    (!e && nun(i))
  )
    throw I("WORKING_NAME_NOT_PLAIN");
  return i;
}
function k(i) {
  return (i - ee) * 100n;
}
function B(i) {
  return BigInt(Math.round(i * 1e6)) * 10n + ee;
}
function de(i, e, d, T) {
  let R = (e.attributes & fD.REPARSE_POINT) !== 0 && dkr(e.reparseTag),
    m = !R && (e.attributes & fD.DIRECTORY) !== 0,
    O = R ? 0o120000n : m ? 0o040000n : 0o100000n,
    L = (e.attributes & fD.READONLY) !== 0 ? 0o444n : 0o666n,
    h = (b) => b / 1000000n,
    S = (b) => new Date(Number(b / 1000000n));
  return {
    dev: i,
    ino: e.ino,
    mode: O | L,
    nlink: e.nlink,
    uid: 0n,
    gid: 0n,
    rdev: 0n,
    size: m ? 0n : e.size,
    blksize: 4096n,
    blocks: T / 512n,
    atimeMs: h(d.atimeNs),
    mtimeMs: h(e.mtimeNs),
    ctimeMs: h(e.ctimeNs),
    birthtimeMs: h(d.birthtimeNs),
    atimeNs: d.atimeNs,
    mtimeNs: e.mtimeNs,
    ctimeNs: e.ctimeNs,
    birthtimeNs: d.birthtimeNs,
    atime: S(d.atimeNs),
    mtime: S(e.mtimeNs),
    ctime: S(e.ctimeNs),
    birthtime: S(d.birthtimeNs),
    isFile: () => !R && !m,
    isDirectory: () => m,
    isSymbolicLink: () => R,
    isBlockDevice: () => !1,
    isCharacterDevice: () => !1,
    isFIFO: () => !1,
    isSocket: () => !1
  };
}
function Ne(i) {
  let e = (d) => Number(d);
  return {
    dev: e(i.dev),
    ino: e(i.ino),
    mode: e(i.mode),
    nlink: e(i.nlink),
    uid: 0,
    gid: 0,
    rdev: 0,
    size: e(i.size),
    blksize: e(i.blksize),
    blocks: e(i.blocks),
    atimeMs: e(i.atimeNs) / 1e6,
    mtimeMs: e(i.mtimeNs) / 1e6,
    ctimeMs: e(i.ctimeNs) / 1e6,
    birthtimeMs: e(i.birthtimeNs) / 1e6,
    atime: i.atime,
    mtime: i.mtime,
    ctime: i.ctime,
    birthtime: i.birthtime,
    isFile: () => i.isFile(),
    isDirectory: () => i.isDirectory(),
    isSymbolicLink: () => i.isSymbolicLink(),
    isBlockDevice: () => !1,
    isCharacterDevice: () => !1,
    isFIFO: () => !1,
    isSocket: () => !1
  };
}
function A(i, e) {
  let d = i.queryInformation(e),
    T = (d.attributes & fD.REPARSE_POINT) !== 0 ? i.queryAttributeTag(e).reparseTag : 0,
    R = i.queryId(e),
    m = i.queryVolume(e),
    O = {
      dev32: BigInt(m.serialNumber),
      dev64: R?.volumeSerialNumber ?? null,
      ino: d.indexNumber,
      size: d.size,
      nlink: BigInt(d.numberOfLinks),
      mtimeNs: k(d.lastWriteTime),
      ctimeNs: k(d.changeTime),
      attributes: d.attributes,
      reparseTag: T
    },
    L = { atimeNs: k(d.lastAccessTime), birthtimeNs: k(d.creationTime) };
  return {
    ...O,
    stats: (h) =>
      de(h === "serial64" && O.dev64 !== null ? O.dev64 : O.dev32, O, L, d.allocationSize)
  };
}
function g(i) {
  return (i.attributes & fD.REPARSE_POINT) !== 0 && dkr(i.reparseTag);
}
function W(i, e) {
  let d = i.queryAttributes(e);
  return (d & fD.REPARSE_POINT) !== 0 ? i.queryAttributeTag(e) : { attributes: d, reparseTag: 0 };
}
function ue(i, e) {
  let d = (R) => R !== null && e.ino !== 0n && e.dev === R && tun(e.ino, i.ino),
    T = d(i.dev32) ? "serial32" : d(i.dev64) ? "serial64" : null;
  return (
    t(
      `anchor (win32): identity bridge ${T ?? "none"} \u2014 bun dev=${e.dev} ino=${e.ino}; nt serial32=${i.dev32} serial64=${i.dev64 ?? "n/a"} index=${i.ino}`
    ),
    T
  );
}
function Q(i) {
  return (
    /^\\\\\?\\UNC\\/i.test(i) ||
    (i.startsWith("\\\\") && !i.startsWith("\\\\?\\") && !i.startsWith("\\\\.\\"))
  );
}
async function Ae(i, e, d) {
  let { fs: T } = i,
    { realRoot: R } = d;
  if (Q(R))
    return (
      t("anchor (win32): the root is on a network share: no anchored backend here"),
      { unanchored: "remote_volume" }
    );
  let m = 0,
    O;
  try {
    if (
      ((m = e.open(0, _Zt(R), { access: Y, disposition: GBe.FILE_OPEN, options: v })),
      (e.queryDevice(m).characteristics & lkr) !== 0)
    )
      return (
        e.close(m),
        t("anchor (win32): the root is on a remote volume: no anchored backend here"),
        { unanchored: "remote_volume" }
      );
    let n = A(e, m);
    if (g(n)) throw I("ELOOP");
    if ((await SZt(i, d)) !== R) throw I("WORKING_ROOT_NOT_CANONICAL");
    let r = ue(n, await T.lstat(R, { bigint: !0 }));
    if (r === null) return (e.close(m), { unanchored: "unstable_identity" });
    O = r;
  } catch (n) {
    if (m !== 0) e.close(m);
    let r = E(n);
    if (
      r === "ENOENT" ||
      r === "ENOTDIR" ||
      r === "ELOOP" ||
      r === "EPERM" ||
      r === "WORKING_ROOT_NOT_CANONICAL" ||
      r === "EBUSY" ||
      r === "EMFILE" ||
      r === "ENFILE" ||
      r === "ENOMEM" ||
      r === "EAGAIN" ||
      r === "ETIMEDOUT" ||
      r === "EIO"
    )
      throw n;
    return (
      t(
        `anchor (win32): bring-up failed (${r ?? "no code"}, status 0x${(ZIe(n) ?? 0).toString(16)}): no anchored backend here`,
        { level: "warn" }
      ),
      { unanchored: "bring_up_failed" }
    );
  }
  let L = (n, r, s, o, a = !1) =>
      e.open(n, f(r, a), { access: s, disposition: GBe.FILE_OPEN, options: o }),
    h = async (n, r, s, o, a) => {
      let N = L(n, r, s, o);
      try {
        return await a(N);
      } finally {
        e.close(N);
      }
    },
    S = (n, r) => h(n, r, H, D, (s) => A(e, s).stats(O)),
    b = async (n, r, s) => {
      if ((s & ~le & ce) !== 0) throw Error("anchored open never writes on this backend");
      let o = M(n, r, D, !1);
      try {
        let a = W(e, o);
        if (g(a)) throw I("ELOOP");
        if ((a.attributes & fD.DIRECTORY) !== 0) throw I("EISDIR");
        if (j(a.attributes)) throw I("WORKING_FILE_OFFLINE");
        if ((a.attributes & fD.REPARSE_POINT) === 0) return x(o);
      } catch (a) {
        throw (e.close(o), a);
      }
      return x(te(n, r, o));
    },
    M = (n, r, s, o) => {
      let a = (N) =>
        e.open(n, f(r), { access: N, disposition: GBe.FILE_OPEN, options: s, dontReparse: o });
      try {
        return a(akr | vE.FILE_WRITE_ATTRIBUTES);
      } catch (N) {
        let u = E(N);
        if (u !== "EPERM" && u !== "EROFS") throw N;
        return a(akr);
      }
    },
    te = (n, r, s) => {
      try {
        let o;
        try {
          o = M(n, r, aK.FILE_SYNCHRONOUS_IO_NONALERT, !0);
        } catch (a) {
          if (oe.has(ZIe(a) ?? 0))
            throw (
              t(
                `anchor (win32): a filter-served file's second open met a link refusal (status 0x${(ZIe(a) ?? 0).toString(16)}); reported as a link`
              ),
              a
            );
          throw (
            t(
              `anchor (win32): a filter-served file could not be reopened for its bytes (${E(a) ?? "no code"}, status 0x${(ZIe(a) ?? 0).toString(16)}); unreadable this round`
            ),
            I("WORKING_FILE_NOT_SERVED")
          );
        }
        try {
          let a = e.queryInformation(o);
          if (j(a.attributes)) throw I("WORKING_FILE_OFFLINE");
          if (
            a.indexNumber !== e.queryInformation(s).indexNumber ||
            e.queryVolume(o).serialNumber !== e.queryVolume(s).serialNumber
          )
            throw (
              t(
                "anchor (win32): a filter-served file reopened as another file; unreadable this round"
              ),
              I("WORKING_FILE_NOT_SERVED")
            );
          return o;
        } catch (a) {
          throw (e.close(o), a);
        }
      } finally {
        e.close(s);
      }
    },
    x = (n) => {
      let r = !1,
        s = () => {
          if (r) throw I("EBADF");
          return n;
        },
        o = () => A(e, s()).stats(O);
      async function a(c) {
        return c?.bigint === !0 ? o() : Ne(o());
      }
      let N = (c, l) => e.read(s(), c, BigInt(l));
      async function* u() {
        for (let c = 0; ;) {
          let l = Buffer.allocUnsafe(J),
            _ = N(l, c);
          if (_ === 0) return;
          ((c += _), yield l.subarray(0, _), await new Promise((y) => setImmediate(y)));
        }
      }
      return {
        stat: a,
        read: async (c, l, _, y) => {
          let C = N(c.subarray(l, l + Math.min(_, J)), y);
          return (await new Promise((p) => setImmediate(p)), { bytesRead: C });
        },
        readFile: async () => {
          let c = [];
          for await (let l of u()) c.push(l);
          return Buffer.concat(c);
        },
        createReadStream: () => u(),
        chmod: async (c) => {
          let l = e.queryAttributes(s()),
            _ = (c & 128) === 0 ? l | fD.READONLY : l & ~fD.READONLY;
          if (_ !== l) e.setAttributes(s(), _ === 0 ? fD.NORMAL : _);
        },
        utimes: async (c, l) => e.setTimes(s(), B(c), B(l)),
        close: async () => {
          if (!r) ((r = !0), e.close(n));
        }
      };
    },
    K = async (n) => {
      try {
        await n();
      } catch (r) {
        throw E(r) === "EBUSY" ? Object.assign(I("WORKING_FILE_HELD"), { cause: r }) : r;
      }
    },
    U = (n) =>
      K(async () => {
        await aP(n);
      }),
    P = (n, r, s, o, a) =>
      (a ? K : U)(() => h(n, r, vE.DELETE | H, D, (N) => e.renameByHandle(N, s, f(o), a))),
    V = (n, r, s, o) =>
      U(() =>
        h(n, r, vE.FILE_WRITE_ATTRIBUTES | vE.SYNCHRONIZE, D, (a) => e.linkByHandle(a, s, f(o)))
      ),
    q = vE.DELETE | vE.FILE_WRITE_ATTRIBUTES | H,
    z = (n, r) =>
      U(() =>
        h(n, r, q, D, (s) => {
          let o = W(e, s);
          if ((o.attributes & fD.DIRECTORY) !== 0 && !g(o)) throw I("EISDIR");
          e.deleteByHandle(s);
        })
      ),
    Z = (n, r, s, o = !1) => {
      let a = L(n, r, s, v, o);
      try {
        if (g(W(e, a))) throw I("ENOTDIR");
        return a;
      } catch (N) {
        throw (e.close(a), N);
      }
    },
    X = {
      openDir: async (n, r, s) => Z(n, r, Y, s),
      openDirToPass: async (n, r, s) => Z(n, r, ne, s),
      mkdir: async (n, r) => {
        e.close(
          e.open(n, f(r), {
            access: H,
            disposition: GBe.FILE_CREATE,
            options: v,
            attributes: fD.NORMAL
          })
        );
      },
      closeDir: async (n) => e.close(n),
      create: async (n, r, s, o, a, N) => {
        let u = e.open(n, f(r), {
          access: tFn | vE.FILE_READ_ATTRIBUTES | vE.DELETE,
          disposition: GBe.FILE_CREATE,
          options:
            aK.FILE_NON_DIRECTORY_FILE |
            aK.FILE_OPEN_REPARSE_POINT |
            aK.FILE_SYNCHRONOUS_IO_NONALERT |
            (N ? aK.FILE_WRITE_THROUGH : 0),
          attributes: (a & 128) === 0 ? fD.READONLY : fD.NORMAL
        });
        try {
          for (let c = 0; c < o.length; c += F)
            if ((e.write(u, o.subarray(c, c + F), BigInt(c)), c + F < o.length))
              await new Promise((l) => setImmediate(l));
        } catch (c) {
          try {
            e.deleteByHandle(u);
          } catch {}
          throw (e.close(u), c);
        }
        e.close(u);
      },
      createAndOpen: async (n, r, s, o) => {
        let a = e.open(n, f(r), {
            access: tFn | vE.FILE_READ_ATTRIBUTES,
            disposition: GBe.FILE_CREATE,
            options:
              aK.FILE_NON_DIRECTORY_FILE |
              aK.FILE_OPEN_REPARSE_POINT |
              aK.FILE_SYNCHRONOUS_IO_NONALERT |
              aK.FILE_WRITE_THROUGH,
            attributes: (o & 128) === 0 ? fD.READONLY : fD.NORMAL
          }),
          N = !1,
          u = () => {
            if (N) throw I("EBADF");
            return a;
          };
        return {
          stat: async () => A(e, u()).stats(O),
          writeFile: async (c) => {
            for (let l = 0; l < c.length; l += F)
              (e.write(u(), c.subarray(l, l + F), BigInt(l)),
                await new Promise((_) => setImmediate(_)));
          },
          write: async (c, l, _, y) => {
            if (![l, _, y].every((p) => Number.isSafeInteger(p) && p >= 0) || l + _ > c.length)
              throw I("EINVAL");
            let C = c.subarray(l, l + Math.min(_, F));
            return (
              e.write(u(), C, BigInt(y)),
              await new Promise((p) => setImmediate(p)),
              { bytesWritten: C.length }
            );
          },
          utimes: async (c, l) => e.setTimes(u(), B(c), B(l)),
          sync: async () => {},
          close: async () => {
            if (!N) ((N = !0), e.close(a));
          }
        };
      },
      link: V,
      rename: (n, r, s, o) => P(n, r, s, o, !0),
      renameNoReplace: (n, r, s, o) => P(n, r, s, o, !1),
      symlink: async (n, r, s) => {
        $ho(n);
        let o;
        try {
          o = e.open(r, f(s), {
            access: tFn | vE.FILE_READ_ATTRIBUTES | vE.DELETE,
            disposition: GBe.FILE_CREATE,
            options:
              aK.FILE_NON_DIRECTORY_FILE |
              aK.FILE_OPEN_REPARSE_POINT |
              aK.FILE_SYNCHRONOUS_IO_NONALERT,
            attributes: fD.NORMAL
          });
        } catch (a) {
          throw E(a) === "EISDIR" ? I("EEXIST") : a;
        }
        try {
          e.setSymlink(o, n);
        } catch (a) {
          try {
            e.deleteByHandle(o);
          } catch {}
          throw (e.close(o), a);
        }
        e.close(o);
      },
      readlink: (n, r) => h(n, r, H, D, (s) => e.readSymlink(s)),
      unlink: z,
      rmdir: (n, r) =>
        h(n, r, q, v, (s) => {
          if (g(W(e, s))) throw I("ENOTDIR");
          e.deleteByHandle(s);
        }),
      list: async (n, r) => e.listDirectory(n, r),
      lstat: S,
      open: (n, r, s, o) => b(n, r, o),
      hold: async (n) => {
        let r = await T.realpath(n).catch(() => null),
          s = r !== null && /^[a-zA-Z]:$/.test(r) ? `${r}\\` : r;
        if (s === null || Q(s)) return null;
        let o;
        try {
          o = e.open(0, _Zt(s), { access: Y, disposition: GBe.FILE_OPEN, options: v });
        } catch {
          return null;
        }
        try {
          if ((e.queryDevice(o).characteristics & lkr) !== 0) return (e.close(o), null);
          let [a, N] = await Promise.all([A(e, o), T.lstat(s, { bigint: !0 })]),
            u = a.stats(O);
          if (
            g(a) ||
            !u.isDirectory() ||
            !N.isDirectory() ||
            u.ino === 0n ||
            u.dev !== N.dev ||
            !tun(u.ino, N.ino)
          )
            return (e.close(o), null);
        } catch {
          return (e.close(o), null);
        }
        return X.holdOpenedDir(o, s);
      },
      getHeldDir: (n) => n.dir,
      holdOpenedDir: (n, r) => {
        let s = !1;
        return {
          realPath: r,
          dir: n,
          stat: async () => A(e, n).stats(O),
          close: async () => {
            if (!s) ((s = !0), e.close(n));
          }
        };
      },
      renameOut: (n, r, s, o) => P(n, r, s.dir, o, !0),
      renameIn: (n, r, s, o) => P(n.dir, r, s, o, !0),
      linkIn: (n, r, s, o) => V(n.dir, r, s, o),
      renameInNoReplace: (n, r, s, o) => P(n.dir, r, s, o, !1),
      statIn: (n, r) => S(n.dir, r),
      openIn: (n, r, s) => b(n.dir, r, s),
      unlinkIn: (n, r) => z(n.dir, r)
    },
    G = !1,
    re = {
      stat: async () => {
        if (G) throw I("EBADF");
        return A(e, m).stats(O);
      },
      close: async () => {
        if (!G) ((G = !0), e.close(m));
      }
    };
  return (t("anchor (win32): held-handle backend up"), { root: re, held: m, ops: X });
}
export { Ae as openWin32Backend };

//# sourceMappingURL=chunk-ydd7q0y6.js.map
