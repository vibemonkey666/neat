import {
  fileURLToPath as __filePath_43ce5c3dd84d7a57,
  URL as __filePath_43ce5c3dd84d7a57_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  xB,
  SW,
  Om,
  Fxe,
  aos,
  TXr,
  XTn,
  GSe,
  CCt,
  AXr,
  JTn,
  QTn,
  BYt,
  jdr,
  TX,
  jYt
} from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { k } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { ekt } from "./chunk-rh5ymkjp.js";
import { l6n } from "./chunk-hp7h93my.js";
import { X6 } from "./chunk-hmk482tx.js";
import { JA } from "./chunk-q1myka9a.js";
var C = import.meta.require(
    __filePath_43ce5c3dd84d7a57(
      new __filePath_43ce5c3dd84d7a57_URL("./chunk-za6vxpwh.js", import.meta.url)
    )
  ),
  L = 60,
  p3e = 3600,
  P = 600000,
  O = 1200,
  x = 1;
function v(e, o) {
  (a("tengu_loop_ended", { reason: c(e), ...o }), jdr(!0), BYt());
}
function dbs() {
  let e = i.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return k("tengu_kairos_loop_keepalive", !0);
}
function cbs(e, o, n, l, r) {
  return w(e, o, { viaKeepalive: !1, reason: n, toolUseId: l, owner: { caller: r } });
}
function ubs(e, o) {
  if (AXr() >= x)
    return (
      t(
        "[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"
      ),
      v("model_stopped", { via_keepalive: !0 }),
      null
    );
  return w(O, e, { viaKeepalive: !0, owner: { rearmedFor: o } });
}
function Tdo() {
  (jdr(!1), BYt());
}
function fbs() {
  let e = QTn(),
    o = Om().filter((l) => l.kind === "loop"),
    n = GSe();
  if ((CCt(null), JTn(0), TX(o.map((l) => l.id)), o.length === 0)) F();
  for (let l of o) XTn(l.prompt);
  if (n !== null) XTn(n);
  if (e)
    return (
      t(
        "[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"
      ),
      o.length
    );
  return (
    t(
      `[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`
    ),
    v("model_stopped", { via_keepalive: !1 }),
    g("loop_schedule_wakeup"),
    o.length
  );
}
function w(e, o, n) {
  let { viaKeepalive: l, reason: r, toolUseId: u, owner: d } = n;
  if (!l) JTn(0);
  let p = K(),
    m = Date.now(),
    s = aos(o),
    A = s !== void 0 && m > s.lastScheduledFor + p3e * 1000,
    _ = s === void 0 || A ? m : s.startedAt,
    S = X6().recurringMaxAgeMs;
  if (S > 0 && m - _ >= S) {
    if (!s?.agedOut)
      (TXr(o, { startedAt: _, lastScheduledFor: m - (p3e - L) * 1000, agedOut: !0 }),
        a("tengu_loop_dynamic_wakeup_aged_out", { loop_age_ms: m - _, max_age_ms: S }),
        v("aged_out", { via_keepalive: l }),
        f("loop_schedule_wakeup", "loop_wakeup_aged_out"));
    return null;
  }
  let { clamped: h, wasClamped: b, targetMs: E, createdAt: D } = T(e);
  if (
    (M({
      targetMs: E,
      createdAt: D,
      prompt: o,
      reason: r,
      chainStartedAt: _,
      viaKeepalive: l,
      toolUseId: u,
      owner: d
    }),
    l)
  )
    return (
      JTn(AXr() + 1),
      t(`[loop] keepalive armed (model did not reschedule): ${h}s fallback`),
      a("tengu_loop_keepalive_fired", {
        clamped_delay_seconds: h,
        prompt_is_sentinel: C.isLoopDefaultSentinel(o)
      }),
      f("loop_schedule_wakeup", "model_no_reschedule"),
      { scheduledFor: E, clampedDelaySeconds: h, wasClamped: b }
    );
  return (
    t(
      `[loop] dynamic wakeup scheduled: ${h}s${b ? ` (clamped from ${e}s)` : ""}${r !== void 0 ? ` \u2014 ${r}` : ""}`
    ),
    a("tengu_loop_dynamic_wakeup_scheduled", {
      chosen_delay_seconds: Number.isFinite(e) ? e : 0,
      clamped_delay_seconds: h,
      was_clamped: b,
      reason_length: r?.length ?? 0,
      superseded_count: p
    }),
    g("loop_schedule_wakeup"),
    { scheduledFor: E, clampedDelaySeconds: h, wasClamped: b }
  );
}
function pbs({ scheduledFor: e, prompt: o, reason: n, chainStartedAt: l, plugin: r }) {
  let u = Date.now();
  if (e <= u || r4()) return;
  (M({
    targetMs: e,
    createdAt: Math.max(u, e - 60000),
    prompt: o,
    reason: n,
    chainStartedAt: Math.min(l, u),
    viaKeepalive: !1,
    toolUseId: void 0,
    owner: { rearmedFor: r }
  }),
    t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`));
}
function M({
  targetMs: e,
  createdAt: o,
  prompt: n,
  reason: l,
  chainStartedAt: r,
  viaKeepalive: u,
  toolUseId: d,
  owner: p
}) {
  let m = "rearmedFor" in p ? p.rearmedFor : ekt(p.caller),
    s = new Date(e);
  if (
    (Fxe({
      id: I(),
      cron: `${s.getMinutes()} ${s.getHours()} * * *`,
      prompt: n,
      createdAt: o,
      kind: "loop",
      scheduledFor: e,
      reason: l,
      ...(u && { keepalive: !0 }),
      ...(m !== void 0 && { plugin: m })
    }),
    TXr(n, { startedAt: r, lastScheduledFor: e }),
    SW(!0),
    jdr(!1),
    d !== void 0)
  )
    jYt({ toolUseId: d, scheduledFor: e, chainStartedAt: r });
}
function T(e) {
  let o;
  if (Number.isNaN(e)) o = L;
  else if (e === 1 / 0) o = p3e;
  else if (e === -1 / 0) o = L;
  else o = Math.round(e);
  let n = Math.max(L, Math.min(p3e, o)),
    l = !Number.isFinite(e) || o !== n,
    r = Date.now(),
    u = r + n * 1000,
    d = y(u),
    p = X6().cacheLeadMs;
  if (p > 0 && n * 1000 <= l6n) {
    let s = l6n - p;
    while (d - r > s && d - 60000 >= r + L * 1000) d -= 60000;
  }
  if (p > 0) {
    let s = xB() ?? r,
      _ = (r - s <= P ? Math.min(r, s) : r) + JA - p;
    while (d > _ && d - 60000 >= r + L * 1000) d -= 60000;
  }
  let m = u < d ? u : d - 1;
  return { clamped: n, wasClamped: l, targetMs: d, createdAt: m };
}
function y(e) {
  return Math.ceil(e / 60000) * 60000;
}
function I() {
  return Math.floor(Math.random() * 4294967295)
    .toString(16)
    .padStart(8, "0");
}
function K() {
  let e = Om()
    .filter((o) => o.kind === "loop")
    .map((o) => o.id);
  if (e.length === 0) return 0;
  return TX(e);
}
function F() {
  jYt(void 0);
}
function r4() {
  return Om().some((e) => e.kind === "loop");
}
function Tbr() {
  let e = Om().filter((n) => n.kind === "loop"),
    o = GSe();
  if ((CCt(null), JTn(0), e.length === 0)) F();
  if (e.length === 0 && o === null) return 0;
  TX(e.map((n) => n.id));
  for (let n of e) XTn(n.prompt);
  if (o !== null) XTn(o);
  return (
    t(
      `[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`
    ),
    v("user_abort", { loops_cancelled: e.length }),
    g("loop_cancel_all"),
    e.length
  );
}
export { p3e, dbs, cbs, ubs, Tdo, fbs, pbs, r4, Tbr };

//# sourceMappingURL=chunk-0m847w4m.js.map
