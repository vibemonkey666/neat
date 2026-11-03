// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ue } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { Vf, On } from "./chunk-5rw2zfa0.js";
import { Sf } from "./chunk-vn4qkmxw.js";
import { e0, r0 } from "./chunk-p56qmwgb.js";
import { Zer } from "./chunk-g2mvjkdk.js";
import { JHo, u5n, f5n, nLo } from "./chunk-783pymr7.js";
var d = 14,
  f = 10;
async function n8e() {
  try {
    let e = Zer();
    if (e === void 0) return [];
    if (r0() !== null) return [];
    let { enabled: s } = await e;
    if (s.length === 0) return [];
    let u = Sf(),
      l = e0(),
      c = ue().numStartups,
      g = Date.now(),
      r = [];
    for (let n of s) {
      let { marketplace: o } = On(n.repository);
      if (!o || Vf(o)) continue;
      if (nLo(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = u5n(n.repository);
      if (!i) continue;
      if (JHo(n.repository)) continue;
      let { sessionsSinceLastUse: m, daysSinceLastUse: a } = f5n(i, c, g);
      if (a >= d && m >= f) r.push({ pluginId: n.repository, name: n.name, daysSinceLastUse: a });
    }
    return (r.sort((n, o) => o.daysSinceLastUse - n.daysSinceLastUse), r);
  } catch (e) {
    return (
      t(`plugin-disuse tip: failed to compute disused plugins: ${e}`, { level: "error" }),
      []
    );
  }
}
function nks(e) {
  if (r0() !== null) return null;
  let s = u5n(e);
  if (!s) return null;
  if (JHo(e)) return 0;
  return f5n(s, ue().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(
    e.themesPath ||
    e.themesPaths?.length ||
    e.outputStylesPath ||
    e.outputStylesPaths?.length ||
    e.monitors?.length ||
    e.workflowsPath ||
    e.workflowsPaths?.length
  );
}
export { n8e, nks };

//# sourceMappingURL=chunk-ta9cgaw3.js.map
