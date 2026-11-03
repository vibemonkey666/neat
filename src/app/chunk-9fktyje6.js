// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { Gc, Pn } from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
function Pa() {
  if (!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return !1;
  if (Gc() && !Pn() && !i.CLAUDE_CODE_REMOTE) return !1;
  return !0;
}
function Hce(e) {
  return Pa() && e.agentId === void 0;
}
export { Pa, Hce };

//# sourceMappingURL=chunk-9fktyje6.js.map
