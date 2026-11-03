// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { tf } from "./chunk-kk9smtrr.js";
import { He } from "./chunk-1hp0t8kv.js";
import { gc, Cse, Rse, cq } from "./chunk-9z5ybxhe.js";
import { tVe, nVe } from "./chunk-06m3v1mh.js";
import { En } from "./chunk-errevp3y.js";
import { H } from "./chunk-p8tprgqa.js";
import { L } from "./chunk-wrtp8qz8.js";
function _() {
  let o = { log() {}, hookFailed() {} };
  return {
    set: (r) => {
      o = r;
    },
    get: () => o
  };
}
var d = _();
var Gl = d.get;
var Dyn = d.set;
function $_(o) {
  if (!H(o)) return !1;
  let r = Object.getPrototypeOf(o);
  return r === null || (!tf(r) && Object.getPrototypeOf(r) === null);
}
function b(o, r, t) {
  if (typeof o !== "object" || !o || r.has(o)) return t;
  if (tf(o)) return t;
  let e = (t?.depth ?? 0) + 1;
  if (e > tVe) throw RangeError(nVe);
  r.add(o);
  let n = Array.isArray(o);
  return n || $_(o) ? { node: o, keys: n ? [] : Object.keys(o), at: 0, depth: e, below: t } : t;
}
function ZVo(o, r) {
  let t = b(o, r, void 0);
  while (t !== void 0) {
    let { node: e, keys: n, at: s } = t,
      a = Array.isArray(e);
    if (s < (a ? e : n).length) ((t.at = s + 1), (t = b(a ? e[s] : e[n[s] ?? ""], r, t)));
    else (Object.freeze(e), (t = t.below));
  }
}
function JKe(o) {
  return (ZVo(o, new Set()), o);
}
function VKr(o, r, t) {
  if (o === void 0) return !0;
  if (Array.isArray(o)) return o.some((n) => VKr(n, r, t));
  if (!$_(o) || Object.keys(o).join() !== r) return !1;
  let e = o[r];
  return Array.isArray(e) ? e.includes(t) : e === t;
}
var pei = 8;
var mei = 256;
var g = 65536;
function eo(o) {
  if (o === void 0) return "undefined";
  if (typeof o === "function") return "a function";
  if (typeof o === "object" && o) {
    let r = Object.prototype.toString.call(o).replace(/^\[object |\]$/g, "");
    return r === "Object" ? "an object" : `a ${r}`;
  }
  return `a ${typeof o}`;
}
function p(o) {
  if (typeof o !== "object" || !o) return !1;
  try {
    return (Reflect.get(RegExp.prototype, "source", o), !0);
  } catch {
    return !1;
  }
}
var QKe = (o) => $_(o) && !p(o);
var P = (o) => o?.paths.some((r) => r.length === 0) === !0;
var Myn = "__proto__";
function Kk(o, r) {
  let t = Object.create(null);
  for (let [e, n] of Object.entries(o)) if (e !== Myn && r(n, e)) t[e] = n;
  return t;
}
var _Si = (o) => Object.freeze(Kk(H(o) ? o : {}, (r) => typeof r === "string"));
function I(o, r) {
  let t = L([r, gc(r)].flatMap((e) => Rse(e, o)));
  return L(t.concat(t.flatMap((e) => cq(e, o))).flatMap((e) => [e, ...Cse(e)]));
}
function W(o, r) {
  return o.paths.some((e) => e[0] === r)
    ? { table: o.table, paths: o.paths.filter((e) => e[0] === r).map((e) => e.slice(1)) }
    : void 0;
}
var bSi = Object.freeze({});
var A = Object.freeze({
  "tool.call": [["tool"]],
  "tool.check": [["tool"]],
  "tool.describe": [["tool"]],
  "classic.PreToolUse": [["tool"]],
  "classic.PostToolUse": [["tool_name"]],
  "classic.PostToolUseFailure": [["tool_name"]],
  "classic.PermissionRequest": [["tool_name"]],
  "classic.PermissionDenied": [["tool_name"]],
  "classic.PostToolBatch": [["tool_calls", "tool_name"]],
  "session.append": [["origin", "tool"]],
  "session.compact": [["messages", "toolUses", "tool"]],
  "ui.render": [
    ["props", "tool"],
    ["props", "calls", "tool"]
  ]
});
var eqo = (o) => (Object.hasOwn(A, o) ? A[o] : void 0);
var S = (o, r, t) =>
  P(o) && typeof r === "string" && typeof t === "string" && I(o.table, t).includes(r);
