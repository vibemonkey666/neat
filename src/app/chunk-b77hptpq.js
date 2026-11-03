// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, ku } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Xfe, i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { BT } from "./chunk-b08qnart.js";
import { kT, hJt, gy } from "./chunk-hk6ate67.js";
import { yv } from "./chunk-ajtyjx88.js";
import { e8, t_, xD, gm, fht, yFt, _Ft, tOo, XUs } from "./chunk-f451a1hs.js";
import {
  hA,
  nl,
  bZo,
  W4e,
  Gw,
  YZ,
  Lfe,
  _A,
  M4t,
  D4t,
  Iui,
  Oui,
  wZo,
  Mui,
  Dui
} from "./chunk-rhk37je5.js";
import {
  Z8t,
  Xlt,
  pfs,
  LIn,
  NIn,
  pPt,
  mfs,
  $In,
  uN,
  fN,
  mPt,
  gPt,
  Nwe,
  gfs,
  hfs,
  UIn
} from "./chunk-p5xkyqjg.js";
import { e } from "./chunk-f790ajz4.js";
import { Gt, de, be, ee, j } from "./chunk-bq35vvkw.js";
import { oy } from "./chunk-at88wjsn.js";
import { Ce } from "./chunk-a2y39866.js";
class E {
  value = void 0;
  get() {
    let r = hJt(),
      n = ku(),
      o = n?.wheelFlood ?? uro(),
      u = n ? Xfe.includes(n.terminal ?? "") : BT.isJetBrainsIdeTerminal(),
      s = n?.wtSession ?? !!i.WT_SESSION,
      p = gy(),
      a = this.value;
    if (
      a &&
      a.xtversion === (r ?? "(no reply)") &&
      a.wheelFlood === o &&
      a.jediTerm === u &&
      a.wtSession === s &&
      a.xtermJs === p
    )
      return a;
    let d = "linux";
    return (
      (this.value = {
        useDecayCurve: !o && (p || d === "win32" || s),
        useAdaptiveDrain: p,
        base: u ? 2 : oe(p, o, s),
        xtermJs: p,
        wheelFlood: o,
        jediTerm: u,
        termProgram: i.TERM_PROGRAM ?? "unset",
        termProgramVersion: i.TERM_PROGRAM_VERSION ?? "unset",
        xtversion: r ?? "(no reply)",
        wtSession: s,
        scrollSpeedEnv: i.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
        platform: d
      }),
      this.value
    );
  }
  invalidate() {
    this.value = void 0;
  }
}
var S = new W(() => new E());
function G6() {
  return S.of(U().host).get();
}
function uro() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (i.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (i.TERM_PROGRAM === "vscode") {
    let r = ne(i.TERM_PROGRAM_VERSION);
    if (r !== null) return r >= 1092000 && r < 1105000;
  }
  return hJt()?.startsWith("xterm.js") ?? !1;
}
function ne(r) {
  if (!r) return null;
  let n = /^(\d+)\.(\d+)\.(\d+)/.exec(r);
  if (!n) return null;
  return +n[1] * 1e6 + +n[2] * 1000 + +n[3];
}
function Ggr(r, n, o) {
  return !n && (r || !1 || o) ? 3 : 1;
}
function oe(r, n, o) {
  let u = Ggr(r, n, o),
    s = i.CLAUDE_CODE_SCROLL_SPEED;
  if (!s) return u;
  let p = parseFloat(s);
  return Number.isNaN(p) || p <= 0 ? u : Math.min(p, 20);
}
function Y8t() {
  S.of(U().host).invalidate();
}
var b = Ce(oy(), 1);
var Re = nl(0, "f");
function ufs() {
  return _A + M4t + Gw;
}
function mro() {
  return _A + Gw;
}
function Vlt(r) {
  return Gw + (Lfe + bZo(1)).repeat(r) + Gw;
}
function ffs() {
  if (i.TMUX && kT().get("synchronizedOutput").state === "pending") return;
  return BPe();
}
function Zie() {
  return g({ beforeTheAnswer: !1 });
}
function BPe() {
  return g({ beforeTheAnswer: !0 });
}
function g({ beforeTheAnswer: r }) {
  if (i.CLAUDE_BG_BACKEND === "daemon") return ku()?.syncOutput !== !1;
  if (!i.TMUX && i.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return !0;
  let n = kT().get("synchronizedOutput");
  if (n.state === "settled") return n.value;
  return r && n.likely;
}
function zgr(r = Zie()) {
  if (i.CLAUDE_BG_BACKEND === "daemon") return !1;
  return (
    r &&
    i.TMUX == null &&
    process.env.ZELLIJ == null &&
    !BT.isJetBrainsIdeTerminal() &&
    !gy() &&
    i.WT_SESSION == null
  );
}
function qlt() {
  let r = ku()?.progressReporting;
  if (r !== void 0) return r;
  if (!process.stdout.isTTY) return !1;
  if (i.WT_SESSION) return !1;
  if (i.ConEmuANSI || i.ConEmuPID || i.ConEmuTask) return !0;
  let n = b.coerce(i.TERM_PROGRAM_VERSION);
  if (!n) return !1;
  if (i.TERM_PROGRAM === "ghostty") return yv(n.version, "1.2.0");
  if (i.TERM_PROGRAM === "iTerm.app") return yv(n.version, "3.6.6");
  return !1;
}
function y(r) {
  if (r != null) return tOo.includes(r);
  return kT().now("extendedKeys");
}
function X8t(r = i.terminal, n = kT()) {
  if (i.TMUX || i.STY || !n.now("extendedKeys")) return !1;
  return r === null || !XUs.includes(r) || n.confirmed("kittyKeyboard");
}
function wUe() {
  return !e8() && (y() || kT().now("kittyKeyboard")) ? wZo : "";
}
function cPt() {
  return e8() ? "" : Dui;
}
function uPt(r) {
  return y() ? wZo + (r?.legacyKitty ? Oui : Iui) + Mui : "";
}
function fPt(r) {
  return mPt + _A + Gw + uPt(r);
}
function eae() {
  return wUe() + gPt + cPt();
}
var OIn = 5000;
function J8t() {
  return !!i.WT_SESSION;
}
var Kgr = zgr(BPe());
function Vgr(r, n, o) {
  let u = performance.now(),
    s = r.slowestWrite;
  if (s === void 0 || u - n >= s.endedMs - s.startedMs)
    r.slowestWrite = { startedMs: n, endedMs: u, bytes: o };
}
function MIn(r, n) {
  if (r.stdoutDead) return;
  let o = performance.now(),
    u = Buffer.byteLength(n);
  try {
    r.stdout.write(n);
  } catch (s) {
    if (r.tolerateDeadStdout && (v(s) === "EIO" || v(s) === "EPIPE")) {
      ((r.stdoutDead = !0), Vgr(r, o, u));
      return;
    }
    throw s;
  }
  Vgr(r, o, u);
}
function gro(r, n, o = !1, u, s = "") {
  let p = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (n.length === 0) {
    if (s !== "") MIn(r, s);
    return;
  }
  let a = !o,
    d = s + (a ? Z8t : "");
  for (let c of n)
    switch (c.type) {
      case "stdout":
        d += c.content;
        break;
      case "clear":
        if (c.count > 0) d += D4t(c.count);
        break;
      case "clearTerminal":
        d += c.altScreen ? ufs() : Vlt(c.viewportRows);
        break;
      case "cursorHide":
        d += fN;
        break;
      case "cursorShow":
        d += uN;
        break;
      case "cursorMove":
        d += YZ(c.x, p !== void 0 ? Math.max(-p, Math.min(p, c.y)) : c.y);
        break;
      case "cursorTo":
        d += W4e(c.col);
        break;
      case "carriageReturn":
        d += "\r";
        break;
      case "hyperlink":
        d += fht(c.uri);
        break;
      case "styleStr":
        d += c.str;
        break;
    }
  if (a) d += Xlt;
  MIn(r, d);
}
function v(r) {
  return r && typeof r === "object" && "code" in r ? String(r.code) : void 0;
}
class Klt {
  _didStopImmediatePropagation = !1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}
import { EventEmitter as ie } from "events";
class q8t extends ie {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(r, ...n) {
    if (r === "error") return super.emit(r, ...n);
    let o = this.rawListeners(r);
    if (o.length === 0) return !1;
    let u = n[0] instanceof Klt ? n[0] : null;
    for (let s of o) if ((s.apply(this, n), u?.didStopImmediatePropagation())) break;
    return !0;
  }
}
function dPt() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: !1,
    notified: !1,
    trackpadGesture: !1,
    pendingArrowBoost: 0
  };
}
function se(r) {
  ((r.bugConfirmed = !0), (r.trackpadGesture = !0), r.pendingArrowBoost++);
}
function h(r) {
  ((r.trackpadGesture = !1), (r.pendingArrowBoost = 0));
}
function dfs(r) {
  let n = r.pendingArrowBoost;
  return ((r.pendingArrowBoost = 0), n);
}
function fro(r) {
  if (r.bugConfirmed) return !0;
  if (
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 ||
    process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0
  )
    return ((r.bugConfirmed = !0), !0);
  return !1;
}
var ae = 75,
  ue = 250,
  pro = 200;
