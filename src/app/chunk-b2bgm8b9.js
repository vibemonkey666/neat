// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { PWn, Upt } from "./chunk-j0tbz6ra.js";
var l = /^[CDG][A-Z0-9]{6,}$/;
function vbo(e) {
  let n = e.replace(/^#/, "");
  return l.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
}
var t = new Set(["slack_send_message", "slack_post_message"]),
  Ebo = "mcp-slack-send";
function aBn(e) {
  return t.has(e);
}
function eRs(e) {
  let n = e.channel_id ?? e.channel;
  if (typeof n !== "string") return null;
  let r = PWn(n);
  if (!r) return null;
  return { label: `#${r.replace(/^#/, "")}`, url: vbo(n) };
}
function lBn() {
  return {
    uiTableKey: Ebo,
    userFacingName() {
      return "Slacked";
    },
    renderToolUseMessage(e, n) {
      return n.verbose ? Upt(e, n) : "";
    }
  };
}
export { vbo, Ebo, aBn, eRs, lBn };

//# sourceMappingURL=chunk-b2bgm8b9.js.map
