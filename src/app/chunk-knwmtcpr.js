// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xt } from "./chunk-qakn3b85.js";
var s = null;
function hRs(e) {
  let n = s;
  return ((s = e), n);
}
function BBn() {
  return s;
}
var r = null;
function yRs(e) {
  let n = r;
  return ((r = e), n);
}
async function Mte(e) {
  return (await r?.(e)) ?? !1;
}
class p1e extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function _Rs(e) {
  let n = t;
  return ((t = e), n);
}
function a9e() {
  return t;
}
function jBn(e) {
  let n = xt();
  if (n.scopeExpansionDisclosed) return;
  ((n.scopeExpansionDisclosed = !0), (n.pendingScopeExpansionNotice = e));
}
function Lbo() {
  let e = xt(),
    n = e.pendingScopeExpansionNotice;
  return ((e.pendingScopeExpansionNotice = void 0), n);
}
function bRs() {
  let e = Lbo();
  if (e)
    process.stderr.write(`${e}
`);
}
export { hRs, BBn, yRs, Mte, p1e, _Rs, a9e, jBn, Lbo, bRs };

//# sourceMappingURL=chunk-knwmtcpr.js.map
