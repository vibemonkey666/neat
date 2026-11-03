// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br } from "./chunk-6bbdndfe.js";
import { L, tt, ke, ru, ye, OSe, J, die, kee } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { Ye, Ke, d, E, tw, Us, Vt, EA, kA } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { cy, gl, Yw, zs } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Rkn, vB, fe } from "./chunk-xe386mry.js";
import { LM, Im, Db, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { QN, hTe } from "./chunk-6h7ejyet.js";
import { fB, mc } from "./chunk-5rw2zfa0.js";
import { p } from "./chunk-qmkm2x59.js";
import { Su } from "./chunk-9z5ybxhe.js";
import { zn, iKt, Ori, Unr, Dri, Lw, aI, lp, Rj, yl, LYo, Soi } from "./chunk-ajtyjx88.js";
import { a3o, Gx, vm, Xue } from "./chunk-r1dvrqha.js";
import { vRe, dM } from "./chunk-9zd34fgb.js";
import { jx } from "./chunk-vchq4g74.js";
import { zyt } from "./chunk-xt7fs806.js";
import {
  eXe,
  $Ee,
  h1,
  Y1e,
  EP,
  kP,
  nXe,
  gIs,
  DN,
  TLt,
  $F,
  D4,
  QOe,
  U4,
  uO,
  oG,
  Cxr,
  Hxr,
  b1,
  yle,
  wK,
  cke,
  Ege,
  ane,
  kge,
  p0t,
  g0t,
  vK,
  smt,
  _le,
  Cl,
  uke,
  Cje,
  dMe,
  dne,
  $Xe,
  FXe,
  kzn,
  RHs,
  Mmt,
  Tzn,
  O3,
  aAo,
  wke,
  Fmt,
  NJ,
  _on,
  bon,
  G0t,
  YHs,
  FA,
  mO,
  Ale,
  Bmt,
  Fje,
  CP,
  Y4,
  Vmt,
  HLs,
  iOr,
  TD,
  gp,
  z3,
  gxo,
  tin,
  hxo,
  HT,
  DDr,
  Txo,
  jKn,
  Ru,
  vJe,
  kne,
  Rne,
  Oe,
  D$t,
  xJe,
  wy,
  Xle,
  Jke,
  Ok
} from "./chunk-j0tbz6ra.js";
import { GE, ht, cf } from "./chunk-gdcb8skc.js";
import { dg, Rt, tn } from "./chunk-wany0nxw.js";
import { vet } from "./chunk-krgv9fvy.js";
import { Aw } from "./chunk-hhgrzgnb.js";
import { IQn, ae, Dc } from "./chunk-ar6ynjt8.js";
import { Pu } from "./chunk-m5rm7nsm.js";
import { zde, yZe } from "./chunk-mk2r9qgw.js";
import { ddn, av } from "./chunk-1kkad38y.js";
import { AE, Tn, vLr, gFt, ix, HL, QIo } from "./chunk-yyq6mj0n.js";
import { el, $d } from "./chunk-n3589fe4.js";
import { Fde } from "./chunk-qg3fkqqr.js";
import { JF } from "./chunk-zg0g4fdz.js";
import { m5n } from "./chunk-z0mss2jj.js";
import { pu } from "./chunk-dggktcda.js";
import { Vhe } from "./chunk-j9t13sne.js";
import { n8 } from "./chunk-fnsjs1v2.js";
import { Hp } from "./chunk-8mtqgphq.js";
import { P7e } from "./chunk-5qtb3hv4.js";
import { wMt, GNn } from "./chunk-9d4hz6n9.js";
import { Svs } from "./chunk-1v8z0mw4.js";
import { t0n, yfo, _fo, gwr, n0n, _vs } from "./chunk-z4pfepj9.js";
import { CIe } from "./chunk-gdqrmwqs.js";
import { zR, yP, ste } from "./chunk-x3dkgs4r.js";
import { bfo } from "./chunk-nk8nnbw7.js";
import { e0n } from "./chunk-62p04wse.js";
import { RIe } from "./chunk-zkj833d1.js";
import { Evs, kvs } from "./chunk-szvp3b8n.js";
import { vae } from "./chunk-a5n97xgg.js";
import { xIe } from "./chunk-p8e74wwb.js";
import { WTs, KTs } from "./chunk-28117reb.js";
import { cs } from "./chunk-eacq4pgt.js";
import { xE } from "./chunk-9vcd25x2.js";
import { Zh } from "./chunk-n32nf3yj.js";
import { zL } from "./chunk-gceqyggc.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { Vwt, doe } from "./chunk-m18k9mtt.js";
import { Mn } from "./chunk-8gjxvrgz.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, Ue } from "./chunk-0bqrj5ah.js";
import { promises as nt } from "fs";
var Me = "ObserverReport";
var Jt =
    "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.",
  Xt =
    "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.";
var Wn = p(() =>
    Ue({
      report: o()
        .min(1)
        .describe("The report to deliver to your report target. Be concise and specific.")
    })
  ),
  Zt = tn({
    name: Me,
    backgrounding: "never",
    maxResultSizeChars: 1000,
    async description() {
      return Jt;
    },
    async prompt() {
      return Xt;
    },
    get inputSchema() {
      return Wn();
    },
    isReadOnly() {
      return !1;
    },
    isEnabled() {
      return !0;
    },
    create(e) {
      return {
        async checkPermissions(k) {
          return { behavior: "allow", updatedInput: k };
        },
        async call(k) {
          let h = e.agentId;
          if (h === void 0)
            return {
              data: {
                success: !1,
                message:
                  "ObserverReport is only available to an observer agent; the main session does not have an observed pairing."
              }
            };
          let b = WTs(e.session, h);
          if (!b)
            return {
              data: {
                success: !1,
                message:
                  "Your observer pairing is not armed (stopped, retired, or never installed). The report was not delivered."
              }
            };
          let { reportTargetTaskId: _, reportTargetName: T, viaWorkerName: F } = b;
          if (_ !== void 0) {
            let V = e.taskRegistry.get(_);
            if (!(
              Tn(V) &&
              (V.status === "running" ||
                (V.status === "completed" && [...ix(V)].some((Pe) => Pe !== b1)))
            ))
              return {
                data: {
                  success: !1,
                  message: `The report target (${T}) is not running. The report was not delivered.`
                }
              };
          }
          let S = `observer:${b.observerAgentType}`,
            at = b.observedTaskId === void 0 ? `"${F}"` : `"${F}" [${b.observedTaskId}]`,
            r = vRe(
              S,
              F === void 0
                ? k.report
                : `(observing worker ${at})
${k.report}`
            ),
            ee = { kind: "observer", from: S, senderTaskId: h };
          if ((b.reportOrigins.add(ee), _ === void 0))
            Ok({
              mode: "prompt",
              agentId: tt(),
              value: r,
              priority: "next",
              origin: ee,
              skipSlashCommands: !0,
              isMeta: !0,
              skipAttachments: !0
            });
          else _on(_, r, e.taskRegistry, { origin: ee, isMeta: !0 });
          return {
            data: {
              success: !0,
              message: `Report queued for ${_ === void 0 ? "the main conversation" : T}.`
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, k) {
      return { type: "tool_result", tool_use_id: k, content: e.message, is_error: !e.success };
    },
    renderToolUseMessage(e) {
      return `report: ${e.report}`;
    }
  });
var jn = [Mn, GE, Me, ht, pu, el, Gs, Hp, dg];
function lwr(e) {
  return [...e.filter((k) => jn.every((h) => !Rt(k, h))), Zt];
}
function mfo(e) {
  return (
    (e.name === ht || e.name === cf) &&
    typeof e.input === "object" &&
    e.input !== null &&
    "subagent_type" in e.input &&
    ddn(e.input.subagent_type)
  );
}
function en(e, k) {
  let h = new Set();
  for (let b of e)
    if (b.type === "assistant") {
      let _ = b.message.content;
      if (!Array.isArray(_)) continue;
      for (let T of _) if (T.type === "tool_use" && mfo(T)) h.add(T.id);
    } else if (b.type === "user" && h.size > 0) {
      let _ = b.toolUseResult,
        T = b.message.content;
      if (
        typeof _ !== "object" ||
        _ === null ||
        !("agentId" in _) ||
        _.agentId !== k ||
        !Array.isArray(T)
      )
        continue;
      if (T.some((F) => F.type === "tool_result" && h.has(F.tool_use_id))) return !0;
    }
  return !1;
}
async function dwr(e, { origin: k, ...h }) {
  let b = kzn(e)?.hookOrigin,
    _ = await gwr({
      ...h,
      agents: [],
      resume: Object.freeze({ agentId: e }),
      origin: b === void 0 ? k : [...b, ...(k ?? [])]
    });
  if (_.starting !== bfo && Hxr(h.signal, h.background))
    throw (_.starting?.[Symbol.dispose](), new Ye());
  return _;
}
function cwr(e) {
  return `a plugin declined the resume: ${e}`;
}
function sn(e, k) {
  let h = e.filter(H),
    b = new Map(h.flatMap((S) => (S.uuid === void 0 ? [] : [[S.uuid, S.parentUuid]]))),
    _ = new Set(k),
    T = (S) => b.has(S) || _.has(S),
    F = new Set(h.flatMap(Vn));
  return (
    k.length > 0 &&
    nn(b.get(k[0])) &&
    [...F].every(T) &&
    h.every((S) => nn(S.parentUuid) || T(S.parentUuid) || F.has(S.uuid))
  );
}
function nn(e) {
  return e === void 0 || e === null;
}
function Vn({ compactMetadata: e }) {
  let k = H(e) ? e.preservedMessages : void 0;
  return H(k) && Array.isArray(k.uuids) ? k.uuids : [];
}
var qn = 2000;
function rt(e, k) {
  return `its saved state cannot be read (${E(e) ?? kA(e) ?? "storage error"}), so it cannot be told whether the user stopped it. ${k ? "Send the message again in a moment, or the user" : "The user"} can resume it themselves.`;
}
function Jgi(e) {
  if (e instanceof Vu) return e;
  let k = e instanceof kne || n8(E(e) ?? kA(e)),
    h = Vt(e) ? rt(e, k) : d(e);
  return k ? new pL(h) : new Vu(h);
}
function CF(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "deniedByPlugin" in e &&
    typeof e.deniedByPlugin === "string"
  );
}
var ot = "resumedInline",
  Gn =
    "Background agents cannot be started in this session right now. Send the message again if you still need this agent: it should then run while you wait, and its report will be that call's result.",
  on = "This agent cannot be resumed in the background in this session. Start a new agent instead.",
  Kn = /[<>\p{Cc}]|(?![\u200c\u200d])\p{Cf}/u;
function uwr(e) {
  return e instanceof Error && ot in e && e[ot] === !0;
}
class Vu extends Error {
  transcriptMissing;
  constructor(e, k) {
    super(e);
    ((this.name = "ResumeAgentStateError"), (this.transcriptMissing = k?.transcriptMissing === !0));
  }
}
var st = "git_worktree_create";
class pL extends Vu {
  constructor(e) {
    super(e);
    this.name = "AgentResumeTransientError";
  }
}
class Z2 extends Vu {
  constructor(e) {
    super(e);
    this.name = "AgentResumePermanentlyRefusedError";
  }
}
class eK extends Vu {
  constructor(e) {
    super(e);
    this.name = "AgentStoppedByUserError";
  }
}
class rte extends Vu {
  constructor(e) {
    super(e);
    this.name = "AgentResumeInProgressError";
  }
}
class Sve extends Vu {
  constructor(e) {
    super(e);
    this.name = "AgentStillStoppingError";
  }
}
function nJ(e) {
  return it(e, "notification");
}
function gfo(e) {
  return it(e, "inline");
}
function an(e, k = Db) {
  return typeof e === "string" &&
    e !== "" &&
    !cy(e) &&
    !zs(e) &&
    !gl(e) &&
    !Yw(e) &&
    !Kn.test(e) &&
    Im(k, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) === void 0
    ? e
    : void 0;
}
function fwr(e) {
  return it(e, "reply");
}
async function it(e, k) {
  let { agentId: h } = e,
    { resumesInFlight: b } = zn();
  if (b.has(h)) throw new rte(`Agent ${h} is already running or being resumed`);
  b.add(h);
  let _ = !0,
    T = () => {
      if (_) ((_ = !1), b.delete(h));
    };
  try {
    return await Qn(e, k, T);
  } finally {
    T();
  }
}
async function Qn(
  {
    agentId: e,
    prompt: k,
    promptOrigin: h,
    promptNoticeLengths: b,
    promptNoticeOwn: _,
    promptNoticeRunIds: T,
    promptIsMeta: F,
    continueInterruptedTurn: S,
    resultsOnly: at,
    toolUseContext: r,
    liveTranscript: ee,
    canUseTool: V,
    invokingRequestId: dt,
    parentPromptId: Pe,
    userInitiated: x,
    suppressOwnerNotification: dn,
    workerPermissionMode: un,
    onDeliveryCommitted: ln,
    isWebFetchLaunch: cn
  },
  X,
  mn
) {
  let fn = Date.now(),
    xn = !1,
    Ne = r.getAppState(),
    de = ae(r),
    { taskRegistry: y } = r,
    ue = de.mode,
    te = r.agentId;
  if (te !== void 0 && h1(te))
    throw new Sve(
      "This agent has been stopped and its stop is still completing; it cannot resume other agents."
    );
  if (h1(e) || (!AE(e) && cs(y.get(e)?.status ?? "running")))
    throw new Sve(
      `Agent ${e} is still stopping \u2014 its previous run was stopped but has not exited. Re-run ${$d} on it or wait for it to exit before resuming.`
    );
  let M = y.get(e),
    le = 0,
    pn = Date.now();
  if (Tn(M)) {
    let n = !1;
    if (
      (y.update(e, (u) => {
        if (u.status === "running" || u.resuming) return u;
        return ((n = !0), (le = u.userStopCount ?? 0), { ...u, resuming: !0 });
      }),
      !n)
    )
      throw new rte(`Agent ${e} is already running or being resumed`);
  }
  let ut = () => {
      y.update(e, (n) => (n.resuming ? { ...n, resuming: !1 } : n));
    },
    lt = !1,
    w = () => {
      if ((ut(), lt)) z3(Br(e), { finished: !0 }, r.storageV5).catch(l);
      (NJ(e, y), gFt(e, y));
    },
    Fe = () => (
      m("subagent_launch", "subagent_resume_transcript_over_bound"),
      w(),
      new Z2(
        `Agent ${e}'s earlier transcript is too large to load, or has a row with a malformed timestamp. Sending the message again will not help. Start a new agent if the work is still needed.`
      )
    );
  if (jKn(e)) throw Fe();
  let ct = (n) => {
      let u = tw(E(n) ?? kA(n));
      return u && { errno: u };
    },
    gn = (n) => (
      m("subagent_launch", "subagent_resume_stop_probe_failed", ct(n)),
      w(),
      gIs(n) ? new pL(rt(n, !0)) : new Vu(rt(n, !1))
    ),
    Ee =
      h?.kind === "observer-activity"
        ? { found: !1 }
        : await tin(Br(e), "stoppedByUser", r.storageV5).then(
            (n) => ({ found: n }),
            (n) => ({ found: !1, err: n })
          ),
    mt = x || h?.kind === "observer-activity" ? void 0 : Us,
    ft = HT(Br(e), r.storageV5, mt),
    pt = async () => (
      await Nt(Ru(), qn, "agent resume: transcript flush wait").catch(() => {}),
      Rne(Br(e), r.storageV5, { signal: r.abortController.signal })
    ),
    G = Mmt(),
    gt = J() && !Tn(M) && G === void 0,
    wt = J() ? ft.then((n) => (n === null || gt ? null : pt())) : pt(),
    [hn, s] = await Promise.all([
      wt,
      ft.then((n) => (n === null && !J() && vJe() ? wt.then(() => HT(Br(e), r.storageV5, mt)) : n))
    ]).catch((n) => {
      if (Ke(n)) throw (w(), n);
      if (jKn(e)) throw Fe();
      if (n instanceof kne && n.outcome === "body_encoded")
        throw (
          m("subagent_launch", "subagent_resume_transcript_body_encoded"),
          w(),
          new pL(
            `Agent ${e}'s earlier transcript arrived in an encoding that was not asked for, so it was not read. Send the message again, or start a new agent if that fails too.`
          )
        );
      throw (m("subagent_launch", "subagent_resume_setup_read_failed", ct(n)), w(), Jgi(n));
    });
  if (r.abortController.signal.aborted) throw (w(), new Ye());
  a("tengu_subagent_resume_sidecar_read", {
    metadata_found: s !== null,
    prompt_origin_kind: ce(h?.kind),
    has_task_record: Tn(M),
    continue_interrupted_turn: S === !0,
    resumer_is_subagent: te !== void 0,
    storage_v5: r.storageV5 !== void 0
  });
  let kt = X === "notification" && G !== void 0;
  if (s === null && J())
    throw (
      m("subagent_launch", "subagent_resume_sidecar_missing_diskless"),
      w(),
      new Z2(
        `This session has no saved settings for agent ${e}: it never ran here, or they did not survive a restart of the server that runs the session. Start a new agent if the work is still needed.`
      )
    );
  let me = _fo(s?.cwd),
    yt =
      J() &&
      ((s?.worktreePath ?? void 0) !== void 0 ||
        (s?.inheritedWorktreePath ?? void 0) !== void 0 ||
        s?.spawnedWithWorktree === !0)
        ? yfo
        : void 0;
  if (me !== void 0 || yt !== void 0)
    throw (
      m(
        "subagent_launch",
        me !== void 0 ? "subagent_resume_cwd_refused" : "subagent_resume_worktree_refused"
      ),
      w(),
      new Z2(
        me !== void 0
          ? `Cannot resume this agent in the directory its record names: ${me}. Start a new agent instead.`
          : `Cannot resume this agent, which was started in a worktree: ${yt}. Start a new agent instead.`
      )
    );
  let bt = zL(s?.toolUseId),
    De = EP(s?.description),
    Ce = typeof s?.worktreeBranch === "string" && e0n(s.worktreeBranch) ? s.worktreeBranch : void 0,
    K = typeof s?.name === "string" && Y1e.test(s.name) && !dM(s.name) ? s.name : void 0;
  if ("err" in Ee && !x && !s?.stoppedByUser) throw gn(Ee.err);
  let _t = Ee.found;
  if ((s?.stoppedByUser || _t) && h?.kind !== "observer-activity") {
    if (!x)
      throw (
        w(),
        new eK(
          `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`
        )
      );
  }
  if (gt)
    throw (
      m("subagent_launch", "subagent_resume_no_rule_diskless"),
      w(),
      new Z2(
        `Background agents are switched off in this session, and it no longer tracks agent ${e}, so the agent cannot be resumed. Start a new agent if the work is still needed.`
      )
    );
  let P = await Evs(Br(e), r.storageV5),
    Be = "transientRead" in P && P.transientRead ? pL : Vu;
  if (P.status === "malformed")
    throw (
      m("subagent_launch", "forked_skill_resume_scoping_invalid"),
      w(),
      new Be(
        `Agent ${e} has a malformed forked-skill scoping record; refusing to resume it without the skill's permission scoping.`
      )
    );
  if (P.status === "diskless")
    throw (
      m("subagent_launch", "forked_skill_resume_scoping_diskless"),
      w(),
      new Vu(
        `Agent ${e} cannot be checked for a forked-skill scoping record: this diskless session has no storage backend or key for it. Refusing to resume it.`
      )
    );
  if (
    (P.status === "absent" || P.status === "absent-but-marked") &&
    Tn(M) &&
    M.forkedSkillName !== void 0
  )
    throw (
      m("subagent_launch", "forked_skill_resume_scoping_missing"),
      w(),
      new Be(
        `Agent ${e} ran as a forked skill but its scoping record is missing; refusing to resume it without the skill's permission scoping.`
      )
    );
  if (P.status === "absent-but-marked")
    throw (
      m("subagent_launch", "forked_skill_resume_scoping_missing_cold"),
      w(),
      new Be(
        `Agent ${e} carries a forked-skill provenance marker but its scoping record is missing; refusing to resume it without the skill's permission scoping.`
      )
    );
  if (P.status === "valid" && Tn(M)) {
    if (M.forkedSkillName !== P.scoping.skillName)
      throw (
        m("subagent_launch", "forked_skill_resume_scoping_mismatch"),
        w(),
        new Vu(
          `Agent ${e} has a forked-skill scoping record that does not match its task record; refusing to resume it.`
        )
      );
  } else if (P.status === "valid") {
    if ((await kvs(Br(e), r.storageV5)) !== P.scoping.skillName)
      throw (
        m("subagent_launch", "forked_skill_resume_cold_witness_mismatch"),
        w(),
        new Vu(
          `Agent ${e} has a forked-skill scoping record with no matching provenance-marker witness; refusing to resume it on a cold path without a corroborated fork identity.`
        )
      );
  }
  if (P.status !== "valid") ;
  let v = P.status === "valid" ? P.scoping : void 0,
    pe = [],
    ge = [],
    $e,
    Le,
    St;
  if (v) {
    let n = await gp(ru(), r.storageV5).catch(() => []),
      u = r.getAppState().mcp.commands.filter((R) => R.type === "prompt" && R.loadedFrom === "mcp"),
      i = [...D4(n, r.getAppState().mcp.commands), ...u].find(
        (R) => R.name === v.skillName && R.type === "prompt"
      );
    if (i?.type === "prompt" && i.isKeptUnread === !0)
      throw (
        i.loadDefinition?.().catch(() => {}),
        m("subagent_launch", "forked_skill_resume_skill_unread"),
        w(),
        new pL(
          `Agent ${e} ran as forked skill ${v.skillName}, whose file has not been read since a reload kept it; refusing to resume it before it is. Try again shortly.`
        )
      );
    if (i?.type !== "prompt" || (i.context !== "fork" && i.getContext === void 0))
      throw (
        m("subagent_launch", "forked_skill_resume_skill_unresolved"),
        w(),
        new Vu(
          `Agent ${e} ran as forked skill ${v.skillName}, which no longer resolves to a fork-capable skill; refusing to resume it without its permission scoping.`
        )
      );
    let ie = g0t(i);
    if (ie !== void 0)
      throw (
        m("subagent_launch", "forked_skill_resume_hidden_behind_plugin"),
        w(),
        new Vu(`Agent ${e} ran as forked skill ${v.skillName}; refusing to resume it: ${ie}`)
      );
    let Y = await Ege(i).catch((R) => {
      throw (w(), R instanceof Vu ? R : new Vu(d(R)));
    });
    if (cke(i)) {
      let R = $F(i);
      throw (
        m(
          "subagent_launch",
          R ? "forked_skill_resume_host_catalog_withheld" : "forked_skill_resume_sync_vetoed"
        ),
        w(),
        new Vu(
          R
            ? `Agent ${e} ran as forked skill ${v.skillName}, which your organization's Skills setting currently turns off; refusing to resume it.`
            : `Agent ${e} ran as forked skill ${v.skillName}, an account-synced skill that is currently disabled (skills sync turned off or denied by policy); refusing to resume it.`
        )
      );
    }
    if (kge(Y))
      throw (
        ane(i, Y),
        m("subagent_launch", "forked_skill_resume_synced_plugin_refused", { reason: c(Y) }),
        w(),
        new Vu(`Agent ${e} ran as forked skill ${v.skillName}; refusing to resume it: ${zyt(Y)}.`)
      );
    ((pe = Su(
      await vet(i).catch((R) => {
        throw (
          m("subagent_launch", "forked_skill_resume_allowed_tools_failed"),
          w(),
          R instanceof Vu ? R : new Vu(d(R))
        );
      })
    )),
      (ge = Su(i.disallowedTools ?? [])),
      ($e = DN(i)),
      (Le = TLt(i)),
      (St = hTe(Le) === null ? void 0 : await p0t(i, null)));
  }
  let wn = v
      ? (v.frozenCommandDenies ??
        r.getAppState().toolPermissionContext.alwaysDenyRules.command ??
        [])
      : void 0,
    At = v
      ? [
          ...(pe.length === 0 ? [] : [{ kind: "allowed_tools", allowedTools: pe }]),
          ...(ge.length === 0 ? [] : [{ kind: "disallowed_tools", disallowedTools: ge }])
        ]
      : [],
    Tt = iOr(e, s, r),
    Ie = { ...r, ...Tt.marks },
    he = v
      ? {
          ...Ie,
          getAppState: IQn(r.getAppState, pe, ge, {
            replaceCommandRules: !0,
            frozenCommandDenies: wn
          }),
          permissionLayers:
            At.length > 0 ? [...(r.permissionLayers ?? []), ...At] : r.permissionLayers
        }
      : Ie,
    N = y.get(e),
    ne = Tn(N) ? N.result : void 0,
    kn = ne?.modelsUsed ?? (ne?.resolvedModel ? [ne.resolvedModel] : void 0),
    se = (Tn(N) ? N.spawnDepth : s?.spawnDepth) ?? lp(r.agentContext) + 1,
    yn = Tn(N) ? N.startTime : fn,
    I = hn;
  if (!I) {
    let n = y.getTranscript(e)?.messages;
    if (n && n.length > 0)
      (t(
        `[resumeAgentBackground ${e}] disk transcript missing; using ${n.length} in-memory messages mirrored during the run`
      ),
        (I = { messages: n, contentReplacements: [] }));
  }
  if (!I)
    throw (
      m("subagent_launch", "subagent_resume_transcript_missing"),
      w(),
      new Vu(`No transcript found for agent ID: ${e}`, { transcriptMissing: !0 })
    );
  if (J() && !Tn(M) && !kt) {
    let { signal: n } = r.abortController,
      u =
        (await DDr(e, n).catch((i) => {
          if (!n.aborted) l(i);
          return null;
        })) ?? null;
    if (n.aborted) throw (w(), new Ye());
    if (jKn(e)) throw Fe();
    if (u === null || (u.length === 0 && !Txo(e)))
      throw (
        m(
          "subagent_launch",
          u === null
            ? "subagent_resume_transcript_read_failed"
            : "subagent_resume_transcript_stored_empty"
        ),
        w(),
        new pL(
          `Agent ${e}'s stored transcript could not be read, or is empty. Send the message again, or start a new agent if that fails too.`
        )
      );
    if (
      !sn(
        u,
        I.messages.map((i) => i.uuid)
      )
    )
      throw (
        m("subagent_launch", "subagent_resume_transcript_gap"),
        w(),
        new Z2(
          `Part of agent ${e}'s transcript is missing, so it cannot go on from where it stopped. Start a new agent if the work is still needed.`
        )
      );
  }
  Cje(I.messages);
  let bn = S ? [...wMt(I.messages)] : I.messages.map((n) => Un(n, e)),
    q = Xle(xJe(D$t(dMe(dne(bn), { site: "agent_resume" }))));
  if (S && q.length > 0 && !GNn(q))
    return (
      y.update(e, (n) => ({ ...n, resuming: !1, notified: !0, evictAfter: QIo(n) })),
      g("subagent_launch"),
      {
        agentId: e,
        description: De ?? "(resumed)",
        outputFile: J() ? void 0 : Pu(e),
        alreadyCompleted: !0
      }
    );
  let _n = m5n(r.contentReplacementState, q, I.contentReplacements),
    We =
      (!s || s.fromStream === !0) &&
      ((Tn(N) && (N.agentType === smt.agentType || N.webFetchSavedFiles !== void 0)) ||
        cn === !0 ||
        en(r.messages, e)),
    we = We ? smt.agentType : s?.agentType,
    C =
      s?.isFork === !0
        ? void 0
        : we
          ? r.options.agentDefinitions.activeAgents.find((n) => n.agentType === we)
          : void 0,
    O = s?.isFork === !0 || (!C && s?.isFork === void 0 && s?.agentType === wK.agentType),
    vt = we === smt.agentType && (We || s?.isBuiltIn !== !1);
  if (
    (J() || Svs(e)) &&
    (!C || (s?.isBuiltIn !== void 0 && s.isBuiltIn !== Cl(C))) &&
    s?.isFork !== !0 &&
    !vt &&
    !kt
  ) {
    if ((w(), s === null))
      throw (
        m("subagent_launch", "subagent_resume_sidecar_missing_held"),
        new Z2(
          `This session no longer has the saved settings of agent ${e}, so it cannot be resumed as the type it ran as. Start a new agent if the work is still needed.`
        )
      );
    throw (
      m(
        "subagent_launch",
        J() ? "subagent_resume_type_unmatched_diskless" : "subagent_resume_type_unmatched_held"
      ),
      new pL(
        `The agent type that agent ${e} ran as is not on this session's list right now, or its name now belongs to a different type. Try once more; if that fails too, start a new agent.`
      )
    );
  }
  let Ot = vt
      ? C && Cl(C)
        ? C
        : smt
      : s?.isBuiltIn === !1 && we === smt.agentType
        ? C && !Cl(C)
          ? C
          : vK
        : (C ?? (O ? wK : vK)),
    B = await _le(Ot).catch((n) => {
      if ((w(), Ke(n))) throw n;
      throw (m("subagent_launch", "subagent_resume_plugin_load_threw"), new pL(d(n)));
    });
  if (B === void 0)
    throw (
      m("subagent_launch", "subagent_resume_plugin_load_failed"),
      w(),
      new Vu(
        `Agent type '${Ot.agentType}' could not be loaded from its plugin, so the agent was not resumed.`
      )
    );
  if ($Xe(B, de))
    throw (m("subagent_launch", "subagent_resume_tools_denied"), w(), new Vu(FXe(B.agentType)));
  if ((await Cxr([B])).length !== 1)
    throw (
      m("subagent_launch", "subagent_resume_not_offered"),
      w(),
      new Vu(`Agent type '${B.agentType}' is not offered in this session.`)
    );
  let re =
      G !== void 0 &&
      X === "reply" &&
      r.toolUseId !== void 0 &&
      !Vwt() &&
      !av(B) &&
      s?.requestShape !== "foreground"
        ? Tzn(G, {
            toolUseId: r.toolUseId,
            callerAgentId: r.agentId,
            signal: r.abortController.signal,
            resumedAgentId: e
          })
        : void 0,
    W = X === "inline" || (X === "reply" && ((doe() && re === void 0) || av(B))),
    je = G !== void 0 && W && X === "reply" && te === void 0 && r.innerCall !== !0;
  if (!W && G !== void 0 && re === void 0)
    throw (m("subagent_launch", "subagent_resume_background_rule"), w(), new Z2(on));
  let z = De ?? "(resumed)",
    He =
      h?.kind === "observer-activity"
        ? void 0
        : await dwr(e, {
            tool_use_id: r.toolUseId ?? "",
            parentModel: Dc(r),
            parentAgentId: te,
            signal: r.abortController.signal,
            origin: r.hookOrigin,
            agent: B,
            prompt: S ? "" : k,
            description: z,
            model: !O && !s?.isObserver && typeof s?.model === "string" ? s.model : void 0,
            permissionMode: ue,
            background: !W,
            fork: O,
            name: K,
            cwd: s?.cwd && !LM(s.cwd) ? s.cwd : void 0
          }).catch((n) => {
            if ((w(), !Ke(n))) m("subagent_launch", "subagent_resume_spawn_chain_failed");
            throw n;
          });
  using Sn = He?.starting;
  if (He?.deny !== void 0)
    return (
      m("subagent_launch", "subagent_resume_denied_by_hook"),
      ut(),
      { agentId: e, description: z, deniedByPlugin: cwr(He.deny) }
    );
  let be = (n, u) => {
      let i = yl(),
        ie = s?.cwd && !LM(s.cwd) ? s.cwd : fe(),
        Y = uO(ie),
        R =
          i !== null &&
          Y.length > 0 &&
          (() => {
            let $n = [
              i.worktreePath,
              ...uO(i.originalCwd),
              ...(i.liveLaunchAnchor ? [i.liveLaunchAnchor, ...uO(i.liveLaunchAnchor)] : []),
              CIe,
              ...uO(CIe)
            ];
            return Y.every((Ln) => $n.some((In) => U4(Ln, In) === "same"));
          })(),
        xt = u?.telemetryCode ?? "git_worktree_resume_worktree_gone",
        Bn = s?.worktreePath ?? `agent ${e}`;
      if (R) {
        (f(st, xt),
          t(
            `Resumed worktree ${Bn} ${n}; falling back to ${ie} under the session worktree's fences`,
            { level: "error" }
          ));
        return;
      }
      if (u?.terminalOnUncovered === !1)
        throw (
          w(),
          new pL(
            `Cannot resume this agent right now: its worktree ${n}, and the fallback directory is not covered by the session's isolation fences. Re-run from a session whose fences cover the agent's directory.`
          )
        );
      throw (
        m(st, xt),
        w(),
        new Z2(
          `This agent cannot be resumed: its worktree ${n}, and the fallback directory is not covered by the session's isolation fences.`
        )
      );
    },
    An = an(s?.worktreePath),
    vn = an(s?.inheritedWorktreePath),
    _e = An ?? vn,
    oe = _e
      ? await nt.stat(_e).then(
          (n) => (n.isDirectory() ? _e : be("exists but is not a directory")),
          (n) => {
            let u = E(n);
            if (u === "ENOENT" || u === "ENOTDIR") return be("no longer exists");
            throw (
              w(),
              new pL(
                `Cannot resume this agent: its worktree could not be examined (${String(u ?? "unknown error")}). Re-run once the directory is accessible.`
              )
            );
          }
        )
      : void 0;
  if (
    _e === void 0 &&
    !Soi(e) &&
    ((s !== null &&
      s.spawnedWithWorktree === !0 &&
      s.worktreeCleanlyRemoved !== !0 &&
      !(
        s.inheritedWorktreePath !== void 0 &&
        s.parentAgentId !== void 0 &&
        (await HT(Br(s.parentAgentId), r.storageV5).catch(nXe("resumeAgentBackground (parent)")))
          ?.worktreeCleanlyRemoved === !0
      )) ||
      LYo(e))
  )
    be("is not recorded for this isolated agent", {
      telemetryCode: "git_worktree_resume_binding_missing",
      terminalOnUncovered: LYo(e)
    });
  let Q = oe;
  if (oe) {
    let n = ke(),
      u = await nt.realpath(n).catch(() => n),
      i = await QOe(oe, uO(n), L([u, CIe, ...uO(CIe)]), {
        requireWitnessForSelfOwningPins: !0,
        declineSelfOwningPinUnderLiveRoot: !0
      });
    if (!i.ok) {
      if ((w(), i.reason !== "unverifiable" && i.reason !== "pin-is-own-launch-tree"))
        throw (
          m(st, "git_worktree_create_root_rejected"),
          t(`[worktree] refusing to resume parked agent into ${oe} (${i.reason}): ${i.message}`, {
            level: "error"
          }),
          new Z2(
            `This agent cannot be resumed: its worktree was refused (${i.reason}). ${i.message}`
          )
        );
      throw (
        t(
          `[worktree] could not verify parked agent worktree ${oe} this attempt; the resume will retry: ${i.message}`
        ),
        new pL(
          `Cannot resume this agent right now: its worktree could not be verified (${i.reason}). Re-run once git can answer.`
        )
      );
    }
  }
  if (Q) {
    let n = new Date();
    try {
      await nt.utimes(Q, n, n);
    } catch (u) {
      let i = E(u);
      if (i === "ENOENT" || i === "ENOTDIR") Q = be("vanished between verification and the resume");
      else
        throw (
          w(),
          new pL(
            `Cannot resume this agent: its worktree could not be touched (${String(i ?? "unknown error")}). Re-run once the directory is accessible.`
          )
        );
    }
  }
  let Mt = s?.cwd && !LM(s.cwd) ? s.cwd : Q,
    Ve = r.session.withProject({ cwd: Mt ?? (r.session.project === null ? void 0 : fe()) });
  if (Ve.project === null && vB())
    throw (
      m("subagent_launch", "subagent_resume_no_directory_in_cwd_scope"),
      w(),
      new Z2(
        "This agent cannot be resumed from here in this session. Do the rest of the task without it."
      )
    );
  let On = s?.effort !== void 0 && Aw(s.effort) ? s.effort : void 0,
    Pt = s?.isObserver || O ? void 0 : On,
    Ft = v?.effort ?? Pt,
    A = Ft !== void 0 ? { ...B, effort: Ft } : B,
    Se;
  if (O) {
    if (r.renderedSystemPrompt) Se = r.renderedSystemPrompt;
    else
      try {
        let n = Ne.agent
            ? Ne.agentDefinitions.activeAgents.find((i) => i.agentType === Ne.agent)
            : void 0,
          u = await CP(r.options.tools, r.options.mainLoopModel);
        Se = Y4({
          mainThreadAgentDefinition: n,
          toolUseContext: r,
          customSystemPrompt: r.options.customSystemPrompt,
          defaultSystemPrompt: u,
          appendSystemPrompt: r.options.appendSystemPrompt
        });
      } catch (n) {
        throw (
          m("subagent_launch", "subagent_resume_fork_prompt_reconstruct_failed"),
          w(),
          n instanceof Vu ? n : new Vu(d(n))
        );
      }
    if (!Se)
      throw (
        m("subagent_launch", "subagent_resume_fork_prompt_missing"),
        w(),
        new Vu("Cannot resume fork agent: unable to reconstruct parent system prompt")
      );
  }
  let Et = Dc(r),
    Ae = oG($Ee(A, Et), Et, s?.isObserver ? void 0 : O ? "inherit" : s?.model, ue),
    qe = eXe(q, he.options)?.systemPrompt,
    Z =
      s?.isObserver || v !== void 0
        ? void 0
        : n0n({
            agentDefinition: A,
            isFork: O,
            model: Ae,
            effortState: he.getAppState(),
            inheritedLayers: he.permissionLayers,
            recordedBudgetText: O ? _vs(q) : qe
          });
  A = Z?.agentDefinition ?? A;
  let Dt = Z === void 0 && qe ? Bmt(void 0, qe) : void 0;
  if (h?.kind === "observer-activity" && s?.isObserver !== !0)
    throw (
      m("subagent_launch", "observer_resume_sidecar_unconfirmed"),
      w(),
      new Vu(`Observer sidecar for ${e} missing or did not confirm isObserver; refusing delivery`)
    );
  let Rn = s?.isObserver ? (fB(un, ue) ?? ue) : void 0,
    Ct = r.options.tools.filter(Zh);
  if (!O && !s?.isObserver) await yZe(() => r.getAppState().mcp);
  let Bt = RIe(r),
    Pn = r.getAppState(),
    { assembleToolPool: $t } = r.options.toolCatalog,
    Nn = O
      ? zde(r.options.tools)
      : $t(de, zde(Pn.mcp.tools.concat(Ct)), { skipReplFilter: !0, machineMcpTools: Bt }),
    Ge = s?.isObserver
      ? lwr(
          yP(
            A,
            $t(de, zde(Ct), { skipReplFilter: !0, machineMcpTools: Bt }),
            !0,
            !1,
            !1,
            se,
            QN(r).mode
          ).resolvedTools
        )
      : Nn,
    Fn =
      h?.kind === "peer" && !xE(O || s?.isObserver ? Ge : yP(A, Ge, !0, !1, !1, se).resolvedTools),
    Te = h
      ? Yn(
          b,
          _,
          T,
          Oe({ content: Jke(k, h, { sendMessageToolAbsent: Fn }), origin: h, isMeta: !0 })
        )
      : Oe({ content: F ? Jke(k, void 0, { isMeta: !0 }) : k, ...(F && { isMeta: !0 }) }),
    ze = Tn(N) ? N.webFetchSavedFiles : void 0,
    Lt = av(A) ? (ze ? { dirs: [...ze.dirs], paths: [...ze.paths] } : Vhe()) : void 0,
    It = { agentId: e, deliveringLoop: r.agentId },
    Qe =
      s?.isObserver === !0 && (h?.kind === "observer-activity" || (Tn(N) && N.isObserver === !0));
  if (s?.isObserver === !0 && !Qe && iKt()) m("agent_intent_forward", "unconfirmed_observer");
  let Wt = x && (s?.stoppedByUser === !0 || _t || (Tn(M) && M.stoppedByUser === !0)),
    jt =
      Wt ||
      (x && Tn(M) && (M.status === "killed" || M.status === "completed" || M.status === "failed")),
    Ht = s?.finished === !0 || (Tn(M) && (M.status === "completed" || M.status === "failed"));
  if (jt && vLr(y.get(e)) === le)
    try {
      (await z3(Br(e), { revivedAt: pn, ...(Ht && { finished: void 0 }) }, r.storageV5), (lt = Ht));
    } catch (n) {
      if (Vt(n) || EA(kA(n)))
        t(`failed to record the revival of ${e}: ${kP(n)}`, { level: "warn" });
      else l(n);
    }
  if (!S) Unr(e, Te, "user");
  let xe;
  if (!S && !Qe)
    try {
      xe = ee?.();
    } catch (n) {
      (l(n), f("agent_intent_forward", "live_check_failed"));
    }
  let Je = S || Qe ? void 0 : Dri(It, xe ?? r.messages, xe === void 0 ? "snapshot" : "live"),
    qt = Je?.copies ?? [],
    Xe = zn().canUseToolNarrowings.get(e),
    Gt = O
      ? { systemPrompt: Se, parentSystemPrompt: !0 }
      : s?.isObserver
        ? { agentToolScope: A }
        : void 0,
    Kt = s?.launchedWithDefaults === !0 && !Lw(Ie),
    zt = {
      agentDefinition: A,
      promptMessages: S ? q : [...q, ...qt, Te],
      turnPrompt: S ? void 0 : (wy(Te.message.content) ?? void 0),
      toolUseContext: he,
      canUseTool: Xe ? Xe(V) : V,
      handbackOptIn: !(O || s?.isObserver),
      handbackTool: t0n,
      isAsync: !0,
      requestShape:
        !s?.isObserver && (s?.requestShape === "foreground" || s?.requestShape === "background")
          ? s.requestShape
          : void 0,
      requestNonInteractive:
        !s?.isObserver && typeof s?.requestNonInteractive === "boolean"
          ? s.requestNonInteractive || ye()
          : void 0,
      preserveToolUseResults: !ye(),
      persistedToolResultFiles: Lt,
      querySource: vae(A.agentType, Cl(A)),
      spawnedBySkill: $e,
      ...(v !== void 0 && { spawnedByForkedSkill: !0 }),
      model: s?.isObserver ? void 0 : O ? "inherit" : s?.model,
      effort: Pt,
      onModelRestricted: s?.isObserver ? void 0 : xIe($e ?? A.agentType, r.appendSystemMessage),
      override: Xe ? { ...Gt, requireCanUseTool: !0 } : Gt,
      availableTools: Ge,
      forkContextMessages: void 0,
      recordedUuids: new Set(q.map((n) => n.uuid)),
      compactTranscriptUnavailable: O,
      ...((O || s?.isObserver) && { useExactTools: !0 }),
      totalTokensReminderBudget: Z ? Z.totalTokensBudget : Dt,
      isTotalTokensReminderBudgetOnTopOfStart: Z
        ? Z.isBudgetOnTopOfStart
        : Dt !== void 0 && (O ? Fje() !== "none" : Fje() === "all"),
      worktreePath: Q,
      worktreeBranch: Ce,
      cwd: s?.cwd,
      launchedWithDefaults: Kt,
      typeFromStream: s?.fromStream === !0 && !We,
      spawnMode: Rn ?? s?.spawnMode,
      description: De,
      name: K,
      toolUseId: bt,
      contentReplacementState: _n
    },
    U = y.get(e);
  if (Tn(U) && U.stoppedByUser && (!x || (U.userStopCount ?? 0) !== le))
    throw (
      w(),
      new eK(
        `Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`
      )
    );
  let ve = re?.confirm(r.abortController.signal);
  if (ve !== void 0) {
    if ((w(), ve.kind === "aborted")) throw new Ye();
    if (ve.kind === "refused")
      throw (m("subagent_launch", "subagent_resume_refused_by_rule"), new Z2(ve.message));
    throw (m("subagent_launch", "subagent_resume_background_closed"), new Vu(Gn));
  }
  for (let n of qt) bon(e, n, y);
  if (!F && !S) bon(e, JF(h) ? Te : Oe({ content: k, origin: h }), y);
  ln?.();
  let D = Ale({
    outputFileReadable: TD(r.options.tools),
    agentId: e,
    ownerAgentId: tt(),
    parentAgentId: s?.parentAgentId,
    parentAbortController: W ? r.abortController : void 0,
    awaitedByCaller: W,
    awaitedByMainTurn: je,
    spawnDepth: se,
    launchedWithDefaults: Kt,
    description: z,
    prompt: k,
    model: Ae,
    selectedAgent: A,
    taskRegistry: y,
    toolUseId: r.toolUseId ?? zL(U?.toolUseId) ?? bt,
    cwd: Mt,
    forkedSkillName: v?.skillName,
    ...(h?.kind === "observer-activity" && { isObserver: !0 }),
    sessionScratch: r.session.sessionScratch
  });
  if (re !== void 0 && !re.handOver({ agentId: D.agentId, abortController: D.abortController }))
    throw (
      FA(D.agentId, y, "system", void 0, { lifecycleNotStarted: !0 }),
      mO(D.agentId, y),
      m("subagent_launch", "subagent_resume_background_not_taken"),
      new Z2(on)
    );
  (Tt.admit(), mn(), Sn?.started({ agentId: e, model: Ae }));
  let j = h?.kind === "observer-activity" ? void 0 : O3(r.agentId, y),
    En = !Tn(U) || (U.notified && U.quietlyParked !== !0),
    Qt = !1;
  if (j !== void 0) {
    let n = new Set(),
      u = j;
    while (u !== void 0 && !n.has(u)) {
      n.add(u);
      let i = y.get(u);
      if (((u = Tn(i) ? i.ownerAgentId : void 0), u === e)) {
        Qt = !0;
        break;
      }
    }
  }
  if (j !== void 0 && j !== e && En && !Qt) {
    let n,
      u = !ye();
    if (
      (y.update(e, (i) => {
        if (i.ownerAgentId !== j) n = i.ownerAgentId;
        else if (!u || i.handbackRecipient === j) return i;
        return { ...i, ownerAgentId: j, ...(u && { handbackRecipient: j }) };
      }),
      u)
    )
      HL(j, `agent:${e}`, y);
    if (n !== void 0) YHs(e, n, y);
  }
  let Re = y.get(e),
    Ut = Tn(Re) && aAo(r.agentId, Re.ownerAgentId, y),
    Ze = Ut ? xE(r.options.tools) : Tn(Re) ? Re.ownerCanContinueAgents : void 0;
  if (Ut)
    y.update(e, (n) =>
      n.ownerCanContinueAgents === Ze ? n : { ...n, ownerCanContinueAgents: Ze }
    );
  if (jt) {
    let n = y.get(e);
    r.messageQueue.enqueuePendingNotification(
      RHs({
        agentId: e,
        description: z,
        to: G0t({
          ownerAgentId: Tn(n) ? n.ownerAgentId : void 0,
          keepaliveReason: `agent:${e}`,
          delivering: !0,
          taskRegistry: y
        })
      })
    );
  }
  if (Wt) {
    let n = (i) => {
        if (Vt(i) || EA(kA(i)))
          t(`failed to clear stop marker for ${e}: ${kP(i)}`, { level: "warn" });
        else l(i);
      },
      u = () => vLr(y.get(e)) !== le;
    if (!u()) {
      if (
        (await hxo(Br(e), "stoppedByUser", r.storageV5).catch(n),
        await z3(Br(e), { stoppedByUser: !1 }, r.storageV5).catch(n),
        u())
      )
        await gxo(Br(e), A.agentType, r.storageV5);
    }
  }
  if (dn) mO(D.agentId, y);
  if (
    (await KTs({
      observedTaskId: e,
      observedDefinition: A,
      observedName: K ?? A.agentType,
      observedMeta: s
        ? { observerTaskId: s.observerTaskId, armingPermissionMode: s.armingPermissionMode }
        : null,
      toolUseContext: r,
      canUseTool: V
    }),
    NJ(e, y),
    K !== void 0 && r.getAppState().agentNameRegistry.get(K) === void 0)
  )
    r.agentLifecycle.registerName(K, Br(e));
  let Dn = {
      prompt: k,
      resolvedAgentModel: Ae,
      modelsUsed: kn,
      isBuiltInAgent: Cl(A),
      startTime: yn,
      agentType: A.agentType,
      isAsync: !0,
      agentDepth: se,
      callerCanContinueAgents: Ze,
      source: A.source,
      pluginId: uke(A) ? mc(A.plugin) : void 0,
      persistedToolResultFiles: Lt,
      spawnedSubagent: Tn(N) ? N.spawnedSubagent : void 0,
      priorForeignArtifactContent: (ne !== void 0 && HLs(ne)) || Vmt(I.messages)
    },
    et = {
      agentId: e,
      parentAgentId: r.agentId,
      depth: se,
      ...(zn().spawnedByMainThread.has(e) && { spawnedByMainThread: !0 }),
      parentSessionId: jx(),
      agentType: "subagent",
      subagentName: A.agentType,
      displayName: K,
      isAsync: !0,
      isBuiltIn: Cl(A),
      invokingRequestId: dt,
      invocationKind: "resume",
      invocationEmitted: !1,
      parentPromptId: Pe,
      isBackgroundAgent: !je,
      ...Rj(r.agentContext)
    },
    Cn = h?.kind === "observer-activity" ? () => {} : y.takeConcurrencySlot(),
    Yt = aI(et, () =>
      Rkn(Ve.project, () =>
        ste({
          taskId: D.agentId,
          abortController: D.abortController,
          makeStream: (n, u, i) =>
            zR({
              ...zt,
              session: Ve,
              override: {
                ...zt.override,
                agentId: Br(D.agentId),
                agentContext: et,
                abortController: D.abortController
              },
              onCacheSafeParams: n,
              onQueryProgress: u,
              onStreamTokenEstimate: i,
              ...(G !== void 0 && W && !je && { canShowPermissionPrompts: !1 })
            }),
          metadata: { ...Dn, agentContext: et },
          description: z,
          toolUseContext: r,
          taskRegistry: y,
          agentIdForCleanup: e,
          enableSummarization: OSe() || ((P7e() || O || yle()) && !ye()),
          getWorktreeResult: async () =>
            Q ? { worktreePath: Q, ...(Ce !== void 0 && { worktreeBranch: Ce }) } : {},
          shouldNotifyOwner: W ? () => !1 : void 0,
          reviewInlineHandoff: X === "reply" && W,
          onTerminalSuccess: v
            ? () => {
                let n = v.skillName,
                  u = `:${n}`;
                if (kee().has(u)) return;
                die(n, n, "", null);
                let i = hTe(Le ?? n);
                if (i)
                  r.applyAttributionOp({ kind: "recordVerification", method: i, checkout: St });
              }
            : void 0,
          onRunSettled: Cn
        })
      )
    );
  if (Je !== void 0) Ori(It, Je);
  if ((g("subagent_launch"), W))
    try {
      await Yt;
      let n = y.get(e),
        u = Tn(n) ? n.result : void 0;
      return {
        agentId: e,
        description: z,
        outputFile: D.outputFile,
        inlineHandback: {
          content: u?.content ?? [],
          harnessNoteCount: u?.harnessNoteCount,
          harnessTailCount: u?.harnessTailCount,
          harnessSectionHash: u?.harnessSectionHash
        }
      };
    } catch (n) {
      if (n instanceof Error) Object.defineProperty(n, ot, { value: !0 });
      throw n;
    } finally {
      if (!wke(e, y) && !Fmt(e, y)) Fde(e);
      y.update(e, (n) => ({ ...n, notified: !0, evictAfter: QIo(n) }));
    }
  return { agentId: e, description: z, outputFile: D.outputFile };
}
function Un(e, k) {
  if (
    e.type !== "user" ||
    !("agentId" in e && e.agentId === k) ||
    e.interruptedByShutdown !== !0 ||
    !Array.isArray(e.message.content)
  )
    return e;
  if (!Xue(e))
    return vm(e) ? { ...e, message: { ...e.message, content: [{ type: "text", text: a3o }] } } : e;
  return {
    ...e,
    toolUseResult: Gx,
    toolDenialKind: void 0,
    message: {
      ...e.message,
      content: e.message.content.map((h) => (h.type === "tool_result" ? { ...h, content: Gx } : h))
    }
  };
}
function Yn(e, k, h, b) {
  return e === void 0
    ? b
    : { ...b, joinedNoticeLengths: e, joinedNoticeOwn: k, joinedNoticeRunIds: h };
}
export { lwr, mfo, dwr, cwr, Jgi, CF, uwr, Vu, pL, Z2, eK, rte, Sve, nJ, gfo, fwr };

//# sourceMappingURL=chunk-g936x3jq.js.map
