// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { st, Hh, E9, zl } from "./chunk-ajtyjx88.js";
import { ur } from "./chunk-t86k189s.js";
import { CP, _Ls, Z4, tx } from "./chunk-j0tbz6ra.js";
import { NJe, Li } from "./chunk-f7aya6cs.js";
import { TGe } from "./chunk-6h7ejyet.js";
import { Xh } from "./chunk-yyq6mj0n.js";
import { vct } from "./chunk-m3dmd0bf.js";
import { E3e, hae } from "./chunk-vaw9tryj.js";
import { bct } from "./chunk-tyq990zt.js";
import { RCe } from "./chunk-5b88xb0z.js";
async function cSr({
  session: s,
  tools: f,
  mainLoopModel: o,
  customSystemPrompt: i,
  excludeDynamicSections: a,
  cacheBreakerPhrase: g,
  analysisOnly: n,
  storageV5: p,
  credentials: c
}) {
  let [m, l, e, t] = await Promise.all([
    i !== void 0 ? Promise.resolve([]) : CP(f, o, { excludeDynamicSections: a, analysisOnly: n }),
    tx(s, p, c),
    i !== void 0 ? Promise.resolve({}) : Z4(s, g),
    a && i === void 0 ? _Ls(o, { analysisOnly: n }) : Promise.resolve({})
  ]);
  if (a) return { defaultSystemPrompt: m, userContext: { ...e, ...l, ...t }, systemContext: {} };
  return { defaultSystemPrompt: m, userContext: l, systemContext: e };
}
async function Rco({
  session: s,
  messageQueue: f,
  tools: o,
  toolCatalog: i,
  commands: a,
  mcpClients: g,
  messages: n,
  turnInProgress: p,
  readFileState: c,
  toolState: m,
  sessionHooks: l,
  getAppState: e,
  setAppState: t,
  customSystemPrompt: d,
  appendSystemPrompt: y,
  excludeDynamicSections: P,
  thinkingConfig: x,
  agents: M,
  storageV5: C,
  credentials: S,
  runQuery: T
}) {
  let r = e(),
    u = Hh({ permissionMode: r.toolPermissionContext.mode, mainLoopModel: st() }),
    {
      defaultSystemPrompt: v,
      userContext: b,
      systemContext: j
    } = await cSr({
      session: s,
      tools: o,
      mainLoopModel: u,
      customSystemPrompt: d,
      excludeDynamicSections: P,
      cacheBreakerPhrase: r.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: C,
      credentials: S
    }),
    R = Li(TGe(NJe(d, v), { tools: o, appendSystemPrompt: y })),
    k = n.at(-1),
    h = p && k?.type === "assistant" && k.message.stop_reason === null ? n.slice(0, -1) : n,
    H = {
      messageQueue: f,
      session: s,
      storageV5: C,
      credentials: S,
      agentContext: zl(),
      options: {
        commands: a,
        debug: !1,
        mainLoopModel: u,
        tools: o,
        toolCatalog: i,
        verbose: !1,
        thinkingConfig: x ?? (E9() !== !1 ? { type: "adaptive" } : { type: "disabled" }),
        mcpClients: g,
        mcpResources: {},
        isNonInteractiveSession: !0,
        runQuery: T,
        agentDefinitions: { activeAgents: M, allAgents: [] },
        customSystemPrompt: d,
        ...(d !== void 0 && { omitGitStatus: !0 }),
        appendSystemPrompt: y,
        autoCompactWindow: r.autoCompactWindow,
        fastMode: r.fastMode,
        cacheBreakerPhrase: r.cacheBreakerPhrase
      },
      abortController: ur(),
      readFileState: c,
      toolState: m,
      toolDecisions: new Map(),
      permissionRelays: hae,
      getAppState: e,
      setAppState: t,
      ...bct(e, t),
      queuedNotificationsRegistry: vct(e, t, s),
      taskRegistry: Xh(e, t),
      sessionHooksRegistry: l,
      teammateColors: E3e(RCe(e, t, "teammateColors")),
      rootToolSurface: { tools: o, mainLoopModel: u },
      messages: h,
      turnStartIndex: 0,
      getFileHistoryState: () => {
        return;
      },
      applyFileHistoryOp: () => {},
      applyAttributionOp: () => {}
    };
  return {
    systemPrompt: R,
    userContext: b,
    systemContext: j,
    toolUseContext: H,
    forkContextMessages: h,
    advisorModel: r.advisorModel
  };
}
export { cSr, Rco };

//# sourceMappingURL=chunk-2q7tzmzh.js.map
