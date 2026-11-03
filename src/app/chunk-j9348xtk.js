// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { jn, Se, ejt, tjt, H_, P8, Dg, NUo, jBr, Bfn } from "./chunk-bbw420pv.js";
import { mKo, Ywt, Dtt, wp, f2r, gKo } from "./chunk-sag2er1m.js";
import { sr } from "./chunk-fs43t96t.js";
import * as w from "fs/promises";
import * as Z from "fs";
import * as g from "path";
import * as ke from "child_process";
import * as rt from "crypto";
import * as it from "readline";
function R(r) {
  if (r.inputSchema.type !== "object")
    throw Error(
      `JSON schema for tool "${r.name}" must be an object, but got ${r.inputSchema.type}`
    );
  return {
    type: "custom",
    name: r.name,
    input_schema: r.inputSchema,
    description: r.description,
    run: r.run,
    parse: (e) => e,
    ...(r.close ? { close: r.close } : {})
  };
}
var T = Dtt.promises,
  z = 448,
  dt = 384;
function te(r, e) {
  let t = wp.relative(r, e);
  return t === "" || (!t.startsWith(".." + wp.sep) && t !== ".." && !wp.isAbsolute(t));
}
async function ue(r, e) {
  for (let t of r) if (te(await q(wp.resolve(t)), e)) return t;
  return;
}
var ht = 40;
function G(r) {
  let e = r?.code;
  return typeof e === "string" ? e : void 0;
}
async function q(r) {
  let e = [],
    t = r,
    n = 0;
  for (;;) {
    let i;
    try {
      i = await T.realpath(t);
    } catch (o) {
      let s;
      try {
        s = (await T.lstat(t)).isSymbolicLink();
      } catch (a) {
        let l = G(a);
        if (l !== "ENOENT" && l !== "ENOTDIR") throw a;
        let f = wp.dirname(t);
        if (f === t) throw a;
        (e.push(wp.basename(t)), (t = f));
        continue;
      }
      if (!s) throw o;
      if (++n > ht)
        throw Object.assign(Error("too many levels of symbolic links"), { code: "ELOOP" });
      t = wp.resolve(wp.dirname(t), await T.readlink(t));
      continue;
    }
    return e.length ? wp.join(i, ...e.reverse()) : i;
  }
}
async function Ie(r, e, t) {
  let n = t?.allowedRoots ?? [],
    i = await q(wp.resolve(r)),
    o;
  try {
    o = await q(wp.resolve(i, e));
  } catch (a) {
    throw new Dg(P(a, `path ${JSON.stringify(e)}`));
  }
  if (te(i, o) || (await ue(n, o)) !== void 0) return o;
  let s = n.length
    ? "the session's working directory and its other permitted directories"
    : "the session's working directory";
  throw new Dg(`path ${JSON.stringify(e)} is outside ${s}`);
}
async function pe(r, e) {
  let t = wp.dirname(r),
    n = wp.join(t, `.tmp-${process.pid}-${Ywt.randomUUID()}`),
    i = await T.stat(r).then(
      (s) => s.mode & 511,
      () => {
        return;
      }
    ),
    o;
  try {
    if (((o = await T.open(n, "wx", dt)), i !== void 0)) await o.chmod(i);
    (await o.writeFile(e, "utf-8"),
      await o.sync(),
      await o.close(),
      (o = void 0),
      await T.rename(n, r));
  } catch (s) {
    if (o) await o.close().catch(() => {});
    throw (await T.unlink(n).catch(() => {}), s);
  }
}
function P(r, e) {
  let t = G(r);
  switch (t) {
    case "ENOENT":
      return `${e}: no such file or directory`;
    case "EACCES":
    case "EPERM":
      return `${e}: permission denied`;
    case "ENOTDIR":
      return `${e}: not a directory`;
    case "EISDIR":
      return `${e}: is a directory`;
    case "ELOOP":
      return `${e}: too many levels of symbolic links`;
    case "ENAMETOOLONG":
      return `${e}: file name too long`;
    case "ENOSPC":
      return `${e}: no space left on device`;
    case "EMFILE":
    case "ENFILE":
      return `${e}: too many open files`;
    default:
      return `${e}: ${t !== void 0 ? `i/o error (${t})` : "i/o error"}`;
  }
}
var E = Dtt.promises,
  mt = gKo.promisify(mKo.execFile);
async function ut(r) {
  let { client: e, sessionId: t } = r;
  if (!e) return async () => {};
  let n = H_(e),
    i = r.session;
  if (!i) {
    if (t === void 0) return async () => {};
    (n.warn(
      "AgentToolContext.sessionId is deprecated and costs an extra session fetch; fetch the session once and set `session` instead",
      { component: "agent-tool-context" }
    ),
      (i = await e.beta.sessions.retrieve(t)));
  }
  let o = wp.resolve(r.workdir, "skills"),
    s = [];
  for (let a of i.agent.skills)
    try {
      let l = await e.beta.skills.versions.retrieve(a.version, { skill_id: a.skill_id }),
        f = wp.basename(l.name.trim());
      if (f === "" || f === "." || f === "..") f = a.skill_id;
      let c = wp.resolve(o, f);
      if (c !== o && !c.startsWith(o + wp.sep)) {
        n.warn("skill name escapes the skills dir; skipping", {
          component: "agent-tool-context",
          name: l.name
        });
        continue;
      }
      let h = await e.beta.skills.versions.download(l.id, { skill_id: a.skill_id });
      (await E.rm(c, { recursive: !0, force: !0 }),
        await E.mkdir(c, { recursive: !0, mode: z }),
        s.push(c),
        await Te(h, c),
        n.info("downloaded skill", {
          component: "agent-tool-context",
          skill_id: a.skill_id,
          version: l.id,
          dest: c
        }));
    } catch (l) {
      n.warn("failed to download skill", {
        component: "agent-tool-context",
        skill_id: a.skill_id,
        error: String(l)
      });
    }
  return async () => {
    for (let a of s)
      await E.rm(a, { recursive: !0, force: !0 }).catch((l) => {
        n.warn("failed to clean up skill", {
          component: "agent-tool-context",
          dest: a,
          error: String(l)
        });
      });
  };
}
function pt(r) {
  for (let e of r) {
    let t = e.trim();
    if (!t) continue;
    if (wp.isAbsolute(t) || t.split(/[\\/]/).includes(".."))
      throw new sr(`refusing to extract unsafe archive member: ${t}`);
  }
}
var we = "skill archive listing is inconsistent; refusing to extract",
  yt = { unzip: new Set(["-", "d", "?"]), tar: new Set(["-", "d", "C"]) };
