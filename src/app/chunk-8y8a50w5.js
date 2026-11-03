// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { WJn } from "./chunk-183gveyz.js";
function mIe(e, r) {
  return e
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      ...(r?.includeYear && { year: "numeric" }),
      hour: "numeric",
      minute: "2-digit",
      timeZone: WJn()
    })
    .replace(/,? at |, (?=\d{1,2}:)/, " ")
    .replace(/[ \u202f]([AP]M)/i, (o, t) => t.toLowerCase());
}
export { mIe };

//# sourceMappingURL=chunk-8y8a50w5.js.map
