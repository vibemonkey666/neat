// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re } from "./chunk-a16y5hcz.js";
function Quo(n) {
  if (n === null || typeof n !== "object") return;
  let o = n.protocols;
  if (!Array.isArray(o)) return;
  let t = o.filter((r) => typeof r === "string");
  return t.length > 0 ? t : void 0;
}
function Sws(n) {
  let o = Quo(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map((t) => `"${t}"`).join(", ")})`;
}
var QSr = 4,
  e = 48;
function yQt(n) {
  let o = n.slice(0, QSr).map((r) => (r.length > e ? `${re(r, e)}\u2026` : r)),
    t = n.length - o.length;
  return `${o.map((r) => `"${r}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export { Quo, Sws, QSr, yQt };

//# sourceMappingURL=chunk-drpfawbj.js.map
