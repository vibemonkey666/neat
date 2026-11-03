// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { GZ } from "./chunk-dc0nzty2.js";
import { g, m } from "./chunk-brszmkb3.js";
import { Ay, wbt } from "./chunk-nahqyybs.js";
import { nV, GZe, Zfn } from "./chunk-wdvpwq3x.js";
import { ie, t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { g_, RM } from "./chunk-8w2npe9a.js";
import { Pt } from "./chunk-xe386mry.js";
import { jd } from "./chunk-v4kbwz0z.js";
import { cZe } from "./chunk-ej3beqha.js";
import { wo } from "./chunk-rnxkk435.js";
import { randomBytes as v } from "crypto";
import { basename as W, dirname as E, isAbsolute as _, join as w } from "path";
var f3 = 800,
  h = {
    darwin: "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'",
    linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"]
  };
function B() {
  let o = jd(),
    a = "claude_cli_latest_screenshot.png",
    n = {
      darwin: w(o, "claude_cli_latest_screenshot.png"),
      linux: w(o, "claude_cli_latest_screenshot.png"),
      win32: w(o, "claude_cli_latest_screenshot.png")
    },
    s = n.linux || n.linux,
    r = wo([s]),
    f = `set fp to open for access POSIX file ${`"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`} with write permission`,
    c = "",
    u = O() === "wsl",
    d =
      '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"',
    y = u
      ? ` || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }' 2>/dev/null`
      : "",
    F = u
      ? ` 2>/dev/null || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; $i = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $i) { exit 1 }; $ms = New-Object System.IO.MemoryStream; $i.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png); [Convert]::ToBase64String($ms.ToArray())' 2>/dev/null | tr -d '\\r' | base64 -d > ${r}`
      : "",
    I = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'",
        saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${wo([f])} -e 'write png_data to fp' -e 'close access fp'`,
        getPath: h.darwin,
        deleteFile: `rm -f -- ${r}`
      },
      linux: {
        checkImage: `xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"${y}`,
        saveImage: `xclip -selection clipboard -t image/png -o > ${r} 2>/dev/null || wl-paste --type image/png > ${r} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${r} 2>/dev/null || wl-paste --type image/bmp > ${r}${F}`,
        getPath: h.linux,
        deleteFile: `rm -f -- ${r}`
      },
      win32: {
        checkImage: [
          "powershell",
          "-NoProfile",
          "-NonInteractive",
          "-Sta",
          "-Command",
          "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }"
        ],
        saveImage: [
          "powershell",
          "-NoProfile",
          "-NonInteractive",
          "-Sta",
          "-Command",
          "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)"
        ],
        getPath: h.win32,
        deleteFile: ["powershell", "-NoProfile", "-Command", "Remove-Item -Force -LiteralPath "]
      }
    };
  return { commands: I.linux || I.linux, screenshotPath: s };
}
async function b(e) {
  if (typeof e === "string") return RM(e, { reject: !1 });
  let [o, ...a] = e;
  return g_(o, a, { reject: !1 });
}
async function yCs() {
  return !1;
}
async function wme(e) {
  let o;
  try {
    o = B();
  } catch (s) {
    return (l(s), m("clipboard_read", "construct_failed"), null);
  }
  let { commands: a, screenshotPath: n } = o;
  try {
    if ((await b(a.checkImage)).exitCode !== 0) return null;
    if ((await ie().mkdir(E(n), { mode: 448 }), (await b(a.saveImage)).exitCode !== 0))
      return (m("clipboard_read", "save_failed"), null);
    let p = await ie().readFileBytes(n);
    if (p.length >= 2 && p[0] === 66 && p[1] === 77) p = await (await nV())(p).png().toBuffer();
    let f = await GZe(p, p.length, "png", e, { directWebpMaxBytes: C() }),
      c = f.buffer.toString("base64"),
      u = wbt(c);
    return (
      b(a.deleteFile),
      g("clipboard_read"),
      { base64: c, mediaType: u, dimensions: f.dimensions }
    );
  } catch {
    return (m("clipboard_read", "read_failed"), null);
  }
}
async function D() {
  try {
    let o = h.linux || h.linux,
      a = await b(o);
    if (a.exitCode !== 0 || !a.stdout) return null;
    return a.stdout.trim();
  } catch (e) {
    return (
      t(`Failed to read image path from clipboard: ${e instanceof Error ? e.message : String(e)}`, {
        level: "error"
      }),
      null
    );
  }
}
var pDt = /\.(png|jpe?g|gif|webp)$/i;
function P(e) {
  if ((e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'")))
    return e.slice(1, -1);
  return e;
}
var S = /^(?:[A-Za-z]:\\|\\\\)/;
function x(e) {
  if (O() === "wsl" && S.test(e)) return e;
  let n = `__DOUBLE_BACKSLASH_${v(8).toString("hex")}__`;
  return e.replaceAll("\\\\", n).replace(/\\(.)/g, "$1").replace(new RegExp(n, "g"), "\\");
}
function _Cs(e) {
  let o = P(e.trim()),
    a = x(o);
  return pDt.test(a);
}
function $yo(e) {
  let o = P(e.trim()),
    a = x(o);
  if (pDt.test(a)) return a;
  return null;
}
async function bCs(e, o, a) {
  let n = $yo(e);
  if (!n) return null;
  let s = n;
  if (O() === "wsl" && S.test(s)) s = await new cZe(i.WSL_DISTRO_NAME).toLocalPath(s);
  let r;
  try {
    if (_(s)) r = await a(s);
    else {
      let d = await D();
      if (d && s === W(d)) r = await a(d);
    }
  } catch (d) {
    return (
      t(`Failed to read pasted image file ${s}: ${d instanceof Error ? d.message : String(d)}`, {
        level: "error"
      }),
      null
    );
  }
  if (r === "refused") return "refused";
  if (!r || r === "absent") return null;
  if (r.length === 0) return (t(`Image file is empty: ${s}`, { level: "warn" }), null);
  if (r.length >= 2 && r[0] === 66 && r[1] === 77) r = await (await nV())(r).png().toBuffer();
  let p = Ay(r);
  if (p === null)
    return (
      t(`Pasted path has image extension but content is not a supported image: ${s}`, {
        level: "warn"
      }),
      null
    );
  let f = p.split("/")[1] || "png",
    c = await GZe(r, r.length, f, o, { directWebpMaxBytes: C() }),
    u = c.buffer.toString("base64");
  return { path: s, base64: u, mediaType: `image/${c.mediaType}`, dimensions: c.dimensions };
}
function Fyo(e) {
  if (e.includes("\x00")) return !0;
  let o = e.slice(0, 4096);
  if (o.length < 32) return !1;
  let a = 0;
  for (let n of o) if (n === "\uFFFD") a++;
  return a / o.length > 0.05;
}
function C() {
  return Pt() ? void 0 : Zfn(GZ);
}
export { f3, yCs, wme, pDt, _Cs, $yo, bCs, Fyo };

//# sourceMappingURL=chunk-ea3kv9gs.js.map
