// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import { f } from "./chunk-brszmkb3.js";
class qEs {
  state = { status: "inactive" };
  fallbackSadEmitted = new Set();
  toolsBaseline = { captured: !1 };
  relayThinkingStripOwed = !1;
  lastDispatchRelayed = !1;
  lastDispatchFallback = void 0;
  openBootVerdict = void 0;
  bootSettled = !1;
  handoffMarkerStep = void 0;
  enableStubsCalled = new Map();
  chromeSwitchedOn = void 0;
  forkDirectLines = new Set();
  relayRefusedGzip = !1;
}
var nhi = new nt(() => new qEs());
function n() {
  return nhi.of(U());
}
function dD() {
  return n().state;
}
function Ipo(e) {
  let r = n();
  if (r.state.status !== "inactive") return;
  ((r.state = e), (r.relayThinkingStripOwed = !1));
}
function pBe(e, r, o) {
  let a = n();
  if (a.state.status === "reverted") return;
  if (a.state.status === "active") {
    if (e === "device_tool_requested" || e === "device_tool_request_repeated")
      Y("info", "cli_teleport_relay_ended", { reason: e });
    else if (e !== "direct_served") (f("upgrade_teleport_cache", e), l(e));
    if (e !== "direct_served") s(r, e);
    a.relayThinkingStripOwed = !0;
  }
  a.state = { status: "reverted", reason: e, detail: o };
}
function Opo(e, r) {
  let o = n().enableStubsCalled;
  if (!o.has(e)) return (o.set(e, r), "not_repeat");
  return !!r && r === o.get(e) ? "not_repeat" : "repeat";
}
function VTi(e) {
  n().chromeSwitchedOn = e;
}
function Mpo() {
  return n().chromeSwitchedOn;
}
var i = new WeakMap();
function Dpo(e, r) {
  i.set(e, r);
}
function qTi(e) {
  let r = n();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && i.has(e.fetch) ? "keep" : "strip";
}
function YTi(e) {
  return n().state.status === "active" && e !== void 0 && i.get(e) === "main";
}
function Hpo(e) {
  n().openBootVerdict = e;
}
function Q0n() {
  return n().openBootVerdict !== void 0;
}
function hvr() {
  n().bootSettled = !0;
}
function XTi() {
  return !n().bootSettled || dD().status === "active" || Q0n();
}
function Z0n() {
  let e = n(),
    r = e.openBootVerdict;
  return ((e.openBootVerdict = void 0), r);
}
function J3e(e) {
  n().handoffMarkerStep = e;
}
function Lpo() {
  let e = n(),
    r = e.handoffMarkerStep;
  return ((e.handoffMarkerStep = void 0), r);
}
function QQt() {
  let e = Z0n();
  if (e === void 0) return;
  (f("upgrade_teleport_cache", e),
    Y("warn", "cli_teleport_arm_verdict", { outcome: "refused", error_code: e }),
    t(`prompt-cache relay stays off: boot had no marker (${e}) and no hand-off armed it`));
}
function Npo() {
  n().relayThinkingStripOwed = !0;
}
function $po() {
  return n().relayThinkingStripOwed;
}
function Fpo() {
  return !n().relayRefusedGzip;
}
function Upo() {
  let e = n();
  if (e.relayRefusedGzip) return;
  ((e.relayRefusedGzip = !0), Y("warn", "cli_teleport_relay_gzip_refused"));
}
function Bpo(e) {
  let r = n();
  ((r.lastDispatchRelayed = e), (r.lastDispatchFallback = void 0));
}
function jpo(e, r) {
  n().lastDispatchFallback = { cause: e, httpStatus: r };
}
function JTi() {
  return n().lastDispatchFallback;
}
function QTi() {
  let e = n();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed;
}
function ZTi(e) {
  let r = n();
  if (!r.relayThinkingStripOwed) return;
  ((r.relayThinkingStripOwed = !1),
    Y("info", "cli_teleport_relay_thinking_settled", { outcome: e }));
}
function Wpo(e) {
  let r = n();
  if (r.fallbackSadEmitted.has(e)) return;
  (r.fallbackSadEmitted.add(e), f("upgrade_teleport_cache", e), l(e));
}
function Gpo(e, r) {
  if (n().state.status !== "active") return;
  (l("direct_served", e), s(r, `direct_served_${e}`), pBe("direct_served", r, e));
}
function zpo(e, r) {
  let o = n();
  if (o.state.status !== "active") return;
  let a = e.at(-1);
  if (a !== void 0) o.forkDirectLines.add(a);
  f("upgrade_relay_fork_direct", r);
}
function Kpo(e) {
  let r = n().forkDirectLines;
  return r.size > 0 && e.some((o) => r.has(o));
}
function s(e, r) {
  f("upgrade_relay_end", `${e}_${r}`);
}
function l(e, r) {
  Y("warn", "cli_teleport_relay_fallback", { reason: e, ...(r !== void 0 && { cause: r }) });
}
function Vpo(e) {
  let r = d(e);
  if (r === void 0) return dD().status === "active";
  return (pBe("context_reduced", "main", r), !1);
}
function qpo(e) {
  return dD().status === "active" && d(e) === void 0;
}
function d(e) {
  let r = dD();
  if (r.status !== "active") return;
  let o = r.preAnchorLineUuids;
  if (e.length < o.length)
    return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${o.length}`;
  for (let a = 0; a < o.length; a++)
    if (e[a] !== o[a]) return `pre-anchor line ${a} changed since arm`;
  return;
}
function Ypo(e, r) {
  let o = n();
  if (o.state.status !== "active") return !1;
  let a = o.toolsBaseline;
  if (!a.captured) return ((o.toolsBaseline = { captured: !0, model: e, fingerprint: r }), !0);
  if (e !== a.model) return !1;
  if (a.fingerprint === r) return !0;
  return (
    pBe(
      "tools_changed",
      "main",
      a.fingerprint === null
        ? "session gained a toolset after a toolless first relay-attempted dispatch"
        : r === null
          ? "session lost its toolset after a tooled first relay-attempted dispatch"
          : "outgoing toolset diverged from the first relay-attempted dispatch baseline"
    ),
    !1
  );
}
function Xpo(e, r) {
  let o = n();
  if (o.state.status !== "active") return "not_comparable";
  let a = o.toolsBaseline;
  if (!a.captured) return "intact";
  if (e !== a.model) return "not_comparable";
  return a.fingerprint === r ? "intact" : "changed";
}
export {
  qEs,
  nhi,
  dD,
  Ipo,
  pBe,
  Opo,
  VTi,
  Mpo,
  Dpo,
  qTi,
  YTi,
  Hpo,
  Q0n,
  hvr,
  XTi,
  Z0n,
  J3e,
  Lpo,
  QQt,
  Npo,
  $po,
  Fpo,
  Upo,
  Bpo,
  jpo,
  JTi,
  QTi,
  ZTi,
  Wpo,
  Gpo,
  zpo,
  Kpo,
  Vpo,
  qpo,
  Ypo,
  Xpo
};

//# sourceMappingURL=chunk-059bw7pf.js.map
