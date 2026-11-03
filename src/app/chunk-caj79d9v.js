// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { AJ, tG, Qje } from "./chunk-j0tbz6ra.js";
import { hm } from "./chunk-6h7ejyet.js";
function s(i, r, d) {
  let { plugin: n } = i,
    e = n !== void 0 && AJ();
  if (e) hm(() => Qje(n));
  if (e && !i.recurring) tG(r, void 0, i.agentId ? "stays" : d);
  return e;
}
var lfr = (i) => (r, d) => {
    let n = () => {
        if (d !== void 0) hm(d);
      },
      e = () => {
        if (s(r, e, n)) return;
        i(r, n);
      },
      o = s(r, e, n);
    if (!o) i(r, () => {});
    return o && !r.recurring;
  },
  dfr = (i) => (r, d) => {
    let n = new Map();
    return (
      r.forEach((e) => {
        n.set(e.plugin, [...(n.get(e.plugin) ?? []), e]);
      }),
      [...n].flatMap(([e, o]) => {
        let l = e === void 0 ? {} : { plugin: e },
          t = () => hm(() => d(o)),
          u = () => {
            if (s(l, u, t)) return;
            i(o, e, t);
          },
          a = s(l, u, t),
          f = !1,
          g = !1;
        if (!a)
          i(o, e, () => {
            if (((f = !0), g)) t();
          });
        return ((g = !0), a || !f ? o.map((c) => c.id) : []);
      })
    );
  };
export { lfr, dfr };

//# sourceMappingURL=chunk-caj79d9v.js.map
