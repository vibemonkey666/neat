// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-0szbzt7f.js";
import "./chunk-9cvhnn3s.js";
import "./chunk-xkhy2efq.js";
import "./chunk-acd8w9vv.js";
import { R } from "./chunk-fs43t96t.js";
import { Lae } from "./chunk-8ry8184f.js";
var o = new Set([
  "ClaudeAiProxyBearerRejectedError",
  "McpAuthError",
  "McpError",
  "McpResponseSchemaError",
  "McpToolCallError",
  "ProtocolError",
  "SdkError",
  "SdkHttpError",
  "StreamableHTTPError",
  "TelemetrySafeError"
]);
function a(r) {
  if (r instanceof DOMException) return r.name === "TimeoutError";
  if (!(r instanceof Error)) return !1;
  if (r instanceof R) return !0;
  if (r instanceof Lae) return !0;
  if (
    (("errorCode" in r && typeof r.errorCode === "string") ||
      ("code" in r && typeof r.code === "string")) &&
    /^HTTP 40[13]\b/.test(r.message)
  )
    return !0;
  let e = r.name !== "Error" ? r.name : (r.constructor?.name ?? "");
  return o.has(e);
}
export { a as isExpectedMcpCallError };

//# sourceMappingURL=chunk-cx565psm.js.map
