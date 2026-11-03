// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import o from "path";
var qe = "Read",
  rbe = "allow_large",
  oSn = new Set(["png", "jpg", "jpeg", "gif", "webp"]);
function sNe(t) {
  let e = o.extname(t).toLowerCase().slice(1);
  return oSn.has(e) || e === "pdf";
}
export { qe, rbe, oSn, sNe };

//# sourceMappingURL=chunk-0np0053t.js.map
