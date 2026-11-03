// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { L } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import { E, G, Us } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import { In, Rc, Qi } from "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-a16y5hcz.js";
import "./chunk-afxq0vrk.js";
import { JS, Ob } from "./chunk-t0wrcf3t.js";
import "./chunk-pgnjjhxv.js";
import { Wu, ie } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import { w4t, $ar } from "./chunk-dc0nzty2.js";
import { bZt } from "./chunk-mb4r4r9v.js";
import { nFn } from "./chunk-qzfkfc34.js";
import "./chunk-6xjawpfq.js";
import "./chunk-4cgvah10.js";
import "./chunk-dmhfm1tj.js";
import { zWs, KWs, VWs } from "./chunk-6h7ejyet.js";
import { tun } from "./chunk-wp7k62hm.js";
import { ws, gst, tX } from "./chunk-v4kbwz0z.js";
import "./chunk-ct112gdr.js";
import { constants as v } from "fs";
import {
  basename as I,
  dirname as k,
  isAbsolute as z,
  join as w,
  parse as U,
  resolve as y,
  sep as W
} from "path";
var Y = 90000,
  S = "writer-locks";
function A(e) {
  return Date.now() - e < Y;
}
var h = 8192,
  P = ".git",
  q = W === "\\" ? /[\\/]+/ : /\/+/;
