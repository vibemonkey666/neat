// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br } from "./chunk-6bbdndfe.js";
import { L, U } from "./chunk-wrtp8qz8.js";
import { Nt } from "./chunk-4hww8411.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { $m } from "./chunk-zjm5ncxc.js";
import { Nl } from "./chunk-t86k189s.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { Wg } from "./chunk-d54avynm.js";
import { Ha, Sb, rc, mH } from "./chunk-ajtyjx88.js";
import { An } from "./chunk-at88wjsn.js";
import { Z } from "./chunk-p27rr8yn.js";
import { aIs, pp, Ru } from "./chunk-j0tbz6ra.js";
import { tR, Umn, cQn } from "./chunk-wany0nxw.js";
import { yp } from "./chunk-m5rm7nsm.js";
import { Df, lQ } from "./chunk-yyq6mj0n.js";
import { Yee } from "./chunk-t6k5fjxp.js";
import {
  Xmr,
  Jmr,
  Qmr,
  F6,
  ZPn,
  Zmr,
  Rlt,
  egr,
  tIn,
  Eno,
  kno,
  FX,
  ngr,
  rgr,
  rIn
} from "./chunk-bwt94x0y.js";
import { BW } from "./chunk-4067vyrh.js";
import { AQt, jct, QLn } from "./chunk-40d7g4g3.js";
import { yy } from "./chunk-hgshn9e7.js";
function x(r) {
  let { bySlug: n } = QLn();
  if (n.size === 0) return r;
  return r.map((o) => {
    let d = Math.min((n.get(o.slug) ?? 0) + (o.unattendedReplies ?? 0), jct);
    return d > 0 ? { ...o, unattendedReplies: d } : o;
  });
}
var O = 2000,
  R = "exit-handoff agent flush timeout";
