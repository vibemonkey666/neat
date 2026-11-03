// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { git, U, cm, uAn } from "./chunk-wrtp8qz8.js";
import { R, d, E, G, $B, Vt, J_ } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { m } from "./chunk-brszmkb3.js";
import { vB, fe, zst, Tlr, Sfi } from "./chunk-xe386mry.js";
import { Wy, Po, Ui, jo, uYt, ie, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { iP, blr, UZo, Os, kkn, bSe, lW, yfi } from "./chunk-qywdxehb.js";
import { i } from "./chunk-cj37hmns.js";
import { YS } from "./chunk-jtb5bzvb.js";
import { NZo } from "./chunk-hc5j8sxy.js";
import { Wh } from "./chunk-nqsvrwdr.js";
import { randomBytes as J } from "crypto";
import {
  closeSync as k,
  fchmodSync as ce,
  constants as w,
  fstatSync as D,
  writeFileSync as V,
  fsyncSync as X,
  ftruncateSync as le,
  openSync as _,
  readSync as de
} from "fs";
import { lstat as Q, open as A, readlink as ue, realpath as q, stat as ee } from "fs/promises";
import { homedir as te } from "os";
import {
  basename as M,
  dirname as b,
  extname as z,
  isAbsolute as K,
  join as v,
  normalize as me,
  parse as pe,
  relative as Y,
  resolve as H,
  sep as P
} from "path";
class ne {
  identities = new Map();
  record(e, n, r, s) {
    let u = Z(e),
      o = this.identities.get(u);
    if (o)
      try {
        k(o.fd);
      } catch {}
    this.identities.set(u, { dev: n, ino: r, fd: s });
  }
  identity(e) {
    return this.identities.get(Z(e));
  }
  reset() {
    for (let { fd: e } of this.identities.values())
      try {
        k(e);
      } catch {}
    this.identities.clear();
  }
}
var ge = new W(() => new ne());
function j() {
  return ge.of(U().host);
}
function Z(e) {
  return H(e);
}
function nfi(e, n, r, s) {
  j().record(e, n, r, s);
}
function U4t(e) {
  if (!e) return;
  let n = j().identity(e);
  if (!n) return;
  let r;
  try {
    r = _(e, w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW);
  } catch (s) {
    let u = E(s);
    if (u === "ENOENT" || u === "ENOTDIR" || u === "ELOOP" || u === "EACCES")
      LAt(
        `Staging dir ${e} was established for a sandboxed command but is now unopenable (${u}) \u2014 refusing atomic write`
      );
    throw s;
  }
  try {
    let s = D(r);
    if (s.dev !== n.dev || s.ino !== n.ino)
      LAt(
        `Staging dir ${e} identity changed (expected ${n.dev}/${n.ino}, found ${s.dev}/${s.ino}) \u2014 refusing atomic write`
      );
  } finally {
    k(r);
  }
}
function N8r(e, n, r, s) {
  let u = `${n}${r}`;
  if (!e) return u;
  let o = j().identity(e);
  if (s && b(n) !== b(e)) return (U4t(e), u);
  let a = w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW;
  try {
    k(_(b(e), a));
  } catch (y) {
    let g = E(y);
    if (g === "ELOOP" || g === "ENOTDIR") {
      if (o)
        LAt(
          `Staging dir parent ${b(e)} is ${g} but a sandboxed command established ${e} \u2014 refusing sibling fallback`
        );
      if (s) return u;
      throw new h_(`Refusing to stage atomic write under non-directory parent: ${b(e)}`);
    }
    if (!G(y)) throw y;
    if (o)
      LAt(
        `Staging dir parent ${b(e)} is absent but a sandboxed command established ${e} \u2014 refusing sibling fallback`
      );
    return u;
  }
  let f;
  try {
    f = _(e, a);
  } catch (y) {
    let g = E(y);
    if (g === "ENOENT" || g === "ENOTDIR" || g === "ELOOP") {
      if (o)
        LAt(
          `Staging dir ${e} is ${g} but a sandboxed command established it \u2014 refusing sibling fallback`
        );
      return u;
    }
    throw y;
  }
  try {
    if (o) {
      let y = D(f);
      if (y.dev !== o.dev || y.ino !== o.ino)
        LAt(
          `Staging dir ${e} identity changed (expected ${o.dev}/${o.ino}, found ${y.dev}/${y.ino}) \u2014 refusing atomic write`
        );
    }
  } finally {
    k(f);
  }
  return v(e, `${M(n)}${r}`);
}
class h_ extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
}
class ulr extends h_ {
  constructor(e, n) {
    super(UZo(e, n));
    this.name = "HardLinkWriteRefusedError";
  }
}
function re(e) {
  return { flags: w.O_WRONLY | w.O_CREAT | e, flagsIfMissing: void 0 };
}
class tee extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkReadRefusedError";
  }
}
async function HAt(e, n) {
  let r = Y(e, n);
  if (r === "" || r.startsWith("..") || K(r))
    throw new R(
      `assertDirChainReal: dir must be strictly inside base (rel: ${r})`,
      "assertDirChainReal: dir must be strictly inside base"
    );
  let s = e;
  for (let u of r.split(P)) {
    s = v(s, u);
    try {
      await (await A(s, w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW)).close();
    } catch (o) {
      let a = E(o);
      if (a === "ELOOP" || a === "ENOTDIR")
        throw new h_(`Refusing to write under symlinked or non-directory path: ${s}`);
      if (a === "ENOENT") return;
      throw o;
    }
  }
}
class $8r extends Error {
  constructor(e) {
    super(e);
    this.name = "StagingDirTamperedError";
  }
}
function LAt(e) {
  throw (m("sandbox_exec", "atomic_write_staging_dir_tampered"), new $8r(e));
}
function Ufe(e, n, r = "write") {
  return se(e, n, r) ?? jo(n);
}
function se(e, n, r) {
  let s = e.session.writePermissionStash.consume(e.toolUseId, n, r);
  if (s === git)
    throw new (r === "read" ? tee : h_)(
      `Refusing to ${r === "read" ? "read" : "write"} ${n}: its permission check expired before it ran (too many concurrent file operations). Retry.`
    );
  if (s !== void 0) return s;
  if (e.toolUseId)
    t(
      `takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`
    );
  return;
}
function B4t(e, n) {
  return Ufe(e, n, "read");
}
function rfi(e, n) {
  let r = se(e, n, "read");
  if (r !== void 0) return { spellings: r, unresolved: !1 };
  let s = Ui(n);
  return { spellings: uYt(s), unresolved: s.unresolved };
}
async function Fu(e) {
  try {
    return (await ee(e), !0);
  } catch {
    return !1;
  }
}
async function Y$(e) {
  return Q(e).then(
    () => "present",
    (n) => (G(n) || E(n) === "ENOTDIR" ? "gone" : "unreadable")
  );
}
var NAt = 262144;
function Ost(e, { maxBytes: n, symlinkAtPath: r = "follow", regularFileOnly: s = r === "refuse" }) {
  using u = Wy`fs.readBoundedSync(${e}, max ${n} bytes)`;
  let o = "r";
  if (r === "refuse") o = w.O_RDONLY | w.O_NOFOLLOW | w.O_NONBLOCK;
  else if (s) o = w.O_RDONLY | w.O_NONBLOCK;
  let a = _(e, o);
  try {
    if (s) {
      if (!D(a).isFile())
        throw Object.assign(Error("EINVAL: not a regular file"), { code: "EINVAL" });
    }
    return oe(a, e, n);
  } finally {
    k(a);
  }
}
function ofi(e, { maxBytes: n }) {
  using r = Wy`fs.readInheritedFdSync(fd ${e}, max ${n} bytes)`;
  let s = D(e);
  if (!s.isSocket() && !s.isFIFO())
    throw new R(
      `refusing to read fd ${e}: not a pipe or socket`,
      "readInheritedFdSync: descriptor is not a pipe or socket"
    );
  return he(e, n);
}
function F8r(e) {
  try {
    return D(e).isSocket();
  } catch {
    return !1;
  }
}
function he(e, n) {
  try {
    return oe(e, `fd ${e}`, n, { untilNewline: !0 });
  } finally {
    k(e);
  }
}
function oe(e, n, r, { untilNewline: s = !1 } = {}) {
  let u = [],
    o = 0,
    a = Buffer.alloc(8192);
  while (!0) {
    let f = de(e, a, 0, a.length, null);
    if (f === 0) return Buffer.concat(u).toString("utf8");
    if (((o += f), o > r))
      throw new R(
        `refusing to read ${n}: content exceeds ${r} byte limit`,
        "readBoundedSync: content exceeds byte limit"
      );
    let y = s ? a.subarray(0, f).indexOf(10) : -1;
    if ((u.push(Buffer.from(a.subarray(0, y === -1 ? f : y + 1))), y !== -1))
      return Buffer.concat(u).toString("utf8");
  }
}
function sfi(e) {
  let n = ie();
  return Math.floor(n.statSync(e).mtimeMs);
}
async function ck(e) {
  let n = await ie().stat(e);
  return Math.floor(n.mtimeMs);
}
function RZo() {
  return Ne(i.CLAUDE_CODE_PERFORCE_MODE);
}
var Mst =
  "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";
