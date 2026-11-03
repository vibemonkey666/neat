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
import { ui } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { Y } from "./chunk-arw2bgak.js";
import { pt, Un, $qe } from "./chunk-7c3thgax.js";
import { Et, jt, uRe, ue } from "./chunk-ajtyjx88.js";
import { Ps } from "./chunk-5b88xb0z.js";
import { o, v, M, T, u } from "./chunk-0bqrj5ah.js";
var P = p(() => {
  let e = u({ enable_email: M().nullish(), enable_push: M().nullish() }),
    t = u({ bogosort: e.nullish(), code_requires_action: e.nullish() }),
    r = u({
      has_active_channel: M(),
      platforms: T(o())
        .nullish()
        .transform((n) => n ?? []),
      most_recent_token_refresh: o().nullish()
    });
  return u({
    account_id: v().nullish(),
    organization_id: v().nullish(),
    preferences: u({ feature_preference: t.nullish() }).nullish(),
    push_reachability: r.nullish()
  });
});
var y = 1e4,
  E = new W(() => ({ reachability: Ps(void 0), hydrated: De() }));
function i() {
  return E.of(U().host);
}
function ONn() {
  return i().reachability.getState();
}
function MNn(e) {
  return i().reachability.subscribe(e);
}
function qks(e) {
  return i().hydrated.subscribe(e);
}
function N() {
  let e = pt(),
    t = ue();
  return {
    agentPushNotifEnabled:
      e.agentPushNotifEnabled ?? uRe("agentPushNotifEnabled", t.agentPushNotifEnabled),
    inputNeededNotifEnabled:
      e.inputNeededNotifEnabled ?? uRe("inputNeededNotifEnabled", t.inputNeededNotifEnabled)
  };
}
var S = "/api/claude_code/notification/preferences";
function d() {
  return Et();
}
async function k() {
  if (!d()) return { ok: !1, reason: "no_auth" };
  try {
    let e = await jt.get(S, { timeout: y });
    if (!e.ok) return { ok: !1, reason: "fetch_failed" };
    let t = P().safeParse(e.data);
    if (!t.success)
      return (
        Y("warn", "notif_prefs_fetch_parse_failed", {
          issues: t.error.issues.map((r) => r.path.join(".")).join(",")
        }),
        { ok: !1, reason: "parse_failed" }
      );
    return { ok: !0, prefs: t.data };
  } catch (e) {
    let { kind: t } = ui(e);
    return (Y("warn", "notif_prefs_fetch_failed", { kind: t }), { ok: !1, reason: "fetch_failed" });
  }
}
async function R(e) {
  if (!d()) return;
  try {
    if (!(await jt.patch(S, e, { timeout: y })).ok) {
      f("notif_prefs_patch", "no_auth");
      return;
    }
    (Y("info", "notif_prefs_patch_ok", {}), g("notif_prefs_patch"));
  } catch (t) {
    let { kind: r } = ui(t);
    (Y("warn", "notif_prefs_patch_failed", { kind: r }), m("notif_prefs_patch", "http_error"));
  }
}
function Gmo() {
  $qe()
    .then(() => {
      let e = N(),
        t = {};
      if (typeof e.agentPushNotifEnabled === "boolean")
        t.bogosort = { enable_push: e.agentPushNotifEnabled };
      if (typeof e.inputNeededNotifEnabled === "boolean")
        t.code_requires_action = { enable_push: e.inputNeededNotifEnabled };
      if (Object.keys(t).length === 0) return;
      return R({ preferences: { feature_preference: t } });
    })
    .catch(l);
}
async function Yks(e) {
  if (!d()) {
    (f("notif_prefs_hydrate", "no_auth"),
      i().reachability.setState(() => null),
      Y("info", "notif_prefs_hydrate_skipped", { reason: "no_auth" }));
    return;
  }
  let t = await k();
  if (!t.ok) {
    (m("notif_prefs_hydrate", t.reason),
      i().reachability.setState(() => null),
      Y("info", "notif_prefs_hydrate_skipped", { reason: t.reason }));
    return;
  }
  let r = t.prefs,
    n = r.push_reachability ?? null;
  if ((i().reachability.setState(() => n), n))
    a("tengu_push_reachability", {
      has_active_channel: n.has_active_channel,
      platform_count: n.platforms.length
    });
  let _ = r.preferences?.feature_preference,
    c = _?.bogosort?.enable_push,
    h = _?.code_requires_action?.enable_push,
    b = N(),
    s = {};
  if (b.agentPushNotifEnabled === void 0 && typeof c === "boolean") s.agentPushNotifEnabled = c;
  if (b.inputNeededNotifEnabled === void 0 && typeof h === "boolean") s.inputNeededNotifEnabled = h;
  if (
    (Y("info", "notif_prefs_hydrate_result", {
      has_active_channel: n?.has_active_channel,
      server_bogosort: c,
      server_code_requires_action: h,
      seeded: Object.keys(s).length > 0
    }),
    Object.keys(s).length === 0)
  ) {
    g("notif_prefs_hydrate");
    return;
  }
  (await Un("userSettings", s, void 0, e), i().hydrated.emit(), g("notif_prefs_hydrate"));
}
export { ONn, MNn, qks, Gmo, Yks };

//# sourceMappingURL=chunk-z7t7hcja.js.map
