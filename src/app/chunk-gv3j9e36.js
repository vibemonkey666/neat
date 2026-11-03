// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { a } from "./chunk-4cgvah10.js";
import { so } from "./chunk-5rw2zfa0.js";
import { rf } from "./chunk-r00j5r9s.js";
import { Ew, CXn, ajr } from "./chunk-fgeq4nth.js";
import { bor, sii } from "./chunk-6dsz7zr0.js";
import { homedir as Rt } from "os";
function y$(e) {
  return e.replace(/^.*[\\/]/, "").replace(/\.exe$/i, "");
}
function qbt(e) {
  return /^-[pvV]+$/.test(e) && /[vV]/.test(e);
}
function Nye(e, t) {
  return /^-[a-zA-Z]+$/.test(e) && [...t].some((r) => e.includes(r));
}
function Oe(e) {
  return /^[+-][^iEF]*$/.test(e) && /[aA]/.test(e);
}
function N6s(e, t) {
  return /^-[a-z]+$/.test(e) && [...t].some((r) => e.includes(r));
}
var Ce = 1e4,
  _t = new Set(["export", "declare", "typeset", "readonly", "local", "unset", "unsetenv"]),
  bt = new Set(["word", "string", "raw_string", "number"]),
  ue = new Set(["command_substitution", "process_substitution"]),
  fe = new Set(["command", "declaration_command"]);
