// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { In, dl } from "./chunk-h5gbmqm1.js";
import { GH, U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Pl, fe } from "./chunk-xe386mry.js";
import { ie, t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { i } from "./chunk-cj37hmns.js";
import { Z8r } from "./chunk-afxq0vrk.js";
import { wB } from "./chunk-njpzwa1b.js";
import { homedir as u } from "os";
import {
  dirname as f,
  extname as S,
  isAbsolute as g,
  join as w,
  normalize as h,
  parse as v,
  posix as p,
  relative as A,
  resolve as _,
  sep as m,
  win32 as y
} from "path";
import * as l from "path/win32";
class c {
  shellConfig = null;
  bashToolShellPath = null;
  resolvedBashToolShellPath = void 0;
  powerShellProvider = null;
  powerShellPluginBinPaths = null;
  powerShellPath = null;
  resolvedPowerShellPath = void 0;
  organizationsPowerShellPath = null;
  gitBashPath = void 0;
  windowsShellLauncherUsable = null;
  warnedShortTmpDir = !1;
}
var b = new W(() => new c());
function jfe() {
  return b.of(U().host);
}
function mlr() {
  return jfe().resolvedBashToolShellPath;
}
function glr() {
  if (O() === "windows") {
    let e = nee();
    if (e) ((process.env.SHELL = e), t(`Using bash path: "${e}"`));
    else t("Git Bash not found; BashTool will be unavailable");
  }
}
function nee() {
  let e = jfe();
  if (e.gitBashPath === void 0) e.gitBashPath = x();
  return e.gitBashPath;
}
function x() {
  let { existsSync: e } = ie();
  if (i.CLAUDE_CODE_GIT_BASH_PATH) {
    let o = l.basename(i.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase(),
      s = ["bash.exe", "sh.exe", "bash", "sh"].includes(o);
    if (s && e(i.CLAUDE_CODE_GIT_BASH_PATH)) return i.CLAUDE_CODE_GIT_BASH_PATH;
    t(
      `CLAUDE_CODE_GIT_BASH_PATH "${i.CLAUDE_CODE_GIT_BASH_PATH}" ${s ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`,
      { level: "warn" }
    );
  }
  let r = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (let o of r) if (e(o)) return o;
  let n = Z8r("git");
  if (n) {
    let o = l.join(n, "..", "..", "bin", "bash.exe");
    if (e(o)) return o;
  }
  return null;
}
function hlr(e, r) {
  if (!l.isAbsolute(r)) return;
  let n = l.dirname(r),
    o = Object.keys(e).find((a) => a.toUpperCase() === "PATH") ?? "PATH",
    s = e[o];
  e[o] = s ? n + l.delimiter + s : n;
}
function ylr(e) {
  let r = e.trim(),
    n = "",
    o = 0;
  while (o < r.length) {
    let s = r[o];
    if (s === '"' || s === "'") {
      let a = r.indexOf(s, o + 1);
      if (a === -1) {
        ((n += r.slice(o + 1)), (o = r.length));
        break;
      }
      ((n += r.slice(o + 1, a)), (o = a + 1));
    } else if (s === "\\" && o + 1 < r.length) ((n += r[o + 1]), (o += 2));
    else if (/\s/.test(s)) break;
    else ((n += s), o++);
  }
  return n.endsWith(".sh") ? `bash ${e}` : e;
}
var $H = wB(
    (e) => {
      if (e.startsWith("\\\\")) return e.replaceAll("\\", "/");
      let r = e.match(/^([A-Za-z]):[/\\]/);
      if (r) return "/" + r[1].toLowerCase() + e.slice(2).replaceAll("\\", "/");
      return e.replaceAll("\\", "/");
    },
    (e) => e,
    500
  ),
  $se = wB(
    (e) => {
      if (e.startsWith("//")) return e.replaceAll("/", "\\");
      let r = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
      if (r) {
        let o = r[1].toUpperCase(),
          s = e.slice(("/cygdrive/" + r[1]).length);
        return o + ":" + (s || "\\").replaceAll("/", "\\");
      }
      let n = e.match(/^\/([A-Za-z])(\/|$)/);
      if (n) {
        let o = n[1].toUpperCase(),
          s = e.slice(2);
        return o + ":" + (s || "\\").replaceAll("/", "\\");
      }
      return e.replaceAll("/", "\\");
    },
    (e) => e,
    500
  );
class Fse extends Error {
  constructor() {
    super("Path contains null bytes");
    this.name = "NullBytePathError";
  }
}
function ykn(e) {
  if (e.includes("\x00")) throw new Fse();
}
function ut(e, r) {
  let n = P(e, r ?? Pl());
  if (n === null) throw new GH();
  return n;
}
function P(e, r) {
  if (typeof e !== "string") throw TypeError(`Path must be a string, received ${typeof e}`);
  if (r !== null && typeof r !== "string")
    throw TypeError(`Base directory must be a string, received ${typeof r}`);
  if ((ykn(e), r !== null)) ykn(r);
  let n = e.trim();
  if (!n) return r === null ? null : In(h(r));
  if (n === "~") return In(u());
  if (n.startsWith("~/")) return In(w(u(), n.slice(2)));
  let o = n;
  if (O() === "windows" && n.match(/^\/[a-z]\//i))
    try {
      o = $se(n);
    } catch {
      o = n;
    }
  if (g(o)) return In(h(o));
  return r === null ? null : In(_(r, o));
}
class hSe extends Error {
  constructor() {
    super('Path ends in white space once its "." and ".." are resolved');
    this.name = "UnstablePathError";
  }
}
function Ib(e, r) {
  let n = ut(e, r);
  if (ut(n, r) !== n) throw new hSe();
  return n;
}
function Y4e(e) {
  return g(e) && (m === p.sep || v(e).root.length > 1);
}
function YS(e, r) {
  try {
    return P(e, r ?? Pl());
  } catch {
    return null;
  }
}
function W4t(e) {
  let r = A(fe(), e);
  return r.startsWith("..") ? e : r;
}
function p6(e) {
  let r = ut(e);
  if (dl(r)) return f(r);
  try {
    if (ie().statSync(r).isDirectory()) return r;
  } catch {}
  return f(r);
}
function q0(e) {
  return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function os(e) {
  let r = u();
  if (e === r) return "~";
  if (e.startsWith(r + m)) return "~" + e.slice(r.length);
  return e;
}
function wq(e) {
  let r = h(e);
  if (O() === "windows") return r.replaceAll("\\", "/");
  return r;
}
function sP(e) {
  return S(e).toLowerCase() === ".ipynb";
}
function j8r(e, r = "linux") {
  if ((r === "win32" ? y.isAbsolute : p.isAbsolute)(e)) return e;
  if (e === "~" || e.startsWith("~/") || (r === "win32" && e.startsWith("~\\")))
    return d(u(), e.slice(2), r);
  if (r === "win32" && /^[a-zA-Z]:/.test(e)) return e;
  return d(fe(), e, r);
}
function d(e, r, n) {
  if (r === "") return e;
  if (n === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) return e + r;
  return e + (n === "win32" ? "\\" : "/") + r;
}
export {
  jfe,
  mlr,
  glr,
  nee,
  hlr,
  ylr,
  $H,
  $se,
  Fse,
  ykn,
  ut,
  hSe,
  Ib,
  Y4e,
  YS,
  W4t,
  p6,
  q0,
  os,
  wq,
  sP,
  j8r
};

//# sourceMappingURL=chunk-jtb5bzvb.js.map
