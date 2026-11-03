// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { mXr } from "./chunk-wrtp8qz8.js";
var WL = {
    red: "red_FOR_SUBAGENTS_ONLY",
    blue: "blue_FOR_SUBAGENTS_ONLY",
    green: "green_FOR_SUBAGENTS_ONLY",
    yellow: "yellow_FOR_SUBAGENTS_ONLY",
    purple: "purple_FOR_SUBAGENTS_ONLY",
    orange: "orange_FOR_SUBAGENTS_ONLY",
    pink: "pink_FOR_SUBAGENTS_ONLY",
    cyan: "cyan_FOR_SUBAGENTS_ONLY"
  },
  Yb = Object.keys(WL);
function XK(e) {
  return e !== void 0 && Yb.includes(e);
}
function pze(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function mze(e) {
  if (e === "general-purpose") return;
  let n = mXr().get(e);
  if (n && Yb.includes(n)) return WL[n];
  return;
}
function t_t(e, o) {
  let n = mXr();
  if (!o) {
    n.delete(e);
    return;
  }
  if (Yb.includes(o)) n.set(e, o);
}
export { WL, Yb, XK, pze, mze, t_t };

//# sourceMappingURL=chunk-xq3dwnzp.js.map
