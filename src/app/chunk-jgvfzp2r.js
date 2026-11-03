// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
class W {
  #o;
  #r = new WeakMap();
  constructor(o) {
    this.#o = o;
  }
  of(o) {
    let e = this.#r.get(o);
    if (e !== void 0) return e;
    let s = this.#o();
    return (this.#r.set(o, s), s);
  }
}
var r = { isDiskless: () => !1, isDisklessProcess: () => !1, reportBuilt: () => {} };
function lmi(o) {
  r = o;
}
function Iee() {
  return r.isDiskless();
}
function dmi() {
  return r.isDisklessProcess();
}
var cmi = new W(() => ({}));
var t = "NoConfigHomeError";
function Hit(o) {
  try {
    return typeof o === "object" && o !== null && "name" in o && o.name === t;
  } catch {
    return !1;
  }
}
export { W, lmi, Iee, dmi, cmi, Hit };

//# sourceMappingURL=chunk-jgvfzp2r.js.map
