// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { l } from "./chunk-ewvf3tep.js";
import { _, te, eFe, cee, t } from "./chunk-4kxznmzw.js";
import { I, yi, Xf } from "./chunk-a16y5hcz.js";
import { wH, Bz, zx } from "./chunk-r1dvrqha.js";
import { k, Wn } from "./chunk-ajtyjx88.js";
import { randomInt as G } from "crypto";
function A_s() {
  return k("tengu_harbor_permissions", !1);
}
function q() {
  return Wn("tengu_quiet_elephant", !0);
}
var B = "abcdefghijkmnopqrstuvwxyz",
  H = [
    "fuck",
    "shit",
    "cunt",
    "cock",
    "dick",
    "twat",
    "piss",
    "crap",
    "bitch",
    "whore",
    "ass",
    "tit",
    "cum",
    "fag",
    "dyke",
    "nig",
    "kike",
    "rape",
    "nazi",
    "damn",
    "poo",
    "pee",
    "wank",
    "anus"
  ];
function N(n) {
  let e = 2166136261;
  for (let r = 0; r < n.length; r++) ((e ^= n.charCodeAt(r)), (e = Math.imul(e, 16777619)));
  e = e >>> 0;
  let o = "";
  for (let r = 0; r < 5; r++) ((o += B[e % 25]), (e = Math.floor(e / 25)));
  return o;
}
function C_s(n) {
  if (!q()) return K(n);
  let e = "";
  for (let o = 0; o <= 10; o++) {
    e = "";
    for (let r = 0; r < 5; r++) e += B[G(B.length)];
    if (!H.some((r) => e.includes(r))) return e;
  }
  return e;
}
function K(n) {
  let e = N(n);
  for (let o = 0; o < 10; o++) {
    if (!H.some((r) => e.includes(r))) return e;
    e = N(`${n}:${o}`);
  }
  return e;
}
var U = 3500,
  w = 2000,
  E = 1500,
  L = 15000,
  z = 30000;
function XXt(n) {
  return R(f(n).replace(/\s+/g, " ").trim());
}
function R(n) {
  let e = Array.from(n);
  if (e.length <= U) return n;
  let o = e.length - w - E;
  return (
    e.slice(0, w).join("") +
    `
\u22EF ${o} ${I(o, "code point")} elided \u22EF
` +
    e.slice(e.length - E).join("")
  );
}
function f(n) {
  return Array.from(Xf(n), (e) => (zx(e.codePointAt(0) ?? 0) ? " " : e))
    .join("")
    .replace(wH, "\xB7")
    .replace(V, "\xB7")
    .replace(W, "\xB7")
    .replace(Bz, " ");
}
var V =
    /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g,
  W = /[\u02C2\u02C3\uFE64\uFE65\uFF1C\uFF1E]/g;
function A(n) {
  return v(_(n)).replace(/\s/g, " ");
}
function T(n, e, o) {
  let r = n,
    s = A(n);
  if (e.has(s)) {
    let i = s,
      a = o.get(i) ?? 2;
    ((r = `${n}#${a}`), (s = A(r)));
    while (e.has(s)) (a++, (r = `${n}#${a}`), (s = A(r)));
    o.set(i, a + 1);
  }
  return (e.add(s), r);
}
function C(n) {
  if (Array.isArray(n)) return n.map(C);
  if (n !== null && typeof n === "object") {
    let e = Object.create(null),
      o = new Set(),
      r = new Map();
    for (let [s, i] of Object.entries(n)) e[T(eFe(s), o, r)] = C(i);
    return e;
  }
  return n;
}
var Y = 32000,
  Q = 2000000;
