// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Wn } from "./chunk-ajtyjx88.js";
var qdo = !0;
var Ydo = () => Wn("tengu_agents_md_mod", qdo);
var lct = "cc-plugin-agents-md";
function CHn(t, o) {
  let e = new Set([t.path]),
    { path: n, parent: r } = t;
  while (r !== void 0 && !e.has(r)) (e.add(r), (n = r), (r = o.get(r)?.parent));
  return n;
}
var zbr = ["project", "local", "user"];
var dct = (t) =>
  t.flatMap((o) =>
    o.parts.map((e, n) => ({
      path: e.path,
      kind: "project",
      content: e.content,
      ...(n > 0 && { parent: o.parts[0]?.path ?? e.path })
    }))
  );
function Qbs(t, o, e) {
  if ((t === "~" || t.startsWith("~/")) && e !== void 0) {
    let r = e.replace(/(?<=.)[\\/]+$/, "");
    return t === "~" ? r : `${r}${c(r)}${t.slice(2)}`;
  }
  return /^(?:[A-Za-z]:)?[\\/]/.test(t) ? t : `${o}${c(o)}${t}`;
}
var c = (t) => (t.includes("\\") ? "\\" : "/");
var lve = (t) => t.replaceAll("\\", "/").replace(/(?<=.)\/+$/, "");
var RHn = (t, o) => lve(t).startsWith(`${lve(o)}/`);
var Xdo = (t, o) => lve(t.path) === lve(o);
var Jdo = (t) => `Contents of ${t.path}:

${t.content}`;
function Kbr(t, o) {
  let e = new Set(o.map((n) => n.dir));
  return t.filter((n) => !e.has(n.dir));
}
var Qdo = (t, o) => [...(t ?? []), ...o.map(Jdo)];
var cct = (t) => t.kind === "project" || t.kind === "local";
function JIt(t) {
  let o = lve(t),
    e = o.lastIndexOf("/.claude/"),
    n = e === -1 ? o.lastIndexOf("/") : e;
  return n <= 0 ? "/" : o.slice(0, n);
}
function Zdo(t, o) {
  let e = new Map(t.map((s) => [s.path, s])),
    n = t.findIndex((s) => cct(s) && RHn(JIt(CHn(s, e)), o));
  if (n !== -1) return n;
  let r = t.findLastIndex(cct);
  if (r !== -1) return r + 1;
  let i = t.findIndex((s) => s.kind === "memory");
  return i === -1 ? t.length : i;
}
var yJt = ["AGENTS.md", ".claude/AGENTS.md"];
var uct = ["CLAUDE.md", ".claude/CLAUDE.md", "CLAUDE.local.md"];
var fct = "main";
var Zbs = ["clear", "compact", "resume"];
function Vbr(t, o) {
  if (!(cct(t) && t.parent === void 0 && uct.some((i) => lve(t.path).endsWith(`/${i}`)))) return !1;
  let n = JIt(t.path),
    r = lve(o);
  return n === r || RHn(r, n);
}
var eSs = (t) => !zbr.includes(t.kind);
function _Jt(t, o) {
  let e = new Set(o.map((i) => lve(i.path))),
    n = new Set(o.filter(cct).map((i) => i.content.trim())),
    r = [];
  for (let i of t) {
    let s = lve(i.path),
      m = i.content.trim();
    if (!(e.has(s) || (m !== "" && n.has(m)))) (e.add(s), r.push(i));
  }
  return r;
}
function qbr(t, o) {
  if (o.length === 0) return t;
  let e = [...t],
    n = new Map(o.map((i) => [i.path, i])),
    r = new Map();
  for (let i of o) {
    let s = JIt(CHn(i, n));
    r.set(s, [...(r.get(s) ?? []), i]);
  }
  for (let [i, s] of r) e.splice(Zdo(e, i), 0, ...s);
  return e;
}
var pct = "claude-md-or-agents-md";
var x = {
  none: "managed-only",
  claude: "claude-md",
  "agents-fallback": "claude-md-or-agents-md",
  both: "claude-md-and-agents-md"
};
function tSs(t) {
  if (t === void 0) return;
  return (typeof t === "string" ? x[t] : void 0) ?? "claude-md";
}
var xHn = ["claude-md", "claude-md-or-agents-md", "claude-md-and-agents-md", "managed-only"];
var nSs = (t) => xHn.find((o) => o === t) ?? pct;
export {
  qdo,
  Ydo,
  lct,
  CHn,
  zbr,
  dct,
  Qbs,
  lve,
  RHn,
  Xdo,
  Jdo,
  Kbr,
  Qdo,
  cct,
  JIt,
  Zdo,
  yJt,
  uct,
  fct,
  Zbs,
  Vbr,
  eSs,
  _Jt,
  qbr,
  pct,
  tSs,
  xHn,
  nSs
};

//# sourceMappingURL=chunk-m09zvjdt.js.map
