// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { tt } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { W_e, N0e, ul, k } from "./chunk-ajtyjx88.js";
import { bt, t } from "./chunk-4kxznmzw.js";
import { g, f } from "./chunk-brszmkb3.js";
import { CH, C6r } from "./chunk-5rw2zfa0.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { oT } from "./chunk-63a6mqbs.js";
import { pe, Xm } from "./chunk-7c3thgax.js";
import { ha } from "./chunk-cqrqqt4t.js";
import { WPo } from "./chunk-j0tbz6ra.js";
import { Ma } from "./chunk-znr3gw2p.js";
import { ey } from "./chunk-4sp6n814.js";
function xIt() {
  return k("tengu_harbor_kite_mode_emit", !0);
}
function O() {
  switch (I().decidedBy) {
    case "policySettings":
      return "managed-setting";
    case "repoSettings":
      return "repo-setting";
    case "invalidSetting":
      return "invalid-setting";
    case "flagSettings":
    case "userSettings":
    case void 0:
      return "explicit-setting";
  }
}
var p = { accept: 0, hold: 1, refuse: 2 },
  Q = 100,
  P = new Set(oT);
function PXt(e) {
  if (e !== null) ((Ma().inbound.shuttingDown = !1), x(), (Ma().inbound.modeAtUnwire = void 0));
  else {
    let n = Ma().inbound.getCurrentMode;
    if (n !== null)
      try {
        Ma().inbound.modeAtUnwire = n();
      } catch {
        Ma().inbound.modeAtUnwire = void 0;
      }
  }
  if (((Ma().inbound.getCurrentMode = e), e !== null)) dIe("mode-changed");
}
function IXt(e) {
  Ma().inbound.onPeerHeld = e;
}
function Mlo(e) {
  Ma().inbound.sendPeerReceipt = e;
}
function c_s(e, n) {
  Ma().inbound.sendPeerReceipt?.({ mode: "prompt", agentId: tt(), value: "", origin: e }, n);
}
function Vdt(e) {
  let n = Ma().inbound;
  if (
    ((n.publishAvailability = e),
    n.unsubscribeAvailabilityRefresh?.(),
    (n.unsubscribeAvailabilityRefresh = null),
    e)
  )
    (PIt(), (n.unsubscribeAvailabilityRefresh = ul(PIt)));
}
function PIt() {
  Ma().inbound.publishAvailability?.(MIt() === void 0);
}
function Dlo(e) {
  Ma().inbound.recordCorrespondent = e;
}
var F = 750;
function x() {
  if (Ma().inbound.shutdownSettleHandle === null) Ma().inbound.shutdownSettleHandle = bt(OXt);
}
async function OXt() {
  let e = Ma().inbound;
  if (
    (e.shutdownSettleHandle?.(),
    (e.shutdownSettleHandle = null),
    (e.shuttingDown = !0),
    e.held.length === 0)
  )
    return;
  let n = e.held.splice(0, e.held.length);
  t(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
  let o = [];
  for (let s of n) (o.push(e.sendPeerReceipt?.(s, "expired")), e.onPeerHoldDropped?.(s, "expired"));
  await Promise.race([Promise.allSettled(o), X(F, void 0, { unref: !0 })]);
}
function Hlo(e) {
  let { inbound: n } = Ma();
  return n.held.includes(e) ? n.announced.get(e) : void 0;
}
function MXt(e) {
  Ma().inbound.onPeerHoldDropped = e;
}
function DXt(e) {
  Ma().inbound.onPeerHoldReleased = e;
}
function qdt() {
  return I().value;
}
function I() {
  let e, n;
  for (let o of ["policySettings", "flagSettings", "userSettings"]) {
    if (!Qt(o)) continue;
    let s = pe(o)?.crossSessionInbound;
    if (s !== void 0) {
      ((e = s), (n = o));
      break;
    }
  }
  for (let o of ["localSettings", "projectSettings"]) {
    if (!Qt(o)) continue;
    let s = pe(o)?.crossSessionInbound;
    if (s === void 0) continue;
    if (p[s] > p[e ?? "accept"]) ((e = s), (n = "repoSettings"));
    else if (s !== "accept" && e !== void 0 && p[s] === p[e] && n !== "policySettings")
      n = "repoSettings";
  }
  if (p[e ?? "accept"] < p.hold && N()) ((e = "hold"), (n = "invalidSetting"));
  return { value: e, decidedBy: n };
}
function N() {
  return Xm().errors.some((e) => e.path === C6r && e.severity === "warning" && !e.statusOnly);
}
function h(e) {
  switch (e) {
    case "accept":
      return { policy: "accept" };
    case "hold":
      return { policy: "hold", holdCause: O() };
    case "refuse":
      return { policy: "refuse", refuseCause: "opt-out" };
  }
}
function w() {
  return ha("receive") ? void 0 : { policy: "refuse", refuseCause: "kill-switch" };
}
function H() {
  let e = w();
  if (e) return e;
  let n = qdt();
  if (n !== void 0) return h(n);
  let o = v();
  if (o === null) return { policy: "hold", holdCause: "mode-unknown" };
  if (!P.has(o.mode))
    return (
      t(
        `[cross-session-inbound] unrecognized permission mode '${o.mode}' (fail-closed \u2192 hold)`
      ),
      { policy: "hold", holdCause: "mode-unknown" }
    );
  return C(o) ? { policy: "hold", holdCause: "bypass-default" } : { policy: "accept" };
}
function S(e) {
  let n = w();
  if (n) return n;
  return E(e, !1);
}
function _(e) {
  return E(e, !0);
}
function E(e, n) {
  let o = qdt();
  if (o !== void 0) return h(o);
  if (e?.selfSent) return { policy: "accept" };
  let s = v();
  if (s === null || !P.has(s.mode)) {
    if (s !== null)
      t(
        `[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`
      );
    return { policy: "hold", holdCause: "mode-unknown" };
  }
  let i = IIt(s),
    a = n || xIt() ? e?.fromMode : void 0;
  if (a !== void 0)
    return a === i ? { policy: "accept" } : { policy: "hold", holdCause: "mode-mismatch" };
  return i === "bypass" ? { policy: "hold", holdCause: "no-mode-asserted" } : { policy: "accept" };
}
function C(e) {
  return e.mode === "bypassPermissions" || CH(e.mode, e.isBypassPermissionsModeAvailable);
}
function IIt(e) {
  return C(e) ? "bypass" : "prompting";
}
function NUe() {
  return H().policy;
}
function Llo(e) {
  return S(e).policy;
}
function v() {
  let e = Ma().inbound.getCurrentMode;
  if (e === null)
    return (
      t("[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)"),
      null
    );
  try {
    return e();
  } catch (n) {
    return (
      t(`[cross-session-inbound] mode getter threw (${d(n)}; fail-closed \u2192 hold)`),
      null
    );
  }
}
function Nlo() {
  if (qdt() !== void 0) return !1;
  let e = v();
  if (e === null || !P.has(e.mode)) return !1;
  return C(e);
}
function HXt(e) {
  return R(e, S(b(e)));
}
function b(e) {
  let n = e.origin;
  if (!n || n.kind !== "peer") return;
  return { fromMode: n.fromMode, selfSent: n.selfSent };
}
function D(e) {
  let n;
  if (e.priority === "later") {
    let { priority: o, ...s } = e;
    n = WPo(s, { receipt: "caller" });
  } else n = WPo(e, { receipt: "caller" });
  if (!n.admitted)
    return (
      Ma().inbound.sendPeerReceipt?.(e, "dropped", { dropReason: n.reason, droppedMsgIds: [] }),
      !1
    );
  return (Ma().inbound.recordCorrespondent?.(e), !0);
}
function R(e, n) {
  let o = Ma().inbound;
  switch ((PIt(), n.policy)) {
    case "accept":
      return (A("policy-accepts"), g("peer_inbound_gate"), "accept");
    case "refuse":
      return (
        lIe(
          n.refuseCause === "kill-switch" ? m(e) : `crossSessionInbound=refuse: ${m(e)}`,
          n.refuseCause
        ),
        o.sendPeerReceipt?.(e, "refused"),
        "refused"
      );
    case "hold": {
      let { holdCause: s } = n;
      if (o.shuttingDown)
        return (
          t(
            `[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${m(e)}`
          ),
          o.sendPeerReceipt?.(e, "expired"),
          f("peer_inbound_gate", "shutdown_expired"),
          "refused"
        );
      if (o.held.length >= Q) {
        let i = o.held.shift();
        if (i)
          (t(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${m(i)}`),
            o.sendPeerReceipt?.(i, "expired"),
            o.onPeerHoldDropped?.(i, "expired"));
      }
      if (
        (o.held.push(e),
        x(),
        t(
          `[cross-session-inbound] held inbound peer message (${o.held.length} held, cause=${s}): ${m(e)}`
        ),
        f("peer_inbound_gate", "held"),
        o.onPeerHeld)
      )
        (o.onPeerHeld(e, o.held.length, s), o.announced.set(e, s));
      return (o.sendPeerReceipt?.(e, "held"), "held");
    }
  }
}
function LXt(e) {
  if (!e) return "ungated";
  if (e.kind === "peer")
    return "hostInjected" in e && e.hostInjected === !0 ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message")
    return "coordinator";
  return "ungated";
}
function Ydt({ ingressOrigin: e, inboundOrigin: n, envelopePeer: o = !1 }) {
  return o || (LXt(e) !== "ungated" && !B(e)) || n === W_e;
}
function B(e) {
  return (
    !!e &&
    e.kind === "peer" &&
    !("hostInjected" in e && e.hostInjected === !0) &&
    "inbound_origin" in e &&
    e.inbound_origin === N0e
  );
}
function OIt(e, n) {
  switch (LXt(e)) {
    case "peer":
      return HXt(n);
    case "host-injected":
      return $lo(n);
    case "coordinator":
      return G(n);
    case "ungated":
      return "accept";
  }
}
function Xdt(e) {
  switch (LXt(e)) {
    case "peer":
      return MIt();
    case "coordinator":
    case "host-injected":
      return qdt() === "refuse" ? "opt-out" : void 0;
    case "ungated":
      return;
  }
}
function MIt() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}
function j() {
  let e = qdt();
  return e !== void 0 ? h(e) : { policy: "accept" };
}
function G(e) {
  let n = qdt();
  if (n === void 0) return "accept";
  return R(e, h(n));
}
function $lo(e) {
  return R(e, _(b(e)));
}
function lIe(e, n) {
  if ((PIt(), n === "kill-switch")) {
    (t(
      `[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`
    ),
      f("peer_inbound_gate", "kill_switch"));
    return;
  }
  (t(`[cross-session-inbound] refused inbound peer message (${e})`),
    f("peer_inbound_gate", "refused"));
}
function dIe(e) {
  return (PIt(), A(e));
}
function M(e) {
  switch (LXt(e.origin)) {
    case "coordinator":
      return j();
    case "host-injected":
      return _(b(e));
    case "peer":
    case "ungated":
      return S(b(e));
  }
}
function A(e) {
  let n = Ma().inbound,
    o = n.held;
  if (o.length === 0) return 0;
  let s = [],
    i = [],
    a = [],
    u = 0,
    y = 0;
  for (let r of o) {
    let l = M(r);
    if (l.policy === "accept") i.push(r);
    else if (l.policy === "refuse") {
      if (((u += 1), l.refuseCause === "kill-switch")) y += 1;
      (n.sendPeerReceipt?.(r, "refused"), n.onPeerHoldDropped?.(r, "refused"));
    } else if ((s.push(r), n.announced.get(r) !== l.holdCause)) a.push([r, l.holdCause]);
  }
  ((o.length = 0), o.push(...s));
  for (let [r, l] of a) (n.announced.set(r, l), n.onPeerHeld?.(r, o.length, l));
  if (u > 0)
    t(
      y === u
        ? `[cross-session-inbound] gate off \u2014 dropped ${u} parked peer message(s) (cross-session messaging disabled)`
        : `[cross-session-inbound] dropped ${u} held peer message(s) \u2014 policy is now refuse`
    );
  if (i.length === 0) return 0;
  let c = [];
  for (let r of i)
    if (D(r)) (c.push(r), g("peer_inbound_gate"));
    else n.onPeerHoldDropped?.(r, "dropped");
  if (
    (t(
      `[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${c.length} admitted by the ingress guard; ${o.length} still held`
    ),
    c.length > 0)
  )
    n.onPeerHoldReleased?.(c, e);
  for (let r of c) n.sendPeerReceipt?.(r, "delivered");
  return i.length;
}
function DIt(e, n) {
  let o = Ma().inbound,
    s = o.held.indexOf(e);
  if (s === -1) return "gone";
  let [i] = o.held.splice(s, 1);
  if (!i) return "gone";
  if (n === "approve") {
    let u = M(i);
    if (u.policy === "refuse") {
      let c = u.refuseCause === "kill-switch";
      return (
        t(
          `[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) \u2014 dropped`
        ),
        o.sendPeerReceipt?.(i, "refused"),
        o.onPeerHoldDropped?.(i, "refused"),
        "dropped"
      );
    }
    if (!D(i))
      return (
        t(
          "[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"
        ),
        o.onPeerHoldDropped?.(i, "dropped"),
        "dropped-by-guard"
      );
    return (
      t("[cross-session-inbound] held peer message APPROVED \u2014 released to queue"),
      g("peer_inbound_gate"),
      o.onPeerHoldReleased?.([i], "approved"),
      o.sendPeerReceipt?.(i, "delivered"),
      "delivered"
    );
  }
  t(
    `[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`
  );
  let a = n === "deny" ? "denied" : "expired";
  return (o.sendPeerReceipt?.(i, a), "dropped");
}
function u_s() {
  return Ma().inbound.held;
}
function HIt() {
  return Ma().inbound.held.length;
}
function Flo() {
  return Ma().inbound.shuttingDown;
}
function m(e) {
  let n =
      e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown",
    o = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${ey(n)} "${ey(o, 60)}"`;
}
export {
  xIt,
  PXt,
  IXt,
  Mlo,
  c_s,
  Vdt,
  PIt,
  Dlo,
  OXt,
  Hlo,
  MXt,
  DXt,
  qdt,
  IIt,
  NUe,
  Llo,
  Nlo,
  HXt,
  LXt,
  Ydt,
  OIt,
  Xdt,
  MIt,
  $lo,
  lIe,
  dIe,
  DIt,
  u_s,
  HIt,
  Flo
};

//# sourceMappingURL=chunk-9rqkgbsc.js.map
