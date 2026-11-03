// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, ku } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { t } from "./chunk-4kxznmzw.js";
import { Pq, TSe } from "./chunk-a16y5hcz.js";
import { LKo } from "./chunk-vfbdsxdd.js";
import { hc, Xfe, i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { it } from "./chunk-qmmh8tq2.js";
import { $$ } from "./chunk-jwqtbev0.js";
import { mh, hA, bst, qZ } from "./chunk-rhk37je5.js";
import { BT } from "./chunk-b08qnart.js";
import { yv } from "./chunk-ajtyjx88.js";
import { oy } from "./chunk-at88wjsn.js";
import { Ce, Fe } from "./chunk-a2y39866.js";
class R {
  hooks = null;
  uiMounted = !1;
  setHooks(e) {
    this.hooks = e;
  }
  setUiMounted(e) {
    this.uiMounted = e;
  }
}
var g = new R();
function ZIo(e) {
  g.setHooks(e);
}
function eOo() {
  return g.hooks;
}
function h(e) {
  g.setUiMounted(e);
}
function Cqn() {
  return g.uiMounted;
}
class I extends Map {
  get everMounted() {
    return Cqn();
  }
  set everMounted(e) {
    h(e);
  }
  set(e, r) {
    this.everMounted = !0;
    let n = this.get(e);
    if (n && n !== r && !n.hasUnmounted && n.holdsRawMode)
      l(
        Error(
          "ink: second root created on a stream whose mounted root still holds stdin (raw mode); unmount the previous root first"
        )
      );
    return super.set(e, r);
  }
  treeRoots = new Map();
  standaloneRender = null;
  claimForStandaloneRender(e) {
    let r = () => {
        if (this.standaloneRender === n) this.standaloneRender = null;
      },
      n = e.then(r, r);
    this.standaloneRender = n;
  }
  get pendingStandaloneRender() {
    return this.standaloneRender;
  }
}
var H = new W(() => new I());
function Ws() {
  return H.of(U().host);
}
var m = null,
  A = !1;
function S() {
  if (A) return m;
  A = !0;
  try {
    return ((m = LKo()), m);
  } catch {}
  let e = "x64-linux",
    n = [e, `${e}-musl`].flatMap((o) => [
      `./vendor/clipboard-napi/${o}/clipboard-napi.node`,
      `../clipboard-napi/${o}/clipboard-napi.node`
    ]);
  for (let o of n)
    try {
      return ((m = Fe(o)), m);
    } catch {}
  return null;
}
import { Buffer as M } from "buffer";
import { isAbsolute as F } from "path";
function e8() {
  return ku()?.printsUnknownSequences ?? BT.hasUnknownSequencePrintingBug(i.terminal);
}
var x = mh + String.fromCharCode(qZ.OSC),
  lTe = mh + "\\";
function _() {
  return ku()?.terminal ?? i.terminal;
}
function kan() {
  let e = ku();
  if (e) return e.mux;
  if (i.TMUX) return "tmux";
  if (i.STY) return "screen";
  if (i.ZELLIJ) return "zellij";
  return null;
}
function b() {
  return ku()?.ssh ?? !!i.SSH_CONNECTION;
}
function P() {
  let e = ku();
  if (e) {
    if (e.mux !== "tmux" || !e.tmuxSocket) return null;
    return F(e.tmuxSocket) && $$(e.tmuxSocket) ? ["-S", e.tmuxSocket] : null;
  }
  return i.TMUX ? [] : null;
}
function tGe() {
  let e = _();
  if (e === "Apple_Terminal") return "Fn";
  if (e === "iTerm.app") return "Option";
  if (ku()?.isVscodeTerm || (e && X.has(e))) return O() === "macos" ? "Option" : "Shift";
  if (e && V.has(e)) return "Shift";
  if (i.LC_TERMINAL === "iTerm2") return "Option";
  return b() || kan() !== null || O() === "macos"
    ? "Shift (Option in iTerm2, Fn in Terminal.app)"
    : "Shift";
}
var V = new Set([
    "ghostty",
    "kitty",
    "WezTerm",
    "alacritty",
    "xterm",
    "gnome-terminal",
    "vte-based",
    "konsole",
    "windows-terminal",
    "mintty",
    ...Xfe
  ]),
  X = new Set(["vscode", "cursor", "windsurf", "antigravity", "codium"]);
function t_(...e) {
  let r = _() === "kitty" ? lTe : hA;
  return `${x}${e.join(bst)}${r}`;
}
function xD(e) {
  let r = kan();
  if (r === "tmux") return `\x1BPtmux;${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  if (r === "screen") return `\x1BP${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  return e;
}
class L {
  tool = void 0;
  addonWriteFailed = !1;
  addonWriteSucceeded = !1;
  waylandCopyGeneration = 0;
  async probe() {
    if (O() !== "linux" || (typeof this.tool === "string" && this.tool !== "addon")) return;
    let { display: e, waylandDisplay: r } = D();
    if (r && (await hc("wl-copy"))) {
      this.tool = "wl-copy";
      return;
    }
    if (e) {
      if (await hc("xclip")) {
        this.tool = "xclip";
        return;
      }
      if (await hc("xsel")) {
        this.tool = "xsel";
        return;
      }
    }
    if (!this.addonWriteFailed && B() && S()?.setLinuxClipboardText) {
      this.tool = "addon";
      return;
    }
    this.tool = null;
  }
  recordAddonWrite(e) {
    if (e) this.addonWriteSucceeded = !0;
    else this.addonWriteFailed ||= !this.addonWriteSucceeded;
  }
  beginWaylandCopy() {
    return ++this.waylandCopyGeneration;
  }
  isLatestWaylandCopy(e) {
    return e === this.waylandCopyGeneration;
  }
  reset() {
    ((this.tool = void 0), (this.addonWriteFailed = !1), (this.addonWriteSucceeded = !1));
  }
}
var j = new W(() => new L());
function f() {
  return j.of(U().host);
}
function lhe() {
  if (!b())
    switch (O()) {
      case "macos":
      case "windows":
      case "wsl":
        return "native";
      case "linux":
        if (typeof f().tool === "string") return "native";
        break;
    }
  if (P()) return "tmux-buffer";
  return "osc52";
}
function vqn() {
  return f().probe();
}
function WUs() {
  if (O() !== "linux") return "not_linux";
  let { tool: e } = f();
  if (e === void 0) return "not_probed";
  return e ?? "none";
}
function GUs() {
  return i.VTE_VERSION != null;
}
function D() {
  return { display: process.env.DISPLAY, waylandDisplay: process.env.WAYLAND_DISPLAY };
}
function B() {
  let { display: e, waylandDisplay: r } = D();
  if (e) return /^(unix)?:/.test(e);
  return !!r;
}
function q(e) {
  return /[^\x00-\x7f]/.test(e);
}
function Eqn(e) {
  if (!BT.hasOsc52ClipboardUtf8Bug() || !q(e)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}
async function z(e) {
  let r = P();
  if (!r) return !1;
  let n = { input: e, useCwd: !1, timeout: 2000 },
    o = i.LC_TERMINAL ?? "unset",
    s = r.length > 0 ? "attacher socket" : "$TMUX",
    { code: a } = await it("tmux", [...r, "load-buffer", "-w", "-"], n);
  if (
    (t(`clipboard: tmux load-buffer -w - \u2192 exit ${a} (server=${s} LC_TERMINAL=${o})`), a === 0)
  )
    return !0;
  let u = await it("tmux", [...r, "load-buffer", "-"], n);
  return (
    t(`clipboard: retry tmux load-buffer - \u2192 exit ${u.code} (server=${s} LC_TERMINAL=${o})`),
    u.code === 0
  );
}
var w = 76;
async function $T(e) {
  let r = M.from(e, "utf8").toString("base64"),
    n = b(),
    o = O(),
    s = !1;
  if (!n) {
    if (o === "linux" && typeof f().tool !== "string") await f().probe();
    s = Z(e);
  }
  await z(e);
  let a = kan(),
    u = (s && (o === "linux" || o === "wsl") && BT.isVteBasedTerminal(_())) || e8(),
    T = u ? "none(vte)" : a === "tmux" ? "raw+dcs" : a === "screen" ? "dcs" : "raw";
  if (
    (t(
      `clipboard: setClipboard mux=${a ?? "none"} ssh=${n} native=${s} predicted=${lhe()} emit=${T} bytes=${e.length}`
    ),
    u)
  )
    return "";
  if (a === "tmux") {
    let c = `${mh}]52;c;${r}${hA}`;
    return c + xD(c);
  }
  if (a === "screen") {
    let c = [];
    for (let p = 0; p < r.length; p += w) c.push(r.slice(p, p + w));
    return `${mh}P${mh}]52;c;${c.join(`${lTe}${mh}P`)}${hA}${lTe}`;
  }
  return t_(gm.CLIPBOARD, "c", r);
}
var k =
    "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())",
  J = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";
function Z(e) {
  let r = { input: e, useCwd: !1, timeout: 2000 };
  switch (O()) {
    case "macos":
      return (it("pbcopy", [], r), !0);
    case "linux": {
      let n = f();
      if (n.tool === "wl-copy") return (Q(e), !0);
      if (n.tool === "xclip") {
        let o = { ...r, useToolMemoryCgroup: !1 };
        return (
          it("xclip", ["-selection", "clipboard"], o),
          it("xclip", ["-selection", "primary"], o),
          !0
        );
      }
      if (n.tool === "xsel") {
        let o = { ...r, useToolMemoryCgroup: !1 };
        return (
          it("xsel", ["--clipboard", "--input"], o),
          it("xsel", ["--primary", "--input"], o),
          !0
        );
      }
      if (n.tool === "addon") {
        let o;
        try {
          o = S()?.setLinuxClipboardText(e) === !0;
        } catch {
          o = !1;
        }
        return (n.recordAddonWrite(o), n.probe(), o);
      }
      return !1;
    }
    case "wsl":
      return (it("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", k], r), !0);
    case "windows":
      return (it("powershell", ["-NoProfile", "-NonInteractive", "-Command", k], r), !0);
  }
  return !1;
}
async function Q(e) {
  let r = f(),
    n = r.beginWaylandCopy(),
    o = {
      input: e,
      useCwd: !1,
      timeout: 2000,
      stdout: "ignore",
      stderr: "ignore",
      useToolMemoryCgroup: !1
    };
  if ((await it("wl-copy", [], o), !r.isLatestWaylandCopy(n))) return;
  await it("wl-copy", ["--primary"], o);
}
async function hFt(e = "clipboard") {
  if (b()) return "";
  let r = { useCwd: !1, timeout: 2000 };
  switch (O()) {
    case "macos": {
      let n = await it("pbpaste", [], r);
      return n.code === 0 ? n.stdout : "";
    }
    case "windows":
    case "wsl": {
      let n = await it(
        O() === "wsl" ? "powershell.exe" : "powershell",
        ["-NoProfile", "-NonInteractive", "-Command", J],
        r
      );
      return n.code === 0
        ? n.stdout
            .replace(
              /\r\n/g,
              `
`
            )
            .replace(/\n$/, "")
        : "";
    }
    case "linux": {
      let n = e === "primary",
        o = [
          ["wl-paste", n ? ["--primary", "--no-newline"] : ["--no-newline"]],
          ["xclip", ["-selection", n ? "primary" : "clipboard", "-o"]],
          ["xsel", [n ? "--primary" : "--clipboard", "--output"]]
        ];
      for (let [s, a] of o) {
        let u = await it(s, [...a], r);
        if (u.code === 0) return u.stdout;
      }
      return (await ee(n, r.timeout)) ?? "";
    }
    default:
      return "";
  }
}
async function ee(e, r) {
  if (!B()) return null;
  try {
    return (await S()?.getLinuxClipboardText?.(e, r))?.replace(/\r?\n$|\r$/, "") ?? null;
  } catch (n) {
    return (t(`clipboard: addon read: ${d(n)}`), null);
  }
}
var gm = {
  SET_TITLE_AND_ICON: 0,
  SET_ICON: 1,
  SET_TITLE: 2,
  SET_COLOR: 4,
  SET_CWD: 7,
  HYPERLINK: 8,
  ITERM2: 9,
  SET_FG_COLOR: 10,
  SET_BG_COLOR: 11,
  SET_CURSOR_COLOR: 12,
  CLIPBOARD: 52,
  KITTY: 99,
  RESET_COLOR: 104,
  RESET_FG_COLOR: 110,
  RESET_BG_COLOR: 111,
  RESET_CURSOR_COLOR: 112,
  SEMANTIC_PROMPT: 133,
  GHOSTTY: 777,
  ITERM2_PROPRIETARY: 1337,
  PROGRAM_STATUS: 7501,
  TAB_STATUS: 21337
};
function zUs(e) {
  let r = e.indexOf(";"),
    n = r >= 0 ? e.slice(0, r) : e,
    o = r >= 0 ? e.slice(r + 1) : "",
    s = parseInt(n, 10);
  if (s === gm.SET_TITLE_AND_ICON) return { type: "title", action: { type: "both", title: o } };
  if (s === gm.SET_ICON) return { type: "title", action: { type: "iconName", name: o } };
  if (s === gm.SET_TITLE) return { type: "title", action: { type: "windowTitle", title: o } };
  if (s === gm.HYPERLINK) {
    let a = o.split(";"),
      u = a[0] ?? "",
      T = a.slice(1).join(";");
    if (T === "") return { type: "link", action: { type: "end" } };
    let c = {};
    if (u)
      for (let p of u.split(":")) {
        let E = p.indexOf("=");
        if (E >= 0) c[p.slice(0, E)] = p.slice(E + 1);
      }
    return {
      type: "link",
      action: { type: "start", url: T, params: Object.keys(c).length > 0 ? c : void 0 }
    };
  }
  if (s === gm.TAB_STATUS) return { type: "tabStatus", action: te(o) };
  return { type: "unknown", sequence: `\x1B]${e}` };
}
function N(e) {
  let r = e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r)
    return { type: "rgb", r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) };
  let n = e.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (n) {
    let o = (s) => Math.round((parseInt(s, 16) / (16 ** s.length - 1)) * 255);
    return { type: "rgb", r: o(n[1]), g: o(n[2]), b: o(n[3]) };
  }
  return null;
}
function te(e) {
  let r = {};
  for (let [n, o] of re(e))
    switch (n) {
      case "indicator":
        r.indicator = o === "" ? null : N(o);
        break;
      case "status":
        r.status = o === "" ? null : o;
        break;
      case "status-color":
        r.statusColor = o === "" ? null : N(o);
        break;
    }
  return r;
}
function* re(e) {
  let r = "",
    n = "",
    o = !1,
    s = !1;
  for (let a of e)
    if (s) {
      if (o) n += a;
      else r += a;
      s = !1;
    } else if (a === "\\") s = !0;
    else if (a === ";") (yield [r, n], (r = ""), (n = ""), (o = !1));
    else if (a === "=" && !o) o = !0;
    else if (o) n += a;
    else r += a;
  if (r || o) yield [r, n];
}
var G = new RegExp(Pq.source, "g");
function fht(e, r) {
  let n = e.replace(G, "");
  if (!n) return pht;
  let o = { id: ne(n), ...r },
    s = Object.entries(o)
      .map(([a, u]) => `${a}=${u}`)
      .join(":");
  return t_(gm.HYPERLINK, s, n);
}
function ne(e) {
  let r = 0;
  for (let n = 0; n < e.length; n++) r = ((r << 5) - r + e.charCodeAt(n)) | 0;
  return (r >>> 0).toString(36);
}
var pht = t_(gm.HYPERLINK, "", ""),
  yFt = { NOTIFY: 0, BADGE: 2, PROGRESS: 4 },
  _Ft = { CLEAR: 0, SET: 1, ERROR: 2, INDETERMINATE: 3 },
  kqn = `${x}${gm.ITERM2};${yFt.PROGRESS};${_Ft.CLEAR};${hA}`,
  KUs = `${x}${gm.SET_TITLE_AND_ICON};${hA}`,
  Tqn = t_(gm.TAB_STATUS, "indicator=;status=;status-color=");
