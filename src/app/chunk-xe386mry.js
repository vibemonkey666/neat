// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { sFe, ke, ci, mk, yit, BM, Pn, uAn } from "./chunk-wrtp8qz8.js";
import { In } from "./chunk-h5gbmqm1.js";
import { AsyncLocalStorage as m } from "async_hooks";
var i = {
  ccr: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !0,
    fanout: !0,
    presence: !0,
    catchupReplay: !0,
    bashExec: !0,
    fileRead: !0,
    sendNow: !0
  },
  ssh: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !0,
    sendNow: !1
  },
  direct: {
    controlChannel: !1,
    modelCatalog: !1,
    setPermissionMode: !1,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !1,
    sendNow: !1
  }
};
var e9r = { isRemoteMode: !1 };
function tr() {
  return BM().remote;
}
var Elr = "Stopped waiting for the remote \u2014 the command may still complete there";
function Pt() {
  return Pn() || tr() !== null;
}
function Txe(e, o) {
  return Pt() ? o : e;
}
function ll() {
  return WZo(tr());
}
function WZo(e) {
  return e?.caps?.controlChannel === !0 && !e.viewerOnly;
}
function klr() {
  return !1;
}
function bA(e) {
  return tr()?.caps?.[e] === !0;
}
function t9r(e, o) {
  return o && !(e.isRemoteMode && e.viewerOnly);
}
function c(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function n9r(e, o, a, u, s = !1) {
  if (!o.isRemoteMode) return e9r;
  return {
    kind: e,
    isRemoteMode: !0,
    viewerOnly: a,
    caps: i[e],
    sessionId: u,
    ...(s && { consoleProfileBearer: s }),
    sendMessage: o.sendMessage,
    cancelRequest: o.cancelRequest,
    cancelHeldMessages: o.cancelHeldMessages ?? (() => !1),
    sendQueuedNow: o.sendQueuedNow ?? (() => Promise.resolve("failed")),
    workerSendsNow: o.workerSendsNow ?? (() => !1),
    serviceTimeMs:
      o.serviceTimeMs ??
      (() => {
        return;
      }),
    holdsSends: o.holdsSends ?? (() => !1),
    disconnect: o.disconnect,
    sendControlRequest: o.sendControlRequest ?? (() => c(e)),
    ...!1
  };
}
var n = new m();
function yg(e, o) {
  return n.run({ cwd: In(e) }, o);
}
function Gst(e) {
  let o = d();
  return o === void 0 ? n.exit(e) : n.run(o, e);
}
function _fi() {
  let e = t();
  return e?.call === void 0 ? void 0 : e.cwd;
}
function bfi(e) {
  return Pt() ? e() : n.exit(e);
}
function Ckn(e, o) {
  return yg(e ?? fe(), o);
}
function Rkn(e, o) {
  return e === null ? o() : Ckn(e.cwd, o);
}
function vB() {
  return d() !== void 0;
}
function xkn(e) {
  let o = t();
  while (o?.call !== void 0) ((o.cwd = In(e)), (o = r(o.call.outer)));
  if (o) o.cwd = In(e);
  else yit(e);
}
function Pkn() {
  return t()?.cwd ?? mk();
}
function Pl() {
  if (t()?.cwd === void 0 && ci() === null) return null;
  return fe();
}
function fe() {
  try {
    return Pkn();
  } catch (e) {
    if (sFe(e) && ci() === null) throw e;
    return ke();
  }
}
function r9r() {
  return !vB() && Pt() ? void 0 : fe();
}
function zst(e) {
  return uAn() ?? e;
}
function l(e) {
  return vB() ? e : zst(e);
}
function Tlr() {
  return l(fe());
}
function Sfi() {
  try {
    let e = Pl();
    return e === null ? null : l(e);
  } catch {
    return null;
  }
}
function r(e) {
  let o = e;
  while (o?.call?.isOver === !0) o = o.call.outer;
  return o;
}
function t() {
  return r(n.getStore());
}
function d() {
  let e = t();
  while (e?.call !== void 0) e = r(e.call.outer);
  return e;
}
export {
  e9r,
  tr,
  Elr,
  Pt,
  Txe,
  ll,
  WZo,
  klr,
  bA,
  t9r,
  n9r,
  yg,
  Gst,
  _fi,
  bfi,
  Ckn,
  Rkn,
  vB,
  xkn,
  Pkn,
  Pl,
  fe,
  r9r,
  zst,
  Tlr,
  Sfi
};

//# sourceMappingURL=chunk-xe386mry.js.map
