// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var Tfe = "claude.ai ",
  n2 = "claude_ai_";
function En(t) {
  let r = t.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (t.startsWith("claude.ai ")) r = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return r;
}
var e = "claudeai_";
function uq(t) {
  return En(t).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}
var ici = "org-connector-",
  xQo = 128;
function rAt(t) {
  if (t.length > xQo) return !1;
  let r = `${uq(t)}_`;
  return r.startsWith("org_connector_") || r.startsWith("orgconnector_");
}
function PQo(t) {
  let r = `${uq(t)}_`;
  return r.startsWith("claude_ai_") || r.startsWith(e);
}
export { Tfe, n2, En, uq, ici, xQo, rAt, PQo };

//# sourceMappingURL=chunk-errevp3y.js.map
