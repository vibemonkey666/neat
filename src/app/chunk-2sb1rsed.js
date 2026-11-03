// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Cn } from "./chunk-4kxznmzw.js";
import { mfe } from "./chunk-5rw2zfa0.js";
function LJr(t, n) {
  let e = Cn(t),
    r = n.map(Cn).sort(),
    s = mfe(
      e,
      r.map((d) => ({ name: d })),
      { maxEditDistance: 2 }
    );
  if (s)
    return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
  if (r.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8,
    a = r.slice(0, o).join(", "),
    i = r.length > o ? ` (and ${r.length - o} more \u2014 run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${a}${i}`;
}
function VAn(t, n, e) {
  if (e && n.length === 0)
    return `No MCP server named "${Cn(t)}". ${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."}`;
  return (
    LJr(t, n) +
    (e
      ? ` (${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."})`
      : "")
  );
}
export { LJr, VAn };

//# sourceMappingURL=chunk-2sb1rsed.js.map
