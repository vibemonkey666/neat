// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { zi } from "./chunk-ynkasage.js";
function xCs(e) {
  return () => {
    let n = e(),
      t = zi();
    return (t.disconnectedAnswerCount++, t.disconnectedAnswerTexts.add(n), n);
  };
}
function r_o() {
  return zi().disconnectedAnswerCount;
}
function eUn(e) {
  return zi().disconnectedAnswerTexts.has(e);
}
function len() {
  let e = zi();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}
function PCs() {
  zi().notConnectedSeenByPriorWorker = !0;
}
export { xCs, r_o, eUn, len, PCs };

//# sourceMappingURL=chunk-98t1ehjk.js.map
