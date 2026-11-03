// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q } from "./chunk-wrtp8qz8.js";
import { XZo } from "./chunk-4nzy53ma.js";
import { Nfe } from "./chunk-arw2bgak.js";
var t = /^chat:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function t_o() {
  let e = XZo();
  if (!e) return "unset";
  if (!t.test(e)) return "malformed";
  return Nfe() ? "ignored" : "used";
}
function o() {
  return t_o() === "used" ? XZo() : void 0;
}
function n_o() {
  let e = o();
  return e === void 0 ? { key: q(), fromHost: !1 } : { key: e, fromHost: !0 };
}
function aen() {
  return n_o().key;
}
export { t_o, n_o, aen };

//# sourceMappingURL=chunk-s1m39qcs.js.map
