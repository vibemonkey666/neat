// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, L, q, Om } from "./chunk-wrtp8qz8.js";
import { I } from "./chunk-a16y5hcz.js";
import { hs, un } from "./chunk-wr0p4ndg.js";
import { T4 } from "./chunk-tqd8rcc8.js";
import { i } from "./chunk-cj37hmns.js";
import { lLr, lDe, vy, dDe, ahe, dFt, van } from "./chunk-yyq6mj0n.js";
import { pp } from "./chunk-j0tbz6ra.js";
import { bht } from "./chunk-fnsjs1v2.js";
import { vY, bBt, hx } from "./chunk-hp7h93my.js";
import { ime, Xct } from "./chunk-34151x92.js";
import { jco } from "./chunk-2m0zpqx0.js";
import { Bct, sBe, gvs } from "./chunk-40d7g4g3.js";
function SIe() {
  return !i.CLAUDE_DISABLE_ADOPT;
}
var u = 50;
function l(e) {
  let o = [];
  for (let t of Om()) {
    if (e && !e(t)) continue;
    o.push({ label: "scheduled task", detail: `${h(t)} \xB7 ${hs(t.prompt, u, !0)}` });
  }
  return o;
}
function h(e) {
  if (e.recurring) return hx(e.cron);
  let o = vY(e.cron),
    t = o && bBt(o, new Date(e.createdAt), { oneShot: !0 });
  if (!t) return hx(e.cron);
  let r = Math.max(0, t.getTime() - Date.now());
  return `Runs once in ${un(r, { mostSignificantOnly: !0 })}`;
}
function NSs(e, { includeDream: o = !1, mcpClients: t } = {}) {
  let r = [];
  for (let n of Object.values(e)) {
    if (!vy(n) || n.type === "remote_agent") continue;
    if (!o && n.type === "dream") continue;
    if (n.type === "monitor_ws" && n.ambient) continue;
    if (ahe(n)) continue;
    if (dFt(n)) continue;
    if (g(n, t)) continue;
    if (pp(n) && n.stopsOnExit) continue;
    r.push({ label: lDe(n.type), detail: hs(n.description, u, !0) });
  }
  return (r.push(...l()), r);
}
var b = {
  agent: "subagent",
  workflow: "workflow",
  shell: "shell",
  monitor: "monitor",
  mcp: "MCP task"
};
function $Ss(e, o) {
  let t = bht(),
    { items: r, kinds: n } = t,
    a = [];
  for (let s of r) {
    if (s.kind === "todo" || s.doneAt !== void 0 || s.stopsOnExit) continue;
    if (g(e?.[s.id], o)) continue;
    a.push({ label: b[s.kind], detail: hs(s.label, u, !0) });
  }
  if (n.includes("auto_mode_scan"))
    a.push({ label: lLr.auto_mode_scan, detail: "environment scan for /auto-mode-setup" });
  if (n.includes("local_memory_import"))
    a.push({
      label: lLr.local_memory_import,
      detail: "still reading local memory notes; running the command again later continues it"
    });
  return (a.push(...l()), a);
}
function S(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && !ime(e);
}
function m(e) {
  return Object.values(e)
    .filter(vy)
    .filter((o) => o.type !== "remote_agent" && o.type !== "dream")
    .filter((o) => !S(o));
}
function p(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if (dDe(e)) return !1;
  if (
    e.type === "in_process_teammate" &&
    e.evictAfter === 0 &&
    e.currentWorkAbortController === void 0 &&
    ahe(e)
  )
    return !1;
  if (e.type === "remote_agent" || e.type === "dream") return !1;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === !0) return !1;
      return e.sidecarSessionId !== q() || e.sidecarProjectDir !== T4();
    }
    return !1;
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return !1;
  return !0;
}
function T(e) {
  return ime(e) && e.frameLive !== void 0;
}
function Bco() {
  return SIe() && !i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function y(e) {
  return ime(e) && Xct(e);
}
function FSs(e) {
  return Object.values(e).some(y) || gvs() || sBe().size > 0;
}
function QUe(e) {
  return Object.values(e).some(p);
}
function JB(e, { sessionCrons: o = !0 } = {}) {
  let t = m(e),
    r = o ? Om().length : 0,
    n = L(t.map(f)),
    a = new Set(t.flatMap((c) => (T(c) ? [c.frameLive.slug] : []))),
    s = !SIe() ? 0 : F(L([...Bct(), ...sBe()]), (c) => !a.has(c));
  if (s > 0 && !n.includes("artifact_watch")) n.push("artifact_watch");
  let d = Bco() ? a.size + s : 0;
  if (r > 0) n.push("session_cron");
  let k = F(Object.values(e), van);
  return {
    count: t.length + r + s,
    restartableCount: k,
    kinds: n,
    drainableMonitors: d,
    carriedMonitors: a.size + s
  };
}
function f(e) {
  if (e.type === "monitor_ws" && e.ambient) return "artifact_watch";
  return pp(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function A3e(e, o) {
  let t = m(e),
    r = l(o?.cronFilter),
    n = t.length + r.length,
    a = L(t.map(f));
  if (r.length > 0) a.push("session_cron");
  let s = [jco(t), r.length ? `${r.length} ${I(r.length, "loop")}` : ""];
  return { count: n, kinds: a, summary: s.filter(Boolean).join(", ") };
}
function USs() {
  let { tasks: e } = bht();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${I(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
function g(e, o) {
  if (e?.type !== "mcp_task" || p(e)) return !1;
  let t = o?.find((r) => r.name === e.serverName)?.config.type;
  return t !== void 0 && t !== "stdio" && t !== "sdk";
}
export { SIe, NSs, $Ss, Bco, FSs, QUe, JB, A3e, USs };

//# sourceMappingURL=chunk-1axdbe50.js.map