function cfs(r, n, o, u) {
  if (!G6().jediTerm) return (h(r), n);
  let s = null;
  for (let p = 0; p < n.length; p++) {
    let a = n[p];
    if (a.kind !== "key") {
      s?.push(a);
      continue;
    }
    if (a.name === "wheelup" || a.name === "wheeldown") {
      if (o - r.lastWheelTime > pro) ((r.lastWheelDownTime = 0), h(r));
      if (((r.lastWheelTime = o), a.name === "wheeldown")) r.lastWheelDownTime = o;
      if (a.name === "wheelup" && o - r.lastWheelDownTime < ue && fro(r)) {
        ((s ??= n.slice(0, p)), s.push({ ...a, name: "wheeldown" }));
        continue;
      }
      s?.push(a);
      continue;
    }
    if (
      (a.name === "up" || a.name === "down") &&
      !a.ctrl &&
      !a.meta &&
      !a.shift &&
      o - r.lastWheelTime < ae
    ) {
      if (!r.notified) ((r.notified = !0), u());
      (se(r), (s ??= n.slice(0, p)));
      continue;
    }
    s?.push(a);
  }
  return s ?? n;
}
function cN(r, n) {
  if (r === void 0) return;
  if (Number.isInteger(r)) return;
  t(`${n} should be an integer, got ${r}`, { level: "warn" });
}
function DIn(r, n, o, u, s) {
  if (r === void 0 && n === void 0 && o === void 0 && u === void 0 && s === void 0) return;
  return { hidden: r, label: n, role: o, state: u, preserveWhitespace: s };
}
function pe({
  children: r,
  ref: n,
  tabIndex: o,
  autoFocus: u,
  onClick: s,
  onFocus: p,
  onFocusCapture: a,
  onBlur: d,
  onBlurCapture: c,
  onMouseEnter: C,
  onMouseLeave: I,
  onPointer: A,
  hoverIgnoresBlankCells: M,
  hoverFollowsPaint: P,
  renderEvent: O,
  renderComponent: k,
  drawPending: N,
  elementKey: D,
  elementPlugin: K,
  onKeyDown: L,
  onKeyDownCapture: B,
  onPaste: F,
  onPasteCapture: G,
  onWheel: J,
  onWheelCapture: Y,
  keybindingScope: q,
  textEntry: X,
  onAction: H,
  onActionCapture: V,
  "aria-hidden": z,
  "aria-label": Q,
  "aria-role": Z,
  "aria-state": te,
  "aria-preserve-whitespace": re,
  ...l
}) {
  if (
    (cN(l.margin, "margin"),
    cN(l.marginX, "marginX"),
    cN(l.marginY, "marginY"),
    cN(l.marginTop, "marginTop"),
    cN(l.marginBottom, "marginBottom"),
    l.marginLeft !== "auto")
  )
    cN(l.marginLeft, "marginLeft");
  if (l.marginRight !== "auto") cN(l.marginRight, "marginRight");
  return (
    cN(l.padding, "padding"),
    cN(l.paddingX, "paddingX"),
    cN(l.paddingY, "paddingY"),
    cN(l.paddingTop, "paddingTop"),
    cN(l.paddingBottom, "paddingBottom"),
    cN(l.paddingLeft, "paddingLeft"),
    cN(l.paddingRight, "paddingRight"),
    cN(l.gap, "gap"),
    cN(l.columnGap, "columnGap"),
    cN(l.rowGap, "rowGap"),
    (l.flexWrap ??= "nowrap"),
    (l.flexDirection ??= "row"),
    (l.flexGrow ??= 0),
    (l.flexShrink ??= 1),
    (l.overflowX = l.overflowX ?? l.overflow ?? "visible"),
    (l.overflowY = l.overflowY ?? l.overflow ?? "visible"),
    e("ink-box", {
      ref: n,
      tabIndex: o,
      autoFocus: u,
      onClick: s,
      onFocus: p,
      onFocusCapture: a,
      onBlur: d,
      onBlurCapture: c,
      onMouseEnter: C,
      onMouseLeave: I,
      onPointer: A,
      hoverIgnoresBlankCells: M,
      hoverFollowsPaint: P,
      renderEvent: O,
      renderComponent: k,
      drawPending: N,
      elementKey: D,
      elementPlugin: K,
      onKeyDown: L,
      onKeyDownCapture: B,
      onPaste: F,
      onPasteCapture: G,
      onWheel: J,
      onWheelCapture: Y,
      keybindingScope: q,
      textEntry: X,
      onAction: H,
      onActionCapture: V,
      accessibility: DIn(z, Q, Z, te, re),
      style: l,
      children: r
    })
  );
}
var qc = pe;
j();
var R = Gt({
  stdin: process.stdin,
  internal_eventEmitter: new q8t(),
  setRawMode() {},
  isRawModeSupported: !1,
  internal_querier: null,
  internal_jediTermInput: dPt()
});
R.displayName = "InternalStdinContext";
var Lwe = R;
j();
var Mm = Gt(null);
j();
function T({ background: r, foreground: n }) {
  return t_(gm.SET_BG_COLOR, r) + t_(gm.SET_FG_COLOR, n);
}
function x() {
  return t_(gm.RESET_BG_COLOR) + t_(gm.RESET_FG_COLOR);
}
var f = {
  bracketedPaste: 0,
  themeReports: 0,
  extendedKeys: 0,
  altScreen: 1,
  altScreenKeys: 2,
  mouse: 2,
  mousePixels: 2,
  surface: 3,
  focusEvents: 4
};
function w(r) {
  switch (r) {
    case "bracketedPaste":
      return { mode: r, on: pfs, off: LIn };
    case "themeReports":
      return { mode: r, on: mfs, off: $In };
    case "focusEvents":
      return { mode: r, on: NIn, off: pPt };
    case "mousePixels":
      return { mode: r, on: gfs, off: hfs };
    case "extendedKeys":
      return {
        mode: r,
        get on() {
          return uPt();
        },
        get off() {
          return cPt() + wUe();
        }
      };
    case "altScreen":
      return {
        mode: r,
        on: mPt + _A + Gw,
        get off() {
          return gPt + cPt();
        }
      };
    case "altScreenKeys":
      return {
        mode: r,
        get on() {
          return uPt();
        },
        get off() {
          return wUe();
        }
      };
  }
}
class Ylt {
  entries = [];
  suspended = !1;
  kept;
  get isSuspended() {
    return this.suspended;
  }
  isSet(r) {
    return this.entries.some((n) => n.mode === r);
  }
  set(r, n) {
    if (this.isSet(r)) return "";
    let o = this.add(this.entry(r, n));
    if (r === "altScreen") o += this.add(w("altScreenKeys"));
    return this.suspended ? "" : o;
  }
  reset(r) {
    if (!this.isSet(r)) return "";
    let n = r === "altScreen" ? this.remove("altScreenKeys") : "",
      o = this.remove(r);
    if (this.suspended && r === this.kept) return ((this.kept = void 0), o);
    return this.suspended ? "" : n + o;
  }
  reassert(r) {
    if (this.suspended) return "";
    return this.entries.find((n) => n.mode === r)?.on ?? "";
  }
  reassertKeys() {
    if (this.suspended) return "";
    let r = this.isSet("altScreen") ? "altScreenKeys" : "extendedKeys";
    return this.entries.find((n) => n.mode === r)?.on ?? "";
  }
  reassertFrom(r) {
    if (this.suspended || !this.isSet(r)) return "";
    return this.entries.filter((n) => f[n.mode] >= f[r]).reduce((n, o) => n + o.on, "");
  }
  suspend(r) {
    if (this.suspended) return "";
    return (
      (this.suspended = !0),
      (this.kept = r),
      this.entries.reduceRight((n, o) => (o.mode === r ? n : n + o.off), "")
    );
  }
  resume({ clearKeys: r = !1 } = {}) {
    if (!this.suspended) return "";
    ((this.suspended = !1), (this.kept = void 0));
    let n = this.isSet("altScreen"),
      o = r ? cPt() + (n ? "" : wUe()) : "";
    return this.entries.reduce((u, s) => u + s.on + (r && s.mode === "altScreen" ? wUe() : ""), o);
  }
  resetAll() {
    let r = this.suspended ? this.entries.filter((n) => n.mode === this.kept) : this.entries;
    return ((this.entries = []), (this.kept = void 0), r.reduceRight((n, o) => n + o.off, ""));
  }
  entry(r, n) {
    switch (r) {
      case "mouse": {
        let o = typeof n === "string" ? n : "off";
        return { mode: r, on: UIn(o), off: o === "off" ? "" : Nwe };
      }
      case "surface":
        return { mode: r, on: typeof n === "object" ? T(n) : "", off: x() };
      default:
        return w(r);
    }
  }
  add(r) {
    let n = this.entries.findIndex((o) => f[o.mode] > f[r.mode]);
    if (n === -1) this.entries.push(r);
    else this.entries.splice(n, 0, r);
    return r.on;
  }
  remove(r) {
    let n = this.entries.findIndex((o) => o.mode === r);
    if (n === -1) return "";
    return this.entries.splice(n, 1)[0].off;
  }
}
var _ = Gt(new Ylt());
_.displayName = "InternalTerminalModesContext";
var Q8t = _;
j();
function m(r) {
  let n = "";
  for (let o = 0; o < r.length; o++) {
    let u = r.charCodeAt(o);
    n += u < 32 || (u >= 127 && u <= 159) ? " " : r[o];
  }
  return n;
}
var HW = Gt(null),
  HIn = HW.Provider;
