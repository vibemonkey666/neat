// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br } from "./chunk-6bbdndfe.js";
import { F, q, tt } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { I } from "./chunk-a16y5hcz.js";
import { Z, nhn } from "./chunk-p27rr8yn.js";
import { Cq, rYt, jkn, l } from "./chunk-ewvf3tep.js";
import { Di } from "./chunk-01qhvw6m.js";
import { Wt } from "./chunk-7svjr0za.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { zn, Ha, h5o } from "./chunk-ajtyjx88.js";
import { ekt } from "./chunk-rh5ymkjp.js";
import { ar } from "./chunk-r1dvrqha.js";
import { MU } from "./chunk-khq9hq2s.js";
import { VCr, AJ, tG, EIr, fon, pon, NHs, Mzn, Qje, Kon, LP, Za, D_ } from "./chunk-j0tbz6ra.js";
import { hm, rdn } from "./chunk-6h7ejyet.js";
import { RD } from "./chunk-yyq6mj0n.js";
import { oHe } from "./chunk-6eew75md.js";
import { mw, g9e, LRs } from "./chunk-322wstk9.js";
import { vve, Eve, kve } from "./chunk-prd2mdq9.js";
import { Eae, NQt, $Qt, yy, P_, mL } from "./chunk-hgshn9e7.js";
import { W0n } from "./chunk-ajn1cnw7.js";
import { cs } from "./chunk-eacq4pgt.js";
import { $O } from "./chunk-e2shv4sr.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { randomUUID as J } from "crypto";
var ee = 15000,
  te = 60000,
  B = 20;
function oe(e, n, t, o) {
  return e === "auto-replied" ? fon(n, t) : e === "auto-edited" ? pon(n, t) : NHs(n, t, o);
}
function ne(e) {
  let n = Z().noticeCoalesce,
    t = n.get(e);
  if (t === void 0) return;
  if ((n.delete(e), t.timer !== void 0)) clearTimeout(t.timer);
  let o = oe(t.family, t.artifactName, t.count, t.suppressedPrior > 0),
    i =
      t.droppedDetails > 0
        ? `

(${t.droppedDetails} earlier ${t.droppedDetails === 1 ? "notice" : "notices"} in this burst omitted \u2014 newest ${B} kept.)`
        : "";
  t.queue.enqueuePendingNotification({
    uuid:
      t.family === "artifact-changed"
        ? J()
        : W0n(void 0, t.ownGestureEpoch === Z().accountEpoch ? t.slug : void 0),
    value: Di({
      taskType: t.family === "artifact-changed" ? EIr : "artifact-auto-react",
      summary: Wt(o),
      body: `
${Wt(
  t.details.join(`

`) + i
)}`
    }),
    mode: "task-notification",
    origin: {
      kind: "task-notification",
      source: t.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
      slug: t.slug,
      displayName: t.artifactName,
      coalesced: { family: t.family, count: t.count }
    },
    agentId: tt()
  });
}
function Yvs(e) {
  let { queue: n, slug: t, family: o, artifactName: i, detail: r, mergeDetails: s } = e,
    h = (e.now ?? Date.now)(),
    p = e.settle?.settleMs ?? ee,
    u = e.settle?.maxSettleMs ?? te,
    y = Z().noticeCoalesce,
    S = `${o}
${t}`,
    v = Z().accountEpoch,
    d = y.get(S);
  if (d === void 0)
    ((d = {
      slug: t,
      family: o,
      artifactName: i,
      mergeDetails: s,
      count: 0,
      threadIds: new Set(),
      firstAt: h,
      details: [],
      droppedDetails: 0,
      suppressedPrior: 0,
      ownGestureEpoch: e.ownGesture ? v : void 0,
      queue: n,
      timer: void 0
    }),
      y.set(S, d));
  else if (!e.ownGesture || d.ownGestureEpoch !== v) d.ownGestureEpoch = void 0;
  if (((d.artifactName = i), (d.queue = n), e.threadId !== void 0)) d.threadIds.add(e.threadId);
  if (
    ((d.count = d.threadIds.size > 0 ? d.threadIds.size : d.count + 1), d.mergeDetails === "latest")
  )
    d.details = [r];
  else if ((d.details.push(r), d.details.length > B)) (d.details.shift(), d.droppedDetails++);
  if (d.timer !== void 0) clearTimeout(d.timer);
  let E = d.firstAt + u,
    L = Math.max(0, Math.min(p, E - h)),
    k = setTimeout(ne, L, S);
  (k.unref?.(), (d.timer = k));
}
function D(e) {
  let n = Z().noticeCoalesce,
    t = [];
  for (let [o, i] of n) {
    if (e !== void 0 && i.slug !== e) continue;
    if (i.family === "artifact-changed") continue;
    if (i.timer !== void 0) clearTimeout(i.timer);
    (n.delete(o),
      t.push({ slug: i.slug, family: i.family, artifactName: i.artifactName, count: i.count }));
  }
  return t;
}
function W(e) {
  for (let n of Z().noticeCoalesce.values())
    if (n.slug === e && n.family !== "artifact-changed") return !0;
  return !1;
}
var Dwr = 3600000;
var Xvs = "4001",
  MOt = "4503",
  DOt = "4403",
  w0n = 900000;
