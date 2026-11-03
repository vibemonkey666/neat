// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var BL = "WaitForMcpServers";
function A0o() {
  return [
    "Wait for MCP servers that are still connecting and whose tools are not",
    "yet in your tool list. Pass `servers` to wait for specific ones, or omit",
    "it to wait for all pending servers (once none is pending, a call without",
    "`servers` reports any server that failed to connect or is not configured).",
    "",
    ...[
      "If the user's request needs tools from a still-connecting server, call this",
      "tool to wait for it. Once it connects, its tools will be added to your tool",
      "list and you can use them directly. Returns ready=true when servers are",
      "ready, ready=false if they failed to connect, need authentication, or are",
      "disabled."
    ],
    "",
    "You do not need to ask the user for confirmation to use this tool."
  ].join(`
`);
}
function Zh(e) {
  return e.name?.startsWith("mcp__") || e.isMcp === !0;
}
function M7e(e) {
  return e.mcpInfo?.serverName ?? (e.name?.startsWith("mcp__") ? e.name.split("__")[1] : void 0);
}
export { Zh, M7e, BL, A0o };

//# sourceMappingURL=chunk-n32nf3yj.js.map
