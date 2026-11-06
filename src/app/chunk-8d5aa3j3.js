import {
  fileURLToPath as __sourceFilePath_a479fdf19e3414bf,
  URL as __sourceFilePath_a479fdf19e3414bf_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F_, yv, lH, p0e, pa, FV, Lz, Re } from "./chunk-ajtyjx88.js";
import { U, q, Jf, ye } from "./chunk-wrtp8qz8.js";
import { b, c, Hn } from "./chunk-acd8w9vv.js";
import { wFe, Qe, d, E, Er, yh, G, $B, Vt, J_, tg } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Le } from "./chunk-jazcqqqr.js";
import { qf, i } from "./chunk-cj37hmns.js";
import { _, ie, tN, t } from "./chunk-4kxznmzw.js";
import { Ur } from "./chunk-45h8cn90.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { ct } from "./chunk-qmmh8tq2.js";
import { iP, Os, mfi } from "./chunk-qywdxehb.js";
import { We } from "./chunk-pgnjjhxv.js";
import { pe, pt } from "./chunk-7c3thgax.js";
import { oy, _l, An, lZ } from "./chunk-at88wjsn.js";
import { qQe, HGe, Jne } from "./chunk-0a97myps.js";
import { kzt, v_e, OKe } from "./chunk-sx4xfr26.js";
import { pn } from "./chunk-0evsancd.js";
import { sY, Xn, ai } from "./chunk-j0tbz6ra.js";
import { gnn, hnn } from "./chunk-rb0rr2h5.js";
import { IY } from "./chunk-d89f5ek5.js";
import { z } from "./chunk-p197ae0z.js";
import { Ce } from "./chunk-a2y39866.js";
var C = Ce(oy(), 1);
import { randomBytes as ht } from "crypto";
import { constants as Ie } from "fs";
import {
  access as Ue,
  copyFile as $e,
  readdir as N,
  rename as Fe,
  rm as wt,
  stat as K,
  unlink as B,
  writeFile as Ae
} from "fs/promises";
import { homedir as L } from "os";
import { basename as j, dirname as Z, join as x } from "path";
function Ye(e) {
  return qQe(e) ? e.over.promise : Promise.resolve();
}
var de = 2000;
var D = () => Math.max(de - (Date.now() - Jf()), 0);
var fe = () => D() > 0 || HGe();
var me = 1000;
var ge = () => (HGe() ? Math.max(D(), me) : D());
async function he() {
  while (fe()) await X(ge());
}
async function _e(e) {
  if ((await he(), An())) return;
  (e.say(),
    await e
      .shutDown()
      .catch((n) => t(`refusal after the flag fetch hold failed (${d(n)})`, { level: "error" })),
    e.hard());
}
function nt(e, r, n) {
  return e.hasHeld && !ye() ? void _e(n) : r();
}
var ot = (e) => e;
var ve = 1;
async function ACr(e, r) {
  let n;
  for (let o = 1; o <= r.attempts; o++)
    try {
      return await e(AbortSignal.timeout(r.timeoutMs));
    } catch (s) {
      if (((n = s), o >= r.attempts)) break;
      r.onRetry?.(o, s);
      let u = 500 * 3 ** (o - 1);
      await X(u * (0.75 + Math.random() * 0.5));
    }
  throw n;
}
import { existsSync as ut } from "fs";
import { open as dt, readFile as ft, stat as mt } from "fs/promises";
import { homedir as Se } from "os";
import { join as V } from "path";
import { access as it, chmod as at, writeFile as st } from "fs/promises";
import { join as H } from "path";
function J() {
  return H(Le(), "local");
}
function Pe() {
  return H(J(), "claude");
}
function hPs() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function Ee(e, r, n) {
  try {
    return (await st(e, r, { encoding: "utf8", flag: "wx", mode: n }), !0);
  } catch (o) {
    if (E(o) === "EEXIST") return !1;
    throw o;
  }
}
async function lt() {
  try {
    let e = J();
    (await ie().mkdir(e),
      await Ee(
        H(e, "package.json"),
        _({ name: "claude-local", version: "0.0.1", private: !0 }, null, 2)
      ));
    let r = H(e, "claude");
    if (
      await Ee(
        r,
        `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`,
        493
      )
    )
      await at(r, 493);
    return !0;
  } catch (e) {
    return (t(`Failed to set up local package environment: ${e}`, { level: "error" }), !1);
  }
}
async function spt(e, r, n) {
  try {
    if (!(await lt()))
      return (m("update_apply", "update_apply_env_setup_failed"), "install_failed");
    let o = r ? r : e === "stable" ? "stable" : "latest",
      s = await ct(
        "npm",
        [
          "install",
          `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(new __sourceFilePath_a479fdf19e3414bf_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.PACKAGE_URL}@${o}`
        ],
        { cwd: J(), maxBuffer: 1e6, useToolMemoryCgroup: !1 }
      );
    if (s.code !== 0)
      return (
        m("update_apply", "update_apply_local_npm_failed"),
        t(`Failed to install Claude CLI package: ${s.stderr}`, { level: "error" }),
        s.code === 190 ? "in_progress" : "install_failed"
      );
    return (await Re((u) => ({ ...u, installMethod: "local" }), n), g("update_apply"), "success");
  } catch (o) {
    return (m("update_apply", "update_apply_local_exception"), l(o), "install_failed");
  }
}
async function F1e() {
  try {
    return (await it(H(J(), "node_modules", ".bin", "claude")), !0);
  } catch {
    return !1;
  }
}
function ipt() {
  let e = i.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}