var Jvs = 300000,
  Qvs = 3;
function Zvs(e) {
  let { transport: n, token: t, ver: o, accountEpoch: i, expUnixSeconds: r, receivedAtMs: s } = e;
  return {
    transport: n,
    token: t,
    expMs: P(n, r, s),
    ver: o,
    accountEpoch: i,
    opened: !1,
    failedDials: 0,
    probed: !1
  };
}
function eEs(e, n) {
  ((e.token = n.token),
    (e.expMs = P(e.transport, n.expUnixSeconds, n.receivedAtMs)),
    (e.probed = !1),
    (e.failedDials = 0));
}
function P(e, n, t) {
  let o = e === "sync" ? 900000 : 3600000,
    i = e === "sync" ? 300000 : 1800000,
    r = n === void 0 ? o : n * 1000 - t;
  return t + Math.min(o, Math.max(i, r));
}
function Nfo(e, n) {
  if (n.expired || n.refused) return !1;
  if (n.healthy) return ((e.failedDials = 0), !0);
  return (e.failedDials++, e.failedDials < 3);
}
var ie = 60000,
  re = 60000;
function $fo(e, n, t, o = Date.now()) {
  let i = e.transport === "sync" ? re : n.handshakeDeadlineMs + n.minUptimeMs + ie;
  return e.accountEpoch === t && e.expMs - o >= i;
}
function tEs(e) {
  let { timing: n, consecutiveFailures: t, leaseMode: o, spread: i, stalled: r } = e;
  if (r) return se(n, e.longStall === !0 ? "long" : "short");
  if (o && i) return Math.round(n.spreadMinMs + Math.random() * (n.spreadMaxMs - n.spreadMinMs));
  let s = Math.min(n.capMs, n.baseMs * 2 ** Math.min(t, 5)),
    a = o ? 0.5 : 0.25;
  return Math.max(0, Math.round(s * (1 - a + Math.random() * 2 * a)));
}
function se(e, n = "short") {
  let t = n === "long" ? e.longStallMinMs : e.stallMinMs,
    o = n === "long" ? e.longStallMaxMs : e.stallMaxMs;
  return Math.round(t + Math.random() * (o - t));
}
function nEs(e) {
  return Math.round(Math.random() * e.seedDeferMaxMs);
}
import { createHmac as ae, randomUUID as ue } from "crypto";
var de = 3600000,
  ce = 64,
  le = Number.MAX_SAFE_INTEGER;
