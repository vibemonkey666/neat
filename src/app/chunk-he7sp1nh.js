// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { dc } from "./chunk-a16y5hcz.js";
import { Ut } from "./chunk-ajtyjx88.js";
import { xut } from "./chunk-42v7dsg4.js";
function bgs() {
  return !Ut();
}
function _dt(o) {
  return o.filter((r) => !r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal);
}
function bdt(o) {
  let r = [],
    i = [];
  for (let n of o) (n.statusOnly ? r : i).push(n);
  return { statusNotices: r, invalidEntries: i };
}
function Sdt(o) {
  for (let r of o)
    t(
      `Invalid setting skipped without dialog (automated session): ${dc(xut(r.file))}: ${r.path}: ${r.message}`,
      { level: "error" }
    );
}
export { bgs, _dt, bdt, Sdt };

//# sourceMappingURL=chunk-he7sp1nh.js.map
