// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { hW } from "./chunk-4kxznmzw.js";
import { u6, vr, Pst, yo } from "./chunk-azq9hjy0.js";
import { eX } from "./chunk-v4kbwz0z.js";
function T$e(r) {
  return r.replace(/:\d+$/, "");
}
var e = "gitlab.com",
  o = "bitbucket.org",
  Kci = { github: vr, gitlab: e, bitbucket: o },
  n = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket"
  };
function TM(r) {
  if (((r = T$e(r)), yo(r))) return "github";
  let t = Pst(r),
    i = n[t];
  if (i) return i;
  if (t === e) return "gitlab";
  if (t === o) return "bitbucket";
  return "other";
}
function gAt(r) {
  let t = r.trim();
  if (u6(t) || hW(t) || eX(t)) return null;
  if (t.includes("://"))
    try {
      return new URL(t).hostname || null;
    } catch {
      return null;
    }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function xEn(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !hW(r) ? { user: t[1], host: t[2], path: t[3] } : null;
}
export { T$e, Kci, TM, gAt, xEn };

//# sourceMappingURL=chunk-527647eb.js.map
