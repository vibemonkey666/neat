// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { tn } from "./chunk-wany0nxw.js";
import { Upt } from "./chunk-j0tbz6ra.js";
import { Ume, $xs } from "./chunk-7pzqzh23.js";
import { o, kM, T, u, $e } from "./chunk-0bqrj5ah.js";
var r = "",
  s = "",
  KTr = "mcp",
  dBn = "mcp-display-only";
var c = p(() => u({}).passthrough()),
  kbo = p(() =>
    $e([o(), T(u({ type: o() }).passthrough()), kM()]).describe("MCP tool execution result")
  );
function i(e) {
  if (!Array.isArray(e) || !e.some(a)) return e;
  return e.map((t) => (a(t) ? { ...t, source: { ...t.source, data: "" } } : t));
}
function m(e) {
  return Array.isArray(e) && e.some(n) ? e.filter((t) => !n(t)) : e;
}
function n(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}
function a(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}
var s1e = tn({
  isMcp: !0,
  isOpenWorld() {
    return !1;
  },
  name: "mcp",
  uiTableKey: KTr,
  backgrounding: "self",
  maxResultSizeChars: 1e5,
  async description() {
    return s;
  },
  async prompt() {
    return r;
  },
  get inputSchema() {
    return c();
  },
  get outputSchema() {
    return kbo();
  },
  create() {
    return {
      async call() {
        return { data: "" };
      },
      async checkPermissions() {
        return { behavior: "passthrough", message: "MCPTool requires permission." };
      }
    };
  },
  renderToolUseMessage(e, { verbose: t }) {
    return Upt(e, { verbose: t });
  },
  userFacingName: () => "mcp",
  stripForCreation: (e) => $xs(i(e)),
  mapToolResultToToolResultBlockParam(e, t) {
    return { tool_use_id: t, type: "tool_result", content: Ume(m(e)) };
  }
});
export { KTr, dBn, kbo, s1e };

//# sourceMappingURL=chunk-8v07t0z7.js.map