function Tan() {
  return !1;
}
function VUs(e) {
  let r = [],
    n = (o) =>
      o.type === "rgb"
        ? `#${[o.r, o.g, o.b].map((s) => s.toString(16).padStart(2, "0")).join("")}`
        : "";
  if ("indicator" in e) r.push(`indicator=${e.indicator ? n(e.indicator) : ""}`);
  if ("status" in e)
    r.push(`status=${e.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
  if ("statusColor" in e) r.push(`status-color=${e.statusColor ? n(e.statusColor) : ""}`);
  return t_(gm.TAB_STATUS, r.join(";"));
}
var oe = 2048,
  ie = 192,
  se = 32;
function qUs(e) {
  let r = e.replace(/[^A-Za-z0-9_.+-]/g, "-").slice(0, se);
  return r.length > 0 ? r : void 0;
}
function v(e, r) {
  let n = TSe(e.replace(G, " "), r);
  return M.from(n).toString("base64");
}
function ELr(e) {
  let r = [`state=${e.state}`, "app=claude-code"];
  if (e.id !== void 0) r.push(`id=${e.id}`);
  if (e.state === "blocked" && e.kind) r.push(`kind=${e.kind}`);
  if (
    (e.state === "working" || e.state === "blocked") &&
    e.progress !== void 0 &&
    Number.isFinite(e.progress)
  ) {
    let n = Math.min(100, Math.max(0, Math.round(e.progress)));
    r.push(`progress=${n}`);
  }
  if (e.title) r.push(`title=${v(e.title, ie)}`);
  if (e.msg) r.push(`msg=${v(e.msg, oe)}`);
  return t_(gm.PROGRAM_STATUS, r.join(":"));
}
var Aqn = `${x}${gm.PROGRAM_STATUS};state=clear${hA}`;
function YUs(e) {
  return t_(gm.PROGRAM_STATUS, `state=clear:id=${e}`);
}
var y = Ce(oy(), 1);
function bFt(e) {
  if (e === void 0) return null;
  if (/^st(term)?(-|$)/.test(e)) return "st";
  if (/^rxvt(-|$)/.test(e)) return "rxvt";
  return null;
}
var tOo = ["iTerm.app", "kitty", "WezTerm", "ghostty", "tmux", "windows-terminal", "WarpTerminal"],
  XUs = ["windows-terminal"];
function Y(e) {
  return bFt(e) === "st";
}
function C(e) {
  return `env: terminal=${e}, VTE before 0.53 (shows the query as text)`;
}
var K = "env: inside tmux, waiting for tmux to say whether it passes images through";
function JUs() {
  return {
    extendedKeys: Te(i.terminal, i.CLAUDE_CODE_SESSION_KIND === "bg"),
    synchronizedOutput: ge(),
    kittyKeyboard: me(i.terminal, i.CLAUDE_CODE_SESSION_KIND === "bg"),
    kittyGraphics: pe({
      terminal: i.terminal,
      bgWorker: i.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(i.TMUX) || Boolean(i.STY),
      tmux: Boolean(i.TMUX) && !i.STY,
      forced: i.CLAUDE_CODE_FORCE_TERMINAL_IMAGES
    }),
    itermImages: fe({
      bgWorker: i.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(i.TMUX) || Boolean(i.STY),
      tmux: Boolean(i.TMUX) && !i.STY
    }),
    mousePixels: ae({
      terminal: i.terminal,
      bgWorker: i.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(i.TMUX) || Boolean(i.STY)
    }),
    programStatus: le({
      terminal: i.terminal,
      bgWorker: i.CLAUDE_CODE_SESSION_KIND === "bg",
      tabWritesDisabled: i.CLAUDE_CODE_DISABLE_TERMINAL_TITLE
    })
  };
}
function le(e) {
  if (e.tabWritesDisabled)
    return { settled: !1, source: "env: CLAUDE_CODE_DISABLE_TERMINAL_TITLE" };
  if (e.bgWorker) return { settled: !1, source: "bg worker" };
  if (BT.hasUnknownSequencePrintingBug(e.terminal)) return { settled: !1, source: C(e.terminal) };
  return { likely: !1, source: "not asked yet" };
}
function ae(e) {
  if (e.bgWorker) return { settled: !1, source: "bg worker" };
  if (e.multiplexed) return { settled: !1, source: "env: inside tmux or screen" };
  return { likely: !1, source: `env: terminal=${e.terminal || "unknown"}, not asked yet` };
}
var ue = ["kitty", "ghostty"],
  ce = "0.28.0";
function Rqn(e) {
  if (e === null) return !1;
  if (e.startsWith("kitty(")) {
    let r = y.coerce(e.slice(6));
    return r !== null && yv(r.version, ce);
  }
  return ue.some((r) => e === r || e.startsWith(`${r} `));
}
function pe(e) {
  if (e.forced) return { settled: !0, source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES" };
  if (e.bgWorker) return { settled: !1, source: "bg worker" };
  if (e.tmux) return { likely: !1, source: K };
  if (e.multiplexed) return { settled: !1, source: "env: inside screen" };
  return { likely: !1, source: `env: terminal=${e.terminal || "unknown"}, not asked yet` };
}
var de = "3.5.0";
function xqn(e) {
  if (e === null || !/^iTerm2\s/.test(e)) return !1;
  let r = y.coerce(e.slice(6).trim());
  return r !== null && yv(r.version, de);
}
function fe(e) {
  if (e.bgWorker) return { settled: !1, source: "bg worker" };
  if (e.tmux) return { likely: !1, source: K };
  if (e.multiplexed) return { settled: !1, source: "env: inside screen, not supported" };
  return { likely: !1, source: "yes only on an XTVERSION reply naming iTerm2 3.5 or later" };
}
function me(e, r) {
  if (r) return { settled: !0, source: "bg worker" };
  if (e !== null && Y(e)) return { settled: !1, source: `env: terminal=${e}` };
  if (BT.hasUnknownSequencePrintingBug(e)) return { settled: !1, source: C(e) };
  return { likely: !0, source: "not asked yet" };
}
function Te(e, r) {
  let n = `env: terminal=${e || "unknown"}`;
  if (r) return { settled: !1, source: `${n}, bg worker` };
  if (e !== null && tOo.includes(e)) return { settled: !0, source: n };
  if (e !== null && Y(e)) return { settled: !1, source: n };
  if (BT.hasUnknownSequencePrintingBug(e)) return { settled: !1, source: C(e) };
  return { likely: !1, source: n };
}
function ge() {
  if (i.TMUX) return { likely: !1, source: "env: TMUX (tmux answers for itself)" };
  if (i.CLAUDE_CODE_FORCE_SYNC_OUTPUT)
    return { settled: !0, source: "env: CLAUDE_CODE_FORCE_SYNC_OUTPUT" };
  if (BT.isJetBrainsIdeTerminal())
    return { settled: !0, source: "env: TERMINAL_EMULATOR=JetBrains-JediTerm" };
  let e = Se();
  if (e) return { likely: !0, source: `env: ${e}` };
  return { likely: !1, source: "env: no known terminal" };
}
function Se() {
  let e = i.TERM_PROGRAM,
    r = i.TERM;
  if (
    e === "iTerm.app" ||
    e === "WezTerm" ||
    e === "WarpTerminal" ||
    e === "ghostty" ||
    e === "contour" ||
    e === "vscode" ||
    e === "alacritty" ||
    e === "mintty" ||
    e === "rio" ||
    e === "Tabby"
  )
    return `TERM_PROGRAM=${e}`;
  if (r?.includes("kitty")) return `TERM=${r}`;
  if (i.KITTY_WINDOW_ID) return "KITTY_WINDOW_ID";
  if (r === "xterm-ghostty") return `TERM=${r}`;
  if (r?.startsWith("foot")) return `TERM=${r}`;
  if (r?.includes("alacritty")) return `TERM=${r}`;
  if (i.ZED_TERM) return "ZED_TERM";
  if (i.WT_SESSION) return "WT_SESSION";
  if (parseInt(i.VTE_VERSION ?? "", 10) >= 6800) return `VTE_VERSION=${i.VTE_VERSION}`;
  return;
}
export {
  e8,
  lTe,
  kan,
  tGe,
  t_,
  xD,
  lhe,
  vqn,
  WUs,
  GUs,
  Eqn,
  $T,
  hFt,
  gm,
  zUs,
  fht,
  pht,
  yFt,
  _Ft,
  kqn,
  KUs,
  Tqn,
  Tan,
  VUs,
  qUs,
  ELr,
  Aqn,
  YUs,
  ZIo,
  eOo,
  Cqn,
  Ws,
  bFt,
  tOo,
  XUs,
  JUs,
  Rqn,
  xqn
};

//# sourceMappingURL=chunk-f451a1hs.js.map
