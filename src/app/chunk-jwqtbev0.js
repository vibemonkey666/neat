// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re } from "./chunk-a16y5hcz.js";
import { g6 } from "./chunk-ewvf3tep.js";
import { SC } from "./chunk-4kxznmzw.js";
import { gt } from "./chunk-wr0p4ndg.js";
import { Frt } from "./chunk-7svjr0za.js";
import { Yn, cy, WM } from "./chunk-h5gbmqm1.js";
import { O } from "./chunk-19xvg81r.js";
import { readFileSync as L, lstatSync as w } from "fs";
import { lstat as F, readFile as U } from "fs/promises";
async function bl(e, n) {
  try {
    let r = await F(e);
    if (!r.isFile() || r.size > n) return null;
    return await U(e, "utf8");
  } catch {
    return null;
  }
}
function jsi(e, n) {
  try {
    let r = w(e);
    if (!r.isFile() || r.size > n) return null;
    return L(e, "utf8");
  } catch {
    return null;
  }
}
async function Qk(e, n, r, s) {
  let t = await e.stat(n);
  if (!t.isFile() || t.size > r) return (s?.(t), null);
  return await e.readFile(n, { encoding: "utf8" });
}
function Wsi(e, n, r) {
  let s = e.statSync(n);
  if (!s.isFile() || s.size > r) return null;
  return e.readFileSync(n, { encoding: "utf8" });
}
var k = /[^\p{L}\p{N}._-]+/gu,
  H = /^[._-]+|[._-]+$/gu,
  W = /[\p{L}\p{N}]/u,
  v = 20;
function j_(e) {
  let n = B(e).trim(),
    r = [...n];
  return r.length > 64 ? `${r.slice(0, 64).join("")}\u2026` : n;
}
function B(e) {
  return e.replace(/[\p{Cf}\p{Cc}\p{Cs}\p{Zl}\p{Zp}]/gu, "");
}
function lkt(e, n = v) {
  let r = j_(e).replace(k, "-").replace(H, "");
  if (!W.test(r)) return "";
  let s = re(r, n);
  return s === r ? r : `${s}\u2026`;
}
var EYr = 512,
  g = 4 * EYr;
