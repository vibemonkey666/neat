// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U, bAn } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { bt } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import { i } from "./chunk-cj37hmns.js";
var u = 30000;
function y() {
  return {
    activityCallback: null,
    refcount: 0,
    mainLoopRefcount: 0,
    parkedOnUser: 0,
    parkGeneration: 0,
    activeReasons: new Map(),
    oldestActivityStartedAt: null,
    heartbeatTimer: null,
    idleTimer: null,
    cleanupHandle: null
  };
}
var l = "cli",
  f = 1000;
class v {
  activityKey = () => l;
  mainLoopActivityListener = null;
  nestedChainDropListener = null;
  workStarted = De();
  statesByKey = new Map();
  evictedKeys = new Set();
  setActivityKey(e) {
    this.activityKey = e;
  }
  currentKey() {
    return this.activityKey();
  }
  stateCount() {
    return this.statesByKey.size;
  }
  currentStateOrCreate() {
    let e = this.activityKey();
    if (this.evictedKeys.has(e)) return null;
    let t = this.statesByKey.get(e);
    if (!t) ((t = y()), this.statesByKey.set(e, t));
    return t;
  }
  currentStateOrNull() {
    return this.statesByKey.get(this.activityKey()) ?? null;
  }
  reset() {
    for (let e of [...this.statesByKey.keys()]) this.evictKey(e);
    (this.evictedKeys.clear(),
      (this.activityKey = () => l),
      (this.mainLoopActivityListener = null),
      (this.nestedChainDropListener = null),
      this.workStarted.clear());
  }
  evictKey(e) {
    if ((this.evictedKeys.add(e), this.evictedKeys.size > f)) {
      let o = this.evictedKeys.values().next().value;
      if (o !== void 0) this.evictedKeys.delete(o);
    }
    let t = this.statesByKey.get(e);
    if (!t) return;
    if (t.heartbeatTimer !== null) clearInterval(t.heartbeatTimer);
    if (t.idleTimer !== null) clearTimeout(t.idleTimer);
    (t.cleanupHandle?.(), this.statesByKey.delete(e));
  }
}
var p = new W(() => new v());
function r() {
  return p.of(U().host);
}
function d(e) {
  (a(e),
    (e.heartbeatTimer = setInterval(
      (t) => {
        if (c(t)) {
          Y("debug", "session_keepalive_parked_on_user", {
            refcount: t.refcount,
            parked_on_user: t.parkedOnUser
          });
          return;
        }
        if (
          (Y("debug", "session_keepalive_heartbeat", {
            refcount: t.refcount,
            main_loop_refcount: t.mainLoopRefcount,
            active: Object.fromEntries(t.activeReasons)
          }),
          i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES)
        )
          t.activityCallback?.();
      },
      u,
      e
    )));
}
function S(e) {
  if ((a(e), e.activityCallback === null)) return;
  e.idleTimer = setTimeout(
    (t) => {
      (Y("info", "session_idle_30s"), (t.idleTimer = null));
    },
    u,
    e
  );
}
function a(e) {
  if (e.idleTimer !== null) (clearTimeout(e.idleTimer), (e.idleTimer = null));
}
function r7s(e) {
  let t = r().currentStateOrCreate();
  if (!t) return;
  if (((t.activityCallback = e), t.refcount > 0 && t.heartbeatTimer === null)) d(t);
}
function o7s() {
  let e = r().currentStateOrNull();
  if (!e) return;
  if (((e.activityCallback = null), e.heartbeatTimer !== null))
    (clearInterval(e.heartbeatTimer), (e.heartbeatTimer = null));
  a(e);
}
function s7s() {
  let e = r().currentStateOrNull();
  if (e && i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) e.activityCallback?.();
}
function h2o(e) {
  r().mainLoopActivityListener = e;
}
function y2o(e) {
  r().nestedChainDropListener = e;
}
function i7s(e) {
  r().nestedChainDropListener?.(e);
}
function a7s(e) {
  return (r().currentStateOrNull()?.activeReasons.get(e) ?? 0) > 0;
}
function Dwt() {
  for (let e of r().statesByKey.values()) if (e.refcount > 0 && !c(e)) return !0;
  return !1;
}
function Q7n(e) {
  return r().workStarted.subscribe(e);
}
function hCe() {
  return r().currentStateOrNull()?.mainLoopRefcount ?? 0;
}
function f_e() {
  return bAn() || hCe() > 0;
}
function ZP(e, t) {
  let o = r(),
    n = o.currentStateOrCreate();
  if (!n) return;
  if ((n.refcount++, t === void 0))
    (n.mainLoopRefcount++, o.mainLoopActivityListener?.(n.mainLoopRefcount));
  if ((n.activeReasons.set(e, (n.activeReasons.get(e) ?? 0) + 1), n.refcount === 1)) {
    if (
      ((n.oldestActivityStartedAt = Date.now()),
      n.activityCallback !== null && n.heartbeatTimer === null)
    )
      d(n);
  }
  if (n.refcount - n.parkedOnUser === 1) o.workStarted.emit();
  if (n.cleanupHandle === null) {
    let s = o.activityKey();
    n.cleanupHandle = bt(async () => {
      Y("info", "session_activity_at_shutdown", {
        owner_key: s,
        refcount: n.refcount,
        active: Object.fromEntries(n.activeReasons),
        oldest_activity_ms:
          n.refcount > 0 && n.oldestActivityStartedAt !== null
            ? Date.now() - n.oldestActivityStartedAt
            : null
      });
    });
  }
}
function eI(e, t) {
  let o = r(),
    n = o.currentStateOrNull();
  if (!n) return;
  if (n.refcount > 0) n.refcount--;
  if (t === void 0)
    if (n.mainLoopRefcount > 0)
      (n.mainLoopRefcount--, o.mainLoopActivityListener?.(n.mainLoopRefcount));
    else Y("warn", "session_activity_main_loop_underflow", { reason: e });
  let s = (n.activeReasons.get(e) ?? 0) - 1;
  if (s > 0) n.activeReasons.set(e, s);
  else n.activeReasons.delete(e);
  if (n.refcount === 0) {
    if (n.parkedOnUser > 0)
      (Y("warn", "session_activity_parked_leaked", { parked_on_user: n.parkedOnUser }),
        (n.parkedOnUser = 0),
        n.parkGeneration++);
    if (n.heartbeatTimer !== null)
      (clearInterval(n.heartbeatTimer), (n.heartbeatTimer = null), S(n));
  }
}
function Nce() {
  if (i.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE) return () => {};
  let e = r(),
    t = e.currentStateOrNull();
  if (!t) return () => {};
  if (t.parkedOnUser >= t.refcount)
    return (
      Y("warn", "session_activity_parked_exceeds_refcount", {
        refcount: t.refcount,
        parked_on_user: t.parkedOnUser
      }),
      () => {}
    );
  t.parkedOnUser++;
  let o = t.parkGeneration,
    n = !1;
  return () => {
    if (n) return;
    if (((n = !0), t.parkGeneration === o && t.parkedOnUser > 0)) {
      if ((t.parkedOnUser--, t.refcount - t.parkedOnUser === 1)) e.workStarted.emit();
    }
  };
}
function l7s() {
  let e = r().currentStateOrNull();
  return e !== null && c(e);
}
function c(e) {
  return (
    !i.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE &&
    e.parkedOnUser > 0 &&
    e.refcount - e.parkedOnUser <= 0
  );
}
export { r7s, o7s, s7s, h2o, y2o, i7s, a7s, Dwt, Q7n, hCe, f_e, ZP, eI, Nce, l7s };

//# sourceMappingURL=chunk-160x3d5g.js.map
