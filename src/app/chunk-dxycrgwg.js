// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { K } from "./chunk-61vn6n52.js";
import { vni, jS, $t } from "./chunk-ajtyjx88.js";
import { qM } from "./chunk-p65ccy96.js";
import { Wd } from "./chunk-358y3whe.js";
import { Ion, Kje } from "./chunk-j0tbz6ra.js";
import { P, ee, Qh, j } from "./chunk-bq35vvkw.js";
j();
function t() {
  let [o, e] = Qh((s) => s + 1, 0);
  return (P(() => vni(e), []), o);
}
function Smr(o, e) {
  return Ion(o) ?? Ion(e) ?? jS();
}
function sL(o) {
  return $t(Smr(o.mainLoopModelForSession, o.mainLoopModel));
}
function kwe() {
  let o = K((n) => n.mainLoopModel),
    e = K((n) => n.mainLoopModelForSession),
    s = qM(),
    i = t(),
    r = Wd();
  return ee(() => Kje(e, o), [e, o, s, r, i]);
}
function Q5e() {
  let o = K((n) => n.mainLoopModel),
    e = K((n) => n.mainLoopModelForSession),
    s = qM(),
    i = t(),
    r = Wd();
  return ee(() => Smr(e, o), [e, o, s, r, i]);
}
function ou() {
  let o = K((n) => n.mainLoopModel),
    e = K((n) => n.mainLoopModelForSession),
    s = qM(),
    i = t(),
    r = Wd();
  return ee(() => sL({ mainLoopModel: o, mainLoopModelForSession: e }), [e, o, s, r, i]);
}
export { Smr, sL, kwe, Q5e, ou };

//# sourceMappingURL=chunk-dxycrgwg.js.map
