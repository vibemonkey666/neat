// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, q, tt } from "./chunk-wrtp8qz8.js";
import { fy, d, E, G } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { bt, Vo, t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { i, _C } from "./chunk-cj37hmns.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { CRe, N6o, yor, kd } from "./chunk-bh50mq9d.js";
import { sor, Msi, gR, Dsi, Hsi, $si, Fsi } from "./chunk-9zd34fgb.js";
import { Ap } from "./chunk-v4kbwz0z.js";
import { Mt } from "./chunk-adv24f35.js";
import { go } from "./chunk-c57c64b0.js";
import { dkt, Ksi, B5, Gue, fqe, zue, u_, $$, I6o } from "./chunk-jwqtbev0.js";
import { KVe } from "./chunk-ajtyjx88.js";
import { wCs } from "./chunk-dp02rht1.js";
import { ZLt, Ok, sFs } from "./chunk-j0tbz6ra.js";
import { Dr } from "./chunk-kc27mwew.js";
import { $qs, Fqs, Pun } from "./chunk-n2fmpv44.js";
import { Ma } from "./chunk-znr3gw2p.js";
import {
  ey,
  PY,
  U_t,
  sfn,
  I4s,
  fFo,
  pFo,
  yFo,
  pBr,
  _Fo,
  bFo,
  yye,
  dfn,
  SFo
} from "./chunk-4sp6n814.js";
import { jT, yLo } from "./chunk-4n57vbs9.js";
import { uyt } from "./chunk-53nx6xac.js";
import { xIt, Mlo, c_s, Dlo, OXt, IIt, Nlo, HXt, MIt, lIe } from "./chunk-9rqkgbsc.js";
import { rvs, ovs, svs, dvs, cvs, cfo, ufo, pvs } from "./chunk-gtd0g067.js";
import { blo, Slo, wlo, W_r, xXt, Elo, K_r, q_r, Alo, LDn } from "./chunk-t33p9jyn.js";
import { o2e } from "./chunk-8ydpj4c7.js";
import { Lyr, DMn, J9t } from "./chunk-r6vcns5c.js";
import { ebt } from "./chunk-ywy052ac.js";
import { wo } from "./chunk-rnxkk435.js";
import { randomBytes as _e, randomUUID as We } from "crypto";
import { unlinkSync as Ge } from "fs";
import {
  chmod as Ae,
  lstat as K,
  mkdir as te,
  readdir as Ve,
  readlink as Xe,
  realpath as de,
  unlink as re
} from "fs/promises";
import { createServer as Be, Socket as He } from "net";
import {
  basename as fe,
  dirname as I,
  isAbsolute as ie,
  join as L,
  normalize as je,
  resolve as ue
} from "path";
var Me = 500,
  Fe = 32;
class he {
  verdicts = new Map();
  lookup(e) {
    let n = this.verdicts.get(e);
    if (n !== void 0) (this.verdicts.delete(e), this.verdicts.set(e, n));
    return n;
  }
  remember(e, n) {
    if (this.verdicts.size >= Me) {
      let s = this.verdicts.keys().next().value;
      if (s !== void 0) this.verdicts.delete(s);
    }
    this.verdicts.set(e, n);
  }
}
var Ne = new W(() => new he()),
  Le = {
    readAncestors: async (e) => {
      let { ancestors: n, readFailed: s, truncated: o } = await yor(e);
      if (o && !s && !n.includes(process.pid))
        ({ ancestors: n, readFailed: s, truncated: o } = await yor(e, Fe));
      if (!n.includes(process.pid)) {
        if (s) throw Error("ancestry walk failed");
        if (o) throw Error("ancestry walk truncated (maxDepth) above the prefix");
      }
      return n;
    },
    readStartToken: (e) => kd(e, { skipCache: !0 })
  };
function Ke(e, n = process.pid) {
  if (n === 1) return !1;
  return Array.isArray(e) && e.includes(n);
}
async function qe(e, n = Le) {
  if (e === void 0 || !Number.isInteger(e) || e <= 0) return "no-evidence";
  let s;
  try {
    s = await n.readStartToken(e);
  } catch {
    s = void 0;
  }
  if (s === void 0) return "no-evidence";
  let o = `${e}:${s}`,
    a = Ne.of(U().host),
    r = a.lookup(o);
  if (r !== void 0) return r ? "self" : "not-self";
  let p;
  try {
    p = await n.readAncestors(e);
  } catch {
    return "no-evidence";
  }
  let _;
  try {
    _ = await n.readStartToken(e);
  } catch {
    _ = void 0;
  }
  if (_ !== s) return "no-evidence";
  let w = process.pid !== 1 && p.includes(process.pid);
  return (a.remember(o, w), w ? "self" : "not-self");
}
async function ye(e) {
  let n = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && n !== 1) return Ke(e.selfSentAncestry, n);
  if (!e.needsVerdict) return !1;
  if (n === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return !1;
  let s = await (e.verdictOf ?? qe)(e.verifiedPeerPid);
  return s === "self" || (s === "no-evidence" && e.childTokenPresented);
}
function u() {
  return J9t.of(U().host);
}
function kki() {
  return u().lastStartFailureCause;
}
function Tki() {
  return u().lastStartDegradedCause;
}
function we(e) {
  let n = u();
  if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back")
    return;
  n.lastStartDegradedCause = e;
}
function Oyr() {
  return DMn(u());
}
function le(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e)) return !1;
  return typeof e.type === "string";
}
function Myr(e) {
  u().onRename = e;
}
function Aki(e) {
  u().onEnableRemoteControl = e;
}
function Se(e) {
  return ebt(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}
function Ye(e) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let s of e) {
    if (n.length >= fFo) break;
    if (ebt(s)) n.push(s);
  }
  return n;
}
function Dyr(e) {
  u().onPeerMessageStatus = e;
}
function Cki(e) {
  u().onEnqueue = e;
}
function Ie(e) {
  if (e.session_id !== void 0 && e.session_id !== q())
    return (
      t(
        `[uds-messaging] Dropping ${ey(e.type)} message: session_id mismatch (got "${ey(String(e.session_id))}", expected "${q()}")`,
        { level: "warn" }
      ),
      !1
    );
  return !0;
}
async function ze(e, n, s, o, a) {
  let r = e.message?.content;
  if (typeof r !== "string" || r.length === 0) {
    t("[uds-messaging] Ignoring user message with missing or non-string content", {
      level: "warn"
    });
    return;
  }
  if (!Ie(e)) return;
  let p = typeof e.uuid === "string" ? e.uuid : We(),
    _ = MIt();
  if (_ !== void 0) {
    (lIe("uds: dropped before attachment materialization", _),
      c_s(
        {
          kind: "peer",
          from: e.from ?? "unknown",
          ...(n !== void 0 && { verifiedPeerPid: n }),
          ...(ebt(e.msg_id) && { msg_id: e.msg_id })
        },
        "refused"
      ));
    return;
  }
  let w = uyt(e.priority) ?? "next",
    h = wCs(r),
    l = dkt(e.from_plugin),
    D = await ZLt({ origin: { kind: "peer", ...(l !== void 0 && { plugin: l }) }, content: h });
  if (D.consumed !== void 0) return;
  using k = D.queueing;
  let c = typeof D.content === "string" ? D.content : h,
    S = c;
  if (e.file_attachments !== void 0 && o2e())
    try {
      let {
          emitPeerFileReceiveTelemetry: x,
          injectPeerFilePrefix: P,
          materializeLocalPeerFiles: y
        } = await import("./chunk-qd2exbb3.js"),
        A = await y(e.file_attachments);
      if (A.received > 0) ((S = P(c, A.prefix)), x("uds", A.received, A.verified));
    } catch (x) {
      t(`[uds-messaging] Failed to materialize file_attachments: ${PY(String(x))}`, {
        level: "warn"
      });
    }
  let v = await ce(n, o, a),
    b = Gue(
      {
        kind: "peer",
        from: e.from ?? "unknown",
        ...(n !== void 0 && { verifiedPeerPid: n }),
        ...(s !== void 0 && { verifiedPeerProcStart: s }),
        ...(v && { selfSent: v }),
        ...(ebt(e.msg_id) && { msg_id: e.msg_id }),
        ...(l !== void 0 && { plugin: l }),
        ...fqe(r)
      },
      S,
      r
    ),
    R = {
      mode: "prompt",
      agentId: tt(),
      value: S,
      uuid: p,
      priority: w,
      origin: b,
      skipSlashCommands: !0,
      isMeta: !0,
      skipAttachments: !0
    };
  if (HXt(R) !== "accept") return;
  (Ok(R),
    k.queued(),
    t(`[uds-messaging] Routed user message to queue (priority=${w}): ${ey(S, 80)}`),
    u().onEnqueue?.(),
    Oe(R));
}
function Oe(e) {
  let n = e.origin?.kind === "peer" ? e.origin : void 0,
    s = u().activeSocketPath;
  if (
    n !== void 0 &&
    n.selfSent !== !0 &&
    n.verifiedPeerPid !== void 0 &&
    typeof n.from === "string" &&
    s !== void 0 &&
    Hyr(n.from, s, n.verifiedPeerPid) !== void 0
  )
    yLo(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
}
function Hyr(e, n, s) {
  if (!e.startsWith("uds:") || !zue(e)) return;
  let o = u_(e).target;
  return o && I6o(o, n, { verifiedPeerPid: s, ownerUids: u().peerDirOwnerUids }) ? o : void 0;
}
async function be(e, n, s, o, a) {
  if (!le(e)) {
    t("[uds-messaging] Ignoring message without valid type field", { level: "warn" });
    return;
  }
  if (e.type === "user") await ze(e, n, s, o, a);
  else if (e.type === "control") {
    if (!Ie(e)) return;
    if (e.action === "rename" && typeof e.name === "string") u().onRename?.(e.name);
    else if (
      e.action === "peer_message_status" &&
      (e.status === "held" ||
        e.status === "denied" ||
        e.status === "expired" ||
        e.status === "delivered" ||
        e.status === "refused" ||
        e.status === "dropped")
    ) {
      let r = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status,
        p = _Fo(e.orig_msg_id, r);
      if (r === "dropped") {
        let _ = I4s(e.drop_reason),
          w = bFo(Ye(e.dropped_msg_ids));
        if (p !== void 0) {
          let h = w.get(p.sent.to) ?? { sends: [], wereHeld: 0 };
          if ((h.sends.push(p.sent), p.wasHeld)) h.wereHeld++;
          w.set(p.sent.to, h);
        }
        if (_ === "queue-full")
          for (let [h, { wereHeld: l }] of w) for (let D = 0; D < l; D++) pBr(h);
        if (w.size === 0)
          t(
            `[uds-messaging] peer_message_status dropped: neither orig_msg_id=${Se(e.orig_msg_id)} nor any named id matches an outstanding send`
          );
        for (let { sends: h } of w.values())
          u().onPeerMessageStatus?.({ status: r, sends: h, dropReason: _ });
      } else if (p === void 0)
        t(
          `[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${Se(e.orig_msg_id)}`
        );
      else {
        if (r === "held") yFo(p.sent.to);
        else if (r === "delivered" && p.wasHeld) pBr(p.sent.to);
        u().onPeerMessageStatus?.({ status: r, sent: p.sent });
      }
    } else if (e.action === "notify_when_idle") {
      let r = blo().safeParse(e);
      if (!r.success) {
        (t("[uds-messaging] notify_when_idle dropped: malformed frame"),
          f("cross_session_notify_idle", "malformed_frame"));
        return;
      }
      let p = u().activeSocketPath,
        _ = r.data.from,
        w = p !== void 0 ? Hyr(_, p, n) : void 0;
      if (p === void 0)
        (t("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)"),
          f("cross_session_notify_idle", "own_inbox_unbound"));
      else if (w === void 0)
        (t(
          `[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${ey(_)})`
        ),
          f("cross_session_notify_idle", "unvettable_reply_target"));
      else if (gR(w) === gR(p))
        (t("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)"),
          f("cross_session_notify_idle", "self_target_frame"));
      else {
        let h = await ce(n, o, a),
          l = wlo(_, w, r.data.msg_id, n, s, a === "peer", Ce(r.data.from_mode), h);
        if ((t(`[uds-messaging] notify_when_idle from ${ey(_)}: ${l}`), l === "full"))
          LDn(w, r.data.msg_id, n, a === "peer", s);
      }
    } else if (e.action === "peer_idle_notice") {
      let r = Slo().safeParse(e);
      if (!r.success) {
        (t("[uds-messaging] peer_idle_notice dropped: malformed frame"),
          f("cross_session_notify_idle", "malformed_notice"));
        return;
      }
      if (!xXt(r.data.orig_msg_id)) {
        t("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
        return;
      }
      let p = await ce(n, o, a);
      if (
        !Elo(
          r.data.orig_msg_id,
          r.data.state,
          r.data.finished_at,
          r.data.detail,
          Ce(r.data.from_mode),
          p
        )
      )
        t(
          `[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${ey(r.data.orig_msg_id)} was already consumed`
        );
    } else if (e.action === "yield_artifact_replies") {
      let r = rvs().safeParse(e);
      if (!r.success) {
        (t("[uds-messaging] yield_artifact_replies dropped: malformed frame"),
          f("artifact_comments_autoreact", "yield_malformed_frame"));
        return;
      }
      let p = u().activeSocketPath,
        _ = p !== void 0 ? Hyr(r.data.from, p, n) : void 0;
      if (p === void 0 || _ === void 0) {
        (t(
          `[uds-messaging] yield_artifact_replies dropped: ${p === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${ey(r.data.from)})`
        ),
          f("artifact_comments_autoreact", "yield_unvettable_target"));
        return;
      }
      if (gR(_) === gR(p)) {
        t("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
        return;
      }
      let w = await dfn(_);
      if (w === void 0 || w.sessionId !== q() || (n !== void 0 && w.pid !== n)) {
        (t(
          `[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${ey(r.data.from)})`
        ),
          f("artifact_comments_autoreact", "yield_requester_unverified"),
          ufo(r.data, _, n === void 0 ? void 0 : { pid: n, writeToken: s }, Date.now(), {
            refuse: !0
          }));
        return;
      }
      ufo(
        r.data,
        _,
        {
          pid: n ?? w.pid,
          procStart: s ?? (n === void 0 || n === w.pid ? w.procStart : void 0),
          writeToken: s
        },
        Date.now()
      );
    } else if (e.action === "unyield_artifact_replies") {
      let r = svs().safeParse(e);
      if (!r.success || !pvs(r.data, n))
        t(
          "[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back"
        );
    } else if (e.action === "artifact_replies_yielded") {
      let r = ovs().safeParse(e);
      if (!r.success) {
        (t("[uds-messaging] artifact_replies_yielded dropped: malformed frame"),
          f("artifact_live_subscribe", "yield_malformed_answer"));
        return;
      }
      if (!dvs(r.data.orig_msg_id)) {
        t("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
        return;
      }
      cvs(r.data, n);
    } else t(`[uds-messaging] Unhandled control action: ${ey(String(e.action))}`);
  } else t(`[uds-messaging] Received unhandled message type: ${ey(e.type)}`);
}
function Qe(e, n, s, o, a) {
  if (
    le(e) &&
    ((e.type === "control" && e.action !== "notify_when_idle") ||
      (e.type === "user" && e.priority === "now" && e.file_attachments === void 0))
  ) {
    be(e, n, s, o, a).catch((r) => {
      t(`[uds-messaging] Failed to process message: ${r}`, { level: "warn" });
    });
    return;
  }
  u().processingChain = u()
    .processingChain.then(() => be(e, n, s, o, a))
    .catch((r) => {
      t(`[uds-messaging] Failed to process message: ${r}`, { level: "warn" });
    });
}
var Je = 3000;
function Ze(e = 3000) {
  return Promise.race([u().processingChain, X(e, void 0, { unref: !0 })]);
}
function en(e) {
  e.setEncoding("utf8");
  let n = u().firstLineDeadlineMs,
    s = setTimeout(() => {
      s = void 0;
      try {
        if (
          (t(`[uds-messaging] Closing a connection that sent no complete line within ${n} ms`),
          !u().silentDropReported)
        )
          ((u().silentDropReported = !0),
            f("cross_session_inbox_auth", "silent_connection_deadline"));
        e.destroy();
      } catch (b) {
        t(`[uds-messaging] Failed to close a silent connection: ${b}`, { level: "warn" });
      }
    }, n);
  s.unref();
  let o = () => {
    if (s !== void 0) (clearTimeout(s), (s = void 0));
  };
  (e.once("close", o), e.once("error", o));
  let a,
    r,
    p = !1,
    _,
    w,
    h = process.pid !== 1 && Nlo();
  if (h) {
    let b = U_t(e),
      R = b !== void 0 ? CRe(b) : void 0;
    if (b !== void 0 && R !== void 0) w = { pid: b, token: R };
  }
  let l = "",
    D,
    k = !1,
    c = (b) => {
      if (
        (t(`[uds-messaging] Dropped ${b} from a connection that did not authenticate; closing it`, {
          level: "warn"
        }),
        !u().authDropReported)
      )
        ((u().authDropReported = !0), m("cross_session_inbox_auth", "unauthed_drop"));
      e.destroy();
    },
    S = (b) => {
      let R = !k;
      if (((k = !0), $si(b))) {
        if (R) {
          if (((D = Fsi(b.token, u().activeTokens)), D !== void 0 && !u().authOkReported))
            ((u().authOkReported = !0), g("cross_session_inbox_auth"));
          if (D === void 0 && u().authRequired) c("a bad auth frame");
        }
        return;
      }
      if (u().authRequired && D === void 0) {
        c(le(b) ? `a '${ey(b.type)}' line` : "a line");
        return;
      }
      if (!p) {
        if (
          ((a = U_t(e)),
          (r = a === void 0 ? void 0 : w !== void 0 ? (w.pid === a ? w.token : void 0) : CRe(a)),
          (p = !0),
          a !== void 0 && h)
        )
          _ = w !== void 0 && w.pid === a && CRe(a) === w.token ? N6o(a) : [];
      }
      Qe(b, a, r, _, D);
    },
    v = (b) => {
      try {
        S(b);
      } catch (R) {
        t(`[uds-messaging] Failed to handle line: ${R}`, { level: "warn" });
      }
    };
  (e.on("data", (b) => {
    if (((l += b), l.length > sfn)) {
      (t(`[uds-messaging] Line exceeded ${sfn} chars; dropping connection`, { level: "warn" }),
        e.destroy(),
        (l = ""));
      return;
    }
    let R;
    while (
      (R = l.indexOf(`
`)) !== -1
    ) {
      let x = l.slice(0, R);
      if (((l = l.slice(R + 1)), o(), !x.trim())) {
        if (u().authRequired && D === void 0) {
          ((k = !0), c("a blank line"), (l = ""));
          return;
        }
        continue;
      }
      let P;
      try {
        P = Vo(x);
      } catch {
        if (
          (t(`[uds-messaging] Failed to parse JSON line: ${PY(x)}`, { level: "warn" }),
          u().authRequired && D === void 0)
        ) {
          ((k = !0), c("an unparseable line"), (l = ""));
          return;
        }
        continue;
      }
      if ((v(P), e.destroyed)) {
        l = "";
        return;
      }
    }
  }),
    e.on("end", () => {
      if (l.trim() && !e.destroyed) {
        let b,
          R = !1;
        try {
          ((b = Vo(l)), (R = !0));
        } catch {
          if (
            (t(`[uds-messaging] Failed to parse final buffer: ${PY(l)}`, { level: "warn" }),
            u().authRequired && D === void 0)
          )
            c("an unparseable final fragment");
        }
        if (R) v(b);
      }
      e.end();
    }),
    e.on("error", (b) => {
      t(`[uds-messaging] Connection error: ${b.message}`, { level: "warn" });
    }));
}
function Rki() {
  return u().activeSocketPath;
}
var Q = 103;
function Sgi() {
  let e = i.XDG_RUNTIME_DIR || Ap(),
    n = ue(L(e, "cc-socks", `${process.pid}.sock`));
  if (Buffer.byteLength(n) <= Q) return n;
  return Xgs();
}
function Xgs(e = process.getuid?.() ?? 0) {
  let n = i.TERMUX_VERSION ? i.PREFIX : void 0,
    s = n ? L(n, "tmp") : "/tmp";
  return L(s, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function Y(e, n, s, { settleHeld: o = !0 } = {}) {
  for (let _ of u().connectedClients) _.destroy();
  if ((u().connectedClients.clear(), e.close(), o)) Alo();
  let a = o ? OXt() : void 0;
  await Ze();
  let r = o ? Pe(W_r("exited"), Je) : void 0;
  if ((await a, await r, o)) await sFs();
  try {
    await re(n);
  } catch {}
  let p = u();
  if (p.activeKeyFile !== void 0) (await Hsi(p.activeKeyFile, s), (p.activeKeyFile = void 0));
  z();
}
function z() {
  ((u().activeSocketPath = void 0),
    (u().activeTokens = void 0),
    delete process.env.CLAUDE_CODE_MESSAGING_SOCKET,
    _C.unset("CLAUDE_CODE_MESSAGING_TOKEN"),
    pFo(void 0),
    Mlo(null),
    Dlo(null),
    K_r(null),
    cfo(null),
    q_r(null),
    (jT().senderMode = null));
}
function nn(e, n, s, o) {
  return async () => {
    (await Y(e, n, s), o());
  };
}
function me(e) {
  return new Promise((n) => {
    let s = new He(),
      o = (a) => {
        (s.destroy(), n(a));
      };
    (s.on("connect", () => o("live")),
      s.on("error", () => o("dead")),
      s.setTimeout(250, () => o("dead")),
      s.connect({ path: e }));
  });
}
function ne(e, n) {
  return new Promise((s, o) => {
    function a(r) {
      if (E(r) === "EADDRINUSE") s(!1);
      else o(r);
    }
    (e.once("error", a),
      e.listen(n, () => {
        (e.removeListener("error", a), s(!0));
      }));
  });
}
function tn(e) {
  let n = `${e.replace(/\.sock$/, "")}-${_e(4).toString("hex")}.sock`;
  if (Buffer.byteLength(n) <= Q) return n;
  let s = L(e, ".."),
    o = Q - Buffer.byteLength(L(s, ".sock"));
  return L(s, `${_e(8).toString("hex").slice(0, Math.max(1, o))}.sock`);
}
async function sn(e) {
  let n = `${fe(e).replace(/\.sock$/, "")}-`,
    s;
  try {
    s = await Ve(I(e));
  } catch {
    return;
  }
  for (let o of s) {
    if (!o.startsWith(n) || !/^[0-9a-f]{8}\.sock$/.test(o.slice(n.length))) continue;
    let a = L(I(e), o);
    if ((await me(a)) === "live") continue;
    try {
      (await re(a), t(`[uds-messaging] Reaped stale moved-aside socket ${a}`));
    } catch {}
  }
}
async function rn(e, n) {
  if ((await sn(n), await ne(e, n))) return n;
  if ((await me(n)) !== "live") {
    try {
      await re(n);
    } catch {}
    if (await ne(e, n)) return n;
  }
  for (let s = 0; s < 3; s++) {
    let o = tn(n);
    if (
      (t(
        `[uds-messaging] Auto socket path ${n} is another session's live socket (sibling pid namespace?); binding at ${o} instead`,
        { level: "warn" }
      ),
      await ne(e, o))
    )
      return o;
  }
  throw Error("listen EADDRINUSE on the auto socket path and its moved-aside siblings");
}
function xki(e, n, s = {}) {
  return vgi(e ?? Sgi(), n, { isExplicit: e !== void 0, profileStartup: s.profileStartup });
}
function V() {
  (_C.unset("CLAUDE_CODE_MESSAGING_SOCKET"), _C.unset("CLAUDE_CODE_MESSAGING_TOKEN"));
}
var on = [
  "directory_rule",
  "foreign_owner",
  "leaf_shape",
  "dangling_link",
  "raced",
  "not_directory",
  "symlink_loop",
  "uid_collapse",
  "internal"
];
function F(e, n, s) {
  return Object.assign(n, { socketsDirVetKind: e, ...(s && { refusedComponent: s }) });
}
function an(e) {
  if (!(e instanceof Error) || !("refusedComponent" in e)) return;
  let n = e.refusedComponent;
  return typeof n === "object" &&
    n !== null &&
    "path" in n &&
    typeof n.path === "string" &&
    "uid" in n &&
    typeof n.uid === "number" &&
    "gid" in n &&
    typeof n.gid === "number" &&
    "mode" in n &&
    typeof n.mode === "number"
    ? {
        path: n.path,
        uid: n.uid,
        gid: n.gid,
        mode: n.mode,
        ownerRefused:
          "ownerRefused" in n && typeof n.ownerRefused === "boolean" ? n.ownerRefused : void 0
      }
    : void 0;
}
function H(e, n, s) {
  return {
    path: e,
    uid: n.uid,
    gid: n.gid,
    mode: n.mode & 4095,
    ...(s !== void 0 && { ownerRefused: s })
  };
}
function Te(e) {
  if (se(e) === "uid_collapse")
    return "this process runs in a user namespace without a uid mapping, so file ownership cannot be verified \u2014 start it with a uid map (e.g. unshare -Ur), or pass --messaging-socket-path";
  let n = an(e);
  if (n === void 0) return;
  let s = n.mode.toString(8).padStart(4, "0"),
    o = `(owner ${n.uid}:${n.gid}, mode ${s})`,
    a = "or pass --messaging-socket-path",
    r = Mt(n.path),
    p = r === n.path,
    _ = `'${Array.from(r, (l) => {
      if (dn.test(l)) return l;
      return ((p = !1), "?");
    }).join("")}'`,
    w = p,
    h = (l, D) =>
      w
        ? `chmod ${l} ${wo([n.path])}${D}`
        : `clear its ${l === "o-w" ? "other" : "group"}-write bit${D}`;
  switch (se(e)) {
    case "directory_rule": {
      if (n.ownerRefused === !0)
        return `${_} is not owned by you or root ${o} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${a}`;
      let l = (n.mode & 512) !== 0;
      if (!l && (n.mode & 2) !== 0)
        return `${_} is world-writable without the sticky bit ${o} \u2014 ${h("o-w", " (or chmod +t)")}, ${a}`;
      if (!l && (n.mode & 16) !== 0)
        return `${_} is group-writable without the sticky bit ${o} \u2014 ${h("g-w", "")}, ${a}`;
      return `${_} is not owned by you or root ${o} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${a}`;
    }
    case "foreign_owner":
      return `${_} is owned by another user ${o} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${a}`;
    case "not_directory":
    case "leaf_shape":
      return `${_} is not a directory ${o} \u2014 remove it or use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${a}`;
    case "dangling_link":
    case "raced":
    case "symlink_loop":
    case "uid_collapse":
    case "internal":
    case void 0:
      return;
  }
}
var dn = /^[A-Za-z0-9._\/ ~+=:@,#%-]$/,
  un = new Set(["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOTDIR"]);
function cn(e) {
  switch (se(e)) {
    case "directory_rule":
    case "foreign_owner":
    case "leaf_shape":
    case "not_directory":
      return !0;
    case "dangling_link":
    case "symlink_loop":
    case "raced":
    case "uid_collapse":
    case "internal":
      return !1;
    case void 0:
      break;
  }
  let n = E(e);
  return n !== void 0 && un.has(n);
}
function se(e) {
  if (!(e instanceof Error) || !("socketsDirVetKind" in e)) return;
  let n = e.socketsDirVetKind;
  return on.find((s) => s === n);
}
function Ee() {
  return F(
    "dangling_link",
    Error(
      "a component of the sockets path is a symlink whose target does not exist \u2014 create the target (0700) or repoint the link"
    )
  );
}
var j =
    "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.",
  ke = `A component of the sockets path is not a directory (a regular file is in the way). ${j}`,
  ve = `The sockets path runs through a symlink loop. ${j}`,
  fn =
    "This process runs in a user namespace without a uid mapping (its own uid reads as the kernel overflow uid), so file ownership cannot be verified. Start it with a uid map (e.g. `unshare -Ur` / `--map-current-user`), or pass --messaging-socket-path.";
function De(e) {
  switch (se(e)) {
    case "directory_rule":
      return `A directory on the sockets path is shared (world- or group-writable without the sticky bit, e.g. a container volume mounted at /tmp) or not owned by you or root. ${j}`;
    case "foreign_owner":
    case "leaf_shape":
      return j;
    case "not_directory":
      return ke;
    case "symlink_loop":
      return ve;
    case "uid_collapse":
      return fn;
    case "dangling_link":
    case "raced":
    case "internal":
      return "";
    case void 0:
      break;
  }
  switch (E(e)) {
    case "ENOTDIR":
      return ke;
    case "ELOOP":
      return ve;
    case "EACCES":
    case "EPERM":
      return `This user lacks permission on part of the sockets path (an ancestor is not searchable, or the parent is not writable). ${j}`;
    case "ENOENT":
      return `An ancestor of the sockets path does not exist. ${j}`;
    default:
      return "";
  }
}
function $e(e, n, s) {
  u().lastStartFailureCause = "socket_dir_refused";
  let o = Te(n);
  ((u().lastStartFailureDetail = o),
    z(),
    t(
      `[uds-messaging] Failed to set up sockets directory ${e} (refusing to bind \u2014 cross-session messaging is OFF for this session): ${d(n)}.${o ? ` Refused component: ${o}.` : ""}${s ? ` ${s}` : ""}`,
      { level: "error" }
    ),
    V());
  return;
}
async function Re(e) {
  if (!ie(e)) throw F("internal", Error("sockets directory must be absolute here"));
  let n = process.getuid?.(),
    s = (y) => {
      if (y.isSymbolicLink())
        throw F(
          "leaf_shape",
          Error("sockets directory is a symlink \u2014 refusing to use it"),
          H(e, y)
        );
      if (!y.isDirectory())
        throw F("leaf_shape", Error("sockets directory exists but is not a directory"), H(e, y));
      if (n !== void 0 && !o(y.uid))
        throw F(
          "foreign_owner",
          Error("sockets directory is owned by another user \u2014 refusing to use it"),
          H(e, y)
        );
    },
    o = (y) => y === n,
    a = process.getgid?.(),
    r = await Fqs();
  if (r?.uidCollapses)
    throw F(
      "uid_collapse",
      Error(
        "this process reads as the kernel overflow uid (user namespace without a uid mapping) \u2014 ownership cannot be verified; refusing to use the sockets directory"
      )
    );
  o = (y) => y === n && !r?.uidCollapses;
  let p = $qs(),
    _ = async (y, A) => {
      try {
        let C = A.isSymbolicLink() ? L(await de(I(y)), fe(y)) : await de(y),
          N = await K(C);
        return N.dev === A.dev && N.ino === A.ino ? C : void 0;
      } catch {
        return;
      }
    },
    w = (y) =>
      r !== void 0 &&
      ((r.unmappedOwnerUid !== void 0 && y === r.unmappedOwnerUid) ||
        (y === 0 && r.rootUidAmbiguous)),
    h = w,
    l = (y) => y !== void 0 && p.has(y),
    D = (y, A, C) => n === void 0 || o(y) || (!A && (w(y) ? l(C) : y === 0)),
    k = (y, A, C) => {
      if (!D(y.uid, A, C)) return !1;
      if ((y.mode & 512) !== 0) return !0;
      if ((y.mode & 2) !== 0) return !1;
      if ((y.mode & 16) !== 0) return o(y.uid) && a !== void 0 && y.gid === a && a === n;
      return !0;
    },
    c = i.TERMUX_VERSION && i.PREFIX ? I(I(i.PREFIX)) : void 0,
    S = (y) => I(y) === y || y === c,
    v = async (y, A, C = 0) => {
      if (C > 16)
        throw F("symlink_loop", Error("sockets-directory chain: too many levels of symlinks"));
      let N = !1,
        pe,
        ge = !1;
      for (let M = y, J = !0; ; M = I(M), J = !1) {
        let T;
        try {
          T = await K(M);
        } catch (B) {
          if (!G(B)) throw B;
        }
        if (T !== void 0) {
          pe ??= M;
          let B = J && A;
          if (T.isSymbolicLink()) {
            ge = !0;
            let Z = h(T.uid) ? await _(M, T) : void 0;
            if (!D(T.uid, !1, Z))
              throw F(
                "foreign_owner",
                Error(
                  "a sockets-directory component is a symlink owned by another user \u2014 refusing to use it"
                ),
                H(M, T)
              );
            let ee = (await Xe(M)).replace(/\/{2,}/g, "/"),
              oe = ee.length > 1 && ee.endsWith("/") ? ee.slice(0, -1) : ee,
              xe = ie(oe) ? oe : `${await de(I(M))}/${oe}`,
              { startExists: Ue } = await v(xe, B, C + 1);
            if (J) N = Ue;
          } else {
            if (!T.isDirectory())
              throw F(
                "not_directory",
                Error(
                  "a sockets-directory component exists but is not a directory \u2014 refusing to use it"
                ),
                H(M, T)
              );
            let Z = h(T.uid) ? await _(M, T) : void 0;
            if (!k(T, B, Z))
              throw F(
                "directory_rule",
                Error(
                  "a sockets-directory component is not a private-or-sticky directory owned by us or root \u2014 refusing to use it"
                ),
                H(M, T, !D(T.uid, B, Z))
              );
            if (J) N = !0;
          }
        }
        if (S(M)) break;
      }
      return { startExists: N, deepestExisting: pe, sawSymlink: ge };
    },
    b = I(e),
    R = await v(b, !1),
    x = !R.startExists,
    P;
  try {
    P = await K(e);
  } catch (y) {
    if (!G(y)) throw y;
  }
  if (x && R.deepestExisting === b) throw Ee();
  if (x) {
    let y = [],
      A = (C) => {
        if (!C.isDirectory() || (n !== void 0 && !o(C.uid)))
          throw F(
            "raced",
            Error(
              "a sockets-directory component appeared while being created and is not our directory \u2014 refusing to use it"
            )
          );
      };
    for (let C = b; C !== R.deepestExisting && !S(C); C = I(C)) y.unshift(C);
    for (let C of y)
      try {
        await te(C, { mode: 448 });
      } catch (N) {
        if (G(N) && R.sawSymlink) throw Ee();
        if (E(N) !== "EEXIST") throw N;
        A(await K(C));
      }
    if (!(await v(b, !0)).startExists)
      throw F("raced", Error("sockets base directory vanished while being set up"));
  }
  if (P === void 0) {
    try {
      await te(e, { mode: 448 });
    } catch (y) {
      if (E(y) !== "EEXIST") throw y;
    }
    P = await K(e);
  }
  if ((s(P), (P.mode & 511) !== 448)) await Ae(e, 448);
}
async function wgi(e) {
  if (!ie(e))
    throw new fy(
      e === ""
        ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path."
        : `--messaging-socket-path must be an absolute path, got: ${e}`
    );
  if (e.split("/").includes(".."))
    throw new fy(`--messaging-socket-path must not contain '..' segments, got: ${e}`);
  let s = e.split("/").at(-1);
  if (s === "" || s === ".")
    throw new fy(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
  let o = je(e).replace(/\/+$/, "");
  if (o === "" || !o.startsWith("/") || fe(o) === "")
    throw new fy(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
  if (!$$(o) || !$$(e))
    throw new fy(`--messaging-socket-path must be a local socket path, got: ${e}`);
  if (Buffer.byteLength(o) > Q)
    throw new fy(
      `--messaging-socket-path is too long for a Unix socket (${Buffer.byteLength(o)} bytes, max ${Q}): ${o}. Choose a shorter path, e.g. under $XDG_RUNTIME_DIR or /tmp/<private-dir>.`
    );
  let a = I(o),
    r =
      "Use a private directory you own that only you use, e.g. mkdir -m 700 <dir> (or chmod 700 an existing one).",
    p = (c) => {
      if (c.isSymbolicLink())
        throw new fy(
          `--messaging-socket-path directory must be a real directory, not a symlink: ${a}. ${r}`
        );
      if (!c.isDirectory())
        throw new fy(`--messaging-socket-path parent is not a directory: ${a}.`);
      let S = process.getuid?.();
      if (S !== void 0 && c.uid !== S)
        throw new fy(
          `--messaging-socket-path directory ${a} is not owned by you (uid ${c.uid}). ${r}`
        );
      if ((c.mode & 63) !== 0)
        throw new fy(
          `--messaging-socket-path directory ${a} is not private (mode ${(c.mode & 4095).toString(8)}); the socket directory must be mode 0700 so no other user or group can reach or replace the socket. ${r}`
        );
    },
    _ = async () => {
      try {
        return await K(a);
      } catch (c) {
        let S = E(c);
        if (G(c)) return;
        if (S === "ENOTDIR" || S === "EACCES" || S === "ELOOP" || S === "ENAMETOOLONG")
          throw new fy(
            `--messaging-socket-path directory is not usable: ${a} (${S}). Fix the path or its permissions, or choose another path. ${r}`
          );
        throw new fy(
          `--messaging-socket-path directory could not be examined: ${a} (${S ?? String(c)}). ${r}`
        );
      }
    },
    w = await _();
  if (w !== void 0) return (p(w), o);
  let h = process.getuid?.(),
    l = [];
  for (let c = I(a); ; c = I(c)) {
    let S;
    try {
      S = await K(c);
    } catch (v) {
      if (!G(v)) throw new fy(`--messaging-socket-path: cannot inspect ${c} (${E(v) ?? v}). ${r}`);
      l.unshift(c);
    }
    if (S !== void 0) {
      if (h !== void 0 && S.uid !== h && S.uid !== 0)
        throw new fy(
          `--messaging-socket-path: ${c} ${S.isSymbolicLink() ? "is a symlink" : "is a directory"} owned by another user \u2014 refusing to create your sockets directory ${S.isSymbolicLink() ? "through" : "inside"} it. ${r}`
        );
      break;
    }
    if (I(c) === c) break;
  }
  let D = !1;
  try {
    for (let c of l)
      try {
        await te(c, { mode: 448 });
      } catch (S) {
        if (E(S) !== "EEXIST") throw S;
        let v = await K(c);
        if (!v.isDirectory() || (h !== void 0 && v.uid !== h))
          throw new fy(
            `--messaging-socket-path: ${c} appeared while your sockets directory was being created and is not a directory you own \u2014 refusing to use it. ${r}`
          );
      }
    try {
      (await te(a, { mode: 448 }), (D = !0));
    } catch (c) {
      if (E(c) !== "EEXIST") throw c;
    }
  } catch (c) {
    if (c instanceof fy) throw c;
    throw new fy(
      `--messaging-socket-path directory ${a} does not exist and could not be created (${E(c) ?? c}). ${r}`
    );
  }
  let k = await _();
  if (k === void 0)
    throw new fy(`--messaging-socket-path directory ${a} vanished while being set up. ${r}`);
  if (!D) return (p(k), o);
  return (p(k), o);
}
async function vgi(e, n, s = {}) {
  u().startInFlight = !0;
  try {
    return await ln(e, n, s);
  } finally {
    u().startInFlight = !1;
  }
}
async function ln(e, n, s = {}) {
  let a = s.profileStartup ? performance.now() : void 0,
    r = (h) => {
      if (a === void 0) return;
      let l = performance.now();
      (Dr(h, l - a, a), (a = l));
    };
  if (
    ((u().lastStartFailureCause = "bind_failed"), (u().lastStartDegradedCause = void 0), !$$(e))
  ) {
    if (
      (t(
        `[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`,
        { level: "error" }
      ),
      V(),
      (u().lastStartFailureCause = "path_refused"),
      s.isExplicit)
    )
      throw new fy(
        `--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`
      );
    return;
  }
  if (!s.isExplicit && !0 && !ie(e)) e = ue(e);
  if (s.isExplicit) {
    if (((e = await wgi(e)), (await me(e)) === "live"))
      throw new fy(
        `--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`
      );
  } else {
    let h = I(e);
    try {
      await Re(h);
    } catch (l) {
      let D = cn(l) ? await Pun() : void 0,
        k = D === void 0 ? void 0 : ue(Xgs(D)),
        c = k === void 0 ? void 0 : L(k, "..");
      if (k === void 0 || c === void 0 || c === h) return $e(h, l, De(l));
      let S = Te(l);
      t(
        `[uds-messaging] sockets directory ${h} refused (${d(l)}${S ? `; refused component: ${S}` : ""}); trying the per-uid fallback ${c}`,
        { level: "warn" }
      );
      try {
        await Re(c);
      } catch (v) {
        return $e(c, v, De(v));
      }
      ((e = k), we("primary_dir_refused_fell_back"));
    }
  }
  if (s.isExplicit)
    try {
      await re(e);
    } catch {}
  if (((u().activeSocketPath = e), s.profileStartup)) go("uds_inbox_dir_ready");
  r("setup_uds_dir_ms");
  let p, _;
  try {
    p = Be({ allowHalfOpen: !0 }, (h) => {
      (u().connectedClients.add(h),
        t("[uds-messaging] Client connected"),
        en(h),
        h.on("close", () => {
          (u().connectedClients.delete(h), t("[uds-messaging] Client disconnected"));
        }));
    });
  } catch (h) {
    (z(), t(`[uds-messaging] Failed to create server: ${String(h)}`, { level: "error" }), V());
    return;
  }
  (p.on("error", (h) => {
    t(`[uds-messaging] Server error: ${h.message}`, { level: "error" });
  }),
    (u().authRequired = s.requireAuth ?? sor()),
    (u().firstLineDeadlineMs = s.firstLineDeadlineMs ?? Lyr));
  let w = Msi();
  u().activeTokens = w;
  try {
    if (s.isExplicit) {
      if (!(await ne(p, e))) throw Error("listen EADDRINUSE on the requested socket path");
    } else ((e = await rn(p, e)), (u().activeSocketPath = e));
    if (s.profileStartup) go("uds_inbox_listening");
    r("setup_uds_listen_ms");
    {
      let k = await Pun(),
        c = process.getuid?.();
      u().peerDirOwnerUids = [
        ...(c !== void 0 ? [c] : []),
        ...(k !== void 0 && k !== c ? [k] : [])
      ];
    }
    p.unref();
    let h = bt(async () => {
      (t("[uds-messaging] Shutting down"), await Y(p, e, n));
    });
    ((_ = h), await Ae(e, 384));
    try {
      ((u().activeKeyFile = await Dsi(e, w.peerToken, n, { sweepPermitted: await KVe() })), gn());
    } catch (k) {
      if (u().authRequired) {
        if (
          (t(
            `[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${k}`,
            { level: "error" }
          ),
          (u().lastStartFailureCause = "key_publish_failed"),
          await Y(p, e, n, { settleHeld: !1 }),
          h(),
          V(),
          s.isExplicit)
        )
          throw new fy(
            `--messaging-socket-path: bound ${e} but could not publish its auth key (${E(k) ?? k}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`
          );
        return;
      }
      (t(
        `[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${k}`,
        { level: "warn" }
      ),
        we("key_publish_failed"));
    }
    if (s.profileStartup) go("uds_inbox_key_published");
    (r("setup_uds_publish_ms"),
      (process.env.CLAUDE_CODE_MESSAGING_SOCKET = e),
      _C.set("CLAUDE_CODE_MESSAGING_TOKEN", w.childToken),
      pFo(B5(e)));
    let l = B5(e);
    return (
      Dlo(Oe),
      (jT().senderMode = Jgs),
      K_r((k, c, S, v, b) =>
        yye(
          k,
          { action: "peer_idle_notice", ...c, from: l, ...(v ? pn() : {}) },
          {
            ...(S !== void 0 && { expectPeerPid: S }),
            ...(b !== void 0 && { expectPeerProcStart: b }),
            storageV5: n
          }
        )
      ),
      cfo(
        (k, c, S, v) =>
          yye(
            k,
            { action: "artifact_replies_yielded", ...c, from: l },
            {
              ...(S !== void 0 && { expectPeerPid: S }),
              ...(v !== void 0 && { expectPeerProcStart: v }),
              storageV5: n
            }
          ),
        l
      ),
      q_r((k) => SFo(k)),
      Mlo((k, c, S) => {
        let v = k.origin?.kind === "peer" ? k.origin : void 0,
          b = v?.from;
        if (typeof b !== "string") return;
        let R = Hyr(b, e, v?.verifiedPeerPid);
        if (R === void 0) {
          t(
            `[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${ey(b)})`
          );
          return;
        }
        return yye(
          R,
          {
            action: "peer_message_status",
            ...(c === "refused" ? { status: "expired", status_detail: "refused" } : { status: c }),
            reason: mn(c),
            from: l,
            ...(typeof v?.msg_id === "string" && { orig_msg_id: v.msg_id }),
            ...(c === "dropped" &&
              S !== void 0 && { drop_reason: S.dropReason, dropped_msg_ids: S.droppedMsgIds })
          },
          {
            ...(v?.verifiedPeerPid !== void 0 && { expectPeerPid: v.verifiedPeerPid }),
            ...(v?.verifiedPeerProcStart !== void 0 && {
              expectPeerProcStart: v.verifiedPeerProcStart
            }),
            storageV5: n
          }
        ).catch((x) => t(`[uds-messaging] hold-receipt send failed to ${ey(b)}: ${PY(String(x))}`));
      }),
      t(`[uds-messaging] Listening: ${e}`, { level: "info" }),
      t(
        `[uds-messaging] Inject messages (auth line ${u().authRequired ? "REQUIRED" : "optional"} here): { echo '{"type":"auth","token":"'"$CLAUDE_CODE_MESSAGING_TOKEN"'"}'; echo '{"type":"user","message":{"role":"user","content":"hello"}}'; } | socat - UNIX-CONNECT:${e}`,
        { level: "info" }
      ),
      t(
        `[uds-messaging] Connect when the data is ready (e.g. out=$(cmd); printf '%s\\n' "$out" | ${"nc -N -U"} "$CLAUDE_CODE_MESSAGING_SOCKET" \u2014 or the socat form above): a connection that sends no complete line within ${u().firstLineDeadlineMs} ms is closed`,
        { level: "info" }
      ),
      (u().lastStartFailureCause = void 0),
      nn(p, e, n, h)
    );
  } catch (h) {
    if (h instanceof fy) throw h;
    if (s.isExplicit) {
      let l = E(h);
      if (_ !== void 0)
        throw (
          await Y(p, e, n, { settleHeld: !1 }),
          _(),
          V(),
          (u().lastStartFailureCause = "post_bind_setup_failed"),
          new fy(
            `--messaging-socket-path: bound ${e} but could not finish setting the socket up (${l ?? String(h)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`
          )
        );
      (z(), V());
      let D =
        l === "ENAMETOOLONG"
          ? "the path is too long for a Unix socket (max ~104 bytes); choose a shorter one"
          : l === "EADDRINUSE"
            ? "something already exists at that path and could not be replaced; remove it or choose another path"
            : l === "EACCES" || l === "EPERM"
              ? "permission denied in that directory"
              : "the socket could not be created there";
      throw new fy(`--messaging-socket-path: cannot bind at ${e} (${l ?? String(h)}): ${D}.`);
    }
    if (_ !== void 0)
      (await Y(p, e, n, { settleHeld: !1 }),
        _(),
        (u().lastStartFailureCause = "post_bind_setup_failed"));
    if (E(h) === "ENAMETOOLONG")
      t(
        `[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`,
        { level: "error" }
      );
    else t(`[uds-messaging] Failed to start: ${h}`, { level: "error" });
    (z(), V());
    return;
  }
}
function mn(e) {
  switch (e) {
    case "held":
      return "Your message is held for the recipient user's approval before it reaches their Claude session (permission-mode parity).";
    case "denied":
      return "The recipient user declined your message; it was not delivered to their Claude session.";
    case "expired":
      return "Your held message expired without approval and was not delivered to the recipient's Claude session.";
    case "delivered":
      return "Your previously-held message was approved and released to the recipient's Claude session.";
    case "refused":
      return "The recipient session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); your message was not delivered to its Claude.";
    case "dropped":
      return "The recipient's session dropped your message at its inbox (rate limit, duplicate, relay loop, or full queue); it was not delivered and will not be.";
  }
}
function pn() {
  let e = Jgs();
  return e === void 0 ? {} : { from_mode: e };
}
function Jgs() {
  if (!xIt()) return;
  let e = Ma().inbound.getCurrentMode;
  if (e)
    try {
      return IIt(e());
    } catch {
      return;
    }
  let n = Ma().inbound.modeAtUnwire;
  return n !== void 0 ? IIt(n) : void 0;
}
function Ce(e) {
  return Ksi(e) ? e : void 0;
}
function ce(e, n, s) {
  return ye({
    selfSentAncestry: n,
    verifiedPeerPid: e,
    childTokenPresented: s === "child",
    needsVerdict: Nlo(),
    platform: O()
  });
}
function gn() {
  if (!process.listeners("exit").includes(Qgs)) process.on("exit", Qgs);
}
function Qgs() {
  try {
    let e = u().activeKeyFile;
    if (e === void 0) return;
    Ge(e);
  } catch {}
}
export { kki, Tki, Oyr, Myr, Aki, Dyr, Cki, Hyr, Rki, Sgi, Xgs, xki, wgi, vgi, Jgs, Qgs };

//# sourceMappingURL=chunk-k4sr74rj.js.map
