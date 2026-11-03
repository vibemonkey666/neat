// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { Br, uie, sN, Kt } from "./chunk-6bbdndfe.js";
import { mJr, Fss, xAn, zCt } from "./chunk-qq3ygwcj.js";
import { pJr } from "./chunk-4hww8411.js";
import { zxe, NCt, rJr, vW, x2, gie, XYt, Mit, hie, $Ct, FCt, In } from "./chunk-h5gbmqm1.js";
import { W, lmi, cmi } from "./chunk-jgvfzp2r.js";
import { z } from "./chunk-p197ae0z.js";
import { $r } from "./chunk-a2y39866.js";
var j = {};
$r(j, { default: () => RSe });
var N = {};
$r(N, { default: () => _Ye });
function OR(e) {
  return {
    subscribe(t) {
      return e().subscribe(t);
    },
    emit(...t) {
      e().emit(...t);
    },
    clear() {
      e().clear();
    }
  };
}
var pn = Object.prototype;
function gn(e) {
  var t = e && e.constructor,
    o = (typeof t == "function" && t.prototype) || pn;
  return e === o;
}
var bYe = gn;
function fn(e, t) {
  return function (o) {
    return e(t(o));
  };
}
var L9r = fn;
var hn = L9r(Object.keys, Object),
  $e = hn;
var mn = Object.prototype,
  Sn = mn.hasOwnProperty;
function yn(e) {
  if (!bYe(e)) return $e(e);
  var t = [];
  for (var o in Object(e)) if (Sn.call(e, o) && o != "constructor") t.push(o);
  return t;
}
var N9r = yn;
var vn = hie(vW, "DataView"),
  E = vn;
var bn = hie(vW, "Promise"),
  D = bn;
var kn = hie(vW, "Set"),
  cCt = kn;
var Cn = hie(vW, "WeakMap"),
  H = Cn;
var Xe = "[object Map]",
  xn = "[object Object]",
  Ze = "[object Promise]",
  et = "[object Set]",
  ot = "[object WeakMap]",
  rt = "[object DataView]",
  Rn = Mit(E),
  Tn = Mit($Ct),
  Mn = Mit(D),
  An = Mit(cCt),
  Ln = Mit(H),
  T = gie;
if (
  (E && T(new E(new ArrayBuffer(1))) != rt) ||
  ($Ct && T(new $Ct()) != Xe) ||
  (D && T(D.resolve()) != Ze) ||
  (cCt && T(new cCt()) != et) ||
  (H && T(new H()) != ot)
)
  T = function (e) {
    var t = gie(e),
      o = t == xn ? e.constructor : void 0,
      r = o ? Mit(o) : "";
    if (r)
      switch (r) {
        case Rn:
          return rt;
        case Tn:
          return Xe;
        case Mn:
          return Ze;
        case An:
          return et;
        case Ln:
          return ot;
      }
    return t;
  };
var Mxe = T;
function On(e) {
  return e != null && typeof e == "object";
}
var k2 = On;
var Fn = "[object Arguments]";
function En(e) {
  return k2(e) && gie(e) == Fn;
}
var Y = En;
var it = Object.prototype,
  { hasOwnProperty: Dn, propertyIsEnumerable: Hn } = it,
  Bn = Y(
    (function () {
      return arguments;
    })()
  )
    ? Y
    : function (e) {
        return k2(e) && Dn.call(e, "callee") && !Hn.call(e, "callee");
      },
  CSe = Bn;
var Un = Array.isArray,
  ZS = Un;
var jn = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jn;
}
var lTn = _n;
function qn(e) {
  return e != null && lTn(e.length) && !XYt(e);
}
var npe = qn;
function Nn() {
  return !1;
}
var st = Nn;
var dt = typeof j == "object" && j && !j.nodeType && j,
  at = dt && typeof B == "object" && B && !B.nodeType && B,
  Wn = at && at.exports === dt,
  lt = Wn ? vW.Buffer : void 0,
  Gn = lt ? lt.isBuffer : void 0,
  Kn = Gn || st,
  RSe = Kn;
var Vn = "[object Arguments]",
  Jn = "[object Array]",
  zn = "[object Boolean]",
  Qn = "[object Date]",
  Yn = "[object Error]",
  $n = "[object Function]",
  Xn = "[object Map]",
  Zn = "[object Number]",
  eo = "[object Object]",
  to = "[object RegExp]",
  oo = "[object Set]",
  ro = "[object String]",
  io = "[object WeakMap]",
  so = "[object ArrayBuffer]",
  lo = "[object DataView]",
  uo = "[object Float32Array]",
  co = "[object Float64Array]",
  po = "[object Int8Array]",
  go = "[object Int16Array]",
  fo = "[object Int32Array]",
  ho = "[object Uint8Array]",
  mo = "[object Uint8ClampedArray]",
  yo = "[object Uint16Array]",
  vo = "[object Uint32Array]",
  S = {};
S[uo] = S[co] = S[po] = S[go] = S[fo] = S[ho] = S[mo] = S[yo] = S[vo] = !0;
S[Vn] =
  S[Jn] =
  S[so] =
  S[zn] =
  S[lo] =
  S[Qn] =
  S[Yn] =
  S[$n] =
  S[Xn] =
  S[Zn] =
  S[eo] =
  S[to] =
  S[oo] =
  S[ro] =
  S[io] =
    !1;
function bo(e) {
  return k2(e) && lTn(e.length) && !!S[gie(e)];
}
var ut = bo;
function ko(e) {
  return function (t) {
    return e(t);
  };
}
var dTn = ko;
var ct = typeof N == "object" && N && !N.nodeType && N,
  w = ct && typeof _ == "object" && _ && !_.nodeType && _,
  Co = w && w.exports === ct,
  X = Co && rJr.process,
  xo = (function () {
    try {
      var e = w && w.require && w.require("util").types;
      if (e) return e;
      return X && X.binding && X.binding("util");
    } catch (t) {}
  })(),
  _Ye = xo;
var pt = _Ye && _Ye.isTypedArray,
  Ro = pt ? dTn(pt) : ut,
  pit = Ro;
function To() {
  ((this.__data__ = new NCt()), (this.size = 0));
}
var gt = To;
function Po(e) {
  var t = this.__data__,
    o = t.delete(e);
  return ((this.size = t.size), o);
}
var ft = Po;
function Mo(e) {
  return this.__data__.get(e);
}
var ht = Mo;
function wo(e) {
  return this.__data__.has(e);
}
var mt = wo;
var Ao = 200;
function Lo(e, t) {
  var o = this.__data__;
  if (o instanceof NCt) {
    var r = o.__data__;
    if (!$Ct || r.length < Ao - 1) return (r.push([e, t]), (this.size = ++o.size), this);
    o = this.__data__ = new FCt(r);
  }
  return (o.set(e, t), (this.size = o.size), this);
}
var St = Lo;
function P(e) {
  var t = (this.__data__ = new NCt(e));
  this.size = t.size;
}
P.prototype.clear = gt;
P.prototype.delete = ft;
P.prototype.get = ht;
P.prototype.has = mt;
P.prototype.set = St;
var rFe = P;
var Oo = "__lodash_hash_undefined__";
function Io(e) {
  return (this.__data__.set(e, Oo), this);
}
var yt = Io;
function Fo(e) {
  return this.__data__.has(e);
}
var vt = Fo;
function G(e) {
  var t = -1,
    o = e == null ? 0 : e.length;
  this.__data__ = new FCt();
  while (++t < o) this.add(e[t]);
}
G.prototype.add = G.prototype.push = yt;
G.prototype.has = vt;
var P9r = G;
function Eo(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length;
  while (++o < r) if (t(e[o], o, e)) return !0;
  return !1;
}
var bt = Eo;
function Do(e, t) {
  return e.has(t);
}
var I9r = Do;
var Ho = 1,
  Bo = 2;
function Uo(e, t, o, r, i, s) {
  var a = o & Ho,
    l = e.length,
    d = t.length;
  if (l != d && !(a && d > l)) return !1;
  var p = s.get(e),
    y = s.get(t);
  if (p && y) return p == t && y == e;
  var u = -1,
    f = !0,
    h = o & Bo ? new P9r() : void 0;
  (s.set(e, t), s.set(t, e));
  while (++u < l) {
    var g = e[u],
      v = t[u];
    if (r) var b = a ? r(v, g, u, t, e, s) : r(g, v, u, e, t, s);
    if (b !== void 0) {
      if (b) continue;
      f = !1;
      break;
    }
    if (h) {
      if (
        !bt(t, function (c, C) {
          if (!I9r(h, C) && (g === c || i(g, c, o, r, s))) return h.push(C);
        })
      ) {
        f = !1;
        break;
      }
    } else if (!(g === v || i(g, v, o, r, s))) {
      f = !1;
      break;
    }
  }
  return (s.delete(e), s.delete(t), f);
}
var K = Uo;
var jo = vW.Uint8Array,
  iTn = jo;
function _o(e) {
  var t = -1,
    o = Array(e.size);
  return (
    e.forEach(function (r, i) {
      o[++t] = [i, r];
    }),
    o
  );
}
var kt = _o;
function qo(e) {
  var t = -1,
    o = Array(e.size);
  return (
    e.forEach(function (r) {
      o[++t] = r;
    }),
    o
  );
}
var aTn = qo;
var No = 1,
  Wo = 2,
  Go = "[object Boolean]",
  Ko = "[object Date]",
  Vo = "[object Error]",
  Jo = "[object Map]",
  zo = "[object Number]",
  Qo = "[object RegExp]",
  Yo = "[object Set]",
  $o = "[object String]",
  Xo = "[object Symbol]",
  Zo = "[object ArrayBuffer]",
  er = "[object DataView]",
  Ct = x2 ? x2.prototype : void 0,
  Z = Ct ? Ct.valueOf : void 0;
function tr(e, t, o, r, i, s, a) {
  switch (o) {
    case er:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      ((e = e.buffer), (t = t.buffer));
    case Zo:
      if (e.byteLength != t.byteLength || !s(new iTn(e), new iTn(t))) return !1;
      return !0;
    case Go:
    case Ko:
    case zo:
      return zxe(+e, +t);
    case Vo:
      return e.name == t.name && e.message == t.message;
    case Qo:
    case $o:
      return e == t + "";
    case Jo:
      var l = kt;
    case Yo:
      var d = r & No;
      if ((l || (l = aTn), e.size != t.size && !d)) return !1;
      var p = a.get(e);
      if (p) return p == t;
      ((r |= Wo), a.set(e, t));
      var y = K(l(e), l(t), r, i, s, a);
      return (a.delete(e), y);
    case Xo:
      if (Z) return Z.call(e) == Z.call(t);
  }
  return !1;
}
var xt = tr;
function nr(e, t) {
  var o = -1,
    r = t.length,
    i = e.length;
  while (++o < r) e[i + o] = t[o];
  return e;
}
var bYt = nr;
function or(e, t, o) {
  var r = t(e);
  return ZS(e) ? r : bYt(r, o(e));
}
var O9r = or;
function rr(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length,
    i = 0,
    s = [];
  while (++o < r) {
    var a = e[o];
    if (t(a, o, e)) s[i++] = a;
  }
  return s;
}
var M9r = rr;
function ir() {
  return [];
}
var D9r = ir;
var sr = Object.prototype,
  ar = sr.propertyIsEnumerable,
  Rt = Object.getOwnPropertySymbols,
  lr = !Rt
    ? D9r
    : function (e) {
        if (e == null) return [];
        return (
          (e = Object(e)),
          M9r(Rt(e), function (t) {
            return ar.call(e, t);
          })
        );
      },
  SYt = lr;
function dr(e, t) {
  var o = -1,
    r = Array(e);
  while (++o < e) r[o] = t(o);
  return r;
}
var Tt = dr;
var ur = 9007199254740991,
  cr = /^(?:0|[1-9]\d*)$/;
function pr(e, t) {
  var o = typeof e;
  return (
    (t = t == null ? ur : t),
    !!t &&
      (o == "number" || (o != "symbol" && cr.test(e))) &&
      (e > -1 && e % 1 == 0 && e < t)
  );
}
var yYe = pr;
var gr = Object.prototype,
  fr = gr.hasOwnProperty;
function hr(e, t) {
  var o = ZS(e),
    r = !o && CSe(e),
    i = !o && !r && RSe(e),
    s = !o && !r && !i && pit(e),
    a = o || r || i || s,
    l = a ? Tt(e.length, String) : [],
    d = l.length;
  for (var p in e)
    if (
      (t || fr.call(e, p)) &&
      !(
        a &&
        (p == "length" ||
          (i && (p == "offset" || p == "parent")) ||
          (s && (p == "buffer" || p == "byteLength" || p == "byteOffset")) ||
          yYe(p, d))
      )
    )
      l.push(p);
  return l;
}
var H9r = hr;
function mr(e) {
  return npe(e) ? H9r(e) : N9r(e);
}
var rpe = mr;
function Sr(e) {
  return O9r(e, rpe, SYt);
}
var _dr = Sr;
var yr = 1,
  vr = Object.prototype,
  br = vr.hasOwnProperty;
