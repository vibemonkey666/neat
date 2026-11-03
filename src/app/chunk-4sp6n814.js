// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { grr, S4r, k4r, KVe, T4r, brr, k, BV } from "./chunk-ajtyjx88.js";
import { L, Bi, J } from "./chunk-wrtp8qz8.js";
import { R, E, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { i, _C } from "./chunk-cj37hmns.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { I, yi, re } from "./chunk-a16y5hcz.js";
import { O } from "./chunk-19xvg81r.js";
import { f } from "./chunk-brszmkb3.js";
import { We } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { qm, CRe, RRe, JE, Ly, kd, hrt } from "./chunk-bh50mq9d.js";
import { hR } from "./chunk-tv3shk24.js";
import {
  bl,
  lkt,
  cM,
  uNe,
  B5,
  mSn,
  qsi,
  por,
  ukt,
  u_,
  $$,
  kRe,
  Kue,
  TRe
} from "./chunk-jwqtbev0.js";
import { sor, ior, Qoe, gR, Lsi, E6o, Nsi, drt } from "./chunk-9zd34fgb.js";
import { Ma } from "./chunk-znr3gw2p.js";
import { PZe } from "./chunk-t4an1ezt.js";
import { yAe } from "./chunk-2rr85c4a.js";
import { x8 } from "./chunk-ywy052ac.js";
import { mkt, Zsi, bVt, ySn, eii, Xa } from "./chunk-4b5gpbbs.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { v, u } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
function N(e, n, r, s, a) {
  let m = Math.max(0, r - n) / 1000;
  return Math.min(s, e + m * a);
}
function M(e) {
  return e >= 1;
}
function U(e, n, r, s, a = () => !0) {
  let m = e.get(n);
  if (m !== void 0) return (e.delete(n), e.set(n, m), m);
  while (e.size >= Math.max(1, r)) {
    let l;
    for (let [d, o] of e)
      if (a(o)) {
        l = d;
        break;
      }
    if (((l ??= e.keys().next().value), l === void 0)) break;
    e.delete(l);
  }
  let g = s();
  return (e.set(n, g), g);
}
var p8n = {
  bucketCapacity: 30,
  refillPerSecond: 0.5,
  dedupWindowMs: 30000,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256
};
function Re(e, n) {
  if (!e || n.size === 0) return 0;
  let r = 0;
  for (let s of e) if (n.has(s)) r++;
  return r;
}
function uFo(e = {}, n) {
  let r = { ...p8n, now: () => Date.now(), ...e },
    s = () => (n ? { ...r, ...n() } : r),
    a = new Map();
  function m(d, o) {
    return U(a, d, o.maxTrackedSenders, () => ({
      tokens: o.bucketCapacity,
      lastRefill: o.now(),
      lastBody: void 0,
      lastBodyAt: 0
    }));
  }
  function g(d, o) {
    let c = s();
    if (d !== void 0 && d.length > c.maxChainLength) return { admitted: !1, reason: "hop-runaway" };
    if (Re(d, o) >= c.maxSelfHops) return { admitted: !1, reason: "hop-loop" };
    return;
  }
  function l(d) {
    let o = s(),
      c = o.now(),
      x = g(d.hopChain, d.ownTokens);
    if (x) return x;
    let w = m(d.senderKey, o);
    if (w.lastBody !== void 0 && w.lastBody === d.body && c - w.lastBodyAt < o.dedupWindowMs)
      return { admitted: !1, reason: "duplicate" };
    if (
      ((w.tokens = N(w.tokens, w.lastRefill, c, o.bucketCapacity, o.refillPerSecond)),
      (w.lastRefill = c),
      !M(w.tokens))
    )
      return { admitted: !1, reason: "rate-limited" };
    return ((w.tokens -= 1), (w.lastBody = d.body), (w.lastBodyAt = c), { admitted: !0 });
  }
  return { admit: l, checkHopChain: g, trackedSenderCount: () => a.size };
}
var ke = { "rate-limited": !0, duplicate: !0, "hop-loop": !0, "hop-runaway": !0, "queue-full": !0 };
function Ie(e) {
  return typeof e === "string" && Object.hasOwn(ke, e);
}
function I4s(e) {
  return Ie(e) ? e : void 0;
}
var fFo = 256,
  B = 60000,
  oe = 256,
  Ee = 20;
function pFo(e) {
  Ma().ingress.ownUdsHopToken = e === void 0 ? void 0 : PZe(e);
}
function ifn(e) {
  Ma().ingress.ownBridgePeerAddressResolver = e;
}
function mFo() {
  let { ownUdsHopToken: e, ownBridgePeerAddressResolver: n } = Ma().ingress,
    r = new Set();
  if (e) r.add(e);
  let s = n?.();
  if (s) r.add(PZe(s));
  let a = yAe();
  if (a) r.add(PZe(uNe(a)));
  return r;
}
var xe = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop": "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued"
};
function W(e) {
  return {
    from: qsi(e.from) ? e.from : "(unrenderable sender address)",
    name: e.name ? lkt(e.name) : ""
  };
}
function O4s(e) {
  let { from: n } = W(e),
    { name: r } = W(e),
    s = r ? `@${r} (${n})` : n,
    a = e.suppressed > 0 ? ` (+${e.suppressed} similar ${I(e.suppressed, "drop")} suppressed)` : "";
  return `Dropped a peer message from ${s}: ${xe[e.reason]}.${a}`;
}
var Ae = 500,
  ve = 5000,
  Oe = 40;
