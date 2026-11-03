// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ew } from "./chunk-fgeq4nth.js";
import {
  $ye,
  met,
  Ybt,
  Q1r,
  Z1r,
  ejr,
  nWt,
  rWt,
  wXn,
  vXn,
  tjr,
  kXn,
  k2e
} from "./chunk-gv3j9e36.js";
function oun(e) {
  return Z1r.test(e) || z6n(e);
}
function z6n(e) {
  return Ybt.test(e) || Q1r.test(e) || ejr.test(e) || wXn.test(e) || vXn.test(e) || tjr.test(e);
}
function q7e(e) {
  return e.type === "ERROR" || e.children.some(q7e);
}
var T = new Set(["program", "list", "pipeline"]),
  E = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`
  ]),
  DO = 1e4,
  P = 65536,
  U = 16;
function nh(e) {
  if (!e) return [];
  if (e.length > DO) return [e];
  let t = Ew().parse(e);
  if (!t) return [e];
  let r = [],
    s = (i) => {
      if (E.has(i.type) || i.type === "comment") return;
      if (i.type === "redirected_statement") {
        for (let n of i.children) if (!n.type.endsWith("_redirect")) s(n);
        return;
      }
      if (T.has(i.type)) {
        for (let n of i.children) s(n);
        return;
      }
      r.push(i.text);
    };
  return (s(t.type === "ERROR" && t.children[0]?.type === "program" ? t.children[0] : t), r);
}
function ANo(e) {
  if (e.length > DO) return !0;
  let t = Ew().parse(e);
  if (t?.type !== "program") return !0;
  let r = t;
  while (r !== void 0 && (T.has(r.type) || r.type === "redirected_statement")) {
    let s = r.children.findLastIndex(
      (i) => !E.has(i.type) && i.type !== "comment" && !i.type.endsWith("_redirect")
    );
    if (r.type === "list" && r.children[s - 1]?.type === "&&") return !0;
    r = r.children[s];
  }
  return !1;
}
function r_t(e) {
  if (!e || e.length > DO) return [];
  let t = Ew().parse(e);
  return t ? MFr(t) : [];
}
function MFr(e) {
  return DFr(e) ?? [];
}
function DFr(e, { unparsedBodyOverruns: t = !1 } = {}) {
  let r = [],
    s = P,
    i = U,
    n = !1,
    o = (l) => {
      if (n) return;
      if (l.type === "command") (r.push(l.text), (s -= l.text.length));
      let f = HFr(l);
      if (f !== null) ((i -= 1), (s -= f.length));
      if (s < 0 || i < 0) {
        n = !0;
        return;
      }
      if (f !== null) {
        let u = Ew()?.parse(f);
        if (u) o(u);
        else if (t) n = !0;
        return;
      }
      for (let u of l.children) o(u);
    };
  return (o(e), n ? null : r);
}
function HFr(e) {
  if (e.type !== "expansion" && e.type !== "ERROR") return null;
  let t = e.text;
  if (!/^\$\{[ \t\n|]/.test(t)) return null;
  let r = t.endsWith("}") ? t.length - 1 : t.length;
  return t.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim();
}
function sun(e) {
  if (!e || e.length > DO) return null;
  let t = Ew().parse(e);
  if (!t) return null;
  return W(t);
}
function LFr(e) {
  if (!e || e.length > DO) return null;
  let t = Ew().parse(e);
  if (!t) return null;
  if (q7e(t) || kXn(t) !== null || v(t) || D(t) || NFr(e)) return null;
  if (e.includes("`")) return null;
  let r = W(t);
  if (r === null) return null;
  return r.some(X) ? null : r;
}
var O = /(?<!\$)\{|(?<=[$\\]\$)\{|\$'|\$"/,
  k = /[;&|<>\n]/,
  B = /(?:^|[ \t])[-/]/,
  F = /[()]/;
function H(e) {
  let t = e.search(/(?<!\$)\{|(?<=[$\\]\$)\{/);
  return t === -1 || /['"\\]/.test(e.slice(t));
}
function X(e) {
  if (O.test(e) && C(e)) return !0;
  let t = k2e(e),
    r = e.replace(/['"\\]/g, "");
  if (O.test(t) && (k.test(t) || F.test(t) || (B.test(r) && H(e)))) return !0;
  return Y.test(e) || G(e);
}
var Y = /\$\(|`|<\(|>\(|\$\[|\$\{[ \t\n|]/;
function G(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (t !== void 0) {
      if (t === '"' && s === "\\") r++;
      else if (s === t) t = void 0;
      continue;
    }
    if (s === "\\") {
      r++;
      continue;
    }
    if (s === "'" || s === '"') {
      t = s;
      continue;
    }
    if (s === "$" && e[r + 1] === '"') return !0;
  }
  return !1;
}
var Z = new Set(["file_descriptor", "number", ">&", "<&"]);
function D(e) {
  if (e.type.endsWith("_redirect")) {
    if (!q(e)) return !0;
  }
  return e.children.some(D);
}
function q(e) {
  let t = e.children.map((s) => s.type);
  if (!(
    (t.length === 2 && t[0] !== "file_descriptor") ||
    (t.length === 3 && t[0] === "file_descriptor")
  ))
    return !1;
  return e.children.every((s) => {
    if (!Z.has(s.type) || s.children.length !== 0) return !1;
    return s.type === "number" || s.type === "file_descriptor" ? /^\d+$/.test(s.text) : !0;
  });
}
function W(e) {
  let t = [],
    r = !0,
    s = (i) => {
      if (!r) return;
      if (E.has(i.type) || i.type === "comment") return;
      if (i.type === "redirected_statement") {
        for (let n of i.children) {
          if (n.type.endsWith("_redirect")) {
            if (x(n)) {
              r = !1;
              return;
            }
            continue;
          }
          s(n);
        }
        return;
      }
      if (T.has(i.type)) {
        for (let n of i.children) s(n);
        return;
      }
      if (i.type === "negated_command") {
        for (let n of i.children) if (n.type !== "!") s(n);
        return;
      }
      if (i.type === "command" || i.type === "variable_assignment") {
        if (x(i)) {
          r = !1;
          return;
        }
        t.push(i.text);
        return;
      }
      r = !1;
    };
  return (s(e), r ? t : null);
}
function x(e) {
  let t = e.type === "command" || e.type === "variable_assignment";
  for (let r of e.children) {
    if (r.type === "subshell" && t) return !0;
    if (x(r)) return !0;
  }
  return !1;
}
function NFr(e) {
  if (!e) return !1;
  if (e.length > DO) return !0;
  let t = Ew()?.parse(e);
  if (!t) return !0;
  let r = !1,
    s = (i) => {
      if (r) return;
      if (i.type === "expansion" && i.text.includes("(")) {
        r = !0;
        return;
      }
      for (let n of i.children) s(n);
    };
  return (s(t), r);
}
function DE(e) {
  if (!e || e.length > DO) return [];
  let t = Ew().parse(e);
  if (!t) return [];
  let r = $ye(t, null);
  if (!r) return [];
  return met(r);
}
var R = new Set([
  "command_substitution",
  "process_substitution",
  "expansion",
  "simple_expansion",
  "arithmetic_expansion"
]);
function S(e) {
  if (R.has(e.type)) return !0;
  return e.children.some(S);
}
var M = new Set([
  "command_substitution",
  "process_substitution",
  "arithmetic_expansion",
  "subshell"
]);
function v(e) {
  if (M.has(e.type)) return !0;
  return e.children.some(v);
}
var z = new Set(["ansi_c_string", "translated_string"]);
function N(e) {
  if (z.has(e.type)) return !0;
  return e.children.some(N);
}
var I = new Set([
  "<",
  ">",
  ">>",
  "<<",
  "<<-",
  "<<<",
  "<&",
  ">&",
  "&>",
  "&>>",
  ">|",
  ">&-",
  "<&-",
  "file_descriptor",
  "heredoc_start",
  "heredoc_body",
  "heredoc_content",
  "heredoc_end"
]);
function A(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter((n) => !I.has(n.type)),
      r = e.children.some((n) => n.type === ">&-" || n.type === "<&-"),
      s =
        !r &&
        e.children.some((n) => n.type === ">&" || n.type === "<&") &&
        t.some((n) => y(n).startsWith("-")),
      i = e.type === "heredoc_redirect" || r || s ? 0 : 1;
    if (t.length > i) return !0;
  }
  return e.children.some(A);
}
function b(e) {
  if (e.type === "heredoc_redirect") {
    let r = e.children.find((i) => i.type === "heredoc_start")?.text ?? "";
    if (
      !(
        r.length >= 2 &&
        ((r.startsWith("'") && r.endsWith("'")) || (r.startsWith('"') && r.endsWith('"')))
      ) ||
      r.includes("\\")
    )
      return !0;
  }
  return e.children.some(b);
}
function CNo(e, t) {
  if (!e) return !1;
  if (e.length > DO || oun(e)) return !0;
  let r = Ew().parse(e);
  if (!r || q7e(r)) return !0;
  let s = (o) =>
      A(o) ||
      b(o) ||
      S(o) ||
      N(o) ||
      (o.type !== "heredoc_redirect" && C(o.text)) ||
      (o.type !== "heredoc_redirect" &&
        !o.children.every((l) => I.has(l.type) || w(l, /\s/.test(l.text)))) ||
      (o.type !== "heredoc_redirect" &&
        o.children.some((l) => l.type === "word" && l.text.startsWith("="))),
    i = (o) => {
      if (R.has(o.type)) return;
      if (o.type === "command") return o;
      let l;
      for (let f of o.children) {
        if (f.type.endsWith("_redirect")) continue;
        let u = i(f);
        if (u) l = u;
      }
      return l;
    },
    n = (o) => {
      if (R.has(o.type)) return !1;
      if (o.type === "redirected_statement") {
        let l = o.children.find((u) => u.type === "command") ?? i(o),
          f = l ? t(l.text) : !0;
        for (let u of o.children)
          if (u.type.endsWith("_redirect")) {
            if (f && s(u)) return !0;
          } else if (n(u)) return !0;
        return !1;
      }
      if (o.type === "command") {
        let l = t(o.text);
        for (let f of o.children)
          if (f.type.endsWith("_redirect")) {
            if (l && s(f)) return !0;
          } else if (n(f)) return !0;
        return !1;
      }
      if (o.type.endsWith("_redirect")) return s(o);
      return o.children.some(n);
    };
  return n(r);
}
var K = new Set(["word", "string", "raw_string", "number"]),
  Q = /(?:^|[^\\])(?:\\\\)*[;|&<>]/,
  j = /(?:^|[^\\])(?:\\\\)*\\$/;
function w(e, t = !1) {
  if (e.type === "concatenation") return e.children.every((r) => w(r, t));
  if (e.type === "word") {
    if (nWt.test(e.text)) return !1;
    if (Q.test(e.text) || j.test(e.text)) return !1;
    if (t && rWt.test(e.text)) return !1;
    return !0;
  }
  if (e.type === "string" || e.type === "raw_string") {
    let r = e.type === "raw_string" ? "'" : '"';
    return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r);
  }
  return K.has(e.type);
}
function C(e) {
  let t = null,
    r = !1,
    s = !1;
  for (let i = 0; i < e.length; i++) {
    let n = e[i];
    if (t === "'") {
      if (n === "'") t = null;
      continue;
    }
    if (t === '"') {
      if (n === "\\" && i + 1 < e.length && '$`"\\'.includes(e[i + 1])) {
        i++;
        continue;
      }
      if (n === "`") return !0;
      if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return !0;
      if (n === '"') t = null;
      continue;
    }
    if (n === "\\") {
      i++;
      continue;
    }
    if (n === "`") return !0;
    if (n === "$" && (e[i + 1] === "'" || e[i + 1] === '"')) return !0;
    if (n === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return !0;
    if (n === "=" && e[i + 1] === "(") return !0;
    if (n === "*" || n === "?" || n === "[") return !0;
    if (n === "'" || n === '"') {
      t = n;
      continue;
    }
    if (
      n ===
      `
`
    )
      return !1;
    if (n === " " || n === "\t") {
      ((r = !1), (s = !1));
      continue;
    }
    if (n === "{") {
      r = !0;
      continue;
    }
    if (r && (n === "," || (n === "." && e[i + 1] === "."))) {
      s = !0;
      continue;
    }
    if (n === "}" && r && s) return !0;
  }
  return t !== null;
}
function RNo(e) {
  if (!e || e.length > DO) return !0;
  if (oun(e)) return !0;
  if (C(e)) return !0;
  let t = Ew().parse(e);
  if (!t || q7e(t)) return !0;
  let r = t.children.filter((i) => i.type !== "comment");
  if (
    r.length !== 1 ||
    (r[0].type !== "command" &&
      !(r[0].type === "redirected_statement" && r[0].children.some((i) => i.type === "command")))
  )
    return !0;
  if (S(t) || N(t) || A(t) || b(t)) return !0;
  let s = $ye(t, null);
  if (!s) return !0;
  for (let i of s.children) {
    if (i.type === "command_name" || i.type === "variable_assignment") continue;
    if (i.type.endsWith("_redirect")) continue;
    if (!w(i, /\s/.test(i.text))) return !0;
  }
  return !1;
}
function y(e) {
  switch (e.type) {
    case "raw_string":
      return e.text.slice(1, -1);
    case "string":
      return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r) =>
        r ===
        `
`
          ? ""
          : r
      );
    case "word":
      return e.text.replace(/\\([\s\S])/g, (t, r) =>
        r ===
        `
`
          ? ""
          : r
      );
    default:
      return e.text;
  }
}
function YTe(e) {
  let t = {
    commandWithoutRedirections: e,
    redirections: [],
    hasDangerousRedirection: !1,
    dangerousRedirectionReason: void 0
  };
  if (!e || e.length > DO) return t;
  let r = Ew().parse(e);
  if (!r) return t;
  let s = [],
    i = !1,
    n,
    o = (u) => {
      if (u.type === "file_redirect") {
        let d = null,
          g = !1,
          a = null,
          L = 0;
        for (let c of u.children)
          if (c.type === ">" || c.type === "&>" || c.type === ">|") d = ">";
          else if (c.type === ">>" || c.type === "&>>" || c.type === ">>|") d = ">>";
          else if (c.type === ">&") ((d = ">"), (g = !0));
          else if (c.type === "<&") {
            let _ = u.children.filter((p) => p !== c && p.type !== "file_descriptor");
            if (_.length > 1 || _.some((p) => y(p).startsWith("-"))) {
              if (((i = !0), n !== "network_device")) n = "shell_expansion";
            }
            return;
          } else if (c.type === ">&-" || c.type === "<&-") {
            if (u.children.filter((p) => p !== c && p.type !== "file_descriptor").length > 0) {
              if (((i = !0), n !== "network_device")) n = "shell_expansion";
            }
            return;
          } else if (c.type === "<") {
            let _ = u.children.filter((m) => m !== c && m.type !== "file_descriptor");
            if (_.length > 1) {
              if (((i = !0), n !== "network_device")) n = "shell_expansion";
              return;
            }
            let p = _[0];
            if (p) {
              let m = y(p);
              if (/^\/dev\/(tcp|udp)\//.test(m)) ((i = !0), (n = "network_device"));
            }
            return;
          } else if (c.type !== "file_descriptor") ((a = c), L++);
        if (!d || !a) return;
        if (L > 1) {
          if (((i = !0), n !== "network_device")) n = "shell_expansion";
          return;
        }
        if (g && y(a).startsWith("-")) {
          if (((i = !0), n !== "network_device")) n = "shell_expansion";
          return;
        }
        if (a.type === "number" && a.children.length === 0 && g) return;
        if (!(
          (a.type === "word" && a.children.length === 0) ||
          (a.type === "number" && a.children.length === 0) ||
          a.type === "raw_string" ||
          (a.type === "string" &&
            !a.children.some((c) => c.type !== "string_content" && c.type !== '"'))
        )) {
          if (((i = !0), n !== "network_device")) n = "shell_expansion";
          return;
        }
        let h = y(a);
        if (/^~|[*?[]/.test(h)) {
          if (((i = !0), n !== "network_device")) n = "shell_expansion";
          return;
        }
        if (h.startsWith("!") || h.startsWith("=")) {
          if (((i = !0), n !== "network_device")) n = "shell_expansion";
          return;
        }
        if (g && !/^[A-Za-z0-9./_-]+$/.test(h)) {
          if (((i = !0), n !== "network_device")) n = "shell_expansion";
          return;
        }
        if (/^\/dev\/(tcp|udp)\//.test(h)) {
          ((i = !0), (n = "network_device"));
          return;
        }
        s.push({ target: h, operator: d });
        return;
      }
      for (let d of u.children) o(d);
    };
  o(r);
  let l = [],
    f = (u) => {
      if (u.type === "comment") return;
      if (u.type === "redirected_statement") {
        for (let d of u.children) if (!d.type.endsWith("_redirect")) f(d);
        return;
      }
      if (T.has(u.type)) {
        for (let d of u.children) f(d);
        return;
      }
      l.push(u.text);
    };
  return (
    f(r.type === "ERROR" && r.children[0]?.type === "program" ? r.children[0] : r),
    {
      commandWithoutRedirections: l.length > 0 ? l.join(" ") : e,
      redirections: s,
      hasDangerousRedirection: i,
      dangerousRedirectionReason: n
    }
  );
}
export { oun, z6n, q7e, DO, nh, ANo, r_t, MFr, DFr, HFr, sun, LFr, NFr, DE, CNo, RNo, YTe };

//# sourceMappingURL=chunk-831dh4nz.js.map
