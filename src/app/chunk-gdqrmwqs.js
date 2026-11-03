// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { $ss } from "./chunk-qq3ygwcj.js";
import { gl, zs } from "./chunk-h5gbmqm1.js";
import { bD, JOe, Kpt, rG, U4, uO } from "./chunk-j0tbz6ra.js";
import { oi } from "./chunk-dc0nzty2.js";
var CIe = (() => {
  try {
    return $ss(process.cwd());
  } catch {
    return process.cwd();
  }
})();
function pwr(r, e) {
  let n = bD(r),
    t = bD(e);
  if (rG(n) || rG(t)) return !0;
  if (n.skipped !== t.skipped) return !0;
  return JOe(n, t);
}
function D3e(r, e) {
  if (zs(r) || gl(r)) return [];
  let n = oi(r),
    t =
      n !== null && n !== void 0
        ? [n]
        : (() => {
            let o = uO(r);
            return o.length > 0 ? o : [r];
          })();
  return e === void 0 ? t : t.filter((o) => U4(o, e) !== "same");
}
function Wct(r, e) {
  if (zs(r) || gl(r)) return [];
  let n = oi(r),
    t = n !== null && n !== void 0 ? [n] : uO(r);
  return e === void 0 ? t : t.filter((s) => U4(s, e) !== "same");
}
function iBe(r, e, n) {
  if (e.length === 0) return !1;
  if (
    !e.every((s) => {
      let o = U4(r, s);
      if (o === "indeterminate") return !1;
      if (o === "same") return !0;
      return !pwr(s, r);
    })
  )
    return !1;
  if (n?.requireCovered === !0) {
    let s = bD(r);
    if (rG(s)) return !1;
    let o = (a) =>
      a.some((u) => {
        let i = bD(u);
        if (rG(i)) return !1;
        return Kpt(s, i);
      });
    return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []);
  }
  return !0;
}
export { CIe, pwr, D3e, Wct, iBe };

//# sourceMappingURL=chunk-gdqrmwqs.js.map
