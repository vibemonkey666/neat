// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { fie } from "./chunk-jazcqqqr.js";
import { ye } from "./chunk-wrtp8qz8.js";
import { ZT } from "./chunk-3eqwf73w.js";
import { Cs } from "./chunk-ajtyjx88.js";
import { OM } from "./chunk-4nzy53ma.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { pe } from "./chunk-7c3thgax.js";
import { OZ, pq, mq, gq, dEn, qS } from "./chunk-7zgz07kc.js";
import { xyr } from "./chunk-2af27mew.js";
import { Gqn } from "./chunk-9gwe1sht.js";
import { OJt } from "./chunk-rxapccxm.js";
import { yct } from "./chunk-acspzcxd.js";
import { $r } from "./chunk-a2y39866.js";
var tio = {};
$r(tio, {
  default: () => tio,
  earlyCredentialsOf: () => Xso,
  hostProxyAuthConfigured: () => Qso,
  personProxyAuthHelper: () => Jso,
  proxyAgentsInstalled: () => Zso,
  sessionFactsRestored: () => Adt,
  signInRestored: () => eio
});
function Xso(e) {
  return e?.backend !== void 0 && fie(e.configHome) ? ZT(e?.backend) : void 0;
}
function Jso() {
  let e = pe("policySettings")?.proxyAuthHelper,
    r = Qt("userSettings") ? pe("userSettings")?.proxyAuthHelper : void 0;
  return {
    helper: e ?? r,
    fromProjectOrLocal:
      e === void 0 &&
      r !== void 0 &&
      (pe("projectSettings")?.proxyAuthHelper === r || pe("localSettings")?.proxyAuthHelper === r),
    trustAccepted: Cs,
    sources: "personAndPolicy"
  };
}
var s = `a proxy helper set by this project is not run by this command
`;
function Qso() {
  let e = OM(),
    t =
      e &&
      Boolean(process.stderr.isTTY) &&
      (pe("projectSettings")?.proxyAuthHelper !== void 0 ||
        pe("localSettings")?.proxyAuthHelper !== void 0);
  if (e) dEn(Jso());
  if (t) process.stderr.write(s);
}
var p = "Error: the proxy setting named above is refused.";
function Zso() {
  let e = mq(),
    t = e !== void 0 && !gq(e.value);
  return (qS(), t ? { reason: p, kind: "lasting" } : null);
}
function eio(e) {
  let t = Boolean(process.stderr.isTTY) || !ye();
  return OJt(Xso(e), () => t);
}
async function Adt(e) {
  let t = await Promise.resolve()
      .then(yct)
      .then(() => Promise.all([OZ(), pq()]))
      .then(Gqn)
      .then(Qso)
      .then(() => eio(e))
      .then(() => null, xyr),
    r = await Promise.resolve().then(Zso).catch(xyr);
  return t ?? r;
}
export { Xso, Jso, Qso, Zso, eio, Adt, tio };

//# sourceMappingURL=chunk-qmxzzq9n.js.map
