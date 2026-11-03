// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { eNt, Gmt, zmt, tNt } from "./chunk-j0tbz6ra.js";
function h(e, o) {
  let p = zmt(e),
    s = Math.min(p.length, eNt());
  return 2 + tNt(e, o).length + 2 + s + 1;
}
function wxt(e, o, p) {
  let s = new Map();
  for (let n of e) {
    if (n.type !== "prompt" || n.disableModelInvocation) continue;
    let t = n.pluginInfo?.pluginManifest.name;
    if (!t) continue;
    let a = h(n, e),
      r = s.get(t) ?? [];
    (r.push({ name: n.name, chars: a, approxTokens: Math.round(a / o) }), s.set(t, r));
  }
  let m = [...s.entries()]
      .map(([n, t]) => {
        t.sort((r, u) => u.chars - r.chars);
        let a = t.reduce((r, u) => r + u.chars, 0);
        return {
          pluginName: n,
          skillCount: t.length,
          chars: a,
          approxTokens: Math.round(a / o),
          skills: t
        };
      })
      .sort((n, t) => t.chars - n.chars),
    c = m.reduce((n, t) => n + t.chars, 0),
    i = Gmt(p, o),
    l = c > i,
    g = l ? i : c;
  return {
    byPlugin: m,
    totalChars: g,
    totalTokens: Math.round(g / o),
    overBudget: l,
    budgetTokens: Math.round(i / o)
  };
}
export { wxt };

//# sourceMappingURL=chunk-z1tbdh81.js.map
