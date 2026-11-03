// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { k } from "./chunk-ajtyjx88.js";
import { XOs, JOs } from "./chunk-j0tbz6ra.js";
import { us } from "./chunk-bwbrda44.js";
import { $u } from "./chunk-0bqrj5ah.js";
var jae = us({
  kind: "mcp_url_elicitation",
  payload: p(() =>
    $u((e) => typeof e === "object" && e !== null && "serverName" in e && "params" in e)
  ),
  result: p(() => $u((e) => typeof e === "object" && e !== null)),
  default: { action: "cancel" }
});
function iEe() {
  if (JOs()) return;
  let e = !1,
    t;
  XOs(() => {
    if (!e) ((e = !0), (t = k("tengu_mcp_discovery_cache_enable", null) ?? void 0));
    return t;
  });
}
export { jae, iEe };

//# sourceMappingURL=chunk-v4qhq59m.js.map
