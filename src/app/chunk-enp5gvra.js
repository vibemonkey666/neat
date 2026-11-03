// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { i } from "./chunk-cj37hmns.js";
var t = null;
function YQs(e) {
  t = e;
}
function My() {
  return (
    i.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG === !0 || Ne(t?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG)
  );
}
var o = 300;
function BGt() {
  let e = t?.(),
    n = (
      e === void 0 ? i.CLAUDE_CODE_PERSONAL_CONFIG_FIX : e.CLAUDE_CODE_PERSONAL_CONFIG_FIX
    )?.trim();
  if (n === void 0 || n === "" || n.length > o || /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(n)) return;
  return n;
}
export { YQs, My, BGt };

//# sourceMappingURL=chunk-enp5gvra.js.map
