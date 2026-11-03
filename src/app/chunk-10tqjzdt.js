// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br, T_ } from "./chunk-6bbdndfe.js";
import { tt } from "./chunk-wrtp8qz8.js";
import { re } from "./chunk-a16y5hcz.js";
import { zn, aI, lp, Lnt, Cj, Rj } from "./chunk-ajtyjx88.js";
import { g, m } from "./chunk-brszmkb3.js";
import { jx } from "./chunk-vchq4g74.js";
import { oG, wK, xGn, $mt, Ale, CP, Y4, TD, Oe } from "./chunk-j0tbz6ra.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { zR, ste } from "./chunk-x3dkgs4r.js";
import { Tvs } from "./chunk-hkjrs244.js";
import { vae } from "./chunk-a5n97xgg.js";
import { xIe } from "./chunk-p8e74wwb.js";
import { Pa } from "./chunk-9fktyje6.js";
async function RQt(t, e, a, n = {}) {
  let { extraMessages: u, forkOrigin: k, narrowCanUseTool: s } = n;
  if (e.getAppState().endedByModel)
    return (m("subagent_launch", "subagent_fork_ended_by_model"), null);
  if (Pa()) return (m("subagent_launch", "subagent_fork_coordinator_mode"), null);
  let i = e.renderedSystemPrompt;
  if (!i) {
    if (((i = await U(e)), !i)) return (m("subagent_launch", "subagent_fork_prompt_missing"), null);
  }
  let r = e.agentLifecycle.allocateName(_(n.nameHint ?? t)),
    d = (typeof n.description === "function" ? n.description(r) : (n.description ?? t))
      .replace(/\s+/g, " ")
      .trim(),
    p = d.length > 50 ? re(d, 49) + "\u2026" : d,
    o = T_(r),
    { taskRegistry: l } = e,
    w = Date.now(),
    f = lp(e.agentContext) + 1,
    C = oG(wK.model, e.options.mainLoopModel, "inherit", ae(e).mode),
    S = tt(),
    T = $mt(e, S),
    y = Ale({
      outputFileReadable: TD(e.options.tools),
      ownerCanContinueAgents: T,
      agentId: o,
      ownerAgentId: S,
      spawnDepth: f,
      description: p,
      prompt: t,
      model: C,
      selectedAgent: wK,
      taskRegistry: l,
      toolUseId: e.toolUseId,
      sessionScratch: e.session.sessionScratch
    }),
    A = y.abortController;
  if ((e.appendSystemMessage?.(Tvs(o, p)), e.agentLifecycle.registerName(r, Br(o)), s))
    zn().canUseToolNarrowings.set(o, s);
  zn().agentSpawned.emit({
    agentId: o,
    agentType: wK.agentType,
    parentAgentId: e.agentId,
    taskRegistry: l
  });
  let b = {
      prompt: t,
      resolvedAgentModel: C,
      isBuiltInAgent: !0,
      startTime: w,
      agentType: wK.agentType,
      isAsync: !0,
      agentDepth: f,
      callerCanContinueAgents: T,
      source: wK.source
    },
    c = {
      agentId: o,
      parentAgentId: e.agentId,
      depth: f,
      ...(Lnt(e) && { spawnedByMainThread: !0 }),
      parentSessionId: jx(),
      agentType: "subagent",
      subagentName: wK.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      ...(Cj(e.agentContext) && { forkOfMainConversation: !0 }),
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...Rj(e.agentContext)
    },
    M = l.takeConcurrencySlot();
  return (
    aI(c, () =>
      ste({
        taskId: y.agentId,
        abortController: A,
        makeStream: (I, h, P) =>
          zR({
            onQueryProgress: h,
            onStreamTokenEstimate: P,
            onModelRestricted: xIe(wK.agentType, e.appendSystemMessage),
            agentDefinition: wK,
            turnPrompt: t,
            promptMessages: [...(u ?? []), Oe({ content: [{ type: "text", text: xGn(t) }] })],
            toolUseContext: e,
            canUseTool: s ? s(a) : a,
            isAsync: !0,
            querySource: vae(wK.agentType, !0),
            forkOrigin: k,
            spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
            spawnedByForkedSkill: e.options.spawnedByForkedSkill,
            model: "inherit",
            override: {
              systemPrompt: i,
              parentSystemPrompt: !0,
              agentId: Br(y.agentId),
              agentContext: c,
              abortController: A,
              requireCanUseTool: s ? !0 : void 0
            },
            availableTools: e.options.tools,
            forkContextMessages: e.messages,
            useExactTools: !0,
            onCacheSafeParams: I,
            description: p,
            name: r
          }),
        metadata: { ...b, agentContext: c },
        description: p,
        toolUseContext: e,
        taskRegistry: l,
        agentIdForCleanup: o,
        enableSummarization: !0,
        getWorktreeResult: async () => ({}),
        onRunSettled: M
      })
    ),
    g("subagent_launch"),
    { agentId: o, name: r }
  );
}
async function U(t) {
  let e = t.getAppState(),
    a = e.agent ? e.agentDefinitions.activeAgents.find((u) => u.agentType === e.agent) : void 0,
    n = await CP(t.options.tools, t.options.mainLoopModel);
  return Y4({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: n,
    appendSystemPrompt: t.options.appendSystemPrompt
  });
}
function _(t) {
  return (
    t
      .trim()
      .split(/\s+/)
      .slice(0, 3)
      .join("-")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 24) || "fork"
  );
}
export { RQt };

//# sourceMappingURL=chunk-10tqjzdt.js.map
