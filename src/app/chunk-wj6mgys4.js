// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ha, ry, aI, lp } from "./chunk-ajtyjx88.js";
import { Br } from "./chunk-6bbdndfe.js";
import { De } from "./chunk-2qx8pe6s.js";
import { rie, F, L, ye } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { X } from "./chunk-4hww8411.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Bn } from "./chunk-9z5ybxhe.js";
import { U0 } from "./chunk-d54avynm.js";
import { ur } from "./chunk-t86k189s.js";
import { Ya } from "./chunk-jwqtbev0.js";
import { fM } from "./chunk-r1dvrqha.js";
import { Xsi } from "./chunk-vchq4g74.js";
import { e5n } from "./chunk-0ftmer97.js";
import { sce, Nbt, KP, jG } from "./chunk-d5zj5299.js";
import {
  _c,
  T3,
  qOe,
  _Xe,
  Op,
  dke,
  SK,
  hle,
  I3,
  K4,
  pMe,
  kD,
  $zn,
  Fzn,
  Uzn,
  Nmt,
  j0t,
  CP,
  eWe,
  xMe,
  cG,
  E1,
  JOr,
  lWe,
  iv,
  DK,
  Kle,
  Cin,
  Xs,
  Oe
} from "./chunk-j0tbz6ra.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { W8 } from "./chunk-39ayby14.js";
import { yp } from "./chunk-m5rm7nsm.js";
import { qC } from "./chunk-n3589fe4.js";
import { Li } from "./chunk-f7aya6cs.js";
import { aLr, WJe, HUs, ox, cht, wan } from "./chunk-yyq6mj0n.js";
import { JGe } from "./chunk-taha171j.js";
import { jcn } from "./chunk-7yq9w6fa.js";
import {
  Zhe,
  jL,
  DVs,
  lNo,
  qTe,
  PG,
  G7e,
  Vv,
  kFr,
  cHe,
  cU,
  uHe,
  Kcn,
  fze,
  dv,
  U6n,
  $Bt,
  Zyt,
  UBt,
  e_t,
  Jcn,
  Qcn,
  i$,
  Zcn,
  GBt
} from "./chunk-bydv9c9r.js";
import { Lk, WA, S8 } from "./chunk-s4n2rnah.js";
import { p5n } from "./chunk-z0mss2jj.js";
import { UXt, qXt, YXt, T_s, rct, JDn } from "./chunk-cqd2httk.js";
import { Vvs } from "./chunk-t7ft03m9.js";
import { xwr, zR } from "./chunk-x3dkgs4r.js";
import { odo } from "./chunk-m01sefw0.js";
import { cbr } from "./chunk-88y2srrb.js";
import { y$n, eZt, tZt } from "./chunk-w3wwf73p.js";
import { IBt, O6n, M6n } from "./chunk-j5yprdsd.js";
import { Mn } from "./chunk-8gjxvrgz.js";
var Ve = 500,
  Re = 500;
