// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { So } from "./chunk-wrtp8qz8.js";
import { m, f } from "./chunk-brszmkb3.js";
import { Ll } from "./chunk-wany0nxw.js";
import { ZSe } from "./chunk-vm37ezht.js";
import { aQr } from "./chunk-seveay88.js";
var ppe = "repo_rules_unread";
function Ovi(e, o) {
  let t = ZSe(e, o.meta);
  return t instanceof Promise ? t.then((r) => s(r, o)) : s(t, o);
}
function s(e, o) {
  if (e.refused !== void 0)
    return (
      (e.refused.cause === "repo_rules_read_failed" ? m : f)(
        "mcp_serve_file_call",
        e.refused.cause
      ),
      ppe
    );
  return e.repoRules === void 0
    ? o.launchPermissionContext
    : n(o.launchPermissionContext, e.repoRules, o);
}
function n(e, o, { session: t }) {
  let r = e ?? Ll();
  return {
    ...r,
    ...aQr({ alwaysDenyRules: {}, alwaysAskRules: {} }, r, So(t).originalCwd, o, "upload")
  };
}
export { ppe, Ovi };

//# sourceMappingURL=chunk-ma6pmm2f.js.map