async function J1r(e) {
  if (!e || e.length > Ce) return null;
  try {
    let t = Ew().parse(e);
    if (!t) return null;
    let r = $ye(t, null),
      i = kt(r);
    return { rootNode: t, envVars: i, commandNode: r, originalCommand: e };
  } catch {
    return null;
  }
}
var VP = Symbol("parse-aborted");
async function HY(e) {
  if (!e) return null;
  if (e.length > Ce)
    return (a("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: !1 }), VP);
  try {
    let t = Ew().parse(e);
    if (t === null)
      return (a("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: !1 }), VP);
    return t;
  } catch {
    return (a("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: !0 }), VP);
  }
}
function $ye(e, t) {
  let { type: r, children: i } = e;
  if (fe.has(r)) return e;
  if (r === "variable_assignment" && t)
    return t.children.find((s) => fe.has(s.type) && s.startIndex > e.startIndex) ?? null;
  if (r === "pipeline") {
    for (let s of i) {
      let n = $ye(s, e);
      if (n) return n;
    }
    return null;
  }
  if (r === "redirected_statement") return i.find((s) => fe.has(s.type)) ?? null;
  for (let s of i) {
    let n = $ye(s, e);
    if (n) return n;
  }
  return null;
}
function kt(e) {
  if (!e || e.type !== "command") return [];
  let t = [];
  for (let r of e.children)
    if (r.type === "variable_assignment") t.push(r.text);
    else if (r.type === "command_name" || r.type === "word") break;
  return t;
}
function met(e) {
  if (e.type === "declaration_command") {
    let i = e.children[0];
    return i && _t.has(i.text) ? [i.text] : [];
  }
  let t = [],
    r = !1;
  for (let i of e.children) {
    if (i.type === "variable_assignment") continue;
    if (i.type === "command_name" || (!r && i.type === "word")) {
      r = !0;
      let s = i.children[0] ?? i;
      if (s.type === "concatenation")
        t.push(s.children.some((n) => ue.has(n.type)) ? s.text : s.children.map(K).join(""));
      else t.push(K(s));
      continue;
    }
    if (bt.has(i.type)) t.push(K(i));
    else if (i.type === "concatenation") {
      if (i.children.some((s) => ue.has(s.type))) break;
      t.push(i.children.map(K).join(""));
    } else if (ue.has(i.type)) break;
  }
  return t;
}
function K(e) {
  if (e.type === "word") return e.text.replace(/\\(.)/g, "$1");
  return wt(e.text);
}
function wt(e) {
  return e.length >= 2 && ((e[0] === '"' && e.at(-1) === '"') || (e[0] === "'" && e.at(-1) === "'"))
    ? e.slice(1, -1)
    : e;
}
var $e = new Set(["program", "list", "pipeline", "redirected_statement"]),
  te = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`
  ]),
  Ge = new Set([
    "command",
    "pipeline",
    "list",
    "negated_command",
    "declaration_command",
    "unset_command"
  ]),
  Et = new Set(["test_command", "redirected_statement"]),
  a7 = "__CMDSUB_OUTPUT__",
  v = "__TRACKED_VAR__",
  At = new Set(["file_redirect", "herestring_redirect", "heredoc_redirect"]),
  L = "__UNCERTAIN_VAR__";
function mi(e) {
  return e.includes(a7) || e.includes(v) || e.includes(L);
}
function Fye(e) {
  return e.replaceAll(a7, "$(\u2026)").replaceAll(v, "${\u2026}");
}
function bXn(e) {
  return e.replaceAll(a7, "").replaceAll(v, "");
}
var N = 0,
  ne = 0,
  C = 0,
  St = /["`\\]/;
function $t(e, t) {
  return (
    t > 0 &&
    e[t - 1] ===
      `
`
  );
}
function P1o(e) {
  if (e.includes(v) || e.includes(L)) return !0;
  let t = e.indexOf(a7);
  while (t !== -1) {
    if (!$t(e, t)) return !0;
    t = e.indexOf(a7, t + a7.length);
  }
  return !1;
}
function I1o(e) {
  return e.startsWith(a7) || e.startsWith(v) || e.startsWith(L);
}
var De = /[ \t\n*?[]/,
  Tt = /^-[ioe]$/,
  Nt = /^-[ioe]./,
  vt = /^--(input|output|error)=/,
  Le = new Set([
    "BASHOPTS",
    "BASH_VERSINFO",
    "EUID",
    "PPID",
    "SHELLOPTS",
    "UID",
    "FUNCNAME",
    "GROUPS",
    "BASH_ARGC",
    "BASH_ARGV",
    "BASH_LINENO",
    "BASH_SOURCE",
    "BASHPID"
  ]),
  me = new Set([
    "HOME",
    "PWD",
    "OLDPWD",
    "USER",
    "LOGNAME",
    "SHELL",
    "PATH",
    "HOSTNAME",
    "UID",
    "EUID",
    "PPID",
    "RANDOM",
    "SECONDS",
    "LINENO",
    "TMPDIR",
    "BASH_VERSION",
    "BASHPID",
    "SHLVL",
    "HISTFILE",
    "IFS"
  ]),
  Pt = new Set(["?", "$", "!", "#", "0", "-"]),
  It = new Set([
    "command_substitution",
    "process_substitution",
    "expansion",
    "simple_expansion",
    "brace_expression",
    "subshell",
    "compound_statement",
    "for_statement",
    "while_statement",
    "until_statement",
    "if_statement",
    "case_statement",
    "function_definition",
    "test_command",
    "ansi_c_string",
    "translated_string",
    "herestring_redirect",
    "heredoc_redirect"
  ]),
  Ot = [...It];
function O1o(e) {
  if (!e) return -2;
  if (e === "ERROR") return -1;
  let t = Ot.indexOf(e);
  return t >= 0 ? t + 1 : 0;
}
var ge = {
    ">": ">",
    ">>": ">>",
    "<": "<",
    ">&": ">&",
    "<&": "<&",
    ">|": ">|",
    "&>": "&>",
    "&>>": "&>>",
    "<<<": "<<<"
  },
  re = /\{[^\s]*(,|\.\.)[^\s]*\}/,
  xe = /\{[^{]*\\}/,
  ye = /\{[^}]*\\\{/,
  Ybt = /[\x00-\x08\x0B-\x1F\x7F]/,
  Q1r = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/,
  SXn = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/,
  Z1r = /\\[ \t]/,
  ejr = /(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n/,
  Ct = new RegExp(`${Z1r.source}|${ejr.source}`),
  nWt = /(?:^|[^\\])(?:\\\\)*(?:[`$]|[<>=]\()/,
  rWt = /(?:^|[^\\])(?:\\\\)*['"]/,
  wXn = /~\[/,
  vXn = /(?:^|[\s;&|])=[a-zA-Z_]/,
  tjr = /<\d*-\d*>/,
  Dt = /\{[^}]*['"]/;
function I(e) {
  let t = !1,
    r = !1,
    i = !1,
    s = !0,
    n = 0;
  while (n < e.length) {
    let o = e[n];
    if (i)
      if (o === "\\" && (e[n + 1] === "`" || e[n + 1] === "\\" || e[n + 1] === "$")) n += 2;
      else {
        if (o === "`") i = !1;
        n++;
      }
    else if (t) {
      if (o === "'") t = !1;
      n++;
    } else if (r)
      if (o === "\\" && (e[n + 1] === '"' || e[n + 1] === "\\" || e[n + 1] === "`")) n += 2;
      else if (o === "`") ((i = !0), n++);
      else {
        if (o === '"') r = !1;
        n++;
      }
    else if (o === "\\" && n + 1 < e.length) {
      if (
        e[n + 1] !==
        `
`
      )
        s = !1;
      n += 2;
    } else if (o === "#" && s) {
      while (
        n < e.length &&
        e[n] !==
          `
`
      )
        n++;
      s = !0;
    } else if (o === "`") ((i = !0), (s = !1), n++);
    else {
      if (o === "*" || o === "?" || o === "[") return !0;
      if (o === "'") t = !0;
      else if (o === '"') r = !0;
      ((s =
        o === " " ||
        o === "\t" ||
        o ===
          `
` ||
        o === ";" ||
        o === "|" ||
        o === "&" ||
        o === "(" ||
        o === ")" ||
        o === "<" ||
        o === ">"),
        n++);
    }
  }
  return !1;
}
var Lt = /[*?]|\[[^\]]*\]/;
function X(e) {
  return Lt.test(e);
}
function EXn(e) {
  let t = e.argvUnquotedGlob;
  if (e.carveOutMayDesyncQuoteScan === !0 || (t === void 0 && e.argv.some(mi)))
    return (
      e.argv.some(X) || e.redirects.some((i) => i.op !== "<<" && i.op !== "<<<" && X(i.target))
    );
  if (t === void 0) return !1;
  if (t.length !== e.argv.length) return e.argv.some(X);
  return e.argv.some((i, s) => X(i) && (t[s] === !0 || mi(i)));
}
function Ve(e) {
  if (!e.includes("{")) return e;
  let t = [],
    r = !1,
    i = !1,
    s = !1,
    n = !0,
    o = 0;
  while (o < e.length) {
    let u = e[o];
    if (s)
      if (u === "\\" && (e[o + 1] === "`" || e[o + 1] === "\\" || e[o + 1] === "$"))
        (t.push(u, e[o + 1]), (o += 2));
      else {
        if (u === "`") s = !1;
        (t.push(u === "{" ? " " : u), o++);
      }
    else if (r) {
      if (u === "'") r = !1;
      (t.push(u === "{" ? " " : u), o++);
    } else if (i)
      if (u === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\" || e[o + 1] === "`"))
        (t.push(u, e[o + 1]), (o += 2));
      else if (u === "`") ((s = !0), t.push(u), o++);
      else {
        if (u === '"') i = !1;
        (t.push(u === "{" ? " " : u), o++);
      }
    else if (u === "\\" && o + 1 < e.length) {
      if (
        (t.push(u, e[o + 1]),
        e[o + 1] !==
          `
`)
      )
        n = !1;
      o += 2;
    } else if (u === "#" && n) {
      while (
        o < e.length &&
        e[o] !==
          `
`
      )
        (t.push(e[o]), o++);
      n = !0;
    } else if (u === "`") ((s = !0), (n = !1), t.push(u), o++);
    else {
      if (u === "'") r = !0;
      else if (u === '"') i = !0;
      ((n =
        u === " " ||
        u === "\t" ||
        u ===
          `
` ||
        u === ";" ||
        u === "|" ||
        u === "&" ||
        u === "(" ||
        u === ")" ||
        u === "<" ||
        u === ">"),
        t.push(u),
        o++);
    }
  }
  return t.join("");
}
var Me = String.fromCharCode(36);
function ce(e, t) {
  if (e.type === t) return !0;
  for (let r of e.children) if (r && ce(r, t)) return !0;
  return !1;
}
async function q1(e, { readsDivergentShapes: t = !1 } = {}) {
  if (e === "") return { kind: "simple", commands: [], bareAssignmentNames: [] };
  let r = await HY(e);
  if (r === null) return { kind: "simple", commands: [], bareAssignmentNames: [] };
  let i = LY(e, r, { readsDivergentShapes: t });
  if (r !== VP && (i.kind === "simple" || i.nodeType !== void 0)) return { ...i, tree: r };
  return i;
}
function njr(e, t) {
  let r = (s) => Array.from({ length: e }, (n, o) => s(o));
  if (e <= 3)
    return {
      readings: Array.from({ length: 2 ** e }, (s, n) =>
        r((o) => Math.floor(n / 2 ** o) % 2 === 1)
      ),
      exhaustive: !0
    };
  let i = [r(() => !1), r(() => !0)];
  for (let s = 0; e <= 8 && s < e; s++) i.push(r((n) => n === s));
  if (t?.length === e && !i.some((s) => s.every((n, o) => n === t[o]))) i.push([...t]);
  return { readings: i, exhaustive: !1 };
}
function LY(
  e,
  t,
  { plainUnquotedHeredocs: r = !1, declarationPrefix: i, readsDivergentShapes: s = !1 } = {}
) {
  if (Q1r.test(e))
    return { kind: "too-complex", reason: "Contains lone surrogate", differential: !0 };
  if (Ybt.test(e))
    return { kind: "too-complex", reason: "Contains control characters", differential: !0 };
  if (SXn.test(e))
    return { kind: "too-complex", reason: "Contains Unicode whitespace", differential: !0 };
  if (Ct.test(e))
    return {
      kind: "too-complex",
      reason: "Contains backslash-escaped whitespace",
      differential: !0
    };
  if (wXn.test(e))
    return {
      kind: "too-complex",
      reason: "Contains zsh ~[ dynamic directory syntax",
      differential: !0
    };
  if (vXn.test(e))
    return { kind: "too-complex", reason: "Contains zsh =cmd equals expansion", differential: !0 };
  if (tjr.test(e))
    return {
      kind: "too-complex",
      reason: "Contains zsh <N-M> numeric-range glob",
      differential: !0
    };
  if (Dt.test(Ve(e)))
    return {
      kind: "too-complex",
      reason: "Contains brace with quote character (expansion obfuscation)",
      differential: !0
    };
  if (e.trim() === "") return { kind: "simple", commands: [], bareAssignmentNames: [] };
  if (t === VP)
    return {
      kind: "too-complex",
      reason: "Parser aborted (timeout, resource limit, or over-length)",
      nodeType: "PARSE_ABORT"
    };
  for (let k of ["backtick_body_empty", "backtick_body_overrun", "backtick_escape_unsupported"])
    if (ce(t, k))
      return {
        kind: "too-complex",
        reason:
          k === "backtick_body_empty"
            ? "empty backtick substitution \u2014 bash joins the surrounding words, so the parsed command boundaries cannot be trusted"
            : "backtick substitution scan could not be trusted (" +
              k +
              ") \u2014 the parsed bytes may differ from what bash executes",
        differential: !0
      };
  let o = Buffer.from(e, "utf8");
  {
    let k = Xe(t, o, 0);
    if (k) return k;
  }
  {
    let k = Qe(t);
    if (k) return k;
  }
  let u = (k) => k === 32 || k === 9 || k === 10 || k === 13 || k === 59 || k === 38,
    l = (k, w) => {
      let E = k;
      while (E < w) {
        let T = o[E];
        if (u(T)) E++;
        else if (T === 92 && (o[E + 1] === 10 || (o[E + 1] === 13 && o[E + 2] === 10)))
          E += o[E + 1] === 13 ? 3 : 2;
        else break;
      }
      return E;
    },
    f = t.children
      .filter((k) => k !== null)
      .map((k) => [k.startIndex, k.endIndex])
      .sort((k, w) => k[0] - w[0]),
    g = 0;
  for (let [k, w] of f) {
    if (l(g, k) < k)
      return { kind: "too-complex", reason: "Parser skipped input between top-level statements" };
    if (w > g) g = w;
  }
  if (l(g, o.length) < o.length)
    return { kind: "too-complex", reason: "Parser did not consume trailing input" };
  {
    let k = ut(t, o);
    if (k !== null)
      return {
        kind: "too-complex",
        reason: `Redirect uses ${Ne(k)} fd-variable assignment \u2014 modifies shell variable as side effect`
      };
  }
  {
    let k = ft(t);
    if (k) return k;
  }
  let c = s ? null : qe(t);
  if (c !== null)
    return {
      kind: "too-complex",
      reason: c,
      nodeType: "ERROR",
      differential: !0,
      divergentShape: !0
    };
  let d = B,
    h = Q,
    m = D,
    y = U,
    p = W,
    x = F,
    b = H;
  ((B = r), (Q = s), (D = i), (U = 0), (W = new Map()), (F = !1), (H = void 0));
  let _;
  try {
    if (((_ = Gt(t)), F && _.kind === "simple"))
      _ = {
        kind: "too-complex",
        reason:
          "A variable set in front of a declaration inside a branch or loop can't be checked before it runs"
      };
    let k = Jt();
    if (i === void 0 && k !== void 0)
      _ = { ..._, declarationPrefixes: k.length, declarationPrefixBashKeeps: k };
    if (i !== void 0 && _.kind === "simple" && en() !== i.length)
      _ = {
        kind: "too-complex",
        reason:
          "The variables set in front of declarations in this command can't be checked before it runs"
      };
  } finally {
    ((B = d), (Q = h), (D = m), (U = y), (W = p), (F = x), (H = b));
  }
  if (_.kind === "too-complex" && _.nodeType !== "ERROR" && (Ye(t) || je(t)))
    return { ..._, nodeType: "ERROR" };
  return _;
}
function qe(e) {
  if (e.children.length === 0)
    return e.startIndex === e.endIndex && !e.type.startsWith("heredoc_") ? "Parse error" : null;
  for (let t of e.children) {
    let r = t === null ? null : qe(t);
    if (r !== null) return r;
  }
  return e.type === "test_command" && e.children[0]?.type === "[" && !/^\[[ \t]/.test(e.text)
    ? "[ glued to the next word names another command"
    : null;
}
function Ye(e) {
  if (e.type === "ERROR" && (e.text.startsWith("${") || Ke(e.text))) return !0;
  for (let t of e.children) if (t && Ye(t)) return !0;
  return !1;
}
function je(e) {
  let t = e.children;
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (!i) continue;
    if (
      i.type === "simple_expansion" &&
      i.children.some((s) => s?.type === "special_variable_name" && s.text === "#")
    ) {
      let s = "";
      for (let o = r + 1; o < t.length; o++) {
        let u = t[o]?.text ?? "";
        if (((s += u), !/^[\w\u0080-\uffff]*$/.test(u))) break;
      }
      let n = /^[\w\u0080-\uffff]*(?=\[|:[a-zA-Z&])/.exec(s);
      if (n && /[\u0080-\uffff]/.test(n[0])) return !0;
    }
    if (je(i)) return !0;
  }
  return !1;
}
function Ke(e) {
  return /^\$[#^=~+]*[\w\u0080-\uffff]+$/.test(e) && /[\u0080-\uffff]/.test(e);
}
function Xe(e, t, r) {
  for (let i of e.children) {
    if (!i) continue;
    let s = i.startIndex - 1 - r;
    if (i.type === "comment" && s >= 0 && (t[s] === 41 || t[s] === 40))
      return {
        kind: "too-complex",
        reason:
          "comment glued to a paren \u2014 bash reads `)#\u2026` and `(#\u2026` as a comment, but zsh reads a keyword- or word-glued `(\u2026)` as a glob group whose `#\u2026` text is word content that executes",
        differential: !0
      };
    let n = Xe(i, t, r);
    if (n) return n;
  }
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "case_item" && !i.children.some((s) => s !== void 0 && s.type === ")") && et(i))
      return {
        kind: "too-complex",
        reason:
          "`case` pattern group holds a comment \u2014 bash reads no comment inside a pattern list, but zsh reads the group as one glob word and expands its contents",
        differential: !0
      };
    if (i.type === "function" && !e.children.some((s) => s !== void 0 && s.type === "(")) {
      let s = e.children[1],
        n = e.children.find((u) => u !== void 0 && u.type === "redirected_statement")?.children[0],
        o =
          e.children.find((u) => u !== void 0 && u.type === "subshell") ??
          (n?.type === "subshell" ? n : void 0);
      if (s !== void 0 && o !== void 0 && Zt(t, s.endIndex - r, o.startIndex - r))
        return {
          kind: "too-complex",
          reason:
            "`function` with a parenthesised body and no `()` \u2014 bash reads a subshell body, but zsh reads one glob-group word and expands its contents",
          differential: !0
        };
    }
    if (Mt.has(i.type) && t[i.endIndex - r] === 40)
      return {
        kind: "too-complex",
        reason: `\`${i.type}\` glued to a paren \u2014 bash reads a keyword and a subshell, but zsh reads one glob-group word and expands its contents`,
        differential: !0
      };
  }
  return null;
}
var Mt = new Set(["if", "elif", "else", "while", "until", "case"]);
function Qe(e) {
  if (e.type === "declaration_command" || e.type === "unset_command") {
    if (
      e.type === "declaration_command" &&
      e.children.some(
        (n) =>
          n !== void 0 &&
          (/^(?:export|readonly)$/.test(e.children[0]?.text ?? "") ? Bt : Te).test(P(n.text))
      ) &&
      !Y(e)
    )
      return {
        kind: "too-complex",
        reason: `${e.children[0]?.text ?? "declare"} with a flag that changes assignment semantics and an operand it would evaluate`,
        differential: !0
      };
    let t =
        e.type === "unset_command" ||
        /^(?:declare|typeset|local|export)$/.test(e.children[0]?.text ?? ""),
      r = /^(?:declare|typeset|local)$/.test(e.children[0]?.text ?? ""),
      i = e.children.some((n) => n !== void 0 && /^[-+][A-Za-z]*[fF]/.test(P(n.text))),
      s;
    for (let [n, o] of e.children.entries()) {
      if (!o) continue;
      if (n > 1 && s !== void 0 && o.type !== "variable_assignment" && o.startIndex === s.endIndex)
        return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} operand '${s.text}${o.text}' is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
          differential: !0
        };
      if (n > 0 && o.type === "ansi_c_string" && /^\$'[-+]/.test(o.text))
        return {
          kind: "too-complex",
          reason: `${e.children[0]?.text ?? e.type} flag ${o.text} \u2014 a $'\u2026' flag word the shell decodes`,
          differential: !0
        };
      if (n > 0 && !/^[-+]/.test(P(o.text))) {
        let u =
          o.type === "word" ||
          o.type === "raw_string" ||
          o.type === "concatenation" ||
          o.type === "variable_name" ||
          o.type === "number";
        if (o.type === "ansi_c_string" && (t || e.children[0]?.text === "readonly"))
          return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? e.type} operand ${o.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
            differential: !0
          };
        if (r) {
          if (!ae(o, i))
            return {
              kind: "too-complex",
              reason: `${e.children[0]?.text ?? "declare"} operand '${o.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
              differential: !0
            };
          s = o;
          continue;
        }
        let l = M(o.text),
          f = /^['"]?[A-Za-z_]\w*=/.test(o.text),
          g = u
            ? (t && l.includes("[")) ||
              (f ? l.slice(1).includes("\\") : o.text.slice(1).includes("\\"))
            : o.type === "string" && (f ? l.includes("\\") : o.text.includes("\\")),
          c = o.type === "variable_assignment" && /['\\]/.test(M(o.text)),
          d = u && t && /^['"]?\$/.test(l) && /[[`'"]/.test(o.text);
        if (g || c || d)
          return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? e.type} operand '${o.text}' carries a subscript or escape the shell evaluates \u2014 the parser read it as literal text`,
            differential: !0
          };
        if (
          o.type === "variable_name"
            ? !(G.test(o.text) || (i && ie.test(o.text)))
            : (o.type === "word" ||
                o.type === "concatenation" ||
                o.type === "raw_string" ||
                (o.type === "string" && M(o.text) !== o.text)) &&
              !Fe(o.text, i, e.children[0]?.text === "readonly")
        )
          return {
            kind: "too-complex",
            reason: `${e.children[0]?.text ?? e.type} operand '${o.text}' is not a plain variable name \u2014 the shell expands or matches it before assigning`,
            differential: !0
          };
      }
      s = o;
    }
  }
  if (e.type === "command") {
    let t = e.children.find((s) => s !== void 0 && s.type === "command_name"),
      r = t === void 0 ? -1 : e.children.indexOf(t),
      i = e.children.filter((s, n) => s !== void 0 && n > r && s.type !== "command_name");
    if (t !== void 0) {
      if (se(t) && i.some((f) => !/^[-+]/.test(P(f.text))))
        return {
          kind: "too-complex",
          reason: `command head ${t.text} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
          differential: !0
        };
      let s = de(t.text),
        n = i,
        o = !1,
        u = !1;
      while (zt.test(s) && n.length > 0) {
        o = !0;
        while (n.length > 0 && /^-/.test(P(n[0].text))) {
          let f = P(n[0].text);
          if (s === "command" && /^-[pP]*[vV]/.test(f)) u = !0;
          n = n.slice(s === "exec" && /^-[cl]*a$/.test(f) ? 2 : 1);
        }
        if (!u && n.length > 0 && se(n[0]) && n.slice(1).some((f) => !/^[-+]/.test(P(f.text))))
          return {
            kind: "too-complex",
            reason: `command head ${n[0].text} after ${s} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
            differential: !0
          };
        ((s = n.length > 0 ? de(n[0].text) : ""), (n = n.slice(1)));
      }
      let l = o || de(t.text) !== t.text || ze.test(t.text);
      if (!u && l && ze.test(s)) {
        let f = s === "integer" || s === "float",
          g = { ...e, children: [t, ...(f ? [{ ...t, text: "-i" }] : []), ...n] },
          c = n
            .map((p) => P(p.text))
            .filter((p) => /^[-+]/.test(p))
            .join(""),
          d =
            f ||
            (/^(?:declare|typeset|local|private)$/.test(s) && Ft.test(c)) ||
            (/^(?:export|readonly)$/.test(s) && Ut.test(c)),
          h = n.filter((p) => !/^[-+]/.test(P(p.text))),
          m = /[fF]/.test(c),
          y = (d && !Y(g)) || n.some((p) => p.type === "ansi_c_string" && /^\$'[-+]/.test(p.text));
        if (/^(?:declare|typeset|local|integer|float|private)$/.test(s))
          y ||= h.some((p) => !ae(p, m));
        else
          y ||= h.some((p) => {
            if (p.type === "ansi_c_string") return !0;
            let x = M(p.text);
            return (
              /[\\'"]/.test(x.replace(/^['"]/, "").replace(/['"]$/, "")) ||
              (s !== "readonly" && x.includes("[")) ||
              /^['"]?\$/.test(x) ||
              ((p.type === "word" ||
                p.type === "concatenation" ||
                p.type === "raw_string" ||
                (p.type === "string" && M(p.text) !== p.text)) &&
                !Fe(p.text, m, s === "readonly"))
            );
          });
        if (y)
          return {
            kind: "too-complex",
            reason: `${s} spelled '${o ? `${t.text} \u2026` : t.text}' with an operand the shell would evaluate \u2014 the parser did not read this as a declaration`,
            differential: !0
          };
      }
    }
  }
  for (let t of e.children) {
    if (!t) continue;
    let r = Qe(t);
    if (r) return r;
  }
  return null;
}
var zt = /^(?:builtin|command|exec|time|coproc|noglob|nocorrect|-)$/,
  ze = /^(?:declare|typeset|local|export|readonly|unset|integer|float|private)$/,
  Te = /^[-+].*[nialuAEFLRZ]/,
  Ft = /[nialuAEFLRZ]/,
  Bt = /^[-+].*[aAiluEFLRZ]/,
  Ut = /[aAiluEFLRZ]/,
  G = /^[A-Za-z_][A-Za-z0-9_]*$/,
  ie = /^[A-Za-z_][\w.:-]*$/;
function Fe(e, t, r = !1) {
  let i = M(e),
    s = e[0];
  if (s === "'" || s === '"') {
    if (((i = i.slice(1)), i.endsWith(s))) i = i.slice(0, -1);
  } else if (/^\\[A-Za-z_]/.test(i)) i = i.slice(1);
  if (r && (s === "'" || s === '"')) {
    let n = e.indexOf("["),
      o = e.indexOf(s, 1);
    if (n > 0 && o > n) i = i.replace(/\[[\s\S]*$/, "");
  }
  return ((i = i.replace(/\+$/, "")), G.test(i) || (t && ie.test(i)));
}
function se(e) {
  return e.type === "ansi_c_string" || e.children.some((t) => t !== void 0 && se(t));
}
function de(e) {
  return e.replace(/\$(['"])/g, "$1").replace(/["'\\]/g, "");
}
var Ht = new Set([
    "command_substitution",
    "process_substitution",
    "arithmetic_expansion",
    "expansion",
    "simple_expansion"
  ]),
  _e = "$_";
function Wt(e) {
  let t = [],
    r = (o) => {
      for (let u of o.children) {
        if (!u) continue;
        if (Ht.has(u.type)) t.push([u.startIndex - e.startIndex, u.endIndex - e.startIndex]);
        else r(u);
      }
    };
  if ((r(e), t.length === 0)) return e.text;
  t.sort((o, u) => o[0] - u[0]);
  let i = Buffer.from(e.text, "utf8"),
    s = "",
    n = 0;
  for (let [o, u] of t) {
    if (o < n || u > i.length) return e.text;
    ((s += i.subarray(n, o).toString("utf8") + _e), (n = u));
  }
  return s + i.subarray(n).toString("utf8");
}
function Je(e) {
  if (e.type === "expansion" && e.text.replace(/\$\(\(?|[<>]\(/g, "").includes("(")) return !0;
  return e.children.some((t) => t !== void 0 && Je(t));
}
function ae(e, t) {
  if (e.type === "number" || /^\d+$/.test(e.text)) return !0;
  let r = Wt(e);
  if (e.type !== "raw_string" && e.type !== "string" && re.test(Ve(r))) return !1;
  let i = /^['"]/.test(r) ? r.slice(1) : r,
    s = i.indexOf("="),
    n = (s < 0 ? i : i.slice(0, s)).replace(/\+$/, "");
  if (!(t ? /^[A-Za-z_][\w.:-]*['"]?$/ : /^[A-Za-z_]\w*['"]?$/).test(n)) return !1;
  if (s < 0) return !0;
  if (
    e.children.find((f, g) => f !== void 0 && g >= 2 && f.type !== "=" && f.type !== "+=")?.type ===
    "array"
  )
    return !0;
  if (se(e) || /\$'./.test(r)) return !1;
  if (Je(e)) return !1;
  let l = i.slice(s + 1);
  for (;;)
    if (/^[\\'"]/.test(l)) l = l.slice(1);
    else if (/^\$['"]/.test(l)) l = l.slice(2);
    else if (l.startsWith(_e)) l = l.slice(_e.length);
    else break;
  return !l.startsWith("(");
}
function M(e) {
  let t = 0,
    r = null,
    i = e[0] === "'" || e[0] === '"' ? e[0] : null;
  for (let s = i === null ? 0 : 1; s < e.length; s += 1) {
    let n = e[s];
    if (r !== null) {
      if (n === r) r = null;
    } else if ((n === "'" || n === '"') && n !== i) r = n;
    else if (n === "[") t += 1;
    else if (n === "]" && t > 0) t -= 1;
    else if (n === "=" && t === 0) return e.slice(0, s);
  }
  return e;
}
function et(e) {
  return e.children.some((t) => t !== void 0 && (t.type === "comment" || et(t)));
}
function Zt(e, t, r) {
  let i = t;
  while (i < r) {
    let s = e[i];
    if (s === 32 || s === 9) i += 1;
    else if (s === 92 && e[i + 1] === 10) i += 2;
    else return !1;
  }
  return !0;
}
function Y(e) {
  let t = e.children
      .map((s) => (s === void 0 ? "" : P(s.text)))
      .filter((s) => /^[-+]/.test(s))
      .join(""),
    i = /[iEF]/.test(t)
      ? /^[A-Za-z_][\w.-]*=(?:(['"]?)[0-9+\-*\/% ().]*\1|\([0-9+\-*\/% ().\s]*\))$/
      : /^[A-Za-z_][\w.-]*(?:\+?=(?:(['"]?)[\w.\/ -]*\1|\([\w\s.\/-]*\)))?$/;
  return e.children.every((s, n) => {
    if (!s || n === 0 || /^[-+]/.test(P(s.text))) return !0;
    return i.test(s.text);
  });
}
function P(e) {
  let t = /^\$?(['"])([-+][^'"]*)\1$/.exec(e);
  if (t) return t[2];
  return /^\\[-+]/.test(e) ? e.slice(1) : e;
}
var tt = new Set(["for_statement", "while_statement"]);
function Be(e) {
  return tt.has(e.type) && rf();
}
function Gt(e) {
  let t = kXn(e);
  if (t) return t;
  let r = [],
    i = new Map(),
    s = [],
    n = S(e, r, i, s);
  if (n) return n;
  let o = [...tt].some((u) => ce(e, u));
  return { kind: "simple", commands: r, bareAssignmentNames: s, hasLoop: o };
}
function Vt(e, t, r) {
  return !Buffer.from(e.text, "utf8")
    .subarray(t.endIndex - e.startIndex, r.startIndex - e.startIndex)
    .toString("utf8")
    .replace(/\\\r?\n/g, "").includes(`
`);
}
var qt = new Set([
    "command",
    "variable_assignment",
    "variable_assignments",
    "list",
    "pipeline",
    "redirected_statement",
    "negated_command",
    "declaration_command",
    "unset_command",
    "test_command",
    "subshell",
    "compound_statement",
    "if_statement",
    "while_statement",
    "for_statement",
    "case_statement",
    "function_definition",
    "ERROR"
  ]),
  Yt = new Set(["negated_command", "if_statement", "while_statement", "for_statement", "subshell"]);
function kXn(e) {
  let t = null;
  for (let r of e.children) {
    if (!r) continue;
    if (qt.has(r.type)) {
      if (t !== null) {
        let s = r;
        while ($e.has(s.type)) {
          let n = s.children.find((o) => o != null);
          if (!n) break;
          s = n;
        }
        if (Yt.has(s.type) && Vt(e, t, s))
          return {
            kind: "too-complex",
            reason:
              s.type === "subshell"
                ? "`(\u2026)` group directly follows a statement or word on the same line \u2014 bash rejects the line, but zsh reads the glued `(\u2026)` as a glob-group word and expands what follows it"
                : "statement directly follows another statement on the same line \u2014 bash reads the text as one command (`!` and shell keywords are plain words after an assignment), not two statements",
            differential: !0
          };
      }
      t = r;
    } else t = null;
    let i = kXn(r);
    if (i) return i;
  }
  return null;
}
function S(e, t, r, i, s = !1) {
  if (e.type === "command") {
    let n = an(e, [], t, r, i);
    if (n.kind !== "simple") return n;
    return (t.push(...n.commands), null);
  }
  if (e.type === "redirected_statement") return Xt(e, t, r, i, s);
  if (e.type === "comment") return null;
  if ($e.has(e.type)) {
    let n = e.type === "pipeline",
      o = t.length,
      u = !1;
    if (!n) {
      for (let c of e.children)
        if (c && (c.type === "||" || c.type === "&")) {
          u = !0;
          break;
        }
    }
    let l = u ? new Map(r) : null,
      f = n ? new Map(r) : r,
      g = null;
    for (let c of e.children) {
      if (!c) continue;
      if (te.has(c.type)) {
        if (c.type === "||" || c.type === "|" || c.type === "|&" || c.type === "&")
          if (c.type === "||") {
            g ??= new Set();
            for (let m of r.keys()) g.add(m);
            let h = l ?? r;
            f = new Map(h);
            for (let [m, y] of r) if (h.get(m) !== y) A(f, m);
            for (let m of h.keys()) if (!r.has(m)) A(f, m);
          } else f = new Map(l ?? r);
        else if (g !== null) {
          for (let h of g) A(r, h);
          ((g = null), (f = r));
        }
        continue;
      }
      let d = S(c, t, f, i, e.type === "program");
      if (d) return d;
    }
    if (g !== null) for (let c of g) A(r, c);
    if (n) {
      if ((V(r, f), t.length === o)) z(t, e);
    }
    return null;
  }
  if (e.type === "negated_command") {
    let n = t.length;
    for (let o of e.children) {
      if (!o) continue;
      if (o.type === "!") continue;
      let u = S(o, t, r, i);
      if (u) return u;
    }
    if (t.length === n) z(t, e);
    return null;
  }
  if (e.type === "declaration_command") {
    let n = t.length,
      o = e.children.some((m) => m !== null && Z(m)),
      u = (m, y) => {
        if (!o) return null;
        let p = r.get(m),
          x = n === 0 && !mi(y),
          b = p !== void 0 && !mi(p);
        return x || b
          ? oe(
              `'${m}' is assigned by a declaration carrying an expansion that can fail at runtime, which assigns nothing when it fails \u2014 its value cannot be statically verified`
            )
          : null;
      },
      l = C,
      f = new Map(r),
      g = !1,
      c = !1,
      d = [],
      h = -1;
    for (let m of e.children) {
      if (!m) continue;
      let y = m.startIndex === h;
      switch (((h = m.endIndex), m.type)) {
        case "export":
        case "local":
        case "readonly":
        case "declare":
        case "typeset":
          d.push(m.text);
          break;
        case "word":
        case "number":
        case "raw_string":
        case "string":
        case "concatenation": {
          if (y)
            return {
              kind: "too-complex",
              reason: `${d[0] ?? "declaration"} operand is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
              differential: !0
            };
          let p = O(m, t, f, i);
          if (typeof p !== "string") return p;
          if (/^[+-].*m/.test(p))
            return {
              kind: "too-complex",
              reason: `${d[0]} flag ${p} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
              nodeType: "declaration_command"
            };
          if (d[0] === "declare" || d[0] === "typeset" || d[0] === "local" || d[0] === "readonly") {
            if (/^[+-].*f/.test(p)) g = !0;
            if (/^[+-].*[uU]/.test(p)) c = !0;
            if (g && c)
              return {
                kind: "too-complex",
                reason: `${d[0]} with both -f and -u/-U flags \u2014 zsh marks a function for autoload (synonym of 'autoload'), creating a function from file contents at call time`,
                nodeType: "declaration_command"
              };
          }
          if ((d[0] === "declare" || d[0] === "typeset" || d[0] === "local") && Te.test(p))
            return {
              kind: "too-complex",
              reason: `declare flag ${p} changes assignment semantics (nameref/integer/float/array/width-truncation/case-conversion)`,
              ...(Y(e) ? { nodeType: "declaration_command" } : { differential: !0 })
            };
          if ((d[0] === "export" || d[0] === "readonly") && Oe(p) && !Y(e))
            return {
              kind: "too-complex",
              reason: `${d[0]} flag ${p} with an operand bash would evaluate as a compound array assignment`,
              differential: !0
            };
          if ((d[0] === "export" || d[0] === "readonly") && /^[+-].*[iluEFLRZ]/.test(p))
            return {
              kind: "too-complex",
              reason: `${d[0]} flag ${p} \u2014 zsh bin_typeset mathevals (-i/-E/-F), width-truncates (-L/-R/-Z), or case-converts (-l/-u) the assigned value`,
              ...(Y(e) ? { nodeType: "declaration_command" } : { differential: !0 })
            };
          if (/^[+-].*T/.test(p))
            return {
              kind: "too-complex",
              reason: `${d[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
              nodeType: "declaration_command"
            };
          if (
            (d[0] === "declare" || d[0] === "typeset" || d[0] === "local" || d[0] === "export") &&
            p[0] !== "-" &&
            /^[^=]*\[/.test(p)
          )
            return {
              kind: "too-complex",
              reason: `${d[0]} positional '${p}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`,
              differential: !0
            };
          if (
            (d[0] === "declare" || d[0] === "typeset" || d[0] === "local") &&
            !/^[-+]/.test(p) &&
            !ae(
              m,
              d.some((x) => /^[-+][A-Za-z]*[fF]/.test(x))
            )
          )
            return {
              kind: "too-complex",
              reason: `${d[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
              differential: !0
            };
          if (p[0] !== "-") {
            let x = p.indexOf("=");
            if (x > 0) {
              let b = p.slice(0, x);
              if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(b)) {
                let _ = b.endsWith("+"),
                  k = _ ? b.slice(0, -1) : b,
                  w = u(k, p.slice(x + 1));
                if (w) return w;
                (he(r, { name: k, value: p.slice(x + 1), isAppend: _ }, n > 0), i.push(k));
              }
            }
          }
          d.push(p);
          break;
        }
        case "variable_assignment": {
          if (
            (d[0] === "declare" || d[0] === "typeset" || d[0] === "local") &&
            !ae(
              m,
              d.some((b) => /^[-+][A-Za-z]*[fF]/.test(b))
            )
          )
            return {
              kind: "too-complex",
              reason: `${d[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
              differential: !0
            };
          let p = Ee(m, t, f, i);
          if ("kind" in p) return p;
          let x = u(p.name, p.value);
          if (x) return x;
          (he(r, p, n > 0), i.push(p.name), d.push(`${p.name}=${p.value}`));
          break;
        }
        case "variable_name": {
          let p = m.text;
          if (
            (d[0] === "declare" || d[0] === "typeset" || d[0] === "local" || d[0] === "export") &&
            p[0] !== "-" &&
            /^[^=]*\[/.test(p)
          )
            return {
              kind: "too-complex",
              reason: `${d[0]} positional '${p}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`,
              differential: !0
            };
          let x = d.some((b) => /^-[A-Za-z]*[fF]/.test(b));
          if (!G.test(p) && !(x && ie.test(p)))
            return {
              kind: "too-complex",
              reason: `${d[0]} operand '${p}' is not a plain variable name \u2014 the shell may turn it into an assignment the parser did not see`,
              differential: !0
            };
          d.push(p);
          break;
        }
        case "ansi_c_string":
          return {
            kind: "too-complex",
            reason: `${d[0] ?? "declaration"} operand ${m.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
            differential: !0
          };
        default:
          return R(m);
      }
    }
    return (
      t.push({
        argv: d,
        envVars: [],
        redirects: [],
        text: e.text,
        hasUnquotedGlob: I(e.text),
        carveOutMayDesyncQuoteScan: C !== l
      }),
      null
    );
  }
  if (e.type === "variable_assignment") {
    let n = t.length,
      o = Ee(e, t, r, i);
    if ("kind" in o) return o;
    if (het(o.name))
      return {
        kind: "too-complex",
        reason: `${o.name} assignment alters command lookup/execution for subsequent commands`,
        nodeType: "variable_assignment"
      };
    if (yt(o.name, o.value))
      return {
        kind: "too-complex",
        reason: `${o.name} has integer attribute \u2014 assignment arith-evals RHS, which can execute subscript command substitution or abort/diverge at runtime`,
        nodeType: "variable_assignment"
      };
    if ((he(r, o, n > 0), i.push(o.name), t.length === n && (Z(e) || Le.has(o.name)))) z(t, e);
    return null;
  }
  if (e.type === "for_statement") {
    if (Be(e)) return R(e);
    let n = null,
      o = null,
      u = t.length,
      l = !1;
    for (let c of e.children) {
      if (!c) continue;
      if (c.type === "variable_name") n = c.text;
      else if (c.type === "do_group") o = c;
      else if (c.type === "select")
        return {
          kind: "too-complex",
          reason: "select statement reads stdin into $REPLY; cannot statically model",
          nodeType: "for_statement"
        };
      else if (c.type === "for" || c.type === "in" || c.type === ";") continue;
      else if (c.type === "command_substitution") {
        let d = Pe(c, t, r, i);
        if (d) return d;
      } else {
        let d = O(c, t, r, i);
        if (typeof d !== "string") return d;
        if (Z(c)) l = !0;
        else if ((I(c.text) || le(c)) && sii()) l = !0;
      }
    }
    if (n === null || o === null) return R(e);
    if (
      n === "PS4" ||
      n === "IFS" ||
      Le.has(n) ||
      n === "BASH_ARGV0" ||
      het(n) ||
      Zbt.has(n) ||
      me.has(n) ||
      Fpn.has(n)
    )
      return {
        kind: "too-complex",
        reason: `${n} as loop variable bypasses assignment validation`,
        nodeType: "for_statement"
      };
    let f = r.get(n);
    if (f !== void 0 && !mi(f))
      return {
        kind: "too-complex",
        reason: `for-loop variable '${n}' would overwrite tracked literal ${JSON.stringify(f.slice(0, 40))}; post-loop value cannot be statically determined`,
        nodeType: "for_statement"
      };
    (r.delete(n), i.push(n));
    let g = new Map(r);
    (pe(g, o), g.delete(n));
    for (let c of o.children) {
      if (!c) continue;
      if (c.type === "do" || c.type === "done" || c.type === ";") continue;
      let d = S(c, t, g, i);
      if (d) return d;
    }
    if ((V(r, g), l && t.length === u)) z(t, e);
    return null;
  }
  if (e.type === "if_statement" || e.type === "while_statement") {
    if (Be(e)) return R(e);
    let n = null,
      o = null;
    if (e.type === "while_statement") ((n = new Set(r.keys())), (o = new Map(r)), pe(r, e));
    let u = !1;
    for (let l of e.children) {
      if (!l) continue;
      if (
        l.type === "if" ||
        l.type === "fi" ||
        l.type === "else" ||
        l.type === "elif" ||
        l.type === "while" ||
        l.type === "until" ||
        l.type === ";"
      )
        continue;
      if (l.type === "then") {
        u = !0;
        continue;
      }
      if (l.type === "do_group") {
        let d = new Map(r);
        pe(d, l);
        for (let h of l.children) {
          if (!h) continue;
          if (h.type === "do" || h.type === "done" || h.type === ";") continue;
          let m = S(h, t, d, i);
          if (m) return m;
        }
        V(r, d);
        continue;
      }
      if (l.type === "elif_clause" || l.type === "else_clause") {
        let d = new Map(r);
        for (let h of l.children) {
          if (!h) continue;
          if (h.type === "elif" || h.type === "else" || h.type === "then" || h.type === ";")
            continue;
          let m = S(h, t, d, i);
          if (m) return m;
        }
        V(r, d);
        continue;
      }
      let f = new Map(r),
        g = t.length,
        c = S(l, t, f, i);
      if (c) return c;
      if (!u) {
        for (let [d, h] of f) {
          let m = (o ?? r).get(d);
          if (m !== void 0 && !mi(m) && h !== m)
            return {
              kind: "too-complex",
              reason: `'${d}' was tracked as literal '${m}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`,
              nodeType: e.type
            };
          if (m?.includes(L) === !0 && h !== m) {
            r.set(d, m);
            continue;
          }
          r.set(d, h);
        }
        for (let d of r.keys())
          if (!f.has(d)) {
            let h = (o ?? r).get(d);
            if (h !== void 0 && !mi(h))
              return {
                kind: "too-complex",
                reason: `'${d}' was tracked as literal '${h}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`,
                nodeType: e.type
              };
            A(r, d);
          }
        for (let d = g; d < t.length; d++) {
          let h = t[d];
          if (h?.argv[0] === "read") {
            for (let y of h.argv.slice(1))
              if (!y.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(y)) {
                let p = r.get(y);
                if (p !== void 0 && !mi(p))
                  return {
                    kind: "too-complex",
                    reason: `'read ${y}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${p}'`,
                    nodeType: e.type
                  };
                A(r, y);
              }
            let m = r.get("REPLY");
            if (m !== void 0 && !mi(m))
              return {
                kind: "too-complex",
                reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${m}'`,
                nodeType: e.type
              };
            A(r, "REPLY");
          }
        }
      } else V(r, f);
    }
    if (n !== null) {
      for (let l of [...r.keys()]) if (!n.has(l)) r.delete(l);
    }
    return null;
  }
  if (e.type === "subshell") {
    let n = new Map(r),
      o = t.length,
      u = !1;
    for (let l of e.children) {
      if (!l) continue;
      if (l.type === "(" || l.type === ")") continue;
      if (l.type !== "comment") u = !0;
      let f = S(l, t, n, i);
      if (f) return f;
    }
    if (u && t.length === o) z(t, e);
    return null;
  }
  if (e.type === "test_command") {
    let n = e.children.some((f) => f?.type === "[["),
      o = rt(e, n);
    if (o) return o;
    let u = ["[["],
      l = C;
    for (let f of e.children) {
      if (!f) continue;
      if (f.type === "[[" || f.type === "]]" || f.type === "[" || f.type === "]") continue;
      let g = it(f, u, t, r, i, n);
      if (g) return g;
    }
    return (
      t.push({
        argv: u,
        envVars: [],
        redirects: [],
        text: e.text,
        hasUnquotedGlob: I(e.text),
        carveOutMayDesyncQuoteScan: C !== l
      }),
      null
    );
  }
  if (e.type === "unset_command") {
    let n = [],
      o = C,
      u = t.length > 0,
      l = !1,
      f = !1,
      g = !1;
    for (let c of e.children) {
      if (!c) continue;
      switch (c.type) {
        case "unset":
          (n.push(c.text), (g = c.text === "unsetenv"));
          break;
        case "variable_name":
          if (!G.test(c.text) && !(l && ie.test(c.text)))
            return {
              kind: "too-complex",
              reason: `${n[0] ?? "unset"} operand '${c.text}' is not a plain variable name \u2014 the shell may expand or evaluate it`,
              differential: !0
            };
          if ((n.push(c.text), (f = !0), l || g)) {
            let d = r.get(c.text);
            if (d !== void 0 && mi(d))
              return {
                kind: "too-complex",
                reason: `'${c.text}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
                nodeType: "unset_command"
              };
            break;
          }
          if (NY(c.text))
            return {
              kind: "too-complex",
              reason: `'unset' targets shell variable ${c.text} (exec-influencing / integer-attr / IFS / PS4)`,
              nodeType: "unset_command"
            };
          be(r, c.text, u);
          break;
        case "word": {
          let d = O(c, t, r, i);
          if (typeof d !== "string") return d;
          if (d.startsWith("-")) {
            if (f) return R(c);
            if (d !== "-f" && d !== "-v") return R(c);
            if (d === "-f") l = !0;
            n.push(d);
            break;
          }
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(d)) return R(c);
          if ((n.push(d), (f = !0), l || g)) {
            let h = r.get(d);
            if (h !== void 0 && mi(h))
              return {
                kind: "too-complex",
                reason: `'${d}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
                nodeType: "unset_command"
              };
            break;
          }
          if (NY(d))
            return {
              kind: "too-complex",
              reason: `'unset' targets shell variable ${d} (exec-influencing / integer-attr / IFS / PS4)`,
              nodeType: "unset_command"
            };
          be(r, d, u);
          break;
        }
        case "ansi_c_string":
        case "raw_string":
        case "string":
        case "concatenation":
          if (/\[/.test(c.text) || c.type === "ansi_c_string")
            return {
              kind: "too-complex",
              reason: `${n[0] ?? "unset"} operand ${c.text} carries a subscript \u2014 bash and zsh evaluate $(cmd) inside it`,
              differential: !0
            };
          return R(c);
        default:
          return R(c);
      }
    }
    return (
      t.push({
        argv: n,
        envVars: [],
        redirects: [],
        text: e.text,
        hasUnquotedGlob: I(e.text),
        carveOutMayDesyncQuoteScan: C !== o
      }),
      null
    );
  }
  return R(e);
}
var nt = new Set([
  "unary_expression",
  "binary_expression",
  "negated_expression",
  "parenthesized_expression"
]);
function Ue(e, t) {
  let r = 0;
  while (r < e.length) {
    let i = e[r];
    if (i === " " || i === "\t") {
      r++;
      continue;
    }
    if (
      i === "\\" &&
      e[r + 1] ===
        `
`
    ) {
      r += 2;
      continue;
    }
    if (
      t &&
      i ===
        `
`
    ) {
      r++;
      continue;
    }
    if (t && i === "#") {
      r++;
      while (
        r < e.length &&
        e[r] !==
          `
`
      )
        r++;
      continue;
    }
    return !1;
  }
  return !0;
}
function rt(e, t) {
  let r = Buffer.from(e.text, "utf8"),
    i = e.startIndex;
  for (let s of e.children) {
    if (!s) continue;
    if (s.startIndex > i) {
      let n = r.subarray(i - e.startIndex, s.startIndex - e.startIndex).toString("utf8");
      if (!Ue(n, t))
        return {
          kind: "too-complex",
          reason:
            "Test command has unparsed bytes between children \u2014 parser dropped content that shell will see"
        };
    }
    if (((i = Math.max(i, s.endIndex)), nt.has(s.type))) {
      let n = rt(s, t);
      if (n) return n;
    }
  }
  if (i < e.endIndex) {
    let s = r.subarray(i - e.startIndex).toString("utf8");
    if (!Ue(s, t))
      return {
        kind: "too-complex",
        reason:
          "Test command has unparsed bytes after its last child \u2014 parser dropped content that shell will see"
      };
  }
  return null;
}
function jt(e) {
  let t = !1,
    r = !1,
    i = !1,
    s = 0,
    n;
  for (let o = 0; o < e.length; o++) {
    let u = e[o];
    if (!t && u === "\\") {
      o++;
      continue;
    }
    if (!r && u === "'") {
      t = !t;
      continue;
    }
    if (!t && u === '"') {
      r = !r;
      continue;
    }
    if (!t && !r) {
      if (u === "=" && e[o + 1] === "(" && (i || o === 0 || n === "|")) return !0;
      if (u === "(") s++;
      else if (u === ")") s = Math.max(0, s - 1);
      else if (s === 0 && (u === "|" || u === "&") && n === u) i = !0;
      n = u;
    }
  }
  return !1;
}
function $pn(e) {
  let t = e.replace(/\[(?::[a-zA-Z]+:|=[A-Za-z0-9-]*=|\.[A-Za-z0-9-]*\.|[!^]?)\]\](?!\])/g, "\x00"),
    r = /[A-Za-z0-9_]/,
    i = t.indexOf("]]");
  while (i !== -1) {
    let s = i > 0 ? t[i - 1] : "",
      n = i + 2 < t.length ? t[i + 2] : "";
    if (!(r.test(s) && r.test(n))) return !0;
    i = t.indexOf("]]", i + 1);
  }
  return !1;
}
var Kt = /^([\w\u0080-\uffff]*|[-?*@!#])(\[|:[a-zA-Z&])/,
  rjr = /^([\w\u0080-\uffff]*|[-?*@!#$])(\[|:[a-zA-Z&])/;
function it(e, t, r, i, s, n) {
  if (nt.has(e.type)) {
    for (let o = 0; o < e.children.length; o++) {
      let u = e.children[o];
      if (!u) continue;
      if (
        (u.type === "simple_expansion" || u.type === "expansion") &&
        (e.children[o + 1]?.text.startsWith("[") ||
          /^:[a-zA-Z&]/.test(e.children[o + 1]?.text ?? "") ||
          (u.children.some((f) => f?.type === "special_variable_name") &&
            rjr.test(e.children[o + 1]?.text ?? "")))
      )
        return {
          kind: "too-complex",
          reason: "zsh $name[expr] / $name:mod in [[ ]] operand \u2014 recursive eval",
          differential: !0
        };
      if (n && u.type === "!" && e.children[o + 1]?.startIndex === u.endIndex)
        return {
          kind: "too-complex",
          reason: "zsh reads !( in [[ ]] as part of a word",
          differential: !0
        };
      let l = it(u, t, r, i, s, n);
      if (l) return l;
    }
    return null;
  }
  switch (e.type) {
    case "test_operator":
    case "!":
    case "(":
    case ")":
    case "&&":
    case "||":
    case "==":
    case "=":
    case "!=":
    case "<":
    case ">":
    case "=~":
      return (t.push(e.text), null);
    case "regex":
    case "extglob_pattern":
      if (/\$([({[\w#?!*@$'"+~^=-]|[\u0080-\uffff])|`|[<>]\(/.test(e.text))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains expansion / command / process substitution`,
          differential: !0
        };
      if (e.text.startsWith("=("))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains zsh =(CMD) process substitution`,
          differential: !0
        };
      if (e.type === "regex" && jt(e.text))
        return {
          kind: "too-complex",
          reason: `[[ ]] ${e.type} contains zsh =(CMD) process substitution`,
          differential: !0
        };
      if (e.type === "extglob_pattern") {
        let o = e.text,
          u = 0;
        while (u < o.length) {
          if (o[u] === "\\" && u + 1 < o.length) {
            u += 2;
            continue;
          }
          if (o[u] === "&")
            return {
              kind: "too-complex",
              reason: "[[ ]] pattern contains unquoted & (zsh splits the word at & at any depth)",
              differential: !0
            };
          u++;
        }
      }
      if (e.type === "regex") {
        let o = e.text,
          u = 0,
          l = 0;
        while (l < o.length) {
          let f = o[l];
          if (f === "\\" && l + 1 < o.length) {
            l += 2;
            continue;
          }
          if (u === 0 && f === "|" && o[l + 1] === f)
            return {
              kind: "too-complex",
              reason: "[[ ]] regex contains glued || (zsh splits it as a cond operator)",
              differential: !0
            };
          if (f === "&")
            return {
              kind: "too-complex",
              reason: "[[ ]] regex contains unquoted & (zsh splits the word at & at any depth)",
              differential: !0
            };
          if (f === '"' || f === "'") {
            let g = f;
            l++;
            while (l < o.length && o[l] !== g) {
              if (g === '"' && o[l] === "\\" && l + 1 < o.length) l++;
              l++;
            }
            if (l < o.length) l++;
            continue;
          }
          if (f === "(") u++;
          else if (f === ")") {
            if ((u--, u < 0))
              return {
                kind: "too-complex",
                reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
                differential: !0
              };
          }
          l++;
        }
        if (u !== 0)
          return {
            kind: "too-complex",
            reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
            differential: !0
          };
      }
      if (e.text.includes("&&"))
        return {
          kind: "too-complex",
          reason:
            "[[ ]] pattern leaf contains `&&` \u2014 shell cond-lexer divergence (zsh splits the word there)",
          differential: !0
        };
      if ($pn(e.text))
        return {
          kind: "too-complex",
          reason:
            "[[ ]] pattern leaf contains a potential standalone `]]` closer \u2014 shell cond-lexer divergence (zsh may close the conditional early)",
          differential: !0
        };
      return (t.push(e.text), null);
    case "test_rhs_missing":
      return {
        kind: "too-complex",
        reason:
          "Test command comparison is missing its right-hand side \u2014 parser dropped consumed bytes"
      };
    default: {
      let o = O(e, r, i, s);
      if (typeof o !== "string") {
        if (n && o.kind === "too-complex") {
          let { nodeType: u, ...l } = o;
          return { ...l, differential: !0 };
        }
        return o;
      }
      if ((n && ($pn(o) || $pn(e.text))) || /]].*[;\n&|<>]/s.test(o))
        return {
          kind: "too-complex",
          reason: n
            ? "[[ ]] quoted operand contains `]]` closer or `]]`+separator bytes \u2014 possible parser quote-state desync"
            : "test command quoted operand contains `]]`+separator bytes \u2014 possible parser quote-state desync",
          differential: !0
        };
      return (t.push(o), null);
    }
  }
}
function st(e) {
  let t = null;
  for (let r of e.children) {
    if (!r || r.type === "!" || r.type === "comment" || te.has(r.type)) continue;
    t = r;
  }
  if (!t) return null;
  if (t.type === "list" || t.type === "negated_command") return st(t);
  if (!Ge.has(t.type) && !Et.has(t.type)) return t;
  return null;
}
function A(e, t) {
  if (e.get(t)?.includes(L)) return;
  e.set(t, v);
}
function be(e, t, r) {
  e.set(t, r ? L : "");
}
function at(e, t) {
  for (let [r, i] of e)
    if (t.get(r) !== i) {
      if (W.get(r) === i) F = !0;
      e.set(r, L);
    }
  for (let r of t.keys()) if (!e.has(r)) e.set(r, L);
}
function Xt(e, t, r, i, s) {
  let n = [],
    o = null,
    u = [],
    l = [];
  for (let y of e.children) {
    if (!y) continue;
    if (y.type === "file_redirect") u.push(y);
    else if (y.type === "heredoc_redirect") l.push(y);
    else if (Ge.has(y.type)) {
      if (y.type === "list" || y.type === "negated_command") {
        let p = st(y);
        if (p) return R(p);
      }
      o = y;
    } else return R(y);
  }
  if (!o) {
    for (let y of u) {
      let p = ke(y, t, r, i);
      if ("kind" in p) return p;
      n.push(p);
    }
    for (let y of l) {
      let p = we(y, r);
      if (p) return p;
    }
    return (
      t.push({ argv: [], envVars: [], redirects: n, text: e.text, hasUnquotedGlob: I(e.text) }),
      null
    );
  }
  let f = t.length,
    g =
      B && s && o.type === "command" && u.length === 0 && l.length === 1
        ? l[0]?.children.find((y) => y?.type === "pipeline")
        : void 0,
    c,
    d = !1;
  if (o.type === "list") {
    let y = o.children;
    if (y.length === 3 && y[0] && y[1]?.type === "&&" && y[2]) {
      let p = S(y[0], t, r, i);
      if (p) return p;
      ((c = new Map(r)), (d = !0));
      let x = S(y[2], t, r, i);
      if (x) return x;
    } else {
      let p = S(o, t, r, i);
      if (p) return p;
      c = r;
    }
  } else if ($e.has(o.type)) {
    let y = S(o, t, r, i);
    if (y) return y;
    c = r;
  } else {
    ((c = new Map(r)), (d = !0));
    let y = S(o, t, g ? new Map(r) : r, i);
    if (y) return y;
  }
  if (d) at(r, c);
  let m = (t.length > f ? t.at(-1) : void 0)?.envVars[0]?.name;
  if (m !== void 0 && u.some((y) => Z(y))) {
    let y = J(m);
    if (y) return y;
  }
  for (let y of u) {
    let p = ke(y, t, c, i);
    if ("kind" in p) return p;
    n.push(p);
  }
  for (let y of l) {
    let p = we(y, c, g);
    if (p) return p;
  }
  if (g) {
    let y = S(g, t, r, i);
    if (y) return y;
  }
  if (l.length > 0)
    for (let y = f; y < t.length; y++) {
      let p = t[y];
      if (p) p.argvSourceLiteral = !1;
    }
  if (n.length > 0)
    if (t.length > f) {
      let y = t.at(-1);
      if (y) y.redirects.push(...n);
    } else
      t.push({ argv: [], envVars: [], redirects: n, text: e.text, hasUnquotedGlob: I(e.text) });
  return null;
}
function ot(e) {
  {
    let i = e.startIndex;
    for (let s of e.children) {
      if (!s) continue;
      if (s.startIndex > i) {
        let n = Buffer.from(e.text, "utf8")
          .subarray(i - e.startIndex, s.startIndex - e.startIndex)
          .toString("utf8");
        if (!/^(?:[ \t]|\\\n)*$/.test(n))
          return {
            kind: "too-complex",
            reason:
              "Redirect has unparsed bytes between children \u2014 parser dropped content that shell will see"
          };
      }
      i = s.endIndex;
    }
    if (i < e.endIndex) {
      let s = Buffer.from(e.text, "utf8")
        .subarray(i - e.startIndex)
        .toString("utf8");
      if (!/^(?:[ \t]|\\\n)*$/.test(s))
        return {
          kind: "too-complex",
          reason:
            "Redirect has unparsed trailing bytes \u2014 parser dropped content that shell will see"
        };
    }
  }
  let t = null,
    r = 0;
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses ${i.text} fd-variable assignment \u2014 modifies shell variable as side effect`
      };
    if (i.type === "file_descriptor") continue;
    if (i.type === ">&-" || i.type === "<&-") {
      t = i.type;
      continue;
    }
    if (i.type in ge) {
      t = i.type;
      continue;
    }
    if ((t === ">&" || t === "<&") && i.text.startsWith("-"))
      return {
        kind: "too-complex",
        reason:
          "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
      };
    if (t === ">&-" || t === "<&-")
      return {
        kind: "too-complex",
        reason:
          "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument"
      };
    (r++, (t = null));
  }
  if (r > 1)
    return {
      kind: "too-complex",
      reason: "Redirect has multiple targets \u2014 post-redirect args swallowed"
    };
  return null;
}
var lt = new Set(["heredoc_start", "heredoc_body", "<<", "<<-", "heredoc_end", "file_descriptor"]),
  ct = new Set(["file_redirect", "pipeline"]),
  Qt = /^\{(?:\w|[^\x00-\x7F])+(\[.*\])?\}$/su;
function Ne(e) {
  let t = /^\{((?:\w|[^\x00-\x7F])+)/u.exec(e)?.[1];
  if (t === void 0) return "{\u2026}";
  let r = /^\w{1,64}$/.test(t) ? t : "\u2026";
  return e[t.length + 1] === "[" ? `{${r}[\u2026]}` : `{${r}}`;
}
function ut(e, t) {
  let r = t[e.startIndex] === 123 ? Qt.exec(e.text) : null;
  if (r) {
    let i = e.endIndex,
      s = !1;
    for (;;) {
      let l = t[i];
      if (l === 32 || l === 9) ((s = !0), i++);
      else if (l === 92 && t[i + 1] === 10) i += 2;
      else break;
    }
    let n = t[i],
      o = t[i + 1];
    if ((((n === 62 || n === 60) && o !== 40) || (n === 38 && o === 62)) && !(s && r[1] !== void 0))
      return e.text;
  }
  for (let i of e.children)
    if (i) {
      let s = ut(i, t);
      if (s !== null) return s;
    }
  return null;
}
function ft(e) {
  if (e.type === "file_redirect") {
    let t = ot(e);
    if (t) return t;
  }
  if (e.type === "herestring_redirect" || e.type === "heredoc_redirect") {
    for (let t of e.children)
      if (t?.type === "variable_name")
        return {
          kind: "too-complex",
          reason: `Redirect uses ${Ne(t.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
        };
    if (e.type === "heredoc_redirect") {
      for (let t of e.children)
        if (t && !lt.has(t.type) && !ct.has(t.type))
          return {
            kind: "too-complex",
            reason: "Text after the heredoc start on the same line cannot be statically analyzed"
          };
    }
  }
  for (let t of e.children)
    if (t) {
      let r = ft(t);
      if (r) return r;
    }
  return null;
}
function ke(e, t, r, i) {
  let s = N,
    n = ne,
    o = null,
    u = null,
    l;
  {
    let f = ot(e);
    if (f) return f;
  }
  for (let f of e.children) {
    if (!f) continue;
    if (f.type === "file_descriptor") l = Number(f.text);
    else if (f.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses ${f.text} fd-variable assignment \u2014 modifies shell variable as side effect`
      };
    else if (f.type in ge) o = ge[f.type] ?? null;
    else if (f.type === ">&-" || f.type === "<&-") {
      if (e.children.some((g) => g !== f && g?.type !== "file_descriptor"))
        return {
          kind: "too-complex",
          reason:
            "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument"
        };
      return R(f);
    } else if (u !== null)
      return {
        kind: "too-complex",
        reason: "Redirect has multiple targets \u2014 post-redirect args swallowed"
      };
    else if ((o === ">&" || o === "<&") && f.text.startsWith("-"))
      return {
        kind: "too-complex",
        reason:
          "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
      };
    else if (f.type === "word" || f.type === "number") {
      if (f.children.length > 0) return R(f);
      if (re.test(f.text)) return R(f);
      if (xe.test(f.text)) return R(f);
      if (ye.test(f.text)) return R(f);
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text)) return R(f);
      u = f.text.replace(/\\([\s\S])/g, (g, c) =>
        c ===
        `
`
          ? ""
          : c
      );
    } else if (f.type === "raw_string") u = ht(f.text);
    else if (f.type === "string") {
      let g = pt(f, t, r, i);
      if (typeof g !== "string") return g;
      u = g;
    } else if (f.type === "concatenation") {
      let g = O(f, t, r, i);
      if (typeof g !== "string") return g;
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text))
        return {
          kind: "too-complex",
          reason:
            "Redirect target concatenation contains $/` \u2014 unanalyzable gap or substitution",
          nodeType: "concatenation"
        };
      u = g;
    } else return R(f);
  }
  if (!o || u === null) return { kind: "too-complex", reason: "Unrecognized redirect shape" };
  if (mi(u))
    return {
      kind: "too-complex",
      reason: "Redirect target contains $(cmd) output \u2014 path is runtime-determined",
      nodeType: e.type
    };
  if (
    u.includes(`
`)
  )
    return {
      kind: "too-complex",
      reason: "Redirect target contains newline \u2014 potential path traversal",
      nodeType: e.type
    };
  if (u.startsWith("!"))
    return {
      kind: "too-complex",
      reason: "Redirect target starts with ! \u2014 zsh clobber or history expansion",
      nodeType: e.type
    };
  if (u.startsWith("="))
    return {
      kind: "too-complex",
      reason: "Redirect target starts with = \u2014 zsh expands to PATH binary",
      nodeType: e.type
    };
  if ((o === ">&" || o === "<&") && u.startsWith("-"))
    return {
      kind: "too-complex",
      reason:
        "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
    };
  if (o === ">&" && !/^[A-Za-z0-9./_-]+$/.test(u))
    return {
      kind: "too-complex",
      reason:
        "bash `>&` applies a second word-expansion pass to its target \u2014 path cannot be statically validated",
      nodeType: e.type
    };
  return { op: o, target: u, fd: l, targetSourceLiteral: N === s && ne === n };
}
var B = !1,
  Q = !1,
  D,
  U = 0,
  H,
  W = new Map(),
  F = !1;
function oe(e) {
  return Q ? null : { kind: "too-complex", reason: e, divergentShape: !0 };
}
function J(e) {
  return oe(
    `'${e}' is set for one command that carries an expansion which can fail at runtime \u2014 whether the assignment stands for later commands cannot be statically verified`
  );
}
function Jt() {
  return H;
}
function en() {
  return U;
}
var tn = /`|\\[$`\\\n]/,
  He = G.source.slice(1, -1),
  nn = new RegExp(`\\$(?:${He}(?![A-Za-z0-9_\\u0080-\\uffff])|\\{${He}\\})(?!\\[|:[A-Za-z&])`, "g");
function we(e, t, r) {
  let i = null,
    s = null,
    n = null,
    o = !1;
  for (let l of e.children) {
    if (!l) continue;
    if (lt.has(l.type)) {
      if (l.type === "heredoc_start") i = l.text;
      else if (l.type === "heredoc_body") n = l;
      else if (l.type === "<<-") o = !0;
      else if (l.type === "heredoc_end") s = l.text;
    } else if (
      l === r &&
      l.children.at(-1)?.type === "command" &&
      l.children.every(
        (f) =>
          f?.type === "|" ||
          (f?.type === "command" && !f.children.some((g) => g?.type.endsWith("_redirect")))
      )
    )
      ;
    else if (ct.has(l.type)) {
      let f = R(l);
      return f.kind === "too-complex" ? { ...f, afterHeredocDelimiter: !0 } : f;
    } else
      return {
        kind: "too-complex",
        reason: "Text after the heredoc start on the same line cannot be statically analyzed"
      };
  }
  if (n === null)
    return {
      kind: "too-complex",
      reason: "Heredoc body was not scanned by the parser",
      nodeType: "heredoc_redirect"
    };
  if (r) {
    let l = Buffer.from(e.text, "utf8")
        .subarray(0, n.startIndex - e.startIndex)
        .toString("utf8"),
      f = e.children
        .slice(0, e.children.indexOf(n))
        .map((g) => (g === r ? "|" : "") + (g?.text ?? ""))
        .join("");
    if (
      l.indexOf(`
`) !==
        l.length - 1 ||
      l.includes("\\") ||
      l.replace(/[ \t\n]/g, "") !== f.replace(/[ \t]/g, "")
    )
      return {
        kind: "too-complex",
        reason: "More than a pipeline follows the heredoc delimiter on its line"
      };
  }
  let u =
    i !== null &&
    ((i.startsWith("'") && i.endsWith("'")) ||
      (i.startsWith('"') && i.endsWith('"')) ||
      i.startsWith("\\"));
  if (!u) {
    let l = n.children.filter((g) => g?.type !== "heredoc_content");
    if (!(
      B &&
      t !== void 0 &&
      i !== null &&
      G.test(i) &&
      s === i &&
      !tn.test(n.text) &&
      (n.text.match(/\$/g)?.length ?? 0) === l.length &&
      (n.text.match(nn)?.length ?? 0) === l.length &&
      l.every(
        (g) => (
          N++,
          (g?.type === "simple_expansion" || g?.type === "expansion") &&
            typeof j(g, t, !0) === "string"
        )
      )
    ))
      return {
        kind: "too-complex",
        reason: "Heredoc with unquoted delimiter undergoes shell expansion",
        nodeType: "heredoc_redirect",
        differential: !0
      };
  }
  if (i !== null && (i.startsWith("'") || i.startsWith('"')) && i.slice(1, -1).includes("\\"))
    return {
      kind: "too-complex",
      reason: "Quoted heredoc delimiter contains backslash",
      nodeType: "heredoc_redirect"
    };
  if (u)
    for (let l of n.children) {
      if (!l) continue;
      if (l.type !== "heredoc_content") return R(l);
    }
  if (i !== null && n !== null) {
    let l = !u ? i : i.startsWith("\\") ? i.slice(1) : i.slice(1, -1);
    if (l.length > 0) {
      if (o && l.startsWith("\t"))
        return {
          kind: "too-complex",
          reason: "Heredoc uses <<- with a tab-prefixed delimiter",
          nodeType: "heredoc_redirect"
        };
      for (let f of n.text.split(`
`)) {
        let g = o ? f.replace(/^\t+/, "") : f;
        if (!g.startsWith(l)) continue;
        let c = g.slice(l.length);
        if (/[)`}]/.test(c))
          return {
            kind: "too-complex",
            reason:
              "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator",
            nodeType: "heredoc_redirect"
          };
      }
    }
  }
  return null;
}
function rn(e, t, r, i) {
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "<<<") continue;
    if (s.type === "variable_name")
      return {
        kind: "too-complex",
        reason: `Redirect uses ${Ne(s.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
      };
    let n = O(s, t, r, i);
    if (typeof n !== "string") return n;
    if (ee.test(n)) return R(s);
  }
  return null;
}
var Re = new Set(["command", "builtin", "noglob", "nocorrect", "time"]),
  ve = new Set(["declare", "typeset", "local", "export", "readonly"]),
  dt = new Set([...ve, "integer", "float", "private"]),
  TXn = new Set([
    ":",
    "break",
    "continue",
    "return",
    "exit",
    "shift",
    "times",
    "set",
    "export",
    "readonly",
    "unset"
  ]);
function sn(e, t, r, i, s, n) {
  let o = [],
    u = [],
    l = (p, x = !0) => {
      let b = p.match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (b) {
        if ((o.push(b[0]), x)) u.push(b[0]);
      }
    },
    f = e,
    g = !1,
    c,
    d = [];
  for (;;) {
    let p = f[0];
    if (p === void 0) break;
    if (Re.has(p)) {
      if ((c === "builtin" || c === "command") && p !== "builtin" && p !== "command") {
        if (p === "noglob" && !g)
          return {
            kind: "too-complex",
            reason: `'${c} noglob' runs the wrapped command on zsh (for 'command', under POSIX_BUILTINS) but not bash \u2014 cannot statically model whether it executes`,
            nodeType: "command"
          };
        g = !0;
      }
      let x = 1;
      while (x < f.length && /^-[-pvV]*$/.test(f[x])) {
        if (/[vV]/.test(f[x])) g = !0;
        x++;
      }
      ((f = f.slice(x)), (c = p));
    } else if (p === "!") {
      if (c === "builtin" || c === "command") g = !0;
      ((f = f.slice(1)), (c = void 0));
    } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(p)) {
      let x = o.length;
      (l(p),
        d.push({ word: p, target: o.length > x ? x : void 0 }),
        (f = f.slice(1)),
        (c = void 0));
    } else break;
  }
  let h = f[0];
  if (h === void 0) for (let p of t) l(p.name);
  else if (ve.has(h)) {
    let p = !1;
    for (let x = 1; x < f.length; x++) {
      let b = f[x];
      if (!p && b === "--") {
        p = !0;
        continue;
      }
      if (!p && /^[+-].*m/.test(b))
        return {
          kind: "too-complex",
          reason: `'${h} ${b}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
          nodeType: "command"
        };
      if (!p && b.startsWith("-")) continue;
      if (b.includes("=")) l(b);
    }
  } else if (h === "read") {
    let p = 1,
      x = !1,
      b = !1;
    while (p < f.length) {
      let _ = f[p];
      if (!x && _ === "--") {
        ((x = !0), p++);
        continue;
      }
      if (!x && _.startsWith("-")) {
        if (T2e.has(_)) {
          p += 2;
          continue;
        }
        let k = !1;
        for (let w = 1; w < _.length; w++) {
          let E = _[w];
          if (E === "a" || E === "A") {
            let T = w < _.length - 1 ? _.slice(w + 1) : f[p + 1];
            if (T) (l(T), (b = !0));
            k = w === _.length - 1;
            break;
          }
          if (T2e.has("-" + E)) {
            k = w === _.length - 1;
            break;
          }
        }
        p += k ? 2 : 1;
        continue;
      }
      (l(_), (b = !0), p++);
    }
    if (!b) o.push("REPLY");
  } else if (h === "printf")
    for (let p = 1; p < f.length; p++) {
      let x = f[p];
      if (x === "--" || !x.startsWith("-")) break;
      if (x === "-v") {
        if (f[p + 1]) l(f[p + 1]);
        p++;
        continue;
      }
      if (x.startsWith("-v")) l(x.slice(2));
    }
  else if (h === "getopts") {
    let p = f[1] === "--" ? 1 : 0;
    if (f[2 + p]) l(f[2 + p]);
    (o.push("OPTARG"), A(r, "OPTIND"));
  } else if (h === "wait")
    for (let p = 1; p < f.length; p++) {
      let x = f[p];
      if (x === "--" || !x.startsWith("-")) break;
      for (let b = 1; b < x.length; b++)
        if (x[b] === "p") {
          if (b < x.length - 1) l(x.slice(b + 1));
          else if (f[p + 1]) (l(f[p + 1]), p++);
          break;
        }
    }
  else if (!g && (h === "unset" || h === "unsetenv")) {
    let p = !1,
      x = !1;
    for (let b = 1; b < f.length; b++) {
      let _ = f[b];
      if (_.startsWith("-")) {
        if (x)
          return {
            kind: "too-complex",
            reason: `'unset \u2026 ${_}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`,
            nodeType: "command"
          };
        if (_ !== "-f" && _ !== "-v")
          return {
            kind: "too-complex",
            reason: `'unset ${_}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`,
            nodeType: "command"
          };
        if (_ === "-f") p = !0;
        continue;
      }
      if (((x = !0), !/^[A-Za-z_][A-Za-z0-9_]*$/.test(_)))
        return {
          kind: "too-complex",
          reason: `'unset ${_}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`,
          nodeType: "command"
        };
      if (p || h === "unsetenv") {
        let k = r.get(_);
        if (k !== void 0 && mi(k))
          return {
            kind: "too-complex",
            reason: `'${_}' no longer has a statically known value at this unset (wrapped form) \u2014 cannot verify what the command leaves behind`,
            nodeType: "command"
          };
        continue;
      }
      if (NY(_))
        return {
          kind: "too-complex",
          reason: `'unset' targets shell variable ${_} (exec-influencing / integer-attr / IFS / PS4)`,
          nodeType: "command"
        };
      if (n) {
        let k = oe(
          `'unset ${_}' is in a command carrying an expansion that can fail at runtime \u2014 whether the name is cleared cannot be statically verified`
        );
        if (k) return k;
      }
      be(r, _, s);
    }
  } else if (h === "print")
    for (let p = 1; p < f.length; p++) {
      let x = f[p];
      if (x === "--" || x === "-" || !x.startsWith("-")) break;
      let b = !1;
      for (let _ = 1; _ < x.length; _++) {
        let k = x[_];
        if (k === "v") {
          let w = _ < x.length - 1 ? x.slice(_ + 1) : f[p + 1];
          if (w) l(w);
          b = _ === x.length - 1;
          break;
        }
        if (_n.has("-" + k)) {
          b = _ === x.length - 1;
          break;
        }
      }
      if (b) p++;
    }
  else if (h === "set")
    for (let p = 1; p < f.length; p++) {
      let x = f[p];
      if (x === "--" || !/^[-+]/.test(x)) break;
      let b = x.indexOf("A", 1);
      if (b === -1) {
        if (x.endsWith("o")) p++;
        continue;
      }
      if (b < x.length - 1) l(x.slice(b + 1));
      else if (f[p + 1]) l(f[p + 1]);
      break;
    }
  else if (h === "mapfile" || h === "readarray") {
    let p = !1;
    for (let x = 1; x < f.length; x++) {
      let b = f[x];
      if (b.startsWith("-")) {
        if (/^-[dnOsuCc]$/.test(b)) x++;
        continue;
      }
      (l(b), (p = !0));
    }
    if (!p) o.push("MAPFILE");
  } else if (!g && (h === "cd" || h === "chdir" || h === "pushd" || h === "popd")) {
    let p = !1;
    if (h === "pushd" || h === "popd")
      for (let x = 1; x < f.length; x++) {
        let b = f[x];
        if (b === "--") break;
        if (Nye(b, "n")) {
          p = !0;
          break;
        }
        if (h === "popd" && (/^\+0*[1-9]/.test(b) || /^-0+$/.test(b))) {
          p = !0;
          break;
        }
      }
    if (!p) (A(r, "PWD"), A(r, "OLDPWD"));
    if (h === "pushd" || h === "popd") (A(r, "DIRSTACK"), A(r, "dirstack"));
  }
  let m = h !== void 0 && dt.has(h) ? t.length + d.length : 0,
    y = U;
  if (((U += m), m > 0 && D === void 0)) {
    let p = h === "export" || h === "readonly" || f.some((b) => /^-[A-Za-z]*[xr]/.test(b)),
      x = new Set();
    for (let b of p ? f.slice(1) : []) {
      let _ = /^[A-Za-z_]\w*/.exec(b);
      if (_ !== null) x.add(_[0]);
    }
    H = [
      ...(H ?? []),
      ...t.map((b) => x.has(b.name)),
      ...d.map(({ word: b }) => x.has(/^[A-Za-z_]\w*/.exec(b)?.[0] ?? ""))
    ];
  }
  if (m > 0 && D !== void 0) {
    let p = {
        kind: "too-complex",
        reason: `A variable set in front of ${h} in this command can't be checked before it runs`
      },
      x = [...t];
    for (let { word: b } of d) {
      let _ = /^([A-Za-z_]\w*)(\+?)=([^]*)$/.exec(b);
      if (_ === null) return p;
      let [, k = "", w, E = ""] = _;
      x.push(w === "+" ? { name: k, value: E, isAppend: !0 } : { name: k, value: E });
    }
    if (D.length < y + x.length || (d.length > 0 && x.length > 1)) return p;
    for (let b = d.length - 1; b >= 0; b--) {
      let _ = d[b]?.target;
      if (_ !== void 0) o.splice(_, 1);
    }
    for (let [b, _] of x.entries()) {
      if (D[y + b] !== !0) continue;
      let k = _.isAppend ? r.get(_.name) : "";
      if (k === void 0 || mi(k) || mi(_.value) || NY(_.name)) return p;
      if (n) {
        let w = oe(
          `'${_.name}' is appended to by a command carrying an expansion that can fail at runtime \u2014 whether the append happens cannot be statically verified`
        );
        if (w) return w;
      }
      (r.set(_.name, k + _.value), W.set(_.name, k + _.value));
    }
  }
  if (h !== void 0 && t.length > 0 && !(m > 0 && D !== void 0) && TXn.has(h))
    for (let p of t) l(p.name);
  for (let p of o) {
    if (NY(p))
      return {
        kind: "too-complex",
        reason: `'${h ?? t[0]?.name}' writes shell variable ${p} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`,
        nodeType: "command"
      };
    A(r, p);
  }
  return (i.push(...u), null);
}
function an(e, t, r, i, s) {
  let n = N,
    o = C,
    u = r.length,
    l = [],
    f = [],
    g = [],
    c = [...t],
    d = e.children.some((_) => _ && At.has(_.type)) ? new Map(i) : null,
    h = 0,
    m = !1;
  for (let _ of e.children) {
    if (!_) continue;
    let k = Z(_);
    switch (((m ||= k), _.type)) {
      case "variable_assignment": {
        if (g.length > 0) {
          let E = gt(_, new Set(g.map((T) => T.name)));
          if (E !== null)
            return {
              kind: "too-complex",
              reason: `Env-prefix value references \`$${E}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`,
              nodeType: "variable_assignment"
            };
        }
        let w = Ee(_, r, i, s);
        if ("kind" in w) return w;
        if (yt(w.name, w.value))
          return {
            kind: "too-complex",
            reason: `${w.name} has integer attribute \u2014 env-prefix arith-evals value, which can execute subscript command substitution or abort/diverge at runtime`,
            nodeType: "variable_assignment"
          };
        if (
          (g.push(
            w.isAppend
              ? { name: w.name, value: w.value, isAppend: !0 }
              : { name: w.name, value: w.value }
          ),
          k)
        )
          h = g.length - 1;
        break;
      }
      case "command_name": {
        let w = _.children[0] ?? _;
        if (rf()) {
          if (w.type === "simple_expansion" || w.type === "expansion") return R(w);
          if ((w.type === "string" || w.type === "concatenation") && mt(w)) return R(w);
        }
        let E = O(w, r, i, s);
        if (typeof E !== "string") return E;
        (l.push(E), f.push(I(w.text) || le(w)));
        break;
      }
      case "word":
      case "number":
      case "raw_string":
      case "string":
      case "concatenation":
      case "arithmetic_expansion": {
        let w = O(_, r, i, s);
        if (typeof w !== "string") return w;
        if (/^--?[\nA-Za-z0-9_]/.test(w) && mi(w))
          return {
            kind: "too-complex",
            reason: "Argument starting with `-` contains runtime-determined content",
            nodeType: _.type
          };
        (l.push(w), f.push(I(_.text) || le(_)));
        break;
      }
      case "simple_expansion": {
        N++;
        let w = j(_, i, !1);
        if (typeof w !== "string") return w;
        (l.push(w), f.push(!0));
        break;
      }
      case "file_redirect": {
        let w = g[0]?.name;
        if (w !== void 0 && k) {
          let T = J(w);
          if (T) return T;
        }
        let E = ke(_, r, i, s);
        if ("kind" in E) return E;
        c.push(E);
        break;
      }
      case "herestring_redirect": {
        N++;
        let w = g[0]?.name;
        if (w !== void 0 && k) {
          let T = J(w);
          if (T) return T;
        }
        let E = rn(_, r, i, s);
        if (E) return E;
        break;
      }
      default:
        return R(_);
    }
  }
  let y = g[0]?.name;
  if (h > 0 && y !== void 0) {
    let _ = J(y);
    if (_) return _;
  }
  {
    let _ = sn(l, g, i, s, u > 0, m);
    if (_) return _;
  }
  if (d) at(i, d);
  let p = (_, k) =>
      _ === "" || /["'\\ \t\n$`;|&<>(){}#]/.test(_) || (k === 0 && _.includes("="))
        ? `'${_.replaceAll("'", "'\\''")}'`
        : _,
    x =
      /\$[A-Za-z_]/.test(e.text) ||
      e.text.includes(`
`)
        ? [...g.map((_) => `${_.name}=${p(_.value)}`), ...l.map((_, k) => p(_, k))].join(" ")
        : e.text,
    b = I(e.text);
  return {
    kind: "simple",
    commands: [
      {
        argv: l,
        envVars: g,
        redirects: c,
        text: x,
        hasUnquotedGlob: b,
        argvSourceLiteral: N === n,
        carveOutMayDesyncQuoteScan: C !== o,
        argvUnquotedGlob: f
      }
    ],
    bareAssignmentNames: []
  };
}
var on = "*?[";
function le(e) {
  switch (e.type) {
    case "word":
    case "number":
      for (let t = 0; t < e.text.length; t++)
        if (e.text[t] === "\\") t++;
        else if (on.includes(e.text[t])) return !0;
      return !1;
    case "string":
    case "raw_string":
    case "simple_expansion":
    case "arithmetic_expansion":
      return !1;
    case "concatenation":
      return e.children.some((t) => t !== null && le(t));
    default:
      return !0;
  }
}
function Pe(e, t, r, i) {
  if (B && ce(e, "heredoc_redirect")) return R(e);
  let s = new Map(r),
    n = t.length,
    o = !1;
  {
    let u = Buffer.from(e.text, "utf8"),
      l = (c) => c === 32 || c === 9 || c === 10 || c === 13 || c === 59 || c === 38,
      f = (c, d) => {
        let h = c;
        while (h < d) {
          let m = u[h];
          if (l(m)) h++;
          else if (m === 92 && (u[h + 1] === 10 || (u[h + 1] === 13 && u[h + 2] === 10)))
            h += u[h + 1] === 13 ? 3 : 2;
          else return !1;
        }
        return !0;
      },
      g = 0;
    for (let c of e.children) {
      if (!c) continue;
      let d = c.startIndex - e.startIndex;
      if (!f(g, d))
        return {
          kind: "too-complex",
          reason: "command substitution contains bytes no parsed node accounts for"
        };
      g = c.endIndex - e.startIndex;
    }
    if (!f(g, u.length))
      return {
        kind: "too-complex",
        reason: "command substitution contains bytes no parsed node accounts for"
      };
  }
  for (let u of e.children) {
    if (!u) continue;
    if (u.type === "$(" || u.type === "`" || u.type === ")") continue;
    if (u.type !== "comment") o = !0;
    let l = S(u, t, s, i);
    if (l) return l;
  }
  if (o && t.length === n) z(t, e);
  return null;
}
function O(e, t, r, i) {
  if (!e) return { kind: "too-complex", reason: "Null argument node" };
  switch (e.type) {
    case "word": {
      if (re.test(e.text))
        return {
          kind: "too-complex",
          reason: "Word contains brace expansion syntax",
          nodeType: "word",
          differential: !0
        };
      if (xe.test(e.text) || ye.test(e.text))
        return {
          kind: "too-complex",
          reason: "Brace body contains backslash-escaped brace",
          nodeType: "word",
          differential: !0
        };
      if (nWt.test(e.text))
        return {
          kind: "too-complex",
          reason: "Word contains unescaped ` or $ \u2014 parser missed expansion",
          nodeType: "word",
          differential: !0
        };
      if (rWt.test(e.text))
        return {
          kind: "too-complex",
          reason: "Word contains unescaped quote \u2014 parser absorbed quote into brace-body word",
          nodeType: "word"
        };
      return e.text.replace(/\\(.)/g, "$1");
    }
    case "number":
      if (e.children.length > 0)
        return {
          kind: "too-complex",
          reason: "Number node contains expansion (NN# arithmetic base syntax)",
          nodeType: e.children[0]?.type
        };
      return e.text;
    case "raw_string":
      return ht(e.text);
    case "string":
      return pt(e, t, r, i);
    case "concatenation": {
      if (re.test(e.text))
        return {
          kind: "too-complex",
          reason: "Brace expansion",
          nodeType: "concatenation",
          differential: !0
        };
      if (xe.test(e.text) || ye.test(e.text))
        return {
          kind: "too-complex",
          reason: "Brace body contains backslash-escaped brace",
          nodeType: "concatenation",
          differential: !0
        };
      let s = "",
        n = !1,
        o = e.startIndex;
      for (let u = 0; u < e.children.length; u++) {
        let l = e.children[u];
        if (!l) continue;
        if (l.startIndex > o)
          return {
            kind: "too-complex",
            reason:
              "Concatenation has unparsed bytes between children \u2014 parser dropped content that shell will see",
            nodeType: "concatenation"
          };
        if (((o = l.endIndex), l.type === "word" && l.text.includes("{"))) n = !0;
        if (
          (l.type === "simple_expansion" || l.type === "expansion") &&
          (e.children[u + 1]?.text.startsWith("[") ||
            /^:[a-zA-Z&]/.test(e.children[u + 1]?.text ?? ""))
        )
          return {
            kind: "too-complex",
            reason: "zsh $name[expr] / $name:mod in bare concatenation \u2014 recursive eval",
            nodeType: "concatenation",
            differential: !0
          };
        let f = O(l, t, r, i);
        if (typeof f !== "string") return f;
        s += f;
      }
      if (n && (s.includes(",") || s.includes("..")))
        return {
          kind: "too-complex",
          reason: "Brace expansion (unquoted `{` in concatenation with `,`/`..`)",
          nodeType: "concatenation"
        };
      if (wXn.test(s))
        return {
          kind: "too-complex",
          reason: "zsh ~[ dynamic directory syntax (post-collapse)",
          nodeType: "concatenation",
          differential: !0
        };
      if (vXn.test(s))
        return {
          kind: "too-complex",
          reason: "zsh =cmd expansion (post-collapse)",
          nodeType: "concatenation",
          differential: !0
        };
      return s;
    }
    case "arithmetic_expansion": {
      N++;
      let s = Ie(e);
      if (s) return s;
      return v;
    }
    case "simple_expansion":
      return (N++, j(e, r, !1));
    default:
      return R(e);
  }
}
function pt(e, t, r, i) {
  let s = "",
    n = -1,
    o = !1,
    u = !1,
    l = !1;
  for (let f of e.children) {
    if (!f) continue;
    if (n !== -1 && f.startIndex > n) {
      let g = Buffer.from(e.text, "utf8")
        .subarray(n - e.startIndex, f.startIndex - e.startIndex)
        .toString("utf8");
      if (g.includes("`"))
        return {
          kind: "too-complex",
          reason:
            "Unanalyzable backtick body in double-quoted string gap \u2014 shell-evaluated value unknown",
          nodeType: "string",
          differential: !0
        };
      if (g.length > 0) ((s += g), (u = !0));
    }
    switch (((n = f.endIndex), f.type)) {
      case '"':
        n = f.endIndex;
        break;
      case "string_content":
        ((s += f.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1")), (u = !0));
        break;
      case Me: {
        let g = e.children.indexOf(f),
          c = e.children[g + 1];
        if (c?.type === "string_content") {
          if (c.text.startsWith("["))
            return {
              kind: "too-complex",
              reason:
                "Legacy $[...] arithmetic inside double-quotes \u2014 recursive subscript eval",
              nodeType: "string",
              differential: !0
            };
          if (/^[+^=~]/.test(c.text))
            return {
              kind: "too-complex",
              reason:
                "zsh $+/$^/$=/$~ prefix-flag expansion \u2014 value defeats downstream content checks",
              nodeType: "string",
              differential: !0
            };
          let d = e.children[g - 1];
          if (
            /^:[a-zA-Z&]/.test(c.text) &&
            d?.type === "simple_expansion" &&
            d.endIndex === f.startIndex &&
            d.children.some((h) => h?.type === "special_variable_name")
          )
            return {
              kind: "too-complex",
              reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
              nodeType: "string",
              differential: !0
            };
        }
        ((s += Me), (u = !0));
        break;
      }
      case "command_substitution": {
        let g = cn(f);
        if (g === "DANGEROUS") return R(f);
        if (g !== null) {
          let d = g.replace(/\n+$/, "");
          if (St.test(f.text)) C++;
          if (
            d.includes(`
`)
          ) {
            if (/^--?[A-Za-z0-9]/.test(s + d))
              return {
                kind: "too-complex",
                reason: "cat-heredoc body would make the argument start with option syntax",
                nodeType: "command_substitution"
              };
            (ne++,
              (s +=
                `
` + a7),
              (u = !0));
            break;
          }
          (ne++, (s += d), (u = !0));
          break;
        }
        let c = Pe(f, t, r, i);
        if (c) return c;
        (N++, (s += a7), (o = !0));
        break;
      }
      case "simple_expansion": {
        N++;
        let g = j(f, r, !0);
        if (typeof g !== "string") return g;
        {
          let c = e.children[e.children.indexOf(f) + 1],
            d = f.children.some((h) => h?.type === "special_variable_name");
          if (
            c?.type === "string_content" &&
            (c.text.startsWith("[") || /^:[a-zA-Z&]/.test(c.text) || (d && Kt.test(c.text)))
          )
            return {
              kind: "too-complex",
              reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval',
              nodeType: "string",
              differential: !0
            };
        }
        if (mi(g)) o = !0;
        else if (g !== "") u = !0;
        else l = !0;
        s += g;
        break;
      }
      case "arithmetic_expansion": {
        let g = Ie(f);
        if (g) return g;
        (N++, (s += v), (o = !0));
        break;
      }
      default:
        return R(f);
    }
  }
  if (o) {
    if ([...s.replaceAll(a7, "").replaceAll(v, "")].length <= 1) return R(e);
  }
  if (!u && !o && !l && e.text.length > 2) {
    let f = e.text.slice(1, -1);
    if (f.includes("`") || f.includes("$("))
      return {
        kind: "too-complex",
        reason: "Delimiters-only string node contains unparsed command substitution",
        nodeType: "string",
        differential: !0
      };
    return f;
  }
  return s;
}
var ln =
  /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;
function Ie(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.children.length === 0) {
      if (!ln.test(t.text))
        return {
          kind: "too-complex",
          reason: `Arithmetic expansion references variable or non-literal: ${t.text}`,
          nodeType: "arithmetic_expansion"
        };
      continue;
    }
    switch (t.type) {
      case "binary_expression":
      case "unary_expression":
      case "ternary_expression":
      case "parenthesized_expression": {
        let r = Ie(t);
        if (r) return r;
        break;
      }
      default:
        return R(t);
    }
  }
  return null;
}
function z(e, t) {
  e.push({ argv: ["true"], envVars: [], redirects: [], text: t.text, hasUnquotedGlob: I(t.text) });
}
function Z(e) {
  if (e.type === "arithmetic_expansion") return !0;
  for (let t of e.children) if (t && Z(t)) return !0;
  return !1;
}
function cn(e) {
  let t = null;
  for (let s of e.children) {
    if (!s) continue;
    if (s.type === "$(" || s.type === ")") continue;
    if (s.type === "redirected_statement" && t === null) t = s;
    else return null;
  }
  if (!t) return null;
  let r = !1,
    i = null;
  for (let s of t.children) {
    if (!s) continue;
    if (s.type === "command") {
      let n = s.children.filter((u) => u);
      if (n.length !== 1) return null;
      let o = n[0];
      if (o?.type !== "command_name" || o.text !== "cat") return null;
      r = !0;
    } else if (s.type === "heredoc_redirect") {
      if (we(s) !== null) return null;
      for (let n of s.children) {
        if (n?.type === "<<-") return null;
        if (n?.type === "heredoc_body") i = n.text;
      }
    } else return null;
  }
  if (!r || i === null) return null;
  if (Se.test(i)) return "DANGEROUS";
  if (sWt(i) !== !1) return "DANGEROUS";
  return i;
}
function Ee(e, t, r, i) {
  let s = null,
    n = "",
    o = !1;
  for (let u of e.children) {
    if (!u) continue;
    if (u.type === "variable_name") s = u.text;
    else if (u.type === "=" || u.type === "+=") {
      o = u.type === "+=";
      continue;
    } else if (u.type === "command_substitution") {
      let l = Pe(u, t, r, i);
      if (l) return l;
      n = a7;
    } else if (u.type === "simple_expansion") {
      let l = j(u, r, !0);
      if (typeof l !== "string") return l;
      n = l;
    } else {
      let l = O(u, t, r, i);
      if (typeof l !== "string") return l;
      n = l;
    }
  }
  if (s === null)
    return {
      kind: "too-complex",
      reason: "Variable assignment without name",
      nodeType: "variable_assignment"
    };
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(s))
    return {
      kind: "too-complex",
      reason: `Invalid variable name (bash treats as command): ${s}`,
      nodeType: "variable_assignment"
    };
  if (s === "IFS")
    return {
      kind: "too-complex",
      reason: "IFS assignment changes word-splitting \u2014 cannot model statically",
      nodeType: "variable_assignment"
    };
  if (s === "PS4" || s === "PROMPT4") {
    if (o)
      return {
        kind: "too-complex",
        reason: "PS4 += cannot be statically verified \u2014 combine into a single PS4= assignment",
        nodeType: "variable_assignment"
      };
    if (mi(n))
      return {
        kind: "too-complex",
        reason: "PS4 value derived from cmdsub/variable \u2014 runtime unknowable",
        nodeType: "variable_assignment"
      };
    if (!/^[A-Za-z0-9 _+:./=[\]-]*$/.test(n.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, "")))
      return {
        kind: "too-complex",
        reason:
          "PS4 value outside safe charset \u2014 only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed",
        nodeType: "variable_assignment"
      };
  }
  if (n.includes("~"))
    return {
      kind: "too-complex",
      reason: "Tilde in assignment value \u2014 bash may expand at assignment time",
      nodeType: "variable_assignment"
    };
  return { name: s, value: n, isAppend: o };
}
var Fpn = new Set([
  "_",
  "RANDOM",
  "SECONDS",
  "LINENO",
  "BASH_COMMAND",
  "FUNCNAME",
  "EPOCHSECONDS",
  "EPOCHREALTIME",
  "SRANDOM",
  "BASHPID",
  "BASH_MONOSECONDS",
  "BASH_TRAPSIG",
  "HISTCMD",
  "ERRNO",
  "REPLY",
  "reply",
  "PIPESTATUS",
  "pipestatus",
  "BASH_SOURCE",
  "DIRSTACK",
  "GROUPS",
  "BASH_ARGV",
  "BASH_ARGC",
  "BASH_SUBSHELL",
  "BASH_LINENO",
  "BASH_ARGV0",
  "BASH_REMATCH",
  "MATCH",
  "match",
  "MBEGIN",
  "MEND",
  "mbegin",
  "mend",
  "OPTARG",
  "OPTIND",
  "argv",
  "FIGNORE",
  "fignore",
  "PSVAR",
  "psvar",
  "WATCH",
  "watch",
  "HISTCHARS",
  "histchars",
  "PS1",
  "PROMPT",
  "prompt",
  "PS2",
  "PROMPT2",
  "PS3",
  "PROMPT3",
  "PS4",
  "PROMPT4",
  "RPS1",
  "RPROMPT",
  "RPS2",
  "RPROMPT2"
]);
function j(e, t, r) {
  let i = null,
    s = !1;
  for (let o of e.children) {
    if (o?.type === "variable_name") {
      i = o.text;
      break;
    }
    if (o?.type === "special_variable_name") {
      ((i = o.text), (s = !0));
      break;
    }
  }
  if (i === null) return R(e);
  let n = t.get(i);
  if (n !== void 0) {
    if (n.includes(L)) return R(e);
    if (Fpn.has(i)) return r && me.has(i) && i !== "BASHPID" ? v : R(e);
    if (mi(n)) {
      if (!r) return R(e);
      return n;
    }
    if (!r) {
      if (n === "") return R(e);
      if (De.test(n)) return R(e);
    }
    return n;
  }
  if (i === "HOME") {
    let o = Rt();
    if (!r && (o === "" || De.test(o))) return R(e);
    return o;
  }
  if (r) {
    if (me.has(i)) return v;
    if (s && (Pt.has(i) || /^[0-9]+$/.test(i))) return v;
  }
  return R(e);
}
function pe(e, t) {
  q(t, e);
}
function We(e, t) {
  let r = () => {
    for (let i of t.keys()) A(t, i);
  };
  for (let i of e) {
    if (i?.type === "unset" && i.text === "unsetenv") return;
    if (
      !i ||
      i.type === "unset" ||
      i.type === "file_redirect" ||
      i.type === "heredoc_redirect" ||
      i.type === "herestring_redirect"
    )
      continue;
    if (i.type === "variable_name") {
      A(t, i.text.replace(/\\/g, ""));
      continue;
    }
    if (i.type === "word") {
      if (i.text.startsWith("-")) {
        if (i.text === "--" || /^-[fvn]+$/.test(i.text)) continue;
        r();
        continue;
      }
      if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(i.text)) {
        A(t, i.text.replace(/^\\/, ""));
        continue;
      }
    }
    r();
  }
}
function Ae(e) {
  if (!e) return null;
  switch (e.type) {
    case "word":
    case "number":
      return e.text.replace(/\\(.)/g, "$1");
    case "raw_string":
      return e.text.slice(1, -1);
    case "string": {
      let t = e.children.filter((r) => r && r.type !== '"');
      if (t.length === 0) return "";
      if (t.length === 1 && t[0]?.type === "string_content") return t[0].text;
      return null;
    }
    case "concatenation": {
      let t = "";
      for (let r of e.children) {
        let i = Ae(r);
        if (i === null) return null;
        t += i;
      }
      return t;
    }
    default:
      return null;
  }
}
function q(e, t) {
  if (
    e.type === "function_definition" ||
    e.type === "subshell" ||
    e.type === "command_substitution" ||
    e.type === "process_substitution"
  )
    return;
  if (e.type === "pipeline") {
    let r = null;
    for (let i of e.children) if (i && !te.has(i.type)) r = i;
    if (r) q(r, t);
    return;
  }
  if (e.type === "list" || e.type === "program") {
    let r = e.children;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      if (!s || te.has(s.type)) continue;
      let n = i + 1;
      while (n < r.length && !r[n]) n++;
      if (r[n]?.type === "&") continue;
      q(s, t);
    }
    return;
  }
  if (e.type === "variable_assignment") {
    for (let r of e.children)
      if (r?.type === "variable_name") {
        A(t, r.text);
        break;
      }
  }
  if (e.type === "for_statement") {
    for (let r of e.children)
      if (r?.type === "variable_name") {
        A(t, r.text);
        break;
      }
  }
  if (e.type === "unset_command") We(e.children, t);
  if (e.type === "command") {
    let r,
      i,
      s = [],
      n = [],
      o = !1;
    for (let m of e.children) {
      if (!m) continue;
      if (m.type === "command_name") ((i = m), (r = Ae(m.children[0] ?? m) ?? void 0), (o = !0));
      else if (
        !o ||
        m.type === "file_redirect" ||
        m.type === "herestring_redirect" ||
        m.type === "heredoc_redirect"
      )
        ;
      else (s.push(Ae(m) ?? ""), n.push(m));
    }
    let u = !1,
      l;
    while (r !== void 0 && (Re.has(r) || r === "!")) {
      if (
        (l === "builtin" || l === "command") &&
        r !== "builtin" &&
        r !== "command" &&
        r !== "noglob"
      )
        u = !0;
      let m = r === "!" ? void 0 : r;
      while (s.length > 0) {
        let y = s[0];
        if (/^-[-pvV]*$/.test(y)) {
          if (/[vV]/.test(y)) u = !0;
          (s.shift(), n.shift());
        } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(y)) {
          let p = y.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
          (A(t, p), s.shift(), n.shift(), (m = void 0));
        } else break;
      }
      ((l = m), (r = s.shift()), n.shift());
    }
    let f = s,
      g = (m) => {
        if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(m)) A(t, m);
      };
    if (r === "read") {
      A(t, "REPLY");
      let m = 0,
        y = !1;
      while (m < f.length) {
        let p = f[m];
        if (!y && p === "--") {
          ((y = !0), m++);
          continue;
        }
        if (!y && p.startsWith("-")) {
          if (T2e.has(p)) {
            m += 2;
            continue;
          }
          let x = !1;
          for (let b = 1; b < p.length; b++) {
            let _ = p[b];
            if (_ === "a" || _ === "A") {
              (g(b < p.length - 1 ? p.slice(b + 1) : (f[m + 1] ?? "")), (x = b === p.length - 1));
              break;
            }
            if (T2e.has("-" + _)) {
              x = b === p.length - 1;
              break;
            }
          }
          m += x ? 2 : 1;
          continue;
        }
        (g(p), m++);
      }
    } else if (r === "mapfile" || r === "readarray") {
      A(t, "MAPFILE");
      for (let m = 0; m < f.length; m++) {
        let y = f[m];
        if (y.startsWith("-")) {
          if (/^-[dnOsuCc]$/.test(y)) m++;
          continue;
        }
        g(y);
      }
    } else if (r === "unset" && !u) We(n, t);
    let c = i?.children[0],
      d = c?.type === "word" ? c.text.replace(/\\(.)/g, "$1") : void 0,
      h = d !== void 0 && !TXn.has(d) && !Re.has(d) && !(D === void 0 ? ve : dt).has(d);
    for (let m of e.children) if (m && (m.type !== "variable_assignment" || !h)) q(m, t);
    return;
  }
  if (e.type === "declaration_command") {
    for (let r of e.children)
      if (
        r?.type === "string" ||
        r?.type === "raw_string" ||
        r?.type === "word" ||
        r?.type === "number" ||
        r?.type === "concatenation" ||
        r?.type === "variable_name"
      ) {
        let i = r.text.replace(/['"\\]/g, ""),
          s = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(i);
        if (s) A(t, s[1]);
        else {
          let n = i.indexOf("=");
          if (n > 0 && i.lastIndexOf("$", n - 1) !== -1) for (let o of [...t.keys()]) A(t, o);
        }
      }
  }
  for (let r of e.children) if (r) q(r, t);
}
function V(e, t) {
  for (let [r, i] of t) {
    let s = e.get(r);
    if (s !== void 0 && s !== i) {
      if (W.get(r) === i) F = !0;
      A(e, r);
    }
  }
  for (let r of e.keys()) if (!t.has(r)) A(e, r);
}
function he(e, t, r = !1) {
  if (r) {
    A(e, t.name);
    return;
  }
  if (t.isAppend && !e.has(t.name)) return;
  let i = e.get(t.name);
  if (i !== void 0 && i !== t.value && !t.isAppend && !mi(t.value)) {
    A(e, t.name);
    return;
  }
  let s = t.isAppend ? (i ?? "") + t.value : t.value;
  e.set(t.name, s);
}
function ht(e) {
  return e.slice(1, -1);
}
function mt(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "simple_expansion" || t.type === "expansion") return !0;
    if (mt(t)) return !0;
  }
  return !1;
}
function un(e) {
  if (e === "~" || e.startsWith("~/")) return "HOME";
  if (e === "~+" || e.startsWith("~+/")) return "PWD";
  if (e === "~-" || e.startsWith("~-/")) return "OLDPWD";
  return null;
}
function gt(e, t) {
  let r = e.type === "variable_assignment";
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "variable_name") {
      if (r) continue;
      if (t.has(i.text)) return i.text;
    }
    if (i.type === "word") {
      let n = un(i.text);
      if (n !== null && t.has(n)) return n;
    }
    let s = gt(i, t);
    if (s !== null) return s;
  }
  return null;
}
function R(e) {
  if (e.type === "ERROR")
    return {
      kind: "too-complex",
      reason:
        Ke(e.text) || (e.text.startsWith("${") && ajr(e.text))
          ? "A $ followed by non-ASCII text in this command can't be checked before it runs"
          : "Parse error",
      nodeType: e.type
    };
  let t = fn.get(e.type);
  return {
    kind: "too-complex",
    reason: `${t === void 0 ? "This command" : `${t} in this command`} can't be checked before it runs`,
    nodeType: e.type
  };
}
var fn = new Map([
  ["simple_expansion", "A variable"],
  ["expansion", "A variable in braces"],
  ["command_substitution", "A nested command"],
  ["process_substitution", "A command used as a file"],
  ["brace_expression", "A brace pattern"],
  ["ansi_c_string", "Text with escape codes"],
  ["translated_string", "Translatable text"],
  ["test_command", "A test in brackets"],
  ["herestring_redirect", "A here-string"],
  ["heredoc_redirect", "A here-document"],
  ["subshell", "A group in parentheses"],
  ["compound_statement", "A group in braces or double parentheses"],
  ["for_statement", "A for or select loop"],
  ["c_style_for_statement", "A counting for loop"],
  ["while_statement", "A while or until loop"],
  ["until_statement", "An until loop"],
  ["if_statement", "An if statement"],
  ["case_statement", "A case statement"],
  ["function_definition", "A function definition"],
  ["array", "A list of values"],
  ["string", "Quoted text"],
  ["file_redirect", "A file redirect"],
  ["pipeline", "A pipeline"],
  ["concatenation", "Joined pieces of text"],
  ["variable_assignment", "A variable assignment"],
  ["variable_assignments", "Variable assignments"]
]);
function M1o(e) {
  let t = [],
    r = 0,
    i = !1,
    s = !1;
  while (r < e.length) {
    let n = e[r];
    if (n === "\\" && !i) {
      r += 2;
      continue;
    }
    if (n === "'" && !s) {
      ((i = !i), r++);
      continue;
    }
    if (n === '"' && !i) {
      ((s = !s), r++);
      continue;
    }
    if (!i && n === "$" && e[r + 1] === "{") {
      let o = 1,
        u = r + 2,
        l = !1,
        f = !1;
      while (u < e.length && o > 0) {
        let g = e[u];
        if (g === "\\" && !l) {
          u += 2;
          continue;
        }
        if (g === "'" && !f) l = !l;
        else if (g === '"' && !l) f = !f;
        else if (!l && !f) {
          if (g === "{") o++;
          else if (g === "}") o--;
        }
        u++;
      }
      (t.push(e.slice(r + 2, o === 0 ? u - 1 : u)), (r = u));
      continue;
    }
    r++;
  }
  return t;
}
function Xbt(e) {
  let t = "",
    r = !1,
    i = !1;
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (r) {
      if (n === "'") ((r = !1), (t += n));
      continue;
    }
    if (n === "\\" && !r) {
      let o = e[s + 1];
      if ((s++, o !== void 0 && !"$'\"`\\".includes(o))) t += o;
      continue;
    }
    if (n === '"') {
      ((i = !i), (t += n));
      continue;
    }
    if (n === "'" && !i) {
      ((r = !0), (t += n));
      continue;
    }
    t += n;
  }
  return t;
}
function k2e(e) {
  let t = "",
    r;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (r === "'") {
      if (s === "'") r = void 0;
      continue;
    }
    if (r === '"') {
      if (s === "\\") i++;
      else if (s === '"') r = void 0;
      continue;
    }
    if (s === "\\") {
      i++;
      continue;
    }
    if (s === "'" || s === '"') {
      r = s;
      continue;
    }
    t += s;
  }
  return t;
}
var JHe = new Set([
  "zmodload",
  "emulate",
  "sysopen",
  "sysread",
  "syswrite",
  "sysseek",
  "zpty",
  "ztcp",
  "zsocket",
  "zf_rm",
  "zf_mv",
  "zf_ln",
  "zf_chmod",
  "zf_chown",
  "zf_mkdir",
  "zf_rmdir",
  "zf_chgrp",
  "repeat",
  "foreach",
  "zcompile",
  "setopt",
  "unsetopt",
  "disable",
  "shopt",
  "autoload",
  "functions",
  "zformat",
  "zparseopts",
  "zstyle",
  "zregexparse",
  "getln",
  "vared"
]);
var dn = new Set([
  "-exec",
  "-execdir",
  "-ok",
  "-okdir",
  "-delete",
  "-rm",
  "-fprint",
  "-fprint0",
  "-fprintf",
  "-fls",
  "-files0-from"
]);
function Upn(e) {
  return dn.has(e) && bor(e);
}
var pn = new Set([
    "-name",
    "-iname",
    "-path",
    "-ipath",
    "-lname",
    "-ilname",
    "-regex",
    "-iregex",
    "-wholename",
    "-iwholename",
    "-samefile",
    "-newer",
    "-anewer",
    "-cnewer",
    "-mnewer",
    "-perm",
    "-user",
    "-group",
    "-uid",
    "-gid",
    "-size",
    "-type",
    "-xtype",
    "-fstype",
    "-inum",
    "-links",
    "-used",
    "-context",
    "-amin",
    "-cmin",
    "-mmin",
    "-atime",
    "-ctime",
    "-mtime",
    "-mindepth",
    "-maxdepth",
    "-printf",
    "-regextype",
    "-D",
    "-f",
    "-flags",
    "-Bnewer",
    "-Btime",
    "-Bmin",
    "-files0-from",
    "-xattrname"
  ]),
  hn = /^-newer[aBcm][aBcmt]$/,
  xt = /^-(?:[EHLPXdsx]*D|f|[dsx]*[EHLPX][EHLPXdsx]*f)$/,
  mn = /^-[dsx]+f$/;
