// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re } from "./chunk-a16y5hcz.js";
import { Oi } from "./chunk-dc0nzty2.js";
function o3e(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ");
}
function $Ue(n, r) {
  let e = Oi(n);
  if (e.length <= r) return e;
  let t = re(e, r),
    o = Array.from(e.slice(t.length)).length;
  return `${t} \u2026 (${o} more characters follow that are NOT shown in this message)`;
}
export { o3e, $Ue };

//# sourceMappingURL=chunk-403aj6gj.js.map
