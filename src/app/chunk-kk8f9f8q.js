// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Md } from "./chunk-ftfxe7en.js";
import { fn, Zi } from "./chunk-h56pfqh7.js";
import { de, P, Bo, Xt, C, y, j } from "./chunk-bq35vvkw.js";
j();
function lt(e, o, r = {}) {
  let { context: t = "Global", isActive: s = !0 } = r,
    n = Md(),
    [i] = y(() => ({ handler: o }));
  (Xt(() => {
    i.handler = o;
  }),
    P(() => {
      if (!n || !s) return;
      return n.registerHandler({
        action: e,
        context: t,
        handler: () => i.handler(),
        singleKey: !0
      });
    }, [e, t, n, s, i]));
}
function an(e, o = {}) {
  let { context: r = "Global", isActive: t = !0 } = o,
    s = Md(),
    [n] = y(() => ({ handlers: e })),
    i = Object.keys(e).sort().join("|");
  (Xt(() => {
    n.handlers = e;
  }),
    P(() => {
      if (!s || !t) return;
      let c = Object.keys(n.handlers).map((u) =>
        s.registerHandler({
          action: u,
          context: r,
          handler: () => n.handlers[u]?.(),
          singleKey: !0
        })
      );
      return () => {
        for (let u of c) u();
      };
    }, [r, i, s, t, n]));
}
function um(e, { isActive: o = !0 } = {}) {
  let r = Md(),
    [t] = y(() => ({ handler: e }));
  (Xt(() => {
    t.handler = e;
  }),
    P(() => {
      if (!o || !r) return;
      return r.registerPreDispatch({ handler: (s, n, i) => t.handler(s, n, i) });
    }, [o, r, t]));
}
j();
var a = 800;
function B6(e, o, r, t = a) {
  let s = fn(),
    n = Zi(),
    i = C(0),
    c = C(void 0),
    u = Bo(() => e(!1)),
    l = de(() => {
      if (c.current) (c.current(), (c.current = void 0));
    }, []);
  return (
    P(
      () => () => {
        if (c.current) (l(), u());
      },
      [l]
    ),
    de(() => {
      let d = n();
      if (d - i.current <= t && c.current !== void 0) (l(), e(!1), o());
      else
        (r?.(),
          e(!0),
          l(),
          (c.current = s.setTimeout(() => {
            (e(!1), (c.current = void 0));
          }, t)));
      i.current = d;
    }, [e, o, r, l, s, n, t])
  );
}
export { lt, an, um, B6 };

//# sourceMappingURL=chunk-kk8f9f8q.js.map
