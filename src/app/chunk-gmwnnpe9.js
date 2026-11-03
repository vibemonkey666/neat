// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
function Jd(e, o, r = {}, u = "debug") {
  let n = e === void 0 ? "[remote-tools]" : `[remote-tools call=${e}]`,
    g = Object.entries(r)
      .flatMap(([d, i]) => (i === void 0 ? [] : [`${d}=${i}`]))
      .join(" ");
  t(g === "" ? `${n} ${o}` : `${n} ${o} ${g}`, { level: u });
}
function m7t(e) {
  return e === "outcome_of" ? "verbose" : "debug";
}
export { Jd, m7t };

//# sourceMappingURL=chunk-gmwnnpe9.js.map
