// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { us } from "./chunk-bwbrda44.js";
import { o, M, sm, u } from "./chunk-0bqrj5ah.js";
var kg = us({
    kind: "local_jsx",
    payload: p(() =>
      u({
        nodeId: o(),
        commandName: o(),
        immediate: M(),
        hidesPrompt: M(),
        holdsQueue: M().optional()
      })
    ),
    result: p(() => sm()),
    default: null,
    userInvoked: !0,
    hideWhile: []
  }),
  t = p(() => u({ holdsQueue: M().optional() }));
function NMt(a) {
  return a.open.some((e) => e.kind === kg.kind && t().safeParse(e.payload).data?.holdsQueue !== !1);
}
var Bgo = new Set(["rate-limit-options", "pro-trial-expired"]);
export { kg, NMt, Bgo };

//# sourceMappingURL=chunk-7k5v7jym.js.map
