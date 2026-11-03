// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { ce } from "./chunk-acd8w9vv.js";
import { Er, FI, uJr } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { bS } from "./chunk-c3npf81n.js";
import { i } from "./chunk-cj37hmns.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { rd } from "./chunk-5rw2zfa0.js";
import { akn, A8r, Xar, vZo, lkn, $4t } from "./chunk-qmmh8tq2.js";
import { ln, pe, $9 } from "./chunk-7c3thgax.js";
import { cn } from "./chunk-4q6qmmwb.js";
function art(e) {
  return e
    .slice(0, 500)
    .replace(/https?:\/\/\S+/gi, "<url>")
    .replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>")
    .replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>")
    .replace(/[A-Za-z]:\\[^\s"']*/g, "<path>")
    .replace(/\\\\[^\s"']+/g, "<path>")
    .replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>")
    .replace(/(?:\/[^\s"':]+){2,}/g, "<path>")
    .replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>")
    .replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>")
    .replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>")
    .replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>")
    .replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>")
    .replace(/\b\d{4,}\b/g, "<num>");
}
var g = 4000;
function v(e, n = 5) {
  let t = [],
    r;
  for (let l of e.slice(0, g).split(`
`)) {
    let s = l.trim();
    if (!s.startsWith("at ")) continue;
    let a = s.slice(3),
      u = a.indexOf(" (");
    if (r === void 0) {
      let R = u !== -1 ? a.slice(u + 2, -1) : a;
      if (/^(?:node|bun|internal):/.test(R)) r = R;
      else {
        let E = R.match(/([^/\\]+:\d+:\d+)\)?$/);
        if (E) r = E[1];
      }
    }
    let c = u !== -1 ? a.slice(0, u) : a;
    if (
      ((c = c.replace(/^async\s+/, "").replace(/^new\s+/, "")),
      c.includes("/") || c.includes("\\") || /:\d/.test(c))
    )
      continue;
    if (c) t.push(c);
    if (t.length >= n) break;
  }
  return { names: t, topFrame: r };
}
function N(e) {
  try {
    return String(e);
  } catch {
    return "[unstringifiable]";
  }
}
function dp(e) {
  try {
    let n = N(e instanceof Error ? e.message : e),
      t = { error_message_hash: cn(art(n)) },
      r = Er(e);
    if (r !== void 0) t.error_code = r;
    if (!(e instanceof Error)) return t;
    let l = FI(e.constructor?.name);
    if (l !== void 0) t.error_constructor = l;
    let s = e.stack;
    if (typeof s !== "string") return t;
    let a = { name: e.name, message: e.message, stack: s },
      u = $4t(a),
      c = u.length < s.length && s.endsWith(u),
      { names: R, topFrame: E } = v(u);
    if (R.length > 0) t.error_stack_hash = cn(R.join("|"));
    let A = s.length - u.length,
      h = s.slice(0, A + g),
      [f] = c ? lkn({ ...a, stack: h }, 1) : [];
    if (f !== void 0) {
      let m = vZo(f) ? f.file : Xar(f) ? A8r(f.file) : void 0,
        S = uJr(m === void 0 ? akn : `${m}:${f.line}:${f.column}`),
        b = m !== void 0 && uJr(E ?? "") !== S;
      if (S !== void 0 && !b) t.error_top_frame = S;
    }
    return t;
  } catch {
    return {};
  }
}
import { homedir as x } from "os";
import { join as C, sep as D } from "path";
var M = "tengu_ax_screen_reader";
function fsi(e) {
  return o().swapRemoteGateReader(e);
}
class _ {
  #n;
  #a;
  #o;
  #u;
  #t = null;
  #i = null;
  #c = !1;
  #e = [];
  #r = !1;
  #s = 0;
  swapRemoteGateReader(e) {
    let n = this.#t;
    return ((this.#t = e), n);
  }
  isEnabled() {
    if (this.#n !== void 0) return this.#n;
    let e, n;
    if (bS("--ax-screen-reader")) ((e = !0), (n = "flag"));
    else {
      let r = i.CLAUDE_AX_SCREEN_READER;
      if (r !== void 0) ((e = r), (n = "env"));
      else ((e = $9("axScreenReader").find((l) => Qt(l.source))?.value === !0), (n = "settings"));
    }
    if (!e) return (this.#n = !1);
    let t = this.#t?.(M, !0) ?? !0;
    return ((this.#a = t ? n : void 0), (this.#n = t));
  }
  activationSource() {
    return this.isEnabled() ? this.#a : void 0;
  }
  isArrowNavEnabled() {
    if (this.#o === void 0) this.#o = this.#t?.(w, !1) ?? !1;
    return this.#o;
  }
  isSuggestionNavEnabled() {
    {
      if (!this.isEnabled()) return !1;
      let e = !1;
      return ((this.#u ??= this.#t?.("tengu_ax_sr_suggestion_nav", e) ?? e), this.#u);
    }
    return !1;
  }
  markAnnouncementWritten(e) {
    if (this.#i === null) this.#i = e;
  }
  endStartupQuiet() {
    this.#c = !0;
  }
  startupQuietOpenedAtMs() {
    return this.#c ? null : this.#i;
  }
  queueAnnouncement(e, n = !1) {
    if ((this.#e.push(e), n)) this.#r = !0;
    if (this.#e.length > p) this.#e.splice(0, this.#e.length - p);
  }
  drainAnnouncements() {
    return this.#e.splice(0);
  }
  takeHoldRequest() {
    let e = this.#r;
    return ((this.#r = !1), e);
  }
  startHold(e) {
    this.#s = e;
  }
  endHold() {
    ((this.#s = 0), (this.#r = !1));
  }
  holdActive(e) {
    return e < this.#s;
  }
  reset() {
    ((this.#n = void 0),
      (this.#a = void 0),
      (this.#o = void 0),
      (this.#u = void 0),
      (this.#i = null),
      (this.#c = !1),
      (this.#e.length = 0),
      (this.#r = !1),
      (this.#s = 0));
  }
}
var T = new W(() => new _());
function o() {
  return T.of(U().host);
}
var w = "tengu_ax_sr_arrow_nav";
function tkt() {
  return o().isArrowNavEnabled();
}
function eor() {
  return o().isSuggestionNavEnabled();
}
function Wp() {
  return o().isEnabled();
}
function X() {
  {
    let e = o();
    if (e.isEnabled()) {
      let n = e.activationSource();
      return n ? `[Screen Reader Mode: on via ${n}]` : "[Screen Reader Mode: on]";
    }
  }
  return null;
}
function F() {
  {
    if (
      o().isEnabled() ||
      bS("--ax-screen-reader") ||
      i.CLAUDE_AX_SCREEN_READER !== void 0 ||
      $9("axScreenReader").some((s) => Qt(s.source))
    )
      return null;
    if (
      !["projectSettings", "localSettings"].some((s) => {
        let a = Qt(s) ? pe(s) : null;
        return (
          a?.axScreenReader === !0 ||
          Object.entries(a?.env ?? {}).some(
            ([u, c]) => u.toUpperCase() === "CLAUDE_AX_SCREEN_READER" && Ne(c)
          )
        );
      })
    )
      return null;
    let n = "start Claude Code with --ax-screen-reader";
    if (!Qt("userSettings"))
      return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}.`;
    let t = x(),
      r = rd(ln("userSettings") ?? C(t, ".claude", "settings.json")).replace(/[\t\n]/g, " "),
      l = r.startsWith(t + D) ? `~${r.slice(t.length)}` : r;
    return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}, or add "axScreenReader": true to your own settings file at ${l} and restart.`;
  }
  return null;
}
function psi(e, n) {
  {
    if (!e) return null;
    let t = X();
    if (t !== null) return (n(t), H(), t);
    let r = F();
    if (r !== null) n(r);
    return r;
  }
  return null;
}
var y = 3000,
  k = 600000;
function H() {
  o().markAnnouncementWritten(Date.now());
}
function pYr() {
  o().endStartupQuiet();
}
function msi() {
  {
    let e = o().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let n = Math.min(i.CLAUDE_AX_STARTUP_QUIET_MS ?? y, k),
      t = e + n - Date.now();
    return t > 0 ? t : 0;
  }
  return 0;
}
var O = 0,
  P = 5000;
function gsi() {
  return Math.min(i.CLAUDE_AX_PREPARK_MS ?? O, P);
}
function hsi() {
  return i.CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT ?? !1;
}
function uZ() {
  if (o().isEnabled()) return { CLAUDE_AX_SCREEN_READER: "1" };
  return {};
}
function ysi() {
  {
    let e = o();
    if (e.isEnabled())
      return { screenReaderMode: !0, screenReaderActivationSource: ce(e.activationSource()) };
  }
  return {};
}
var p = 16;
function L5(e, n) {
  o().queueAnnouncement(e, n?.hold === !0);
}
function _si() {
  if (o().takeHoldRequest()) return Math.min(i.CLAUDE_AX_ANNOUNCEMENT_HOLD_MS ?? 1000, 1e4);
  return 0;
}
function bsi(e) {
  o().startHold(Date.now() + e);
}
function lrt() {
  o().endHold();
}
function Ssi() {
  return o().holdActive(Date.now());
}
function wsi() {
  return o().drainAnnouncements();
}
export {
  art,
  dp,
  fsi,
  tkt,
  eor,
  Wp,
  psi,
  pYr,
  msi,
  gsi,
  hsi,
  uZ,
  ysi,
  L5,
  _si,
  bsi,
  lrt,
  Ssi,
  wsi
};

//# sourceMappingURL=chunk-rj6gws00.js.map
