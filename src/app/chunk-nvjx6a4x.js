// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nI } from "./chunk-06m3v1mh.js";
var ip = Symbol("untrustedArray.unreadable"),
  n5 = "<unreadable list>";
function xw(e) {
  let n;
  try {
    if (!Array.isArray(e)) return;
    n = e.length;
  } catch {
    return ip;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > nI) return ip;
  let u = [];
  for (let r = 0; r < n; r++) {
    let t;
    try {
      t = e[r];
    } catch {
      t = void 0;
    }
    u.push(t);
  }
  return u;
}
function eoe(e) {
  let n = xw(e);
  return n === ip ? void 0 : n;
}
export { ip, n5, xw, eoe };

//# sourceMappingURL=chunk-nvjx6a4x.js.map
