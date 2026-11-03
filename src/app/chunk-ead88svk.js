// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { TMt } from "./chunk-25j20xpc.js";
import { gO } from "./chunk-j0tbz6ra.js";
import { BQe, Ei } from "./chunk-6h7ejyet.js";
import { iJ, u4, qmo, Ymo, SMt } from "./chunk-rjdks4dd.js";
function PPt() {
  return TMt() || BQe("auto_mode_off") || SMt() || BQe("unattended_serving_off");
}
function IPt(n) {
  try {
    if (TMt()) return gO() === "settings" ? "settings" : "breaker";
    if (BQe("auto_mode_off")) return "settings";
    let e = BQe("unattended_serving_off");
    if (!SMt(n) && !e) return "none";
    if (u4() || e) return "consent_forced_off";
    let t = iJ();
    if (t === "declined") return "consent_declined";
    if (t === "accepted" || qmo()) return "consent_unknown";
    return Ymo() ? "sandbox_off" : "consent_unset";
  } catch {
    return "consent_unknown";
  }
}
function uoo(n) {
  let e = IPt();
  if (e === "none") return;
  return {
    key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`,
    text: Ei.auto_off_notice(n, Ei[`auto_off.reason.${e}`])
  };
}
export { PPt, IPt, uoo };

//# sourceMappingURL=chunk-ead88svk.js.map
