// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { Hb, Cn } from "./chunk-4kxznmzw.js";
import { re, Ja, _X, Nb, zr, qg } from "./chunk-a16y5hcz.js";
var s =
    /[\p{Pi}\p{Pf}\u201a\u201e\u201f\u2e32\u2e34\u2e41\u2e49\u2e42\u3003\u300c-\u300f\ufe41-\ufe44\u301d-\u301f\u275b-\u2760\u276e\u276f\u{1f676}-\u{1f678}\u2032-\u2037\u2057\u02b9\u02ba\u0374\u02bd-\u02bf\u02c8\u02d2\u02d3\u02ca\u02ce\u02cf\u02dd\u02f4-\u02f6\u02ee\u00b4\u0384\u0385\u1fbd\u1fbf\u1fcd-\u1fcf\u1fdd-\u1fdf\u1ffd\u1ffe\u05f3\u05f4\u0559-\u055b\u07f4\u07f5\ua67f\ua78b\ua78c\uff02\uff07\uff62\uff63]/gu,
  o = /(?<![^\s\p{P}])\p{M}+/gu;
function W0(n) {
  return Cn(Xot(Nb(n)))
    .replace(/ {2,}/g, " ")
    .trim();
}
var p = /\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]|\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/g,
  a = 4;
function Xot(n) {
  let e = n;
  for (let t = 0; t < a; t++) {
    let r = e.replace(p, "");
    if (r === e) break;
    e = r;
  }
  return e;
}
function Mt(n, e = 160) {
  return J9(
    W0(l(n, e))
      .normalize("NFC")
      .replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'")
      .replace(o, ""),
    e
  );
}
var x = new RegExp(`[^\\S ]|[${Hb}]`, "u");
function oAt(n, e) {
  return n.length <= e && !x.test(n) && Mt(n, e) === n.replaceAll("`", "'");
}
function t4t(n, e = 2000) {
  let t = W0(l(n, e));
  return t.length > e ? `${re(t, e)}\u2026` : t;
}
function J9(n, e = 2000) {
  return n.length > e ? `${re(n, e)}\u2026` : n;
}
function r2(n, e = 160) {
  let t = Nb(n)
    .replace(/[\p{Cc}\p{Cf}]/gu, (r) => (/\s/.test(r) ? r : ""))
    .replace(/\s+/g, " ")
    .trim();
  return t.length > e ? `${re(t, e)}\u2026` : t;
}
function hi(n, e = 300) {
  return Mt(n ?? "", e);
}
function Ve(n, e = 300) {
  return Mt(n ?? "", e)
    .replace(s, "")
    .replace(/[\u02bb\u02bc]/g, "\u2019")
    .replace(/"/g, "\u201D")
    .replace(/'/g, "\u2019")
    .replace(o, "");
}
function gd(n, e) {
  let t = zr(qg(Nb(n).replace(/\s+/g, " ")))
    .normalize("NFC")
    .replace(s, "'")
    .replace(/["\u02BB\u02BC]/g, "'")
    .replace(o, "")
    .trim();
  if (!t) return "";
  return `\u201C${e ? _X(t, e.head, e.tail, () => "\u2026") : t}\u201D`;
}
function hB(n) {
  let e = gd(n)
    .replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'")
    .replace(o, "");
  return e === ""
    ? "(no printable name)"
    : e === `\u201C${n}\u201D`
      ? e
      : `${e} (not its exact spelling)`;
}
function aci(n, e) {
  let t = gd(n) || "\u201C\u201D";
  return t.length <= e ? t : gd(n, { head: e - 3, tail: 0 });
}
function OQo(n, { head: e, tail: t }) {
  if (n.length <= e + t) return n;
  let r = e > 0 ? re(n, e) : "",
    u = t > 0 ? Ja(n, t) : "",
    i = (r.match(/\u201C/g)?.length ?? 0) > (r.match(/\u201D/g)?.length ?? 0),
    c = u.indexOf("\u201D"),
    f = u.indexOf("\u201C"),
    g = c !== -1 && (f === -1 || c < f);
  return `${r}${i === g ? "\u2026" : i ? "\u2026\u201D\u2026" : "\u2026\u201C\u2026"}${u}`;
}
function l(n, e) {
  let t = re(n, e * 8);
  if (t.length === n.length) return t;
  let r = /\x1b(?:[\]PX^_][^\x1b\x07]*\x1b?|\[[\x30-\x3f]*[\x20-\x2f]*)$/.exec(t);
  if (r === null) return t;
  let u = n.slice(r.index);
  return (
    u[1] === "["
      ? /^\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]/.test(u)
      : /^\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/.test(u)
  )
    ? t.slice(0, r.index)
    : t;
}
function uC(n, { isComposed: e } = {}) {
  let t = d(n);
  return e?.(n) ? t4t(t, 2000) : Mt(t, 500);
}
export { W0, Xot, Mt, oAt, t4t, J9, r2, hi, Ve, gd, hB, aci, OQo, uC };

//# sourceMappingURL=chunk-adv24f35.js.map
