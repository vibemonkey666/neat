// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { pd, j_e, ua, k } from "./chunk-ajtyjx88.js";
import { _W, Pn } from "./chunk-wrtp8qz8.js";
import { wr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { _t } from "./chunk-ewvf3tep.js";
import { dW, Lkn, MM } from "./chunk-4nzy53ma.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { on } from "./chunk-cr7a2cdd.js";
import { L7e } from "./chunk-xt7fs806.js";
var l = "tengu_copper_gazette";
var x = !1;
var Obr = () => k(l, x) === !0;
var Mdo = (o) => o.find((u) => u !== !1) || void 0;
function E() {
  let { source: o } = ua();
  return o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
}
var _ = () => ua().source === "CCR_OAUTH_TOKEN_FILE" && _W() && pd();
var g = () => Lkn() && !MM() && pd() && (E() || _());
var fHn = () => j_e() && !Pn() && ((dW() && ua().source === "CLAUDE_CODE_OAUTH_TOKEN") || g());
var O = () => L7e() || fHn();
var pJt = "allow_plugin_publish";
var ybs = () => (i.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out");
var Mbr = () =>
  Mdo([
    Ae() !== "firstParty" && "third-party",
    wr() && "bare",
    _t() && "traffic-off",
    !on(pJt) && "policy",
    !O() && ybs()
  ]);
export { Obr, Mdo, fHn, pJt, ybs, Mbr };

//# sourceMappingURL=chunk-fkbes5mr.js.map
