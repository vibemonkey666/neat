// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Mri } from "./chunk-ajtyjx88.js";
import { lf } from "./chunk-j0tbz6ra.js";
function RIt(e, n, t) {
  return () => {
    if (t?.aborted === !0) return;
    let a = n();
    return e.getCommandQueueSnapshot().some(i) ||
      e.someSubmissionInFlight((r) => s(r, a)) ||
      (t === void 0
        ? e.getInFlightDrainBatchStanding() !== "appended" &&
          e.someInFlightDrainCommand((r) => s(r, a))
        : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(i))
      ? void 0
      : a;
  };
}
function s(e, n) {
  return i(e) && (e.uuid === void 0 || n.findLast((t) => t.uuid === e.uuid) === void 0);
}
function i(e) {
  if (!lf(e)) return !1;
  switch (e.mode) {
    case "task-notification":
      return !1;
    case "poll-event": {
      let n = e.pollEvent?.provenance?.authority;
      return n !== void 0 && n !== "peer-agent" && n !== "world-event";
    }
    case "prompt":
    case "bash":
      return Mri(e);
    case "orphaned-permission":
      return !0;
  }
  return !0;
}
export { RIt };

//# sourceMappingURL=chunk-ktharenx.js.map