function M(n) {
  if (n === null || typeof n !== "object") return !1;
  let e = Q,
    o = [{ node: n, depth: 1 }];
  while (o.length > 0) {
    let r = o.pop(),
      { depth: s, node: i } = r;
    if (s >= Y) return !0;
    if (typeof i.toJSON === "function") {
      if (((e -= 1), e < 0)) return !0;
      let u;
      try {
        u = i.toJSON();
      } catch {
        return !0;
      }
      if (u === null || typeof u !== "object") continue;
      i = u;
    }
    if (Array.isArray(i)) {
      if (((e -= i.length), e < 0)) return !0;
    }
    for (let u of Object.keys(i)) {
      if (((e -= 1), e < 0)) return !0;
      let p = i[u];
      if (p !== null && typeof p === "object") o.push({ node: p, depth: s + 1 });
    }
  }
  return !1;
}
function R_s(n) {
  try {
    if (n !== null && typeof n === "object" && !Array.isArray(n)) {
      let s = [],
        i = 0,
        a = [],
        u = new Set(),
        p = new Map();
      for (let g of Object.keys(n)) {
        let h,
          m,
          y = !1;
        try {
          if (((h = n[g]), M(h))) y = !0;
          else m = _(h);
        } catch {
          y = !0;
        }
        if (m === void 0) {
          if (!y) continue;
          let F = T(eFe(g), u, p);
          t(
            "truncateForPreview: field serialization threw (depth) \u2014 rendering a loud unserializable marker",
            { level: "error" }
          );
          let b = f(_(F)).replace(/\s+/g, " "),
            P = yi(b, 50),
            O = P.length < b.length ? P + "\u2026" : P;
          if (i >= L) {
            a.push(O);
            continue;
          }
          let j = `${O}: (value unserializable)`;
          ((i += Array.from(j).length), s.push(j));
          continue;
        }
        let d = T(eFe(g), u, p);
        if (i >= L) {
          let F = f(_(d)).replace(/\s+/g, " "),
            b = yi(F, 50);
          a.push(b.length < F.length ? b + "\u2026" : b);
          continue;
        }
        let c,
          x = !1;
        try {
          c = _(C(cee({ [g]: te(m) }, eFe)[g]));
        } catch {
          x = !0;
        }
        if (c === void 0)
          if (x)
            t(
              `truncateForPreview: redaction round-trip threw for field ${_(d)} \u2014 rendering unredacted`,
              { level: "error" }
            );
          else
            (t(
              `truncateForPreview: redaction round-trip yielded no text for field ${_(d)} \u2014 rendering unredacted`,
              { level: "error" }
            ),
              l(
                Error(
                  "truncateForPreview: redaction round-trip yielded no text for a field \u2014 rendering unredacted"
                )
              ));
        let J = c === void 0 ? m : c,
          D = `${v(_(d))}: ${v(J)}`;
        ((i += Array.from(D).length), s.push(D));
      }
      let S = "";
      if (a.length > 0) {
        let h = Math.floor(z / 10);
        if (a.length <= h) {
          let m = Math.max(8, Math.floor(z / a.length) - 2),
            y = a.map((d) => {
              let c = yi(d, m);
              return c.length < d.length ? c + "\u2026" : c;
            });
          S = `
\u22EF ${a.length} ${I(a.length, "field")} elided: ${y.join(", ")} \u22EF
`;
        } else
          S = `
\u22EF ${a.length} ${I(a.length, "field")} elided (count exceeds the ${h}-name bound \u2014 refuse) \u22EF
`;
      }
      return `{ ${s.join(", ")} }${S}`;
    }
    let e;
    try {
      if (M(n))
        return (
          t(
            "truncateForPreview: non-object input exceeds the serialization depth probe \u2014 rendering a loud unserializable marker",
            { level: "error" }
          ),
          "(value unserializable)"
        );
      e = _(n);
    } catch {
      return (
        t(
          "truncateForPreview: non-object input serialization threw \u2014 rendering a loud unserializable marker",
          { level: "error" }
        ),
        "(value unserializable)"
      );
    }
    if (e === void 0) return "(unserializable)";
    let o,
      r = !1;
    try {
      o = _(C(cee(te(e), eFe)));
    } catch {
      r = !0;
    }
    if (o === void 0) {
      if (r)
        t("truncateForPreview: non-object redaction round-trip threw \u2014 rendering unredacted", {
          level: "error"
        });
      else
        (t(
          "truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted",
          { level: "error" }
        ),
          l(
            Error(
              "truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted"
            )
          ));
      o = e;
    }
    return R(f(o).replace(/\s{2,}/g, " "));
  } catch {
    return "(unserializable)";
  }
}
function v(n) {
  if (n.length <= 1e5) return R(f(n).replace(/\s{2,}/g, " "));
  let e = 0;
  for (let a of n) e++;
  let o = f(yi(n.slice(0, w * 2 + 1), w)).replace(/\s{2,}/g, " "),
    r = Array.from(Xf(n.slice(-(E * 2 + 1)))),
    s = f(r.slice(-E).join("")).replace(/\s{2,}/g, " "),
    i = e - w - E;
  return (
    o +
    `
\u22EF ${i} ${I(i, "code point")} elided \u22EF
` +
    s
  );
}
function BIt(n, e) {
  return !!n?.experimental?.[e];
}
function x_s(n, e, o) {
  return n.filter(
    (r) =>
      r.type === "connected" &&
      e(r.name) &&
      BIt(r.capabilities, "claude/channel") &&
      BIt(r.capabilities, "claude/channel/permission") &&
      o(r.name) &&
      r.protocolEra !== "modern"
  );
}
function P_s(n) {
  let e = new Map(),
    o = new Set();
  return {
    isServerRegistered: n,
    onResponse(r, s) {
      let i = r.toLowerCase();
      if (q()) {
        if (o.has(i))
          return (
            e.delete(i),
            t(
              "Channel permission relay: a request ID was drawn twice in one session; channel replies with that ID are ignored \u2014 answer in the terminal",
              { level: "warn" }
            ),
            () => {}
          );
        o.add(i);
      }
      return (
        e.set(i, s),
        () => {
          e.delete(i);
        }
      );
    },
    resolve(r, s, i) {
      let a = r.toLowerCase(),
        u = e.get(a);
      if (!u) return !1;
      return (e.delete(a), u({ behavior: s, fromServer: i }), !0);
    }
  };
}
export { A_s, C_s, XXt, R_s, BIt, x_s, P_s };

//# sourceMappingURL=chunk-k4wqb8jg.js.map
