// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { L, U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
var n = new Set(["hipaa"]);
class o {
  latched = new Set();
  latchedTaints = [];
  taints = [];
  current = [];
  changed = De();
  verdict = void 0;
  replaceTaints(e) {
    this.current = L(e).sort();
    for (let r of e) if (n.has(r)) this.latched.add(r);
    if (this.latched.size !== this.latchedTaints.length)
      this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints();
  }
  latchTaints(e) {
    let r = !1;
    for (let i of e) if (n.has(i) && !this.latched.has(i)) (this.latched.add(i), (r = !0));
    if (!r) return !1;
    return ((this.latchedTaints = Array.from(this.latched).sort()), this.refreshEffectiveTaints());
  }
  refreshEffectiveTaints() {
    let e = L([...this.latchedTaints, ...this.current]).sort();
    if (e.length === this.taints.length && e.every((r, i) => r === this.taints[i])) return !1;
    return ((this.taints = e), this.changed.emit(this.taints), !0);
  }
  registerVerdict(e) {
    this.verdict = e;
  }
  resetForTesting() {
    (this.latched.clear(), (this.latchedTaints = []), (this.taints = []), (this.current = []));
  }
}
var a = new W(() => new o());
function t() {
  return a.of(U().host);
}
function p5r(e) {
  return t().replaceTaints(e);
}
function iai(e) {
  return t().latchTaints(e);
}
function aai(e) {
  return n.has(e);
}
function Ks(e) {
  return t().taints.includes(e);
}
function I0() {
  return t().taints;
}
function yZ() {
  return t().current;
}
function m5r() {
  return t().latchedTaints;
}
function V5(e) {
  return t().changed.subscribe(e);
}
function lai() {
  t().resetForTesting();
}
function dai(e) {
  t().registerVerdict(e);
}
function pS(e) {
  return t().verdict?.isPolicyAllowed(e) ?? !1;
}
function cai() {
  let e = t().verdict;
  return e ? e.rememberedCoreSkills() : [];
}
function nsr(e) {
  try {
    return t().verdict?.commandPolicyGateAllows(e) ?? !1;
  } catch {
    return !1;
  }
}
function bR(e) {
  let r = t().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(e);
}
function q5(e, r, i) {
  return t().verdict?.policyDeniedReason(e, r, i) ?? null;
}
function Gkt() {
  return t().verdict?.complianceTaintsSettled() ?? !1;
}
function iB() {
  let e = t().verdict;
  if (e === void 0) return !1;
  try {
    return !e.policyLimitsCacheLoaded();
  } catch {
    return !0;
  }
}
function uai() {
  let e = t().verdict;
  if (e === void 0) return "loaded";
  try {
    return e.autoDefaultVerdictState();
  } catch {
    return "pending";
  }
}
function zz() {
  let e = t().verdict;
  if (e === void 0) return !1;
  try {
    return e.policyVerdictAbsent();
  } catch {
    return !0;
  }
}
function fai() {
  let e = t().verdict;
  if (e === void 0) return !1;
  try {
    return e.principalSeenUnderHipaa();
  } catch {
    return !0;
  }
}
export {
  p5r,
  iai,
  aai,
  Ks,
  I0,
  yZ,
  m5r,
  V5,
  lai,
  dai,
  pS,
  cai,
  nsr,
  bR,
  q5,
  Gkt,
  iB,
  uai,
  zz,
  fai
};

//# sourceMappingURL=chunk-znkwh1rm.js.map
