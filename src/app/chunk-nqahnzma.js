// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i1e, Wae, hJ } from "./chunk-syntvyhn.js";
function DC(o, e) {
  let n = { name: e.client.name, config: o };
  return {
    ...e,
    client: Wae(e.client, o),
    ...(e.tools !== void 0 && { tools: hJ(n, e.tools) }),
    ...(e.commands !== void 0 && { commands: i1e(n, e.commands) })
  };
}
export { DC };

//# sourceMappingURL=chunk-nqahnzma.js.map
