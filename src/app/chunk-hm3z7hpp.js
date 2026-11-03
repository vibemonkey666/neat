// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Q4r } from "./chunk-at88wjsn.js";
import { aqt, Q5r } from "./chunk-5rw2zfa0.js";
var { ceil: i, max: a } = Math;
function m(t, e, r) {
  if (r ? Q5r(t, e, r) : e === void 0) e = 1;
  else e = a(Q4r(e), 0);
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  var l = 0,
    f = 0,
    o = Array(i(n / e));
  while (l < n) o[f++] = aqt(t, l, (l += e));
  return o;
}
var npt = m;
export { npt };

//# sourceMappingURL=chunk-hm3z7hpp.js.map
