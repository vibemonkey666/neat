// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { H7e } from "./chunk-s03dfxe8.js";
var D7e = "SearchMcpRegistry",
  I0o =
    "Search the MCP connector registry by keyword to discover connectors that might help complete the task.",
  e = `Search the MCP connector registry by keyword. Call this when connecting to an MCP server might help complete the task \u2014 whether or not the user named a specific product.

Named-product examples:
- "check my Asana tasks" \u2192 keywords ["asana", "tasks", "todo"]
- "find issues in Jira" \u2192 keywords ["jira", "issues"]

Intent-based examples (no product named):
- "help me manage my tasks" \u2192 keywords ["tasks", "todo", "project management"]
- "pull up the design mockups" \u2192 keywords ["design", "figma", "mockup"]

Returns a ranked list with directoryUuid, name, description, sample tool names, installState (org-level), and enabledInChat (this session). Results include the org's custom connectors (ones the org configured that are not in the public directory) when they match the keywords. enabledInChat: false with installState: "connected" means the connector's tools are not loaded in this session, so you cannot call them; the field does not say why. There may be no connector setting for this chat alone. If the request needs the connector, tell the user it is not available here and that they can check it, and its tool permissions, in their claude.ai connector settings.`,
  n = ` enabledInChat: false with installState: "needs_reconnect" means the connector needs the user to sign in to it again; if the task needs it, call ${H7e} with its directoryUuid so the app can offer them a way to do that, and do not tell them to enable it for this chat.`,
  t =
    " If a result looks relevant and is not installed, tell the user they could connect it via claude.ai; this tool does not itself connect anything.",
  O0o = e + t,
  M0o = e + n + t;
export { D7e, I0o, O0o, M0o };

//# sourceMappingURL=chunk-mf2b7b0w.js.map
