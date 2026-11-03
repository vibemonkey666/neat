// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
function t() {
  return process.argv.includes("--agent-teams");
}
function _s() {
  if (!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return !1;
  if (!k("tengu_amber_flint", !0)) return !1;
  return !0;
}
async function ZPo() {
  if (!_s()) return;
  let { captureTeammateModeSnapshot: e } = await import("./chunk-b5bvxnk8.js");
  e();
}
export { _s, ZPo };

//# sourceMappingURL=chunk-hk4fpv24.js.map
