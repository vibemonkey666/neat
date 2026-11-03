// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Zi } from "./chunk-h56pfqh7.js";
import { y, j } from "./chunk-bq35vvkw.js";
j();
var aL = 150,
  Zr = 250,
  xpe = 600;
function ga(e, n, t = aL) {
  let o = e() - n;
  if (o >= 0) return o < t;
  return n <= Date.now();
}
function yIn(e) {
  let n = Zi(),
    [t, o] = y(() => ({ key: e, at: Date.now() }));
  if (t.key !== e) o({ key: e, at: Date.now() });
  return function () {
    return ga(n, t.at);
  };
}
export { aL, Zr, xpe, ga, yIn };

//# sourceMappingURL=chunk-xkry565w.js.map
