// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k } from "./chunk-ajtyjx88.js";
import { L } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { d, E, Us } from "./chunk-fs43t96t.js";
import { dl } from "./chunk-h5gbmqm1.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { stat as C } from "fs/promises";
import { homedir as _ } from "os";
import { join as s } from "path";
function B() {
  switch ("linux") {
    case "darwin":
      return [
        "Google Chrome.app/Contents/MacOS/Google Chrome",
        "Chromium.app/Contents/MacOS/Chromium",
        "Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
        "Brave Browser.app/Contents/MacOS/Brave Browser"
      ].flatMap((r) => [s("/Applications", r), s(_(), "Applications", r)]);
    case "win32":
      return ["C:\\Program Files", "C:\\Program Files (x86)", s(_(), "AppData", "Local")].flatMap(
        (r) => [
          s(r, "Google", "Chrome", "Application", "chrome.exe"),
          s(r, "Chromium", "Application", "chrome.exe"),
          s(r, "Microsoft", "Edge", "Application", "msedge.exe")
        ]
      );
    default:
      return [
        "/usr/bin/google-chrome-stable",
        "/usr/bin/google-chrome",
        "/usr/bin/chromium-browser",
        "/usr/bin/chromium",
        "/usr/local/bin/chromium",
        "/opt/google/chrome/chrome"
      ];
  }
}
async function T(e, r) {
  try {
    let o = await C(e);
    return o.isFile() && (o.mode & 73) !== 0;
  } catch (o) {
    if (r && !Us(o)) throw o;
    return !1;
  }
}
async function v(e) {
  let r = [];
  for (let o of B()) {
    if (dl(o)) continue;
    if (await T(o, e?.strict === !0)) r.push(o);
  }
  return r;
}
import { lstatSync as O } from "fs";
import { isAbsolute as R, join as p, relative as S, sep as h } from "path";
var x = "/mnt/skills",
  y = "examples/artifact-emulator",
  Zbo = "scripts/bootstrap.py",
  D = "tengu_cobalt_plinth_hornbeam",
  f = { base: x, ownerUid: 0 };
function ZBn() {
  return p(f.base, y);
}
function eSo(e) {
  let r = S(f.base, e);
  if (r === "" || r === ".." || r.startsWith(`..${h}`) || R(r)) return "outside_mount";
  let o = r.split(h),
    m = f.base;
  for (let l = 0; l <= o.length; l++) {
    if (l > 0) m = p(m, o[l - 1]);
    let n;
    try {
      n = O(m);
    } catch (A) {
      let w = E(A);
      return w === "ENOENT" || w === "ENOTDIR" ? "missing" : "unreadable";
    }
    if (n.isSymbolicLink()) return "link";
    if (l === o.length ? !n.isFile() : !n.isDirectory()) return "wrong_type";
    if (n.uid !== f.ownerUid) return "wrong_owner";
    if ((n.mode & 18) !== 0) return "writable";
  }
  return;
}
function M() {
  if (!nr()) return "not_hosted";
  return eSo(p(ZBn(), Zbo));
}
function P() {
  return U().on;
}
function U() {
  let e = Lo();
  if (e.artifactPreviewEmulator === void 0)
    ((e.artifactPreviewEmulator = I()),
      a("tengu_artifact_preview_emulator_gate", {
        on: e.artifactPreviewEmulator.on,
        reason: c(e.artifactPreviewEmulator.reason)
      }));
  return e.artifactPreviewEmulator;
}
function I() {
  let e = i.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
  if (e === !1) return { on: !1, reason: "pinned_off" };
  let r;
  try {
    r = M();
  } catch (o) {
    (t(
      `Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${d(o)}`
    ),
      (r = "unreadable"));
  }
  if (r !== void 0) return { on: !1, reason: r };
  if (e === !0) return { on: !0, reason: "pinned_on" };
  return k(D, !1) === !0 ? { on: !0, reason: "flag_on" } : { on: !1, reason: "flag_off" };
}
var u = null;
function g() {
  return u !== null && !0;
}
function vOe() {
  if (i.CLAUDE_CODE_ARTIFACT_PREVIEW === !1) return !1;
  if (MF() === "emulator") return !0;
  if (!V()) return !1;
  if (i.CLAUDE_CODE_ARTIFACT_PREVIEW === !0) return !0;
  return W() !== "none";
}
var F = { on: !1 };
function MF() {
  let e = Lo();
  return (
    (e.artifactPreviewEngine ??=
      i.CLAUDE_CODE_ARTIFACT_PREVIEW !== !1 && F.on && H() ? "emulator" : "local_chrome"),
    e.artifactPreviewEngine
  );
}
function H() {
  return i.CLAUDE_CODE_REMOTE === !0 && P();
}
function V() {
  if (i.CLAUDE_CODE_REMOTE || !g()) return !1;
  return i.CLAUDE_CODE_ARTIFACT_PREVIEW ?? k("tengu_cobalt_plinth_aspen", !1);
}
function gAr() {
  if (u === null) throw Error("artifact preview is not compiled into this build");
  let { findPlaywrightChromes: e } = u,
    r = async (o) =>
      i.BUN_CHROME_PATH ? [i.BUN_CHROME_PATH] : L([...(await e(o)), ...(await v(o))]);
  return {
    chromeCandidates: r,
    resolveChrome: async () => (await r())[0],
    noSandbox: u.needsNoSandbox,
    installHint: u.chromeInstallHint,
    installDir: u.chromeInstallDir
  };
}
function b() {
  return `${i.BUN_CHROME_PATH ?? ""}
${i.PLAYWRIGHT_BROWSERS_PATH ?? ""}`;
}
async function nCi() {
  let e;
  try {
    if (i.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || i.CLAUDE_CODE_REMOTE || !g()) return;
    let r = Lo();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    ((e = { env: b(), state: "pending" }), (r.artifactPreviewBrowserSearch = e));
  } catch (r) {
    t(`Artifact preview: could not start the browser search: ${d(r)}`);
    return;
  }
  try {
    let r = await gAr().chromeCandidates({ strict: !0 });
    e.state = r.length > 0 ? "found" : "none";
  } catch (r) {
    ((e.state = "error"), t(`Artifact preview: the startup browser search failed: ${d(r)}`));
  }
}
function W() {
  let e = Lo();
  if (e.artifactPreviewBrowser === void 0)
    ((e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch)),
      a("tengu_artifact_preview_browser", {
        verdict: c(e.artifactPreviewBrowser.verdict),
        source: c(e.artifactPreviewBrowser.source)
      }));
  return e.artifactPreviewBrowser.verdict;
}
function tSo() {
  return Lo().artifactPreviewBrowser;
}
function G(e) {
  if (e === void 0) return { verdict: "unknown", source: "not_started" };
  if (e.env !== b()) return { verdict: "unknown", source: "stale_env" };
  if (e.state === "pending" || e.state === "error") return { verdict: "unknown", source: e.state };
  return { verdict: e.state, source: "session" };
}
export { Zbo, ZBn, eSo, vOe, MF, gAr, nCi, tSo };

//# sourceMappingURL=chunk-703y4pbc.js.map
