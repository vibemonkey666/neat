// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { We } from "./chunk-pgnjjhxv.js";
import { Rm, $7o } from "./chunk-dc0nzty2.js";
import { $Vs } from "./chunk-bydv9c9r.js";
function MQt(a, t) {
  return $Vs(
    a,
    (e) => e.replace(/\.jsonl$/, t),
    (e) => {
      if (e.namespace !== "transcript" || e.agentId === void 0) return;
      let n = ["subagents", ...(e.agentRelPath ?? []), `agent-${e.agentId}${t}`],
        r = We.sidecar(e.projectKey, e.sessionId, n);
      return n.length <= $7o && Rm(r) === void 0 ? r : void 0;
    }
  );
}
export { MQt };

//# sourceMappingURL=chunk-fjn7222m.js.map
