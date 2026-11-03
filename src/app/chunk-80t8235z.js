// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J, CC, cP, Tee } from "./chunk-wrtp8qz8.js";
import { Mr } from "./chunk-jazcqqqr.js";
import { mr } from "./chunk-spwjh8kb.js";
import { Py, CQn, oS, RQn, Ph, tz } from "./chunk-rve8yzwm.js";
import { qD, FAe } from "./chunk-vn4qkmxw.js";
class jNo extends Error {}
var d = ["projectSettings", "flagSettings", "policySettings"];
function _ze(o) {
  let e = cP();
  if (e === void 0) return;
  let t = "settingsSource" in o ? d.find((n) => n === o.settingsSource) : void 0;
  if (t !== void 0) return { settingsSource: t };
  return "pluginId" in o && typeof o.pluginId === "string" && e.holds(o.pluginId)
    ? { pluginId: o.pluginId }
    : void 0;
}
function Q6n(o) {
  let e = cP();
  if (e === void 0 || Ph()) return [];
  let t = RQn();
  return d.flatMap((n) => (t && n !== "policySettings" ? [] : e.settingsHooks(n, o)));
}
var YBt =
    "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on",
  g = new Set(["prompt", "agent", "callback", "function"]);
function p(o) {
  return g.has(o.type);
}
function Z6n(o) {
  if (!J()) return o;
  return o.flatMap((e) => {
    let t = _ze(e) !== void 0,
      n = e.hooks.filter((i) => p(i) || (t && i.type === "command"));
    return n.length > 0 ? [{ ...e, hooks: n }] : [];
  });
}
var k = { command: "command", script: "script", http: "HTTP", mcp_tool: "MCP tool" };
function WFr(o) {
  return {
    permissionRequestResult: {
      behavior: "deny",
      message: `The PermissionRequest ${k[o.type] ?? o.type} hook can't run in this cloud session, so this permission request is denied.`
    },
    outcome: "blocking",
    hook: o
  };
}
function IG(o) {
  return Z6n(c(o));
}
function c(o) {
  if (mr("hooks")) return [];
  let e = CC()?.[o] ?? [];
  if (Ph()) return e.filter((s) => !("pluginRoot" in s) && !("deviceOwner" in s));
  let t = r(),
    { managedOnly: n, managedPluginIds: i } = t,
    u = RQn(),
    a = cP();
  return [
    ...(tz()?.[o] ?? []),
    ...Q6n(o),
    ...(n ? [] : (Tee()?.[o] ?? [])),
    ...e.filter((s) =>
      H(s) && a?.holds(s.pluginId) === !0
        ? !(CQn() && !i?.has(s.pluginId))
        : (!("pluginRoot" in s) || l(s.pluginId, t)) && !(u && "deviceOwner" in s)
    )
  ];
}
function lqs(o, e) {
  let t = cP();
  return Z6n(
    o.flatMap((n) => {
      if (n.skillRoot === void 0 || t?.holds(n.skillRoot) !== !0) return e ? [] : [n];
      return n.hooks.every((i) => i.type === "command") &&
        !t.standsDown(n.skillRoot) &&
        !Ph() &&
        !CQn()
        ? [{ ...n, pluginId: n.skillRoot }]
        : [];
    })
  );
}
function H(o) {
  return "pluginRoot" in o && o.hooks.every((e) => e.type === "command");
}
function WNo(o) {
  return FAe(o);
}
function r(o = Py()) {
  return { managedOnly: o, managedPluginIds: o && !Mr() ? qD() : null };
}
function l(o, { managedOnly: e, managedPluginIds: t }) {
  return !e || t?.has(o) === !0;
}
function e3n(o) {
  return l(o, r(!0));
}
function t3n(o) {
  return nye() && !oS() && l(o, r());
}
function nye() {
  return !mr("hooks") && !Ph() && !Mr();
}
export { jNo, _ze, Q6n, YBt, Z6n, WFr, IG, lqs, WNo, e3n, t3n, nye };

//# sourceMappingURL=chunk-80t8235z.js.map
