// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E, G } from "./chunk-fs43t96t.js";
import { DB } from "./chunk-h5gbmqm1.js";
import { t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import {
  lstat as p,
  readdir as C,
  readlink as y,
  realpath as w,
  rmdir as N,
  unlink as P
} from "fs/promises";
import {
  basename as x,
  dirname as m,
  isAbsolute as F,
  join as k,
  normalize as g,
  sep as T
} from "path";
function sp(n) {
  return n
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u017F/g, "s");
}
function tGr(n) {
  let e = "";
  for (let o of n) e += o.toLowerCase();
  return sp(e).replace(/\u03C2/g, "\u03C3");
}
function nGr(n) {
  let e = O();
  return e === "windows" || e === "macos" ? sp(n) : n;
}
function RXs(n, e) {
  let o = null,
    s = 0,
    r = [];
  for (let a of n.split("\x00\x00")) {
    let u = a.split("\x00"),
      c = u.find((v) => v.startsWith("worktree "));
    if (c === void 0) continue;
    let f = c.slice(9);
    if (!sGt(f)) return null;
    let h = g(f);
    if ((r.push(b7(h)), u.includes(`branch refs/heads/${e}`))) (s++, (o ??= h));
  }
  if (o === null || s !== 1) return null;
  let l = b7(o),
    i = 0;
  for (let a of r) if (a === l) i++;
  return i === 1 ? o : null;
}
function rGr(n) {
  return O() === "windows" ? n.replaceAll("\\", "/") : n;
}
function Zd(n) {
  let e = n.replace(O() === "windows" ? /[\\/]+$/ : /\/+$/, "");
  return e === "" ? n : e;
}
function b7(n) {
  let e = Zd(n);
  return nGr(O() === "macos" ? e.normalize("NFC") : e);
}
function qSt(n, e) {
  let o = d(n);
  return e.some((s) => d(g(s)) === o);
}
function fgn(n, e) {
  let o = b7(n);
  return e.find((s) => b7(g(s)) === o) ?? null;
}
function d(n) {
  let e = Zd(n);
  return O() === "macos" ? e.normalize("NFC") : e;
}
var z = /\p{Cc}/u;
function sGt(n) {
  if (z.test(n) || !F(n) || DB(n)) return !1;
  return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(n);
}
function rGo(n) {
  let e = new Set();
  for (let o of n.split("\x00\x00")) {
    let s = o.split("\x00").find((a) => a.startsWith("worktree "));
    if (s === void 0) continue;
    let r = s.slice(9);
    if (!sGt(r)) return !1;
    let l = g(r),
      i = Zd(O() === "macos" ? l.normalize("NFC") : l);
    if (e.has(i)) return !1;
    e.add(i);
  }
  return !0;
}
function oGr(n, e) {
  if (!rGo(n)) return null;
  let o = (r, l) => (O() === "macos" ? r.normalize("NFC") === l.normalize("NFC") : r === l),
    s = null;
  for (let r of n.split("\x00\x00")) {
    let l = r.split("\x00").find((a) => a.startsWith("worktree "));
    if (l === void 0) continue;
    let i = g(l.slice(9));
    if (s === null && e.some((a) => o(Zd(i), Zd(g(a))))) s = i;
  }
  return s;
}
async function PU(n, e) {
  return (await oGo(n, e)).verdict;
}
async function oGo(n, e) {
  let o = [];
  for (let l = Zd(n); m(l) !== l && l !== e; l = m(l)) o.push(l);
  if (o.length === 0) return { verdict: "unknown" };
  let s = O() === "windows",
    r = null;
  for (let l of o.reverse()) {
    let i = Zd(l),
      a = await y(i).then(
        () => "link",
        (u) => {
          let c = E(u);
          return c === "EINVAL"
            ? "clear"
            : c === "ENOENT" || c === "ENOTDIR"
              ? "missing"
              : "unknown";
        }
      );
    if (a === "clear") {
      if (s) {
        let u = await p(i).catch(() => null);
        if (u === null || !u.isDirectory()) return { verdict: "unknown", at: i };
        let c = r ?? (await w(m(i)).catch(() => null)),
          f = await w(i).catch(() => null);
        if (c === null || f === null || tGr(Zd(f)) !== tGr(k(Zd(c), x(i))))
          return { verdict: "unknown", at: i };
        r = f;
      }
      continue;
    }
    if (a === "missing" && !(await sGo(i))) return { verdict: "unknown", at: i };
    return { verdict: a, at: i };
  }
  return { verdict: "clear" };
}
async function sGo(n) {
  if (O() !== "windows") return !0;
  return p(`${n}.lnk`).then(
    () => !1,
    (e) => G(e)
  );
}
async function HQn(n, e) {
  return (await PU(n, e)) === "clear";
}
async function pgn(n, e, o) {
  if (!(await HQn(n, o))) return !1;
  let s = await w(n).catch(() => null);
  if (s === null || d(s) !== d(e)) return !1;
  let r = await p(Zd(n)).catch(() => null);
  if (r === null || !r.isDirectory()) return !1;
  return tKe(n);
}
async function tKe(n) {
  if (O() !== "windows") return !0;
  let e = await w(m(n)).catch(() => null);
  return !(await b(n, e == null ? null : sp(k(e, x(n)))));
}
async function b(n, e) {
  try {
    return (await P(n), t(`[worktree] unlinked reparse point before removal: ${n}`), !1);
  } catch {}
  try {
    return (
      await N(n),
      t(`[worktree] removed reparse point or empty directory before removal: ${n}`),
      !1
    );
  } catch (r) {
    if (G(r)) return !1;
    if (E(r) !== "ENOTEMPTY") {
      let i =
        (await y(n).then(
          () => "link",
          (a) => (E(a) === "EINVAL" || G(a) ? "not-link" : "unknown")
        )) !== "not-link" || e == null
          ? null
          : await w(n)
              .then((a) => sp(a))
              .catch(() => null);
      if (i == null || (i !== e && !i.startsWith(e + T)))
        return (
          t(`[worktree] refusing to enumerate unremovable entry before removal: ${n}`, {
            level: "warn"
          }),
          !0
        );
    }
  }
  let o = await C(n, { withFileTypes: !0 }).catch((r) => (G(r) ? [] : null));
  if (o == null)
    return (
      t(`[worktree] could not enumerate ${n} before removal; not certifying`, { level: "warn" }),
      !0
    );
  let s = !1;
  for (let r of o) if (r.isSymbolicLink() || r.isDirectory()) s = (await b(k(n, r.name), e)) || s;
  return s;
}
export { sp, tGr, nGr, RXs, rGr, Zd, b7, qSt, fgn, sGt, rGo, oGr, PU, oGo, sGo, HQn, pgn, tKe };

//# sourceMappingURL=chunk-65jwz3rm.js.map
