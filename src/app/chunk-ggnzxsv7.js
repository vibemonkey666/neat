// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z, aj } from "./chunk-p27rr8yn.js";
import { Xo } from "./chunk-928ws1pg.js";
import { Id } from "./chunk-zf79f62g.js";
import { qV } from "./chunk-r1dvrqha.js";
var mLe = "read_artifact",
  YWr = "get_artifact",
  Sbi = "read_file",
  XWr = "read_shared_artifact",
  QAe = "read_comments",
  ogn = "reply_comment",
  xQn = "resolve_comment";
function kce(e) {
  return Xo(Id, e);
}
function PQn(e) {
  return { name: kce(e), mcpInfo: { serverName: Id, toolName: e } };
}
function cl() {
  return aj() && Z().builtInArtifactHiddenForMcp;
}
function YWo(e) {
  let o = qV;
  return (
    cl() &&
    [e.name, e.underlyingV1ToolName, e.familyParentToolName].some(
      (t) => t !== void 0 && o.includes(t)
    )
  );
}
function ERi(e) {
  return cl() && e.some((o) => o.mcpInfo?.serverName === Id);
}
function kRi(e) {
  return cl() && e.mcpInfo?.serverName === Id;
}
function TRi(e) {
  if (!cl()) return [];
  return [mLe, YWr, ...(e ? [Sbi] : [])].map(PQn);
}
class n {
  tool = null;
  register(e) {
    this.tool = e;
  }
}
var JWr = new n();
function sgn() {
  return cl() ? (JWr.tool ?? void 0) : void 0;
}
export { mLe, YWr, Sbi, XWr, QAe, ogn, xQn, kce, PQn, cl, YWo, ERi, kRi, TRi, JWr, sgn };

//# sourceMappingURL=chunk-ggnzxsv7.js.map
