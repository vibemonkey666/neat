// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, L } from "./chunk-wrtp8qz8.js";
import { d, E, G } from "./chunk-fs43t96t.js";
import { cy, NYe } from "./chunk-h5gbmqm1.js";
import { te, Yf, t } from "./chunk-4kxznmzw.js";
import { I, Or, kl, zr } from "./chunk-a16y5hcz.js";
import { KT, dpn } from "./chunk-d5zj5299.js";
import {
  Fot,
  jqt,
  NTt,
  Fvn,
  RZ,
  wfe,
  q9,
  tar,
  kv,
  Vbe,
  jvn,
  nar,
  zTt,
  cQo,
  Vqt,
  g3r,
  B0,
  qqt,
  IZ,
  Gvn,
  Bot,
  E3r,
  k3r,
  sar,
  A3r,
  gQo,
  hQo,
  Yqt,
  m4e,
  qvn,
  K$,
  eP,
  Xqt
} from "./chunk-d54avynm.js";
import { Per, Ztt, _oe, vvt, pSi, VVo, qVo } from "./chunk-pbffp8rf.js";
import { Bh, vse } from "./chunk-5rw2zfa0.js";
import { br } from "./chunk-wejdb0zs.js";
import { No } from "./chunk-8r2m7vfp.js";
import { w2r, W2r } from "./chunk-gq77tz5k.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { oU, kO, sU, zK } from "./chunk-6h7ejyet.js";
import { Qme, sge, tEo, wCo, dsn, ZNt, tDr, nDr, e$t, rDr, a$t } from "./chunk-j0tbz6ra.js";
import { ty } from "./chunk-p56qmwgb.js";
import { lHe, X0o } from "./chunk-w35wpr7b.js";
import { Ype } from "./chunk-z0k4ntg4.js";
import { pIe } from "./chunk-n7dvjfwp.js";
import { W_s, c3e } from "./chunk-fydq2gm2.js";
import { kVs, Xyt } from "./chunk-5ns6j8e0.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, T, u, me, Ia } from "./chunk-0bqrj5ah.js";
import { lstat as On, readdir as je, readFile as Oe, stat as wt } from "fs/promises";
import * as g from "path";
function ge(e) {
  let n = /@ts-/i.test(e),
    s = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
  return n ? "@ts-" : s ? "framing" : void 0;
}
var A = (e, n, ...s) => e?.kind === n && s.includes(e.text);
function He(e) {
  let n = A(e, "punct", "{", "(", "["),
    s = A(e, "punct", "}", ")", "]");
  return n ? 1 : s ? -1 : 0;
}
var V = (e, n, s) => ({ kind: e, text: n, line: s });
var jt = (e, n, s) => {
  let r = e.indexOf("*/", n + 2),
    a = r !== -1,
    i = a ? r + 2 : e.length,
    l = e.slice(n, i),
    c = l.match(/\r\n|[\n\r\u2028\u2029]/g),
    m = s + (c?.length ?? 0),
    p = a ? ge(l) : "/*",
    y = { end: i, line: m };
  return p ? { ...y, token: V("stray", p, s) } : y;
};
var Ot = (e, n, s) => {
  let r = e.slice(n).search(/[\n\r\u2028\u2029]/),
    a = r === -1 ? e.length : n + r,
    i = e.slice(n, a).trim(),
    l = ge(i),
    m = i.startsWith("///") ? V("reference", i, s) : l ? V("stray", l, s) : void 0;
  return m ? { end: a, line: s, token: m } : { end: a, line: s };
};
var Be = (e, n, s) => {
  let r = e[n] ?? "",
    a = "",
    i = n + 1;
  while (i < e.length) {
    let c = e[i] ?? "",
      m = c === "\\" && i + 1 < e.length;
    if (
      c === r ||
      c ===
        `
` ||
      c === "\r"
    )
      break;
    ((a += m ? (e[i + 1] ?? "") : c), (i += m ? 2 : 1));
  }
  return e[i] === r
    ? { end: i + 1, line: s, token: V("string", a, s) }
    : { end: i, line: s, token: V("stray", r, s) };
};
var Lt = (e, n, s) => {
  let r = n + 1;
  while (r < e.length && /[\w$]/.test(e[r] ?? "")) r += 1;
  return { end: r, line: s, token: V("word", e.slice(n, r), s) };
};
function Ke(e, n) {
  let s = e[n] ?? "",
    r = e.slice(n, n + 2),
    a = { "//": Ot, "/*": jt },
    i = { "'": Be, '"': Be },
    l = /[\w$]/.test(s);
  return a[r] ?? i[s] ?? (l ? Lt : void 0);
}
function We(e) {
  let n = [],
    s = [],
    r = 0,
    a = 0,
    i = 1,
    l = !1,
    c = 1;
  while (a < e.length) {
    let m = e[a] ?? "",
      p =
        m ===
          `
` ||
        m === "\u2028" ||
        m === "\u2029" ||
        (m === "\r" &&
          e[a + 1] !==
            `
`);
    if (l) {
      let x = m === "\\",
        k = m === "$" && e[a + 1] === "{",
        R = m === "`";
      if (k) s.push(r);
      ((l = !k && !R), (i += p ? 1 : 0), (a += x || k ? 2 : 1));
      continue;
    }
    let y = Ke(e, a),
      h = m === "`",
      b = m === "}" && s.length > 0 && r === s.at(-1),
      w = /[\t\n\v\f\r \u2028\u2029]/.test(m),
      C = m === "/" || m === "\\",
      S = /[!-~]/.test(m) && !C,
      v = !w && !S,
      f = C ? m : "other";
    if (y) {
      let x = y(e, a, i);
      if (x.token) n.push(x.token);
      ((a = x.end), (i = x.line));
      continue;
    }
    if (h) (n.push(V("string", "`", i)), (c = i));
    if (v) n.push(V("stray", f, i));
    if (b) s.pop();
    if (!h && !b && !v && !w) (n.push(V("punct", m, i)), (r += m === "{" ? 1 : m === "}" ? -1 : 0));
    ((l = h || b), (i += p ? 1 : 0), (a += 1));
  }
  if (l || s.length > 0) n.push(V("stray", "`", c));
  return n;
}
var le = (e, n) => [e[n], e[n + 1], e[n + 2]];
function Ge(e, n) {
  let [s, r, a] = le(e, n),
    i = A(s, "word", "global") && A(r, "punct", "{"),
    l = A(s, "word", "module", "namespace") && r?.kind === "string",
    c = A(s, "word", "as") && A(r, "word", "namespace"),
    m = A(s, "word", "interface") && r?.kind === "word" && r.line !== s?.line,
    p = A(s, "word", "interface") && A(r, "word", "EngineInterface") && !A(a, "punct", "{");
  return i
    ? "`global { \u2026 }` augments the global scope"
    : l
      ? `a nested \`module '${r.text}'\` augments another module`
      : c
        ? "`as namespace` declares a global"
        : m
          ? "`interface` without its name on the same line"
          : p
            ? "`EngineInterface` takes members only, no `extends` or type parameters"
            : void 0;
}
function Ye(e) {
  let n = [],
    s = 0;
  for (let [r, a] of e.entries()) {
    let l = s === 0 && A(e[r - 1], "word", "declare") && A(a, "word", "module") ? void 0 : Ge(e, r);
    if (((s += He(a)), l !== void 0))
      n.push(`line ${a.line}: ${l}; the contract may only augment 'claude-code', at its top level`);
  }
  return n;
}
function ye(e, n, s) {
  let [r, a, i] = le(e, n);
  return (
    r?.kind === "word" &&
    r.text === "interface" &&
    a?.kind === "word" &&
    a.text === s &&
    a.line === r.line &&
    i?.kind === "punct" &&
    i.text === "{"
  );
}
function re(e, n) {
  let s = 0;
  for (let r = n; r < e.length; r += 1) {
    let a = e[r];
    if (!(a?.kind === "punct" && (a.text === "{" || a.text === "}"))) continue;
    if (((s += a.text === "{" ? 1 : -1), s === 0)) return r;
  }
  return e.length;
}
function ce(e, n) {
  let s = [],
    r = re(e, n),
    a = (c, ...m) => e[c]?.kind === "punct" && m.includes(e[c].text),
    i = 0,
    l = !0;
  for (let c = n + 1; c < r; c += 1) {
    let m = a(c, "{", "(", "["),
      p = a(c, "}", ")", "]"),
      y = i === 0 && a(c, ";", ","),
      h = (e[c - 1]?.line ?? 0) < (e[c]?.line ?? 0),
      w = e[c]?.text === "readonly" && e[c + 1]?.kind !== "punct" ? c + 1 : c,
      C = e[w],
      S = i === 0 && (l || h) && C !== void 0 && C.kind !== "punct" && a(w + 1, ":", "?", "(", "<");
    if (((i += m ? 1 : p ? -1 : 0), (l = y), S)) s.push(C.text);
  }
  return s;
}
function qe(e, n) {
  let s = new Set();
  for (let { start: r, end: a } of n)
    for (let i = r; i < a; i += 1) {
      if (!ye(e, i, "EngineInterface")) continue;
      let l = i + 2;
      for (let c of ce(e, l)) s.add(c);
    }
  return [...s];
}
var Ze = (e) =>
  e
    .split(/\r\n|[\n\r\u2028\u2029]/)
    .flatMap((n, s) =>
      /^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(n) ||
      /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(n)
        ? [
            `line ${s + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither`
          ]
        : []
    );
function Je(e) {
  let n = [],
    s =
      "reaches outside the file; the contract must be self-contained (no " +
      "import, export \u2026 from, require or reference)",
    r = 0;
  for (let [a, i] of e.entries()) {
    let l = e[a + 1],
      c = e[a + 2],
      m = (f) => i.kind === "word" && i.text === f,
      p = l?.kind === "punct" && l.text === "(" && c?.kind === "string",
      y =
        l?.kind === "string" ||
        l?.kind === "word" ||
        (l?.kind === "punct" && (l.text === "{" || l.text === "*")) ||
        p,
      h = i.line !== r,
      b = i.kind === "reference",
      w = m("import") && y,
      C = m("from") && h && l?.kind === "string",
      S = m("require") && h && p,
      v = b
        ? "a triple-slash reference"
        : w
          ? "`import`"
          : C
            ? `\`from '${l.text}'\``
            : S
              ? `\`require('${c.text}')\``
              : void 0;
    if (v === void 0) continue;
    ((r = i.line), n.push(`line ${i.line}: ${v} ${s}`));
  }
  return n;
}
var Xe = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
var Qe = (e) =>
  e
    .split(
      `
`
    )
    .flatMap((n, s) =>
      Xe.test(n.replace(/[\t\r]/g, ""))
        ? [
            `line ${s + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none`
          ]
        : []
    );
