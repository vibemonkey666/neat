// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E, Fs, G } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { bZt, SZt } from "./chunk-mb4r4r9v.js";
import { Ca } from "./chunk-87f056s4.js";
import { wb } from "./chunk-at88wjsn.js";
import { ws } from "./chunk-v4kbwz0z.js";
import {
  close as nn,
  constants as H,
  fchmod as rn,
  fchown as tn,
  fstat as on,
  fsync as an,
  open as sn,
  writeFile as ln
} from "fs";
import { lstat as cn, mkdtemp as Ye, rm as Ge, symlink as dn } from "fs/promises";
import { tmpdir as je } from "os";
import { getSystemErrorName as un, promisify as z } from "util";
class Fho extends Error {
  code;
  constructor(e) {
    super("the new file could not be given its owner", { cause: e });
    this.code = E(e);
  }
}
var yhi = [
  "unsupported_platform",
  "no_procfs",
  "no_ffi",
  "nofollow_any_unenforced",
  "remote_volume",
  "unstable_identity",
  "bring_up_failed",
  "no_hard_links"
];
function bAi(e) {
  return yhi.includes(e);
}
function fn(e) {
  switch (e) {
    case "WORKING_PARENT_NOT_DIRECTORY":
      return Error("a destination ancestor is a symlink or not a directory");
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file");
    case "WORKING_LIST_UNSUPPORTED":
      return Error(
        "this backend cannot list a held directory, or cannot stop at the bound that was set"
      );
    case "WORKING_LIST_TOO_LONG":
      return Error("the directory holds more names than may be listed");
    case "WORKING_DIRECTORY_MOVED":
      return Error(
        "the operation succeeded, but a directory that it used may have been moved meanwhile: what it made or moved may lie outside the tree, or have come from outside it"
      );
    case "WORKING_DIRECTORY_MOVED_UNDONE":
      return Error(
        "a directory may have been moved, so the operation made nothing, or what it made was removed again"
      );
    case "WORKING_LINK_UNSUPPORTED":
      return Error("this backend cannot make or read a symbolic link in a held directory");
  }
}
function mn() {
  let e = Error("tree anchor root is not a canonical path");
  return ((e.code = "WORKING_ROOT_NOT_CANONICAL"), e);
}
function q(e) {
  let o = fn(e);
  return ((o.code = e), o);
}
var $e = Symbol("createsInHeldDirectoryCheckedByPath"),
  Oe = 536870912,
  hn = 2097152,
  K = H.O_RDONLY | H.O_DIRECTORY | H.O_NOFOLLOW | ws,
  oe = H.O_WRONLY | H.O_CREAT | H.O_EXCL | ws,
  yn = 511,
  wn = 1e7,
  gn = 512,
  Dn = 3,
  pn = 16,
  Me = Error("removeTree stopped after a failure");