function dL() {
  let r = be(HW);
  if (!r) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let n = de(
      ({ message: a, title: d }) => {
        let c = d ? `${d}: ${a}` : a;
        r(xD(t_(gm.ITERM2, m(c))));
      },
      [r]
    ),
    o = de(
      ({ message: a, title: d, id: c }) => {
        (r(xD(t_(gm.KITTY, `i=${c}:d=0:p=title`, m(d)))),
          r(xD(t_(gm.KITTY, `i=${c}:p=body`, m(a)))),
          r(xD(t_(gm.KITTY, `i=${c}:d=1:a=focus`, ""))));
      },
      [r]
    ),
    u = de(
      ({ message: a, title: d }) => {
        r(xD(t_(gm.GHOSTTY, "notify", m(d), m(a))));
      },
      [r]
    ),
    s = de(() => {
      r(hA);
    }, [r]),
    p = de(
      (a, d) => {
        if (!qlt()) return;
        if (!a) {
          r(xD(t_(gm.ITERM2, yFt.PROGRESS, _Ft.CLEAR, "")));
          return;
        }
        let c = Math.max(0, Math.min(100, Math.round(d ?? 0)));
        switch (a) {
          case "completed":
            r(xD(t_(gm.ITERM2, yFt.PROGRESS, _Ft.CLEAR, "")));
            break;
          case "error":
            r(xD(t_(gm.ITERM2, yFt.PROGRESS, _Ft.ERROR, c)));
            break;
          case "indeterminate":
            r(xD(t_(gm.ITERM2, yFt.PROGRESS, _Ft.INDETERMINATE, "")));
            break;
          case "running":
            r(xD(t_(gm.ITERM2, yFt.PROGRESS, _Ft.SET, c)));
            break;
          case null:
            break;
        }
      },
      [r]
    );
  return ee(
    () => ({ notifyITerm2: n, notifyKitty: o, notifyGhostty: u, notifyBell: s, progress: p }),
    [n, o, u, s, p]
  );
}
export {
  Klt,
  cN,
  q8t,
  G6,
  uro,
  Ggr,
  Y8t,
  dPt,
  dfs,
  fro,
  pro,
  cfs,
  Lwe,
  ufs,
  mro,
  Vlt,
  ffs,
  Zie,
  BPe,
  zgr,
  qlt,
  X8t,
  wUe,
  cPt,
  uPt,
  fPt,
  eae,
  OIn,
  J8t,
  Kgr,
  Vgr,
  MIn,
  gro,
  DIn,
  qc,
  Mm,
  Ylt,
  Q8t,
  HW,
  HIn,
  dL
};

//# sourceMappingURL=chunk-b77hptpq.js.map
