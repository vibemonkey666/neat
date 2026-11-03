// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { kn, k, Gnt, Ij } from "./chunk-ajtyjx88.js";
import { tI, Mtt, jhn } from "./chunk-g49hnbqz.js";
var GPe = "tengu_violin_willow";
function wOn() {
  try {
    let { value: e, source: o } = kn(GPe, !1);
    return Ij(o) ? e === !0 : void 0;
  } catch {
    return;
  }
}
function D6e() {
  try {
    return k(GPe, !1);
  } catch {
    return !1;
  }
}
function H6e() {
  return jhn() && wOn() === !0;
}
function EUe({ cloudClient: e }) {
  if (Mtt()) return "tengu_violin_wood";
  return e && wOn() === !1 ? GPe : void 0;
}
async function aoo({ cloudClient: e }) {
  try {
    return (await tI()) && (!e || (await Gnt(GPe)));
  } catch {
    return !1;
  }
}
export { GPe, wOn, D6e, H6e, EUe, aoo };

//# sourceMappingURL=chunk-3r796kh5.js.map
