// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qt } from "./chunk-1e5yp9hx.js";
import { pe } from "./chunk-7c3thgax.js";
import { KE, ihn, s5 } from "./chunk-h2tyaevk.js";
function i() {
  return c(
    s5(ihn(), "globalConfig"),
    Qt("userSettings") ? s5(pe("userSettings")?.env, "userSettings") : {},
    s5(pe("flagSettings")?.env, "flagSettings"),
    s5(pe("policySettings")?.env, "policySettings")
  );
}
function e7() {
  return g(KE(), i());
}
function g(s, n) {
  let r = new Set(Object.keys(n).map((e) => e.toUpperCase())),
    t = { ...s };
  for (let e of Object.keys(t)) if (!(e in n) && r.has(e.toUpperCase())) delete t[e];
  return Object.assign(t, n);
}
function c(...s) {
  let n = new Map();
  for (let t of s)
    for (let [e, o] of Object.entries(t)) n.set(e.toUpperCase(), { key: e, value: o });
  let r = {};
  for (let { key: t, value: e } of n.values()) r[t] = e;
  return r;
}
export { e7 };

//# sourceMappingURL=chunk-6pv3pyvv.js.map
