// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { T_ } from "./chunk-6bbdndfe.js";
import { L, ru, ye, mT, k_, J, KSe, kee, Iit, Lq } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { R } from "./chunk-fs43t96t.js";
import { Rq, t } from "./chunk-4kxznmzw.js";
import { zw } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ju } from "./chunk-d5zj5299.js";
import { qCe, k_n, iEt, Tj, fg, lp, Rj, uo, Ar } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Uw, B9, G_, mfe } from "./chunk-5rw2zfa0.js";
import { qi } from "./chunk-rh5ymkjp.js";
import { Uo, t4n, mTe, QN, Bs, fde, Lln, Hjs } from "./chunk-6h7ejyet.js";
import { vd, tn } from "./chunk-wany0nxw.js";
import { Zer } from "./chunk-g2mvjkdk.js";
import { I2e } from "./chunk-p56qmwgb.js";
import { Qv } from "./chunk-5z6t3gwt.js";
import { kXs, Ao, ae } from "./chunk-ar6ynjt8.js";
import { G8, tj, jre } from "./chunk-39ayby14.js";
import {
  vJ,
  DEe,
  nLt,
  DA,
  h1,
  qte,
  BEe,
  tWn,
  nWn,
  wpt,
  uXe,
  ELt,
  MN,
  M4,
  kLt,
  DN,
  lge,
  dge,
  $F,
  D4,
  CGn,
  RGn,
  f0t,
  cke,
  Cl,
  HPr,
  SLs,
  Non,
  Ake,
  WJ,
  GF,
  N3,
  TCo,
  gp,
  hne,
  psn,
  msn,
  qCo,
  iNs,
  aNs,
  lNs,
  dJe,
  dNs,
  SWe,
  Sy,
  Oe,
  pm,
  Ah
} from "./chunk-j0tbz6ra.js";
import { KC, tBt, Uhe, eLo, m8, vQ, $dn, Bhe } from "./chunk-783pymr7.js";
import { ns } from "./chunk-g82naabm.js";
import { bOt, SOt } from "./chunk-xacyfhjq.js";
import { ote, u0n, aBe, zR, yP, $3e, lBe } from "./chunk-x3dkgs4r.js";
import { AMt } from "./chunk-25j20xpc.js";
import { e3 } from "./chunk-t7ft03m9.js";
import { TLn, ALn, CLn, xuo, aQt } from "./chunk-jgs1ysys.js";
import { r0n } from "./chunk-p8e74wwb.js";
import { sS } from "./chunk-nhj692ya.js";
import { Hce } from "./chunk-9fktyje6.js";
import { qe } from "./chunk-0np0053t.js";
import { o, M, T, u, Ue, $e, A } from "./chunk-0bqrj5ah.js";
import { _e } from "./chunk-n8wdmnah.js";
function O_s(e) {
  return I2e(e) || B9(e.source);
}
function dbr(e) {
  switch (e.type) {
    case "generic-error":
    case "manifest-validation-error":
    case "path-not-found":
      return e.plugin === void 0 ? e.path : void 0;
    default:
      return;
  }
}
var we = {
  "path-not-found": "path not found",
  "manifest-validation-error": "manifest invalid",
  "dependency-unsatisfied": "unmet dependency",
  "dependency-version-unsatisfied": "unmet dependency"
};
function Ie(e) {
  return e.flatMap((n) => {
    let i = we[n.type] ?? "load error",
      s = dbr(n);
    if (s !== void 0) {
      let d = n.type === "generic-error" ? n.manifestName : void 0,
        r = SWe(s, G_(n.source) ?? "");
      return [{ names: d ? [d, r] : [r], category: i }];
    }
    return I2e(n) ? [{ names: [n.plugin], category: i }] : [];
  });
}
function fe(e, n, i) {
  let s = Ie(n);
  if (s.length === 0) return;
  let d = e.indexOf(":"),
    r = d > 0 ? e.slice(0, d) : void 0,
    S = r === void 0 || i.has(r) ? void 0 : s.find((l) => l.names.includes(r));
  if (S !== void 0)
    return `The plugin "${r}" did not load in this session (${S.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
  let v = L(s.map((l) => l.category)).join(", ");
  return `${s.length === 1 ? `1 plugin did not load in this session (${v}); if this skill belongs to it` : `${s.length} plugins did not load in this session (${v}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`;
}
function ge({ skill: e }, { commands: n, teammateAuthorOf: i }) {
  if (!e) return null;
  let s = e.trim(),
    d = s.startsWith("/") ? s.substring(1) : s,
    r = n?.find((k) => k.name === d),
    S = r?.loadedFrom === "commands_DEPRECATED" ? `/${d}` : d,
    v = i?.(r?.type === "prompt" ? r.source : void 0, d) ?? null;
  return v ? `${S} \xB7 by ${v}` : S;
}
function Ae(e) {
  let n = new Map(),
    i = (s) => Boolean(s.disableModelInvocation) || M4(s);
  for (let s of e) {
    let d = n.get(s.name);
    if (d === void 0 || (i(d) && !i(s) && s.type === "prompt" && !(DEe(d) && !DEe(s))))
      n.set(s.name, s);
  }
  return [...n.values()];
}
function Ee(e) {
  if (!qi().claim(`skill_reserved_namespace_rule_held_back_${e}`)) return;
  f(
    "skill_reserved_namespace",
    e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary",
    { interactive: !ye(), host_prompt: mT() !== void 0 }
  );
}
async function ie(e) {
  let n = hne(await gp(ru(), e.storageV5)),
    i = e.mcpCommands(),
    s = kXs(
      i.filter((S) => S.type === "prompt" && S.loadedFrom === "mcp"),
      n
    ),
    d = mTe(),
    r = D4(n, i);
  return lge(Ae([...r, ...d, ...s]));
}
function ue(e, n) {
  let i = e.filter(dge);
  return n ? fde(i, Lq()) : i;
}
function he(e, n) {
  return (
    e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? !1)
  );
}
function se(e, n, i) {
  let s = i.agentId === void 0,
    d = Bs(e, n),
    r = d?.type === "prompt" && d.directoryListingName === e ? void 0 : d;
  if (r !== void 0) {
    let v = he(r, e) ? ue(n, s) : [];
    if (v.includes(r)) {
      let k = v.filter(
        (l) =>
          he(l, e) ||
          (l.type === "prompt" && l.loadedFrom !== "syncedSkills" && l.name.endsWith(`:${e}`))
      );
      if (k.length > 1) return { kind: "ambiguous", command: void 0, candidates: k };
    }
    return { kind: "exact", command: r };
  }
  if (TCo(e) || n.some((v) => kLt(v, e))) return { kind: "none", command: void 0 };
  let S = Hjs(e, ue(n, s));
  switch (S.kind) {
    case "unique":
      return { kind: "suggestion", command: void 0, suggestion: S.command };
    case "ambiguous":
      return { kind: "ambiguous", command: void 0, candidates: S.candidates };
    case "none":
      return { kind: "none", command: void 0 };
  }
}
function ke(e, n) {
  return (
    e.type === "prompt" &&
    (e.context === "fork" || (e.getContext !== void 0 && n.spawnedByForkedSkill === !0)) &&
    n.spawnedBySkill === DN(e)
  );
}
async function Me(e, n, i, s) {
  if (
    !i.some(
      (S) => S.type === "prompt" && S.pluginInfo?.namedFolderYield?.yielded.includes(e) === !0
    )
  )
    return !0;
  let r = await gp(ru(), s, void 0, !0);
  return Bs(e, r)?.name === n.name;
}
function Pe(e, n) {
  if (n.agentId !== void 0) return !1;
  let i = dNs(e);
  for (let s = n.messages.length - 1; s >= n.turnStartIndex; s--) {
    let d = n.messages[s];
    if (
      d.type !== "user" ||
      d.isMeta ||
      d.isCompactSummary ||
      !fg(d.origin) ||
      d.verifiedSlackHumanTurn === !0 ||
      d.handedOff === !0 ||
      d.textNotTyped === !0
    )
      continue;
    let r = d.message.content;
    if (typeof r === "string") {
      if (r.includes(`<${zw}>`)) continue;
    } else if (r.some((S) => S.type === "tool_result")) continue;
    if (i.test(Ah(d) ?? "")) return !0;
  }
  return !1;
}
async function Re(e, n, i, s, d, r, S, v, k) {
  let l = Date.now(),
    y = T_(),
    w = GF().has(n),
    W = vQ(e),
    U = e.source === "bundled",
    { sanitizedName: E, skillNameHash: h } = m8({
      rawName: n,
      canonicalName: e.name,
      isMcp: e.loadedFrom === "mcp",
      isBuiltIn: w,
      isBundled: U,
      isOfficial: W
    }),
    q = s.queryTracking?.depth ?? 0,
    z = q > 0 ? "nested-skill" : "claude-proactive",
    F = s.agentId;
  if (e.pluginInfo) MN(e.pluginInfo.repository, "skill", ELt(e, e.pluginInfo.pluginManifest.name));
  (a("tengu_skill_tool_invocation", {
    command_name: E,
    _PROTO_skill_name: n,
    ...h,
    execution_context: b("fork"),
    invocation_trigger: c(z),
    query_depth: q,
    ...(s.queryTracking && { query_chain_id: _e(s.queryTracking.chainId) }),
    ...eLo(S, S !== void 0 && N3().has(S)),
    ...(F && { parent_agent_id: _e(F) }),
    ...Uhe(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...SOt(e.source, n),
    attribution_shown: bOt(s.session, e.source, n) !== null,
    skill_content_chars: e.contentLength,
    ...!1,
    ...(e.pluginInfo && $dn(e)),
    ...Bhe(e)
  }),
    tBt(n, e, z, s.agentContext));
  let O = {
      agentId: y,
      parentAgentId: s.agentId,
      depth: lp(s.agentContext) + 1,
      agentType: "subagent",
      isAsync: !1,
      isBackgroundAgent:
        s.agentContext.agentType === "main" ? !1 : s.agentContext.isBackgroundAgent,
      ...Rj(s.agentContext)
    },
    D = TLn(e, s),
    N = D || s.spawnedByWorkflowRunId !== void 0,
    {
      modifiedGetAppState: P,
      contextLayers: _,
      recordInvocation: I,
      baseAgent: B,
      promptMessages: Y,
      skillContent: K,
      forkReadFileState: re,
      availableTools: Q,
      webFetchReadmissionAllowed: X,
      frozenCommandDenies: le
    } = await psn(e, i || "", s, O, {
      replaceCommandRules: N,
      freezeCommandDenies: N,
      deferInvocationRecording: N
    }),
    te = await aQt(e, ru(), {
      options: {
        tools: yP(
          B,
          X ? WJ(B, Q, ae(s), { activeAgents: s.options.agentDefinitions.activeAgents }) : Q,
          D,
          !1,
          !1,
          0,
          QN(s).mode
        ).resolvedTools,
        spawnedBySkill: DN(e)
      },
      storageV5: s.storageV5,
      session: s.session
    });
  if (te) Y.push(te);
  let Z = e.getEffort?.(i || "", s) ?? e.getDefaultEffort?.(i || "", s)?.value ?? e.effort,
    H = Z !== void 0 ? { ...B, effort: Z } : B,
    V = [];
  if ((t(`SkillTool executing forked skill ${n} with agent ${H.agentType}`), D)) {
    let C = await ALn({
      agentId: y,
      agentDefinition: H,
      command: e,
      description: `/${Uo(e)} ${i ?? ""}`.trim(),
      prompt: K,
      promptMessages: Y,
      context: s,
      canUseTool: d,
      getAppState: P,
      permissionLayers: _.length > 0 ? [...(s.permissionLayers ?? []), ..._] : s.permissionLayers,
      readFileState: re,
      availableTools: Q,
      webFetchReadmissionAllowed: X,
      spawnedBySkill: DN(e),
      recordInvocationOnSuccess: I,
      frozenCommandDenies: le
    });
    if (C)
      return (
        g("skill_invoke"),
        {
          data: {
            success: !0,
            commandName: n,
            status: "forked",
            background: !0,
            agentId: y,
            result: `Running in the background as @${C.name}`
          }
        }
      );
    I();
  }
  let ne = { ...O, subagentName: H.agentType, isBuiltIn: Cl(H) },
    de = s.options.forwardSubagentText,
    G = (C, j) => {
      v?.({
        type: "progress",
        toolUseID: `skill_${r.message.id}`,
        data: {
          message: C,
          type: "skill_progress",
          prompt: j,
          agentId: y,
          agentType: H.agentType,
          description: e.description
        }
      });
    },
    oe = CLn({
      agentId: y,
      parentAgentId: F,
      spawnDepth: lp(ne),
      skillName: Uo(e),
      prompt: K,
      selectedAgent: H,
      taskRegistry: s.taskRegistry,
      toolUseId: s.toolUseId,
      callerAbortController: s.abortController
    }),
    ee = "failed";
  try {
    let C = pm(Y).find((x) => x.type === "user");
    if (C) G({ ...C, isMeta: void 0 }, K);
    let j = !1,
      be = k?.mark("model");
    for await (let x of zR({
      agentDefinition: H,
      promptMessages: Y,
      turnPrompt: K,
      onModelRestricted: r0n(DN(e), v),
      toolUseContext: {
        ...s,
        getAppState: P,
        permissionLayers: _.length > 0 ? [...(s.permissionLayers ?? []), ..._] : s.permissionLayers
      },
      canUseTool: d,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: DN(e),
      spawnedByForkedSkill: !0,
      model: e.model,
      availableTools: Q,
      webFetchReadmissionAllowed: X,
      override: {
        agentId: y,
        agentContext: ne,
        abortController: oe.abortController,
        shareFileHistory: !0,
        readFileState: re
      }
    })) {
      if (x.type === "api_metrics") {
        v?.(x);
        continue;
      }
      if (
        x.type === "set_in_progress_tool_use_ids" ||
        x.type === "spinner_mode" ||
        x.type === "query_model_change"
      )
        continue;
      if ((V.push(x), ote(x))) {
        if (aBe(s, x)) v?.(u0n(x));
        continue;
      }
      if (x.type !== "assistant" && x.type !== "user") continue;
      if (!v) continue;
      if (x.type === "user" && x.isMeta && !j) continue;
      if (x.type === "assistant") j = !0;
      for (let pe of pm([x])) {
        let ce = pe.message.content[0];
        if (!de && ce?.type !== "tool_use" && ce?.type !== "tool_result") continue;
        G(pe, "");
      }
    }
    be?.();
    let me = $3e(Sy(V));
    if (!me) {
      if ((lBe(y, s), s.spawnedByWorkflowRunId !== void 0)) I();
    }
    let Te = Ake(V) + msn(V, "Skill execution completed");
    V.length = 0;
    let ve = Date.now() - l;
    return (
      t(`SkillTool forked skill ${n} completed in ${ve}ms`),
      g("skill_invoke"),
      (ee = me ? "failed" : "completed"),
      { data: { success: !0, commandName: n, status: "forked", agentId: y, result: Te } }
    );
  } finally {
    (oe.remove(ee), Iit(y));
  }
}
var xe = p(() =>
    u({
      skill: o().describe(
        "The name of a skill from the available-skills list. Do not guess names."
      ),
      args: o().optional().describe("Optional arguments for the skill")
    })
  ),
  Ne = p(() => {
    let e = u({
        success: M().describe("Whether the skill is valid"),
        commandName: o().describe("The name of the skill"),
        allowedTools: T(o()).optional().describe("Tools allowed by this skill"),
        model: o()
          .optional()
          .describe(
            "Resolved model the skill turn runs on when a frontmatter model override took effect; omitted otherwise"
          ),
        status: A("inline").optional().describe("Execution status"),
        readOnly: M()
          .optional()
          .describe("True when the skill instructions were loaded read-only (nothing was executed)")
      }),
      n = u({
        success: M().describe("Whether the skill completed successfully"),
        commandName: o().describe("The name of the skill"),
        status: A("forked").describe("Execution status"),
        agentId: o().describe("The ID of the sub-agent that executed the skill"),
        result: o().describe("The result from the forked skill execution"),
        background: M()
          .optional()
          .describe(
            "True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification."
          )
      });
    return $e([e, n]);
  });
function Fe(e) {
  return { storageV5: e.storageV5, mcpCommands: () => e.getAppState().mcp.commands };
}
async function De({
  input: { skill: e, args: n },
  toolUseContext: i,
  canUseTool: s,
  parentMessage: d,
  onProgress: r,
  timing: S
}) {
  if (i.agentId !== void 0 && h1(i.agentId))
    throw (
      m("subagent_launch", "skill_fork_spawner_stop_pending"),
      Error(
        "This agent has been stopped and its stop is still completing; it cannot launch skills."
      )
    );
  let v = e.trim(),
    k = v.startsWith("/") ? v.substring(1) : v,
    l = i.options.activeSkill,
    y = l ?? i.options.spawnedBySkill;
  i.options.activeSkill = k;
  let w = Hce(i),
    W = !1;
  try {
    let U = await ie(Fe(i)),
      E = se(k, U, i);
    if (E.kind === "ambiguous") {
      let C = E.candidates.every((j) => Rq(j.name))
        ? `: ${E.candidates.map((j) => j.name).join(", ")}`
        : "";
      throw new R(
        `Skill ${k} now matches several skills${C} \u2014 invoke one by its full name.`,
        "Skill tool: bare name ambiguous at dispatch"
      );
    }
    let h = E.command;
    if (h) i.options.activeSkill = DN(h);
    if (!w) {
      if ((Non(i.session, h?.name ?? k, i.storageV5, k), h?.type === "prompt" && h.pluginInfo))
        KC(h.pluginInfo.repository);
    }
    if (h?.type === "prompt" && t4n(h, n || "", i) === "fork" && !w) {
      let C =
        i.hookCaller !== void 0 && !i.hookServesModel && i.agentId === void 0 ? uXe() : void 0;
      if (C !== void 0)
        throw new R(
          `Skill "${k}" was not run: ${C}.`,
          "A forked skill was not run: a hold on plugins' input stands"
        );
      try {
        return await Re(h, k, n, i, s, d, y, r, S);
      } finally {
        i.options.activeSkill = l;
      }
    }
    let q = `${i.agentId ?? ""}:${h?.name ?? k}`,
      z = kee().get(q),
      { processPromptSlashCommand: F } = await import("./chunk-n7rchcpj.js"),
      O = i.toolUseId ?? We(d, Ao),
      D = O !== void 0 && HPr(d.handedOffLive)?.has(O) === !0,
      N = await F(k, n || "", U, i, w, D);
    if (!N.shouldQuery)
      throw (m("skill_invoke", "skill_invoke_process_failed"), Error("Command processing failed"));
    let P = w ? [] : N.allowedTools || [],
      _ = w ? void 0 : qCe(N.model),
      I = w ? void 0 : N.effort,
      B = GF().has(k),
      Y = h?.type === "prompt" && h.source === "bundled",
      K = h?.type === "prompt" && vQ(h),
      { sanitizedName: re, skillNameHash: Q } = m8({
        rawName: k,
        canonicalName: h?.name ?? k,
        isMcp: h?.loadedFrom === "mcp",
        isBuiltIn: B,
        isBundled: Y,
        isOfficial: K
      }),
      X = i.queryTracking?.depth ?? 0,
      le = X > 0 ? "nested-skill" : "claude-proactive",
      te = i.agentId,
      Z = h?.type === "prompt" ? h.source : void 0,
      H = 0;
    for (let C of N.messages) H += RGn(C)?.length ?? 0;
    if (h?.type === "prompt" && h.pluginInfo && !w)
      MN(h.pluginInfo.repository, "skill", ELt(h, h.pluginInfo.pluginManifest.name));
    (a("tengu_skill_tool_invocation", {
      command_name: re,
      _PROTO_skill_name: k,
      ...Q,
      execution_context: w ? b("read-only") : b("inline"),
      invocation_trigger: c(le),
      query_depth: X,
      ...(i.queryTracking && { query_chain_id: _e(i.queryTracking.chainId) }),
      ...eLo(y, y !== void 0 && N3().has(y)),
      ...(te && { parent_agent_id: _e(te) }),
      ...Uhe(Z, h?.loadedFrom, h?.kind, h?.type === "prompt" ? h.createdBy : void 0),
      ...SOt(Z, k),
      attribution_shown: bOt(i.session, Z, k) !== null,
      ...(h?.type === "prompt" && { skill_content_chars: h.contentLength }),
      skill_body_chars: H,
      ...!1,
      ...(h?.type === "prompt" && h.pluginInfo && $dn(h)),
      ...(h?.type === "prompt" && Bhe(h))
    }),
      tBt(k, h, le, i.agentContext));
    let V = N.messages.filter((C) => {
        if (C.type === "progress") return !1;
        if (C.type === "user" && "message" in C) {
          let j = C.message.content;
          if (typeof j === "string" && j.includes(`<${zw}>`)) return !1;
        }
        return !0;
      }),
      ne = w ? (V.map(RGn).find((C) => C !== null) ?? void 0) : void 0,
      de = je(
        ze({
          messages: V,
          contextMessages: i.messages,
          commandName: k,
          args: n,
          priorContent: z?.content ?? ne,
          renderedContent: kee().get(q)?.content ?? ne
        }),
        O
      );
    (t(`SkillTool returning ${de.length} newMessages for skill ${k}`), g("skill_invoke"));
    let G = [];
    if (P.length > 0) G.push({ kind: "allowed_tools", allowedTools: P });
    let oe = i.getAppState(),
      ee =
        _ &&
        iEt({ skillModel: _, mode: oe.toolPermissionContext.mode, fastMode: oe.fastMode ?? !1 })
          ? k_n(_, i.options.mainLoopModel)
          : void 0;
    if (ee) G.push({ kind: "model", mainLoopModel: ee });
    if (I !== void 0) G.push({ kind: "effort", effort: I });
    return (
      (W = !0),
      {
        data: {
          success: !0,
          commandName: k,
          allowedTools: P.length > 0 ? P : void 0,
          model: ee,
          ...(w && { readOnly: !0 })
        },
        newMessages: de,
        ...(G.length > 0 && { contextLayers: G })
      }
    );
  } finally {
    if (w || !W) i.options.activeSkill = l;
  }
}
var l3e = tn({
    name: Ao,
    searchHint: "invoke a slash-command skill",
    isEnabled() {
      return !k_();
    },
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    get inputSchema() {
      return xe();
    },
    get outputSchema() {
      return Ne();
    },
    description: async ({ skill: e }) => `Execute skill: ${e}`,
    prompt: async ({ model: e, leanRewrite: n }) => SLs({ model: e, leanRewrite: n }),
    toAutoClassifierInput: ({ skill: e }) => e ?? "",
    create(e) {
      let n = e;
      return {
        async validateInput({ skill: i }) {
          let s = i.trim();
          if (!s)
            return (
              m("skill_invoke", "skill_invoke_empty_name"),
              { result: !1, message: `Invalid skill format: ${i}`, errorCode: 1 }
            );
          let d = s.startsWith("/");
          if (d) a("tengu_skill_tool_slash_prefix", {});
          let r = d ? s.substring(1) : s,
            S,
            v = !1,
            k = await ie(n),
            l = se(r, k, n),
            y = l.command,
            w = Uw(r);
          if (qte(n.session) && (!y || wpt(y)) && (y !== void 0 || nWn(w))) {
            let E = await BEe(w);
            if (!E.ok) ((S = E.reason), (v = E.withheld === !0));
            else ((k = await ie(n)), (l = se(r, k, n)), (y = l.command));
          }
          if (y?.type === "prompt" && y.loadDefinition !== void 0)
            (await y.loadDefinition(), (k = await ie(n)), (l = se(r, k, n)), (y = l.command));
          if (S !== void 0 && (!y || wpt(y)))
            return (
              m("skill_invoke", v ? "skill_invoke_withheld" : "skill_invoke_not_materialized"),
              {
                result: !1,
                message: v
                  ? `${tWn(r)} Proceed without it.`
                  : `Skill ${r} could not be downloaded (${S}). Proceed without it.`,
                errorCode: 10
              }
            );
          if (y && cke(y))
            return (
              m(
                "skill_invoke",
                $F(y) ? "skill_invoke_host_catalog_withheld" : "skill_invoke_sync_vetoed"
              ),
              { result: !1, message: `Unknown skill: ${r}`, errorCode: 13 }
            );
          if (!y) {
            let E = xuo(k, r, n.spawnedBySkill);
            if (E.length > 0) {
              let _ =
                l.kind === "ambiguous" ? l.candidates.filter((I) => !kLt(I, r) && Rq(I.name)) : [];
              if (l.kind === "ambiguous")
                a("tengu_skill_tool_suffix_match", { candidate_count: l.candidates.length });
              return (
                m("skill_invoke", "skill_invoke_not_found"),
                {
                  result: !1,
                  message:
                    _.length > 0
                      ? `Unknown skill: ${r}. Several skills match that name: ${[..._, ...E].map((I) => I.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.`
                      : `Unknown skill: ${r}. Directory-scoped variants exist: ${E.map((I) => I.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
                  errorCode: 2
                }
              );
            }
            if (l.kind === "suggestion") {
              if (
                (a("tengu_skill_tool_suffix_match", { candidate_count: 1 }), Rq(l.suggestion.name))
              )
                return (
                  m("skill_invoke", "skill_invoke_not_found"),
                  {
                    result: !1,
                    message: `Unknown skill: ${r}. Did you mean ${l.suggestion.name}? Invoke it by that full name.`,
                    errorCode: 2
                  }
                );
            }
            if (l.kind === "ambiguous") {
              a("tengu_skill_tool_suffix_match", { candidate_count: l.candidates.length });
              let _ = l.candidates.filter((B) => !kLt(B, r)),
                I = _.length === 1 ? _[0] : void 0;
              if (_.length > 0 && _.every((B) => Rq(B.name)))
                return (
                  m("skill_invoke", "skill_invoke_not_found"),
                  {
                    result: !1,
                    message:
                      I !== void 0
                        ? `Unknown skill: ${r}. Did you mean ${I.name}? Invoke it by that full name.`
                        : `Unknown skill: ${r}. Several skills match that name: ${_.map((B) => B.name).join(", ")} \u2014 invoke one by its full name.`,
                    errorCode: 2
                  }
                );
            }
            let h = mfe(
                r,
                k.map((_) => ({ name: Uo(_), aliases: _.aliases })),
                { maxEditDistance: 2 }
              ),
              q = n.agentId === void 0,
              z = h === void 0 && w !== r ? ue(k, q).find((_) => _.name === w && Lln(_)) : void 0,
              F =
                z !== void 0 &&
                Rq(w) &&
                !vJ(w) &&
                !ke(z, n) &&
                dJe(z, {
                  commandName: w,
                  userTypedThisTurn: !1,
                  isMainSession: q,
                  permissionContext: n.permissions()
                }) === null;
            if (F) a("tengu_skill_tool_unprefixed_match", {});
            let O = h ?? (F ? w : void 0);
            m("skill_invoke", "skill_invoke_not_found");
            let D = await Zer()?.catch(() => {
                return;
              }),
              N = D && fe(r, D.errors, new Set(D.enabled.map((_) => _.name))),
              P = O ? `Unknown skill: ${r}. Did you mean ${O}?` : `Unknown skill: ${r}`;
            return { result: !1, message: N ? `${P}${O ? "" : "."} ${N}` : P, errorCode: 2 };
          }
          if (ke(y, n))
            return (
              m("skill_invoke", "skill_invoke_fork_recursion"),
              a("tengu_skill_tool_fork_recursion_blocked", {}),
              {
                result: !1,
                message: `Skill ${r} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${Ao} tool.`,
                errorCode: 9
              }
            );
          let W = await Me(r, y, k, n.storageV5),
            U = dJe(y, {
              commandName: W ? r : y.name,
              userTypedThisTurn:
                !Hce(n) &&
                Pe(r, {
                  agentId: n.agentId,
                  messages: n.messages(),
                  turnStartIndex: n.turnStartIndex
                }) &&
                W,
              isMainSession: n.agentId === void 0,
              permissionContext: void 0
            });
          if (U !== null) {
            switch (U.reason) {
              case "disable_model_invocation": {
                let { sanitizedName: E, skillNameHash: h } = m8({
                  rawName: r,
                  canonicalName: y.name,
                  isMcp: y.loadedFrom === "mcp",
                  isBuiltIn: GF().has(r),
                  isBundled: y.type === "prompt" && y.source === "bundled",
                  isOfficial: y.type === "prompt" && vQ(y)
                });
                m("skill_invoke", "skill_invoke_model_disabled", { command_name: E, ...h });
                break;
              }
              case "not_loaded":
                m("skill_invoke", "skill_invoke_not_materialized");
                break;
              case "not_allowlisted":
                m("skill_invoke", "skill_invoke_not_allowlisted");
                break;
              case "override_disabled":
                m(
                  "skill_invoke",
                  U.hiddenBehindPlugin
                    ? "skill_invoke_hidden_behind_plugin"
                    : U.killSwitchOnly
                      ? "skill_invoke_bundled_skills_disabled"
                      : "skill_invoke_override_disabled"
                );
                break;
              case "not_prompt_type":
                m("skill_invoke", "skill_invoke_not_prompt_type");
                break;
              case "mcp_prompt":
                break;
              case "deny_rule":
                break;
            }
            return { result: !1, message: U.message, errorCode: U.errorCode };
          }
          return { result: !0 };
        },
        async checkPermissions({ skill: i, args: s }) {
          let d = i.trim(),
            r = d.startsWith("/") ? d.substring(1) : d,
            S = n.permissions(),
            v = await ie(n),
            k = se(r, v, n),
            l = k.command,
            y = k.kind === "ambiguous" ? k.candidates : [l],
            w = jre(S, l3e, "deny");
          for (let [P, _] of w.entries())
            if (y.some((I) => qCo(P, r, I)))
              return {
                behavior: "deny",
                message: "Skill execution blocked by permission rules",
                decisionReason: { type: "rule", rule: _ }
              };
          let W = () => nLt() && vJ(r) && !(l !== void 0 && DEe(l)),
            U = jre(S, l3e, "ask");
          if (U.size > 0 && G8()) {
            for (let [P, _] of U.entries())
              if (y.some((I) => iNs(P, r, I)))
                return {
                  behavior: "ask",
                  message: `Execute skill: ${r}`,
                  decisionReason: { type: "rule", rule: _ },
                  ...(W() && { suppressAlwaysAllowRule: !0 }),
                  updatedInput: { skill: i, args: s },
                  metadata: l ? { command: l } : void 0
                };
          }
          let E = jre(S, l3e, "allow"),
            h;
          for (let [P, _] of E.entries()) {
            let I = aNs(P, r, l);
            if (I === "allow")
              return {
                behavior: "allow",
                updatedInput: { skill: i, args: s },
                decisionReason: { type: "rule", rule: _ }
              };
            if (I === "held-back-nonholder") h = { rule: P, kind: "nonholder" };
            else if (I === "held-back-boundary") h ??= { rule: P, kind: "boundary" };
          }
          if (l?.type === "prompt" && (Le(l) || Hce(n)))
            return {
              behavior: "allow",
              updatedInput: { skill: i, args: s },
              decisionReason: void 0
            };
          let q =
              l?.type === "prompt" && l.source === "plugin"
                ? l.pluginInfo?.pluginManifest.name
                : void 0,
            z = W(),
            F = h === void 0 ? void 0 : z ? "nonholder" : h.kind;
          if (F !== void 0 && S.mode !== "bypassPermissions" && tj(S, l3e) === null) Ee(F);
          let O =
              h === void 0 || F === void 0
                ? void 0
                : lNs(
                    h.rule,
                    l?.name ?? r,
                    F === "nonholder" ? { kind: "nonholder", pluginName: q } : { kind: "boundary" }
                  ),
            D = O === void 0 ? void 0 : { type: "other", reason: O };
          if (z)
            return {
              behavior: "ask",
              message: `Execute skill: ${r}${O ? ` \u2014 ${O}` : ""}`,
              decisionReason: D,
              suppressAlwaysAllowRule: !0,
              updatedInput: { skill: i, args: s },
              metadata: l ? { command: l } : void 0
            };
          let N = [
            {
              type: "addRules",
              rules: [{ toolName: Ao, ruleContent: r }],
              behavior: "allow",
              destination: "localSettings"
            },
            {
              type: "addRules",
              rules: [{ toolName: Ao, ruleContent: `${r}:*` }],
              behavior: "allow",
              destination: "localSettings"
            }
          ];
          return {
            behavior: "ask",
            message: `Execute skill: ${r}${O ? ` \u2014 ${O}` : ""}`,
            decisionReason: D,
            suggestions: N,
            updatedInput: { skill: i, args: s },
            metadata: l ? { command: l } : void 0
          };
        },
        call(i, s) {
          if (!s.runEngine)
            return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
          return s.runEngine(De, {
            input: i,
            parentMessage: s.parentMessage,
            onProgress: s.onProgress,
            timing: s.timing
          });
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, n) {
      if ("status" in e && e.status === "forked")
        return {
          type: "tool_result",
          tool_use_id: n,
          content: e.background
            ? `Skill "${e.commandName}" launched (forked execution, running in the background).

${e.result}`
            : `Skill "${e.commandName}" completed (forked execution).

Result:
${e.result}`
        };
      if ("readOnly" in e && e.readOnly)
        return {
          type: "tool_result",
          tool_use_id: n,
          content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`
        };
      return { type: "tool_result", tool_use_id: n, content: `Launching skill: ${e.commandName}` };
    },
    renderToolUseMessage: ge
  }),
  Be = new Set([
    "type",
    "progressMessage",
    "contentLength",
    "contentHash",
    "getLoadedSkillMd",
    "skillFile",
    "argNames",
    "model",
    "effort",
    "source",
    "pluginInfo",
    "serverAttribution",
    "disableNonInteractive",
    "skillRoot",
    "skillDir",
    "context",
    "agent",
    "background",
    "getPromptForCommand",
    "getEffort",
    "getDefaultEffort",
    "onUserTypedArgs",
    "getContext",
    "formatForegroundForkResult",
    "declaredFields",
    "pluginSource",
    "metadata",
    "createdBy",
    "fallback",
    "unqualifiedName",
    "allowlistedByFullNameOnly",
    "denyMatchNames",
    "directoryListingName",
    "bareNameReserved",
    "reservedLabels",
    "fromHostCatalog",
    "shedAliases",
    "name",
    "description",
    "menuDescription",
    "hasUserSpecifiedDescription",
    "isEnabled",
    "isHidden",
    "aliases",
    "subcommands",
    "subcommandsBareOnly",
    "isMcp",
    "mcpInfo",
    "argumentHint",
    "whenToUse",
    "paths",
    "version",
    "disableModelInvocation",
    "disableBridgeInvocation",
    "userInvocable",
    "loadedFrom",
    "immediate",
    "userFacingName",
    "getArgumentCompletions"
  ]);
function Le(e) {
  for (let n of Object.keys(e)) {
    if (Be.has(n)) continue;
    let i = e[n];
    if (i === void 0 || i === null) continue;
    if (Array.isArray(i) && i.length === 0) continue;
    if (typeof i === "object" && !Array.isArray(i) && Object.keys(i).length === 0) continue;
    return !1;
  }
  return !0;
}
function ze({
  messages: e,
  contextMessages: n,
  commandName: i,
  args: s,
  priorContent: d,
  renderedContent: r
}) {
  if (!d || !r) return e;
  if (
    e.some((l) => l.type === "user" && (l.promptShellHandOff !== void 0 || l.mcpSkill !== void 0))
  )
    return e;
  let S = f0t(n, d);
  if (!S) return e;
  if (d !== r) {
    let l = d.endsWith(CGn)
      ? `(Re-invocation of /${i} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)`
      : `(Re-invocation of /${i} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
    return [Oe({ content: l, isMeta: !0 }), ...e];
  }
  let v = !1,
    k = e.map((l) => {
      if (RGn(l) !== r) return l;
      return (
        (v = !0),
        Oe({
          content:
            S === "attachment"
              ? `Skill /${i} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${s ? ` Arguments: ${s}` : ""}`
              : `Skill /${i} is already loaded above; instructions unchanged.${s ? ` Arguments: ${s}` : ""}`,
          isMeta: !0
        })
      );
    });
  if (v) t(`SkillTool eliding byte-identical re-invocation of skill ${i}`);
  return k;
}
function je(e, n) {
  if (!n) return e;
  return e.map((i) => {
    if (i.type === "user") return { ...i, sourceToolUseID: n };
    return i;
  });
}
function We(e, n) {
  let i = e.message.content.find((s) => s.type === "tool_use" && s.name === n);
  return i && i.type === "tool_use" ? i.id : void 0;
}
function He() {
  return Tj() === "default" ? " (use the Agent tool instead)" : "";
}
function Ve() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${DA() && vd() ? `\`find\`/${uo}, \`grep\`/${Ar}, and ${qe}` : `${uo}, ${Ar}, and ${qe}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${ns} if you need to clarify approaches
6. Exit plan mode with ${sS} when ready to implement

`;
}
function Ge() {
  let e = He();
  return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${ns} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${Ve()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`;
}
function Se() {
  return Ge();
}
var Ye = p(() => Ue({})),
  Ke = p(() => u({ message: o().describe("Confirmation that plan mode was entered") })),
  QDn = tn({
    name: Qv,
    searchHint: "switch to plan mode to design an approach before coding",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt() {
      return Se();
    },
    get inputSchema() {
      return Ye();
    },
    get outputSchema() {
      return Ke();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !0,
    isEnabled() {
      return e3.isEnabled();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      return {
        async validateInput(n) {
          if (e.agentId)
            return {
              result: !1,
              message: "Only the main session can enter plan mode.",
              errorCode: 1
            };
          return { result: !0 };
        },
        async checkPermissions(n) {
          let { mode: i } = e.permissions();
          return J() && i !== "auto" && i !== "plan"
            ? {
                behavior: "ask",
                message: "Enter plan mode?",
                updatedInput: n,
                personOnly: !0,
                decisionReason: {
                  type: "safetyCheck",
                  reason:
                    "In plan mode, an automatic check may approve read-only actions that you would otherwise be asked about.",
                  classifierApprovable: !1
                }
              }
            : { behavior: "allow", updatedInput: n };
        },
        async call(n) {
          if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
          return (
            KSe(e.permissions().mode, "plan"),
            e.setToolPermissionContext((i) =>
              Ju(AMt(i), { type: "setMode", mode: "plan", destination: "session" })
            ),
            {
              data: {
                message:
                  "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
              }
            }
          );
        }
      };
    },
    mapToolResultToToolResultBlockParam({ message: e }, n) {
      return {
        type: "tool_result",
        content: `${e}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${ns} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${sS} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: n
      };
    }
  });
export { QDn, O_s, dbr, l3e };

//# sourceMappingURL=chunk-sb2f74gp.js.map
