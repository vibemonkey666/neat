// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ae } from "./chunk-ar6ynjt8.js";
import { qJ, xDr, sxo, EWe } from "./chunk-j0tbz6ra.js";
import { za, ORe } from "./chunk-j4601ec1.js";
function fae() {
  return EWe() || qJ(za, ORe());
}
function _do() {
  if (!fae()) return null;
  if (sxo() && !qJ(za, ORe())) return xDr;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function sHn(r) {
  let { mode: e, isBypassPermissionsModeAvailable: o } = ae(r);
  return e === "bypassPermissions" || (e === "plan" && o);
}
export { fae, _do, sHn };

//# sourceMappingURL=chunk-jjh6n918.js.map
