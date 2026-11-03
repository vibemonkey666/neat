// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z } from "./chunk-p27rr8yn.js";
import { g } from "./chunk-brszmkb3.js";
function Tve(e) {
  let { wakes: t } = Z().wakes,
    n = t.get(e);
  if (!n)
    ((n = {
      coalesceTimer: null,
      rescanWanted: !1,
      lastScanScheduledAt: 0,
      rescanArgs: null,
      newestKickAt: 0,
      kickSettled: !0,
      kickCount: 0,
      pendingConfirm: null,
      pendingSeed: null,
      lastWakeArgs: null,
      inFlightScan: null,
      idleRescanCancel: null,
      idleRescanUnmuted: !1,
      idlePassOwed: null,
      cancelGeneration: 0,
      readRetryTimer: null,
      readRetryAttempts: 0
    }),
      t.set(e, n));
  return n;
}
function Eae(e) {
  for (let [t, n] of Z().wakes.wakes) {
    if (e !== void 0 && t !== e) continue;
    if (n.coalesceTimer) (clearTimeout(n.coalesceTimer), (n.coalesceTimer = null));
    if (
      ((n.rescanWanted = !1),
      (n.pendingConfirm = null),
      (n.pendingSeed = null),
      (n.newestKickAt = 0),
      (n.kickSettled = !0),
      (n.lastScanScheduledAt = 0),
      (n.rescanArgs = null),
      n.idleRescanCancel?.(),
      (n.idleRescanCancel = null),
      (n.idleRescanUnmuted = !1),
      (n.idlePassOwed = null),
      n.readRetryTimer)
    )
      (clearTimeout(n.readRetryTimer), (n.readRetryTimer = null));
    ((n.readRetryAttempts = 0), n.cancelGeneration++);
  }
}
function NOt() {
  Z().wakes.scanGeneration++;
}
function NQt(e) {
  let { slugEpochs: t } = Z().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function c(e) {
  return Z().wakes.slugEpochs.get(e) ?? 0;
}
function jW(e) {
  return Z().wakes.scanGeneration + c(e);
}
function n3(e) {
  return Z().wakes.stopGenerations.get(e) ?? 0;
}
function i(e) {
  let { stopGenerations: t } = Z().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}
function C0n(e, t) {
  let { latchChangedAt: n } = Z().wakes;
  if (t === void 0) n.set(e, Date.now());
  else if (Number.isFinite(t)) n.set(e, Math.min(t, Date.now()));
  else n.delete(e);
}
var a = C0n;
function jfo(e) {
  return Z().wakes.latchChangedAt.get(e);
}
function $Qt(e) {
  let { wakes: t } = Z();
  (a(e),
    t.stoppedSlugs.add(e),
    t.sweptSlugs.delete(e),
    t.orphanedSweptSlugs.delete(e),
    i(e),
    t.pendingResumeDisclosure.delete(e));
}
function R0n(e) {
  let { wakes: t } = Z();
  if (t.stoppedSlugs.has(e)) a(e);
  (t.stoppedSlugs.delete(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e));
}
function hy(e) {
  return Z().wakes.stoppedSlugs.has(e);
}
function yy(e) {
  let t = Z();
  return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}
function Jct(e) {
  let { wakes: t } = Z();
  if (!t.stoppedSlugs.has(e)) (a(e), t.stoppedSlugs.add(e), t.sweptSlugs.add(e), i(e));
  else {
    let n = t.yieldedSlugs.get(e);
    if (n !== void 0) ((n.wasPaused = !0), i(e));
  }
  ((t.humanTurnAtScanGeneration = null),
    t.liftedAtScanGeneration.delete(e),
    t.orphanedSweptSlugs.delete(e),
    t.pendingResumeDisclosure.delete(e));
}
function P_(e) {
  return Z().wakes.sweptSlugs.has(e);
}
function yEs() {
  return Z().wakes.sweptSlugs;
}
function _Es() {
  let { wakes: e } = Z();
  for (let t of e.sweptSlugs) e.orphanedSweptSlugs.add(t);
}
function Wfo(e, t) {
  let { wakes: n } = Z(),
    o = n.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(t);
    return;
  }
  let r = n.sweptSlugs.has(e) && !n.orphanedSweptSlugs.has(e),
    s = {
      msgIds: new Set([t]),
      wasPaused: r,
      stopGeneration: -1,
      scanGeneration: n.scanGeneration,
      announced: !1,
      stoppedElsewhere: !1,
      latchClockBefore: n.latchChangedAt.get(e)
    };
  n.yieldedSlugs.set(e, s);
  let d = n.humanTurnAtScanGeneration;
  (Jct(e),
    (n.humanTurnAtScanGeneration = d),
    a(e, s.latchClockBefore ?? Number.NaN),
    (s.stopGeneration = n3(e)));
}
function bEs(e) {
  let t = Z().wakes.yieldedSlugs.get(e);
  if (t !== void 0) t.announced = !0;
}
function SEs(e) {
  return Z().wakes.yieldedSlugs.get(e)?.announced === !0;
}
function wEs(e, t) {
  let { wakes: n } = Z(),
    o = n.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(t) || o.msgIds.size > 0) return !1;
  if (
    (n.yieldedSlugs.delete(e),
    !o.wasPaused && n3(e) === o.stopGeneration && n.scanGeneration === o.scanGeneration)
  )
    (R0n(e), a(e, o.latchClockBefore ?? Number.NaN));
  else a(e);
  return !0;
}
function vEs(e) {
  Z().wakes.yieldedSlugs.delete(e);
}
function EEs(e, t) {
  let n = Z().wakes.yieldedSlugs.get(e);
  if (n === void 0 || !n.msgIds.has(t)) return !1;
  return ((n.stoppedElsewhere = !0), $Qt(e), !0);
}
function kEs(e) {
  return Z().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === !0;
}
function e1(e) {
  return Z().wakes.yieldedSlugs.has(e);
}
function Gfo(e) {
  let { wakes: t } = Z(),
    n = t.yieldedSlugs.get(e);
  return (
    n !== void 0 &&
    !n.wasPaused &&
    n3(e) === n.stopGeneration &&
    t.scanGeneration === n.scanGeneration
  );
}
function IIe(e) {
  let { wakes: t } = Z();
  return t.orphanedSweptSlugs.has(e) || t.yieldedSlugs.has(e);
}
function zfo(e) {
  let { autoReact: t, live: n, builtInArtifactHiddenForMcp: o } = Z(),
    r = n.supervisors.get(e);
  return (
    t.userDisarmed ||
    yy(e) ||
    t.wakeEnabledMemo === !1 ||
    (o
      ? (r !== void 0 && !r.stopped && r.autoReactWiring === void 0) ||
        t.artifacts.get(e)?.ruleWithheldNoted === !0
      : (t.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null) ||
    (r !== void 0 && !r.stopped && r.armedVia === "mcp_write")
  );
}
function u(e, t, n) {
  if ((t(n), !e.summonArmOkReported)) ((e.summonArmOkReported = !0), g("artifact_summon_arm_emit"));
}
function l(e, t, n) {
  let o = e.activitySenders.get(t);
  if (o === void 0) return;
  let r = e.summonDeclared.get(t);
  if (n && r !== !0) (e.summonDeclared.set(t, !0), u(e, o, "arm:0"));
  else if (!n && r === !0) (e.summonDeclared.set(t, !1), u(e, o, "arm"));
}
function mL(e, t) {
  l(e, t, zfo(t));
}
function Qct(e) {
  for (let t of e.activitySenders.keys()) mL(e, t);
}
function TEs(e, t) {
  (e.summonDeclared.delete(t), mL(e, t));
}
function AEs(e, t) {
  e.summonDeclared.delete(t);
}
export {
  Tve,
  Eae,
  NOt,
  NQt,
  jW,
  n3,
  C0n,
  jfo,
  $Qt,
  R0n,
  hy,
  yy,
  Jct,
  P_,
  yEs,
  _Es,
  Wfo,
  bEs,
  SEs,
  wEs,
  vEs,
  EEs,
  kEs,
  e1,
  Gfo,
  IIe,
  zfo,
  mL,
  Qct,
  TEs,
  AEs
};

//# sourceMappingURL=chunk-hgshn9e7.js.map
