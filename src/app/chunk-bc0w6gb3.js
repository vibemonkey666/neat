// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { De } from "./chunk-2qx8pe6s.js";
import { F, mit, L } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { d, E } from "./chunk-fs43t96t.js";
import { Ky, X, Pe } from "./chunk-4hww8411.js";
import { a } from "./chunk-4cgvah10.js";
import { bt, HM, _, ma, te, t } from "./chunk-4kxznmzw.js";
import { Ze } from "./chunk-a16y5hcz.js";
import { fhn } from "./chunk-yw4wqxm9.js";
import { Y, D$e } from "./chunk-arw2bgak.js";
import { i } from "./chunk-cj37hmns.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { m0, $Ce, Ont, Xnr, t4r, uKt, n4r } from "./chunk-ajtyjx88.js";
import { aPs } from "./chunk-9ewvacsd.js";
import { oa } from "./chunk-7zgz07kc.js";
import { U4s, B4s, DFo, Y4s, yfn, X4s, Z4s, tYs } from "./chunk-mrftwq54.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ht } from "./chunk-ddpw2j06.js";
import { r7s, o7s, Dwt, hCe } from "./chunk-160x3d5g.js";
import { Dr } from "./chunk-kc27mwew.js";
import { Eye, Yde } from "./chunk-645q4bx1.js";
import { ann, iPs } from "./chunk-mam24wdr.js";
import { Lhn, D7s, CZn } from "./chunk-tzrn3e6a.js";
import { tpt } from "./chunk-qkh6s1m8.js";
import { U9e } from "./chunk-gfqayeek.js";
import { OEe } from "./chunk-c9bdtm0y.js";
import { npt } from "./chunk-hm3z7hpp.js";
import { lnn, gK } from "./chunk-9kh63k93.js";
import { fAe } from "./chunk-4072fsq4.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { A9n } from "./chunk-7f2fx3g0.js";
import { zGt, wKe } from "./chunk-dcmkyehf.js";
import { ac } from "./chunk-refybwsn.js";
import { H } from "./chunk-p8tprgqa.js";
import { od, eW, oxe, Sar } from "./chunk-gvf25gp4.js";
import { o, v, M, oe, T, u, yt, me, A } from "./chunk-0bqrj5ah.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { Ds, py } from "./chunk-tdv74tcm.js";
import { randomUUID as pe } from "crypto";
var re = 61440,
  Zt = re - 4096;
function Ge(e) {
  return Buffer.byteLength(ma(e)) - 2;
}
function Ve(e, n, s, r, h) {
  return (
    e.firstEvent.index === s.index &&
    e.deltaType === r &&
    e.first.parent_tool_use_id === n.parent_tool_use_id &&
    e.first.thinking_display === n.thinking_display &&
    e.first.api_message_id === n.api_message_id &&
    e.bytes + h <= Zt
  );
}
function Ke(e) {
  if (e.type !== "content_block_delta") return null;
  switch (e.delta.type) {
    case "text_delta":
      return { event: e, deltaType: "text_delta", chunk: e.delta.text, estimatedTokens: void 0 };
    case "input_json_delta":
      return {
        event: e,
        deltaType: "input_json_delta",
        chunk: e.delta.partial_json,
        estimatedTokens: void 0
      };
    case "thinking_delta":
      return {
        event: e,
        deltaType: "thinking_delta",
        chunk: e.delta.thinking,
        estimatedTokens: e.delta.estimated_tokens ?? void 0
      };
    case "citations_delta":
    case "signature_delta":
    case "compaction_delta":
      return null;
    default:
      return (e.delta, null);
  }
}
function Se(e) {
  if (e.count === 1) return e.first;
  let n;
  switch (e.deltaType) {
    case "text_delta":
      n = { type: "text_delta", text: e.accumulated };
      break;
    case "input_json_delta":
      n = { type: "input_json_delta", partial_json: e.accumulated };
      break;
    case "thinking_delta":
      n = {
        type: "thinking_delta",
        thinking: e.accumulated,
        estimated_tokens: e.estimatedTokens ?? null
      };
      break;
  }
  return { ...e.first, event: { ...e.firstEvent, delta: { ...e.firstEvent.delta, ...n } } };
}
function Ye(e) {
  if (e.length <= 1) return e;
  let n = [],
    s = null;
  for (let r of e) {
    let h = Ke(r.event);
    if (h === null) {
      if (s !== null) (n.push(Se(s)), (s = null));
      n.push(r);
      continue;
    }
    let { event: y, deltaType: w, chunk: S, estimatedTokens: P } = h,
      C = Ge(S);
    if (s !== null && Ve(s, r, y, w, C)) {
      if (((s.accumulated += S), (s.bytes += C), (s.count += 1), typeof P === "number"))
        s.estimatedTokens = (s.estimatedTokens ?? 0) + P;
      continue;
    }
    if (s !== null) n.push(Se(s));
    s = {
      first: r,
      firstEvent: y,
      deltaType: w,
      accumulated: S,
      estimatedTokens: P,
      bytes: C,
      count: 1
    };
  }
  if (s !== null) n.push(Se(s));
  return n;
}
function Xe(e, n) {
  let s = e.findIndex((h) => h.uuid === n);
  if (s < 0) return n;
  let r = null;
  for (let h = 0; h <= s; h++) {
    let y = e[h],
      w = Ke(y.event);
    if (w === null) {
      r = null;
      continue;
    }
    let { event: S, deltaType: P, chunk: C } = w,
      x = Ge(C);
    if (r !== null && Ve(r, y, S, P, x)) r.bytes += x;
    else r = { first: y, firstEvent: S, deltaType: P, bytes: x };
  }
  return r?.first.uuid ?? n;
}
var en = 64;
class Ee {
  rowsAhead;
  queuedSince = new WeakSet();
  attempts = [];
  posts = 0;
  failedPosts = 0;
  rows = 0;
  constructor(e) {
    this.rowsAhead = e;
  }
  noteQueued(e) {
    for (let n of e) this.queuedSince.add(n);
  }
  noteAttempt(e, n, s) {
    let r = F(e, (h) => this.queuedSince.has(h));
    if ((this.posts++, s)) this.rows += r;
    else this.failedPosts++;
    if (this.attempts.length < en)
      this.attempts.push({ startedAt: n, endedAt: performance.now(), ahead: r === 0 });
  }
  seen(e) {
    let n = 0,
      s = 0;
    for (let { startedAt: r, endedAt: h, ahead: y } of this.attempts) {
      let w = Math.max(0, h - Math.max(r, e));
      if (y) n += w;
      else s += w;
    }
    return {
      aheadMs: n,
      postMs: s,
      posts: this.posts,
      failedPosts: this.failedPosts,
      rowsAhead: this.rowsAhead,
      rows: this.rows
    };
  }
}
var zHt = 1536;
function ke(e) {
  return Array.isArray(e) && e.every((n) => typeof n === "string");
}
function Qe(e, n = zHt) {
  let s = e.compactMetadata;
  if (!H(s)) return null;
  let r = s.preservedMessages;
  if (!H(r)) return null;
  let h = r.uuids;
  if (!ke(h) || h.length <= n) return null;
  let y = h.slice(-n),
    w = y[0],
    S = r.allUuids,
    P = ke(S) ? S.indexOf(w) : -1,
    C = s.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...s,
      preservedMessages: {
        ...r,
        uuids: y,
        ...(ke(S) && { allUuids: P >= 0 ? S.slice(P) : S.slice(-n) })
      },
      ...(H(C) && { preservedSegment: { ...C, headUuid: w } })
    }
  };
}
var tn = {
    message_start: !0,
    message_delta: !0,
    message_stop: !0,
    content_block_start: !0,
    content_block_delta: !0,
    content_block_stop: !0
  },
  nn = {
    text_delta: !0,
    input_json_delta: !0,
    citations_delta: !0,
    thinking_delta: !0,
    signature_delta: !0,
    compaction_delta: !0
  };
function et(e) {
  let { event: n } = e;
  if (n.type === "message_start" && n.message?.input_transformations) {
    let { input_transformations: s, ...r } = n.message;
    return { ...e, event: { ...n, message: r } };
  }
  if (n.type === "message_delta" && n.input_transformations) {
    let { input_transformations: s, ...r } = n;
    return { ...e, event: r };
  }
  return e;
}
function Re(e, n) {
  let s = sn(e.event),
    r = Object.entries(s)
      .map(([h, y]) => `${h}=${y}`)
      .join(" ");
  (t(
    `CCRClient: dropping oversize ephemeral stream_event (${r}, ${n} bytes, over the ${re}-byte limit)`,
    { level: "warn" }
  ),
    f("ccr_partial_messages", "oversize_ephemeral_skipped", { ...s, bytes: n }));
}
function sn(e) {
  if (!H(e)) return { event_type: b("other") };
  let { type: n, delta: s, content_block: r } = e,
    h = H(r) ? r.type : void 0;
  return {
    event_type: c(Je(tn, n)),
    ...(n === "content_block_delta" && { delta_type: c(Je(nn, H(s) ? s.type : void 0)) }),
    ...(n === "content_block_start" && { content_block_type: $Ce(h) ? c(h) : b("other") })
  };
}
function Je(e, n) {
  for (let s in e) if (s === n) return s;
  return "other";
}
class Te {
  inflight = null;
  pending = null;
  pendingWaits = !1;
  pendingSince = 0;
  waitTimer = null;
  requeued = null;
  requeuedMetadata = null;
  remembered = {};
  closed = !1;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    if (this.pending && "worker_status" in this.pending && "worker_status" in e) this.drain();
    let n = !("worker_status" in e) && (this.config.waitsForStatus?.(e) ?? !1);
    if (
      ((this.pendingWaits = (this.pending === null || this.pendingWaits) && n !== !1),
      this.pendingWaits && typeof n === "number")
    )
      this.waitTimer ??= setTimeout(() => this.sendWaiting(), n);
    if (this.pending === null) ((this.pendingSince = Date.now()), (this.pending = e));
    else this.pending = he(this.pending, e);
    if ("worker_status" in e) this.requeued = null;
    if (
      ((this.requeuedMetadata &&= tt(this.requeuedMetadata, e)),
      this.remember(e),
      this.config.mergesSameRun?.())
    )
      queueMicrotask(() => void this.drain());
    else this.drain();
  }
  requeueStatus(e) {
    if (this.closed || (this.pending && "worker_status" in this.pending)) return;
    ((this.requeued = e), this.drain());
  }
  requeueMetadata(e) {
    if (this.closed) return;
    ((this.requeuedMetadata = tt(he(this.requeuedMetadata ?? {}, e), this.pending ?? {})),
      this.drain());
  }
  remember(e) {
    if (this.config.remembers) this.remembered = he(this.remembered, e);
  }
  sendWaiting(e = 0) {
    if (this.pendingWaits && (e <= 0 || Date.now() - this.pendingSince >= e))
      ((this.pendingWaits = !1), this.drain());
  }
  close() {
    ((this.pendingWaits = !1),
      this.drain(),
      (this.closed = !0),
      this.clearPending(),
      (this.requeued = null),
      (this.requeuedMetadata = null));
  }
  get unsent() {
    return this.inflight !== null || this.pending !== null;
  }
  async flush() {
    while (!this.closed)
      if (this.inflight) await this.inflight;
      else if (this.pending || this.requeued) ((this.pendingWaits = !1), await this.drain());
      else return !0;
    return !1;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    let e = this.pendingWaits ? null : this.pending,
      n = e ?? this.requeued,
      s = !e;
    if (e) this.clearPending();
    else if (this.requeued) this.requeued = null;
    else if (this.requeuedMetadata) {
      let [[r, h] = [], ...y] = Object.entries(this.requeuedMetadata);
      ((n = r === void 0 ? null : { [r]: h }),
        (this.requeuedMetadata = y.length > 0 ? Object.fromEntries(y) : null));
    }
    if (!n) return;
    this.inflight = this.sendWithRetry(n, s).then(() => {
      if (
        ((this.inflight = null),
        (this.pending || this.requeued || this.requeuedMetadata) && !this.closed)
      )
        this.drain();
    });
  }
  async sendWithRetry(e, n) {
    let s = e,
      r = 0;
    while (!this.closed) {
      if (await this.config.send(s)) return;
      if ((r++, await X(this.retryDelay(r)), this.pending && !this.closed)) {
        if (n) {
          if (!("worker_status" in s) && !this.pendingWaits) {
            this.requeueMetadata(s);
            return;
          }
          if ("worker_status" in s && "worker_status" in this.pending) return;
          continue;
        }
        ((s = he(s, this.pending)), this.clearPending());
      }
    }
  }
  clearPending() {
    if (((this.pending = null), this.waitTimer))
      (clearTimeout(this.waitTimer), (this.waitTimer = null));
  }
  retryDelay(e) {
    let n = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      s = Math.random() * this.config.jitterMs;
    return n + s;
  }
}
function tt(e, n) {
  let s = {};
  for (let [r, h] of Object.entries(e)) {
    let y = Ko(h, (w, S) => !(S in (n[r] ?? {})));
    if (Object.keys(y).length > 0) s[r] = y;
  }
  return Object.keys(s).length > 0 ? s : null;
}
function he(e, n) {
  let s = { ...e };
  for (let [r, h] of Object.entries(n))
    if (
      (r === "external_metadata" || r === "internal_metadata") &&
      s[r] &&
      typeof s[r] === "object" &&
      typeof h === "object" &&
      h !== null
    )
      s[r] = { ...s[r], ...h };
    else s[r] = h;
  return s;
}
var nt = {},
  At = 20000,
  st = 1e4,
  Ct = 15000,
  Pt = 5000,
  It = Pt,
  an = 5000,
  ln = 300000,
  rt = 2000,
  dn = Ct + It + 2 * At,
  un = 5000,
  it = 1.5,
  cn = 3,
  hn = new Set([401, 403, 404, 429]),
  KHt = 100;
function Z(e) {
  return e === 400 || e === 413 || e === 422;
}
var Ue = 1e4,
  ot = 60000,
  be = 1048576,
  pn = 4 * be - 65536,
  fn = 5000,
  mn = 120000,
  _n = 1.5,
  Be = 262144;
function at(e, { maxMs: n, minMs: s = Ue }) {
  let r = Ue + Math.round((e.bytes / be) * (fn / 1000)) * 1000,
    h = e.bytes >= Be && !e.cuttable ? r * _n ** e.retryCount : r;
  return Math.max(s, Math.min(n, Math.round(h)));
}
var vn = new Set(["remote_tool_call", "remote_plumbing_call"]);
function gn(e) {
  return vn.has(Ot(e));
}
var yn = new Set(OEe),
  bn = 256,
  wn = new Set([
    "apply_flag_settings",
    "set_max_thinking_tokens",
    "set_permission_mode",
    "mcp_set_servers",
    "mcp_reconnect",
    "reload_skills"
  ]),
  lt = 1000,
  Sn = 64;
function dt(e) {
  if (!H(e)) return !1;
  return e.type === "control_request"
    ? H(e.request) && wn.has(e.request.subtype)
    : e.type === "control_response";
}
function Ot(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0;
}
function fe(e) {
  let n = E(e);
  if (n) return n;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}
class M1e extends Error {
  reason;
  httpStatus;
  constructor(e, n) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = n;
  }
}
function nPs(e) {
  return e instanceof M1e && e.reason === "worker_register_failed" && !Z(e.httpStatus);
}
var En = 10,
  _Cr = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094
  },
  kn = {
    epoch_conflict: !0,
    superseded_by_worker: !0,
    session_not_active: !0,
    epoch_stale: !0,
    session_not_found: !1,
    token_expired: !1,
    auth_exhausted: !1
  },
  Rn = 3,
  Tn = 10,
  _e = 3,
  Mn = 100;
async function An(e, n) {
  let s = e.body?.getReader(),
    r = new TextDecoder(),
    h = "",
    y = 0;
  for (let w = await s?.read(); w !== void 0 && !w.done; w = await s?.read()) {
    if (((y += w.value.byteLength), y > n)) return (await s?.cancel(), null);
    h += r.decode(w.value, { stream: !0 });
  }
  return { text: h + r.decode(), bytes: y };
}
function Cn(e, n) {
  let s = e.payload?.timestamp;
  return s === void 0 || (typeof s === "string" && s.length <= n);
}
var Pn = 1e4,
  ut = 30000;
function ct(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}
function Me(e) {
  let n = !1,
    s = !1;
  for (let r of e)
    if (r.payload.subtype === "task_notification") n = !0;
    else if (r.payload.subtype === "background_tasks_changed") s = !0;
  return n || s ? { has_terminal_bookend: n, has_level: s } : null;
}
function ve(e) {
  return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647);
}
var Ae = {
    "/worker": "worker_state",
    "/worker/events": "events",
    "/worker/events/delivery": "delivery",
    "/worker/heartbeat": "heartbeat",
    "/worker/internal-events": "internal_events"
  },
  In = 512,
  On = "upgrade_relay_marker";
function xt(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id
  };
}
var xn = p(() =>
    u({
      tool_name: o().refine((e) => !e.startsWith("dialog:")),
      display_tool_name: o().nullish(),
      action_description: o(),
      raw_command: o().nullish(),
      request_id: o(),
      tool_use_id: o().min(1),
      suppressed_request_id: o().nullish()
    })
  ),
  Ft = p(() =>
    yt({
      event_id: o(),
      event_type: o(),
      payload: me(o(), oe()),
      event_metadata: me(o(), oe()).nullish(),
      is_compaction: M(),
      created_at: o(),
      session_agent_id: o().optional()
    })
  ),
  Fn = p(() => u({ data: T(Ft()), next_cursor: o().optional() })),
  Un = p(() =>
    u({
      data: T(
        Ft().extend({ payload: yt({ type: A("agent_metadata") }), session_agent_id: o() })
      ).optional()
    })
  ),
  Bn = p(() => u({ results: T(u({ event_id: o(), duplicate: M() })) }));
function Wn(e) {
  let n = xn().safeParse(e);
  if (!n.success) return;
  let s = n.data,
    r = fAe(s);
  if (r === void 0) return;
  return {
    requestId: r,
    details: xt({
      tool_name: s.tool_name,
      display_tool_name: s.display_tool_name ?? void 0,
      action_description: s.action_description,
      raw_command: s.raw_command ?? void 0,
      request_id: s.request_id,
      tool_use_id: s.tool_use_id
    })
  };
}
function Dn(e) {
  if (e === "pending") return { status: "idle", reason: "get_pending" };
  if (e.readFailed) return { status: "idle", reason: "get_failed" };
  let n = e.external?.pending_action;
  if (n === void 0 || n === null) return { status: "idle", reason: "no_pending_action" };
  let s = Wn(n);
  if (!s) return { status: "idle", reason: "not_reportable" };
  return { status: "requires_action", reason: "park", ...s };
}
function Hn(e, n) {
  if (e === "requires_action") return { reported: e };
  let s = n.external?.pending_actions;
  return {
    reported: e,
    pendingActionOutstanding:
      n.readFailed === !0 ||
      (n.external?.pending_action !== void 0 && n.external.pending_action !== null) ||
      (Array.isArray(s) && s.length > 0)
  };
}
var Nn = p(() =>
    yt({
      max_events: v().nullish(),
      max_age_ms: v().nullish(),
      max_bytes: v().nullish(),
      flush_on_sampling_end: M().nullish(),
      flush_on_assistant: M().nullish(),
      joint_upload: M()
        .nullish()
        .catch(void 0),
      hold_across_model_calls: M()
        .nullish()
        .catch(void 0),
      hold_again: yt({
        soft_age_ms: v().nullish(),
        soft_events: v().nullish(),
        after: T(o()).nullish(),
        never_after_tools: T(o()).nullish(),
        tools_whose_results_wait: T(o()).nullish()
      })
        .nullish()
        .catch(void 0),
      may_wait_types: T(o())
        .nullish()
        .catch(void 0),
      flush_after_tool_names: T(o())
        .nullish()
        .catch(void 0),
      settings_receipts_max_wait_ms: v()
        .nullish()
        .catch(void 0),
      messages_received_waits: M()
        .nullish()
        .catch(void 0),
      receipts_ride_uploads: M()
        .nullish()
        .catch(void 0),
      flush_before_tools_wait_ms: v().nullish(),
      flush_after_tools: o().nullish(),
      must_flush_types: T(o()).nullish(),
      live_twin_types: T(o())
        .nullish()
        .catch(void 0),
      live_only_types: T(o())
        .nullish()
        .catch(void 0),
      transcript_max_age_ms: v()
        .nullish()
        .catch(void 0),
      no_turn_max_age_ms: v()
        .nullish()
        .catch(void 0),
      merge_worker_reports: M()
        .nullish()
        .catch(void 0),
      first_idle_waits_for_work: M()
        .nullish()
        .catch(void 0),
      control_traffic_keeps_hold: M()
        .nullish()
        .catch(void 0),
      empty_checkpoint_keeps_hold: M()
        .nullish()
        .catch(void 0),
      first_turn_holds_each_call: M()
        .nullish()
        .catch(void 0),
      settings_answers_max_wait_ms: v()
        .nullish()
        .catch(void 0),
      init_max_wait_ms: v()
        .nullish()
        .catch(void 0),
      metadata_waits_for_status: T(o())
        .nullish()
        .catch(void 0),
      metadata_never_sent: T(o())
        .nullish()
        .catch(void 0),
      metadata_max_wait_ms: v()
        .nullish()
        .catch(void 0),
      cost_report_max_wait_ms: v()
        .nullish()
        .catch(void 0),
      policy_version: o().nullish()
    })
  ),
  Ln = 50,
  qn = 90,
  Ut = 120000,
  Bt = 60000,
  we = 240000,
  $n = 30000,
  jn = 5000,
  zn = 1000,
  Gn = 256,
  Vn = 2000,
  Kn = 5000,
  Yn = 1048576,
  ht = 32,
  Ce = 32,
  Xn = we,
  Qn = 16;
function ge(e, n) {
  return n === "processed";
}
var Jn = new Set(["apply_flag_settings", "set_max_thinking_tokens", "mcp_set_servers"]),
  Wt = "system/status_requesting_repeat",
  Zn = new Set(["system/task_summary", Wt]),
  pt = new Set([
    "rate_limit_event/allowed",
    "system/task_summary",
    "system/post_turn_summary",
    "system/commands_changed",
    "system/permission_check_status",
    "system/hook_started",
    "system/hook_response",
    "system/informational",
    "system/peer_message_hold",
    "system/permission_denied",
    "system/session_metadata",
    "system/session_title_changed",
    "system/per_turn_effort_changed",
    "system/instruction_size_warning",
    "system/slack_tag_title",
    "system/vcs_state_changed",
    "tool_use_summary",
    "system/task_started_foreground_shell",
    "system/task_notification_foreground_shell"
  ]),
  es = 32,
  Dt = new Set(["post_turn_summary", "recap", "context_usage", "rate_limit_info", "task_summary"]),
  ts = new Set([...Dt, "last_served_model"]),
  ns = 2000,
  ft = 57344,
  ss = 64512,
  rs = /^[A-Za-z0-9._-]{1,16}$/,
  is = 30000,
  os = 2000,
  as = ["none", "write", "all"],
  ls = 64,
  ds = 50,
  us = 5000,
  cs = !0,
  hs = !1,
  ps = 3000,
  fs = 1e4,
  We = (e) => e.ephemeral === !0 || e.payload.type === "keep_alive",
  mt = (e) => We(e) || e.payload.type === "control_response",
  vt = () => !1;
