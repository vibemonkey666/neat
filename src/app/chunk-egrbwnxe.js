// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { C2 } from "./chunk-wrtp8qz8.js";
import { k, BV } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { rm, Lrt } from "./chunk-1g9x3zw8.js";
import { eze, l0o } from "./chunk-57dzd89j.js";
var t = 300000;
function Z5n() {
  return i.CLAUDE_CODE_BRIEF || BV("tengu_kairos_brief", !1, t);
}
function oRi(e) {
  if (!e.includes(rm) && !e.includes(Lrt)) return !1;
  if (eze()) return !1;
  return Z5n();
}
function ND() {
  return (C2() && Z5n()) || l0o();
}
var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${rm} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;
function sRi() {
  let e = k("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}
export { Z5n, oRi, ND, sRi };

//# sourceMappingURL=chunk-egrbwnxe.js.map
