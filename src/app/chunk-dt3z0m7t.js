// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { En } from "./chunk-errevp3y.js";
var _ = "Claude Preview",
  c = "Claude Browser",
  E = En(_),
  l = En(c),
  u = new Set([E, l]);
function SOe(e) {
  return u.has(En(e));
}
var vft = ["file_upload"],
  WBn = "anthropic/hostAsksPerUploadedFile",
  d = new Set(["description", "activeForm"]);
function GBn(e, o, n, i) {
  let t = `mcp__${En(e)}__${o}`;
  return {
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `${e} requires permission.`,
        suggestions: [
          {
            type: "addRules",
            rules: [{ toolName: t, ruleContent: void 0 }],
            behavior: "allow",
            destination: "session"
          }
        ],
        metadata: { command: { name: t, chrome: { hostHandlesOriginConsent: !0 } } }
      };
    },
    ...(n !== void 0 &&
      Object.hasOwn(n, "code") && {
        toAutoClassifierInput(r) {
          let a = Object.keys(r).filter((s) => !d.has(s));
          return i(Object.fromEntries(a.map((s) => [s, r[s]])), o);
        }
      })
  };
}
export { SOe, vft, WBn, GBn };

//# sourceMappingURL=chunk-dt3z0m7t.js.map
