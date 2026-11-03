// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { kn, k } from "./chunk-ajtyjx88.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { vf } from "./chunk-6z6dbjsw.js";
function ha(e = "send") {
  if (e === "send" && vf().messagingBeyondOwnAgentsDisabled) return !1;
  let r = i.CLAUDE_CODE_HARBOR_KITE;
  if (r !== void 0) return Ne(r);
  if (O() === "windows" && !k("tengu_harbor_kite_win", !0)) return !1;
  return k("tengu_harbor_kite", !0);
}
function xre(e) {
  if (e?.flagsSettled === !1 && kn("tengu_cuddly_willow", !0).source === "fallback") return !1;
  return k("tengu_cuddly_willow", !0);
}
var tpn = "Cross-session messaging is not available in this session.";
export { ha, xre, tpn };

//# sourceMappingURL=chunk-cqrqqt4t.js.map