function Qwo() {
  return i.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
var ms = [
    "cumulative_cost_usd",
    "cumulative_input_tokens",
    "cumulative_output_tokens",
    "cumulative_cache_read_tokens",
    "cumulative_cache_write_tokens"
  ],
  Nt = new Set([...ms, "cost_state", "memory_extract_place"]);
function gt(e) {
  return Object.entries(e).filter(
    ([n]) => Nt.has(n) || n === "last_served_model" || n === "worker_permission_mode"
  );
}
function ie(e) {
  return 1 + (e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : 4) + e;
}
function He(e) {
  if (typeof e === "string") return ie(Buffer.byteLength(e));
  if (typeof e === "number") return 9;
  let n = 0;
  if (Array.isArray(e)) for (let s of e) n += ie(He(s));
  else if (H(e)) {
    for (let [s, r] of Object.entries(e))
      if (r !== void 0) n += ie(ie(Buffer.byteLength(s)) + ie(He(r)));
  } else return 2;
  return ie(n);
}
function _s(e) {
  let n = e?.error;
  return n?.type === "not_found_error" && n.resource_type === "client_event";
}
function wt(e, n) {
  return e.toLowerCase() === n.toLowerCase();
}
function vs(e) {
  if (e === 404) return "http_404_unknown_body";
  if (e === 401 || e === 403) return "http_refused";
  if (e === 429) return "http_rate_limited";
  if (e === 501) return "http_not_served";
  return e >= 500 ? "http_server_error" : "http_other";
}
var gs = p(() =>
  u({
    event_id: o(),
    source: A("client"),
    created_at: o(),
    payload: yt({ uuid: o() }),
    sent_by_account_id: o().nullish(),
    device_attestation_status: oe().optional(),
    session_agent_owned: M()
  })
);
function ys(e, n) {
  let s = gs().safeParse(e);
  if (!s.success) return { kind: "unavailable", why: "malformed" };
  let { event_id: r, created_at: h, payload: y } = s.data,
    w = Date.parse(h);
  if (!wt(r, n) || !Number.isFinite(w) || !wt(y.uuid, n))
    return { kind: "unavailable", why: "malformed" };
  return {
    kind: "event",
    event: {
      eventId: n,
      createdAtMs: w,
      sentByAccountId: s.data.sent_by_account_id ?? void 0,
      deviceAttestationStatus: s.data.device_attestation_status,
      sessionAgentOwned: s.data.session_agent_owned,
      payload: y
    }
  };
}
function bCr(e, n) {
  if (e.protocol !== "http:" && e.protocol !== "https:") {
    let r = fhn(e.protocol, "session_url_protocol");
    throw Error(`CCRClient: Expected http(s) URL${r === void 0 ? "" : `, got ${r}`}`);
  }
  let s = e.pathname.replace(/\/$/, "");
  return { sessionBaseUrl: `${e.protocol}//${e.host}${s}`, getAuthHeaders: n };
}
class IN {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  uploadTrim;
  uploadHoldMarker;
  skipPlainTaskProgress;
  servedCallRequestsJumpQueue;
  maxEventPostTimeoutMs;
  urgentRequestIds = new Set();
  eventHoldEnabled;
  launchFlushPolicy;
  processExiting;
  gatesToolCalls;
  toolCallRowGraceMs;
  flushPolicy;
  holdRule;
  settingsRequestIds = new Set();
  waitingAnswers = [];
  waitingAnswersTimer = null;
  lastRateLimitKind;
  seesModelCallBoundaries = !1;
  lastRequestingList;
  turnTookInput = !1;
  toolResultEndsCall = !1;
  liveOnlyRequestingRow;
  turnHold = "open";
  modelTurnEnded = !1;
  modelCallStreamed = !1;
  holdsNoMoreThisTurn = !1;
  newestResponseId;
  unansweredCalls = new Set();
  callsWhoseResultsWait = new Set();
  heldResultNeedsStore = !1;
  pickupBarriers = [];
  pickupTakesTick = !1;
  pickupWaitMs;
  inboundMessageUuids = new Set();
  liveTurnId;
  nextLiveIndex = 0;
  heldShellTaskIds = new Set();
  droppedBeforeLiveTurn = 0;
  lastViewerCheckpointAtMs = 0;
  viewerCheckpointTimer = null;
  holdSwitchedOff = !1;
  shutdownReleased = !1;
  shutdownKeepsClientEvents = !1;
  viewerAbsentReported = !1;
  stopToolCallGate;
  toolCallRows = { client_events: new Map(), internal_events: new Map() };
  toolCallRowWaiters = new Map();
  awaitedToolCalls = new Set();
  transcriptLaneInUse = !1;
  toolCallsWhoseResultReleases = new Set();
  lanesNotAnswering = new Set();
  loggedUnreadableFlushPolicy = !1;
  loggedHoldSwitchedOff = !1;
  loggedTranscriptEnvelopeStrip = !1;
  loggedToolResultBlank = !1;
  loggedMcpImageBlank = !1;
  maxAdvisedIntervalMs;
  beatOnStaleReconnect;
  beatOnReactivation;
  skipRedundantHeartbeats;
  idleTracker;
  unsubscribeIdleTracker;
  probeBeatSpacingMs;
  heartbeatTimer = null;
  heartbeatInFlight = !1;
  lastHeartbeatSentAtMs = 0;
  lastCadenceTickAtMs = 0;
  lastBeatingEventsPostOkAtMs = 0;
  lastEventsAnswerOrPulseAtMs = 0;
  skippedPreviousCadenceBeat = !1;
  lastHeartbeatSuccessAtMs = Date.now();
  heartbeatsSent = 0;
  lastSucceededBeat = 0;
  lastSettledBeat = 0;
  lastHeartbeat429AtMs = 0;
  idleGrantLatched = !1;
  reactivationBeatArmed = !1;
  pendingForcedBeat = !1;
  probeBeatTimer = null;
  pendingBeatTrigger = null;
  closed = !1;
  closeAbort = new AbortController();
  goodbyeFlushed = Promise.resolve();
  leftMidTurn = !1;
  epochSuperseded = !1;
  lastEpochMismatchCause;
  epochMismatchCount = 0;
  consecutiveAuthFailures = 0;
  lastAuthRefreshBadReason = null;
  consecutiveNotFound = 0;
  consecutiveHeartbeatFailures = 0;
  currentState = null;
  reportParkAtInit;
  initExternalMetadata;
  initialWorkerStatus;
  initStateGetOrderingBoundMs;
  startReportsMaxWaitMs;
  startReportsWaitUntilMs = 0;
  firstIdleMayWait = !1;
  firstIdleTimer;
  parkReportedAtInitRequestId = void 0;
  sessionBaseUrl;
  sessionId;
  readSource;
  streamEventBuffer = [];
  streamEventTimer = null;
  firstFrameUpload;
  firstTextFrameUpload;
  firstBlockFrameUpload;
  streamEventBufferedAt = 0;
  streamEventFlushDueAt = 0;
  streamEventFlushIntervalMs = KHt;
  streamEventFirstFlushMs = 0;
  firstDeltaFlushTimer = null;
  firstContentFlushPending = !1;
  parkedRows = [];
  noSubscriberStreamEventFlushIntervalMs = 0;
  noSubscriberUploadHoldMs = 0;
  closingForSuccessor = !1;
  dropUnwatchedStreamEvents = !1;
  lastReportedHasSubscribers;
  lastInboundEventAtMs = Number.NEGATIVE_INFINITY;
  viewerReportedSinceLastFalse = !1;
  lastViewerLeftAtMs = Number.NEGATIVE_INFINITY;
  unwatchedPastGrace = !1;
  hasSubscribersReports = 0;
  streamEventsDroppedUnwatched = 0;
  streamedEphemeralSinceLastAssistant = !1;
  workerState;
  eventUploader;
  workerSocket;
  internalEventUploader;
  ridingRows;
  takenRiders;
  ridesRefused = !1;
  loggedRowsLeftOut = !1;
  internalEventPostWatch;
  rowsAwaitingCompactSummary = new Map();
  rowsAwaitingCompactSummaryAtClose;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  rowsRepeatedAfterCompaction;
  deliveryUploader;
  pendingProcessingAcks = [];
  waitingReceipts = new Map();
  waitingReceiptsTimer;
  messagesInProcessing = new Set();
  resultPostWaits;
  receiptsRide;
  receiptsRideRefused = !1;
  onEpochMismatch;
  lastLineWhen;
  onDurableEventsDropped = void 0;
  onDurableEventsUpload = void 0;
  getAuthHeaders;
  isFirstPartyProvider;
  onDiagnostic;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  nonOriginRuns = new Map();
  heartbeatStreakStartedAtMs = 0;
  heartbeatLostFiredForStreak = !1;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  ownConnectionPool;
  constructor(e, n, s) {
    ((this.lastLineWhen = s?.onEpochMismatch ? "queued" : "now"),
      (this.onEpochMismatch =
        s?.onEpochMismatch ??
        (() => {
          process.exit(1);
        })),
      (this.onHeartbeatLost = s?.onHeartbeatLost),
      (this.readTransport = e),
      (this.workerSocket = s?.workerSocket),
      (this.nonOrigin403Transient = s?.nonOrigin403Transient ?? !1),
      (this.heartbeatIntervalMs = s?.heartbeatIntervalMs ?? At),
      (this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs),
      (this.advertiseHeartbeatProbeSupport = s?.advertiseHeartbeatProbeSupport ?? !1),
      (this.uploadTrim = s?.uploadTrim ?? (() => nt)),
      (this.uploadHoldMarker = () => s?.uploadHoldMarker?.() === !0),
      (this.skipPlainTaskProgress = () => s?.skipPlainTaskProgress?.() === !0),
      (this.servedCallRequestsJumpQueue = () => s?.servedCallRequestsJumpQueue?.() === !0),
      (this.maxEventPostTimeoutMs = s?.maxEventPostTimeoutMs ?? mn),
      (this.eventHoldEnabled = s?.eventHoldEnabled),
      (this.launchFlushPolicy = s?.launchFlushPolicy),
      (this.processExiting = s?.processExiting ?? (() => !1)),
      (this.gatesToolCalls = s?.gatesToolCalls === !0),
      (this.toolCallRowGraceMs = s?.toolCallRowGraceMs ?? os),
      (this.pickupWaitMs = s?.pickupWaitMs ?? jn),
      (this.beatOnStaleReconnect = s?.beatOnStaleReconnect ?? !1),
      (this.idleTracker = s?.idleTracker),
      (this.beatOnReactivation = (s?.beatOnReactivation ?? !1) && this.idleTracker !== void 0),
      (this.skipRedundantHeartbeats = s?.skipRedundantHeartbeats ?? !1),
      (this.probeBeatSpacingMs = s?.probeBeatSpacingMs ?? un),
      (this.heartbeatJitterFraction = s?.heartbeatJitterFraction ?? 0),
      (this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport)),
      (this.getAuthHeaders = s?.getAuthHeaders ?? eW),
      (this.isFirstPartyProvider = s?.isFirstPartyProvider ?? (() => !1)),
      (this.onDiagnostic = s?.onDiagnostic),
      (this.onRequestAuthOk = s?.onRequestAuthOk),
      (this.adoptRefreshedAuth = s?.adoptRefreshedAuth),
      (this.gzipRequestBodyFetch = s?.gzipRequestBodyFetch),
      (this.ownConnectionPool = s?.ownConnectionPool),
      (this.reportParkAtInit = s?.reportParkAtInit ?? !1),
      (this.initExternalMetadata = s?.initExternalMetadata ?? {}),
      (this.initialWorkerStatus = s?.initialWorkerStatus ?? "idle"),
      (this.initStateGetOrderingBoundMs = s?.initStateGetOrderingBoundMs ?? Pn),
      (this.startReportsMaxWaitMs = s?.startReportsMaxWaitMs ?? Vn),
      (this.readSource = {
        ...bCr(n, this.getAuthHeaders),
        isClosed: () => this.closed,
        onConflict: (h) => this.handleEpochMismatch(h),
        ownConnectionPool: this.ownConnectionPool
      }),
      (this.sessionBaseUrl = this.readSource.sessionBaseUrl),
      (this.sessionId = n.pathname.replace(/\/$/, "").split("/").pop() || ""),
      (this.workerState = new Te({
        send: async (h) => {
          let y = await this.request(
            "put",
            "/worker",
            { worker_epoch: this.workerEpoch, ...h },
            "PUT worker"
          );
          if (y.ok) {
            if (h.worker_status !== void 0) g("ccr_worker_state_publish");
            return !0;
          }
          if (Z(y.status)) {
            (Y("warn", "cli_worker_state_4xx_dropped", { status: y.status }),
              this.droppedWorkerStatePatchCount++);
            let w = H(h.internal_metadata) ? h.internal_metadata : {},
              S = H(h.external_metadata) ? h.external_metadata : {},
              { internal_metadata: P, external_metadata: C, ...x } = h,
              O = gt(w),
              I = gt(S);
            if (
              (O.length > 0 && I.length > 0) ||
              (O.length + I.length > 0 &&
                O.length + I.length <
                  Object.keys(x).length + Object.keys(w).length + Object.keys(S).length)
            )
              this.workerState.requeueMetadata({
                ...(O.length > 0 && { internal_metadata: Object.fromEntries(O) }),
                ...(I.length > 0 && { external_metadata: Object.fromEntries(I) })
              });
            if (h.worker_status !== void 0) {
              let D = {
                worker_status: h.worker_status,
                ...("requires_action_details" in h && {
                  requires_action_details: h.requires_action_details
                }),
                ...("reply_degraded" in w && {
                  internal_metadata: { reply_degraded: w.reply_degraded }
                })
              };
              if (Object.keys(h).length > Object.keys(D).length || Object.keys(w).length > 1)
                return (this.workerState.requeueStatus(D), !0);
              f("ccr_worker_state_publish", "state_4xx_dropped");
            }
            return !0;
          }
          return !1;
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
        mergesSameRun: () => this.flushPolicy?.mergeWorkerReports === !0 && this.holdSwitchOn(),
        waitsForStatus: (h) => {
          let y = this.flushPolicy,
            { external_metadata: w = {}, internal_metadata: S = {}, ...P } = h;
          if (
            !y ||
            !this.holdSwitchOn() ||
            Object.keys(P).length > 0 ||
            !H(w) ||
            !H(S) ||
            [...Object.values(w), ...Object.values(S)].includes(null)
          )
            return !1;
          let C = this.startReportsWaitUntilMs - performance.now();
          if (
            y.mergeWorkerReports &&
            C > 0 &&
            this.inboundMessageUuids.size > 0 &&
            !("worker_permission_mode" in S)
          )
            return C;
          if (
            this.currentState !== "running" ||
            !Object.keys(w).every((x) => y.metadataWaitsForStatus.has(x)) ||
            !Object.keys(S).every((x) => y.costReportMaxWaitMs > 0 && Nt.has(x))
          )
            return !1;
          if (Object.keys(S).length > 0) return y.costReportMaxWaitMs;
          return Object.keys(w).length > 0;
        }
      })),
      (this.eventUploader = new uKt({
        maxBatchSize: 100,
        maxBatchBytes: () => Math.min(10 * be, this.workerSocket?.maxBatchBytes() ?? 1 / 0),
        maxQueueSize: 1e5,
        send: this.settlesTakenRiders(async (h, y) => {
          let w = n4r(h);
          if (w > 0)
            t(
              `CCRClient: dropped ${w} repeated-uuid durable event(s) from one /worker/events POST`
            );
          let S = y.urgent ? void 0 : this.ridingRows;
          if (
            S &&
            (h.every((k) => We(k) || k.payload.type === "control_response") ||
              y.bytes + S.bytes > Math.min(pn, this.workerSocket?.maxBatchBytes() ?? 1 / 0))
          )
            (this.giveBackRidingRows(), (S = void 0));
          if (S) ((this.ridingRows = void 0), (this.takenRiders = S));
          let P = !y.urgent && !h.every(mt);
          if (
            P &&
            this.receiptsMayRide() &&
            this.messagesInProcessing.size > 0 &&
            h.some((k) => k.payload.type === "result")
          )
            (await new Promise((k) => {
              ((this.resultPostWaits = k), setImmediate(k));
            }),
              (this.resultPostWaits = void 0),
              this.messagesInProcessing.clear());
          let C =
              P && this.receiptsMayRide()
                ? [...this.waitingReceipts]
                    .filter(([k, U]) => U === "processed" && Kt(k) !== null)
                    .slice(0, Qn)
                    .map(([k]) => k)
                : [],
            x = S ? { ...y, bytes: y.bytes + S.bytes } : y,
            O = at(x, {
              maxMs: this.maxEventPostTimeoutMs,
              minMs: h.some(gn)
                ? ot
                : y.followsUrgent
                  ? Math.min(ot, this.maxEventPostTimeoutMs)
                  : void 0
            });
          this.reportDurableUpload(h, "sending");
          let I = this.actsOnSubscribersReports(),
            D = I || this.onSubscribersReported !== void 0 || S !== void 0 || C.length > 0,
            z = this.hasSubscribersReports,
            N = [];
          for (let k of this.trackedFrameUploads("ackedAtMs"))
            if (h.some((U) => U.payload.uuid === k.uuid)) N.push(k.timing);
          for (let k of N)
            if (k.postedAtMs === void 0)
              ((k.postedAtMs = performance.now()), (k.postedWallMs = Date.now()));
          let R;
          try {
            R = await this.request(
              "post",
              "/worker/events",
              {
                ...this.uploadBody(h, y),
                ...(S && { worker_events: S.rows }),
                ...(C.length > 0 && {
                  delivery_updates: C.map((k) => ({ event_id: k, status: "processed" }))
                })
              },
              "client events",
              { timeout: O, parseBody: D }
            );
          } catch (k) {
            throw (S?.settle(!1), k);
          } finally {
            if (C.length > 0) {
              let k = this.takeWaitingReceipts((U) => C.includes(U));
              if (!R?.ok || R.data?.delivery_updates_applied !== !0) this.queueDeliveryAcks(k);
            }
          }
          let W = R.ok ? R.data?.worker_results : void 0,
            B = Array.isArray(W) && W.length === S?.rows.length;
          S?.settle(B);
          let V = R.ok ? 200 : R.status,
            K = S !== void 0 && R.ok && H(R.data) && W === void 0;
          if ((S || C.length > 0) && !R.ok && Z(V)) {
            if (
              ((R = await this.request(
                "post",
                "/worker/events",
                this.uploadBody(h, y),
                "client events (resent without worker_events and delivery_updates)",
                { timeout: O, parseBody: D }
              )),
              R.ok && V !== 413)
            ) {
              if (((K = S !== void 0), C.length > 0))
                ((this.receiptsRideRefused = !0),
                  Y("warn", "cli_ccr_receipts_ride_turned_off", { status: V }));
            }
          }
          if (K)
            ((this.ridesRefused = !0), Y("warn", "cli_ccr_joint_upload_turned_off", { status: V }));
          else if (S && V === 200 && !B && !this.loggedRowsLeftOut)
            ((this.loggedRowsLeftOut = !0), Y("warn", "cli_ccr_joint_upload_rows_left_out"));
          if (R.ok) {
            for (let U of N) if (U.ackedAtMs === void 0) U.ackedAtMs = performance.now();
            let k = Me(h);
            if (k) g("ccr_task_status_publish", k);
            if (
              (this.noteBeatingEventsPostOk(h),
              this.reportDurableUpload(h, "accepted"),
              this.noteToolCallRowsSettled("client_events", "stored", h),
              I && z === this.hasSubscribersReports)
            )
              this.setHasSubscribers(R.data?.has_subscribers, "no_report");
            this.tellSubscribersReported(R.data?.has_subscribers);
            return;
          }
          if ((this.reportDurableUpload(h, ct(R.status)), Z(R.status))) {
            let k = h.filter((q) => !q.ephemeral),
              U = h.length - k.length,
              j = R.status;
            if (U > 0) {
              if (
                (t(
                  `CCRClient: client event POST rejected (${R.status}) \u2014 dropping ${U} ephemeral event(s), retrying ${k.length} durable event(s)`,
                  { level: "warn" }
                ),
                f("ccr_partial_messages", "ephemeral_dropped_on_4xx", {
                  status: R.status,
                  count: U
                }),
                h.splice(0, h.length, ...k),
                Y("warn", "cli_worker_events_4xx_ephemeral_dropped", {
                  status: R.status,
                  count: U
                }),
                k.length === 0)
              )
                return;
              this.reportDurableUpload(k, "sending");
              let q = await this.request(
                "post",
                "/worker/events",
                this.uploadBody(k, y),
                "client events (durable retry)",
                { timeout: O }
              );
              if (q.ok) {
                let J = Me(k);
                if (J) g("ccr_task_status_publish", J);
                (this.noteBeatingEventsPostOk(k),
                  this.reportDurableUpload(k, "accepted"),
                  this.noteToolCallRowsSettled("client_events", "stored", k));
                return;
              }
              if ((this.reportDurableUpload(k, ct(q.status)), !Z(q.status)))
                throw q.fetchFailed
                  ? this.retrySmaller("client_events", k, y, O, {
                      bytes: k.reduce((J, le) => J + Buffer.byteLength(_(le)), 0)
                    })
                  : new Ont("client event POST failed", q.retryAfterMs);
              j = q.status;
            }
            if (k.length > 0) {
              (this.droppedDurableEventBatches++,
                (this.lastRateLimitKind = void 0),
                this.noteToolCallRowsSettled("client_events", "dropped", k));
              try {
                this.onDurableEventsDropped?.(k, j);
              } catch (q) {
                t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${d(q)}`, {
                  level: "warn"
                });
              }
            }
            Y("warn", "cli_worker_events_4xx_dropped", { status: j, count: k.length });
            let G = Me(k);
            if (G) m("ccr_task_status_publish", "status_events_4xx_dropped", G);
            return;
          }
          if (R.fetchFailed) throw this.retrySmaller("client_events", h, y, O);
          throw new Ont("client event POST failed", R.retryAfterMs);
        }),
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500,
        onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
        onDrained: this.logUploadDrain.bind(this, "client_events"),
        onIdle: () => {
          if ((this.giveBackRidingRows(), this.receiptsRide)) this.sendWaitingReceipts(ge);
        }
      })));
    let r = s?.internalEventUploader;
    ((this.internalEventUploader = new uKt({
      maxBatchSize: 100,
      maxBatchBytes: () =>
        r?.maxBatchBytes ?? Math.min(10 * be, this.workerSocket?.maxBatchBytes() ?? 1 / 0),
      maxQueueSize: 200,
      maxConsecutiveFailures: r?.maxConsecutiveFailures,
      onBatchDropped: (h, y) => {
        (this.droppedInternalEventBatches++,
          Y("warn", "cli_worker_internal_events_give_up_dropped", {
            count: h,
            consecutive_failures: y
          }),
          a("tengu_ccr_internal_events_dropped", {
            reason: b("give_up"),
            count: h,
            consecutive_failures: y
          }));
      },
      send: async (h, y) => {
        let w = this.dropOrphanedHandedOffLines(h);
        if (w > 0) {
          if (
            (Y("warn", "cli_worker_internal_events_handoff_orphans_dropped", { count: w }),
            a("tengu_ccr_internal_events_dropped", { reason: b("handoff_orphan"), count: w }),
            h.length === 0)
          )
            return;
        }
        let S = performance.now(),
          P = at(y, { maxMs: this.maxEventPostTimeoutMs, minMs: r?.requestTimeoutMs }),
          C = this.offerToEventsPost(h, y),
          x =
            C && (await C)
              ? { ok: !0 }
              : await this.request(
                  "post",
                  "/worker/internal-events",
                  this.uploadBody(h, y),
                  "internal events",
                  { timeout: P }
                );
        if ((this.markInternalEventPostWatch((O) => O.noteAttempt(h, S, x.ok)), x.ok)) {
          (this.noteToolCallRowsSettled("internal_events", "stored", h),
            Promise.resolve()
              .then(() => this.onInternalBatchAcked?.(h))
              .catch(() => {}));
          return;
        }
        if (Z(x.status) && w === 0 && y.mayResendInTwo())
          throw (
            a("tengu_ccr_internal_events_refused_will_split", {
              count: h.length,
              status: x.status
            }),
            new Xnr()
          );
        if (Z(x.status)) {
          (this.droppedInternalEventBatches++,
            this.noteRefusedInternalEvents(h),
            this.noteToolCallRowsSettled("internal_events", "dropped", h),
            Y("warn", "cli_worker_internal_events_4xx_dropped", {
              status: x.status,
              count: h.length
            }),
            a("tengu_ccr_internal_events_dropped", {
              reason: b("4xx"),
              count: h.length,
              status: x.status
            }));
          return;
        }
        if (x.fetchFailed) throw this.retrySmaller("internal_events", h, y, P);
        throw new Ont("internal event POST failed", x.nonOriginRefusal ? ut : x.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: ut,
      jitterMs: 500,
      holdMaxItems: 50,
      gatherTick: !0,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
      onDrained: this.logUploadDrain.bind(this, "internal_events")
    })),
      (this.deliveryUploader = new uKt({
        maxBatchSize: 64,
        maxQueueSize: 64,
        send: async (h) => {
          let y = await this.request(
            "post",
            "/worker/events/delivery",
            {
              worker_epoch: this.workerEpoch,
              updates: h.map((w) => ({ event_id: w.eventId, status: w.status }))
            },
            "delivery batch"
          );
          if (y.ok) return;
          if (Z(y.status)) {
            (Y("warn", "cli_worker_delivery_4xx_dropped", { status: y.status, count: h.length }),
              this.droppedDeliveryAckBatches++);
            return;
          }
          throw new Ont("delivery POST failed", y.retryAfterMs);
        },
        baseDelayMs: 500,
        maxDelayMs: 30000,
        jitterMs: 500
      })),
      this.setStreamEventFlushIntervalMs(s?.streamEventFlushIntervalMs),
      this.setStreamEventFirstFlushMs(s?.streamEventFirstFlushMs),
      this.setNoSubscriberStreamEventFlushIntervalMs(s?.noSubscriberStreamEventFlushIntervalMs),
      this.setNoSubscriberUploadHoldMs(s?.noSubscriberUploadHoldMs),
      this.setDropUnwatchedStreamEvents(s?.dropUnwatchedStreamEvents),
      e.setOnEvent((h) => {
        if (this.processExiting() && Le(h)) return;
        (this.noteSettingsRequest(h.payload),
          this.reportDelivery(
            h.event_id,
            "received",
            H(h.payload) && h.payload.type === "user" && typeof h.payload.uuid === "string"
              ? h.payload.uuid
              : void 0,
            {
              controlTraffic: dt(h.payload),
              settingsRequest:
                H(h.payload) &&
                h.payload.type === "control_request" &&
                H(h.payload.request) &&
                Jn.has(h.payload.request.subtype)
            }
          ));
      }),
      e.setOnHeartbeatProbe(() => {
        (this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe"));
      }),
      e.setOnCheckpointRequest(() => this.checkpointForViewer("watcher")),
      e.setOnReconnected(() => {
        if ((this.resyncAfterReconnect(), s?.onStreamReconnected?.(), this.holdsAcrossModelCalls()))
          this.checkpointForViewer("reconnect");
      }),
      (this.unsubscribeIdleTracker = this.beatOnReactivation
        ? this.idleTracker?.onActivity(() => this.sendReactivationBeat())
        : void 0));
  }
  maxAdvisedIntervalFor(e) {
    return e ? Math.floor(ac / (1 + this.heartbeatJitterFraction)) : ln;
  }
  setFeatureGatedOptions({
    advertiseHeartbeatProbeSupport: e,
    beatOnStaleReconnect: n,
    beatOnReactivation: s,
    skipRedundantHeartbeats: r
  }) {
    ((this.advertiseHeartbeatProbeSupport = e),
      (this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(e)),
      (this.beatOnStaleReconnect = n),
      (this.skipRedundantHeartbeats = r));
    let h = s && this.idleTracker !== void 0;
    if (h !== this.beatOnReactivation)
      ((this.beatOnReactivation = h),
        this.unsubscribeIdleTracker?.(),
        (this.unsubscribeIdleTracker =
          h && !this.closed
            ? this.idleTracker?.onActivity(() => this.sendReactivationBeat())
            : void 0));
  }
  async initialize(e) {
    let n = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new M1e("no_auth_headers");
    if (e === void 0) e = Qwo();
    if (isNaN(e)) throw new M1e("missing_epoch");
    this.workerEpoch = e;
    let s = this.getWorkerState(),
      r = await Promise.race([
        s.then(
          (W) => W.metadata,
          () => ({ external: null, internal: null, readFailed: !0 })
        ),
        X(this.initStateGetOrderingBoundMs).then(() => "pending")
      ]),
      h = this.reportParkAtInit ? Dn(r) : void 0,
      y =
        this.eventHoldEnabled?.() === !0
          ? (this.flushPolicy ?? Et(this.launchFlushPolicy))?.metadataNeverSent
          : void 0,
      w = {
        ...this.initExternalMetadata,
        ...Object.fromEntries(Array.from(y ?? [], (W) => [W, null]))
      },
      S = {
        worker_status: "idle",
        worker_epoch: this.workerEpoch,
        external_metadata: { ...w, task_summary: null }
      },
      P =
        h === void 0
          ? {
              worker_status: this.initialWorkerStatus,
              worker_epoch: this.workerEpoch,
              external_metadata: {
                ...w,
                pending_action: null,
                pending_actions: null,
                task_summary: null
              }
            }
          : h.status === "requires_action"
            ? { ...S, worker_status: "requires_action", requires_action_details: h.details }
            : S,
      C = { ok: !1 },
      x = new Set(),
      O = 10,
      I = 0;
    for (let W = 1; W <= O; W++) {
      if (this.closed) break;
      if (
        ((I = W),
        (C = await this.request("put", "/worker", P, "PUT worker (init)")),
        C.ok || this.closed)
      )
        break;
      if (C.reason) x.add(C.reason);
      if (
        (this.onDiagnostic?.(
          `PUT /worker failed (${C.reason ?? "unknown"}) attempt=${W}/${O}, ${Math.round((Date.now() - n) / 1000)}s elapsed`,
          "warn",
          "worker_registration_attempt_failed"
        ),
        Z(C.status))
      ) {
        if (h?.status === "requires_action") {
          ((h = { status: "idle", reason: "park_rejected" }), (P = S), W--);
          continue;
        }
        break;
      }
      if (W < O) {
        let B = Math.min(500 * 2 ** (W - 1), 30000) + Math.random() * 500;
        await X(B);
      }
    }
    if (!C.ok) {
      if (!this.closed)
        (Y("error", "cli_worker_init_put_retries_exhausted"),
          this.onDiagnostic?.(
            `PUT /worker retries exhausted: ${I} attempts over ${Math.round((Date.now() - n) / 1000)}s, errors=[${[...x].join(",") || "unknown"}]`,
            "warn",
            "worker_registration_gave_up"
          ));
      throw new M1e("worker_register_failed", C.status);
    }
    ((this.currentState = h?.status ?? this.initialWorkerStatus),
      (this.startReportsWaitUntilMs =
        this.currentState === "idle" ? performance.now() + this.startReportsMaxWaitMs : 0),
      (this.firstIdleMayWait = this.currentState === "running"));
    let { worker_epoch: D, ...z } = P;
    if ((this.workerState.remember(z), this.applyUploadHold("idle"), !this.flushPolicy))
      this.takeUpFlushPolicy(void 0);
    if (
      ((this.parkReportedAtInitRequestId = h?.status === "requires_action" ? h.requestId : void 0),
      this.startHeartbeat(),
      !this.closed)
    ) {
      if (
        (r7s(() => {
          this.writeEvent({ type: "keep_alive" });
        }),
        this.gatesToolCalls)
      )
        this.stopToolCallGate = tYs((W) => this.gateToolCall(W));
    }
    if (
      (t(`CCRClient: initialized, epoch=${this.workerEpoch}`),
      Y("info", "cli_worker_lifecycle_initialized", {
        epoch: this.workerEpoch,
        duration_ms: Date.now() - n,
        reported_status: this.currentState
      }),
      Dr("worker_init_ms", Date.now() - n, n - performance.timeOrigin),
      h)
    )
      a("tengu_ccr_init_park_report", { reported: c(h.status), reason: c(h.reason) });
    let { metadata: N, durationMs: R } = await s;
    if (!this.closed)
      Y("info", "cli_worker_state_restored", {
        duration_ms: R,
        had_state: N.external !== null || N.internal !== null,
        read_failed: N.readFailed === !0
      });
    return h ? { ...N, initParkReport: Hn(h.status, N) } : N;
  }
  async getWorkerState(e = "worker_state", n = !1) {
    let s = Date.now(),
      r = this.getAuthHeaders();
    if (Object.keys(r).length === 0)
      return {
        metadata: { external: null, internal: null, readFailed: !0 },
        projectsAssertion: void 0,
        durationMs: 0
      };
    let h = await IN.getWithRetry(
      this.readSource,
      `${this.sessionBaseUrl}/worker${Tt(n)}`,
      r,
      e,
      void 0,
      void 0,
      { signal: this.closeAbort.signal }
    );
    return {
      metadata: {
        external: h?.worker?.external_metadata ?? null,
        internal: h?.worker?.internal_metadata ?? null,
        ...(h === null && { readFailed: !0 })
      },
      projectsAssertion: Mt(h),
      durationMs: Date.now() - s
    };
  }
  get currentWorkerEpoch() {
    return this.workerEpoch;
  }
  readOwnClientEvent(e) {
    return IN.readOwnClientEventFrom(this.readSource, e);
  }
  static async readOwnClientEventFrom(e, n) {
    let s = `${e.sessionBaseUrl}/worker/events/${encodeURIComponent(n.toLowerCase())}`,
      r = { kind: "unavailable", why: "network" };
    for (let h = 1; h <= _e; h++) {
      let y;
      try {
        y = e.getAuthHeaders();
      } catch {
        return { kind: "unavailable", why: "no_auth_headers" };
      }
      if (Object.keys(y).length === 0) return { kind: "unavailable", why: "no_auth_headers" };
      let w;
      try {
        w = await A9n(
          s,
          {
            headers: {
              ...y,
              "anthropic-version": "2023-06-01",
              "anthropic-client-platform": py(),
              "User-Agent": Ds()
            },
            signal: AbortSignal.timeout(1e4),
            ...oa({ url: s })
          },
          e.ownConnectionPool
        );
      } catch {
        r = { kind: "unavailable", why: "network" };
      }
      if (w !== void 0) {
        let S = await w.json().catch(() => {
          return;
        });
        if (w.ok) return ys(S, n);
        if (w.status === 404 && _s(S)) return { kind: "absent" };
        if (((r = { kind: "unavailable", why: vs(w.status) }), w.status < 500 || w.status === 501))
          return r;
      }
      if (h < _e) await X(Math.min(500 * 2 ** (h - 1), 4000) + Math.random() * 500);
    }
    return r;
  }
  async readProjectsBinding() {
    let { metadata: e, projectsAssertion: n } = await this.getWorkerState("projects_binding", !0);
    return e.readFailed ? { read: !1 } : { read: !0, assertion: n };
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata;
  }
  static async readProjectsBindingFor(e, n) {
    let s = bCr(e, n);
    if (Object.keys(n()).length === 0) return { read: !1 };
    let r = await IN.getWithRetry(
      s,
      `${s.sessionBaseUrl}/worker${Tt(!0)}`,
      n(),
      "projects_binding"
    );
    return r === null ? { read: !1 } : { read: !0, assertion: Mt(r) };
  }
  request(e, n, s, r, h = {}) {
    return this.sendRequest(e, n, s, r, h);
  }
  async sendRequest(
    e,
    n,
    s,
    r,
    {
      timeout: h = Ue,
      parseBody: y = !1,
      countTowardEscalation: w = !0,
      signal: S,
      onLateSocketAnswer: P
    }
  ) {
    let C = this.getAuthHeaders();
    if (Object.keys(C).length === 0) return { ok: !1, reason: "no_auth_headers" };
    let x = `${this.sessionBaseUrl}${n}`,
      O = S ? Ts(S, { timeoutMs: h, refTimer: !0 }) : void 0,
      I = !1;
    try {
      let D = {
          method: e.toUpperCase(),
          headers: {
            ...C,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": py(),
            "User-Agent": Ds()
          },
          body: _(s),
          signal: O?.signal ?? AbortSignal.timeout(h),
          ...oa({ url: x })
        },
        z = performance.now(),
        N = S
          ? void 0
          : n === "/worker/heartbeat"
            ? this.workerSocket?.beat(D.body, h, (U) => P?.(U))
            : this.workerSocket?.carry(n, D.body, h),
        R = N && (await N);
      if (N && !R) {
        if (n === "/worker/heartbeat" && this.closed) return { ok: !1, reason: "closed" };
        let U = {};
        try {
          U = this.getAuthHeaders();
        } catch (j) {
          t(
            `CCRClient: could not read credentials again for a request the worker socket handed to POST: ${d(j)}`,
            { level: "warn" }
          );
        }
        if (Object.keys(U).length > 0) {
          let j = D.headers;
          for (let G of Object.keys(C)) delete j[G];
          Object.assign(j, U);
        }
        D.signal = AbortSignal.timeout(
          n === "/worker/heartbeat" ? Math.max(0, h - (performance.now() - z)) : h
        );
      }
      let W =
        R ??
        (this.gzipRequestBodyFetch
          ? await this.gzipRequestBodyFetch(x, D, (U) => A9n(x, U, this.ownConnectionPool))
          : await A9n(x, D, this.ownConnectionPool));
      if (((I = !0), W.ok)) {
        ((this.consecutiveAuthFailures = 0),
          (this.consecutiveNotFound = 0),
          this.reportNonOriginRun("onCleared", Ae[n]),
          this.nonOriginRuns.delete(Ae[n]));
        for (let U of this.nonOriginRuns.values()) U.othersPassed = !0;
        if (y)
          try {
            return { ok: !0, data: await W.json() };
          } catch {
            return { ok: !0 };
          }
        return (await gK(W), { ok: !0 });
      }
      let B;
      if (W.status === 409 && !this.closed) B = await Ie(W);
      else await gK(W);
      if (this.closed) return { ok: !1, status: W.status, reason: `http_${W.status}` };
      if (W.status === 409) this.handleEpochMismatch(B);
      if (W.status === 404 && w) {
        if ((this.consecutiveNotFound++, this.consecutiveNotFound >= Rn))
          (t(
            `CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`,
            { level: "error" }
          ),
            Y("error", "cli_worker_session_not_found", void 0, this.lastLineWhen),
            this.onDiagnostic?.(
              `${this.consecutiveNotFound} consecutive 404s on ${n} \u2014 session gone, exiting`,
              "warn",
              "session_not_found"
            ),
            this.escalateEpochMismatch("session_not_found"));
      }
      let V = W.status !== 403 ? void 0 : R ? "origin" : zGt((U) => W.headers.get(U)),
        K = this.nonOrigin403Transient,
        k = K !== !1 && wKe(V);
      if (k && typeof K === "object") {
        let U = Ae[n],
          j = performance.now(),
          G = this.nonOriginRuns.get(U) ?? {
            sinceMs: j,
            refusals: 0,
            windowsSpent: 0,
            othersPassed: !1
          };
        if ((this.nonOriginRuns.set(U, G), G.refusals++, (k = j - G.sinceMs < K.windowMs), k))
          try {
            K.onRefused(U);
          } catch (q) {
            t(`CCRClient: onRefused threw: ${d(q)}`, { level: "error" });
          }
        else if (j - G.sinceMs >= (G.windowsSpent + 1) * K.windowMs)
          (G.windowsSpent++, this.reportNonOriginRun("onWindowSpent", U));
      }
      if (W.status === 401 || W.status === 403) {
        let U = od(),
          j = U ? m0(U) : null;
        if (j !== null && j * 1000 < Date.now())
          (t(
            `CCRClient: session_token expired (exp=${new Date(j * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`,
            { level: "error" }
          ),
            Y("error", "cli_worker_token_expired_no_refresh", void 0, this.lastLineWhen),
            this.onDiagnostic?.(
              `session_token expired (exp=${new Date(j * 1000).toISOString()}) \u2014 no refresh delivered, exiting`,
              "warn",
              "token_expired"
            ),
            this.escalateEpochMismatch("token_expired"));
        if (w && !k) {
          if ((this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= En))
            (t(
              `CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`,
              { level: "error" }
            ),
              Y("error", "cli_worker_auth_failures_exhausted", void 0, this.lastLineWhen),
              this.onDiagnostic?.(
                `${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${W.status}) with valid-looking token \u2014 exiting`,
                "warn",
                "auth_exhausted"
              ),
              this.escalateEpochMismatch("auth_exhausted"));
        }
      }
      if (
        (t(`CCRClient: ${r} returned ${W.status}`, { level: "warn" }),
        Y("warn", "cli_worker_request_failed", {
          method: e,
          path: n,
          status: W.status,
          ...(V !== void 0 && { source: V })
        }),
        W.status === 429)
      ) {
        let U = W.headers.get("retry-after"),
          j = U ? parseInt(U, 10) : NaN;
        if (!isNaN(j) && j >= 0)
          return { ok: !1, retryAfterMs: j * 1000, status: W.status, reason: `http_${W.status}` };
      }
      return {
        ok: !1,
        status: W.status,
        reason: `http_${W.status}`,
        ...(k && { nonOriginRefusal: k })
      };
    } catch (D) {
      (t(`CCRClient: ${r} failed: ${d(D)}`, { level: "warn" }),
        Y("warn", "cli_worker_request_error", { method: e, path: n, error_code: fe(D) }));
      let z = `fetch_failed:${fe(D)}`;
      return I ? { ok: !1, reason: z } : { ok: !1, fetchFailed: !0, reason: z };
    } finally {
      O?.cleanup();
    }
  }
  reportNonOriginRun(e, n) {
    let s = this.nonOriginRuns.get(n);
    if (s === void 0 || typeof this.nonOrigin403Transient !== "object") return;
    let r = Math.round(performance.now() - s.sinceMs),
      { unsentClientEvents: h, unsentInternalEvents: y } = this.uploadBacklog();
    t(
      `CCRClient: ${n} ${e === "onCleared" ? "accepted again" : "still refused"} after ${r}ms of non-origin 403s (${s.refusals} refusals)`,
      { level: "warn" }
    );
    try {
      this.nonOrigin403Transient[e]({
        lane: n,
        refusals: s.refusals,
        runMs: r,
        windowsSpent: s.windowsSpent,
        othersPassed: s.othersPassed,
        backlog: h + y
      });
    } catch (w) {
      t(`CCRClient: ${e} threw: ${d(w)}`, { level: "error" });
    }
  }
  reportState(e, n) {
    clearTimeout(this.firstIdleTimer);
    let s = this.firstIdleMayWait;
    if (((this.firstIdleMayWait = !1), e === this.currentState && !n)) return;
    let r = this.parkReportedAtInitRequestId;
    if (
      ((this.parkReportedAtInitRequestId = void 0),
      r !== void 0 &&
        e === "requires_action" &&
        this.currentState === "requires_action" &&
        fAe(n) === r)
    )
      return;
    if (e === "idle") (this.openPickupBarriers(this.pickupBarriers.length), this.openTurn());
    if (
      e === "idle" &&
      s &&
      this.flushPolicy?.firstIdleWaitsForWork === !0 &&
      this.holdSwitchOn() &&
      this.inboundMessageUuids.size > 0
    ) {
      (Y("info", "cli_ccr_first_idle_kept_back"),
        (this.firstIdleTimer = setTimeout(() => {
          (Y("info", "cli_ccr_first_idle_sent_late"), this.reportState("idle"));
        }, this.startReportsMaxWaitMs)));
      return;
    }
    ((this.currentState = e),
      (this.startReportsWaitUntilMs = 0),
      this.workerState.enqueue({
        worker_status: e,
        requires_action_details: n ? xt(n) : null,
        internal_metadata: { reply_degraded: aPs() }
      }),
      this.applyUploadHold(e === "running" ? "idle" : e));
  }
  reportMetadata(e) {
    let n = this.flushPolicy?.metadataNeverSent,
      s = n?.size && this.holdSwitchOn() ? Ko(e, (r, h) => r === null || !n.has(h)) : e;
    if (s !== e && Object.keys(s).length === 0) return;
    this.workerState.enqueue({ external_metadata: bs(s) });
  }
  reportInternalMetadata(e) {
    this.workerState.enqueue({ internal_metadata: e });
  }
  handleEpochMismatch(e) {
    let n = e ?? "epoch_conflict",
      s = e ?? "unattributed";
    (t(`CCRClient: Epoch mismatch (409, reason=${s}), shutting down`, { level: "error" }),
      Y(
        "error",
        n === "epoch_stale"
          ? "cli_worker_epoch_stale"
          : n === "session_not_active"
            ? "cli_worker_session_not_active"
            : "cli_worker_epoch_mismatch",
        { reason: s },
        this.lastLineWhen
      ));
    let r =
      n === "epoch_stale"
        ? "stale registration (no live successor)"
        : n === "session_not_active"
          ? "session archived or no longer active"
          : n === "superseded_by_worker"
            ? "superseded by a newer worker"
            : "unattributed conflict, treated as superseded";
    (this.onDiagnostic?.(
      `worker epoch mismatch (409) reason=${s} epoch=${this.workerEpoch} \u2014 ${r}, exiting`,
      "warn",
      n
    ),
      this.escalateEpochMismatch(n));
  }
  escalateEpochMismatch(e) {
    return (
      (this.lastEpochMismatchCause = e),
      this.epochMismatchCount++,
      (this.epochSuperseded = !0),
      this.onEpochMismatch(e)
    );
  }
  startHeartbeat() {
    if ((this.stopHeartbeat(), this.closed)) return;
    let e = () => {
        let s = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(n, this.heartbeatIntervalMs + s);
      },
      n = () => {
        let s = this.lastCadenceTickAtMs;
        if (((this.lastCadenceTickAtMs = Date.now()), this.canSkipCadenceBeat(s)))
          ((this.skippedPreviousCadenceBeat = !0),
            this.idleTracker?.sampleIdleSeconds(),
            t("CCRClient: Heartbeat skipped (events beat)"));
        else this.sendHeartbeat();
        if (this.heartbeatTimer === null) return;
        if (
          this.holdsAcrossModelCalls() &&
          this.turnHold === "whole" &&
          i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES &&
          Dwt() &&
          this.lastCadenceTickAtMs - this.lastEventsAnswerOrPulseAtMs >= $n
        )
          ((this.lastEventsAnswerOrPulseAtMs = this.lastCadenceTickAtMs),
            this.writeEvent({ type: "keep_alive" }));
        e();
      };
    ((this.lastCadenceTickAtMs = Date.now()), e());
  }
  noteBeatingEventsPostOk(e) {
    if (
      ((this.lastEventsAnswerOrPulseAtMs = Date.now()),
      !this.workerSocket?.isTransport() && e.some((n) => !n.ephemeral))
    )
      this.lastBeatingEventsPostOkAtMs = Date.now();
  }
  canSkipCadenceBeat(e) {
    let n = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
    if (
      !this.skipRedundantHeartbeats ||
      this.closed ||
      this.lastBeatingEventsPostOkAtMs < e ||
      this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs ||
      this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > n * it ||
      this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs ||
      this.isIdleAdvised() ||
      this.consecutiveHeartbeatFailures > 0 ||
      this.skippedPreviousCadenceBeat
    )
      return !1;
    let s = n * 2;
    return this.clampToTokenLifetime(s) >= s;
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = null));
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer) (clearTimeout(this.probeBeatTimer), (this.probeBeatTimer = null));
  }
  async releaseLease({ drained: e = !1 } = {}) {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    try {
      let n = await this.request(
        "post",
        "/worker/heartbeat",
        {
          session_id: this.sessionId,
          worker_epoch: this.workerEpoch,
          release_lease: !0,
          ...(e && { drained: !0 })
        },
        "POST worker/heartbeat (release)",
        { timeout: rt, countTowardEscalation: !1 }
      );
      if (n.ok) g("ccr_worker_lease_release");
      else if (n.status !== 409)
        f("ccr_worker_lease_release", n.status !== void 0 ? `http_${n.status}` : "send_failed");
    } catch (n) {
      (l(n), f("ccr_worker_lease_release", "send_threw"));
    }
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      (Y("info", "cli_worker_goodbye_skipped_mid_turn"), (this.leftMidTurn = !0));
      return;
    }
    this.goodbyeFlushed = this.request(
      "put",
      "/worker",
      { worker_epoch: this.workerEpoch, connection_status: "disconnected" },
      "PUT worker (goodbye)",
      { timeout: rt, countTowardEscalation: !1 }
    )
      .then((e) => {
        if (e.ok) g("ccr_worker_goodbye");
        else if (e.status !== 409)
          f("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed");
      })
      .catch(() => {
        f("ccr_worker_goodbye", "send_threw");
      });
  }
  heartbeatNow(e = "probe") {
    if (this.closed) return;
    if (
      e === "probe"
        ? this.pendingBeatTrigger === "reactivate"
        : e === "reactivate" && this.pendingBeatTrigger === "probe"
    )
      this.restoreReactivationArm();
    if (
      e === "probe" ||
      this.pendingBeatTrigger === null ||
      (e === "reactivate" && this.pendingBeatTrigger !== "probe")
    )
      this.pendingBeatTrigger = e;
    if (this.heartbeatInFlight) {
      this.pendingForcedBeat = !0;
      return;
    }
    let s = Date.now() - this.lastHeartbeatSentAtMs;
    if (s < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        ((this.probeBeatTimer = null), this.refireForcedBeat());
      }, this.probeBeatSpacingMs - s);
      return;
    }
    let r = this.pendingBeatTrigger ?? e;
    ((this.pendingBeatTrigger = null), this.clearProbeBeatTimer(), this.sendHeartbeat(r));
  }
  refireForcedBeat() {
    let e = this.pendingBeatTrigger ?? "probe";
    if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
      ((this.pendingBeatTrigger = null), this.clearProbeBeatTimer());
      return;
    }
    if (e === "reactivate") {
      if ((this.restoreReactivationArm(), !this.reactivationBeatWanted())) {
        ((this.pendingBeatTrigger = null), this.clearProbeBeatTimer());
        return;
      }
      this.reactivationBeatArmed = !1;
    }
    this.heartbeatNow(e);
  }
  reactivationBeatWanted() {
    return (
      this.beatOnReactivation &&
      this.reactivationBeatArmed &&
      this.isIdleAdvised() &&
      Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs
    );
  }
  restoreReactivationArm() {
    this.reactivationBeatArmed = this.idleGrantLatched;
  }
  armReactivationIfEarned(e, n) {
    if (this.beatOnReactivation && e !== void 0 && e >= n) this.reactivationBeatArmed = !0;
  }
  sendReactivationBeat() {
    if (!this.reactivationBeatWanted()) return;
    ((this.reactivationBeatArmed = !1), this.heartbeatNow("reactivate"));
  }
  isIdleAdvised() {
    return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched;
  }
  applyShorterIntervalNow(e) {
    if (e >= this.heartbeatIntervalMs) return;
    if (((this.heartbeatIntervalMs = e), this.heartbeatTimer !== null)) this.startHeartbeat();
  }
  clampToTokenLifetime(e) {
    if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth) return e;
    let n = od(),
      s = n ? m0(n) : null;
    if (s === null) return e;
    let r = s * 1000 - Date.now() - dn;
    if (r >= e) return e;
    return Math.max(st, r);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let e = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (e < this.heartbeatIntervalMs)
      (Y("info", "cli_heartbeat_interval_updated", { from_ms: this.heartbeatIntervalMs, to_ms: e }),
        this.applyShorterIntervalNow(e));
  }
  renewStream() {
    let e = () => this.readTransport.renewConnection();
    if (this.workerSocket) this.workerSocket.whenQuiet(e);
    else e();
  }
  resyncAfterReconnect() {
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return;
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale");
  }
  staleReconnectBeatWanted() {
    if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs)
      return !1;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * it) return !1;
    return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs;
  }
  resetHeartbeatStreak() {
    ((this.consecutiveHeartbeatFailures = 0), (this.heartbeatLostFiredForStreak = !1));
  }
  async sendHeartbeat(e) {
    if (this.closed) {
      this.stopHeartbeat();
      return;
    }
    if (
      (this.workerState.sendWaiting(this.holdSwitchOn() ? this.flushPolicy?.metadataMaxWaitMs : 0),
      this.heartbeatInFlight)
    )
      return;
    ((this.heartbeatInFlight = !0), (this.lastHeartbeatSentAtMs = Date.now()));
    let n = this.lastHeartbeatSentAtMs,
      s = ++this.heartbeatsSent,
      r = { succeededLateOnSocket: !1 };
    if (((this.skippedPreviousCadenceBeat = !1), e === "resync_stale"))
      Y("info", "cli_heartbeat_reconnect_stale_beat", {
        gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
        interval_ms: this.heartbeatIntervalMs
      });
    try {
      if (e === "reactivate")
        Y("info", "cli_heartbeat_reactivation_beat", { interval_ms: this.heartbeatIntervalMs });
      let h = this.idleTracker?.sampleIdleSeconds(),
        y = this.advertiseHeartbeatProbeSupport ? h : void 0,
        w = await this.request(
          "post",
          "/worker/heartbeat",
          {
            session_id: this.sessionId,
            worker_epoch: this.workerEpoch,
            ...(this.advertiseHeartbeatProbeSupport && {
              supports_heartbeat_probe: !0,
              current_interval_seconds: Math.round(this.heartbeatIntervalMs / 1000),
              ...(y !== void 0 && { idle_seconds: y })
            })
          },
          "Heartbeat",
          {
            timeout: Math.max(
              an,
              Math.min(Ct, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - Pt)
            ),
            parseBody: !0,
            countTowardEscalation: e === void 0,
            onLateSocketAnswer: (S) => {
              ((r.succeededLateOnSocket = !0), this.takeUpLateBeat(S, n, s, y));
            }
          }
        );
      if (!w.ok && w.reason === "closed") return;
      if (
        ((this.lastSettledBeat = Math.max(this.lastSettledBeat, s)),
        !w.ok && r.succeededLateOnSocket)
      ) {
        if (w.status === 429) this.lastHeartbeat429AtMs = Date.now();
        t(
          "CCRClient: Heartbeat succeeded late on the worker socket; its POST failed, which is not counted as a missed heartbeat"
        );
      }
      if (!w.ok && !r.succeededLateOnSocket) {
        if (e === "probe") m("ccr_heartbeat_probe", "beat_failed");
        else if (e === "resync_stale") m("ccr_reconnect_beat", "beat_failed");
        else if (e === "reactivate") m("ccr_reactivation_beat", "beat_failed");
        if (w.status === 429) {
          if (((this.lastHeartbeat429AtMs = Date.now()), e === "reactivate"))
            this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && w.status !== 429)
          (Y("warn", "cli_heartbeat_idle_reverted_on_failure", { status: w.status }),
            (this.idleGrantLatched = !1),
            (this.reactivationBeatArmed = !1),
            this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs));
        if (
          (this.reclampCurrentIntervalToTokenLifetime(),
          w.status !== void 0 && hn.has(w.status) && !w.nonOriginRefusal)
        ) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (
          (this.consecutiveHeartbeatFailures++,
          !this.heartbeatLostFiredForStreak &&
            this.consecutiveHeartbeatFailures >= cn &&
            Date.now() - this.heartbeatStreakStartedAtMs >=
              this.readTransport.getReadStreamRecentLivenessWindowMs())
        ) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.();
          } catch (S) {
            l(S);
          }
        }
        return;
      }
      if (e === "probe") g("ccr_heartbeat_probe");
      else if (e === "resync_stale") g("ccr_reconnect_beat");
      else if (e === "reactivate") g("ccr_reactivation_beat");
      if (w.ok) (t("CCRClient: Heartbeat sent"), await this.takeUpBeatAnswer(w.data, n, s, y));
    } finally {
      if (((this.heartbeatInFlight = !1), this.pendingForcedBeat && !this.closed))
        ((this.pendingForcedBeat = !1), this.refireForcedBeat());
    }
  }
  async takeUpBeatAnswer(e, n, s, r) {
    let h = () => this.lastSucceededBeat > s;
    if (this.lastSettledBeat <= s) this.resetHeartbeatStreak();
    if (!h()) ((this.lastSucceededBeat = s), (this.lastHeartbeatSuccessAtMs = n));
    if ((this.onRequestAuthOk?.(), !h() && H(e))) this.takeUpFlushPolicy(e.event_flush_policy);
    if (e?.refreshed_auth && this.adoptRefreshedAuth) {
      let S = !1;
      try {
        let P = !1,
          C = this.adoptRefreshedAuth(e.refreshed_auth.expires_in_seconds);
        C.then(
          (I) => {
            if (P && I.adopted)
              ((this.lastAuthRefreshBadReason = null),
                g("ccr_worker_auth_refresh"),
                Y("info", "cli_heartbeat_refreshed_auth_late_adopted"),
                this.renewSocketForNewToken());
          },
          () => {}
        );
        let x = await Pe(C, Math.min(It, this.heartbeatIntervalMs)),
          O;
        if (x === void 0) ((P = !0), (O = { adopted: !1, reason: "adopt_timeout" }));
        else O = x;
        if (
          (Y("info", "cli_heartbeat_refreshed_auth_signal", {
            adopted: O.adopted,
            reason: O.reason,
            expires_in_seconds: e.refreshed_auth.expires_in_seconds
          }),
          O.adopted)
        )
          (g("ccr_worker_auth_refresh"), (this.lastAuthRefreshBadReason = null), (S = !0));
        else if (O.reason && O.reason !== "unchanged" && O.reason !== this.lastAuthRefreshBadReason)
          ((this.lastAuthRefreshBadReason = O.reason), m("ccr_worker_auth_refresh", O.reason));
      } catch {
        if (this.lastAuthRefreshBadReason !== "adopt_threw")
          ((this.lastAuthRefreshBadReason = "adopt_threw"),
            m("ccr_worker_auth_refresh", "adopt_threw"));
        Y("error", "cli_heartbeat_refreshed_auth_adopt_threw");
      }
      if (S) this.renewSocketForNewToken();
    }
    if (h()) return;
    let y = e?.heartbeat_interval_seconds;
    if (typeof y !== "number" || !Number.isFinite(y) || y <= 0) {
      if (this.idleGrantLatched) this.armReactivationIfEarned(r, this.heartbeatIntervalMs / 1000);
      this.reclampCurrentIntervalToTokenLifetime();
      return;
    }
    if (this.advertiseHeartbeatProbeSupport) {
      let S = y * 1000 > this.seedHeartbeatIntervalMs;
      if (S) this.armReactivationIfEarned(r, y);
      else this.reactivationBeatArmed = !1;
      this.idleGrantLatched = S;
    }
    let w = this.clampToTokenLifetime(Math.min(Math.max(y * 1000, st), this.maxAdvisedIntervalMs));
    if (w === this.heartbeatIntervalMs) return;
    if (
      (Y("info", "cli_heartbeat_interval_updated", { from_ms: this.heartbeatIntervalMs, to_ms: w }),
      w < this.heartbeatIntervalMs)
    )
      this.applyShorterIntervalNow(w);
    else this.heartbeatIntervalMs = w;
  }
  async takeUpLateBeat(e, n, s, r) {
    try {
      if (this.closed || !e.ok) return;
      let h = await e.json();
      if (this.closed) return;
      (t("CCRClient: Heartbeat answered late on the worker socket"),
        (this.consecutiveAuthFailures = 0),
        (this.consecutiveNotFound = 0),
        await this.takeUpBeatAnswer(h, n, s, r));
    } catch (h) {
      t(
        `CCRClient: could not act on a heartbeat answer that arrived late on the worker socket: ${d(h)}`,
        { level: "warn" }
      );
    }
  }
  renewSocketForNewToken() {
    if (!this.workerSocket?.isTransport()) return;
    try {
      this.workerSocket.whenQuiet(() => this.readTransport.renewConnection(), !0);
    } catch (e) {
      t(`CCRClient: could not renew the worker socket for a new token: ${d(e)}`, { level: "warn" });
    }
  }
  reportDurableUpload(e, n) {
    if (this.onDurableEventsUpload === void 0) return;
    let s = e.filter((r) => !r.ephemeral);
    if (s.length === 0) return;
    try {
      this.onDurableEventsUpload(s, n);
    } catch (r) {
      t(`CCRClient: onDurableEventsUpload(${n}) threw; the batch's fate is unchanged: ${d(r)}`, {
        level: "warn"
      });
    }
  }
  writeEvent(e) {
    return this.writeEvents([e]);
  }
  trackFirstFrameUpload(e) {
    let n = {};
    return ((this.firstFrameUpload = { uuid: e, timing: n }), n);
  }
  trackFirstTextFrameUpload(e) {
    let n = {};
    return ((this.firstTextFrameUpload = { uuid: e, timing: n }), n);
  }
  trackFirstBlockFrameUpload(e) {
    let n = {};
    return ((this.firstBlockFrameUpload = { uuid: e, timing: n }), n);
  }
  trackedFrameUploads(e) {
    let n = [];
    for (let s of [this.firstFrameUpload, this.firstTextFrameUpload, this.firstBlockFrameUpload])
      if (s && s.timing[e] === void 0) n.push(s);
    return n;
  }
  writeEvents(e, n) {
    let s = e.filter((P) => {
      if (
        P.type === "system" &&
        P.subtype === "task_progress" &&
        P.summary === void 0 &&
        P.workflow_progress === void 0
      )
        return !this.skipPlainTaskProgress();
      if (P.type !== "rate_limit_event") return !0;
      let C = ae(P),
        x =
          C === "rate_limit_event/allowed" &&
          C === this.lastRateLimitKind &&
          P.rate_limit_info.overagePeriodMonthly === void 0 &&
          P.rate_limit_info.overagePeriodChannel === void 0;
      return (
        (this.lastRateLimitKind = C),
        !x || this.currentUploadTrim().rate_limit_repeats !== !0
      );
    });
    if (e.length > 0 && s.length === 0) return Promise.resolve();
    let r = this.flushPolicy?.settingsAnswersMaxWaitMs ?? 0,
      h = this.flushPolicy?.initMaxWaitMs ?? 0;
    if (
      (r > 0 || h > 0) &&
      s.length > 0 &&
      this.holdSwitchOn() &&
      !this.closed &&
      this.pickupBarriers.length === 0
    ) {
      let P = s.map((C) =>
        this.isSettingsAnswer(C)
          ? r
          : (C.type === "system" &&
                "subtype" in C &&
                C.subtype === "init" &&
                !("parent_tool_use_id" in C && C.parent_tool_use_id)) ||
              (C.type === "user" && "isReplay" in C && C.isReplay && this.turnHold === "open")
            ? h
            : 0
      );
      if (P.every((C) => C > 0))
        return (
          this.waitingAnswers.push(...s),
          (this.waitingAnswersTimer ??= setTimeout(
            () => this.sendWaitingAnswers(),
            Math.min(...P)
          )),
          Promise.resolve()
        );
    }
    let y =
        this.waitingAnswers.length > 0 &&
        (s.length === 0 || s.some((P) => P.type !== "stream_event"))
          ? [...this.takeWaitingAnswers(), ...s]
          : s,
      w = this.pickupBarriers.at(-1);
    if (!w) return this.writeEventsNow(y, n);
    let S = Promise.withResolvers();
    if (
      (w.writes.push({ messages: y, opts: n, written: S }),
      this.pickupBarriers.reduce((P, C) => P + C.writes.length, 0) >= zn)
    )
      this.openPickupBarriers(this.pickupBarriers.length);
    return S.promise;
  }
  noteSettingsRequest(e) {
    if (!H(e) || e.type !== "control_request" || typeof e.request_id !== "string" || !dt(e)) return;
    this.settingsRequestIds.add(e.request_id);
    let n = this.settingsRequestIds.values().next().value;
    if (this.settingsRequestIds.size > Sn && n !== void 0) this.settingsRequestIds.delete(n);
  }
  isSettingsAnswer(e) {
    return (
      e.type === "control_response" &&
      e.response.subtype === "success" &&
      this.settingsRequestIds.has(e.response.request_id)
    );
  }
  sendWaitingAnswers() {
    if (this.waitingAnswers.length > 0) this.writeEvents([]);
  }
  takeWaitingAnswers() {
    if (this.waitingAnswersTimer)
      (clearTimeout(this.waitingAnswersTimer), (this.waitingAnswersTimer = null));
    return this.waitingAnswers.splice(0);
  }
  async writeEventsNow(e, n) {
    let s = [],
      r = [],
      h,
      y,
      w = !1,
      S,
      P,
      C = !1,
      x = [],
      O = [],
      I = [],
      D = [];
    for (let N of e) {
      let R = N.type === "stream_event" ? et(N) : N;
      if (R.type === "stream_event" && R.event.type === "message_start" && !R.parent_tool_use_id) {
        if (((this.modelCallStreamed = !0), this.liveTwinTypes()?.size))
          ((R = { ...R }),
            D.push({ frame: R, at: s.length, turnId: this.liveTurnId, index: this.nextLiveIndex }));
      }
      let W = this.noteRequestingRow(R);
      if (W) s.push(this.toClientEvent(W));
      let B = y ? void 0 : this.holdAgainAt(R),
        V = this.turnHold === "open",
        K = this.releaseFor(R, B);
      if (K === "event" && !y) S = ae(R);
      if (
        ((y ??= K),
        (V && K === "round_trip") ||
          R.type === "result" ||
          R.type.startsWith("control_") ||
          (R.type === "system" &&
            "subtype" in R &&
            (R.subtype === "init" || R.subtype === "task_notification")))
      )
        P ??= ae(R);
      if (
        ((this.streamEventFirstFlushMs > 0 && !K) ||
          this.noSubscriberStreamEventFlushIntervalMs > 0 ||
          this.dropUnwatchedStreamEvents ||
          (this.unwatched() && this.currentState === "running")) &&
        this.streamEventFlushIntervalMs > 0 &&
        Rt(R)
      ) {
        this.bufferEphemeral(R);
        continue;
      }
      if (R.type === "stream_event") {
        if (
          ((this.streamedEphemeralSinceLastAssistant = !0),
          R.event.type === "message_stop" &&
            this.holdRule === "served_policy" &&
            this.flushPolicy?.flushOnSamplingEnd)
        ) {
          (this.bufferEphemeral(R), (h ??= this.streamEventBufferedAt), (w = !0));
          let q = this.takeStreamEventBuffer();
          ((y ??= q.release), s.push(...q.events));
          continue;
        }
        if (this.streamEventFlushIntervalMs <= 0) {
          let q = Buffer.byteLength(_(R));
          if (q <= re) s.push({ payload: R, ephemeral: !0 });
          else Re(R, q);
          continue;
        }
        if (
          (this.bufferEphemeral(R),
          R.event.type === "content_block_start" && this.parkedRows.length > 0)
        ) {
          h ??= this.streamEventBufferedAt;
          let q = this.takeStreamEventBuffer();
          ((y ??= q.release), s.push(...q.events));
        }
        continue;
      }
      let k = R.type === "control_request" ? this.toClientEvent(R) : void 0;
      if (
        R.type === "control_request" &&
        k !== void 0 &&
        yn.has(Ot(k)) &&
        this.servedCallRequestsJumpQueue()
      ) {
        if (!this.holdsAcrossModelCalls()) {
          (r.push(k), this.urgentRequestIds.add(R.request_id));
          let q = this.urgentRequestIds.values().next().value;
          if (this.urgentRequestIds.size > bn && q !== void 0) this.urgentRequestIds.delete(q);
          continue;
        }
        C = !0;
      }
      if (R.type === "control_cancel_request" && this.urgentRequestIds.delete(R.request_id)) {
        r.push(this.toClientEvent(R));
        continue;
      }
      if (R.type === "control_cancel_request" && this.holdsAcrossModelCalls()) C = !0;
      if (R.type === "assistant" && this.streamedEphemeralSinceLastAssistant)
        (g("ccr_partial_messages", {
          stream_events_dropped_unwatched: this.streamEventsDroppedUnwatched
        }),
          (this.streamedEphemeralSinceLastAssistant = !1),
          (this.streamEventsDroppedUnwatched = 0));
      if (K === void 0 && this.mayParkTextRow(R)) {
        this.parkedRows.push({ message: R, event: this.toClientEvent(R) });
        continue;
      }
      if (this.streamEventTimer) {
        h ??= this.streamEventBufferedAt;
        let q = this.takeStreamEventBuffer();
        ((y ??= q.release), s.push(...q.events));
      }
      if (this.gatesToolCalls) {
        let q = ne(R);
        if (q.some((J) => this.awaitedToolCalls.has(J))) y ??= "tool_call";
        x.push(...q);
      }
      let U = this.flushPolicy?.flushAfterToolNames;
      if (U && U.size > 0)
        for (let q of ne(R, U))
          (this.toolCallsWhoseResultReleases.add(q), de(this.toolCallsWhoseResultReleases));
      if (this.flushPolicy?.transcriptMaxAgeMs)
        for (let q of ne(R, Es))
          (this.toolCallsWhoseResultReleases.add(q), de(this.toolCallsWhoseResultReleases));
      let j = this.flushPolicy?.holdAgain;
      if (j && R.type === "assistant" && !R.parent_tool_use_id) {
        if (R.message.id !== this.newestResponseId)
          ((this.newestResponseId = R.message.id), this.unansweredCalls.clear());
        for (let q of ne(R)) this.unansweredCalls.add(q);
        if (ne(R, j.neverAfterTools).length > 0) this.holdsNoMoreThisTurn = !0;
        if (j.toolsWhoseResultsWait)
          for (let q of ne(R, j.toolsWhoseResultsWait))
            (this.callsWhoseResultsWait.add(q), de(this.callsWhoseResultsWait));
      }
      if (j && R.type === "user") {
        for (let q of Ne(R.message, "tool_result", "tool_use_id")) this.unansweredCalls.delete(q);
        if (
          j.toolsWhoseResultsWait &&
          !R.parent_tool_use_id &&
          Array.isArray(R.message.content) &&
          R.message.content.some(
            (q) =>
              q.type === "tool_result" &&
              (q.is_error === !0 || !this.callsWhoseResultsWait.has(q.tool_use_id))
          )
        )
          this.heldResultNeedsStore = !0;
      }
      if (this.isLiveTwinRow(R)) O.push(s.length);
      if (
        R.type === "system" &&
        R.subtype === "task_started" &&
        ae(R) === "system/task_started_foreground_shell"
      )
        I.push([s.length, R.task_id]);
      let G = k ?? this.toClientEvent(R);
      if (B === "starts")
        G = {
          ...G,
          payload: {
            ...G.payload,
            live_turn_id: this.liveTurnId,
            live_index: this.nextLiveIndex++,
            emitted_at_ms: Date.now()
          }
        };
      if (
        R.type === "system" &&
        "subtype" in R &&
        R.subtype === "init" &&
        !G.payload.parent_tool_use_id
      )
        ((this.liveTurnId = G.payload.uuid),
          (this.nextLiveIndex = 0),
          this.openTurn(),
          (this.droppedBeforeLiveTurn = this.droppedDurableBatches));
      s.push(G);
    }
    let z = [];
    if (!y && !w) {
      let N = O.filter((R) => {
        let W = s[R];
        return W && !W.historical && this.eventUploader.holdsOnArrival(W);
      });
      if (
        !this.viewerAbsentReported &&
        N.some((R) => Buffer.byteLength(_(s[R]?.payload)) > ft || He(s[R]?.payload) > ss)
      )
        y = "twin_too_large";
      else {
        for (let [R, W] of I) {
          let B = s[R];
          if (B && this.eventUploader.holdsOnArrival(B)) this.heldShellTaskIds.add(W);
        }
        z = N;
        for (let R of N) {
          let W = s[R];
          if (W)
            s[R] = {
              ...W,
              payload: {
                ...W.payload,
                live_turn_id: this.liveTurnId,
                live_index: this.nextLiveIndex++,
                emitted_at_ms: Date.now()
              }
            };
        }
        if (!this.viewerAbsentReported)
          for (let R of N.toReversed()) {
            let W = s[R];
            if (W) s.splice(R, 0, { payload: W.payload, ephemeral: !0 });
          }
      }
    }
    for (let { frame: N, at: R, turnId: W, index: B } of D)
      ((N.live_turn_id = W), (N.live_next_index = B + F(z, (V) => V < R)));
    if (r.length > 0) this.enqueueClientEvents(r, { urgent: !0 });
    if (s.length > 0) {
      if (y) (this.releaseTranscriptLane(y, S, P), (this.heldResultNeedsStore = !1));
      else if (w) y = "sampling_end";
      let N = this.enqueueClientEvents(s, {
        ...(y ? { release: y, releasedBy: S } : { since: h }),
        ...(n?.together && { together: !0 })
      });
      if (this.flushPolicy?.noTurnMaxAgeMs) this.applyUploadHold("reset");
      if (C) this.eventUploader.cutBackoff();
      (await N, this.noteToolCallRows("client_events", x, "queued"));
    } else if (r.length > 0 && y) {
      if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
      (this.releaseTranscriptLane(y, void 0, P), this.releaseClientEvents(y));
    } else if (w) this.releaseClientEvents("sampling_end");
  }
  releaseTranscriptLane(e, n, s) {
    if (this.holdRule !== "served_policy" || !this.flushPolicy?.transcriptMaxAgeMs)
      this.internalEventUploader.release(e, n);
    else if (s !== void 0) this.internalEventUploader.release("event", s);
  }
  releaseFor(e, n) {
    if (e.type === "result") ((this.modelTurnEnded ||= this.turnHold !== "open"), this.openTurn());
    if (
      e.type === "system" &&
      "subtype" in e &&
      e.subtype === "status" &&
      "status" in e &&
      e.status === "requesting"
    ) {
      if (!this.seesModelCallBoundaries)
        ((this.seesModelCallBoundaries = !0), this.applyUploadHold("reset"));
      if (this.holdRule === "served_policy") {
        let s = this.turnHold === "whole" && !n && this.requestingRowMayWait(e);
        if (
          this.turnHold === "open" &&
          this.flushPolicy?.firstTurnHoldsEachCall &&
          !this.modelTurnEnded
        )
          ((this.turnHold = "each_call"), (this.holdsNoMoreThisTurn = !0));
        else if (this.turnHold === "open" || n === "starts") this.turnHold = "whole";
        else if (n === "ends") this.turnHold = "each_call";
        return s ? void 0 : "round_trip";
      }
    }
    if (e.type === "user" && this.toolResultReleases(e.message)) return "tool_result";
    if (this.holdRule === void 0 || this.mayWaitUnderHold(e)) return;
    return "event";
  }
  requestingRowMayWait(e) {
    return this.holdsAcrossModelCalls() && Ss(e) && !this.flushPolicy?.mustFlushTypes.has(e.type);
  }
  holdAgainAt(e) {
    let n = this.flushPolicy?.holdAgain;
    if (
      !n ||
      e.type !== "system" ||
      !("subtype" in e) ||
      e.subtype !== "status" ||
      !("status" in e) ||
      e.status !== "requesting" ||
      !this.holdsAcrossModelCalls() ||
      !this.isLiveTwinRow(e)
    )
      return;
    if (this.holdsNoMoreThisTurn || this.droppedDurableBatches !== this.droppedBeforeLiveTurn)
      return "ends";
    let s = this.requestingRowMayWait(e);
    if (this.unansweredCalls.size > 0) return s ? void 0 : "ends";
    let r = this.eventUploader.held();
    return this.turnHold === "each_call" ||
      !s ||
      this.heldResultNeedsStore ||
      (n.softAgeMs > 0 && r.ageMs >= n.softAgeMs) ||
      (n.softEvents > 0 && r.count >= n.softEvents)
      ? "starts"
      : void 0;
  }
  toolResultReleases(e) {
    if (this.holdRule !== "served_policy") return !1;
    let n = this.flushPolicy?.flushAfterTools === "all";
    return Ne(e, "tool_result", "tool_use_id").some(
      (s) => n || this.toolCallsWhoseResultReleases.has(s)
    );
  }
  gateToolCall(e) {
    let n = this.flushPolicy;
    if (
      !n ||
      (n.flushAfterTools !== "write" && n.flushBeforeToolsWaitMs <= 0) ||
      e.agentId !== void 0 ||
      this.closed ||
      this.eventHoldEnabled === void 0 ||
      this.holdSwitchedOff ||
      !e.mayWrite()
    )
      return;
    if (n.flushAfterTools === "write")
      (this.toolCallsWhoseResultReleases.add(e.toolUseId), de(this.toolCallsWhoseResultReleases));
    let s = this.transcriptLaneInUse ? ["client_events", "internal_events"] : ["client_events"];
    if (
      n.flushBeforeToolsWaitMs <= 0 ||
      this.lanesNotAnswering.size > 0 ||
      e.signal.aborted ||
      s.every((r) => this.toolCallRows[r].get(e.toolUseId) === "stored")
    )
      return;
    return this.awaitToolCallStored(e, s, n.flushBeforeToolsWaitMs);
  }
  async awaitToolCallStored(e, n, s) {
    let r = e.toolUseId,
      h = Date.now(),
      y = Ts(e.signal, { timeoutMs: s, refTimer: !0 });
    this.awaitedToolCalls.add(r);
    let w = this.pickupBarriers.at(-1);
    if (w && !this.toolCallRows.client_events.has(r))
      (this.internalEventUploader.release("tool_call"),
        await Promise.race([w.opened.promise, Fe(y.signal)]));
    let S = Ts(y.signal, { timeoutMs: this.toolCallRowGraceMs, refTimer: !0 }),
      P = !1,
      C = !1;
    try {
      if (
        (this.releaseClientEvents("tool_call"),
        this.internalEventUploader.release("tool_call"),
        await Promise.race([this.toolCallRowReaches("client_events", r, "queued"), Fe(S.signal)]),
        (P = this.toolCallRows.client_events.has(r)),
        (C = S.signal.aborted && !y.signal.aborted),
        P && !this.closed)
      )
        await Promise.race([
          Promise.all(n.map((I) => this.toolCallRowReaches(I, r, "settled"))),
          Fe(y.signal)
        ]);
    } finally {
      (S.cleanup(), y.cleanup(), this.awaitedToolCalls.delete(r));
      for (let I of n) this.toolCallRowWaiters.delete(`${I} ${r}`);
    }
    let O = n.every((I) => this.toolCallRows[I].get(r) === "stored")
      ? "stored"
      : this.closed
        ? "closed"
        : e.signal.aborted
          ? "aborted"
          : n.some((I) => this.toolCallRows[I].get(r) === "dropped")
            ? "dropped"
            : C && !P
              ? "row_never_queued"
              : "timeout";
    if (O === "timeout" || O === "dropped") {
      for (let I of n) if (this.toolCallRows[I].get(r) === "queued") this.lanesNotAnswering.add(I);
    }
    Y(
      O === "stored" || O === "closed" || O === "aborted" ? "info" : "warn",
      "cli_ccr_tool_call_upload_wait",
      {
        outcome: O,
        waited_ms: Date.now() - h,
        limit_ms: s,
        live_view_row: this.toolCallRows.client_events.get(r) ?? "none",
        transcript_row: n.includes("internal_events")
          ? (this.toolCallRows.internal_events.get(r) ?? "none")
          : "lane_unused"
      }
    );
  }
  toolCallRowReaches(e, n, s) {
    let r = this.toolCallRows[e].get(n);
    if (r !== void 0 && (r !== "queued" || s === "queued")) return Promise.resolve();
    return new Promise((h) => {
      let y = `${e} ${n}`,
        w = { until: s, reached: h },
        S = this.toolCallRowWaiters.get(y);
      if (S) S.push(w);
      else this.toolCallRowWaiters.set(y, [w]);
    });
  }
  noteToolCallRows(e, n, s) {
    let r = this.toolCallRows[e];
    for (let h of n) {
      if ((s === "queued" && r.has(h)) || (s === "dropped" && r.get(h) === "stored")) continue;
      (r.set(h, s), de(r));
      let y = `${e} ${h}`,
        w = (this.toolCallRowWaiters.get(y) ?? []).filter((S) => {
          if (S.until === "queued" || s !== "queued") return (S.reached(), !1);
          return !0;
        });
      if (w.length > 0) this.toolCallRowWaiters.set(y, w);
      else this.toolCallRowWaiters.delete(y);
    }
  }
  noteToolCallRowsSettled(e, n, s) {
    if (!this.gatesToolCalls) return;
    if (n === "stored") this.lanesNotAnswering.delete(e);
    this.noteToolCallRows(
      e,
      s.flatMap((r) =>
        ("session_agent_id" in r && r.session_agent_id) || ("ephemeral" in r && r.ephemeral)
          ? []
          : ne(r.payload)
      ),
      n
    );
  }
  mayParkTextRow(e) {
    if (
      e.type !== "assistant" ||
      !this.streamEventTimer ||
      this.lastReportedHasSubscribers === !1 ||
      this.closed ||
      this.isLiveTwinRow(e)
    )
      return !1;
    let n = e.message.content;
    return Array.isArray(n) && n.length > 0 && n.every((s) => s.type === "text");
  }
  liveTwinTypes() {
    return this.holdRule === "served_policy" &&
      this.liveTurnId !== void 0 &&
      this.turnHold !== "open"
      ? this.flushPolicy?.liveTwinTypes
      : void 0;
  }
  isLiveTwinRow(e) {
    let n = this.liveTwinTypes();
    return (
      n !== void 0 &&
      (e.type === "tool_progress"
        ? e.heartbeat === !0
        : !("parent_tool_use_id" in e && e.parent_tool_use_id)) &&
      (e.type !== "user" ||
        (Array.isArray(e.message.content) &&
          e.message.content.every((s) => s.type === "tool_result"))) &&
      (n.has(e.type) || ("subtype" in e && n.has(`${e.type}/${e.subtype}`)))
    );
  }
  takeParkedRows() {
    let e = this.parkedRows.map(({ event: n }) => n);
    return ((this.parkedRows = []), e);
  }
  mayWaitUnderHold(e) {
    if (this.isLiveOnlyRow(e)) return !0;
    if (e.type === "keep_alive" && this.holdRule === "served_policy")
      return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
    if (
      e.type === "control_response" &&
      this.flushPolicy?.controlTrafficKeepsHold &&
      this.holdsAcrossModelCalls()
    )
      return (
        !this.flushPolicy.mustFlushTypes.has(e.type) &&
        this.settingsRequestIds.has(e.response.request_id)
      );
    if (!Zwo(e))
      return (
        this.holdRule === "served_policy" &&
        this.seesModelCallBoundaries &&
        this.turnHold !== "open" &&
        this.flushPolicy?.mayWaitTypes.has(
          e.type === "system" &&
            e.subtype === "task_notification" &&
            this.heldShellTaskIds.has(e.task_id)
            ? "system/task_notification_foreground_shell"
            : ae(e)
        ) === !0 &&
        !this.flushPolicy.mustFlushTypes.has(e.type)
      );
    if (this.holdRule === "no_subscriber_flag" && !hs) return !0;
    if (e.type === "user" && "isReplay" in e && e.isReplay) return !1;
    let n = this.flushPolicy;
    if (!n) return !0;
    if (e.type === "assistant" && n.flushOnAssistant) return !1;
    return !n.mustFlushTypes.has(e.type);
  }
  isLiveOnlyRow(e) {
    return this.holdSwitchOn() && this.flushPolicy?.liveOnlyTypes.has(ae(e)) === !0;
  }
  noteRequestingRow(e) {
    if ("parent_tool_use_id" in e && e.parent_tool_use_id) return;
    if ("resume_reason" in e && e.resume_reason) this.turnTookInput = !0;
    if (e.type === "assistant" || e.type === "user")
      ((this.toolResultEndsCall = e.type === "user" && xe(e.message)),
        (this.liveOnlyRequestingRow = void 0));
    if (e.type !== "system" || !("subtype" in e)) return;
    let n = e.subtype === "status" && "status" in e ? e.status : void 0;
    if (n === "compacting" || e.subtype === "compact_boundary") {
      let h = this.liveOnlyRequestingRow;
      return ((this.liveOnlyRequestingRow = void 0), h);
    }
    if (n !== "requesting") return;
    let s = _("user_message_uuids" in e ? (e.user_message_uuids ?? null) : null),
      r =
        s === this.lastRequestingList &&
        this.toolResultEndsCall &&
        !this.turnTookInput &&
        !this.holdsAcrossModelCalls() &&
        this.holdSwitchOn() &&
        this.flushPolicy?.liveOnlyTypes.has(Wt) === !0;
    ((this.lastRequestingList = s),
      (this.toolResultEndsCall = !1),
      (this.liveOnlyRequestingRow = r ? e : void 0));
    return;
  }
  toClientEvent(e) {
    let n = D7s(e, ft),
      s = n.historical === !0,
      r = Rt(e) || Lhn(n) || this.isLiveOnlyRow(e) || e === this.liveOnlyRequestingRow,
      h =
        n.type === "user" && n.is_virtual !== !0
          ? this.uploadedToolResult(n.tool_use_result, n.message)
          : n.tool_use_result;
    return {
      payload: {
        ...n,
        ...(h !== n.tool_use_result && { tool_use_result: h }),
        uuid: typeof n.uuid === "string" ? n.uuid : pe()
      },
      ...(s && { historical: !0 }),
      ...(r && { ephemeral: !0 })
    };
  }
  uploadedToolResult(e, n) {
    let s = this.currentUploadTrim(),
      r = DFo(e, s);
    if (r !== e && !this.loggedToolResultBlank)
      ((this.loggedToolResultBlank = !0), g("ccr_tool_result_blank"));
    let h = Y4s(r, n, s);
    if (h !== r && !this.loggedMcpImageBlank)
      ((this.loggedMcpImageBlank = !0), g("ccr_mcp_image_blank"));
    return h;
  }
  setStreamEventFlushIntervalMs(e) {
    if (
      ((this.streamEventFlushIntervalMs = ye("streamEventFlushIntervalMs", e, KHt)),
      this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer)
    )
      this.flushStreamEventBuffer();
  }
  setStreamEventFirstFlushMs(e) {
    this.streamEventFirstFlushMs = ye("streamEventFirstFlushMs", e, 0);
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let n = ye("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (n === this.noSubscriberStreamEventFlushIntervalMs) return;
    ((this.noSubscriberStreamEventFlushIntervalMs = n), this.setHasSubscribers(void 0, "reset"));
  }
  setNoSubscriberUploadHoldMs(e) {
    let n = ye("noSubscriberUploadHoldMs", e, 0);
    if (n === this.noSubscriberUploadHoldMs) return;
    ((this.noSubscriberUploadHoldMs = n), this.setHasSubscribers(void 0, "reset"));
  }
  setDropUnwatchedStreamEvents(e) {
    let n = e === !0;
    if (n === this.dropUnwatchedStreamEvents) return;
    (this.setHasSubscribers(void 0, "reset"), (this.dropUnwatchedStreamEvents = n));
  }
  onSubscribersReported;
  setSubscribersReportedListener(e) {
    this.onSubscribersReported = e;
  }
  tellSubscribersReported(e) {
    if (typeof e !== "boolean" || this.onSubscribersReported === void 0) return;
    if (e || !this.senderMayNotBeAttachedYet()) this.onSubscribersReported(e);
  }
  senderMayNotBeAttachedYet() {
    return Date.now() - this.lastInboundEventAtMs < ps;
  }
  noSubscriberHoldMs() {
    return cs && this.holdSwitchedOff ? 0 : this.noSubscriberUploadHoldMs;
  }
  unwatched() {
    return this.noSubscriberHoldMs() > 0 && this.lastReportedHasSubscribers === !1;
  }
  mayHoldUploads() {
    return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds();
  }
  holdSwitchOn() {
    return this.eventHoldEnabled !== void 0 && !this.holdSwitchedOff;
  }
  servedPolicyHolds() {
    return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.holdSwitchOn();
  }
  checkpointForViewer(e) {
    if (this.closed || this.viewerCheckpointTimer || !this.holdsAcrossModelCalls()) return;
    this.viewerCheckpointTimer = setTimeout(
      (n, s) => {
        if (((n.viewerCheckpointTimer = null), n.holdsAcrossModelCalls()))
          n.uploadHeldRowsForViewer(s).catch(l);
      },
      Math.max(0, this.lastViewerCheckpointAtMs + Kn - Date.now()),
      this,
      e
    );
  }
  async uploadHeldRowsForViewer(e) {
    if (
      ((this.lastViewerCheckpointAtMs = Date.now()),
      this.flushPolicy?.emptyCheckpointKeepsHold && !this.modelCallStreamed)
    )
      this.setHasSubscribers(void 0, "watcher");
    else this.endWholeTurnHold(e);
    let n = this.liveTurnId,
      s = this.nextLiveIndex - 1,
      r = this.droppedBeforeLiveTurn;
    (this.internalEventUploader.release(e),
      this.releaseClientEvents(e),
      await this.flush(),
      await this.enqueueClientEvents(
        [
          {
            payload: {
              type: "system",
              subtype: "checkpoint_done",
              uuid: pe(),
              live_turn_id: n,
              stored_through_live_index: this.droppedDurableBatches === r ? s : -1
            },
            ephemeral: !0
          }
        ],
        {}
      ));
  }
  endWholeTurnHold(e) {
    if (this.turnHold === "open") return;
    if (((this.turnHold = "each_call"), !e || !this.flushPolicy?.holdAgain?.after.has(e)))
      this.holdsNoMoreThisTurn = !0;
  }
  openTurn() {
    ((this.lastRequestingList = void 0),
      (this.liveOnlyRequestingRow = void 0),
      (this.turnTookInput = !1),
      (this.modelCallStreamed = !1),
      (this.turnHold = "open"),
      (this.holdsNoMoreThisTurn = !1),
      (this.newestResponseId = void 0),
      this.unansweredCalls.clear());
  }
  holdsAcrossModelCalls() {
    return (
      this.holdRule === "served_policy" &&
      this.seesModelCallBoundaries &&
      this.flushPolicy?.holdAcrossModelCalls === !0
    );
  }
  decideHoldRule() {
    if (this.currentState !== "running" || this.shutdownReleased) return;
    if (
      this.servedPolicyHolds() &&
      (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === !1)
    )
      return "served_policy";
    return this.unwatched() ? "no_subscriber_flag" : void 0;
  }
  applyUploadHold(e) {
    if (
      ((this.holdSwitchedOff = this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() !== !0),
      this.holdSwitchedOff && !this.loggedHoldSwitchedOff)
    )
      ((this.loggedHoldSwitchedOff = !0), Y("warn", "cli_ccr_event_hold_switched_off"));
    let n = this.decideHoldRule();
    ((this.holdRule = n),
      this.eventUploader.setHold(
        n &&
          this.laneHold(
            n,
            !this.seesModelCallBoundaries
              ? vt
              : this.flushPolicy?.controlTrafficKeepsHold
                ? mt
                : We,
            this.turnHold === "open" ? this.flushPolicy?.noTurnMaxAgeMs : void 0
          ),
        e
      ),
      this.internalEventUploader.setHold(
        n && this.laneHold(n, vt, this.flushPolicy?.transcriptMaxAgeMs),
        e
      ));
  }
  laneHold(e, n, s) {
    let r = this.flushPolicy;
    if (e === "served_policy" && r)
      return {
        rule: e,
        maxAgeMs: Math.min(
          s || r.maxAgeMs,
          !this.seesModelCallBoundaries ? Bt : r.holdAcrossModelCalls ? we : Ut
        ),
        maxItems: r.maxEvents,
        maxBytes: r.maxBytes,
        passes: n
      };
    return { rule: "no_subscriber_flag", maxAgeMs: this.noSubscriberHoldMs() };
  }
  takeUpFlushPolicy(e) {
    let n = e ?? this.launchFlushPolicy,
      s = n == null ? void 0 : Et(n);
    if (n != null && !s && !this.loggedUnreadableFlushPolicy)
      ((this.loggedUnreadableFlushPolicy = !0), Y("warn", "cli_ccr_flush_policy_unreadable"));
    let r = this.flushPolicy;
    if (!ks(r, s)) {
      if (
        ((this.flushPolicy = s),
        this.callsWhoseResultsWait.clear(),
        r?.flushAfterTools !== s?.flushAfterTools ||
          !mit(r?.flushAfterToolNames, s?.flushAfterToolNames))
      )
        this.toolCallsWhoseResultReleases.clear();
      Y(
        "info",
        s
          ? r
            ? "cli_ccr_flush_policy_changed"
            : "cli_ccr_flush_policy_adopted"
          : "cli_ccr_flush_policy_cleared",
        {
          ...(s && {
            max_events: s.maxEvents,
            max_age_ms: s.maxAgeMs,
            max_bytes: s.maxBytes ?? 0,
            flush_on_sampling_end: s.flushOnSamplingEnd,
            flush_on_assistant: s.flushOnAssistant,
            joint_upload: s.jointUpload,
            hold_across_model_calls: s.holdAcrossModelCalls,
            hold_again: s.holdAgain !== void 0,
            may_wait_types: s.mayWaitTypes.size,
            may_wait_types_refused: s.mayWaitTypesRefused,
            flush_after_tool_names: s.flushAfterToolNames.size,
            settings_receipts_max_wait_ms: s.settingsReceiptsMaxWaitMs,
            messages_received_waits: s.messagesReceivedWaits,
            receipts_ride_uploads: s.receiptsRideUploads,
            flush_before_tools_wait_ms: s.flushBeforeToolsWaitMs,
            flush_after_tools: s.flushAfterTools,
            must_flush_types: s.mustFlushTypes.size,
            live_twin_types: s.liveTwinTypes.size,
            live_only_types: s.liveOnlyTypes.size,
            transcript_max_age_ms: s.transcriptMaxAgeMs,
            no_turn_max_age_ms: s.noTurnMaxAgeMs,
            merge_worker_reports: s.mergeWorkerReports,
            first_idle_waits_for_work: s.firstIdleWaitsForWork,
            control_traffic_keeps_hold: s.controlTrafficKeepsHold,
            empty_checkpoint_keeps_hold: s.emptyCheckpointKeepsHold,
            first_turn_holds_each_call: s.firstTurnHoldsEachCall,
            settings_answers_max_wait_ms: s.settingsAnswersMaxWaitMs,
            init_max_wait_ms: s.initMaxWaitMs,
            metadata_waits_for_status: s.metadataWaitsForStatus.size,
            metadata_never_sent: s.metadataNeverSent.size,
            metadata_max_wait_ms: s.metadataMaxWaitMs,
            cost_report_max_wait_ms: s.costReportMaxWaitMs,
            policy_version: s.policyVersion ?? ""
          }),
          hold_enabled: this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() === !0
        }
      );
    }
    this.applyUploadHold("reset");
  }
  logUploadHoldEnd(e, n, s, r, h, y) {
    if (h === "no_subscriber_flag") {
      g("ccr_no_subscriber_hold", { lane: c(e), reason: c(n), held_events: s, held_ms: r });
      return;
    }
    if (e === "client_events") {
      if ((this.heldShellTaskIds.clear(), n !== "round_trip")) this.endWholeTurnHold(n);
    }
    Y("info", "cli_ccr_event_hold_release", {
      lane: e,
      reason: n,
      ...(y !== void 0 && { released_by: y }),
      held_events: s,
      held_ms: r
    });
  }
  uploadBody(e, n) {
    let s = { worker_epoch: this.workerEpoch, events: e };
    if (this.uploadHoldMarker())
      s.upload_hold = {
        held: n.held,
        flush_reason: n.reason,
        held_count: ve(n.heldCount),
        hold_age_ms: ve(n.holdAgeMs),
        inflight_retry_count: ve(n.retryCount),
        hold_rule: n.rule,
        post_index: ve(n.postIndex),
        ...(this.flushPolicy?.policyVersion !== void 0 && {
          policy_version: this.flushPolicy.policyVersion
        })
      };
    return s;
  }
  retrySmaller(e, n, s, r, h = { bytes: s.bytes }) {
    let y = {
      count: n.length,
      kib: Math.round(h.bytes / 1024),
      retry_count: s.retryCount,
      timeout_ms: r
    };
    return (
      t(
        `CCRClient: ${e} POST of ${y.count} event(s), ${y.kib} KiB got no response (the connection failed, or no answer within ${r}ms) after ${y.retry_count} earlier failure(s); ${h.bytes >= Be && s.cuttable ? "retrying it in smaller batches" : "retrying it"}`,
        { level: "warn" }
      ),
      Y(
        "warn",
        e === "client_events"
          ? "cli_worker_events_no_response"
          : "cli_worker_internal_events_no_response",
        y
      ),
      new t4r(`${e} POST got no response`, Be)
    );
  }
  logUploadDrain(e, n) {
    if (!this.uploadHoldMarker()) return;
    g("ccr_upload_drain", {
      lane: c(e),
      trigger: c(n.trigger),
      rule: c(n.rule),
      held_events: n.heldEvents,
      held_ms: n.heldMs,
      posts: n.posts,
      rows: n.rows,
      max_rows_post: n.maxRowsPost,
      failed_posts: n.failedPosts,
      dropped_rows: n.droppedRows,
      other_posts: n.otherPosts,
      other_rows: n.otherRows,
      drain_ms: n.drainMs
    });
  }
  logUndeliveredAtClose(e, n) {
    if (this.shutdownKeepsClientEvents)
      t(`CCRClient: ${e} lane closed at shutdown, ${n} undelivered`, {
        level: n > 0 ? "warn" : "info"
      });
    if (n <= 0) return;
    if (this.noSubscriberHoldMs() > 0 && this.viewerAbsentReported)
      f(
        "ccr_no_subscriber_hold",
        this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close",
        { lane: c(e), undelivered_events: n }
      );
    if (this.servedPolicyHolds())
      Y("warn", "cli_ccr_event_hold_undelivered_at_close", {
        lane: e,
        undelivered_events: n,
        for_successor: this.closingForSuccessor
      });
  }
  bufferEphemeral(e) {
    let n = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : void 0,
      s = n === "content_block_start";
    if (s) this.firstContentFlushPending = !0;
    if (this.dropUnwatchedStreamEvents && this.unwatchedPastGrace) {
      if (e.type === "stream_event") this.streamEventsDroppedUnwatched++;
      return;
    }
    this.streamEventBuffer.push(e);
    let r = this.firstContentFlushPending && n === "content_block_delta";
    if (r) this.firstContentFlushPending = !1;
    let h = s || r;
    if (
      r &&
      this.firstDeltaFlushTimer === null &&
      e.type === "stream_event" &&
      e.event.type === "content_block_delta" &&
      e.event.delta.type !== "input_json_delta" &&
      !(
        this.lastReportedHasSubscribers === !1 &&
        (this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberHoldMs() > 0)
      )
    )
      this.firstDeltaFlushTimer = setTimeout(() => {
        ((this.firstDeltaFlushTimer = null), this.flushStreamEventBuffer(!0));
      }, 0);
    if (this.streamEventTimer && !h) return;
    let y = h
        ? Math.min(this.streamEventFirstFlushMs, this.streamEventFlushIntervalMs)
        : this.streamEventFlushIntervalMs,
      w =
        this.lastReportedHasSubscribers === !1
          ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.noSubscriberHoldMs(), y)
          : y,
      S = Date.now();
    if (this.streamEventTimer) {
      if (S + w >= this.streamEventFlushDueAt) return;
      clearTimeout(this.streamEventTimer);
    } else this.streamEventBufferedAt = S;
    ((this.streamEventFlushDueAt = S + w),
      (this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), w)));
  }
  setHasSubscribers(e, n) {
    this.hasSubscribersReports++;
    let s = typeof e === "boolean" && (e || !this.senderMayNotBeAttachedYet()) ? e : void 0,
      r = this.lastReportedHasSubscribers;
    if (((this.lastReportedHasSubscribers = s), s === !0)) this.viewerReportedSinceLastFalse = !0;
    else if (s === !1 && this.viewerReportedSinceLastFalse)
      ((this.viewerReportedSinceLastFalse = !1), (this.lastViewerLeftAtMs = Date.now()));
    let h = this.unwatchedPastGrace;
    if (
      ((this.unwatchedPastGrace = s === !1 && Date.now() - this.lastViewerLeftAtMs >= fs),
      this.dropUnwatchedStreamEvents && h !== this.unwatchedPastGrace)
    )
      t(
        this.unwatchedPastGrace
          ? "CCRClient: no subscribers reported; dropping stream deltas until one is"
          : `CCRClient: resuming stream deltas (${s === !0 ? "watcher" : n})`
      );
    if (r === !1 && s !== !1 && this.streamEventTimer) this.flushStreamEventBuffer();
    let y = s === !0 ? "watcher" : n;
    if (s === !1) this.viewerAbsentReported = !0;
    else if (this.viewerAbsentReported && y === "watcher") {
      if (((this.viewerAbsentReported = !1), this.holdRule === "served_policy")) {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        (this.releaseClientEvents("watcher"), this.internalEventUploader.release("watcher"));
      }
    }
    this.applyUploadHold(y);
  }
  async flushStreamEventBuffer(e = !1) {
    let { events: n, release: s } = this.takeStreamEventBuffer(e);
    if (n.length > 0) {
      if (s) this.releaseTranscriptLane(s);
      await this.enqueueClientEvents(n, s ? { release: s } : { since: this.streamEventBufferedAt });
    }
  }
  enqueueClientEvents(e, n) {
    for (let s of this.trackedFrameUploads("enqueuedAtMs")) {
      let r = e.find((w) => w.payload.uuid === s.uuid);
      if (!r) continue;
      let h = this.eventUploader.inFlightBatch(),
        y;
      if (n.release === void 0 && this.eventUploader.holdsOnArrival(r)) y = "hold";
      else if (h !== void 0) y = h.some((w) => !w.ephemeral) ? "durable_post" : "ephemeral_post";
      else if (this.eventUploader.backlog().backingOff) y = "retry_backoff";
      else y = "none";
      ((s.timing.enqueuedAtMs = performance.now()), (s.timing.queuedBehind = y));
    }
    return this.eventUploader.enqueue(e, n);
  }
  releaseClientEvents(e, n) {
    this.eventUploader.release(e, n);
  }
  offerToEventsPost(e, n) {
    if (
      n.rule !== "served_policy" ||
      n.retryCount > 0 ||
      this.flushPolicy?.jointUpload !== !0 ||
      this.ridesRefused
    )
      return;
    let { promise: s, resolve: r } = Promise.withResolvers();
    return (
      (this.ridingRows = { rows: e, bytes: n.bytes, settle: r }),
      queueMicrotask(() => {
        if (this.ridingRows?.rows === e && !this.liveViewLaneSendsMore()) this.giveBackRidingRows();
      }),
      s
    );
  }
  liveViewLaneSendsMore() {
    let { unsent: e, backingOff: n } = this.eventUploader.backlog();
    return (
      !n && e > (this.eventUploader.inFlightBatch()?.length ?? 0) + this.eventUploader.held().count
    );
  }
  giveBackRidingRows() {
    (this.ridingRows?.settle(!1), (this.ridingRows = void 0));
  }
  settlesTakenRiders(e) {
    let n = () => {
      (this.takenRiders?.settle(!1), (this.takenRiders = void 0));
    };
    return (s, r) => {
      let h = e(s, r);
      return (h.then(n, n), h);
    };
  }
  actsOnSubscribersReports() {
    return (
      this.noSubscriberStreamEventFlushIntervalMs > 0 ||
      this.noSubscriberUploadHoldMs > 0 ||
      this.dropUnwatchedStreamEvents ||
      this.servedPolicyHolds()
    );
  }
  takeStreamEventBuffer(e = !1) {
    if (!e) {
      if (this.streamEventTimer)
        (clearTimeout(this.streamEventTimer), (this.streamEventTimer = null));
      if (this.firstDeltaFlushTimer)
        (clearTimeout(this.firstDeltaFlushTimer), (this.firstDeltaFlushTimer = null));
    }
    let n,
      s = e ? [] : this.parkedRows;
    for (let { message: C } of s) n ??= this.releaseFor(C);
    if (this.streamEventBuffer.length === 0)
      return { events: e ? [] : this.takeParkedRows(), release: n };
    let r = [],
      h,
      y = 0;
    for (let C of this.streamEventBuffer) {
      if (C.type === "stream_event") {
        r.push(C);
        continue;
      }
      ((y =
        (h !== void 0 && C.estimated_tokens - C.estimated_tokens_delta === h.estimated_tokens
          ? y
          : 0) + C.estimated_tokens_delta),
        (h = C));
    }
    this.streamEventBuffer = [];
    for (let C of this.trackedFrameUploads("enqueuedAtMs")) C.uuid = Xe(r, C.uuid);
    let P = Ye(r)
      .filter((C) => {
        let x = Buffer.byteLength(_(C));
        if (x <= re) return !0;
        return (Re(C, x), !1);
      })
      .map((C) => ({ payload: C, ephemeral: !0 }));
    if (h) P.push(this.toClientEvent({ ...h, estimated_tokens_delta: y }));
    if (!e) P.push(...this.takeParkedRows());
    return { events: P, release: n };
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return H(e) ? e : nt;
  }
  async writeInternalEvent(e, n, { isCompaction: s = !1, agentId: r, preservedEventIds: h } = {}) {
    let y = h,
      w = Qe(n);
    if (y && y.length > zHt)
      (a("tengu_ccr_preserved_event_ids_clamped", {
        originalCount: y.length,
        cap: zHt,
        payloadClamped: w !== null
      }),
        (y = y.slice(-zHt)));
    let S = w ?? n;
    if (this.currentUploadTrim().envelope === !0) {
      let z = X4s(S);
      if (z !== S && !this.loggedTranscriptEnvelopeStrip)
        ((this.loggedTranscriptEnvelopeStrip = !0), g("ccr_worker_envelope_strip"));
      S = z;
    }
    if (e === "transcript" && S.type === "user" && S.isVirtual !== !0) {
      let z = this.uploadedToolResult(S.toolUseResult, S.message);
      if (z !== S.toolUseResult) S = { ...S, toolUseResult: z };
    }
    let P = {
        payload: { type: e, ...S, uuid: typeof S.uuid === "string" ? S.uuid : pe() },
        ...(s && { is_compaction: !0 }),
        ...(r && { session_agent_id: r }),
        ...(y?.length && { preserved_event_ids: y })
      },
      C = [P],
      x = r || "",
      O = this.rowsAwaitingCompactSummary.get(x);
    if (
      e === "transcript" &&
      (O !== void 0 || (s && this.rowsAwaitingCompactSummaryAtClose === void 0))
    ) {
      if (O === void 0)
        ((O = { rows: [], timer: this.startCompactSummaryWaitTimer(x) }),
          this.rowsAwaitingCompactSummary.set(x, O));
      O.rows.push(P);
      let z =
        S.isCompactSummary === !0
          ? "summary"
          : S.type === "user" || S.type === "assistant"
            ? "user_or_assistant_row"
            : O.rows.length >= ds
              ? "row_cap"
              : void 0;
      if (z === void 0) return;
      C = this.takeRowsAwaitingCompactSummary(x, z);
    }
    let I = e === "transcript" && S.type === "user" && this.toolResultReleases(S.message),
      D = this.gatesToolCalls && e === "transcript" && !r ? ne(S) : [];
    if (
      (await this.queueInternalEvents(
        C,
        I
          ? "tool_result"
          : D.some((z) => this.awaitedToolCalls.has(z))
            ? "tool_call"
            : !this.transcriptRowMayWait(e, S, r)
              ? "event"
              : void 0
      ),
      e === "transcript")
    )
      this.transcriptLaneInUse = !0;
    this.noteToolCallRows("internal_events", D, "queued");
  }
  async queueInternalEvents(e, n) {
    let s = e[0]?.is_compaction === !0 && this.holdRule !== void 0;
    if (s) this.releaseClientEvents("event", "compaction");
    let h = (
        e[0]?.is_compaction === !0 && e[0].session_agent_id === void 0
          ? (this.rowsRepeatedAfterCompaction?.() ?? [])
          : []
      ).map(({ eventType: w, payload: S }) => ({ payload: { type: w, ...S, uuid: pe() } })),
      y = [...e, ...h];
    (this.markInternalEventPostWatch((w) => w.noteQueued(y)),
      await this.internalEventUploader.enqueue(y, { together: !0, release: s ? "event" : n }));
  }
  startCompactSummaryWaitTimer(e) {
    let n = setTimeout(
      (s, r) => {
        let h = s.rowsAwaitingCompactSummary.get(r);
        if (s.closed || h === void 0) return;
        if (!s.internalEventUploader.hasRoomFor(1)) {
          h.timer = s.startCompactSummaryWaitTimer(r);
          return;
        }
        s.queueInternalEvents(s.takeRowsAwaitingCompactSummary(r, "timeout"), void 0).catch(l);
      },
      us,
      this,
      e
    );
    return (n.unref?.(), n);
  }
  takeRowsAwaitingCompactSummary(e, n) {
    let s = this.rowsAwaitingCompactSummary.get(e);
    (this.rowsAwaitingCompactSummary.delete(e), clearTimeout(s?.timer));
    let r = s?.rows ?? [];
    if (n !== "summary" && n !== "close")
      Y("info", "cli_worker_compaction_marker_uploaded_without_summary", {
        reason: n,
        count: r.length,
        subagent: e !== ""
      });
    return r;
  }
  transcriptRowMayWait(e, n, s) {
    let r = this.flushPolicy;
    if (this.holdRule !== "served_policy" || !r) return !0;
    let h = e === "transcript" ? n.type : e;
    if (typeof h !== "string" || r.mustFlushTypes.has(h)) return !1;
    if (h === "user") {
      if (r.holdAcrossModelCalls && this.turnHold === "open" && !s) return !1;
      return (
        n.toolUseResult !== void 0 ||
        xe(n.message) ||
        n.isMeta === !0 ||
        n.isVirtual === !0 ||
        n.isCompactSummary === !0
      );
    }
    return !(h === "assistant" && r.flushOnAssistant);
  }
  flushInternalEvents(e) {
    return this.internalEventUploader.flush(e);
  }
  watchInternalEventPosts() {
    let e = new Ee(this.internalEventUploader.backlog().unsent);
    return (
      (this.internalEventPostWatch = e),
      (n) => {
        if (this.internalEventPostWatch === e) this.internalEventPostWatch = void 0;
        return e.seen(n);
      }
    );
  }
  markInternalEventPostWatch(e) {
    let n = this.internalEventPostWatch;
    if (n === void 0) return;
    try {
      e(n);
    } catch (s) {
      ((this.internalEventPostWatch = void 0), l(s));
    }
  }
  hasUnsentUploads() {
    let { unsentClientEvents: e, unsentInternalEvents: n } = this.uploadBacklog();
    return (
      this.streamEventTimer !== null ||
      e > 0 ||
      n > 0 ||
      this.deliveryUploader.backlog().unsent > 0 ||
      this.workerState.unsent
    );
  }
  uploadBacklog() {
    let e = this.eventUploader.backlog(),
      n = this.internalEventUploader.backlog(),
      s = [e.inFlightMs, n.inFlightMs].filter((r) => r !== void 0);
    return {
      unsentClientEvents: e.unsent,
      unsentInternalEvents: n.unsent + this.countRowsAwaitingCompactSummary(),
      oldestInFlightMs: s.length ? Math.max(...s) : void 0,
      backingOff: e.backingOff || n.backingOff
    };
  }
  async postInternalEventsBatch(e, n = {}) {
    let s = this.refuseInternalEventsCall(!0);
    if (s) return s;
    let r = this.epochMismatchCount;
    try {
      let h = await this.request(
        "post",
        "/worker/internal-events",
        { worker_epoch: this.workerEpoch, events: e },
        "internal events batch",
        { parseBody: !0, countTowardEscalation: !1, signal: n.signal }
      );
      if (h.ok) {
        let y = Bn().safeParse(h.data);
        return { ok: !0, results: y.success ? y.data.results : void 0 };
      }
      return this.internalEventsFailure(h, r);
    } catch (h) {
      return this.internalEventsFailure({ reason: `fetch_failed:${fe(h)}` }, r);
    }
  }
  async getInternalEventsPage(e, n = {}) {
    let s = this.refuseInternalEventsCall(!1);
    if (s) return s;
    let r = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) r.searchParams.set("limit", String(e.limit));
    if (e.agentId) r.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) r.searchParams.set("subagents", "true");
    if (e.cursor) r.searchParams.set("cursor", e.cursor);
    else if (e.afterEventId) r.searchParams.set("after_event_id", e.afterEventId);
    let h = this.epochMismatchCount,
      y;
    try {
      let w = this.getAuthHeaders();
      if (Object.keys(w).length === 0) return { ok: !1, reason: "no_auth_headers" };
      y = n.signal ? Ts(n.signal, { timeoutMs: 30000, refTimer: !0 }) : void 0;
      let S = await fetch(r, {
        headers: {
          ...w,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": py(),
          "User-Agent": Ds()
        },
        signal: y?.signal ?? AbortSignal.timeout(30000),
        ...oa({ url: r.toString() })
      });
      if (S.ok) {
        let I;
        try {
          I = await S.json();
        } catch (N) {
          if (!(N instanceof SyntaxError)) throw N;
        }
        let D = Fn().safeParse(I);
        if (!D.success)
          return (
            Y("warn", "cli_worker_internal_events_page_foreign"),
            { ok: !1, status: S.status, reason: "foreign_body" }
          );
        let z = Number(S.headers.get("content-length") ?? Number.NaN);
        return {
          ok: !0,
          data: D.data.data.map(kt),
          ...(D.data.next_cursor && { nextCursor: D.data.next_cursor }),
          bytes: Number.isFinite(z) ? z : null
        };
      }
      let P, C, x, O;
      if (S.status === 409) {
        let I = await Ie(S);
        if (this.closed) O = I ?? this.lastEpochMismatchCause ?? "epoch_conflict";
        else
          try {
            this.handleEpochMismatch(I);
          } catch (D) {
            t(`CCRClient: onEpochMismatch threw during a page read: ${d(D)}`);
          }
      } else if (S.status === 404)
        try {
          let I = await S.json();
          if (typeof I?.error?.type === "string") P = I.error.type;
          if (typeof I?.error?.resource_type === "string") C = I.error.resource_type;
        } catch {}
      else {
        if (S.status === 429) {
          let I = parseInt(S.headers.get("retry-after") ?? "", 10);
          if (!isNaN(I) && I >= 0) x = I * 1000;
        }
        S.body?.cancel();
      }
      return (
        t(`CCRClient: internal events page returned ${S.status}`, { level: "warn" }),
        Y("warn", "cli_worker_request_failed", {
          method: "get",
          path: "/worker/internal-events",
          status: S.status
        }),
        this.internalEventsFailure(
          { status: S.status, retryAfterMs: x, reason: `http_${S.status}` },
          h,
          { errorType: P, resourceType: C, closedConflict: O }
        )
      );
    } catch (w) {
      return (
        t(`CCRClient: internal events page failed: ${d(w)}`, { level: "warn" }),
        this.internalEventsFailure({ reason: `fetch_failed:${fe(w)}` }, h)
      );
    } finally {
      y?.cleanup();
    }
  }
  refuseInternalEventsCall(e) {
    if (this.closed)
      return {
        ok: !1,
        reason: "client_closed",
        ...(this.lastEpochMismatchCause && { conflict: this.lastEpochMismatchCause })
      };
    if (e && this.workerEpoch <= 0) return { ok: !1, reason: "not_initialized" };
    return;
  }
  internalEventsFailure(e, n, { errorType: s, resourceType: r, closedConflict: h } = {}) {
    let y =
        h ??
        (this.epochMismatchCount > n
          ? this.lastEpochMismatchCause
          : e.status === 409
            ? (this.lastEpochMismatchCause ?? "epoch_conflict")
            : void 0),
      w = e.status ?? (y && kn[y] ? 409 : void 0);
    return {
      ok: !1,
      reason: w === 409 ? "http_409" : (e.reason ?? "unknown"),
      ...(w !== void 0 && { status: w }),
      ...(e.retryAfterMs !== void 0 && { retryAfterMs: e.retryAfterMs }),
      ...(y && { conflict: y }),
      ...(s && { errorType: s }),
      ...(r && { resourceType: r })
    };
  }
  droppedInternalEventBatches = 0;
  get droppedInternalBatches() {
    return this.droppedInternalEventBatches;
  }
  refusedInternalEventUuids = new Set();
  refusedInternalEvents(e) {
    return e.filter((n) => this.refusedInternalEventUuids.has(n));
  }
  noteRefusedInternalEvents(e) {
    for (let { payload: s, session_agent_id: r } of e)
      if (r === void 0) this.refusedInternalEventUuids.add(s.uuid);
    let n = this.refusedInternalEventUuids.size - In;
    for (let s of this.refusedInternalEventUuids) {
      if (n-- <= 0) break;
      this.refusedInternalEventUuids.delete(s);
    }
  }
  dropOrphanedHandedOffLines(e) {
    let n = 0;
    for (let s = 0; s < e.length;) {
      let r = e[s],
        { payload: h } = r;
      if (
        r.session_agent_id === void 0 &&
        (h.handedOff === !0 || (h.type === "system" && h.subtype === On)) &&
        !(h.type === "user" && !xe(h.message)) &&
        typeof h.parentUuid === "string" &&
        this.refusedInternalEventUuids.has(h.parentUuid)
      ) {
        (e.splice(s, 1), n++, this.noteRefusedInternalEvents([r]));
        continue;
      }
      s++;
    }
    return n;
  }
  droppedDeliveryAckBatches = 0;
  deliveryAcksWaitingForRoom = new Set();
  async flushDeliveryAcksConfirmed() {
    let e = this.droppedDeliveryAckBatches;
    if (this.receiptsRide) await this.receiptsRide.promise;
    return (
      this.sendWaitingReceipts(),
      await Promise.all(this.deliveryAcksWaitingForRoom),
      await this.deliveryUploader.flush(),
      this.droppedDeliveryAckBatches === e && !this.closed
    );
  }
  flushDeliveryAcks(e) {
    if (this.receiptsRide) return this.receiptsRide.promise.then(() => this.flushDeliveryAcks(e));
    return (this.sendWaitingReceipts(), this.deliveryUploader.flush(e));
  }
  async flush(e) {
    if (this.waitingAnswers.length > 0) await this.writeEvents([]);
    return (await this.flushStreamEventBuffer(), this.eventUploader.flush(e));
  }
  withdrawQueuedControlRequest(e) {
    let n = (s) =>
      !s.ephemeral && s.payload.type === "control_request" && s.payload.request_id === e;
    return this.eventUploader.withdraw(n);
  }
  droppedDurableEventBatches = 0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches;
  }
  takeUndeliveredClientEvents() {
    return this.eventUploader.takeUndelivered().filter((e) => !e.ephemeral);
  }
  discardUndeliveredClientEvents() {
    let e = this.eventUploader.peekUndelivered().filter((n) => !n.ephemeral);
    return (this.eventUploader.discardUndelivered(), e);
  }
  adoptClientEvents(e) {
    if (e.length === 0) return;
    this.eventUploader.enqueue(e);
  }
  async flushWorkerState() {
    return this.workerState.flush();
  }
  droppedWorkerStatePatchCount = 0;
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount;
  }
  async readInternalEvents(e, n, s) {
    return IN.readInternalEventsFrom(this.readSource, e, n, s);
  }
  async readInternalEventsForCatchUp(e) {
    return IN.paginatedGet(
      this.readSource,
      "/worker/internal-events",
      { limit: "1000" },
      "internal_events",
      { maxAttempts: _e, signal: e }
    );
  }
  static readInternalEventsFrom(e, n, s, r) {
    return IN.paginatedGet(
      e,
      "/worker/internal-events",
      { limit: "1000", ...(n && { after_event_id: n }) },
      "internal_events",
      { signal: s, readBody: r }
    );
  }
  async readSubagentInternalEvents() {
    return IN.readSubagentInternalEventsFrom(this.readSource);
  }
  static readSubagentInternalEventsFrom(e) {
    return IN.paginatedGet(
      e,
      "/worker/internal-events",
      { subagents: "true", limit: "1000" },
      "subagent_events"
    );
  }
  async readAgentInternalEvents(e, n, s) {
    return IN.paginatedGet(
      this.readSource,
      "/worker/internal-events",
      { session_agent_id: e, limit: "1000" },
      "agent_events",
      { maxAttempts: _e, signal: n },
      s
    );
  }
  async readAgentMetadataEvents(e, n) {
    let r = _t()
      ? "essential-traffic-only"
      : this.isFirstPartyProvider()
        ? void 0
        : "data-residency";
    if (r !== void 0)
      return (
        Y("info", "cli_worker_request_withheld", {
          method: "post",
          path: "/worker/agent-metadata-events/batch-get",
          reason: r
        }),
        null
      );
    let h = [];
    for (let y of npt(L(e), Mn)) {
      let w = this.readSource.getAuthHeaders();
      if (Object.keys(w).length === 0) return null;
      let S = await IN.getWithRetry(
        { ...this.readSource, onConflict: void 0 },
        `${this.readSource.sessionBaseUrl}/worker/agent-metadata-events/batch-get`,
        w,
        "agent_metadata_events",
        void 0,
        (P) => {
          Y("warn", "cli_worker_request_failed", {
            method: "post",
            path: "/worker/agent-metadata-events/batch-get",
            status: P
          });
        },
        {
          signal: n,
          postJson: _({ session_agent_ids: y }),
          permanentStatuses: [403, 404, 501],
          readBody: async (P) => {
            let C;
            try {
              C = await P.json();
            } catch (O) {
              if (!(O instanceof SyntaxError)) throw O;
            }
            let x = Un().safeParse(C);
            if (!x.success) return (Y("warn", "cli_worker_agent_metadata_events_foreign"), null);
            return x.data.data ?? [];
          }
        }
      );
      if (S === null) return null;
      h.push(...S);
    }
    return h;
  }
  static async paginatedGet(e, n, s, r, h = {}, y) {
    let w = e.getAuthHeaders();
    if (Object.keys(w).length === 0) return null;
    let S = [],
      P,
      C = 0,
      x = 0,
      O = 0,
      I = 0,
      D = null;
    do {
      let z = new URL(`${e.sessionBaseUrl}${n}`);
      for (let [B, V] of Object.entries(s)) z.searchParams.set(B, V);
      if (P) (z.searchParams.set("cursor", P), z.searchParams.delete("after_event_id"));
      let N = !P && s.after_event_id !== void 0,
        R,
        W = await IN.getWithRetry(
          e,
          z.toString(),
          w,
          r,
          (B) => {
            (C++, (D ??= B.headers.get("content-encoding")));
            let V = B.headers.get("content-length");
            if (V !== null && I !== null) I += Number(V);
            else I = null;
          },
          (B, V) => {
            if (!N) return;
            if (B === 400) R = "rejected";
            else if (V === "after_event_id_not_found") R = "not-found";
          },
          y === void 0
            ? h
            : {
                ...h,
                unencoded: !0,
                readBody: async (B) => {
                  let V = B.headers.get("content-encoding");
                  if (V !== null && V !== "identity")
                    return (await B.body?.cancel(), { encodedBody: !0 });
                  let K = await An(B, y.maxBytes - O);
                  if (K === null) return { pastMaxBytes: !0 };
                  let k = te(K.text);
                  if (!H(k) || !Array.isArray(k.data) || !k.data.every(H))
                    throw Error("CCRClient: a page is no list of events");
                  return ((O += K.bytes), k);
                }
              }
        );
      if (W?.encodedBody)
        return {
          events: [],
          stats: { pageCount: C, bytesReceived: I, contentEncoding: D ?? "none" },
          encodedBody: !0
        };
      if (!W) {
        if (R) {
          (t(
            `CCRClient: after_event_id ${R === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`,
            { level: "warn" }
          ),
            Y(
              "warn",
              R === "rejected"
                ? "cli_worker_after_event_id_rejected"
                : "cli_worker_after_event_id_not_found",
              { context: r }
            ));
          let { after_event_id: B, ...V } = s,
            K = await IN.paginatedGet(e, n, V, r, h, y);
          if (!K) return null;
          return { ...K, anchorFallback: R };
        }
        return null;
      }
      for (let B of W.data ?? []) if (!Z4s(B.payload)) S.push(kt(B));
      if (
        ((x += Math.max(1, W.data?.length ?? 0)),
        y !== void 0 &&
          (x > y.maxEvents ||
            W.pastMaxBytes === !0 ||
            (W.data ?? []).some((B) => !Cn(B, y.maxTimestampChars))))
      )
        return {
          events: [],
          stats: { pageCount: C, bytesReceived: I, contentEncoding: D ?? "none" },
          overBound: !0
        };
      P = W.next_cursor;
    } while (P);
    return (
      t(
        `CCRClient: Read ${S.length} internal events from ${n}${s.subagents ? " (subagents)" : ""}`
      ),
      { events: S, stats: { pageCount: C, bytesReceived: I, contentEncoding: D ?? "none" } }
    );
  }
  static getWithRetry(e, n, s, r, h, y, w = {}) {
    return IN.getWithRetryNow(e, n, s, r, h, y, w);
  }
  static async getWithRetryNow(
    e,
    n,
    s,
    r,
    h,
    y,
    { maxAttempts: w = Tn, signal: S, readBody: P, unencoded: C, postJson: x, permanentStatuses: O }
  ) {
    for (let I = 1; I <= w; I++) {
      if (S?.aborted) return null;
      let D;
      try {
        if (
          ((D = await A9n(
            n,
            {
              ...(x !== void 0 && { method: "POST", body: x }),
              headers: {
                ...s,
                ...(x !== void 0 && { "Content-Type": "application/json" }),
                "anthropic-version": "2023-06-01",
                "anthropic-client-platform": py(),
                "User-Agent": Ds(),
                ...(C && { "Accept-Encoding": "identity" })
              },
              ...(C && { decompress: !1 }),
              signal: S
                ? AbortSignal.any([AbortSignal.timeout(30000), S])
                : AbortSignal.timeout(30000),
              ...oa({ url: n })
            },
            e.ownConnectionPool
          )),
          D.ok)
        ) {
          let N = P ? await P(D) : await D.json();
          return (h?.(D), N);
        }
      } catch (N) {
        if (S?.aborted) return null;
        if (
          (t(`CCRClient: GET ${n} failed (attempt ${I}/${w}): ${d(N)}`, { level: "warn" }), I < w)
        ) {
          let R = Math.min(500 * 2 ** (I - 1), 30000) + Math.random() * 500;
          await X(R, S);
        }
        continue;
      }
      let z;
      if (D.status === 404 && y)
        try {
          let N = await D.json();
          if (typeof N?.error?.type === "string") z = N.error.type;
        } catch {}
      else if (D.status === 409) {
        if (e.isClosed?.()) return (await gK(D), null);
        let N = await Ie(D);
        if (!e.isClosed?.()) e.onConflict?.(N);
        return null;
      } else await gK(D);
      if (Z(D.status) || z === "after_event_id_not_found" || O?.includes(D.status) === !0)
        return (
          t(`CCRClient: GET ${n} returned ${D.status} \u2014 permanent, not retrying`, {
            level: "warn"
          }),
          y?.(D.status, z),
          null
        );
      if (
        (t(`CCRClient: GET ${n} returned ${D.status} (attempt ${I}/${w})`, { level: "warn" }),
        I < w)
      ) {
        let N = Math.min(500 * 2 ** (I - 1), 30000) + Math.random() * 500;
        await X(N, S);
      }
    }
    return (
      t("CCRClient: GET retries exhausted", { level: "error" }),
      Y("error", "cli_worker_get_retries_exhausted", { context: r }),
      null
    );
  }
  reportDelivery(e, n, s, r) {
    if (n === "processing" || (n === "received" && !r?.controlTraffic))
      ((this.turnTookInput = !0), (this.liveOnlyRequestingRow = void 0));
    if (n === "received") {
      this.lastInboundEventAtMs = Date.now();
      let P = r?.controlTraffic === !0 && this.flushPolicy?.controlTrafficKeepsHold === !0;
      if (
        (this.setHasSubscribers(void 0, P ? "reset" : "watcher"),
        this.holdsAcrossModelCalls() && !P)
      ) {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        (this.internalEventUploader.release("event", "inbound_event"),
          this.releaseClientEvents("event", "inbound_event"));
      }
      if (s !== void 0) {
        ((this.holdsNoMoreThisTurn = !0), this.inboundMessageUuids.add(s));
        let C = this.inboundMessageUuids.values().next().value;
        if (this.inboundMessageUuids.size > Gn && C !== void 0) this.inboundMessageUuids.delete(C);
      }
    }
    let h = n !== "received" && this.inboundMessageUuids.delete(e);
    if (n === "processing") {
      if (this.closed) return;
      if (h && this.receiptsMayRide()) this.messagesInProcessing.add(e);
      let P = this.pendingProcessingAcks.push(e) === 1;
      if (this.pickupTakesTick) return;
      if (h && this.holdsAcrossModelCalls() && this.turnHold !== "open")
        ((this.pickupTakesTick = !0),
          this.endWholeTurnHold(),
          this.ackPickupBehindWrittenRows().catch(l));
      else if (P)
        queueMicrotask(() => {
          if (!this.pickupTakesTick) this.sendProcessingAcks(this.pendingProcessingAcks);
        });
      return;
    }
    let y = this.waitingReceipts.has(e),
      w =
        n === "processed" &&
        this.messagesInProcessing.delete(e) &&
        !this.closed &&
        this.receiptsMayRide() &&
        Kt(e) !== null &&
        (this.resultPostWaits !== void 0 || this.liveViewLaneSendsMore());
    if (this.messagesInProcessing.size === 0) this.resultPostWaits?.();
    let S =
      (w ||
        (n === "received" &&
          (r?.settingsRequest || (s !== void 0 && this.flushPolicy?.messagesReceivedWaits)))) &&
      !this.closed &&
      this.holdSwitchOn()
        ? (this.flushPolicy?.settingsReceiptsMaxWaitMs ?? 0)
        : 0;
    if (!y && S <= 0) {
      this.queueDeliveryAcks([...this.takeWaitingReceipts(ge), { eventId: e, status: n }]);
      return;
    }
    if (!y || n === "processed") this.waitingReceipts.set(e, n);
    if (w) this.receiptsRide ??= Promise.withResolvers();
    this.waitingReceiptsTimer ??= setTimeout(() => this.sendWaitingReceipts(), S);
  }
  receiptsMayRide() {
    return (
      this.flushPolicy?.receiptsRideUploads === !0 &&
      this.flushPolicy.settingsReceiptsMaxWaitMs > 0 &&
      !this.receiptsRideRefused &&
      this.holdSwitchOn()
    );
  }
  takeWaitingReceipts(e = () => !0) {
    let n = [...this.waitingReceipts]
      .filter(([s, r]) => e(s, r))
      .map(([s, r]) => ({ eventId: s, status: r }));
    for (let { eventId: s } of n) this.waitingReceipts.delete(s);
    if (this.waitingReceipts.size === 0)
      (clearTimeout(this.waitingReceiptsTimer), (this.waitingReceiptsTimer = void 0));
    if (![...this.waitingReceipts.values()].includes("processed"))
      (this.receiptsRide?.resolve(), (this.receiptsRide = void 0));
    return n;
  }
  sendWaitingReceipts(e) {
    this.queueDeliveryAcks(this.takeWaitingReceipts(e));
  }
  queueDeliveryAcks(e) {
    let n = !this.deliveryUploader.hasRoomFor(e.length),
      s = this.deliveryUploader.enqueue(e);
    if (n)
      (this.deliveryAcksWaitingForRoom.add(s),
        s.finally(() => this.deliveryAcksWaitingForRoom.delete(s)));
  }
  async sendProcessingAcks(e) {
    let n = e.splice(0);
    if (this.closed || n.length === 0) return;
    let s = this.takeWaitingReceipts(ge);
    if (
      (
        await this.request(
          "post",
          "/worker/events/delivery",
          {
            worker_epoch: this.workerEpoch,
            updates: [
              ...n.map((h) => ({ event_id: h, status: "processing" })),
              ...s.map((h) => ({ event_id: h.eventId, status: h.status }))
            ]
          },
          "processing ack"
        )
      ).ok
    )
      this.takeWaitingReceipts((h, y) => y === "received" && n.includes(h));
    else this.queueDeliveryAcks(s);
  }
  async ackPickupBehindWrittenRows() {
    this.sendWaitingAnswers();
    let e = this.pickupBarriers.at(-1)?.opened.promise,
      n = { opened: Promise.withResolvers(), writes: [], eventIds: [] };
    this.pickupBarriers.push(n);
    let s;
    try {
      if (
        (await Promise.resolve(),
        (n.eventIds = this.pendingProcessingAcks.splice(0)),
        (this.pickupTakesTick = !1),
        await e,
        this.pickupBarriers.includes(n))
      )
        s = await Pe(this.storeWrittenRowsThenAck(n.eventIds), this.pickupWaitMs);
      else ((s = !0), await this.sendProcessingAcks(n.eventIds));
    } finally {
      let r = this.pickupBarriers.indexOf(n);
      this.openPickupBarriers(r < 0 || s ? r + 1 : this.pickupBarriers.length);
    }
  }
  async storeWrittenRowsThenAck(e) {
    return (
      this.internalEventUploader.release("event", "pickup"),
      await this.flush(),
      await this.sendProcessingAcks(e),
      !0
    );
  }
  openPickupBarriers(e) {
    for (let n of this.pickupBarriers.splice(0, e)) {
      this.sendProcessingAcks(n.eventIds).catch(l);
      for (let { messages: s, opts: r, written: h } of n.writes)
        this.writeEventsNow(s, r).then(h.resolve, h.reject);
      n.opened.resolve();
    }
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return (
      this.internalEventUploader.pendingCount +
      this.countRowsAwaitingCompactSummary() +
      (this.rowsAwaitingCompactSummaryAtClose ?? 0)
    );
  }
  countRowsAwaitingCompactSummary() {
    let e = 0;
    for (let n of this.rowsAwaitingCompactSummary.values()) e += n.rows.length;
    return e;
  }
  get awaitsCompactSummary() {
    return this.rowsAwaitingCompactSummary.has("");
  }
  hasInternalEventRoom(e) {
    return !this.awaitsCompactSummary && this.internalEventUploader.hasRoomFor(e);
  }
  close(e) {
    this.closeExceptInternalEvents(e);
    let n = this.countRowsAwaitingCompactSummary();
    for (let s of this.rowsAwaitingCompactSummary.keys())
      this.takeRowsAwaitingCompactSummary(s, "close");
    ((this.rowsAwaitingCompactSummaryAtClose ??= n),
      this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close() + n));
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    (this.sendWaitingAnswers(), this.openPickupBarriers(this.pickupBarriers.length));
    let n = this.closed;
    ((this.closed = !0),
      this.giveBackRidingRows(),
      this.workerSocket?.usePostFromNowOn(),
      this.closeAbort.abort(),
      (this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0));
    let s = this.takeParkedRows();
    if (s.length > 0) this.eventUploader.enqueue(s);
    if ((this.workerState.close(), !n && e?.goodbye !== !1)) this.sendGoodbye();
    if ((this.stopHeartbeat(), this.clearProbeBeatTimer(), this.viewerCheckpointTimer))
      (clearTimeout(this.viewerCheckpointTimer), (this.viewerCheckpointTimer = null));
    (this.unsubscribeIdleTracker?.(), o7s(), this.stopToolCallGate?.());
    for (let r of this.toolCallRowWaiters.values()) for (let h of r) h.reached();
    if ((this.toolCallRowWaiters.clear(), this.streamEventTimer))
      (clearTimeout(this.streamEventTimer), (this.streamEventTimer = null));
    if (this.firstDeltaFlushTimer)
      (clearTimeout(this.firstDeltaFlushTimer), (this.firstDeltaFlushTimer = null));
    if (((this.streamEventBuffer = []), (this.pendingProcessingAcks = []), this.receiptsRide))
      this.sendWaitingReceipts(ge);
    if (
      (clearTimeout(this.waitingReceiptsTimer),
      clearTimeout(this.firstIdleTimer),
      e?.keepClientEvents !== !0)
    )
      this.logUndeliveredAtClose(
        "client_events",
        this.eventUploader.close({ retainUndelivered: e?.retainUndeliveredClientEvents === !0 })
      );
    this.deliveryUploader.close();
  }
  registerShutdownCleanup(e = { registerCleanup: bt, registerPreExitFlush: HM }, n = St) {
    (e.registerCleanup(() => this.beginShutdown()),
      e.registerPreExitFlush(() => this.finishShutdown(n)));
  }
  beginShutdown() {
    this.sendWaitingReceipts();
    try {
      let e = !this.closed && this.currentState === "running" && this.holdSwitchOn();
      if (
        ((this.shutdownKeepsClientEvents = e || (!this.closed && this.servedPolicyHolds())),
        this.shutdownKeepsClientEvents)
      )
        ((this.shutdownReleased = !0), this.applyUploadHold("shutdown"));
    } finally {
      this.closeExceptInternalEvents({ keepClientEvents: this.shutdownKeepsClientEvents });
    }
  }
  async finishShutdown(e = St) {
    await this.flushGoodbye();
    try {
      await Pe(
        Promise.allSettled([
          this.flushInternalEvents(),
          this.shutdownKeepsClientEvents ? this.flush() : void 0
        ]),
        e
      );
    } finally {
      (this.close(), this.onInternalEventLaneClosed?.(), await D$e().catch(() => {}));
    }
  }
}
var St = 3000;
function bs(e) {
  let n = e.post_turn_summary;
  if (!ws(n) || n.status_category !== "blocked") return e;
  return { ...e, post_turn_summary: { ...n, status_category: "need_input" } };
}
function ws(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "status_category" in e &&
    typeof e.status_category === "string"
  );
}
async function Ie(e) {
  let n = Oe(e.headers.get("x-ccr-conflict-reason"));
  if (n !== void 0) return (await gK(e), n);
  try {
    let s = await e.json();
    return Oe(s?.error?.reason ?? s?.reason) ?? Oe(s?.error?.type);
  } catch {}
  return;
}
function Oe(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
      return e;
    default:
      return;
  }
}
function Et(e) {
  let n = Nn().safeParse(e);
  if (!n.success) return;
  let s = n.data,
    r = s.hold_across_model_calls === !0,
    h = Q(s.max_age_ms, r ? we : Ut),
    y = h > 0 ? Q(s.max_events, r ? qn : Ln) : 0,
    w = Q(s.max_bytes, Yn),
    S = r ? 0 : Q(s.transcript_max_age_ms, Bt),
    P = S > h ? S : 0,
    C = Q(s.no_turn_max_age_ms, h),
    x = s.policy_version ?? void 0;
  return {
    maxEvents: y,
    maxAgeMs: h,
    maxBytes: w > 0 ? w : void 0,
    flushOnSamplingEnd: s.flush_on_sampling_end === !0 && !r,
    flushOnAssistant: s.flush_on_assistant === !0,
    jointUpload: s.joint_upload === !0,
    holdAcrossModelCalls: r,
    holdAgain:
      r && s.hold_again
        ? {
            softAgeMs: Q(s.hold_again.soft_age_ms, h),
            softEvents: Q(s.hold_again.soft_events, y),
            after: new Set((s.hold_again.after ?? []).slice(0, ht)),
            neverAfterTools: new Set((s.hold_again.never_after_tools ?? []).slice(0, Ce)),
            toolsWhoseResultsWait: s.hold_again.tools_whose_results_wait
              ? new Set(s.hold_again.tools_whose_results_wait.slice(0, Ce))
              : void 0
          }
        : void 0,
    mayWaitTypes: new Set((s.may_wait_types ?? []).filter((O) => pt.has(O))),
    mayWaitTypesRefused: F(s.may_wait_types ?? [], (O) => !pt.has(O)),
    settingsReceiptsMaxWaitMs: Q(s.settings_receipts_max_wait_ms, Xn),
    messagesReceivedWaits: s.messages_received_waits === !0,
    receiptsRideUploads: s.receipts_ride_uploads === !0,
    flushBeforeToolsWaitMs: Q(s.flush_before_tools_wait_ms, is),
    flushAfterTools: as.find((O) => O === s.flush_after_tools) ?? "none",
    flushAfterToolNames: new Set((s.flush_after_tool_names ?? []).slice(0, Ce)),
    mustFlushTypes: new Set((s.must_flush_types ?? []).slice(0, ht)),
    liveTwinTypes: new Set(
      (s.live_twin_types ?? []).filter((O) => !O.startsWith("control_")).slice(0, es)
    ),
    liveOnlyTypes: new Set((s.live_only_types ?? []).filter((O) => Zn.has(O))),
    transcriptMaxAgeMs: P,
    noTurnMaxAgeMs: C < h ? C : 0,
    mergeWorkerReports: s.merge_worker_reports === !0,
    firstIdleWaitsForWork: s.first_idle_waits_for_work === !0,
    controlTrafficKeepsHold: r && s.control_traffic_keeps_hold === !0,
    emptyCheckpointKeepsHold: r && s.empty_checkpoint_keeps_hold === !0,
    firstTurnHoldsEachCall: r && s.first_turn_holds_each_call === !0,
    settingsAnswersMaxWaitMs: Q(s.settings_answers_max_wait_ms, lt),
    initMaxWaitMs: r ? 0 : Q(s.init_max_wait_ms, lt),
    metadataWaitsForStatus: new Set((s.metadata_waits_for_status ?? []).filter((O) => ts.has(O))),
    metadataNeverSent: new Set((s.metadata_never_sent ?? []).filter((O) => Dt.has(O))),
    metadataMaxWaitMs: Q(s.metadata_max_wait_ms, we),
    costReportMaxWaitMs: Q(s.cost_report_max_wait_ms, ns),
    policyVersion: x !== void 0 && rs.test(x) ? x : void 0
  };
}
function kt(e) {
  let n = yfn(e.payload);
  return n === e.payload ? e : { ...e, payload: n };
}
function Ss(e) {
  return (
    "user_message_uuids" in e &&
    Array.isArray(e.user_message_uuids) &&
    e.user_message_uuids.length > 0 &&
    e.user_message_uuids.every((n) => typeof n === "string")
  );
}
function ae(e) {
  if (
    e.type === "system" &&
    e.subtype === "task_started" &&
    e.task_type === "local_bash" &&
    e.is_backgrounded === !1 &&
    !("owned_by_subagent" in e && e.owned_by_subagent)
  )
    return "system/task_started_foreground_shell";
  if (e.type === "rate_limit_event") {
    let n = e.rate_limit_info;
    if (!H(n) || typeof n.status !== "string") return e.type;
    let s =
      n.rateLimitGraceActive === !0
        ? "_grace"
        : n.overageInUse === !0 || n.isUsingOverage === !0
          ? "_overage"
          : "";
    return `${e.type}/${n.status}${s}`;
  }
  return "subtype" in e && typeof e.subtype === "string" ? `${e.type}/${e.subtype}` : e.type;
}
function xe(e) {
  let n = H(e) ? e.content : void 0;
  return Array.isArray(n) && n.some((s) => H(s) && s.type === "tool_result");
}
var Es = new Set(["ReadNotifications"]);
function ne(e, n) {
  return H(e) && e.type === "assistant" && e.parent_tool_use_id == null
    ? Ne(e.message, "tool_use", "id", n)
    : [];
}
function Ne(e, n, s, r) {
  let h = H(e) ? e.content : void 0;
  if (!Array.isArray(h)) return [];
  let y = [];
  for (let w of h)
    if (H(w) && w.type === n && (r === void 0 || (typeof w.name === "string" && r.has(w.name)))) {
      let S = w[s];
      if (typeof S === "string") y.push(S);
    }
  return y;
}
function Fe(e) {
  return new Promise((n) => {
    if (e.aborted) n();
    else e.addEventListener("abort", () => n(), { once: !0 });
  });
}
function de(e) {
  if (e.size > ls) {
    let n = e.keys().next().value;
    if (n !== void 0) e.delete(n);
  }
}
function Q(e, n) {
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(0, Math.trunc(e)), n) : 0;
}
function ks(e, n) {
  if (!e || !n) return e === n;
  return (
    e.maxEvents === n.maxEvents &&
    e.maxAgeMs === n.maxAgeMs &&
    e.maxBytes === n.maxBytes &&
    e.flushOnSamplingEnd === n.flushOnSamplingEnd &&
    e.flushOnAssistant === n.flushOnAssistant &&
    e.jointUpload === n.jointUpload &&
    e.holdAcrossModelCalls === n.holdAcrossModelCalls &&
    e.holdAgain?.softAgeMs === n.holdAgain?.softAgeMs &&
    e.holdAgain?.softEvents === n.holdAgain?.softEvents &&
    mit(e.holdAgain?.after, n.holdAgain?.after) &&
    mit(e.holdAgain?.neverAfterTools, n.holdAgain?.neverAfterTools) &&
    mit(e.holdAgain?.toolsWhoseResultsWait, n.holdAgain?.toolsWhoseResultsWait) &&
    mit(e.mayWaitTypes, n.mayWaitTypes) &&
    mit(e.liveOnlyTypes, n.liveOnlyTypes) &&
    mit(e.flushAfterToolNames, n.flushAfterToolNames) &&
    e.settingsReceiptsMaxWaitMs === n.settingsReceiptsMaxWaitMs &&
    e.messagesReceivedWaits === n.messagesReceivedWaits &&
    e.receiptsRideUploads === n.receiptsRideUploads &&
    e.flushBeforeToolsWaitMs === n.flushBeforeToolsWaitMs &&
    e.flushAfterTools === n.flushAfterTools &&
    e.mergeWorkerReports === n.mergeWorkerReports &&
    e.firstIdleWaitsForWork === n.firstIdleWaitsForWork &&
    e.transcriptMaxAgeMs === n.transcriptMaxAgeMs &&
    e.noTurnMaxAgeMs === n.noTurnMaxAgeMs &&
    e.controlTrafficKeepsHold === n.controlTrafficKeepsHold &&
    e.emptyCheckpointKeepsHold === n.emptyCheckpointKeepsHold &&
    e.firstTurnHoldsEachCall === n.firstTurnHoldsEachCall &&
    e.settingsAnswersMaxWaitMs === n.settingsAnswersMaxWaitMs &&
    e.initMaxWaitMs === n.initMaxWaitMs &&
    e.policyVersion === n.policyVersion &&
    e.mustFlushTypes.size === n.mustFlushTypes.size &&
    [...e.mustFlushTypes].every((s) => n.mustFlushTypes.has(s)) &&
    e.liveTwinTypes.size === n.liveTwinTypes.size &&
    [...e.liveTwinTypes].every((s) => n.liveTwinTypes.has(s)) &&
    e.metadataMaxWaitMs === n.metadataMaxWaitMs &&
    e.costReportMaxWaitMs === n.costReportMaxWaitMs &&
    e.metadataWaitsForStatus.size === n.metadataWaitsForStatus.size &&
    [...e.metadataWaitsForStatus].every((s) => n.metadataWaitsForStatus.has(s)) &&
    mit(e.metadataNeverSent, n.metadataNeverSent)
  );
}
function ye(e, n, s) {
  let r = typeof n === "string" ? Number(n) : n;
  if (typeof r === "number" && Number.isFinite(r)) return Math.min(Math.max(r, 0), 60000);
  if (n !== void 0)
    t(`CCRClient: non-finite ${e} (${typeof n}) \u2014 using ${s}ms`, { level: "warn" });
  return s;
}
function Rt(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}
function Zwo(e) {
  switch (e.type) {
    case "user":
    case "stream_event":
    case "tool_progress":
      return !0;
    case "assistant":
      return !e.message.content.some(
        (n) =>
          n.type === "tool_use" && (n.name === "SendUserMessage" || n.name === "PushNotification")
      );
    case "system":
      return (
        "subtype" in e &&
        (e.subtype === "thinking_tokens" ||
          e.subtype === "task_progress" ||
          e.subtype === "hook_progress")
      );
    default:
      return !1;
  }
}
function Tt(e) {
  if (e) return "?include_hearth=true";
  return "";
}
function Mt(e) {
  return e?.hearth;
}
function Le(e) {
  return e.payload.type === "user";
}
function cjn(e) {
  let n = e?.isTurnRunning ?? (() => hCe() > 0),
    s = De(),
    r = Date.now();
  return {
    noteActivity() {
      r = Date.now();
      try {
        s.emit();
      } catch (h) {
        l(h);
      }
    },
    sampleIdleSeconds() {
      let h = Date.now();
      if (n()) return ((r = h), 0);
      return Math.max(0, Math.floor((h - r) / 1000));
    },
    onActivity: s.subscribe
  };
}
var SCr = 30000;
var Lt = 50,
  Rs = 16384,
  qt = 500,
  ue = 10,
  Ms = 1000,
  As = 1000,
  Cs = 3,
  se = 3600000,
  $t = 1048576,
  Ps = 1e6;