function He(n, e, s, v, i) {
  return async (I, p, S, y, D, H) => {
    let A = H ?? (await pMe(I, p, { ...S, asksNoHost: !0 }, y, D, T3, void 0, v));
    if (A.behavior !== "ask") return A;
    if (A.hostDisplay !== void 0)
      return (
        m("permission_host_worded_ask", "teammate_lane"),
        qOe(I.name, "a teammate's permission request", {
          hostWorded: !0,
          remedy:
            "Ask the team lead to run this tool call itself. When the team lead runs it, the permission prompt shows the full disclosure."
        })
      );
    let q = A.updatedInput ?? p;
    if (e.signal.aborted) return { behavior: "ask", message: DK };
    let N = ae(S),
      E = () =>
        I.description(q, {
          isNonInteractiveSession: S.options.isNonInteractiveSession,
          toolPermissionContext: N,
          tools: S.options.tools
        });
    if (S.requestDialog !== void 0) {
      let o = JDn.of(S.session).permissionContextSetter,
        P = qXt(I, p, S, y, D, v, (j) => {
          o?.((G) =>
            KP(
              G,
              j.filter((W) => W.type !== "setMode")
            )
          );
        }),
        T = await UXt({
          ctx: P,
          updatedInput: A.updatedInput,
          suggestions: A.suggestions,
          permissionMode: N.mode,
          askSuppressesAlwaysAllowRule: A.suppressAlwaysAllowRule === !0,
          askIsPersonOnly: A.personOnly === !0
        });
      if (T) return T;
      if (e.signal.aborted) return { behavior: "ask", message: DK };
      let R = await E();
      if (e.signal.aborted) return { behavior: "ask", message: DK };
      let d = Date.now();
      try {
        return await new Promise((j, G) => {
          YXt({ ctx: P, description: R, result: A, awaitAutomatedChecksBeforeDialog: !0 }, j).catch(
            G
          );
        });
      } finally {
        s(Date.now() - d);
      }
    }
    if (_Xe(A) || A.forcedByCaller === !0)
      return qOe(I.name, "the teammate mailbox (a static-description wire)", {
        hostWorded: A.hostDisplay !== void 0
      });
    let C = await E();
    if (e.signal.aborted) return { behavior: "ask", message: DK };
    return new Promise((o) => {
      let u = O6n({
        toolName: I.name,
        toolUseId: D,
        input: q,
        description: C,
        permissionSuggestions: A.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      (y$n({
        requestId: u.id,
        toolUseId: D,
        toolName: u.toolName,
        inputDigest: IBt(u.toolName, q),
        onAllow(d, j, G, W) {
          R();
          let J = W8(j, void 0, ae(S)),
            ee =
              I.suppressesAllPermissionUpdates?.(q) === !0
                ? K4(J)
                : I.suppressesAlwaysAllowRule?.(q) === !0 || A.suppressAlwaysAllowRule === !0
                  ? I3(J, I, ae(S))
                  : J;
          jG(ee, S.storageV5).catch(l);
          let ne = d && Object.keys(d).length > 0 ? d : q;
          o({
            behavior: "allow",
            updatedInput: ne,
            userModified: !1,
            ...(W && W.length > 0 && { contentBlocks: W })
          });
        },
        onReject(d, j) {
          R();
          let G = d ? `${Kle}${d}` : DK;
          o({ behavior: "ask", message: G, contentBlocks: j });
        },
        onRefuse(d) {
          (R(), o({ behavior: "ask", message: d }));
        },
        onUnboundVerdict() {}
      }),
        M6n(u, S.storageV5).then((d) => {
          if (!d)
            (R(),
              o({
                behavior: "ask",
                message:
                  "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
              }));
        }));
      let P = setInterval(
          async (d, j, G, W, J, ee, ne) => {
            if (d.signal.aborted) {
              (j(), G({ behavior: "ask", message: DK }));
              return;
            }
            let ie = await G7e(W.agentName, W.teamName, ee),
              fe = qTe(
                ie.filter((V) => V && !V.read),
                PG(W.agentName, W.teamName),
                { roster: ne(), isPaneTeammate: !1 }
              );
            for (let V of ie)
              if (V && !V.read && fe.get(V) !== "forged") {
                let B = UBt(V.text);
                if (B && B.request_id === J.id) {
                  if ((await kFr(W.agentName, W.teamName, V, ee), V.from !== Ya)) {
                    t(
                      `[InProcessRunner] Ignoring permission response from non-team-lead: ${V.from}`,
                      { level: "warn" }
                    );
                    continue;
                  }
                  if (B.subtype === "success")
                    tZt({
                      requestId: B.request_id,
                      toolUseId: B.tool_use_id,
                      approvedRequest: B.approved_request,
                      decision: "approved",
                      updatedInput: B.response?.updated_input,
                      permissionUpdates: B.response?.permission_updates
                    });
                  else
                    tZt({
                      requestId: B.request_id,
                      toolUseId: B.tool_use_id,
                      approvedRequest: B.approved_request,
                      decision: "rejected",
                      feedback: B.error
                    });
                  return;
                }
              }
          },
          Ve,
          e,
          R,
          o,
          n,
          u,
          S.storageV5,
          i
        ),
        T = () => {
          (R(), o({ behavior: "ask", message: DK }));
        };
      e.signal.addEventListener("abort", T, { once: !0 });
      function R() {
        (clearInterval(P), eZt(u.id), e.signal.removeEventListener("abort", T));
      }
    });
  };
}
function K(n, e, s) {
  s.update(n, (v) => (v.type === "in_process_teammate" ? e(v) : v));
}
async function Ye(n, e, s, v, i) {
  return Vv(Ya, { from: n, text: e, timestamp: new Date().toISOString(), color: s }, v, i);
}
async function Ie(n, e, s, v, i) {
  let I = $Bt(n, v),
    p;
  try {
    p = await Ye(n, _(I), e, s, i);
  } finally {
    Zyt(I, v?.result, p);
  }
  return p !== void 0;
}
function Je(n) {
  let e = new Set(n.filter((s) => s.status !== "completed").map((s) => s.id));
  return n.find((s) => {
    if (s.status !== "pending") return !1;
    if (s.owner) return !1;
    return s.blockedBy.every((v) => !e.has(v));
  });
}
function ze(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description)
    e += `

${n.description}`;
  return e;
}
async function Le(n, e, s, v) {
  if (!s) return;
  try {
    let i = await jL(n, v),
      I = Je(i);
    if (!I) return;
    let p = await DVs(n, I.id, e, void 0, v);
    if (!p.success) {
      t(`[inProcessRunner] Failed to claim task #${I.id}: ${p.reason}`);
      return;
    }
    return (
      await Zhe(n, I.id, { status: "in_progress" }, v),
      t(`[inProcessRunner] Claimed task #${I.id}: ${I.subject}`),
      ze(I)
    );
  } catch (i) {
    t(`[inProcessRunner] Error checking task list: ${i}`);
    return;
  }
}
async function Me(n, e, s, v, i, I) {
  let p;
  try {
    ((p = await G7e(n.agentName, n.teamName, v, { throwOnUnknownReadError: !0 })),
      (i.readFailures = 0));
  } catch (o) {
    return (
      i.readFailures++,
      t(
        `[inProcessRunner] ${n.agentName} could not read mailbox (${i.readFailures} consecutive): ${o}`,
        { level: "warn" }
      ),
      null
    );
  }
  let S = qTe(
      p.filter((o) => o && !o.read),
      PG(n.agentName, n.teamName),
      { roster: I, isPaneTeammate: !1 }
    ),
    y = (o) => S.get(o) === "forged",
    D = new Set(p.filter((o) => o && !o.read).map(cU));
  for (let o of i.consumedUnmarked) if (!D.has(o)) i.consumedUnmarked.delete(o);
  let H = async (o) => {
      let u = await lWe(o, {
          provenanceOf: (T) => S.get(T) ?? "unverifiable",
          agentId: n.resumableAgentId ?? n.agentId
        }),
        P = new Set(u.map(cU));
      for (let T of o) {
        let R = cU(T);
        if (!P.has(R)) i.consumedUnmarked.add(R);
      }
      return u;
    },
    A = -1,
    q = null;
  for (let o = 0; o < p.length; o++) {
    let u = p[o];
    if (u && !u.read && !y(u)) {
      let P = e_t(u.text),
        R =
          (S.get(u) === "verified" || u.from === Ya || lNo(u.from, I) !== void 0) &&
          P?.from === u.from
            ? P
            : null;
      if (R) {
        ((A = o), (q = R));
        break;
      }
    }
  }
  if (A !== -1) {
    if (i.count > 0) {
      let P = p.filter(
        (T, R) =>
          !T.read &&
          R !== A &&
          (y(T) || !i$(T.text)) &&
          !i.deliveredUnmarked.has(cU(T)) &&
          !i.consumedUnmarked.has(cU(T))
      );
      if (P.length > 0) {
        for (let d of P) i.deliveredUnmarked.add(cU(d));
        let T = await uHe(n.agentName, n.teamName, P, v);
        if (T) ((i.count = 0), (i.reported = !1), i.deliveredUnmarked.clear());
        else if (!i.reported)
          ((i.reported = !0), f("swarm_inbox_poll", "worker_mark_read_failed_streak"));
        t(
          `[inProcessRunner] ${n.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${T ? "" : " (mark still not landed)"}`,
          { level: T ? "debug" : "warn" }
        );
        let R = await H(P);
        if (R.length > 0) return { type: "new_messages", messages: R };
      }
    }
    let o = p[A],
      u = F(p.slice(0, A), (P) => !P.read);
    return (
      t(
        `[inProcessRunner] ${n.agentName} received shutdown request from ${q?.from} (prioritized over ${u} unread messages)`
      ),
      await kFr(n.agentName, n.teamName, o, v),
      { type: "shutdown_request", request: q, originalMessage: o.text, entryFrom: o.from }
    );
  }
  let N = [],
    E = [];
  for (let o of p) {
    if (!o || o.read) continue;
    if (!y(o) && i$(o.text)) N.push(o);
    else if (!i.consumedUnmarked.has(cU(o))) E.push(o);
  }
  let C = null;
  if (N.length > 0) {
    for (let u of N) {
      let P = Jcn(u.text);
      if (P && u.from === Ya) {
        let T = Vvs(e, P, s, v);
        if (T)
          (t(
            `[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${T.approved}`
          ),
            (C = Zcn(T)));
        else
          t(
            `[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`
          );
        continue;
      }
      if (Qcn(u.text)) {
        t(
          `[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`,
          { level: "warn" }
        );
        continue;
      }
      t(
        `[inProcessRunner] ${n.agentName} dropping protocol frame from ${u.from}: ${u.text.substring(0, 80)}`,
        { level: "warn" }
      );
    }
    if (!(await uHe(n.agentName, n.teamName, N, v)))
      t(
        `[inProcessRunner] ${n.agentName} could not mark ${N.length} protocol frame(s) read; retrying next poll`,
        { level: "warn" }
      );
  }
  if (C) return { type: "new_message", message: C, from: Ya };
  if (E.length > 0) {
    if (await uHe(n.agentName, n.teamName, E, v))
      ((i.count = 0), (i.reported = !1), i.deliveredUnmarked.clear());
    else {
      let P = ++i.count;
      if (P < cHe)
        return (
          t(
            `[inProcessRunner] ${n.agentName} could not mark ${E.length} message(s) read (${P}/${cHe}); delivery retried next poll`,
            { level: "warn" }
          ),
          null
        );
      if (
        (t(
          `[inProcessRunner] ${n.agentName} could not mark ${E.length} message(s) read for ${P} poll(s); delivering the batch unmarked`,
          { level: "warn" }
        ),
        !i.reported)
      )
        ((i.reported = !0), f("swarm_inbox_poll", "worker_mark_read_failed_streak"));
      for (let T of E) i.deliveredUnmarked.add(cU(T));
    }
    t(
      `[inProcessRunner] ${n.agentName} draining ${E.length} message(s) from ${L(E.map((P) => P.from)).join(", ")}`
    );
    let u = await H(E);
    if (u.length === 0) return null;
    return { type: "new_messages", messages: u };
  }
  if (i.count > 0) ((i.count = 0), (i.reported = !1), i.deliveredUnmarked.clear());
  return null;
}
async function Xe(n, e, s, v, i, I, p, S, y, D = !1, H) {
  t(`[inProcessRunner] ${n.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let A = Date.now(),
    q = !1,
    N = 0;
  while (!e.signal.aborted) {
    if (N > 0) await X(Re);
    N++;
    let E = v(),
      C = E.tasks[s];
    if (C && C.type === "in_process_teammate" && C.pendingUserMessages.length > 0) {
      let T = C.pendingUserMessages[0];
      return (
        K(s, (R) => ({ ...R, pendingUserMessages: R.pendingUserMessages.slice(1) }), i),
        t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${N})`),
        { type: "new_message", message: T.text, origin: T.origin, from: "user" }
      );
    }
    let o = n.resumableAgentId !== void 0 && eWe(n.resumableAgentId, i),
      u =
        D ||
        (C?.type === "in_process_teammate" && C.awaitingPlanApproval) ||
        E.viewingAgentTaskId === s ||
        wan(E.tasks, s) ||
        o;
    if (u) A = Date.now();
    if (D && C?.type === "in_process_teammate" && C.evictAfter !== void 0)
      K(s, (T) => ({ ...T, evictAfter: void 0 }), i);
    if (
      C?.type === "in_process_teammate" &&
      C.evictAfter !== void 0 &&
      ((o && C.evictAfter <= Date.now() + Re) || (q && !o))
    )
      K(s, (T) => ({ ...T, evictAfter: Date.now() + ox }), i);
    if (((q = o), e.signal.aborted))
      return (
        t(`[inProcessRunner] ${n.agentName} aborted while waiting (poll #${N})`),
        { type: "aborted" }
      );
    if (p) {
      if (kD()) {
        if (!u && Date.now() - A >= cht)
          return (
            t(`[inProcessRunner] ${n.agentName} idle timeout after ${cht}ms (poll #${N})`),
            { type: "idle_timeout" }
          );
      }
      continue;
    }
    t(`[inProcessRunner] ${n.agentName} poll #${N}: checking mailbox`);
    try {
      let T = await Me(n, s, i, H, y, v().teamContext?.teammates);
      if (T) return T;
      if (y.count > 0 && y.readFailures < cHe) {
        A = Date.now();
        let R = v().tasks[s];
        if (R?.type === "in_process_teammate" && R.evictAfter !== void 0)
          K(s, (d) => ({ ...d, evictAfter: Date.now() + ox }), i);
        continue;
      }
    } catch (T) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${T}`);
    }
    let P = await Le(I, n.agentName, S, H);
    if (P) return { type: "new_message", message: P, from: "task-list" };
    if (kD()) {
      if (!u && Date.now() - A >= cht)
        return (
          t(`[inProcessRunner] ${n.agentName} idle timeout after ${cht}ms (poll #${N})`),
          { type: "idle_timeout" }
        );
    }
  }
  return (
    t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${N})`),
    { type: "aborted" }
  );
}
async function Qe(n) {
  let {
      identity: e,
      taskId: s,
      prompt: v,
      description: i,
      spawnedAgentType: I,
      agentDefinition: p,
      teammateContext: S,
      toolUseContext: y,
      abortController: D,
      model: H,
      systemPrompt: A,
      systemPromptMode: q,
      allowedTools: N,
      allowPermissionPrompts: E,
      invokingRequestId: C,
      standalone: o = !1,
      resumeMessages: u,
      resumeReplacementState: P,
      initialFrom: T
    } = n,
    { setAppState: R, taskRegistry: d } = y,
    j = e5n(s),
    G = {
      count: 0,
      reported: !1,
      deliveredUnmarked: new Set(),
      consumedUnmarked: new Set(),
      readFailures: 0
    };
  t(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let W = {
      agentId: e.agentId,
      parentAgentId: y.agentId,
      depth: lp(y.agentContext),
      parentSessionId: e.parentSessionId,
      agentName: e.agentName,
      teamName: e.teamName,
      agentColor: e.color,
      planModeRequired: e.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: C,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0
    },
    { tools: J, mainLoopModel: ee } = y.rootToolSurface,
    ne;
  if (q === "replace" && A) ne = A;
  else {
    let Q = [...(await CP(J, ee, { teammate: !0 })).filter((Y) => Y !== U0), odo];
    if (p) {
      let Y = p.getSystemPrompt({
        toolUseContext: y,
        primedAgentMemory: await Nbt(p, y.storageV5)
      });
      if (Y)
        Q.push(`