function oWt(e) {
  return pn.has(e) || hn.test(e) || xt.test(e);
}
function Bpn(e) {
  return xt.test(e);
}
function jpn(e) {
  return mn.test(e);
}
var Lre = new Set([
    "eval",
    "source",
    ".",
    "exec",
    "nocorrect",
    "fc",
    "coproc",
    "trap",
    "enable",
    "mapfile",
    "readarray",
    "hash",
    "bind",
    "complete",
    "compgen",
    "alias",
    "let"
  ]),
  HAe = new Set(["awk", "gawk", "mawk", "nawk"]),
  gn = /^(?:-[FvW]$|--(?:fie|a$|as))/;
function sWt(e) {
  if (/(?<![A-Za-z_])system[\s\\]*\(/.test(e))
    return "awk program contains system() which executes arbitrary commands";
  if (/(?:^|[^|])\|&?[^/|%";#{}]*"/.test(e) || /(?:^|[^|])\|&?[\s\\]*getline\b/.test(e))
    return 'awk program contains a command pipe (| "cmd" or | getline) which executes arbitrary commands';
  if (/@[\s\\]*(?:load|include)\b|@[\s\\]*\w+(?:::\w+)?(?:\[[^\]]*\])*[\s\\]*\(/.test(e))
    return "awk program contains @load/@include or an @indirect call which can execute arbitrary code";
  if (/(?<![A-Za-z_])extension[\s\\]*\(/.test(e))
    return "awk program contains extension() which loads arbitrary native code (legacy gawk)";
  if (/"\/inet[46]?\//.test(e))
    return "awk program opens a gawk /inet/ network socket which can exfiltrate data";
  return !1;
}
var Uye = new Set(["bash", "sh", "zsh", "dash", "ksh", "mksh", "ash", "hush", "rbash"]),
  Wpn = new Set(["busybox", "toybox", "wsl", "su", "runuser"]),
  ZL = new Set([...Uye, "fish", "csh", "tcsh", "rsh", ...Wpn, "cmd", "powershell", "pwsh"]),
  QHe = new Set([
    "time",
    "command",
    "builtin",
    "noglob",
    "env",
    "nice",
    "nohup",
    "sudo",
    "doas",
    "stdbuf",
    "timeout"
  ]),
  l7 = new Set([
    "watch",
    "ionice",
    "chrt",
    "setsid",
    "taskset",
    "strace",
    "ltrace",
    "script",
    "flock",
    "unshare",
    "nsenter"
  ]);
function D1o(e) {
  let t = y$(e);
  return Lre.has(e) || JHe.has(e) || l7.has(e) || l7.has(t) || t === "rm" || t === "rmdir";
}
var ojr = {
    test: new Set(["-v", "-R", "-t"]),
    "[": new Set(["-v", "-R", "-t"]),
    "[[": new Set(["-v", "-R", "-t"]),
    printf: new Set(["-v"]),
    read: new Set(["-a"]),
    unset: new Set(["-v"]),
    wait: new Set(["-p"])
  },
  get = new Set(["-eq", "-ne", "-lt", "-le", "-gt", "-ge"]),
  Jbt = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/,
  sjr = new Set(["read", "unset"]),
  Ze = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "private",
    "float",
    "integer"
  ]),
  ijr = /^[+-][-+\w]*P/,
  Qbt = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "print",
    "getopts",
    "set",
    "zparseopts",
    "zformat",
    "zstyle",
    "autoload",
    "shift",
    "exit",
    "return",
    "break",
    "continue",
    "bye",
    "logout",
    "vared",
    "private",
    "getln",
    "zregexparse",
    "float",
    "integer"
  ]),
  Gpn = new Set([
    "pipefail",
    "errexit",
    "nounset",
    "xtrace",
    "noglob",
    "noclobber",
    "verbose",
    "monitor",
    "notify",
    "vi",
    "emacs",
    "errtrace",
    "functrace",
    "hashall",
    "physical",
    "ignoreeof"
  ]),
  zpn = new Set(["e", "u", "x", "f", "C", "v", "m", "b", "E", "T", "h", "P", "n"]),
  xn = new Set([
    "path",
    "home",
    "dirstack",
    "tmpprefix",
    "bash_env",
    "env",
    "cdpath",
    "globignore",
    "shell",
    "fpath",
    "bash_loadables_path",
    "module_path",
    "manpath",
    "mailpath",
    "readnullcmd",
    "nullcmd",
    "histfile",
    "zdotdir",
    "functions",
    "commands",
    "aliases",
    "galiases",
    "saliases",
    "bash_cmds",
    "bash_aliases",
    "execignore",
    "bash_source_path",
    "lang",
    "language",
    "lc_all",
    "lc_ctype",
    "lc_collate",
    "lc_messages",
    "lc_numeric",
    "lc_time",
    "histchars",
    "textdomain",
    "textdomaindir"
  ]),
  Zbt = new Set([
    "RANDOM",
    "SECONDS",
    "LINENO",
    "OPTIND",
    "MAILCHECK",
    "HISTCMD",
    "SRANDOM",
    "EPOCHSECONDS",
    "EPOCHREALTIME",
    "BASHPID",
    "BASH_MONOSECONDS",
    "BASH_TRAPSIG",
    "COLUMNS",
    "LINES",
    "SHLVL",
    "ERRNO",
    "TMOUT",
    "HISTSIZE",
    "SAVEHIST",
    "TRY_BLOCK_ERROR",
    "TRY_BLOCK_INTERRUPT",
    "KEYTIMEOUT",
    "LISTMAX",
    "LOGCHECK",
    "PERIOD",
    "FUNCNEST",
    "UID",
    "EUID",
    "GID",
    "EGID",
    "REPORTTIME",
    "REPORTMEMORY",
    "DIRSTACKSIZE",
    "BAUD",
    "ZLE_RPROMPT_INDENT",
    "MBEGIN",
    "MEND",
    "PPID",
    "ARGC",
    "ZSH_SUBSHELL",
    "TTYIDLE",
    "status"
  ]);
