// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function qw(t) {
  return t;
}
function Br(t) {
  return t;
}
var DCt = "hook-agent-";
function E6(t) {
  return (
    typeof t === "string" &&
    t.length <= 200 &&
    /^[A-Za-z0-9_][A-Za-z0-9_-]*$/.test(t) &&
    !/^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i.test(t)
  );
}
var r = "[\\w-]{1,63}",
  s = new RegExp(`^${r}$`),
  u = /^[\w-]{1,128}$/;
function MB(t) {
  return u.test(t);
}
var c = new RegExp(`^a(?:${r}-)?[0-9a-f]{16}$`);
function bg(t) {
  return c.test(t) ? t : null;
}
import { createHash as i, randomBytes as a, randomUUID as uie } from "crypto";
var g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function sN(t, o) {
  let f = Buffer.from(o.replace(/-/g, ""), "hex"),
    n = i("sha1").update(f).update(Buffer.from(t, "utf8")).digest();
  ((n[6] = (n[6] & 15) | 80), (n[8] = (n[8] & 63) | 128));
  let e = n.subarray(0, 16).toString("hex");
  return `${e.slice(0, 8)}-${e.slice(8, 12)}-${e.slice(12, 16)}-${e.slice(16, 20)}-${e.slice(20, 32)}`;
}
function Kt(t) {
  if (typeof t !== "string") return null;
  return g.test(t) ? t : null;
}
function T_(t) {
  if (t && !s.test(t)) t = t.replace(/[^\w-]/g, "").slice(0, 63);
  let o = a(8).toString("hex");
  return t ? `a${t}-${o}` : `a${o}`;
}
export { qw, Br, DCt, E6, MB, bg, uie, sN, Kt, T_ };

//# sourceMappingURL=chunk-6bbdndfe.js.map
