// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function ojn(e) {
  switch (e.status) {
    case "archived":
      return "archived";
    case "failed":
      return "failed";
    case "paused":
      return e.worker_status === "requires_action" ? "requires_action" : "idle";
    default:
      switch (e.worker_status) {
        case void 0:
        case "":
        case "WORKER_STATUS_UNSPECIFIED":
          return "pending";
        case "running":
          return e.connection_status === "disconnected" ? "idle" : "running";
        case "requires_action":
          return "requires_action";
        default:
          return "idle";
      }
  }
}
export { ojn };

//# sourceMappingURL=chunk-b1rv4bcg.js.map
