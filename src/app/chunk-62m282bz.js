// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var t = ["team", "enterprise"];
function Obn(e) {
  return typeof e === "string" && t.includes(e);
}
var pRe = "tengu_org_config_required",
  Hue = {
    enabled: !1,
    plans: [],
    percent: 0,
    graceTtlHours: 96,
    budgetMs: 6000,
    hostTokens: !1,
    exemptReasons: [],
    refuseNotEntitled: !1
  };
function A5o(e) {
  switch (e) {
    case "ok":
    case "none_configured":
    case "not_required":
      return "fetched";
    case "refused_credential":
    case "refused_not_entitled":
      return "refused";
    case "blocked_by_intermediary":
      return "intermediary";
    case "refused_other":
    case "unavailable_timeout":
    case "unavailable_connect":
    case "unavailable_server":
    case "unavailable_rate_limited":
    case "unavailable_credential_refresh":
    case "unavailable_pending":
    case "unavailable_settings_unusable":
      return "unavailable";
    case "client_no_credentials":
    case "client_error":
      return "client";
    case "not_attempted":
      return "not_attempted";
  }
}
export { Obn, pRe, Hue, A5o };

//# sourceMappingURL=chunk-62m282bz.js.map
