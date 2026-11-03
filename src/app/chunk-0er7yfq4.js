// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _Si, bSi, eqo } from "./chunk-d65ze5ng.js";
import { Bc } from "./chunk-ajtyjx88.js";
import { ve } from "./chunk-vk5p9xv3.js";
var e = ve(Bc(), (o) => o.set(null));
function gSi(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? _Si(o) : null);
}
function hSi(o) {
  return eqo(o) !== void 0 ? (e.get() ?? void 0) : void 0;
}
function ySi(o, t) {
  if (eqo(o) !== void 0) e.set(t ?? null);
}
function r0e(o) {
  let t = eqo(o),
    m = e.get() ?? bSi;
  return t === void 0 ? void 0 : { table: m, paths: t };
}
export { gSi, hSi, ySi, r0e };

//# sourceMappingURL=chunk-0er7yfq4.js.map
