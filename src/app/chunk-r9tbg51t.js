// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { js } from "./chunk-96sx3c3k.js";
var $7n = "in-process";
class _Qs {
  captured = null;
  cliOverride = null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    ((this.captured = e), (this.cliOverride = null));
  }
}
var wbi = new W(() => new _Qs());
function o() {
  return wbi.of(U().host);
}
function PRi(e) {
  o().setCliOverride(e);
}
function Rzo() {
  return o().cliOverride;
}
function xzo(e) {
  (o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`));
}
function Pzo() {
  return o().captured !== null;
}
function ezr() {
  let e = o();
  if (e.cliOverride)
    (e.capture(e.cliOverride),
      t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`));
  else
    (e.capture(js("teammateMode", $7n).value),
      t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`));
}
function DGt() {
  let e = o();
  if (e.captured === null)
    (l(
      Error(
        "getTeammateModeFromSnapshot called before capture - this indicates an initialization bug"
      )
    ),
      ezr());
  return e.captured ?? $7n;
}
export { $7n, _Qs, wbi, PRi, Rzo, xzo, Pzo, ezr, DGt };

//# sourceMappingURL=chunk-r9tbg51t.js.map
