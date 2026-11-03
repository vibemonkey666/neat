// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wi } from "./chunk-d54avynm.js";
import { Ir } from "./chunk-5rw2zfa0.js";
import { UD } from "./chunk-14k612dp.js";
import { Sii } from "./chunk-qakn3b85.js";
import { Nrr } from "./chunk-at88wjsn.js";
var t = "(value set by your organization)";
function Y6e(r, e) {
  if (e !== "managed") return r;
  return { ...r, url: Sii(r.url) ?? t, ...(r.headers && { headers: Ir(r.headers, () => t) }) };
}
function Idt(r) {
  return r === "cached" ? "pending" : r;
}
function eDn(r) {
  return r.map((e) => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http")
      o = Y6e(
        { type: e.config.type, url: e.config.url, headers: e.config.headers },
        e.config.scope
      );
    else if (e.config.type === "claudeai-proxy")
      o = { type: "claudeai-proxy", url: e.config.url, id: e.config.id };
    else if (e.config.type === "stdio" || e.config.type === void 0)
      o = { type: "stdio", command: e.config.command, args: e.config.args };
    return {
      name: e.name,
      status: Idt(e.type),
      config: o,
      scope: e.config.scope,
      source: UD(e.name, e.config),
      serverInfo: wi(e) ? e.serverInfo : void 0,
      error: e.type === "failed" ? e.error : void 0,
      error_code: Nrr(e)
    };
  });
}
export { Y6e, Idt, eDn };

//# sourceMappingURL=chunk-e40v5eqb.js.map
