// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { kC, xv } from "./chunk-wrtp8qz8.js";
import { Ro } from "./chunk-1e5yp9hx.js";
import { Fm, BO, Ou } from "./chunk-p56qmwgb.js";
import { w_ } from "./chunk-cj37hmns.js";
import { mg, pe } from "./chunk-7c3thgax.js";
import { jpt, XNs, lDr, Bv, WN, fm, by } from "./chunk-j0tbz6ra.js";
import { X1o, rmn } from "./chunk-krgv9fvy.js";
var a = lDr.filter((e) => e !== "userSettings");
function $6e(e) {
  if (X1o()) return !1;
  if (rmn()) return !0;
  return (e ?? FPt()).length > 0;
}
function FPt(e = Dhr()) {
  let r = [...e];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${w_()} (local-scope MCP servers for this project)`);
  return r;
}
function c(e, r) {
  if (BO()) return !1;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return !1;
    let s = l.source;
    if (s.source === "url")
      return !!s.headersHelper && /^https:\/\//i.test(s.url) && Ou(s) && !u(t, s.url);
    if (s.source === "settings")
      return (
        Ou(s) &&
        !p(t) &&
        s.plugins.some(
          (n) =>
            !!n.headersHelper &&
            typeof n.source === "object" &&
            n.source.source === "archive" &&
            !Fm(`${n.name}@${t}`)
        )
      );
    return !1;
  });
}
function u(e, r) {
  let o = Ro();
  if (a.some((t) => o.includes(t) && Object.hasOwn(pe(t)?.extraKnownMarketplaces ?? {}, e)))
    return !0;
  return XNs({ source: "url", url: r }, e) !== void 0;
}
function p(e) {
  return Object.hasOwn(Bv(), e);
}
function i(e) {
  if (xv() || by()) return !1;
  let { servers: r } = fm(e, { expandVars: !1 });
  return Object.entries(r).some(
    ([o, t]) =>
      "headersHelper" in t &&
      !!t.headersHelper &&
      !(e === "project" && jpt(o) === "rejected") &&
      WN(o, t)
  );
}
function Dhr() {
  if (kC()) return [];
  let e = Ro(),
    r = e.includes("localSettings") ? pe("localSettings") : null,
    o = [];
  if (e.includes("projectSettings") && !mg() && c(pe("projectSettings"), r))
    o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}
export { $6e, FPt, Dhr };

//# sourceMappingURL=chunk-zvrxpre6.js.map
