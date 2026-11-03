// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { NV } from "./chunk-ajtyjx88.js";
import { Qc } from "./chunk-exz0w70z.js";
var d = new W(() => ({ degraded: !1 }));
function t() {
  return d.of(U().host);
}
function ele(n, r) {
  if (n !== Qc) return;
  let e = t();
  if (r === void 0) {
    e.degraded = !1;
    return;
  }
  let o = NV(r);
  if (o === "downstream_unreachable") e.degraded = !0;
  else if (o === "downstream_error") e.degraded = !1;
}
function aPs() {
  return t().degraded;
}
export { ele, aPs };

//# sourceMappingURL=chunk-9ewvacsd.js.map
