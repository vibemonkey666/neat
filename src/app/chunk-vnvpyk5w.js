// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L } from "./chunk-wrtp8qz8.js";
import { _ } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { Bn, dn } from "./chunk-9z5ybxhe.js";
import { ra } from "./chunk-ajtyjx88.js";
import { at, qt, Be } from "./chunk-at88wjsn.js";
import { qe } from "./chunk-0np0053t.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { o, v, T, Ue } from "./chunk-0bqrj5ah.js";
import { createHash as u } from "crypto";
var zit = "anthropic/returnToolOutput",
  zcr = [2],
  Gis = 4194304;
function pQr() {
  return !0;
}
function QAn(e) {
  return mn(e) && e.tool_host_interface !== void 0;
}
var d = 64;
var l = 1024,
  a = 1024,
  c = 65536,
  i = p(() => T(v().int()).max(d)),
  y = p(() =>
    T(o().min(1).max(a))
      .max(l)
      .refine((e) => e.reduce((n, t) => n + t.length, 0) <= c)
  ),
  f = p(() => Ue({ versions: i(), deny_rules_digest: o().regex(/^[0-9a-f]{64}$/) }));
function zis(e) {
  let n = s(e)?.[zit];
  if (n === void 0) return { kind: "absent" };
  let t = i().safeParse(s(n)?.versions);
  if (!t.success) return { kind: "malformed" };
  if (m(t.data).length === 0) return { kind: "no_shared_version", versions: t.data };
  let r = f().safeParse(n);
  return r.success
    ? { kind: "requested", denyRulesDigest: r.data.deny_rules_digest }
    : { kind: "malformed" };
}
function m(e) {
  return zcr.filter((n) => e.includes(n));
}
var O = { [Be]: [qe, at], [at]: [qe], [qt]: [at, qe], [ra]: [at, qe] },
  g = L([Be, ...Object.values(O).flat()]);
function mQr(e) {
  return L(
    e
      .map(Bn)
      .filter(({ toolName: n, ruleContent: t }) => t !== void 0 && g.includes(n))
      .map(dn)
  ).toSorted();
}
function gQr(e) {
  return y().safeParse(e).success;
}
function Kis(e) {
  return u("sha256").update(_(e)).digest("hex");
}
function Vis({ tools: e, denyRules: n }) {
  return { versions: [...zcr], tools: [...e], deny_rules: mQr(n) };
}
function s(e) {
  return mn(e) ? e : void 0;
}
export { zit, zcr, Gis, pQr, QAn, zis, mQr, gQr, Kis, Vis };

//# sourceMappingURL=chunk-vnvpyk5w.js.map
