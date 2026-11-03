// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re } from "./chunk-a16y5hcz.js";
import { un } from "./chunk-wr0p4ndg.js";
var dye = 128,
  LG = /^[\x21-\x7e]+$/,
  JUr = "io.modelcontextprotocol/tasks";
function Gde(r) {
  return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), dye);
}
function A8(r) {
  return re(Gde(r), 8);
}
function W$o(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1000 ? `${r}ms` : un(r);
}
export { dye, LG, JUr, Gde, A8, W$o };

//# sourceMappingURL=chunk-vxpcbg5q.js.map
