// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { oc } from "./chunk-vchq4g74.js";
function tAs(t) {
  if (oc()) return;
  return t.standaloneAgentContext?.name;
}
function S8e(t, n) {
  let e = t.standaloneAgentContext;
  if (!Object.keys(n).some((o) => e?.[o] !== n[o])) return t;
  return { ...t, standaloneAgentContext: { ...e, name: e?.name ?? "", ...n } };
}
export { tAs, S8e };

//# sourceMappingURL=chunk-68w4m6yn.js.map