class $e {
  decoder;
  clock;
  sink;
  watch = null;
  cancelTick = null;
  nextTickDueMs = 1 / 0;
  lastTickLagMs = 0;
  lastTickAtMs = 0;
  dispatchedSeen;
  lastLineAtMs = -1 / 0;
  disabled = !1;
  constructor(e, n = Fs, s = Is) {
    this.decoder = e;
    this.clock = n;
    this.sink = s;
    this.dispatchedSeen = e.framesDispatched;
  }
  observe(e, n) {
    let s = this.decoder.framesDispatched - this.dispatchedSeen;
    if (
      ((this.dispatchedSeen = this.decoder.framesDispatched),
      this.watch === null && this.decoder.pendingChars === 0 && !n.some(jt))
    )
      return;
    if (this.disabled) return;
    try {
      this.onRead(e, s, n);
    } catch (r) {
      this.disable(r);
    }
  }
  stop() {
    (this.cancelTick?.(),
      (this.cancelTick = null),
      (this.nextTickDueMs = 1 / 0),
      (this.watch = null));
  }
  onRead(e, n, s) {
    let r = this.clock.nowMs(),
      h = this.clock.cpuMicros(),
      y =
        n > 0 && this.decoder.pendingChars > 0
          ? Math.min(Buffer.byteLength(this.decoder.buffered()), e)
          : 0,
      w = this.watch,
      S = null;
    if (w !== null) {
      if (w.reads === 0 && n === 0 && !this.frameHasBegun()) return;
      let P = {
        gapMs: r - w.lastReadAtMs,
        loopLagMs: this.loopLagAt(r),
        cpuMs: (h - w.lastCpuMicros) / 1000
      };
      if ((this.stop(), w.reads === 0)) {
        if (P.loopLagMs !== null && P.gapMs - P.loopLagMs <= qt)
          S = { gapMs: P.gapMs, loopLagMs: P.loopLagMs, cpuMs: P.cpuMs };
      } else {
        if (P.gapMs > w.maxGap.gapMs) ((w.maxGap = P), (w.maxGapOffsetBytes = w.bytes));
        if ((w.reads++, (w.bytes += e), (w.lastReadAtMs = r), (w.lastCpuMicros = h), n === 0)) {
          ((this.watch = w), this.armTick(r));
          return;
        }
        ((w.bytes -= y), this.report(w, r));
      }
    }
    if (this.frameHasBegun()) {
      ((this.watch = qe(r, h, { reads: 1, bytes: n === 0 ? e : y, before: n === 0 ? S : null })),
        this.armTick(r));
      return;
    }
    if (S !== null && n === 1) this.report(qe(r, h, { reads: 1, bytes: e, before: S }), r);
    if (s.some(jt))
      ((this.watch = qe(r, h, { reads: 0, bytes: 0, before: null })), this.armTick(r));
  }
  frameHasBegun() {
    let e = this.decoder.pendingChars;
    return e > Cs || (e > 0 && /[^\r\n]/.test(this.decoder.buffered()));
  }
  report(e, n) {
    let { before: s, maxGap: r } = e,
      h = s !== null && s.loopLagMs >= Lt && e.bytes >= Rs;
    if (r.gapMs < Lt && !h) return;
    if (n - this.lastLineAtMs < As) return;
    ((this.lastLineAtMs = n),
      this.sink({
        frame_kib: ee(e.bytes / 1024, $t),
        read_count: ee(e.reads, Ps),
        receive_ms: ee(n - e.startedAtMs, se),
        ...(s !== null && {
          before_frame_gap_ms: ee(s.gapMs, se),
          before_frame_loop_lag_ms: ee(s.loopLagMs, se),
          before_frame_cpu_ms: ee(s.cpuMs, se)
        }),
        max_gap_ms: ee(r.gapMs, se),
        max_gap_offset_kib: ee(e.maxGapOffsetBytes / 1024, $t),
        ...(r.loopLagMs !== null && { max_gap_loop_lag_ms: ee(r.loopLagMs, se) }),
        max_gap_cpu_ms: ee(r.cpuMs, se)
      }));
  }
  loopLagAt(e) {
    if (this.nextTickDueMs !== 1 / 0)
      return Math.max(this.lastTickLagMs, e - this.nextTickDueMs, 0);
    return e - this.lastTickAtMs <= ue ? this.lastTickLagMs : null;
  }
  armTick(e) {
    ((this.lastTickLagMs = 0),
      (this.lastTickAtMs = e),
      (this.nextTickDueMs = e + ue),
      (this.cancelTick = this.clock.setTimer(this.onTick, ue)));
  }
  onTick = () => {
    try {
      this.cancelTick = null;
      let e = this.watch;
      if (e === null) return;
      let n = this.clock.nowMs();
      ((this.lastTickLagMs = Math.max(n - this.nextTickDueMs, 0)), (this.lastTickAtMs = n));
      let s = e.reads === 0 ? qt : Ms;
      if (n - e.lastReadAtMs >= s) {
        this.nextTickDueMs = 1 / 0;
        return;
      }
      ((this.nextTickDueMs = n + ue), (this.cancelTick = this.clock.setTimer(this.onTick, ue)));
    } catch (e) {
      this.disable(e);
    }
  };
  disable(e) {
    ((this.disabled = !0), this.stop(), l(e));
  }
}
function qe(e, n, { reads: s, bytes: r, before: h }) {
  return {
    reads: s,
    bytes: r,
    startedAtMs: e,
    lastReadAtMs: e,
    lastCpuMicros: n,
    before: h,
    maxGap: { gapMs: 0, loopLagMs: 0, cpuMs: 0 },
    maxGapOffsetBytes: 0
  };
}
function jt(e) {
  return e.event === "client_event";
}
function ee(e, n) {
  return Number.isFinite(e) ? Math.min(Math.max(Math.round(e), 0), n) : 0;
}
function Is(e) {
  Y("warn", "cli_sse_frame_stall", e);
}
function Os() {
  let e = process.cpuUsage();
  return e.user + e.system;
}
function xs(e, n) {
  let s = setTimeout(e, n);
  return (s.unref(), () => clearTimeout(s));
}
var Fs = { nowMs: () => performance.now(), cpuMicros: Os, setTimer: xs };
var Us = new Map([
  ["", "none"],
  ["text/event-stream", "event-stream"],
  ["text/html", "html"],
  ["application/xhtml+xml", "html"],
  ["application/json", "json"],
  ["text/plain", "text"],
  ["application/xml", "xml"],
  ["text/xml", "xml"]
]);
function zt(e) {
  let n = Ze(Ze(e ?? "", ";"), ",")
    .trim()
    .toLowerCase();
  return Us.get(n) ?? (n.endsWith("+json") ? "json" : "other");
}
var Gt = "worker_capabilities",
  Vt = "attestation-floor/1",
  rPs = "2",
  Yt = "worker-socket/2",
  ujn = "x-ccr-attestation-policy",
  Bs = new Map([
    ["verified", "VERIFIED"],
    ["verified_keyless_device", "VERIFIED_KEYLESS_DEVICE"],
    ["verified_by_gate", "VERIFIED_BY_GATE"]
  ]),
  Ws = new Map([
    ["server_authored", "SERVER_AUTHORED"],
    ["server_replayed", "SERVER_REPLAYED"],
    ["absent", "ABSENT"],
    ["invalid", "INVALID"],
    ["unchecked", "UNCHECKED"],
    ["unspecified", "UNSPECIFIED"]
  ]);
