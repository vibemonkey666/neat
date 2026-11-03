// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function Ji(t, n) {
  return t.repeat(Number.isFinite(n) && n > 0 ? n : 0);
}
function di(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function va(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function I(t, n, e = n + "s") {
  return t === 1 ? n : e;
}
function xq(t) {
  let n = 0;
  for (let e = 0; e < t.length; e++) {
    let r = t.charCodeAt(e);
    if (r >= 55296 && r <= 56319 && e + 1 < t.length) {
      let i = t.charCodeAt(e + 1);
      if (i >= 56320 && i <= 57343) e++;
    }
    n++;
  }
  return n;
}
function yi(t, n) {
  if (t.length <= n) return t;
  let e = [];
  for (let r of t) {
    if (e.length >= n) break;
    e.push(r);
  }
  return e.join("");
}
function re(t, n) {
  if (n <= 0) return "";
  if (t.length <= n) return t;
  let e = t.slice(0, n),
    r = e.charCodeAt(n - 1);
  return gYt(r >= 55296 && r <= 56319 ? e.slice(0, -1) : e);
}
function Ja(t, n) {
  if (n <= 0) return "";
  if (t.length <= n) return t;
  let e = t.slice(-n),
    r = e.charCodeAt(0);
  return gYt(r >= 56320 && r <= 57343 ? e.slice(1) : e);
}
function _X(t, n, e, r) {
  if (t.length <= n + e) return t;
  let i = n > 0 ? re(t, n) : "",
    o = e > 0 ? Ja(t, e) : "";
  return `${i}${r(t.length - i.length - o.length)}${o}`;
}
function gYt(t) {
  if (typeof Buffer < "u") return Buffer.from(t, "utf16le").toString("utf16le");
  return x(t);
}
function x(t) {
  let e = [];
  for (let r = 0; r < t.length; r += 8192) {
    let i = Math.min(r + 8192, t.length),
      o = new Uint16Array(i - r);
    for (let s = r; s < i; s++) o[s - r] = t.charCodeAt(s);
    e.push(String.fromCharCode(...o));
  }
  return e.join("");
}
var m = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/,
  a = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g,
  l =
    typeof String.prototype.isWellFormed === "function"
      ? Function.prototype.call.bind(String.prototype.isWellFormed)
      : void 0,
  f =
    typeof String.prototype.toWellFormed === "function"
      ? Function.prototype.call.bind(String.prototype.toWellFormed)
      : void 0;
function Ad(t) {
  if (l) return l(t);
  return !m.test(t);
}
function Xf(t) {
  if (f) return f(t);
  return t.replace(a, "\uFFFD");
}
function Nb(t) {
  if (l && l(t)) return t;
  return t.replace(a, "");
}
function hYe(t) {
  let n = !1,
    e = [t];
  while (e.length > 0) {
    let r = e.pop();
    if (Array.isArray(r))
      for (let i = 0; i < r.length; i++) {
        let o = r[i];
        if (typeof o === "string") {
          if (!Ad(o)) ((r[i] = Xf(o)), (n = !0));
        } else if (o !== null && typeof o === "object") e.push(o);
      }
    else if (r !== null && typeof r === "object") {
      let i = r;
      for (let o of Object.keys(i)) {
        let s = i[o];
        if (typeof s === "string") {
          if (!Ad(s)) ((i[o] = Xf(s)), (n = !0));
        } else if (s !== null && typeof s === "object") e.push(s);
      }
    }
  }
  return n;
}
function pdr(t) {
  let n = [t];
  while (n.length > 0) {
    let e = n.pop();
    if (Array.isArray(e))
      for (let r = 0; r < e.length; r++) {
        let i = e[r];
        if (typeof i === "string") {
          if (!Ad(i)) return !0;
        } else if (i !== null && typeof i === "object") n.push(i);
      }
    else if (e !== null && typeof e === "object") {
      let r = e;
      for (let i of Object.keys(r)) {
        let o = r[i];
        if (typeof o === "string") {
          if (!Ad(o)) return !0;
        } else if (o !== null && typeof o === "object") n.push(o);
      }
    }
  }
  return !1;
}
function Ze(t, n) {
  let e = t.indexOf(n);
  return e === -1 ? t : t.slice(0, e);
}
function fee(t, n) {
  let e = t.length;
  while (e > 0 && n.includes(t[e - 1])) e--;
  return t.slice(0, e);
}
function vC(t, n) {
  return t.startsWith(n) ? t.slice(n.length) : t;
}
function Vg(t, n) {
  return t.endsWith(n) ? t.slice(0, t.length - n.length) : t;
}
var g = /^[\x00-\x7f]*$/;
function nFe(t, n) {
  let e = g.test(t);
  if (e !== g.test(n)) return e ? -1 : 1;
  if (e) return t.localeCompare(n);
  if (t === n) return 0;
  return t < n ? -1 : 1;
}
function Or(t) {
  return Ze(
    t,
    `
`
  );
}
function Ft(t, n, e = 0) {
  let r = 0,
    i = t.indexOf(n, e);
  while (i !== -1) (r++, (i = t.indexOf(n, i + 1)));
  return r;
}
function pee(t) {
  return t.replace(/[\uFF10-\uFF19]/g, (n) => String.fromCharCode(n.charCodeAt(0) - 65248));
}
function bX(t) {
  return t.replaceAll("\u3000", " ");
}
var p = 33554432;
function C9r(t, n = ",", e = p) {
  let i = "";
  for (let o of t) {
    let s = i ? n : "",
      c = s + o;
    if (i.length + c.length <= e) i += c;
    else {
      let u = e - i.length - s.length - 14;
      if (u > 0) i += s + o.slice(0, u) + "...[truncated]";
      else i += "...[truncated]";
      return i;
    }
  }
  return i;
}
class tTn {
  maxSize;
  content = "";
  isTruncated = !1;
  totalBytesReceived = 0;
  constructor(t = p) {
    this.maxSize = t;
  }
  append(t) {
    let n = typeof t === "string" ? t : t.toString();
    if (
      ((this.totalBytesReceived += n.length),
      this.isTruncated && this.content.length >= this.maxSize)
    )
      return;
    if (this.content.length + n.length > this.maxSize) {
      let e = this.maxSize - this.content.length;
      if (e > 0) this.content += n.slice(0, e);
      this.isTruncated = !0;
    } else this.content += n;
  }
  toString() {
    if (!this.isTruncated) return this.content;
    let t = this.totalBytesReceived - this.maxSize,
      n = Math.round(t / 1024);
    return (
      this.content +
      `
... [output truncated - ${n}KB removed]`
    );
  }
  clear() {
    ((this.content = ""), (this.isTruncated = !1), (this.totalBytesReceived = 0));
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
function nTn(t, n) {
  let e = t.split(`
`);
  if (e.length <= n) return t;
  return (
    e.slice(0, n).join(`
`) + "\u2026"
  );
}
function kl(t, n) {
  if (t.length <= n) return t;
  let e = re(t, n);
  return `${e}\u2026 [+${t.length - e.length} chars]`;
}
function jH(t, n) {
  if (t.length <= n) return t;
  let e = re(t, n - 1),
    r = e.search(/\s\S*$/),
    i = r === -1 ? "" : e.slice(0, r).trimEnd();
  return `${i.length > n / 2 ? i : e.trimEnd()}\u2026`;
}
var SX = /[\x00-\x08\x0E-\x1F\x7F-\x9F]/g,
  Pq = /[\x00-\x1F\x7F-\x9F]/,
  lCt = /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/;
function zr(t) {
  return t.replace(SX, "").replace(/\s+/g, " ").trim();
}
function $M(t) {
  return t.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu, "");
}
var d =
  /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?(?:\u0007|\u001B\u005C|\u009C))|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g;
function qg(t) {
  return Nb(t)
    .replace(d, "")
    .replace(/[\p{Cc}\p{Cf}\u2028\u2029]/gu, "");
}
function WH(t) {
  let n = /[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2028\u2029]/gu;
  if (!n.test(t)) return t;
  let e = "";
  for (let { segment: r } of new Intl.Segmenter(void 0, { granularity: "grapheme" }).segment(t)) {
    let i = /\p{Extended_Pictographic}|\p{Regional_Indicator}|^[#*0-9]\uFE0F?\u20E3$/u.test(r),
      o = /^\u{1F3F4}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,6}\u{E007F}$/u.test(r);
    ((n.lastIndex = 0),
      (e += r.replace(n, (s, c) => {
        if (
          s ===
            `
` ||
          s === "\t"
        )
          return s;
        let u = s.codePointAt(0) ?? 0;
        if (
          i &&
          (s === "\uFE0F" ||
            s === "\uFE0E" ||
            s === "\u20E3" ||
            (s === "\u200D" && c + s.length < r.length) ||
            (o && u >= 917536 && u <= 917631))
        )
          return s;
        if (u === 27) return "\u241B";
        if (u < 32) return String.fromCodePoint(9216 + u);
        if (u === 127) return "\u2421";
        return `\\u{${u.toString(16).toUpperCase()}}`;
      })));
  }
  return e;
}
function Wc(t) {
  return WH(t).replace(/\n/g, "\u2424").replace(/\t/g, "\u2409");
}
function nN(t) {
  let n = qg(Or(t));
  return n.length > 200 ? `${re(n, 200)}\u2026` : n;
}
function b6(t, n) {
  return re(dc(t), n);
}
function dc(t) {
  return $M(zr(t.replace(d, ""))).trim();
}
var b = 8;
function ets(t, n = 0) {
  if (typeof t === "string") return t;
  if (typeof t === "number" || typeof t === "boolean") return String(t);
  if (Array.isArray(t)) {
    if (n >= b) return;
    let e = [];
    for (let r of t) {
      let i = r === null || r === void 0 ? "" : ets(r, n + 1);
      if (i === void 0) return;
      e.push(i);
    }
    return e.join(",");
  }
  return typeof t === "object" &&
    t !== null &&
    Object.getPrototypeOf(t) === Object.prototype &&
    !Object.hasOwn(t, "toString")
    ? "[object Object]"
    : void 0;
}
var mdr = 500;
function TSe(t, n) {
  if (t.length * 3 <= n) return t;
  let e = new TextEncoder(),
    r = new Uint8Array(Math.max(0, Math.min(n, 4194304))),
    i = 0,
    o = 0;
  while (o < t.length) {
    let s = n - i;
    if (s <= 0) break;
    let c = s < r.length ? r.subarray(0, s) : r,
      { read: u, written: h } = e.encodeInto(t.slice(o), c);
    if (u === 0) break;
    ((o += u), (i += h));
  }
  return o >= t.length ? t : t.slice(0, o);
}
function gdr(t, n = "") {
  let e = (t.match(/`+/g) ?? []).reduce((i, o) => Math.max(i, o.length), 0),
    r = "`".repeat(Math.max(3, e + 1));
  return `${r}${n.replace(/[`\s].*$/s, "")}
${t}
${r}`;
}
var uit = /(\u2026|\.\.\.)$/;
export {
  Ji,
  di,
  va,
  I,
  xq,
  yi,
  re,
  Ja,
  _X,
  gYt,
  Ad,
  Xf,
  Nb,
  hYe,
  pdr,
  Ze,
  fee,
  vC,
  Vg,
  nFe,
  Or,
  Ft,
  pee,
  bX,
  C9r,
  tTn,
  nTn,
  kl,
  jH,
  SX,
  Pq,
  lCt,
  zr,
  $M,
  qg,
  WH,
  Wc,
  nN,
  b6,
  dc,
  ets,
  mdr,
  TSe,
  gdr,
  uit
};

//# sourceMappingURL=chunk-a16y5hcz.js.map
