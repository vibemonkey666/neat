// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { setMaxListeners as A } from "events";
var Isi = 1000;
function pVt(e, r, o, { unref: t } = { unref: !0 }) {
  let n = { onExpire: e, clock: o, expiresAt: o.monotonicNow() + r, unref: t, cancel: void 0 };
  return (u(n, r), { clear: E.bind(void 0, n) });
}
function u(e, r) {
  e.cancel = e.clock.setTimeout(k.bind(void 0, e), Math.min(Math.max(0, r || 0), 2147483647), {
    unref: e.unref
  });
}
function k(e) {
  e.cancel = void 0;
  let r = e.expiresAt - e.clock.monotonicNow();
  if (!(r > 1000)) {
    e.onExpire();
    return;
  }
  u(e, r);
}
function E(e) {
  (e.cancel?.(), (e.cancel = void 0));
}
var d = 50;
function ur(e = d) {
  let r = new AbortController();
  return (A(e, r.signal), r);
}
function f(e) {
  let r = this.deref();
  e.deref()?.abort(r?.signal.reason);
}
function m(e) {
  let r = this.deref(),
    o = e.deref();
  if (r && o) r.signal.removeEventListener("abort", o);
}
var R = new FinalizationRegistry(({ parentSignalRef: e, handler: r }) => {
  e.deref()?.removeEventListener("abort", r);
});
function i(e, r, o) {
  let t = new WeakRef(r),
    n = new WeakRef(e);
  if (e.signal.aborted) {
    o.call(n, t);
    return;
  }
  let a = o.bind(n, t);
  (e.signal.addEventListener("abort", a, { once: !0 }),
    R.register(r, { parentSignalRef: new WeakRef(e.signal), handler: a }),
    r.signal.addEventListener("abort", m.bind(n, new WeakRef(a)), { once: !0 }));
}
function cp(e, r) {
  let o = ur(r);
  return (i(e, o, f), o);
}
class Yoe extends AbortController {
  turnController;
  constructor(e) {
    super();
    this.turnController = e;
    (A(d, this.signal), i(e, this, f));
  }
}
var p = "ask-withdrawn-by-asker",
  l = new DOMException(p, "AbortError");
function iSn(e) {
  return e.aborted && Fi(e.reason) === p;
}
function y6o(e, r) {
  let o = new Yoe(e);
  if (
    (o.signal.addEventListener(
      "abort",
      () => {
        if (!r.aborted && !e.signal.aborted) e.abort(o.signal.reason);
      },
      { once: !0 }
    ),
    r.aborted)
  )
    o.abort(l);
  else r.addEventListener("abort", () => o.abort(l), { once: !0 });
  return o;
}
function lM(e) {
  let r = e;
  while (r instanceof Yoe) r = r.turnController;
  return r;
}
function aNe(e, r) {
  if (e.signal.aborted) return (r.abort(e.signal.reason), () => {});
  let o = () => r.abort(e.signal.reason);
  return (
    e.signal.addEventListener("abort", o, { once: !0 }),
    () => e.signal.removeEventListener("abort", o)
  );
}
var w = {
  "user-cancel": new DOMException("user-cancel", "AbortError"),
  "remote-cancel": new DOMException("remote-cancel", "AbortError"),
  shutdown: new DOMException("shutdown", "AbortError"),
  interrupt: new DOMException("interrupt", "AbortError"),
  "turn-abort": new DOMException("turn-abort", "AbortError"),
  background: new DOMException("background", "AbortError"),
  "refusal-fallback-edit": new DOMException("refusal-fallback-edit", "AbortError"),
  "recovery-timeout": new DOMException("recovery-timeout", "AbortError"),
  "permission-stop": new DOMException("permission-stop", "AbortError")
};
function Nl(e) {
  return w[e];
}
function Fi(e) {
  return e instanceof DOMException && e.name === "AbortError" ? e.message : e;
}
var _ = new Set(["user-cancel", "remote-cancel", "shutdown", "interrupt", "turn-abort"]);
function mVt(e) {
  return _.has(Fi(e));
}
var x = new Set(["interrupt", "turn-abort", "refusal-fallback-edit", "permission-stop"]);
function Xoe(e) {
  return x.has(Fi(e));
}
function mR(e) {
  return Fi(e.reason) === "shutdown" ? !0 : void 0;
}
var s = "server-fallback-tombstone";
function Joe(e) {
  return e.aborted && Fi(e.reason) === s;
}
var v = new DOMException(s, "AbortError");
function gVt() {
  return v;
}
var c = "subagent-park",
  S = new DOMException(c, "AbortError");
function _6o() {
  return S;
}
function b6o(e) {
  return e.aborted && Fi(e.reason) === c;
}
function wRe(e) {
  switch (Fi(e)) {
    case "user-cancel":
      return "user_cancel";
    case "remote-cancel":
      return "remote_cancel";
    case "shutdown":
      return "shutdown";
    case "interrupt":
      return "interrupt";
    case "turn-abort":
      return "interrupt";
    case "background":
      return "background";
    case "recovery-timeout":
      return "recovery_timeout";
    case "permission-stop":
      return "turn_teardown";
    case s:
      return "server_fallback_tombstone";
    case c:
      return "subagent_park";
    default:
      return "turn_teardown";
  }
}
function S6o(e) {
  switch (e) {
    case "user_cancel":
    case "remote_cancel":
    case "shutdown":
    case "interrupt":
    case "background":
    case "subagent_park":
      return !0;
    case "turn_teardown":
    case "recovery_timeout":
    case "server_fallback_tombstone":
      return !1;
  }
}
function C(e) {
  let r = this.deref();
  if (!r || !mVt(r.signal.reason)) return;
  e.deref()?.abort(r.signal.reason);
}
var b = 600000;
function w6o(e) {
  if (Number.isNaN(e)) return b;
  return Math.min(3600000, Math.max(b, Math.round(e * 1.5)));
}
function g(e) {
  e.deref()?.abort(Nl("recovery-timeout"));
}
function hYr(e, r, o) {
  return pVt(g.bind(void 0, new WeakRef(e)), r, o);
}
function v6o(e, r, o) {
  let t = ur();
  if ((i(e, t, C), t.signal.aborted)) return t;
  return (t.signal.addEventListener("abort", hYr(t, r, o).clear, { once: !0 }), t);
}
export {
  Isi,
  pVt,
  ur,
  cp,
  Yoe,
  iSn,
  y6o,
  lM,
  aNe,
  Nl,
  Fi,
  mVt,
  Xoe,
  mR,
  Joe,
  gVt,
  _6o,
  b6o,
  wRe,
  S6o,
  w6o,
  hYr,
  v6o
};

//# sourceMappingURL=chunk-t86k189s.js.map
