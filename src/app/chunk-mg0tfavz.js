// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ro } from "./chunk-1e5yp9hx.js";
import { tu, Bw, TI } from "./chunk-5rw2zfa0.js";
import { pe } from "./chunk-7c3thgax.js";
var AV = ["userSettings", "flagSettings", "policySettings"];
function P_e(t) {
  let i = new Set(Ro()),
    e = lue(t),
    n,
    r;
  for (let s of AV) {
    if (!i.has(s)) continue;
    let g = pe(s)?.pluginConfigs;
    for (let u of e) {
      let o = g?.[u];
      if (o?.options) n = { ...n, ...o.options };
      if (o?.mcpServers) {
        r = r ?? {};
        for (let [l, c] of Object.entries(o.mcpServers)) r[l] = { ...r[l], ...c };
      }
    }
  }
  return { options: n, mcpServers: r };
}
function lue(t) {
  let i = TI(t);
  if (i.length > 0) return [...i.toReversed(), t];
  let e = `@${tu}`,
    n = t.endsWith(e) ? t.slice(0, -e.length) : "";
  return n !== "" && !n.includes("@") ? [n, t] : [t];
}
function Jer(t) {
  let i = new Set(Ro()),
    e;
  for (let n of AV) {
    if (!i.has(n)) continue;
    let r = _9(pe(n)?.enabledPlugins, t);
    if (r !== void 0) e = r;
  }
  return e;
}
function o2t(t, i) {
  let e = Bw(i),
    n = TI(e);
  if (n.length === 0) return { deciding: i, written: i, replaced: [] };
  let r = n.filter((s) => t?.[s] !== void 0);
  return { deciding: t?.[e] === void 0 ? (r[0] ?? e) : e, written: e, replaced: r };
}
function _9(t, i) {
  let e = Bw(i);
  return [e, ...TI(e), i].map((n) => t?.[n]).find((n) => n !== void 0);
}
export { AV, P_e, lue, Jer, o2t, _9 };

//# sourceMappingURL=chunk-mg0tfavz.js.map
