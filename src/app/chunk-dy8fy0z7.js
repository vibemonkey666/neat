// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { dKe } from "./chunk-t6wy6xxv.js";
import { rt, Kr } from "./chunk-h56pfqh7.js";
import { Zr, xpe } from "./chunk-xkry565w.js";
import { Oa, Wo } from "./chunk-fgf47p3n.js";
import { Xn, ai } from "./chunk-j0tbz6ra.js";
import { ls } from "./chunk-vgsmcxaz.js";
import { C, y, j } from "./chunk-bq35vvkw.js";
j();
j();
function h() {
  let [o] = y(() => (dKe() ? xpe : Zr));
  return o;
}
function bPe(o, { selfOpened: u, hasOpeningGrace: r = u, onCancelled: S, owedAtExit: b }) {
  let [R, s] = y(!1),
    n = C(!1),
    [c, E] = y(!1),
    e = C(!1),
    i = h(),
    x = Kr(r ? i : null),
    d = !r || x,
    A = rt() ? !0 : !1,
    g = Oa(i),
    { refusedWithin: v, noteRefused: w } = Wo();
  function _() {
    if (r && (g() || v(i))) return (w(), !0);
    return !1;
  }
  let a = ls(
    () => {
      if (e.current) return;
      let t = n.current;
      n.current = !0;
      let l = S(t);
      if (l === void 0) {
        e.current = !0;
        let p = b?.(t);
        if (p === void 0) {
          ai(1);
          return;
        }
        p.then(
          (m) => Xn(1, "other", m === void 0 ? void 0 : { finalMessage: m }),
          () => Xn(1)
        );
        return;
      }
      (s(!0), f(l));
    },
    void 0,
    u && !c
  );
  function D() {
    if (n.current || !d) return !1;
    return ((n.current = !0), s(!0), !0);
  }
  function f(t) {
    if (e.current) return;
    ((e.current = !0), E(!0), o(t));
  }
  return {
    choicesDisabled: !d && !A,
    decided: R,
    take: D,
    refuseInput: _,
    settled: () => e.current,
    handBack: f,
    exit: a,
    exitHintShowing: a.pending && !c
  };
}
export { bPe };

//# sourceMappingURL=chunk-dy8fy0z7.js.map
