// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { X_e } from "./chunk-ajtyjx88.js";
class r {
  stampMs = 0;
  detachedSinceLastAttach = !1;
  reset() {
    ((this.stampMs = 0), (this.detachedSinceLastAttach = !1));
  }
}
var s = new W(() => new r());
function a() {
  return s.of(U().host);
}
function Wio(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return;
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = !1;
}
function sXt() {
  a().detachedSinceLastAttach = !0;
}
function Gio() {
  return a().detachedSinceLastAttach;
}
function J6e() {
  return a().stampMs;
}
function iXt(e) {
  return !1;
}
async function tDn() {
  for (;;) {
    let e = Date.now();
    if (!iXt(e)) return;
    let { detachedSinceLastAttach: t, stampMs: o } = a(),
      c = t || o === 0 ? 500 : o + 500 - e;
    await X(Math.max(25, c) + 25);
  }
}
export { Wio, sXt, Gio, J6e, iXt, tDn };

//# sourceMappingURL=chunk-t1rf1n9m.js.map
