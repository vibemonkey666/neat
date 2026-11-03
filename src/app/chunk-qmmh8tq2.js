// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ZZ, MAt, L$e, uT, _d, tfi } from "./chunk-8w2npe9a.js";
import { Hn } from "./chunk-acd8w9vv.js";
import { R, Qe, N, E, Fs } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { r9r } from "./chunk-xe386mry.js";
import { bt, Kg, Wy, ma, t } from "./chunk-4kxznmzw.js";
import { Ze } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { Ko, _n, elr, Cst } from "./chunk-cjnzngfc.js";
import { wo } from "./chunk-rnxkk435.js";
import { Ekn, B$e } from "./chunk-jfndk7eh.js";
import { constants as Dt } from "buffer";
import { basename as X } from "path";
import { homedir as Ke } from "os";
import { sep as Ye } from "path";
function N4t(e) {
  return;
}
var akn = "<user-code>";
function Xe() {
  try {
    return Ke();
  } catch {
    return "";
  }
}
var fe = "cli",
  pe = new Set(["cli.js", fe, "sdk.mjs", "browser-sdk.js", "agentSdk.js"]),
  me = /^chunk-[0-9a-z]+\.js$/;
function ge(e) {
  return e[0] === "/" && me.test(e.slice(1));
}
function _e(e) {
  return ge(e) || (e[0] === "/" && pe.has(e.slice(1)));
}
function Lui(e) {
  return ge(e) ? "/" + fe : e;
}
var ze = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;
function Ee(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return ze.test(n);
}
function qe(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (Ee(n)) return A8r(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let r = Xe();
  if (r && n.startsWith(r + Ye)) n = "~" + n.slice(r.length);
  return n;
}
var et = ["src/", "packages/"];
function A8r(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1);
}
function Xar(e) {
  return _e(e.file) || et.some((n) => e.file.startsWith(n));
}
var tt = ["node:", "bun:", "internal:"],
  nt = new Set([
    "native",
    "unknown",
    "ws",
    "undici",
    "node-fetch",
    "isomorphic-fetch",
    "vercel_fetch",
    "utf-8-validate"
  ]);
