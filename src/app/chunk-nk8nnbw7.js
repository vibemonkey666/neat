// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { He } from "./chunk-1hp0t8kv.js";
import { PMs, Ixr, Arn, Crn, lyi, dyi, cyi, jon } from "./chunk-j0tbz6ra.js";
import { Ni } from "./chunk-e36t8chg.js";
function m(e, n) {
  let s =
    e.subagentType === n.agent.agentType
      ? n.agent
      : n.agents.find((t) => t.agentType === e.subagentType);
  if (s !== void 0) return { agent: s };
  let r = n.agents.map((t) => t.agentType),
    g = r.length > 0 ? `available: ${r.join(", ")}` : "none is available";
  return {
    deny: `a hook's subagentType '${e.subagentType}' names no agent this call can dispatch (${g})`
  };
}
var c = (e) => ({
  tool_use_id: e.tool_use_id,
  prompt: e.prompt,
  description: e.description,
  subagentType: e.agent.agentType,
  provider: PMs(e.agent),
  model: e.model,
  parentModel: e.parentModel,
  ...(e.parentAgentId !== void 0 && { parentAgentId: e.parentAgentId }),
  permissionMode: e.permissionMode,
  background: e.background,
  fork: e.fork,
  ...(e.isTeammate === !0 && { isTeammate: !0 }),
  ...(e.workflow !== void 0 && { workflow: e.workflow }),
  ...(e.resume !== void 0 && { resume: e.resume }),
  name: e.name,
  cwd: e.cwd
});
var d = (e) => ({
  started: ({ agentId: n, model: o, teammateId: s }) =>
    e.done({ model: o, agentId: n, ...(s !== void 0 && { teammateId: s }) }),
  [Symbol.dispose]: e[Symbol.dispose]
});
var bfo = Object.freeze({
  started: () => {
    return;
  },
  [Symbol.dispose]: () => {
    return;
  }
});
async function ywr(e, n) {
  let { agent: o, agents: s, signal: r, origin: g } = e,
    t = c(e);
  if (!Ni("agent.spawn")) return { spawn: t, agent: o, starting: bfo, isRewritten: !1 };
  let a = Crn(cyi),
    f = await Arn(a, n({ signal: r, origin: g, core: { "agent.spawn": Ixr(a) } }).agent.spawn(t));
  if (!f.arrived) return lyi({ result: f.answered, input: t, signal: r });
  let p = f.arrived;
  dyi({ input: t, spawn: p });
  let i = m(p, { agent: o, agents: s });
  if (i.deny !== void 0) return (a.failed(new He(i.deny)), i);
  return { spawn: p, agent: i.agent, starting: d(a), isRewritten: !jon({ input: t }, p) };
}
export { bfo, ywr };

//# sourceMappingURL=chunk-nk8nnbw7.js.map
