// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { H } from "./chunk-p8tprgqa.js";
function Wfs(e, l) {
  let t = new Map(),
    o = [];
  if (e === void 0 || e === null)
    return { manifests: t, malformedField: !1, malformedServerNames: o };
  if (!H(e)) return { manifests: t, malformedField: !0, malformedServerNames: o };
  for (let r of l) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r],
      s = H(n) ? n.initializeResult : void 0,
      i = H(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if (H(s) && (i === void 0 || H(i)))
      t.set(
        r,
        i === void 0 ? { initializeResult: s } : { initializeResult: s, toolsListResult: i }
      );
    else o.push(r);
  }
  return { manifests: t, malformedField: !1, malformedServerNames: o };
}
var d = "notifications/tools/list_changed";
function JIn(e) {
  return H(e) && !("id" in e) && e.method === d;
}
export { Wfs, JIn };

//# sourceMappingURL=chunk-1mbkjwnq.js.map
