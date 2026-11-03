// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U, tt, Eu } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { $9, Uqe } from "./chunk-7c3thgax.js";
import { gue, e4o, i_, st, Roe, Xe, Vk, $t, Et, gn, Hc } from "./chunk-ajtyjx88.js";
import { Bue } from "./chunk-rh5ymkjp.js";
import { eTe, li, WVn, JFs, ean } from "./chunk-f7aya6cs.js";
import { Gi } from "./chunk-d5zj5299.js";
import { c0t, LC, TGn, Qke, Pne, LP, Ok, D_, EHr } from "./chunk-j0tbz6ra.js";
import { Ogo } from "./chunk-cebn3wtc.js";
import { J7t, u$n, zEr, NBe, Q7t, ITs, f$n } from "./chunk-2x8g8t4c.js";
import { randomUUID as L } from "crypto";
var H = "later",
  G =
    "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  z = "tengu_lantern_wick_resume_by_model",
  V =
    "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.",
  Y = 2,
  O = [60000, 300000],
  X = 30000,
  J = 90000,
  Z = 1800000,
  ee = 21600000;
function te() {
  return {
    state: { phase: "idle" },
    consecutiveRearms: 0,
    armedAtMs: 0,
    lastArmedResetsAtSeconds: 0,
    lastObservedMs: null,
    takeoverUuids: new Set(),
    queuedBeforeArmUuids: new Set(),
    handoffInProgress: !1,
    dispatchingTakeoverUuids: new Set(),
    pendingContinuationUuid: null,
    activeTurnClaim: null,
    episodeArmOrigin: "dialog",
    sleptThroughReset: !1,
    confirmingMainModel: !1,
    recheckRequestedWhileConfirming: !1,
    armedResetKeys: new Set(),
    autoArmDedupeResetKeys: new Set(),
    changed: De(),
    events: De(),
    autoContinueKeyPresence: "unscanned",
    storageV5: void 0,
    unsubscribeSettingsChanges: null,
    unknowableRescanDelayMs: 2000,
    unknowableRescanTimer: void 0,
    revocationRescan: "idle",
    revocationRescanGeneration: 0,
    limitsSubscriptionStarted: !1,
    unsubscribeQuotaRejected: null,
    unsubscribeSessionSwitch: null
  };
}
var oe = new W(te);
function i() {
  let e = U().host,
    t = oe.of(e),
    o = TGn.of(e);
  if (!o.provided) o.provide(() => r(t));
  return t;
}
function M(e, t, o = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let n = Number(e);
  if (!Number.isFinite(n) || n < 0) return t;
  return Math.min(Math.max(Math.round(n), o), ee);
}
var ne = 60000;
function s$n() {
  return T(i());
}
function T(e) {
  return u$n(e.autoContinueKeyPresence);
}
function kTs(e) {
  let t = i();
  if (e === "auto_restore_cancel") return;
  if (!r(t)) return;
  Q(t, "conversation_reset");
}
var ae = 2;
async function A(e, t = ae) {
  try {
    e.autoContinueKeyPresence = await Uqe("autoContinueAtUsageLimit", e.storageV5);
  } catch (o) {
    ((e.autoContinueKeyPresence = "unknowable"), l(o));
  }
  if (e.autoContinueKeyPresence !== "unknowable")
    ((e.revocationRescan = "idle"), e.revocationRescanGeneration++);
  if ((clearTimeout(e.unknowableRescanTimer), e.autoContinueKeyPresence === "unknowable" && t > 0))
    ((e.unknowableRescanTimer = setTimeout(
      (o, n) => {
        A(o, n);
      },
      e.unknowableRescanDelayMs,
      e,
      t - 1
    )),
      e.unknowableRescanTimer.unref?.());
}
function i$n() {
  let e = $9("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings";
}
function wut(e) {
  return Et() && gn()?.billingType !== "usage_based" && LC(e) && ITs();
}
function Bve() {
  return i().state;
}
function TTs() {
  let e = i();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}
function E(e) {
  let t = li();
  if (t.status === "rejected" && t.resetsAt !== void 0) e.armedResetKeys.add(t.resetsAt);
}
function g8e(e) {
  return i().armedResetKeys.has(e);
}
function o1() {
  return i().state.phase === "armed";
}
function r(e) {
  return (
    e.state.phase === "armed" ||
    e.state.phase === "stale" ||
    e.activeTurnClaim !== null ||
    e.dispatchingTakeoverUuids.size > 0 ||
    LP().some((t) => b(e, t)) ||
    EHr((t) => b(e, t))
  );
}
function se(e) {
  return Qke(e) && Pne(e);
}
function b(e, t) {
  return t.uuid !== void 0 && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid));
}
function kgo() {
  return r(i());
}
function h8e(e) {
  return k(i(), e);
}
function k(e, t) {
  return t === "armed" || t === "stale" || x(e);
}
function DMt() {
  return x(i());
}
function x(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && LP().some((o) => o.uuid === t);
}
function GEr(e) {
  return e !== void 0 && e === i().pendingContinuationUuid;
}
function HMt(e) {
  return i().events.subscribe(e);
}
function Tgo(e) {
  return i().changed.subscribe(e);
}
function h(e, t) {
  ((e.state = t), e.changed.emit());
}
function ue() {
  let e = zEr(),
    t = M(e.jitterMinMs, X),
    o = Math.max(t, M(e.jitterMaxMs, J));
  return Math.round(t + Math.random() * (o - t));
}
function ie(e, t, o) {
  let n = e * 1000 + ue();
  if (t === null) return n;
  let s = O[t] ?? O.at(-1) ?? 0;
  return Math.max(n, o + s);
}
function Ago(e, t = Date.now(), o = "dialog", n) {
  return P(i(), e, t, o, n);
}
function P(e, t, o, n, s) {
  if (!wut(t)) return !1;
  (j(e, s),
    (e.consecutiveRearms = 0),
    e.takeoverUuids.clear(),
    e.dispatchingTakeoverUuids.clear(),
    e.queuedBeforeArmUuids.clear());
  for (let u of LP())
    if (se(u) || (u.mode === "bash" && Pne(u)))
      ((u.uuid ??= L()), e.queuedBeforeArmUuids.add(u.uuid));
  return (
    (e.armedAtMs = o),
    g("quota_auto_resume"),
    a("tengu_quota_auto_resume_offer_armed", { origin: c(n) }),
    q(e, t.resetsAt ?? 0, null, o, n),
    e.events.emit("armed"),
    !0
  );
}
function Cgo(e, t = Date.now(), o) {
  let n = i();
  if (!wut(e)) return !1;
  if (n.handoffInProgress) return !1;
  if (!T(n) || !f$n()) return !1;
  if (Hc()) return !1;
  let s = e.resetsAt ?? 0;
  if (s * 1000 - t > c0t) return !1;
  if (he(e.rateLimitType, st())) return !1;
  if (r(n) || n.autoArmDedupeResetKeys.has(s)) return !1;
  if (!P(n, e, t, "auto", o)) return !1;
  return (n.events.emit("auto-armed"), !0);
}
function ATs(e, t, o = Date.now(), n) {
  try {
    let s = e && t === "completed" ? ean(o) : null;
    if (s === null) return !1;
    let u = i();
    if (r(u))
      return (
        F(u, s, "main_thread"),
        u.state.phase === "armed" && u.state.resetsAtSeconds === s.resetsAt
      );
    return Cgo(s, o, n);
  } catch (s) {
    return (l(s), !1);
  }
}
function q(e, t, o, n, s = "dialog") {
  (w(e),
    (e.episodeArmOrigin = s),
    (e.lastArmedResetsAtSeconds = t),
    e.autoArmDedupeResetKeys.add(t),
    e.armedResetKeys.add(t),
    E(e),
    (e.activeTurnClaim = null),
    (e.sleptThroughReset = !1),
    (e.lastObservedMs = n));
  let u = ie(t, o, n);
  (a("tengu_quota_auto_resume_armed", {
    resets_in_sec: Math.max(0, Math.round(t - n / 1000)),
    rearm: o === null ? 0 : o + 1
  }),
    h(e, {
      phase: "armed",
      resetsAtSeconds: t,
      fireAtMs: u,
      consecutiveRearms: e.consecutiveRearms
    }));
}
function y8e() {
  re(i());
}
function xae(e) {
  return (...t) => {
    let o = e(...t);
    if (o !== !1) y8e();
    return o;
  };
}
async function re(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = !0;
    return;
  }
  e.confirmingMainModel = !0;
  try {
    for (;;) {
      if (((e.recheckRequestedWhileConfirming = !1), Roe(i_()) !== null)) return;
      let t = st(),
        o = e.state,
        n = await JFs(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || _(e)) return;
      if (e.recheckRequestedWhileConfirming || st() !== t || e.state !== o) continue;
      if (n === null || !Re(n)) return;
      de(e);
      return;
    }
  } catch (t) {
    l(t);
  } finally {
    e.confirmingMainModel = !1;
  }
}
function de(e) {
  (B(e, V),
    a("tengu_quota_auto_resume_fired", {
      rearm: e.consecutiveRearms,
      waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)),
      early: 1
    }),
    (e.lastObservedMs = null),
    h(e, { phase: "idle" }),
    e.events.emit("fired-now"));
}
function ce(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
      return !0;
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !1;
  }
}
function le(e) {
  switch (e) {
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "conversation_reset":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !0;
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
      return !1;
  }
}
function s1(e) {
  Q(i(), e);
}
function Q(e, t) {
  if (r(e)) E(e);
  if (le(t)) e.autoArmDedupeResetKeys.clear();
  let o = k(e, e.state.phase);
  if (y(e) && e.state.phase === "idle") a("tengu_quota_auto_resume_cancelled", { reason: c(t) });
  if ((v(e, t), o && ce(t))) e.events.emit("cancelled");
}
var a$n = {
  background_handoff:
    "Automatic continue cancelled \xB7 this session moved to the background, so the task will not resume on its own when the usage limit resets",
  relaunch:
    "Automatic continue cancelled \xB7 Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)",
  desktop_handoff:
    "Automatic continue cancelled \xB7 this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)",
  cloud_handoff:
    "Automatic continue cancelled \xB7 sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)",
  process_exit:
    "Automatic continue cancelled \xB7 Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)"
};
function l$n(e) {
  let t = i();
  if (((t.handoffInProgress = !0), !r(t))) return !1;
  let o = k(t, t.state.phase);
  return (Q(t, e), o);
}
function LBe() {
  i().handoffInProgress = !1;
}
function d$n(e, { dispatching: t = !1 } = {}) {
  let o = i();
  if (!r(o)) return;
  if ((K(o), o.takeoverUuids.add(e), t)) o.dispatchingTakeoverUuids.add(e);
  o.changed.emit();
}
function w(e, { keepIfDrained: t = !1 } = {}) {
  if (e.pendingContinuationUuid === null) return !1;
  let o = e.pendingContinuationUuid,
    n = D_((s) => s.uuid === o).length > 0;
  if (n || !t) ((e.pendingContinuationUuid = null), e.changed.emit());
  return n;
}
function me(e) {
  switch (e) {
    case "escape":
    case "ctrl_c":
    case "kill_agents_chord":
    case "dialog":
    case "low_priority":
    case "juniper_tide":
    case "cedar_ember":
    case "account_switch":
    case "setting_off":
    case "manual_submit":
    case "conversation_reset":
    case "killswitch":
    case "rearm_cap":
    case "horizon_exceeded":
    case "continuation_dropped":
    case "background_handoff":
    case "relaunch":
    case "desktop_handoff":
    case "cloud_handoff":
    case "process_exit":
      return !0;
    case "fired":
    case "stale":
      return !1;
  }
}
function v(e, t) {
  if (e.state.phase === "idle") return;
  if (me(t)) a("tengu_quota_auto_resume_cancelled", { reason: c(t) });
  h(e, { phase: "idle" });
}
function Rgo(e, t) {
  let o = i();
  if (o.state.phase !== "armed" || _(o)) return "idle";
  let n = o.lastObservedMs ?? o.state.fireAtMs;
  o.lastObservedMs = e;
  let s = e - n,
    u = M(zEr().graceMs, Z, ne);
  if (s > u && e >= o.state.fireAtMs) o.sleptThroughReset = !0;
  if (t || e < o.state.fireAtMs) return "pending";
  if (o.sleptThroughReset)
    return (
      (o.sleptThroughReset = !1),
      f("quota_auto_resume", "stale"),
      a("tengu_quota_auto_resume_stale", { late_by_ms: Math.round(e - o.state.fireAtMs) }),
      h(o, { phase: "stale" }),
      o.events.emit("stale"),
      "stale"
    );
  return (
    B(o),
    a("tengu_quota_auto_resume_fired", {
      rearm: o.state.consecutiveRearms,
      waited_ms: Math.max(0, Math.round(e - o.armedAtMs))
    }),
    v(o, "fired"),
    "fired"
  );
}
function N() {
  let e = Ogo(z, st());
  return e !== void 0 && e.trim() !== "" ? e : G;
}
function B(e, t = N()) {
  w(e);
  let o = L();
  ((e.pendingContinuationUuid = o),
    (e.activeTurnClaim = null),
    e.changed.emit(),
    Ok({
      agentId: tt(),
      mode: "prompt",
      priority: H,
      value: t,
      uuid: o,
      origin: { kind: "auto-continuation" },
      isMeta: !0,
      skipSlashCommands: !0,
      workload: Bue
    }));
}
function xgo() {
  return Pgo() ? N() : null;
}
function Pgo() {
  let e = i();
  return e.state.phase === "stale" && !_(e);
}
function CTs(e) {
  let t = i(),
    o = t.pendingContinuationUuid;
  if (o === null || !e.some((n) => n.uuid === o)) return e;
  if (!_(t)) return e;
  return e.filter((n) => n.uuid !== o);
}
function fe(e) {
  if (e.episodeArmOrigin !== "auto" || T(e)) return ((e.revocationRescan = "idle"), !1);
  if (J7t() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return (
        A(e).finally(() => {
          if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration)
            e.revocationRescan = "done";
        }),
        !1
      );
    }
    if (e.revocationRescan === "pending") return !1;
  }
  return ((e.revocationRescan = "idle"), !0);
}
function _(e) {
  if (!NBe()) return (C(e, "killswitch"), !0);
  if (fe(e)) return (C(e, "setting_off"), !0);
  return !1;
}
function K(e) {
  if ((w(e, { keepIfDrained: !0 }), e.state.phase === "stale"))
    (a("tengu_quota_auto_resume_stale_resumed", {}), (e.lastObservedMs = null), v(e, "stale"));
  else if (e.state.phase === "armed") ((e.lastObservedMs = null), v(e, "manual_submit"));
}
function C(e, t) {
  (a("tengu_quota_auto_resume_cancelled", { reason: c(t) }),
    y(e),
    h(e, { phase: "idle" }),
    e.events.emit(
      t === "horizon_exceeded"
        ? "horizon-exceeded"
        : t === "rearm_cap"
          ? "cap-exhausted"
          : "disabled"
    ));
}
function pe(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1000 - Date.now() > c0t;
}
function RTs(e) {
  let t = i();
  for (let p of e.turnUuids) t.dispatchingTakeoverUuids.delete(p);
  let o = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid),
    n = e.turnUuids.some((p) => t.takeoverUuids.has(p)),
    s = k(t, t.state.phase) || o,
    u =
      e.isHumanTakeover &&
      !n &&
      e.humanCommandUuids.length > 0 &&
      e.humanCommandUuids.every((p) => p !== void 0 && t.queuedBeforeArmUuids.has(p)),
    d = null;
  if (u && !o) return null;
  if (u) d = "continuation";
  else if (e.isHumanTakeover && (n || s)) ((d = "takeover"), K(t));
  else if (o) d = "continuation";
  if (d === null) return null;
  if (t.activeTurnClaim !== null)
    l(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
  let I = { kind: d, queried: e.willQuery };
  return ((t.activeTurnClaim = I), t.changed.emit(), I);
}
function xTs(e, t) {
  let o = i();
  for (let u of t) o.dispatchingTakeoverUuids.delete(u);
  if (e !== null) {
    if (e !== o.activeTurnClaim) return;
    if (((o.activeTurnClaim = null), o.changed.emit(), o.state.phase !== "idle")) return;
    if (LP().some((u) => b(o, u))) return;
    if ((y(o), e.kind === "continuation" && !e.queried)) D(o);
    return;
  }
  let n = o.pendingContinuationUuid !== null && t.includes(o.pendingContinuationUuid);
  if (
    (n || t.some((u) => o.takeoverUuids.has(u))) &&
    o.state.phase === "idle" &&
    o.activeTurnClaim === null &&
    !LP().some((u) => b(o, u))
  ) {
    if ((y(o), n)) D(o);
  }
}
function D(e) {
  (m("quota_auto_resume", "continuation_dropped"),
    a("tengu_quota_auto_resume_cancelled", { reason: c("continuation_dropped") }),
    e.events.emit("continuation-dropped"));
}
function y(e) {
  ((e.consecutiveRearms = 0),
    (e.lastArmedResetsAtSeconds = 0),
    (e.episodeArmOrigin = "dialog"),
    (e.revocationRescan = "idle"),
    e.revocationRescanGeneration++,
    e.takeoverUuids.clear(),
    e.dispatchingTakeoverUuids.clear(),
    e.queuedBeforeArmUuids.clear(),
    (e.lastObservedMs = null),
    (e.activeTurnClaim = null));
  let t = w(e);
  return (e.changed.emit(), t);
}
function Re(e) {
  return e.status !== "rejected" || e.isUsingOverage === !0 || e.overageInUse === !0;
}
function F(e, t, o) {
  if (!LC(t) || !Q7t()) return;
  let n = t.resetsAt ?? 0;
  if (r(e) && R(t.rateLimitType, st())) e.autoArmDedupeResetKeys.add(n);
  if (e.state.phase === "armed") {
    if (n * 1000 > e.state.fireAtMs && R(t.rateLimitType, st())) S(e, n, null);
    return;
  }
  if (x(e)) return;
  if (e.state.phase === "stale") return;
  let s = e.activeTurnClaim;
  if (s === null) return;
  if (o !== "main_thread") return;
  if (s.kind === "takeover") {
    if (
      ((e.consecutiveRearms = 0),
      S(e, R(t.rateLimitType, st()) ? n : e.lastArmedResetsAtSeconds, null) &&
        e.episodeArmOrigin === "auto")
    )
      e.events.emit("taken-over");
    return;
  }
  if (e.consecutiveRearms >= Y) {
    (m("quota_auto_resume", "rearm_cap"), e.autoArmDedupeResetKeys.add(n), C(e, "rearm_cap"));
    return;
  }
  let u = e.consecutiveRearms;
  (e.consecutiveRearms++, S(e, n, u));
}
function S(e, t, o) {
  if (_(e)) return !1;
  if (pe(e, t)) return (C(e, "horizon_exceeded"), !1);
  return (q(e, t, o, Date.now(), e.episodeArmOrigin), e.events.emit("rearmed"), !0);
}
function he(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return !1;
  if (R(e, t)) return !1;
  let o = Roe(i_());
  if (e === "seven_day_opus" && o === "opus") return !1;
  if (e === "seven_day_sonnet" && o === "sonnet") return !1;
  return !0;
}
function R(e, t) {
  switch (e) {
    case "five_hour":
    case "seven_day":
    case "overage":
      return !0;
    case "seven_day_opus":
      return gue(Xe(t));
    case "seven_day_sonnet":
      return e4o(Xe(t));
    case "seven_day_overage_included": {
      let o = Vk($t(t));
      if (o === null) return !1;
      let n = o.toLowerCase();
      return eTe().some((s) => s.toLowerCase() === n);
    }
    case void 0:
      return !1;
  }
  return !1;
}
function c$n(e, t) {
  return R(e.rateLimitType, t) || Xe(e.model, { identity: !0 }) === Xe(t, { identity: !0 });
}
function Igo(e) {
  j(i(), e);
}
function j(e, t) {
  if (e.limitsSubscriptionStarted) return;
  ((e.limitsSubscriptionStarted = !0),
    (e.storageV5 = t),
    (e.unsubscribeQuotaRejected = WVn((o, n) => F(e, o, n))),
    A(e),
    (e.unsubscribeSettingsChanges = Gi.subscribe(() => {
      A(e);
    })),
    (e.unsubscribeSessionSwitch = Eu((o, n) => {
      if (VIe(n)) (Q(e, "conversation_reset"), (e.handoffInProgress = !1));
    })));
}
function VIe(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "remote_attach":
      return !0;
    case "fork":
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return !1;
  }
}
export {
  s$n,
  kTs,
  i$n,
  wut,
  Bve,
  TTs,
  g8e,
  o1,
  kgo,
  h8e,
  DMt,
  GEr,
  HMt,
  Tgo,
  Ago,
  Cgo,
  ATs,
  y8e,
  xae,
  s1,
  a$n,
  l$n,
  LBe,
  d$n,
  Rgo,
  xgo,
  Pgo,
  CTs,
  RTs,
  xTs,
  c$n,
  Igo,
  VIe
};

//# sourceMappingURL=chunk-dx5awfq0.js.map
