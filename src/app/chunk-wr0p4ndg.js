// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { rX, qZ, yZo, Eui, Yar, kui } from "./chunk-rhk37je5.js";
import { I } from "./chunk-a16y5hcz.js";
import { E } from "./chunk-fs43t96t.js";
import { yn } from "./chunk-4kxznmzw.js";
import { Dn } from "./chunk-qywdxehb.js";
import { $s, le } from "./chunk-vw9e882a.js";
import { $a, hZo, Sui, c2, vui } from "./chunk-2bsye2b3.js";
import { en } from "./chunk-rc7xvf0x.js";
var Ae = /^\[M[\x60-\x7f][\x20-\uffff]?$/,
  ke = /^\x1b\]8(?:;|\r?$)/,
  Re = "\x1B]8;;\x1B\\",
  Ie = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;
function O$e(e) {
  let t = "ground",
    n = "",
    s = e?.x10Mouse ?? !1,
    r = e?.escPrefixedKeyIsAlt,
    u = e?.stringsEndAtLineFeed ?? !1;
  return {
    feed(o) {
      let l = ie(o, t, n, !1, s, r?.() ?? !1, u);
      return ((t = l.state.state), (n = l.state.buffer), l.tokens);
    },
    flush() {
      let o = ie("", t, n, !0, s, r?.() ?? !1, u);
      return ((t = o.state.state), (n = o.state.buffer), o.tokens);
    },
    reset() {
      ((t = "ground"), (n = ""));
    },
    buffer() {
      return n;
    }
  };
}
function Kar(e) {
  let t = O$e(),
    n = t.feed(e);
  return (n.push(...t.flush()), n);
}
function ie(e, t, n, s, r, u, o) {
  let l = [],
    f = { state: t, buffer: "" },
    a = n + e,
    i = 0,
    p = 0,
    d = 0,
    x = () => {
      if (i > p) {
        let c = a.slice(p, i);
        if (c) l.push({ type: "text", value: c });
      }
      p = i;
    },
    b = (c) => {
      if (c) l.push({ type: "sequence", value: c });
      ((f.state = "ground"), (p = i));
    };
  while (i < a.length) {
    let c = a.charCodeAt(i);
    switch (f.state) {
      case "ground":
        if (c === rX.ESC) (x(), (d = i), (f.state = "escape"), i++);
        else if (c === rX.DEL)
          if (Ae.test(a.slice(p, i))) i++;
          else (x(), i++, l.push({ type: "text", value: "\x7F" }), (p = i));
        else if (r && c < 32 && (a.length < 64 || c === rX.BS)) {
          if ((x(), i++, c === 13 && a.charCodeAt(i) === 10)) i++;
          (l.push({ type: "text", value: String.fromCharCode(c) }), (p = i));
        } else i++;
        break;
      case "escape":
        if (c === qZ.CSI) ((f.state = "csi"), i++);
        else if (c === qZ.OSC) ((f.state = "osc"), i++);
        else if (c === qZ.DCS) ((f.state = "dcs"), i++);
        else if (c === qZ.APC && (!r || i + 1 >= a.length || oe(a, i + 1, i + 1)))
          ((f.state = "apc"), i++);
        else if (!r && c === qZ.PM) ((f.state = "pm"), i++);
        else if (!r && (c === qZ.SOS || c === 107)) ((f.state = "sos"), i++);
        else if (c === 79) ((f.state = "ss3"), i++);
        else if (r && (c === 32 || c === 13 || c === 10 || c === 9))
          (i++, l.push({ type: "text", value: a.slice(d, i) }), (f.state = "ground"), (p = i));
        else if (r && Yar(c))
          (l.push({ type: "text", value: a.slice(d, i) }), (f.state = "ground"), (p = i));
        else if (Yar(c)) ((f.state = "escapeIntermediate"), i++);
        else if (c === rX.DEL)
          (i++, l.push({ type: "text", value: a.slice(d, i) }), (f.state = "ground"), (p = i));
        else if (yZo(c)) (i++, b(a.slice(d, i)));
        else if (c === rX.ESC && u && i === d + 1 && Ie.test(a.slice(i + 1, i + 1 + 8))) i++;
        else if (c === rX.ESC) (b(a.slice(d, i)), (d = i), (f.state = "escape"), i++);
        else if (c < 32)
          (i++, l.push({ type: "text", value: a.slice(d, i) }), (f.state = "ground"), (p = i));
        else ((f.state = "ground"), (p = d));
        break;
      case "escapeIntermediate":
        if (Yar(c)) i++;
        else if (yZo(c)) (i++, b(a.slice(d, i)));
        else ((f.state = "ground"), (p = d));
        break;
      case "csi":
        if (
          r &&
          c === 77 &&
          i - d === 2 &&
          (i + 1 >= a.length || a.charCodeAt(i + 1) >= 32) &&
          (i + 2 >= a.length || a.charCodeAt(i + 2) >= 32) &&
          (i + 3 >= a.length || a.charCodeAt(i + 3) >= 32)
        ) {
          if (i + 4 <= a.length) ((i += 4), b(a.slice(d, i)));
          else i = a.length;
          break;
        }
        if (kui(c)) (i++, b(a.slice(d, i)));
        else if (Eui(c) || Yar(c)) i++;
        else ((f.state = "ground"), (p = d));
        break;
      case "ss3":
        if (c >= 64 && c <= 126) (i++, b(a.slice(d, i)));
        else ((f.state = "ground"), (p = d));
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (r && f.state === "apc" && i >= d + 2 && !oe(a, d + 2, i))
          (b(a.slice(d, d + 2)), (p = d + 2));
        else if (c === rX.BEL && f.state !== "pm" && f.state !== "sos") (i++, b(a.slice(d, i)));
        else if (c === rX.ESC && i + 1 < a.length)
          if (a.charCodeAt(i + 1) === qZ.ST) ((i += 2), b(a.slice(d, i)));
          else (b(a.slice(d, i)), (d = i), (f.state = "escape"), i++);
        else if (c === rX.CAN || c === rX.SUB) (i++, b(a.slice(d, i)));
        else if (o && c === rX.LF) b(ke.test(a.slice(d, Math.min(i, d + 5))) ? Re : "");
        else i++;
        break;
    }
  }
  if (f.state === "ground") x();
  else if (s) {
    let c = a.slice(d);
    if (c) l.push({ type: "sequence", value: c });
    f.state = "ground";
  } else f.buffer = a.slice(d);
  return { tokens: l, state: f };
}
function oe(e, t, n) {
  let s = e[n],
    r = n - t;
  if (r === 0) return s === "G";
  if (r === 1) return s === "i" || s === "O" || s === "E";
  let u = e[t + 1];
  if (u === "i") return r > 2 || s === "=";
  let o = e.charCodeAt(n),
    l = o === rX.ESC || o === rX.BEL;
  if (u === "O") return r === 2 ? s === "K" : l;
  let f = e.indexOf(":", t + 3);
  if (f !== -1 && f < n) return !0;
  return (s >= "A" && s <= "Z") || (r > 2 && (s === ":" || l));
}
var aSe = 8,
  Ce = /(\t|\n)/,
  _e = /[\x1b\x9b]/g,
  Oe = /[\x90\x98\x9d-\x9f]/g,
  Ne = /[\x1b\x90\x98\x9b\x9d-\x9f]/,
  $e = /^\x1b[P\]X^_k]/,
  ve = /^\x1b[P_].*\x07$|\x9c/s;
