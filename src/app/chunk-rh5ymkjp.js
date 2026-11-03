// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Gst } from "./chunk-xe386mry.js";
class r {
  #e = new Set();
  #n = new Map();
  lastBellAt = 0;
  claim(e) {
    if (this.#e.has(e)) return !1;
    return (this.#e.add(e), !0);
  }
  has(e) {
    return this.#e.has(e);
  }
  claimIfChanged(e, n) {
    if (this.#n.get(e) === n) return !1;
    return (this.#n.set(e, n), !0);
  }
}
var zV = new W(() => new r());
function qi() {
  return zV.of(U().host);
}
import { AsyncLocalStorage as o } from "async_hooks";
var Bue = "cron",
  t = new o();
function Zrr() {
  return t.getStore()?.workload;
}
function f6o() {
  return t.getStore()?.scheduledByPlugin;
}
function ekt(e) {
  return e?.hookCaller !== void 0 && !e.hookServesModel ? e.hookCaller : f6o();
}
function csi() {
  let e = t.getStore();
  if (e !== void 0) e.scheduledByPlugin = void 0;
}
function usi(e, n) {
  return rSn({ workload: e, scheduledByPlugin: void 0 }, n);
}
function rSn(e, n) {
  return t.run(e, () => Gst(n));
}
export { zV, qi, Bue, Zrr, f6o, ekt, csi, usi, rSn };

//# sourceMappingURL=chunk-rh5ymkjp.js.map
