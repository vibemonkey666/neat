// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { aE, mB } from "./chunk-5rw2zfa0.js";
import { tT } from "./chunk-7c3thgax.js";
import { TQn } from "./chunk-rve8yzwm.js";
import { FY } from "./chunk-krgv9fvy.js";
import { Fhr, BPt, jPt, Bhr, jhr, Whr, Ghr, zhr } from "./chunk-q3c523a0.js";
import { o7 } from "./chunk-d5zj5299.js";
import { join as i, resolve as f } from "path";
function Poo(o, { backstop: t = !1 } = {}) {
  return (
    o.allowRules.sources.length > 0 ||
    o.additionalDirectories.sources.length > 0 ||
    (!t && (o.hookSources.length > 0 || o.commandHelperSources.length > 0))
  );
}
function Ioo() {
  return {
    allowRules: BPt(),
    additionalDirectories: jPt(),
    hookSources: [],
    commandHelperSources: []
  };
}
function NOn(o) {
  let t = f(o),
    m = mB(t, tT),
    r = aE(i(t, ".claude", "settings.json")).settings,
    c = i(m, ".claude", "settings.local.json"),
    a = i(t, ".claude", "settings.local.json"),
    s = [aE(c).settings, ...(a === c ? [] : [aE(a).settings])].filter((e) => e !== null),
    S =
      s.length === 0
        ? null
        : {
            permissions: {
              additionalDirectories: s.flatMap((e) => e.permissions?.additionalDirectories ?? [])
            }
          },
    u = { projectSettings: r, localSettings: S },
    p = {
      sources: [
        ["projectSettings", ".claude/settings.json"],
        ["localSettings", ".claude/settings.local.json"]
      ],
      read: (e) => u[e] ?? null,
      rules: (e) => (e === "localSettings" ? s.flatMap((h) => FY(h, e)) : FY(u[e] ?? null, e))
    },
    d = (e) => jhr(e) || Whr(e) || Ghr(e) || Bhr(e) || zhr(e),
    l = [],
    n = [];
  if (Fhr(r)) l.push(".claude/settings.json");
  if (s.some(Fhr)) l.push(".claude/settings.local.json");
  let g = TQn(t);
  if (g !== null) l.push(o7(g));
  if (d(r)) n.push(".claude/settings.json");
  if (s.some(d)) n.push(".claude/settings.local.json");
  return {
    allowRules: BPt(p),
    additionalDirectories: jPt(p),
    hookSources: l,
    commandHelperSources: n
  };
}
export { Poo, Ioo, NOn };

//# sourceMappingURL=chunk-x4q79z9e.js.map
