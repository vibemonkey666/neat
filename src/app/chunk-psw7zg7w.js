// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Hn } from "./chunk-acd8w9vv.js";
var n = new Set([
  "starting",
  "running",
  "resuming",
  "adopted",
  "crashed",
  "working",
  "blocked",
  "done",
  "stopped",
  "failed",
  "busy",
  "shell",
  "idle",
  "waiting"
]);
function Qq(e) {
  if (e === void 0) return;
  return Hn(n.has(e) ? e : "other");
}
var t = new Set(["cold", "spare", "adopted"]);
function WPt(e) {
  return typeof e === "string" && t.has(e) ? e : void 0;
}
export { Qq, WPt };

//# sourceMappingURL=chunk-psw7zg7w.js.map
