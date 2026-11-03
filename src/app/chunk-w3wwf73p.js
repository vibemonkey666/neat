// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _, t } from "./chunk-4kxznmzw.js";
import { Ma } from "./chunk-znr3gw2p.js";
import { pY } from "./chunk-6h7ejyet.js";
function u(e) {
  if (!Array.isArray(e)) return [];
  let n = pY(),
    s = [];
  for (let o of e) {
    let i = n.safeParse(o);
    if (i.success) s.push(i.data);
    else
      t(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${i.error.message}`, {
        level: "warn"
      });
  }
  return s;
}
function y$n(e) {
  (Ma().swarmPermissions.pending.set(e.requestId, e),
    t(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`));
}
function eZt(e) {
  (Ma().swarmPermissions.pending.delete(e),
    t(`[SwarmPermissionPoller] Unregistered callback for request ${e}`));
}
function HTs(e) {
  return Ma().swarmPermissions.pending.has(e);
}
function LTs() {
  Ma().swarmPermissions.clear();
}
var d = !0;
function a(e, n) {
  let s = n.toolUseId === void 0 ? d : n.toolUseId === e.toolUseId,
    o = n.approvedRequest,
    i = o === void 0 ? d : o.tool_use_id === e.toolUseId && o.tool_name === e.toolName,
    r = o === void 0 ? d : o.input_digest === e.inputDigest;
  if (!s || !i) return "mismatch";
  if (!r) return "input_digest_mismatch";
  return n.toolUseId === void 0 || o === void 0 ? "unbound" : "bound";
}
function tZt(e) {
  let n = Ma().swarmPermissions.pending,
    s = n.get(e.requestId);
  if (!s)
    return (
      t(`[SwarmPermissionPoller] No callback registered for mailbox response ${_(e.requestId)}`),
      !1
    );
  n.delete(e.requestId);
  let o = a(s, e);
  if (o === "mismatch" || o === "input_digest_mismatch") {
    let i = e.approvedRequest,
      r = e.decision === "approved" ? "approval" : "denial",
      l =
        o === "input_digest_mismatch"
          ? `this ${_(s.toolName)} call (${_(s.toolUseId)}), but its input digest differs`
          : `${i ? `${_(i.tool_name)} (${_(i.tool_use_id)})` : _(e.toolUseId)}, not this ${_(s.toolName)} call (${_(s.toolUseId)})`;
    return (
      t(
        `[SwarmPermissionPoller] Refusing ${r} for request ${_(e.requestId)}: the leader answered ${l}`,
        { level: "warn" }
      ),
      s.onRefuse(`The ${r} did not describe this tool call, so it was refused.`, r),
      !0
    );
  }
  if (
    (t(
      `[SwarmPermissionPoller] Processing mailbox response for request ${_(e.requestId)}: ${e.decision} (${o})`
    ),
    o === "unbound")
  )
    s.onUnboundVerdict();
  if (e.decision === "approved") {
    let i = u(e.permissionUpdates),
      r = e.updatedInput;
    s.onAllow(r, i);
  } else s.onReject(e.feedback);
  return !0;
}
function NTs(e) {
  (Ma().swarmPermissions.pendingSandbox.set(e.requestId, e),
    t(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`));
}
function $Ts(e) {
  return Ma().swarmPermissions.pendingSandbox.has(e);
}
function FTs(e) {
  let n = Ma().swarmPermissions.pendingSandbox,
    s = n.get(e.requestId);
  if (!s)
    return (
      t(`[SwarmPermissionPoller] No sandbox callback registered for request ${_(e.requestId)}`),
      !1
    );
  if ((n.delete(e.requestId), s.host !== e.host))
    return (
      t(
        `[SwarmPermissionPoller] Refusing sandbox ${e.allow === !0 ? "allow" : "deny"} for request ${_(e.requestId)}: the leader answered for ${_(e.host)}, not ${_(s.host)}`,
        { level: "warn" }
      ),
      s.resolve(!1),
      !0
    );
  return (
    t(
      `[SwarmPermissionPoller] Processing sandbox response for request ${_(e.requestId)}: allow=${_(e.allow)}`
    ),
    s.resolve(e.allow),
    !0
  );
}
export { y$n, eZt, HTs, LTs, tZt, NTs, $Ts, FTs };

//# sourceMappingURL=chunk-w3wwf73p.js.map
