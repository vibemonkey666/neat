// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ii, bi, RT, Cd, nO } from "./chunk-ktghwym4.js";
function r1e(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function $en(r) {
  if (r instanceof nO) return !0;
  if (r1e(r)) return !1;
  if (r instanceof RT && (r.status === 403 || r.status === 401))
    return r.code !== ii.ClientHttpAuthentication && r.code !== ii.ClientHttpForbidden;
  if (
    r instanceof Error &&
    !(r instanceof Cd) &&
    !(r instanceof bi) &&
    "code" in r &&
    (r.code === 403 || r.code === 401)
  )
    return !0;
  return !1;
}
export { r1e, $en };

//# sourceMappingURL=chunk-0nak2t1c.js.map
