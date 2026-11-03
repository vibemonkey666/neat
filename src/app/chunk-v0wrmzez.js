// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { nt } from "./chunk-wrtp8qz8.js";
class e {
  #e = { credentialsPersisted: 0, loginCompleted: 0 };
  #t = De();
  subscribe = (t) => this.#t.subscribe(t);
  getSnapshot = () => this.#e;
  credentialsPersisted() {
    ((this.#e = { ...this.#e, credentialsPersisted: this.#e.credentialsPersisted + 1 }),
      this.#t.emit());
  }
  loginCompleted() {
    ((this.#e = { ...this.#e, loginCompleted: this.#e.loginCompleted + 1 }), this.#t.emit());
  }
}
var qX = new nt(() => new e());
export { qX };

//# sourceMappingURL=chunk-v0wrmzez.js.map
