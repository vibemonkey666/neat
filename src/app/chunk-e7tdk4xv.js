// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { Et, ue } from "./chunk-ajtyjx88.js";
import { H1, ODe, GC, L1 } from "./chunk-6h7ejyet.js";
import { za } from "./chunk-j4601ec1.js";
var pmr = "https://clau.de/chrome/permissions",
  m = { install: H1, reconnect: ODe, permissions: pmr };
async function BEi({ mcpClients: s, atStartup: a }) {
  let l = await L1().catch(
      (e) => (
        t(
          `[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`,
          { level: "error" }
        ),
        !1
      )
    ),
    o = ue(),
    r = s.some((e) => e.name === za && e.type === "connected"),
    n = o.chromeExtension?.pairedDeviceName;
  return {
    allowed: GC(),
    subscriber: Et(),
    wsl: i.isWslEnvironment(),
    installed: l,
    connected: r,
    ...(r && n && { paired_browser: n }),
    enabled_by_default: o.claudeInChromeDefaultEnabled ?? !1,
    at_startup: await a(o.claudeInChromeDefaultEnabled === !0),
    urls: { ...m }
  };
}
export { pmr, BEi };

//# sourceMappingURL=chunk-e7tdk4xv.js.map