function he(e) {
  return nt.has(e) || tt.some((n) => e.startsWith(n));
}
function vZo(e) {
  return he(e.file);
}
function Nui(e) {
  let n = e.find((r) => !vZo(r));
  if (n === void 0) return e.length >= Te;
  return n.file === akn || n.file.startsWith("node_modules/");
}
function $ui(e) {
  return _e(e.file) && (e.function == null || e.function === "<anonymous>");
}
function rt(e) {
  let n = e.split(/[/\\]/),
    r = -1;
  for (let d = n.length - 1; d >= 0; d--)
    if (n[d] === "node_modules") {
      r = d;
      break;
    }
  if (r === -1 || r >= n.length - 1) return null;
  let o = n[r + 1],
    s;
  if (o.startsWith("@")) {
    if (r + 2 >= n.length) return null;
    s = `${o}/${n[r + 2]}`;
  } else s = o;
  let u = n.at(-1);
  if (!u) return null;
  return `node_modules/${s}/${u}`;
}
function ot(e) {
  let n = qe(e),
    r = A8r(n),
    o = rt(n);
  if (
    (pe.has(r) && (o === null || o.startsWith("node_modules/@anthropic-ai/"))) ||
    (Ee(e) && me.test(r))
  )
    return "/" + r;
  let s = null;
  if (s) return s;
  if (he(n)) return n;
  return akn;
}
function st(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let r = n.slice(3),
    o = r.indexOf(" ("),
    s,
    u;
  if (o !== -1 && r.endsWith(")")) ((s = r.slice(0, o).trim()), (u = r.slice(o + 2, -1)));
  else u = r.trim();
  if (s) {
    if (
      ((s = s.replace(/^async\s+/, "").replace(/^new\s+/, "")),
      (s = s.replace(/\s*\[as\s+[^\]]+\]$/, "")),
      !s)
    )
      s = void 0;
  }
  let d = u.match(/^(.*):(\d+):(\d+)$/);
  if (!d) return null;
  let [, c, m, f] = d,
    g = ot(c);
  return { file: g, line: Number(m), column: Number(f), function: g === akn && s ? akn : s };
}
var Te = 50;
function lkn(e, n = Te) {
  let r = [];
  for (let o of $4t(e).split(`
`)) {
    let s = st(o);
    if (s) {
      if ((r.push(s), r.length >= n)) break;
    }
  }
  return r;
}
function $4t(e) {
  let n = typeof e.stack === "string" ? e.stack : "",
    r = typeof e.message === "string" ? e.message : "",
    o = ut(n, e.name, r);
  return o === -1 ? n : n.slice(o + 1);
}
function ut(e, n, r) {
  let o = (u) =>
    u !== "" &&
    e.startsWith(`${u}
`);
  if (r !== "") {
    let u = typeof n === "string" && n !== "" ? `${n}: ${r}` : "";
    if (u !== "" && o(u)) return u.length;
    let d = `: ${r}`,
      c = e.indexOf(`${d}
`);
    return c > 0 &&
      !e.slice(0, c).includes(`
`)
      ? c + d.length
      : n === "" && o(r)
        ? r.length
        : -1;
  }
  let s =
    n === void 0
      ? "Error"
      : typeof n === "string"
        ? n
        : typeof n === "number" || typeof n === "boolean" || typeof n === "bigint" || n === null
          ? String(n)
          : "";
  return o(s) ? s.length : -1;
}
function Se(e, n) {
  try {
    let r = typeof e.stack === "string" ? e.stack : "",
      o = $4t(e),
      u =
        o.length < r.length && r.endsWith(o)
          ? o.replace(/\n$/, "").split(`
`)
          : [],
      d = u.every((c) => c.trimStart().startsWith("at ")) ? u : [];
    ((e.stack = [`${e.name}: ${n}`, ...d].join(`
`)),
      (e.message = n));
  } catch {}
  return e;
}
function Fui(e, n) {
  return [
    `${e.name}: ${e.message}`,
    ...n.map((r) => {
      let o = `${r.file}${r.line ? `:${r.line}` : ""}${r.column ? `:${r.column}` : ""}`;
      return r.function ? `    at ${r.function} (${o})` : `    at ${o}`;
    })
  ].join(`
`);
}
import { isAbsolute as dt, parse as at, sep as lt } from "path";
class fSe {
  #e;
  constructor(e) {
    this.#e = e;
  }
  get path() {
    return this.#e;
  }
  static filesystemRoot() {
    return new fSe(at(process.execPath).root || lt);
  }
  static forTests(e) {
    if (!dt(e)) throw Error("a test start folder must be absolute");
    return new fSe(e);
  }
}
function Oe(e, n, r, o) {
  let s = { ...o };
  for (let u of Object.keys(o)) if (/^(?:OLD)?PWD$/i.test(u)) delete s[u];
  return { cwd: e.path, args: ["-C", n, ...r], env: s };
}
var wst = "CLAUDE_CODE_FOUND_REPOSITORY_GIT";
import { mkdir as pt } from "fs/promises";
import { homedir as mt } from "os";
import { basename as Ne, delimiter as V, dirname as j, isAbsolute as gt, resolve as K } from "path";
var C8r = `f() { git --git-dir="$1" for-each-ref --format='%(objectname)'; }; f`;
import { delimiter as ft } from "path";
function R8r(e) {
  return e.includes(ft) ? null : e;
}
function RAt() {
  return i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}
var Lse = "--upload-pack=git-upload-pack",
  Uui = ["-c", `core.alternateRefsCommand=${C8r}`];
function dkn() {
  return O() === "windows" ? "\\\\.\\NUL" : "/dev/null";
}
var _t = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i,
  Et = [
    "applypatch-msg",
    "pre-applypatch",
    "post-applypatch",
    "pre-commit",
    "pre-merge-commit",
    "prepare-commit-msg",
    "commit-msg",
    "post-commit",
    "pre-rebase",
    "post-checkout",
    "post-merge",
    "pre-push",
    "pre-receive",
    "update",
    "proc-receive",
    "post-receive",
    "post-update",
    "reference-transaction",
    "push-to-checkout",
    "pre-auto-gc",
    "post-rewrite",
    "sendemail-validate",
    "fsmonitor-watchman",
    "p4-changelist",
    "p4-prepare-changelist",
    "p4-post-changelist",
    "p4-pre-submit",
    "post-index-change"
  ],
  x8r = Et.map((e) => [`hook.${e}.enabled`, "false"]);