async function Ne(e, n, t = bZt()) {
  let r = { removed: 0, errors: 0, newestKeptMs: null };
  try {
    let s = await C(
      t,
      w(e, $ar, "objects", "info", "alternates"),
      e,
      (a) => a.split(/\r?\n/, 1)[0] ?? ""
    );
    if (
      s === "absent" ||
      s === "leads_nowhere" ||
      s === "malformed" ||
      (s !== "refused" && I(s) !== "objects")
    )
      return r;
    if (s === "refused") return (l(r), r);
    let i = k(s),
      o = await t.fs.lstat(i, { bigint: !0 }),
      c = await t.fs.lstat(w(i, "HEAD")).catch(() => null);
    if (!c?.isFile() && !c?.isSymbolicLink()) return (l(r), r);
    await F(
      t,
      { kind: "git_dir", dir: i, identity: o },
      { cutoffMs: n, isLive: await N(t, e, k(i)), tally: r }
    );
    for (let a of await X(t, i, r))
      await F(t, a, { cutoffMs: n, isLive: await N(t, e, a.dir), tally: r }).catch(() => l(r));
  } catch {
    l(r);
  }
  return r;
}
function g(e) {
  e.newestKeptMs = Date.now();
}
function b(e, n, t = W) {
  let [r, s] = [e, n].map((i) =>
    In((t === "\\" ? i.replaceAll("/", t) : i).replace(/^[a-z](?=:)/, (o) => o.toUpperCase()))
  );
  return r === s;
}
function J(e, n) {
  let t = (r) => r.replace(/[A-Z]/g, (s) => s.toLowerCase());
  return b(e, n) || b(t(e), t(n));
}
function l(e) {
  (e.errors++, g(e));
}
var H = (e) => e.replace(/(?<![\r\n])[\r\n]+$/, "");
async function C(e, n, t, r, s) {
  let i = await M(e, n, r);
  if (i === "absent" || i === "malformed" || i === "refused") return i;
  if (Qi(i, t)) return "refused";
  let o = s === void 0 ? i : y(s, i);
  if (!z(o)) return "refused";
  let c = await _(e, o);
  return c === "plainly" ? o : c === "missing" && !/[\r\n]/.test(i) ? "leads_nowhere" : "refused";
}
async function _(e, n) {
  let { root: t } = U(n),
    r = t;
  for (let s of n.slice(t.length).split(q)) {
    if (s === "") continue;
    r = w(r, s);
    try {
      if ((await e.fs.lstat(r)).isSymbolicLink()) return "refused";
    } catch (i) {
      return Us(i) ? "missing" : "refused";
    }
  }
  return "plainly";
}
async function M(e, n, t) {
  try {
    let r = await ie().readFileFdGated(n, h);
    if (r === null) {
      let i = await e.fs.lstat(n);
      return i.isFile() && i.size <= h ? "refused" : "malformed";
    }
    let s = t(r.content);
    return s === "" || s.includes("\x00") ? "malformed" : s;
  } catch (r) {
    return G(r) ? "absent" : "refused";
  }
}
async function N(e, n, t) {
  let r = k(k(n)),
    s = w(JS(await Ob(t, void 0), r), w4t),
    i = await Promise.all(L([n, s]).map((o) => Q(e, o)));
  return (o) => i.some((c) => c(o));
}
async function Q(e, n) {
  let t = w(n, S),
    r;
  try {
    r = await e.fs.readdir(t);
  } catch (i) {
    return G(i) ? () => !1 : () => !0;
  }
  let s = new Set();
  for (let i of r) {
    let o = i.endsWith(".writer") ? await e.fs.lstat(w(t, i)).catch(() => null) : null;
    if (o !== null && A(o.mtimeMs)) s.add(i.slice(0, -7));
  }
  return (i) => s.has(i);
}
async function X(e, n, t) {
  let r = w(n, "worktrees"),
    s = await e.fs.lstat(r).catch((c) => (G(c) ? "absent" : null));
  if (s === "absent") {
    if (!(await e.fs.lstat(n).catch(() => null))?.isDirectory()) l(t);
    return [];
  }
  let i =
    s?.isDirectory() && (await _(e, r)) === "plainly"
      ? await e.fs.readdir(r).catch(() => null)
      : null;
  if (i === null) return (l(t), []);
  let o = [];
  for (let c of i) {
    let a = w(r, c),
      u = await e.fs.lstat(a).catch(() => null);
    if (u === null || u.isSymbolicLink()) {
      l(t);
      continue;
    }
    if (!u.isDirectory()) continue;
    let f = await C(e, w(a, "gitdir"), a, (p) => p.trimEnd(), a);
    if (f === "leads_nowhere") continue;
    if (f === "absent" || f === "refused" || f === "malformed" || I(f) !== P) {
      l(t);
      continue;
    }
    let d = k(f);
    if (Rc(d)) {
      l(t);
      continue;
    }
    let m = await M(e, f, H);
    if (m === "absent" || m === "refused") {
      l(t);
      continue;
    }
    if (m === "malformed" || !m.startsWith("gitdir: ")) {
      g(t);
      continue;
    }
    let T = m.slice(8);
    if (Qi(T, d)) {
      g(t);
      continue;
    }
    let O = await _(e, y(d, T));
    if (O === "refused") {
      l(t);
      continue;
    }
    if (O === "missing") {
      g(t);
      continue;
    }
    if (b(y(d, T), a)) o.push({ kind: "linked_worktree", dir: d, gitFileLine: m });
    else {
      let [p, R] = await Promise.all(
        [y(d, T), a].map((B) => e.fs.lstat(B, { bigint: !0 }).catch(() => null))
      );
      if (p?.ino && p.dev === R?.dev && p.ino === R.ino) l(t);
      else g(t);
    }
  }
  return o;
}
async function Z(e, n) {
  switch (n.kind) {
    case "git_dir": {
      let t = await e.lstat("");
      return t.dev === n.identity.dev && tun(t.ino, n.identity.ino);
    }
    case "linked_worktree":
      return ee(e, n.gitFileLine);
  }
}
var V = {
  git_dir: { trashName: zWs, ignoreFile: void 0 },
  linked_worktree: { trashName: KWs, ignoreFile: VWs }
};
async function ee(e, n) {
  let t = await e.open(P, v.O_RDONLY | v.O_NONBLOCK).catch(() => null);
  if (t === null) return !1;
  try {
    let [r, s] = await Promise.all([t.stat({ bigint: !0 }), e.lstat(P)]);
    if (r.dev !== s.dev || r.ino !== s.ino) return !1;
    let i = Buffer.alloc(h + 1),
      { bytesRead: o } = await t.read(i, 0, i.length, 0);
    return o <= h && H(i.toString("utf8", 0, o)) === n;
  } catch {
    return !1;
  } finally {
    await t.close().catch(() => {});
  }
}
function te(e, n, t) {
  let { root: r, dir: s, base: i } = e.path.parse(e.path.normalize(t));
  return n.holdOutside(
    r,
    [...s.slice(r.length).split(e.path.sep), i].filter((o) => o !== "").join("/"),
    !0
  );
}
async function x(e, n, t = n.realRoot, r) {
  let s = v.O_DIRECTORY | ws,
    i = s | tX | v.O_NOFOLLOW,
    o = await (
      n.backend === "win32_handle"
        ? te(e, n, t)
        : n.backend === "darwin_at"
          ? e.fs.open(t, s | gst)
          : t
              .split("/")
              .filter((c) => c !== "")
              .reduce(
                async (c, a) => {
                  let u = await c;
                  return e.fs
                    .open(`/proc/self/fd/${u.fd}/${a}`, i)
                    .finally(() => u.close().catch(() => {}));
                },
                e.fs.open("/", i)
              )
    ).catch(() => null);
  if (o === null) return !1;
  try {
    let [c, a] = await Promise.all([
      "fd" in o ? o.stat({ bigint: !0 }) : o.stat(),
      r ?? n.lstat("")
    ]);
    return !Wu(a.ino) && c.dev === a.dev && c.ino === a.ino;
  } catch {
    return !1;
  } finally {
    await o.close().catch(() => {});
  }
}
async function F(e, n, { cutoffMs: t, isLive: r, tally: s }) {
  let i = n.dir,
    { trashName: o, ignoreFile: c } = V[n.kind];
  try {
    if (!(await e.fs.lstat(e.path.join(i, o))).isDirectory()) {
      l(s);
      return;
    }
  } catch (m) {
    if (!G(m) || (await _(e, i)) !== "plainly") l(s);
    return;
  }
  let a = await e.fs.realpath(i).catch(() => null);
  if (a === null || !J(a, i)) {
    l(s);
    return;
  }
  let u = e.path.join(a, o),
    f = await nFn(e, { gitRoot: i, realRoot: a }).catch(() => null);
  if (f === null || "unavailable" in f) {
    l(s);
    return;
  }
  let d = f;
  try {
    if (
      !(await x(e, d)) ||
      (!b(a, i) && !(await x(e, d, i))) ||
      !(await Z(d, n)) ||
      !(await d.lstat(o)).isDirectory()
    ) {
      l(s);
      return;
    }
    (await ne(e, d, o, u, { cutoffMs: t, isLive: r, tally: s }), await re(e, d, o, u, s, c));
  } catch (m) {
    if (!G(m)) l(s);
  } finally {
    await d.close().catch(() => {});
  }
}
async function ne(e, n, t, r, { cutoffMs: s, isLive: i, tally: o }) {
  let c = await e.fs.readdir(r);
  for (let a of c) {
    let u = `${t}/${a}`;
    try {
      if (!(await n.lstat(u)).isDirectory()) continue;
      if (i(a.replace(/\.(?:staging|set-aside)$/, ""))) {
        g(o);
        continue;
      }
      let f = await j(e, e.path.join(r, a));
      if (f < s) (await K(n, e, u, s), o.removed++);
      else o.newestKeptMs = Math.max(o.newestKeptMs ?? -1 / 0, f);
    } catch (f) {
      if (f instanceof D) g(o);
      else if (!G(f)) l(o);
    }
  }
}
async function re(e, n, t, r, s, i) {
  let o = await e.fs.readdir(r).catch(() => ["?"]);
  try {
    if (i !== void 0 && o.length === 1 && o[0] === i) {
      if ((await n.lstat(`${t}/${i}`)).isFile())
        (await n.unlink(`${t}/${i}`),
          await n.rmdir(t).catch(async (c) => {
            if (E(c) !== "ENOTEMPTY") throw c;
            await n.create(
              `${t}/${i}`,
              Buffer.from(`*
`),
              384
            );
          }));
    } else if (o.length === 0) await n.rmdir(t);
  } catch (c) {
    if (!G(c) && E(c) !== "ENOTEMPTY") s.errors++;
  }
}
async function j(e, n) {
  let t = (await e.fs.lstat(n)).mtimeMs,
    r = await e.fs.readdir(n);
  for (let s of r) {
    let i = e.path.join(n, s);
    try {
      let o = await e.fs.lstat(i);
      if (((t = Math.max(t, o.mtimeMs)), o.isDirectory())) t = Math.max(t, await j(e, i));
    } catch (o) {
      if (!G(o)) throw o;
    }
  }
  return t;
}
class D extends Error {}
async function K(e, n, t, r) {
  if (!(Number((await e.lstat(t)).mtimeMs) < r)) throw new D();
  let s = await n.fs.readdir(n.path.join(e.realRoot, ...t.split("/"))).catch(() => []),
    i = [];
  for (let o of s) {
    let c = `${t}/${o}`;
    try {
      if ((await e.lstat(c)).isDirectory()) await K(e, n, c, r);
      else await e.unlink(c);
    } catch (a) {
      if (a instanceof D || E(a) === "ENOTEMPTY") throw a;
      if (!G(a)) i.push(a);
    }
  }
  if (i.length > 0) throw i[0];
  await e.rmdir(t);
}
export { Ne as sweepCheckoutSessionTrash };

//# sourceMappingURL=chunk-2b384qw2.js.map
