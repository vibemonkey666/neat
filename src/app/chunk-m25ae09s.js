// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Gse, zse } from "./chunk-f9x3sh8a.js";
import { rFe, ZS, CSe, yYe, lTn, rpe, cTn } from "./chunk-wrtp8qz8.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { RC } from "./chunk-h5gbmqm1.js";
var R = 1,
  _ = 2;
function K(r, t, e, n) {
  var i = e.length,
    o = i,
    m = !n;
  if (r == null) return !o;
  r = Object(r);
  while (i--) {
    var f = e[i];
    if (m && f[2] ? f[1] !== r[f[0]] : !(f[0] in r)) return !1;
  }
  while (++i < o) {
    f = e[i];
    var s = f[0],
      l = r[s],
      d = f[1];
    if (m && f[2]) {
      if (l === void 0 && !(s in r)) return !1;
    } else {
      var h = new rFe();
      if (n) var y = n(l, d, s, r, t, h);
      if (!(y === void 0 ? cTn(d, l, R | _, n, h) : y)) return !1;
    }
  }
  return !0;
}
var x = K;
function D(r) {
  return r === r && !RC(r);
}
var u = D;
function w(r) {
  var t = rpe(r),
    e = t.length;
  while (e--) {
    var n = t[e],
      i = r[n];
    t[e] = [n, i, u(i)];
  }
  return t;
}
var c = w;
function G(r, t) {
  return function (e) {
    if (e == null) return !1;
    return e[r] === t && (t !== void 0 || r in Object(e));
  };
}
var a = G;
function L(r) {
  var t = c(r);
  if (t.length == 1 && t[0][2]) return a(t[0][0], t[0][1]);
  return function (e) {
    return e === r || x(e, r, t);
  };
}
var P = L;
var b = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  F = /^\w*$/;
function N(r, t) {
  if (ZS(r)) return !1;
  var e = typeof r;
  if (e == "number" || e == "symbol" || e == "boolean" || r == null || Gse(r)) return !0;
  return F.test(r) || !b.test(r) || (t != null && r in Object(t));
}
var p = N;
var T = 500;
function q(r) {
  var t = Qr(r, function (n) {
      if (e.size === T) e.clear();
      return n;
    }),
    e = t.cache;
  return t;
}
var g = q;
var z =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  H = /\\(\\)?/g,
  U = g(function (r) {
    var t = [];
    if (r.charCodeAt(0) === 46) t.push("");
    return (
      r.replace(z, function (e, n, i, o) {
        t.push(i ? o.replace(H, "$1") : n || e);
      }),
      t
    );
  }),
  A = U;
function Z(r, t) {
  if (ZS(r)) return r;
  return p(r, t) ? [r] : A(zse(r));
}
var mSe = Z;
var v = 1 / 0;
function X(r) {
  if (typeof r == "string" || Gse(r)) return r;
  var t = r + "";
  return t == "0" && 1 / r == -v ? "-0" : t;
}
var $fe = X;
function Y(r, t) {
  t = mSe(t, r);
  var e = 0,
    n = t.length;
  while (r != null && e < n) r = r[$fe(t[e++])];
  return e && e == n ? r : void 0;
}
var kst = Y;
function B(r, t, e) {
  var n = r == null ? void 0 : kst(r, t);
  return n === void 0 ? e : n;
}
var I8r = B;
function J(r, t) {
  return r != null && t in Object(r);
}
var I = J;
function Q(r, t, e) {
  t = mSe(t, r);
  var n = -1,
    i = t.length,
    o = !1;
  while (++n < i) {
    var m = $fe(t[n]);
    if (!(o = r != null && e(r, m))) break;
    r = r[m];
  }
  if (o || ++n != i) return o;
  return ((i = r == null ? 0 : r.length), !!i && lTn(i) && yYe(m, i) && (ZS(r) || CSe(r)));
}
var C = Q;
function W(r, t) {
  return r != null && C(r, t, I);
}
var O8r = W;
var k = 1,
  V = 2;
function j(r, t) {
  if (p(r) && u(t)) return a($fe(r), t);
  return function (e) {
    var n = I8r(e, r);
    return n === void 0 && n === t ? O8r(e, r) : cTn(t, n, k | V);
  };
}
var M = j;
function rr(r) {
  return r;
}
var Tst = rr;
function tr(r) {
  return function (t) {
    return t == null ? void 0 : t[r];
  };
}
var E = tr;
function er(r) {
  return function (t) {
    return kst(t, r);
  };
}
var O = er;
function nr(r) {
  return p(r) ? E($fe(r)) : O(r);
}
var S = nr;
function ir(r) {
  if (typeof r == "function") return r;
  if (r == null) return Tst;
  if (typeof r == "object") return ZS(r) ? M(r[0], r[1]) : P(r);
  return S(r);
}
var rW = ir;
export { mSe, $fe, kst, I8r, O8r, Tst, rW };

//# sourceMappingURL=chunk-m25ae09s.js.map
