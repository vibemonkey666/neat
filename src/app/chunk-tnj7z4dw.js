// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { yn } from "./chunk-4kxznmzw.js";
import { he } from "./chunk-95k4nfdh.js";
import { GUe, uw } from "./chunk-ykrqc7ar.js";
import { n7e } from "./chunk-b08qnart.js";
var vHn = "\x1B]8;;",
  EHn = "\x07";
function tv(e, r, t) {
  let s = r === void 0 ? void 0 : yn(r),
    n = s === void 0 || Udo(e, s);
  if (!(
    (n && (t?.assumeSupport ?? !1) && process.stdout.isTTY === !0 && (GUe() ?? !0)) ||
    (t?.supportsHyperlinks ?? uw())
  )) {
    let i = t?.shownUrlStart ?? "";
    if (r !== void 0 && !n) return `${r}${i} (${e})`;
    return `${i}${e}`;
  }
  let o = ((t?.themeName ? n7e(t.themeName) : !1) ? he.blue : he.blueBright)(r ?? e);
  return `${vHn}${e}${EHn}${o}${vHn}${EHn}`;
}
function Udo(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}
export { vHn, EHn, tv, Udo };

//# sourceMappingURL=chunk-tnj7z4dw.js.map
