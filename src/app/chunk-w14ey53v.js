// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { E, G, ui } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Rc } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { lW } from "./chunk-qywdxehb.js";
import { Y } from "./chunk-arw2bgak.js";
import { i } from "./chunk-cj37hmns.js";
import { p } from "./chunk-qmkm2x59.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Vne, jQe } from "./chunk-6h7ejyet.js";
import { Put } from "./chunk-mgcw65qt.js";
import { jt } from "./chunk-ajtyjx88.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { Wh } from "./chunk-nqsvrwdr.js";
import { et } from "./chunk-c9re0p40.js";
import { constants as O } from "fs";
import {
  link as we,
  lstat as ue,
  mkdir as Q,
  open as C,
  readdir as Fe,
  realpath as L,
  rename as Ee,
  unlink as V,
  writeFile as Re
} from "fs/promises";
import { posix as be } from "path";
var okr = 384;
var { basename: ie, dirname: D, isAbsolute: Z, join: M, normalize: ve, relative: j, sep: z } = be,
  pZt = "/mnt/user-data/working",
  k8e = "/working",
  q$n = `${k8e}/${Vne} is reserved`,
  iK = 26214400,
  de = 4096,
  Oe = 4,
  fe = 30000,
  ee = 5000,
  Te = 120000,
  Ne = 5,
  xe = 2000,
  Me = 3,
  K = 600000,
  ae = 3600000,
  Pe = de;