function me(e, n, t) {
  return ae("sha256", h5o(t))
    .update(e + n, "utf8")
    .digest("hex")
    .slice(0, 16);
}
var fe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function pe(e) {
  let n = Number(e.slice(0, 4)),
    t = Number(e.slice(5, 7)),
    o = Number(e.slice(8, 10)),
    i = Number(e.slice(11, 13)),
    r = Number(e.slice(14, 16)),
    s = Number(e.slice(17, 19));
  if (t < 1 || t > 12 || o < 1 || i > 23 || r > 59 || s > 59) return !1;
  return new Date(Date.UTC(n, t - 1, o)).getUTCDate() === o;
}
function Ffo(e) {
  let n,
    t = -1 / 0;
  for (let o of e) {
    if (o == null || !g9e.test(o) || !fe.test(o) || !pe(o)) continue;
    let i = mw(o);
    if (i !== null && i > t) ((t = i), (n = o));
  }
  return n;
}
function HOt(e) {
  let { handOffs: n } = Z().summonStatus,
    t = ue();
  if ((n.set(t, { ...e }), n.size > ce)) {
    let o = new Set(LP().map((r) => r.uuid)),
      i;
    for (let r of n.keys())
      if (r !== t && !o.has(r)) {
        i = r;
        break;
      }
    if (((i ??= n.keys().next().value), i !== void 0))
      (n.delete(i), f("artifact_comments_autoreact", "handoff_evicted"));
  }
  return t;
}
function x(e) {
  let { handOffs: n } = Z().summonStatus;
  for (let t of e) {
    if (t.uuid === void 0) continue;
    let o = n.get(t.uuid);
    if (o === void 0) continue;
    n.delete(t.uuid);
    let i = vh(o, { status: "declined", reason: "auto_reply_off" });
    f("artifact_comments_autoreact", i ? "handoff_swept" : "handoff_swept_unreported");
  }
}
function U3e(e) {
  let { handOffs: n } = Z().summonStatus;
  if (n.size === 0) return;
  let t = new Set(LP().map((o) => o.uuid));
  for (let [o, i] of n) if (i.slug === e && !t.has(o)) n.delete(o);
}
function DQt(e, n) {
  let { queuedWakes: t } = Z().summonStatus;
  for (let [o, i] of t) if (i.slug === e && i.threadId === n) t.delete(o);
}
function vh(e, n) {
  let { slug: t, threadId: o, gestureAt: i, suppressed: r } = e;
  if (r) return !1;
  let s = Z().summonStatus;
  if (s.routeAbsentSince !== null) {
    if (Date.now() - s.routeAbsentSince < de) return !1;
    s.routeAbsentSince = null;
  }
  let a = s.sidBySlug.get(t);
  if (a === void 0) ((a = me(q(), t, e.storageV5)), s.sidBySlug.set(t, a));
  let h = n.reason,
    p = Math.max(s.seqBySid.get(a) ?? 0, Math.floor(Date.now() / 1000) * 1000);
  if (p > le) return !1;
  s.seqBySid.set(a, p + 1);
  let u = e.coversReplyId !== void 0 && !ar.test(e.coversReplyId),
    y = {
      status: n.status,
      ...(h !== void 0 && { reason: h }),
      ...(e.coversReplyId !== void 0 && !u && { covers_reply_id: e.coversReplyId }),
      ...(i !== void 0 && { gesture_at: i }),
      sid: a,
      seq: p
    };
  return (
    LRs(t, o, y).then(
      (S) => {
        switch (S.kind) {
          case "accepted":
            if (u) f("artifact_summon_status_emit", "covers_id_rejected");
            else g("artifact_summon_status_emit");
            return;
          case "route_absent":
            ((s.routeAbsentSince = Date.now()), f("artifact_summon_status_emit", "route_absent"));
            return;
          case "skipped":
            if (S.reason === "no-auth") f("artifact_summon_status_emit", "no_auth");
            return;
          case "unsent":
            f("artifact_summon_status_emit", "relay_unavailable", { status: S.status });
            return;
          case "failed":
            m("artifact_summon_status_emit", S.reason, {
              ...(S.status !== void 0 && { status: S.status })
            });
            return;
        }
      },
      () => {
        m("artifact_summon_status_emit", "request_error");
      }
    ),
    !0
  );
}
var ehi = 30000;
function v0n(e) {
  let { description: n, agentId: t, taskRef: o } = e,
    i = e.now ?? Date.now,
    r = i(),
    s = 0,
    a = 0,
    h = 0,
    p = 0,
    u,
    y,
    S = !1;
  function v(A) {
    if (S) return;
    S = !0;
    try {
      let _ = (T) => F(LP(), ({ monitorEvent: R }) => R?.kind === T && R.watchId === o.id),
        b = {
          eventsQueued: s,
          eventsStillQueued: _("output"),
          eventsSuppressed: h,
          suppressionNoticesQueued: p,
          noticesStillQueued: _("notice"),
          elapsedMs: i() - r
        };
      if (e.arm !== void 0)
        g("monitor_watch_closed", {
          arm: c(e.arm),
          closed_by: c(A),
          events_queued: b.eventsQueued,
          events_still_queued: b.eventsStillQueued,
          events_suppressed: b.eventsSuppressed,
          suppression_notices_queued: b.suppressionNoticesQueued,
          notices_still_queued: b.noticesStillQueued,
          elapsed_ms: b.elapsedMs,
          subagent_owned: t !== void 0
        });
      e.onClosed?.(b);
    } catch (_) {
      l(_);
    }
  }
  let { capacity: d, refillMs: E } = e.bucket ?? { capacity: vve, refillMs: Eve },
    L = kve(d, E, i);
  function k() {
    if (!L.tryConsume()) {
      if ((a++, h++, (y = i()), u === void 0)) u = i();
      return !1;
    }
    if (a > 0) {
      if (
        (tK(n, ge(a), o.id, { isHousekeeping: !0, agentId: t }),
        p++,
        (a = 0),
        y !== void 0 && i() - y > E * 3)
      )
        u = void 0;
    }
    return (s++, !0);
  }
  let O = (A) => {
      if (S) return;
      if (k()) {
        tK(n, A, o.id, { agentId: t });
        return;
      }
      if (u !== void 0 && i() - u > ehi) {
        if ((v("too_much_output"), e.killTask()))
          tK(
            n,
            `[Monitor stopped \u2014 too much output (${a} events suppressed over ${Math.round((i() - u) / 1000)}s). Restart with a more selective source.]`,
            o.id,
            { isHousekeeping: !0, agentId: t }
          );
      }
    },
    M = Nwr(O, e.schedule);
  function Y() {
    (M.flush(!0), v("flushed"));
  }
  return {
    onData: M.onData,
    onBatch: O,
    isClosed: () => S,
    flush: () => M.flush(),
    eventCount: () => s,
    flushAndClose: Y,
    dropAndClose: () => {
      (M.drain(), v("dropped"));
    },
    reportExit: async (A, _) => {
      let b = S ? void 0 : M.drain();
      v("exited");
      let { terminalNotification: T } = await A.settled,
        R = b !== void 0 && k();
      if (T !== void 0) {
        let U = [R ? b : void 0, _].filter((z) => z !== void 0).join(`
`);
        Hwr(U !== "" ? { ...T, body: j(U) } : T);
      } else if (R) tK(n, b, o.id, { agentId: t });
    }
  };
}
function ge(e) {
  return `[${e} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`;
}
function Hwr(e) {
  Za(Kon(e), { turnAttribution: "inherit" });
}
var C = 500,
  Q = 3000,
  he = 200,
  H = 1048576;
