// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { drs, crs, LSe, FM } from "./chunk-wrtp8qz8.js";
import { xAn } from "./chunk-qq3ygwcj.js";
import { Yn, Rc, xC, Qi, Vp } from "./chunk-h5gbmqm1.js";
import { i } from "./chunk-cj37hmns.js";
import { tF } from "./chunk-4nzy53ma.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { isAbsolute as u } from "path";
function a4t(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let r = Vp(e.slice(0, 3));
  if (r == null || !Yn(r)) return [];
  let n = Vp(e);
  if (n == null || !Yn(n)) return [];
  let t = xC(r),
    o = xC(n);
  if (t == null || o == null || t !== o) return [];
  return [e, n];
}
function nr() {
  return i.CLAUDE_CODE_REMOTE === !0 && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function Gg() {
  return i.CLAUDE_CODE_REMOTE === !0 && i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc";
}
function vM() {
  return nr() || Gg();
}
function pEn() {
  return Gg() && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
function gci(e) {
  return pEn() && e === void 0 ? ["memory"] : void 0;
}
function hci(e, r) {
  return !(
    e &&
    pEn() &&
    Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) &&
    !i.CLAUDE_CODE_DISABLE_WORKING_SYNC
  )
    ? "not_admitted"
    : r === xAn
      ? "admitted"
      : "moved_directory";
}
function $Z() {
  return Gg() && drs();
}
function dAt() {
  return xAn;
}
var s = ve(new Map(), (e) => e.clear()),
  d = 60000;
function mEn(e) {
  let r = s.get(e);
  if (r !== void 0 && (r.share !== void 0 || Date.now() - r.askedAt < d)) return r.share ?? e;
  let n = a4t(e)[1];
  return (s.set(e, { share: n, askedAt: Date.now() }), n ?? e);
}
function l4t(e, r) {
  return u(e) && !Rc(e) && !Qi(e, r);
}
function yci() {
  return Gg() && crs();
}
function aT() {
  return i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
}
function S$e() {
  return aT() && !tF();
}
function Ear(e) {
  return e.hostedWorker || (aT() && e.transportPersists !== !1);
}
function s2() {
  return i.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
function EM() {
  return pEn() && s2();
}
function QQo() {
  return EM() ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_SESSION_INGRESS_TOKEN_FILE"] : [];
}
function _ci(e, r) {
  if (!EM()) return !1;
  if (e === "CLAUDE_CODE_SESSION_ACCESS_TOKEN") {
    if (r !== "") LSe(r);
    return !0;
  }
  if (e === "CLAUDE_CODE_OAUTH_TOKEN") {
    if (r !== "") FM(r);
    return !0;
  }
  return !1;
}
export { a4t, nr, Gg, vM, pEn, gci, hci, $Z, dAt, mEn, l4t, yci, aT, S$e, Ear, s2, EM, QQo, _ci };

//# sourceMappingURL=chunk-tcvjb2c0.js.map
