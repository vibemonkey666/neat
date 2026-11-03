// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke } from "./chunk-wrtp8qz8.js";
import { re } from "./chunk-a16y5hcz.js";
import { pTt } from "./chunk-5rw2zfa0.js";
import { J$e } from "./chunk-4kxznmzw.js";
import { dn } from "./chunk-9z5ybxhe.js";
import { pe } from "./chunk-7c3thgax.js";
import { Fx } from "./chunk-ajtyjx88.js";
import { Be } from "./chunk-at88wjsn.js";
import { TQn } from "./chunk-rve8yzwm.js";
import { NXn, mce } from "./chunk-krgv9fvy.js";
import { o7 } from "./chunk-d5zj5299.js";
import { isAbsolute as h } from "path";
function S() {
  return { sources: m(), read: pe, rules: mce };
}
var m = () => {
  let { gateProject: t } = NXn(),
    e = Fx({ onIndeterminate: "tracked" });
  return [
    ...(t ? [["projectSettings", ".claude/settings.json"]] : []),
    ...(e ? [["localSettings", ".claude/settings.local.json"]] : [])
  ];
};
function Fhr(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return !0;
  return !1;
}
function Ooo(
  t = {
    sources: [
      ["projectSettings", ".claude/settings.json"],
      ["localSettings", ".claude/settings.local.json"]
    ],
    read: pe,
    rules: mce
  },
  e = ke()
) {
  let s = [];
  for (let [n, c] of t.sources) if (Fhr(t.read(n))) s.push(c);
  let r = TQn(e);
  if (r !== null) s.push(o7(r));
  return s;
}
function l(t) {
  return t.some(
    (e) =>
      e.ruleBehavior === "allow" &&
      (e.ruleValue.toolName === Be || e.ruleValue.toolName.startsWith(Be + "("))
  );
}
var j = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  a = 60;
function Uhr(t) {
  let e = J$e(t).replace(j, "").trim();
  return e.length > a ? `${re(e, a)}\u2026` : e;
}
var R = new Set([
  Be,
  "PowerShell",
  "Write",
  "Edit",
  "MultiEdit",
  "NotebookEdit",
  "WebFetch",
  "WebSearch"
]);
function g(t) {
  let { toolName: e, ruleContent: s } = t.ruleValue,
    r = R.has(e) || e.startsWith("mcp__"),
    n = s === void 0;
  if (r) return n ? 0 : 1;
  return n ? 2 : 3;
}
function BPt(t = S()) {
  let e = [],
    s = [];
  for (let [i, o] of t.sources) {
    let u = t.rules(i).filter((d) => d.ruleBehavior === "allow");
    if (u.length > 0) (e.push(o), s.push(...u));
  }
  let r = s.length;
  s.sort((i, o) => g(i) - g(o));
  let n = new Set(),
    c = [];
  for (let i of s) {
    let o = Uhr(dn(i.ruleValue));
    if (o.length > 0 && !n.has(o)) (n.add(o), c.push(o));
  }
  return { rules: c, sources: e, rawCount: r };
}
function p(t) {
  if (h(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}
function jPt(t = S()) {
  let e = [],
    s = [];
  for (let [i, o] of t.sources) {
    let u = t.read(i)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) (e.push(o), s.push(...u));
  }
  let r = s.length,
    n = new Set(),
    c = [];
  for (let i of s) {
    let o = Uhr(i);
    if (o.length > 0 && !n.has(o)) (n.add(o), c.push(o));
  }
  return (c.sort((i, o) => p(i) - p(o)), { dirs: c, sources: e, rawCount: r });
}
function Moo() {
  let t = [],
    e = mce("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = mce("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t;
}
function wS(t, e) {
  if (t.length === 0) return "";
  let s = e === 0 ? void 0 : e;
  if (!s || t.length <= s) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let c = t.at(-1);
    return `${t.slice(0, -1).join(", ")}, and ${c}`;
  }
  let r = t.slice(0, s),
    n = t.length - s;
  if (r.length === 1) return `${r[0]} and ${n} more`;
  return `${r.join(", ")}, and ${n} more`;
}
function Bhr(t) {
  return !!t?.otelHeadersHelper;
}
function Doo() {
  let t = [],
    e = pe("projectSettings");
  if (Bhr(e)) t.push(".claude/settings.json");
  let s = pe("localSettings");
  if (Bhr(s)) t.push(".claude/settings.local.json");
  return t;
}
function k9t() {
  let t = [];
  if (pe("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if (pe("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t;
}
function jhr(t) {
  return !!t?.apiKeyHelper;
}
function Hoo() {
  let t = [],
    e = pe("projectSettings");
  if (jhr(e)) t.push(".claude/settings.json");
  let s = pe("localSettings");
  if (jhr(s)) t.push(".claude/settings.local.json");
  return t;
}
function Whr(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function Loo() {
  let t = [],
    e = pe("projectSettings");
  if (Whr(e)) t.push(".claude/settings.json");
  let s = pe("localSettings");
  if (Whr(s)) t.push(".claude/settings.local.json");
  return t;
}
function Ghr(t) {
  return !!t?.gcpAuthRefresh;
}
function Noo() {
  let t = [],
    e = pe("projectSettings");
  if (Ghr(e)) t.push(".claude/settings.json");
  let s = pe("localSettings");
  if (Ghr(s)) t.push(".claude/settings.local.json");
  return t;
}
function zhr(t) {
  return !!t?.proxyAuthHelper;
}
function $oo() {
  let t = [],
    e = pe("projectSettings");
  if (zhr(e)) t.push(".claude/settings.json");
  let s = pe("localSettings");
  if (zhr(s)) t.push(".claude/settings.local.json");
  return t;
}
function f(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !pTt(e, s));
}
function T9t() {
  let t = [],
    e = pe("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = pe("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t;
}
export {
  Fhr,
  Ooo,
  Uhr,
  BPt,
  jPt,
  Moo,
  wS,
  Bhr,
  Doo,
  k9t,
  jhr,
  Hoo,
  Whr,
  Loo,
  Ghr,
  Noo,
  zhr,
  $oo,
  T9t
};

//# sourceMappingURL=chunk-q3c523a0.js.map
