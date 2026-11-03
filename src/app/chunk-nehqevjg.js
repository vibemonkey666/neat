// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, jYt } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { i } from "./chunk-cj37hmns.js";
import { nde, ad, Rl, lo, Wa } from "./chunk-fnsjs1v2.js";
import { a } from "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { Ut, X_e } from "./chunk-ajtyjx88.js";
import { Xn } from "./chunk-j0tbz6ra.js";
import { VHn } from "./chunk-yfha6bzq.js";
import { _e } from "./chunk-n8wdmnah.js";
function p() {
  return i.CLAUDE_JOB_DIR;
}
async function KHn(n, e, s) {
  (a("tengu_bg_agent_action", { action: b("stop"), source: c(n), jobSessionId: _e(q()) }),
    jYt(void 0));
  let o = p();
  if (Ut() && o) {
    let r = new Date().toISOString(),
      t = await lo(o, e);
    if (t && !Wa(t))
      await ad(
        o,
        {
          ...t,
          state: "stopped",
          detail: "stopped from session",
          tempo: "idle",
          needs: void 0,
          block: void 0,
          inFlight: void 0,
          updatedAt: r,
          firstTerminalAt: t.firstTerminalAt ?? r
        },
        e
      ).catch(Rl);
    else await VHn(o, e);
    if (X_e()) process.stdout.write(nde(s ?? "Session stopped."));
  }
  return (g("job_stop_self"), Xn(0, "prompt_input_exit", { suppressResumeHint: !0 }));
}
export { KHn };

//# sourceMappingURL=chunk-nehqevjg.js.map