function et(e) {
  try {
    Per("contract.d.ts", e);
    return;
  } catch (n) {
    return `does not parse as TypeScript: ${d(n)}`;
  }
}
function tt(e, n) {
  let s = new Map(),
    r = (a, i) => e[a]?.kind === "punct" && e[a].text === i;
  for (let { start: a, end: i } of n)
    for (let l = a; l < i; l += 1) {
      if (!ye(e, l, "PluginState")) continue;
      let c = l + 2,
        m = re(e, c),
        p = new Set(ce(e, c)),
        y = 0;
      for (let h = c + 1; h < m; h += 1) {
        let b = e[h];
        if (
          y === 0 &&
          b !== void 0 &&
          b.kind !== "punct" &&
          p.has(b.text) &&
          r(h + 1, ":") &&
          r(h + 2, "{")
        ) {
          let v = s.get(b.text) ?? new Set();
          for (let f of ce(e, h + 2)) v.add(f);
          s.set(b.text, v);
        }
        let C = r(h, "{") || r(h, "(") || r(h, "["),
          S = r(h, "}") || r(h, ")") || r(h, "]");
        y += Number(C) - Number(S);
      }
    }
  return [...s].map(([a, i]) => ({ plugin: a, keys: [...i] }));
}
function nt(e) {
  let n = Per("contract.ts", e)
      .replace(/^\s*export\s*\{\s*\};?\s*$/m, "")
      .trim(),
    s = Or(n);
  return n === ""
    ? []
    : [`the contract holds code that would run (\`${s}\`); a contract is types only`];
}
var st = (e) =>
  e.flatMap((n, s) => {
    let r = e[s - 1],
      a = A(n, "word", "class", "const", "enum", "function", "let", "var"),
      i =
        r === void 0 ||
        r.line < n.line ||
        A(r, "punct", ";", "{", "}") ||
        A(r, "word", "abstract", "async", "declare", "default", "export"),
      l = A(e[s + 1], "punct", ":", "?", "(", "<");
    return a && i && !l
      ? [`line ${n.line}: \`${n.text}\` declares something that runs; a contract holds types only`]
      : [];
  });
var rt = {
  "/": "a `/` outside a comment or string (a regular expression or arithmetic)",
  "\\": "a `\\` outside a string",
  "`": "a template literal that never closes",
  "'": "a string that never closes on its line",
  '"': "a string that never closes on its line",
  "/*": "a comment that never closes",
  "@ts-": "a `@ts-` compiler pragma in a comment",
  framing: "a comment that imitates the roll-up's banner or trailer",
  other: "a character outside plain ASCII (or a control character) in code"
};
var ot = (e) =>
  e
    .filter((n) => n.kind === "stray")
    .map(
      (n) =>
        `line ${n.line}: ` +
        (rt[n.text] ?? `\`${n.text}\``) +
        ": a type contract never holds one, so the check refuses it rather than read past it"
    );
var pe = "claude-code";
function at(e, n) {
  let [s, r, a] = le(e, n),
    [, , i] = le(e, n + 1),
    l =
      A(s, "word", "declare") &&
      A(r, "word", "module") &&
      a?.kind === "string" &&
      s?.line === r?.line &&
      r?.line === a.line &&
      A(i, "punct", "{"),
    c = l && a.text !== pe,
    m = A(s, "word", "declare") && !l,
    p = A(s, "word", "export") && !A(r, "word", "type", "interface"),
    y = A(s, "word", "abstract", "async", "default", "module", "namespace"),
    h = A(s, "word", "type", "interface") && !A(e[n - 1], "word", "export", "import");
  return c
    ? `augments module '${a.text}'; the contract may only augment '${pe}'`
    : m
      ? `\`declare\` at the top level opens only \`declare module '${pe}' { \u2026 }\`, its three words on one line`
      : p
        ? "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else"
        : y
          ? `\`${s?.text}\` at the top level: a contract holds type exports and \`declare module '${pe}'\` blocks only`
          : h
            ? `a top-level \`${s?.text}\` without \`export\` would be global in a dependent's program; export it`
            : void 0;
}
function it(e) {
  let n = [],
    s = [],
    r = 0,
    a = 0;
  while (a < e.length) {
    let [i, l, c] = le(e, a),
      p = r === 0 && i?.kind === "word" ? at(e, a) : void 0,
      y = p === void 0 || p.startsWith("augments"),
      h = r === 0 && y && A(i, "word", "declare") && A(l, "word", "module") && c?.kind === "string",
      b = a + 2;
    if (((r += He(i)), p !== void 0)) n.push(`line ${i?.line}: ${p}`);
    if (!h) {
      a += 1;
      continue;
    }
    let w = re(e, b + 1);
    if (w === e.length)
      n.push(
        `line ${i?.line}: \`declare module\` never closes: the text does not lex as a type contract, so the check refuses it`
      );
    (s.push({ start: b + 2, end: w }), (a = w + 1));
  }
  return { problems: n, blocks: s };
}
function lt(e) {
  let n = et(e);
  if (n !== void 0) return { problems: [n], nouns: [], state: [] };
  let s = We(e),
    r = s.filter((l) => l.kind !== "reference"),
    { problems: a, blocks: i } = it(r);
  return {
    problems: [...Qe(e), ...ot(s), ...Ze(e), ...Je(s), ...a, ...st(r), ...nt(e), ...Ye(r)],
    nouns: qe(r, i),
    state: tt(r, i)
  };
}
import { isAbsolute as fn, relative as hn, resolve as gn } from "path";
var de = (...e) => ({ kind: "refused", problems: e.map(zr) });
async function ke(e, n, s) {
  let r = e ?? ZNt,
    a = gn(n, r),
    i = hn(n, a);
  if (i.startsWith("..") || fn(i)) return de(`${r} leaves the plugin's folder`);
  let c = (v) => de(`${r}: ${nDr(s, a, v)}`),
    m = await Ztt(a, n, s).then(
      (v) => v,
      (v) => (e === void 0 && tDr(v) ? void 0 : c(v))
    );
  if (m === void 0 || "kind" in m) return m;
  if (m.size > e$t) return de(`${r} is over ${e$t} bytes and was not read`);
  let h = await rDr(m.real).then((v) => v, c);
  if (typeof h !== "string") return h;
  let { problems: b, nouns: w, state: C } = lt(h);
  return b.length === 0 ? { kind: "read", text: h, nouns: w, state: C } : de(...b);
}
function bn({ names: e, owner: n, declared: s, others: r, contract: a, refusal: i }) {
  let l = new Map();
  for (let { plugin: p, keys: y } of [...s, ...(r ?? [])]) {
    let h = l.get(p) ?? new Set();
    (y.forEach((b) => h.add(b)), l.set(p, h));
  }
  let c = [],
    m = new Set();
  for (let { plugin: p, key: y } of e.writes)
    if (p !== n)
      c.push(
        `$.state.set refers to ${vvt({ plugin: p, key: y })}, which ${p} owns: only a value's owner writes it (to change what is written, hook ${p}'s state.set and rewrite e.value)`
      );
  for (let { plugin: p, key: y } of [...e.reads, ...e.writes]) {
    let h = p === n,
      b = h || r !== void 0,
      w = vvt({ plugin: p, key: y });
    if (!b) {
      m.add(w);
      continue;
    }
    let C = l.get(p)?.has(y) === !0,
      S = h ? (a ?? "the manifest's types contract") : "no enabled plugin's contract",
      v = i ?? `${S} must name it in interface PluginState { ${p}: { ${y}: ... } }`,
      f = h ? `${w} is not declared: ${v}` : `${w} is not declared: ${S} names it in PluginState`;
    if (!C && !c.includes(f)) c.push(f);
  }
  return { problems: c, unchecked: [...m] };
}
var Ce = ["monitors", "themes"],
  xn = [
    { key: "commands", recordPathProperty: "source" },
    { key: "hooks", bareStringIndexed: !0, jsonFile: !0 },
    { key: "agents", bareStringIndexed: !0 },
    { key: "skills", bareStringIndexed: !0 },
    { key: "outputStyles" },
    { key: "themes" },
    { key: "monitors", jsonFile: !0 },
    { key: "lspServers", jsonFile: !0 },
    { key: "workflows", bareStringIndexed: !0 },
    { key: "types", bareStringOnly: !0 },
    {
      key: "mcpServers",
      jsonFile: !0,
      acceptsUrl: !0,
      missingConsequence: (e) =>
        e.endsWith(".json")
          ? "The plugin loader skips a missing MCP servers file without reporting it, so none of its servers will load."
          : void 0
    }
  ];
function pt(e) {
  let n = H(e.experimental) ? e.experimental : void 0,
    s = [];
  for (let r of xn) {
    let a = e[r.key],
      i = r.key,
      l = n !== void 0 && Ce.includes(r.key) && Object.hasOwn(n, r.key) ? n[r.key] : void 0;
    if (l != null) ((a = l), (i = `experimental.${r.key}`));
    let c = [];
    if (r.bareStringOnly) c.push([i, a]);
    else if (Array.isArray(a)) for (let [m, p] of a.entries()) c.push([`${i}[${m}]`, p]);
    else if (!H(a)) c.push([r.bareStringIndexed ? `${i}[0]` : i, a]);
    else if (r.recordPathProperty !== void 0) {
      for (let [m, p] of Object.entries(a))
        if (H(p)) c.push([`${i}.${m}.${r.recordPathProperty}`, p[r.recordPathProperty]]);
    }
    for (let [m, p] of c)
      if (typeof p === "string" && !(r.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(p)))
        s.push({ spec: r, field: m, relPath: p });
  }
  return s;
}
var pbr = ["privacyPolicyUrl", "privacy_policy", "privacyPolicy"],
  cdo = ["supportUrl", "support", "bugs"],
  udo = ["termsOfServiceUrl", "terms_of_service"],
  fdo = ["documentationUrl", "docs"],
  dt = new Set(["icon", "screenshots", "classification", ...pbr, ...cdo, ...udo, ...fdo]);
