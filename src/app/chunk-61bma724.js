// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
async function oUn(e, i, n) {
  if (i === null || e.behavior === "deny") return e;
  return e.behavior === "ask"
    ? { ...e, matchedAskRule: e.matchedAskRule ?? i }
    : {
        behavior: "ask",
        message: await n(),
        decisionReason: { type: "rule", rule: i },
        ...("updatedInput" in e && e.updatedInput !== void 0 && { updatedInput: e.updatedInput })
      };
}
export { oUn };

//# sourceMappingURL=chunk-61bma724.js.map
