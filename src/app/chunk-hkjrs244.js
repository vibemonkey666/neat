// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bg } from "./chunk-6bbdndfe.js";
import { randomUUID as s } from "crypto";
var Tvs = (e, t) => ({
  type: "system",
  subtype: "informational",
  content: `Started in the background: ${t}`,
  isMeta: !1,
  timestamp: new Date().toISOString(),
  uuid: s(),
  level: "info",
  launchedAgentId: e
});
function Avs(e) {
  let n = e.type === "system" && e.subtype === "informational" ? e.launchedAgentId : void 0;
  return n !== void 0 && bg(n) !== null ? n : void 0;
}
export { Tvs, Avs };

//# sourceMappingURL=chunk-hkjrs244.js.map
