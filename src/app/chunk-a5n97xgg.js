// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { AP, BJ } from "./chunk-j0tbz6ra.js";
import { pr } from "./chunk-7c3thgax.js";
function vae(t, e) {
  if (e) return t ? `agent:builtin:${t}` : "agent:default";
  return t ? `agent:custom:${t}` : "agent:custom";
}
function H3e() {
  let e = pr()?.outputStyle ?? AP;
  if (e === AP) return "repl_main_thread";
  return Object.hasOwn(BJ, e)
    ? `repl_main_thread:outputStyle:${e}`
    : "repl_main_thread:outputStyle:custom";
}
export { vae, H3e };

//# sourceMappingURL=chunk-a5n97xgg.js.map
