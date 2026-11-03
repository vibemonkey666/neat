// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re, zr } from "./chunk-a16y5hcz.js";
import { gt } from "./chunk-wr0p4ndg.js";
import { yn } from "./chunk-4kxznmzw.js";
var i = 200,
  o = i * 4,
  r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function uu(n) {
  let e = n === void 0 ? "" : zr(yn(n).replace(r, " "));
  return e === "" ? void 0 : gt(re(e, o), i);
}
export { uu };

//# sourceMappingURL=chunk-wrgxzjpr.js.map
