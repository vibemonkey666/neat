// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { N, Pp } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { p } from "./chunk-qmkm2x59.js";
import { Qs } from "./chunk-dvghjmtr.js";
import { Uu, Qm } from "./chunk-4nzy53ma.js";
import { Yd } from "./chunk-ddpw2j06.js";
import { ua, Et, kf, gn, Sv, jt, Re, ue } from "./chunk-ajtyjx88.js";
import { G$t, zgt, DHr, z$t, K$t, KWe, _O, Lm } from "./chunk-f7aya6cs.js";
import { LC } from "./chunk-j0tbz6ra.js";
import { yae, uve } from "./chunk-f7000fnc.js";
import { _ae } from "./chunk-dzx0hez8.js";
import { o, v, M, oe, T, u, me, B } from "./chunk-0bqrj5ah.js";
import { _e } from "./chunk-n8wdmnah.js";
var G = "starry_waterfall",
  z = [
    "org_not_eligible",
    "no_program_running",
    "holdout",
    "mobile",
    "surface",
    "cli_version",
    "app_version",
    "auto_reload",
    "auto_reload_unknown",
    "segment_unknown",
    "not_assigned",
    "arm_unknown",
    "unavailable",
    "unknown"
  ],
  q = [
    "cli_menu",
    "cli_credits_required",
    "ide_banner",
    "alert_band",
    "overage_band",
    "code_usage_band",
    "credits_required",
    "code_credits_required",
    "unknown"
  ],
  w = p(() =>
    o()
      .regex(/^[A-Za-z0-9_-]{1,64}$/)
      .nullable()
      .optional()
      .catch(null)
  ),
  V = p(() =>
    u({
      offer_eligible: M().nullable().optional().catch(null),
      offer_reason: B(z).catch("unknown").nullable().optional(),
      offer_arm: w(),
      offer_kind: B(["none", "pct_off", "extra_credit", "unknown"])
        .catch("unknown")
        .nullable()
        .optional(),
      offer_menu: B(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(),
      offer_segment: B(["never", "lapsed", "recent", "unknown"])
        .catch("unknown")
        .nullable()
        .optional(),
      offer_days_left: v().int().nullable().optional().catch(null),
      offer_surface: B(q).catch("unknown").nullable().optional()
    })
  ),
  Q = p(() =>
    u({
      eligible: M(),
      ineligible_reason: B(z).catch("unknown").nullable().optional(),
      active: M().optional().catch(!1),
      arm_id: w(),
      kind: B(["none", "pct_off", "extra_credit"]).nullable().optional().catch(null),
      headline_pct: v().int().min(0).max(300).optional().catch(0),
      menu: B(["base", "plus40", "unknown"]).catch("unknown").nullable().optional(),
      default_bundle_id: w(),
      segment: B(["never", "lapsed", "recent", "unknown"]).catch("unknown").nullable().optional(),
      first_offered_at: o().nullable().optional().catch(null),
      expires_at: o().nullable().optional().catch(null),
      days_left: v().int().min(0).nullable().optional().catch(null),
      redeemed: M().optional().catch(!1),
      event_props: V().nullable().optional().catch(null)
    })
  );
function Y(e) {
  if (e === void 0 || e === null) return null;
  let n = Q().safeParse(e);
  if (!n.success)
    return (t(`[usage-credit-offer] ignoring a malformed status block: ${n.error.message}`), null);
  let r = n.data,
    i = r.kind ?? null,
    s = r.event_props;
  return {
    eligible: r.eligible,
    ineligibleReason: r.ineligible_reason ?? null,
    active: (r.active ?? !1) && i !== null,
    armId: r.arm_id ?? null,
    kind: i,
    headlinePct: r.headline_pct ?? 0,
    menu: r.menu ?? null,
    defaultBundleId: r.default_bundle_id ?? null,
    segment: r.segment ?? null,
    firstOfferedAt: r.first_offered_at ?? null,
    expiresAt: r.expires_at ?? null,
    daysLeft: r.days_left ?? null,
    redeemed: r.redeemed ?? !1,
    eventProps: s
      ? {
          offerEligible: s.offer_eligible ?? null,
          offerReason: s.offer_reason ?? null,
          offerArm: s.offer_arm ?? null,
          offerKind: s.offer_kind ?? null,
          offerMenu: s.offer_menu ?? null,
          offerSegment: s.offer_segment ?? null,
          offerDaysLeft: s.offer_days_left ?? null,
          offerSurface: s.offer_surface ?? null
        }
      : null
  };
}
function L(e) {
  return (
    e !== void 0 &&
    e !== null &&
    e.active &&
    !e.redeemed &&
    (e.kind === "pct_off" || e.kind === "extra_credit") &&
    e.headlinePct > 0 &&
    e.daysLeft !== null &&
    e.daysLeft > 0
  );
}
async function P(e, n) {
  try {
    if (!kf()) return { kind: "no_profile_scope" };
    let r = await _O(e, { read: "starry_waterfall", surface: n });
    if (!KWe(r))
      return (
        t(
          "[usage-credit-offer] status fetch returned a fieldless or non-object body (in-band error)",
          { level: "warn" }
        ),
        { kind: "failed" }
      );
    return { kind: "answered", status: Y(r?.[G]) };
  } catch (r) {
    if ((t(`[usage-credit-offer] status fetch failed: ${N(r).message}`, { level: "warn" }), G$t(r)))
      return { kind: "answered", status: null, notAuthorized: !0 };
    return { kind: "failed" };
  }
}
function Z() {
  return { state: { phase: "idle" }, shown: new Set(), pendingAsk: null, changed: De() };
}
var X = new W(Z);
function h() {
  return X.of(U().host);
}
function QFe() {
  return h().state;
}
function g(e) {
  let n = h();
  ((n.state = e), n.changed.emit());
}
function Fee(e) {
  return h().changed.subscribe(e);
}
var D = 3,
  J = 12000,
  ee = 600000,
  ne = "credits_required";
function E(e) {
  return LC(e) && e.rateLimitType !== void 0 ? `${e.rateLimitType}:${e.resetsAt}` : null;
}
function j(e) {
  return { key: e, accountEpoch: Lm() };
}
function R(e, n) {
  return e.key === n.key && e.accountEpoch === n.accountEpoch;
}
function te() {
  return Et() && gn()?.billingType !== "usage_based" && Qs();
}
function O() {
  let e = QFe();
  if (e.phase === "idle" || e.wall.accountEpoch !== Lm()) return;
  switch (e.phase) {
    case "answered":
      return e.status;
    case "asking":
      return e.standing;
    case "failed":
      return;
  }
}
function y() {
  let e = O();
  return L(e) && zgt() ? e : void 0;
}
function z5e() {
  let e = y();
  if (e === void 0) return;
  let n = z$t();
  return K$t(e.kind === "pct_off" ? n.menuSuffixPctOff : n.menuSuffixExtraCredit, {
    pct: e.headlinePct,
    daysLeft: e.daysLeft
  });
}
function _to() {
  let e = y();
  if (e === void 0) return;
  let n = z$t();
  return K$t(e.kind === "pct_off" ? n.hintPctOff : n.hintExtraCredit, {
    pct: e.headlinePct,
    daysLeft: e.daysLeft
  });
}
function re() {
  let e = y();
  if (e === void 0) return;
  let n = z$t();
  return K$t(e.kind === "pct_off" ? n.bannerPillPctOff : n.bannerPillExtraCredit, {
    pct: e.headlinePct,
    daysLeft: e.daysLeft
  });
}
function bto() {
  let e = y(),
    n = re();
  if (e === void 0 || n === void 0) return;
  return { kind: e.kind, headlinePct: e.headlinePct, daysLeft: e.daysLeft, label: n };
}
function K5e() {
  let e = O();
  if (e === void 0 || e === null) return {};
  let n = e.eventProps;
  return {
    offer_eligible: n?.offerEligible ?? e.eligible,
    offer_reason: ce(n?.offerReason ?? e.ineligibleReason) ?? void 0,
    offer_arm: _e(n?.offerArm ?? e.armId),
    offer_kind: ce(n?.offerKind ?? e.kind) ?? void 0,
    offer_menu: ce(n?.offerMenu ?? e.menu) ?? void 0,
    offer_segment: ce(n?.offerSegment ?? e.segment) ?? void 0,
    offer_days_left: n?.offerDaysLeft ?? e.daysLeft ?? void 0,
    offer_active: e.active,
    offer_redeemed: e.redeemed,
    offer_surface: ce(n?.offerSurface) ?? void 0
  };
}
function tus(e, n) {
  let r = E(e);
  if (!zgt() || !yae() || r === null) return;
  k(r, "cli_menu", n);
}
function nus(e) {
  if (!zgt() || !yae()) return;
  k(ne, "cli_credits_required", e);
}
function rus(e) {
  let n = E(e);
  if (!zgt() || !Qm() || !te() || n === null) return;
  k(n, "ide_banner", void 0);
}
function Sto(e, n) {
  let r = E(e);
  if (!zgt() || !yae() || r === null) return !1;
  let i = QFe();
  if (i.phase === "failed" && R(i.wall, j(r)) && i.failures < D) return (k(r, "cli_menu", n), !0);
  return !1;
}
function k(e, n, r, i = Date.now()) {
  let s = j(e),
    d = h(),
    f = d.state,
    m = 0;
  if (f.phase !== "idle" && R(f.wall, s))
    switch (f.phase) {
      case "answered":
        if (i - f.answeredAt < ee) return Promise.resolve();
        break;
      case "asking":
        return d.pendingAsk ?? Promise.resolve();
      case "failed":
        if (f.failures >= D) return Promise.resolve();
        m = f.failures;
    }
  else if (f.phase === "asking") {
    if (f.wall.accountEpoch === s.accountEpoch) return d.pendingAsk ?? Promise.resolve();
  }
  g({ phase: "asking", wall: s, standing: O() });
  let b = Pe(P(r, n), J)
    .then((C) => {
      I({ wall: s, surface: n, failures: m, result: C ?? { kind: "failed" } });
    })
    .catch((C) => {
      l(N(C));
      try {
        I({ wall: s, surface: n, failures: m, result: { kind: "failed" } });
      } catch (F) {
        l(N(F));
      }
    })
    .finally(() => {
      if (d.pendingAsk === b) d.pendingAsk = null;
    });
  return ((d.pendingAsk = b), b);
}
function I({ wall: e, surface: n, failures: r, result: i }) {
  let s = QFe();
  if (s.phase !== "asking" || !R(s.wall, e)) return;
  let d = i.kind === "answered" ? i.status : null;
  if (i.kind === "failed") {
    let f = s.standing;
    if (f !== void 0) g({ phase: "answered", wall: e, status: f, answeredAt: Date.now() });
    else g({ phase: "failed", wall: e, failures: r + 1 });
  } else g({ phase: "answered", wall: e, status: d, answeredAt: Date.now() });
  if (
    (a("tengu_starry_waterfall_asked", {
      outcome: c(
        i.kind === "answered"
          ? d === null
            ? i.notAuthorized
              ? "not_authorized"
              : "absent"
            : "block"
          : i.kind
      ),
      attempt: r + 1,
      surface: c(n),
      eligible: d?.eligible ?? !1,
      ineligible_reason: ce(d?.ineligibleReason) ?? void 0,
      config_version: DHr()
    }),
    d === null || !d.eligible)
  )
    return;
  a("tengu_starry_waterfall_wall", {
    ...K5e(),
    surface: c(n),
    tier: c(uve()),
    config_version: DHr()
  });
}
function Fie(e, n = {}) {
  let r = h(),
    i = r.state,
    d = `${i.phase === "idle" ? "none" : i.wall.key}:${e}`;
  if (r.shown.has(d)) return;
  (r.shown.add(d),
    a("tengu_starry_waterfall_shown", { ...K5e(), ...n, surface: c(e), config_version: DHr() }));
}
function wto({ usedOffer: e }) {
  let n = QFe(),
    r = (i) => (e && i.active ? { ...i, active: !1, redeemed: !0 } : i);
  if (n.phase === "answered" && n.status !== null) g({ ...n, answeredAt: 0, status: r(n.status) });
  else if (n.phase === "asking" && n.standing) g({ ...n, standing: r(n.standing) });
}
var ae = "cedar_ember",
  ie = 25000,
  x = /^[a-z0-9_-]{1,40}$/,
  le = /^[A-Za-z0-9_-]{1,64}$/,
  Ypr = [
    "five_hour",
    "seven_day",
    "seven_day_overage_included",
    "seven_day_opus",
    "seven_day_sonnet",
    "seven_day_cowork",
    "seven_day_omelette",
    "seven_day_oauth_apps"
  ],
  K = [
    "config_off",
    "tier",
    "seat",
    "mobile",
    "surface",
    "cli_version",
    "no_grant",
    "tenure",
    "other_experiment",
    "unavailable",
    "unknown"
  ],
  se = [
    "cooldown",
    "blocked_five_hour",
    "blocked_seven_day",
    "blocked_opus",
    "blocked_sonnet",
    "blocked_other",
    "cannot_clear",
    "needs_limit",
    "unavailable"
  ],
  de = [
    ...K,
    "paused",
    "expired",
    "unknown_grant",
    "not_next_grant",
    "grant_id_required",
    "not_limited",
    "already_used",
    "cooldown",
    "stamp_indeterminate",
    "reset_unconfirmed"
  ],
  fe = p(() =>
    u({
      surface: B(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
      tier: B(["claude_pro", "claude_max_5x", "claude_max_20x", "claude_team", "unknown"]).catch(
        "unknown"
      ),
      tenure_bucket: B(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch(
        "unknown"
      ),
      billing_path: B(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
      billing_period: B(["monthly", "annual", "unknown"]).catch("unknown"),
      extra_usage_state: B(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown")
    })
  ),
  S = p(() =>
    T(oe())
      .catch([])
      .transform((e) => e.filter((n) => Ypr.some((r) => r === n)))
  ),
  pe = p(() =>
    u({
      id: o().regex(x),
      label: o().catch(""),
      resets_total: v().int().min(0).catch(0),
      resets_left: v().int().min(0),
      starts_at: o().nullable().optional().catch(null),
      ends_at: o().nullable().optional().catch(null),
      clears: S(),
      paused: M().catch(!1),
      usable_now: M().catch(!1),
      use_requires_limit: M().catch(!0),
      percent_used: me(o(), oe()).catch({}),
      blocking: S(),
      type: B(["session", "weekly", "full"])
        .optional()
        .catch(void 0),
      gives_back_weekly: M().catch(!1),
      unavailable_reason: B(se).nullable().optional().catch(null)
    })
  );
function ge(e) {
  let n = {};
  for (let r of Ypr) {
    let i = e[r];
    if (typeof i === "number" && Number.isInteger(i) && i >= 0 && i <= 100) n[r] = i;
  }
  return n;
}
var be = p(() =>
    u({
      eligible: M(),
      ineligible_reason: B(K).catch("unknown").nullable().optional(),
      at_limit: M()
        .optional()
        .catch(void 0),
      exhausted: S().optional(),
      grants: T(oe())
        .optional()
        .catch(void 0),
      next_grant_id: o().regex(x).nullable().optional().catch(null),
      weekly_resets_at: o().nullable().optional().catch(null),
      cooldown_until: o().nullable().optional().catch(null),
      event_props: fe().nullable().optional().catch(null)
    })
  ),
  he = p(() =>
    u({
      result: B([
        "reset",
        "already_used",
        "not_limited",
        "cooldown",
        "ineligible",
        "unavailable"
      ]).catch("unavailable"),
      reason: B(de).catch("unknown").nullable().optional(),
      resets_left: v().int().min(0).nullable().optional().catch(null),
      cleared: S().optional(),
      weekly_resets_at: o().nullable().optional().catch(null),
      cooldown_until: o().nullable().optional().catch(null)
    })
  );
function Ce(e) {
  let n = pe().safeParse(e);
  if (!n.success) return (t(`[cedar-ember] ignoring a malformed grant: ${n.error.message}`), null);
  let r = n.data;
  return {
    id: r.id,
    label: r.label,
    resetsTotal: r.resets_total,
    resetsLeft: r.resets_left,
    startsAt: r.starts_at ?? null,
    endsAt: r.ends_at ?? null,
    clears: r.clears,
    paused: r.paused,
    usableNow: r.usable_now,
    useRequiresLimit: r.use_requires_limit,
    percentUsed: ge(r.percent_used),
    blocking: r.blocking,
    type: r.type ?? null,
    givesBackWeekly: r.gives_back_weekly,
    unavailableReason: r.unavailable_reason ?? null
  };
}
function ye(e) {
  if (e === void 0 || e === null) return null;
  let n = be().safeParse(e);
  if (!n.success)
    return (t(`[cedar-ember] ignoring a malformed status block: ${n.error.message}`), null);
  let r = n.data,
    i = (r.grants ?? []).map(Ce).filter((f) => f !== null),
    s =
      r.next_grant_id !== void 0 &&
      r.next_grant_id !== null &&
      i.some((f) => f.id === r.next_grant_id)
        ? r.next_grant_id
        : null,
    d = r.event_props;
  return {
    eligible: r.eligible,
    ineligibleReason: r.ineligible_reason ?? null,
    atLimit: r.at_limit ?? !1,
    exhausted: r.exhausted ?? [],
    grants: i,
    nextGrantId: s,
    weeklyResetsAt: r.weekly_resets_at ?? null,
    cooldownUntil: r.cooldown_until ?? null,
    eventProps: d
      ? {
          surface: d.surface,
          tier: d.tier,
          tenureBucket: d.tenure_bucket,
          billingPath: d.billing_path,
          billingPeriod: d.billing_period,
          extraUsageState: d.extra_usage_state
        }
      : null
  };
}
function Xpr(e, n) {
  if (e === void 0 || e === null || !e.eligible) return;
  let r = e.grants
    .filter((i) => i.resetsLeft > 0 && !i.paused)
    .map((i) => _xt(i.endsAt) ?? 1 / 0)
    .filter((i) => i > n);
  return r.length === 0 ? void 0 : Math.max(...r);
}
async function cPn(e, { read: n = "at_wall", surface: r } = {}) {
  try {
    if (!kf()) return { kind: "no_profile_scope" };
    let i = await _O(e, n === "at_wall" ? { read: n, surface: r } : { read: n });
    if (!KWe(i))
      return (
        t("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", {
          level: "warn"
        }),
        { kind: "failed" }
      );
    return { kind: "answered", status: ye(i?.cedar_ember) };
  } catch (i) {
    if ((t(`[cedar-ember] status fetch failed: ${N(i).message}`, { level: "warn" }), G$t(i)))
      return { kind: "not_authorized" };
    return { kind: "failed" };
  }
}
var _ = { reason: null, resetsLeft: null, cleared: [], weeklyResetsAt: null };
async function gto(e, n, r) {
  let i = gn()?.organizationUuid;
  if (!i)
    return (t("[cedar-ember] no OAuth organization; cannot claim"), { result: "auth_error", ..._ });
  if (!x.test(n) || !le.test(r))
    return (
      l(Error("[cedar-ember] refusing to claim with a malformed grant or request id")),
      { result: "error", ..._ }
    );
  try {
    let s = await Sv(
      () =>
        jt.post(
          `/api/organizations/${i}/reset_rate_limits`,
          { program: ae, grant_id: n, request_id: r },
          {
            auth: "async",
            headers: { "Content-Type": "application/json" },
            timeout: ie,
            refreshOAuth: !0,
            credentials: e
          }
        ),
      { credentials: e }
    );
    if (!s.ok)
      return (
        t(`[cedar-ember] claim not sent: ${s.reason === "no-auth" ? s.detail : s.reason}`, {
          level: "warn"
        }),
        { result: s.reason === "no-auth" ? "auth_error" : "error", ..._ }
      );
    let d = he().safeParse(s.data);
    if (!d.success)
      return (
        t(`[cedar-ember] unreadable claim response: ${d.error.message}`, { level: "error" }),
        l(Error("[cedar-ember] unreadable claim response")),
        { result: "error", ..._ }
      );
    return {
      result: d.data.result,
      reason: d.data.reason ?? null,
      resetsLeft: d.data.resets_left ?? null,
      cleared: d.data.cleared ?? [],
      weeklyResetsAt: d.data.weekly_resets_at ?? null
    };
  } catch (s) {
    if (Pp(s)) t(`[cedar-ember] claim failed: ${N(s).message}`, { level: "warn" });
    else l(N(s));
    if (Yd(s))
      switch (s.response?.status) {
        case 429:
          return { result: "rate_limited", ..._ };
        case 401:
        case 403:
          return { result: "auth_error", ..._ };
        default:
          break;
      }
    return { result: "error", ..._ };
  }
}
function _xt(e) {
  if (e === null) return;
  let n = Date.parse(e);
  return Number.isFinite(n) ? n : void 0;
}
function ke() {
  return {
    state: { phase: "idle" },
    shownOfferKey: null,
    wallRecordKey: null,
    pendingAsk: null,
    pendingUnusedResetRead: null,
    unusedResetAnsweredFor: null,
    unusedResetDrops: 0,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimGrantId: null,
    unsettledClaimEpoch: null,
    unsettledClaimRequestId: null,
    unsettledClaimAtMs: null,
    wallSurface: null,
    sessionSwitchSubscribed: !1,
    changed: De(),
    events: De()
  };
}
var Se = new W(ke);
function AW() {
  return Se.of(U().host);
}
function I6() {
  return AW().state;
}
function bxt(e) {
  let n = AW();
  ((n.state = e), n.changed.emit());
}
function O6(e) {
  return AW().changed.subscribe(e);
}
function hto(e) {
  return AW().events.subscribe(e);
}
var H = 259200000,
  we = 12000,
  Ee = p(() =>
    u({ accountUuid: o().min(1), holdsUnusedReset: M(), checkedAt: v(), validUntil: v() })
  );
function Zcs(e = Date.now()) {
  try {
    let n = gn()?.accountUuid,
      r = Ee().safeParse(ue().unusedLimitResetStatusCache).data;
    return (
      Uu() === "cli" &&
      !!n &&
      r?.accountUuid === n &&
      r.holdsUnusedReset &&
      r.checkedAt <= e &&
      e - r.checkedAt < H &&
      e < r.validUntil &&
      ua().source === "claude.ai" &&
      _ae()
    );
  } catch (n) {
    return (l(N(n)), !1);
  }
}
function eus(e, n) {
  let r = AW();
  return (
    (r.pendingUnusedResetRead ??= Oe(e, n)
      .catch((i) => l(N(i)))
      .finally(() => {
        r.pendingUnusedResetRead = null;
      })),
    r.pendingUnusedResetRead
  );
}
function yto() {
  let e = AW();
  ((e.unusedResetAnsweredFor = null),
    e.unusedResetDrops++,
    Re((n) =>
      n.unusedLimitResetStatusCache === void 0 ? n : { ...n, unusedLimitResetStatusCache: void 0 }
    ));
}
async function Oe(e, n) {
  let r = AW(),
    i = gn()?.accountUuid;
  if (!i) return;
  let s = `${Lm()}:${i}`;
  if (
    r.unusedResetAnsweredFor === s ||
    Uu() !== "cli" ||
    ua().source !== "claude.ai" ||
    !yae() ||
    !_ae()
  )
    return;
  let d = r.unusedResetDrops,
    f = await Pe(cPn(e, { read: "cedar_ember" }), we);
  if (gn()?.accountUuid !== i || r.unusedResetDrops !== d || ua().source !== "claude.ai" || !_ae())
    return;
  switch (f?.kind) {
    case "not_authorized":
    case "no_profile_scope":
      r.unusedResetAnsweredFor = s;
      return;
    case "answered":
      break;
    case "failed":
    case void 0:
      return;
  }
  if (f.status?.ineligibleReason === "unavailable") return;
  r.unusedResetAnsweredFor = s;
  let m = Date.now(),
    b = Xpr(f.status, m);
  await Re(
    (C) => ({
      ...C,
      unusedLimitResetStatusCache: {
        accountUuid: i,
        holdsUnusedReset: b !== void 0,
        checkedAt: m,
        validUntil: Math.min(m + H, b ?? 1 / 0)
      }
    }),
    n
  );
}
var V5e = "tengu_wise_bear_copy";
function ous(e) {
  switch (e) {
    case "five_hour":
      return "session";
    case "seven_day":
      return "weekly";
    case "seven_day_opus":
    case "seven_day_sonnet":
    case "seven_day_overage_included":
      return "model";
    default:
      return;
  }
}
function vto(e) {
  return typeof e === "object" && e !== null && Reflect.get(e, "only_if_unused_reset") === !0;
}
function sus(e, n, r, i) {
  if (typeof e !== "object" || e === null) return;
  if (vto(e) && i !== !0) return;
  let s = Reflect.get(e, `note_${n}`);
  if (typeof s !== "string") return;
  let d = r(s);
  return d && !(d.endsWith("\u2026") && !s.trimEnd().endsWith("\u2026")) ? d : void 0;
}
export {
  Ypr,
  Xpr,
  cPn,
  gto,
  _xt,
  AW,
  I6,
  bxt,
  O6,
  hto,
  Zcs,
  eus,
  yto,
  QFe,
  Fee,
  z5e,
  _to,
  bto,
  K5e,
  tus,
  nus,
  rus,
  Sto,
  Fie,
  wto,
  V5e,
  ous,
  vto,
  sus
};

//# sourceMappingURL=chunk-xp7js3cq.js.map