function Xt(e) {
  if (e === null) return { policy: void 0, fault: void 0 };
  let n = new Map();
  for (let w of Ze(e, ", ").split(";")) {
    let S = w.trim(),
      P = S.indexOf("="),
      C = P === -1 ? "" : S.slice(0, P);
    if (C !== "" && !n.has(C)) n.set(C, S.slice(P + 1));
  }
  let s = n.get("mode");
  if (n.get("v") !== "1") return { policy: void 0, fault: "policy_unparseable" };
  if (s === "off") return { policy: void 0, fault: void 0 };
  if (s !== "observe" && s !== "enforce") return { policy: void 0, fault: "policy_unparseable" };
  let r = Bs.get(n.get("level") ?? ""),
    h = new Set(),
    y = !1;
  for (let w of (n.get("accept") ?? "").split(",")) {
    let S = Ws.get(w);
    if (S !== void 0) h.add(S);
    else if (w !== "") y = !0;
  }
  return {
    policy: { enforce: s === "enforce", acceptLevel: r ?? "VERIFIED_BY_GATE", acceptStatuses: h },
    fault: r === void 0 || y ? "policy_partial" : void 0
  };
}
var Hs = 1000,
  Ns = 30000,
  Ls = 60000,
  ze = 15,
  qs = 60,
  $s = 30000,
  evo = new DOMException("no frame within the liveness timeout", "AbortError"),
  tvo = new DOMException("the connection is renewed", "AbortError"),
  js = 15000,
  Qt = 3,
  zs = "keepalive_tolerance_seconds",
  nvo = "x-ccr-sse-keepalive-interval-seconds",
  Gs = new Set([401, 403, 404]),
  Vs = /\btext\/event-stream\b/i,
  ce = 10,
  Ks = 500,
  Ys = 8000;
