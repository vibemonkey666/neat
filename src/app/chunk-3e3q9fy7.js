// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { l } from "./chunk-ewvf3tep.js";
import { at } from "./chunk-at88wjsn.js";
import { mn } from "./chunk-6hzmc7zs.js";
var e = "claudecode/editResult",
  u = "1";
function XJr(o, t) {
  return o === at && mn(t) && t[e] === u;
}
async function JJr(o, t) {
  if (o.isError === !0 || t.subagentFrameResult === void 0) return o;
  try {
    if ((await t.subagentFrameResultHolds?.()) === !1) return o;
  } catch (r) {
    return (l(r), o);
  }
  return { ...o, _meta: { ...o._meta, [e]: t.subagentFrameResult } };
}
export { XJr, JJr };

//# sourceMappingURL=chunk-3e3q9fy7.js.map
