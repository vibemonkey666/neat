// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z } from "./chunk-p27rr8yn.js";
import { Uu, lX } from "./chunk-4nzy53ma.js";
import { iFo, pye, f$, N_t } from "./chunk-9v1g0mex.js";
function $Ht() {
  let n = Uu();
  return n ? { entrypoint: n.toLowerCase().slice(0, 64) } : {};
}
function QAr() {
  let n = iFo();
  return n && !lX() ? { session_id: n } : {};
}
var mwo = 3600000;
function O1n() {
  let n = Z().sessionHintsRefusedAt;
  if (n !== void 0 && Date.now() - n < mwo) return {};
  return { ...$Ht(), ...QAr() };
}
function M1n() {
  Z().sessionHintsRefusedAt = Date.now();
}
var ZAr = ["entrypoint", "session_id", "request_id"],
  u = new Set(ZAr);
function D1n(n, s, i) {
  let o = ZAr.filter((t) => i[t] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = f$(s);
  if (!pye.test(e)) return [];
  let r = o.filter((t) => N_t(e, t));
  if (r.length > 0) return r;
  return Object.keys(i).some((t) => !u.has(t) && N_t(e, t)) ? [] : o;
}
function Ktn(n) {
  return n.includes("entrypoint") || n.includes("session_id");
}
function Ixs(n) {
  let { entrypoint: s, session_id: i, request_id: o, ...e } = n;
  return e;
}
export { $Ht, QAr, mwo, O1n, M1n, ZAr, D1n, Ktn, Ixs };

//# sourceMappingURL=chunk-53mweqs6.js.map