function Dst(e) {
  return RZo() && (e & 128) === 0;
}
var we = Wh();
function f2(e, n) {
  return we.run(e, n);
}
function Sxe(e, n) {
  if (n !== "CRLF") return e;
  return e.replaceAll(
    `\r
`,
    `
`
  ).split(`
`).join(`\r
`);
}
async function Hst(e, n, r, s) {
  let u = Sxe(n, s);
  await xR(e, u, { encoding: r });
  let o = Buffer.byteLength(u, r),
    a = await ie().stat(e);
  if (a.size !== o)
    throw new R(
      `Write verification failed: ${e} is ${a.size} bytes on disk, expected ${o}. The filesystem may have silently truncated the write (network drive / cloud sync).`,
      "writeTextContent: on-disk size mismatch after write"
    );
  return Math.floor(a.mtimeMs);
}
function ifi(e) {
  try {
    let n = ie(),
      { resolvedPath: r } = Po(n, e);
    return NZo(r);
  } catch (n) {
    if (Vt(n) || $B(n) || J_(n))
      t(`detectFileEncoding failed for expected reason: ${E(n)}`, { level: "debug" });
    else l(n);
    return "utf8";
  }
}
function wxe(e) {
  if (!e.includes("\t")) return e;
  return e.replace(/^\t+/gm, (n) => "  ".repeat(n.length));
}
function ye(e) {
  let n = e ? (Sfi() ?? void 0) : void 0,
    r = e ? (YS(e, n) ?? void 0) : void 0,
    s = r && n !== void 0 ? Y(n, r) : void 0;
  return { absolutePath: r, relativePath: s };
}
var U8r = "Path hidden (unsupported characters)";
function Zo(e) {
  if (e.includes("\x00")) return U8r;
  let { relativePath: n } = ye(e);
  if (n && !n.startsWith("..")) return n;
  if (cm()) return e;
  let r = te();
  if (e.startsWith(r + P)) return "~" + e.slice(r.length);
  return e;
}
function j4t(e, n) {
  let r = n === void 0 ? Tlr() : zst(n),
    s = (n !== void 0 || !vB()) && r === uAn();
  return Y(r, s ? H(r, e) : e);
}
var Oe = /^(\.[\p{L}\p{N}_+~#-]{1,32})?$/u;
async function N$e(e) {
  let n = ie();
  try {
    let r = b(e),
      s = M(e, z(e)),
      a = (await n.readdir(r)).filter(
        (f) =>
          Oe.test(z(f.name).normalize("NFC")) && M(f.name, z(f.name)) === s && v(r, f.name) !== e
      )[0];
    if (a) return a.name;
    return;
  } catch (r) {
    if (!G(r)) t(`findSimilarFile failed for ${e}: ${r}`, { level: "error" });
    return;
  }
}
var p2 = "Note: your current working directory is";
async function Bfe(e) {
  let n = fe(),
    r = b(n),
    s = e;
  try {
    let L = await q(b(e));
    s = v(L, M(e));
  } catch {}
  let u = r === P ? P : r + P,
    a = O() === "windows" ? (L) => L.toLowerCase() : (L) => L,
    f = a(s);
  if (!f.startsWith(a(u)) || f.startsWith(a(n + P)) || f === a(n)) return;
  let y = Y(r, s),
    g = v(n, y);
  try {
    return (await ee(g), g);
  } catch {
    return;
  }
}
function Lst({ content: e, startLine: n, tabAwareSeparator: r = !1 }) {
  if (!e) return "";
  let s =
      r &&
      (e.startsWith("\t") ||
        e.includes(`
	`))
        ? ":"
        : "\t",
    u = [],
    o = n,
    a = 0,
    f = e.indexOf(`
`);
  while (f !== -1)
    (u.push(B8r(e.slice(a, f), o++, s)),
      (a = f + 1),
      (f = e.indexOf(
        `
`,
        a
      )));
  return (
    u.push(B8r(e.slice(a), o, s)),
    u.join(`
`)
  );
}
function B8r(e, n, r) {
  let s = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${n}${r}${s}`;
}
function flr(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function B(e, n) {
  if (e instanceof Error && !(e instanceof h_) && e !== n)
    try {
      if (e.cause === void 0)
        ((e.message += ` (atomic write failed first: ${d(n)})`),
          Object.defineProperty(e, "cause", {
            value: n,
            writable: !0,
            configurable: !0,
            enumerable: !1
          }));
    } catch {}
  throw e;
}
function ae(e) {
  return e === void 0 ? void 0 : (e & 511) | 128;
}
function xZo(e, n, r = { encoding: "utf-8" }) {
  let s = ie(),
    u = r.allowSymlink ? 0 : w.O_NOFOLLOW,
    o = e,
    a,
    f = !1;
  if (r.allowSymlink)
    try {
      let c = s.readlinkSync(e);
      ((o = K(c) ? c : H(Po(s, b(e)).resolvedPath, c)), t(`Writing through symlink: ${e} -> ${o}`));
    } catch {}
  else {
    if (r.checkParentDir)
      try {
        k(_(b(e), w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW));
      } catch (c) {
        let S = E(c);
        if (S === "ELOOP" || S === "ENOTDIR")
          throw new h_(`Refusing to write into symlinked directory: ${b(e)}`);
      }
    try {
      let c = s.lstatSync(e);
      if (c.isSymbolicLink())
        throw new h_(
          `Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`
        );
      ((a = c.mode), (f = !0));
    } catch (c) {
      if (!G(c)) throw c;
    }
  }
  let y = `.tmp.${process.pid}.${J(6).toString("hex")}`,
    g = N8r(r.stagingDir, o, y, r.allowSymlink ?? !1),
    L = !1;
  if (r.allowSymlink && !f)
    try {
      ((a = s.statSync(o).mode), (f = !0));
    } catch (c) {
      if (!G(c)) throw c;
    }
  if (f && a !== void 0) t(`Preserving file permissions: ${a.toString(8)}`);
  else if (r.mode !== void 0)
    ((a = r.mode), t(`Setting permissions for new file: ${a.toString(8)}`));
  try {
    t(`Writing to temp file: ${g}`);
    let c = _(g, w.O_WRONLY | w.O_CREAT | w.O_EXCL | u, f ? ae(a) : r.mode),
      S = !1,
      N;
    try {
      if (b(g) !== b(o)) U4t(r.stagingDir);
      if ((V(c, n, { encoding: r.encoding }), f && a !== void 0))
        try {
          (ce(c, a), t("Applied original permissions to temp file"));
        } catch (h) {
          if (!bSe(h)) throw h;
          t(`fchmod unsupported on this filesystem: ${h}`);
        }
      try {
        X(c);
      } catch (h) {
        if (!bSe(h)) throw h;
        t(`fsync unsupported on this filesystem: ${h}`);
      }
      L = !0;
    } catch (h) {
      ((S = !0), (N = h));
    }
    try {
      k(c);
    } catch (h) {
      if (!S) throw h;
      t(`closeSync also failed after temp write error: ${h}`, { level: "error" });
    }
    if (S) throw N;
    if ((t(`Temp file written successfully, size: ${n.length} bytes`), b(g) !== b(o)))
      U4t(r.stagingDir);
    (t(`Renaming ${g} to ${o}`),
      kkn(g, o, (h, x) => s.renameSync(h, x)),
      t(`File ${o} written atomically`));
  } catch (c) {
    t(`Failed to write file atomically: ${c}`, { level: "error" });
    let S = E(c);
    if ((L && S !== void 0 && iP.has(S)) || (!L && f && S === "EACCES")) {
      let { flags: x, flagsIfMissing: T } = re(u),
        C = !f && r.mode !== void 0 ? r.mode : void 0,
        F;
      try {
        try {
          F = _(o, x, C);
        } catch (p) {
          if (T === void 0 || !G(p)) throw p;
          (yfi(o), (F = _(o, T, C)));
        }
      } catch (p) {
        try {
          s.unlinkSync(g);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        if (E(p) === "ELOOP") throw new h_(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw c;
      }
      try {
        let p = D(F);
        if (p.nlink > 1 && (r.refuseHardLinkedInPlace ?? blr())) throw new ulr(o, p.nlink);
        if (p.isFile()) le(F, 0);
      } catch (p) {
        try {
          k(F);
        } catch {}
        try {
          s.unlinkSync(g);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        B(p, c);
      }
      try {
        V(F, n, { encoding: r.encoding });
        try {
          X(F);
        } catch (p) {
          if (!bSe(p)) throw p;
          t(`fsync unsupported on this filesystem: ${p}`);
        }
        k(F);
        try {
          s.unlinkSync(g);
        } catch (p) {
          t(`Failed to clean up temp file: ${p}`);
        }
        t(`File ${o} written via in-place fallback`);
        return;
      } catch (p) {
        try {
          k(F);
        } catch {}
        try {
          s.unlinkSync(o);
        } catch {}
        if (L)
          throw new R(
            `Write to ${o} failed (${E(p) ?? p}) after the target was truncated. The new content was preserved at ${g}.`,
            "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path"
          );
        B(p, c);
      }
    }
    try {
      s.unlinkSync(g);
    } catch (x) {
      t(`Failed to clean up temp file: ${x}`);
    }
    throw c;
  }
}
async function xR(e, n, r = { encoding: "utf-8" }) {
  let s = ie(),
    u = r.allowSymlink ? 0 : w.O_NOFOLLOW,
    o = e,
    a,
    f = !1;
  if (r.allowSymlink)
    try {
      let c = await ue(e);
      ((o = K(c) ? c : H(await q(b(e)), c)), t(`Writing through symlink: ${e} -> ${o}`));
    } catch {}
  else {
    if (r.checkParentDir)
      try {
        await (await A(b(e), w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW)).close();
      } catch (c) {
        let S = E(c);
        if (S === "ELOOP" || S === "ENOTDIR")
          throw new h_(`Refusing to write into symlinked directory: ${b(e)}`);
      }
    try {
      let c = await Q(e);
      if (c.isSymbolicLink())
        throw new h_(
          `Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`
        );
      ((a = c.mode), (f = !0));
    } catch (c) {
      if (!G(c)) throw c;
    }
  }
  let y = `.tmp.${process.pid}.${J(6).toString("hex")}`,
    g = N8r(r.stagingDir, o, y, r.allowSymlink ?? !1),
    L = !1;
  if (r.allowSymlink && !f)
    try {
      ((a = (await s.stat(o)).mode), (f = !0));
    } catch (c) {
      if (!G(c)) throw c;
    }
  if (f && a !== void 0) t(`Preserving file permissions: ${a.toString(8)}`);
  else if (r.mode !== void 0)
    ((a = r.mode), t(`Setting permissions for new file: ${a.toString(8)}`));
  try {
    t(`Writing to temp file: ${g}`);
    let c = await A(g, w.O_WRONLY | w.O_CREAT | w.O_EXCL | u, f ? ae(a) : r.mode),
      S = !1,
      N;
    try {
      if (b(g) !== b(o)) U4t(r.stagingDir);
      if ((await c.writeFile(n, { encoding: r.encoding }), f && a !== void 0))
        try {
          (await c.chmod(a), t("Applied original permissions to temp file"));
        } catch (h) {
          if (!bSe(h)) throw h;
          t(`fchmod unsupported on this filesystem: ${h}`);
        }
      try {
        await c.sync();
      } catch (h) {
        if (!bSe(h)) throw h;
        t(`fsync unsupported on this filesystem: ${h}`);
      }
      L = !0;
    } catch (h) {
      ((S = !0), (N = h));
    }
    try {
      await c.close();
    } catch (h) {
      if (!S) throw h;
      t(`close also failed after temp write error: ${h}`, { level: "error" });
    }
    if (S) throw N;
    if ((t(`Temp file written successfully, size: ${n.length} bytes`), b(g) !== b(o)))
      U4t(r.stagingDir);
    (t(`Renaming ${g} to ${o}`),
      await Os(g, o, (h, x) => s.rename(h, x)),
      t(`File ${o} written atomically`));
  } catch (c) {
    t(`Failed to write file atomically: ${c}`, { level: "error" });
    let S = E(c);
    if ((L && S !== void 0 && iP.has(S)) || (!L && f && S === "EACCES")) {
      let { flags: x, flagsIfMissing: T } = re(u),
        C = !f && r.mode !== void 0 ? r.mode : void 0,
        F;
      try {
        try {
          F = await A(o, x, C);
        } catch (p) {
          if (T === void 0 || !G(p)) throw p;
          (await lW(o), (F = await A(o, T, C)));
        }
      } catch (p) {
        try {
          await s.unlink(g);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        if (E(p) === "ELOOP") throw new h_(`Refusing to write through symlink: ${o} (O_NOFOLLOW)`);
        throw c;
      }
      try {
        let p = await F.stat();
        if (p.nlink > 1 && (r.refuseHardLinkedInPlace ?? blr())) throw new ulr(o, p.nlink);
        if (p.isFile()) await F.truncate(0);
      } catch (p) {
        await F.close().catch(() => {});
        try {
          await s.unlink(g);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        B(p, c);
      }
      try {
        await F.writeFile(n, { encoding: r.encoding });
        try {
          await F.sync();
        } catch (p) {
          if (!bSe(p)) throw p;
          t(`fsync unsupported on this filesystem: ${p}`);
        }
        await F.close();
        try {
          await s.unlink(g);
        } catch (p) {
          t(`Failed to clean up temp file: ${p}`);
        }
        t(`File ${o} written via in-place fallback`);
        return;
      } catch (p) {
        try {
          await F.close();
        } catch {}
        try {
          await s.unlink(o);
        } catch {}
        if (L)
          throw new R(
            `Write to ${o} failed (${E(p) ?? p}) after the target was truncated. The new content was preserved at ${g}.`,
            "writeFileAndFlush: in-place fallback write failed; content preserved at temp path"
          );
        B(p, c);
      }
    }
    try {
      await s.unlink(g);
    } catch (x) {
      t(`Failed to clean up temp file: ${x}`);
    }
    throw c;
  }
}
var Ee = new Set(["Public", "Default", "Default User", "All Users"]);
async function afi() {
  let e = O(),
    n = te(),
    r = ie();
  if (e === "macos") return v(n, "Desktop");
  if (e === "windows") {
    let u = i.USERPROFILE ? i.USERPROFILE.replaceAll("\\", "/") : null;
    if (u) {
      let a = `/mnt/c${u.replace(/^[A-Z]:/, "")}/Desktop`;
      if (await Fu(a)) return a;
    }
    try {
      let a = await r.readdir("/mnt/c/Users");
      for (let f of a) {
        if (Ee.has(f.name)) continue;
        let y = v("/mnt/c/Users", f.name, "Desktop");
        if (await Fu(y)) return y;
      }
    } catch (o) {
      t(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${o}`, { level: "error" });
    }
  }
  let s = v(n, "Desktop");
  if (await Fu(s)) return s;
  return n;
}
async function plr(e, n = NAt) {
  try {
    return (await ie().stat(e)).size <= n;
  } catch {
    return !1;
  }
}
function nu(e) {
  let n = O() === "windows",
    r = me(e),
    s = n ? /[\\/]+$/ : /\/+$/,
    u = r.length > pe(r).root.length ? r.replace(s, "") : r;
  return n ? u.replaceAll("/", "\\").toLowerCase() : u;
}
function X$(e, n) {
  return nu(e) === nu(n);
}
export {
  nfi,
  U4t,
  N8r,
  h_,
  ulr,
  tee,
  HAt,
  $8r,
  LAt,
  Ufe,
  B4t,
  rfi,
  Fu,
  Y$,
  NAt,
  Ost,
  ofi,
  F8r,
  sfi,
  ck,
  RZo,
  Mst,
  Dst,
  f2,
  Sxe,
  Hst,
  ifi,
  wxe,
  U8r,
  Zo,
  j4t,
  N$e,
  p2,
  Bfe,
  Lst,
  B8r,
  flr,
  xZo,
  xR,
  afi,
  plr,
  nu,
  X$
};

//# sourceMappingURL=chunk-13nwb0xt.js.map
