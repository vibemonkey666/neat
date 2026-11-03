// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, ly } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { f } from "./chunk-brszmkb3.js";
import { Qmn, Kre, Zmn } from "./chunk-2a5hfwr3.js";
function eao(s, i, l) {
  let e = Qmn(s),
    n = e !== null ? Zmn() : null,
    r = n?.code === "hooks_held" ? null : n;
  if (r !== null) f("goal_set", r.code, { origin: c("restored") });
  let t;
  if (e === null || r !== null) {
    if (
      (i((o) => ((t = o.activeGoal), o.activeGoal === void 0 ? o : { ...o, activeGoal: void 0 })),
      t !== void 0)
    )
      Kre(t, "resume_swap");
    return;
  }
  if (
    (l.add(q(), "Stop", "", { type: "prompt", prompt: e }),
    i(
      (o) => (
        (t = o.activeGoal),
        {
          ...o,
          activeGoal: {
            condition: e,
            iterations: 0,
            setAt: Date.now(),
            origin: "restored",
            tokensAtStart: ly()
          }
        }
      )
    ),
    t !== void 0)
  )
    Kre(t, "resume_swap");
  (a("tengu_goal_restored_on_resume", { promptLength: e.length }),
    a("tengu_stop_hook_added", { promptLength: e.length, via: b("goal"), origin: c("restored") }));
}
export { eao };

//# sourceMappingURL=chunk-aeb0nxxy.js.map
