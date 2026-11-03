// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U } from "./chunk-wrtp8qz8.js";
import { P, y, j } from "./chunk-bq35vvkw.js";
j();
var UIe = "continue";
function Wks(t, e, n) {
  if (n && e === UIe && t === UIe + "/") return "/";
  if (e.startsWith("/") && t.length === UIe.length + e.length + 1 && t.startsWith(UIe + e))
    return t.slice(UIe.length);
  return t;
}
class o {
  lastResult = null;
  listeners = new Set();
  inFlight = null;
}
var l = new nt(() => new o());
function i() {
  return l.of(U());
}
function Zvr(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}
function Gks() {
  return i().inFlight;
}
function Umo(t) {
  i().inFlight = t;
}
function zks() {
  (Zvr(null), (i().inFlight = null));
}
function Kks() {
  let [t, e] = y(() => i().lastResult);
  return (
    P(() => {
      let n = i();
      return (
        e(n.lastResult),
        n.listeners.add(e),
        () => {
          n.listeners.delete(e);
        }
      );
    }, []),
    t
  );
}
export { UIe, Wks, Zvr, Gks, Umo, zks, Kks };

//# sourceMappingURL=chunk-qrdc45xv.js.map
