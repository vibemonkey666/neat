// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wM, dn } from "./chunk-9z5ybxhe.js";
import { Lt, Em, _u, bH, MSn, DSn, Jt, nB, SH, xn, WSn, Cqe, hZ } from "./chunk-r1dvrqha.js";
import { As } from "./chunk-ajtyjx88.js";
import { lA } from "./chunk-1e5yp9hx.js";
import { ym } from "./chunk-khq9hq2s.js";
import { sh, ae } from "./chunk-ar6ynjt8.js";
import { U2e, oo, Va, bp, YT } from "./chunk-39ayby14.js";
import { b7n, eE, i_e } from "./chunk-fh50nzzj.js";
import { y3, Gft } from "./chunk-etxcb881.js";
import { zun } from "./chunk-nrb78set.js";
import { qn, OQn } from "./chunk-0ex22bw7.js";
var _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;
function P(n) {
  let e = n.match(_);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2]
    .toLowerCase()
    .replace(/:(?:443|80)$/, "")
    .replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3] ?? ""}`;
}
function wDt(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = Cqe(e),
    l = new Set([...WSn(e), r, `${r}/`]);
  if (typeof t === "string") l.add(nB(t).trim());
  for (let [u, a] of n) {
    let i = u.indexOf(":");
    if (i <= 0) continue;
    let s = u.slice(0, i).trim(),
      c = u.slice(i + 1).trim();
    if (s !== o || c === "") continue;
    let f = SH(c.replace(/\*$/, ""));
    if (f?.slug === e.slug && f.env === e.env) return a;
    let p = new Set([c, P(c)]);
    for (let A of p) for (let y of l) if (wM(A, y)) return a;
  }
  return null;
}
function E(n) {
  let e = Jt(n),
    t = SH(n);
  return [
    ...(e !== null ? [e] : []),
    ...(t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [t] : [])
  ];
}
function T(n, e) {
  if (n.size === 0 || typeof e !== "object" || e === null) return null;
  let { url: t, type_url: o, from_url: r, files: l } = e,
    u =
      typeof l === "object" && l !== null && !Array.isArray(l)
        ? Object.values(l).map((i) => (typeof i === "object" && i !== null ? i.artifact : void 0))
        : [],
    a = [
      [t, ["url"]],
      [o, ["url", "type_url"]],
      [r, ["url", "from_url"]],
      ...u.map((i) => [i, ["url", "from_url"]])
    ];
  for (let [i, s] of a) {
    if (typeof i !== "string") continue;
    for (let c of E(i))
      for (let f of s) {
        let p = wDt(n, c, i, f);
        if (p !== null) return p;
      }
  }
  return null;
}
var vDt = { comments: Em, data: _u, check: bH };
function cOe(n, e) {
  let t = e?.action,
    o = typeof t === "string" && Object.hasOwn(y3, t) ? y3[t] : void 0;
  return o === void 0
    ? void 0
    : { tool: { name: vDt[o], ruleContentField: n.ruleContentField }, input: Gft(o, e) };
}
function eft(n, e, t, o) {
  let r = cOe(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? oo(n, r.tool) : Va(n, r.tool)) ?? bp(n, r.tool, r.input, o);
}
function IF(n, e, t) {
  let o = cOe({ name: Lt }, e)?.tool.name;
  for (let r of [Lt, ...(o ? [o] : [])]) {
    let l = T(YT(n, r, t), e);
    if (l !== null) return l;
  }
  return null;
}
function pen(n, e, t, o) {
  let r = cOe(e, t);
  return bp(n, e, t, o) ?? (r === void 0 ? null : bp(n, r.tool, r.input, o));
}
var w = { name: qn, mcpInfo: void 0, ruleContentField: OQn },
  d = { name: Lt, mcpInfo: void 0, ruleContentField: MSn };
function m(n, e, t, o) {
  let r = e ?? DSn;
  return {
    webFetch: { url: n, prompt: r, offset: void 0 },
    artifact: {
      action: "read",
      url: n,
      prompt: r,
      ...(t !== void 0 && { page: t }),
      ...(o !== void 0 && { version: o })
    }
  };
}
var hTr = new Set([
  "read",
  "read_db",
  "comments",
  "list_files",
  "read_file",
  "list_assets",
  "read_asset",
  "get_endpoints",
  "call_endpoint",
  "run_script"
]);
function B8e(n, e, t, o, r) {
  let l = r === void 0 ? null : bp(n, w, m(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let u = YT(n, qn, o);
  if (u.size === 0) return null;
  let a = new Set([new URL(xn(e)).hostname, new URL(Cqe(e)).hostname]);
  if (typeof t === "string")
    try {
      a.add(new URL(t).hostname);
    } catch {}
  for (let i of a) {
    let s = zun(u, `domain:${i}`);
    if (s !== void 0) return s;
  }
  return null;
}
function nb(n, e, t, o, r = {}) {
  let l = cOe({ name: Lt }, { action: r.action })?.tool.name,
    u = B8e(n, e, t, o, r.read);
  if (u !== null) return u;
  for (let a of [Lt, ...(l ? [l] : [])]) {
    let i = YT(n, a, o),
      s = wDt(i, e, t) ?? (r.copySource === !0 ? wDt(i, e, t, "from_url") : null);
    if (s !== null) return s;
  }
  return null;
}
function g(n) {
  if (!U2e.some((t) => (n.alwaysDenyRules[t]?.length ?? 0) > 0)) return n;
  let e = { ...n.alwaysDenyRules };
  for (let t of U2e) delete e[t];
  return { ...n, alwaysDenyRules: e };
}
function R(n, e, t, o) {
  let { action: r, ...l } = t;
  return (r === void 0 ? null : bp(g(n), e, { action: r }, o)) ?? bp(n, e, l, o);
}
function s_o(n, e, t, o, r = {}) {
  let l = g(n);
  return (
    (o === "deny" ? oo(l, d) : Va(l, d)) ??
    R(n, d, m(t, r.prompt, r.page, r.version).artifact, o) ??
    wDt(YT(n, Lt, o), e, t)
  );
}
function CT(n, e, t, o, r) {
  let l = {
      ...r.fields,
      ...(r.read !== void 0
        ? m(t, r.read.prompt, r.read.page, r.read.version).artifact
        : { ...(typeof r.action === "string" && { action: r.action }), url: xn(e) })
    },
    u = cOe(d, l),
    a = g(n),
    i = (s) =>
      o === "deny" ? oo(a, s) : r.wholeToolAskAnswered === !0 && s.name === Lt ? null : Va(a, s);
  return (
    i(d) ??
    R(n, d, l, o) ??
    (u === void 0 ? null : (i(u.tool) ?? R(n, u.tool, u.input, o))) ??
    nb(n, e, t, o, r)
  );
}
function rEe(n) {
  return `the ${hZ(dn(n.ruleValue))} deny rule from ${lA(n.source)}`;
}
var tft =
  'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';
function sUn(n, e, t, o = {}) {
  let r = ae(n),
    l = { action: "read", read: o };
  return (
    k(n, e) &&
    !(ym(e.slug) && !As(n.agentContext)) &&
    CT(r, e, t, "deny", l) === null &&
    CT(r, e, t, "ask", l) === null
  );
}
function k(n, e) {
  let { mode: t, modeBeforeRewrite: o } = ae(n);
  return t !== "plan" && ((t !== "auto" && o !== "auto") || eE(e) || i_e(e.slug));
}
function i_o(n, e, t, o = {}) {
  return ae(n).mode !== "dontAsk" && !sh(n) && sUn(n, e, t, o);
}
function EDt(n, e, t, o = {}) {
  return b7n(n.artifactRegistries, e.slug) && sUn(n, e, t, o);
}
export { wDt, vDt, cOe, eft, IF, pen, hTr, B8e, nb, s_o, CT, rEe, tft, sUn, i_o, EDt };

//# sourceMappingURL=chunk-p6azhqzg.js.map
