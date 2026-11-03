// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { extname as h } from "path";
var fjr = "<!--claude-mermaid-runtime-begin:",
  U1o = "<!--claude-mermaid-runtime-end-->",
  pjr = "<!--claude-hljs-runtime-begin:",
  B1o = "<!--claude-hljs-runtime-end-->",
  xXn = "<!-- chart-runtime -->",
  mjr = "<!-- /chart-runtime -->";
var aWt = "/_runtime/mermaid-11.16.1.min.js",
  j6s = '<script src="/_runtime/mermaid-11.16.1.min.js">';
var Bye = "<!-- frame-runtime -->",
  C2e = "<!-- /frame-runtime -->";
function W6s(t) {
  return (
    t.includes("<!--claude-mermaid-runtime-begin:") ||
    t.includes("<!--claude-mermaid-runtime-end-->") ||
    t.includes("<!--claude-hljs-runtime-begin:") ||
    t.includes("<!--claude-hljs-runtime-end-->") ||
    t.includes("<!-- chart-runtime -->") ||
    t.includes("<!-- /chart-runtime -->")
  );
}
function tSt(t) {
  if (/<\/script/i.test(t)) return "bundle contains </script";
  if (hjr(t)) return "bundle contains <!-- together with <script (double-escaped state)";
  if (/<base\s+href="\/_f\//i.test(t)) return "bundle matches the stale /_f/ base-tag strip regex";
  if (/\sdata-frame-runtime="/i.test(t))
    return "bundle matches the stale data-frame-runtime strip regex";
  if (
    t.includes("<!--claude-mermaid-runtime-begin:") ||
    t.includes("<!--claude-mermaid-runtime-end-->")
  )
    return "bundle contains a mermaid runtime sentinel";
  if (t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->"))
    return "bundle contains an hljs runtime sentinel";
  if (t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->"))
    return "bundle contains the chart-runtime sentinel";
  if (t.includes("<!-- frame-runtime -->") || t.includes("<!-- /frame-runtime -->"))
    return "bundle contains a frame-runtime serve sentinel";
  return null;
}
var gjr = new Set([
  " ",
  "\t",
  `
`,
  "\f",
  "\r",
  "/",
  ">"
]);
function d7(t) {
  let e = 0,
    n = t.length;
  while (e < n && s(t.charCodeAt(e))) e++;
  while (n > e && s(t.charCodeAt(n - 1))) n--;
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
function s(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function PXn(t, e) {
  if (!e.length) return t;
  let n = "",
    i = 0;
  for (let [r, o] of e) ((n += t.slice(i, r)), (i = o));
  return n + t.slice(i);
}
function hjr(t) {
  return t.includes("<!--") && /<script/i.test(t);
}
var A = /<\/script(?=[\t\n\f\r />])/i,
  M = /<\/style(?=[\t\n\f\r />])/i;
function g(t, e) {
  let n = t.match(e);
  if (!n) return null;
  let i = n.index ?? 0,
    r = i + n[0].length,
    o = t.indexOf(">", r);
  if (o === -1 || /['"]/.test(t.slice(r, o))) return null;
  return { data: i, after: o + 1 };
}
function j1o(t) {
  let e = g(t, A);
  if (!e || hjr(t.slice(0, e.data))) return -1;
  return e.after;
}
function G6s(t) {
  return g(t, M);
}
var m = 16,
  a = ' data-id="',
  W1o = a.length + m + 1,
  yjr = "(?!-)(?:(?!--)[A-Za-z0-9_-]){16}",
  b = new RegExp(`^${yjr}$`),
  nSt = `${a}${yjr}"`;
function _jr(t, e) {
  if (!t.startsWith(a, e)) return 0;
  let n = e + a.length,
    i = n + m;
  return t.charCodeAt(i) === 34 && b.test(t.slice(n, i)) ? W1o : 0;
}
function _(t, e, n) {
  if (t.startsWith(n, e)) return n.length;
  let i = n.length - 1;
  if (!t.startsWith(n.slice(0, i), e)) return 0;
  let r = _jr(t, e + i);
  return r && t.charCodeAt(e + i + r) === 62 ? i + r + 1 : 0;
}
function IXn(t, e) {
  return _(t, e, "<script>");
}
function z6s(t, e) {
  return _(t, e, "<style>");
}
var E = new RegExp(
  '<script src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"',
  "y"
);
function K6s(t, e) {
  E.lastIndex = e;
  let n = E.exec(t);
  if (n === null) return null;
  let i = e + n[0].length;
  if (t.charCodeAt(i) === 62) return { len: i + 1 - e, annotated: !1 };
  let r = _jr(t, i);
  return r && t.charCodeAt(i + r) === 62 ? { len: i + r + 1 - e, annotated: !0 } : null;
}
function Xpn(t) {
  let e = d7(t);
  if (!e.length) return -1;
  let n = 0;
  while (e.length) {
    let i = IXn(e, 0);
    if (!i) return -1;
    if (i > 8) n++;
    let r = j1o(e.slice(i));
    if (r < 0) return -1;
    e = d7(e.slice(i + r));
  }
  return n;
}
function R2e(t, e) {
  let n = 0,
    i = e;
  while (i < t.length) {
    let r = t.charCodeAt(i);
    if (n === 3) {
      if (r === 34 || r === 39) {
        let o = t.indexOf(r === 34 ? '"' : "'", i + 1);
        if (o < 0) return -1;
        ((i = o + 1), (n = 5));
        continue;
      }
      if (s(r)) {
        i++;
        continue;
      }
      if (r === 62) return i + 1;
      ((n = 4), i++);
      continue;
    }
    if (r === 62) return i + 1;
    if (s(r)) n = n === 1 || n === 2 ? 2 : 0;
    else if (r === 47 && n !== 4) n = 0;
    else if (r === 61 && (n === 1 || n === 2)) n = 3;
    else n = n === 4 ? 4 : 1;
    i++;
  }
  return -1;
}
var R = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".map": "application/json",
  ".geojson": "application/json",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".csv": "text/csv",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/vnd.microsoft.icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pdf": "application/pdf",
  ".wasm": "application/wasm",
  ...{}
};
function $Y(t) {
  return R[OXn(h(t))];
}
function OXn(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function kU(t) {
  let e = t.indexOf(";");
  return OXn(d7(e >= 0 ? t.slice(0, e) : t));
}
var D = new Set([
    "text/markdown",
    "application/json",
    "application/manifest+json",
    "text/css",
    "text/plain",
    "text/csv"
  ]),
  C = new Set([
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "font/woff2",
    "font/woff",
    "font/ttf",
    "font/otf"
  ]);
function G1o(t) {
  let e = kU(t);
  return !D.has(e) && !C.has(e);
}
var v = /[\u2028\u2029\p{Cf}\p{Default_Ignorable_Code_Point}]/u;
function c7(t) {
  return Array.from(t, (e) => {
    let n = e.codePointAt(0) ?? 0;
    return n <= 31 || (n >= 127 && n <= 159) || v.test(e) ? " " : e;
  }).join("");
}
var bjr = ".workshop.md";
function z1o(t) {
  return t.endsWith(bjr);
}
function Jpn(t) {
  return t.endsWith(".workshop.html");
}
function MXn(t) {
  return Jpn(t) || z1o(t);
}
var K1o = new Set([
    "text/html",
    "application/xhtml+xml",
    "application/xml",
    "text/xml",
    "image/svg+xml"
  ]),
  Qpn = new Set([...K1o, ...[]]),
  Sjr = "image/svg+xml",
  Zpn = new Set([...Qpn].filter((t) => t !== Sjr)),
  V6s = new Set(["text/html", ...[]]),
  emn = new Set(["text/javascript", "application/javascript", "application/wasm"]),
  V1o = new Set([
    "text/plain",
    "text/markdown",
    "text/csv",
    "text/css",
    "application/json",
    "application/manifest+json",
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/x-icon",
    "image/vnd.microsoft.icon",
    "font/woff",
    "font/woff2",
    "font/ttf",
    "font/otf",
    "application/font-woff",
    "application/font-woff2",
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/webm",
    "video/mp4",
    "video/webm",
    "video/ogg"
  ]);
function Ga(t) {
  return JSON.stringify(t).replace(/[^\x20-\x7e]|[<>]/gu, y);
}
function y(t) {
  return t
    .split("")
    .map((e) => `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}`)
    .join("");
}
var O = ["pages", "styles", "scripts", "data", "images", "fonts", "media", "documents"];
function I(t) {
  if (t === "text/html") return "pages";
  if (t === "text/css") return "styles";
  if (t === "text/javascript" || t === "application/javascript" || t === "application/wasm")
    return "scripts";
  if (t.startsWith("image/")) return "images";
  if (t.startsWith("font/")) return "fonts";
  if (t.startsWith("audio/") || t.startsWith("video/")) return "media";
  if (t === "application/pdf") return "documents";
  return "data";
}
var P = O.flatMap((t) => {
    let e = Object.entries(R)
      .filter(([, n]) => I(n) === t)
      .map(([n]) => n);
    return e.length > 0 ? [`${t} ${e.join(" ")}`] : [];
  }).join("; "),
  S = "Nothing was published because one file is of a type artifacts don't serve: ",
  l = " (contentType ",
  N = ") \u2014 the served spelling is exactly ",
  T = ") \u2014 that extension is already served as ",
  u = `Served types, by extension (a file named with one of these needs no contentType): ${P}.`,
  w =
    'A source, config, log or other text file goes as text/plain (contentType "text/plain", or a .txt name) or rendered into the page.',
  f =
    "A document or archive (.docx .xlsx .pptx .zip) can't be attached from here yet under any contentType: render what the page needs from it into the page, or link to where it already lives; a data: or blob: download link is not a way around this (the viewer blocks page-initiated downloads).";
function q1o(t, e, n, i) {
  let r = `${S}${t} ${Ga(e)}${l}${Ga(n)}`;
  if (i !== void 0)
    return `${r}${N}${Ga(i)}, lowercase with no parameters. Publish again with that contentType.`;
  let o = $Y(e);
  if (o !== void 0 && I(o) !== null)
    return `${r}${T}${Ga(o)}. Publish again with no contentType on that file.`;
  return `${r}). ${u} Publish again with every file as a served type. ${w} ${f}`;
}
function tmn(t, e) {
  let n = OXn(h(e)),
    i = n === "" ? "no extension to infer a served type from" : `extension ${Ga(n)} is not served`;
  return t === "files"
    ? `files: ${Ga(e)} (no contentType, and ${i}) \u2014 nothing was published. ${u} Publish again with every file as a served type. ${w} ${f}`
    : `file_path: ${Ga(e)} (${i}) \u2014 nothing was published. ${u} Rename a text or data file to one of these (.txt .json .csv), or make another file the \`file_path\` and list this one under \`files\` with contentType "text/plain". ${f}`;
}
var x = /"(?:[^"\\]|\\.)*"/y;
function c(t, e) {
  x.lastIndex = e;
  let n = x.exec(t);
  if (n === null) return;
  try {
    let i = JSON.parse(n[0]);
    return typeof i === "string" ? { raw: i, end: e + n[0].length } : void 0;
  } catch {
    return;
  }
}
function q6s(t) {
  for (let e of ["supporting file", "file"]) {
    let n = `${S}${e} `;
    if (!t.startsWith(n)) continue;
    let i = c(t, n.length);
    if (i === void 0 || !t.startsWith(l, i.end)) return;
    let r = c(t, i.end + l.length);
    if (r === void 0 || !/^[\x20-\x7e]{1,127}$/.test(r.raw)) return;
    let o = t.startsWith(N, r.end) ? kU(r.raw) : void 0;
    if (t !== q1o(e, i.raw, r.raw, o)) return;
    let p = Ga(i.raw);
    return o !== void 0 || t.startsWith(T, r.end)
      ? `Not published: ${p} was given a file type label artifacts don't recognize. Claude can fix the label and publish again.`
      : `Not published: ${p} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.`;
  }
  for (let e of ["files", "file_path"]) {
    let n = `${e}: `;
    if (!t.startsWith(n)) continue;
    let i = c(t, n.length);
    if (i === void 0 || t !== tmn(e, i.raw)) return;
    let r = Ga(i.raw);
    return e === "files"
      ? `Not published: ${r} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.`
      : `Not published: ${r} is a type of file artifacts can't include. Claude can convert or rename it and publish again.`;
  }
  return;
}
export {
  fjr,
  U1o,
  pjr,
  B1o,
  xXn,
  mjr,
  aWt,
  j6s,
  Bye,
  C2e,
  W6s,
  tSt,
  gjr,
  d7,
  PXn,
  hjr,
  j1o,
  G6s,
  W1o,
  yjr,
  nSt,
  _jr,
  IXn,
  z6s,
  K6s,
  Xpn,
  R2e,
  $Y,
  OXn,
  kU,
  G1o,
  c7,
  bjr,
  z1o,
  Jpn,
  MXn,
  K1o,
  Qpn,
  Sjr,
  Zpn,
  V6s,
  emn,
  V1o,
  Ga,
  q1o,
  tmn,
  q6s
};

//# sourceMappingURL=chunk-hp871ge6.js.map
