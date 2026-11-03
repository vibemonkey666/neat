// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { a, Zs } from "./chunk-4cgvah10.js";
import { I0, bR } from "./chunk-znkwh1rm.js";
import { ose } from "./chunk-hk0dvhmb.js";
var n = "tengu_org_policy_denied";
function r(i, o) {
  let e = bR(i);
  if (e === null || e === "unregistered") return null;
  return {
    org_policy_key: c(i),
    org_policy_deny_kind: c(e),
    org_policy_taint_named: ose(I0()).length > 0,
    surface: c(o)
  };
}
function bx(i, o) {
  let e = r(i, o);
  if (e) a(n, e);
}
async function SU(i, o) {
  let e = r(i, o);
  if (e) await Zs(n, e);
}
export { bx, SU };

//# sourceMappingURL=chunk-587ndc4k.js.map
