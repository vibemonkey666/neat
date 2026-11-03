// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br } from "./chunk-6bbdndfe.js";
import { tt, no, ye, J, Ol } from "./chunk-wrtp8qz8.js";
import { Ye, Fs } from "./chunk-fs43t96t.js";
import { xf } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { Rq, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ha, aI, lp, Lnt, Rj } from "./chunk-ajtyjx88.js";
import { hTe } from "./chunk-6h7ejyet.js";
import { jx } from "./chunk-vchq4g74.js";
import { hr } from "./chunk-dc0nzty2.js";
import { q_ } from "./chunk-cjnzngfc.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import {
  Fjn,
  kLt,
  DN,
  dge,
  oG,
  Cl,
  PXe,
  $je,
  O3,
  $mt,
  Ale,
  pAo,
  TD,
  gp,
  Oe,
  Bl,
  QPo,
  HJe,
  LJe
} from "./chunk-j0tbz6ra.js";
import { mr } from "./chunk-spwjh8kb.js";
import { ud } from "./chunk-rve8yzwm.js";
import { ur, aNe, Fi } from "./chunk-t86k189s.js";
import { Rt } from "./chunk-wany0nxw.js";
import { Ao, ae, Dc } from "./chunk-ar6ynjt8.js";
import { yp } from "./chunk-m5rm7nsm.js";
import { sht, HL } from "./chunk-yyq6mj0n.js";
import { G1 } from "./chunk-5bpsfngr.js";
import { $k } from "./chunk-2gvtp5cn.js";
import { p_t } from "./chunk-qg3fkqqr.js";
import { zR, ste } from "./chunk-x3dkgs4r.js";
import { vvs } from "./chunk-szvp3b8n.js";
import { xIe } from "./chunk-p8e74wwb.js";
import { cs } from "./chunk-eacq4pgt.js";
import { doe } from "./chunk-m18k9mtt.js";
import { dirname as V, resolve as W } from "path";
var H = 100;
async function O(o) {
  if (mr("skills") || !Qt("projectSettings") || ud("skills") || no() !== null || J()) return [];
  let r = hr(o);
  if (r === null) return [];
  let n = await G1(r);
  if (!n.ok) return [];
  let i = await PXe(r, [...n.args, "status", "--porcelain", "-z", q_, "--untracked-files=normal"]);
  if (!i.ok) return [];
  let m = i.stdout.split("\x00"),
    s = new Map();
  for (let e = 0; e < m.length; e++) {
    let u = m[e] ?? "";
    if (u.length < 4) continue;
    let c = [u.slice(3)];
    if (/[RC]/.test(u.slice(0, 2))) (e++, c.push(m[e] ?? ""));
    for (let p of c) {
      let d = W(r, p);
      if (p !== "" && d !== r && s.size < H && xf(r, d, { alreadyComparable: !0 })) s.set(V(d), d);
    }
  }
  return [...s.values()];
}
function xuo(o, r, n) {
  return o.filter(
    (i) =>
      i.type === "prompt" &&
      kLt(i, r) &&
      dge(i) &&
      Rq(i.name) &&
      !(i.context === "fork" && n !== void 0 && DN(i) === n)
  );
}
async function aQt(o, r, n) {
  if (o.type !== "prompt" || o.unqualifiedName != null) return null;
  if (r !== null && n.session !== void 0 && hTe(o.name) !== null)
    try {
      let s = await O(r);
      if (s.length > 0) await HJe(await QPo(n.session.host, s, r, n.storageV5));
    } catch (s) {
      if (Fs(s)) t(`[skills] Changed files not searched for nested skills: ${s}`);
      else l(s);
    }
  if (LJe().length === 0 && Ol().length === 0) return null;
  if (!n.options.tools.some((s) => Rt(s, Ao))) return null;
  let i = xuo(await gp(r, n.storageV5), o.name, n.options.spawnedBySkill);
  if (i.length === 0) return null;
  let m = i.map((s) => {
    let e = s.name.slice(0, s.name.length - o.name.length - 1);
    return `- \`${s.name}\` \u2014 for files under ${e}/`;
  });
  return (
    a("tengu_skill_scoped_variant_note", { variant_count: i.length }),
    Oe({
      content: Bl(
        [
          `Directory-scoped variants of the "${o.name}" skill exist in this repo:`,
          ...m,
          `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${Ao} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.`
        ].join(`
`)
      ),
      isMeta: !0
    })
  );
}
function TLn(o, r, n) {
  if (n || r.spawnedByWorkflowRunId !== void 0 || doe() || ye()) return !1;
  return o.background ?? !0;
}
async function ALn({
  agentId: o,
  agentDefinition: r,
  command: n,
  description: i,
  prompt: m,
  promptMessages: s,
  context: e,
  canUseTool: u,
  getAppState: c,
  permissionLayers: p,
  readFileState: d,
  availableTools: A,
  webFetchReadmissionAllowed: S,
  spawnedBySkill: y,
  recordInvocationOnSuccess: T,
  frozenCommandDenies: v
}) {
  let { taskRegistry: h } = e,
    E = Date.now(),
    w = i.length > 50 ? re(i, 49) + "\u2026" : i,
    C = lp(e.agentContext) + 1,
    _ = oG(r.model, Dc(e), n.model, ae(e).mode),
    M = () => {
      if (e.abortController.signal.aborted) {
        if (Fi(e.abortController.signal.reason) !== "interrupt") throw new Ye();
      }
      for (let k of Object.values(h.all()))
        if (k.type === "local_agent" && !cs(k.status) && k.forkedSkillName === n.name)
          return (f("subagent_launch", "forked_skill_live_duplicate"), !0);
      return !1;
    };
  if (M()) return null;
  let L = $k();
  if (C > L) return (f("subagent_launch", "forked_skill_depth_cap"), null);
  let D = {
    skillName: n.name,
    attributionName: y,
    ...(r.effort !== void 0 && { effort: r.effort }),
    ...(v !== void 0 && v.length > 0 && { frozenCommandDenies: [...v] })
  };
  if (!Fjn().safeParse(D).success)
    return (f("subagent_launch", "forked_skill_scoping_unpersistable"), null);
  try {
    await vvs(Br(o), D, e.storageV5);
  } catch (k) {
    return (G(k), f("subagent_launch", "forked_skill_scoping_write_failed"), null);
  }
  if (M()) return null;
  let I = O3(e.agentId, h) ?? tt(),
    R = $mt(e, I),
    N = Ale({
      outputFileReadable: TD(e.options.tools),
      ownerCanContinueAgents: R,
      agentId: o,
      ownerAgentId: I,
      parentAgentId: e.agentId,
      spawnDepth: C,
      description: w,
      prompt: m,
      model: _,
      selectedAgent: r,
      taskRegistry: h,
      toolUseId: e.toolUseId,
      forkedSkillName: n.name,
      sessionScratch: e.session.sessionScratch
    }),
    B = N.abortController,
    b = e.agentLifecycle.allocateName(n.name);
  (e.agentLifecycle.registerName(b, Br(o)), HL(O3(e.agentId, h), `agent:${o}`, h));
  let F = {
      agentId: o,
      parentAgentId: e.agentId,
      depth: C,
      ...(Lnt(e) && { spawnedByMainThread: !0 }),
      parentSessionId: jx(),
      agentType: "subagent",
      subagentName: r.agentType,
      isBuiltIn: Cl(r),
      displayName: b,
      isAsync: !0,
      isBackgroundAgent: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...Rj(e.agentContext)
    },
    P = {
      prompt: m,
      resolvedAgentModel: _,
      isBuiltInAgent: Cl(r),
      startTime: E,
      agentType: r.agentType,
      isAsync: !0,
      agentDepth: C,
      callerCanContinueAgents: R,
      source: r.source
    };
  return (
    aI(F, () =>
      ste({
        taskId: N.agentId,
        abortController: B,
        makeStream: (k, U, j) =>
          zR({
            agentDefinition: r,
            promptMessages: s,
            turnPrompt: m,
            toolUseContext: { ...e, getAppState: c, permissionLayers: p },
            canUseTool: u,
            isAsync: !0,
            querySource: "agent:custom",
            spawnedBySkill: y,
            spawnedByForkedSkill: !0,
            model: n.model,
            onModelRestricted: xIe(y, e.appendSystemMessage),
            availableTools: A,
            webFetchReadmissionAllowed: S,
            override: { agentId: Br(o), agentContext: F, abortController: B, readFileState: d },
            onCacheSafeParams: k,
            onQueryProgress: U,
            onStreamTokenEstimate: j,
            description: w,
            name: b
          }),
        metadata: { ...P, agentContext: F },
        description: w,
        toolUseContext: e,
        taskRegistry: h,
        agentIdForCleanup: o,
        enableSummarization: !0,
        getWorktreeResult: async () => ({}),
        onTerminalSuccess: T
      })
    ),
    g("subagent_launch"),
    { agentId: o, name: b }
  );
}
function G(o) {
  t(`Failed to write forked-skill scoping sidecar: ${o}`);
}
function CLn({
  agentId: o,
  parentAgentId: r,
  spawnDepth: n,
  skillName: i,
  prompt: m,
  selectedAgent: s,
  taskRegistry: e,
  toolUseId: u,
  callerAbortController: c
}) {
  if (!p_t()) return { abortController: c, remove() {} };
  let p = ur(),
    d = aNe(c, p),
    A = sht(o, p);
  $je(o);
  let S = `/${i}`,
    y = pAo({
      agentId: o,
      ownerAgentId: O3(r, e) ?? tt(),
      parentAgentId: r,
      spawnDepth: n,
      description: S,
      prompt: m,
      selectedAgent: s,
      toolUseId: u,
      abortController: p,
      forkWorker: !0
    });
  return (
    e.register(y),
    {
      abortController: p,
      remove(T) {
        (d(),
          A(),
          e.remove(o),
          yp(o),
          Ha(o, p.signal.aborted ? "stopped" : T, {
            toolUseId: u,
            summary: S,
            outputFile: y.outputFile,
            skipTranscript: !0,
            ambient: !0
          }));
      }
    }
  );
}
export { TLn, ALn, CLn, xuo, aQt };

//# sourceMappingURL=chunk-jgs1ysys.js.map
