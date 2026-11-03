// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Vd, Sqe, vrt, Yue, Mor, ESn } from "./chunk-qakn3b85.js";
import { Xvn, Jvn } from "./chunk-gg53p5cf.js";
import { e2s } from "./chunk-ybr49gcx.js";
import { G3, fm } from "./chunk-j0tbz6ra.js";
function m(t) {
  if (!("scope" in t)) return;
  let e = t.scope;
  return G3.find((n) => n === e);
}
function hD(t, e, n) {
  let r = Vd(e),
    i = S(t, e);
  if (i === void 0 && m(e)) return n?.detail === "origin" ? void 0 : Yue(e);
  return Mor({ authoredUnexpanded: i, expanded: e, cliOwned: r, detail: n?.detail });
}
function S(t, e) {
  let n = m(e);
  if (n === void 0) return;
  try {
    let r = fm(n, { expandVars: !1 }).servers[t];
    return r && Obo(r, e) ? r : void 0;
  } catch {
    return;
  }
}
function M(t) {
  if (!URL.canParse(t)) return !1;
  let { protocol: e } = new URL(t);
  return e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}
function Obo(t, e) {
  if ((t.type ?? "stdio") !== (e.type ?? "stdio")) return !1;
  let n = Sqe(t),
    r = Sqe(e);
  if (n !== null || r !== null) {
    if (
      !(() => {
        if (n === null || r === null) return !1;
        let l = Jvn(n),
          o = ESn(n, l),
          s = ESn(r),
          g = (C) => Xvn(C).every((y) => y === "");
        if (g(n)) return !0;
        if (o.scheme === "" && g(o.authority)) return f(n, r);
        let a = ESn(l).authority.lastIndexOf("@"),
          d = s.authority.lastIndexOf("@");
        if ((a === -1) !== (d === -1)) return !1;
        if (o.scheme === "") return s.scheme === "" && !M(r) && f(n, r);
        if (s.scheme === "") return !1;
        return (
          f(o.scheme.toLowerCase(), s.scheme.toLowerCase()) &&
          (a === -1 || f(o.authority.slice(0, a), s.authority.slice(0, d))) &&
          f(o.authority.slice(a + 1), s.authority.slice(d + 1)) &&
          f(o.rest, s.rest)
        );
      })()
    )
      return !1;
  }
  let i = vrt(t),
    c = vrt(e);
  if (i !== null || c !== null) {
    if (i === null || c === null || i.length !== c.length || !i.every((u, l) => f(u, c[l] ?? "")))
      return !1;
  }
  return h(p(t, "headers"), p(e, "headers")) && h(p(t, "env"), p(e, "env"));
}
function p(t, e) {
  let n = t[e];
  return n && typeof n === "object" ? n : void 0;
}
function h(t, e) {
  let n = Object.entries(t ?? {}),
    r = e ?? {};
  if (n.length !== Object.keys(r).length) return !1;
  return n.every(([i, c]) => typeof r[i] === "string" && f(c, r[i]));
}
function f(t, e) {
  let n = Xvn(t);
  if (n.length === 1) return t === e;
  let r = n[0] ?? "",
    i = n.at(-1) ?? "";
  if (!e.startsWith(r) || !e.endsWith(i)) return !1;
  let c = r.length,
    u = e.length - i.length;
  for (let l = 1; l < n.length - 1; l++) {
    let o = n[l] ?? "",
      s = e.indexOf(o, c);
    if (s === -1 || s + o.length > u) return !1;
    c = s + o.length;
  }
  return c <= u;
}
function lu(t, e, n) {
  try {
    return e2s(n, e, hD(t, e, { detail: "origin" }) ?? Yue(e), S(t, e));
  } catch {
    return "[mcp error detail unavailable: redaction failed]";
  }
}
export { hD, Obo, lu };

//# sourceMappingURL=chunk-egk1yzkg.js.map
