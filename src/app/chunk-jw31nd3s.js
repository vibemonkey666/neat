// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { es } from "./chunk-wrtp8qz8.js";
import { d, E, tg } from "./chunk-fs43t96t.js";
import { In } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { fe } from "./chunk-xe386mry.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { F4e, Pb } from "./chunk-dc0nzty2.js";
import { nu } from "./chunk-13nwb0xt.js";
import { nr, $Z, dAt, mEn, l4t, yci } from "./chunk-tcvjb2c0.js";
import { N4s } from "./chunk-5bpsfngr.js";
import { pqn, rLr, _an, KJe, uFt, San } from "./chunk-yyq6mj0n.js";
import { ze } from "./chunk-1ww4jg8j.js";
import { lstat as h, opendir as S, realpath as D } from "fs/promises";
import { join as f, sep as k } from "path";
async function Q3t() {
  let e = N() ? null : await San();
  if (e !== null) return { root: e, nested: !1, followsShell: !1 };
  let r = await F();
  return r === null ? null : { ...r, nested: !0 };
}
var P = new W(() => new Set());
function N() {
  if (yci()) return !0;
  if (!$Z()) return !1;
  let e = es(P),
    r = KJe();
  if (!e.has(r) && !uFt()) e.add(r);
  return e.has(r);
}
var v = 256;
async function F() {
  try {
    if (!(nr() || $Z()) || ze.isSandboxingEnabled()) return null;
    let e = KJe(),
      r = nr() ? null : nu(await D(e));
    if (r !== null && ![dAt(), mEn(dAt())].some((i) => In(r) === nu(i)))
      return (
        t(
          "workspace diff: the process has left the directory in which it was started, so no nested repository is looked for",
          { level: "warn" }
        ),
        null
      );
    if (Pb(e) !== null) return null;
    let n = fe(),
      o = await O(r, e);
    if (o.size > 1) {
      let i = rLr(n),
        s = i === void 0 ? void 0 : o.get(i),
        R = s !== void 0 && (await m(s)) === "directory" ? await g(s, r) : null;
      return R === null ? null : { root: R, followsShell: !0 };
    }
    let [a] = o.values();
    if (a !== void 0) {
      let i = await m(a);
      if (i === "directory") {
        let s = await g(a, r);
        return s === null ? null : { root: s, followsShell: !1 };
      }
      if (i === "other") return null;
    }
    let u = [],
      c = 0;
    for await (let i of await S(e)) {
      if (++c > v) return null;
      if (!i.isDirectory() || i.name.startsWith(".")) continue;
      let s = f(e, i.name);
      if ((await m(s)) !== "absent") u.push(s);
    }
    let p = nu(n),
      w =
        u.find((i) => {
          let s = nu(i);
          return p === s || p.startsWith(s + k);
        }) ?? (u.length === 1 ? u[0] : void 0),
      y = w === void 0 ? null : await g(w, r);
    return y === null ? null : { root: y, followsShell: u.length > 1 };
  } catch (e) {
    if (tg(e)) t(`workspace diff: nested repository scan failed: ${d(e)}`, { level: "warn" });
    else l(e);
    return null;
  }
}
async function O(e, r) {
  let n = pqn();
  if (e === null) return n;
  let o = new Map();
  for (let [a, u] of n) {
    let c = await C(u, r);
    if (c !== null && b(c, e)) o.set(a, c);
  }
  if (o.size < n.size)
    t(
      `workspace diff: ignored ${n.size - o.size} declared checkout(s) that do not resolve or lie outside the launch directory`,
      { level: "warn" }
    );
  return o;
}
function b(e, r) {
  let n = nu(e);
  return n === r || n.startsWith(r + k);
}
async function C(e, r) {
  if (!l4t(e, r) || F4e(e, r)) return null;
  try {
    return await D(e);
  } catch {
    return null;
  }
}
async function m(e) {
  try {
    return (await h(f(e, ".git"))).isDirectory() ? "directory" : "other";
  } catch (r) {
    let n = E(r);
    if (n === "ENOENT" || n === "ENOTDIR") return "absent";
    throw r;
  }
}
async function H(e) {
  try {
    let [r, n, o] = await Promise.all([h(f(e, "HEAD")), h(f(e, "objects")), h(f(e, "refs"))]);
    return r.isFile() && n.isDirectory() && o.isDirectory();
  } catch {
    return !1;
  }
}
async function g(e, r) {
  let n = _an(e);
  if (n === null) return null;
  if (r !== null) {
    if (N4s(n.gitDir) !== !1) return null;
    if (!(await H(n.gitDir))) return null;
  }
  let o = r === null ? await San(void 0, e) : n.workTree;
  if (o === null || r === null) return o;
  let a = await C(o, mEn(dAt()));
  return a !== null && b(a, r) ? a : null;
}
export { Q3t };

//# sourceMappingURL=chunk-jw31nd3s.js.map
