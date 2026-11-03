// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J, Ol } from "./chunk-wrtp8qz8.js";
import { wr, Mr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
var t = {
    claudeMd: !0,
    skills: !0,
    workflows: !1,
    plugins: !0,
    pluginMonitors: !1,
    themes: !1,
    hljsLanguages: !0,
    hooks: !0,
    statusLine: !1,
    fileSuggestion: !1,
    mcpAutoDiscovered: !1,
    mcpClaudeAi: !1,
    mcpAgentFrontmatter: !0,
    agents: !0,
    outputStyles: !1,
    lspServers: !0,
    keybindings: !1
  },
  l = {
    claudeMd: !1,
    skills: !1,
    workflows: !1,
    plugins: !1,
    pluginMonitors: !1,
    themes: !1,
    hljsLanguages: !1,
    hooks: !0,
    statusLine: !0,
    fileSuggestion: !0,
    mcpAutoDiscovered: !1,
    mcpClaudeAi: !1,
    mcpAgentFrontmatter: !1,
    agents: !1,
    outputStyles: !1,
    lspServers: !1,
    keybindings: !1
  },
  a = {
    claudeMd: !1,
    skills: !1,
    workflows: !1,
    plugins: !1,
    pluginMonitors: !1,
    themes: !1,
    hljsLanguages: !1,
    hooks: !1,
    statusLine: !0,
    fileSuggestion: !0,
    mcpAutoDiscovered: !1,
    mcpClaudeAi: !1,
    mcpAgentFrontmatter: !1,
    agents: !1,
    outputStyles: !1,
    lspServers: !1,
    keybindings: !0
  };
function mr(e, s) {
  if (a[e] && J()) return !0;
  if (Mr() && !l[e]) return !0;
  if (wr() && !s?.explicitlyRequested) return t[e];
  return !1;
}
function YC() {
  return Boolean(
    i.CLAUDE_CODE_DISABLE_CLAUDE_MDS || mr("claudeMd", { explicitlyRequested: Ol().length > 0 })
  );
}
export { mr, YC };

//# sourceMappingURL=chunk-spwjh8kb.js.map