class pe {
  seenState = new Map();
  evictedEtag = new Map();
  lastSeenMtime = new Map();
  terminalRejects = new Map();
  sessionFullUntilMs = 0;
  sessionFullSuppressed = 0;
  sessionFullNextOfferMs = 0;
  inFlight = Wh();
  retryableTransportFailures = 0;
  sessionTerminalRejects = 0;
  syncer = null;
  lateStartRoot = null;
  startInFlight = null;
  recordSeen(e, t, r) {
    (this.seenState.set(e, { etag: t, localHash: r }), this.evictedEtag.delete(e));
  }
  forgetSeen(e) {
    (this.seenState.delete(e), this.evictedEtag.delete(e));
  }
  recordEvictedEtag(e, t) {
    if (t === void 0) return;
    if ((this.evictedEtag.delete(e), this.evictedEtag.set(e, t), this.evictedEtag.size > Pe)) {
      let r = this.evictedEtag.keys().next().value;
      if (r !== void 0) this.evictedEtag.delete(r);
    }
  }
  evictDeleted(e) {
    (this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e));
  }
  recordSettledMtime(e, t) {
    this.lastSeenMtime.set(e, t);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e, t = !1) {
    let r = this.terminalRejects.get(e) ?? {
      consecutive: 0,
      latchedUntilMs: 0,
      suppressed: 0,
      heldWhileFull: !1
    };
    if (
      (r.consecutive++,
      (r.heldWhileFull ||= t),
      this.terminalRejects.set(e, r),
      r.consecutive >= Me)
    )
      ((r.latchedUntilMs = Date.now() + K),
        m("ccr_synced_file_push", "push_parked_terminal", {
          consecutive_rejects: r.consecutive,
          suppressed_pushes: r.suppressed,
          held_while_full: r.heldWhileFull
        }),
        (r.suppressed = 0),
        Y("warn", "working_push_parked", { consecutive: r.consecutive }));
  }
  resetTerminalRejectStreak(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0) return;
    if (t.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    ((t.consecutive = 0), (t.latchedUntilMs = 0), (t.heldWhileFull = !1));
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  sessionFullGate() {
    if (this.sessionFullUntilMs === 0) return "open";
    let e = Date.now();
    if (e < this.sessionFullUntilMs) return (this.sessionFullSuppressed++, "skip");
    return ((this.sessionFullUntilMs = e + K), "probe");
  }
  recordSessionFull() {
    let e = this.sessionFullUntilMs !== 0,
      t = Date.now();
    if (
      ((this.sessionFullUntilMs = t + K),
      (this.sessionFullNextOfferMs = t + ae),
      e && this.sessionFullSuppressed === 0)
    )
      return;
    (m("ccr_synced_file_push", "push_parked_session_full", {
      suppressed_pushes: this.sessionFullSuppressed
    }),
      Y("warn", "working_session_full", { suppressed_pushes: this.sessionFullSuppressed }),
      (this.sessionFullSuppressed = 0));
  }
  clearSessionFull() {
    this.sessionFullUntilMs = 0;
  }
  sessionFullReprobeNow() {
    if (this.sessionFullUntilMs !== 0) this.sessionFullUntilMs = Date.now();
  }
  releaseSessionFullHold(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0 || !t.heldWhileFull) return;
    if (this.sessionFullUntilMs !== 0) {
      let r = Date.now();
      if (
        r < this.sessionFullUntilMs + ee ||
        r < this.sessionFullNextOfferMs ||
        t.latchedUntilMs !== 0
      )
        return;
      this.sessionFullNextOfferMs = r + ae;
    }
    ((t.heldWhileFull = !1), this.resetTerminalRejectStreak(e), this.reopenMtimeGate(e));
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    if ((this.retryableTransportFailures++, this.sessionFullUntilMs !== 0))
      this.sessionFullNextOfferMs = Math.max(this.sessionFullNextOfferMs, Date.now() + K);
  }
  noteSessionTerminalReject() {
    this.sessionTerminalRejects++;
  }
  get activeSyncer() {
    return this.syncer;
  }
  syncerStarted(e) {
    this.syncer = e;
  }
  syncerStopped(e) {
    if (this.syncer === e) this.syncer = null;
  }
  armLateStart(e) {
    this.lateStartRoot = e;
  }
  async flush() {
    if (this.syncer === null) {
      if (this.lateStartRoot !== null && this.startInFlight === null) {
        let e = hhi(this.lateStartRoot);
        ((this.startInFlight = e),
          e
            .finally(() => {
              if (this.startInFlight === e) this.startInFlight = null;
            })
            .catch(() => {}));
      }
      await this.startInFlight?.catch(() => {});
    }
    await this.syncer?.flush();
  }
  sessionFullStateForTest() {
    return { armed: this.sessionFullUntilMs !== 0, suppressed: this.sessionFullSuppressed };
  }
  reset() {
    (this.seenState.clear(),
      this.lastSeenMtime.clear(),
      this.evictedEtag.clear(),
      this.terminalRejects.clear(),
      (this.sessionFullUntilMs = 0),
      (this.sessionFullSuppressed = 0),
      (this.sessionFullNextOfferMs = 0),
      (this.lateStartRoot = null),
      (this.startInFlight = null));
  }
}
var Ie = new W(() => new pe());
function N() {
  return Ie.of(U().host);
}
function I(e, t, r) {
  N().recordSeen(e, t, r);
}
function te(e) {
  return N().seenState.get(e);
}
function re(e, t) {
  return N().inFlight.run(e, t);
}
function skr(e, t) {
  if (!Z(e)) throw Error("syncDir must be absolute");
  if (t.includes("\x00")) throw Error("path contains null bytes");
  if (!Z(t)) throw Error("path must be absolute");
  let r = j(e, ve(t));
  if (r === "" || r === "." || H(r)) throw Error("path must be under the working sync dir");
  return r;
}
function H(e) {
  return Z(e) || e.split(z).includes("..");
}
function gme(e) {
  for (let t of e.split(z))
    if (t.startsWith(".") || t.endsWith("~") || t.endsWith(".swp") || t.endsWith(".tmp")) return !0;
  return !1;
}
var le = "synced_file_limit_exceeded",
  bho = "synced_file_lane_denied",
  Le = p(() => u({ error: u({ reason: o().optional(), resource: o().optional() }) })),
  je = p(() => u({ error: u({ type: o().optional(), resource_type: o().optional() }) }));
function Ae(e, t) {
  if (e === "timeout" || e === "network") return !0;
  if (e === "auth" || e === "other") return !1;
  if (t === void 0) return !0;
  return t === 408 || t === 429 || t >= 500;
}
function _e(e, t) {
  let r = N(),
    { kind: l, status: s } = ui(t),
    c = Ae(l, s);
  if (c) r.noteRetryableTransportFailure();
  else if (l === "auth") r.noteSessionTerminalReject();
  let h = s === 400 || s === 403 ? We(t) : void 0,
    a = s === 400 ? h?.reason : void 0,
    _ = s === 403 ? h?.resource : void 0;
  return {
    kind: "error",
    message: `${e} failed: ${l}${s ? ` ${s}` : ""}`,
    retryable: c,
    errorKind: l,
    status: s,
    ...(a !== void 0 && { laneReason: a }),
    ...(_ !== void 0 && { refusedResource: _ })
  };
}
function We(e) {
  let t = e?.response?.data;
  return Le().safeParse(t).data?.error;
}
function Ue(e) {
  if (e.errorKind === "gated")
    return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}
