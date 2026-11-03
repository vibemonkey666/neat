// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { aX, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { sd } from "./chunk-6jbh8yja.js";
var KBt = (e) => (e.mcpInfo?.effectiveMaxPermission === "ask" ? { ceiling: "ask" } : {});
var j1 = (e) => ({ tool: e.name, ceiling: KBt(e).ceiling });
class d extends Error {}
var O = [[48, 57]],
  E = [
    [48, 57],
    [65, 90],
    [95, 95],
    [97, 122]
  ],
  C = [
    [9, 13],
    [32, 32],
    [160, 160],
    [5760, 5760],
    [8192, 8202],
    [8232, 8233],
    [8239, 8239],
    [8287, 8287],
    [12288, 12288],
    [65279, 65279]
  ],
  P = { d: O, D: S(O), w: E, W: S(E), s: C, S: S(C) },
  N = S([
    [10, 10],
    [13, 13],
    [8232, 8233]
  ]),
  F = /^[ -/:-@[-`{-~]$/,
  j = 100,
  q = "^$\\.*+?()[]{}|";
function A(e, n) {
  let r = 0,
    o = e.length;
  while (r < o) {
    let i = (r + o) >> 1;
    if (n > e[i][1]) r = i + 1;
    else o = i;
  }
  return r < e.length && n >= e[r][0];
}
function S(e) {
  let n = [],
    r = 0;
  for (let [o, i] of e) {
    if (o > r) n.push([r, o - 1]);
    r = i + 1;
  }
  if (r <= 65535) n.push([r, 65535]);
  return n;
}
function U(e) {
  let n = [];
  for (let [r, o] of e.toSorted((i, u) => i[0] - u[0])) {
    let i = n.at(-1);
    if (i !== void 0 && r <= i[1] + 1) i[1] = Math.max(i[1], o);
    else n.push([r, o]);
  }
  return n;
}
function X(e) {
  let n = 0,
    r = 0;
  function o(s) {
    if (!e.startsWith(s, n)) return !1;
    return ((n += s.length), !0);
  }
  function i() {
    if (n >= e.length) throw new d();
    return e.charCodeAt(n++);
  }
  function u() {
    let s = [p()];
    while (o("|")) s.push(p());
    return { type: "either", options: s };
  }
  function p() {
    let s = [];
    while (n < e.length && e[n] !== "|" && e[n] !== ")") s.push(w());
    return { type: "sequence", items: s };
  }
  function w() {
    if (o("^")) return { type: "start" };
    if (o("$")) return { type: "end" };
    if (o("\\b")) return { type: "boundary" };
    if (o("\\B")) return { type: "notBoundary" };
    let s = _(),
      l = e[n];
    if (l !== "*" && l !== "+" && l !== "?") return s;
    return (n++, o("?"), { type: "repeat", item: s, mark: l });
  }
  function _() {
    if (o("(")) {
      if ((e[n] === "?" && !o("?:")) || ++r > j) throw new d();
      let s = u();
      if (!o(")")) throw new d();
      return (r--, s);
    }
    if (o(".")) return { type: "set", set: N };
    if (o("[")) return { type: "set", set: y() };
    if (o("\\")) {
      let s = g();
      return typeof s === "number" ? { type: "unit", unit: s } : { type: "set", set: s };
    }
    if (q.includes(e[n] ?? "")) throw new d();
    return { type: "unit", unit: i() };
  }
  function g() {
    let s = i(),
      l = String.fromCharCode(s);
    if (Object.hasOwn(P, l)) return P[l];
    if (!F.test(l)) throw new d();
    return s;
  }
  function y() {
    let s = o("^"),
      l = [];
    while (!o("]")) {
      let b = o("\\") ? g() : i(),
        H = e[n] === "-" && e[n + 1] !== "]";
      if (typeof b !== "number") {
        if (H) throw new d();
        l.push(...b);
        continue;
      }
      if (!H) {
        l.push([b, b]);
        continue;
      }
      n++;
      let T = o("\\") ? g() : i();
      if (typeof T !== "number" || T < b) throw new d();
      l.push([b, T]);
    }
    return s ? S(U(l)) : U(l);
  }
  let m = { type: "start" },
    h,
    a;
  if (o("^(?!")) {
    if (((h = { type: "sequence", items: [m, u()] }), !o(")"))) throw new d();
    a = { type: "sequence", items: [m, p()] };
  } else a = u();
  if (n < e.length) throw new d();
  return { unless: h, whole: a };
}
var c = {
  match: 0,
  unit: 1,
  set: 2,
  jump: 3,
  split: 4,
  start: 5,
  end: 6,
  boundary: 7,
  notBoundary: 8
};
function x(e, n, r = 0, o) {
  return (e.to.push(r), e.other.push(0), e.sets.push(o), e.ops.push(n) - 1);
}
function k(e, n) {
  let { ops: r, to: o, other: i } = n;
  switch (e.type) {
    case "unit":
      x(n, c.unit, e.unit);
      return;
    case "set":
      x(n, c.set, 0, e.set);
      return;
    case "start":
    case "end":
    case "boundary":
    case "notBoundary":
      x(n, c[e.type]);
      return;
    case "sequence":
      for (let u of e.items) k(u, n);
      return;
    case "either": {
      let u = [];
      for (let p of e.options.slice(0, -1)) {
        let w = x(n, c.split, r.length + 1);
        (k(p, n), u.push(x(n, c.jump)), (i[w] = r.length));
      }
      k(e.options.at(-1), n);
      for (let p of u) o[p] = r.length;
      return;
    }
    case "repeat": {
      let u = r.length;
      if (e.mark === "+") {
        k(e.item, n);
        let p = x(n, c.split, u);
        i[p] = r.length;
        return;
      }
      if ((x(n, c.split, u + 1), k(e.item, n), e.mark === "*")) x(n, c.jump, u);
      i[u] = r.length;
    }
  }
}
function G({ ops: e, to: n, other: r, sets: o }, i) {
  let u = new Int32Array(e.length).fill(-1),
    p = new Int32Array(e.length),
    w = new Int32Array(e.length),
    _ = 0,
    g = 0,
    y = 0;
  function m(h) {
    if (u[h] !== y) ((u[h] = y), (p[_++] = h));
  }
  for (; ; y++) {
    while (g > 0) m(w[--g]);
    m(0);
    let h = y < i.length ? i.charCodeAt(y) : -1;
    while (_ > 0) {
      let a = p[--_];
      switch (e[a]) {
        case c.match:
          return !0;
        case c.unit:
          if (h === n[a]) w[g++] = a + 1;
          break;
        case c.set:
          if (A(o[a], h)) w[g++] = a + 1;
          break;
        case c.split:
          (m(r[a]), m(n[a]));
          break;
        case c.jump:
          m(n[a]);
          break;
        case c.start:
          if (y === 0) m(a + 1);
          break;
        case c.boundary:
        case c.notBoundary: {
          if (((y > 0 && A(E, i.charCodeAt(y - 1))) !== A(E, h)) === (e[a] === c.boundary))
            m(a + 1);
          break;
        }
        default:
          if (h < 0) m(a + 1);
      }
    }
    if (h < 0) return !1;
  }
}
function M(e) {
  let n = { ops: [], to: [], other: [], sets: [] };
  return (k(e, n), x(n, c.match), G.bind(null, n));
}
function R(e) {
  try {
    let { unless: n, whole: r } = X(e),
      o = M(r);
    if (n === void 0) return { test: o };
    let i = M(n);
    return { test: (u) => !i(u) && o(u) };
  } catch (n) {
    if (n instanceof d) return;
    throw n;
  }
}
var K = 2048,
  D = 512,
  UFr = 1024,
  BFr = 16384;
class Lde extends Error {}
function L(e) {
  if (e.length > K) return "too_long";
  let n = R(e);
  if (n !== void 0) return n;
  try {
    return (new RegExp(e), "not_read");
  } catch {
    return "invalid";
  }
}
function Y6n(e) {
  if (!J()) return new RegExp(e);
  let n = L(e);
  if (n === "invalid") throw SyntaxError("invalid hook matcher");
  if (typeof n === "string")
    throw new Lde(
      "This hook's matcher cannot be tested in a cloud session: it has to be rewritten."
    );
  return {
    test(r) {
      if (r.length > D)
        throw new Lde(
          `The name that this hook's matcher is tested against (for a tool call, the tool's name) has over ${D} characters, more than a cloud session tests.`
        );
      return n.test(r);
    }
  };
}
function a_t(e) {
  return e.hook.type === "callback" && e.hook.internal === !0;
}
function QVs(e, n) {
  if (sd()) {
    let r = e.filter(a_t),
      o = e.length - r.length;
    if (o > 0)
      (t(
        `Hooks: ${o} ${n} ${I(o, "hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`,
        { level: "warn" }
      ),
        f(aX(n), "not_run_in_tool_server_daemon", { num_dropped: o }));
    return r;
  }
  return e;
}
export { UFr, BFr, Lde, Y6n, KBt, j1, a_t, QVs };

//# sourceMappingURL=chunk-brsp4twh.js.map
