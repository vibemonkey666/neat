// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, ke, kC, Bxe, Ol } from "./chunk-wrtp8qz8.js";
import { R, d, E, G } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { DB, _T, gl, Sg, Uq, imi, pE, dJr, hcr, Kxe, qSe, xf } from "./chunk-h5gbmqm1.js";
import { hr } from "./chunk-dc0nzty2.js";
import { bt, te, Ykn, Lb, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { g, m, f, fo } from "./chunk-brszmkb3.js";
import { rYe, Vst, rl } from "./chunk-cj37hmns.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { L$e, uT, _d } from "./chunk-8w2npe9a.js";
import { ct } from "./chunk-qmmh8tq2.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import {
  aSt,
  Mjr,
  dmn,
  Aet,
  dSt,
  Fd,
  BO,
  gSt,
  pJn,
  mJn,
  rLe,
  Het,
  f7,
  Gye
} from "./chunk-p56qmwgb.js";
import { Ase, d4e, bfe, jTt, w3r, v3r } from "./chunk-d54avynm.js";
import { Mt, Ve } from "./chunk-adv24f35.js";
import { Uh } from "./chunk-5rw2zfa0.js";
import { Dw, k, Fg } from "./chunk-ajtyjx88.js";
import { QV, Gj, vbe, kbe } from "./chunk-7c3thgax.js";
import { _l } from "./chunk-at88wjsn.js";
import { Yd } from "./chunk-ddpw2j06.js";
import { o2 } from "./chunk-7zgz07kc.js";
import { Mo } from "./chunk-r00j5r9s.js";
import { N8, eR, pet } from "./chunk-bqffg6mb.js";
import { LQ } from "./chunk-ssq884a9.js";
import { FD, kY } from "./chunk-14daspfw.js";
import { IY } from "./chunk-d89f5ek5.js";
import { Iy } from "./chunk-nsr849np.js";
import { H } from "./chunk-p8tprgqa.js";
import { sd } from "./chunk-6jbh8yja.js";
import { createHash as at } from "crypto";
function TBt() {
  if (_t()) return !1;
  if (U7e()) return !1;
  return K();
}
function K() {
  return k("tengu_plugin_command_source_refresh", !0);
}
var Te = 30000;
function U7e() {
  let e = Fd(),
    n = qSe(eR());
  if (O() === "windows" ? imi(e) : gl(e)) return !0;
  let r = Ie().provenLocalRoots,
    i = r.get(n);
  if (i === void 0 || !N8(i, Te)) {
    if (Uq(n, { allowLocalWsl: !0 })) return (r.delete(n), !0);
    r.set(n, Date.now());
  }
  if (xf(Le(), n)) return !1;
  return be().some((o) => xf(n, o, { foldCase: !0 }) || xf(o, n, { foldCase: !0 }));
}
function be() {
  return L([ke(), ...Ol()].flatMap((e) => [e, hr(e), QV(e)].filter((n) => n !== null)));
}
import { createHash as pe } from "crypto";
import {
  lstat as me,
  mkdir as j,
  open as $e,
  readdir as P,
  readFile as Me,
  readlink as D,
  realpath as W,
  rename as Oe,
  stat as De,
  symlink as ge,
  writeFile as he
} from "fs/promises";
import { homedir as Fe } from "os";
import {
  dirname as fe,
  isAbsolute as F,
  join as S,
  relative as z,
  resolve as se,
  sep as I
} from "path";
var Re = ["local", "npm", "github", "git", "subdir", "archive", "command", "unknown"];
function Yyt(e) {
  let n = Math.random()
    .toString(36)
    .slice(2, 2 + Q)
    .padEnd(1, "0");
  return `${Z}${e}_${Date.now()}_${n}`;
}
var Z = "temp_",
  Q = 6,
  lze = "_x",
  z0o = ".clone",
  fFr = new RegExp(`^${Z}(?:${Re.join("|")})_(\\d{10,})_[a-z0-9]{1,${Q}}(?:${lze}|\\${z0o})?$`);
function ee(e, n) {
  return `${e}${ne}${n}`;
}
var ne = ".linking-",
  _Vs = new RegExp(`\\${ne}(\\d+)$`);
import { spawn as Ce } from "child_process";
var re = 2000;
function oe(e, { cwd: n, env: r, timeoutMs: i, maxStdoutBytes: o, maxStderrBytes: a }) {
  if (uT()) return Promise.resolve({ kind: "spawn-error", message: L$e, stdout: "", stderr: "" });
  return new Promise((c) => {
    let s = "",
      u = "",
      h = 0,
      p = 0,
      w = !1,
      v = !1,
      A,
      b,
      _ = Ce(e, [], {
        shell: !0,
        cwd: n,
        env: r,
        stdio: ["ignore", "pipe", "pipe"],
        detached: O() !== "windows",
        windowsHide: !0,
        ..._d("plugin")
      }),
      Ae = bt(async () => {
        if (!w && _.pid !== void 0) await Dw(_.pid, "SIGKILL");
      });
    function C(y) {
      if (w) return;
      if (((w = !0), Ae(), clearTimeout(V), b)) clearTimeout(b);
      (_.stdout?.removeAllListeners("data"),
        _.stderr?.removeAllListeners("data"),
        _.stdout?.destroy(),
        _.stderr?.destroy(),
        c(y));
    }
    function q(y) {
      if (A) return;
      ((A = y),
        _.stdout?.removeAllListeners("data"),
        _.stderr?.removeAllListeners("data"),
        _.stdout?.pause(),
        _.stderr?.pause());
      let T = { kind: y, stdout: s, stderr: u },
        N = () => {
          if (w) return;
          if (v) {
            C(T);
            return;
          }
          let x = () => C(T);
          if ((_.once("exit", x), (b = setTimeout((B) => B(), re, x)), typeof b === "object"))
            b.unref();
        };
      if (_.pid === void 0) {
        C(T);
        return;
      }
      Dw(_.pid, "SIGKILL").then(N, N);
    }
    let V = setTimeout((y) => y("timed-out"), i, q);
    (_.stdout?.setEncoding("utf8"),
      _.stderr?.setEncoding("utf8"),
      _.stdout?.on("data", (y) => {
        if (((h += Buffer.byteLength(y)), h > o)) {
          q("stdout-overflow");
          return;
        }
        s += y;
      }),
      _.stderr?.on("data", (y) => {
        if (p >= a) return;
        ((p += Buffer.byteLength(y)), (u += y));
      }),
      _.once("error", (y) => {
        C({ kind: "spawn-error", message: y.message, stdout: s, stderr: u });
      }));
    function J(y, T) {
      if (A) return;
      if (typeof y === "number") C({ kind: "exited", exitCode: y, stdout: s, stderr: u });
      else C({ kind: "signaled", signal: T ?? "unknown", stdout: s, stderr: u });
    }
    (_.once("exit", (y, T) => {
      if (((v = !0), w || A)) return;
      if (
        (clearTimeout(V),
        (b = setTimeout((N, x, B) => N(x, B), re, J, y, T)),
        typeof b === "object")
      )
        b.unref();
    }),
      _.once("close", (y, T) => {
        J(y, T);
      }));
  });
}
import { readdir as ie, stat as He } from "fs/promises";
import { join as M } from "path";
var Mcn = ".claude-plugin",
  Zp = M(Mcn, "plugin.json"),
  aHe = "plugin.json",
  EBt = M(Mcn, "marketplace.json"),
  kBt = [
    "commands",
    "skills",
    "agents",
    "hooks",
    "themes",
    "output-styles",
    "monitors",
    "workflows"
  ],
  Ne = ["SKILL.md", ".mcp.json", ".lsp.json"],
  Vyt = [Mcn, ...kBt, ...Ne];
