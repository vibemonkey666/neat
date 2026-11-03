// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U, ku } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { JUs } from "./chunk-f451a1hs.js";
class s {
  reading;
  settled = De();
  constructor(e) {
    this.reading =
      e === void 0 ? { state: "unasked" } : { state: "settled", value: e.value, source: e.source };
  }
  get() {
    return this.reading;
  }
  now() {
    return this.reading.state === "settled" && this.reading.value;
  }
  begin() {
    if (this.reading.state !== "unasked") return !1;
    return ((this.reading = { state: "asking" }), !0);
  }
  unask() {
    if (this.reading.state === "asking") this.reading = { state: "unasked" };
  }
  answer(e) {
    if (this.reading.state === "settled") return !1;
    this.reading = { state: "settled", ...e };
    try {
      this.settled.emit(e.value);
    } finally {
      this.settled.clear();
    }
    return !0;
  }
  onSettle(e) {
    if (this.reading.state === "settled") return (e(this.reading.value), () => {});
    return this.settled.subscribe(e);
  }
}
var l = {
    extendedKeys: !1,
    synchronizedOutput: !1,
    kittyKeyboard: !0,
    kittyGraphics: !1,
    itermImages: !1,
    mousePixels: !1,
    programStatus: !1
  },
  Ubr = Object.keys(l);
class o {
  readings = new Map();
  answeredYes = new Set();
  listeners = new Map();
  constructor(e) {
    for (let t of Ubr) {
      let n = e[t];
      this.readings.set(
        t,
        "settled" in n
          ? { state: "settled", value: n.settled, source: n.source }
          : { state: "pending", likely: n.likely, source: n.source }
      );
    }
  }
  get(e) {
    return this.readings.get(e);
  }
  now(e) {
    let t = this.get(e);
    return t.state === "settled" ? t.value : l[e];
  }
  confirmed(e) {
    return this.answeredYes.has(e);
  }
  pending() {
    return Ubr.filter((e) => this.get(e).state === "pending");
  }
  answer(e, t, n) {
    let a = this.get(e);
    if (a.state === "settled") {
      if (t && a.value) this.answeredYes.add(e);
      return !1;
    }
    if (t) this.answeredYes.add(e);
    return (this.settle(e, t, n), !0);
  }
  deadline() {
    for (let e of this.pending()) {
      let t = this.get(e);
      this.settle(e, t.likely, `${t.source}, no answer`);
    }
  }
  onSettle(e, t) {
    let n = this.get(e);
    if (n.state === "settled") return (t(n.value), () => {});
    let a = this.listeners.get(e) ?? new Set();
    return (
      this.listeners.set(e, a),
      a.add(t),
      () => {
        a.delete(t);
      }
    );
  }
  settle(e, t, n) {
    this.readings.set(e, { state: "settled", value: t, source: n });
    let a = this.listeners.get(e);
    this.listeners.delete(e);
    for (let r of a ?? []) r(t);
  }
}
class d {
  xtversionName = void 0;
  #e = void 0;
  get capabilities() {
    return (this.#e ??= new o(JUs()));
  }
  #t = void 0;
  get imageFiles() {
    return (this.#t ??= new s(
      i.CLAUDE_CODE_FORCE_TERMINAL_IMAGES
        ? { value: !0, source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES" }
        : i.TMUX
          ? {
              value: !1,
              source: "env: inside tmux, where the terminal cannot be asked whether it reads files"
            }
          : void 0
    ));
  }
  tmuxPane = void 0;
  isTmuxPaneAsked = !1;
  tmuxPaneAnsweredAt = void 0;
  resetCapabilities() {
    ((this.#e = void 0),
      (this.#t = void 0),
      (this.tmuxPane = void 0),
      (this.isTmuxPaneAsked = !1),
      (this.tmuxPaneAnsweredAt = void 0));
  }
  osc11Responsive = void 0;
  cellPixels = void 0;
  probeEventLogged = !1;
  nativeCursorEnabled = void 0;
}
var u = new W(() => new d());
function SE() {
  return u.of(U().host);
}
function kT() {
  return SE().capabilities;
}
function Bbs() {
  return kT().now("kittyGraphics");
}
function Bdo() {
  let e = kT();
  return e.now("kittyGraphics") ? "kitty" : e.now("itermImages") ? "iterm" : void 0;
}
function jbs(e) {
  let t = kT(),
    n = () => e(Bdo()),
    a = [t.onSettle("kittyGraphics", n), t.onSettle("itermImages", n)];
  return () => a.forEach((r) => r());
}
function gJt() {
  return SE().imageFiles;
}
function Wbs(e) {
  SE().xtversionName = e;
}
function hJt() {
  return SE().xtversionName;
}
function gy() {
  if (ku()?.isVscodeTerm) return !0;
  if (i.TERM_PROGRAM === "vscode") return !0;
  return SE().xtversionName?.startsWith("xterm.js") ?? !1;
}
function Gbs() {
  let e = SE().xtversionName?.toLowerCase();
  return e !== void 0 && (e.startsWith("iterm2") || e.startsWith("tmux "));
}
function zbs() {
  return SE().xtversionName?.toLowerCase().startsWith("ghostty") ?? !1;
}
export { Ubr, SE, kT, Bbs, Bdo, jbs, gJt, Wbs, hJt, gy, Gbs, zbs };

//# sourceMappingURL=chunk-hk6ate67.js.map