function qKr(o) {
  let r = typeof o === "function";
  return p(o)
    ? String(o)
    : Array.isArray(o)
      ? o.map(qKr).join("|")
      : QKe(o)
        ? `{${Object.entries(o)
            .map(([t, e]) => (QKe(e) ? `${t} has ${qKr(e)}` : `${t}=${qKr(e)}`))
            .join(", ")}}`
        : r
          ? "function"
          : String(o);
}
var i = (o) => ({
  source: String(Reflect.get(RegExp.prototype, "source", o)),
  flags: String(Reflect.get(RegExp.prototype, "flags", o))
});
var YKr = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;
var K = "w";
var C = (o) => Array.from(o, (r) => (En(r) === r ? K : r)).join("");
function F(o) {
  let r = o.source.startsWith("^(") && o.source.endsWith(")$");
  return (
    o.flags === "" &&
    YKr.test(C(o.source)) &&
    (r || o.source.split("|").every((t) => t.startsWith("^") && t.endsWith("$")))
  );
}
var z = (o, r, t) =>
  P(o.names) && typeof t === "string" && F(i(r)) && I(o.names.table, t).some((e) => o.test(r, e));
function D(o, r) {
  return o.names === void 0 ? o : { test: o.test, names: W(o.names, r) };
}
function u(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.some.call(o, (e) => u(e, r, t));
  if (Array.isArray(r)) return Array.prototype.some.call(r, (e) => u(o, e, t));
  if (typeof o !== "object" || o === null) return o === r || S(t.names, o, r);
  if ($_(o)) {
    if (typeof r !== "object" || !r) return !1;
    for (let e of Object.keys(o)) if (!Object.hasOwn(r, e) || !u(o[e], r[e], D(t, e))) return !1;
    return !0;
  }
  return p(o) && (t.test(o, String(r)) || z(t, o, r));
}
function Hyn(o, r, t = "") {
  let e;
  if (Array.isArray(o))
    return (Array.prototype.some.call(o, (n) => ((e = Hyn(n, r, t)), e !== void 0)), e);
  if (Array.isArray(r))
    return (Array.prototype.some.call(r, (n) => ((e = Hyn(o, n, t)), e !== void 0)), e);
  if (!QKe(o)) return;
  if (r === null) return { path: t, kind: "null" };
  switch (typeof r) {
    case "string":
      return { path: t, kind: "string" };
    case "number":
      return { path: t, kind: "number" };
    case "boolean":
      return { path: t, kind: "boolean" };
    case "bigint":
      return { path: t, kind: "bigint" };
    case "object":
      break;
    case "undefined":
    case "symbol":
    case "function":
      return;
  }
  for (let n of Object.keys(o)) {
    if (!Object.hasOwn(r, n)) continue;
    if (((e = Hyn(o[n], r[n], t === "" ? n : `${t}.${n}`)), e !== void 0)) return e;
  }
  return;
}
function tqo(o, r, t) {
  let e = t.path.split(".").at(-1) ?? t.path;
  return `hooks module ${o}: on('${r}') matcher at ${t.path} is a nested object, but e.${t.path} is a ${t.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${t.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`;
}
var nqo = 32;
var l = "$$regex";
function O(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.map.call(o, (e, n) => O(e, r, `${t}[${n}]`));
  if (QKe(o)) {
    let e = t === "" ? "" : ` at ${t}`,
      n = o[l];
    if (typeof n === "string" && typeof o.flags === "string" && Object.keys(o).length === 2)
      return (w({ source: n, flags: o.flags, where: r, at: e }), new RegExp(n, o.flags));
    j(o, r, e);
    let a = {};
    for (let [R, Y] of Object.entries(o)) a[R] = O(Y, r, t === "" ? R : `${t}.${R}`);
    return a;
  }
  return o;
}
function k(o) {
  if (p(o)) {
    let { source: r, flags: t } = i(o);
    return { [l]: r, flags: t };
  }
  if (Array.isArray(o)) return Array.prototype.map.call(o, k);
  if (QKe(o)) {
    let r = {};
    for (let [t, e] of Object.entries(o)) r[t] = k(e);
    return r;
  }
  return o;
}
var rqo = (o) => o.map(({ matcher: r, ...t }) => (r === void 0 ? t : { ...t, matcher: k(r) }));
var G = (o) => /\([^()]*[+*?}]\)\s*[+*{]/.test(o);
var T = (o) => (o.includes("g") ? "g" : o.includes("y") ? "y" : void 0);
function w({ source: o, flags: r, where: t, at: e }) {
  let n = T(r);
  if (n)
    throw new He(
      `${t}: matcher${e} is a RegExp with the ${n} flag, which keeps state between tests; drop it`
    );
  if (G(o))
    throw new He(
      `${t}: matcher${e} is a RegExp with a nested quantifier (${o}), which can backtrack without bound; rewrite it`
    );
}
function j(o, r, t) {
  if (Object.hasOwn(o, Myn))
    throw new He(`${r}: matcher${t} has the key ${Myn}, which a matcher does not keep`);
}
function M(o, r, t) {
  let e = t === "" ? "" : ` at ${t}`;
  if (p(o)) {
    w({ ...i(o), where: r, at: e });
    return;
  }
  if (Array.isArray(o)) {
    Array.prototype.forEach.call(o, (n, s) => M(n, r, `${t}[${s}]`));
    return;
  }
  if (QKe(o)) {
    if (Object.hasOwn(o, l))
      throw new He(
        `${r}: matcher${e} uses the reserved key ${l} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`
      );
    j(o, r, e);
    for (let [n, s] of Object.entries(o)) M(s, r, t === "" ? n : `${t}.${n}`);
    return;
  }
  switch (typeof o) {
    case "string":
      if (o.length > g)
        throw new He(
          `${r}: matcher${e} is a string longer than ${g} characters, which cannot match`
        );
      return;
    case "number":
    case "boolean":
      return;
    case "object":
      if (!o) return;
      break;
    case "bigint":
    case "symbol":
    case "undefined":
    case "function":
      break;
  }
  throw new He(
    `${r}: matcher${t === "" ? "" : ` at ${t}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${eo(o)}`
  );
}
function Ho(o, r) {
  if (r.length > g)
    return (
      Gl().log(
        `matcher: a value of ${r.length} characters is past the ${g} a RegExp matcher reads; it matches, so the hook decides`
      ),
      !0
    );
  if (T(i(o).flags)) o.lastIndex = 0;
  return RegExp.prototype.exec.call(o, r) !== null;
}
function SSi(o, r) {
  if (!QKe(o)) throw new He(`${r}: the matcher must be a plain object (a partial of e)`);
  M(o, r, "");
}
var wSi = (o, r = "matcher") => O(o, r, "");
var Evt = (o, r, t) => u(o, r, { test: Ho, names: t });
var Uer = (o, r, t) => u(o, r, { test: () => !0, names: t });
var h = (o, r, t) =>
  Array.isArray(o)
    ? o.some((e) => h(e, r, t))
    : !$_(o) || !Object.hasOwn(o, r.field) || Uer(o[r.field], r.value, t);
var Ber = (o, r, t) =>
  Object.entries(r).every(([e, n]) => h(o, { field: e, value: n }, t && W(t, e)));
var kvt = (o, r, t) => h(o, { field: r, value: t });
export {
  Myn,
  Kk,
  Gl,
  Dyn,
  $_,
  ZVo,
  JKe,
  VKr,
  pei,
  mei,
  QKe,
  _Si,
  bSi,
  eqo,
  qKr,
  YKr,
  Hyn,
  tqo,
  nqo,
  rqo,
  SSi,
  wSi,
  Evt,
  Uer,
  Ber,
  kvt
};

//# sourceMappingURL=chunk-d65ze5ng.js.map
