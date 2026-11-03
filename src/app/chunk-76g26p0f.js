// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z$ } from "./chunk-4nzy53ma.js";
import { Co, Lt } from "./chunk-r1dvrqha.js";
import { Z } from "./chunk-p27rr8yn.js";
import { Ox } from "./chunk-ajtyjx88.js";
import { Ute, m1 } from "./chunk-1vdj04pp.js";
import { qn } from "./chunk-0ex22bw7.js";
function XAr(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}
class o {
  availability = () => !1;
  register(e) {
    this.availability = e;
  }
  isAvailable() {
    return this.availability();
  }
}
var a = new o();
function Cxs(e) {
  a.register(e);
}
function ztn() {
  return a.isAvailable();
}
var JAr = new o();
function Rxs(e) {
  JAr.register(e);
}
function I1n() {
  return JAr.isAvailable() ? `read it with the ${Lt} tool (action: "read", url)` : `${qn} the url`;
}
function xxs() {
  return ztn()
    ? `for a workshop page use the ${Lt} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read there; otherwise ${I1n()}`
    : I1n();
}
function Nme(e) {
  let t = e !== "plain" && ztn(),
    n = I1n(),
    r = Co(),
    s = Z().contentHostEgressDenied.has(r) && !(Ute() && !m1(Ox)),
    i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return {
    readRemedy: t
      ? `for a workshop page use the ${Lt} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read and force there; otherwise ${n}`
      : n,
    forceAdvisory: t
      ? ""
      : " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.",
    contentReadsBlocked: s
      ? Z$()
        ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${XAr(i)} Tell the user, and publish again only once you can build on the live version.`
        : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.`
      : null
  };
}
export { XAr, Cxs, ztn, JAr, Rxs, I1n, xxs, Nme };

//# sourceMappingURL=chunk-76g26p0f.js.map
