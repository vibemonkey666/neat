import {
  fileURLToPath as __sourceFilePath_b9c0a0226e483dde,
  URL as __sourceFilePath_b9c0a0226e483dde_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { F, ke } from "./chunk-wrtp8qz8.js";
import { c, ce, Vr, Wq } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import { y2 } from "./chunk-xc1j8sdj.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { ul } from "./chunk-ajtyjx88.js";
import { Zn } from "./chunk-cj37hmns.js";
import { bt, _, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Yl, rr } from "./chunk-ak0cmk10.js";
import { p } from "./chunk-qmkm2x59.js";
import { LYr } from "./chunk-qakn3b85.js";
import { Be, At } from "./chunk-at88wjsn.js";
import { lk, sT } from "./chunk-7zgz07kc.js";
import { V5 } from "./chunk-znkwh1rm.js";
import { Vkt } from "./chunk-38g9s4wc.js";
import { Q2o } from "./chunk-w89b9cst.js";
import { EUe, aoo } from "./chunk-3r796kh5.js";
import {
  xXs,
  iGo,
  PXs,
  IXs,
  OXs,
  LQn,
  aGo,
  MXs,
  rz,
  DXs,
  HXs,
  lGo,
  sGr,
  NQn,
  YSt
} from "./chunk-5z6t3gwt.js";
import { Qu, XD, iQn } from "./chunk-wany0nxw.js";
import { _he, oln, tU, cGe, cY, Ei } from "./chunk-6h7ejyet.js";
import { Ove, u7t } from "./chunk-qy6y62kt.js";
import { vPt } from "./chunk-4ga6249h.js";
import { ZIn, eOn, shr, EPt, P6e } from "./chunk-hb43qsg7.js";
import { Jq } from "./chunk-x1n0c69j.js";
import { udt } from "./chunk-e1t9hs0f.js";
import { _me } from "./chunk-e0pm2dx9.js";
import { Vve } from "./chunk-hq9m7vnk.js";
import { o, v, kM, u, $e, A } from "./chunk-0bqrj5ah.js";
import { UH } from "./chunk-19egh6zj.js";
import { hostname as Ge } from "os";
class Z {
  transport;
  announced;
  now;
  random;
  onEvent;
  onTransportEvent;
  started = !1;
  stopping = !1;
  timers = lGo(aGo);
  lastAckAt = 0;
  reconnectAttempts = 0;
  consecutiveSlotContention = 0;
  lastFailureWasContention = !1;
  contentionBackoffNotified = !1;
  consecutivePongTimeouts = 0;
  keepaliveTimer;
  reconnectTimer;
  stableTimer;
  reannounce = { phase: "idle" };
  constructor(e) {
    ((this.transport = e.transport),
      (this.announced = e.announced),
      (this.onEvent = e.onEvent),
      (this.onTransportEvent = e.onTransportEvent),
      (this.now = e.now ?? Date.now),
      (this.random = e.random ?? Math.random),
      (this.transport.onevent = this.handleTransportEvent));
  }
  start() {
    if (this.started) return;
    ((this.started = !0), this.openConnection());
  }
  async stop() {
    ((this.stopping = !0),
      this.clearReconnectTimer(),
      this.clearConnectionTimers(),
      this.cancelReannounce(),
      await this.transport.close());
  }
  requestReannounce(e) {
    if (!this.started || this.stopping) return;
    let n = LQn[e];
    switch (this.reannounce.phase) {
      case "draining":
      case "rotating":
        return;
      case "coalescing":
        if (this.reannounce.fireAt <= this.now() + n) return;
        clearTimeout(this.reannounce.timer);
        break;
      case "idle":
        break;
    }
    this.reannounce = {
      phase: "coalescing",
      reason: e,
      fireAt: this.now() + n,
      timer: setTimeout(this.beginReannounce, n)
    };
  }
  getReconnectAttempts() {
    return this.reconnectAttempts;
  }
  getConsecutiveSlotContention() {
    return this.consecutiveSlotContention;
  }
  getConsecutivePongTimeouts() {
    return this.consecutivePongTimeouts;
  }
  handleTransportEvent = (e) => {
    switch ((this.notifyTransportListener(e), e.kind)) {
      case "authenticated":
        this.handleAuthenticated(e.protocolVersion, e.timings);
        return;
      case "hb_ack":
        this.handleAck();
        return;
      case "rejected": {
        let n = this.endRotation(),
          i = n !== void 0 && e.reason === "duplicate_device_id";
        if (i) this.emit({ kind: "reannounce_contended", reason: n });
        else if (e.slotContention) this.lastFailureWasContention = !0;
        (this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect(i));
        return;
      }
      case "closed":
        if (e.superseded) this.lastFailureWasContention = !0;
        (this.endRotation(),
          this.cancelDrain(),
          this.clearConnectionTimers(),
          this.scheduleReconnect());
        return;
      case "handshake_timeout":
      case "dial_failed":
      case "token_unavailable":
        (this.endRotation(),
          this.cancelDrain(),
          this.clearConnectionTimers(),
          this.scheduleReconnect());
        return;
      case "transport_closed":
        ((this.stopping = !0),
          this.clearReconnectTimer(),
          this.clearConnectionTimers(),
          this.cancelReannounce());
        return;
      case "connecting":
      case "socket_error":
      case "inbound_unknown":
      case "inbound_invalid":
      case "outbound_dropped":
        return;
    }
  };
  async openConnection() {
    if (this.stopping) return;
    try {
      await this.transport.openConnection();
    } catch (e) {
      (t(`[deviceBridge] open connection failed: ${N(e).message}`),
        this.endRotation(),
        this.scheduleReconnect());
    }
  }
  handleAuthenticated(e, n) {
    if (this.stopping) return;
    if (
      ((this.timers = lGo(n)),
      (this.lastAckAt = this.now()),
      this.clearKeepaliveTimer(),
      this.endRotation() === void 0 || this.stableTimer === void 0)
    )
      (this.clearStableTimer(), (this.stableTimer = setTimeout(this.markStable, IXs)));
    if (this.announced.hasUnservedChange()) this.requestReannounce("connected_stale");
    if (e < 1) {
      ((this.consecutivePongTimeouts = 0),
        this.emit({ kind: "heartbeat_unsupported", protocolVersion: e }));
      return;
    }
    ((this.keepaliveTimer = setInterval(this.keepaliveTick, this.timers.keepaliveIntervalMs)),
      this.sendHeartbeat());
  }
  handleAck() {
    if (((this.lastAckAt = this.now()), this.consecutivePongTimeouts > 0))
      ((this.consecutivePongTimeouts = 0), (this.reconnectAttempts = 0));
  }
  keepaliveTick = () => {
    if (!this.transport.isAuthenticated()) return;
    if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
      (this.consecutivePongTimeouts++,
        this.emit({ kind: "pong_timeout", consecutive: this.consecutivePongTimeouts }),
        this.cancelDrain(),
        this.clearConnectionTimers(),
        this.transport.disconnect(),
        this.scheduleReconnect());
      return;
    }
    this.sendHeartbeat();
  };
  sendHeartbeat() {
    this.transport.sendRaw(xXs);
  }
  markStable = () => {
    if (
      ((this.stableTimer = void 0),
      (this.consecutiveSlotContention = 0),
      (this.contentionBackoffNotified = !1),
      this.consecutivePongTimeouts === 0)
    )
      this.reconnectAttempts = 0;
    this.emit({ kind: "stabilized" });
  };
  scheduleReconnect(e = !1) {
    if (this.stopping || !this.started || this.reconnectTimer !== void 0) return;
    let n = this.nextDelayMs(e);
    if (this.stopping) return;
    ((this.reconnectTimer = setTimeout(this.reconnect, n)),
      this.emit({
        kind: "reconnect_scheduled",
        delayMs: n,
        attempt: this.reconnectAttempts,
        slotContention: this.consecutiveSlotContention > 0
      }));
  }
  nextDelayMs(e) {
    let n = this.lastFailureWasContention;
    if (((this.lastFailureWasContention = !1), e))
      return sGr(0, 1, this.timers.slotContentionFastAttempts, this.random);
    if (n) {
      if (
        (this.consecutiveSlotContention++,
        this.consecutiveSlotContention > this.timers.slotContentionFastAttempts &&
          !this.contentionBackoffNotified)
      )
        ((this.contentionBackoffNotified = !0),
          this.emit({
            kind: "slot_contention_backoff",
            consecutive: this.consecutiveSlotContention
          }));
      return sGr(
        0,
        this.consecutiveSlotContention,
        this.timers.slotContentionFastAttempts,
        this.random
      );
    }
    if (
      ((this.consecutiveSlotContention = 0),
      (this.contentionBackoffNotified = !1),
      this.reconnectAttempts >= PXs)
    ) {
      ((this.reconnectAttempts = 0), this.emit({ kind: "reconnect_exhausted" }));
      try {
        this.transport.onerror?.(Error("Bridge unreachable"));
      } catch (r) {
        t(`[deviceBridge] transport onerror listener threw: ${N(r).message}`);
      }
    }
    let i = sGr(this.reconnectAttempts, 0, this.timers.slotContentionFastAttempts, this.random);
    return (this.reconnectAttempts++, i);
  }
  reconnect = () => {
    ((this.reconnectTimer = void 0), this.openConnection());
  };
  beginReannounce = () => {
    if (this.reannounce.phase !== "coalescing") return;
    let { reason: e } = this.reannounce;
    if (((this.reannounce = { phase: "idle" }), this.stopping)) return;
    let n = this.announced.inFlightCalls(),
      i = this.reannounceSkipOutcome();
    if (i !== void 0) {
      this.emit({
        kind: "reannounce",
        reason: e,
        outcome: i,
        inFlightAtStart: n,
        drainedMs: 0,
        drainTimedOut: !1
      });
      return;
    }
    let r = {
      phase: "draining",
      reason: e,
      startedAt: this.now(),
      inFlightAtStart: n,
      timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs)
    };
    ((this.reannounce = r),
      this.announced.whenIdle().then(
        () => this.rotate(r, !1),
        () => this.rotate(r, !1)
      ));
  };
  handleDrainTimeout = () => {
    if (this.reannounce.phase === "draining") this.rotate(this.reannounce, !0);
  };
  rotate(e, n) {
    if (this.reannounce !== e) return;
    if ((clearTimeout(e.timer), (this.reannounce = { phase: "idle" }), this.stopping)) return;
    let i = this.reannounceSkipOutcome() ?? "rotated";
    if (i === "rotated") this.reannounce = { phase: "rotating", reason: e.reason };
    if (
      (this.emit({
        kind: "reannounce",
        reason: e.reason,
        outcome: i,
        inFlightAtStart: e.inFlightAtStart,
        drainedMs: this.now() - e.startedAt,
        drainTimedOut: n
      }),
      this.reannounce.phase !== "rotating" || this.stopping)
    )
      return;
    (this.clearKeepaliveTimer(), this.transport.disconnect(), this.openConnection());
  }
  reannounceSkipOutcome() {
    if (!this.announced.hasUnservedChange()) return "already_served";
    if (!this.transport.isAuthenticated()) return "not_connected";
    return;
  }
  endRotation() {
    if (this.reannounce.phase !== "rotating") return;
    let { reason: e } = this.reannounce;
    return ((this.reannounce = { phase: "idle" }), e);
  }
  cancelDrain() {
    if (this.reannounce.phase !== "draining") return;
    let e = this.reannounce;
    (clearTimeout(e.timer),
      (this.reannounce = { phase: "idle" }),
      this.emit({
        kind: "reannounce",
        reason: e.reason,
        outcome: "not_connected",
        inFlightAtStart: e.inFlightAtStart,
        drainedMs: this.now() - e.startedAt,
        drainTimedOut: !1
      }));
  }
  cancelReannounce() {
    switch (this.reannounce.phase) {
      case "coalescing":
      case "draining":
        clearTimeout(this.reannounce.timer);
        break;
      case "rotating":
      case "idle":
        break;
    }
    this.reannounce = { phase: "idle" };
  }
  emit(e) {
    try {
      this.onEvent?.(e);
    } catch (n) {
      t(`[deviceBridge] liveness event listener threw: ${N(n).message}`);
    }
  }
  notifyTransportListener(e) {
    try {
      this.onTransportEvent?.(e);
    } catch (n) {
      t(`[deviceBridge] transport event listener threw: ${N(n).message}`);
    }
  }
  clearReconnectTimer() {
    if (this.reconnectTimer === void 0) return;
    (clearTimeout(this.reconnectTimer), (this.reconnectTimer = void 0));
  }
  clearConnectionTimers() {
    (this.clearKeepaliveTimer(), this.clearStableTimer());
  }
  clearKeepaliveTimer() {
    if (this.keepaliveTimer !== void 0)
      (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = void 0));
  }
  clearStableTimer() {
    if (this.stableTimer !== void 0) (clearTimeout(this.stableTimer), (this.stableTimer = void 0));
  }
}
function ae() {
  let e = new Map(),
    n = De(),
    i = se(e),
    r;
  return {
    get: (s) => i.byName.get(s),
    setGroup(s, d, S = "tools_changed") {
      e.set(s, [...d]);
      let b = se(e),
        O = i;
      if (((i = b), b.dropped.length > 0 && _(b.dropped) !== _(O.dropped)))
        t(`[deviceBridge] duplicate device tool names not announced: ${_(b.dropped)}`);
      if (b.hash === O.hash) return;
      try {
        n.emit(S);
      } catch (f) {
        for (let k of f instanceof AggregateError ? f.errors : [f]) l(k);
      }
    },
    definitions: () => i.definitions,
    definitionsOf: (s) =>
      (e.get(s) ?? []).flatMap((d) =>
        i.byName.get(d.definition.name) === d ? [d.definition] : []
      ),
    serve() {
      return ((r = i.hash), i.definitions);
    },
    hasUnservedChange: () => r !== i.hash,
    subscribe: n.subscribe
  };
}
function se(e) {
  let { byName: n, dropped: i } = [...e.values()].flat().reduce(
      (s, d) => {
        let S = d.definition.name;
        if (s.byName.has(S)) s.dropped.push(S);
        else s.byName.set(S, d);
        return s;
      },
      { byName: new Map(), dropped: [] }
    ),
    r = [...n.values()].map((s) => s.definition);
  return { byName: n, definitions: r, dropped: i, hash: UH(_(r)) };
}
var Ce = 0,
  z = 1,
  Ae = -32603,
  de = Symbol("device-bridge-token-deadline"),
  ue = "__synthetic_init__",
  K = 33554432;
