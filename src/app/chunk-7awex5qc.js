// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { Tf } from "./chunk-1e5yp9hx.js";
import { My } from "./chunk-enp5gvra.js";
import { i0e } from "./chunk-bm0f9j8a.js";
import { Ud } from "./chunk-d54avynm.js";
function _0n(o) {
  if (!o || Object.keys(o).length === 0) return !1;
  for (let n of Ud) {
    let e = o[n];
    if (!e || e.length === 0) continue;
    for (let r of e) if ((r.hooks?.length ?? 0) > 0) return !0;
  }
  return !1;
}
function zvs(o, n, e, r, m = !1, l = !1, u = !1, p) {
  if (!e || Object.keys(e).length === 0) return;
  i0e(e, p);
  let s = 0;
  for (let i of Ud) {
    let f = e[i];
    if (!f || f.length === 0) continue;
    let a = i;
    if (m && i === "Stop")
      ((a = "SubagentStop"),
        t(`Converting Stop hook to SubagentStop for ${r} (subagents trigger SubagentStop)`));
    for (let c of f) {
      let S = c.matcher ?? "",
        g = c.hooks;
      if (!g || g.length === 0) continue;
      for (let h of g) (o.add(n, a, S, h, { personal: l, checkout: u }), s++);
    }
  }
  if (s > 0) t(`Registered ${s} frontmatter hook(s) from ${r} for session ${n}`);
}
function qct(o) {
  return My() && o !== void 0 && Tf.has(o);
}
export { _0n, zvs, qct };

//# sourceMappingURL=chunk-7awex5qc.js.map
