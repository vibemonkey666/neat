// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E6, Kt } from "./chunk-6bbdndfe.js";
import { L, q, J } from "./chunk-wrtp8qz8.js";
import { R, Qe, d, E, XSe } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Np } from "./chunk-zjm5ncxc.js";
import { f } from "./chunk-brszmkb3.js";
import { Po, jo, ie, fYe, PR, t } from "./chunk-4kxznmzw.js";
import { zn, Sb } from "./chunk-ajtyjx88.js";
import { C$e, Q9, ust, cE } from "./chunk-dc0nzty2.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { h_ } from "./chunk-13nwb0xt.js";
import { cC } from "./chunk-928ws1pg.js";
import { vo } from "./chunk-d5zj5299.js";
import { Um, tR } from "./chunk-wany0nxw.js";
function W(e) {
  if (!E6(e)) return !1;
  if (Kt(e)) return !0;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e) && cC(e) !== void 0;
}
function D9n(e, n = {}) {
  return n.acceptCustomIds ? E6(e) : W(e);
}
function d2e(e, n, i = {}) {
  if (n) return { adoptedSessionId: null, effectiveFork: !0 };
  if (e === void 0) return { adoptedSessionId: null, effectiveFork: !1 };
  if (D9n(e, i)) return { adoptedSessionId: e, effectiveFork: !1 };
  return (
    t(
      `resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`
    ),
    f("session_resume", "unadoptable_session_id"),
    { adoptedSessionId: null, effectiveFork: !0 }
  );
}
import { randomBytes as Tt } from "crypto";
import { constants as m, fstat as Et } from "fs";
import {
  lstat as x,
  mkdir as pt,
  open as Y,
  readdir as bt,
  readlink as N,
  realpath as H,
  symlink as tt,
  unlink as B
} from "fs/promises";
import {
  basename as z,
  dirname as y,
  isAbsolute as dt,
  join as v,
  resolve as A,
  sep as F
} from "path";
var I = m.O_NOFOLLOW ?? 0,
  vt = 8388608,
  gjt = 5368709120,
  b1r = "5GB",
  t7 = 67108864;
function npn() {
  return Um();
}
function hjt() {
  let e = Sb()?.adoptShellOutputRoot;
  if (e !== void 0) return v(e, q(), "tasks");
  let n = zn();
  if (n.outputDir === void 0 || J()) n.outputDir = v(tR(), q(), "tasks");
  return n.outputDir;
}
function PBo(e) {
  return v(tR(), e, "tasks");
}
function IBo() {
  return Sb()?.adoptShellOutputRoot !== void 0
    ? hjt()
    : ((J() ? void 0 : zn().outputDir) ?? v(tR(), q(), "tasks"));
}
function St() {
  let e = zn();
  if (e.outputDir === void 0) {
    if (Sb() !== null) return v(tR(), q(), "tasks");
    e.outputDir = v(tR(), q(), "tasks");
  }
  return e.outputDir;
}
function rpn(e) {
  if (J()) throw Error("Task output is not written to disk in a diskless session");
  let n = zn().outputPathBindings.get(e);
  if (n !== void 0) return n;
  let i = v(hjt(), `${e}.output`);
  return (zn().outputPathBindings.set(e, i), i);
}
function Pu(e) {
  if (J()) throw Error("Task output has no file in a diskless session");
  let n = zn().outputPathBindings.get(e);
  if (n !== void 0) return n;
  return v(St(), `${e}.output`);
}
function K(e) {
  let n = zn().pendingOutputOps;
  return (n.add(e), e.finally(() => n.delete(e)).catch(() => {}), e);
}
var Pt = 16777216,
  U = `
[output omitted: it could not be written to disk]
`,
  et = [50, 100, 200, 400, 800, 1600],
  V = et.reduce((e, n) => e + n, 0);
