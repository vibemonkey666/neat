// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
function vFe() {
  return (
    Ne(process.env.CLAUDE_CODE_REMOTE) &&
    String(process.env.CLAUDE_CODE_ENVIRONMENT_KIND ?? "").trim() === ""
  );
}
var s =
  /^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;
function sd() {
  {
    let e = process.argv;
    if (e[2] !== "mcp" || e[3] !== "serve") return !1;
    let [, , t, ...r] = e.slice(2),
      n =
        t === "--transport=http" ? r : t === "--transport" && r[0] === "http" ? r.slice(1) : void 0;
    return vFe() && n !== void 0 && n.every((o) => s.test(o));
  }
  return !1;
}
export { vFe, sd };

//# sourceMappingURL=chunk-6jbh8yja.js.map