function kr(e, t, o, r, i, s) {
  var a = o & yr,
    l = _dr(e),
    d = l.length,
    p = _dr(t),
    y = p.length;
  if (d != y && !a) return !1;
  var u = d;
  while (u--) {
    var f = l[u];
    if (!(a ? f in t : br.call(t, f))) return !1;
  }
  var h = s.get(e),
    g = s.get(t);
  if (h && g) return h == t && g == e;
  var v = !0;
  (s.set(e, t), s.set(t, e));
  var b = a;
  while (++u < d) {
    f = l[u];
    var c = e[f],
      C = t[f];
    if (r) var Ye = a ? r(C, c, f, t, e, s) : r(c, C, f, e, t, s);
    if (!(Ye === void 0 ? c === C || i(c, C, o, r, s) : Ye)) {
      v = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (v && !b) {
    var O = e.constructor,
      I = t.constructor;
    if (
      O != I &&
      ("constructor" in e && "constructor" in t) &&
      !(typeof O == "function" && O instanceof O && typeof I == "function" && I instanceof I)
    )
      v = !1;
  }
  return (s.delete(e), s.delete(t), v);
}
var Pt = kr;
var Cr = 1,
  Mt = "[object Arguments]",
  wt = "[object Array]",
  V = "[object Object]",
  xr = Object.prototype,
  At = xr.hasOwnProperty;
function Rr(e, t, o, r, i, s) {
  var a = ZS(e),
    l = ZS(t),
    d = a ? wt : Mxe(e),
    p = l ? wt : Mxe(t);
  ((d = d == Mt ? V : d), (p = p == Mt ? V : p));
  var y = d == V,
    u = p == V,
    f = d == p;
  if (f && RSe(e)) {
    if (!RSe(t)) return !1;
    ((a = !0), (y = !1));
  }
  if (f && !y)
    return (s || (s = new rFe()), a || pit(e) ? K(e, t, o, r, i, s) : xt(e, t, d, o, r, i, s));
  if (!(o & Cr)) {
    var h = y && At.call(e, "__wrapped__"),
      g = u && At.call(t, "__wrapped__");
    if (h || g) {
      var v = h ? e.value() : e,
        b = g ? t.value() : t;
      return (s || (s = new rFe()), i(v, b, o, r, s));
    }
  }
  if (!f) return !1;
  return (s || (s = new rFe()), Pt(e, t, o, r, i, s));
}
var Lt = Rr;
function Ot(e, t, o, r, i) {
  if (e === t) return !0;
  if (e == null || t == null || (!k2(e) && !k2(t))) return e !== e && t !== t;
  return Lt(e, t, o, r, Ot, i);
}
var cTn = Ot;
function Tr(e, t) {
  return cTn(e, t);
}
var wn = Tr;
function Hxe(e, t) {
  return e.flatMap((o, r) => (r ? [t(r), o] : [o]));
}
function F(e, t) {
  let o = 0;
  for (let r of e) o += +!!t(r);
  return o;
}
function mit(e, t) {
  if (e === t) return !0;
  if (e === void 0 || t === void 0 || e.size !== t.size) return !1;
  for (let o of e) if (!t.has(o)) return !1;
  return !0;
}
function EC(e, t) {
  if (e === t) return !0;
  if (e === void 0 || t === void 0 || e.length !== t.length) return !1;
  for (let o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
  return !0;
}
function L(e) {
  return [...new Set(e)];
}
function Bi(e) {
  if (!Array.isArray(e)) return [];
  return e.every((t) => typeof t === "string") ? e : e.filter((t) => typeof t === "string");
}
function uts(e, t) {
  let o = Math.min(e.length, t.length),
    r = 0;
  while (r < o && e[r] === t[r]) r++;
  return r;
}
import { homedir as Ir } from "os";
import { resolve as en, sep as Zt } from "path";
var ee = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function dCt(e) {
  return sN(e.trim(), ee);
}
function _Yt() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return e ? sN(e, ee) : null;
}
function its(e) {
  if (e.toLowerCase().endsWith(".jsonl"))
    return { sessionId: uie(), ingressUrl: null, isUrl: !1, jsonlFile: e, isJsonlFile: !0 };
  if (Kt(e)) return { sessionId: e, ingressUrl: null, isUrl: !1, jsonlFile: null, isJsonlFile: !1 };
  try {
    let t = new URL(e);
    return {
      sessionId: _Yt() ?? sN(t.href, ee),
      ingressUrl: t.href,
      isUrl: !0,
      jsonlFile: null,
      isJsonlFile: !1
    };
  } catch {}
  return null;
}
import { basename as Mr, dirname as Et } from "path";
class te {
  walked = new Map();
  folderIsLink = new Map();
  managedMcp = null;
  clearWalk() {
    (this.walked.clear(), this.folderIsLink.clear());
  }
  noteWalked(e, t) {
    if (!this.walked.has(e)) this.walked.set(e, t());
  }
  linkOf(e) {
    return this.walked.get(e) ?? null;
  }
  isLinked(e) {
    return this.linkOf(e) !== null;
  }
  all() {
    return [...this.walked.values(), this.managedMcp].filter((e) => e !== null);
  }
}
var Upi = [
  "not_admin_owned",
  "other_writable",
  "group_writable",
  "symlinked",
  "unknown",
  "not_evaluated",
  "protected"
];
function Bpi({ file: e, folder: t, linked: o, posix: r }) {
  if (!r) return "not_evaluated";
  if (e === void 0 || t === void 0) return o ? "symlinked" : "unknown";
  if (e.uid !== 0 || t.uid !== 0) return "not_admin_owned";
  let i = e.mode | t.mode;
  if ((i & 2) !== 0) return "other_writable";
  if ((i & 16) !== 0) return "group_writable";
  return o ? "symlinked" : "protected";
}
function jpi({ file: e, folder: t, euid: o, groups: r, posix: i }) {
  if (!i || o === void 0) return;
  if (o === 0) return !0;
  let s = [e, t].filter((l) => l !== void 0),
    a = s.map((l) => {
      if (l.uid === o || (l.mode & 2) !== 0) return !0;
      if ((l.mode & 16) === 0) return !1;
      return l.gid === void 0 ? void 0 : r().includes(l.gid);
    });
  if (a.includes(!0)) return !0;
  return s.length < 2 || a.includes(void 0) ? void 0 : !1;
}
class ne {
  documents = new Map();
  folderOwners = new Map();
  siblingRecords = new Map();
  setsOrgPin = !1;
  clear() {
    (this.documents.clear(),
      this.folderOwners.clear(),
      this.siblingRecords.clear(),
      (this.setsOrgPin = !1));
  }
  note(e, t) {
    this.documents.set(e, t);
  }
  all() {
    return [...this.documents];
  }
}
function It() {
  return {
    answers: null,
    computed: null,
    pass: Promise.resolve(),
    queuedFor: void 0,
    isAnnouncing: !1,
    askedOf: "",
    askedAbout: null,
    visited: [],
    unsettled: new Set()
  };
}
class oe {
  holders = 0;
  tiers;
  baseline;
  lingering;
  tier(e) {
    if (this.holders === 0 && this.lingering !== void 0) {
      let t = this.lingering();
      if (t === void 0) this.lingering = void 0;
      this.tiers = t;
    }
    return this.tiers?.get(e);
  }
  engage(e, t) {
    let o;
    if (this.holders === 0) {
      let i = e(),
        s = t?.() ?? i;
      if (this.lingering !== void 0)
        ((o = { tiers: this.tiers, lingering: this.lingering }), (this.lingering = void 0));
      ((this.tiers = i), (this.baseline = s));
    }
    this.holders++;
    let r = !1;
    return {
      release: () => {
        if (r) return { last: !1 };
        if (((r = !0), this.holders--, this.holders > 0)) return { last: !1 };
        return (
          (this.tiers = void 0),
          (this.lingering = void 0),
          (this.baseline = void 0),
          { last: !0 }
        );
      },
      abandon: () => {
        if (r) return;
        if (((r = !0), this.holders--, this.holders === 0))
          ((this.tiers = o?.tiers), (this.lingering = o?.lingering), (this.baseline = void 0));
      }
    };
  }
  whileLive(e) {
    let t = this.tiers,
      o = this.lingering;
    ((this.tiers = void 0), (this.lingering = void 0));
    try {
      return e();
    } finally {
      ((this.tiers = t), (this.lingering = o));
    }
  }
  baselineTier(e) {
    return this.baseline?.get(e);
  }
  differingTiers(e) {
    return this.baseline === void 0 ? [] : Pr(this.baseline, e);
  }
  rebaseline(e, t) {
    if (this.baseline === void 0) return;
    let o = new Map(this.baseline);
    for (let r of t) {
      let i = e.get(r);
      if (i === void 0) o.delete(r);
      else o.set(r, i);
    }
    this.baseline = o;
  }
  linger(e, t) {
    if (this.holders === 0) ((this.tiers = e), (this.lingering = t), (this.baseline = void 0));
  }
  isHeld() {
    return this.holders > 0;
  }
}
function wYt(e) {
  return e !== null && Object.keys(e).length === 0 ? null : e;
}
function Ft(e) {
  return {
    ...e,
    settings: wYt(e.settings),
    unfiltered: wYt(e.unfiltered),
    ...(e.legacy !== void 0 && { legacy: wYt(e.legacy) })
  };
}
function Pr(e, t) {
  return [...e.keys(), ...[...t.keys()].filter((o) => !e.has(o))].filter((o) => {
    let r = e.get(o),
      i = t.get(o);
    return !wn(r && Ft(r), i && Ft(i));
  });
}
var ats = ["forceLoginOrgUUID", "forceLoginMethod", "forceLoginGatewayUrl"];
class Dxe {
  mergedSettings = null;
  perSource = new Map();
  parsedFiles = new Map();
  managedDocumentLinks = new te();
  managedFileProtections = new ne();
  folderListings = new Map();
  managedFileReads = new Map();
  primedFiles = new Set();
  policyWalks = 0;
  walkedFolders = new Map();
  policy = {};
  lastPolicyEnvComposition = null;
  isLoadingFromDisk = !1;
  autoModeUntrustedSourceWarned = !1;
  changed = De();
  internalWrites = new Map();
  enabledSources;
  inlineFlagParse;
  repoTierFreeze = new oe();
  hookedMerge = It();
  pluginBase;
  epoch = 0;
  systemSpaceServingLogged = !1;
  systemAttestationContradicted = !1;
  backendReadResetTail = Promise.resolve();
  backgroundWorkTail = Promise.resolve();
  invalidated = De();
  pluginBaseLoaded = !1;
  primer;
  lastSeededUserLayer;
  localStoreProbes = new Dt();
  retained = new Map();
  retainedListings = new Map();
  setPluginBase(e) {
    ((this.pluginBase = e), (this.pluginBaseLoaded = !0));
  }
  clearPluginBase() {
    this.pluginBase = void 0;
  }
  invalidateAll(e) {
    if (
      (this.epoch++,
      (this.mergedSettings = null),
      this.perSource.clear(),
      this.parsedFiles.clear(),
      this.managedDocumentLinks.clearWalk(),
      this.managedFileProtections.clear(),
      this.primedFiles.clear(),
      (this.policyWalks = 0),
      this.walkedFolders.clear(),
      this.folderListings.clear(),
      (this.policy = {}),
      e?.userLayer === "retain" && z() && this.primer !== void 0)
    ) {
      for (let [t, o] of this.retained)
        (this.parsedFiles.set(t, o.parsed), this.primedFiles.add(t));
      for (let [t, o] of this.retainedListings) this.folderListings.set(t, o.names);
    } else (this.retained.clear(), this.retainedListings.clear());
    this.invalidated.emit();
  }
  invalidatePolicyLayer() {
    ((this.mergedSettings = null), this.perSource.delete("policySettings"), (this.policy = {}));
  }
  onInvalidate(e) {
    return this.invalidated.subscribe(e);
  }
  seedParsedFile(e, t, o, r) {
    if (r !== this.epoch) return !1;
    let i = this.parsedFiles.get(e),
      s = i !== void 0 && re(i, o),
      a = !s,
      l = s ? i : o;
    if ((this.parsedFiles.set(e, l), t === "userSettings"))
      this.lastSeededUserLayer = { path: e, parsed: l };
    if (a || this.primedFiles.has(e)) this.primedFiles.add(e);
    let d = this.retained.get(e);
    if (d !== void 0) d.parsed = l;
    if (a) this.dropDerivedCaches(t);
    return !0;
  }
  walkReadDiffers(e, t) {
    let o = this.parsedFiles.get(e);
    return o !== void 0 && !this.primedFiles.has(e) && !wn(o, t);
  }
  unseedParsedFile(e, t, o) {
    if (o !== this.epoch) return;
    if (
      (this.retained.delete(e),
      !this.primedFiles.has(e) || (t === "policySettings" && this.policyWalks > 0))
    )
      return;
    (this.primedFiles.delete(e), this.parsedFiles.delete(e), this.dropDerivedCaches(t));
  }
  dropDerivedCaches(e) {
    if ((this.perSource.delete(e), (this.mergedSettings = null), e === "policySettings"))
      this.policy = {};
  }
  primedFolderListing(e) {
    return z() ? this.folderListings.get(e) : void 0;
  }
  folderListingForPolicyWalk(e) {
    if (!z()) return;
    this.policyWalks++;
    let t = this.folderListings.get(e);
    if (!this.walkedFolders.has(e) || t !== void 0) this.walkedFolders.set(e, t ?? null);
    return t;
  }
  noteWalkListing(e, t) {
    if (!z()) return;
    this.walkedFolders.set(e, t);
  }
  get policyWalkCount() {
    return this.policyWalks;
  }
  policyInstallVerdict(e, t, o) {
    let r = this.parsedFiles.get(e);
    if (r === void 0 || re(r, t)) return "install";
    if (!this.primedFiles.has(e)) return "raced";
    if (this.policyWalks === 0) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  folderInstallVerdict(e, t, o) {
    if (!this.walkedFolders.has(e)) return this.hasParsedDropInOutside(e, t) ? "raced" : "install";
    let r = this.walkedFolders.get(e);
    if (r !== null && r !== void 0 && wn(r, t)) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  seedFolderListing(e, t, o) {
    if (o !== this.epoch) return !1;
    let r = this.folderListings.get(e);
    this.folderListings.set(e, t);
    let i = this.retainedListings.get(e);
    if (i !== void 0) i.names = t;
    if (r !== void 0 && !wn(r, t)) this.dropDerivedCaches("policySettings");
    return !0;
  }
  walkReadManagedFileIn(e, t) {
    for (let [o, r] of this.parsedFiles)
      if (
        !o.includes("\x00") &&
        !this.primedFiles.has(o) &&
        (r.settings !== null || r.errors.length > 0) &&
        (o === e || Et(o) === t)
      )
        return !0;
    return !1;
  }
  walkRead(e) {
    return this.parsedFiles.has(e) && !this.primedFiles.has(e);
  }
  hasParsedDropInOutside(e, t) {
    for (let o of this.parsedFiles.keys())
      if (!o.includes("\x00") && !this.primedFiles.has(o) && Et(o) === e && !t.includes(Mr(o)))
        return !0;
    return !1;
  }
  clearFolderListing(e, t) {
    if (t !== this.epoch) return;
    if ((this.retainedListings.delete(e), !this.folderListings.has(e) || this.walkedFolders.has(e)))
      return;
    (this.folderListings.delete(e), this.dropDerivedCaches("policySettings"));
  }
  retainLayer(e, t) {
    let o = this.parsedFiles.get(e),
      r = { parsed: o !== void 0 && re(o, t) ? o : t };
    return (
      this.retained.set(e, r),
      () => {
        if (this.retained.get(e) === r) this.retained.delete(e);
      }
    );
  }
  dropRetainedLayer(e) {
    this.retained.delete(e);
  }
  retainFolderListing(e, t) {
    let o = { names: t };
    return (
      this.retainedListings.set(e, o),
      () => {
        if (this.retainedListings.get(e) === o) this.retainedListings.delete(e);
      }
    );
  }
}
class Dt {
  ownerUidsByRoot = new Map();
  realHomeDir = void 0;
  canonicalRootOwnerUids(e, t) {
    let o = this.ownerUidsByRoot.get(e);
    if (o !== void 0) return o;
    let r = t(e);
    return (this.ownerUidsByRoot.set(e, r), r);
  }
  hasCanonicalRootOwnerUids(e) {
    return this.ownerUidsByRoot.has(e);
  }
  primeCanonicalRootOwnerUids(e, t) {
    if (this.ownerUidsByRoot.has(e)) return !1;
    return (this.ownerUidsByRoot.set(e, t), !0);
  }
  clearCanonicalRootOwnerUids() {
    this.ownerUidsByRoot.clear();
  }
  normalizedRealHomeDir(e) {
    return ((this.realHomeDir ??= e()), this.realHomeDir);
  }
  clearNormalizedRealHomeDir() {
    this.realHomeDir = void 0;
  }
}
var $9r = new W(() => new Dxe());
function re(e, t) {
  return wn({ ...e, fileOwner: void 0 }, { ...t, fileOwner: void 0 });
}
function rie() {
  return {
    sent: new Set(),
    rejected: new Set(),
    declaredTools: void 0,
    noChannelTools: void 0,
    turnDeniedTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(),
    surfacedOnWire: new Set(),
    definedByValue: new Set(),
    inlineToolsRefusal: { rejectedHeader: void 0, announcementsByName: new Set() },
    advisorHeld: void 0,
    wireShapeSeed: void 0,
    webSearchHistoryRejected: !1,
    mediaItemCap: void 0,
    refusedToolSchemas: new Map(),
    systemMessagesAcceptedBy: new Set(),
    nameOnlyEntries: { held: new Set(), refused: !1, reported: void 0 }
  };
}
function pT(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: void 0,
    noChannelTools: void 0,
    turnDeniedTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    refusedToolSchemas: new Map(e.refusedToolSchemas),
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: { ...e.nameOnlyEntries, held: new Set(e.nameOnlyEntries.held) }
  };
}
function uCt(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: e.declaredTools,
    noChannelTools: e.noChannelTools,
    turnDeniedTools: e.turnDeniedTools,
    declaredToolsDecided: e.declaredToolsDecided,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    refusedToolSchemas: new Map(e.refusedToolSchemas),
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: { ...e.nameOnlyEntries, held: new Set(e.nameOnlyEntries.held) }
  };
}
function bdr(e) {
  (F9r(e),
    e.nameOnlyEntries.held.clear(),
    (e.nameOnlyEntries.refused = !1),
    (e.nameOnlyEntries.reported = void 0));
}
function F9r(e) {
  ((e.declaredTools = void 0), (e.noChannelTools = void 0), (e.declaredToolsDecided = !1));
}
function fCt(e) {
  e.systemMessagesAcceptedBy.clear();
  let t = e.wireShapeSeed;
  if (t === void 0) return;
  for (let o of t.sent) e.sent.delete(o);
  for (let o of t.rejected) e.rejected.delete(o);
  e.wireShapeSeed = void 0;
}
function lts(e, t) {
  for (let o of t.sent) iF(e, o);
  for (let o of t.rejected) _g(e, o);
  e.wireShapeSeed = t;
}
function pCt(e) {
  e.advisorHeld = void 0;
}
function Sdr(e) {
  let { rejectedHeader: t, announcementsByName: o } = e.inlineToolsRefusal;
  if (t !== void 0) (e.rejected.delete(t), (e.inlineToolsRefusal.rejectedHeader = void 0));
  for (let r of o) e.nameOnlyAnnouncements.delete(r);
  o.clear();
}
function Wpi(e) {
  return ((e.advisorHeld = void 0), e);
}
function mCt(e) {
  e.declaredToolsDecided = !0;
}
function Q(e) {
  let t = rie();
  if (
    ((t.declaredTools = e.declaredTools),
    (t.noChannelTools = e.noChannelTools),
    (t.turnDeniedTools = e.turnDeniedTools),
    (t.declaredToolsDecided = e.declaredToolsDecided),
    (t.advisorHeld = e.advisorHeld),
    e.wireShapeSeed !== void 0)
  )
    lts(t, e.wireShapeSeed);
  let { rejectedHeader: o, announcementsByName: r } = e.inlineToolsRefusal;
  if (o !== void 0) dts(t, o);
  (cts(t, r),
    (t.webSearchHistoryRejected = e.webSearchHistoryRejected),
    (t.mediaItemCap = e.mediaItemCap));
  for (let [i, s] of e.refusedToolSchemas) t.refusedToolSchemas.set(i, s);
  return (
    (t.nameOnlyEntries.refused = e.nameOnlyEntries.refused),
    (t.nameOnlyEntries.reported = e.nameOnlyEntries.reported),
    t
  );
}
function dts(e, t) {
  (_g(e, t), (e.inlineToolsRefusal.rejectedHeader = t));
}
function cts(e, t) {
  for (let o of t)
    (e.inlineToolsRefusal.announcementsByName.add(o), e.nameOnlyAnnouncements.add(o));
}
function uTn(e, t) {
  if (e.declaredTools === void 0) e.declaredTools = t;
  mCt(e);
}
function wdr(e) {
  return e.definedByValue.size === 0
    ? e.surfacedOnWire
    : new Set([...e.surfacedOnWire, ...e.definedByValue]);
}
function iF(e, t) {
  if (!e.rejected.has(t)) e.sent.add(t);
}
function pk(e, t) {
  return e.sent.has(t) && !e.rejected.has(t);
}
function _g(e, t) {
  (e.sent.delete(t), e.rejected.add(t));
}
function Kp(e, t) {
  return e.rejected.has(t);
}
function gCt(e, t) {
  (e.sent.delete(t), e.rejected.delete(t));
}
function Gpi(e) {
  e.webSearchHistoryRejected = !0;
}
function vdr(e) {
  e.webSearchHistoryRejected = !1;
}
function U9r(e, t) {
  return e.mediaItemCap?.model === t ? e.mediaItemCap : void 0;
}
function B9r(e, t) {
  e.mediaItemCap = t;
}
function hCt(e) {
  e.mediaItemCap = void 0;
}
function Edr(e) {
  e.refusedToolSchemas.clear();
}
class ie {
  spawner = void 0;
  pairings = new Map();
  mainEnsureInFlight = !1;
  mainSlotBlocked = !1;
}
class se {
  #e = rie();
  #t = void 0;
  #n;
  stickyBetas() {
    return this.#e;
  }
  unlatchStickyBetas() {
    this.#e = Q(this.#e);
  }
  atisLatch() {
    return this.#t;
  }
  replaceAtisLatch(e) {
    ((this.#t = e), this.#n?.(e));
  }
  watchAtisLatch(e) {
    this.#n = e;
  }
  reset() {
    ((this.#e = rie()), (this.#t = void 0));
  }
}
var yCt = { inputTokens: 0, outputTokens: 0, cacheReadInputTokens: 0, cacheCreationInputTokens: 0 };
function M(e) {
  let t = Object.create(null);
  return Object.assign(t, e);
}
function Ht(e) {
  let t = M();
  for (let [o, r] of Object.entries(e)) t[o] = { ...r };
  return t;
}
class ae {
  #e = 0;
  #t = 0;
  #n = 0;
  #o = 0;
  #r = Date.now();
  #s = void 0;
  #i = 0;
  #d = 0;
  #u = 0;
  #l = yCt;
  #c = 0;
  #p = yCt;
  #a = !1;
  #g = 0;
  #f = M();
  #m = void 0;
  #y = null;
  #S = null;
  #h = null;
  totalCostUSD() {
    return this.#e;
  }
  restoredCostUSD() {
    return this.#u;
  }
  restoredTokens() {
    return this.#l;
  }
  sideQueryCostUSD() {
    return this.#c;
  }
  totalAPIDuration() {
    return this.#t;
  }
  totalAPIDurationWithoutRetries() {
    return this.#n;
  }
  totalToolDuration() {
    return this.#o;
  }
  totalDuration() {
    return Math.max(0, Date.now() - this.#r);
  }
  sessionStartTime() {
    return this.#s ?? this.#r;
  }
  totalLinesAdded() {
    return this.#i;
  }
  totalLinesRemoved() {
    return this.#d;
  }
  hasUnknownModelCost() {
    return this.#a;
  }
  safetyStops() {
    return this.#g;
  }
  modelUsage() {
    return this.#f;
  }
  usageForModel(e) {
    return this.#f[e];
  }
  trackUsageSinceLastResult() {
    this.#m ??= M();
  }
  usageSinceLastResult() {
    return this.#m;
  }
  takeUsageSinceLastResult() {
    let e = this.#m;
    if (e !== void 0) this.#m = M();
    return e;
  }
  totalInputTokens() {
    return this.#v("inputTokens");
  }
  totalOutputTokens() {
    return this.#v("outputTokens");
  }
  totalCacheReadInputTokens() {
    return this.#v("cacheReadInputTokens");
  }
  totalCacheCreationInputTokens() {
    return this.#v("cacheCreationInputTokens");
  }
  totalWebSearchRequests() {
    return this.#v("webSearchRequests");
  }
  #v(e) {
    let t = 0;
    for (let o of Object.values(this.#f)) t += o[e];
    return t;
  }
  recordApiDuration(e, t) {
    ((this.#t += e), (this.#n += t));
  }
  spentTokens() {
    return this.#p;
  }
  recordSpentTokens(e) {
    let t = this.#p;
    this.#p = {
      inputTokens: t.inputTokens + e.inputTokens,
      outputTokens: t.outputTokens + e.outputTokens,
      cacheReadInputTokens: t.cacheReadInputTokens + e.cacheReadInputTokens,
      cacheCreationInputTokens: t.cacheCreationInputTokens + e.cacheCreationInputTokens
    };
  }
  recordCost(e, t, o) {
    ((this.#f[o] = t), (this.#e += e));
  }
  recordSideQueryCost(e) {
    if (Number.isFinite(e) && e >= 0) this.#c += e;
  }
  recordToolDuration(e) {
    this.#o += e;
  }
  recordLinesChanged(e, t) {
    ((this.#i += e), (this.#d += t));
  }
  markUnknownModelCost() {
    this.#a = !0;
  }
  recordSafetyStop() {
    this.#g += 1;
  }
  zeroDurationsAndCostForTests() {
    ((this.#t = 0), (this.#n = 0), (this.#e = 0), (this.#u = 0));
  }
  restartClock() {
    ((this.#r = Date.now()), this.anchorLogicalStart(void 0));
  }
  anchorLogicalStart(e) {
    this.#s = e === void 0 ? void 0 : Math.min(e, this.#r);
  }
  restore(
    {
      totalCostUSD: e,
      totalAPIDuration: t,
      totalAPIDurationWithoutRetries: o,
      totalToolDuration: r,
      totalLinesAdded: i,
      totalLinesRemoved: s,
      lastDuration: a,
      startTime: l,
      modelUsage: d,
      hasUnknownModelCost: p
    },
    y
  ) {
    if (
      ((this.#h = y),
      (this.#e = e),
      (this.#u = e),
      (this.#t = t),
      (this.#n = o),
      (this.#o = r),
      (this.#i = i),
      (this.#d = s),
      (this.#a = p ?? !1),
      d)
    )
      this.#f = M(d);
    if (
      ((this.#l = {
        inputTokens: this.totalInputTokens(),
        outputTokens: this.totalOutputTokens(),
        cacheReadInputTokens: this.totalCacheReadInputTokens(),
        cacheCreationInputTokens: this.totalCacheCreationInputTokens()
      }),
      a !== void 0)
    )
      this.#r = Date.now() - a;
    this.anchorLogicalStart(l);
  }
  registerSaver(e) {
    this.#y = e;
  }
  runSaver(e, t) {
    (this.#y ?? (t ? t.#y : null))?.(e);
  }
  registerTranscriptRecorder(e) {
    this.#S = e;
  }
  runTranscriptRecorder(e, t, o) {
    (this.#S ?? (o ? o.#S : null))?.(e, t);
  }
  snapshot() {
    return {
      ownerSessionId: this.#h,
      totalCostUSD: this.#e,
      totalAPIDuration: this.#t,
      totalAPIDurationWithoutRetries: this.#n,
      totalToolDuration: this.#o,
      startTime: this.#r,
      sessionLogicalStartTime: this.#s,
      totalLinesAdded: this.#i,
      totalLinesRemoved: this.#d,
      restoredCostUSD: this.#u,
      restoredTokens: this.#l,
      hasUnknownModelCost: this.#a,
      safetyStops: this.#g,
      modelUsage: Ht(this.#f)
    };
  }
  restoreSnapshot(e) {
    ((this.#h = e.ownerSessionId),
      (this.#e = e.totalCostUSD),
      (this.#t = e.totalAPIDuration),
      (this.#n = e.totalAPIDurationWithoutRetries),
      (this.#o = e.totalToolDuration),
      (this.#r = e.startTime),
      (this.#s = e.sessionLogicalStartTime),
      (this.#i = e.totalLinesAdded),
      (this.#d = e.totalLinesRemoved),
      (this.#u = e.restoredCostUSD),
      (this.#l = e.restoredTokens),
      (this.#a = e.hasUnknownModelCost),
      (this.#g = e.safetyStops),
      (this.#f = Ht(e.modelUsage)));
  }
  claim(e) {
    this.#h ??= e;
  }
  scopeTo(e) {
    this.#h = e;
  }
  ownerSessionId() {
    return this.#h;
  }
  belongsTo(e) {
    return this.#h === e;
  }
  reset(e) {
    ((this.#h = e),
      (this.#e = 0),
      (this.#u = 0),
      (this.#l = yCt),
      (this.#t = 0),
      (this.#n = 0),
      (this.#o = 0),
      (this.#r = Date.now()),
      this.anchorLogicalStart(void 0),
      (this.#i = 0),
      (this.#d = 0),
      (this.#a = !1),
      (this.#g = 0),
      (this.#f = M()));
  }
}
class le {
  #e = new Set();
  #t = new Map();
  consentSessionFallback(e) {
    return this.#e.has(e);
  }
  replaceConsentSessionFallback(e, t) {
    if (t) this.#e.add(e);
    else this.#e.delete(e);
  }
  sessionConsentKey(e) {
    return this.#t.get(e) ?? null;
  }
  replaceSessionConsentKey(e, t) {
    if (t === null) this.#t.delete(e);
    else this.#t.set(e, t);
  }
  reset() {
    (this.#e.clear(), this.#t.clear());
  }
}
class de {
  #e = { registeredHooks: null };
  #t = void 0;
  #n = void 0;
  holder() {
    return this.#e;
  }
  mainThreadAgentType() {
    return this.#t;
  }
  replaceMainThreadAgentType(e) {
    this.#t = e;
  }
  mainThreadAgentHooks() {
    return this.#n;
  }
  replaceMainThreadAgentHooks(e) {
    this.#n = e;
  }
  reset() {
    ((this.#e = { registeredHooks: null }), (this.#t = void 0), (this.#n = void 0));
  }
}
class ue {
  #e = new Map();
  skills() {
    return this.#e;
  }
  lookup(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
  forget(e) {
    this.#e.delete(e);
  }
  forgetAll() {
    this.#e.clear();
  }
  reset() {
    this.#e = new Map();
  }
}
class ce {
  #e = [];
  #t;
  #n;
  #o;
  #r;
  approvedServers() {
    return this.#e;
  }
  approveServers(e, t) {
    for (let o of t)
      if (!this.#e.some((r) => r.name === o && r.workspaceKey === e))
        this.#e.push({ name: o, workspaceKey: e });
  }
  registerClientsAccessor(e) {
    this.#t = e;
  }
  acquireClientsAccessor(e) {
    if (this.#t) return () => {};
    return (
      (this.#t = e),
      () => {
        if (this.#t === e) this.#t = void 0;
      }
    );
  }
  clientsFromAccessor() {
    return this.#t?.();
  }
  registerConnectedClientWiring(e) {
    this.#n = e;
  }
  connectedClientWiring() {
    return this.#n;
  }
  registerToolsSwapper(e) {
    this.#o = e;
  }
  acquireToolsSwapper(e) {
    if (this.#o) return () => {};
    return (
      (this.#o = e),
      () => {
        if (this.#o === e) this.#o = void 0;
      }
    );
  }
  swapServerTools(e, t, o) {
    if (!this.#o) return !1;
    return this.#o(e, t, o);
  }
  registerConnections(e) {
    this.#r = e;
  }
  acquireConnections(e) {
    if (this.#r) return () => {};
    return (
      (this.#r = e),
      () => {
        if (this.#r === e) this.#r = void 0;
      }
    );
  }
  connections() {
    return this.#r;
  }
  reset() {
    ((this.#e = []), (this.#t = void 0));
  }
}
class pe {
  #e = void 0;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #s = void 0;
  #i = !1;
  #d = !1;
  #u = void 0;
  #l = !1;
  #c = void 0;
  #p = void 0;
  #a = void 0;
  mainLoopModelOverride() {
    return this.#e;
  }
  overrideMainLoopModel(e) {
    this.#e = e;
  }
  mainLoopEffortState() {
    return this.#t;
  }
  replaceMainLoopEffortState(e) {
    this.#t = e;
  }
  initialMainLoopModel() {
    return this.#n;
  }
  replaceInitialMainLoopModel(e) {
    this.#n = e;
  }
  initialModelSettingLayer() {
    return this.#o;
  }
  replaceInitialModelSettingLayer(e) {
    this.#o = e;
  }
  resolvedOrgDefault() {
    return this.#r;
  }
  replaceResolvedOrgDefault(e) {
    this.#r = e;
  }
  initialEnvDefaultModel() {
    return this.#s;
  }
  replaceInitialEnvDefaultModel(e) {
    this.#s = e;
  }
  refusalFallbackOccurred() {
    return this.#i;
  }
  markRefusalFallbackOccurred(e) {
    ((this.#i = !0), (this.#u ??= e));
  }
  refusalFallbackHeaderArmed() {
    return this.#d;
  }
  armRefusalFallbackHeader(e) {
    ((this.#d = !0), (this.#u ??= e));
  }
  refusalFallbackLatchOriginRequestId() {
    return this.#u;
  }
  silentLaneServerArmed() {
    return this.#l;
  }
  armSilentLaneFromServer() {
    this.#l = !0;
  }
  forgetRefusalFallbackOccurred() {
    ((this.#i = !1), (this.#d = !1), (this.#l = !1), (this.#u = void 0));
  }
  refusalFallbackModelLatch() {
    return this.#c;
  }
  replaceRefusalFallbackModelLatch(e, t = "superseded") {
    if (this.#c?.carriedEffort !== void 0 && e?.carriedEffort === void 0) this.#p = t;
    this.#c = e;
  }
  unlatchRefusalFallbackModel(e) {
    this.replaceRefusalFallbackModelLatch(void 0, e);
  }
  takeCarriedEffortEnd() {
    let e = this.#p;
    return ((this.#p = void 0), e);
  }
  availabilityFallbackChain() {
    return this.#a;
  }
  replaceAvailabilityFallbackChain(e) {
    this.#a = e;
  }
  reset() {
    ((this.#e = void 0),
      (this.#t = void 0),
      (this.#n = void 0),
      (this.#o = void 0),
      (this.#r = void 0),
      (this.#s = void 0),
      (this.#i = !1),
      (this.#d = !1),
      (this.#l = !1),
      (this.#u = void 0),
      (this.#c = void 0),
      (this.#p = void 0),
      (this.#a = void 0));
  }
}
class ge {
  #e = new Map();
  #t = 0;
  #n = void 0;
  sections() {
    return this.#e;
  }
  recordSection(e, t) {
    this.#e.set(e, t);
  }
  forgetAllSections() {
    this.#e.clear();
  }
  noteInvalidation(e = "other") {
    ((this.#t += 1), (this.#n = e));
  }
  epoch() {
    return this.#t;
  }
  lastInvalidationReason() {
    return this.#n;
  }
  reset() {
    this.#e = new Map();
  }
}
class fe {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #s = 0;
  #i = null;
  #d = void 0;
  #u = 0;
  #l = null;
  #c = null;
  #p = null;
  #a = null;
  #g = null;
  #f = !1;
  #m = null;
  #y = null;
  #S = !1;
  lastAPIRequest() {
    return this.#e;
  }
  replaceLastAPIRequest(e) {
    this.#e = e;
  }
  lastCancelledAPIMessageId() {
    return this.#t;
  }
  replaceLastCancelledAPIMessageId(e) {
    this.#t = e;
  }
  lastAPIRequestMessages() {
    return this.#n;
  }
  replaceLastAPIRequestMessages(e) {
    this.#n = e;
  }
  lastClassifierRequests() {
    return this.#o;
  }
  replaceLastClassifierRequests(e) {
    this.#o = e;
  }
  promptId() {
    return this.#r;
  }
  replacePromptId(e) {
    this.#r = e;
  }
  promptIndex() {
    return this.#s;
  }
  replacePromptIndex(e) {
    this.#s = e;
  }
  incrementPromptIndex() {
    return (this.#s++, this.#s);
  }
  lastPersonPrompt() {
    return this.#i;
  }
  replaceLastPersonPrompt(e) {
    this.#i = e;
  }
  lastMainRequestId() {
    return this.#d;
  }
  replaceLastMainRequestId(e) {
    if (((this.#d = e), e === void 0)) this.#u += 1;
  }
  mainChainReleaseCount() {
    return this.#u;
  }
  lastMainThreadCacheTtlMs() {
    return this.#l;
  }
  replaceLastMainThreadCacheTtlMs(e, t, o = !1) {
    ((this.#l = e),
      (this.#a = Date.now()),
      (this.#p = {
        ttlMs: e,
        model: t,
        requestAt: this.#a,
        askedAt: o ? (this.#p?.askedAt ?? this.#a) : this.#a
      }),
      (this.#g = this.#a),
      (this.#f = !0));
  }
  isLastMainThreadAskLive(e, t) {
    let o = this.#p;
    return (
      o !== null &&
      o.requestAt === this.#a &&
      o.ttlMs === e &&
      o.model === t &&
      Date.now() - o.askedAt < e
    );
  }
  adjustLastMainThreadCacheTtlMs(e) {
    this.#l = e;
  }
  recordLastMainThreadCacheRenewal(e) {
    if (this.#a !== null)
      this.#c = {
        requestAt: this.#a,
        at: Math.max(e, this.lastMainThreadCacheRenewedAt() ?? -1 / 0)
      };
  }
  lastMainThreadCacheRenewedAt() {
    let e = this.#c;
    return e !== null && e.requestAt === this.#a ? e.at : null;
  }
  lastLiveMainThreadRequestAt() {
    return this.#g;
  }
  lastMainThreadRequestAt() {
    return this.#a;
  }
  mainThreadRequestedInProcess() {
    return this.#f;
  }
  recordMainThreadTurnStart() {
    this.#f = !0;
  }
  replaceLastMainThreadRequest(e, t) {
    ((this.#a = e), (this.#l = t));
  }
  lastMainThreadContextTokens() {
    return this.#m;
  }
  replaceLastMainThreadContextTokens(e) {
    this.#m = e;
  }
  stageResumeSeed(e) {
    this.#h = e;
  }
  applyResumeSeed(e) {
    ((this.#h = null), (this.#l = e.ttlMs), (this.#a = e.requestAt), (this.#m = e.contextTokens));
  }
  #h = null;
  clearLastMainThreadRequest(e) {
    let t = e !== void 0 && this.#h?.sessionId === e ? this.#h : null;
    ((this.#h = null),
      (this.#l = t?.ttlMs ?? null),
      (this.#a = t?.requestAt ?? null),
      (this.#m = t?.contextTokens ?? null),
      (this.#g = null),
      (this.#f = !1));
  }
  lastApiCompletionTimestamp() {
    return this.#y;
  }
  replaceLastApiCompletionTimestamp(e) {
    this.#y = e;
  }
  pendingPostCompaction() {
    return this.#S;
  }
  replacePendingPostCompaction(e) {
    this.#S = e;
  }
  reset() {
    ((this.#e = null),
      (this.#t = null),
      (this.#n = null),
      (this.#o = null),
      (this.#r = null),
      (this.#s = 0),
      (this.#i = null),
      (this.#d = void 0),
      (this.#u += 1),
      (this.#l = null),
      (this.#a = null),
      (this.#g = null),
      (this.#f = !1),
      (this.#m = null),
      (this.#h = null),
      (this.#y = null),
      (this.#S = !1));
  }
}
class he {
  #e = [];
  #t = Object.create(null);
  #n = null;
  #o = void 0;
  #r = 0;
  #s = !1;
  #i = 0;
  changed = De();
  pendingLoopWakeup = De();
  tasks() {
    return this.#e;
  }
  schedule(e) {
    this.#e.push(e);
  }
  replaceTasks(e) {
    this.#e = e;
  }
  chainStartedAt(e) {
    return this.#t[e];
  }
  recordChainStart(e, t) {
    this.#t[e] = t;
  }
  forgetChainStart(e) {
    delete this.#t[e];
  }
  tickInFlightPrompt() {
    return this.#n;
  }
  tickInFlightPlugin() {
    return this.#o;
  }
  replaceTickInFlightPrompt(e, t) {
    ((this.#n = e), (this.#o = e === null ? void 0 : t));
  }
  consecutiveKeepalives() {
    return this.#r;
  }
  replaceConsecutiveKeepalives(e) {
    this.#r = e;
  }
  ended() {
    return this.#s;
  }
  replaceEnded(e) {
    this.#s = e;
  }
  wakeFires() {
    return this.#i;
  }
  recordWakeFire() {
    this.#i++;
  }
  resetWakeFires() {
    this.#i = 0;
  }
  reset() {
    ((this.#e = []),
      (this.#t = Object.create(null)),
      (this.#n = null),
      (this.#o = void 0),
      (this.#r = 0),
      (this.#s = !1),
      (this.#i = 0));
  }
}
class me {
  #e = !1;
  #t = !1;
  #n = !1;
  #o = !1;
  #r = !1;
  #s = !1;
  #i = !1;
  #d = !1;
  #u = !1;
  #l = !1;
  #c = !1;
  #p = void 0;
  #a = !1;
  #g = void 0;
  #f = !1;
  #m = !1;
  #y = null;
  #S = null;
  #h = null;
  #v = !1;
  #b = null;
  #k = !1;
  #x = !1;
  #C = !1;
  #T = !1;
  #R = !1;
  #P = void 0;
  #A = void 0;
  #w = void 0;
  #M = null;
  #L = null;
  onboardingShownThisSession() {
    return this.#e;
  }
  replaceOnboardingShownThisSession(e) {
    this.#e = e;
  }
  lspRecommendationShownThisSession() {
    return this.#t;
  }
  replaceLspRecommendationShownThisSession(e) {
    this.#t = e;
  }
  sessionTrustAccepted() {
    return this.#n;
  }
  replaceSessionTrustAccepted(e) {
    this.#n = e;
  }
  homeTrustDialogAccepted() {
    return this.#o;
  }
  replaceHomeTrustDialogAccepted(e) {
    this.#o = e;
  }
  hasExitedPlanMode() {
    return this.#r;
  }
  replaceHasExitedPlanMode(e) {
    this.#r = e;
  }
  needsPlanModeExitAttachment() {
    return this.#s;
  }
  replaceNeedsPlanModeExitAttachment(e) {
    this.#s = e;
  }
  needsAutoModeExitAttachment() {
    return this.#i;
  }
  replaceNeedsAutoModeExitAttachment(e) {
    this.#i = e;
  }
  memoryToggledOff() {
    return this.#d;
  }
  replaceMemoryToggledOff(e) {
    this.#d = e;
  }
  autoMemoryOffThisSession() {
    return this.#u;
  }
  replaceAutoMemoryOffThisSession(e) {
    this.#u = e;
  }
  memoryPausedByCommand() {
    return this.#c;
  }
  replaceMemoryPausedByCommand(e) {
    this.#c = e;
  }
  accountMemorySessionMode() {
    return this.#p;
  }
  replaceAccountMemorySessionMode(e, t = !1) {
    ((this.#p = e), (this.#a = t && e !== void 0));
  }
  accountMemorySessionModeRestored() {
    return this.#a;
  }
  accountMemoryLaunchMode() {
    return this.#g;
  }
  replaceAccountMemoryLaunchMode(e) {
    this.#g = e;
  }
  restoredMemoryPause() {
    return this.#f;
  }
  replaceRestoredMemoryPause(e) {
    this.#f = e;
  }
  restoredAutoMemoryOff() {
    return this.#l;
  }
  replaceRestoredAutoMemoryOff(e) {
    this.#l = e;
  }
  teardownUnwindRequested() {
    return this.#v;
  }
  replaceTeardownUnwindRequested(e) {
    this.#v = e;
  }
  backgroundAutoModeSetupInFlight() {
    return this.#m;
  }
  replaceBackgroundAutoModeSetupInFlight(e) {
    this.#m = e;
  }
  deferredToolStubGateLatch() {
    return this.#y;
  }
  replaceDeferredToolStubGateLatch(e) {
    this.#y = e;
  }
  verifySkillRolloutGateLatch() {
    return this.#S;
  }
  replaceVerifySkillRolloutGateLatch(e) {
    this.#S = e;
  }
  commitSkillRolloutGateLatch() {
    return this.#h;
  }
  replaceCommitSkillRolloutGateLatch(e) {
    this.#h = e;
  }
  memoryToolsShapeLatch() {
    return this.#b;
  }
  replaceMemoryToolsShapeLatch(e) {
    this.#b = e;
  }
  proposeGoalAvailabilityLogged() {
    return this.#k;
  }
  markProposeGoalAvailabilityLogged() {
    this.#k = !0;
  }
  activeRoutine() {
    return this.#A;
  }
  replaceActiveRoutine(e) {
    this.#A = e;
  }
  inheritedTeamName() {
    return this.#w;
  }
  replaceInheritedTeamName(e) {
    this.#w = e;
  }
  teleportedSessionInfo() {
    return this.#M;
  }
  replaceTeleportedSessionInfo(e) {
    this.#M = e;
  }
  markFirstTeleportMessageLogged() {
    if (this.#M) this.#M.hasLoggedFirstMessage = !0;
  }
  cachedClaudeMdContent() {
    return this.#L;
  }
  replaceCachedClaudeMdContent(e) {
    this.#L = e;
  }
  accountSkillsSyncEnabled() {
    return this.#x;
  }
  replaceAccountSkillsSyncEnabled(e) {
    this.#x = e;
  }
  skillsSyncVetoed() {
    return this.#C;
  }
  replaceSkillsSyncVetoed(e) {
    this.#C = e;
  }
  accountPluginsSyncEnabled() {
    return this.#T;
  }
  replaceAccountPluginsSyncEnabled(e) {
    this.#T = e;
  }
  pluginsSyncVetoed() {
    return this.#R;
  }
  replacePluginsSyncVetoed(e) {
    this.#R = e;
  }
  armPendingContextCompacted(e) {
    this.#P = e;
  }
  consumePendingContextCompacted() {
    let e = this.#P;
    return ((this.#P = void 0), e);
  }
  forgetPendingContextCompacted() {
    this.#P = void 0;
  }
  reset() {
    ((this.#x = !1),
      (this.#C = !1),
      (this.#T = !1),
      (this.#R = !1),
      (this.#e = !1),
      (this.#t = !1),
      (this.#n = !1),
      (this.#o = !1),
      (this.#r = !1),
      (this.#s = !1),
      (this.#i = !1),
      (this.#d = !1),
      (this.#u = !1),
      (this.#c = !1),
      (this.#p = void 0),
      (this.#a = !1),
      (this.#g = void 0),
      (this.#f = !1),
      (this.#l = !1),
      (this.#v = !1),
      (this.#m = !1),
      (this.#y = null),
      (this.#S = null),
      (this.#h = null),
      (this.#b = null),
      (this.#k = !1),
      (this.#A = void 0),
      (this.#w = void 0),
      (this.#M = null),
      (this.#L = null),
      (this.#P = void 0));
  }
}
function Bt() {
  return {
    messagesArriving: 0,
    lastInLine: Promise.resolve(),
    gaveUpOn: void 0,
    besideLine: 0,
    lastBesideLine: Promise.resolve(),
    gaveUpOnBeside: void 0,
    pathsArrivingBeside: new Map(),
    toolCallsWaiting: 0,
    pathsArriving: new Map()
  };
}
class Se {
  #e = new Map();
  #t = new Map();
  #n = null;
  #o = new Map();
  #r = new Set();
  #s = new Set();
  #i = new Set();
  #d = new Set();
  #u = new Set();
  #l = new Set();
  #c = new Set();
  #p = new Set();
  #a = new Set();
  #g = new Set();
  #f = new Map();
  #m = new Map();
  #y = new Map();
  #S;
  #h = { byFileUuid: new Map(), recentPrefetchStarts: [] };
  #v = Bt();
  #b = new Set();
  #k = void 0;
  #x = void 0;
  #C = void 0;
  #T = void 0;
  #R = void 0;
  planSlugCache() {
    return this.#e;
  }
  forgetPlanSlug(e) {
    this.#e.delete(e);
  }
  pendingBranchLinks() {
    return this.#t;
  }
  replacePendingBranchLinks() {
    this.#t = new Map();
  }
  vimSharedState() {
    return this.#n;
  }
  replaceVimSharedState(e) {
    this.#n = e;
  }
  agentColorMap() {
    return this.#o;
  }
  sessionCreatedTeams() {
    return this.#r;
  }
  sessionSpawnedTeammatePanes() {
    return this.#s;
  }
  surfacedHookSpawnFailures() {
    return this.#i;
  }
  bareMcpServerMatchersWarned() {
    return this.#d;
  }
  pendingConversationEditKinds() {
    return this.#u;
  }
  clientTruncatedAssistantIds() {
    return this.#l;
  }
  heldStatelessReplyIds() {
    return this.#c;
  }
  unsupportedThreadKeys() {
    return this.#p;
  }
  pendingPrLinks() {
    return this.#a;
  }
  policyPredicateTelemetryEmitted() {
    return this.#g;
  }
  humanAttachmentDigests() {
    return this.#f;
  }
  inboundAttachmentFiles() {
    return this.#m;
  }
  filesPlacedByName() {
    return this.#y;
  }
  filesPlacedByNameRead() {
    return this.#S;
  }
  setFilesPlacedByNameRead(e) {
    this.#S = e;
  }
  inboundAttachmentDownloads() {
    return this.#h;
  }
  arrivingInboundFiles() {
    return this.#v;
  }
  chromeAvailabilityStagesLogged() {
    return this.#b;
  }
  replaceChromeAvailabilityStagesLogged(e) {
    if (((this.#b = new Set()), e)) this.#k = Date.now();
  }
  chromeAvailabilityAnchorMs() {
    return this.#k;
  }
  pendingGoalIdleCheckin() {
    return this.#x;
  }
  replacePendingGoalIdleCheckin(e) {
    this.#x = e;
  }
  pendingGoalReprompt() {
    return this.#C;
  }
  replacePendingGoalReprompt(e) {
    this.#C = e;
  }
  goalInterruptionStreak() {
    return this.#T;
  }
  replaceGoalInterruptionStreak(e) {
    this.#T = e;
  }
  workerCheckin() {
    return this.#R;
  }
  replaceWorkerCheckin(e) {
    this.#R = e;
  }
  reset() {
    ((this.#e = new Map()),
      (this.#t = new Map()),
      (this.#n = null),
      (this.#o = new Map()),
      (this.#r = new Set()),
      (this.#s = new Set()),
      (this.#i = new Set()),
      (this.#d = new Set()),
      (this.#u = new Set()),
      (this.#l = new Set()),
      (this.#c = new Set()),
      (this.#p = new Set()),
      (this.#a = new Set()),
      (this.#g = new Set()),
      (this.#f = new Map()),
      (this.#m = new Map()),
      (this.#y = new Map()),
      (this.#S = void 0));
    for (let e of this.#h.byFileUuid.values()) (clearTimeout(e.expiry), e.abort.abort());
    ((this.#h = { byFileUuid: new Map(), recentPrefetchStarts: [] }),
      (this.#v = Bt()),
      (this.#b = new Set()),
      (this.#k = void 0),
      clearTimeout(this.#x),
      (this.#x = void 0),
      clearTimeout(this.#C),
      (this.#C = void 0),
      (this.#T = void 0),
      clearInterval(this.#R?.timer),
      (this.#R = void 0));
  }
}
var Ut = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null
};
class ve {
  #e = !1;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #s = void 0;
  #i = void 0;
  #d = null;
  #u = !1;
  #l = void 0;
  #c = Ut;
  #p = !1;
  #a = "idle";
  #g = null;
  attacherCapsChanged = De();
  rvSupervisorLinkChanged = De();
  cloudCwdChanged = De();
  sdkDialogHostActive() {
    return this.#e;
  }
  markSdkDialogHostActive(e) {
    this.#e = e;
  }
  sdkSupportedDialogKinds() {
    return this.#t;
  }
  sdkSupportedDialogKindsSource() {
    return this.#n;
  }
  declareDialogKinds(e, t) {
    ((this.#t = e), (this.#n = e === void 0 ? void 0 : t));
  }
  sdkPerTaskStopAffordance() {
    return this.#o;
  }
  declarePerTaskStopAffordance(e) {
    this.#o = e;
  }
  sdkRapidFollowupPreempt() {
    return this.#r;
  }
  declareRapidFollowupPreempt(e) {
    this.#r = e;
  }
  sdkForwardNestedSubagentToolCalls() {
    return this.#s;
  }
  declareForwardNestedSubagentToolCalls(e) {
    this.#s = e;
  }
  hostRendersChromeSetupOffer() {
    return this.#i;
  }
  declareHostRendersChromeSetupOffer(e) {
    this.#i = e;
  }
  attacherCaps() {
    return this.#d;
  }
  replaceAttacherCaps(e) {
    ((this.#d = e), this.attacherCapsChanged.emit());
  }
  rvSupervisorLinkLive() {
    return this.#u;
  }
  replaceRvSupervisorLinkLive(e) {
    if (this.#u === e) return;
    ((this.#u = e), this.rvSupervisorLinkChanged.emit());
  }
  sdkBetas() {
    return this.#l;
  }
  replaceSdkBetas(e) {
    this.#l = e;
  }
  caps() {
    return this.#c;
  }
  replaceCaps(e) {
    this.#c = e;
  }
  markRemote(e) {
    this.#c = { ...this.#c, workspace: e ? "remote" : "local" };
  }
  cloudCwdOfSession(e) {
    return this.#c.workspace === "remote" && this.#g?.sessionId === e ? this.#g.cwd : null;
  }
  replaceCloudCwd(e) {
    ((this.#g = e), this.cloudCwdChanged.emit());
  }
  replBridgeActive() {
    return this.#p;
  }
  replaceReplBridgeActive(e) {
    if (this.#p === e) return;
    this.#p = e;
  }
  mainLoopBusy() {
    return this.#a !== "idle";
  }
  mainQueryRunning() {
    return this.#a === "running";
  }
  replaceMainLoopStatus(e) {
    this.#a = e;
  }
  reset() {
    ((this.#e = !1),
      (this.#t = void 0),
      (this.#n = void 0),
      (this.#o = void 0),
      (this.#r = void 0),
      (this.#s = void 0),
      (this.#i = void 0),
      (this.#d = null),
      (this.#l = void 0),
      (this.#c = Ut),
      (this.#p = !1),
      (this.#a = "idle"),
      (this.#u = !1),
      (this.#g = null),
      this.attacherCapsChanged.clear(),
      this.rvSupervisorLinkChanged.clear(),
      this.cloudCwdChanged.clear());
  }
}
var jt = 150;
class be {
  #e = Date.now();
  #t = !1;
  #n = 0;
  #o = -1 / 0;
  interactionFired = De();
  #r = void 0;
  terminalFocusFired = De();
  #s = !1;
  #i;
  lastInteractionTime() {
    return this.#e;
  }
  lastSubmitTime() {
    return this.#n;
  }
  recordSubmit() {
    this.#n = Date.now();
  }
  personWroteAt() {
    return this.#o;
  }
  notePersonWrote() {
    this.#o = performance.now();
  }
  recordInteraction(e) {
    if (e) this.#d();
    else this.#t = !0;
  }
  flushIfDirty() {
    if (this.#t) this.#d();
  }
  #d() {
    ((this.#e = Date.now()), (this.#t = !1), this.interactionFired.emit());
  }
  resetBaseline() {
    ((this.#e = Date.now()), (this.#t = !1));
  }
  terminalFocus() {
    return this.#r;
  }
  updateTerminalFocus(e) {
    ((this.#r = e), this.terminalFocusFired.emit());
  }
  scrollDraining() {
    return this.#s;
  }
  markScrollActivity() {
    if (((this.#s = !0), this.#i)) clearTimeout(this.#i);
    ((this.#i = setTimeout(() => {
      ((this.#s = !1), (this.#i = void 0));
    }, jt)),
      this.#i.unref?.());
  }
  async waitForScrollIdle() {
    while (this.#s) await new Promise((e) => setTimeout(e, jt));
  }
  reset() {
    ((this.#e = Date.now()),
      (this.#n = 0),
      (this.#o = -1 / 0),
      (this.#r = void 0),
      this.interactionFired.clear(),
      this.terminalFocusFired.clear());
  }
}
var sf = "(no content)",
  yW = "No response requested.",
  vi = "<synthetic>",
  zpi = "Auto Mode Active",
  kdr =
    "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read",
  fTn = "Claude can't use thinking from another organization",
  Kpi = "resume signed in to that organization to use it again";
function Vw(e) {
  return (e.type === "user" || e.type === "assistant") && e.isVirtual === !0;
}
function mee(e) {
  return e.type === "assistant" && e.isApiErrorMessage === !0 && e.message?.model === vi;
}
function RB(e) {
  return e.type === "system" && e.subtype === "local_command";
}
function Y_(e) {
  if (e.type === "api_system") return !1;
  return (
    e.type === "progress" ||
    (e.type === "system" && !RB(e)) ||
    Vw(e) ||
    mee(e) ||
    (e.type === "attachment" &&
      (e.attachment?.type === "thinking_drop" ||
        e.attachment?.type === "credential_org" ||
        e.attachment?.type === "prompt_snapshot" ||
        e.attachment?.type === "prompt_render_point" ||
        e.attachment?.type === "deferred_tools_record"))
  );
}
var wr = ["sdk_single_prompt_gate", "subagent_estimate", "subagent_final_turn", "rows_unreadable"],
  Ar = 8;
class Ce {
  byAgent = new Map();
  attemptsByAgent = new Map();
  cappedFailuresByAgent = new Map();
  armGateEventEmitted = new Set();
  vetoedUnderPrompt = new Map();
  sidecarIo = Promise.resolve();
  rehydrateAttemptedSessions = new Set();
  sidecarReadsAhead = new Map();
  get(e) {
    return this.byAgent.get(e);
  }
  has(e) {
    return this.byAgent.has(e);
  }
  put(e, t) {
    this.byAgent.set(e, t);
  }
  remove(e) {
    this.byAgent.delete(e);
  }
  nextAttemptNumber(e) {
    let t = (this.attemptsByAgent.get(e) ?? 0) + 1;
    return (this.attemptsByAgent.set(e, t), t);
  }
  consecutiveCountedFailures(e) {
    return this.cappedFailuresByAgent.get(e) ?? 0;
  }
  recordCountedFailure(e) {
    let t = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
    return (this.cappedFailuresByAgent.set(e, t), t);
  }
  clearCountedFailures(e) {
    this.cappedFailuresByAgent.delete(e);
  }
  recordVeto(e, t) {
    this.vetoedUnderPrompt.set(e, t);
  }
  isVetoedUnder(e, t) {
    return this.vetoedUnderPrompt.get(e) === t;
  }
  latchArmGateEvent(e) {
    if (this.armGateEventEmitted.has(e)) return !1;
    return (this.armGateEventEmitted.add(e), !0);
  }
  enqueueSidecarIo(e, t) {
    return ((this.sidecarIo = this.sidecarIo.then(e, e).catch(t)), this.sidecarIo);
  }
  sidecarIoSettled() {
    return this.sidecarIo;
  }
  hasAttemptedRehydrate(e) {
    return this.rehydrateAttemptedSessions.has(e);
  }
  markRehydrateAttempted(e) {
    this.rehydrateAttemptedSessions.add(e);
  }
  keepSidecarReadAhead(e, t) {
    this.sidecarReadsAhead.delete(e);
    while (this.sidecarReadsAhead.size >= Ar) {
      let o = this.sidecarReadsAhead.keys().next().value;
      if (o === void 0) break;
      this.sidecarReadsAhead.delete(o);
    }
    this.sidecarReadsAhead.set(e, t);
  }
  takeSidecarReadAhead(e) {
    let t = this.sidecarReadsAhead.get(e);
    return (this.sidecarReadsAhead.delete(e), t);
  }
  dropSidecarReadAhead(e) {
    this.sidecarReadsAhead.delete(e);
  }
  forgetSubagentTelemetry(e) {
    (this.attemptsByAgent.delete(e),
      this.cappedFailuresByAgent.delete(e),
      this.vetoedUnderPrompt.delete(e));
    for (let t of wr) this.armGateEventEmitted.delete(`${e}:${t}`);
  }
}
function oFe(e) {
  return e ?? "main";
}
function fts({ messages: e, rowUuids: t }, o) {
  return { lastUuid: o, seenUuids: new Set(e.map((r) => r.uuid)), rowUuids: t };
}
function j9r({ coverage: e, kept: t, sent: o, received: r, instructions: i, fit: s }) {
  let a = ({ uuid: c }) => e.seenUuids.has(c),
    l = new Set(o.messages.map((c) => c.uuid));
  if (!l.has(e.lastUuid)) return { kind: "refuse", reason: "boundary_uuid_missing" };
  if (!e.rowUuids.every((c) => l.has(c)))
    return { kind: "refuse", reason: "covered_messages_changed" };
  if (t.some((c) => a(c) && !l.has(c.uuid)))
    return { kind: "refuse", reason: "kept_message_missing" };
  if (
    o.messages
      .slice(0, o.messages.findLastIndex(a))
      .some((c) => c.type === "assistant" && !Vw(c) && !a(c))
  )
    return { kind: "refuse", reason: "unseen_reply" };
  let p = o.rowUuids.slice(0, o.rowUuids.findLastIndex((c) => e.seenUuids.has(c)) + 1);
  if (i || !r.messages.some(({ uuid: c }) => c === e.lastUuid) || !_t(r.rowUuids, p))
    return { kind: "refuse", reason: "hook_rewrite" };
  let y = r.messages.findLastIndex(a),
    u = r.messages.flatMap((c, C) =>
      c.type === "progress" || a(c) ? [] : [{ message: c, isEarly: C < y }]
    ),
    f = ({ message: c, isEarly: C }) => C && Vw(c),
    h = new Set(u.filter(f).map(({ message: c }) => c)),
    g = u.filter((c) => !f(c)),
    v = g.map(({ message: c }) => c),
    b =
      s &&
      Lr(
        s,
        r.messages.filter((c) => !h.has(c)),
        [...t, ...v]
      );
  if (b?.givesWay) return { kind: "refuse", reason: "would_not_fit", sizes: b.sizes };
  return {
    kind: "reuse",
    tail: v,
    earlyTailCount: F(g, ({ isEarly: c }) => c),
    displayOnlyLeftOutCount: h.size,
    headReordered: !_t(r.rowUuids, e.rowUuids),
    sizes: b?.sizes
  };
}
function Lr(
  { thresholdTokens: e, windowTokens: t, liveTokens: o, madeFromTokens: r, summary: i, sizeOf: s },
  a,
  l
) {
  let d = new Set(l.map((g) => g.uuid)),
    p = new Set(a.map((g) => g.uuid)),
    y = a.filter((g) => !d.has(g.uuid)),
    u = a.filter((g) => d.has(g.uuid)),
    f = l.filter((g) => !p.has(g.uuid)),
    h = Math.max(o - s(y), s(u)) + s([...i, ...f]);
  return {
    sizes: { postSwapTokens: h, thresholdTokens: e, windowTokens: t },
    givesWay: h >= e && r < t
  };
}
function _t(e, t) {
  return t.every((o, r) => e[r] === o);
}
function pts(e) {
  return (
    e.findLast(
      (o) =>
        o.type === "user" &&
        !o.isMeta &&
        o.toolUseResult === void 0 &&
        (typeof o.message.content === "string" ||
          !o.message.content.some((r) => r.type === "tool_result"))
    )?.uuid ?? ""
  );
}
function Vpi(e, t, o) {
  e.recordVeto(oFe(t), pts(o));
}
class xe {
  #e = void 0;
  get current() {
    return this.#e;
  }
  adopt(e) {
    this.#e = e;
  }
}
class Re {
  #e = null;
  #t = null;
  mainAgentId(e) {
    return ((this.#e ??= Br(e)), this.#e);
  }
  projectDir() {
    return this.#t;
  }
  replaceProjectDir(e) {
    this.#t = e;
  }
}
class Te {
  openToolUseId;
  answeredThisSession = !1;
  get answered() {
    return this.answeredThisSession;
  }
  markAnswered() {
    this.answeredThisSession = !0;
  }
  isOpenElsewhere(e) {
    return this.openToolUseId !== void 0 && this.openToolUseId !== e;
  }
  open(e) {
    this.openToolUseId = e;
  }
  closeFor(e) {
    if (e !== void 0 && this.openToolUseId === e) this.openToolUseId = void 0;
  }
}
class Pe {
  granted = !1;
  isGranted() {
    return this.granted;
  }
  grant() {
    this.granted = !0;
  }
}
class Me {
  inFlight = null;
  startedForTurnEnd = !1;
  reset() {
    (this.inFlight?.abort(), (this.inFlight = null), (this.startedForTurnEnd = !1));
  }
}
class we {
  firstSyncPromise = null;
  accountListing = "pending";
  syncErrors = [];
  lastRoundListed = !1;
  listedStamp = null;
  changesLanded = 0;
  changesReloaded = 0;
  reloadsCompleted = 0;
  holdsSet = 0;
  reloadHeld = !1;
  lastCompleteList = null;
  lastSyncedLaneLoad = null;
  syncedLaneOpened = !1;
  syncedDirsLoadedHere = new Set();
  removalsDeferredHere = new Set();
  pendingTrashRemovals = [];
  ensureBucketRoot = null;
  deferredRelist = null;
  missingEntry = { resync: null, resyncAt: -1 / 0, swept: !1 };
  settingsInstall = { current: null, next: null, loaded: null };
  holdReload() {
    ((this.reloadHeld = !0), this.holdsSet++);
  }
  endHoldSetBefore(e) {
    this.reloadHeld &&= this.holdsSet !== e;
  }
  reloaded(e) {
    ((this.changesReloaded = Math.max(this.changesReloaded, e)), this.reloadsCompleted++);
  }
}
class Ae {
  abortController = null;
  eligibleTurns = 0;
  unusedInARow = 0;
  askOnNextTurn() {
    this.eligibleTurns = 0;
  }
  reset() {
    (this.abortController?.abort(), (this.abortController = null));
  }
  arm() {
    let e = new AbortController();
    return ((this.abortController = e), e);
  }
}
class Le {
  #e = void 0;
  #t = void 0;
  ccrSessionID() {
    return this.#e;
  }
  latchCcrSessionID(e) {
    this.#e = e;
  }
  syncEnabled() {
    return this.#t;
  }
  latchSyncEnabled(e) {
    return ((this.#t = e), e);
  }
}
class Oe {
  autonomousPreambleDelivered = !1;
  lastLoopFileDelivered = null;
  reset() {
    ((this.autonomousPreambleDelivered = !1), (this.lastLoopFileDelivered = null));
  }
}
class Ie {
  exchanges = [];
  replace(e) {
    this.exchanges = e;
  }
  append(e, t, o) {
    this.exchanges = [
      ...this.exchanges,
      { question: e, response: t, ...(o && { fallbackNotice: o }) }
    ].slice(-20);
  }
  pendingReopen = null;
  reopenAway = !1;
  get reopenPending() {
    return this.pendingReopen !== null;
  }
  armReopen(e, t) {
    if (this.pendingReopen) {
      this.pendingReopen.owners.add(e);
      return;
    }
    this.pendingReopen = { owners: new Set([e]), cancel: t() };
  }
  clearPendingReopen(e) {
    let t = this.pendingReopen;
    if (!t) {
      this.reopenAway = !1;
      return;
    }
    if (e !== void 0) {
      if ((t.owners.delete(e), t.owners.size > 0)) return;
    }
    (t.cancel(), (this.pendingReopen = null), (this.reopenAway = !1));
  }
  reopener = null;
  setReopener(e) {
    this.reopener = e;
  }
  get hasReopener() {
    return this.reopener !== null;
  }
  reopenNow() {
    return this.reopener?.() ?? !1;
  }
  inFlightQuestions = [];
  get inFlight() {
    return this.inFlightQuestions.at(-1) ?? null;
  }
  pendingBesidesTop() {
    return this.inFlightQuestions.slice(0, -1);
  }
  setInFlight(e) {
    if (!this.inFlightQuestions.includes(e))
      this.inFlightQuestions = [...this.inFlightQuestions, e];
  }
  clearInFlight(e) {
    if (this.inFlightQuestions.includes(e))
      this.inFlightQuestions = this.inFlightQuestions.filter((t) => t !== e);
  }
}
var Or = 16;
class Fe {
  pending = null;
  shownThisSession = !1;
  changed = De();
  submitted = [];
  submittedChanged = De();
  subscribe = this.changed.subscribe;
  getSnapshot = () => this.pending;
  subscribeSubmitted = this.submittedChanged.subscribe;
  submit(e) {
    if (this.shownThisSession) return;
    if (this.submitted.length >= Or) this.submitted.shift();
    (this.submitted.push(e), this.submittedChanged.emit());
  }
  takeSubmitted() {
    let e = this.submitted;
    return ((this.submitted = []), e);
  }
  offer(e) {
    if (this.shownThisSession) return;
    ((this.pending = e), this.changed.emit());
  }
  dismiss() {
    if (this.pending !== null) ((this.pending = null), this.changed.emit());
  }
  markShown() {
    this.shownThisSession = !0;
  }
}
var git = Symbol("permission-stash-evicted");
class He {
  entriesCap;
  evictedKeysCap;
  lanes = { write: new Map(), read: new Map() };
  evicted = { write: new Set(), read: new Set() };
  poisoned = { write: !1, read: !1 };
  identities = new Map();
  identitiesEvicted = new Set();
  identitiesPoisoned = !1;
  constructor(e = 256, t = 1048576) {
    this.entriesCap = e;
    this.evictedKeysCap = t;
  }
  stash(e, t, o, r = "write") {
    if (e === void 0) return;
    let i = this.lanes[r],
      s = this.evicted[r],
      a = Ee(e, t);
    if (s.has(a)) return;
    let l = i.get(a);
    if (l !== void 0) {
      let d = new Set(o);
      i.set(
        a,
        l.filter((p) => d.has(p))
      );
      return;
    }
    if (i.size >= this.entriesCap) {
      let d = i.keys().next().value;
      if (d !== void 0) {
        if ((i.delete(d), s.add(d), s.size > this.evictedKeysCap)) {
          this.poisoned[r] = !0;
          let p = s.values().next().value;
          if (p !== void 0) s.delete(p);
        }
      }
    }
    i.set(a, o);
  }
  holds(e, t, o = "write") {
    return e !== void 0 && this.lanes[o].has(Ee(e, t));
  }
  stashIdentity(e, t, o) {
    if (e === void 0) return;
    let r = this.identities.get(e),
      i = r?.get(t);
    if (r !== void 0 && i !== void 0) {
      if (i === null || o === null || i.dev !== o.dev || i.ino !== o.ino) r.set(t, null);
      return;
    }
    let s = this.identitiesEvicted.has(e) || this.identitiesPoisoned;
    if (r === void 0) {
      if (!s && this.identities.size >= this.entriesCap) {
        let a = this.identities.keys().next().value;
        if (a !== void 0) {
          if (
            (this.identities.delete(a),
            this.identitiesEvicted.add(a),
            this.identitiesEvicted.size > this.evictedKeysCap)
          ) {
            this.identitiesPoisoned = !0;
            let l = this.identitiesEvicted.values().next().value;
            if (l !== void 0) this.identitiesEvicted.delete(l);
          }
        }
      }
      ((r = new Map()), this.identities.set(e, r));
    }
    r.set(t, s ? null : o);
  }
  takeIdentity(e, t) {
    if (e === void 0) return;
    let o = this.identities.get(e),
      r = o?.get(t);
    if (o?.delete(t) && o.size === 0) this.identities.delete(e);
    return r;
  }
  consume(e, t, o = "write") {
    if (e === void 0) return;
    let r = this.lanes[o],
      i = Ee(e, t),
      s = r.get(i),
      a = s === void 0 && (this.evicted[o].delete(i) || this.poisoned[o]),
      l = `${e}\x00`;
    for (let d of r.keys()) if (d.startsWith(l)) r.delete(d);
    if (o === "read") (this.identities.delete(e), this.identitiesEvicted.delete(e));
    if (a) return git;
    return s;
  }
}
function Ee(e, t) {
  return `${e}\x00${t}`;
}
var qt = "NoProjectDirectoryError",
  Nt = new W(() => ({}));
var Wt = () => {};
function Gt(e) {
  Wt = e;
}
class GH extends Error {
  name = qt;
  constructor() {
    super("This session has no working directory.");
    try {
      Wt(this);
    } catch {}
  }
}
function sFe(e) {
  try {
    return e instanceof Error && e.name === qt;
  } catch {
    return !1;
  }
}
function So(e) {
  let { project: t } = e;
  if (t === null) throw new GH();
  return t;
}
function W9r(e) {
  return Vt(
    { kind: "root", host: e.host, id: e.id, parentId: e.parentId },
    e.project,
    e.project?.isolationRoot
  );
}
function A(e, t) {
  let o = t.originalCwd ?? e?.originalCwd,
    r = t.projectRoot ?? e?.projectRoot,
    i = t.cwd ?? e?.cwd;
  if (o === void 0 && r === void 0 && i === void 0) return null;
  if (o === void 0 || r === void 0 || i === void 0) throw new GH();
  return { originalCwd: In(o), projectRoot: In(r), cwd: In(i) };
}
function Vt(e, t, o) {
  let r = { project: t === null ? null : A(null, t) },
    i = o,
    s = De(),
    a = e.kind === "fork" ? e.root.observers : new ie(),
    l = e.kind === "fork" ? e.root.autonomousLoopPreamble : new Oe(),
    d = e.kind === "fork" ? e.root.precompute : new Ce(),
    p = {
      get originalCwd() {
        return So(r).originalCwd;
      },
      get projectRoot() {
        return So(r).projectRoot;
      },
      get cwd() {
        return So(r).cwd;
      },
      get isolationRoot() {
        return i;
      }
    },
    y = {
      host: e.kind === "fork" ? e.root.host : e.host,
      get id() {
        return e.kind === "fork" ? e.root.id : e.id;
      },
      get parentId() {
        return e.kind === "fork" ? e.root.parentId : e.parentId;
      },
      get root() {
        return e.kind === "fork" ? e.root : y;
      },
      get project() {
        return r.project === null ? null : p;
      },
      observers: a,
      autonomousLoopPreamble: l,
      btwHistory: e.kind === "fork" ? e.root.btwHistory : new Ie(),
      ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new Me(),
      conversationLatches: e.kind === "fork" ? e.root.conversationLatches : new se(),
      costLedger: e.kind === "fork" ? e.root.costLedger : new ae(),
      engineStore: e.kind === "fork" ? e.root.engineStore : new xe(),
      usageCreditsOnlyModelConsentSlots:
        e.kind === "fork" ? e.root.usageCreditsOnlyModelConsentSlots : new le(),
      hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new de(),
      identity: e.kind === "fork" ? e.root.identity : new Re(),
      invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new ue(),
      mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new ce(),
      modelSelection: e.kind === "fork" ? e.root.modelSelection : new pe(),
      promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new ge(),
      promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new Ae(),
      pendingHint: e.kind === "fork" ? e.root.pendingHint : new Fe(),
      pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new we(),
      precompute: d,
      requestJournal: e.kind === "fork" ? e.root.requestJournal : new fe(),
      sessionCron: e.kind === "fork" ? e.root.sessionCron : new he(),
      sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new me(),
      sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new Le(),
      sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new Se(),
      surfaceCapabilities: e.kind === "fork" ? e.root.surfaceCapabilities : new ve(),
      userPresence: e.kind === "fork" ? e.root.userPresence : new be(),
      workflowUsageConsent: e.kind === "fork" ? e.root.workflowUsageConsent : new Pe(),
      outsideReadPrompt: e.kind === "fork" ? e.root.outsideReadPrompt : new Te(),
      writePermissionStash: e.kind === "fork" ? e.root.writePermissionStash : new He(),
      subscribe(u) {
        let f = s.subscribe(u);
        if (e.kind !== "fork") return f;
        let h = e.root,
          { id: g, parentId: v } = h,
          b = h.subscribe(() => {
            if (h.id === g && h.parentId === v) return;
            ((g = h.id), (v = h.parentId), u());
          });
        return () => {
          (f(), b());
        };
      },
      setCwd(u) {
        y.update({ project: { cwd: u } });
      },
      setIsolationRoot(u) {
        if (u !== i) ((i = u), s.emit());
      },
      withProject(u) {
        return Vt({ kind: "fork", root: y.root }, A(r.project, u), u.isolationRoot ?? i);
      },
      update(u) {
        let f =
            u.project === void 0 ? r.project : u.project === null ? null : A(r.project, u.project),
          h = !1;
        if (u.id !== void 0 || "parentId" in u) {
          if (e.kind === "fork")
            throw Error(
              "A withProject fork cannot re-identify the session \u2014 update the root session instead"
            );
          if (u.id !== void 0 && u.id !== e.id) ((e.id = u.id), (h = !0));
          if ("parentId" in u && u.parentId !== e.parentId) ((e.parentId = u.parentId), (h = !0));
        }
        if (
          f?.originalCwd !== r.project?.originalCwd ||
          f?.projectRoot !== r.project?.projectRoot ||
          f?.cwd !== r.project?.cwd
        )
          ((r.project = f), (h = !0));
        let g = u.project?.isolationRoot;
        if (g !== void 0 && g !== i) ((i = g), (h = !0));
        if (h) s.emit();
      }
    };
  return y;
}
class nt {
  #e;
  #t = new WeakMap();
  constructor(e) {
    this.#e = e;
  }
  peek(e) {
    return this.#t.get(e.root);
  }
  of(e) {
    let t = e.root,
      o = this.#t.get(t);
    if (o !== void 0) return o;
    let r = this.#e();
    return (this.#t.set(t, r), r);
  }
  drop(e) {
    this.#t.delete(e.root);
  }
}
class Be {
  #e = !1;
  #t = null;
  #n = !1;
  #o = void 0;
  #r = !1;
  #s = !1;
  #i = !1;
  #d = !1;
  #u = void 0;
  #l = !1;
  #c = !1;
  #p = null;
  #a = null;
  #g = new Map();
  #f = "cli";
  #m = "fresh";
  #y = void 0;
  #S = !1;
  #h = !1;
  #v = [];
  #b = !1;
  #k = !1;
  #x = !1;
  #C = new Set();
  #T = !1;
  #R = !1;
  #P = !1;
  #A = "none";
  #w = !1;
  #M = !1;
  #L = !1;
  #I = !1;
  #F = !1;
  #E = void 0;
  #D = void 0;
  #H = void 0;
  #B = void 0;
  #U = !1;
  #j = !1;
  #_ = !1;
  #q = null;
  #N = null;
  #W = !0;
  #G = null;
  #O = !1;
  #X = De();
  #K = null;
  #V = !1;
  #J = !1;
  #z = {};
  #Q = null;
  #Y = "none";
  #$ = void 0;
  isInteractive() {
    return this.#e;
  }
  replaceIsInteractive(e) {
    this.#e = e;
  }
  printOutputFormat() {
    return this.#t;
  }
  replacePrintOutputFormat(e) {
    this.#t = e;
  }
  thinkingDisplayExplicit() {
    return this.#n;
  }
  replaceThinkingDisplayExplicit(e) {
    this.#n = e;
  }
  permissionPromptToolName() {
    return this.#o;
  }
  replacePermissionPromptToolName(e) {
    this.#o = e;
  }
  hasStreamingInput() {
    return this.#r;
  }
  replaceHasStreamingInput(e) {
    this.#r = e;
  }
  singleShotPrintSession() {
    return this.#s;
  }
  replaceSingleShotPrintSession(e) {
    this.#s = e;
  }
  printInputClosed() {
    return this.#i;
  }
  markPrintInputClosed() {
    this.#i = !0;
  }
  modelOverrideOptOutForSession() {
    return this.#d;
  }
  replaceModelOverrideOptOutForSession(e) {
    this.#d = e;
  }
  rendererMode() {
    return this.#u;
  }
  replaceRendererMode(e) {
    this.#u = e;
  }
  strictToolResultPairing() {
    return this.#l;
  }
  replaceStrictToolResultPairing(e) {
    this.#l = e;
  }
  restrictedSession() {
    return this.#c;
  }
  replaceRestrictedSession(e) {
    this.#c = e;
  }
  workspaceRestrictionState() {
    return this.#p;
  }
  replaceWorkspaceRestrictionState(e) {
    this.#p = e;
  }
  replaceWorkspaceRestrictionUnsubscribe(e) {
    (this.#a?.(), (this.#a = e));
  }
  restrictedWorkspaceRoots() {
    return this.#g;
  }
  addRestrictedWorkspaceRoot(e, t) {
    this.#g.set(e, t);
  }
  clearRestrictedWorkspaceRoots() {
    this.#g = new Map();
  }
  clientType() {
    return this.#f;
  }
  replaceClientType(e) {
    this.#f = e;
  }
  sessionStartType() {
    return this.#m;
  }
  replaceSessionStartType(e) {
    this.#m = e;
  }
  questionPreviewFormat() {
    return this.#y;
  }
  replaceQuestionPreviewFormat(e) {
    this.#y = e;
  }
  extendedQuestionsEnabled() {
    return this.#S;
  }
  replaceExtendedQuestionsEnabled(e) {
    this.#S = e;
  }
  questionOptionDescriptionsOptional() {
    return this.#h;
  }
  replaceQuestionOptionDescriptionsOptional(e) {
    this.#h = e;
  }
  replConfigArgv() {
    return this.#v;
  }
  replaceReplConfigArgv(e) {
    this.#v = e;
  }
  userMsgOptIn() {
    return this.#b;
  }
  replaceUserMsgOptIn(e) {
    this.#b = e;
  }
  searchToolsOptIn() {
    return this.#k;
  }
  replaceSearchToolsOptIn(e) {
    this.#k = e;
  }
  todoToolsOptIn() {
    return this.#x;
  }
  replaceTodoToolsOptIn(e) {
    this.#x = e;
  }
  toolsOmittedByLaunchList() {
    return this.#C;
  }
  replaceToolsOmittedByLaunchList(e) {
    this.#C = e;
  }
  wizardOperatorToolsEnabled() {
    return this.#T;
  }
  replaceWizardOperatorToolsEnabled(e) {
    this.#T = e;
  }
  runnerDeclaredNestedRepositoryDiff() {
    return this.#R;
  }
  replaceRunnerDeclaredNestedRepositoryDiff(e) {
    this.#R = e;
  }
  runnerDeclaredNoRepositoryCheckedOut() {
    return this.#P;
  }
  replaceRunnerDeclaredNoRepositoryCheckedOut(e) {
    this.#P = e;
  }
  pollEventIngress() {
    return this.#A;
  }
  markPollEventIngress(e) {
    this.#A = e;
  }
  ownEventDeliveryRequested() {
    return this.#w && !this.#M;
  }
  replaceOwnEventDeliveryHeld(e) {
    this.#M = e;
  }
  markOwnEventDeliveryRequested() {
    this.#w = !0;
  }
  sdkAgentProgressSummariesEnabled() {
    return this.#L;
  }
  replaceSdkAgentProgressSummariesEnabled(e) {
    this.#L = e;
  }
  sessionPersistenceDisabled() {
    return this.#I;
  }
  replaceSessionPersistenceDisabled(e) {
    this.#I = e;
  }
  diskless() {
    return this.#F;
  }
  replaceDiskless(e) {
    this.#F = e;
  }
  ccrSessionUrl() {
    return this.#E;
  }
  replaceCcrSessionUrl(e) {
    this.#E = e;
  }
  ccrDerivedSurface() {
    return this.#D;
  }
  replaceCcrDerivedSurface(e) {
    this.#D = e;
  }
  entrypointOnRequests() {
    return this.#H;
  }
  replaceEntrypointOnRequests(e) {
    this.#H = e;
  }
  toolsMachine() {
    return this.#B;
  }
  replaceToolsMachine(e) {
    this.#B = e;
  }
  sessionBypassPermissionsMode() {
    return this.#U;
  }
  replaceSessionBypassPermissionsMode(e) {
    this.#U = e;
  }
  disableSlashCommands() {
    return this.#j;
  }
  replaceDisableSlashCommands(e) {
    this.#j = e;
  }
  disableFileMentions() {
    return this.#_;
  }
  replaceDisableFileMentions(e) {
    this.#_ = e;
  }
  sessionUploadsDir() {
    return this.#q;
  }
  replaceSessionUploadsDir(e) {
    this.#q = e;
  }
  localUploadsRoot() {
    return this.#N;
  }
  replaceLocalUploadsRoot(e) {
    this.#N = e;
  }
  mayForwardHomeSettings() {
    return this.#W;
  }
  replaceMayForwardHomeSettings(e) {
    this.#W = e;
  }
  homeSettingsHostConsent() {
    return this.#G;
  }
  replaceHomeSettingsHostConsent(e) {
    this.#G = e;
  }
  scheduledTasksEnabled() {
    return this.#O;
  }
  replaceScheduledTasksEnabled(e) {
    let t = e && !this.#O;
    if (((this.#O = e), t)) this.#X.emit();
  }
  onScheduledTasksEnabled(e) {
    return this.#X.subscribe(e);
  }
  initJsonSchema() {
    return this.#K;
  }
  replaceInitJsonSchema(e) {
    this.#K = e;
  }
  cliSessionConfigCarried() {
    return this.#V;
  }
  replaceCliSessionConfigCarried(e) {
    this.#V = e;
  }
  forkRestrictedLaunchConfig() {
    return this.#J;
  }
  replaceForkRestrictedLaunchConfig(e) {
    this.#J = e;
  }
  forkReplayLaunchConfig() {
    return this.#z;
  }
  spareClaimState() {
    return this.#Y;
  }
  replaceSpareClaimState(e) {
    this.#Y = e;
  }
  spareParkedAtMs() {
    return this.#$;
  }
  replaceSpareParkedAtMs(e) {
    this.#$ = e;
  }
  replaceForkReplayLaunchConfig(e) {
    this.#z = e;
  }
  projectConfigRoot() {
    return this.#Q;
  }
  replaceProjectConfigRoot(e) {
    this.#Q = e;
  }
  reset() {
    ((this.#e = !1),
      (this.#t = null),
      (this.#Y = "none"),
      (this.#$ = void 0),
      (this.#n = !1),
      (this.#o = void 0),
      (this.#r = !1),
      (this.#s = !1),
      (this.#i = !1),
      (this.#d = !1),
      (this.#u = void 0),
      (this.#l = !1),
      (this.#c = !1),
      (this.#p = null),
      this.replaceWorkspaceRestrictionUnsubscribe(null),
      (this.#g = new Map()),
      (this.#f = "cli"),
      (this.#m = "fresh"),
      (this.#y = void 0),
      (this.#S = !1),
      (this.#h = !1),
      (this.#v = []),
      (this.#b = !1),
      (this.#k = !1),
      (this.#x = !1),
      (this.#C = new Set()),
      (this.#T = !1),
      (this.#R = !1),
      (this.#P = !1),
      (this.#A = "none"),
      (this.#w = !1),
      (this.#M = !1),
      (this.#L = !1),
      (this.#I = !1),
      (this.#F = !1),
      (this.#E = void 0),
      (this.#D = void 0),
      (this.#H = void 0),
      (this.#B = void 0),
      (this.#U = !1),
      (this.#j = !1),
      (this.#_ = !1),
      (this.#q = null),
      (this.#N = null),
      (this.#W = !0),
      (this.#G = null),
      (this.#O = !1),
      (this.#K = null),
      (this.#V = !1),
      (this.#J = !1),
      (this.#z = {}),
      (this.#Q = null));
  }
}
class Ue {
  #e = void 0;
  #t = [];
  #n = [];
  #o = void 0;
  #r = void 0;
  #s = null;
  #i = null;
  #d = !1;
  #u = null;
  #l = Jt();
  #c = null;
  #p = !1;
  flagSettingsPath() {
    return this.#e;
  }
  replaceFlagSettingsPath(e) {
    this.#e = e;
  }
  flagAgentsFilePaths() {
    return this.#t;
  }
  replaceFlagAgentsFilePaths(e) {
    this.#t = e;
  }
  flagMcpConfigFilePaths() {
    return this.#n;
  }
  replaceFlagMcpConfigFilePaths(e) {
    this.#n = e;
  }
  flagSettingsExpectedContent() {
    return this.#o;
  }
  replaceFlagSettingsExpectedContent(e) {
    this.#o = e;
  }
  flagSettingsFilePinnedContent() {
    return this.#r;
  }
  replaceFlagSettingsFilePinnedContent(e) {
    this.#r = e;
  }
  flagSettingsInline() {
    return this.#s;
  }
  replaceFlagSettingsInline(e) {
    this.#s = e;
  }
  parentManagedSettings() {
    return this.#i;
  }
  replaceParentManagedSettings(e, t = null) {
    ((this.#i = e), (this.#u = t));
  }
  parentManagedSettingsInvalid() {
    return this.#d;
  }
  replaceParentManagedSettingsInvalid(e) {
    this.#d = e;
  }
  parentOrganizationSettings() {
    return this.#u;
  }
  allowedSettingSources() {
    return this.#l;
  }
  replaceAllowedSettingSources(e) {
    this.#l = e;
  }
  allowedSettingSourcesWithoutRepoDirSources() {
    let e = this.#l;
    if (this.#c?.of !== e)
      this.#c = {
        of: e,
        result: e.filter((t) => t !== "projectSettings" && t !== "localSettings")
      };
    return this.#c.result;
  }
  useCoworkPlugins() {
    return this.#p;
  }
  replaceUseCoworkPlugins(e) {
    this.#p = e;
  }
  reset() {
    ((this.#e = void 0),
      (this.#t = []),
      (this.#n = []),
      (this.#o = void 0),
      (this.#r = void 0),
      (this.#s = null),
      (this.#i = null),
      (this.#d = !1),
      (this.#u = null),
      (this.#l = Jt()),
      (this.#c = null),
      (this.#p = !1));
  }
}
function Jt() {
  return ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
}
class je {
  #e = [];
  #t = [];
  #n = [];
  #o = void 0;
  #r = new Map();
  #s = new Map();
  #i = new Map();
  #d = [];
  #u = void 0;
  #l = [];
  #c = !1;
  #p = void 0;
  #a = void 0;
  #g = void 0;
  inlinePlugins() {
    return this.#e;
  }
  replaceInlinePlugins(e) {
    this.#e = e;
  }
  inlinePluginsNoMcp() {
    return this.#t;
  }
  replaceInlinePluginsNoMcp(e) {
    this.#t = e;
  }
  inlinePluginUrls() {
    return this.#n;
  }
  replaceInlinePluginUrls(e) {
    this.#n = e;
  }
  syncedPluginDirs() {
    return this.#o ?? [];
  }
  syncedPluginDirsRegistered() {
    return this.#o !== void 0;
  }
  syncedPluginAttestation(e) {
    return this.#r.get(e);
  }
  syncedPluginRowId(e) {
    return this.#s.get(e);
  }
  replaceSyncedPluginDirs(e, t = new Map(), o = new Map()) {
    ((this.#o = e), (this.#r = t), (this.#s = o), (this.#i = this.#f(this.#i)));
  }
  clearSyncedPluginDirs() {
    ((this.#o = void 0), (this.#r = new Map()), (this.#s = new Map()), (this.#i = new Map()));
  }
  attestedOfficialPluginMarketplace(e) {
    return this.#i.get(e);
  }
  replaceAttestedOfficialPluginIds(e) {
    this.#i = this.#f(e);
  }
  #f(e) {
    let t = new Set([...this.#r.values()].map((o) => `${o.pluginName}@${o.marketplace}`));
    return new Map([...e].filter(([o, r]) => t.has(`${o.slice(0, o.lastIndexOf("@"))}@${r}`)));
  }
  additionalDirectoriesForClaudeMd() {
    return this.#d;
  }
  replaceAdditionalDirectoriesForClaudeMd(e) {
    this.#d = e;
  }
  claudeMdAdditionalDirectoriesAsked() {
    return this.#u;
  }
  askClaudeMdAdditionalDirectories(e) {
    this.#u = e;
  }
  allowedChannels() {
    return this.#l;
  }
  replaceAllowedChannels(e) {
    this.#l = e;
  }
  hasDevChannels() {
    return this.#c;
  }
  replaceHasDevChannels(e) {
    this.#c = e;
  }
  sessionSkillAllowlist() {
    return this.#p;
  }
  replaceSessionSkillAllowlist(e) {
    this.#p = e;
  }
  chromeFlagOverride() {
    return this.#a;
  }
  replaceChromeFlagOverride(e) {
    this.#a = e;
  }
  teammateAgentId() {
    return this.#g;
  }
  replaceTeammateAgentId(e) {
    this.#g = e;
  }
  reset() {
    ((this.#e = []),
      (this.#t = []),
      (this.#n = []),
      this.clearSyncedPluginDirs(),
      (this.#d = []),
      (this.#u = void 0),
      (this.#l = []),
      (this.#c = !1),
      (this.#p = void 0),
      (this.#a = void 0),
      (this.#g = void 0));
  }
}
class _e {
  #e = null;
  #t = null;
  #n = new Set();
  modelStrings() {
    return this.#e;
  }
  replaceModelStrings(e) {
    this.#e = e;
  }
  invalidate() {
    ((this.#e = null), (this.#n = new Set()));
  }
  admin3PSteeringSnapshot() {
    return this.#t;
  }
  recordAdmin3PSteeringSnapshot(e) {
    this.#t = e;
  }
  probeRefutedDocumentDefaults() {
    return this.#n;
  }
  recordProbeRefutedDocumentDefault(e) {
    this.#n.add(e);
  }
  reset() {
    ((this.#e = null), (this.#t = null), (this.#n = new Set()));
  }
}
var zt = [];
class qe {
  #e = [];
  #t = [];
  #n = void 0;
  errorLog() {
    return this.#e;
  }
  recordError(e) {
    if (this.#e.length >= 100) this.#e.shift();
    this.#e.push(e);
  }
  recordSlowOperation(e, t) {
    return;
  }
  slowOperations() {
    if (this.#t.length === 0) return zt;
    let e = Date.now();
    if (this.#t.some((t) => e - t.timestamp >= 1e4)) {
      if (((this.#t = this.#t.filter((t) => e - t.timestamp < 1e4)), this.#t.length === 0))
        return zt;
    }
    return this.#t;
  }
  recordDevBarAlert(e) {
    return;
  }
  devBarAlert() {
    let e = this.#n;
    if (e && Date.now() - e.timestamp >= 60000) {
      this.#n = void 0;
      return;
    }
    return e;
  }
  reset() {
    ((this.#e = []), (this.#t = []), (this.#n = void 0));
  }
}
var qpi = 100;
function Qt() {
  return { direct: { strict: null, customer: null }, proxied: { strict: null, customer: null } };
}
function Yt() {
  return {
    rateTokens: null,
    rateLastRefillMs: null,
    featureOkLogged: !1,
    reportedDropReasons: new Set()
  };
}
class Ne {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #s = null;
  #i = null;
  #d = null;
  #u = null;
  #l = null;
  #c = null;
  #p = null;
  #a = null;
  #g = [];
  #f = null;
  #m = Yt();
  #y = null;
  #S = null;
  #h = null;
  #v = Qt();
  #b = null;
  #k = null;
  installMeter(e, t, { omitUnits: o = !1 } = {}) {
    this.#e = e;
    let r = (i) => (o ? void 0 : i);
    ((this.#t = t("claude_code.session.count", { description: "Count of CLI sessions started" })),
      (this.#n = t("claude_code.lines_of_code.count", {
        description:
          "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change"
      })),
      (this.#o = t("claude_code.pull_request.count", {
        description: "Number of pull requests created"
      })),
      (this.#r = t("claude_code.commit.count", { description: "Number of git commits created" })),
      (this.#s = t("claude_code.cost.usage", {
        description: "Cost of the Claude Code session",
        unit: r("USD")
      })),
      (this.#i = t("claude_code.token.usage", {
        description: "Number of tokens used",
        unit: r("tokens")
      })),
      (this.#d = t("claude_code.code_edit_tool.decision", {
        description:
          "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
      })),
      (this.#u = t("claude_code.active_time.total", {
        description: "Total active time in seconds",
        unit: r("s")
      })));
  }
  meter() {
    return this.#e;
  }
  sessionCounter() {
    return this.#t;
  }
  locCounter() {
    return this.#n;
  }
  prCounter() {
    return this.#o;
  }
  commitCounter() {
    return this.#r;
  }
  costCounter() {
    return this.#s;
  }
  tokenCounter() {
    return this.#i;
  }
  codeEditToolDecisionCounter() {
    return this.#d;
  }
  activeTimeCounter() {
    return this.#u;
  }
  statsStore() {
    return this.#l;
  }
  replaceStatsStore(e) {
    this.#l = e;
  }
  loggerProvider() {
    return this.#c;
  }
  replaceLoggerProvider(e) {
    this.#c = e;
  }
  eventLogger() {
    return this.#p;
  }
  eventLoggerOwner() {
    return this.#a;
  }
  attachEventLogger(e, t) {
    if (((this.#p = e), (this.#a = e ? t : null), !e)) return;
    let o = this.#g;
    if (((this.#g = null), o)) for (let r of o) e.emit(r);
  }
  bufferPendingEvent(e) {
    if (this.#g === null || this.#g.length >= 100) return !1;
    return (this.#g.push(e), !0);
  }
  closeWindow(e) {
    ((this.#g = null), (this.#f = e));
  }
  windowCloseCause() {
    return this.#f;
  }
  isWindowOpen() {
    return this.#g !== null;
  }
  hostOtel() {
    return this.#m;
  }
  meterProvider() {
    return this.#y;
  }
  replaceMeterProvider(e) {
    this.#y = e;
  }
  tracerProvider() {
    return this.#S;
  }
  replaceTracerProvider(e) {
    this.#S = e;
  }
  cachedTelemetryResource() {
    return this.#h;
  }
  replaceCachedTelemetryResource(e) {
    this.#h = e;
  }
  cachedOtlpHttpAgentFactory(e, t) {
    return this.#v[e ? "proxied" : "direct"][t];
  }
  replaceCachedOtlpHttpAgentFactory(e, t, o) {
    this.#v[e ? "proxied" : "direct"][t] = o;
  }
  inClusterOtlpTrustRoots() {
    return this.#b;
  }
  replaceInClusterOtlpTrustRoots(e) {
    this.#b = e;
  }
  inClusterOtlpAgentFactory() {
    return this.#k;
  }
  replaceInClusterOtlpAgentFactory(e) {
    this.#k = e;
  }
  reset() {
    ((this.#e = null),
      (this.#t = null),
      (this.#n = null),
      (this.#o = null),
      (this.#r = null),
      (this.#s = null),
      (this.#i = null),
      (this.#d = null),
      (this.#u = null),
      (this.#l = null),
      (this.#c = null),
      (this.#p = null),
      (this.#a = null),
      (this.#g = []),
      (this.#f = null),
      (this.#m = Yt()),
      (this.#y = null),
      (this.#S = null),
      (this.#h = null),
      (this.#v = Qt()),
      (this.#b = null),
      (this.#k = null));
  }
}
class We {
  #e = void 0;
  #t = null;
  #n = void 0;
  #o = !1;
  #r = null;
  #s = void 0;
  #i = void 0;
  #d = new Set();
  #u = new Map();
  #l = void 0;
  #c = null;
  #p = new Set();
  #a = null;
  #g = 0;
  #f = null;
  #m = !1;
  #y = () => !1;
  #S = null;
  #h = void 0;
  #v = null;
  #b = null;
  sessionIngressToken() {
    return this.#e;
  }
  replaceSessionIngressToken(e) {
    this.#e = e;
  }
  inferenceRequestToken() {
    return this.#t;
  }
  replaceInferenceRequestToken(e) {
    this.#t = e;
  }
  oauthTokenFromFd() {
    return this.#n;
  }
  replaceOauthTokenFromFd(e) {
    this.#n = e;
  }
  oauthTokenFromBgSnapshot() {
    return this.#o;
  }
  replaceOauthTokenFromBgSnapshot(e) {
    this.#o = e;
  }
  oauthOrgFromBgSnapshot() {
    return this.#r;
  }
  replaceOauthOrgFromBgSnapshot(e) {
    this.#r = e;
  }
  oauthScopesFromFd() {
    return this.#s;
  }
  replaceOauthScopesFromFd(e) {
    this.#s = e;
  }
  apiKeyFromFd() {
    return this.#i;
  }
  replaceApiKeyFromFd(e) {
    this.#i = e;
  }
  descriptorAnnouncementConsumed(e) {
    return this.#d.has(e);
  }
  markDescriptorAnnouncementConsumed(e) {
    this.#d.add(e);
  }
  credentialRoad(e) {
    return this.#u.get(e);
  }
  noteCredentialRoad(e, t, o) {
    if (o !== null && !this.#u.has(e)) this.#u.set(e, t);
  }
  gatewayTokenFromDescriptor() {
    return this.#l;
  }
  replaceGatewayTokenFromDescriptor(e) {
    this.#l = e;
  }
  resetFdCredentialState() {
    ((this.#e = void 0),
      (this.#n = void 0),
      (this.#o = !1),
      (this.#r = null),
      (this.#s = void 0),
      (this.#i = void 0));
  }
  gatewayAuth() {
    return this.#c;
  }
  replaceGatewayAuth(e) {
    this.#c = e;
  }
  isGatewayHostHeldStrict(e) {
    return this.#p.has(e);
  }
  holdGatewayHostStrict(e) {
    this.#p.add(e);
  }
  releaseGatewayHost(e) {
    this.#p.delete(e);
  }
  gatewayServerProcess() {
    return this.#m;
  }
  replaceGatewayServerProcess(e) {
    this.#m = e;
  }
  gatewayRequiredByHostPolicy() {
    return this.#y();
  }
  replaceGatewayRequiredByHostPolicyReader(e) {
    this.#y = e;
  }
  authenticatedAccount() {
    return this.#a;
  }
  authenticatedAccountEpoch() {
    return this.#g;
  }
  stampAuthenticatedAccount(e) {
    let t = this.#a;
    if (
      e !== null &&
      t !== null &&
      e.accountUuid === t.accountUuid &&
      e.emailAddress === t.emailAddress &&
      e.organizationUuid === t.organizationUuid
    )
      return;
    ((this.#g += 1), (this.#a = e), (this.#f = null));
  }
  bearerPlan() {
    return this.#f;
  }
  replaceBearerPlan(e) {
    this.#f = e;
  }
  startupPolicySnapshot() {
    return this.#h;
  }
  replaceStartupPolicySnapshot(e) {
    this.#h = e;
  }
  gatewayRefreshInFlight() {
    return this.#S;
  }
  replaceGatewayRefreshInFlight(e) {
    this.#S = e;
  }
  sdkOAuthTokenRefreshCallback() {
    return this.#v;
  }
  replaceSdkOAuthTokenRefreshCallback(e) {
    this.#v = e;
  }
  hostAuthTokenRefreshCallback() {
    return this.#b;
  }
  replaceHostAuthTokenRefreshCallback(e) {
    this.#b = e;
  }
  resetForTests() {
    ((this.#e = null),
      (this.#t = null),
      (this.#n = null),
      (this.#o = !1),
      (this.#s = void 0),
      (this.#i = null),
      this.#d.clear(),
      this.#u.clear(),
      (this.#l = void 0),
      (this.#c = null),
      this.#p.clear(),
      (this.#a = null),
      (this.#g = 0),
      (this.#f = null),
      (this.#m = !1),
      (this.#y = () => !1),
      (this.#S = null),
      (this.#h = void 0),
      (this.#v = null),
      (this.#b = null));
  }
}
class Ge {
  #e = void 0;
  #t = !1;
  #n = !1;
  #o;
  directConnectServerUrl() {
    return this.#e;
  }
  replaceDirectConnectServerUrl(e) {
    this.#e = e;
  }
  connectNonBlocking() {
    return this.#t;
  }
  replaceConnectNonBlocking(e) {
    this.#t = e;
  }
  strictConfig() {
    return this.#n;
  }
  replaceStrictConfig(e) {
    this.#n = e;
  }
  registerEnsureConnectedClient(e) {
    this.#o = e;
  }
  ensureConnectedClient() {
    return this.#o;
  }
  reset() {
    ((this.#e = void 0), (this.#t = !1), (this.#n = !1));
  }
}
class Ke {
  #e = null;
  #t = new Map();
  #n = new Map();
  #o = new Set();
  #r = new Set();
  #s = new Set();
  #i = new Map();
  #d = !1;
  #u = !1;
  #l = !1;
  #c = !1;
  #p = !1;
  #a = !1;
  #g = !1;
  #f = !1;
  #m = !1;
  #y = new Set();
  #S = !1;
  #h = new Set();
  #v = !1;
  #b = !1;
  #k = !1;
  #x = !1;
  #C = new Map();
  #T = void 0;
  #R = void 0;
  #P = !1;
  #A = void 0;
  #w = void 0;
  #M = new Map();
  #L = new Map();
  promptCache1hAllowlist() {
    return this.#e;
  }
  replacePromptCache1hAllowlist(e) {
    this.#e = e;
  }
  thinkingTypeOverrides() {
    return this.#t;
  }
  recordThinkingTypeOverride(e, t) {
    this.#t.set(e, t);
  }
  servedModelsByRequestedModel() {
    return this.#n;
  }
  recordServedModels(e, t) {
    this.#n.set(e, t);
  }
  effortUnsupportedModels() {
    return this.#o;
  }
  markEffortUnsupported(e) {
    this.#o.add(e);
  }
  structuredOutputsUnsupportedModels() {
    return this.#r;
  }
  markStructuredOutputsUnsupported(e) {
    this.#r.add(e);
  }
  clearStructuredOutputsUnsupported() {
    this.#r = new Set();
  }
  context1mRefusedModels() {
    return this.#s;
  }
  markContext1mRefused(e) {
    this.#s.add(e);
  }
  clearContext1mRefused() {
    this.#s = new Set();
  }
  refusedBetas(e) {
    return this.#i.get(e) ?? [];
  }
  markBetaRefused(e, t) {
    let o = this.#i.get(e);
    if (o) o.add(t);
    else this.#i.set(e, new Set([t]));
  }
  midConvCachePromotionRejected() {
    return this.#d;
  }
  markMidConvCachePromotionRejected() {
    this.#d = !0;
  }
  perTurnEffortOkEmitted() {
    return this.#u;
  }
  markPerTurnEffortOkEmitted() {
    this.#u = !0;
  }
  lateToolAdditionsOkEmitted() {
    return this.#l;
  }
  markLateToolAdditionsOkEmitted() {
    this.#l = !0;
  }
  toolResultScreeningOkEmitted() {
    return this.#c;
  }
  markToolResultScreeningOkEmitted() {
    this.#c = !0;
  }
  toolChangeHeaderRefused() {
    return this.#p;
  }
  markToolChangeHeaderRefused() {
    this.#p = !0;
  }
  promptEndMarkRefused() {
    return this.#a;
  }
  markPromptEndMarkRefused() {
    this.#a = !0;
  }
  inlineToolsRefused() {
    return this.#g;
  }
  markInlineToolsRefused() {
    this.#g = !0;
  }
  inlineToolsOkEmitted() {
    return this.#f;
  }
  markInlineToolsOkEmitted() {
    this.#f = !0;
  }
  thinkingResumptionRefused() {
    return this.#m;
  }
  markThinkingResumptionRefused() {
    this.#m = !0;
  }
  refusedBetaHeaders() {
    return this.#y;
  }
  markBetaHeaderRefused(e) {
    this.#y.add(e);
  }
  thinkingHighlightsRefused() {
    return this.#S;
  }
  markThinkingHighlightsRefused() {
    this.#S = !0;
  }
  toolChangeUnsupportedModels() {
    return this.#h;
  }
  markToolChangeUnsupportedModel(e) {
    this.#h.add(e);
  }
  internalModelFieldsRefused() {
    return this.#v;
  }
  markInternalModelFieldsRefused() {
    this.#v = !0;
  }
  internalModelFieldsRefusalAnnounced() {
    return this.#b;
  }
  markInternalModelFieldsRefusalAnnounced() {
    this.#b = !0;
  }
  thirdPartyServerClassifierRefused() {
    return this.#k;
  }
  markThirdPartyServerClassifierRefused() {
    this.#k = !0;
  }
  releaseThirdPartyServerClassifierRefusal() {
    this.#k = !1;
  }
  threadsHeldForServerClassifier() {
    return this.#x;
  }
  markThreadsHeldForServerClassifier() {
    this.#x = !0;
  }
  autoModeUnavailableResponse(e) {
    return this.#C.get(e);
  }
  autoModeUnavailableResponsesInARow(e) {
    let t = 0;
    for (let o of this.#C.values()) if (o.runKey === e) t++;
    return t;
  }
  noteAutoModeUnavailableResponse(e, t) {
    this.#C.set(e, t);
  }
  clearAutoModeUnavailableResponses(e) {
    for (let [t, o] of this.#C) if (o.runKey === e) this.#C.delete(t);
  }
  setAutoModeUnavailableStopNotice(e) {
    this.#T = e;
  }
  autoModeUnavailableStopNotice() {
    return this.#T;
  }
  setLocalCommandExitCode(e) {
    this.#R = e;
  }
  localCommandExitCode() {
    return this.#R;
  }
  observedGateway() {
    return this.#A;
  }
  serverClassifierFallbackChoice() {
    return this.#w;
  }
  setServerClassifierFallbackChoice(e) {
    this.#w = e;
  }
  clearServerClassifierFallbackChoice() {
    this.#w = void 0;
  }
  noteObservedGateway(e) {
    this.#A ??= e;
  }
  takeServerClassifierFallbackAnnouncement() {
    if (!this.#k || this.#P) return !1;
    return ((this.#P = !0), !0);
  }
  inferenceProfileBackingModels() {
    return this.#M;
  }
  recordInferenceProfileBackingModel(e, t) {
    this.#M.set(e, t);
  }
  foundryDeploymentCapabilities() {
    return this.#L;
  }
  reset() {
    ((this.#e = null),
      (this.#t = new Map()),
      (this.#n = new Map()),
      (this.#o = new Set()),
      (this.#r = new Set()),
      (this.#s = new Set()),
      (this.#i = new Map()),
      (this.#d = !1),
      (this.#u = !1),
      (this.#l = !1),
      (this.#c = !1),
      (this.#p = !1),
      (this.#a = !1),
      (this.#g = !1),
      (this.#f = !1),
      (this.#m = !1),
      (this.#y = new Set()),
      (this.#S = !1),
      (this.#h = new Set()),
      (this.#v = !1),
      (this.#b = !1),
      (this.#k = !1),
      (this.#x = !1),
      this.#C.clear(),
      (this.#T = void 0),
      (this.#R = void 0),
      (this.#P = !1),
      (this.#A = void 0),
      (this.#w = void 0),
      (this.#M = new Map()),
      (this.#L = new Map()));
  }
}
class Ve {
  #e = !1;
  #t = !1;
  longContext1mCreditsBlocked() {
    return this.#e;
  }
  replaceLongContext1mCreditsBlocked(e) {
    this.#e = e;
  }
  usageCreditsRequired() {
    return this.#t;
  }
  replaceUsageCreditsRequired(e) {
    this.#t = e;
  }
  reset() {
    ((this.#e = !1), (this.#t = !1));
  }
}
class Je {
  #e = !1;
  #t = !1;
  #n = $t;
  #o = De();
  selectorGate() {
    return this.#e;
  }
  selectorGateEverOn() {
    return this.#t;
  }
  replaceSelectorGate(e) {
    ((this.#e = e), (this.#t ||= e));
  }
  inheritSelectorGateEverOn() {
    this.#t = !0;
  }
  resampleSelectorGate(e) {
    let t = this.#e;
    if (((this.#e = e), (this.#t ||= e), t !== e)) this.#o.emit(e);
  }
  subscribeSelectorGateChanged(e) {
    return this.#o.subscribe(e);
  }
  replaceHostGateSubscription(e) {
    let t = this.#n;
    ((this.#n = e), t());
  }
  dropHostGateSubscription() {
    this.replaceHostGateSubscription($t);
  }
}
function $t() {}
class ze {
  started = !1;
  stagingReaped = !1;
  claim() {
    if (this.started) return !1;
    return ((this.started = !0), !0);
  }
  claimStagingReap() {
    if (this.stagingReaped) return !1;
    return ((this.stagingReaped = !0), !0);
  }
}
class Qe {
  clock;
  backgroundHousekeeping;
  launchOptions;
  settingsSource;
  extensionsConfig;
  modelStringsCache;
  diagnostics;
  telemetryHandles;
  credentialSlots;
  mcpProcessWiring;
  requestLatches;
  accountCreditLatches;
  proactivity;
  constructor(e) {
    ((this.clock = e.clock),
      (this.backgroundHousekeeping = e.backgroundHousekeeping),
      (this.launchOptions = e.launchOptions),
      (this.settingsSource = e.settingsSource),
      (this.extensionsConfig = e.extensionsConfig),
      (this.modelStringsCache = e.modelStringsCache),
      (this.diagnostics = e.diagnostics),
      (this.telemetryHandles = e.telemetryHandles),
      (this.credentialSlots = e.credentialSlots),
      (this.mcpProcessWiring = e.mcpProcessWiring),
      (this.requestLatches = e.requestLatches),
      (this.accountCreditLatches = e.accountCreditLatches),
      (this.proactivity = e.proactivity));
  }
}
function Xt() {
  return new Qe({
    clock: new pJr(),
    backgroundHousekeeping: new ze(),
    launchOptions: new Be(),
    settingsSource: new Ue(),
    extensionsConfig: new je(),
    modelStringsCache: new _e(),
    diagnostics: new qe(),
    telemetryHandles: new Ne(),
    credentialSlots: new We(),
    mcpProcessWiring: new Ge(),
    requestLatches: new Ke(),
    accountCreditLatches: new Ve(),
    proactivity: new Je()
  });
}
function Fr(e = Fss()) {
  return W9r({
    host: Xt(),
    id: _Yt() ?? uie(),
    project: { originalCwd: e, projectRoot: e, cwd: e }
  });
}
var k = Fr(xAn);
function U() {
  return n();
}
function n() {
  return x()?.session ?? k;
}
function es(e) {
  return e.of(k.host);
}
function m() {
  let e = x();
  return e?.session ? void 0 : e;
}
var x = () => {
  return;
};
function lIi(e) {
  x = e;
}
Gt((e) => Nt.of(n().host).reporter?.(e));
lmi({
  isDiskless: () => J(),
  isDisklessProcess: () => cm(),
  reportBuilt: (e) => cmi.of(n().host).reporter?.(e)
});
function q() {
  return m()?.sessionId ?? n().id;
}
function tt() {
  let e = m()?.sessionId;
  if (e) return Br(e);
  let t = n();
  return t.identity.mainAgentId(t.id);
}
function tn() {
  let e = n();
  return (
    e.requestJournal.promptIndex() > 0 || e.sessionScratch.chromeAvailabilityStagesLogged().size > 0
  );
}
function mts(e = {}) {
  let t = n(),
    o = t.id;
  (t.sessionScratch.forgetPlanSlug(o), t.identity.replaceProjectDir(null));
  let r = tn();
  (t.requestJournal.replacePromptIndex(0),
    t.requestJournal.replaceLastPersonPrompt(null),
    t.requestJournal.replaceLastCancelledAPIMessageId(null),
    t.requestJournal.clearLastMainThreadRequest(),
    t.requestJournal.replaceLastMainRequestId(void 0),
    t.modelSelection.forgetRefusalFallbackOccurred(),
    t.sessionFlags.forgetPendingContextCompacted(),
    t.sessionScratch.replacePendingBranchLinks(),
    t.sessionScratch.replaceChromeAvailabilityStagesLogged(r));
  let i = rn(),
    s = uie();
  return (
    t.costLedger.scopeTo(s),
    t.update({ id: s, ...(e.setCurrentAsParent && { parentId: o }) }),
    nn(t, "clear", i),
    t.id
  );
}
function nn(e, t, o) {
  let r = sn.of(e);
  if (o) r.emit(e.id, t, o);
  else r.emit(e.id, t);
}
function on(e) {
  ln.of(e).emit(So(e).originalCwd);
}
function iFe() {
  let e = m();
  return e ? e.parentSessionId : n().parentId;
}
function hS(e, t, o = null, r) {
  let i = n(),
    s = r ? A(i.project, an(r)) : r,
    a,
    l = i.parentId;
  if (i.id !== e) {
    if (
      (i.sessionScratch.forgetPlanSlug(i.id),
      i.requestJournal.replaceLastCancelledAPIMessageId(null),
      i.requestJournal.replaceLastPersonPrompt(null),
      i.requestJournal.clearLastMainThreadRequest(e),
      t !== "fork")
    )
      i.requestJournal.replaceLastMainRequestId(void 0);
    (i.modelSelection.forgetRefusalFallbackOccurred(),
      i.sessionFlags.forgetPendingContextCompacted(),
      i.sessionScratch.replacePendingBranchLinks(),
      i.sessionScratch.replaceChromeAvailabilityStagesLogged(tn()),
      (a = rn()),
      (l = void 0));
  }
  if (
    (i.identity.replaceProjectDir(o),
    i.update({ id: e, parentId: l, ...(s !== void 0 && { project: s }) }),
    nn(i, t, a),
    r?.originalCwd !== void 0)
  )
    on(i);
}
function rn() {
  let e = n(),
    t = e.modelSelection.refusalFallbackModelLatch();
  if (
    (e.modelSelection.unlatchRefusalFallbackModel("session_transition"),
    !t || e.modelSelection.mainLoopModelOverride() !== t.fallbackModel)
  )
    return;
  return (
    e.modelSelection.overrideMainLoopModel(t.previousOverride),
    {
      appStateModel: t.previousAppStateModel,
      forSessionValue: t.previousModelForSession,
      overrideValue: t.previousOverride,
      restoredToExplicitOverride: t.previousOverride !== void 0,
      fallbackModel: t.fallbackModel
    }
  );
}
var sn = new nt(() => De());
function Eu(e) {
  return sn.of(n()).subscribe(e);
}
function G9r() {
  return n().sessionScratch.humanAttachmentDigests();
}
function gts() {
  return n().sessionScratch.inboundAttachmentFiles();
}
function aFe() {
  return n().sessionScratch.filesPlacedByName();
}
function Tdr() {
  return n().sessionScratch.filesPlacedByNameRead();
}
function z9r(e) {
  n().sessionScratch.setFilesPlacedByNameRead(e);
}
function vYt() {
  return n().sessionScratch.inboundAttachmentDownloads();
}
function hit() {
  return n().sessionScratch.arrivingInboundFiles();
}
function xSe() {
  let e = m();
  return e ? e.sessionProjectDir : n().identity.projectDir();
}
function ke() {
  return m()?.originalCwd ?? So(n()).originalCwd;
}
function ci() {
  if (m()?.originalCwd === void 0 && n().project === null) return null;
  return ke();
}
function wX() {
  return zCt();
}
function kC() {
  return ke() === Ir();
}
function ao() {
  return m()?.projectRoot ?? So(n()).projectRoot;
}
function ru() {
  if (m()?.projectRoot === void 0 && n().project === null) return null;
  return ao();
}
function an(e) {
  return e;
}
function pTn(e) {
  let t = n();
  if ((t.update({ project: an(e) }), e.originalCwd !== void 0)) on(t);
}
function MI(e) {
  pTn({ originalCwd: e });
}
var ln = new nt(() => De());
function hts(e) {
  return ln.of(n()).subscribe(e);
}
function Lxe(e) {
  pTn({ projectRoot: e });
}
function mk() {
  return So(n()).cwd;
}
function yit(e) {
  pTn({ cwd: e });
}
function mTn() {
  n().costLedger.restartClock();
}
function SYe() {
  return n().costLedger.sessionStartTime();
}
function yts() {
  return n().host.mcpProcessWiring.directConnectServerUrl();
}
function ope() {
  return n().host.mcpProcessWiring.connectNonBlocking();
}
function _ts(e) {
  n().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}
function bts() {
  return n().sessionFlags.teardownUnwindRequested();
}
function K9r(e) {
  n().sessionFlags.replaceTeardownUnwindRequested(e);
}
function Sts() {
  return n().sessionFlags.backgroundAutoModeSetupInFlight();
}
function V9r(e) {
  n().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}
function wts() {
  return n().sessionFlags.deferredToolStubGateLatch();
}
function vts(e) {
  n().sessionFlags.replaceDeferredToolStubGateLatch(e);
}
function Ets() {
  return n().sessionFlags.verifySkillRolloutGateLatch();
}
function kts(e) {
  n().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}
function Tts() {
  return n().sessionFlags.commitSkillRolloutGateLatch();
}
function Ats(e) {
  n().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}
function Cts() {
  return n().sessionFlags.memoryToolsShapeLatch();
}
function Adr(e) {
  n().sessionFlags.replaceMemoryToolsShapeLatch(e);
}
function gTn(e) {
  n().sessionFlags.armPendingContextCompacted(e);
}
function Rts() {
  return n().sessionFlags.consumePendingContextCompacted();
}
function xts() {
  n().sessionFlags.forgetPendingContextCompacted();
}
function xv() {
  return n().host.mcpProcessWiring.strictConfig();
}
function hTn(e) {
  n().host.mcpProcessWiring.replaceStrictConfig(e);
}
function yTn() {
  return n().host.launchOptions.cliSessionConfigCarried();
}
function _Tn(e) {
  n().host.launchOptions.replaceCliSessionConfigCarried(e);
}
function aF() {
  return n().host.launchOptions.forkRestrictedLaunchConfig();
}
function Pts(e) {
  n().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}
function gee() {
  return n().host.launchOptions.forkReplayLaunchConfig();
}
function Its(e) {
  n().host.launchOptions.replaceForkReplayLaunchConfig(e);
}
function bTn() {
  return n().mcpSessionWiring.approvedServers();
}
function Cdr(e, t) {
  n().mcpSessionWiring.approveServers(e, t);
}
function Ots(e, t) {
  n().costLedger.recordApiDuration(e, t);
}
function Mts(e, t, o) {
  n().costLedger.recordCost(e, t, o);
}
function Dts(e) {
  n().costLedger.recordSpentTokens(e);
}
function Gh() {
  return n().costLedger.totalCostUSD();
}
function Hts(e) {
  n().costLedger.recordSideQueryCost(e);
}
function Lts() {
  return n().costLedger.sideQueryCostUSD();
}
function lF() {
  return n().costLedger.totalAPIDuration();
}
function PSe() {
  return n().costLedger.totalDuration();
}
function q9r() {
  return n().costLedger.totalAPIDurationWithoutRetries();
}
function Y9r() {
  return n().costLedger.totalToolDuration();
}
function X9r(e) {
  n().costLedger.recordToolDuration(e);
}
function _Ct() {
  return n().host.telemetryHandles.statsStore();
}
function Nts(e) {
  n().host.telemetryHandles.replaceStatsStore(e);
}
function Iq(e) {
  n().userPresence.recordInteraction(e);
}
function hee() {
  n().userPresence.flushIfDirty();
}
function S6(e) {
  return n().userPresence.interactionFired.subscribe(e);
}
function $ts() {
  n().userPresence.resetBaseline();
}
function Fts(e, t) {
  n().costLedger.recordLinesChanged(e, t);
}
function lFe() {
  return n().costLedger.totalLinesAdded();
}
function dFe() {
  return n().costLedger.totalLinesRemoved();
}
function EYt() {
  return n().costLedger.totalInputTokens();
}
function ly() {
  return n().costLedger.totalOutputTokens();
}
function kYt() {
  return n().costLedger.totalCacheReadInputTokens();
}
function TYt() {
  return n().costLedger.totalCacheCreationInputTokens();
}
function Uts() {
  return n().costLedger.totalWebSearchRequests();
}
function Bts() {
  n().costLedger.markUnknownModelCost();
}
function J9r() {
  return n().costLedger.hasUnknownModelCost();
}
function Q9r() {
  n().costLedger.recordSafetyStop();
}
function yee() {
  return n().costLedger.safetyStops();
}
function Oq() {
  return n().requestJournal.lastMainRequestId();
}
function jts(e) {
  n().requestJournal.replaceLastMainRequestId(e);
}
function Nxe() {
  n().requestJournal.replaceLastMainRequestId(void 0);
}
function wYe() {
  return n().requestJournal.mainChainReleaseCount();
}
function vX() {
  return n().requestJournal.lastMainThreadCacheTtlMs();
}
function Wts(e, t) {
  return n().requestJournal.isLastMainThreadAskLive(e, t);
}
function xB() {
  return n().requestJournal.lastMainThreadRequestAt();
}
function STn() {
  return n().requestJournal.lastLiveMainThreadRequestAt();
}
function Gts(e, t, o) {
  n().requestJournal.replaceLastMainThreadCacheTtlMs(e, t, o);
}
function Rdr(e) {
  n().requestJournal.adjustLastMainThreadCacheTtlMs(e);
}
function zts(e) {
  n().requestJournal.recordLastMainThreadCacheRenewal(e);
}
function bCt() {
  return n().requestJournal.lastMainThreadCacheRenewedAt();
}
function cFe() {
  return n().requestJournal.lastMainThreadContextTokens();
}
function uFe(e) {
  n().requestJournal.replaceLastMainThreadContextTokens(e);
}
function Kts(e) {
  let t = n();
  if (e.sessionId !== void 0 && e.sessionId === t.id) t.requestJournal.applyResumeSeed(e);
  else t.requestJournal.stageResumeSeed(e);
}
function EX() {
  return n().requestJournal.lastApiCompletionTimestamp();
}
function xdr(e) {
  n().requestJournal.replaceLastApiCompletionTimestamp(e);
}
function AYt(e, { keepsCachedPrefix: t = !1 } = {}) {
  let o = n().requestJournal;
  if ((o.replacePendingPostCompaction(!0), o.replaceLastMainThreadContextTokens(e), !t))
    o.replaceLastMainThreadRequest(null, null);
}
function Vts() {
  let e = n(),
    t = e.requestJournal.pendingPostCompaction();
  return (e.requestJournal.replacePendingPostCompaction(!1), t);
}
function Jf() {
  return n().userPresence.lastInteractionTime();
}
function Z9r() {
  return n().userPresence.lastSubmitTime();
}
function _it() {
  n().userPresence.recordSubmit();
}
var vYe = 60000;
function qts(e) {
  n().userPresence.updateTerminalFocus(e);
}
function fFe() {
  return n().userPresence.terminalFocus();
}
function Yts(e) {
  return n().userPresence.terminalFocusFired.subscribe(e);
}
function Xts() {
  let e = fFe();
  if (e !== void 0) return e;
  return Date.now() - Jf() < vYe;
}
function eXr() {
  n().userPresence.markScrollActivity();
}
function SCt() {
  return n().userPresence.scrollDraining();
}
async function wTn() {
  return n().userPresence.waitForScrollIdle();
}
function zH() {
  return n().costLedger.modelUsage();
}
function Jts(e) {
  return n().costLedger.usageForModel(e);
}
function Qts() {
  n().costLedger.trackUsageSinceLastResult();
}
function Zts() {
  return n().costLedger.usageSinceLastResult();
}
function ens() {
  return n().costLedger.takeUsageSinceLastResult();
}
function $c() {
  return n().modelSelection.mainLoopModelOverride();
}
function rN() {
  return n().modelSelection.initialMainLoopModel();
}
function Rp(e) {
  n().modelSelection.overrideMainLoopModel(e);
}
function bit() {
  return n().modelSelection.mainLoopEffortState();
}
function vTn(e) {
  n().modelSelection.replaceMainLoopEffortState(e);
}
function tns(e) {
  n().modelSelection.markRefusalFallbackOccurred(e);
}
function Mq() {
  return n().modelSelection.refusalFallbackOccurred();
}
function CYt(e) {
  n().modelSelection.armRefusalFallbackHeader(e);
}
function EYe() {
  return n().modelSelection.refusalFallbackHeaderArmed();
}
function nns() {
  n().modelSelection.armSilentLaneFromServer();
}
function tXr() {
  return n().modelSelection.silentLaneServerArmed();
}
function rns() {
  return n().modelSelection.refusalFallbackLatchOriginRequestId();
}
function RYt(e) {
  let t = n(),
    o = t.modelSelection.refusalFallbackModelLatch();
  if (o && t.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
    t.modelSelection.replaceRefusalFallbackModelLatch({
      ...o,
      fallbackModel: e.fallbackModel,
      carriedEffort: e.carriedEffort ?? o.carriedEffort
    });
    return;
  }
  t.modelSelection.replaceRefusalFallbackModelLatch(e);
}
function ISe() {
  n().modelSelection.unlatchRefusalFallbackModel("model_pick");
}
function T2() {
  return n().modelSelection.refusalFallbackModelLatch();
}
function ETn(e) {
  let { modelSelection: t } = n(),
    o = t.refusalFallbackModelLatch();
  if (o !== void 0) t.replaceRefusalFallbackModelLatch({ ...o, carriedEffort: void 0 }, e);
}
function ons() {
  return n().modelSelection.takeCarriedEffortEnd();
}
function sns(e) {
  let t = n(),
    o = t.modelSelection.refusalFallbackModelLatch();
  if (o) t.modelSelection.replaceRefusalFallbackModelLatch({ ...o, previousOverride: e });
}
function ins() {
  n().modelSelection.forgetRefusalFallbackOccurred();
}
function ans(e) {
  n().surfaceCapabilities.markSdkDialogHostActive(e);
}
function A2() {
  return n().surfaceCapabilities.sdkDialogHostActive();
}
function nXr(e, t) {
  n().surfaceCapabilities.declareDialogKinds(e, t);
}
function spe() {
  return n().surfaceCapabilities.sdkSupportedDialogKinds();
}
function lns() {
  let e = n();
  if (e.surfaceCapabilities.sdkSupportedDialogKinds() === void 0) return "none";
  return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}
function dns(e) {
  n().surfaceCapabilities.declarePerTaskStopAffordance(e);
}
function kTn() {
  return n().surfaceCapabilities.sdkPerTaskStopAffordance() === !0;
}
function cns(e) {
  n().surfaceCapabilities.declareRapidFollowupPreempt(e);
}
function uns() {
  return n().surfaceCapabilities.sdkRapidFollowupPreempt() === !0;
}
function fns(e) {
  n().surfaceCapabilities.declareForwardNestedSubagentToolCalls(e);
}
function Pdr(e) {
  n().surfaceCapabilities.declareHostRendersChromeSetupOffer(e);
}
function wCt() {
  return n().surfaceCapabilities.hostRendersChromeSetupOffer() === !0;
}
function PB() {
  return n().host.launchOptions.replConfigArgv();
}
function kYe(e) {
  n().host.launchOptions.replaceReplConfigArgv(e);
}
function pns(e) {
  n().modelSelection.replaceInitialMainLoopModel(e);
}
function mns() {
  return n().modelSelection.availabilityFallbackChain();
}
function gns(e) {
  n().modelSelection.replaceAvailabilityFallbackChain(e);
}
function TTn() {
  return n().modelSelection.initialModelSettingLayer();
}
function hns(e) {
  n().modelSelection.replaceInitialModelSettingLayer(e);
}
function yns() {
  return n().modelSelection.resolvedOrgDefault();
}
function TYe(e) {
  n().modelSelection.replaceResolvedOrgDefault(e);
}
function _ns() {
  return n().modelSelection.initialEnvDefaultModel();
}
function bns(e) {
  n().modelSelection.replaceInitialEnvDefaultModel(e);
}
function dm() {
  return m()?.sdkBetas ?? n().surfaceCapabilities.sdkBetas();
}
function Sns(e) {
  n().surfaceCapabilities.replaceSdkBetas(e);
}
function Sit() {
  return n().host.accountCreditLatches.longContext1mCreditsBlocked();
}
function wns(e) {
  n().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}
function vns() {
  return n().host.accountCreditLatches.usageCreditsRequired();
}
function ATn(e) {
  n().host.accountCreditLatches.replaceUsageCreditsRequired(e);
}
function rXr(e) {
  return n().usageCreditsOnlyModelConsentSlots.consentSessionFallback(e);
}
function oXr(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceConsentSessionFallback(e, t);
}
function Ens(e) {
  return n().usageCreditsOnlyModelConsentSlots.sessionConsentKey(e);
}
function sXr(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceSessionConsentKey(e, t);
}
function oie() {
  return n().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}
function xYt(e) {
  n().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}
function AYe() {
  return n().host.credentialSlots.hostAuthTokenRefreshCallback();
}
function CTn(e) {
  n().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}
function kns(e) {
  k.costLedger.registerSaver(e);
}
function Tns(e) {
  n().costLedger.runSaver(e, k.costLedger);
}
function Ans(e) {
  k.costLedger.registerTranscriptRecorder(e);
}
function Cns(e, t) {
  n().costLedger.runTranscriptRecorder(e, t, k.costLedger);
}
function Rns() {
  let e = n();
  return e.costLedger.belongsTo(e.id);
}
function PYt() {
  let e = n();
  e.costLedger.claim(e.id);
}
function xns() {
  let e = n();
  e.costLedger.scopeTo(e.id);
}
function wit() {
  let e = n();
  (e.costLedger.reset(e.id), e.requestJournal.replacePromptId(null));
}
function Pns(e) {
  let t = n();
  t.costLedger.restore(e, t.id);
}
function no() {
  return n().host.launchOptions.projectConfigRoot();
}
function Ins(e) {
  n().host.launchOptions.replaceProjectConfigRoot(e);
}
function IYt() {
  return n().host.modelStringsCache.modelStrings();
}
function Idr(e) {
  n().host.modelStringsCache.replaceModelStrings(e);
}
function Ons() {
  n().host.modelStringsCache.invalidate();
}
function Mns(e) {
  n().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}
function Dns() {
  return n().host.modelStringsCache.admin3PSteeringSnapshot();
}
function Hns(e) {
  n().host.modelStringsCache.recordProbeRefutedDocumentDefault(e);
}
function Lns() {
  return n().host.modelStringsCache.probeRefutedDocumentDefaults();
}
function vCt() {
  return n().host.telemetryHandles.loggerProvider();
}
function iXr(e) {
  n().host.telemetryHandles.replaceLoggerProvider(e);
}
function CYe() {
  return n().host.telemetryHandles.eventLogger();
}
function aXr() {
  return n().host.telemetryHandles.eventLoggerOwner();
}
function lXr(e, t = "org") {
  n().host.telemetryHandles.attachEventLogger(e, t);
}
function Nns(e) {
  return n().host.telemetryHandles.bufferPendingEvent(e);
}
function dXr(e) {
  n().host.telemetryHandles.closeWindow(e);
}
function $ns() {
  return n().host.telemetryHandles.windowCloseCause();
}
function vit() {
  return n().host.telemetryHandles.isWindowOpen();
}
function OYt() {
  return n().host.telemetryHandles.hostOtel();
}
function Eit() {
  return n().host.telemetryHandles.tracerProvider();
}
function cXr(e) {
  n().host.telemetryHandles.replaceTracerProvider(e);
}
function Odr() {
  return n().host.requestLatches.foundryDeploymentCapabilities();
}
function Fns() {
  return n().host.telemetryHandles.cachedTelemetryResource();
}
function Uns(e) {
  n().host.telemetryHandles.replaceCachedTelemetryResource(e);
}
function Mdr(e, t) {
  return n().host.telemetryHandles.cachedOtlpHttpAgentFactory(e, t);
}
function Bns(e, t, o) {
  n().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, t, o);
}
function ye() {
  return !n().host.launchOptions.isInteractive();
}
function MYt() {
  return n().host.launchOptions.spareClaimState();
}
function DI() {
  return n().host.launchOptions.spareClaimState() === "parked";
}
function jns() {
  let e = n().host.launchOptions;
  (e.replaceSpareClaimState("parked"), e.replaceSpareParkedAtMs(Date.now()));
}
function Wns() {
  let e = n().host.launchOptions,
    t = e.spareParkedAtMs();
  return (e.replaceSpareClaimState("claiming"), t === void 0 ? void 0 : Date.now() - t);
}
function Gns() {
  n().host.launchOptions.replaceSpareClaimState("claimed");
}
function zns() {
  n().host.launchOptions.replaceSpareClaimState("failed");
}
function DYt() {
  let e = n().host.launchOptions.spareClaimState();
  return e === "parked" || e === "claiming" || e === "failed";
}
function Gc() {
  return n().host.launchOptions.isInteractive();
}
function RYe(e) {
  n().host.launchOptions.replaceIsInteractive(e);
}
function _ee() {
  return n().host.launchOptions.printOutputFormat();
}
function Kns(e) {
  n().host.launchOptions.replacePrintOutputFormat(e);
}
function kit() {
  return n().host.launchOptions.thinkingDisplayExplicit();
}
function Tit(e) {
  n().host.launchOptions.replaceThinkingDisplayExplicit(e);
}
function mT() {
  return n().host.launchOptions.permissionPromptToolName();
}
function Vns(e) {
  n().host.launchOptions.replacePermissionPromptToolName(e);
}
function ku() {
  return n().surfaceCapabilities.attacherCaps();
}
function qns(e) {
  n().surfaceCapabilities.replaceAttacherCaps(e);
}
function KH(e) {
  return n().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}
function Yns() {
  return n().surfaceCapabilities.rvSupervisorLinkLive();
}
function RTn(e) {
  n().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}
function Xns(e) {
  return n().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}
function ECt() {
  return n().host.launchOptions.hasStreamingInput();
}
function Jns(e) {
  n().host.launchOptions.replaceHasStreamingInput(e);
}
function Qns({ hasStreamingInput: e, sdkUrl: t }) {
  return !e && !t;
}
function Er(e) {
  if (e.entrypoint === "terminal") return e.ownEventsRequested ? "terminal" : "none";
  if (e.ownEventsOnly) return "evals";
  if (e.hasStreamingInput || e.sdkUrl) return "host";
  if (e.ownEventsRequested) return "evals";
  return "none";
}
function Zns(e) {
  n().host.launchOptions.replaceSingleShotPrintSession(e);
}
function Dq() {
  return n().host.launchOptions.singleShotPrintSession();
}
function ers() {
  n().host.launchOptions.markPrintInputClosed();
}
function pFe() {
  return n().host.launchOptions.printInputClosed();
}
function xTn() {
  return n().host.launchOptions.clientType();
}
function trs(e) {
  n().host.launchOptions.replaceClientType(e);
}
function OSe() {
  return n().host.launchOptions.sdkAgentProgressSummariesEnabled();
}
function PTn(e) {
  n().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}
function ITn() {
  return n().host.launchOptions.rendererMode();
}
function nrs(e) {
  n().host.launchOptions.replaceRendererMode(e);
}
function Ddr() {
  return n().host.launchOptions.strictToolResultPairing();
}
function fE() {
  return n().host.launchOptions.restrictedSession();
}
function OTn(e) {
  n().host.launchOptions.replaceRestrictedSession(e);
}
function MTn() {
  return n().host.launchOptions.workspaceRestrictionState()?.restriction ?? null;
}
function dP() {
  return MTn() !== null;
}
function Dr(e) {
  for (let [t, o] of n().host.launchOptions.restrictedWorkspaceRoots())
    if (e === t || e.startsWith(t.endsWith(Zt) ? t : t + Zt)) return o;
  return null;
}
function rrs(e) {
  return Dr(e) !== null;
}
function ors(e) {
  if (MTn()?.gateKeys.includes(e)) return !0;
  for (let t of n().host.launchOptions.restrictedWorkspaceRoots().values())
    if (t.gateKeys.includes(e)) return !0;
  return !1;
}
function srs() {
  return n().sessionFlags.accountMemoryLaunchMode();
}
function HI() {
  return n().sessionFlags.memoryToggledOff();
}
function sie(e) {
  let t = n();
  if (t.sessionFlags.memoryToggledOff() === e) return;
  (t.sessionFlags.replaceMemoryToggledOff(e), dn.of(t).emit(e));
}
var dn = new nt(() => De());
function DTn(e, t = n()) {
  return dn.of(t).subscribe(e);
}
function MSe() {
  return n().sessionFlags.autoMemoryOffThisSession();
}
function Ait(e) {
  let t = n();
  if (t.sessionFlags.autoMemoryOffThisSession() === e) return;
  if (
    (t.sessionFlags.replaceAutoMemoryOffThisSession(e),
    t.sessionFlags.accountMemorySessionMode() !== "off")
  )
    t.sessionFlags.replaceMemoryPausedByCommand(!1);
  un.of(t).emit(e);
}
var un = new nt(() => De());
function HTn(e, t = n()) {
  return un.of(t).subscribe(e);
}
function uXr() {
  return n().sessionFlags.restoredMemoryPause();
}
function HYt(e) {
  n().sessionFlags.replaceRestoredMemoryPause(e);
}
function irs() {
  return n().sessionFlags.restoredAutoMemoryOff();
}
function Cit(e) {
  n().sessionFlags.replaceRestoredAutoMemoryOff(e);
}
function ars(e) {
  if (e === !1)
    throw Error(
      "setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production"
    );
  n().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}
function lrs() {
  return n().host.launchOptions.wizardOperatorToolsEnabled();
}
function dIi(e) {
  if (e === !1)
    throw Error(
      "setRunnerDeclaredNestedRepositoryDiff(false) is test-only: the runner's declaration is one-way in production"
    );
  n().host.launchOptions.replaceRunnerDeclaredNestedRepositoryDiff(e);
}
function drs() {
  return n().host.launchOptions.runnerDeclaredNestedRepositoryDiff();
}
function cIi(e) {
  if (e === !1)
    throw Error(
      "setRunnerDeclaredNoRepositoryCheckedOut(false) is test-only: the runner's declaration is one-way in production"
    );
  n().host.launchOptions.replaceRunnerDeclaredNoRepositoryCheckedOut(e);
}
function crs() {
  return n().host.launchOptions.runnerDeclaredNoRepositoryCheckedOut();
}
function kCt() {
  return n().host.launchOptions.pollEventIngress();
}
function urs() {
  return kCt() !== "none";
}
function Hr(e) {
  n().host.launchOptions.markPollEventIngress(e);
}
function Ur() {
  n().host.launchOptions.markOwnEventDeliveryRequested();
}
function frs(e) {
  let t = Er(e);
  if (t !== "none" && !(t === "host" && kCt() === "evals")) Hr(t);
  if (e.ownEventsRequested) Ur();
}
function C2() {
  return n().host.launchOptions.userMsgOptIn();
}
function mFe(e) {
  n().host.launchOptions.replaceUserMsgOptIn(e);
}
function prs() {
  return n().host.launchOptions.searchToolsOptIn();
}
function mrs(e) {
  n().host.launchOptions.replaceSearchToolsOptIn(e);
}
function grs() {
  return n().host.launchOptions.todoToolsOptIn();
}
function hrs(e) {
  n().host.launchOptions.replaceTodoToolsOptIn(e);
}
function yrs() {
  return n().host.launchOptions.toolsOmittedByLaunchList();
}
function _rs(e) {
  n().host.launchOptions.replaceToolsOmittedByLaunchList(new Set(e));
}
function brs() {
  return n().host.launchOptions.sessionStartType();
}
function LTn(e) {
  n().host.launchOptions.replaceSessionStartType(e);
}
function fXr() {
  return n().host.launchOptions.questionPreviewFormat();
}
function pXr(e) {
  n().host.launchOptions.replaceQuestionPreviewFormat(e);
}
function $xe() {
  return n().host.launchOptions.extendedQuestionsEnabled();
}
function Srs(e) {
  n().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}
function wrs() {
  return n().host.launchOptions.questionOptionDescriptionsOptional();
}
function vrs(e) {
  n().host.launchOptions.replaceQuestionOptionDescriptionsOptional(e);
}
function mXr() {
  return n().sessionScratch.agentColorMap();
}
function VH() {
  return n().host.settingsSource.flagSettingsPath();
}
function Ers(e) {
  n().host.settingsSource.replaceFlagSettingsPath(e);
}
function DSe() {
  return n().host.settingsSource.flagAgentsFilePaths();
}
function krs(e) {
  n().host.settingsSource.replaceFlagAgentsFilePaths(e);
}
function HSe() {
  return n().host.settingsSource.flagMcpConfigFilePaths();
}
function Trs(e) {
  n().host.settingsSource.replaceFlagMcpConfigFilePaths(e);
}
function gT() {
  return n().host.settingsSource.flagSettingsExpectedContent();
}
function Ars(e) {
  n().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}
function iie() {
  return n().host.settingsSource.flagSettingsFilePinnedContent();
}
function Crs(e) {
  n().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}
function xp() {
  return n().host.settingsSource.flagSettingsInline();
}
function TC(e) {
  n().host.settingsSource.replaceFlagSettingsInline(e);
}
function TCt() {
  return n().host.settingsSource.parentManagedSettings();
}
function Rrs(e, t = null) {
  n().host.settingsSource.replaceParentManagedSettings(e, t);
}
function aie() {
  return n().host.settingsSource.parentManagedSettingsInvalid();
}
function gXr(e) {
  n().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}
function xrs() {
  return n().host.settingsSource.parentOrganizationSettings();
}
function xYe() {
  let e = x();
  return e ? e.secrets.sessionIngressToken : n().host.credentialSlots.sessionIngressToken();
}
function LSe(e) {
  let t = x();
  if (t) t.secrets.sessionIngressToken = e;
  else n().host.credentialSlots.replaceSessionIngressToken(e);
}
function w6() {
  return n().host.credentialSlots.oauthTokenFromFd();
}
function FM(e) {
  n().host.credentialSlots.replaceOauthTokenFromFd(e);
}
function _W() {
  return n().host.credentialSlots.oauthTokenFromBgSnapshot();
}
function LYt(e) {
  n().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}
function Prs() {
  return n().host.credentialSlots.oauthOrgFromBgSnapshot();
}
function hXr(e) {
  n().host.credentialSlots.replaceOauthOrgFromBgSnapshot(e);
}
function Irs() {
  return n().host.credentialSlots.oauthScopesFromFd();
}
function NYt(e) {
  n().host.credentialSlots.replaceOauthScopesFromFd(e);
}
function yXr() {
  return n().host.credentialSlots.apiKeyFromFd();
}
function _Xr(e) {
  n().host.credentialSlots.replaceApiKeyFromFd(e);
}
function NTn(e) {
  return n().host.credentialSlots.descriptorAnnouncementConsumed(e);
}
function NSe(e) {
  n().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}
function $Yt(e) {
  return n().host.credentialSlots.credentialRoad(e);
}
function $Se(e, t, o) {
  n().host.credentialSlots.noteCredentialRoad(e, t, o);
}
function bXr() {
  return n().host.credentialSlots.gatewayTokenFromDescriptor();
}
function Hdr(e) {
  n().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}
function Ors() {
  n().host.credentialSlots.resetFdCredentialState();
}
function Wr() {
  return n().host.credentialSlots.gatewayAuth();
}
function Mrs() {
  let e = n().host.credentialSlots.gatewayAuth();
  return !!e && e.expiresAt <= Date.now();
}
function LI(e) {
  return !!e && !e.unpinned;
}
function Ldr(e) {
  let t = e?.hostVerdict;
  return t !== void 0 && "verified" in t && t.verified;
}
function Ndr(e) {
  return LI(e) || Ldr(e);
}
function Drs(e) {
  n().host.credentialSlots.replaceGatewayServerProcess(e);
}
function Rit() {
  return n().host.credentialSlots.gatewayServerProcess();
}
function xit(e) {
  n().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}
function Pit() {
  return n().host.credentialSlots.gatewayRequiredByHostPolicy();
}
function lie(e) {
  n().host.credentialSlots.replaceGatewayAuth(e);
}
function Hrs(e) {
  return n().host.credentialSlots.isGatewayHostHeldStrict(e);
}
function FYt(e) {
  n().host.credentialSlots.holdGatewayHostStrict(e.replace(/\.$/, ""));
}
function Lrs(e) {
  n().host.credentialSlots.releaseGatewayHost(e.replace(/\.$/, ""));
}
function Nrs() {
  return n().host.credentialSlots.authenticatedAccount();
}
function bee(e) {
  n().host.credentialSlots.stampAuthenticatedAccount(e);
}
function FSe() {
  return n().host.credentialSlots.authenticatedAccountEpoch();
}
function SXr() {
  return n().host.credentialSlots.bearerPlan();
}
function $rs(e) {
  n().host.credentialSlots.replaceBearerPlan(e);
}
function Frs() {
  return n().host.credentialSlots.startupPolicySnapshot();
}
function Urs(e) {
  n().host.credentialSlots.replaceStartupPolicySnapshot(e);
}
function gFe() {
  return n().host.credentialSlots.gatewayRefreshInFlight();
}
function wXr(e) {
  n().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}
function Brs(e) {
  n().requestJournal.replaceLastAPIRequest(e);
}
function $Tn() {
  return n().requestJournal.lastAPIRequest();
}
function $dr(e) {
  n().requestJournal.replaceLastCancelledAPIMessageId(e);
}
function hFe() {
  return n().requestJournal.lastCancelledAPIMessageId();
}
function jrs(e) {
  n().requestJournal.replaceLastAPIRequestMessages(e);
}
function Fdr(e) {
  n().requestJournal.replaceLastClassifierRequests(e);
}
function vXr() {
  return n().requestJournal.lastClassifierRequests();
}
function FTn(e) {
  let t = m();
  if (t) t.cachedClaudeMdContent = e;
  else n().sessionFlags.replaceCachedClaudeMdContent(e);
}
function Wrs() {
  let e = m();
  return e ? e.cachedClaudeMdContent : n().sessionFlags.cachedClaudeMdContent();
}
function PYe() {
  let { settingsSource: e, launchOptions: t } = n().host;
  return t.workspaceRestrictionState()?.restriction
    ? e.allowedSettingSourcesWithoutRepoDirSources()
    : e.allowedSettingSources();
}
function USe() {
  return n().host.settingsSource.allowedSettingSources();
}
function EXr(e) {
  n().host.settingsSource.replaceAllowedSettingSources(e);
}
function UTn() {
  return ye() && n().host.launchOptions.clientType() !== "claude-vscode";
}
function IB(e) {
  n().host.extensionsConfig.replaceInlinePlugins(e);
}
function yS() {
  return n().host.extensionsConfig.inlinePlugins();
}
function BSe(e) {
  n().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}
function hT() {
  return n().host.extensionsConfig.inlinePluginsNoMcp();
}
function Grs(e) {
  n().host.extensionsConfig.replaceInlinePluginUrls(e);
}
function jSe() {
  return n().host.extensionsConfig.inlinePluginUrls();
}
function ACt(e, t, o) {
  n().host.extensionsConfig.replaceSyncedPluginDirs(e, t, o);
}
function zrs(e) {
  return n().host.extensionsConfig.syncedPluginRowId(e);
}
function BTn(e) {
  return n().host.extensionsConfig.syncedPluginAttestation(e);
}
function Krs(e) {
  n().host.extensionsConfig.replaceAttestedOfficialPluginIds(e);
}
function Vrs(e) {
  return n().host.extensionsConfig.attestedOfficialPluginMarketplace(e);
}
function Udr() {
  return n().host.extensionsConfig.syncedPluginDirsRegistered();
}
function IYe() {
  return n().pluginsSync.syncedLaneOpened;
}
function qrs() {
  n().pluginsSync.syncedLaneOpened = !0;
}
function kXr(e) {
  for (let t of e) n().pluginsSync.syncedDirsLoadedHere.add(en(t));
}
function Yrs(e) {
  return n().pluginsSync.syncedDirsLoadedHere.has(en(e));
}
function oN() {
  return n().pluginsSync;
}
function jTn() {
  return n().pluginsSync.lastCompleteList;
}
function WTn() {
  return n().pluginsSync.lastSyncedLaneLoad;
}
function Xrs(e) {
  n().pluginsSync.lastSyncedLaneLoad = e;
}
function Jrs() {
  (n().host.extensionsConfig.clearSyncedPluginDirs(),
    (n().pluginsSync.syncedLaneOpened = !1),
    n().pluginsSync.syncedDirsLoadedHere.clear(),
    n().pluginsSync.removalsDeferredHere.clear(),
    (n().pluginsSync.lastSyncedLaneLoad = null));
}
function See() {
  return n().host.extensionsConfig.syncedPluginDirs();
}
function GTn(e) {
  n().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}
function zTn() {
  return n().sessionFlags.accountSkillsSyncEnabled();
}
function KTn(e) {
  n().sessionFlags.replaceSkillsSyncVetoed(e);
}
function AC() {
  return n().sessionFlags.skillsSyncVetoed();
}
function Qrs(e) {
  n().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}
function yFe() {
  return n().sessionFlags.accountPluginsSyncEnabled();
}
function Zrs(e) {
  n().sessionFlags.replacePluginsSyncVetoed(e);
}
function bW() {
  return n().sessionFlags.pluginsSyncVetoed();
}
function eos(e) {
  n().host.extensionsConfig.replaceChromeFlagOverride(e);
}
function ipe() {
  return n().host.extensionsConfig.chromeFlagOverride();
}
function tos(e) {
  n().host.extensionsConfig.replaceTeammateAgentId(e);
}
function E_() {
  return n().host.extensionsConfig.teammateAgentId();
}
function nos(e) {
  n().sessionFlags.replaceOnboardingShownThisSession(e);
}
function ros() {
  return n().sessionFlags.onboardingShownThisSession();
}
function Hq(e) {
  let t = n();
  (t.host.settingsSource.replaceUseCoworkPlugins(e), $9r.of(t.host).invalidateAll());
}
function VTn() {
  return n().host.settingsSource.useCoworkPlugins();
}
function oos(e) {
  n().host.launchOptions.replaceDisableSlashCommands(e);
}
function k_() {
  return n().host.launchOptions.disableSlashCommands();
}
function qTn() {
  return n().host.launchOptions.disableFileMentions();
}
function kX() {
  return n().host.launchOptions.sessionUploadsDir();
}
function sos(e) {
  n().host.launchOptions.replaceLocalUploadsRoot(e);
}
function WSe() {
  return n().host.launchOptions.localUploadsRoot();
}
function YTn(e) {
  n().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}
function wee() {
  return n().host.launchOptions.sessionBypassPermissionsMode();
}
function SW(e) {
  n().host.launchOptions.replaceScheduledTasksEnabled(e);
}
function Bdr() {
  return n().host.launchOptions.scheduledTasksEnabled();
}
function ios(e) {
  return n().host.launchOptions.onScheduledTasksEnabled(e);
}
function Om() {
  return m()?.sessionCronTasks ?? n().sessionCron.tasks();
}
function Fxe(e) {
  let t = m();
  if (t) t.sessionCronTasks.push(e);
  else n().sessionCron.schedule(e);
  n().sessionCron.changed.emit();
}
function aos(e) {
  return n().sessionCron.chainStartedAt(e);
}
function TXr(e, t) {
  n().sessionCron.recordChainStart(e, t);
}
function XTn(e) {
  n().sessionCron.forgetChainStart(e);
}
function GSe() {
  return n().sessionCron.tickInFlightPrompt();
}
function los() {
  return n().sessionCron.tickInFlightPlugin();
}
function CCt(e, t) {
  n().sessionCron.replaceTickInFlightPrompt(e, t);
}
function AXr() {
  return n().sessionCron.consecutiveKeepalives();
}
function JTn(e) {
  n().sessionCron.replaceConsecutiveKeepalives(e);
}
function QTn() {
  return n().sessionCron.ended();
}
function UYt() {
  return n().sessionCron.wakeFires();
}
function ZTn() {
  n().sessionCron.recordWakeFire();
}
function BYt() {
  n().sessionCron.resetWakeFires();
}
function jdr(e) {
  if ((n().sessionCron.replaceEnded(e), e)) n().sessionCron.changed.emit();
}
function TX(e, { handOff: t = !1 } = {}) {
  if (e.length === 0) return 0;
  let o = new Set(e),
    r = m(),
    i = r ? r.sessionCronTasks : n().sessionCron.tasks(),
    s = i.filter((d) => !o.has(d.id)),
    a = i.length - s.length;
  if (a === 0) return 0;
  let l = !t && i.some((d) => d.kind === "loop" && o.has(d.id));
  if (r) ((r.sessionCronTasks.length = 0), r.sessionCronTasks.push(...s));
  else n().sessionCron.replaceTasks(s);
  if (l) n().sessionCron.pendingLoopWakeup.emit(void 0);
  return (n().sessionCron.changed.emit(), a);
}
function eAn(e) {
  return n().sessionCron.changed.subscribe(e);
}
function dos(e) {
  return n().sessionCron.pendingLoopWakeup.subscribe(e);
}
function jYt(e) {
  n().sessionCron.pendingLoopWakeup.emit(e);
}
function UM(e) {
  n().sessionFlags.replaceSessionTrustAccepted(e);
}
function Uxe() {
  return n().sessionFlags.sessionTrustAccepted();
}
function OYe(e) {
  n().sessionFlags.replaceHomeTrustDialogAccepted(e);
}
function Bxe() {
  return n().sessionFlags.homeTrustDialogAccepted();
}
function tAn(e) {
  n().host.launchOptions.replaceSessionPersistenceDisabled(e);
}
function qH() {
  return n().host.launchOptions.sessionPersistenceDisabled();
}
function J() {
  return Il();
}
function Il() {
  return n().host.launchOptions.diskless();
}
function cm() {
  return k.host.launchOptions.diskless();
}
function nAn() {
  return n().host.launchOptions.ccrSessionUrl();
}
function zSe() {
  return n().host.launchOptions.ccrDerivedSurface();
}
function Wdr(e) {
  n().host.launchOptions.replaceEntrypointOnRequests(e);
}
function vee() {
  return n().host.launchOptions.entrypointOnRequests();
}
function rAn() {
  return n().host.launchOptions.toolsMachine();
}
function oAn() {
  return n().sessionFlags.hasExitedPlanMode();
}
function OB(e) {
  n().sessionFlags.replaceHasExitedPlanMode(e);
}
function CXr() {
  return n().host.proactivity.selectorGate();
}
function cos() {
  return n().host.proactivity.selectorGateEverOn();
}
function uos() {
  n().host.proactivity.inheritSelectorGateEverOn();
}
function RXr(e) {
  n().host.proactivity.replaceSelectorGate(e);
}
function fos(e) {
  n().host.proactivity.resampleSelectorGate(e);
}
function WYt(e) {
  return n().host.proactivity.subscribeSelectorGateChanged(e);
}
function pos(e) {
  n().host.proactivity.replaceHostGateSubscription(e);
}
function mos() {
  return n().sessionFlags.needsPlanModeExitAttachment();
}
function v6(e) {
  n().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}
function KSe(e, t) {
  if (t === "plan" && e !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(!1);
  if (e === "plan" && t !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(!0);
}
function gos() {
  return n().sessionFlags.needsAutoModeExitAttachment();
}
function dF(e) {
  n().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}
function hos(e, t) {
  if ((e === "auto" && t === "plan") || (e === "plan" && t === "auto")) return;
  let o = e === "auto",
    r = t === "auto";
  if (r && !o) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!1);
  if (o && !r) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!0);
}
function xXr() {
  return n().sessionFlags.lspRecommendationShownThisSession();
}
function PXr(e) {
  n().sessionFlags.replaceLspRecommendationShownThisSession(e);
}
function yos(e) {
  n().host.launchOptions.replaceInitJsonSchema(e);
}
function IXr() {
  return n().host.launchOptions.initJsonSchema();
}
function _os(e) {
  n().mcpSessionWiring.registerClientsAccessor(e);
}
function OXr(e) {
  return n().mcpSessionWiring.acquireClientsAccessor(e);
}
function eg() {
  return n().mcpSessionWiring.clientsFromAccessor();
}
function sAn(e) {
  n().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}
function AX() {
  return n().host.mcpProcessWiring.ensureConnectedClient();
}
function RCt(e) {
  n().mcpSessionWiring.registerConnectedClientWiring(e);
}
function iAn() {
  return n().mcpSessionWiring.connectedClientWiring();
}
function bos(e) {
  n().mcpSessionWiring.registerToolsSwapper(e);
}
function MXr(e) {
  return n().mcpSessionWiring.acquireToolsSwapper(e);
}
function aAn(e, t, o) {
  return n().mcpSessionWiring.swapServerTools(e, t, o);
}
function R() {
  return m() ?? n().hookRegistry.holder();
}
function cF(e) {
  let t = R();
  if (!t.registeredHooks) t.registeredHooks = {};
  for (let [o, r] of Object.entries(e)) {
    let i = o;
    if (!t.registeredHooks[i]) t.registeredHooks[i] = [];
    t.registeredHooks[i].push(...r);
  }
  Eee();
}
function CC() {
  return R().registeredHooks;
}
function Sos() {
  return k.hookRegistry.holder().registeredHooks;
}
function lAn() {
  let e = R();
  ((e.registeredHooks = null), (e.sdkHostOutOfReachNoted = void 0), Eee());
}
function wos() {
  let e = R();
  if (e.sdkHostOutOfReachNoted) return !1;
  return ((e.sdkHostOutOfReachNoted = !0), !0);
}
function DXr() {
  R().sdkHostOutOfReachNoted = void 0;
}
function cP() {
  return R().pluginHookRunner;
}
function GYt() {
  return R().replyGatePolicy;
}
function Gdr(e) {
  let t = cP();
  jr();
  let o = {};
  for (let [r, i] of Object.entries(e))
    o[r] = i.filter((s) => !("pluginRoot" in s) || t?.holds(s.pluginId) !== !0);
  cF(o);
}
function jr() {
  let e = R();
  if (!e.registeredHooks) return;
  let t = e.pluginHookRunner,
    o = {};
  for (let [r, i] of Object.entries(e.registeredHooks)) {
    let s = i.filter((a) => !("pluginRoot" in a) || t?.holds(a.pluginId) === !0);
    if (s.length > 0) o[r] = s;
  }
  ((e.registeredHooks = Object.keys(o).length > 0 ? o : null), Eee());
}
var cn = new W(() => De());
function Eee() {
  es(cn).emit();
}
function vos(e) {
  return es(cn).subscribe(e);
}
function jxe() {
  return n().sessionScratch.planSlugCache();
}
function HXr() {
  return m()?.sessionCreatedTeams ?? n().sessionScratch.sessionCreatedTeams();
}
function LXr() {
  return m()?.sessionSpawnedTeammatePanes ?? n().sessionScratch.sessionSpawnedTeammatePanes();
}
function zdr() {
  return m()?.surfacedHookSpawnFailures ?? n().sessionScratch.surfacedHookSpawnFailures();
}
function NXr() {
  return x()?.pendingConversationEditKinds ?? k.sessionScratch.pendingConversationEditKinds();
}
function $Xr() {
  return x()?.clientTruncatedAssistantIds ?? k.sessionScratch.clientTruncatedAssistantIds();
}
function FXr() {
  return x()?.heldStatelessReplyIds ?? k.sessionScratch.heldStatelessReplyIds();
}
function UXr() {
  return x()?.unsupportedThreadKeys ?? k.sessionScratch.unsupportedThreadKeys();
}
function Eos() {
  return m()?.bareMcpServerMatchersWarned ?? n().sessionScratch.bareMcpServerMatchersWarned();
}
function Kdr() {
  return m()?.pendingBranchLinks ?? n().sessionScratch.pendingBranchLinks();
}
function BXr() {
  return n().sessionScratch.pendingPrLinks();
}
function kos() {
  return n().sessionScratch.policyPredicateTelemetryEmitted();
}
function xCt() {
  return m()?.chromeAvailabilityStagesLogged ?? n().sessionScratch.chromeAvailabilityStagesLogged();
}
function Tos() {
  return n().sessionScratch.chromeAvailabilityAnchorMs();
}
function Aos() {
  return n().sessionFlags.proposeGoalAvailabilityLogged();
}
function Cos() {
  n().sessionFlags.markProposeGoalAvailabilityLogged();
}
function jXr() {
  return n().sessionFlags.inheritedTeamName();
}
function Ros(e) {
  n().sessionFlags.replaceInheritedTeamName(e);
}
function zYt(e) {
  n().sessionFlags.replaceTeleportedSessionInfo({
    isTeleported: !0,
    hasLoggedFirstMessage: !1,
    sessionId: e.sessionId
  });
}
function KYt() {
  return n().sessionFlags.teleportedSessionInfo();
}
function WXr() {
  n().sessionFlags.markFirstTeleportMessageLogged();
}
function die(e, t, o, r = null, i = !1) {
  let s = `${r ?? ""}:${e}`;
  n().invokedSkills.record(s, {
    skillName: e,
    skillPath: t,
    content: o,
    invokedAt: Date.now(),
    agentId: r,
    ...(i && { servedByMcp: i })
  });
}
function kee() {
  return n().invokedSkills.skills();
}
function GXr(e, t) {
  let o = n(),
    r = o.invokedSkills.lookup(e);
  if (r) o.invokedSkills.record(e, { ...r, content: t });
}
function dAn(e) {
  let t = e ?? null,
    o = new Map();
  for (let [r, i] of n().invokedSkills.skills()) if (i.agentId === t) o.set(r, i);
  return o;
}
function xos(e) {
  let t = n();
  if (!e || e.size === 0) {
    t.invokedSkills.forgetAll();
    return;
  }
  for (let [o, r] of t.invokedSkills.skills())
    if (r.agentId === null || !e.has(r.agentId)) t.invokedSkills.forget(o);
}
function Iit(e) {
  let t = n();
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === e) t.invokedSkills.forget(o);
}
function uIi(e, t) {
  n().host.diagnostics.recordSlowOperation(e, t);
}
function fIi() {
  return n().host.diagnostics.slowOperations();
}
function pIi() {
  return n().host.diagnostics.devBarAlert();
}
function yT() {
  let e = m();
  return e ? e.mainThreadAgentType : n().hookRegistry.mainThreadAgentType();
}
function ape(e) {
  let t = m();
  if (t) t.mainThreadAgentType = e;
  else n().hookRegistry.replaceMainThreadAgentType(e);
}
function Tee() {
  let e = m();
  return e ? e.mainThreadAgentHooks : n().hookRegistry.mainThreadAgentHooks();
}
function Pos() {
  return k.hookRegistry.mainThreadAgentHooks();
}
function Vdr(e) {
  let t = m();
  if (t) t.mainThreadAgentHooks = e;
  else n().hookRegistry.replaceMainThreadAgentHooks(e);
  Eee();
}
function Lq() {
  return n().host.extensionsConfig.sessionSkillAllowlist();
}
function Ios(e) {
  n().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}
function BM() {
  return n().surfaceCapabilities.caps();
}
function cAn(e) {
  n().surfaceCapabilities.replaceCaps(e);
}
function Pn() {
  return n().surfaceCapabilities.caps().workspace === "remote";
}
function Aee(e) {
  n().surfaceCapabilities.markRemote(e);
}
function uAn() {
  let e = n();
  return e.surfaceCapabilities.cloudCwdOfSession(e.id);
}
function Oos(e) {
  n().surfaceCapabilities.replaceCloudCwd({ sessionId: e.sessionId, cwd: mJr(e.cwd) });
}
function Mos(e) {
  return n().surfaceCapabilities.cloudCwdChanged.subscribe(e);
}
function PCt() {
  return n().promptAssembly.sections();
}
function Dos(e, t) {
  n().promptAssembly.recordSection(e, t);
}
function fAn(e) {
  (n().promptAssembly.forgetAllSections(), jM(e));
}
function jM(e) {
  n().promptAssembly.noteInvalidation(e);
}
function Cee() {
  return n().promptAssembly.epoch();
}
function mIi() {
  return n().promptAssembly.lastInvalidationReason();
}
function Hos() {
  return n().sessionScratch.vimSharedState();
}
function Los(e) {
  n().sessionScratch.replaceVimSharedState(e);
}
function Ol() {
  return J() ? [] : n().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}
function wW(e) {
  n().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}
function Nos() {
  return n().host.extensionsConfig.claudeMdAdditionalDirectoriesAsked();
}
function zXr(e) {
  n().host.extensionsConfig.askClaudeMdAdditionalDirectories(e);
}
function X_() {
  return n().host.extensionsConfig.allowedChannels();
}
function MYe(e) {
  n().host.extensionsConfig.replaceAllowedChannels(e);
}
function pAn() {
  return n().host.extensionsConfig.hasDevChannels();
}
function $os(e) {
  n().host.extensionsConfig.replaceHasDevChannels(e);
}
function Fos() {
  return n().host.requestLatches.promptCache1hAllowlist();
}
function Uos(e) {
  n().host.requestLatches.replacePromptCache1hAllowlist(e);
}
function DYe(e) {
  return n().host.requestLatches.thinkingTypeOverrides().get(e);
}
function Bos(e, t) {
  n().host.requestLatches.recordThinkingTypeOverride(e, t);
}
function mAn(e) {
  return n().host.requestLatches.servedModelsByRequestedModel().get(e);
}
function KXr(e, t) {
  if (e === t) return;
  let o = n().host.requestLatches,
    r = o.servedModelsByRequestedModel().get(e);
  if (r) r.add(t);
  else o.recordServedModels(e, new Set([t]));
}
function qdr(e) {
  return n().host.requestLatches.effortUnsupportedModels().has(e);
}
function gAn(e) {
  n().host.requestLatches.markEffortUnsupported(e);
}
function jos(e) {
  return n().host.requestLatches.structuredOutputsUnsupportedModels().has(e);
}
function Wos(e) {
  n().host.requestLatches.markStructuredOutputsUnsupported(e);
}
function Gos() {
  n().host.requestLatches.clearStructuredOutputsUnsupported();
}
function zos(e) {
  return n().host.requestLatches.context1mRefusedModels().has(e);
}
function Kos(e) {
  n().host.requestLatches.markContext1mRefused(e);
}
function VXr() {
  n().host.requestLatches.clearContext1mRefused();
}
function ICt(e) {
  return n().host.requestLatches.refusedBetas(e);
}
function Vos(e, t) {
  n().host.requestLatches.markBetaRefused(e, t);
}
function qos() {
  return n().host.requestLatches.midConvCachePromotionRejected();
}
function Yos() {
  n().host.requestLatches.markMidConvCachePromotionRejected();
}
function cie() {
  return n().host.requestLatches.thirdPartyServerClassifierRefused();
}
function hAn() {
  n().host.requestLatches.markThirdPartyServerClassifierRefused();
}
function Xos() {
  n().host.requestLatches.releaseThirdPartyServerClassifierRefusal();
}
function Ydr() {
  return n().host.requestLatches.threadsHeldForServerClassifier();
}
function Jos() {
  n().host.requestLatches.markThreadsHeldForServerClassifier();
}
function Qos(e) {
  return n().host.requestLatches.autoModeUnavailableResponse(e);
}
function qXr(e) {
  return n().host.requestLatches.autoModeUnavailableResponsesInARow(e);
}
function YXr(e, t) {
  n().host.requestLatches.noteAutoModeUnavailableResponse(e, t);
}
function XXr(e) {
  n().host.requestLatches.clearAutoModeUnavailableResponses(e);
}
function JXr(e) {
  n().host.requestLatches.setAutoModeUnavailableStopNotice(e);
}
function Xdr() {
  return n().host.requestLatches.autoModeUnavailableStopNotice();
}
function Zos(e) {
  n().host.requestLatches.setLocalCommandExitCode(e);
}
function ess() {
  return n().host.requestLatches.localCommandExitCode();
}
function tss() {
  return n().host.requestLatches.observedGateway();
}
function nss(e) {
  n().host.requestLatches.noteObservedGateway(e);
}
function Jdr() {
  return n().host.requestLatches.serverClassifierFallbackChoice();
}
function rss(e) {
  n().host.requestLatches.setServerClassifierFallbackChoice(e);
}
function QXr() {
  n().host.requestLatches.clearServerClassifierFallbackChoice();
}
function oss() {
  return n().host.requestLatches.takeServerClassifierFallbackAnnouncement();
}
function sss() {
  return n().host.requestLatches.perTurnEffortOkEmitted();
}
function iss() {
  n().host.requestLatches.markPerTurnEffortOkEmitted();
}
function ass() {
  return n().host.requestLatches.lateToolAdditionsOkEmitted();
}
function lss() {
  n().host.requestLatches.markLateToolAdditionsOkEmitted();
}
function dss() {
  return n().host.requestLatches.toolChangeHeaderRefused();
}
function css() {
  n().host.requestLatches.markToolChangeHeaderRefused();
}
function uss() {
  return n().host.requestLatches.promptEndMarkRefused();
}
function fss() {
  n().host.requestLatches.markPromptEndMarkRefused();
}
function Qdr() {
  return n().host.requestLatches.inlineToolsRefused();
}
function ZXr() {
  n().host.requestLatches.markInlineToolsRefused();
}
function pss() {
  return n().host.requestLatches.inlineToolsOkEmitted();
}
function mss() {
  n().host.requestLatches.markInlineToolsOkEmitted();
}
function eJr() {
  return n().host.requestLatches.thinkingResumptionRefused();
}
function gss() {
  n().host.requestLatches.markThinkingResumptionRefused();
}
function hss() {
  return n().host.requestLatches.refusedBetaHeaders();
}
function OCt(e) {
  n().host.requestLatches.markBetaHeaderRefused(e);
}
function yAn() {
  return n().host.requestLatches.thinkingHighlightsRefused();
}
function yss() {
  n().host.requestLatches.markThinkingHighlightsRefused();
}
function _ss(e) {
  return n().host.requestLatches.toolChangeUnsupportedModels().has(e);
}
function bss(e) {
  n().host.requestLatches.markToolChangeUnsupportedModel(e);
}
function Wxe(e) {
  return n().host.requestLatches.inferenceProfileBackingModels().get(e);
}
function Sss(e, t) {
  n().host.requestLatches.recordInferenceProfileBackingModel(e, t);
}
function ps() {
  return m()?.stickyBetas ?? n().conversationLatches.stickyBetas();
}
function Ree() {
  let e = m();
  return e ? e.conversationAtisLatch : n().conversationLatches.atisLatch();
}
function HYe(e) {
  let t = m();
  if (t) t.conversationAtisLatch = e;
  else n().conversationLatches.replaceAtisLatch(e);
}
function Zdr() {
  let e = m();
  if (e) e.stickyBetas = Q(e.stickyBetas);
  else n().conversationLatches.unlatchStickyBetas();
  VXr();
}
function uF() {
  return n().requestJournal.promptId();
}
function VYt(e) {
  n().requestJournal.replacePromptId(e);
}
function wss() {
  return n().requestJournal.incrementPromptIndex();
}
function Nq() {
  return n().requestJournal.promptIndex();
}
function _An(e, t) {
  let o = n().requestJournal,
    r = o.lastPersonPrompt(),
    i = Date.parse(t);
  if (r === null || (!Number.isNaN(i) && !(i < Date.parse(r.timestamp))))
    o.replaceLastPersonPrompt({ uuid: e, timestamp: t });
}
function MCt() {
  return n().requestJournal.lastPersonPrompt();
}
function zc() {
  return n().surfaceCapabilities.replBridgeActive();
}
function LYe(e) {
  n().surfaceCapabilities.replaceReplBridgeActive(e);
}
function Gxe() {
  return n().surfaceCapabilities.mainLoopBusy();
}
function bAn() {
  return n().surfaceCapabilities.mainQueryRunning();
}
function vss(e) {
  n().surfaceCapabilities.replaceMainLoopStatus(e);
}
export {
  dCt,
  _Yt,
  its,
  rFe,
  P9r,
  I9r,
  iTn,
  aTn,
  bYt,
  ZS,
  O9r,
  M9r,
  D9r,
  SYt,
  k2,
  CSe,
  RSe,
  yYe,
  lTn,
  dTn,
  _Ye,
  pit,
  H9r,
  bYe,
  L9r,
  N9r,
  npe,
  rpe,
  _dr,
  cCt,
  Mxe,
  cTn,
  wn,
  OR,
  Upi,
  Bpi,
  jpi,
  wYt,
  ats,
  Dxe,
  $9r,
  rie,
  pT,
  uCt,
  bdr,
  F9r,
  fCt,
  lts,
  pCt,
  Sdr,
  Wpi,
  mCt,
  dts,
  cts,
  uTn,
  wdr,
  iF,
  pk,
  _g,
  Kp,
  gCt,
  Gpi,
  vdr,
  U9r,
  B9r,
  hCt,
  Edr,
  yCt,
  Hxe,
  F,
  mit,
  EC,
  L,
  Bi,
  uts,
  sf,
  yW,
  vi,
  zpi,
  kdr,
  fTn,
  Kpi,
  Vw,
  mee,
  RB,
  Y_,
  oFe,
  fts,
  j9r,
  pts,
  Vpi,
  git,
  GH,
  sFe,
  So,
  W9r,
  nt,
  qpi,
  U,
  es,
  lIi,
  q,
  tt,
  mts,
  iFe,
  hS,
  Eu,
  G9r,
  gts,
  aFe,
  Tdr,
  z9r,
  vYt,
  hit,
  xSe,
  ke,
  ci,
  wX,
  kC,
  ao,
  ru,
  pTn,
  MI,
  hts,
  Lxe,
  mk,
  yit,
  mTn,
  SYe,
  yts,
  ope,
  _ts,
  bts,
  K9r,
  Sts,
  V9r,
  wts,
  vts,
  Ets,
  kts,
  Tts,
  Ats,
  Cts,
  Adr,
  gTn,
  Rts,
  xts,
  xv,
  hTn,
  yTn,
  _Tn,
  aF,
  Pts,
  gee,
  Its,
  bTn,
  Cdr,
  Ots,
  Mts,
  Dts,
  Gh,
  Hts,
  Lts,
  lF,
  PSe,
  q9r,
  Y9r,
  X9r,
  _Ct,
  Nts,
  Iq,
  hee,
  S6,
  $ts,
  Fts,
  lFe,
  dFe,
  EYt,
  ly,
  kYt,
  TYt,
  Uts,
  Bts,
  J9r,
  Q9r,
  yee,
  Oq,
  jts,
  Nxe,
  wYe,
  vX,
  Wts,
  xB,
  STn,
  Gts,
  Rdr,
  zts,
  bCt,
  cFe,
  uFe,
  Kts,
  EX,
  xdr,
  AYt,
  Vts,
  Jf,
  Z9r,
  _it,
  vYe,
  qts,
  fFe,
  Yts,
  Xts,
  eXr,
  SCt,
  wTn,
  zH,
  Jts,
  Qts,
  Zts,
  ens,
  $c,
  rN,
  Rp,
  bit,
  vTn,
  tns,
  Mq,
  CYt,
  EYe,
  nns,
  tXr,
  rns,
  RYt,
  ISe,
  T2,
  ETn,
  ons,
  sns,
  ins,
  ans,
  A2,
  nXr,
  spe,
  lns,
  dns,
  kTn,
  cns,
  uns,
  fns,
  Pdr,
  wCt,
  PB,
  kYe,
  pns,
  mns,
  gns,
  TTn,
  hns,
  yns,
  TYe,
  _ns,
  bns,
  dm,
  Sns,
  Sit,
  wns,
  vns,
  ATn,
  rXr,
  oXr,
  Ens,
  sXr,
  oie,
  xYt,
  AYe,
  CTn,
  kns,
  Tns,
  Ans,
  Cns,
  Rns,
  PYt,
  xns,
  wit,
  Pns,
  no,
  Ins,
  IYt,
  Idr,
  Ons,
  Mns,
  Dns,
  Hns,
  Lns,
  vCt,
  iXr,
  CYe,
  aXr,
  lXr,
  Nns,
  dXr,
  $ns,
  vit,
  OYt,
  Eit,
  cXr,
  Odr,
  Fns,
  Uns,
  Mdr,
  Bns,
  ye,
  MYt,
  DI,
  jns,
  Wns,
  Gns,
  zns,
  DYt,
  Gc,
  RYe,
  _ee,
  Kns,
  kit,
  Tit,
  mT,
  Vns,
  ku,
  qns,
  KH,
  Yns,
  RTn,
  Xns,
  ECt,
  Jns,
  Qns,
  Zns,
  Dq,
  ers,
  pFe,
  xTn,
  trs,
  OSe,
  PTn,
  ITn,
  nrs,
  Ddr,
  fE,
  OTn,
  MTn,
  dP,
  rrs,
  ors,
  srs,
  HI,
  sie,
  DTn,
  MSe,
  Ait,
  HTn,
  uXr,
  HYt,
  irs,
  Cit,
  ars,
  lrs,
  dIi,
  drs,
  cIi,
  crs,
  kCt,
  urs,
  frs,
  C2,
  mFe,
  prs,
  mrs,
  grs,
  hrs,
  yrs,
  _rs,
  brs,
  LTn,
  fXr,
  pXr,
  $xe,
  Srs,
  wrs,
  vrs,
  mXr,
  VH,
  Ers,
  DSe,
  krs,
  HSe,
  Trs,
  gT,
  Ars,
  iie,
  Crs,
  xp,
  TC,
  TCt,
  Rrs,
  aie,
  gXr,
  xrs,
  xYe,
  LSe,
  w6,
  FM,
  _W,
  LYt,
  Prs,
  hXr,
  Irs,
  NYt,
  yXr,
  _Xr,
  NTn,
  NSe,
  $Yt,
  $Se,
  bXr,
  Hdr,
  Ors,
  Wr,
  Mrs,
  LI,
  Ldr,
  Ndr,
  Drs,
  Rit,
  xit,
  Pit,
  lie,
  Hrs,
  FYt,
  Lrs,
  Nrs,
  bee,
  FSe,
  SXr,
  $rs,
  Frs,
  Urs,
  gFe,
  wXr,
  Brs,
  $Tn,
  $dr,
  hFe,
  jrs,
  Fdr,
  vXr,
  FTn,
  Wrs,
  PYe,
  USe,
  EXr,
  UTn,
  IB,
  yS,
  BSe,
  hT,
  Grs,
  jSe,
  ACt,
  zrs,
  BTn,
  Krs,
  Vrs,
  Udr,
  IYe,
  qrs,
  kXr,
  Yrs,
  oN,
  jTn,
  WTn,
  Xrs,
  Jrs,
  See,
  GTn,
  zTn,
  KTn,
  AC,
  Qrs,
  yFe,
  Zrs,
  bW,
  eos,
  ipe,
  tos,
  E_,
  nos,
  ros,
  Hq,
  VTn,
  oos,
  k_,
  qTn,
  kX,
  sos,
  WSe,
  YTn,
  wee,
  SW,
  Bdr,
  ios,
  Om,
  Fxe,
  aos,
  TXr,
  XTn,
  GSe,
  los,
  CCt,
  AXr,
  JTn,
  QTn,
  UYt,
  ZTn,
  BYt,
  jdr,
  TX,
  eAn,
  dos,
  jYt,
  UM,
  Uxe,
  OYe,
  Bxe,
  tAn,
  qH,
  J,
  Il,
  cm,
  nAn,
  zSe,
  Wdr,
  vee,
  rAn,
  oAn,
  OB,
  CXr,
  cos,
  uos,
  RXr,
  fos,
  WYt,
  pos,
  mos,
  v6,
  KSe,
  gos,
  dF,
  hos,
  xXr,
  PXr,
  yos,
  IXr,
  _os,
  OXr,
  eg,
  sAn,
  AX,
  RCt,
  iAn,
  bos,
  MXr,
  aAn,
  cF,
  CC,
  Sos,
  lAn,
  wos,
  DXr,
  cP,
  GYt,
  Gdr,
  Eee,
  vos,
  jxe,
  HXr,
  LXr,
  zdr,
  NXr,
  $Xr,
  FXr,
  UXr,
  Eos,
  Kdr,
  BXr,
  kos,
  xCt,
  Tos,
  Aos,
  Cos,
  jXr,
  Ros,
  zYt,
  KYt,
  WXr,
  die,
  kee,
  GXr,
  dAn,
  xos,
  Iit,
  uIi,
  fIi,
  pIi,
  yT,
  ape,
  Tee,
  Pos,
  Vdr,
  Lq,
  Ios,
  BM,
  cAn,
  Pn,
  Aee,
  uAn,
  Oos,
  Mos,
  PCt,
  Dos,
  fAn,
  jM,
  Cee,
  mIi,
  Hos,
  Los,
  Ol,
  wW,
  Nos,
  zXr,
  X_,
  MYe,
  pAn,
  $os,
  Fos,
  Uos,
  DYe,
  Bos,
  mAn,
  KXr,
  qdr,
  gAn,
  jos,
  Wos,
  Gos,
  zos,
  Kos,
  VXr,
  ICt,
  Vos,
  qos,
  Yos,
  cie,
  hAn,
  Xos,
  Ydr,
  Jos,
  Qos,
  qXr,
  YXr,
  XXr,
  JXr,
  Xdr,
  Zos,
  ess,
  tss,
  nss,
  Jdr,
  rss,
  QXr,
  oss,
  sss,
  iss,
  ass,
  lss,
  dss,
  css,
  uss,
  fss,
  Qdr,
  ZXr,
  pss,
  mss,
  eJr,
  gss,
  hss,
  OCt,
  yAn,
  yss,
  _ss,
  bss,
  Wxe,
  Sss,
  ps,
  Ree,
  HYe,
  Zdr,
  uF,
  VYt,
  wss,
  Nq,
  _An,
  MCt,
  zc,
  LYe,
  Gxe,
  bAn,
  vss
};

//# sourceMappingURL=chunk-wrtp8qz8.js.map
