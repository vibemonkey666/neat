// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { yi, Xf } from "./chunk-a16y5hcz.js";
import { Zk, Bz, zx, Rqe, Kl, Dkt, Hkt } from "./chunk-r1dvrqha.js";
var ie = /[^\t\n\x20-\x7e]/,
  k = /^\p{L}$/u,
  A = /^\p{M}$/u,
  se = /^\p{White_Space}$/u,
  ae = /^[\p{Emoji}\p{Extended_Pictographic}]$/u,
  z = /^\p{Extended_Pictographic}$/u,
  fe = /^\p{Sm}$/u;
function G(e, n) {
  let r = n
    .split(" ")
    .map((i) => `\\p{${e}=${i}}`)
    .join("");
  return new RegExp(`^[${r}]$`, "u");
}
function O(e) {
  return { base: G("Script", e), mark: G("Script_Extensions", e) };
}
function F(e) {
  return { base: e, mark: e };
}
var q =
    /^[\p{Script=Arabic}\p{Script=Hebrew}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}\p{Script=Adlam}\p{Script=Hanifi_Rohingya}\p{Script=Yezidi}]$/u,
  ue = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Hanifi_Rohingya}]$/u,
  v = /^\p{Nd}$/u,
  j = O(
    "Arabic Syriac Nko Mongolian Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan"
  ),
  oe = O(
    "Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan Arabic Syriac Tifinagh"
  ),
  ce = O("Arabic Syriac Mongolian Nko"),
  Q = /^[\p{Script=Khmer}\p{Script=Thai}\p{Script=Lao}\p{Script=Myanmar}]$/u,
  le = F(Q),
  w = /^[0-9]$/,
  V = F(/^\p{Script=Mongolian}$/u),
  xe = F(/^\p{Script=Khmer}$/u),
  B = F(/^\p{Script=Egyptian_Hieroglyphs}$/u),
  J = F(/^\p{Script=Duployan}$/u),
  Y = /^\p{Script=Brahmi}$/u,
  pe = /^[\p{Script=Myanmar}\p{Script=Phags_Pa}\p{Script=Manichaean}]$/u;
function L(e) {
  if (e < 160) return (e < 32 && e !== 9 && e !== 10) || e >= 127;
  if (e < 8192)
    return (
      e === 173 ||
      e === 847 ||
      e === 1564 ||
      e === 4447 ||
      e === 4448 ||
      e === 6068 ||
      e === 6069 ||
      (e >= 6155 && e <= 6159)
    );
  if (e < 65536)
    return (
      (e >= 8203 && e <= 8207) ||
      (e >= 8232 && e <= 8238) ||
      (e >= 8288 && e <= 8303) ||
      e === 12644 ||
      (e >= 65024 && e <= 65039) ||
      e === 65279 ||
      e === 65440 ||
      (e >= 65520 && e <= 65531)
    );
  return (
    e === 69759 ||
    (e >= 78896 && e <= 78911) ||
    e === 94180 ||
    (e >= 113824 && e <= 113827) ||
    (e >= 119155 && e <= 119162) ||
    (e >= 917504 && e <= 921599)
  );
}
var de = ["gbeng", "gbsct", "gbwls"],
  P = 5;
