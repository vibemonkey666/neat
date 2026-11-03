// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c5t } from "./chunk-qq3ygwcj.js";
import { G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { ve } from "./chunk-vk5p9xv3.js";
var Xt = typeof global == "object" && global && global.Object === Object && global,
  rJr = Xt;
var qt = typeof self == "object" && self && self.Object === Object && self,
  Qt = rJr || qt || Function("return this")(),
  vW = Qt;
var te = vW.Symbol,
  x2 = te;
var ut = Object.prototype,
  { hasOwnProperty: ee, toString: ne } = ut,
  P = x2 ? x2.toStringTag : void 0;
function re(t) {
  var e = ee.call(t, P),
    n = t[P];
  try {
    t[P] = void 0;
    var r = !0;
  } catch (i) {}
  var o = ne.call(t);
  if (r)
    if (e) t[P] = n;
    else delete t[P];
  return o;
}
var lt = re;
var oe = Object.prototype,
  ie = oe.toString;
function se(t) {
  return ie.call(t);
}
var ct = se;
var ae = "[object Null]",
  ue = "[object Undefined]",
  ft = x2 ? x2.toStringTag : void 0;
function le(t) {
  if (t == null) return t === void 0 ? ue : ae;
  return ft && ft in Object(t) ? lt(t) : ct(t);
}
var gie = le;
function ce(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var RC = ce;
var fe = "[object AsyncFunction]",
  pe = "[object Function]",
  de = "[object GeneratorFunction]",
  ge = "[object Proxy]";
function me(t) {
  if (!RC(t)) return !1;
  var e = gie(t);
  return e == pe || e == de || e == fe || e == ge;
}
var XYt = me;
var he = vW["__core-js_shared__"],
  M = he;
var pt = (function () {
  var t = /[^.]+$/.exec((M && M.keys && M.keys.IE_PROTO) || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function xe(t) {
  return !!pt && pt in t;
}
var dt = xe;
var be = Function.prototype,
  we = be.toString;
function Se(t) {
  if (t != null) {
    try {
      return we.call(t);
    } catch (e) {}
    try {
      return t + "";
    } catch (e) {}
  }
  return "";
}
var Mit = Se;
var _e = /[\\^$.*+?()[\]{}|]/g,
  ye = /^\[object .+?Constructor\]$/,
  Ae = Function.prototype,
  Te = Object.prototype,
  Oe = Ae.toString,
  Ce = Te.hasOwnProperty,
  Ne = RegExp(
    "^" +
      Oe.call(Ce)
        .replace(_e, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
function Pe(t) {
  if (!RC(t) || dt(t)) return !1;
  var e = XYt(t) ? Ne : ye;
  return e.test(Mit(t));
}
var gt = Pe;
function Ee(t, e) {
  return t == null ? void 0 : t[e];
}
var mt = Ee;
function Re(t, e) {
  var n = mt(t, e);
  return gt(n) ? n : void 0;
}
var hie = Re;
var De = hie(vW, "Map"),
  $Ct = De;
function Le() {
  ((this.__data__ = []), (this.size = 0));
}
var ht = Le;
function Ie(t, e) {
  return t === e || (t !== t && e !== e);
}
var zxe = Ie;
function Me(t, e) {
  var n = t.length;
  while (n--) if (zxe(t[n][0], e)) return n;
  return -1;
}
var b = Me;
var ke = Array.prototype,
  $e = ke.splice;
function We(t) {
  var e = this.__data__,
    n = b(e, t);
  if (n < 0) return !1;
  var r = e.length - 1;
  if (n == r) e.pop();
  else $e.call(e, n, 1);
  return (--this.size, !0);
}
var xt = We;
function je(t) {
  var e = this.__data__,
    n = b(e, t);
  return n < 0 ? void 0 : e[n][1];
}
var bt = je;
function He(t) {
  return b(this.__data__, t) > -1;
}
var wt = He;
function Ue(t, e) {
  var n = this.__data__,
    r = b(n, t);
  if (r < 0) (++this.size, n.push([t, e]));
  else n[r][1] = e;
  return this;
}
var St = Ue;
function T(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = ht;
T.prototype.delete = xt;
T.prototype.get = bt;
T.prototype.has = wt;
T.prototype.set = St;
var NCt = T;
var Fe = hie(Object, "create"),
  h = Fe;
function ze() {
  ((this.__data__ = h ? h(null) : {}), (this.size = 0));
}
var _t = ze;
function Be(t) {
  var e = this.has(t) && delete this.__data__[t];
  return ((this.size -= e ? 1 : 0), e);
}
var yt = Be;
var Ge = "__lodash_hash_undefined__",
  Je = Object.prototype,
  Ve = Je.hasOwnProperty;
function Ke(t) {
  var e = this.__data__;
  if (h) {
    var n = e[t];
    return n === Ge ? void 0 : n;
  }
  return Ve.call(e, t) ? e[t] : void 0;
}
var vt = Ke;
var Ze = Object.prototype,
  Ye = Ze.hasOwnProperty;
function Xe(t) {
  var e = this.__data__;
  return h ? e[t] !== void 0 : Ye.call(e, t);
}
var At = Xe;
var qe = "__lodash_hash_undefined__";
function Qe(t, e) {
  var n = this.__data__;
  return ((this.size += this.has(t) ? 0 : 1), (n[t] = h && e === void 0 ? qe : e), this);
}
var Tt = Qe;
function O(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
O.prototype.clear = _t;
O.prototype.delete = yt;
O.prototype.get = vt;
O.prototype.has = At;
O.prototype.set = Tt;
var K = O;
function tn() {
  ((this.size = 0), (this.__data__ = { hash: new K(), map: new ($Ct || NCt)(), string: new K() }));
}
var Ot = tn;
function en(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean"
    ? t !== "__proto__"
    : t === null;
}
var Ct = en;
function nn(t, e) {
  var n = t.__data__;
  return Ct(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
var w = nn;
function rn(t) {
  var e = w(this, t).delete(t);
  return ((this.size -= e ? 1 : 0), e);
}
var Nt = rn;
function on(t) {
  return w(this, t).get(t);
}
var Pt = on;
function sn(t) {
  return w(this, t).has(t);
}
var Et = sn;
function an(t, e) {
  var n = w(this, t),
    r = n.size;
  return (n.set(t, e), (this.size += n.size == r ? 0 : 1), this);
}
var Rt = an;
function C(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = Ot;
C.prototype.delete = Nt;
C.prototype.get = Pt;
C.prototype.has = Et;
C.prototype.set = Rt;
var FCt = C;
import {
  lstatSync as pn,
  readFileSync as F,
  readlinkSync as ot,
  realpath as dn,
  realpathSync as it,
  statSync as Dt
} from "fs";
import { readlink as gn } from "fs/promises";
var _Fe = /[.\s]+$/,
  Tss = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i,
  ncr = /~\d/;
function Iv(t) {
  let e = t.indexOf("."),
    n = (e === -1 ? t : t.slice(0, e)).replace(/ +$/, "");
  return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(n);
}
function rcr(t) {
  return _Fe.test(t) || Tss.test(t);
}
function vAn(t) {
  return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t);
}
function ocr(t) {
  return vAn(t.replace(/\u0307/g, ""));
}
function Dit(t) {
  return Array.from(t, (e) => {
    let n = e.toUpperCase();
    return [...n].length === 1 ? n : e;
  })
    .join("")
    .toLowerCase();
}
function UCt(t) {
  let e = Dit(t);
  return (
    e === "users" ||
    e === "documents and settings" ||
    e === "dokumente und einstellungen" ||
    /^do[ck]ume~[0-9]+$/.test(e)
  );
}
function un(t) {
  if (t.length < 3 || !UCt(t[0])) return;
  let e = ln.get(t[2]) ?? cn.find(([n]) => n.test(t[2]))?.[1];
  return e === void 0 ? void 0 : [...t.slice(0, 2), ...e, ...t.slice(3)];
}
function scr(t) {
  return Dit(t).split("/").filter(Boolean);
}
function oJr(t) {
  let e = scr(t),
    n = un(e);
  return n === void 0 ? [e] : [e, n];
}
function icr(t, e) {
  let n = oJr(e);
  return oJr(t).flatMap((r) =>
    n.flatMap((o) =>
      r.length <= o.length && r.every((i, s) => fn(s, i, o[s])) ? [o.slice(r.length)] : []
    )
  );
}
var ln = new Map([
    ["my documents", ["documents"]],
    ["application data", ["appdata", "roaming"]],
    ["local settings", ["appdata", "local"]]
  ]),
  cn = [
    [/^mydocu~[0-9]+$/, ["documents"]],
    [/^applic~[0-9]+$/, ["appdata", "roaming"]],
    [/^locals~[0-9]+$/, ["appdata", "local"]]
  ];
function fn(t, e, n) {
  return acr(e, n) || (t === 0 && UCt(e) && UCt(n));
}
function acr(t, e) {
  return t === e || ocr(t) || ocr(e);
}
function bFe(t) {
  let e =
    /^[\\/]{2}(?:[?.][\\/]([A-Za-z]):|(?:localhost|127\.0\.0\.1)[\\/]([A-Za-z])\$)(?=$|[\\/])/i.exec(
      t
    );
  if (e === null) return t;
  let n = t.slice(e[0].length);
  return `${e[1] ?? e[2]}:${n === "" ? "\\" : n}`;
}
import { homedir as st } from "os";
import {
  basename as Q,
  dirname as c,
  isAbsolute as x,
  join as tt,
  parse as at,
  relative as et,
  resolve as f,
  sep as d
} from "path";
import * as nt from "path";
function In(t) {
  return t;
}
function Yn(t) {
  return /^[\\/]{2}/.test(t) || zM(t);
}
function cy(t) {
  return /(^|[\\/])\.\.([\\/]|$)/.test(t);
}
function Rc(t) {
  return t.includes("\\");
}
function lcr() {
  return Rc(c5t ?? "");
}
function A_(t) {
  return /^[\\/]\?\?[\\/]/.test(t);
}
function xC(t) {
  if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) return null;
  return (
    t
      .match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]
      ?.replace(/[A-Z]/g, (e) => e.toLowerCase()) ?? null
  );
}
function ml(t) {
  return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t);
}
function NYe(t) {
  return t.split(/[/\\]/).some((e) => /^\.\. [ .]*$/.test(e));
}
function dcr(t, e = "linux") {
  return e === "win32" ? /(^|[\\/])\.{1,2}([\\/]|$)/.test(t) : /(^|\/)\.{1,2}(\/|$)/.test(t);
}
function DB(t) {
  return dcr(t);
}
function gk(t) {
  return /^[\\/]{2}[?.][\\/]/.test(t);
}
function zy(t) {
  if (!/\/\.(?:vol|file|nofollow|resolve)(?:\/|$)/i.test(t)) return !1;
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if ((e.push(n), e.length === 1 && /^\.(?:vol|file|nofollow|resolve)$/i.test(n))) return !0;
  }
  return !1;
}
function sJr(t) {
  return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t);
}
function k6(t, e) {
  if (!Yn(t)) return !1;
  if (gk(t) || zM(t)) return !0;
  if (ml(t)) return !0;
  let n = xC(t);
  return n === null || n !== xC(e);
}
function N(t) {
  return (
    (t.length === 2 && _T(t[0]) === "net") ||
    (t.length === 3 && _T(t[0]) === "network" && _T(t[1]) === "servers")
  );
}
function EW(t) {
  if (!t.startsWith("/")) return null;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if ((e.push(n), N(e))) return _(n);
  }
  return null;
}
function _(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function _T(t) {
  return t
    .replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "")
    .toUpperCase()
    .toLowerCase();
}
function ccr(t, e = "linux") {
  let n = t.split("/");
  if (n[0] !== "") return t;
  let r, o;
  if (e === "darwin" ? N(n.slice(1, 3)) : n[1] === "net" && n.length >= 3) ((r = "/net/"), (o = 2));
  else if (e === "darwin" && N(n.slice(1, 4))) ((r = "/Network/Servers/"), (o = 3));
  else return t;
  let i = n[o];
  if (i === void 0 || i === "") return t;
  let s = n.slice(o + 1);
  return r + _(i).replace(/\.$/, "") + (s.length > 0 ? "/" + s.join("/") : "");
}
function iJr(t) {
  let e = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(t);
  if (e === null || e[2].toLowerCase() === "wsl.localhost") return t;
  return e[1][0].repeat(2) + e[2] + t.slice(e[1].length + e[2].length + 1);
}
function YH(t, e) {
  if (zy(t)) return !0;
  if (Fa(t)) {
    let n = EW(t);
    if (n === null || n !== EW(e)) return !0;
  }
  return aJr(t, e);
}
function Qi(t, e) {
  let n = f(e, t);
  if (k6(t, e) || k6(n, e)) return !0;
  let r = EW(e);
  for (let o of [t, n]) {
    if (Fa(o)) {
      let i = EW(o);
      if (i === null || i !== r) return !0;
    }
    if (XH(o) || Yw(o) || zy(o) || aJr(o, e)) return !0;
  }
  return !1;
}
function aJr(t, e, n = "linux", r = n === "darwin" && !0) {
  if (n !== "darwin" || !aN(t, n, r)) return !1;
  let o = rt(e, n, r).complete[0] ?? null,
    { complete: i, partial: s } = rt(t, n, r);
  if (i.length === 0 && s.length === 0) return !0;
  if (o === null) return !0;
  return i.some((a) => a !== o) || s.some((a) => !o.startsWith(a));
}
var yo = ve({ value: void 0 }, (t) => {
  t.value = void 0;
});
var mn = 6;
function rt(t, e, n) {
  let r = [],
    o = [];
  if (!t.startsWith("/")) return { complete: r, partial: o };
  let i = [];
  for (let s of t.split("/")) {
    if (s === "" || s === ".") continue;
    if (s === "..") {
      i.pop();
      continue;
    }
    if ((i.push(s), i.length > mn)) continue;
    let a = "/" + i.join("/"),
      u = (e === "darwin" ? WM(a) : a).split("/").filter((g) => g !== ""),
      v = u[0]?.toLowerCase();
    if (v === "network") {
      if (u.length === 1) o.push("/network/");
      else if (u.length === 2) o.push(`/network/${_(u[1])}/`);
      else if (u.length === 3) r.push(`/network/${_(u[1])}/${_(u[2])}`);
    } else if (n && v === "home" && u.length === 2) r.push(`/home/${u[1]}`);
  }
  return { complete: r, partial: o };
}
function Fa(t) {
  return gl(t);
}
function emi() {
  try {
    let t = F("/proc/self/mountinfo", "utf8")
        .split(
          `
`
        )
        .findLast((o) => o.split(" ")[4] === "/net"),
      [e, n, r] = t?.split(" - ")[1]?.split(" ") ?? [];
    return (
      e === "autofs" &&
      (n === "-hosts" || /(?:^|\/)auto\.(?:net|smb)$/.test(n ?? "")) &&
      r?.split(",").includes("indirect") === !0
    );
  } catch {
    return !1;
  }
}
function tmi() {
  try {
    return F("/proc/self/mountinfo", "utf8")
      .split(
        `
`
      )
      .flatMap((t) => {
        let [e, n] = t.split(" - "),
          r = e?.split(" ")[4];
        return r !== void 0 && n?.startsWith("autofs ") === !0
          ? [r.replace(/\\([0-7]{3})/g, (o, i) => String.fromCharCode(Number.parseInt(i, 8)))]
          : [];
      });
  } catch {
    return;
  }
}
function nmi() {
  try {
    return (
      F("/etc/auto_master", "utf8")
        .split(
          `
`
        )
        .some((t) => {
          let e = t.replace(/#.*$/, "").trim().split(/\s+/);
          return e[0]?.toLowerCase() === "/net" && e[1] === "-hosts";
        }) && Dt("/net").dev !== Dt("/Users").dev
    );
  } catch {
    return !1;
  }
}
function rmi() {
  try {
    return (
      F("/etc/resolv.conf", "utf8")
        .split(
          `
`
        )
        .map((t) =>
          t
            .replace(/[#;].*$/, "")
            .trim()
            .split(/\s+/)
        )
        .findLast(([t]) => t === "search" || t === "domain")
        ?.slice(1)
        .map((t) => _(t.replace(/\.$/, ""))) ?? []
    );
  } catch (t) {
    return G(t) ? [] : void 0;
  }
}
function $q(t) {
  if (!t.startsWith("/")) return !1;
  let e = t.split("/").filter((r) => r !== "" && r !== ".");
  if (e.length < 1 || e.length > 3 || e.includes("..")) return !1;
  if (N(e) && (e.length === 2 || !1)) return !0;
  let n = e[0].toLowerCase();
  return e.length <= 2 && (n === "net" || !1);
}
function dl(t) {
  return Yn(t) || Fa(t) || MR(t) || zy(t);
}
function uy(t) {
  return Fa(t) || MR(t) || Yw(t) || zy(t);
}
function gl(t) {
  return lpe(t) !== null;
}
var zt = 1024,
  Bt = 4096,
  k = new Map(),
  W = new Map();
function lpe(t) {
  if (!t.startsWith("/")) return null;
  if (t.length > Bt) return Lt(t);
  let e = k.get(t);
  if (e === void 0) {
    if (((e = Lt(t)), k.size >= zt)) k.clear();
    k.set(t, e);
  }
  return e;
}
function Lt(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if ((e.push(n), N(e))) return "/" + e.join("/");
  }
  return null;
}
function omi(t) {
  let e = lpe(t);
  return e === null ? null : e.slice(e.lastIndexOf("/") + 1);
}
var hn = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;
function JYt(t) {
  let e = hn.exec(t);
  return e === null ? void 0 : { prefix: e[1], rest: e[2] ?? "" };
}
function Yw(t) {
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    e.push(n);
  }
  return e.length === 1 && e[0].toLowerCase() === "net";
}
function XH(t) {
  if (!t.startsWith("/")) return !1;
  if (t.length > Bt) return It(t);
  let e = W.get(t);
  if (e === void 0) {
    if (((e = It(t)), W.size >= zt)) W.clear();
    W.set(t, e);
  }
  return e;
}
function It(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if ((e.push(n), e.length === 1 && e[0].toLowerCase() === "network")) return !0;
  }
  return !1;
}
function MR(t) {
  return !1;
}
function Sg(t) {
  return gl(t) || Yw(t) || XH(t) || zy(t);
}
function BCt(t, e, n = null) {
  let r = P2(t),
    o = P2(e);
  if (!r && !o) return !1;
  if (r && !o) return !0;
  if (!r && o) {
    let u = n === null || Yn(n) ? null : EW(n),
      v = Yn(e) ? null : Z(e);
    if (u !== null && v !== null && u === v) return !1;
    if (n !== null && Yn(n) && Yn(e) && !k6(e, n)) return !1;
    return !0;
  }
  let i = Yn(t) ? null : Z(t),
    s = Yn(e) ? null : Z(e);
  if (i !== null || s !== null) return i === null || s === null || i !== s;
  let a = xC(t),
    l = xC(e);
  if (a !== null || l !== null) return a === null || l === null || a !== l;
  return t !== e;
}
function Z(t) {
  return XH(t) ? null : EW(t);
}
function aN(t, e = "linux", n = e === "darwin" && !0) {
  if (e !== "darwin") return !1;
  if (XH(t) || zy(t)) return !0;
  if (!t.startsWith("/")) return !1;
  let { complete: r, partial: o } = rt(t, e, n);
  if (o.length > 0) return !0;
  if (r.some((s) => s.startsWith("/network/"))) return !0;
  let i = r.filter((s) => s.startsWith("/home/"));
  if (i.length > 0) {
    let s = xn();
    if (i.some((a) => a !== s)) return !0;
  }
  return !1;
}
function xn() {
  let t;
  try {
    t = st();
  } catch {
    return null;
  }
  let e = /^\/home\/([^/]+)/.exec(WM(t));
  return e ? `/home/${e[1]}` : null;
}
function P2(t) {
  return EAn(t) || XH(t);
}
function EAn(t) {
  return zs(t) || gl(t) || Yw(t) || gk(t) || zM(t) || sJr(t) || zy(t);
}
function kAn(t) {
  let e = t.split("/").filter(Boolean);
  if (e.length === 0) return t;
  let n = e.at(-1);
  return "/" + [...e.slice(0, -1).map(_T), _(n)].join("/");
}
function $Ye(t) {
  if (!t.startsWith("/")) return [];
  let e = [],
    n = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      n.pop();
      continue;
    }
    if ((n.push(r), N(n))) e.push(kAn("/" + n.join("/")));
  }
  return e;
}
function Fl(t) {
  let e = /^[\\/]{2}wsl(?:\$|\.localhost)[\\/]([^\\/]*)/i.exec(t);
  return e !== null && !/^\.{0,2}[. ]*$/.test(e[1] ?? "");
}
function zs(t) {
  return Yn(t) && !Fl(t);
}
function Gu(t) {
  if (Gt(t)) return st() + t.slice(1);
  return t;
}
function TAn(t, e) {
  if (Gt(t)) return e + t.slice(1);
  return t;
}
function Gt(t) {
  return t === "~" || t.startsWith("~/") || !1;
}
function JH(t) {
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n === "*" || n === "?") return e;
    if (n === "[" && t.indexOf("]", e + 1) !== -1) return e;
  }
  return -1;
}
function wA(t) {
  if (t.startsWith("\\\\?\\UNC\\")) return "\\\\" + t.slice(8);
  if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":") return t.slice(4);
  return t;
}
function uP(t) {
  if (QH(t)) {
    let e = wA(t).replace(/^([\\/])[\\/]+/, "$1");
    for (let n = 0; n < bn && zM(e); n++) {
      e = Yt(e).replace(/^([\\/])[\\/]+/, "$1");
      let r = 1;
      while (e[r] === "?" && e[r + 1] === "?" && (r + 2 === e.length || Mt(e[r + 2]))) {
        r += 3;
        while (Mt(e[r])) r++;
      }
      e = e.slice(0, 1) + e.slice(r);
    }
    return zM(e) ? e.slice(0, 1) : e;
  }
  return t;
}
var bn = 4;
function Mt(t) {
  return t === "\\" || t === "/";
}
function QH(t) {
  if (/^\\\\\?\\volume\{/i.test(t)) return kt(t);
  if (zM(t)) return !0;
  let e = wA(t);
  if (e !== t && kt(e)) return !0;
  return Yn(e) && !Fl(e);
}
function kt(t) {
  return ml(t) || t.includes("/");
}
function Vp(t) {
  try {
    return wA(it.native(t));
  } catch {
    return null;
  }
}
async function ucr(t) {
  return new Promise((e) => {
    try {
      dn.native(t, (n, r) => {
        e(n ? null : wA(r));
      });
    } catch {
      e(null);
    }
  });
}
function smi(t) {
  try {
    return it(t);
  } catch {
    return null;
  }
}
var wn = 4,
  R = 50,
  lJr = R * (wn - 1),
  $t;
function T6(t) {
  return FYe(t).real ?? null;
}
function jCt(t, e) {
  let n = f(e).toLowerCase(),
    r = c(f(t)).toLowerCase();
  if (r === n || Wt(r, n) || jt(r, n, "lexical")) return !0;
  let o = T6(e)?.toLowerCase();
  if (o == null) return !1;
  let i = T6(c(f(t)))?.toLowerCase();
  if (i == null) return !0;
  return i === o || Wt(i, o) || jt(i, o, "canonical");
}
var Sn = new Set([
  "node_modules",
  ".venv",
  "venv",
  "env",
  ".env",
  "virtualenv",
  ".tox",
  ".nox",
  ".direnv",
  "__pypackages__"
]);
function Wt(t, e) {
  if (!t.startsWith(H(e) + d)) return !1;
  return t.split(d).some((n) => Sn.has(n));
}
function H(t) {
  return t.endsWith(d) ? t.slice(0, -1) : t;
}
var Y;
function jt(t, e, n) {
  let r = st(),
    o = (process.env.LOCALAPPDATA ?? "").trim();
  if (n === "lexical")
    return q(
      Ht(r, o, (l) => f(l).toLowerCase()),
      t,
      e
    );
  let i = r + "\x00" + o;
  if (Y?.key === i) return q(Y.aliasDirs, t, e);
  let s = !0,
    a = Ht(r, o, (l) => {
      if (!_n(l)) return f(l).toLowerCase();
      let u = T6(l)?.toLowerCase();
      if (u == null) return ((s = !1), f(l).toLowerCase());
      return u;
    });
  if (s) Y = { key: i, aliasDirs: a };
  return q(a, t, e);
}
function Ht(t, e, n) {
  let r = [];
  if (t) r.push(H(n(t)) + d + ["appdata", "local", "microsoft", "windowsapps"].join(d));
  if (e) {
    let o = H(n(e)) + d + ["microsoft", "windowsapps"].join(d);
    if (!r.includes(o)) r.push(o);
  }
  return r;
}
function _n(t) {
  return t.startsWith("/") && !Yn(t);
}
function q(t, e, n) {
  let r = H(n);
  for (let o of t) {
    if (!(o === r || o.startsWith(r + d))) continue;
    if (e === o || e.startsWith(o + d)) return !0;
  }
  return !1;
}
var yn = [
  "usr/local",
  "usr/libexec/cups",
  "usr/share/snmp",
  "AppleInternal",
  "Applications",
  "Library",
  "Users",
  "Volumes",
  "cores",
  "home",
  "media",
  "mnt",
  "opt",
  "pkg",
  "private",
  "sw"
];
function WM(t) {
  let e = t.split("/");
  if (
    e.length < 5 ||
    e[0] !== "" ||
    E(e[1] ?? "") !== "system" ||
    E(e[2] ?? "") !== "volumes" ||
    E(e[3] ?? "") !== "data"
  )
    return t;
  let n = e.slice(4);
  for (let r of yn) {
    let o = r.split("/");
    if (n.length < o.length) continue;
    if (o.every((i, s) => E(n[s] ?? "") === E(i))) return "/" + n.join("/");
  }
  return t;
}
function E(t) {
  return t.toUpperCase().toLowerCase();
}
function Fq(t) {
  return Q(c(t)) === "worktrees" && Q(c(c(t))) === ".claude" ? c(c(c(t))) : null;
}
function Uq(t, { allowLocalWsl: e = !1 } = {}) {
  let n = (i) => e && fcr(i);
  if (n(t)) return !1;
  if (pE(t)) return !0;
  let r = qSe(t);
  if (!x(r)) return !0;
  if (Kxe(r, { allowLocalWsl: e })) return !0;
  let o = f(r);
  for (;;) {
    let i = FYe(o);
    if (i.real !== void 0) return pE(i.real) && !n(i.real);
    if (i.code !== "ENOENT" && i.code !== "ENOTDIR") return !0;
    let s = c(o);
    if (s === o) return !1;
    o = s;
  }
}
function fcr(t) {
  return !1;
}
function WCt(t) {
  return t;
}
var vn = /^\/mnt\/[a-z](?:\/|$)/i;
function pcr(t, e, n = "") {
  if (!t.startsWith("/") || vn.test(t) || dcr(t, "linux")) return;
  let r = n === "" ? t : t.startsWith(n + "/") ? t.slice(n.length) : void 0;
  return r === void 0 ? void 0 : e.replace(/[\\/]+$/, "") + r.replace(/\//g, "\\");
}
function mcr(t, { exactDots: e = !1 } = {}) {
  return;
}
function gcr(t, { exactDots: e = !1 } = {}) {
  let n = qSe(t);
  if (e ? dcr(n, "win32") : ml(n)) return;
  let r = /^([A-Za-z]):[\\/]+(.*)$/.exec(n),
    o = JYt(n)?.rest.replace(/^[\\/]+/, ""),
    i = (r?.[2] ?? o ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (i === "") return;
  let s = r ? `/mnt/${r[1].toLowerCase()}/${i}` : `/${i}`;
  return pE(s) ? void 0 : s;
}
function imi(t) {
  return pE(t) && !fcr(t);
}
function pE(t) {
  let e = qSe(t);
  return Ass(e) || Sg(e) || sJr(e);
}
function dJr(t, { allowLocalWsl: e = !1, eisdirIsFolder: n = !1 } = {}) {
  let r = qSe(t);
  if (!x(r)) return !0;
  let { root: o } = at(r);
  return y(o, S(r.slice(o.length)), 0, e, { eisdirIsFolder: n });
}
function QYt(t, e) {
  return y(t, S(e), 0, !1, { trustedStart: !0, trustedRoot: t });
}
function hcr(t, e = c(t)) {
  let n = D(() => ot(t));
  if (n.value === void 0) return n.code !== "ENOENT" && n.code !== "EINVAL";
  let r = n.value.replace(/^\/{2,}/, "/");
  if (Jt(r)) return !0;
  let o = !1;
  if (o && ml(r)) return !0;
  let i = o ? tt(at(e).root, r) : r,
    s = { trustedStart: !0, trustedRoot: e };
  if (x(i)) {
    let u = et(e, i);
    if (!ml(i) && u !== "" && !Ut(u) && !x(u)) return y(e, S(u), 1, !1, s);
    return pE(i) || Kxe(i);
  }
  if (pE(i)) return !0;
  let a = et(e, c(t)),
    l = !Ut(a) && !x(a);
  return y(l ? e : c(t), [...(l ? S(a) : []), ...S(i)], 1, !1, s);
}
function Kxe(t, e = {}) {
  return dJr(t, e) || (ml(t) && dJr(f(t), e));
}
var An = 40;
function S(t) {
  return t.split(/\/+/).filter(Boolean);
}
function j(t, e) {
  return pE(t) && !(e && fcr(t));
}
function Ut(t) {
  return t === ".." || /^\.\.[\\/]/.test(t);
}
function Jt(t) {
  return !1;
}
function y(t, e, n, r, { trustedStart: o = !1, trustedRoot: i = t, eisdirIsFolder: s = !1 } = {}) {
  let a = i.endsWith(d) ? i : i + d,
    l = (g) => o && (g === i || g.startsWith(a)),
    u = t;
  if (!l(u) && j(u, r)) return !0;
  let v;
  for (let g = 0; g < e.length; g++) {
    let B = e[g];
    if (B === ".") continue;
    if (B === "..") {
      u = c(u);
      continue;
    }
    let A = tt(u, B);
    if (!l(A) && j(A, r)) return !0;
    let L = D(() => pn(A));
    if (L.value === void 0) {
      if (L.code !== "ENOENT" && L.code !== "ENOTDIR") return !0;
      let m = A;
      for (let I of e.slice(g + 1))
        if (((m = I === ".." ? c(m) : I === "." ? m : tt(m, I)), !l(m) && j(m, r))) return !0;
      return !1;
    }
    let J;
    if (L.value.isSymbolicLink()) {
      if (n >= An) return !0;
      if (((J = D(() => ot(A)).value), J === void 0)) return !0;
    } else {
      u = A;
      continue;
    }
    let p = J.replace(/^\/{2,}/, "/");
    if (!(o && x(p) && !ml(p) && l(p)) && j(p, r)) return !0;
    let V = e.slice(g + 1);
    if (Jt(p)) return !0;
    if (x(p)) {
      if (o && !ml(p) && l(p))
        return y(i, [...S(p.slice(a.length)), ...V], n + 1, r, {
          trustedStart: !0,
          trustedRoot: i,
          eisdirIsFolder: s
        });
      let m = at(p).root;
      return y(m, [...S(p.slice(m.length)), ...V], n + 1, r, { eisdirIsFolder: s });
    }
    return y(u, [...S(p), ...V], n + 1, r, {
      trustedStart: l(u),
      trustedRoot: i,
      eisdirIsFolder: s
    });
  }
  return !1;
}
function FYe(t) {
  let e = D(() => wA(it.native(t)));
  return { real: e.value, code: e.code };
}
function z(t) {
  return t != null && typeof t === "object" && "code" in t && typeof t.code === "string"
    ? t.code
    : void 0;
}
function D(t) {
  try {
    return { value: Tn(t) };
  } catch (e) {
    return { code: z(e) };
  }
}
function Tn(t) {
  return Vt(t, () => !0);
}
function cJr(t) {
  let e = 0;
  return (n) =>
    Vt(n, () => {
      if (e + R > t) return !1;
      return ((e += R), !0);
    });
}
function Vt(t, e) {
  for (let n = 0; ; n++)
    try {
      return t();
    } catch (r) {
      let o = z(r);
      throw r;
    }
}
function Kt(t) {
  let e = z(t);
  return e === "EINVAL"
    ? { kind: "directory" }
    : e === "ENOENT"
      ? { kind: "absent" }
      : { kind: "error", code: e, error: t };
}
function ami(t) {
  let e,
    n = D(() => {
      try {
        return ot(t);
      } catch (r) {
        throw ((e = r), r);
      }
    });
  return n.value !== void 0 ? { kind: "junction", target: n.value } : Kt(e);
}
async function Pee(t) {
  let e,
    n = await On(async () => {
      try {
        return await gn(t);
      } catch (r) {
        throw ((e = r), r);
      }
    });
  return n.value !== void 0 ? { kind: "junction", target: n.value } : Kt(e);
}
async function On(t) {
  for (let e = 0; ; e++)
    try {
      return { value: await t() };
    } catch (n) {
      let r = z(n);
      return { code: r };
    }
}
function Ass(t) {
  return GM(t) || gl(t);
}
function Zt(t) {
  return (
    ml(t) ||
    /[. :](?=[\\/]|$)/.test(t) ||
    t.split(/[\\/]/).some((e) => Iv(e) || Iv(e.slice(0, Math.max(0, e.indexOf(":")))))
  );
}
function qSe(t) {
  let e = /^(?:\\\\[?.]\\|\\\?\?\\)(?=[A-Za-z]:[\\/])/.exec(t);
  if (!e) return t;
  let n = t.slice(e[0].length),
    r = n.slice(2);
  return (e[0].includes("\\") && r.includes("/")) || Zt(r) ? t : n;
}
function ew(t, { foldCase: e, knownNotSuspect: n = !1 } = {}) {
  if (((e ??= !1), (t = qSe(t)), GM(t) || gl(t))) {
    let a = WCt(f(WCt(t))).normalize("NFC");
    return e ? a.toLowerCase() : a;
  }
  if (!n && Kxe(x(t) ? t : f(t))) {
    let a = f(t).normalize("NFC");
    return e ? a.toLowerCase() : a;
  }
  let r = f(t),
    o = [],
    i = Vp(r);
  while (i === null && c(r) !== r) (o.unshift(Q(r)), (r = c(r)), (i = Vp(r)));
  i = o.length > 0 ? f(i ?? r, ...o) : (i ?? r);
  let s = WCt(i).normalize("NFC");
  return e ? s.toLowerCase() : s;
}
function xf(t, e, { alreadyComparable: n = !1, foldCase: r } = {}) {
  let o = et(n ? t : ew(t, { foldCase: r }), n ? e : ew(e, { foldCase: r }));
  return o === "" || (!x(o) && o !== ".." && !o.startsWith(`..${d}`));
}
function YSe(t, e) {
  let n = Vp(t),
    r = Vp(e);
  return n !== null && r !== null && U(n) === U(r);
}
function Css(t, e) {
  let n = Vp(t),
    r = Vp(e);
  return n !== null && r !== null && Cn(U(n), U(r), /\//);
}
function Cn(t, e, n) {
  let r = new RegExp(`(?:${n.source})+$`),
    o = t.replace(r, "").split(n),
    i = e.replace(r, "").split(n);
  return o.length <= i.length && o.every((s, a) => s === i[a]);
}
function U(t) {
  return In(WCt(t));
}
function GM(t) {
  return Yn(t);
}
function zM(t) {
  return Ft.test(t) || (t.includes("??") && Ft.test(Yt(t)));
}
var Ft = /^[\\/]\?\?[\\/]/;
function Yt(t) {
  return nt.win32 ? nt.win32.normalize(t) : t;
}
export {
  zxe,
  NCt,
  rJr,
  vW,
  x2,
  gie,
  RC,
  XYt,
  Mit,
  hie,
  $Ct,
  FCt,
  _Fe,
  Tss,
  ncr,
  Iv,
  rcr,
  vAn,
  ocr,
  Dit,
  UCt,
  scr,
  oJr,
  icr,
  acr,
  bFe,
  In,
  Yn,
  cy,
  Rc,
  lcr,
  A_,
  xC,
  ml,
  NYe,
  dcr,
  DB,
  gk,
  zy,
  sJr,
  k6,
  EW,
  _T,
  ccr,
  iJr,
  YH,
  Qi,
  aJr,
  Fa,
  emi,
  tmi,
  nmi,
  rmi,
  $q,
  dl,
  uy,
  gl,
  lpe,
  omi,
  JYt,
  Yw,
  XH,
  MR,
  Sg,
  BCt,
  aN,
  P2,
  EAn,
  kAn,
  $Ye,
  Fl,
  zs,
  Gu,
  TAn,
  JH,
  wA,
  uP,
  QH,
  Vp,
  ucr,
  smi,
  lJr,
  T6,
  jCt,
  WM,
  Fq,
  Uq,
  fcr,
  WCt,
  pcr,
  mcr,
  gcr,
  imi,
  pE,
  dJr,
  QYt,
  hcr,
  Kxe,
  FYe,
  cJr,
  ami,
  Pee,
  Ass,
  qSe,
  ew,
  xf,
  YSe,
  Css,
  GM,
  zM
};

//# sourceMappingURL=chunk-h5gbmqm1.js.map
