// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { H } from "./chunk-p8tprgqa.js";
function Tvt(r, o = "aborted") {
  let { reason: t } = r;
  return t instanceof Error ? t.message : t === void 0 ? o : String(t);
}
var vSi = (r) => `the answer is not plain data: ${r}`;
class He extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}
function Lyn(r, o) {
  if (!H(r))
    throw new He(
      `${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`
    );
  return r;
}
function oqo(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0;
}
var gei = (r) =>
  typeof r === "object" &&
  r !== null &&
  "aborted" in r &&
  typeof r.addEventListener === "function" &&
  typeof r.removeEventListener === "function";
var r2t = (r) => `next() argument is not plain data: ${r}`;
var XKr = (r, o) => `${r}: arguments are not plain data: ${o}`;
class x_e extends He {}
var hei = (r) => r.reason instanceof x_e;
var sqo = (r, o) => (o === !0 ? new x_e(r) : new He(r));
var jer = (r) => (r.reason instanceof x_e ? { isSettled: !0 } : {});
var ESi = (r) => (r instanceof x_e ? new He(r.message) : r);
var e = new WeakMap();
function Wer(r, o) {
  if (typeof r === "object" && r !== null) e.set(r, o);
  return r;
}
var iqo = (r) => (typeof r === "object" && r !== null ? e.get(r) : void 0);
class JKr extends He {
  asked;
  constructor(r, o) {
    super(r);
    this.asked = o;
  }
}
var n = new WeakSet();
var QKr = (r) => typeof r === "object" && r !== null && n.has(r);
function Ger(r) {
  if (typeof r === "object" && r !== null) n.add(r);
  return r;
}
function p() {
  let r = new WeakMap();
  return {
    mark(o, t) {
      if (typeof o === "object" && o !== null && t !== void 0) r.set(o, t);
      return o;
    },
    of(o) {
      return typeof o === "object" && o !== null ? r.get(o) : void 0;
    }
  };
}
var s = p();
var Avt = (r, o) => s.mark(r, o);
var CCe = (r) => new He(`${r}: its environment was unloaded`);
var zer = (r, o, t) => ({ plugin: r, op: o, message: t });
function kSi(r, o) {
  let t = CCe(r);
  return Avt(t, zer(r, o, t.message));
}
var Ker = (r) => s.of(r);
export {
  Tvt,
  vSi,
  He,
  Lyn,
  oqo,
  gei,
  r2t,
  XKr,
  x_e,
  hei,
  sqo,
  jer,
  ESi,
  Wer,
  iqo,
  JKr,
  QKr,
  Ger,
  Avt,
  CCe,
  zer,
  kSi,
  Ker
};

//# sourceMappingURL=chunk-1hp0t8kv.js.map
