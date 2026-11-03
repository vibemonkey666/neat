// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { tt, ke } from "./chunk-wrtp8qz8.js";
import { g, f } from "./chunk-brszmkb3.js";
import { Cq } from "./chunk-ewvf3tep.js";
import { Di } from "./chunk-01qhvw6m.js";
import { t } from "./chunk-4kxznmzw.js";
import { E4r } from "./chunk-ajtyjx88.js";
import { O } from "./chunk-19xvg81r.js";
import { B5 } from "./chunk-jwqtbev0.js";
import { Za } from "./chunk-j0tbz6ra.js";
import { Wt } from "./chunk-7svjr0za.js";
import { gR } from "./chunk-9zd34fgb.js";
import { Z } from "./chunk-p27rr8yn.js";
import { ha } from "./chunk-cqrqqt4t.js";
import { ey, PY, C8, yye, M1t, ufn, zQ } from "./chunk-4sp6n814.js";
import { TQt, JLn, ivs, lvs, dfo } from "./chunk-gtd0g067.js";
import { LOt } from "./chunk-34151x92.js";
import { GLn, ofo, rme } from "./chunk-8x7w052f.js";
import { Uct } from "./chunk-46ty1j5h.js";
import { sBe } from "./chunk-40d7g4g3.js";
import {
  Tve,
  Eae,
  NQt,
  hy,
  P_,
  Wfo,
  bEs,
  SEs,
  wEs,
  EEs,
  kEs,
  e1,
  IIe,
  mL
} from "./chunk-hgshn9e7.js";
import { x8 } from "./chunk-ywy052ac.js";
import { Xa } from "./chunk-4b5gpbbs.js";
var z = 1000,
  Q = 200,
  w = { armable: new Set(), yielded: new Set(), undo: () => {} };
