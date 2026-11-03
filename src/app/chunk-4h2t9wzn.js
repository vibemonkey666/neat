// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, Hn } from "./chunk-acd8w9vv.js";
import { f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { oYo, zri, Gnr, $Ve, kEt } from "./chunk-ajtyjx88.js";
import { extname as Fr } from "path";
function R(r) {
  let e = 0;
  for (
    let o = r.indexOf(`
`);
    o >= 0;
    o = r.indexOf(
      `
`,
      o + 1
    )
  )
    e += 1;
  return e;
}
class h extends Error {
  constructor() {
    super("highlighting this text takes more work than its length allows");
    this.name = "HighlightBoundError";
  }
}
function u(r, e) {
  if (((r.left -= e), r.left < 0)) throw new h();
}
var Sr = 32;
var Er = 64;
var xr = 4096;
var yr = 24;
var _r = 3;
var Tr = 16;
var N = (r, e) =>
  class o extends r {
    static isBounded = !0;
    held = 0;
    breaks = 0;
    height = 0;
    constructor(n) {
      super(n);
      u(e, Tr);
    }
    openNode(n) {
      ((this.held += 1), u(e, 1), super.openNode(n), this.grownTo(this.stack.length - 1));
    }
    addText(n) {
      let s = R(n);
      ((this.held += n.length),
        (this.breaks += s),
        u(e, n.length + s * (this.stack.length - 1) ** 2),
        super.addText(n));
    }
    __addSublanguage(n, s) {
      if (n instanceof o) {
        let i = this.stack.length + n.height;
        ((this.held += n.held),
          (this.breaks += n.breaks),
          this.grownTo(i),
          u(e, n.breaks * i ** 2));
      }
      super.__addSublanguage(n, s);
    }
    toHTML() {
      return (u(e, this.held), super.toHTML());
    }
    grownTo(n) {
      if (((this.height = Math.max(this.height, n)), this.height > Sr))
        u(e, Number.POSITIVE_INFINITY);
    }
  };
var H = (r) => typeof r === "function" && "openNode" in r.prototype && !("isBounded" in r);
var I = (r, e) => [
  ...[("subLanguage" in e ? e.subLanguage : void 0) ?? []]
    .flat()
    .filter((o) => typeof o === "string")
    .map((o) => r.getLanguage(o)),
  ...(e.contains ?? []),
  ...("variants" in e ? (e.variants ?? []) : []),
  "starts" in e ? e.starts : void 0
];
class w extends Error {
  constructor() {
    super("this text is too long, or its lines are, for a grammar");
    this.name = "HighlightLimitError";
  }
}
var E = 50000;
var v = 16000;
var D = 20000;
var G = 8000;
var C = 8000;
var P = 20000;
var k = 20000;
var d = new Map([
  ["asciidoc", v],
  ["gcode", D],
  ["http", G],
  ["nestedtext", C],
  ["sas", P],
  ["wren", k]
]);
var W = Math.min(E, ...d.values());
var x = new Set([
  "abnf",
  "accesslog",
  "ada",
  "angelscript",
  "applescript",
  "arcade",
  "arduino",
  "asciidoc",
  "aspectj",
  "autohotkey",
  "awk",
  "bash",
  "brainfuck",
  "c",
  "cal",
  "clojure",
  "clojure-repl",
  "coffeescript",
  "cos",
  "cpp",
  "crmsh",
  "crystal",
  "csharp",
  "css",
  "dart",
  "delphi",
  "django",
  "dns",
  "dockerfile",
  "dos",
  "dsconfig",
  "dts",
  "dust",
  "elixir",
  "erb",
  "erlang",
  "excel",
  "fsharp",
  "gams",
  "gauss",
  "gcode",
  "go",
  "graphql",
  "groovy",
  "haml",
  "handlebars",
  "haskell",
  "http",
  "ini",
  "java",
  "javascript",
  "jboss-cli",
  "julia",
  "julia-repl",
  "kotlin",
  "latex",
  "leaf",
  "less",
  "livecodeserver",
  "livescript",
  "llvm",
  "markdown",
  "matlab",
  "mipsasm",
  "mojolicious",
  "monkey",
  "moonscript",
  "nestedtext",
  "nginx",
  "nim",
  "nix",
  "node-repl",
  "nsis",
  "objectivec",
  "ocaml",
  "parser3",
  "perl",
  "pgsql",
  "php",
  "php-template",
  "pony",
  "powershell",
  "processing",
  "profile",
  "properties",
  "protobuf",
  "puppet",
  "python",
  "python-repl",
  "qml",
  "r",
  "reasonml",
  "roboconf",
  "routeros",
  "ruby",
  "rust",
  "sas",
  "scala",
  "scheme",
  "scilab",
  "scss",
  "shell",
  "smali",
  "smalltalk",
  "sml",
  "stan",
  "stata",
  "stylus",
  "swift",
  "tap",
  "tcl",
  "tp",
  "twig",
  "typescript",
  "vbnet",
  "vbscript",
  "vbscript-html",
  "verilog",
  "wren",
  "x86asm",
  "xl",
  "xml",
  "xquery",
  "yaml",
  "zephir"
]);
var A = new Set([...d.keys(), ...x]);
var fan = 256;
var oqn = 16000000;
var j = /<(?:script|style)(?=\s|>)/iu;
var z = "[`~<";
var c = new Map([["markdown", [z, j]]]);
var Z = /\s+|[^\n]+/g;
function U(r, e) {
  let o = 0;
  for (let n of e === void 0 ? "" : r) o += e?.includes(n) === !0 ? 1 : 0;
  return e === void 0 ? r.length : o;
}
function y(r, e) {
  let o = 0;
  if (r.length <= fan) return o;
  for (let [n] of r.matchAll(Z)) {
    let s = n.length > fan;
    o += s ? U(n, e) * n.length : 0;
  }
  return o;
}
var F = (r) => r.length <= W && y(r, void 0) <= oqn;
function J(r, e) {
  let o = c.get(e);
  return o === void 0 || o[1].test(r) ? void 0 : o[0];
}
function xIo(r, e) {
  return x.has(e) && r.length > fan ? y(r, J(r, e)) : 0;
}
var PIo = (r, e) => r.length <= (d.get(e) ?? E) && xIo(r, e) <= oqn;
function IIo(r, e) {
  let o = new Map(
      [...A].flatMap((a) => {
        let p = r.getLanguage(a);
        return p === void 0 ? [] : [[p, a]];
      })
    ),
    n = new Set(),
    s = A.has(e) ? [] : [r.getLanguage(e)],
    i = e;
  while (s.length > 0) {
    let a = s.pop();
    if (typeof a !== "object" || a === null || n.has(a)) continue;
    let g =
      "subLanguage" in a && Array.isArray(a.subLanguage) && a.subLanguage.length === 0
        ? ([...o.values()].find((cr) => !c.has(cr)) ?? o.values().next().value)
        : o.get(a);
    if (g !== void 0 && !c.has(g)) return g;
    ((i = g ?? i), n.add(a), s.push(...(g === void 0 ? I(r, a) : [])));
  }
  return i;
}
var B = (r) => ({
  "before:highlight": ({ code: e, language: o }) => {
    if (!F(e) && !PIo(e, IIo(r, o))) throw new w();
  }
});
function K(r, e) {
  let o = new Set(),
    n = [e],
    s = 0;
  while (n.length > 0) {
    let i = n.pop();
    if (typeof i !== "object" || i === null || o.has(i)) continue;
    o.add(i);
    let a = "subLanguage" in i ? i.subLanguage : void 0,
      p = Array.isArray(a);
    ((s = Math.max(s, p ? a.length || Number.POSITIVE_INFINITY : 0)),
      n.push(
        ...[a ?? []]
          .flat()
          .filter((g) => typeof g === "string")
          .map((g) => r.getLanguage(g)),
        ...(i.contains ?? []),
        ...("variants" in i ? (i.variants ?? []) : []),
        "starts" in i ? i.starts : void 0
      ));
  }
  return s;
}
function X(r, e) {
  let o = new WeakMap(),
    n = 0;
  function s(i) {
    let a = r.listLanguages().length;
    if (i === void 0) return 0;
    if (a !== n) ((o = new WeakMap()), (n = a));
    let p = o.get(i) ?? K(r, i);
    return (o.set(i, p), Math.min(p, a, e));
  }
  return (i, a) => xr + a * (yr + _r * s(r.getLanguage(i)));
}
var Y = (r, e) => ({
  "before:highlight": (o) => {
    r.left = e(o.language, o.code.length);
  },
  "after:highlight": () => {
    let o = r.left < 0;
    if (((r.left = Number.POSITIVE_INFINITY), o)) throw new h();
  }
});
function L(r, e) {
  let o = r.highlightAuto("", [])._emitter.constructor;
  if ("isBounded" in o) return;
  if ((r.addPlugin(B(r)), !H(o))) return;
  let n = { left: Number.POSITIVE_INFINITY };
  (r.configure({ __emitter: N(o, n) }), r.addPlugin(Y(n, X(r, e))));
}
var Rr = (r) => L(r, Er);
var q = ["begin", "end", "match", "illegal"];
var Q = (r) => (e) => {
  let o = r.get(typeof e === "string" ? e : e.source);
  try {
    return o === void 0 ? e : new RegExp(o);
  } catch {
    return e;
  }
};
function _(r) {
  return typeof r === "object" && r !== null && Object.isFrozen(r) ? { ...r } : r;
}
function V(r, e) {
  let o = new Set(),
    n = [r],
    s = Q(e);
  while (n.length > 0) {
    let i = n.pop();
    if (!(typeof i === "object" && i !== null) || o.has(i)) continue;
    o.add(i);
    for (let p of q) {
      let g = i[p];
      if (g !== void 0 && g !== null) i[p] = Array.isArray(g) ? g.map(s) : s(g);
    }
    ((i.contains &&= i.contains.map(_)),
      (i.variants &&= i.variants.map(_)),
      (i.starts &&= _(i.starts)),
      n.push(...(i.contains ?? []), ...(i.variants ?? []), i.starts));
  }
  return r;
}
var Nr = 1000;
var rr = 1000;
var br = 16;
var Hr = 1000;
var Ir = 12;
var vr = 1500;
var Dr = 1e4;
var Gr = 16;
var T = (r) => [
  String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` +
    String.raw`(?:<[^<>]+>)?)[\*&\s]+)+` +
    String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`,
  String.raw`(?=[a-zA-Z_])` +
    String.raw`(?:(?=decltype\(auto\))|(?<!${r}[a-zA-Z_]\w*?))` +
    String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` +
    String.raw`(?:<[^<>]+>)?)[\*&\s]+){1,${Gr}}` +
    String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`
];
var er = [T("")];
var tr = [
  [
    String.raw`[ ]+((?:I|a|is|so|us|to|at|if|in|it|on|` +
      String.raw`[A-Za-z]+['](d|ve|re|ll|t|s|n)|[A-Za-z]+[-][a-z]+|` +
      String.raw`[A-Za-z][a-z]{2,})[.]?[:]?([.][ ]|[ ])){3}`,
    String.raw`(?<! )[ ]+((?:I|a|is|so|us|to|at|if|in|it|on|` +
      String.raw`[A-Za-z]+['](d|ve|re|ll|t|s|n)|[A-Za-z]+[-][a-z]+|` +
      String.raw`[A-Za-z][a-z]{2,})[.]?[:]?([.][ ]|[ ])){3}`
  ],
  [
    String.raw`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,
    String.raw`(?:(?<! )[ ]+)?(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`
  ]
];
var M = [T("(?!struct)")];
var or = [
  [
    String.raw`([a-zA-Z]\w*(<[a-zA-Z]\w*(\s*,\s*[a-zA-Z]\w*)*>)?(\[\])?\s+)+` +
      String.raw`[a-zA-Z]\w*\s*(<[^=]+>\s*)?\(`,
    String.raw`(?=[a-zA-Z])(?<![a-zA-Z]\w*?)` +
      String.raw`([a-zA-Z]\w*(<[a-zA-Z]\w*(\s*,\s*[a-zA-Z]\w*)*>)?(\[\])?\s+)` +
      String.raw`{1,${Ir}}[a-zA-Z]\w*\s*` +
      String.raw`(<[^=]{1,${rr}}?>\s*)?\(`
  ],
  [
    String.raw`[a-zA-Z]\w*\s*(<[^=]+>\s*)?\(`,
    String.raw`[a-zA-Z]\w*\s*` + String.raw`(<[^=]{1,${rr}}?>\s*)?\(`
  ]
];
var nr = [
  String.raw`(?:\.|\.\/|\/)?(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` +
    String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` +
    "`" +
    String.raw`{|}~]+)(?:(\.|\/)(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` +
    String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` +
    "`" +
    String.raw`{|}~]+))*`,
  String.raw`(\[\]|\[[^\]]+\]|[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+)(?==)`
].map((r) => [r, r.replaceAll(String.raw`[^\]]+\]`, String.raw`[^\]]{1,${Nr}}\]`)]);
var ir = [
  [
    String.raw`(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*')` +
      String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))*` +
      String.raw`(?=\s*=\s*[^#\s])`,
    String.raw`(?:(?<![A-Za-z0-9_-])[A-Za-z0-9_-]+|` +
      String.raw`(?<!\\)"(\\"|[^"])*"|'[^']*')` +
      String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))` +
      String.raw`{0,${br}}` +
      String.raw`(?=\s*=\s*[^#\s])`
  ]
];
var sr = [
  ["(`{3,})[^`](.|\\n)*?\\1`*[ ]*", "(`{3,})[^`][^\\r\\u2028\\u2029]*?\\1`*[ ]*"],
  [String.raw`(~{3,})[^~](.|\n)*?\1~*[ ]*`, String.raw`(~{3,})[^~][^\r\u2028\u2029]*?\1~*[ ]*`]
];
var ar = [
  [String.raw`\[.*?\]\(.*?\)`, String.raw`\[(?=(.*?\]\())\1.*?\)`],
  [
    String.raw`\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)`,
    String.raw`\[(?=(.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/)))` + String.raw`\1.*?\)`
  ],
  [
    String.raw`\[.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/.*?\)`,
    String.raw`\[(?=(.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/))\1.*?\)`
  ],
  [String.raw`\[.+?\]\([./?&#].*?\)`, String.raw`\[(?=(.+?\]\([./?&#]))\1.*?\)`]
];
var pr = [
  String.raw`(?:s|tr|y)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` +
    String.raw`(?:\\.|[^\\\/])*?\1[dualxmsipngr]{0,12}`,
  String.raw`(?:s|tr|y)\((?:\\.|[^\\\/])*?\)\(` +
    String.raw`(?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`,
  String.raw`(?:s|tr|y)\[(?:\\.|[^\\\/])*?\]\[` +
    String.raw`(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`,
  String.raw`(?:s|tr|y)\{(?:\\.|[^\\\/])*?\}\{` +
    String.raw`(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`,
  String.raw`(?:(?:m|qr)?)\/(?:\\.|[^\\\/])*?\/[dualxmsipngr]{0,12}`,
  String.raw`(?:m|qr)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`[dualxmsipngr]{0,12}`,
  String.raw`(?:m|qr)\((?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`,
  String.raw`(?:m|qr)\[(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`,
  String.raw`(?:m|qr)\{(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`
].map((r) => [r, r.replaceAll(")*?", `){0,${vr}}?`)]);
var gr = [
  [
    String.raw`\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|` +
      "await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)",
    String.raw`\b([1-9](_?[0-9])*|0(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|` +
      "await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)"
  ]
];
var mr = [
  [
    String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b)`,
    String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)` + String.raw`{0,${Hr}}?[^\S\n]*\1\b)`
  ]
];
var lr = [[String.raw`b?r(#*)"(.|\n)*?"\1(?!#)`, String.raw`b?r(#*)"[^]{0,${Dr}}?"\1(?!#)`]];
var ur = new Map([
  ["arduino", M],
  ["c", er],
  ["cpp", M],
  ["csharp", or],
  ["handlebars", nr],
  ["ini", ir],
  ["markdown", [...ar, ...sr]],
  ["perl", pr],
  ["python", gr],
  ["ruby", mr],
  ["rust", lr]
]);
var O = (r, e) => (o) => {
  let n = e(o);
  try {
    return V(n, new Map([...tr, ...(ur.get(r) ?? [])]));
  } catch {
    return e(o);
  }
};
var jr = /^[a-z0-9][a-z0-9_+#.-]{0,63}$/,
  zr = 16;
function Zr(r) {
  return r.default ?? r;
}
class dr {
  hljs = null;
  loaded = new Set();
  failed = new Set();
  runtimeDepsEnsured = new WeakSet();
  pluginLanguages = new Map();
  pluginAliases = new Set();
  generation = 0;
  core(r) {
    if (this.hljs) return this.hljs;
    let e = r.loadCore();
    Rr(e);
    for (let [o, n] of Object.entries(oYo)) if (!e.getLanguage(o)) e.registerLanguage(o, O(o, n));
    for (let [o, n] of this.pluginLanguages)
      if (!e.getLanguage(o)) this.registerResolvedPluginLanguage(e, o, n, { emitSadTelemetry: !0 });
    return ((this.hljs = e), e);
  }
  ensureLanguage(r, e) {
    let o = this.core(e),
      n = r.toLowerCase(),
      s = e.resolveId(n);
    if (s !== null) {
      if (this.failed.has(s)) return null;
      if (!this.loaded.has(s)) {
        let a = e.loaders[s];
        if (typeof a !== "function") return null;
        try {
          o.registerLanguage(s, O(s, Zr(a())));
        } catch (p) {
          return (this.failed.add(s), l(p), null);
        }
        this.loaded.add(s);
        for (let p of e.subLanguageDeps[s] ?? []) this.ensureLanguage(p, e);
      }
      return s;
    }
    let i = o.getLanguage(n);
    if (!i) return null;
    if (!this.runtimeDepsEnsured.has(i)) {
      this.runtimeDepsEnsured.add(i);
      for (let a of Ur(i)) if (a !== n) this.ensureLanguage(a, e);
    }
    return n;
  }
  get pluginGrammarGeneration() {
    return this.generation;
  }
  clearPluginLanguages() {
    if ((this.generation++, this.hljs))
      for (let r of this.pluginLanguages.keys()) this.hljs.unregisterLanguage(r);
    (this.pluginLanguages.clear(), this.pluginAliases.clear());
  }
  isReservedLanguageId(r) {
    return (
      Object.prototype.hasOwnProperty.call($Ve, r) ||
      Object.prototype.hasOwnProperty.call(kEt, r) ||
      Object.prototype.hasOwnProperty.call(oYo, r) ||
      zri.has(r) ||
      this.pluginLanguages.has(r) ||
      this.pluginAliases.has(r)
    );
  }
  isPluginLanguageId(r) {
    return this.pluginLanguages.has(r) || this.pluginAliases.has(r);
  }
  addPluginLanguage(r, e, o) {
    if (this.isReservedLanguageId(r)) return !1;
    let n = o
        .map((i) => i.toLowerCase())
        .filter((i) => jr.test(i) && i !== r && !this.isReservedLanguageId(i))
        .slice(0, zr),
      s = (i) => {
        let a = e(i);
        return ((a.name = r), (a.aliases = n), (a.disableAutodetect = !0), a);
      };
    this.pluginLanguages.set(r, s);
    for (let i of n) this.pluginAliases.add(i);
    if (this.hljs && !this.hljs.getLanguage(r))
      return this.registerResolvedPluginLanguage(this.hljs, r, s, { emitSadTelemetry: !1 });
    return !0;
  }
  registerResolvedPluginLanguage(r, e, o, { emitSadTelemetry: n }) {
    try {
      let s = O(e, o)(r);
      return (
        r.registerLanguage(e, () => s),
        r.highlight("", { language: e, ignoreIllegals: !0 }),
        !0
      );
    } catch (s) {
      if ((this.pluginLanguages.delete(e), r.getLanguage(e))) r.unregisterLanguage(e);
      if (n) f("plugin_hljs_languages", "resolve_failed");
      return (
        t(
          `plugin hljs grammar '${e}' failed to resolve at registration: ${s instanceof Error ? s.message : String(s)}`,
          { level: "error" }
        ),
        !1
      );
    }
  }
}
function Ur(r) {
  let e = new Set(),
    o = new Set();
  function n(s) {
    if (s === null || typeof s !== "object" || o.has(s)) return;
    o.add(s);
    let i = s;
    for (let a of [i.subLanguage ?? []].flat()) if (typeof a === "string") e.add(a);
    for (let a of i.contains ?? []) n(a);
    n(i.starts);
    for (let a of i.variants ?? []) n(a);
  }
  return (n(r), e);
}
var sDe = new dr();
function pan(r) {
  let e = r.toLowerCase();
  return Object.prototype.hasOwnProperty.call($Ve, e)
    ? e
    : Object.prototype.hasOwnProperty.call(kEt, e)
      ? (kEt[e] ?? null)
      : null;
}
async function rFt(r) {
  let e = Fr(r).slice(1);
  if (!e) return b("unknown");
  let o = e.toLowerCase(),
    n = pan(o);
  if (n !== null) return hr($Ve[n]);
  if (sDe.isPluginLanguageId(o)) return b("plugin");
  return hr(Object.prototype.hasOwnProperty.call(Gnr, o) ? Gnr[o] : void 0);
}
function hr(r) {
  return r === void 0 ? b("unknown") : Hn(r);
}
export { fan, oqn, xIo, PIo, IIo, sDe, pan, rFt };

//# sourceMappingURL=chunk-4h2t9wzn.js.map