function y() {
  let r = Yee.of(U().host).last;
  return [
    ...(Sb()?.adoptShellOutputReadRoot ? [Sb().adoptShellOutputReadRoot] : []),
    ...(r ? [Umn(cQn(r.worktreePath))] : [])
  ];
}
function E(r) {
  let n = rc() ? mH() : void 0,
    o =
      n && Z().builtInArtifactHiddenForMcp
        ? L([
            ...Array.from(Z().live.supervisors.values())
              .filter((e) => e.autoReactWiring !== void 0)
              .map((e) => e.slug),
            ...Object.values(r).flatMap((e) =>
              e.type === "monitor_ws" &&
              e.status === "running" &&
              e.autoReactArmed === !0 &&
              e.frameLive !== void 0
                ? [e.frameLive.slug]
                : []
            )
          ])
        : [];
  if (!n || i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let e = Z().live;
      if ((tIn(n), e.bootingWiredArms.size > 0))
        f("artifact_live_subscribe", "booting_consent_uncarried");
      AQt(new Set([...e.inFlightSubscribes, ...o]));
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      wakeOnlyFrameLiveSlugs: o,
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: Sb()?.adoptShellOutputRoot ?? tR(),
      mergeShellOutputReadRoots: y()
    };
  }
  let d = FX(r),
    c = Object.values(r),
    p = c.filter((e) => rIn(e, d)),
    u = c.filter((e) => rgr(e, d)),
    S = egr(n),
    T = (e) => !Z().autoReact.userDisarmed && !yy(e.slug),
    b = tIn(n),
    v = x(
      Zmr([
        { entries: ZPn(r), fallbackBasis: Date.now() },
        { entries: b.filter(T), fallbackBasis: Date.now() },
        { entries: kno(n).filter(T), fallbackBasis: Date.now() }
      ])
    ),
    k = new Set(v.map((e) => e.slug)),
    h = Z().live;
  if ([...h.bootingWiredArms.keys()].some((e) => !k.has(e)))
    f("artifact_live_subscribe", "booting_consent_uncarried");
  return (
    AQt(new Set([...k, ...h.inFlightSubscribes, ...o])),
    {
      shells: c.filter((e) => ngr(e, d) && e.agentId === void 0),
      workflows: p,
      agents: u,
      unresumedAgents: S.agents,
      unresumedWorkflows: S.workflows,
      frameLive: v,
      frameLiveTaskIds: Object.values(r)
        .filter((e) => F6(e) && e.frameLive !== void 0 && k.has(e.frameLive.slug))
        .map((e) => e.id),
      wakeOnlyFrameLiveSlugs: o,
      jobDir: n,
      agentTranscriptPaths: Object.fromEntries(u.map((e) => [e.agentId, $m(Br(e.agentId))])),
      workflowTranscriptDirs: Object.fromEntries(
        p.map((e) => [e.workflowRunId, BW(e.workflowRunId)])
      ),
      projectTempDir: Sb()?.adoptShellOutputRoot ?? tR(),
      mergeShellOutputReadRoots: y()
    }
  );
}
function F(
  {
    shells: r,
    workflows: n,
    agents: o,
    unresumedAgents: d,
    unresumedWorkflows: c,
    frameLive: p,
    jobDir: u,
    agentTranscriptPaths: S,
    workflowTranscriptDirs: T,
    projectTempDir: b,
    mergeShellOutputReadRoots: v
  },
  k
) {
  for (let e of n) e.abortController?.abort(Nl("background"));
  for (let e of o) e.abortController?.abort(Nl("background"));
  let h = (async () => {
    let e = [];
    if (o.length > 0) {
      try {
        await Nt(
          (async () => {
            (await Wg(), await Ru());
          })(),
          O,
          R
        );
      } catch (s) {
        let A = s instanceof Error && s.message === R;
        (f("task_local_agent_exit_handoff", A ? "flush_timeout" : "flush_failed"),
          t(`exit handoff: agent transcript flush failed: ${s}`, { level: "warn" }));
      }
      e = await Promise.all(o.map((s) => Jmr(s, { derivedTranscriptPath: S[s.agentId] })));
    }
    e.push(...d);
    let w = (await Promise.all(r.map((s) => Xmr(s, { rerootOutputsTo: b })))).filter(
        (s) => s !== null
      ),
      _ = [
        ...(await Promise.all(n.map((s) => Qmr(s, { derivedTranscriptDir: T[s.workflowRunId] })))),
        ...c
      ];
    if ((w.length === 0 && _.length === 0 && e.length === 0 && p.length === 0) || !u) return;
    try {
      if (
        (await Rlt(
          u,
          {
            writtenAtMs: Date.now(),
            origin: "exit",
            shells: w,
            cron: [],
            workflows: _,
            agents: e,
            ...(p.length > 0 && { frameLive: p })
          },
          { mergeShellOutputRoot: [b, ...(v ?? [])] },
          k
        ),
        a("tengu_adopt_exit_handoff", {
          adopted_shells: w.length,
          adopted_workflows: _.length,
          adopted_agents: e.length,
          adopted_frame_live: p.length
        }),
        w.length > 0)
      )
        g("task_local_shell_exit_handoff");
      if (_.length > 0) g("task_local_workflow_exit_handoff");
      if (e.length > 0) g("task_local_agent_exit_handoff");
      t(
        `exit handoff: ${w.length} background shell(s), ${_.length} workflow(s), ${e.length} agent(s), and ${p.length} comment-monitoring consent record(s) handed to the next wake of this session`
      );
    } catch (s) {
      for (let A of r)
        try {
          A.shellCommand?.kill();
        } catch {}
      if (r.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (e.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (p.length > 0 && u !== void 0)
        (Eno(u, p), m("artifact_live_subscribe", "consent_exit_write_failed"));
      t(`exit handoff: adopt.json write failed: ${s}`, { level: "warn" });
    }
  })();
  return (aIs(h), h);
}
function y8t(r, n) {
  let o = E(r),
    d =
      o.shells.length > 0 ||
      o.workflows.length > 0 ||
      o.agents.length > 0 ||
      o.unresumedAgents.length > 0 ||
      o.unresumedWorkflows.length > 0 ||
      o.frameLive.length > 0
        ? F(o, n)
        : void 0,
    c = new Set([...o.shells, ...o.workflows, ...o.agents].map((p) => p.id));
  return (Vmr(r, c), d);
}
function Vmr(r, n = new Set()) {
  for (let o of Object.values(r)) {
    if (o.status !== "running" || n.has(o.id)) continue;
    try {
      if (pp(o)) (o.shellCommand?.kill(), o.shellCommand?.cleanup());
      else if (An()) {
        yp(o.id);
        continue;
      } else if ("abortController" in o) o.abortController?.abort();
      if (!Df(o))
        Ha(o.id, "stopped", { toolUseId: o.toolUseId, summary: o.description, ambient: lQ(o) });
      yp(o.id);
    } catch (d) {
      l(d);
    }
  }
}
export { y8t, Vmr };

//# sourceMappingURL=chunk-rewa5rgp.js.map
