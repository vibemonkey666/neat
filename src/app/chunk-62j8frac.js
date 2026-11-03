// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { ZYn, wG, Adn } from "./chunk-b08qnart.js";
import { qW, pgo, mgo, uD } from "./chunk-sdv7wcwv.js";
function $ve() {
  return qW().cachedSystemTheme() ?? s() ?? "dark";
}
function _Ts() {
  return qW().cachedSystemTheme() ?? s();
}
function n$n() {
  return qW().cachedSystemTheme();
}
function G7t(e) {
  qW().setSystemTheme(e);
}
function xMt(e) {
  return qW().onSystemThemeChange(e);
}
function z7t(e) {
  if (e === "auto") return $ve();
  if (ZYn(e)) return e;
  let t = uD(e);
  return (t && pgo(t)) || "dark";
}
function u8e(e) {
  let t = wG(z7t(e)),
    n = uD(e);
  if (!n) return t;
  return Adn(t, mgo(n)?.overrides);
}
function bTs(e) {
  let t = u(e);
  if (!t) return;
  return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5 ? "light" : "dark";
}
function u(e) {
  let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
  if (t) return { r: m(t[1]), g: m(t[2]), b: m(t[3]) };
  let n = /^#([0-9a-f]+)$/i.exec(e);
  if (n && n[1].length % 3 === 0) {
    let r = n[1],
      o = r.length / 3;
    return { r: m(r.slice(0, o)), g: m(r.slice(o, 2 * o)), b: m(r.slice(2 * o)) };
  }
  return;
}
function m(e) {
  let t = 16 ** e.length - 1;
  return parseInt(e, 16) / t;
}
function s() {
  let e = i.COLORFGBG;
  if (!e) return;
  let n = e.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}
export { $ve, _Ts, n$n, G7t, xMt, z7t, u8e, bTs };

//# sourceMappingURL=chunk-62j8frac.js.map
