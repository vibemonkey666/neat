// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { hfo, e0n } from "./chunk-62p04wse.js";
import { mMe, gHs } from "./chunk-j0tbz6ra.js";
import { o, oe, T, u, A } from "./chunk-0bqrj5ah.js";
var n = 1,
  a = 64,
  s = "offer",
  t = p(() => o().regex(mMe).refine(gHs)),
  c = p(() =>
    u({
      v: A(n),
      head: t(),
      branch: o().min(1).max(hfo).refine(e0n),
      ancestors: T(oe()).max(a).pipe(T(t()))
    })
  );
function bds(e) {
  let r = c().safeParse(e[s]);
  return r.success ? r.data : null;
}
export { bds };

//# sourceMappingURL=chunk-tgdb2nvk.js.map
