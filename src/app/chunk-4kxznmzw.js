// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ji, va, re, Nb, Ze, zr } from "./chunk-a16y5hcz.js";
import { bie, Ne } from "./chunk-2qx8pe6s.js";
import { es, q, J } from "./chunk-wrtp8qz8.js";
import { zCt } from "./chunk-qq3ygwcj.js";
import { R, E, G, $B, I2 } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import {
  In,
  Yn,
  cy,
  A_,
  ml,
  DB,
  gk,
  zy,
  k6,
  EW,
  YH,
  Fa,
  gl,
  lpe,
  Yw,
  XH,
  MR,
  Fl,
  zs,
  wA,
  QH,
  T6
} from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Bss } from "./chunk-w2jwj725.js";
import { Le, up } from "./chunk-jazcqqqr.js";
import { E2, sts } from "./chunk-45h8cn90.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
var hr = new RegExp("[\\p{M}\\uFF9E\\uFF9F]{32,}", "gu"),
  mr = new RegExp("[\\p{M}\\uFF9E\\uFF9F]", "u");
var ze = new Map(),
  ue = [],
  Ve = new Map();
function Se(e, n) {
  return e !== n && (e + n).normalize("NFD") === n + e;
}
function Pt(e) {
  let n = ze.get(e);
  if (n !== void 0) return n;
  let r = String.fromCodePoint(e),
    i = null;
  if (r === "\u0334" || Se(r, "\u0334") || Se("\u0345", r)) {
    let s = 0,
      o = ue.length;
    while (s < o && i === null) {
      let a = (s + o) >> 1,
        u = ue[a];
      if (Se(r, u.sample)) s = a + 1;
      else if (Se(u.sample, r)) o = a;
      else i = u;
    }
    if (i === null) {
      ((i = { order: s, sample: r }), ue.splice(s, 0, i));
      for (let a = s + 1; a < ue.length; a++) ue[a].order = a;
    }
  }
  return (ze.set(e, i), i);
}
function Ft(e) {
  let n = Ve.get(e);
  if (n === void 0)
    ((n = Array.from(String.fromCodePoint(e).normalize("NFKD"), (r) => r.codePointAt(0))),
      Ve.set(e, n));
  return n;
}
var It = 4096;
function yr(e, n) {
  let r = "";
  for (let i = 0; i < n; i += It) r += String.fromCodePoint(...e.subarray(i, Math.min(i + It, n)));
  return r;
}
function br(e) {
  let n = new Int32Array(e.length + 16),
    r = 0;
  for (let a = 0; a < e.length;) {
    let u = e.codePointAt(a);
    a += u > 65535 ? 2 : 1;
    for (let c of Ft(u)) {
      if (r === n.length) {
        let l = new Int32Array(n.length * 2);
        (l.set(n), (n = l));
      }
      ((n[r++] = c), Pt(c));
    }
  }
  let i = new Int16Array(r);
  for (let a = 0; a < r; a++) i[a] = ze.get(n[a])?.order ?? -1;
  let s = n.slice(0, r),
    o = new Int32Array(ue.length);
  for (let a = 0; a < r;) {
    let u = a,
      c = !0;
    while (u < r && i[u] >= 0) ((c &&= u === a || i[u - 1] <= i[u]), u++);
    if (c) {
      a = u + 1;
      continue;
    }
    o.fill(0);
    for (let d = a; d < u; d++) o[i[d]]++;
    let l = a;
    for (let d = 0; d < o.length; d++) {
      let g = o[d];
      ((o[d] = l), (l += g));
    }
    for (let d = a; d < u; d++) s[o[i[d]]++] = n[d];
    a = u;
  }
  return yr(s, r);
}
function Les(e) {
  return e.length < 32 ? e : e.replace(hr, br);
}
var Dt = 128;
function Nt(e) {
  if (e < 768) return !0;
  let n = Ve.get(e);
  if (n === void 0 && !mr.test(String.fromCodePoint(e))) return !0;
  return Pt((n ?? Ft(e))[0]) === null;
}
function Er(e, n) {
  let r = n;
  if (
    r < e.length &&
    (e.charCodeAt(r) & 64512) === 56320 &&
    (e.charCodeAt(r - 1) & 64512) === 55296
  )
    r++;
  while (r < e.length) {
    let i = e.codePointAt(r);
    if (Nt(i)) break;
    r += i > 65535 ? 2 : 1;
  }
  return Math.min(r, e.length);
}
function kr(e) {
  let n = e.length;
  while (n > 0) {
    if (
      (n--, n > 0 && (e.charCodeAt(n) & 64512) === 56320 && (e.charCodeAt(n - 1) & 64512) === 55296)
    )
      n--;
    if (Nt(e.codePointAt(n))) return n;
  }
  return 0;
}
function $t(e, n) {
  let r = Les(e);
  if (r.length <= Dt) return r.normalize(n);
  let i = [],
    s = "";
  for (let o = 0; o < r.length;) {
    let a = Er(r, o + Dt),
      u = (s + r.slice(o, a)).normalize(n),
      c = a === r.length ? u.length : kr(u);
    (i.push(u.slice(0, c)), (s = u.slice(c)), (o = a));
  }
  return i.join("");
}
function pW(e) {
  return $t(e, "NFKC");
}
function Api(e) {
  return $t(e, "NFKD");
}
var Sr = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  mW = 256,
  sdr = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function xr(e) {
  return e.length <= 256 && !sdr.test(e);
}
function Rq(e) {
  return e.length > 0 && xr(e);
}
function oit(e) {
  return e.length <= 256 && /^[A-Za-z0-9_:.-]+$/.test(e);
}
function idr(e) {
  return e.length <= 256 && /^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e);
}
function Nes(e) {
  return e.length <= 256 && /^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e);
}
function NM(e) {
  return yc(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
function yc(e) {
  return e.replace(Sr, (n) => `&#${n.charCodeAt(0)};`);
}
function gW(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function gf(e) {
  return yc(gW(String(e ?? "")));
}
function k9r(e) {
  return gf(e).replaceAll('"', "&quot;");
}
function yn(e) {
  return Bun.stripANSI(e);
}
function J$e(e) {
  return Nb(yn(Nb(String(e))));
}
function lP(e) {
  return e.replace(/[^\n\r\v\f\x85\u2028\u2029]+/g, (n) => yn(n));
}
var Bt = "\\p{Default_Ignorable_Code_Point}\\u2800",
  Hb = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${Bt}`,
  Q$e = String.raw`\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2800\u3164\ufe00-\ufe0f\uffa0\ufff0-\ufffb\uDC00-\uDFFF\uDB40-\uDB43`,
  Mt = String.raw`\u0600-\u0605\u06dd\u070f\u0890\u0891\u08e2`,
  sit = `[${Q$e}${Mt}\\ufeff]*`,
  Cpi = new RegExp(`[${Q$e}${Mt}\\ufeff]`);
function mYe(e) {
  return e.replace(/([a-z)])(?=[a-z(\[])/gi, `$1${sit}`).replace(/\[_-\]\?/g, `(?:[_-]${sit})?`);
}
var je = new RegExp(`[${Hb}]+`, "gu"),
  Ye = "\\u200D\\uFE0E\\uFE0F",
  wr = new RegExp(`(?:(?![${Ye}])[${Hb}])+`, "gu"),
  Ar = new RegExp(`(?:(?![${Ye}\\n])[${Hb}])+`, "gu"),
  Rr = new RegExp(`(?<!\\S)[${Ye}]+`, "gu"),
  _r = /\p{Cs}/gu;
function SC(e, n, r) {
  let i = yn(e.replace(_r, "\u200B"));
  if (r !== void 0 && "keepSpelledJoiners" in r) {
    let a = new Set();
    if (i.length <= Fr && Ut.test(i)) {
      Ae ??= new RegExp("\\p{RGI_Emoji}", "gv");
      for (let u of [Ae, Wt])
        for (let { index: c, 0: l } of i.matchAll(u))
          for (let d = c; d < c + l.length; d++) a.add(d);
    }
    return i.replace(je, (u, c) => {
      let l = "";
      for (let d = 0; d < u.length; d++) l += a.has(c + d) ? u.charAt(d) : l.endsWith(n) ? "" : n;
      return l;
    });
  }
  let s = r?.keepNewlines === !0 || r?.keepEmojiJoiners === !0,
    o = i.replace(r?.keepNewlines ? Ar : s ? wr : je, n);
  return s ? o.replace(Rr, "") : o;
}
var vr = new RegExp(`[${Hb}]`, "u"),
  Or = /(?! )\p{Zs}|[\uFFFC\u{1D159}\u{13441}\u{13442}\u{16FE4}]|^ | $/u,
  he = "[\\p{M}\\u1160-\\u11FF\\uD7B0-\\uD7FF]",
  Tr = new RegExp(
    `(?<![\\p{L}\\p{N}\\p{M}])${he}|${he}{9}|\\p{Soft_Dotted}\\p{M}*\\u0307|[\\u0131\\u0237]\\p{M}|(?<=[\\p{sc=Latin}\\p{sc=Common}]${he}*)(?!\\p{sc=Inherited})${he}`,
    "u"
  ),
  Lr = String.raw`\u0620\u0626\u0628\u062A-\u062E\u0633-\u063F\u0641-\u0647\u0649\u064A\u066E\u066F\u0678-\u0687\u069A-\u06BF\u06C1\u06C2\u06CC\u06CE\u06D0\u06D1\u06FA-\u06FC\u06FF\u0750-\u0758\u075C-\u076A\u076D-\u0770\u0772\u0775-\u0777\u077A-\u077F\u0886\u0889-\u088D\u088F\u08A0-\u08A9\u08AF\u08B0\u08B3-\u08B8\u08BA-\u08C8`,
  Cr = String.raw`\u0620\u0622-\u063F\u0641-\u064A\u066E\u066F\u0671-\u0673\u0675-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0750-\u077F\u0870-\u0882\u0886\u0889-\u088F\u08A0-\u08AC\u08AE-\u08C8`,
  Ir = [2304, 2432, 2688, 2816, 3072, 3200, 3328].map(Pr),
  Ht = String.raw`[\u0D9A-\u0DC6]`,
  Wt = new RegExp(
    [
      ...Ir,
      `\\u200D(?<=${Ht}\\u0DCA.)(?=${Ht})`,
      `\\u200C(?<=[${Lr}](?:(?=[\\p{sc=Arabic}\\p{sc=Inherited}])(?!\\p{Default_Ignorable_Code_Point})\\p{Mn}){0,8}.)(?=[${Cr}])`
    ].join("|"),
    "gu"
  ),
  Dr = new RegExp(`\\u20E3|\\u263A${he}`, "u"),
  Ut = /[\u200C\u200D\uFE0F\u{E007F}]/u,
  Ae;
function Pr(e) {
  let n = `[${xe(e + 21)}-${xe(e + 57)}]`,
    r = e === 3328 ? "" : `${xe(e + 60)}?`;
  return `[\\u200C\\u200D](?<=${n}${r}${xe(e + 77)}.)(?=${n})`;
}
function xe(e) {
  return `\\u{${e.toString(16)}}`;
}
function Je(e) {
  if (!Ut.test(e)) return e;
  return ((Ae ??= new RegExp("\\p{RGI_Emoji}", "gv")), e.replace(Ae, "\u263A").replace(Wt, ""));
}
var Fr = 4096;
function $es(e) {
  return Nr(e) && !e.includes("  ") && !Tr.test(Je(e));
}
function Nr(e) {
  return (
    Rq(e) &&
    !vr.test(Je(e)) &&
    !Dr.test(Je(e)) &&
    !/\uFE0F[\u{1F3FB}-\u{1F3FF}]/u.test(e) &&
    !Or.test(e)
  );
}
var $r = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${Bt}]`, "gu");
function Hr(e) {
  let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return (
    (n = n
      .replace(/[\u200B-\u200F]/g, "")
      .replace(/[\u202A-\u202E]/g, "")
      .replace(/[\u2066-\u2069]/g, "")
      .replace(/[\uFEFF]/g, "")
      .replace(/[\uE000-\uF8FF]/g, "")),
    n
  );
}
function Yf(e) {
  let n = Nb(e);
  for (let r = 0; r < 10; r++) {
    let i = Hr(n);
    if (i === n) return n;
    n = i;
  }
  return n;
}
var Br = /\p{Default_Ignorable_Code_Point}/gu;
function am(e) {
  return zr(Yf(e).replace(Br, ""));
}
function Fes(e) {
  return !/[^\0-\x7f]/.test(e);
}
function iit(e) {
  if (Fes(e)) return e;
  let n = e,
    r = "",
    i = 0,
    s = 10;
  while (n !== r && i < s) ((r = n), (n = pW(n)), (n = Yf(n)), i++);
  if (i >= s)
    throw Error(
      `Unicode sanitization reached maximum iterations (${s}) for input: ${e.slice(0, 100)}`
    );
  return n;
}
function BH(e) {
  if (typeof e === "string") return iit(e);
  if (Array.isArray(e)) return e.map(BH);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [r, i] of Object.entries(e)) {
      let s = BH(r);
      if (s !== "__proto__") n[s] = BH(i);
    }
    return n;
  }
  return e;
}
function Cc(e) {
  return ait(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function ait(e) {
  return e.replace(/[^\x20-\x7e]/g, hX);
}
function Cn(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function tN(e) {
  return e.replace($r, (n) =>
    Array.from(
      { length: n.length },
      (r, i) => `\\u${n.charCodeAt(i).toString(16).padStart(4, "0")}`
    ).join("")
  );
}
function Zse(e) {
  return Nb(yn(e)).replace(je, " ");
}
function ei(e, n) {
  let r = Zse(e);
  if (n?.drop) r = r.replace(n.drop, "");
  if (((r = r.replace(/\s+/g, " ").trim()), n?.maxCodeUnits !== void 0))
    r = re(r, n.maxCodeUnits).trim();
  return r;
}
function adr(e, { maxCodeUnits: n, maxLines: r }) {
  let i = e.replace(
      /\r\n?/g,
      `
`
    ).split(`
`),
    s = i.slice(0, r).map((o) => Zse(o.replace(/\t/g, " "))).join(`
`);
  return { text: re(s, n).replace(/\n+$/, ""), truncated: i.length > r || s.length > n };
}
function Rpi(e) {
  return ei(e) === e;
}
var we = 8192;
function ldr(e, n) {
  let r = e;
  if (e.length > we) {
    let o = e.length - we,
      a = e.slice(o).search(/[\r\n]/);
    if (a !== -1) r = e.slice(o + a + 1);
    else {
      let u =
        Math.max(
          e.lastIndexOf(`
`),
          e.lastIndexOf("\r")
        ) + 1;
      r = re(e.slice(u, u + we + 1), we);
    }
  }
  let i = r.split(/\r?\n/),
    s = [];
  for (let o = i.length - 1; o >= 0 && s.length < n; o--) {
    let a = i[o].split("\r");
    for (let u = a.length - 1; u >= 0; u--) {
      let c = ei(a[u], { maxCodeUnits: 512 });
      if (c !== "") {
        s.push(c);
        break;
      }
    }
  }
  return s.reverse();
}
var eie = 255;
function IR(e) {
  let n = ei(e, { drop: /[`<>]/g })
    .replace(/\]\(/g, "] (")
    .replace(/!\[/g, "! [")
    .replace(/\]\[/g, "] [")
    .replace(/\]:/g, "] :");
  return re(n, eie).trim();
}
var oCt = 2048,
  ddr = /[`\[\]<>]/g;
function lee(e) {
  let n = ei(e)
    .replace(/\]\(/g, "] (")
    .replace(/!\[/g, "! [")
    .replace(/\]\[/g, "] [")
    .replace(/\]:/g, "] :")
    .replace(/</g, "< ")
    .replace(/\s+/g, " ")
    .trim();
  return re(n, oCt).trim();
}
function sCt(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, hX);
}
function hX(e) {
  return e
    .split("")
    .map((n) => "\\u" + n.charCodeAt(0).toString(16).padStart(4, "0"))
    .join("");
}
function hW(e) {
  let n = 0;
  while (n < e.length && e.charCodeAt(n) <= 32) n++;
  let r = e.slice(n),
    i = /^([A-Za-z0-9][A-Za-z0-9+.-]*):\/\//.exec(r),
    s = i?.[1]?.toLowerCase(),
    o = i ? r.slice(i[0].length) : r,
    a = o.indexOf(":"),
    u = o.indexOf("/");
  if (!(s !== void 0 ? s !== "file" : a !== -1 && (u === -1 || a < u) && !/^[A-Za-z]:/.test(o))) {
    let y = i ? me(o) : o;
    return y.includes("@[") || y.startsWith("[");
  }
  let l = me(o),
    d = i
      ? /^(?:[^@/?#\\[\]]+@)?(\[[0-9A-Fa-f:.]+\])(?::\d*)?(?=\/|$)/.exec(l)
      : /^[^@:/[\]]+@(\[[0-9A-Fa-f:.]+\])(?=:)/.exec(l),
    g = d !== null && !!Z$e(`ssh://${d[1]}/`)?.hostname;
  return /[[\]]/.test(l.slice(g ? d[0].length : 0));
}
function Z$e(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function me(e) {
  return e.replace(/%([0-9A-Fa-f]{2})/g, (n, r) => {
    let i = parseInt(r, 16);
    return i === 0 ? n : String.fromCharCode(i);
  });
}
import {
  appendFile as _t,
  mkdir as rr,
  rename as ir,
  stat as Cs,
  symlink as Is,
  unlink as Ot
} from "fs/promises";
import { dirname as pe, isAbsolute as Ds, join as ne, resolve as dr } from "path";
function jy(e) {
  return { ok: !0, value: e };
}
function Cp(e) {
  return { ok: !1, error: e };
}
class Gt extends Error {
  constructor(e) {
    super("Result was an error (see .error)");
    ((this.name = "ResultError"),
      Object.defineProperty(this, "error", { value: e, enumerable: !1 }));
  }
}
function wpi(e) {
  if (e.ok) return e.value;
  throw new Gt(e.error);
}
var Pm = {
  home: (e) => ({ space: "home", path: e }),
  workspace: (e) => ({ space: "workspace", path: e }),
  system: (e) => ({ space: "system", path: e }),
  userNamed: (e) => ({ space: "userNamed", path: e })
};
function xes(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = Reflect.get(e, "code"),
    r = Reflect.get(e, "telemetryCode");
  return (
    n === "Failed" && typeof r === "string" && (I2(r) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(r))
  );
}
function vpi(e) {
  if (xes(e)) {
    if (e.cause instanceof Error) return e.cause;
    return Object.assign(new R(vt(e), "host file operation refused by the storage backend"), {
      code: e.telemetryCode,
      cause: e
    });
  }
  return Object.assign(
    new R(vt(e), "host file operation could not be performed by the storage backend"),
    { cause: e }
  );
}
var Xe = globalThis.process?.getBuiltinModule?.("async_hooks"),
  Kt = Xe !== void 0,
  qe = Xe
    ? new Xe.AsyncLocalStorage()
    : {
        run: (e, n) => n(),
        getStore: () => {
          return;
        }
      };
function Qe({
  writeBatch: e,
  sizeOf: n,
  flushIntervalMs: r = 1000,
  maxBufferSize: i = 100,
  maxBufferBytes: s = 1 / 0,
  immediateMode: o = !1
}) {
  let a = [],
    u = 0,
    c = null,
    l = null;
  function d() {
    if (c) (clearTimeout(c), (c = null));
  }
  function g(f) {
    try {
      e(f);
    } catch {}
  }
  function y() {
    if (l) (g(l), (l = null));
    if (a.length === 0) return;
    (g(a), (a = []), (u = 0), d());
  }
  function h() {
    if (!c) c = setTimeout(y, r);
  }
  function S() {
    if (l) {
      (l.push(...a), (a = []), (u = 0), d());
      return;
    }
    let f = a;
    ((a = []),
      (u = 0),
      d(),
      (l = f),
      setImmediate(() => {
        let m = l;
        if (((l = null), m)) g(m);
      }));
  }
  return {
    write(f) {
      if (o) {
        g([f]);
        return;
      }
      if ((a.push(f), (u += n(f)), h(), a.length >= i || u >= s)) S();
    },
    flush: y,
    dispose() {
      y();
    }
  };
}
function Epi({
  writeFn: e,
  flushIntervalMs: n,
  maxBufferSize: r,
  maxBufferBytes: i,
  immediateMode: s
}) {
  return Qe({
    writeBatch: (o) => e(o.join("")),
    sizeOf: (o) => o.length,
    flushIntervalMs: n,
    maxBufferSize: r,
    maxBufferBytes: i,
    immediateMode: s
  });
}
function Mr(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]();
}
class Re {
  #e = new Set();
  #t = !1;
  get drainStarted() {
    return this.#t;
  }
  register(e) {
    let n = Mr(e);
    this.#e.add(n);
    let r = () => {
      this.#e.delete(n);
    };
    return Object.assign(r, { [Symbol.dispose]: r });
  }
  async drain() {
    this.#t = !0;
    let e = Array.from(this.#e);
    this.#e.clear();
    let r = (await Promise.allSettled(e.map(async (i) => i()))).find(
      (i) => i.status === "rejected"
    );
    if (r !== void 0) throw r.reason;
  }
  async [Symbol.asyncDispose]() {
    await this.drain();
  }
  get sizeForTesting() {
    return this.#e.size;
  }
}
class zt {
  cleanup = new Re();
  preExitFlush = new Re();
  preExitFlushWaits = new Map();
}
var Wr = new W(() => new zt());
function se() {
  return es(Wr);
}
var Xse = 2000;
function bt(e) {
  return se().cleanup.register(e);
}
async function eCt() {
  await se().cleanup.drain();
}
function Kg() {
  return se().cleanup.drainStarted;
}
function HM(e, n) {
  let { preExitFlush: r, preExitFlushWaits: i } = se(),
    s = r.register(e);
  if (n !== void 0) i.set(e, { mayWaitMs: n, unregister: s });
  let o = () => {
    (i.delete(e), s());
  };
  return Object.assign(o, { [Symbol.dispose]: o });
}
function Pes() {
  return Math.max(0, ...Array.from(se().preExitFlushWaits.values(), (e) => e.mayWaitMs));
}
async function kpi() {
  let { preExitFlushWaits: e } = se(),
    n = new Re();
  (e.forEach(({ unregister: r }, i) => {
    (r(), n.register(i));
  }),
    e.clear(),
    await n.drain());
}
async function ndr() {
  let { preExitFlush: e, preExitFlushWaits: n } = se();
  (n.clear(), await e.drain());
}
class jt {
  parsed = new Map();
  lookup(e) {
    return this.parsed.get(e);
  }
  remember(e, n) {
    this.parsed.set(e, n);
  }
  reset() {
    this.parsed.clear();
  }
}
var Vt = new jt();
function Jt(e) {
  let n = Vt.lookup(e);
  if (n !== void 0) return n;
  let r = Ur(e);
  return (Vt.remember(e, r), r);
}
function Ur(e) {
  if (!e || e.trim() === "") return null;
  let n = e
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  if (n.length === 0) return null;
  let r = n.some((o) => o.startsWith("!")),
    i = n.some((o) => !o.startsWith("!"));
  if (r && i) return null;
  let s = n.map((o) => o.replace(/^!/, "").toLowerCase());
  return { include: r ? [] : s, exclude: r ? s : [], isExclusive: r };
}
function Gr(e) {
  let n = [],
    r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) (n.push("mcp"), n.push(r[1].toLowerCase()));
  else {
    let o = e.match(/^([^:[]+):/);
    if (o && o[1]) n.push(o[1].trim().toLowerCase());
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) n.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) n.push("1p");
  let s = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (s && s[1]) {
    let o = s[1].trim().toLowerCase();
    if (o.length < 30 && !o.includes(" ")) n.push(o);
  }
  return Array.from(new Set(n));
}
function Kr(e, n) {
  if (!n) return !0;
  if (e.length === 0) return !1;
  if (n.isExclusive) return !e.some((r) => n.exclude.includes(r));
  else return e.some((r) => n.include.includes(r));
}
function Zt(e, n) {
  if (!n) return !0;
  let r = Gr(e);
  return Kr(r, n);
}
import * as k from "fs";
import {
  appendFile as qr,
  chmod as Qr,
  copyFile as ti,
  link as ni,
  lstat as et,
  mkdir as ri,
  open as X,
  readdir as ii,
  readFile as Xt,
  readlink as si,
  realpath as oi,
  rename as ai,
  rmdir as ui,
  rm as li,
  stat as qt,
  symlink as ci,
  unlink as di
} from "fs/promises";
import { homedir as Qt } from "os";
import * as p from "path";
import { realpath as Vr } from "fs";
var jr = (e) =>
  new Promise((n, r) => {
    Vr(e, (i, s) => (i === null ? n(s) : r(i)));
  });
var Jr = 0xffffffffffffffffn;
function Wu(e) {
  let n = BigInt(e);
  return n === 0n || n === -1n || n === Jr || n === 1n << 64n;
}
function Tpi(e, n) {
  return !Wu(e.ino) && !Wu(n.ino) && e.ino !== n.ino;
}
import { writeFileSync as Zr } from "fs";
var vo = (() => {
  let e = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (e !== void 0) {
    let n = Number(e);
    if (!Number.isNaN(n) && n >= 0) return n;
  }
  return 1 / 0;
})();
var Yr = { [Symbol.dispose]() {} };
function Xr() {
  return Yr;
}
var Wy = Xr;
function _(e, n, r) {
  using i = Wy`JSON.stringify(${_e(e)})`;
  return JSON.stringify(e, n, r);
}
function oF(e) {
  return (
    JSON.stringify(e) +
    `
`
  );
}
function ma(e) {
  return JSON.stringify(e);
}
function Kkn(e) {
  using n = Wy`jsonlJoin(${e.length})`;
  let r = "";
  for (let i = 0; i < e.length; i++)
    r +=
      JSON.stringify(e[i]) +
      `
`;
  return r;
}
var te = (e, n) => {
  using r = Wy`JSON.parse(${_e(e)})`;
  return typeof n > "u" ? JSON.parse(e) : JSON.parse(e, n);
};
function Vo(e) {
  return JSON.parse(e);
}
function bd(e, n) {
  using r = Wy`structuredClone(${_e(e)})`;
  return structuredClone(e, n);
}
function nit(e, n, r) {
  using i = Wy`fs.writeFileSync(${e}, ${_e(n)})`;
  Zr(e, n, r);
}
function _e(e) {
  return typeof e === "string" ? e.length : e;
}
var fi = "\u2192";
function gi() {
  return k.constants.O_NOFOLLOW | k.constants.O_NONBLOCK;
}
function aee() {
  return k.constants.O_RDONLY | k.constants.O_NONBLOCK | k.constants.O_NOCTTY;
}
var le = /\/+/;
function cYt(e, n) {
  let r = (u) => u.split(le).filter(Boolean),
    i = p.resolve(e),
    s = p.resolve(n),
    o = r(i),
    a = r(s);
  return (
    p.parse(i).root === p.parse(s).root && o.length < a.length && o.every((u, c) => u === a[c])
  );
}
function en(e) {
  let n = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    n += i;
  }
  let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r;
}
function pi(e) {
  if (e.startsWith("\\\\")) return en(e);
  let n = e.replace(/^\/+/, "/"),
    r = lpe(n);
  if (r !== null) return r;
  return en(e);
}
var hi = pi;
function Oe(e, n, r) {
  let i = ml(e);
  if (n.length === 0 || i || n.some((s) => s === "." || s === "..")) {
    if (r !== void 0 && (n.length > 0 || i)) r(p.join(e, ...n));
    return i ? hi(e) : e;
  }
  return p.join(e, ...n);
}
var Gy = "\x00unverified-ancestry",
  rit = "\x00opaque-link-text";
function nt(e) {
  return cy(p.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""));
}
function rdr(e, n = !1) {
  return (
    e.includes("\uFFFD") ||
    nt(e) ||
    (n &&
      (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) ||
        (/^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e)) ||
        e.split(/[\\/]/).some((r) => r !== "." && r !== ".." && /[. ]$/.test(r))))
  );
}
function Ies(e) {
  return e !== void 0 && e !== Gy;
}
function odr(e) {
  return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), {
    code: "ELOOP",
    path: e
  });
}
function tn(e, n, r = !1, i = !1, s = !1) {
  if (n?.unreadableAncestry !== "unverified") return;
  let o = e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (o === "ENOENT" || o === "ENOTDIR") return;
  if (o === "ENAMETOOLONG" && !r && !i && !s) return;
  return Gy;
}
function oe(e) {
  return XH(e);
}
function ve(e, n) {
  return n !== void 0 && n.some((r) => XH(r) && !YH(e, r) && (on(e, r) || Fa(e)));
}
function nn(e, n) {
  return n !== void 0 && n.some((r) => XH(r) && on(r, e));
}
function on(e, n) {
  let r = (o) => (o.length > 1 ? o.replace(/\/+$/, "") : o),
    [i, s] = [r(e), r(n)];
  return i === s || i.startsWith(s === "/" ? s : s + "/");
}
function ce(e, n) {
  return n === void 0 || n.every((r) => YH(e, r));
}
function Te(e, n) {
  return n === void 0 || n.every((r) => k6(e, r));
}
function rn(e, n, r) {
  let i = Fa(e) ? lpe(e) : null;
  if (i === null || !ce(i, n)) return;
  let s = p.join(e);
  if (Fa(s) && EW(s) === EW(i)) return s;
  return Oe(e, [], r);
}
function an(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [e.anchor] : void 0;
}
function LM(e) {
  return cy(e) || zs(e) || gl(e) || Yw(e) || Im(Db, e) !== void 0;
}
async function tCt(e) {
  return cy(e) || zs(e) || gl(e) || Yw(e) || (await sF(Db, e)) !== void 0;
}
function Oes(e, n = Db) {
  return (
    cy(e) ||
    zs(e) ||
    gl(e) ||
    Yw(e) ||
    Im(n, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) !== void 0
  );
}
async function Zfe(e, n = Db) {
  return (
    cy(e) ||
    zs(e) ||
    gl(e) ||
    Yw(e) ||
    (await sF(n, e, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" })) !== void 0
  );
}
async function xxe(e, n, r = Db) {
  if (cy(e)) return !0;
  if (zs(e)) return !0;
  if (gl(e)) {
    let i = EW(e);
    if (i === null || n === null || i !== EW(n)) return !0;
  }
  if (Yw(e)) return !0;
  return (await w9r(e, n, { fsImpl: r })).verdict !== "clean";
}
async function w9r(e, n, { fsImpl: r = Db, signal: i } = {}) {
  let s = await sF(
    r,
    e,
    {
      ...(n === null ? {} : { anchor: n }),
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0
    },
    i
  );
  if (s === void 0) return { verdict: "clean" };
  if (s === Gy) return { verdict: "unverified" };
  return { verdict: "network", reaches: s };
}
function Im(e, n, r) {
  return un(Ce(n, r), (i) => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow") return (e.openDirNoFollowSync(i.path), "ok");
    return e.readlinkSync(i.path);
  });
}
function sF(e, n, r, i, s) {
  return mi(Ce(n, r), i, async (o) => {
    if (o.kind === "lstat") {
      if (s === void 0) return e.lstat(o.path);
      let a;
      try {
        a = await e.lstatBigint(o.path);
      } catch (u) {
        throw (s(o.path, void 0), u);
      }
      return (s(o.path, a), a);
    }
    if (o.kind === "opendirNofollow") return (await e.openDirNoFollow(o.path), "ok");
    return e.readlink(o.path);
  });
}
function un(e, n) {
  let r;
  for (;;) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = n(i.value);
    } catch (s) {
      r = { errno: E(s) };
    }
  }
}
async function mi(e, n, r) {
  let i;
  for (;;) {
    let s = e.next(i);
    if (s.done) return s.value;
    if (n?.aborted === !0) return Gy;
    try {
      i = await r(s.value);
    } catch (o) {
      i = { errno: E(o) };
    }
  }
}
async function yi(e, n, r, i) {
  let s = Symbol("cut short"),
    o,
    a =
      n === void 0
        ? void 0
        : new Promise((c) => {
            ((o = () => c(s)), n.addEventListener("abort", o, { once: !0 }));
          }),
    u;
  try {
    for (;;) {
      let c = e.next(u);
      if (c.done) return c.value;
      if (n?.aborted === !0) return i;
      let l = r(c.value).catch((g) => ({ errno: E(g) })),
        d = await (a === void 0 ? l : Promise.race([l, a]));
      if (d === s) return i;
      u = d;
    }
  } finally {
    if (o !== void 0) n?.removeEventListener("abort", o);
  }
}
function* Ce(e, n) {
  let r = an(n);
  if (oe(e) && !ve(e, r)) return e;
  if ((Yn(e) && !Fl(e) && Te(e, r)) || (Fa(e) && ce(e, r))) return;
  let i = p.resolve(e),
    s = p.parse(i).root,
    o = s,
    a = i.slice(s.length).split(le).filter(Boolean),
    u = 0,
    c = a.length,
    l = !1,
    d = !1,
    g,
    y = 64,
    h = () => a.some((f) => ml(f)),
    S = () => /[. ]$/.test(a[0]);
  while (a.length > 0 && u < y) {
    if (l && ml(a[0])) return Gy;
    let f = p.join(o, a[0]);
    if ((Fa(f) && ce(f, r)) || (oe(f) && !(ve(f, r) || nn(f, r))))
      return Oe(f, a.slice(1), n?.onCollapsedLanding);
    if (zy(f)) {
      if (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified") return Gy;
      return Oe(f, a.slice(1), n?.onCollapsedLanding);
    }
    let m = !1;
    if (m && p.dirname(f) === "/dev/fd" && a.some((C, M) => M > 0 && (C === ".." || C === "."))) {
      a.shift();
      while (a[0] === "." && a.length > 1) a.shift();
      o = f;
      continue;
    }
    let b = m ? { errno: "ENOENT" } : yield { kind: "lstat", path: f };
    if (b === void 0 || typeof b === "string" || "errno" in b) {
      if (
        typeof b === "object" &&
        "errno" in b &&
        b.errno !== void 0 &&
        b.errno !== "ENOENT" &&
        b.errno !== "ENOTDIR" &&
        b.errno !== "ENAMETOOLONG"
      ) {
        if (typeof (yield { kind: "opendirNofollow", path: f }) === "string") {
          ((d = !0), a.shift(), (o = f));
          continue;
        }
      }
      if (
        n?.launchAncestry &&
        !d &&
        typeof b === "object" &&
        "errno" in b &&
        (b.errno === "EPERM" || b.errno === "EACCES") &&
        cYt(f, n.launchAncestry)
      ) {
        ((l = !0), a.shift(), (o = f));
        continue;
      }
      if (typeof b === "object" && "errno" in b && (b.errno === "ENOENT" || b.errno === "ENOTDIR"))
        n?.onOutcome?.({
          kind: "absent",
          at: o,
          remaining: [...a],
          fromLinkTarget: a.length > c,
          ...(b.errno === "ENOTDIR" && { notAFolder: !0 })
        });
      return tn(b, n, u > 0, h(), S());
    }
    let w = b;
    if (((d = !0), !w.isSymbolicLink())) {
      (a.shift(), (o = f));
      continue;
    }
    u++;
    let x = f + "\x00" + a.join("\x00");
    if ((g ??= new Set()).has(x)) return;
    g.add(x);
    let T = yield { kind: "readlink", path: f };
    if (typeof T !== "string") return tn(T, n, u > 0, h(), S());
    let D = T;
    if (n?.literalLinkText === "opaque" && rdr(D)) return rit;
    if (!p.isAbsolute(D)) {
      let C = D.split(le).filter(Boolean);
      if (n?.surfaceNetworkRaw === !0) {
        let M = rn(
          (o.endsWith(p.sep) ? o : o + p.sep) + [...C, ...a.slice(1)].join(p.sep),
          r,
          n?.onCollapsedLanding
        );
        if (M !== void 0) return M;
      }
      (a.shift(),
        n?.onHop?.({ composed: p.resolve(o, D, ...a), leaf: a.length === 0, text: D }),
        (c = Math.min(c, a.length)),
        (a = [...C, ...a]));
      continue;
    }
    let A = D;
    if (n?.surfaceNetworkRaw === !0 && a.length > 1 && Yw(A)) {
      let C = rn([A, ...a.slice(1)].join(p.sep), r, n?.onCollapsedLanding);
      if (C !== void 0) return C;
    }
    if (
      (Yn(A) && !Fl(A) && Te(A, r)) ||
      (Fa(A) && ce(A, r)) ||
      (oe(A) && !(ve(A, r) || (a.length > 1 && nn(A, r))))
    )
      return (a.shift(), Oe(A, a, n?.onCollapsedLanding));
    if (n?.surfaceNetworkRaw === !0 && ml(A) && (Yn(A) || gl(A) || XH(A) || Yw(A)))
      return (a.shift(), a.length === 0 ? A : A + p.sep + a.join(p.sep));
    a.shift();
    let P = p.parse(A).root || p.sep,
      O = p.parse(f).root,
      F = /^[\\/]$/.test(P) && O !== "" && !/^[\\/]$/.test(O);
    if (F && (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified")) return Gy;
    (n?.onHop?.({
      composed: a.length === 0 ? A : p.resolve(A, ...a),
      leaf: a.length === 0,
      text: D
    }),
      (o = F ? O : P),
      (d = !1),
      (c = Math.min(c, a.length)),
      (a = [...A.slice(P.length).split(le).filter(Boolean), ...a]));
  }
  if (a.length > 0 && n?.literalLinkText === "opaque") return rit;
  if (a.length > 0) return Gy;
  if (u > 0 && Yw(o)) return o;
  if (oe(o) && !ve(o, r)) return o;
  if (a.length === 0) n?.onOutcome?.({ kind: "resolved", path: o });
  return;
}
function Po(e, n) {
  if ((Yn(n) && !Fl(n)) || Fa(n) || MR(n))
    return { resolvedPath: n, isSymlink: !1, isCanonical: !1 };
  let r = Im(e, n);
  if (r === Gy) return { resolvedPath: n, isSymlink: !1, isCanonical: !1 };
  if (r !== void 0) return { resolvedPath: r, isSymlink: !0, isCanonical: !1 };
  try {
    let i = Jse(e, n);
    return { resolvedPath: i, isSymlink: i !== n, isCanonical: !0 };
  } catch (i) {
    return { resolvedPath: n, isSymlink: !1, isCanonical: !1 };
  }
}
function Pxe(e) {
  let n = zCt();
  if (n === null) return null;
  try {
    let r = p.resolve(n),
      i = p.resolve(e.cwd()),
      s = p.parse(r).root;
    if (s !== p.parse(i).root) return null;
    let o = r.slice(s.length).split(le).filter(Boolean),
      a = i.slice(s.length).split(le).filter(Boolean),
      u = 0;
    while (u < o.length && u < a.length && o[u] === a[u]) u++;
    return u > 0 ? p.join(s, ...o.slice(0, u)) : null;
  } catch {
    return null;
  }
}
function Jse(e, n) {
  try {
    return e.realpathSync(n);
  } catch (r) {
    let i = E(r);
    if (i !== "EPERM" && i !== "EACCES") throw r;
    let s,
      o = Pxe(e);
    if (
      Im(e, n, {
        unreadableAncestry: "unverified",
        surfaceNetworkRaw: !0,
        launchAncestry: o,
        onOutcome: (u) => {
          s = u;
        }
      }) !== void 0 ||
      s === void 0
    )
      throw r;
    if (s.kind === "absent")
      throw Object.assign(Error("ENOENT: no such file or directory"), {
        code: "ENOENT",
        syscall: "realpath",
        path: n
      });
    return In(s.path);
  }
}
var nCt = "ERR_SYMLINK_TO_NETWORK_PATH";
function uW(e, n, r) {
  let { asWritten: i, opts: s } = dn(e, n, r),
    o,
    a;
  return (
    gn(
      Im(e, i, {
        ...s,
        onOutcome: (u) => {
          ((o = ln(u)), (a = cn(u)));
        }
      }),
      n,
      i
    ),
    { ...fn(i), linksResolvedPath: o, absentAt: a }
  );
}
async function w2(e, n, r) {
  let { asWritten: i, opts: s, ownHost: o } = dn(e, n, r),
    a,
    u,
    c,
    l,
    d = !o,
    g = !1,
    y,
    h = [],
    S = {
      ...s,
      onOutcome: (f) => {
        ((g = !0), (a = ln(f)), (u = cn(f)));
        let m = y,
          b = f.kind === "resolved" && m?.path === f.path;
        ((d = !b),
          (l = b ? m.stats : void 0),
          (c =
            b && !Wu(m.stats.ino)
              ? { dev: m.stats.dev, ino: m.stats.ino, ctimeNs: m.stats.ctimeNs }
              : void 0));
      }
    };
  if (
    (gn(
      await sF(
        e,
        i,
        S,
        void 0,
        r?.fileIdentity === !0
          ? (f, m) => {
              if (((y = m === void 0 ? void 0 : { path: f, stats: m }), m?.isSymbolicLink() === !0))
                h.push(m);
            }
          : void 0
      ),
      n,
      i
    ),
    !g && y?.stats.isSymbolicLink() === !0)
  )
    d = !0;
  return {
    ...fn(i),
    linksResolvedPath: a,
    absentAt: u,
    ...(c !== void 0 && { identity: c }),
    ...(l !== void 0 && { endStats: l }),
    ...(r?.fileIdentity === !0 && { linksFollowed: h }),
    ...(r?.fileIdentity === !0 && d && { noFileSeen: !0 })
  };
}
function ln(e) {
  return e.kind === "resolved" ? In(e.path) : void 0;
}
function cn(e) {
  return e.kind === "absent"
    ? {
        at: e.at,
        remaining: e.remaining,
        fromLinkTarget: e.fromLinkTarget,
        ...(e.notAFolder && { notAFolder: !0 })
      }
    : void 0;
}
function dn(e, n, r) {
  let i = wA(n);
  if (gk(i) || A_(i))
    throw Object.assign(
      Error(
        "Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"
      ),
      { code: nCt, path: n, reason: "unexamined" }
    );
  let s = p.isAbsolute(i) ? p.resolve(i) : p.resolve(process.cwd(), i),
    o = wA(s);
  if (gk(o) || A_(o))
    throw Object.assign(
      Error(
        "Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"
      ),
      { code: nCt, path: n, reason: "unexamined" }
    );
  let a = oe(o) || Fa(o) || (Yn(o) && !Fl(o));
  return {
    asWritten: o,
    ownHost: a,
    opts: {
      ...(a && { anchors: [o] }),
      surfaceNetworkRaw: !0,
      ...((!a || r?.failClosed) && { unreadableAncestry: "unverified", launchAncestry: Pxe(e) })
    }
  };
}
function fn(e) {
  return { resolvedPath: e, isSymlink: !1, isCanonical: !1 };
}
function gn(e, n, r) {
  if (e === void 0) return;
  let i = (o) =>
    Object.assign(
      Error(
        "Refusing to read a file whose path could not be vetted (a component that could not be examined, or a symbolic link chain too long to follow)"
      ),
      { code: nCt, path: n, reason: o }
    );
  if (e === Gy) throw i("unexamined");
  if (oe(r) && e === r) return;
  if (!(Yn(e) || gl(e) || oe(e) || Yw(e))) throw i("unexamined");
  throw Object.assign(
    Error(
      "Refusing to read a file through a symbolic link that leads onto a network share or automount path; replace the link with a regular file to use it"
    ),
    { code: nCt, path: n, reason: "network" }
  );
}
function v9r(e) {
  return E(e) === nCt;
}
function Mes(e) {
  if (!v9r(e)) return;
  let n = e.reason;
  return n === "network" || n === "unexamined" ? n : void 0;
}
function epe(e, n, r) {
  let { resolvedPath: i } = Po(e, n);
  if (r.has(i)) return !0;
  return (r.add(i), !1);
}
var tt = /(^|[\\/])\.\.([\\/]|$)/;
function bi(e, n = "linux") {
  let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
  if (r === "") return e[0];
  if (n === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r;
}
function CB(e, n, r) {
  let i = an(r);
  if ((Yn(n) && !Fl(n)) || Fa(n) || MR(n)) {
    if (i !== void 0 && ((Fa(n) && !ce(n, i)) || (Yn(n) && !Fl(n) && !Te(n, i)))) {
      let l = Im(e, n, { anchors: i, surfaceNetworkRaw: r?.surfaceNetworkRaw });
      if (l === Gy && r?.surfaceNetworkRaw !== !0) {
        if (r?.surfaceDotDotTargets === !0) throw odr(n);
        return n;
      }
      return l;
    }
    return n;
  }
  let s = Im(e, n, r?.surfaceNetworkRaw === !0 ? { surfaceNetworkRaw: !0, anchors: i } : void 0);
  if (s === Gy && r?.surfaceNetworkRaw !== !0) {
    if (r?.surfaceDotDotTargets === !0) throw odr(n);
    return;
  }
  if (s !== void 0) return r?.liveRoutesOnly === !0 ? void 0 : s;
  let o = n,
    a = [],
    u = r?.surfaceDotDotTargets === !0,
    c = (l) => (a.length === 0 ? l : u && tt.test(l) ? [l, ...a].join(p.sep) : p.join(l, ...a));
  while (o !== p.dirname(o)) {
    let l, d;
    try {
      l = e.readlinkSync(o);
    } catch (g) {
      d = E(g);
    }
    if (l !== void 0) {
      if (u && tt.test(l)) return c(p.isAbsolute(l) ? l : p.dirname(o) + p.sep + l);
      let g = p.isAbsolute(l) ? l : p.resolve(p.dirname(o), l);
      if ((Yn(g) && !Fl(g)) || Fa(g) || MR(g) || zy(g) || (r?.surfaceNetworkRaw === !0 && ml(g))) {
        if (r?.liveRoutesOnly === !0) return;
        return r?.surfaceNetworkRaw === !0 && a.length > 0 ? g + p.sep + a.join(p.sep) : c(g);
      }
      try {
        let y = Jse(e, o);
        return c(y);
      } catch {
        if (r?.liveRoutesOnly === !0) return;
        let y = o,
          h = 0,
          S = 64;
        while (h < S) {
          let f;
          try {
            f = e.readlinkSync(y);
          } catch {
            break;
          }
          if (u && tt.test(f)) {
            y = p.isAbsolute(f) ? f : p.dirname(y) + p.sep + f;
            break;
          }
          let m = p.isAbsolute(f) ? (u ? bi(f) : f) : p.resolve(p.dirname(y), f);
          if (
            (Yn(m) && !Fl(m) && Te(m, i)) ||
            (Fa(m) && ce(m, i)) ||
            MR(m) ||
            zy(m) ||
            (r?.surfaceNetworkRaw === !0 && ml(m))
          ) {
            y = m;
            break;
          }
          let b;
          try {
            b = e.lstatSync(m);
          } catch {
            y = m;
            break;
          }
          if (!b.isSymbolicLink()) {
            y = m;
            break;
          }
          ((y = m), h++);
        }
        if (h >= S && r?.surfaceNetworkRaw === !0) return Gy;
        return r?.surfaceNetworkRaw === !0 &&
          a.length > 0 &&
          ((Yn(y) && !Fl(y)) || Fa(y) || MR(y) || zy(y) || ml(y))
          ? y + p.sep + a.join(p.sep)
          : c(y);
      }
    }
    if (d === "ENOENT") {
      (a.unshift(p.basename(o)), (o = p.dirname(o)));
      continue;
    }
    try {
      let g = Jse(e, o);
      if (g !== o) return c(g);
    } catch (g) {
      if (u) throw g;
    }
    return;
  }
  return;
}
function sn(e) {
  return (Yn(e) && !Fl(e)) || gl(e) || gk(e);
}
function E9r(e) {
  return pn(e, !1) ?? e;
}
function Des(e) {
  return pn(e, !0);
}
function pn(e, n) {
  if (sn(e)) return e;
  let r = e,
    i = "";
  for (;;) {
    if (!ml(r)) {
      let o = T6(r);
      if (o !== null) {
        let a = i === "" ? o : o.endsWith(p.sep) ? o + i : o + p.sep + i;
        if (sn(a)) return n ? a : e;
        return a;
      }
      if (n)
        try {
          return (k.lstatSync(r), null);
        } catch (a) {
          if (!G(a)) return null;
        }
    }
    let s = p.dirname(r);
    if (s === r) return e;
    ((i = i === "" ? p.basename(r) : p.basename(r) + p.sep + i), (r = s));
  }
}
function Ui(e) {
  return bn(e, "permission");
}
function Qse(e, n) {
  return hn(e, "permission", n);
}
function hn(e, n, r) {
  let i = ie();
  return yi(
    En(e, n),
    r,
    async (s) => {
      switch (s.kind) {
        case "lstat":
          return i.lstat(s.path);
        case "opendirNofollow":
          return (await i.openDirNoFollow(s.path), "ok");
        case "readlink":
          return i.readlink(s.path);
        case "realpath":
          return i === Db ? In(await jr(s.path)) : i.realpath(s.path);
      }
    },
    {
      unresolved: !0,
      requested: e,
      spellings: [e],
      stoppedAt: e,
      leafIsSymlink: !1,
      reason: "cut-short"
    }
  );
}
function h6(e) {
  return mn(bn(e, "screen"));
}
function mn(e) {
  return {
    paths: e.spellings,
    vetted: !e.unresolved,
    ...(!e.unresolved && e.linkTextClimbs && { linkTextClimbs: e.linkTextClimbs })
  };
}
async function Hes(e) {
  return mn(await hn(e, "screen", void 0));
}
function bn(e, n) {
  let r = ie();
  return un(En(e, n), (i) => {
    switch (i.kind) {
      case "lstat":
        return r.lstatSync(i.path);
      case "opendirNofollow":
        return (r.openDirNoFollowSync(i.path), "ok");
      case "readlink":
        return r.readlinkSync(i.path);
      case "realpath":
        return r.realpathSync(i.path);
    }
  });
}
function* En(e, n) {
  let r = e;
  if (r === "~") r = Qt().normalize("NFC");
  else if (r.startsWith("~/")) r = p.join(Qt().normalize("NFC"), r.slice(2));
  let i = new Set([r]),
    s = !1,
    o = (v, L = !1) => ({
      unresolved: !1,
      requested: r,
      spellings: Array.from(i),
      landing: v,
      leafIsSymlink: L,
      ...(s && { linkTextClimbs: s })
    });
  if ((Yn(r) && !Fl(r)) || Fa(r) || MR(r)) return o(r);
  let a = ie(),
    u = Pxe(a),
    c,
    l,
    d = !1,
    g = !1,
    y = !1,
    h = !1,
    S = [],
    f = new Set(),
    m = (v) => {
      let L = p.resolve(v);
      if (!f.has(L)) (f.add(L), S.push(v));
    },
    b = r,
    w,
    x = function* (v) {
      let L;
      for (;;) {
        let V = v.next(L);
        if (V.done) return V.value;
        let U = V.value;
        if (((b = U.path), U.kind === "readlink")) g = !0;
        else w = void 0;
        if (((L = yield U), typeof L === "object" && "errno" in L))
          if (U.kind === "readlink") y = !0;
          else ((w = L.errno), (h ||= U.kind === "opendirNofollow" && L.errno === "ELOOP"));
      }
    },
    T = yield* x(
      Ce(r, {
        unreadableAncestry: "unverified",
        launchAncestry: u,
        ...!1,
        onCollapsedLanding: (v) => {
          c = v;
        },
        onOutcome: (v) => {
          l = v;
        },
        onHop: ({ composed: v, leaf: L, text: V }) => {
          if (L) (i.add(v), (d = !0));
          if (n === "screen" && nt(V)) ((s = !0), m(v));
        }
      })
    ),
    D =
      n === "permission" &&
      !g &&
      (w === "ENAMETOOLONG" ||
        (w === "EACCES" || w === "EPERM")),
    A = () => {
      let v = In(r);
      return (i.add(v), o(v));
    },
    B = () =>
      D
        ? A()
        : {
            unresolved: !0,
            requested: r,
            spellings: Array.from(i),
            stoppedAt: b,
            leafIsSymlink: d,
            reason: g || h ? "past-a-link" : "unexamined"
          },
    P = 8,
    O = function* () {
      for (let v = 0; v < S.length; v++) {
        if (v >= P) return !1;
        let L = S[v];
        if ((Yn(L) && !Fl(L)) || Fa(L) || MR(L)) {
          i.add(L);
          continue;
        }
        let V = yield* x(
          Ce(L, {
            unreadableAncestry: "unverified",
            launchAncestry: u,
            onHop: ({ composed: U, text: pr }) => {
              if (nt(pr)) m(U);
            }
          })
        );
        if (V === Gy || y) return !1;
        if (V !== void 0) i.add(V);
      }
      return !0;
    };
  if (T === Gy || T === rit) return B();
  if (T !== void 0) {
    if (n === "screen" && !(yield* O())) return B();
    if (c !== void 0) i.add(c);
    return (i.delete(T), i.add(T), o(T, d));
  }
  if (l === void 0) {
    if (n === "screen" && !y) return (yield* O()) ? A() : B();
    return B();
  }
  if (
    l.kind === "absent" &&
    (n === "screen" ? l.remaining.some((v) => ml(v)) : g && l.remaining.some((v) => DB(v)))
  )
    return B();
  let F = l.kind === "absent" ? l.at : l.path,
    Y = l.kind === "absent" ? l.remaining.join(p.sep) : "",
    C = In(Y === "" ? F : p.join(F, Y));
  if (g || F !== p.parse(F).root) i.add(C);
  let M = Ei(yield { kind: "realpath", path: F }, F, Y);
  if (M !== void 0 && M !== C) (i.delete(M), i.add(M));
  if (n === "screen" && !(yield* O())) return B();
  return o(C, d);
}
function Ei(e, n, r) {
  if (typeof e !== "string" || e === n) return;
  return r === "" ? e : p.join(e, r);
}
function rCt(e) {
  return { unresolved: !1, requested: e, spellings: [e], landing: e, leafIsSymlink: !1 };
}
function jo(e) {
  return uYt(Ui(e));
}
function uYt(e) {
  if (!e.unresolved) return e.spellings;
  let { resolvedPath: n, isCanonical: r, isSymlink: i } = Po(ie(), e.requested);
  return (r || i) && !e.spellings.includes(n) ? [...e.spellings, n] : e.spellings;
}
var Db = {
  cwd() {
    return process.cwd();
  },
  existsSync(e) {
    using n = Wy`fs.existsSync(${e})`;
    return k.existsSync(e);
  },
  async stat(e) {
    return qt(e);
  },
  async lstat(e) {
    return et(e);
  },
  async openDirNoFollow(e) {
    await (await X(e, k.constants.O_DIRECTORY | k.constants.O_NOFOLLOW)).close();
  },
  openDirNoFollowSync(e) {
    let n = k.openSync(e, k.constants.O_DIRECTORY | k.constants.O_NOFOLLOW);
    k.closeSync(n);
  },
  async lstatBigint(e) {
    return et(e, { bigint: !0 });
  },
  async statBigint(e) {
    return qt(e, { bigint: !0 });
  },
  async readdir(e) {
    return ii(e, { withFileTypes: !0 });
  },
  async unlink(e) {
    return di(e);
  },
  async rmdir(e) {
    return ui(e);
  },
  async rm(e, n) {
    return li(e, n);
  },
  async mkdir(e, n) {
    try {
      await ri(e, { recursive: !0, ...n });
    } catch (r) {
      if (E(r) !== "EEXIST") throw r;
    }
  },
  async readFile(e, n) {
    return Xt(e, { encoding: n.encoding });
  },
  async rename(e, n) {
    return ai(e, n);
  },
  async realpath(e) {
    return In(await oi(e));
  },
  async readlink(e) {
    return si(e);
  },
  async copyFile(e, n) {
    return ti(e, n);
  },
  async appendFile(e, n, r) {
    if (r?.mode !== void 0)
      try {
        let i = await X(e, "ax", r.mode);
        try {
          await i.appendFile(n);
        } finally {
          await i.close();
        }
        return;
      } catch (i) {
        if (E(i) !== "EEXIST") throw i;
      }
    return qr(e, n);
  },
  async symlink(e, n, r) {
    return ci(e, n, r);
  },
  async link(e, n) {
    return ni(e, n);
  },
  async chmod(e, n) {
    return Qr(e, n);
  },
  statSync(e) {
    using n = Wy`fs.statSync(${e})`;
    return k.statSync(e);
  },
  lstatSync(e) {
    using n = Wy`fs.lstatSync(${e})`;
    return k.lstatSync(e);
  },
  readFileSync(e, n) {
    using r = Wy`fs.readFileSync(${e})`;
    return k.readFileSync(e, { encoding: n.encoding });
  },
  readSync(e, n) {
    using r = Wy`fs.readSync(${e}, ${n.length} bytes)`;
    let i = void 0;
    try {
      i = k.openSync(e, "r");
      let s = [],
        o = 0;
      while (o < n.length) {
        let u = Buffer.allocUnsafe(Math.min(65536, n.length - o)),
          c = k.readSync(i, u, 0, u.length, o);
        if (c === 0) break;
        (s.push(u.subarray(0, c)), (o += c));
      }
      return { buffer: Buffer.concat(s, o), bytesRead: o };
    } finally {
      if (i !== void 0) k.closeSync(i);
    }
  },
  appendFileSync(e, n, r) {
    using i = Wy`fs.appendFileSync(${e}, ${n.length} chars)`;
    if (r?.mode !== void 0)
      try {
        let s = k.openSync(e, "ax", r.mode);
        try {
          k.appendFileSync(s, n);
        } finally {
          k.closeSync(s);
        }
        return;
      } catch (s) {
        if (E(s) !== "EEXIST") throw s;
      }
    k.appendFileSync(e, n);
  },
  unlinkSync(e) {
    using n = Wy`fs.unlinkSync(${e})`;
    k.unlinkSync(e);
  },
  renameSync(e, n) {
    using r = Wy`fs.renameSync(${e} ${fi} ${n})`;
    k.renameSync(e, n);
  },
  readlinkSync(e) {
    using n = Wy`fs.readlinkSync(${e})`;
    return k.readlinkSync(e);
  },
  realpathSync(e) {
    using n = Wy`fs.realpathSync(${e})`;
    return In(k.realpathSync(e));
  },
  mkdirSync(e, n) {
    using r = Wy`fs.mkdirSync(${e})`;
    let i = { recursive: !0 };
    if (n?.mode !== void 0) i.mode = n.mode;
    try {
      k.mkdirSync(e, i);
    } catch (s) {
      if (E(s) !== "EEXIST") throw s;
    }
  },
  readdirSync(e) {
    using n = Wy`fs.readdirSync(${e})`;
    return k.readdirSync(e, { withFileTypes: !0 });
  },
  rmSync(e, n) {
    using r = Wy`fs.rmSync(${e})`;
    k.rmSync(e, n);
  },
  createWriteStream(e) {
    return k.createWriteStream(e);
  },
  async readFileBytes(e, n) {
    if (n === void 0) return Xt(e);
    let r = await X(e, aee());
    try {
      if (!(await r.stat()).isFile()) return Buffer.alloc(0);
      return await fW(r, n, "file");
    } finally {
      await r.close();
    }
  },
  async readFileFdGated(e, n) {
    try {
      let r = gi();
      if (r === 0) {
        if (!(await et(e)).isFile()) return null;
      }
      let i = await X(e, k.constants.O_RDONLY | r);
      try {
        let s = await i.stat();
        if (!s.isFile() || s.size > n) return null;
        let o = Number(s.size),
          a = Buffer.allocUnsafe(o),
          u = 0;
        while (u < o) {
          let { bytesRead: c } = await i.read(a, u, o - u, u);
          if (c === 0) break;
          u += c;
        }
        return { content: (u < o ? a.subarray(0, u) : a).toString("utf8"), stats: s };
      } finally {
        await i.close();
      }
    } catch {
      return null;
    }
  }
};
function ie() {
  return Db;
}
function hh(e) {
  process.chdir(e);
  try {
    process.cwd();
  } catch {}
}
async function fYe(e, n, r) {
  await using i = typeof e === "string" ? await X(e, "r") : null;
  let s = typeof e === "string" ? i : e,
    o = (await s.stat()).size;
  if (o <= n) return null;
  let a = Math.min(o - n, r),
    u = Buffer.allocUnsafe(a),
    c = 0;
  while (c < a) {
    let { bytesRead: l } = await s.read(u, c, a - c, n + c);
    if (l === 0) break;
    c += l;
  }
  return { content: u.toString("utf8", 0, c), bytesRead: c, bytesTotal: o };
}
async function fW(e, n, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(),
    s = [],
    o = 0;
  while (o < n) {
    let a = Buffer.allocUnsafe(Math.min(65536, n - o)),
      { bytesRead: u } = await e.read(a, 0, a.length, i ? o : null);
    if (u === 0) break;
    (s.push(a.subarray(0, u)), (o += u));
  }
  return Buffer.concat(s, o);
}
async function PR(e, n) {
  await using r = typeof e === "string" ? await X(e, "r") : null;
  let i = typeof e === "string" ? r : e,
    s = (await i.stat()).size;
  if (s === 0) return { content: "", bytesRead: 0, bytesTotal: 0 };
  let o = Math.max(0, s - n),
    a = s - o,
    u = Buffer.allocUnsafe(a),
    c = 0;
  while (c < a) {
    let { bytesRead: l } = await i.read(u, c, a - c, o + c);
    if (l === 0) break;
    c += l;
  }
  return { content: u.toString("utf8", 0, c), bytesRead: c, bytesTotal: s };
}
async function* Vkn(e, n = 65536) {
  let r = await X(e, "r"),
    i = Buffer.alloc(n),
    s = 0,
    o = [],
    a = 0;
  try {
    while (!0) {
      let { bytesRead: u } = await r.read(i, 0, n, s);
      if (u === 0) break;
      s += u;
      let c = i.subarray(0, u),
        l = 0;
      while (l < u) {
        let d = c.indexOf(10, l);
        if (d === -1) {
          (o.push(Buffer.from(c.subarray(l))), (a += u - l));
          break;
        }
        if (a === 0) yield c.subarray(l, d);
        else (yield Buffer.concat([...o, c.subarray(l, d)], a + (d - l)), (o = []), (a = 0));
        l = d + 1;
      }
    }
  } finally {
    await r.close();
  }
  if (a > 0) yield o.length === 1 ? o[0] : Buffer.concat(o, a);
}
var ye = 256;
class X$e extends Error {
  partialRead;
  constructor(e = !1) {
    super(
      "A file changed while it was being read, so the lines read from it may not be its current lines"
    );
    this.partialRead = e;
    this.name = "FileChangedDuringReadError";
  }
}
async function* pYe(e, n = 65536, { onOpen: r, strict: i = !0 } = {}) {
  let s = await X(e, "r");
  try {
    let { size: o } = await s.stat();
    r?.(o);
    let a = Buffer.allocUnsafe(Math.min(n + ye, o)),
      u = Buffer.allocUnsafe(Math.min(ye, o)),
      c = 0,
      l = o,
      d = 0,
      g = o,
      y,
      h = async (f, m, b) => {
        let w = 0;
        while (w < m) {
          let T = await s.read(f, w, m - w, b + w);
          if (T.bytesRead === 0 || (i && T.bytesRead < m - w)) throw new X$e(T.bytesRead > 0);
          w += T.bytesRead;
        }
        let x = l + d - b;
        if (!f.subarray(x, x + c).equals(u.subarray(0, c))) throw new X$e();
      },
      S = async (f) => {
        let m = Math.max(g, l + d + c) - f,
          b = Buffer.allocUnsafe(m);
        return (await h(b, m, f), b.toString("utf8", 0, g - f));
      };
    while (l > 0) {
      if (
        ((c = Math.min(ye, d)),
        a.copy(u, 0, 0, c),
        (d = Math.min(n, l, i && l === o ? ye : 1 / 0)),
        (l -= d),
        await h(a, d + c, l),
        i)
      )
        y ??= Buffer.from(a.subarray(Math.max(0, d - ye), d));
      let f = a.lastIndexOf(10, d - 1);
      while (f !== -1) {
        let m = l + f + 1;
        if (m < g) yield g <= l + d ? a.toString("utf8", f + 1, g - l) : await S(m);
        ((g = l + f), (f = f === 0 ? -1 : a.lastIndexOf(10, f - 1)));
      }
    }
    if (g > 0) yield g <= d ? a.toString("utf8", 0, g) : await S(0);
    if (y !== void 0) ((l = o - y.length), (d = 0), (c = y.copy(u)), await h(a, c, l));
  } finally {
    await s.close();
  }
}
function kn(e) {
  let n = new Int32Array(e.length);
  for (let r = 0; r < e.length; r++) n[r] = r;
  return { text: e, origin: n };
}
function Sn(e, n, r) {
  let i = [];
  for (let s of e.text.matchAll(n)) {
    let { keep: o, insert: a, keepEnd: u = 0 } = r(s),
      c = s.index ?? 0,
      l = s[0].length,
      d = Math.min(Math.max(o | 0, 0), l),
      g = Math.min(Math.max(u | 0, 0), l - d);
    i.push([c + d, c + l - g, a]);
  }
  return Ie(e, i);
}
function Ie(e, n) {
  if (n.length === 0) return e;
  let { text: r, origin: i } = e,
    s = r.length;
  for (let [l, d, g] of n) s += g.length - (d - l);
  let o = new Int32Array(s),
    a = [],
    u = 0,
    c = 0;
  for (let [l, d, g] of n)
    (a.push(r.slice(u, l)),
      o.set(i.subarray(u, l), c),
      (c += l - u),
      a.push(g),
      o.fill(-1, c, c + g.length),
      (c += g.length),
      (u = d));
  return (a.push(r.slice(u)), o.set(i.subarray(u), c), { text: a.join(""), origin: o });
}
function rt(e, n, r) {
  return { text: e.text.slice(n, r), origin: e.origin.slice(n, r) };
}
function tpe(e, { asRewritten: n = !1 } = {}) {
  let r = e.trimStart(),
    i = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(r);
  if (i) {
    let s = i[1]?.toLowerCase();
    if (s === "file") return null;
    if (s === "http" || s === "https") {
      let o = Z$e(r);
      return o?.hostname ? { host: o.hostname, path: o.pathname } : null;
    }
    return xn(fYt(r.slice(i[0].length)), "/");
  }
  return xn(n ? fYt(r) : r, ":");
}
function An(e, n) {
  let r = e.indexOf("@["),
    i = r === -1 ? 0 : r + 1,
    s = e[i] === "[" ? i : -1,
    o = s === -1 ? -1 : e.indexOf("]", s + 1),
    a = e.indexOf(n, o === -1 ? 0 : o + 1);
  return { open: s, close: o, cut: a };
}
function xn(e, n) {
  let { open: r, close: i, cut: s } = An(e, n),
    o = r === -1 ? 0 : r,
    a = e.indexOf("/");
  if (n === ":" && (s === -1 || (a !== -1 && a < e.indexOf(":")))) return null;
  let u = s === -1 ? "" : e.slice(n === ":" ? s + 1 : s);
  if (i !== -1) {
    let g = e.slice(i + 1, s === -1 ? e.length : s),
      y = e.slice(0, o) + e.slice(o + 1, i),
      h = wn(g) !== g ? y : wn(y),
      S = h.slice(h.lastIndexOf("@") + 1),
      f = Z$e(`ssh://[${S}]/`)?.hostname;
    return S ? { host: f || S, path: u } : null;
  }
  let c = s === -1 ? e : e.slice(0, s),
    l = c.slice(c.lastIndexOf("@") + 1);
  if (l.startsWith("[")) return null;
  let d = n === "/" ? l.replace(/:\d*$/, "") : l;
  return d ? { host: d, path: u } : null;
}
function Rn(e) {
  let { text: n, from: r } = ki(e),
    { close: i, cut: s } = An(n, "/"),
    o = s === -1 ? n.length : s,
    a = [],
    u = (c, l) => {
      let d = n.lastIndexOf("@", l - 1);
      if (d >= c) a.push([r(c), r(d)]);
    };
  if (i === -1) u(0, o);
  else (u(0, i), u(i + 1, o));
  return a;
}
function fYt(e) {
  return e.replace(/(?:%(?!00)[0-9A-Fa-f]{2})+/g, (n) => {
    try {
      return decodeURIComponent(n);
    } catch {
      return me(n);
    }
  });
}
function ki(e) {
  if (!e.includes("%")) return { text: e, from: (s) => s };
  let n = [],
    r = "",
    i = 0;
  for (let s of e.matchAll(/(?:%(?!00)[0-9A-Fa-f]{2})+/g)) {
    for (let l = i; l < s.index; l++) n.push(l);
    r += e.slice(i, s.index);
    let o, a;
    try {
      ((o = decodeURIComponent(s[0])),
        (a = Array.from(o, (l) => {
          let d = l.codePointAt(0);
          return d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
        })));
    } catch {
      ((o = me(s[0])), (a = Array.from(o, () => 1)));
    }
    let u = s.index,
      c = 0;
    for (let l of a) {
      let d = o.codePointAt(c) > 65535 ? 2 : 1;
      for (let g = 0; g < d; g++) n.push(u);
      ((c += d), (u += 3 * l));
    }
    ((r += o), (i = s.index + s[0].length));
  }
  for (let s = i; s <= e.length; s++) n.push(s);
  return { text: r + e.slice(i), from: (s) => n[s] };
}
function wn(e) {
  let n = e.indexOf(":"),
    r = e.slice(n + 1);
  if (n === -1 || !/^[ \t\n\v\f\r]*[+-]?\d+$/.test(r)) return e;
  let i = Number.parseInt(r.trim(), 10);
  return i >= 0 && i < 65536 ? e.slice(0, n) : e;
}
var Si = /\s/g,
  xi = /[\n\r\u2028\u2029]/g,
  wi = /(?:@|%40)(?:\[|%5B)/gi,
  Ai = /^(?:\[|%5B)/i,
  Ri = /\]|%5D/gi,
  Ues = /(?:^|[^A-Za-z0-9+.-])(?:https?|wss?|ftps?)$/i,
  Tn = /(?:^|[^A-Za-z0-9+.-])(?:ssh|git|git\+ssh|ssh\+git)$/i,
  _i = /[,;|&]/g,
  vi = /(?:^|[^A-Za-z0-9+.-])[A-Za-z][A-Za-z0-9+.-]{0,31}$/,
  Oi = /["'`|,;&<>()[\]\\@/?#]|%40|%5B/i,
  Ti = /["'`]/,
  Li = /[;|&\n]/g,
  Ci = 64,
  Ii = 2048,
  Di = /[\s"'`]/g;
function it(e) {
  let n = [],
    r = I(e, Di),
    i = 0;
  for (let s = e.indexOf("://"); s !== -1;) {
    let o = s + 3;
    if (s >= i && Tn.test(e.slice(Math.max(0, s - 8), s))) {
      i = Math.min(r(o), o + Ii);
      for (let [a, u] of Rn(e.slice(o, i))) n.push([o + a, o + u]);
    }
    s = e.indexOf("://", o);
  }
  return n;
}
function xpi(e) {
  return Ln(e).spans;
}
function Ln(e) {
  let n = [],
    r = [],
    i = I(e, Si),
    s = I(e, /\//g),
    o = st(e, wi),
    a = I(e, Ri),
    u = I(e, /\//g),
    c = I(e, Li),
    l = I(e, /[/?#]/g),
    d = I(e, _i),
    g = I(e, /@/g),
    y = I(e, /%40/gi),
    h = I(e, /\[REDACTED|\*\*\*:\*\*\*/g),
    S = I(e, /[:%]/g),
    f = I(e, /["'`,;|&<>{}()]/g),
    m = On(e, !1),
    b = On(e, !0);
  for (let w = e.indexOf("://"); w !== -1;) {
    let x = w + 3,
      T,
      D = e.indexOf("://", x),
      A = i(x),
      B = g(x),
      P;
    if (Ues.test(e.slice(Math.max(0, w - 8), w))) {
      let O = Math.min(l(x), A),
        F = Math.min(d(x), O);
      if (
        ((P = B < O ? Math.max(m(x, O), b(B, O)) : Math.max(m(x, Math.min(s(x), A)), b(x, F))),
        P <= x)
      ) {
        let Y = Math.min(O, c(x));
        r.push({ start: x, fieldEnd: Math.min(F, Y), lastEncodedAt: b(x, Y) });
      }
    } else {
      let O = Math.min(s(x), A),
        F = Math.min(A, D === -1 ? e.length : D),
        Y = Tn.test(e.slice(Math.max(0, w - 8), w)),
        C = Y ? o(x) : null,
        M = Y ? Ai.exec(e.slice(x, x + 3)) : null,
        v = [
          [M !== null ? x + M[0].length : -1, F],
          [C !== null && C.index < F ? C.index + C[0].length : -1, A]
        ];
      for (let [L, V] of v) {
        let U = L === -1 ? A : a(L);
        if (U < V) ((T = Math.max(T ?? U, U)), (O = Math.max(O, Math.min(u(U), A))));
      }
      P = Math.max(m(x, O), b(x, O));
    }
    if (P > x)
      n.push({
        start: x,
        end: P,
        separatorEnd: P + (e[P] === "@" ? 1 : 3),
        loginEnd: B <= P ? B : Math.min(y(x), P),
        bracketClose: T
      });
    else {
      let O = h(x);
      if (O > x && O < Math.min(A, s(x), f(x)) && S(x) < O)
        n.push({ start: x, end: O, separatorEnd: O, loginEnd: O });
    }
    w = D;
  }
  return { spans: n, hostParts: r };
}
function Dn(e, n) {
  let { spans: r, hostParts: i } = Ln(e);
  if (r.length === 0 && i.length === 0) return [];
  let s = I(e, /[\s"'>}|,;&`)\]]/g),
    o = I(e, /\s/g),
    a = [],
    u = [];
  for (let h of r)
    (a.push({ start: h.start, end: h.end, loginEnd: h.loginEnd }), u.push({ ...h, userinfo: h }));
  let c = De(e, n);
  for (let h of i) {
    let S = c(h.start)[0];
    if (S && S.keyStart < h.fieldEnd && e.slice(h.start, S.keyStart).includes("%")) {
      let f = h.lastEncodedAt > S.keyStart ? h.lastEncodedAt : S.valueStart;
      (a.push({ start: h.start, end: f, loginEnd: f }),
        u.push(
          f > S.valueStart
            ? {
                start: h.start,
                end: f,
                userinfo: { start: h.start, end: f, separatorEnd: f + 3, loginEnd: f }
              }
            : { start: h.start, end: f }
        ));
    }
  }
  if (u.length === 0) return [];
  a.sort((h, S) => h.start - S.start);
  let l = De(e, n),
    d = 0;
  for (let h = 0, S = l(h); S[0] !== void 0;) {
    let f,
      m = null;
    for (let w of S)
      if (((m = w.valueEnd()), m !== null)) {
        f = w;
        break;
      }
    if (f === void 0 || m === null) {
      ((h = S[0].keyStart + 1), (S = l(h)));
      continue;
    }
    while (d < a.length && a[d].start <= f.keyStart) d++;
    let b = a[d];
    if (b !== void 0 && b.start < m) {
      let w = e[f.valueStart] ?? "",
        T =
          (w === '"' || w === "'") && m - 1 > f.valueStart && e[m - 1] === w
            ? Math.max(m, b.end)
            : o(Math.max(m, b.end, s(b.loginEnd + 1)));
      u.push({ start: f.valueStart, end: T });
    }
    ((h = m), (S = l(h)));
  }
  let g = {
      nextKey: De(e, n),
      plainKeys: De(e, n),
      nextLineEnd: I(e, xi),
      span: 0,
      lineEnd: -1,
      resumeAt: 0,
      overflowEnd: Ni(e, () => g.lineEnd)
    },
    y = [];
  for (let h of Hi(u)) {
    let S = y.at(-1);
    y.push(
      S !== void 0 && h.start < S.end
        ? vn(e, { start: y.pop().start, end: Math.max(S.end, h.end) }, g)
        : vn(e, h, g)
    );
  }
  return y.map((h) => (h.userinfo ? h : $i(e, h)));
}
var _n = new WeakMap();
function Pi(e) {
  let n = _n.get(e);
  if (!n)
    ((n = {
      word: new RegExp(e.word, "gi"),
      notTail: new RegExp(`(?!${e.tail})[^]`, "gi"),
      separator: new RegExp(e.separator, "iy"),
      value: new RegExp(e.value, "iy")
    }),
      _n.set(e, n));
  return n;
}
function De(e, n) {
  let r = n.map((i) => {
    let { word: s, notTail: o, separator: a, value: u } = Pi(i),
      c = st(e, s),
      l = I(e, o),
      d = -1,
      g = -1,
      y = -1,
      h = null,
      S = (w) => {
        if (w !== y) ((y = w), (u.lastIndex = w), (h = u.test(e) ? u.lastIndex : null));
        return h;
      },
      f = (w) => {
        if (w !== d) ((d = w), (a.lastIndex = w), (g = a.test(e) ? a.lastIndex : -1));
        return g;
      },
      m = -1,
      b = null;
    return (w) => {
      if (m !== -1 && w >= m && (b === null || w <= b.keyStart)) return b;
      ((m = w), (b = null));
      for (let x = c(w); x !== null;) {
        let T = x.index + x[0].length,
          D = f(i.tail ? l(T) : T);
        if (D !== -1) {
          b = { keyStart: x.index, valueStart: D, valueEnd: () => S(D) };
          break;
        }
        x = c(x.index + 1);
      }
      return b;
    };
  });
  return (i) => {
    let s = [];
    for (let o of r) {
      let a = o(i);
      if (a && (!s[0] || a.keyStart <= s[0].keyStart))
        s = s[0] && a.keyStart === s[0].keyStart ? [...s, a] : [a];
    }
    return s;
  };
}
function vn(e, n, r) {
  if (n.userinfo && Fi(e, n.userinfo, r)) return n;
  let i = n.end;
  r.resumeAt = Math.max(r.resumeAt, n.start);
  for (let s = r.nextKey(r.resumeAt); s[0] !== void 0 && s[0].keyStart < i;) {
    let o = s[0].keyStart;
    if (o > r.lineEnd) {
      let l = r.nextLineEnd(o);
      ((r.span = Ci * (l - r.lineEnd)), (r.lineEnd = l));
    }
    let a = null,
      u = s[0];
    for (let l of s)
      if (((a = l.valueEnd()), a !== null)) {
        u = l;
        break;
      }
    let c = a ?? u.valueStart;
    if (((r.span -= c - o), r.span < 0))
      return { start: n.start, end: Math.max(i, r.overflowEnd(n.start)) };
    ((i = Math.max(i, c)), (r.resumeAt = u.valueStart), (s = r.nextKey(r.resumeAt)));
  }
  return i === n.end ? n : { start: n.start, end: i };
}
function Fi(e, n, r) {
  if (
    e[n.end] !== "@" ||
    Oi.test(e.slice(n.start, n.end)) ||
    !vi.test(e.slice(Math.max(0, n.start - 36), n.start - 3))
  )
    return !1;
  for (
    let i = r.plainKeys(n.start);
    i[0] !== void 0 && i[0].keyStart < n.end;
    i = r.plainKeys(i[0].keyStart + 1)
  )
    if (i.some((s) => s.valueStart === n.end)) return !1;
  return !0;
}
function Ni(e, n) {
  let r = I(e, /["'`]/g),
    i = -1,
    s = e.length;
  return (o) => {
    if (n() !== i) ((i = n()), (s = r(o) < i ? e.length : i));
    return s;
  };
}
function $i(e, n) {
  let r = e[n.end - 1];
  if (r === void 0 || !Ti.test(r)) return n;
  return (e.slice(n.start, n.end).split(r).length - 1) % 2 === 1
    ? { start: n.start, end: n.end - 1 }
    : n;
}
function Hi(e) {
  e.sort((r, i) => r.start - i.start || i.end - r.end);
  let n = [];
  for (let r of e) {
    let i = n.at(-1);
    if (i === void 0 || r.start >= i.end) n.push(r);
    else n[n.length - 1] = { start: i.start, end: Math.max(i.end, r.end) };
  }
  return n;
}
function I(e, n) {
  let r = st(e, n);
  return (i) => r(i)?.index ?? e.length;
}
function st(e, n) {
  let r = -1,
    i = null;
  return (s) => {
    if (r === -1 || s < r || (i !== null && s > i.index))
      ((n.lastIndex = s), (i = n.exec(e)), (r = s));
    return i;
  };
}
function On(e, n) {
  let r = null;
  return (i, s) => {
    if (r === null) {
      r = new Int32Array(e.length + 1);
      let a = -1;
      for (let u = 0; u <= e.length; u++) {
        if (n) {
          if (u >= 3 && e.startsWith("%40", u - 3)) a = u - 3;
        } else if (u >= 1 && e[u - 1] === "@") a = u - 1;
        r[u] = a;
      }
    }
    let o = r[Math.min(s, e.length)];
    return o >= i ? o : -1;
  };
}
var pt = new RegExp(
    mYe(
      String.raw`api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|memory[_-]?request[_-]?mac|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret`
    ),
    "i"
  ),
  ge = `[\\s\\u0085${Q$e}]`,
  ae = `(?:${mYe("Bearer|Basic")})[${Q$e}]*[\\s\\u0085]+`,
  Pn = "[^\\s\\u0085,;&}\\])]+",
  Fn = "(?![\\w\\[({$/+=~!@%^?\\\\-])",
  Be = "\\n\\r\\x0b\\x0c\\u0085\\u2028\\u2029",
  ee = "[\\s\\u0085]",
  Bes = new RegExp(ge),
  Ppi = new RegExp(`(?:[=:]|["']|\\b(?:${mYe("bearer|basic")}))$`, "i"),
  Bi = `\\\\+(?:"[^"${Be}]*(?<!\\\\)(?=\\\\+")|'[^'${Be}]*(?<!\\\\)(?=\\\\+'))`,
  Nn = `[^\\s\\u0085,;&})"'\\\\]+`,
  Ge = `"[^"${Be}]*"|'[^'${Be}]*'|"[^"]*"${Fn}|'[^']*'${Fn}|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|${ae}(?:\\[REDACTED\\]|${Pn})|${Pn}`,
  Mi = {
    word: "\\b(?:Bearer|Basic)",
    tail: "",
    separator: `${ee}+`,
    value: "[A-Za-z0-9+/=._~-]{20,}"
  },
  Wi = { word: `(?:${pt.source})`, tail: "[\\w.-]", separator: `["']?${ee}*[=:]${ee}*`, value: Ge },
  Gi = {
    word: "\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w",
    tail: "\\w",
    separator: `${ee}*[=:]${ee}*`,
    value: Ge
  },
  Ki = [Wi, Gi, Mi],
  zi = ["sk", "ant", "api"].join("-"),
  K = "[\\w=-]",
  j = `${K}{20,}(?:\\.[0-9a-z]{9})?`,
  Vi = "[\\w.-]{0,256}(?![\\w.-])",
  Un = `${ee}*(?!${ee})`,
  ht = `(?:${pt.source})${Vi}`,
  Gn = `\\b(?:${mYe("AWS|GOOGLE|GCP|GCLOUD|AZURE")})${sit}_\\w+`,
  lt = `${ht}(?:${sit}["'])?${ge}*[=:]${Un}(${Ge})`,
  ct = `${Gn}${ge}*[=:]${ee}*(${Ge})`,
  Kn = /\\["']/,
  zn = `${ht}${sit}\\\\+["']${ge}*[=:]${Un}(${Bi}|${ae}${Nn}|${Nn}|\\\\+["'][^\\s\\u0085,;&})"'\\\\]*)`,
  Q = `[^\\s\\u0085,;&}\\])"']{0,64}?(?:${ht}|${Gn})`,
  ji = `(?:${ae})?(?:[{[(]{0,8}(?:"${Q}"|'${Q}')|${Q})${ge}*[=:]`,
  Zi = `(?:${ae})?(?:[{[(]{0,8}(?:"${Q}"|'${Q}'|\\\\+"${Q}\\\\+"|\\\\+'${Q}\\\\+')|${Q})${ge}*[=:]`,
  Vn = "\\][^\\s\"'>}|,;&`)\\]]*",
  Ee = "[A-Za-z0-9_-]",
  dt = `${Ee}{10}${Ee}*`,
  $n = `\\.${dt}\\.${dt}`,
  mt = `(?<!${Ee})(?=${Ee}+${$n})(?:${Ee}*?-)??(eyJ${dt}${$n})`,
  jn = [
    {
      id: "url-userinfo",
      source: `:\\/\\/((["'])[^/@\\s]*\\2(?=@)|(?:[^/@\\s"'|,;&\`]+(?=@))|[^/@\\s"'|,;&\`]*["'|,;&\`][^/@\\s]*@)@?`,
      confidence: "low"
    },
    {
      id: "gcp-service-account",
      source: "\\b([a-z0-9-]{1,64}@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
      flags: "i",
      confidence: "low"
    },
    { id: "loose-anthropic-key", source: "\\b(sk-ant-?[\\w-]{10,})", confidence: "low" },
    {
      id: "http-auth-scheme",
      source: `\\b${ae}([A-Za-z0-9+/=._~-]{20,})`,
      flags: "i",
      confidence: "low"
    },
    { id: "loose-jwt", prefilter: /eyJ/, source: mt, confidence: "low" },
    { id: "sensitive-assign", source: lt, flags: "i", confidence: "low" },
    { id: "cloud-env-var", source: ct, flags: "i", confidence: "low" },
    {
      id: "url-userinfo-tail",
      source:
        ":\\/\\/(\\[REDACTED\\](?!@|%40[^\\s\"'>}|,;&`)\\]@/]*(?:[\\s\"'>}|,;&`)\\]/]|$))[^\\s\"'>}|,;&`)\\]]*?(?=[\\s\"'>}|,;&`)\\]]|:\\/\\/|$))",
      confidence: "low"
    },
    {
      id: "url-userinfo-later-at",
      source: ":\\/\\/(\\[REDACTED\\]@(?:[^\\s:/?#\"'>}|,;&`)\\]]|:(?!\\/\\/)){0,256})(?=@|%40)",
      confidence: "low"
    },
    {
      id: "url-userinfo-encoded",
      source:
        ":\\/\\/((?:\\[REDACTED\\]@)?(?:(?:[^/?#@\\s\"',;&<>|)\\]{}`[]*[\"'`<>{}[\\]][^/?#@\\s,;&|{}\"'`<>[\\]()]*(?=%40))|[^/?#@\\s\"',;&<>|)\\]}`[]+(?=%40)|(?=[^/?#@\\s\"',;&<>|)\\]}`[]*?(?:%|:[^/?#@\\s\"',;&<>|)\\]}`[]))[^/?#@\\s\"',;&<>|)\\]}`[]+(?=\\[REDACTED\\])))",
      confidence: "low"
    },
    { id: "masked-value-rest", source: `\\[REDACTED\\](${Vn})`, confidence: "low" },
    {
      id: "anthropic-signed-key-rest",
      redactOnly: !0,
      prefilter: /\[REDACTED\]\.eyJ/,
      source: "\\[REDACTED\\]\\.(eyJ[\\w-]+\\.[\\w-]+)",
      confidence: "low"
    },
    {
      id: "sensitive-assign-escaped",
      redactOnly: !0,
      prefilter: Kn,
      source: zn,
      flags: "i",
      confidence: "low"
    },
    {
      id: "aws-access-token",
      source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
      confidence: "high"
    },
    { id: "gcp-api-key", source: "\\b(AIza[\\w-]{35})(?![\\w-])", confidence: "high" },
    {
      id: "google-oauth-client-secret",
      source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
      confidence: "high"
    },
    {
      id: "azure-ad-client-secret",
      source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
      confidence: "high"
    },
    {
      id: "digitalocean-pat",
      source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "digitalocean-access-token",
      source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "anthropic-api-key",
      source: `\\b(${zi}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "anthropic-admin-api-key",
      source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "anthropic-oauth-token",
      source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      run: "[\\w-]",
      confidence: "high"
    },
    {
      id: "openai-api-key",
      source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
      confidence: "high"
    },
    {
      id: "openai-legacy-api-key",
      source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
      confidence: "high"
    },
    {
      id: "huggingface-access-token",
      source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    { id: "supabase-secret-key", source: "\\bsb_secret_[A-Za-z0-9_-]{20,}", confidence: "high" },
    { id: "supabase-access-token", source: "\\bsbp_[a-z0-9]{40,}", confidence: "high" },
    { id: "github-pat", source: "ghp_[0-9a-zA-Z]{36}", confidence: "high" },
    { id: "github-fine-grained-pat", source: "github_pat_\\w{82}", confidence: "high" },
    { id: "github-app-token", source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}", confidence: "high" },
    { id: "github-oauth", source: "gho_[0-9a-zA-Z]{36}", confidence: "high" },
    { id: "github-refresh-token", source: "ghr_[0-9a-zA-Z]{36}", confidence: "high" },
    { id: "gitlab-pat", source: `glpat-${j}`, displayRun: K, confidence: "high" },
    { id: "gitlab-deploy-token", source: `gldt-${j}`, displayRun: K, confidence: "high" },
    {
      id: "gitlab-runner-authentication-token",
      source: `glrt-${j}`,
      displayRun: K,
      confidence: "high"
    },
    { id: "gitlab-oauth-app-secret", source: `gloas-${j}`, displayRun: K, confidence: "high" },
    {
      id: "gitlab-pipeline-trigger-token",
      source: `glptt-${j}`,
      displayRun: K,
      confidence: "high"
    },
    {
      id: "gitlab-kubernetes-agent-token",
      source: `glagent-${j}`,
      displayRun: K,
      confidence: "high"
    },
    { id: "gitlab-incoming-mail-token", source: `glimt-${j}`, displayRun: K, confidence: "high" },
    { id: "gitlab-scim-oauth-token", source: `glsoat-${j}`, displayRun: K, confidence: "high" },
    { id: "gitlab-ci-build-token", source: `glcbt-${j}`, displayRun: K, confidence: "high" },
    { id: "gitlab-feed-token", source: `glft-${j}`, displayRun: K, confidence: "high" },
    {
      id: "gitlab-feature-flag-client-token",
      source: `glffct-${j}`,
      displayRun: K,
      confidence: "high"
    },
    {
      id: "slack-bot-token",
      source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
      confidence: "high"
    },
    {
      id: "slack-user-token",
      source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
      confidence: "high"
    },
    {
      id: "slack-rotation-token",
      source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
      confidence: "high"
    },
    {
      id: "slack-app-token",
      source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
      flags: "i",
      confidence: "high"
    },
    { id: "slack-workflow-token", source: "\\bxwfp-[a-zA-Z0-9-]{20,}", confidence: "high" },
    {
      id: "slack-webhook-url",
      source:
        "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
      flags: "i",
      confidence: "high"
    },
    { id: "twilio-api-key", source: "SK[0-9a-fA-F]{32}", confidence: "high" },
    {
      id: "sendgrid-api-token",
      source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "npm-access-token",
      source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    { id: "pypi-upload-token", source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}", confidence: "high" },
    {
      id: "databricks-api-token",
      source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "hashicorp-tf-api-token",
      source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
      confidence: "high"
    },
    {
      id: "pulumi-api-token",
      source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "postman-api-token",
      source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "grafana-api-key",
      source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "grafana-cloud-api-token",
      source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "grafana-service-account-token",
      source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "sentry-user-token",
      source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    {
      id: "sentry-org-token",
      source:
        "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
      confidence: "high"
    },
    {
      id: "stripe-access-token",
      source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
      confidence: "high"
    },
    { id: "shopify-access-token", source: "shpat_[a-fA-F0-9]{32}", confidence: "high" },
    { id: "shopify-shared-secret", source: "shpss_[a-fA-F0-9]{32}", confidence: "high" }
  ],
  Yi = 64;
function ft(e, n) {
  let r = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi,
    i = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  r.lastIndex = n;
  let s = r.exec(e);
  if (!s) return null;
  i.lastIndex = s.index + s[0].length + Yi;
  let o = i.exec(e);
  if (!o) return null;
  return { start: s.index, end: o.index + o[0].length };
}
function Xi(e) {
  return ft(e, 0) !== null;
}
function jes(e) {
  let n = Jn(e);
  if (n.length === 0) return e;
  let r = "",
    i = 0;
  for (let s of n) ((r += e.slice(i, s.start) + "[REDACTED]"), (i = s.end));
  return r + e.slice(i);
}
function Jn(e) {
  let n = e.indexOf("-----");
  while (n !== -1) {
    while (e.charCodeAt(n + 5) === 45) n++;
    if (
      (e.charCodeAt(n + 5) | 32) === 98 &&
      (e.charCodeAt(n + 6) | 32) === 101 &&
      (e.charCodeAt(n + 7) | 32) === 103 &&
      (e.charCodeAt(n + 8) | 32) === 105 &&
      (e.charCodeAt(n + 9) | 32) === 110
    )
      break;
    n = e.indexOf("-----", n + 5);
  }
  let r = [];
  if (n === -1) return r;
  for (let i = ft(e, n); i; i = ft(e, i.end)) r.push(i);
  return r;
}
var gt = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  ot = "(?=[^a-zA-Z0-9_\\-+=]|$)",
  Hn = "(?<![a-zA-Z0-9_\\-])";
function qi() {
  return jn.map(({ id: e, confidence: n, source: r, flags: i = "", displayRun: s }) => {
    let o = { id: e, confidence: n },
      a = i.replace("g", "") + "g";
    if (n !== "high") return { ...o, re: new RegExp(r, a) };
    let u = Zn(r);
    if (s === void 0) return { ...o, re: new RegExp(Hn + u + ot, a) };
    return {
      ...o,
      prefilter: new RegExp(u, i.replace("g", "")),
      re: new RegExp(`(?<!${s})(?=${s}+${ot})${s}*?${Hn}(${u})${ot}`, a)
    };
  });
}
function be(e) {
  return jn.map((n) => {
    let r = (n.flags ?? "").replace("g", ""),
      i = {
        id: n.id,
        confidence: n.confidence,
        ...(n.redactOnly === !0 && { redactOnly: n.redactOnly }),
        ...(n.prefilter !== void 0 && { prefilter: n.prefilter })
      };
    if (n.run === void 0) return { ...i, re: new RegExp(n.source, e ? r + "g" : (n.flags ?? "")) };
    return {
      ...i,
      prefilter: new RegExp(Zn(n.source), r),
      re: new RegExp(
        `(?:(?<!${n.run})|(?<=\\\\[nr]))(?=${n.run}+${gt})${n.run}*?${n.source}`,
        e ? r + "g" : r
      )
    };
  });
}
function Zn(e) {
  return e.endsWith(gt) ? e.slice(0, -gt.length) : e;
}
function Fe(e, n) {
  if (typeof n !== "string") return "[REDACTED]";
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? n[0] : "",
    i = e.lastIndexOf(n);
  return `${e.slice(0, i)}${r}[REDACTED]${r}${e.slice(i + n.length)}`;
}
function Qi(e) {
  let n = e[1];
  if (typeof n !== "string") return { keep: 0, insert: "[REDACTED]" };
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? 1 : 0,
    i = e[0].lastIndexOf(n);
  return { keep: i + r, insert: "[REDACTED]", keepEnd: e[0].length - i - n.length + r };
}
function Me(e) {
  let n = Dn(e, Ki).map(({ start: s, end: o }) => {
      let a = /^(["'])[^]*\1$/.test(e.slice(s, o)) ? 1 : 0;
      return [s + a, o - a];
    }),
    r = it(e),
    i = rs(e);
  return r.length === 0 && i.length === 0 ? n : Xn([...n, ...r, ...i]);
}
var at,
  ts = new RegExp(Vn, "y"),
  ns = 512;
function rs(e) {
  at ??= {
    plain: {
      assign: new RegExp(`${lt}|${ct}`, "gi"),
      nextKey: new RegExp(ji, "iy"),
      valueWithWhitespace: new RegExp(`["']|${ae}`, "iy"),
      skipsStrays: !1
    },
    escaped: {
      assign: new RegExp(`${lt}|${ct}|${zn}`, "gi"),
      nextKey: new RegExp(Zi, "iy"),
      valueWithWhitespace: new RegExp(`\\\\*["']|${ae}`, "iy"),
      skipsStrays: !0
    }
  };
  let n = Bn(e, at.plain);
  return Kn.test(e) ? [...n, ...Bn(e, at.escaped)] : n;
}
function Bn(e, { assign: n, nextKey: r, valueWithWhitespace: i, skipsStrays: s }) {
  let o = [],
    a,
    u = 0,
    c = ts;
  n.lastIndex = 0;
  for (let l = n.exec(e); l !== null; l = n.exec(e)) {
    let d = l[1] ?? l[2] ?? l[3],
      g = l.index + l[0].length,
      y = g - d.length;
    r.lastIndex = y;
    let h = d.length <= ns && r.test(e) ? r.lastIndex : void 0;
    if (h !== void 0 && h < g) {
      if (((i.lastIndex = h), !i.test(e))) h = void 0;
    }
    if (s && a !== void 0 && l.index >= a && l.index < u && h === void 0) {
      ((a = void 0), (n.lastIndex = u));
      continue;
    }
    if (a !== void 0 && l.index < a) {
      let S = /^(["'])[^]*\1$/.test(d),
        f = S && u <= y ? 1 : 0;
      ((c.lastIndex = g), o.push([y + f, !S && c.test(e) ? c.lastIndex : g - f]));
    }
    if (((u = g), (a = h), a !== void 0)) n.lastIndex = y;
  }
  return o;
}
function Xn(e) {
  let n = e.filter(([i, s]) => s > i).sort((i, s) => i[0] - s[0]),
    r = [];
  for (let [i, s] of n) {
    let o = r.at(-1);
    if (o !== void 0 && i <= o[1]) o[1] = Math.max(o[1], s);
    else r.push([i, s]);
  }
  return r;
}
function fe(e, n) {
  let { text: r, origin: i } = e,
    s = [],
    o = 0;
  for (let a = 0; a < r.length;) {
    let u = i[a];
    while (o < n.length && n[o][1] <= u) o++;
    let c = n[o];
    if (u < 0 || c === void 0 || u < c[0]) {
      a++;
      continue;
    }
    let l = a;
    while (l > 0 && i[l - 1] < 0) l--;
    while (a < r.length && (i[a] < 0 || (i[a] >= c[0] && i[a] < c[1]))) a++;
    let d = s.at(-1);
    if (d !== void 0 && d[1] >= l) d[1] = a;
    else s.push([l, a, "[REDACTED]"]);
  }
  return Ie(e, s);
}
var is = 512,
  ss = 512;
class qn {
  testRules = null;
  redactRules = null;
  displayRules = null;
  resultCache = new Map();
  scan(e) {
    this.testRules ??= be(!1);
    let n = [];
    for (let r of this.testRules)
      if (r.confidence === "high" && r.prefilter?.test(e) !== !1 && r.re.test(e))
        n.push({
          ruleId: r.id,
          label: r.id
            .split("-")
            .map((i) => Ls[i] ?? va(i))
            .join(" ")
        });
    if (Xi(e)) n.push({ ruleId: "private-key", label: "Private Key" });
    return n;
  }
  redactContext(e, n = !1) {
    this.redactRules ??= be(!0);
    let r = jes(e);
    for (let i of this.redactRules)
      if (i.confidence === "low" && ut(i, n, r)) r = r.replace(i.re, Fe);
    return r;
  }
  redactTokens(e) {
    this.redactRules ??= be(!0);
    let n = e;
    for (let r of this.redactRules)
      if (r.confidence === "high" && r.prefilter?.test(n) !== !1) n = n.replace(r.re, Fe);
    return n;
  }
  trackedByRules(e, n = !1) {
    return this.trackedTokens(this.trackedContext(e, n));
  }
  trackedContext(e, n = !1) {
    let r = Ie(
      kn(e),
      Jn(e).map(({ start: i, end: s }) => [i, s, "[REDACTED]"])
    );
    return this.trackedRules(r, "low", n);
  }
  redactOnlyRules(e) {
    this.redactRules ??= be(!0);
    let n = e;
    for (let r of this.redactRules)
      if (r.redactOnly === !0 && ut(r, !0, n)) n = n.replace(r.re, Fe);
    return n;
  }
  trackedTokens(e) {
    return this.trackedRules(e, "high");
  }
  trackedRules(e, n, r = !1) {
    this.redactRules ??= be(!0);
    let i = e;
    for (let s of this.redactRules)
      if (s.confidence === n && ut(s, r, i.text)) ((s.re.lastIndex = 0), (i = Sn(i, s.re, Qi)));
    return i;
  }
  redactWithUrlRanges(e) {
    let n = Me(e);
    return n.length === 0
      ? this.redactTokens(this.redactContext(e, !0))
      : fe(this.trackedByRules(e, !0), n).text;
  }
  redactTracked(e) {
    return fe(this.trackedByRules(e, !0), Me(e));
  }
  redact(e) {
    let n = e.length <= is;
    if (n) {
      let i = this.resultCache.get(e);
      if (i !== void 0) return i;
    }
    let r = this.redactWithUrlRanges(e);
    if (n) {
      if (this.resultCache.size >= ss)
        this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, r);
    }
    return r;
  }
  redactForDisplay(e) {
    this.displayRules ??= qi();
    let n = e;
    for (let r of this.displayRules) {
      if (r.confidence !== "high" || r.prefilter?.test(n) === !1) continue;
      n = n.replace(r.re, us);
    }
    return n;
  }
}
var N = new qn();
function iCt(e) {
  return N.scan(e);
}
function Ms(e) {
  return N.redact(e);
}
function dee(e) {
  return N.redactTokens(N.redactContext(e));
}
function Wes(e) {
  return N.redactContext(e);
}
function cdr(e) {
  return N.redactTokens(e);
}
var Xo = new RegExp(mt),
  qo = new RegExp(mt, "g");
var gYe = 16384;
function pYt(e, n) {
  let r = Me(e);
  if (r.length === 0) return Ts(N.redactContext(e, !0), n);
  let i = N.trackedContext(e, !0);
  for (let s = n + 2 * gYe; ; s *= 2) {
    if (i.text.length <= s) return fe(N.trackedTokens(i), r).text;
    let o = N.trackedTokens(rt(i, 0, s)),
      a = o.text.length - gYe;
    if (a >= n) {
      let u = re(o.text, a).length,
        c = fe(rt(o, 0, u), r);
      if (c.text.length >= n) return c.text;
    }
  }
}
var os = /[$\x60|;&<>()\s]/,
  as = /[/.@:~*?\\]/;
function us(e, n) {
  let r = typeof n === "string" ? n : e;
  if (os.test(r) || as.test(r)) return e;
  return Fe(e, n);
}
function eFe(e) {
  return N.redactForDisplay(e);
}
function cee(e, n = Ms) {
  if (typeof e === "string") return n(e);
  if (Array.isArray(e)) return e.map((r) => cee(r, n));
  if (e !== null && typeof e === "object") {
    let r = Object.create(null),
      i = Object.entries(e),
      s = n === Ms ? ls(i.map(([o]) => o)) : void 0;
    for (let [o, [a, u]] of i.entries()) {
      let c = s ? s[o] : a;
      if (typeof u === "string") {
        if (n === Ms) {
          r[c] = Ges(a, u);
          continue;
        }
        let l = `${a}: `,
          d = n(l + u);
        r[c] = d.startsWith(l) ? d.slice(l.length) : n(u);
      } else r[c] = cee(u, n);
    }
    return r;
  }
  return e;
}
function Ges(e, n) {
  let r = `${e}: `,
    i = r + n,
    s = Me(i);
  if (s.length === 0) {
    let c = Ms(i);
    if (c.startsWith(r)) return c.slice(r.length);
    let l = dee(i);
    return l.startsWith(r) ? N.redactOnlyRules(l.slice(r.length)) : Ms(n);
  }
  let o = [];
  for (let [c, l] of s) if (l > r.length) o.push([Math.max(c, r.length), l]);
  let a = N.trackedByRules(i, !0);
  if (a.text.startsWith(r)) return fe(a, o).text.slice(r.length);
  let u = N.trackedByRules(i);
  return u.text.startsWith(r) ? N.redactOnlyRules(fe(u, o).text.slice(r.length)) : Ms(n);
}
function ls(e) {
  let n = e.map((s) => Ms(s));
  if (n.every((s, o) => s === e[o])) return n;
  let r = new Set(n.filter((s, o) => s === e[o])),
    i = new Map();
  return n.map((s, o) => {
    if (s === e[o]) return s;
    let a = s,
      u = i.get(s) ?? 2;
    while (r.has(a)) ((a = `${s} (${u})`), u++);
    return (i.set(s, u), r.add(a), a);
  });
}
function qkn(e) {
  let n = Object.create(null);
  for (let [r, i] of Object.entries(e)) n[r] = pt.test(r) ? "[REDACTED]" : i;
  return n;
}
var wC = "[redacted URL]";
function Mn(e) {
  let n = H(e);
  if (!/%(?:40|3a|5c)/i.test(n)) return e;
  let r = /^(?:https?|wss?|ftp|file):/i.test(n);
  return n.replace(r ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (i, s) =>
    String.fromCharCode(parseInt(s, 16))
  );
}
function yt(e, n, r) {
  let i = n(e),
    s = Mn(e);
  if (i === r || s === e) return i;
  return i !== null && Mn(i) === n(s) ? i : r;
}
function Ykn(e) {
  return yt(e, cs, null);
}
function cs(e) {
  try {
    let n = new URL(e);
    if (!n.host || St(e) || kt(n) || wt(e, n) || tr(e)) return null;
    return (
      (n.username = ""),
      (n.password = ""),
      (n.search = ""),
      (n.hash = ""),
      n.toString().replace(/\/$/, "")
    );
  } catch {
    return null;
  }
}
var zes = /[@:]|\/\//;
function T9r(e) {
  let n = Ykn(e);
  if (n === null) return null;
  let { protocol: r, host: i, pathname: s } = new URL(n);
  if (!zes.test(s)) return n;
  let o = s
    .replace(/@/g, "%40")
    .replace(/:/g, "%3A")
    .replace(/\/{2,}/g, (a) => `/${Ji("%2F", a.length - 1)}`);
  return `${r}//${i}${o}`;
}
function udr(e) {
  let n = [],
    r = 0;
  for (let [i, s] of Xn(it(e))) (n.push(e.slice(r, i), "[REDACTED]"), (r = s));
  return (
    n.push(e.slice(r)),
    n.join("").replace(/:\/\/[^/?#]*(@|%40)/g, (i, s) => (s === "@" ? "://" : "://[REDACTED]%40"))
  );
}
function Lb(e) {
  return yt(e, $e, wC);
}
function $e(e) {
  if (!e) return e;
  if (Ue(e) || er(e) || St(e)) return wC;
  try {
    let n = new URL(e);
    if (!n.host) throw TypeError("opaque");
    if (
      ((n.username !== "" || n.password !== "") &&
        `${n.pathname}${n.search}${n.hash}`.includes("@")) ||
      kt(n) ||
      wt(e, n)
    )
      return wC;
    return (
      (n.username = ""),
      (n.password = ""),
      (n.search = ""),
      (n.hash = ""),
      n.toString().replace(/\/$/, "")
    );
  } catch {
    let n = H(e),
      r = At(n),
      i = n.slice(r),
      s = Rt(i),
      o = i.search(/[?#]/);
    if (s !== -1 && o !== -1 && o < s) return wC;
    let a = s === -1 ? i : i.slice(s + 1),
      u = a.search(/[?#]/);
    if (u !== -1 && a.includes("@", u) && (s !== -1 || !As(a, u, r !== 0))) return wC;
    let c = Ze(Ze(s === -1 ? n : n.slice(r + s + 1), "?"), "#"),
      l = c.lastIndexOf("@"),
      d = l === -1 ? c : c.slice(l + 1);
    return de(d) &&
      !de(n) &&
      !/^:\d+\/?$/.test(d.startsWith("[") ? d.slice(d.indexOf("]") + 1) : d.slice(d.indexOf(":")))
      ? wC
      : d;
  }
}
var Et = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;
function lm(e) {
  return yt(e, ds, wC);
}
function ds(e) {
  if (Ue(e) || St(e)) return wC;
  if (Et.test(e)) {
    let s = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
    return s === -1 ? e : e.slice(0, s);
  }
  if (er(e) && !ws(e)) return wC;
  let n;
  try {
    n = new URL(e);
  } catch {
    return He(e, Wn(e) ? $e(e) : e);
  }
  if (!n.host) return He(e, n.search || n.hash || Wn(e) ? $e(e) : e);
  if (wt(e, n)) return wC;
  let r = n.username !== "" && xt(n.protocol.slice(0, -1)),
    i = n.username !== "" && !/^[^:]*:\//.test(H(e));
  return He(e, r || i || n.password || Ke(n.username) || kt(n) || n.search || n.hash ? $e(e) : e);
}
function dit(e) {
  return He(e, Lb(e));
}
function kSe(e, n, r) {
  return n === "" || n === r ? e : e.split(n).join(r);
}
function uee(e, n) {
  let r = typeof n === "string" || n === void 0 ? [n] : n;
  for (let i of r) {
    let s = fs(i),
      o = i && s.length > 0 ? lm(i) : "";
    for (let a of s) e = kSe(e, a, o);
  }
  return SA(e);
}
function fs(e) {
  if (!e || !nr.test(e) || lm(e) === e) return [];
  let n = [e],
    r = At(e),
    i = e.slice(r),
    s = i.indexOf("/");
  for (let o of new Set([i.indexOf("@"), Rt(i)]))
    if (r !== 0 && o !== -1 && (s === -1 || o < s)) n.push(e.slice(0, r) + i.slice(o + 1));
  return n;
}
function gs(e) {
  let n = H(e),
    r = At(n),
    i = r !== 0,
    s = n.indexOf("#");
  if (n.includes("?") || (s !== -1 && (i || n.includes("@", s)))) return !0;
  let o = n.slice(r),
    a = Rt(o);
  if (a === -1) return !1;
  let u = n.slice(0, r - 3),
    c = /^(?:ftps?|wss?)$/i.test(u) ? o.slice(0, a).replace(/^[/\\]+/, "") : o.slice(0, a);
  return Ke(c) || (i && (/https?$/i.test(u) || (!c.includes("/") && xt(u))));
}
var Xkn = /:|%3a/i;
function kt(e) {
  return (
    !e.hostname.startsWith("[") &&
    /%3a/i.test(e.hostname) &&
    `${e.pathname}${e.search}${e.hash}`.includes("@")
  );
}
function Ke(e) {
  return Xkn.test(e);
}
function St(e) {
  let n = H(e),
    r = n.indexOf(":"),
    i = r === -1 ? "" : n.slice(0, r);
  if (
    !/^[a-z][a-z0-9+.-]*$/i.test(i) ||
    !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(i) ||
    Et.test(n)
  )
    return !1;
  let s = n.slice(r + 1),
    o = Ze(s.slice(/^\/*/.exec(s)[0].length), "/"),
    a = o.search(/[?#]/);
  if (!(/%40/i.test(o) || (a !== -1 && o.includes("@", a)))) return !1;
  let u = o.replace(/%([0-9a-f]{2})/gi, (l, d) => String.fromCharCode(parseInt(d, 16))),
    c = u.lastIndexOf("@");
  return c !== -1 && u.slice(0, c).includes(":");
}
function de(e) {
  let n = e.indexOf(":"),
    r = e.indexOf("/");
  return n > 0 && !e.includes("://") && (r === -1 || n < r);
}
function He(e, n) {
  let r = (s, o) => {
    let a = H(s);
    return (
      ps(s) ||
      (/^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(a) &&
        o !== s &&
        !o.toLowerCase().startsWith(a.slice(0, a.indexOf("://") + 3).toLowerCase())) ||
      (de(s) && (hs(s) || /[\t\n\r]/.test(s) || ms(s, o)))
    );
  };
  return (n !== e && de(n) && !de(e)) || r(e, n) || r(n, n) ? wC : n;
}
function ps(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""),
    r = /^[a-z+\t\n\r]*:[\t\n\r]*\/[\t\n\r]*\//i.exec(n),
    i =
      r !== null && /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\/$/i.test(r[0].replace(/[\t\n\r]/g, ""))
        ? r
        : null;
  if (!i && !de(e)) return !1;
  let s = i
      ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i
      : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i,
    o = i ? n.slice(i[0].length) : e,
    a = i ? o.slice(Math.max(o.indexOf("/"), 0)) : "";
  return !s.test(o) || /(?:@|%40)(?:\[|%5b)/i.test(a);
}
function hs(e) {
  try {
    return new URL(e).host !== "";
  } catch {
    return !1;
  }
}
function ms(e, n) {
  let r = H(e),
    i = r.indexOf(":"),
    s = r.slice(0, i);
  if (i <= 0 || /[/?#]/.test(s) || e.includes("://")) return !1;
  let o = s.lastIndexOf("@"),
    a = r.indexOf("@["),
    u = a !== -1 ? a + 1 : r.startsWith("[") ? 0 : -1,
    c = s.slice(o + 1);
  if (u !== -1) {
    let l = r.indexOf("]", u);
    if (u !== o + 1 || r[l + 1] !== ":" || /[/?#@\\]/.test(r.slice(u + 1, l))) return !0;
    c = r.slice(u, l + 1);
  }
  return n !== e && n !== wC && !n.startsWith(`${c}:`);
}
function Wn(e) {
  return gs(e) || ys(e);
}
function ys(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""),
    r = n.indexOf("://");
  if (r !== -1 && /[?#]/.test(n)) return !0;
  let i = Ze(r === -1 ? n : n.slice(r + 3), "/"),
    s = i.lastIndexOf("@");
  return s !== -1 && (Ke(i.slice(0, s)) || (r !== -1 && xt(n.slice(0, r))));
}
function xt(e) {
  return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e);
}
function H(e) {
  return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "");
}
var We = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})",
  bs = "https?|wss?|ftps?",
  Qn = "ssh\\+git|git\\+ssh|ssh|git",
  Es = new RegExp(
    `[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${We}(?:wss?|file):(?!\\/)|${We}(?:${Qn}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`,
    "i"
  );
function Ue(e, { forDestination: n = !1 } = {}) {
  let r = H(e).replace(/\\/g, "/"),
    i = r.search(/[?#]/),
    s = i === -1 ? r : r.slice(0, i),
    o = (n ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(s) : null) ?? /:\/+/.exec(s);
  if (!o) return !1;
  let a = o.index + o[0].length,
    u = (n ? Es : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(s.slice(a)),
    c = a + (u?.index ?? 0) + (u?.[0].length ?? 0);
  return u !== null && (r.includes("@", c) || /%40/i.test(Ze(r.slice(c), "/")));
}
function er(e) {
  let n = H(e);
  if (Et.test(n) || /^file:/i.test(n)) return !1;
  return tr(e);
}
function tr(e) {
  let n = H(e),
    r = n.search(/[?#]/),
    s = (r === -1 ? n : n.slice(0, r)).indexOf("\\");
  return s !== -1 && n.includes("@", s);
}
function ks(e) {
  let n = H(e),
    r = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(n);
  if (!r) return !1;
  let i = n
      .slice(r.index + r[0].length)
      .replace(/%40/gi, "@")
      .replace(/%5b/gi, "["),
    s = i.search(/[/?#]/);
  return s !== -1 && i.includes("@[", s);
}
function Ss(e, n) {
  if (!/^(?:ssh|git|git\+ssh|ssh\+git):$/i.test(n.protocol)) return !1;
  let r = tpe(H(e))?.host;
  return r !== void 0 && r.toLowerCase() !== fYt(n.hostname).toLowerCase();
}
function wt(e, n) {
  return (
    Ue(e, { forDestination: !0 }) ||
    Ue(n.href, { forDestination: !0 }) ||
    ks(e) ||
    Ss(e, n) ||
    (n.protocol === "file:" && xs(e))
  );
}
function xs(e) {
  let n = H(e),
    r = n.search(/[?#]/),
    s = (r === -1 ? n : n.slice(0, r)).indexOf("\\"),
    o = n.lastIndexOf("@");
  return s !== -1 && o > s && /:|%3a/i.test(n.slice(s, o));
}
function ws(e) {
  return (
    /^[\w .+~@\\/-]*$/.test(e) &&
    !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) &&
    !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e)
  );
}
function At(e) {
  let n = e.indexOf("://");
  return n !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, n)) ? n + 3 : 0;
}
function Rt(e) {
  let n = e.indexOf("@");
  if (n === -1) return -1;
  let r = e.search(/[?#]/);
  if (r !== -1 && r < n && e.lastIndexOf("/", r) !== -1) return -1;
  let i = e.indexOf("/", n);
  return e.lastIndexOf("@", i === -1 ? e.length : i);
}
function As(e, n, r) {
  let i = e.indexOf("/");
  if (i <= 0 || i > n) return !1;
  let s = e.slice(0, i).replace(/^\[[^\]]*\]/, "");
  return !Ke(r ? s.replace(/:\d+$/, "") : s);
}
var Rs = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi,
  nr = /[\s'"`<>]/,
  Ipi = "whitespace, quotes, backticks or angle brackets";
function Opi(e) {
  return /^https?:\/\//i.test(e) && !nr.test(e);
}
var _s = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi,
  vs = new RegExp(`${We}(?:${bs}):(?!\\/\\/)|${We}(?:${Qn}):(?!\\/\\/)`, "gi");
function Os(e) {
  let n = e.toLowerCase(),
    r = Math.max(n.lastIndexOf("@"), n.lastIndexOf("%40"));
  for (let i of e.matchAll(vs)) {
    let s = i.index + i[0].length;
    if (r < s) return -1;
    let o = i.index + (i[1] ?? i[2] ?? "").length;
    if (i[2] === void 0) return o;
    let a = n.indexOf(":", s),
      u = Math.min(a === -1 ? r : a, r);
    if ((a !== -1 && a < r) || n.slice(s, u).includes("%3a")) return o;
  }
  return -1;
}
function SA(e) {
  if (!e) return e;
  return e
    .replace(Rs, (n) => lm(n))
    .replace(_s, (n, r, i) => {
      let s = Os(i);
      return s === -1 ? r + i : r + i.slice(0, s) + lm(i.slice(s));
    });
}
function ut(e, n, r) {
  return (n || e.redactOnly !== !0) && (e.prefilter === void 0 || e.prefilter.test(r));
}
function Ts(e, n) {
  for (let r = n + 2 * gYe; ; r *= 2) {
    if (e.length <= r) return cdr(e);
    let i = cdr(e.slice(0, r)),
      s = i.length - gYe;
    if (s >= n) return re(i, s);
  }
}
var Ls = {
  aws: "AWS",
  gcp: "GCP",
  api: "API",
  pat: "PAT",
  ad: "AD",
  tf: "TF",
  oauth: "OAuth",
  npm: "NPM",
  pypi: "PyPI",
  jwt: "JWT",
  ci: "CI",
  scim: "SCIM",
  github: "GitHub",
  gitlab: "GitLab",
  openai: "OpenAI",
  digitalocean: "DigitalOcean",
  huggingface: "HuggingFace",
  hashicorp: "HashiCorp",
  sendgrid: "SendGrid"
};
var Lt = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 },
  Ps = new RegExp(`(?!\\t)[${Hb}]`, "gu"),
  Fs = 10485760,
  sr = 1048576,
  Ns = 1e4,
  $s = 262144,
  Hs = 5000,
  or = 100,
  Bs = bie((e) => e());
function Ws(e) {
  return Object.hasOwn(Lt, e);
}
function ar(e) {
  return QH(e) ? null : dr(e);
}
function ur() {}
var Us = { arm: "v5", target: null };
function Gs(e, n) {
  e.stuck = e.appendSince === n ? "yes" : "no";
}
var Ks = { sessionId: "", fromBackend: !1 };
function lr(e, n, r, i) {
  let s = ne(n, "debug"),
    o = ne(s, `${e.sessionId}.txt`),
    a;
  if (r === null) a = o;
  else if (i !== null && r === i) a = ne(i, `${e.sessionId}.txt`);
  else a = r;
  let u = !e.fromBackend && a === o ? "v5" : "raw";
  return {
    target: a,
    arm: u,
    configHome: n,
    rotate: u === "raw" && !(pe(a) === s && a.endsWith(".txt")),
    pointLatest: u === "raw" && a !== o
  };
}
function Tt(e) {
  return Pm.userNamed(Ds(e) ? e : dr(e));
}
function Vs(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT";
}
function js(e, n = Kt) {
  return n ? e : void 0;
}
async function cr(e, n, r, i) {
  let s = { namespace: "log", sessionId: n, channel: "debug" },
    o = await qe.run(!0, () => e.append(s, [{ data: r }], i ? { markLatest: !0 } : void 0));
  if (o.ok) return "landed";
  return i && o.error.code === "InvalidArgument" && o.error.argument === "opts.markLatest"
    ? "refused"
    : "dropped";
}
class fr {
  deps;
  minLevel;
  filter;
  toStderr;
  filePath;
  runtimeDebugEnabled = !1;
  hasFormattedOutput = !1;
  debugFromLaunch;
  storageV5;
  writer = null;
  redirect = null;
  unflushedChunks = [];
  backlog = {
    chain: Promise.resolve(),
    length: 0,
    appendSince: 0,
    stuck: "no",
    droppedCount: 0,
    droppedTotal: 0
  };
  appendOldest = this.appendOldestChunks.bind(this);
  backendLinesLogged = 0;
  exiting = !1;
  exitHandlerRegistered = !1;
  successor = null;
  writtenBytes = -1;
  rotating = !1;
  resolvedLogPath = null;
  overrideDirectory = null;
  rotationTarget = null;
  latestMarked = !1;
  latestRefused = !1;
  constructor(e) {
    this.deps = e;
    if (((this.storageV5 = js(e.storageV5)), e.launchIdentity !== void 0)) {
      ((this.minLevel = e.launchIdentity.minLevel),
        (this.filter = e.launchIdentity.filter),
        (this.toStderr = e.launchIdentity.toStderr),
        (this.filePath = e.launchIdentity.filePath),
        (this.debugFromLaunch = e.launchIdentity.debugFromLaunch));
      return;
    }
    let n = Array.isArray(e.argv) ? e.argv : [],
      r = Bss(),
      i;
    if (r !== void 0) i = r(n);
    else {
      let u = n.indexOf("--");
      i = u === -1 ? n : n.slice(0, u);
    }
    let s = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = s && Ws(s) ? s : "debug";
    let o = i.find((u) => u.startsWith("--debug="));
    ((this.filter = o ? Jt(o.substring(8)) : null),
      (this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e")));
    let a = null;
    for (let u = 0; u < i.length; u++) {
      let c = i[u];
      if (c.startsWith("--debug-file=")) {
        a = ar(c.substring(13));
        break;
      }
      if (c === "--debug-file" && u + 1 < i.length) {
        a = ar(i[u + 1]);
        break;
      }
    }
    ((this.filePath = a),
      (this.debugFromLaunch =
        Ne(e.env.DEBUG) ||
        Ne(e.env.DEBUG_SDK) ||
        i.includes("--debug") ||
        i.includes("-d") ||
        this.toStderr ||
        o !== void 0 ||
        this.filePath !== null));
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch;
  }
  drainsSyncAtExit() {
    return !(z() && this.storageV5 !== void 0 && this.deps.syncExitDrain === !1);
  }
  launchIdentity() {
    return {
      minLevel: this.minLevel,
      filter: this.filter,
      toStderr: this.toStderr,
      filePath: this.filePath,
      debugFromLaunch: this.debugFromLaunch,
      isAnt: this.deps.isAnt,
      isTestEnvironment: this.deps.isTestEnvironment
    };
  }
  enableDebugLogging() {
    let e = this.isDebugMode() || this.deps.isAnt;
    return ((this.runtimeDebugEnabled = !0), e);
  }
  logPath() {
    return (
      this.filePath ??
      (this.overrideDirectory !== null &&
      this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR
        ? ne(this.overrideDirectory, `${this.deps.sessionId()}.txt`)
        : null) ??
      this.resolvedLogPath ??
      this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ??
      this.defaultLogPath()
    );
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return ne(this.deps.configHomeDir(), "debug", `${e}.txt`);
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory;
  }
  isArmed() {
    return this.storageV5 !== void 0;
  }
  log(e, { level: n } = { level: "debug" }) {
    if (Lt[n] < Lt[this.minLevel]) return;
    let r = this.deps.limits?.();
    if (r === void 0) {
      this.emit(e, n);
      return;
    }
    let i =
        e.length > r.maxMessageLength
          ? `debug message not logged: it has ${e.length} characters, over this log's fixed limit of ${r.maxMessageLength} per message`
          : e,
      { admitted: s, leftOutBefore: o } = r.admit(i.length);
    if (!s) return;
    r.timed(() => {
      if (o > 0)
        this.emit(
          `debug messages not logged: ${o} since this log's last line, over its fixed limit on how much it logs at a time`,
          n
        );
      this.emit(i, n);
    });
  }
  emit(e, n) {
    if (!this.shouldLog(e)) return;
    let r = Ms(e.trim());
    r = r.includes(`
`)
      ? tN(_(r))
      : r.replace(Ps, hX);
    let s = `${new Date().toISOString()} [${n.toUpperCase()}] ${r}
`;
    if (this.toStderr) {
      this.deps.writeToStderr(s);
      return;
    }
    this.write(s);
  }
  write(e) {
    let n = this.getWriter(),
      r = Ks;
    if (this.storageV5 !== void 0) {
      if (
        ((r = { sessionId: this.deps.sessionId(), fromBackend: qe.getStore() === !0 }),
        r.fromBackend)
      )
        this.backendLinesLogged++;
    }
    if ((n.write({ origin: r, content: e }), this.exiting)) n.flush();
  }
  async flush() {
    let e = this.backendLinesLogged;
    if ((this.writer?.flush(), await this.drained(), this.storageV5 !== void 0 && this.successor))
      return this.successor.flush();
    for (let n = 0; this.backendLinesLogged !== e && n < 3; n++)
      ((e = this.backendLinesLogged), this.writer?.flush(), await this.drained());
    if (this.backlog.droppedCount > 0 && this.backlog.length === 0 && !this.successor)
      (this.write(""), this.writer?.flush(), await this.drained());
  }
  async drained() {
    if (this.isAppendStuck()) return;
    let e = this.backlog.chain.then(() => !0);
    do if (await Pe(e, or)) return;
    while (!this.isAppendStuck());
  }
  isAppendStuck() {
    let e = this.backlog,
      { appendSince: n } = e;
    if (e.stuck === "no" && n !== 0 && Date.now() - n >= Hs)
      ((e.stuck = "suspected"), setTimeout(Gs, or, e, n).unref());
    return e.stuck === "yes";
  }
  dispose(e) {
    this.redirect = e;
    try {
      this.writer?.dispose();
    } finally {
      ((this.redirect = null), (this.writer = null));
    }
  }
  succeed(e) {
    ((this.runtimeDebugEnabled = e.runtimeDebugEnabled),
      (this.hasFormattedOutput = e.hasFormattedOutput),
      (this.unflushedChunks = e.unflushedChunks),
      (this.backlog = e.backlog),
      (this.exitHandlerRegistered = e.exitHandlerRegistered),
      (e.successor = this),
      e.dispose((n) => {
        this.write(n);
      }));
  }
  handleExit() {
    if (this.successor) {
      this.successor.handleExit();
      return;
    }
    if (((this.exiting = !0), this.backlog.droppedCount > 0))
      try {
        this.write("");
      } catch {}
    (this.writer?.flush(), this.drainSync());
  }
  async maybeRotate(e, n, r = Fs) {
    let i = z() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0)
      if (i) {
        let s = await i.stat(Tt(e));
        this.writtenBytes = s.ok && s.value.kind !== "absent" ? s.value.size : 0;
      } else
        this.writtenBytes = await Cs(e)
          .then((s) => s.size)
          .catch(() => 0);
    else this.writtenBytes += n;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = !0;
    try {
      let s = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
      if (i) {
        let o = Tt(e),
          a = Tt(s),
          u = await i.rename(o, a);
        if (!u.ok && !Vs(u.error)) {
          if ((await i.delete(a, { missingOk: !0 }), !(await i.rename(o, a)).ok))
            await i.delete(o, { missingOk: !0 });
        }
      } else
        try {
          await ir(e, s);
        } catch (o) {
          if (!G(o))
            (await Ot(s).catch(() => {}), await ir(e, s).catch(() => Ot(e).catch(() => {})));
        }
      this.writtenBytes = 0;
    } finally {
      this.rotating = !1;
    }
  }
  shouldLog(e) {
    if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null) return !1;
    if (!this.deps.isAnt && !this.isDebugMode()) return !1;
    if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u")
      return !1;
    return Zt(e, this.filter);
  }
  resolveDirToFile(e) {
    return ((this.resolvedLogPath = ne(e, `${this.deps.sessionId()}.txt`)), this.resolvedLogPath);
  }
  async appendGroup(e, n, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, n, r);
      return;
    }
    if (e.target === null || !this.writesFiles()) return;
    if (i) await rr(pe(e.target), { recursive: !0 }).catch(() => {});
    let s = e;
    try {
      await _t(e.target, r);
    } catch (o) {
      if (!$B(o)) throw o;
      if (this.storageV5 === void 0)
        ((s = { ...e, target: this.resolveDirToFile(e.target) }), await _t(s.target, r));
      else {
        if (
          ((this.overrideDirectory = e.target),
          (s = lr(n, e.configHome, e.target, e.target)),
          s.arm === "v5")
        ) {
          await this.appendV5AndMark(this.storageV5, n, r);
          return;
        }
        await rr(pe(s.target), { recursive: !0 }).catch(() => {});
        try {
          await _t(s.target, r);
        } catch {
          return;
        }
      }
    }
    if (s.rotate) {
      if (this.storageV5 !== void 0 && s.target !== this.rotationTarget)
        ((this.rotationTarget = s.target), (this.writtenBytes = -1));
      await this.maybeRotate(s.target, Buffer.byteLength(r)).catch(ur);
    }
    if (s.pointLatest) this.markLatestSymlink();
  }
  async appendV5AndMark(e, n, r) {
    let i = z(),
      s = i && !this.latestMarked && !this.latestRefused,
      o = await cr(e, n.sessionId, r, s);
    if (o === "refused")
      ((this.latestRefused = !0),
        (o = await cr(e, n.sessionId, r, !1)),
        this.log(
          "debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process",
          { level: "warn" }
        ));
    if (o !== "landed") return;
    if (s && !this.latestRefused) this.latestMarked = !0;
    else if (!i) this.markLatestSymlink();
  }
  markLatestSymlink() {
    if (!this.latestMarked && this.writesFiles())
      ((this.latestMarked = !0), this.updateLatestSymlink());
  }
  isSessionDiskless() {
    try {
      return this.deps.diskless?.() === !0;
    } catch {
      return !0;
    }
  }
  writesFiles() {
    if (this.isSessionDiskless()) return !1;
    try {
      return (
        this.deps.defaultFile?.() !== !1 ||
        this.filePath !== null ||
        this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR !== void 0
      );
    } catch {
      return !1;
    }
  }
  async appendOldestChunks() {
    let e = this.backlog,
      n = this.unflushedChunks[0],
      r = n?.queued;
    if (r === void 0) return;
    let i = 0,
      s = 0,
      o = !1;
    for (let { content: a, queued: u } of this.unflushedChunks) {
      if (
        u === void 0 ||
        u.owner !== r.owner ||
        u.decision.arm !== r.decision.arm ||
        u.decision.target !== r.decision.target ||
        u.origin.sessionId !== r.origin.sessionId ||
        u.origin.fromBackend !== r.origin.fromBackend ||
        (i > 0 && s + a.length > $s)
      )
        break;
      (i++, (s += a.length), (o ||= u.needMkdir));
    }
    if (
      ((e.appendSince = Date.now()),
      await r.owner
        .appendGroup(
          r.decision,
          r.origin,
          this.unflushedChunks
            .slice(0, i)
            .map((a) => a.content)
            .join(""),
          o
        )
        .catch(ur),
      (e.appendSince = 0),
      (e.stuck = "no"),
      this.unflushedChunks[0] === n)
    )
      (this.unflushedChunks.splice(0, i), (e.length -= s));
  }
  drainSync() {
    if (this.unflushedChunks.length === 0) return;
    if (
      ((this.backlog.length = 0),
      !this.drainsSyncAtExit() || !this.writesFiles() || this.isAppendStuck())
    ) {
      this.unflushedChunks.length = 0;
      return;
    }
    let e = [];
    for (let n of this.unflushedChunks.splice(0)) {
      if (n.target === null) continue;
      let r = e.at(-1);
      if (r !== void 0 && r.armed === n.armed && (!n.armed || r.target === n.target))
        r.parts.push(n);
      else e.push({ target: n.target, armed: n.armed, parts: [n] });
    }
    for (let { target: n, armed: r, parts: i } of e) {
      let s = r ? n : this.logPath(),
        o = i.map((a) => a.content).join("");
      try {
        ie().mkdirSync(pe(s));
      } catch {}
      try {
        ie().appendFileSync(s, o);
      } catch (a) {
        if ($B(a))
          try {
            if (!r) ie().appendFileSync(this.resolveDirToFile(s), o);
            else {
              let u = (d, g) => {
                  try {
                    ie().appendFileSync(ne(s, `${d}.txt`), g);
                  } catch {}
                },
                c = i[0]?.sessionId,
                l = "";
              for (let d of i) {
                if (d.sessionId !== c) (u(c, l), (c = d.sessionId), (l = ""));
                l += d.content;
              }
              u(c, l);
            }
          } catch {}
      }
    }
  }
  droppedLineTotal() {
    return this.backlog.droppedTotal;
  }
  takeDroppedNote() {
    let { droppedCount: e } = this.backlog;
    if (e === 0) return "";
    return (
      (this.backlog.droppedCount = 0),
      `${new Date().toISOString()} [WARN] debug messages not logged: ${e} since the line above, because writes to this log were over 10 s behind, with over 1 MiB waiting
`
    );
  }
  groupLines(e) {
    let n = e[0];
    if (n === void 0) return [];
    let r = this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null,
      i = this.isSessionDiskless();
    if (i && (this.storageV5 === void 0 || r !== null)) return [];
    if (this.storageV5 === void 0)
      return [
        {
          decision: {
            target: this.logPath(),
            arm: "raw",
            configHome: "",
            rotate: !0,
            pointLatest: !0
          },
          origin: n.origin,
          lines: e
        }
      ];
    let s = [];
    for (let o of e) {
      if (i && o.origin.fromBackend) continue;
      let a = s.at(-1);
      if (
        a !== void 0 &&
        a.origin.sessionId === o.origin.sessionId &&
        a.origin.fromBackend === o.origin.fromBackend
      )
        a.lines.push(o);
      else
        s.push({
          decision: i ? Us : lr(o.origin, this.deps.configHomeDir(), r, this.overrideDirectory),
          origin: o.origin,
          lines: [o]
        });
    }
    return s;
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null,
      n = this.storageV5 !== void 0;
    if (
      ((this.writer = Qe({
        writeBatch: (r) => {
          if (this.redirect) {
            this.redirect(r.map((o) => o.content).join(""));
            return;
          }
          if (this.exiting) {
            for (let o of this.groupLines(r))
              this.unflushedChunks.push({
                target: o.decision.target,
                sessionId: o.origin.sessionId,
                armed: n,
                content: this.takeDroppedNote() + o.lines.map((a) => a.content).join("")
              });
            this.drainSync();
            return;
          }
          let i = this.writesFiles(),
            s = this.backlog;
          this.isAppendStuck();
          for (let o of this.groupLines(r)) {
            if (o.decision.arm === "raw" && !i) continue;
            if (
              s.droppedCount > 0
                ? s.length >= sr / 2
                : s.length >= sr &&
                  Date.now() - (this.unflushedChunks[0]?.queued?.at ?? 1 / 0) >= Ns
            ) {
              ((s.droppedCount += o.lines.length), (s.droppedTotal += o.lines.length));
              continue;
            }
            let a = this.takeDroppedNote() + o.lines.map((l) => l.content).join("");
            if (a === "") continue;
            let u = o.decision.arm === "raw" ? pe(o.decision.target) : null,
              c = u !== null && (o.origin.fromBackend || e !== u);
            if (u !== null) e = u;
            (this.unflushedChunks.push({
              target: o.decision.target,
              sessionId: o.origin.sessionId,
              armed: n,
              content: a,
              queued: {
                at: Date.now(),
                owner: this,
                decision: o.decision,
                origin: o.origin,
                needMkdir: c
              }
            }),
              (s.length += a.length),
              (s.chain = Bs(() => s.chain.then(this.appendOldest))));
          }
        },
        sizeOf: (r) => r.content.length,
        flushIntervalMs: 1000,
        maxBufferSize: 100,
        immediateMode: this.isDebugMode()
      })),
      this.deps.registerCleanup(async () => {
        (this.writer?.dispose(), await this.drained());
      }),
      !this.exitHandlerRegistered)
    )
      ((this.exitHandlerRegistered = !0), this.deps.onExit(this.handleExit.bind(this)));
    return this.writer;
  }
  async updateLatestSymlink() {
    try {
      let e = this.logPath(),
        n = ne(pe(e), "latest");
      (await Ot(n).catch(() => {}), await Is(e, n));
    } catch {}
  }
}
class gr {
  instance = void 0;
  init = {};
  defaultFile = !0;
  limits = void 0;
  setInstance(e) {
    this.instance = e;
  }
  setInit(e) {
    this.init = e;
  }
  disableDefaultFile() {
    this.defaultFile = !1;
  }
  setLimits(e) {
    this.limits = e;
  }
}
var Js = new W(() => new gr());
function ke() {
  return es(Js);
}
function Ct(e, n) {
  return new fr({
    argv: process.argv,
    env: process.env,
    sessionId: () => q(),
    configHomeDir: () => Le(),
    onExit: (r) => {
      process.on("exit", r);
    },
    registerCleanup: (r) => {
      bt(r);
    },
    writeToStderr: (r) => {
      E2(r, { mayDrop: !0 });
    },
    isAnt: n?.isAnt ?? !1,
    isTestEnvironment: n?.isTestEnvironment ?? !1,
    launchIdentity: n,
    storageV5:
      e.init.storageV5 !== void 0 && e.init.configHome === up() ? e.init.storageV5 : void 0,
    syncExitDrain: e.init.syncExitDrain,
    diskless: () => J(),
    defaultFile: () => e.defaultFile,
    limits: () => e.limits
  });
}
function y6(e) {
  let n = ke();
  n.setInit({ storageV5: e.storageV5, configHome: up(), syncExitDrain: e.syncExitDrain });
  let r = n.instance;
  if (r) {
    let i = Ct(n, r.launchIdentity());
    (n.setInstance(i), i.succeed(r));
  }
  if (e.syncExitDrain === !1 && !Z().drainsSyncAtExit())
    t(
      "Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short"
    );
}
function Z() {
  let e = ke(),
    n = e.instance;
  if (n) return n;
  let r = Ct(e);
  return (e.setInstance(r), r);
}
function Jkn() {
  return Z().minLevel;
}
function v2() {
  return Z().isDebugMode();
}
function yX() {
  return Z().toStderr;
}
function Kes() {
  return Z().filePath;
}
function Ves() {
  return Z().enableDebugLogging();
}
function qes() {
  let e = ke(),
    n = e.instance;
  if (!n) return;
  let r = Ct(e);
  (e.setInstance(r), r.succeed(n));
}
function tFe(e) {
  Z().hasFormattedOutput = e;
}
function Yes() {
  return Z().hasFormattedOutput;
}
async function Ixe() {
  await ke().instance?.flush();
}
function fdr() {
  return J()
    ? {}
    : {
        debug_stderr_dropped_total: sts(),
        debug_file_dropped_total: ke().instance?.droppedLineTotal() ?? 0
      };
}
function t(e, n = { level: "debug" }) {
  Z().log(e, n);
}
function _6() {
  return Z().logPath();
}
function Xes(e, n) {
  return e === Z().defaultLogPath(n);
}
function tie(e, n) {
  return;
}
export {
  jy,
  Cp,
  wpi,
  Pm,
  xes,
  vpi,
  Epi,
  Xse,
  bt,
  eCt,
  Kg,
  HM,
  Pes,
  kpi,
  ndr,
  Wu,
  Tpi,
  Wy,
  _,
  oF,
  ma,
  Kkn,
  te,
  Vo,
  bd,
  nit,
  aee,
  cYt,
  Gy,
  rit,
  rdr,
  Ies,
  odr,
  LM,
  tCt,
  Oes,
  Zfe,
  xxe,
  w9r,
  Im,
  sF,
  Po,
  Pxe,
  Jse,
  nCt,
  uW,
  w2,
  v9r,
  Mes,
  epe,
  CB,
  E9r,
  Des,
  Ui,
  Qse,
  h6,
  Hes,
  rCt,
  jo,
  uYt,
  Db,
  ie,
  hh,
  fYe,
  fW,
  PR,
  Vkn,
  X$e,
  pYe,
  Les,
  pW,
  Api,
  mW,
  sdr,
  Rq,
  oit,
  idr,
  Nes,
  NM,
  yc,
  gW,
  gf,
  k9r,
  yn,
  J$e,
  lP,
  Hb,
  Q$e,
  sit,
  Cpi,
  mYe,
  SC,
  $es,
  Yf,
  am,
  Fes,
  iit,
  BH,
  Cc,
  ait,
  Cn,
  tN,
  Zse,
  ei,
  adr,
  Rpi,
  ldr,
  eie,
  IR,
  oCt,
  ddr,
  lee,
  sCt,
  hX,
  hW,
  Z$e,
  tpe,
  fYt,
  Ues,
  xpi,
  Bes,
  Ppi,
  jes,
  iCt,
  Ms,
  dee,
  Wes,
  cdr,
  gYe,
  pYt,
  eFe,
  cee,
  Ges,
  qkn,
  wC,
  Ykn,
  zes,
  T9r,
  udr,
  Lb,
  lm,
  dit,
  kSe,
  uee,
  Xkn,
  Ipi,
  Opi,
  SA,
  y6,
  Jkn,
  v2,
  yX,
  Kes,
  Ves,
  qes,
  tFe,
  Yes,
  Ixe,
  fdr,
  t,
  _6,
  Xes,
  tie
};

//# sourceMappingURL=chunk-4kxznmzw.js.map
