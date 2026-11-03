// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { mc } from "./chunk-5rw2zfa0.js";
import { k } from "./chunk-ajtyjx88.js";
import { on, Xc } from "./chunk-cr7a2cdd.js";
import { o, T, u } from "./chunk-0bqrj5ah.js";
var l = p(() => T(u({ marketplace: o(), plugin: o() })));
function MSr() {
  let e = k("tengu_harbor_ledger", []),
    n = l().safeParse(e);
  return n.success ? n.data : [];
}
function QB() {
  return on("allow_channels") && k("tengu_harbor", !1);
}
function yOt() {
  if (!k("tengu_harbor", !1)) return !0;
  let e = Xc("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing";
}
function oQt(e) {
  if (!e) return !1;
  let { name: n, marketplace: r } = mc(e);
  if (!r) return !1;
  return MSr().some((t) => t.plugin === n && t.marketplace === r);
}
export { MSr, QB, yOt, oQt };

//# sourceMappingURL=chunk-3b0cphjr.js.map
