// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Be, At } from "./chunk-at88wjsn.js";
var r = new Set([Be, At]);
function zwe(e) {
  return r.has(e);
}
function $ps(e, n) {
  return zwe(e) ? e : n;
}
function M6e(e) {
  return e === At
    ? "Select-Object -First, Select-Object -Last or Select-String"
    : "head, tail or grep";
}
function rD(e) {
  return e.isMcp !== !0 && zwe(e.name);
}
export { zwe, $ps, M6e, rD };

//# sourceMappingURL=chunk-00h33g5z.js.map