function K(e, n) {
  if (e.timer !== void 0) (clearTimeout(e.timer), (e.timer = void 0));
  let { pending: r, pendingIds: s, pendingSend: a } = e;
  if (((e.pending = 0), (e.pendingIds = []), (e.pendingSend = void 0), r > 0 && a && n()))
    return a(s);
}
function gFo({ trailMs: e = ve } = {}) {
  let n = new Map(),
    r = 0,
    s = 0;
  function a(S = Date.now()) {
    if (S - r >= B) ((r = S), (s = 0));
    if (s >= Oe) return !1;
    return (s++, !0);
  }
  function m(S, P, b, h = Date.now()) {
    let y = n.get(S);
    if (y === void 0)
      y = {
        lastImmediateAt: Number.NEGATIVE_INFINITY,
        pendingIds: [],
        pending: 0,
        timer: void 0,
        pendingSend: void 0
      };
    if ((n.delete(S), n.set(S, y), n.size > oe)) {
      let A = n.keys().next().value;
      if (A !== void 0 && A !== S) {
        let D = n.get(A);
        if ((n.delete(A), D !== void 0)) K(D, () => a(h));
      }
    }
    if (h - y.lastImmediateAt >= B && y.pending === 0) {
      if (((y.lastImmediateAt = h), a(h))) b([]);
      return;
    }
    if ((y.pending++, P !== void 0 && y.pendingIds.length < fFo)) y.pendingIds.push(P);
    if (((y.pendingSend = b), y.timer === void 0))
      ((y.timer = setTimeout(K, e, y, a)), y.timer.unref?.());
  }
  let g = new Map(),
    l = 0,
    d = 0,
    o = 0;
  function c(S, P = Date.now()) {
    let b = W(S);
    t(`[peer-guard] drop ${S.reason} from ${b.from}${b.name ? ` (@${b.name})` : ""}`);
    let h = `${S.from}\x00${S.reason}`,
      y = g.get(h);
    if (y && P - y.lastReportAt < B) {
      y.suppressed++;
      return;
    }
    if (P - l >= B) ((l = P), (d = 0));
    if (d >= Ee) {
      o++;
      return;
    }
    d++;
    let A = (y?.suppressed ?? 0) + o;
    if (((o = 0), g.delete(h), g.set(h, { lastReportAt: P, suppressed: 0 }), g.size > oe)) {
      let T = g.keys().next().value;
      if (T !== void 0) g.delete(T);
    }
    let D = { ...S, suppressed: A };
    (t(
      `[peer-guard] Dropped peer message from ${b.from}${b.name ? ` (@${b.name})` : ""}: ${S.reason}${A > 0 ? ` (+${A} suppressed)` : ""}`,
      { level: "warn" }
    ),
      f("peer_loop_guard", S.reason),
      Ma().ingress.messageDropped.emit(D));
  }
  async function x(S = Ae) {
    let P = [];
    for (let b of n.values())
      if (b.pending > 0) P.push(K(b, a));
      else if (b.timer !== void 0) (clearTimeout(b.timer), (b.timer = void 0));
    if (P.length === 0) return;
    await Promise.race([Promise.allSettled(P), X(S, void 0, { unref: !0 })]);
  }
  function w() {
    for (let S of n.values()) if (S.timer !== void 0) clearTimeout(S.timer);
    n.clear();
  }
  return { report: c, noteDropForReceipt: m, flushPendingReceipts: x, dispose: w };
}
var De = 50,
  V = { ...p8n, maxQueuedPeerMessages: De },
  C = V,
  Le = p(() =>
    u({
      bucketCapacity: v().min(5).max(500).catch(C.bucketCapacity),
      refillPerSecond: v().min(0.05).max(50).catch(C.refillPerSecond),
      dedupWindowMs: v().int().min(0).max(600000).catch(C.dedupWindowMs),
      maxSelfHops: v().int().min(3).max(mSn).catch(C.maxSelfHops),
      maxChainLength: v()
        .int()
        .min(8)
        .max(mSn - 1)
        .catch(C.maxChainLength),
      maxTrackedSenders: v().int().min(16).max(1e5).catch(C.maxTrackedSenders),
      maxQueuedPeerMessages: v().int().min(10).max(5000).catch(C.maxQueuedPeerMessages)
    })
  ),
  Te = 300000;
