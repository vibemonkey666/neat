// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Mn } from "./chunk-8gjxvrgz.js";
var GE = "SubagentHandback";
var ht = "Agent",
  UQn = "Launch a new agent to handle complex, multi-step tasks",
  NXs = "The task for the agent to perform",
  $Xs = "A short (3-5 word) description of the task",
  cGo = "Name for the spawned agent.",
  FXs = `${cGo} Makes it addressable via ${Mn}({to: name}) while running.`,
  eH = "fork",
  UXs = `agent:builtin:${eH}`,
  uGo = 200,
  cf = "Task",
  XSt = 1e5,
  iGt = new Set(["Explore", "Plan"]),
  bLe = "NOTE: this agent stopped at its ",
  lGr = `; ${Mn} to task-id to continue`,
  BQn = ` Send the agent a message (${Mn}) to let it continue from where it stopped.`,
  jQn = `The subagent ended without delivering a report through ${GE}, so no report was delivered.`,
  WQn = ` Send the agent a message (${Mn}) to ask it to deliver its report.`,
  fGo = ` Once its requests are accepted again, send the agent a message (${Mn}) to let it continue from where it stopped instead of starting a new agent.`,
  GQn = "subagent_type is required: the general-purpose agent is not available in this session";
export {
  GE,
  ht,
  UQn,
  NXs,
  $Xs,
  cGo,
  FXs,
  eH,
  UXs,
  uGo,
  cf,
  XSt,
  iGt,
  bLe,
  lGr,
  BQn,
  jQn,
  WQn,
  fGo,
  GQn
};

//# sourceMappingURL=chunk-gdcb8skc.js.map
