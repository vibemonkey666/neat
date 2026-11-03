// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { MHo } from "./chunk-53nx6xac.js";
import { N } from "./chunk-fs43t96t.js";
import { Wn } from "./chunk-ajtyjx88.js";
import { l } from "./chunk-ewvf3tep.js";
import { Olr, eF } from "./chunk-4nzy53ma.js";
import { pyt } from "./chunk-7jgmpv5v.js";
function dHn(e) {
  let o = e.trim();
  return o !== "" && !o.startsWith("/");
}
var Cdo = () => !1;
var Rdo = () => eF() && !Olr() && Wn("tengu_quiet_ember", Cdo());
var cHn = {
  name: "cc-plugin-responsive-mode",
  description:
    "Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",
  isAvailable: Rdo,
  defaultEnabled: !1
};
function Rbr({ text: e, pastedContents: o, isSentByPerson: t, wait: r }) {
  if (!t || r || !dHn(e)) return !1;
  try {
    return MHo(e, o).length === 0 && pyt(cHn.name);
  } catch (i) {
    return (l(N(i)), !1);
  }
}
export { dHn, Cdo, Rdo, cHn, Rbr };

//# sourceMappingURL=chunk-c67tg2y4.js.map