function G4e() {
  return [
    ["core.fsmonitor", ""],
    ["core.hooksPath", dkn()],
    ["core.askPass", ""],
    ["protocol.ext.allow", "never"],
    ["submodule.recurse", "false"],
    ["log.showSignature", "false"],
    ["format.pretty", "medium"],
    ["gc.auto", "0"],
    ["maintenance.auto", "false"],
    ...x8r
  ];
}
var ht = new Set(["core.hooksPath", "core.askPass", "submodule.recurse", ...x8r.map(([e]) => e)]),
  P8r = { GIT_NO_LAZY_FETCH: "1", GIT_NO_REPLACE_OBJECTS: "1", GIT_TERMINAL_PROMPT: "0", ...elr };
function EZo(e, { allowGitTerminalPrompt: n = !1 } = {}) {
  return Ko(P8r, (r, o) => !(n && o === "GIT_TERMINAL_PROMPT") && !Ot(e, o));
}
function yxe(
  e,
  n,
  r,
  o = r.GIT_CONFIG_COUNT,
  { allowRepoGitHooks: s = !1, allowGitTerminalPrompt: u = !1 } = {}
) {
  let d = Ne(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(d)) return null;
  let c = s ? G4e().filter(([f]) => !ht.has(f)) : G4e(),
    m = ye(n).map((f) => n[f]);
  return {
    args: c
      .filter(([f]) => !m.some((g) => g.startsWith(`${f}=`)))
      .flatMap(([f, g]) => ["-c", `${f}=${g}`])
      .concat(St(n)),
    env: {
      ...r,
      ...EZo(r, { allowGitTerminalPrompt: u }),
      ...u2(o, c),
      GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? ""
    }
  };
}
var Tt = new Set([
  "-C",
  "--git-dir",
  "--work-tree",
  "--namespace",
  "--super-prefix",
  "--config-env",
  "--attr-source",
  "--exec-path"
]);
function ye(e) {
  let n = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) (n.push(r + 1), (r += 2));
    else if (Tt.has(o) && r + 1 < e.length) r += 2;
    else if (o.startsWith("-")) r += 1;
    else break;
  }
  return n;
}
function St(e) {
  let n = [...e];
  for (let r of ye(n)) if (_t.test(n[r])) n[r] = `core.hooksPath=${dkn()}`;
  return n;
}
var XZ = { GIT_TERMINAL_PROMPT: "0", GIT_ASKPASS: "", GCM_INTERACTIVE: "never" };
function Bui(e) {
  let n = {};
  for (let [r, o] of Object.entries(XZ)) if (RR(e, r) === void 0) n[r] = o;
  return n;
}
function vst(e = process.env) {
  return {
    ...e,
    ...S(e, (n, r) => Object.hasOwn(XZ, n) && r !== n),
    ...XZ,
    ...u2(RR(e, "GIT_CONFIG_COUNT"), [["credential.interactive", "false"]], e)
  };
}
function S(e, n) {
  let r = {};
  for (let o of Object.keys(e)) if (n(o.toUpperCase(), o)) r[o] = void 0;
  return r;
}
function RR(e, n) {
  if (e[n] !== void 0 || O() !== "windows") return e[n];
  for (let [r, o] of Object.entries(e)) if (r.toUpperCase() === n && o !== void 0) return o;
  return;
}
function Ot(e, n) {
  if (Object.hasOwn(e, n)) return !0;
  return O() === "windows" && Object.keys(e).some((r) => r.toUpperCase() === n);
}
function u2(e, n, r = {}) {
  let o = Number(e),
    s = Number.isInteger(o) && o > 0 ? o : 0,
    u = { GIT_CONFIG_COUNT: String(s + n.length) };
  n.forEach(([c, m], f) => {
    ((u[`GIT_CONFIG_KEY_${s + f}`] = c), (u[`GIT_CONFIG_VALUE_${s + f}`] = m));
  });
  let d = new Set(Object.keys(u));
  return { ...S(r, (c, m) => d.has(c) && !d.has(m)), ...u };
}
var z4e = ["-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes"],
  xt = "-o BatchMode=yes -o StrictHostKeyChecking=yes",
  Nt = "-o BatchMode=yes",
  Ce = "-batch";
