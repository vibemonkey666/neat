// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Hf, o$ } from "./chunk-t5b6h5a5.js";
import { _c, wge, mle, MJ, SK } from "./chunk-j0tbz6ra.js";
function s(o, t) {
  let c = Hf(),
    e = _c(o),
    n = MJ(e, t),
    a = SK(e, t),
    r = !(o$() && !wge(e, t));
  return { enabled: c, effectiveWindow: n, threshold: a, enforced: r, source: mle(e, t) };
}
function els(o) {
  let t;
  return {
    notify(c, e) {
      let n = s(c, e);
      if (t !== void 0 && L7r(t, n)) return;
      ((t = n), o(n));
    },
    reset() {
      t = void 0;
    }
  };
}
function L7r(o, t) {
  return (
    o.enabled === t.enabled &&
    o.effectiveWindow === t.effectiveWindow &&
    o.threshold === t.threshold &&
    o.enforced === t.enforced &&
    o.source === t.source
  );
}
export { els, L7r };

//# sourceMappingURL=chunk-v3rf5tkn.js.map
