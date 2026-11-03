// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt } from "./chunk-wrtp8qz8.js";
import { N } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { qZo } from "./chunk-4nzy53ma.js";
import { aT, Ear } from "./chunk-tcvjb2c0.js";
class n {
  active = void 0;
  transportPersists = void 0;
  hostedWorker = !1;
  hostOwnedLocalStdin = !1;
  setActive(r) {
    ((this.active = r),
      (this.transportPersists = r?.persistsOutboundFrames),
      (this.hostedWorker = r?.isHostedWorker === !0),
      (this.hostOwnedLocalStdin = !1));
  }
  remoteBridgeLive = null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive();
  }
  markLocalTransport() {
    this.transportPersists = !1;
  }
  markHeadlessStart(r) {
    this.hostOwnedLocalStdin = !r.sdkUrl && r.readsProcessStdin && !qZo();
  }
}
var db = new nt(() => new n());
function Lf(r) {
  return Ear({ hostedWorker: ccn(r), transportPersists: db.of(r).transportPersists });
}
function YDe(r) {
  return ccn(r) || db.of(r).transportPersists !== !1;
}
function O2s(r) {
  let e = db.of(r);
  return e.hostOwnedLocalStdin && e.transportPersists === !1 && !ccn(r) && !qZo();
}
function M2s(r) {
  return aT() && db.of(r).transportPersists === !0;
}
function ccn(r) {
  return r.host.launchOptions.diskless() || db.of(r).hostedWorker;
}
function eo(r) {
  return Lf(r) || db.of(r).bridgeMayBeLive();
}
function MLo(r, e) {
  return Lf(r) ? DLo(e) : e;
}
function DLo(r) {
  return r.map((e) => ({ name: e.name, status: e.status }));
}
function HLo(r, e) {
  return Lf(r) ? [] : e;
}
function P$r(r, e, s, i = "last") {
  try {
    if (!Lf(r)) return i === "first" ? [e, ...s] : [...s, e];
    for (let o of s) t(`error_during_execution detail: ${o}`, { level: "error" });
    return [e];
  } catch (o) {
    return (l(N(o)), [e]);
  }
}
function sre(r, e, s) {
  return Lf(r) ? s : e;
}
export { db, Lf, YDe, O2s, M2s, ccn, eo, MLo, DLo, HLo, P$r, sre };

//# sourceMappingURL=chunk-bxamkenk.js.map