async function qMt(e, t, r) {
  let l = N();
  try {
    let s = await jt.put(
      "/worker/synced_file",
      {
        path: `${k8e}/${e}`,
        content: t.toString("base64"),
        ...(r && { if_match_sha256: r }),
        worker_epoch: i.CLAUDE_CODE_WORKER_EPOCH ?? 0
      },
      {
        auth: "session-jwt",
        host: "ccr-session",
        headers: { "anthropic-version": "2023-06-01" },
        timeout: fe,
        validateStatus: (c) => (c >= 200 && c < 300) || c === 409,
        maxBodyLength: Math.ceil((iK * 4) / 3) + 1024
      }
    );
    if (!s.ok)
      return (
        l.noteSessionTerminalReject(),
        {
          kind: "error",
          message: `put gated: ${s.reason}`,
          retryable: !1,
          errorKind: "gated",
          status: void 0,
          gateReason: s.reason
        }
      );
    if (s.status === 409) return { kind: "conflict" };
    return { kind: "ok", content_sha256: s.data.content_sha256 };
  } catch (s) {
    return _e("put", s);
  }
}
async function QIe(e) {
  let t = N();
  try {
    let r = await jt.get(`/worker/synced_file?path=${encodeURIComponent(`${k8e}/${e}`)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: fe,
      maxContentLength: Math.ceil((iK * 4) / 3) + 1024,
      validateStatus: (l) => (l >= 200 && l < 300) || l === 404
    });
    if (!r.ok)
      return (
        t.noteSessionTerminalReject(),
        {
          kind: "error",
          message: `get gated: ${r.reason}`,
          retryable: !1,
          errorKind: "gated",
          status: void 0,
          gateReason: r.reason
        }
      );
    if (r.status === 404) {
      let l = je().safeParse(r.data);
      return { kind: "not_found", ...(l.success && { body: l.data.error }) };
    }
    return {
      kind: "ok",
      buf: Buffer.from(r.data.content, "base64"),
      content_sha256: r.data.content_sha256
    };
  } catch (r) {
    return _e("get", r);
  }
}
async function ne(e, t, r) {
  he(e, t);
  let l = await L(e),
    s = await L(D(t)),
    c = j(l, s);
  if (H(c)) {
    let a = Error("dest parent escaped working sync dir");
    throw ((a.code = "WORKING_PARENT_ESCAPE"), a);
  }
  let h = c === "" ? ie(t) : M(c, ie(t));
  if (gme(h)) {
    let a = Error("dest resolves into an ignored path");
    throw ((a.code = "WORKING_DEST_IGNORED"), a);
  }
  if (r?.(h)) {
    let a = Error("dest resolves onto a path the caller refuses");
    throw ((a.code = "WORKING_DEST_REFUSED"), a);
  }
  try {
    if ((await ue(t)).isSymbolicLink()) {
      let _ = Error("dest is a symlink");
      throw ((_.code = "WORKING_DEST_SYMLINK"), _);
    }
  } catch (a) {
    if (!G(a)) throw a;
  }
}
function he(e, t) {
  if (Rc(e) || Rc(D(t))) {
    let r = Error("a folder on the way to dest has a backslash in its name");
    throw ((r.code = "WORKING_PATH_MISREAD"), r);
  }
}
async function YMt(e, t, r, l = "replace", s) {
  (he(e, t),
    await Q(e).catch((_) => {
      if (E(_) !== "EEXIST") throw _;
    }));
  let c = await L(e),
    h = D(t);
  for (;;)
    try {
      let _ = await L(h),
        y = j(c, _);
      if (H(y)) {
        let k = Error("dest ancestor escaped working sync dir");
        throw ((k.code = "WORKING_PARENT_ESCAPE"), k);
      }
      if (gme(y)) {
        let k = Error("dest ancestor resolves into an ignored path");
        throw ((k.code = "WORKING_DEST_IGNORED"), k);
      }
      if (s?.(M(y, j(h, t))) === !0) {
        let k = Error("dest resolves onto a path the caller refuses");
        throw ((k.code = "WORKING_DEST_REFUSED"), k);
      }
      break;
    } catch (_) {
      if (!G(_)) throw _;
      let y = D(h);
      if (y === h) break;
      h = y;
    }
  (await Q(D(t), { recursive: !0 }), await ne(e, t, s));
  let a = `${t}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await lW(a);
  } catch (_) {
    throw (ce(_), _);
  }
  try {
    await Re(a, r, { mode: okr, flag: "wx" });
  } catch (_) {
    throw (ce(_), await V(a).catch(() => {}), _);
  }
  try {
    if (l === "create_only") (await we(a, t), await V(a));
    else await Ee(a, t);
  } catch (_) {
    throw (await V(a).catch(() => {}), _);
  }
}
function ce(e) {
  if (E(e) !== "EEXIST") return;
  let t = Error("sibling tempfile name already taken", { cause: e });
  throw ((t.code = "WORKING_TMP_TAKEN"), t);
}
async function hAi(e, t, r) {
  let l;
  try {
    l = skr(r, e.mount_path);
  } catch (c) {
    return (
      m("ccr_synced_file_stage", "bad_mount_path"),
      { ok: !1, error: c instanceof Error ? c.message : String(c) }
    );
  }
  if (jQe(l)) return (Put.emit(l, "stored"), { ok: !0, noop: "dir_sync_lane_row" });
  if (gme(l))
    return (
      m("ccr_synced_file_stage", "ignored_path"),
      { ok: !1, error: "mount_path is an ignored path" }
    );
  let s = M(r, l);
  return re(l, async () => {
    let c, h;
    try {
      try {
        await ne(r, s);
      } catch (n) {
        if (!G(n))
          return (
            m(
              "ccr_synced_file_stage",
              E(n) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed"
            ),
            { ok: !1, error: `mount_path failed containment: ${E(n) ?? "unknown"}` }
          );
      }
      let a = null;
      try {
        let n = await C(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let d = await n.stat();
          if (d.isFile()) {
            if (d.size > iK)
              return (
                m("ccr_synced_file_stage", "too_large"),
                { ok: !1, error: "local file too large to reconcile" }
              );
            a = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (n) {
        let d = E(n);
        if (d !== "ENOENT" && d !== "ELOOP" && d !== "EMLINK") throw n;
      }
      let _ = a ? et(a) : void 0,
        y = te(s);
      if (_ && y && y.localHash === _ && e.content_sha256 !== void 0 && y.etag === e.content_sha256)
        return (g("ccr_synced_file_stage"), { ok: !0, noop: "already_present" });
      let k = e.expected_local_sha256 || void 0,
        T = y && y.localHash === _ && (k === void 0 || y.etag === k);
      if (a && !T) {
        let n = await qMt(l, a, k);
        if (n.kind === "error")
          return (m("ccr_synced_file_stage", "push_failed"), { ok: !1, error: n.message });
        let d = await QIe(l);
        if (d.kind !== "ok")
          return (
            m("ccr_synced_file_stage", "reget_failed"),
            { ok: !1, error: d.kind === "error" ? d.message : "get not_found after put" }
          );
        ((c = d.buf),
          (h = d.content_sha256),
          Y("info", "working_stage_reconciled", { conflict: n.kind === "conflict" }));
      } else {
        let n = await t(e.filestore_path);
        if (!n.ok) return (m("ccr_synced_file_stage", "fetch_failed"), { ok: !1, error: n.error });
        if (n.buf.length > iK)
          return (
            m("ccr_synced_file_stage", "too_large"),
            { ok: !1, error: "staged content too large" }
          );
        ((c = n.buf), (h = e.content_sha256));
      }
      let F = null;
      try {
        let n = await C(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let d = await n.stat();
          if (d.isFile()) {
            if (d.size > iK)
              return (
                m("ccr_synced_file_stage", "too_large"),
                { ok: !1, error: "local file too large to reconcile" }
              );
            F = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (n) {
        let d = E(n);
        if (d !== "ENOENT" && d !== "ELOOP" && d !== "EMLINK") throw n;
      }
      if (F && et(F) !== _) {
        let n = await qMt(l, F, h);
        if (n.kind === "error")
          return (m("ccr_synced_file_stage", "push_failed"), { ok: !1, error: n.message });
        let d = await QIe(l);
        if (d.kind !== "ok")
          return (
            m("ccr_synced_file_stage", "reget_failed"),
            { ok: !1, error: d.kind === "error" ? d.message : "get not_found after put" }
          );
        ((c = d.buf),
          (h = d.content_sha256),
          Y("info", "working_stage_reconciled", {
            conflict: n.kind === "conflict",
            mid_window: !0
          }));
      }
    } catch (a) {
      return (
        m("ccr_synced_file_stage", "reconcile_threw"),
        { ok: !1, error: `reconcile failed: ${E(a) ?? "unknown"}` }
      );
    }
    try {
      await YMt(r, s, c);
    } catch (a) {
      return (
        m("ccr_synced_file_stage", "write_failed"),
        { ok: !1, error: `write failed: ${E(a) ?? "unknown"}` }
      );
    }
    return (
      I(s, h, et(c)),
      g("ccr_synced_file_stage"),
      Y("info", "working_stage_ok", { bytes: c.length }),
      { ok: !0 }
    );
  });
}
async function Be(e, t) {
  let r = N();
  if (jQe(t)) return (f("ccr_synced_file_push", "lane_path_reserved"), !0);
  let l = r.terminalRejects.get(t);
  if (l !== void 0 && l.latchedUntilMs !== 0) {
    if (Date.now() < l.latchedUntilMs) return (l.suppressed++, !0);
    l.latchedUntilMs = 0;
  }
  let s = M(e, t);
  if (Rc(s)) return (f("ccr_synced_file_push", "backslash_in_path"), !0);
  let c;
  try {
    c = await L(s);
  } catch (S) {
    if (G(S)) return !0;
    throw S;
  }
  let h;
  try {
    h = await L(e);
  } catch {
    return !1;
  }
  let a = j(h, c);
  if (a !== t && (a === "" || H(a))) return (f("ccr_synced_file_push", "symlink_escape"), !0);
  let _;
  try {
    let S = await C(s, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
    try {
      let R = await S.stat();
      if (!R.isFile()) return !0;
      if (R.size > iK) return (f("ccr_synced_file_push", "too_large"), !0);
      _ = await S.readFile();
    } finally {
      await S.close();
    }
  } catch (S) {
    let R = E(S);
    if (R === "ELOOP" || R === "EMLINK") return (f("ccr_synced_file_push", "symlink_escape"), !0);
    return (m("ccr_synced_file_push", "read_failed"), !1);
  }
  let y = et(_),
    k = te(s);
  if (y === k?.localHash) return !0;
  let T = k === void 0 ? r.evictedEtag.get(s) : void 0,
    F = "open";
  if (k === void 0 && T === void 0) {
    let S = await QIe(t);
    if (S.kind === "error") {
      if ((m("ccr_synced_file_push", "seed_get_failed"), !S.retryable)) r.recordTerminalReject(t);
      return !S.retryable;
    }
    if (S.kind === "ok") {
      r.resetTerminalRejectStreak(t);
      let R = et(S.buf);
      if (R === y) return (I(s, S.content_sha256, y), !0);
      try {
        await YMt(e, s, S.buf);
      } catch {
        return (m("ccr_synced_file_push", "write_failed"), !1);
      }
      return (I(s, S.content_sha256, R), f("ccr_synced_file_push", "cold_renderer_wins"), !0);
    }
    if (((F = r.sessionFullGate()), F === "skip")) return (r.recordTerminalReject(t, !0), !0);
  }
  let n = await qMt(t, _, k?.etag ?? T);
  if (F === "probe") {
    if (n.kind === "ok") r.clearSessionFull();
    else if (n.kind === "conflict" || n.laneReason !== le) r.sessionFullReprobeNow();
  }
  if (n.kind === "ok")
    return (
      r.resetTerminalRejectStreak(t),
      I(s, n.content_sha256, y),
      g("ccr_synced_file_push"),
      !0
    );
  if (n.kind === "error") {
    if (n.retryable) (r.resetTerminalRejectStreak(t), m("ccr_synced_file_push", "put_failed"));
    else {
      m("ccr_synced_file_push", Ue(n));
      let S = n.laneReason === le;
      if ((r.recordTerminalReject(t, S), S)) r.recordSessionFull();
    }
    return (
      Y("warn", "working_push_failed", { reason: n.message, retryable: n.retryable }),
      !n.retryable
    );
  }
  r.resetTerminalRejectStreak(t);
  let d = await QIe(t);
  if (d.kind === "error") {
    if ((m("ccr_synced_file_push", "reget_failed"), !d.retryable)) r.recordTerminalReject(t);
    return !d.retryable;
  }
  if (d.kind === "not_found")
    return (
      r.forgetSeen(s),
      r.sessionFullReprobeNow(),
      m("ccr_synced_file_push", "reget_failed"),
      !1
    );
  try {
    await YMt(e, s, d.buf);
  } catch {
    return (m("ccr_synced_file_push", "write_failed"), !1);
  }
  return (I(s, d.content_sha256, et(d.buf)), f("ccr_synced_file_push", "conflict_overwritten"), !0);
}
function ghi() {
  return N().flush();
}
async function yAi() {
  let e = N();
  await ghi();
  for (;;) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    (await e.inFlight.settle(), await new Promise((t) => setImmediate(t)));
  }
}
async function hhi(e) {
  let t = N();
  t.armLateStart(null);
  for (let b = 1; ; b++)
    try {
      await Q(e);
      break;
    } catch (A) {
      let x = E(A);
      if (x === "EEXIST") break;
      if (x === "ENOENT") {
        if (b < Ne) {
          await X(xe);
          continue;
        }
        return (Y("info", "working_sync_parent_absent", {}), t.armLateStart(e), null);
      }
      return (
        f("ccr_synced_file_push", "sync_start_failed"),
        Y("warn", "working_sync_start_failed", { code: x ?? "unknown" }),
        null
      );
    }
  let r = 0,
    l = [],
    s = () => (r < Oe ? (r++, Promise.resolve()) : new Promise((b) => l.push(b))),
    c = () => {
      let b = l.shift();
      if (b) b();
      else r--;
    },
    h = new Set(),
    a = !1,
    _ = !1,
    y = 0,
    k = 0,
    T = async () => {
      let b = [],
        A = [""],
        x = new Set(),
        ge = [...t.seenState.keys()],
        { transportFailureSeq: ye, sessionTerminalRejectSeq: me } = t,
        ke = 0,
        se = !1,
        oe = !1;
      e: while (A.length && !a) {
        let B = A.shift(),
          v;
        try {
          v = await Fe(M(e, B), { withFileTypes: !0 });
        } catch (P) {
          (Y("warn", "working_scan_readdir_failed", { code: E(P) ?? "unknown" }), (oe = !0));
          continue;
        }
        for (let P of v) {
          if (++ke > de) {
            if (((se = !0), !_)) (f("ccr_synced_file_push", "scan_cap_reached"), (_ = !0));
            break e;
          }
          let w = B ? M(B, P.name) : P.name;
          if ((x.add(w), gme(w) || jQe(w))) continue;
          if (P.isDirectory()) {
            A.push(w);
            continue;
          }
          if (!P.isFile()) continue;
          let q;
          try {
            q = (await ue(M(e, w))).mtimeMs;
          } catch {
            continue;
          }
          let J = t.terminalRejects.get(w);
          if (J !== void 0 && J.latchedUntilMs !== 0 && Date.now() >= J.latchedUntilMs)
            t.reopenMtimeGate(w);
          if ((t.releaseSessionFullHold(w), q === t.lastSeenMtime.get(w))) continue;
          if (h.has(w) || t.inFlight.has(w)) continue;
          (h.add(w),
            b.push(
              (async () => {
                await s();
                try {
                  if (await re(w, () => Be(e, w))) t.recordSettledMtime(w, q);
                } finally {
                  (h.delete(w), c());
                }
              })().catch((Se) => Y("warn", "working_push_threw", { code: E(Se) ?? "unknown" }))
            ));
        }
      }
      if (!se && !oe && !a) {
        for (let v of t.lastSeenMtime.keys()) if (!x.has(v)) t.reopenMtimeGate(v);
        for (let v of t.terminalRejects.keys()) if (!x.has(v)) t.forgetTerminalReject(v);
        let B = e.endsWith(z) ? e : e + z;
        for (let v of ge) if (v.startsWith(B) && !x.has(j(e, v))) t.evictDeleted(v);
      }
      if (
        (await Promise.allSettled(b), t.transportFailureSeq > ye || t.sessionTerminalRejectSeq > me)
      )
        ((y = y === 0 ? 2 * ee : Math.min(y * 2, Te)), (k = Date.now() + y));
      else if (h.size === 0) ((y = 0), (k = 0));
    },
    F = 0,
    n = async () => {
      F++;
      try {
        await T();
      } finally {
        F--;
      }
    },
    d = n(),
    S = setInterval(() => {
      if (F > 0 || Date.now() < k) return;
      n().catch((b) => Y("warn", "working_push_threw", { code: E(b) ?? "unknown" }));
    }, ee);
  (S.unref?.(), Y("info", "working_sync_started", {}));
  let R = {
    initialReconcile: d,
    flush: n,
    pendingCount: () => h.size,
    pollBackoffUntilForTest: () => k,
    stop() {
      ((a = !0), clearInterval(S), t.syncerStopped(R));
    }
  };
  return (t.syncerStarted(R), R);
}
async function Sho(e) {
  if (jQe(e))
    return { kind: "error", message: q$n, retryable: !1, errorKind: "other", status: void 0 };
  return QIe(e);
}
async function who(e, t, r, l) {
  let s = N();
  if (jQe(t)) return { ok: !1, reason: "put_failed", error: q$n, retryable: !1 };
  if (r.length > iK) return { ok: !1, reason: "too_large", error: "content too large" };
  if (l !== void 0 && l.length === 0)
    return { ok: !1, reason: "put_failed", error: "empty if_match", retryable: !1 };
  return re(t, async () => {
    let c = await qMt(t, r, l);
    if (c.kind === "conflict") {
      if (l !== void 0)
        return {
          ok: !1,
          reason: "conflict",
          error: "lane row changed since if_match",
          retryable: !1
        };
      return {
        ok: !1,
        reason: "put_failed",
        error: "put rejected (409 without if_match)",
        retryable: !0
      };
    }
    if (c.kind === "error")
      return { ok: !1, reason: "put_failed", error: c.message, retryable: c.retryable };
    if (!gme(t)) {
      let h = M(e, t),
        a = te(h),
        _ = !1;
      try {
        await ne(e, h);
        let y = await C(h, O.O_RDONLY | O.O_NOFOLLOW | O.O_NONBLOCK);
        try {
          let k = await y.stat();
          if (k.isFile() && k.size <= iK && a !== void 0) {
            let T = Number(k.size),
              F = Buffer.allocUnsafe(T + 1),
              n = 0;
            for (;;) {
              let { bytesRead: d } = await y.read(F, n, T + 1 - n, n);
              if (d === 0) break;
              if (((n += d), n > T)) break;
            }
            _ = n <= T && a.localHash === et(F.subarray(0, n));
          }
        } finally {
          await y.close();
        }
      } catch (y) {
        _ = G(y);
      }
      if (!_)
        return (
          s.recordEvictedEtag(h, c.content_sha256),
          Y("info", "worker_lane_mirror_skipped"),
          { ok: !0, etag: c.content_sha256 }
        );
      try {
        await YMt(e, h, r);
      } catch (y) {
        return (
          s.recordEvictedEtag(h, c.content_sha256),
          Y("warn", "worker_lane_mirror_skipped", { code: E(y) ?? "unknown" }),
          { ok: !0, etag: c.content_sha256 }
        );
      }
      I(h, c.content_sha256, et(r));
    }
    return { ok: !0, etag: c.content_sha256 };
  });
}
export { okr, pZt, k8e, q$n, iK, skr, gme, bho, qMt, QIe, YMt, hAi, ghi, yAi, hhi, Sho, who };

//# sourceMappingURL=chunk-w14ey53v.js.map
