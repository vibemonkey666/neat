// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _ } from "./chunk-4kxznmzw.js";
import { re, Or } from "./chunk-a16y5hcz.js";
import { A$e, dui, Oi } from "./chunk-dc0nzty2.js";
import { gt, hs } from "./chunk-wr0p4ndg.js";
import { cqe, fZ, g6o } from "./chunk-bwbrda44.js";
import { le } from "./chunk-vw9e882a.js";
var w = /\p{Default_Ignorable_Code_Point}/u,
  R = /\p{Cf}/u;
function T(n) {
  return (
    (n >= 8204 && n <= 8207) ||
    n === 1564 ||
    (n >= 65024 && n <= 65039) ||
    (n >= 6155 && n <= 6159) ||
    n === 10240
  );
}
function d(n, t) {
  return (
    w.test(n) ||
    n === "\u2028" ||
    n === "\u2029" ||
    n === "\u2800" ||
    (t >= 55296 && t <= 57343) ||
    t === 1109742 ||
    R.test(n)
  );
}
function x7(n) {
  for (let t of n) if (d(t, t.codePointAt(0) ?? 0)) return !0;
  return !1;
}
function M(n, t) {
  return d(n, t) && !T(t);
}
function b(n, t) {
  let e = "";
  for (let r of n) e += t(r, r.codePointAt(0) ?? 0) ? "\uFFFD" : r;
  return e;
}
function S(n, t) {
  let e = Array.from(n),
    r = "";
  for (let o = 0; o < e.length; o++) {
    let i = e[o] ?? "";
    r += t(
      i,
      i.codePointAt(0) ?? 0,
      e[o - 1]?.codePointAt(0) ?? Number.NaN,
      e[o + 1]?.codePointAt(0) ?? Number.NaN
    )
      ? "\uFFFD"
      : i;
  }
  return r;
}
function nc(n) {
  return Oi(b(n, M));
}
function Ctt(n) {
  return h(E(n));
}
function E(n) {
  return Oi(b(n, d));
}
var pz = 2000,
  F = 253;
