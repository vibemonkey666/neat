// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
class l {
  implementation = null;
  isC4EUpsellCommandEnabled() {
    return this.implementation === null ? !1 : this.implementation();
  }
  register(e) {
    this.implementation = e;
  }
}
var SLo = new l();
function Gzs(e) {
  SLo.register(e.isC4EUpsellCommandEnabled);
}
export { SLo, Gzs };

//# sourceMappingURL=chunk-2zp8by90.js.map