function Xs() {
  return !0;
}
var rvo = new Set(["workflow_launch", "queued_notification", "session_notice"]),
  Qs = p(() => u({ event_type: o() })),
  Js = "heartbeat_probe",
  Zs = "owner_present",
  er = "checkpoint_request",
  tr = new Set(["event_id"]),
  nr = /^"([\w-]{1,128})"$/;
class fjn {
  url;
  state = "idle";
  onData;
  onUserFrameReceived;
  onCloseCallback;
  onEventCallback;
  onDeliveredCallback;
  eventFilter;
  workerAttestationPolicySink;
  connectionPolicyReading;
  connectionSessionWriters;
  frameSessionWriters = new WeakMap();
  onEventVetoed;
  mostMembersInAFrame;
  lighterFrame;
  streamOpener;
  onFrameRefused;
  onHeartbeatProbe;
  onOwnerPresent;
  onCheckpointRequest;
  onDeviceStatusPublished;
  onReconnected;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  connectTimeoutMs;
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = new Set();
  reconnectAttempts = 0;
  hasEverConnected = !1;
  reconnectStartTime = null;
  reconnectTimer = null;
  connectErrorsSeen = new Set();
  livenessTimer = null;
  lastLivenessEvidenceAtMs = 0;
  lastFrameReadAtMs = 0;
  sseKeepaliveMaxIntervalSeconds;
  requireStreamEvidence;
  onUnexpectedContentType;
  advertisedMaxIntervalSeconds;
  echoedIntervalSeconds;
  nonOriginPolicy;
  nonOriginStreak = null;
  postUrl;
  serviceClockAtConnect;
  serviceClockAtFirstConnect;
  hasConnectedBefore = !1;
  held = null;
  isHeldForRenewal = !1;
  statementRenewalGate;
  endedForRenewal = new WeakSet();
  constructor(
    e,
    n = {},
    {
      sessionId: s,
      refreshHeaders: r,
      initialSequenceNum: h,
      getAuthHeaders: y,
      connectTimeoutMs: w,
      deferDelivery: S,
      sseKeepaliveMaxIntervalSeconds: P,
      requireStreamEvidence: C,
      onUnexpectedContentType: x,
      mostMembersInAFrame: O,
      lighterFrame: I,
      streamOpener: D
    } = {}
  ) {
    this.url = e;
    if (
      ((this.headers = n),
      (this.sessionId = s),
      (this.refreshHeaders = r),
      (this.getAuthHeaders = y ?? eW),
      (this.connectTimeoutMs = w ?? SCr),
      (this.postUrl = sr(e)),
      (this.sseKeepaliveMaxIntervalSeconds = P),
      (this.requireStreamEvidence = C ?? !1),
      (this.onUnexpectedContentType = x),
      (this.mostMembersInAFrame = O),
      (this.lighterFrame = I),
      (this.streamOpener = D),
      h !== void 0 && h > 0)
    )
      this.lastSequenceNum = h;
    if (S) this.held = { frames: [], close: null };
    (t(`SSETransport: SSE URL = ${e.href}`),
      t(`SSETransport: POST URL = ${this.postUrl}`),
      Y("info", "cli_sse_transport_initialized"));
  }
  serviceNow() {
    let e = this.serviceClockAtConnect;
    if (e === void 0) return;
    let n = performance.now() - e.monotonicMs;
    return Math.abs(Date.now() - e.wallMs - n) > Ls ? void 0 : e.serviceMs + n;
  }
  serviceNowAtMost() {
    let e = this.serviceClockAtConnect;
    if (e === void 0) return;
    return e.serviceMs + Math.max(performance.now() - e.monotonicMs, Date.now() - e.wallMs);
  }
  firstConnectedServiceMs() {
    return this.serviceClockAtFirstConnect;
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting")
      return (
        t(`SSETransport: Cannot connect, current state is ${this.state}`, { level: "error" }),
        Y("error", "cli_sse_connect_failed"),
        Promise.resolve()
      );
    return ((this.state = "reconnecting"), this.openStream(void 0));
  }
  async openStream(e) {
    let n = Date.now(),
      s = Jt(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
    ((this.advertisedMaxIntervalSeconds = s > ze ? s : void 0),
      (this.echoedIntervalSeconds = void 0));
    let r = new URL(this.url.href);
    if (this.lastSequenceNum > 0)
      r.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.advertisedMaxIntervalSeconds !== void 0)
      r.searchParams.set(zs, String(Qt * this.advertisedMaxIntervalSeconds));
    let h = [
      ...(this.workerAttestationPolicySink === void 0 ? [] : [Vt]),
      ...(this.streamOpener === void 0 ? [] : [Yt])
    ];
    if (h.length > 0) r.searchParams.set(Gt, h.join(","));
    let y = this.getAuthHeaders(),
      w = {
        ...this.headers,
        ...y,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": py(),
        "User-Agent": Ds()
      };
    if ((je(w, y), this.lastSequenceNum > 0)) w["Last-Event-ID"] = String(this.lastSequenceNum);
    (t(`SSETransport: Opening ${r.href}`), Y("info", "cli_sse_connect_opening"));
    let S = new AbortController();
    this.abortController = S;
    let P = !1,
      C = Math.min(
        typeof this.connectTimeoutMs === "function"
          ? this.connectTimeoutMs()
          : this.connectTimeoutMs,
        ac
      ),
      x =
        C > 0
          ? setTimeout(() => {
              ((P = !0), S.abort());
            }, C)
          : void 0;
    try {
      let O = () => fetch(r.href, { headers: w, signal: S.signal, ...oa({ url: r.href }) }),
        I;
      try {
        I = await (this.streamOpener
          ? this.streamOpener.open({ url: r.href, headers: w, signal: S.signal, openSse: O })
          : O());
      } catch (U) {
        if (S.signal.aborted && !P) return;
        throw U;
      } finally {
        (clearTimeout(x), e?.());
      }
      if (P) throw Error("the connect deadline fired as the response arrived");
      if (!I.ok) {
        let U = I.status === 403 ? zGt((le) => I.headers.get(le)) : void 0;
        if ((await gK(I, { timeoutMs: lnn }), S.signal.aborted)) return;
        let j = (this.nonOriginPolicy?.now ?? Date.now)(),
          G = this.advanceNonOriginStreak(U, j),
          q =
            G !== null &&
            this.nonOriginPolicy !== void 0 &&
            j - G.startedAtMs < this.nonOriginPolicy.windowMs,
          J = Gs.has(I.status) && !q;
        if (
          (t(
            `SSETransport: HTTP ${I.status}${J ? " (permanent)" : ""}${U ? ` source=${U}` : ""}${q ? ` (not origin \u2014 retrying; attempt ${G?.attempts})` : ""}`,
            { level: "error" }
          ),
          Y("error", "cli_sse_connect_http_error", {
            status: I.status,
            ...(U !== void 0 && { source: U }),
            ...(G !== null && { retried: q })
          }),
          this.connectErrorsSeen.add(`http_${I.status}`),
          this.diagConnectFailure(`HTTP ${I.status}${J ? " (permanent)" : ""}`, n),
          J)
        ) {
          ((this.nonOriginStreak = null),
            (this.state = "closed"),
            this.emitClose(
              I.status,
              U === void 0
                ? void 0
                : G === null
                  ? { rejectSource: U }
                  : {
                      rejectSource: G.source,
                      streak: {
                        source: G.source,
                        attempts: G.attempts,
                        streakMs: j - G.startedAtMs
                      }
                    }
            ));
          return;
        }
        if (q)
          try {
            this.nonOriginPolicy?.onRefused?.();
          } catch (le) {
            t(`SSETransport: onRefused handler threw: ${d(le)}`, { level: "error" });
          }
        this.handleConnectionError();
        return;
      }
      if (!I.body) {
        (t("SSETransport: No response body"),
          this.connectErrorsSeen.add("no_response_body"),
          this.diagConnectFailure("no response body", n),
          this.handleConnectionError());
        return;
      }
      if (this.requireStreamEvidence) {
        let U = zt(I.headers.get("content-type"));
        if (U !== "event-stream") {
          let j = I.headers.has(ann) || I.headers.has(ujn);
          if (!j) {
            if ((await gK(I, { timeoutMs: lnn }), S.signal.aborted)) return;
          }
          let G = `HTTP ${I.status}, content_type=${U}, ${j ? "with" : "without"} a session service header`;
          if (
            (t(`SSETransport: ${G}: ${j ? "taken as the stream" : "a failed connect"}`, {
              level: j ? "warn" : "error"
            }),
            Y(j ? "warn" : "error", "cli_sse_connect_unexpected_content_type", {
              status: I.status,
              content_type: U,
              accepted: j
            }),
            this.onUnexpectedContentType?.({ status: I.status, contentType: U, accepted: j }),
            !j)
          ) {
            (this.connectErrorsSeen.add("no_stream_evidence"),
              this.diagConnectFailure(
                `${G}: a proxy or gateway may have answered in place of the server`,
                n
              ),
              this.handleConnectionError());
            return;
          }
        }
      }
      let D = Date.now() - n,
        z = Date.parse(I.headers.get("date") ?? "");
      if (!Number.isNaN(z))
        this.serviceClockAtConnect = {
          serviceMs: z,
          wallMs: Date.now(),
          monotonicMs: performance.now()
        };
      if (!this.hasConnectedBefore)
        ((this.hasConnectedBefore = !0),
          (this.serviceClockAtFirstConnect = Number.isNaN(z) ? void 0 : z));
      if (this.advertisedMaxIntervalSeconds !== void 0) {
        let U = Number(I.headers.get(nvo));
        if (Number.isInteger(U) && U > 0) this.echoedIntervalSeconds = Jt(U);
      }
      let N = this.workerAttestationPolicySink === void 0 ? void 0 : Xt(I.headers.get(ujn));
      this.connectionPolicyReading = N;
      let R = I.headers.get(ann),
        W = iPs(R),
        B = W === void 0 ? void 0 : { writers: W, statedAtMs: Date.now() };
      if (((this.connectionSessionWriters = B), N !== void 0)) {
        if ((this.workerAttestationPolicySink?.(N), S.signal.aborted)) return;
      }
      let V =
        this.advertisedMaxIntervalSeconds === void 0
          ? ""
          : ` keepalive_interval=${this.keepaliveIntervalMs() / 1000}s${this.echoedIntervalSeconds === void 0 ? " (no echo)" : ""}`;
      if (
        (t("SSETransport: Connected" + V),
        Y("info", "cli_sse_connect_connected", {
          duration_ms: D,
          ...this.keepaliveDiagnosticFields(),
          session_writers: W ?? (R === null ? "header_absent" : "header_unreadable"),
          ...(N !== void 0 && {
            attestation_policy:
              N.policy === void 0 ? "none" : N.policy.enforce ? "enforce" : "observe",
            ...(N.fault !== void 0 && { attestation_policy_fault: N.fault })
          })
        }),
        this.reconnectAttempts === 0)
      )
        Dr("sse_connect_ms", D, n - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let U = this.reconnectStartTime
          ? Math.round((Date.now() - this.reconnectStartTime) / 1000)
          : 0;
        this.onDiagnostic?.(
          `SSE reconnected after ${this.reconnectAttempts} attempt(s), ${U}s downtime` +
            (this.connectErrorsSeen.size > 0
              ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
              : ""),
          "warn",
          "sse_recovered"
        );
      } else this.onDiagnostic?.(`SSE connected in ${D}ms`, "info", "sse_connected");
      this.connectErrorsSeen.clear();
      let K = this.hasEverConnected;
      if (
        ((this.hasEverConnected = !0),
        (this.state = "connected"),
        this.streamOpener?.restartsBackoffAtOpen() ?? !0)
      )
        this.reconnectAttempts = 0;
      ((this.reconnectStartTime = null), this.resetLivenessTimer());
      let k = Vs.test(I.headers.get("content-type") ?? "");
      if (K)
        try {
          this.onReconnected?.();
        } catch (U) {
          (t(`SSETransport: onReconnected handler threw: ${d(U)}`, { level: "error" }),
            Y("error", "cli_sse_reconnected_handler_threw"));
        }
      if (this.isHeldForRenewal) {
        if ((this.deliverHeldForRenewal(B), S.signal.aborted)) return;
      }
      await this.readStream(I.body, k, B);
    } catch (O) {
      if (P) {
        (t(`SSETransport: No response within ${C}ms, reconnecting`, { level: "error" }),
          Y("error", "cli_sse_connect_timeout", { timeout_ms: C }),
          this.connectErrorsSeen.add("connect_timeout"),
          this.diagConnectFailure(`no response in ${C / 1000}s`, n),
          this.handleConnectionError());
        return;
      }
      (t(`SSETransport: Connection error: ${d(O)}`, { level: "error" }),
        Y("error", "cli_sse_connect_error"),
        this.connectErrorsSeen.add("fetch_failed"),
        this.diagConnectFailure(d(O), n),
        this.handleConnectionError());
    }
  }
  advanceNonOriginStreak(e, n) {
    let s = this.nonOriginPolicy;
    if (s === void 0 || e === void 0) return null;
    if (!wKe(e)) return ((this.nonOriginStreak = null), null);
    let r = this.nonOriginStreak;
    if (r === null || n - r.lastAtMs > s.maxGapMs)
      ((r = { source: e, startedAtMs: n, lastAtMs: n, attempts: 0 }), (this.nonOriginStreak = r));
    return (r.attempts++, (r.lastAtMs = n), r);
  }
  settleNonOriginStreakRecovered() {
    let e = this.nonOriginStreak;
    if (e === null) return;
    this.nonOriginStreak = null;
    let n = {
      source: e.source,
      attempts: e.attempts,
      streakMs: (this.nonOriginPolicy?.now ?? Date.now)() - e.startedAtMs
    };
    Y("info", "cli_sse_nonorigin_403_recovered", {
      source: n.source,
      attempts: n.attempts,
      streak_ms: n.streakMs
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(n);
    } catch (s) {
      t(`SSETransport: onRecovered handler threw: ${d(s)}`, { level: "error" });
    }
  }
  diagConnectFailure(e, n) {
    if (!this.onDiagnostic) return;
    let s = this.reconnectAttempts + 1;
    if (s > 3 && s % 10 !== 0) return;
    let r = Date.now() - n,
      h = this.reconnectStartTime
        ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting`
        : "",
      y =
        this.connectErrorsSeen.size > 1
          ? `, errors=[${[...this.connectErrorsSeen].join(",")}]`
          : "";
    this.onDiagnostic(
      `SSE connect failed (${e}) attempt=${s} took=${r}ms${h}${y}`,
      "warn",
      "sse_connect_failed"
    );
  }
  async readStream(e, n, s) {
    let r = e.getReader(),
      h = new U9e(),
      y = this.abortController,
      w = () => y !== null && this.endedForRenewal.has(y),
      S = n && i.CLAUDE_CODE_DIAGNOSTICS_FILE ? new $e(h) : null;
    try {
      while (!0) {
        let { done: P, value: C } = await r.read();
        if (P) break;
        let x = h.push(C);
        S?.observe(C.byteLength, x);
        for (let O of x) {
          if (!w())
            (this.resetLivenessTimer(), (this.lastFrameReadAtMs = this.lastLivenessEvidenceAtMs));
          if (this.nonOriginStreak !== null && n) this.settleNonOriginStreakRecovered();
          if (O.id && O.event !== "ephemeral_event") {
            let I = parseInt(O.id, 10);
            if (!isNaN(I)) {
              if (this.seenSequenceNums.has(I))
                (t(
                  `SSETransport: DUPLICATE frame seq=${I} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`,
                  { level: "warn" }
                ),
                  Y("warn", "cli_sse_duplicate_sequence"));
              else if ((this.seenSequenceNums.add(I), this.seenSequenceNums.size > 1000)) {
                let D = this.lastSequenceNum - 200;
                for (let z of this.seenSequenceNums) if (z < D) this.seenSequenceNums.delete(z);
              }
              if (I > this.lastSequenceNum) this.lastSequenceNum = I;
            }
          }
          if (O.event && O.data) this.handleSSEFrame(O.event, O.data, s);
          else if (O.data)
            (t("SSETransport: Frame has data: but no event: field \u2014 dropped", {
              level: "warn"
            }),
              Y("warn", "cli_sse_frame_missing_event_field"));
        }
      }
    } catch (P) {
      if (this.abortController?.signal.aborted || w()) return;
      (t(`SSETransport: Stream read error: ${d(P)}`, { level: "error" }),
        Y("error", "cli_sse_stream_read_error"));
    } finally {
      (S?.stop(), r.releaseLock());
    }
    if (this.state !== "closing" && this.state !== "closed" && !w()) {
      if ((t("SSETransport: Stream ended, reconnecting"), this.state === "connected"))
        (this.connectErrorsSeen.add("stream_ended"),
          this.onDiagnostic?.(
            "SSE stream ended by server, reconnecting",
            "warn",
            "sse_stream_ended"
          ));
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, n, s, r = Date.now(), h = performance.now()) {
    if (this.mostMembersInAFrame !== void 0 && Eye(n, this.mostMembersInAFrame) === void 0) {
      let S = this.lighterFrame?.(n);
      if (S !== void 0 && Eye(S, this.mostMembersInAFrame) !== void 0) {
        this.handleSSEFrame(e, S, s, r, h);
        return;
      }
      this.onFrameRefused?.(nr.exec(Yde(n, tr)?.get("event_id") ?? "")?.[1]);
      return;
    }
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(n);
      return;
    }
    if (this.held !== null) {
      this.held.frames.push({
        eventType: e,
        data: n,
        policyReading: this.connectionPolicyReading,
        sessionWriters: s,
        receivedWallMs: r,
        receivedAtMs: h
      });
      return;
    }
    if (e !== "client_event") {
      (t(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, { level: "warn" }),
        Y("warn", "cli_sse_unexpected_event_type", { event_type: e }));
      return;
    }
    let y;
    try {
      y = te(n);
    } catch (S) {
      t(`SSETransport: Failed to parse client_event data: ${d(S)}`, { level: "error" });
      return;
    }
    let w = y.payload;
    if (w && typeof w === "object" && "type" in w) {
      let S = this.sessionId ? ` session=${this.sessionId}` : "",
        P = y.device_attestation_status ? ` attestation=${y.device_attestation_status}` : "";
      if (
        (t(
          `SSETransport: Event seq=${y.sequence_num} event_id=${y.event_id} event_type=${y.event_type} payload_type=${String(w.type)}${P}${S}`
        ),
        Y("info", "cli_sse_message_received"),
        s !== void 0 && this.state === "connected" && this.statementRenewalGate?.(y, s) === !0)
      ) {
        ((this.held = {
          frames: [
            {
              eventType: e,
              data: n,
              policyReading: this.connectionPolicyReading,
              sessionWriters: s,
              receivedWallMs: r,
              receivedAtMs: h
            }
          ],
          close: null
        }),
          (this.isHeldForRenewal = !0),
          this.renewConnection());
        return;
      }
      if (s !== void 0) this.frameSessionWriters.set(y, s);
      let C = this.eventFilter?.(y);
      if (C) Y("warn", "cli_sse_event_filtered", C === !0 ? void 0 : { decision: C });
      else if (typeof w.type === "string" && rvo.has(w.type) && y.event_type !== w.type)
        (Y("warn", "cli_sse_server_only_event_type_mismatch", {
          event_type: y.event_type,
          payload_type: w.type
        }),
          this.onEventVetoed?.(y));
      else if (w.type === "control_request" && y.source === "worker")
        Y("warn", "cli_sse_worker_control_request_dropped");
      else {
        if ((this.onDeliveredCallback?.(y, s, h), w.type === "user" && typeof w.uuid === "string"))
          this.onUserFrameReceived?.(w.uuid, r, y.processing_at, h);
        this.onData?.(
          _(y.payload) +
            `
`
        );
      }
    } else t(`SSETransport: Ignoring client_event with no type in payload: event_id=${y.event_id}`);
    this.onEventCallback?.(y);
  }
  emitClose(e, n) {
    if (this.held !== null) {
      if (((this.held.close = { code: e, detail: n }), this.isHeldForRenewal))
        ((this.isHeldForRenewal = !1), this.startDelivery());
      return;
    }
    this.onCloseCallback?.(e, n);
  }
  renewConnection() {
    if (this.state !== "connected") return;
    if (
      (t("SSETransport: Renewing the connection"),
      Y("info", "cli_sse_renew_connection"),
      this.refreshHeaders)
    ) {
      let e = this.refreshHeaders();
      (Object.assign(this.headers, e), je(this.headers, e));
    }
    if ((this.clearLivenessTimer(), this.abortController !== null))
      (this.endedForRenewal.add(this.abortController),
        this.abortController.abort(tvo),
        (this.abortController = null));
    if (this.streamOpener?.restartsBackoffAtEnd()) this.reconnectAttempts = 0;
    ((this.state = "reconnecting"),
      (this.reconnectTimer = setTimeout(() => {
        ((this.reconnectTimer = null), this.connect());
      }, 0)));
  }
  setStatementRenewalGate(e) {
    this.statementRenewalGate = e;
  }
  deliverHeldForRenewal(e) {
    this.isHeldForRenewal = !1;
    for (let n of this.held?.frames ?? []) n.sessionWriters = e;
    this.startDelivery();
  }
  startDelivery() {
    let e = this.held;
    if (e === null) return;
    this.held = null;
    let n;
    for (let s of e.frames) {
      if (s.policyReading !== void 0 && s.policyReading !== n) {
        if (((n = s.policyReading), !this.handSinkPolicyReading(n))) return;
      }
      this.handleSSEFrame(s.eventType, s.data, s.sessionWriters, s.receivedWallMs, s.receivedAtMs);
    }
    if (
      this.connectionPolicyReading !== void 0 &&
      this.connectionPolicyReading !== n &&
      !this.handSinkPolicyReading(this.connectionPolicyReading)
    )
      return;
    if (e.close !== null) this.onCloseCallback?.(e.close.code, e.close.detail);
  }
  handSinkPolicyReading(e) {
    return (this.workerAttestationPolicySink?.(e), this.state !== "closing");
  }
  handleEphemeralFrame(e) {
    let n;
    try {
      n = te(e);
    } catch (r) {
      t(`SSETransport: Failed to parse ephemeral_event data: ${d(r)}`, { level: "error" });
      return;
    }
    let s = Qs().safeParse(n);
    if (s.success && s.data.event_type === Zs && this.onOwnerPresent !== void 0) {
      Y("info", "cli_sse_owner_present_received");
      try {
        this.onOwnerPresent();
      } catch (r) {
        t(`SSETransport: onOwnerPresent handler threw: ${d(r)}`, { level: "error" });
      }
      return;
    }
    if (s.success && s.data.event_type === er && this.onCheckpointRequest !== void 0) {
      Y("info", "cli_sse_checkpoint_request_received");
      try {
        this.onCheckpointRequest();
      } catch (r) {
        (l(r), Y("error", "cli_sse_checkpoint_request_handler_threw"));
      }
      return;
    }
    if (!s.success || s.data.event_type !== Js) {
      Y("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: s.success ? s.data.event_type : "unparseable"
      });
      return;
    }
    Y("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (r) {
      (t(`SSETransport: onHeartbeatProbe handler threw: ${d(r)}`, { level: "error" }),
        Y("error", "cli_sse_heartbeat_probe_handler_threw"));
    }
  }
  handleConnectionError() {
    if ((this.clearLivenessTimer(), this.state === "closing" || this.state === "closed")) return;
    (this.abortController?.abort(), (this.abortController = null));
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let n = e - this.reconnectStartTime;
    if (this.reconnectTimer) (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    if (this.refreshHeaders) {
      let r = this.refreshHeaders();
      (Object.assign(this.headers, r),
        je(this.headers, r),
        t("SSETransport: Refreshed headers for reconnect"));
    }
    if (((this.state = "reconnecting"), this.streamOpener?.restartsBackoffAtEnd()))
      this.reconnectAttempts = 0;
    this.reconnectAttempts++;
    let s = this.streamOpener?.reconnectsAtOnce()
      ? 0
      : Ky({
          attempt: this.reconnectAttempts,
          baseMs: Hs,
          capMs: Ns,
          jitter: { kind: "symmetric", ratio: 0.25 }
        });
    (t(
      `SSETransport: Reconnecting in ${Math.round(s)}ms (attempt ${this.reconnectAttempts}, ${Math.round(n / 1000)}s elapsed)`
    ),
      Y("error", "cli_sse_reconnect_attempt", { reconnectAttempts: this.reconnectAttempts }),
      (this.reconnectTimer = setTimeout(() => {
        ((this.reconnectTimer = null), this.connect());
      }, s)));
  }
  onLivenessTimeout = () => {
    ((this.livenessTimer = null),
      t("SSETransport: Liveness timeout, reconnecting", { level: "error" }),
      Y("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields()),
      this.connectErrorsSeen.add("liveness_timeout"),
      this.onDiagnostic?.(
        `SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs() / 1000}s, reconnecting`,
        "warn",
        "sse_liveness_timeout"
      ),
      this.abortController?.abort(evo),
      this.handleConnectionError());
  };
  resetLivenessTimer() {
    ((this.lastLivenessEvidenceAtMs = Date.now()),
      this.clearLivenessTimer(),
      (this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs())));
  }
  keepaliveIntervalMs() {
    return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? ze) * 1000;
  }
  livenessTimeoutMs() {
    return this.keepaliveIntervalMs() + $s;
  }
  keepaliveDiagnosticFields() {
    return this.advertisedMaxIntervalSeconds === void 0
      ? {}
      : {
          keepalive_tolerance_s: Qt * this.advertisedMaxIntervalSeconds,
          keepalive_interval_s: this.keepaliveIntervalMs() / 1000,
          liveness_timeout_s: this.livenessTimeoutMs() / 1000,
          keepalive_interval_echoed: this.echoedIntervalSeconds !== void 0
        };
  }
  clearLivenessTimer() {
    if (this.livenessTimer) (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
  }
  async write(e) {
    let n = this.getAuthHeaders();
    if (Object.keys(n).length === 0) {
      (t("SSETransport: No session token available for POST"), Y("warn", "cli_sse_post_no_token"));
      return;
    }
    let s = {
      ...n,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": py(),
      "User-Agent": Ds()
    };
    t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let r = 1; r <= ce; r++) {
      try {
        let h = await Ht.post(this.postUrl, e, { headers: s, validateStatus: Xs });
        if (h.status === 200 || h.status === 201) {
          t(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (
          (t(`SSETransport: POST ${h.status} body=${_(h.data).slice(0, 200)}`),
          h.status >= 400 && h.status < 500 && h.status !== 429)
        ) {
          (t(`SSETransport: POST returned ${h.status} (client error), not retrying`),
            Y("warn", "cli_sse_post_client_error", { status: h.status }));
          return;
        }
        (t(`SSETransport: POST returned ${h.status}, attempt ${r}/${ce}`),
          Y("warn", "cli_sse_post_retryable_error", { status: h.status, attempt: r }));
      } catch (h) {
        (t(`SSETransport: POST error: ${d(h)}, attempt ${r}/${ce}`),
          Y("warn", "cli_sse_post_network_error", { attempt: r }));
      }
      if (r === ce) {
        (t(`SSETransport: POST failed after ${ce} attempts, continuing`),
          Y("warn", "cli_sse_post_retries_exhausted"));
        return;
      }
      await X(Ky({ attempt: r, baseMs: Ks, capMs: Ys }));
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isReadStreamRecentlyAlive() {
    return (
      this.state === "connected" &&
      Date.now() - this.lastLivenessEvidenceAtMs < this.getReadStreamRecentLivenessWindowMs()
    );
  }
  lastFrameReadAt() {
    return this.lastFrameReadAtMs === 0 ? void 0 : this.lastFrameReadAtMs;
  }
  getReadStreamRecentLivenessWindowMs() {
    return this.keepaliveIntervalMs() + js;
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(e) {
    this.onData = e;
  }
  setOnUserFrameReceived(e) {
    this.onUserFrameReceived = e;
  }
  setOnClose(e) {
    this.onCloseCallback = e;
  }
  setNonOriginRejectionPolicy(e) {
    this.nonOriginPolicy = e;
  }
  setOnEvent(e) {
    this.onEventCallback = e;
  }
  setOnDelivered(e) {
    this.onDeliveredCallback = e;
  }
  getSessionWriters() {
    return this.connectionSessionWriters?.writers;
  }
  getSessionWritersStatement() {
    return this.connectionSessionWriters;
  }
  sessionWritersOf(e) {
    return this.frameSessionWriters.get(e);
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  setWorkerAttestationPolicySink(e) {
    this.workerAttestationPolicySink = e;
  }
  requiresStreamEvidence() {
    return this.requireStreamEvidence;
  }
  setOnFrameRefused(e) {
    this.onFrameRefused = e;
  }
  setOnEventVetoed(e) {
    this.onEventVetoed = e;
  }
  setOnHeartbeatProbe(e) {
    this.onHeartbeatProbe = e;
  }
  setOnOwnerPresent(e) {
    this.onOwnerPresent = e;
  }
  setOnCheckpointRequest(e) {
    this.onCheckpointRequest = e;
  }
  setOnDeviceStatusPublished(e) {
    this.onDeviceStatusPublished = e;
  }
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer) (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.clearLivenessTimer(),
      (this.state = "closing"),
      (this.nonOriginStreak = null),
      (this.held = null),
      (this.isHeldForRenewal = !1),
      this.abortController?.abort(),
      (this.abortController = null));
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function je(e, n) {
  if (n.Cookie) delete e.Authorization;
  if (n.Authorization) (delete e.Cookie, delete e["X-Organization-Uuid"]);
}
function Jt(e) {
  return Math.min(Math.max(e, ze), qs);
}
function sr(e) {
  let n = e.pathname;
  if (n.endsWith("/stream")) n = n.slice(0, -7);
  return `${e.protocol}//${e.host}${n}`;
}
var ovo = 180000,
  rr = 90000;
async function svo(e) {
  let { sessionUrl: n, ingressToken: s, sessionId: r, initialSequenceNum: h, getAuthToken: y } = e,
    w = () => e.inboundReadReceipts?.() === !0,
    S;
  if (y) S = () => oxe(y());
  else Sar(s);
  let P = e.epoch ?? (await tpt(n, s));
  t(
    `[bridge:repl] CCR v2: worker sessionId=${r} epoch=${P}${e.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`
  );
  let C = new URL(n);
  C.pathname = C.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let x = new fjn(
      C,
      {},
      {
        sessionId: r,
        initialSequenceNum: h,
        getAuthHeaders: S,
        connectTimeoutMs: e.sseConnectTimeoutMs,
        sseKeepaliveMaxIntervalSeconds: e.sseKeepaliveMaxIntervalSeconds
      }
    ),
    O = !e.outboundOnly,
    I = (e.selfHealHeartbeats ?? !1) && O,
    D = (e.nonOrigin403Retry ?? !1) && O,
    z = D && I;
  if (D)
    x.setNonOriginRejectionPolicy({
      windowMs: ovo,
      maxGapMs: rr,
      onRecovered: e.onNonOriginRejectionRecovered
    });
  let N,
    R = !1;
  function W(k, U, j) {
    if (R) return;
    R = !0;
    try {
      (B.close({ goodbye: !1, retainUndeliveredClientEvents: e.retainUndeliveredOnClose === !0 }),
        x.close());
    } catch (G) {
      l(G);
    }
    try {
      N?.(k, U, j);
    } catch (G) {
      l(G);
    }
  }
  let B = new IN(x, new URL(n), {
    getAuthHeaders: S,
    heartbeatIntervalMs: e.heartbeatIntervalMs,
    heartbeatJitterFraction: e.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (e.advertiseHeartbeatProbeSupport ?? !1) && O,
    uploadTrim: e.uploadTrim,
    uploadHoldMarker: e.uploadHoldMarker,
    skipPlainTaskProgress: e.skipPlainTaskProgress,
    eventHoldEnabled: e.eventHoldEnabled,
    ...(e.processExiting && { processExiting: e.processExiting }),
    beatOnStaleReconnect: (e.beatOnStaleReconnect ?? !1) && O,
    idleTracker: e.idleTracker,
    beatOnReactivation: (e.beatOnReactivation ?? !1) && O,
    skipRedundantHeartbeats: e.skipRedundantHeartbeats,
    streamEventFlushIntervalMs: e.streamEventFlushIntervalMs,
    streamEventFirstFlushMs: e.streamEventFirstFlushMs,
    gzipRequestBodyFetch: e.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs: e.noSubscriberStreamEventFlushIntervalMs,
    noSubscriberUploadHoldMs: e.noSubscriberUploadHoldMs,
    dropUnwatchedStreamEvents: e.dropUnwatchedStreamEvents,
    nonOrigin403Transient: z,
    internalEventUploader: e.internalEventUploader,
    onEpochMismatch: (k) => {
      let U = e.causeTypedCloseCodes ? _Cr[k] : 4090;
      throw (
        t(
          `[bridge:repl] CCR v2: terminal request-path condition (${k}) \u2014 closing with ${U} for ${U === 4094 ? "auth recovery" : "poll-loop recovery"}`
        ),
        W(U, k),
        Error("terminal request-path condition")
      );
    },
    onRequestAuthOk: e.onRequestAuthOk,
    ...(I && {
      onHeartbeatLost: () => {
        if (R) return;
        (t(
          "[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild",
          { level: "warn" }
        ),
          W(4093));
      }
    })
  });
  (x.setOnEvent((k) => {
    if (e.processExiting?.() && Le(k)) return;
    if ((B.reportDelivery(k.event_id, "received"), !(w() && U4s(k.event_id))))
      B.reportDelivery(k.event_id, "processed");
  }),
    x.setEventFilter((k) => {
      if (CZn(k)) return !0;
      return w() ? B4s(k) : !1;
    }));
  let V,
    K = !1;
  return {
    write(k) {
      return B.writeEvent(k);
    },
    writeBatch(k) {
      return B.writeEvents(k);
    },
    close(k) {
      if (
        ((R = !0),
        B.close({ goodbye: k?.goodbye, retainUndeliveredClientEvents: k?.retainUndelivered }),
        !k?.retainUndelivered)
      )
        B.discardUndeliveredClientEvents();
      x.close();
    },
    takeUndeliveredEvents() {
      return B.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return B.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(k) {
      B.adoptClientEvents(k);
    },
    flushGoodbye() {
      return B.flushGoodbye();
    },
    isConnectedStatus() {
      return K;
    },
    getStateLabel() {
      if (x.isClosedStatus()) return "closed";
      if (x.isConnectedStatus()) return K ? "connected" : "init";
      return "connecting";
    },
    setOnData(k) {
      x.setOnData(k);
    },
    setOnClose(k) {
      ((N = k),
        x.setOnClose((U, j) => {
          W(U ?? 4092, void 0, j);
        }));
    },
    setOnConnect(k) {
      V = k;
    },
    getLastSequenceNum() {
      return x.getLastSequenceNum();
    },
    lastFrameReadAt() {
      return x.lastFrameReadAt();
    },
    getEpoch() {
      return P;
    },
    reportState(k, U) {
      B.reportState(k, U);
    },
    reportMetadata(k) {
      B.reportMetadata(k);
    },
    reportInternalMetadata(k) {
      if (R) return !1;
      return (B.reportInternalMetadata(k), !0);
    },
    droppedDurableBatchCount() {
      return B.droppedDurableBatches;
    },
    flushWorkerState() {
      return B.flushWorkerState();
    },
    droppedWorkerStatePatchCount() {
      return B.droppedWorkerStatePatches;
    },
    reportDelivery(k, U) {
      B.reportDelivery(k, U);
    },
    setStreamEventFlushIntervalMs(k) {
      B.setStreamEventFlushIntervalMs(k);
    },
    setStreamEventFirstFlushMs(k) {
      B.setStreamEventFirstFlushMs(k);
    },
    setNoSubscriberStreamEventFlushIntervalMs(k) {
      B.setNoSubscriberStreamEventFlushIntervalMs(k);
    },
    setNoSubscriberUploadHoldMs(k) {
      B.setNoSubscriberUploadHoldMs(k);
    },
    setDropUnwatchedStreamEvents(k) {
      B.setDropUnwatchedStreamEvents(k);
    },
    setSubscribersReportedListener(k) {
      B.setSubscribersReportedListener(k);
    },
    mayHoldUploads() {
      return B.mayHoldUploads();
    },
    flush(k) {
      return B.flush(k);
    },
    flushDeliveryAcks(k) {
      return B.flushDeliveryAcks(k);
    },
    flushInternalEvents(k) {
      return B.flushInternalEvents(k);
    },
    getUploadBacklog() {
      return B.uploadBacklog();
    },
    getInternalEventBacklog() {
      return { pending: B.internalEventsPending, droppedBatches: B.droppedInternalBatches };
    },
    trackFirstFrameUpload(k) {
      return B.trackFirstFrameUpload(k);
    },
    getInternalEventWriter() {
      return (k, U, j) => B.writeInternalEvent(k, U, j);
    },
    getInternalEventReaders() {
      return {
        readMain: (k) => (k ? B.readInternalEventsForCatchUp(k) : B.readInternalEvents()),
        readSubagents: () => B.readSubagentInternalEvents(),
        readSubagent: (k, U) => B.readAgentInternalEvents(k, U)
      };
    },
    getInternalEventsPort() {
      return {
        epoch: () => B.getWorkerEpoch(),
        postBatch: (k, U) => B.postInternalEventsBatch(k, U),
        listPage: (k, U) => B.getInternalEventsPage(k, U)
      };
    },
    connect() {
      B.initialize(P).then(
        (k) => {
          if (R) return;
          if (
            ((K = !0),
            t(`[bridge:repl] v2 transport ready for writes (epoch=${P}); opening the read stream`),
            V?.(k),
            !e.outboundOnly && !R)
          )
            x.connect();
        },
        (k) => {
          (t(`[bridge:repl] CCR v2 initialize failed: ${d(k)}`, { level: "error" }), W(4091));
        }
      );
    }
  };
}
export {
  zHt,
  KHt,
  M1e,
  nPs,
  _Cr,
  Qwo,
  bCr,
  IN,
  Zwo,
  cjn,
  SCr,
  rPs,
  ujn,
  evo,
  tvo,
  nvo,
  rvo,
  fjn,
  ovo,
  svo
};

//# sourceMappingURL=chunk-bc0w6gb3.js.map