var Tn = ["CLAUDE_PLUGIN_ROOT", "CLAUDE_PLUGIN_DATA", "CLAUDE_PROJECT_DIR"];
function ut(e) {
  let n = [];
  for (let [s, r] of Object.entries(e))
    for (let a of r ?? [])
      for (let i of a.hooks) {
        if (i.type !== "command" || i.args !== void 0 || i.shell === "powershell") continue;
        let l = Sn(i.command);
        if (l.length > 0) n.push({ event: s, command: i.command, placeholders: l });
      }
  return n;
}
function Sn(e) {
  let n = new Set(),
    s = !1,
    r = !1;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    if (!s && i === "\\") {
      a++;
      continue;
    }
    if (i === "'" && !r) {
      s = !s;
      continue;
    }
    if (i === '"' && !s) {
      r = !r;
      continue;
    }
    if (i !== "$" || s || r) continue;
    for (let l of Tn) {
      let c = e.startsWith(`{${l}}`, a + 1),
        m = e.startsWith(l, a + 1) && !/[A-Za-z0-9_]/.test(e.charAt(a + 1 + l.length));
      if (c || m) {
        n.add(`\${${l}}`);
        break;
      }
    }
  }
  return [...n];
}
import { resolve as En } from "path";
import { resolve as ft } from "path";
import { sep as mt } from "path";
var Re = (e) => (e.endsWith(mt) ? e.slice(0, -mt.length) : e);
var nJt = (e, n) => Re(ft(e)) === Re(ft(n));
function we(e, n, s) {
  let { source: r } = e;
  return typeof r === "string" && nJt(En(n, r), s);
}
function mbr(e, n, s) {
  return typeof e.source === "string" ? we(e, n, s.root) : e.name === s.name;
}
import { readFile as Mn } from "fs/promises";
async function gbr(e) {
  try {
    let n = qvn().safeParse(te(No(await Mn(e, { encoding: "utf-8" }))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}
var Ln = new Set([
    "category",
    "source",
    "tags",
    "strict",
    "id",
    "relevance",
    "headers",
    "headersHelper"
  ]),
  bt = new Map([
    ["publisher", "a VS Code/Cursor extension manifest"],
    ["engines", "a VS Code/Cursor extension manifest"],
    ["categories", "a VS Code/Cursor extension manifest"],
    ["icon", "a VS Code/Cursor extension manifest"],
    ["contributes", "a VS Code/Cursor extension manifest"],
    ["activationEvents", "a VS Code/Cursor extension manifest"],
    ["preview", "a VS Code/Cursor extension manifest"],
    ["main", "an npm package.json"],
    ["type", "an npm package.json"],
    ["files", "an npm package.json"],
    ["bin", "an npm package.json"],
    ["scripts", "an npm package.json"],
    ["private", "an npm package.json"],
    ["bugs", "an npm package.json"],
    ["contributors", "an npm package.json"],
    ["dxt_version", "an MCPB/DXT manifest"],
    ["mcpb_version", "an MCPB/DXT manifest"],
    ["user_config", "an MCPB/DXT manifest"],
    ["compatibility", "an MCPB/DXT manifest"],
    ["server", "an MCP server manifest"],
    ["tools", "an MCP server manifest"],
    ["prompts", "an MCP server manifest"],
    ["resources", "an MCP server manifest"],
    ["logo", "manifests across many tools"],
    ["readme", "manifests across many tools"],
    ["changelog", "manifests across many tools"],
    ["support", "manifests across many tools"],
    ["privacy_policy", "manifests across many tools"],
    ["privacy_policies", "manifests across many tools"],
    ["terms_of_service", "manifests across many tools"],
    ["_comment", "manifests across many tools"],
    ["$id", "a JSON Schema document"],
    ["$comment", "a JSON Schema document"]
  ]),
  In = new Map([["user_config", "userConfig"]]),
  vt = new Set(["themes", "monitors", "outputStyles", "evals", "syntaxHighlighting"]),
  Fn = new Set(wCo.map(ty));
function j_s(e, n) {
  let s = e.every((a) => a.success),
    r = e.some((a) => a.warnings.length > 0);
  return { noErrors: s, hasWarnings: r, allSuccess: n.strict ? s && !r : s };
}
function Z(e) {
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function Dn(e) {
  let n = g.basename(e),
    s = g.basename(g.dirname(e));
  if (n === "plugin.json") return "plugin";
  if (n === "marketplace.json") return "marketplace";
  if (s === ".claude-plugin") return "plugin";
  return "unknown";
}
function fe(e) {
  return e.issues.map((n) => ({
    path: n.path.join(".") || "root",
    message: n.message,
    code: n.code
  }));
}
function zn(e, n) {
  if (bt.has(e)) return;
  let s = e.length <= 3 ? 1 : 2,
    r = e.toLowerCase(),
    a,
    i = s + 1;
  for (let l of n) {
    if (Math.abs(l.length - e.length) > s) continue;
    if (l.toLowerCase() === r) return l;
    let c = vse(e, l, s);
    if (c < i) ((i = c), (a = l));
  }
  return a;
}
function Vn(e, n, s) {
  if (s?.has(e))
    return (
      `Field '${e}' belongs in the marketplace entry (marketplace.json), ` +
      "not plugin.json. It's harmless here but unused \u2014 Claude Code " +
      "ignores it at load time."
    );
  let r = zn(e, n);
  if (r)
    return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
  let a = In.get(e);
  if (a && n.has(a))
    return (
      `Field '${e}' is the cross-tool spelling of Claude Code's '${a}'. Rename it to '${a}' for Claude Code to read it (the option ` +
      "shapes differ slightly \u2014 re-run validate after renaming to check). " +
      "As-is, Claude Code ignores it at load time."
    );
  let i = bt.get(e);
  if (i)
    return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
  return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function Q(e, n, s, r, a, i) {
  for (let l of Object.keys(e)) {
    if (n.has(l) || i?.has(l)) continue;
    r.push({ path: s ? `${s}.${l}` : l, message: Vn(l, n, a) });
  }
}
function Te(e) {
  let n = e.replace(/^[a-zA-Z]:/, "");
  return cy(n) || NYe(n);
}
function Ae(e, n, s, r) {
  if (Te(e))
    s.push({
      path: n,
      message: r
        ? `Path contains "..": ${e}. ${r}`
        : `Path contains ".." which could be a path traversal attempt: ${e}`
    });
}
function Hn(e) {
  let n = e.replace(/^(\.\.\/)+/, "");
  return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${n !== e ? `./${n}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function rJt(e, n = { kind: "alone" }) {
  return ie(await Bn(e, n));
}
async function Bn(e, n) {
  let s = g.resolve(e),
    r;
  try {
    r = await Oe(s, { encoding: "utf-8" });
  } catch (a) {
    let i = E(a),
      l;
    if (i === "ENOENT") l = `File not found: ${s}`;
    else if (i === "EISDIR") l = `Path is not a file: ${s}`;
    else l = `Failed to read file: ${d(a)}`;
    return {
      success: !1,
      errors: [{ path: "file", message: l, code: i }],
      warnings: [],
      filePath: s,
      fileType: "plugin"
    };
  }
  return $t(s, r, n);
}
async function $t(e, n, s) {
  let r = [],
    a = [],
    i = [],
    l;
  try {
    l = te(No(n));
  } catch (p) {
    return {
      success: !1,
      errors: [{ path: "json", message: `Invalid JSON syntax: ${d(p)}` }],
      warnings: [],
      filePath: e,
      fileType: "plugin"
    };
  }
  let c = Qme(l, "plugin-json", {
    pluginName: g.basename(g.dirname(g.dirname(e))),
    manifestPath: e
  });
  if (!c.ok) r.push(...c.errors.map((p) => ({ ...p, path: p.path || "root" })));
  else a.push(...c.hookNotes.map((p) => ({ path: "hooks", message: `${p} at runtime` })));
  if (l && typeof l === "object") {
    let p = c.rawCandidate ?? l,
      y = g.dirname(e),
      h = g.basename(y) === ".claude-plugin" ? g.dirname(y) : y,
      b = async (w, C, S = "The runtime loader will report this as a load failure.") => {
        if ((Ae(w, C, r), Te(w) || g.isAbsolute(w) || /^[a-zA-Z]:/.test(w))) return;
        try {
          return await wt(g.resolve(h, w));
        } catch (v) {
          let f = E(v);
          r.push({
            path: C,
            message: `Path not found: ${w}${f && f !== "ENOENT" ? ` (${f})` : ""}. ${S}`
          });
          return;
        }
      };
    for (let { spec: w, field: C, relPath: S } of pt(p)) {
      let v = await b(S, C, w.missingConsequence?.(S));
      if (v === void 0) continue;
      if (w.key === "skills" && !v.isDirectory()) {
        let f = g.dirname(S),
          x =
            g.basename(S).toLowerCase() === "skill.md"
              ? f === "."
                ? " \u2014 point to the plugin root '.' instead"
                : ` \u2014 point to the parent directory '${f}' instead`
              : "";
        r.push({
          path: C,
          message: `Path is a file; skills entries must be directories containing SKILL.md${x}: ${S}`
        });
      }
      if (w.jsonFile && S.endsWith(".json") && v.isDirectory())
        r.push({
          path: C,
          message: `Path is a directory; ${w.key} must point to a JSON file: ${S}`
        });
      if (w.key === "types") {
        let f = gt(await ke(S, h, g.basename(h)), { relPath: S, field: C });
        (r.push(...f.errors), i.push(...f.notes));
      }
    }
    if (p.types === void 0) {
      let w = await ke(void 0, h, g.basename(h));
      if (w?.kind === "read") i.push(...gt(w, { relPath: ZNt, field: "types" }).notes);
    }
    if (p.mcpServers !== void 0) {
      let w = Array.isArray(p.mcpServers) ? p.mcpServers : [p.mcpServers],
        C;
      for (let [S, v] of w.entries()) {
        let f = Array.isArray(p.mcpServers) ? `mcpServers[${S}]` : "mcpServers";
        if (H(v)) {
          C ??= await ps(p, e);
          for (let [x, k] of Object.entries(v)) {
            let R = Tt(`${f}.${wh(x, 64)}`, k, C(x));
            (r.push(...R.errors), a.push(...R.warnings));
          }
        }
      }
    }
  }
  if (H(l)) {
    let p = l,
      y = c.rawCandidate ?? p;
    if ((Q(y, new Set(Object.keys(IZ().shape)), "", a, Ln, dt), "capabilities" in y)) {
      let h = a.findIndex((w) => w.path === "capabilities"),
        b = {
          path: "capabilities",
          message:
            "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field."
        };
      if (h === -1) a.push(b);
      else a[h] = b;
    }
    for (let h of Ce)
      if (h in p)
        a.push({
          path: h,
          message: `'${h}' is an experimental component; declare it under 'experimental.${h}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`
        });
    if ("experimental" in p)
      if (H(p.experimental)) {
        let h = p.experimental;
        Q(h, vt, "experimental", a);
      } else
        a.push({
          path: "experimental",
          message: `'experimental' must be an object containing component declarations; got ${Z(p.experimental)}. It will be ignored at load time.`
        });
    if ("metadata" in y && !H(y.metadata))
      a.push({
        path: "metadata",
        message: `'metadata' must be a free-form object; got ${Z(y.metadata)}. It will be ignored at load time.`
      });
    if ("binaries" in p)
      if (H(p.binaries)) {
        let h = qqt(p.binaries) ?? {},
          b = 0;
        for (let [C, S] of Object.entries(p.binaries)) {
          if (
            zTt.test(C) &&
            typeof S === "object" &&
            S !== null &&
            typeof S.sha256 === "string" &&
            cQo.test(S.sha256)
          ) {
            b++;
            continue;
          }
          if (!Object.hasOwn(h, C))
            a.push({
              path: `binaries.${C}`,
              message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(zTt)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`
            });
        }
        if (b > g3r)
          a.push({
            path: "binaries",
            message: `${b} valid binaries entries declared, but the install hook processes at most ${g3r}; the rest are dropped entirely.`
          });
        let w = Object.keys(h).length;
        if (w > Vqt)
          a.push({
            path: "binaries",
            message: `${w} valid binaries entries declared, but only the first ${Vqt} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`
          });
      } else
        a.push({
          path: "binaries",
          message: `'binaries' must be an object mapping basenames to { sha256 }; got ${Z(p.binaries)}. It will be ignored at install time.`
        });
  }
  let m = c.manifest;
  if (m) {
    let p = m;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.name)) {
      let b = "Claude Code accepts it, but the";
      if (Xqt.test(p.name))
        b =
          "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The";
      else if (!K$(p.name))
        b =
          "Claude Code cannot install it from a marketplace that lists it under this name, and the";
      a.push({
        path: "name",
        message:
          `Plugin name "${p.name}" is not kebab-case. ${b} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` +
          ue(p.name)
      });
    }
    let h =
      s.kind === "alone" || (s.kind === "entry" && s.entryName !== p.name) ? c3e(p.name) : void 0;
    if (h)
      (h.severity === "error" ? r : a).push({
        path: "name",
        message: s.kind === "alone" ? `${h.message} ${W_s}` : h.message
      });
    if (!p.version)
      a.push({
        path: "version",
        message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
      });
    if (!p.description)
      a.push({
        path: "description",
        message:
          "No description provided. Adding a description helps users understand what your plugin does"
      });
    if (!p.author)
      a.push({
        path: "author",
        message:
          "No author information provided. Consider adding author details for plugin attribution"
      });
  }
  return {
    success: r.length === 0,
    errors: r,
    warnings: a,
    filePath: e,
    fileType: "plugin",
    ...(i.length > 0 && { notes: i })
  };
}
var ht = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/,
  Un = new Set(["org", "org-provisioned", "unknown"]),
  $e = "UNRECORDABLE_NAME",
  hbr =
    'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';
function ue(e) {
  return wh(e, e.length) === e ? "" : " The name holds a character that is not shown here.";
}
async function Ee(e) {
  return ie(await Kn(e));
}
async function Kn(e) {
  let n = [],
    s = [],
    r = g.resolve(e),
    a;
  try {
    a = await Oe(r, { encoding: "utf-8" });
  } catch (f) {
    let x = E(f),
      k;
    if (x === "ENOENT") k = `File not found: ${r}`;
    else if (x === "EISDIR") k = `Path is not a file: ${r}`;
    else k = `Failed to read file: ${d(f)}`;
    return {
      success: !1,
      errors: [{ path: "file", message: k, code: x }],
      warnings: [],
      filePath: r,
      fileType: "marketplace"
    };
  }
  let i;
  try {
    i = te(No(a));
  } catch (f) {
    return {
      success: !1,
      errors: [{ path: "json", message: `Invalid JSON syntax: ${d(f)}` }],
      warnings: [],
      filePath: r,
      fileType: "marketplace"
    };
  }
  let l = [],
    c = H(i) && H(i.metadata) ? i.metadata.pluginRoot : void 0,
    m = gQo(c),
    p = H(i) && typeof i.name === "string" && jvn(i.name);
  if (i && typeof i === "object") {
    let f = i;
    if (Array.isArray(f.plugins))
      ((l = f.plugins),
        f.plugins.forEach((x, k) => {
          if (x && typeof x === "object" && "source" in x) {
            let R = x.source;
            if (typeof R === "string") Ae(R, `plugins[${k}].source`, n, Hn(R));
            if (A3r(R) && m === void 0)
              n.push({
                path: `plugins[${k}].source`,
                message:
                  c === void 0
                    ? `Bare source name "${R}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.`
                    : typeof c === "string"
                      ? `Bare source name "${R}" cannot resolve: metadata.pluginRoot ("${c}") must be a relative path inside the marketplace (e.g. "./plugins").`
                      : `Bare source name "${R}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`
              });
            if (R && typeof R === "object" && "path" in R && typeof R.path === "string")
              Ae(R.path, `plugins[${k}].source.path`, n);
          }
        }));
  }
  let y = k3r()
      .extend({
        topic: o().min(1).max(64).optional(),
        signals: E3r()
          .extend({
            cli: T(o().min(1).max(64)).max(10).optional(),
            hosts: T(
              o()
                .min(1)
                .max(128)
                .refine(
                  (f) => /^[a-z0-9.-]+$/.test(f),
                  "must be a lowercase bare hostname (no scheme, port, or path)"
                )
            )
              .max(20)
              .optional(),
            filesRead: T(
              o()
                .min(1)
                .max(256)
                .refine(
                  (f) => !f.includes("\\"),
                  'must use forward slashes (e.g. "**/*.tf"), not backslashes'
                )
            )
              .max(10)
              .optional(),
            manifestDeps: T(
              u({
                file: o().min(1).max(256).refine(Gvn, "must be a valid regular expression"),
                pattern: o().min(1).max(256).refine(Gvn, "must be a valid regular expression")
              })
            )
              .min(1)
              .max(10)
              .optional(),
            cwd: T(
              o()
                .min(1)
                .max(256)
                .refine(
                  (f) => !f.includes("\\"),
                  'must use forward slashes (e.g. "Engine/Source/**"), not backslashes'
                )
            )
              .max(10)
              .optional()
          })
          .refine(
            (f) =>
              (f.cli?.length ?? 0) > 0 ||
              (f.hosts?.length ?? 0) > 0 ||
              (f.filesRead?.length ?? 0) > 0 ||
              (f.manifestDeps?.length ?? 0) > 0 ||
              (f.cwd?.length ?? 0) > 0,
            "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)"
          )
      })
      .optional(),
    h = sar()
      .extend({ relevance: Ia((f) => (H(f) ? f : void 0), y) })
      .refine((f) => typeof f.source === "string" || f.source.source !== "unsupported", {
        message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored"
      }),
    w = m4e()
      .extend({ plugins: T(h), renames: me(o(), o().nullable()).optional() })
      .safeParse(Yqt(i));
  if (!w.success) n.push(...fe(w.error));
  if (w.success && w.data.renames) {
    let f = new Set(w.data.plugins.map((x) => x.name));
    for (let x of Object.keys(w.data.renames)) {
      let k = a$t(x, w.data.renames, f);
      if (k?.kind === "unresolved")
        n.push({
          path: `renames.${x}`,
          message: `chain does not resolve (${k.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`
        });
      else if (k?.kind === "renamed" && !eP().safeParse(`${k.to}@placeholder`).success)
        n.push({
          path: `renames.${x}`,
          message: `target "${k.to}" is not a valid plugin name (PluginIdSchema)`
        });
    }
  }
  if (H(i)) {
    let f = i;
    if ((Q(f, new Set(Object.keys(m4e().shape)), "", s), typeof f.name === "string" && f.name)) {
      let k = K$(f.name);
      if (!k)
        n.push({
          path: "name",
          code: $e,
          message:
            `Claude Code cannot install plugins from marketplace "${wh(f.name, 64)}". ${hbr} Change the marketplace's "name".` +
            ue(f.name)
        });
      if (Un.has(f.name.toLowerCase()))
        s.push({
          path: "name",
          message: `Marketplace name "${f.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`
        });
      else if (!ht.test(f.name))
        s.push({
          path: "name",
          message:
            `Marketplace name "${f.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` +
            (k ? "Claude Code accepts it, but the " : "The ") +
            "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace." +
            ue(f.name)
        });
    }
    let x = f.metadata;
    if (H(x)) Q(x, new Set(Object.keys(m4e().shape.metadata.unwrap().shape)), "metadata", s);
    if (Array.isArray(f.plugins)) {
      let k = new Set(Object.keys(sar().shape)),
        R = new Set(Object.keys(k3r().shape)),
        j = new Set(Object.keys(E3r().shape));
      f.plugins.forEach((N, _) => {
        if (!H(N)) return;
        let M = N;
        if ((Q(M, k, `plugins[${_}]`, s), typeof M.name === "string" && M.name)) {
          let B = K$(M.name);
          if (!B)
            n.push({
              path: `plugins[${_}].name`,
              code: $e,
              message:
                `Claude Code cannot install plugin "${wh(M.name, 64)}". ${hbr} Change this entry's "name".` +
                ue(M.name)
            });
          if (!ht.test(M.name))
            s.push({
              path: `plugins[${_}].name`,
              message:
                `Plugin name "${M.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` +
                (B ? "Claude Code accepts it, but the " : "The ") +
                "Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry." +
                ue(M.name)
            });
          let X = p ? void 0 : c3e(M.name);
          if (X)
            (X.severity === "error" ? n : s).push({
              path: `plugins[${_}].name`,
              message: X.message
            });
        }
        let U = M.experimental;
        if (H(U)) Q(U, vt, `plugins[${_}].experimental`, s);
        else if (U !== void 0)
          s.push({
            path: `plugins[${_}].experimental`,
            message: `'experimental' must be an object containing component declarations; got ${Z(U)}. It will be ignored at load time.`
          });
        let z = M.relevance;
        if (H(z)) {
          Q(z, R, `plugins[${_}].relevance`, s);
          let B = z.signals;
          if (H(B)) Q(B, j, `plugins[${_}].relevance.signals`, s);
        } else if (z !== void 0)
          s.push({
            path: `plugins[${_}].relevance`,
            message: `'relevance' must be an object containing topic and signals; got ${Z(z)}. It will be ignored at load time.`
          });
        let J = M.metadata;
        if (J !== void 0 && !H(J))
          s.push({
            path: `plugins[${_}].metadata`,
            message: `'metadata' must be a free-form object; got ${Z(J)}. It will be ignored at load time.`
          });
      });
    }
  }
  if (w.success) {
    let f = w.data;
    if (!f.plugins || f.plugins.length === 0)
      s.push({ path: "plugins", message: "Marketplace has no plugins defined" });
    if (f.plugins)
      f.plugins.forEach((x, k) => {
        if (f.plugins.filter((N) => N.name === x.name).length > 1)
          n.push({
            path: `plugins[${k}].name`,
            message: `Duplicate plugin name "${x.name}" found in marketplace`
          });
        let j = typeof x.source === "object" && x.source.source === "archive";
        if (j && lHe(x) && x.strict !== !1)
          n.push({
            path: `plugins[${k}].headersHelper`,
            message: `Plugin "${Bh(x.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`
          });
        if ((x.headers !== void 0 || lHe(x)) && !j)
          s.push({
            path: `plugins[${k}].${lHe(x) ? "headersHelper" : "headers"}`,
            message: `Plugin "${Bh(x.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`
          });
        else if (
          lHe(x) &&
          typeof x.source === "object" &&
          x.source.source === "archive" &&
          !x.source.sha256
        )
          s.push({
            path: `plugins[${k}].source.sha256`,
            message: `Plugin "${Bh(x.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`
          });
        for (let N of j ? Object.keys(x.headers ?? {}) : [])
          if (X0o(N))
            s.push({
              path: `plugins[${k}].headers.${Bh(N)}`,
              message: `Header "${Bh(N)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`
            });
      });
    if (!f.description && !f.metadata?.description)
      s.push({
        path: "description",
        message:
          "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
      });
  }
  let C = sar(),
    S = g.dirname(r),
    v = g.basename(S) === ".claude-plugin" ? g.dirname(S) : S;
  for (let [f, x] of l.entries()) {
    let k = C.safeParse(hQo(x, m));
    if (!k.success) continue;
    let R = k.data,
      j = R.source;
    if (!Bot(j) || Te(j)) continue;
    let N = g.join(v, j),
      _ = g.join(N, ".claude-plugin", "plugin.json"),
      M = g.relative(v, _),
      U = await kO(v, g.join(N, ".claude-plugin"));
    if (U === "not-a-directory") {
      n.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        code: "ENOTDIR",
        message: `A path component of ${M} is not a directory, so the file cannot be read. The entry will fail to load at install time.`
      });
      continue;
    }
    if (U === "refused") {
      s.push({
        path: `plugins[${f}].source`,
        message:
          `Local source "${j}" is or traverses a symlink, so ${M} was not read \u2014 ` +
          "validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately."
      });
      continue;
    }
    if (U !== "ok") continue;
    let z;
    try {
      z = await zK(_);
    } catch (O) {
      n.push({
        path: `plugins[${f}] plugin.json \u2192 file`,
        message: `Failed to read ${M}: ${d(O)}`
      });
      continue;
    }
    if (z.kind === "refused" || z.kind === "too-large") {
      s.push({
        path: `plugins[${f}].source`,
        message: `${M} ${z.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${B0} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`
      });
      continue;
    }
    if (z.kind === "absent") continue;
    let J = z.content;
    if (R.version) {
      let O;
      try {
        let K = te(No(J));
        if (typeof K.version === "string") O = K.version;
      } catch (K) {
        s.push({
          path: `plugins[${f}].source`,
          message: `Could not parse ${g.relative(v, _)} for version cross-check: ${d(K)}`
        });
      }
      if (O && O !== R.version) {
        let K = g.relative(v, _);
        s.push({
          path: `plugins[${f}].version`,
          message:
            `Entry declares version "${R.version}" but ${K} says "${O}". ` +
            "At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. " +
            `Update this entry to "${O}" to match.`
        });
      }
    }
    let B = ie(await $t(_, J, p ? { kind: "anthropic" } : { kind: "entry", entryName: R.name })),
      X = `plugins[${f}] plugin.json \u2192 `;
    for (let O of B.errors) n.push({ ...O, path: X + O.path });
    for (let O of B.warnings) s.push({ ...O, path: X + O.path });
  }
  return { success: n.length === 0, errors: n, warnings: s, filePath: r, fileType: "marketplace" };
}
function wh(e, n) {
  return zr(kl(Yf(e), n));
}
function ie(e) {
  return {
    ...e,
    errors: e.errors.map((n) => ({ ...n, path: wh(n.path, 200), message: wh(n.message, 1000) })),
    warnings: e.warnings.map((n) => ({ path: wh(n.path, 200), message: wh(n.message, 1000) })),
    ...(e.notes !== void 0 && { notes: e.notes.map((n) => wh(n, 1000)) }),
    ...(e.gatingHooks !== void 0 && {
      gatingHooks: e.gatingHooks.map((n) => ({
        module: wh(n.module, 200),
        pattern: wh(n.pattern, 200),
        hook: wh(n.hook, 1000),
        hasCatch: n.hasCatch
      }))
    })
  };
}
function Wn(e, n, s, r) {
  let a = [],
    i = [],
    l = r === "project" && s === "agent",
    c = No(n).match(KT);
  if (!c) {
    if (!l)
      i.push({
        path: "frontmatter",
        message:
          "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata."
      });
    return { success: !0, errors: a, warnings: i, filePath: e, fileType: s };
  }
  let m = dpn(c[1] || "");
  if (!m.ok) {
    let b =
      s !== "agent"
        ? `At runtime this ${s} loads with empty metadata (all frontmatter fields silently dropped).`
        : r === "project"
          ? "At runtime this agent does not load at all \u2014 with no frontmatter " +
            "name it is treated as a co-located reference document and skipped."
          : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
    return (
      a.push({
        path: "frontmatter",
        message: `YAML frontmatter failed to parse: ${wh(m.error, 200)}. ` + b
      }),
      { success: !1, errors: a, warnings: i, filePath: e, fileType: s }
    );
  }
  let p = m.value;
  if (p !== null && !H(p))
    return (
      a.push({
        path: "frontmatter",
        message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(p) ? "an array" : typeof p}.`
      }),
      { success: !1, errors: a, warnings: i, filePath: e, fileType: s }
    );
  let y = p ?? {};
  if (y.description !== void 0) {
    let b = y.description;
    if (typeof b !== "string" && typeof b !== "number" && typeof b !== "boolean" && b !== null)
      a.push({
        path: "description",
        message: `description must be a string, got ${Array.isArray(b) ? "array" : typeof b}. At runtime this value is dropped.`
      });
  } else if (!l || typeof y.name === "string")
    i.push({
      path: "description",
      message: `No description in frontmatter. A description helps users and Claude understand when to use this ${s}.`
    });
  if (y.name !== void 0 && y.name !== null && typeof y.name !== "string")
    a.push({ path: "name", message: `name must be a string, got ${typeof y.name}.` });
  let h = y["allowed-tools"];
  if (h !== void 0 && h !== null) {
    if (typeof h !== "string" && !Array.isArray(h))
      a.push({
        path: "allowed-tools",
        message: `allowed-tools must be a string or array of strings, got ${typeof h}.`
      });
    else if (Array.isArray(h) && h.some((b) => typeof b !== "string"))
      a.push({ path: "allowed-tools", message: "allowed-tools array must contain only strings." });
  }
  if (s === "skill" || s === "command") {
    let b = !1;
    ((C) => {
      if (C == null || H(C)) return;
      ((b = !0),
        i.push({
          path: "metadata",
          message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(C) ? "array" : typeof C}. It is dropped at load time.`
        }));
    })(y.metadata);
  }
  if (s === "skill" || s === "command") {
    let b = y.shell;
    if (b !== void 0 && b !== null)
      if (typeof b !== "string")
        a.push({ path: "shell", message: `shell must be a string, got ${typeof b}.` });
      else {
        let w = b.trim().toLowerCase();
        if (w !== "bash" && w !== "powershell")
          a.push({
            path: "shell",
            message: `shell must be 'bash' or 'powershell', got '${wh(b, 64)}'.`
          });
      }
  }
  return { success: a.length === 0, errors: a, warnings: i, filePath: e, fileType: s };
}
async function Gn(e, n) {
  let s = {
      result: { success: !0, errors: [], warnings: [], filePath: e, fileType: "hooks" },
      modules: []
    },
    r = (k) => ({
      result: q(
        e,
        "hooks",
        `${k} \u2014 hooks are read without following symlinks and are capped at ` +
          `${B0} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`
      ),
      modules: []
    }),
    a = g.dirname(e),
    i = await kO(g.dirname(a), a);
  if (i === "refused") return r("The hooks directory is a symlink and was not read");
  if (i !== "ok") return s;
  let l;
  try {
    l = await zK(e);
  } catch (k) {
    return {
      result: {
        success: !1,
        errors: [{ path: "file", message: `Failed to read file: ${d(k)}` }],
        warnings: [],
        filePath: e,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (l.kind === "refused")
    return r("hooks.json is not a regular file (a symlink, a FIFO, a directory)");
  if (l.kind === "too-large") return r("hooks.json is past the size cap and was not read");
  if (l.kind === "absent") return s;
  let c = l.content,
    m;
  try {
    m = te(c);
  } catch (k) {
    return {
      result: {
        success: !1,
        errors: [
          {
            path: "json",
            message: `Invalid JSON syntax: ${d(k)}. At runtime this breaks the entire plugin load.`
          }
        ],
        warnings: [],
        filePath: e,
        fileType: "hooks"
      },
      modules: []
    };
  }
  if (q9(m, tar) || wfe(m))
    return {
      result: {
        success: !1,
        errors: [
          {
            path: "hooks",
            message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${kv}`
          }
        ],
        warnings: [],
        filePath: e,
        fileType: "hooks"
      },
      modules: []
    };
  let p =
      m && typeof m === "object" && "hooks" in m
        ? Vbe(m.hooks)
        : { notes: [], unloadableGuards: [] },
    y = p.notes.map((k) => ({ path: "hooks", message: `${k} at runtime` }));
  if (p.unloadableGuards.length > 0)
    return {
      result: {
        success: !1,
        errors: p.unloadableGuards.map((k) => ({ path: "hooks", message: `${k} \u2014 ${kv}` })),
        warnings: y,
        filePath: e,
        fileType: "hooks"
      },
      modules: []
    };
  let h = nar().safeParse(m);
  if (!h.success)
    return {
      result: { success: !1, errors: fe(h.error), warnings: y, filePath: e, fileType: "hooks" },
      modules: []
    };
  let b = [];
  for (let k of ut(h.data.hooks ?? {}))
    b.push({
      path: `hooks.${k.event}`,
      message: `Shell command uses ${k.placeholders.join(", ")} without quotes: ${wh(k.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.`
    });
  let w = [],
    C = [],
    S = [],
    v = h.data.modules ?? [],
    f = v.length > 0 ? await Yn(n) : ne,
    x = f.nouns;
  for (let k of v) {
    let R = g.resolve(a, k),
      j = g.relative(n, R);
    if (j === ".." || j.startsWith(`..${g.sep}`) || g.resolve(j) === j || NYe(k)) {
      w.push({ path: `modules.${k}`, message: "The module path leaves the plugin directory" });
      continue;
    }
    try {
      let {
          scan: N,
          registrations: _,
          renderMatchers: M,
          helperCalls: U,
          catchReads: z
        } = await pSi(R, n, g.basename(n)),
        J = _.length === 0 ? "nothing" : _.join(", "),
        B = [
          ...N.calls.map((P) => {
            let D = U.get(P);
            return D === void 0 ? `$.${P}` : `$.${P} (via ${D.join(", ")})`;
          }),
          ...(N.nextTo ?? []).map((P) => `next.to:${P}`)
        ],
        X = B.length === 0 ? "nothing on $" : B.join(", "),
        O = z.filter((P) => P.isOwnCommand),
        K = [];
      if (O.length > 0) {
        let P = br();
        try {
          if (!P.shippedTablesFillFailed) {
            (Ype(), pIe());
            let D = dsn(),
              W = (Y) => D(Y) || Fn.has(ty(Y));
            (K.push(...O.filter((Y) => !Y.commands.some(W))),
              y.push(
                ...L(O.flatMap((Y) => Y.commands))
                  .filter(W)
                  .map((Y) => ({
                    path: `modules.${k}`,
                    message: `"/${wh(Y, 200)}" is a name Claude Code ships: $.command.register refuses it and the hook that calls it is skipped`
                  }))
              ));
          }
        } catch (D) {
          ((P.shippedTablesFillFailed = !0),
            t(
              `plugin validate: shipped command names unread, every command.run hook is listed as a gate: ${d(D)}`,
              { level: "error" }
            ));
        }
      }
      let Fe = z.filter((P) => !K.includes(P) && w2r(P.pattern));
      (C.push(
        `${k} hooks: ${J}`,
        ...K.map((P) => `${k} answers its own command: ${P.registration}`),
        ...Fe.map(
          ({ registration: P, hasCatch: D }) =>
            `${k} gating hook ${D ? "with" : "without"} .catch: ` + P
        ),
        `${k} calls: ${X}`
      ),
        S.push(
          ...Fe.map(({ registration: P, pattern: D, hasCatch: W }) => ({
            module: k,
            pattern: D,
            hook: P,
            hasCatch: W
          }))
        ));
      for (let { registration: P, matcher: D } of M) {
        let W = W2r(D);
        if (W !== void 0) y.push({ path: `modules.${k}`, message: `on ${P}: ${W}` });
      }
      let Rt = N.hooks.some((P) => _oe(P, "engine.create"));
      if (x.length > 0 && !Rt)
        y.push({
          path: `modules.${k}`,
          message: `the manifest's types contract declares ${x.map((P) => `$.${P}`).join(", ")} on EngineInterface, but ${k} registers no hook on engine.create, so the plugin never adds ${I(x.length, "it", "them")} to $`
        });
      if (N.env !== void 0) {
        let P = (D) => (D.length === 0 ? "nothing" : D.join(", "));
        C.push(`${k} env writes: ${P(N.env.writes)}`, `${k} env reads: ${P(N.env.reads)}`);
      }
      let De = qVo(N);
      if (De !== void 0) C.push(`${k} hooks telemetry for: ${De}`);
      let ze = VVo(N, { isBuiltin: !1 });
      if (ze !== void 0) w.push({ path: `modules.${k}`, message: ze });
      if (N.state !== void 0) {
        let P = (se) => (se.length === 0 ? "nothing" : se.map((Pt) => vvt(Pt)).join(", "));
        C.push(`${k} state writes: ${P(N.state.writes)}`, `${k} state reads: ${P(N.state.reads)}`);
        let D = f.name ?? g.basename(n),
          W = (se) => se.plugin !== D,
          { reads: Y, writes: Et } = N.state,
          Se = bn({
            names: f.isRefused ? { reads: Y.filter(W), writes: Et.filter(W) } : N.state,
            owner: D,
            declared: f.state,
            contract: f.conventional,
            refusal: f.refusal,
            others: await qn(n)
          });
        if (
          (w.push(...Se.problems.map((se) => ({ path: `modules.${k}`, message: se }))),
          Se.unchecked.length > 0)
        )
          C.push(
            `${k} state of other plugins, not checked (run validate in a session with them enabled): ${Se.unchecked.join(", ")}`
          );
      }
      let Ve = await tEo(N.clients, n, g.basename(n));
      if (Ve !== void 0) C.push(`${k} surface modules: ${Ve.map((P) => P.module).join(", ")}`);
    } catch (N) {
      w.push({ path: `modules.${k}`, message: wh(d(N), 400) });
    }
  }
  return {
    result: {
      success: w.length === 0,
      errors: w,
      warnings: [...y, ...b],
      filePath: e,
      fileType: "hooks",
      ...(C.length > 0 && { notes: C }),
      ...(S.length > 0 && { gatingHooks: S })
    },
    modules: v
  };
}
function gt(e, { relPath: n, field: s }) {
  if (e === void 0) return { errors: [], notes: [] };
  if (e.kind === "refused")
    return { errors: e.problems.map((i) => ({ path: s, message: i })), notes: [] };
  let r =
      `types ${n} declares on $: ` +
      (e.nouns.length > 0
        ? e.nouns.map((i) => `$.${i}`).join(", ")
        : "nothing (no EngineInterface member)"),
    a = e.state.flatMap(({ plugin: i, keys: l }) => l.map((c) => vvt({ plugin: i, key: c })));
  return {
    errors: [],
    notes: a.length > 0 ? [r, `types ${n} declares state: ${a.join(", ")}`] : [r]
  };
}
var ne = {
  name: void 0,
  nouns: [],
  state: [],
  isRefused: !1,
  conventional: void 0,
  refusal: void 0
};
async function Yn(e) {
  let n = await oe(g.join(e, ".claude-plugin", "plugin.json")),
    s = n === void 0 ? void 0 : ae(No(n)),
    r = typeof s?.name === "string" ? s.name : void 0,
    a = s?.types;
  if (s === void 0 || (a !== void 0 && typeof a !== "string")) return { ...ne, name: r };
  let i = await ke(a, e, g.basename(e));
  if (i === void 0) return { ...ne, name: r };
  if (a !== void 0)
    return i.kind === "read"
      ? { ...ne, name: r, nouns: i.nouns, state: i.state }
      : { ...ne, name: r, isRefused: !0 };
  let l = `the types contract at ${ZNt}`;
  if (i.kind === "read") return { ...ne, name: r, state: i.state, conventional: l };
  let c = i.problems.length - 1;
  return {
    ...ne,
    name: r,
    conventional: l,
    refusal: wh(
      `the file at ${ZNt} could not be taken as the types contract (${i.problems[0] ?? "refused"}${c > 0 ? `, and ${c} more` : ""})`,
      1000
    )
  };
}
async function qn(e) {
  let n = Ie(),
    s = n.pluginLoadCacheOnly ?? n.pluginLoad;
  if (s === void 0) return;
  let r;
  try {
    r = (await s).enabled;
  } catch {
    return;
  }
  let a = [];
  for (let i of r) {
    let l = i.manifest.types;
    if (!((l !== void 0 || i.isBuiltin !== !0) && g.resolve(i.path) !== g.resolve(e))) continue;
    let m = await ke(l, i.path, i.name);
    if (m?.kind === "read") a.push(...m.state);
  }
  return a;
}
async function Zn(e) {
  let n = [g.join(e, "hooks", "hooks.json")];
  if (!(await oU(g.join(e, ".claude-plugin")))) return n;
  let s = await oe(g.join(e, ".claude-plugin", "plugin.json")),
    r = s === void 0 ? void 0 : ae(No(s))?.hooks,
    a = Array.isArray(r) ? r : [r];
  for (let i of a) {
    if (typeof i !== "string") continue;
    let l = g.resolve(e, i),
      c = g.relative(e, l);
    if (c === ".." || c.startsWith(`..${g.sep}`) || g.resolve(c) === c || NYe(i)) continue;
    if (!n.includes(l)) n.push(l);
  }
  return n;
}
async function Jn(e) {
  let n = [],
    s = [];
  for (let a of await Zn(e)) {
    let { result: i, modules: l } = await Gn(a, e);
    if (l.length > 0) s.push(a);
    if (i.errors.length > 0 || i.warnings.length > 0 || i.notes !== void 0) n.push(i);
  }
  let [, r] = s;
  if (r !== void 0) {
    let a = s.map((i) => g.relative(e, i));
    n.push({
      success: !1,
      errors: [
        {
          path: "modules",
          message: `The plugin names one hooks module per plugin, but ${a.join(" and ")} each name one; the loader refuses both`
        }
      ],
      warnings: [],
      filePath: r,
      fileType: "hooks"
    });
  }
  return n;
}
var Xn = new Set([
    "stdio",
    "http",
    "streamable-http",
    "sse",
    "ws",
    "sdk",
    "sse-ide",
    "ws-ide",
    "claudeai-proxy"
  ]),
  Qn = /\$\{user_config\.([^}$]+)\}/g,
  xt = /\$\{[^}$]+\}/,
  Ne = 16,
  es = 8192,
  ts = [
    /\bsk-[A-Za-z0-9_-]{16,}/,
    /\bgh[opsur]_[A-Za-z0-9]{30,}/,
    /\bgithub_pat_[A-Za-z0-9_]{30,}/,
    /\bxox[abeprs]-[A-Za-z0-9-]{10,}/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bglpat-[A-Za-z0-9_-]{20,}/,
    /\bAIza[0-9A-Za-z_-]{35}\b/,
    /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/
  ],
  ns = /authorization|api[-_]?key|token|secret|password|credential/i,
  ss = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;
function rs(e) {
  let n = new Map();
  for (let r of e) n.set(r, (n.get(r) ?? 0) + 1);
  let s = 0;
  for (let r of n.values()) {
    let a = r / e.length;
    s -= a * Math.log2(a);
  }
  return s;
}
function os(e, n) {
  if (n.length > es || xt.test(n) || ss.test(n)) return !1;
  let s = n.trim();
  if (ts.some((a) => a.test(s))) return !0;
  if (!ns.test(e)) return !1;
  let r = s.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? s;
  return r.length >= 20 && !/\s/.test(r) && rs(r) >= 3;
}
var as = /\$\{[^}$]+\}/g;
function be(e, n) {
  return URL.parse(e.replace(as, n)) ?? void 0;
}
function is(e) {
  let n = be(e, "probe-a.invalid") ?? be(e, "1"),
    s = be(e, "probe-b.invalid") ?? be(e, "2");
  if (!n || !s || n.hostname !== s.hostname) return;
  let r = n.protocol === "http:" ? "http" : n.protocol === "ws:" ? "ws" : void 0;
  if (r === void 0) return;
  let a = n.hostname;
  if (a === "localhost" || a.endsWith(".localhost") || a === "127.0.0.1" || a === "[::1]") return;
  let i = r === "http" ? "https" : "wss";
  return (
    `url uses ${r}:// to a non-loopback host \u2014 requests, headers and any ` +
    `credentials travel in cleartext. Use ${i}://; plugin directories may reject insecure remote server urls.`
  );
}
function ls(e) {
  let n = [],
    s = [],
    r;
  if (e.type === void 0 || e.type === "stdio") {
    if ((s.push("command"), (r = "env"), Array.isArray(e.args))) {
      for (let [i, l] of e.args.entries())
        if (typeof l === "string") n.push({ field: `args[${i}]`, value: l });
    }
  } else if (Me(e.type)) (s.push("url", "headersHelper"), (r = "headers"));
  for (let i of s) {
    let l = e[i];
    if (typeof l === "string") n.push({ field: i, value: l });
  }
  let a = r === void 0 ? void 0 : e[r];
  if (r !== void 0 && H(a)) {
    for (let [i, l] of Object.entries(a))
      if (typeof l === "string") n.push({ field: `${r}.${i}`, value: l });
  }
  return n;
}
function Me(e) {
  return e === "http" || e === "streamable-http" || e === "sse" || e === "ws";
}
function Tt(e, n, s) {
  let r = [],
    a = [];
  if (!H(n)) return { errors: r, warnings: a };
  for (let { field: i, value: l } of ls(n)) {
    let c = new Set([...l.matchAll(Qn)].map((p) => p[1]));
    if (c.size === 0) continue;
    let m = `${e}.${wh(i, 64)}`;
    if (i === "headersHelper") {
      r.push({
        path: m,
        message:
          'headersHelper references ${user_config.*}. Options are never substituted into headersHelper: the plugin loader refuses the server when the plugin declares any options (the value would be spliced into a shell command), and otherwise the literal text reaches the shell. Read the value inside the helper script instead (for example from a variable set in the server\'s "env" block).'
      });
      continue;
    }
    if (s === null) continue;
    for (let p of c)
      if (p !== void 0 && !s.has(p))
        r.push({
          path: m,
          message: `references \${user_config.${wh(p, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.`
        });
  }
  if (Me(n.type) && typeof n.url === "string")
    if (n.url.trim() === "") {
      if (typeof n.directory === "string" && n.directory !== "")
        a.push({
          path: `${e}.directory`,
          message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.`
        });
    } else if (!xt.test(n.url) && !URL.canParse(n.url))
      r.push({
        path: `${e}.url`,
        message:
          'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.'
      });
    else {
      let i = is(n.url);
      if (i) a.push({ path: `${e}.url`, message: i });
    }
  if (Me(n.type) && H(n.headers)) {
    for (let [i, l] of Object.entries(n.headers))
      if (typeof l === "string" && os(i, l))
        a.push({
          path: `${e}.headers.${wh(i, 64)}`,
          message:
            "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value."
        });
  }
  return { errors: r, warnings: a };
}
function cs(e, n, s) {
  if (!H(n))
    return [
      {
        path: e,
        message: `server config must be an object (got ${Z(n)}). The plugin loader silently drops this server at load.`
      }
    ];
  let a = n.type;
  if (a === void 0 && !("command" in n) && "url" in n)
    return [
      {
        path: `${e}.type`,
        message:
          'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.'
      }
    ];
  if (a !== void 0 && (typeof a !== "string" || !Xn.has(a))) {
    let m = typeof a === "string" ? `"${wh(a, 32)}"` : Z(a);
    return [
      {
        path: `${e}.type`,
        message:
          `unknown server type ${m} \u2014 expected "stdio" (or no type) for a local ` +
          'command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.'
      }
    ];
  }
  let l = (
    a === void 0 || a === "stdio"
      ? Fot()
      : a === "http" || a === "streamable-http"
        ? NTt()
        : a === "sse"
          ? jqt()
          : a === "ws"
            ? Fvn()
            : void 0
  )?.safeParse(n);
  if (!l)
    return [
      {
        path: e,
        message: `is not a valid "${String(a)}" server config (${fe(s)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.`
      }
    ];
  return (l.success ? fe(s) : fe(l.error)).map((m) => ({
    ...m,
    path: m.path === "root" ? e : `${e}.${m.path}`,
    message: `${m.message}. The plugin loader silently drops this server at load.`
  }));
}
async function yt(e, n, s) {
  let a = (w) =>
      q(
        n,
        "mcp",
        `${w} \u2014 MCP server files are read without following symlinks and are capped at ` +
          `${B0} bytes. The plugin loader has neither limit, so validate the real file separately.`
      ),
    i;
  try {
    i = await zK(e);
  } catch (w) {
    return {
      success: !1,
      errors: [{ path: "file", message: `Failed to read file: ${d(w)}` }],
      warnings: [],
      filePath: n,
      fileType: "mcp"
    };
  }
  if (i.kind === "absent") return null;
  if (i.kind === "refused")
    return a("The file is not a regular file (a symlink, a FIFO, a directory) and was not read");
  if (i.kind === "too-large") return a("The file is past the size cap and was not read");
  let l;
  try {
    l = te(i.content);
  } catch (w) {
    return {
      success: !1,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${i.content.startsWith("\uFEFF") ? "the file starts with a UTF-8 byte-order mark (BOM), which this file (unlike plugin.json) must not have \u2014 re-save it as UTF-8 without BOM" : d(w)}. The plugin loader logs this at debug level and loads no servers from the file.`
        }
      ],
      warnings: [],
      filePath: n,
      fileType: "mcp"
    };
  }
  let c = [],
    m = [],
    p = H(l) && Boolean(l.mcpServers),
    y = p && H(l) ? l.mcpServers : l,
    h = p ? "mcpServers" : "root",
    b;
  if (H(y)) b = Object.entries(y);
  else if (Array.isArray(y)) {
    if (((b = y.map((w, C) => [String(C), w])), y.length > 0))
      m.push({
        path: h,
        message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.`
      });
  } else
    return {
      success: !1,
      errors: [
        {
          path: h,
          message: `must be an object mapping server names to server configs (got ${Z(y)}). No servers load from this file.`
        }
      ],
      warnings: [],
      filePath: n,
      fileType: "mcp"
    };
  for (let [w, C] of b) {
    let S = wh(w, 64),
      v = p ? `mcpServers.${S}` : S,
      f = RZ().safeParse(C);
    if (!f.success) {
      c.push(...cs(v, C, f.error));
      continue;
    }
    let x = sge(f.data.type);
    if (x !== null) {
      c.push({
        path: `${v}.type`,
        message:
          x === "host-only"
            ? `type "${f.data.type}" servers are registered by the host application at runtime and cannot be declared by a plugin. The plugin loader drops this server at load.`
            : 'type "claudeai-proxy" is used only by claude.ai connectors and cannot be declared ' +
              'by a plugin \u2014 declare the server with type "http" instead. The plugin loader drops ' +
              "this server at load."
      });
      continue;
    }
    let k = Tt(v, C, s(w));
    (c.push(...k.errors), m.push(...k.warnings));
  }
  return { success: c.length === 0, errors: c, warnings: m, filePath: n, fileType: "mcp" };
}
function St(e) {
  let n = new Set(H(e.userConfig) ? Object.keys(e.userConfig) : []),
    s = new Map();
  if (Array.isArray(e.channels)) {
    for (let r of e.channels)
      if (H(r) && typeof r.server === "string" && !s.has(r.server))
        s.set(r.server, new Set(H(r.userConfig) ? Object.keys(r.userConfig) : []));
  }
  return (r) => {
    let a = s.get(r);
    return a === void 0 ? n : { has: (i) => n.has(i) || a.has(i) };
  };
}
async function ps(e, n) {
  return St(e);
}
async function ds(e, n) {
  let s,
    r = g.join(e, ".claude-plugin", "plugin.json");
  if (await oU(g.dirname(r))) {
    let S = await oe(r),
      v = S === void 0 ? void 0 : ae(No(S));
    if (v)
      s = Qme(v, "plugin-json", { pluginName: g.basename(e), manifestPath: r }).rawCandidate ?? v;
  }
  let i = s ? St(s) : void 0,
    l = (S) => (i ? i(S) : null),
    c = [],
    m = g.join(e, ".mcp.json"),
    p = await yt(m, m, l);
  if (p) c.push(p);
  let y = new Set([g.resolve(m)]),
    h = s?.mcpServers,
    b = h === void 0 ? [] : Array.isArray(h) ? h : [h],
    w = Ne,
    C = 0;
  for (let S of b) {
    if (typeof S !== "string") continue;
    if (!S.startsWith("./") || !S.endsWith(".json") || S.includes("..")) continue;
    let v = g.join(e, S),
      f = g.resolve(v);
    if (y.has(f)) continue;
    if ((y.add(f), w <= 0)) {
      C++;
      continue;
    }
    w--;
    let x = g.join(e, wh(S, 128)),
      k = await kO(e, g.dirname(v));
    if (k === "refused") {
      c.push(
        q(
          x,
          "mcp",
          "A directory on the way to this MCP servers file is a symlink or " +
            "escapes the plugin, and the file was not read \u2014 the plugin loader " +
            "follows it, so validate the real file separately."
        )
      );
      continue;
    }
    if (k !== "ok") continue;
    let R = await yt(v, x, l);
    if (R) c.push(R);
  }
  if (C > 0)
    c.push(
      q(
        r,
        "mcp",
        `plugin.json names more than ${Ne} MCP server files; ${C} ${I(C, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`
      )
    );
  return c.filter((S) => S.errors.length > 0 || S.warnings.length > 0);
}
async function Le(e, n) {
  let s;
  try {
    s = await je(e, { withFileTypes: !0 });
  } catch (i) {
    let l = E(i);
    if (l === "ENOENT" || l === "ENOTDIR") return { files: [], skippedSymlinks: 0 };
    throw i;
  }
  let r = F(s, (i) => i.isSymbolicLink());
  if (n)
    return {
      files: s.filter((i) => i.isDirectory()).map((i) => g.join(e, i.name, "SKILL.md")),
      skippedSymlinks: r
    };
  let a = [];
  for (let i of s) {
    let l = g.join(e, i.name);
    if (i.isDirectory()) {
      let c = await Le(l, !1);
      (a.push(...c.files), (r += c.skippedSymlinks));
    } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) a.push(l);
  }
  return { files: a, skippedSymlinks: r };
}
var ybr = "NO_MANIFEST",
  Ct = new Map([
    ["skills", "skill"],
    ["agents", "agent"],
    ["commands", "command"]
  ]);
function kt(e, n) {
  return e === "project" || n === "skill";
}
async function _e(e) {
  let n = [...Ct].map(([r, a]) => [a, g.join(e, r)]),
    s = await Promise.all(n.map(([, r]) => kO(e, r)));
  return {
    dirs: n.filter((r, a) => s[a] === "ok"),
    refused: n.filter((r, a) => s[a] === "refused")
  };
}
async function us(e) {
  if ((await kO(e, g.join(e, ".claude-plugin"))) === "ok") return !0;
  let n = g.join(e, "skills"),
    s = await kO(e, n);
  if (s === "refused") return !0;
  if (s !== "ok") return !1;
  let { files: r } = await Le(n, !0);
  for (let a of r)
    if (
      await On(a).then(
        () => !0,
        (l) => {
          let c = E(l);
          return c !== "ENOENT" && c !== "ENOTDIR";
        }
      )
    )
      return !0;
  return !1;
}
function q(e, n, s) {
  return {
    success: !0,
    errors: [],
    warnings: [{ path: "directory", message: s }],
    filePath: e,
    fileType: n
  };
}
async function ve(e, n, s) {
  let r = [],
    a = 0,
    i = n.length;
  for (let [l, c] of n)
    r.push(
      q(
        c,
        l,
        "This directory is a symlink and nothing in it was read \u2014 component " +
          `directories are read without following symlinks. A session loading this ${s === "plugin" ? "plugin" : "project"} does follow it, so validate the real directory separately.`
      )
    );
  for (let [l, c] of e) {
    let { files: m, skippedSymlinks: p } = await Le(c, l === "skill"),
      y = kt(s, l) ? p : 0,
      h = 0,
      b = 0;
    for (let C of m) {
      let S = wh(C, 256),
        v;
      try {
        v = await zK(C);
      } catch (x) {
        r.push({
          success: !1,
          errors: [{ path: "file", message: `Failed to read: ${wh(d(x), 200)}` }],
          warnings: [],
          filePath: S,
          fileType: l
        });
        continue;
      }
      if (v.kind !== "ok") {
        if (v.kind === "refused" && kt(s, l)) h++;
        else if (v.kind === "too-large") b++;
        continue;
      }
      a++;
      let f = Wn(S, v.content, l, s);
      if (f.errors.length > 0 || f.warnings.length > 0) r.push(f);
    }
    i += y + h + b;
    let w =
      "A session loading this " +
      (s === "plugin" ? "plugin" : "directory") +
      " does follow them, so validate the real paths separately.";
    if (y > 0)
      r.push(
        q(
          c,
          l,
          `${y} ${I(y, "entry", "entries")} here ${I(y, "is", "are")} ${I(y, "a symlink", "symlinks")} and ${I(y, "was", "were")} not read \u2014 components are read ` +
            `without following symlinks. ${w}`
        )
      );
    if (h > 0)
      r.push(
        q(
          c,
          l,
          `${h} ${I(h, "component")} here ${I(h, "was", "were")} not read \u2014 the path is not a ` +
            `regular file (a symlink, a FIFO, a directory). ${w}`
        )
      );
    if (b > 0)
      r.push(
        q(
          c,
          l,
          `${b} ${I(b, "file")} here ${I(b, "is", "are")} larger than ${B0} bytes and ${I(b, "was", "were")} not validated.`
        )
      );
  }
  return { results: r, scanned: a, skipped: i };
}
async function ms(e) {
  return (await fs(e))?.map(ie) ?? null;
}
async function fs(e) {
  let n = Ct.get(g.basename(e));
  if (n) {
    let C = g.dirname(e),
      S;
    if (g.basename(C) === ".claude" && !(await oU(C)))
      S = "The enclosing .claude directory is a symlink.";
    else if (!(await oU(e))) S = "This path is a symlink.";
    if (S)
      return [
        {
          success: !1,
          errors: [
            {
              path: "directory",
              message: `${S} Component directories are read without following symlinks, so nothing here was validated. Pass the real directory instead.`
            }
          ],
          warnings: [],
          filePath: e,
          fileType: n
        }
      ];
    return (await ve([[n, e]], [], "project")).results;
  }
  let s = g.join(e, ".claude"),
    r = g.basename(e) === ".claude",
    [a, i] = await Promise.all([kO(e, s), r ? Promise.resolve(!1) : us(e)]),
    l = r || i ? await _e(e) : { dirs: [], refused: [] },
    c = a === "ok" ? await _e(s) : { dirs: [], refused: [] },
    m = r ? "project" : "plugin",
    [p, y] = await Promise.all([ve(l.dirs, l.refused, m), ve(c.dirs, c.refused, "project")]),
    h = [...p.results, ...y.results],
    b = p.scanned + y.scanned,
    w = p.skipped + y.skipped;
  if (a === "refused")
    h.push(
      q(
        s,
        "plugin",
        "This directory is a symlink and nothing in it was read \u2014 .claude is " +
          "read without following symlinks. A session loading this project does follow it, so validate the real directory separately."
      )
    );
  return b > 0 || w > 0 || h.length > 0 ? h : null;
}
async function _br(e) {
  let n = [],
    s = new Set(["claude.md", "claude.local.md"]),
    r = [];
  try {
    r = await je(e, { withFileTypes: !0 });
  } catch {}
  for (let i of r) {
    if (!i.isFile() || !s.has(i.name.toLowerCase())) continue;
    let c =
      i.name.toLowerCase() === "claude.local.md"
        ? "Remove it from the plugin root."
        : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
    n.push({
      success: !0,
      errors: [],
      warnings: [
        {
          path: "root",
          message: `${i.name} at the plugin root is not loaded as project context. ${c}`
        }
      ],
      filePath: g.join(e, wh(i.name, 64)),
      fileType: "plugin"
    });
  }
  n.push(...(await gs(e)));
  let a = await _e(e);
  return (
    n.push(...(await ve(a.dirs, a.refused, "plugin")).results),
    n.push(...(await Jn(e))),
    n.push(...(await ds(e, r))),
    n.map(ie)
  );
}
async function pdo(e, n) {
  let s = ie(await hs(e));
  if (n?.unrecordableNames !== "warn") return s;
  let r = s.errors.filter((i) => i.code !== $e),
    a = s.errors
      .filter((i) => i.code === $e)
      .map(({ path: i, message: l }) => ({ path: i, message: l }));
  return { ...s, success: r.length === 0, errors: r, warnings: [...a, ...s.warnings] };
}
async function hs(e) {
  let n = g.resolve(e),
    s = null;
  try {
    s = await wt(n);
  } catch (a) {
    if (!G(a)) throw a;
  }
  if (s?.isDirectory()) {
    let a = g.join(n, ".claude-plugin", "marketplace.json"),
      i = await Ee(a),
      l = i.errors[0];
    if (!(l?.path === "file" && (l.code === "ENOENT" || l.code === "ENOTDIR"))) return i;
    let m = g.join(n, ".claude-plugin", "plugin.json"),
      p = await rJt(m),
      y = p.errors[0]?.code;
    if (y !== "ENOENT" && y !== "ENOTDIR") return p;
    return {
      success: !1,
      errors: [
        {
          path: "directory",
          code: ybr,
          message:
            "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json"
        }
      ],
      warnings: [],
      filePath: n,
      fileType: "plugin"
    };
  }
  switch (Dn(e)) {
    case "plugin":
      return rJt(e);
    case "marketplace":
      return Ee(e);
    case "unknown": {
      try {
        let a = await Oe(n, { encoding: "utf-8" }),
          i = te(No(a));
        if (Array.isArray(i.plugins)) return Ee(e);
      } catch (a) {
        if (E(a) === "ENOENT")
          return {
            success: !1,
            errors: [{ path: "file", message: `File not found: ${n}` }],
            warnings: [],
            filePath: n,
            fileType: "plugin"
          };
      }
      return rJt(e);
    }
  }
}
async function d3e(e) {
  let n = await pdo(e),
    s = n.filePath;
  if (n.errors.some((p) => p.code === ybr)) {
    let p = await ms(s);
    return p
      ? { manifest: null, contents: p, resolvedPath: s, pluginRoot: null }
      : { manifest: n, contents: [], resolvedPath: s, pluginRoot: null };
  }
  let r = g.dirname(s),
    a = g.dirname(r);
  if (g.basename(r) !== ".claude-plugin")
    return { manifest: n, contents: [], resolvedPath: s, pluginRoot: null };
  if (n.fileType === "plugin") {
    let p = await _br(a);
    return { manifest: n, contents: p, resolvedPath: s, pluginRoot: a };
  }
  if (g.resolve(e) !== a) return { manifest: n, contents: [], resolvedPath: s, pluginRoot: null };
  let i = await gbr(s),
    l = i !== void 0 && jvn(i.name) && i.plugins.some((p) => we(p, a, a)),
    c = await rJt(g.join(r, "plugin.json"), { kind: l ? "anthropic" : "alone" });
  if (c.errors[0]?.code === "ENOENT")
    return { manifest: n, contents: [], resolvedPath: s, pluginRoot: null };
  let m = c.errors.length > 0 || c.warnings.length > 0 || (c.notes?.length ?? 0) > 0;
  return {
    manifest: n,
    contents: [...(m ? [c] : []), ...(await _br(a))],
    resolvedPath: s,
    pluginRoot: a
  };
}
async function oe(e) {
  return sU(e).catch(() => {
    return;
  });
}
function he(e) {
  return H(e) ? e : void 0;
}
function ae(e) {
  try {
    return he(te(e));
  } catch {
    return;
  }
}
function Pe(e, n, s) {
  let r = [];
  for (let [a, i] of Object.entries(e)) {
    let l = he(i);
    if (!l || typeof l.command !== "string") continue;
    let m = l.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
    if (m === void 0 || n.has(m) || s.has(m)) continue;
    let p = wh(a, 64),
      y = wh(m, 64);
    r.push({
      path: `mcpServers.${p}`,
      message:
        `bin/${y} is not a shipped file, a declared binaries entry, or ` +
        "a name derivable from the declared entries \u2014 the server will " +
        'fail to start. Check for a typo against the "binaries" map in plugin.json.'
    });
  }
  return r;
}
async function gs(e) {
  if (!(await oU(g.join(e, ".claude-plugin")))) return [];
  let n = g.join(e, ".claude-plugin", "plugin.json"),
    s = await oe(n);
  if (s === void 0) return [];
  let r = ae(No(s)),
    a = qqt(r?.binaries);
  if (!r || !a) return [];
  let i = new Set(Object.keys(a));
  for (let v of kVs) {
    let f = new Map();
    for (let x of Object.keys(a)) {
      let k = Xyt(x, v);
      if (k !== void 0) f.set(k, (f.get(k) ?? 0) + 1);
    }
    for (let [x, k] of f) if (k === 1) i.add(x);
  }
  let l = g.join(e, "bin"),
    c = new Set();
  if (await oU(l))
    c = await je(l)
      .then((v) => new Set(v))
      .catch(() => new Set());
  let m = [];
  function p(v, f) {
    if (f.length > 0)
      m.push({ success: !0, errors: [], warnings: f, filePath: v, fileType: "plugin" });
  }
  let y = g.join(e, ".mcp.json"),
    h = await oe(y);
  if (h !== void 0) {
    let v = ae(h);
    if (v) {
      let f = he(v.mcpServers || v);
      if (f) p(y, Pe(f, c, i));
    }
  }
  let b = r.mcpServers,
    w = b === void 0 ? [] : Array.isArray(b) ? b : [b],
    C = [],
    S = Ne;
  for (let v of w) {
    if (typeof v === "string" && S <= 0) continue;
    if (typeof v === "string") {
      if ((S--, !v.startsWith("./") || Te(v))) continue;
      let x = g.join(e, v);
      if ((await kO(e, g.dirname(x))) !== "ok") continue;
      let k = await oe(x);
      if (k === void 0) continue;
      let R = ae(k);
      if (!R) continue;
      let j = he(R.mcpServers || R);
      if (j) p(g.join(e, wh(v, 128)), Pe(j, c, i));
      continue;
    }
    let f = he(v);
    if (f) C.push(...Pe(f, c, i));
  }
  return (p(n, C), m);
}
export { pbr, cdo, udo, fdo, nJt, mbr, gbr, j_s, rJt, hbr, wh, ybr, _br, pdo, d3e };

//# sourceMappingURL=chunk-pxfm2rr2.js.map
