// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { Vt } from "./chunk-fs43t96t.js";
import { g, m } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { hc, i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { it, ct } from "./chunk-qmmh8tq2.js";
import { zi } from "./chunk-ynkasage.js";
import { HG, f4s, p4s } from "./chunk-5bfrnkry.js";
import { za } from "./chunk-j4601ec1.js";
import { readdir as x, stat as w } from "fs/promises";
import { homedir as v, platform as _, userInfo as P } from "os";
import { join as u } from "path";
var jD = `mcp__${za}__`,
  OG = "ClaudeInChromeDomain",
  l = {
    chrome: {
      name: "Google Chrome",
      macos: {
        appName: "Google Chrome",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Google",
          "Chrome",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["google-chrome", "google-chrome-stable"],
        nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Google", "Chrome", "User Data"],
        registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
        appPathsExe: "chrome.exe"
      }
    },
    brave: {
      name: "Brave",
      macos: {
        appName: "Brave Browser",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "BraveSoftware",
          "Brave-Browser",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["brave-browser", "brave"],
        nativeMessagingPath: [".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
        registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts",
        appPathsExe: "brave.exe"
      }
    },
    arc: {
      name: "Arc",
      macos: {
        appName: "Arc",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Arc",
          "User Data",
          "NativeMessagingHosts"
        ]
      },
      linux: { binaries: [], nativeMessagingPath: [] },
      windows: {
        dataPath: ["Arc", "User Data"],
        registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
      }
    },
    chromium: {
      name: "Chromium",
      macos: {
        appName: "Chromium",
        nativeMessagingPath: ["Library", "Application Support", "Chromium", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["chromium", "chromium-browser"],
        nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Chromium", "User Data"],
        registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
      }
    },
    edge: {
      name: "Microsoft Edge",
      macos: {
        appName: "Microsoft Edge",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Microsoft Edge",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["microsoft-edge", "microsoft-edge-stable"],
        nativeMessagingPath: [".config", "microsoft-edge", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Microsoft", "Edge", "User Data"],
        registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts",
        appPathsExe: "msedge.exe"
      }
    },
    vivaldi: {
      name: "Vivaldi",
      macos: {
        appName: "Vivaldi",
        nativeMessagingPath: ["Library", "Application Support", "Vivaldi", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["vivaldi", "vivaldi-stable"],
        nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Vivaldi", "User Data"],
        registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts",
        appPathsExe: "vivaldi.exe"
      }
    },
    opera: {
      name: "Opera",
      macos: {
        appName: "Opera",
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "com.operasoftware.Opera",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["opera"],
        nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Opera Software", "Opera Stable"],
        registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
        useRoaming: !0,
        appPathsExe: "opera.exe"
      }
    }
  },
  h = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];
function XNo() {
  let e = O(),
    o = v(),
    r = [];
  for (let s of h) {
    let a = l[s];
    switch (e) {
      case "macos":
        if (a.macos.nativeMessagingPath.length > 0)
          r.push({ browser: s, path: u(o, ...a.macos.nativeMessagingPath) });
        break;
      case "linux":
      case "wsl":
        if (a.linux.nativeMessagingPath.length > 0)
          r.push({ browser: s, path: u(o, ...a.linux.nativeMessagingPath) });
        break;
      case "windows":
        break;
    }
  }
  return r;
}
function JNo() {
  let e = [];
  for (let o of h) {
    let r = l[o];
    if (r.windows.registryKey) e.push({ browser: o, key: r.windows.registryKey });
  }
  return e;
}
async function YFr() {
  let e = O();
  for (let o of h) {
    let r = l[o];
    switch (e) {
      case "macos": {
        let s = `/Applications/${r.macos.appName}.app`;
        try {
          if ((await w(s)).isDirectory())
            return (t(`[Claude in Chrome] Detected browser: ${r.name}`), o);
        } catch (a) {
          if (!Vt(a)) throw a;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (let s of r.linux.binaries)
          if (await hc(s).catch(() => null))
            return (t(`[Claude in Chrome] Detected browser: ${r.name}`), o);
        break;
      }
      case "windows": {
        let s = v();
        if (r.windows.dataPath.length > 0) {
          let a = r.windows.useRoaming ? u(s, "AppData", "Roaming") : u(s, "AppData", "Local"),
            p = u(a, ...r.windows.dataPath);
          try {
            if ((await w(p)).isDirectory())
              return (t(`[Claude in Chrome] Detected browser: ${r.name}`), o);
          } catch (n) {
            if (!Vt(n)) throw n;
          }
        }
        break;
      }
    }
  }
  return null;
}
var y = 200;
function QNo(e) {
  let o = zi().trackedTabIds;
  if (o.size >= y && !o.has(e)) o.clear();
  o.add(e);
}
function ZNo(e) {
  return zi().trackedTabIds.has(e);
}
function d(e) {
  return {
    exec_exit_code: e.code,
    exec_failure_kind:
      e.exitCode !== void 0
        ? b("nonzero_exit")
        : e.code === 127
          ? b("not_found")
          : b("spawn_failed_or_killed")
  };
}
async function Aze(e) {
  if (!/^https?:\/\//i.test(e)) return (m("chrome_open_url", "invalid_url"), !1);
  let o = O(),
    r = await YFr();
  if (!r)
    return (
      t("[Claude in Chrome] No compatible browser found"),
      m("chrome_open_url", "no_browser"),
      !1
    );
  let s = l[r];
  switch (o) {
    case "macos": {
      let a = await it("open", ["-a", s.macos.appName, e]);
      if (a.code === 0) return (g("chrome_open_url"), !0);
      return (m("chrome_open_url", "exec_failed", d(a)), !1);
    }
    case "windows": {
      let a = s.windows.appPathsExe,
        p = !1;
      if (a) {
        let f = await f4s(a);
        if (f) {
          if (await p4s(f, [e]))
            return (g("chrome_open_url", { open_method: b("app_paths"), browser: c(r) }), !0);
          p = !0;
        }
      }
      let n = await ct("rundll32", ["url,OpenURL", e], { cwd: HG() });
      if (n.code === 0)
        return (
          g("chrome_open_url", {
            open_method: p
              ? b("rundll32_after_spawn_fail")
              : a
                ? b("rundll32")
                : b("rundll32_no_app_paths_support"),
            browser: c(r)
          }),
          !0
        );
      return (
        m("chrome_open_url", "exec_failed", {
          ...d(n),
          ...(p && { app_paths_spawn_failed: !0 }),
          browser: c(r)
        }),
        !1
      );
    }
    case "wsl":
    case "linux": {
      let a;
      for (let p of s.linux.binaries) {
        let n = await it(p, [e], { useCwd: !0, useToolMemoryCgroup: !1 });
        if (n.code === 0) return (g("chrome_open_url"), !0);
        if (a?.exitCode === void 0 || n.exitCode !== void 0) a = n;
      }
      return (m("chrome_open_url", "exec_failed", a ? d(a) : void 0), !1);
    }
    default:
      return (m("chrome_open_url", "exec_failed"), !1);
  }
}
function Aun() {
  return `/tmp/claude-mcp-browser-bridge-${M()}`;
}
function Cun() {
  if (_() === "win32") return `\\\\.\\pipe\\${C()}`;
  return u(Aun(), `${process.pid}.sock`);
}
async function e$o() {
  if (_() === "win32") return [`\\\\.\\pipe\\${C()}`];
  let e = [],
    o = Aun();
  try {
    let r = await x(o);
    for (let s of r) if (s.endsWith(".sock")) e.push(u(o, s));
  } catch {}
  return e;
}
function C() {
  return `claude-mcp-browser-bridge-${M()}`;
}
function M() {
  try {
    return P().username || "default";
  } catch {
    return i.USER || i.USERNAME || "default";
  }
}
export { jD, OG, XNo, JNo, YFr, QNo, ZNo, Aze, Aun, Cun, e$o };

//# sourceMappingURL=chunk-36ftx0qt.js.map
