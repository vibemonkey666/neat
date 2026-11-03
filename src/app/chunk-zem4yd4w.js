// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { m6 } from "./chunk-ak0cmk10.js";
class o {
  captured = r();
  capturedOwn = n();
  carrier = s();
  ownSessionIds = i();
  selfHostedRunnerChild = t();
  get atStartup() {
    return this.captured;
  }
  get isSessionIngressUrlSet() {
    return this.capturedOwn;
  }
  get ownCcrSessionIds() {
    return this.ownSessionIds;
  }
  get isSelfHostedRunnerChild() {
    return this.selfHostedRunnerChild;
  }
  get bridgeCarrier() {
    return this.carrier;
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child";
  }
  reset() {
    ((this.captured = r()),
      (this.capturedOwn = n()),
      (this.carrier = s()),
      (this.ownSessionIds = i()),
      (this.selfHostedRunnerChild = t()));
  }
}
var hd = new o();
function r() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}
function n() {
  return process.env.SESSION_INGRESS_URL !== void 0;
}
function s() {
  let e = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (e === "1" || !e) return e ? "child" : void 0;
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && Ne(process.env.CLAUDE_CODE_REMOTE)) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return;
  }
  return "descendant";
}
function i() {
  return [process.env.CLAUDE_CODE_REMOTE_SESSION_ID, process.env.CLAUDE_CODE_SESSION_ID].filter(
    (e) => e !== void 0 && m6(e)
  );
}
function t() {
  return (
    Ne(process.env.CLAUDE_CODE_REMOTE) &&
    process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" &&
    process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted"
  );
}
export { hd };

//# sourceMappingURL=chunk-zem4yd4w.js.map
