// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { pRe } from "./chunk-62m282bz.js";
function a(n, r) {
  let e = n.cachedGrowthBookFeatures;
  if (typeof e !== "object" || e === null || Array.isArray(e) || Object.keys(e).length === 0)
    return !0;
  let o = n.growthBookOverrides;
  return (
    pRe in e ||
    (typeof o === "object" && o !== null && pRe in o) ||
    (r !== void 0 && r.includes(pRe))
  );
}
export { a as orgConfigGateFlagOnHand };

//# sourceMappingURL=chunk-gg1ytf58.js.map