function dor(e, n) {
  let r = 0;
  while (r <= e.length) {
    let s = e.indexOf(
        `
`,
        r
      ),
      t = s === -1 ? e.length : s,
      i = t - r <= g,
      o = re(e.slice(r, Math.min(t, r + g)), g),
      d = n(o).replace(/\s+/g, " ").trim();
    if (d !== "" || !i) {
      let a = re(d, EYr);
      return !i || a.length < d.length ? `${a}\u2026` : a;
    }
    if (s === -1) break;
    r = s + 1;
  }
  return "";
}
function dkt(e) {
  if (typeof e !== "string") return;
  let n = j_(e.replace(/["<>]/g, ""));
  return n === "" ? void 0 : n;
}
var cM = 200;
function $j(e, n) {
  return `${e}@${n}`;
}
function kYr(e) {
  return e.replace(/%|[^\x20-\x7e]/gu, (n) => encodeURIComponent(n));
}
function cor(e, n) {
  let r = Date.now();
  return `${e}-${r}@${n}`;
}
var Ya = "team-lead",
  cNe = "user",
  ckt = "system",
  Gsi = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/,
  uor = "Teammates are not available in this session.",
  jue = "claude-swarm",
  uSn = "swarm-view",
  Wue = "tmux",
  prt = "cat";
function fSn() {
  return `claude-swarm-${process.pid}`;
}
var zsi = "CLAUDE_CODE_TEAMMATE_COMMAND";
import { basename as Z, dirname as S, resolve as u } from "path";
import { createHmac as z } from "crypto";
var C6o = 120;
function pSn(e) {
  let n = dor(e, (r) => SC(r, " ", { keepEmojiJoiners: !0 }));
  return n === "" ? "" : gt(n, C6o);
}
var x = ["bypass", "prompting"],
  G = new Set(x);
function Ksi(e) {
  return G.has(e);
}
function R(e) {
  let n = new TextEncoder();
  return e.replace(/[^A-Za-z0-9:_/.\\-]/gu, (r) =>
    Array.from(n.encode(r), (s) => `%${s.toString(16).toUpperCase().padStart(2, "0")}`).join("")
  );
}
function uNe(e) {
  return `bridge:${R(e)}`;
}
function B5(e) {
  return `uds:${R(e)}`;
}
function E(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var h = /^[A-Za-z0-9_-]{1,80}$/,
  mSn = 32,
  y = 24;
function Vsi(e, n) {
  return z("sha256", n).update(e).digest("hex").slice(0, y);
}
var f = "A-Za-z0-9%:_/.\\\\-",
  A = `[0-9a-f]{${y}}`,
  X = `${A}(?:,${A}){0,${mSn - 1}}`,
  C = new RegExp(`^${X}$`),
  R6o = 300,
  j = new RegExp(`^[${f}]{1,${R6o}}$`);
function qsi(e) {
  return j.test(e);
}
function por(e, n) {
  if (e === void 0) return;
  let r = [...e];
  if (n) r.push(n);
  if (r.length === 0) return;
  return r.length > mSn ? r.slice(r.length - mSn) : r;
}
function V(e, n, r, s, t, i) {
  let o = [];
  if (e) o.push(`from="${e}"`);
  if (r && h.test(r)) o.push(`from-session="${r}"`);
  if (s !== void 0 && s.length > 0) {
    let l = s.join(",");
    if (C.test(l)) o.push(`hop-chain="${l}"`);
  }
  let d = n === void 0 ? void 0 : j_(n.replace(/["<>]/g, ""));
  if (d) o.push(`from-name="${d}"`);
  if (t) o.push(`from-mode="${t}"`);
  let a = i === void 0 ? void 0 : j_(i.replace(/["<>]/g, ""));
  if (a) o.push(`from-plugin="${a}"`);
  return o.length > 0 ? ` ${o.join(" ")}` : "";
}
var mor = new RegExp(`^<${g6} from="([^"]+)"`);
function ukt(e, n, r, s, t, i, o) {
  let d = V(e, n, s, t, i, o);
  return `<${g6}${d}>
${Frt(g6, r)}
</${g6}>`;
}
function _(e) {
  {
    if (typeof e !== "string") return;
    let n = h.source.replace(/^\^|\$$/g, ""),
      r = C.source.replace(/^\^|\$$/g, ""),
      s = e,
      t = s.match(
        new RegExp(
          `^<${g6}(?: from="([${f}]+)")?(?: from-session="(${n})")?(?: hop-chain="(${r})")?(?: from-name="([^"<>\\n\\r]+)")?(?: from-mode="(${x.join("|")})")?(?: from-plugin="([^"<>\\n\\r]+)")?>\\n([\\s\\S]*)\\n</${g6}>$`
        )
      );
    if (!t) return;
    let i = t[3] !== void 0 ? t[3].split(",") : void 0,
      o = t[5];
    if (ukt(t[1], t[4], t[7] ?? "", t[2], i, o, t[6]) !== s) return;
    return {
      ...(t[1] !== void 0 && { from: t[1] }),
      ...(t[2] !== void 0 && { fromSession: t[2] }),
      ...(i !== void 0 && { hopChain: i }),
      ...(t[4] !== void 0 && { fromName: t[4] }),
      ...(o !== void 0 && { fromMode: o }),
      ...(t[6] !== void 0 && { fromPlugin: t[6] }),
      body: t[7] ?? ""
    };
  }
  return;
}
function gor(e) {
  let n = _(e);
  if (!n || n.hopChain === void 0) return e;
  return ukt(n.from, n.fromName, n.body, n.fromSession, void 0, n.fromMode, n.fromPlugin);
}
function x6o(e, n) {
  if (n === void 0) return e;
  let r = _(e);
  if (!r || r.fromPlugin !== void 0) return e;
  return ukt(r.from, r.fromName, r.body, r.fromSession, r.hopChain, r.fromMode, n);
}
function Gue(e, n, r) {
  if (e.body === void 0 || n === r) return e;
  let { body: s, ...t } = e;
  return t;
}
function fqe(e) {
  let n = _(e);
  if (!n) return {};
  let r = n.fromName ? j_(n.fromName) : "";
  return {
    ...(r && { name: r }),
    ...(n.fromSession !== void 0 && { fromSession: n.fromSession }),
    ...(n.hopChain !== void 0 && { hopChain: n.hopChain }),
    ...(n.fromMode !== void 0 && { fromMode: n.fromMode }),
    body: n.body
  };
}
function mrt(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type !== "user" || r.toolUseResult || r.isCompactSummary) continue;
    return r.origin?.kind === "peer" ? (r.origin.hopChain ?? []) : void 0;
  }
  return;
}
var K = new RegExp(`^(?:uds|bridge|did):[${f}]{1,200}$`);
function zue(e) {
  return K.test(e);
}
var Y = /^\/\S*\.sock$/,
  q = /^[\\/]{2}[.?][\\/]pipe[\\/]/i,
  J = /^\/\S*\.sock/;
function P6o(e) {
  return J.test(e);
}
function u_(e) {
  if (e.startsWith("uds:")) return { scheme: "uds", target: E(e.slice(4)) };
  if (e.startsWith("bridge:")) return { scheme: "bridge", target: E(e.slice(7)) };
  if (e.startsWith("did:")) return { scheme: "did", target: e };
  if (Y.test(e) || q.test(e)) return { scheme: "uds", target: e };
  return { scheme: "other", target: e };
}
function hor(e, n) {
  if (e.trim().length === 0) return "to must not be empty";
  let r = u_(e);
  if ((r.scheme === "bridge" || r.scheme === "uds") && r.target.trim().length === 0)
    return "address target must not be empty";
  if (!$$(r.target) || !$$(e))
    return `'${e}' is not a local socket address. Use an address from ${n}.`;
  return;
}
function $$(e) {
  if (!Yn(e)) return !0;
  return TRe(e) !== void 0;
}
function kRe(e, n) {
  return I(e, n) === "same";
}
function Kue(e, n) {
  return I(e, n) !== "different";
}
function I(e, n) {
  let r = TRe(e),
    s = TRe(n);
  if (r !== void 0 || s !== void 0) {
    if (r === void 0 || s === void 0) return "different";
    if (TYr(r) === TYr(s)) return "same";
    return P(r) === P(s) || m(r) === m(s) ? "maybe" : "different";
  }
  if (e === n) return "same";
  if (cy(e) || cy(n)) return p(c(u(e))) === p(c(u(n))) ? "maybe" : "different";
  let t = c(u(e)),
    i = c(u(n));
  if (t === i) return "same";
  let o = O(),
    d = o === "macos" || o === "windows";
  return p(t) === p(i) || (d && m(t) === m(i)) ? "maybe" : "different";
}
function p(e) {
  let n = O();
  return n === "macos" || n === "windows" ? c(P(Q(e))) : e;
}
function TYr(e) {
  return e.replace(/[A-Z]/g, (n) => n.toLowerCase());
}
function P(e) {
  let n = "";
  for (let r of e) {
    let s = r.toUpperCase(),
      t = N(s) ? s : r,
      i = t.toLowerCase();
    n += N(i) ? i : t;
  }
  return n;
}
function N(e) {
  let n = e.codePointAt(0);
  return n !== void 0 && e.length === (n > 65535 ? 2 : 1);
}
function m(e) {
  return e.toUpperCase().toLowerCase();
}
function Q(e) {
  return O() === "macos" ? e.normalize("NFC") : e;
}
function c(e) {
  if (O() !== "macos") return e;
  let n = WM(e),
    r = /^\/private(\/(?:var|tmp|etc)(?:\/.*)?)$/.exec(n);
  return r ? r[1] : n;
}
function TRe(e) {
  let n = /^[\\/]{2}[.?][\\/]pipe[\\/](?:(LOCAL)[\\/])?([^\\/]+)$/i.exec(e);
  if (n === null || n[2] === "." || n[2] === "..") return;
  if (/[. ]$/.test(n[2])) return;
  if (e.startsWith("\\\\?\\") && e.includes("/")) return;
  return n[1] === void 0 ? n[2] : `${b}\\${n[2]}`;
}
function I6o(e, n, r) {
  if (TRe(n) !== void 0) {
    let s = TRe(e);
    return s !== void 0 && ne.test(s);
  }
  if (cy(e)) return !1;
  if (S(u(e)) === S(u(n))) return e.endsWith(".sock");
  return r?.verifiedPeerPid !== void 0 && r.ownerUids !== void 0 && D(e, r.ownerUids);
}
var O6o = "reply_across_default_dirs",
  ee = [
    /^\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
    /^\/private\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
    /^\/run\/user\/(0|[1-9]\d*)\/cc-socks$/,
    /^\/data\/data\/com\.termux\/files\/usr\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/
  ];
function D(e, n) {
  let r = u(e);
  if (!/^(\d+(-[0-9a-f]{8})?|[0-9a-f]{1,16})\.sock$/.test(Z(r))) return !1;
  let s = S(r);
  for (let t of ee) {
    let i = t.exec(s);
    if (i) return i[1] === void 0 || n.some((o) => String(o) === i[1]);
  }
  return !1;
}
function Ysi(e, n, r, s = []) {
  let t = TRe(e),
    i = TRe(n);
  if (t !== void 0 && i !== void 0 && T.test(i) && !T.test(t)) return !1;
  if (I6o(e, n)) return !0;
  return (r?.includes(O6o) ?? !1) && D(e, s);
}
var M = "cc-msg-",
  b = "LOCAL",
  ne = new RegExp(`^(?:${b}\\\\)?${M}[0-9a-f]{32}$`, "i"),
  T = new RegExp(`^${M}[0-9a-f]{32}$`, "i");
export {
  bl,
  jsi,
  Qk,
  Wsi,
  j_,
  lkt,
  EYr,
  dor,
  dkt,
  cM,
  $j,
  kYr,
  cor,
  Ya,
  cNe,
  ckt,
  Gsi,
  uor,
  jue,
  uSn,
  Wue,
  prt,
  fSn,
  zsi,
  C6o,
  pSn,
  Ksi,
  uNe,
  B5,
  mSn,
  Vsi,
  R6o,
  qsi,
  por,
  mor,
  ukt,
  gor,
  x6o,
  Gue,
  fqe,
  mrt,
  zue,
  P6o,
  u_,
  hor,
  $$,
  kRe,
  Kue,
  TYr,
  TRe,
  I6o,
  O6o,
  Ysi
};

//# sourceMappingURL=chunk-jwqtbev0.js.map
