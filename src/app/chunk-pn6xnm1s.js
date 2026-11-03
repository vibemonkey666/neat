// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, L, ru, no } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { Ke, R, N, E, _S, G } from "./chunk-fs43t96t.js";
import { XH, aN, Gu, WM, pE, Ass, GM } from "./chunk-h5gbmqm1.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { bt, Wu, w2, Ui, Qse, jo, ie, t } from "./chunk-4kxznmzw.js";
import { fee, Ft } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import {
  COs,
  qOe,
  _Xe,
  FWn,
  EXe,
  kXe,
  Aje,
  Zko,
  pke,
  hPr,
  aMe,
  wmt,
  R0t,
  P0t,
  I0t,
  fzn,
  nv,
  ED,
  Rmt,
  M0t,
  lG,
  $A,
  EK,
  Dl,
  H0t,
  hzn,
  TMe,
  oKn
} from "./chunk-j0tbz6ra.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Lr } from "./chunk-5z6t3gwt.js";
import { jO, Qu, XD, Mc, Ll, rS, kw } from "./chunk-wany0nxw.js";
import { Wf, at, qt, Be, At } from "./chunk-at88wjsn.js";
import { xo, W$ } from "./chunk-5rw2zfa0.js";
import { uo, Nn, kn, k } from "./chunk-ajtyjx88.js";
import { yg, fe } from "./chunk-xe386mry.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { pxe } from "./chunk-v4kbwz0z.js";
import { Ro } from "./chunk-1e5yp9hx.js";
import { ri, t2, Mot } from "./chunk-63a6mqbs.js";
import { Bn, dn } from "./chunk-9z5ybxhe.js";
import { mg, nTt } from "./chunk-7c3thgax.js";
import { cp } from "./chunk-t86k189s.js";
import { jE } from "./chunk-x2h5w7zv.js";
import { ae } from "./chunk-ar6ynjt8.js";
import {
  rce,
  KA,
  uv,
  m2e,
  eet,
  Fbt,
  KP,
  vo,
  W1r,
  oet,
  set,
  uce,
  Oye,
  D8,
  Ry,
  xa,
  _2e
} from "./chunk-d5zj5299.js";
import { ag, Y1, VD, mce } from "./chunk-krgv9fvy.js";
import { qbt, VP, HY, mi, Uye, ZL, QHe, NY } from "./chunk-gv3j9e36.js";
import { _ce, vJn, oo, Va } from "./chunk-39ayby14.js";
import { Lht, r4n, Gne, xDe, O4n, IQe, xln, yjs, BQe, KDo, Ei, iU } from "./chunk-6h7ejyet.js";
import { Fc, ze, GD } from "./chunk-1ww4jg8j.js";
import { Pu, KZe, yp, YZe } from "./chunk-m5rm7nsm.js";
import { d$, Rze, s$o, nUr, rUr, MG, g_t, EHe } from "./chunk-frrn501g.js";
import { wEr, TMt } from "./chunk-25j20xpc.js";
import { d8e } from "./chunk-rjdks4dd.js";
import { PPt, IPt } from "./chunk-ead88svk.js";
import { noo, hhr, yhr } from "./chunk-47k1e1dm.js";
import { YIe, VR } from "./chunk-eeak1s5f.js";
import { Ite, nRs } from "./chunk-97te5na4.js";
import { hme, mAs, gAs } from "./chunk-z29ek0s6.js";
import { WPe, _9t, b9t, S9t, _hr, roo, ooo, Kee, Nps, w9t } from "./chunk-6q1zq4eb.js";
import { rD } from "./chunk-00h33g5z.js";
import { _On, bOn, Shr, SOn, zps, Kps, Vps, nae } from "./chunk-ce3aa670.js";
import { Jd } from "./chunk-gmwnnpe9.js";
import { Yin } from "./chunk-9e3vh36m.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { gr } from "./chunk-z2vz1f06.js";
import { qe } from "./chunk-0np0053t.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { _e } from "./chunk-n8wdmnah.js";
import { Ce } from "./chunk-a2y39866.js";
var g9t = new Set([Be, At, qe, qt, at]);
var jPe = { approvalAttested: !1, modeDecidedByHost: !1 };
function cOn(e, n) {
  if (!n) return e;
  return {
    ...e,
    sandbox: e.sandbox === "required" || n.sandbox === "required" ? "required" : "tool_default",
    background:
      e.background === "forbidden" || n.background === "forbidden" ? "forbidden" : "tool_default",
    pinCwd: e.pinCwd || n.pinCwd === !0,
    scrubCredentialEnv: e.scrubCredentialEnv || n.scrubCredentialEnv === !0,
    maxTimeoutMs: Po(e.maxTimeoutMs, n.maxTimeoutMs)
  };
}
function Po(e, n) {
  if (n === void 0 || n <= 0) return e;
  return e === void 0 ? n : Math.min(e, n);
}
import { isDeepStrictEqual as Cs } from "util";
function Re() {
  try {
    let { value: e, source: n } = kn("tengu_ticklish_pnueli", !1);
    return e === !0 && n !== "override";
  } catch (e) {
    return (l(Error("tengu_ticklish_pnueli could not be read", { cause: e })), !1);
  }
}
function Mn() {
  try {
    return k("tengu_violin_neck", !1) === !0;
  } catch {
    return !1;
  }
}
function In() {
  try {
    return k("tengu_violin_frog", !0) !== !1;
  } catch (e) {
    return (l(N(e)), !1);
  }
}
function chr() {
  try {
    return k("tengu_violin_nut", !1) === !0;
  } catch {
    return !1;
  }
}
import { randomUUID as Do } from "crypto";
var Jro = 4,
  To = 16,
  Oo = 8192,
  Mo = 1000;
