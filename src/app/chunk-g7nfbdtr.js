// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Be } from "./chunk-at88wjsn.js";
import { BK, a8, YWs, XWs, JWs } from "./chunk-6h7ejyet.js";
function dDn(o, r = o) {
  let m = BK() && r.some((e) => e.mcpInfo?.serverName === a8 && e.mcpInfo.toolName === Be);
  return JWs(XWs(o)).filter(
    (e) => !m || e.mcpInfo?.serverName !== a8 || e.mcpInfo.toolName !== YWs
  );
}
export { dDn };

//# sourceMappingURL=chunk-g7nfbdtr.js.map
