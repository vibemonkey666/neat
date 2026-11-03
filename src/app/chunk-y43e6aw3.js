// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Md } from "./chunk-ftfxe7en.js";
import { $yt } from "./chunk-ce3m2y48.js";
import { P, C, j } from "./chunk-bq35vvkw.js";
j();
function qs(n, e, t) {
  let r = Md(),
    i = r?.getDisplayText(n, e),
    o = i === void 0,
    s = r ? "action_not_found" : "no_context",
    u = C(!1);
  if (
    (P(() => {
      if (o && !u.current) ((u.current = !0), $yt(n, e, t, s));
    }, [o, n, e, t, s]),
    o)
  )
    return t;
  return i === null ? "" : i;
}
export { qs };

//# sourceMappingURL=chunk-y43e6aw3.js.map
