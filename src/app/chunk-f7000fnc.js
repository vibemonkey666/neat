// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { tt, Gc, Pn } from "./chunk-wrtp8qz8.js";
import { Qs } from "./chunk-dvghjmtr.js";
import { Et, gn, cr, oA, Ut } from "./chunk-ajtyjx88.js";
import { LC, Ok } from "./chunk-j0tbz6ra.js";
import { randomUUID as o } from "crypto";
function t(e, r) {
  switch (e) {
    case "pro":
      return "pro";
    case "max":
      switch (r) {
        case "default_claude_max_5x":
          return "max_5x";
        case "default_claude_max_20x":
          return "max_20x";
        default:
          return "max_other";
      }
    default:
      return "other";
  }
}
var i =
  "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";
function yae() {
  return Et() && gn()?.billingType !== "usage_based" && Qs() && Gc() && !Pn() && !Ut();
}
function T3e(e) {
  return yae() && LC(e) && e.rateLimitType === "five_hour";
}
var n = [
  "five_hour",
  "seven_day",
  "seven_day_overage_included",
  "seven_day_opus",
  "seven_day_sonnet"
];
function qJt(e) {
  return yae() && LC(e) && e.rateLimitType !== void 0 && n.includes(e.rateLimitType);
}
function uve() {
  return t(cr(), oA());
}
function Act() {
  Ok({
    agentId: tt(),
    mode: "prompt",
    priority: "later",
    value: i,
    uuid: o(),
    origin: { kind: "auto-continuation" },
    isMeta: !0,
    skipSlashCommands: !0
  });
}
export { yae, T3e, qJt, uve, Act };

//# sourceMappingURL=chunk-f7000fnc.js.map
