// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Soe } from "./chunk-5b88xb0z.js";
import { nt } from "./chunk-wrtp8qz8.js";
var r = Soe("computerUseMcpState", void 0);
class fdt {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static over(e) {
    return new fdt(r(e.getState, e.setState));
  }
  get() {
    return this.#e.get();
  }
  update(e) {
    this.#e.set(e);
  }
}
class t {
  owner = void 0;
  acquire(e) {
    if (this.owner) return () => {};
    return (
      (this.owner = e),
      () => {
        if (this.owner === e) this.owner = void 0;
      }
    );
  }
}
var xPt = new nt(() => new t());
function sms(e) {
  return xPt.of(e).owner;
}
export { fdt, xPt, sms };

//# sourceMappingURL=chunk-nbb21mfv.js.map
