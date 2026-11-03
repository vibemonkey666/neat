// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qe } from "./chunk-fs43t96t.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { wB } from "./chunk-njpzwa1b.js";
function No(e) {
  return e.startsWith("\uFEFF") ? e.slice(1) : e;
}
import { open as me, readFile as ke, stat as de } from "fs/promises";
function U(e, i = !1) {
  let r = e.length,
    n = 0,
    s = "",
    o = 0,
    c = 16,
    f = 0,
    u = 0,
    h = 0,
    p = 0,
    k = 0;
  function y(g, b) {
    let a = 0,
      d = 0;
    while (a < g || !b) {
      let m = e.charCodeAt(n);
      if (m >= 48 && m <= 57) d = d * 16 + m - 48;
      else if (m >= 65 && m <= 70) d = d * 16 + m - 65 + 10;
      else if (m >= 97 && m <= 102) d = d * 16 + m - 97 + 10;
      else break;
      (n++, a++);
    }
    if (a < g) d = -1;
    return d;
  }
  function T(g) {
    ((n = g), (s = ""), (o = 0), (c = 16), (k = 0));
  }
  function w() {
    let g = n;
    if (e.charCodeAt(n) === 48) n++;
    else {
      n++;
      while (n < e.length && x(e.charCodeAt(n))) n++;
    }
    if (n < e.length && e.charCodeAt(n) === 46)
      if ((n++, n < e.length && x(e.charCodeAt(n)))) {
        n++;
        while (n < e.length && x(e.charCodeAt(n))) n++;
      } else return ((k = 3), e.substring(g, n));
    let b = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) {
      if ((n++, (n < e.length && e.charCodeAt(n) === 43) || e.charCodeAt(n) === 45)) n++;
      if (n < e.length && x(e.charCodeAt(n))) {
        n++;
        while (n < e.length && x(e.charCodeAt(n))) n++;
        b = n;
      } else k = 3;
    }
    return e.substring(g, b);
  }
  function v() {
    let g = "",
      b = n;
    while (!0) {
      if (n >= r) {
        ((g += e.substring(b, n)), (k = 2));
        break;
      }
      let a = e.charCodeAt(n);
      if (a === 34) {
        ((g += e.substring(b, n)), n++);
        break;
      }
      if (a === 92) {
        if (((g += e.substring(b, n)), n++, n >= r)) {
          k = 2;
          break;
        }
        switch (e.charCodeAt(n++)) {
          case 34:
            g += '"';
            break;
          case 92:
            g += "\\";
            break;
          case 47:
            g += "/";
            break;
          case 98:
            g += "\b";
            break;
          case 102:
            g += "\f";
            break;
          case 110:
            g += `
`;
            break;
          case 114:
            g += "\r";
            break;
          case 116:
            g += "\t";
            break;
          case 117:
            let m = y(4, !0);
            if (m >= 0) g += String.fromCharCode(m);
            else k = 4;
            break;
          default:
            k = 5;
        }
        b = n;
        continue;
      }
      if (a >= 0 && a <= 31)
        if (J(a)) {
          ((g += e.substring(b, n)), (k = 2));
          break;
        } else k = 6;
      n++;
    }
    return g;
  }
  function N() {
    if (((s = ""), (k = 0), (o = n), (u = f), (p = h), n >= r)) return ((o = r), (c = 17));
    let g = e.charCodeAt(n);
    if (H(g)) {
      do (n++, (s += String.fromCharCode(g)), (g = e.charCodeAt(n)));
      while (H(g));
      return (c = 15);
    }
    if (J(g)) {
      if ((n++, (s += String.fromCharCode(g)), g === 13 && e.charCodeAt(n) === 10))
        (n++,
          (s += `
`));
      return (f++, (h = n), (c = 14));
    }
    switch (g) {
      case 123:
        return (n++, (c = 1));
      case 125:
        return (n++, (c = 2));
      case 91:
        return (n++, (c = 3));
      case 93:
        return (n++, (c = 4));
      case 58:
        return (n++, (c = 6));
      case 44:
        return (n++, (c = 5));
      case 34:
        return (n++, (s = v()), (c = 10));
      case 47:
        let b = n - 1;
        if (e.charCodeAt(n + 1) === 47) {
          n += 2;
          while (n < r) {
            if (J(e.charCodeAt(n))) break;
            n++;
          }
          return ((s = e.substring(b, n)), (c = 12));
        }
        if (e.charCodeAt(n + 1) === 42) {
          n += 2;
          let a = r - 1,
            d = !1;
          while (n < a) {
            let m = e.charCodeAt(n);
            if (m === 42 && e.charCodeAt(n + 1) === 47) {
              ((n += 2), (d = !0));
              break;
            }
            if ((n++, J(m))) {
              if (m === 13 && e.charCodeAt(n) === 10) n++;
              (f++, (h = n));
            }
          }
          if (!d) (n++, (k = 1));
          return ((s = e.substring(b, n)), (c = 13));
        }
        return ((s += String.fromCharCode(g)), n++, (c = 16));
      case 45:
        if (((s += String.fromCharCode(g)), n++, n === r || !x(e.charCodeAt(n)))) return (c = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return ((s += w()), (c = 11));
      default:
        while (n < r && S(g)) (n++, (g = e.charCodeAt(n)));
        if (o !== n) {
          switch (((s = e.substring(o, n)), s)) {
            case "true":
              return (c = 8);
            case "false":
              return (c = 9);
            case "null":
              return (c = 7);
          }
          return (c = 16);
        }
        return ((s += String.fromCharCode(g)), n++, (c = 16));
    }
  }
  function S(g) {
    if (H(g) || J(g)) return !1;
    switch (g) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function B() {
    let g;
    do g = N();
    while (g >= 12 && g <= 15);
    return g;
  }
  return {
    setPosition: T,
    getPosition: () => n,
    scan: i ? B : N,
    getToken: () => c,
    getTokenValue: () => s,
    getTokenOffset: () => o,
    getTokenLength: () => n - o,
    getTokenStartLine: () => u,
    getTokenStartCharacter: () => o - p,
    getTokenError: () => k
  };
}
function H(e) {
  return e === 32 || e === 9;
}
function J(e) {
  return e === 10 || e === 13;
}
function x(e) {
  return e >= 48 && e <= 57;
}
var K;
(function (e) {
  ((e[(e.lineFeed = 10)] = "lineFeed"),
    (e[(e.carriageReturn = 13)] = "carriageReturn"),
    (e[(e.space = 32)] = "space"),
    (e[(e._0 = 48)] = "_0"),
    (e[(e._1 = 49)] = "_1"),
    (e[(e._2 = 50)] = "_2"),
    (e[(e._3 = 51)] = "_3"),
    (e[(e._4 = 52)] = "_4"),
    (e[(e._5 = 53)] = "_5"),
    (e[(e._6 = 54)] = "_6"),
    (e[(e._7 = 55)] = "_7"),
    (e[(e._8 = 56)] = "_8"),
    (e[(e._9 = 57)] = "_9"),
    (e[(e.a = 97)] = "a"),
    (e[(e.b = 98)] = "b"),
    (e[(e.c = 99)] = "c"),
    (e[(e.d = 100)] = "d"),
    (e[(e.e = 101)] = "e"),
    (e[(e.f = 102)] = "f"),
    (e[(e.g = 103)] = "g"),
    (e[(e.h = 104)] = "h"),
    (e[(e.i = 105)] = "i"),
    (e[(e.j = 106)] = "j"),
    (e[(e.k = 107)] = "k"),
    (e[(e.l = 108)] = "l"),
    (e[(e.m = 109)] = "m"),
    (e[(e.n = 110)] = "n"),
    (e[(e.o = 111)] = "o"),
    (e[(e.p = 112)] = "p"),
    (e[(e.q = 113)] = "q"),
    (e[(e.r = 114)] = "r"),
    (e[(e.s = 115)] = "s"),
    (e[(e.t = 116)] = "t"),
    (e[(e.u = 117)] = "u"),
    (e[(e.v = 118)] = "v"),
    (e[(e.w = 119)] = "w"),
    (e[(e.x = 120)] = "x"),
    (e[(e.y = 121)] = "y"),
    (e[(e.z = 122)] = "z"),
    (e[(e.A = 65)] = "A"),
    (e[(e.B = 66)] = "B"),
    (e[(e.C = 67)] = "C"),
    (e[(e.D = 68)] = "D"),
    (e[(e.E = 69)] = "E"),
    (e[(e.F = 70)] = "F"),
    (e[(e.G = 71)] = "G"),
    (e[(e.H = 72)] = "H"),
    (e[(e.I = 73)] = "I"),
    (e[(e.J = 74)] = "J"),
    (e[(e.K = 75)] = "K"),
    (e[(e.L = 76)] = "L"),
    (e[(e.M = 77)] = "M"),
    (e[(e.N = 78)] = "N"),
    (e[(e.O = 79)] = "O"),
    (e[(e.P = 80)] = "P"),
    (e[(e.Q = 81)] = "Q"),
    (e[(e.R = 82)] = "R"),
    (e[(e.S = 83)] = "S"),
    (e[(e.T = 84)] = "T"),
    (e[(e.U = 85)] = "U"),
    (e[(e.V = 86)] = "V"),
    (e[(e.W = 87)] = "W"),
    (e[(e.X = 88)] = "X"),
    (e[(e.Y = 89)] = "Y"),
    (e[(e.Z = 90)] = "Z"),
    (e[(e.asterisk = 42)] = "asterisk"),
    (e[(e.backslash = 92)] = "backslash"),
    (e[(e.closeBrace = 125)] = "closeBrace"),
    (e[(e.closeBracket = 93)] = "closeBracket"),
    (e[(e.colon = 58)] = "colon"),
    (e[(e.comma = 44)] = "comma"),
    (e[(e.dot = 46)] = "dot"),
    (e[(e.doubleQuote = 34)] = "doubleQuote"),
    (e[(e.minus = 45)] = "minus"),
    (e[(e.openBrace = 123)] = "openBrace"),
    (e[(e.openBracket = 91)] = "openBracket"),
    (e[(e.plus = 43)] = "plus"),
    (e[(e.slash = 47)] = "slash"),
    (e[(e.formFeed = 12)] = "formFeed"),
    (e[(e.tab = 9)] = "tab"));
})(K || (K = {}));
var L = Array(20)
  .fill(0)
  .map((e, i) => " ".repeat(i));
var Q = {
    " ": {
      "\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `
` + " ".repeat(i)
        ),
      "\r": Array(200)
        .fill(0)
        .map((e, i) => "\r" + " ".repeat(i)),
      "\r\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `\r
` + " ".repeat(i)
        )
    },
    "\t": {
      "\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `
` + "\t".repeat(i)
        ),
      "\r": Array(200)
        .fill(0)
        .map((e, i) => "\r" + "\t".repeat(i)),
      "\r\n": Array(200)
        .fill(0)
        .map(
          (e, i) =>
            `\r
` + "\t".repeat(i)
        )
    }
  },
  C = [
    `
`,
    "\r",
    `\r
`
  ];
function X(e, i, r) {
  let n, s, o, c, f;
  if (i) {
    ((c = i.offset), (f = c + i.length), (o = c));
    while (o > 0 && !P(e, o - 1)) o--;
    let a = f;
    while (a < e.length && !P(e, a)) a++;
    ((s = e.substring(o, a)), (n = ue(s, r)));
  } else ((s = e), (n = 0), (o = 0), (c = 0), (f = e.length));
  let u = ce(r, e),
    h = C.includes(u),
    p = 0,
    k = 0,
    y;
  if (r.insertSpaces) y = L[r.tabSize || 4] ?? j(L[1], r.tabSize || 4);
  else y = "\t";
  let T = y === "\t" ? "\t" : " ",
    w = U(s, !1),
    v = !1;
  function N() {
    if (p > 1) return j(u, p) + j(y, n + k);
    let a = y.length * (n + k);
    if (!h || a > Q[T][u].length) return u + j(y, n + k);
    if (a <= 0) return u;
    return Q[T][u][a];
  }
  function S() {
    let a = w.scan();
    p = 0;
    while (a === 15 || a === 14) {
      if (a === 14 && r.keepLines) p += 1;
      else if (a === 14) p = 1;
      a = w.scan();
    }
    return ((v = a === 16 || w.getTokenError() !== 0), a);
  }
  let B = [];
  function g(a, d, m) {
    if (!v && (!i || (d < f && m > c)) && e.substring(d, m) !== a)
      B.push({ offset: d, length: m - d, content: a });
  }
  let b = S();
  if (r.keepLines && p > 0) g(j(u, p), 0, 0);
  if (b !== 17) {
    let a = w.getTokenOffset() + o,
      d = y.length * n < 20 && r.insertSpaces ? L[y.length * n] : j(y, n);
    g(d, o, a);
  }
  while (b !== 17) {
    let a = w.getTokenOffset() + w.getTokenLength() + o,
      d = S(),
      m = "",
      E = !1;
    while (p === 0 && (d === 12 || d === 13)) {
      let W = w.getTokenOffset() + o;
      (g(L[1], a, W),
        (a = w.getTokenOffset() + w.getTokenLength() + o),
        (E = d === 12),
        (m = E ? N() : ""),
        (d = S()));
    }
    if (d === 2) {
      if (b !== 1) k--;
      if ((r.keepLines && p > 0) || (!r.keepLines && b !== 1)) m = N();
      else if (r.keepLines) m = L[1];
    } else if (d === 4) {
      if (b !== 3) k--;
      if ((r.keepLines && p > 0) || (!r.keepLines && b !== 3)) m = N();
      else if (r.keepLines) m = L[1];
    } else {
      switch (b) {
        case 3:
        case 1:
          if ((k++, (r.keepLines && p > 0) || !r.keepLines)) m = N();
          else m = L[1];
          break;
        case 5:
          if ((r.keepLines && p > 0) || !r.keepLines) m = N();
          else m = L[1];
          break;
        case 12:
          m = N();
          break;
        case 13:
          if (p > 0) m = N();
          else if (!E) m = L[1];
          break;
        case 6:
          if (r.keepLines && p > 0) m = N();
          else if (!E) m = L[1];
          break;
        case 10:
          if (r.keepLines && p > 0) m = N();
          else if (d === 6 && !E) m = "";
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          if (r.keepLines && p > 0) m = N();
          else if ((d === 12 || d === 13) && !E) m = L[1];
          else if (d !== 5 && d !== 17) v = !0;
          break;
        case 16:
          v = !0;
          break;
      }
      if (p > 0 && (d === 12 || d === 13)) m = N();
    }
    if (d === 17)
      if (r.keepLines && p > 0) m = N();
      else m = r.insertFinalNewline ? u : "";
    let z = w.getTokenOffset() + o;
    (g(m, a, z), (b = d));
  }
  return B;
}
function j(e, i) {
  let r = "";
  for (let n = 0; n < i; n++) r += e;
  return r;
}
function ue(e, i) {
  let r = 0,
    n = 0,
    s = i.tabSize || 4;
  while (r < e.length) {
    let o = e.charAt(r);
    if (o === L[1]) n++;
    else if (o === "\t") n += s;
    else break;
    r++;
  }
  return Math.floor(n / s);
}
function ce(e, i) {
  for (let r = 0; r < i.length; r++) {
    let n = i.charAt(r);
    if (n === "\r") {
      if (
        r + 1 < i.length &&
        i.charAt(r + 1) ===
          `
`
      )
        return `\r
`;
      return "\r";
    } else if (
      n ===
      `
`
    )
      return `
`;
  }
  return (
    (e && e.eol) ||
    `
`
  );
}
function P(e, i) {
  return (
    `\r
`.indexOf(e.charAt(i)) !== -1
  );
}
var V;
(function (e) {
  e.DEFAULT = { allowTrailingComma: !1 };
})(V || (V = {}));
function ee(e, i = [], r = V.DEFAULT) {
  let n = null,
    s = [],
    o = [];
  function c(u) {
    if (Array.isArray(s)) s.push(u);
    else if (n !== null) s[n] = u;
  }
  return (
    q(
      e,
      {
        onObjectBegin: () => {
          let u = {};
          (c(u), o.push(s), (s = u), (n = null));
        },
        onObjectProperty: (u) => {
          n = u;
        },
        onObjectEnd: () => {
          s = o.pop();
        },
        onArrayBegin: () => {
          let u = [];
          (c(u), o.push(s), (s = u), (n = null));
        },
        onArrayEnd: () => {
          s = o.pop();
        },
        onLiteralValue: c,
        onError: (u, h, p) => {
          i.push({ error: u, offset: h, length: p });
        }
      },
      r
    ),
    s[0]
  );
}
function Z(e, i = [], r = V.DEFAULT) {
  let n = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function s(u) {
    if (n.type === "property") ((n.length = u - n.offset), (n = n.parent));
  }
  function o(u) {
    return (n.children.push(u), u);
  }
  q(
    e,
    {
      onObjectBegin: (u) => {
        n = o({ type: "object", offset: u, length: -1, parent: n, children: [] });
      },
      onObjectProperty: (u, h, p) => {
        ((n = o({ type: "property", offset: h, length: -1, parent: n, children: [] })),
          n.children.push({ type: "string", value: u, offset: h, length: p, parent: n }));
      },
      onObjectEnd: (u, h) => {
        (s(u + h), (n.length = u + h - n.offset), (n = n.parent), s(u + h));
      },
      onArrayBegin: (u, h) => {
        n = o({ type: "array", offset: u, length: -1, parent: n, children: [] });
      },
      onArrayEnd: (u, h) => {
        ((n.length = u + h - n.offset), (n = n.parent), s(u + h));
      },
      onLiteralValue: (u, h, p) => {
        (o({ type: pe(u), offset: h, length: p, parent: n, value: u }), s(h + p));
      },
      onSeparator: (u, h, p) => {
        if (n.type === "property") {
          if (u === ":") n.colonOffset = h;
          else if (u === ",") s(h);
        }
      },
      onError: (u, h, p) => {
        i.push({ error: u, offset: h, length: p });
      }
    },
    r
  );
  let f = n.children[0];
  if (f) delete f.parent;
  return f;
}
function R(e, i) {
  if (!e) return;
  let r = e;
  for (let n of i)
    if (typeof n === "string") {
      if (r.type !== "object" || !Array.isArray(r.children)) return;
      let s = !1;
      for (let o of r.children)
        if (Array.isArray(o.children) && o.children[0].value === n && o.children.length === 2) {
          ((r = o.children[1]), (s = !0));
          break;
        }
      if (!s) return;
    } else {
      let s = n;
      if (r.type !== "array" || s < 0 || !Array.isArray(r.children) || s >= r.children.length)
        return;
      r = r.children[s];
    }
  return r;
}
function q(e, i, r = V.DEFAULT) {
  let n = U(e, !1),
    s = [];
  function o(O) {
    return O
      ? () =>
          O(
            n.getTokenOffset(),
            n.getTokenLength(),
            n.getTokenStartLine(),
            n.getTokenStartCharacter()
          )
      : () => !0;
  }
  function c(O) {
    return O
      ? () =>
          O(
            n.getTokenOffset(),
            n.getTokenLength(),
            n.getTokenStartLine(),
            n.getTokenStartCharacter(),
            () => s.slice()
          )
      : () => !0;
  }
  function f(O) {
    return O
      ? (A) =>
          O(
            A,
            n.getTokenOffset(),
            n.getTokenLength(),
            n.getTokenStartLine(),
            n.getTokenStartCharacter()
          )
      : () => !0;
  }
  function u(O) {
    return O
      ? (A) =>
          O(
            A,
            n.getTokenOffset(),
            n.getTokenLength(),
            n.getTokenStartLine(),
            n.getTokenStartCharacter(),
            () => s.slice()
          )
      : () => !0;
  }
  let h = c(i.onObjectBegin),
    p = u(i.onObjectProperty),
    k = o(i.onObjectEnd),
    y = c(i.onArrayBegin),
    T = o(i.onArrayEnd),
    w = u(i.onLiteralValue),
    v = f(i.onSeparator),
    N = o(i.onComment),
    S = f(i.onError),
    B = r && r.disallowComments,
    g = r && r.allowTrailingComma;
  function b() {
    while (!0) {
      let O = n.scan();
      switch (n.getTokenError()) {
        case 4:
          a(14);
          break;
        case 5:
          a(15);
          break;
        case 3:
          a(13);
          break;
        case 1:
          if (!B) a(11);
          break;
        case 2:
          a(12);
          break;
        case 6:
          a(16);
          break;
      }
      switch (O) {
        case 12:
        case 13:
          if (B) a(10);
          else N();
          break;
        case 16:
          a(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return O;
      }
    }
  }
  function a(O, A = [], G = []) {
    if ((S(O), A.length + G.length > 0)) {
      let M = n.getToken();
      while (M !== 17) {
        if (A.indexOf(M) !== -1) {
          b();
          break;
        } else if (G.indexOf(M) !== -1) break;
        M = b();
      }
    }
  }
  function d(O) {
    let A = n.getTokenValue();
    if (O) w(A);
    else (p(A), s.push(A));
    return (b(), !0);
  }
  function m() {
    switch (n.getToken()) {
      case 11:
        let O = n.getTokenValue(),
          A = Number(O);
        if (isNaN(A)) (a(2), (A = 0));
        w(A);
        break;
      case 7:
        w(null);
        break;
      case 8:
        w(!0);
        break;
      case 9:
        w(!1);
        break;
      default:
        return !1;
    }
    return (b(), !0);
  }
  function E() {
    if (n.getToken() !== 10) return (a(3, [], [2, 5]), !1);
    if ((d(!1), n.getToken() === 6)) {
      if ((v(":"), b(), !Y())) a(4, [], [2, 5]);
    } else a(5, [], [2, 5]);
    return (s.pop(), !0);
  }
  function z() {
    (h(), b());
    let O = !1;
    while (n.getToken() !== 2 && n.getToken() !== 17) {
      if (n.getToken() === 5) {
        if (!O) a(4, [], []);
        if ((v(","), b(), n.getToken() === 2 && g)) break;
      } else if (O) a(6, [], []);
      if (!E()) a(4, [], [2, 5]);
      O = !0;
    }
    if ((k(), n.getToken() !== 2)) a(7, [2], []);
    else b();
    return !0;
  }
  function W() {
    (y(), b());
    let O = !0,
      A = !1;
    while (n.getToken() !== 4 && n.getToken() !== 17) {
      if (n.getToken() === 5) {
        if (!A) a(4, [], []);
        if ((v(","), b(), n.getToken() === 4 && g)) break;
      } else if (A) a(6, [], []);
      if (O) (s.push(0), (O = !1));
      else s[s.length - 1]++;
      if (!Y()) a(4, [], [4, 5]);
      A = !0;
    }
    if ((T(), !O)) s.pop();
    if (n.getToken() !== 4) a(8, [4], []);
    else b();
    return !0;
  }
  function Y() {
    switch (n.getToken()) {
      case 3:
        return W();
      case 1:
        return z();
      case 10:
        return d(!0);
      default:
        return m();
    }
  }
  if ((b(), n.getToken() === 17)) {
    if (r.allowEmptyContent) return !0;
    return (a(4, [], []), !1);
  }
  if (!Y()) return (a(4, [], []), !1);
  if (n.getToken() !== 17) a(9, [], []);
  return !0;
}
function pe(e) {
  switch (typeof e) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (!e) return "null";
      else if (Array.isArray(e)) return "array";
      return "object";
    }
    default:
      return "null";
  }
}
function ne(e, i, r, n) {
  let s = i.slice(),
    c = Z(e, []),
    f = void 0,
    u = void 0;
  while (s.length > 0)
    if (((u = s.pop()), (f = R(c, s)), f === void 0 && r !== void 0))
      if (typeof u === "string") r = { [u]: r };
      else r = [r];
    else break;
  if (!f) {
    if (r === void 0) throw Error("Can not delete in empty document");
    return I(
      e,
      { offset: c ? c.offset : 0, length: c ? c.length : 0, content: JSON.stringify(r) },
      n
    );
  } else if (f.type === "object" && typeof u === "string" && Array.isArray(f.children)) {
    let h = R(f, [u]);
    if (h !== void 0)
      if (r === void 0) {
        if (!h.parent) throw Error("Malformed AST");
        let p = f.children.indexOf(h.parent),
          k,
          y = h.parent.offset + h.parent.length;
        if (p > 0) {
          let T = f.children[p - 1];
          k = T.offset + T.length;
        } else if (((k = f.offset + 1), f.children.length > 1)) y = f.children[1].offset;
        return I(e, { offset: k, length: y - k, content: "" }, n);
      } else return I(e, { offset: h.offset, length: h.length, content: JSON.stringify(r) }, n);
    else {
      if (r === void 0) return [];
      let p = `${JSON.stringify(u)}: ${JSON.stringify(r)}`,
        k = n.getInsertionIndex
          ? n.getInsertionIndex(f.children.map((T) => T.children[0].value))
          : f.children.length,
        y;
      if (k > 0) {
        let T = f.children[k - 1];
        y = { offset: T.offset + T.length, length: 0, content: "," + p };
      } else if (f.children.length === 0) y = { offset: f.offset + 1, length: 0, content: p };
      else y = { offset: f.offset + 1, length: 0, content: p + "," };
      return I(e, y, n);
    }
  } else if (f.type === "array" && typeof u === "number" && Array.isArray(f.children)) {
    let h = u;
    if (h === -1) {
      let p = `${JSON.stringify(r)}`,
        k;
      if (f.children.length === 0) k = { offset: f.offset + 1, length: 0, content: p };
      else {
        let y = f.children[f.children.length - 1];
        k = { offset: y.offset + y.length, length: 0, content: "," + p };
      }
      return I(e, k, n);
    } else if (r === void 0 && f.children.length >= 0) {
      let p = u,
        k = f.children[p],
        y;
      if (f.children.length === 1) y = { offset: f.offset + 1, length: f.length - 2, content: "" };
      else if (f.children.length - 1 === p) {
        let T = f.children[p - 1],
          w = T.offset + T.length,
          v = f.offset + f.length;
        y = { offset: w, length: v - 2 - w, content: "" };
      } else y = { offset: k.offset, length: f.children[p + 1].offset - k.offset, content: "" };
      return I(e, y, n);
    } else if (r !== void 0) {
      let p,
        k = `${JSON.stringify(r)}`;
      if (!n.isArrayInsertion && f.children.length > u) {
        let y = f.children[u];
        p = { offset: y.offset, length: y.length, content: k };
      } else if (f.children.length === 0 || u === 0)
        p = { offset: f.offset + 1, length: 0, content: f.children.length === 0 ? k : k + "," };
      else {
        let y = u > f.children.length ? f.children.length : u,
          T = f.children[y - 1];
        p = { offset: T.offset + T.length, length: 0, content: "," + k };
      }
      return I(e, p, n);
    } else
      throw Error(
        `Can not ${r === void 0 ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${h} as length is not sufficient`
      );
  } else
    throw Error(
      `Can not add ${typeof u !== "number" ? "index" : "property"} to parent of type ${f.type}`
    );
}
function I(e, i, r) {
  if (!r.formattingOptions) return [i];
  let n = D(e, i),
    s = i.offset,
    o = i.offset + i.content.length;
  if (i.length === 0 || i.content.length === 0) {
    while (s > 0 && !P(n, s - 1)) s--;
    while (o < n.length && !P(n, o)) o++;
  }
  let c = X(n, { offset: s, length: o - s }, { ...r.formattingOptions, keepLines: !1 });
  for (let u = c.length - 1; u >= 0; u--) {
    let h = c[u];
    ((n = D(n, h)),
      (s = Math.min(s, h.offset)),
      (o = Math.max(o, h.offset + h.length)),
      (o += h.content.length - h.length));
  }
  let f = e.length - (n.length - o) - s;
  return [{ offset: s, length: f, content: n.substring(s, o) }];
}
function D(e, i) {
  return e.substring(0, i.offset) + i.content + e.substring(i.offset + i.length);
}
var te;
(function (e) {
  ((e[(e.None = 0)] = "None"),
    (e[(e.UnexpectedEndOfComment = 1)] = "UnexpectedEndOfComment"),
    (e[(e.UnexpectedEndOfString = 2)] = "UnexpectedEndOfString"),
    (e[(e.UnexpectedEndOfNumber = 3)] = "UnexpectedEndOfNumber"),
    (e[(e.InvalidUnicode = 4)] = "InvalidUnicode"),
    (e[(e.InvalidEscapeCharacter = 5)] = "InvalidEscapeCharacter"),
    (e[(e.InvalidCharacter = 6)] = "InvalidCharacter"));
})(te || (te = {}));
var re;
(function (e) {
  ((e[(e.OpenBraceToken = 1)] = "OpenBraceToken"),
    (e[(e.CloseBraceToken = 2)] = "CloseBraceToken"),
    (e[(e.OpenBracketToken = 3)] = "OpenBracketToken"),
    (e[(e.CloseBracketToken = 4)] = "CloseBracketToken"),
    (e[(e.CommaToken = 5)] = "CommaToken"),
    (e[(e.ColonToken = 6)] = "ColonToken"),
    (e[(e.NullKeyword = 7)] = "NullKeyword"),
    (e[(e.TrueKeyword = 8)] = "TrueKeyword"),
    (e[(e.FalseKeyword = 9)] = "FalseKeyword"),
    (e[(e.StringLiteral = 10)] = "StringLiteral"),
    (e[(e.NumericLiteral = 11)] = "NumericLiteral"),
    (e[(e.LineCommentTrivia = 12)] = "LineCommentTrivia"),
    (e[(e.BlockCommentTrivia = 13)] = "BlockCommentTrivia"),
    (e[(e.LineBreakTrivia = 14)] = "LineBreakTrivia"),
    (e[(e.Trivia = 15)] = "Trivia"),
    (e[(e.Unknown = 16)] = "Unknown"),
    (e[(e.EOF = 17)] = "EOF"));
})(re || (re = {}));
var h4e = ee;
var ie;
(function (e) {
  ((e[(e.InvalidSymbol = 1)] = "InvalidSymbol"),
    (e[(e.InvalidNumberFormat = 2)] = "InvalidNumberFormat"),
    (e[(e.PropertyNameExpected = 3)] = "PropertyNameExpected"),
    (e[(e.ValueExpected = 4)] = "ValueExpected"),
    (e[(e.ColonExpected = 5)] = "ColonExpected"),
    (e[(e.CommaExpected = 6)] = "CommaExpected"),
    (e[(e.CloseBraceExpected = 7)] = "CloseBraceExpected"),
    (e[(e.CloseBracketExpected = 8)] = "CloseBracketExpected"),
    (e[(e.EndOfFileExpected = 9)] = "EndOfFileExpected"),
    (e[(e.InvalidCommentToken = 10)] = "InvalidCommentToken"),
    (e[(e.UnexpectedEndOfComment = 11)] = "UnexpectedEndOfComment"),
    (e[(e.UnexpectedEndOfString = 12)] = "UnexpectedEndOfString"),
    (e[(e.UnexpectedEndOfNumber = 13)] = "UnexpectedEndOfNumber"),
    (e[(e.InvalidUnicode = 14)] = "InvalidUnicode"),
    (e[(e.InvalidEscapeCharacter = 15)] = "InvalidEscapeCharacter"),
    (e[(e.InvalidCharacter = 16)] = "InvalidCharacter"));
})(ie || (ie = {}));
function Qvn(e, i, r, n) {
  return ne(e, i, r, n);
}
function aar(e, i) {
  let r = i.slice(0).sort((s, o) => {
      let c = s.offset - o.offset;
      if (c === 0) return s.length - o.length;
      return c;
    }),
    n = e.length;
  for (let s = r.length - 1; s >= 0; s--) {
    let o = r[s];
    if (o.offset + o.length <= n) e = D(e, o);
    else throw Error("Overlapping edit");
    n = o.offset;
  }
  return e;
}
var Jqt = "__unparsedToolInput";
function f$e(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let i = Object.entries(e);
  if (i.length !== 1) return !1;
  let [r, n] = i[0];
  return (
    r === Jqt &&
    typeof n === "object" &&
    n !== null &&
    typeof n.raw === "string" &&
    typeof n.len === "number"
  );
}
function Y9(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let i = Object.entries(e);
  if (i.length !== 1) return null;
  let [r, n] = i[0];
  if (r !== Jqt || typeof n !== "object" || n === null) return null;
  let { raw: s, len: o } = n;
  if (typeof s !== "string" || typeof o !== "number") return null;
  return `input JSON failed to parse \u2014 ${o} bytes`;
}
var be = 8192;
function se(e, i) {
  try {
    return { ok: !0, value: JSON.parse(No(e)) };
  } catch (r) {
    if (i)
      l(
        Qe(
          r,
          `safeParseJSON: invalid JSON (${r instanceof Error ? r.constructor.name : typeof r}, ${e.length} bytes)`
        )
      );
    return { ok: !1 };
  }
}
class oe {
  cached = wB(se, (e) => e, 50);
  cache = this.cached.cache;
  parse(e, i) {
    return this.cached(e, i);
  }
}
var le = new oe();
function j0(e) {
  return e
    .trim()
    .replace(/^```[a-zA-Z]*\s*/, "")
    .replace(/\s*```$/, "")
    .trim();
}
var ot = Object.assign(
  function (i, r = !0) {
    if (!i) return null;
    let n = i.length > be ? se(i, r) : le.parse(i, r);
    return n.ok ? n.value : null;
  },
  { cache: le.cache }
);
function p$e(e) {
  if (!e) return null;
  try {
    return h4e(No(e));
  } catch (i) {
    return (
      t(`Failed to parse JSONC: ${i instanceof Error ? i.message : String(i)}`, { level: "error" }),
      null
    );
  }
}
function _Qo() {
  return Bun.JSONL?.parseChunk;
}
function ye(e, i) {
  let r = e.length,
    n = i(e);
  if (!n.error || n.done || n.read >= r) return n.values;
  let { values: s, read: o } = n;
  while (o < r) {
    let c =
      typeof e === "string"
        ? e.indexOf(
            `
`,
            o
          )
        : e.indexOf(10, o);
    if (c === -1) break;
    o = c + 1;
    let f = i(e, o);
    if (f.values.length > 0) s = s.concat(f.values);
    if (!f.error || f.done || f.read >= r) break;
    o = f.read;
  }
  return s;
}
function Oe(e) {
  let i = e.length,
    r = 0;
  if (e[0] === 239 && e[1] === 187 && e[2] === 191) r = 3;
  let n = [];
  while (r < i) {
    let s = e.indexOf(10, r);
    if (s === -1) s = i;
    let o = e.toString("utf8", r, s).trim();
    if (((r = s + 1), !o)) continue;
    try {
      n.push(JSON.parse(o));
    } catch {}
  }
  return n;
}
function Te(e) {
  let i = No(e),
    r = i.length,
    n = 0,
    s = [];
  while (n < r) {
    let o = i.indexOf(
      `
`,
      n
    );
    if (o === -1) o = r;
    let c = i.substring(n, o).trim();
    if (((n = o + 1), !c)) continue;
    try {
      s.push(JSON.parse(c));
    } catch {}
  }
  return s;
}
function YTt(e) {
  let i = _Qo();
  if (i) return ye(e, i);
  if (typeof e === "string") return Te(e);
  return Oe(e);
}
var F = 104857600;
async function XTt(e) {
  let { size: i } = await de(e);
  if (i <= F) return YTt(await ke(e));
  await using r = await me(e, "r");
  let n = Buffer.allocUnsafe(F),
    s = 0,
    o = i - F;
  while (s < F) {
    let { bytesRead: f } = await r.read(n, s, F - s, o + s);
    if (f === 0) break;
    s += f;
  }
  let c = n.indexOf(10);
  if (c !== -1 && c < s - 1) return YTt(n.subarray(c + 1, s));
  return YTt(n.subarray(0, s));
}
function bQo(e, i, r) {
  if (!e || e.trim() === "") return _({ [i]: r }, null, 4);
  let n = No(e);
  try {
    let s = [],
      o = h4e(n, s);
    if (s.length > 0 || o === null || typeof o !== "object" || Array.isArray(o)) return e;
    let c = Qvn(n, [i], r, { formattingOptions: { insertSpaces: !0, tabSize: 4 } });
    if (!c || c.length === 0) return n;
    return aar(n, c);
  } catch (s) {
    return (
      t(`Failed to set JSONC property "${i}": ${s instanceof Error ? s.message : String(s)}`, {
        level: "error"
      }),
      e
    );
  }
}
function zdi(e, i) {
  try {
    if (!e || e.trim() === "") return _([i], null, 4);
    let r = No(e),
      n = h4e(r);
    if (Array.isArray(n)) {
      let s = n.length,
        f = Qvn(r, s === 0 ? [0] : [s], i, {
          formattingOptions: { insertSpaces: !0, tabSize: 4 },
          isArrayInsertion: !0
        });
      if (!f || f.length === 0) {
        let u = [...n, i];
        return _(u, null, 4);
      }
      return aar(r, f);
    } else return _([i], null, 4);
  } catch (r) {
    return (
      t(
        `Failed to insert item into user JSONC array, falling back to overwrite: ${r instanceof Error ? r.message : String(r)}`,
        { level: "error" }
      ),
      _([i], null, 4)
    );
  }
}
export { No, h4e, Qvn, aar, Jqt, f$e, Y9, j0, ot, p$e, _Qo, YTt, XTt, bQo, zdi };

//# sourceMappingURL=chunk-8r2m7vfp.js.map
