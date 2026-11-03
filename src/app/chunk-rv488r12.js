// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Md } from "./chunk-ftfxe7en.js";
import { AG, bcn, $yt } from "./chunk-ce3m2y48.js";
import { P, C, j } from "./chunk-bq35vvkw.js";
j();
function ka(e, i, t) {
  let o = Md(),
    n = o ? bcn(e, i, o.bindings) : void 0,
    r = n === void 0,
    f = o ? "action_not_found" : "no_context",
    d = C(!1);
  if (
    (P(() => {
      if (r && !d.current) ((d.current = !0), $yt(e, i, t, f));
    }, [r, e, i, t, f]),
    n === void 0)
  )
    return t;
  return n === null ? "" : AG(n);
}
export { ka };

//# sourceMappingURL=chunk-rv488r12.js.map