function yt(e, n) {
  switch (e) {
    case "ssh":
      return n ? xt : Nt;
    case "plink":
      return Ce;
    case "other":
      return;
  }
}
function ckn(e, n) {
  let r = O() === "windows" ? e.replace(/\\/g, "/") : e;
  return `CDPATH= cd -- ${wo([r])} 2>/dev/null || cd / || exit 1; ${n}`;
}
function Est() {
  let e = "";
  try {
    e = mt();
  } catch {}
  return gt(e) ? e : K("/");
}
function kZo(e, n) {
  if (e !== void 0 && e !== "auto") return e;
  let r = Ct(n)
    .toLowerCase()
    .replace(/\.exe$/, "");
  return ["ssh", "plink", "tortoiseplink"].includes(r) ? r : "auto";
}
function Ct(e) {
  let n = "",
    r,
    o = !0;
  for (let u = 0; u < e.length; u++) {
    let d = e[u],
      c;
    if (r === void 0 && /[ \t\n\r]/.test(d)) o = !1;
    else if (r === void 0 && (d === "'" || d === '"')) r = d;
    else if (d === r) r = void 0;
    else if (d === "\\" && r !== "'") {
      if ((u++, u >= e.length)) return "";
      c = e[u];
    } else c = d;
    if (o && c !== void 0) n += c;
  }
  if (r !== void 0) return "";
  let s = O() === "windows" ? /[\\/]/ : /\//;
  return (
    n
      .split(s)
      .filter((u) => u !== "")
      .at(-1) ?? ""
  );
}
function we(e, n) {
  return {
    ...e,
    ...S(e, (r) => r === "GIT_SSH_COMMAND" || r === "GIT_SSH"),
    GIT_SSH: void 0,
    GIT_SSH_COMMAND: n
  };
}
function Jar(e, n, { strictHostKeys: r = !0 } = {}) {
  let { chosen: o, named: s } = Y(e, n),
    u = yt(s === void 0 ? "ssh" : wt(e, s), r);
  if (u === void 0 || (u === Ce && vt(o))) return { command: o, env: e };
  let d = `${o} ${u}`;
  return { command: d, env: we(e, d) };
}
function Y(e, n) {
  let r = J(RR(e, "GIT_SSH_COMMAND")) ?? J(n),
    o = J(RR(e, "GIT_SSH"));
  return { chosen: r ?? wo([o ?? "ssh"]), named: r !== void 0 ? It(r) : o };
}
function jui(e, n) {
  let r = RR(e, "GIT_SSH_VARIANT"),
    { chosen: o, named: s } = Y(e, n);
  return (r === void 0 || r === "auto") &&
    s !== void 0 &&
    !["ssh", "plink", "tortoiseplink"].includes(ve(s))
    ? o
    : void 0;
}
async function Wui(e, n) {
  if (O() !== "windows") return e;
  let r = RR(e, "GIT_SSH_COMMAND");
  if (r !== void 0) return r.trim() === "" ? e : Jar(e, void 0, { strictHostKeys: !1 }).env;
  let o = await n(["config", "--null", "--get", "core.sshCommand"]),
    s = o.exitCode === 0 && o.stdout.includes("\x00") ? Ze(o.stdout, "\x00") : void 0;
  if (s?.trim() === "") return e;
  return Jar(e, s, { strictHostKeys: !1 }).env;
}
function J(e) {
  return e !== void 0 && e.trim() !== "" ? e : void 0;
}
function wt(e, n) {
  let r = RR(e, "GIT_SSH_VARIANT");
  if (r !== void 0 && r !== "auto")
    return r === "plink"
      ? "plink"
      : ["putty", "tortoiseplink", "simple"].includes(r)
        ? "other"
        : "ssh";
  let o = ve(n);
  return o === "ssh" || o === "plink" ? o : "other";
}
function ve(e) {
  return Ne(e.trim().replace(/\\/g, "/"))
    .toLowerCase()
    .replace(/\.exe$/, "");
}
function vt(e) {
  let n = e.trim().match(/^(?:"[^"]*"|'[^']*'|\S+)/)?.[0] ?? "";
  return /(?:^|\s)-batch(?:\s|$)/.test(e.trim().slice(n.length));
}
function It(e) {
  let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return n?.[1] ?? n?.[2] ?? n?.[3] ?? "";
}
var Pt = [
  "-c",
  "protocol.ext.allow=never",
  "-c",
  "protocol.fd.allow=never",
  "-c",
  "protocol.git.allow=never",
  "-c",
  "protocol.ftp.allow=never",
  "-c",
  "protocol.ftps.allow=never"
];
function At(e) {
  return { ...e, ...S(e, (n) => n === "GIT_ALLOW_PROTOCOL"), GIT_ALLOW_PROTOCOL: void 0 };
}
function Rt(e) {
  let n = RR(e, "GIT_ALLOW_PROTOCOL");
  if (n === void 0) return [];
  let r = new Set(n.split(":"));
  return ["https", "http", "ssh", "file"]
    .filter((o) => !r.has(o))
    .flatMap((o) => ["-c", `protocol.${o}.allow=never`]);
}
function Ft(e) {
  return [...Pt, ...Rt(e)];
}
var Gt = ["-c", "init.defaultRefFormat=files"],
  xe = { GIT_DEFAULT_REF_FORMAT: "files" };
function kt(e = vst(Lt()), n) {
  let r = [...Ft(e), ...Gt],
    o = RR(e, "GIT_SSH_VARIANT"),
    s =
      o === void 0 || o === "auto"
        ? {
            ...e,
            ...S(e, (u) => u === "GIT_SSH_VARIANT"),
            GIT_SSH_VARIANT: kZo(n.variant, Y(e, n.command).chosen)
          }
        : e;
  return {
    pinArgs: r,
    inCheckoutArgs: [..._n, ...z4e, ...r],
    env: {
      ...we(At(s), ckn(Est(), Jar(s, n.command).command)),
      ...S(e, (u, d) => Object.hasOwn(elr, u) && d !== u),
      ...elr,
      ...S(e, (u, d) => Object.hasOwn(xe, u) && d !== u),
      ...xe
    }
  };
}
function Lt() {
  let e = new Set(Cst),
    n = process.env;
  return { ...n, ...S(n, (r) => e.has(r)), ...Object.fromEntries([...e].map((r) => [r, void 0])) };
}
function _xe(e, n) {
  let r = kt(void 0, n);
  return { ...r, env: { ...r.env, GIT_CEILING_DIRECTORIES: Ie(j(e)) } };
}
function Qar(e) {
  let n = {};
  for (let r of [...Object.keys(XZ), "GIT_CEILING_DIRECTORIES"]) {
    let o = e[r];
    if (o !== void 0) n[r] = o;
  }
  return n;
}
function Ie(e) {
  let n = R8r(K(e));
  if (n === null)
    throw new R(
      `Cannot run git under ${K(e)}: its path contains "${V}", which git's discovery ceiling (a "${V}"-separated list) cannot express. Use a location without "${V}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`,
      "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible"
    );
  return n;
}
async function xAt(e, n) {
  let r = j(e);
  return (
    await pt(r, { recursive: !0 }),
    { cwd: r, env: { ...n, GIT_CEILING_DIRECTORIES: Ie(j(r)) } }
  );
}
var Mt = 1000,
  $t = 60;
function Zar(
  e,
  {
    abortSignal: n,
    timeout: r = 10 * $t * Mt,
    input: o,
    stdio: s = ["ignore", "pipe", "pipe"],
    useToolMemoryCgroup: u
  } = {}
) {
  n?.throwIfAborted();
  using d = Wy`exec: ${e.slice(0, 200)}`;
  try {
    let c = tfi(e, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: r,
      cwd: r9r(),
      stdio: s,
      reject: !1,
      input: o,
      useToolMemoryCgroup: u
    });
    if (!c.stdout) return null;
    return c.stdout.trim() || null;
  } catch {
    return null;
  }
}
var z = 1000,
  Z = 60,
  H$e = "/proc/self/fd/3";
