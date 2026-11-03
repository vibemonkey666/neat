// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qc, o3o, s3o, Aii } from "./chunk-exz0w70z.js";
import { bkt } from "./chunk-qakn3b85.js";
import { Fy } from "./chunk-ak0cmk10.js";
import { t } from "./chunk-4kxznmzw.js";
import { KIn } from "./chunk-03dzxcns.js";
var Qvi = "hearth_binding_changed";
function RQr(e, n) {
  if (e === null || typeof e !== "object" || !("hearth" in e))
    return { binding: null, reason: "not_joined" };
  let s = e.hearth;
  if (s === null || typeof s !== "object") return { binding: null, reason: "not_joined" };
  let i = s,
    l = typeof i.channel_id === "string" ? i.channel_id : "",
    u = typeof i.thread_id === "string" ? i.thread_id : "";
  if (!o3o.test(l) || !o3o.test(u))
    return (
      t("[bridge:projects] binding ids are malformed \u2014 no mount", { level: "warn" }),
      { binding: null, reason: "bad_ids" }
    );
  let a = i.mcp_server;
  if (a === null || typeof a !== "object") return { binding: null, reason: "bad_server_name" };
  let o = a;
  if (o.name !== Qc)
    return (
      t("[bridge:projects] binding names an unexpected MCP server \u2014 no mount", {
        level: "warn"
      }),
      { binding: null, reason: "bad_server_name" }
    );
  if (o.type !== "http" || typeof o.url !== "string") return { binding: null, reason: "not_http" };
  let d = bkt(n.apiBaseUrl);
  if (d === null)
    return (
      t("[bridge:projects] api base is not an approved ingress origin \u2014 no mount", {
        level: "warn"
      }),
      { binding: null, reason: "untrusted_origin" }
    );
  let c = `${d}${s3o(n.sessionId)}`,
    r;
  try {
    r = new URL(o.url);
  } catch {
    return { binding: null, reason: "url_mismatch" };
  }
  if (
    r.origin !== d ||
    r.pathname !== s3o(n.sessionId) ||
    r.search !== "" ||
    r.hash !== "" ||
    r.username !== "" ||
    r.password !== ""
  )
    return (
      t(
        "[bridge:projects] binding url is not this session\u2019s hearthbot mount on our own api base \u2014 no mount",
        { level: "warn" }
      ),
      { binding: null, reason: "url_mismatch" }
    );
  let g = KIn(o, Qc);
  if (!g) return { binding: null, reason: "bad_tools" };
  let h = g.filter((_) => Aii.has(_));
  return { binding: { channelId: l, threadId: u, mountUrl: c, autoAllowTools: h } };
}
var p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;
function Zvi(e) {
  if (!e) return null;
  let n = p.exec(e);
  if (!n?.[1] || !n[2]) return null;
  try {
    Fy(n[2], "sessionId");
  } catch {
    return null;
  }
  return { apiBaseUrl: n[1], sessionId: n[2] };
}
export { Qvi, RQr, Zvi };

//# sourceMappingURL=chunk-10scsk6j.js.map
