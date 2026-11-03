import {
  fileURLToPath as __filePath_cf0e8d8f394e2a25,
  URL as __filePath_cf0e8d8f394e2a25_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U, Gc } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { jp, kn, k, ue } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { it } from "./chunk-qmmh8tq2.js";
import { J$ } from "./chunk-afxq0vrk.js";
import { Uu } from "./chunk-4nzy53ma.js";
import { pt } from "./chunk-7c3thgax.js";
import { Wp } from "./chunk-rj6gws00.js";
import { spawnSync as h } from "child_process";
function C() {
  return {
    loggedTmuxCcDisable: !1,
    loggedWinSshDisable: !1,
    checkedTmuxMouseHint: !1,
    checkedTmuxFocusHint: !1,
    tmuxControlModeProbed: void 0,
    tmuxMouseOptionProbe: void 0,
    tmuxFocusOptionProbe: void 0,
    gbGateCached: void 0,
    gbGateSource: void 0,
    downsellGateCached: void 0,
    freshInstallCached: void 0,
    crashAutoOff: !1
  };
}
var lY = C();
function a() {
  if (!i.TMUX) return !1;
  if (i.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = i.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}
function g(e) {
  if (((e.tmuxControlModeProbed = a()), e.tmuxControlModeProbed)) return;
  if (!i.TMUX) return;
  if (i.TERM_PROGRAM) return;
  let n = J$("tmux");
  if (n === null) return;
  let r;
  try {
    r = h(n, ["display-message", "-p", "#{client_control_mode}"], {
      encoding: "utf8",
      timeout: 2000,
      cwd: void 0,
      env: process.env,
      windowsHide: !0
    });
  } catch {
    return;
  }
  if (r.status !== 0) return;
  e.tmuxControlModeProbed = r.stdout.trim() === "1";
}
function mhe(e = lY) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? !1;
}
function u() {
  if (O() !== "windows") return !1;
  return Boolean(i.SSH_CONNECTION || i.SSH_CLIENT || i.SSH_TTY);
}
class c {
  latched = !1;
  mode = void 0;
  persisted = !1;
  upsellImpression = void 0;
  latchFromEnv() {
    if (this.latched) return;
    ((this.latched = !0),
      (this.mode = i.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0),
      i.unset("CLAUDE_CODE_TUI_TRIAL"));
  }
}
var x = new W(() => new c());
function Bqn() {
  return x.of(U().host);
}
function DBs() {
  Bqn().latchFromEnv();
}
function AFt() {
  let e = Bqn();
  return (e.latchFromEnv(), e.mode);
}
function Oan() {
  return (
    ue().fullscreenAutoDisabled?.version ===
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_cf0e8d8f394e2a25(
        new __filePath_cf0e8d8f394e2a25_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  );
}
function s() {
  return i.CLAUDE_CODE_NO_FLICKER === !1 || i.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}
var CFt = 3;
function d() {
  try {
    if (jp()) return !1;
    let e = ue();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < CFt;
  } catch {
    return;
  }
}
function S(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let n = d();
  if (n !== void 0) e.freshInstallCached = n;
  return n ?? !1;
}
function Zl(e = lY) {
  if (Uu() === "local-agent") return !1;
  if (i.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (Wp()) return !1;
  if (s()) return !1;
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (mhe(e)) {
    if (!e.loggedTmuxCcDisable)
      ((e.loggedTmuxCcDisable = !0),
        t(
          "fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override"
        ));
    return !1;
  }
  if (u()) {
    if (!e.loggedWinSshDisable)
      ((e.loggedWinSshDisable = !0),
        t(
          "fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xB7 set CLAUDE_CODE_NO_FLICKER=1 to override"
        ));
    return !1;
  }
  switch (pt().tui ?? AFt()) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  if (S(e)) return !0;
  if (p(e)) return !0;
  if (e.gbGateCached === void 0) {
    let n = kn("tengu_pewter_brook", !1);
    ((e.gbGateCached = n.value), (e.gbGateSource = n.source));
  }
  return e.gbGateCached;
}
function p(e = lY) {
  return ((e.downsellGateCached ??= k("tengu_amber_creek", !1)), e.downsellGateCached);
}
function oGe(e = lY) {
  if (Wp()) return !1;
  if (s()) return !1;
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || Oan()) return !1;
  if (u()) return !1;
  if (mhe(e)) return !1;
  switch (pt().tui) {
    case "fullscreen":
      return !0;
    case "default":
      return !1;
  }
  return !0;
}
function QF(e = lY) {
  if (i.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (Wp()) return "sr_auto_off";
  if (s()) return "env_off";
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (mhe(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let n = pt().tui;
  switch (n ?? AFt()) {
    case "fullscreen":
      return n === "fullscreen" ? "settings_on" : "upsell_trial_on";
    case "default":
      return "settings_off";
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? k("tengu_amber_creek", !1)) return "downsell_on";
  return (e.gbGateCached ?? k("tengu_pewter_brook", !1)) ? "gb_on" : "gb_off";
}
function jqn(e) {
  switch (e) {
    case "env_on":
    case "bg_forced_on":
    case "settings_on":
    case "upsell_trial_on":
    case "ant_default":
    case "fresh_install_on":
    case "downsell_on":
    case "gb_on":
      return "fullscreen";
    case "env_off":
    case "sr_auto_off":
    case "crash_auto_off":
    case "tmux_cc_auto_off":
    case "win_ssh_auto_off":
    case "settings_off":
    case "gb_off":
      return "default";
  }
}
function Wqn(e) {
  return (
    e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off"
  );
}
function HBs(e = lY) {
  return jp() && e.gbGateSource === "fallback";
}
function LBs() {
  if (i.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (i.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return;
}
function _G() {
  if (i.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return i.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (i.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0)
    return i.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}
class _ {
  observed = !1;
  changed = De();
  subscribe = this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    ((this.observed = !0), this.changed.emit());
  }
}
var l = new W(() => new _());
function SOo() {
  l.of(U().host).note();
}
function Man() {
  return l.of(U().host).hasObserved;
}
function Dan(e) {
  return l.of(U().host).subscribe(e);
}
function PD(e = lY) {
  return Gc() && Zl(e);
}
async function NBs(e = lY) {
  if (!i.TMUX) return null;
  if (!PD(e) || mhe(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let n = await o(e, "mouse");
  if (n === null || n === "on") return null;
  return "tmux detected \xB7 scroll with PgUp/PgDn \xB7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}
var T = {
  mouse: { cacheKey: "tmuxMouseOptionProbe", args: ["show", "-Av", "mouse"] },
  "focus-events": { cacheKey: "tmuxFocusOptionProbe", args: ["show", "-gv", "focus-events"] }
};
function o(e, n) {
  let { cacheKey: r, args: m } = T[n];
  return (
    (e[r] ??= it("tmux", [...m], { useCwd: !1, timeout: 2000 }).then(({ stdout: b, code: E }) =>
      E === 0 ? b.trim() : null
    )),
    e[r]
  );
}
function $Bs(e = lY) {
  if (!i.TMUX || a()) return;
  (o(e, "mouse"), o(e, "focus-events"));
}
async function FBs(e = lY) {
  if (!i.TMUX) return null;
  if (mhe(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let n = await o(e, "focus-events");
  if (n === null || n === "on") return null;
  return "tmux focus-events off \xB7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}
export {
  lY,
  mhe,
  Bqn,
  DBs,
  AFt,
  Oan,
  CFt,
  Zl,
  oGe,
  QF,
  jqn,
  Wqn,
  HBs,
  LBs,
  _G,
  SOo,
  Man,
  Dan,
  PD,
  NBs,
  $Bs,
  FBs
};

//# sourceMappingURL=chunk-3xhvyvev.js.map