class H9n {
  #h;
  #n = null;
  #t = [];
  #w = 0;
  #o = !1;
  #e = 0;
  #r = 0;
  #i = !1;
  #u = new Set();
  #c = !1;
  #s = null;
  #a = null;
  #l = null;
  #d = null;
  constructor(e, n) {
    this.#h = n ?? rpn(e);
  }
  append(e) {
    if (this.#o) return;
    if (((this.#w += e.length), this.#w > gjt)) this.#o = !0;
    let n = this.#o
      ? `
[output truncated: exceeded ${b1r} disk cap]
`
      : e;
    if ((this.#t.push(n), (this.#e += n.length), !this.#l))
      ((this.#l = new Promise((i) => {
        this.#d = i;
      })),
        K(this.#O()));
  }
  appendTrailer(e, n) {
    if (!this.#o) this.#s = n;
    this.append(e);
  }
  flush() {
    return this.#l ?? Promise.resolve();
  }
  get failing() {
    return this.#i;
  }
  get lostOutput() {
    return this.#c;
  }
  get unwrittenChars() {
    return this.#e;
  }
  cancel() {
    ((this.#r += 1),
      (this.#t.length = 0),
      (this.#e = 0),
      (this.#s = null),
      this.#a?.abort(),
      (this.#a = null));
  }
  async #f() {
    while (!0) {
      try {
        if (!this.#n) this.#n = await _jt(this.#h);
        while (!0) {
          let e = this.#r;
          try {
            await this.#m();
          } catch (n) {
            if (this.#r === e) ((this.#c = !0), this.#t.unshift(U), (this.#e += U.length));
            throw n;
          }
          if (this.#t.length === 0) break;
        }
      } finally {
        if (this.#n) {
          let e = this.#n;
          ((this.#n = null), await e.close());
        }
      }
      if (this.#t.length) continue;
      break;
    }
  }
  #m() {
    return this.#n.appendFile(this.#y());
  }
  #y() {
    let e = this.#t.splice(0, this.#t.length);
    ((this.#e = 0), (this.#s = null));
    let n = 0;
    for (let r of e) n += Buffer.byteLength(r, "utf8");
    let i = Buffer.allocUnsafe(n),
      s = 0;
    for (let r of e) s += i.write(r, s, "utf8");
    return i;
  }
  async #O() {
    try {
      (await this.#f(), this.#p());
    } catch (e) {
      if (this.#g(e) !== null) {
        if (!this.#i)
          ((this.#i = !0),
            t(
              `Task output closing line delayed: its file is busy (EBUSY); trying again for up to ${V} ms`
            ));
        for (let [n, i] of et.entries()) {
          if (
            ((this.#a ??= new AbortController()), await X(i, this.#a.signal), this.#t.length === 0)
          )
            return;
          let s = this.#r;
          try {
            (await this.#f(), this.#p());
            return;
          } catch (r) {
            if (this.#t.length === 0 && this.#r !== s) return;
            let o = this.#g(r);
            if (o === null || n === et.length - 1) {
              this.#k(r, o);
              return;
            }
          }
        }
        return;
      }
      if (!this.#i)
        ((this.#i = !0), t(`Task output drain failed (will retry once): ${e}`, { level: "error" }));
      if (this.#t.length > 0)
        try {
          (await this.#f(), this.#p());
        } catch (n) {
          this.#k(n, null);
        }
    } finally {
      let e = this.#d;
      ((this.#l = null), (this.#d = null), e());
    }
  }
  #p() {
    ((this.#i = !1), this.#u.clear());
  }
  #g(e) {
    return O() === "windows" && E(e) === "EBUSY" ? this.#s : null;
  }
  #k(e, n) {
    let i = E(e),
      s = i !== void 0 && XSe.has(i) ? "exhaustion" : (n ?? "unexpected"),
      r = `${s}:${i ?? "no errno"}`;
    if (!this.#u.has(r))
      switch ((this.#u.add(r), s)) {
        case "exhaustion":
          t(`Task output drain retry failed (${i}): ${e}`, { level: "error" });
          break;
        case "exited":
          t(`Task output closing line not written (EBUSY): the file was still busy after ${V} ms`, {
            level: "warn"
          });
          break;
        case "killed":
          l(
            Qe(
              e,
              `closing line of a stopped shell command not written: output file still busy after ${V} ms`
            )
          );
          break;
        case "unexpected":
          l(e);
          break;
      }
    if (this.#e > Pt)
      (t(
        `Task output still cannot be written (${i ?? "no errno"}); dropped ${this.#e} chars of unwritten output`,
        { level: "error" }
      ),
        (this.#c = !0),
        (this.#t.length = 0),
        this.#t.push(U),
        (this.#e = U.length),
        (this.#s = null));
  }
}
function ht(e) {
  let n = zn().diskOutputs.get(e);
  if (!n) ((n = new H9n(e)), zn().diskOutputs.set(e, n));
  return n;
}
function KZe(e, n) {
  ht(e).append(n);
}
function L9n(e, n) {
  let i = ht(e);
  if (n === "killed")
    i.appendTrailer(
      `
[killed]
`,
      "killed"
    );
  else
    i.appendTrailer(
      `
[exited with code ${n.exitCode ?? "unknown"}]
`,
      "exited"
    );
}
function yp(e) {
  return K(
    (async () => {
      let n = zn(),
        i = n.diskOutputs.get(e);
      if (i) {
        if ((await i.flush(), i.failing && i.unwrittenChars > 0))
          t(
            `Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`,
            { level: "error" }
          );
        n.diskOutputs.delete(e);
      }
      opn(e);
    })()
  );
}
function opn(e) {
  let n = zn().outputPathBindings.get(e);
  if (n !== void 0 && Sb() === null && n === v(hjt(), `${e}.output`))
    zn().outputPathBindings.delete(e);
}
async function OBo(e, n, i = vt) {
  try {
    let s = await TAe(Pu(e));
    if (!s) return { content: "", newOffset: n };
    let r;
    try {
      r = await fYe(s, n, i);
    } finally {
      await s.close();
    }
    if (!r) return { content: "", newOffset: n };
    return { content: r.content, newOffset: n + r.bytesRead };
  } catch (s) {
    let r = E(s);
    if (r === "ENOENT" || kbt(s)) return { content: "", newOffset: n };
    if (r && XSe.has(r)) t(`getTaskOutputDelta failed (${r}): ${s}`, { level: "error" });
    else l(s);
    return { content: "", newOffset: n };
  }
}
async function yjt(e) {
  try {
    let n = await TAe(Pu(e));
    if (!n) return 0;
    try {
      return (await n.stat()).size;
    } finally {
      await n.close();
    }
  } catch (n) {
    if (kbt(n)) throw n;
    let i = E(n);
    if (i === "ENOENT") return 0;
    if (i === "EACCES" || i === "EPERM") {
      let s = await x(Pu(e)).catch(() => null);
      if (s !== null && s.isFile() && (s.mode & 256) === 0) return s.size;
      g(Pu(e), `output no longer measurable (${i})`);
    }
    if (i && XSe.has(i)) t(`getTaskOutputSize failed (${i}): ${n}`, { level: "error" });
    else l(n);
    return 0;
  }
}
async function vRi(e, n) {
  if (J()) return;
  let i = zn(),
    s = L([
      ...(i.outputDir !== void 0 ? [i.outputDir] : []),
      ...[...i.outputPathBindings.values()].map((o) => y(o))
    ]);
  if (s.length === 0) return;
  let r = e + F;
  for (let o of s) {
    let u;
    try {
      u = await bt(o);
    } catch (a) {
      let p = E(a);
      if (p !== "ENOENT")
        if (p && XSe.has(p))
          t(`repointTaskOutputSymlinks readdir failed (${p}): ${a}`, { level: "error" });
        else l(a);
      continue;
    }
    await Ft(o, u, r, e, n);
  }
}
async function Ft(e, n, i, s, r) {
  let o = zn().linkedOutputs;
  for (let u of n) {
    if (!u.endsWith(".output")) continue;
    let a = v(e, u),
      p = o.get(a),
      c;
    try {
      c = O() === "windows" ? void 0 : await C(a, { replaceLeaf: !0 });
      let h = c?.ioPath ?? a;
      if (p === void 0 && e === zn().outputDir)
        p = await N(h)
          .then((w) => wt(a, h, w))
          .catch(() => {
            return;
          });
      if (p === void 0 || !p.startsWith(i)) continue;
      let k = r + p.slice(s.length),
        T = await it(h);
      if (T === null) continue;
      if (T !== p) g(a, "output symlink was re-pointed");
      if ((await c?.recheckBeforeWrite(), await B(h), o.get(a) === p)) await ot(a, k);
      try {
        (await c?.recheckBeforeWrite(),
          await tt(k, h).catch(async (w) => {
            if (E(w) !== "EEXIST") throw w;
            let S = await N(h).catch(() => {
              return;
            });
            if (S !== k && S !== o.get(a)) throw w;
          }));
      } catch (w) {
        if (o.get(a) === k) o.delete(a);
        throw w;
      }
      if (
        (await N(h).catch(() => {
          return;
        })) === k
      )
        o.set(a, k);
    } catch (h) {
      if (E(h) !== "ENOENT" && !kbt(h)) l(h);
    } finally {
      await c?.close();
    }
  }
}
async function _(e, n, i = 0) {
  if (J()) throw Error("Task output is not written to disk in a diskless session");
  if (O() === "windows") return (await pt(y(e), { recursive: !0 }), Y(e, n.windowsFlags));
  let s = await C(e, { replaceLeaf: !0 });
  try {
    let r = await rt(s.ioPath);
    if (r?.isSymbolicLink()) {
      let a = await nt(e, s.ioPath);
      if (a === null) {
        if (n.relooked) g(e, "output leaf changed during open");
        return (await s.close(), _(e, { ...n, relooked: !0 }, i));
      }
      if (n.exclusive || i > 0 || !D(a)) g(e, "output link is not appendable");
      return await _(a, { exclusive: n.exclusive, windowsFlags: n.windowsFlags }, i + 1);
    }
    if (r !== null && (!r.isFile() || (r.nlink !== 1 && i === 0)))
      g(e, "existing output is not a plain file");
    await s.recheckBeforeWrite();
    let o = n.exclusive || r === null,
      u;
    try {
      u = await Q9(
        s.ioPath,
        m.O_WRONLY | m.O_APPEND | (o ? m.O_CREAT | m.O_EXCL : 0) | I | (m.O_NONBLOCK ?? 0),
        O()
      );
    } catch (a) {
      if (!n.exclusive && E(a) === "EEXIST" && !n.retried)
        return (await s.close(), _(e, { ...n, retried: !0 }, i));
      throw a;
    }
    if (i > 0 && r === null) {
      let a = await u.stat();
      j.set(e, { dev: a.dev, ino: a.ino });
    }
    try {
      await st(u, r, e, { registeredIdentity: i > 0 ? gt(e) : void 0 });
    } catch (a) {
      throw (await u.close().catch(() => {}), a);
    }
    return u;
  } catch (r) {
    throw G(r, e);
  } finally {
    await s.close();
  }
}
async function TAe(e, n = 0, i = !1) {
  if (O() === "windows") {
    let r = await rt(e);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let u = await nt(e, e);
      if (u === null) {
        if (i) g(e, "output leaf changed during open");
        return TAe(e, n, !0);
      }
      return ft(u, n, e);
    }
    if (!r.isFile()) g(e, "not a regular file");
    let o = await Y(e, "r");
    return (await st(o, r, e, { anyLinkCount: !0 }), o);
  }
  let s;
  try {
    s = await C(e, { replaceLeaf: !0, create: !1 });
  } catch (r) {
    if (E(r) === "ENOENT") return null;
    throw r;
  }
  try {
    let r = await rt(s.ioPath);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let u = await nt(e, s.ioPath);
      if (u === null) {
        if (i) g(e, "output leaf changed during open");
        return (await s.close(), TAe(e, n, !0));
      }
      return await ft(u, n, e);
    }
    if (n === 0 && r.isFile() && r.nlink === 0) return null;
    if (!r.isFile() || (r.nlink !== 1 && n === 0)) g(e, "not a regular nlink-1 file");
    await s.recheckBeforeWrite();
    let o = await Q9(s.ioPath, m.O_RDONLY | I | (m.O_NONBLOCK ?? 0), O());
    try {
      if (
        (await st(o, r, e, {
          registeredIdentity: n > 0 ? gt(e) : void 0,
          unlinkedIsGone: n === 0
        })) === "gone"
      )
        return null;
    } catch (u) {
      throw (await o.close().catch(() => {}), u);
    }
    return o;
  } catch (r) {
    if (E(r) === "ENOENT") return null;
    throw G(r, e);
  } finally {
    await s.close();
  }
}
async function wt(e, n, i) {
  let s = dt(i) && A(i).startsWith(A(Np()) + F);
  if (!dt(i) || (!D(i) && !s))
    return g(e, "output is an unregistered symlink of a shape this session does not create");
  let r = await x(n);
  if (!r.isSymbolicLink() || r.ctimeMs >= zn().linksInheritedBeforeFor(y(e)))
    return g(e, "output is an unregistered symlink made during this session");
  return (await ot(e, i), i);
}
async function nt(e, n) {
  let i = zn().linkedOutputs.get(e);
  if (i === void 0) {
    if (!spn(e)) return g(e, "output is an unregistered symlink outside any tasks directory");
    let r = await it(n);
    if (r === null) return null;
    i = await wt(e, n, r);
  }
  let s = await it(n);
  if (s === null) return null;
  if (s !== i) return g(e, "output symlink was re-pointed");
  return i;
}
async function it(e) {
  try {
    return await N(e);
  } catch (n) {
    if (E(n) === "EINVAL") return null;
    throw n;
  }
}
async function ft(e, n, i) {
  if (D(e)) {
    if (n > 0) return g(i, "output links chain");
    return TAe(e, n + 1);
  }
  let s, r;
  try {
    let o = await H(e);
    if (D(o)) return g(i, "output link leads back into the tasks tree");
    ((r = await x(o)), (s = await Q9(o, m.O_RDONLY | I | (m.O_NONBLOCK ?? 0), O())));
  } catch (o) {
    if (kbt(o)) throw o;
    if (E(o) === "ENOENT") return null;
    throw G(o, i);
  }
  try {
    let o = await s.stat();
    if (!o.isFile() || o.ino !== r.ino || o.dev !== r.dev)
      g(i, "link target is not a regular file");
  } catch (o) {
    throw (await s.close().catch(() => {}), o);
  }
  return s;
}
function D(e) {
  let n = Um();
  return e === n || e.startsWith(n.endsWith(F) ? n : n + F);
}
async function rt(e) {
  try {
    return await x(e);
  } catch (n) {
    if (E(n) === "ENOENT") return null;
    throw n;
  }
}
var j = new Map();
function gt(e) {
  let n = j.get(e);
  if (n === void 0) return g(e, "link target identity was never recorded");
  return n;
}
async function ot(e, n) {
  if (D(n)) await kt(n);
  zn().linkedOutputs.set(e, n);
}
async function kt(e) {
  let n = await C(e, { replaceLeaf: !0, create: !1 });
  try {
    let i = await Q9(n.ioPath, m.O_RDONLY | I | (m.O_NONBLOCK ?? 0), O()).catch((s) => {
      throw G(s, e);
    });
    try {
      let s = await i.stat();
      if (!s.isFile() || s.nlink !== 1) g(e, "link target is not a regular single-link file");
      j.set(e, { dev: s.dev, ino: s.ino });
    } finally {
      await i.close();
    }
  } finally {
    await n.close();
  }
}
async function st(e, n, i, s) {
  try {
    let r = await e.stat(),
      o = s?.registeredIdentity;
    if (
      s?.unlinkedIsGone &&
      o === void 0 &&
      !s.anyLinkCount &&
      n !== null &&
      r.isFile() &&
      r.nlink === 0 &&
      r.ino === n.ino &&
      r.dev === n.dev
    )
      return (await e.close().catch(() => {}), "gone");
    if (
      !r.isFile() ||
      (o !== void 0 ? r.ino !== o.ino || r.dev !== o.dev : !s?.anyLinkCount && r.nlink !== 1) ||
      (n !== null && (r.ino !== n.ino || r.dev !== n.dev))
    )
      g(i, "output file identity changed");
    return "same";
  } catch (r) {
    throw (await e.close().catch(() => {}), r);
  }
}
function G(e, n) {
  let i = E(e);
  if (
    i === "ELOOP" ||
    i === "EISDIR" ||
    i === "ENOTDIR" ||
    i === "ENXIO" ||
    i === "EOPNOTSUPP" ||
    i === "ENOTSUP"
  )
    try {
      g(n, `open refused a swapped leaf (${i})`);
    } catch (s) {
      return s;
    }
  return e;
}
function $t(e) {
  let n = at(),
    i = A(e);
  if (i.startsWith(n + F)) return i;
  let s = ie(),
    r = y(y(y(y(i)))),
    { resolvedPath: o } = Po(s, r);
  return vo(o) === vo(n) ? v(n, i.slice(r.length + 1)) : i;
}
function at() {
  return y(y(y(A(hjt()))));
}
function spn(e) {
  let n = at(),
    i = ie(),
    s = new Set([n, Po(i, n).resolvedPath].map((r) => vo(r)));
  return jo(e).some((r) => {
    let o = y(A(r));
    return vo(z(o)) === "tasks" && mt(z(y(o))) && s.has(vo(y(y(y(o)))));
  });
}
function Z() {
  let e = ["????????-????-????-????-????????????", "session_*", "cse_*"],
    n = q();
  if (!W(n) && /^[A-Za-z0-9._-]+$/.test(n)) e.push(n);
  return e;
}
function mt(e) {
  return W(e) || e === q();
}
function MBo(e) {
  let n = at(),
    i = ie(),
    s = L([n, Po(i, n).resolvedPath]),
    r = new Set(),
    o = (a, p) => {
      let c = a.endsWith(F) ? a : a + F;
      return vo(p).startsWith(vo(c)) ? p.slice(c.length) : null;
    },
    u = (a) => a.replaceAll("\\", "/");
  for (let a of jo(e)) {
    let p = A(a);
    for (let c of s) {
      let h = z(c);
      if (vo(p) === vo(c)) {
        for (let w of Z()) (r.add(`!/*/${w}/tasks/**`), r.add(`!**/${h}/*/${w}/tasks/**`));
        continue;
      }
      let k = o(p, c);
      if (k !== null) {
        for (let w of Z()) (r.add(`!/${u(k)}/*/${w}/tasks/**`), r.add(`!**/${h}/*/${w}/tasks/**`));
        continue;
      }
      let T = o(c, p);
      if (T !== null) {
        let w = T.split(F);
        if (w.length === 1)
          for (let S of Z()) (r.add(`!/${S}/tasks/**`), r.add(`!**/${h}/${u(T)}/${S}/tasks/**`));
        else if (!mt(w[1] ?? "")) ;
        else if (w.length === 2) (r.add("!/tasks/**"), r.add(`!**/${h}/${u(T)}/tasks/**`));
        else if (vo(w[2] ?? "") === "tasks") r.add("!**");
      }
    }
  }
  return [...r];
}
async function N9n(e) {
  e = $t(e);
  let n = await TAe(e);
  if (n === null)
    throw (
      await x(e),
      new R(
        `task output ${e} is no longer available (the file it pointed to was removed)`,
        "task output link target removed"
      )
    );
  let i = O();
  return {
    ioPath:
      (i === "linux" || i === "wsl") &&
      (await N(`/proc/self/fd/${n.fd}`).then(
        () => !0,
        () => !1
      ))
        ? C$e(n.fd)
        : i === "macos"
          ? `/dev/fd/${n.fd}`
          : e,
    canonicalPath: e,
    handle: n,
    close: () => n.close()
  };
}
var S1r = 8192;
async function VZe(e) {
  return qZe(Pu(e), S1r);
}
async function qZe(e, n) {
  let i = await TAe(e);
  if (i === null) return { content: "", bytesRead: 0, bytesTotal: 0 };
  try {
    return await PR(i, n);
  } finally {
    await i.close();
  }
}
async function ipn(e) {
  let n = zn().linkedOutputs.get(e);
  if ((zn().linkedOutputs.delete(e), n !== void 0)) j.delete(n);
  if (O() === "windows") {
    await B(e);
    return;
  }
  let i;
  try {
    i = await C(e, { replaceLeaf: !0, create: !1 });
  } catch (s) {
    if (E(s) === "ENOENT") return;
    throw s;
  }
  try {
    (await i.recheckBeforeWrite(), await B(i.ioPath));
  } finally {
    await i.close();
  }
}
var Rt = new Uint8Array([10]);
async function DBo(e) {
  let n = `${e}.${Tt(6).toString("hex")}.probe`;
  try {
    let i;
    try {
      i = await _(n, { exclusive: !0, windowsFlags: "wx" });
    } catch {
      return null;
    }
    try {
      await i.write(Rt);
    } finally {
      await i.close();
    }
    return null;
  } catch (i) {
    return E(i) ?? null;
  } finally {
    await ipn(n).catch((i) => {
      t(`probeTaskOutputWrite: could not delete ${n}: ${d(i)}`);
    });
  }
}
async function HBo(e, n) {
  let i = await _(e, { exclusive: !1, windowsFlags: "w" });
  try {
    (await i.truncate(0), await i.writeFile(n));
  } finally {
    await i.close();
  }
}
async function C(e, n) {
  let i = y(e),
    s = z(e),
    r = b.get(i);
  if (r !== void 0) {
    let c = await r.catch(() => null);
    if (c !== null) {
      let k = (await Promise.all([c.handleStat(), x(i)]).then(
        ([T, w]) => T.nlink > 0 && w.isDirectory() && w.ino === T.ino && w.dev === T.dev,
        () => !1
      ))
        ? c.viewFor(s)
        : null;
      if (k !== null) return k;
      if (b.get(i) === r) b.delete(i);
      await c.release();
    } else if (b.get(i) === r) b.delete(i);
  }
  let o = b.get(i);
  if (o !== void 0 && o !== r) return C(e, n);
  let u = (async () => {
      let c;
      try {
        c = await cE(e, [e], {
          createParents: n?.create ?? !0,
          ...(n?.replaceLeaf && { leaf: "replace" })
        });
      } catch (P) {
        if (P instanceof h_) {
          if (!(await xt())) {
            if (n?.create ?? !0) await pt(y(e), { recursive: !0, mode: 448 });
            return {
              ioPath: e,
              canonicalPath: e,
              readExisting: () => Promise.resolve(null),
              recheckBeforeWrite: () => {},
              close: async () => {}
            };
          }
          (t(`task output: pin of ${y(e)} refused: ${d(P)}`, { level: "warn" }),
            g(
              e,
              "tasks dir moved or linked",
              `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${tR().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`
            ));
        }
        throw P;
      }
      let h = /^\/proc\/self\/fd\/(\d+)\//.exec(c.ioPath);
      if (h === null) return c;
      let k = c.ioPath.slice(0, c.ioPath.length - s.length - 1),
        T = Number(h[1]),
        w = 0,
        S = !1,
        lt = !1,
        ut = async () => {
          if (S && w === 0 && !lt) ((lt = !0), await c.close());
        };
      return {
        handleStat: () => Nt(T),
        release: () => ((S = !0), ut()),
        viewFor: (P) => {
          if (S) return null;
          w++;
          let ct = !1;
          return {
            ioPath: `${k}/${P}`,
            canonicalPath: v(i, P),
            readExisting: (Ot) => ust(`${k}/${P}`, v(i, P), O(), Ot),
            recheckBeforeWrite: () => {},
            close: async () => {
              if (!ct) ((ct = !0), w--, await ut());
            }
          };
        }
      };
    })(),
    a = u.then((c) => ("viewFor" in c ? c : Promise.reject(Error("not held"))));
  (a.catch(() => {}), b.set(i, a));
  let p;
  try {
    p = await u;
  } catch (c) {
    if (b.get(i) === a) b.delete(i);
    throw c;
  }
  if (!("viewFor" in p)) {
    if (b.get(i) === a) b.delete(i);
    return p;
  }
  if (b.size > _t) {
    for (let [c, h] of b)
      if (c !== i) {
        (b.delete(c),
          h.then(
            (k) => k.release(),
            () => {}
          ));
        break;
      }
  }
  return p.viewFor(s) ?? Promise.reject(Error("unreachable: fresh hold retired"));
}
var Q;
async function xt() {
  let e = Um();
  if (Q?.root === e) return Q.ok;
  let n = await H(e).then(
    () => !0,
    (i) => E(i) !== "EPERM"
  );
  if (n) Q = { root: e, ok: Promise.resolve(!0) };
  return n;
}
var b = new Map();
function Nt(e) {
  return new Promise((n, i) => Et(e, (s, r) => (s ? i(s) : n(r))));
}
var _t = 8;
function _jt(e, n = "a") {
  return _(e, { exclusive: !1, windowsFlags: n });
}
function Ebt(e) {
  return K(
    (async () => {
      let n = rpn(e);
      return (await (await _(n, { exclusive: !0, windowsFlags: "wx" })).close(), n);
    })()
  );
}
var yt = Symbol("taskOutputSwapRefused");
function kbt(e) {
  return e instanceof Error && yt in e;
}
function g(e, n, i) {
  let s = `task output swap refused (${n}): ${e}` + (i === void 0 ? "" : `. To recover: ${i}.`),
    r = Object.assign(new R(s, `task output swap refused (${n})`), { [yt]: !0 });
  t(s, { level: "error" });
  let o = `${n}\x00${e}`;
  if (!M.has(o)) {
    if (M.size >= Dt) M.clear();
    (M.add(o), l(r));
  }
  throw r;
}
var M = new Set(),
  Dt = 256;
async function $9n(e, n) {
  let i;
  try {
    i = await x(e);
  } catch (u) {
    let a = E(u);
    if (a === "ELOOP" || a === "ENOTDIR") g(e, `lstat refused a swapped path (${a})`);
    throw u;
  }
  if (!i.isFile() || i.nlink !== 1) g(e, "not a regular nlink-1 file");
  let s = !1,
    r = i.size > n,
    o;
  try {
    o = await Y(e, s ? (r ? "r+" : "r") : (r ? m.O_RDWR : m.O_RDONLY) | I | (m.O_NONBLOCK ?? 0));
  } catch (u) {
    let a = E(u);
    if (
      a === "ELOOP" ||
      a === "EISDIR" ||
      a === "ENOTDIR" ||
      a === "ENXIO" ||
      a === "EOPNOTSUPP" ||
      a === "ENOTSUP"
    )
      g(e, `open refused a swapped path (${a})`);
    throw u;
  }
  try {
    let u = await o.stat();
    if (!u.isFile() || u.dev !== i.dev || u.ino !== i.ino || u.nlink !== 1)
      g(e, "file changed between lstat and open");
    if (r && u.size > n) await o.truncate(n);
    return { handle: o, size: u.size };
  } catch (u) {
    throw (await o.close(), u);
  }
}
async function YZe(e, n) {
  let i;
  try {
    i = await $9n(Pu(e), gjt);
  } catch (o) {
    if (E(o) === "ENOENT") return { content: "", omittedBytes: 0 };
    throw o;
  }
  let { handle: s } = i,
    r = Math.min(i.size, gjt);
  try {
    let o = Math.max(0, r - n),
      u = Buffer.allocUnsafe(r - o),
      a = 0;
    while (a < u.length) {
      let { bytesRead: c } = await s.read(u, a, u.length - a, o + a);
      if (c === 0) break;
      a += c;
    }
    let p = 0;
    while (o > 0 && p < a && (u[p] & 192) === 128) p++;
    return { content: u.toString("utf8", p, a), omittedBytes: o + p };
  } finally {
    await s.close();
  }
}
async function apn(e, n, i) {
  let { handle: r, size: o } = await $9n(e, i);
  try {
    let u = await Y(n, m.O_WRONLY | m.O_CREAT | m.O_TRUNC | I);
    try {
      let a = Buffer.alloc(1048576),
        p = 0;
      while (p < i) {
        let c = Math.min(a.length, i - p),
          { bytesRead: h } = await r.read(a, 0, c, p);
        if (h === 0) break;
        let k = 0;
        while (k < h) {
          let { bytesWritten: T } = await u.write(a, k, h - k, p + k);
          k += T;
        }
        p += h;
      }
    } finally {
      await u.close();
    }
    return o;
  } finally {
    await r.close();
  }
}
async function Lt(e, n, i = e) {
  if (e === n) return !0;
  try {
    if (!(await x(i)).isFile()) return !1;
    return (await H(i)) === (await H(n));
  } catch {
    return !1;
  }
}
function lpn(e, n, i) {
  return K(
    (async () => {
      try {
        let s = rpn(e),
          r = await C(s, { replaceLeaf: !0 });
        try {
          if (await Lt(s, n, r.ioPath)) {
            let u = await N(r.ioPath).catch(() => n);
            return (await ot(s, D(u) ? u : n), i?.("noop"), s);
          }
          if (D(n)) await kt(n);
          let o = zn().linkedOutputs;
          (await r.recheckBeforeWrite(),
            await B(r.ioPath).catch((u) => {
              if (E(u) !== "ENOENT") throw u;
            }),
            o.set(s, n));
          try {
            try {
              (await r.recheckBeforeWrite(), await tt(n, r.ioPath));
            } catch (u) {
              if (E(u) !== "EEXIST") throw u;
              (await r.recheckBeforeWrite(),
                await B(r.ioPath).catch((a) => {
                  if (E(a) !== "ENOENT") throw a;
                }),
                await r.recheckBeforeWrite(),
                await tt(n, r.ioPath));
            }
          } catch (u) {
            if (o.get(s) === n) o.delete(s);
            throw u;
          }
          if (
            (await N(r.ioPath).catch(() => {
              return;
            })) === n
          )
            o.set(s, n);
        } finally {
          await r.close();
        }
        return (i?.("symlink"), s);
      } catch (s) {
        let r = E(s);
        if ((r && XSe.has(r)) || r === "EROFS")
          t(`initTaskOutputAsSymlink failed (${r}): ${s}`, { level: "error" });
        else if (!kbt(s)) l(s);
        return Ebt(e);
      }
    })()
  );
}
export {
  D9n,
  d2e,
  gjt,
  b1r,
  t7,
  npn,
  hjt,
  PBo,
  IBo,
  rpn,
  Pu,
  H9n,
  KZe,
  L9n,
  yp,
  opn,
  OBo,
  yjt,
  vRi,
  TAe,
  spn,
  MBo,
  N9n,
  S1r,
  VZe,
  qZe,
  ipn,
  DBo,
  HBo,
  _jt,
  Ebt,
  kbt,
  $9n,
  YZe,
  apn,
  lpn
};

//# sourceMappingURL=chunk-m5rm7nsm.js.map
