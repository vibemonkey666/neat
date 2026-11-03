// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J, xCt, Tos } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { i } from "./chunk-cj37hmns.js";
import { y1 } from "./chunk-j0tbz6ra.js";
import { V4t } from "./chunk-c57c64b0.js";
function t() {
  let e = Tos(),
    o = e === void 0 ? V4t() : void 0,
    [r, s] =
      e !== void 0
        ? [Math.max(0, Date.now() - e), "session_switch"]
        : o !== void 0
          ? [Math.max(0, Date.now() - o), "spawn_stamp"]
          : [J() ? void 0 : Math.round(process.uptime() * 1000), "process_start"];
  return {
    msSinceSessionStart: r,
    startAnchor: c(s),
    isRemoteSession: Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID)
  };
}
function n(e) {
  let o = xCt();
  if (o.has(e)) return !1;
  return (o.add(e), !0);
}
function l1n(e, o) {
  if (e === 0 || !n("tools_added")) return;
  a("tengu_chrome_tools_added", { ...t(), toolCount: e, discoverySource: c(o) });
}
function d1n(e) {
  if (!n("tool_attempted")) return;
  a("tengu_chrome_tool_attempted", { ...t(), ...(e && { messageClientPlatform: y1(e) }) });
}
function URs(e) {
  if (!n("bridge_connected")) return;
  a("tengu_chrome_bridge_connected", { ...t(), bridgeStatus: ce(e) });
}
function BRs() {
  if (!n("extension_connected")) return;
  a("tengu_chrome_extension_connected", t());
}
function jRs(e) {
  a("tengu_chrome_tool_call_disconnected", { ...t(), tokenAccountMismatch: e });
}
export { l1n, d1n, URs, BRs, jRs };

//# sourceMappingURL=chunk-e0nmwvd2.js.map
