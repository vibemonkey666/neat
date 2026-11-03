// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Nor, Pii } from "./chunk-drhbqmbg.js";
var Oe = 50,
  Re = 50000,
  te = 67108864,
  De = te,
  $e = { parse: Fe };
function Ew() {
  return $e;
}
var H = new Set(["?", "$", "@", "*", "#", "-", "!", "_"]),
  ne = new Set(["#", "^", "=", "~", "+"]);
function Te(e, o) {
  let t = e.L.src,
    s = o;
  while (s < e.L.len && ne.has(t[s])) s++;
  let r = !1;
  while (s < e.L.len) {
    let i = t[s];
    if (B(i)) s++;
    else if (i >= "\x80") ((r = !0), s++);
    else break;
  }
  return r ? s : -1;
}
var Ae = new Set(["export", "declare", "typeset", "readonly", "local"]),
  CXn = new Set([
    "if",
    "then",
    "elif",
    "else",
    "fi",
    "while",
    "until",
    "for",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
  ]);
function Ce(e) {
  return { src: e, len: e.length, i: 0, b: 0, heredocs: [], byteTable: null, zshCondParenDiff: !1 };
}
function n(e) {
  let o = e.src.charCodeAt(e.i);
  if ((e.i++, o < 128)) e.b++;
  else if (o < 2048) e.b += 2;
  else if (o >= 55296 && o <= 56319) ((e.b += 4), e.i++);
  else e.b += 3;
}
function L(e, o = 0) {
  return e.i + o < e.len ? e.src[e.i + o] : "";
}
function we(e, o) {
  if (e.byteTable) return e.byteTable[o];
  let t = new Uint32Array(e.len + 1),
    s = 0,
    r = 0;
  while (r < e.len) {
    t[r] = s;
    let i = e.src.charCodeAt(r);
    if (i < 128) (s++, r++);
    else if (i < 2048) ((s += 2), r++);
    else if (i >= 55296 && i <= 56319) ((t[r + 1] = s + 2), (s += 4), (r += 2));
    else ((s += 3), r++);
  }
  return ((t[e.len] = s), (e.byteTable = t), t[o]);
}
function ke(e) {
  return (
    (e >= "a" && e <= "z") ||
    (e >= "A" && e <= "Z") ||
    (e >= "0" && e <= "9") ||
    e === "_" ||
    e === "/" ||
    e === "." ||
    e === "-" ||
    e === "+" ||
    e === ":" ||
    e === "@" ||
    e === "%" ||
    e === "," ||
    e === "~" ||
    e === "^" ||
    e === "?" ||
    e === "*" ||
    e === "!" ||
    e === "=" ||
    e === "[" ||
    e === "]" ||
    e >= "\x80"
  );
}
function Be(e) {
  return ke(e) || e === "\\";
}
function Se(e) {
  return (
    e === "" ||
    e === " " ||
    e === "\t" ||
    e ===
      `
` ||
    e === "\r" ||
    e === ";" ||
    e === "&" ||
    e === "|" ||
    e === "(" ||
    e === ")" ||
    e === "<" ||
    e === ">"
  );
}
function ae(e) {
  return Se(e) && e !== "(";
}
function R(e) {
  return (e >= "a" && e <= "z") || (e >= "A" && e <= "Z") || e === "_";
}
function B(e) {
  return R(e) || (e >= "0" && e <= "9");
}
function E(e) {
  return e >= "0" && e <= "9";
}
function ze(e) {
  return E(e) || (e >= "a" && e <= "f") || (e >= "A" && e <= "F");
}
function We(e) {
  return B(e) || e === "@";
}
function Me(e) {
  return (
    e !== "" &&
    e !== " " &&
    e !== "\t" &&
    e !==
      `
` &&
    e !== "<" &&
    e !== ">" &&
    e !== "|" &&
    e !== "&" &&
    e !== ";" &&
    e !== "(" &&
    e !== ")" &&
    e !== "'" &&
    e !== '"' &&
    e !== "`" &&
    e !== "\\"
  );
}
function x(e) {
  while (e.i < e.len) {
    let o = e.src[e.i];
    if (o === " " || o === "\t" || o === "\r") n(e);
    else if (o === "\\")
      if (
        e.src[e.i + 1] ===
        `
`
      )
        (n(e), n(e));
      else break;
    else break;
  }
}
function qe(e) {
  while (e.i < e.len) {
    let o = e.src[e.i];
    if (o === " " || o === "\t") n(e);
    else if (
      o === "\\" &&
      e.src[e.i + 1] ===
        `
`
    )
      (n(e), n(e));
    else break;
  }
}
function w(e, o = "arg") {
  x(e);
  let t = e.b;
  if (e.i >= e.len) return { type: "EOF", value: "", start: t, end: t };
  let s = e.src[e.i],
    r = L(e, 1),
    i = L(e, 2);
  if (
    s ===
    `
`
  )
    return (
      n(e),
      {
        type: "NEWLINE",
        value: `
`,
        start: t,
        end: e.b
      }
    );
  if (s === "#") {
    let a = e.i > 0 ? e.src[e.i - 1] : "";
    if (a === "" || " \t\n;&|<>()`".includes(a)) {
      let c = e.i;
      while (
        e.i < e.len &&
        e.src[e.i] !==
          `
`
      )
        n(e);
      return { type: "COMMENT", value: e.src.slice(c, e.i), start: t, end: e.b };
    }
  }
  if (s === "&" && r === "&") return (n(e), n(e), { type: "OP", value: "&&", start: t, end: e.b });
  if (s === "|" && r === "|") return (n(e), n(e), { type: "OP", value: "||", start: t, end: e.b });
  if (s === "|" && r === "&") return (n(e), n(e), { type: "OP", value: "|&", start: t, end: e.b });
  if (s === ";" && r === ";" && i === "&")
    return (n(e), n(e), n(e), { type: "OP", value: ";;&", start: t, end: e.b });
  if (s === ";" && r === ";") return (n(e), n(e), { type: "OP", value: ";;", start: t, end: e.b });
  if (s === ";" && r === "&") return (n(e), n(e), { type: "OP", value: ";&", start: t, end: e.b });
  if (s === ">" && r === ">") return (n(e), n(e), { type: "OP", value: ">>", start: t, end: e.b });
  if (s === ">" && r === "&" && i === "-")
    return (n(e), n(e), n(e), { type: "OP", value: ">&-", start: t, end: e.b });
  if (s === ">" && r === "&") return (n(e), n(e), { type: "OP", value: ">&", start: t, end: e.b });
  if (s === ">" && r === "|") return (n(e), n(e), { type: "OP", value: ">|", start: t, end: e.b });
  if (s === "&" && r === ">" && i === ">")
    return (n(e), n(e), n(e), { type: "OP", value: "&>>", start: t, end: e.b });
  if (s === "&" && r === ">") return (n(e), n(e), { type: "OP", value: "&>", start: t, end: e.b });
  if (s === "<" && r === "<" && i === "<")
    return (n(e), n(e), n(e), { type: "OP", value: "<<<", start: t, end: e.b });
  if (s === "<" && r === "<" && i === "-")
    return (n(e), n(e), n(e), { type: "OP", value: "<<-", start: t, end: e.b });
  if (s === "<" && r === "<") return (n(e), n(e), { type: "OP", value: "<<", start: t, end: e.b });
  if (s === "<" && r === "&" && i === "-")
    return (n(e), n(e), n(e), { type: "OP", value: "<&-", start: t, end: e.b });
  if (s === "<" && r === "&") return (n(e), n(e), { type: "OP", value: "<&", start: t, end: e.b });
  if (s === "<" && r === "(")
    return (n(e), n(e), { type: "LT_PAREN", value: "<(", start: t, end: e.b });
  if (s === ">" && r === "(")
    return (n(e), n(e), { type: "GT_PAREN", value: ">(", start: t, end: e.b });
  if (s === "(" && r === "(") return (n(e), n(e), { type: "OP", value: "((", start: t, end: e.b });
  if (s === ")" && r === ")") return (n(e), n(e), { type: "OP", value: "))", start: t, end: e.b });
  if (s === "|" || s === "&" || s === ";" || s === ">" || s === "<")
    return (n(e), { type: "OP", value: s, start: t, end: e.b });
  if (s === "(" || s === ")") return (n(e), { type: "OP", value: s, start: t, end: e.b });
  if (o === "cmd") {
    if (s === "[") {
      let a = !1,
        c = (u) => {
          while (e.src[u] === "\\")
            if (
              e.src[u + 1] ===
              `
`
            )
              ((u += 2), (a = !0));
            else if (
              e.src[u + 1] === "\r" &&
              e.src[u + 2] ===
                `
`
            )
              ((u += 3), (a = !0));
            else break;
          return u;
        },
        f = c(e.i + 1);
      if (e.src[f] === "[") {
        let u = c(f + 1);
        if (a && e.src[u] === "(") e.zshCondParenDiff = !0;
      }
    }
    if (
      s === "[" &&
      r === "[" &&
      (i === " " ||
        i === "\t" ||
        i ===
          `
` ||
        i === "" ||
        i === "(")
    ) {
      if (i === "(") e.zshCondParenDiff = !0;
      return (n(e), n(e), { type: "OP", value: "[[", start: t, end: e.b });
    }
    if (s === "[") return (n(e), { type: "OP", value: "[", start: t, end: e.b });
    if (
      s === "{" &&
      (r === " " ||
        r === "\t" ||
        r ===
          `
`)
    )
      return (n(e), { type: "OP", value: "{", start: t, end: e.b });
    if (s === "}") return (n(e), { type: "OP", value: "}", start: t, end: e.b });
    if (s === "!" && (r === " " || r === "\t"))
      return (n(e), { type: "OP", value: "!", start: t, end: e.b });
  }
  if (s === '"') return (n(e), { type: "DQUOTE", value: '"', start: t, end: e.b });
  if (s === "'") {
    let a = e.i;
    n(e);
    while (e.i < e.len && e.src[e.i] !== "'") n(e);
    if (e.i < e.len) n(e);
    return { type: "SQUOTE", value: e.src.slice(a, e.i), start: t, end: e.b };
  }
  if (s === "$") {
    if (r === "(" && i === "(")
      return (n(e), n(e), n(e), { type: "DOLLAR_DPAREN", value: "$((", start: t, end: e.b });
    if (r === "(") return (n(e), n(e), { type: "DOLLAR_PAREN", value: "$(", start: t, end: e.b });
    if (r === "{") return (n(e), n(e), { type: "DOLLAR_BRACE", value: "${", start: t, end: e.b });
    if (r === "'") {
      let a = e.i;
      (n(e), n(e));
      while (e.i < e.len && e.src[e.i] !== "'") {
        if (e.src[e.i] === "\\" && e.i + 1 < e.len) n(e);
        n(e);
      }
      if (e.i < e.len) n(e);
      return { type: "ANSI_C", value: e.src.slice(a, e.i), start: t, end: e.b };
    }
    return (n(e), { type: "DOLLAR", value: "$", start: t, end: e.b });
  }
  if (s === "`") return (n(e), { type: "BACKTICK", value: "`", start: t, end: e.b });
  if (E(s)) {
    let a = e.i;
    while (a < e.len && E(e.src[a])) a++;
    let c = a < e.len ? e.src[a] : "";
    if (c === ">" || c === "<") {
      let f = e.i;
      while (e.i < a) n(e);
      return { type: "WORD", value: e.src.slice(f, e.i), start: t, end: e.b };
    }
  }
  if (Be(s) || s === "{" || s === "}") {
    let a = e.i;
    while (e.i < e.len) {
      let c = e.src[e.i];
      if (c === "\\") {
        if (e.i + 1 >= e.len) break;
        if (
          e.src[e.i + 1] ===
          `
`
        ) {
          (n(e), n(e));
          continue;
        }
        (n(e), n(e));
        continue;
      }
      if (!ke(c) && c !== "{" && c !== "}" && c !== "#") break;
      n(e);
    }
    if (e.i > a) {
      let c = e.src.slice(a, e.i);
      if (/^-?\d+$/.test(c)) return { type: "NUMBER", value: c, start: t, end: e.b };
      return { type: "WORD", value: c, start: t, end: e.b };
    }
  }
  return (n(e), { type: "WORD", value: s, start: t, end: e.b });
}
function Fe(e, o) {
  let t = Ce(e),
    s = Ke(e);
  if (s >= De) return null;
  let r = {
    L: t,
    src: e,
    srcBytes: s,
    isAscii: s === e.length,
    nodeCount: 0,
    deadline: performance.now() + (o ?? Oe),
    aborted: !1,
    inBacktick: 0,
    inDquote: 0,
    stopToken: null,
    zshBraceDiff: e.includes("$\\\n"),
    keywordDesync: !1
  };
  try {
    let i = je(r);
    if (r.aborted) return null;
    if (r.zshBraceDiff || r.L.zshCondParenDiff || r.keywordDesync) {
      let a = l(r, "ERROR", i.startIndex, i.endIndex, [i]);
      if (r.keywordDesync) return { ...a, keywordAfterPrefix: !0 };
      return a;
    }
    return i;
  } catch {
    return null;
  }
}
function Ke(e) {
  let o = 0;
  for (let t = 0; t < e.length; t++) {
    let s = e.charCodeAt(t);
    if (s < 128) o++;
    else if (s < 2048) o += 2;
    else if (s >= 55296 && s <= 56319) ((o += 4), t++);
    else o += 3;
  }
  return o;
}
function Ue(e) {
  if ((e.nodeCount++, e.nodeCount > Re)) throw ((e.aborted = !0), Error("budget"));
  if ((e.nodeCount & 127) === 0 && performance.now() > e.deadline)
    throw ((e.aborted = !0), Error("timeout"));
}
function l(e, o, t, s, r) {
  return (Ue(e), { type: o, text: M(e, t, s), startIndex: t, endIndex: s, children: r });
}
function ajr(e) {
  return /\$(?:\{(?:\([^)}]{0,32}\))?)?[#^=~+!]*(?:[A-Za-z_]\w*)?[\u0080-\uffff]/.test(e);
}
function M(e, o, t) {
  if (e.isAscii) return e.src.slice(o, t);
  let s = e.L;
  if (!s.byteTable) we(s, 0);
  let r = s.byteTable,
    i = 0,
    a = e.src.length;
  while (i < a) {
    let f = (i + a) >>> 1;
    if (r[f] < o) i = f + 1;
    else a = f;
  }
  let c = i;
  ((i = c), (a = e.src.length));
  while (i < a) {
    let f = (i + a) >>> 1;
    if (r[f] < t) i = f + 1;
    else a = f;
  }
  return e.src.slice(c, i);
}
function y(e, o, t) {
  return l(e, o, t.start, t.end, []);
}
function je(e) {
  let o = [];
  x(e.L);
  while (!0) {
    let r = S(e.L);
    if (w(e.L, "cmd").type === "NEWLINE") {
      x(e.L);
      continue;
    }
    v(e.L, r);
    break;
  }
  let t = e.L.b;
  while (e.L.i < e.L.len) {
    let r = S(e.L),
      i = w(e.L, "cmd");
    if (i.type === "EOF") break;
    if (i.type === "NEWLINE") continue;
    if (i.type === "COMMENT") {
      o.push(y(e, "comment", i));
      continue;
    }
    v(e.L, r);
    let a = A(e, null);
    for (let c of a) o.push(c);
    if (a.length === 0) {
      let c = w(e.L, "cmd");
      if (c.type === "EOF") break;
      if (c.type === "OP" && c.value === ";;" && o.length > 0) continue;
      o.push(l(e, "ERROR", c.start, c.end, []));
    }
  }
  let s = o.length > 0 ? e.srcBytes : t;
  return l(e, "program", t, s, o);
}
function S(e) {
  return e.b * te + e.i;
}
function v(e, o) {
  let t = Math.floor(o / te);
  ((e.i = o - t * te), (e.b = t));
}
function A(e, o) {
  let t = [];
  while (!0) {
    x(e.L);
    let s = S(e.L),
      r = w(e.L, "cmd");
    if (r.type === "EOF") {
      v(e.L, s);
      break;
    }
    if (r.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) le(e);
      continue;
    }
    if (r.type === "COMMENT") {
      t.push(y(e, "comment", r));
      continue;
    }
    if (o && r.type === "OP" && r.value === o) {
      v(e.L, s);
      break;
    }
    if (
      r.type === "OP" &&
      (r.value === ")" ||
        r.value === "}" ||
        r.value === ";;" ||
        r.value === ";&" ||
        r.value === ";;&" ||
        r.value === "))" ||
        r.value === "]]" ||
        r.value === "]")
    ) {
      v(e.L, s);
      break;
    }
    if (r.type === "BACKTICK" && e.inBacktick > 0) {
      v(e.L, s);
      break;
    }
    if (
      r.type === "WORD" &&
      (r.value === "then" ||
        r.value === "elif" ||
        r.value === "else" ||
        r.value === "fi" ||
        r.value === "do" ||
        r.value === "done" ||
        r.value === "esac")
    ) {
      v(e.L, s);
      break;
    }
    v(e.L, s);
    let i = Ne(e);
    if (!i) break;
    (t.push(i), x(e.L));
    let a = S(e.L),
      c = w(e.L, "cmd");
    if (c.type === "OP" && (c.value === ";" || c.value === "&")) {
      let f = S(e.L),
        u = w(e.L, "cmd");
      if (
        (v(e.L, f),
        t.push(y(e, c.value, c)),
        u.type === "EOF" ||
          (u.type === "OP" &&
            (u.value === ")" ||
              u.value === "}" ||
              u.value === ";;" ||
              u.value === ";&" ||
              u.value === ";;&")) ||
          (u.type === "WORD" &&
            (u.value === "then" ||
              u.value === "elif" ||
              u.value === "else" ||
              u.value === "fi" ||
              u.value === "do" ||
              u.value === "done" ||
              u.value === "esac")))
      )
        continue;
    } else if (c.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) le(e);
      continue;
    } else v(e.L, a);
  }
  return t;
}
function Ne(e) {
  let o = pe(e);
  if (!o) return null;
  while (!0) {
    let t = S(e.L),
      s = w(e.L, "cmd");
    if (s.type === "OP" && (s.value === "&&" || s.value === "||")) {
      let r = y(e, s.value, s);
      F(e);
      let i = pe(e);
      if (!i) {
        o = l(e, "ERROR", o.startIndex, r.endIndex, [o, r]);
        break;
      }
      if (i.type === "redirected_statement" && i.children.length >= 2) {
        let a = i.children[0],
          c = i.children.slice(1),
          f = l(e, "list", o.startIndex, a.endIndex, [o, r, a]),
          u = c.at(-1);
        o = l(e, "redirected_statement", f.startIndex, u.endIndex, [f, ...c]);
      } else o = l(e, "list", o.startIndex, i.endIndex, [o, r, i]);
    } else {
      v(e.L, t);
      break;
    }
  }
  return o;
}
function F(e) {
  while (!0) {
    let o = S(e.L);
    if (w(e.L, "cmd").type !== "NEWLINE") {
      v(e.L, o);
      break;
    }
  }
}
function pe(e) {
  let o = U(e);
  if (!o) return null;
  let t = [o];
  while (!0) {
    let r = S(e.L),
      i = w(e.L, "cmd");
    if (i.type === "OP" && (i.value === "|" || i.value === "|&")) {
      let a = y(e, i.value, i);
      F(e);
      let c = U(e);
      if (!c) {
        t.push(a);
        break;
      }
      if (c.type === "redirected_statement" && c.children.length >= 2 && t.length >= 1) {
        let f = c.children[0],
          u = c.children.slice(1),
          d = [...t, a, f],
          b = l(e, "pipeline", d[0].startIndex, f.endIndex, d),
          p = u.at(-1),
          h = l(e, "redirected_statement", b.startIndex, p.endIndex, [b, ...u]);
        ((t.length = 0), t.push(h), (o = h));
        continue;
      }
      t.push(a, c);
    } else {
      v(e.L, r);
      break;
    }
  }
  if (t.length === 1) return t[0];
  let s = t.at(-1);
  return l(e, "pipeline", t[0].startIndex, s.endIndex, t);
}
function U(e) {
  x(e.L);
  let o = S(e.L),
    t = w(e.L, "cmd");
  if (t.type === "EOF") return (v(e.L, o), null);
  if (t.type === "OP" && t.value === "!") {
    let s = y(e, "!", t),
      r = U(e);
    if (!r) return l(e, "negated_command", s.startIndex, s.endIndex, [s]);
    if (r.type === "redirected_statement" && r.children.length >= 2) {
      let i = r.children[0],
        a = r.children.slice(1),
        c = l(e, "negated_command", s.startIndex, i.endIndex, [s, i]),
        f = a.at(-1);
      return l(e, "redirected_statement", c.startIndex, f.endIndex, [c, ...a]);
    }
    return l(e, "negated_command", s.startIndex, r.endIndex, [s, r]);
  }
  if (t.type === "OP" && t.value === "(") {
    let s = y(e, "(", t),
      r = A(e, ")"),
      i = w(e.L, "cmd"),
      a = i.type === "OP" && i.value === ")" ? y(e, ")", i) : l(e, ")", s.endIndex, s.endIndex, []),
      c = l(e, "subshell", s.startIndex, a.endIndex, [s, ...r, a]);
    return W(e, c);
  }
  if (t.type === "OP" && t.value === "((") {
    let s = y(e, "((", t),
      r = X(e, "))", "var"),
      i = w(e.L, "cmd"),
      a = i.value === "))" ? y(e, "))", i) : l(e, "))", s.endIndex, s.endIndex, []);
    return l(e, "compound_statement", s.startIndex, a.endIndex, [s, ...r, a]);
  }
  if (t.type === "OP" && t.value === "{") {
    let s = y(e, "{", t),
      r = A(e, "}"),
      i = w(e.L, "cmd"),
      a = i.type === "OP" && i.value === "}" ? y(e, "}", i) : l(e, "}", s.endIndex, s.endIndex, []),
      c = l(e, "compound_statement", s.startIndex, a.endIndex, [s, ...r, a]);
    return W(e, c);
  }
  if (t.type === "OP" && (t.value === "[" || t.value === "[[")) {
    let s = y(e, t.value, t),
      r = t.value === "[" ? "]" : "]]",
      i = S(e.L),
      a = ve(e, r);
    if ((x(e.L), t.value === "[" && L(e.L) !== "]")) {
      v(e.L, i);
      let b = e.stopToken;
      e.stopToken = "]";
      let p = U(e);
      if (((e.stopToken = b), p && p.type === "redirected_statement")) a = p;
      else (v(e.L, i), (a = ve(e, r)));
      x(e.L);
    }
    let c = S(e.L),
      f = w(e.L, "arg"),
      u;
    if (f.value === r && ae(L(e.L))) u = y(e, r, f);
    else (v(e.L, c), (u = l(e, r, s.endIndex, s.endIndex, [])));
    let d = a ? [s, a, u] : [s, u];
    return W(e, l(e, "test_command", s.startIndex, u.endIndex, d));
  }
  if (t.type === "WORD" && Se(L(e.L))) {
    if (t.value === "if") return W(e, tt(e, t), !0);
    if (t.value === "while" || t.value === "until") return W(e, nt(e, t), !0);
    if (t.value === "for") return W(e, xe(e, t), !0);
    if (t.value === "select") return W(e, xe(e, t), !0);
    if (t.value === "case") return W(e, st(e, t), !0);
    if (t.value === "function") return ct(e, t);
    if (Ae.has(t.value)) return W(e, Lt(e, t));
    if (t.value === "unset" || t.value === "unsetenv") {
      let s = S(e.L);
      x(e.L);
      let r = !1;
      if (L(e.L) === "(") (w(e.L, "cmd"), x(e.L), (r = L(e.L) === ")"));
      if ((v(e.L, s), !r)) return W(e, at(e, t));
    }
  }
  return (v(e.L, o), He(e));
}
function He(e) {
  let o = e.L.b,
    t = [],
    s = [];
  while (!0) {
    x(e.L);
    let m = _e(e);
    if (m) {
      t.push(m);
      continue;
    }
    let N = j(e);
    if (N) {
      s.push(N);
      continue;
    }
    break;
  }
  x(e.L);
  let r = S(e.L),
    i = w(e.L, "cmd");
  if (
    i.type === "EOF" ||
    i.type === "NEWLINE" ||
    i.type === "COMMENT" ||
    i.type === "BACKTICK" ||
    (i.type === "OP" && i.value !== "{" && i.value !== "[" && i.value !== "[[") ||
    (i.type === "WORD" && CXn.has(i.value) && i.value !== "in")
  ) {
    if (
      (v(e.L, r),
      (t.length > 0 || s.length > 0) &&
        i.type === "WORD" &&
        CXn.has(i.value) &&
        i.value !== "in" &&
        Nor())
    ) {
      let m = [...t, ...s].sort((N, k) => N.startIndex - k.startIndex);
      return ((e.keywordDesync = !0), l(e, "ERROR", o, m.at(-1).endIndex, m));
    }
    if (t.length === 1 && s.length === 0) return t[0];
    if (s.length > 0 && t.length === 0) {
      let m = s.at(-1);
      return l(e, "redirected_statement", s[0].startIndex, m.endIndex, s);
    }
    if (t.length > 1 && s.length === 0) {
      let m = t.at(-1);
      return l(e, "variable_assignments", t[0].startIndex, m.endIndex, t);
    }
    if (t.length > 0 || s.length > 0) {
      let m = [...t, ...s],
        N = m.at(-1);
      return l(e, "command", o, N.endIndex, m);
    }
    return null;
  }
  v(e.L, r);
  let a = S(e.L),
    c = C(e, "cmd");
  if (c && c.type === "word") {
    x(e.L);
    let m = !1;
    if (L(e.L) === "(") {
      let N = S(e.L);
      (w(e.L, "cmd"), x(e.L), (m = L(e.L) === ")"), v(e.L, N));
    }
    if (m) {
      let N = w(e.L, "cmd");
      x(e.L);
      let k = w(e.L, "cmd"),
        _ = y(e, "(", N),
        D = y(e, ")", k);
      (x(e.L), F(e));
      let z = U(e);
      if (z) {
        let Q = [z];
        if (
          z.type === "redirected_statement" &&
          z.children.length >= 2 &&
          z.children[0].type === "compound_statement"
        )
          Q = z.children;
        let ce = Q.at(-1);
        return l(e, "function_definition", c.startIndex, ce.endIndex, [c, _, D, ...Q]);
      }
    }
  }
  v(e.L, a);
  let f = C(e, "cmd");
  if (!f) {
    if (t.length === 1) return t[0];
    return null;
  }
  let u = l(e, "command_name", f.startIndex, f.endIndex, [f]),
    d = [],
    b = [],
    p = null;
  while (!0) {
    x(e.L);
    let m = j(e, !0);
    if (m) {
      if (m.type === "heredoc_redirect") p = m;
      else if (m.type === "herestring_redirect") d.push(m);
      else b.push(m);
      continue;
    }
    if (b.length > 0) break;
    if (e.stopToken === "]" && L(e.L) === "]") break;
    let N = S(e.L),
      k = w(e.L, "arg");
    if (
      k.type === "EOF" ||
      k.type === "NEWLINE" ||
      k.type === "COMMENT" ||
      (k.type === "OP" &&
        (k.value === "|" ||
          k.value === "|&" ||
          k.value === "&&" ||
          k.value === "||" ||
          k.value === ";" ||
          k.value === ";;" ||
          k.value === ";&" ||
          k.value === ";;&" ||
          k.value === "&" ||
          k.value === ")" ||
          k.value === "}" ||
          k.value === "))"))
    ) {
      v(e.L, N);
      break;
    }
    v(e.L, N);
    let _ = C(e, "arg");
    if (!_) {
      if (L(e.L) === "(") {
        let D = w(e.L, "cmd"),
          z = y(e, "(", D),
          Q = A(e, ")"),
          ce = S(e.L),
          Le = w(e.L, "cmd"),
          V;
        if (Le.type === "OP" && Le.value === ")") V = y(e, ")", Le);
        else (v(e.L, ce), (V = l(e, ")", z.endIndex, z.endIndex, [])));
        d.push(l(e, "subshell", z.startIndex, V.endIndex, [z, ...Q, V]));
        continue;
      }
      break;
    }
    if (_.type === "word" && _.text === "=") {
      d.push(l(e, "ERROR", _.startIndex, _.endIndex, [_]));
      continue;
    }
    if (
      (_.type === "word" || _.type === "concatenation") &&
      L(e.L) === "(" &&
      e.L.b === _.endIndex
    ) {
      d.push(l(e, "ERROR", _.startIndex, _.endIndex, [_]));
      continue;
    }
    d.push(_);
  }
  let h = [...t, ...s, u, ...d],
    g = h.length > 0 ? h.at(-1).endIndex : u.endIndex,
    T = h[0].startIndex,
    I = l(e, "command", T, g, h);
  if (p) {
    le(e);
    let m = e.L.heredocs.shift();
    if (m && p.children.length >= 2) {
      let _ = l(
          e,
          "heredoc_body",
          m.bodyStart,
          m.bodyEnd,
          m.quoted ? [] : Ge(e, m.bodyStart, m.bodyEnd)
        ),
        D = l(e, "heredoc_end", m.endStart, m.endEnd, []);
      (p.children.push(_, D), (p.endIndex = m.endEnd), (p.text = M(e, p.startIndex, m.endEnd)));
    }
    let N = [...s, p, ...b],
      k = s.length > 0 ? Math.min(I.startIndex, s[0].startIndex) : I.startIndex;
    return l(e, "redirected_statement", k, p.endIndex, [I, ...N]);
  }
  if (b.length > 0) {
    let m = b.at(-1);
    return l(e, "redirected_statement", I.startIndex, m.endIndex, [I, ...b]);
  }
  return I;
}
function W(e, o, t = !1) {
  let s = [];
  while (!0) {
    x(e.L);
    let i = S(e.L),
      a = j(e);
    if (!a) break;
    if (a.type === "herestring_redirect" && !t) {
      v(e.L, i);
      break;
    }
    s.push(a);
  }
  if (s.length === 0) return o;
  let r = s.at(-1);
  return l(e, "redirected_statement", o.startIndex, r.endIndex, [o, ...s]);
}
function _e(e) {
  let o = S(e.L);
  x(e.L);
  let t = e.L.b;
  if (!R(L(e.L))) return (v(e.L, o), null);
  while (B(L(e.L))) n(e.L);
  let s = e.L.b,
    r = s;
  if (L(e.L) === "[") {
    n(e.L);
    let I = 1;
    while (e.L.i < e.L.len && I > 0) {
      let m = L(e.L);
      if (m === "[") I++;
      else if (m === "]") I--;
      n(e.L);
    }
    r = e.L.b;
  }
  let i = L(e.L),
    a = L(e.L, 1),
    c;
  if (i === "=" && a !== "=") c = "=";
  else if (i === "+" && a === "=") c = "+=";
  else return (v(e.L, o), null);
  let f = l(e, "variable_name", t, s, []),
    u = f;
  if (r > s) {
    let I = l(e, "[", s, s + 1, []),
      m = Ze(e, s + 1, r - 1),
      N = l(e, "]", r - 1, r, []);
    u = l(e, "subscript", t, r, [f, I, m, N]);
  }
  let d = e.L.b;
  if ((n(e.L), c === "+=")) n(e.L);
  let b = e.L.b,
    p = l(e, c, d, b, []),
    h = null;
  if (L(e.L) === "(") {
    let I = w(e.L, "cmd"),
      m = y(e, "(", I),
      N = [m];
    while (!0) {
      if ((x(e.L), L(e.L) === ")")) break;
      let D = C(e, "arg");
      if (!D) break;
      N.push(D);
    }
    let k = w(e.L, "cmd"),
      _ = k.value === ")" ? y(e, ")", k) : l(e, ")", m.endIndex, m.endIndex, []);
    (N.push(_), (h = l(e, "array", m.startIndex, _.endIndex, N)));
  } else {
    let I = L(e.L);
    if (
      I &&
      I !== " " &&
      I !== "\t" &&
      I !==
        `
` &&
      I !== ";" &&
      I !== "&" &&
      I !== "|" &&
      I !== ")" &&
      I !== "}"
    )
      h = C(e, "arg");
  }
  let g = h ? [u, p, h] : [u, p],
    T = h ? h.endIndex : b;
  return l(e, "variable_assignment", t, T, g);
}
function Qe(e) {
  x(e.L);
  let o = L(e.L);
  if ((o === "@" || o === "*") && L(e.L, 1) === "]") {
    let t = e.L.b;
    return (n(e.L), l(e, "word", t, e.L.b, []));
  }
  if (o === "(" && L(e.L, 1) === "(") {
    let t = e.L.b;
    (n(e.L), n(e.L));
    let s = l(e, "((", t, e.L.b, []),
      r = G(e, "))", "var");
    x(e.L);
    let i;
    if (L(e.L) === ")" && L(e.L, 1) === ")") {
      let c = e.L.b;
      (n(e.L), n(e.L), (i = l(e, "))", c, e.L.b, [])));
    } else i = l(e, "))", e.L.b, e.L.b, []);
    let a = r ? [s, r, i] : [s, i];
    return l(e, "compound_statement", s.startIndex, i.endIndex, a);
  }
  return G(e, "]", "word");
}
function Ze(e, o, t) {
  let s = M(e, o, t);
  if (/^\d+$/.test(s)) return l(e, "number", o, t, []);
  if (/^\$([a-zA-Z_]\w*)$/.exec(s)) {
    let i = l(e, "$", o, o + 1, []),
      a = l(e, "variable_name", o + 1, t, []);
    return l(e, "simple_expansion", o, t, [i, a]);
  }
  if (s.length === 2 && s[0] === "$" && H.has(s[1])) {
    let i = l(e, "$", o, o + 1, []),
      a = l(e, "special_variable_name", o + 1, t, []);
    return l(e, "simple_expansion", o, t, [i, a]);
  }
  return l(e, "word", o, t, []);
}
function he(e) {
  let o = L(e.L);
  if (
    o === "" ||
    o ===
      `
`
  )
    return !1;
  if (o === "|" || o === "&" || o === ";" || o === "(" || o === ")") return !1;
  if (o === "<" || o === ">") return L(e.L, 1) === "(";
  if (E(o)) {
    let t = e.L.i;
    while (t < e.L.len && E(e.L.src[t])) t++;
    let s = t < e.L.len ? e.L.src[t] : "";
    if (s === ">" || s === "<") return !1;
  }
  if (o === "}") return !1;
  if (e.stopToken === "]" && o === "]") return !1;
  return !0;
}
function j(e, o = !1) {
  let t = S(e.L);
  x(e.L);
  let s = null;
  if (E(L(e.L))) {
    let a = e.L.b,
      c = e.L.i;
    while (c < e.L.len && E(e.L.src[c])) c++;
    let f = c < e.L.len ? e.L.src[c] : "";
    if (f === ">" || f === "<") {
      while (e.L.i < c) n(e.L);
      s = l(e, "file_descriptor", a, e.L.b, []);
    }
  }
  if (s === null && L(e.L) === "{") {
    let a = e.L.i + 1;
    if (a < e.L.len && /[A-Za-z_]/.test(e.L.src[a])) {
      while (a < e.L.len && /[A-Za-z0-9_]/.test(e.L.src[a])) a++;
      if (e.L.src[a] === "[") {
        let c = 0,
          f = !1,
          u = !1;
        while (a < e.L.len) {
          let d = e.L.src[a];
          if (f) {
            if (d === "'") f = !1;
          } else if (u) {
            if (d === "\\" && a + 1 < e.L.len) a++;
            else if (d === '"') u = !1;
          } else if (d === "\\" && a + 1 < e.L.len) a++;
          else if (d === "'") f = !0;
          else if (d === '"') u = !0;
          else if (d === "[") c++;
          else if (d === "]") {
            if ((c--, c === 0)) {
              a++;
              break;
            }
          } else if (
            d === "\\" &&
            e.L.src[a + 1] ===
              `
`
          ) {
            a += 2;
            continue;
          } else if (
            d ===
            `
`
          )
            break;
          a++;
        }
      }
      if (e.L.src[a] === "}") {
        let c = a + 1 < e.L.len ? e.L.src[a + 1] : "";
        if (c === ">" || c === "<") {
          let f = e.L.b;
          while (e.L.i <= a) n(e.L);
          s = l(e, "variable_name", f, e.L.b, []);
        }
      }
    }
  }
  let r = w(e.L, "arg");
  if (r.type !== "OP") return (v(e.L, t), null);
  let i = r.value;
  if (i === "<<<") {
    let a = y(e, "<<<", r);
    x(e.L);
    let c = C(e, "arg"),
      f = c ? c.endIndex : a.endIndex,
      u = c ? [a, c] : [a];
    return l(e, "herestring_redirect", s ? s.startIndex : a.startIndex, f, s ? [s, ...u] : u);
  }
  if (i === "<<" || i === "<<-") {
    let a = y(e, i, r);
    qe(e.L);
    let c = e.L.b,
      f = !1,
      u = "",
      d = L(e.L);
    if (d === "'" || d === '"') {
      ((f = !0), n(e.L));
      while (e.L.i < e.L.len && L(e.L) !== d) ((u += L(e.L)), n(e.L));
      if (e.L.i < e.L.len) n(e.L);
    } else if (d === "\\") {
      if (
        ((f = !0),
        n(e.L),
        e.L.i < e.L.len &&
          L(e.L) !==
            `
`)
      )
        ((u += L(e.L)), n(e.L));
      while (e.L.i < e.L.len && B(L(e.L))) ((u += L(e.L)), n(e.L));
    } else while (e.L.i < e.L.len && Me(L(e.L))) ((u += L(e.L)), n(e.L));
    let b = e.L.b;
    if (d === '"' && /[`$\\\n]/.test(u))
      throw ((e.aborted = !0), Error("heredoc delimiter contains substitution/escape chars"));
    if (e.L.i < e.L.len) {
      let T = L(e.L);
      if (
        T !== " " &&
        T !== "\t" &&
        T !==
          `
` &&
        T !== "<" &&
        T !== ">" &&
        T !== "|" &&
        T !== "&" &&
        T !== ";" &&
        T !== "(" &&
        T !== ")"
      )
        throw ((e.aborted = !0), Error("heredoc delimiter word continues past scanned segment"));
    }
    if (/[\uD800-\uDFFF]/.test(u))
      throw ((e.aborted = !0), Error("heredoc delimiter contains astral/surrogate code unit"));
    let p = l(e, "heredoc_start", c, b, []);
    e.L.heredocs.push({
      delim: u,
      stripTabs: i === "<<-",
      quoted: f,
      bodyStart: 0,
      bodyEnd: 0,
      endStart: 0,
      endEnd: 0
    });
    let h = s ? [s, a, p] : [a, p],
      g = s ? s.startIndex : a.startIndex;
    while (!0) {
      x(e.L);
      let T = L(e.L);
      if (
        T ===
          `
` ||
        T === "" ||
        e.L.i >= e.L.len
      )
        break;
      if (T === ">" || T === "<" || E(T)) {
        let N = S(e.L),
          k = j(e);
        if (k && k.type === "file_redirect") {
          h.push(k);
          continue;
        }
        v(e.L, N);
      }
      if (T === "|" && L(e.L, 1) !== "|") {
        let N = e.L.b;
        (n(e.L), x(e.L));
        let k = [];
        while (!0) {
          let _ = U(e);
          if (!_) break;
          if ((k.push(_), x(e.L), L(e.L) === "|" && L(e.L, 1) !== "|")) {
            let D = e.L.b;
            (n(e.L), k.push(l(e, "|", D, e.L.b, [])), x(e.L));
            continue;
          }
          break;
        }
        if (k.length > 0) {
          let _ = k.at(-1);
          h.push(l(e, "pipeline", k[0].startIndex, _.endIndex, k));
        } else h.push(l(e, "ERROR", N, e.L.b, []));
        continue;
      }
      if ((T === "&" && L(e.L, 1) === "&") || (T === "|" && L(e.L, 1) === "|")) {
        let N = e.L.b;
        (n(e.L), n(e.L), x(e.L));
        let k = U(e);
        if (k) h.push(k);
        else h.push(l(e, "ERROR", N, e.L.b, []));
        continue;
      }
      if (T === "&" || T === ";" || T === "(" || T === ")") {
        let N = e.L.b;
        while (
          e.L.i < e.L.len &&
          L(e.L) !==
            `
`
        )
          n(e.L);
        h.push(l(e, "ERROR", N, e.L.b, []));
        break;
      }
      let I = C(e, "arg");
      if (I) {
        h.push(I);
        continue;
      }
      let m = e.L.b;
      while (
        e.L.i < e.L.len &&
        L(e.L) !==
          `
`
      )
        n(e.L);
      if (e.L.b > m) h.push(l(e, "ERROR", m, e.L.b, []));
      break;
    }
    return l(e, "heredoc_redirect", g, e.L.b, h);
  }
  if (i === "<&-" || i === ">&-") {
    let a = y(e, i, r),
      c = [];
    if (s) c.push(s);
    (c.push(a), x(e.L));
    let f = S(e.L),
      u = he(e) ? C(e, "arg") : null;
    if (u) c.push(u);
    else v(e.L, f);
    let d = s ? s.startIndex : a.startIndex,
      b = u ? u.endIndex : a.endIndex;
    return l(e, "file_redirect", d, b, c);
  }
  if (
    i === ">" ||
    i === ">>" ||
    i === ">&" ||
    i === ">|" ||
    i === "&>" ||
    i === "&>>" ||
    i === "<" ||
    i === "<&"
  ) {
    let a = y(e, i, r),
      c = [];
    if (s) c.push(s);
    c.push(a);
    let f = a.endIndex,
      u = 0;
    while (!0) {
      if ((x(e.L), !he(e))) break;
      if (!o && u >= 1) break;
      let b = L(e.L),
        p = L(e.L, 1),
        h = null;
      if ((b === "<" || b === ">") && p === "(") h = re(e);
      else h = C(e, "arg");
      if (!h) break;
      (c.push(h), (f = h.endIndex), u++);
    }
    let d = s ? s.startIndex : a.startIndex;
    return l(e, "file_redirect", d, f, c);
  }
  return (v(e.L, t), null);
}
function re(e) {
  let o = L(e.L);
  if ((o !== "<" && o !== ">") || L(e.L, 1) !== "(") return null;
  let t = e.L.b;
  (n(e.L), n(e.L));
  let s = l(e, o + "(", t, e.L.b, []),
    r = A(e, ")");
  x(e.L);
  let i;
  if (L(e.L) === ")") {
    let a = e.L.b;
    (n(e.L), (i = l(e, ")", a, e.L.b, [])));
  } else i = l(e, ")", e.L.b, e.L.b, []);
  return l(e, "process_substitution", t, i.endIndex, [s, ...r, i]);
}
function le(e) {
  while (
    e.L.i < e.L.len &&
    e.L.src[e.L.i] !==
      `
`
  )
    n(e.L);
  if (e.L.i < e.L.len) n(e.L);
  for (let o of e.L.heredocs) {
    o.bodyStart = e.L.b;
    let t = o.delim.length;
    if (o.stripTabs && o.delim.startsWith("\t"))
      throw ((e.aborted = !0), Error("ambiguous heredoc terminator (<<- tab-prefixed delim)"));
    while (e.L.i < e.L.len) {
      let s = e.L.i,
        r = e.L.b,
        i = s;
      if (o.stripTabs) while (i < e.L.len && e.L.src[i] === "\t") i++;
      if (e.L.src.startsWith(o.delim, i)) {
        let a = i + t,
          c = a < e.L.len ? e.L.src[a] : "";
        if (
          c === "" ||
          c ===
            `
` ||
          c === "\r"
        ) {
          o.bodyEnd = r;
          while (e.L.i < i) n(e.L);
          o.endStart = e.L.b;
          for (let u = 0; u < t; u++) n(e.L);
          if (
            ((o.endEnd = e.L.b),
            e.L.i < e.L.len &&
              e.L.src[e.L.i] ===
                `
`)
          )
            n(e.L);
          return;
        }
        let f = a;
        while (f < e.L.len) {
          let u = e.L.src[f];
          if (
            u ===
            `
`
          )
            break;
          if (u === ")" || u === "`" || u === "}")
            throw ((e.aborted = !0), Error("ambiguous heredoc terminator (shell_eof_token)"));
          f++;
        }
      }
      while (
        e.L.i < e.L.len &&
        e.L.src[e.L.i] !==
          `
`
      )
        n(e.L);
      if (e.L.i < e.L.len) n(e.L);
    }
    ((o.bodyEnd = e.L.b), (o.endStart = e.L.b), (o.endEnd = e.L.b));
  }
}
function Ge(e, o, t) {
  let s = S(e.L);
  Xe(e, o);
  let r = [],
    i = e.L.b,
    a = !1;
  while (e.L.b < t) {
    let c = L(e.L);
    if (c === "\\") {
      let f = L(e.L, 1);
      if (f === "$" || f === "`" || f === "\\") {
        (n(e.L), n(e.L));
        continue;
      }
      n(e.L);
      continue;
    }
    if (c === "$" || c === "`") {
      if (c === "$" && L(e.L, 1) === "'") {
        n(e.L);
        continue;
      }
      let f = e.L.b;
      e.inDquote++;
      let u = K(e);
      if (
        (e.inDquote--,
        u &&
          (u.type === "simple_expansion" ||
            u.type === "expansion" ||
            u.type === "command_substitution" ||
            u.type === "arithmetic_expansion" ||
            u.type === "ERROR"))
      ) {
        if (a && f > i) r.push(l(e, "heredoc_content", i, f, []));
        (r.push(u), (i = e.L.b), (a = !0));
      }
      continue;
    }
    n(e.L);
  }
  if (a) r.push(l(e, "heredoc_content", i, t, []));
  return (v(e.L, s), r);
}
function Xe(e, o) {
  if (!e.L.byteTable) we(e.L, 0);
  let t = e.L.byteTable,
    s = 0,
    r = e.src.length;
  while (s < r) {
    let i = (s + r) >>> 1;
    if (t[i] < o) s = i + 1;
    else r = i;
  }
  ((e.L.i = s), (e.L.b = o));
}
function C(e, o) {
  x(e.L);
  let t = [];
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (
      i === " " ||
      i === "\t" ||
      i ===
        `
` ||
      i === "\r" ||
      i === "" ||
      i === "|" ||
      i === "&" ||
      i === ";" ||
      i === "(" ||
      i === ")"
    )
      break;
    if (i === "<" || i === ">") {
      if (L(e.L, 1) === "(") {
        let c = re(e);
        if (c) t.push(c);
        continue;
      }
      break;
    }
    if (i === '"') {
      t.push(q(e));
      continue;
    }
    if (i === "'") {
      let c = w(e.L, "arg");
      t.push(y(e, "raw_string", c));
      continue;
    }
    if (i === "$") {
      let c = L(e.L, 1);
      if (c === "'") {
        let u = w(e.L, "arg");
        t.push(y(e, "ansi_c_string", u));
        continue;
      }
      if (c === '"') {
        let u = { type: "DOLLAR", value: "$", start: e.L.b, end: e.L.b + 1 };
        (n(e.L), t.push(y(e, "$", u)), t.push(q(e)));
        continue;
      }
      if (c === "`") {
        let u = { type: "DOLLAR", value: "$", start: e.L.b, end: e.L.b + 1 };
        (n(e.L), t.push(y(e, "$", u)));
        continue;
      }
      let f = K(e);
      if (f) t.push(f);
      continue;
    }
    if (i === "`") {
      if (e.inBacktick > 0) break;
      let c = ie(e);
      t.push(c);
      continue;
    }
    if (i === "{") {
      let c = Ve(e);
      if (c) {
        t.push(c);
        continue;
      }
      let f = L(e.L, 1);
      if (
        f === ";" ||
        f === "|" ||
        f === "&" ||
        f ===
          `
` ||
        f === "" ||
        f === ")" ||
        f === " " ||
        f === "\t"
      ) {
        let d = e.L.b;
        (n(e.L), t.push(l(e, "word", d, e.L.b, [])));
        continue;
      }
      let u = Je(e);
      if (u) {
        for (let d of u) t.push(d);
        continue;
      }
    }
    if (i === "}") {
      let c = e.L.b;
      (n(e.L), t.push(l(e, "word", c, e.L.b, [])));
      continue;
    }
    if (i === "[" || i === "]") {
      let c = e.L.b;
      (n(e.L), t.push(l(e, "word", c, e.L.b, [])));
      continue;
    }
    let a = Ye(e);
    if (!a) break;
    if (
      a.type === "word" &&
      /^-?(0x)?[0-9]+#$/.test(a.text) &&
      L(e.L) === "$" &&
      (L(e.L, 1) === "{" || L(e.L, 1) === "(")
    ) {
      let c = K(e);
      if (c) {
        t.push(l(e, "number", a.startIndex, c.endIndex, [c]));
        continue;
      }
    }
    t.push(a);
  }
  if (t.length === 0) return null;
  if (t.length === 1) return t[0];
  let s = t[0],
    r = t.at(-1);
  return l(e, "concatenation", s.startIndex, r.endIndex, t);
}
function Ye(e) {
  let o = e.L.b,
    t = e.L.i;
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (i === "\\") {
      if (e.L.i + 1 >= e.L.len) break;
      if (
        e.L.src[e.L.i + 1] ===
        `
`
      )
        break;
      (n(e.L), n(e.L));
      continue;
    }
    if (
      i === " " ||
      i === "\t" ||
      i ===
        `
` ||
      i === "\r" ||
      i === "" ||
      i === "|" ||
      i === "&" ||
      i === ";" ||
      i === "(" ||
      i === ")" ||
      i === "<" ||
      i === ">" ||
      i === '"' ||
      i === "'" ||
      i === "$" ||
      i === "`" ||
      i === "{" ||
      i === "}" ||
      i === "[" ||
      i === "]"
    )
      break;
    n(e.L);
  }
  if (e.L.b === o) return null;
  let s = e.src.slice(t, e.L.i),
    r = /^-?\d+$/.test(s) ? "number" : "word";
  return l(e, r, o, e.L.b, []);
}
function Ve(e) {
  let o = S(e.L);
  if (L(e.L) !== "{") return null;
  let t = e.L.b;
  n(e.L);
  let s = e.L.b,
    r = e.L.b;
  while (E(L(e.L)) || R(L(e.L))) n(e.L);
  let i = e.L.b;
  if (i === r || L(e.L) !== "." || L(e.L, 1) !== ".") return (v(e.L, o), null);
  let a = e.L.b;
  (n(e.L), n(e.L));
  let c = e.L.b,
    f = e.L.b;
  while (E(L(e.L)) || R(L(e.L))) n(e.L);
  let u = e.L.b;
  if (u === f || L(e.L) !== "}") return (v(e.L, o), null);
  let d = e.L.b;
  n(e.L);
  let b = e.L.b,
    p = M(e, r, i),
    h = M(e, f, u),
    g = /^\d+$/.test(p),
    T = /^\d+$/.test(h);
  if (g !== T) return (v(e.L, o), null);
  if (!g && (p.length !== 1 || h.length !== 1)) return (v(e.L, o), null);
  let I = g ? "number" : "word",
    m = T ? "number" : "word";
  return l(e, "brace_expression", t, b, [
    l(e, "{", t, s, []),
    l(e, I, r, i, []),
    l(e, "..", a, c, []),
    l(e, m, f, u, []),
    l(e, "}", d, b, [])
  ]);
}
function Je(e) {
  if (L(e.L) !== "{") return null;
  let o = e.L.b;
  n(e.L);
  let t = e.L.b,
    s = [l(e, "word", o, t, [])];
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (
      r === "}" ||
      r ===
        `
` ||
      r === ";" ||
      r === "|" ||
      r === "&" ||
      r === " " ||
      r === "\t" ||
      r === "<" ||
      r === ">" ||
      r === "(" ||
      r === ")"
    )
      break;
    if (r === "[" || r === "]") {
      let c = e.L.b;
      (n(e.L), s.push(l(e, "word", c, e.L.b, [])));
      continue;
    }
    let i = e.L.b;
    while (e.L.i < e.L.len) {
      let c = L(e.L);
      if (c === "\\" && e.L.i + 1 < e.L.len) {
        (n(e.L), n(e.L));
        continue;
      }
      if (
        c === "}" ||
        c ===
          `
` ||
        c === ";" ||
        c === "|" ||
        c === "&" ||
        c === " " ||
        c === "\t" ||
        c === "<" ||
        c === ">" ||
        c === "(" ||
        c === ")" ||
        c === "[" ||
        c === "]"
      )
        break;
      n(e.L);
    }
    let a = e.L.b;
    if (a > i) {
      let c = M(e, i, a),
        f = /^-?\d+$/.test(c) ? "number" : "word";
      s.push(l(e, f, i, a, []));
    } else break;
  }
  if (L(e.L) === "}") {
    let r = e.L.b;
    (n(e.L), s.push(l(e, "word", r, e.L.b, [])));
  }
  return s;
}
function q(e) {
  let o = e.L.b;
  (n(e.L), e.inDquote++);
  let t = e.L.b,
    r = [l(e, '"', o, t, [])],
    i = e.L.b,
    a = e.L.i,
    c = () => {
      if (e.L.b > i) {
        let u = e.src.slice(a, e.L.i);
        if (!/^[ \t]+$/.test(u)) r.push(l(e, "string_content", i, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let u = L(e.L);
    if (u === '"') break;
    if (u === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    if (
      u ===
      `
`
    ) {
      (c(), n(e.L), (i = e.L.b), (a = e.L.i));
      continue;
    }
    if (u === "$") {
      let d = L(e.L, 1);
      if (
        d === "(" ||
        d === "{" ||
        R(d) ||
        H.has(d) ||
        E(d) ||
        d >= "\x80" ||
        (ne.has(d) && Te(e, e.L.i + 1) !== -1)
      ) {
        c();
        let b = K(e);
        if (b) r.push(b);
        ((i = e.L.b), (a = e.L.i));
        continue;
      }
      if (d !== '"' && d !== "") {
        c();
        let b = e.L.b;
        (n(e.L), r.push(l(e, "$", b, e.L.b, [])), (i = e.L.b), (a = e.L.i));
        continue;
      }
    }
    if (u === "`") {
      c();
      let d = ie(e);
      (r.push(d), (i = e.L.b), (a = e.L.i));
      continue;
    }
    n(e.L);
  }
  c();
  let f;
  if (L(e.L) === '"') {
    let u = e.L.b;
    (n(e.L), (f = l(e, '"', u, e.L.b, [])));
  } else f = l(e, '"', e.L.b, e.L.b, []);
  return (r.push(f), e.inDquote--, l(e, "string", o, f.endIndex, r));
}
function K(e) {
  let o = L(e.L, 1),
    t = e.L.b;
  if (o === "(" && L(e.L, 2) === "(") {
    (n(e.L), n(e.L), n(e.L));
    let c = l(e, "$((", t, e.L.b, []),
      f = S(e.L),
      u = X(e, "))", "var");
    x(e.L);
    let d,
      b = !1;
    if (L(e.L) !== ")" || L(e.L, 1) !== ")") (ge(e, f, "))"), (b = !0));
    if (L(e.L) === ")" && L(e.L, 1) === ")") {
      let p = e.L.b;
      (n(e.L), n(e.L), (d = l(e, "))", p, e.L.b, [])));
    } else d = l(e, "))", e.L.b, e.L.b, []);
    return l(e, b ? "ERROR" : "arithmetic_expansion", t, d.endIndex, [c, ...u, d]);
  }
  if (o === "[") {
    (n(e.L), n(e.L));
    let c = l(e, "$[", t, e.L.b, []),
      f = S(e.L),
      u = X(e, "]", "var");
    x(e.L);
    let d,
      b = !1;
    if (L(e.L) !== "]") (ge(e, f, "]"), (b = !0));
    if (L(e.L) === "]") {
      let p = e.L.b;
      (n(e.L), (d = l(e, "]", p, e.L.b, [])));
    } else d = l(e, "]", e.L.b, e.L.b, []);
    return l(e, b ? "ERROR" : "arithmetic_expansion", t, d.endIndex, [c, ...u, d]);
  }
  if (o === "(") {
    (n(e.L), n(e.L));
    let c = l(e, "$(", t, e.L.b, []),
      f = e.inDquote;
    e.inDquote = 0;
    let u = A(e, ")");
    ((e.inDquote = f), x(e.L));
    let d,
      b = !1;
    if (L(e.L) === ")") {
      let p = e.L.b;
      (n(e.L), (d = l(e, ")", p, e.L.b, [])));
    } else {
      ((b = !0), (e.zshBraceDiff = !0));
      let p = e.L.b,
        h = 1;
      while (e.L.i < e.L.len) {
        let g = L(e.L);
        if (g === "\\" && e.L.i + 1 < e.L.len) {
          (n(e.L), n(e.L));
          continue;
        }
        if (g === '"' || g === "'") {
          if ((O(e, g), e.L.i < e.L.len)) n(e.L);
          continue;
        }
        if (g === "`") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "`") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (g === "$" && L(e.L, 1) === "$") {
          (n(e.L), n(e.L));
          continue;
        }
        if (g === "$" && L(e.L, 1) === "'") {
          if ((O(e, "$'"), e.L.i < e.L.len)) n(e.L);
          continue;
        }
        if (g === "(") h++;
        else if (g === ")") {
          if ((h--, h === 0)) break;
        }
        n(e.L);
      }
      if ((u.push(l(e, "ERROR", p, e.L.b, [])), L(e.L) === ")")) {
        let g = e.L.b;
        (n(e.L), (d = l(e, ")", g, e.L.b, [])));
      } else d = l(e, "ERROR", e.L.b, e.L.b, []);
    }
    if (
      !b &&
      u.length === 1 &&
      u[0].type === "redirected_statement" &&
      u[0].children.length === 1 &&
      u[0].children[0].type === "file_redirect"
    )
      u = u[0].children;
    return l(e, b ? "ERROR" : "command_substitution", t, d.endIndex, [c, ...u, d]);
  }
  if (o === "{") {
    (n(e.L), n(e.L));
    let c = l(e, "${", t, e.L.b, []),
      f = Pe(e),
      u,
      d = !1;
    while (
      L(e.L) ===
      `
`
    )
      n(e.L);
    if (L(e.L) === "}") {
      let b = e.L.b;
      (n(e.L), (u = l(e, "}", b, e.L.b, [])));
    } else {
      ((d = !0), (e.zshBraceDiff = !0));
      let b = e.L.b,
        p = 1;
      while (e.L.i < e.L.len) {
        let g = L(e.L);
        if (g === "\\" && e.L.i + 1 < e.L.len) {
          (n(e.L), n(e.L));
          continue;
        }
        if (g === '"' || g === "'") {
          if ((O(e, g), e.L.i < e.L.len)) n(e.L);
          continue;
        }
        if (g === "$" && L(e.L, 1) === "(") {
          let T = 1;
          (n(e.L), n(e.L));
          while (e.L.i < e.L.len && T > 0) {
            let I = L(e.L);
            if (I === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            else if (I === "$" && L(e.L, 1) === "$") n(e.L);
            else if (I === "$" && L(e.L, 1) === "'") O(e, "$'");
            else if (I === '"' || I === "'") O(e, I);
            else if (I === "`") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "`") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (I === "(") T++;
            else if (I === ")") T--;
            n(e.L);
          }
          continue;
        }
        if (g === "`") {
          n(e.L);
          while (e.L.i < e.L.len && L(e.L) !== "`") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (e.L.i < e.L.len) n(e.L);
          continue;
        }
        if (g === "$" && L(e.L, 1) === "$") {
          (n(e.L), n(e.L));
          continue;
        }
        if (g === "$" && L(e.L, 1) === "'") {
          if ((O(e, "$'"), e.L.i < e.L.len)) n(e.L);
          continue;
        }
        if (g === "$" && L(e.L, 1) === "{") (p++, n(e.L));
        else if (g === "}") {
          if ((p--, p === 0)) break;
        }
        n(e.L);
      }
      let h = l(e, "ERROR", b, e.L.b, []);
      if (L(e.L) === "}") {
        let g = e.L.b;
        (n(e.L), (u = l(e, "}", g, e.L.b, [])));
      } else u = l(e, "ERROR", e.L.b, e.L.b, []);
      f.push(h);
    }
    if (!d && e.inDquote > 0 && M(e, c.endIndex, u.startIndex).includes("'")) d = !0;
    if (!d && ajr(M(e, t, u.startIndex))) d = !0;
    if (/\\\n|\$\[|\$\{[ \t\n|]/.test(M(e, c.endIndex, u.startIndex))) e.zshBraceDiff = !0;
    return l(e, d || e.zshBraceDiff ? "ERROR" : "expansion", t, u.endIndex, [c, ...f, u]);
  }
  if (o === "'") {
    if ((O(e, "$'"), L(e.L) === "'")) n(e.L);
    return l(e, "ansi_c_string", t, e.L.b, []);
  }
  n(e.L);
  let s = e.L.b,
    r = l(e, "$", t, s, []),
    i = L(e.L);
  if (i >= "\x80") {
    while (B(L(e.L)) || L(e.L) >= "\x80") n(e.L);
    return l(e, "ERROR", t, e.L.b, []);
  }
  if (i === "_" && !B(L(e.L, 1)) && L(e.L, 1) < "\x80") {
    let c = e.L.b;
    n(e.L);
    let f = l(e, "special_variable_name", c, e.L.b, []);
    return l(e, "simple_expansion", t, e.L.b, [r, f]);
  }
  if (R(i)) {
    let c = e.L.b;
    while (B(L(e.L))) n(e.L);
    if (L(e.L) >= "\x80") {
      while (B(L(e.L)) || L(e.L) >= "\x80") n(e.L);
      return l(e, "ERROR", t, e.L.b, []);
    }
    let f = l(e, "variable_name", c, e.L.b, []);
    return l(e, "simple_expansion", t, e.L.b, [r, f]);
  }
  let a = i === "#" && !ne.has(L(e.L, 1));
  if (ne.has(i) && !a) {
    let c = Te(e, e.L.i);
    if (c !== -1) {
      while (e.L.i < c) n(e.L);
      return l(e, "ERROR", t, e.L.b, []);
    }
  }
  if (E(i)) {
    let c = e.L.b;
    n(e.L);
    let f = l(e, "variable_name", c, e.L.b, []);
    return l(e, "simple_expansion", t, e.L.b, [r, f]);
  }
  if (H.has(i)) {
    let c = e.L.b;
    n(e.L);
    let f = l(e, "special_variable_name", c, e.L.b, []);
    return l(e, "simple_expansion", t, e.L.b, [r, f]);
  }
  return r;
}
function Pe(e) {
  let o = [];
  x(e.L);
  {
    let i = L(e.L),
      a = L(e.L, 1);
    if (i === "#" && a === "!" && L(e.L, 2) === "}") return (n(e.L), n(e.L), o);
    if (i === "!" && a === "#") {
      let c = 2;
      if (L(e.L, c) === "#") c++;
      if (L(e.L, c) === " ") c++;
      if (L(e.L, c) === "}") {
        while (c-- > 0) n(e.L);
        return o;
      }
    }
  }
  if (L(e.L) === "#") {
    let i = e.L.b;
    (n(e.L), o.push(l(e, "#", i, e.L.b, [])));
  }
  let t = L(e.L);
  if ((t === "!" || t === "=" || t === "~") && (R(L(e.L, 1)) || E(L(e.L, 1)))) {
    let i = e.L.b;
    (n(e.L), o.push(l(e, t, i, e.L.b, [])));
  }
  if ((x(e.L), R(L(e.L)))) {
    let i = e.L.b;
    while (B(L(e.L))) n(e.L);
    o.push(l(e, "variable_name", i, e.L.b, []));
  } else if (E(L(e.L))) {
    let i = e.L.b;
    while (E(L(e.L))) n(e.L);
    o.push(l(e, "variable_name", i, e.L.b, []));
  } else if (H.has(L(e.L))) {
    let i = e.L.b;
    (n(e.L), o.push(l(e, "special_variable_name", i, e.L.b, [])));
  }
  if (L(e.L) === "[") {
    let i = o.at(-1),
      a = e.L.b;
    n(e.L);
    let c = l(e, "[", a, e.L.b, []),
      f = Qe(e);
    x(e.L);
    let u = e.L.b;
    if (L(e.L) === "]") n(e.L);
    let d = l(e, "]", u, e.L.b, []);
    if (i) {
      let b = f ? [i, c, f, d] : [i, c, d];
      o[o.length - 1] = l(e, "subscript", i.startIndex, e.L.b, b);
    } else {
      let b = f ? [c, f, d] : [c, d];
      o.push(l(e, "ERROR", a, e.L.b, b));
    }
  }
  x(e.L);
  let s = L(e.L);
  if ((s === "*" || s === "@") && L(e.L, 1) === "}") {
    let i = e.L.b;
    return (n(e.L), o.push(l(e, s, i, e.L.b, [])), o);
  }
  if (s === "@" && R(L(e.L, 1))) {
    let i = e.L.b;
    (n(e.L), o.push(l(e, "@", i, e.L.b, [])));
    while (B(L(e.L))) n(e.L);
    return o;
  }
  let r = L(e.L);
  if (r === ":") {
    let i = L(e.L, 1);
    if (i === "}") return (n(e.L), o);
    if (i !== "-" && i !== "=" && i !== "?" && i !== "+") {
      (n(e.L), x(e.L));
      let a = L(e.L),
        c;
      if (a === "-" && E(L(e.L, 1))) {
        let f = e.L.b;
        n(e.L);
        while (E(L(e.L))) n(e.L);
        c = l(e, "number", f, e.L.b, []);
      } else c = G(e, ":}", "var");
      if (c) o.push(c);
      if ((x(e.L), L(e.L) === ":")) {
        (n(e.L), x(e.L));
        let f = L(e.L),
          u;
        if (f === "-" && E(L(e.L, 1))) {
          let d = e.L.b;
          n(e.L);
          while (E(L(e.L))) n(e.L);
          u = l(e, "number", d, e.L.b, []);
        } else u = G(e, "}", "var");
        if (u) o.push(u);
      }
      return o;
    }
  }
  if (
    r === ":" ||
    r === "#" ||
    r === "%" ||
    r === "/" ||
    r === "^" ||
    r === "," ||
    r === "-" ||
    r === "=" ||
    r === "?" ||
    r === "+"
  ) {
    let i = e.L.b,
      a = L(e.L, 1),
      c = r;
    if (r === ":" && (a === "-" || a === "=" || a === "?" || a === "+"))
      (n(e.L), n(e.L), (c = r + a));
    else if ((r === "#" || r === "%" || r === "/" || r === "^" || r === ",") && a === r)
      (n(e.L), n(e.L), (c = r + r));
    else n(e.L);
    o.push(l(e, c, i, e.L.b, []));
    let f =
      c === "#" ||
      c === "##" ||
      c === "%" ||
      c === "%%" ||
      c === "/" ||
      c === "//" ||
      c === "^" ||
      c === "^^" ||
      c === "," ||
      c === ",,";
    if (c === "/" || c === "//") {
      let u = L(e.L);
      if (u === "#" || u === "%") {
        let d = e.L.b;
        (n(e.L), o.push(l(e, u, d, e.L.b, [])));
      }
      if (L(e.L) === '"') {
        o.push(q(e));
        let d = J(e, "regex", !0);
        if (d) o.push(d);
      } else {
        let d = J(e, "regex", !0);
        if (d) o.push(d);
      }
      if (L(e.L) === "/") {
        let d = e.L.b;
        (n(e.L), o.push(l(e, "/", d, e.L.b, [])));
        let b = J(e, "replword", !1);
        if (b)
          if (
            b.type === "concatenation" &&
            b.children.length === 2 &&
            b.children[0].type === "command_substitution"
          )
            (o.push(b.children[0]), o.push(b.children[1]));
          else o.push(b);
      }
    } else if (c === "#" || c === "##" || c === "%" || c === "%%") for (let u of et(e)) o.push(u);
    else {
      let u = J(e, f ? "regex" : "word", !1);
      if (u) o.push(u);
    }
  }
  return o;
}
function J(e, o, t) {
  let s = e.L.b;
  if (o === "word" && L(e.L) === "(") {
    n(e.L);
    let u = [l(e, "(", s, e.L.b, [])];
    while (e.L.i < e.L.len) {
      x(e.L);
      let d = L(e.L);
      if (
        d === ")" ||
        d === "}" ||
        d ===
          `
` ||
        d === ""
      )
        break;
      let b = e.L.b;
      while (e.L.i < e.L.len) {
        let p = L(e.L);
        if (
          p === ")" ||
          p === "}" ||
          p === " " ||
          p === "\t" ||
          p ===
            `
` ||
          p === ""
        )
          break;
        if (p === "\\" && e.L.i + 1 < e.L.len) {
          (n(e.L), n(e.L));
          continue;
        }
        if (p === "$" && L(e.L, 1) === "$") {
          (n(e.L), n(e.L));
          continue;
        }
        if (p === "$" && L(e.L, 1) === "'") {
          if ((O(e, "$'"), L(e.L) === "'")) n(e.L);
          continue;
        }
        if (p === "$" && L(e.L, 1) === "(") e.zshBraceDiff = !0;
        if (p === '"' || p === "'") {
          if ((O(e, p), L(e.L) === p)) n(e.L);
          continue;
        }
        if (p === "`") {
          ((e.zshBraceDiff = !0), n(e.L));
          while (e.L.i < e.L.len && L(e.L) !== "`") {
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            n(e.L);
          }
          if (L(e.L) === "`") n(e.L);
          continue;
        }
        if (p === "{") e.zshBraceDiff = !0;
        n(e.L);
      }
      if (e.L.b > b) u.push(l(e, "word", b, e.L.b, []));
      else break;
    }
    if (L(e.L) === ")") {
      let d = e.L.b;
      (n(e.L), u.push(l(e, ")", d, e.L.b, [])));
    }
    while (
      L(e.L) ===
      `
`
    )
      n(e.L);
    return l(e, "array", s, e.L.b, u);
  }
  if (o === "regex") {
    while (e.L.i < e.L.len) {
      let u = L(e.L);
      if (u === "{") e.zshBraceDiff = !0;
      if (u === "}") break;
      if (t && u === "/") break;
      if (u === "\\" && e.L.i + 1 < e.L.len) {
        (n(e.L), n(e.L));
        continue;
      }
      if (u === '"' || u === "'") {
        n(e.L);
        let d = Pii();
        while (e.L.i < e.L.len && L(e.L) !== u) {
          if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
            if (u === "'" && d && L(e.L, 1) === "'") e.zshBraceDiff = !0;
            n(e.L);
          } else if (u === '"' && d && !e.zshBraceDiff) {
            if (L(e.L) === "`") e.zshBraceDiff = !0;
            else if (L(e.L) === "$") {
              let b = 1;
              while (
                L(e.L, b) === "\\" &&
                L(e.L, b + 1) ===
                  `
`
              )
                b += 2;
              let p = L(e.L, b);
              if (p === "{" || p === "(" || p === "[") e.zshBraceDiff = !0;
            }
          }
          n(e.L);
        }
        if (L(e.L) === u) n(e.L);
        continue;
      }
      if (u === "`") {
        ((e.zshBraceDiff = !0), n(e.L));
        while (e.L.i < e.L.len && L(e.L) !== "`") {
          if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          n(e.L);
        }
        if (L(e.L) === "`") n(e.L);
        continue;
      }
      if (u === "$") {
        let d = L(e.L, 1);
        if (d === "{") {
          let b = 0;
          (n(e.L), n(e.L), b++);
          while (e.L.i < e.L.len && b > 0) {
            let p = L(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            else if (p === "$" && L(e.L, 1) === "$") n(e.L);
            else if (p === "$" && L(e.L, 1) === "'") O(e, "$'");
            else if (p === '"' || p === "'") O(e, p);
            else if (p === "`") {
              ((e.zshBraceDiff = !0), n(e.L));
              while (e.L.i < e.L.len && L(e.L) !== "`") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === "$" && L(e.L, 1) === "{") (b++, n(e.L));
            else if (p === "$" && L(e.L, 1) === "(") e.zshBraceDiff = !0;
            else if (p === "{") e.zshBraceDiff = !0;
            else if (p === "}") b--;
            n(e.L);
          }
          continue;
        }
        if (d === "(") {
          e.zshBraceDiff = !0;
          let b = 0;
          (n(e.L), n(e.L), b++);
          while (e.L.i < e.L.len && b > 0) {
            let p = L(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) n(e.L);
            else if (p === "$" && L(e.L, 1) === "$") n(e.L);
            else if (p === "$" && L(e.L, 1) === "'") O(e, "$'");
            else if (p === '"' || p === "'") O(e, p);
            else if (p === "`") {
              n(e.L);
              while (e.L.i < e.L.len && L(e.L) !== "`") {
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
                n(e.L);
              }
            } else if (p === "(") b++;
            else if (p === ")") b--;
            n(e.L);
          }
          continue;
        }
      }
      n(e.L);
    }
    let f = e.L.b;
    if (f === s) return null;
    return l(e, "regex", s, f, []);
  }
  let r = [],
    i = e.L.b,
    a = () => {
      if (e.L.b > i) r.push(l(e, "word", i, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let f = L(e.L);
    if (f === "}") break;
    if (f === "{") e.zshBraceDiff = !0;
    if (t && f === "/") break;
    if (f === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    let u = L(e.L, 1);
    if (f === "$") {
      if (u === "{" || u === "(" || u === "[") {
        a();
        let d = K(e);
        if (d) r.push(d);
        i = e.L.b;
        continue;
      }
      if (u === "'") {
        a();
        let d = e.L.b;
        if ((O(e, "$'"), L(e.L) === "'")) n(e.L);
        (r.push(l(e, "ansi_c_string", d, e.L.b, [])), (i = e.L.b));
        continue;
      }
      if (R(u) || E(u) || H.has(u) || u >= "\x80") {
        a();
        let d = K(e);
        if (d) r.push(d);
        i = e.L.b;
        continue;
      }
    }
    if (f === '"') {
      (a(), r.push(q(e)), (i = e.L.b));
      continue;
    }
    if (f === "'") {
      a();
      let d = e.L.b;
      if ((O(e, f), L(e.L) === "'")) n(e.L);
      (r.push(l(e, "raw_string", d, e.L.b, [])), (i = e.L.b));
      continue;
    }
    if ((f === "<" || f === ">") && u === "(") {
      ((e.zshBraceDiff = !0), a());
      let d = re(e);
      if (d) r.push(d);
      i = e.L.b;
      continue;
    }
    if (f === "`") {
      a();
      let d = ie(e);
      (r.push(d), (i = e.L.b));
      continue;
    }
    n(e.L);
  }
  if ((a(), r.length > 1 && r[0].type === "word" && /^[ \t]+$/.test(r[0].text))) r.shift();
  if (r.length === 0) return null;
  if (r.length === 1) return r[0];
  let c = r.at(-1);
  return l(e, "concatenation", r[0].startIndex, c.endIndex, r);
}
function et(e) {
  let o = [],
    t = e.L.b,
    s = () => {
      if (e.L.b > t) o.push(l(e, "regex", t, e.L.b, []));
    };
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (r === "}") break;
    if (r === "{") e.zshBraceDiff = !0;
    if (r === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    if (r === '"') {
      (s(), o.push(q(e)), (t = e.L.b));
      continue;
    }
    if (r === "'") {
      s();
      let i = e.L.b;
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== "'") n(e.L);
      if (L(e.L) === "'") n(e.L);
      (o.push(l(e, "raw_string", i, e.L.b, [])), (t = e.L.b));
      continue;
    }
    if (r === "`") {
      ((e.zshBraceDiff = !0), n(e.L));
      while (e.L.i < e.L.len && L(e.L) !== "`") {
        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (L(e.L) === "`") n(e.L);
      continue;
    }
    if (r === "$") {
      let i = L(e.L, 1);
      if (i === "$") {
        (n(e.L), n(e.L));
        continue;
      }
      if (i === "'") {
        s();
        let a = e.L.b;
        if ((O(e, "$'"), L(e.L) === "'")) n(e.L);
        (o.push(l(e, "ansi_c_string", a, e.L.b, [])), (t = e.L.b));
        continue;
      }
      if (i === "{") {
        let a = 1;
        (n(e.L), n(e.L));
        while (e.L.i < e.L.len && a > 0) {
          let c = L(e.L);
          if (c === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          else if (c === "$" && L(e.L, 1) === "$") n(e.L);
          else if (c === "$" && L(e.L, 1) === "'") O(e, "$'");
          else if (c === '"' || c === "'") O(e, c);
          else if (c === "`") {
            ((e.zshBraceDiff = !0), n(e.L));
            while (e.L.i < e.L.len && L(e.L) !== "`") {
              if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === "$" && L(e.L, 1) === "{") (a++, n(e.L));
          else if (c === "$" && L(e.L, 1) === "(") e.zshBraceDiff = !0;
          else if (c === "{") e.zshBraceDiff = !0;
          else if (c === "}") a--;
          n(e.L);
        }
        continue;
      }
      if (i === "(") {
        e.zshBraceDiff = !0;
        let a = 1;
        (n(e.L), n(e.L));
        while (e.L.i < e.L.len && a > 0) {
          let c = L(e.L);
          if (c === "\\" && e.L.i + 1 < e.L.len) n(e.L);
          else if (c === "$" && L(e.L, 1) === "$") n(e.L);
          else if (c === "$" && L(e.L, 1) === "'") O(e, "$'");
          else if (c === '"' || c === "'") O(e, c);
          else if (c === "`") {
            n(e.L);
            while (e.L.i < e.L.len && L(e.L) !== "`") {
              if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
              n(e.L);
            }
          } else if (c === "(") a++;
          else if (c === ")") a--;
          n(e.L);
        }
        continue;
      }
    }
    n(e.L);
  }
  return (s(), o);
}
function ie(e) {
  let o = e.L.b;
  n(e.L);
  let t = l(e, "`", o, e.L.b, []),
    s = e.L.i;
  {
    let u = !1;
    while (s < e.L.len) {
      let d = e.L.src[s];
      if (d === "\\") {
        let b = e.L.src[s + 1];
        if (b === "`" || b === "$" || b === "\\") u = !0;
        s += 2;
        continue;
      }
      if (d === "`") break;
      s++;
    }
    if (u) {
      let d = e.L.b;
      while (e.L.i < s) n(e.L);
      let b = l(e, "backtick_escape_unsupported", d, e.L.b, []),
        p;
      if (L(e.L) === "`") {
        let h = e.L.b;
        (n(e.L), (p = l(e, "`", h, e.L.b, [])));
      } else p = l(e, "`", e.L.b, e.L.b, []);
      return l(e, "command_substitution", o, p.endIndex, [t, b, p]);
    }
  }
  e.inBacktick++;
  let r = e.inDquote;
  e.inDquote = 0;
  let i = S(e.L),
    a = e.L.heredocs;
  e.L.heredocs = [];
  let c = [];
  while (!0) {
    if ((x(e.L), L(e.L) === "`" || L(e.L) === "")) break;
    let u = S(e.L),
      d = w(e.L, "cmd");
    if (d.type === "EOF" || d.type === "BACKTICK") {
      v(e.L, u);
      break;
    }
    if (d.type === "NEWLINE") continue;
    v(e.L, u);
    let b = Ne(e);
    if (!b) break;
    if ((c.push(b), x(e.L), L(e.L) === "`")) break;
    let p = S(e.L),
      h = w(e.L, "cmd");
    if (h.type === "OP" && (h.value === ";" || h.value === "&")) c.push(y(e, h.value, h));
    else if (h.type !== "NEWLINE") v(e.L, p);
  }
  if (((e.L.heredocs = a), e.inBacktick--, (e.inDquote = r), e.L.i !== s)) {
    v(e.L, i);
    while (e.L.i < s) n(e.L);
    ((c.length = 0), c.push(l(e, "backtick_body_overrun", t.endIndex, e.L.b, [])));
  }
  let f;
  if (L(e.L) === "`") {
    let u = e.L.b;
    (n(e.L), (f = l(e, "`", u, e.L.b, [])));
  } else f = l(e, "`", e.L.b, e.L.b, []);
  if (c.length === 0) c.push(l(e, "backtick_body_empty", t.endIndex, e.L.b, []));
  return l(e, "command_substitution", o, f.endIndex, [t, ...c, f]);
}
function tt(e, o) {
  let t = y(e, "if", o),
    s = [t],
    r = A(e, null);
  (s.push(...r), Z(e, "then", s));
  let i = A(e, null);
  s.push(...i);
  while (!0) {
    let c = S(e.L),
      f = w(e.L, "cmd");
    if (f.type === "WORD" && f.value === "elif") {
      let u = y(e, "elif", f),
        d = A(e, null),
        b = [u, ...d];
      Z(e, "then", b);
      let p = A(e, null);
      b.push(...p);
      let h = b.at(-1);
      s.push(l(e, "elif_clause", u.startIndex, h.endIndex, b));
    } else if (f.type === "WORD" && f.value === "else") {
      let u = y(e, "else", f),
        d = A(e, null),
        b = d.length > 0 ? d.at(-1) : u;
      s.push(l(e, "else_clause", u.startIndex, b.endIndex, [u, ...d]));
    } else {
      v(e.L, c);
      break;
    }
  }
  Z(e, "fi", s);
  let a = s.at(-1);
  return l(e, "if_statement", t.startIndex, a.endIndex, s);
}
function nt(e, o) {
  let t = y(e, o.value, o),
    s = [t],
    r = A(e, null);
  s.push(...r);
  let i = ue(e);
  if (i) s.push(i);
  let a = s.at(-1);
  return l(e, "while_statement", t.startIndex, a.endIndex, s);
}
function xe(e, o) {
  let t = y(e, o.value, o);
  if ((x(e.L), o.value === "for" && L(e.L) === "(" && L(e.L, 1) === "(")) {
    let b = e.L.b;
    (n(e.L), n(e.L));
    let p = l(e, "((", b, e.L.b, []),
      h = [t, p];
    for (let N = 0; N < 3; N++) {
      x(e.L);
      let k = X(e, N < 2 ? ";" : "))", "assign");
      if ((h.push(...k), N < 2)) {
        if (L(e.L) === ";") {
          let _ = e.L.b;
          (n(e.L), h.push(l(e, ";", _, e.L.b, [])));
        }
      }
    }
    if ((x(e.L), L(e.L) === ")" && L(e.L, 1) === ")")) {
      let N = e.L.b;
      (n(e.L), n(e.L), h.push(l(e, "))", N, e.L.b, [])));
    } else h.push(l(e, "))", e.L.b, e.L.b, []));
    let g = S(e.L),
      T = w(e.L, "cmd");
    if (T.type === "OP" && T.value === ";") h.push(y(e, ";", T));
    else if (T.type !== "NEWLINE") v(e.L, g);
    let I = ue(e);
    if (I) h.push(I);
    else if ((F(e), x(e.L), L(e.L) === "{")) {
      let N = e.L.b;
      n(e.L);
      let k = l(e, "{", N, e.L.b, []),
        _ = A(e, "}"),
        D;
      if (L(e.L) === "}") {
        let z = e.L.b;
        (n(e.L), (D = l(e, "}", z, e.L.b, [])));
      } else D = l(e, "}", e.L.b, e.L.b, []);
      h.push(l(e, "compound_statement", k.startIndex, D.endIndex, [k, ..._, D]));
    }
    let m = h.at(-1);
    return l(e, "c_style_for_statement", t.startIndex, m.endIndex, h);
  }
  let s = [t],
    r = w(e.L, "arg");
  if (r.type === "WORD" && R(r.value[0] ?? "") && [...r.value].every(B))
    s.push(l(e, "variable_name", r.start, r.end, []));
  else s.push(l(e, "ERROR", r.start, r.end, []));
  x(e.L);
  let i = S(e.L),
    a = w(e.L, "arg");
  if (a.type === "WORD" && a.value === "in") {
    s.push(y(e, "in", a));
    while (!0) {
      x(e.L);
      let b = L(e.L);
      if (
        b === ";" ||
        b ===
          `
` ||
        b === ""
      )
        break;
      let p = C(e, "arg");
      if (!p) break;
      s.push(p);
    }
  } else v(e.L, i);
  let c = S(e.L),
    f = w(e.L, "cmd");
  if (f.type === "OP" && f.value === ";") s.push(y(e, ";", f));
  else if (f.type !== "NEWLINE") v(e.L, c);
  let u = ue(e);
  if (u) s.push(u);
  let d = s.at(-1);
  return l(e, "for_statement", t.startIndex, d.endIndex, s);
}
function ue(e) {
  F(e);
  let o = S(e.L),
    t = w(e.L, "cmd");
  if (t.type !== "WORD" || t.value !== "do") return (v(e.L, o), null);
  let s = y(e, "do", t),
    r = A(e, null),
    i = [s, ...r];
  Z(e, "done", i);
  let a = i.at(-1);
  return l(e, "do_group", s.startIndex, a.endIndex, i);
}
function st(e, o) {
  let t = y(e, "case", o),
    s = [t];
  x(e.L);
  let r = C(e, "arg");
  if (r) s.push(r);
  (x(e.L), Z(e, "in", s), F(e));
  while (!0) {
    (x(e.L), F(e));
    let a = S(e.L),
      c = w(e.L, "arg");
    if (c.type === "WORD" && c.value === "esac") {
      s.push(y(e, "esac", c));
      break;
    }
    if (c.type === "EOF") break;
    v(e.L, a);
    let f = rt(e);
    if (!f) break;
    s.push(f);
  }
  let i = s.at(-1);
  return l(e, "case_statement", t.startIndex, i.endIndex, s);
}
function rt(e) {
  x(e.L);
  let o = e.L.b,
    t = [];
  if (L(e.L) === "(") {
    let f = e.L.b;
    (n(e.L), t.push(l(e, "(", f, e.L.b, [])));
  }
  let s = !0;
  while (!0) {
    x(e.L);
    let f = L(e.L);
    if (f === ")" || f === "") break;
    let u = it(e);
    if (u.length === 0) break;
    if (!s && u.length > 1) {
      let d = u.map((h) =>
          h.type === "extglob_pattern" ? l(e, "word", h.startIndex, h.endIndex, []) : h
        ),
        b = d[0],
        p = d.at(-1);
      t.push(l(e, "concatenation", b.startIndex, p.endIndex, d));
    } else t.push(...u);
    if (
      ((s = !1),
      x(e.L),
      L(e.L) === "\\" &&
        L(e.L, 1) ===
          `
`)
    )
      (n(e.L), n(e.L), x(e.L));
    if (L(e.L) === "|") {
      let d = e.L.b;
      if (
        (n(e.L),
        t.push(l(e, "|", d, e.L.b, [])),
        L(e.L) === "\\" &&
          L(e.L, 1) ===
            `
`)
      )
        (n(e.L), n(e.L));
    } else break;
  }
  if (L(e.L) === ")") {
    let f = e.L.b;
    (n(e.L), t.push(l(e, ")", f, e.L.b, [])));
  }
  let r = A(e, null);
  t.push(...r);
  let i = S(e.L),
    a = w(e.L, "cmd");
  if (a.type === "OP" && (a.value === ";;" || a.value === ";&" || a.value === ";;&"))
    t.push(y(e, a.value, a));
  else v(e.L, i);
  if (t.length === 0) return null;
  if (r.length === 0)
    for (let f = 0; f < t.length; f++) {
      let u = t[f];
      if (u.type !== "extglob_pattern") continue;
      let d = M(e, u.startIndex, u.endIndex);
      if (/^[-+?*@!][a-zA-Z]/.test(d) && !/[*?(]/.test(d))
        t[f] = l(e, "word", u.startIndex, u.endIndex, []);
    }
  let c = t.at(-1);
  return l(e, "case_item", o, c.endIndex, t);
}
function it(e) {
  x(e.L);
  let o = S(e.L),
    t = e.L.b,
    s = e.L.i,
    r = 0,
    i = !1,
    a = !1,
    c = !1;
  while (e.L.i < e.L.len) {
    let b = L(e.L);
    if (b === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    if (b === "$" && L(e.L, 1) === "$") {
      ((i = !0), n(e.L), n(e.L));
      continue;
    }
    let p = b === "$" && L(e.L, 1) === "'";
    if (b === '"' || b === "'" || p) {
      c = !0;
      let h = p ? "'" : b;
      if (p) n(e.L);
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== h) {
        if (b !== "'" && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (L(e.L) === h) n(e.L);
      continue;
    }
    if (b === "(") {
      (r++, n(e.L));
      continue;
    }
    if (r > 0) {
      if (b === ")") {
        (r--, n(e.L));
        continue;
      }
      if (
        b ===
        `
`
      )
        break;
      n(e.L);
      continue;
    }
    if (
      b === ")" ||
      b === "|" ||
      b === " " ||
      b === "\t" ||
      b ===
        `
`
    )
      break;
    if (b === "$") i = !0;
    if (b === "[") a = !0;
    n(e.L);
  }
  if (e.L.b === t) return [];
  let f = e.src.slice(s, e.L.i),
    u = /[*?+@!]\(/.test(f);
  if (c && !u) return (v(e.L, o), ot(e));
  if (!u && (i || a)) {
    v(e.L, o);
    let b = C(e, "arg");
    return b ? [b] : [];
  }
  let d = u || /[*?]/.test(f) || /^[-+?*@!][a-zA-Z]/.test(f) ? "extglob_pattern" : "word";
  return [l(e, d, t, e.L.b, [])];
}
function ot(e) {
  let o = [],
    t = e.L.b,
    s = e.L.i,
    r = () => {
      if (e.L.i > s) {
        let i = e.src.slice(s, e.L.i),
          a = /[*?]/.test(i) ? "extglob_pattern" : "word";
        o.push(l(e, a, t, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let i = L(e.L);
    if (i === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    if (i === '"') {
      (r(), o.push(q(e)), (t = e.L.b), (s = e.L.i));
      continue;
    }
    if (i === "'") {
      r();
      let a = w(e.L, "arg");
      (o.push(y(e, "raw_string", a)), (t = e.L.b), (s = e.L.i));
      continue;
    }
    if (
      i === ")" ||
      i === "|" ||
      i === " " ||
      i === "\t" ||
      i ===
        `
`
    )
      break;
    n(e.L);
  }
  return (r(), o);
}
function ct(e, o) {
  let t = y(e, "function", o);
  x(e.L);
  let s = w(e.L, "arg"),
    r = l(e, "word", s.start, s.end, []),
    i = [t, r];
  if ((x(e.L), L(e.L) === "(" && L(e.L, 1) === ")")) {
    let f = w(e.L, "cmd");
    i.push(y(e, "(", f));
    let u = e.L.b;
    (n(e.L), i.push(l(e, ")", u, e.L.b, [])));
  }
  (x(e.L), F(e));
  let a = U(e);
  if (a)
    if (
      a.type === "redirected_statement" &&
      a.children.length >= 2 &&
      a.children[0].type === "compound_statement"
    )
      i.push(...a.children);
    else i.push(a);
  let c = i.at(-1);
  return l(e, "function_definition", t.startIndex, c.endIndex, i);
}
function Lt(e, o) {
  let t = y(e, o.value, o),
    s = [t],
    r = [];
  while (!0) {
    x(e.L);
    let u = j(e);
    if (u) {
      r.push(u);
      continue;
    }
    let d = L(e.L);
    if (d === "(") {
      s.push(l(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (
      d === "" ||
      d ===
        `
` ||
      d === ";" ||
      d === "&" ||
      d === "|" ||
      d === ")" ||
      d === "<" ||
      d === ">"
    )
      break;
    let b = _e(e);
    if (b) {
      s.push(b);
      continue;
    }
    if (d === '"' || d === "'" || d === "$") {
      let g = C(e, "arg");
      if (g) {
        s.push(g);
        continue;
      }
      break;
    }
    let p = S(e.L),
      h = w(e.L, "arg");
    if (h.type === "WORD" || h.type === "NUMBER")
      if (h.value.startsWith("-")) s.push(y(e, "word", h));
      else if (R(h.value[0] ?? "")) s.push(l(e, "variable_name", h.start, h.end, []));
      else s.push(y(e, "word", h));
    else {
      v(e.L, p);
      break;
    }
  }
  let i = s.at(-1),
    a = l(e, "declaration_command", t.startIndex, i.endIndex, s);
  if (r.length === 0) return a;
  let c = r.at(-1),
    f = Math.max(a.endIndex, c.endIndex);
  return l(e, "redirected_statement", t.startIndex, f, [a, ...r]);
}
function at(e, o) {
  let t = y(e, "unset", o),
    s = [t],
    r = [];
  while (!0) {
    x(e.L);
    let u = j(e);
    if (u) {
      r.push(u);
      continue;
    }
    let d = L(e.L);
    if (d === "(") {
      s.push(l(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (
      d === "" ||
      d ===
        `
` ||
      d === ";" ||
      d === "&" ||
      d === "|" ||
      d === ")" ||
      d === "<" ||
      d === ">"
    )
      break;
    let b = C(e, "arg");
    if (!b) break;
    if (b.type === "word")
      if (b.text.startsWith("-")) s.push(b);
      else s.push(l(e, "variable_name", b.startIndex, b.endIndex, []));
    else s.push(b);
  }
  let i = s.at(-1),
    a = l(e, "unset_command", t.startIndex, i.endIndex, s);
  if (r.length === 0) return a;
  let c = r.at(-1),
    f = Math.max(a.endIndex, c.endIndex);
  return l(e, "redirected_statement", t.startIndex, f, [a, ...r]);
}
function Z(e, o, t) {
  F(e);
  let s = S(e.L),
    r = w(e.L, "cmd");
  if (r.type === "WORD" && r.value === o) t.push(y(e, o, r));
  else v(e.L, s);
}
function ve(e, o) {
  return be(e, o);
}
function be(e, o) {
  let t = me(e, o);
  if (!t) return null;
  while (!0) {
    x(e.L);
    let s = S(e.L);
    if (o === "]]" && L(e.L) === "|" && L(e.L, 1) === "|") {
      let r = e.L.b;
      (n(e.L), n(e.L));
      let i = l(e, "||", r, e.L.b, []);
      oe(e, o);
      let a = me(e, o);
      if (!a) {
        v(e.L, s);
        break;
      }
      t = l(e, "binary_expression", t.startIndex, a.endIndex, [t, i, a]);
    } else break;
  }
  return t;
}
function me(e, o) {
  let t = ye(e, o);
  if (!t) return null;
  while (!0) {
    x(e.L);
    let s = S(e.L);
    if (o === "]]" && L(e.L) === "&" && L(e.L, 1) === "&") {
      let r = e.L.b;
      (n(e.L), n(e.L));
      let i = l(e, "&&", r, e.L.b, []);
      oe(e, o);
      let a = ye(e, o);
      if (!a) {
        v(e.L, s);
        break;
      }
      t = l(e, "binary_expression", t.startIndex, a.endIndex, [t, i, a]);
    } else break;
  }
  return t;
}
function oe(e, o) {
  if ((x(e.L), o === "]]"))
    while (!0) {
      let t = L(e.L);
      if (
        t ===
        `
`
      )
        (n(e.L), x(e.L));
      else if (t === "#")
        while (
          L(e.L) &&
          L(e.L) !==
            `
`
        )
          n(e.L);
      else break;
    }
}
function ye(e, o) {
  if ((oe(e, o), L(e.L) === "(")) {
    let s = e.L.b;
    n(e.L);
    let r = l(e, "(", s, e.L.b, []),
      i = be(e, o);
    x(e.L);
    let a;
    if (L(e.L) === ")") {
      let f = e.L.b;
      (n(e.L), (a = l(e, ")", f, e.L.b, [])));
    } else a = l(e, ")", e.L.b, e.L.b, []);
    let c = i ? [r, i, a] : [r, a];
    return l(e, "parenthesized_expression", r.startIndex, a.endIndex, c);
  }
  return lt(e, o);
}
function Ee(e, o) {
  oe(e, o);
  let t = L(e.L),
    s = (r) =>
      r === " " ||
      r === "\t" ||
      r ===
        `
` ||
      r === "";
  if (t === "!" && (s(L(e.L, 1)) || L(e.L, 1) === "(")) {
    let r = e.L.b;
    n(e.L);
    let i = l(e, "!", r, e.L.b, []),
      a = Ee(e, o);
    if (!a) return i;
    return l(e, "unary_expression", i.startIndex, a.endIndex, [i, a]);
  }
  if (t === "(") {
    let r = e.L.b;
    n(e.L);
    let i = l(e, "(", r, e.L.b, []),
      a = be(e, o);
    x(e.L);
    let c;
    if (L(e.L) === ")") {
      let u = e.L.b;
      (n(e.L), (c = l(e, ")", u, e.L.b, [])));
    } else c = l(e, ")", e.L.b, e.L.b, []);
    let f = a ? [i, a, c] : [i, c];
    return l(e, "parenthesized_expression", i.startIndex, c.endIndex, f);
  }
  if (t === "-" && R(L(e.L, 1))) {
    let r = S(e.L),
      i = e.L.b;
    n(e.L);
    while (B(L(e.L))) n(e.L);
    if (!s(L(e.L))) return (v(e.L, r), ee(e, o));
    let a = l(e, "test_operator", i, e.L.b, []),
      c = e.L.i;
    x(e.L);
    let f = ee(e, o);
    if (!f) {
      let u = e.src.slice(c, e.L.i);
      if (!/^(?:[ \t]|\\\n)*$/.test(u)) {
        let d = l(e, "test_rhs_missing", a.endIndex, e.L.b, []);
        return l(e, "unary_expression", a.startIndex, e.L.b, [a, d]);
      }
      return a;
    }
    return l(e, "unary_expression", a.startIndex, f.endIndex, [a, f]);
  }
  return ee(e, o);
}
function P(e, o, t) {
  let s = l(e, "test_rhs_missing", t.endIndex, e.L.b, []);
  return l(e, "binary_expression", o.startIndex, e.L.b, [o, t, s]);
}
function lt(e, o) {
  x(e.L);
  let t = Ee(e, o);
  if (!t) return null;
  x(e.L);
  let s = L(e.L),
    r = L(e.L, 1),
    i = null,
    a = e.L.b;
  if (s === "=" && r === "=") (n(e.L), n(e.L), (i = l(e, "==", a, e.L.b, [])));
  else if (s === "!" && r === "=") (n(e.L), n(e.L), (i = l(e, "!=", a, e.L.b, [])));
  else if (s === "=" && r === "~") (n(e.L), n(e.L), (i = l(e, "=~", a, e.L.b, [])));
  else if (s === "=" && r !== "=") (n(e.L), (i = l(e, "=", a, e.L.b, [])));
  else if (o === "]]" && s === "<" && r !== "<") (n(e.L), (i = l(e, "<", a, e.L.b, [])));
  else if (o === "]]" && s === ">" && r !== ">") (n(e.L), (i = l(e, ">", a, e.L.b, [])));
  else if (s === "-" && R(r)) {
    n(e.L);
    while (B(L(e.L))) n(e.L);
    i = l(e, "test_operator", a, e.L.b, []);
  }
  if (!i) return t;
  if ((x(e.L), o === "]]")) {
    let f = i.type;
    if (f === "=~") {
      x(e.L);
      let u = L(e.L),
        d = null;
      if (u === '"' || u === "'") {
        let b = S(e.L),
          p = u === '"' ? q(e) : y(e, "raw_string", w(e.L, "arg")),
          h = e.L.i,
          g = h;
        while (g < e.L.len && (e.src[g] === " " || e.src[g] === "\t")) g++;
        let T = e.src[g] ?? "",
          I = g + 1;
        while (e.src[I] === "\\")
          if (
            e.src[I + 1] ===
            `
`
          )
            I += 2;
          else if (
            e.src[I + 1] === "\r" &&
            e.src[I + 2] ===
              `
`
          )
            I += 3;
          else break;
        let m = e.src[I] ?? "";
        if (
          (T === "]" && m === "]" && g > h) ||
          (T === "&" && m === "&") ||
          (T === "|" && m === "|" && g > h) ||
          T ===
            `
` ||
          T === ""
        )
          d = p;
        else v(e.L, b);
      }
      if (!d) d = Ie(e, !0);
      if (!d) return P(e, t, i);
      return l(e, "binary_expression", t.startIndex, d.endIndex, [t, i, d]);
    }
    if (f === "=") {
      let u = Ie(e, !1);
      if (!u) return P(e, t, i);
      return l(e, "binary_expression", t.startIndex, u.endIndex, [t, i, u]);
    }
    if (f === "==" || f === "!=") {
      let u = ut(e);
      if (u.length === 0) return P(e, t, i);
      let d = u.at(-1);
      return l(e, "binary_expression", t.startIndex, d.endIndex, [t, i, ...u]);
    }
  }
  let c = ee(e, o);
  if (!c) return P(e, t, i);
  return l(e, "binary_expression", t.startIndex, c.endIndex, [t, i, c]);
}
function Ie(e, o) {
  x(e.L);
  let t = e.L.b,
    s = 0;
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (r === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    if (
      r ===
      `
`
    ) {
      if (s === 0) break;
      n(e.L);
      continue;
    }
    if (r === '"' || r === "'") {
      let i = r;
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== i) {
        if (i === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (e.L.i < e.L.len) n(e.L);
      continue;
    }
    if (r === "`") {
      n(e.L);
      while (e.L.i < e.L.len && L(e.L) !== "`") {
        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
        n(e.L);
      }
      if (e.L.i < e.L.len) n(e.L);
      continue;
    }
    if (s === 0) {
      if (r === " " || r === "\t") break;
      if (r === "&" || (!o && r === "|")) break;
      if (r === ")") break;
    }
    if (r === "(") s++;
    else if (r === ")" && s > 0) s--;
    n(e.L);
  }
  if (e.L.b === t) return null;
  return l(e, "regex", t, e.L.b, []);
}
function ut(e) {
  x(e.L);
  let o = [],
    t = e.L.b,
    s = e.L.i,
    r = 0,
    i = () => {
      if (e.L.i > s) {
        let a = e.src.slice(s, e.L.i),
          c = /^\d+$/.test(a) ? "number" : "extglob_pattern";
        o.push(l(e, c, t, e.L.b, []));
      }
    };
  while (e.L.i < e.L.len) {
    let a = L(e.L);
    if (a === "\\" && e.L.i + 1 < e.L.len) {
      (n(e.L), n(e.L));
      continue;
    }
    if (
      a ===
      `
`
    ) {
      if (r === 0) break;
      n(e.L);
      continue;
    }
    if (r === 0) {
      if (a === "&" || a === "|") break;
      if (a === " " || a === "\t") {
        let c = e.L.i;
        for (;;) {
          let b = e.L.src[c];
          if (b === " " || b === "\t") c++;
          else if (
            b === "\\" &&
            e.L.src[c + 1] ===
              `
`
          )
            c += 2;
          else if (
            b === "\\" &&
            e.L.src[c + 1] === "\r" &&
            e.L.src[c + 2] ===
              `
`
          )
            c += 3;
          else break;
        }
        let f = e.L.src[c] ?? "",
          u = c + 1;
        while (e.L.src[u] === "\\")
          if (
            e.L.src[u + 1] ===
            `
`
          )
            u += 2;
          else if (
            e.L.src[u + 1] === "\r" &&
            e.L.src[u + 2] ===
              `
`
          )
            u += 3;
          else break;
        let d = e.L.src[u] ?? "";
        if (
          (f === "]" && d === "]") ||
          (f === "&" && d === "&") ||
          (f === "|" && d === "|") ||
          f === "#" ||
          f ===
            `
`
        )
          break;
        n(e.L);
        continue;
      }
    }
    if (a === "$") {
      let c = L(e.L, 1);
      if (c === "'") {
        i();
        let f = w(e.L, "arg");
        (o.push(y(e, "ansi_c_string", f)), (t = e.L.b), (s = e.L.i));
        continue;
      }
      if (c === '"') {
        i();
        let f = { type: "DOLLAR", value: "$", start: e.L.b, end: e.L.b + 1 };
        (n(e.L), o.push(y(e, "$", f)), o.push(q(e)), (t = e.L.b), (s = e.L.i));
        continue;
      }
      if (c === "(" || c === "{" || R(c) || H.has(c) || c >= "\x80") {
        i();
        let f = K(e);
        if (f) o.push(f);
        ((t = e.L.b), (s = e.L.i));
        continue;
      }
    }
    if (a === '"') {
      (i(), o.push(q(e)), (t = e.L.b), (s = e.L.i));
      continue;
    }
    if (a === "'") {
      i();
      let c = w(e.L, "arg");
      (o.push(y(e, "raw_string", c)), (t = e.L.b), (s = e.L.i));
      continue;
    }
    if (a === "`") {
      i();
      let c = ie(e);
      (o.push(c), (t = e.L.b), (s = e.L.i));
      continue;
    }
    if ((a === "<" || a === ">") && L(e.L, 1) === "(") {
      i();
      let c = re(e);
      if (c) o.push(c);
      ((t = e.L.b), (s = e.L.i));
      continue;
    }
    if (a === ")" && r === 0) break;
    if (a === "(") r++;
    else if (a === ")" && r > 0) r--;
    n(e.L);
  }
  return (i(), o);
}
function ee(e, o) {
  if ((x(e.L), o === "]" && L(e.L) === "]" && ae(L(e.L, 1) ?? ""))) return null;
  if (o === "]]" && L(e.L) === "]" && L(e.L, 1) === "]" && ae(L(e.L, 2) ?? "")) return null;
  return C(e, "arg");
}
var ft = {
    "=": 2,
    "+=": 2,
    "-=": 2,
    "*=": 2,
    "/=": 2,
    "%=": 2,
    "<<=": 2,
    ">>=": 2,
    "&=": 2,
    "^=": 2,
    "|=": 2,
    "||": 4,
    "&&": 5,
    "|": 6,
    "^": 7,
    "&": 8,
    "==": 9,
    "!=": 9,
    "<": 10,
    ">": 10,
    "<=": 10,
    ">=": 10,
    "<<": 11,
    ">>": 11,
    "+": 12,
    "-": 12,
    "*": 13,
    "/": 13,
    "%": 13,
    "**": 14
  },
  dt = new Set(["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", "&=", "^=", "|=", "**"]);
function ge(e, o, t) {
  v(e.L, o);
  let s = 0;
  while (e.L.i < e.L.len) {
    let r = L(e.L);
    if (t === "))" || t === ")") {
      if (r === "(") s++;
      else if (r === ")")
        if (s === 0) {
          if (t === ")" || L(e.L, 1) === ")") return;
        } else s--;
    } else if (t === "]") {
      if (r === "[") s++;
      else if (r === "]") {
        if (s === 0) return;
        s--;
      }
    } else if (Y(e, t)) return;
    n(e.L);
  }
}
function G(e, o, t = "var") {
  e.inDquote++;
  let s = se(e, o, t);
  return (e.inDquote--, s);
}
function X(e, o, t = "var") {
  let s = [];
  while (!0) {
    let r = G(e, o, t);
    if (r) s.push(r);
    if ((x(e.L), L(e.L) === "," && !Y(e, o))) {
      n(e.L);
      continue;
    }
    break;
  }
  return s;
}
function se(e, o, t) {
  let s = fe(e, o, 0, t);
  if (!s) return null;
  if ((x(e.L), L(e.L) === "?")) {
    let r = e.L.b;
    n(e.L);
    let i = l(e, "?", r, e.L.b, []),
      a = fe(e, ":", 0, t);
    x(e.L);
    let c;
    if (L(e.L) === ":") {
      let b = e.L.b;
      (n(e.L), (c = l(e, ":", b, e.L.b, [])));
    } else c = l(e, ":", e.L.b, e.L.b, []);
    let f = se(e, o, t),
      u = f ?? c,
      d = [s, i];
    if (a) d.push(a);
    if ((d.push(c), f)) d.push(f);
    return l(e, "ternary_expression", s.startIndex, u.endIndex, d);
  }
  return s;
}
function bt(e) {
  let o = L(e.L),
    t = L(e.L, 1),
    s = L(e.L, 2);
  if (o === "<" && t === "<" && s === "=") return ["<<=", 3];
  if (o === ">" && t === ">" && s === "=") return [">>=", 3];
  if (o === "*" && t === "*") return ["**", 2];
  if (o === "<" && t === "<") return ["<<", 2];
  if (o === ">" && t === ">") return [">>", 2];
  if (o === "=" && t === "=") return ["==", 2];
  if (o === "!" && t === "=") return ["!=", 2];
  if (o === "<" && t === "=") return ["<=", 2];
  if (o === ">" && t === "=") return [">=", 2];
  if (o === "&" && t === "&") return ["&&", 2];
  if (o === "|" && t === "|") return ["||", 2];
  if (o === "+" && t === "=") return ["+=", 2];
  if (o === "-" && t === "=") return ["-=", 2];
  if (o === "*" && t === "=") return ["*=", 2];
  if (o === "/" && t === "=") return ["/=", 2];
  if (o === "%" && t === "=") return ["%=", 2];
  if (o === "&" && t === "=") return ["&=", 2];
  if (o === "^" && t === "=") return ["^=", 2];
  if (o === "|" && t === "=") return ["|=", 2];
  if (o === "+" && t !== "+") return ["+", 1];
  if (o === "-" && t !== "-") return ["-", 1];
  if (o === "*") return ["*", 1];
  if (o === "/") return ["/", 1];
  if (o === "%") return ["%", 1];
  if (o === "<") return ["<", 1];
  if (o === ">") return [">", 1];
  if (o === "&") return ["&", 1];
  if (o === "|") return ["|", 1];
  if (o === "^") return ["^", 1];
  if (o === "=") return ["=", 1];
  return null;
}
function fe(e, o, t, s) {
  let r = de(e, o, s);
  if (!r) return null;
  while (!0) {
    if ((x(e.L), Y(e, o))) break;
    if (L(e.L) === ",") break;
    let i = bt(e);
    if (!i) break;
    let [a, c] = i,
      f = ft[a];
    if (f === void 0 || f < t) break;
    let u = e.L.b;
    for (let h = 0; h < c; h++) n(e.L);
    let d = l(e, a, u, e.L.b, []),
      b = dt.has(a) ? f : f + 1,
      p = fe(e, o, b, s);
    if (!p) break;
    r = l(e, "binary_expression", r.startIndex, p.endIndex, [r, d, p]);
  }
  return r;
}
function de(e, o, t) {
  if ((x(e.L), Y(e, o))) return null;
  let s = L(e.L),
    r = L(e.L, 1);
  if ((s === "+" && r === "+") || (s === "-" && r === "-")) {
    let i = e.L.b;
    (n(e.L), n(e.L));
    let a = l(e, s + r, i, e.L.b, []),
      c = de(e, o, t);
    if (!c) return a;
    return l(e, "unary_expression", a.startIndex, c.endIndex, [a, c]);
  }
  if (s === "-" || s === "+" || s === "!" || s === "~") {
    if (t !== "var" && s === "-" && E(r)) {
      let f = e.L.b;
      n(e.L);
      while (E(L(e.L))) n(e.L);
      return l(e, "number", f, e.L.b, []);
    }
    let i = e.L.b;
    n(e.L);
    let a = l(e, s, i, e.L.b, []),
      c = de(e, o, t);
    if (!c) return a;
    return l(e, "unary_expression", a.startIndex, c.endIndex, [a, c]);
  }
  return pt(e, o, t);
}
function pt(e, o, t) {
  let s = ht(e, o, t);
  if (!s) return null;
  let r = L(e.L),
    i = L(e.L, 1);
  if ((r === "+" && i === "+") || (r === "-" && i === "-")) {
    let a = e.L.b;
    (n(e.L), n(e.L));
    let c = l(e, r + i, a, e.L.b, []);
    return l(e, "postfix_expression", s.startIndex, c.endIndex, [s, c]);
  }
  return s;
}
function ht(e, o, t) {
  if ((x(e.L), Y(e, o))) return null;
  let s = L(e.L);
  if (s === "(") {
    let r = e.L.b;
    n(e.L);
    let i = l(e, "(", r, e.L.b, []),
      a = X(e, ")", t);
    x(e.L);
    let c;
    if (L(e.L) === ")") {
      let f = e.L.b;
      (n(e.L), (c = l(e, ")", f, e.L.b, [])));
    } else c = l(e, ")", e.L.b, e.L.b, []);
    return l(e, "parenthesized_expression", i.startIndex, c.endIndex, [i, ...a, c]);
  }
  if (s === '"') return q(e);
  if (s === "$") return K(e);
  if (E(s)) {
    let r = e.L.b;
    while (E(L(e.L))) n(e.L);
    if (e.L.b - r === 1 && s === "0" && (L(e.L) === "x" || L(e.L) === "X")) {
      n(e.L);
      while (ze(L(e.L))) n(e.L);
    } else if (L(e.L) === "#") {
      n(e.L);
      while (We(L(e.L))) n(e.L);
    }
    return l(e, "number", r, e.L.b, []);
  }
  if (R(s)) {
    let r = e.L.b;
    while (B(L(e.L))) n(e.L);
    let i = L(e.L);
    if (t === "assign") {
      x(e.L);
      let c = L(e.L),
        f = L(e.L, 1);
      if (c === "=" && f !== "=") {
        let u = l(e, "variable_name", r, e.L.b, []),
          d = e.L.b;
        n(e.L);
        let b = l(e, "=", d, e.L.b, []),
          p = se(e, o, t),
          h = p ? p.endIndex : b.endIndex;
        return l(e, "variable_assignment", r, h, p ? [u, b, p] : [u, b]);
      }
    }
    if (i === "[") {
      let c = l(e, "variable_name", r, e.L.b, []),
        f = e.L.b;
      n(e.L);
      let u = l(e, "[", f, e.L.b, []),
        d = se(e, "]", "var") ?? K(e);
      x(e.L);
      let b;
      if (L(e.L) === "]") {
        let h = e.L.b;
        (n(e.L), (b = l(e, "]", h, e.L.b, [])));
      } else b = l(e, "]", e.L.b, e.L.b, []);
      let p = d ? [c, u, d, b] : [c, u, b];
      return l(e, "subscript", r, b.endIndex, p);
    }
    return l(e, t === "var" ? "variable_name" : "word", r, e.L.b, []);
  }
  return null;
}
function Y(e, o) {
  let t = L(e.L);
  if (o === "))") return t === ")" && L(e.L, 1) === ")";
  if (o === ")") return t === ")";
  if (o === ";") return t === ";";
  if (o === ":") return t === ":";
  if (o === "]") return t === "]";
  if (o === "}") return t === "}";
  if (o === ":}") return t === ":" || t === "}";
  return (
    t === "" ||
    t ===
      `
`
  );
}
function O(e, o) {
  let t = o.at(-1);
  if (o === "$'") n(e.L);
  n(e.L);
  while (e.L.i < e.L.len && L(e.L) !== t) {
    if (o !== "'" && L(e.L) === "\\" && e.L.i + 1 < e.L.len) n(e.L);
    else if ((t === '"' || e.inDquote > 0) && (L(e.L) === "$" || L(e.L) === "`"))
      e.zshBraceDiff = !0;
    n(e.L);
  }
}
export { Ew, CXn, ajr };

//# sourceMappingURL=chunk-fgeq4nth.js.map