function Ne(r) {
  let e = r.split(`
`);
  if (e[e.length - 1] === "") e.pop();
  return e;
}
function wt(r, e) {
  return /^[\x20-\x7E]+$/.test(e) && !/[\\^#]/.test(e) && !(r === "unzip" && e.startsWith("-"));
}
function _t(r, e, t) {
  let n = Ne(e),
    i = Ne(t);
  if (n.length !== i.length) throw new sr(we);
  let o = [],
    s = [];
  return (
    n.forEach((a, l) => {
      if (yt[r].has(i[l].charAt(0))) {
        o.push(a);
        return;
      }
      if (!wt(r, a))
        throw new sr(
          `refusing to extract archive: cannot safely exclude member ${JSON.stringify(a)}`
        );
      s.push(a);
    }),
    { plain: o, special: s }
  );
}
async function Re(r) {
  for (let e of await E.readdir(r, { withFileTypes: !0 }))
    if (e.isDirectory()) await Re(wp.join(r, e.name));
    else if (!e.isFile()) throw new sr(we);
}
async function ye(r, e) {
  try {
    let { stdout: t } = await mt(r, e);
    return t;
  } catch (t) {
    if (G(t) === "ENOENT")
      throw new sr(`skill extraction requires the \`${r}\` command, but it was not found on PATH`);
    throw t;
  }
}
function gt(r) {
  let e,
    t = !1;
  for (let n of r) {
    let i = n
      .trim()
      .split("/")
      .filter((s) => s !== "" && s !== ".");
    if (i.length === 0) continue;
    let o = i[0];
    if (e === void 0) e = o;
    else if (o !== e) return "";
    if (i.length > 1) t = !0;
  }
  return e !== void 0 && t ? e : "";
}
async function Te(r, e) {
  let t = wp.join(e, `.skill-archive-${process.pid}-${Date.now()}`);
  if (!r.body) throw new sr("skill download response had no body");
  await f2r.promises.pipeline(f2r.Readable.fromWeb(r.body), Dtt.createWriteStream(t));
  let n = wp.join(wp.dirname(e), `.skill-stage-${process.pid}-${Date.now()}`),
    i = wp.join(wp.dirname(e), `.skill-exclude-${process.pid}-${Date.now()}`);
  try {
    let o = await Et(t, 4),
      s = o.length >= 4 && o[0] === 80 && o[1] === 75 && o[2] === 3 && o[3] === 4,
      a = s ? "unzip" : "tar",
      l = await ye(a, s ? ["-Z1", t] : ["-tf", t]),
      f = await ye(a, s ? ["-Z", "--h", "--t", t] : ["-tvf", t]),
      { plain: c, special: h } = _t(a, l, f);
    pt([...c, ...h]);
    let y = gt(c);
    if ((await E.mkdir(n, { recursive: !0, mode: z }), c.length > 0))
      await ye(a, await St(a, t, n, h, i));
    await Re(n);
    let O = y ? wp.join(n, y) : n,
      v = await E.readdir(O).catch((M) => {
        throw G(M) === "ENOENT" ? new sr(we) : M;
      });
    for (let M of v) await E.rename(wp.join(O, M), wp.join(e, M));
  } finally {
    (await E.rm(t, { force: !0 }),
      await E.rm(i, { force: !0 }),
      await E.rm(n, { recursive: !0, force: !0 }));
  }
}
async function St(r, e, t, n, i) {
  let o = n.map((s) => s.replace(/[*?[\\]/g, "\\$&"));
  if (r === "unzip") return ["-oq", e, "-d", t, ...(o.length > 0 ? ["-x", ...o] : [])];
  if (o.length === 0) return ["-xf", e, "-C", t];
  return (
    await E.writeFile(
      i,
      o.join(`
`) +
        `
`,
      { flag: "wx", mode: 384 }
    ),
    ["-xf", e, "-C", t, "-X", i]
  );
}
async function Et(r, e) {
  let t = await E.open(r, "r");
  try {
    let n = Buffer.alloc(e),
      { bytesRead: i } = await t.read(n, 0, e, 0);
    return n.subarray(0, i);
  } finally {
    await t.close();
  }
}
var p = Dtt.promises,
  W = Dtt.constants,
  xe = 448,
  bt = 384,
  Ot = 448,
  ge = W.O_NOFOLLOW ?? 0,
  Mt = W.O_NONBLOCK ?? 0,
  m = (() => {
    class r extends Error {
      constructor(e, t) {
        super(`path ${JSON.stringify(t)} ${e}`);
        ((this.name = "FileStoreError"), (this.reason = e), (this.relPath = t));
      }
    }
    return (
      (r.ESCAPES_ROOT = "escapes the store root"),
      (r.IS_A_SYMLINK = "is a symlink"),
      (r.NOT_A_FILE = "is not a regular file"),
      (r.NOT_A_DIRECTORY = "is not a directory"),
      (r.NOT_UTF8 = "is not valid utf-8"),
      (r.MOVE_DESTINATION_EXISTS = "already exists"),
      r
    );
  })();
function Ee(r) {
  return r.startsWith("/") && !r.split("/").includes("..");
}
var _e = (() => {
  class r {
    constructor(e, t, n = !1) {
      ((this.hashes = new Map()),
        (this.rootPath = e),
        (this.removedOnDispose = t),
        (this.decoder = n ? new TextDecoder("utf-8", { fatal: !0 }) : void 0));
    }
    static async open(e, t) {
      if (!vt()) throw Error("FileStore requires O_NOFOLLOW support on this platform");
      let n = !1;
      try {
        await p.lstat(e);
      } catch (i) {
        if (i.code !== "ENOENT") throw i;
        n = !0;
      }
      return new r(wp.resolve(e), n, t?.utf8 ?? !1);
    }
    async createRoot() {
      await kt(this.rootPath);
    }
    root() {
      return { path: this.rootPath, removedOnDispose: this.removedOnDispose };
    }
    async dispose() {
      if (!this.removedOnDispose) return;
      await p.rm(this.rootPath, { recursive: !0, force: !0 });
    }
    async put(e, t, n) {
      let i = e.replace(/\\/g, "/");
      if (i.endsWith("/") || i.endsWith("/.") || i === "" || i === ".")
        throw new m(m.NOT_A_FILE, e);
      let o = this.resolveUnderRoot(e),
        s = typeof t === "string" ? ejt(t) : t;
      (this.requireUtf8(e, s),
        await Le(this.rootPath, wp.dirname(o)),
        await It(o, s, n?.executable ?? !1));
    }
    async get(e) {
      let t = this.resolveUnderRoot(e),
        n;
      try {
        n = await De(e, t);
      } catch (o) {
        if (o.code === "ENOENT") return null;
        throw o;
      }
      let i;
      try {
        let o = await n.readFile();
        i = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
      } finally {
        await n.close();
      }
      return (this.requireUtf8(e, i), i);
    }
    async ls(e = "/") {
      let t = this.resolveUnderRoot(e);
      return new Set((await $e(this.rootPath, e, t)).map(([n]) => n));
    }
    async findSymlinks(e = "/") {
      let t = this.resolveUnderRoot(e);
      return Rt(this.rootPath, e, t);
    }
    async hashtree(e = "/") {
      let t = this.resolveUnderRoot(e),
        n = re.nowNs(),
        i = Object.create(null);
      for (let [o, s] of await $e(this.rootPath, e, t)) {
        let a = await this.hashViaCache(o, s, n);
        if (a !== null) i[o] = a;
      }
      return i;
    }
    async hashFile(e) {
      let t = this.resolveUnderRoot(e),
        n;
      try {
        n = await p.lstat(t, { bigint: !0 });
      } catch (o) {
        if (o.code === "ENOENT") return null;
        throw o;
      }
      if (n.isSymbolicLink()) throw new m(m.IS_A_SYMLINK, e);
      if (!n.isFile()) throw new m(m.NOT_A_FILE, e);
      let i = wp.relative(this.rootPath, t).split(wp.sep).join("/");
      return this.hashViaCache(i, t, re.nowNs());
    }
    async move(e, t) {
      let n = this.resolveUnderRoot(e),
        i = this.resolveUnderRoot(t);
      if (n === this.rootPath || i === this.rootPath) return;
      if (
        await p.stat(i).then(
          () => !0,
          () => !1
        )
      )
        throw new m(m.MOVE_DESTINATION_EXISTS, t);
      (await Le(this.rootPath, wp.dirname(i)), await p.rename(n, i));
    }
    async remove(e) {
      let t = this.resolveUnderRoot(e);
      if (t === this.rootPath) return;
      let n;
      try {
        n = await p.lstat(t, { bigint: !0 });
      } catch (i) {
        if (i.code === "ENOENT") return;
        throw i;
      }
      if (n.isDirectory()) await p.rm(t, { recursive: !0, force: !0 });
      else
        try {
          await p.unlink(t);
        } catch (i) {
          if (i.code !== "ENOENT") throw i;
        }
    }
    resolveUnderRoot(e) {
      let t = e.replace(/\\/g, "/").replace(/^\/+/, ""),
        n = t.split("/").filter((i) => i !== "" && i !== ".");
      if (wp.posix.isAbsolute(t) || n.includes("..")) throw new m(m.ESCAPES_ROOT, e);
      return n.length === 0 ? this.rootPath : wp.join(this.rootPath, ...n);
    }
    requireUtf8(e, t) {
      if (!this.decoder) return;
      try {
        this.decoder.decode(t);
      } catch {
        throw new m(m.NOT_UTF8, e);
      }
    }
    async hashViaCache(e, t, n) {
      let i;
      try {
        i = await p.lstat(t, { bigint: !0 });
      } catch (a) {
        if (a.code === "ENOENT") return null;
        throw a;
      }
      if (!i.isFile()) return null;
      let o = this.hashes.get(e),
        s;
      if (o !== void 0 && Lt(o, i)) s = o.sha;
      else
        try {
          s = await re.hashFile(t);
        } catch (a) {
          let l = a.code;
          if (l === "ENOENT" || a instanceof m) return null;
          if (l === "ELOOP" || l === "EMLINK") return null;
          throw a;
        }
      if ($t(i, n))
        this.hashes.set(e, { mtimeNs: i.mtimeNs, ctimeNs: i.ctimeNs, size: i.size, sha: s });
      return s;
    }
  }
  return ((r.isPathLegal = Ee), r);
})();
function vt() {
  return ge !== 0;
}
async function kt(r) {
  let e = [],
    t = r;
  for (;;) {
    try {
      await p.stat(t);
      break;
    } catch (i) {
      let o = i.code;
      if (o !== "ENOENT" && o !== "ENOTDIR" && o !== "ELOOP") throw i;
    }
    e.push(t);
    let n = wp.dirname(t);
    if (n === t) break;
    t = n;
  }
  for (let n of e.reverse())
    try {
      await p.mkdir(n, { mode: xe });
    } catch (i) {
      if (i.code !== "EEXIST") throw i;
    }
}
async function Le(r, e) {
  let t = wp.relative(r, e);
  if (t === "") return;
  let n = r;
  for (let i of t.split(wp.sep)) {
    n = wp.join(n, i);
    try {
      await p.mkdir(n, { mode: xe });
    } catch (o) {
      if (o.code !== "EEXIST") throw o;
    }
  }
}
async function It(r, e, t) {
  let n = t ? Ot : bt,
    i = wp.join(wp.dirname(r), `.fs-${Ywt.randomBytes(8).toString("hex")}.tmp`),
    o;
  try {
    ((o = await p.open(i, W.O_WRONLY | W.O_CREAT | W.O_EXCL | ge, n)),
      await o.writeFile(e),
      await o.close(),
      (o = void 0),
      await p.rename(i, r));
  } catch (s) {
    if (o) await o.close().catch(() => {});
    throw (await p.unlink(i).catch(() => {}), s);
  }
}
async function De(r, e) {
  let t;
  try {
    t = await p.open(e, W.O_RDONLY | ge | Mt);
  } catch (n) {
    let i = n.code;
    if (i === "ELOOP" || i === "EMLINK") throw new m(m.IS_A_SYMLINK, r);
    throw n;
  }
  try {
    if (!(await t.stat()).isFile()) throw new m(m.NOT_A_FILE, r);
  } catch (n) {
    throw (await t.close().catch(() => {}), n);
  }
  return t;
}
async function Nt(r) {
  let e = Ywt.createHash("sha256"),
    t = await De(wp.basename(r), r),
    n = new Uint8Array(1048576);
  try {
    for (;;) {
      let { bytesRead: i } = await t.read(n, 0, n.length);
      if (i === 0) break;
      e.update(n.subarray(0, i));
    }
  } finally {
    await t.close();
  }
  return e.digest("hex");
}
async function $e(r, e, t) {
  if (!(await Tt(e, t))) return [];
  let n = [];
  return (
    await Ce(t, (i, o) => {
      if (o.isFile()) n.push([wp.relative(r, i).split(wp.sep).join("/"), i]);
    }),
    n.sort(),
    n
  );
}
async function Rt(r, e, t) {
  let n = (s) => wp.relative(r, s).split(wp.sep).join("/"),
    i;
  try {
    i = await p.lstat(t, { bigint: !0 });
  } catch (s) {
    let a = s.code;
    if (a === "ENOENT" || a === "ENOTDIR") return new Set();
    throw s;
  }
  if (i.isSymbolicLink()) return new Set([n(t)]);
  if (!i.isDirectory()) throw new m(m.NOT_A_DIRECTORY, e);
  let o = new Set();
  return (
    await Ce(t, (s, a) => {
      if (a.isSymbolicLink()) o.add(n(s));
    }),
    o
  );
}
async function Tt(r, e) {
  let t;
  try {
    t = await p.lstat(e, { bigint: !0 });
  } catch (n) {
    let i = n.code;
    if (i === "ENOENT" || i === "ENOTDIR") return !1;
    throw n;
  }
  if (!t.isDirectory()) throw new m(m.NOT_A_DIRECTORY, r);
  return !0;
}
async function Ce(r, e) {
  let t = [r];
  while (t.length) {
    let n = t.pop(),
      i;
    try {
      i = await p.readdir(n, { withFileTypes: !0 });
    } catch (o) {
      if (o.code === "ENOENT") continue;
      throw o;
    }
    for (let o of i) {
      let s = wp.join(n, o.name);
      if ((e(s, o), o.isDirectory() && !o.isSymbolicLink())) t.push(s);
    }
  }
}
function Lt(r, e) {
  return e.mtimeNs === r.mtimeNs && e.ctimeNs === r.ctimeNs && e.size === r.size;
}
function $t(r, e) {
  return (r.mtimeNs > r.ctimeNs ? r.mtimeNs : r.ctimeNs) < e - re.timestampTrustMarginNs;
}
var At = 2000000000n,
  re = { hashFile: Nt, timestampTrustMarginNs: At, nowNs: () => BigInt(Date.now()) * 1000000n },
  Fe = _e,
  Ae = Symbol.asyncDispose;
if (Ae)
  Object.defineProperty(_e.prototype, Ae, {
    value: _e.prototype.dispose,
    configurable: !0,
    writable: !0
  });
var u,
  I,
  ae,
  H,
  ce,
  d,
  U,
  oe,
  k,
  ze,
  se,
  Ge,
  He,
  be,
  Me,
  Pe,
  We,
  Oe,
  Ue,
  je,
  ie,
  ne,
  Be,
  Ye,
  xt = 30000,
  j = ".anthropic-memory-store",
  Ke = 1;
function qe(r) {
  return Ywt.createHash("sha256")
    .update(
      `version ${Ke}
${r}`,
      "utf-8"
    )
    .digest("hex");
}
var Dt = 30000,
  Ct = 100,
  Ft = 20,
  Pt = 16,
  Wt = 32,
  Ut = 8,
  jt = 50;
class L extends sr {
  constructor(r, e) {
    super(r);
    if (((this.name = "SessionMemoryError"), e !== void 0)) this.cause = e;
  }
}
class Ve {
  constructor(r, e, t) {
    ((this.mode = r),
      (this.cap = e),
      (this.waiveWindow = t),
      (this.attempted = 0),
      (this.capped = 0),
      (this.suppressed = 0));
  }
  takeSlot() {
    if (this.attempted >= this.cap) return (this.capped++, !1);
    return (this.attempted++, !0);
  }
}
class Xe {
  constructor(r, e) {
    (u.add(this),
      I.set(this, void 0),
      ae.set(this, void 0),
      H.set(this, void 0),
      ce.set(this, void 0),
      d.set(this, void 0),
      U.set(this, void 0),
      oe.set(this, !1),
      k.set(this, []),
      jn(this, I, r, "f"),
      jn(this, ae, e.workdir, "f"),
      jn(this, H, e.syncIntervalMs ?? NUo, "f"),
      jBr(Se(this, H, "f"), "syncIntervalMs"),
      jn(this, ce, e.syncDeletions ?? "enabled", "f"),
      jn(this, d, H_(r), "f"),
      jn(this, U, Date.now(), "f"));
  }
  get roots() {
    return Se(this, k, "f").map((r) => r.files.root().path);
  }
  get readOnlyRoots() {
    return Se(this, k, "f")
      .filter((r) => r.readOnly)
      .map((r) => r.files.root().path);
  }
  async download(r) {
    for (let e of r.resources) {
      if (e.type !== "memory_store") continue;
      let t = Se(this, u, "m", ze).call(this, e),
        n;
      try {
        if (
          ((n = {
            memoryStoreId: e.memory_store_id,
            files: await Fe.open(t, { utf8: !0 }),
            readOnly: e.access === "read_only",
            baseline: new Map(),
            refusedShas: new Map(),
            pendingDeletes: new Map()
          }),
          !n.files.root().removedOnDispose)
        )
          throw new L(
            `something already exists at the memory store's path: ${t} (memory_store_id=${e.memory_store_id}); it must not exist when the session starts`
          );
        try {
          await n.files.createRoot();
        } catch (i) {
          if (!B(i)) throw i;
          throw new L(
            `cannot create the memory store's folder: ${t} (memory_store_id=${e.memory_store_id}): ${i}; the worker host must make this mount path writable`,
            i
          );
        }
        (await Se(this, u, "m", Me).call(this, n),
          Se(this, d, "f").info("downloaded memories", {
            count: n.baseline.size,
            memory_store_id: n.memoryStoreId,
            dest: n.files.root().path
          }),
          Se(this, k, "f").push(n));
      } catch (i) {
        if (n) await n.files.dispose().catch(() => {});
        if (i instanceof L) throw i;
        throw new L(
          `failed to download memory store memory_store_id=${e.memory_store_id}: ${i}`,
          i
        );
      }
    }
    jn(this, U, Date.now(), "f");
  }
  async finish() {
    if (Se(this, oe, "f"))
      throw new sr("finish() was already called: it is the session's last sync and runs once");
    (jn(this, oe, !0, "f"), await this.syncAll(!0));
  }
  async syncAll(r) {
    (await Promise.all(Se(this, k, "f").map((e) => Se(this, u, "m", Ge).call(this, e, r))),
      jn(this, U, Date.now(), "f"));
  }
  async syncIfDue() {
    if (Date.now() - Se(this, U, "f") < Se(this, H, "f")) return;
    await this.syncAll(!1);
  }
  async flushWrites(r) {
    await Promise.all(Se(this, k, "f").map((e) => Se(this, u, "m", He).call(this, e, r)));
  }
  async dispose() {
    for (let r of Se(this, k, "f")) {
      let e = r.files.root();
      try {
        let t = await Se(this, u, "m", se).call(this, r);
        if (!t.markerOk && Object.keys(t.files).length > 0) {
          Se(this, d, "f").warn(`${t.distrustReason}; leaving the memory store folder on disk`, {
            root: e.path,
            memory_store_id: r.memoryStoreId
          });
          continue;
        }
        await r.files.dispose();
      } catch (t) {
        if (!(t instanceof m) && !B(t)) throw t;
        Se(this, d, "f").warn("failed to remove the memory store folder", {
          root: r.files.root().path,
          memory_store_id: r.memoryStoreId,
          error: String(t)
        });
        continue;
      }
      if (e.removedOnDispose)
        Se(this, d, "f").info("removed memory store dir", {
          dest: e.path,
          memory_store_id: r.memoryStoreId
        });
    }
  }
}
((I = new WeakMap()),
  (ae = new WeakMap()),
  (H = new WeakMap()),
  (ce = new WeakMap()),
  (d = new WeakMap()),
  (U = new WeakMap()),
  (oe = new WeakMap()),
  (k = new WeakMap()),
  (u = new WeakSet()),
  (ze = function (e) {
    if (e.mount_path) {
      if (!Ee(e.mount_path))
        throw new L(
          `memory store mount_path is not a clean absolute path: ${JSON.stringify(e.mount_path)} (memory_store_id=${e.memory_store_id})`
        );
      return e.mount_path;
    }
    return wp.join(Se(this, ae, "f"), "memory", e.name || e.memory_store_id);
  }),
  (se = async function (e) {
    let t = await e.files.hashtree(),
      n = t[j];
    if ((delete t[j], n === qe(e.memoryStoreId)))
      return { files: t, markerOk: !0, distrustReason: null };
    return {
      files: t,
      markerOk: !1,
      distrustReason:
        n !== void 0 ? "the marker file does not match this store" : "the marker file is gone"
    };
  }),
  (Ge = async function (e, t) {
    try {
      let n = await Se(this, u, "m", se).call(this, e),
        i = n.files;
      if (!n.markerOk) {
        if (Object.keys(i).length > 0) {
          Se(this, d, "f").warn(
            `${n.distrustReason}; leaving the memory store folder as found and not syncing`,
            { root: e.files.root().path, memory_store_id: e.memoryStoreId }
          );
          return;
        }
        await Se(this, u, "m", be).call(this, e, "the folder or its marker is gone");
        return;
      }
      if (Object.keys(i).length === 0 && e.baseline.size > 1) {
        await Se(this, u, "m", be).call(this, e, "every memory file is gone at once");
        return;
      }
      let o = new Map();
      for await (let [c, h] of Se(this, u, "m", ie).call(this, e.memoryStoreId)) o.set(c, h);
      let s = new Ve(
          Se(this, ce, "f"),
          Math.max(Ut, Math.min(jt, Math.floor(e.baseline.size / 4))),
          t
        ),
        a = [],
        l = new Map(),
        f = [...new Set([...o.keys(), ...Object.keys(i), ...e.baseline.keys()])].sort();
      for (let c of f) {
        let h = o.get(c),
          y = i[c],
          O = e.baseline.get(c),
          v;
        if (y === void 0 && O !== void 0 && h !== void 0 && h.content_sha256 === O && !e.readOnly)
          v = await Se(this, u, "m", Be).call(this, e, c, h, O, s);
        else v = await Se(this, u, "m", Pe).call(this, e, c, h, y, a);
        if (v !== void 0) l.set(c, v);
      }
      if (((e.baseline = l), await Se(this, u, "m", Ue).call(this, e, a), s.suppressed > 0))
        Se(this, d, "f").debug(
          "remote deletes are disabled; locally deleted memories stay on the server",
          { count: s.suppressed, memory_store_id: e.memoryStoreId }
        );
      if (s.capped > 0)
        Se(this, d, "f").warn(
          `delete cap reached: ${s.mode === "log_only" ? "would send" : "sent"} ${s.attempted} deletes, held ${s.capped} for later syncs`,
          { memory_store_id: e.memoryStoreId }
        );
    } catch (n) {
      Se(this, d, "f").warn("memory sync failed", {
        memory_store_id: e.memoryStoreId,
        error: String(n)
      });
    }
  }),
  (He = async function (e, t) {
    let n = new Map(),
      i = new Set(),
      o = async () => {
        if (e.readOnly) return;
        let s = await Se(this, u, "m", se).call(this, e);
        if (!s.markerOk) {
          Se(this, d, "f").warn(
            `${s.distrustReason}; not uploading anything from the memory store folder`,
            { root: e.files.root().path, memory_store_id: e.memoryStoreId }
          );
          return;
        }
        for (let [f, c] of Object.entries(s.files))
          if (c !== e.baseline.get(f) && e.refusedShas.get(f) !== c) (n.set(f, c), i.add(f));
        if (n.size === 0 || t?.aborted) return;
        let a = new Map();
        for await (let [f, c] of Se(this, u, "m", ie).call(this, e.memoryStoreId)) {
          if (t?.aborted) return;
          a.set(f, c);
        }
        let l = [];
        for (let f of [...n.keys()].sort()) {
          let c = n.get(f),
            h = e.baseline.get(f),
            y = a.get(f);
          if (y !== void 0 && y.content_sha256 === c) {
            (e.baseline.set(f, y.content_sha256), i.delete(f));
            continue;
          }
          if (y !== void 0 && y.content_sha256 !== h) {
            (Se(this, d, "f").warn(
              "memory changed both locally and remotely; the flush leaves the remote version",
              { path: f, memory_store_id: e.memoryStoreId }
            ),
              i.delete(f));
            continue;
          }
          l.push([f, c, y]);
        }
        await Se(this, u, "m", je).call(this, e, l, i, t);
      };
    try {
      if ((await Bt(o(), t), t?.aborted && i.size > 0))
        Se(this, d, "f").warn(
          `memory flush cut off part-way; ${i.size} of ${n.size} changed files had not finished uploading`,
          { memory_store_id: e.memoryStoreId }
        );
    } catch (s) {
      Se(this, d, "f").warn("memory flush failed", {
        memory_store_id: e.memoryStoreId,
        error: String(s)
      });
    }
  }),
  (be = async function (e, t) {
    (Se(this, d, "f").warn(`${t}; re-downloading the memory store folder instead of syncing`, {
      root: e.files.root().path,
      memory_store_id: e.memoryStoreId
    }),
      await e.files.createRoot(),
      await Se(this, u, "m", Me).call(this, e));
  }),
  (Me = async function (e) {
    ((e.baseline = new Map()),
      e.pendingDeletes.clear(),
      await e.files.put(
        j,
        `version ${Ke}
${e.memoryStoreId}`
      ));
    for await (let [t, n] of Se(this, u, "m", ie).call(this, e.memoryStoreId, "full"))
      if (await Se(this, u, "m", Oe).call(this, e, t, n.content ?? ""))
        e.baseline.set(t, n.content_sha256);
  }),
  (Pe = async function (e, t, n, i, o) {
    let s = e.baseline.get(t);
    if (i !== void 0) e.pendingDeletes.delete(t);
    if (!n) {
      if (i === void 0) {
        e.pendingDeletes.delete(t);
        return;
      }
      if (s !== void 0) {
        if (i === s) {
          let h = await Se(this, u, "m", We).call(this, e, t, s);
          if (h === void 0) return;
          if (h === s) return s;
          i = h;
        }
        if (e.readOnly)
          Se(this, d, "f").warn(
            "memory deleted remotely but edited locally; keeping the file, which a read-only store cannot push",
            { path: t, memory_store_id: e.memoryStoreId }
          );
        else if (e.refusedShas.get(t) !== i)
          Se(this, d, "f").info(
            "memory deleted remotely but edited locally; re-creating it from the file",
            { path: t, memory_store_id: e.memoryStoreId }
          );
      }
      if (e.readOnly) return;
      if (e.refusedShas.get(t) === i) return;
      return await Se(this, u, "m", ne).call(this, e, t, i, void 0);
    }
    let a = n.content_sha256,
      l = a !== s,
      f = i !== void 0 && i !== s && i !== a,
      c = !e.readOnly && f;
    if (i === void 0 && s !== void 0) {
      if (l)
        (Se(this, d, "f").warn(
          "memory deleted locally but changed remotely; restoring the remote version",
          { path: t, memory_store_id: e.memoryStoreId }
        ),
          e.pendingDeletes.delete(t),
          o.push([t, n]));
      return s;
    }
    if (l) {
      if (i === a) return a;
      if (f)
        Se(this, d, "f").warn(
          "memory changed both locally and remotely; keeping the remote version",
          { path: t, memory_store_id: e.memoryStoreId }
        );
      return (o.push([t, n]), s);
    }
    if (c) {
      if (e.refusedShas.get(t) === i) return a;
      return (await Se(this, u, "m", ne).call(this, e, t, i, n)) ?? a;
    }
    return a;
  }),
  (We = async function (e, t, n) {
    let i;
    try {
      i = await e.files.hashFile(t);
    } catch (o) {
      if (!(o instanceof m) && !B(o)) throw o;
      return n;
    }
    if (i === null) return;
    if (i !== n) return i;
    try {
      await e.files.remove(t);
    } catch (o) {
      if (!(o instanceof m) && !B(o)) throw o;
      return (
        Se(this, d, "f").warn("failed to remove memory deleted remotely", {
          path: t,
          memory_store_id: e.memoryStoreId,
          error: String(o)
        }),
        n
      );
    }
    return;
  }),
  (Oe = async function (e, t, n) {
    try {
      await e.files.put(t, n);
    } catch (i) {
      if (!(i instanceof m) && !B(i)) throw i;
      return (
        Se(this, d, "f").warn("failed to write memory", {
          path: t,
          memory_store_id: e.memoryStoreId,
          error: String(i)
        }),
        !1
      );
    }
    return !0;
  }),
  (Ue = async function (e, t) {
    if (t.length === 0) return;
    let n = async (s, a) => {
        let l;
        try {
          l = await Se(this, I, "f").beta.memoryStores.memories.retrieve(a.id, {
            memory_store_id: e.memoryStoreId,
            view: "full"
          });
        } catch (f) {
          if (P8(f, 404)) return;
          Se(this, d, "f").warn("failed to fetch memory content", {
            path: s,
            memory_store_id: e.memoryStoreId,
            error: String(f)
          });
          return;
        }
        if (await Se(this, u, "m", Oe).call(this, e, s, l.content ?? ""))
          e.baseline.set(s, l.content_sha256);
      },
      i = t[Symbol.iterator](),
      o = async () => {
        for (let [s, a] of i) await n(s, a);
      };
    await Promise.all(Array.from({ length: Math.min(Pt, t.length) }, o));
  }),
  (je = async function (e, t, n, i) {
    let o = t[Symbol.iterator](),
      s = async () => {
        for (let [a, l, f] of o) {
          if (i?.aborted) return;
          let c = await Se(this, u, "m", ne).call(this, e, a, l, f);
          if ((n.delete(a), c !== void 0)) e.baseline.set(a, c);
        }
      };
    await Promise.all(Array.from({ length: Math.min(Wt, t.length) }, s));
  }),
  (ie = async function* (e, t = "basic") {
    let n = t === "basic" ? Ct : Ft;
    for await (let i of Se(this, I, "f").beta.memoryStores.memories.list(e, {
      view: t,
      limit: n
    })) {
      if (i.type !== "memory") continue;
      let o = i.path.replace(/^\/+/, "");
      if (o === j) {
        Se(this, d, "f").warn("the server listed the reserved marker path; skipping", {
          path: i.path,
          memory_store_id: e
        });
        continue;
      }
      yield [o, i];
    }
  }),
  (ne = async function r(e, t, n, i) {
    try {
      let o = await e.files.get(t);
      if (o === null) return;
      let s = tjt(o),
        a = i
          ? await Se(this, I, "f").beta.memoryStores.memories.update(i.id, {
              memory_store_id: e.memoryStoreId,
              content: s,
              precondition: { type: "content_sha256", content_sha256: i.content_sha256 }
            })
          : await Se(this, I, "f").beta.memoryStores.memories.create(e.memoryStoreId, {
              path: "/" + t,
              content: s
            });
      return (e.refusedShas.delete(t), a.content_sha256);
    } catch (o) {
      if (i && P8(o, 404)) return await Se(this, u, "m", r).call(this, e, t, n, void 0);
      let s = o instanceof m || P8(o, 400) || P8(o, 413);
      if (i && P8(o, 409))
        Se(this, d, "f").warn(
          "memory changed both locally and remotely; the upload was refused and the local edit loses",
          { path: t, memory_store_id: e.memoryStoreId }
        );
      else if (s && n !== void 0)
        (e.refusedShas.set(t, n),
          Se(this, d, "f").warn(
            "the server rejected this memory file, so it stays un-synced until its content changes",
            { path: t, memory_store_id: e.memoryStoreId, rejection: String(o) }
          ));
      else
        Se(this, d, "f").warn("failed to upload memory", {
          path: t,
          memory_store_id: e.memoryStoreId,
          error: String(o)
        });
      return;
    }
  }),
  (Be = async function (e, t, n, i, o) {
    if (o.mode === "disabled") return (o.suppressed++, i);
    let s = e.pendingDeletes.get(t);
    if (s === void 0) ((s = Date.now()), e.pendingDeletes.set(t, s));
    if (!o.waiveWindow && Date.now() - s < Dt) return i;
    let a, l;
    try {
      ((a = (await e.files.hashFile(j)) === qe(e.memoryStoreId)),
        (l = (await e.files.hashFile(t)) === null));
    } catch (c) {
      if (!(c instanceof m) && !B(c)) throw c;
      a = l = !1;
    }
    if (!a) return i;
    if (!l) return (e.pendingDeletes.delete(t), i);
    if (!o.takeSlot()) return i;
    if (o.mode === "log_only")
      return (
        Se(this, d, "f").info("log-only: sync would delete this memory on the server", {
          path: t,
          memory_store_id: e.memoryStoreId
        }),
        i
      );
    let f = await Se(this, u, "m", Ye).call(this, e, t, n, i);
    if (f === void 0) e.pendingDeletes.delete(t);
    return f;
  }),
  (Ye = async function (e, t, n, i) {
    try {
      await Se(this, I, "f").beta.memoryStores.memories.delete(n.id, {
        memory_store_id: e.memoryStoreId,
        expected_content_sha256: i
      });
    } catch (o) {
      if (P8(o, 404)) return;
      if (P8(o, 409) || P8(o, 412))
        Se(this, d, "f").warn(
          "memory deleted locally but changed remotely; keeping the remote version",
          { path: t, memory_store_id: e.memoryStoreId }
        );
      else
        Se(this, d, "f").warn("failed to delete memory", {
          path: t,
          memory_store_id: e.memoryStoreId,
          error: String(o)
        });
      return i;
    }
    Se(this, d, "f").info("propagated local deletion", {
      path: t,
      memory_store_id: e.memoryStoreId
    });
    return;
  }));
function B(r) {
  return typeof r === "object" && r !== null && typeof r.code === "string";
}
async function Bt(r, e) {
  if (!e) {
    await r;
    return;
  }
  let t,
    n = new Promise((i) => {
      if (((t = i), e.aborted)) i();
    });
  e.addEventListener("abort", t, { once: !0 });
  try {
    await Promise.race([r, n]);
  } finally {
    e.removeEventListener("abort", t);
  }
}
var le,
  _,
  S,
  K,
  A,
  b,
  ve,
  fe,
  V,
  de,
  he,
  D,
  C,
  Y,
  x,
  X,
  N,
  tt,
  Je,
  Ze = 102400,
  nt = 120000,
  Yt = 262144,
  qt = 65536,
  Qe = Buffer.from(`
`),
  J = 102400,
  zt = 2000,
  Gt = 200;
class ot extends sr {
  constructor(r) {
    super(`bash command timed out after ${r}ms`);
    ((this.name = "BashTimeoutError"), (this.timeoutMs = r));
  }
}
var Ht = /\x1b\[[0-9;?]*[ -/]*[@-~]/g,
  Kt = w.glob;
function st(r) {
  return r === void 0 ? Yt : r;
}
function F(r) {
  if (r === void 0) return;
  throw new sr(
    "The `unrestrictedPaths` option you passed to the agent toolset (AgentToolContext) is no longer supported. The toolset's file tools (read, write, edit, glob, grep) are now always confined to the working directory plus the directories listed in `allowedRoots`. Remove `unrestrictedPaths` from your context; to let the file tools reach any other directory, add it to `allowedRoots`."
  );
}
function Wr(r) {
  return [Jt(r), Zt(r), er(r), tr(r), ir(r), nr(r)];
}
async function Q(r, e) {
  return (F(r.unrestrictedPaths), Ie(r.workdir, e, { allowedRoots: r.allowedRoots ?? [] }));
}
function at(r, e) {
  return ue(r.readOnlyRoots ?? [], e);
}
function Vt() {
  let r = {};
  for (let [e, t] of Object.entries(process.env)) {
    if (e.startsWith("ANTHROPIC_")) continue;
    r[e] = t;
  }
  return r;
}
var Xt = (() => {
  class r {
    constructor(e, t = Vt()) {
      (le.add(this),
        _.set(this, void 0),
        S.set(this, ""),
        K.set(this, !1),
        A.set(this, !1),
        b.set(this, null),
        jn(
          this,
          _,
          ke.spawn("/bin/bash", ["--noprofile", "--norc"], {
            cwd: e,
            env: { ...t, PS1: "", PS2: "", TERM: "dumb" },
            stdio: ["pipe", "pipe", "pipe"],
            detached: !0
          }),
          "f"
        ),
        Se(this, _, "f").stdout.setEncoding("utf8"),
        Se(this, _, "f").stderr.setEncoding("utf8"),
        Se(this, _, "f").stdout.on("data", (n) => Se(this, le, "m", ve).call(this, n)),
        Se(this, _, "f").stderr.on("data", (n) => Se(this, le, "m", ve).call(this, n)),
        Se(this, _, "f").once("close", () => {
          jn(this, A, !0, "f");
          let n = Se(this, b, "f");
          (jn(this, b, null, "f"), n?.resolve());
        }));
    }
    get closed() {
      return Se(this, A, "f");
    }
    async exec(e, t = {}) {
      if (Se(this, A, "f")) throw new sr("bash session terminated");
      let n = t.timeoutMs ?? nt,
        i = t.signal;
      (i?.throwIfAborted(), jn(this, S, "", "f"), jn(this, K, !1, "f"));
      let o = `__ANT_CMD_${rt.randomUUID()}_DONE__`,
        s = `${o.slice(0, 8)}''${o.slice(8)}`,
        a = `{ ${e}
} </dev/null 2>&1; printf '\\n${s}%d\\n' $?
`;
      if ((Se(this, _, "f").stdin.write(a), Se(this, S, "f").indexOf(o) < 0)) {
        let { promise: O, resolve: v } = Bfn();
        jn(this, b, { sentinel: o, resolve: v }, "f");
        let M, ee;
        try {
          await Promise.race([
            O,
            new Promise((ft, me) => {
              M = setTimeout(() => me(new ot(n)), n);
            }),
            new Promise((ft, me) => {
              if (!i) return;
              ((ee = () => me(i.reason)), i.addEventListener("abort", ee, { once: !0 }));
            })
          ]);
        } finally {
          if (M) clearTimeout(M);
          if (ee && i) i.removeEventListener("abort", ee);
          jn(this, b, null, "f");
        }
      }
      let l = Se(this, S, "f").indexOf(o);
      if (l < 0) throw new sr("bash session terminated");
      let c = Se(this, S, "f")
          .slice(l + o.length)
          .match(/^(-?\d+)/),
        h = c ? parseInt(c[1], 10) : -1,
        y = Se(this, S, "f").slice(0, l).replace(Ht, "").replace(/\n+$/, "");
      if (Se(this, K, "f"))
        y = `[output truncated]
${y}`;
      return { output: y, exitCode: h };
    }
    close() {
      if (Se(this, A, "f")) return;
      jn(this, A, !0, "f");
      let e = Se(this, b, "f");
      (jn(this, b, null, "f"),
        e?.resolve(),
        Se(this, _, "f").stdout.destroy(),
        Se(this, _, "f").stderr.destroy(),
        Se(this, _, "f").stdin.destroy());
      try {
        process.kill(-Se(this, _, "f").pid, "SIGKILL");
      } catch {
        Se(this, _, "f").kill("SIGKILL");
      }
      Se(this, _, "f").unref();
    }
  }
  return (
    (_ = new WeakMap()),
    (S = new WeakMap()),
    (K = new WeakMap()),
    (A = new WeakMap()),
    (b = new WeakMap()),
    (le = new WeakSet()),
    (ve = function (t) {
      if ((jn(this, S, Se(this, S, "f") + t, "f"), Se(this, S, "f").length > Ze))
        (jn(this, S, Se(this, S, "f").slice(Se(this, S, "f").length - Ze), "f"),
          jn(this, K, !0, "f"));
      if (Se(this, b, "f") && Se(this, S, "f").indexOf(Se(this, b, "f").sentinel) >= 0) {
        let n = Se(this, b, "f");
        (jn(this, b, null, "f"), n.resolve());
      }
    }),
    r
  );
})();
function Jt(r) {
  F(r.unrestrictedPaths);
  let e,
    t = Promise.resolve();
  return R({
    name: "bash",
    description:
      "Run a bash command in a persistent shell. State (cwd, env vars) persists across calls.",
    inputSchema: {
      type: "object",
      properties: {
        command: { type: "string", description: "The command to run" },
        restart: { type: "boolean", description: "Restart the persistent shell before running" },
        timeout_ms: { type: "integer", description: "Per-call timeout in milliseconds" }
      }
    },
    run: async ({ command: n, restart: i, timeout_ms: o }, s) => {
      let a = t,
        l = Bfn();
      t = l.promise;
      try {
        await a;
      } catch {}
      try {
        if (i) (e?.close(), (e = void 0));
        if (!n) {
          if (i) return "bash session restarted";
          throw new Dg("bash: command is required");
        }
        e ?? (e = new Xt(r.workdir, r.env));
        try {
          let { output: f, exitCode: c } = await e.exec(n, {
            timeoutMs: o ?? nt,
            signal: s?.signal
          });
          if (c !== 0) throw new Dg(f || `exit ${c}`);
          return f;
        } catch (f) {
          if (f instanceof Dg) throw f;
          throw (
            e.close(),
            (e = void 0),
            new Dg(`bash: ${f instanceof Error ? f.message : String(f)}`)
          );
        }
      } finally {
        l.resolve();
      }
    },
    close: () => {
      (e?.close(), (e = void 0));
    }
  });
}
function Zt(r) {
  return (
    F(r.unrestrictedPaths),
    R({
      name: "read",
      description: "Read a UTF-8 text file relative to the workdir.",
      inputSchema: {
        type: "object",
        properties: {
          file_path: { type: "string" },
          view_range: {
            type: "array",
            items: { type: "integer" },
            description: "[start_line, end_line] 1-indexed inclusive"
          }
        },
        required: ["file_path"]
      },
      run: async ({ file_path: e, view_range: t }) => {
        if (!e) throw new Dg("read: file_path is required");
        let n = await Q(r, e);
        if (t?.length && t.length !== 2)
          throw new Dg("read: view_range must be [start_line, end_line]");
        let i;
        try {
          let c = await w.stat(n);
          if (!c.isFile()) throw new Dg(`read: ${e} is not a regular file`);
          let h = st(r.maxFileBytes);
          if (h !== null && c.size > h) {
            if (!t?.length)
              throw new Dg(
                `read: ${e} is ${c.size} bytes, exceeds ${h}-byte limit. Use the view_range parameter to read specific line ranges, e.g. view_range: [1, 500].`
              );
            let [y, O] = t;
            return await Qt(n, e, y, O, h);
          }
          i = await w.readFile(n, "utf8");
        } catch (c) {
          if (c instanceof Dg) throw c;
          throw new Dg(`read: ${P(c, e)}`);
        }
        if (!t?.length) return i;
        let [o, s] = t,
          a = i.split(`
`),
          l = Math.max(0, o - 1),
          f = s > 0 ? s : a.length;
        return a.slice(l, f).join(`
`);
      }
    })
  );
}
async function Qt(r, e, t, n, i) {
  let o = new ct(e, t, n, i);
  if (o.rangeIsEmpty()) return "";
  let s = Z.createReadStream(r, { highWaterMark: qt });
  try {
    for await (let a of s) if ((o.collectFrom(a), o.rangeIsCollected())) break;
  } finally {
    s.destroy();
  }
  return o.text();
}
class ct {
  constructor(r, e, t, n) {
    (fe.add(this),
      V.set(this, void 0),
      de.set(this, void 0),
      he.set(this, void 0),
      D.set(this, void 0),
      C.set(this, void 0),
      Y.set(this, void 0),
      x.set(this, 0),
      X.set(this, []),
      N.set(this, 0),
      jn(this, V, r, "f"),
      jn(this, de, e, "f"),
      jn(this, he, t, "f"),
      jn(this, D, Math.max(0, e - 1), "f"),
      jn(this, C, t > 0 ? t : 1 / 0, "f"),
      jn(this, Y, n, "f"));
  }
  rangeIsEmpty() {
    return Se(this, C, "f") <= Se(this, D, "f");
  }
  rangeIsCollected() {
    return Se(this, x, "f") >= Se(this, C, "f");
  }
  collectFrom(r) {
    var e;
    let t = 0;
    while (t < r.length && !this.rangeIsCollected()) {
      let n = r.indexOf(10, t),
        i = n < 0 ? r.length : n;
      if (Se(this, x, "f") >= Se(this, D, "f"))
        Se(this, fe, "m", tt).call(this, r.subarray(t, i), n >= 0);
      if (n < 0) break;
      (jn(this, x, ((e = Se(this, x, "f")), e++, e), "f"), (t = n + 1));
    }
  }
  text() {
    return Buffer.concat(Se(this, X, "f"), Se(this, N, "f")).toString("utf8");
  }
}
((V = new WeakMap()),
  (de = new WeakMap()),
  (he = new WeakMap()),
  (D = new WeakMap()),
  (C = new WeakMap()),
  (Y = new WeakMap()),
  (x = new WeakMap()),
  (X = new WeakMap()),
  (N = new WeakMap()),
  (fe = new WeakSet()),
  (tt = function (e, t) {
    if (
      (Se(this, X, "f").push(e),
      jn(this, N, Se(this, N, "f") + e.length, "f"),
      t && Se(this, x, "f") + 1 < Se(this, C, "f"))
    )
      (Se(this, X, "f").push(Qe), jn(this, N, Se(this, N, "f") + Qe.length, "f"));
    if (Se(this, N, "f") > Se(this, Y, "f")) throw Se(this, fe, "m", Je).call(this);
  }),
  (Je = function () {
    if (Se(this, C, "f") - Se(this, D, "f") === 1)
      return new Dg(
        `read: line ${Se(this, D, "f") + 1} of ${Se(this, V, "f")} alone exceeds ${Se(this, Y, "f")}-byte limit. The read tool cannot return part of a line, so view_range cannot narrow this further.`
      );
    return new Dg(
      `read: view_range [${Se(this, de, "f")}, ${Se(this, he, "f")}] of ${Se(this, V, "f")} exceeds ${Se(this, Y, "f")}-byte limit. Narrow the view_range to read a smaller portion.`
    );
  }));
function er(r) {
  return (
    F(r.unrestrictedPaths),
    R({
      name: "write",
      description:
        "Write a UTF-8 text file relative to the workdir, creating parent directories as needed.",
      inputSchema: {
        type: "object",
        properties: { file_path: { type: "string" }, content: { type: "string" } },
        required: ["file_path", "content"]
      },
      run: async ({ file_path: e, content: t }) => {
        if (!e) throw new Dg("write: file_path is required");
        let n = await Q(r, e),
          i = await at(r, n);
        if (i !== void 0) throw new Dg(`write: ${e} is inside read-only directory ${i}`);
        try {
          (await w.mkdir(g.dirname(n), { recursive: !0, mode: z }), await pe(n, t ?? ""));
        } catch (o) {
          throw new Dg(`write: ${P(o, e)}`);
        }
        return `wrote ${Buffer.byteLength(t ?? "")} bytes to ${e}`;
      }
    })
  );
}
function tr(r) {
  return (
    F(r.unrestrictedPaths),
    R({
      name: "edit",
      description:
        "Replace old_string with new_string in a file. old_string must be unique unless replace_all.",
      inputSchema: {
        type: "object",
        properties: {
          file_path: { type: "string" },
          old_string: { type: "string" },
          new_string: { type: "string" },
          replace_all: { type: "boolean" }
        },
        required: ["file_path", "old_string", "new_string"]
      },
      run: async ({ file_path: e, old_string: t, new_string: n, replace_all: i }) => {
        if (!e) throw new Dg("edit: file_path is required");
        if (!t) throw new Dg("edit: old_string is required");
        let o = await Q(r, e),
          s = await at(r, o);
        if (s !== void 0) throw new Dg(`edit: ${e} is inside read-only directory ${s}`);
        let a;
        try {
          let c = await w.stat(o);
          if (!c.isFile()) throw new Dg(`edit: ${e} is not a regular file`);
          let h = st(r.maxFileBytes);
          if (h !== null && c.size > h)
            throw new Dg(
              `edit: ${e} is ${c.size} bytes, exceeds ${h}-byte limit. The edit tool loads the whole file and cannot modify a file this large.`
            );
          a = await w.readFile(o, "utf8");
        } catch (c) {
          if (c instanceof Dg) throw c;
          throw new Dg(`edit: ${P(c, e)}`);
        }
        let l = a.split(t).length - 1;
        if (l === 0) throw new Dg(`edit: old_string not found in ${e}`);
        let f;
        if (i) f = a.split(t).join(n);
        else {
          if (l > 1) throw new Dg(`edit: old_string appears ${l} times in ${e} (must be unique)`);
          f = a.replace(t, () => n);
        }
        try {
          await pe(o, f);
        } catch (c) {
          throw new Dg(`edit: write: ${P(c, e)}`);
        }
        return `edited ${e} (${i ? l : 1} replacement(s))`;
      }
    })
  );
}
function rr(r) {
  return r.split(/[\\/{},]/).includes("..");
}
function ir(r) {
  return (
    F(r.unrestrictedPaths),
    R({
      name: "glob",
      description:
        "Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first.",
      inputSchema: {
        type: "object",
        properties: {
          pattern: { type: "string" },
          path: { type: "string", description: "Directory to search in. Defaults to the workdir." }
        },
        required: ["pattern"]
      },
      run: async ({ pattern: e, path: t }) => {
        if (!e) throw new Dg("glob: pattern is required");
        if (g.isAbsolute(e))
          throw new Dg(
            "glob: absolute pattern not permitted; pass a relative pattern (and optionally path)"
          );
        if (rr(e)) throw new Dg('glob: ".." is not permitted in the pattern');
        let n = t ? await Q(r, t) : g.resolve(r.workdir),
          i = t ? n : await q(n),
          o = [],
          s = lt;
        try {
          for await (let a of Kt(e, {
            cwd: n,
            withFileTypes: !0,
            exclude: (l) => l.name === ".git" || l.name === "node_modules"
          })) {
            if (s-- <= 0) break;
            if (!a.isFile()) continue;
            let l = g.join(a.parentPath, a.name),
              f;
            try {
              f = await w.realpath(l);
            } catch {
              continue;
            }
            if (!te(i, f)) continue;
            let c = 0;
            try {
              c = (await w.stat(l)).mtimeMs;
            } catch {}
            o.push({ path: l, mtime: c });
          }
        } catch (a) {
          throw new Dg(`glob: ${a instanceof Error ? a.message : String(a)}`);
        }
        if (o.length === 0) return "no matches";
        return (
          o.sort((a, l) => l.mtime - a.mtime),
          o.slice(0, Gt).map((a) => a.path).join(`
`)
        );
      }
    })
  );
}
function nr(r) {
  return (
    F(r.unrestrictedPaths),
    R({
      name: "grep",
      description:
        "Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker.",
      inputSchema: {
        type: "object",
        properties: { pattern: { type: "string" }, path: { type: "string" } },
        required: ["pattern"]
      },
      run: async ({ pattern: e, path: t }, n) => {
        if (!e) throw new Dg("grep: pattern is required");
        let i = g.resolve(r.workdir);
        if (t) i = await Q(r, t);
        let o = await fr();
        return o ? or(o, e, i, n?.signal) : ar(e, i, n?.signal);
      }
    })
  );
}
function or(r, e, t, n) {
  return new Promise((i, o) => {
    let s = ke.spawn(r, ["-n", "--no-heading", "-e", e, "--", t], { ...(n ? { signal: n } : {}) }),
      a = "",
      l = "",
      f = !1;
    (s.stdout.on("data", (c) => {
      if (f) return;
      if (((a += c), a.length > J)) ((f = !0), (a = a.slice(0, J)), s.kill("SIGKILL"));
    }),
      s.stderr.on("data", (c) => (l += c)),
      s.on("close", (c) => {
        if (n?.aborted) return o(new Dg("grep: aborted"));
        if (f)
          return i(
            a +
              `
[output truncated at ${J} bytes]`
          );
        if (c === 0) return i(a);
        if (c === 1) return i("no matches");
        o(new Dg(`grep: rg failed: ${l || `exit ${c}`}`));
      }),
      s.on("error", (c) => {
        if (n?.aborted) return o(new Dg("grep: aborted"));
        o(new Dg(`grep: rg failed: ${c.message}`));
      }));
  });
}
async function ar(r, e, t) {
  let n;
  try {
    n = new RegExp(r);
  } catch (l) {
    throw new Dg(`grep: invalid regex: ${l instanceof Error ? l.message : String(l)}`);
  }
  let i = [],
    o = J,
    s = (l) => {
      if (((o -= l.length + 1), o < 0)) return (i.push(`[output truncated at ${J} bytes]`), !1);
      return (i.push(l), !0);
    };
  if ((await w.stat(e).catch(() => null))?.isFile()) await et(e, n, s);
  else await lr(e, "", (l) => et(g.join(e, l), n, s), t);
  if (t?.aborted) throw new Dg("grep: aborted");
  if (i.length === 0) return "no matches";
  return i.join(`
`);
}
async function et(r, e, t) {
  let n = Z.createReadStream(r, { encoding: "utf8" }),
    i = it.createInterface({ input: n, crlfDelay: 1 / 0 }),
    o = 0;
  try {
    for await (let s of i) {
      if ((o++, s.length > zt)) continue;
      if (e.test(s) && !t(`${r}:${o}:${s}`)) return !1;
    }
  } catch {
  } finally {
    n.destroy();
  }
  return !0;
}
var cr = 40,
  lt = 50000;
async function lr(r, e, t, n) {
  let i = lt;
  async function o(s, a) {
    if (a > cr) return !0;
    if (n?.aborted) return !1;
    let l;
    try {
      l = await w.readdir(g.join(r, s), { withFileTypes: !0 });
    } catch {
      return !0;
    }
    for (let f of l) {
      if (f.name === ".git" || f.name === "node_modules") continue;
      if (i-- <= 0) return !1;
      if (n?.aborted) return !1;
      let c = s ? g.join(s, f.name) : f.name;
      if (f.isDirectory()) {
        if (!(await o(c, a + 1))) return !1;
      } else if (f.isFile()) {
        if ((await t(c)) === !1) return !1;
      }
    }
    return !0;
  }
  await o(e, 0);
}
async function fr() {
  let r = (process.env.PATH ?? "").split(g.delimiter);
  for (let e of r) {
    let t = g.join(e, "rg");
    try {
      return (await w.access(t, Z.constants.X_OK), t);
    } catch {}
  }
  return null;
}
export {
  xt as MEMORY_FLUSH_TIMEOUT_MS,
  L as SessionMemoryError,
  Xe as SessionMemoryStores,
  Wr as betaAgentToolset20260401,
  ut as setupSkills
};

//# sourceMappingURL=chunk-j9348xtk.js.map
