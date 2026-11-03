// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { joe } from "./chunk-at88wjsn.js";
import { XF } from "./chunk-zg0g4fdz.js";
function PIe(e, o) {
  if (joe(e)) return;
  return {
    uuid: typeof e.source_uuid === "string" && e.source_uuid ? e.source_uuid : o,
    content: e.prompt,
    isMeta: Boolean(e.isMeta),
    origin: XF(e.origin, e.commandMode, e.runId)
  };
}
export { PIe };

//# sourceMappingURL=chunk-6ctzjrkt.js.map