async function qyt(e) {
  return (await ie(e)).filter((r) => !ae(r)).some(uFr);
}
async function Dcn(e) {
  let n = (await ie(e, { withFileTypes: !0 })).filter((r) => !ae(r.name));
  if (n.some((r) => r.name === ".claude-plugin")) return e;
  if (n.length === 1 && n[0].isDirectory()) {
    let r = M(e, n[0].name);
    if (await xe(M(r, ".claude-plugin"))) return r;
    if (!uFr(n[0].name) && (await qyt(r))) return r;
  }
  return e;
}
function uFr(e) {
  return Vyt.includes(e);
}
function yVs(e) {
  return kBt.includes(e);
}
async function xe(e) {
  try {
    return (await He(e), !0);
  } catch {
    return !1;
  }
}
function ae(e) {
  return e === "__MACOSX" || e === ".DS_Store";
}
var Ue = 60,
  le = 65536,
  Ge = 65536,
  de = 500,
  ce = 268435456,
  ue = 20000,
  Be = new Set(Vyt);
async function Ke(e) {
  let n = (e.timeout ?? Ue) * 1000,
    r = Mt(e.command, 200);
  t(`Plugin command source: running \`${r}\` (timeout ${n}ms)`);
  let i = await oe(e.command, {
      cwd: Fe(),
      env: Mo(),
      timeoutMs: n,
      maxStdoutBytes: le,
      maxStderrBytes: Ge
    }),
    o = Mt(i.stderr.trim(), de),
    a = o ? ` (stderr: ${o})` : "";
  switch (i.kind) {
    case "exited":
      if (i.exitCode !== 0)
        throw new R(
          `Plugin source command \`${r}\` exited with code ${i.exitCode}` +
            (o ? `: ${o}` : " and no error output."),
          "plugin command source exited non-zero"
        );
      break;
    case "timed-out":
      throw new R(
        `Plugin source command \`${r}\` did not finish within ${n / 1000}s and was stopped.${a}`,
        "plugin command source timed out"
      );
    case "stdout-overflow":
      throw new R(
        `Plugin source command \`${r}\` printed more than ${le / 1024} KB and was stopped; it must print a single absolute path.`,
        "plugin command source exceeded the stdout cap"
      );
    case "signaled":
      throw new R(
        `Plugin source command \`${r}\` was killed by ${i.signal} before it finished.${a}`,
        "plugin command source killed by a signal"
      );
    case "spawn-error":
      throw new R(
        `Plugin source command \`${r}\` could not be started: ` + Mt(i.message, de),
        "plugin command source failed to spawn"
      );
  }
  let c = i.stdout
    .split(/\r?\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  if (c.length === 0)
    throw new R(
      `Plugin source command \`${r}\` printed nothing; it must print the absolute path of the plugin directory.`,
      "plugin command source printed nothing"
    );
  if (c.length > 1)
    throw new R(
      `Plugin source command \`${r}\` printed ${c.length} lines; it must print exactly one absolute path.`,
      "plugin command source printed multiple lines"
    );
  let s = c[0];
  if (!F(s))
    throw new R(
      `Plugin source command \`${r}\` printed \`${Mt(s, 200)}\`, which is not an absolute path.`,
      "plugin command source printed a relative path"
    );
  if ((O() === "windows" && pE(s)) || Sg(s))
    throw new wd(
      `Plugin source command \`${r}\` printed \`${Mt(s, 200)}\`, a network path (UNC or automount), which is not supported as a plugin directory.`,
      "plugin command source printed a network path"
    );
  if (Kxe(s))
    throw new wd(
      `Plugin source command \`${r}\` printed \`${Mt(s, 200)}\`, which is reached through a link onto a network location (or one that cannot be trusted); that is not supported as a plugin directory.`,
      "plugin command source printed a path through a suspect link"
    );
  let u;
  try {
    u = await W(s);
  } catch (p) {
    throw new R(
      `Plugin source command \`${r}\` printed \`${Mt(s, 200)}\`, but that path could not be resolved (${E(p) ?? "unknown error"}).`,
      "plugin command source path does not resolve"
    );
  }
  if (Sg(u) || (O() === "windows" && pE(u)))
    throw new wd(
      `Plugin source command \`${r}\` printed a path that resolves to a network location, which is not supported as a plugin directory.`,
      "plugin command source path resolves to a network path"
    );
  let h;
  try {
    h = await P(u);
  } catch (p) {
    let w = E(p);
    throw new R(
      `Plugin source command \`${r}\` printed \`${Mt(s, 200)}\`, ` +
        (w === "ENOTDIR"
          ? "which is not a directory."
          : `which could not be read as a directory (${w ?? "unknown error"}).`),
      "plugin command source path is not a readable directory"
    );
  }
  if (!h.some((p) => Be.has(p)))
    throw new R(
      `Plugin source command \`${r}\` printed \`${Mt(s, 200)}\`, but that directory has no plugin content (expected .claude-plugin/ or a commands/, skills/, agents/, hooks/, themes/, output-styles/, monitors/, workflows/, SKILL.md, .mcp.json, or .lsp.json at the top level). Nothing was installed.`,
      "plugin command source directory has no plugin content"
    );
  return (t(`Plugin command source: resolved plugin directory ${u}`), u);
}
async function we(e, n, r) {
  let i = [],
    o = 0,
    a = 0;
  async function c(s) {
    let u = await P(s, { withFileTypes: !0 });
    for (let h of u) {
      if ((a++, a > ue))
        throw new R(
          `Plugin directory has more than ${ue} entries; refusing to install it as a plugin.`,
          "plugin command source directory has too many files"
        );
      let p = S(s, h.name),
        w = await rYe(s, h);
      if (w.isDirectory) {
        if (s === e && h.name === ".git") continue;
        await c(p);
      } else if (w.isFile) {
        let v = w.size ?? (await me(p)).size;
        if ((r?.set(p, v), (o += v), o > ce))
          throw new R(
            `Plugin directory is larger than ${ce / 1048576} MB; refusing to install it as a plugin.`,
            "plugin command source directory too large"
          );
        i.push(p);
      } else if (w.isSymbolicLink) n?.push(p);
    }
  }
  return (await c(e), n?.sort(), i.sort());
}
async function je(e) {
  let n = [],
    r = new Map(),
    i = await we(e, n, r),
    o = pe("sha256");
  for (let a of i) {
    let c = r.get(a) ?? 0;
    o.update(`f ${z(e, a).split(I).join("/")}\x00${c}\x00`);
    let s = c;
    if (c > 0) {
      let u = await $e(a, "r");
      try {
        for await (let h of u.createReadStream({ start: 0, end: c - 1 }))
          (o.update(h), (s -= h.length));
      } finally {
        await u.close();
      }
    }
    if (s > 0) o.update(Buffer.alloc(s));
  }
  for (let a of n) {
    let c = await D(a);
    (o.update(`l ${z(e, a).split(I).join("/")}\x00`), o.update(`${Buffer.byteLength(c)}\x00${c}`));
  }
  return o.digest("hex");
}
var ABt =
  'This plugin source uses mode "link", which is not supported on Windows yet; the marketplace can use mode "copy" instead.';
function lU(e) {
  return e.mode === "link" ? `${e.command}${dmn}` : e.command;
}
function Hcn(e) {
  return e.mode === "link"
    ? 'mode "link": its output directory is used in place (linked, not copied)'
    : 'mode "copy": its output directory is copied into the plugin cache';
}
class wd extends R {}
function ze(e, n) {
  if (n && n.kind !== "none" && n.command === lU(e)) return;
  let r = Mt(e.command, jTt) + (e.mode === "link" ? " [mode: link]" : ""),
    i = n?.pluginId !== void 0 ? Mt(n.pluginId, 200) : void 0,
    o = i ?? "This plugin",
    a = i ?? "";
  if (n?.kind === "recorded" && n.command !== void 0)
    throw new wd(
      `${o}'s marketplace changed the command that installs it, or how its output is used (now \`${r}\`), since it was accepted, so it was not run. Review and accept the new command: ${Uh("plugin update", a, { tail: "in a terminal (add `--scope` for a project/local install)", fallback: "an explicit plugin update in a terminal reviews it" })}.`,
      "plugin command source command changed since consent"
    );
  if (n?.kind === "recorded")
    throw new wd(
      `${o}'s marketplace entry now installs it by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it: ${Uh("plugin update", a, { tail: "in a terminal (add `--scope` for a project/local install)", fallback: "an explicit plugin update in a terminal reviews it" })}.`,
      "plugin command source never consented for an installed plugin"
    );
  if (n?.kind === "shown")
    throw new wd(
      `${o}'s marketplace entry changed while it was being installed (it now declares \`${r}\`, not the command that was shown), so nothing was run. Re-run the install/update to review the current command.`,
      "plugin command source changed between display and run"
    );
  throw new wd(
    `${o} is installed by running a command on this machine (\`${r}\`) that has not been reviewed yet, so it was not run. Review and accept it from its /plugin details pane, or in a terminal: ${Uh("plugin install", a, { fallback: "an explicit plugin install reviews it" })}.`,
    "plugin command source without consent"
  );
}
async function We(e, n) {
  let r = (await P(e)).filter((a) => !Lcn(a)).sort(),
    i = await ye(
      e,
      r.map((a) => ({ name: a, path: S(e, a) }))
    );
  await j(n, { recursive: !0 });
  for (let { name: a, target: c, isDirectory: s } of i) await ge(c, S(n, a), s ? "dir" : "file");
  await he(S(n, aSt), JSON.stringify({ target: e }), { flag: "wx" });
  let o = pe("sha256");
  o.update(`${e}\x00`);
  for (let { name: a, target: c } of i)
    (o.update(`${Buffer.byteLength(a)}\x00${a}`), o.update(`${Buffer.byteLength(c)}\x00${c}`));
  return o.digest("hex");
}
async function ye(e, n) {
  let r = [];
  for (let { name: i, path: o } of n) {
    if (hcr(o, fe(o)))
      throw new wd(
        `A top-level entry of the plugin directory (${Mt(i, 100)}) points at a network location or through a link that cannot be trusted; refusing to link it.`,
        "plugin command source entry traverses a suspect link"
      );
    let a, c;
    try {
      ((a = await W(o)), (c = (await De(a)).isDirectory()));
    } catch {
      throw new R(
        `A top-level entry of the plugin directory its command produced could not be resolved (${Mt(i, 80)}); refusing to link it.`,
        "plugin command source link entry unresolvable"
      );
    }
    let s = z(e, a);
    if (s === "" || s === ".." || s.startsWith(`..${I}`) || F(s))
      throw new wd(
        `A top-level entry of the plugin directory its command produced (${Mt(i, 80)}) points outside that directory; refusing to link it.`,
        "plugin command source link escapes producer directory"
      );
    r.push({ name: i, target: a, isDirectory: c });
  }
  return r;
}
async function bVs(e, n) {
  let r = se(ke(), e),
    i = se(ke(), n),
    o = await X(S(r, aSt)),
    a = Mjr().parse(JSON.parse(o)).target;
  if (dJr(a))
    throw new wd(
      "The link farm points at a producer reached through a link that cannot be trusted; refusing to relink it.",
      "plugin command source relink target traverses a suspect link"
    );
  let c = await W(a);
  if (pE(c))
    throw new wd(
      "The link farm points at a producer that now resolves to a network location; refusing to relink it.",
      "plugin command source relink target resolves to a network path"
    );
  let s = [];
  for (let w of await P(r, { withFileTypes: !0 })) {
    if (Lcn(w.name)) continue;
    if ((await Vst(r, w))?.isSymbolicLink) s.push(w);
  }
  let u = [];
  for (let w of s) {
    let v;
    try {
      v = await D(S(r, w.name));
    } catch (A) {
      if (G(A)) continue;
      throw new wd(
        `A link in the staged farm could not be read (${Mt(d(A), 120)}); refusing to relink it.`,
        "plugin command source relink entry unreadable"
      );
    }
    if (DB(v))
      throw new wd(
        "A link in the staged farm is not in canonical form; refusing to relink it.",
        "plugin command source relink entry not canonical"
      );
    u.push(w);
  }
  let h = await ye(
    c,
    u.map((w) => ({ name: w.name, path: S(r, w.name) }))
  );
  await j(fe(i), { recursive: !0 });
  let p = ee(i, process.pid);
  (await rl(p), await j(p));
  try {
    for (let { name: w, target: v, isDirectory: A } of h) await ge(v, S(p, w), A ? "dir" : "file");
    (await he(S(p, aSt), o, { flag: "wx" }), await Oe(p, i));
  } catch (w) {
    await rl(p).catch(() => {});
    let v = E(w);
    if ((v === "ENOTEMPTY" || v === "EEXIST") && (await pFr(i)) === "live" && !(await CBt(i, c)))
      return;
    throw w;
  }
}
async function K0o(e, { keepGit: n }) {
  for (let r of await P(e)) if (Lcn(r) && !(n && _T(r) === ".git")) await rl(S(e, r));
}
function Lcn(e) {
  return dSt(e, Xe);
}
var Xe = new Set([...Aet, ".git"]);
async function Ncn(e, { unclassifiableIsFarm: n = !1 } = {}) {
  let r = await pFr(e);
  return r === "live" || (r === "unclassifiable" && n);
}
async function pFr(e) {
  try {
    Mjr().parse(JSON.parse(await X(S(e, aSt))));
  } catch (r) {
    if (E(r) !== void 0) return n(r);
  }
  try {
    for (let r of await P(e, { withFileTypes: !0 })) {
      if (Lcn(r.name)) continue;
      try {
        let i = await rYe(e, r);
        if (i.isSymbolicLink && F(i.linkTarget ?? (await D(S(e, r.name))))) return "live";
      } catch (i) {
        if (E(i) === "ENOENT") continue;
        return n(i);
      }
    }
    return "not-live";
  } catch (r) {
    return n(r);
  }
  function n(r) {
    let i = E(r);
    return i === "ENOENT" || i === "ENOTDIR" ? "not-live" : "unclassifiable";
  }
}
var Ye = new Set([".ds_store", "thumbs.db", "desktop.ini", "icon\r"]);
function qe(e) {
  let n = _T(e);
  return Ye.has(n) || n.startsWith("._");
}
function Je(e) {
  return Aet.has(e);
}
async function CBt(e, n) {
  let r = n.replace(/[\\/]+$/, "") + I;
  try {
    for (let i of await P(e, { withFileTypes: !0 })) {
      if (Je(i.name)) continue;
      let o;
      try {
        let a = await rYe(e, i);
        if (a.isFile && (qe(i.name) || dSt(i.name, Aet))) continue;
        if (!a.isSymbolicLink) return !0;
        o = a.linkTarget ?? (await D(S(e, i.name)));
      } catch (a) {
        if (E(a) === "ENOENT") continue;
        return !0;
      }
      if (!F(o) || DB(o) || pE(o) || !o.startsWith(r)) return !0;
    }
    return !1;
  } catch (i) {
    let o = E(i);
    return o !== "ENOENT" && o !== "ENOTDIR";
  }
}
async function SVs(e) {
  try {
    return Mjr().parse(JSON.parse(await X(S(e, aSt)))).target;
  } catch {
    return;
  }
}
var Ze = 16384;
async function X(e) {
  let n = await me(e);
  if (!n.isFile() || n.size > Ze)
    throw new wd(
      "The link-farm marker is not a small regular file; refusing to read it.",
      "plugin command source link marker not a small regular file"
    );
  return Me(e, "utf8");
}
function Ode(e) {
  return typeof e === "object" && e.source === "command" ? e : void 0;
}
function OQ(e) {
  return Ode(e)?.mode === "link";
}
async function wVs(e, n, r, i) {
  if (sd())
    throw new wd(
      "A tool server doesn't run a plugin's command on its own. The plugin was not installed or updated and its command was not run.",
      "plugin command source not started by a tool server daemon"
    );
  if (BO())
    throw (
      Het(),
      new wd(
        f7(),
        Iy() === "unanswered"
          ? "plugin command source held for the organization answer"
          : "plugin command source disabled by managed policy"
      )
    );
  if (e.mode === "link" && O() === "windows")
    throw new wd(ABt, "plugin command source link mode unsupported on windows");
  return (
    ze(e, i),
    fo("plugin_command_install", async () => {
      let o = await Ke(e);
      if (xf(o, ke(), { foldCase: !0 }))
        throw new wd(
          `Plugin source command printed the working directory or one of its parents (${Mt(o, 300)}); refusing to use it as a plugin.`,
          "plugin command source printed cwd or an ancestor"
        );
      if ((pet(o), e.mode === "link"))
        return { contentSha256: await We(o, n), producerDirectory: o };
      return (
        await we(o),
        await r(o, n),
        await K0o(n, { keepGit: !1 }),
        { contentSha256: await je(n), producerDirectory: o }
      );
    })
  );
}
import { homedir as Qe } from "os";
var et = 1e4,
  tt = 1e6;
function nt(e) {
  if (Fg(e)) return !0;
  return (e === void 0 || e === Qe()) && kC() && Bxe();
}
async function A6n(e) {
  if (e.isRepoResidentConfig && !nt(e.repoResidentOrigin))
    return { ok: !1, reason: "missing_trust" };
  let n =
      e.fromOrganization === !0
        ? Gj(() => ({ env: U(e), withoutContextEnv: U({ ...e, env: void 0 }) }))
        : { env: U(e), withoutContextEnv: void 0 },
    r = n.env;
  if (e.pluginId !== void 0) LQ(e.pluginId, r, n.withoutContextEnv ?? U({ ...e, env: void 0 }));
  let i = await ct(e.command, [], {
    shell: !0,
    timeout: et,
    maxBuffer: tt,
    cwd: e.cwd,
    env: r,
    extendEnv: !1
  });
  if (i.code !== 0 || !i.stdout) return { ok: !1, reason: "exec_failed" };
  let o;
  try {
    o = te(i.stdout.trim());
  } catch {
    return { ok: !1, reason: "parse_failed" };
  }
  if (!H(o)) return { ok: !1, reason: "non_object" };
  let a = {};
  for (let [c, s] of Object.entries(o)) {
    if (typeof s !== "string") return { ok: !1, reason: "non_string_value" };
    a[c] = s;
  }
  return { ok: !0, headers: a };
}
function U(e) {
  let n = { ...Mo() };
  if (!e.scrubCredentialEnv) return { ...n, ...e.env };
  let r = [];
  for (let c of kbe()) {
    let s = process.env[c] ?? n[c];
    if (s !== void 0 && s !== "") r.push(s);
    delete n[c];
  }
  let i = process.env,
    o = {};
  for (let c of new Set([...Object.keys(n), ...Object.keys(i)])) o[c] = i[c] ?? n[c];
  for (let c of vbe(o).lostCredential) {
    let s = o[c];
    if (s !== void 0 && s !== "") r.push(s);
  }
  (Object.assign(n, vbe(n).respelled), r.sort((c, s) => s.length - c.length));
  let a = {};
  for (let [c, s] of Object.entries(e.env ?? {}))
    a[c] = r.reduce((u, h) => u.split(h).join("REDACTED"), s);
  return { ...n, ...a };
}
var EY = { wait: void 0, ask: void 0, fetches: void 0 };
function RBt() {
  let e = Ie().organizationAsk;
  return (
    (e.asking ??= Promise.resolve()
      .then(() => EY.wait?.())
      .then(() => (Iy() === "unanswered" ? EY.ask?.() : void 0))
      .catch(l)
      .finally(() => {
        e.asking = null;
      })),
    e.asking
  );
}
var sbi = 30000;
var mFr = 3000;
function gFr(e) {
  let n = Ie().organizationAsk;
  return ((n.answerWait ??= Pe(RBt(), mFr, e).then(() => {})), n.answerWait);
}
var GTe = 268435456,
  xBt = 5242880,
  st = 120000,
  V0o = "Claude-Code-Plugin-Manager";
async function vVs(e, n = {}) {
  if (!v3r(e)) throw new R(`${w3r}: ${Lb(e)}`, "plugin archive URL policy rejected");
  let r = Lb(e);
  t(`Downloading plugin archive from ${r}`);
  let i = n.headers ?? {},
    o = { ...i, "User-Agent": V0o },
    a = o2(e) ? IY.get : _l.get,
    c = performance.now(),
    s;
  try {
    let h = await a(e, {
      timeout: st,
      responseType: "arraybuffer",
      maxRedirects: 5,
      maxContentLength: GTe,
      headers: o,
      beforeRedirect: lt(e, q0o(i))
    });
    (FD("plugin_archive", e, "success", performance.now() - c), (s = Buffer.from(h.data)));
  } catch (h) {
    FD("plugin_archive", e, "failure", performance.now() - c, kY(h));
    let p = J0o(h);
    if (p) throw p;
    throw new R(dt(h, e, r), "plugin archive download failed");
  }
  let u = at("sha256").update(s).digest("hex");
  if (n.sha256 && n.sha256.toLowerCase() !== u)
    throw new R(
      `Plugin archive integrity check failed for ${r}: expected sha256 ${n.sha256.toLowerCase()}, got ${u}. The archive was not installed. Verify the sha256 in the marketplace entry, or that the URL serves the intended file.`,
      "plugin archive sha256 mismatch"
    );
  return { data: s, contentSha256: u };
}
function q0o(e) {
  return Object.keys(e ?? {}).filter((n) => n.toLowerCase() !== "user-agent");
}
function Se(e, n, r = "plugin archive") {
  let i = new Set(n.map((o) => o.toLowerCase()));
  return (o) => {
    if (i.size === 0 || !o.headers) return;
    let a = d4e(o);
    if (a && bfe(e, a)) return;
    let c = 0;
    for (let s of Object.keys(o.headers)) if (i.has(s.toLowerCase())) (delete o.headers[s], c++);
    if (c > 0)
      t(`Fetch of ${r} redirected to a different origin; dropped inherited marketplace headers`);
  };
}
function lt(e, n) {
  let r = Se(e, n);
  return (i) => {
    let o = d4e(i);
    if (!v3r(o))
      throw new R(
        "Plugin archive redirected to a disallowed URL and was refused \u2014 " +
          `every hop must satisfy the archive URL policy (${w3r.replace(/^Archive URLs must /, "")}): ` +
          (o ? Lb(o) : "(unparseable redirect target)"),
        "plugin archive redirect policy rejected"
      );
    r(i);
  };
}
function EVs(e, n) {
  let r = Se(e, n, "marketplace catalog");
  return (i) => {
    let o = d4e(i);
    if (!(o !== "" && (bfe(e, o) || (o.toLowerCase().startsWith("https:") && !Ase(St(o))))))
      throw new R(
        "Marketplace catalog redirected to a disallowed URL and was refused \u2014 " +
          "a server-chosen cross-origin redirect must use https:// and must not point at a loopback, link-local, or cloud-metadata host (only a hop that stays on the origin you started from is exempt): " +
          (o ? Lb(o) : "(unparseable redirect target)"),
        "marketplace catalog redirect policy rejected"
      );
    r(i);
  };
}
function dt(e, n, r) {
  let i = (o) => o.replaceAll(n, () => r);
  if (Yd(e)) {
    if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND")
      return `Could not connect to ${r}. Check your network connection and that the archive URL is correct.

Technical details: ${i(e.message)}`;
    if (e.code === "ETIMEDOUT" || e.code === "ECONNABORTED")
      return `Timed out downloading plugin archive from ${r}. The server may be slow or unreachable.

Technical details: ${i(e.message)}`;
    if (e.response) {
      let o = e.response.status;
      return `HTTP ${o} while downloading plugin archive from ${r}.${o === 401 || o === 403 ? " The server rejected the request \u2014 if it requires authentication, add `headers` to the marketplace source (they are forwarded to plugin archives on the same origin) or configure your proxy." : ""}

Technical details: ${i(e.message)}`;
    }
  }
  return `Failed to download plugin archive from ${r}: ${i(d(e))}`;
}
function lHe(e) {
  return typeof e.headersHelper === "string" && e.headersHelper !== "";
}
var C6n = {
  unshown: "entry_helper_unshown",
  command: "entry_helper_changed",
  archive_url: "entry_archive_url_changed"
};
function $cn(e, n) {
  let { entry: r } = e;
  return lHe(r) && r.headersHelper !== void 0 && (!e.requireInlinedManifest || r.strict === !1)
    ? { command: r.headersHelper, archiveUrl: n }
    : null;
}
function R6n(e, n) {
  if (e === void 0 || e === null) return n === null ? null : "unshown";
  if (n === null) return null;
  if (e.command !== n.command) return "command";
  if (Ee(n.archiveUrl) !== Ee(e.archiveUrl)) return "archive_url";
  return null;
}
function Ee(e) {
  let n = Ykn(e);
  return n === null ? e : Gye(n);
}
function Fcn(e, n = "lockdown") {
  let r = Ve(e);
  if (n === "organization_unanswered")
    return `"${r}" fetches its archive through a marketplace-declared headersHelper command, which was not run: your organization's settings haven't been read, so it isn't known whether it allows such commands. The plugin was not installed or updated. It can be once your organization's settings are read, if it allows them.`;
  if (n === "remote_policy_unconsented")
    return `"${r}" fetches its archive through a headersHelper command that was not run: ${mJn}. The plugin was not installed or updated.`;
  return (
    `"${r}" fetches its archive through a marketplace-declared headersHelper command, and your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and the command was not run; ` +
    (pJn()
      ? "ask your admin to allow it or to declare the marketplace in managed settings."
      : "ask your admin to allow it.")
  );
}
function Ucn(e) {
  switch (e) {
    case "remote_policy_unconsented":
      return "entry_helper_remote_policy_unconsented";
    case "organization_unanswered":
      return "entry_helper_organization_unanswered";
    case "lockdown":
      return "entry_helper_disabled_by_policy";
  }
}
var ut = {
  entry_helper_unshown: "plugin entry helper consent mismatch at install: entry_helper_unshown",
  entry_helper_changed: "plugin entry helper consent mismatch at install: entry_helper_changed",
  entry_archive_url_changed:
    "plugin entry helper consent mismatch at install: entry_archive_url_changed",
  entry_helper_deferred: "plugin headers helper deferred to explicit install",
  entry_helper_disabled_by_policy: "plugin entry helper disabled by managed policy",
  entry_helper_unconfirmed: "plugin entry helper unconfirmed at install (nothing was announced)",
  entry_helper_not_inlined:
    "plugin entry headersHelper requires strict:false (catalog authoring error)",
  entry_helper_remote_policy_unconsented:
    "plugin entry helper declared by remote managed settings not yet verified and approved for the session",
  entry_helper_organization_unanswered: "plugin entry helper held for the organization answer"
};
function pt(e) {
  return Y0o[e] === "sad";
}
var Y0o = {
  entry_helper_unshown: "sad",
  entry_helper_changed: "sad",
  entry_archive_url_changed: "sad",
  entry_helper_deferred: "sad",
  entry_helper_disabled_by_policy: "sad",
  entry_helper_unconfirmed: "sad",
  entry_helper_remote_policy_unconsented: "sad",
  entry_helper_organization_unanswered: "sad",
  entry_helper_not_inlined: "bad"
};
function B7e(e) {
  if (e instanceof pre) return { code: e.failureCode, kind: pt(e.failureCode) ? "sad" : "bad" };
  return { code: "command_source_refused", kind: "sad" };
}
class pre extends wd {
  failureCode;
  constructor(e, n) {
    super(e, ut[n]);
    this.failureCode = n;
  }
}
function x6n(e, n, r) {
  let i = Ve(n),
    o =
      r === "update"
        ? "Review the command now shown, then update again."
        : "Reopen its details in /plugin to review it, then install again.";
  if (e === "unshown")
    return r === "update"
      ? `This update would run a headersHelper command for "${i}" that was not shown on this pane. ${o}`
      : `This install would run a headersHelper command for "${i}" that was not shown to you first. Retry the same install to review the command before it runs.`;
  return e === "command"
    ? `The headersHelper command for "${i}" changed since it was shown. ${o}`
    : `The archive URL for "${i}" changed since its headersHelper command was shown. ${o}`;
}
function dze(e) {
  let n =
    e.trustedSettingsEntryAuth !== void 0 &&
    e.trustedSettingsEntryAuth.origin !== "settings" &&
    e.marketplaceSource?.source !== "settings"
      ? void 0
      : e.trustedSettingsEntryAuth;
  if (n !== void 0) {
    let r = n.origin === "settings";
    if (!Et(n.archiveUrl, e.archiveUrl))
      return { entry: {}, operatorAuthored: r, requireInlinedManifest: !1 };
    if (n.headersHelper !== void 0 && n.operatorTier === "policySettings" && !gSt())
      throw new pre(
        `This plugin's headersHelper was not run: ${mJn}.`,
        "entry_helper_remote_policy_unconsented"
      );
    return {
      entry: {
        headers: n.headers,
        headersHelper: n.origin === "addDir" ? void 0 : n.headersHelper
      },
      operatorAuthored: r,
      requireInlinedManifest: !1
    };
  }
  if (e.marketplaceSource !== void 0 && e.marketplaceSource.source !== "settings")
    return { entry: e.entry, operatorAuthored: !1, requireInlinedManifest: !0 };
  return { entry: { headers: e.entry.headers }, operatorAuthored: !1, requireInlinedManifest: !0 };
}
async function P6n(e, n) {
  if (e?.source !== "url") return {};
  let r = n.trustedDeclaration,
    i = `marketplace ${Ve(n.marketplaceName ?? Lb(e.url))}`,
    o = (h, p) => I6n(h, `${i} (${p})`, { operatorAuthored: r?.operatorAuthored === !0 }),
    a = o(
      r ? { ...r.headers } : { ...e.headers },
      r ? (r.operatorAuthored ? "operator declaration" : "repo-tier declaration") : "state copy"
    );
  if (r?.headersHelper === void 0) return a;
  if (!/^https:\/\//i.test(e.url))
    return (
      t(`${i}: headersHelper not run \u2014 marketplace URL is not https`, { level: "warn" }),
      a
    );
  if (sd())
    throw new wd(
      `${i}: a tool server doesn't run a marketplace's headersHelper on its own: the command was not run and the marketplace was not fetched.`,
      "marketplace headersHelper not started by a tool server daemon"
    );
  if (Iy() === "unanswered") await gFr();
  if (Iy() === "unanswered")
    throw (
      Het("marketplace"),
      new wd(
        `${i}: your organization's settings haven't been read, so it isn't known whether it allows marketplace-declared commands. This marketplace's headersHelper is one: the command was not run and the marketplace was not fetched. It can be fetched once your organization's settings are read, if it allows them.`,
        "marketplace headersHelper held for the organization answer"
      )
    );
  if (r.authoredBy === "policySettings" && !gSt())
    throw (
      f("plugin_headers_helper", "remote_policy_unconsented"),
      new wd(
        `${i}: headersHelper not run \u2014 ${mJn}. The marketplace was not fetched.`,
        "marketplace headersHelper from remote managed settings not yet verified and approved for the session"
      )
    );
  let c = pJn(),
    s = r.authoredBy === "policySettings" && c;
  if (BO() && !s)
    throw new wd(
      `${i}: your organization's managed settings disable marketplace-declared commands (disableCommandPluginSources / allowManagedHooksOnly), ` +
        (c
          ? "and this marketplace's headersHelper is not declared in managed settings. The marketplace was not fetched and the command was not run; ask your admin to allow it or to declare the marketplace in managed settings."
          : "and in this session a declaration in managed settings does not exempt a headersHelper. The marketplace was not fetched and the command was not run; ask your admin to allow it."),
      "marketplace headersHelper disabled by managed policy"
    );
  if (!K())
    return (
      t(`${i}: headersHelper not run \u2014 disabled by the plugin command kill switch`, {
        level: "warn"
      }),
      a
    );
  let u = await gt(r.headersHelper, e.url, n.marketplaceName, r.operatorAuthored);
  return { ...a, ...o(u, "helper output") };
}
var mt = 60000;
async function gt(e, n, r, i) {
  let o = `${e}\x00${n}\x00${r ?? ""}\x00${i ? "operator" : "repo"}`,
    a = Date.now(),
    { marketplaceHelperMemo: c } = Ie(),
    s = c.get(o);
  if (s && s.expiresAt > a) return s.headers;
  let u = ht(e, n, r, i);
  c.set(o, { expiresAt: a + mt, headers: u });
  try {
    return await u;
  } catch (h) {
    throw (c.delete(o), h);
  }
}
async function ht(e, n, r, i) {
  let o = await A6n({
    command: e,
    scrubCredentialEnv: !i,
    isRepoResidentConfig: !1,
    cwd: Le(),
    env: {
      CLAUDE_CODE_MARKETPLACE_URL: n,
      ...(r !== void 0 && { CLAUDE_CODE_MARKETPLACE_NAME: r })
    }
  });
  if (!o.ok)
    throw (
      m("plugin_headers_helper", o.reason),
      new R(`marketplace headersHelper failed (${o.reason})`, "marketplace headers helper failed")
    );
  return (g("plugin_headers_helper"), o.headers);
}
async function ft(e, n) {
  let r = (a) =>
      I6n(a, `plugin ${Ve(n.pluginName)}`, { operatorAuthored: n.operatorAuthored === !0 }),
    i = r(e.headers ?? {});
  if (!lHe(e) || e.headersHelper === void 0) return i;
  ve(e, { ...n, disabledByPolicy: rLe(n.marketplaceSource, n.marketplaceName) });
  let o = await A6n({
    command: e.headersHelper,
    scrubCredentialEnv: !n.operatorAuthored,
    cwd: Le(),
    isRepoResidentConfig: !1,
    env: { CLAUDE_CODE_PLUGIN_NAME: n.pluginName, CLAUDE_CODE_PLUGIN_ARCHIVE_URL: n.archiveUrl }
  });
  if (!o.ok)
    throw (
      m("plugin_headers_helper", o.reason),
      new R(
        `plugin headersHelper for "${Y(n.pluginName)}" failed (${o.reason})`,
        "plugin headers helper failed"
      )
    );
  return (g("plugin_headers_helper"), { ...i, ...r(o.headers) });
}
var wt = new Set([
    "host",
    "cookie",
    "forwarded",
    "x-real-ip",
    "x-client-ip",
    "true-client-ip",
    "client-ip",
    "cf-connecting-ip",
    "fastly-client-ip",
    "x-originating-ip",
    "x-remote-ip",
    "x-remote-addr",
    "x-cluster-client-ip",
    "connection",
    "upgrade",
    "transfer-encoding",
    "content-length",
    "te",
    "trailer",
    "expect",
    "via"
  ]),
  yt = ["x-forwarded-", "x-original-", "proxy-"],
  kt = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function X0o(e) {
  let n = e.toLowerCase().replaceAll("_", "-");
  return wt.has(n) || yt.some((r) => n.startsWith(r));
}
function I6n(e, n, { operatorAuthored: r = !1 } = {}) {
  let i = {};
  for (let [o, a] of Object.entries(e)) {
    if (!kt.test(o) || /[\r\n\0]/.test(a)) {
      t(`Dropping header "${Ve(o)}" for ${n}: malformed name or value`, { level: "warn" });
      continue;
    }
    if (!r && X0o(o)) {
      t(
        `Dropping header "${Ve(o)}" for ${n}: request-routing/identity headers are not accepted from non-operator sources`,
        { level: "warn" }
      );
      continue;
    }
    i[o] = a;
  }
  return i;
}
function Y(e) {
  return Ve(e);
}
function ve(e, n) {
  if (n.disabledByPolicy !== null) {
    if (n.disabledByPolicy === "organization_unanswered") Het();
    throw new pre(Fcn(n.pluginName, n.disabledByPolicy), Ucn(n.disabledByPolicy));
  }
  if (n.requireInlinedManifest !== !1 && e.strict !== !1)
    throw new pre(
      `Plugin "${Y(n.pluginName)}" declares a headersHelper but is not strict:false \u2014 an entry with headersHelper must inline its manifest so its capabilities can be reviewed before the command runs.`,
      "entry_helper_not_inlined"
    );
  if (!n.runEntryHelper)
    throw new pre(
      `Plugin "${Y(n.pluginName)}" fetches its archive through a headersHelper, ` +
        "which only runs when you install or update it from its own details view \u2014 open this plugin in /plugin (or run `claude plugin install`/`update`), where the command is shown first.",
      "entry_helper_deferred"
    );
}
async function PBt(e) {
  if (typeof e.pluginSource !== "object" || e.pluginSource.source !== "archive") return;
  let n = e.pluginSource.url,
    {
      entry: r,
      operatorAuthored: i,
      requireInlinedManifest: o
    } = dze({
      entry: e.entry,
      archiveUrl: n,
      marketplaceSource: e.marketplaceSource,
      trustedSettingsEntryAuth: e.trustedSettingsEntryAuth
    }),
    a = e.marketplaceSource?.source === "url" ? e.marketplaceSource.url : void 0,
    c = rLe(e.marketplaceSource, e.marketplaceName);
  if (lHe(r))
    ve(r, {
      pluginName: e.pluginName,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: o,
      operatorAuthored: i,
      disabledByPolicy: c
    });
  let s =
      a !== void 0 && bfe(a, n)
        ? await P6n(e.marketplaceSource, {
            marketplaceName: e.marketplaceName,
            trustedDeclaration: e.trustedMarketplaceAuth
          })
        : {},
    u = await ft(r, {
      pluginName: e.pluginName,
      archiveUrl: n,
      runEntryHelper: e.runEntryHelper,
      requireInlinedManifest: o,
      operatorAuthored: i,
      marketplaceSource: e.marketplaceSource,
      marketplaceName: e.marketplaceName
    }),
    h = { ...s, ...u };
  if (Object.keys(h).length === 0) return;
  return { url: n, headers: h };
}
function dHe(e, n) {
  let r = Sw(e);
  return r ? n[r]?.source : void 0;
}
function Sw(e) {
  let n = e.split("@");
  return n.length === 2 && n[1] ? n[1] : void 0;
}
function Et(e, n) {
  return Gye(e) === Gye(n);
}
function St(e) {
  try {
    return new URL(e).hostname;
  } catch {
    return "";
  }
}
function J0o(e) {
  let n = e;
  for (let r = 0; r < 5 && n instanceof Error; r++) {
    if (n instanceof R) return n;
    n = n.cause;
  }
  return;
}
export {
  Mcn,
  Zp,
  aHe,
  EBt,
  kBt,
  Vyt,
  qyt,
  Dcn,
  uFr,
  yVs,
  TBt,
  U7e,
  Yyt,
  lze,
  z0o,
  fFr,
  _Vs,
  ABt,
  lU,
  Hcn,
  wd,
  bVs,
  K0o,
  Lcn,
  Ncn,
  pFr,
  CBt,
  SVs,
  Ode,
  OQ,
  wVs,
  A6n,
  EY,
  RBt,
  sbi,
  mFr,
  gFr,
  GTe,
  xBt,
  V0o,
  vVs,
  q0o,
  EVs,
  lHe,
  C6n,
  $cn,
  R6n,
  Fcn,
  Ucn,
  Y0o,
  B7e,
  pre,
  x6n,
  dze,
  P6n,
  X0o,
  I6n,
  PBt,
  dHe,
  Sw,
  J0o
};

//# sourceMappingURL=chunk-w35wpr7b.js.map
