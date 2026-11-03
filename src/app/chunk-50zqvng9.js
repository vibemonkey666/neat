// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { WH, Wc } from "./chunk-a16y5hcz.js";
import { wr, Mr, dy, HCt } from "./chunk-jazcqqqr.js";
import { mr } from "./chunk-spwjh8kb.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { pe, pr, Xm } from "./chunk-7c3thgax.js";
import { ud, Py, oS, Ph, X8 } from "./chunk-rve8yzwm.js";
import { $re, qD } from "./chunk-vn4qkmxw.js";
import { k0r, T0r, wO, vO, Iln } from "./chunk-6h7ejyet.js";
import { xxt, e8t, Z5e } from "./chunk-y5vkfxm0.js";
import { GO } from "./chunk-2a5hfwr3.js";
function Amr(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return { ...t, headers: Object.fromEntries(Object.keys(t.headers).map((o) => [o, ""])) };
}
function v(t) {
  let o = 0,
    n = pe(t)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let c of s) o += c.hooks?.length ?? 0;
  }
  return o;
}
function R(t) {
  switch (t.type) {
    case "command":
      return "Command";
    case "prompt":
    case "agent":
      return "Prompt";
    case "http":
      return "URL";
    case "mcp_tool":
      return "MCP tool";
    case "script":
      return t.file !== void 0 ? "Script file" : "Script";
    default:
      return "Definition";
  }
}
function E(t) {
  if (t.type === "script") return t.file ?? t.script ?? "";
  return wO(t);
}
function w(t) {
  if (t.source === "sessionHook") return !X8() && (!GO() || T0r(t.config));
  if (mr("hooks")) return !1;
  if (t.source === "builtinHook") return !0;
  if (Ph()) return !1;
  if (t.source === "policySettings") return !0;
  let o = Py() || GO();
  if (t.source === "pluginHook") {
    let n = t.pluginName ?? "",
      s = GO() ? k0r(n) : qD()?.has(n) === !0;
    return !Mr() && (!o || s);
  }
  return !o && !ud("hooks");
}
function S(t) {
  let o = t.config,
    n =
      t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings",
    s = Amr(o);
  return {
    event: t.event,
    matcher: Wc(t.matcher ?? ""),
    source: t.source,
    sourceLabel:
      t.source === "flagSettings"
        ? "Startup settings (--settings option)"
        : t.source === "policySettings"
          ? "Managed settings (set by your organization)"
          : Iln(t.source),
    ...(t.pluginName !== void 0 && { pluginName: Wc(t.pluginName) }),
    type: o.type,
    displayText: vO(o),
    commandText: WH(E(o)),
    contentLabel: R(o),
    ...("if" in o && o.if !== void 0 && { condition: Wc(o.if) }),
    ...("timeout" in o && typeof o.timeout === "number" && { timeout: o.timeout }),
    ...("statusMessage" in o &&
      o.statusMessage !== void 0 &&
      o.statusMessage !== "" && { statusMessage: Wc(o.statusMessage) }),
    ...("once" in o && o.once === !0 && { runsOnce: !0 }),
    ...(o.type === "command" &&
      (o.async === !0 || o.asyncRewake === !0) && { runsInBackground: !0 }),
    ...(!w(t) && { disabled: !0 }),
    ...(n && {
      editable: { matcher: t.matcher ?? "", config: s, ...(s !== o && { headersRedacted: !0 }) }
    })
  };
}
function h(t, o) {
  let n = [];
  for (let s of ["flagSettings", "policySettings"]) {
    let c = pe(s)?.hooks?.[t];
    if (!Array.isArray(c)) continue;
    for (let u of c) {
      if ((u.matcher ?? "") !== o) continue;
      for (let r of u.hooks) n.push(S({ event: t, config: r, matcher: o, source: s }));
    }
  }
  return n;
}
function Ous(t) {
  let o = pe("policySettings"),
    n = o?.allowManagedHooksOnly === !0,
    s = ud("hooks"),
    c = o?.disableAllHooks === !0,
    u = pr()?.disableAllHooks === !0,
    r = xxt([]),
    g = e8t(t, []),
    b = (e) =>
      e.source === "sessionHook" ||
      e.source === "pluginHook" ||
      e.source === "builtinHook" ||
      Qt(e.source),
    m = !n && !s,
    p = [],
    d = [];
  for (let e of Object.keys(r)) {
    let M = Z5e(g, e),
      a = [],
      y = new Set();
    for (let i of M)
      if ((y.add(i), a.push(...(g[e]?.[i] ?? []).filter(b).map(S)), m)) a.push(...h(e, i));
    if (m) {
      let i = new Set();
      for (let l of ["flagSettings", "policySettings"]) {
        let k = pe(l)?.hooks?.[e];
        if (!Array.isArray(k)) continue;
        for (let C of k) {
          let H = C.matcher ?? "";
          if (!y.has(H)) i.add(H);
        }
      }
      for (let l of [...i].sort()) a.push(...h(e, l));
    }
    if (a.length > 0)
      (p.push({
        name: e,
        summary: r[e].summary,
        supportsMatcher: r[e].matcherMetadata !== void 0 || a.some((i) => i.matcher !== ""),
        hookCount: a.length
      }),
        d.push(...a));
  }
  let f = Xm()
    .errors.filter((e) => e.severity !== "warning")
    .map((e) => ({ file: e.file, path: e.path, message: e.message }));
  return {
    events: p,
    hooks: d,
    eventCatalog: Object.keys(r).map((e) => ({
      name: e,
      summary: r[e].summary,
      supportsMatcher: r[e].matcherMetadata !== void 0 || e === "FileChanged"
    })),
    policy: {
      disabledByPolicy: c,
      managedOnly: n,
      pluginOnly: s,
      allDisabled: u,
      policyHookCount: v("policySettings"),
      ...(oS() && { policyUnreadable: !0 })
    },
    ...(Mr() && { safeMode: { managedHooksStillApply: $re(), exitHint: dy() } }),
    ...(wr() && mr("hooks") && { bareMode: { exitHint: HCt() } }),
    ...(f.length > 0 && { errors: f })
  };
}
export { Amr, Ous };

//# sourceMappingURL=chunk-50zqvng9.js.map
