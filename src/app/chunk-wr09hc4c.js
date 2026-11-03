import {
  fileURLToPath as __filePath_ce31d4628ce160b3,
  URL as __filePath_ce31d4628ce160b3_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _, te, ie, t } from "./chunk-4kxznmzw.js";
import { b6, mdr } from "./chunk-a16y5hcz.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { U, J } from "./chunk-wrtp8qz8.js";
import { G } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Le } from "./chunk-jazcqqqr.js";
import { qf, hc, i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { p } from "./chunk-qmkm2x59.js";
import { We } from "./chunk-pgnjjhxv.js";
import { Txe, fe } from "./chunk-xe386mry.js";
import { g_, RM } from "./chunk-8w2npe9a.js";
import { it } from "./chunk-qmmh8tq2.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { V_n, ue, xbn, tNe } from "./chunk-ajtyjx88.js";
import { JV } from "./chunk-vbnb89qh.js";
import { ZFt, hQe } from "./chunk-6h7ejyet.js";
import { qqs, QK, Wde, ze } from "./chunk-1ww4jg8j.js";
import { hPs, F1e, ipt, z9e, hvo, yPs, SPs } from "./chunk-8d5aa3j3.js";
import { XHt, TCr } from "./chunk-87kxx1c2.js";
import { vjn } from "./chunk-kngqmjg3.js";
import { s9 } from "./chunk-ny2y84j1.js";
import { l5 } from "./chunk-pfc5159p.js";
import { ge, Tt, qd } from "./chunk-522pfw8k.js";
import { z } from "./chunk-p197ae0z.js";
import { lstat as ne, realpath as F } from "fs/promises";
import { homedir as x } from "os";
import { delimiter as ae, join as d, posix as k, win32 as v } from "path";
import { join as X } from "path";
var Q = p(() =>
  Tt({
    timestamp: ge(),
    path: qd(["npm-global", "npm-local", "native"]),
    outcome: qd(["success", "failed"]),
    status: ge(),
    version_from: ge(),
    version_to: ge().nullable(),
    error_code: ge().nullable()
  })
);
function S() {
  return X(Le(), ".last-update-result.json");
}
function M() {
  return We.state("last-update-result");
}
async function G9e(e, n) {
  if (z() && n) {
    let a = await n.write(M(), _(e), { mode: 438 & ~process.umask() });
    if (!a.ok) t(`Failed to record update result: ${a.error.code}`, { level: "error" });
    return;
  }
  if (J()) return;
  try {
    await hn().atomicWrite(S(), _(e));
  } catch (a) {
    t(`Failed to record update result: ${a}`, { level: "error" });
  }
}
async function kCr(e) {
  let n;
  if (z() && e) {
    let a = await e.read([M()]);
    if (!a.ok)
      return (t(`Failed to read update result: ${a.error.code}`, { level: "error" }), null);
    let o = a.value.items[0];
    if (!o.found) return null;
    n = Buffer.from(o.value).toString("utf8");
  } else {
    if (J()) return null;
    try {
      n = await hn().read(S());
    } catch (a) {
      if (!G(a)) t(`Failed to read update result: ${a}`, { level: "error" });
      return null;
    }
  }
  try {
    let a = Q().safeParse(te(n));
    return a.success ? a.data : null;
  } catch {
    return null;
  }
}
import { readFile as Y } from "fs/promises";
function Z(e, n) {
  return n.includes(e.id) || e.idLike.some((a) => n.includes(a));
}
class I {
  sources;
  osRelease;
  pacman;
  deb;
  rpm;
  apk;
  packageManager;
  constructor(e) {
    this.sources = e;
  }
  getOsRelease() {
    return (this.osRelease ??= this.sources.readOsRelease().then(
      (e) => {
        let n = e.match(/^ID=["']?(\S+?)["']?\s*$/m),
          a = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
        return { id: n?.[1] ?? "", idLike: a?.[1]?.split(" ") ?? [] };
      },
      () => null
    ));
  }
  detectPacman() {
    return (this.pacman ??= this.ownsExecutable(["arch"], "pacman", ["-Qo"]));
  }
  detectDeb() {
    return (this.deb ??= this.ownsExecutable(["debian"], "dpkg", ["-S"]));
  }
  detectRpm() {
    return (this.rpm ??= this.ownsExecutable(["fedora", "rhel", "suse"], "rpm", ["-qf"]));
  }
  detectApk() {
    return (this.apk ??= this.ownsExecutable(["alpine"], "apk", ["info", "--who-owns"]));
  }
  async ownsExecutable(e, n, a) {
    if (this.sources.platform() !== "linux") return !1;
    let o = await this.getOsRelease();
    if (o && !Z(o, e)) return !1;
    let r = await this.sources.execFileNoThrow(n, [...a, this.sources.execPath()], {
      timeout: 5000,
      useCwd: !1,
      useToolMemoryCgroup: !1
    });
    if (r.code === 0 && r.stdout) return (t(`Detected ${n} installation: ${r.stdout.trim()}`), !0);
    return !1;
  }
  detectHomebrew() {
    let e = this.sources.platform();
    if (e !== "macos" && e !== "linux" && e !== "wsl") return !1;
    let n = this.sources.execPath();
    if (n.includes("/Caskroom/")) return (t(`Detected Homebrew cask installation: ${n}`), !0);
    return !1;
  }
  getHomebrewCaskName() {
    return this.sources.execPath().match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
  }
  detectWinget() {
    if (this.sources.platform() !== "windows") return !1;
    let e = this.sources.execPath();
    for (let n of [/Microsoft[/\\]WinGet[/\\]Packages/i, /Microsoft[/\\]WinGet[/\\]Links/i])
      if (n.test(e)) return (t(`Detected winget installation: ${e}`), !0);
    return !1;
  }
  detectMise() {
    let e = this.sources.execPath();
    if (/[/\\]mise[/\\]installs[/\\]/i.test(e)) return (t(`Detected mise installation: ${e}`), !0);
    return !1;
  }
  detectAsdf() {
    let e = this.sources.execPath();
    if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e))
      return (t(`Detected asdf installation: ${e}`), !0);
    return !1;
  }
  getPackageManager() {
    return (this.packageManager ??= this.detectPackageManager());
  }
  async detectPackageManager() {
    if (this.detectHomebrew()) return "homebrew";
    if (this.detectWinget()) return "winget";
    if (this.detectMise()) return "mise";
    if (this.detectAsdf()) return "asdf";
    if (await this.detectPacman()) return "pacman";
    if (await this.detectApk()) return "apk";
    if (await this.detectDeb()) return "deb";
    if (await this.detectRpm()) return "rpm";
    return "unknown";
  }
}
var ee = new W(
  () =>
    new I({
      platform: O,
      readOsRelease: () => Y("/etc/os-release", "utf8"),
      execFileNoThrow: it,
      execPath: () => process.execPath || process.argv[0] || ""
    })
);
function y() {
  return ee.of(U().host);
}
function L() {
  return y().detectPacman();
}
function D() {
  return y().detectDeb();
}
function E() {
  return y().detectRpm();
}
function T() {
  return y().detectApk();
}
function Sjn() {
  return y().detectHomebrew();
}
function rpt() {
  return y().getHomebrewCaskName();
}
function H() {
  return y().detectWinget();
}
function j() {
  return y().detectMise();
}
function N() {
  return y().detectAsdf();
}
function N1e() {
  return y().getPackageManager();
}
function se() {
  let e = process.argv[1] || "",
    n = process.execPath || process.argv[0] || "";
  if (O() === "windows") ((e = e.split(v.sep).join(k.sep)), (n = n.split(v.sep).join(k.sep)));
  return [e, n];
}
async function oe() {
  let [e, n] = se();
  if (qf()) {
    let l = Le().replace(/\\/g, "/").replace(/\/+$/, "") + "/local/node_modules/";
    if (n.startsWith(l)) return "npm-local";
    if (n.includes("/node_modules/@anthropic-ai/")) return "npm-global";
    if (Sjn() || H() || j() || N() || (await L()) || (await D()) || (await E()) || (await T()))
      return "package-manager";
    return "native";
  }
  if (hPs()) return "npm-local";
  if (
    [
      "/usr/local/lib/node_modules",
      "/usr/lib/node_modules",
      "/opt/homebrew/lib/node_modules",
      "/opt/homebrew/bin",
      "/usr/local/bin",
      "/.nvm/versions/node/"
    ].some((l) => e.includes(l))
  )
    return "npm-global";
  if (e.includes("/npm/") || e.includes("/nvm/")) return "npm-global";
  let o = await RM("npm config get prefix", { reject: !1 }),
    r = o.exitCode === 0 ? o.stdout.trim() : null;
  if (r && e.startsWith(r)) return "npm-global";
  return "unknown";
}
class B {
  attempted = !1;
}
var K = new W(() => new B());
function mvo() {
  return K.of(U().host).attempted;
}
async function $1e() {
  return ((K.of(U().host).attempted = !0), await oe());
}
async function re() {
  if (qf()) {
    try {
      return await F(process.execPath);
    } catch {}
    try {
      let e = await hc("claude");
      if (e) return e;
    } catch {}
    try {
      return (await ie().stat(d(x(), ".local/bin/claude")), d(x(), ".local/bin/claude"));
    } catch {}
    return "native";
  }
  try {
    return process.argv[0] || "unknown";
  } catch {
    return "unknown";
  }
}
function le() {
  try {
    if (qf()) return process.execPath || "unknown";
    return process.argv[1] || "unknown";
  } catch {
    return "unknown";
  }
}
async function ce() {
  let e = ie(),
    n = [],
    a = d(x(), ".claude", "local");
  if (await F1e()) n.push({ type: "npm-local", path: a });
  let o = ["@anthropic-ai/claude-code"];
  if (
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
        new __filePath_ce31d4628ce160b3_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL &&
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
        new __filePath_ce31d4628ce160b3_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL !== "@anthropic-ai/claude-code"
  )
    o.push(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
          new __filePath_ce31d4628ce160b3_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.PACKAGE_URL
    );
  let r = await it("npm", ["-g", "config", "get", "prefix"], { cwd: Txe(fe(), x()) });
  if (r.code === 0 && r.stdout) {
    let s = r.stdout.trim(),
      b = O() === "windows",
      m = b ? d(s, "claude") : d(s, "bin", "claude"),
      A = !1;
    try {
      (await e.stat(m), (A = !0));
    } catch {}
    if (A) {
      let f = !1;
      try {
        if ((await F(m)).includes("/Caskroom/")) f = Sjn();
      } catch {}
      if (!f) {
        let g = !1;
        for (let w of o) {
          let P = b ? d(s, "node_modules", w) : d(s, "lib", "node_modules", w);
          try {
            (await e.stat(P), (g = !0));
            break;
          } catch {}
        }
        if (g) n.push({ type: "npm-global", path: m });
      }
    } else
      for (let f of o) {
        let g = b ? d(s, "node_modules", f) : d(s, "lib", "node_modules", f);
        try {
          (await e.stat(g), n.push({ type: "npm-global-orphan", path: g }));
        } catch {}
      }
  }
  let l = d(x(), ".local", "bin", "claude");
  try {
    (await e.stat(l), n.push({ type: "native", path: l }));
  } catch {}
  if (ue().installMethod === "native") {
    let s = d(x(), ".local", "share", "claude");
    try {
      if ((await e.stat(s), !n.some((b) => b.type === "native")))
        n.push({ type: "native", path: s });
    } catch {}
  }
  return n;
}
function de(e, n) {
  let a = O() === "windows",
    o = n;
  if (a) o = n.split(v.sep).join(k.sep).toLowerCase();
  return e.some((r) => {
    let l = r;
    if (a) l = r.split(v.sep).join(k.sep).toLowerCase();
    let c = l.replace(/\/+$/, ""),
      s = r.replace(/[/\\]+$/, "");
    return c === o || s === "~/.local/bin" || s === "$HOME/.local/bin";
  });
}
async function pe(e) {
  let n = [],
    a = V_n();
  if (a)
    n.push({
      issue: `otelHeadersHelper is configured but its last invocation failed: ${b6(a, mdr)}`,
      fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable."
    });
  let o = ue();
  if (e === "development") return n;
  if (e === "native") {
    let c = (i.PATH || "").split(ae),
      s = x(),
      b = d(s, ".local", "bin"),
      m = d(s9(), "claude");
    if (!(await ZFt(m)) && !(await hQe(m).catch(() => !1)))
      n.push({
        issue: `${m} was not created by the native installer (it is not a symlink into the versions/ directory), so auto-update leaves it untouched.`,
        fix: `If you put a launcher wrapper there on purpose, this is expected \u2014 new versions still install under $XDG_DATA_HOME/claude/versions, your launcher decides what runs, and automatic version cleanup is disabled on this machine (the installer cannot tell which version your launcher needs, so it keeps them all). To let Claude Code manage the launcher again, remove ${m} and run \`claude update\`.`
      });
    if (!de(c, b))
      if (O() === "windows") {
        let f = b.split(k.sep).join(v.sep);
        n.push({
          issue: `Native installation exists but ${f} is not in your PATH`,
          fix: "Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal."
        });
      } else {
        let f = ipt(),
          w = z9e()[f],
          P = w ? w.replace(x(), "~") : "your shell config file";
        n.push({
          issue: "Native installation exists but ~/.local/bin is not in your PATH",
          fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${P} then open a new terminal or run: source ${P}`
        });
      }
  }
  if (!Ne(process.env.DISABLE_INSTALLATION_CHECKS)) {
    if (e === "npm-local" && o.installMethod !== "local")
      n.push({
        issue: `Running from local installation but config install method is '${o.installMethod ?? "not set"}'`,
        fix: "Consider using native installation: `claude install`"
      });
    if (e === "native" && o.installMethod !== "native")
      n.push({
        issue: `Running native installation but config install method is '${o.installMethod ?? "not set"}'`,
        fix: "Run `claude install` to update configuration"
      });
  }
  if (e === "npm-global" && (await F1e()))
    n.push({
      issue: "Local installation exists but not being used",
      fix: "Consider using native installation: `claude install`"
    });
  let r = await hvo(),
    l = await yPs();
  if (e === "npm-local") {
    if (!(await hc("claude")) && !l)
      if (r)
        n.push({
          issue: "Local installation not accessible",
          fix: `Alias exists but points to invalid target: ${r}. Update alias: alias claude="~/.claude/local/claude"`
        });
      else
        n.push({
          issue: "Local installation not accessible",
          fix: 'Create alias: alias claude="~/.claude/local/claude"'
        });
  }
  return n;
}
async function me() {
  return null;
}
function he() {
  if (!ze.isSandboxingEnabled()) return [];
  if (ze.canMaskCredentialWarningFire()) ze.checkDependencies();
  let e = ze.getMaskCredentialWarning();
  if (!e) return [];
  return e.split(" \xB7 ").map((n) => {
    if (n.includes("have an empty injectHosts"))
      return {
        issue: n.replace(/\.\s*If the adapter forced this.*$/, ""),
        fix: "If the adapter forced this (a filesystem.allowRead entry re-opened a denied credential path), remove the conflicting allowRead entry or the deny; if a parent/managed settings tier supplied this mask, sentinel-only is its intended posture (that channel cannot grant injection, so an injectHosts set there is stripped on load) and the entry can only be removed in the parent settings; otherwise set injectHosts or remove the entry"
      };
    if (n.includes("degrade to deny on macOS"))
      return {
        issue: n.replace(/\.\s*Note that switching them.*$/, ""),
        fix: "Set sandbox.filesystem.disabled: false in user or managed settings (overrides the GrowthBook policy; ignored if managed settings pin the filesystem layer), or remove the mask entries \u2014 a deny provides no protection while the relaxed filesystem policy is active"
      };
    return {
      issue: n.replace(/\s*Enable sandbox\.network\.tlsTerminate.*$/, ""),
      fix: Wde()
        ? "Set sandbox.enabled: true plus sandbox.network.tlsTerminate, or remove the mask entries \u2014 TLS termination is never enabled in scrub-only mode"
        : "Enable sandbox.network.tlsTerminate (or remove the mask entries)"
    };
  });
}
function be() {
  if (O() !== "linux") return [];
  let e = [],
    n = ze.getLinuxGlobPatternWarnings();
  if (n.length > 0) {
    let a = XHt(n);
    e.push({
      issue: "Glob patterns in sandbox permission rules are not fully supported on Linux",
      fix: `Found ${n.length} pattern(s): ${a}. On Linux, glob patterns in Edit/Read rules will be ignored.`
    });
  }
  return e;
}
async function we() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return [];
  if (!ze.isSandboxingEnabled()) return [];
  let n = ze.getConfig();
  if (n === void 0 || n.filesystem.disabled) return [];
  let { denyWithinAllow: a } = ze.getFsWriteConfig(),
    o = await Promise.all(
      a.map(async (l) => {
        try {
          let c = await ne(l);
          return c.isFile() && c.size === 0 && (c.mode & 146) === 0 && c.nlink === 1;
        } catch {
          return !1;
        }
      })
    ),
    r = new Set(a.filter((l, c) => o[c]));
  if (r.size === 0) return [];
  return [
    {
      issue: `Sandbox mask files left behind at write-deny paths: ${XHt([...r])}`,
      fix: 'A session leaves one where it was killed, or where it exited while a sandboxed command was still running. Remove each with `rm <path>` while no other Claude Code session is running in that project \u2014 a 0-byte read-only file where a settings file belongs makes "Yes, and don\'t ask again" fail to save, and the sandbox binds it read-only again on every start'
    }
  ];
}
function ye() {
  let e = ze.getUnbracketedIpv6DomainWarnings();
  if (e.length === 0) return [];
  return [
    {
      issue: "Sandbox network domain entries have unreliable spellings",
      fix: `Found: ${XHt(e)}. IPv6 literals must be bracketed, with any port 1-65535 and no leading zeros ("[::1]", "[::1]:443"); non-IPv6 entries must not contain wildcards in brackets, extra colons, "@", or path/query characters, and must use their canonical spelling (lowercase, no trailing dot, punycode). Until fixed, enforcement is conservative: a denied entry denies at least what any parseable reading denies (an entry with no parseable reading denies nothing); an allowed entry never allows more than written and may be removed entirely; bracketed IPv6-glob entries apply to in-process checks only, not the sandbox proxy.`
    }
  ];
}
function xe() {
  let e = ze.getUnbracketedIpv6InjectHostWarnings();
  if (e.length === 0) return [];
  return [
    {
      issue: "Sandbox credential injectHosts entries can never match their destination",
      fix: `Found: ${XHt(e)}. Credential injection matches the bare, canonically-compressed destination address exactly and ignores ports \u2014 rewrite each entry as that bare form (e.g. "::1", "2001:db8::1"). Bracketed, zone-id, or non-canonical IPv6 spellings never match, so the credential is never injected there.`
    }
  ];
}
async function Pe() {
  if (!QK() || !ze.isPlatformInEnabledList() || !ze.isSandboxEnabledInSettings()) return [];
  let e = await vjn();
  return e === void 0
    ? []
    : [
        {
          issue:
            "The sandbox is turned on but can't start, because of the Windows Secondary Logon service",
          fix: e
        }
      ];
}
async function opt({ probeKeychain: e = !1, storageV5: n } = {}) {
  let a = await $1e(),
    o =
      typeof {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
          new __filePath_ce31d4628ce160b3_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      } < "u" &&
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
          new __filePath_ce31d4628ce160b3_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
        ? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(new __filePath_ce31d4628ce160b3_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}${l5()}`
        : "unknown",
    r = await re(),
    l = le(),
    c = await ce(),
    s = await pe(a),
    { checkInstall: b } = await import("./chunk-ebz71681.js");
  for (let h of await b())
    if (h.type === "error")
      s.push({ issue: h.message, fix: "Run claude install to repair the installation." });
  if ((s.push(...be()), s.push(...ye()), ze.isSandboxingEnabled()))
    await ze.checkDependenciesAsync();
  let m = TCr();
  if (m) s.push(m);
  if ((s.push(...xe()), s.push(...he()), s.push(...(await we())), s.push(...(await Pe())), e)) {
    let h = await me();
    if (h) s.push(h);
  }
  if (a === "native") {
    let h = c.filter(
        (u) => u.type === "npm-global" || u.type === "npm-global-orphan" || u.type === "npm-local"
      ),
      R = O() === "windows";
    for (let u of h)
      if (u.type === "npm-global") {
        let C = "npm -g uninstall @anthropic-ai/claude-code";
        if (
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
              new __filePath_ce31d4628ce160b3_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.PACKAGE_URL &&
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(
              new __filePath_ce31d4628ce160b3_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.PACKAGE_URL !== "@anthropic-ai/claude-code"
        )
          C += ` && npm -g uninstall ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_ce31d4628ce160b3(new __filePath_ce31d4628ce160b3_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.PACKAGE_URL}`;
        s.push({ issue: `Leftover npm global installation at ${u.path}`, fix: `Run: ${C}` });
      } else if (u.type === "npm-global-orphan")
        s.push({
          issue: `Orphaned npm global package at ${u.path}`,
          fix: R ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
        });
      else if (u.type === "npm-local")
        s.push({
          issue: `Leftover npm local installation at ${u.path}`,
          fix: R ? `Run: rmdir /s /q "${u.path}"` : `Run: rm -rf ${u.path}`
        });
  }
  let f = ue().installMethod || "not set",
    g = null;
  if (a === "npm-global") {
    if (((g = (await SPs()).hasPermissions), !g && !tNe()))
      s.push({
        issue: "Can't auto-update: npm global folder isn't writable",
        fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall"
      });
  }
  let w = qqs(),
    P = { working: w.working ?? !0, mode: w.mode, systemPath: w.mode === "system" ? w.path : null },
    V = a === "package-manager" ? await N1e() : void 0,
    q = await kCr(n);
  return {
    installationType: a,
    version: o,
    installationPath: r,
    invokedBinary: l,
    configInstallMethod: f,
    autoUpdates: (() => {
      let h = tNe();
      return h ? `disabled (${xbn(h)})` : "enabled";
    })(),
    hasUpdatePermissions: g,
    lastUpdateResult: q,
    multipleInstallations: c,
    warnings: s,
    packageManager: V,
    ripgrepStatus: P
  };
}
export { G9e, kCr, Sjn, rpt, N1e, mvo, $1e, opt };

//# sourceMappingURL=chunk-wr09hc4c.js.map
