// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var mZt = "ListConnectors",
  Eho =
    "List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.";
var kho =
    `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector's tools are not loaded in this session, so you cannot call them; the field does not say why. There may be no connector setting for this chat alone. If the request needs the connector, tell the user it is not available here and that they can check it, and its tool permissions, in their claude.ai connector settings.` +
    " To recommend connectors the user does NOT have yet, use SearchMcpRegistry \u2192 SuggestConnectors instead; this tool does not itself connect anything.",
  Tho =
    `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector's tools are not loaded in this session, so you cannot call them; the field does not say why. There may be no connector setting for this chat alone. If the request needs the connector, tell the user it is not available here and that they can check it, and its tool permissions, in their claude.ai connector settings.` +
    ' enabledInChat: false with installState: "needs_reconnect" means the connector needs the user to sign in to it again \u2014 tell them to do that from the connector card, or from their connector settings if they see no card, and do not tell them to enable it for this chat.' +
    " To recommend connectors the user does NOT have yet, use SearchMcpRegistry \u2192 SuggestConnectors instead; this tool does not itself connect anything.";
export { mZt, Eho, kho, Tho };

//# sourceMappingURL=chunk-fh1rh69h.js.map
