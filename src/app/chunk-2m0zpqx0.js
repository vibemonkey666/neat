// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F } from "./chunk-wrtp8qz8.js";
import { Fw, vR } from "./chunk-5rw2zfa0.js";
import { ime } from "./chunk-34151x92.js";
function jco(t) {
  let r = t[0];
  if (!r) return null;
  let e = t.length;
  if (t.every((n) => n.type === r.type))
    switch (r.type) {
      case "local_bash": {
        let n = F(t, (s) => s.type === "local_bash" && s.kind === "monitor"),
          o = e - n,
          a = [];
        if (o > 0) a.push(o === 1 ? "1 shell" : `${o} shells`);
        if (n > 0) a.push(n === 1 ? "1 monitor" : `${n} monitors`);
        return a.join(", ");
      }
      case "in_process_teammate": {
        let n = new Set(t.map((o) => (o.type === "in_process_teammate" ? o.identity.teamName : "")))
          .size;
        return n === 1 ? "1 team" : `${n} teams`;
      }
      case "local_agent":
        return e === 1 ? "1 local agent" : `${e} local agents`;
      case "remote_agent": {
        if (e === 1 && r.isUltraplan)
          switch (r.ultraplanPhase) {
            case "plan_ready":
              return `${vR} ultraplan ready`;
            case "needs_input":
              return `${Fw} ultraplan needs your input`;
            default:
              return `${Fw} ultraplan`;
          }
        if (t.every((n) => n.type === "remote_agent" && n.remoteTaskType === "remote-workflow"))
          return e === 1
            ? `${Fw} 1 remote dynamic workflow`
            : `${Fw} ${e} remote dynamic workflows`;
        return e === 1 ? `${Fw} 1 cloud session` : `${Fw} ${e} cloud sessions`;
      }
      case "local_workflow":
        return e === 1 ? "1 background dynamic workflow" : `${e} background dynamic workflows`;
      case "monitor_mcp":
      case "monitor_ws": {
        if (t.every(ime))
          return e === 1 ? "1 Artifact comment monitor" : `${e} Artifact comment monitors`;
        return e === 1 ? "1 monitor" : `${e} monitors`;
      }
      case "mcp_task":
        return e === 1 ? "1 MCP task" : `${e} MCP tasks`;
      case "dream":
        return "dreaming";
      case "auto_mode_scan":
        return "auto-mode scan";
      case "local_memory_import":
        return r.windowsPlanned > 0
          ? `memory import ${r.windowsDone}/${r.windowsPlanned}`
          : "memory import";
      default:
    }
  return i(e);
}
function dOt(t, r) {
  return r === 0 ? jco(t) : i(t.length + r);
}
function i(t) {
  return `${t} background ${t === 1 ? "task" : "tasks"}`;
}
function Wco(t) {
  if (t.length !== 1) return !1;
  let r = t[0];
  return r.type === "remote_agent" && r.isUltraplan === !0 && r.ultraplanPhase !== void 0;
}
export { jco, dOt, Wco };

//# sourceMappingURL=chunk-2m0zpqx0.js.map
