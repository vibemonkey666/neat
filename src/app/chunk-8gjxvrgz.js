// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { H } from "./chunk-p8tprgqa.js";
var Mn = "SendMessage",
  rwn = "ccd_session_mgmt",
  Bkt = 200,
  d5r = ["type", "recipient", "recipient_kind", "content", "request_id", "approve"];
function V3o(e) {
  return "to" in e && ("message" in e || "notify_when_idle" in e);
}
function $Vt(e) {
  if (!H(e) || !V3o(e) || !d5r.some((n) => n in e)) return;
  let o = { ...e };
  for (let n of d5r) delete o[n];
  return o;
}
export { Mn, rwn, Bkt, d5r, V3o, $Vt };

//# sourceMappingURL=chunk-8gjxvrgz.js.map