function yt(e, t) {
  if (!Zbt.has(e)) return !1;
  if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || mi(t)) return !0;
  if (!/^(0|[1-9][0-9]{0,17})$/.test(t)) return !0;
  return !1;
}
function het(e) {
  let t = e.toLowerCase();
  return xn.has(t) || t.startsWith("ld_") || t.startsWith("dyld_") || t.startsWith("bash_func_");
}
function NY(e) {
  return het(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || Zbt.has(e);
}
var T2e = new Set(["-p", "-d", "-n", "-N", "-t", "-u", "-i"]),
  AXn = new Set(["-t", "-n", "-N"]),
  Kpn = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/,
  yn = /^[A-Za-z_][A-Za-z0-9_]*\[/,
  _n = new Set(["-f", "-C", "-x", "-X", "-u"]),
  Se = /\/proc\/.*\/environ/,
  ee = /\n\s*#/;
function iWt(e, t) {
  let r = t?.sourceGlobRecord !== !1,
    i = null;
  for (let s of e) {
    let n = s.argv,
      o = !1;
    for (;;) {
      let c = n[0] === void 0 ? void 0 : y$(n[0]),
        d =
          c === "time" ||
          c === "nohup" ||
          c === "timeout" ||
          c === "nice" ||
          c === "stdbuf" ||
          c === "env" ||
          c === "command" ||
          c === "xargs"
            ? c
            : n[0];
      if (d === "time" || d === "nohup") {
        if (((n = n.slice(1)), n[0] !== void 0 && !/^[\w./~+-]+$/.test(n[0])))
          return { ok: !1, reason: `'${d} ${n[0]}' can't be checked before it runs` };
      } else if (d === "timeout") {
        let h = 1;
        while (h < n.length) {
          let m = n[h];
          if (m === "--foreground" || m === "--preserve-status" || m === "--verbose") h++;
          else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(m)) h++;
          else if (
            (m === "--kill-after" || m === "--signal") &&
            n[h + 1] &&
            /^[A-Za-z0-9_.+-]+$/.test(n[h + 1])
          )
            h += 2;
          else if (m.startsWith("--"))
            return { ok: !1, reason: `'timeout ${m}' can't be checked before it runs` };
          else if (m === "-v") h++;
          else if ((m === "-k" || m === "-s") && n[h + 1] && /^[A-Za-z0-9_.+-]+$/.test(n[h + 1]))
            h += 2;
          else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(m)) h++;
          else if (m.startsWith("-"))
            return { ok: !1, reason: `'timeout ${m}' can't be checked before it runs` };
          else break;
        }
        if (n[h] && /^\d+(?:\.\d+)?[smhd]?$/.test(n[h])) n = n.slice(h + 1);
        else if (n[h])
          return { ok: !1, reason: `timeout duration '${n[h]}' can't be checked before it runs` };
        else break;
      } else if (d === "nice")
        if (n[1] === "-n" && n[2] && /^-?\d+$/.test(n[2])) n = n.slice(3);
        else if (n[1] && /^-\d+$/.test(n[1])) n = n.slice(2);
        else if (n[1] && (/[$(`]/.test(n[1]) || mi(n[1])))
          return {
            ok: !1,
            reason: `nice argument '${n[1]}' contains expansion \u2014 cannot statically determine wrapped command`
          };
        else n = n.slice(1);
      else if (d === "env") {
        let h = 1;
        while (h < n.length) {
          let m = n[h];
          if (m.includes("=") && !m.startsWith("-")) h++;
          else if (m === "-i" || m === "-0" || m === "-v") h++;
          else if (m === "-u" && n[h + 1]) h += 2;
          else if (m.startsWith("-"))
            return { ok: !1, reason: `'env ${m}' can't be checked before it runs` };
          else break;
        }
        if (h < n.length) n = n.slice(h);
        else break;
      } else if (d === "stdbuf") {
        let h = 1;
        while (h < n.length) {
          let m = n[h];
          if (Tt.test(m) && n[h + 1]) h += 2;
          else if (Nt.test(m)) h++;
          else if (vt.test(m)) h++;
          else if (m.startsWith("-"))
            return { ok: !1, reason: `'stdbuf ${m}' can't be checked before it runs` };
          else break;
        }
        if (h > 1 && h < n.length) n = n.slice(h);
        else break;
      } else if (d === "command") {
        let h = 1,
          m = !1;
        while (h < n.length && n[h].startsWith("-") && n[h] !== "--") {
          let y = n[h];
          if (!/^-[pvV]+$/.test(y))
            return { ok: !1, reason: `'command ${y}' can't be checked before it runs` };
          if (y.includes("v") || y.includes("V")) m = !0;
          h++;
        }
        if (n[h] === "--") h++;
        if (m || h >= n.length) break;
        n = n.slice(h);
      } else if (n[0] === "builtin" || n[0] === "noglob") {
        let h = n[0] === "builtin" && n[1] === "--" ? 2 : 1;
        if (h < n.length) n = n.slice(h);
        else break;
      } else if (d === "xargs")
        if (n.length >= 2 && !n[1].startsWith("-")) ((n = n.slice(1)), (o = !0));
        else break;
      else break;
    }
    let u = n[0];
    if (u === void 0) continue;
    let l = y$(u);
    if (u === "")
      return { ok: !1, reason: "Empty command name \u2014 argv[0] may not reflect what bash runs" };
    if (mi(u))
      return { ok: !1, reason: "Command name is runtime-determined (placeholder argv[0])" };
    if (u.startsWith("-") || u.startsWith("|") || u.startsWith("&"))
      return { ok: !1, reason: "Command appears to be an incomplete fragment" };
    let f = so(ojr, l),
      g = l === "test" || l === "[" || l === "[[";
    if (f !== void 0)
      for (let c = 1; c < n.length; c++) {
        let d = n[c],
          h = n[c + 1];
        if (f.has(d) && h !== void 0 && (h.includes("[") || mi(h)))
          return {
            ok: !1,
            reason: `'${l} ${d}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
          };
        if (g) {
          if (d === "-t" && h !== void 0 && !Jbt.test(h))
            return {
              ok: !1,
              reason: `'${l} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))`
            };
          continue;
        }
        if (d.length > 2 && d[0] === "-" && d[1] !== "-" && !d.includes("[")) {
          for (let m of f)
            if (m.length === 2 && d.includes(m[1])) {
              let y = n[c + 1];
              if (y !== void 0 && (y.includes("[") || mi(y)))
                return {
                  ok: !1,
                  reason: `'${l} ${m}' (combined in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
                };
            }
        }
        if (d.length > 2 && d[0] === "-" && l !== "read")
          for (let m of f) {
            if (m.length !== 2) continue;
            let y = d.indexOf(m[1], 1);
            if (y === -1 || y === d.length - 1) continue;
            let p = d.slice(y + 1);
            if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(p) || mi(p))
              return {
                ok: !1,
                reason: `'${l} ${m}' (fused in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
              };
          }
      }
    if (g)
      for (let c = 2; c < n.length; c++) {
        if (!get.has(n[c])) continue;
        for (let d of [n[c - 1], n[c + 1]]) {
          if (d === void 0) continue;
          if (d.includes("[") || !Jbt.test(d))
            return {
              ok: !1,
              reason: `'${l} ... ${n[c]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))`
            };
        }
      }
    if (sjr.has(l)) {
      let c = !1;
      for (let d = 1; d < n.length; d++) {
        let h = n[d];
        if (c !== !1) {
          let m = c;
          if (((c = !1), m === "numeric" && !Kpn.test(h)))
            return {
              ok: !1,
              reason: `'read ${n[d - 1]}' operand '${h}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
            };
          if (
            m === "prompt" &&
            (yn.test(h) || (h[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(h)) || h.includes(a7))
          )
            return {
              ok: !1,
              reason: `'read ${n[d - 1]}' operand '${h}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)`
            };
          continue;
        }
        if (h[0] === "-") {
          if (l === "read") {
            if (AXn.has(h)) c = "numeric";
            else if (h === "-p") c = "prompt";
            else if (T2e.has(h)) c = "string";
            else if (h.length > 2)
              for (let m = 1; m < h.length; m++) {
                let y = "-" + h[m],
                  p = AXn.has(y);
                if (p || T2e.has(y)) {
                  if (m === h.length - 1) c = p ? "numeric" : y === "-p" ? "prompt" : "string";
                  else if (p && !Kpn.test(h.slice(m + 1)))
                    return {
                      ok: !1,
                      reason: `'read ${y}' (fused in '${h}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
                    };
                  else if (y === "-p") {
                    let x = h.slice(m + 1);
                    if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(x) || x.includes(a7))
                      return {
                        ok: !1,
                        reason: `'read -p' fused remainder '${x}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)`
                      };
                  }
                  break;
                }
              }
          }
          continue;
        }
        if (h.includes("[") || mi(h))
          return {
            ok: !1,
            reason: `'${l}' positional NAME '${h}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
          };
      }
    }
    if (Qbt.has(l)) {
      let c = l === "declare" || l === "typeset" || l === "local",
        d = c || l === "export" || l === "readonly",
        h = c || l === "readonly",
        m = !1,
        y = !1;
      for (let p = 1; p < n.length; p++) {
        let x = n[p];
        if (h) {
          if (/^[+-].*f/.test(x)) m = !0;
          if (/^[+-].*[uU]/.test(x)) y = !0;
          if (m && y)
            return {
              ok: !1,
              reason: `'${l}' with both -f and -u/-U flags (reached as plain command via wrapper/quote) \u2014 zsh marks a function for autoload (synonym of 'autoload')`
            };
        }
        if (c && Te.test(x))
          return {
            ok: !1,
            reason: `'${l}' with -n/-i/-a/-A/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) changes assignment eval semantics`
          };
        if (Ze.has(l) && /^[+-].*[iluEFLRZ]/.test(x))
          return {
            ok: !1,
            reason: `'${l}' with -i/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals, width-truncates, or case-converts the value`
          };
        if ((d || l === "private") && /^[+-].*m/.test(x))
          return {
            ok: !1,
            reason: `'${l}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable`
          };
        if (Ze.has(l) && /^[+-].*T/.test(x))
          return {
            ok: !1,
            reason: `'${l} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`
          };
        let b = x.includes("[") && /[$`]/.test(x);
        if (b || mi(x))
          return {
            ok: !1,
            reason: b
              ? `'${l}' operand '${Fye(x)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts`
              : `'${l}' operand '${Fye(x)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts`
          };
        if ((l === "float" || l === "integer") && !/^[+-]/.test(x))
          return {
            ok: !1,
            reason: `zsh '${l}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value`
          };
      }
    }
    if (l === "printf")
      for (let c = 1; c < n.length; c++) {
        let d = n[c],
          h = d.includes("[") && /[$`]/.test(d);
        if (h || mi(d))
          return {
            ok: !1,
            reason: h
              ? `printf operand '${Fye(d)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
              : `printf operand '${Fye(d)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
          };
      }
    if (l === "set")
      for (let c = 1; c < n.length; c++) {
        let d = n[c];
        if (d === "--") break;
        if (!/^[-+]/.test(d)) continue;
        for (let h = 1; h < d.length; h++) {
          let m = d[h];
          if (m === "o") {
            let y = h < d.length - 1 ? d.slice(h + 1) : n[c + 1];
            if (y !== void 0 && y !== "" && !Gpn.has(y.toLowerCase().replace(/[_-]/g, "")))
              return {
                ok: !1,
                reason: `'set -o/+o ${y}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis`
              };
            if (h === d.length - 1) c++;
            break;
          }
          if (m === "A") break;
          if (!zpn.has(m))
            return {
              ok: !1,
              reason: `'set ${d[0]}${m}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS`
            };
        }
      }
    if (l === "print" && n.some((c) => ijr.test(c)))
      return { ok: !1, reason: "What 'print -P' expands can't be checked before it runs" };
    if (l === "jobs")
      for (let c = 1; c < n.length; c++) {
        let d = n[c];
        if (/^[+-].*x/.test(d))
          return { ok: !1, reason: "What 'jobs -x' starts can't be checked before it runs" };
      }
    if (CXn.has(u))
      return {
        ok: !1,
        reason: `Shell keyword '${l}' as command name \u2014 tree-sitter mis-parse`
      };
    if (o) {
      if (l === "find" || l === "jq")
        return { ok: !1, reason: `What xargs adds to ${l} can't be checked before it runs` };
      if (HAe.has(l)) {
        let c = !1;
        for (let d = 1; d < n.length; d++) {
          let h = n[d];
          if (h === "--") {
            c = d + 1 < n.length;
            break;
          }
          if (h === "-" || !h.startsWith("-")) {
            c = !0;
            break;
          }
          if (!h.includes("=") && gn.test(h)) d++;
        }
        if (!c)
          return { ok: !1, reason: `The program xargs gives ${l} can't be checked before it runs` };
      }
    }
    if (l === "jq") {
      for (let c of n) {
        if (/\bsystem\s*\(/.test(c))
          return {
            ok: !1,
            reason: "jq command contains system() function which executes arbitrary commands"
          };
        if (/\b(?:include|import)\b/.test(c))
          return {
            ok: !1,
            reason:
              'jq command contains include/import \u2014 modules can load arbitrary .jq files via {search:"."} and call env or other builtins'
          };
      }
      if (
        n.some((c) =>
          /^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(c)
        )
      )
        return {
          ok: !1,
          reason:
            "jq command contains dangerous flags that could execute code or read arbitrary files"
        };
    }
    if (HAe.has(l)) {
      if (s.hasUnquotedGlob || (r && EXn(s)))
        return {
          ok: !1,
          reason:
            "awk command contains unquoted glob characters \u2014 could glob-expand to a planted program or flag before awk runs"
        };
      for (let c of n) {
        let d = sWt(c);
        if (d !== !1) return { ok: !1, reason: d };
        if (mi(c))
          return { ok: !1, reason: "awk is given text that can't be checked before it runs" };
      }
      if (
        n.some((c) => /^-[bcCghIkMnNOPrsStV]*[fEileDW]/.test(c) || /^--(?:fil|e|i|lo|s|de)/.test(c))
      )
        return { ok: !1, reason: "awk has an option that can't be checked before it runs" };
    }
    if (l === "find") {
      if (s.hasUnquotedGlob || (r && EXn(s)))
        return {
          ok: !1,
          reason:
            "find contains unquoted glob characters \u2014 could glob-expand to a dangerous action before find runs"
        };
      let c = !1;
      for (let d = 1; d < n.length; d++) {
        let h = n[d],
          m = c;
        if (((c = !1), Upn(h)))
          return {
            ok: !1,
            reason: `find with '${h}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule`
          };
        if (jpn(h))
          return {
            ok: !1,
            reason: `find option '${h}' is read differently by different versions of find \u2014 could hide a following action`
          };
        if (!m && Bpn(h)) {
          c = !0;
          continue;
        }
        if (!m && oWt(h)) {
          d++;
          continue;
        }
        if (mi(h))
          return {
            ok: !1,
            reason: "find argument is runtime-determined \u2014 could resolve to a dangerous action"
          };
        if (/[[\]*?]/.test(h))
          return {
            ok: !1,
            reason: `find argument '${h}' contains glob characters \u2014 could glob-expand to a dangerous action`
          };
      }
    }
    if (JHe.has(u)) return { ok: !1, reason: `Zsh builtin '${l}' can bypass security checks` };
    if (Lre.has(u))
      if (l === "fc" && !n.slice(1).some((c) => /^[+-].*[es]/.test(c)))
        ;
      else if (l === "compgen" && !n.slice(1).some((c) => /^[+-].*[CFW]/.test(c)))
        ;
      else return { ok: !1, reason: `'${l}' evaluates arguments as shell code` };
    if (l7.has(l) && n.length > 1)
      return { ok: !1, reason: `What '${l}' starts can't be checked before it runs` };
    for (let c of s.argv)
      if (c.includes("/proc/") && Se.test(c))
        return { ok: !1, reason: "Accesses /proc/*/environ which may expose secrets" };
    for (let c of s.redirects)
      if (c.target.includes("/proc/") && Se.test(c.target))
        return { ok: !1, reason: "Accesses /proc/*/environ which may expose secrets" };
    for (let c of s.argv)
      if (
        c.includes(`
`) &&
        ee.test(c)
      )
        i ??= {
          ok: !1,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside a quoted argument can hide arguments from path validation"
        };
    for (let c of s.envVars)
      if (
        c.value.includes(`
`) &&
        ee.test(c.value)
      )
        i ??= {
          ok: !1,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside an env var value can hide arguments from path validation"
        };
    for (let c of s.redirects)
      if (
        c.target.includes(`
`) &&
        ee.test(c.target)
      )
        i ??= {
          ok: !1,
          kind: "newline-hash",
          reason:
            "Newline followed by # inside a redirect target can hide arguments from path validation"
        };
  }
  if (i) return i;
  return { ok: !0 };
}
export {
  y$,
  qbt,
  Nye,
  N6s,
  J1r,
  VP,
  HY,
  $ye,
  met,
  a7,
  mi,
  Fye,
  bXn,
  P1o,
  I1o,
  O1o,
  Ybt,
  Q1r,
  SXn,
  Z1r,
  ejr,
  nWt,
  rWt,
  wXn,
  vXn,
  tjr,
  EXn,
  q1,
  njr,
  LY,
  kXn,
  $pn,
  rjr,
  TXn,
  Fpn,
  M1o,
  Xbt,
  k2e,
  JHe,
  Upn,
  oWt,
  Bpn,
  jpn,
  Lre,
  HAe,
  sWt,
  Uye,
  Wpn,
  ZL,
  QHe,
  l7,
  D1o,
  ojr,
  get,
  Jbt,
  sjr,
  ijr,
  Qbt,
  Gpn,
  zpn,
  Zbt,
  het,
  NY,
  T2e,
  AXn,
  Kpn,
  iWt
};

//# sourceMappingURL=chunk-gv3j9e36.js.map
