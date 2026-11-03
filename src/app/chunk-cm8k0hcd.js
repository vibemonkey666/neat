// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
var s = new Set(["EIO", "ENOTTY", "EBADF"]);
function Lv(e, n) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(n);
  } catch (o) {
    let a = d(o),
      r = E(o);
    if (a.includes("setRawMode failed") || s.has(r ?? "")) {
      t(`setRawMode(${n}) failed on revoked tty: ${a}`);
      return;
    }
    throw o;
  }
}
export { Lv };

//# sourceMappingURL=chunk-cm8k0hcd.js.map
