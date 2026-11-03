// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { _L } from "./chunk-25j20xpc.js";
import { ob, gO } from "./chunk-j0tbz6ra.js";
import { XT } from "./chunk-2mkstff3.js";
function J2(e) {
  let o = ob(),
    s = !!e.isAutoModeAvailable && o;
  if (!s)
    t(
      `[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${gO()}`
    );
  return s;
}
function PJt(e) {
  return !!e.isBypassPermissionsModeAvailable && !XT();
}
function IJt(e, o) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (PJt(e)) return "bypassPermissions";
      if (J2(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (J2(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function bco(e, o, s) {
  let n = IJt(e, o);
  return { nextMode: n, context: _L(e.mode, n, e, s) };
}
export { J2, PJt, IJt, bco };

//# sourceMappingURL=chunk-20f936eh.js.map
