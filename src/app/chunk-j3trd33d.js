// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uu } from "./chunk-wrgxzjpr.js";
import { NT, Kb } from "./chunk-eacq4pgt.js";
function Wte(t, e) {
  return `${uu(t) ?? ""}/${uu(e) ?? ""}`;
}
function Bxs(t) {
  return uu(t) ?? "";
}
function z1n({
  serverName: t,
  toolName: e,
  mcpTaskId: o,
  toolUseId: s,
  pollIntervalMs: a,
  abortController: n,
  protocol: p,
  driveAbortController: i,
  ttlExpiresAt: c
}) {
  let r = NT("mcp_task");
  return {
    ...Kb(r, "mcp_task", Wte(t, e), s),
    type: "mcp_task",
    status: "running",
    serverName: t,
    toolName: e,
    mcpTaskId: o ?? r,
    mcpStatus: "working",
    pollIntervalMs: a,
    abortController: n,
    protocol: p,
    driveAbortController: i,
    ttlExpiresAt: c
  };
}
export { Wte, Bxs, z1n };

//# sourceMappingURL=chunk-j3trd33d.js.map