function D(e, n) {
  let r = "",
    i = n + P + 1;
  for (let t = n + 1; t <= i && t < e.length; t++) {
    let f = e[t].codePointAt(0) ?? 0;
    if (f === 917631) return de.includes(r) ? t : -1;
    if (f < 917601 || f > 917626) return -1;
    r += String.fromCharCode(f - 917504);
  }
  return -1;
}
function fye(e) {
  let n = { tags: 0, bidi: 0, zeroWidth: 0, selectors: 0, other: 0 };
  if (!ie.test(e)) return { text: e, removedTotal: 0, removedByClass: n, keptConditional: 0 };
  let r = Xf(e),
    i = [],
    t = 0,
    f = r === e ? 0 : ge(e);
  n.other += f;
  let s = { ring: Array(T).fill(0), next: 0, size: 0, lastWasHidden: !1, keptConditional: 0 },
    m = 0,
    b,
    g;
  for (let p = 0; p < r.length;) {
    let u = r.codePointAt(p),
      d = p + (u > 65535 ? 2 : 1);
    if (!L(u)) {
      if (u === 10) ((m = d), (b = void 0), (g = void 0));
      else if (u === 127988) {
        let C = Array.from(r.slice(p, p + 2 * (P + 2))),
          x = D(C, 0);
        if (x !== -1) {
          (I(s, u, !1), (p = d));
          for (let N = 1; N <= x; N++) (I(s, C[N].codePointAt(0), !0), (p += C[N].length));
          continue;
        }
      }
      (I(s, u, !1), (p = d));
      continue;
    }
    if (M(u)) {
      let C = u === 13 && r.charCodeAt(d) === 10;
      if (p > t) i.push(r.slice(t, p));
      if (((t = d), !C))
        (i.push(`
`),
          f++,
          n.other++,
          I(s, 10, !1),
          (m = d),
          (b = void 0),
          (g = void 0));
      p = d;
      continue;
    }
    let l = d < r.length ? r.codePointAt(d) : void 0,
      o = E(s, 0),
      { lastWasHidden: S } = s,
      c = !1;
    switch (u) {
      case 8204:
      case 8205: {
        if (((c = R(s, u === 8204 ? j : oe)), !c && u === 8205)) {
          let x = o;
          if (x !== void 0 && (x === 65039 || X(x))) {
            if (((x = E(s, 1)), x !== void 0 && (x === 65039 || X(x)))) x = E(s, 2);
          }
          c = o !== void 0 && o !== 8205 && a(z, x) && _(l, z);
        }
        if (!c && o !== void 0 && !S)
          c =
            u === 8204
              ? y(l, j) && !a(se, o) && !a(A, o)
              : y(l, ce) && !a(k, o) && !a(v, o) && !a(A, o);
        break;
      }
      case 8203: {
        let C = ee(s, le, !0),
          x = _(l, Q) && !a(A, l);
        c = (C && (x || _(l, w))) || (x && H(s, w));
        break;
      }
      case 65038:
      case 65039:
        c = o !== void 0 && !S && ((o >= 169 && a(ae, o)) || (me(o) && l === 8419));
        break;
      case 65024:
      case 65025:
      case 65026:
        c =
          o !== void 0 &&
          !S &&
          (a(B.base, o) || (u === 65024 && ((o >= 8704 && o <= 11007 && a(fe, o)) || a(pe, o))));
        break;
      case 8206:
      case 8207:
      case 1564:
        if (u === 1564) {
          if (g === void 0) g = Z(ue, r, m);
          c = g;
        } else {
          if (b === void 0) b = Z(q, r, m);
          c = b;
        }
        c = c && !S && (l === void 0 || M(l) || (!L(l) && !a(A, l))) && !be(s, l);
        break;
      case 847:
        c = H(s, A) || (!S && _(l, A));
        break;
      case 6068:
      case 6069:
        c = R(s, xe);
        break;
      case 6155:
      case 6156:
      case 6157:
      case 6158:
      case 6159:
        c = R(s, V) || (!S && y(l, V));
        break;
      case 69759:
        c = H(s, Y) && _(l, Y);
        break;
      default:
        if (u >= 78896 && u <= 78911) c = R(s, B) || (!S && y(l, B));
        else if (u >= 113824 && u <= 113827) c = R(s, J) || (!S && y(l, J));
    }
    if (c) I(s, u, !0);
    else {
      if (p > t) i.push(r.slice(t, p));
      ((t = d), f++, n[Se(u)]++);
    }
    p = d;
  }
  let { keptConditional: h } = s;
  if (t === 0) return { text: r, removedTotal: f, removedByClass: n, keptConditional: h };
  return (
    i.push(r.slice(t)),
    { text: i.join(""), removedTotal: f, removedByClass: n, keptConditional: h }
  );
}
function a(e, n) {
  return n !== void 0 && e.test(String.fromCodePoint(n));
}
function K(e, n) {
  return a(k, n) && a(e, n);
}
function Z(e, n, r) {
  for (let i = r; i < n.length;) {
    let t = n.codePointAt(i);
    if (M(t)) return !1;
    if (
      ((t >= 1424 && t <= 2303) ||
        (t >= 64285 && t <= 65023) ||
        (t >= 65136 && t <= 65279) ||
        (t >= 67584 && t <= 69631) ||
        (t >= 124928 && t <= 126975)) &&
      K(e, t)
    )
      return !0;
    i += t > 65535 ? 2 : 1;
  }
  return !1;
}
function U(e) {
  return e === 1600 || a(q, e);
}
function be(e, n) {
  let r = a(k, n);
  if (!r && !a(v, n)) return !1;
  for (let i = 0; i < e.size; i++) {
    let t = E(e, i);
    if (L(t)) return !0;
    if (a(A, t)) continue;
    return r ? a(k, t) && U(t) === U(n) : a(v, t);
  }
  return e.size >= T;
}
function M(e) {
  return e === 10 || e === 11 || e === 12 || e === 13 || e === 133 || e === 8232 || e === 8233;
}
var T = 16;
function I(e, n, r) {
  if (((e.ring[e.next] = n), (e.next = (e.next + 1) % T), e.size < T)) e.size++;
  if (((e.lastWasHidden = r), r)) e.keptConditional++;
}
function E(e, n) {
  if (n >= e.size) return;
  return e.ring[(e.next - 1 - n + 2 * T) % T];
}
function H(e, n) {
  return e.size > 0 && !e.lastWasHidden && a(n, E(e, 0));
}
function R(e, n) {
  return ee(e, n, !1);
}
function ee(e, n, r) {
  if (e.lastWasHidden) return !1;
  for (let i = 0; i < e.size; i++) {
    let t = E(e, i);
    if (a(A, t)) {
      if (!a(n.mark, t)) return !1;
      continue;
    }
    return r ? a(n.base, t) : K(n.base, t);
  }
  return !1;
}
function _(e, n) {
  return e !== void 0 && !L(e) && a(n, e);
}
function y(e, n) {
  return e !== void 0 && !L(e) && K(n.base, e);
}
function X(e) {
  return e >= 127995 && e <= 127999;
}
function me(e) {
  return (e >= 48 && e <= 57) || e === 35 || e === 42;
}
function ge(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    if (i >= 55296 && i <= 56319) {
      let t = e.charCodeAt(r + 1);
      if (t >= 56320 && t <= 57343) r++;
      else n++;
    } else if (i >= 56320 && i <= 57343) n++;
  }
  return n;
}
function Se(e) {
  if (e >= 917504 && e <= 917631) return "tags";
  if (
    e === 1564 ||
    e === 8206 ||
    e === 8207 ||
    (e >= 8234 && e <= 8238) ||
    (e >= 8294 && e <= 8297)
  )
    return "bidi";
  if ((e >= 8203 && e <= 8205) || e === 8288 || e === 65279) return "zeroWidth";
  if (
    (e >= 65024 && e <= 65039) ||
    (e >= 917760 && e <= 917999) ||
    (e >= 6155 && e <= 6157) ||
    e === 6159
  )
    return "selectors";
  return "other";
}
function zze(e, n = "review", r = "Enter") {
  let i = e === 1 ? "Removed 1 invisible character" : `Removed ${e} invisible characters`;
  switch (n) {
    case "review":
      return `${i} \xB7 review and press ${r} to send`;
    case "empty":
      return `${i} \xB7 nothing left to send`;
    case "sent":
      return `${i} from the launch prompt before sending it`;
    case "pasted":
      return `${i} from the pasted text`;
  }
}
function u$(e, n) {
  let r = /^(\d{1,15})-/.exec(e)?.[1],
    i = /^(\d{1,15})-/.exec(n)?.[1];
  return r === void 0 || i === void 0 ? null : Number(r) - Number(i);
}
var Gze = /^\d{1,15}-[0-9a-f]{1,32}$/;
var Ce = 100;
function O1t(e) {
  return Zk(ne(e));
}
function ne(e) {
  let n = e.normalize("NFC");
  return Array.from(n, (i) => (zx(i.codePointAt(0) ?? 0) ? " " : i))
    .join("")
    .replace(Bz, " ")
    .replace(Ae, " ")
    .replace(
      /[\u0300-\u036F\u0483-\u0489\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20F0\uA66F-\uA67D\uFE20-\uFE2F]/g,
      " "
    );
}
function hZe(e, n) {
  let r = Array.from(ne(e), (t) => {
    let f = t.codePointAt(0) ?? 0;
    return f <= 31 || (f >= 127 && f <= 159) ? " " : t;
  })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
  if (r === "") return null;
  let i = yi(r, n);
  return Kl((i === r ? r : `${i.trimEnd()}\u2026`).replace(Dkt, Hkt));
}
var Ae =
  /[\u20DD-\u20E4\u23FA\u25C9\u25CB\u25CE\u25CF\u25EF\u26AA\u26AB\u26AC\u29BE\u29BF\u2B24\u2B55\u2B58\u{1F534}\u{1F535}\u{1F785}-\u{1F78B}\u{1F7E0}-\u{1F7E4}]/gu;
