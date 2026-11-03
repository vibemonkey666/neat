// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _, t } from "./chunk-4kxznmzw.js";
import { Ac } from "./chunk-mapzg9k3.js";
function Wse(i, u = 300000, l) {
  let o = (c) => (typeof u === "function" ? u(c) : u),
    e = new Map(),
    n = new Map(),
    a = async (...c) => {
      let s = _(c),
        r = e.get(s);
      if (r && l && !l(r.value, r.timestamp)) {
        if (r.refreshPromise) return r.refreshPromise;
        (e.delete(s), (r = void 0));
      }
      let h = Date.now();
      if (!r) {
        let f = n.get(s);
        if (f) return f;
        let g = i(...c);
        n.set(s, g);
        try {
          let m = await g;
          if (n.get(s) === g)
            e.set(s, { value: m, timestamp: Date.now(), refreshing: !1, lifetimeMs: o(m) });
          return m;
        } finally {
          if (n.get(s) === g) n.delete(s);
        }
      }
      if (r && h - r.timestamp > r.lifetimeMs && !r.refreshing) {
        r.refreshing = !0;
        let f = r,
          g = i(...c);
        return (
          (f.refreshPromise = g),
          g
            .then((m) => {
              if (e.get(s) === f)
                e.set(s, { value: m, timestamp: Date.now(), refreshing: !1, lifetimeMs: o(m) });
            })
            .catch((m) => {
              if ((t(String(m), { level: "error" }), e.get(s) === f)) e.delete(s);
            }),
          r.value
        );
      }
      return e.get(s).value;
    };
  return (
    (a.cache = {
      clear: () => {
        (e.clear(), n.clear());
      }
    }),
    a
  );
}
function wB(i, u, l = 100) {
  let o = new Ac({ max: l }),
    e = (...n) => {
      let a = u(...n),
        c = o.get(a);
      if (c !== void 0) return c;
      let s = i(...n);
      return (o.set(a, s), s);
    };
  return (
    (e.cache = {
      clear: () => o.clear(),
      size: () => o.size,
      delete: (n) => o.delete(n),
      get: (n) => o.peek(n),
      has: (n) => o.has(n),
      set: (n, a) => void o.set(n, a)
    }),
    e
  );
}
var d = new Set();
function m2(i) {
  return (d.add(i), i);
}
function vlr(i, u) {
  let l = [];
  for (let o of u) {
    let e = i.get(o);
    if (e !== void 0) l.push([o, e]);
  }
  i.clear();
  for (let [o, e] of l) i.set(o, e);
}
var R = 128;
function Wst(i, u, l) {
  let o = l?.maxSize ?? R,
    e = new Map();
  d.add(e);
  function n(...a) {
    let c = u ? u(...a) : a[0],
      s = e.get(c);
    if (s) return s;
    let r = i(...a);
    if (e.size >= o) e.delete(e.keys().next().value);
    return (
      e.set(c, r),
      r.catch(() => {
        if (e.get(c) === r) e.delete(c);
      }),
      r
    );
  }
  return ((n.cache = e), n);
}
export { Wse, wB, m2, vlr, Wst };

//# sourceMappingURL=chunk-njpzwa1b.js.map
