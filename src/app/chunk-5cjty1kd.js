// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { nt, q } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import { c } from "./chunk-acd8w9vv.js";
import { ui } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { _, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-qywdxehb.js";
import "./chunk-vw9e882a.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import "./chunk-rhk37je5.js";
import "./chunk-afxq0vrk.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-zjm5ncxc.js";
import { j1n, Two, T4, W1n } from "./chunk-tqd8rcc8.js";
import "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import "./chunk-arw2bgak.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxy1036.js";
import "./chunk-c3npf81n.js";
import "./chunk-qakn3b85.js";
import "./chunk-4nzy53ma.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-xe386mry.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-13nwb0xt.js";
import "./chunk-nrysaqwk.js";
import "./chunk-ddpw2j06.js";
import { PV, jt } from "./chunk-ajtyjx88.js";
import "./chunk-95k4nfdh.js";
import "./chunk-dvghjmtr.js";
import "./chunk-at88wjsn.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-6xjawpfq.js";
import "./chunk-cjnzngfc.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-8w2npe9a.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-zem4yd4w.js";
import "./chunk-7zgz07kc.js";
import { nsr, bR } from "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-rj6gws00.js";
import "./chunk-v19xty83.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-7svjr0za.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-5y69fhjv.js";
import "./chunk-m11n0fm9.js";
import { Kun } from "./chunk-sdz0xp27.js";
import "./chunk-vxpcbg5q.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import { vH } from "./chunk-51fcr7jp.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var z = 1e4,
  W = "/worker/wakes",
  H = 1984,
  I = "allow_mcp_task_worker_wake",
  b = {
    auth: "session-jwt",
    host: "ccr-session",
    headers: { "anthropic-version": "2023-06-01" },
    timeout: z,
    validateStatus: () => !0
  },
  K = p(() =>
    u({ wake_id: o().regex(j1n), fire_at: vH({ offset: !0 }), expires_at: vH({ offset: !0 }) })
  ),
  B = p(() =>
    u({ error: u({ type: o().optional(), reason: o().optional(), resource_type: o().optional() }) })
  );
async function A({ task: e, delaySeconds: r, onTimer: s = !1 }) {
  let a = R("schedule", s) ?? D("schedule", s);
  if (a !== void 0) return a;
  let n = {
    taskId: e.taskId,
    serverName: e.serverName,
    toolName: e.toolName,
    mcpTaskId: e.mcpTaskId,
    pollIntervalMs: e.pollIntervalMs,
    spawnedAt: e.spawnedAt,
    toolUseId: e.toolUseId,
    protocol: "sep2663",
    ttlExpiresAt: e.ttlExpiresAt,
    transportFingerprint: e.transportFingerprint
  };
  if (N(n) === void 0 || Buffer.byteLength(_(n)) > H)
    return i("schedule", "not_sent", "unusable_payload", s);
  let d = await M("schedule", () => jt.post(W, { delay_seconds: O(r), payload: n }, b), s);
  return x("schedule", d, s);
}
async function E({ workerWakeId: e, delaySeconds: r, onTimer: s = !1 }) {
  let a = R("retime", s) ?? D("retime", s);
  if (a !== void 0) return a;
  if (!j1n.test(e)) return i("retime", "rejected", "malformed_id", s);
  let n = await M("retime", () => jt.post(W, { wake_id: e, delay_seconds: O(r) }, b), s);
  return x("retime", n, s);
}
async function P({ workerWakeId: e, onTimer: r = !1 }) {
  if (!j1n.test(e)) return i("cancel", "rejected", "malformed_id", r);
  let s = await M("cancel", () => jt.delete(`${W}/${e}`, void 0, b), r);
  if (s.kind === "failed") return s;
  if (!L(s.status)) return F("cancel", s.status, r);
  if (typeof s.data !== "object" || s.data === null)
    return i("cancel", "rejected", "malformed_answer", r);
  if (!r) g("mcp_task_worker_wake", { call: c("cancel") });
  return { kind: "cancelled" };
}
function N(e) {
  let r = Two(e);
  return r.success && r.data.protocol === "sep2663" ? r.data : void 0;
}
function x(e, r, s) {
  if (r.kind === "failed") return r;
  if (L(r.status)) {
    let n = K().safeParse(r.data);
    if (!n.success) return i(e, "rejected", "malformed_answer", s);
    if (!s) g("mcp_task_worker_wake", { call: c(e) });
    return {
      kind: "scheduled",
      workerWakeId: n.data.wake_id,
      fireAtMs: Date.parse(n.data.fire_at),
      expiresAtMs: Date.parse(n.data.expires_at)
    };
  }
  let a = V(e, r.status, r.data);
  if (a === void 0) return F(e, r.status, s);
  if (a === "wake_off") return i(e, "wake_off", void 0, s);
  return (v(s, a, e), t(`mcpTaskWorkerWake ${e}: refused (${a})`), { kind: "refused", reason: a });
}
function V(e, r, s) {
  let a = B().safeParse(s),
    n = a.success ? a.data.error : void 0;
  switch (r === 400 ? n?.reason : void 0) {
    case "wake_unsupported_host":
      return "unsupported_host";
    case "wake_unsupported_session":
      return "unsupported_session";
    case "wake_delay_out_of_range":
      return "delay_out_of_range";
    case "wake_expired":
      return "expired";
    case "wake_cancelled":
      return "cancelled";
    case "wake_off":
      return "wake_off";
    default:
      break;
  }
  return e === "retime" &&
    r === 404 &&
    n?.type === "not_found_error" &&
    n.resource_type === "worker_wake"
    ? "not_found"
    : void 0;
}
async function M(e, r, s) {
  let a = R(e, s);
  if (a !== void 0) return a;
  let n;
  try {
    n = await r();
  } catch (d) {
    let { kind: y } = ui(d);
    switch (y) {
      case "auth":
        return i(e, "unauthorized", void 0, s);
      case "timeout":
        return i(e, "timeout", void 0, s);
      case "network":
        return i(e, "network", void 0, s);
      case "http":
        return i(e, "network", "other", s);
      case "other":
        return i(e, "rejected", "threw", s);
    }
  }
  if (!n.ok) return i(e, "not_sent", n.reason, s);
  return { kind: "answered", status: n.status, data: n.data };
}
function L(e) {
  return e >= 200 && e < 300;
}
function F(e, r, s) {
  if (r === 404 || r === 405 || r === 501) return i(e, "not_deployed", `http_${r}`, s);
  if (r === 401 || r === 403) return i(e, "unauthorized", `http_${r}`, s);
  if (r === 429) return i(e, "rate_limited", void 0, s);
  if (r === 409) return i(e, "conflict", void 0, s);
  return i(e, r >= 500 ? "server_error" : "rejected", `http_${r}`, s);
}
function i(e, r, s, a) {
  let n = s === void 0 ? r : `${r}_${s}`,
    d = U(r);
  if (d || r === "not_sent" || r === "not_deployed") {
    if (!(d && a)) v(a, n, e);
  } else if (a) m("mcp_task_worker_wake_timer", n, { call: c(e) });
  else m("mcp_task_worker_wake", n, { call: c(e) });
  return (t(`mcpTaskWorkerWake ${e}: failed (${n})`), { kind: "failed", reason: r, retryable: d });
}
function U(e) {
  switch (e) {
    case "rate_limited":
    case "conflict":
    case "wake_off":
    case "policy_pending":
    case "server_error":
    case "timeout":
    case "network":
      return !0;
    case "not_sent":
    case "not_deployed":
    case "unauthorized":
    case "rejected":
      return !1;
  }
}
function O(e) {
  return Math.max(1, Math.ceil(e));
}
function R(e, r) {
  return PV() ? void 0 : i(e, "not_sent", "no_session", r);
}
function D(e, r) {
  let s;
  try {
    if (nsr(I)) return;
    s = bR(I);
  } catch (a) {
    return (l(a), i(e, "policy_pending", "threw", r));
  }
  if (s === "org_denied" || s === "latched" || s === "unregistered")
    return (
      v(r, `policy_denied_${s}`, e),
      t(`mcpTaskWorkerWake ${e}: withheld by the organization's policy (${s})`),
      { kind: "refused", reason: "policy_denied" }
    );
  return i(e, "policy_pending", s ?? "no_deny_kind", r);
}
function v(e, r, s) {
  if (e) f("mcp_task_worker_wake_timer", r, { call: c(s) });
  else f("mcp_task_worker_wake", r, { call: c(s) });
}
var h = 900000,
  S = h / 3,
  Y = 60000,
  G = 3,
  Q = h / S;
function w(e) {
  return e.wake?.moving === !0 && e.state === "driving";
}
class j {
  #e = new Map();
  #o = new Set();
  #a = !1;
  #t;
  #r;
  hasConcluded(e) {
    return this.#o.has(e);
  }
  taskBackgrounded(e) {
    try {
      this.#c(e);
    } catch (r) {
      l(r);
    }
  }
  #c({ taskRegistry: e, record: r, storageV5: s }) {
    if (this.#a || this.#e.has(r.taskId) || !PV()) return;
    if (_t()) {
      this.#a = !0;
      return;
    }
    let a = e.get(r.taskId);
    if (a?.type !== "mcp_task" || a.notified || a.status !== "running" || a.holdCapped === !0)
      return;
    let n = {
      record: r,
      taskRegistry: e,
      storageV5: s,
      wake: void 0,
      busy: !1,
      scheduleRetriesLeft: 0,
      retimeSoon: !1,
      state: "driving"
    };
    (this.#e.set(r.taskId, n),
      e.update(r.taskId, (d) => ({
        ...d,
        onWorkerWakeOutcome: (y) => this.taskLeftDrive(r.taskId, y)
      })),
      this.#i(n, !1));
  }
  taskLeftDrive(e, r) {
    try {
      this.#u(e, r);
    } catch (s) {
      l(s);
    }
  }
  #u(e, r) {
    if (r.kind !== "parked" && r.kind !== "capped") this.#o.add(e);
    let s = this.#e.get(e);
    if (s === void 0 || (s.state !== "driving" && s.state !== "left_to_fire")) return;
    switch (r.kind) {
      case "told":
      case "stopped":
      case "capped":
        s.state = "cancelling";
        break;
      case "parked":
        s.state = r.code === "ttl_expired" ? "cancelling" : "left_to_fire";
        break;
    }
    if (((s.scheduleRetriesLeft = 0), !w(s))) s.retimeSoon = !1;
    if (!s.busy) this.#s(s);
  }
  async tick() {
    let e = [];
    for (let r of this.#e.values()) {
      if (r.busy) continue;
      if (r.state === "cancelling") e.push(this.#s(r, !0));
      else if (!Kun()) continue;
      else if (r.wake !== void 0 && w(r)) e.push(this.#d(r, r.wake, !0));
      else if (r.wake === void 0 && r.scheduleRetriesLeft > 0)
        ((r.scheduleRetriesLeft -= 1), e.push(this.#i(r, !0)));
    }
    await Promise.all(e);
  }
  async #i(e, r) {
    (await this.#n(e, async () => {
      let s = !r,
        a = await A({ task: e.record, delaySeconds: h / 1000, onTimer: r });
      switch (a.kind) {
        case "scheduled":
          ((e.wake = {
            id: a.workerWakeId,
            fireAtMs: a.fireAtMs,
            expiresAtMs: a.expiresAtMs,
            moving: !0,
            notRetryableRounds: 0
          }),
            (e.scheduleRetriesLeft = 0),
            this.#l(e, a.workerWakeId));
          break;
        case "refused":
          ((this.#a ||=
            a.reason === "unsupported_host" ||
            a.reason === "unsupported_session" ||
            a.reason === "delay_out_of_range"),
            (e.scheduleRetriesLeft = 0));
          break;
        case "failed":
          if (e.state !== "driving") e.scheduleRetriesLeft = 0;
          else if (a.reason === "policy_pending") e.scheduleRetriesLeft = 1;
          else if (a.reason !== "rate_limited") e.scheduleRetriesLeft = 0;
          else if (s) e.scheduleRetriesLeft = G;
          break;
      }
    }),
      await this.#s(e));
  }
  async #d(e, r, s) {
    (await this.#n(e, async () => {
      let a = { kind: "refused", reason: "expired" },
        n =
          Date.now() + h > r.expiresAtMs
            ? a
            : await E({ workerWakeId: r.id, delaySeconds: h / 1000, onTimer: !0 });
      if (((e.retimeSoon = !1), e.wake !== r || !r.moving)) return;
      switch (n.kind) {
        case "scheduled":
          ((r.fireAtMs = n.fireAtMs), (r.expiresAtMs = n.expiresAtMs), (r.notRetryableRounds = 0));
          break;
        case "refused":
          if (n.reason === "expired") {
            if (((r.moving = !1), e.state === "driving")) e.state = "cancelling";
          } else if (n.reason === "policy_denied") ((r.moving = !1), (e.state = "cancelling"));
          else if (n.reason === "cancelled" || n.reason === "not_found") e.wake = void 0;
          else if (((r.moving = !1), e.state === "driving")) e.state = "left_to_fire";
          break;
        case "failed":
          if (n.retryable) {
            e.retimeSoon = s;
            break;
          }
          if (s && n.reason !== "not_sent") r.notRetryableRounds += 1;
          if (n.reason === "not_sent" || r.notRetryableRounds >= Q) {
            if (((r.moving = !1), e.state === "driving")) e.state = "left_to_fire";
          }
          break;
      }
    }),
      await this.#s(e));
  }
  async #s(e, r = !1) {
    if (e.busy) return;
    let s = e.wake;
    if (e.state === "cancelling" && s !== void 0)
      await this.#n(e, async () => {
        let d = await P({ workerWakeId: s.id, onTimer: r });
        if (d.kind === "cancelled" || d.reason === "not_deployed" || Date.now() >= s.fireAtMs + S)
          e.wake = void 0;
      });
    let a = e.record.taskId;
    if (
      e.wake === void 0 &&
      (e.scheduleRetriesLeft === 0 || e.state !== "driving") &&
      this.#e.get(a) === e
    )
      this.#e.delete(a);
    this.#f();
  }
  async #n(e, r) {
    e.busy = !0;
    try {
      await r();
    } catch (s) {
      l(s);
    } finally {
      e.busy = !1;
    }
  }
  #l(e, r) {
    let { record: s, taskRegistry: a, storageV5: n } = e,
      d = a.get(s.taskId);
    if (d?.type !== "mcp_task" || d.notified || d.status !== "running") return;
    let y = () => {
        let k = a.get(s.taskId);
        return k?.type === "mcp_task" && k.sidecarSessionId === q() && k.sidecarProjectDir === T4();
      },
      T = d.sidecarWrite,
      C = y()
        ? (async () => {
            if ((await T, !y())) return;
            await W1n(s.taskId, { ...s, protocol: "sep2663", workerWakeId: r }, n);
          })().catch((k) => {
            (t(
              `MCP task ${s.taskId}: could not save its worker wake id to the task's record (${String(k)}); a restarted worker will not be able to cancel that wake`
            ),
              f("mcp_task_worker_wake", "wake_id_not_saved"));
          })
        : T;
    a.update(s.taskId, (k) => ({ ...k, workerWakeId: r, sidecarWrite: C }));
  }
  #f() {
    let e = !1,
      r = !1;
    for (let s of this.#e.values())
      ((e ||= s.state === "cancelling" || w(s) || s.scheduleRetriesLeft > 0), (r ||= s.retimeSoon));
    if (e && this.#t === void 0)
      ((this.#t = setInterval(() => void this.tick(), S)), this.#t.unref());
    else if (!e && this.#t !== void 0) (clearInterval(this.#t), (this.#t = void 0));
    if (r && this.#r === void 0)
      ((this.#r = setTimeout(() => {
        ((this.#r = void 0), this.#k());
      }, Y)),
        this.#r.unref());
  }
  async #k() {
    let e = [];
    for (let r of this.#e.values())
      if (r.retimeSoon && !r.busy && r.wake !== void 0 && w(r) && Kun())
        e.push(this.#d(r, r.wake, !1));
    await Promise.all(e);
  }
}
var We = new nt(() => new j());
export { We as mcpTaskWorkerWakeKeepers };

//# sourceMappingURL=chunk-5cjty1kd.js.map
