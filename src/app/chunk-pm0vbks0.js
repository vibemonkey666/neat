// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ut, k, Re, ue } from "./chunk-ajtyjx88.js";
import { Zn } from "./chunk-cj37hmns.js";
import { te } from "./chunk-4kxznmzw.js";
import { g } from "./chunk-brszmkb3.js";
import { gI } from "./chunk-vchq4g74.js";
import { GP, Jde } from "./chunk-r5xsp8d0.js";
import { js } from "./chunk-96sx3c3k.js";
import { Qhe } from "./chunk-6eew75md.js";
var c = 3,
  f = 3,
  wbs = 20,
  vbs = "Your Claude Code session is ready \u2014 continue from your phone anytime.";
function Ebs() {
  if (Zn.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE)
    return {
      thresholdSec: 5,
      probability: 1,
      maxImpressions: -1,
      impressionKey: "force",
      dayStartHour: 0,
      dayEndHour: 24
    };
  let e = k("tengu_rc_long_turn_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o =
      typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec)
        ? Math.min(3600, Math.max(5, e.thresholdSec))
        : 90,
    n =
      typeof e.probability === "number" && Number.isFinite(e.probability)
        ? Math.min(1, Math.max(0, e.probability))
        : 1,
    r =
      typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions)
        ? Math.trunc(e.maxImpressions)
        : 3,
    t = typeof e.impressionKey === "string" ? e.impressionKey : "",
    a = (i, d) =>
      typeof i === "number" && Number.isFinite(i) ? Math.min(24, Math.max(0, Math.trunc(i))) : d,
    l = a(e.dayStartHour, 7),
    p = a(e.dayEndHour, 21);
  return {
    thresholdSec: o,
    probability: n,
    maxImpressions: r,
    impressionKey: t,
    dayStartHour: l,
    dayEndHour: p
  };
}
function kbs(e, o = new Date()) {
  if (e.dayStartHour >= e.dayEndHour) return !0;
  let n = o.getHours();
  return n >= e.dayStartHour && n < e.dayEndHour;
}
function m(e, o) {
  let n = (ue()[e] ?? 0) + 1;
  Re((r) => ((r[e] ?? 0) >= n ? r : { ...r, [e]: n }), o);
}
var s = { afterPromptCount: 5, probability: 0, maxImpressions: 3 };
function Tbs() {
  let e,
    o = Zn.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (o)
    try {
      e = te(o);
    } catch {
      e = void 0;
    }
  e ??= k("tengu_rc_permission_nudge", s);
  let n = (r, t) => (typeof r === "number" && Number.isFinite(r) ? r : t);
  return {
    afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)),
    probability: n(e?.probability, s.probability),
    maxImpressions: n(e?.maxImpressions, s.maxImpressions)
  };
}
function Ddo() {
  if (!GP()) return !1;
  let e = ue();
  return !e.hasUsedRemoteControl && !Jde() && (e.remoteControlUpsellSeenCount ?? 0) < c;
}
function Abs(e) {
  (m("remoteControlUpsellSeenCount", e), g("tips_rc_upsell_show"));
}
function b() {
  return ue().hasUsedRemoteControl === !0 || Jde();
}
function Hdo() {
  return Ldo() && (ue().pushNotifUpsellSeenCount ?? 0) < f;
}
function Ldo() {
  return GP() && Qhe() && b() && js("agentPushNotifEnabled", !1).value !== !0;
}
function Cbs(e) {
  (m("pushNotifUpsellSeenCount", e), g("tips_push_upsell_show"));
}
function Rbs(e) {
  if (!GP()) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let o = ue();
  return (
    ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? (o.rcLongTurnNudgeSeenCount ?? 0) : 0) <
    e.maxImpressions
  );
}
function xbs(e, o) {
  if (e.maxImpressions >= 0)
    Re((n) => {
      let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
      return {
        ...n,
        rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1,
        rcLongTurnNudgeSeenKey: e.impressionKey
      };
    }, o);
  g("tips_rc_long_turn_show");
}
function Pbs(e) {
  if (!GP()) return !1;
  return (ue().rcPermissionNudgeSeenCount ?? 0) < e;
}
function Ibs(e) {
  (Re((o) => ({ ...o, rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1 }), e),
    g("tips_rc_permission_nudge_show"));
}
function Obs() {
  if (!Qhe()) return null;
  let e = k("tengu_kairos_ready_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o =
      typeof e.probability === "number" && Number.isFinite(e.probability)
        ? Math.min(1, Math.max(0, e.probability))
        : 1,
    n =
      typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions)
        ? Math.trunc(e.maxImpressions)
        : 5,
    r = typeof e.impressionKey === "string" ? e.impressionKey : "";
  return { probability: o, maxImpressions: n, impressionKey: r };
}
function Mbs(e, o, n) {
  if (!o || n) return !1;
  if (Ut() || gI() != null) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let r = ue();
  return (
    ((r.remoteControlReadyPushKey ?? "") === e.impressionKey
      ? (r.remoteControlReadyPushCount ?? 0)
      : 0) < e.maxImpressions
  );
}
function Dbs(e, o) {
  if (e.maxImpressions >= 0)
    Re((n) => {
      let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
      return {
        ...n,
        remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1,
        remoteControlReadyPushKey: e.impressionKey
      };
    }, o);
  g("tips_rc_ready_push_send");
}
function mJt(e) {
  if (ue().hasUsedRemoteControl) return;
  Re((o) => (o.hasUsedRemoteControl ? o : { ...o, hasUsedRemoteControl: !0 }), e);
}
var C = ["mobile", "web", "desktop"];
function y(e) {
  switch (e) {
    case "ios":
    case "android":
      return "mobile";
    case "web_claude_ai":
      return "web";
    case "desktop_app":
      return "desktop";
    default:
      return;
  }
}
function gHn(e, o) {
  let n = y(e);
  if (!n) return;
  if (u(ue()).includes(n)) return;
  Re((r) => {
    let t = u(r);
    if (t.includes(n)) return r;
    return { ...r, remoteControlSurfacesSeen: [...t, n] };
  }, o);
}
function Ndo() {
  let e = u(ue()),
    o = e.includes("mobile"),
    n = e.includes("web");
  if (o === n) return;
  return o ? "web" : "mobile";
}
function u(e) {
  let o = e.remoteControlSurfacesSeen;
  return Array.isArray(o) ? o.filter((n) => C.some((r) => r === n)) : [];
}
export {
  wbs,
  vbs,
  Ebs,
  kbs,
  Tbs,
  Ddo,
  Abs,
  Hdo,
  Ldo,
  Cbs,
  Rbs,
  xbs,
  Pbs,
  Ibs,
  Obs,
  Mbs,
  Dbs,
  mJt,
  gHn,
  Ndo
};

//# sourceMappingURL=chunk-pm0vbks0.js.map
