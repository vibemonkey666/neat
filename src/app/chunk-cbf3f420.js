// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qts } from "./chunk-wrtp8qz8.js";
import { Da } from "./chunk-6b3j8amt.js";
function coo(e) {
  if (e) Da.terminalFocusGainedAt = Date.now();
  if (!e && Da.terminalFocus === "blurred") return;
  ((Da.terminalFocus = e ? "focused" : "blurred"), qts(e), Da.terminalFocusChanged.emit());
}
function TUe() {
  return Da.terminalFocus !== "blurred";
}
function Vee() {
  return Da.terminalFocus;
}
function lms() {
  return Da.terminalFocusGainedAt;
}
function zPe(e) {
  return Da.terminalFocusChanged.subscribe(e);
}
export { coo, TUe, Vee, lms, zPe };

//# sourceMappingURL=chunk-cbf3f420.js.map