function it(e, n, r = { timeout: 10 * Z * z, preserveOutputOnError: !0, useCwd: !0 }) {
  return Le(() =>
    ct(e, n, {
      allowRepoGitHooks: r.allowRepoGitHooks,
      allowGitTerminalPrompt: r.allowGitTerminalPrompt,
      abortSignal: r.abortSignal,
      timeout: r.timeout,
      preserveOutputOnError: r.preserveOutputOnError,
      cwd: r.cwd ?? (r.useCwd && !uT() ? r9r() : void 0),
      env: r.env,
      extendEnv: r.extendEnv,
      stdin: r.stdin,
      input: r.input,
      stdout: r.stdout,
      stderr: r.stderr,
      maxBuffer: r.maxBuffer,
      stripFinalNewline: r.stripFinalNewline,
      useToolMemoryCgroup: r.useToolMemoryCgroup,
      toolCgroupClass: r.toolCgroupClass,
      waitForExitAfterKill: r.waitForExitAfterKill,
      inheritFd: r.inheritFd,
      gitStartsIn: r.gitStartsIn
    })
  );
}
async function Le(e) {
  try {
    return await e();
  } catch (n) {
    return (l(n), { stdout: "", stderr: "", code: 1, error: N(n).message });
  }
}
function ct(e, n, r) {
  return Le(() => (r === void 0 ? ke(e, n) : ke(e, n, r)));
}
function q(e) {
  if (e <= 1) return;
  try {
    process.kill(-e, "SIGTERM");
  } catch {}
}
var Bt = 6000,
  Ut = 2000;
