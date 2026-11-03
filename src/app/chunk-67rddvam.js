// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { eg } from "./chunk-wrtp8qz8.js";
import { $h, SSn, q6o, wSn, bqe } from "./chunk-qakn3b85.js";
import { Nr, io } from "./chunk-928ws1pg.js";
import { i, Zn } from "./chunk-cj37hmns.js";
import { vse } from "./chunk-5rw2zfa0.js";
import { Rv, xfi } from "./chunk-4nzy53ma.js";
import { Vti, xYo, y4r, Nx, jp, kn, k } from "./chunk-ajtyjx88.js";
import { Uue } from "./chunk-at88wjsn.js";
import { qre } from "./chunk-g9040er0.js";
import { F_t } from "./chunk-mk2r9qgw.js";
import { Skt } from "./chunk-j4601ec1.js";
import { En } from "./chunk-errevp3y.js";
var c;
function v4s(e) {
  if (c === void 0) c = new Set(e);
}
function h() {
  if (c === void 0) c = new Set();
  return c;
}
var aFo = Object.freeze({
    twoStageClassifier: !0,
    sameTurnSiblingContext: !0,
    editRemovalVisibility: !0,
    editRemovalCap: 3000,
    outcomeVisibility: !1,
    repoVisibility: !0,
    gitStatusType: !0,
    gitStatusUploads: !1,
    tagConnectorWrites: !1,
    envOnboarding: !0,
    severityByModel: Object.freeze({
      "claude-sonnet-5[1m]": Object.freeze({ t1: 25, t2: 35 }),
      "claude-opus-4-8[1m]": Object.freeze({ t1: 45, t2: 35 }),
      "claude-sonnet-5": Object.freeze({ t1: 25, t2: 35 }),
      "claude-opus-4-8": Object.freeze({ t1: 45, t2: 35 })
    })
  }),
  f = Object.freeze({});
function Ty() {
  let e = k("tengu_auto_mode_config", f) ?? f;
  if (e !== f) return e;
  return jp() ? f : aFo;
}
var R = Object.freeze([]),
  E,
  p = R;
function E4s(e) {
  if (!xfi() || !T()) return R;
  if (e === E) return p;
  let t = new Set(),
    o = new Set();
  for (let r of e)
    if (r.mcpInfo !== void 0 && O(r.mcpInfo) && !F_t(r))
      (t.add(r), o.add(io(r.mcpInfo.serverName)));
  for (let r of e)
    if (!t.has(r)) {
      let n = `${r.name}_`;
      for (let a of o) if (u(n, a)) o.delete(a);
    }
  return ((E = e), (p = [...o].sort()), p);
}
function O(e) {
  switch (e.scope) {
    case "user":
      return h().has(e.serverName);
    case "claudeai":
      return e.serverType === "claudeai-proxy" && e.pluginTelemetry === void 0;
    case "managed":
    case "enterprise":
    case "dynamic":
    case "project":
    case "local":
    case "agent":
    case void 0:
      return !1;
  }
}
function s(e) {
  return e.toLowerCase().replaceAll(/[-_]+/g, "_").replaceAll("0", "o").replaceAll(/[1i]/g, "l");
}
function u(e, t) {
  let o = s(e),
    r = s(t);
  if (o.startsWith(r)) return !0;
  for (let n = r.length - 2; n <= r.length + 2; n++)
    if (n > 0 && n <= o.length && vse(o.slice(0, n), r, 2) <= 2) return !0;
  return !1;
}
function T() {
  return Ty().tagConnectorWrites === !0;
}
function k4s(e) {
  if (e.length === 0) return "";
  return `

## Claude Tag connector writes

This is a Claude Tag session: its users work with it from Slack, and their requests often reach this agent through delegation, so the request behind an action may not be visible in this transcript. The connectors configured for this session are the MCP tools named ${e.map((o) => `\`${o}*\``).join(", ")}. Those prefixes match byte for byte: a tool whose name differs in case or punctuation (for example \`-\` for \`_\`) belongs to another server and is not covered. A call to one of those tools that creates, writes, or edits content (for example, adding rows to a sheet or inserting text into a doc) is not blocked for lack of a visible user request: for these calls, a missing or delegated request is not by itself a reason to block under the User Intent Rule, scope escalation, External System Writes, or Unrequested Commit in a Connected App. Every other rule still applies in full, including: HARD BLOCK rules; exposing credentials or secrets; moving sensitive or confidential content to a destination or audience it does not belong in; deleting, clearing, or mass-modifying content; other destructive or irreversible changes; changing who can access a file or resource (sharing and permission changes); and sending messages, emails, or notifications to people. This exception covers only the tools named above. A write through any other route (a shell command, curl, a web request, or any other MCP server) is judged by the normal rules.`;
}
var m = io($h),
  y = 2000;
