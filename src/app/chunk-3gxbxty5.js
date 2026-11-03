// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _p, j8 } from "./chunk-p56qmwgb.js";
import { op, aVs } from "./chunk-xt7fs806.js";
import { basename as r, sep as n } from "path";
function wAs(i) {
  let s = op(),
    { listedOwnerships: t } = s;
  (t.clear(), (s.listedSkillsAnswer = "none_yet"));
  for (let e of i) {
    let l;
    try {
      l = _p(r(j8(e.name, n)));
    } catch {
      continue;
    }
    if (!t.has(l))
      t.set(l, {
        listedName: e.name,
        ownership: aVs(e),
        savedFromAChat: typeof e.backing_plugin_id === "string"
      });
  }
  s.listedSkillsAnswer = "a_list";
}
function Cho(i) {
  return op().listedOwnerships.get(_p(i));
}
export { wAs, Cho };

//# sourceMappingURL=chunk-3gxbxty5.js.map