async function ee() {
  let n = (await ufn()).find((r) => r.pid === process.pid);
  return n === void 0 ? void 0 : { sessionId: n.sessionId, tmux: n.tmux };
}
async function DTi(e) {
  let n = await te(e).finally(() => e.claim?.end());
  if (n.kind === "took_over")
    g("artifact_live_subscribe", {
      took_over: !0,
      holders: e.holders.length,
      armable_count: n.armable.size,
      yielded_count: n.yielded.size
    });
  else f("artifact_live_subscribe", `takeover_${n.kind}`, { holders: e.holders.length });
  return n;
}
async function te(e) {
  if (!ha()) return { ...w, kind: "messaging_off" };
  let n = zQ();
  if (n === void 0 || e.holders.length === 0) return { ...w, kind: "no_inbox" };
  let r = gR(n),
    a = e.transport?.ownRecord ?? ee,
    s = await a().catch(() => {
      return;
    });
  if (s?.sessionId !== e.conversationId) {
    let o = e.transport?.timers ?? JLn;
    (await new Promise((d) => void o.setTimeout(d, Q)),
      (s = await a().catch(() => {
        return;
      })));
  }
  if (s?.sessionId !== e.conversationId) return { ...w, kind: "registry_stale" };
  let l = s.tmux;
  if (e.holdersIncomplete === !0 && !e.alreadyReplying) return { ...w, kind: "holder_unreachable" };
  let p = e.slugs.filter((o) => !(e.claim?.lost.has(o) ?? !1)).slice(0, TQt);
  if (p.length === 0) return { ...w, kind: "nothing_freed" };
  let h = [];
  for (let o of e.holders) {
    if (
      o.sock === void 0 ||
      o.sock === "" ||
      !(o.peerFeatures?.includes(E4r) ?? !1) ||
      gR(o.sock) === r ||
      GLn(o.kind)
    ) {
      if (e.alreadyReplying) continue;
      return { ...w, kind: "holder_unreachable" };
    }
    h.push({ sock: o.sock, pid: o.pid });
  }
  if (h.length === 0) return { ...w, kind: "holder_unreachable" };
  let c = e.transport?.send ?? M1t,
    u = e.transport?.sendControl ?? yye,
    I = e.transport?.timers ?? JLn,
    T = e.transport?.now ?? Date.now,
    G = B5(n),
    Y = (o) => (O() !== "windows" ? { expectPeerPid: o } : {}),
    v = [],
    D = new Set(),
    { wakes: b, autoReact: X, durable: V } = Z(),
    W = (o) => {
      for (let d of o.yielded) {
        let i = b.takenFrom.get(d) ?? [];
        if (!i.some((y) => y.msgId === o.msgId))
          b.takenFrom.set(d, [...i, { sock: o.sock, pid: o.pid, msgId: o.msgId }]);
        if (
          e.alreadyReplying &&
          (X.userDisarmed || V.stopLatches.isStopped(d) || (hy(d) && !P_(d)))
        )
          aws(d, u);
      }
    },
    U = e.claim?.sentAt ?? T(),
    A = (o, d, i) => {
      let y =
        i?.precautionary !== void 0
          ? [...i.precautionary]
          : [...o.yielded].filter((m) => d === void 0 || d.has(m));
      if (y.length === 0) return;
      for (let m of y) o.yielded.delete(m);
      g("artifact_live_subscribe", {
        [i?.precautionary !== void 0 ? "takeover_unyield_precautionary" : "takeover_handed_back"]:
          y.length
      });
      let _ = {
        action: "unyield_artifact_replies",
        orig_msg_id: o.msgId,
        slugs: y,
        ...(i?.stopped === !0 && { stopped: !0 })
      };
      u(o.sock, _, Y(o.pid)).catch((m) => {
        if (
          (t(`[reply-yield] unyield to ${ey(o.sock)} failed: ${PY(String(m))}`),
          C8(m) && !Xa(o.pid))
        ) {
          f("artifact_live_subscribe", "unyield_holder_gone");
          return;
        }
        let k = () =>
          void u(o.sock, _, Y(o.pid)).catch(() => {
            f("artifact_live_subscribe", "unyield_send_failed");
          });
        if (C8(m)) I.setTimeout(k, z);
        else k();
      });
    },
    N = [];
  for (let o of h) {
    let d = x8(),
      i = { sock: o.sock, pid: o.pid, msgId: d.msg_id, yielded: new Set() };
    v.push(i);
    let y = ivs(d.msg_id, p, {
      sentAt: U,
      expectPid: o.pid,
      ...(e.transport?.timeoutMs !== void 0 && { timeoutMs: e.transport.timeoutMs }),
      ...(e.transport?.timers !== void 0 && { timers: e.transport.timers }),
      onLate: (_) => {
        if (_.kind !== "yielded") return;
        for (let k of _.yielded) i.yielded.add(k);
        let m = new Map([...(e.claim?.lost ?? []), ..._.lostTo]);
        (A(
          i,
          new Set(
            [...i.yielded].filter((k) =>
              m.has(k) ? q(k, i, m, e.alreadyReplying === !0) : !e.alreadyReplying && !D.has(k)
            )
          )
        ),
          W(i));
      }
    });
    N.push(
      (async () => {
        try {
          await c(
            o.sock,
            {
              action: "yield_artifact_replies",
              from: G,
              session_id: e.conversationId,
              slugs: p,
              reason: e.reason,
              sent_at: T(),
              claimed_at: U,
              requester: { cwd: ke(), ...(l !== void 0 && { tmux: l }) }
            },
            d,
            Y(o.pid)
          );
        } catch (_) {
          if (C8(_)) {
            let m = lvs(d.msg_id),
              k = m.map(([J]) => J);
            return Xa(o.pid)
              ? { kind: "unreachable", lost: k, lostTo: m }
              : { kind: "gone", lost: k, lostTo: m };
          }
        }
        return y;
      })()
    );
  }
  let B = await Promise.all(N),
    P = new Map(),
    x = new Map(),
    L = new Map(),
    S = new Map(e.claim?.lost ?? []),
    C = !0,
    K = !1,
    F = 0;
  B.forEach((o, d) => {
    for (let [i, y] of o.lostTo) S.set(i, y);
    if (o.kind === "gone") return;
    if ((F++, o.kind === "unreachable")) {
      C = !1;
      return;
    }
    if (o.kind === "yielded") {
      for (let i of o.yielded) (v[d].yielded.add(i), P.set(i, (P.get(i) ?? 0) + 1));
      for (let i of o.notHeld) x.set(i, (x.get(i) ?? 0) + 1);
      for (let i of new Set([...o.yielded, ...o.notHeld])) L.set(i, (L.get(i) ?? 0) + 1);
    } else if (((C = !1), o.kind === "refused")) K = !0;
  });
  let R = new Set(),
    M = new Set();
  if (C && !K)
    for (let o of p) {
      if (S.has(o) || (L.get(o) ?? 0) !== F) continue;
      if ((P.get(o) ?? 0) > 0) (R.add(o), M.add(o));
      else if ((x.get(o) ?? 0) === F) R.add(o);
    }
  for (let o of R) D.add(o);
  if (e.alreadyReplying) {
    for (let o of v) for (let d of o.yielded) if (!S.has(d)) M.add(d);
  }
  for (let o of v) {
    let d = new Set(
      [...o.yielded].filter((i) =>
        S.has(i) ? q(i, o, S, e.alreadyReplying === !0) : !e.alreadyReplying && !R.has(i)
      )
    );
    if (d.size > 0) A(o, d);
  }
  if (!e.alreadyReplying)
    B.forEach((o, d) => {
      if (o.kind === "timeout") A(v[d], void 0, { precautionary: p });
    });
  for (let o of v) W(o);
  return {
    armable: R,
    yielded: M,
    kind: R.size > 0 ? "took_over" : "nothing_freed",
    undo: (o) => {
      for (let i of v) A(i, o);
      let d = new Set(v.map((i) => i.msgId));
      for (let i of o ?? p) {
        let y = (b.takenFrom.get(i) ?? []).filter((_) => !d.has(_.msgId));
        if (y.length > 0) b.takenFrom.set(i, y);
        else b.takenFrom.delete(i);
      }
    }
  };
}
function q(e, n, r, a) {
  let s = r.get(e);
  return (s !== void 0 && s === B5(n.sock)) || (!a && !e1(e));
}
function aws(e, n = yye) {
  j(e, !0, n);
}
function Xgi(e, n = yye) {
  j(e, !1, n);
}
function j(e, n, r) {
  let { wakes: a } = Z(),
    s = a.takenFrom.get(e);
  if (s === void 0 || e1(e)) return;
  a.takenFrom.delete(e);
  for (let l of s) {
    let p = {
        action: "unyield_artifact_replies",
        orig_msg_id: l.msgId,
        slugs: [e],
        ...(n && { stopped: !0 })
      },
      h = O() !== "windows" ? { expectPeerPid: l.pid } : {};
    r(l.sock, p, h).catch((c) => {
      if (
        (t(`[reply-yield] release to ${ey(l.sock)} failed: ${PY(String(c))}`), C8(c) && !Xa(l.pid))
      )
        return;
      let u = () =>
        void r(l.sock, p, h).catch(() => {
          f("artifact_live_subscribe", "takeover_release_failed");
        });
      if (C8(c)) JLn.setTimeout(u, z);
      else u();
    });
  }
  g("artifact_live_subscribe", { [n ? "takeover_stop_notified" : "takeover_released"]: s.length });
}
function H(e) {
  let n = e.slice(0, 2),
    r = e.length - n.length;
  return `${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}
function Tuo(e, n, r, a) {
  let s = ofo(
      {
        kind: "interactive",
        ...(typeof r.cwd === "string" && { cwd: r.cwd }),
        ...(typeof r.tmux === "string" && { tmux: r.tmux })
      },
      a
    ),
    l =
      n === "resume"
        ? `the session that just resumed this conversation in ${s}`
        : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}
function Auo(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}
function Cuo(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}
var oe =
    "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do \u2014 do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.",
  ne =
    "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.",
  ie =
    "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";
function HTi(e, n) {
  let r =
      e === "yielded"
        ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation`
        : e === "reverted"
          ? `Comment replies on ${n} Artifact(s) are back with this session`
          : `Comment replies on ${n} Artifact(s) were stopped in the other session`,
    a = e === "yielded" ? oe : e === "reverted" ? ie : ne;
  Za({
    value: Di({
      taskType: Cq,
      summary: Wt(r),
      body: `
<event>${Wt(a)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: { kind: "task-notification", source: Cq },
    agentId: tt()
  });
}
function Ruo(e) {
  return (
    dfo(
      (n) => {
        let r = se(n.slugs, n.msgId),
          a = r.newlyYielded;
        if (a.length > 0) g("artifact_comments_autoreact", { yielded_to_other_session: a.length });
        return {
          yielded: r.yielded,
          notHeld: r.notHeld,
          ...(a.length > 0 && {
            onDelivered: () => {
              let s = a.filter((l) => e1(l));
              for (let l of s) bEs(l);
              if (s.length > 0) e.yielded(s, n.reason, n.requester);
            }
          })
        };
      },
      (n, r, a) => {
        for (let u of r) if (a?.stopped?.has(u) ?? !1) EEs(u, n);
        let s = new Set(r.filter((u) => kEs(u))),
          l = new Set(r.filter((u) => SEs(u))),
          p = re(n, r),
          h = p.filter((u) => l.has(u) && !hy(u) && E(u) && !(a?.transferring?.has(u) ?? !1));
        if (h.length > 0) e.reverted(h);
        let c = p.filter((u) => l.has(u) && s.has(u));
        if (c.length > 0) e.stoppedElsewhere(c);
        return p;
      }
    ),
    () => dfo(null)
  );
}
function se(e, n) {
  let { live: r, autoReact: a, durable: s } = Z(),
    l = [],
    p = [],
    h = [];
  for (let c of e) {
    if (e1(c)) {
      (Wfo(c, n), l.push(c));
      continue;
    }
    let u = E(c),
      I = P_(c) && !IIe(c),
      T =
        a.wakeEnabledMemo !== !1 && !a.userDisarmed && !s.stopLatches.isStopped(c) && (!hy(c) || I);
    if (!u || !T) {
      p.push(c);
      continue;
    }
    (Wfo(c, n), Eae(c), NQt(c), mL(r, c), l.push(c), h.push(c));
  }
  return { yielded: l, notHeld: p, newlyYielded: h };
}
function E(e) {
  let { live: n } = Z(),
    r = n.supervisors.get(e);
  return (
    (r !== void 0 && !r.stopped && r.autoReactWiring !== void 0) ||
    n.inFlightWiredIntent.has(e) ||
    sBe().has(e)
  );
}
function re(e, n) {
  let { live: r } = Z(),
    a = [];
  for (let s of n) {
    if (!wEs(s, e)) continue;
    if ((mL(r, s), hy(s) && !P_(s))) (Uct(s), aws(s));
    a.push(s);
    let l = r.supervisors.get(s);
    if (!hy(s) && !E(s)) Xgi(s);
    let p = Tve(s).lastWakeArgs;
    if (!hy(s) && E(s) && l?.taskId !== void 0 && LOt(l.taskId) && p !== null)
      rme({
        ...p,
        seed: !1,
        confirm: void 0,
        confirmBase: void 0,
        confirmAfter: void 0,
        reentry: void 0,
        idlePass: void 0,
        suppressSummonStatus: void 0
      });
  }
  if (a.length > 0) g("artifact_comments_autoreact", { yield_reverted: a.length });
  return a;
}
export { DTi, aws, Xgi, Tuo, Auo, Cuo, HTi, Ruo };

//# sourceMappingURL=chunk-jxywah8y.js.map
