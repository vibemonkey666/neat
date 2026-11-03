// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
function Zii(n) {
  switch (n) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return (t(`Unknown compliance_taint '${n}' from policyLimits`, { level: "warn" }), r);
  }
}
var r = "Organization policy",
  Nkt = "Per your organization's policy, some features are limited",
  Yor = "HIPAA configured",
  o = new Set(["hipaa", "zdr"]);
function XSn(n) {
  return o.has(n) || !1;
}
function JSn(n) {
  let e = L(n),
    i = e.filter(XSn);
  if (i.length === e.length) return i;
  return (
    t(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, {
      level: "warn"
    }),
    [...i, r]
  );
}
var a = new Set(["hipaa"]);
function ose(n) {
  return L(n).filter((e) => a.has(e));
}
export { Zii, Nkt, Yor, XSn, JSn, ose };

//# sourceMappingURL=chunk-hk0dvhmb.js.map
