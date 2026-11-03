// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E, Er } from "./chunk-fs43t96t.js";
import { g, m } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { We } from "./chunk-pgnjjhxv.js";
import { hc } from "./chunk-cj37hmns.js";
import { it } from "./chunk-qmmh8tq2.js";
import { pt } from "./chunk-7c3thgax.js";
import { Z7e } from "./chunk-zvsmc5fn.js";
import { iae } from "./chunk-rv4ymqf0.js";
import { bKe } from "./chunk-ny2y84j1.js";
import { z } from "./chunk-p197ae0z.js";
import { promises as n } from "fs";
import * as w from "os";
import * as o from "path";
var D = "com.anthropic.claude-code-url-handler",
  p = "Claude Code URL Handler",
  h = "claude-code-url-handler.desktop",
  _ = "Claude Code URL Handler.app",
  c = o.join(w.homedir(), "Applications", _),
  l = o.join(c, "Contents", "MacOS", "claude");
function d() {
  return o.join(bKe(), "applications", h);
}
var u = `HKEY_CURRENT_USER\\Software\\Classes\\${iae}`,
  k = `${u}\\shell\\open\\command`,
  f = 86400000;
function y(e) {
  return `Exec="${e}" --handle-uri %u`;
}
function C(e) {
  return `"${e}" --handle-uri "%1"`;
}
async function F(e) {
  let r = o.join(c, "Contents");
  try {
    await n.rm(c, { recursive: !0 });
  } catch (s) {
    if (E(s) !== "ENOENT") throw s;
  }
  await n.mkdir(o.dirname(l), { recursive: !0 });
  let i = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${D}</string>
  <key>CFBundleName</key>
  <string>${p}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${iae}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  (await n.writeFile(o.join(r, "Info.plist"), i),
    await n.symlink(e, l),
    await it(
      "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",
      ["-R", c],
      { useCwd: !1 }
    ),
    t(`Registered ${iae}:// protocol handler at ${c}`));
}
async function L(e) {
  await n.mkdir(o.dirname(d()), { recursive: !0 });
  let r = `[Desktop Entry]
Name=${p}
Comment=Handle ${iae}:// deep links for Claude Code
${y(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${iae};
`;
  await n.writeFile(d(), r);
  let i = await hc("xdg-mime");
  if (i) {
    let { code: a } = await it(i, ["default", h, `x-scheme-handler/${iae}`], { useCwd: !1 });
    if (a !== 0)
      throw Object.assign(Error(`xdg-mime exited with code ${a}`), { code: "XDG_MIME_FAILED" });
  }
  t(`Registered ${iae}:// protocol handler at ${d()}`);
}
async function S(e) {
  for (let r of [
    ["add", u, "/ve", "/d", `URL:${p}`, "/f"],
    ["add", u, "/v", "URL Protocol", "/d", "", "/f"],
    ["add", k, "/ve", "/d", C(e), "/f"]
  ]) {
    let { code: i } = await it("reg", r, { useCwd: !1 });
    if (i !== 0)
      throw Object.assign(Error(`reg add exited with code ${i}`), { code: "REG_FAILED" });
  }
  t(`Registered ${iae}:// protocol handler in Windows registry`);
}
async function x(e) {
  let r = e ?? (await P());
  switch ("linux") {
    case "darwin":
      await F(r);
      break;
    case "linux":
      await L(r);
      break;
    case "win32":
      await S(r);
      break;
    default:
      throw Error("Unsupported platform: linux");
  }
}
async function P() {
  if (__invocation_ce16cfc325413828.isSourceMode())
    return __invocation_ce16cfc325413828.programPath();
  let e = Z7e();
  try {
    return (await n.realpath(e), e);
  } catch {
    return process.execPath;
  }
}
async function v(e) {
  try {
    switch ("linux") {
      case "darwin":
        return (await n.readlink(l)) === e;
      case "linux":
        return (await n.readFile(d(), "utf8")).includes(y(e));
      case "win32": {
        let { stdout: r, code: i } = await it("reg", ["query", k, "/ve"], { useCwd: !1 });
        return i === 0 && r.includes(C(e));
      }
      default:
        return !1;
    }
  } catch {
    return !1;
  }
}
async function hls(e) {
  if (pt().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("linux")) return;
  let r = await P();
  if (await v(r)) return;
  let i = o.join(Le(), ".deep-link-register-failed");
  if (z() && e !== void 0) {
    let a = await e.stat(We.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < f) return;
  } else
    try {
      let a = await n.stat(i);
      if (Date.now() - a.mtimeMs < f) return;
    } catch {}
  try {
    if (
      (await x(r),
      g("deep_link_register"),
      t("Auto-registered claude-cli:// deep link protocol handler"),
      z() && e !== void 0)
    )
      await e.delete(We.state("deep-link-register-failed"));
    else await n.rm(i, { force: !0 }).catch(() => {});
  } catch (a) {
    let s = Er(a);
    if (
      (m("deep_link_register", s ?? "register_failed"),
      t(
        `Failed to auto-register deep link protocol handler: ${a instanceof Error ? a.message : String(a)}`,
        { level: "warn" }
      ),
      s === "EACCES" || s === "ENOSPC")
    )
      if (z() && e !== void 0)
        await e.write(We.state("deep-link-register-failed"), "", { publishDiscipline: "inPlace" });
      else await n.writeFile(i, "").catch(() => {});
  }
}
export { hls };

import * as __invocation_ce16cfc325413828 from "./__invocation.mjs";

//# sourceMappingURL=chunk-705btg35.js.map
