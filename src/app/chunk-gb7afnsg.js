// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function MHe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "tool_reference";
}
function N8n(e, r) {
  return `${e}
${r}`;
}
function X_t(e) {
  return MHe(e) && "tool_name" in e && typeof e.tool_name === "string";
}
function AZe(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "tool_result" &&
    "content" in e &&
    Array.isArray(e.content)
  );
}
function wye(e, r) {
  let s = [];
  for (let o of e) {
    if (
      r?.surfacedOnWire !== void 0 &&
      o.type === "attachment" &&
      o.attachment.type === "deferred_tools_delta"
    ) {
      let n = o.attachment.surfacedNames;
      for (let t of Array.isArray(n) ? n : [])
        if (typeof t === "string" && r.surfacedOnWire.has(t))
          s.push({ toolUseId: o.uuid, toolName: t });
      continue;
    }
    if (o.type !== "user") continue;
    let c = o.message?.content;
    if (!Array.isArray(c)) continue;
    for (let n of c) {
      if (!AZe(n) || typeof n.tool_use_id !== "string") continue;
      for (let t of n.content)
        if (X_t(t)) s.push({ toolUseId: n.tool_use_id, toolName: t.tool_name });
    }
  }
  return s;
}
export { MHe, N8n, X_t, AZe, wye };

//# sourceMappingURL=chunk-gb7afnsg.js.map
