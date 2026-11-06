// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { En } from "./chunk-errevp3y.js";
var za = "claude-in-chrome",
  Dor = "javascript_tool";
function vv(e) {
  return En(e) === za;
}
var t = "--claude-in-chrome-mcp";
function Z6o(e) {
  if (e.type !== void 0 && e.type !== "stdio") return !1;
  return (e.command?.includes(t) ?? !1) || (e.args?.some((o) => o.includes(t)) ?? !1);
}
var wii = ["file_upload", "browser_batch"],
  Skt = [
    Dor,
    "read_page",
    "find",
    "form_input",
    "computer",
    "browser_batch",
    "navigate",
    "resize_window",
    "gif_creator",
    "upload_image",
    "get_page_text",
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "read_console_messages",
    "read_network_requests",
    "shortcuts_list",
    "shortcuts_execute",
    "file_upload",
    "switch_browser",
    "list_connected_browsers",
    "select_browser"
  ],
  IRe =
    "file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.",
  vii =
    "Nothing was uploaded, and nothing else in this call ran. An upload may not run without a person's approval, and uploads can't be approved here yet. Repeating the call won't help. Ask the user to choose the file in their browser themselves.",
  Hor =
    "file_upload cannot run inside browser_batch in this session, and nothing in this call ran. If file_upload is among your tools, call it on its own.";
function ORe() {
  return {
    type: "stdio",
    command: process.execPath,
    args: [...__sourceInvocation_ee1f812b56146df6.cliPrefix(), t],
    scope: "dynamic"
  };
}
export { za, Dor, vv, Z6o, wii, Skt, IRe, vii, Hor, ORe };

import * as __sourceInvocation_ee1f812b56146df6 from "./__invocation.mjs";

//# sourceMappingURL=chunk-j4601ec1.js.map
