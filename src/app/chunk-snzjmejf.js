// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ze } from "./chunk-a16y5hcz.js";
import { KY } from "./chunk-wany0nxw.js";
import { Pd, hu, UE } from "./chunk-39ayby14.js";
import { Rk, Ole, Q4 } from "./chunk-j0tbz6ra.js";
import { UL } from "./chunk-0sy839zk.js";
import { HE } from "./chunk-q85nvv4x.js";
import { Ni } from "./chunk-e36t8chg.js";
function i(t) {
  return [t.toolAliases, t.permissions().toolAliases];
}
function rbr(t) {
  let o = i(t).flatMap((s) => Object.entries(s ?? {})),
    e = o.flatMap(([s, n]) => [...(n === KY ? [s] : []), ...(s === KY ? [n] : [])]);
  return [KY, ...e, ...o.flatMap(([s, n]) => (e.includes(n) ? [s] : []))];
}
function r(t) {
  let o = t.permissions(),
    e = rbr(t);
  return [...Pd(o), ...hu(o)].some(
    (s) =>
      Ze(s.ruleValue.ruleContent ?? "", ":").trim() === "path" &&
      e.some((n) => UE(o, { name: n }, s))
  );
}
function jDn(t, o) {
  if (
    rbr(o).some(
      (e) => Ni("tool.call", { tool: e }) || Ni("tool.check", { tool: e }, HE("tool.check"))
    ) ||
    UL("PostToolBatch") ||
    Q4("PostToolBatch", o.sessionHooksRegistry, Rk(o, "PostToolBatch", o.session.id)) ||
    ["PreToolUse", "PostToolUse"].some((e) =>
      i(o).some((s) =>
        Ole({
          hookEvent: e,
          toolName: KY,
          toolInput: t,
          tools: o.tools,
          toolAliases: s,
          sessionHooks: o.sessionHooksRegistry,
          sessionId: Rk(o, e, o.session.id)
        })
      )
    )
  )
    return "hook";
  return r(o) ? "path_rule" : void 0;
}
export { rbr, jDn };

//# sourceMappingURL=chunk-snzjmejf.js.map
