// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
class t {
  reader = null;
  register(e) {
    let r = this.reader;
    return ((this.reader = e), r);
  }
}
var o = new t();
function rii(e) {
  return o.register(e);
}
function l() {
  let e = o.reader;
  if (!e) return !0;
  try {
    let { value: r, source: a, defaultHost: u } = e("tengu_warm_sunrise", !0);
    return r !== !1 || a !== "payload" || !u;
  } catch {
    return !0;
  }
}
function bor(e) {
  return e !== "-rm" || l();
}
class d {
  reader = null;
  register(e) {
    let r = this.reader;
    return ((this.reader = e), r);
  }
}
var n = new d();
function oii(e) {
  return n.register(e);
}
function sii() {
  let e = n.reader;
  if (!e) return !0;
  try {
    let { value: r, source: a, defaultHost: u } = e("tengu_vast_puddle", !0);
    return r !== !1 || a !== "payload" || !u;
  } catch {
    return !0;
  }
}
export { rii, bor, oii, sii };

//# sourceMappingURL=chunk-6dsz7zr0.js.map
