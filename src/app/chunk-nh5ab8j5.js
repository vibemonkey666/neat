// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { un } from "./chunk-wr0p4ndg.js";
import { fn } from "./chunk-h56pfqh7.js";
import { an } from "./chunk-kk8f9f8q.js";
import { de, kt, j } from "./chunk-bq35vvkw.js";
j();
function hF(r, o, t = 1000, n = 0, a) {
  let e = fn(),
    u = () => un(Math.max(0, (a ?? Date.now()) - r - n)),
    l = de(
      (f) => {
        if (!o) return () => {};
        let i,
          s = () => {
            try {
              f();
            } finally {
              i = e.setTimeout(s, t);
            }
          };
        return ((i = e.setTimeout(s, t)), () => i());
      },
      [o, t, e]
    );
  return kt(l, u, u);
}
function N2({ onClose: r, onBack: o, onKill: t, onEnter: n }) {
  return (
    an({ "confirm:yes": n ?? r }, { context: "Confirmation" }),
    function (e) {
      if (e.key === " ") (e.preventDefault(), r());
      else if (e.key === "left" && o) (e.preventDefault(), o());
      else if (e.key === "x" && !e.ctrl && !e.meta && t) (e.preventDefault(), t());
    }
  );
}
export { hF, N2 };

//# sourceMappingURL=chunk-nh5ab8j5.js.map
