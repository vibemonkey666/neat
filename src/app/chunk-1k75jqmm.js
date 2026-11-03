// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { HBn, l1e } from "./chunk-f786enhh.js";
function f7t(e, n) {
  return { targets: e.filter((t) => HBn(t, n)), outOfBandNote: l1e(e, !0, n) };
}
async function p7t(e, n) {
  let t = await Promise.allSettled(e.map((o) => n(o.name))),
    r = 0;
  for (let o of t) if (o.status === "fulfilled" && o.value.client.type === "connected") r++;
  return { results: t, connected: r };
}
export { f7t, p7t };

//# sourceMappingURL=chunk-1k75jqmm.js.map
