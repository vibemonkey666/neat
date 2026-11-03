// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, Eu } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { EAe, cbt, Gfn, JQ, UO, JBr, t2e, ubt, UYs, BYs, jYs, _U } from "./chunk-bbw420pv.js";
import { li } from "./chunk-f7aya6cs.js";
import { Bve, o1, s1, VIe } from "./chunk-dx5awfq0.js";
import { yae, T3e, uve, Act } from "./chunk-f7000fnc.js";
import { LE } from "./chunk-gjv3ente.js";
var l = new W(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1
}));
function i() {
  return l.of(U().host);
}
function k3e(t, e = Date.now()) {
  return (
    T3e(t) &&
    t.lowPriorityOffer === "treatment" &&
    t.resetsAt !== void 0 &&
    t.resetsAt * 1000 > e &&
    !JBr(e) &&
    t2e(e) === void 0 &&
    !UO() &&
    cbt()
  );
}
function s(t, e = Date.now()) {
  let o = BYs(e);
  return (
    yae() &&
    t.status !== "rejected" &&
    o !== void 0 &&
    !u(o) &&
    !JBr(e) &&
    t2e(e) === void 0 &&
    cbt()
  );
}
function u(t) {
  let e = Bve();
  switch (e.phase) {
    case "idle":
      return !1;
    case "armed":
      return e.resetsAtSeconds !== t;
    case "stale":
      return !0;
  }
}
function ISs(t) {
  if (t.lowPriorityOffer === void 0 || !T3e(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = i();
  if (o.notedWallResetsAt !== e)
    ((o.notedWallResetsAt = e),
      a("tengu_lowpri_offer_capable", {
        arm: c(t.lowPriorityOffer),
        tier: c(uve()),
        limit_type: ce(t.rateLimitType) ?? void 0,
        auto_armed: o1(),
        client_enabled: cbt(),
        config_version: Gfn()
      }));
  if (t.lowPriorityOffer === "treatment" && t2e() !== void 0 && o.withheldWallResetsAt !== e)
    ((o.withheldWallResetsAt = e),
      a("tengu_lowpri_offer_withheld", {
        arm: c(t.lowPriorityOffer),
        reason: c("cooloff"),
        client_enabled: cbt(),
        config_version: Gfn()
      }));
}
function GJt(t, e) {
  let o = t.resetsAt ?? null,
    r = i();
  if (o === null || r.shownWallResetsAt === o) return;
  ((r.shownWallResetsAt = o),
    a("tengu_lowpri_offer_shown", {
      arm: ce(t.lowPriorityOffer) ?? void 0,
      surface: c(e),
      config_version: Gfn()
    }));
}
function zJt(t) {
  let e = li();
  if (k3e(e) && e.resetsAt !== void 0) {
    if (
      (s1("low_priority"),
      n(),
      !UYs({
        resetsAtSeconds: e.resetsAt,
        arm: e.lowPriorityOffer,
        entry: t,
        retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
        maxWaitSeconds: e.lowPriorityMaxWaitSeconds
      }))
    )
      return "unavailable";
    return (Act(), "accepted");
  }
  if (s(e)) {
    let o = o1();
    if (o) s1("low_priority");
    if ((n(), !jYs(t))) return "unavailable";
    if (o) Act();
    return "resumed";
  }
  return "unavailable";
}
function KJt(t) {
  let e = ubt(),
    o = e.phase === "active" ? LE(e.resetsAtSeconds) : void 0,
    r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${EAe} to stop.`;
}
function VJt(t = Date.now()) {
  if (JBr(t))
    return `${JQ().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = t2e(t);
  if (e !== void 0)
    return `Lower-priority mode is taking a break until ${LE(Math.ceil(e / 1000)) ?? "later"}, after waiting too long for spare capacity. Try /${EAe} again then.`;
  return "Lower-priority mode isn't available right now.";
}
function OSs() {
  let t = li();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${k3e(t) || s(t) ? `; run /${EAe} again to turn it back on` : ""}.`;
}
function n() {
  let t = i();
  if (t.sessionSwitchSubscribed) return;
  ((t.sessionSwitchSubscribed = !0),
    Eu((e, o) => {
      if (VIe(o)) _U("conversation_reset");
    }));
}
export { k3e, ISs, GJt, zJt, KJt, VJt, OSs };

//# sourceMappingURL=chunk-7rs0czy2.js.map