function ce(e, o) {
  let s = e.split("/");
  if (
    e.includes("\x00") ||
    s.some((d) => d === "" || d === "." || d === ".." || (o !== "/" && d.includes(o)))
  )
    throw Error("anchored path must be relative, of plain segments");
  return s;
}
function me(e, o) {
  let s = ce(e, o);
  return { dirs: s.slice(0, -1), leaf: s.at(-1) ?? "" };
}
function xe(e) {
  if ((e & H.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e;
}
function J(e) {
  let o = E(e);
  return o === "ENOTDIR" || o === "ELOOP" ? q("WORKING_PARENT_NOT_DIRECTORY") : e;
}
var ie = { found: "same" };
function ke(e, o) {
  return e.ino !== 0n && e.dev === o.dev && e.ino === o.ino;
}
async function bn(e, o, s, d, w) {
  let n = null;
  try {
    for (let [f, b] of d.entries()) {
      let g = n ?? e.getHeldDir(s),
        c = await (f < d.length - 1 && e.openDirToPass !== void 0
          ? e.openDirToPass(g, b, w)
          : e.openDir(g, b, w));
      if (n !== null) await e.closeDir(n);
      n = c;
    }
  } catch {
    if (n !== null) await e.closeDir(n);
    return null;
  } finally {
    await s.close();
  }
  return n === null ? null : e.holdOpenedDir(n, o.path.join(s.realPath, ...d));
}
function ckr(e, o, s, d, w, n, f = [], b) {
  let { sep: g } = o.path,
    c = void 0,
    m = void 0,
    O = void 0,
    k = void 0,
    j = !1,
    Y = null,
    x = () => (Y ??= s.close()),
    L = new WeakMap(),
    Q = async (r, i, a = !1) => {
      let y = i === "" ? [] : ce(i, g),
        p = await n.hold(r),
        P = p === null || y.length === 0 ? p : await bn(n, o, p, y, a);
      if (P === null) return null;
      let N = null,
        F = () => (N ??= P.close()),
        A = {
          realPath: P.realPath,
          get closed() {
            return N !== null;
          },
          stat: async () => {
            if (N !== null) throw Error("held directory is closed");
            return P.stat();
          },
          close: F,
          [Symbol.asyncDispose]: F
        };
      return (L.set(A, P), A);
    },
    v = (r) => {
      let i = L.get(r);
      if (i === void 0) throw Error("held directory belongs to another anchor");
      if (r.closed) throw Error("held directory is closed");
      return i;
    },
    u = (r) => (r === d ? Promise.resolve() : n.closeDir(r)),
    h = async (r, i, a, y) => {
      try {
        return await n.openDir(r, i);
      } catch (p) {
        if (a === null || !G(p)) throw J(p);
        if (
          await n.mkdir(r, i, a).then(
            () => !0,
            (N) => {
              if (E(N) !== "EEXIST") throw N;
              return !1;
            }
          )
        )
          await V("mkdir", { to: { dir: r, dirs: y } }, () => n.rmdir(r, i));
        return n.openDir(r, i).catch((N) => {
          throw J(N);
        });
      }
    },
    D = () => {
      if (Y !== null) throw Error("tree anchor is closed");
    },
    I = async (r, i) => {
      if (n.list === void 0) throw q("WORKING_LIST_UNSUPPORTED");
      let a = typeof i === "object" ? i.first : i,
        y = await n.list(r, a);
      if (a !== void 0 && !(y.length <= a)) {
        if (typeof i === "object" && a >= 0) return We(y.slice(0, a), g);
        throw q("WORKING_LIST_TOO_LONG");
      }
      return We(y, g);
    },
    T = async (r, i) => {
      D();
      let a = d;
      try {
        for (let [y, p] of r.entries()) {
          D();
          let P = await h(a, p, i, r.slice(0, y));
          (await u(a), (a = P));
        }
        return a;
      } catch (y) {
        throw (await u(a), y);
      }
    },
    R = async (r, i) => {
      let { dirs: a, leaf: y } = me(r, g),
        p = await T(a, null);
      try {
        return (D(), await i(p, y, a));
      } finally {
        await u(p);
      }
    },
    Z = async (r, i, a) => {
      let y = me(i, g);
      return me(r, g).dirs.join("/") === y.dirs.join("/")
        ? R(r, (p, P, N) => a({ dir: p, leaf: P, dirs: N }, { dir: p, leaf: y.leaf, dirs: N }))
        : R(r, (p, P, N) =>
            R(i, (F, A, X) => a({ dir: p, leaf: P, dirs: N }, { dir: F, leaf: A, dirs: X }))
          );
    },
    ae = (r) =>
      G(r)
        ? { found: "missing" }
        : E(r) === "WORKING_PARENT_NOT_DIRECTORY"
          ? { found: "replaced" }
          : { found: "check_failed", checkError: r },
    ve = async (r, i) => {
      let a = await T(r, null).then((y) => ({ now: y }), ae);
      if (!("now" in a)) return a;
      try {
        return await i(a.now);
      } catch (y) {
        return ae(y);
      } finally {
        await u(a.now).catch(() => {});
      }
    },
    we = (r) => n.holdOpenedDir(r, "").stat(),
    Ee = (r, i) =>
      r.dev !== i.dev
        ? { found: "replaced", differs: "device" }
        : r.ino !== i.ino
          ? { found: "replaced", differs: "inode" }
          : ie,
    Ie = async ({ dir: r, dirs: i }) =>
      i.length === 0 ? ie : ve(i, async (a) => Ee(await we(r), await we(a))),
    _e = async ({ dir: r, dirs: i }) => ie,
    ue = null,
    Qe = async ({ to: r, from: i }) => null,
    ge = (r, i, a) => {
      try {
        (void 0)?.({ operation: r, ...i, outcome: a ? "undone" : "not_undone" });
      } catch (y) {
        l(y);
      }
      return q(a ? "WORKING_DIRECTORY_MOVED_UNDONE" : "WORKING_DIRECTORY_MOVED");
    },
    Ln = async (r) => {
      return;
    },
    V = async (r, i, a) => {
      let y = await Qe(i);
      if (y === null) return;
      throw ge(
        r,
        y,
        a !== void 0 &&
          (await a(y.side).then(
            () => !0,
            () => !1
          ))
      );
    },
    Ne = async ({ dir: r, leaf: i }, a) => {
      if (!ke(await n.lstat(r, i), await a())) throw Error("another file has the name");
      await n.unlink(r, i);
    },
    Re = (r, i, a, y, p) =>
      R(r, async (P, N, F) => {
        let A = null,
          X = !1,
          fe = async (ee) => {
            return;
          };
        await n.create(P, N, [...f, ...F], i, a, y, p, fe).catch(async (ee) => {
          throw A === null ? ee : ge("create", A, X && (await n.lstat(P, N).then(() => !1, G)));
        });
      }),
    Be = (r) => async (i, a) => {
      (await n.link(i.dir, i.leaf, a.dir, a.leaf),
        await V("link", { to: a, from: i }, async (y) => {
          let p = Ne(a, () => n.lstat(i.dir, i.leaf));
          if ((await p.catch(() => {}), r && y !== "destination")) await n.unlink(i.dir, i.leaf);
          await p;
        }));
    },
    He = (r, i, a) =>
      R(a, async (y, p, P) => {
        (await n.linkIn(v(r), U(i), y, p),
          await V("link", { to: { dir: y, dirs: P } }, () =>
            Ne({ dir: y, leaf: p, dirs: P }, () => n.statIn(v(r), U(i)))
          ));
      }),
    Ae = (r) => async (i, a) => {
      (await r(i.dir, i.leaf, a.dir, a.leaf), await V("rename", { to: a, from: i }));
    };
  return {
    backend: e,
    realRoot: w,
    createsInHeldDirectory: n.createsInHeldDirectory !== !1,
    heldCreateRefusal: n.heldCreateRefusal ?? null,
    ...!1,
    mkdirp: async (r, i = yn) => u(await T(ce(r, g), i)),
    create: (r, i, a) => Re(r, i, a, !1),
    createSynced: (r, i, a, y) => Re(r, i, a, !0, y),
    createAndOpen: (r, i) => R(r, (a, y, p) => n.createAndOpen(a, y, [...f, ...p], i)),
    link: (r, i) => Z(r, i, Be(!1)),
    rename: (r, i) => Z(r, i, Ae(n.rename)),
    placeCreated: (r, i) => Z(r, i, n.renameNoReplace === void 0 ? Be(!0) : Ae(n.renameNoReplace)),
    symlink: (r, i) => R(i, (a, y) => n.symlink(r, a, y)),
    readlink: (r) => R(r, n.readlink),
    unlink: (r) => R(r, n.unlink),
    rmdir: (r) => R(r, n.rmdir),
    list: async (r, i) => {
      let a = r === "" ? [] : ce(r, g),
        y = await T(a, null);
      try {
        return (D(), await I(y, i));
      } finally {
        await u(y);
      }
    },
    removeTree: (r, { keep: i, onDeleted: a } = {}) =>
      R(r, async (y, p, P) => {
        if (i !== void 0) U(i);
        let N = i === void 0 ? null : Buffer.from(i),
          F = (_) => N !== null && (typeof _ === "string" ? _ === i : _.equals(N)),
          { bytes: A } = n,
          X = (_, C) => (typeof C === "string" ? n.unlink(_, C) : A.unlink(_, C)),
          fe = (_, C) => (typeof C === "string" ? n.rmdir(_, C) : A.rmdir(_, C)),
          ee = (_, C) => (typeof C === "string" ? n.openDir(_, C) : A.openDir(_, C)),
          se = async (_) => (A === void 0 ? I(_) : Pn(await A.list(_), g)),
          ne = async (_, C) => {
            try {
              await X(_, C);
            } catch (W) {
              let te = E(W);
              if (te === "ENOENT") return "gone";
              if (te === "EISDIR" || te === "EPERM") return "directory";
              throw W;
            }
            return (a?.(), "gone");
          },
          le = wn,
          re = async (_, C, W, te, Ce = !1) => {
            for (let Te = 0; ; Te++) {
              D();
              let pe = (await se(W)).filter((B) => !(Ce && F(B)));
              if (((le -= pe.length), le < 0))
                throw Object.assign(Error("directory too large to remove: too many entries"), {
                  code: "E2BIG"
                });
              if (te.length >= gn)
                throw Object.assign(Error("directory too deep to remove"), {
                  code: "ENAMETOOLONG"
                });
              let Fe = !1,
                Ze = Ca(pn, async (B) => {
                  if (Fe) throw Me;
                  D();
                  try {
                    return await ne(W, B);
                  } catch (M) {
                    throw ((Fe = !0), M);
                  }
                }),
                Se = await Promise.allSettled(pe.map((B) => Ze(B))),
                be = Se.filter((B) => B.status === "rejected");
              if (be.length > 0) throw (be.find((B) => B.reason !== Me) ?? be[0]).reason;
              let en = pe.filter((B, M) => {
                let Le = Se[M];
                return Le?.status === "fulfilled" && Le.value === "directory";
              });
              for (let B of en) {
                let M = await ee(W, B).catch(() => null);
                if (M === null) {
                  if ((await ne(W, B)) === "directory") (await fe(W, B), a?.());
                  continue;
                }
                try {
                  await re(W, B, M, [...te, B]);
                } finally {
                  await n.closeDir(M);
                }
              }
              if (Ce && N !== null) return;
              try {
                (await fe(_, C), a?.());
                return;
              } catch (B) {
                let M = E(B);
                if (M === "ENOENT") return;
                if (M !== "ENOTEMPTY" || Te >= Dn) throw B;
              }
            }
          },
          De = await n.openDir(y, p).catch(async (_) => {
            if (G(_)) return null;
            if (N !== null) throw J(_);
            if ((await ne(y, p)) === "gone") return null;
            throw J(_);
          });
        if (De === null) return;
        try {
          await re(y, p, De, [...P, p], !0);
        } finally {
          await n.closeDir(De);
        }
      }),
    lstat: async (r) => {
      if (r !== "") return R(r, n.lstat);
      return (D(), s.stat());
    },
    open: async (r, i) => {
      let a = xe(i);
      if (n.openBeneath !== void 0) {
        let { dirs: y, leaf: p } = me(r, g);
        return (D(), n.openBeneath([...f, ...y], p, a));
      }
      return R(r, (y, p, P) => n.open(y, p, [...f, ...P], a));
    },
    anchorBeneath: async (r) => {
      let i = ce(r, g),
        a = n.holdOpenedDir(await T(i, null), o.path.join(w, ...i));
      return ckr(e, o, a, n.getHeldDir(a), a.realPath, n.forAnchorBeneath ?? n, [...f, ...i], b);
    },
    holdOutside: Q,
    moveOut: (r, i, a) =>
      R(r, async (y, p, P) => {
        (await n.renameOut(y, p, v(i), U(a)), await V("rename", { from: { dir: y, dirs: P } }));
      }),
    moveIn: (r, i, a) =>
      R(a, async (y, p, P) => {
        (await n.renameIn(v(r), U(i), y, p), await V("rename", { to: { dir: y, dirs: P } }));
      }),
    linkIn: He,
    placeCreatedIn: (r, i, a) =>
      n.renameInNoReplace === void 0
        ? He(r, i, a)
        : R(a, async (y, p, P) => {
            (await n.renameInNoReplace(v(r), U(i), y, p),
              await V("rename", { to: { dir: y, dirs: P } }));
          }),
    statIn: async (r, i) => n.statIn(v(r), U(i)),
    openIn: async (r, i, a) => n.openIn(v(r), U(i), xe(a)),
    unlinkIn: async (r, i) => n.unlinkIn(v(r), U(i)),
    close: x,
    [Symbol.asyncDispose]: x
  };
}
function We(e, o) {
  return e.filter((s) => Ve(s, o));
}
function Pn(e, o) {
  return e.filter((s) => Ve(s.toString("latin1"), o));
}
function Ve(e, o) {
  return (
    e !== "" && e !== "." && e !== ".." && !e.includes("/") && !e.includes(o) && !e.includes("\x00")
  );
}
function U(e) {
  if (
    e === "" ||
    e === "." ||
    e === ".." ||
    e.includes("/") ||
    e.includes("\\") ||
    e.includes("\x00")
  )
    throw Error("a held-directory leaf must be one plain name");
  return e;
}
async function Xe(e, o) {
  let { fs: s } = e,
    d = await s.realpath(o).catch(() => null);
  if (d === null) return null;
  let w = await s.open(d, K).catch(() => null);
  if (w === null) return null;
  try {
    let [n, f] = await Promise.all([w.stat({ bigint: !0 }), s.lstat(d, { bigint: !0 })]);
    if (!n.isDirectory() || !f.isDirectory() || n.ino === 0n || n.dev !== f.dev || n.ino !== f.ino)
      return (await w.close().catch(() => {}), null);
  } catch {
    return (await w.close().catch(() => {}), null);
  }
  return { realPath: d, dir: w, stat: () => w.stat({ bigint: !0 }), close: () => w.close() };
}
function Je(e) {
  return { stat: () => e.stat({ bigint: !0 }), close: () => e.close() };
}
async function On(e, o, s, d, w, n, f) {
  let b = (g, c) =>
    e.chown(g, c).catch((m) => {
      throw new Fho(m);
    });
  try {
    if ((await e.writeFile(o), n !== void 0 && n.to.gid !== n.from.gid))
      await b(n.from.uid, n.to.gid);
    if ((await e.chmod(s), n !== void 0 && n.to.uid !== n.from.uid)) await b(n.to.uid, n.to.gid);
    if (d) await e.sync();
    await f();
  } catch (g) {
    throw (await w().catch(() => {}), await e.close().catch(() => {}), g);
  }
  try {
    await e.close();
  } catch (g) {
    throw (await w().catch(() => {}), g);
  }
}
var qe = (e, o) => (o === void 0 ? e : e & 448);
async function AAs(e, o, s, d, w, n = !1, f, b = () => Promise.resolve()) {
  let { made: g, lookError: c } = await e.stat({ bigint: !0 }).then(
      (k) => ({ made: k, lookError: void 0 }),
      (k) => ({ made: null, lookError: k })
    ),
    m = async () => {
      let k = await d();
      if (g !== null && g.ino !== 0n && k !== null && k.dev === g.dev && k.ino === g.ino) await w();
    };
  if (f !== void 0 && g === null) throw (await e.close().catch(() => {}), new Fho(c));
  let O = g && { uid: Number(g.uid), gid: Number(g.gid) };
  return On(
    e,
    o,
    s,
    n,
    m,
    f === void 0 || O === null ? void 0 : { from: O, to: { ...O, ...f } },
    () => b(g)
  );
}
async function Ue(e, o, s) {
  let [d, w] = await Promise.all([e.fs.lstat(s, { bigint: !0 }), o.stat({ bigint: !0 })]);
  return d.dev === w.dev && d.ino === w.ino && w.ino !== 0n;
}
async function kn(e, o) {
  try {
    let [s, d] = await Promise.all([
      e.fs.lstat(`/proc/self/fd/${o.fd}/.`, { bigint: !0 }),
      o.stat({ bigint: !0 })
    ]);
    return s.dev === d.dev && s.ino === d.ino && d.ino !== 0n;
  } catch (s) {
    let d = E(s);
    if (d === "ENOENT" || d === "EACCES" || d === "EPERM") return !1;
    throw s;
  }
}
function vn(e, o, { realRoot: s, directoryCheck: d }, w) {
  let { fs: n } = e,
    f = (c, m) => `/proc/self/fd/${c.fd}/${m}`,
    b = (c, m) => Buffer.concat([Buffer.from(`/proc/self/fd/${c.fd}/`), m]),
    g = {
      openDir: (c, m) => n.open(f(c, m), K),
      mkdir: async (c, m, O) => {
        await n.mkdir(f(c, m), { mode: O });
      },
      closeDir: (c) => c.close(),
      ...{},
      create: async (c, m, O, k, j, Y, x, L) => {
        if (
          (await AAs(
            await n.open(f(c, m), oe | H.O_NOFOLLOW, qe(j, x)),
            k,
            j,
            () => n.lstat(f(c, m), { bigint: !0 }).catch(() => null),
            () => n.unlink(f(c, m)),
            Y,
            x,
            L
          ),
          Y)
        )
          await c.sync().catch(() => {});
      },
      createAndOpen: (c, m, O, k) => n.open(f(c, m), oe | H.O_NOFOLLOW, k),
      link: (c, m, O, k) => n.link(f(c, m), f(O, k)),
      rename: (c, m, O, k) => n.rename(f(c, m), f(O, k)),
      symlink: (c, m, O) => n.symlink(c, f(m, O)),
      readlink: (c, m) => n.readlink(f(c, m)),
      unlink: (c, m) => n.unlink(f(c, m)),
      rmdir: (c, m) => n.rmdir(f(c, m)),
      list: async (c, m) => {
        if (m === void 0) return n.readdir(`/proc/self/fd/${c.fd}`);
        throw q("WORKING_LIST_UNSUPPORTED");
      },
      bytes: {
        list: (c) => n.readdir(`/proc/self/fd/${c.fd}`, { encoding: "buffer" }),
        openDir: (c, m) => n.open(b(c, m), K),
        unlink: (c, m) => n.unlink(b(c, m)),
        rmdir: (c, m) => n.rmdir(b(c, m))
      },
      lstat: (c, m) => n.lstat(f(c, m), { bigint: !0 }),
      open: (c, m, O, k) => n.open(f(c, m), k | H.O_NOFOLLOW | ws),
      hold: (c) => Xe(e, c),
      getHeldDir: (c) => c.dir,
      holdOpenedDir: (c, m) => ({
        realPath: m,
        dir: c,
        stat: () => c.stat({ bigint: !0 }),
        close: () => c.close()
      }),
      renameOut: (c, m, O, k) => n.rename(f(c, m), f(O.dir, k)),
      renameIn: (c, m, O, k) => n.rename(f(c.dir, m), f(O, k)),
      linkIn: (c, m, O, k) => n.link(f(c.dir, m), f(O, k)),
      statIn: (c, m) => n.lstat(f(c.dir, m), { bigint: !0 }),
      openIn: (c, m, O) => n.open(f(c.dir, m), O | H.O_NOFOLLOW | ws),
      unlinkIn: (c, m) => n.unlink(f(c.dir, m))
    };
  return ckr("linux_procfd", e, Je(o), o, s, g, [], d);
}
function En() {
  let e = globalThis.Bun?.ant?.posixFsAt;
  return typeof e?.openat === "function" ? e : null;
}
function In(e, o, s) {
  return s >= 0
    ? e.readdirat(o, { maxNames: Math.min(Math.floor(s), Number.MAX_SAFE_INTEGER) })
    : [];
}
var ye = z(on),
  de = z(nn),
  Ke = z(sn),
  ze = z(an),
  _n = z(rn),
  Nn = z(tn),
  Rn = z(ln);
function Bn(e) {
  return {
    stat: (o) => ye(e, o),
    writeFile: (o) => Rn(e, o),
    chown: (o, s) => Nn(e, o, s),
    chmod: (o) => _n(e, o),
    sync: () => ze(e),
    close: () => de(e)
  };
}
var he,
  Hn = wb(() =>
    t("anchor: this runtime has no Bun.ant.posixFsAt, so the macOS backend cannot come up", {
      level: "warn"
    })
  );
function _hi() {
  let e = En();
  if (e === null) return (Hn(), null);
  if (he !== void 0) return he;
  let o = wb(() => {
      return;
    }),
    s = (d, w) => {
      try {
        return w();
      } catch (n) {
        let f = Error("a file call failed (see the code and syscall properties)");
        throw (
          (f.errno = Fs(n) && n.errno !== void 0 ? Math.abs(n.errno) : 0),
          (f.code = f.errno === 0 ? (E(n) ?? "EUNKNOWN") : un(-f.errno)),
          (f.syscall = d),
          f
        );
      }
    };
  return (
    (he = {
      openat: (d, w, n) => s("openat", () => e.openat(d, w, n)),
      getBeneath: o,
      mkdirat: (d, w, n) => s("mkdirat", () => e.mkdirat(d, w, n)),
      renameat: (d, w, n, f) => s("renameat", () => e.renameat(d, w, n, f)),
      linkat: (d, w, n, f) => s("linkat", () => e.linkat(d, w, n, f)),
      symlinkat: (d, w, n) => s("symlinkat", () => e.symlinkat(d, w, n)),
      readlinkat: (d, w) => s("readlinkat", () => e.readlinkat(d, w)),
      unlinkat: (d, w) => s("unlinkat", () => e.unlinkat(d, w)),
      rmdirat: (d, w) => s("unlinkat", () => e.unlinkat(d, w, { removeDir: !0 })),
      listDirectory: (d, w) => s("readdir", () => (w === void 0 ? e.readdirat(d) : In(e, d, w))),
      listDirectoryBytes: (d) => s("readdir", () => e.readdirat(d, { encoding: "buffer" })),
      ...{}
    }),
    he
  );
}
function bhi(e) {
  return (e.noFollowAnyEnforced ??= An(e));
}
async function An(e) {
  let { fs: o, path: s } = e,
    d = null;
  try {
    ((d = await o.realpath(await Ye(s.join(je(), "claude-nfa-")))),
      await o.mkdir(s.join(d, "d")),
      await dn(s.join(d, "d"), s.join(d, "l")));
    let w = oe | Oe;
    try {
      await (await o.open(s.join(d, "d", "control"), w, 384)).close();
    } catch (n) {
      if (E(n) === "EINVAL") return !1;
      throw n;
    }
    try {
      return (await (await o.open(s.join(d, "l", "probe"), w, 384)).close(), !1);
    } catch (n) {
      if (E(n) === "ELOOP") return !0;
      throw n;
    }
  } catch (w) {
    return (t(`anchor: O_NOFOLLOW_ANY probe not run (${E(w) ?? "not an errno"})`), !0);
  } finally {
    if (d !== null) await Ge(d, { recursive: !0, force: !0 }).catch(() => {});
  }
}
async function Cn(e, o) {
  let s = o.getBeneath?.();
  if (s === void 0) return "not_bound";
  return (await Shi(e, s)) ?? ((d, w, n) => s.create(d, [w], n & 511));
}
function Shi(e, o) {
  return (e.heldCreateProbed ??= Tn(o).then((s) => {
    if (s === "probe_not_run" || s === "probe_create_failed") e.heldCreateProbed = void 0;
    return s;
  }));
}
async function Tn(e) {
  let o = (n, f) =>
      t(
        `anchor: the probe of the create in a held directory ${n}, so this ${f} creates by full path`
      ),
    s = null,
    d = [],
    w = (n) => (d.push(n), ye(n, { bigint: !0 }));
  try {
    s = await Ye(`${je()}/claude-held-`);
    let n = await Ke(s, K);
    d.push(n);
    let f = await w(await Ke(`${s}/by-path`, oe, 384)),
      b;
    try {
      b = await w(e.create(n, ["held"], 384));
    } catch (c) {
      return (o(`failed (${E(c) ?? "not an errno"})`, "anchor"), "probe_create_failed");
    }
    if (b.mode !== f.mode)
      return (
        o(
          `made a file of mode ${b.mode.toString(8)} where node made one of ${f.mode.toString(8)}`,
          "host"
        ),
        "probe_wrong_mode"
      );
    let g = await cn(`${s}/held`, { bigint: !0 }).catch((c) => {
      if (G(c)) return null;
      throw c;
    });
    if (g === null || !ke(b, g))
      return (o("made a file that is not seen at its name", "host"), "probe_wrong_place");
    return null;
  } catch (n) {
    return (o(`could not be staged (${E(n) ?? "not an errno"})`, "anchor"), "probe_not_run");
  } finally {
    if ((await Promise.all(d.map((n) => de(n).catch(() => {}))), s !== null))
      await Ge(s, { recursive: !0, force: !0 }).catch(() => {});
  }
}
var Pe = H.O_RDONLY | hn | H.O_NONBLOCK;
function Fn(e, o, s, { realRoot: d, directoryCheck: w }, n, f, b) {
  let { fs: g, path: c } = e,
    m = (v, u, h, D) => g.open(c.join(d, ...v, u), (h & ~H.O_NOFOLLOW) | Oe | ws, D),
    O = async (v, u) => {
      let h = o.fstatat?.(v, u);
      return h !== void 0 && h.dev >= 0n && h.ino < 2n ** 63n ? h : k(v, u, Pe);
    },
    k = async (v, u, h) => {
      let D = o.openat(v, u, h | ws);
      try {
        return await ye(D, { bigint: !0 });
      } finally {
        await de(D);
      }
    },
    j = async (v, u, h) => {
      try {
        let [D, I] = await Promise.all([v.stat({ bigint: !0 }), u()]);
        if (D.dev !== I.dev || D.ino !== I.ino)
          throw (
            h?.(),
            Object.assign(Error("not the file the held directory names"), { code: "ELOOP" })
          );
        return v;
      } catch (D) {
        throw (await v.close().catch(() => {}), D);
      }
    },
    Y = async (v, u, h, D, I) => {
      try {
        return v === null ? await m(D, h, oe, I) : Bn(v(u, h, I));
      } catch (T) {
        throw J(T);
      }
    },
    { listDirectory: x, listDirectoryBytes: L } = o,
    Q = (v) => ({
      ...(L !== void 0 && {
        bytes: {
          list: async (u) => L(u),
          openDir: async (u, h) => o.openat(u, h, K),
          unlink: async (u, h) => o.unlinkat(u, h),
          rmdir: async (u, h) => o.rmdirat(u, h)
        }
      }),
      openDir: async (u, h) => o.openat(u, h, K),
      mkdir: async (u, h, D) => o.mkdirat(u, h, D),
      closeDir: (u) => de(u),
      createsInHeldDirectory: v !== null,
      ...(v !== null && {
        statDirectoryByPath: async (u) => {
          let h = await m(u, "", K | H.O_NONBLOCK).catch((D) => {
            throw J(D);
          });
          try {
            return await h.stat({ bigint: !0 });
          } finally {
            await h.close();
          }
        }
      }),
      create: async (u, h, D, I, T, R, Z, ae) => {
        if (
          (await AAs(
            await Y(v, u, h, D, qe(T, Z)),
            I,
            T,
            () => k(u, h, Pe).catch(() => null),
            () => o.unlinkat(u, h),
            R,
            Z,
            ae
          ),
          R)
        )
          await ze(u).catch(() => {});
      },
      createAndOpen: (u, h, D, I) =>
        m(D, h, oe, I).catch((T) => {
          throw J(T);
        }),
      link: async (u, h, D, I) => o.linkat(u, h, D, I),
      rename: async (u, h, D, I) => o.renameat(u, h, D, I),
      symlink: async (u, h, D) => {
        if (o.symlinkat === void 0) throw q("WORKING_LINK_UNSUPPORTED");
        o.symlinkat(u, h, D);
      },
      readlink: async (u, h) => {
        if (o.readlinkat === void 0) throw q("WORKING_LINK_UNSUPPORTED");
        return o.readlinkat(u, h);
      },
      unlink: async (u, h) => o.unlinkat(u, h),
      rmdir: async (u, h) => o.rmdirat(u, h),
      ...(x !== void 0 && { list: async (u, h) => x(u, h) }),
      lstat: O,
      open: async (u, h, D, I) =>
        j(
          await m(D, h, I),
          () => O(u, h),
          () => b?.([...D, h].join("/"))
        ),
      ...(b === null && { openBeneath: (u, h, D) => m(u, h, D) }),
      hold: (u) => Xe(e, u),
      getHeldDir: (u) => u.dir.fd,
      holdOpenedDir: (u, h) => ({
        realPath: h,
        dir: { fd: u },
        stat: () => ye(u, { bigint: !0 }),
        close: () => de(u)
      }),
      renameOut: async (u, h, D, I) => o.renameat(u, h, D.dir.fd, I),
      renameIn: async (u, h, D, I) => o.renameat(u.dir.fd, h, D, I),
      linkIn: async (u, h, D, I) => o.linkat(u.dir.fd, h, D, I),
      statIn: (u, h) => O(u.dir.fd, h),
      openIn: async (u, h, D) =>
        j(await g.open(c.join(u.realPath, h), (D & ~H.O_NOFOLLOW) | Oe | ws), () =>
          k(u.dir.fd, h, Pe)
        ),
      unlinkIn: async (u, h) => o.unlinkat(u.dir.fd, h)
    });
  return ckr(
    "darwin_at",
    e,
    Je(s),
    s.fd,
    d,
    {
      ...Q(typeof n === "function" ? n : null),
      ...(typeof n === "string" && { heldCreateRefusal: n }),
      ...(!f && { forAnchorBeneath: Q(null) })
    },
    [],
    w
  );
}
function SAi(e, o, { createsInHeldDirectoryCheckedByPath: s = !1 } = {}) {
  return nFn(e, { gitRoot: o, realRoot: o, isRootNameExchangeable: !0, ...(s && { [$e]: !0 }) });
}
async function nFn(e, o) {
  let { [$e]: s, ...d } = o,
    w = void 0,
    n = !1,
    f = { ...d, directoryCheck: void 0 };
  switch (e.platform()) {
    case "windows": {
      let { loadNt: b } = await import("./chunk-vn46tm3z.js"),
        g = b();
      if (g === null) return { unavailable: "no_ffi" };
      let { openWin32Backend: c } = await import("./chunk-ydd7q0y6.js"),
        m = await c(e, g, f);
      return "unanchored" in m
        ? { unavailable: m.unanchored }
        : ckr("win32_handle", e, m.root, m.held, f.realRoot, m.ops);
    }
    case "linux":
    case "wsl": {
      let b = await e.fs.open(f.realRoot, K);
      try {
        if (!(await Ue(e, b, f.realRoot)))
          return (await b.close(), { unavailable: "unstable_identity" });
        if (await kn(e, b)) {
          let g = (void 0)?.createsInHeldDirectory === !0 || !1;
          return vn(e, b, f, g);
        }
        return (await b.close(), { unavailable: "no_procfs" });
      } catch (g) {
        throw (await b.close().catch(() => {}), g);
      }
    }
    case "macos": {
      let b = e.darwinAt ?? _hi();
      if (b === null) return { unavailable: "no_ffi" };
      if (!(await bhi(e))) return { unavailable: "nofollow_any_unenforced" };
      let g = await e.fs.open(f.realRoot, K);
      try {
        if ((await SZt(e, f)) !== f.realRoot) throw mn();
        if (!(await Ue(e, g, f.realRoot)))
          return (await g.close(), { unavailable: "unstable_identity" });
        return Fn(
          e,
          b,
          g,
          f,
          (void 0)?.createsInHeldDirectory === !0 ? await Cn(e, b) : null,
          !1,
          null
        );
      } catch (c) {
        throw (await g.close().catch(() => {}), c);
      }
    }
    case "unknown":
      return { unavailable: "unsupported_platform" };
  }
}
function wAi(e) {
  return e.kind === "unavailable" ? e.reason : null;
}
async function vAi(e, { host: o = bZt(), now: s = () => performance.now() } = {}) {
  let d = s();
  return { ...(await Sn(o, e).catch((n) => ({ kind: "threw" }))), elapsedMs: Math.round(s() - d) };
}
async function Sn(e, o) {
  let s = await nFn(e, { gitRoot: o, realRoot: await e.fs.realpath(o) });
  if ("unavailable" in s) return { kind: "unavailable", reason: s.unavailable };
  return (await s.close().catch(() => {}), { kind: "available" });
}
export { Fho, yhi, bAi, ckr, AAs, _hi, bhi, Shi, SAi, nFn, wAi, vAi };

//# sourceMappingURL=chunk-qzfkfc34.js.map
