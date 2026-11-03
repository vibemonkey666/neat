// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { Fn } from "./chunk-dvghjmtr.js";
function nbr(s) {
  if (!s.startsWith("https://")) return { ok: !1, cause: "non_https" };
  let e;
  try {
    e = new URL(s);
  } catch {
    return { ok: !1, cause: "unparseable" };
  }
  if (e.protocol !== "https:") return { ok: !1, cause: "non_https" };
  if (
    e.username !== "" ||
    e.password !== "" ||
    e.search !== "" ||
    e.hash !== "" ||
    (e.pathname !== "" && e.pathname !== "/")
  )
    return { ok: !1, cause: "origin_extras" };
  return { ok: !0, origin: e.origin };
}
var t = /^cse_[A-Za-z0-9_]+$/;
function r() {
  if (!i.CCR_SESSION_PROFILE) return { ok: !1, cause: null };
  let s = i.SESSION_INGRESS_URL;
  if (!s) return { ok: !1, cause: "missing_ingress_url" };
  let e = nbr(s);
  if (!e.ok) return { ok: !1, cause: `invalid_ingress_origin:${e.cause}` };
  let n = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!n) return { ok: !1, cause: "missing_session_id" };
  if (!n.startsWith("cse_")) return { ok: !1, cause: "non_cse_session_id" };
  if (!t.test(n)) return { ok: !1, cause: "malformed_session_id" };
  if (!Fn()) return { ok: !1, cause: "non_first_party" };
  return { ok: !0, config: { ingressOrigin: e.origin, remoteSessionId: n } };
}
function uae() {
  let s = r();
  return s.ok ? s.config : null;
}
function Vlo() {
  let s = r();
  return s.ok ? null : s.cause;
}
function qlo() {
  return i.CCR_SESSION_PROFILE;
}
export { nbr, uae, Vlo, qlo };

//# sourceMappingURL=chunk-cv77cw1v.js.map