# Custom Agent Instructions
${Y}`);
      if (p.memory)
        a("tengu_agent_memory_loaded", {
          ...!1,
          scope: c(p.memory),
          source: b("in-process-teammate")
        });
    }
    if (q === "append" && A) Q.push(A);
    ne = Q.join(`
`);
  }
  let ie = S.hasTaskListTools,
    fe = [Mn, ...(ie ? [Lk, S8, qC, WA] : [])],
    V = p?.disallowedTools?.filter((h) => !fe.includes(Bn(h).toolName)),
    B = {
      agentType: e.agentName,
      whenToUse: `In-process teammate: ${e.agentName}`,
      getSystemPrompt: () => ne,
      tools: p?.tools ? L([...p.tools, ...fe]) : ["*"],
      ...(V?.length && { disallowedTools: V }),
      source: "projectSettings",
      permissionMode: "default",
      ...(p?.model && { model: p.model }),
      ...(p?.effort !== void 0 && { effort: p.effort }),
      ...(p?.omitClaudeMd && { omitClaudeMd: !0 }),
      ...(p?.autoCompactWindow !== void 0 && { autoCompactWindow: p.autoCompactWindow })
    },
    O = u ? [...u] : [],
    Se = new Set(u?.map((h) => h.uuid)),
    Be = {
      taskKind: "in_process_teammate",
      teamName: e.teamName,
      color: e.color,
      planModeRequired: e.planModeRequired,
      ...(p && { customAgentType: p.agentType }),
      ...(I !== void 0 && { spawnedAgentType: I }),
      ...(H && { model: H })
    },
    ke = Kcn({ from: T ?? Ya, text: v, summary: i }),
    z = ke,
    ue = void 0,
    Te = !1,
    me = !1,
    Ne = (u?.length ?? 0) > 0,
    Ce = !1,
    Pe = u ? rct(u).result : void 0,
    we = !1,
    Ee = async (h) => {
      switch (((me = !1), h.type)) {
        case "shutdown_request":
          (t(`[inProcessRunner] ${e.agentId} received shutdown request - passing to model`),
            (z = Kcn({
              from: typeof h.entryFrom === "string" && h.entryFrom !== "" ? h.entryFrom : dv,
              text: GBt(U6n(h.originalMessage, h.entryFrom) ?? h.originalMessage, h.entryFrom)
            })),
            (ue = void 0),
            cbr(s, Oe({ content: z }), d));
          break;
        case "new_message":
          if (
            (t(`[inProcessRunner] ${e.agentId} received new message from ${h.from}`),
            h.from === "user")
          )
            ((z = h.message), (ue = h.origin));
          else
            ((z = Kcn({ from: h.from, text: h.message, color: h.color, summary: h.summary })),
              (ue = void 0),
              cbr(s, Oe({ content: z }), d));
          break;
        case "new_messages":
          (t(`[inProcessRunner] ${e.agentId} received ${h.messages.length} drained message(s)`),
            (z = fze(h.messages, { recipientIsLead: !1 })),
            (ue = void 0),
            cbr(s, Oe({ content: z }), d));
          break;
        case "aborted":
          (t(`[inProcessRunner] ${e.agentId} aborted while waiting`), (Te = !0));
          break;
        case "idle_timeout":
          if ((t(`[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`), !o))
            (y.agentLifecycle.setTeammate(e.agentId, void 0),
              await jcn(e.teamName, e.agentId, { onlyIfJoinedBefore: Date.now() }, y.storageV5));
          Te = !0;
          break;
      }
    };
  if (!o) await Le(e.parentSessionId, e.agentName, ie, y.storageV5);
  try {
    d.updateTranscript(s, (M) => {
      let Z = M.messages;
      if (u) for (let ve of u.slice(-aLr)) Z = WJe(Z, ve);
      return { ...M, messages: WJe(Z, Oe({ content: ke })) };
    });
    let h = y.contentReplacementState ? (P ?? p5n()) : void 0,
      Q = rie(),
      Y = De();
    while (!D.signal.aborted && !Te) {
      t(`[inProcessRunner] ${e.agentId} processing prompt: ${z.substring(0, 50)}...`);
      let M = ur();
      (M.signal.addEventListener("abort", () => {
        we = !0;
      }),
        K(s, (r) => ({ ...r, currentWorkAbortController: M, retryWake: Y }), d));
      let Z = Oe({ content: z, origin: ue }),
        ve = [Z],
        ce = O,
        $e = Op(O, ry(ee));
      if ($e > SK(_c(ee), xwr(y.options.autoCompactWindow, B.autoCompactWindow))) {
        t(`[inProcessRunner] ${e.agentId} compacting history (${$e} tokens)`);
        let r = {
          ...y,
          abortController: D,
          agentId: e.resumableAgentId ?? Br(e.agentId),
          readFileState: sce(y.readFileState, { stripSeededFromContext: !0 }),
          memorySelector: hle(),
          onCompactEvent: void 0,
          onRetryStatus: j.setRetryStatus,
          compactTranscriptUnavailable: !0
        };
        try {
          let w = await JOr(
            O,
            r,
            {
              systemPrompt: Li([]),
              userContext: {},
              systemContext: {},
              toolUseContext: r,
              forkContextMessages: O,
              advisorModel: r.getAppState().advisorModel
            },
            !0,
            { isAutoCompact: !0 }
          );
          if (((ce = E1(w)), h)) h = p5n();
          ((O.length = 0),
            O.push(...ce),
            Se.clear(),
            d.updateTranscript(s, (k) => ({ ...k, messages: [...ce, Z] })));
        } catch (w) {
          if (w instanceof Error && w.message.startsWith(cG))
            (t(
              `[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`
            ),
              (Ce = !0));
          else if (D.signal.aborted || (w instanceof Error && w.message === fM)) {
            (t(`[inProcessRunner] ${e.agentId} aborted during compaction`), (Te = !0));
            break;
          } else throw w;
        }
      }
      let Fe = ce.length > 0 ? [...ce] : void 0;
      (O.push(Z), (Pe = void 0), (we = M.signal.aborted));
      let pe = $zn(),
        _e = d.get(s);
      if (_e !== void 0 && "progress" in _e && _e.progress !== void 0)
        pe.latestInputTokens = _e.progress.tokenCount;
      let je = j0t(J),
        ge = [],
        Ae = y.getAppState().tasks[s],
        xe = Ae && Ae.type === "in_process_teammate" ? Ae.permissionMode : "default",
        Ge = { ...B, permissionMode: xe },
        Ue = !1,
        se = null;
      if (
        (await Xsi(S, async () =>
          aI(W, async () => {
            (K(
              s,
              (r) => ({
                ...r,
                status: "running",
                isIdle: !1,
                idleNotificationOwedToLead: void 0,
                evictAfter: void 0,
                evictAfterHeldBySibling: void 0
              }),
              d
            ),
              d.updateTranscript(s, (r) => ({ ...r, turnStartTime: Date.now() })),
              j.setMode("responding"));
            for await (let r of zR({
              agentDefinition: Ge,
              promptMessages: ve,
              turnPrompt: z,
              toolUseContext: y,
              canUseTool: He(
                e,
                M,
                (w) => {
                  K(s, (k) => ({ ...k, totalPausedMs: (k.totalPausedMs ?? 0) + w }), d);
                },
                dke(R),
                () => y.getAppState().teamContext?.teammates
              ),
              isAsync: !0,
              canShowPermissionPrompts: E ?? !0,
              forkContextMessages: Fe,
              querySource: "agent:custom",
              override: {
                abortController: M,
                agentContext: W,
                onRetryStatus: j.setRetryStatus,
                subscribeRetryWake: Y.subscribe,
                ...(e.resumableAgentId && { agentId: e.resumableAgentId })
              },
              ...(e.resumableAgentId && {
                recordedUuids: Se,
                name: e.agentName,
                description: i,
                extraMetadata: { ...Be, permissionMode: xe }
              }),
              onStreamTokenEstimate: (w) => {
                Uzn(pe, w);
                let k = Nmt(pe);
                K(
                  s,
                  (U) => (U.progress?.tokenCount === k.tokenCount ? U : { ...U, progress: k }),
                  d
                );
              },
              model: H,
              preserveToolUseResults: !0,
              availableTools: J,
              allowedTools: N,
              contentReplacementState: h,
              stickyBetas: Q,
              isTeammate: !0,
              teammateContext: S
            })) {
              if (D.signal.aborted) {
                t(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
                break;
              }
              if (M.signal.aborted) {
                if (
                  (t(`[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`),
                  r.type === "assistant" || r.type === "user" || (r.type === "attachment" && iv(r)))
                )
                  (ge.push(r), O.push(r), (se = xMe(O, r, se)));
                Ue = !0;
                break;
              }
              if (r.type === "spinner_mode") {
                j.setMode(r.mode);
                continue;
              }
              if (r.type === "api_metrics") continue;
              if (r.type === "query_model_change") continue;
              if (r.type === "set_in_progress_tool_use_ids") {
                if (r.op.action !== "remove") continue;
                let k = r.op.ids;
                d.updateTranscript(s, (U) => {
                  let te = new Set(U.inProgressToolUseIDs),
                    oe = !1;
                  for (let be of k) if (te.delete(be)) oe = !0;
                  return oe ? { ...U, inProgressToolUseIDs: te } : U;
                });
                continue;
              }
              if (r.type === "system" && r.subtype === "api_error") continue;
              (ge.push(r), O.push(r), (se = xMe(O, r, se)), Fzn(pe, r, je, J));
              let w = Nmt(pe);
              (K(s, (k) => ({ ...k, progress: w }), d),
                d.updateTranscript(s, (k) => {
                  let U = k.inProgressToolUseIDs;
                  if (r.type === "assistant") {
                    for (let te of r.message.content)
                      if (te.type === "tool_use") U = new Set([...U, te.id]);
                  } else if (r.type === "user") {
                    let te = r.message.content;
                    if (Array.isArray(te)) {
                      for (let oe of te)
                        if (typeof oe === "object" && "type" in oe && oe.type === "tool_result") {
                          let be = new Set(U);
                          (be.delete(oe.tool_use_id), (U = be));
                        }
                    }
                  }
                  return { ...k, messages: HUs(k.messages, r), inProgressToolUseIDs: U };
                }));
            }
            return { success: !0, messages: ge };
          })
        ).finally(() => {
          if (se) (O.push(...se.preserved), (se = null));
        }),
        K(s, (r) => ({ ...r, currentWorkAbortController: void 0 }), d),
        D.signal.aborted)
      )
        break;
      let le = Ue || M.signal.aborted;
      if (le) {
        ((we = !0), t(`[inProcessRunner] ${e.agentId} work interrupted, returning to idle`));
        let r = Xs({ content: fM });
        d.updateTranscript(s, (w) => ({ ...w, messages: WJe(w.messages, r) }));
      }
      Ne ||= ge.some(
        (r) => (r.type === "assistant" && !r.isApiErrorMessage) || (r.type === "user" && !r.isMeta)
      );
      let re = !le ? Cin(ge) : void 0;
      if (((me = re?.isTransient === !0 && !o && Ne), !o && !le)) {
        let r = null;
        try {
          r = await Me(e, s, d, y.storageV5, G, y.getAppState().teamContext?.teammates);
          while (r === null && G.count > 0 && G.readFailures < cHe && !D.signal.aborted)
            (await X(Re),
              (r = await Me(e, s, d, y.storageV5, G, y.getAppState().teamContext?.teammates)));
        } catch (w) {
          t(`[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${w}`);
        }
        if (r) {
          try {
            let { result: w, summary: k } = rct(O, { emitTelemetry: !0 });
            if (w !== void 0 || re !== void 0) {
              if (
                (await Ie(
                  e.agentName,
                  e.color,
                  e.teamName,
                  {
                    idleReason: re !== void 0 ? "failed" : void 0,
                    summary: k,
                    failureReason: re?.reason,
                    result: w,
                    senderReachable: !0
                  },
                  y.storageV5
                )) &&
                w !== void 0
              )
                Pe = w;
            }
          } catch (w) {
            t(`[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${w}`);
          }
          await Ee(r);
          continue;
        }
      }
      if (re?.isTransient)
        a("tengu_teammate_transient_turn_failure", {
          error_kind: c(re.errorKind ?? "unknown"),
          hold_evict: me
        });
      let qe = y.getAppState().tasks[s],
        We = !(qe?.type === "in_process_teammate" && qe.isIdle) && !o;
      K(
        s,
        (r) => (
          r.onIdleCallbacks?.forEach((w) => w()),
          {
            ...r,
            isIdle: !0,
            idleNotificationOwedToLead: (We && ye()) || r.idleNotificationOwedToLead,
            evictAfter: me ? void 0 : Date.now() + ox,
            onIdleCallbacks: []
          }
        ),
        d
      );
      let he = re?.reason;
      if (We) {
        let r = rct(O, { emitTelemetry: !le }),
          w = le ? void 0 : r.result,
          k = await Ie(
            e.agentName,
            e.color,
            e.teamName,
            {
              idleReason: le ? "interrupted" : he !== void 0 ? "failed" : "available",
              summary: r.summary,
              failureReason: he,
              result: w,
              senderReachable: he === void 0 || me
            },
            y.storageV5
          );
        if (w !== void 0 && k) Pe = w;
        if (!k)
          K(
            s,
            (U) =>
              U.idleNotificationOwedToLead ? { ...U, idleNotificationOwedToLead: void 0 } : U,
            d
          );
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`);
      t(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Ke = await Xe(e, D, s, y.getAppState, d, e.parentSessionId, o, ie, G, me, y.storageV5);
      await Ee(Ke);
    }
    let de = !1,
      x;
    if (
      (K(
        s,
        (M) => {
          if (M.status !== "running") return ((de = !0), M);
          return (
            (x = M.toolUseId),
            M.onIdleCallbacks?.forEach((Z) => Z()),
            {
              ...M,
              status: "completed",
              notified: !0,
              endTime: Date.now(),
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0,
              onIdleCallbacks: []
            }
          );
        },
        d
      ),
      !de)
    )
      d.updateTranscript(s, (M) => ({
        ...M,
        messages: M.messages.length ? [M.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set()
      }));
    if ((yp(s), d.evictTerminal(s), !de)) Ha(s, "completed", { toolUseId: x, summary: e.agentId });
    if ((JGe(e.agentId), Ce)) f("swarm_in_process_run", "compact_blocked_by_hook");
    else g("swarm_in_process_run");
    return { success: !0, messages: O };
  } catch (h) {
    let Q = h instanceof Error ? h.message : "Unknown error";
    t(`[inProcessRunner] Agent ${e.agentId} failed: ${Q}`);
    let Y = !1,
      de;
    if (
      (K(
        s,
        (x) => {
          if (x.status !== "running") return ((Y = !0), x);
          return (
            (de = x.toolUseId),
            x.onIdleCallbacks?.forEach((M) => M()),
            {
              ...x,
              status: "failed",
              notified: !0,
              error: Q,
              isIdle: !0,
              endTime: Date.now(),
              onIdleCallbacks: [],
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              retryWake: void 0
            }
          );
        },
        d
      ),
      !Y)
    )
      d.updateTranscript(s, (x) => ({
        ...x,
        messages: x.messages.length ? [x.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set()
      }));
    if ((yp(s), d.evictTerminal(s), !Y)) Ha(s, "failed", { toolUseId: de, summary: e.agentId });
    if (!o) {
      let x;
      try {
        x = we ? void 0 : T_s(O);
      } catch (M) {
        t(`[inProcessRunner] ${e.agentName} failed to extract partial result: ${M}`);
      }
      if (x !== void 0 && x === Pe) x = void 0;
      await Ie(
        e.agentName,
        e.color,
        e.teamName,
        { idleReason: "failed", completedStatus: "failed", failureReason: Q, result: x },
        y.storageV5
      );
    }
    return (
      JGe(e.agentId),
      m("swarm_in_process_run", "agent_loop_failed"),
      { success: !1, error: Q, messages: O }
    );
  }
}
function Qlo(n) {
  let e = n.identity.agentId;
  Qe(n).catch((s) => {
    t(`[inProcessRunner] Unhandled error in ${e}: ${s}`);
  });
}
export { Qlo };

//# sourceMappingURL=chunk-wj6mgys4.js.map
