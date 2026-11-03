// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { Yqr, UV, kn } from "./chunk-ajtyjx88.js";
import { pRe } from "./chunk-62m282bz.js";
import { createHash as n } from "crypto";
function I9t() {
  let { value: e, source: r } = kn(pRe, null);
  return { flag: g(e), source: r };
}
function g(e) {
  let { flag: r, problem: o } = Yqr(e);
  if (o !== void 0)
    t(`org-config gate: ${pRe} is malformed (${o}); treating as off`, { level: "warn" });
  return r;
}
function vki(e = I9t, r = UV) {
  let { flag: o, source: a } = e();
  return o.enabled || (a === "fallback" && r());
}
function iso(e) {
  let r = n("sha256").update(`org_config_gate:${e}`).digest("hex");
  return parseInt(r.slice(0, 8), 16) % 100;
}
function aso(e, r) {
  return e.enabled && r < e.percent;
}
export { I9t, vki, iso, aso };

//# sourceMappingURL=chunk-tdrdhd0g.js.map
