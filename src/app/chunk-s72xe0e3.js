import {
  fileURLToPath as __filePath_a8fa7fb832066f9e,
  URL as __filePath_a8fa7fb832066f9e_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qni, Koi } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { X8s, BE } from "./chunk-wany0nxw.js";
import { lX } from "./chunk-4nzy53ma.js";
import { ht } from "./chunk-gdcb8skc.js";
import { sz } from "./chunk-cn4azb2f.js";
import { Ex, F6s, U6s } from "./chunk-q7wmjzj5.js";
import { qa, OWt, GY } from "./chunk-gmxe4kpt.js";
import { pu } from "./chunk-dggktcda.js";
import { $O } from "./chunk-e2shv4sr.js";
import { ki } from "./chunk-ngmg7f2n.js";
var jP = "ReportFindings",
  C0o =
    "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
var $D = "EnterWorktree";
var sHe = "ShareOnboardingGuide",
  R0o = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
var u = import.meta.require(
    __filePath_a8fa7fb832066f9e(
      new __filePath_a8fa7fb832066f9e_URL("./chunk-ejwr8q50.js", import.meta.url)
    )
  ).BRIEF_TOOL_NAME,
  d = new Set([jP, pu, sHe]),
  c = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,
  m =
    " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",
  p = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,
  h = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;
function RG(e, n) {
  return qni(e.name) ?? oze(e, n);
}
function oze(e, n) {
  if (e.alwaysLoad === !0) return !1;
  if (O(e, n)) return !1;
  if (OWt()) return !1;
  return T(e);
}
function T(e) {
  if (e.isMcp === !0) return !0;
  if (F6s() && BE(e, d)) return !0;
  return e.shouldDefer === !0;
}
function O(e, n) {
  return l(e, n) || E(e) || f(e);
}
function l(e, n = Ex()) {
  if (BE(e, n)) return !0;
  if (e.isMcp === !0) return !1;
  if (e.name === ki) return !0;
  if (e.name === qa) return !0;
  if (e.name === ht) {
    let r = import.meta.require(
      __filePath_a8fa7fb832066f9e(
        new __filePath_a8fa7fb832066f9e_URL("./chunk-n32bsa3r.js", import.meta.url)
      )
    );
    if (r.isForkSubagentEnabled()) return !0;
  }
  if (e.name === u) return !0;
  if (f(e) && !U6s()) return !0;
  return !1;
}
function E(e) {
  return e.isMcp !== !0 && e.name === $D && i.CLAUDE_CODE_SESSION_KIND === "bg";
}
function f(e) {
  return e.isMcp !== !0 && e.name === $O && lX();
}
function qK(
  e,
  n,
  r,
  { toolSearchAbsent: t = !1, placements: s = "hooks", nonDeferrableBuiltins: o } = {}
) {
  let a = s === "hooks" ? qni(e.name) : void 0;
  if (a !== void 0) return a;
  if (t) {
    if (n === void 0) return !1;
  } else if (n === void 0) return s === "hooks" ? RG(e, o) : oze(e, o);
  if (r !== void 0 && GY(r)) return !1;
  if (l(e, o)) return !1;
  return !n.has(e.name);
}
function x0o(e) {
  return e.whenToUse !== void 0 && RG(e) ? `${e.name}: ${e.whenToUse}` : e.name;
}
function Q$r(e = {}) {
  return (sz(e) ? X8s : c) + (Koi() ? p : m) + h;
}
function Z$r(e, { heldInlineTools: n, nonDeferrableBuiltins: r, listed: t }) {
  return n !== void 0 && !RG(e, r) && !t.has(e.name);
}
function P0o(e, n) {
  if (
    !qK(e, n.heldInlineTools, void 0, { nonDeferrableBuiltins: n.nonDeferrableBuiltins }) ||
    n.announced.has(e.name)
  )
    return;
  if (n.listed.has(e.name)) return n.withdrawn.has(e.name) ? "again" : void 0;
  return Z$r(e, n) ? "surfaced" : void 0;
}
export { $D, jP, C0o, sHe, R0o, RG, oze, qK, x0o, Q$r, Z$r, P0o };

//# sourceMappingURL=chunk-s72xe0e3.js.map