function Oe(e) {
  let n = new globalThis.WebSocket(e, { proxy: sT(e), tls: lk(void 0) || void 0 });
  return ((n.binaryType = "arraybuffer"), n);
}
class ne {
  options;
  onclose;
  onerror;
  onmessage;
  onevent;
  started = !1;
  closing = !1;
  ws;
  pendingToken;
  authenticated = !1;
  connectGeneration = 0;
  handshakeTimer;
  negotiated;
  constructor(e) {
    this.options = e;
  }
  async start() {
    if (this.started) throw Error("DeviceBridgeTransport start can only be called once.");
    this.started = !0;
  }
  async close() {
    if (this.closing) return;
    ((this.closing = !0),
      this.disconnect(),
      this.emit({ kind: "transport_closed" }),
      this.onclose?.());
  }
  async send(e) {
    if (Me(e)) return;
    let n = this.ws;
    if (!n || !this.authenticated || n.readyState !== z) {
      this.emit({ kind: "outbound_dropped", messageType: ee(e) === void 0 ? "other" : "request" });
      return;
    }
    try {
      n.send(_(e));
    } catch (i) {
      (t(`[deviceBridge] outbound send failed: ${N(i).message}`),
        this.emit({
          kind: "outbound_dropped",
          messageType: ee(e) === void 0 ? "other" : "request"
        }));
    }
  }
  sendRaw(e) {
    let n = this.ws;
    if (!n || n.readyState !== z) return !1;
    try {
      n.send(e);
    } catch (i) {
      return (t(`[deviceBridge] raw send failed: ${N(i).message}`), !1);
    }
    return !0;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  isConnected() {
    return this.ws !== void 0;
  }
  getNegotiated() {
    return this.negotiated;
  }
  async openConnection() {
    if (this.closing || this.ws) return;
    let e = ++this.connectGeneration,
      n = await this.resolveAccessToken();
    if (e !== this.connectGeneration || this.closing || this.ws !== void 0) return;
    if (!n) {
      this.emit({ kind: "token_unavailable" });
      return;
    }
    let i, r;
    try {
      ((i = this.options.getUrl()), (r = (this.options.isAllowedUrl ?? LYr)(i)));
    } catch (d) {
      this.emit({ kind: "dial_failed", error: N(d) });
      return;
    }
    if (!r) {
      (t("[deviceBridge] refusing dial: bridge URL failed validation"),
        this.emit({ kind: "dial_failed", error: Error("bridge URL failed validation") }));
      return;
    }
    let s;
    try {
      s = (this.options.createSocket ?? Oe)(i);
    } catch (d) {
      this.emit({ kind: "dial_failed", error: N(d) });
      return;
    }
    if (
      ((this.ws = s),
      (this.pendingToken = n),
      (this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, iGo)),
      s.addEventListener("open", this.handleOpen),
      s.addEventListener("message", this.handleMessage),
      s.addEventListener("close", this.handleClose),
      s.addEventListener("error", this.handleSocketError),
      this.emit({ kind: "connecting" }),
      this.closing || this.ws !== s)
    )
      return;
    if (s.readyState === z) this.handleOpen();
  }
  async resolveAccessToken() {
    let e;
    try {
      let n = await Promise.race([
        Promise.resolve(this.options.getAccessToken()),
        new Promise((i) => {
          e = setTimeout((r) => r(de), iGo, i);
        })
      ]);
      if (n === de) {
        t("[deviceBridge] access token resolution timed out");
        return;
      }
      if (n !== void 0 && Vkt(n)) {
        t("[deviceBridge] the desktop app's sign-in is not sent to the bridge");
        return;
      }
      return n;
    } catch (n) {
      t(`[deviceBridge] access token resolution failed: ${N(n).message}`);
      return;
    } finally {
      if (e !== void 0) clearTimeout(e);
    }
  }
  disconnect() {
    (this.connectGeneration++,
      this.clearHandshakeTimer(),
      (this.pendingToken = void 0),
      (this.authenticated = !1),
      (this.negotiated = void 0));
    let e = this.ws;
    if (!e) return;
    if (
      ((this.ws = void 0),
      e.removeEventListener("open", this.handleOpen),
      e.removeEventListener("message", this.handleMessage),
      e.removeEventListener("close", this.handleClose),
      e.removeEventListener("error", this.handleSocketError),
      e.readyState === z || e.readyState === Ce)
    )
      try {
        e.close();
      } catch (n) {
        t(`[deviceBridge] socket close failed: ${N(n).message}`);
      }
  }
  emit(e) {
    try {
      this.onevent?.(e);
    } catch (n) {
      t(`[deviceBridge] transport event listener threw: ${N(n).message}`);
    }
  }
  clearHandshakeTimer() {
    if (this.handshakeTimer === void 0) return;
    (clearTimeout(this.handshakeTimer), (this.handshakeTimer = void 0));
  }
  handleHandshakeTimeout = () => {
    if (((this.handshakeTimer = void 0), !this.ws || this.authenticated)) return;
    (this.disconnect(), this.emit({ kind: "handshake_timeout" }));
  };
  handleOpen = () => {
    let e = this.ws,
      n = this.pendingToken;
    if (!e || n === void 0) return;
    this.pendingToken = void 0;
    try {
      e.send(
        _(
          DXs({
            oauthToken: n,
            tools: this.options.getTools(),
            deviceId: this.options.getDeviceId?.(),
            sessionId: this.options.getSessionId()
          })
        )
      );
    } catch (i) {
      (this.disconnect(), this.emit({ kind: "dial_failed", error: N(i) }));
    }
  };
  handleMessage = (e) => {
    let n = xe(e.data);
    if (n.kind === "unsupported") {
      (t("[deviceBridge] dropping unsupported inbound payload type"),
        this.emit({ kind: "inbound_invalid", error: Error("unsupported inbound payload type") }));
      return;
    }
    if (n.kind === "oversize") {
      (t(`[deviceBridge] dropping ${n.size}-unit inbound frame (cap ${K})`),
        this.emit({
          kind: "inbound_invalid",
          error: Error("inbound frame exceeded the device bridge size cap")
        }));
      return;
    }
    let i = HXs(n.text);
    switch (i.kind) {
      case "ignored":
        if (this.authenticated)
          (t("[deviceBridge] dropping unparseable inbound frame"),
            this.emit({ kind: "inbound_invalid", error: Error("unparseable inbound frame") }));
        return;
      case "hb_ack":
        this.emit({ kind: "hb_ack" });
        return;
      case "error":
        this.handleReject(i.reason, i.status, i.detail);
        return;
      case "connected":
        this.authenticate(i.protocolVersion, i.timings);
        return;
      case "unknown":
        this.emit({ kind: "inbound_unknown", frameType: i.frameType });
        return;
      case "rpc":
        this.deliver(i.message);
        return;
    }
  };
  authenticate(e, n) {
    if (this.authenticated) return;
    if (
      (this.clearHandshakeTimer(),
      (this.authenticated = !0),
      (this.negotiated = { protocolVersion: e, timings: n }),
      this.emit({ kind: "authenticated", protocolVersion: e, timings: n }),
      this.closing || this.ws === void 0)
    )
      return;
    this.injectSyntheticInitialize();
  }
  injectSyntheticInitialize() {
    let e;
    try {
      e = this.options.parseMessage(Pe());
    } catch (n) {
      this.emit({ kind: "inbound_invalid", error: N(n) });
      return;
    }
    try {
      this.onmessage?.(e);
    } catch (n) {
      this.emit({ kind: "inbound_invalid", error: N(n) });
    }
  }
  handleReject(e, n, i) {
    let r = !this.authenticated;
    (this.disconnect(),
      this.emit({
        kind: "rejected",
        phase: r ? "pre_auth" : "post_auth",
        reason: e,
        status: n,
        detail: i,
        slotContention: r && MXs(e)
      }));
  }
  deliver(e) {
    if (!this.authenticated) return;
    let n;
    try {
      n = this.options.parseMessage(e);
    } catch (i) {
      (this.emit({ kind: "inbound_invalid", error: N(i) }), this.replyInternalError(e));
      return;
    }
    try {
      this.onmessage?.(n);
    } catch (i) {
      (this.emit({ kind: "inbound_invalid", error: N(i) }), this.replyInternalError(e));
    }
  }
  replyInternalError(e) {
    let n = ee(e);
    if (n === void 0) return;
    this.sendRaw(_({ jsonrpc: "2.0", id: n, error: { code: Ae, message: "internal error" } }));
  }
  handleClose = (e) => {
    let n = this.authenticated ? "post_auth" : "pre_auth",
      i = typeof e.code === "number" ? e.code : void 0,
      r = typeof e.reason === "string" ? e.reason : void 0;
    (this.disconnect(),
      this.emit({ kind: "closed", phase: n, code: i, reason: r, superseded: i === OXs }));
  };
  handleSocketError = () => {
    this.emit({ kind: "socket_error" });
  };
}
function Pe() {
  return {
    jsonrpc: "2.0",
    id: ue,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: { name: "remote-tools-bridge", version: "1.0.0" }
    }
  };
}
function Me(e) {
  return "id" in e && e.id === ue && ("result" in e || "error" in e);
}
var Ie = p(() =>
  u({
    jsonrpc: A("2.0"),
    id: $e([o(), v()]),
    method: o(),
    result: kM().optional(),
    error: kM().optional()
  })
);
function ee(e) {
  let n = Ie().safeParse(e);
  return n.success ? n.data.id : void 0;
}
function xe(e) {
  if (typeof e === "string")
    return e.length > K ? { kind: "oversize", size: e.length } : { kind: "text", text: e };
  if (e instanceof ArrayBuffer)
    return e.byteLength > K
      ? { kind: "oversize", size: e.byteLength }
      : { kind: "text", text: Buffer.from(e).toString("utf8") };
  if (ArrayBuffer.isView(e))
    return e.byteLength > K
      ? { kind: "oversize", size: e.byteLength }
      : { kind: "text", text: Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") };
  return { kind: "unsupported" };
}
function pe(e) {
  return {
    policy: e.policy,
    get description() {
      return e.description;
    },
    onRedescribed: e.onRedescribed,
    heldServedCall: e.heldServedCall,
    ensureSettingsHeld: e.ensureSettingsHeld,
    deps: e.deps
  };
}
function he(e) {
  let n = () => _([e.definitionsOf(EPt), e.definitionsOf(P6e)]);
  return {
    native: () => e.definitionsOf(EPt).flatMap(Le),
    passthrough: () => e.definitionsOf(P6e).flatMap(le),
    localNameFor: (i) =>
      e
        .definitionsOf(P6e)
        .filter((r) => r.name === i)
        .flatMap(le)[0]?.local_name,
    subscribe: (i) => {
      let r = n();
      return e.subscribe((s) => {
        let d = n();
        if (d !== r) ((r = d), i(s));
      });
    }
  };
}
function Le(e) {
  let n = iQn(e._meta?.[XD]);
  return n === void 0
    ? []
    : [
        {
          name: e.name,
          refused_input_fields: n.refused_input_fields,
          protocol_versions: n.protocol_versions ?? [Qu],
          description: e.description,
          input_schema: e.inputSchema
        }
      ];
}
function le(e) {
  let n = u7t(e._meta?.[Ove]);
  if (n === void 0) return [];
  let i = Ne(e.annotations ?? {}),
    r = Ue(e._meta ?? {});
  return [
    {
      name: e.name,
      local_name: n.tool,
      description: e.description,
      input_schema: e.inputSchema,
      ...(i !== void 0 && { annotations: i }),
      ...(r !== void 0 && { hints: r })
    }
  ];
}
function Ne({ title: e, readOnlyHint: n, destructiveHint: i, openWorldHint: r }) {
  let s = {
    ...(e !== void 0 && { title: e }),
    ...(n !== void 0 && { readOnlyHint: n }),
    ...(i !== void 0 && { destructiveHint: i }),
    ...(r !== void 0 && { openWorldHint: r })
  };
  return Object.keys(s).length > 0 ? s : void 0;
}
function Ue(e) {
  let n = e[rz.searchHint],
    i = e[rz.alwaysLoad],
    r = e[rz.maxResultSizeChars],
    s = e[rz.requiresUserInteraction],
    d = {
      ...(typeof n === "string" && { search_hint: n }),
      ...(i === !0 && { always_load: !0 }),
      ...(typeof r === "number" && { max_result_size_chars: r }),
      ...(s === !0 && { requires_user_interaction: !0 })
    };
  return Object.keys(d).length > 0 ? d : void 0;
}
var je = "wss://bridge.claudeusercontent.com",
  He = "wss://bridge-staging.claudeusercontent.com",
  fe = 8,
  We = "served-bridge-trusted-devices",
  ve =
    typeof {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __sourceFilePath_b9c0a0226e483dde(
        new __sourceFilePath_b9c0a0226e483dde_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    } < "u"
      ? {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __sourceFilePath_b9c0a0226e483dde(
            new __sourceFilePath_b9c0a0226e483dde_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      : "unknown";
function ze(e, n) {
  let i = YSt(e),
    r = NQn(rr(n).slice(-fe), fe);
  return r ? `${i}-cc-${r}` : i;
}
function Ke(e, n, i, r) {
  return `${e}/devices/${encodeURIComponent(n)}_${encodeURIComponent(i)}/${encodeURIComponent(r)}/bridge`;
}
function Ve(e, n) {
  let i, r;
  try {
    ((i = new URL(e)), (r = new URL(n)));
  } catch {
    return !1;
  }
  let s = i.hostname === "localhost" || i.hostname === "127.0.0.1" || i.hostname === "[::1]";
  return (
    i.origin === r.origin &&
    i.username === "" &&
    i.password === "" &&
    (i.protocol === "wss:" || (i.protocol === "ws:" && s))
  );
}
function qe() {
  if (Zn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0) return Zn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
  switch (y2()) {
    case "":
      return je;
    case "-staging-oauth":
      return He;
    default:
      return;
  }
}
function H5t(e) {
  let n = e.transport ?? (tU() ? "bridge" : "auto"),
    i = !1,
    r,
    s,
    d,
    S,
    b = !1,
    O = !1,
    f = !1,
    k = new Set(),
    I = !1,
    R,
    E,
    D = { current: void 0 },
    w,
    B = (h) => (S ??= V(h)),
    V = async (h) => {
      if (((i = !0), s?.(), (s = void 0), b)) await P.catch(() => !1);
      (r?.(), (r = void 0), d?.(), (d = void 0), D.current?.kit.dispose());
      let T = w?.dispose();
      ((w = void 0), await U(h), await T);
    },
    U = async (h) => {
      let T = R;
      if (T === void 0) return;
      if (((R = void 0), await T.stop(), O)) a("tengu_device_bridge_stopped", { reason: c(h) });
    },
    q = async () => {
      let h = e.readiness ?? (await import("./chunk-0g9nsydf.js")).createServingReadiness(),
        T = performance.now();
      await h.whenReady();
      let J = Math.round(performance.now() - T),
        { cloudClient: j } = e,
        Q = await (e.isEnabled ?? (() => aoo({ cloudClient: j })))();
      if (((b = !0), !Q)) return !1;
      let L = e.isEgressAllowed ?? Vve;
      if (!L())
        return (
          t(
            "[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied"
          ),
          !1
        );
      if (i) return !1;
      if (n === "bridge" && (e.isBridgeRefused ?? Q2o)())
        return (
          t(
            "[deviceBridge] skipped: the bridge cannot check a device proof and trusted devices are required or unknown"
          ),
          (f = !0),
          m("device_bridge_register", "trusted_devices_required_or_unknown"),
          e.onNotice?.(We, Ei["serving_off.bridge_trusted_devices"]),
          !1
        );
      let M = await (e.getAccount ?? _me)(),
        H = e.orgUuid;
      if (!H || M.status !== "resolved")
        return (
          a("tengu_device_bridge_skipped", {
            missing_org: H === void 0,
            missing_account: M.status === "missing",
            account_mismatch: M.status === "mismatch"
          }),
          t(`[deviceBridge] skipped: ${H ? `account ${M.status}` : "no org"}`),
          !1
        );
      let { accountUuid: ge } = M,
        _e = eOn(ZIn);
      if (((E = ae()), E.setGroup(shr, []), await _he(), i)) return !1;
      let W = cY(void 0, { ignoringMute: !0 });
      if (W === void 0) {
        if ((await vPt(), i)) return !1;
      }
      let te =
        W === void 0 && udt()
          ? await import("./chunk-432zg8ve.js")
              .then((y) => y.gatherHostInventory(ke()))
              .catch((y) => {
                l(N(y));
                return;
              })
          : void 0;
      if (i) return !1;
      let nn = void 0,
        Te = e.toolGroupProviders ?? (await Xe(W));
      if (i) return !1;
      let X = [];
      ((d = Ze(Te, {
        registry: E,
        holdStartUntil: (y) => X.push(y),
        sessionId: e.sessionId,
        serving: { offReason: W },
        getDeviceId:
          e.getDeviceId ??
          (() => {
            return;
          }),
        limiter: _e,
        storageV5: e.storageV5,
        servedSettingsChanged: e.servedSettingsChanged,
        ...(e.deviceMcpQuestion && { deviceMcpQuestion: e.deviceMcpQuestion }),
        servingKit: D,
        transport: n,
        readiness: h,
        ...(te !== void 0 && { hostInventory: te }),
        ...(w !== void 0 && { execution: w.execution }),
        sandboxRequiredNow: oln,
        ...(e.dirSync !== void 0 && { dirSync: e.dirSync }),
        ...(e.folderRelation !== void 0 && { folderRelation: e.folderRelation }),
        onNotice:
          e.onNotice ??
          ((y, we) => {
            t(`[remote-tools] ${y}: ${we}`);
          })
      })),
        t(`[deviceBridge] start-up held on ${X.length} reads of its tool groups`));
      let be = performance.now();
      await Promise.allSettled(X);
      let ie = Math.round(performance.now() - be);
      if ((t(`[deviceBridge] start-up released after ${ie} ms`), i)) return !1;
      let ye = E;
      if (n === "bridge") {
        if (
          ((R = await Ye({
            options: e,
            orgUuid: H,
            accountUuid: ge,
            registry: ye,
            isEgressAllowed: L,
            isStopped: () => i,
            onLivenessEvent: G,
            onTransportEvent: x
          })),
          R === void 0 || i)
        )
          return (await R?.stop(), (R = void 0), !1);
      }
      let re = () => {
          if (!L()) B("egress_denied");
        },
        Se = e.isStillEnabled ?? (() => EUe({ cloudClient: j }) === void 0),
        oe = () => {
          if (!Se()) (t("[deviceBridge] stopping: the gate turned off"), B("gate_off"));
        },
        Re = (e.onEgressGateChange ?? V5)(re),
        Ee = (e.onEnabledChange ?? ul)(oe);
      if (
        ((s = () => {
          (Re(), Ee());
        }),
        re(),
        oe(),
        i)
      )
        return !1;
      if (
        ((O = !0),
        a("tengu_device_bridge_started", {
          account_source: c(M.source),
          transport: c(n),
          redial: !1,
          readiness_wait_ms: J,
          held_ms: ie
        }),
        n === "auto" && !f)
      )
        ((f = !0), g("device_bridge_register"));
      return (R?.start(), !0);
    },
    x = (h) => {
      if (h.kind === "authenticated") {
        if ((k.clear(), (I = !1), !f)) ((f = !0), g("device_bridge_register"));
        me(h);
        return;
      }
      let T = Je(h);
      if (T === void 0) return;
      if (k.has(T)) return;
      (k.add(T), me(h));
    },
    G = (h) => {
      if (h.kind === "reconnect_exhausted") {
        if (!f) ((f = !0), m("device_bridge_register", "reconnect_exhausted"));
        if (I) return;
        I = !0;
      }
      Qe(h);
    };
  r = (e.registerExitCleanup ?? bt)(() => B("exit"));
  let P = q().catch((h) => {
      if (
        (t(`[deviceBridge] registration failed: ${N(h).message}`),
        a("tengu_device_bridge_start_failed", {}),
        !f)
      )
        ((f = !0), m("device_bridge_register", "start_failed"));
      return !1;
    }),
    Y = P.then((h) =>
      h && E !== void 0 && D.current !== void 0 ? { kit: pe(D.current.kit), source: he(E) } : void 0
    );
  return (
    P.then((h) => {
      if (!h && !i)
        (r?.(),
          (r = void 0),
          d?.(),
          (d = void 0),
          D.current?.kit.dispose(),
          w?.dispose(),
          (w = void 0));
    }),
    {
      started: P,
      announceSettled: () => {},
      serving: Y,
      stop: () => B("attach_ended"),
      heldServedCall: (h) => (i || D.current === void 0 ? Jq : D.current.kit.heldServedCall(h))
    }
  );
}
async function Ye({
  options: e,
  orgUuid: n,
  accountUuid: i,
  registry: r,
  isEgressAllowed: s,
  isStopped: d,
  onLivenessEvent: S,
  onTransportEvent: b
}) {
  let O = ze((e.getHostname ?? Ge)(), e.sessionId),
    f = e.getBridgeBaseUrl !== void 0 || Zn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0,
    k = (e.getBridgeBaseUrl ?? qe)();
  if (k === void 0) {
    t("[deviceBridge] skipped: no device bridge for this OAuth environment");
    return;
  }
  let I = Ke(k, n, i, O),
    {
      createDeviceMcpServer: R,
      deviceInfoProbeTool: E,
      parseJsonRpcMessage: D
    } = await import("./chunk-w3y34m3j.js");
  if (d()) return;
  let w = { getDeviceName: () => O, version: ve },
    B = E(w),
    V = E({ ...w, idle: !0 }),
    U = (C) => {
      let Q = r.definitions().every((L) => L.name === B.definition.name);
      r.setGroup(shr, [Q ? V : B], C);
    };
  U();
  let q = r.subscribe(U),
    x = () => {
      (q(), r.setGroup(shr, []));
    },
    G = new ne({
      getUrl: () => I,
      getAccessToken: () => e.getAccessToken(),
      getTools: () => en(r),
      getDeviceId: e.getDeviceId,
      getSessionId: () => Yl(e.sessionId),
      parseMessage: D,
      createSocket: e.createSocket,
      isAllowedUrl: (C) => s() && (LYr(C) || (f && Ve(C, k)))
    }),
    {
      server: P,
      inFlightCalls: Y,
      whenIdle: h
    } = R({ registry: r, version: ve, sessionId: e.sessionId });
  try {
    await P.connect(G);
  } catch (C) {
    throw (x(), C);
  }
  if (d()) {
    (x(), await P.close());
    return;
  }
  let T = new Z({
      transport: G,
      announced: { hasUnservedChange: r.hasUnservedChange, inFlightCalls: Y, whenIdle: h },
      onEvent: S,
      onTransportEvent: b
    }),
    J = r.subscribe((C) => T.requestReannounce(C)),
    j;
  return {
    start: () => T.start(),
    stop: () =>
      (j ??= (async () => {
        (J(), x(), await Promise.allSettled([T.stop(), P.close()]));
      })())
  };
}
function Je(e) {
  switch (e.kind) {
    case "rejected":
      return `rejected:${e.phase}:${e.reason ?? ""}:${e.status ?? ""}`;
    case "closed":
      return `closed:${e.phase}:${e.code ?? ""}:${e.superseded}`;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
    case "dial_failed":
      return e.kind;
    default:
      return;
  }
}
function me(e) {
  switch (e.kind) {
    case "authenticated":
      a("tengu_device_bridge_connected", {
        protocol_version: e.protocolVersion,
        hb_interval_ms: e.timings.hbIntervalMs,
        staleness_ms: e.timings.stalenessMs,
        rpc_timeout_ms: e.timings.rpcTimeoutMs
      });
      return;
    case "rejected":
      a("tengu_device_bridge_rejected", {
        phase: c(e.phase),
        reason: ce(e.reason),
        status: Wq(e.status),
        slot_contention: e.slotContention
      });
      return;
    case "closed":
      a("tengu_device_bridge_closed", {
        phase: c(e.phase),
        code: Wq(e.code),
        superseded: e.superseded
      });
      return;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
      a("tengu_device_bridge_connect_failed", { cause: c(e.kind) });
      return;
    case "dial_failed":
      a("tengu_device_bridge_connect_failed", { cause: c("dial_failed") });
      return;
    default:
      return;
  }
}
function Qe(e) {
  switch (e.kind) {
    case "pong_timeout":
      a("tengu_device_bridge_pong_timeout", { consecutive: e.consecutive });
      return;
    case "reconnect_exhausted":
      a("tengu_device_bridge_reconnect_exhausted", {});
      return;
    case "heartbeat_unsupported":
      a("tengu_device_bridge_heartbeat_unsupported", { protocol_version: Vr(e.protocolVersion) });
      return;
    case "reannounce":
      a("tengu_device_bridge_reannounce", {
        reason: c(e.reason),
        outcome: c(e.outcome),
        inflight_at_start: e.inFlightAtStart,
        drained_ms: e.drainedMs,
        drain_timed_out: e.drainTimedOut
      });
      return;
    case "reannounce_contended":
      a("tengu_device_bridge_reannounce_contended", { reason: c(e.reason) });
      return;
    default:
      return;
  }
}
async function Xe(e) {
  if (e === void 0 || cGe(e))
    try {
      let [{ remoteToolServingGroupProvider: n }, { passthroughServingGroupProvider: i }, r] =
        await Promise.all([import("./chunk-09m38cx5.js"), import("./chunk-8cgtcm7x.js"), void 0]);
      return e === void 0 ? [n(), i(), ...[]] : [n()];
    } catch (n) {
      l(N(n));
    }
  return [];
}
function Ze(e, n) {
  let i = e.flatMap((r) => {
    try {
      let s = r(n);
      return s ? [s] : [];
    } catch (s) {
      return (l(N(s)), []);
    }
  });
  return () =>
    i.forEach((r) => {
      try {
        r();
      } catch (s) {
        l(N(s));
      }
    });
}
function en(e) {
  let n = e.hasUnservedChange(),
    i = e.serve();
  if (!n) return i;
  let r = i.map((s) => s.name);
  return (
    t(
      `[deviceBridge] connect frame announces ${i.length} tools: ${r.slice(0, 12).join(", ")}${r.length > 12 ? ", \u2026" : ""}`
    ),
    a("tengu_device_bridge_connect_frame", {
      tool_count: i.length,
      serves_bash: r.includes(Be),
      serves_powershell: r.includes(At),
      mcp_tool_count: F(r, (s) => s.includes("__"))
    }),
    i
  );
}
export { H5t };

//# sourceMappingURL=chunk-avkpceps.js.map