function fZn(n) {
  return F + (n.endsWith(".") && !n.endsWith("..") ? 1 : 0);
}
var FS = 200000;
function D(n, t = pz) {
  return re(n, t) === n;
}
function Iw(n) {
  return (
    n.includes(`
`) || le(n) > 80
  );
}
function xhn(n) {
  let t = re(n, pz),
    e = t.replace(/\t/g, " ");
  return t === n ? e : `${e}\u2026`;
}
function g(n) {
  return le(n.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}
function p(n) {
  return Array.from(n)
    .filter((t) => C(t))
    .join("");
}
function C(n) {
  return le(n.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}
var I = 8,
  O = /\p{M}/u;
function V2o(n) {
  return O.test(n) || !C(n);
}
function ah(n) {
  let t = "",
    e = 0,
    r = !1;
  for (let o of n) {
    if (
      o ===
      `
`
    ) {
      if (r) ((t += "\uFFFD"), (r = !1));
      ((t += o), (e = 0));
      continue;
    }
    if (!V2o(o)) {
      if (r) ((t += "\uFFFD"), (r = !1));
      ((t += o), (e = 0));
      continue;
    }
    if (e < I) {
      ((t += o), e++);
      continue;
    }
    r = !0;
  }
  return r ? `${t}\uFFFD` : t;
}
function h(n) {
  return Oi(ah(n));
}
function L(n) {
  let t = Array.from(n),
    e = 0,
    r = t.length;
  while (e < r && !g(t[e] ?? "")) e++;
  while (r > e && !g(t[r - 1] ?? "")) r--;
  return t.slice(e, r).join("");
}
function m(n, t) {
  let e = Array.from(L(n));
  return t === "end" ? e.at(-1) : e[0];
}
function k(n) {
  return m(n, "end") === "\u2026";
}
function A7s(n) {
  let t = Array.from(n),
    e = t.length;
  for (;;) {
    let r = e;
    while (r > 0 && !g(t[r - 1] ?? "")) r--;
    if (r > 0 && t[r - 1] === "\u2026") {
      e = r - 1;
      continue;
    }
    break;
  }
  return t.slice(0, e).join("");
}
function c9(n) {
  let t = [],
    e = !1;
  for (let r of Array.from(n)) {
    if (
      r !==
        `
` &&
      !g(r)
    ) {
      e = !0;
      continue;
    }
    if (r === "\uFFFD" && e) {
      e = !1;
      continue;
    }
    ((e = !1), t.push(r));
  }
  return g(t.join(""));
}
function z(n) {
  return /^[A-Za-z_$][\w$]*$/.test(n);
}
function AKe(n) {
  return Ctt(n);
}
function ezt(n) {
  return h(
    Oi(
      S(n, (t, e, r, o) => {
        if (e === 65038 || e === 65039) return !(r > 127 || o === 8419);
        if (e === 8204 || e === 8205) return !(r > 127 && o > 127);
        if (e >= 6155 && e <= 6159) return !(r > 127);
        return d(t, e);
      })
    )
  );
}
function C$(n) {
  if (n === void 0) return !1;
  let t = Ctt(n)
    .replace(/\uFFFD/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return t !== "" && le(t) > 0;
}
var Rtt = 48,
  $U = 256;
function g_e(n) {
  let t = AKe(re(n, $U)),
    e = t.replace(/\s+/g, " ").trim();
  return gt(pZn(e, t, n.length > $U), Rtt);
}
function pZn(n, t, e = !1) {
  let r = m(n, "start") === '"' || m(n, "end") === '"' || k(n);
  return n === t && !r && !e ? n : _(t);
}
function A(n) {
  let t = AKe(re(n, $U)),
    e = t.replace(/\s+/g, " ").trim();
  return pZn(e, t, n.length > $U);
}
function _Ce(n) {
  return re(n, $U) === n;
}
function CKe(n, t) {
  let e = new Map(),
    r = (s) => t(s).normalize("NFC");
  for (let s of n) {
    let a = r(s),
      u = e.get(a) ?? new Set();
    (u.add(s), e.set(a, u));
  }
  let o = (s) =>
      _(re(s, pz)).replace(
        /[\u007f-\uffff]/g,
        (a) => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`
      ) + (s.length > pz ? "\u2026" : ""),
    i = new Map();
  return n.map((s) => {
    let a = r(s);
    if ((e.get(a)?.size ?? 0) <= 1) return t(s);
    let u = o(s),
      l = i.get(u) ?? new Map();
    i.set(u, l);
    let c = l.get(s) ?? l.size + 1;
    return (l.set(s, c), c > 1 ? `${u} (#${c})` : u);
  });
}
function Phn(n) {
  let t = new Map();
  for (let i of n) t.set(i, z(i) ? i : _(Ctt(i)));
  let e = new Map();
  for (let i of t.values()) e.set(i, (e.get(i) ?? 0) + 1);
  let r = P(n),
    o = new Map();
  for (let i of n) {
    let s = t.get(i) ?? "",
      a = (e.get(s) ?? 0) > 1 || r.has(i.normalize("NFC"));
    o.set(
      i,
      a
        ? _(i).replace(
            /[\u007f-\uffff]/g,
            (u) => `\\u${u.charCodeAt(0).toString(16).padStart(4, "0")}`
          )
        : s
    );
  }
  return o;
}
function P(n) {
  let t = new Map(),
    e = new Set();
  for (let r of n) {
    let o = r.normalize("NFC"),
      i = t.get(o);
    if (i !== void 0 && i !== r) e.add(o);
    else t.set(o, r);
  }
  return e;
}
function jk(n) {
  return typeof n === "string" && Uwt(n) ? "" : String(ioe(n));
}
function ioe(n) {
  let t = typeof n === "string" && !Uwt(n) ? n : cqe;
  return fZ(g_e(t));
}
function Uwt(n) {
  return n === "" || le(re(n, $U)) === 0;
}
function B(n) {
  return n
    .replace(/_+/g, " ")
    .trim()
    .replace(/\b\w/g, (t) => t.toUpperCase());
}
function mZn(n) {
  let t = re((n.scope === "claudeai" ? n.displayName : void 0) ?? "", $U),
    e = re(n.title ?? "", $U),
    r = ezt(re(n.serverName, $U)),
    o = C$(t) ? ezt(t) : c9(r) ? r : "(unnamed server)",
    i = re(n.toolName, $U),
    s = AKe(B(i)),
    a = AKe(i),
    u = C$(e) ? ezt(e) : c9(s) ? s : c9(a) ? a : "(unnamed tool)";
  return fZ(gt(`${o} \u2014 ${u}`.replace(/\s+/g, " ").trim(), Rtt));
}
function gZn(n) {
  return fZ(NLe(n, "(unnamed tool)"));
}
function NLe(n, t) {
  let e = g_e(n);
  return c9(e) ? e : t;
}
function ya(n) {
  if (typeof n !== "string") return { text: fZ(""), needsGutter: !1 };
  let t = h(nc(xhn(n)));
  return { text: fZ(t), needsGutter: Iw(t) };
}
function u9(n) {
  if (typeof n !== "string") return null;
  if (!_Ce(n) || n.trim() === "" || le(n) === 0) return null;
  if (ah(n) !== n) return null;
  return { display: fZ(A(n)) };
}
var f = "(value cannot be shown in full \u2014 approval withheld; one-time options only)",
  U = 1e4,
  W = 64;
function x(n, t, e = 0) {
  if (typeof n === "string") {
    if (n.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let i = _(n);
    if (((t.unitsRemaining -= i.length), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    return i;
  }
  if (typeof n === "number") {
    let i = Number.isFinite(n) ? String(n) : "null";
    if (((t.unitsRemaining -= i.length), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    return i;
  }
  if (typeof n === "boolean" || n === null) {
    if (((t.unitsRemaining -= String(n).length), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    return String(n);
  }
  if (typeof n === "bigint") throw Error("bigint payload cannot be serialized");
  if (typeof n !== "object") return;
  if (e >= W) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(n)) {
    let i = n.length;
    if (typeof i !== "number" || !Number.isSafeInteger(i) || i < 0)
      throw Error("payload length is not an honest array length");
    if (((t.elementsRemaining -= i), t.elementsRemaining < 0))
      throw Error("payload exceeds the element serialization wall");
    if (((t.unitsRemaining -= 2 + (i > 0 ? i - 1 : 0)), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    let s = [];
    for (let a = 0; a < i; a++) {
      let u = x(n[a], t, e + 1);
      if (u === void 0) {
        if (((t.unitsRemaining -= 4), t.unitsRemaining < 0))
          throw Error("payload exceeds the serialization budget");
        s.push("null");
      } else s.push(u);
    }
    return `[${s.join(",")}]`;
  }
  let r = Object.entries(n);
  if (((t.elementsRemaining -= r.length), t.elementsRemaining < 0))
    throw Error("payload exceeds the element serialization wall");
  if (((t.unitsRemaining -= 2), t.unitsRemaining < 0))
    throw Error("payload exceeds the serialization budget");
  let o = [];
  for (let [i, s] of r) {
    let a = x(s, t, e + 1);
    if (a === void 0) continue;
    if (i.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let u = _(i);
    if (((t.unitsRemaining -= u.length + 1 + (o.length > 0 ? 1 : 0)), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    o.push(`${u}:${a}`);
  }
  return `{${o.join(",")}}`;
}
function US(n, t) {
  let e;
  if (typeof n === "string") e = n;
  else
    try {
      let s = x(n, { unitsRemaining: t?.maxUnits ?? pz, elementsRemaining: U });
      if (s === void 0) return { kind: "withheld", marker: fZ(f) };
      e = s;
    } catch {
      return { kind: "withheld", marker: fZ(f) };
    }
  if (!D(e, t?.maxUnits)) return { kind: "withheld", marker: fZ(f) };
  let r = t?.softWrap ? dui(e) : e,
    o = (t?.scrub === "key" ? E(r) : nc(r)).replace(/\t/g, " "),
    i = t?.softWrap
      ? o.replaceAll(
          `
`,
          ""
        )
      : o;
  if (A$e.test(i)) return { kind: "withheld", marker: fZ(f) };
  if (ah(o) !== o) return { kind: "withheld", marker: fZ(f) };
  return { kind: "full", text: fZ(o), needsGutter: Iw(o) };
}
function fj(n) {
  let t = nc(n);
  return A$e.test(t) || N(t);
}
function C7s(n) {
  return N(nc(n));
}
function N(n) {
  return ah(n) !== n;
}
function jzr(n) {
  let t = AKe(re(n, $U)),
    e = t.replace(/\s+/g, " ").trim();
  return pZn(
    e,
    t,
    e.includes(",") ||
      e.includes(";") ||
      p(e).includes(" and ") ||
      p(e).startsWith("and ") ||
      p(e).endsWith(" and") ||
      n.length > $U ||
      ah(re(n, $U)) !== re(n, $U)
  );
}
function mz(n, t = A) {
  return CKe(n, t).map((e) => fZ(e));
}
function _a(n) {
  return n.replace(/[\n\r\u2028\u2029]/g, "\uFFFD");
}
function Bwt(n, t) {
  let e = n.map((l) => US(l, t)),
    r = new Map();
  n.forEach((l, c) => {
    let y = e[c];
    if (y.kind === "full" && !r.has(l)) r.set(l, _a(y.text).replace(/\s+/g, " ").trim());
  });
  let o = n.filter((l, c) => e[c].kind === "full"),
    i = mz(o, (l) => r.get(l) ?? ""),
    s = [],
    a = 0,
    u = 0;
  for (let l of e)
    if (l.kind === "full") s.push({ text: String(i[a++]), withheld: !1 });
    else ((u += 1), s.push({ text: `${l.marker} (#${u})`, withheld: !0 }));
  return s;
}
function jwt(n) {
  if (typeof n !== "string") return g6o("");
  return g6o(nc(n));
}
function aoe(n) {
  if (typeof n !== "string") return null;
  let t = ezt(re(n, $U)).replace(/\t/g, " ");
  if (!c9(Or(t))) return null;
  if (k(Or(t))) return null;
  return fZ(hs(t, 24, !0));
}
function R7s(n, ...t) {
  let e = n[0] ?? "";
  for (let r = 0; r < t.length; r++) ((e += t[r] ?? ""), (e += n[r + 1] ?? ""));
  return fZ(e);
}
export {
  x7,
  nc,
  Ctt,
  pz,
  fZn,
  FS,
  Iw,
  xhn,
  V2o,
  ah,
  A7s,
  c9,
  AKe,
  ezt,
  C$,
  Rtt,
  $U,
  g_e,
  pZn,
  _Ce,
  CKe,
  Phn,
  jk,
  ioe,
  Uwt,
  mZn,
  gZn,
  NLe,
  ya,
  u9,
  US,
  fj,
  C7s,
  jzr,
  mz,
  _a,
  Bwt,
  jwt,
  aoe,
  R7s
};

//# sourceMappingURL=chunk-fcym4pv0.js.map