var ke = /^\s*alias\s+claude\s*=/;
function z9e(e) {
  let r = e?.homedir ?? Se(),
    n = e?.env ?? process.env,
    o = e?.platform ?? "linux",
    s = e?.fileExists ?? ut,
    u = n.ZDOTDIR || r,
    k =
      o === "darwin"
        ? ([".bash_profile", ".bash_login", ".profile"].find((p) => s(V(r, p))) ?? ".bash_profile")
        : ".bashrc";
  return {
    zsh: V(u, ".zshrc"),
    bash: V(r, k),
    ...(o === "darwin" && { bashrc: V(r, ".bashrc") }),
    fish: V(r, ".config/fish/config.fish")
  };
}
function CCr(e) {
  let r = !1;
  return {
    filtered: e.filter((o) => {
      if (ke.test(o)) {
        let s = o.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!s) s = o.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (s && s[1]) {
          if (s[1].trim() === Pe()) return ((r = !0), !1);
        }
      }
      return !0;
    }),
    hadAlias: r
  };
}
async function Ejn(e) {
  try {
    return (await ft(e, { encoding: "utf8" })).split(`
`);
  } catch (r) {
    if (Vt(r)) return null;
    if ($B(r)) return (t(`Skipping ${e}: path is a directory`, { level: "warn" }), null);
    throw r;
  }
}
async function RCr(e, r) {
  let n = await dt(e, "w");
  try {
    (await n.writeFile(
      r.join(`
`),
      { encoding: "utf8" }
    ),
      await n.datasync());
  } finally {
    await n.close();
  }
}
var gt = new Set([
  "EBUSY",
  "EOPNOTSUPP",
  "ENOTSUP",
  "ENOMEM",
  "ERR_FS_FILE_TOO_LARGE",
  "ENOTCONN",
  "EHOSTDOWN",
  "EHOSTUNREACH",
  "ETIMEDOUT"
]);
async function hvo(e) {
  let r = z9e(e);
  for (let n of Object.values(r)) {
    let o = await Ejn(n).catch((s) => {
      if (tg(s) || J_(s) || gt.has(E(s) ?? ""))
        return (
          t(`Skipping unreadable shell config ${n} during alias scan: ${d(s)}`, { level: "warn" }),
          null
        );
      throw s;
    });
    if (!o) continue;
    for (let s of o)
      if (ke.test(s)) {
        let u = s.match(/alias\s+claude=["']?([^"'\s]+)/);
        if (u && u[1]) return u[1];
      }
  }
  return null;
}
async function yPs(e) {
  let r = await hvo(e);
  if (!r) return null;
  let n = e?.homedir ?? Se(),
    o = r.startsWith("~") ? r.replace("~", n) : r;
  try {
    let s = await mt(o);
    if (s.isFile() || s.isSymbolicLink()) return r;
  } catch {}
  return null;
}
var yt = "https://downloads.claude.ai/claude-code-releases";
class Ne extends wFe {}
function pnn(e) {
  switch (e) {
    case "windows_running_exe_lock":
      return "update_apply_exe_locked";
    case "native_binary_missing":
      return "update_apply_native_binary_missing";
    case void 0:
      return null;
  }
}
async function _Ps() {
  try {
    let e = Jne();
    await Ye(e);
    let r = await Lz("tengu_version_config", { minVersion: "0.0.0" });
    if (
      r.minVersion &&
      lH(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
            new __sourceFilePath_a479fdf19e3414bf_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        r.minVersion
      )
    ) {
      let n = De(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
            new __sourceFilePath_a479fdf19e3414bf_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        r.minVersion
      );
      nt(
        e,
        () => bt(r.minVersion),
        ot({
          say: () => {
            (lZ(), sY(n));
          },
          shutDown: () => Xn(ve),
          hard: pn
        })
      );
    }
  } catch (e) {
    l(e);
  }
}
function bt(e) {
  let r = De(
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
        new __sourceFilePath_a479fdf19e3414bf_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    e
  );
  if (
    (console.error(`
${r}
`),
    v_e() && kzt())
  )
    try {
      Ur(
        _(OKe({ sessionId: q(), message: r, reason: "cli_version_too_old", resultIndex: null })) +
          `
`
      );
    } catch (n) {
      t(`[assertMinVersion] startup failure result not written: ${d(n)}`, { level: "error" });
    }
  ai(ve);
}
function De(e, r) {
  return `It looks like your version of Claude Code (${e}) needs an update.
A newer version (${r} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.`;
}
var vt = 300000;
class He {
  lastAutoUpdateCheckAt = 0;
  updateRestoreFailure = null;
  mintedPreservedInodes = new Set();
}
var xt = new W(() => new He());
function ne() {
  return xt.of(U().host);
}
var Et = 1e4;
function yvo() {
  return Math.max(0, Et - process.uptime() * 1000);
}
function apt() {
  let e = ne(),
    r = Date.now();
  if (r - e.lastAutoUpdateCheckAt < vt)
    return (
      t(
        `auto-update check throttled (last check ${Math.round((r - e.lastAutoUpdateCheckAt) / 1000)}s ago)`
      ),
      !0
    );
  return ((e.lastAutoUpdateCheckAt = r), !1);
}
async function kjn() {
  return (await U1e()).maxVersion;
}
async function U1e() {
  let e = await Ve(),
    r = !1,
    n = e.external || void 0,
    o = n ? (C.parse(n)?.version ?? void 0) : void 0;
  if (n && !o)
    (t(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, { level: "error" }),
      a("tengu_max_version_config_invalid", { raw_value: pa(n) }));
  return { maxVersion: o, forceDowngradeEnabled: e.external_force_downgrade === !0 };
}
function K9e(e, r, n) {
  let o = n === "native_update" ? "Native installer" : "AutoUpdater",
    s = C.parse(e);
  if (s && s.compare(r) > 0)
    return (t(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`), !0);
  return (
    t(
      `${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`
    ),
    !1
  );
}
async function bPs() {
  return (await Ve()).external_message || void 0;
}
async function Ve() {
  try {
    return await Lz("tengu_max_version_config", {});
  } catch (e) {
    return (l(e), {});
  }
}
function xCr(e) {
  if (!C.parse(e))
    return (
      t("update target is not a valid semver version \u2014 skip checks constrain nothing", {
        level: "error"
      }),
      t(`update target (first 300 chars, JSON-encoded): ${tN(JSON.stringify(e.slice(0, 300)))}`),
      null
    );
  let r = pt()?.minimumVersion;
  if (r) {
    let o = C.parse(r)?.version;
    if (!o)
      t(
        `minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${tN(JSON.stringify(r.slice(0, 300)))}`,
        { level: "error" }
      );
    else if (!yv(e, o)) return `below your minimumVersion setting (${r})`;
  }
  let n = pe("policySettings")?.requiredMaximumVersion;
  if (n) {
    let o = C.parse(n)?.version;
    if (!o)
      t(
        `requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${tN(JSON.stringify(n.slice(0, 300)))}`,
        { level: "error" }
      );
    else if (!p0e(e, o)) return `above your organization's requiredMaximumVersion (${n})`;
  }
  return null;
}
function V9e(e) {
  let r = xCr(e);
  if (r) t(`Skipping update to ${e}: ${r}`);
  return r !== null;
}
var Y = 300000;
function Be() {
  return x(Le(), ".update.lock");
}
function ee() {
  return We.state("update-lock");
}
async function Pt(e) {
  let r = ee(),
    n = await e.statMeta(r);
  if (n.ok) {
    if (Date.now() - n.value.mtimeMs < Y) return !1;
    let u = await e.statMeta(r);
    if (u.ok) {
      if (Date.now() - u.value.mtimeMs < Y) return !1;
      let k = await e.delete(r);
      if (!k.ok)
        return (
          t(`AutoUpdater: failed to remove stale update lock: ${k.error.code}`, { level: "error" }),
          !1
        );
    } else if (u.error.code !== "NotFound")
      return (
        t(`AutoUpdater: failed to re-stat stale update lock: ${u.error.code}`, { level: "error" }),
        !1
      );
  } else if (n.error.code !== "NotFound")
    return (t(`AutoUpdater: failed to stat update lock: ${n.error.code}`, { level: "error" }), !1);
  let o = await e.write(r, `${process.pid}`, {
    precondition: { type: "ifAbsent" },
    mode: 438 & ~process.umask()
  });
  if (o.ok) return !0;
  if (o.error.code === "AlreadyExists") return !1;
  return (t(`AutoUpdater: failed to create update lock: ${o.error.code}`, { level: "error" }), !1);
}
async function St(e) {
  if (z() && e) return Pt(e);
  let r = ie(),
    n = Be();
  try {
    let o = await r.stat(n);
    if (Date.now() - o.mtimeMs < Y) return !1;
    try {
      let u = await r.stat(n);
      if (Date.now() - u.mtimeMs < Y) return !1;
      await r.unlink(n);
    } catch (u) {
      if (!G(u)) return (l(u), !1);
    }
  } catch (o) {
    if (!G(o)) return (l(o), !1);
  }
  try {
    return (await Ae(n, `${process.pid}`, { encoding: "utf8", flag: "wx" }), !0);
  } catch (o) {
    let s = E(o);
    if (s === "EEXIST") return !1;
    if (s === "ENOENT")
      try {
        return (
          await r.mkdir(Le()),
          await Ae(n, `${process.pid}`, { encoding: "utf8", flag: "wx" }),
          !0
        );
      } catch (u) {
        if (E(u) === "EEXIST") return !1;
        return (t(`Failed to create config dir or update lock file: ${u}`, { level: "error" }), !1);
      }
    return (t(`AutoUpdater: failed to create update lock file ${n}: ${o}`, { level: "error" }), !1);
  }
}
async function Rt(e) {
  if (z() && e) {
    let o = await e.read([ee()]);
    if (!o.ok) {
      t(`AutoUpdater: failed to release update lock: ${o.error.code}`, { level: "error" });
      return;
    }
    let s = o.value.items[0];
    if (!s.found) return;
    if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
      let u = await e.delete(ee());
      if (!u.ok)
        t(`AutoUpdater: failed to release update lock: ${u.error.code}`, { level: "error" });
    }
    return;
  }
  let r = ie(),
    n = Be();
  try {
    if ((await r.readFile(n, { encoding: "utf8" })) === `${process.pid}`) await r.unlink(n);
  } catch (o) {
    if (G(o)) return;
    t(`AutoUpdater: failed to release update lock file ${n}: ${o}`, { level: "error" });
  }
}
function oe() {
  let e = process.execPath.replace(/\\/g, "/"),
    r = (i.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || (r && e.startsWith(r + "/install/global/")))
    return "bun";
  return i.isRunningWithBun() && !qf() ? "bun" : "npm";
}
async function Ke() {
  let e = oe() === "bun",
    r = null;
  if (e) r = await ct("bun", ["pm", "bin", "-g"], { cwd: L(), useToolMemoryCgroup: !1 });
  else
    r = await ct("npm", ["-g", "config", "get", "prefix"], { cwd: L(), useToolMemoryCgroup: !1 });
  if (r.code !== 0)
    return (
      t(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, {
        level: "error"
      }),
      null
    );
  return r.stdout.trim() || null;
}
async function kt() {
  let e = await Ke();
  if (!e) return null;
  if (oe() === "bun") {
    let n = x(e, "claude");
    return { execPaths: [n], imagePath: n };
  }
  if (O() === "windows")
    return {
      execPaths: [x(e, "claude.cmd"), x(e, "claude.exe")],
      imagePath: x(
        e,
        "node_modules",
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
            new __sourceFilePath_a479fdf19e3414bf_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL,
        "bin",
        "claude.exe"
      )
    };
  let r = x(e, "bin", "claude");
  return { execPaths: [r], imagePath: r };
}
async function Me(e) {
  let r = Date.now(),
    n = await kt(),
    o = e ? C.parse(e)?.version : void 0,
    s = !1,
    u = !1;
  for (let p of n?.execPaths ?? []) {
    let w = await ct(p, ["--version"], {
        abortSignal: AbortSignal.timeout(45000),
        cwd: L(),
        useToolMemoryCgroup: !1
      }),
      P = C.parse(w.stdout.trim().split(/\s+/)[0])?.version;
    if (
      w.code === 0 &&
      P != null &&
      (o != null
        ? P === o
        : F_(
            P,
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.310",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-23T17:43:32Z",
              GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
              HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
                new __sourceFilePath_a479fdf19e3414bf_URL(
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  import.meta.url
                )
              ),
              DD_SOURCEMAP_GROUP: "default"
            }.VERSION
          ))
    )
      return { outcome: "landed", version: P, durationMs: Date.now() - r };
    if (w.code !== 0)
      ((s = !0),
        (u ||= `${w.stdout}
${w.stderr}`.includes(hnn)));
  }
  return {
    outcome:
      u ||
      (s &&
        n !== null &&
        (await K(n.imagePath).then(
          (p) => p.isFile() && p.size < gnn,
          () => !1
        )))
        ? "placeholder_stub"
        : "inconclusive",
    durationMs: Date.now() - r
  };
}
async function SPs() {
  try {
    let e = await Ke();
    if (!e) return { hasPermissions: !1, npmPrefix: null };
    try {
      return (await Ue(e, Ie.W_OK), { hasPermissions: !0, npmPrefix: e });
    } catch {
      return (
        t("Insufficient permissions for global npm install.", { level: "error" }),
        { hasPermissions: !1, npmPrefix: e }
      );
    }
  } catch (e) {
    return (l(e), { hasPermissions: !1, npmPrefix: null });
  }
}
async function lpt(e) {
  let r = e === "stable" ? "stable" : "latest",
    n = await ct(
      "npm",
      [
        "view",
        `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(new __sourceFilePath_a479fdf19e3414bf_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.PACKAGE_URL}@${r}`,
        "version",
        "--prefer-online"
      ],
      { abortSignal: AbortSignal.timeout(5000), cwd: L(), useToolMemoryCgroup: !1 }
    );
  if (n.code !== 0) {
    let s = n.stdout.trim();
    if (s && C.parse(s)) {
      if (
        (f("update_check", "update_check_npm_view_stderr_warning"),
        t(
          `npm view exited ${n.code} but printed a valid version (${s}) \u2014 treating stderr as a warning`
        ),
        n.stderr)
      )
        t(`npm stderr: ${n.stderr.trim()}`);
      return s;
    }
    if (
      (m("update_check", "update_check_npm_view_failed"),
      t(`npm view failed with code ${n.code}`),
      n.stderr)
    )
      t(`npm stderr: ${n.stderr.trim()}`);
    else t("npm stderr: (empty)");
    if (n.stdout)
      t(
        `npm stdout (first 300 chars, JSON-encoded): ${tN(JSON.stringify(n.stdout.trim().slice(0, 300)))}`
      );
    return null;
  }
  let o = n.stdout.trim();
  if (o && !C.parse(o))
    return (
      m("update_check", "update_check_npm_view_invalid_stdout"),
      t("npm view exited 0 but stdout is not a valid semver version \u2014 treating as no result"),
      t(`npm stdout (first 300 chars, JSON-encoded): ${tN(JSON.stringify(o.slice(0, 300)))}`),
      null
    );
  return (g("update_check"), o || null);
}
var Te = 5000,
  Oe = 3;
async function PCr(e) {
  if (_t()) return null;
  let r = 0;
  try {
    let o = (
      await ACr(
        (s) => (r++, IY.get(`${yt}/${e}`, { timeout: Te, responseType: "text", signal: s })),
        {
          attempts: Oe,
          timeoutMs: Te,
          onRetry: (s, u) => {
            t(`Failed to fetch ${e} from GCS on attempt ${s}/${Oe}, retrying: ${u}`);
          }
        }
      )
    ).data.trim();
    if (!C.parse(o))
      return (
        m("update_check", "update_check_gcs_invalid_response"),
        t(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`),
        t(
          `GCS response body (first 300 chars, JSON-encoded): ${tN(JSON.stringify(o.slice(0, 300)))}`
        ),
        null
      );
    if (r > 1) f("update_check", "update_check_gcs_retry");
    else g("update_check");
    return o;
  } catch (n) {
    return (
      m("update_check", "update_check_gcs_failed"),
      t(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${n}`),
      null
    );
  }
}
async function $t(e) {
  if (_t()) return null;
  try {
    let r = await _l.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
        timeout: 5000,
        responseType: "json"
      }),
      n = r.data?.version,
      o = typeof n === "string" ? n.trim() : null;
    if (!o || !C.parse(o)) {
      (m("update_check", "update_check_homebrew_invalid_version"),
        t(
          `formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`
        ));
      let s = typeof r.data === "string" ? r.data : String(_(r.data));
      return (
        t(`brew response (first 300 chars, JSON-encoded): ${tN(JSON.stringify(s.slice(0, 300)))}`),
        null
      );
    }
    return (g("update_check"), o);
  } catch (r) {
    return (
      m("update_check", "update_check_homebrew_failed"),
      t(`Failed to fetch ${e} from formulae.brew.sh: ${r}`),
      null
    );
  }
}
async function mnn(e, r) {
  let [n, o] = await Promise.all([$t(e), PCr(r)]);
  return n ?? o;
}
function q9e() {
  return ne().updateRestoreFailure;
}
async function Ct(e) {
  if (!e.updateRestoreFailure) return;
  if (await ae(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return;
  }
  if (e.updateRestoreFailure.preservedPath !== null)
    e.updateRestoreFailure = {
      originalPath: e.updateRestoreFailure.originalPath,
      preservedPath: await je(e, e.updateRestoreFailure.preservedPath)
    };
}
function ae(e) {
  return Ue(e, Ie.F_OK).then(
    () => !0,
    () => !1
  );
}
function Ge() {
  let e = x(Z(process.execPath), "..", "..");
  return [x(e, ".."), e];
}
async function Je() {
  return (
    await Promise.all(
      Ge().map((r) =>
        N(r, { withFileTypes: !0 })
          .then((n) =>
            n.filter((o) => o.isDirectory() && o.name.startsWith(".")).map((o) => x(r, o.name))
          )
          .catch(() => [])
      )
    )
  ).flat();
}
async function te(e, r) {
  let n = await K(r, { bigint: !0 }).then(
    (o) => o.ino,
    () => 0n
  );
  return n !== 0n && e.mintedPreservedInodes.has(n);
}
async function je(e, r) {
  if (await te(e, r)) return r;
  let n = j(r),
    o = (await Je()).flatMap((s) => [x(s, n), x(s, "bin", n)]);
  for (let s of o) if (await te(e, s)) return s;
  return null;
}
async function re(e, r) {
  await ie().mkdir(Z(r));
  try {
    let o = Z(r),
      s = `${j(r)}.restoring.`;
    for (let u of await N(o)) if (u.startsWith(s)) await B(x(o, u)).catch(() => {});
  } catch {}
  let n = `${r}.restoring.${ht(4).toString("hex")}`;
  try {
    await $e(e, n);
    try {
      await Os(n, r);
    } catch (o) {
      let s = E(o);
      if (s === void 0 || !iP.has(s)) throw o;
      if (!(await ae(r))) throw o;
      try {
        await $e(n, r);
      } catch (u) {
        if (mfi.has(E(u) ?? "")) await B(r).catch(() => {});
        throw u;
      }
      await B(n).catch(() => {});
    }
  } catch (o) {
    throw (await B(n).catch(() => {}), o);
  }
}
async function Ft(e, r) {
  let n = j(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    o = new RegExp(`^${n}\\.old\\.(\\d+)$`),
    s = (
      await Promise.all(
        r.flatMap((p) =>
          [p, x(p, "bin")].map(async (w) =>
            (await N(w).catch(() => []))
              .map((P) => o.exec(P))
              .filter((P) => P !== null)
              .map((P) => ({ path: x(w, P[0]), ts: Number(P[1]) }))
          )
        )
      )
    ).flat(),
    k = (await Promise.all(s.map(async (p) => ((await te(e, p.path)) ? [p] : []))))
      .flat()
      .reduce((p, w) => (p === null || w.ts > p.ts ? w : p), null);
  if (!k) {
    t(
      `No preserved ${j(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`
    );
    return;
  }
  try {
    (await re(k.path, process.execPath),
      g("update_apply_heal", { heal_kind: b("sweep") }),
      t(
        `Restored missing ${process.execPath} from preserved copy ${k.path} before update attempt`
      ));
  } catch (p) {
    let w = yh(p);
    (m("update_apply_heal", "sweep_restore_failed", {
      ...(w && { err_code: w }),
      heal_kind: b("sweep")
    }),
      t(`Failed to restore missing ${process.execPath} from preserved copy ${k.path}: ${p}`));
  }
}
async function dpt(e, r) {
  let n = ne();
  if (!(await St(r)))
    return (
      f("update_apply", "update_apply_lock_contention"),
      t("Another process is currently installing an update", { level: "error" }),
      a("tengu_auto_updater_lock_contention", {
        pid: process.pid,
        currentVersion: pa(
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
              new __sourceFilePath_a479fdf19e3414bf_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION
        )
      }),
      { status: "in_progress" }
    );
  let o = n.updateRestoreFailure;
  try {
    await At();
    let s = oe();
    if (s === "npm" && i.isNpmFromWindowsPath())
      return (
        m("update_apply", "update_apply_wsl_windows_npm"),
        t("Windows NPM detected in WSL environment", { level: "error" }),
        a("tengu_auto_updater_windows_npm_in_wsl", {
          currentVersion: pa(
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.310",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-23T17:43:32Z",
              GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
              HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
                new __sourceFilePath_a479fdf19e3414bf_URL(
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  import.meta.url
                )
              ),
              DD_SOURCEMAP_GROUP: "default"
            }.VERSION
          )
        }),
        console.error(`
Error: Windows NPM detected in WSL

You're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.
This configuration is not supported for updates.

To fix this issue:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux NPM is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`),
        { status: "install_failed" }
      );
    let u = e
        ? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(new __sourceFilePath_a479fdf19e3414bf_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.PACKAGE_URL}@${e}`
        : {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __sourceFilePath_a479fdf19e3414bf(
              new __sourceFilePath_a479fdf19e3414bf_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.PACKAGE_URL,
      k =
        O() === "windows" &&
        qf() &&
        process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"),
      p = [];
    if (k) {
      let [, y] = Ge(),
        v = (
          await Promise.all(
            (await Je()).map(async (h) =>
              (await Promise.all([N(h).catch(() => []), N(x(h, "bin")).catch(() => [])]).then(
                ([M, A]) => [...M, ...A].some((I) => /\.exe\.old\.\d+$/.test(I))
              ))
                ? [h]
                : []
            )
          )
        ).flat();
      if (v.length > 0)
        if (await ae(process.execPath))
          await Promise.all(
            v.map((h) =>
              wt(h, { recursive: !0, force: !0 }).catch((S) =>
                t(`retired-dir cleanup failed: ${S}`)
              )
            )
          );
        else await Ft(n, v);
      let F = Date.now(),
        T = await K(process.execPath, { bigint: !0 })
          .then((h) => h.ino)
          .catch(() => 0n),
        R = [process.execPath];
      for (let h of await N(y).catch(() => []))
        for (let S of ["claude.exe", "cli.exe"]) {
          let M = x(y, h, S);
          if (M === process.execPath) continue;
          let A = await K(M, { bigint: !0 })
            .then((I) => I.ino)
            .catch(() => -1n);
          if (T && A === T) R.push(M);
        }
      for (let h of R) {
        let S = `${h}.old.${F}`;
        try {
          await Fe(h, S);
        } catch {
          continue;
        }
        p.push([h, S]);
        let M = await K(S, { bigint: !0 }).then(
          (A) => A.ino,
          () => 0n
        );
        if (M !== 0n) n.mintedPreservedInodes.add(M);
      }
    }
    let w = await ct(s, ["install", "-g", u], { cwd: L(), useToolMemoryCgroup: !1 }),
      P = 0,
      se = 0,
      Q = [];
    if (p.length && w.code !== 0) {
      for (let [v, F] of p)
        try {
          await Fe(F, v);
        } catch (T) {
          try {
            (await re(F, v),
              t(`Restored ${v} by copy after rename failed: ${T}`),
              await B(F).catch((R) => t(`Failed to remove ${F} after copy-restore: ${R}`)));
          } catch (R) {
            let h = await je(n, F),
              S;
            if (h !== null && h !== F)
              try {
                (await re(h, v),
                  se++,
                  t(
                    `Restored ${v} from retired-dir copy ${h} after rename (${T}) and copy (${R}) both failed`
                  ));
                continue;
              } catch (A) {
                ((S = A), t(`Failed to restore ${v} from retired-dir copy ${h}: ${A}`));
              }
            let M = h === null ? b("gone") : h === F ? b("original_dir") : b("retired_dir");
            if ((P++, Q.length === 0)) {
              let A = yh(T),
                I = yh(R),
                ce = S === void 0 ? void 0 : yh(S);
              m("update_apply", "update_apply_restore_failed", {
                ...(A && { rename_err_code: A }),
                ...(I && { copy_err_code: I }),
                ...(ce && { relocate_err_code: ce }),
                preserved_state: M
              });
            }
            (Q.push({ originalPath: v, preservedPath: h }),
              l(
                Qe(
                  new Ne(
                    `Failed to restore ${v} after install failure: rename: ${T}; copy: ${R}; preserved copy: ${h ?? "not found"}`
                  ),
                  `Failed to restore executable after install failure: rename=${Er(T) ?? "unknown"} copy=${Er(R) ?? "unknown"} relocate=${S === void 0 ? (h === null ? "not_found" : "skipped") : (Er(S) ?? "unknown")}`
                )
              ));
          }
        }
      if (se > 0 && P === 0) g("update_apply_heal", { heal_kind: b("relocate") });
      let y = new Set(p.map(([v]) => v));
      n.updateRestoreFailure =
        Q[0] ??
        (n.updateRestoreFailure && !y.has(n.updateRestoreFailure.originalPath)
          ? n.updateRestoreFailure
          : null);
    }
    if (w.code !== 0) {
      let y = `${w.stdout} ${w.stderr}`,
        v = Mt(y),
        F = p.length === 0 ? "not_attempted" : P === 0 ? "restored" : "partial";
      if (v === "warning_only") {
        let R = await Me(e);
        if (R.outcome === "landed")
          return (
            await Re((h) => ({ ...h, installMethod: "global" }), r),
            (n.updateRestoreFailure = null),
            f("update_apply", "update_apply_npm_install_stderr_warning"),
            t(
              `npm/bun exited ${w.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${R.version}): ${y}`
            ),
            { status: "success", probeDurationMs: R.durationMs }
          );
      }
      if (
        (a("tengu_auto_updater_npm_failure", {
          npm_exit_code: w.code,
          package_manager: c(s),
          is_bundled_mode: qf(),
          platform: FV(O()),
          windows_self_rename: c(F),
          stderr_signature: c(v),
          npm_error_code: Tt(y) ?? b("none")
        }),
        O() === "windows" &&
          /\b(?:claude|cli)\.exe\b/i.test(y) &&
          (/\bEBUSY\b|resource busy or locked/i.test(y) ||
            (/\bEPERM\b|operation not permitted/i.test(y) &&
              (p.length > 0 ||
                /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(y)))))
      )
        return (
          m("update_apply", "update_apply_exe_locked"),
          t(`Failed to install new version of claude (running executable is locked): ${y}`, {
            level: "error"
          }),
          { status: "install_failed", failureHint: "windows_running_exe_lock" }
        );
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(y))
        return (
          m("update_apply", "update_apply_no_permissions"),
          t("Insufficient permissions for global npm install.", { level: "error" }),
          { status: "no_permissions" }
        );
      if (v === "native_package_missing")
        return (
          m("update_apply", "update_apply_native_binary_missing"),
          t(
            `Failed to install new version of claude (platform-native package missing; npm should have restored the previous version): ${y}`,
            { level: "error" }
          ),
          { status: "install_failed", failureHint: "native_binary_missing" }
        );
      if (v === "warning_only")
        return (
          m("update_apply", "update_apply_npm_install_stderr_warning"),
          t(
            `npm/bun exited ${w.code} with only warnings on stderr but the re-probe did not confirm an advance: ${y}`,
            { level: "error" }
          ),
          { status: "install_failed" }
        );
      return (
        m("update_apply", "update_apply_npm_install_failed"),
        t(`Failed to install new version of claude: ${y}`, { level: "error" }),
        { status: "install_failed" }
      );
    }
    let le = await Me(e);
    switch (le.outcome) {
      case "placeholder_stub": {
        let y =
          s === "npm"
            ? await ct("npm", ["config", "get", "ignore-scripts"], {
                abortSignal: AbortSignal.timeout(1e4),
                cwd: L(),
                useToolMemoryCgroup: !1
              })
            : null;
        if (y?.code === 0 && y.stdout.trim() === "true") {
          t(
            `${s} exited 0 and the installed claude is the placeholder stub, but npm install scripts are disabled on purpose; trusting the exit code`
          );
          break;
        }
        return (
          m("update_apply", "update_apply_native_binary_missing"),
          t(
            `${s} exited 0 but the installed claude is still the placeholder stub: the platform-native package was not installed`,
            { level: "error" }
          ),
          { status: "install_failed", failureHint: "native_binary_missing" }
        );
      }
      case "inconclusive":
        t(
          `${s} exited 0; the install-prefix --version probe was inconclusive, trusting the exit code`
        );
        break;
      case "landed":
        break;
    }
    return (
      await Re((y) => ({ ...y, installMethod: "global" }), r),
      (n.updateRestoreFailure = null),
      g("update_apply"),
      { status: "success", probeDurationMs: le.durationMs }
    );
  } finally {
    if (n.updateRestoreFailure !== null && n.updateRestoreFailure === o) await Ct(n);
    await Rt(r);
  }
}
async function At() {
  let e = z9e();
  for (let [, r] of Object.entries(e))
    try {
      let n = await Ejn(r);
      if (!n) continue;
      let { filtered: o, hadAlias: s } = CCr(n);
      if (s) (await RCr(r, o), t(`Removed claude alias from ${r}`));
    } catch (n) {
      t(`Failed to remove alias from ${r}: ${n}`, { level: "error" });
    }
}
function Mt(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
  if (/postinstall\] Native package "[^"]*" not found/.test(e)) return "native_package_missing";
  if (/\bENOTEMPTY\b/i.test(e)) return "enotempty";
  if (/\bETARGET\b/i.test(e)) return "etarget";
  if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e)) return "e403_forbidden";
  if (/\bENOENT\b/i.test(e)) return "enoent";
  if (
    /\bE5\d\d\b/i.test(e) ||
    /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(e)
  )
    return "registry_5xx";
  if (
    /\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) ||
    /\btimed[\s-]?out\b/i.test(e) ||
    /\btimeout\b/i.test(e)
  )
    return "network_timeout";
  if (/\bENOSPC\b/i.test(e)) return "disk_full";
  if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e)) return "ebusy";
  let r = /npm warn/i.test(e) || /unknown user config/i.test(e) || /npm notice/i.test(e),
    n = /npm err/i.test(e) || /\b(EACCES|EPERM|ETARGET)\b/i.test(e) || /code E/i.test(e);
  if (r && !n) return "warning_only";
  return "unknown";
}
function Tt(e) {
  let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return r === void 0 ? void 0 : Hn(r);
}
export {
  ACr,
  hPs,
  spt,
  F1e,
  ipt,
  z9e,
  CCr,
  Ejn,
  RCr,
  hvo,
  yPs,
  pnn,
  _Ps,
  yvo,
  apt,
  kjn,
  U1e,
  K9e,
  bPs,
  xCr,
  V9e,
  SPs,
  lpt,
  PCr,
  mnn,
  q9e,
  dpt
};

//# sourceMappingURL=chunk-8d5aa3j3.js.map
