// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k, Re, ue } from "./chunk-ajtyjx88.js";
import { b, ce } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { fh } from "./chunk-63a6mqbs.js";
import { pe, Un } from "./chunk-7c3thgax.js";
import { J2 } from "./chunk-20f936eh.js";
function mZr(u, { requireOnboarding: n = !0 } = {}) {
  let o = ue();
  if ((n && !o.hasCompletedOnboarding) || o.hasSeenAutoDefaultNudge || !k("tengu_maple_pier", !0))
    return null;
  let e = pe("userSettings")?.permissions?.defaultMode,
    t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some(
      (r) => pe(r)?.permissions?.defaultMode
    );
  if (e && e !== "auto" && !t && J2(u)) return e;
  return null;
}
function gZr(u, n, o) {
  if (ue().hasSeenAutoDefaultNudge) return;
  let e = fh(n.current_mode);
  if (u === "shown") {
    a("tengu_auto_default_nudge_shown", { current_mode: ce(e), surface: b("ide") });
    return;
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") Un("userSettings", { permissions: { defaultMode: "auto" } }, void 0, o);
  (Re((r) => (r.hasSeenAutoDefaultNudge ? r : { ...r, hasSeenAutoDefaultNudge: !0 }), o),
    a("tengu_auto_default_nudge_resolved", {
      choice: b(t),
      outcome: t === "accept" ? b("switched") : b("declined"),
      current_mode: ce(e),
      surface: b("ide")
    }));
}
export { mZr, gZr };

//# sourceMappingURL=chunk-ffq9306v.js.map