function w(e) {
  return qre.some((t) => {
    let o = e.startsWith(t) ? e.slice(t.length) : "";
    return !o.includes("__") && Skt.some((r) => r === o);
  });
}
var b = new Set(SSn.map(s)),
  C = s(m),
  S = s("browser_");
function v(e) {
  return [...e.matchAll(/[\w-]+/g)].every(([t]) => {
    let o = s(t);
    if (!o.includes(S)) return !0;
    let r = o.startsWith(C) ? o.slice(C.length) : o;
    return r === "" || b.has(r);
  });
}
function _() {
  if (!wSn()) return !1;
  let { value: e, source: t } = kn(q6o, !1);
  return e === !0 && t === "payload" && !Nx();
}
function M() {
  let { value: e, source: t } = kn(Vti, "");
  if (t !== "payload" || Nx()) return;
  let o = typeof e === "string" ? e.trimEnd() : e;
  return typeof o === "string" &&
    o.startsWith("- **") &&
    o.length <= y &&
    /^[\x20-\x7e]*$/.test(o) &&
    !/[<\\]/.test(o) &&
    !o.includes("cc_automode") &&
    v(o)
    ? `
${o}`
    : void 0;
}
function T4s(e, t) {
  if (!Rv()) return;
  let o = !1;
  for (let r of e)
    if (r.name.startsWith(m)) {
      if (r.mcpInfo?.serverName !== $h || r.mcpInfo.scope !== "dynamic") return;
      o = !0;
    }
  if (!o) return;
  for (let r of e) {
    if (r.name.startsWith(m)) continue;
    let n = r.name.split("__"),
      a = n.map((l, d) => n.slice(d).join("__"));
    if (
      u(`${r.name}_`, m) ||
      (!w(r.name) && n.some((l) => s(l).includes(S))) ||
      SSn.some((l) => a.some((d) => u(`${d}_`, `${l}_`)))
    )
      return;
  }
  if (!y4r(t ?? eg()) || !(Zn.CLAUDE_CODE_AUTO_MODE_REMOTE_BROWSER ?? _())) return;
  return M();
}
var g = `
- **Chrome-MCP**:`;
function A4s(e, t) {
  for (let o = e.indexOf(g); o !== -1; o = e.indexOf(g, o + 1)) {
    let r = e.indexOf(
      `
`,
      o + 1
    );
    if (r !== -1 && e.startsWith(t, r)) return !0;
  }
  return !1;
}
function C4s(e, t) {
  let o = t === void 0 ? -1 : e.indexOf(g);
  if (o === -1) return e;
  let r = e.indexOf(
      `
`,
      o + 1
    ),
    n = r === -1 ? e.length : r;
  return e.slice(0, n) + t + e.slice(n);
}
var A = new Map([
  ["browser_take_screenshot", new Set(["type", "fullPage", "scale", "region"])],
  ["browser_snapshot", new Set(["ref", "depth", "filter", "find", "max_chars", "offset"])],
  ["browser_wait_for", new Set(["time", "text", "textGone"])]
]);
function lFo(e, t, o, r) {
  let n = e.mcpInfo;
  if (n?.serverName !== $h || n.scope !== "dynamic") return !1;
  let a = A.get(n.toolName);
  if (
    a === void 0 ||
    typeof t !== "object" ||
    t === null ||
    Array.isArray(t) ||
    !Object.keys(t).every((l) => a.has(l))
  )
    return !1;
  return (
    o.mode === "auto" &&
    r === "auto" &&
    o.canAutoClassifierRun === !0 &&
    o.servedCall !== !0 &&
    !Uue() &&
    Rv() &&
    y4r(eg()) &&
    _()
  );
}
function gye() {
  return Rv() && i.CLAUDE_CODE_REMOTE && (eg() ?? []).some(xYo) && bqe();
}
function XL(e) {
  return (e.mcpInfo?.serverName ?? Nr(e.name)?.serverName) === $h && gye();
}
var dFo =
  "Tools of MCP server 'remote-browser' (the cloud browser) can only be called by the model in this session, where each call gets auto mode's safety check or a person's approval; this call would skip both.";
function ofn(e) {
  let t = En(e);
  return XL({ name: t, mcpInfo: { serverName: t } });
}
export { v4s, aFo, Ty, E4s, k4s, T4s, A4s, C4s, lFo, gye, XL, dFo, ofn };

//# sourceMappingURL=chunk-67rddvam.js.map
