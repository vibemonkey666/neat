// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { xBe, iJ, u4, cEr, uEr } from "./chunk-rjdks4dd.js";
var CBe = { accepted: "Allowed", declined: "Not allowed", unset: "Not asked yet" },
  t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)",
  o =
    "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";
function R7t() {
  return cEr() === "user" ? o : t;
}
function DNn(e) {
  return iJ() !== "unset" || uEr() || e;
}
function HNn() {
  return iJ() === "accepted" || uEr();
}
async function LNn(e) {
  if (e === "accepted" && u4()) return "forbidden";
  let n = e === "accepted" ? "accepted" : iJ() === "accepted" ? "revoked" : "declined";
  if (!(await xBe(e))) return "not_saved";
  return (a("tengu_served_unattended_consent", { action: c(n), surface: b("cli") }), "saved");
}
export { CBe, R7t, DNn, HNn, LNn };

//# sourceMappingURL=chunk-rbxjs1s5.js.map