class Ye {
  #e = new Map();
  #t = 0;
  #o = 0;
  #n = new Map();
  get running() {
    return this.#e.size;
  }
  stopAll(e) {
    this.#o++;
    for (let n of [...this.#e.values()]) n(e);
  }
  holds(e) {
    return this.#e.has(e);
  }
  stop(e) {
    let n = this.#e.get(e);
    return (n?.("caller_stopped"), n !== void 0);
  }
  async statusOf(e) {
    let n = this.#n.get(e);
    if (n === void 0) return;
    let o = await YZe(n.started.shellId, Oo).then(
      (r) => r.content,
      () => {
        return;
      }
    );
    return { command: { ...n }, outputTail: o };
  }
  starterFor(e) {
    let n = this.#o,
      o = !1,
      r,
      s = () => {
        if (o) ((o = !1), this.#t--);
      },
      d = () =>
        e.lifetime.aborted || n !== this.#o || !e.enabled()
          ? "unavailable"
          : ze.getSandboxUnavailableReason() !== void 0 ||
              (ze.passesCheapSandboxGates() && !ze.isSandboxingEnabled())
            ? "sandbox_down"
            : void 0,
      u = () => {
        let p = d() ?? (!o && this.#e.size + this.#t >= e.max ? "full" : void 0);
        if (p === void 0) return;
        return (f("remote_tool_serve_background", p), Shr(p, e));
      };
    return {
      started: () => r,
      settle: (p) => {
        if ((s(), p && r !== void 0)) this.#e.get(r.shellId)?.("call_stopped");
      },
      starter: {
        reserve: () => {
          let p = u();
          if (p === void 0 && !o) ((o = !0), this.#t++);
          return p;
        },
        adopt: (p, h, _) => {
          let S = o ? d() : "unavailable";
          s();
          try {
            if (S !== void 0)
              throw new R(Shr("unavailable", e), "served background command could not be owned");
            return ((r = this.#r(p, h, _, e)), g("remote_tool_serve_background"), r.shellId);
          } catch (C) {
            throw (m("remote_tool_serve_background", "not_owned"), p.kill(), p.cleanup(), C);
          }
        }
      }
    };
  }
  #r(e, n, o, r) {
    let s = e.taskOutput.taskId,
      d = Pu(s);
    if (!e.background(s))
      throw new R(Shr("unavailable", r), "served background command had already ended");
    let u = Yin(n),
      p = { shellId: s, outputPath: d, limitMs: u },
      h = { started: p, startedAt: Date.now() };
    this.#n.set(r.callId, h);
    let _ = !1,
      S = (I, X) => {
        if (_) return;
        if (
          ((_ = !0),
          clearTimeout(H),
          clearInterval(V),
          r.lifetime.removeEventListener("abort", C),
          this.#e.delete(s),
          (h.ended = { how: I, exitCode: X, at: Date.now() }),
          this.#n.delete(r.callId),
          I !== "call_stopped")
        ) {
          this.#n.set(r.callId, h);
          let K = [...this.#n].filter(([, j]) => j.ended);
          for (let [j] of K.slice(0, -To)) this.#n.delete(j);
        }
        try {
          r.onEvent(s, I);
        } catch (K) {
          l(N(K));
        }
        let J;
        try {
          if (I !== "exited") J = e.kill();
          (e.cleanup(),
            KZe(
              s,
              I === "exited"
                ? `
[exited with code ${X}]
`
                : `
[stopped ${bOn(I, r.targetName)}]
`
            ),
            yp(s));
        } catch (K) {
          l(N(K));
        }
        W = W.then(() => J)
          .then(() => hhr(s))
          .catch((K) => l(N(K)))
          .finally(v);
      },
      C = () => S("serving_ended"),
      H = setTimeout(S, u, "time_limit").unref(),
      W = noo({ id: s, pid: e.pid, command: o, caller: r.caller, folder: r.folder }),
      V = setInterval(Io, Mo, s, S).unref();
    r.lifetime.addEventListener("abort", C, { once: !0 });
    let v = bt(() => (C(), W));
    return (
      this.#e.set(s, S),
      e.result
        .then(async (I) => {
          (await e.taskOutput.flush(), S("exited", I.code));
        })
        .catch((I) => l(N(I))),
      r.onEvent(s, "started"),
      p
    );
  }
}
function Io(e, n) {
  yhr(e).then((o) => {
    if (o) n("stopped_by_person");
  });
}
function uOn(e) {
  return e.arrivedOver === "session" && e.modeStamp === "present" ? e.sessionMode : void 0;
}
function Sps() {
  let e = new Map();
  return {
    add(n, o) {
      if (!e.has(n)) e.set(n, o);
    },
    lines: () => [...e.values()]
  };
}
function mN(e, n, o, r, s = {}) {
  let d = Mc(r);
  return {
    envelope: {
      v: Qu,
      outcome: "refused",
      ...(n.envelope && { call_id: n.envelope.call_id }),
      target: e,
      code: o,
      ...(s.reason !== void 0 && { reason: s.reason }),
      ...(s.limit !== void 0 && { limit: s.limit }),
      message: d,
      ...(s.notes !== void 0 && s.notes.length > 0 && { notes: s.notes })
    },
    content: [{ type: "text", text: d }]
  };
}
function Qe({ target: e, callId: n, reason: o, message: r }) {
  let s = Mc(r);
  return {
    envelope: {
      v: Qu,
      outcome: "refused",
      call_id: n,
      target: e,
      code: "withdrawn",
      reason: o,
      message: s
    },
    content: [{ type: "text", text: s }]
  };
}
function WX(e, n, o, r, s = {}) {
  let d = Mc(r);
  return {
    envelope: {
      v: Qu,
      outcome: "failed",
      ...(n.envelope && { call_id: n.envelope.call_id }),
      target: e,
      code: o,
      message: d,
      ...s.partial,
      ...(s.notes !== void 0 && s.notes.length > 0 && { notes: s.notes })
    },
    content: [{ type: "text", text: d }]
  };
}
function O6e(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function p9t(e) {
  if (e?.envelope.outcome === "completed") {
    let { disposition: n } = e.envelope;
    return n === "ask_expired" || n === "denied_by_session"
      ? { state: "failed", code: n }
      : { state: "completed", isError: e.envelope.is_error };
  }
  if (e?.envelope.outcome === "needs_approval") return { state: "asked", askId: e.envelope.ask_id };
  return {
    state: "failed",
    ...((e?.envelope.outcome === "failed" || e?.envelope.outcome === "refused") && {
      code: e.envelope.code
    }),
    ...(e?.ranNothing === !0 && { ranNothing: !0 }),
    ...(e?.envelope.outcome === "refused" &&
      e.envelope.reason !== void 0 &&
      e.envelope.reason !== "unrecognized" && { endedAs: e.envelope.reason })
  };
}
function No(e, n) {
  if (n.state === "failed" && n.code === IQe) {
    let r = new Date(n.servedAt).toISOString().slice(11, 19);
    return `This call reached ${e} only after the session had been told (at ${r} UTC) that it never arrived here \u2014 it was not run.`;
  }
  return n.state === "failed" &&
    n.code !== void 0 &&
    (O4n.has(n.code) || n.code === "stale" || n.ranNothing === !0)
    ? `This request was already answered on ${e}: nothing was run for it (${xn(n)}).`
    : `This call was already delivered to ${e} (${xn(n)}) \u2014 it was not run again.`;
}
function xn(e) {
  let n = new Date(e.servedAt).toISOString().slice(11, 19);
  switch (e.state) {
    case "received":
      return `it was received at ${n} UTC and is still being admitted`;
    case "running":
      return `it has been running since ${n} UTC`;
    case "asked":
      return `it has been waiting for the session's approval since ${n} UTC`;
    case "completed":
      return `it ${e.isError ? "completed with an error" : "completed"} at ${n} UTC`;
    case "failed":
      switch (e.code) {
        case "timed_out":
        case "cancelled":
          return e.ranNothing === !0
            ? `it ended as ${e.code} at ${n} UTC`
            : `it ended as ${e.code} at ${n} UTC; if it had started, it may have partially run`;
        case Gne:
          return `at ${n} UTC it joined the same command already under way here from an earlier request, since forgotten`;
        case xDe:
          return `its permission question was handed to a newer request for the same command at ${n} UTC`;
        case xln:
          return `it was started here at ${n} UTC and Claude Code on this machine restarted before its outcome was recorded: it may have partially run`;
        default:
          return `it ended as ${e.code ?? "failed"} at ${n} UTC`;
      }
  }
}
function m9t(e, n) {
  let { envelope: o } = e;
  if (o.call_id === n) return e;
  if (o.outcome !== "needs_approval" || o.elicitation === void 0)
    return { ...e, envelope: { ...o, call_id: n } };
  let r = o.elicitation._meta[XD];
  return {
    ...e,
    envelope: {
      ...o,
      call_id: n,
      elicitation: { ...o.elicitation, _meta: { [XD]: { ...r, call_id: n } } }
    }
  };
}
function wps(e, n) {
  let { envelope: o } = e;
  switch (o.outcome) {
    case "completed":
    case "refused":
    case "failed":
      return { ...e, envelope: { ...o, replayed: !0, served_at: n } };
    default:
      return e;
  }
}
function vps({ target: e, callId: n, state: o, sinceMs: r, hostEpoch: s, outputTail: d }) {
  let u = Math.max(0, Math.round(r / 1000)),
    p =
      o === "running"
        ? `This call is still running on ${e.name} (received ${u} s ago); its outcome is not known yet.`
        : o === "admitting"
          ? `This call was received on ${e.name} ${u} s ago and is still being admitted; nothing has started yet.`
          : `This call is waiting on ${e.name} for the session's approval (received ${u} s ago); nothing has run yet.`;
  return {
    envelope: {
      v: Qu,
      outcome: "in_progress",
      call_id: n,
      target: e,
      state: o,
      since_ms: Math.max(0, Math.floor(r)),
      host_epoch: s,
      ...(d !== void 0 && { output_tail: d })
    },
    content: [{ type: "text", text: p }]
  };
}
function Eps({ target: e, callId: n, hostEpoch: o }) {
  let r =
    o === void 0
      ? `${e.name} has no record of this call (it may never have arrived, or its record here was dropped); nothing is running for it here now.`
      : `${e.name} has no record of this call: it never arrived here, or this machine's Claude Code has restarted since; nothing is running for it here.`;
  return {
    envelope: {
      v: Qu,
      outcome: "refused",
      call_id: n,
      target: e,
      code: "unknown_call",
      message: r,
      ...(o !== void 0 && { host_epoch: o })
    },
    content: [{ type: "text", text: r }]
  };
}
function Qro(e, n, o) {
  if (o.state === "failed" && o.code === "withdrawn" && o.endedAs !== void 0)
    return Qe({
      target: e,
      callId: n,
      reason: o.endedAs,
      message: o.endedMessage ?? nae({ targetName: e.name, reason: o.endedAs })
    });
  let s = [{ type: "text", text: No(e.name, o) }];
  return {
    envelope: {
      v: Qu,
      outcome: "completed",
      call_id: n,
      target: e,
      is_error: !0,
      content: s,
      disposition: "duplicate_call"
    },
    content: s
  };
}
var Xe = "remote_call_ask_ended";
function fOn(e) {
  return {
    behavior: "deny",
    message: e,
    decisionReason: { type: "other", reason: Xe },
    decideLocation: "ask-path"
  };
}
function Lo() {
  let e = new Map();
  return {
    register: (o) => void e.set(o.askId, o),
    take: (o) => {
      let r = e.get(o);
      return (e.delete(o), r);
    },
    list: () => [...e.values()],
    peek: (o) => e.get(o),
    findByCallId: (o) => [...e.values()].findLast((r) => r.callId === o),
    get size() {
      return e.size;
    }
  };
}
function Je(e, n, o, r) {
  let s = e.pendingAsks.take(n);
  if (s === void 0) return;
  if (s.callId !== void 0) o(s.callId, s);
  return (s.windDown(), s.answer(r), s);
}
function kps(e, n, o) {
  Je(e, n, (r) => e.calls.remember(r, { state: "failed", code: "denied_by_session" }), o);
}
function Tps(e, n, o, r) {
  return Je(e, n, (s) => e.calls.settle(s, o, p9t(o)), r) !== void 0;
}
function Wwe(e, n, o) {
  let r = Je(
    e,
    n,
    (s, d) =>
      e.calls.settle(
        s,
        o.retain ??
          Qe({ target: d.asked.envelope.target, callId: s, reason: o.reason, message: o.message }),
        { state: "failed", code: "withdrawn", endedAs: o.reason, endedMessage: Mc(o.message) }
      ),
    fOn(o.message)
  );
  if (r !== void 0) {
    if (r.raisedOver !== "relay" && o.countedByItsLeg !== !0)
      switch (o.reason) {
        case "host_unbound":
        case "host_stopped":
          f("remote_tool_serve", o.reason);
          break;
        case "evicted":
          f("remote_tool_serve", "ask_superseded");
          break;
        case "tool_withdrawn":
        case "stale_answer":
        case "replaced_by_retry":
          break;
      }
    (Jd(r.callId, "ask ended", { ask_id: n, reason: o.reason }),
      e.onAskEnded?.({
        callerSessionId: e.callerSessionId,
        callId: r.callId,
        askId: n,
        reason: o.reason
      }));
  }
}
var Wo = 16;
function Aps(e, n) {
  if (n === void 0) return;
  let o = n.caller.conversation_id;
  if (o !== void 0 && !e.conversationIds.includes(o)) {
    if (e.conversationIds.length > 0) {
      if (e.cwd !== void 0) e.directoryReset = { from: e.cwd, at: Date.now() };
      ((e.cwd = void 0),
        e.readFileState.clear(),
        Jd(n.call_id, "caller conversation cleared: launch directory and read state reset"));
    }
    Dn(e.conversationIds, o);
  }
  let r = n.caller.compaction_id;
  if (r !== void 0 && !e.compactionIds.includes(r))
    (e.readFileState.clear(),
      Dn(e.compactionIds, r),
      Jd(n.call_id, "caller conversation compacted: read state reset"));
}
function Dn(e, n) {
  if ((e.push(n), e.length > Wo)) e.shift();
}
function $o(e, n = {}) {
  return {
    callerSessionId: e,
    readFileState: uv(KA),
    toolState: new iU(),
    calls: yjs(n.callRecordBounds),
    pendingAsks: Lo(),
    backgroundShells: new Ye(),
    sessionPermissionUpdates: [],
    offeredStandingUpdates: [],
    cwd: void 0,
    directoryReset: void 0,
    conversationIds: [],
    compactionIds: [],
    createdAt: Date.now(),
    onAskEnded: n.onAskEnded
  };
}
var Zro = 20;
function Cps(e = {}) {
  let n = e.limit ?? Zro,
    o = new Map(),
    r = e.epoch ?? Do(),
    s = (d) => {
      let u = $o(d, { callRecordBounds: e.callRecordBounds, onAskEnded: e.onAskEnded });
      for (let p of e.priorCallsFor?.(d) ?? []) u.calls.seed(p);
      return (o.set(d, u), u);
    };
  return {
    epoch: r,
    limit: n,
    peek: (d) => o.get(d),
    forCaller: (d) => o.get(d) ?? (o.size < n ? s(d) : void 0),
    heldAsk: (d, u) => {
      let p = o.get(d)?.pendingAsks.findByCallId(u);
      return p === void 0
        ? void 0
        : { toolName: p.toolName, evaluatedInput: p.evaluatedInput, startCwd: p.startCwd };
    },
    get size() {
      return o.size;
    }
  };
}
import { homedir as tt, hostname as nr } from "os";
import { basename as ot, dirname as Yn, join as rn } from "path";
function Ln() {
  try {
    let { value: e, source: n } = kn("tengu_violin_eye", !1);
    return e === !0 && n !== "override";
  } catch (e) {
    return (l(Error("tengu_violin_eye could not be read", { cause: e })), !1);
  }
}
var Fo = 32,
  Fn = (e) => e.replace(/\/\*\*$/, ""),
  Hn = (e) => F(e.split("/"), Boolean),
  Bo = Qr(
    (e) => {
      let n = e.map(Fn);
      return n.every((o) => o.startsWith("//") && !o.includes("**"))
        ? Math.max(0, ...n.map(Hn)) + 1
        : void 0;
    },
    (e) => e.join("\x00")
  );
function Ho() {
  return (
    Math.max(
      0,
      ...[...jE().physicalTwinsByPattern.values()].flatMap((e) => [...e].map((n) => Hn(Fn(n))))
    ) + 1
  );
}
var Uo = Qr((e) => new RegExp(`^/*[^/]+(?:/+[^/]+){${e - 1}}`));
function Wn(e, n) {
  return Uo(n).exec(e)?.[0] ?? e;
}
function $n(e) {
  if (!WPe() || O() === "windows") return e;
  let n = ut(e);
  if (Wn(n, Fo) === n) return e;
  let o = Bo(g_t());
  return o === void 0 ? e : Wn(n, Math.max(o, Ho()));
}
function en(e) {
  let n = $n(e);
  if (EHe(n)) return !0;
  let o = $n(e);
  return o !== n && EHe(o);
}
function Un(e, n, o) {
  try {
    if ([qe, at, qt].some((d) => oo(n, { name: d }) !== null || Va(n, { name: d }) !== null))
      return "rule_or_settings";
    let r = Ui(e);
    if (r.unresolved) return "unreadable";
    if ([r.landing, ...r.spellings].some(pE)) return "unreadable";
    if (!Ry(r.landing, n, [r.landing], [o])) return "rule_or_settings";
    try {
      let d = ie().statSync(r.landing);
      if (d.isDirectory()) return "folder";
      if (!d.isFile()) return "not_a_file";
      if (d.nlink !== 1) return "second_name";
    } catch (d) {
      if (!G(d)) return "unreadable";
    }
    if (
      r.spellings.some((d) =>
        ["read", "edit"].some((u) => ["deny", "ask"].some((p) => xa(d, n, u, p) !== null))
      )
    )
      return "rule_or_settings";
    let s = GD(e, n, "write", r);
    return !s.allowed && s.decisionReason !== void 0 ? "rule_or_settings" : void 0;
  } catch (r) {
    return (
      l(Error("a served MCP relative name could not be checked", { cause: r })),
      "unreadable"
    );
  }
}
var tn = Ce(rce(), 1);
import { homedir as Gn } from "os";
import { join as zo } from "path";
function nn() {
  if (O() !== "wsl") return [];
  return [{ literal: "/mnt", profilesGlob: "/?/Users/*", startsAt: [] }, ...Fbt("/").flatMap(Vo)];
}
function Vo({ mountPoint: e, within: n }) {
  let [, o] = /^users\/[^/]+((?:\/[^/]+)*)$/i.exec(n) ?? [];
  if (o !== void 0)
    return [{ literal: e, profilesGlob: "", startsAt: o.split("/").filter(Boolean) }];
  if (/^users$/i.test(n)) return [{ literal: e, profilesGlob: "/*", startsAt: [] }];
  if (n !== "") return [];
  return /\/[^/]$/.test(e)
    ? [{ literal: e.slice(0, -2), profilesGlob: "/?/Users/*", startsAt: [] }]
    : [{ literal: e, profilesGlob: "/Users/*", startsAt: [] }];
}
function uhr(e) {
  return nn().some(
    ({ literal: n, profilesGlob: o, startsAt: r }) =>
      (r.length > 0 && e === n) || e.startsWith(`${n}${o}/`)
  );
}
function on() {
  return [
    ...er(),
    ...nn().flatMap(({ literal: e, profilesGlob: n, startsAt: o }) =>
      Jo.flatMap((r) => Go(r, o)).map((r) => ({ literal: e, tail: `${n}${r}` }))
    )
  ];
}
function Go(e, n) {
  let o = e.split("/"),
    r = n.join("/");
  if (n.length > 0 && !tn.default.isPathValid(r)) return ["", "/**"];
  if (
    n.length > 0 &&
    !tn
      .default()
      .add(`/${o.slice(0, n.length).join("/")}`)
      .ignores(r)
  )
    return [];
  return n.length >= o.length ? ["", "/**"] : [`/${o.slice(n.length).join("/")}`];
}
var Kn = [
    ".ssh",
    ".aws",
    ".config/gcloud",
    ".azure",
    ".kube",
    ".gnupg",
    ".config/gh",
    ".config/glab-cli"
  ],
  Zn = [
    ".docker/config.json",
    ".netrc",
    ".git-credentials",
    ".config/git/credentials",
    ".npmrc",
    ".pypirc",
    ".cargo/credentials",
    ".cargo/credentials.toml",
    ".gem/credentials",
    ".pgpass",
    ".my.cnf",
    ".mylogin.cnf",
    ".terraform.d/credentials.tfrc.json",
    ".boto",
    ".s3cfg"
  ],
  Ko = [
    "AppData/Roaming/gcloud",
    "AppData/Roaming/GitHub CLI",
    "AppData/Roaming/gnupg",
    "AppData/Local/glab-cli"
  ],
  Zo = [
    "_netrc",
    "AppData/Roaming/postgresql/pgpass.conf",
    "AppData/Roaming/MySQL/.mylogin.cnf",
    "AppData/Roaming/terraform.d/credentials.tfrc.json",
    "AppData/Roaming/s3cmd.ini"
  ],
  qo = [".claude"],
  qn = [".claude*.json"],
  Yo = qn.flatMap((e) => [...nUr(e).flatMap((n) => [n, `${n}.*`]), ...rUr(e)]),
  Qo = [
    "AppData/Local/Microsoft/Credentials",
    "AppData/Local/Microsoft/Vault",
    "AppData/Roaming/Microsoft/Credentials",
    "AppData/Roaming/Microsoft/Vault",
    "AppData/Roaming/Microsoft/Protect"
  ];
function Xo(e) {
  let n = e
      .replace(/^\.+/, "")
      .replaceAll(" ", "")
      .replace(/[+,;=[\]]/g, "_"),
    [, o = n, r = ""] = /^(.*)\.([^.]*)$/.exec(n) ?? [],
    s = o.replaceAll(".", "");
  if (`${s}${r && "."}${r}` === e && s.length <= 8 && r.length <= 3 && !e.includes("*")) return [];
  return [s.slice(0, 6), `${s.slice(0, 2)}????`].map((d) =>
    `${d}~?${r && "."}${r.slice(0, 3)}`.toUpperCase()
  );
}
var Vn = [...Kn, ...Ko, ...qo, ...Qo],
  jn = [...Zn, ...Zo, ...qn].flatMap((e) => [e, `${e}.*`]),
  Jo = [
    ...Vn.flatMap((e) => [e, `${e}/**`]),
    ...jn,
    ...Yo,
    ...[...Vn, ...jn].flatMap((e) =>
      e.split("/").flatMap((n, o, r) => Xo(n).map((s) => [...r.slice(0, o), s].join("/")))
    )
  ],
  er = Qr(
    () =>
      ri(
        [
          ...zn(Kn).flatMap((e) => [
            { literal: e, tail: "" },
            { literal: e, tail: "/**" }
          ]),
          ...zn(Zn).flatMap((e) => [
            { literal: e, tail: "" },
            { literal: e, tail: ".*" }
          ])
        ],
        ({ literal: e, tail: n }) => `${e}\x00${n}`
      ),
    () => Gn()
  );
function zn(e) {
  return MG(e.map((n) => zo(Gn(), n)));
}
var Gwe = "hostCredential";
function rt() {
  let e = WPe() ? [...Rze(), ...on()] : Rze();
  return [...lt(e), ...st(e)];
}
function st(e) {
  return eet().flatMap(({ mountPoint: n, readOnly: o }) =>
    g_t(it(n, e)).flatMap((r) => [
      { toolName: qe, ruleContent: r },
      ...(o ? [] : [{ toolName: at, ruleContent: r }])
    ])
  );
}
function it(e, n) {
  return n.map((o) => ({ ...o, literal: `${e}${o.literal}` }));
}
function dt() {
  return [...lt(s$o()), ...st(s$o())];
}
function lt(e) {
  let n = O(),
    o = n === "linux" || n === "wsl";
  return [
    ...g_t(e).flatMap((r) => [
      { toolName: qe, ruleContent: r },
      { toolName: at, ruleContent: r }
    ]),
    ...(o ? [{ toolName: qe, ruleContent: "//proc/**/environ" }] : []),
    ...(n === "windows"
      ? [Be, At].flatMap((r) => tr.map((s) => ({ toolName: r, ruleContent: s })))
      : Se()
          .flatMap((r) => [r, `/usr/bin/${r}`])
          .map(yt))
  ];
}
function Se() {
  switch (O()) {
    case "macos":
      return ["security"];
    case "linux":
    case "wsl":
      return ["secret-tool"];
    case "windows":
      return Te.flatMap((e) => [e, `${e}.exe`]);
    default:
      return [];
  }
}
var Te = ["cmdkey", "vaultcmd"],
  ct = ["PSCredentialManager", "BetterCredentials"],
  ft = [
    ...Te,
    "CredRead",
    "CredReadDomainCredentials",
    "CredWrite",
    "CredWriteDomainCredentials",
    "CredDelete",
    "CredEnumerate",
    "CredFindBestCredential",
    "CredBackupCredentials",
    "CredRestoreCredentials",
    "vaultcli",
    "Get-StoredCredential",
    "New-StoredCredential",
    "Remove-StoredCredential",
    "Get-CredManCredential",
    "New-CredManCredential",
    "Remove-CredManCredential",
    ...ct,
    "Find-Credential",
    "Test-Credential",
    "Set-Credential",
    "Remove-Credential",
    "Get-Secret",
    "Get-SecretInfo",
    "Set-Secret",
    "Set-SecretInfo",
    "Remove-Secret",
    "Get-SecretVault",
    "Register-SecretVault",
    "Unregister-SecretVault",
    "Unlock-SecretVault",
    "Test-SecretVault",
    "Set-SecretVaultDefault"
  ],
  tr = Te.map((e) => `*${e}*`);
function or(e) {
  if (Te.includes(e)) return `${e}(?:\\.exe)?`;
  if (/^Cred/.test(e)) return `${e}[AW]?`;
  if (e === "vaultcli") return "vaultcli(?:\\.dll)?";
  if (ct.includes(e)) return `${e}(?:\\.ps[dm]1|(?:\\.[A-Za-z0-9_]+)+)?`;
  let n = e.indexOf("-");
  return /(?:StoredCredential|CredManCredential)$/.test(e)
    ? `${e.slice(0, n)}-(?:[^\\s'"\`;&|(){}\\[\\],-]*|[^\\s'"\`;&|(){}\\[\\],]{0,64})${e.slice(n + 1)}`
    : e;
}
var rr = new RegExp(
    `(?:^|[^A-Za-z0-9_])(?:${ft.map((e) => `(${or(e)})`).join("|")})\\.*(?![A-Za-z0-9_.-])`,
    "i"
  ),
  sr =
    /(?:^|[^A-Za-z0-9_])(?:(?:import|install|save|update|find|get)-module|ipmo|gmo|inmo|fimo|upmo|using[ \t]+(?:module|assembly)|#requires[ \t]+-(?:modules?|assembly)|(?:install|save|update|find)-psresource|(?:is|sv|ud|fd)res|(?:install|save|find)-package|get-command|gcm|add-type|loadfrom|loadfile|loadwithpartialname|unsafeloadfrom|loadfromassemblypath|loadfromstream|loadfromassemblyname|createinstancefrom|assemblyloadcontext)(?![A-Za-z0-9_-])|(?:assembly|activator|appdomain)\s*\]|reflection\s*\.\s*assembly|currentdomain|(?:^|[^A-Za-z0-9_])using[ \t]*(?:<#|`[\r\n])/i,
  ir = /(?:^|[^A-Za-z0-9_])(?:(CredentialManager)|SecretManagement)(?![A-Za-z0-9_])/i,
  ar = /(?:^|[^$])(?:(Stored)|CredMan)Credential(?![A-Za-z0-9_])/i,
  dr = /(?:^|[^A-Za-z0-9_])PasswordVault(?![A-Za-z0-9_.])/i,
  lr =
    /\[(?=\s*[\w.]*PasswordVault)|\[\s*(?:System\.)?Type\s*\]|New-Object|Credentials\.|(?:^|[^A-Za-z0-9_])-as(?:\s+[^\s;|&)-]|[^\sA-Za-z0-9_;|&)-])/i,
  cr = /(?:^|[^A-Za-z0-9_])runas(?:\.exe)?(?![A-Za-z0-9_])/i,
  ur = /\/savecred(?![A-Za-z0-9_])/i,
  fr =
    /(?:^|[^A-Za-z0-9_-])(?:iex|invoke-expression)(?![A-Za-z0-9_-])|scriptblock\s*\]|invokescript|newscriptblock|addscript|expandstring/i,
  mr = /(?:^|[^\w.-])(?:powershell|pwsh(?:-preview)?|cmd)(?:\.exe)?(?![\w-])/i;
function pr(e) {
  return mr.test(e) && /[($@{%!|]/.test(e);
}
var hr = new RegExp(YIe.source.replace(/\\[tnr]| /g, "").replace(/\+$/, ""), "g"),
  _r = /[\u2013-\u2015]/g;
function mt(e) {
  return e
    .replace(hr, " ")
    .replace(_r, "-")
    .replace(/[\u2018-\u201b]/g, "'")
    .replace(/[\u201c-\u201e]/g, '"');
}
function pt(e) {
  let n = mt(e),
    o = rr.exec(n);
  if (o !== null) return ft[o.slice(1).findIndex((s) => s !== void 0)];
  let r = fr.test(n) || pr(n);
  if (sr.test(n) || r) {
    let s = ir.exec(n);
    if (s !== null) return s[1] !== void 0 ? "CredentialManager" : "SecretManagement";
    let d = ar.exec(n);
    if (d !== null) return d[1] !== void 0 ? "Get-StoredCredential" : "Get-CredManCredential";
  }
  if (dr.test(n) && (lr.test(n) || r)) return "PasswordVault";
  if (cr.test(n) && ur.test(n)) return "runas";
  return;
}
function gt(e, n = "either") {
  let o = ht(e),
    r = yr(e),
    s =
      n !== "powershell" ||
      [e, o, r].some((d) => {
        let u = Ee(mt(d));
        return Qn.test(u) || Qn.test(Ee(u.normalize("NFKC")));
      });
  return L(
    [e, o, r, ...(s ? [ln(o), ln(r)] : [])].flatMap((d) => {
      let u = d.normalize("NFKC");
      return [d, Ee(d), u, Ee(u)];
    })
  );
}
var Qn = new RegExp(
  `(?:^|[\\s\\\\/'":&()|;,{}=-])(?:${[...ZL].filter((e) => !["cmd", "powershell", "pwsh"].includes(e)).join("|")})(?:\\.exe)?(?=[\\s'"|);}&,({]|$)|alias\\.[\\w-]+[ \\t]*(?:=[ \\t]*)?['"]?!`,
  "i"
);
function ln(e) {
  return e.replace(/\\\r?\n/g, "").replaceAll("\\", "");
}
function Ee(e) {
  return e.replace(/\u0131/g, "i").replace(/\u017f/g, "s");
}
function ht(e) {
  return _t(e, "");
}
function yr(e) {
  return _t(e, " ");
}
function _t(e, n) {
  return vr(VR(e.replace(/\^\r?\n/g, "")))
    .replace(/\$(?=["'])/g, "")
    .replace(kr, n);
}
var Sr = {
  n: `
`,
  t: "\t",
  r: "\r",
  e: "\x1B"
};
function vr(e) {
  return e.replace(
    /\$'((?:[^'\\]|\\.)*)'/g,
    (n, o) =>
      `'${o.replace(
        /\\(?:x([0-9A-Fa-f]{1,2})|u([0-9A-Fa-f]{1,4})|U([0-9A-Fa-f]{1,8})|([0-7]{1,3})|(.))/g,
        (r, s, d, u, p, h) => {
          let _ =
            s !== void 0
              ? parseInt(s, 16)
              : d !== void 0
                ? parseInt(d, 16)
                : u !== void 0
                  ? parseInt(u, 16)
                  : p !== void 0
                    ? parseInt(p, 8)
                    : void 0;
          if (_ === void 0) return Sr[h ?? ""] ?? h ?? "";
          return _ <= 1114111 ? String.fromCodePoint(_) : "";
        }
      )}'`
  );
}
var kr = /["'`^\u2018-\u201e]/g;
function yt(e) {
  return { toolName: Be, ruleContent: `${e}:*` };
}
var Ar = 4;
async function St(e, n) {
  let { command: o } = n;
  if (typeof o !== "string") return;
  if (O() === "windows") {
    if (e.name !== Be && e.name !== At) return;
    let s;
    for (let d of gt(o, e.name === Be ? "bash" : "powershell")) s ??= pt(d);
    if (s !== void 0)
      return {
        source: Gwe,
        ruleBehavior: "deny",
        ruleValue: { toolName: e.name, ruleContent: `*${s}*` }
      };
    return;
  }
  let [r] = Se();
  return r !== void 0 && e.name === Be && (await wt(o, Ar))
    ? { source: Gwe, ruleBehavior: "deny", ruleValue: yt(r) }
    : void 0;
}
var Cr = 8,
  wr = 512,
  br = 131072,
  Rr = /^(?:\/|~(?:\/|$)|\.{1,2}(?:\/|$)|\$\{?HOME\}?(?:\/|$)|file:)/i,
  Er = /(^|[/\\])\.\.?([/\\]|$)/,
  sn =
    /[/\\~*?[\]{}<>|;&`\x00-\x1f\x7f-\x9f\p{Cf}]|^\.|%(?=[0-9a-f]{2}|u[0-9a-f]{4})|\$(?=[\p{L}_{('"])|[@!+](?=\()|\+(?=[.~])|^[a-z][a-z0-9+.-]*:(?=\S)/iu,
  Pr = /^["'(<[{]+/,
  Tr = `"')>]}`,
  Or = ".,;:!?";
function Mr(e) {
  return fee(e.replace(Pr, ""), Tr);
}
function Ir(e) {
  return /^[-+][a-zA-Z]+$/.test(e) && e.includes("c");
}
function Nr(e) {
  return e.slice(0, e.lastIndexOf("/") + 1);
}
var Xn = /[,:=]+/,
  vt = /[*?[\]{}()@+!\\]/,
  xr = /[\x00-\x1f\x7f-\x9f\p{Cf}\s"'`%#|<>;&,:=]/u,
  Pe = /[\t\n\v\f\r\x85\u2028\u2029]+/g,
  Dr = /[\n\v\f\r\x85\u2028\u2029;&|]+/,
  Wr = /^\$(?=['"])|['"\\]/g,
  $r = /^file:\/\/(?:localhost)?(?=\/)/i,
  Fr =
    /^(https?):\/\/((?:[a-z0-9-]{1,63}\.)+[a-z][a-z0-9-]{0,62})(?::([1-9]\d{0,4}))?(\/(?:[\w-]+(?:\.[\w-]+)*(?:\/[\w-]+(?:\.[\w-]+)*)*\/?)?(?:\?[\w\-.=&]*)?(?:#[\w\-.]*)?)?$/i,
  Jn = /^[A-Za-z_][\w-]*(?:\/[A-Za-z0-9_][\w-]*(?:\.[\w-]+)*)+$/,
  an = /^(?![/~$]|[A-Za-z][A-Za-z0-9+.-]*:)\S*[/\\]\S*$/,
  Br = 512,
  Hr = 16,
  Ur = 16,
  Vr = /(?:^|\/)proc\/\d+(?:\/|$)/,
  et = /^(?:(?:System\/)?Volumes\/)?Data(?:\/|$)/i,
  jr = /^(?:System\/)?Volumes\/Data(?:\/|$)/i,
  zr = /\/(?:System(?:\/Volumes)?|Volumes)$/i,
  Gr =
    /\.(?:lan|home|corp|private|intranet|test|onion|arpa)$|(?:^|\.)(?:ts\.net|fritz\.box|xip\.io|rbndr\.us|1u\.ms|rebind\.it)$/,
  Kr = /(?:^|\.)\d+(?:\.|$)|(?:^|[.-])(?:0x|[0-9a-f]{8}(?:[.-]|$))|(?:^|[^0-9])\d+(?:[.-]\d+){2}/,
  Zr = 2048;
function cn(e, n, o) {
  if (e.isMcp !== !0) return;
  let r = O(),
    s = r === "macos",
    d = r === "linux" || r === "wsl",
    u = Se(),
    p = Ln(),
    h = Re(),
    _ = (y) => (s ? vo(y.normalize("NFC")) : r === "windows" ? Fc(y).replaceAll("\\", "/") : y),
    S = MG(
      L([
        ...d$(),
        ...Rze()
          .filter(({ tail: y }) => y === "/**")
          .map(({ literal: y }) => y),
        ...(i.CLAUDE_CODE_HOST_CREDS_FILE ? [Yn(i.CLAUDE_CODE_HOST_CREDS_FILE)] : [])
      ]).map((y) => y.replace(/[\\/]+$/, ""))
    ).map(_),
    C = (y) => ({
      kind: "deny",
      rule: { source: Gwe, ruleBehavior: "deny", ruleValue: { toolName: qe, ruleContent: y } }
    }),
    H = Rze()
      .filter(({ tail: y }) => y.startsWith("/"))
      .map(({ literal: y, tail: w }) => ({
        dir: _(y.replace(/[\\/]+$/, "")),
        segments: w
          .split("/")
          .slice(1)
          .map(
            (P) =>
              new RegExp(
                `^${P.replace(/[.+^${}()|[\]\\]/g, "\\$&")
                  .replace(/\*+/g, "[^/]*")
                  .replace(/\?/g, "[^/]")}$`,
                s ? "i" : ""
              )
          )
      })),
    W = (y) => {
      let w = !1,
        P = jo(y),
        A = eet(),
        D = new Map(
          A.flatMap(({ mountPoint: B }) =>
            P.filter((Y) => Y === B || Y.startsWith(`${B}/`)).map((Y) => [
              Y.slice(B.length) || "/",
              Y
            ])
          )
        ),
        T = L([...P, ...(s ? [WM(y)] : []), ...D.keys()]);
      for (let B of T) {
        let Y = _(B);
        if (
          en(B) ||
          ((s || r === "windows") && en(Y)) ||
          (d && /^\/proc\/.+\/environ$/.test(B)) ||
          S.some((te) => Y === te || Y.startsWith(`${te}/`))
        )
          return { under: D.get(B) ?? B };
        let Q = Y.replace(/\/+$/, "");
        if (
          Q === "" ||
          S.some((te) => te.startsWith(`${Q}/`)) ||
          A.some(({ mountPoint: te }) => te.startsWith(`${Q}/`)) ||
          H.some(
            ({ dir: te, segments: we }) =>
              te.startsWith(`${Q}/`) ||
              Q === te ||
              (Q.startsWith(`${te}/`) &&
                Q.slice(te.length + 1)
                  .split("/")
                  .every((pe, ge) => ge < we.length && we[ge].test(pe)))
          ) ||
          (d && /^\/proc(?:\/|$)/.test(Q)) ||
          (s && /^\/(?:system(?:\/volumes(?:\/data)?)?|volumes)$/.test(Q)) ||
          /^\/dev(?:\/fd(?:\/|$)|$)/.test(Q)
        )
          w = !0;
      }
      return w ? "above" : "clear";
    },
    V =
      r === "windows"
        ? L(
            [...S, ...H.map(({ dir: y }) => y)].flatMap(
              (y) => /^([a-z]):\//.exec(y)?.slice(1) ?? []
            )
          )
        : [],
    v = (y) => {
      let w = nt(y);
      if (w !== void 0) {
        let A =
            /^[\\/](?![\\/])/.test(w) && !/^\/[a-z]\//i.test(w)
              ? [w, ...V.map((T) => `${T.toUpperCase()}:${w.replace(/\//g, "\\")}`)]
              : [w],
          D;
        for (let T of A) {
          let B = W(T);
          if (B === "above") D = "ask";
          else if (B !== "clear") return { deny: B.under };
        }
        return D;
      }
      let P = y.search(vt);
      if (P > 0) {
        let A = Nr(y.slice(0, P)),
          D = A === "" ? void 0 : nt(A);
        if (D !== void 0) {
          let T = W(D);
          if (T !== "clear" && T !== "above") return { deny: `${T.under} (${y.slice(0, 128)})` };
        }
      }
      return "ask";
    },
    I = (y) => {
      let w = y;
      for (let P = 0; P < 3; P++) {
        let A = Mr(w),
          D = fee(A, Or);
        if (D === "") return A || w;
        if (D === w) break;
        w = D;
      }
      return w;
    },
    X = (y) => {
      let w = I(y);
      return [w, ...w.split(Xn), ...y.split(Xn)].some((P) => P !== "" && P !== y && sn.test(I(P)));
    },
    J,
    K = () =>
      (J ??= [
        ...S.map((y) => ({ dir: y, segments: [] })),
        ...H,
        { dir: "/dev/fd", segments: [] },
        ...(d ? [{ dir: "/proc", segments: [/^(?:self|thread-self)$/] }] : []),
        ...Rze()
          .filter(({ tail: y }) => !y.startsWith("/"))
          .map(({ literal: y, tail: w }) =>
            w === ""
              ? { dir: _(y), segments: [] }
              : {
                  dir: _(Yn(y)),
                  segments: [
                    new RegExp(
                      `^${ot(y).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.[^/]*$`,
                      s ? "i" : ""
                    )
                  ]
                }
          )
      ]),
    j,
    z = new Map(),
    M = (y) => {
      let w = no() ?? ru();
      return L([
        ...(w === null ? [] : [w]),
        ...Ite(),
        ...nRs(),
        ...y.additionalWorkingDirectories.keys(),
        pxe()
      ]);
    },
    Z = (y, w) => {
      let P = M(w),
        A = y.split("/"),
        D = [y];
      if (s)
        for (let T = 0; T < A.length; T++) {
          let B = A.slice(T).join("/");
          if (T > 0 && !jr.test(B)) continue;
          while (et.test(B)) ((B = B.replace(et, "")), D.push(B));
        }
      if (
        [
          ...D.map((T) => `/${T}`),
          ...A.map((T, B) => `/${A.slice(B).join("/")}`),
          ...P.map((T) => rn(T, y))
        ].some((T) => pE(T) || aN(T, s ? "darwin" : "linux"))
      )
        return "unreadable";
      if (
        (s && zr.test(y)) ||
        D.some(
          (T) =>
            W(`/${T}`) !== "clear" ||
            W(rn(tt(), T)) !== "clear" ||
            qr(_(T), K()) ||
            Yr(_(T), K()) ||
            (d && Vr.test(T))
        )
      )
        return "guarded_place";
      for (let T of P) {
        let B = rn(T, y),
          Y = W(B) === "clear" ? Un(B, w, T) : "guarded_place";
        if (Y !== void 0) return Y;
      }
      return;
    },
    le = (y) => {
      if (!an.test(y)) return;
      try {
        if (y.length > Br || !Jn.test(y) || Ft(y, "/") + 1 > Ur) return "not_plain_name";
        let w = z.get(y);
        if (w !== void 0) return w;
        let P = y.slice(0, y.indexOf("/")).toLowerCase();
        if (hme(P) || gAs(P, nr())) return "host_like";
        if (r !== "macos" && r !== "linux") return "platform";
        if (o === void 0) return "unreadable";
        if (z.size >= Hr) return "too_many";
        let A = Z(y, o) ?? "relative_path";
        return (z.set(y, A), A);
      } catch (w) {
        return (
          l(Error("a served MCP relative name could not be judged", { cause: w })),
          "unreadable"
        );
      }
    },
    ue = (y, w) => {
      if (((j = void 0), y === "")) return;
      if (!/\s/.test(y)) {
        let P = sn.test(y) ? v(y) : X(y) ? "ask" : void 0;
        if (P !== "ask") return P;
        if (p && Xr(y)) {
          let D = URL.parse(y)?.pathname;
          return D === "/" || (D !== void 0 && v(D) === void 0 && v(`~${D}`) === void 0)
            ? "web_address"
            : "ask";
        }
        let A = !h ? void 0 : y === w ? le(y) : an.test(y) ? "not_plain_name" : void 0;
        if (A === "relative_path") return "relative_path";
        return ((j = A), "ask");
      }
      if (Rr.test(y)) return "ask";
      for (let P of y.split(/\s+/)) {
        let A = I(P);
        if (sn.test(A) ? v(A) !== void 0 : X(P))
          return (
            (j = !h ? void 0 : Jn.test(P) ? "in_sentence" : an.test(P) ? "not_plain_name" : void 0),
            "ask"
          );
      }
      return;
    },
    x,
    re = !1,
    U = !1,
    q = 0,
    de = 0;
  for (let y of Ct(n, Cr)) {
    if (y === kt || ++q > wr) return C("(nested input this machine could not inspect)");
    let w = y.normalize("NFKC");
    for (let P of L([y, w].flatMap((A) => [A.replace(Pe, " ").trim(), A.replace(Pe, "").trim()]))) {
      let A = ue(P, y);
      if (A === "ask") {
        if (x === void 0)
          x = { kind: "ask", spelling: P.slice(0, 256), ...(j !== void 0 && { why: j }) };
      } else if (A === "relative_path") U = !0;
      else if (A === "web_address") re = !0;
      else if (A !== void 0) return C(A.deny);
    }
    if (
      r === "windows" &&
      x === void 0 &&
      ((de += Math.max(y.length, w.length)) > br ||
        L([y, w].flatMap((P) => [P.replace(Pe, " "), P.replace(Pe, "")])).some((P) =>
          gt(P).some((A) => pt(A) !== void 0)
        ))
    )
      x = { kind: "ask", spelling: w.slice(0, 256) };
    if (u.length > 0 && x === void 0)
      for (let P of w.split(Dr)) {
        let A = P.trim()
            .split(/\s+/)
            .filter(Boolean)
            .map((T) => I(T).replace(Wr, "")),
          D = A.length < 2 ? A : Rt(A);
        if (D === void 0 || (D.length >= 2 && u.includes(D[0]))) {
          x = { kind: "ask", spelling: P.trim().slice(0, 256) };
          break;
        }
      }
  }
  return x ?? (U ? { kind: "relative_path" } : re ? { kind: "web_address" } : void 0);
}
function qr(e, n) {
  let o = e.split("/");
  return n.some(({ dir: r, segments: s }) => {
    let d = r.split("/").filter(Boolean),
      u = d.length + s.length,
      p = (_, S) => (_ < d.length ? d[_] === S : s[_ - d.length].test(S)),
      h = (_) => _ < d.length || !p(_, "");
    for (let _ = 0; _ < u; _++) {
      let S = o.slice(0, u - _);
      if (S.some((C, H) => h(_ + H)) && S.every((C, H) => p(_ + H, C))) return !0;
    }
    return !1;
  });
}
function Yr(e, n) {
  let o = e.split("/");
  return n.some(({ dir: r, segments: s }) => {
    let d = r.split("/").filter(Boolean),
      u = d.findLastIndex((S) => S.startsWith(".")) + 1,
      p = d.length + s.length,
      h = (S, C) => (S < d.length ? d[S] === C : s[S - d.length].test(C)),
      _ = (S) => S < d.length || !h(S, "");
    for (let S = 1; S < o.length; S++)
      for (let C = 0; C < p; C++) {
        let H = o.slice(S, S + p - C),
          W = C + H.length < u;
        if (
          (C >= u || W) &&
          F([...H.keys()], (V) => _(C + V)) >= (u === 0 || W ? 1 : 2) &&
          H.every((V, v) => h(C + v, V))
        )
          return !0;
      }
    return !1;
  });
}
function nt(e) {
  let n = e;
  if (/^file:/i.test(n)) {
    let o = $r.exec(n);
    if (o === null) return;
    n = n.slice(o[0].length);
  }
  if (((n = n.replace(/^\$\{?HOME\}?(?=\/|$)/, "~")), n === "~")) n = "~/";
  if (O() === "windows") {
    if (
      ((n = (n[0] ?? "") + n.slice(1).replace(/[\\/]{2,}/g, "/")),
      (n = n
        .replace(/^([A-Za-z]):[\\/]/, (o, r) => `/${r.toLowerCase()}/`)
        .replace(/^\/(?:proc\/cygdrive|cygdrive|mnt)\/(?=[a-z](?:\/|$))/i, "/")
        .replace(/^\/([A-Za-z])$/, "/$1/")
        .replace(/^\/([A-Z])\//, (o, r) => `/${r.toLowerCase()}/`)),
      /^\/[a-z]\//.test(n))
    )
      n = n.replaceAll("\\", "/");
    if (/^[\\/]{2}/.test(n) || /^\/(?:mnt|cygdrive)\/?$/i.test(n) || /^\/proc(?:\/|$)/i.test(n))
      return;
  }
  if (
    ((n =
      O() === "windows" && /^\/[a-z]\/+$/i.test(n)
        ? n.replace(/\/+$/, "/")
        : n.replace(/(?<=[^/])\/+$/, "")),
    !/^(?:\/|~\/)/.test(n) ||
      xr.test(n) ||
      vt.test(n) ||
      n.includes("$") ||
      n.includes("~", 1) ||
      Er.test(n.slice(1)))
  )
    return;
  return ut(n, tt());
}
function Xr(e) {
  let n = e.length > Zr ? null : Fr.exec(e);
  if (n === null) return !1;
  let o = n[1].toLowerCase(),
    r = n[2].toLowerCase(),
    s = n[4] ?? "/";
  if (mAs(r) || hme(r) || Gr.test(r) || Kr.test(r) || /[?#&=]\./.test(s)) return !1;
  let d = n[3] === void 0 || n[3] === (o === "https" ? "443" : "80") ? "" : `:${n[3]}`,
    u = URL.parse(e);
  return u !== null && u.href === `${o}://${r}${d}${s}` && u.hostname === r;
}
var kt = Symbol("depth-exhausted");
function* Ct(e, n) {
  if (typeof e === "string") {
    yield e;
    return;
  }
  if (e === null || typeof e !== "object") return;
  let o = Array.isArray(e) ? e.map((r) => ["", r]) : Object.entries(e);
  if (n <= 0) {
    if (o.length > 0) yield kt;
    return;
  }
  for (let [r, s] of o) {
    if (r !== "") yield r;
    yield* Ct(s, n - 1);
  }
}
async function wt(e, n) {
  let o = await _9t(e);
  if (o.kind !== "simple") return !1;
  for (let r of o.commands) {
    let s = Rt(r.argv);
    if (s === void 0) return !0;
    let [d = "", ...u] = s;
    if (Se().includes(d)) return !0;
    let p = d.replace(/\.exe$/, "");
    if (!ZL.has(p)) continue;
    if (!Uye.has(p)) {
      if (
        u.some((h) => {
          let _ = ln(ht(h)),
            S = O() === "macos" ? _.toUpperCase().toLowerCase() : _;
          return Se().some((C) => S.includes(C));
        })
      )
        return !0;
      continue;
    }
    if (!u.some(Ir)) continue;
    if (n <= 1) return !0;
    for (let h of u) if (await wt(h, n - 1)) return !0;
  }
  return !1;
}
function Rt(e) {
  let n = O(),
    o = n === "macos" || n === "windows",
    r = [...e];
  for (let s = 0; s < 32; s++) {
    let d = ot(r[0] ?? "");
    r[0] = o ? d.toUpperCase().toLowerCase() : d;
    let u = r[0] === "env" ? Jr(r) : void 0;
    if (u !== void 0) {
      r = u;
      continue;
    }
    let p = wmt(r),
      h = p.length !== r.length || p[0] !== r[0];
    if (h && !/^[-+\d]/.test(p[0] ?? "")) {
      r = p;
      continue;
    }
    if (!QHe.has(r[0]) || (r[0] === "command" && r.some(qbt))) return h ? p : r;
    let _ = r.findIndex(
      (S, C) => C > 0 && !/^(?:[-+]|\d+(?:\.\d+)?[smhd]?$|[A-Za-z_]\w*=)/.test(S)
    );
    if (_ < 1) return r;
    r = r.slice(_);
  }
  return;
}
function Jr(e) {
  for (let n = 1; n < e.length; n++) {
    let o = e[n],
      r = o.startsWith("--split-string=")
        ? o.slice(15)
        : /^-[^-]*S/.test(o)
          ? o.slice(o.indexOf("S") + 1)
          : void 0,
      s = o === "--split-string" || r === "",
      d = s ? (e[n + 1] ?? "") : r;
    if (d !== void 0)
      return [...d.trim().split(/\s+/).filter(Boolean), ...e.slice(n + (s ? 2 : 1))];
    if (["-u", "-C", "--unset", "--chdir"].includes(o)) n++;
    else if (o === "--" || !/^(?:-|[A-Za-z_]\w*=)/.test(o)) return;
  }
  return;
}
function un(e) {
  if (e?.type === "rule") return e.rule.source === Gwe ? e.rule : void 0;
  if (e?.type === "subcommandResults")
    for (let n of e.reasons.values()) {
      let o = un(n.decisionReason);
      if (o !== void 0) return o;
    }
  return;
}
function Rps(e, n, o, r) {
  if (e.getPath === void 0) return;
  let s = rS(e, n);
  if (!s.success) return;
  let d = yg(r, () => e.getPath?.(s.data));
  if (typeof d !== "string" || d === "") return;
  let u = e.isReadOnly(s.data) ? ["read", "edit"] : ["edit", "read"],
    p = jo(ut(d, r)),
    h = O() === "macos" ? p.flatMap((_) => [_, vo(_)]) : p;
  for (let _ of h)
    for (let S of u) {
      let C = xa(_, o, S, "deny");
      if (C?.source === Gwe) return C;
    }
  return;
}
function APt(e) {
  let n = e.ruleValue.ruleContent ?? "";
  return n.startsWith("//") ? n.slice(1) : n;
}
function fhr(e) {
  let n = APt(e);
  return g_t(eet().map(({ mountPoint: o }) => ({ literal: o, tail: "" }))).some((o) =>
    n.startsWith(`${o.slice(1)}/`)
  );
}
function pOn(e) {
  if (e.ruleValue.toolName === Be || e.ruleValue.toolName === At) return "keychain";
  let n = e.ruleValue.ruleContent ?? "",
    o = on();
  if (g_t([...o, ...eet().flatMap(({ mountPoint: r }) => it(r, o))]).includes(n))
    return "personal_credential";
  if (/\/daemon\/dispatch\/\*\*$/.test(n)) return "exec_ingest";
  if (/\/Library\/Keychains\/\*\*$/.test(n)) return "keychain_files";
  if (/\/Microsoft\/(?:Credentials|Vault|Protect)\/\*\*$/.test(n)) return "credential_store_files";
  return e.ruleValue.toolName === at ? "write" : "read";
}
var es = "tengu_reactive_zephyr";
function Et() {
  return gr(es, { safe: !1 });
}
var fn = { may: !0 };
function ne(e) {
  return { may: !1, why: e };
}
function pn(e) {
  return e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === !0
    ? "hook_held"
    : "hook_forced_ask";
}
function gn(e, n) {
  if (e.behavior !== "ask") return "other";
  return n ? pn(e) : "unresolved_shell_write";
}
function Oe(e, n) {
  try {
    return n();
  } catch (o) {
    return (l(Error("a served call's telemetry value could not be worked out", { cause: o })), e);
  }
}
function mOn(e) {
  return Oe("other", () => {
    if (e !== "own_record") return e === "conveyed" ? "conveyed_stance" : "other";
    return TMt() ? "auto_refused" : "consent";
  });
}
var ns = {
  dangerousRemoval: "safety_check_dangerous_removal",
  backgroundOperator: "safety_check_background_operator",
  suspiciousWindowsPath: "safety_check_suspicious_windows_path",
  outsideReadsBlocked: "safety_check_outside_reads_blocked",
  restrictedMode: "safety_check_restricted_mode"
};
function Pt(e) {
  if (e.classifierApprovable) return "settings_file";
  let n = e.circuitBreaker;
  return (n === void 0 ? void 0 : ns[n]) ?? "safety_check_other";
}
function Tt(e) {
  return Oe("other", () => {
    if (!e.first.may) return e.first.why;
    if (e.vetoed) return e.ownCheck === "block" ? "own_check_block" : "own_check_silence";
    if (!e.afterCheck.may) return e.afterCheck.why;
    return g9t.has(e.tool.name) || e.tool.isMcp === !0 ? "none" : "tool_not_answerable";
  });
}
var ts = ["irreversible_local_destruction", "code_from_external"],
  Ot = 20000,
  os = 5000,
  xt = 2000,
  Mt = "This computer's own safety check did not clear this, so a person needs to approve it.",
  rs = {
    irreversible_local_destruction:
      "This can delete files or discard changes for good, so a person needs to approve it.",
    code_from_external:
      "This may run code from outside this computer, so a person needs to approve it."
  },
  ss = "This computer's own safety check did not answer, so a person needs to approve it.";
function Dt(e) {
  switch (e.verdict) {
    case "no_verdict":
      return ss;
    case "block":
      return e.kind === void 0 ? Mt : rs[e.kind];
    case "allow":
      return Mt;
  }
}
function Lt(e, n) {
  let o = e.trimEnd();
  if (o === "") return n;
  return `${/[.!?\u2026]$/.test(o) ? o : `${o}.`} ${n}`;
}
function Me(e) {
  if (e === void 0) return Ot;
  return Math.min(Ot, e - Date.now() - os);
}
async function hn(e) {
  let n = Date.now(),
    o = await It(e, e.capMs),
    { judged: r, blockCategory: s, failure: d } = o,
    u = 1;
  if (e.again !== void 0 && o.mayPass)
    try {
      let _ = Me(e.again.legDeadlineAt);
      if (_ >= xt) {
        u = 2;
        let S = await It(e, _);
        ((r = S.judged), (s = S.blockCategory), (d = S.failure));
      }
    } catch (_) {
      if (!e.stopSignal.aborted && !Ke(_)) l(_);
    }
  let p = Date.now() - n;
  if (
    (a("tengu_remote_tool_serve", {
      op: b("second_check"),
      call_id: _e(e.callId),
      mode: b("enforce"),
      verdict: c(r.verdict),
      why: ce(r.verdict === "no_verdict" ? r.why : void 0),
      block_kind: Oe(void 0, () => (r.verdict === "block" ? Aje(s) : void 0)),
      error_kind: d?.errorKind === void 0 ? void 0 : _S(d.errorKind),
      http_status: d?.httpStatus,
      duration_ms: p,
      tool: Nn(e.tool.name),
      attempts: e.again === void 0 ? void 0 : u,
      overlapped_hold: e.again?.besideHold
    }),
    r.verdict !== "block")
  )
    return { ...r, ms: p };
  let h = Et() ? ts.find((_) => _ === s) : void 0;
  return { verdict: "block", ...(h !== void 0 && { kind: h }), ms: p };
}
async function It(e, n) {
  let o,
    r = !1,
    s,
    d;
  if (n < xt) o = { verdict: "no_verdict", why: "no_budget" };
  else {
    let u = Ts(e.stopSignal, { timeoutMs: n, refTimer: !0 });
    try {
      let p = aMe(e.tool.name, e.input);
      if (Zko(p, [e.tool]) === "") o = { verdict: "no_verdict", why: "not_run" };
      else {
        let h = await pke(
            [],
            p,
            [e.tool],
            { ...e.permissionContext, alwaysDenyRules: is(e.permissionContext) },
            u.signal,
            {
              isSubagentLoop: !1,
              recordPresumed: !1,
              onlyBuiltInContext: !0,
              judgesServedCall: !0,
              servedSessionMode: e.serviceWrittenSessionMode
            }
          ),
          _ = Nt(u.signal, e.stopSignal),
          S =
            h.unavailable === !0 &&
            h.transcriptTooLong !== !0 &&
            h.refusedBySafeguard !== !0 &&
            h.failureMode === void 0;
        if (_ !== void 0) ((o = { verdict: "no_verdict", why: _ }), (r = _ === "timeout" && S));
        else if (h.classifierRan === !1) o = { verdict: "no_verdict", why: "not_run" };
        else if (
          h.unavailable === !0 ||
          h.transcriptTooLong === !0 ||
          h.refusedBySafeguard === !0 ||
          h.failureMode !== void 0
        )
          ((o = { verdict: "no_verdict", why: "unavailable" }),
            (d = { errorKind: h.errorKind, httpStatus: h.httpStatus }),
            (r =
              S &&
              h.retryAfterMs === void 0 &&
              hPr(h.errorKind) &&
              h.errorKind?.endsWith("_no_retry") !== !0));
        else ((o = { verdict: h.shouldBlock === !1 ? "allow" : "block" }), (s = h.category));
      }
    } catch (p) {
      let h = Nt(u.signal, e.stopSignal);
      if (h === void 0) l(p);
      ((o = { verdict: "no_verdict", why: h ?? "threw" }), (r = h === "timeout"));
    } finally {
      u.cleanup();
    }
  }
  return { judged: o, mayPass: r, blockCategory: s, failure: d };
}
function is(e) {
  let n = new Set(e.alwaysDenyRules[Gwe]);
  return {
    [Gwe]: dt()
      .map(dn)
      .filter((o) => n.has(o))
  };
}
function Nt(e, n) {
  if (n.aborted) return "stopped";
  return e.aborted ? "timeout" : void 0;
}
var as = new Set([
  "Automount -hosts path detected (defense-in-depth check)",
  "Automount browse surface detected (defense-in-depth check)",
  "Kernel-resolved path prefix (/.vol etc.) detected (defense-in-depth check)",
  "UNC path detected (defense-in-depth check)",
  "UNC glob pattern detected (defense-in-depth check)",
  "Automount -hosts glob pattern detected (defense-in-depth check)",
  "Automount browse surface glob pattern detected (defense-in-depth check)",
  "Kernel-resolved path prefix (/.vol etc.) glob pattern detected (defense-in-depth check)"
]);
function Wt(e) {
  return (
    e.behavior === "ask" &&
    e.decisionReason?.type === "safetyCheck" &&
    as.has(e.decisionReason.reason)
  );
}
function $t(e, n, o) {
  if (typeof e.getPath !== "function") return !1;
  let r = e.getPath(n),
    s = jo(r);
  if (_2e(e, n, o, s) === null) return !1;
  let d = o.trustedNetworkDirectories,
    u = [r, ...s, ...(e.name === uo && typeof n.pattern === "string" ? [n.pattern] : [])];
  return u.some((p) => Oye(p, d) || uce(p, d)) || !u.some((p) => D8(p, d));
}
function Ie(e) {
  return e === "auto" || e === "plan";
}
function xps(e) {
  if (e.callerKind !== "ccr_container") return;
  if (e.attested === !0) return "attested";
  return e.attested === !1 &&
    Ie(e.sessionMode) &&
    e.askedInMode === e.sessionMode &&
    e.classifierEligible &&
    !e.autoModeRefusedHere &&
    (e.sessionMode !== "plan" || e.planClaimBackedHere) &&
    (g9t.has(e.toolName) || e.isServedMcpTool)
    ? "auto_arm"
    : void 0;
}
var Bt = "tengu_violin_purfling";
function Ht() {
  return gr(Bt, { safe: !0 });
}
function Ne() {
  return gr(Bt, { safe: !0 });
}
var ds = "tengu_refactored_gadget";
function Ut() {
  return gr(ds, { safe: !1 });
}
function Vt() {
  try {
    return k("tengu_violin_arching", !1) === !0;
  } catch {
    return !1;
  }
}
var ls = "tengu_violin_ebony";
function jt() {
  return gr(ls, { safe: !1 });
}
function _n() {
  try {
    return k("tengu_violin_tailgut", !1) === !0;
  } catch {
    return !1;
  }
}
function zt() {
  return gr("tengu_violin_camber", { safe: !1 });
}
var cs = 16,
  us = /^[A-Za-z_][A-Za-z0-9_]*$/,
  Kt = /^[A-Za-z0-9_./:@%+,-]+$/,
  fs = /^[A-Za-z0-9_./:@%+,=-]+$/,
  ms = new Set([
    "",
    " ",
    "\t",
    `
`,
    '"',
    "/",
    ".",
    "-",
    ",",
    ";",
    "&",
    "|",
    ">",
    "<"
  ]),
  ps = new Set([">", ">>", "<", ">&", "<&", "&>", "&>>", ">|"]),
  gs = new Set([
    "ifs",
    "path",
    "home",
    "pwd",
    "oldpwd",
    "cdpath",
    "env",
    "prompt_command",
    "ps1",
    "ps2",
    "ps3",
    "ps4",
    "random",
    "srandom",
    "seconds",
    "lineno",
    "uid",
    "euid",
    "gid",
    "egid",
    "ppid",
    "shellopts",
    "hostname",
    "hosttype",
    "ostype",
    "machtype",
    "groups",
    "dirstack",
    "pipestatus",
    "reply",
    "optind",
    "optarg",
    "opterr",
    "shlvl",
    "username",
    "logname",
    "user",
    "shell",
    "term",
    "tmpdir",
    "lang",
    "columns",
    "lines",
    "epochseconds",
    "epochrealtime",
    "timeformat",
    "timefmt",
    "globignore",
    "nullcmd",
    "readnullcmd",
    "errno",
    "tty",
    "argc",
    "argv",
    "argv0",
    "cputype",
    "vendor",
    "posixly_correct",
    "tmout",
    "fcedit",
    "fignore",
    "execignore",
    "inputrc",
    "wordchars",
    "stty",
    "match",
    "mbegin",
    "mend",
    "_",
    "status",
    "psvar",
    "fpath",
    "manpath",
    "mailpath",
    "module_path",
    "watch",
    "signals",
    "histchars",
    "options",
    "commands",
    "functions",
    "aliases",
    "galiases",
    "saliases",
    "parameters",
    "modules",
    "history",
    "historywords",
    "nameddirs",
    "userdirs",
    "builtins",
    "reswords",
    "widgets",
    "keymaps",
    "terminfo",
    "termcap",
    "langinfo",
    "errnos",
    "sysparams",
    "mapfile",
    "usergroups",
    "patchars",
    "epochtime",
    "rprompt",
    "rps1",
    "keyboard_hack",
    "mailcheck",
    "null",
    "bashpid",
    "baud",
    "dirstacksize",
    "keytimeout",
    "listmax",
    "logcheck",
    "period",
    "reporttime",
    "reportmemory",
    "savehist",
    "funcnest",
    "ttyidle",
    "try_block_error",
    "try_block_interrupt",
    "mail",
    "sprompt"
  ]),
  hs = [
    "bash",
    "zsh",
    "ld_",
    "dyld_",
    "lc_",
    "comp",
    "hist",
    "prompt",
    "dis_",
    "func",
    "job",
    "zle"
  ],
  _s = new Set([
    "read",
    "mapfile",
    "readarray",
    "getopts",
    "printf",
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "unset",
    "let",
    "eval",
    "source",
    ".",
    "set",
    "shopt",
    "setopt",
    "unsetopt",
    "emulate",
    "exec",
    "trap",
    "alias",
    "unalias",
    "shift",
    "wait",
    "coproc",
    "builtin",
    "command",
    "noglob",
    "nocorrect",
    "-",
    "integer",
    "float",
    "vared",
    "zparseopts",
    "zstyle",
    "zformat",
    "zstat",
    "strftime",
    "print",
    "sched",
    "zmodload",
    "autoload",
    "pcre_match",
    "pcre_compile",
    "pcre_study",
    "zselect",
    "zgetattr",
    "zsetattr",
    "zsystem",
    "ztie",
    "zuntie",
    "zcurses",
    "enable",
    "disable",
    "hash",
    "unhash",
    "rehash",
    "bind",
    "bindkey",
    "compgen",
    "complete",
    "compopt",
    "fc",
    "history",
    "r",
    "ulimit",
    "limit",
    "unlimit",
    "unsetenv",
    "setenv",
    "getln",
    "pushln",
    "zregexparse",
    "sysread",
    "syswrite",
    "sysopen",
    "sysseek",
    "zsocket",
    "ztcp",
    "zpty",
    "zftp",
    "zle",
    "zcompile",
    "functions",
    "unfunction",
    "private",
    "nameref",
    "stat",
    "time",
    "function",
    "select",
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "case",
    "esac",
    "for",
    "while",
    "until",
    "do",
    "done",
    "in",
    "repeat",
    "foreach",
    "end",
    "always",
    "nocasematch",
    "exit",
    "return"
  ]);
async function Zt(e) {
  try {
    if (!/^[\t\n\x20-\x7e]*$/.test(e)) return;
    let n = await HY(e);
    if (n === null || n === VP) return;
    let o = Gt(n, e, !1);
    if (o === void 0 || o.replacements.length === 0) return;
    let r = "",
      s = 0;
    for (let p of o.replacements) {
      if (p.start < s) return;
      ((r += e.slice(s, p.start) + p.value), (s = p.end));
    }
    r += e.slice(s);
    let d = await HY(r);
    if (d === null || d === VP) return;
    let u = Gt(d, r, !0);
    return u !== void 0 && u.skeleton === o.skeleton ? r : void 0;
  } catch (n) {
    if (!Ke(n)) l(n);
    return;
  }
}
function Gt(e, n, o) {
  if (e.type !== "program") return;
  let r = new Map(),
    s = new Set(),
    d = [],
    u = "";
  for (let [p, h] of e.children.entries()) {
    if (h.type === ";" || h.type === "&") {
      u += h.type;
      continue;
    }
    if (h.type !== "variable_assignment") {
      let v = yn(h, n, r, d);
      if (v === void 0) return;
      u += v;
      continue;
    }
    let [_, S, C] = h.children;
    if (
      h.children.length !== 3 ||
      _ === void 0 ||
      S === void 0 ||
      C === void 0 ||
      _.type !== "variable_name" ||
      S.type !== "=" ||
      !us.test(_.text) ||
      s.has(_.text) ||
      s.size >= cs ||
      e.children[p + 1]?.type === "&"
    )
      return;
    let H = _.text.toLowerCase();
    if (NY(_.text) || gs.has(H) || hs.some((v) => H.startsWith(v))) return;
    let W = C.children[1],
      V =
        C.type === "word" || C.type === "number"
          ? C.text
          : C.type === "raw_string" &&
              C.text.length > 2 &&
              C.text.startsWith("'") &&
              C.text.endsWith("'")
            ? C.text.slice(1, -1)
            : C.type === "string" &&
                C.children.length === 3 &&
                W !== void 0 &&
                W.type === "string_content" &&
                C.text === `"${W.text}"`
              ? W.text
              : void 0;
    if (V === void 0 || !Kt.test(V)) return;
    if ((s.add(_.text), !o)) r.set(_.text, V);
    u += "assignment";
  }
  return { skeleton: u, replacements: d };
}
function yn(e, n, o, r) {
  if (e.type === "list" || e.type === "pipeline") {
    let u = `${e.type}(`;
    for (let [p, h] of e.children.entries()) {
      let _ = e.type === "list" ? ["&&", "||"] : ["|", "|&"],
        S = p % 2 === 0 ? yn(h, n, o, r) : _.includes(h.type) ? h.type : void 0;
      if (S === void 0) return;
      u += S;
    }
    return e.children.length % 2 === 1 ? `${u})` : void 0;
  }
  if (e.type !== "command" && e.type !== "redirected_statement") return;
  let s = `${e.type}(`,
    d = e.type === "redirected_statement";
  for (let [u, p] of e.children.entries())
    if (p.type === "file_redirect") {
      let h = p.children.at(-1),
        _ = p.children.at(-2),
        S = p.children.length === 3 ? p.children[0] : void 0;
      if (
        u === 0 ||
        h === void 0 ||
        _ === void 0 ||
        p.children.length > 3 ||
        !ps.has(_.type) ||
        (p.children.length === 3 && (S?.type !== "file_descriptor" || !/^[0-9]+$/.test(S.text))) ||
        !ve(h, n, o, r)
      )
        return;
      s += `redirect(${S?.text ?? ""}${_.type})`;
    } else if (e.type === "redirected_statement") {
      let h = u === 0 ? yn(p, n, o, r) : void 0;
      if (h === void 0) return;
      s += h;
    } else if (p.type === "command_name") {
      let h = p.children[0];
      if (d || h === void 0 || p.children.length !== 1) return;
      d = !0;
      let _ = r.length;
      if (
        !(h.type === "word" || h.type === "number"
          ? Kt.test(h.text) && (h.text.includes("/") || !_s.has(h.text))
          : ve(h, n, o, r) && r.length > _)
      )
        return;
      s += "head";
    } else {
      if (!d || !ve(p, n, o, r)) return;
      s += " word";
    }
  return d ? `${s})` : void 0;
}
function ve(e, n, o, r) {
  switch (e.type) {
    case "word":
    case "number":
    case "raw_string":
      return !0;
    case "simple_expansion":
    case "expansion": {
      let s = e.type === "expansion",
        [d, u, p] = e.children,
        h = u?.type === "variable_name" ? o.get(u.text) : void 0;
      if (
        h === void 0 ||
        e.children.length !== (s ? 3 : 2) ||
        d?.type !== (s ? "${" : "$") ||
        (s && p?.type !== "}") ||
        (!s && !ms.has(n[e.endIndex] ?? ""))
      )
        return !1;
      return (r.push({ start: e.startIndex, end: e.endIndex, value: h }), !0);
    }
    case "string":
      return e.children.every(
        (s) =>
          s.type === '"' ||
          s.type === "string_content" ||
          ((s.type === "simple_expansion" || s.type === "expansion") && ve(s, n, o, r))
      );
    case "concatenation":
      return e.children.every((s) =>
        s.type === "word" || s.type === "number"
          ? fs.test(s.text)
          : s.type !== "concatenation" && ve(s, n, o, r)
      );
    default:
      return !1;
  }
}
function Sn() {
  try {
    return k("tengu_violin_hair", !1) === !0;
  } catch {
    return !1;
  }
}
function Yt() {
  try {
    return k("tengu_violin_ferrule", !1) === !0;
  } catch {
    return !1;
  }
}
import { basename as ys, isAbsolute as Qt, join as Ss, parse as vs, resolve as Xt } from "path";
var ks = 2000,
  As = 112,
  xe = Symbol("cut short");
async function vn(e, n, o, r, s = !1) {
  let d = n.command;
  if (typeof d !== "string") return { file: "error", fileOrFolder: "error" };
  let u = { file: "none", fileOrFolder: "none" },
    p = Ts(r, { timeoutMs: ks, refTimer: !0 });
  try {
    let h = O() === "windows";
    if (
      ((u = {
        file: Kee(n, "file") && !(s && e === Be && (await ooo(d))) ? "named" : "none",
        fileOrFolder: Kee(n, "file_or_folder") ? "named" : "none"
      }),
      u.file !== "none" && u.fileOrFolder !== "none")
    )
      return u;
    if (p.signal.aborted) return me(u, "unresolved");
    let _ = new Promise((x) => {
      p.signal.addEventListener("abort", () => x(xe), { once: !0 });
    });
    if (e !== Be) return u;
    let S = await Nps(d, o);
    if (S === "unparsed") return u;
    let { files: C, dirs: H } = set(),
      W = roo(),
      V = [...C, ...H.flatMap((x) => oet.map((re) => Ss(x, re))), ...W.paths],
      v = L([...H, ...d$()]),
      I = new Set([...V, ...v].map((x) => vo(x))),
      X = new Set(W.globalConfigNames.map((x) => vo(x))),
      J = await Promise.race([Promise.all(L([...V, ...v]).map((x) => Jt(x, "followed"))), _]);
    if (J === xe) return me(u, "unresolved");
    let K = new Set(J.filter((x) => x !== void 0)),
      j = h ? /[\\/]/ : "/",
      z = S.flatMap(({ word: x, directories: re, mayBeElsewhere: U }) => {
        if (x === "") return [];
        let q = Gu(x),
          de = mi(x) || q.startsWith("~") || GM(x),
          y = vs(q).root,
          w = q.slice(y.length).split(j)[0] ?? "",
          A = (de ? [] : Qt(q) ? [o] : re).map((T) => ({
            requested: Xt(T, q),
            firstPartThere: Xt(T, y, w)
          })),
          D = A.filter(({ requested: T, firstPartThere: B }) => !De(T) && !De(B));
        return [{ word: x, local: D, byName: de || D.length < A.length || (U && !Qt(q)) }];
      }),
      M = await Promise.race([
        Promise.all(
          L(z.flatMap(({ local: x }) => x.map(({ firstPartThere: re }) => re))).map((x) =>
            ie()
              .lstat(x)
              .then(
                () => [x, !0],
                (re) => {
                  let U = E(re);
                  return [x, U !== "ENOENT" && U !== "ENOTDIR" && U !== "ENAMETOOLONG"];
                }
              )
          )
        ),
        _
      ]);
    if (M === xe) return me(u, "unresolved");
    let Z = new Map(M),
      le = new Set(),
      ue = 0;
    for (let { word: x, local: re, byName: U } of z) {
      if (U) {
        if (
          ((u = {
            file: u.file === "none" && Kee({ command: x }, "file") ? "named" : u.file,
            fileOrFolder:
              u.fileOrFolder === "none" && Kee({ command: x }, "file_or_folder")
                ? "named"
                : u.fileOrFolder
          }),
          u.file !== "none" && u.fileOrFolder !== "none")
        )
          return u;
      }
      for (let { requested: q, firstPartThere: de } of re) {
        if (le.has(q)) continue;
        le.add(q);
        let y = [q],
          w;
        if (Z.get(de) !== !1) {
          if ((ue++, ue > As)) return me(u, "too_many_pieces");
          let A = await Qse(q, p.signal);
          if (A.unresolved || De(A.landing)) return me(u, "unresolved");
          ((w = A.landing), (y = L([...A.spellings, A.landing])));
        }
        if (y.some((A) => (w !== void 0 && w9t(A, o)) || I.has(vo(A)) || X.has(vo(ys(A)))))
          return me(u, "on_disk");
        let P = w === void 0 ? void 0 : await Promise.race([Jt(w, "as_landed"), _]);
        if (P === xe) return me(u, "unresolved");
        if (P !== void 0 && K.has(P)) return me(u, "on_disk");
      }
    }
    return u;
  } catch (h) {
    let _ = E(h);
    if (_ === void 0)
      l(
        Error(
          "a served shell line's settings identity check threw; the line counts as naming one",
          { cause: h }
        )
      );
    else
      t(
        `A served shell line's settings identity check could not read a path (${_}); the line counts as naming a settings file`,
        { level: "error" }
      );
    return me(u, "error");
  } finally {
    p.cleanup();
  }
}
function me(e, n) {
  return {
    file: e.file === "none" ? n : e.file,
    fileOrFolder: e.fileOrFolder === "none" ? n : e.fileOrFolder
  };
}
function De(e) {
  return Ass(e) || XH(e);
}
async function Jt(e, n) {
  if (De(e)) return;
  try {
    let o = ie();
    if (n === "followed") {
      let { identity: s } = await w2(o, e, { fileIdentity: !0 });
      return s === void 0 || Wu(s.ino) ? void 0 : `${s.dev}:${s.ino}`;
    }
    let r = await o.lstatBigint(e);
    return Wu(r.ino) ? void 0 : `${r.dev}:${r.ino}`;
  } catch (o) {
    let r = E(o);
    if (n === "followed" || r === "ENOENT" || r === "ENOTDIR" || r === "ENAMETOOLONG") return;
    throw o;
  }
}
var ws = 16,
  gOn = "remote_call_session_answer",
  bs = "remote_call_destructive_ask",
  An = "remote_call_classifier_ask",
  Ae = "remote_call_served_mcp_ask",
  Rs = "remote_call_host_settings_shell_write",
  Es = "remote_call_host_settings_edit",
  eo = "remote_call_unresolved_shell_write_ask",
  Ps = "remote_call_settings_file_named_ask",
  phr = !1;
function co(e) {
  return e.isMcp === !0 || !kw(e).supported;
}
function Os(e) {
  return `This command is flagged as destructive. ${e} asks before running destructive commands sent from a cloud session.`;
}
var fo = "remote_call_stopped",
  Ms = {
    behavior: "deny",
    message: "The call could not be confirmed after the answer, so it did not run.",
    decisionReason: { type: "other", reason: "remote_call_relative_path_not_confirmed" },
    decideLocation: "ask-path"
  },
  ke = {
    behavior: "deny",
    message: "The remote session's call was stopped before it was answered; it did not run.",
    decisionReason: { type: "other", reason: fo },
    decideLocation: "ask-path"
  },
  mo = "remote_call_not_run_here",
  Is = new Set(["default", "plan", "dontAsk", "acceptEdits"]);
function eoo(e) {
  if (e.stance.mode !== "session") return { mode: e.stance.mode, capped: !1, autoRefusedHere: !1 };
  let n = e.call ?? jPe,
    o = e.sessionMode ?? "default",
    r = e.sessionMode === "auto" || e.sessionMode === "bypassPermissions";
  if ($e(e.stance, e.sessionMode, n))
    return { mode: "acceptEdits", capped: o === "bypassPermissions", autoRefusedHere: !1 };
  return {
    mode:
      (e.stance.unattended === "own_record" ||
        (e.stance.unattended === "conveyed" && n.modeDecidedByHost === !0)) &&
      Is.has(o)
        ? o
        : "default",
    capped: o === "bypassPermissions",
    autoRefusedHere: r
  };
}
function po(e) {
  if (e.stance.mode !== "session") return "fixed_stance";
  if (e.sessionMode === void 0) return "mode_absent";
  if (e.sessionMode === e.evaluatedMode) return "as_claimed";
  if (e.sessionMode === "auto" || e.sessionMode === "bypassPermissions")
    return e.evaluatedMode === "acceptEdits" ? "auto_fast_path" : "auto_refused_here";
  return "mode_unknown";
}
function Pps(e) {
  let n = po(e),
    o = e.sessionMode ?? "absent";
  return n === "auto_fast_path"
    ? { session: o, evaluated: "auto", step: "accept_edits_fast_path" }
    : { session: o, evaluated: e.evaluatedMode, why: n };
}
function Ns(e, n = "none") {
  switch (e) {
    case "fixed_stance":
    case "as_claimed":
    case "auto_fast_path":
      return;
    case "auto_refused_here":
      return n === "none"
        ? `This computer is not accepting auto mode from cloud sessions right now, so it checked this in ${W$("default").toLowerCase()} mode.`
        : Ei[`auto_off.reason.${n}`];
    case "mode_absent":
    case "mode_unknown":
      return `This computer could not tell which mode the session is in, so it checked this in ${W$("default").toLowerCase()} mode.`;
  }
}
var xs = "remote_call_auto_mode_allowlist";
function $e(e, n, o) {
  if (n !== "auto" && n !== "bypassPermissions") return !1;
  switch (e.unattended) {
    case "own_record":
      return !PPt();
    case "conveyed":
      return o.modeDecidedByHost === !0;
    default: {
      let r = e.unattended;
      return !1;
    }
  }
}
function hOn(e) {
  switch (e) {
    case "own_record":
      return !PPt();
    case "conveyed":
      return !1;
    default: {
      let n = e;
      return !1;
    }
  }
}
function CPt(e, n = "own_record") {
  return e === "plan" && go(n) === void 0;
}
function go(e) {
  if (!hOn(e)) return "answers_refused";
  return nTt() && !BQe("plan_asks_a_person") ? void 0 : "plan_setting";
}
function ho(e) {
  return !1;
}
var to = new Set(["projectSettings", "localSettings", "session"]);
function yOn(e) {
  let n = e.call ?? jPe,
    { mode: o } = eoo({ stance: e.stance, sessionMode: e.sessionMode, call: n }),
    r = $e(e.stance, e.sessionMode, n) || CPt(e.sessionMode, e.stance.unattended),
    s = ag(),
    d = H0t(),
    u = d.launchedInAutoMode || Wf(),
    p = e.userSettings?.held === !0 && mg(),
    h = e.stance.honorLocalRules
      ? [
          ...KDo(VD(), e.userSettings, s).filter(
            (v) => !p || v.source !== "projectSettings" || v.ruleBehavior !== "allow"
          ),
          ...(s
            ? []
            : d.allowRules.map((v) => ({
                source: "cliArg",
                ruleBehavior: "allow",
                ruleValue: Bn(v)
              }))),
          ...hzn(d)
        ]
      : [
          ...KDo(
            Ro()
              .filter((v) => !to.has(v) && !(v === "userSettings" && mg()))
              .flatMap((v) => mce(v)),
            mg() ? void 0 : e.userSettings,
            !1
          ),
          ...hzn(d)
        ].filter((v) => !to.has(v.source) && v.ruleBehavior === "deny"),
    _ = new Set(wEr(h).map((v) => dn(v.ruleValue))),
    S = h.filter(
      (v) =>
        !so(v.ruleBehavior, v.ruleValue, r || (v.source === "cliArg" && u)) &&
        !(v.ruleBehavior === "allow" && _.has(dn(v.ruleValue)))
    ),
    C = EK(Ll(), S, { announce: !1 }),
    H = e.stance.honorLocalRules,
    W = {
      ...C,
      alwaysDenyRules: Ws(
        C.alwaysDenyRules,
        e.stance.honorLocalRules && d.toolsNarrowingDenyRules.length > 0
          ? { toolsNarrowing: [...d.toolsNarrowingDenyRules] }
          : {}
      ),
      additionalWorkingDirectories: new Map([
        ...(e.stance.honorLocalRules
          ? [...d.additionalWorkingDirectories].flatMap(([, v]) => {
              let I = { ...v, path: r4n(v.path) };
              if (Lht(v.path) || !Ds(I)) return [];
              return [[I.path, I]];
            })
          : []),
        [e.launchDir, { path: e.launchDir, source: "session" }]
      ]),
      mode: o,
      isBypassPermissionsModeAvailable: o === "bypassPermissions",
      shouldAvoidPermissionPrompts: !1,
      servedCall: !0,
      ...(e.stance.honorLocalRules &&
        (m2e() || BQe("read_block")) && { blockReadsOutsideWorkingDirectories: !0 }),
      ...((!H || WPe() || !COs() || e.sandboxTurnedOnByHeldFile === !0) && {
        sandboxAutoAllowSuspended: !0
      })
    };
  if (e.stance.honorLocalRules) {
    let v = d.allowRules.length;
    Ls({
      cliarg_allows: v,
      cliarg_allows_kept: (W.alwaysAllowRules.cliArg ?? []).length,
      startup_dirs: d.additionalWorkingDirectories.size,
      startup_dirs_kept: W.additionalWorkingDirectories.size - 1
    });
  }
  let V = (e.sessionUpdates ?? []).filter(
    (v) =>
      v.type === "addRules" &&
      !(s && v.behavior === "allow") &&
      !v.rules.some((I) => so(v.behavior, I, r)) &&
      !(
        v.behavior === "allow" &&
        wEr(v.rules.map((I) => ({ source: "session", ruleBehavior: "allow", ruleValue: I })))
          .length > 0
      )
  );
  return V.length > 0 ? { ...KP(W, V), mode: o } : W;
}
function Ds(e) {
  return !Lht(e.path);
}
var ro = new Set();
function Ls(e) {
  if (e.cliarg_allows === e.cliarg_allows_kept && e.startup_dirs === e.startup_dirs_kept) return;
  let n = Object.entries(e)
    .map(([o, r]) => `${o}=${r}`)
    .join(" ");
  if (ro.has(n)) return;
  (ro.add(n), t(`[remote-tools] served-context screens dropped rules ${n}`));
}
function Ws(e, n) {
  return { ...e, ...n, [Gwe]: rt().map(dn) };
}
function so(e, n, o) {
  return e === "allow" && o && (_ce(n.toolName, n.ruleContent) || vJn(n.toolName));
}
function io(e) {
  try {
    return TMe(e);
  } catch {
    return b("UnknownError");
  }
}
function Ips(e) {
  return EXe(
    "servedCall",
    async (o, r, s, d, u, p) => {
      let h = 0,
        _ = !1,
        S,
        C,
        H = Object.create(o, {
          checkPermissions: {
            value: async (...se) => {
              h += 1;
              try {
                let ee = await o.checkPermissions(...se);
                return ((h -= 1), ee);
              } catch (ee) {
                throw ((S = io(ee)), ee);
              }
            }
          },
          inputSchema: {
            get: () =>
              Object.create(o.inputSchema, {
                parse: {
                  value: (...se) => {
                    _ = !0;
                    try {
                      let ee = o.inputSchema.parse(...se);
                      return ((_ = !1), ee);
                    } catch (ee) {
                      throw ((C = io(ee)), ee);
                    }
                  }
                }
              })
          }
        }),
        W = p?.behavior === "ask" ? await $A(H, r, s) : null,
        V = p?.decisionReason?.type === "hook" && p.decisionReason.hookName === kXe,
        v =
          p === void 0 || p.behavior === "allow"
            ? await nv(H, r, s, d, u)
            : W?.behavior === "deny" && !V
              ? W
              : p;
      if (h > 0 || _)
        return (
          e.onOutcome({
            kind: "denied_by_rule",
            raisedToAsk: !1,
            rulesCheckCrashed: { inputParseThrew: _, crashClass: (_ ? C : S) ?? b("UnknownError") }
          }),
          {
            behavior: "deny",
            message: Vps({ targetName: e.targetName, toolName: o.name }),
            decisionReason: { type: "other", reason: lG }
          }
        );
      let I = (se) => {
          if (e.permissionContextNow === void 0 || !Re()) return;
          if (se === "asked") return ae(s);
          try {
            return e.permissionContextNow();
          } catch (ee) {
            l(
              Error(
                "the rules a served MCP relative name is judged again under could not be read",
                { cause: ee }
              )
            );
            return;
          }
        },
        X = cn(o, r, I("asked")),
        J = X?.kind === "ask",
        K = X?.kind === "web_address",
        j = X?.kind === "relative_path",
        z =
          v.behavior === "deny"
            ? un(v.decisionReason)
            : ((await St(o, r)) ?? (X?.kind === "deny" ? X.rule : void 0)),
        M = v;
      if (z !== void 0) {
        let se = pOn(z),
          ee = SOn({
            targetName: e.targetName,
            kind: se,
            subject: se === "keychain" && typeof r.command === "string" ? r.command : APt(z)
          });
        M =
          v.behavior === "deny"
            ? { ...v, message: ee }
            : { behavior: "deny", decisionReason: { type: "rule", rule: z }, message: ee };
      }
      let Z = "updatedInput" in M && M.updatedInput !== void 0 ? M.updatedInput : r,
        le = M.behavior !== "deny" && rD(o) && Ht() ? await b9t(o, Z, M, fe()) : "none",
        ue = Z.command,
        re =
          zt() && le === "uncertain" && o.name === Be && typeof ue === "string"
            ? await Zt(ue)
            : void 0,
        U = re === void 0 ? void 0 : { ...Z, command: re },
        q = U === void 0 ? le : await b9t(o, U, M, fe()),
        de = q === "uncertain",
        y = Vt(),
        w = jt(),
        P = M.behavior !== "deny" && Ne(),
        A = y && P && rD(o) && ((await _hr(o, Z, s)) || (U !== void 0 && (await _hr(o, U, s)))),
        D = y && de && _n(),
        T = A || D ? await vn(o.name, Z, fe(), e.stopSignal, w) : void 0,
        B = T !== void 0 && U !== void 0 ? await vn(o.name, U, fe(), e.stopSignal, w) : void 0,
        Y =
          T === void 0 || B === void 0
            ? T
            : {
                file: T.file !== "none" ? T.file : B.file,
                fileOrFolder: T.fileOrFolder !== "none" ? T.fileOrFolder : B.fileOrFolder
              },
        Q = y
          ? A && Y?.file !== "none"
          : P && ((await S9t(o, Z, s, w)) || (U !== void 0 && (await S9t(o, U, s, w)))),
        te = Ut()
          ? Q && (Kee(Z, "own_file") || (U !== void 0 && Kee(U, "own_file")))
          : Q ||
            (de &&
              (y
                ? !D || Y?.fileOrFolder !== "none"
                : !_n() || Kee(Z, "file_or_folder") || (U !== void 0 && Kee(U, "file_or_folder")))),
        we = Q ? (Y?.file ?? "error") : D ? (Y?.fileOrFolder ?? "error") : "none";
      if (q !== "none" || Q)
        a("tengu_served_shell_settings_hold", {
          verdict: c(q),
          tool: c(o.name === Be ? "bash" : "powershell"),
          person_only: te,
          ...(y && { cause: c(we) })
        });
      if (q === "settings")
        M = {
          behavior: "deny",
          message: zps({ targetName: e.targetName }),
          decisionReason: { type: "other", reason: Rs }
        };
      else if (
        M.behavior !== "deny" &&
        !rD(o) &&
        Ne() &&
        typeof o.getPath === "function" &&
        !o.isReadOnly(Z, s) &&
        W1r(jo(o.getPath(Z))) === "certain"
      )
        (a("tengu_served_settings_edit_refused", {
          tool: c(o.name === at ? "edit" : o.name === qt ? "write" : "other"),
          engine: c(M.behavior)
        }),
          (M = {
            behavior: "deny",
            message: Kps({ targetName: e.targetName }),
            decisionReason: { type: "other", reason: Es }
          }));
      if (s.remoteCall === void 0)
        l(
          Error(
            "served permission step ran with no call record: a PreToolUse hook's refusal or question cannot be held"
          )
        );
      let pe = s.remoteCall?.strictestHookAnswer;
      if (pe?.behavior === "deny")
        return (
          t(
            `[remote-tools call=${u}] refused by a PreToolUse hook here; ${M.behavior} after it set aside tool=${o.name}`
          ),
          pe
        );
      if (pe !== void 0 && M.behavior === "allow")
        (t(
          `[remote-tools call=${u}] asked about by a PreToolUse hook here; allow after it raised back to that question tool=${o.name}`
        ),
          (M = { ...pe, updatedInput: M.updatedInput }));
      let ge =
          e.stance.askOnDestructive &&
          o.name === Be &&
          typeof r.command === "string" &&
          r.command !== "" &&
          oKn(r.command),
        Fe = co(o) && (phr || J),
        He = $e(e.stance, e.sessionMode, e.call ?? jPe),
        wn =
          e.sessionModel !== void 0 &&
          He &&
          M.behavior === "allow" &&
          M.decisionReason?.type === "mode" &&
          M.decisionReason.mode === "acceptEdits" &&
          I0t(o.name) &&
          P0t(e.sessionModel),
        wo = (He || CPt(e.sessionMode, e.stance.unattended)) && ho(o.name),
        ye = (ge || Fe || K || j || wn || wo || de || Q) && M.behavior === "allow",
        bn = M.behavior === "ask" && M.personOnly === !0,
        Rn = ge || Fe || K || j || Q || (de && o.name === Be) || pe !== void 0 || bn,
        En = wn && !Rn,
        bo = M.behavior === "allow" && M.decisionReason?.type === "classifier",
        he =
          ye || bo
            ? $s(
                M,
                e.targetName,
                Fe
                  ? J
                    ? "served_mcp_path"
                    : "served_mcp"
                  : ge
                    ? "destructive"
                    : Q && !de
                      ? "settings_file_named"
                      : te
                        ? "unresolved_shell_write"
                        : de
                          ? "unreadable_shell_line"
                          : j
                            ? "served_mcp_relative_path"
                            : K
                              ? "served_mcp_web_address"
                              : "classifier"
              )
            : M,
        Ue = (p !== void 0 && M === p) || pe !== void 0 || bn,
        oe =
          J &&
          he.behavior === "ask" &&
          !Ue &&
          he.decisionReason?.type !== "hook" &&
          !(he.decisionReason?.type === "other" && he.decisionReason.reason === Ae)
            ? { ...he, decisionReason: { type: "other", reason: Ae } }
            : he,
        Pn = oe.behavior === "ask" && (Wt(M) || $t(o, Z, ae(s))),
        Tn = oe.behavior === "ask" && M0t(oe.decisionReason, o, Z, s);
      if (
        !e.stopSignal.aborted &&
        He &&
        !K &&
        !j &&
        oe.behavior === "ask" &&
        !_Xe(oe) &&
        yo(oe, o, Ue || s.hookAskFloor === !0, ae(s), te, Pn, Tn, e.stance.unattended, En).may &&
        R0t(o, r)
      ) {
        let se = {
            behavior: "allow",
            updatedInput: "updatedInput" in oe && oe.updatedInput !== void 0 ? oe.updatedInput : r,
            decisionReason: { type: "other", reason: xs }
          },
          ee = ao(e, o, se, r),
          Ze = ee !== void 0 && (await ee, e.stopSignal.aborted) ? ke : lo(e);
        if (Ze !== void 0) return (e.onOutcome({ kind: Cn(Ze, se), raisedToAsk: ye }), Ze);
        return (
          e.onOutcome({ kind: Cn(se, se), raisedToAsk: ye, allowBasis: "auto_allowlist" }),
          se
        );
      }
      let Ve = await Fs(oe, e, r, s, {
          raisedToAsk: ye,
          tool: o,
          forcedByHook: Ue,
          callId: u,
          unresolvedShellWrite: te,
          networkPath: Pn,
          serverAskUnderPlanFloor: Tn,
          fastPathEdit: En,
          raisedWhateverAllows: Rn,
          mcpPathWhy: X?.kind === "ask" ? X.why : j ? "relieved" : void 0
        }),
        be =
          j &&
          Ve.behavior === "allow" &&
          cn(o, Ve.updatedInput ?? r, I("answered"))?.kind !== "relative_path"
            ? Ms
            : Ve,
        On = ao(e, o, be, r);
      if (On !== void 0) await On;
      let je = be.behavior === "allow" && e.stopSignal.aborted;
      if (je)
        a("tengu_remote_tool_allow_after_stop", {
          road: c(oe.behavior === "allow" ? "decided_here" : "ask_path"),
          is_mcp: o.mcpInfo !== void 0
        });
      let Eo = be.behavior === "allow" && !je ? lo(e) : void 0,
        Ge = je ? ke : (Eo ?? be);
      return (
        e.onOutcome({
          kind: Cn(Ge, oe),
          raisedToAsk: ye,
          ...(z !== void 0 && { throughSecondRootMount: fhr(z) }),
          ...(v === W && { deniedUnderForcedAsk: !0 }),
          ...(oe.behavior === "allow" &&
            Ge.behavior === "allow" && { allowBasis: oe.decisionReason?.type ?? "unspecified" }),
          ...(oe.behavior === "deny" && {
            denySource: Co(oe.decisionReason),
            hostCredentialRefusal: z && pOn(z),
            underWindowsProfileGlob: z && uhr(APt(z))
          })
        }),
        Ge
      );
    },
    () => !0
  );
}
function Ops(e) {
  try {
    if (
      !Sn() ||
      e.stance.onAsk !== "session" ||
      !rD(e.tool) ||
      !ho(e.tool.name) ||
      !hOn(e.stance.unattended) ||
      !($e(e.stance, e.sessionMode, e.call ?? jPe) || CPt(e.sessionMode, e.stance.unattended)) ||
      !Ie(e.sessionMode)
    )
      return;
    let n = _o(e.tool, e.forwardedInput),
      o = cp(e.callStop);
    return {
      input: n,
      check: hn({
        tool: e.tool,
        input: n,
        permissionContext: e.permissionContext,
        serviceWrittenSessionMode: e.serviceWrittenSessionMode,
        stopSignal: o.signal,
        callId: e.callId,
        capMs: Me(e.legDeadlineAt),
        again: { legDeadlineAt: e.legDeadlineAt, besideHold: !0 }
      }).catch((r) => (We(r, o.signal), { verdict: "no_verdict", why: "threw", ms: 0 })),
      giveUp: () => o.abort()
    };
  } catch (n) {
    We(n, e.callStop.signal);
    return;
  }
}
function We(e, n) {
  if (!n.aborted && !Ke(e)) l(e);
}
function _o(e, n) {
  let o = rS(e, n);
  if (!o.success) return n;
  let r = { ...o.data };
  return (e.backfillObservableInput?.(r), r);
}
function Le(e, n) {
  let o = (s) => Object.keys(s).filter((d) => s[d] !== void 0),
    r = o(e);
  return r.length === o(n).length && r.every((s) => n[s] !== void 0 && Cs(e[s], n[s]));
}
function $s(e, n, o = "destructive") {
  if (e.behavior !== "allow") return e;
  let r = {
      destructive: Os(n),
      classifier: `${n} would not decide this one on its own \u2014 it needs approval in this session.`,
      unresolved_shell_write: Ei["ask.settings_person_only"],
      unreadable_shell_line: `${n} could not work out everything this command writes, so it cannot rule out a change to its own Claude Code settings files. The command needs approval in this session.`,
      settings_file_named: Ei["ask.settings_person_only"],
      served_mcp: `${n} asks before one of its own MCP tools runs for a cloud session.`,
      served_mcp_path: `${n} asks before one of its own MCP tools runs with a path it cannot vouch for from here (a relative path, a pattern, a variable, an encoded or quoted spelling, or a directory above its Claude credentials) \u2014 check it does not reach this machine's Claude credentials before approving.`,
      served_mcp_web_address: `This call gives one of ${n}'s own MCP tools a web address, so it is checked before it runs.`,
      served_mcp_relative_path: `This call gives one of ${n}'s own MCP tools a name with a slash in it, so it is checked before it runs.`
    },
    s = {
      destructive: bs,
      classifier: An,
      unresolved_shell_write: eo,
      unreadable_shell_line: eo,
      settings_file_named: Ps,
      served_mcp: Ae,
      served_mcp_path: Ae,
      served_mcp_web_address: An,
      served_mcp_relative_path: An
    };
  return {
    behavior: "ask",
    message: r[o],
    updatedInput: e.updatedInput,
    decisionReason: { type: "other", reason: s[o] }
  };
}
async function Fs(e, n, o, r, s) {
  if (e.behavior !== "ask") return e;
  let d = "updatedInput" in e && e.updatedInput !== void 0 ? e.updatedInput : o,
    u = _o(s.tool, n.forwardedInput),
    p = !Le(d, u),
    h = r.remoteCall?.hookRewrites,
    _ = !p
      ? "none"
      : h !== void 0 &&
          h.every((I) => I.byOwnHook && mn(I.handed) && Le(I.handed, u)) &&
          h.some((I) => Le(I.proposed, d))
        ? "own_hooks_alone"
        : "unvouched";
  if (p)
    t(
      `[remote-tools call=${s.callId}] ask input rewritten by a hook here; prior answer${_ === "unvouched" ? " and classifier" : ""} set aside tool=${s.tool.name}`
    );
  if (n.stance.onAsk === "allow")
    return { behavior: "allow", updatedInput: d, decisionReason: e.decisionReason };
  if (n.stopSignal.aborted) return ke;
  if (e.behavior === "ask" && _Xe(e))
    return qOe(s.tool.name, "a cloud session", { hostWorded: e.hostDisplay !== void 0 });
  let {
    classifierEligible: S,
    vetoed: C,
    ownCheck: H,
    askClass: W
  } = await Bs({
    mayAnswer: () => Hs(e, r, s, _, n.sessionMode, n.stance.unattended),
    checkAhead: n.ownCheckAhead,
    tool: s.tool,
    input: d,
    permissionContext: ae(r),
    serviceWrittenSessionMode: n.serviceWrittenSessionMode,
    stopSignal: n.stopSignal,
    callId: r.remoteCall?.origin.callId ?? s.callId,
    legDeadlineAt: n.legDeadlineAt
  });
  if (n.stopSignal.aborted) return ke;
  let V = new Promise((I, X) => {
      try {
        let J = s.forcedByHook || r.hookAskFloor === !0,
          K =
            !s.raisedToAsk &&
            !C &&
            !s.unresolvedShellWrite &&
            !Ao(e, s.tool) &&
            !p &&
            !s.networkPath &&
            Us(e, s.tool, J, d),
          j = !p && !s.raisedWhateverAllows && Vs(e),
          z =
            !S &&
            !s.raisedToAsk &&
            !p &&
            ko(e, s.tool, J, d) &&
            So(
              e,
              s.tool,
              J,
              ae(r),
              s.unresolvedShellWrite,
              s.networkPath,
              s.serverAskUnderPlanFloor
            ).may
              ? Ns(
                  po({ stance: n.stance, sessionMode: n.sessionMode, evaluatedMode: ae(r).mode }),
                  n.stance.unattended === "own_record" && chr() ? IPt() : "none"
                )
              : void 0,
          M =
            e.decisionReason?.type === "hook"
              ? `PreToolUse hook on ${n.targetName}: ${e.message}`
              : s.unresolvedShellWrite &&
                  e.decisionReason?.type === "other" &&
                  e.decisionReason.bashMissKind === "no-rule-match" &&
                  e.message === e.decisionReason.reason
                ? Ei["ask.settings_person_only"]
                : e.message,
          Z =
            !S && e.decisionReason?.type !== "sandboxOverride" && rD(s.tool) && fzn(s.tool, d)
              ? `${Ei["ask.outside_sandbox"]} `
              : "",
          le =
            s.unresolvedShellWrite &&
            e.decisionReason?.type !== "hook" &&
            M !== Ei["ask.settings_person_only"]
              ? `${Ei["ask.settings_person_only"]} `
              : "",
          ue = C && H !== void 0 && e.decisionReason?.type !== "hook" ? `${Dt(H)} ` : "";
        n.onAsk({
          message: Z + le + ue + (z === void 0 ? M : Lt(M, z)),
          input: d,
          decisionReason: e.decisionReason?.type,
          heldHook: e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === !0,
          raisedToAsk: s.raisedToAsk,
          classifierEligible: S,
          askClass: W,
          mcpPathWhy: s.mcpPathWhy,
          priorAnswerOk: K,
          standingRowOffered: j,
          suggestions: j ? js(e) : [],
          answer: I
        });
      } catch (J) {
        X(J);
      }
    }),
    v = await zs(
      V.catch(() => {
        return;
      }),
      n.stopSignal
    );
  if (v === void 0 || n.stopSignal.aborted) return ke;
  return v;
}
async function Bs(e) {
  let n = e.mayAnswer(),
    o = n.may ? e.checkAhead?.() : void 0,
    r = n.may
      ? await (o !== void 0 && Le(o.input, e.input)
          ? o.check
          : hn({
              tool: e.tool,
              input: e.input,
              permissionContext: e.permissionContext,
              serviceWrittenSessionMode: e.serviceWrittenSessionMode,
              stopSignal: e.stopSignal,
              callId: e.callId,
              capMs: Me(e.legDeadlineAt),
              ...(Sn() && { again: { legDeadlineAt: e.legDeadlineAt, besideHold: !1 } })
            }))
      : void 0,
    s = n.may && r?.verdict !== "allow",
    d = e.stopSignal.aborted,
    u = n.may && !d ? e.mayAnswer() : fn;
  return {
    classifierEligible: n.may && u.may && !s && !d,
    vetoed: s,
    ownCheck: r,
    askClass: Tt({ first: n, vetoed: s, ownCheck: r?.verdict, afterCheck: u, tool: e.tool })
  };
}
function ao(e, n, o, r) {
  if (o.behavior !== "allow" || e.onAllowLanded === void 0 || e.stopSignal.aborted) return;
  try {
    return e.onAllowLanded(n, o.updatedInput ?? r)?.catch((s) => We(s, e.stopSignal));
  } catch (s) {
    We(s, e.stopSignal);
    return;
  }
}
function Hs(e, n, o, r, s, d) {
  if (r !== "none" && !(r === "own_hooks_alone" && Mn()))
    return ne(r === "own_hooks_alone" ? "rewrite_own_hooks" : "rewrite_unvouched");
  if (!Ie(s)) return ne("not_auto");
  let u = s === "plan" ? go(d) : void 0;
  if (u !== void 0) return ne(u === "plan_setting" ? "plan_unbacked" : mOn(d));
  return yo(
    e,
    o.tool,
    o.forcedByHook || n.hookAskFloor === !0,
    ae(n),
    o.unresolvedShellWrite,
    o.networkPath,
    o.serverAskUnderPlanFloor,
    d,
    o.fastPathEdit
  );
}
function yo(e, n, o, r, s, d, u, p, h) {
  if (e.behavior !== "ask" || o || s) return ne(gn(e, o));
  if (!hOn(p)) return ne(mOn(p));
  if (p === "own_record" && d8e() && !rD(n) && !R0t(n) && !(h && In())) return ne("consent");
  return So(e, n, o, r, s, d, u);
}
function So(e, n, o, r, s, d, u) {
  if (e.behavior !== "ask" || o || s) return ne(gn(e, o));
  if (n.requiresUserInteraction?.() === !0) return ne("requires_user_interaction");
  if (n.mcpInfo?.effectiveMaxPermission === "ask") return ne("org_ceiling");
  if (Ao(e, n)) return ne("mcp_path");
  if (e.decisionReason?.type === "hook") return ne(pn(e));
  if (u || (e.decisionReason?.type === "mode" && e.decisionReason.mode === "plan"))
    return ne("plan_floor");
  if (Mot(e.decisionReason, r)) return ne("sandbox_override_read_block");
  let p = ED(e),
    h = Rmt(e.decisionReason) || e.matchedAskRule?.source === "mcpServerPolicy";
  if (p && !h) return ne("ask_rule");
  let _ = Dl(
    e.decisionReason,
    (S) =>
      (!S.classifierApprovable &&
        !(S.circuitBreaker === "backgroundOperator" && (S.also ?? []).length === 0 && Yt())) ||
      (t2(S) && Ne())
  );
  if (_ !== void 0) return ne(Pt(_));
  return d ? ne("network_path") : fn;
}
function Us(e, n, o, r = {}) {
  return ko(e, n, o, r) && Dl(e.decisionReason, () => !0) === void 0;
}
function ko(e, n, o, r) {
  if (e.behavior !== "ask" || o) return !1;
  if (r.dangerouslyDisableSandbox === !0) return !1;
  if (n.requiresUserInteraction?.() === !0) return !1;
  if (e.decisionReason?.type === "hook") return !1;
  return e.decisionReason?.type !== "sandboxOverride";
}
function Ao(e, n) {
  return (phr && co(n)) || (e.decisionReason?.type === "other" && e.decisionReason.reason === Ae);
}
function Vs(e) {
  return (
    Y1() &&
    e.behavior === "ask" &&
    e.suggestions !== void 0 &&
    e.suggestions.some((n) => n.type === "addRules") &&
    e.suppressAlwaysAllowRule !== !0 &&
    Dl(e.decisionReason, (n) => !n.classifierApprovable) === void 0
  );
}
function js(e) {
  if (e.behavior !== "ask" || e.suggestions === void 0) return [];
  return e.suggestions
    .flatMap((n) => (n.type === "addRules" ? n.rules.map((o) => dn(o)) : []))
    .slice(0, ws);
}
function zs(e, n) {
  return new Promise((o) => {
    if (n.aborted) {
      o(void 0);
      return;
    }
    let r = () => o(void 0);
    (n.addEventListener("abort", r, { once: !0 }),
      e.then(o).finally(() => n.removeEventListener("abort", r)));
  });
}
function Co(e) {
  if (e?.type === "rule") return e.rule.source;
  if (e?.type === "subcommandResults")
    for (let [, n] of e.reasons) {
      let o = n.behavior === "deny" ? Co(n.decisionReason) : void 0;
      if (o !== void 0) return o;
    }
  return;
}
function lo(e) {
  let n = e.refusalAsAllowLands?.();
  return n === void 0
    ? void 0
    : {
        behavior: "deny",
        message: n,
        decisionReason: { type: "other", reason: mo },
        decideLocation: "ask-path"
      };
}
function Cn(e, n) {
  let o =
    e.behavior === "deny" && e.decisionReason.type === "other" ? e.decisionReason.reason : void 0;
  if (o === fo || o === mo) return "stopped";
  if (n.behavior !== "ask") return e.behavior === "allow" ? "allowed" : "denied_by_rule";
  if (e.behavior === "allow") return "approved_by_session";
  if (o !== void 0 && FWn(o)) return "ask_refused_no_surface";
  return o === Xe ? "stopped" : "denied_by_session";
}
var Gs = "nested remote execution is not supported: a served call cannot name another machine.",
  mhr = "_simulatedSedEdit",
  Ks = new Map();
function h9t() {
  return Ks;
}
function ghr(e, n) {
  if (n.size === 0) return e;
  let o = new Set(n.values());
  return Object.fromEntries(
    Object.entries(e)
      .filter(([r]) => !o.has(r))
      .map(([r, s]) => [n.get(r) ?? r, s])
  );
}
function Mps(e, n) {
  if (n.size === 0) return e;
  let o = new Map([...n].map(([r, s]) => [s, r]));
  return jO(e, (r, s) => o.get(s) ?? s);
}
function Dps(e, n) {
  if (e === void 0) return;
  let o = e[Lr] === n ? xo(e, [Lr]) : e;
  return Object.keys(o).length === 0 ? void 0 : o;
}
function y9t(e, n, o) {
  if (Lr in e) return Gs;
  let r = n.find((s) => Boolean(e[s]));
  return r === void 0 ? void 0 : _On({ field: r, targetName: o });
}
function RPt(e, n) {
  return xo(e, [mhr, ...n]);
}
function Hps(e, n) {
  return Object.fromEntries(
    Object.keys(n)
      .filter((o) => Object.hasOwn(e, o))
      .map((o) => [o, n[o]])
  );
}
export {
  jPe,
  cOn,
  Jro,
  uOn,
  Sps,
  mN,
  WX,
  O6e,
  p9t,
  m9t,
  wps,
  vps,
  Eps,
  Qro,
  fOn,
  kps,
  Tps,
  Wwe,
  Aps,
  Zro,
  Cps,
  chr,
  uhr,
  Gwe,
  Rps,
  APt,
  fhr,
  pOn,
  g9t,
  mOn,
  xps,
  gOn,
  phr,
  eoo,
  Pps,
  hOn,
  CPt,
  yOn,
  Ips,
  Ops,
  mhr,
  h9t,
  ghr,
  Mps,
  Dps,
  y9t,
  RPt,
  Hps
};

//# sourceMappingURL=chunk-pn6xnm1s.js.map
