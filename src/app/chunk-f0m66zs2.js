import {
  fileURLToPath as __sourceFilePath_b22d09c0171848e2,
  URL as __sourceFilePath_b22d09c0171848e2_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import {
  F,
  q,
  mts,
  ke,
  ao,
  Tns,
  wit,
  ye,
  sie,
  Ait,
  HYt,
  Cit,
  J,
  Ree,
  HYe,
  zc
} from "./chunk-wrtp8qz8.js";
import { Ke, Qe, N } from "./chunk-fs43t96t.js";
import { g } from "./chunk-brszmkb3.js";
import { zn, Ki, yl } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { xt } from "./chunk-qakn3b85.js";
import { vM } from "./chunk-tcvjb2c0.js";
import { jht } from "./chunk-6h7ejyet.js";
import {
  Kjn,
  pp,
  rne,
  u0t,
  W4,
  tIr,
  Omt,
  xk,
  mp,
  $je,
  hw,
  zzn,
  yne,
  GNt,
  MMe,
  xd,
  Axo,
  sin,
  XJ,
  oY,
  JJ,
  zxo,
  Vxo,
  ca,
  qxo,
  zDr,
  Rg,
  Ane,
  pin,
  WMe,
  C1,
  OK,
  Kke,
  nPo,
  bin,
  KN,
  NK,
  xg,
  D_
} from "./chunk-j0tbz6ra.js";
import { bf } from "./chunk-zjm5ncxc.js";
import { g7 } from "./chunk-wany0nxw.js";
import { OLe, Ewt, hKe, kwt, Twt } from "./chunk-p27rr8yn.js";
import { S1o } from "./chunk-1fnv3zry.js";
import { yp } from "./chunk-m5rm7nsm.js";
import { Yu, GJe, M1, Tn } from "./chunk-yyq6mj0n.js";
import { ize } from "./chunk-xt7fs806.js";
import { Kgn } from "./chunk-khq9hq2s.js";
import { OZe } from "./chunk-b6tgsycv.js";
import { bAe } from "./chunk-r5xsp8d0.js";
import { LOo } from "./chunk-fnsjs1v2.js";
import { ohe } from "./chunk-nzbb091t.js";
import { bte } from "./chunk-426edz56.js";
import { T$n, A$n } from "./chunk-3bmk6ayz.js";
import { a3 } from "./chunk-np93gdqs.js";
import { jve } from "./chunk-7ynx1m85.js";
import { vut } from "./chunk-saycjcc7.js";
import { jgo } from "./chunk-py4pxrg9.js";
import { $go } from "./chunk-vvh1h2k6.js";
import { $Be } from "./chunk-7cb81v02.js";
import { i1 } from "./chunk-4jv79ccn.js";
import { _$n } from "./chunk-gnqwtd1z.js";
import { w$n } from "./chunk-28117reb.js";
import { cs } from "./chunk-eacq4pgt.js";
import { Kre } from "./chunk-2a5hfwr3.js";
import { randomUUID as le } from "crypto";
var ce = null;
async function* Lgo({
  session: o,
  setMessages: a,
  readFileState: p,
  sessionEnvVars: K,
  toolState: z,
  memorySelector: W,
  getAppState: r,
  setAppState: M,
  sessionHooksRegistry: Y,
  dialogStore: Q,
  isolationLatch: c,
  taskRegistry: _,
  clearedSessionTitle: C,
  storageV5: n,
  credentials: O,
  deferSessionStartHooks: D,
  releaseDeferredSessionStartHooks: X,
  resetTrigger: I,
  resetUserMessageUuid: Z
}) {
  (w$n(o), D_(NK), kwt(), hKe(), OLe());
  let V = MMe();
  (await GNt(o, "clear", {
    sessionHooks: Y,
    getAppState: r,
    signal: AbortSignal.timeout(V),
    storageV5: n,
    credentials: O
  }),
    Kjn("conversation_clear"));
  let S = new Set(),
    A = new Map();
  if (r && c?.current != null) {
    let e = Object.values(r().tasks).filter((s) => !P(s) && (Tn(s) || Yu(s)));
    if (e.every(ue)) {
      for (let s of e) if ((S.add(s.id), Tn(s))) A.set(s.id, s.agentId);
    }
  }
  let R = (e) => P(e) || S.has(e.id),
    u = new Set(),
    U = [];
  if (r)
    for (let e of Object.values(r().tasks)) {
      if (R(e)) continue;
      if (Tn(e)) (u.add(e.agentId), U.push(e));
      else if (Yu(e)) u.add(e.identity.agentId);
    }
  (X?.(), g7("clear"), a3(o, void 0), a((e) => (zzn.of(o).rollOverContext("main", rne(e)), [])));
  let ee = r
    ? Object.values(r().tasks).some(
        (e) => !R(e) && GJe.has(e.type) && (e.status === "running" || (Tn(e) && hw(e)))
      )
    : !1;
  $go(o, u, M, z, n, ee);
  let b = ke();
  try {
    mp(b);
  } catch {
    t(`/clear: originalCwd "${b}" no longer exists; falling back`);
    let e = ao();
    if (e !== b)
      try {
        mp(e);
      } catch {}
  }
  if (
    (p.clear(),
    jve.of(o.host).reset(),
    xk.of(o).discardAll(),
    D_(
      (e) => e.mode === "task-notification" && typeof e.value === "string" && Omt(e.value) !== null
    ),
    K?.clear(),
    W4(W),
    c && u.size === 0 && S.size === 0)
  )
    c.current = null;
  if (r) A$n(r);
  let v = Rg(q()),
    j = Ane(),
    h = !C && v !== void 0,
    te = h && zDr(ca(q())),
    T,
    w;
  if ((Ewt(), M)) {
    if (
      (Q?.dismissKind(bte.kind),
      Kgn(new Set()),
      M((e) => {
        let s = {},
          E = [];
        for (let [d, m] of Object.entries(e.tasks)) {
          if (!R(m)) {
            s[d] = m;
            continue;
          }
          E.push(d);
          try {
            if (m.status === "running") {
              if (pp(m)) (m.shellCommand?.kill(), m.shellCommand?.cleanup());
              if ("abortController" in m) m.abortController?.abort();
            }
          } catch (me) {
            l(me);
          }
          yp(d);
        }
        ((T = F(Object.values(s), (d) => !fe.has(d.type) && !u0t(d))), (w = e.activeGoal));
        let f = e.transcripts;
        if (f && E.length > 0) {
          f = { ...f };
          for (let d of E) delete f[d];
        }
        return {
          ...T$n(e),
          tasks: s,
          ...(f !== e.transcripts && { transcripts: f }),
          ...(e.viewingAgentTaskId !== void 0 &&
            E.includes(e.viewingAgentTaskId) && {
              viewingAgentTaskId: void 0,
              viewSelectionMode: "none"
            }),
          runningSubagents: T === 0 ? 0 : e.runningSubagents,
          ...{ endedByModel: !1 },
          attribution: jht(),
          cacheBreakerPhrase: void 0,
          sendMessagePins: {},
          agentNameRegistry: _$n(e.agentNameRegistry, s),
          frameUrls: {},
          standaloneAgentContext:
            h && e.standaloneAgentContext?.name ? { name: e.standaloneAgentContext.name } : void 0,
          fileHistory: { snapshots: [], trackedFiles: new Set(), snapshotSequence: 0 }
        };
      }),
      w !== void 0)
    )
      Kre(w, "session_clear");
    i1({});
  }
  if (
    c &&
    u.size === 0 &&
    S.size > 0 &&
    r &&
    ![...S].some((e) => Object.hasOwn(r().tasks, e) || G(e, A.get(e) ?? e)) &&
    !Object.values(r().tasks).some((e) => Tn(e) && [...A.values()].includes(e.agentId))
  )
    c.current = null;
  if (_ && T === 0) _.resetWebSearchBudget();
  if (r) {
    for (let e of r().mcp.clients)
      if (e.name === "ide" && e.type === "connected") {
        ohe(e, void 0);
        let { clearServerCache: s } = import.meta
          .require(
            __sourceFilePath_b22d09c0171848e2(
              new __sourceFilePath_b22d09c0171848e2_URL("./chunk-43z4gqzg.js", import.meta.url)
            )
          )
          .mcpClientModule();
        await s(e.name, e.config).catch(() => {});
      }
  }
  S1o();
  let oe = q(),
    se = C ? (xd() ?? bf()) : void 0,
    re = JJ(),
    H = T === 0 && u.size === 0 ? void 0 : Ree(),
    ne = [...bin()],
    ie = !1,
    ae = !1;
  if ((pin(), re)) zxo();
  if (ie) (sie(!0), HYt(!0));
  if (ae) (Ait(!0), Cit(!0));
  if (H !== void 0) HYe(H);
  let k = le();
  if (ye() || (zc() && bAe())) {
    let e = I === "clear" ? Kt(Z) : null;
    (a3(o, k),
      Ki({
        type: "conversation_reset",
        new_conversation_id: k,
        uuid: k,
        ...(I !== void 0 && { trigger: I }),
        ...(e !== null && { user_message_uuid: e }),
        timestamp: new Date().toISOString()
      }),
      g("bridge_conversation_reset"));
  }
  if (
    (vut.of(o.host).conversationReset(),
    yield { type: "conversation_reset", newConversationId: k },
    Tns(n),
    wit(),
    ye() && vM() && sin() && !J())
  )
    Axo();
  let L = ca(q()),
    pe = te || (h && zDr(L));
  if ((mts({ setCurrentAsParent: !0 }), h && v !== void 0)) C1(v);
  let ge = Promise.resolve(!0);
  if (
    (OZe(),
    Twt(),
    jgo.of(o).reset(),
    xt().needsAuthNoticedThisSession.clear(),
    ize(o),
    i.CLAUDE_CODE_SESSION_ID)
  )
    process.env.CLAUDE_CODE_SESSION_ID = q();
  await XJ();
  for (let e of ce?.pauseStampsCarriedAcrossClear(r?.().mcp.clients, ne) ?? [])
    nPo({ ...e, afterUuid: null }, n);
  if ((Vxo(), qxo(L), await LOo(q(), bf(), n), C)) await oY(oe, C, se, "user", n);
  else if (v) {
    if ((await oY(q(), v, void 0, "user", n), j)) await WMe(q(), j, void 0, "user", n);
  }
  for (let e of U) if (e.status === "running") $je(e.agentId);
  let { isCoordinatorMode: de } = import.meta.require(
    __sourceFilePath_b22d09c0171848e2(
      new __sourceFilePath_b22d09c0171848e2_URL("./chunk-atxvbyzx.js", import.meta.url)
    )
  );
  OK(de() ? "coordinator" : "normal");
  let B = yl();
  if (B) KN(B, n);
  if (c?.current) Kke(c.current, n);
  if (D) {
    if (
      (D((e) =>
        yne(o, "clear", { signal: e, storageV5: n, credentials: O }).catch((s) => {
          if (Ke(s)) t(`SessionStart hooks after /clear aborted: ${N(s).message}`);
          else l(Qe(N(s), "SessionStart hooks after /clear threw"));
          return [];
        })
      ),
      tIr())
    )
      a($Be);
    return;
  }
  let x = await yne(o, "clear", { storageV5: n, credentials: O });
  if (x.length > 0) a(() => x);
  if (tIr()) a($Be);
}
function P(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1;
}
function ue(o) {
  return (
    Tn(o) &&
    M1(o) &&
    (o.keepaliveReasons?.size ?? 0) === 0 &&
    o.finalizing !== !0 &&
    o.resuming !== !0 &&
    (o.pendingMessages?.length ?? 0) === 0 &&
    !G(o.id, o.agentId)
  );
}
function G(o, a) {
  return (
    zn().resumesInFlight.has(a) ||
    xg()
      .getCommandQueue()
      .some((p) => p.mode === "task-notification" && (p.taskId === o || p.agentId === a))
  );
}
var fe = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task"]);
function Ngo(o) {
  return Object.values(o).some((a) => !P(a) && GJe.has(a.type) && !cs(a.status));
}
export { Lgo, Ngo };

//# sourceMappingURL=chunk-f0m66zs2.js.map
