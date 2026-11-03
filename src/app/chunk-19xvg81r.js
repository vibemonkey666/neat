// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ie, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { jAt } from "./chunk-sbz6hrpt.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { readdir as m, readFile as f } from "fs/promises";
import { release as p } from "os";
var d = ve({ value: !1 }, (e) => {
  e.value = !1;
});
function c() {
  return d.value;
}
function m9r() {
  if (c()) return;
  try {
    return ie().readFileSync("/proc/version", { encoding: "utf8" }).toLowerCase();
  } catch {
    return;
  }
}
var oes = ["macos", "wsl"];
class u {
  sources;
  primedProcVersion;
  fallbackProcVersion;
  fallbackProcVersionRead = !1;
  platform;
  wslVersion = null;
  macOSMajorVersion = null;
  linuxDistroInfo;
  constructor(e) {
    this.sources = e;
  }
  kernelString() {
    if (this.primedProcVersion !== void 0) return this.primedProcVersion;
    if (!this.fallbackProcVersionRead)
      ((this.fallbackProcVersion = this.sources.readProcVersionSync()),
        (this.fallbackProcVersionRead = !0));
    return this.fallbackProcVersion;
  }
  getPlatform() {
    if (this.platform !== void 0) return this.platform;
    try {
      if (this.sources.platform === "darwin") this.platform = "macos";
      else if (this.sources.platform === "win32") this.platform = "windows";
      else if (this.sources.platform === "linux")
        if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP) this.platform = "wsl";
        else {
          let e = this.kernelString();
          this.platform = e !== void 0 && jAt(e) ? "wsl" : "linux";
        }
      else this.platform = "unknown";
    } catch (e) {
      (l(e), (this.platform = "unknown"));
    }
    return this.platform;
  }
  getWslVersion() {
    if (this.wslVersion !== null) return this.wslVersion;
    if (this.sources.platform !== "linux") {
      this.wslVersion = void 0;
      return;
    }
    let e = this.kernelString();
    if (e === void 0) {
      this.wslVersion = void 0;
      return;
    }
    let r = e.match(/wsl(\d+)/);
    if (r && r[1]) this.wslVersion = r[1];
    else if (e.includes("microsoft")) this.wslVersion = "1";
    else this.wslVersion = void 0;
    return this.wslVersion;
  }
  getMacOSMajorVersion() {
    if (this.macOSMajorVersion !== null) return this.macOSMajorVersion;
    if (this.sources.platform !== "darwin") {
      this.macOSMajorVersion = void 0;
      return;
    }
    let e = this.sources.osRelease().match(/^(\d+)\./);
    return (
      (this.macOSMajorVersion = e && e[1] ? parseInt(e[1], 10) - 9 : void 0),
      this.macOSMajorVersion
    );
  }
  getLinuxDistroInfo() {
    return (this.linuxDistroInfo ??= this.readLinuxDistroInfo());
  }
  async readLinuxDistroInfo() {
    if (this.sources.platform !== "linux") return;
    let e = { linuxKernel: this.sources.osRelease() };
    try {
      let r = await this.sources.readOsRelease();
      for (let s of r.split(`
`)) {
        let n = s.match(/^(ID|VERSION_ID)=(.*)$/);
        if (n && n[1] && n[2]) {
          let i = n[2].replace(/^"|"$/g, "");
          if (n[1] === "ID") e.linuxDistroId = i;
          else e.linuxDistroVersion = i;
        }
      }
    } catch {}
    return e;
  }
  async prime() {
    if (this.primedProcVersion !== void 0 || this.sources.platform !== "linux") return;
    try {
      let e = await this.sources.readProcVersion();
      this.primedProcVersion = e.toLowerCase();
    } catch (e) {
      t(`Failed to read /proc/version for WSL detection: ${e}`, { level: "error" });
      return;
    }
    ((this.platform = void 0), (this.wslVersion = null));
  }
}
var h;
function o() {
  return (h ??= new u({
    platform: "linux",
    env: process.env,
    readProcVersionSync: m9r,
    readProcVersion: () => f("/proc/version", { encoding: "utf8" }),
    osRelease: p,
    readOsRelease: () => f("/etc/os-release", "utf8")
  }));
}
function jfi() {
  return o().prime();
}
function O() {
  return o().getPlatform();
}
function z$e(e) {
  switch (e) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    default:
      return e;
  }
}
function oYe() {
  return o().getWslVersion();
}
function jlr() {
  return o().getLinuxDistroInfo();
}
function Wfi() {
  return o().getMacOSMajorVersion();
}
var g = [
  [".git", "git"],
  [".hg", "mercurial"],
  [".svn", "svn"],
  [".p4config", "perforce"],
  ["$tf", "tfs"],
  [".tfvc", "tfs"],
  [".jj", "jujutsu"],
  [".sl", "sapling"]
];
async function Gfi(e) {
  let r = new Set();
  if (process.env.P4PORT) r.add("perforce");
  try {
    let s = e ?? ie().cwd(),
      n = new Set(await m(s));
    for (let [i, a] of g) if (n.has(i)) r.add(a);
  } catch {}
  return [...r];
}
export { m9r, oes, jfi, O, z$e, oYe, jlr, Wfi, Gfi };

//# sourceMappingURL=chunk-19xvg81r.js.map
