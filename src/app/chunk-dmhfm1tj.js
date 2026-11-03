// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { In } from "./chunk-h5gbmqm1.js";
import { FH, fT, JS, Ob } from "./chunk-t0wrcf3t.js";
import { We } from "./chunk-pgnjjhxv.js";
import { Rm, o8r } from "./chunk-dc0nzty2.js";
import { BC } from "./chunk-arcvz535.js";
import { dirname as v, join as a } from "path";
import { realpath as f } from "fs";
import { promisify as m } from "util";
var h = m(f.native);
function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : FH(e) || "empty-id";
}
async function d(e, t, { isRootResolved: n = !1 } = {}) {
  return n ? In(e) : Ob(e, BC(t));
}
async function Xbs(e, t, n, i) {
  return a(JS(await d(e, n, i)), Wbr(t));
}
async function Jbs(e, t, n, i) {
  let o = await d(e, n, i),
    p = a(JS(o), Wbr(t)),
    r = fT(o),
    s = n === void 0 ? void 0 : Wdo(r, t);
  return {
    path: p,
    projectKey: r,
    v5: n === void 0 || s === void 0 ? void 0 : { backend: n, key: s }
  };
}
function Wdo(e, t) {
  let n = We.dirSyncRecord(e, c(t));
  return Rm(n) === void 0 ? n : void 0;
}
function Wbr(e) {
  return `${c(e)}${o8r}`;
}
export { Xbs, Jbs, Wdo, Wbr };

//# sourceMappingURL=chunk-dmhfm1tj.js.map
