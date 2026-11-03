// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { OR, U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
var r = new W(() => De());
function i() {
  return r.of(U().host);
}
var FGe = OR(i);
function e5n(e) {
  return {
    setMode(t) {
      FGe.emit({ kind: "agent-mode", agentId: e, mode: t });
    },
    setRetryStatus(t) {
      FGe.emit({ kind: "agent-retry-status", agentId: e, retryStatus: t });
    },
    setTurnEffort(t, n = null) {
      FGe.emit({ kind: "agent-turn-effort", agentId: e, turnEffort: t, turnModel: n });
    }
  };
}
var t5n = "Running SessionStart hooks\u2026",
  UGe = {
    setSpinnerMessage(e) {
      FGe.emit({ kind: "main-message", message: e });
    },
    setSpinnerColors(e, t) {
      FGe.emit({ kind: "main-colors", color: e, shimmerColor: t });
    }
  };
export { FGe, e5n, t5n, UGe };

//# sourceMappingURL=chunk-0ftmer97.js.map
