// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { realpathSync as t } from "fs";
import { cwd as e } from "process";
function mJr(n) {
  return n;
}
function $ss(n) {
  return n;
}
function Fss() {
  let n = "";
  if (typeof process < "u" && typeof process.cwd === "function" && typeof t === "function")
    try {
      let r = e();
      try {
        n = mJr($ss(r));
      } catch {
        n = mJr(r);
      }
    } catch {}
  return n;
}
var xAn = Fss(),
  c5t = (() => {
    if (typeof process > "u" || typeof process.cwd !== "function") return null;
    try {
      return process.cwd();
    } catch {
      return null;
    }
  })();
function zCt() {
  if (c5t === null) return null;
  let n = process.env.CLAUDE_CODE_SESSION_KIND;
  return n !== void 0 && String(n).trim() === "bg" ? null : c5t;
}
export { mJr, $ss, Fss, xAn, c5t, zCt };

//# sourceMappingURL=chunk-qq3ygwcj.js.map
