// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { vf } from "./chunk-6z6dbjsw.js";
function ap() {
  return vf().backgroundTasksDisabled || __e();
}
function __e() {
  return i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function FLe() {
  let n = vf();
  return (n.backgroundTasksDisabled && !n.backgroundShellsKeptElsewhere) || __e();
}
function Vwt() {
  let n = vf();
  return (
    (n.backgroundTasksDisabled && n.backgroundLaunchRule === void 0) ||
    n.backgroundAgentLaunchDisabled ||
    i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS ||
    wr()
  );
}
function doe() {
  return ap() || vf().backgroundAgentLaunchDisabled;
}
function qwt() {
  let n = vf();
  if (!n.foregroundAgentMovesAdmitted) return doe();
  return n.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function q7s() {
  let n = vf();
  return n.backgroundLaunchRule !== void 0 && !n.backgroundLaunchByDefault && !Vwt();
}
function Uhn() {
  return vf().backgroundLaunchByDefault && !Vwt();
}
export { ap, __e, FLe, Vwt, doe, qwt, q7s, Uhn };

//# sourceMappingURL=chunk-m18k9mtt.js.map
