// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { Pu } from "./chunk-m5rm7nsm.js";
import { randomBytes as i } from "crypto";
function cs(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
var OIo = new Set(["local_agent", "remote_agent", "in_process_teammate", "local_workflow"]);
function x1(e) {
  return Object.values(e).some(rht);
}
function sqn(e) {
  return Object.values(e).some(
    (t) =>
      rht(t) &&
      t.status !== "paused" &&
      !(t.type === "in_process_teammate" && t.identity?.resumableAgentId === void 0) &&
      !(
        t.type === "remote_agent" &&
        (t.ultraplanPhase === "needs_input" ||
          t.ultraplanPhase === "plan_ready" ||
          (t.isUltraplan && t.restoredOnResume))
      )
  );
}
function rht(e) {
  return (
    OIo.has(e.type) &&
    !cs(e.status) &&
    !(e.type === "in_process_teammate" && e.isIdle) &&
    !(e.type === "remote_agent" && e.isLongRunning)
  );
}
function MIo(e) {
  return Object.values(e).some(tLr);
}
function tLr(e) {
  return e.type === "local_bash" && !cs(e.status);
}
var r = {
    local_bash: "b",
    local_agent: "a",
    remote_agent: "r",
    in_process_teammate: "t",
    local_workflow: "w",
    monitor_mcp: "m",
    monitor_ws: "s",
    mcp_task: "k",
    dream: "d",
    auto_mode_scan: "e",
    local_memory_import: "n"
  },
  o = "0123456789abcdefghijklmnopqrstuvwxyz";
function aY(e, t) {
  let s = r[e];
  return (
    s !== void 0 &&
    t.length === 9 &&
    t.startsWith(s) &&
    t
      .slice(s.length)
      .split("")
      .every((a) => o.includes(a))
  );
}
function DIo(e) {
  return e.length <= 1024 && /^(?:\/(?!\.{1,2}(?:\/|$))[A-Za-z0-9_.-]+)+$/.test(e);
}
function iqn(e, t) {
  return DIo(t) && t.endsWith(`/${e}.output`);
}
function NT(e) {
  let t = r[e] ?? "x",
    s = i(8),
    a = t;
  for (let n = 0; n < 8; n++) a += o[s[n] % o.length];
  return a;
}
function Kb(e, t, s, a) {
  return {
    id: e,
    type: t,
    status: "pending",
    description: s,
    toolUseId: a,
    startTime: Date.now(),
    ...(!J() && { outputFile: Pu(e) }),
    outputOffset: 0,
    notified: !1
  };
}
export { cs, OIo, x1, sqn, rht, MIo, tLr, aY, DIo, iqn, NT, Kb };

//# sourceMappingURL=chunk-eacq4pgt.js.map
