// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { mNe } from "./chunk-qakn3b85.js";
import { co } from "./chunk-ybr49gcx.js";
import { wl } from "./chunk-5rw2zfa0.js";
import { k } from "./chunk-ajtyjx88.js";
var i = ["microsoft365.mcp.claude.com", "gmail.mcp.claude.com", "gcal.mcp.claude.com"];
function p(t) {
  return t.toLowerCase().replace(/\.$/, "");
}
function u() {
  let t = k("tengu_mcp_local_oauth_blocked_hosts", { hosts: i }),
    e = i;
  if (t !== null && typeof t === "object" && "hosts" in t && Array.isArray(t.hosts)) {
    let o = t.hosts.filter((n) => typeof n === "string");
    if (o.length > 0) e = o;
  }
  return new Set(e.map(p));
}
function c(t) {
  if (!t) return !1;
  try {
    let e = p(new URL(t).hostname);
    return u().has(e);
  } catch {
    return !1;
  }
}
function a(t, e = {}) {
  let o =
      `"${co(t)}" is Anthropic-hosted and doesn't support local OAuth. ` +
      "Connect it via Settings \u2192 Connectors on claude.ai (requires " +
      "`claude login`), then it'll be available here automatically.",
    r =
      e.scope === "local" || e.scope === "project" || e.scope === "user"
        ? wl("mcp remove", t)
        : null,
    s = r ? `${o} Remove the stale entry with: \`${r}\`` : o;
  return r && [...s].length <= 1024 ? s : o;
}
function b4(t, e) {
  if (e.type === "claudeai-proxy") return { kind: "claudeai-proxy", config: e };
  if (e.type !== "sse" && e.type !== "http")
    return { kind: "unsupported-transport", transport: e.type ?? "stdio" };
  if (c(e.url)) return { kind: "anthropic-hosted", config: e, message: a(t, { scope: e.scope }) };
  if (mNe(t, e))
    return {
      kind: "anthropic-hosted",
      config: e,
      message: `"${co(t)}" is provided to this session by Claude Code's cloud service, which holds its sign-in, so it can't be signed in to from here. If it is one of your claude.ai connectors, reconnect it under Settings \u2192 Connectors on claude.ai and then start a new session.`
    };
  return { kind: "oauth", config: e };
}
export { b4 };

//# sourceMappingURL=chunk-apca454z.js.map
