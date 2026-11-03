// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, G9r, kX, WSe } from "./chunk-wrtp8qz8.js";
import { rcr } from "./chunk-h5gbmqm1.js";
import { Le } from "./chunk-jazcqqqr.js";
import { ngn } from "./chunk-yv5e7kyr.js";
import { createHash as s } from "crypto";
import { join as i } from "path";
function yx() {
  return kX() ?? i(WSe() ?? R_t(), q());
}
function R_t() {
  return i(Le(), "uploads");
}
function x_t() {
  return [R_t(), WSe() ?? ngn()];
}
function q3n(t, e) {
  return `${t}-${u(e)}`;
}
function B$o(t) {
  return s("sha256").update(t.toLowerCase()).digest("hex").slice(0, 8);
}
var a = /^[A-Za-z0-9_-]{8}-/;
function o(t) {
  return rcr(t.replace(/_+$/, ""));
}
function u(t) {
  return o(t) ? t + "_" : t;
}
function l4s(t) {
  let e = t.replace(a, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t;
}
var c = 1024;
function d4s(t, e) {
  let n = G9r();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r);
  }
  n.set(t, e);
}
function Wun(t) {
  return G9r().get(t);
}
export { yx, R_t, x_t, q3n, B$o, l4s, d4s, Wun };

//# sourceMappingURL=chunk-1ky5r8qb.js.map
