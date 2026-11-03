// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { sq } from "./chunk-63a6mqbs.js";
import { sve } from "./chunk-1fvxca21.js";
import { Dl } from "./chunk-j0tbz6ra.js";
function jIt(e, o, r) {
  if (Dl(e.decisionReason, sq) !== void 0 || sve(r)) return !0;
  if (o.requiresUserInteraction?.()) return !0;
  return e.forcedByCaller === !0 || e.personOnly === !0;
}
export { jIt };

//# sourceMappingURL=chunk-gawb97wc.js.map
