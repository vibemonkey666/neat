// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { k } from "./chunk-ajtyjx88.js";
import { wCe, Kwt } from "./chunk-tzrn3e6a.js";
import { SCe } from "./chunk-w89b9cst.js";
import { jDo, Ei, sdn } from "./chunk-6h7ejyet.js";
function loo() {
  if (!jDo()) return "off";
  try {
    return k("tengu_vast_tulip", !1) === !0 ? "enforce" : "observe";
  } catch {
    return (
      t("tool host attestation: reading tengu_vast_tulip threw; observing", { level: "warn" }),
      "observe"
    );
  }
}
function s(e) {
  let o = SCe(),
    { status: r, meetsLevel: n, configException: i } = Kwt(e, o, { isCloudWorker: !1 });
  return {
    status: r,
    verdict: !o.enforce ? "not_policed" : n ? "pass" : i ? "config_exception" : "below_floor"
  };
}
function Lpe(e) {
  let o = loo();
  return o === "off" ? void 0 : { mode: o, ...s(wCe(e)) };
}
function Kwe(e) {
  return e?.mode === "enforce" && e.verdict === "below_floor";
}
function vOn() {
  let e = Lpe("UNSPECIFIED");
  return { attestation: e, heldBack: Kwe(e) };
}
function oms(e) {
  try {
    e?.(sdn, Ei["repository_trust.served_calls.unattested"]);
  } catch (o) {
    t(`[remote-tools] the notice sink threw on ${sdn}: ${d(o)}`, { level: "error" });
  }
}
export { loo, Lpe, Kwe, vOn, oms };

//# sourceMappingURL=chunk-pw1f3tmw.js.map