function Ht(e, n, r) {
  let o,
    s = () => {
      (q(n),
        (o = setTimeout(
          ({ stdout: u, stderr: d }) => {
            (u?.destroy(), d?.destroy());
          },
          Ut,
          e
        )));
    };
  if (r.aborted) s();
  else r.addEventListener("abort", s, { once: !0 });
  return () => {
    (r.removeEventListener("abort", s), clearTimeout(o));
  };
}
var Wt = 5000;
function Vt(e, n, r, o, s) {
  let u,
    d = !1,
    c = () => {
      if (e.exitCode !== null || e.signalCode !== null) return;
      Promise.resolve()
        .then(() => o(n))
        .catch(() => !1)
        .then((m) => {
          if (d) return;
          if (!m) {
            s.abort(r.reason);
            return;
          }
          u = setTimeout(
            (f, g, { stdout: _, stderr: w }) => {
              (f.abort(g), _?.destroy(), w?.destroy());
            },
            Wt,
            s,
            r.reason,
            e
          );
        });
    };
  if (r.aborted) c();
  else r.addEventListener("abort", c, { once: !0 });
  return () => {
    ((d = !0), r.removeEventListener("abort", c), clearTimeout(u));
  };
}
async function Jt(e, n) {
  if (e.pid === void 0 || e.exitCode !== null || e.signalCode !== null) return;
  await Pe(new Promise((r) => e.once("exit", () => r())), n);
}
function Ae(e) {
  return (
    E(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" ||
    e?.isMaxBuffer === !0 ||
    e?.name === "MaxBufferError"
  );
}
var A = {
  cwd: "execFileNoThrow spawn rejected: null byte in cwd",
  file: "execFileNoThrow spawn rejected: null byte in executable path",
  argv: "execFileNoThrow spawn rejected: null byte in argv",
  envName: "execFileNoThrow spawn rejected: null byte in env name",
  envValue: "execFileNoThrow spawn rejected: null byte in env value"
};
function jt(e, n, r, o, s, u) {
  let d = `the runtime rejected ${Me(X(e))} because`;
  if (typeof r === "string" && r.includes("\x00"))
    return { telemetry: A.cwd, local: `${d} the working directory contains a null byte (\\0)` };
  if (e.includes("\x00"))
    return { telemetry: A.file, local: `${d} the executable path contains a null byte (\\0)` };
  let c = n.findIndex((_) => typeof _ === "string" && _.includes("\x00"));
  if (c !== -1)
    return {
      telemetry: A.argv,
      local: `${d} the argument at index ${c} (zero-based) contains a null byte (\\0)`
    };
  let m = Object.entries({ ...s, ...o }).filter(([, _]) => _ !== void 0),
    f = m.find(([_]) => _.includes("\x00"));
  if (f !== void 0)
    return {
      telemetry: A.envName,
      local: `${d} the name of environment variable ${Fe(f[0])} contains a null byte (\\0)${Re(f, u)}`
    };
  let g = m.find(([, _]) => typeof _ === "string" && _.includes("\x00"));
  return (
    g && {
      telemetry: A.envValue,
      local: `${d} the value of environment variable ${Fe(g[0])} contains a null byte (\\0)${Re(g, u)}`
    }
  );
}
function Re([e, n], r) {
  return r[e] === n
    ? "; every program this process starts will fail the same way until that variable is removed from its environment"
    : " (in the env passed for this command)";
}
var be = 200;
function Kt(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function Me(e) {
  return ma(e)
    .slice(1, -1)
    .replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Fe(e) {
  let n = e.indexOf("="),
    r = n === -1 ? e : e.slice(0, n),
    o = r.length > be,
    s = `"${Me(o ? r.slice(0, be) : r)}"${o ? "\u2026" : ""}`;
  return n === -1 ? s : `${s} (then '=' and ${Kt(e.length - n - 1)}, not shown)`;
}
var Yt = new Set(["EPIPE", "ECONNRESET", "ENOTCONN", "EOF"]);
function Xt(e) {
  let n = {},
    r;
  try {
    r = e.stdin;
  } catch {
    return n;
  }
  if (!r) return n;
  return (
    r.removeAllListeners("error"),
    r.on("error", (o) => {
      let s = E(o) ?? "unknown";
      if (Yt.has(s)) return;
      ((n.truncatedBy ??= s), e.kill());
    }),
    n
  );
}
function zt(e, n) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(n);
}
function Zt(e, n) {
  if (
    !Fs(n) ||
    n.code === void 0 ||
    typeof n.syscall !== "string" ||
    !n.syscall.startsWith("spawn") ||
    e.exitCode !== void 0 ||
    e.timedOut ||
    e.isCanceled ||
    E(e) === n.code
  )
    return;
  return `Command failed with ${n.code}: ${e.command}
${n.message}`;
}
var qt = 3,
  Qt = 1e8;
function Ge(e, n) {
  if (e instanceof Uint8Array && n === "utf8-keep-bom")
    return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
  let r =
    e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : "";
  return n === "utf8-keep-bom" ? Buffer.from(r, "latin1").toString("utf8") : r;
}
async function ke(
  e,
  n,
  {
    abortSignal: r,
    timeout: o = 10 * Z * z,
    preserveOutputOnError: s = !0,
    cwd: u,
    env: d,
    extendEnv: c,
    maxBuffer: m,
    shell: f,
    stdin: g,
    input: _,
    stdout: w,
    stderr: M,
    stripFinalNewline: Q,
    encoding: v,
    allowRepoGitHooks: $e,
    allowGitTerminalPrompt: De,
    gitStartsIn: ee,
    useToolMemoryCgroup: Be = !0,
    toolCgroupClass: Ue = "helper",
    waitForExitAfterKill: He = !1,
    onStdoutData: te,
    inheritFd: ne,
    withoutControllingTerminal: We = !1,
    tellBeforeKill: D,
    abortEndsProcessGroup: Ve = !1
  } = { timeout: 10 * Z * z, preserveOutputOnError: !0, maxBuffer: 1e6 }
) {
  if (uT()) return { stdout: "", stderr: L$e, code: 126, error: L$e };
  let b = e,
    re = process.env,
    T = yxe(
      b,
      n,
      d === void 0 ? re : c === !1 ? d : { ...re, ...d },
      d && "GIT_CONFIG_COUNT" in d ? d.GIT_CONFIG_COUNT : i.GIT_CONFIG_COUNT,
      { allowRepoGitHooks: $e, allowGitTerminalPrompt: De }
    );
  if (T !== null && B$e(b, T.env)) return { stdout: "", stderr: Ekn, code: 127, error: Ekn };
  let I = T !== null && ee instanceof fSe && u !== void 0 ? Oe(ee, u, T.args, T.env) : null;
  if (T !== null && d?.[wst] !== void 0 && I === null) {
    let a = `${X(e)} was not started: a found repository's git must start outside the repository's folder`;
    return (t(a, { level: "error" }), { stdout: "", stderr: a, code: 1, error: a });
  }
  let Je = I?.args ?? T?.args ?? n,
    je = I?.cwd ?? u,
    B = I?.env ?? T?.env ?? d,
    U = We && O() !== "windows";
  if (U && Kg()) {
    let a = `${X(e)} was not started because Claude Code was exiting; try again after it restarts`;
    return { stdout: "", stderr: a, code: 1, error: a };
  }
  let p,
    P,
    oe,
    ie,
    se,
    H = D !== void 0 && r !== void 0 ? new AbortController() : void 0,
    W,
    ue = O() === "linux" ? { noChildLeft: !0 } : {},
    F = ue,
    de,
    x = v === "utf8-keep-bom" ? (m ?? Qt) : void 0;
  try {
    let a = MAt(b, Je, {
      signal: H?.signal ?? r,
      timeout: o,
      cwd: je,
      env: B,
      shell: f,
      ...(ne === void 0
        ? {
            stdin: g,
            ...(w === void 0 ? {} : { stdout: w }),
            ...(M === void 0 ? {} : { stderr: M })
          }
        : { stdio: [g, w, M, ne] }),
      ...(x !== void 0
        ? { maxBuffer: Math.min(x * qt, Dt.MAX_STRING_LENGTH) }
        : m === void 0
          ? {}
          : { maxBuffer: m }),
      ...(Q === void 0 ? {} : { stripFinalNewline: Q }),
      ...(v !== void 0 && v !== "utf8" && { encoding: "latin1" }),
      ...(I !== null ? { extendEnv: !1 } : c === void 0 ? {} : { extendEnv: c }),
      ...(Be ? _d(Ue) : {}),
      ...(U && { detached: !0 }),
      reject: !1
    });
    if (
      ((F = a.pid === void 0 ? ue : {}),
      D !== void 0 && r !== void 0 && H !== void 0 && a.pid !== void 0)
    )
      ie = Vt(a, a.pid, r, D, H);
    if (((P = U ? a.pid : void 0), P !== void 0)) {
      let h = P;
      if (Ve && r !== void 0) se = Ht(a, h, r);
      let y = () => q(h),
        C = bt(y),
        L = ZZ(y, { alwaysLast: !0 });
      oe = () => {
        (C(), L());
      };
    }
    if (
      (a.once("error", (h) => {
        de = h;
      }),
      (W = _ === void 0 ? void 0 : Xt(a)),
      _ !== void 0 && a.pid !== void 0)
    )
      a.stdin?.end(_);
    if (te && a.pid !== void 0)
      a.stdout?.on("data", (h) => {
        try {
          te(h.toString());
        } catch (y) {
          l(y);
        }
      });
    if (((p = await a), He && p.exitCode === void 0 && (r?.aborted === !0 || p.timedOut)))
      await Jt(a, Bt);
  } catch (a) {
    let h = a.message;
    if (Fs(a))
      return (
        t(`execFileNoThrow spawn failed: ${E(a)} ${h}`, { level: "error" }),
        { stdout: "", stderr: "", code: 1, ...F }
      );
    else if (Ae(a))
      return (
        t(`execFileNoThrow maxBuffer exceeded: ${h}`, { level: "error" }),
        { stdout: "", stderr: "", code: 1, maxBufferExceeded: !0 }
      );
    else {
      let y = process.env,
        C =
          E(a) === "ERR_INVALID_ARG_VALUE"
            ? jt(b, n, u, B, c === !1 && B !== void 0 ? void 0 : y, y)
            : void 0;
      if (C) t(`execFileNoThrow spawn refused: ${C.local}`, { level: "error" });
      let L = N(a);
      l(Qe(C ? Se(L, C.telemetry) : L, C?.telemetry ?? "execFileNoThrow unexpected rejection"));
    }
    return { stdout: "", stderr: "", code: 1 };
  } finally {
    if ((ie?.(), se?.(), oe?.(), P !== void 0 && (p === void 0 || p.exitCode === void 0))) q(P);
  }
  if (W?.truncatedBy !== void 0) {
    let a = `stdin write failed: ${W.truncatedBy}`;
    return (
      t(`execFileNoThrow ${a}`, { level: "error" }),
      { stdout: "", stderr: "", code: 1, error: a }
    );
  }
  let G = Ge(p.stdout, v),
    k = Ge(p.stderr, v);
  if (x !== void 0 && (G.length > x || k.length > x))
    return s
      ? {
          stdout: G.slice(0, x),
          stderr: k.slice(0, x),
          code: 1,
          error: `Command failed: ${p.command}
maxBuffer exceeded`,
          maxBufferExceeded: !0
        }
      : { stdout: "", stderr: "", code: 1, maxBufferExceeded: !0 };
  if (!p.failed) return { stdout: G, stderr: k, code: 0, exitCode: 0 };
  let ce = Ae(p) ? { maxBufferExceeded: !0 } : {},
    ae = p.timedOut ? { timedOut: !0 } : {};
  if (!s)
    return {
      stdout: "",
      stderr: "",
      code: p.exitCode ?? 1,
      exitCode: p.exitCode,
      ...ce,
      ...ae,
      ...F
    };
  let le = p.exitCode ?? 1;
  return {
    stdout: G,
    stderr: k,
    code: le,
    error: Zt(p, de) ?? zt(p, le),
    exitCode: p.exitCode,
    ...ce,
    ...ae,
    ...F
  };
}
export {
  N4t,
  akn,
  Lui,
  A8r,
  Xar,
  vZo,
  Nui,
  $ui,
  lkn,
  $4t,
  Fui,
  fSe,
  wst,
  C8r,
  R8r,
  RAt,
  Lse,
  Uui,
  dkn,
  x8r,
  G4e,
  P8r,
  EZo,
  yxe,
  XZ,
  Bui,
  vst,
  RR,
  u2,
  z4e,
  ckn,
  Est,
  kZo,
  Jar,
  jui,
  Wui,
  _xe,
  Qar,
  xAt,
  Zar,
  H$e,
  it,
  ct
};

//# sourceMappingURL=chunk-qmmh8tq2.js.map
