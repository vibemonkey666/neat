// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ye } from "./chunk-wrtp8qz8.js";
import { Pe } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { Uy } from "./chunk-4nzy53ma.js";
var F1 = 1500,
  uLo = 3000;
function tre() {
  return i.CLAUDE_CODE_REMOTE && ye();
}
function Bdn() {
  return tre() && Uy();
}
function $zs({ eventLoggingEnabled: e, growthBookEnabled: n, cacheEmpty: o, relaunches: r }) {
  let t = e && o ? F1 : 0,
    a = n && r ? (i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? uLo) : 0,
    s = Math.max(t, a);
  return s > 0 ? s : void 0;
}
function Fzs({
  site: e,
  nonInteractive: n,
  budgetMs: o,
  settingsEnvPending: r,
  cacheEmpty: t,
  warmCacheKick: a
}) {
  if (!n || o === void 0) return "not_eligible";
  if (!t && !a) return "not_asked_warm";
  if (r) return t ? "settings_pending_empty" : "settings_pending_warm";
  if (e === "init") return t ? "started_in_init_empty" : "started_in_init_warm";
  return t ? "started_after_init_empty" : "started_after_init_warm";
}
function Uzs(e) {
  switch (e) {
    case "started_in_init_empty":
    case "started_in_init_warm":
    case "started_after_init_empty":
    case "started_after_init_warm":
      return !0;
    case "not_asked_warm":
    case "settings_pending_empty":
    case "settings_pending_warm":
    case "launch_excluded":
    case "not_eligible":
      return !1;
  }
}
function Bzs({
  nonInteractive: e,
  budgetMs: n,
  settingsEnvPending: o,
  cacheEmpty: r,
  relaunches: t,
  autoModeKillSwitchOnDisk: a,
  warmWakeEarlyFetch: s
}) {
  if (n === void 0) return;
  if (e && !o && (r || (t && (a || !s)))) return "gb-before-mode";
  return t ? "gb-before-context" : "gb-before-tools";
}
async function zGe({ initialize: e, budgetMs: n }) {
  let o = performance.now(),
    r = await Pe(
      e().then(
        () => !0,
        () => !0
      ),
      n
    );
  return { waitMs: performance.now() - o, timedOut: r === void 0 };
}
export { F1, uLo, tre, Bdn, $zs, Fzs, Uzs, Bzs, zGe };

//# sourceMappingURL=chunk-eq25erm1.js.map
