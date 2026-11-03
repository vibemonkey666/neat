// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Hte } from "./chunk-1bh1hcpt.js";
import { cst } from "./chunk-dc0nzty2.js";
import { OG } from "./chunk-36ftx0qt.js";
import { tne } from "./chunk-j0tbz6ra.js";
import { H } from "./chunk-p8tprgqa.js";
import { r4t, o4t } from "./chunk-7zgz07kc.js";
function f(r) {
  return r.replace(/^www\./i, "");
}
function Oft(r) {
  if (r.startsWith("[")) {
    let n = r.indexOf("]");
    return n === -1 ? r : r.slice(0, n + 1);
  }
  let e = r.lastIndexOf(":");
  return e === -1 ? r : r.slice(0, e);
}
function f1(r) {
  let e = r4t(r)
      .replace(/\.+(?=$|:)/, "")
      .toLowerCase(),
    n = Oft(e),
    o = e.slice(n.length),
    t = (o4t(n) || n).replace(/\.+$/, "");
  return f(t + o);
}
var d = new RegExp(`^${OG}\\(([^)]+)\\)$`);
function h9e(r) {
  let e = new Set(),
    n = [],
    o = new Set(),
    t = new Map();
  return (
    u(r.alwaysDenyRules, o, t),
    u(r.alwaysAllowRules, e, t, n, o),
    { allowed: e, denied: o, allowedRaw: n, sourceOf: t }
  );
}
function SAr(r, e) {
  return r.has(e) || r.has(Oft(e));
}
function Mft(r, e) {
  let n = f1(e);
  if (!SAr(r.denied, n)) return;
  return {
    behavior: "deny",
    message: `Claude in Chrome is denied on ${e}.`,
    decisionReason: {
      type: "rule",
      rule: {
        source: r.sourceOf.get(n) ?? r.sourceOf.get(Oft(n)) ?? "session",
        ruleBehavior: "deny",
        ruleValue: { toolName: OG, ruleContent: e }
      }
    }
  };
}
function u(r, e, n, o, t) {
  for (let [a, l] of Object.entries(r))
    for (let c of l ?? []) {
      let s = d.exec(c);
      if (s?.[1]) {
        let i = f1(s[1]);
        if (t && SAr(t, i)) continue;
        if (!e.has(i)) (e.add(i), n.set(i, a), o?.push(s[1]));
      }
    }
}
function s1n(r) {
  return ["back", "forward"].includes(r.trim().toLowerCase());
}
var p = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;
function EHt(r) {
  let e = r.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""),
    n;
  try {
    if (((n = new URL(e)), n.protocol !== "http:" && n.protocol !== "https:")) {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0;
    }
  } catch {}
  if (!n) {
    if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) return;
    try {
      n = new URL(`https://${e}`);
    } catch {
      return;
    }
    if (p.test(cst(e))) return;
  }
  if (!n.host || n.username || n.password) return;
  return { host: n.host, url: n.href };
}
function i1n(r) {
  let e = new URL(r.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host;
}
function a1n(r) {
  let e = EHt(r);
  return e && { ...e, host: i1n(e) };
}
function FRs(r) {
  if (!Array.isArray(r.actions)) return;
  for (let e of r.actions) {
    if (!H(e) || typeof e.name !== "string") continue;
    let n = H(e.input) ? e.input : {};
    if (Hte.has(e.name) && tne(e.name, n)) continue;
    if (
      e.name === "navigate" &&
      typeof n.url === "string" &&
      (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")
    )
      continue;
    if ((e.name === "navigate" && typeof n.url === "string") || typeof n.tabId === "number")
      return { toolName: e.name, input: n };
  }
  return;
}
export { Oft, f1, h9e, SAr, Mft, s1n, EHt, i1n, a1n, FRs };

//# sourceMappingURL=chunk-9c9qtnk1.js.map