function Hfe(e, t = aSe) {
  return e.includes("\t") || dZo([e]) ? lZo([e], t).join("") : e;
}
function lZo(e, t = aSe) {
  let n = 0,
    s = "";
  return e.map((r, u) => {
    if (!O4t(r) && !r.includes("\t")) {
      let l =
        r.lastIndexOf(`
`) + 1;
      if (l > 0) ((n = 0), (s = ""));
      return ((s += l > 0 ? r.slice(l) : r), r);
    }
    let o = "";
    for (let l of ue(r, u === e.length - 1)) {
      let f = ce(l);
      if (f === void 0) {
        ((o += l.value), (s += l.value));
        continue;
      }
      for (let a of f.split(Ce))
        if (a === "\t") {
          n += le(s);
          let i = t - (n % t);
          ((o += " ".repeat(i)), (n += i), (s = ""));
        } else if (
          a ===
          `
`
        )
          ((o += a), (n = 0), (s = ""));
        else ((o += a), (s += a));
    }
    return o;
  });
}
function O4t(e) {
  return Ne.test(e);
}
function dZo(e) {
  return e.some(
    (t, n) => O4t(t) && ue(t, n === e.length - 1).some((s) => (ce(s) ?? s.value) !== s.value)
  );
}
function ue(e, t) {
  if (!O4t(e)) return [{ type: "text", value: e }];
  let n = O$e(),
    s = n.feed(e),
    r = n.buffer();
  if (r !== "") s.push({ type: t && !$e.test(r) ? "sequence" : "text", value: r });
  return s;
}
function ce(e) {
  if (
    e.type === "text" ||
    e.value.includes(`
`) ||
    ve.test(e.value)
  )
    return ae(e.value.replace(_e, "\x18"));
  if (e.value.startsWith("\x1Bk")) return ae(e.value.replace(/\x9b/g, "\x18"));
  return;
}
function ae(e) {
  return e.replace(Oe, "\uFFFD");
}
var B4e = (e) => `\\x1b\\[[0-9${e}]*m`;
var J = new RegExp(B4e(";:"), "g"),
  fe = /\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/y,
  De = new RegExp(`\\r((?:${B4e(";:")})+)\\n`, "g"),
  V = [22, 22, 23, 23, 24, 25, 27, 28, 29, 39, 49, 54, 55, 75],
  Fe = /^\x1b\[[34]8;(?:5;\d+|2;\d+;\d+;\d+)m$/,
  Z = 9,
  ee = 10,
  he = new Map([
    [1, 0],
    [2, 1],
    [3, 2],
    [20, 3],
    [4, 4],
    [21, 4],
    [5, 5],
    [6, 5],
    [7, 6],
    [8, 7],
    [9, 8],
    [51, 11],
    [52, 11],
    [53, 12],
    [73, 13],
    [74, 13]
  ]);
function vu(e, t, n) {
  if (!(t > 0)) return e;
  if (!e.includes("\x1B[")) return q(e, t, n);
  let s = e.replace(J, "");
  if (s.length < e.length && s.includes("\x1B") && yn(s) !== yn(e))
    return q(
      e.replace(
        De,
        `$1\r
`
      ),
      t,
      n
    );
  let r = q(s, t, n);
  if (
    r === s &&
    !r.includes(`
`)
  )
    return e;
  let u = e.match(J);
  if (u === null) return r;
  let o = e.split(J),
    l = [];
  for (let S = 0, P = 0; S < u.length; S++) l.push((P += o[S].length));
  let f = cZo(),
    a = [],
    i = 0,
    p = 0,
    d = "",
    x = "",
    b = !0,
    c = !1,
    v = !0,
    w = 0,
    O = 0,
    h = 0,
    A = -1,
    F = -1,
    B = -1,
    Y = [],
    U = [],
    g = [],
    T = [],
    W = [],
    k = [],
    z = [];
  for (;;) {
    let S = de(s, w, T, W),
      P = de(r, h, Y, U),
      M = T[S],
      G = Y[P];
    for (let m = 0; m < S; m++) k[m] = -1;
    let D = S - 1,
      R = 0;
    for (let m = P - 1; m >= -1 && v; m--) {
      let y = m < 0 ? -1 : U[m];
      if (y === 10 || typeof y === "string") {
        g[R++] = m;
        continue;
      }
      let C = D;
      while (C >= 0 && W[C] !== y) C--;
      v = m < 0 || C >= 0;
      for (let j = 0; D > C; D--) {
        let K = W[D],
          _ = K === 10 || typeof K === "string" ? j : R;
        while (_ < R && U[g[_]] !== K) _++;
        if (_ < R) ((k[D] = g[_]), (j = _ + 1));
      }
      if (C >= 0) ((k[C] = m), (D = C - 1));
      R = 0;
    }
    if (!v) break;
    let H = i,
      L = i - 1;
    for (let m = 0; l[L + 1] <= M;) {
      let y = l[++L];
      while (m < S && (T[m] < y || k[m] < 0)) m++;
      z[L - H] = y <= w ? 0 : m < S ? k[m] : P;
    }
    for (let m = 0; m <= P; m++) {
      let y = Y[m],
        C = i <= L && z[i - H] <= m,
        j = m < P && U[m] === 10;
      if (c && (C || (m < P && !j))) {
        if (((c = !1), x !== "")) (a.push(r.slice(O, y), x), (O = y), (b = !0));
      }
      if (C) {
        (a.push(r.slice(O, y)), (O = y));
        while (i <= L && z[i - H] <= m) a.push(u[i++]);
        b = !0;
      }
      if (j) {
        if (p < i) {
          while (p < i) uZo(u[p++], f);
          ((d = ""), (x = ""));
          let K = 0;
          for (let _ = 0; _ < f.length; _++) {
            if (f[_] === "") continue;
            if (((x += `\x1B[${f[_]}m`), V[_] !== K)) ((K = V[_]), (d = `\x1B[${K}m${d}`));
          }
        }
        if (b && d !== "") (a.push(r.slice(O, y), d), (O = y));
        ((b = !1), (c = !0));
      }
    }
    if (((w = M), (h = G), h >= r.length)) {
      v = w >= s.length;
      break;
    }
    if (c) {
      if (((c = !1), x !== "")) (a.push(r.slice(O, h), x), (O = h), (b = !0));
    }
    if (A < h)
      ((A = r.indexOf(
        `
`,
        h
      )),
        (A = A === -1 ? r.length : A));
    if (F < h) ((F = r.indexOf("\x1B", h)), (F = F === -1 ? r.length : F));
    if (B < w) ((B = s.indexOf("\x1B", w)), (B = B === -1 ? s.length : B));
    let N = Math.min(A - h, F - h, B - w, i < l.length ? l[i] - w : r.length);
    while (N > 0 && be(r.charCodeAt(h + N - 1))) N--;
    if (N < 1 || !s.startsWith(r.slice(h, h + N), w)) {
      if (((N = 1), r.charCodeAt(h) !== s.charCodeAt(w))) {
        v = !1;
        break;
      }
    }
    ((w += N), (h += N));
  }
  if (!v) return q(e, t, n);
  return (a.push(r.slice(O)), a.join(""));
}
function de(e, t, n, s) {
  let r = 0,
    u = t;
  for (; ; r++) {
    let o = e.charCodeAt(u);
    fe.lastIndex = u;
    let l = o === 27 ? fe.exec(e) : null;
    if (l === null && !be(o)) break;
    ((n[r] = u),
      (s[r] = l !== null ? l[0] : o === 13 ? 10 : o),
      (u += l !== null ? l[0].length : o === 13 && e.charCodeAt(u + 1) === 10 ? 2 : 1));
  }
  return ((n[r] = u), r);
}
function be(e) {
  return e === 32 || (e >= 9 && e <= 13);
}
function cZo() {
  return V.map(() => "");
}
function uZo(e, t) {
  if (!e.endsWith("m")) return;
  if (Fe.test(e)) {
    t[e.charCodeAt(2) === 51 ? Z : ee] = e.slice(2, -1);
    return;
  }
  let n = e.length === 5 ? e.charCodeAt(2) - 48 : 0,
    s = e.charCodeAt(e.length - 2) - 48;
  if ((e.length === 4 || e.length === 5) && n >= 0 && n <= 9 && s >= 0 && s <= 9) {
    me(n * 10 + s, t);
    return;
  }
  let r = e.slice(2, -1).split(";");
  for (let u = 0; u < r.length; u++) {
    let o = r[u],
      l = o === "" ? 0 : parseInt(o, 10);
    if (l === 38 || l === 48 || l === 58) {
      let f = parseInt(r[u + 1] ?? "", 10),
        a = o.includes(":") ? 1 : f === 5 ? 3 : f === 2 ? 5 : 1;
      if (l !== 58 && (a > 1 || o.includes(":"))) {
        if (u + a <= r.length) t[l === 38 ? Z : ee] = r.slice(u, u + a).join(";");
      }
      u += a - 1;
    } else if (l === 4 && o.includes(":"))
      t[he.get(4)] = o === "4:0" ? "" : /^4:[1-5]$/.test(o) ? o : "4";
    else me(l, t);
  }
}
function me(e, t) {
  let n =
    (e >= 30 && e <= 37) || (e >= 90 && e <= 97)
      ? Z
      : (e >= 40 && e <= 47) || (e >= 100 && e <= 107)
        ? ee
        : he.get(e);
  if (n !== void 0) t[n] = String(e);
  else if (e === 0) t.fill("");
  else for (let s = 0; s < t.length; s++) if (V[s] === e) t[s] = "";
}
var Pe = "\uDB80\uDC00",
  Me = "\uD87E\uDE1D",
  te = /[\u{F0000}\u{2FA1D}]/gu,
  Be = /^\x1b(?:\[[0-?]*[ -/]*[@-~]|\][^\x00-\x1f\x7f-\x9f]*(?:\x07|\x1b\\))$/,
  Le = new RegExp(`^(?:${B4e(";:")}$|\\x1b\\]8;)`),
  X =
    /[^\x00-\u02FF\u0370-\u0482\u048A-\u052F\u2000-\u200B\u2010-\u205F\u2070-\u20CF\u2100-\u2BFF\u2E80-\u3029\u3030-\u3098\u309B-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFF01-\uFF9D\uFFE0-\uFFEE\u{1f000}-\u{1f1e5}\u{1f200}-\u{1f3fa}\u{1f400}-\u{1faff}]/gu;
function q(e, t, n, s = !0) {
  if (e.search(X) === -1) return Bun.wrapAnsi(e, t, n);
  let r = "",
    u = [],
    o = [];
  for (let g of Kar(e))
    if (g.type === "sequence") (u.push(g.value), o.push(r.length));
    else r += g.value;
  let l = { starts: [], ends: [], handedAs: [], restoredAs: [] },
    f = $a(),
    a = 0,
    i = !1,
    p;
  X.lastIndex = 0;
  while ((p = X.exec(r)) !== null) {
    let g = p.index;
    while (g > 0 && !ge(r.charCodeAt(g - 1))) g--;
    let T = p.index;
    while (T < r.length && !ge(r.charCodeAt(T))) T++;
    X.lastIndex = T;
    let W = r.slice(g, T);
    while (a < o.length && o[a] < g) a++;
    let k = a,
      z = !O4t(W);
    while (k < o.length && o[k] <= T) ((z = Be.test(u[k]) && z), k++);
    if (!z && k > a) {
      let S = g;
      for (; a < o.length && o[a] < T; a++) if (o[a] > S) (Q(r, S, o[a], l), (S = o[a]));
      Q(r, S, T, l);
      continue;
    }
    for (let { segment: S, index: P } of f.segment(W)) {
      if (S.length === 1) continue;
      let M = g + P,
        G = M + S.length,
        D = xe(S);
      while (a < o.length && o[a] <= M) a++;
      let R = a;
      while (R < o.length && o[R] < G) R++;
      if (R === a) {
        if (D !== "") ne(l, M, G, D, S);
        continue;
      }
      if (D === "" || le(r.slice(M, o[a])) === 0) {
        for (let m = a; m <= R; m++) {
          let y = m === a ? M : o[m - 1],
            C = m === R ? G : o[m];
          Q(r, y, C, l);
        }
        continue;
      }
      let H = D,
        L = "",
        N = M;
      for (let m = a; m < R; m++) {
        let y = u[m];
        if (((L += r.slice(N, o[m])), (N = o[m]), s && Le.test(y))) ((H += y), (i = !0));
        else L += y;
      }
      ne(l, M, G, H, L + r.slice(N, G));
    }
  }
  let { starts: d, ends: x, handedAs: b, restoredAs: c } = l;
  if (d.length === 0) return Bun.wrapAnsi(e, t, n);
  let v = [],
    w = [],
    O = e.search(te) !== -1,
    h = 0,
    A = 0;
  for (let g = 0; g <= d.length; g++) {
    let T = g < d.length ? d[g] : r.length;
    for (; A < u.length && o[A] <= T; A++) {
      let k = r.slice(h, o[A]);
      (pe(w, v, k, O), w.push(u[A]), (h = o[A]));
    }
    let W = r.slice(h, T);
    if ((pe(w, v, W, O), g === d.length)) break;
    (w.push(b[g]), v.push(c[g]), (h = x[g]));
    while (A < u.length && o[A] < h) A++;
  }
  let F = w.join("");
  if (i && F.split(We).every((g) => le(g) <= t)) return q(e, t, n, !1);
  let B = Bun.wrapAnsi(F, t, n);
  if (B === F) return e;
  let Y = 0,
    U = "";
  for (let g of Kar(B))
    U += g.type === "sequence" ? g.value : g.value.replace(te, (T) => v[Y++] ?? T);
  return U;
}
function ge(e) {
  return e === 10 || e === 13;
}
var We = /\r\n?|\n/;
function ne(e, t, n, s, r) {
  (e.starts.push(t), e.ends.push(n), e.handedAs.push(s), e.restoredAs.push(r));
}
function Q(e, t, n, s) {
  let r = e.slice(t, n);
  if (r.search(X) === -1) return;
  for (let { segment: u, index: o } of $a().segment(r)) {
    let l = xe(u);
    if (l !== "") ne(s, t + o, t + o + u.length, l, u);
  }
}
function xe(e) {
  let t = e.codePointAt(0) > 65535 ? 2 : 1;
  if (e.length <= t) return "";
  let n = le(e);
  return n === 1 ? Pe : n === 2 ? Me : "";
}
function pe(e, t, n, s) {
  if (n === "") return;
  if (s) for (let r of n.match(te) ?? []) t.push(r);
  e.push(n);
}
function lc(e, t) {
  if (le(e) <= t) return e;
  if (t <= 0) return "\u2026";
  if (t < 5) return gt(e, t);
  let n = e.lastIndexOf("/"),
    s = n >= 0 ? n : e.lastIndexOf("\\"),
    r = s >= 0 ? e.slice(s) : e,
    u = s >= 0 ? e.slice(0, s) : "",
    o = le(r);
  if (o >= t - 1) return LH(e, t);
  let l = t - 1 - o;
  return _B(u, l) + "\u2026" + r;
}
function gt(e, t) {
  if (le(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = 0,
    s = "";
  for (let { segment: r } of $a().segment(e)) {
    let u = le(r);
    if (n + u > t - 1) break;
    ((s += r), (n += u));
  }
  return s + "\u2026";
}
function LH(e, t) {
  if (le(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = t - 1,
    s = [...$a().segment(e)],
    r = 0,
    u = s.length;
  for (let o = s.length - 1; o >= 0; o--) {
    let l = le(s[o].segment);
    if (r + l > n) break;
    ((r += l), (u = o));
  }
  return `\u2026${s
    .slice(u)
    .map((o) => o.segment)
    .join("")}`;
}
function _B(e, t) {
  if (le(e) <= t) return e;
  if (t <= 0) return "";
  let n = 0,
    s = "";
  for (let { segment: r } of $a().segment(e)) {
    let u = le(r);
    if (n + u > t) break;
    ((s += r), (n += u));
  }
  return s;
}
var Ue = 8,
  ze = 40;
function TAt(e, t) {
  return gt(e, Math.max(ze, t - Ue));
}
function hs(e, t, n = !1) {
  let s = e;
  if (n) {
    let r = e.indexOf(`
`);
    if (r !== -1) {
      if (((s = e.substring(0, r)), le(s) + 1 > t)) return gt(`${s}\u2026`, t);
      return `${s}\u2026`;
    }
  }
  if (le(s) <= t) return s;
  return gt(s, t);
}
function yst(e, t) {
  let n = [],
    s = "",
    r = 0;
  for (let { segment: u } of $a().segment(e)) {
    let o = le(u);
    if (r + o <= t) ((s += u), (r += o));
    else {
      if (s) n.push(s);
      ((s = u), (r = o));
    }
  }
  if (s) n.push(s);
  return n;
}
function Var(e, t, n) {
  if (n <= 0 || t <= 0) return "";
  let s = vu(e, t, { trim: !0, hard: !0 }).split(`
`);
  if (s.length <= n)
    return s.join(`
`);
  let r = s.slice(0, n);
  return (
    (r[n - 1] = gt((r[n - 1] ?? "") + "\u2026", t)),
    r.join(`
`)
  );
}
function hxe(e) {
  return `${(e / 1000).toFixed(1)}s`;
}
function un(e, t) {
  if (e < 60000) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1000).toFixed(1)}s`;
    return `${Math.floor(e / 1000).toString()}s`;
  }
  let n = Math.floor(e / 86400000),
    s = Math.floor((e % 86400000) / 3600000),
    r = Math.floor((e % 3600000) / 60000),
    u = Math.round((e % 60000) / 1000);
  if (u === 60) ((u = 0), r++);
  if (r === 60) ((r = 0), s++);
  if (s === 24) ((s = 0), n++);
  let o = t?.hideTrailingZeros;
  if (t?.mostSignificantOnly) {
    if (n > 0) return `${n}d`;
    if (s > 0) return `${s}h`;
    if (r > 0) return `${r}m`;
    return `${u}s`;
  }
  if (n > 0) {
    if (o && s === 0 && r === 0) return `${n}d`;
    if (o && r === 0) return `${n}d ${s}h`;
    return `${n}d ${s}h ${r}m`;
  }
  if (s > 0) {
    if (o && r === 0 && u === 0) return `${s}h`;
    if (o && u === 0) return `${s}h ${r}m`;
    return `${s}h ${r}m ${u}s`;
  }
  if (r > 0) {
    if (o && u === 0) return `${r}m`;
    return `${r}m ${u}s`;
  }
  return `${u}s`;
}
function uE(e) {
  let t = e >= 60000 ? Math.round(e / 60000) * 60000 : e;
  return un(t, { hideTrailingZeros: !0 });
}
function lSe(e) {
  let t = Math.max(0, Math.floor(e / 1000));
  if (t < 60) return `${t}s`;
  let n = Math.floor(t / 60);
  if (n < 60) return `${n}m${String(t % 60).padStart(2, "0")}s`;
  let s = Math.floor(n / 60);
  if (s < 24) return `${s}h${String(n % 60).padStart(2, "0")}m`;
  return `${Math.floor(s / 24)}d${String(s % 24).padStart(2, "0")}h`;
}
var Ge = { notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 1 },
  Ke = { notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 0 };
function Ri(e) {
  let t = e >= 1000;
  return vui("en-US", t ? Ge : Ke)
    .format(e)
    .toLowerCase();
}
function yr(e) {
  return Ri(e).replace(".0", "");
}
function v8r(e, t = 4) {
  return `$${e > 0.5 ? He(e, 100).toFixed(2) : e.toFixed(t)}`;
}
function He(e, t) {
  return Math.round(e * t) / t;
}
var fZo = "costs may be inaccurate due to usage of unknown models",
  pZo = "at your organization's configured rates";
function mZo(e) {
  return (
    `${Ri(e.inputTokens)} input, ${Ri(e.outputTokens)} output, ${Ri(e.cacheReadInputTokens)} cache read, ${Ri(e.cacheCreationInputTokens)} cache write` +
    (e.webSearchRequests > 0 ? `, ${Ri(e.webSearchRequests)} web search` : "")
  );
}
function l2(e) {
  if (e < 20) return "< 20";
  return `~${yr(Math.round(e / 10) * 10)}`;
}
function d2(e, t = {}) {
  let { style: n = "narrow", numeric: s = "always", maxUnit: r, now: u = new Date() } = t,
    o = e.getTime() - u.getTime(),
    l = Math.trunc(o / 1000),
    f = [
      { unit: "year", seconds: 31536000, shortUnit: "y" },
      { unit: "month", seconds: 2592000, shortUnit: "mo" },
      { unit: "week", seconds: 604800, shortUnit: "w" },
      { unit: "day", seconds: 86400, shortUnit: "d" },
      { unit: "hour", seconds: 3600, shortUnit: "h" },
      { unit: "minute", seconds: 60, shortUnit: "m" },
      { unit: "second", seconds: 1, shortUnit: "s" }
    ],
    a = r ? f.filter((i) => i.seconds <= 86400) : f;
  for (let { unit: i, seconds: p, shortUnit: d } of a)
    if (Math.abs(l) >= p) {
      let x = Math.trunc(l / p);
      if (n === "narrow") return l < 0 ? `${Math.abs(x)}${d} ago` : `in ${x}${d}`;
      return hZo("long", s).format(x, i);
    }
  if (n === "narrow") return l <= 0 ? "0s ago" : "in 0s";
  return hZo(n, "auto").format(0, "second");
}
function m_(e, t = {}) {
  let { now: n = new Date(), ...s } = t;
  if (e > n) return d2(e, { ...s, now: n });
  return d2(e, { ...s, numeric: "always", now: n });
}
function skn(e) {
  let t = e.fileSize !== void 0 ? en(e.fileSize) : `${e.messageCount} messages`,
    n = [
      m_(e.modified, { style: "short" }),
      ...(e.sessionKind === "bg" ? ["bg"] : []),
      ...(e.gitBranch ? [e.gitBranch] : []),
      t
    ];
  if (e.tag) n.push(`#${e.tag}`);
  if (e.agentSetting) n.push(`@${e.agentSetting}`);
  if (e.prNumber) n.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
  return n.join(" \xB7 ");
}
function Se(e, t) {
  if (t === void 0) return { minutes: e.getMinutes(), year: e.getFullYear() };
  let n = new Map(
    c2("en-US", { timeZone: t, year: "numeric", minute: "numeric" })
      .formatToParts(e)
      .map((s) => [s.type, s.value])
  );
  return { minutes: Number(n.get("minute")), year: Number(n.get("year")) };
}
function yC(e, t = !1, n = !0, s = !1, r) {
  if (!e) return;
  let u = new Date(e * 1000),
    o = new Date(),
    { minutes: l, year: f } = Se(u, r),
    a = t || r !== void 0 ? ` (${r ?? Sui()})` : "",
    i = (u.getTime() - o.getTime()) / 3600000;
  if (s || i > 24) {
    let d = {
      month: "short",
      day: "numeric",
      hour: n ? "numeric" : void 0,
      minute: !n || l === 0 ? void 0 : "2-digit",
      hour12: n ? !0 : void 0,
      timeZone: r
    };
    if (f !== Se(o, r).year) d.year = "numeric";
    return u.toLocaleString("en-US", d).replace(/[ \u202f]([AP]M)/i, (b, c) => c.toLowerCase()) + a;
  }
  return (
    u
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: l === 0 ? void 0 : "2-digit",
        hour12: !0,
        timeZone: r
      })
      .replace(/[ \u202f]([AP]M)/i, (d, x) => x.toLowerCase()) + a
  );
}
function AAt(e, t = !1, n = !0, s = !1) {
  let r = new Date(e);
  return `${yC(Math.floor(r.getTime() / 1000), t, n, s)}`;
}
function _st(e) {
  return Math.round(e * 1000) / 10;
}
function dSe(e) {
  return Math.min(_st(e), 100);
}
function Mse(e, t = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${I(e, t)}`;
}
function j4e(e) {
  return Math.max(1, Math.round(e / 1000));
}
import { AsyncLocalStorage as Ye } from "async_hooks";
import { constants as je } from "fs";
import {
  appendFile as Xe,
  copyFile as qe,
  lstat as Ve,
  mkdir as Je,
  open as ye,
  readdir as Ee,
  readFile as we,
  stat as Qe,
  unlink as Ze,
  writeFile as re
} from "fs/promises";
class E8r {
  read(e) {
    return we(e, "utf8");
  }
  readBytes(e) {
    return we(e);
  }
  write(e, t, n) {
    return re(e, t, { encoding: "utf8", mode: n });
  }
  async mkdir(e, t) {
    try {
      await Je(e, { recursive: !0, mode: t });
    } catch (n) {
      if (E(n) !== "EEXIST") throw n;
    }
  }
  atomicWrite(e, t, n) {
    return Dn(e, t, n);
  }
  delete(e) {
    return Ze(e);
  }
  list(e) {
    return Ee(e);
  }
  append(e, t, n) {
    return Xe(e, t, { encoding: "utf8", mode: n });
  }
  writeExclusive(e, t, n) {
    return re(e, t, { encoding: "utf8", flag: "wx", mode: n });
  }
  writeBytesExclusive(e, t, n) {
    return re(e, t, { flag: "wx", mode: n });
  }
  copy(e, t) {
    return qe(e, t);
  }
  async stat(e) {
    return { mtimeMs: (await Qe(e)).mtimeMs };
  }
  async lstat(e) {
    try {
      let t = await Ve(e);
      return {
        isSymbolicLink: t.isSymbolicLink(),
        isFile: t.isFile(),
        isDirectory: t.isDirectory(),
        mtimeMs: t.mtimeMs,
        nlink: t.nlink
      };
    } catch (t) {
      if (E(t) === "ENOENT") return;
      throw t;
    }
  }
  async listEntries(e) {
    return (await Ee(e, { withFileTypes: !0 })).map((n) => ({
      name: n.name,
      isDirectory: n.isDirectory(),
      isFile: n.isFile()
    }));
  }
  async readRange(e, t, n) {
    (se("readRange", "offset", t), se("readRange", "length", n));
    let s = await ye(e, "r");
    try {
      return await Te(s, t, n);
    } finally {
      await s.close();
    }
  }
  async readTail(e, t, n) {
    se("readTail", "maxBytes", t);
    let s = n?.noFollow ? je.O_RDONLY | $s : "r",
      r = await ye(e, s);
    try {
      let u = await r.stat();
      if (n?.noFollow && !u.isFile())
        throw Object.assign(Error("ENXIO: not a regular file"), { code: "ENXIO", path: e });
      let { size: o } = u,
        l = Math.min(t, o);
      return await Te(r, o - l, l);
    } finally {
      await r.close();
    }
  }
}
function se(e, t, n) {
  if (!Number.isInteger(n) || n < 0)
    throw RangeError(`${e}: ${t} must be a non-negative integer, got ${n}`);
}
async function Te(e, t, n) {
  if (n === 0) return Buffer.alloc(0);
  let s = Buffer.alloc(n),
    r = 0;
  while (r < n) {
    let { bytesRead: u } = await e.read(s, r, n - r, t + r);
    if (u === 0) break;
    r += u;
  }
  return r === n ? s : Buffer.from(s.subarray(0, r));
}
var et = new Ye();
function hn() {
  return et.getStore() ?? new E8r();
}
export {
  O$e,
  Kar,
  aSe,
  Hfe,
  lZo,
  O4t,
  dZo,
  B4e,
  vu,
  cZo,
  uZo,
  lc,
  gt,
  LH,
  _B,
  TAt,
  hs,
  yst,
  Var,
  hxe,
  un,
  uE,
  lSe,
  Ri,
  yr,
  v8r,
  fZo,
  pZo,
  mZo,
  l2,
  d2,
  m_,
  skn,
  yC,
  AAt,
  _st,
  dSe,
  Mse,
  j4e,
  E8r,
  hn
};

//# sourceMappingURL=chunk-wr0p4ndg.js.map
