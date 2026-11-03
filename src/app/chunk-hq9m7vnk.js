// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _t } from "./chunk-ewvf3tep.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { on } from "./chunk-cr7a2cdd.js";
function Vve() {
  return eDt() === void 0;
}
function eDt() {
  if (_t() || Ae() !== "firstParty") return "egress";
  return on("allow_remote_sessions") ? void 0 : "policy_org";
}
export { Vve, eDt };

//# sourceMappingURL=chunk-hq9m7vnk.js.map
