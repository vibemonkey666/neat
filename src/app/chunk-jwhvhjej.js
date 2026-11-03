// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vC } from "./chunk-a16y5hcz.js";
import { he } from "./chunk-95k4nfdh.js";
import { VPn, zie } from "./chunk-x3jexbyn.js";
import { qar } from "./chunk-2bsye2b3.js";
var s = "\x1B[0m";
function i(t) {
  return he.level > 0 && t.includes(s) ? s + t.replace(/\r?\n/g, `${s}$&${s}`) + s : he.reset(t);
}
var m = new Map(
  Object.entries({
    keyword: he.blue,
    built_in: he.cyan,
    type: he.cyan.dim,
    literal: he.blue,
    number: he.green,
    regexp: he.red,
    string: he.red,
    subst: i,
    symbol: i,
    class: he.blue,
    function: he.yellow,
    title: i,
    "title.function": he.yellow,
    "title.class": he.blue,
    params: i,
    comment: he.green,
    doctag: he.green,
    meta: he.grey,
    "meta-keyword": i,
    "meta-string": i,
    "meta.keyword": i,
    "meta.string": i,
    section: i,
    tag: he.grey,
    name: he.blue,
    attr: he.cyan,
    attribute: i,
    variable: i,
    bullet: i,
    code: i,
    emphasis: he.italic,
    strong: he.bold,
    link: he.underline,
    quote: i,
    addition: he.green,
    deletion: he.red
  })
);
function c(t) {
  let e = vC(t, "hljs-");
  for (;;) {
    let r = m.get(e);
    if (r) return r;
    let n = e.lastIndexOf(".");
    if (n < 0) return;
    e = e.slice(0, n);
  }
}
function d(t) {
  let e = [],
    r = [];
  p(t, e, r);
  let n = qar(r);
  if (n === r) return;
  e.forEach(({ siblings: o, at: a }, l) => {
    o[a] = n[l];
  });
}
function p(t, e, r) {
  t.children.forEach((n, o) => {
    if (typeof n === "string") (e.push({ siblings: t.children, at: o }), r.push(n));
    else p(n, e, r);
  });
}
function u(t) {
  if (typeof t === "string") return t;
  let e = t.children.map(u).join(""),
    r = t.scope ?? t.kind,
    n = r ? c(r) : void 0;
  return n ? n(e) : e;
}
function f(t, e) {
  let r = e?.language;
  if (!r) return t;
  try {
    let n = zie(r);
    if (!n) return t;
    let o = VPn().highlight(t, { language: n, ignoreIllegals: !0 }),
      a = o._emitter ?? o.emitter,
      l = a?.rootNode ?? a?.root;
    if (!l || typeof l === "string") return t;
    return (d(l), l.children.map(u).join(""));
  } catch {
    return t;
  }
}
function y(t) {
  return zie(t) !== null;
}
var h = { highlight: f, supportsLanguage: y };
function PW() {
  return h;
}
export { PW };

//# sourceMappingURL=chunk-jwhvhjej.js.map