function afn() {
  let e = BV("tengu_harbor_kite_limits", V, Te),
    n = Le().safeParse(e);
  if (!n.success)
    return (
      t("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", {
        level: "warn"
      }),
      V
    );
  return n.data;
}
var Ce = /[0-9a-f]{32,}/gi;
function ie(e) {
  return e.replace(Ce, (n) => `<hex:${cn(n)}>`);
}
function ey(e, n = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return yi(ie(e), n);
}
function PY(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return yi(ie(e), 200);
}
function f8n(e) {
  if (O() === "windows") return null;
  let n = se(e);
  if (n < 0) return null;
  try {
    return Bun.ant.getPeerUid(n);
  } catch (r) {
    return (
      t(`[daemon] peer uid lookup failed: ${r instanceof Error ? r.message : String(r)}`, {
        level: "warn"
      }),
      null
    );
  }
}
function P4s(e, n = f8n) {
  let r = process.getuid?.();
  if (r == null) return null;
  let s = n(e);
  if (s == null) return null;
  if (s === r) return null;
  let a = `permission denied: connecting uid ${s} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return (t(`[daemon] rejecting control connection: ${a}`, { level: "error" }), a);
}
function U_t(e) {
  if (O() === "windows") return;
  let n = se(e);
  try {
    let r = n < 0 ? null : Bun.ant.getPeerPid(n);
    if (r !== null && r > 0) return r;
    t(`[peer-cred] peer pid unavailable (fd=${n}, got=${r})`, { level: "warn" });
    return;
  } catch (r) {
    t(`[peer-cred] peer pid lookup failed: ${r instanceof Error ? r.message : String(r)}`, {
      level: "warn"
    });
    return;
  }
}
function se(e) {
  let n = e._handle;
  return typeof n?.fd === "number" ? n.fd : -1;
}
import { lstat as Ne, readdir as Me, stat as Ue, unlink as Se } from "fs/promises";
import { connect as be } from "net";
import { basename as Be, dirname as ge, join as He } from "path";
var sfn = 1048576;
function de(e, n = Date.now) {
  let r = new Map();
  function s(l, d) {
    let { bucketCapacity: o, refillPerSecond: c, maxTrackedSenders: x } = e(),
      w = !1,
      S = U(
        r,
        l,
        x,
        () => ((w = !0), { tokens: o, updatedAt: d, sentInBurst: 0, burstStartedAt: d }),
        (P) => N(P.tokens, P.updatedAt, d, o, c) >= o
      );
    if (!w) {
      ((S.tokens = N(S.tokens, S.updatedAt, d, o, c)), (S.updatedAt = d));
      let P = (o / Math.max(c, 0.000000001)) * 1000;
      if (S.tokens >= o || d - S.burstStartedAt > P) ((S.sentInBurst = 0), (S.burstStartedAt = d));
    }
    return S;
  }
  function a(l) {
    let d = s(l, n());
    if (!M(d.tokens)) return { ok: !1, sentInBurst: d.sentInBurst };
    ((d.tokens -= 1), (d.sentInBurst += 1));
    let o = d,
      c = !1;
    return {
      ok: !0,
      refund: () => {
        if (c) return;
        ((c = !0),
          (o.tokens = Math.min(e().bucketCapacity, o.tokens + 1)),
          (o.sentInBurst = Math.max(0, o.sentInBurst - 1)));
      }
    };
  }
  function m(l) {
    let d = s(l, n());
    ((d.tokens = Math.min(e().bucketCapacity, d.tokens + 1)),
      (d.sentInBurst = Math.max(0, d.sentInBurst - 1)));
  }
  function g(l) {
    let d = s(l, n());
    ((d.tokens = Math.max(0, d.tokens - 1)), (d.sentInBurst += 1));
  }
  return { reserve: a, credit: m, debit: g };
}
var ae = "no_live_inbox",
  ue = "ENOINBOX",
  ce = "message_too_large";
function pe(e, n) {
  return new R(
    `Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`,
    "cross-session message exceeds the line cap",
    ce
  );
}
function B_t(e) {
  return e instanceof R && e.errorClass === ce;
}
var fe = "sender_paced";
function le(e) {
  return new R(
    `Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`,
    "cross-session sends to one target outpaced its inbox rate limit",
    fe
  );
}
function j_t(e) {
  return e instanceof R && e.errorClass === fe;
}
function uBr(e) {
  let n = E(e);
  return n === "ENOENT" || n === "ECONNREFUSED" || (e instanceof R && e.errorClass === ae);
}
class H extends R {
  kind;
  constructor(e, n) {
    super(n, "no live inbox registered for the target pipe", ae);
    ((this.name = "NoLiveInboxError"), (this.kind = e));
  }
}
function fBr(e) {
  return e instanceof H && e.kind === "unusable";
}
function aAe(e) {
  if (fBr(e)) return "busy";
  if (uBr(e)) return "gone";
  let n = E(e);
  return n === "EBUSY" || n === "EAGAIN" ? "busy" : "other";
}
function W_t(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
var hFo =
    " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.",
  Fe =
    " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function m8n(e) {
  return fBr(e) ? Fe : hFo;
}
class GQ extends Error {
  refusal;
  constructor(e, n) {
    super(n);
    ((this.name = "UdsSendRefusedError"), (this.refusal = e));
  }
}
function C8(e) {
  if (e instanceof GQ || uBr(e) || j_t(e) || B_t(e)) return !0;
  let n = E(e);
  return n === "EBUSY" || n === "EAGAIN" || n === "EACCES";
}
function $e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let { name: n, until: r, sessionId: s } = e;
  return typeof n === "string" && bVt(r) && (s === void 0 || typeof s === "string");
}
function Ge(e) {
  if (!Array.isArray(e)) return [];
  return e
    .filter($e)
    .slice(0, S4r)
    .map(({ name: n, until: r, sessionId: s }) => ({
      name: re(n, cM),
      until: r,
      ...(s !== void 0 && { sessionId: re(s, cM) })
    }));
}
function je() {
  return (Ma().outbound.pacer ??= de(afn));
}
var Ke = { ok: !0, refund: () => {} };
function Xe() {
  if (i.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return !1;
  return !k("tengu_harbor_kite_pacing_off", !1);
}
function yFo(e) {
  ye(e, (n, r) => n.credit(r));
}
function pBr(e) {
  ye(e, (n, r) => n.debit(r));
}
function ye(e, n) {
  let r = Ma().outbound.pacer;
  if (!r) return;
  let { scheme: s, target: a } = u_(e);
  if (s !== "uds") return;
  n(r, gR(a) ?? a);
}
async function lfn(
  e,
  n,
  r,
  s,
  a,
  m,
  g,
  {
    trackReceipts: l = !0,
    expectPeerPid: d,
    expectPeerProcStart: o,
    fromPlugin: c,
    recipientName: x
  } = {}
) {
  let w = zQ(),
    S = w ? B5(w) : void 0,
    P = k("tengu_tidy_fern", !0) ? k4r() : void 0,
    b = ukt(S, s, n, P, por(m, S ? PZe(S) : void 0), g),
    h = x8(),
    y = {
      ...h,
      type: "user",
      message: { role: "user", content: b },
      priority: "next",
      from: S,
      ...(c !== void 0 && { from_plugin: c }),
      ...((a?.length ?? 0) > 0 && { file_attachments: a })
    },
    A = we(y),
    T = (S !== void 0 || O() !== "windows") && Xe() ? je().reserve(gR(e) ?? e) : Ke;
  if (!T.ok)
    throw (
      t(
        `[uds-client] paced: not sending to ${ey(e)} \u2014 ${T.sentInBurst} sent this burst; its inbox rate limit would drop more`
      ),
      le(T.sentInBurst)
    );
  if ((t(`[uds-client] Sending ${n.length} chars to ${ey(e)}`), l)) ze(h.msg_id, B5(e), x);
  try {
    await _e(e, y, r, {
      noFollowSymlink: !0,
      preflightedJson: A,
      ...(d !== void 0 && { expectPeerPid: d }),
      ...(o !== void 0 && { expectPeerProcStart: o })
    });
  } catch (ne) {
    if (C8(ne)) {
      if ((T.refund(), l)) Je(h.msg_id);
    }
    throw ne;
  }
  return { msgId: h.msg_id };
}
var Pe = 200;
function ze(e, n, r) {
  let s = Ma().receipts.outstandingSends;
  if (s.length >= Pe) s.shift();
  s.push({ msgId: e, to: n, handle: lkt(r ?? "", 1 / 0) || void 0 });
}
function Je(e) {
  let n = Ma().receipts.outstandingSends,
    r = n.findIndex((s) => s.msgId === e);
  if (r !== -1) n.splice(r, 1);
}
function _Fo(e, n) {
  if (typeof e !== "string") return;
  let { outstandingSends: r, awaitingTerminal: s } = Ma().receipts,
    a = r.findIndex((g) => g.msgId === e);
  if (a !== -1) {
    let [g] = r.splice(a, 1);
    if (!g) return;
    if (n === "held") {
      if (s.length >= Pe) s.shift();
      s.push(g);
    }
    return { sent: g, wasHeld: !1 };
  }
  let m = s.findIndex((g) => g.msgId === e);
  if (m !== -1 && n !== "held") {
    let [g] = s.splice(m, 1);
    return g ? { sent: g, wasHeld: !0 } : void 0;
  }
  return;
}
function bFo(e) {
  let n = new Map();
  if (e.length === 0) return n;
  let r = new Set(e),
    { outstandingSends: s, awaitingTerminal: a } = Ma().receipts;
  for (let m of [s, a]) {
    let g = m === a;
    for (let l = 0; l < m.length;) {
      let d = m[l];
      if (r.delete(d.msgId)) {
        m.splice(l, 1);
        let o = n.get(d.to) ?? { sends: [], wereHeld: 0 };
        if ((o.sends.push(d), g)) o.wereHeld++;
        n.set(d.to, o);
      } else l++;
    }
  }
  return n;
}
function yye(e, n, r = {}) {
  return M1t(e, n, x8(), r).then(() => {});
}
async function M1t(
  e,
  n,
  r = x8(),
  { expectPeerPid: s, expectPeerProcStart: a, storageV5: m } = {}
) {
  return (
    t(`[uds-client] Sending control:${n.action} to ${ey(e)}`),
    await _e(e, { type: "control", ...n, ...r }, m, {
      noFollowSymlink: !0,
      ...(s !== void 0 && { expectPeerPid: s }),
      ...(a !== void 0 && { expectPeerProcStart: a })
    }),
    { msgId: r.msg_id }
  );
}
var Ve = 150;
async function dfn(e) {
  let n = gR(e);
  if (n === void 0) return;
  for (let r of await F()) {
    if (!r.sock || gR(r.sock) !== n) continue;
    if (await Y(r))
      return {
        pid: r.pid,
        features: r.peerFeatures,
        sessionId: r.sessionId,
        procStart: r.procStartFt ?? r.procStart
      };
  }
  return;
}
async function SFo(e) {
  let n = L(e),
    r = new Map();
  if (n.length === 0) return r;
  let s = Qoe(),
    m = (await Promise.all(n.map((l) => j(s, `${l}.json`)))).filter(
      (l) => l !== null && Boolean(l.sock)
    ),
    g = await Promise.all(m.map((l) => Y(l)));
  return (
    m.forEach((l, d) => {
      if (g[d] && l.sock) r.set(l.pid, l.sock);
    }),
    r
  );
}
async function mRi(e, n) {
  let r = await j(Qoe(), `${e}.json`, { rejectTornLiveRecord: !0 });
  return r?.jobId === n ? r.status : void 0;
}
async function Y(e) {
  let n = e.procStartFt ?? e.procStart;
  if (n === void 0 || qm(e.pid)) return !1;
  return (await Ly(e.pid, n)) === !0;
}
function we(e) {
  let n = _(e),
    r = Nsi + n.length + 1;
  if (r > sfn) throw pe(r, sfn);
  return n;
}
async function qe(e) {
  let n = gR(e);
  if (n === void 0) return !1;
  for (let r of await F()) {
    if (!r.sock || gR(r.sock) !== n) continue;
    if (qm(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await Y(r)) return !0;
      continue;
    }
    if (Xa(r.pid)) return !0;
  }
  return !1;
}
async function _e(
  e,
  n,
  r,
  { noFollowSymlink: s = !1, expectPeerPid: a, expectPeerProcStart: m, preflightedJson: g } = {}
) {
  let l = g ?? we(n);
  if (!$$(e))
    throw new GQ(
      "non-local",
      `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${e}`
    );
  let d = sor(),
    o = await Lsi(e, r, { requireLiveOwner: d }),
    c = o.kind === "token" ? o.token : void 0;
  if (d && o.kind !== "token") {
    if (!(o.kind === "no-key" && (await qe(e))))
      throw new H(
        o.kind,
        `No running session has registered an inbox at ${e} (${ue}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`
      );
    c = void 0;
  }
  let x = c !== void 0 ? E6o(c) : "";
  if (s && !(O() === "windows" && TRe(e) !== void 0)) {
    let S;
    try {
      S = (await Ne(e)).isSymbolicLink();
    } catch (P) {
      if (G(P)) throw P;
      throw (
        t(`[uds-client] reply target unvettable: ${E(P) ?? "lstat failed"}`),
        new GQ("unvettable", "Refusing to send: cannot vet reply target")
      );
    }
    if (S) throw new GQ("symlink", "Refusing to send: reply target is a symlink");
  }
  let w =
    x +
    l +
    `
`;
  return new Promise((S, P) => {
    let b = be({ path: e }),
      h = !1;
    (b.setTimeout(5000, () => {
      ((h = !0), b.destroy(), P(Error(`Timed out sending to ${e}`)));
    }),
      b.on("error", (y) => {
        ((h = !0), P(y));
      }),
      b.on("connect", () => {
        if (a !== void 0 && O() !== "windows") {
          let y = U_t(b);
          if (y === void 0) {
            ((h = !0),
              b.destroy(),
              P(
                new GQ(
                  "endpoint-unverifiable",
                  "Refusing to send: connected endpoint identity could not be read"
                )
              ));
            return;
          }
          if (y !== a) {
            ((h = !0),
              b.destroy(),
              t(
                `[uds-client] connected endpoint is pid ${y}, expected ${a} \u2014 refusing to write`
              ),
              P(
                new GQ(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is not the expected process"
                )
              ));
            return;
          }
          let A = process.getuid?.(),
            D = f8n(b);
          if (A !== void 0 && D === null) {
            ((h = !0),
              b.destroy(),
              P(
                new GQ(
                  "endpoint-unverifiable",
                  "Refusing to send: connected endpoint owner could not be read"
                )
              ));
            return;
          }
          if (A !== void 0 && D !== A) {
            ((h = !0),
              b.destroy(),
              t(
                `[uds-client] connected endpoint is owned by uid ${D}, not ours \u2014 refusing to write`
              ),
              P(
                new GQ(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is not owned by this user"
                )
              ));
            return;
          }
          if (m !== void 0 && CRe(y) !== m) {
            ((h = !0),
              b.destroy(),
              t(
                `[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`
              ),
              P(
                new GQ(
                  "wrong-endpoint",
                  "Refusing to send: connected endpoint is a different process with the expected pid"
                )
              ));
            return;
          }
        }
        if ((b.write(w), O() === "macos"))
          setTimeout(
            (y) => {
              if (!y.destroyed) y.end();
            },
            Ve,
            b
          );
        else b.end();
      }),
      b.on("close", () => {
        if (!h) t(`[uds-client] Sent to ${ey(e)}`);
        S();
      }));
  });
}
function Q(e) {
  return new Promise((n) => {
    if (!$$(e)) {
      n(!1);
      return;
    }
    let r = be({ path: e }),
      s = (a) => {
        (r.destroy(), n(a));
      };
    (r.on("connect", () => s(!0)),
      r.on("error", (a) => s(E(a) === "EBUSY")),
      r.setTimeout(250, () => s(!1)));
  });
}
class cfn extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError";
  }
}
async function F(e) {
  if (J()) return [];
  let n = Qoe(),
    r;
  try {
    r = await Me(n);
  } catch (a) {
    if (e?.rejectUnreadable && !G(a)) throw new cfn(E(a));
    return [];
  }
  return (
    await Promise.all(
      r
        .filter((a) => /^\d+\.json$/.test(a))
        .map((a) => j(n, a, { rejectTornLiveRecord: e?.rejectTornLiveRecord }))
    )
  ).filter((a) => a !== null);
}
async function j(e, n, r) {
  let s = !1,
    a,
    m = He(e, n);
  try {
    let g = Zsi(n);
    if (g === null) return null;
    let { pid: l } = g;
    if (!g.canonical) return (Se(m).catch(() => {}), null);
    a = l;
    let d = await bl(m, mkt);
    if (d === null) return null;
    s = !0;
    let o = te(d),
      c = eii(o);
    return {
      sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: c.cwd,
      startedAt: c.startedAt,
      ...(ySn(o.nameSince) !== void 0 && { nameSince: ySn(o.nameSince) }),
      procStart: c.procStart,
      ...(c.procStartFt !== void 0 && { procStartFt: c.procStartFt }),
      name: typeof o.name === "string" ? o.name : void 0,
      nameSource:
        o.nameSource === "user" ||
        o.nameSource === "peer" ||
        o.nameSource === "derived" ||
        o.nameSource === "collision" ||
        o.nameSource === "auto" ||
        o.nameSource === "hook"
          ? o.nameSource
          : void 0,
      formerNames: Ge(o.formerNames),
      kind: c.kind,
      sessionId: c.sessionId,
      jobId: typeof o.jobId === "string" ? o.jobId : void 0,
      parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0,
      spare: o.spare === !0,
      bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0,
      logPath: typeof o.logPath === "string" ? o.logPath : void 0,
      status: c.status,
      waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0,
      ...{},
      updatedAt: ySn(o.updatedAt),
      statusUpdatedAt: ySn(o.statusUpdatedAt),
      entrypoint: c.entrypoint,
      ...(grr(o.hostSessionId) !== void 0 && { hostSessionId: grr(o.hostSessionId) }),
      ...(c.pidDomain !== void 0 && { pidDomain: c.pidDomain }),
      agent: typeof o.agent === "string" ? o.agent : void 0,
      state: typeof o.state === "string" ? o.state : void 0,
      detail: typeof o.detail === "string" ? o.detail : void 0,
      tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : void 0,
      needs: typeof o.needs === "string" ? o.needs : void 0,
      peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : void 0,
      ...(Array.isArray(o.peerFeatures) && { peerFeatures: Ye(o.peerFeatures) }),
      ...{},
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: l,
      file: m
    };
  } catch {
    if (r?.rejectTornLiveRecord && s && a !== void 0 && Xa(a)) {
      if (!r.isReread) return (await X(ior), j(e, n, { ...r, isReread: !0 }));
      let [g, l] = await Promise.all([
        Ue(m).then(
          (d) => d.mtimeMs,
          () => {
            return;
          }
        ),
        hrt(a)
      ]);
      if (g !== void 0 && l !== null && l > g + 2000) return null;
      if (l === null && !Xa(a)) return null;
      throw new cfn("EBADRECORD");
    }
    return null;
  }
}
function he(e, n) {
  return e.pidDomain !== void 0 && e.pidDomain !== n;
}
async function gRi(e, n) {
  let r = await hR();
  return e.some((s) => s.sessionId === n && he(s, r));
}
async function ufn() {
  return (await F({ rejectUnreadable: !0 })).map(({ file: e, ...n }) => n);
}
function q(e, n, r, s) {
  if (z() && s !== void 0) {
    s.delete(We.session(Be(e)))
      .then((a) => (a.ok && a.value.existed ? T4r(ge(e), n, r, s) : void 0))
      .catch(() => {});
    return;
  }
  Se(e)
    .then(() => T4r(ge(e), n, r, s))
    .catch(() => {});
}
async function _re(e, n) {
  let r = await F({
      rejectUnreadable: n?.rejectUnreadable === !0,
      rejectTornLiveRecord: n?.rejectUnreadable === !0
    }),
    s = n?.rejectUnreadable === !0 ? await hR() : void 0,
    a = (c) => s !== void 0 && he(c, s),
    m = r.map((c) => a(c) || Xa(c.pid)),
    g = await Promise.all(
      r.map((c, x) => m[x] && (a(c) || JE(c.pid, c.procStartFt ?? c.procStart)))
    ),
    l = await KVe(),
    d = l ? await hR() : "",
    o = [];
  for (let c = 0; c < r.length; c++) {
    let { file: x, ...w } = r[c];
    if (g[c]) o.push(w);
    else if (l && brr(w, d) && qm(w.pid)) q(x, w.pid, d, e);
  }
  return o;
}
function zQ() {
  return _C.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function wFo() {
  let e = zQ();
  if (e === void 0) return !1;
  let n = await F(),
    r = await hR(),
    s = n.filter(
      (m) => m.sock && m.pid !== process.pid && !ee(m) && drt({ sock: m.sock }) && Kue(m.sock, e)
    );
  return (
    await Promise.all(s.map(async (m) => (await Z(m, r)) === "present" && (await Q(m.sock))))
  ).some(Boolean);
}
async function Z(e, n) {
  if (e.pidDomain !== n) return "present";
  if (qm(e.pid)) return "gone";
  let r = e.procStartFt ?? e.procStart;
  if (r === void 0) return "present";
  let s = await kd(e.pid);
  if (s === void 0 || RRe(r, s)) return "present";
  return (await Ly(e.pid, r)) === !1 ? "recycled" : "present";
}
async function vFo(e) {
  let n = zQ(),
    r = (await F({ rejectUnreadable: !0 })).filter(
      (d) => d.sock && !(n && kRe(d.sock, n)) && !ee(d)
    ),
    [s, a] = await Promise.all([KVe(), hR()]),
    [m, g] = await Promise.all([
      Promise.all(r.map((d) => Q(d.sock))),
      Promise.all(r.map((d) => Z(d, a)))
    ]),
    l = [];
  for (let d = 0; d < r.length; d++) {
    let { file: o, ...c } = r[d];
    if (g[d] === "gone") {
      if (s && qm(c.pid)) q(o, c.pid, a, e);
    } else if (g[d] === "recycled") continue;
    else if (m[d]) l.push(c);
    else if (s && brr(c, a) && qm(c.pid)) q(o, c.pid, a, e);
  }
  return l;
}
async function ffn(e) {
  let n = zQ(),
    r = await F(),
    s = (o) => Boolean(o.sock) && !(n && kRe(o.sock, n)),
    a = new Set(
      r.filter((o) => o.sessionId === e && o.parkedJobId !== void 0).map((o) => o.parkedJobId)
    ),
    m = r.filter((o) => s(o) && !ee(o)),
    g = m.filter((o) => o.sessionId === e),
    l = m.filter((o) => o.sessionId !== e && o.jobId !== void 0 && a.has(o.jobId)),
    d = await hR();
  for (let o of g.concat(l)) {
    let { file: c, ...x } = o;
    if ((await Z(x, d)) === "present" && (await Q(x.sock))) return x;
  }
  return null;
}
function ee(e) {
  return e.spare === !0 || e.parkedJobId !== void 0;
}
function Ye(e) {
  return Bi(e)
    .filter((n) => /^[a-z0-9_]{1,32}$/.test(n))
    .slice(0, 16);
}
export {
  ey,
  PY,
  f8n,
  P4s,
  U_t,
  sfn,
  p8n,
  uFo,
  I4s,
  fFo,
  pFo,
  ifn,
  mFo,
  O4s,
  gFo,
  afn,
  B_t,
  j_t,
  uBr,
  fBr,
  aAe,
  W_t,
  hFo,
  m8n,
  GQ,
  C8,
  yFo,
  pBr,
  lfn,
  _Fo,
  bFo,
  yye,
  M1t,
  dfn,
  SFo,
  mRi,
  cfn,
  gRi,
  ufn,
  _re,
  zQ,
  wFo,
  vFo,
  ffn
};

//# sourceMappingURL=chunk-4sp6n814.js.map