function j(e, n = !1) {
  let t =
    !n && oHe()
      ? `
If this event is something the user would act on now, send a ${$O}. Routine or benign output doesn't need one.`
      : "";
  return `
<${jkn}>${Wt(e)}</${jkn}>${t}`;
}
var Se =
    /^\[(?:Monitor (?:stopped|timed out|expired)|WebSocket (?:closed|error|upgrade rejected): |Dropped \d+-byte frame )/,
  w = ve(new Set(), (e) => e.clear()),
  N = ve(new Map(), (e) => e.clear());
function E0n(e, n, t) {
  let o = ekt(n);
  if (o === void 0) return;
  for (let i of N.keys()) {
    let r = t.get(i)?.status;
    if (r !== void 0 && cs(r)) N.delete(i);
  }
  N.set(e, o);
}
function tK(e, n, t, o) {
  let i = (o?.agentId ?? tt()) === tt(),
    r = o?.keptFor ?? (i && t !== void 0 ? N.get(t) : void 0);
  if (r !== void 0 && AJ()) {
    if ((hm(() => Qje(r)), o?.isHousekeeping && Se.test(n) && t !== void 0 && !w.has(t))) {
      let a = () => {
          w.delete(t);
        },
        h = () => {
          if (AJ()) {
            tG(h, void 0, a);
            return;
          }
          (w.delete(t), tK(e, n, t, { ...o, keptFor: r }));
        };
      hm(() => {
        (tG(h, void 0, a), w.add(t));
      });
    }
    return;
  }
  Za(
    {
      value: Di({
        taskId: t ? Wt(t) : void 0,
        summary: `${rYt}${Wt(e)}"`,
        body: j(n, o?.isHousekeeping)
      }),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "next",
      agentId: o?.agentId ?? tt(),
      ...(r !== void 0 && { scheduledByPlugin: r }),
      ...(t !== void 0 && {
        monitorEvent: { watchId: t, kind: o?.isHousekeeping ? "notice" : "output" }
      })
    },
    { turnAttribution: o?.turnAttribution ?? "inherit" }
  );
}
function Ufo(e) {
  let { taskId: n, toolUseId: t, description: o, ownerAgentId: i, stopperAgentId: r } = e,
    s = `Task "${o}" was stopped by ${rdn(r)}`;
  Za({
    value: Di({ taskId: Wt(n), toolUseId: t ? Wt(t) : void 0, status: "stopped", summary: Wt(s) }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: Br(i),
    taskId: n
  });
}
function Lwr(e) {
  let { taskId: n, toolUseId: t, description: o, source: i, outputFile: r, note: s } = e,
    a =
      i === "client"
        ? `Task "${o}" was stopped by the user or by the app connected to this session`
        : `Task "${o}" was stopped by the user`;
  Za({
    value: Di({
      taskId: Wt(n),
      toolUseId: t ? Wt(t) : void 0,
      outputFile: r,
      status: "killed",
      summary: Wt(s === void 0 ? a : `${a}. ${s}`)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    passive: !0,
    agentId: tt(),
    taskId: n
  });
}
function Nwr(
  e,
  n = (t) => {
    let o = setTimeout(t, he);
    return () => clearTimeout(o);
  }
) {
  let t = "",
    o = [],
    i = null;
  function r(h) {
    if (i) (i(), (i = null));
    if (h && t.trim() && !VCr(t.trim())) {
      let u = t.trim();
      if (u.length > C) u = u.slice(0, C) + "...(truncated)";
      (o.push(u), (t = ""));
    }
    if (o.length === 0) return;
    let p = o.join(`
`);
    if (p.length > Q)
      p =
        p.slice(0, Q) +
        `
...(truncated)`;
    return ((o = []), p);
  }
  function s(h) {
    let p = r(h === !0);
    if (p !== void 0) e(p);
  }
  function a(h) {
    if (((t += h), t.length > H)) t = t.slice(-H);
    let p;
    while (
      (p = t.indexOf(`
`)) !== -1
    ) {
      let u = t.slice(0, p).trim();
      if (((t = t.slice(p + 1)), VCr(u))) continue;
      if (u) {
        if (u.length > C) u = u.slice(0, C) + "...(truncated)";
        o.push(u);
      }
    }
    if (o.length > 0 && !i) i = n(s);
  }
  return { onData: a, flush: s, drain: () => r(!0) };
}
function $wr(e, n, t) {
  let o, i, r;
  if (
    (n.update(e, (s) => {
      if (s.status !== "running") return s;
      if (((o = s.description), (i = s.toolUseId), (r = s.agentId), s.timeoutId !== void 0))
        clearTimeout(s.timeoutId);
      return {
        ...s,
        status: t?.endedAs?.status ?? "killed",
        endTime: Date.now(),
        timeoutId: void 0,
        notified: !0,
        terminal: { summary: t?.endedAs?.summary ?? s.description }
      };
    }),
    t?.onKilled?.(),
    RD(r, `monitor:${e}`, n),
    o !== void 0)
  ) {
    if (!t?.quiet) tK(o, "[Monitor stopped]", e, { isHousekeeping: !0, agentId: r });
    Ha(e, t?.endedAs?.status ?? "stopped", { toolUseId: i, summary: t?.endedAs?.summary ?? o });
  }
}
function V(e, n, t, o) {
  for (let [i, r] of Object.entries(n.all()))
    if (t(r) && r.agentId === e && r.status === "running") o(i, n);
}
var rEs = ["publish", "attach", "watch", "resume", "session_resume", "mcp_write"];
function ZB(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}
function oEs(e, n) {
  zn().monitorSockets.set(e, n);
}
function Fwr(e, n) {
  return zn().monitorSockets.get(e) === n;
}
function Uwr(e, n, t) {
  return (
    ZB(e) &&
    e.status === "running" &&
    e.autoReactArmed === !0 &&
    n() &&
    (t?.includeStopLatched === !0 || !(e.autoReactSlug !== void 0 && yy(e.autoReactSlug)))
  );
}
function ime(e) {
  return Uwr(e, () => Z().autoReact.enabledMemo === !0);
}
function ye(e) {
  let n = zn().monitorSockets.get(e);
  return n !== void 0 && n.readyState <= 1;
}
var G = 300000,
  be = Dwr + G;
function Xct(e, n = Date.now()) {
  let t = e.frameLive === void 0 ? void 0 : Z().live.supervisors.get(e.frameLive.slug);
  if (!ye(e.id) || (t?.transport !== "sync" && n - e.startTime > be)) return !1;
  let o = t?.lease?.expMs;
  return o === void 0 || n <= o + G;
}
function LOt(e) {
  let n = zn().monitorSockets.get(e);
  return n !== void 0 && n.readyState === 1;
}
var sEs = {
  name: "MonitorWsTask",
  type: "monitor_ws",
  async kill(e, n, t, o) {
    ES(
      e,
      n,
      (o ?? "user") === "system" ? {} : { userStop: !0, taskStop: !0, modelOrigin: o === "parent" }
    );
  }
};
function iEs(e) {
  zn().frameLiveUserStopObserver = e;
}
function aEs(e) {
  zn().autoReactHumanTurnObserver = e;
}
function lEs(e) {
  zn().artifactPresenceStopObserver = e;
}
function dEs(e) {
  zn().artifactRoomStopObserver?.leave(e);
}
function cEs() {
  return nhn()?.conns.size ?? 0;
}
function Bfo(e) {
  let n = nhn(),
    t = zn().artifactRoomStopObserver?.disposeAll() ?? 0,
    o = n?.consentRevoke?.() ?? 0;
  if ((t <= 0 && o <= 0) || n?.consentGone?.() === !0) return t;
  let i =
      "The next publish of such an artifact that declares a room will ask the user before joining again; do not republish to rejoin unless the user asks.",
    r = {
      agentId: tt(),
      value: Di({
        taskType: Cq,
        summary: Wt(
          t > 0
            ? `Left the live ${I(t, "room")} of ${t} ${I(t, "artifact")} (the user stopped background activity)`
            : `Forgot the live-room ${I(o, "approval")} of ${o} ${I(o, "artifact")} (the user stopped background activity)`
        ),
        body: `
<event>${Wt(t > 0 ? `Page events from those artifacts' viewers will no longer arrive and room_send to them will report not_connected; every remembered room-join approval was forgotten too. ${i}` : `No room was open. ${i}`)}</event>`
      }),
      mode: "task-notification",
      skipAttachments: !0,
      priority: "later",
      origin: { kind: "task-notification", source: Cq, roomLifecycle: !0 }
    };
  if (e !== void 0) e.enqueuePendingNotification(r);
  else Za(r);
  return t;
}
function uEs(e) {
  zn().autoReactDeliberateStopObserver = e;
}
function ES(e, n, t) {
  let o = n.all()[e];
  if (ZB(o) && o.autoReactArmed === !0) {
    if ((Eae(o.autoReactSlug), o.autoReactSlug !== void 0 && t?.connectionLost !== !0))
      NQt(o.autoReactSlug);
    if (
      t?.userStop === !0 &&
      o.autoReactSlug !== void 0 &&
      (o.status === "running" || !P_(o.autoReactSlug))
    )
      k0n(o.autoReactSlug);
  }
  if (t?.userStop === !0 && ZB(o) && o.frameLive !== void 0) {
    if (
      zn().frameLiveUserStopObserver?.(o.frameLive.slug, {
        running: o.status === "running",
        taskId: e,
        taskStop: t?.taskStop === !0,
        modelOrigin: t?.modelOrigin === !0,
        taskRegistry: n
      }) === !0
    )
      if (P_(o.frameLive.slug)) k0n(o.frameLive.slug);
      else zn().autoReactDeliberateStopObserver?.(o.frameLive.slug);
  }
  if (t?.userStop === !0 && ZB(o) && o.frameLive === void 0 && o.autoReactArmed !== !0)
    (zn().liveDocUserStopObserver?.(e, {
      modelOrigin: t?.modelOrigin === !0,
      running: o.status === "running"
    }),
      zn().artifactRoomStopObserver?.leaveByTaskId(e),
      zn().artifactPresenceStopObserver?.closeByTaskId(e));
  $wr(e, n, {
    quiet: t?.quiet,
    onKilled() {
      let i = zn().monitorSockets.get(e);
      if (i) (zn().monitorSockets.delete(e), i.close());
    }
  });
}
function fEs(e) {
  (Eae(e), NQt(e), k0n(e));
}
function k0n(e) {
  ($Qt(e), zn().autoReactDeliberateStopObserver?.(e), mL(Z().live, e));
  let n = D(e);
  zn().artifactRoomStopObserver?.leave(e);
  let t = D_((o) => o.origin?.kind === "task-notification" && o.origin.slug === e && HQt(o));
  if ((K(t, n), x(t), t.some(ke) || n.length > 0)) MU(e);
  t3(0, n);
}
function _e(e) {
  return e === "artifact-auto-react" || e === "artifact-room";
}
function K(e, n) {
  for (let t of e) {
    let o = t.origin;
    if (
      o?.kind === "task-notification" &&
      o.coalesced !== void 0 &&
      o.coalesced.family !== "artifact-changed" &&
      o.slug !== void 0 &&
      o.displayName !== void 0
    )
      n.push({
        slug: o.slug,
        family: o.coalesced.family,
        artifactName: o.displayName,
        count: o.coalesced.count
      });
  }
}
function t3(e, n = [], t) {
  if (e <= 0 && n.length === 0) return;
  let o = Z().builtInArtifactHiddenForMcp,
    i = I(e, "it", "them"),
    r = I(e, "this artifact", "these artifacts"),
    s = I(e, "the watch is kept", "the watches are kept"),
    a =
      t?.catchUp === !1
        ? ""
        : o
          ? ` (comments you send to Claude meanwhile reach this session ${t?.nameChordGesture === !0 ? "then" : I(e, "once the watch resumes", "once the watches resume")})`
          : " (comments sent to Claude meanwhile are answered then)",
    h =
      t?.catchUp === !1
        ? ""
        : o
          ? ", and comments the user sent to Claude in the meantime reach you then"
          : ", and comments sent to Claude in the meantime are answered then",
    p =
      t?.catchUp === !1
        ? ""
        : o
          ? " (comments the user sent to Claude meanwhile reach you when that turn ends)"
          : " (comments sent to Claude meanwhile are being answered now)",
    u = o ? "" : ", or resume_replies if the user asks",
    y = `publishing without being asked, while handling a notification or a wake-up, leaves ${i} paused`,
    S = o
      ? `the user can stop ${i} for good in the tasks list (/tasks, often under System tasks), and the kill-all-agents gesture stops ${i} until Claude Code restarts`
      : `the user can stop ${i} for good with \u2715 on the watch in the tasks list or the kill-all-agents gesture`,
    v =
      t?.nameChordGesture === !0
        ? `this receipt reaches you with a later turn: if that turn is the user's own typed message it has already resumed ${i}${p}, otherwise the user's next message resumes ${i} (so does a publish of ${r} the user asks for${u}; ${y})${h}; ${S}`
        : `when the user asks you to publish ${r} again, that publish resumes ${i}${u}, as does the user's next typed message \u2014 each only on hosts that pass typed input through as the user's${h}; ${y}`;
  Za({
    agentId: tt(),
    value: Di({
      taskType: "artifact-auto-react",
      summary: Wt(
        e > 0
          ? `${e} artifact ${o ? I(e, "comment watch", "comment watches") : `auto-reply ${I(e, "subscription")}`} paused ${t?.nameChordGesture === !0 ? "until your next message" : "by the interrupt"}${a}`
          : "Artifact auto-reply activity stopped"
      ),
      body: `
${Wt(
  n
    .map(Mzn)
    .concat(
      e > 0
        ? [
            `The user's interrupt paused ${i} and ${s}; ${v}. ${o ? `Do not republish just to resume ${i}` : "Do not republish or resume just to re-enable auto-replies"} unless the user asks.`
          ]
        : []
    ).join(`

`)
)}`
    }),
    mode: "task-notification",
    skipAttachments: !0,
    ...(t?.passive === !0 && { passive: !0, priority: "next" }),
    origin: {
      kind: "task-notification",
      source: "artifact-auto-react-stop-disclosure",
      nonDurableStop: !0,
      ...(n.length > 0 && { carriesDiscardRecord: !0 })
    }
  });
}
function ke(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react";
}
function HQt(e) {
  return e.origin?.kind === "task-notification" && _e(e.origin.source);
}
function wve(e, n) {
  let t = D();
  for (let i of t) MU(i.slug);
  if (n?.leaveArtifactRooms === !0) Bfo(e);
  let o = e.removeByFilter(HQt);
  for (let i of o)
    if (
      i.origin?.kind === "task-notification" &&
      i.origin.source === "artifact-auto-react" &&
      i.origin.slug !== void 0
    )
      MU(i.origin.slug);
  return (K(o, t), x(o), t);
}
function pEs(e = () => !1) {
  let { pendingNoticeSlugs: n } = Z().shareStatus;
  if (n.size === 0) return 0;
  let t = new Set();
  for (let i of LP()) {
    let r = i.origin?.kind === "task-notification" ? i.origin.slug : void 0;
    if (r !== void 0 && HQt(i)) t.add(r);
  }
  let o = 0;
  for (let i of [...n.keys()]) {
    if (t.has(i) || W(i) || e(i)) continue;
    (MU(i), o++);
  }
  return o;
}
function LQt() {
  return { disclosures: [], staleRows: [], watchLifecycle: [] };
}
function T0n(e) {
  x(e);
  let n = LQt();
  for (let t of e) {
    if (t.origin?.kind !== "task-notification") continue;
    if (t.origin.source === "artifact-auto-react-stop-disclosure") n.disclosures.push(t);
    else if (t.origin.source === "artifact-changed") n.staleRows.push(t);
    else if (t.origin.source === Cq) n.watchLifecycle.push(t);
  }
  return n;
}
function X(e) {
  return (
    e.origin?.kind === "task-notification" &&
    e.origin.source === "artifact-auto-react-stop-disclosure" &&
    e.origin.nonDurableStop === !0 &&
    e.origin.carriesDiscardRecord !== !0
  );
}
function mEs(e) {
  if (!Z().autoReact.userDisarmed) return;
  e.removeByFilter(X);
}
function A0n(e, n, t) {
  let o = Z().autoReact.userDisarmed;
  for (let i of n.disclosures) {
    let r = i.origin?.kind === "task-notification" && i.origin.carriesDiscardRecord === !0,
      s = o && X(i);
    if (r || (t === 0 && !s)) e.enqueuePendingNotification(i);
  }
  for (let i of n.staleRows) e.enqueuePendingNotification(i);
  for (let i of n.watchLifecycle) e.enqueuePendingNotification(i);
}
function gEs() {
  for (let [e, n] of zn().monitorSockets) {
    try {
      n.close();
    } catch {}
    zn().monitorSockets.delete(e);
  }
}
function hEs(e, n) {
  V(e, n, ZB, ES);
}
export {
  Yvs,
  Dwr,
  Xvs,
  MOt,
  DOt,
  w0n,
  Jvs,
  Qvs,
  Zvs,
  eEs,
  Nfo,
  $fo,
  tEs,
  nEs,
  Ffo,
  HOt,
  U3e,
  DQt,
  vh,
  ehi,
  v0n,
  Hwr,
  E0n,
  tK,
  Ufo,
  Lwr,
  Nwr,
  $wr,
  rEs,
  ZB,
  oEs,
  Fwr,
  Uwr,
  ime,
  Xct,
  LOt,
  sEs,
  iEs,
  aEs,
  lEs,
  dEs,
  cEs,
  Bfo,
  uEs,
  ES,
  fEs,
  k0n,
  t3,
  HQt,
  wve,
  pEs,
  LQt,
  T0n,
  mEs,
  A0n,
  gEs,
  hEs
};

//# sourceMappingURL=chunk-34151x92.js.map
