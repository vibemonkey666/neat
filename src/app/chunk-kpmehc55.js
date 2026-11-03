// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { $Yt } from "./chunk-wrtp8qz8.js";
import { tF, MM } from "./chunk-4nzy53ma.js";
import { LZ, aAt, uEn, dE, tW } from "./chunk-nrysaqwk.js";
import { lfe, Hu } from "./chunk-dvghjmtr.js";
var o = null;
function d7s(n) {
  o = n;
}
function vhn() {
  return o?.credential() ?? null;
}
function c7s() {
  return o?.road() ?? "none_at_claim";
}
function u7s(n, e) {
  if (e === null) return "none_at_claim";
  let t = e.kind === "bearer",
    i = t ? "CLAUDE_CODE_OAUTH_TOKEN" : "ANTHROPIC_API_KEY",
    u = t ? "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR" : "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR";
  return r(n[i]) === void 0 ? ($Yt(u) ?? "none") : "env_var";
}
function f7s(n) {
  if (_(n)) {
    let d = r(uEn(LZ, "OAuth token")),
      s = r(uEn(aAt, "API key"));
    if (d !== void 0 && s !== void 0) return null;
    return d === void 0 ? c(s) : { kind: "bearer", token: d };
  }
  let e = a(n, "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"),
    t = a(n, "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR"),
    i = r(n.CLAUDE_CODE_OAUTH_TOKEN) ?? (e ? r(dE()) : void 0),
    u = r(n.ANTHROPIC_API_KEY) ?? (t ? r(tW()) : void 0);
  if (i !== void 0) return { kind: "bearer", token: i };
  if (u !== void 0) return { kind: "key", key: u };
  if (e || t) return null;
  let l = r(dE());
  if (l !== void 0) return { kind: "bearer", token: l };
  return c(r(tW()));
}
function p7s() {
  let n = o?.env();
  if (n === void 0) return "no_auth";
  if ([...lfe, "CLAUDE_CODE_USE_GATEWAY"].some((i) => Ne(n[i]))) return "third_party_provider";
  let t = r(n.ANTHROPIC_BASE_URL);
  if (t !== void 0 && !Hu(t)) return "custom_base_url";
  return vhn() === null ? "no_auth" : null;
}
var E = [
  "USE_LOCAL_OAUTH",
  "USE_STAGING_OAUTH",
  "CLAUDE_LOCAL_OAUTH_API_BASE",
  "CLAUDE_CODE_CUSTOM_OAUTH_URL"
];
function Hwt() {
  let n = o?.env() ?? {};
  return E.some((e) => process.env[e] !== n[e]);
}
function m7s() {
  let n = o?.env();
  return n === void 0 || _(n) ? void 0 : r(n.CLAUDE_CODE_SUBSCRIPTION_TYPE);
}
function _(n) {
  return tF() || MM() || a(n, "CLAUDE_CODE_CHILD_SESSION") || a(n, "CLAUDECODE");
}
function a(n, e) {
  return r(n[e]) !== void 0;
}
function c(n) {
  return n === void 0 ? null : { kind: "key", key: n };
}
function r(n) {
  let e = n?.trim() ?? "";
  return e === "" ? void 0 : e;
}
export { d7s, vhn, c7s, u7s, f7s, p7s, Hwt, m7s };

//# sourceMappingURL=chunk-kpmehc55.js.map
