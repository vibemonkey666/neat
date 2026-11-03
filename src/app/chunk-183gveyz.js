// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U, cm } from "./chunk-wrtp8qz8.js";
import { Hse, Nfe } from "./chunk-arw2bgak.js";
import { c2 } from "./chunk-2bsye2b3.js";
class r {
  #e;
  get() {
    return this.#e;
  }
  replace(e) {
    this.#e = e;
  }
}
var u = new nt(() => new r());
function fWr() {
  return u.peek(U())?.get();
}
function WJn() {
  return (Hse() && !Nfe() ? void 0 : fWr()) ?? (cm() ? "UTC" : void 0);
}
function qjo() {
  let e = new Date(),
    n = fWr();
  if (n !== void 0) {
    let t = new Map(
      c2("en-US", { timeZone: n, year: "numeric", month: "2-digit", day: "2-digit" })
        .formatToParts(e)
        .map((o) => [o.type, o.value])
    );
    return `${t.get("year")}-${t.get("month")}-${t.get("day")}`;
  }
  let i = e.getFullYear(),
    a = String(e.getMonth() + 1).padStart(2, "0"),
    d = String(e.getDate()).padStart(2, "0");
  return `${i}-${a}-${d}`;
}
class s {
  #e;
  get() {
    return ((this.#e ??= qjo()), this.#e);
  }
  clear() {
    this.#e = void 0;
  }
  get captured() {
    return this.#e !== void 0;
  }
}
var Mmn = new nt(() => new s());
function Yjo(e) {
  return Mmn.of(e).get();
}
function d8s() {
  return Yjo(U());
}
function c8s() {
  return new Date().toLocaleString("en-US", { month: "long", year: "numeric" });
}
export { fWr, WJn, qjo, Mmn, Yjo, d8s, c8s };

//# sourceMappingURL=chunk-183gveyz.js.map
