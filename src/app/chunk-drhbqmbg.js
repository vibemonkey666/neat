// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
class u {
  reader = null;
  register(e) {
    let r = this.reader;
    return ((this.reader = e), r);
  }
}
var o = new u();
function Rii(e) {
  return o.register(e);
}
function Nor() {
  let e = o.reader;
  if (!e) return !0;
  try {
    let { value: r, source: t, defaultHost: a } = e("tengu_tingly_pearl", !0);
    return r !== !1 || t !== "payload" || !a;
  } catch {
    return !0;
  }
}
class n {
  reader = null;
  register(e) {
    let r = this.reader;
    return ((this.reader = e), r);
  }
}
var d = new n();
function xii(e) {
  return d.register(e);
}
function Pii() {
  let e = d.reader;
  if (!e) return !0;
  try {
    let { value: r, source: t, defaultHost: a } = e("tengu_calm_nautilus", !0);
    return r !== !1 || t !== "payload" || !a;
  } catch {
    return !0;
  }
}
export { Rii, Nor, xii, Pii };

//# sourceMappingURL=chunk-drhbqmbg.js.map