function aBr(e) {
  return Zk(re(e.normalize("NFC"), !1));
}
function S4s(e) {
  return re(e, !0);
}
function re(e, n) {
  let r = Array.from(e),
    i = [];
  for (let t = 0; t < r.length; t++) {
    let f = r[t],
      s = f.codePointAt(0) ?? 0,
      m = i.at(-1),
      b = m?.codePointAt(0),
      g = m === void 0 ? n : !/\s/u.test(m);
    if (s === 127988) {
      let h = D(r, t);
      if (h !== -1) {
        (i.push(...r.slice(t, h + 1)), (t = h));
        continue;
      }
    }
    if (te(s)) {
      if (g && (b === void 0 || !he(b))) i.push(f);
      continue;
    }
    if (W(s)) {
      if (g && (b === void 0 || !W(b))) i.push(f);
      continue;
    }
    i.push(zx(s) || Rqe.test(f) ? " " : f);
  }
  return i.join("");
}
function te(e) {
  return (
    (e >= 6155 && e <= 6157) ||
    e === 6159 ||
    (e >= 65024 && e <= 65039) ||
    (e >= 917760 && e <= 917999)
  );
}
function W(e) {
  return e === 8204 || e === 8205;
}
function he(e) {
  return W(e) || te(e);
}
function w4s(e) {
  let n = Array.from(e.normalize("NFC"), (r) => (zx(r.codePointAt(0) ?? 0) ? " " : r)).join("");
  return Zk(n.replace(Bz, " "));
}
function em(e) {
  let n = O1t(e);
  if (n === null) return null;
  let r = yi(n, Ce);
  return Kl((r === n ? n : `${r}\u2026`).replace(Dkt, Hkt));
}
export { u$, Gze, fye, zze, O1t, hZe, aBr, S4s, w4s, em };

//# sourceMappingURL=chunk-tzm7jehf.js.map
