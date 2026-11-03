// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Lti, ul, Ai, kn, k, Wn } from "./chunk-ajtyjx88.js";
import { N } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { iy, Ifi, Qm } from "./chunk-4nzy53ma.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { eSn } from "./chunk-at88wjsn.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { F9e, wCr } from "./chunk-mam24wdr.js";
import { AYs } from "./chunk-645q4bx1.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { IS } from "./chunk-yx1anek5.js";
import { Wv } from "./chunk-6h7ejyet.js";
import { Ade } from "./chunk-tsf65jkw.js";
import { fx } from "./chunk-taha171j.js";
import { Dio, Nhs, Hio } from "./chunk-wybpgt3b.js";
import { X6e } from "./chunk-9t9m4g61.js";
import { Ni } from "./chunk-e36t8chg.js";
import { DS } from "./chunk-y609bddh.js";
function Jyr() {
  return Qm() && !k("tengu_melodic_ember", !0);
}
function Ehs(e, r) {
  if (!Qm()) return () => {};
  let o = e();
  return ul(() => {
    let t = e(),
      n = o && !t;
    if (((o = t), n)) r();
  });
}
var R = "tengu_ccr_sdk_mcp_remote_manifests";
function GMn() {
  return Wn("tengu_sdk_mcp_manifests", !0);
}
var f = "sdk_mcp_tools_list_changed",
  T = "sdk_mcp_manifests";
function khs(e) {
  if (!k("tengu_sdk_mcp_manifests", !0)) return [];
  return e?.isRemoteTransport() !== !0 || (F9e(e.sessionWriters()) && m()) ? [f, T] : [f];
}
function Ths(e) {
  return e.includes("sdkMcpServerManifests") ? c(e, 0) : void 0;
}
var d = ["payload", "request", "sdkMcpServerManifests"];
function c(e, r) {
  return AYs(e, (o, t) => {
    if (o !== d[r]) return t;
    return r === d.length - 1 ? "{}" : (c(t, r + 1) ?? t);
  });
}
function m() {
  return k(R, !1);
}
var s = 300000,
  Rdt = 300000;
function g({ origin: e, frameCreatedAt: r, sessionWriters: o, now: t = Date.now() }) {
  if (e !== "host_per_send") return "no_origin_marker";
  let n = wCr({
    frameCreatedAt: r,
    sessionWriters: o,
    maxFrameAgeMs: s,
    maxStatementAgeMs: Rdt,
    now: t
  });
  if (n !== void 0) return n;
  return;
}
async function Ahs(e) {
  let r = g(e);
  if (r !== void 0) return r;
  if (m()) return;
  return (await Pe(
    Ai().catch(() => null),
    0
  )) !== void 0
    ? "flag_off"
    : "flag_unsettled";
}
var S = !1;
function F() {
  let e = Lo(),
    r = kn(Lti, S);
  return ((e.servedOnFacts ??= r.value === !0 && r.source === "payload"), e.servedOnFacts);
}
var x = "ui_",
  _ = "ui_detach",
  E = "remote_cowork",
  b = new Set([E, "remote_mobile"]),
  a = "vscode";
function zMn(e) {
  let r = iy();
  return (
    !e.redactsWhatItPersists &&
    (!e.isRemoteTransport ||
      (nr() &&
        Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) &&
        (b.has(r ?? "") || (Ifi.has(r ?? "") && F()))))
  );
}
function u() {
  return IS() && !Jyr();
}
function lae(e) {
  return u() && zMn(e) && (!e.isRemoteTransport || F9e(e.sessionWriters));
}
function Chs(e, r) {
  return e.isRemoteTransport && !r && u() && zMn(e);
}
function Aio() {
  return k("tengu_calm_osprey", !0);
}
function xdt(e) {
  return typeof e === "string" && e.startsWith(x);
}
function Rhs(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (r) {
    return (l(N(r)), !0);
  }
}
function KMn(e, r) {
  return wCr({
    frameCreatedAt: e.createdAt,
    sessionWriters: e.sessionWriters,
    maxFrameAgeMs: s,
    maxStatementAgeMs: Rdt,
    now: r
  });
}
function VMn(e, r, o = Date.now) {
  if (!xdt(e)) return !1;
  try {
    let t = r(),
      n =
        !t.isRemoteTransport ||
        ((t.isAtFloor || (t.leavesBelowFloor && e === _)) && KMn(t, o()) === void 0),
      M = e === _ && t.isAnySurfaceAttached;
    return !(zMn(t) && n && (M || u()));
  } catch (t) {
    return (l(N(t)), !0);
  }
}
function xhs(e, r) {
  return e.isRemoteTransport && r && IS() && !F9e(e.sessionWriters);
}
function W() {
  try {
    return Ni(
      "prompt.submit",
      void 0,
      Ie().loadedModules.filter((e) => !DS(e))
    );
  } catch (e) {
    return (l(N(e)), !0);
  }
}
function Cio() {
  return W() || fx() || X6e();
}
function Rio() {
  return Cio() || !A();
}
function A() {
  let e = Ie();
  return (
    !e.hookRegistrationOwed &&
    e.hookRegistrationInFlight === void 0 &&
    e.hooksUnknownCause === void 0 &&
    !Ade()
  );
}
function Qyr(e) {
  try {
    let r = e();
    if (!(lae(r) && (!r.isRemoteTransport || iy() === E))) return [];
    return Rio() ? [Dio, Nhs] : [Dio];
  } catch (r) {
    return (l(r), []);
  }
}
function xio(e, r) {
  return Ni(Wv, r === a ? { component: e, surface: r } : { component: e });
}
function Phs(e) {
  return e === a ? Ie().hookRegistrationInFlight?.catch(() => {}) : void 0;
}
function Zyr(e) {
  try {
    if (!Qm() || !lae(e()) || !A()) return [];
    return [
      Hio,
      ...eSn()
        .options.filter((r) => xio(r, a))
        .map((r) => `${Hio}:${r}`)
    ];
  } catch (r) {
    return (l(N(r)), []);
  }
}
export {
  Jyr,
  Ehs,
  GMn,
  khs,
  Ths,
  Rdt,
  Ahs,
  zMn,
  lae,
  Chs,
  Aio,
  xdt,
  Rhs,
  KMn,
  VMn,
  xhs,
  Cio,
  Rio,
  Qyr,
  xio,
  Phs,
  Zyr
};

//# sourceMappingURL=chunk-gwrs245d.js.map
