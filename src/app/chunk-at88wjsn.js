// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { d, jq } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { RC } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Cn, t } from "./chunk-4kxznmzw.js";
import { Qr, xee } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { Bu } from "./chunk-xc1j8sdj.js";
import { Rf, zw, vSe, Z0, bC, Xl, xm, Tq, ju } from "./chunk-ewvf3tep.js";
import { Ks } from "./chunk-znkwh1rm.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ae, qx } from "./chunk-dvghjmtr.js";
import { Ht, Yd } from "./chunk-ddpw2j06.js";
import { Afe, tP, v4e, E4e, DZ } from "./chunk-7zgz07kc.js";
import { Ny, Nqt, Avn, DTt, Zir } from "./chunk-63a6mqbs.js";
import { kR, xH } from "./chunk-dmtyt8s1.js";
import { cM } from "./chunk-jwqtbev0.js";
import { Oii, Mii, Dii, Hii, Lii } from "./chunk-r1dvrqha.js";
import { vH } from "./chunk-51fcr7jp.js";
import { p8o } from "./chunk-38g9s4wc.js";
import { tEn } from "./chunk-928ws1pg.js";
import { iT } from "./chunk-ffrqb2c4.js";
import { o, v, M, sm, oe, T, u, Ue, yt, $e, Gr, me, B, A, gA, Ia } from "./chunk-0bqrj5ah.js";
import { Gse } from "./chunk-f9x3sh8a.js";
import { Ce, x, Fe } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
var gt = x(function (M$, ni) {
  var qR = Number.MAX_SAFE_INTEGER || 9007199254740991,
    GR = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  ni.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: qR,
    RELEASE_TYPES: GR,
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
});
var ft = x(function (x$, ri) {
  var BR =
    typeof process === "object" &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)
      ? (...e) => console.error("SEMVER", ...e)
      : () => {};
  ri.exports = BR;
});
var He = x(function (ce, oi) {
  var { MAX_SAFE_COMPONENT_LENGTH: Tn, MAX_SAFE_BUILD_LENGTH: KR, MAX_LENGTH: HR } = gt(),
    FR = ft();
  ce = oi.exports = {};
  var WR = (ce.re = []),
    YR = (ce.safeRe = []),
    b = (ce.src = []),
    $R = (ce.safeSrc = []),
    E = (ce.t = {}),
    XR = 0,
    wn = "[a-zA-Z0-9-]",
    QR = [
      ["\\s", 1],
      ["\\d", HR],
      [wn, KR]
    ],
    JR = (e) => {
      for (let [s, n] of QR)
        e = e.split(`${s}*`).join(`${s}{0,${n}}`).split(`${s}+`).join(`${s}{1,${n}}`);
      return e;
    },
    R = (e, s, n) => {
      let r = JR(s),
        a = XR++;
      (FR(e, a, s),
        (E[e] = a),
        (b[a] = s),
        ($R[a] = r),
        (WR[a] = new RegExp(s, n ? "g" : void 0)),
        (YR[a] = new RegExp(r, n ? "g" : void 0)));
    };
  R("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  R("NUMERICIDENTIFIERLOOSE", "\\d+");
  R("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${wn}*`);
  R(
    "MAINVERSION",
    `(${b[E.NUMERICIDENTIFIER]})\\.(${b[E.NUMERICIDENTIFIER]})\\.(${b[E.NUMERICIDENTIFIER]})`
  );
  R(
    "MAINVERSIONLOOSE",
    `(${b[E.NUMERICIDENTIFIERLOOSE]})\\.(${b[E.NUMERICIDENTIFIERLOOSE]})\\.(${b[E.NUMERICIDENTIFIERLOOSE]})`
  );
  R("PRERELEASEIDENTIFIER", `(?:${b[E.NONNUMERICIDENTIFIER]}|${b[E.NUMERICIDENTIFIER]})`);
  R("PRERELEASEIDENTIFIERLOOSE", `(?:${b[E.NONNUMERICIDENTIFIER]}|${b[E.NUMERICIDENTIFIERLOOSE]})`);
  R("PRERELEASE", `(?:-(${b[E.PRERELEASEIDENTIFIER]}(?:\\.${b[E.PRERELEASEIDENTIFIER]})*))`);
  R(
    "PRERELEASELOOSE",
    `(?:-?(${b[E.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${b[E.PRERELEASEIDENTIFIERLOOSE]})*))`
  );
  R("BUILDIDENTIFIER", `${wn}+`);
  R("BUILD", `(?:\\+(${b[E.BUILDIDENTIFIER]}(?:\\.${b[E.BUILDIDENTIFIER]})*))`);
  R("FULLPLAIN", `v?${b[E.MAINVERSION]}${b[E.PRERELEASE]}?${b[E.BUILD]}?`);
  R("FULL", `^${b[E.FULLPLAIN]}$`);
  R("LOOSEPLAIN", `[v=\\s]*${b[E.MAINVERSIONLOOSE]}${b[E.PRERELEASELOOSE]}?${b[E.BUILD]}?`);
  R("LOOSE", `^${b[E.LOOSEPLAIN]}$`);
  R("GTLT", "((?:<|>)?=?)");
  R("XRANGEIDENTIFIERLOOSE", `${b[E.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  R("XRANGEIDENTIFIER", `${b[E.NUMERICIDENTIFIER]}|x|X|\\*`);
  R(
    "XRANGEPLAIN",
    `[v=\\s]*(${b[E.XRANGEIDENTIFIER]})(?:\\.(${b[E.XRANGEIDENTIFIER]})(?:\\.(${b[E.XRANGEIDENTIFIER]})(?:${b[E.PRERELEASE]})?${b[E.BUILD]}?)?)?`
  );
  R(
    "XRANGEPLAINLOOSE",
    `[v=\\s]*(${b[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${b[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${b[E.XRANGEIDENTIFIERLOOSE]})(?:${b[E.PRERELEASELOOSE]})?${b[E.BUILD]}?)?)?`
  );
  R("XRANGE", `^${b[E.GTLT]}\\s*${b[E.XRANGEPLAIN]}$`);
  R("XRANGELOOSE", `^${b[E.GTLT]}\\s*${b[E.XRANGEPLAINLOOSE]}$`);
  R("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Tn}})(?:\\.(\\d{1,${Tn}}))?(?:\\.(\\d{1,${Tn}}))?`);
  R("COERCE", `${b[E.COERCEPLAIN]}(?:$|[^\\d])`);
  R("COERCEFULL", b[E.COERCEPLAIN] + `(?:${b[E.PRERELEASE]})?(?:${b[E.BUILD]})?(?:$|[^\\d])`);
  R("COERCERTL", b[E.COERCE], !0);
  R("COERCERTLFULL", b[E.COERCEFULL], !0);
  R("LONETILDE", "(?:~>?)");
  R("TILDETRIM", `(\\s*)${b[E.LONETILDE]}\\s+`, !0);
  ce.tildeTrimReplace = "$1~";
  R("TILDE", `^${b[E.LONETILDE]}${b[E.XRANGEPLAIN]}$`);
  R("TILDELOOSE", `^${b[E.LONETILDE]}${b[E.XRANGEPLAINLOOSE]}$`);
  R("LONECARET", "(?:\\^)");
  R("CARETTRIM", `(\\s*)${b[E.LONECARET]}\\s+`, !0);
  ce.caretTrimReplace = "$1^";
  R("CARET", `^${b[E.LONECARET]}${b[E.XRANGEPLAIN]}$`);
  R("CARETLOOSE", `^${b[E.LONECARET]}${b[E.XRANGEPLAINLOOSE]}$`);
  R("COMPARATORLOOSE", `^${b[E.GTLT]}\\s*(${b[E.LOOSEPLAIN]})$|^$`);
  R("COMPARATOR", `^${b[E.GTLT]}\\s*(${b[E.FULLPLAIN]})$|^$`);
  R("COMPARATORTRIM", `(\\s*)${b[E.GTLT]}\\s*(${b[E.LOOSEPLAIN]}|${b[E.XRANGEPLAIN]})`, !0);
  ce.comparatorTrimReplace = "$1$2$3";
  R("HYPHENRANGE", `^\\s*(${b[E.XRANGEPLAIN]})\\s+-\\s+(${b[E.XRANGEPLAIN]})\\s*$`);
  R("HYPHENRANGELOOSE", `^\\s*(${b[E.XRANGEPLAINLOOSE]})\\s+-\\s+(${b[E.XRANGEPLAINLOOSE]})\\s*$`);
  R("STAR", "(<|>)?=?\\s*\\*");
  R("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  R("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var Zt = x(function (D$, ai) {
  var ZR = Object.freeze({ loose: !0 }),
    ev = Object.freeze({}),
    tv = (e) => {
      if (!e) return ev;
      if (typeof e !== "object") return ZR;
      return e;
    };
  ai.exports = tv;
});
var yn = x(function (L$, di) {
  var ii = /^[0-9]+$/,
    li = (e, s) => {
      if (typeof e === "number" && typeof s === "number") return e === s ? 0 : e < s ? -1 : 1;
      let n = ii.test(e),
        r = ii.test(s);
      if (n && r) ((e = +e), (s = +s));
      return e === s ? 0 : n && !r ? -1 : r && !n ? 1 : e < s ? -1 : 1;
    },
    sv = (e, s) => li(s, e);
  di.exports = { compareIdentifiers: li, rcompareIdentifiers: sv };
});
var q = x(function (U$, hi) {
  var es = ft(),
    { MAX_LENGTH: ci, MAX_SAFE_INTEGER: ts } = gt(),
    { safeRe: ss, t: ns } = He(),
    nv = Zt(),
    { compareIdentifiers: Rn } = yn();
  class ie {
    constructor(e, s) {
      if (((s = nv(s)), e instanceof ie))
        if (e.loose === !!s.loose && e.includePrerelease === !!s.includePrerelease) return e;
        else e = e.version;
      else if (typeof e !== "string")
        throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > ci) throw TypeError(`version is longer than ${ci} characters`);
      (es("SemVer", e, s),
        (this.options = s),
        (this.loose = !!s.loose),
        (this.includePrerelease = !!s.includePrerelease));
      let n = e.trim().match(s.loose ? ss[ns.LOOSE] : ss[ns.FULL]);
      if (!n) throw TypeError(`Invalid Version: ${e}`);
      if (
        ((this.raw = e),
        (this.major = +n[1]),
        (this.minor = +n[2]),
        (this.patch = +n[3]),
        this.major > ts || this.major < 0)
      )
        throw TypeError("Invalid major version");
      if (this.minor > ts || this.minor < 0) throw TypeError("Invalid minor version");
      if (this.patch > ts || this.patch < 0) throw TypeError("Invalid patch version");
      if (!n[4]) this.prerelease = [];
      else
        this.prerelease = n[4].split(".").map((r) => {
          if (/^[0-9]+$/.test(r)) {
            let a = +r;
            if (a >= 0 && a < ts) return a;
          }
          return r;
        });
      ((this.build = n[5] ? n[5].split(".") : []), this.format());
    }
    format() {
      if (((this.version = `${this.major}.${this.minor}.${this.patch}`), this.prerelease.length))
        this.version += `-${this.prerelease.join(".")}`;
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if ((es("SemVer.compare", this.version, this.options, e), !(e instanceof ie))) {
        if (typeof e === "string" && e === this.version) return 0;
        e = new ie(e, this.options);
      }
      if (e.version === this.version) return 0;
      return this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      if (!(e instanceof ie)) e = new ie(e, this.options);
      if (this.major < e.major) return -1;
      if (this.major > e.major) return 1;
      if (this.minor < e.minor) return -1;
      if (this.minor > e.minor) return 1;
      if (this.patch < e.patch) return -1;
      if (this.patch > e.patch) return 1;
      return 0;
    }
    comparePre(e) {
      if (!(e instanceof ie)) e = new ie(e, this.options);
      if (this.prerelease.length && !e.prerelease.length) return -1;
      else if (!this.prerelease.length && e.prerelease.length) return 1;
      else if (!this.prerelease.length && !e.prerelease.length) return 0;
      let s = 0;
      do {
        let n = this.prerelease[s],
          r = e.prerelease[s];
        if ((es("prerelease compare", s, n, r), n === void 0 && r === void 0)) return 0;
        else if (r === void 0) return 1;
        else if (n === void 0) return -1;
        else if (n === r) continue;
        else return Rn(n, r);
      } while (++s);
    }
    compareBuild(e) {
      if (!(e instanceof ie)) e = new ie(e, this.options);
      let s = 0;
      do {
        let n = this.build[s],
          r = e.build[s];
        if ((es("build compare", s, n, r), n === void 0 && r === void 0)) return 0;
        else if (r === void 0) return 1;
        else if (n === void 0) return -1;
        else if (n === r) continue;
        else return Rn(n, r);
      } while (++s);
    }
    inc(e, s, n) {
      if (e.startsWith("pre")) {
        if (!s && n === !1) throw Error("invalid increment argument: identifier is empty");
        if (s) {
          let r = `-${s}`.match(this.options.loose ? ss[ns.PRERELEASELOOSE] : ss[ns.PRERELEASE]);
          if (!r || r[1] !== s) throw Error(`invalid identifier: ${s}`);
        }
      }
      switch (e) {
        case "premajor":
          ((this.prerelease.length = 0),
            (this.patch = 0),
            (this.minor = 0),
            this.major++,
            this.inc("pre", s, n));
          break;
        case "preminor":
          ((this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", s, n));
          break;
        case "prepatch":
          ((this.prerelease.length = 0), this.inc("patch", s, n), this.inc("pre", s, n));
          break;
        case "prerelease":
          if (this.prerelease.length === 0) this.inc("patch", s, n);
          this.inc("pre", s, n);
          break;
        case "release":
          if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
          ((this.minor = 0), (this.patch = 0), (this.prerelease = []));
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
          ((this.patch = 0), (this.prerelease = []));
          break;
        case "patch":
          if (this.prerelease.length === 0) this.patch++;
          this.prerelease = [];
          break;
        case "pre": {
          let r = Number(n) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [r];
          else {
            let a = this.prerelease.length;
            while (--a >= 0)
              if (typeof this.prerelease[a] === "number") (this.prerelease[a]++, (a = -2));
            if (a === -1) {
              if (s === this.prerelease.join(".") && n === !1)
                throw Error("invalid increment argument: identifier already exists");
              this.prerelease.push(r);
            }
          }
          if (s) {
            let a = [s, r];
            if (n === !1) a = [s];
            if (Rn(this.prerelease[0], s) === 0) {
              if (isNaN(this.prerelease[1])) this.prerelease = a;
            } else this.prerelease = a;
          }
          break;
        }
        default:
          throw Error(`invalid increment argument: ${e}`);
      }
      if (((this.raw = this.format()), this.build.length)) this.raw += `+${this.build.join(".")}`;
      return this;
    }
  }
  hi.exports = ie;
});
var ke = x(function (V$, pi) {
  var ui = q(),
    rv = (e, s, n = !1) => {
      if (e instanceof ui) return e;
      try {
        return new ui(e, s);
      } catch (r) {
        if (!n) return null;
        throw r;
      }
    };
  pi.exports = rv;
});
var _i = x(function (j$, mi) {
  var ov = ke(),
    av = (e, s) => {
      let n = ov(e, s);
      return n ? n.version : null;
    };
  mi.exports = av;
});
var fi = x(function (q$, gi) {
  var iv = ke(),
    lv = (e, s) => {
      let n = iv(e.trim().replace(/^[=v]+/, ""), s);
      return n ? n.version : null;
    };
  gi.exports = lv;
});
var Si = x(function (G$, Ei) {
  var bi = q(),
    dv = (e, s, n, r, a) => {
      if (typeof n === "string") ((a = r), (r = n), (n = void 0));
      try {
        return new bi(e instanceof bi ? e.version : e, n).inc(s, r, a).version;
      } catch (l) {
        return null;
      }
    };
  Ei.exports = dv;
});
var yi = x(function (B$, wi) {
  var Ti = ke(),
    cv = (e, s) => {
      let n = Ti(e, null, !0),
        r = Ti(s, null, !0),
        a = n.compare(r);
      if (a === 0) return null;
      let l = a > 0,
        c = l ? n : r,
        _ = l ? r : n,
        h = !!c.prerelease.length;
      if (!!_.prerelease.length && !h) {
        if (!_.patch && !_.minor) return "major";
        if (_.compareMain(c) === 0) {
          if (_.minor && !_.patch) return "minor";
          return "patch";
        }
      }
      let S = h ? "pre" : "";
      if (n.major !== r.major) return S + "major";
      if (n.minor !== r.minor) return S + "minor";
      if (n.patch !== r.patch) return S + "patch";
      return "prerelease";
    };
  wi.exports = cv;
});
var Ri = x(function (K$, Ai) {
  var hv = q(),
    uv = (e, s) => new hv(e, s).major;
  Ai.exports = uv;
});
var ki = x(function (H$, vi) {
  var pv = q(),
    mv = (e, s) => new pv(e, s).minor;
  vi.exports = mv;
});
var Ci = x(function (F$, zi) {
  var _v = q(),
    gv = (e, s) => new _v(e, s).patch;
  zi.exports = gv;
});
var Ni = x(function (W$, Oi) {
  var fv = ke(),
    bv = (e, s) => {
      let n = fv(e, s);
      return n && n.prerelease.length ? n.prerelease : null;
    };
  Oi.exports = bv;
});
var Z = x(function (Y$, Pi) {
  var Ii = q(),
    Ev = (e, s, n) => new Ii(e, n).compare(new Ii(s, n));
  Pi.exports = Ev;
});
var xi = x(function ($$, Mi) {
  var Sv = Z(),
    Tv = (e, s, n) => Sv(s, e, n);
  Mi.exports = Tv;
});
var Li = x(function (X$, Di) {
  var wv = Z(),
    yv = (e, s) => wv(e, s, !0);
  Di.exports = yv;
});
var rs = x(function (Q$, ji) {
  var Ui = q(),
    Av = (e, s, n) => {
      let r = new Ui(e, n),
        a = new Ui(s, n);
      return r.compare(a) || r.compareBuild(a);
    };
  ji.exports = Av;
});
var Gi = x(function (J$, qi) {
  var Rv = rs(),
    vv = (e, s) => e.sort((n, r) => Rv(n, r, s));
  qi.exports = vv;
});
var Ki = x(function (Z$, Bi) {
  var kv = rs(),
    zv = (e, s) => e.sort((n, r) => kv(r, n, s));
  Bi.exports = zv;
});
var bt = x(function (e2, Hi) {
  var Cv = Z(),
    Ov = (e, s, n) => Cv(e, s, n) > 0;
  Hi.exports = Ov;
});
var os = x(function (t2, Fi) {
  var Nv = Z(),
    Iv = (e, s, n) => Nv(e, s, n) < 0;
  Fi.exports = Iv;
});
var vn = x(function (s2, Wi) {
  var Pv = Z(),
    Mv = (e, s, n) => Pv(e, s, n) === 0;
  Wi.exports = Mv;
});
var kn = x(function (n2, Yi) {
  var xv = Z(),
    Dv = (e, s, n) => xv(e, s, n) !== 0;
  Yi.exports = Dv;
});
var as = x(function (r2, $i) {
  var Lv = Z(),
    Uv = (e, s, n) => Lv(e, s, n) >= 0;
  $i.exports = Uv;
});
var is = x(function (o2, Xi) {
  var Vv = Z(),
    jv = (e, s, n) => Vv(e, s, n) <= 0;
  Xi.exports = jv;
});
var zn = x(function (a2, Qi) {
  var qv = vn(),
    Gv = kn(),
    Bv = bt(),
    Kv = as(),
    Hv = os(),
    Fv = is(),
    Wv = (e, s, n, r) => {
      switch (s) {
        case "===":
          if (typeof e === "object") e = e.version;
          if (typeof n === "object") n = n.version;
          return e === n;
        case "!==":
          if (typeof e === "object") e = e.version;
          if (typeof n === "object") n = n.version;
          return e !== n;
        case "":
        case "=":
        case "==":
          return qv(e, n, r);
        case "!=":
          return Gv(e, n, r);
        case ">":
          return Bv(e, n, r);
        case ">=":
          return Kv(e, n, r);
        case "<":
          return Hv(e, n, r);
        case "<=":
          return Fv(e, n, r);
        default:
          throw TypeError(`Invalid operator: ${s}`);
      }
    };
  Qi.exports = Wv;
});
var Zi = x(function (i2, Ji) {
  var Yv = q(),
    $v = ke(),
    { safeRe: ls, t: ds } = He(),
    Xv = (e, s) => {
      if (e instanceof Yv) return e;
      if (typeof e === "number") e = String(e);
      if (typeof e !== "string") return null;
      s = s || {};
      let n = null;
      if (!s.rtl) n = e.match(s.includePrerelease ? ls[ds.COERCEFULL] : ls[ds.COERCE]);
      else {
        let h = s.includePrerelease ? ls[ds.COERCERTLFULL] : ls[ds.COERCERTL],
          f;
        while ((f = h.exec(e)) && (!n || n.index + n[0].length !== e.length)) {
          if (!n || f.index + f[0].length !== n.index + n[0].length) n = f;
          h.lastIndex = f.index + f[1].length + f[2].length;
        }
        h.lastIndex = -1;
      }
      if (n === null) return null;
      let r = n[2],
        a = n[3] || "0",
        l = n[4] || "0",
        c = s.includePrerelease && n[5] ? `-${n[5]}` : "",
        _ = s.includePrerelease && n[6] ? `+${n[6]}` : "";
      return $v(`${r}.${a}.${l}${c}${_}`, s);
    };
  Ji.exports = Xv;
});
var sl = x(function (l2, tl) {
  class el {
    constructor() {
      ((this.max = 1000), (this.map = new Map()));
    }
    get(e) {
      let s = this.map.get(e);
      if (s === void 0) return;
      else return (this.map.delete(e), this.map.set(e, s), s);
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, s) {
      if (!this.delete(e) && s !== void 0) {
        if (this.map.size >= this.max) {
          let r = this.map.keys().next().value;
          this.delete(r);
        }
        this.map.set(e, s);
      }
      return this;
    }
  }
  tl.exports = el;
});
var ee = x(function (d2, al) {
  var Qv = /\s+/g;
  class Et {
    constructor(e, s) {
      if (((s = Zv(s)), e instanceof Et))
        if (e.loose === !!s.loose && e.includePrerelease === !!s.includePrerelease) return e;
        else return new Et(e.raw, s);
      if (e instanceof cs)
        return ((this.raw = e.value), (this.set = [[e]]), (this.formatted = void 0), this);
      if (
        ((this.options = s),
        (this.loose = !!s.loose),
        (this.includePrerelease = !!s.includePrerelease),
        (this.raw = e.trim().replace(Qv, " ")),
        (this.set = this.raw
          .split("||")
          .map((n) => this.parseRange(n.trim()))
          .filter((n) => n.length)),
        !this.set.length)
      )
        throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let n = this.set[0];
        if (((this.set = this.set.filter((r) => !rl(r[0]))), this.set.length === 0)) this.set = [n];
        else if (this.set.length > 1) {
          for (let r of this.set)
            if (r.length === 1 && ak(r[0])) {
              this.set = [r];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let e = 0; e < this.set.length; e++) {
          if (e > 0) this.formatted += "||";
          let s = this.set[e];
          for (let n = 0; n < s.length; n++) {
            if (n > 0) this.formatted += " ";
            this.formatted += s[n].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      let n = ((this.options.includePrerelease && rk) | (this.options.loose && ok)) + ":" + e,
        r = nl.get(n);
      if (r) return r;
      let a = this.options.loose,
        l = a ? H[G.HYPHENRANGELOOSE] : H[G.HYPHENRANGE];
      ((e = e.replace(l, gk(this.options.includePrerelease))),
        I("hyphen replace", e),
        (e = e.replace(H[G.COMPARATORTRIM], tk)),
        I("comparator trim", e),
        (e = e.replace(H[G.TILDETRIM], sk)),
        I("tilde trim", e),
        (e = e.replace(H[G.CARETTRIM], nk)),
        I("caret trim", e));
      let c = e
        .split(" ")
        .map((S) => ik(S, this.options))
        .join(" ")
        .split(/\s+/)
        .map((S) => _k(S, this.options));
      if (a)
        c = c.filter(
          (S) => (I("loose invalid filter", S, this.options), !!S.match(H[G.COMPARATORLOOSE]))
        );
      I("range list", c);
      let _ = new Map(),
        h = c.map((S) => new cs(S, this.options));
      for (let S of h) {
        if (rl(S)) return [S];
        _.set(S.value, S);
      }
      if (_.size > 1 && _.has("")) _.delete("");
      let f = [..._.values()];
      return (nl.set(n, f), f);
    }
    intersects(e, s) {
      if (!(e instanceof Et)) throw TypeError("a Range is required");
      return this.set.some(
        (n) =>
          ol(n, s) &&
          e.set.some((r) => ol(r, s) && n.every((a) => r.every((l) => a.intersects(l, s))))
      );
    }
    test(e) {
      if (!e) return !1;
      if (typeof e === "string")
        try {
          e = new ek(e, this.options);
        } catch (s) {
          return !1;
        }
      for (let s = 0; s < this.set.length; s++) if (fk(this.set[s], e, this.options)) return !0;
      return !1;
    }
  }
  al.exports = Et;
  var Jv = sl(),
    nl = new Jv(),
    Zv = Zt(),
    cs = St(),
    I = ft(),
    ek = q(),
    {
      safeRe: H,
      t: G,
      comparatorTrimReplace: tk,
      tildeTrimReplace: sk,
      caretTrimReplace: nk
    } = He(),
    { FLAG_INCLUDE_PRERELEASE: rk, FLAG_LOOSE: ok } = gt(),
    rl = (e) => e.value === "<0.0.0-0",
    ak = (e) => e.value === "",
    ol = (e, s) => {
      let n = !0,
        r = e.slice(),
        a = r.pop();
      while (n && r.length) ((n = r.every((l) => a.intersects(l, s))), (a = r.pop()));
      return n;
    },
    ik = (e, s) => (
      (e = e.replace(H[G.BUILD], "")),
      I("comp", e, s),
      (e = ck(e, s)),
      I("caret", e),
      (e = lk(e, s)),
      I("tildes", e),
      (e = uk(e, s)),
      I("xrange", e),
      (e = mk(e, s)),
      I("stars", e),
      e
    ),
    F = (e) => !e || e.toLowerCase() === "x" || e === "*",
    lk = (e, s) =>
      e
        .trim()
        .split(/\s+/)
        .map((n) => dk(n, s))
        .join(" "),
    dk = (e, s) => {
      let n = s.loose ? H[G.TILDELOOSE] : H[G.TILDE];
      return e.replace(n, (r, a, l, c, _) => {
        I("tilde", e, r, a, l, c, _);
        let h;
        if (F(a)) h = "";
        else if (F(l)) h = `>=${a}.0.0 <${+a + 1}.0.0-0`;
        else if (F(c)) h = `>=${a}.${l}.0 <${a}.${+l + 1}.0-0`;
        else if (_) (I("replaceTilde pr", _), (h = `>=${a}.${l}.${c}-${_} <${a}.${+l + 1}.0-0`));
        else h = `>=${a}.${l}.${c} <${a}.${+l + 1}.0-0`;
        return (I("tilde return", h), h);
      });
    },
    ck = (e, s) =>
      e
        .trim()
        .split(/\s+/)
        .map((n) => hk(n, s))
        .join(" "),
    hk = (e, s) => {
      I("caret", e, s);
      let n = s.loose ? H[G.CARETLOOSE] : H[G.CARET],
        r = s.includePrerelease ? "-0" : "";
      return e.replace(n, (a, l, c, _, h) => {
        I("caret", e, a, l, c, _, h);
        let f;
        if (F(l)) f = "";
        else if (F(c)) f = `>=${l}.0.0${r} <${+l + 1}.0.0-0`;
        else if (F(_))
          if (l === "0") f = `>=${l}.${c}.0${r} <${l}.${+c + 1}.0-0`;
          else f = `>=${l}.${c}.0${r} <${+l + 1}.0.0-0`;
        else if (h)
          if ((I("replaceCaret pr", h), l === "0"))
            if (c === "0") f = `>=${l}.${c}.${_}-${h} <${l}.${c}.${+_ + 1}-0`;
            else f = `>=${l}.${c}.${_}-${h} <${l}.${+c + 1}.0-0`;
          else f = `>=${l}.${c}.${_}-${h} <${+l + 1}.0.0-0`;
        else if ((I("no pr"), l === "0"))
          if (c === "0") f = `>=${l}.${c}.${_}${r} <${l}.${c}.${+_ + 1}-0`;
          else f = `>=${l}.${c}.${_}${r} <${l}.${+c + 1}.0-0`;
        else f = `>=${l}.${c}.${_} <${+l + 1}.0.0-0`;
        return (I("caret return", f), f);
      });
    },
    uk = (e, s) => (
      I("replaceXRanges", e, s),
      e
        .split(/\s+/)
        .map((n) => pk(n, s))
        .join(" ")
    ),
    pk = (e, s) => {
      e = e.trim();
      let n = s.loose ? H[G.XRANGELOOSE] : H[G.XRANGE];
      return e.replace(n, (r, a, l, c, _, h) => {
        I("xRange", e, r, a, l, c, _, h);
        let f = F(l),
          S = f || F(c),
          z = S || F(_),
          N = z;
        if (a === "=" && N) a = "";
        if (((h = s.includePrerelease ? "-0" : ""), f))
          if (a === ">" || a === "<") r = "<0.0.0-0";
          else r = "*";
        else if (a && N) {
          if (S) c = 0;
          if (((_ = 0), a === ">"))
            if (((a = ">="), S)) ((l = +l + 1), (c = 0), (_ = 0));
            else ((c = +c + 1), (_ = 0));
          else if (a === "<=")
            if (((a = "<"), S)) l = +l + 1;
            else c = +c + 1;
          if (a === "<") h = "-0";
          r = `${a + l}.${c}.${_}${h}`;
        } else if (S) r = `>=${l}.0.0${h} <${+l + 1}.0.0-0`;
        else if (z) r = `>=${l}.${c}.0${h} <${l}.${+c + 1}.0-0`;
        return (I("xRange return", r), r);
      });
    },
    mk = (e, s) => (I("replaceStars", e, s), e.trim().replace(H[G.STAR], "")),
    _k = (e, s) => (
      I("replaceGTE0", e, s),
      e.trim().replace(H[s.includePrerelease ? G.GTE0PRE : G.GTE0], "")
    ),
    gk = (e) => (s, n, r, a, l, c, _, h, f, S, z, N) => {
      if (F(r)) n = "";
      else if (F(a)) n = `>=${r}.0.0${e ? "-0" : ""}`;
      else if (F(l)) n = `>=${r}.${a}.0${e ? "-0" : ""}`;
      else if (c) n = `>=${n}`;
      else n = `>=${n}${e ? "-0" : ""}`;
      if (F(f)) h = "";
      else if (F(S)) h = `<${+f + 1}.0.0-0`;
      else if (F(z)) h = `<${f}.${+S + 1}.0-0`;
      else if (N) h = `<=${f}.${S}.${z}-${N}`;
      else if (e) h = `<${f}.${S}.${+z + 1}-0`;
      else h = `<=${h}`;
      return `${n} ${h}`.trim();
    },
    fk = (e, s, n) => {
      for (let r = 0; r < e.length; r++) if (!e[r].test(s)) return !1;
      if (s.prerelease.length && !n.includePrerelease) {
        for (let r = 0; r < e.length; r++) {
          if ((I(e[r].semver), e[r].semver === cs.ANY)) continue;
          if (e[r].semver.prerelease.length > 0) {
            let a = e[r].semver;
            if (a.major === s.major && a.minor === s.minor && a.patch === s.patch) return !0;
          }
        }
        return !1;
      }
      return !0;
    };
});
var St = x(function (c2, ul) {
  var Tt = Symbol("SemVer ANY");
  class hs {
    static get ANY() {
      return Tt;
    }
    constructor(e, s) {
      if (((s = il(s)), e instanceof hs))
        if (e.loose === !!s.loose) return e;
        else e = e.value;
      if (
        ((e = e.trim().split(/\s+/).join(" ")),
        Nn("comparator", e, s),
        (this.options = s),
        (this.loose = !!s.loose),
        this.parse(e),
        this.semver === Tt)
      )
        this.value = "";
      else this.value = this.operator + this.semver.version;
      Nn("comp", this);
    }
    parse(e) {
      let s = this.options.loose ? ll[dl.COMPARATORLOOSE] : ll[dl.COMPARATOR],
        n = e.match(s);
      if (!n) throw TypeError(`Invalid comparator: ${e}`);
      if (((this.operator = n[1] !== void 0 ? n[1] : ""), this.operator === "="))
        this.operator = "";
      if (!n[2]) this.semver = Tt;
      else this.semver = new cl(n[2], this.options.loose);
    }
    toString() {
      return this.value;
    }
    test(e) {
      if ((Nn("Comparator.test", e, this.options.loose), this.semver === Tt || e === Tt)) return !0;
      if (typeof e === "string")
        try {
          e = new cl(e, this.options);
        } catch (s) {
          return !1;
        }
      return On(e, this.operator, this.semver, this.options);
    }
    intersects(e, s) {
      if (!(e instanceof hs)) throw TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return !0;
        return new hl(e.value, s).test(this.value);
      } else if (e.operator === "") {
        if (e.value === "") return !0;
        return new hl(this.value, s).test(e.semver);
      }
      if (
        ((s = il(s)), s.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0"))
      )
        return !1;
      if (!s.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")))
        return !1;
      if (this.operator.startsWith(">") && e.operator.startsWith(">")) return !0;
      if (this.operator.startsWith("<") && e.operator.startsWith("<")) return !0;
      if (
        this.semver.version === e.semver.version &&
        this.operator.includes("=") &&
        e.operator.includes("=")
      )
        return !0;
      if (
        On(this.semver, "<", e.semver, s) &&
        this.operator.startsWith(">") &&
        e.operator.startsWith("<")
      )
        return !0;
      if (
        On(this.semver, ">", e.semver, s) &&
        this.operator.startsWith("<") &&
        e.operator.startsWith(">")
      )
        return !0;
      return !1;
    }
  }
  ul.exports = hs;
  var il = Zt(),
    { safeRe: ll, t: dl } = He(),
    On = zn(),
    Nn = ft(),
    cl = q(),
    hl = ee();
});
var wt = x(function (h2, pl) {
  var bk = ee(),
    Ek = (e, s, n) => {
      try {
        s = new bk(s, n);
      } catch (r) {
        return !1;
      }
      return s.test(e);
    };
  pl.exports = Ek;
});
var gl = x(function (u2, ml) {
  var Sk = ee(),
    Tk = (e, s) =>
      new Sk(e, s).set.map((n) =>
        n
          .map((r) => r.value)
          .join(" ")
          .trim()
          .split(" ")
      );
  ml.exports = Tk;
});
var El = x(function (p2, bl) {
  var wk = q(),
    yk = ee(),
    Ak = (e, s, n) => {
      let r = null,
        a = null,
        l = null;
      try {
        l = new yk(s, n);
      } catch (c) {
        return null;
      }
      return (
        e.forEach((c) => {
          if (l.test(c)) {
            if (!r || a.compare(c) === -1) ((r = c), (a = new wk(r, n)));
          }
        }),
        r
      );
    };
  bl.exports = Ak;
});
var Tl = x(function (m2, Sl) {
  var Rk = q(),
    vk = ee(),
    kk = (e, s, n) => {
      let r = null,
        a = null,
        l = null;
      try {
        l = new vk(s, n);
      } catch (c) {
        return null;
      }
      return (
        e.forEach((c) => {
          if (l.test(c)) {
            if (!r || a.compare(c) === 1) ((r = c), (a = new Rk(r, n)));
          }
        }),
        r
      );
    };
  Sl.exports = kk;
});
var Al = x(function (_2, yl) {
  var In = q(),
    zk = ee(),
    wl = bt(),
    Ck = (e, s) => {
      e = new zk(e, s);
      let n = new In("0.0.0");
      if (e.test(n)) return n;
      if (((n = new In("0.0.0-0")), e.test(n))) return n;
      n = null;
      for (let r = 0; r < e.set.length; ++r) {
        let a = e.set[r],
          l = null;
        if (
          (a.forEach((c) => {
            let _ = new In(c.semver.version);
            switch (c.operator) {
              case ">":
                if (_.prerelease.length === 0) _.patch++;
                else _.prerelease.push(0);
                _.raw = _.format();
              case "":
              case ">=":
                if (!l || wl(_, l)) l = _;
                break;
              case "<":
              case "<=":
                break;
              default:
                throw Error(`Unexpected operation: ${c.operator}`);
            }
          }),
          l && (!n || wl(n, l)))
        )
          n = l;
      }
      if (n && e.test(n)) return n;
      return null;
    };
  yl.exports = Ck;
});
var vl = x(function (g2, Rl) {
  var Ok = ee(),
    Nk = (e, s) => {
      try {
        return new Ok(e, s).range || "*";
      } catch (n) {
        return null;
      }
    };
  Rl.exports = Nk;
});
var us = x(function (f2, Ol) {
  var Ik = q(),
    Cl = St(),
    { ANY: Pk } = Cl,
    Mk = ee(),
    xk = wt(),
    kl = bt(),
    zl = os(),
    Dk = is(),
    Lk = as(),
    Uk = (e, s, n, r) => {
      ((e = new Ik(e, r)), (s = new Mk(s, r)));
      let a, l, c, _, h;
      switch (n) {
        case ">":
          ((a = kl), (l = Dk), (c = zl), (_ = ">"), (h = ">="));
          break;
        case "<":
          ((a = zl), (l = Lk), (c = kl), (_ = "<"), (h = "<="));
          break;
        default:
          throw TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (xk(e, s, r)) return !1;
      for (let f = 0; f < s.set.length; ++f) {
        let S = s.set[f],
          z = null,
          N = null;
        if (
          (S.forEach((y) => {
            if (y.semver === Pk) y = new Cl(">=0.0.0");
            if (((z = z || y), (N = N || y), a(y.semver, z.semver, r))) z = y;
            else if (c(y.semver, N.semver, r)) N = y;
          }),
          z.operator === _ || z.operator === h)
        )
          return !1;
        if ((!N.operator || N.operator === _) && l(e, N.semver)) return !1;
        else if (N.operator === h && c(e, N.semver)) return !1;
      }
      return !0;
    };
  Ol.exports = Uk;
});
var Il = x(function (b2, Nl) {
  var Vk = us(),
    jk = (e, s, n) => Vk(e, s, ">", n);
  Nl.exports = jk;
});
var Ml = x(function (E2, Pl) {
  var qk = us(),
    Gk = (e, s, n) => qk(e, s, "<", n);
  Pl.exports = Gk;
});
var Ll = x(function (S2, Dl) {
  var xl = ee(),
    Bk = (e, s, n) => ((e = new xl(e, n)), (s = new xl(s, n)), e.intersects(s, n));
  Dl.exports = Bk;
});
var Vl = x(function (T2, Ul) {
  var Kk = wt(),
    Hk = Z();
  Ul.exports = (e, s, n) => {
    let r = [],
      a = null,
      l = null,
      c = e.sort((S, z) => Hk(S, z, n));
    for (let S of c)
      if (Kk(S, s, n)) {
        if (((l = S), !a)) a = S;
      } else {
        if (l) r.push([a, l]);
        ((l = null), (a = null));
      }
    if (a) r.push([a, null]);
    let _ = [];
    for (let [S, z] of r)
      if (S === z) _.push(S);
      else if (!z && S === c[0]) _.push("*");
      else if (!z) _.push(`>=${S}`);
      else if (S === c[0]) _.push(`<=${z}`);
      else _.push(`${S} - ${z}`);
    let h = _.join(" || "),
      f = typeof s.raw === "string" ? s.raw : String(s);
    return h.length < f.length ? h : s;
  };
});
var Hl = x(function (w2, Kl) {
  var jl = ee(),
    Mn = St(),
    { ANY: Pn } = Mn,
    Rt = wt(),
    xn = Z(),
    Fk = (e, s, n = {}) => {
      if (e === s) return !0;
      ((e = new jl(e, n)), (s = new jl(s, n)));
      let r = !1;
      e: for (let a of e.set) {
        for (let l of s.set) {
          let c = Yk(a, l, n);
          if (((r = r || c !== null), c)) continue e;
        }
        if (r) return !1;
      }
      return !0;
    },
    Wk = [new Mn(">=0.0.0-0")],
    ql = [new Mn(">=0.0.0")],
    Yk = (e, s, n) => {
      if (e === s) return !0;
      if (e.length === 1 && e[0].semver === Pn)
        if (s.length === 1 && s[0].semver === Pn) return !0;
        else if (n.includePrerelease) e = Wk;
        else e = ql;
      if (s.length === 1 && s[0].semver === Pn)
        if (n.includePrerelease) return !0;
        else s = ql;
      let r = new Set(),
        a,
        l;
      for (let y of e)
        if (y.operator === ">" || y.operator === ">=") a = Gl(a, y, n);
        else if (y.operator === "<" || y.operator === "<=") l = Bl(l, y, n);
        else r.add(y.semver);
      if (r.size > 1) return null;
      let c;
      if (a && l) {
        if (((c = xn(a.semver, l.semver, n)), c > 0)) return null;
        else if (c === 0 && (a.operator !== ">=" || l.operator !== "<=")) return null;
      }
      for (let y of r) {
        if (a && !Rt(y, String(a), n)) return null;
        if (l && !Rt(y, String(l), n)) return null;
        for (let bR of s) if (!Rt(y, String(bR), n)) return !1;
        return !0;
      }
      let _,
        h,
        f,
        S,
        z = l && !n.includePrerelease && l.semver.prerelease.length ? l.semver : !1,
        N = a && !n.includePrerelease && a.semver.prerelease.length ? a.semver : !1;
      if (z && z.prerelease.length === 1 && l.operator === "<" && z.prerelease[0] === 0) z = !1;
      for (let y of s) {
        if (
          ((S = S || y.operator === ">" || y.operator === ">="),
          (f = f || y.operator === "<" || y.operator === "<="),
          a)
        ) {
          if (N) {
            if (
              y.semver.prerelease &&
              y.semver.prerelease.length &&
              y.semver.major === N.major &&
              y.semver.minor === N.minor &&
              y.semver.patch === N.patch
            )
              N = !1;
          }
          if (y.operator === ">" || y.operator === ">=") {
            if (((_ = Gl(a, y, n)), _ === y && _ !== a)) return !1;
          } else if (a.operator === ">=" && !Rt(a.semver, String(y), n)) return !1;
        }
        if (l) {
          if (z) {
            if (
              y.semver.prerelease &&
              y.semver.prerelease.length &&
              y.semver.major === z.major &&
              y.semver.minor === z.minor &&
              y.semver.patch === z.patch
            )
              z = !1;
          }
          if (y.operator === "<" || y.operator === "<=") {
            if (((h = Bl(l, y, n)), h === y && h !== l)) return !1;
          } else if (l.operator === "<=" && !Rt(l.semver, String(y), n)) return !1;
        }
        if (!y.operator && (l || a) && c !== 0) return !1;
      }
      if (a && f && !l && c !== 0) return !1;
      if (l && S && !a && c !== 0) return !1;
      if (N || z) return !1;
      return !0;
    },
    Gl = (e, s, n) => {
      if (!e) return s;
      let r = xn(e.semver, s.semver, n);
      return r > 0 ? e : r < 0 ? s : s.operator === ">" && e.operator === ">=" ? s : e;
    },
    Bl = (e, s, n) => {
      if (!e) return s;
      let r = xn(e.semver, s.semver, n);
      return r < 0 ? e : r > 0 ? s : s.operator === "<" && e.operator === "<=" ? s : e;
    };
  Kl.exports = Fk;
});
var oy = x(function (y2, Fl) {
  var We = He(),
    ps = gt(),
    $k = q(),
    ms = yn(),
    Xk = ke(),
    Qk = _i(),
    Jk = fi(),
    Zk = Si(),
    ez = yi(),
    tz = Ri(),
    sz = ki(),
    nz = Ci(),
    rz = Ni(),
    oz = Z(),
    az = xi(),
    iz = Li(),
    lz = rs(),
    dz = Gi(),
    cz = Ki(),
    hz = bt(),
    uz = os(),
    pz = vn(),
    mz = kn(),
    _z = as(),
    gz = is(),
    fz = zn(),
    bz = Zi(),
    Ez = St(),
    Sz = ee(),
    Tz = wt(),
    wz = gl(),
    yz = El(),
    Az = Tl(),
    Rz = Al(),
    vz = vl(),
    kz = us(),
    zz = Il(),
    Cz = Ml(),
    Oz = Ll(),
    Iz = Vl(),
    Pz = Hl();
  Fl.exports = {
    parse: Xk,
    valid: Qk,
    clean: Jk,
    inc: Zk,
    diff: ez,
    major: tz,
    minor: sz,
    patch: nz,
    prerelease: rz,
    compare: oz,
    rcompare: az,
    compareLoose: iz,
    compareBuild: lz,
    sort: dz,
    rsort: cz,
    gt: hz,
    lt: uz,
    eq: pz,
    neq: mz,
    gte: _z,
    lte: gz,
    cmp: fz,
    coerce: bz,
    Comparator: Ez,
    Range: Sz,
    satisfies: Tz,
    toComparators: wz,
    maxSatisfying: yz,
    minSatisfying: Az,
    minVersion: Rz,
    validRange: vz,
    outside: kz,
    gtr: zz,
    ltr: Cz,
    intersects: Oz,
    simplifyRange: Iz,
    subset: Pz,
    SemVer: $k,
    re: We.re,
    src: We.src,
    tokens: We.t,
    SEMVER_SPEC_VERSION: ps.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: ps.RELEASE_TYPES,
    compareIdentifiers: ms.compareIdentifiers,
    rcompareIdentifiers: ms.rcompareIdentifiers
  };
});
var ad = x(function (rd) {
  Object.defineProperty(rd, "__esModule", { value: !0 });
  rd._globalThis = void 0;
  rd._globalThis = typeof globalThis === "object" ? globalThis : global;
});
var id = x(function (ze) {
  var eC =
      (ze && ze.__createBinding) ||
      (Object.create
        ? function (e, s, n, r) {
            if (r === void 0) r = n;
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return s[n];
              }
            });
          }
        : function (e, s, n, r) {
            if (r === void 0) r = n;
            e[r] = s[n];
          }),
    tC =
      (ze && ze.__exportStar) ||
      function (e, s) {
        for (var n in e)
          if (n !== "default" && !Object.prototype.hasOwnProperty.call(s, n)) eC(s, e, n);
      };
  Object.defineProperty(ze, "__esModule", { value: !0 });
  tC(ad(), ze);
});
var ld = x(function (Oe) {
  var sC =
      (Oe && Oe.__createBinding) ||
      (Object.create
        ? function (e, s, n, r) {
            if (r === void 0) r = n;
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return s[n];
              }
            });
          }
        : function (e, s, n, r) {
            if (r === void 0) r = n;
            e[r] = s[n];
          }),
    nC =
      (Oe && Oe.__exportStar) ||
      function (e, s) {
        for (var n in e)
          if (n !== "default" && !Object.prototype.hasOwnProperty.call(s, n)) sC(s, e, n);
      };
  Object.defineProperty(Oe, "__esModule", { value: !0 });
  nC(id(), Oe);
});
var jn = x(function (dd) {
  Object.defineProperty(dd, "__esModule", { value: !0 });
  dd.VERSION = void 0;
  dd.VERSION = "1.9.0";
});
var gd = x(function (md) {
  Object.defineProperty(md, "__esModule", { value: !0 });
  md.isCompatible = md._makeCompatibilityCheck = void 0;
  var ud = jn(),
    hd = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  function pd(e) {
    let s = new Set([e]),
      n = new Set(),
      r = e.match(hd);
    if (!r) return () => !1;
    let a = { major: +r[1], minor: +r[2], patch: +r[3], prerelease: r[4] };
    if (a.prerelease != null)
      return function (h) {
        return h === e;
      };
    function l(_) {
      return (n.add(_), !1);
    }
    function c(_) {
      return (s.add(_), !0);
    }
    return function (h) {
      if (s.has(h)) return !0;
      if (n.has(h)) return !1;
      let f = h.match(hd);
      if (!f) return l(h);
      let S = { major: +f[1], minor: +f[2], patch: +f[3], prerelease: f[4] };
      if (S.prerelease != null) return l(h);
      if (a.major !== S.major) return l(h);
      if (a.major === 0) {
        if (a.minor === S.minor && a.patch <= S.patch) return c(h);
        return l(h);
      }
      if (a.minor <= S.minor) return c(h);
      return l(h);
    };
  }
  md._makeCompatibilityCheck = pd;
  md.isCompatible = pd(ud.VERSION);
});
var Ie = x(function (Ed) {
  Object.defineProperty(Ed, "__esModule", { value: !0 });
  Ed.unregisterGlobal = Ed.getGlobal = Ed.registerGlobal = void 0;
  var fd = ld(),
    te = jn(),
    bd = gd(),
    oC = te.VERSION.split(".")[0],
    zt = Symbol.for(`opentelemetry.js.api.${oC}`),
    Ct = fd._globalThis;
  function aC(e, s, n, r = !1) {
    var a;
    let l = (Ct[zt] = (a = Ct[zt]) !== null && a !== void 0 ? a : { version: te.VERSION });
    if (!r && l[e]) {
      let c = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
      return (n.error(c.stack || c.message), !1);
    }
    if (l.version !== te.VERSION) {
      let c = Error(
        `@opentelemetry/api: Registration of version v${l.version} for ${e} does not match previously registered API v${te.VERSION}`
      );
      return (n.error(c.stack || c.message), !1);
    }
    return (
      (l[e] = s),
      n.debug(`@opentelemetry/api: Registered a global for ${e} v${te.VERSION}.`),
      !0
    );
  }
  Ed.registerGlobal = aC;
  function lC(e) {
    var s, n;
    let r = (s = Ct[zt]) === null || s === void 0 ? void 0 : s.version;
    if (!r || !bd.isCompatible(r)) return;
    return (n = Ct[zt]) === null || n === void 0 ? void 0 : n[e];
  }
  Ed.getGlobal = lC;
  function dC(e, s) {
    s.debug(`@opentelemetry/api: Unregistering a global for ${e} v${te.VERSION}.`);
    let n = Ct[zt];
    if (n) delete n[e];
  }
  Ed.unregisterGlobal = dC;
});
var Rd = x(function (yd) {
  Object.defineProperty(yd, "__esModule", { value: !0 });
  yd.DiagComponentLogger = void 0;
  var Td = Ie();
  class wd {
    constructor(e) {
      this._namespace = e.namespace || "DiagComponentLogger";
    }
    debug(...e) {
      return Ot("debug", this._namespace, e);
    }
    error(...e) {
      return Ot("error", this._namespace, e);
    }
    info(...e) {
      return Ot("info", this._namespace, e);
    }
    warn(...e) {
      return Ot("warn", this._namespace, e);
    }
    verbose(...e) {
      return Ot("verbose", this._namespace, e);
    }
  }
  yd.DiagComponentLogger = wd;
  function Ot(e, s, n) {
    let r = Td.getGlobal("diag");
    if (!r) return;
    return (n.unshift(s), r[e](...n));
  }
});
var fs = x(function (vd) {
  Object.defineProperty(vd, "__esModule", { value: !0 });
  vd.DiagLogLevel = void 0;
  var uC;
  (function (e) {
    ((e[(e.NONE = 0)] = "NONE"),
      (e[(e.ERROR = 30)] = "ERROR"),
      (e[(e.WARN = 50)] = "WARN"),
      (e[(e.INFO = 60)] = "INFO"),
      (e[(e.DEBUG = 70)] = "DEBUG"),
      (e[(e.VERBOSE = 80)] = "VERBOSE"),
      (e[(e.ALL = 9999)] = "ALL"));
  })((uC = vd.DiagLogLevel || (vd.DiagLogLevel = {})));
});
var Cd = x(function (kd) {
  Object.defineProperty(kd, "__esModule", { value: !0 });
  kd.createLogLevelDiagLogger = void 0;
  var L = fs();
  function pC(e, s) {
    if (e < L.DiagLogLevel.NONE) e = L.DiagLogLevel.NONE;
    else if (e > L.DiagLogLevel.ALL) e = L.DiagLogLevel.ALL;
    s = s || {};
    function n(r, a) {
      let l = s[r];
      if (typeof l === "function" && e >= a) return l.bind(s);
      return function () {};
    }
    return {
      error: n("error", L.DiagLogLevel.ERROR),
      warn: n("warn", L.DiagLogLevel.WARN),
      info: n("info", L.DiagLogLevel.INFO),
      debug: n("debug", L.DiagLogLevel.DEBUG),
      verbose: n("verbose", L.DiagLogLevel.VERBOSE)
    };
  }
  kd.createLogLevelDiagLogger = pC;
});
var Pe = x(function (Id) {
  Object.defineProperty(Id, "__esModule", { value: !0 });
  Id.DiagAPI = void 0;
  var Od = Rd(),
    Nd = Cd(),
    bs = fs(),
    fe = Ie(),
    mC = "diag";
  class Gn {
    constructor() {
      function e(r) {
        return function (...a) {
          let l = fe.getGlobal("diag");
          if (!l) return;
          return l[r](...a);
        };
      }
      let s = this,
        n = (r, a = { logLevel: bs.DiagLogLevel.INFO }) => {
          var l, c, _;
          if (r === s) {
            let S = Error(
              "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
            );
            return (s.error((l = S.stack) !== null && l !== void 0 ? l : S.message), !1);
          }
          if (typeof a === "number") a = { logLevel: a };
          let h = fe.getGlobal("diag"),
            f = Nd.createLogLevelDiagLogger(
              (c = a.logLevel) !== null && c !== void 0 ? c : bs.DiagLogLevel.INFO,
              r
            );
          if (h && !a.suppressOverrideMessage) {
            let S =
              (_ = Error().stack) !== null && _ !== void 0 ? _ : "<failed to generate stacktrace>";
            (h.warn(`Current logger will be overwritten from ${S}`),
              f.warn(`Current logger will overwrite one already registered from ${S}`));
          }
          return fe.registerGlobal("diag", f, s, !0);
        };
      ((s.setLogger = n),
        (s.disable = () => {
          fe.unregisterGlobal(mC, s);
        }),
        (s.createComponentLogger = (r) => new Od.DiagComponentLogger(r)),
        (s.verbose = e("verbose")),
        (s.debug = e("debug")),
        (s.info = e("info")),
        (s.warn = e("warn")),
        (s.error = e("error")));
    }
    static instance() {
      if (!this._instance) this._instance = new Gn();
      return this._instance;
    }
  }
  Id.DiagAPI = Gn;
});
var Dd = x(function (Md) {
  Object.defineProperty(Md, "__esModule", { value: !0 });
  Md.BaggageImpl = void 0;
  class Ze {
    constructor(e) {
      this._entries = e ? new Map(e) : new Map();
    }
    getEntry(e) {
      let s = this._entries.get(e);
      if (!s) return;
      return Object.assign({}, s);
    }
    getAllEntries() {
      return Array.from(this._entries.entries()).map(([e, s]) => [e, s]);
    }
    setEntry(e, s) {
      let n = new Ze(this._entries);
      return (n._entries.set(e, s), n);
    }
    removeEntry(e) {
      let s = new Ze(this._entries);
      return (s._entries.delete(e), s);
    }
    removeEntries(...e) {
      let s = new Ze(this._entries);
      for (let n of e) s._entries.delete(n);
      return s;
    }
    clear() {
      return new Ze();
    }
  }
  Md.BaggageImpl = Ze;
});
var Vd = x(function (Ld) {
  Object.defineProperty(Ld, "__esModule", { value: !0 });
  Ld.baggageEntryMetadataSymbol = void 0;
  Ld.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
});
var Bn = x(function (Bd) {
  Object.defineProperty(Bd, "__esModule", { value: !0 });
  Bd.baggageEntryMetadataFromString = Bd.createBaggage = void 0;
  var jd = Pe(),
    qd = Dd(),
    Gd = Vd(),
    _C = jd.DiagAPI.instance();
  function gC(e = {}) {
    return new qd.BaggageImpl(new Map(Object.entries(e)));
  }
  Bd.createBaggage = gC;
  function fC(e) {
    if (typeof e !== "string")
      (_C.error(`Cannot create baggage metadata from unknown type: ${typeof e}`), (e = ""));
    return {
      __TYPE__: Gd.baggageEntryMetadataSymbol,
      toString() {
        return e;
      }
    };
  }
  Bd.baggageEntryMetadataFromString = fC;
});
var It = x(function (Hd) {
  Object.defineProperty(Hd, "__esModule", { value: !0 });
  Hd.ROOT_CONTEXT = Hd.createContextKey = void 0;
  function SC(e) {
    return Symbol.for(e);
  }
  Hd.createContextKey = SC;
  class Es {
    constructor(e) {
      let s = this;
      ((s._currentContext = e ? new Map(e) : new Map()),
        (s.getValue = (n) => s._currentContext.get(n)),
        (s.setValue = (n, r) => {
          let a = new Es(s._currentContext);
          return (a._currentContext.set(n, r), a);
        }),
        (s.deleteValue = (n) => {
          let r = new Es(s._currentContext);
          return (r._currentContext.delete(n), r);
        }));
    }
  }
  Hd.ROOT_CONTEXT = new Es();
});
var Qd = x(function ($d) {
  Object.defineProperty($d, "__esModule", { value: !0 });
  $d.DiagConsoleLogger = void 0;
  var Kn = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" }
  ];
  class Wd {
    constructor() {
      function e(s) {
        return function (...n) {
          if (console) {
            let r = console[s];
            if (typeof r !== "function") r = console.log;
            if (typeof r === "function") return r.apply(console, n);
          }
        };
      }
      for (let s = 0; s < Kn.length; s++) this[Kn[s].n] = e(Kn[s].c);
    }
  }
  $d.DiagConsoleLogger = Wd;
});
var Zn = x(function (Jd) {
  Object.defineProperty(Jd, "__esModule", { value: !0 });
  Jd.createNoopMeter =
    Jd.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
    Jd.NOOP_OBSERVABLE_GAUGE_METRIC =
    Jd.NOOP_OBSERVABLE_COUNTER_METRIC =
    Jd.NOOP_UP_DOWN_COUNTER_METRIC =
    Jd.NOOP_HISTOGRAM_METRIC =
    Jd.NOOP_GAUGE_METRIC =
    Jd.NOOP_COUNTER_METRIC =
    Jd.NOOP_METER =
    Jd.NoopObservableUpDownCounterMetric =
    Jd.NoopObservableGaugeMetric =
    Jd.NoopObservableCounterMetric =
    Jd.NoopObservableMetric =
    Jd.NoopHistogramMetric =
    Jd.NoopGaugeMetric =
    Jd.NoopUpDownCounterMetric =
    Jd.NoopCounterMetric =
    Jd.NoopMetric =
    Jd.NoopMeter =
      void 0;
  class Hn {
    constructor() {}
    createGauge(e, s) {
      return Jd.NOOP_GAUGE_METRIC;
    }
    createHistogram(e, s) {
      return Jd.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(e, s) {
      return Jd.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(e, s) {
      return Jd.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(e, s) {
      return Jd.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(e, s) {
      return Jd.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(e, s) {
      return Jd.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(e, s) {}
    removeBatchObservableCallback(e) {}
  }
  Jd.NoopMeter = Hn;
  class et {}
  Jd.NoopMetric = et;
  class Fn extends et {
    add(e, s) {}
  }
  Jd.NoopCounterMetric = Fn;
  class Wn extends et {
    add(e, s) {}
  }
  Jd.NoopUpDownCounterMetric = Wn;
  class Yn extends et {
    record(e, s) {}
  }
  Jd.NoopGaugeMetric = Yn;
  class $n extends et {
    record(e, s) {}
  }
  Jd.NoopHistogramMetric = $n;
  class Pt {
    addCallback(e) {}
    removeCallback(e) {}
  }
  Jd.NoopObservableMetric = Pt;
  class Xn extends Pt {}
  Jd.NoopObservableCounterMetric = Xn;
  class Qn extends Pt {}
  Jd.NoopObservableGaugeMetric = Qn;
  class Jn extends Pt {}
  Jd.NoopObservableUpDownCounterMetric = Jn;
  Jd.NOOP_METER = new Hn();
  Jd.NOOP_COUNTER_METRIC = new Fn();
  Jd.NOOP_GAUGE_METRIC = new Yn();
  Jd.NOOP_HISTOGRAM_METRIC = new $n();
  Jd.NOOP_UP_DOWN_COUNTER_METRIC = new Wn();
  Jd.NOOP_OBSERVABLE_COUNTER_METRIC = new Xn();
  Jd.NOOP_OBSERVABLE_GAUGE_METRIC = new Qn();
  Jd.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new Jn();
  function wC() {
    return Jd.NOOP_METER;
  }
  Jd.createNoopMeter = wC;
});
var dc = x(function (lc) {
  Object.defineProperty(lc, "__esModule", { value: !0 });
  lc.ValueType = void 0;
  var MC;
  (function (e) {
    ((e[(e.INT = 0)] = "INT"), (e[(e.DOUBLE = 1)] = "DOUBLE"));
  })((MC = lc.ValueType || (lc.ValueType = {})));
});
var tr = x(function (cc) {
  Object.defineProperty(cc, "__esModule", { value: !0 });
  cc.defaultTextMapSetter = cc.defaultTextMapGetter = void 0;
  cc.defaultTextMapGetter = {
    get(e, s) {
      if (e == null) return;
      return e[s];
    },
    keys(e) {
      if (e == null) return [];
      return Object.keys(e);
    }
  };
  cc.defaultTextMapSetter = {
    set(e, s, n) {
      if (e == null) return;
      e[s] = n;
    }
  };
});
var gc = x(function (mc) {
  Object.defineProperty(mc, "__esModule", { value: !0 });
  mc.NoopContextManager = void 0;
  var uc = It();
  class pc {
    active() {
      return uc.ROOT_CONTEXT;
    }
    with(e, s, n, ...r) {
      return s.call(n, ...r);
    }
    bind(e, s) {
      return s;
    }
    enable() {
      return this;
    }
    disable() {
      return this;
    }
  }
  mc.NoopContextManager = pc;
});
var Mt = x(function (bc) {
  Object.defineProperty(bc, "__esModule", { value: !0 });
  bc.ContextAPI = void 0;
  var fc = gc(),
    tt = Ie(),
    Ss = Pe(),
    sr = "context",
    DC = new fc.NoopContextManager();
  class nr {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new nr();
      return this._instance;
    }
    setGlobalContextManager(e) {
      return tt.registerGlobal(sr, e, Ss.DiagAPI.instance());
    }
    active() {
      return this._getContextManager().active();
    }
    with(e, s, n, ...r) {
      return this._getContextManager().with(e, s, n, ...r);
    }
    bind(e, s) {
      return this._getContextManager().bind(e, s);
    }
    _getContextManager() {
      return tt.getGlobal(sr) || DC;
    }
    disable() {
      (this._getContextManager().disable(), tt.unregisterGlobal(sr, Ss.DiagAPI.instance()));
    }
  }
  bc.ContextAPI = nr;
});
var or = x(function (Sc) {
  Object.defineProperty(Sc, "__esModule", { value: !0 });
  Sc.TraceFlags = void 0;
  var LC;
  (function (e) {
    ((e[(e.NONE = 0)] = "NONE"), (e[(e.SAMPLED = 1)] = "SAMPLED"));
  })((LC = Sc.TraceFlags || (Sc.TraceFlags = {})));
});
var Ts = x(function (wc) {
  Object.defineProperty(wc, "__esModule", { value: !0 });
  wc.INVALID_SPAN_CONTEXT = wc.INVALID_TRACEID = wc.INVALID_SPANID = void 0;
  var Tc = or();
  wc.INVALID_SPANID = "0000000000000000";
  wc.INVALID_TRACEID = "00000000000000000000000000000000";
  wc.INVALID_SPAN_CONTEXT = {
    traceId: wc.INVALID_TRACEID,
    spanId: wc.INVALID_SPANID,
    traceFlags: Tc.TraceFlags.NONE
  };
});
var ws = x(function (zc) {
  Object.defineProperty(zc, "__esModule", { value: !0 });
  zc.NonRecordingSpan = void 0;
  var vc = Ts();
  class kc {
    constructor(e = vc.INVALID_SPAN_CONTEXT) {
      this._spanContext = e;
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(e, s) {
      return this;
    }
    setAttributes(e) {
      return this;
    }
    addEvent(e, s) {
      return this;
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    setStatus(e) {
      return this;
    }
    updateName(e) {
      return this;
    }
    end(e) {}
    isRecording() {
      return !1;
    }
    recordException(e, s) {}
  }
  zc.NonRecordingSpan = kc;
});
var lr = x(function (Mc) {
  Object.defineProperty(Mc, "__esModule", { value: !0 });
  Mc.getSpanContext =
    Mc.setSpanContext =
    Mc.deleteSpan =
    Mc.setSpan =
    Mc.getActiveSpan =
    Mc.getSpan =
      void 0;
  var Oc = It(),
    Nc = ws(),
    Ic = Mt(),
    ar = Oc.createContextKey("OpenTelemetry Context Key SPAN");
  function ir(e) {
    return e.getValue(ar) || void 0;
  }
  Mc.getSpan = ir;
  function UC() {
    return ir(Ic.ContextAPI.getInstance().active());
  }
  Mc.getActiveSpan = UC;
  function Pc(e, s) {
    return e.setValue(ar, s);
  }
  Mc.setSpan = Pc;
  function VC(e) {
    return e.deleteValue(ar);
  }
  Mc.deleteSpan = VC;
  function jC(e, s) {
    return Pc(e, new Nc.NonRecordingSpan(s));
  }
  Mc.setSpanContext = jC;
  function qC(e) {
    var s;
    return (s = ir(e)) === null || s === void 0 ? void 0 : s.spanContext();
  }
  Mc.getSpanContext = qC;
});
var As = x(function (Vc) {
  Object.defineProperty(Vc, "__esModule", { value: !0 });
  Vc.wrapSpanContext = Vc.isSpanContextValid = Vc.isValidSpanId = Vc.isValidTraceId = void 0;
  var ys = Ts(),
    Dc = ws(),
    WC = /^([0-9a-f]{32})$/i,
    YC = /^[0-9a-f]{16}$/i;
  function Lc(e) {
    return WC.test(e) && e !== ys.INVALID_TRACEID;
  }
  Vc.isValidTraceId = Lc;
  function Uc(e) {
    return YC.test(e) && e !== ys.INVALID_SPANID;
  }
  Vc.isValidSpanId = Uc;
  function $C(e) {
    return Lc(e.traceId) && Uc(e.spanId);
  }
  Vc.isSpanContextValid = $C;
  function XC(e) {
    return new Dc.NonRecordingSpan(e);
  }
  Vc.wrapSpanContext = XC;
});
var cr = x(function (Kc) {
  Object.defineProperty(Kc, "__esModule", { value: !0 });
  Kc.NoopTracer = void 0;
  var qc = Mt(),
    Rs = lr(),
    st = ws(),
    Gc = As(),
    dr = qc.ContextAPI.getInstance();
  class Bc {
    startSpan(e, s, n = dr.active()) {
      if (Boolean(s === null || s === void 0 ? void 0 : s.root)) return new st.NonRecordingSpan();
      let a = n && Rs.getSpanContext(n);
      if (eO(a) && Gc.isSpanContextValid(a)) return new st.NonRecordingSpan(a);
      else return new st.NonRecordingSpan();
    }
    startActiveSpan(e, s, n, r) {
      let a, l, c;
      if (arguments.length < 2) return;
      else if (arguments.length === 2) c = s;
      else if (arguments.length === 3) ((a = s), (c = n));
      else ((a = s), (l = n), (c = r));
      let _ = l !== null && l !== void 0 ? l : dr.active(),
        h = this.startSpan(e, a, _),
        f = Rs.setSpan(_, h);
      return dr.with(f, c, void 0, h);
    }
  }
  Kc.NoopTracer = Bc;
  function eO(e) {
    return (
      typeof e === "object" &&
      typeof e.spanId === "string" &&
      typeof e.traceId === "string" &&
      typeof e.traceFlags === "number"
    );
  }
});
var hr = x(function (Yc) {
  Object.defineProperty(Yc, "__esModule", { value: !0 });
  Yc.ProxyTracer = void 0;
  var Fc = cr(),
    tO = new Fc.NoopTracer();
  class Wc {
    constructor(e, s, n, r) {
      ((this._provider = e), (this.name = s), (this.version = n), (this.options = r));
    }
    startSpan(e, s, n) {
      return this._getTracer().startSpan(e, s, n);
    }
    startActiveSpan(e, s, n, r) {
      let a = this._getTracer();
      return Reflect.apply(a.startActiveSpan, a, arguments);
    }
    _getTracer() {
      if (this._delegate) return this._delegate;
      let e = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!e) return tO;
      return ((this._delegate = e), this._delegate);
    }
  }
  Yc.ProxyTracer = Wc;
});
var eh = x(function (Jc) {
  Object.defineProperty(Jc, "__esModule", { value: !0 });
  Jc.NoopTracerProvider = void 0;
  var Xc = cr();
  class Qc {
    getTracer(e, s, n) {
      return new Xc.NoopTracer();
    }
  }
  Jc.NoopTracerProvider = Qc;
});
var ur = x(function (rh) {
  Object.defineProperty(rh, "__esModule", { value: !0 });
  rh.ProxyTracerProvider = void 0;
  var th = hr(),
    sh = eh(),
    sO = new sh.NoopTracerProvider();
  class nh {
    getTracer(e, s, n) {
      var r;
      return (r = this.getDelegateTracer(e, s, n)) !== null && r !== void 0
        ? r
        : new th.ProxyTracer(this, e, s, n);
    }
    getDelegate() {
      var e;
      return (e = this._delegate) !== null && e !== void 0 ? e : sO;
    }
    setDelegate(e) {
      this._delegate = e;
    }
    getDelegateTracer(e, s, n) {
      var r;
      return (r = this._delegate) === null || r === void 0 ? void 0 : r.getTracer(e, s, n);
    }
  }
  rh.ProxyTracerProvider = nh;
});
var ih = x(function (ah) {
  Object.defineProperty(ah, "__esModule", { value: !0 });
  ah.SamplingDecision = void 0;
  var nO;
  (function (e) {
    ((e[(e.NOT_RECORD = 0)] = "NOT_RECORD"),
      (e[(e.RECORD = 1)] = "RECORD"),
      (e[(e.RECORD_AND_SAMPLED = 2)] = "RECORD_AND_SAMPLED"));
  })((nO = ah.SamplingDecision || (ah.SamplingDecision = {})));
});
var dh = x(function (lh) {
  Object.defineProperty(lh, "__esModule", { value: !0 });
  lh.SpanKind = void 0;
  var rO;
  (function (e) {
    ((e[(e.INTERNAL = 0)] = "INTERNAL"),
      (e[(e.SERVER = 1)] = "SERVER"),
      (e[(e.CLIENT = 2)] = "CLIENT"),
      (e[(e.PRODUCER = 3)] = "PRODUCER"),
      (e[(e.CONSUMER = 4)] = "CONSUMER"));
  })((rO = lh.SpanKind || (lh.SpanKind = {})));
});
var hh = x(function (ch) {
  Object.defineProperty(ch, "__esModule", { value: !0 });
  ch.SpanStatusCode = void 0;
  var oO;
  (function (e) {
    ((e[(e.UNSET = 0)] = "UNSET"), (e[(e.OK = 1)] = "OK"), (e[(e.ERROR = 2)] = "ERROR"));
  })((oO = ch.SpanStatusCode || (ch.SpanStatusCode = {})));
});
var mh = x(function (uh) {
  Object.defineProperty(uh, "__esModule", { value: !0 });
  uh.validateValue = uh.validateKey = void 0;
  var gr = "[_0-9a-z-*/]",
    aO = `[a-z]${gr}{0,255}`,
    iO = `[a-z0-9]${gr}{0,240}@[a-z]${gr}{0,13}`,
    lO = new RegExp(`^(?:${aO}|${iO})$`),
    dO = /^[ -~]{0,255}[!-~]$/,
    cO = /,|=/;
  function hO(e) {
    return lO.test(e);
  }
  uh.validateKey = hO;
  function uO(e) {
    return dO.test(e) && !cO.test(e);
  }
  uh.validateValue = uO;
});
var Sh = x(function (bh) {
  Object.defineProperty(bh, "__esModule", { value: !0 });
  bh.TraceStateImpl = void 0;
  var vs = mh(),
    _h = 32,
    mO = 512,
    gh = ",",
    fh = "=";
  class fr {
    constructor(e) {
      if (((this._internalState = new Map()), e)) this._parse(e);
    }
    set(e, s) {
      let n = this._clone();
      if (n._internalState.has(e)) n._internalState.delete(e);
      return (n._internalState.set(e, s), n);
    }
    unset(e) {
      let s = this._clone();
      return (s._internalState.delete(e), s);
    }
    get(e) {
      return this._internalState.get(e);
    }
    serialize() {
      return this._keys()
        .reduce((e, s) => (e.push(s + fh + this.get(s)), e), [])
        .join(gh);
    }
    _parse(e) {
      if (e.length > mO) return;
      if (
        ((this._internalState = e
          .split(gh)
          .reverse()
          .reduce((s, n) => {
            let r = n.trim(),
              a = r.indexOf(fh);
            if (a !== -1) {
              let l = r.slice(0, a),
                c = r.slice(a + 1, n.length);
              if (vs.validateKey(l) && vs.validateValue(c)) s.set(l, c);
            }
            return s;
          }, new Map())),
        this._internalState.size > _h)
      )
        this._internalState = new Map(
          Array.from(this._internalState.entries()).reverse().slice(0, _h)
        );
    }
    _keys() {
      return Array.from(this._internalState.keys()).reverse();
    }
    _clone() {
      let e = new fr();
      return ((e._internalState = new Map(this._internalState)), e);
    }
  }
  bh.TraceStateImpl = fr;
});
var Ah = x(function (wh) {
  Object.defineProperty(wh, "__esModule", { value: !0 });
  wh.createTraceState = void 0;
  var Th = Sh();
  function _O(e) {
    return new Th.TraceStateImpl(e);
  }
  wh.createTraceState = _O;
});
var zh = x(function (vh) {
  Object.defineProperty(vh, "__esModule", { value: !0 });
  vh.context = void 0;
  var Rh = Mt();
  vh.context = Rh.ContextAPI.getInstance();
});
var Ih = x(function (Oh) {
  Object.defineProperty(Oh, "__esModule", { value: !0 });
  Oh.diag = void 0;
  var Ch = Pe();
  Oh.diag = Ch.DiagAPI.instance();
});
var Dh = x(function (Mh) {
  Object.defineProperty(Mh, "__esModule", { value: !0 });
  Mh.NOOP_METER_PROVIDER = Mh.NoopMeterProvider = void 0;
  var Ph = Zn();
  class br {
    getMeter(e, s, n) {
      return Ph.NOOP_METER;
    }
  }
  Mh.NoopMeterProvider = br;
  Mh.NOOP_METER_PROVIDER = new br();
});
var jh = x(function (Uh) {
  Object.defineProperty(Uh, "__esModule", { value: !0 });
  Uh.MetricsAPI = void 0;
  var Lh = Dh(),
    nt = Ie(),
    ks = Pe(),
    Er = "metrics";
  class Sr {
    constructor() {}
    static getInstance() {
      if (!this._instance) this._instance = new Sr();
      return this._instance;
    }
    setGlobalMeterProvider(e) {
      return nt.registerGlobal(Er, e, ks.DiagAPI.instance());
    }
    getMeterProvider() {
      return nt.getGlobal(Er) || Lh.NOOP_METER_PROVIDER;
    }
    getMeter(e, s, n) {
      return this.getMeterProvider().getMeter(e, s, n);
    }
    disable() {
      nt.unregisterGlobal(Er, ks.DiagAPI.instance());
    }
  }
  Uh.MetricsAPI = Sr;
});
var Kh = x(function (Gh) {
  Object.defineProperty(Gh, "__esModule", { value: !0 });
  Gh.metrics = void 0;
  var qh = jh();
  Gh.metrics = qh.MetricsAPI.getInstance();
});
var Yh = x(function (Fh) {
  Object.defineProperty(Fh, "__esModule", { value: !0 });
  Fh.NoopTextMapPropagator = void 0;
  class Hh {
    inject(e, s) {}
    extract(e, s) {
      return e;
    }
    fields() {
      return [];
    }
  }
  Fh.NoopTextMapPropagator = Hh;
});
var eu = x(function (Jh) {
  Object.defineProperty(Jh, "__esModule", { value: !0 });
  Jh.deleteBaggage = Jh.setBaggage = Jh.getActiveBaggage = Jh.getBaggage = void 0;
  var $h = Mt(),
    Xh = It(),
    Tr = Xh.createContextKey("OpenTelemetry Baggage Key");
  function Qh(e) {
    return e.getValue(Tr) || void 0;
  }
  Jh.getBaggage = Qh;
  function fO() {
    return Qh($h.ContextAPI.getInstance().active());
  }
  Jh.getActiveBaggage = fO;
  function bO(e, s) {
    return e.setValue(Tr, s);
  }
  Jh.setBaggage = bO;
  function EO(e) {
    return e.deleteValue(Tr);
  }
  Jh.deleteBaggage = EO;
});
var ou = x(function (nu) {
  Object.defineProperty(nu, "__esModule", { value: !0 });
  nu.PropagationAPI = void 0;
  var rt = Ie(),
    tu = Yh(),
    zs = tr(),
    be = eu(),
    su = Bn(),
    Cs = Pe(),
    wr = "propagation",
    yO = new tu.NoopTextMapPropagator();
  class yr {
    constructor() {
      ((this.createBaggage = su.createBaggage),
        (this.getBaggage = be.getBaggage),
        (this.getActiveBaggage = be.getActiveBaggage),
        (this.setBaggage = be.setBaggage),
        (this.deleteBaggage = be.deleteBaggage));
    }
    static getInstance() {
      if (!this._instance) this._instance = new yr();
      return this._instance;
    }
    setGlobalPropagator(e) {
      return rt.registerGlobal(wr, e, Cs.DiagAPI.instance());
    }
    inject(e, s, n = zs.defaultTextMapSetter) {
      return this._getGlobalPropagator().inject(e, s, n);
    }
    extract(e, s, n = zs.defaultTextMapGetter) {
      return this._getGlobalPropagator().extract(e, s, n);
    }
    fields() {
      return this._getGlobalPropagator().fields();
    }
    disable() {
      rt.unregisterGlobal(wr, Cs.DiagAPI.instance());
    }
    _getGlobalPropagator() {
      return rt.getGlobal(wr) || yO;
    }
  }
  nu.PropagationAPI = yr;
});
var du = x(function (iu) {
  Object.defineProperty(iu, "__esModule", { value: !0 });
  iu.propagation = void 0;
  var au = ou();
  iu.propagation = au.PropagationAPI.getInstance();
});
var uu = x(function (cu) {
  Object.defineProperty(cu, "__esModule", { value: !0 });
  cu.TraceAPI = void 0;
  var ot = Ie(),
    Os = ur(),
    Ns = As(),
    se = lr(),
    Is = Pe(),
    Ar = "trace";
  class Rr {
    constructor() {
      ((this._proxyTracerProvider = new Os.ProxyTracerProvider()),
        (this.wrapSpanContext = Ns.wrapSpanContext),
        (this.isSpanContextValid = Ns.isSpanContextValid),
        (this.deleteSpan = se.deleteSpan),
        (this.getSpan = se.getSpan),
        (this.getActiveSpan = se.getActiveSpan),
        (this.getSpanContext = se.getSpanContext),
        (this.setSpan = se.setSpan),
        (this.setSpanContext = se.setSpanContext));
    }
    static getInstance() {
      if (!this._instance) this._instance = new Rr();
      return this._instance;
    }
    setGlobalTracerProvider(e) {
      let s = ot.registerGlobal(Ar, this._proxyTracerProvider, Is.DiagAPI.instance());
      if (s) this._proxyTracerProvider.setDelegate(e);
      return s;
    }
    getTracerProvider() {
      return ot.getGlobal(Ar) || this._proxyTracerProvider;
    }
    getTracer(e, s) {
      return this.getTracerProvider().getTracer(e, s);
    }
    disable() {
      (ot.unregisterGlobal(Ar, Is.DiagAPI.instance()),
        (this._proxyTracerProvider = new Os.ProxyTracerProvider()));
    }
  }
  cu.TraceAPI = Rr;
});
var gu = x(function (mu) {
  Object.defineProperty(mu, "__esModule", { value: !0 });
  mu.trace = void 0;
  var pu = uu();
  mu.trace = pu.TraceAPI.getInstance();
});
var fl = x(function (O) {
  Object.defineProperty(O, "__esModule", { value: !0 });
  O.trace =
    O.propagation =
    O.metrics =
    O.diag =
    O.context =
    O.INVALID_SPAN_CONTEXT =
    O.INVALID_TRACEID =
    O.INVALID_SPANID =
    O.isValidSpanId =
    O.isValidTraceId =
    O.isSpanContextValid =
    O.createTraceState =
    O.TraceFlags =
    O.SpanStatusCode =
    O.SpanKind =
    O.SamplingDecision =
    O.ProxyTracerProvider =
    O.ProxyTracer =
    O.defaultTextMapSetter =
    O.defaultTextMapGetter =
    O.ValueType =
    O.createNoopMeter =
    O.DiagLogLevel =
    O.DiagConsoleLogger =
    O.ROOT_CONTEXT =
    O.createContextKey =
    O.baggageEntryMetadataFromString =
      void 0;
  var AO = Bn();
  Object.defineProperty(O, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function () {
      return AO.baggageEntryMetadataFromString;
    }
  });
  var fu = It();
  Object.defineProperty(O, "createContextKey", {
    enumerable: !0,
    get: function () {
      return fu.createContextKey;
    }
  });
  Object.defineProperty(O, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function () {
      return fu.ROOT_CONTEXT;
    }
  });
  var RO = Qd();
  Object.defineProperty(O, "DiagConsoleLogger", {
    enumerable: !0,
    get: function () {
      return RO.DiagConsoleLogger;
    }
  });
  var vO = fs();
  Object.defineProperty(O, "DiagLogLevel", {
    enumerable: !0,
    get: function () {
      return vO.DiagLogLevel;
    }
  });
  var kO = Zn();
  Object.defineProperty(O, "createNoopMeter", {
    enumerable: !0,
    get: function () {
      return kO.createNoopMeter;
    }
  });
  var zO = dc();
  Object.defineProperty(O, "ValueType", {
    enumerable: !0,
    get: function () {
      return zO.ValueType;
    }
  });
  var bu = tr();
  Object.defineProperty(O, "defaultTextMapGetter", {
    enumerable: !0,
    get: function () {
      return bu.defaultTextMapGetter;
    }
  });
  Object.defineProperty(O, "defaultTextMapSetter", {
    enumerable: !0,
    get: function () {
      return bu.defaultTextMapSetter;
    }
  });
  var CO = hr();
  Object.defineProperty(O, "ProxyTracer", {
    enumerable: !0,
    get: function () {
      return CO.ProxyTracer;
    }
  });
  var OO = ur();
  Object.defineProperty(O, "ProxyTracerProvider", {
    enumerable: !0,
    get: function () {
      return OO.ProxyTracerProvider;
    }
  });
  var NO = ih();
  Object.defineProperty(O, "SamplingDecision", {
    enumerable: !0,
    get: function () {
      return NO.SamplingDecision;
    }
  });
  var IO = dh();
  Object.defineProperty(O, "SpanKind", {
    enumerable: !0,
    get: function () {
      return IO.SpanKind;
    }
  });
  var PO = hh();
  Object.defineProperty(O, "SpanStatusCode", {
    enumerable: !0,
    get: function () {
      return PO.SpanStatusCode;
    }
  });
  var MO = or();
  Object.defineProperty(O, "TraceFlags", {
    enumerable: !0,
    get: function () {
      return MO.TraceFlags;
    }
  });
  var xO = Ah();
  Object.defineProperty(O, "createTraceState", {
    enumerable: !0,
    get: function () {
      return xO.createTraceState;
    }
  });
  var vr = As();
  Object.defineProperty(O, "isSpanContextValid", {
    enumerable: !0,
    get: function () {
      return vr.isSpanContextValid;
    }
  });
  Object.defineProperty(O, "isValidTraceId", {
    enumerable: !0,
    get: function () {
      return vr.isValidTraceId;
    }
  });
  Object.defineProperty(O, "isValidSpanId", {
    enumerable: !0,
    get: function () {
      return vr.isValidSpanId;
    }
  });
  var kr = Ts();
  Object.defineProperty(O, "INVALID_SPANID", {
    enumerable: !0,
    get: function () {
      return kr.INVALID_SPANID;
    }
  });
  Object.defineProperty(O, "INVALID_TRACEID", {
    enumerable: !0,
    get: function () {
      return kr.INVALID_TRACEID;
    }
  });
  Object.defineProperty(O, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function () {
      return kr.INVALID_SPAN_CONTEXT;
    }
  });
  var Ps = zh();
  Object.defineProperty(O, "context", {
    enumerable: !0,
    get: function () {
      return Ps.context;
    }
  });
  var Ms = Ih();
  Object.defineProperty(O, "diag", {
    enumerable: !0,
    get: function () {
      return Ms.diag;
    }
  });
  var xs = Kh();
  Object.defineProperty(O, "metrics", {
    enumerable: !0,
    get: function () {
      return xs.metrics;
    }
  });
  var Ds = du();
  Object.defineProperty(O, "propagation", {
    enumerable: !0,
    get: function () {
      return Ds.propagation;
    }
  });
  var Us = gu();
  Object.defineProperty(O, "trace", {
    enumerable: !0,
    get: function () {
      return Us.trace;
    }
  });
  O.default = {
    context: Ps.context,
    diag: Ms.diag,
    metrics: xs.metrics,
    propagation: Ds.propagation,
    trace: Us.trace
  };
});
var xt = x(function (Su) {
  Object.defineProperty(Su, "__esModule", { value: !0 });
  Su.isTracingSuppressed = Su.unsuppressTracing = Su.suppressTracing = void 0;
  var Eu = fl(),
    zr = Eu.createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function UO(e) {
    return e.setValue(zr, !0);
  }
  Su.suppressTracing = UO;
  function VO(e) {
    return e.deleteValue(zr);
  }
  Su.unsuppressTracing = VO;
  function jO(e) {
    return e.getValue(zr) === !0;
  }
  Su.isTracingSuppressed = jO;
});
var Cr = x(function (wu) {
  Object.defineProperty(wu, "__esModule", { value: !0 });
  wu.BAGGAGE_MAX_TOTAL_LENGTH =
    wu.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS =
    wu.BAGGAGE_MAX_NAME_VALUE_PAIRS =
    wu.BAGGAGE_HEADER =
    wu.BAGGAGE_ITEMS_SEPARATOR =
    wu.BAGGAGE_PROPERTIES_SEPARATOR =
    wu.BAGGAGE_KEY_PAIR_SEPARATOR =
      void 0;
  wu.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
  wu.BAGGAGE_PROPERTIES_SEPARATOR = ";";
  wu.BAGGAGE_ITEMS_SEPARATOR = ",";
  wu.BAGGAGE_HEADER = "baggage";
  wu.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
  wu.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
  wu.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});
var Or = x(function (vu) {
  Object.defineProperty(vu, "__esModule", { value: !0 });
  vu.parseKeyPairsIntoRecord =
    vu.parsePairKeyValue =
    vu.getKeyPairs =
    vu.serializeKeyPairs =
      void 0;
  var Au = fl(),
    ne = Cr();
  function $O(e) {
    return e.reduce((s, n) => {
      let r = `${s}${s !== "" ? ne.BAGGAGE_ITEMS_SEPARATOR : ""}${n}`;
      return r.length > ne.BAGGAGE_MAX_TOTAL_LENGTH ? s : r;
    }, "");
  }
  vu.serializeKeyPairs = $O;
  function XO(e) {
    return e.getAllEntries().map(([s, n]) => {
      let r = `${encodeURIComponent(s)}=${encodeURIComponent(n.value)}`;
      if (n.metadata !== void 0) r += ne.BAGGAGE_PROPERTIES_SEPARATOR + n.metadata.toString();
      return r;
    });
  }
  vu.getKeyPairs = XO;
  function Ru(e) {
    if (!e) return;
    let s = e.indexOf(ne.BAGGAGE_PROPERTIES_SEPARATOR),
      n = s === -1 ? e : e.substring(0, s),
      r = n.indexOf(ne.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (r <= 0) return;
    let a = n.substring(0, r).trim(),
      l = n.substring(r + 1).trim();
    if (!a || !l) return;
    let c, _;
    try {
      ((c = decodeURIComponent(a)), (_ = decodeURIComponent(l)));
    } catch {
      return;
    }
    let h;
    if (s !== -1 && s < e.length - 1) {
      let f = e.substring(s + 1);
      h = Au.baggageEntryMetadataFromString(f);
    }
    return { key: c, value: _, metadata: h };
  }
  vu.parsePairKeyValue = Ru;
  function QO(e) {
    let s = {};
    if (typeof e === "string" && e.length > 0)
      e.split(ne.BAGGAGE_ITEMS_SEPARATOR).forEach((n) => {
        let r = Ru(n);
        if (r !== void 0 && r.value.length > 0) s[r.key] = r.value;
      });
    return s;
  }
  vu.parseKeyPairsIntoRecord = QO;
});
var Iu = x(function (Ou) {
  Object.defineProperty(Ou, "__esModule", { value: !0 });
  Ou.W3CBaggagePropagator = void 0;
  var it = fl(),
    zu = xt(),
    X = Cr(),
    lt = Or();
  class Cu {
    inject(e, s, n) {
      let r = it.propagation.getBaggage(e);
      if (!r || zu.isTracingSuppressed(e)) return;
      let a = lt
          .getKeyPairs(r)
          .filter((c) => c.length <= X.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS)
          .slice(0, X.BAGGAGE_MAX_NAME_VALUE_PAIRS),
        l = lt.serializeKeyPairs(a);
      if (l.length > 0) n.set(s, X.BAGGAGE_HEADER, l);
    }
    extract(e, s, n) {
      let r = n.get(s, X.BAGGAGE_HEADER),
        a = Array.isArray(r) ? r.join(X.BAGGAGE_ITEMS_SEPARATOR) : r;
      if (!a) return e;
      let l = {};
      if (a.length === 0) return e;
      if (
        (a.split(X.BAGGAGE_ITEMS_SEPARATOR).forEach((_) => {
          let h = lt.parsePairKeyValue(_);
          if (h) {
            let f = { value: h.value };
            if (h.metadata) f.metadata = h.metadata;
            l[h.key] = f;
          }
        }),
        Object.entries(l).length === 0)
      )
        return e;
      return it.propagation.setBaggage(e, it.propagation.createBaggage(l));
    }
    fields() {
      return [X.BAGGAGE_HEADER];
    }
  }
  Ou.W3CBaggagePropagator = Cu;
});
var Du = x(function (Mu) {
  Object.defineProperty(Mu, "__esModule", { value: !0 });
  Mu.AnchoredClock = void 0;
  class Pu {
    _monotonicClock;
    _epochMillis;
    _performanceMillis;
    constructor(e, s) {
      ((this._monotonicClock = s),
        (this._epochMillis = e.now()),
        (this._performanceMillis = s.now()));
    }
    now() {
      let e = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + e;
    }
  }
  Mu.AnchoredClock = Pu;
});
var Ku = x(function (qu) {
  Object.defineProperty(qu, "__esModule", { value: !0 });
  qu.isAttributeValue = qu.isAttributeKey = qu.sanitizeAttributes = void 0;
  var Vs = fl();
  function tN(e) {
    let s = {};
    if (typeof e !== "object" || e == null) return s;
    for (let n in e) {
      if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
      if (!Lu(n)) {
        Vs.diag.warn(`Invalid attribute key: ${n}`);
        continue;
      }
      let r = e[n];
      if (!Uu(r)) {
        Vs.diag.warn(`Invalid attribute value set for key: ${n}`);
        continue;
      }
      if (Array.isArray(r)) s[n] = r.slice();
      else s[n] = r;
    }
    return s;
  }
  qu.sanitizeAttributes = tN;
  function Lu(e) {
    return typeof e === "string" && e !== "";
  }
  qu.isAttributeKey = Lu;
  function Uu(e) {
    if (e == null) return !0;
    if (Array.isArray(e)) return sN(e);
    return Vu(typeof e);
  }
  qu.isAttributeValue = Uu;
  function sN(e) {
    let s;
    for (let n of e) {
      if (n == null) continue;
      let r = typeof n;
      if (r === s) continue;
      if (!s) {
        if (Vu(r)) {
          s = r;
          continue;
        }
        return !1;
      }
      return !1;
    }
    return !0;
  }
  function Vu(e) {
    switch (e) {
      case "number":
      case "boolean":
      case "string":
        return !0;
    }
    return !1;
  }
});
var Nr = x(function (Fu) {
  Object.defineProperty(Fu, "__esModule", { value: !0 });
  Fu.loggingErrorHandler = void 0;
  var Hu = fl();
  function oN() {
    return (e) => {
      Hu.diag.error(aN(e));
    };
  }
  Fu.loggingErrorHandler = oN;
  function aN(e) {
    if (typeof e === "string") return e;
    else return JSON.stringify(iN(e));
  }
  function iN(e) {
    let s = {},
      n = e;
    while (n !== null)
      (Object.getOwnPropertyNames(n).forEach((r) => {
        if (s[r]) return;
        let a = n[r];
        if (a) s[r] = String(a);
      }),
        (n = Object.getPrototypeOf(n)));
    return s;
  }
});
var Ju = x(function (Xu) {
  Object.defineProperty(Xu, "__esModule", { value: !0 });
  Xu.globalErrorHandler = Xu.setGlobalErrorHandler = void 0;
  var Yu = Nr(),
    $u = Yu.loggingErrorHandler();
  function lN(e) {
    $u = e;
  }
  Xu.setGlobalErrorHandler = lN;
  function dN(e) {
    try {
      $u(e);
    } catch {}
  }
  Xu.globalErrorHandler = dN;
});
var sp = x(function (ep) {
  Object.defineProperty(ep, "__esModule", { value: !0 });
  ep.getStringListFromEnv =
    ep.getBooleanFromEnv =
    ep.getStringFromEnv =
    ep.getNumberFromEnv =
      void 0;
  var js = fl(),
    qs = Fe("util");
  function hN(e) {
    let s = process.env[e];
    if (s == null || s.trim() === "") return;
    let n = Number(s);
    if (isNaN(n)) {
      js.diag.warn(`Unknown value ${qs.inspect(s)} for ${e}, expected a number, using defaults`);
      return;
    }
    return n;
  }
  ep.getNumberFromEnv = hN;
  function Zu(e) {
    let s = process.env[e];
    if (s == null || s.trim() === "") return;
    return s;
  }
  ep.getStringFromEnv = Zu;
  function uN(e) {
    let s = process.env[e]?.trim().toLowerCase();
    if (s == null || s === "") return !1;
    if (s === "true") return !0;
    else if (s === "false") return !1;
    else
      return (
        js.diag.warn(
          `Unknown value ${qs.inspect(s)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`
        ),
        !1
      );
  }
  ep.getBooleanFromEnv = uN;
  function pN(e) {
    return Zu(e)
      ?.split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");
  }
  ep.getStringListFromEnv = pN;
});
var op = x(function (np) {
  Object.defineProperty(np, "__esModule", { value: !0 });
  np._globalThis = void 0;
  np._globalThis = globalThis;
});
var lp = x(function (ap) {
  Object.defineProperty(ap, "__esModule", { value: !0 });
  ap.VERSION = void 0;
  ap.VERSION = "2.7.1";
});
var Ir = x(function (dp) {
  Object.defineProperty(dp, "__esModule", { value: !0 });
  dp.createConstMap = void 0;
  function fN(e) {
    let s = {},
      n = e.length;
    for (let r = 0; r < n; r++) {
      let a = e[r];
      if (a) s[String(a).toUpperCase().replace(/[-.]/g, "_")] = a;
    }
    return s;
  }
  dp.createConstMap = fN;
});
var _b = x(function (lb) {
  Object.defineProperty(lb, "__esModule", { value: !0 });
  lb.SEMATTRS_NET_HOST_CARRIER_ICC =
    lb.SEMATTRS_NET_HOST_CARRIER_MNC =
    lb.SEMATTRS_NET_HOST_CARRIER_MCC =
    lb.SEMATTRS_NET_HOST_CARRIER_NAME =
    lb.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE =
    lb.SEMATTRS_NET_HOST_CONNECTION_TYPE =
    lb.SEMATTRS_NET_HOST_NAME =
    lb.SEMATTRS_NET_HOST_PORT =
    lb.SEMATTRS_NET_HOST_IP =
    lb.SEMATTRS_NET_PEER_NAME =
    lb.SEMATTRS_NET_PEER_PORT =
    lb.SEMATTRS_NET_PEER_IP =
    lb.SEMATTRS_NET_TRANSPORT =
    lb.SEMATTRS_FAAS_INVOKED_REGION =
    lb.SEMATTRS_FAAS_INVOKED_PROVIDER =
    lb.SEMATTRS_FAAS_INVOKED_NAME =
    lb.SEMATTRS_FAAS_COLDSTART =
    lb.SEMATTRS_FAAS_CRON =
    lb.SEMATTRS_FAAS_TIME =
    lb.SEMATTRS_FAAS_DOCUMENT_NAME =
    lb.SEMATTRS_FAAS_DOCUMENT_TIME =
    lb.SEMATTRS_FAAS_DOCUMENT_OPERATION =
    lb.SEMATTRS_FAAS_DOCUMENT_COLLECTION =
    lb.SEMATTRS_FAAS_EXECUTION =
    lb.SEMATTRS_FAAS_TRIGGER =
    lb.SEMATTRS_EXCEPTION_ESCAPED =
    lb.SEMATTRS_EXCEPTION_STACKTRACE =
    lb.SEMATTRS_EXCEPTION_MESSAGE =
    lb.SEMATTRS_EXCEPTION_TYPE =
    lb.SEMATTRS_DB_SQL_TABLE =
    lb.SEMATTRS_DB_MONGODB_COLLECTION =
    lb.SEMATTRS_DB_REDIS_DATABASE_INDEX =
    lb.SEMATTRS_DB_HBASE_NAMESPACE =
    lb.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC =
    lb.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID =
    lb.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT =
    lb.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE =
    lb.SEMATTRS_DB_CASSANDRA_TABLE =
    lb.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL =
    lb.SEMATTRS_DB_CASSANDRA_PAGE_SIZE =
    lb.SEMATTRS_DB_CASSANDRA_KEYSPACE =
    lb.SEMATTRS_DB_MSSQL_INSTANCE_NAME =
    lb.SEMATTRS_DB_OPERATION =
    lb.SEMATTRS_DB_STATEMENT =
    lb.SEMATTRS_DB_NAME =
    lb.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME =
    lb.SEMATTRS_DB_USER =
    lb.SEMATTRS_DB_CONNECTION_STRING =
    lb.SEMATTRS_DB_SYSTEM =
    lb.SEMATTRS_AWS_LAMBDA_INVOKED_ARN =
      void 0;
  lb.SEMATTRS_MESSAGING_DESTINATION_KIND =
    lb.SEMATTRS_MESSAGING_DESTINATION =
    lb.SEMATTRS_MESSAGING_SYSTEM =
    lb.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES =
    lb.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS =
    lb.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT =
    lb.SEMATTRS_AWS_DYNAMODB_COUNT =
    lb.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS =
    lb.SEMATTRS_AWS_DYNAMODB_SEGMENT =
    lb.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD =
    lb.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT =
    lb.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE =
    lb.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES =
    lb.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES =
    lb.SEMATTRS_AWS_DYNAMODB_SELECT =
    lb.SEMATTRS_AWS_DYNAMODB_INDEX_NAME =
    lb.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET =
    lb.SEMATTRS_AWS_DYNAMODB_LIMIT =
    lb.SEMATTRS_AWS_DYNAMODB_PROJECTION =
    lb.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ =
    lb.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY =
    lb.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY =
    lb.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS =
    lb.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY =
    lb.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES =
    lb.SEMATTRS_HTTP_CLIENT_IP =
    lb.SEMATTRS_HTTP_ROUTE =
    lb.SEMATTRS_HTTP_SERVER_NAME =
    lb.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED =
    lb.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH =
    lb.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED =
    lb.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH =
    lb.SEMATTRS_HTTP_USER_AGENT =
    lb.SEMATTRS_HTTP_FLAVOR =
    lb.SEMATTRS_HTTP_STATUS_CODE =
    lb.SEMATTRS_HTTP_SCHEME =
    lb.SEMATTRS_HTTP_HOST =
    lb.SEMATTRS_HTTP_TARGET =
    lb.SEMATTRS_HTTP_URL =
    lb.SEMATTRS_HTTP_METHOD =
    lb.SEMATTRS_CODE_LINENO =
    lb.SEMATTRS_CODE_FILEPATH =
    lb.SEMATTRS_CODE_NAMESPACE =
    lb.SEMATTRS_CODE_FUNCTION =
    lb.SEMATTRS_THREAD_NAME =
    lb.SEMATTRS_THREAD_ID =
    lb.SEMATTRS_ENDUSER_SCOPE =
    lb.SEMATTRS_ENDUSER_ROLE =
    lb.SEMATTRS_ENDUSER_ID =
    lb.SEMATTRS_PEER_SERVICE =
      void 0;
  lb.DBSYSTEMVALUES_FILEMAKER =
    lb.DBSYSTEMVALUES_DERBY =
    lb.DBSYSTEMVALUES_FIREBIRD =
    lb.DBSYSTEMVALUES_ADABAS =
    lb.DBSYSTEMVALUES_CACHE =
    lb.DBSYSTEMVALUES_EDB =
    lb.DBSYSTEMVALUES_FIRSTSQL =
    lb.DBSYSTEMVALUES_INGRES =
    lb.DBSYSTEMVALUES_HANADB =
    lb.DBSYSTEMVALUES_MAXDB =
    lb.DBSYSTEMVALUES_PROGRESS =
    lb.DBSYSTEMVALUES_HSQLDB =
    lb.DBSYSTEMVALUES_CLOUDSCAPE =
    lb.DBSYSTEMVALUES_HIVE =
    lb.DBSYSTEMVALUES_REDSHIFT =
    lb.DBSYSTEMVALUES_POSTGRESQL =
    lb.DBSYSTEMVALUES_DB2 =
    lb.DBSYSTEMVALUES_ORACLE =
    lb.DBSYSTEMVALUES_MYSQL =
    lb.DBSYSTEMVALUES_MSSQL =
    lb.DBSYSTEMVALUES_OTHER_SQL =
    lb.SemanticAttributes =
    lb.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE =
    lb.SEMATTRS_MESSAGE_COMPRESSED_SIZE =
    lb.SEMATTRS_MESSAGE_ID =
    lb.SEMATTRS_MESSAGE_TYPE =
    lb.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE =
    lb.SEMATTRS_RPC_JSONRPC_ERROR_CODE =
    lb.SEMATTRS_RPC_JSONRPC_REQUEST_ID =
    lb.SEMATTRS_RPC_JSONRPC_VERSION =
    lb.SEMATTRS_RPC_GRPC_STATUS_CODE =
    lb.SEMATTRS_RPC_METHOD =
    lb.SEMATTRS_RPC_SERVICE =
    lb.SEMATTRS_RPC_SYSTEM =
    lb.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE =
    lb.SEMATTRS_MESSAGING_KAFKA_PARTITION =
    lb.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID =
    lb.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP =
    lb.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY =
    lb.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY =
    lb.SEMATTRS_MESSAGING_CONSUMER_ID =
    lb.SEMATTRS_MESSAGING_OPERATION =
    lb.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES =
    lb.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES =
    lb.SEMATTRS_MESSAGING_CONVERSATION_ID =
    lb.SEMATTRS_MESSAGING_MESSAGE_ID =
    lb.SEMATTRS_MESSAGING_URL =
    lb.SEMATTRS_MESSAGING_PROTOCOL_VERSION =
    lb.SEMATTRS_MESSAGING_PROTOCOL =
    lb.SEMATTRS_MESSAGING_TEMP_DESTINATION =
      void 0;
  lb.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD =
    lb.FaasDocumentOperationValues =
    lb.FAASDOCUMENTOPERATIONVALUES_DELETE =
    lb.FAASDOCUMENTOPERATIONVALUES_EDIT =
    lb.FAASDOCUMENTOPERATIONVALUES_INSERT =
    lb.FaasTriggerValues =
    lb.FAASTRIGGERVALUES_OTHER =
    lb.FAASTRIGGERVALUES_TIMER =
    lb.FAASTRIGGERVALUES_PUBSUB =
    lb.FAASTRIGGERVALUES_HTTP =
    lb.FAASTRIGGERVALUES_DATASOURCE =
    lb.DbCassandraConsistencyLevelValues =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_ANY =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_THREE =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_TWO =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_ONE =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM =
    lb.DBCASSANDRACONSISTENCYLEVELVALUES_ALL =
    lb.DbSystemValues =
    lb.DBSYSTEMVALUES_COCKROACHDB =
    lb.DBSYSTEMVALUES_MEMCACHED =
    lb.DBSYSTEMVALUES_ELASTICSEARCH =
    lb.DBSYSTEMVALUES_GEODE =
    lb.DBSYSTEMVALUES_NEO4J =
    lb.DBSYSTEMVALUES_DYNAMODB =
    lb.DBSYSTEMVALUES_COSMOSDB =
    lb.DBSYSTEMVALUES_COUCHDB =
    lb.DBSYSTEMVALUES_COUCHBASE =
    lb.DBSYSTEMVALUES_REDIS =
    lb.DBSYSTEMVALUES_MONGODB =
    lb.DBSYSTEMVALUES_HBASE =
    lb.DBSYSTEMVALUES_CASSANDRA =
    lb.DBSYSTEMVALUES_COLDFUSION =
    lb.DBSYSTEMVALUES_H2 =
    lb.DBSYSTEMVALUES_VERTICA =
    lb.DBSYSTEMVALUES_TERADATA =
    lb.DBSYSTEMVALUES_SYBASE =
    lb.DBSYSTEMVALUES_SQLITE =
    lb.DBSYSTEMVALUES_POINTBASE =
    lb.DBSYSTEMVALUES_PERVASIVE =
    lb.DBSYSTEMVALUES_NETEZZA =
    lb.DBSYSTEMVALUES_MARIADB =
    lb.DBSYSTEMVALUES_INTERBASE =
    lb.DBSYSTEMVALUES_INSTANTDB =
    lb.DBSYSTEMVALUES_INFORMIX =
      void 0;
  lb.MESSAGINGOPERATIONVALUES_RECEIVE =
    lb.MessagingDestinationKindValues =
    lb.MESSAGINGDESTINATIONKINDVALUES_TOPIC =
    lb.MESSAGINGDESTINATIONKINDVALUES_QUEUE =
    lb.HttpFlavorValues =
    lb.HTTPFLAVORVALUES_QUIC =
    lb.HTTPFLAVORVALUES_SPDY =
    lb.HTTPFLAVORVALUES_HTTP_2_0 =
    lb.HTTPFLAVORVALUES_HTTP_1_1 =
    lb.HTTPFLAVORVALUES_HTTP_1_0 =
    lb.NetHostConnectionSubtypeValues =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_NR =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_GSM =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_LTE =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE =
    lb.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS =
    lb.NetHostConnectionTypeValues =
    lb.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN =
    lb.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE =
    lb.NETHOSTCONNECTIONTYPEVALUES_CELL =
    lb.NETHOSTCONNECTIONTYPEVALUES_WIRED =
    lb.NETHOSTCONNECTIONTYPEVALUES_WIFI =
    lb.NetTransportValues =
    lb.NETTRANSPORTVALUES_OTHER =
    lb.NETTRANSPORTVALUES_INPROC =
    lb.NETTRANSPORTVALUES_PIPE =
    lb.NETTRANSPORTVALUES_UNIX =
    lb.NETTRANSPORTVALUES_IP =
    lb.NETTRANSPORTVALUES_IP_UDP =
    lb.NETTRANSPORTVALUES_IP_TCP =
    lb.FaasInvokedProviderValues =
    lb.FAASINVOKEDPROVIDERVALUES_GCP =
    lb.FAASINVOKEDPROVIDERVALUES_AZURE =
    lb.FAASINVOKEDPROVIDERVALUES_AWS =
      void 0;
  lb.MessageTypeValues =
    lb.MESSAGETYPEVALUES_RECEIVED =
    lb.MESSAGETYPEVALUES_SENT =
    lb.RpcGrpcStatusCodeValues =
    lb.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED =
    lb.RPCGRPCSTATUSCODEVALUES_DATA_LOSS =
    lb.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE =
    lb.RPCGRPCSTATUSCODEVALUES_INTERNAL =
    lb.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED =
    lb.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE =
    lb.RPCGRPCSTATUSCODEVALUES_ABORTED =
    lb.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION =
    lb.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED =
    lb.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED =
    lb.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS =
    lb.RPCGRPCSTATUSCODEVALUES_NOT_FOUND =
    lb.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED =
    lb.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT =
    lb.RPCGRPCSTATUSCODEVALUES_UNKNOWN =
    lb.RPCGRPCSTATUSCODEVALUES_CANCELLED =
    lb.RPCGRPCSTATUSCODEVALUES_OK =
    lb.MessagingOperationValues =
    lb.MESSAGINGOPERATIONVALUES_PROCESS =
      void 0;
  var P = Ir(),
    hp = "aws.lambda.invoked_arn",
    up = "db.system",
    pp = "db.connection_string",
    mp = "db.user",
    _p = "db.jdbc.driver_classname",
    gp = "db.name",
    fp = "db.statement",
    bp = "db.operation",
    Ep = "db.mssql.instance_name",
    Sp = "db.cassandra.keyspace",
    Tp = "db.cassandra.page_size",
    wp = "db.cassandra.consistency_level",
    yp = "db.cassandra.table",
    Ap = "db.cassandra.idempotence",
    Rp = "db.cassandra.speculative_execution_count",
    vp = "db.cassandra.coordinator.id",
    kp = "db.cassandra.coordinator.dc",
    zp = "db.hbase.namespace",
    Cp = "db.redis.database_index",
    Op = "db.mongodb.collection",
    Np = "db.sql.table",
    Ip = "exception.type",
    Pp = "exception.message",
    Mp = "exception.stacktrace",
    xp = "exception.escaped",
    Dp = "faas.trigger",
    Lp = "faas.execution",
    Up = "faas.document.collection",
    Vp = "faas.document.operation",
    jp = "faas.document.time",
    qp = "faas.document.name",
    Gp = "faas.time",
    Bp = "faas.cron",
    Kp = "faas.coldstart",
    Hp = "faas.invoked_name",
    Fp = "faas.invoked_provider",
    Wp = "faas.invoked_region",
    Yp = "net.transport",
    $p = "net.peer.ip",
    Xp = "net.peer.port",
    Qp = "net.peer.name",
    Jp = "net.host.ip",
    Zp = "net.host.port",
    em = "net.host.name",
    tm = "net.host.connection.type",
    nm = "net.host.connection.subtype",
    rm = "net.host.carrier.name",
    om = "net.host.carrier.mcc",
    am = "net.host.carrier.mnc",
    im = "net.host.carrier.icc",
    lm = "peer.service",
    dm = "enduser.id",
    cm = "enduser.role",
    hm = "enduser.scope",
    um = "thread.id",
    pm = "thread.name",
    mm = "code.function",
    _m = "code.namespace",
    gm = "code.filepath",
    fm = "code.lineno",
    bm = "http.method",
    Em = "http.url",
    Sm = "http.target",
    Tm = "http.host",
    wm = "http.scheme",
    ym = "http.status_code",
    Am = "http.flavor",
    Rm = "http.user_agent",
    vm = "http.request_content_length",
    km = "http.request_content_length_uncompressed",
    zm = "http.response_content_length",
    Cm = "http.response_content_length_uncompressed",
    Om = "http.server_name",
    Nm = "http.route",
    Im = "http.client_ip",
    Pm = "aws.dynamodb.table_names",
    Mm = "aws.dynamodb.consumed_capacity",
    Dm = "aws.dynamodb.item_collection_metrics",
    Lm = "aws.dynamodb.provisioned_read_capacity",
    Um = "aws.dynamodb.provisioned_write_capacity",
    jm = "aws.dynamodb.consistent_read",
    qm = "aws.dynamodb.projection",
    Gm = "aws.dynamodb.limit",
    Bm = "aws.dynamodb.attributes_to_get",
    Km = "aws.dynamodb.index_name",
    Hm = "aws.dynamodb.select",
    Fm = "aws.dynamodb.global_secondary_indexes",
    Wm = "aws.dynamodb.local_secondary_indexes",
    Ym = "aws.dynamodb.exclusive_start_table",
    $m = "aws.dynamodb.table_count",
    Xm = "aws.dynamodb.scan_forward",
    Qm = "aws.dynamodb.segment",
    Jm = "aws.dynamodb.total_segments",
    Zm = "aws.dynamodb.count",
    e_ = "aws.dynamodb.scanned_count",
    t_ = "aws.dynamodb.attribute_definitions",
    s_ = "aws.dynamodb.global_secondary_index_updates",
    n_ = "messaging.system",
    r_ = "messaging.destination",
    o_ = "messaging.destination_kind",
    a_ = "messaging.temp_destination",
    i_ = "messaging.protocol",
    d_ = "messaging.protocol_version",
    c_ = "messaging.url",
    h_ = "messaging.message_id",
    u_ = "messaging.conversation_id",
    p_ = "messaging.message_payload_size_bytes",
    m_ = "messaging.message_payload_compressed_size_bytes",
    __ = "messaging.operation",
    g_ = "messaging.consumer_id",
    f_ = "messaging.rabbitmq.routing_key",
    b_ = "messaging.kafka.message_key",
    E_ = "messaging.kafka.consumer_group",
    S_ = "messaging.kafka.client_id",
    T_ = "messaging.kafka.partition",
    w_ = "messaging.kafka.tombstone",
    y_ = "rpc.system",
    A_ = "rpc.service",
    R_ = "rpc.method",
    v_ = "rpc.grpc.status_code",
    k_ = "rpc.jsonrpc.version",
    z_ = "rpc.jsonrpc.request_id",
    C_ = "rpc.jsonrpc.error_code",
    O_ = "rpc.jsonrpc.error_message",
    N_ = "message.type",
    I_ = "message.id",
    P_ = "message.compressed_size",
    M_ = "message.uncompressed_size";
  lb.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = hp;
  lb.SEMATTRS_DB_SYSTEM = up;
  lb.SEMATTRS_DB_CONNECTION_STRING = pp;
  lb.SEMATTRS_DB_USER = mp;
  lb.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = _p;
  lb.SEMATTRS_DB_NAME = gp;
  lb.SEMATTRS_DB_STATEMENT = fp;
  lb.SEMATTRS_DB_OPERATION = bp;
  lb.SEMATTRS_DB_MSSQL_INSTANCE_NAME = Ep;
  lb.SEMATTRS_DB_CASSANDRA_KEYSPACE = Sp;
  lb.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = Tp;
  lb.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = wp;
  lb.SEMATTRS_DB_CASSANDRA_TABLE = yp;
  lb.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = Ap;
  lb.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = Rp;
  lb.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = vp;
  lb.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = kp;
  lb.SEMATTRS_DB_HBASE_NAMESPACE = zp;
  lb.SEMATTRS_DB_REDIS_DATABASE_INDEX = Cp;
  lb.SEMATTRS_DB_MONGODB_COLLECTION = Op;
  lb.SEMATTRS_DB_SQL_TABLE = Np;
  lb.SEMATTRS_EXCEPTION_TYPE = Ip;
  lb.SEMATTRS_EXCEPTION_MESSAGE = Pp;
  lb.SEMATTRS_EXCEPTION_STACKTRACE = Mp;
  lb.SEMATTRS_EXCEPTION_ESCAPED = xp;
  lb.SEMATTRS_FAAS_TRIGGER = Dp;
  lb.SEMATTRS_FAAS_EXECUTION = Lp;
  lb.SEMATTRS_FAAS_DOCUMENT_COLLECTION = Up;
  lb.SEMATTRS_FAAS_DOCUMENT_OPERATION = Vp;
  lb.SEMATTRS_FAAS_DOCUMENT_TIME = jp;
  lb.SEMATTRS_FAAS_DOCUMENT_NAME = qp;
  lb.SEMATTRS_FAAS_TIME = Gp;
  lb.SEMATTRS_FAAS_CRON = Bp;
  lb.SEMATTRS_FAAS_COLDSTART = Kp;
  lb.SEMATTRS_FAAS_INVOKED_NAME = Hp;
  lb.SEMATTRS_FAAS_INVOKED_PROVIDER = Fp;
  lb.SEMATTRS_FAAS_INVOKED_REGION = Wp;
  lb.SEMATTRS_NET_TRANSPORT = Yp;
  lb.SEMATTRS_NET_PEER_IP = $p;
  lb.SEMATTRS_NET_PEER_PORT = Xp;
  lb.SEMATTRS_NET_PEER_NAME = Qp;
  lb.SEMATTRS_NET_HOST_IP = Jp;
  lb.SEMATTRS_NET_HOST_PORT = Zp;
  lb.SEMATTRS_NET_HOST_NAME = em;
  lb.SEMATTRS_NET_HOST_CONNECTION_TYPE = tm;
  lb.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = nm;
  lb.SEMATTRS_NET_HOST_CARRIER_NAME = rm;
  lb.SEMATTRS_NET_HOST_CARRIER_MCC = om;
  lb.SEMATTRS_NET_HOST_CARRIER_MNC = am;
  lb.SEMATTRS_NET_HOST_CARRIER_ICC = im;
  lb.SEMATTRS_PEER_SERVICE = lm;
  lb.SEMATTRS_ENDUSER_ID = dm;
  lb.SEMATTRS_ENDUSER_ROLE = cm;
  lb.SEMATTRS_ENDUSER_SCOPE = hm;
  lb.SEMATTRS_THREAD_ID = um;
  lb.SEMATTRS_THREAD_NAME = pm;
  lb.SEMATTRS_CODE_FUNCTION = mm;
  lb.SEMATTRS_CODE_NAMESPACE = _m;
  lb.SEMATTRS_CODE_FILEPATH = gm;
  lb.SEMATTRS_CODE_LINENO = fm;
  lb.SEMATTRS_HTTP_METHOD = bm;
  lb.SEMATTRS_HTTP_URL = Em;
  lb.SEMATTRS_HTTP_TARGET = Sm;
  lb.SEMATTRS_HTTP_HOST = Tm;
  lb.SEMATTRS_HTTP_SCHEME = wm;
  lb.SEMATTRS_HTTP_STATUS_CODE = ym;
  lb.SEMATTRS_HTTP_FLAVOR = Am;
  lb.SEMATTRS_HTTP_USER_AGENT = Rm;
  lb.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = vm;
  lb.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = km;
  lb.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = zm;
  lb.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = Cm;
  lb.SEMATTRS_HTTP_SERVER_NAME = Om;
  lb.SEMATTRS_HTTP_ROUTE = Nm;
  lb.SEMATTRS_HTTP_CLIENT_IP = Im;
  lb.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Pm;
  lb.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = Mm;
  lb.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = Dm;
  lb.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Lm;
  lb.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = Um;
  lb.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = jm;
  lb.SEMATTRS_AWS_DYNAMODB_PROJECTION = qm;
  lb.SEMATTRS_AWS_DYNAMODB_LIMIT = Gm;
  lb.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = Bm;
  lb.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = Km;
  lb.SEMATTRS_AWS_DYNAMODB_SELECT = Hm;
  lb.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = Fm;
  lb.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = Wm;
  lb.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = Ym;
  lb.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = $m;
  lb.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = Xm;
  lb.SEMATTRS_AWS_DYNAMODB_SEGMENT = Qm;
  lb.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = Jm;
  lb.SEMATTRS_AWS_DYNAMODB_COUNT = Zm;
  lb.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = e_;
  lb.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = t_;
  lb.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = s_;
  lb.SEMATTRS_MESSAGING_SYSTEM = n_;
  lb.SEMATTRS_MESSAGING_DESTINATION = r_;
  lb.SEMATTRS_MESSAGING_DESTINATION_KIND = o_;
  lb.SEMATTRS_MESSAGING_TEMP_DESTINATION = a_;
  lb.SEMATTRS_MESSAGING_PROTOCOL = i_;
  lb.SEMATTRS_MESSAGING_PROTOCOL_VERSION = d_;
  lb.SEMATTRS_MESSAGING_URL = c_;
  lb.SEMATTRS_MESSAGING_MESSAGE_ID = h_;
  lb.SEMATTRS_MESSAGING_CONVERSATION_ID = u_;
  lb.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = p_;
  lb.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = m_;
  lb.SEMATTRS_MESSAGING_OPERATION = __;
  lb.SEMATTRS_MESSAGING_CONSUMER_ID = g_;
  lb.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = f_;
  lb.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = b_;
  lb.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = E_;
  lb.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = S_;
  lb.SEMATTRS_MESSAGING_KAFKA_PARTITION = T_;
  lb.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = w_;
  lb.SEMATTRS_RPC_SYSTEM = y_;
  lb.SEMATTRS_RPC_SERVICE = A_;
  lb.SEMATTRS_RPC_METHOD = R_;
  lb.SEMATTRS_RPC_GRPC_STATUS_CODE = v_;
  lb.SEMATTRS_RPC_JSONRPC_VERSION = k_;
  lb.SEMATTRS_RPC_JSONRPC_REQUEST_ID = z_;
  lb.SEMATTRS_RPC_JSONRPC_ERROR_CODE = C_;
  lb.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = O_;
  lb.SEMATTRS_MESSAGE_TYPE = N_;
  lb.SEMATTRS_MESSAGE_ID = I_;
  lb.SEMATTRS_MESSAGE_COMPRESSED_SIZE = P_;
  lb.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = M_;
  lb.SemanticAttributes = P.createConstMap([
    hp,
    up,
    pp,
    mp,
    _p,
    gp,
    fp,
    bp,
    Ep,
    Sp,
    Tp,
    wp,
    yp,
    Ap,
    Rp,
    vp,
    kp,
    zp,
    Cp,
    Op,
    Np,
    Ip,
    Pp,
    Mp,
    xp,
    Dp,
    Lp,
    Up,
    Vp,
    jp,
    qp,
    Gp,
    Bp,
    Kp,
    Hp,
    Fp,
    Wp,
    Yp,
    $p,
    Xp,
    Qp,
    Jp,
    Zp,
    em,
    tm,
    nm,
    rm,
    om,
    am,
    im,
    lm,
    dm,
    cm,
    hm,
    um,
    pm,
    mm,
    _m,
    gm,
    fm,
    bm,
    Em,
    Sm,
    Tm,
    wm,
    ym,
    Am,
    Rm,
    vm,
    km,
    zm,
    Cm,
    Om,
    Nm,
    Im,
    Pm,
    Mm,
    Dm,
    Lm,
    Um,
    jm,
    qm,
    Gm,
    Bm,
    Km,
    Hm,
    Fm,
    Wm,
    Ym,
    $m,
    Xm,
    Qm,
    Jm,
    Zm,
    e_,
    t_,
    s_,
    n_,
    r_,
    o_,
    a_,
    i_,
    d_,
    c_,
    h_,
    u_,
    p_,
    m_,
    __,
    g_,
    f_,
    b_,
    E_,
    S_,
    T_,
    w_,
    y_,
    A_,
    R_,
    v_,
    k_,
    z_,
    C_,
    O_,
    N_,
    I_,
    P_,
    M_
  ]);
  var x_ = "other_sql",
    D_ = "mssql",
    L_ = "mysql",
    U_ = "oracle",
    V_ = "db2",
    j_ = "postgresql",
    q_ = "redshift",
    G_ = "hive",
    B_ = "cloudscape",
    K_ = "hsqldb",
    H_ = "progress",
    F_ = "maxdb",
    W_ = "hanadb",
    Y_ = "ingres",
    $_ = "firstsql",
    X_ = "edb",
    Q_ = "cache",
    J_ = "adabas",
    Z_ = "firebird",
    eg = "derby",
    tg = "filemaker",
    sg = "informix",
    ng = "instantdb",
    rg = "interbase",
    og = "mariadb",
    ag = "netezza",
    ig = "pervasive",
    lg = "pointbase",
    dg = "sqlite",
    cg = "sybase",
    hg = "teradata",
    ug = "vertica",
    pg = "h2",
    mg = "coldfusion",
    _g = "cassandra",
    gg = "hbase",
    fg = "mongodb",
    bg = "redis",
    Eg = "couchbase",
    Sg = "couchdb",
    Tg = "cosmosdb",
    wg = "dynamodb",
    yg = "neo4j",
    Ag = "geode",
    Rg = "elasticsearch",
    vg = "memcached",
    kg = "cockroachdb";
  lb.DBSYSTEMVALUES_OTHER_SQL = x_;
  lb.DBSYSTEMVALUES_MSSQL = D_;
  lb.DBSYSTEMVALUES_MYSQL = L_;
  lb.DBSYSTEMVALUES_ORACLE = U_;
  lb.DBSYSTEMVALUES_DB2 = V_;
  lb.DBSYSTEMVALUES_POSTGRESQL = j_;
  lb.DBSYSTEMVALUES_REDSHIFT = q_;
  lb.DBSYSTEMVALUES_HIVE = G_;
  lb.DBSYSTEMVALUES_CLOUDSCAPE = B_;
  lb.DBSYSTEMVALUES_HSQLDB = K_;
  lb.DBSYSTEMVALUES_PROGRESS = H_;
  lb.DBSYSTEMVALUES_MAXDB = F_;
  lb.DBSYSTEMVALUES_HANADB = W_;
  lb.DBSYSTEMVALUES_INGRES = Y_;
  lb.DBSYSTEMVALUES_FIRSTSQL = $_;
  lb.DBSYSTEMVALUES_EDB = X_;
  lb.DBSYSTEMVALUES_CACHE = Q_;
  lb.DBSYSTEMVALUES_ADABAS = J_;
  lb.DBSYSTEMVALUES_FIREBIRD = Z_;
  lb.DBSYSTEMVALUES_DERBY = eg;
  lb.DBSYSTEMVALUES_FILEMAKER = tg;
  lb.DBSYSTEMVALUES_INFORMIX = sg;
  lb.DBSYSTEMVALUES_INSTANTDB = ng;
  lb.DBSYSTEMVALUES_INTERBASE = rg;
  lb.DBSYSTEMVALUES_MARIADB = og;
  lb.DBSYSTEMVALUES_NETEZZA = ag;
  lb.DBSYSTEMVALUES_PERVASIVE = ig;
  lb.DBSYSTEMVALUES_POINTBASE = lg;
  lb.DBSYSTEMVALUES_SQLITE = dg;
  lb.DBSYSTEMVALUES_SYBASE = cg;
  lb.DBSYSTEMVALUES_TERADATA = hg;
  lb.DBSYSTEMVALUES_VERTICA = ug;
  lb.DBSYSTEMVALUES_H2 = pg;
  lb.DBSYSTEMVALUES_COLDFUSION = mg;
  lb.DBSYSTEMVALUES_CASSANDRA = _g;
  lb.DBSYSTEMVALUES_HBASE = gg;
  lb.DBSYSTEMVALUES_MONGODB = fg;
  lb.DBSYSTEMVALUES_REDIS = bg;
  lb.DBSYSTEMVALUES_COUCHBASE = Eg;
  lb.DBSYSTEMVALUES_COUCHDB = Sg;
  lb.DBSYSTEMVALUES_COSMOSDB = Tg;
  lb.DBSYSTEMVALUES_DYNAMODB = wg;
  lb.DBSYSTEMVALUES_NEO4J = yg;
  lb.DBSYSTEMVALUES_GEODE = Ag;
  lb.DBSYSTEMVALUES_ELASTICSEARCH = Rg;
  lb.DBSYSTEMVALUES_MEMCACHED = vg;
  lb.DBSYSTEMVALUES_COCKROACHDB = kg;
  lb.DbSystemValues = P.createConstMap([
    x_,
    D_,
    L_,
    U_,
    V_,
    j_,
    q_,
    G_,
    B_,
    K_,
    H_,
    F_,
    W_,
    Y_,
    $_,
    X_,
    Q_,
    J_,
    Z_,
    eg,
    tg,
    sg,
    ng,
    rg,
    og,
    ag,
    ig,
    lg,
    dg,
    cg,
    hg,
    ug,
    pg,
    mg,
    _g,
    gg,
    fg,
    bg,
    Eg,
    Sg,
    Tg,
    wg,
    yg,
    Ag,
    Rg,
    vg,
    kg
  ]);
  var zg = "all",
    Cg = "each_quorum",
    Og = "quorum",
    Ng = "local_quorum",
    Ig = "one",
    Pg = "two",
    Mg = "three",
    xg = "local_one",
    Dg = "any",
    Lg = "serial",
    Ug = "local_serial";
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = zg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = Cg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = Og;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Ng;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = Ig;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Pg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Mg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = xg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Dg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Lg;
  lb.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Ug;
  lb.DbCassandraConsistencyLevelValues = P.createConstMap([
    zg,
    Cg,
    Og,
    Ng,
    Ig,
    Pg,
    Mg,
    xg,
    Dg,
    Lg,
    Ug
  ]);
  var Vg = "datasource",
    jg = "http",
    qg = "pubsub",
    Gg = "timer",
    Bg = "other";
  lb.FAASTRIGGERVALUES_DATASOURCE = Vg;
  lb.FAASTRIGGERVALUES_HTTP = jg;
  lb.FAASTRIGGERVALUES_PUBSUB = qg;
  lb.FAASTRIGGERVALUES_TIMER = Gg;
  lb.FAASTRIGGERVALUES_OTHER = Bg;
  lb.FaasTriggerValues = P.createConstMap([Vg, jg, qg, Gg, Bg]);
  var Kg = "insert",
    Hg = "edit",
    Fg = "delete";
  lb.FAASDOCUMENTOPERATIONVALUES_INSERT = Kg;
  lb.FAASDOCUMENTOPERATIONVALUES_EDIT = Hg;
  lb.FAASDOCUMENTOPERATIONVALUES_DELETE = Fg;
  lb.FaasDocumentOperationValues = P.createConstMap([Kg, Hg, Fg]);
  var Wg = "alibaba_cloud",
    Yg = "aws",
    $g = "azure",
    Xg = "gcp";
  lb.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = Wg;
  lb.FAASINVOKEDPROVIDERVALUES_AWS = Yg;
  lb.FAASINVOKEDPROVIDERVALUES_AZURE = $g;
  lb.FAASINVOKEDPROVIDERVALUES_GCP = Xg;
  lb.FaasInvokedProviderValues = P.createConstMap([Wg, Yg, $g, Xg]);
  var Qg = "ip_tcp",
    Jg = "ip_udp",
    Zg = "ip",
    ef = "unix",
    tf = "pipe",
    sf = "inproc",
    nf = "other";
  lb.NETTRANSPORTVALUES_IP_TCP = Qg;
  lb.NETTRANSPORTVALUES_IP_UDP = Jg;
  lb.NETTRANSPORTVALUES_IP = Zg;
  lb.NETTRANSPORTVALUES_UNIX = ef;
  lb.NETTRANSPORTVALUES_PIPE = tf;
  lb.NETTRANSPORTVALUES_INPROC = sf;
  lb.NETTRANSPORTVALUES_OTHER = nf;
  lb.NetTransportValues = P.createConstMap([Qg, Jg, Zg, ef, tf, sf, nf]);
  var rf = "wifi",
    of = "wired",
    af = "cell",
    lf = "unavailable",
    df = "unknown";
  lb.NETHOSTCONNECTIONTYPEVALUES_WIFI = rf;
  lb.NETHOSTCONNECTIONTYPEVALUES_WIRED = of;
  lb.NETHOSTCONNECTIONTYPEVALUES_CELL = af;
  lb.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = lf;
  lb.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = df;
  lb.NetHostConnectionTypeValues = P.createConstMap([rf, of, af, lf, df]);
  var cf = "gprs",
    hf = "edge",
    uf = "umts",
    pf = "cdma",
    mf = "evdo_0",
    _f = "evdo_a",
    gf = "cdma2000_1xrtt",
    bf = "hsdpa",
    Ef = "hsupa",
    Sf = "hspa",
    Tf = "iden",
    wf = "evdo_b",
    yf = "lte",
    Af = "ehrpd",
    vf = "hspap",
    kf = "gsm",
    zf = "td_scdma",
    Cf = "iwlan",
    Of = "nr",
    Nf = "nrnsa",
    If = "lte_ca";
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = cf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = hf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = uf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = pf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = mf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = _f;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = gf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = bf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = Ef;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Sf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Tf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = wf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = yf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = Af;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = vf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = kf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = zf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Cf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Of;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Nf;
  lb.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = If;
  lb.NetHostConnectionSubtypeValues = P.createConstMap([
    cf,
    hf,
    uf,
    pf,
    mf,
    _f,
    gf,
    bf,
    Ef,
    Sf,
    Tf,
    wf,
    yf,
    Af,
    vf,
    kf,
    zf,
    Cf,
    Of,
    Nf,
    If
  ]);
  var Pf = "1.0",
    Mf = "1.1",
    xf = "2.0",
    Df = "SPDY",
    Lf = "QUIC";
  lb.HTTPFLAVORVALUES_HTTP_1_0 = Pf;
  lb.HTTPFLAVORVALUES_HTTP_1_1 = Mf;
  lb.HTTPFLAVORVALUES_HTTP_2_0 = xf;
  lb.HTTPFLAVORVALUES_SPDY = Df;
  lb.HTTPFLAVORVALUES_QUIC = Lf;
  lb.HttpFlavorValues = { HTTP_1_0: Pf, HTTP_1_1: Mf, HTTP_2_0: xf, SPDY: Df, QUIC: Lf };
  var Uf = "queue",
    Vf = "topic";
  lb.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Uf;
  lb.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Vf;
  lb.MessagingDestinationKindValues = P.createConstMap([Uf, Vf]);
  var jf = "receive",
    qf = "process";
  lb.MESSAGINGOPERATIONVALUES_RECEIVE = jf;
  lb.MESSAGINGOPERATIONVALUES_PROCESS = qf;
  lb.MessagingOperationValues = P.createConstMap([jf, qf]);
  var Gf = 0,
    Bf = 1,
    Kf = 2,
    Hf = 3,
    Ff = 4,
    Yf = 5,
    $f = 6,
    Xf = 7,
    Qf = 8,
    Jf = 9,
    Zf = 10,
    eb = 11,
    tb = 12,
    sb = 13,
    nb = 14,
    rb = 15,
    ob = 16;
  lb.RPCGRPCSTATUSCODEVALUES_OK = Gf;
  lb.RPCGRPCSTATUSCODEVALUES_CANCELLED = Bf;
  lb.RPCGRPCSTATUSCODEVALUES_UNKNOWN = Kf;
  lb.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Hf;
  lb.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Ff;
  lb.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = Yf;
  lb.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = $f;
  lb.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = Xf;
  lb.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = Qf;
  lb.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = Jf;
  lb.RPCGRPCSTATUSCODEVALUES_ABORTED = Zf;
  lb.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = eb;
  lb.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = tb;
  lb.RPCGRPCSTATUSCODEVALUES_INTERNAL = sb;
  lb.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = nb;
  lb.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = rb;
  lb.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = ob;
  lb.RpcGrpcStatusCodeValues = {
    OK: Gf,
    CANCELLED: Bf,
    UNKNOWN: Kf,
    INVALID_ARGUMENT: Hf,
    DEADLINE_EXCEEDED: Ff,
    NOT_FOUND: Yf,
    ALREADY_EXISTS: $f,
    PERMISSION_DENIED: Xf,
    RESOURCE_EXHAUSTED: Qf,
    FAILED_PRECONDITION: Jf,
    ABORTED: Zf,
    OUT_OF_RANGE: eb,
    UNIMPLEMENTED: tb,
    INTERNAL: sb,
    UNAVAILABLE: nb,
    DATA_LOSS: rb,
    UNAUTHENTICATED: ob
  };
  var ab = "SENT",
    ib = "RECEIVED";
  lb.MESSAGETYPEVALUES_SENT = ab;
  lb.MESSAGETYPEVALUES_RECEIVED = ib;
  lb.MessageTypeValues = P.createConstMap([ab, ib]);
});
var gb = x(function (Me) {
  var AD =
      (Me && Me.__createBinding) ||
      (Object.create
        ? function (e, s, n, r) {
            if (r === void 0) r = n;
            var a = Object.getOwnPropertyDescriptor(s, n);
            if (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable))
              a = {
                enumerable: !0,
                get: function () {
                  return s[n];
                }
              };
            Object.defineProperty(e, r, a);
          }
        : function (e, s, n, r) {
            if (r === void 0) r = n;
            e[r] = s[n];
          }),
    RD =
      (Me && Me.__exportStar) ||
      function (e, s) {
        for (var n in e)
          if (n !== "default" && !Object.prototype.hasOwnProperty.call(s, n)) AD(s, e, n);
      };
  Object.defineProperty(Me, "__esModule", { value: !0 });
  RD(_b(), Me);
});
var XS = x(function (FS) {
  Object.defineProperty(FS, "__esModule", { value: !0 });
  FS.SEMRESATTRS_K8S_STATEFULSET_NAME =
    FS.SEMRESATTRS_K8S_STATEFULSET_UID =
    FS.SEMRESATTRS_K8S_DEPLOYMENT_NAME =
    FS.SEMRESATTRS_K8S_DEPLOYMENT_UID =
    FS.SEMRESATTRS_K8S_REPLICASET_NAME =
    FS.SEMRESATTRS_K8S_REPLICASET_UID =
    FS.SEMRESATTRS_K8S_CONTAINER_NAME =
    FS.SEMRESATTRS_K8S_POD_NAME =
    FS.SEMRESATTRS_K8S_POD_UID =
    FS.SEMRESATTRS_K8S_NAMESPACE_NAME =
    FS.SEMRESATTRS_K8S_NODE_UID =
    FS.SEMRESATTRS_K8S_NODE_NAME =
    FS.SEMRESATTRS_K8S_CLUSTER_NAME =
    FS.SEMRESATTRS_HOST_IMAGE_VERSION =
    FS.SEMRESATTRS_HOST_IMAGE_ID =
    FS.SEMRESATTRS_HOST_IMAGE_NAME =
    FS.SEMRESATTRS_HOST_ARCH =
    FS.SEMRESATTRS_HOST_TYPE =
    FS.SEMRESATTRS_HOST_NAME =
    FS.SEMRESATTRS_HOST_ID =
    FS.SEMRESATTRS_FAAS_MAX_MEMORY =
    FS.SEMRESATTRS_FAAS_INSTANCE =
    FS.SEMRESATTRS_FAAS_VERSION =
    FS.SEMRESATTRS_FAAS_ID =
    FS.SEMRESATTRS_FAAS_NAME =
    FS.SEMRESATTRS_DEVICE_MODEL_NAME =
    FS.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER =
    FS.SEMRESATTRS_DEVICE_ID =
    FS.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT =
    FS.SEMRESATTRS_CONTAINER_IMAGE_TAG =
    FS.SEMRESATTRS_CONTAINER_IMAGE_NAME =
    FS.SEMRESATTRS_CONTAINER_RUNTIME =
    FS.SEMRESATTRS_CONTAINER_ID =
    FS.SEMRESATTRS_CONTAINER_NAME =
    FS.SEMRESATTRS_AWS_LOG_STREAM_ARNS =
    FS.SEMRESATTRS_AWS_LOG_STREAM_NAMES =
    FS.SEMRESATTRS_AWS_LOG_GROUP_ARNS =
    FS.SEMRESATTRS_AWS_LOG_GROUP_NAMES =
    FS.SEMRESATTRS_AWS_EKS_CLUSTER_ARN =
    FS.SEMRESATTRS_AWS_ECS_TASK_REVISION =
    FS.SEMRESATTRS_AWS_ECS_TASK_FAMILY =
    FS.SEMRESATTRS_AWS_ECS_TASK_ARN =
    FS.SEMRESATTRS_AWS_ECS_LAUNCHTYPE =
    FS.SEMRESATTRS_AWS_ECS_CLUSTER_ARN =
    FS.SEMRESATTRS_AWS_ECS_CONTAINER_ARN =
    FS.SEMRESATTRS_CLOUD_PLATFORM =
    FS.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE =
    FS.SEMRESATTRS_CLOUD_REGION =
    FS.SEMRESATTRS_CLOUD_ACCOUNT_ID =
    FS.SEMRESATTRS_CLOUD_PROVIDER =
      void 0;
  FS.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE =
    FS.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE =
    FS.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS =
    FS.CLOUDPLATFORMVALUES_AZURE_AKS =
    FS.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES =
    FS.CLOUDPLATFORMVALUES_AZURE_VM =
    FS.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK =
    FS.CLOUDPLATFORMVALUES_AWS_LAMBDA =
    FS.CLOUDPLATFORMVALUES_AWS_EKS =
    FS.CLOUDPLATFORMVALUES_AWS_ECS =
    FS.CLOUDPLATFORMVALUES_AWS_EC2 =
    FS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC =
    FS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS =
    FS.CloudProviderValues =
    FS.CLOUDPROVIDERVALUES_GCP =
    FS.CLOUDPROVIDERVALUES_AZURE =
    FS.CLOUDPROVIDERVALUES_AWS =
    FS.CLOUDPROVIDERVALUES_ALIBABA_CLOUD =
    FS.SemanticResourceAttributes =
    FS.SEMRESATTRS_WEBENGINE_DESCRIPTION =
    FS.SEMRESATTRS_WEBENGINE_VERSION =
    FS.SEMRESATTRS_WEBENGINE_NAME =
    FS.SEMRESATTRS_TELEMETRY_AUTO_VERSION =
    FS.SEMRESATTRS_TELEMETRY_SDK_VERSION =
    FS.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE =
    FS.SEMRESATTRS_TELEMETRY_SDK_NAME =
    FS.SEMRESATTRS_SERVICE_VERSION =
    FS.SEMRESATTRS_SERVICE_INSTANCE_ID =
    FS.SEMRESATTRS_SERVICE_NAMESPACE =
    FS.SEMRESATTRS_SERVICE_NAME =
    FS.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION =
    FS.SEMRESATTRS_PROCESS_RUNTIME_VERSION =
    FS.SEMRESATTRS_PROCESS_RUNTIME_NAME =
    FS.SEMRESATTRS_PROCESS_OWNER =
    FS.SEMRESATTRS_PROCESS_COMMAND_ARGS =
    FS.SEMRESATTRS_PROCESS_COMMAND_LINE =
    FS.SEMRESATTRS_PROCESS_COMMAND =
    FS.SEMRESATTRS_PROCESS_EXECUTABLE_PATH =
    FS.SEMRESATTRS_PROCESS_EXECUTABLE_NAME =
    FS.SEMRESATTRS_PROCESS_PID =
    FS.SEMRESATTRS_OS_VERSION =
    FS.SEMRESATTRS_OS_NAME =
    FS.SEMRESATTRS_OS_DESCRIPTION =
    FS.SEMRESATTRS_OS_TYPE =
    FS.SEMRESATTRS_K8S_CRONJOB_NAME =
    FS.SEMRESATTRS_K8S_CRONJOB_UID =
    FS.SEMRESATTRS_K8S_JOB_NAME =
    FS.SEMRESATTRS_K8S_JOB_UID =
    FS.SEMRESATTRS_K8S_DAEMONSET_NAME =
    FS.SEMRESATTRS_K8S_DAEMONSET_UID =
      void 0;
  FS.TelemetrySdkLanguageValues =
    FS.TELEMETRYSDKLANGUAGEVALUES_WEBJS =
    FS.TELEMETRYSDKLANGUAGEVALUES_RUBY =
    FS.TELEMETRYSDKLANGUAGEVALUES_PYTHON =
    FS.TELEMETRYSDKLANGUAGEVALUES_PHP =
    FS.TELEMETRYSDKLANGUAGEVALUES_NODEJS =
    FS.TELEMETRYSDKLANGUAGEVALUES_JAVA =
    FS.TELEMETRYSDKLANGUAGEVALUES_GO =
    FS.TELEMETRYSDKLANGUAGEVALUES_ERLANG =
    FS.TELEMETRYSDKLANGUAGEVALUES_DOTNET =
    FS.TELEMETRYSDKLANGUAGEVALUES_CPP =
    FS.OsTypeValues =
    FS.OSTYPEVALUES_Z_OS =
    FS.OSTYPEVALUES_SOLARIS =
    FS.OSTYPEVALUES_AIX =
    FS.OSTYPEVALUES_HPUX =
    FS.OSTYPEVALUES_DRAGONFLYBSD =
    FS.OSTYPEVALUES_OPENBSD =
    FS.OSTYPEVALUES_NETBSD =
    FS.OSTYPEVALUES_FREEBSD =
    FS.OSTYPEVALUES_DARWIN =
    FS.OSTYPEVALUES_LINUX =
    FS.OSTYPEVALUES_WINDOWS =
    FS.HostArchValues =
    FS.HOSTARCHVALUES_X86 =
    FS.HOSTARCHVALUES_PPC64 =
    FS.HOSTARCHVALUES_PPC32 =
    FS.HOSTARCHVALUES_IA64 =
    FS.HOSTARCHVALUES_ARM64 =
    FS.HOSTARCHVALUES_ARM32 =
    FS.HOSTARCHVALUES_AMD64 =
    FS.AwsEcsLaunchtypeValues =
    FS.AWSECSLAUNCHTYPEVALUES_FARGATE =
    FS.AWSECSLAUNCHTYPEVALUES_EC2 =
    FS.CloudPlatformValues =
    FS.CLOUDPLATFORMVALUES_GCP_APP_ENGINE =
    FS.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS =
    FS.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE =
    FS.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN =
      void 0;
  var Q = Ir(),
    fb = "cloud.provider",
    bb = "cloud.account.id",
    Eb = "cloud.region",
    Sb = "cloud.availability_zone",
    Tb = "cloud.platform",
    yb = "aws.ecs.container.arn",
    Ab = "aws.ecs.cluster.arn",
    Rb = "aws.ecs.launchtype",
    vb = "aws.ecs.task.arn",
    kb = "aws.ecs.task.family",
    zb = "aws.ecs.task.revision",
    Cb = "aws.eks.cluster.arn",
    Ob = "aws.log.group.names",
    Nb = "aws.log.group.arns",
    Ib = "aws.log.stream.names",
    Pb = "aws.log.stream.arns",
    Mb = "container.name",
    xb = "container.id",
    Db = "container.runtime",
    Lb = "container.image.name",
    Ub = "container.image.tag",
    Vb = "deployment.environment",
    jb = "device.id",
    qb = "device.model.identifier",
    Gb = "device.model.name",
    Bb = "faas.name",
    Kb = "faas.id",
    Hb = "faas.version",
    Fb = "faas.instance",
    Wb = "faas.max_memory",
    Yb = "host.id",
    $b = "host.name",
    Xb = "host.type",
    Qb = "host.arch",
    Jb = "host.image.name",
    Zb = "host.image.id",
    eE = "host.image.version",
    tE = "k8s.cluster.name",
    sE = "k8s.node.name",
    rE = "k8s.node.uid",
    oE = "k8s.namespace.name",
    aE = "k8s.pod.uid",
    iE = "k8s.pod.name",
    lE = "k8s.container.name",
    dE = "k8s.replicaset.uid",
    cE = "k8s.replicaset.name",
    hE = "k8s.deployment.uid",
    uE = "k8s.deployment.name",
    pE = "k8s.statefulset.uid",
    mE = "k8s.statefulset.name",
    _E = "k8s.daemonset.uid",
    gE = "k8s.daemonset.name",
    fE = "k8s.job.uid",
    bE = "k8s.job.name",
    EE = "k8s.cronjob.uid",
    SE = "k8s.cronjob.name",
    TE = "os.type",
    wE = "os.description",
    yE = "os.name",
    AE = "os.version",
    RE = "process.pid",
    vE = "process.executable.name",
    kE = "process.executable.path",
    zE = "process.command",
    CE = "process.command_line",
    OE = "process.command_args",
    NE = "process.owner",
    IE = "process.runtime.name",
    PE = "process.runtime.version",
    ME = "process.runtime.description",
    xE = "service.name",
    DE = "service.namespace",
    LE = "service.instance.id",
    UE = "service.version",
    VE = "telemetry.sdk.name",
    jE = "telemetry.sdk.language",
    qE = "telemetry.sdk.version",
    GE = "telemetry.auto.version",
    BE = "webengine.name",
    KE = "webengine.version",
    HE = "webengine.description";
  FS.SEMRESATTRS_CLOUD_PROVIDER = fb;
  FS.SEMRESATTRS_CLOUD_ACCOUNT_ID = bb;
  FS.SEMRESATTRS_CLOUD_REGION = Eb;
  FS.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = Sb;
  FS.SEMRESATTRS_CLOUD_PLATFORM = Tb;
  FS.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = yb;
  FS.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = Ab;
  FS.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = Rb;
  FS.SEMRESATTRS_AWS_ECS_TASK_ARN = vb;
  FS.SEMRESATTRS_AWS_ECS_TASK_FAMILY = kb;
  FS.SEMRESATTRS_AWS_ECS_TASK_REVISION = zb;
  FS.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = Cb;
  FS.SEMRESATTRS_AWS_LOG_GROUP_NAMES = Ob;
  FS.SEMRESATTRS_AWS_LOG_GROUP_ARNS = Nb;
  FS.SEMRESATTRS_AWS_LOG_STREAM_NAMES = Ib;
  FS.SEMRESATTRS_AWS_LOG_STREAM_ARNS = Pb;
  FS.SEMRESATTRS_CONTAINER_NAME = Mb;
  FS.SEMRESATTRS_CONTAINER_ID = xb;
  FS.SEMRESATTRS_CONTAINER_RUNTIME = Db;
  FS.SEMRESATTRS_CONTAINER_IMAGE_NAME = Lb;
  FS.SEMRESATTRS_CONTAINER_IMAGE_TAG = Ub;
  FS.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = Vb;
  FS.SEMRESATTRS_DEVICE_ID = jb;
  FS.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = qb;
  FS.SEMRESATTRS_DEVICE_MODEL_NAME = Gb;
  FS.SEMRESATTRS_FAAS_NAME = Bb;
  FS.SEMRESATTRS_FAAS_ID = Kb;
  FS.SEMRESATTRS_FAAS_VERSION = Hb;
  FS.SEMRESATTRS_FAAS_INSTANCE = Fb;
  FS.SEMRESATTRS_FAAS_MAX_MEMORY = Wb;
  FS.SEMRESATTRS_HOST_ID = Yb;
  FS.SEMRESATTRS_HOST_NAME = $b;
  FS.SEMRESATTRS_HOST_TYPE = Xb;
  FS.SEMRESATTRS_HOST_ARCH = Qb;
  FS.SEMRESATTRS_HOST_IMAGE_NAME = Jb;
  FS.SEMRESATTRS_HOST_IMAGE_ID = Zb;
  FS.SEMRESATTRS_HOST_IMAGE_VERSION = eE;
  FS.SEMRESATTRS_K8S_CLUSTER_NAME = tE;
  FS.SEMRESATTRS_K8S_NODE_NAME = sE;
  FS.SEMRESATTRS_K8S_NODE_UID = rE;
  FS.SEMRESATTRS_K8S_NAMESPACE_NAME = oE;
  FS.SEMRESATTRS_K8S_POD_UID = aE;
  FS.SEMRESATTRS_K8S_POD_NAME = iE;
  FS.SEMRESATTRS_K8S_CONTAINER_NAME = lE;
  FS.SEMRESATTRS_K8S_REPLICASET_UID = dE;
  FS.SEMRESATTRS_K8S_REPLICASET_NAME = cE;
  FS.SEMRESATTRS_K8S_DEPLOYMENT_UID = hE;
  FS.SEMRESATTRS_K8S_DEPLOYMENT_NAME = uE;
  FS.SEMRESATTRS_K8S_STATEFULSET_UID = pE;
  FS.SEMRESATTRS_K8S_STATEFULSET_NAME = mE;
  FS.SEMRESATTRS_K8S_DAEMONSET_UID = _E;
  FS.SEMRESATTRS_K8S_DAEMONSET_NAME = gE;
  FS.SEMRESATTRS_K8S_JOB_UID = fE;
  FS.SEMRESATTRS_K8S_JOB_NAME = bE;
  FS.SEMRESATTRS_K8S_CRONJOB_UID = EE;
  FS.SEMRESATTRS_K8S_CRONJOB_NAME = SE;
  FS.SEMRESATTRS_OS_TYPE = TE;
  FS.SEMRESATTRS_OS_DESCRIPTION = wE;
  FS.SEMRESATTRS_OS_NAME = yE;
  FS.SEMRESATTRS_OS_VERSION = AE;
  FS.SEMRESATTRS_PROCESS_PID = RE;
  FS.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = vE;
  FS.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = kE;
  FS.SEMRESATTRS_PROCESS_COMMAND = zE;
  FS.SEMRESATTRS_PROCESS_COMMAND_LINE = CE;
  FS.SEMRESATTRS_PROCESS_COMMAND_ARGS = OE;
  FS.SEMRESATTRS_PROCESS_OWNER = NE;
  FS.SEMRESATTRS_PROCESS_RUNTIME_NAME = IE;
  FS.SEMRESATTRS_PROCESS_RUNTIME_VERSION = PE;
  FS.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = ME;
  FS.SEMRESATTRS_SERVICE_NAME = xE;
  FS.SEMRESATTRS_SERVICE_NAMESPACE = DE;
  FS.SEMRESATTRS_SERVICE_INSTANCE_ID = LE;
  FS.SEMRESATTRS_SERVICE_VERSION = UE;
  FS.SEMRESATTRS_TELEMETRY_SDK_NAME = VE;
  FS.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = jE;
  FS.SEMRESATTRS_TELEMETRY_SDK_VERSION = qE;
  FS.SEMRESATTRS_TELEMETRY_AUTO_VERSION = GE;
  FS.SEMRESATTRS_WEBENGINE_NAME = BE;
  FS.SEMRESATTRS_WEBENGINE_VERSION = KE;
  FS.SEMRESATTRS_WEBENGINE_DESCRIPTION = HE;
  FS.SemanticResourceAttributes = Q.createConstMap([
    fb,
    bb,
    Eb,
    Sb,
    Tb,
    yb,
    Ab,
    Rb,
    vb,
    kb,
    zb,
    Cb,
    Ob,
    Nb,
    Ib,
    Pb,
    Mb,
    xb,
    Db,
    Lb,
    Ub,
    Vb,
    jb,
    qb,
    Gb,
    Bb,
    Kb,
    Hb,
    Fb,
    Wb,
    Yb,
    $b,
    Xb,
    Qb,
    Jb,
    Zb,
    eE,
    tE,
    sE,
    rE,
    oE,
    aE,
    iE,
    lE,
    dE,
    cE,
    hE,
    uE,
    pE,
    mE,
    _E,
    gE,
    fE,
    bE,
    EE,
    SE,
    TE,
    wE,
    yE,
    AE,
    RE,
    vE,
    kE,
    zE,
    CE,
    OE,
    NE,
    IE,
    PE,
    ME,
    xE,
    DE,
    LE,
    UE,
    VE,
    jE,
    qE,
    GE,
    BE,
    KE,
    HE
  ]);
  var FE = "alibaba_cloud",
    WE = "aws",
    YE = "azure",
    $E = "gcp";
  FS.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = FE;
  FS.CLOUDPROVIDERVALUES_AWS = WE;
  FS.CLOUDPROVIDERVALUES_AZURE = YE;
  FS.CLOUDPROVIDERVALUES_GCP = $E;
  FS.CloudProviderValues = Q.createConstMap([FE, WE, YE, $E]);
  var XE = "alibaba_cloud_ecs",
    QE = "alibaba_cloud_fc",
    JE = "aws_ec2",
    ZE = "aws_ecs",
    eS = "aws_eks",
    tS = "aws_lambda",
    sS = "aws_elastic_beanstalk",
    nS = "azure_vm",
    rS = "azure_container_instances",
    oS = "azure_aks",
    aS = "azure_functions",
    iS = "azure_app_service",
    lS = "gcp_compute_engine",
    dS = "gcp_cloud_run",
    cS = "gcp_kubernetes_engine",
    hS = "gcp_cloud_functions",
    pS = "gcp_app_engine";
  FS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = XE;
  FS.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = QE;
  FS.CLOUDPLATFORMVALUES_AWS_EC2 = JE;
  FS.CLOUDPLATFORMVALUES_AWS_ECS = ZE;
  FS.CLOUDPLATFORMVALUES_AWS_EKS = eS;
  FS.CLOUDPLATFORMVALUES_AWS_LAMBDA = tS;
  FS.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = sS;
  FS.CLOUDPLATFORMVALUES_AZURE_VM = nS;
  FS.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = rS;
  FS.CLOUDPLATFORMVALUES_AZURE_AKS = oS;
  FS.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = aS;
  FS.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = iS;
  FS.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = lS;
  FS.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = dS;
  FS.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = cS;
  FS.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = hS;
  FS.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = pS;
  FS.CloudPlatformValues = Q.createConstMap([
    XE,
    QE,
    JE,
    ZE,
    eS,
    tS,
    sS,
    nS,
    rS,
    oS,
    aS,
    iS,
    lS,
    dS,
    cS,
    hS,
    pS
  ]);
  var mS = "ec2",
    _S = "fargate";
  FS.AWSECSLAUNCHTYPEVALUES_EC2 = mS;
  FS.AWSECSLAUNCHTYPEVALUES_FARGATE = _S;
  FS.AwsEcsLaunchtypeValues = Q.createConstMap([mS, _S]);
  var gS = "amd64",
    fS = "arm32",
    bS = "arm64",
    ES = "ia64",
    SS = "ppc32",
    TS = "ppc64",
    wS = "x86";
  FS.HOSTARCHVALUES_AMD64 = gS;
  FS.HOSTARCHVALUES_ARM32 = fS;
  FS.HOSTARCHVALUES_ARM64 = bS;
  FS.HOSTARCHVALUES_IA64 = ES;
  FS.HOSTARCHVALUES_PPC32 = SS;
  FS.HOSTARCHVALUES_PPC64 = TS;
  FS.HOSTARCHVALUES_X86 = wS;
  FS.HostArchValues = Q.createConstMap([gS, fS, bS, ES, SS, TS, wS]);
  var yS = "windows",
    AS = "linux",
    RS = "darwin",
    vS = "freebsd",
    kS = "netbsd",
    CS = "openbsd",
    OS = "dragonflybsd",
    NS = "hpux",
    IS = "aix",
    PS = "solaris",
    MS = "z_os";
  FS.OSTYPEVALUES_WINDOWS = yS;
  FS.OSTYPEVALUES_LINUX = AS;
  FS.OSTYPEVALUES_DARWIN = RS;
  FS.OSTYPEVALUES_FREEBSD = vS;
  FS.OSTYPEVALUES_NETBSD = kS;
  FS.OSTYPEVALUES_OPENBSD = CS;
  FS.OSTYPEVALUES_DRAGONFLYBSD = OS;
  FS.OSTYPEVALUES_HPUX = NS;
  FS.OSTYPEVALUES_AIX = IS;
  FS.OSTYPEVALUES_SOLARIS = PS;
  FS.OSTYPEVALUES_Z_OS = MS;
  FS.OsTypeValues = Q.createConstMap([yS, AS, RS, vS, kS, CS, OS, NS, IS, PS, MS]);
  var xS = "cpp",
    DS = "dotnet",
    LS = "erlang",
    US = "go",
    VS = "java",
    jS = "nodejs",
    qS = "php",
    BS = "python",
    KS = "ruby",
    HS = "webjs";
  FS.TELEMETRYSDKLANGUAGEVALUES_CPP = xS;
  FS.TELEMETRYSDKLANGUAGEVALUES_DOTNET = DS;
  FS.TELEMETRYSDKLANGUAGEVALUES_ERLANG = LS;
  FS.TELEMETRYSDKLANGUAGEVALUES_GO = US;
  FS.TELEMETRYSDKLANGUAGEVALUES_JAVA = VS;
  FS.TELEMETRYSDKLANGUAGEVALUES_NODEJS = jS;
  FS.TELEMETRYSDKLANGUAGEVALUES_PHP = qS;
  FS.TELEMETRYSDKLANGUAGEVALUES_PYTHON = BS;
  FS.TELEMETRYSDKLANGUAGEVALUES_RUBY = KS;
  FS.TELEMETRYSDKLANGUAGEVALUES_WEBJS = HS;
  FS.TelemetrySdkLanguageValues = Q.createConstMap([xS, DS, LS, US, VS, jS, qS, BS, KS, HS]);
});
var QS = x(function (xe) {
  var tV =
      (xe && xe.__createBinding) ||
      (Object.create
        ? function (e, s, n, r) {
            if (r === void 0) r = n;
            var a = Object.getOwnPropertyDescriptor(s, n);
            if (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable))
              a = {
                enumerable: !0,
                get: function () {
                  return s[n];
                }
              };
            Object.defineProperty(e, r, a);
          }
        : function (e, s, n, r) {
            if (r === void 0) r = n;
            e[r] = s[n];
          }),
    sV =
      (xe && xe.__exportStar) ||
      function (e, s) {
        for (var n in e)
          if (n !== "default" && !Object.prototype.hasOwnProperty.call(s, n)) tV(s, e, n);
      };
  Object.defineProperty(xe, "__esModule", { value: !0 });
  sV(XS(), xe);
});
var sT = x(function (JS) {
  Object.defineProperty(JS, "__esModule", { value: !0 });
  JS.ATTR_EXCEPTION_TYPE =
    JS.ATTR_EXCEPTION_STACKTRACE =
    JS.ATTR_EXCEPTION_MESSAGE =
    JS.ATTR_EXCEPTION_ESCAPED =
    JS.ERROR_TYPE_VALUE_OTHER =
    JS.ATTR_ERROR_TYPE =
    JS.DOTNET_GC_HEAP_GENERATION_VALUE_POH =
    JS.DOTNET_GC_HEAP_GENERATION_VALUE_LOH =
    JS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 =
    JS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 =
    JS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 =
    JS.ATTR_DOTNET_GC_HEAP_GENERATION =
    JS.DB_SYSTEM_NAME_VALUE_POSTGRESQL =
    JS.DB_SYSTEM_NAME_VALUE_MYSQL =
    JS.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER =
    JS.DB_SYSTEM_NAME_VALUE_MARIADB =
    JS.ATTR_DB_SYSTEM_NAME =
    JS.ATTR_DB_STORED_PROCEDURE_NAME =
    JS.ATTR_DB_RESPONSE_STATUS_CODE =
    JS.ATTR_DB_QUERY_TEXT =
    JS.ATTR_DB_QUERY_SUMMARY =
    JS.ATTR_DB_OPERATION_NAME =
    JS.ATTR_DB_OPERATION_BATCH_SIZE =
    JS.ATTR_DB_NAMESPACE =
    JS.ATTR_DB_COLLECTION_NAME =
    JS.ATTR_CODE_STACKTRACE =
    JS.ATTR_CODE_LINE_NUMBER =
    JS.ATTR_CODE_FUNCTION_NAME =
    JS.ATTR_CODE_FILE_PATH =
    JS.ATTR_CODE_COLUMN_NUMBER =
    JS.ATTR_CLIENT_PORT =
    JS.ATTR_CLIENT_ADDRESS =
    JS.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED =
    JS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS =
    JS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE =
    JS.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS =
    JS.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK =
    JS.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED =
    JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED =
    JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER =
    JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER =
    JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED =
    JS.ATTR_ASPNETCORE_RATE_LIMITING_RESULT =
    JS.ATTR_ASPNETCORE_RATE_LIMITING_POLICY =
    JS.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE =
    JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED =
    JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED =
    JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED =
    JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED =
    JS.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT =
      void 0;
  JS.OTEL_STATUS_CODE_VALUE_ERROR =
    JS.ATTR_OTEL_STATUS_CODE =
    JS.ATTR_OTEL_SCOPE_VERSION =
    JS.ATTR_OTEL_SCOPE_NAME =
    JS.NETWORK_TYPE_VALUE_IPV6 =
    JS.NETWORK_TYPE_VALUE_IPV4 =
    JS.ATTR_NETWORK_TYPE =
    JS.NETWORK_TRANSPORT_VALUE_UNIX =
    JS.NETWORK_TRANSPORT_VALUE_UDP =
    JS.NETWORK_TRANSPORT_VALUE_TCP =
    JS.NETWORK_TRANSPORT_VALUE_QUIC =
    JS.NETWORK_TRANSPORT_VALUE_PIPE =
    JS.ATTR_NETWORK_TRANSPORT =
    JS.ATTR_NETWORK_PROTOCOL_VERSION =
    JS.ATTR_NETWORK_PROTOCOL_NAME =
    JS.ATTR_NETWORK_PEER_PORT =
    JS.ATTR_NETWORK_PEER_ADDRESS =
    JS.ATTR_NETWORK_LOCAL_PORT =
    JS.ATTR_NETWORK_LOCAL_ADDRESS =
    JS.JVM_THREAD_STATE_VALUE_WAITING =
    JS.JVM_THREAD_STATE_VALUE_TIMED_WAITING =
    JS.JVM_THREAD_STATE_VALUE_TERMINATED =
    JS.JVM_THREAD_STATE_VALUE_RUNNABLE =
    JS.JVM_THREAD_STATE_VALUE_NEW =
    JS.JVM_THREAD_STATE_VALUE_BLOCKED =
    JS.ATTR_JVM_THREAD_STATE =
    JS.ATTR_JVM_THREAD_DAEMON =
    JS.JVM_MEMORY_TYPE_VALUE_NON_HEAP =
    JS.JVM_MEMORY_TYPE_VALUE_HEAP =
    JS.ATTR_JVM_MEMORY_TYPE =
    JS.ATTR_JVM_MEMORY_POOL_NAME =
    JS.ATTR_JVM_GC_NAME =
    JS.ATTR_JVM_GC_ACTION =
    JS.ATTR_HTTP_ROUTE =
    JS.ATTR_HTTP_RESPONSE_STATUS_CODE =
    JS.ATTR_HTTP_RESPONSE_HEADER =
    JS.ATTR_HTTP_REQUEST_RESEND_COUNT =
    JS.ATTR_HTTP_REQUEST_METHOD_ORIGINAL =
    JS.HTTP_REQUEST_METHOD_VALUE_TRACE =
    JS.HTTP_REQUEST_METHOD_VALUE_PUT =
    JS.HTTP_REQUEST_METHOD_VALUE_POST =
    JS.HTTP_REQUEST_METHOD_VALUE_PATCH =
    JS.HTTP_REQUEST_METHOD_VALUE_OPTIONS =
    JS.HTTP_REQUEST_METHOD_VALUE_HEAD =
    JS.HTTP_REQUEST_METHOD_VALUE_GET =
    JS.HTTP_REQUEST_METHOD_VALUE_DELETE =
    JS.HTTP_REQUEST_METHOD_VALUE_CONNECT =
    JS.HTTP_REQUEST_METHOD_VALUE_OTHER =
    JS.ATTR_HTTP_REQUEST_METHOD =
    JS.ATTR_HTTP_REQUEST_HEADER =
      void 0;
  JS.ATTR_USER_AGENT_ORIGINAL =
    JS.ATTR_URL_SCHEME =
    JS.ATTR_URL_QUERY =
    JS.ATTR_URL_PATH =
    JS.ATTR_URL_FULL =
    JS.ATTR_URL_FRAGMENT =
    JS.ATTR_TELEMETRY_SDK_VERSION =
    JS.ATTR_TELEMETRY_SDK_NAME =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_RUST =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_PHP =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_GO =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET =
    JS.TELEMETRY_SDK_LANGUAGE_VALUE_CPP =
    JS.ATTR_TELEMETRY_SDK_LANGUAGE =
    JS.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS =
    JS.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS =
    JS.SIGNALR_TRANSPORT_VALUE_LONG_POLLING =
    JS.ATTR_SIGNALR_TRANSPORT =
    JS.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT =
    JS.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE =
    JS.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN =
    JS.ATTR_SIGNALR_CONNECTION_STATUS =
    JS.ATTR_SERVICE_VERSION =
    JS.ATTR_SERVICE_NAME =
    JS.ATTR_SERVER_PORT =
    JS.ATTR_SERVER_ADDRESS =
    JS.ATTR_OTEL_STATUS_DESCRIPTION =
    JS.OTEL_STATUS_CODE_VALUE_OK =
      void 0;
  JS.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
  JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
  JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
  JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
  JS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
  JS.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
  JS.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
  JS.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
  JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
  JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
  JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
  JS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
  JS.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
  JS.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
  JS.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
  JS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
  JS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
  JS.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = "aspnetcore.user.is_authenticated";
  JS.ATTR_CLIENT_ADDRESS = "client.address";
  JS.ATTR_CLIENT_PORT = "client.port";
  JS.ATTR_CODE_COLUMN_NUMBER = "code.column.number";
  JS.ATTR_CODE_FILE_PATH = "code.file.path";
  JS.ATTR_CODE_FUNCTION_NAME = "code.function.name";
  JS.ATTR_CODE_LINE_NUMBER = "code.line.number";
  JS.ATTR_CODE_STACKTRACE = "code.stacktrace";
  JS.ATTR_DB_COLLECTION_NAME = "db.collection.name";
  JS.ATTR_DB_NAMESPACE = "db.namespace";
  JS.ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
  JS.ATTR_DB_OPERATION_NAME = "db.operation.name";
  JS.ATTR_DB_QUERY_SUMMARY = "db.query.summary";
  JS.ATTR_DB_QUERY_TEXT = "db.query.text";
  JS.ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
  JS.ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
  JS.ATTR_DB_SYSTEM_NAME = "db.system.name";
  JS.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
  JS.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
  JS.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
  JS.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
  JS.ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
  JS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
  JS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
  JS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
  JS.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
  JS.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
  JS.ATTR_ERROR_TYPE = "error.type";
  JS.ERROR_TYPE_VALUE_OTHER = "_OTHER";
  JS.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
  JS.ATTR_EXCEPTION_MESSAGE = "exception.message";
  JS.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
  JS.ATTR_EXCEPTION_TYPE = "exception.type";
  var nV = (e) => `http.request.header.${e}`;
  JS.ATTR_HTTP_REQUEST_HEADER = nV;
  JS.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
  JS.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
  JS.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
  JS.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
  JS.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
  JS.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
  JS.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
  JS.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
  JS.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
  JS.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
  JS.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
  JS.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
  JS.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
  var rV = (e) => `http.response.header.${e}`;
  JS.ATTR_HTTP_RESPONSE_HEADER = rV;
  JS.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
  JS.ATTR_HTTP_ROUTE = "http.route";
  JS.ATTR_JVM_GC_ACTION = "jvm.gc.action";
  JS.ATTR_JVM_GC_NAME = "jvm.gc.name";
  JS.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
  JS.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
  JS.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
  JS.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
  JS.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
  JS.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
  JS.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
  JS.JVM_THREAD_STATE_VALUE_NEW = "new";
  JS.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
  JS.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
  JS.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
  JS.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
  JS.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
  JS.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
  JS.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
  JS.ATTR_NETWORK_PEER_PORT = "network.peer.port";
  JS.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
  JS.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
  JS.ATTR_NETWORK_TRANSPORT = "network.transport";
  JS.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
  JS.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
  JS.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
  JS.NETWORK_TRANSPORT_VALUE_UDP = "udp";
  JS.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
  JS.ATTR_NETWORK_TYPE = "network.type";
  JS.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
  JS.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
  JS.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
  JS.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
  JS.ATTR_OTEL_STATUS_CODE = "otel.status_code";
  JS.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
  JS.OTEL_STATUS_CODE_VALUE_OK = "OK";
  JS.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
  JS.ATTR_SERVER_ADDRESS = "server.address";
  JS.ATTR_SERVER_PORT = "server.port";
  JS.ATTR_SERVICE_NAME = "service.name";
  JS.ATTR_SERVICE_VERSION = "service.version";
  JS.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
  JS.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
  JS.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
  JS.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
  JS.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
  JS.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
  JS.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
  JS.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
  JS.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
  JS.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
  JS.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
  JS.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
  JS.ATTR_URL_FRAGMENT = "url.fragment";
  JS.ATTR_URL_FULL = "url.full";
  JS.ATTR_URL_PATH = "url.path";
  JS.ATTR_URL_QUERY = "url.query";
  JS.ATTR_URL_SCHEME = "url.scheme";
  JS.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});
var aT = x(function (nT) {
  Object.defineProperty(nT, "__esModule", { value: !0 });
  nT.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS =
    nT.METRIC_KESTREL_UPGRADED_CONNECTIONS =
    nT.METRIC_KESTREL_TLS_HANDSHAKE_DURATION =
    nT.METRIC_KESTREL_REJECTED_CONNECTIONS =
    nT.METRIC_KESTREL_QUEUED_REQUESTS =
    nT.METRIC_KESTREL_QUEUED_CONNECTIONS =
    nT.METRIC_KESTREL_CONNECTION_DURATION =
    nT.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES =
    nT.METRIC_KESTREL_ACTIVE_CONNECTIONS =
    nT.METRIC_JVM_THREAD_COUNT =
    nT.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC =
    nT.METRIC_JVM_MEMORY_USED =
    nT.METRIC_JVM_MEMORY_LIMIT =
    nT.METRIC_JVM_MEMORY_COMMITTED =
    nT.METRIC_JVM_GC_DURATION =
    nT.METRIC_JVM_CPU_TIME =
    nT.METRIC_JVM_CPU_RECENT_UTILIZATION =
    nT.METRIC_JVM_CPU_COUNT =
    nT.METRIC_JVM_CLASS_UNLOADED =
    nT.METRIC_JVM_CLASS_LOADED =
    nT.METRIC_JVM_CLASS_COUNT =
    nT.METRIC_HTTP_SERVER_REQUEST_DURATION =
    nT.METRIC_HTTP_CLIENT_REQUEST_DURATION =
    nT.METRIC_DOTNET_TIMER_COUNT =
    nT.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT =
    nT.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT =
    nT.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH =
    nT.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET =
    nT.METRIC_DOTNET_PROCESS_CPU_TIME =
    nT.METRIC_DOTNET_PROCESS_CPU_COUNT =
    nT.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS =
    nT.METRIC_DOTNET_JIT_COMPILED_METHODS =
    nT.METRIC_DOTNET_JIT_COMPILED_IL_SIZE =
    nT.METRIC_DOTNET_JIT_COMPILATION_TIME =
    nT.METRIC_DOTNET_GC_PAUSE_TIME =
    nT.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE =
    nT.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE =
    nT.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE =
    nT.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED =
    nT.METRIC_DOTNET_GC_COLLECTIONS =
    nT.METRIC_DOTNET_EXCEPTIONS =
    nT.METRIC_DOTNET_ASSEMBLY_COUNT =
    nT.METRIC_DB_CLIENT_OPERATION_DURATION =
    nT.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS =
    nT.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS =
    nT.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION =
    nT.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE =
    nT.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS =
    nT.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES =
    nT.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS =
      void 0;
  nT.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0;
  nT.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
  nT.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES =
    "aspnetcore.rate_limiting.active_request_leases";
  nT.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
  nT.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE =
    "aspnetcore.rate_limiting.request.time_in_queue";
  nT.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION =
    "aspnetcore.rate_limiting.request_lease.duration";
  nT.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
  nT.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
  nT.METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
  nT.METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
  nT.METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
  nT.METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
  nT.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
  nT.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE =
    "dotnet.gc.last_collection.heap.fragmentation.size";
  nT.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
  nT.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE =
    "dotnet.gc.last_collection.memory.committed_size";
  nT.METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
  nT.METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
  nT.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
  nT.METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
  nT.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
  nT.METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
  nT.METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
  nT.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
  nT.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
  nT.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
  nT.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
  nT.METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
  nT.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
  nT.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
  nT.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
  nT.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
  nT.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
  nT.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
  nT.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
  nT.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
  nT.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
  nT.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
  nT.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
  nT.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
  nT.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
  nT.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
  nT.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
  nT.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
  nT.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
  nT.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
  nT.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
  nT.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
  nT.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
  nT.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
  nT.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
  nT.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});
var cT = x(function (lT) {
  Object.defineProperty(lT, "__esModule", { value: !0 });
  lT.EVENT_EXCEPTION = void 0;
  lT.EVENT_EXCEPTION = "exception";
});
var aqe = x(function (le) {
  var IG =
      (le && le.__createBinding) ||
      (Object.create
        ? function (e, s, n, r) {
            if (r === void 0) r = n;
            var a = Object.getOwnPropertyDescriptor(s, n);
            if (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable))
              a = {
                enumerable: !0,
                get: function () {
                  return s[n];
                }
              };
            Object.defineProperty(e, r, a);
          }
        : function (e, s, n, r) {
            if (r === void 0) r = n;
            e[r] = s[n];
          }),
    Dt =
      (le && le.__exportStar) ||
      function (e, s) {
        for (var n in e)
          if (n !== "default" && !Object.prototype.hasOwnProperty.call(s, n)) IG(s, e, n);
      };
  Object.defineProperty(le, "__esModule", { value: !0 });
  Dt(gb(), le);
  Dt(QS(), le);
  Dt(sT(), le);
  Dt(aT(), le);
  Dt(cT(), le);
});
var pT = x(function (hT) {
  Object.defineProperty(hT, "__esModule", { value: !0 });
  hT.ATTR_PROCESS_RUNTIME_NAME = void 0;
  hT.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
});
var bT = x(function (gT) {
  Object.defineProperty(gT, "__esModule", { value: !0 });
  gT.SDK_INFO = void 0;
  var mT = lp(),
    Ee = aqe(),
    _T = pT();
  gT.SDK_INFO = {
    [Ee.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
    [_T.ATTR_PROCESS_RUNTIME_NAME]: "node",
    [Ee.ATTR_TELEMETRY_SDK_LANGUAGE]: Ee.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
    [Ee.ATTR_TELEMETRY_SDK_VERSION]: mT.VERSION
  };
});
var ST = x(function (Se) {
  Object.defineProperty(Se, "__esModule", { value: !0 });
  Se.otperformance =
    Se.SDK_INFO =
    Se._globalThis =
    Se.getStringListFromEnv =
    Se.getNumberFromEnv =
    Se.getBooleanFromEnv =
    Se.getStringFromEnv =
      void 0;
  var Gs = sp();
  Object.defineProperty(Se, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Gs.getStringFromEnv;
    }
  });
  Object.defineProperty(Se, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Gs.getBooleanFromEnv;
    }
  });
  Object.defineProperty(Se, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Gs.getNumberFromEnv;
    }
  });
  Object.defineProperty(Se, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Gs.getStringListFromEnv;
    }
  });
  var PG = op();
  Object.defineProperty(Se, "_globalThis", {
    enumerable: !0,
    get: function () {
      return PG._globalThis;
    }
  });
  var MG = bT();
  Object.defineProperty(Se, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return MG.SDK_INFO;
    }
  });
  Se.otperformance = performance;
});
var Pr = x(function (ge) {
  Object.defineProperty(ge, "__esModule", { value: !0 });
  ge.getStringListFromEnv =
    ge.getNumberFromEnv =
    ge.getStringFromEnv =
    ge.getBooleanFromEnv =
    ge.otperformance =
    ge._globalThis =
    ge.SDK_INFO =
      void 0;
  var De = ST();
  Object.defineProperty(ge, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return De.SDK_INFO;
    }
  });
  Object.defineProperty(ge, "_globalThis", {
    enumerable: !0,
    get: function () {
      return De._globalThis;
    }
  });
  Object.defineProperty(ge, "otperformance", {
    enumerable: !0,
    get: function () {
      return De.otperformance;
    }
  });
  Object.defineProperty(ge, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return De.getBooleanFromEnv;
    }
  });
  Object.defineProperty(ge, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return De.getStringFromEnv;
    }
  });
  Object.defineProperty(ge, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return De.getNumberFromEnv;
    }
  });
  Object.defineProperty(ge, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return De.getStringListFromEnv;
    }
  });
});
var vT = x(function (AT) {
  Object.defineProperty(AT, "__esModule", { value: !0 });
  AT.addHrTimes =
    AT.isTimeInput =
    AT.isTimeInputHrTime =
    AT.hrTimeToMicroseconds =
    AT.hrTimeToMilliseconds =
    AT.hrTimeToNanoseconds =
    AT.hrTimeToTimeStamp =
    AT.hrTimeDuration =
    AT.timeInputToHrTime =
    AT.hrTime =
    AT.getTimeOrigin =
    AT.millisToHrTime =
      void 0;
  var Te = Pr(),
    TT = 9,
    DG = 6,
    LG = Math.pow(10, DG),
    Bs = Math.pow(10, TT);
  function Lt(e) {
    let s = e / 1000,
      n = Math.trunc(s),
      r = Math.round((e % 1000) * LG);
    return [n, r];
  }
  AT.millisToHrTime = Lt;
  function UG() {
    return Te.otperformance.timeOrigin;
  }
  AT.getTimeOrigin = UG;
  function wT(e) {
    let s = Lt(Te.otperformance.timeOrigin),
      n = Lt(typeof e === "number" ? e : Te.otperformance.now());
    return yT(s, n);
  }
  AT.hrTime = wT;
  function VG(e) {
    if (Mr(e)) return e;
    else if (typeof e === "number")
      if (e < Te.otperformance.timeOrigin) return wT(e);
      else return Lt(e);
    else if (e instanceof Date) return Lt(e.getTime());
    else throw TypeError("Invalid input type");
  }
  AT.timeInputToHrTime = VG;
  function jG(e, s) {
    let n = s[0] - e[0],
      r = s[1] - e[1];
    if (r < 0) ((n -= 1), (r += Bs));
    return [n, r];
  }
  AT.hrTimeDuration = jG;
  function qG(e) {
    let s = TT,
      n = `${"0".repeat(s)}${e[1]}Z`,
      r = n.substring(n.length - s - 1);
    return new Date(e[0] * 1000).toISOString().replace("000Z", r);
  }
  AT.hrTimeToTimeStamp = qG;
  function GG(e) {
    return e[0] * Bs + e[1];
  }
  AT.hrTimeToNanoseconds = GG;
  function BG(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  AT.hrTimeToMilliseconds = BG;
  function KG(e) {
    return e[0] * 1e6 + e[1] / 1000;
  }
  AT.hrTimeToMicroseconds = KG;
  function Mr(e) {
    return (
      Array.isArray(e) && e.length === 2 && typeof e[0] === "number" && typeof e[1] === "number"
    );
  }
  AT.isTimeInputHrTime = Mr;
  function HG(e) {
    return Mr(e) || typeof e === "number" || e instanceof Date;
  }
  AT.isTimeInput = HG;
  function yT(e, s) {
    let n = [e[0] + s[0], e[1] + s[1]];
    if (n[1] >= Bs) ((n[1] -= Bs), (n[0] += 1));
    return n;
  }
  AT.addHrTimes = yT;
});
var CT = x(function (kT) {
  Object.defineProperty(kT, "__esModule", { value: !0 });
  kT.unrefTimer = void 0;
  function nB(e) {
    if (typeof e !== "number") e.unref();
  }
  kT.unrefTimer = nB;
});
var NT = x(function (OT) {
  Object.defineProperty(OT, "__esModule", { value: !0 });
  OT.ExportResultCode = void 0;
  var rB;
  (function (e) {
    ((e[(e.SUCCESS = 0)] = "SUCCESS"), (e[(e.FAILED = 1)] = "FAILED"));
  })((rB = OT.ExportResultCode || (OT.ExportResultCode = {})));
});
var xT = x(function (PT) {
  Object.defineProperty(PT, "__esModule", { value: !0 });
  PT.CompositePropagator = void 0;
  var Hs = fl();
  class IT {
    _propagators;
    _fields;
    constructor(e = {}) {
      this._propagators = e.propagators ?? [];
      let s = new Set();
      for (let n of this._propagators) {
        let r = typeof n.fields === "function" ? n.fields() : [];
        for (let a of r) s.add(a);
      }
      this._fields = Array.from(s);
    }
    inject(e, s, n) {
      for (let r of this._propagators)
        try {
          r.inject(e, s, n);
        } catch (a) {
          Hs.diag.warn(`Failed to inject with ${r.constructor.name}. Err: ${a.message}`);
        }
    }
    extract(e, s, n) {
      return this._propagators.reduce((r, a) => {
        try {
          return a.extract(r, s, n);
        } catch (l) {
          Hs.diag.warn(`Failed to extract with ${a.constructor.name}. Err: ${l.message}`);
        }
        return r;
      }, e);
    }
    fields() {
      return this._fields.slice();
    }
  }
  PT.CompositePropagator = IT;
});
var UT = x(function (DT) {
  Object.defineProperty(DT, "__esModule", { value: !0 });
  DT.validateValue = DT.validateKey = void 0;
  var Dr = "[_0-9a-z-*/]",
    oB = `[a-z]${Dr}{0,255}`,
    aB = `[a-z0-9]${Dr}{0,240}@[a-z]${Dr}{0,13}`,
    iB = new RegExp(`^(?:${oB}|${aB})$`),
    lB = /^[ -~]{0,255}[!-~]$/,
    dB = /,|=/;
  function cB(e) {
    return iB.test(e);
  }
  DT.validateKey = cB;
  function hB(e) {
    return lB.test(e) && !dB.test(e);
  }
  DT.validateValue = hB;
});
var Ur = x(function (GT) {
  Object.defineProperty(GT, "__esModule", { value: !0 });
  GT.TraceState = void 0;
  var we = UT(),
    pB = 32,
    VT = 512,
    jT = ",",
    qT = "=";
  class Lr {
    _length;
    _rawTraceState;
    _internalState;
    constructor(e) {
      ((this._rawTraceState = typeof e === "string" ? e : ""),
        (this._length = this._rawTraceState.length));
    }
    set(e, s) {
      if (!we.validateKey(e) || !we.validateValue(s)) return this;
      let n = this._getState(),
        r = n.get(e),
        a = this._length;
      if (typeof r === "string") a += s.length - r.length;
      else a += e.length + s.length + (n.size > 0 ? 2 : 1);
      if (a > VT) return this;
      let l = new Map(n);
      return (l.delete(e), l.set(e, s), this._fromState(l, a));
    }
    unset(e) {
      let s = this._getState(),
        n = s.get(e);
      if (typeof n !== "string") return this;
      let r = this._length - (e.length + n.length + 1);
      if (s.size > 1) r = r - 1;
      let a = new Map(s);
      return (a.delete(e), this._fromState(a, r));
    }
    get(e) {
      return this._getState().get(e);
    }
    serialize() {
      let e = "",
        s = 0;
      for (let n of this._getState()) {
        if (s > 0) e = jT + e;
        ((e = `${n[0]}${qT}${n[1]}` + e), s++);
      }
      return e;
    }
    _getState() {
      if (this._internalState) return this._internalState;
      let e = this._rawTraceState.split(jT),
        s = new Map(),
        n = 0;
      for (let r of e) {
        let a = r.trim(),
          l = a.indexOf(qT);
        if (l === -1) continue;
        let c = a.slice(0, l),
          _ = a.slice(l + 1);
        if (!we.validateKey(c) || !we.validateValue(_)) continue;
        let h = n + a.length + (s.size > 0 ? 1 : 0);
        if (h > VT) continue;
        if ((s.set(c, _), (n = h), s.size >= pB)) break;
      }
      return (
        (this._length = n),
        (this._internalState = new Map(Array.from(s.entries()).reverse())),
        this._internalState
      );
    }
    _fromState(e, s) {
      let n = Object.create(Lr.prototype);
      return ((n._internalState = e), (n._length = s), n);
    }
  }
  GT.TraceState = Lr;
});
var XT = x(function (YT) {
  Object.defineProperty(YT, "__esModule", { value: !0 });
  YT.W3CTraceContextPropagator =
    YT.parseTraceParent =
    YT.TRACE_STATE_HEADER =
    YT.TRACE_PARENT_HEADER =
      void 0;
  var ye = fl(),
    KT = xt(),
    HT = Ur();
  YT.TRACE_PARENT_HEADER = "traceparent";
  YT.TRACE_STATE_HEADER = "tracestate";
  var mB = "00",
    _B = "(?!ff)[\\da-f]{2}",
    gB = "(?![0]{32})[\\da-f]{32}",
    fB = "(?![0]{16})[\\da-f]{16}",
    bB = "[\\da-f]{2}",
    EB = new RegExp(`^\\s?(${_B})-(${gB})-(${fB})-(${bB})(-.*)?\\s?$`);
  function FT(e) {
    let s = EB.exec(e);
    if (!s) return null;
    if (s[1] === "00" && s[5]) return null;
    return { traceId: s[2], spanId: s[3], traceFlags: parseInt(s[4], 16) };
  }
  YT.parseTraceParent = FT;
  class WT {
    inject(e, s, n) {
      let r = ye.trace.getSpanContext(e);
      if (!r || KT.isTracingSuppressed(e) || !ye.isSpanContextValid(r)) return;
      let a = `${mB}-${r.traceId}-${r.spanId}-0${Number(r.traceFlags || ye.TraceFlags.NONE).toString(16)}`;
      if ((n.set(s, YT.TRACE_PARENT_HEADER, a), r.traceState))
        n.set(s, YT.TRACE_STATE_HEADER, r.traceState.serialize());
    }
    extract(e, s, n) {
      let r = n.get(s, YT.TRACE_PARENT_HEADER);
      if (!r) return e;
      let a = Array.isArray(r) ? r[0] : r;
      if (typeof a !== "string") return e;
      let l = FT(a);
      if (!l) return e;
      l.isRemote = !0;
      let c = n.get(s, YT.TRACE_STATE_HEADER);
      if (c) {
        let _ = Array.isArray(c) ? c.join(",") : c;
        l.traceState = new HT.TraceState(typeof _ === "string" ? _ : void 0);
      }
      return ye.trace.setSpanContext(e, l);
    }
    fields() {
      return [YT.TRACE_PARENT_HEADER, YT.TRACE_STATE_HEADER];
    }
  }
  YT.W3CTraceContextPropagator = WT;
});
var tw = x(function (ZT) {
  Object.defineProperty(ZT, "__esModule", { value: !0 });
  ZT.getRPCMetadata = ZT.deleteRPCMetadata = ZT.setRPCMetadata = ZT.RPCType = void 0;
  var JT = fl(),
    Vr = JT.createContextKey("OpenTelemetry SDK Context Key RPC_METADATA"),
    TB;
  (function (e) {
    e.HTTP = "http";
  })((TB = ZT.RPCType || (ZT.RPCType = {})));
  function wB(e, s) {
    return e.setValue(Vr, s);
  }
  ZT.setRPCMetadata = wB;
  function yB(e) {
    return e.deleteValue(Vr);
  }
  ZT.deleteRPCMetadata = yB;
  function AB(e) {
    return e.getValue(Vr);
  }
  ZT.getRPCMetadata = AB;
});
var lw = x(function (aw) {
  Object.defineProperty(aw, "__esModule", { value: !0 });
  aw.isPlainObject = void 0;
  var kB = "[object Object]",
    zB = "[object Null]",
    CB = "[object Undefined]",
    OB = Function.prototype,
    sw = OB.toString,
    NB = sw.call(Object),
    { getPrototypeOf: IB, prototype: nw } = Object,
    rw = nw.hasOwnProperty,
    Le = Symbol ? Symbol.toStringTag : void 0,
    ow = nw.toString;
  function PB(e) {
    if (!MB(e) || xB(e) !== kB) return !1;
    let s = IB(e);
    if (s === null) return !0;
    let n = rw.call(s, "constructor") && s.constructor;
    return typeof n == "function" && n instanceof n && sw.call(n) === NB;
  }
  aw.isPlainObject = PB;
  function MB(e) {
    return e != null && typeof e == "object";
  }
  function xB(e) {
    if (e == null) return e === void 0 ? CB : zB;
    return Le && Le in Object(e) ? DB(e) : LB(e);
  }
  function DB(e) {
    let s = rw.call(e, Le),
      n = e[Le],
      r = !1;
    try {
      ((e[Le] = void 0), (r = !0));
    } catch {}
    let a = ow.call(e);
    if (r)
      if (s) e[Le] = n;
      else delete e[Le];
    return a;
  }
  function LB(e) {
    return ow.call(e);
  }
});
var mw = x(function (uw) {
  Object.defineProperty(uw, "__esModule", { value: !0 });
  uw.merge = void 0;
  var $s = lw(),
    UB = 20;
  function VB(...e) {
    let s = e.shift(),
      n = new WeakMap();
    while (e.length > 0) s = cw(s, e.shift(), 0, n);
    return s;
  }
  uw.merge = VB;
  function jr(e) {
    if (Xs(e)) return e.slice();
    return e;
  }
  function cw(e, s, n = 0, r) {
    let a;
    if (n > UB) return;
    if ((n++, Ys(e) || Ys(s) || hw(s))) a = jr(s);
    else if (Xs(e)) {
      if (((a = e.slice()), Xs(s))) for (let l = 0, c = s.length; l < c; l++) a.push(jr(s[l]));
      else if (Ut(s)) {
        let l = Object.keys(s);
        for (let c = 0, _ = l.length; c < _; c++) {
          let h = l[c];
          if (h === "__proto__" || h === "constructor" || h === "prototype") continue;
          a[h] = jr(s[h]);
        }
      }
    } else if (Ut(e))
      if (Ut(s)) {
        if (!jB(e, s)) return s;
        a = Object.assign({}, e);
        let l = Object.keys(s);
        for (let c = 0, _ = l.length; c < _; c++) {
          let h = l[c];
          if (h === "__proto__" || h === "constructor" || h === "prototype") continue;
          let f = s[h];
          if (Ys(f))
            if (typeof f > "u") delete a[h];
            else a[h] = f;
          else {
            let S = a[h],
              z = f;
            if (dw(e, h, r) || dw(s, h, r)) delete a[h];
            else {
              if (Ut(S) && Ut(z)) {
                let N = r.get(S) || [],
                  y = r.get(z) || [];
                (N.push({ obj: e, key: h }), y.push({ obj: s, key: h }), r.set(S, N), r.set(z, y));
              }
              a[h] = cw(a[h], f, n, r);
            }
          }
        }
      } else a = s;
    return a;
  }
  function dw(e, s, n) {
    let r = n.get(e[s]) || [];
    for (let a = 0, l = r.length; a < l; a++) {
      let c = r[a];
      if (c.key === s && c.obj === e) return !0;
    }
    return !1;
  }
  function Xs(e) {
    return Array.isArray(e);
  }
  function hw(e) {
    return typeof e === "function";
  }
  function Ut(e) {
    return !Ys(e) && !Xs(e) && !hw(e) && typeof e === "object";
  }
  function Ys(e) {
    return (
      typeof e === "string" ||
      typeof e === "number" ||
      typeof e === "boolean" ||
      typeof e > "u" ||
      e instanceof Date ||
      e instanceof RegExp ||
      e === null
    );
  }
  function jB(e, s) {
    if (!$s.isPlainObject(e) || !$s.isPlainObject(s)) return !1;
    return !0;
  }
});
var fw = x(function (_w) {
  Object.defineProperty(_w, "__esModule", { value: !0 });
  _w.callWithTimeout = _w.TimeoutError = void 0;
  class Qs extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, Qs.prototype);
    }
  }
  _w.TimeoutError = Qs;
  function qB(e, s) {
    let n,
      r = new Promise(function (l, c) {
        n = setTimeout(function () {
          c(new Qs("Operation timed out."));
        }, s);
      });
    return Promise.race([e, r]).then(
      (a) => (clearTimeout(n), a),
      (a) => {
        throw (clearTimeout(n), a);
      }
    );
  }
  _w.callWithTimeout = qB;
});
var Tw = x(function (Ew) {
  Object.defineProperty(Ew, "__esModule", { value: !0 });
  Ew.isUrlIgnored = Ew.urlMatches = void 0;
  function bw(e, s) {
    if (typeof s === "string") return e === s;
    else return !!e.match(s);
  }
  Ew.urlMatches = bw;
  function BB(e, s) {
    if (!s) return !1;
    for (let n of s) if (bw(e, n)) return !0;
    return !1;
  }
  Ew.isUrlIgnored = BB;
});
var Rw = x(function (yw) {
  Object.defineProperty(yw, "__esModule", { value: !0 });
  yw.Deferred = void 0;
  class ww {
    _promise;
    _resolve;
    _reject;
    constructor() {
      this._promise = new Promise((e, s) => {
        ((this._resolve = e), (this._reject = s));
      });
    }
    get promise() {
      return this._promise;
    }
    resolve(e) {
      this._resolve(e);
    }
    reject(e) {
      this._reject(e);
    }
  }
  yw.Deferred = ww;
});
var Iw = x(function (Cw) {
  Object.defineProperty(Cw, "__esModule", { value: !0 });
  Cw.BindOnceFuture = void 0;
  var vw = Rw();
  class kw {
    _isCalled = !1;
    _deferred = new vw.Deferred();
    _callback;
    _that;
    constructor(e, s) {
      ((this._callback = e), (this._that = s));
    }
    get isCalled() {
      return this._isCalled;
    }
    get promise() {
      return this._deferred.promise;
    }
    call(...e) {
      if (!this._isCalled) {
        this._isCalled = !0;
        try {
          Promise.resolve(this._callback.call(this._that, ...e)).then(
            (s) => this._deferred.resolve(s),
            (s) => this._deferred.reject(s)
          );
        } catch (s) {
          this._deferred.reject(s);
        }
      }
      return this._deferred.promise;
    }
  }
  Cw.BindOnceFuture = kw;
});
var Dw = x(function (Mw) {
  Object.defineProperty(Mw, "__esModule", { value: !0 });
  Mw.diagLogLevelFromString = void 0;
  var V = fl(),
    Pw = {
      ALL: V.DiagLogLevel.ALL,
      VERBOSE: V.DiagLogLevel.VERBOSE,
      DEBUG: V.DiagLogLevel.DEBUG,
      INFO: V.DiagLogLevel.INFO,
      WARN: V.DiagLogLevel.WARN,
      ERROR: V.DiagLogLevel.ERROR,
      NONE: V.DiagLogLevel.NONE
    };
  function HB(e) {
    if (e == null) return;
    let s = Pw[e.toUpperCase()];
    if (s == null)
      return (
        V.diag.warn(`Unknown log level "${e}", expected one of ${Object.keys(Pw)}, using default`),
        V.DiagLogLevel.INFO
      );
    return s;
  }
  Mw.diagLogLevelFromString = HB;
});
var jw = x(function (Uw) {
  Object.defineProperty(Uw, "__esModule", { value: !0 });
  Uw._export = void 0;
  var Js = fl(),
    Lw = xt();
  function FB(e, s) {
    return new Promise((n) => {
      Js.context.with(Lw.suppressTracing(Js.context.active()), () => {
        e.export(s, n);
      });
    });
  }
  Uw._export = FB;
});
var Vm = x(function (w) {
  Object.defineProperty(w, "__esModule", { value: !0 });
  w.internal =
    w.diagLogLevelFromString =
    w.BindOnceFuture =
    w.urlMatches =
    w.isUrlIgnored =
    w.callWithTimeout =
    w.TimeoutError =
    w.merge =
    w.TraceState =
    w.unsuppressTracing =
    w.suppressTracing =
    w.isTracingSuppressed =
    w.setRPCMetadata =
    w.getRPCMetadata =
    w.deleteRPCMetadata =
    w.RPCType =
    w.parseTraceParent =
    w.W3CTraceContextPropagator =
    w.TRACE_STATE_HEADER =
    w.TRACE_PARENT_HEADER =
    w.CompositePropagator =
    w.otperformance =
    w.getStringListFromEnv =
    w.getNumberFromEnv =
    w.getBooleanFromEnv =
    w.getStringFromEnv =
    w._globalThis =
    w.SDK_INFO =
    w.parseKeyPairsIntoRecord =
    w.ExportResultCode =
    w.unrefTimer =
    w.timeInputToHrTime =
    w.millisToHrTime =
    w.isTimeInputHrTime =
    w.isTimeInput =
    w.hrTimeToTimeStamp =
    w.hrTimeToNanoseconds =
    w.hrTimeToMilliseconds =
    w.hrTimeToMicroseconds =
    w.hrTimeDuration =
    w.hrTime =
    w.getTimeOrigin =
    w.addHrTimes =
    w.loggingErrorHandler =
    w.setGlobalErrorHandler =
    w.globalErrorHandler =
    w.sanitizeAttributes =
    w.isAttributeValue =
    w.AnchoredClock =
    w.W3CBaggagePropagator =
      void 0;
  var WB = Iu();
  Object.defineProperty(w, "W3CBaggagePropagator", {
    enumerable: !0,
    get: function () {
      return WB.W3CBaggagePropagator;
    }
  });
  var YB = Du();
  Object.defineProperty(w, "AnchoredClock", {
    enumerable: !0,
    get: function () {
      return YB.AnchoredClock;
    }
  });
  var qw = Ku();
  Object.defineProperty(w, "isAttributeValue", {
    enumerable: !0,
    get: function () {
      return qw.isAttributeValue;
    }
  });
  Object.defineProperty(w, "sanitizeAttributes", {
    enumerable: !0,
    get: function () {
      return qw.sanitizeAttributes;
    }
  });
  var Gw = Ju();
  Object.defineProperty(w, "globalErrorHandler", {
    enumerable: !0,
    get: function () {
      return Gw.globalErrorHandler;
    }
  });
  Object.defineProperty(w, "setGlobalErrorHandler", {
    enumerable: !0,
    get: function () {
      return Gw.setGlobalErrorHandler;
    }
  });
  var $B = Nr();
  Object.defineProperty(w, "loggingErrorHandler", {
    enumerable: !0,
    get: function () {
      return $B.loggingErrorHandler;
    }
  });
  var re = vT();
  Object.defineProperty(w, "addHrTimes", {
    enumerable: !0,
    get: function () {
      return re.addHrTimes;
    }
  });
  Object.defineProperty(w, "getTimeOrigin", {
    enumerable: !0,
    get: function () {
      return re.getTimeOrigin;
    }
  });
  Object.defineProperty(w, "hrTime", {
    enumerable: !0,
    get: function () {
      return re.hrTime;
    }
  });
  Object.defineProperty(w, "hrTimeDuration", {
    enumerable: !0,
    get: function () {
      return re.hrTimeDuration;
    }
  });
  Object.defineProperty(w, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: function () {
      return re.hrTimeToMicroseconds;
    }
  });
  Object.defineProperty(w, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: function () {
      return re.hrTimeToMilliseconds;
    }
  });
  Object.defineProperty(w, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: function () {
      return re.hrTimeToNanoseconds;
    }
  });
  Object.defineProperty(w, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: function () {
      return re.hrTimeToTimeStamp;
    }
  });
  Object.defineProperty(w, "isTimeInput", {
    enumerable: !0,
    get: function () {
      return re.isTimeInput;
    }
  });
  Object.defineProperty(w, "isTimeInputHrTime", {
    enumerable: !0,
    get: function () {
      return re.isTimeInputHrTime;
    }
  });
  Object.defineProperty(w, "millisToHrTime", {
    enumerable: !0,
    get: function () {
      return re.millisToHrTime;
    }
  });
  Object.defineProperty(w, "timeInputToHrTime", {
    enumerable: !0,
    get: function () {
      return re.timeInputToHrTime;
    }
  });
  var XB = CT();
  Object.defineProperty(w, "unrefTimer", {
    enumerable: !0,
    get: function () {
      return XB.unrefTimer;
    }
  });
  var QB = NT();
  Object.defineProperty(w, "ExportResultCode", {
    enumerable: !0,
    get: function () {
      return QB.ExportResultCode;
    }
  });
  var JB = Or();
  Object.defineProperty(w, "parseKeyPairsIntoRecord", {
    enumerable: !0,
    get: function () {
      return JB.parseKeyPairsIntoRecord;
    }
  });
  var Ve = Pr();
  Object.defineProperty(w, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return Ve.SDK_INFO;
    }
  });
  Object.defineProperty(w, "_globalThis", {
    enumerable: !0,
    get: function () {
      return Ve._globalThis;
    }
  });
  Object.defineProperty(w, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Ve.getStringFromEnv;
    }
  });
  Object.defineProperty(w, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Ve.getBooleanFromEnv;
    }
  });
  Object.defineProperty(w, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Ve.getNumberFromEnv;
    }
  });
  Object.defineProperty(w, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Ve.getStringListFromEnv;
    }
  });
  Object.defineProperty(w, "otperformance", {
    enumerable: !0,
    get: function () {
      return Ve.otperformance;
    }
  });
  var ZB = xT();
  Object.defineProperty(w, "CompositePropagator", {
    enumerable: !0,
    get: function () {
      return ZB.CompositePropagator;
    }
  });
  var Zs = XT();
  Object.defineProperty(w, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: function () {
      return Zs.TRACE_PARENT_HEADER;
    }
  });
  Object.defineProperty(w, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: function () {
      return Zs.TRACE_STATE_HEADER;
    }
  });
  Object.defineProperty(w, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: function () {
      return Zs.W3CTraceContextPropagator;
    }
  });
  Object.defineProperty(w, "parseTraceParent", {
    enumerable: !0,
    get: function () {
      return Zs.parseTraceParent;
    }
  });
  var en = tw();
  Object.defineProperty(w, "RPCType", {
    enumerable: !0,
    get: function () {
      return en.RPCType;
    }
  });
  Object.defineProperty(w, "deleteRPCMetadata", {
    enumerable: !0,
    get: function () {
      return en.deleteRPCMetadata;
    }
  });
  Object.defineProperty(w, "getRPCMetadata", {
    enumerable: !0,
    get: function () {
      return en.getRPCMetadata;
    }
  });
  Object.defineProperty(w, "setRPCMetadata", {
    enumerable: !0,
    get: function () {
      return en.setRPCMetadata;
    }
  });
  var qr = xt();
  Object.defineProperty(w, "isTracingSuppressed", {
    enumerable: !0,
    get: function () {
      return qr.isTracingSuppressed;
    }
  });
  Object.defineProperty(w, "suppressTracing", {
    enumerable: !0,
    get: function () {
      return qr.suppressTracing;
    }
  });
  Object.defineProperty(w, "unsuppressTracing", {
    enumerable: !0,
    get: function () {
      return qr.unsuppressTracing;
    }
  });
  var eK = Ur();
  Object.defineProperty(w, "TraceState", {
    enumerable: !0,
    get: function () {
      return eK.TraceState;
    }
  });
  var tK = mw();
  Object.defineProperty(w, "merge", {
    enumerable: !0,
    get: function () {
      return tK.merge;
    }
  });
  var Bw = fw();
  Object.defineProperty(w, "TimeoutError", {
    enumerable: !0,
    get: function () {
      return Bw.TimeoutError;
    }
  });
  Object.defineProperty(w, "callWithTimeout", {
    enumerable: !0,
    get: function () {
      return Bw.callWithTimeout;
    }
  });
  var Kw = Tw();
  Object.defineProperty(w, "isUrlIgnored", {
    enumerable: !0,
    get: function () {
      return Kw.isUrlIgnored;
    }
  });
  Object.defineProperty(w, "urlMatches", {
    enumerable: !0,
    get: function () {
      return Kw.urlMatches;
    }
  });
  var sK = Iw();
  Object.defineProperty(w, "BindOnceFuture", {
    enumerable: !0,
    get: function () {
      return sK.BindOnceFuture;
    }
  });
  var nK = Dw();
  Object.defineProperty(w, "diagLogLevelFromString", {
    enumerable: !0,
    get: function () {
      return nK.diagLogLevelFromString;
    }
  });
  var Hw = jw();
  w.internal = { _export: Hw._export };
});
var Br = x(function (Ww) {
  Object.defineProperty(Ww, "__esModule", { value: !0 });
  Ww._clearDefaultServiceNameCache = Ww.defaultServiceName = void 0;
  var Vt;
  function rK() {
    if (Vt === void 0)
      try {
        let e = globalThis.process.argv0;
        Vt = e ? `unknown_service:${e}` : "unknown_service";
      } catch {
        Vt = "unknown_service";
      }
    return Vt;
  }
  Ww.defaultServiceName = rK;
  function oK() {
    Vt = void 0;
  }
  Ww._clearDefaultServiceNameCache = oK;
});
var Qw = x(function ($w) {
  Object.defineProperty($w, "__esModule", { value: !0 });
  $w.isPromiseLike = void 0;
  var iK = (e) => e !== null && typeof e === "object" && typeof e.then === "function";
  $w.isPromiseLike = iK;
});
var Hr = x(function (ey) {
  Object.defineProperty(ey, "__esModule", { value: !0 });
  ey.defaultResource =
    ey.emptyResource =
    ey.resourceFromDetectedResource =
    ey.resourceFromAttributes =
      void 0;
  var ue = fl(),
    dt = Vm(),
    J = aqe(),
    Zw = Br(),
    he = Qw();
  class jt {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(e, s) {
      let n = new jt({}, s);
      return (
        (n._rawAttributes = Jw(e)),
        (n._asyncAttributesPending = e.filter(([r, a]) => he.isPromiseLike(a)).length > 0),
        n
      );
    }
    constructor(e, s) {
      let n = e.attributes ?? {};
      ((this._rawAttributes = Object.entries(n).map(([r, a]) => {
        if (he.isPromiseLike(a)) this._asyncAttributesPending = !0;
        return [r, a];
      })),
        (this._rawAttributes = Jw(this._rawAttributes)),
        (this._schemaUrl = hK(s?.schemaUrl)));
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (!this.asyncAttributesPending) return;
      for (let e = 0; e < this._rawAttributes.length; e++) {
        let [s, n] = this._rawAttributes[e];
        this._rawAttributes[e] = [s, he.isPromiseLike(n) ? await n : n];
      }
      this._asyncAttributesPending = !1;
    }
    get attributes() {
      if (this.asyncAttributesPending)
        ue.diag.error("Accessing resource attributes before async attributes settled");
      if (this._memoizedAttributes) return this._memoizedAttributes;
      let e = {};
      for (let [s, n] of this._rawAttributes) {
        if (he.isPromiseLike(n)) {
          ue.diag.debug(`Unsettled resource attribute ${s} skipped`);
          continue;
        }
        if (n != null) e[s] ??= n;
      }
      if (!this._asyncAttributesPending) this._memoizedAttributes = e;
      return e;
    }
    getRawAttributes() {
      return this._rawAttributes;
    }
    get schemaUrl() {
      return this._schemaUrl;
    }
    merge(e) {
      if (e == null) return this;
      let s = uK(this, e),
        n = s ? { schemaUrl: s } : void 0;
      return jt.FromAttributeList([...e.getRawAttributes(), ...this.getRawAttributes()], n);
    }
  }
  function Kr(e, s) {
    return jt.FromAttributeList(Object.entries(e), s);
  }
  ey.resourceFromAttributes = Kr;
  function lK(e, s) {
    return new jt(e, s);
  }
  ey.resourceFromDetectedResource = lK;
  function dK() {
    return Kr({});
  }
  ey.emptyResource = dK;
  function cK() {
    return Kr({
      [J.ATTR_SERVICE_NAME]: Zw.defaultServiceName(),
      [J.ATTR_TELEMETRY_SDK_LANGUAGE]: dt.SDK_INFO[J.ATTR_TELEMETRY_SDK_LANGUAGE],
      [J.ATTR_TELEMETRY_SDK_NAME]: dt.SDK_INFO[J.ATTR_TELEMETRY_SDK_NAME],
      [J.ATTR_TELEMETRY_SDK_VERSION]: dt.SDK_INFO[J.ATTR_TELEMETRY_SDK_VERSION]
    });
  }
  ey.defaultResource = cK;
  function Jw(e) {
    return e.map(([s, n]) => {
      if (he.isPromiseLike(n))
        return [
          s,
          n.catch((r) => {
            ue.diag.debug("promise rejection for resource attribute: %s - %s", s, r);
            return;
          })
        ];
      return [s, n];
    });
  }
  function hK(e) {
    if (typeof e === "string" || e === void 0) return e;
    ue.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e);
    return;
  }
  function uK(e, s) {
    let n = e?.schemaUrl,
      r = s?.schemaUrl,
      a = n === void 0 || n === "",
      l = r === void 0 || r === "";
    if (a) return r;
    if (l) return n;
    if (n === r) return n;
    ue.diag.warn(
      'Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.',
      n,
      r
    );
    return;
  }
});
var ry = x(function (sy) {
  Object.defineProperty(sy, "__esModule", { value: !0 });
  sy.detectResources = void 0;
  var tn = fl(),
    ct = Hr(),
    gK = (e = {}) =>
      (e.detectors || [])
        .map((n) => {
          try {
            let r = ct.resourceFromDetectedResource(n.detect(e));
            return (tn.diag.debug(`${n.constructor.name} found resource.`, r), r);
          } catch (r) {
            return (
              tn.diag.debug(`${n.constructor.name} failed: ${r.message}`),
              ct.emptyResource()
            );
          }
        })
        .reduce((n, r) => n.merge(r), ct.emptyResource());
  sy.detectResources = gK;
});
var hy = x(function (dy) {
  Object.defineProperty(dy, "__esModule", { value: !0 });
  dy.envDetector = void 0;
  var ay = fl(),
    iy = aqe(),
    sn = Vm();
  class ly {
    _MAX_LENGTH = 255;
    _COMMA_SEPARATOR = ",";
    _LABEL_KEY_VALUE_SPLITTER = "=";
    detect(e) {
      let s = {},
        n = sn.getStringFromEnv("OTEL_RESOURCE_ATTRIBUTES"),
        r = sn.getStringFromEnv("OTEL_SERVICE_NAME");
      if (n)
        try {
          let a = this._parseResourceAttributes(n);
          Object.assign(s, a);
        } catch (a) {
          ay.diag.debug(`EnvDetector failed: ${a instanceof Error ? a.message : a}`);
        }
      if (r) s[iy.ATTR_SERVICE_NAME] = r;
      return { attributes: s };
    }
    _parseResourceAttributes(e) {
      if (!e) return {};
      let s = {},
        n = e.split(this._COMMA_SEPARATOR).filter((r) => r.trim() !== "");
      for (let r of n) {
        let a = r.split(this._LABEL_KEY_VALUE_SPLITTER);
        if (a.length !== 2)
          throw Error(
            `Invalid format for OTEL_RESOURCE_ATTRIBUTES: "${r}". Expected format: key=value. The ',' and '=' characters must be percent-encoded in keys and values.`
          );
        let [l, c] = a,
          _ = l.trim(),
          h = c.trim();
        if (_.length === 0)
          throw Error(`Invalid OTEL_RESOURCE_ATTRIBUTES: empty attribute key in "${r}".`);
        let f, S;
        try {
          ((f = decodeURIComponent(_)), (S = decodeURIComponent(h)));
        } catch (z) {
          throw Error(
            `Failed to percent-decode OTEL_RESOURCE_ATTRIBUTES entry "${r}": ${z instanceof Error ? z.message : z}`
          );
        }
        if (f.length > this._MAX_LENGTH)
          throw Error(
            `Attribute key exceeds the maximum length of ${this._MAX_LENGTH} characters: "${f}".`
          );
        if (S.length > this._MAX_LENGTH)
          throw Error(
            `Attribute value exceeds the maximum length of ${this._MAX_LENGTH} characters for key "${f}".`
          );
        s[f] = S;
      }
      return s;
    }
  }
  dy.envDetector = new ly();
});
var Gt = x(function (uy) {
  Object.defineProperty(uy, "__esModule", { value: !0 });
  uy.ATTR_WEBENGINE_VERSION =
    uy.ATTR_WEBENGINE_NAME =
    uy.ATTR_WEBENGINE_DESCRIPTION =
    uy.ATTR_SERVICE_NAMESPACE =
    uy.ATTR_SERVICE_INSTANCE_ID =
    uy.ATTR_PROCESS_RUNTIME_VERSION =
    uy.ATTR_PROCESS_RUNTIME_NAME =
    uy.ATTR_PROCESS_RUNTIME_DESCRIPTION =
    uy.ATTR_PROCESS_PID =
    uy.ATTR_PROCESS_OWNER =
    uy.ATTR_PROCESS_EXECUTABLE_PATH =
    uy.ATTR_PROCESS_EXECUTABLE_NAME =
    uy.ATTR_PROCESS_COMMAND_ARGS =
    uy.ATTR_PROCESS_COMMAND =
    uy.ATTR_OS_VERSION =
    uy.ATTR_OS_TYPE =
    uy.ATTR_K8S_POD_NAME =
    uy.ATTR_K8S_NAMESPACE_NAME =
    uy.ATTR_K8S_DEPLOYMENT_NAME =
    uy.ATTR_K8S_CLUSTER_NAME =
    uy.ATTR_HOST_TYPE =
    uy.ATTR_HOST_NAME =
    uy.ATTR_HOST_IMAGE_VERSION =
    uy.ATTR_HOST_IMAGE_NAME =
    uy.ATTR_HOST_IMAGE_ID =
    uy.ATTR_HOST_ID =
    uy.ATTR_HOST_ARCH =
    uy.ATTR_CONTAINER_NAME =
    uy.ATTR_CONTAINER_IMAGE_TAGS =
    uy.ATTR_CONTAINER_IMAGE_NAME =
    uy.ATTR_CONTAINER_ID =
    uy.ATTR_CLOUD_REGION =
    uy.ATTR_CLOUD_PROVIDER =
    uy.ATTR_CLOUD_AVAILABILITY_ZONE =
    uy.ATTR_CLOUD_ACCOUNT_ID =
      void 0;
  uy.ATTR_CLOUD_ACCOUNT_ID = "cloud.account.id";
  uy.ATTR_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
  uy.ATTR_CLOUD_PROVIDER = "cloud.provider";
  uy.ATTR_CLOUD_REGION = "cloud.region";
  uy.ATTR_CONTAINER_ID = "container.id";
  uy.ATTR_CONTAINER_IMAGE_NAME = "container.image.name";
  uy.ATTR_CONTAINER_IMAGE_TAGS = "container.image.tags";
  uy.ATTR_CONTAINER_NAME = "container.name";
  uy.ATTR_HOST_ARCH = "host.arch";
  uy.ATTR_HOST_ID = "host.id";
  uy.ATTR_HOST_IMAGE_ID = "host.image.id";
  uy.ATTR_HOST_IMAGE_NAME = "host.image.name";
  uy.ATTR_HOST_IMAGE_VERSION = "host.image.version";
  uy.ATTR_HOST_NAME = "host.name";
  uy.ATTR_HOST_TYPE = "host.type";
  uy.ATTR_K8S_CLUSTER_NAME = "k8s.cluster.name";
  uy.ATTR_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
  uy.ATTR_K8S_NAMESPACE_NAME = "k8s.namespace.name";
  uy.ATTR_K8S_POD_NAME = "k8s.pod.name";
  uy.ATTR_OS_TYPE = "os.type";
  uy.ATTR_OS_VERSION = "os.version";
  uy.ATTR_PROCESS_COMMAND = "process.command";
  uy.ATTR_PROCESS_COMMAND_ARGS = "process.command_args";
  uy.ATTR_PROCESS_EXECUTABLE_NAME = "process.executable.name";
  uy.ATTR_PROCESS_EXECUTABLE_PATH = "process.executable.path";
  uy.ATTR_PROCESS_OWNER = "process.owner";
  uy.ATTR_PROCESS_PID = "process.pid";
  uy.ATTR_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
  uy.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
  uy.ATTR_PROCESS_RUNTIME_VERSION = "process.runtime.version";
  uy.ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
  uy.ATTR_SERVICE_NAMESPACE = "service.namespace";
  uy.ATTR_WEBENGINE_DESCRIPTION = "webengine.description";
  uy.ATTR_WEBENGINE_NAME = "webengine.name";
  uy.ATTR_WEBENGINE_VERSION = "webengine.version";
});
var fy = x(function (_y) {
  Object.defineProperty(_y, "__esModule", { value: !0 });
  _y.getMachineId = void 0;
  var my = Fe("process"),
    je;
  async function QK() {
    if (!je)
      switch (my.platform) {
        case "darwin":
          je = (await import("./chunk-jbmpv7dk.js").then((m) => Ce(m.default))).getMachineId;
          break;
        case "linux":
          je = (await import("./chunk-4kt6s82s.js").then((m) => Ce(m.default))).getMachineId;
          break;
        case "freebsd":
          je = (await import("./chunk-qde9rdg5.js").then((m) => Ce(m.default))).getMachineId;
          break;
        case "win32":
          je = (await import("./chunk-p5eyfpv9.js").then((m) => Ce(m.default))).getMachineId;
          break;
        default:
          je = (await import("./chunk-qxsz0sd7.js").then((m) => Ce(m.default))).getMachineId;
          break;
      }
    return je();
  }
  _y.getMachineId = QK;
});
var Fr = x(function (by) {
  Object.defineProperty(by, "__esModule", { value: !0 });
  by.normalizeType = by.normalizeArch = void 0;
  var JK = (e) => {
    switch (e) {
      case "arm":
        return "arm32";
      case "ppc":
        return "ppc32";
      case "x64":
        return "amd64";
      default:
        return e;
    }
  };
  by.normalizeArch = JK;
  var ZK = (e) => {
    switch (e) {
      case "sunos":
        return "solaris";
      case "win32":
        return "windows";
      default:
        return e;
    }
  };
  by.normalizeType = ZK;
});
var Ry = x(function (yy) {
  Object.defineProperty(yy, "__esModule", { value: !0 });
  yy.hostDetector = void 0;
  var ht = Gt(),
    nn = Fe("os"),
    Sy = fy(),
    Ty = Fr();
  class wy {
    detect(e) {
      return {
        attributes: {
          [ht.ATTR_HOST_NAME]: nn.hostname(),
          [ht.ATTR_HOST_ARCH]: Ty.normalizeArch(nn.arch()),
          [ht.ATTR_HOST_ID]: Sy.getMachineId()
        }
      };
    }
  }
  yy.hostDetector = new wy();
});
var Oy = x(function (zy) {
  Object.defineProperty(zy, "__esModule", { value: !0 });
  zy.osDetector = void 0;
  var rn = Gt(),
    on = Fe("os"),
    vy = Fr();
  class ky {
    detect(e) {
      return {
        attributes: {
          [rn.ATTR_OS_TYPE]: vy.normalizeType(on.platform()),
          [rn.ATTR_OS_VERSION]: on.release()
        }
      };
    }
  }
  zy.osDetector = new ky();
});
var Ly = x(function (xy) {
  Object.defineProperty(xy, "__esModule", { value: !0 });
  xy.processDetector = void 0;
  var Iy = fl(),
    j = Gt(),
    Py = Fe("os");
  class My {
    detect(e) {
      let s = {
        [j.ATTR_PROCESS_PID]: process.pid,
        [j.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
        [j.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
        [j.ATTR_PROCESS_COMMAND_ARGS]: [
          process.argv[0],
          ...process.execArgv,
          ...process.argv.slice(1)
        ],
        [j.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
        [j.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
        [j.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
      };
      if (process.argv.length > 1) s[j.ATTR_PROCESS_COMMAND] = process.argv[1];
      try {
        let n = Py.userInfo();
        s[j.ATTR_PROCESS_OWNER] = n.username;
      } catch (n) {
        Iy.diag.debug(`error obtaining process owner: ${n}`);
      }
      return { attributes: s };
    }
  }
  xy.processDetector = new My();
});
var By = x(function (qy) {
  Object.defineProperty(qy, "__esModule", { value: !0 });
  qy.serviceInstanceIdDetector = void 0;
  var Uy = Gt(),
    Vy = Fe("crypto");
  class jy {
    detect(e) {
      return { attributes: { [Uy.ATTR_SERVICE_INSTANCE_ID]: Vy.randomUUID() } };
    }
  }
  qy.serviceInstanceIdDetector = new jy();
});
var Ky = x(function (ut) {
  Object.defineProperty(ut, "__esModule", { value: !0 });
  ut.serviceInstanceIdDetector = ut.processDetector = ut.osDetector = ut.hostDetector = void 0;
  var tH = Ry();
  Object.defineProperty(ut, "hostDetector", {
    enumerable: !0,
    get: function () {
      return tH.hostDetector;
    }
  });
  var sH = Oy();
  Object.defineProperty(ut, "osDetector", {
    enumerable: !0,
    get: function () {
      return sH.osDetector;
    }
  });
  var nH = Ly();
  Object.defineProperty(ut, "processDetector", {
    enumerable: !0,
    get: function () {
      return nH.processDetector;
    }
  });
  var rH = By();
  Object.defineProperty(ut, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return rH.serviceInstanceIdDetector;
    }
  });
});
var Hy = x(function (pt) {
  Object.defineProperty(pt, "__esModule", { value: !0 });
  pt.serviceInstanceIdDetector = pt.processDetector = pt.osDetector = pt.hostDetector = void 0;
  var an = Ky();
  Object.defineProperty(pt, "hostDetector", {
    enumerable: !0,
    get: function () {
      return an.hostDetector;
    }
  });
  Object.defineProperty(pt, "osDetector", {
    enumerable: !0,
    get: function () {
      return an.osDetector;
    }
  });
  Object.defineProperty(pt, "processDetector", {
    enumerable: !0,
    get: function () {
      return an.processDetector;
    }
  });
  Object.defineProperty(pt, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return an.serviceInstanceIdDetector;
    }
  });
});
var Yy = x(function (Fy) {
  Object.defineProperty(Fy, "__esModule", { value: !0 });
  Fy.noopDetector = Fy.NoopDetector = void 0;
  class Wr {
    detect() {
      return { attributes: {} };
    }
  }
  Fy.NoopDetector = Wr;
  Fy.noopDetector = new Wr();
});
var $y = x(function (Re) {
  Object.defineProperty(Re, "__esModule", { value: !0 });
  Re.noopDetector =
    Re.serviceInstanceIdDetector =
    Re.processDetector =
    Re.osDetector =
    Re.hostDetector =
    Re.envDetector =
      void 0;
  var lH = hy();
  Object.defineProperty(Re, "envDetector", {
    enumerable: !0,
    get: function () {
      return lH.envDetector;
    }
  });
  var ln = Hy();
  Object.defineProperty(Re, "hostDetector", {
    enumerable: !0,
    get: function () {
      return ln.hostDetector;
    }
  });
  Object.defineProperty(Re, "osDetector", {
    enumerable: !0,
    get: function () {
      return ln.osDetector;
    }
  });
  Object.defineProperty(Re, "processDetector", {
    enumerable: !0,
    get: function () {
      return ln.processDetector;
    }
  });
  Object.defineProperty(Re, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return ln.serviceInstanceIdDetector;
    }
  });
  var dH = Yy();
  Object.defineProperty(Re, "noopDetector", {
    enumerable: !0,
    get: function () {
      return dH.noopDetector;
    }
  });
});
var JEt = x(function (ae) {
  Object.defineProperty(ae, "__esModule", { value: !0 });
  ae.defaultServiceName =
    ae.emptyResource =
    ae.defaultResource =
    ae.resourceFromAttributes =
    ae.serviceInstanceIdDetector =
    ae.processDetector =
    ae.osDetector =
    ae.hostDetector =
    ae.envDetector =
    ae.detectResources =
      void 0;
  var hH = ry();
  Object.defineProperty(ae, "detectResources", {
    enumerable: !0,
    get: function () {
      return hH.detectResources;
    }
  });
  var Bt = $y();
  Object.defineProperty(ae, "envDetector", {
    enumerable: !0,
    get: function () {
      return Bt.envDetector;
    }
  });
  Object.defineProperty(ae, "hostDetector", {
    enumerable: !0,
    get: function () {
      return Bt.hostDetector;
    }
  });
  Object.defineProperty(ae, "osDetector", {
    enumerable: !0,
    get: function () {
      return Bt.osDetector;
    }
  });
  Object.defineProperty(ae, "processDetector", {
    enumerable: !0,
    get: function () {
      return Bt.processDetector;
    }
  });
  Object.defineProperty(ae, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return Bt.serviceInstanceIdDetector;
    }
  });
  var Yr = Hr();
  Object.defineProperty(ae, "resourceFromAttributes", {
    enumerable: !0,
    get: function () {
      return Yr.resourceFromAttributes;
    }
  });
  Object.defineProperty(ae, "defaultResource", {
    enumerable: !0,
    get: function () {
      return Yr.defaultResource;
    }
  });
  Object.defineProperty(ae, "emptyResource", {
    enumerable: !0,
    get: function () {
      return Yr.emptyResource;
    }
  });
  var uH = Br();
  Object.defineProperty(ae, "defaultServiceName", {
    enumerable: !0,
    get: function () {
      return uH.defaultServiceName;
    }
  });
});
var ER = /\s/;
function SR(e) {
  var s = e.length;
  while (s-- && ER.test(e.charAt(s))) ;
  return s;
}
var Ka = SR;
var TR = /^\s+/;
function wR(e) {
  return e ? e.slice(0, Ka(e) + 1).replace(TR, "") : e;
}
var Ha = wR;
var Fa = NaN,
  yR = /^[-+]0x[0-9a-f]+$/i,
  AR = /^0b[01]+$/i,
  RR = /^0o[0-7]+$/i,
  vR = parseInt;
function zR(e) {
  if (typeof e == "number") return e;
  if (Gse(e)) return Fa;
  if (RC(e)) {
    var s = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = RC(s) ? s + "" : s;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = Ha(e);
  var n = AR.test(e);
  return n || RR.test(e) ? vR(e.slice(2), n ? 2 : 8) : yR.test(e) ? Fa : +e;
}
var Mbn = zR;
var Wa = 1 / 0,
  CR = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
function OR(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = Mbn(e)), e === Wa || e === -Wa)) {
    var s = e < 0 ? -1 : 1;
    return s * CR;
  }
  return e === e ? e : 0;
}
var Ya = OR;
function NR(e) {
  var s = Ya(e),
    n = s % 1;
  return s === s ? (n ? s - n : s) : 0;
}
var Q4r = NR;
var IR = "Expected a function";
function PR(e, s) {
  var n;
  if (typeof s != "function") throw TypeError(IR);
  return (
    (e = Q4r(e)),
    function () {
      if (--e > 0) n = s.apply(this, arguments);
      if (e <= 1) s = void 0;
      return n;
    }
  );
}
var $a = PR;
function MR(e) {
  return $a(2, e);
}
var wb = MR;
async function dsi(e, s, n) {
  return;
}
function En() {
  return xee(i.AWS_REGION) || xee(i.AWS_DEFAULT_REGION);
}
function zEt() {
  return En() || "us-east-1";
}
function bn() {
  return `${i.AWS_CONFIG_FILE ?? ""}|${i.AWS_SHARED_CREDENTIALS_FILE ?? ""}|${i.AWS_PROFILE ?? ""}`;
}
class Xa {
  resolvedSharedConfigRegions = new Map();
  readAwsSharedConfigRegion = Qr(async () => {
    let e = bn(),
      s;
    try {
      let [n, r] = await Promise.all([
          import("./chunk-9sw6grtn.js").then((m) => Ce(m.default, 1)),
          import("./chunk-hdds2hdh.js").then((m) => Ce(m.default, 1))
        ]),
        a = n.loadConfig ?? n.default?.loadConfig,
        l = r.NODE_REGION_CONFIG_FILE_OPTIONS ?? r.default?.NODE_REGION_CONFIG_FILE_OPTIONS,
        c = await a(
          {
            environmentVariableSelector: () => {
              return;
            },
            configFileSelector: (_) => _.region,
            default: () => {
              return;
            }
          },
          l
        )();
      s = xee(c?.trim());
    } catch {
      s = void 0;
    }
    return (this.resolvedSharedConfigRegions.set(e, s), s);
  }, bn);
}
var xR = new W(() => new Xa());
function Qa() {
  return xR.of(U().host);
}
async function fI() {
  let e = En();
  if (e) return e;
  return (await Qa().readAwsSharedConfigRegion()) || zEt();
}
function nqe() {
  return C5o().region;
}
function C5o() {
  let e = En();
  if (e) return { region: e, source: "env" };
  let s = Qa().resolvedSharedConfigRegions.get(bn());
  if (s) return { region: s, source: "shared-config" };
  let n = !!(i.AWS_REGION || i.AWS_DEFAULT_REGION);
  return { region: zEt(), source: n ? "env-invalid" : "default" };
}
function k(e, s) {
  return Object.freeze({ name: e, header: s });
}
function Ja(e) {
  return Object.freeze({ name: e, header: null });
}
var UKt = k("claude_code", "claude-code-20250219"),
  mRe = k("oauth_auth", Bu),
  Dbn = k("interleaved_thinking", "interleaved-thinking-2025-05-14"),
  nE = k("long_context", "context-1m-2025-08-07"),
  Lue = k("context_management", "context-management-2025-06-27"),
  Nue = k("structured_outputs", "structured-outputs-2025-12-15"),
  Z4r = k("web_search", "web-search-2025-03-05"),
  R5o = k("tool_search", "advanced-tool-use-2025-11-20"),
  Crr = k("tool_search", "tool-search-tool-2025-10-19"),
  tbe = k("effort", "effort-2025-11-24"),
  eYr = k("task_budgets", "task-budgets-2026-03-13"),
  rqe = k("prompt_caching_scope", "prompt-caching-scope-2026-01-05"),
  nrt = k("prompt_caching_evict", "prompt-caching-evict-2026-05-12"),
  iM = k("cache_keepalive", "cache-keepalive-2026-09-03"),
  BKt = k("extended_cache_ttl", "extended-cache-ttl-2025-04-11"),
  Hbn = k("speed", "fast-mode-2026-02-01"),
  Lbn = k("redact_thinking", "redact-thinking-2026-02-12"),
  rrt = k("thinking_resumption", "thinking-resumption-2026-07-17"),
  aZ = k("thinking_token_count", "thinking-token-count-2026-05-13"),
  Mj = k("afk_mode", "afk-mode-2026-01-31"),
  jKt = k("advisor_tool", "advisor-tool-2026-03-01"),
  KEt = k("cache_diagnosis", "cache-diagnosis-2026-04-07"),
  x5o = k("context_hint", "context-hint-2026-04-09"),
  Nbn = k("mcp_servers", "mcp-servers-2025-12-04"),
  P5o = k("files_api", "files-api-2025-04-14"),
  I5o = k("environments", "environments-2025-11-01"),
  $bn = k("ccr_byoc", "ccr-byoc-2025-07-29"),
  pI = Ja("mid_conversation_system"),
  oqe = "mid-conversation-system-2026-04-07",
  Nz = k("per_message_effort", "per-turn-control-2026-07-01"),
  M5 = k("per_turn_timing", "timing-2026-09-09"),
  GS = k("mid_conv_tool_change", "mid-conversation-tool-changes-2026-07-01"),
  uS = k("inline_tools", "inline-tools-2026-09-15"),
  Dj = k("server_side_fallback", "server-side-fallback-2026-06-01"),
  Nw = k("server_side_fallback_category", "server-side-fallback-2026-07-01"),
  $z = k("fallback_credit", "fallback-credit-2026-06-01"),
  Rrr = k("mid_conv_cache_promotion_latch", "x-cc-internal-mid-conv-cache-promotion"),
  O5o = k("mid_conv_cache_promotion_ok_latch", "x-cc-internal-mid-conv-cache-promotion-ok"),
  Fbn = null,
  M5o = k("auto_mode_classifier", "auto-mode-classifier-2026-07-16"),
  iC = k("dangerous_tool_use", "dangerous-tool-use-2026-09-03"),
  DR = null,
  $ue = k("thinking_display_updates", "thinking-display-updates-2026-08-18"),
  D5o = Ja("thinking_display"),
  Fz = k("thinking_binding_controls", "thinking-binding-controls-2026-08-01"),
  Uz = k("message_threads", "message-threads-2026-08-12"),
  GV = k("mid_conversation_system_clear_at", "mid-conversation-system-clear-at-2026-08-21"),
  LR = Object.freeze(
    [
      UKt,
      mRe,
      Dbn,
      nE,
      Lue,
      Nue,
      Z4r,
      R5o,
      Crr,
      tbe,
      eYr,
      rqe,
      nrt,
      iM,
      BKt,
      Hbn,
      Lbn,
      rrt,
      aZ,
      Mj,
      jKt,
      KEt,
      x5o,
      Nbn,
      P5o,
      I5o,
      $bn,
      pI,
      Nz,
      M5,
      GS,
      uS,
      Dj,
      Nw,
      $z,
      Fbn,
      M5o,
      iC,
      DR,
      $ue,
      Uz,
      GV,
      Fz
    ].filter((e) => e !== null)
  ),
  Za = new Map(LR.filter((e) => e.header !== null).map((e) => [e.header, e]));
function VEt(e) {
  return Za.get(e);
}
function H5o(e) {
  return Za.get(e) ?? Object.freeze({ name: e, header: e });
}
function N$(e) {
  return e.filter((s) => s.header !== null).map((s) => s.header);
}
function nNe(e) {
  let s = N$(e);
  return s.length > 0 ? { betas: s } : {};
}
function WKt(e) {
  return e.toLowerCase().includes("afk-mode");
}
var Ubn = new Set([Dbn, nE, Crr]),
  GKt = new Set([UKt, Dbn, Lue, mRe]);
function Fue() {
  let e = Ae();
  return e === "firstParty" || qx(e) || e === "foundry";
}
function Hj() {
  return i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS || Lj();
}
function Lj() {
  return Ks("hipaa");
}
function tYr(e) {
  return Lj() ? void 0 : e;
}
function l_() {
  return Fue() && !Hj();
}
function qEt(e) {
  return jq(e, (s) => s.name === "CredentialsProviderError") !== void 0;
}
var UR =
  /ExpiredToken|InvalidSignature|SignatureDoesNotMatch|UnrecognizedClient|InvalidClientTokenId|security token.*(invalid|expired)|signature we calculated does not match|Bearer Token has expired|Authentication failed.*API Key|Missing required parameters in the API Key/i;
function gRe(e = i.ANTHROPIC_CUSTOM_HEADERS ?? "") {
  let s = [];
  for (let n of e.split(/\r?\n/)) {
    let r = n.indexOf(":"),
      a = r === -1 ? "" : n.slice(0, r).trim();
    if (a) s.push([a, n.slice(r + 1).trim()]);
  }
  return s;
}
function Ux() {
  return ti("x-api-key");
}
function zKt(e = {}) {
  let s = i.ANTHROPIC_API_KEY;
  if (
    s === void 0 ||
    Ux() ||
    Object.entries(e).some(([n, r]) => n.toLowerCase() === "x-api-key" && r !== void 0)
  )
    return;
  return { "X-Api-Key": s };
}
function Xoi() {
  return ti("authorization");
}
function L5o() {
  return gRe().map(([e]) => e);
}
function ti(e) {
  return L5o().some((s) => s.toLowerCase() === e);
}
function zS() {
  let e = { Authorization: void 0 };
  for (let [s] of gRe()) if (s.toLowerCase() === "authorization") e[s] = void 0;
  return e;
}
function ZU() {
  let e = {},
    s = Lj();
  for (let [n, r] of gRe()) {
    if (n.toLowerCase() !== "anthropic-beta") continue;
    let a = r
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
      l = a.filter((c) => !WKt(c));
    if (s) e[n] = void 0;
    else if (l.length !== a.length) e[n] = l.length > 0 ? l.join(",") : void 0;
    else delete e[n];
  }
  return e;
}
function nbe(e, s) {
  return UR.test(`${e ?? ""} ${s ?? ""}`);
}
var aM = {
  __auth: { provider: null, tokenCache: null, resolution: null, error: null, extraHeaders: {} }
};
function rNe() {
  let e = i.ANTHROPIC_AUTH_TOKEN;
  if (e) return `Bearer ${e}`;
  let s,
    n = Object.fromEntries(gRe());
  for (let [r, a] of Object.entries(n)) if (r.toLowerCase() === "authorization") s = a;
  return s || void 0;
}
function ei(e) {
  if (!e || typeof e !== "object") return !1;
  let s = e;
  return (
    typeof s.AccessKeyId === "string" &&
    typeof s.SecretAccessKey === "string" &&
    typeof s.SessionToken === "string" &&
    s.AccessKeyId.length > 0 &&
    s.SecretAccessKey.length > 0 &&
    s.SessionToken.length > 0
  );
}
function Joi(e) {
  if (!e || typeof e !== "object") return null;
  let s = e;
  if (ei(s.Credentials)) return s.Credentials;
  if (ei(s)) return s;
  return null;
}
var si = 30000;
function xrr() {
  return i.CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS ?? 60000;
}
async function N5o() {
  let { loadSharedConfigFiles: e } = await import("./chunk-kyswkxgg.js").then((m) =>
    Ce(m.default, 1)
  );
  await e({ ignoreCache: !0 }).catch(() => {
    return;
  });
  let [{ STSClient: s, GetCallerIdentityCommand: n }, r] = await Promise.all([
      import("./chunk-0k7jdy19.js"),
      fI()
    ]),
    a = new s({ region: r, ...(await E4e({ url: v4e(r), region: r, requestTimeoutMs: si })) });
  await Nt(a.send(new n({})), xrr(), "AWS STS");
}
async function Qoi() {
  let { loadSharedConfigFiles: e } = await import("./chunk-kyswkxgg.js").then((m) =>
      Ce(m.default, 1)
    ),
    s = await e().catch(() => {
      return;
    }),
    n = new Set(),
    r = i.AWS_PROFILE || "default";
  while (s !== void 0 && !n.has(r)) {
    n.add(r);
    let a = { ...s.configFile[r], ...s.credentialsFile[r] };
    if (a.credential_process) return !0;
    if (!a.source_profile) return !1;
    r = a.source_profile;
  }
  return !1;
}
async function Zoi() {
  try {
    t("Clearing AWS credential provider cache");
    let [{ fromIni: e }, s] = await Promise.all([import("./chunk-axg8eadd.js"), fI()]),
      n = await DZ({ url: v4e(s), requestTimeoutMs: si }),
      r = e({
        ignoreCache: !0,
        ...(n && {
          clientConfig: { requestHandler: n },
          parentClientConfig: { requestHandler: n, region: s }
        })
      });
    (await Nt(r(), xrr(), "AWS ini cache refresh"), t("AWS credential provider cache refreshed"));
  } catch (e) {
    t(`Failed to refresh AWS credential cache: ${d(e)}`);
  }
}
var VR = ["https://www.googleapis.com/auth/cloud-platform"];
async function KKt(e, s) {
  if (e.kind === "skip")
    return { getClient: () => ({ getRequestHeaders: async () => new Headers() }) };
  let { GoogleAuth: n } = await import("./chunk-835t7h02.js").then((m) => Ce(m.default, 1)),
    r = e.kind === "keyFile" ? e.path : void 0;
  return new n({
    scopes: VR,
    ...(r && { keyFilename: r }),
    ...(s && { projectId: s }),
    clientOptions: nYr()
  });
}
function nYr() {
  return { transporterOptions: { fetchImplementation: jR } };
}
async function jR(e, s) {
  let n = tP(void 0),
    r = s?.agent?.options;
  if (!r?.cert && !r?.key) return fetch(e, { ...s, ...n });
  let a = { cert: r.cert, key: r.key, ...(r.ca && { ca: r.ca }) };
  return fetch(e, { ...s, tls: { ...n.tls, ...a } });
}
function hRe(e) {
  let s = e._authClientPromise;
  if (s && typeof s.catch === "function") s.catch(() => {});
  return e;
}
function yRe(e = !1) {
  if (e) return { ...ZU(), Authorization: e.wireAuthorization ?? null, ...zKt(e.headers) };
  return { ...zS(), ...ZU(), Authorization: null, ...(!Ux() && { "X-Api-Key": null }) };
}
import Mz from "ws";
class Xe extends Error {
  name = "TestEgressBlockedError";
  code = "TestEgressBlocked";
}
var Dn = globalThis.fetch,
  xz = Mz;
function VKt(e, s) {
  if (e instanceof Request) return { method: (s?.method ?? e.method).toUpperCase(), url: e.url };
  return { method: (s?.method ?? "GET").toUpperCase(), url: String(e) };
}
function Dz() {
  return Ne(process.env.CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK);
}
function _s(e, s) {
  return `[CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK] live request from a test runtime: ${e} ${s}
`;
}
function vt(e) {
  let s;
  try {
    s = iT(new URL(e).hostname);
  } catch {
    s = !1;
  }
  if (s) return "loopback";
  return Dz() ? "opted-in" : "refused";
}
function Ye(e, s) {
  return (
    `Blocked under test: ${e} ${s} \u2014 test runtimes must not reach the network. ` +
    "Run the file via `bun run test:file -- <path>` with this request mocked, or set CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK=1 for an intentional live probe."
  );
}
function Wl(e) {
  let s = Ht.getUri(e),
    n = (e.method ?? "get").toUpperCase();
  switch (vt(s)) {
    case "loopback":
      return Lz(e, n);
    case "opted-in":
      return (process.stderr.write(_s(n, s)), e);
    case "refused":
      throw new Xe(Ye(n, s));
  }
}
function Lz(e, s) {
  let n = e.beforeRedirect;
  return (
    (e.beforeRedirect = (r, a) => {
      let l = typeof r.href === "string" ? r.href : "";
      switch (vt(l)) {
        case "loopback":
          break;
        case "opted-in":
          process.stderr.write(_s(s, l));
          break;
        case "refused":
          throw (
            process.stderr.write(`${Ye(s, l)}
`),
            new Xe(Ye(s, l))
          );
      }
      n?.(r, a);
    }),
    e
  );
}
function Vz() {
  if (!Yl()) Ht.interceptors.request.use(Wl);
}
function Yl() {
  return Ht.interceptors.request.handlers?.some((e) => e?.fulfilled === Wl) ?? !1;
}
function Ln() {
  return !1;
}
function _Re() {
  return;
}
function $5o(e, s, n) {
  if (e !== Dn || !Ln()) return;
  switch (vt(n)) {
    case "loopback":
      return;
    case "opted-in":
      process.stderr.write(_s(s, n));
      return;
    case "refused":
      throw new Xe(Ye(s, n));
  }
}
function F5o(e, s, n) {
  if (e !== Dn || !Ln()) return;
  if (n.redirected && vt(n.url) === "refused") throw new Xe(Ye(s, n.url));
}
var jz;
function Prr(e, s) {
  if (!Ln() || (s !== void 0 && s !== xz)) return;
  switch (vt(e)) {
    case "loopback":
      return;
    case "opted-in":
      process.stderr.write(_s("WS", e));
      return;
    case "refused": {
      let n = new Xe(Ye("WS", e));
      throw (jz?.(n), n);
    }
  }
}
async function Irr(e, s, n) {
  let r = globalThis.fetch,
    { method: a, url: l } = VKt(e, s);
  $5o(r, a, l);
  let _ = await (n && r === Dn ? n : r)(e, s);
  return (F5o(r, a, _), _);
}
var qz = new Set([
  "ERR_BAD_OPTION",
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_REQUEST",
  "ERR_BAD_RESPONSE",
  "ERR_CANCELED",
  "ERR_DEPRECATED",
  "ERR_FORM_DATA_DEPTH_EXCEEDED",
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_INVALID_URL",
  "ERR_NOT_SUPPORT",
  "ERR_STREAM_WRITE_AFTER_END"
]);
function D5(e) {
  return Yd(e) && e.response === void 0 && !qz.has(e.code ?? "");
}
function Qe(e, s) {
  for (let n of [e, s?.baseURL])
    if (n && Afe(n))
      throw Error(
        `externalHttp: ${n} is Anthropic-operated. Use firstPartyApi from ` +
          "src/services/http/firstParty \u2014 it enforces the 3P data-residency gate."
      );
}
var _l = {
  get(e, s) {
    return (Qe(e, s), _Re(), Ht.get(e, s));
  },
  head(e, s) {
    return (Qe(e, s), _Re(), Ht.head(e, s));
  },
  post(e, s, n) {
    return (Qe(e, n), _Re(), Ht.post(e, s, n));
  },
  put(e, s, n) {
    return (Qe(e, n), _Re(), Ht.put(e, s, n));
  },
  patch(e, s, n) {
    return (Qe(e, n), _Re(), Ht.patch(e, s, n));
  },
  delete(e, s) {
    return (Qe(e, s), _Re(), Ht.delete(e, s));
  }
};
class $l {
  committed = !1;
}
var Ql = new $l();
function An() {
  return Ql.committed;
}
function lZ() {
  Ql.committed = !0;
}
var Gz = new Promise(() => {});
function ff() {
  return Gz;
}
var Bz = /hooks\.slack\.com\/(?:services|workflows|triggers)\/[A-Za-z0-9/_-]+/gi;
var Un = {
    bearer: [
      /\bBearer\s+(?=[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]|%[0-9A-Fa-f]{2}){7})[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]+|%[0-9A-Fa-f]{2})*/gi,
      "Bearer <token>"
    ],
    basic: [/(:\s*)Basic\s+[A-Za-z0-9+/=]{8,}/gi, "$1Basic <token>"],
    sk: [/\bsk-[A-Za-z0-9_-]{20,}/g, "<token>"]
  },
  Kz = [
    /\bBearer\s{1,512}(?=[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]|%(?!20)[0-9A-Fa-f]{2}){15})(?:eyJ|(?=(?:[A-Za-z0-9._~+/=-]|%(?!20)[0-9A-Fa-f]{2}){0,64}[0-9=]))/i,
    /:\s{0,512}Basic\s{1,512}(?=[A-Za-z0-9+/=]{16})(?=[A-Za-z0-9+/=]{0,64}[0-9=])/i,
    /\bsk-(?=[A-Za-z0-9_-]{20})(?=[A-Za-z0-9_-]{0,64}[0-9])/
  ],
  esi = 4096;
var D2 = new RegExp(
    `(?:\\b(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-${Je("[A-Za-z0-9+/=%_-]")}|\\bxox[cd]-|(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-(?=[0-9])|xox[cd]-${Je("[A-Za-z0-9+/=%_-]")}(?=[A-Za-z0-9+/=%_-]{16}))`,
    "i"
  ),
  Jl = [
    [kt("sk-ant-", "[A-Za-z0-9_-]", 8, Vn(8)), "<token>"],
    [kt("sk-(?:proj|svcacct|admin)-", "[A-Za-z0-9_-]", 20, Vn(20)), "<token>"]
  ],
  Zl = ["AKIA", "ASIA", "ABIA", "ACCA", "A3T[A-Z0-9]"],
  Hz = `(?:${Zl.join("|")})`,
  ed = [[new RegExp(`(^|[^A-Za-z0-9+])${Hz}[A-Z0-9]{16}(?![A-Za-z0-9+=])`, "g"), "$1<token>"]],
  td = [
    [kt("gh[opusr]_", "[A-Za-z0-9]", 20, Je("[A-Za-z0-9]")), "<token>"],
    [/github_pat_[A-Za-z0-9_]{82,}/g, "<token>"],
    [/sq0(?:atp|csp)-[A-Za-z0-9_-]{22,}/g, "<token>"],
    [/(^|[^A-Za-z0-9+/])EAAA[A-Za-z0-9+/=%_-]{56,}/g, "$1<token>"],
    [
      kt(
        "gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-",
        "[A-Za-z0-9_=-]",
        20,
        Je("[A-Za-z0-9_=-]"),
        "(?:\\.[0-9a-z]{9})?"
      ),
      "<token>"
    ],
    [
      kt(
        "(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-",
        "[A-Za-z0-9+/=%_-]",
        10,
        "(?=[0-9])",
        "",
        Je("[A-Za-z0-9+/=%_-]"),
        "gi"
      ),
      "<token>"
    ],
    [
      new RegExp(
        `(?:\\bxox[cd]-[A-Za-z0-9+/=%_-]{10,}|xox[cd]-${Je("[A-Za-z0-9+/=%_-]")}[A-Za-z0-9+/=%_-]{16,})`,
        "gi"
      ),
      "<token>"
    ],
    [Bz, "hooks.slack.com/<redacted>"]
  ];
var Wz = [
    new RegExp(
      "(?<![A-Za-z0-9_-])(?=[A-Za-z0-9_-]+\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*)((?:[A-Za-z0-9_-]*?-)??)ey[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*",
      "g"
    ),
    "$1<jwt>"
  ],
  Yz = /\beyJ(?:[A-Za-z0-9_-]{256}|[A-Za-z0-9_-]{8,2048}\.[A-Za-z0-9_-]{10})/,
  sd = [
    [/(^|[^A-Za-z0-9+_-])AIza[A-Za-z0-9_-]{35}(?![A-Za-z0-9+=_-])/g, "$1<token>"],
    [/(^|[^A-Za-z0-9+_-])GOCSPX-[A-Za-z0-9_-]{28}(?![A-Za-z0-9+=_-])/g, "$1<token>"]
  ],
  nd = [
    [
      /(^|[^A-Za-z0-9+_-])[sr]k_(?:live|test|prod)_(?=[A-Za-z0-9]{0,64}[0-9])[A-Za-z0-9]{24,}(?![A-Za-z0-9+=_-])/g,
      "$1<token>"
    ]
  ],
  U5o = [Un.bearer, Un.basic, ...Jl, Un.sk, ...ed],
  B5o = [...td, Wz, ...sd, ...nd],
  tsi = [
    [new RegExp(`sk-${Vn(20)}[A-Za-z0-9_-]{20,}`, "g"), "<token>"],
    ...Zl.map((e) => [new RegExp(`${e}[A-Z2-7]{16}`, "g"), "<token>"]),
    [/AIza[\w-]{35}/g, "<token>"],
    [/GOCSPX-[\w-]{28,}/g, "<token>"],
    [/[sr]k_(?:live|test|prod)_[A-Za-z0-9]{24,}/g, "<token>"]
  ];
function Boe(e) {
  return [...U5o, ...B5o].reduce((s, [n, r]) => s.replace(n, r), String(e));
}
var Xz = [
  ...Kz,
  ...[...Jl, ...ed, ...td, ...sd, ...nd].map(
    ([e]) => new RegExp(e.source, e.flags.replaceAll("g", ""))
  ),
  Yz
];
function bRe(e) {
  return Xz.some((s) => s.test(e));
}
function kt(e, s, n, r, a = "", l = "", c = "g") {
  let _ = `${s}{${n},}${a}`;
  return new RegExp(`(?:\\b${e}${l}${_}|${e}${r}${_})`, c);
}
function Je(e) {
  return `(?=${e}{0,64}[0-9])`;
}
function Vn(e) {
  return `(?=[A-Za-z0-9_-]{0,64}?(?=[A-Za-z0-9]{${e}})(?=[A-Za-z0-9]{0,64}[0-9])(?=[A-Za-z0-9]{0,64}[A-Za-z]))`;
}
class nsi {
  #e = !1;
  #t = !1;
  #s = !1;
  #n = null;
  #r = !1;
  #o = !1;
  #a = void 0;
  #i = !1;
  #l = void 0;
  #d = !1;
  #c = void 0;
  #h = new Set();
  get active() {
    return this.#e;
  }
  get flagCli() {
    return this.#t;
  }
  get circuitBroken() {
    return this.#s;
  }
  get fastModeBreakerReason() {
    return this.#n;
  }
  get fromFallback() {
    return this.#r;
  }
  get provisionalStartupMode() {
    return this.#a;
  }
  get autoStartWithheldForHipaaTaint() {
    return this.#i;
  }
  setAutoStartWithheldForHipaaTaint(e) {
    this.#i = e;
  }
  get envOnboardingEligible() {
    return this.#l;
  }
  get envOnboardingShownLogged() {
    return this.#d;
  }
  get accountSetMode() {
    return this.#c;
  }
  setActive(e) {
    this.#e = e;
  }
  setFlagCli(e) {
    this.#t = e;
  }
  setCircuitBroken(e) {
    this.#s = e;
  }
  setFastModeBreakerReason(e) {
    this.#n = e;
  }
  setPlanOffAtLaunch(e) {
    this.#o = e;
  }
  get planOffAtLaunch() {
    return this.#o;
  }
  setFromFallback(e) {
    this.#r = e;
  }
  setProvisionalStartupMode(e) {
    this.#a = e;
  }
  setEnvOnboardingEligible(e) {
    this.#l = e;
  }
  setEnvOnboardingShownLogged(e) {
    this.#d = e;
  }
  setAccountSetMode(e) {
    this.#c = e;
  }
  noteRefusedMcpSkip(e) {
    this.#h.add(e);
  }
  hadRefusedMcpSkip(e) {
    return this.#h.has(e);
  }
  reset() {
    ((this.#e = !1),
      (this.#t = !1),
      (this.#s = !1),
      (this.#n = null),
      (this.#r = !1),
      (this.#o = !1),
      (this.#a = void 0),
      (this.#i = !1),
      (this.#l = void 0),
      (this.#d = !1),
      (this.#c = void 0),
      this.#h.clear());
  }
}
var mwi = new W(() => new nsi());
function E0() {
  return mwi.of(U().host);
}
function mI(e) {
  E0().setActive(e);
}
function Wf() {
  return E0().active;
}
function sqe(e) {
  return (
    e.mode === "auto" ||
    (e.mode === "plan" && e.servedCall !== !0 && Wf() && !e.isBypassPermissionsModeAvailable)
  );
}
function Ls(e, s = !1) {
  return e === "auto" || (e === "plan" && !s && Wf());
}
function j5o(e) {
  E0().noteRefusedMcpSkip(e);
}
function W5o(e) {
  return E0().hadRefusedMcpSkip(e);
}
function Bbn(e) {
  E0().setPlanOffAtLaunch(e);
}
function G5o() {
  return E0().planOffAtLaunch;
}
function z5o(e) {
  E0().setFlagCli(e);
}
function K5o() {
  return E0().flagCli;
}
function jbn(e) {
  E0().setCircuitBroken(e);
}
function Uue() {
  return E0().circuitBroken;
}
function V5o(e) {
  E0().setFastModeBreakerReason(e);
}
function q5o() {
  return E0().fastModeBreakerReason;
}
function rYr(e) {
  E0().setFromFallback(e);
}
function H5() {
  return E0().fromFallback;
}
function iqe(e) {
  E0().setProvisionalStartupMode(e);
}
function xPi() {
  return E0().autoStartWithheldForHipaaTaint;
}
function oYr(e) {
  E0().setAutoStartWithheldForHipaaTaint(e);
}
function Orr() {
  return E0().provisionalStartupMode;
}
function Mrr() {
  return E0().envOnboardingEligible;
}
function YEt(e) {
  E0().setEnvOnboardingEligible(e);
}
function sYr() {
  return E0().envOnboardingShownLogged;
}
function Wbn() {
  return E0().accountSetMode;
}
function ort(e) {
  E0().setAccountSetMode(e);
}
function iYr(e) {
  E0().setEnvOnboardingShownLogged(e);
}
var Qz = p(() => u({ lineage: o().min(1), source: oe().optional() }));
function Gbn(e) {
  let s = Qz().safeParse(e);
  if (!s.success) return;
  let { lineage: n, source: r } = s.data;
  return {
    lineage: n,
    source: r === "typed" || r === "relay" || r === "owner" ? r : "unattributed"
  };
}
function joe(e) {
  return e.type === "queued_command" && Gbn(e.forwardedIntent) !== void 0;
}
function Nj(e) {
  return (
    e.startsWith(`<${Xl}>`) ||
    e.startsWith(`<${xm}>`) ||
    Jz(e) ||
    e.startsWith(`<${vSe}>`) ||
    e.startsWith(`<${Z0}>`) ||
    e.startsWith(`<${bC}>`) ||
    e.startsWith(`<${ju}>`)
  );
}
function Jz(e) {
  return e.startsWith(`<${zw}>`) || e.startsWith(`<${Rf}>`);
}
var Zz = [
  [`<${Rf}>`, "record"],
  [`<${Xl}>`, "output"],
  [`<${xm}>`, "output"],
  [`<${Tq}>`, "caveat"]
];
function XEt(e) {
  let s = e.message?.content,
    n = Array.isArray(s)
      ? s.findLast((r) => r?.type === "text")?.text
      : typeof s === "string"
        ? s
        : void 0;
  if (typeof n !== "string") return;
  return Zz.find(([r]) => n.startsWith(r))?.[1];
}
function rsi(e) {
  return XEt(e) !== void 0;
}
function Drr(e) {
  let s = e.message?.content,
    n = Array.isArray(s)
      ? s.findLast((r) => r?.type === "text")?.text
      : typeof s === "string"
        ? s
        : void 0;
  if (typeof n !== "string") return;
  if (n.startsWith(`<${vSe}>`)) return "input";
  return n.startsWith(`<${Z0}>`) || n.startsWith(`<${bC}>`) ? "output" : void 0;
}
var at = "Edit",
  zbn = "/.claude/**",
  Kbn = "~/.claude/**",
  Vbn = "File has not been read yet. Read it first before writing to it.",
  qbn = "File is in a directory that is denied by your permission settings.",
  Ybn = "File is covered by a Read deny rule in your permission settings and cannot be edited.",
  Xbn = "File is covered by a Read deny rule in your permission settings and cannot be written.",
  qKt =
    "File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.",
  Xy = {
    not_utf8:
      "is not valid UTF-8: it uses a legacy encoding such as Windows-1252, Shift-JIS or GBK, or it is binary",
    nul: "has NUL bytes in its first 8 KB: binary data, UTF-16/UTF-32 without a byte-order mark, or text with embedded NULs",
    utf16be: "is UTF-16 big-endian (it starts FE FF), which these tools cannot write"
  };
function QEt(e) {
  return `File ${Xy[e]}. These tools write UTF-8 (or UTF-16LE behind its byte-order mark) and never convert a file's encoding on their own, so nothing was written. If the file is text, make the change with a shell command that reads and writes it in its own encoding (iconv, or PowerShell Get-Content/Set-Content -Encoding), or ask the user whether to convert it to UTF-8 first. To replace the whole file with new UTF-8 text anyway, delete it first, then Write it.`;
}
function osi(e) {
  let s = e === "not_utf8" ? " Its undecodable bytes show above as U+FFFD." : "";
  return `[This file ${Xy[e]}.${s} Edit and Write will refuse it: change it with a shell command that keeps its encoding, or ask the user whether to convert it to UTF-8.]`;
}
class dZ extends Error {
  constructor(e) {
    super(e);
    this.name = "FileStateError";
  }
}
var qt = "Write";
var Y5o = [
    "invalid_request",
    "catalog_unknown",
    "not_found",
    "restricted_by_org",
    "unavailable_for_account",
    "not_offered",
    "alias_1m_disabled",
    "alias_1m_unsupported",
    "blocked_by_hook",
    "check_failed",
    "check_rejected",
    "credits_required",
    "rate_limit",
    "auth_failed",
    "model_not_current",
    "verdict_pending",
    "internal_error"
  ],
  mH = [
    "invalid_mode",
    "bypass_restricted",
    "bypass_disabled",
    "bypass_not_launched",
    "auto_mode_settings",
    "auto_mode_circuit_breaker",
    "auto_mode_fast_mode",
    "auto_mode_model",
    "auto_mode_unavailable"
  ],
  _H = [
    "remote_control_auth",
    "remote_control_terminal",
    "remote_control_ended_elsewhere",
    "remote_control_policy_disabled"
  ];
function ssi(e) {
  switch (e) {
    case "auth":
      return "remote_control_auth";
    case "ended_elsewhere":
      return "remote_control_ended_elsewhere";
    case "terminal":
      return "remote_control_terminal";
    case "network":
      return;
  }
}
var gH = ["workspace_diff_pending"],
  fH = ["stale_worker_epoch", "invalid_worker_epoch"],
  bH = ["read_denied"],
  Qy = [...Y5o, ...mH, ..._H, ...gH, ...fH, ...bH];
var srt = ["summarized", "omitted", "highlights"];
function Hrr(e) {
  return srt.includes(e);
}
import { randomUUID as EH } from "crypto";
var $r = ["durable_post", "ephemeral_post", "retry_backoff", "hold", "none"],
  Jy = ["orphaned_permission", "turn_handoff", "deferred_tool_use", "none"];
function Jbn(e, s) {
  if (e.type !== "result") return e;
  let n = s.subagentStats !== void 0 ? { subagent_stats: s.subagentStats } : {},
    r = e.safety_stops !== void 0 ? { safety_stops: Math.max(e.safety_stops, s.safetyStops) } : {};
  if (e.total_cost_usd !== void 0 && s.totalCostUsd < e.total_cost_usd) return { ...e, ...n, ...r };
  return {
    ...e,
    total_cost_usd: s.totalCostUsd,
    duration_api_ms: e.duration_api_ms === 0 ? e.duration_api_ms : s.durationApiMs,
    modelUsage: s.modelUsage,
    ...(s.usage !== void 0 && { usage: s.usage }),
    ...n,
    ...r
  };
}
function isi(e) {
  let s = e
    .toLowerCase()
    .replace(/[^a-z]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 64)
    .replace(/_+$/, "");
  return s === "" ? "custom" : s;
}
function Woe({ startedAt: e, common: s, variant: n }) {
  let r = {
    type: "result",
    duration_ms: Math.max(0, Math.round(performance.now() - e)),
    uuid: EH()
  };
  return { ...s, ...n, ...r };
}
var SH = [
    "blocking_limit",
    "rapid_refill_breaker",
    "prompt_too_long",
    "image_error",
    "model_error",
    "api_error",
    "malformed_tool_use_exhausted",
    "aborted_streaming",
    "aborted_tools",
    "stop_hook_prevented",
    "hook_stopped",
    "tool_deferred",
    "max_turns",
    "background_requested",
    "completed"
  ],
  TH = [
    "budget_exhausted",
    "structured_output_retry_exhausted",
    "tool_deferred_unavailable",
    "turn_setup_failed"
  ],
  Zy = [...SH, ...TH];
function k0(e) {
  return e === "aborted_streaming" || e === "aborted_tools";
}
function oNe(e) {
  if (e === void 0) return !1;
  switch (e) {
    case "blocking_limit":
    case "rapid_refill_breaker":
    case "prompt_too_long":
    case "image_error":
    case "model_error":
    case "api_error":
    case "malformed_tool_use_exhausted":
    case "budget_exhausted":
    case "structured_output_retry_exhausted":
    case "tool_deferred_unavailable":
    case "turn_setup_failed":
      return !0;
    case "aborted_streaming":
    case "aborted_tools":
    case "stop_hook_prevented":
    case "hook_stopped":
    case "tool_deferred":
    case "max_turns":
    case "background_requested":
    case "completed":
      return !1;
    default:
      return !1;
  }
}
function asi(e) {
  return e.reason === "api_error" ? `api_error_${e.errorKind ?? "unknown"}` : e.reason;
}
function Lrr(e) {
  return k0(e) || oNe(e);
}
var Xr = ["unavailable_headless", "unknown", "failed", "restart_required"];
function lsi(e) {
  return typeof e === "object" && e !== null && "kind" in e && Xr.some((s) => s === e.kind);
}
var eA = ["blocked_by_hook", "stopped_by_hook", "dropped_by_hook", "not_passed_on", "no_verdict"],
  tA = [
    "remote_run_failed",
    "remote_run_timed_out",
    "interrupted",
    "remote_runner_refused",
    "unsupported_in_cloud_session",
    "output_distrusted",
    "callback_timed_out",
    "hook_failed",
    "hook_timed_out",
    "hooks_never_ran",
    "personal_config_refused",
    "rewrite_unplaceable"
  ];
function cZ(e, s) {
  if (e !== "UserPromptSubmit") return {};
  if ("noVerdict" in s) return { promptEnding: s };
  return s.reason ? { promptEnding: { reason: s.reason } } : {};
}
var aYr = ["send", "flagged", "withheld"],
  lYr = p(() =>
    u({
      text: o().describe(
        "The subagent's whole report, never truncated, with a backslash inserted into text that imitates harness markup, such as a system tag (`<system-reminder>`), a `[harness:` line or a turn marker (`Human:` at the start of a line)"
      ),
      warning: o()
        .optional()
        .describe(
          "Auto mode's warning to show above `text`: a SECURITY WARNING, or a note that the review could not run"
        )
    })
  );
var dYr = ["ios_app", "android_app"],
  sA = [
    "swift_edit",
    "uikit_import",
    "xcode_project",
    "ios_command",
    "kotlin_edit",
    "java_edit",
    "android_import",
    "android_manifest",
    "gradle_plugin",
    "android_command",
    "project_scan"
  ];
function Jr(e) {
  return e === void 0 || e === null || e === !1 ? void 0 : !0;
}
function SRe(e) {
  return "text_not_typed" in e && Jr(e.text_not_typed) === !0;
}
var nA = [
    "server_tool_use",
    "web_search_tool_result",
    "web_fetch_tool_result",
    "advisor_tool_result",
    "code_execution_tool_result",
    "bash_code_execution_tool_result",
    "text_editor_code_execution_tool_result",
    "tool_search_tool_result",
    "mcp_tool_use",
    "mcp_tool_result",
    "container_upload",
    "compaction",
    "fallback"
  ],
  wH = [...nA, "mid_conv_system"];
function rA(e) {
  return yt({ type: A(e) });
}
var yH = p(() => u({ type: A("ephemeral"), ttl: B(["5m", "1h"]).optional() })),
  mt = () => yH().nullable().optional().describe("Cache breakpoint at this block."),
  AH = p(() =>
    u({
      type: A("base64"),
      media_type: o().describe("image/jpeg, image/png, image/gif or image/webp."),
      data: o()
    })
  ),
  RH = p(() => u({ type: A("url"), url: o() })),
  kH = p(() => u({ type: A("file"), file_id: o() }).describe("A Files API upload (beta surface).")),
  zH = p(() =>
    $e([AH(), RH(), kH()]).describe(
      "Where the image bytes come from (inline base64, a URL, or a file upload)."
    )
  ),
  Zr = p(() => u({ type: A("image"), source: zH(), cache_control: mt() })),
  CH = p(() => u({ type: A("base64"), media_type: o().describe("application/pdf."), data: o() })),
  OH = p(() => u({ type: A("text"), media_type: o().describe("text/plain."), data: o() })),
  NH = p(() => u({ type: A("url"), url: o() })),
  IH = p(() => u({ type: A("file"), file_id: o() }).describe("A Files API upload (beta surface).")),
  PH = p(() => $e([dn(), Zr()])),
  MH = p(() => T(PH())),
  DH = p(() =>
    u({ type: A("content"), content: $e([o(), MH()]) }).describe(
      "Document content given inline as text and image blocks."
    )
  ),
  LH = p(() =>
    $e([CH(), OH(), DH(), NH(), IH()]).describe(
      "Where the document comes from (inline base64 PDF, inline text, inline blocks, a URL, or a file upload)."
    )
  ),
  oA = p(() => u({ enabled: M().optional() })),
  aA = p(() =>
    u({
      type: A("document"),
      source: LH(),
      title: o().nullable().optional(),
      context: o().nullable().optional(),
      citations: oA().nullable().optional(),
      cache_control: mt()
    })
  ),
  dn = p(() =>
    u({
      type: A("text"),
      text: o(),
      citations: T(oe())
        .nullable()
        .optional()
        .describe(
          "Citation locations (char_location, page_location, content_block_location, web_search_result_location, search_result_location), as the API defines them."
        ),
      cache_control: mt()
    })
  ),
  iA = p(() =>
    u({
      type: A("search_result"),
      source: o(),
      title: o(),
      content: T(dn()),
      citations: oA().optional(),
      cache_control: mt()
    })
  ),
  UH = p(() =>
    u({
      type: A("tool_use"),
      id: o(),
      name: o(),
      input: me(o(), oe()).describe(
        "The tool's input object; its shape is the named tool's input schema."
      ),
      cache_control: mt()
    })
  ),
  VH = p(() => u({ type: A("tool_reference"), tool_name: o() })),
  jH = p(() => $e([dn(), Zr(), iA(), aA(), VH()])),
  qH = p(() => T(jH())),
  GH = p(() =>
    u({
      type: A("tool_result"),
      tool_use_id: o(),
      content: $e([o(), qH()])
        .optional()
        .describe("The tool output: a string, or text / image / search_result / document blocks."),
      is_error: M().optional(),
      cache_control: mt()
    })
  ),
  BH = p(() =>
    $e([dn(), Zr(), aA(), iA(), UH(), GH(), dA(), cA(), ...wH.map(rA)]).describe(
      "A request content block. text, image, document, search_result, tool_use, tool_result and thinking blocks are modelled; the other API block types are accepted by type tag only, and consumers must tolerate types newer than this list."
    )
  ),
  KH = p(() => T(BH())),
  eo = p(() =>
    $e([o(), KH()]).describe(
      "A bare string (shorthand for one text block) or a list of content blocks."
    )
  ),
  lA = p(() =>
    u({ role: A("user"), content: eo() }).describe(
      'A Messages API MessageParam with role "user", as SDK user messages carry it.'
    )
  ),
  HH = p(() =>
    u({
      type: A("text"),
      text: o(),
      citations: T(oe())
        .nullable()
        .optional()
        .describe("Citation locations backing the text, as the API defines them.")
    })
  ),
  FH = p(() =>
    u({
      type: A("tool_use"),
      id: o(),
      name: o(),
      input: me(o(), oe()).describe(
        "The tool's input object; its shape is the named tool's input schema."
      ),
      caller: oe()
        .optional()
        .describe("Which caller invoked the tool (direct, or a server tool), when reported.")
    })
  ),
  dA = p(() => u({ type: A("thinking"), thinking: o(), signature: o() })),
  cA = p(() => u({ type: A("redacted_thinking"), data: o() })),
  WH = p(() =>
    $e([HH(), FH(), dA(), cA(), ...nA.map(rA)]).describe(
      "A response content block. text, tool_use and thinking blocks are modelled; the other API block types (server tool use and results, MCP tool blocks, container_upload, compaction, ...) are accepted by type tag only, and consumers must tolerate types newer than this list."
    )
  ),
  YH = p(() => u({ ephemeral_1h_input_tokens: v().int(), ephemeral_5m_input_tokens: v().int() })),
  $H = p(() => u({ web_search_requests: v().int(), web_fetch_requests: v().int() })),
  XH = p(() => u({ thinking_tokens: v().int().optional() })),
  to = p(() =>
    u({
      input_tokens: v().int(),
      output_tokens: v().int(),
      cache_creation_input_tokens: v().int().nullable(),
      cache_read_input_tokens: v().int().nullable(),
      cache_creation: YH().nullable().describe("Cache writes by TTL."),
      server_tool_use: $H().nullable(),
      service_tier: o().nullable().describe("standard, priority or batch."),
      inference_geo: o().nullable().optional(),
      speed: o().nullable().optional().describe("standard or fast."),
      iterations: oe()
        .optional()
        .describe("Per-iteration usage when the request ran several sampling iterations."),
      output_tokens_details: XH().nullable().optional(),
      fallback_credit: oe()
        .optional()
        .describe("Outcome of a fallback-credit token the request presented, or null.")
    })
  ),
  hA = p(() =>
    u({
      id: o().optional(),
      type: A("message").optional(),
      role: A("assistant"),
      model: o(),
      content: T(WH()),
      stop_reason: o()
        .nullable()
        .describe(
          "end_turn, max_tokens, stop_sequence, tool_use, pause_turn, refusal, ...; null while the message is still streaming."
        ),
      stop_sequence: o().nullable().optional(),
      stop_details: oe()
        .optional()
        .describe("Structured refusal details, when stop_reason is refusal."),
      usage: to(),
      container: oe()
        .optional()
        .describe("The code-execution container used by the request, if any."),
      context_management: oe()
        .optional()
        .describe("Context-management edits applied during the request, if any.")
    }).describe(
      "A Messages API Message (a BetaMessage, possibly one streamed block of it), as SDK assistant messages carry it."
    )
  );
var so = ["CLAUDEAI_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "APPROVAL_REQUIRED"];
function Nrr(e) {
  if (e.type !== "failed") return;
  return so.find((s) => s === e.errorCode);
}
var uA = ["accept", "reject", "cancelled"];
var YKt = [
  "user-rejected",
  "permission-rule",
  "automode-blocked",
  "automode-unavailable",
  "automode-parsing-error",
  "interrupted",
  "cancelled"
];
function X5o(e) {
  switch (e) {
    case "automode-blocked":
    case "automode-unavailable":
    case "automode-parsing-error":
      return !0;
    case "user-rejected":
    case "permission-rule":
    case "interrupted":
    case "cancelled":
    case void 0:
      return !1;
  }
}
var Ge = p(() =>
    u({
      inputTokens: v().int(),
      outputTokens: v().int(),
      thinkingTokens: v()
        .int()
        .optional()
        .describe(
          "Thinking tokens, already counted inside outputTokens. Counts only turns run on CLI versions that record this field: absent when none did, and partial for a resumed session that began on an older version."
        ),
      cacheReadInputTokens: v().int(),
      cacheCreationInputTokens: v().int(),
      webSearchRequests: v().int(),
      costUSD: v(),
      contextWindow: v().int(),
      maxOutputTokens: v().int(),
      canonicalModel: o()
        .optional()
        .describe(
          "Canonical model id used for the pricing lookup (e.g. 'claude-opus-4-7'). May differ from the raw model string this entry is keyed by (provider-specific ids, aliases)."
        ),
      provider: o()
        .optional()
        .describe(
          "API provider that served this model (e.g. 'firstParty', 'bedrock', 'vertex', 'foundry', 'anthropicAws', 'mantle', 'gateway')."
        ),
      costBasis: B(["list", "managed", "unknown"])
        .optional()
        .describe(
          "Which price table the most recent request for this model was priced at: Claude Code's built-in list prices ('list'), the organization's managed-settings modelPricing rates or multiplier ('managed'), or neither ('unknown' \u2014 no pricing row and no built-in price matched the model ID, so costUSD is a guess at the default model's rate). Overwritten per request like canonicalModel, so a consumer that differences the cumulative costUSD per turn gets that turn's basis. Absent until this process has priced a request for the model (e.g. right after --resume) and on builds that predate the field; treat as 'list'."
        )
    })
  ),
  QH = p(() => A("json_schema")),
  T8 = p(() => u({ type: QH() })),
  JH = p(() => u({ type: A("json_schema"), schema: me(o(), oe()) })),
  w8 = p(() => JH()),
  ZH = p(() =>
    B([
      "ANTHROPIC_API_KEY",
      "apiKeyHelper",
      "/login managed key",
      "none",
      "user",
      "project",
      "org",
      "temporary",
      "oauth"
    ]).describe(
      "Where the credential used for API requests came from: 'ANTHROPIC_API_KEY' (environment variable), 'apiKeyHelper' (the configured helper command), '/login managed key' (an API key created and stored by /login with an Anthropic Console account), or 'none' (no API key in use - e.g. claude.ai OAuth login, a bearer token, or a third-party cloud provider). 'user' | 'project' | 'org' | 'temporary' | 'oauth' are legacy members that current CLIs never emit; they remain only so the type stays backward compatible."
    )
  ),
  y8 = p(() => B(["local", "user", "project"]).describe("Config scope for settings.")),
  A8 = p(() => A("context-1m-2025-08-07")),
  e0 = p(() =>
    u({ type: A("adaptive"), display: B(["summarized", "omitted"]).optional() }).describe(
      "Claude decides when and how much to think (Opus 4.6+)."
    )
  ),
  t0 = p(() =>
    u({
      type: A("enabled"),
      budgetTokens: v().optional(),
      display: B(["summarized", "omitted"]).optional()
    }).describe("Fixed thinking token budget (older models)")
  ),
  s0 = p(() => u({ type: A("disabled") }).describe("No extended thinking")),
  R8 = p(() =>
    $e([e0(), t0(), s0()]).describe(
      "Controls Claude's thinking/reasoning behavior. When set, takes precedence over the deprecated maxThinkingTokens."
    )
  ),
  oo = p(() =>
    A("comms")
      .optional()
      .catch(void 0)
      .describe(
        "@internal Coordinator-mode role for this MCP server. 'comms' marks the server the coordinator uses to address the user; the coordinator tool filter lets comms-roled servers' tools through. Claude Code extension to .mcp.json \u2014 host-side config, not part of the MCP wire protocol. Coordinator mode is activated via the CLAUDE_CODE_COORDINATOR_MODE environment variable; this field only takes effect when coordinator mode is active."
      )
  ),
  _A =
    "Per-server tool-call timeout in milliseconds. Overrides the MCP_TOOL_TIMEOUT environment variable for this server. Hard wall-clock limit per call; progress notifications do not extend it. Values below 1000ms are ignored (falls through to MCP_TOOL_TIMEOUT or the default).",
  Kt = p(() => v().int().positive().optional().describe(_A)),
  fA = p(() =>
    v()
      .int()
      .positive()
      .optional()
      .describe(
        "Per-server HTTP request timeout in milliseconds, set by the host on the mcp_set_servers control event. Raises the per-request fetch first-byte budget and the tool-call watchdog for this server. Capped at 5 minutes. Ignored when `timeout` is also set.\n@internal"
      )
  ),
  n0 = p(() =>
    u({
      type: A("stdio").optional(),
      command: o(),
      args: T(o()).optional(),
      env: me(o(), o()).optional(),
      timeout: Kt(),
      alwaysLoad: M()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."
        ),
      role: oo()
    })
  ),
  ao = p(() =>
    u({
      name: o(),
      permission_policy: B(["always_allow", "always_ask", "always_deny"]).optional(),
      org_max_permission: B(["allow", "ask", "blocked"])
        .optional()
        .describe(
          "Org admin's per-tool ceiling. Drives the auto-mode isOrgAskCeiling gate so an admin 'ask' cap forces a user prompt even in auto mode."
        )
    }).describe(
      "Per-tool permission policy for an MCP server: carried on mcp_set_servers for remote (http/sse) servers, and on mcp_set_servers or initialize (sdkMcpServerConfigs) for host-registered sdk servers, where only always_ask and always_deny take effect."
    )
  ),
  r0 = p(() =>
    u({
      type: A("sse"),
      url: o(),
      headers: me(o(), o()).optional(),
      tools: T(ao()).optional(),
      timeout: Kt(),
      request_timeout_ms: fA(),
      alwaysLoad: M()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."
        ),
      role: oo()
    })
  ),
  o0 = p(() =>
    u({
      type: A("http"),
      url: o(),
      headers: me(o(), o()).optional(),
      tools: T(ao()).optional(),
      timeout: Kt(),
      request_timeout_ms: fA(),
      alwaysLoad: M()
        .optional()
        .describe(
          "When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."
        ),
      role: oo()
    })
  ),
  io = p(() =>
    u({
      type: A("sdk"),
      name: o(),
      timeout: Kt()
        .catch(void 0)
        .describe(
          `${_A} Applies when the server is first registered; changing it for an already-registered server has no effect until it is removed and re-added.`
        ),
      disableAutoBackground: M()
        .optional()
        .catch(void 0)
        .describe(
          "@internal When true, the CLI never moves a call to this server's tools to a background task on its own: not after the auto-background delay, and not early for a priority 'now' message, which instead interrupts the turn and so ends the call. Meant for a server whose calls wait on a person. The turn waits for the call's own result, up to the server's timeout, so set timeout too. A tool that advertises MCP task support can still run as a task. Any value but true counts as unset. Read when the server is first registered, from initialize, mcp_set_servers or --mcp-config."
        ),
      connectorId: o()
        .min(1)
        .optional()
        .catch(void 0)
        .describe(
          "@internal The id of the claude.ai connector this server proxies, for a host that keys the server by another name. The server must declare the same id in its own capabilities for the CLI to treat it as that connector. Read from initialize and mcp_set_servers, not --mcp-config, when the server is first registered."
        ),
      tools: Ia(a0, T(ao()))
        .optional()
        .catch(void 0)
        .describe(
          "Per-tool permission policy the host declares for this server's tools (not the tool definitions passed to createSdkMcpServer). always_ask: the CLI asks the host (canUseTool or the permission prompt tool) before each call, even where an allow rule or allowedTools covers the tool, and under bypassPermissions outside a hosted remote session (CLAUDE_CODE_REMOTE); under dontAsk the call is denied; in auto mode the classifier decides, except that by default a tool annotated destructiveHint still asks. always_deny: calls are denied. always_allow and org_max_permission are ignored on sdk servers; grant allows with allowedTools or canUseTool. Read from initialize (sdkMcpServerConfigs) and from each mcp_set_servers entry that names the server. On the wire an entry without tools states no policy: on initialize the stored list and the rules stand; on mcp_set_servers the rules are replaced without them. The Agent SDK always re-sends the registered list. An entry whose policy is not one of the three asks; an entry without a string name is dropped and the rest apply; a value that is not a list reads as absent."
        )
    })
  );
function a0(e) {
  if (!Array.isArray(e)) return e;
  return e.flatMap((s) => {
    let n = tEn(s);
    return n === void 0 ? [] : [n.policy];
  });
}
var cn = p(() => $e([n0(), r0(), o0(), io()])),
  i0 = p(() => u({ type: A("claudeai-proxy"), url: o(), id: o(), timeout: Kt() })),
  l0 = p(() => $e([cn(), i0()])),
  lo = p(() =>
    u({
      name: o().describe("Server name as configured"),
      status: B(["connected", "failed", "needs-auth", "pending", "disabled"]).describe(
        "Current connection status"
      ),
      serverInfo: u({ name: o(), version: o() })
        .optional()
        .describe("Server information (available when connected)"),
      error: o().optional().describe("Error message (available when status is 'failed')"),
      error_code: B(so)
        .optional()
        .describe(
          "@internal Why a 'failed' row failed, for the causes a host can fix: CLAUDEAI_BEARER_REJECTED (a claude.ai connector rejected the claude.ai login \u2014 sign in again), FIRST_PARTY_AUTH_REJECTED (a first-party Anthropic server rejected its credential \u2014 the claude.ai login, or for the Claude Design server its /design-login authorization; the row's error names which sign-in fixes it), APPROVAL_REQUIRED (a project-scoped server awaiting the user's approval). Absent for every other failure; new values are additive."
        ),
      config: l0().optional().describe("Server configuration (includes URL for HTTP/SSE servers)"),
      transport: o()
        .optional()
        .describe(
          "@internal The server's transport as configured (stdio, sse, http, ws, sdk, claudeai-proxy \u2026), reported even where `config` is withheld. Absent on CLIs that predate the field."
        ),
      sessionProxied: M()
        .optional()
        .describe(
          "@internal True when the server is reached through the cloud session's own MCP proxy, or is a claude.ai connector the session mounted: its sign-in is held there, never in this process, so a client offers no OAuth sign-in for it. Absent when false and on CLIs that predate the field."
        ),
      urlHost: o()
        .optional()
        .describe(
          "@internal Host and port of an http or sse server's URL as its settings file wrote it, for display where `config` is withheld. Absent for other transports, for a server with no settings file (dynamic, plugin, sdk, agent, claudeai), for a server the session proxies (its host would be the session's own), when the file's host holds an environment-variable placeholder or the file can't be re-read, and on CLIs that predate the field."
        ),
      scope: o()
        .optional()
        .describe("Configuration scope (e.g., project, user, local, claudeai, managed)"),
      source: o()
        .optional()
        .describe(
          "Where the server definition came from: sdk (an in-process server the SDK host registered \u2014 only the host can register one), plugin (a server a plugin ships or registers at runtime), or the config scope (user, project, local, dynamic, managed, enterprise, claudeai, agent). Key trust on this, not on the name. Absent on CLIs that predate the field."
        ),
      tools: T(
        u({
          name: o(),
          description: o().optional(),
          annotations: u({
            readOnly: M().optional(),
            destructive: M().optional(),
            openWorld: M().optional()
          }).optional(),
          _meta: me(o(), oe())
            .optional()
            .describe(
              "The MCP Apps (SEP-1865) members of the tool's `_meta`, for a host that renders the tool's `ui://` resource, under the keys the server used: `ui` (an object: `resourceUri`, a `ui://` string; `visibility`, an array of 'model' | 'app'; and any other member the server sent) and the deprecated flat `ui/resourceUri` (a `ui://` string). Each is validated and size-bounded, and withheld if it fails. Of a `ui` that fails, only `visibility` still arrives: the 'model' and 'app' entries the server listed, or `[]` (neither audience) if `ui` is not an object or `visibility` not an array; `null` counts as absent. So a tool with no `visibility` declared none. A CLI that does not advertise `mcp_call_result_not_for_model_v1` may withhold a failed `ui` whole. Every other `_meta` key is withheld. Present only on a tool that declares one, from CLIs that advertise `mcp_tool_ui_meta_v1`."
            )
        })
      )
        .optional()
        .describe("Tools provided by this server (available when connected)"),
      capabilities: u({ experimental: me(o(), oe()).optional() })
        .optional()
        .describe(
          "@internal Server capabilities (available when connected). experimental['claude/channel'] is only present if the server's plugin is on the approved channels allowlist \u2014 use its presence to decide whether to show an Enable-channel prompt."
        )
    }).describe("Status information for an MCP server connection.")
  ),
  v8 = p(() =>
    u({
      added: T(o()).describe("Names of servers that were added"),
      removed: T(o()).describe("Names of servers that were removed"),
      errors: me(o(), o()).describe(
        "Map of server names to error messages for servers that failed to connect"
      )
    }).describe("Result of a setMcpServers operation.")
  ),
  _t = p(() => B(["userSettings", "projectSettings", "localSettings", "session", "cliArg"])),
  no = p(() => B(["allow", "deny", "ask"])),
  d0 = p(() => B(["allow", "deny", "ask", "defer"])),
  ro = p(() => u({ toolName: o(), ruleContent: o().optional() })),
  Ft = p(() =>
    Gr("type", [
      u({ type: A("addRules"), rules: T(ro()), behavior: no(), destination: _t() }),
      u({ type: A("replaceRules"), rules: T(ro()), behavior: no(), destination: _t() }),
      u({ type: A("removeRules"), rules: T(ro()), behavior: no(), destination: _t() }),
      u({ type: A("setMode"), mode: gA(() => de()), destination: _t() }),
      u({ type: A("addDirectories"), directories: T(o()), destination: _t() }),
      u({ type: A("removeDirectories"), directories: T(o()), destination: _t() })
    ])
  ),
  pA = p(() =>
    B(["user_temporary", "user_permanent", "user_reject"]).describe(
      "Classification of this permission decision for telemetry. SDK hosts that prompt users (desktop apps, IDEs) should set this to reflect what actually happened: user_temporary for allow-once, user_permanent for always-allow (both the click and later cache hits), user_reject for deny. If unset, the CLI infers conservatively (temporary for allow, reject for deny). The vocabulary matches tool_decision OTel events (monitoring-usage docs)."
    )
  ),
  bA = p(() =>
    $e([
      u({
        behavior: A("allow"),
        updatedInput: me(o(), oe()).optional(),
        updatedPermissions: T(Ft()).optional(),
        toolUseID: o().optional(),
        decisionClassification: pA().optional()
      }),
      u({
        behavior: A("deny"),
        message: o(),
        interrupt: M().optional(),
        toolUseID: o().optional(),
        decisionClassification: pA().optional()
      })
    ])
  ),
  de = p(() =>
    Ia(Ny, B(["default", "acceptEdits", "bypassPermissions", "plan", "dontAsk", "auto"])).describe(
      "Permission mode for controlling how tool executions are handled. 'default' - Standard behavior, prompts for dangerous operations. 'acceptEdits' - Auto-accept file edit operations. 'bypassPermissions' - Bypass all permission checks (requires allowDangerouslySkipPermissions). 'plan' - Planning mode, no actual tool execution. 'dontAsk' - Don't prompt for permissions, deny if not pre-approved. 'auto' - Use a model classifier to approve/deny permission prompts."
    )
  ),
  c0 = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "Notification",
    "UserPromptSubmit",
    "UserPromptExpansion",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PreModelSwitch",
    "PostModelSwitch",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged",
    "DirectoryAdded",
    "MessageDisplay"
  ],
  EA = p(() => B(c0));
var Ke = p(() =>
    u({
      name: o(),
      source: o().describe(
        "sdk | plugin | user | project | local | dynamic | managed | enterprise | claudeai | agent \u2014 an open set; treat unknown values as an unrecognized configured source, never as sdk."
      )
    }).describe(
      'The MCP server serving this tool, for `mcp__*` tools: `name` is the server\'s config key (for `source: "sdk"`, exactly the name the SDK host registered in `sdkMcpServers` / `mcp_set_servers`; for any other source, the key as authored in that configuration \u2014 untrusted text, the same value `mcp_status` and system/init report, to be escaped before display), `source` is where its definition came from \u2014 `sdk` (an in-process server the SDK host runs; only the host can register one, so a configured server of the same name never reads `sdk`), `plugin` (a server a plugin ships or registers at runtime), or a config scope (`user`, `project`, `local`, `dynamic` for --mcp-config / `mcp_set_servers` process servers, `managed`, `enterprise`, `claudeai`, `agent`). Key trust on `source`, not on the name or the tool-name prefix. Absent for non-MCP tools.'
    )
  ),
  C = p(() =>
    u({
      session_id: o(),
      transcript_path: o(),
      cwd: o(),
      prompt_id: o()
        .optional()
        .describe(
          "UUID correlating a user prompt with all subsequent events until the next prompt. Same value emitted on OpenTelemetry events as the `prompt.id` attribute, so hook output can be joined to OTel events at prompt grain. Absent until the first user input of the process lifetime."
        ),
      permission_mode: o().optional(),
      agent_id: o()
        .optional()
        .describe(
          "Subagent identifier. Present only when the hook fires from within a subagent (e.g., a tool called by an AgentTool worker). Absent for the main thread, even in --agent sessions. Use this field (not agent_type) to distinguish subagent calls from main-thread calls."
        ),
      agent_type: o()
        .optional()
        .describe(
          'Agent type name (e.g., "general-purpose", "code-reviewer"). Present when the hook fires from within a subagent (alongside agent_id), or on the main thread of a session started with --agent (without agent_id).'
        ),
      effort: u({
        level: o().describe(
          'Active effort level for the current turn (e.g., "low", "medium", "high", "xhigh", "max"), after any silent downgrade for the selected model. Also exposed to hook commands and Bash as the CLAUDE_EFFORT env var.'
        )
      })
        .optional()
        .describe(
          "Reasoning effort applied to the current turn. Same shape as StatusLineCommandInput.effort. Present for hooks that fire within a tool-use context (PreToolUse, PostToolUse, Stop, SubagentStop, etc.) on a model that supports the effort parameter; absent for session-lifecycle hooks and models without effort support."
        )
    })
  ),
  h0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PreToolUse"),
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        mcp_server: Ke().optional()
      })
    )
  ),
  u0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PermissionRequest"),
        tool_name: o(),
        tool_input: oe(),
        permission_suggestions: T(Ft()).optional(),
        mcp_server: Ke().optional()
      })
    )
  ),
  p0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PostToolUse"),
        tool_name: o(),
        tool_input: oe(),
        tool_response: oe(),
        tool_use_id: o(),
        duration_ms: v()
          .optional()
          .describe(
            "Tool execution time in milliseconds. Excludes permission-prompt and hook time."
          ),
        mcp_server: Ke().optional()
      })
    )
  ),
  m0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PostToolUseFailure"),
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        error: o(),
        is_interrupt: M().optional(),
        duration_ms: v()
          .optional()
          .describe(
            "Tool execution time in milliseconds. Excludes permission-prompt and hook time."
          ),
        mcp_server: Ke().optional()
      })
    )
  ),
  _0 = p(() =>
    u({ tool_name: o(), tool_input: oe(), tool_use_id: o(), tool_response: oe().optional() })
  ),
  g0 = p(() =>
    C()
      .and(u({ hook_event_name: A("PostToolBatch"), tool_calls: T(_0()) }))
      .describe(
        "Hook input for the PostToolBatch event. Fired once after every tool call in a batch has resolved, before the next model request. PostToolUse fires per-tool and may run concurrently for parallel tool calls; PostToolBatch fires exactly once with the full batch."
      )
  ),
  f0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PermissionDenied"),
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        reason: o(),
        mcp_server: Ke().optional()
      })
    )
  ),
  b0 = p(() =>
    C().and(
      u({
        hook_event_name: A("Notification"),
        message: o(),
        title: o().optional(),
        notification_type: o()
      })
    )
  ),
  S0 = p(() =>
    C().and(
      u({
        hook_event_name: A("UserPromptSubmit"),
        prompt: o(),
        source: B(["user", "sdk", "system", "loop_wakeup", "schedule_wakeup", "poll_event"])
          .optional()
          .describe(
            "Who authored/injected the prompt: `user` = submitted from the interactive composer, `sdk` = non-interactive entrypoint (`-p` / Agent SDK), `loop_wakeup` = dynamic /loop wakeup, `schedule_wakeup` = scheduled-task fire (CronCreate/routine), `system` = other machine-injected turns (peer/channel messages, task notifications, auto-continuation), `poll_event` = the poll-event channel enqueue-time pass (the hook fires when the host submits an event, before its delivery ack exists \u2014 a blocking verdict rejects the event). Payloads may omit it while the field rolls out."
          ),
        session_title: o().optional()
      })
    )
  ),
  T0 = p(() =>
    C().and(
      u({
        hook_event_name: A("UserPromptExpansion"),
        expansion_type: B(["slash_command", "mcp_prompt"]),
        command_name: o(),
        command_args: o(),
        command_source: o().optional(),
        prompt: o()
      })
    )
  ),
  w0 = p(() =>
    C().and(
      u({
        hook_event_name: A("SessionStart"),
        source: B(["startup", "resume", "clear", "compact", "fork"]),
        agent_type: o().optional(),
        model: o().optional(),
        session_title: o().optional(),
        seconds_since_last_response: v()
          .optional()
          .describe("resume/fork: seconds since the resumed transcript's last assistant response"),
        context_tokens: v()
          .optional()
          .describe(
            "resume/fork: the resumed transcript's last response input + cache_read + cache_creation + output tokens (for a server-side tool loop, its last iteration's window, not the summed totals)"
          ),
        prompt_cache_likely_expired: M()
          .optional()
          .describe(
            "resume/fork: seconds_since_last_response exceeds the prompt-cache TTL, so the first request re-caches context_tokens"
          ),
        estimated_cache_write_usd: v()
          .optional()
          .describe(
            "resume/fork: estimated cost of re-caching context_tokens on the session model \u2014 the managed modelPricing when set, otherwise list price; excludes the response"
          )
      })
    )
  ),
  y0 = p(() => C().and(u({ hook_event_name: A("Setup"), trigger: B(["init", "maintenance"]) }))),
  SA = p(() =>
    u({
      id: o(),
      type: o().describe(
        "Friendly task-type label (e.g. 'shell', 'subagent', 'monitor', 'workflow'). Falls back to the raw discriminant for unknown types."
      ),
      status: o(),
      description: o().describe(
        "Free-text description. Capped at 1000 chars; clipped values append " +
          'an in-string "\u2026 [+N chars]" marker.'
      ),
      command: o()
        .optional()
        .describe(
          "Shell command line. Only present for 'shell' tasks. Capped at 1000 " +
            'chars with the same "\u2026 [+N chars]" marker.'
        ),
      agent_type: o().optional().describe("Subagent type name. Only present for 'subagent' tasks."),
      server: o()
        .optional()
        .describe("MCP server name. Only present for 'monitor' / 'MCP task' tasks."),
      tool: o()
        .optional()
        .describe("MCP tool name. Only present for 'monitor' / 'MCP task' tasks."),
      name: o().optional().describe("Workflow name. Only present for 'workflow' tasks.")
    })
  ),
  TA = p(() =>
    u({
      id: o(),
      schedule: o().describe('Cron expression, e.g. "0 9 * * 1-5".'),
      recurring: M().describe(
        "False for one-shot wakeups whose cron field encodes a single fire time; true for tasks that re-fire on every match."
      ),
      prompt: o().describe(
        "Prompt text submitted when the cron fires. Capped at 1000 chars; " +
          'clipped values append an in-string "\u2026 [+N chars]" marker.'
      )
    })
  ),
  A0 = p(() =>
    C().and(
      u({
        hook_event_name: A("Stop"),
        stop_hook_active: M(),
        last_assistant_message: o()
          .optional()
          .describe(
            "Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file."
          ),
        background_tasks: T(SA())
          .optional()
          .describe(
            'In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.'
          ),
        session_crons: T(TA())
          .optional()
          .describe(
            "Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled."
          )
      })
    )
  ),
  R0 = p(() =>
    C().and(
      u({
        hook_event_name: A("StopFailure"),
        error: uo(),
        error_details: o().optional(),
        last_assistant_message: o().optional()
      })
    )
  ),
  v0 = p(() => C().and(u({ hook_event_name: A("SubagentStart"), agent_id: o(), agent_type: o() }))),
  z0 = p(() =>
    C().and(
      u({
        hook_event_name: A("SubagentStop"),
        stop_hook_active: M(),
        agent_id: o(),
        agent_transcript_path: o(),
        agent_type: o(),
        last_assistant_message: o()
          .optional()
          .describe(
            "Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file."
          ),
        background_tasks: T(SA())
          .optional()
          .describe(
            'In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.'
          ),
        session_crons: T(TA())
          .optional()
          .describe(
            "Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled."
          )
      })
    )
  ),
  C0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PreCompact"),
        trigger: B(["manual", "auto"]),
        custom_instructions: o().nullable()
      })
    )
  ),
  O0 = p(() =>
    C().and(
      u({
        hook_event_name: A("PostCompact"),
        trigger: B(["manual", "auto"]),
        compact_summary: o().describe("The conversation summary produced by compaction")
      })
    )
  ),
  N0 = {
    command:
      "command: /model <name>, the /config Model row, or enabling fast mode when that promotes the model",
    picker: "picker: an interactive model picker",
    sdk: "sdk: headless set_model (SDK, Remote Control, IDE)",
    auto: "auto: automatic fallback or other programmatic change",
    resume: "resume: model restored while resuming a session"
  };
function wA(e) {
  return u({
    from_model: o().describe("Resolved model id the session was running before the switch"),
    to_model: o().describe("Resolved model id the session runs after the switch"),
    requested_model: o()
      .nullable()
      .describe('What was asked for (alias such as "opus", a full id, or null for "default")'),
    source: B(e).describe(e.map((s) => N0[s]).join("; ")),
    context_tokens: v().describe(
      "Prompt tokens the next request re-sends: the last main-thread response's input + cache_read + cache_creation + output tokens (0 before the first response; for a server-side tool loop, its last iteration's window, not the summed totals)"
    ),
    prompt_cache_warm: M().describe(
      "Whether the current model's prompt cache is likely still warm (a switch then forfeits it)"
    ),
    cache_ttl: B(["5m", "1h"]),
    estimated_cache_write_usd: v().describe(
      "Estimated cost of re-caching context_tokens on to_model at its cache-write rate \u2014 the managed modelPricing when set, otherwise list price; excludes the response"
    ),
    pricing: B(["configured", "catalog", "default"]).describe(
      "configured: priced at the managed modelPricing setting; catalog: list price; default: to_model unknown, the default tier was assumed"
    )
  });
}
var I0 = p(() =>
    C()
      .and(u({ hook_event_name: A("PreModelSwitch") }))
      .and(wA(["command", "picker", "sdk"]))
  ),
  P0 = p(() =>
    C()
      .and(u({ hook_event_name: A("PostModelSwitch") }))
      .and(wA(["command", "picker", "sdk", "auto", "resume"]))
  ),
  M0 = p(() =>
    C().and(
      u({
        hook_event_name: A("TeammateIdle"),
        teammate_name: o(),
        team_name: o().describe(
          "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release."
        )
      })
    )
  ),
  x0 = p(() =>
    C().and(
      u({
        hook_event_name: A("TaskCreated"),
        task_id: o(),
        task_subject: o(),
        task_description: o().optional(),
        teammate_name: o().optional(),
        team_name: o()
          .optional()
          .describe(
            "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release."
          )
      })
    )
  ),
  D0 = p(() =>
    C().and(
      u({
        hook_event_name: A("TaskCompleted"),
        task_id: o(),
        task_subject: o(),
        task_description: o().optional(),
        teammate_name: o().optional(),
        team_name: o()
          .optional()
          .describe(
            "@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release."
          )
      })
    )
  ),
  L0 = p(() =>
    C()
      .and(
        u({
          hook_event_name: A("Elicitation"),
          mcp_server_name: o(),
          message: o(),
          mode: B(["form", "url"]).optional(),
          url: o().optional(),
          elicitation_id: o().optional(),
          requested_schema: me(o(), oe()).optional()
        })
      )
      .describe(
        "Hook input for the Elicitation event. Fired when an MCP server requests user input. Hooks can auto-respond (accept/decline) instead of showing the dialog."
      )
  ),
  U0 = p(() =>
    C()
      .and(
        u({
          hook_event_name: A("ElicitationResult"),
          mcp_server_name: o(),
          elicitation_id: o().optional(),
          mode: B(["form", "url"]).optional(),
          action: B(["accept", "decline", "cancel"]),
          content: me(o(), oe()).optional()
        })
      )
      .describe(
        "Hook input for the ElicitationResult event. Fired after the user responds to an MCP elicitation. Hooks can observe or override the response before it is sent to the server."
      )
  ),
  V0 = ["user_settings", "project_settings", "local_settings", "policy_settings", "skills"],
  j0 = p(() =>
    C().and(u({ hook_event_name: A("ConfigChange"), source: B(V0), file_path: o().optional() }))
  ),
  q0 = ["session_start", "nested_traversal", "path_glob_match", "include", "compact"],
  G0 = ["User", "Project", "Local", "Managed"],
  B0 = p(() =>
    C().and(
      u({
        hook_event_name: A("InstructionsLoaded"),
        file_path: o(),
        memory_type: B(G0),
        load_reason: B(q0),
        globs: T(o()).optional(),
        trigger_file_path: o().optional(),
        parent_file_path: o().optional()
      })
    )
  ),
  K0 = p(() => C().and(u({ hook_event_name: A("WorktreeCreate"), name: o() }))),
  H0 = p(() => C().and(u({ hook_event_name: A("WorktreeRemove"), worktree_path: o() }))),
  F0 = p(() => C().and(u({ hook_event_name: A("CwdChanged"), old_cwd: o(), new_cwd: o() }))),
  W0 = p(() =>
    C().and(
      u({
        hook_event_name: A("FileChanged"),
        file_path: o(),
        event: B(["change", "add", "unlink"])
      })
    )
  ),
  Y0 = p(() =>
    C().and(
      u({
        hook_event_name: A("DirectoryAdded"),
        directory: o().describe("Absolute path of the directory that was added."),
        source: B(["slash_command", "register_repo_root"]).describe(
          'How the directory was added: "slash_command" for /add-dir, "register_repo_root" for the SDK control_request.'
        )
      })
    )
  ),
  $0 = p(() =>
    C()
      .and(
        u({
          hook_event_name: A("MessageDisplay"),
          turn_id: o().describe("UUID of the current turn."),
          message_id: o().describe(
            "UUID of the assistant message being displayed. Stable across " +
              "every flush of the same message. Not the API msg_\u2026 id."
          ),
          index: v()
            .int()
            .describe(
              "Zero-based index of this delta within the message. Increments by one per flush."
            ),
          final: M().describe(
            "True on the message's last flush. Exactly one flush per message has it."
          ),
          delta: o().describe(
            "The newly completed lines since the prior flush. Always whole lines, except on the final flush which may end mid-line. The delta of the final flush is empty when the message ends on a newline; treat final as the end-of-message signal regardless."
          )
        })
      )
      .describe(
        "Hook input for the MessageDisplay event. Fired with each batch of newly completed lines while an assistant message streams. Display-only: the stored message and what the model sees are untouched."
      )
  ),
  X0 = ["clear", "resume", "logout", "prompt_input_exit", "other"],
  Q0 = p(() => B(X0)),
  J0 = p(() => C().and(u({ hook_event_name: A("SessionEnd"), reason: Q0() }))),
  lqe = p(() =>
    $e([
      h0(),
      p0(),
      m0(),
      g0(),
      f0(),
      b0(),
      S0(),
      T0(),
      w0(),
      J0(),
      A0(),
      R0(),
      v0(),
      z0(),
      C0(),
      O0(),
      I0(),
      P0(),
      u0(),
      y0(),
      M0(),
      x0(),
      D0(),
      L0(),
      U0(),
      j0(),
      B0(),
      K0(),
      H0(),
      F0(),
      W0(),
      Y0(),
      $0()
    ])
  ),
  eF = p(() => u({ async: A(!0), asyncTimeout: v().optional() }));
function mA(e) {
  return (
    !e.includes(`
`) && /\S/.test(e)
  );
}
var J5o = p(() =>
    u({
      title: o().max(200).refine(mA),
      description: o().max(2000).regex(/\S/),
      displayName: o().max(64).refine(mA)
    }).describe(
      "@internal Desktop host only: the words an SDK host puts on an ask's permission card (PreToolUse permissionDisplay)."
    )
  ),
  tF = p(() =>
    u({
      hookEventName: A("PreToolUse"),
      permissionDecision: d0().optional(),
      permissionDecisionReason: o().optional(),
      updatedInput: me(o(), oe()).optional(),
      additionalContext: o().optional(),
      permissionDisplay: J5o()
        .optional()
        .catch(void 0)
        .describe(
          "@internal Desktop host only: the words for this ask's permission card. Read only beside permissionDecision 'ask' from the hook the SDK host registered in its stdio initialize; send it only when the initialize response carried host_worded_asks. Only an answer on a card approves such an ask: no one-tap approve, allow rule, permission mode, PermissionRequest hook allow or plugin tool.check allow does. The CLI may send the ask without these words (another hook also asked, or the input changed), or refuse the call (its own permission check also asks or cannot run, or the ask reached a path with no card that can show the words, such as an in-process teammate). Ignored whole when malformed, blank, over length (title 200, description 2000, displayName 64 UTF-16 code units), or holding a control or invisible character other than a line feed in description."
        )
    })
  ),
  sF = p(() =>
    u({
      hookEventName: A("UserPromptSubmit"),
      additionalContext: o().optional(),
      sessionTitle: o().optional(),
      suppressOriginalPrompt: M()
        .optional()
        .describe('When decision is "block", omit the original prompt from the block message')
    })
  ),
  nF = p(() =>
    u({
      hookEventName: A("UserPromptExpansion"),
      additionalContext: o().optional(),
      suppressOriginalPrompt: M()
        .optional()
        .describe('When decision is "block", omit the original prompt from the block message')
    })
  ),
  rF = p(() =>
    u({
      hookEventName: A("SessionStart"),
      additionalContext: o().optional(),
      initialUserMessage: o().optional(),
      sessionTitle: o().optional(),
      watchPaths: T(o()).optional(),
      reloadSkills: M()
        .optional()
        .describe(
          "Re-scan skill and command directories after SessionStart hooks complete, so skills installed by the hook are available in the same session"
        )
    })
  ),
  oF = p(() => u({ hookEventName: A("Setup"), additionalContext: o().optional() })),
  aF = p(() =>
    u({
      hookEventName: A("PreModelSwitch"),
      permissionDecision: B(["allow", "deny", "ask"])
        .optional()
        .describe(
          "Same contract as PreToolUse: allow proceeds (skipping the interactive cache-miss confirm), deny cancels the switch, ask asks the user to confirm (a headless session refuses instead)"
        ),
      permissionDecisionReason: o().optional()
    })
  ),
  iF = p(() =>
    u({
      hookEventName: A("PostModelSwitch"),
      additionalContext: o()
        .optional()
        .describe("Reaches the model with the next request the new model serves")
    })
  ),
  lF = p(() => u({ hookEventName: A("SubagentStart"), additionalContext: o().optional() })),
  dF = p(() =>
    u({
      hookEventName: A("PostToolUse"),
      additionalContext: o().optional(),
      classifierContext: o()
        .optional()
        .describe(
          "Host-asserted context shown to the auto-mode permission classifier alongside this tool call's result. In the live session the classifier may weigh a user statement relayed here as user intent (it can satisfy a consent bar a user turn would satisfy, never a hard boundary); values restored from saved session state are treated as unverified context only. Relay discipline is the host's obligation: put ONLY genuine user statements in intent-bearing positions \u2014 never tool output or model text dressed as one. Capped at 2000 UTF-16 code units, a budget shared across all hooks that contribute to one call (surrogate-pair-safe; emoji and other astral characters count as two). Honored on synchronous hook responses only: an async hook's late response arrives after the result message is frozen and this field in it is silently ignored. Security note: do not copy untrusted tool output or third-party text into it blindly \u2014 content placed here reaches the permission classifier with host-application framing. Applies only to calls the classifier transcript shows: read-only lookups the transcript omits (file reads, searches) and remote-engine shells produce no per-result line, and context attached to them is silently unused. Not a delivery channel: it is bound to a single call id and sized for a short assertion, not for relaying messages or events. Rewrite integrity: if this assertion describes output you are rewriting, return it in the SAME hook result as the rewrite \u2014 it is then dropped automatically if your rewrite is rejected or superseded by a later hook's rewrite; assertions returned without a rewrite are never invalidated by other hooks' rewrites, so a non-rewriting hook should assert only what holds regardless of other hooks' rewrites \u2014 hosts that need an assertion bound to exact output bytes should make it in the hook that produces those bytes. (Do NOT return an identity rewrite just to pair an assertion: hooks run in parallel on the ORIGINAL output, so an identity rewrite competes last-write-wins with sibling rewrites and can clobber a real redaction.)"
        ),
      updatedToolOutput: oe()
        .optional()
        .describe("Replaces the tool output before it is sent to the model"),
      updatedMCPToolOutput: oe()
        .optional()
        .describe(
          "Replaces the output for MCP tools only. Prefer updatedToolOutput, which works for all tools"
        )
    })
  ),
  cF = p(() => u({ hookEventName: A("PostToolBatch"), additionalContext: o().optional() })),
  hF = p(() => u({ hookEventName: A("PostToolUseFailure"), additionalContext: o().optional() })),
  uF = p(() =>
    u({ hookEventName: A("Stop"), additionalContext: o().optional() }).describe(
      "Hook-specific output for the Stop event. additionalContext is non-error feedback delivered to the model; the conversation continues so the model can act on it."
    )
  ),
  pF = p(() =>
    u({ hookEventName: A("SubagentStop"), additionalContext: o().optional() }).describe(
      "Hook-specific output for the SubagentStop event. additionalContext is non-error feedback delivered to the subagent; the subagent continues so it can act on it."
    )
  ),
  mF = p(() => u({ hookEventName: A("PermissionDenied"), retry: M().optional() })),
  _F = p(() => u({ hookEventName: A("Notification"), additionalContext: o().optional() })),
  gF = p(() =>
    u({
      hookEventName: A("PermissionRequest"),
      decision: $e([
        u({
          behavior: A("allow"),
          updatedInput: me(o(), oe()).optional(),
          updatedPermissions: T(Ft()).optional()
        }),
        u({ behavior: A("deny"), message: o().optional(), interrupt: M().optional() })
      ])
    })
  ),
  fF = p(() => u({ hookEventName: A("CwdChanged"), watchPaths: T(o()).optional() })),
  bF = p(() => u({ hookEventName: A("FileChanged"), watchPaths: T(o()).optional() })),
  EF = p(() =>
    u({
      hookEventName: A("MessageDisplay"),
      displayContent: o()
        .optional()
        .describe(
          "Text displayed in place of the delta. Omit (or return the delta unchanged) to display the original."
        )
    }).describe(
      "Hook-specific output for the MessageDisplay event. Display-only: replaces the delta on screen without changing the stored message."
    )
  ),
  SF = p(() =>
    u({
      continue: M().optional(),
      suppressOutput: M().optional(),
      stopReason: o().optional(),
      decision: B(["approve", "block"]).optional(),
      systemMessage: o().optional(),
      terminalSequence: o()
        .optional()
        .describe(
          "A terminal escape sequence (e.g. OSC 9 / OSC 777 desktop-notification) for Claude Code to emit on your behalf. Only notification/title OSCs (0, 1, 2, 9, 99, 777) and BEL are permitted; anything else is dropped."
        ),
      reason: o().optional(),
      hookSpecificOutput: $e([
        tF(),
        sF(),
        nF(),
        rF(),
        oF(),
        aF(),
        iF(),
        lF(),
        dF(),
        hF(),
        cF(),
        uF(),
        pF(),
        mF(),
        _F(),
        gF(),
        TF(),
        wF(),
        fF(),
        bF(),
        yF(),
        EF()
      ]).optional()
    })
  ),
  TF = p(() =>
    u({
      hookEventName: A("Elicitation"),
      action: B(["accept", "decline", "cancel"]).optional(),
      content: me(o(), oe()).optional()
    }).describe(
      "Hook-specific output for the Elicitation event. Return this to programmatically accept or decline an MCP elicitation request."
    )
  ),
  wF = p(() =>
    u({
      hookEventName: A("ElicitationResult"),
      action: B(["accept", "decline", "cancel"]).optional(),
      content: me(o(), oe()).optional()
    }).describe(
      "Hook-specific output for the ElicitationResult event. Return this to override the action or content before the response is sent to the MCP server."
    )
  ),
  yF = p(() =>
    u({ hookEventName: A("WorktreeCreate"), worktreePath: o() }).describe(
      "Hook-specific output for the WorktreeCreate event. Provides the absolute path to the created worktree directory. Command hooks print the path on stdout instead."
    )
  ),
  yA = p(() => $e([eF(), SF()])),
  Wt = p(() =>
    u({
      name: o().describe("Skill name (without the leading slash)"),
      description: o().describe("Description of what the skill does"),
      argumentHint: o().describe('Hint for skill arguments (e.g., "<file>")'),
      aliases: T(o())
        .optional()
        .describe(
          "Alternate names that resolve to this command (e.g., /cost and /stats both resolve to /usage)"
        ),
      builtin: M()
        .optional()
        .describe(
          "True when the command is Claude Code's own; absent for a command defined by a user, project, plugin or MCP server. Rows can share a name: when a marked row carries it, /name runs that one, and an unmarked row is the one /name runs only when no marked row shares its name. The marker describes the row's name, not its aliases: a typed alias runs a command that has it as its name, when one exists, whatever this marker says."
        ),
      plugin: o()
        .optional()
        .describe(
          "@internal The plugin that registered the command through `$.command.register`, by name, so a client can say whose it is: the name and description are the plugin's own words. Absent for every other command, one a plugin the binary carries registered included. Untrusted text: escape it before display."
        )
    }).describe("Information about an available skill (invoked via /command syntax).")
  ),
  co = p(() =>
    u({
      name: o().describe('Agent type identifier (e.g., "Explore")'),
      description: o().describe("Description of when to use this agent"),
      model: o()
        .optional()
        .describe(
          "Model this agent uses: an alias or model ID, or 'inherit' for the parent's model. If omitted, uses the default subagent model when one is configured, else the parent's model"
        )
    }).describe("Information about an available subagent that can be invoked via the Task tool.")
  ),
  hn = p(() =>
    u({
      value: o().describe("Model identifier to use in API calls"),
      resolvedModel: o()
        .optional()
        .describe(
          "Canonical wire model id this row's `value` resolves to (e.g. 'sonnet' \u2192 'claude-sonnet-5'). Lets hosts match a persisted explicit id against the alias row that covers it."
        ),
      displayName: o().describe("Human-readable display name"),
      description: o().describe("Description of the model's capabilities"),
      supportsEffort: M().optional().describe("Whether this model supports effort levels"),
      supportedEffortLevels: T(B(["low", "medium", "high", "xhigh", "max"]))
        .optional()
        .describe("Available effort levels for this model"),
      supportsAdaptiveThinking: M()
        .optional()
        .describe(
          "Whether this model supports adaptive thinking (Claude decides when and how much to think)"
        ),
      supportsFastMode: M().optional().describe("Whether this model supports fast mode"),
      supportsAutoMode: M().optional().describe("Whether this model supports auto mode"),
      supportsThinkingOff: M()
        .optional()
        .describe("@internal Whether thinking can be turned off for this model"),
      disabled: M()
        .optional()
        .describe(
          "@internal Model is visible but not selectable (e.g. a model the org's Zero Data Retention setting excludes). The human-readable reason is folded into `description`; a structured disabledReason field is the extension point if a consumer ever needs the reason separately."
        ),
      promoListPrice: o()
        .optional()
        .describe(
          "@internal List price (e.g. `$3/$15`) for a model currently on a launch promo. `description` carries only the promo price so plain-text consumers read it unambiguously; rich pickers prepend this struck-through before the first `$X/$Y` in `description`. Absent when no promo is active."
        )
    }).describe("Information about an available model.")
  ),
  AA = p(() =>
    u({
      email: o().optional(),
      organization: o().optional(),
      subscriptionType: o().optional(),
      tokenSource: o().optional(),
      apiKeySource: o().optional(),
      apiProvider: B([
        "firstParty",
        "bedrock",
        "vertex",
        "foundry",
        "anthropicAws",
        "anthropicGoogleCloud",
        "mantle",
        "gateway"
      ])
        .optional()
        .describe(
          'Active API backend. Anthropic OAuth login only applies when "firstParty"; for 3P providers the other fields are absent and auth is external (AWS creds, gcloud ADC, etc.). "gateway" means the CLI is authenticated against an enterprise gateway.'
        )
    }).describe("Information about the logged in user's account.")
  ),
  AF = p(() => $e([o(), me(o(), cn())])),
  RA = p(() =>
    u({
      description: o().describe("Natural language description of when to use this agent"),
      tools: T(o())
        .optional()
        .describe(
          "Array of allowed tool names. If omitted, inherits all tools from parent. Note: passing 'Skill' here is deprecated \u2014 use the `skills` field instead."
        ),
      disallowedTools: T(o())
        .optional()
        .describe(
          "Array of tool names to explicitly disallow for this agent. MCP server-level specs (mcp__server, mcp__server__*, mcp__*) remove every tool from the named server (or all MCP tools)."
        ),
      prompt: o().describe("The agent's system prompt"),
      model: o()
        .optional()
        .describe(
          "Model alias (e.g. 'fable', 'opus', 'sonnet', 'haiku') or full model ID (e.g. 'claude-fable-5'). 'inherit' uses the main model; if omitted, uses the default subagent model when one is configured, else the main model"
        ),
      mcpServers: T(AF()).optional(),
      criticalSystemReminder_EXPERIMENTAL: o()
        .optional()
        .describe("Experimental: Critical reminder added to system prompt"),
      skills: T(o()).optional().describe("Array of skill names to preload into the agent context"),
      initialPrompt: o()
        .optional()
        .describe(
          "Auto-submitted as the first user turn when this agent is the main thread agent. Slash commands are processed. Prepended to any user-provided prompt."
        ),
      maxTurns: v()
        .int()
        .positive()
        .optional()
        .describe("Maximum number of agentic turns (API round-trips) before stopping"),
      autoCompactWindow: v()
        .int()
        .min(kR)
        .max(xH)
        .optional()
        .describe(
          "Token count at which this agent compacts its own conversation when it runs as a subagent. It only lowers the window the subagent would otherwise inherit. No effect on the main session agent."
        ),
      background: M()
        .optional()
        .describe(
          "Run this agent as a background task (non-blocking, fire-and-forget) when invoked"
        ),
      omitClaudeMd: M()
        .optional()
        .describe(
          "Run this agent without the user, project and local CLAUDE.md instruction files when it runs as a subagent; managed policy files are kept. For agents that take everything they need from the delegation prompt. No effect on the main session agent."
        ),
      memory: B(["user", "project", "local"])
        .optional()
        .describe(
          "Scope for auto-loading agent memory files. 'user' - ~/.claude/agent-memory/<agentType>/, 'project' - .claude/agent-memory/<agentType>/, 'local' - .claude/agent-memory-local/<agentType>/"
        ),
      effort: $e([B(["low", "medium", "high", "xhigh", "max"]), v().int()])
        .optional()
        .describe("Reasoning effort level for this agent. Either a named level or an integer"),
      permissionMode: de()
        .optional()
        .describe("Permission mode controlling how tool executions are handled"),
      observer: o()
        .optional()
        .describe(
          "Agent type auto-spawned as a background observer whenever this agent runs. The observer receives read-only activity digests and reports via the ObserverReport tool; it never participates in the task."
        ),
      observerMessage: o()
        .optional()
        .describe(
          "Supplemental postamble appended (after the harness-owned default) to each activity digest sent to the observer. Blank values are ignored."
        )
    }).describe("Definition for a custom subagent that can be invoked via the Agent tool.")
  ),
  k8 = p(() =>
    B(["user", "project", "local"]).describe(
      "Source for loading filesystem-based settings. 'user' - Global user settings (~/.claude/settings.json). 'project' - Project settings (.claude/settings.json). 'local' - Local settings (.claude/settings.local.json)."
    )
  ),
  irt = p(() =>
    u({
      type: A("local").describe("Plugin type. Currently only 'local' is supported"),
      path: o().describe("Absolute or relative path to the plugin directory"),
      skipMcpDiscovery: M()
        .optional()
        .describe(
          "When true, the engine loads skills/hooks/agents/commands from this plugin but does NOT read its .mcp.json or manifest mcpServers. Use when the SDK host owns this plugin's MCP connections."
        )
    }).describe("Configuration for loading a plugin.")
  ),
  ho =
    "Count of tracked files NOT restored or deleted because a symlink, hard link, or other non-regular file was detected at the tracked path, its parent directory no longer resolves to where it pointed when the checkpoint was taken, or its backup could not be safely read. Only populated by a real (non-dryRun) rewind \u2014 on a dryRun response the field is never set and the preview counts do not reflect link-safety refusals. Absent or 0 on a real rewind means no link-safety refusals occurred; other per-file failures (for example a missing backup file) are not counted here; they are reported in telemetry, and when every differing file fails to restore the rewind itself fails (canRewind: false).",
  z8 = p(() =>
    u({
      canRewind: M(),
      error: o().optional(),
      filesChanged: T(o()).optional(),
      insertions: v().int().optional(),
      deletions: v().int().optional(),
      skippedLinks: v().optional().describe(ho)
    }).describe("Result of a rewindFiles operation.")
  ),
  RF = p(() =>
    lA().describe(
      'An Anthropic Messages API user message: a MessageParam with role "user" whose content is a string or an array of content blocks (text, image, document, tool_result, ...). See the Messages API reference for the block types.'
    )
  ),
  vF = p(() => eo()),
  kF = p(() =>
    hA().describe(
      'Shaped like an Anthropic Messages API Message object (role "assistant"): id, model, content blocks (text, thinking, tool_use, ...), stop_reason and usage. When streamed, content typically holds the single block this message delivers and stop_reason is still null \u2014 see SDKAssistantMessage. See the Messages API reference for the block types.'
    )
  ),
  zF = p(() =>
    oe().describe(
      "One Anthropic Messages API streaming event (message_start, content_block_start, content_block_delta, content_block_stop, message_delta, message_stop) as defined for the streaming Messages API."
    )
  ),
  m = p(() => o()),
  vA = p(() =>
    to().describe(
      "MAIN AGENT LOOP ONLY \u2014 excludes Task subagent, sidechain, and auxiliary model calls, and is per-turn in streaming-input sessions. Prefer modelUsage for token/cost accounting."
    )
  ),
  uo = p(() =>
    B([
      "authentication_failed",
      "oauth_org_not_allowed",
      "account_on_hold",
      "verification_required",
      "billing_error",
      "rate_limit",
      "overloaded",
      "invalid_request",
      "model_not_found",
      "server_error",
      "unknown",
      "max_output_tokens",
      "cloud_credential_error"
    ])
  ),
  CF = p(() => $e([A("compacting"), A("requesting"), sm()])),
  kA = p(() =>
    u({
      uri: o(),
      name: o(),
      title: o().optional(),
      description: o().optional(),
      mimeType: o().optional(),
      size: v().optional(),
      annotations: me(o(), oe()).optional()
    })
  ),
  OF = p(() =>
    u({
      kind: B(Oii),
      servers: T(o())
        .optional()
        .describe(
          "mcp_needs_auth / mcp_disabled: the server names as configured. mcp_required_missing: the name patterns the agent definition requires that no connected server matches."
        ),
      provider: B(Mii)
        .optional()
        .describe(
          "auth_expired / auth_overridden / auth_missing_scope / design_needs_authorization: whose login the fix names \u2014 'claude_ai' (the claude.ai account, /login) or 'claude_design' (Claude Design's own authorization, /design login)."
        ),
      path: o()
        .optional()
        .describe(
          "outside_reads_blocked: the path the read block refused, when the refusal names one. staged_for_review: the settings file the write was held for."
        ),
      managed: M()
        .optional()
        .describe(
          "outside_reads_blocked: an organization policy sets the block, so the user cannot remove it. auth_overridden: the overriding credential was injected by the host environment, so nothing in this session can unset it."
        ),
      feature: B(Dii)
        .optional()
        .describe("feature_disabled / policy_denied: the feature that is off."),
      cause: B(Hii)
        .optional()
        .describe(
          "feature_disabled: why the feature is off \u2014 'managed_settings' (CLAUDE_CODE_DISABLE_WORKFLOWS, or disableWorkflows or enableWorkflows: false set by a layer above the user's own settings), 'org_policy', 'unavailable' (not launched for this account), 'user_setting' (the user's /config setting is off, including a disableWorkflows in their own settings, and nothing the user cannot clear also keeps them off), or 'unsupported_runtime' (this Claude Code process is not running on Bun, the runtime its binary is built with, and workflow scripts run only there)."
        ),
      policy_kind: B(Lii)
        .optional()
        .describe(
          "policy_denied: the verdict \u2014 'org_denied' (the organization's policy turns the feature off) or 'latched' (a HIPAA-regulated organization signed in earlier in this process; restarting clears it)."
        )
    }).describe(
      "@internal The fix a host can offer for a tool result, stamped from structured producer state (never parsed from the result text). Kinds: mcp_needs_auth, mcp_disabled, mcp_required_missing, auth_expired, auth_overridden, auth_missing_scope, design_needs_authorization, sandbox_violation, outside_reads_blocked, memory_paused, feature_disabled, policy_denied, spawn_arg_limit (the command's exec image exceeded the OS argument limit), staged_for_review (a settings-file write held for the machine owner's review). New kinds are additive; treat an unknown kind as absent."
    )
  ),
  po = p(() =>
    Gr("kind", [
      u({ kind: A("human") }),
      u({ kind: A("channel"), server: o() }),
      u({
        kind: A("peer"),
        from: o(),
        fromMode: B(["bypass", "prompting"])
          .optional()
          .describe(
            "The SENDING session's permission class as declared by the host that injects this message on local stdin ('bypass' for sessions that run tools without asking, 'prompting' otherwise). Lets the recipient deliver a same-class message immediately while a cross-class or undeclared sender is still held at a recipient that runs without asking. Honored only from the injecting host on local stdin; absent when the host does not declare it."
          ),
        name: o()
          .optional()
          .describe(
            "Sender display name, normalized by the harness: Unicode control, format, surrogate, and line/paragraph-separator code points stripped (categories Cc/Cf/Cs/Zl/Zp \u2014 covers bidi controls, zero-width characters, and tag characters), trimmed, at most 64 code points (+ ellipsis, never splitting a surrogate pair). Sender-asserted display text (the addressable identity is `from`) \u2014 render it as reported speech, but no client-side character sanitization is needed. Absent when the wire is not exactly one harness-formed envelope and on messages from older senders."
          ),
        fromSession: o()
          .optional()
          .describe(
            "The sender's host-openable session id (the envelope's `from-session` attribute \u2014 e.g. a desktop `local_<uuid>` or a cloud session `session_`/`ses_` id), set by the sender's host so a receiving UI can link this message back to the sending session. Sender-asserted like `from`: a navigation target only, never authority. Absent when the sender's host provides none and on messages from older senders."
          ),
        inbound_origin: o()
          .optional()
          .describe(
            "@internal Server-asserted ingest path of the demoted delivery, copied at classification from the message-level `inbound_origin`."
          ),
        senderTaskId: o()
          .optional()
          .describe(
            "Task id of the in-process background subagent that sent this message, stamped by the harness from the sending loop (never from tool input). Absent for cross-session peers."
          ),
        body: o()
          .optional()
          .describe(
            "Decoded message body with the peer envelope stripped \u2014 byte-exact with what the model sees. Present only when the turn is exactly one harness-formed envelope (or an in-process agent message); render this instead of re-parsing the message text."
          ),
        verifiedPeerPid: v()
          .optional()
          .describe(
            "Kernel-verified pid of the process that connected to this session's cross-session messaging socket, read from the connection (SO_PEERCRED / LOCAL_PEERPID) \u2014 never from the payload. This identifies the CONNECTING process, which for relayed traffic (e.g. a daemon forwarding on another session's behalf) is the relay, not the message's author. Key sender identity on this, never on `from`: `from` is sender-authored and kept only for reply routing, so it is forgeable by any same-user process. Absent when unverifiable (Windows, non-UDS ingress) \u2014 never a wrong value. Pids are recyclable: provenance, not an authentication token."
          ),
        handback: A(!0)
          .optional()
          .describe(
            "@internal Present, and always true, when the message is a subagent's final report to the agent that launched it, delivered through the SubagentHandback tool. Stamped by the harness, never from tool input. `body` is then the hand-back frame line with the indented report under it, and any harness note above it; `handbackReportText` and `handbackNote` carry those two parts for display. A boolean mark: not the `handback` state string of a task notification or of an Agent tool result. A hand-back is never joined, so neither this mark nor `flagged` appears beside `members`."
          ),
        flagged: A(!0)
          .optional()
          .describe(
            "@internal Present, and always true, on a hand-back that auto mode's review blocked, or that it could not judge because a safety filter refused the review request: the report was delivered all the same, under the SECURITY WARNING that `handbackNote` carries. Never cap or fold such a message: show the note and the report in full. Absent on a hand-back that was not flagged, including one delivered under the note that the review was unavailable."
          ),
        handbackNote: o()
          .optional()
          .describe(
            "@internal On a hand-back: the note the harness composed above the frame line in `body`, without the indent. On a blocked report it quotes the review's reason, which can quote the report, so show it as untrusted text. Absent when there is no note."
          ),
        handbackReportText: o()
          .optional()
          .describe(
            "@internal On a hand-back: the subagent's report as the model reads it, under the frame line in `body`, without the indent. Draw it as a separate element from `handbackNote`: the two fields are their only boundary. Absent wherever `body` is and on a message that is not a hand-back."
          ),
        members: T(u({ body: o() }))
          .optional()
          .describe(
            "@internal On a prompt that joins several queued messages from this sender: the joined messages in the order the model reads them, each with its own `body`. The origin's `body` is then absent. Absent on a message that was not joined and when any joined message had no `body`."
          )
      }),
      u({
        kind: A("task-notification"),
        subkind: B(["scheduled-trigger", "peer-send-message", "projects-relay", "session-inbox"])
          .optional()
          .describe(
            "Present when the delivery is the fired stored prompt of a scheduled task/routine ('scheduled-trigger', stamped from server-asserted provenance, or declared by a local host for its own scheduled runs; the schedule attests storage, not authorship) or a coordinator co-member SendMessage delivery ('peer-send-message': model-authored text from another of the same user's sessions, verified by the server-stamped receiver co-membership \u2014 task-notification for prompt authority, but distinguishable so the receive-side crossSessionInbound setting can apply to it). The harness frames a scheduled-trigger delivery as the session's assigned task instead of the generic background-notification frame. Absent on webhook, PR-steward, plugin, and background-event deliveries."
          ),
        fireReason: o()
          .optional()
          .describe(
            "On a 'scheduled-trigger' delivery, why it fired: a short lowercase token such as 'scheduled', 'manual', 'retry', 'catch_up' or 'api'. Set by the server for cloud routines, or declared by a local host for its own scheduled runs, which is honored only in a process the host started with CLAUDE_CODE_HOST_SCHEDULED_RUN=1 (a local host's value is kept only if it is 1 to 32 lowercase letters or underscores); absent when neither sent one."
          ),
        producer: A("session-task")
          .optional()
          .describe(
            "@internal Present ('session-task') when the notification reports on work this session itself launched: a background agent, shell command, workflow, monitor, MCP or remote task settling, a detached tool call, or a hook rewake or worker check-in following up on such work. Absent on webhook, artifact and other externally-authored deliveries."
          ),
        runId: o()
          .optional()
          .describe(
            "On a background task's own notification: the run_id its task_* events carried, as of when the notification was queued. Not part of the text the model reads."
          ),
        taskKind: A("mcp-task")
          .optional()
          .describe(
            "@internal Present ('mcp-task') only on a notification that an MCP server's own task has ended, and not on every one. Narrower than task_type 'mcp_task', which also covers an MCP tool call moved to the background."
          )
      }),
      u({ kind: A("coordinator") }),
      u({ kind: A("unclassified") }).describe(
        "Injected turn whose ingress classification found no provenance. Framed by the harness as a non-user source in both drains; never presumed human, never host-replayed."
      ),
      u({ kind: A("observer"), from: o(), senderTaskId: o() }).describe(
        "Report from a background observer agent to the agent it observes. One-way by construction \u2014 the observed agent must not reply."
      ),
      u({ kind: A("auto-continuation") }),
      u({ kind: A("observer-activity") }).describe(
        "Activity digest delivered to an observer agent. The message body is the self-framing digest (envelope + postamble); observed content is data, not instructions."
      )
    ]).describe(
      "Provenance of a user-role message (peer session, team lead, channel). A host wrapping keyboard input must stamp {kind:'human'} explicitly \u2014 absent origin is treated as unattributed and fails closed at strict isHuman() trust gates."
    )
  ),
  zA = p(() =>
    u({
      type: A("user"),
      message: RF(),
      parent_tool_use_id: o().nullable(),
      isSynthetic: M().optional(),
      tool_use_result: oe()
        .optional()
        .describe(
          "Structured tool output \u2014 the tool's full Output object, not the string content sent to the model. The shape is per-tool, keyed by the matching tool_use block's name (see the *Output types in toolTypes); MCP and dynamic tools carry their own shapes, so the field stays unknown-typed. For the Agent/Task tool the completed shape is the subagent's final report without the model-directed agentId/usage trailer, plus run totals \u2014 render from it instead of parsing the tool_result text. A call that stepped aside for a message the user sent (today a WebFetch or WebSearch call) carries `{ detachedToolCall: true }` in place of its Output: the call is still running, and its result reaches the model in a later turn."
        ),
      priority: B(["now", "next", "later"]).optional(),
      requeue_if_interrupted_within_ms: v()
        .int()
        .positive()
        .optional()
        .describe(
          "@internal Input only. Asks the CLI to put this prompt back in its queue, instead of losing it, when an interrupt crosses with a running turn taking the prompt in: the interrupt was sent while its sender still believed the prompt was waiting. The value says for how long an interrupt is taken to have been sent so: a whole number of milliseconds from 1, and above 10000 it counts as 10000. The time runs from the moment the turn announces the model request that carries the prompt (system/status 'requesting', which is on the wire only with partial messages); until then it has not begun. The prompt is put back when an interrupt control request without cancel_queued stops that turn within the time and before the model's next reply has begun to arrive. It goes back to the front of the queue under the same uuid and runs in a later turn of its own, after any queued prompt of higher priority; prompts queued behind it are not merged into that turn's prompt, though the turn can take them in as any turn does. The interrupt's response lists it under still_queued and under put_back, and from then on cancel_async_message can withdraw it. The stopped turn reports no 'cancelled' for it, counts it in its result's queued_turn_count (if its origin is stamped user-driven, as for any queued prompt) and leaves it out of that result's user_message_uuids (on an error result an empty list, with no user_message_uuid, if nothing else is listed). On stdout it reports command_lifecycle 'queued' a second time; over a remote transport its delivery is not reported 'processed' until its later turn ends. With cancel_queued:true it stays with the stopped turn and is not listed under the response's cancelled. The row the stopped turn wrote for it (a queued_command attachment) leaves the conversation and is never stored, so the model sees the prompt once; until the prompt can no longer be put back, that row and the rows after it are kept out of the stored transcript. UserPromptSubmit hooks run for it twice, and what they added to the stopped turn stays. If a compaction begins while that row is kept out, the row is stored at once and stays in the conversation, so the prompt, if an interrupt puts it back or has just done so, is seen twice. A prompt is put back at most once, and never after the host's own cancel_async_message for it answered cancelled:false. Of several prompts taken in since the model last spoke, only the last can be put back; the others stay with the stopped turn. The field is ignored when it is not such a number, when the message has no uuid or has shouldQuery:false, and when the message is not a person's own typing: a synthetic, hidden, client-composed, seeded, peer or relayed message, one that declares a non-human origin, or one whose client_platform names no app or keyboard that a person types in. claude-code-server also needs a client_platform, and one that names an app. A CLI that does not advertise interrupt_requeue_taken_v1 on system/init ignores the field too."
        ),
      origin: po().optional(),
      client_platform: o()
        .optional()
        .describe(
          "@internal The `anthropic-client-platform` value of the client that sent this message (e.g. `ios`, `android`, `web_claude_ai`, `desktop_app`). Injected server-side by CCR ingress from the request header."
        ),
      inbound_origin: o()
        .optional()
        .describe(
          "@internal Server-asserted ingest path that produced this message. Not settable by clients."
        ),
      server_received_wall_ms: v()
        .optional()
        .describe(
          "@internal Epoch ms on the session server's clock when it received the HTTP request that delivered this message. Written by the session server; the CLI copies it to the turn's result as user_message_server_received_wall_ms."
        ),
      historical: M()
        .optional()
        .describe(
          "@internal Replayed history rather than a live message: the Remote Control bridge stamps it on the messages it flushes to the session server, which also stamps it on deliveries it replays."
        ),
      shouldQuery: M()
        .optional()
        .describe(
          "When false, the message is appended to the transcript without triggering an assistant turn. It will be merged into the next user message that does query."
        ),
      timestamp: o()
        .optional()
        .describe(
          "ISO timestamp when the message was created on the originating process. Older emitters omit it; consumers should fall back to receive time."
        ),
      is_meta: A(!0)
        .optional()
        .describe(
          "@internal True when the message was synthesized by the loop (not user keyboard input). From internal UserMessage.isMeta."
        ),
      seeded_summon: A(!0)
        .optional()
        .describe("@internal Desktop host only: the host's own seeded summon."),
      client_composed: A(!0)
        .optional()
        .describe(
          "The client composed this turn from content the user did not type; the CLI delivers its text as written, with no `@path` file-mention expansion and no slash-command dispatch. On current CLIs the turn-start attachment pass is skipped as a whole: `@server:resource` MCP mentions are not expanded either, and the prompt is sent without the context the CLI normally attaches alongside it (nested `CLAUDE.md` and rules files, skill and tool listings, reminders); the pass the CLI runs between tool calls is unaffected."
        ),
      text_not_typed: Ia(Jr, A(!0).optional()).describe(
        "@internal No person typed this message's text in this session (a server or an app composed it). The text is delivered as written and is not treated as typing: no slash-command dispatch, no at-mention expansion beyond the message's own uploaded files, no reminder or command from keywords in it, and a skill named in it does not count as typed by the user. Who sent the message, and whether a person is present, stays with its origin. The checks of whether a message's words are the user's own do not read this mark yet: they too go by the origin. Unlike client_composed, the turn-start attachment pass still runs. Any value other than false or null is read as true."
      ),
      initiator: o()
        .optional()
        .describe(
          "@internal The host's own label for what started this turn (e.g. the desktop app's `scheduled-task`, `sleep-auto-resume`); `user` or absent means a person sent it. Usage attribution only; it does not change how the turn runs."
        ),
      is_visible_in_transcript_only: A(!0)
        .optional()
        .describe(
          "@internal True when the message is stored in the transcript but not rendered in the live UI."
        ),
      is_virtual: A(!0)
        .optional()
        .describe("@internal Display-only: rendered in the UI but filtered before API send."),
      is_compact_summary: A(!0)
        .optional()
        .describe("@internal True when this user message is a compact-summary synthetic message."),
      summarize_metadata: u({
        messages_summarized: v().int(),
        user_context: o().optional(),
        direction: B(["from", "up_to"]).optional()
      })
        .optional()
        .describe(
          '@internal Metadata for "Summarize from here" / "Summarize up to here" summaries (from internal UserMessage.summarizeMetadata).'
        ),
      mcp_meta: u({
        _meta: me(o(), oe()).optional(),
        structured_content: me(o(), oe()).optional(),
        resource_links: T(kA())
          .optional()
          .describe(
            "CLI-owned: the `resource_link` content blocks the MCP tool returned, collected from the raw result before the CLI rewrites each into the `[Resource link: NAME] URI` text line the model reads \u2014 so a host renders the files without parsing that line. At most 50 links and 64 KiB serialized; absent when the result had none, and absent on a subagent's tool results (parent_tool_use_id set), whose mcpMeta carries `_meta` only. On today's wire this rides the mcpMeta spread as `tool_use_result.resourceLinks`. A sibling of `_meta`, never inside it: a server cannot supply it, and server `_meta` keys under the CLI-reserved `com.anthropic/` prefix are dropped before this message."
          )
      })
        .optional()
        .describe(
          "@internal MCP protocol metadata passed through to SDK consumers, never sent to the model (from internal UserMessage.mcpMeta)."
        ),
      tool_result_meta: T(
        u({
          id: o(),
          non_execution_kind: B(YKt).optional(),
          user_feedback: o().optional(),
          remedy: OF().optional(),
          permission_decision: u({
            decision: B(uA),
            source: o(),
            reason_type: B(DTt)
              .optional()
              .catch(void 0)
          })
            .optional()
            .catch(void 0)
        })
      )
        .optional()
        .describe(
          "@internal Display metadata for this message's tool_result blocks, keyed by tool_use_id. non_execution_kind is the harness-stamped reason an is_error:true result did not carry the tool's own execution output (user-rejected / permission-rule / automode-* / interrupted / cancelled); absent means the tool ran to completion. remedy is the fix a host can offer for what the result reports (see SDKToolResultRemedy). An entry may carry a remedy alone, on a result that did run (a staged write, a sandbox violation on exit 0), so whether a call ran is read from non_execution_kind, never from an entry's presence. On a subagent's messages (parent_tool_use_id set), entries carry only permission_decision, so those messages do not say whether a call ran. permission_decision is how the call's permission check ended, as Claude Code's claude_code.tool.blocked_on_user trace span reports it. decision is accept, reject or cancelled. source names what decided: config, classifier, hook, user_temporary, user_permanent, user_reject, user_abort, or invalid_input, permission_updated_input_invalid or server_fallback_tombstone when bad input or the server ended the wait. Which label a rule gets depends on the session: in SDK sessions a rule for this session or in the user's own settings reports user_temporary, user_permanent or user_reject and other rules report config, while interactive sessions report every rule as config. reason_type is the kind of reason the check gave when it decided by itself, such as 'rule' whenever a rule decided, or 'classifier' for an auto-mode allow, which reports source config. reason_type is absent when a person or the SDK host answered the question, when the check's outcome was still a question, and for user_abort and the last three sources above. permission_decision is absent when the call ended before its permission check, and on some results built apart from the call's own run, such as a plugin hook's refusal, a hook's rewrite of a denied result, or the result the tool executor writes for a queued call that a stop cancelled. user_feedback is the deny comment a human typed at a permission prompt (the local dialog or a bridge client's deny UI), before the CLI's reject-message framing \u2014 absent when the deny was resolved by a coordinator, channel relay, or hook rather than a human. A deny answered through the SDK control protocol (can_use_tool / --permission-prompt-tool) currently reports as 'permission-rule' with no user_feedback, because that wire carries no human-provenance signal. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model. Clients read this instead of string-matching the result prose."
        ),
      source_tool_use_id: o()
        .optional()
        .describe(
          "@internal When this message was generated by a tool via newMessages, links it to that tool_use id."
        ),
      source_tool_assistant_uuid: o()
        .optional()
        .describe(
          "@internal For tool_result messages: UUID of the assistant message containing the matching tool_use block. Used for parentUuid assignment in transcript."
        ),
      image_paste_ids: T(v().int())
        .optional()
        .describe(
          "@internal Paste IDs for images in this message, in order of appearance. REPL-local state \u2014 candidate for surface-side if daemon has no use for it."
        ),
      plan_content: o()
        .optional()
        .describe(
          "@internal Plan to implement (cleared-context flow). When set, the message is rendered with plan styling."
        ),
      permission_mode: de()
        .optional()
        .describe(
          "@internal Permission mode active when this message was sent (for rewind restoration)."
        ),
      interrupted_message_id: o()
        .optional()
        .describe(
          "@internal For [Request interrupted by user] markers only: the API msg_* id that Esc cancelled."
        ),
      refused_message_id: o()
        .optional()
        .describe(
          "@internal Only on the synthetic message that re-asks the same model after a refusal: the API msg_* id of the refused response. Absent when the CLI has no well-formed id for it."
        )
    })
  ),
  un = p(() =>
    zA()
      .extend({
        uuid: m().optional(),
        pasted_content: T(vF())
          .optional()
          .describe(
            "Content the user pasted into the prompt rather than typed: each entry a string or an array of content blocks. The CLI appends the text of each entry after the typed text, in order, and may wrap it in `<pasted_content>` tags. Blocks other than text are ignored; send images and documents in `message.content`. A list of over 1,000 entries and blocks in all is ignored."
          ),
        inline_pastes: T(o())
          .optional()
          .describe(
            "Text the user pasted that is still in `message.content` where they put it: each entry one paste. The prompt is not changed by the host; the CLI may wrap each entry in `<pasted_content>` tags where it still stands in the last text block. It looks for the first 100 entries that are not blank. For a paste the host took out of `message`, use `pasted_content` instead."
          ),
        session_id: o().optional(),
        agent_id: o()
          .optional()
          .describe(
            "ID of the subagent that produced this message: the `task_id` of its task events, unchanged when the subagent is resumed. Absent on main-thread messages."
          ),
        subagent_type: o().optional().describe("Subagent type that produced this message."),
        task_description: o()
          .optional()
          .describe("Description of the subagent task that produced this message."),
        file_attachments: T(oe())
          .optional()
          .describe(
            "@internal Files a remote client attached to this prompt (each {file_uuid, file_name, is_image?, sha256?, file_size?}; src/bridge/inboundAttachmentSchema.ts reads them). Typed like SDKUserMessageReplay.file_attachments so the two message types stay assignable."
          )
      })
      .describe(
        "A user-role message. A client writes one to the CLI to submit a prompt (this starts a turn); the CLI emits them for user-role content it adds to the conversation itself, chiefly the tool_result blocks answering the assistant's tool_use blocks."
      )
  ),
  NF = p(() =>
    zA().extend({
      uuid: m(),
      session_id: o(),
      isReplay: A(!0),
      file_attachments: T(oe()).optional()
    })
  ),
  CA = p(() =>
    u({
      type: A("bash_command"),
      command: o().describe(
        "Shell command run verbatim, without the model and without permission checks. Trust model matches the local TUI `!cmd` path (no sandbox, no per-command prompt). By default it runs in a one-shot `/bin/sh -c` (or `pwsh`) beside the conversation, which never sees it; on a cloud worker with tengu_cloud_session_shell on it runs as the TUI's `!cmd` does, through the Bash tool (its working directory carries over to later commands and to the model's Bash calls), as a turn of its own, so the model sees the command and its output. The worker refuses some commands with a row saying why (for example a stale one, one over 65,536 characters, one containing control characters, or one sent to a host that does not run them) and skips a duplicate silently (cli/headlessHost/bashCommand.ts)."
      ),
      cwd: o()
        .optional()
        .describe(
          "Working directory for the command. Falls back to the session cwd when omitted. With tengu_cloud_session_shell on, the command runs in the session's current directory and one naming any other directory is refused."
        ),
      uuid: m().optional(),
      session_id: o().optional()
    }).describe(
      "@internal A user-initiated shell command. Input-only \u2014 sent by CCR clients that surface a dedicated terminal UI; never emitted on stdout. Acknowledged on arrival and, unless blank, too long or a duplicate, echoed at once as a `<bash-input>` replay row; then answered with exactly one more row: its output (a replay frame when run beside the conversation; a plain user message after its own turn when it joins the conversation, possibly followed by the model replying) or a `<bash-stderr>Not run: \u2026</bash-stderr>` replay row saying why it was refused or dropped. A blank or too-long command gets only its Not run row; a duplicate gets nothing. Other rows can come between the echo and that row."
    )
  ),
  cYr = p(() =>
    u({
      status: B(["allowed", "allowed_warning", "rejected"]),
      resetsAt: v().int().optional(),
      rateLimitType: B([
        "five_hour",
        "seven_day",
        "seven_day_opus",
        "seven_day_sonnet",
        "seven_day_overage_included",
        "overage"
      ]).optional(),
      utilization: v().optional(),
      unifiedWindows: u({
        five_hour: u({
          utilization: v(),
          resetsAt: v().int(),
          status: B(["allowed", "allowed_warning", "rejected"])
            .optional()
            .catch(void 0),
          surpassedThreshold: v()
            .optional()
            .catch(void 0)
        }).optional(),
        seven_day: u({
          utilization: v(),
          resetsAt: v().int(),
          status: B(["allowed", "allowed_warning", "rejected"])
            .optional()
            .catch(void 0),
          surpassedThreshold: v()
            .optional()
            .catch(void 0)
        }).optional(),
        seven_day_overage_included: u({
          utilization: v(),
          resetsAt: v().int(),
          status: B(["allowed", "allowed_warning", "rejected"])
            .optional()
            .catch(void 0),
          surpassedThreshold: v()
            .optional()
            .catch(void 0)
        }).optional()
      })
        .optional()
        .describe(
          "@internal Per-window usage for the session (5-hour), weekly (7-day), and overage-included weekly (per-model bucket; present only for accounts whose responses carry that window) subscription rate-limit windows, as read from the anthropic-ratelimit-unified-* response headers. utilization is the fraction of the window used (usually 0-1, same scale as the top-level utilization field; values above 1 occur when usage legitimately runs past a window's cap, e.g. lower-priority episodes past the 5-hour limit); resetsAt is unix epoch seconds. status is the status the server sent for the window: allowed_warning once past a warning threshold, rejected at or past its limit. A rejected window alone does not mean requests are refused; the top-level status says whether they are. surpassedThreshold is the highest warning threshold passed, as a fraction of the limit (1 once rejected). Each is absent when the server sent none or a value this version cannot read. Unlike the top-level status/utilization fields, which describe the currently limiting window, every window is tracked on every observation, and events are emitted when a window's rounded percentage, reset time, status or threshold moves, not only on status transitions. Windows absent from the account state are absent here. Absent until the first response carrying these headers is observed, and always absent for API-key, Bedrock, and Vertex sessions, whose responses do not carry them."
        ),
      overageStatus: B(["allowed", "allowed_warning", "rejected"]).optional(),
      overageResetsAt: v().int().optional(),
      overageDisabledReason: B([
        "overage_not_provisioned",
        "org_level_disabled",
        "org_level_disabled_until",
        "out_of_credits",
        "seat_tier_level_disabled",
        "member_level_disabled",
        "seat_tier_zero_credit_limit",
        "group_zero_credit_limit",
        "member_zero_credit_limit",
        "org_service_level_disabled",
        "no_limits_configured",
        "fetch_error",
        "unknown"
      ]).optional(),
      isUsingOverage: M().optional(),
      overageInUse: M().optional(),
      overageEnabled: M().optional(),
      surpassedThreshold: v().optional(),
      rateLimitGraceActive: M()
        .optional()
        .describe(
          "@internal Usage-limit grace signal. Follows the latest served main-loop or subagent response: set when it reports grace-zone utilization > 0 (the server reports that only to a request that sent `anthropic-usage-limit: extended`, tengu_lantern_spool), cleared when a response the limiter ran on reports none or, if the latest in-zone response named the grace window's reset, once that reset passes on this machine's clock. Side calls, and responses with no `anthropic-ratelimit-unified-status` (the limiter did not run), are not read. A refused request's 429 is not read either, so while requests are refused the last value persists: still expire any UI derived from this field via resetsAt. While set, overageStatus allowed / allowed_warning means paid extra usage covers the overflow (nothing will be cut off). Stays true at hard exhaustion (status rejected); combine with status instead of reading this field alone as \"still usable\"."
        ),
      overagePeriodMonthly: u({ utilization: v() })
        .optional()
        .describe(
          "@internal Monthly service spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap."
        ),
      overagePeriodChannel: u({ utilization: v() })
        .optional()
        .describe(
          "@internal Per-Slack-channel spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap. Absent when the channel has no individual cap."
        ),
      limitScope: B(["service", "channel", "group_pool"])
        .optional()
        .describe(
          "Which spend limit blocked the request when it is not the member's own cap: 'group_pool' means a pooled group budget shared by the member's team is used up (the denial otherwise looks like the member's own monthly cap). Absent on a plain member denial and from older CLIs."
        ),
      errorCode: B(["credits_required"]).optional(),
      canUserPurchaseCredits: M().optional(),
      hasChargeableSavedPaymentMethod: M().optional(),
      usageCreditOffer: u({
        kind: B(["pct_off", "extra_credit"]),
        headlinePct: v().int(),
        daysLeft: v().int(),
        label: o()
      })
        .optional()
        .describe(
          "@internal A limited-time offer on usage credits the account holds at this limit, for the IDE extension's limit banner: the kind (a steeper discount, or extra credit for the same price), the headline percent every credit pack meets or beats, whole days left in the account's offer window, and the ready-made banner text. Present only on a rejected frame from a session the VS Code extension owns, once the server has answered that the account holds an active offer; absent otherwise. The prices themselves apply wherever the credits are bought."
        ),
      adminRequestOffer: u({
        state: B(["can_ask", "pending", "sending", "sent"]),
        label: o(),
        doneLabel: o(),
        confirm: M(),
        confirmPrompt: o(),
        lastFileFailed: M().optional(),
        revision: v().int().optional()
      })
        .optional()
        .describe(
          "@internal The IDE limit banner's offer to ask the member's admin for a higher spend limit: its state (can ask, already pending, sending, sent), its copy, whether the last filing failed, and a counter that moves when a click could not be acted on. Present only on a rejected frame from a VS Code extension session for a Team or Enterprise member at their own spend limit, while tengu_tallow_quoit serves it, its kill switch is on and the organization's requests are not switched off."
        )
    }).describe("Rate limit information for claude.ai subscription users.")
  ),
  qe = 128,
  IF = 64,
  Q5o = p(() =>
    u({
      session: u({
        total_cost_usd: v(),
        total_api_duration_ms: v().int(),
        total_duration_ms: v().int(),
        total_lines_added: v().int(),
        total_lines_removed: v().int(),
        model_usage: me(o(), Ge())
      }).describe("Cost and usage accumulated by the current session."),
      rate_limits: u({
        limits: T(
          u({
            kind: o()
              .max(qe)
              .describe(
                "The server's meter kind, e.g. 'session', 'weekly_all' or 'weekly_scoped'. Classify a row on this, never on a label."
              ),
            group: o()
              .max(qe)
              .describe(
                "The server's row group, e.g. 'session' or 'weekly'; rows render grouped under it, in the server's order."
              ),
            percent: v().describe("Share of the window used, 0-100."),
            resets_at: o()
              .max(qe)
              .nullable()
              .describe("ISO 8601 timestamp when the window resets."),
            scope: u({
              model: u({ display_name: o().max(qe) })
                .nullable()
                .optional(),
              surface: u({ display_name: o().max(qe) })
                .nullable()
                .optional()
            })
              .nullable()
              .optional()
              .describe(
                "What a scoped row is for, a model or a surface, with the server's display label."
              ),
            severity: o()
              .max(qe)
              .describe(
                "The server's reading of the row for a meter's colour, e.g. 'normal', 'warning' or 'critical'. Every row here is the server's, so a client never grades a row itself."
              ),
            is_active: M().describe(
              "The server's headline pick: the row a single-value indicator shows."
            )
          })
        )
          .max(IF)
          .nullable()
          .describe(
            "The server's usage rows (the usage endpoint's limits[]), as sent: which meters apply, their scope, labels, severity and order are the server's, so a client renders them verbatim and a new meter needs no client release. Empty when the server reported no meters; null when the body carried no rows at all (a server that predates them). Null too while the usage fetch is failing: the rows here are only ever the server's current reply, so neither the row the CLI builds from rate-limit response headers for its own screen nor its snapshot of an earlier reply appears here."
          ),
        extra_usage: u({
          is_enabled: M(),
          monthly_limit: v().nullable(),
          used_credits: v().nullable(),
          utilization: v().nullable(),
          currency: o().max(qe).nullable().optional()
        })
          .nullable()
          .optional()
          .describe(
            "Extra-usage (overage) spend for the billing period, when the plan has it. Amounts are in minor units of `currency` (cents for USD); is_enabled is false while extra usage cannot cover sends."
          )
      })
        .nullable()
        .describe(
          "The plan's usage rows and extra-usage spend from the claude.ai usage endpoint; null when the CLI could not fetch them (no plan on this lane, or a token without the profile scope)."
        )
    }).describe(
      "Structured twin of a /usage result, carried beside its text: the session's totals, the plan's usage rows as the server sent them and the extra-usage spend, and nothing else from the usage body (the get_usage control reply carries the rest). Experimental \u2014 the shape may change."
    )
  ),
  $rr = ["used", "free", "buffer", "deferred"],
  uYr = [
    "system_prompt",
    "system_tools",
    "mcp_tools",
    "mcp_instructions",
    "mcp_tools_deferred",
    "system_tools_deferred",
    "custom_agents",
    "memory_files",
    "skills",
    "messages",
    "autocompact_buffer",
    "compact_buffer",
    "free_space"
  ],
  PF = p(() =>
    u({
      name: o().describe(
        'Display name of the row as the CLI renders it, e.g. "Messages" or "MCP tools (deferred)". Use `kind` (not this name) to classify the row.'
      ),
      tokens: v().int(),
      kind: B($rr).describe(
        "What the row is: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve (autocompact or manual); 'deferred' rows are out-of-window tool schemas \u2014 listed for awareness, excluded from usage math."
      )
    }).describe(
      "One row of the /context usage-by-category breakdown. Rows may carry zero tokens; renderers typically hide those."
    )
  ),
  MF = p(() =>
    u({
      model: o().describe("Main-loop model the usage was computed for."),
      total_tokens: v()
        .int()
        .describe(
          "Estimated tokens in use, unclamped \u2014 may exceed raw_max_tokens when over limit."
        ),
      raw_max_tokens: v()
        .int()
        .describe(
          "The window usage is measured against: the resolved autocompact window \u2014 the model's believed limit, or a smaller compaction-policy window (a configured value, or e.g. the 200K boundary on 1M-window models)."
        ),
      percentage: v().int().describe("Rounded total_tokens / raw_max_tokens, 0-100+."),
      over_limit: u({ tokens_over: v().int(), kind: B(["hard_limit", "compaction_window"]) })
        .optional()
        .describe(
          "Present when total_tokens exceeds raw_max_tokens. kind says how the window was resolved, not whether the API will accept the next request: 'hard_limit' means the window is the model's believed limit (the API will refuse past it); 'compaction_window' means a compaction-policy window, which may or may not coincide with the model's hard limit."
        ),
      categories: T(PF()),
      mcp_tools: T(
        u({
          name: o().describe('Wire name, e.g. "mcp__linear__create_issue".'),
          server_name: o(),
          tokens: v().int()
        })
      ),
      memory_files: T(
        u({
          path: o(),
          type: o().describe('Display label of the memory-file source, e.g. "Project" or "User".'),
          tokens: v().int()
        })
      ),
      agents: T(
        u({
          agent_type: o(),
          source: o().describe(
            "Raw source identifier, e.g. 'projectSettings', 'userSettings', 'plugin'. Built-in agents are excluded by the producer. Display labels are the renderer's concern."
          ),
          tokens: v().int()
        })
      ),
      skills: T(
        u({
          name: o(),
          source: o().describe(
            "Raw source identifier, e.g. 'userSettings', 'plugin', 'syncedSkills'."
          ),
          plugin_name: o().optional(),
          tokens: v().int()
        })
      )
        .optional()
        .describe("Omitted when no skills contribute tokens.")
    }).describe(
      "Structured twin of the /context report \u2014 the data a client needs to render the context-usage card without parsing the markdown table. Evolves additively (new optional fields); a breaking reshape would ship as a sibling field, so consumers can trust the fields they know."
    )
  ),
  pn = p(() =>
    u({
      type: A("assistant"),
      message: kF(),
      parent_tool_use_id: o().nullable(),
      error: uo().optional(),
      uuid: m(),
      historical: M()
        .optional()
        .describe(
          "@internal Replayed history rather than a live message (stamped by the Remote Control bridge when it flushes history to the session server)."
        ),
      session_id: o(),
      request_id: o().optional(),
      refused_message_id: o()
        .optional()
        .describe(
          "@internal Only on the assistant message that reports a refusal: the API msg_* id of the refused response (message.id on this message is a local UUID). Absent when the CLI has no well-formed id for it."
        ),
      user_message_uuid: o()
        .optional()
        .describe(
          "Client uuid of the user message this turn is answering (submitMessage options.uuid), stamped on an assistant message each time that send changes \u2014 the turn's FIRST top-level assistant message (which may carry only a thinking block, or be a synthetic API-error message), and then, for a turn started by a synthetic (meta) prompt, the first assistant message after each queued user message folded in mid-turn (the fold takes the echo over); with --include-partial-messages the turn's first non-ping stream event is stamped too, independently (see SDKPartialAssistantMessage), so the same uuid may appear on both \u2014 either binds the reply to the send it answers without waiting for the result; the server keeps the first stamp it sees per uuid. A turn started by a typed prompt keeps that uuid for its whole turn, so it stamps once per frame kind. A meta turn's own uuid is stamped only when the host vouches it is the client event's own (on a hosted session, the uuid the session server persisted: delivered content such as a Slack owner ping, a Slack-bot observation or a client-injected synthetic turn), never for a prompt the CLI minted itself \u2014 except that a turn carrying resume_reason, such as the boot-time rescue turn re-running a turn a worker restart interrupted mid-way, stamps the interrupted turn's own last user prompt, the send it answers, where that can be vouched for (a turn that goes on from a permission answer or from in-flight tool calls may first re-send, unstamped, the assistant message that made those calls); either way a user message folded into a meta turn takes the echo over from it (the rescue turn absorbing messages sent while the session was down; a bot-observation turn absorbing a human's post), and the first reply frame of each kind after that fold carries the folded message's uuid \u2014 the first reply that message got. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model. Absent on every other frame of the turn, on subagent frames (parent_tool_use_id set), on turns that neither had a client uuid nor folded a user message in, and from older producers."
        ),
      user_message_uuids: T(o())
        .optional()
        .describe(
          "Client uuids of every user message whose prompt this turn has consumed so far, in consumption order \u2014 all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any user message folded into the turn before this frame \u2014 so a consumer that sent any of them can bind this reply to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries. Present exactly when user_message_uuid is, on the same frames; absent from older producers (fall back to user_message_uuid)."
        ),
      resume_reason: o()
        .optional()
        .describe(
          "Why this frame's turn continues one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, \u2026), else 'interrupted_turn'. Stamped on the same reply frames as user_message_uuid (which on such a turn names the interrupted turn's own last user prompt), so a consumer can tell its first reply from the interrupted attempt's. Absent on every other turn (also one that goes on from the answer to any other permission prompt), on thinking_tokens frames, and from older producers."
        ),
      resumed_from_incomplete_thinking: A(!0)
        .optional()
        .describe(
          "This turn continued the preceding truncated assistant turn inside its trailing signed thinking block (max-output-tokens recovery). Its thinking signatures are cumulative over that preceding thinking-only turn, so a history replayed through the bridge must carry this flag back for the normalizer to keep the run's prefix on the wire. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      supersedes: T(m())
        .optional()
        .describe(
          "Wire uuids of previously-delivered messages that this message replaces (refusal-fallback supersede). The list can include tombstoned tool_result frames from the refused leg, not only assistant frames. Evict the named messages on arrival and treat this frame as their canonical replacement. Idempotent with the end-of-turn model_refusal_fallback notice, whose retracted_message_uuids remains the complete audit record for the turn."
        ),
      aborted: A(!0)
        .optional()
        .describe(
          "True when this assistant message was truncated by an interrupt/abort before the stream completed: stop_reason was never received and the content may end mid-word. Absent on normally completed messages."
        ),
      agent_id: o()
        .optional()
        .describe(
          "ID of the subagent that produced this message: the `task_id` of its task events, unchanged when the subagent is resumed. Absent on main-thread messages."
        ),
      subagent_type: o().optional().describe("Subagent type that produced this message."),
      task_description: o()
        .optional()
        .describe("Description of the subagent task that produced this message."),
      tool_use_meta: T(
        u({
          id: o(),
          display_name: o(),
          server_display_name: o().optional(),
          icon_url: o().optional(),
          server_id: o().optional(),
          server_id_stamp: o().optional(),
          tool_name: o().optional()
        })
      )
        .optional()
        .describe(
          "@internal Display metadata for this message's tool_use blocks, keyed by block id. display_name is the MCP server's `tool.annotations.title` when provided, otherwise a readable transform of the wire name; server_display_name is the MCP server's own display name; icon_url is the MCP server's directory icon URL (claude.ai connectors only); server_id is the mcpsrv_ connector id of a server provisioned by claude.ai, set by the CLI from claude.ai's own connector listing, so a client may show the call as that connector's. server_id_stamp is the X-MCP-Server-ID header value, lower-cased, of an http entry in the dynamic scope (passed in at launch or by a later mcp_set_servers push). Claude Code Remote writes the connector's uuid there when the session has one, otherwise an id it generates; the CLI checks only its shape (at most 128 characters of letters, digits, '.', '_', ':' and '-'; anything else yields no stamp), not whose it is, since a --mcp-config or SDK-host entry can write anything. A client may look it up in its own server list, treat a miss as a server it does not know (never as an error), and show a hit as the entry's claim to be that server, not as proof. They are separate fields: a server provisioned by claude.ai carries server_id, a dynamic-scope http entry server_id_stamp. Both absent for a plugin's, a repo's, a settings or an agent entry. Neither is a permission grant. tool_name is the tool's name as its server lists it, without the mcp__<server>__ prefix. Omitted for blocks whose display label equals the wire name (built-in tools). Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      narration_block_indexes: T(v().int().nonnegative())
        .optional()
        .describe(
          "@internal Ascending zero-based indexes into this frame's `message.content` of the thinking blocks whose signature the server tagged block_kind 'narration' (server summaries of the prose between tool calls, not the model's own reasoning), so a renderer can label them as summaries without decoding the signature envelope. Fail-closed: an unparseable or legacy signature is not listed. A listed block can have empty thinking text when the request returned no thinking text; give those ordinary thinking treatment. Omitted when the frame has no such block, and by CLI versions before this field existed; treat unlisted thinking blocks as ordinary thinking. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      narration_hint: B(["hidden", "faint"])
        .optional()
        .describe(
          "@internal Display-only, for this frame's narration_block_indexes blocks: how to draw their trailing ' \xB7 summarized' hint, by the same rule Claude Code's terminal UI uses for the model that produced the frame. 'hidden': draw no hint. 'faint': draw ' \xB7 summary'. Omitted: draw ' \xB7 summarized'. Sent only to the VS Code extension and only on frames that have such a block; older CLI versions never send it. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      thinking_duration_ms: v()
        .int()
        .positive()
        .optional()
        .catch(void 0)
        .describe(
          "@internal How long the thinking block in this frame took to stream, in whole milliseconds (at least 1): from its content_block_start to its content_block_stop, so the wait for the response's first token is not counted. For display only. Sent only on a frame whose one content block is a thinking block that was streamed. Older CLI versions never send it, and a CLI that rebuilt its history from SDK frames does not send it when it replays that history, so be ready to show the block without a duration. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      thinking_display: o()
        .optional()
        .catch(void 0)
        .describe(
          "@internal The thinking.display that Claude Code put in the API request body for the response that streamed this frame's thinking block. It has the same source and meaning as `thinking_display` on a stream event. Sent only on a frame whose one content block is a thinking block that was streamed, and only when the body had a display. Older CLI versions never send it, and a CLI that rebuilt its history from SDK frames does not send it when it replays that history. An absent key states nothing. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      timestamp: o()
        .optional()
        .describe(
          "ISO timestamp of when this content block finished on the originating process. One API assistant turn may produce several assistant messages sharing a message.id, each with its own timestamp. Uses the originating host's clock, so it's for display only; do not order messages by this field. Older emitters omit it; consumers should fall back to receive time."
        ),
      is_meta: A(!0)
        .optional()
        .describe(
          "@internal True when the message was synthesized by the loop (not a model response)."
        ),
      context_usage: MF()
        .optional()
        .describe(
          "Structured twin of the /context report, carried on the synthetic assistant message that delivers the markdown table. Present only on /context results from CLIs new enough to attach it; the markdown in message.content remains the canonical fallback. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      usage_report: Q5o()
        .optional()
        .describe(
          "Structured twin of the /usage report, carried on the synthetic assistant message that delivers its text: the session totals, the plan's usage rows and extra-usage spend, for remote clients that render a card from data. Present only on /usage results from CLIs new enough to attach it and from claude.ai-subscriber sessions; the text in message.content remains the canonical fallback. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      local_command_source: o()
        .optional()
        .describe(
          "@internal The originating system local_command row's wire-form content (escaped frames), carried on the loop-synthesized local-command twin. Round-tripped so toInternalMessages rebuilds the internal system row on a bridge/SDK history replay \u2014 replay then matches the live session, where that row is model-visible \u2014 instead of dropping the output or replaying the twin's decoded display text. Wrapper-level sibling \u2014 never inside `message.content`."
        ),
      local_command_run: u({ command: o(), args: o(), plugin: o().optional() })
        .optional()
        .describe(
          "@internal On the local-command twin, the run that printed the row: the command's name as `command.run` carried it (no slash), its arguments as the echo shows them (`***` when the command marks them sensitive) and, for a command a plugin registered, that plugin's name, or, for a row whose text plugins' `command.run` hooks answered or retold, the names the text is led by (untrusted text; absent for the binary's own command in its own words). Present when a `local` command's dispatch printed the row or a `command.run` hook answered it, absent on a never-ran notice. A surface that draws the hooks engine's `CommandOutput` site asks ui_render with these, the twin's text and its uuid as instance_id; toInternalMessages round-trips it onto the rebuilt row. Wrapper-level sibling \u2014 never inside `message.content`."
        ),
      local_command_outcome: u({
        kind: B(Xr),
        suggestion: o()
          .optional()
          .describe("unknown: the registered command closest to the typed name, no slash.")
      })
        .optional()
        .catch(void 0)
        .describe(
          "@internal On the local-command twin, what the row reports, so a host can offer a fix instead of relaying the text: 'unavailable_headless' (an interactive-panel command this session cannot open), 'unknown' (no command has the typed name), 'failed' (the command ran and failed), 'restart_required' (the change applies after Claude Code restarts). Absent when the row reports none of these; new kinds are additive, so treat an unknown one as absent. toInternalMessages round-trips it onto the rebuilt row. Wrapper-level sibling \u2014 never inside `message.content`."
        ),
      is_virtual: A(!0)
        .optional()
        .describe("@internal Display-only: rendered in the UI but filtered before API send."),
      batch_tool_uses: T(Ue({ id: o(), name: o() }))
        .optional()
        .describe(
          "@internal `{id, name}` of the original Batch* tool_use block(s) for a message whose content was decomposed into synthetic v1 tool_use blocks. Round-tripped so a replayed history reassembles the batch block on the wire (not N synthetics). Input is reassembled from the synthetics in `message.content` \u2014 never carried here. Wrapper-level sibling \u2014 never inside `message.content` \u2014 so it is not replayed to the model."
        ),
      wire_tool_inputs: me(o(), oe())
        .optional()
        .describe(
          "@internal `tool_use.input` exactly as the API produced it, keyed by tool_use id, for a message whose `message.content` carries the client-normalized input. Round-tripped so a replayed history echoes each earlier tool call back to the API as the API emitted it (the server may hold its own copy of the turn). Wrapper-level sibling \u2014 never inside `message.content`."
        ),
      wire_ingest_context: me(o(), oe())
        .optional()
        .describe(
          "@internal What the client-side input normalization read from process state (the working directory a leading `cd` was stripped against, the stamp applied to a Slack send) for the inputs in `wire_tool_inputs`, keyed by the same tool_use ids. Round-tripped with `wire_tool_inputs` so a replayed history can verify each recorded input against the normalized one exactly. Wrapper-level sibling \u2014 never inside `message.content`."
        ),
      is_api_error_message: M()
        .optional()
        .describe(
          "@internal True when this assistant message wraps an API error (from internal AssistantMessage.isApiErrorMessage)."
        ),
      api_error_status: v()
        .int()
        .optional()
        .describe("@internal HTTP status code of the API error when is_api_error_message is true."),
      api_error: B([
        "max_output_tokens",
        "dlp_request_denied",
        "claude_code_version_too_old",
        "safety_monitor_blocked",
        "effort_requires_thinking",
        "advisor_incompatible",
        "tool_history_mismatch",
        "autocompact_thrashing",
        "pdf_too_large",
        "pdf_password_protected",
        "media_removed",
        "no_response",
        "tls_untrusted_ca",
        "gateway_content_type",
        "provider_credentials",
        "gateway_signin_required",
        "gateway_session_expired",
        "api_key_auth_disabled",
        "org_disabled_credential",
        "invalid_credential_header",
        "model_requires_usage_credits",
        "long_context_credits_required",
        "consent_unanswered",
        "no_allowed_fallback",
        "model_substitution_disabled",
        "field_not_granted",
        "usage_limit_reached",
        "empty_completion"
      ])
        .optional()
        .catch(void 0)
        .describe(
          "@internal Typed kind of the API error when is_api_error_message is true, for consumers that key on the cause instead of the message text (the text stays the fallback and may change). Absent when the error has no typed kind; new values are added over time, so treat an unknown value as absent. dlp_request_denied: the request was refused by the organization's data-loss-prevention policy \u2014 terminal for that request body; a consumer replaying history must not re-send it. claude_code_version_too_old: the API refused the request because this Claude Code build is below a required minimum version \u2014 the selected model's minimum, or an organization-policy floor; only the message text says which and names the versions, and the remedy is updating Claude Code. safety_monitor_blocked: a server-side safety monitor blocked the model's response for this turn; terminal for the turn, so a consumer replaying history must not re-send the prompt that led to it. effort_requires_thinking: the model refuses the requested effort level while thinking is off; api_error_params.effort names the level. advisor_incompatible: the configured advisor model cannot be paired with this request's model. tool_history_mismatch: the API rejected the conversation's tool_use/tool_result pairing (a tool_use without its result, an orphaned tool_result, a duplicate tool_use id); re-sending the same history fails the same way, and rewinding the conversation is the remedy. autocompact_thrashing: the context refilled to the limit right after each automatic compaction, repeatedly, so the turn stopped; something in context is too large for the window. pdf_too_large: a PDF is over the API's page or size limit. pdf_password_protected: a PDF is encrypted. media_removed: the API refused an image or a document in the conversation, so Claude Code leaves it out of the requests that follow. The frame comes either before the answer of a retry that already left it out, or as the error that ended the turn (the result then repeats this value). api_error_params.media_reason says why, and api_error_params.media which kind of block. Other kinds (pdf_too_large, pdf_password_protected) and some untyped errors also leave the block out, so the absence of this value does not mean that nothing was left out. no_response: no response arrived before the first-byte deadline on any attempt, usually a proxy or gateway that holds responses until they complete. tls_untrusted_ca: the API's TLS certificate comes from an authority this process does not trust, usually a TLS-inspecting proxy or a gateway signed by a private CA. gateway_content_type: a proxy between Claude Code and Amazon Bedrock rewrote Bedrock's event-stream response. provider_credentials: a third-party cloud provider (api_error_params.provider) refused the request's credentials or access; api_error_params.remedy says what fixes it. gateway_signin_required: the Cloud gateway provider is configured and nobody is signed in to it; no request was sent. gateway_session_expired: the Cloud gateway session expired; no request was sent; api_error_params.remedy is gateway_token when the token came from the environment, which signing in does not replace. api_key_auth_disabled: the organization turned off API key authentication and the active credential is an API key. org_disabled_credential: the ANTHROPIC_API_KEY environment variable belongs to a disabled organization and overrides the account sign-in. invalid_credential_header: a credential or header value (from the environment, a helper, or the saved sign-in) cannot be sent as an HTTP header; caught before the request was sent. model_requires_usage_credits: the model runs on usage credits for this account, and credits are off or the included allowance is used up. long_context_credits_required: a request over the 200K-token context boundary needs usage credits. consent_unanswered: the model now uses usage credits and the prompt to confirm went unanswered; nothing was sent. no_allowed_fallback: switching off the model was needed (the usage-credits prompt was declined) and the model policy allows no other model. model_substitution_disabled: switching off the model was needed and CLAUDE_CODE_NO_MODEL_FALLBACK forbids it. field_not_granted: the organization is not allowed to send a field in the request, and the message text says what to do. usage_limit_reached: the request was refused by the account's own usage limit, a plan limit (session, weekly or per-model) or a spend cap on usage credits; api_error_params.rate_limit_info says which and when it resets. The other refusals that share error rate_limit never carry it: an organization policy that turned the service off (no limit was reached, and no reset clears it), a temporary server throttle, a capacity switch-off, an entitlement refusal shown in the server's own words, or a 429 on an API key or a third-party cloud provider. empty_completion: the model ended its turn with no visible text, and its one retry had no content block, on a person's own prompt with no reply and no tool result after it; the turn ends as an error so that a host shows a failure and not a blank reply."
        ),
      api_error_params: u({
        effort: o().optional(),
        provider: B([
          "bedrock",
          "anthropicAws",
          "mantle",
          "anthropicGoogleCloud",
          "vertex",
          "foundry",
          "gateway"
        ]).optional(),
        remedy: B([
          "refresh_command",
          "refresh_credentials",
          "adc",
          "gateway_token",
          "host_managed",
          "model_access"
        ]).optional(),
        media: B(["image", "document"])
          .optional()
          .catch(void 0),
        media_reason: B(["unprocessable", "unsupported_by_model", "media_budget"])
          .optional()
          .catch(void 0),
        rate_limit_info: cYr()
          .optional()
          .catch(void 0)
      })
        .optional()
        .describe(
          "@internal Parameters of api_error, present only for the kinds that have any. effort: the effort level the API refused (effort_requires_thinking). media (media_removed): the kind of block the API refused; absent for media_budget. media_reason (media_removed): unsupported_by_model \u2014 the API said that the model does not accept PDF documents; media_budget \u2014 the request's images and documents together exceed the API's limit, and the requests that follow may leave out blocks of either kind; unprocessable \u2014 every other refusal, a gateway's report of a model's refusal among them. provider: the API provider whose credentials failed (provider_credentials, gateway_session_expired). remedy (provider_credentials, gateway_session_expired): refresh_command \u2014 a configured refresh command (awsAuthRefresh / gcpAuthRefresh) refreshes the credentials; refresh_credentials \u2014 refresh the provider's credentials by hand, no command is configured; adc \u2014 refresh the Google application default credentials or the GOOGLE_APPLICATION_CREDENTIALS key file; gateway_token \u2014 replace the gateway token supplied through ANTHROPIC_AUTH_TOKEN or ANTHROPIC_CUSTOM_HEADERS; host_managed \u2014 the host application owns these credentials; model_access \u2014 the credentials work but the model is not enabled for this account and region (Amazon Bedrock). rate_limit_info (usage_limit_reached): what the refused request's own response said about the limit, in the shape rate_limit_event carries. It is read from the same values as the message text, so its status, limit and reset are the text's: status is rejected and isUsingOverage false, rateLimitType names the limit, resetsAt is when it resets, and overageStatus, overageResetsAt, overageDisabledReason and limitScope say whose spend cap it is (the person's own cap arrives as org_level_disabled_until, as on rate_limit_event); no other member is sent. It is that refusal's record and is never updated, so compare resetsAt with the clock before calling the limit current."
        ),
      api_error_code: o()
        .optional()
        .describe(
          "@internal The server's error.details.error_code for this API error, copied through when it is an identifier (^[a-z][a-z0-9_]{0,63}$) and dropped otherwise. Carries server gate codes this build has no api_error value for, so a host can key on a new gate without a Claude Code release. Absent when the response carried no code."
        ),
      api_error_origin: B(["first_party"])
        .optional()
        .catch(void 0)
        .describe(
          "@internal first_party when this API error was built from a response Anthropic's own API sent: the request used the firstParty provider, went to https://api.anthropic.com on the default port and was answered from there, not redirected, over TLS verified with no added CA (NODE_EXTRA_CA_CERTS), no verification override and no unix-socket tunnel. Absent in every other case: an ANTHROPIC_BASE_URL or WIF base_url override, a gateway, a third-party provider, a connection error, an error Claude Code raised itself, and any frame replayed from the transcript, SDK input or a remote session. Treat absence as unknown origin. It says which endpoint answered, not that the message text is the server's verbatim, and a CA installed in the system trust store can still intercept. An invalid-request message (400 or 422) can quote request values, so it is stamped only when it is one of the known Anthropic wordings, and no message is stamped that quotes the request's model id; render stamped text as plain text. New values may be added; treat an unknown value as absent."
        ),
      error_details: o()
        .optional()
        .describe(
          "@internal Raw API error message \u2014 preserves details (e.g. prompt-too-long token counts) that user-facing content discards."
        ),
      advisor_model: o()
        .optional()
        .describe("@internal Advisor model that produced this message, when applicable."),
      attribution_agent: o()
        .optional()
        .describe(
          "@internal Attribution stamp: agent name parsed from querySource (see messageAttribution.ts). May overlap with subagent_type."
        ),
      attribution_skill: o().optional().describe("@internal Skill that produced this message."),
      attribution_plugin: o().optional().describe("@internal Plugin that produced this message."),
      attribution_mcp_server: o()
        .optional()
        .describe("@internal MCP server that produced this message."),
      attribution_mcp_tool: o()
        .optional()
        .describe("@internal MCP tool that produced this message.")
    }).describe(
      "An assistant message. While a response streams the CLI emits one assistant message per completed content block, so several consecutive assistant messages can share message.id and each carries just that block in message.content; on those, message.stop_reason is null and message.usage is not final \u2014 the turn's stop reason and total usage arrive on the result message. parent_tool_use_id is non-null when the message was produced inside a subagent started by that tool_use."
    )
  );
var xF = p(() =>
    u({ type: A("rate_limit_event"), rate_limit_info: cYr(), uuid: m(), session_id: o() }).describe(
      "Rate limit event emitted when rate limit info changes."
    )
  ),
  OA = p(() => u({ tool_name: o(), tool_use_id: o(), tool_input: me(o(), oe()) })),
  DF = p(() => u({ id: o(), name: o(), input: me(o(), oe()) })),
  NA = p(() =>
    B(Zy).describe(
      "Why the query loop terminated. Unset when the loop was bypassed (local slash command)."
    )
  ),
  IA = p(() =>
    u({
      spawned: v()
        .int()
        .describe(
          "Subagents actually started (one tengu_agent_tool_selected each); a refused or failed launch is not counted."
        ),
      requested: u({ background: v().int(), foreground: v().int(), unset: v().int() }).describe(
        "Spawns by the run_in_background value the model passed; all count as unset while the parameter is not offered (background tasks disabled, or subagents forced into the background: in a terminal, the desktop app or the VS Code extension, or with CLAUDE_CODE_FORK_SUBAGENT=1)."
      ),
      started_in_background: v()
        .int()
        .describe(
          "Spawns that started in the background after defaults and session settings (tengu_agent_tool_selected.is_async); the rest blocked the spawning tool call."
        ),
      by_type: me(o(), v().int()).describe("Spawns by agent type."),
      max_depth: v()
        .int()
        .describe("Deepest spawn: 1 = started by the main thread, 2 = by a depth-1 subagent."),
      spawned_by_subagents: v()
        .int()
        .describe("Spawns made from inside another subagent (depth > 1)."),
      completed: v().int(),
      failed: v().int(),
      killed: u({ parent: v().int(), user: v().int(), system: v().int() }).describe(
        "Stopped before finishing: parent = by another agent through TaskStop; system = by Claude Code itself (the --max-budget-usd halt, the sweep of background subagents when an SDK or IDE client interrupts, or -p giving up on a background subagent still running at its wait ceiling); user = any other stop, including a foreground subagent cancelled just as it finished (counted here, not as completed)."
      ),
      refused: u({
        depth_limit: v().int(),
        concurrency_limit: v().int(),
        budget: v().int()
      }).describe(
        "Agent tool calls turned down because one of these limits was reached (other denials, such as an unknown agent type, are not counted). depth_limit stays near zero in practice: a subagent at the nesting limit is normally not offered the tool at all."
      )
    }).describe(
      "@internal Subagents started through the Agent tool in this session, as running totals (forked skills, workflows, teammates and other internal agents are not counted; two sessions in one process keep separate counts). Cumulative like modelUsage: read the latest result rather than summing across results; a resumed session starts fresh and a mid-session /clear zeroes it, though a background subagent that outlives the /clear still records its outcome, so completed, failed and killed can then exceed spawned. A result that was held back while background subagents finished carries the counts as of when it is written to the stream, as do its total_cost_usd, duration_api_ms and modelUsage (and usage where that is a running total; a per-turn main-loop usage keeps its turn-end value). Omitted by hosts without a local Agent tool and on crash/startup-error results; all zeros until the Agent tool starts or refuses a subagent. A remote (isolation: remote) launch counts as spawned but never reports an outcome. Per-subagent detail is on the task_started / task_notification events."
    )
  ),
  PA =
    "Per-model totals for every model call made through the query pipeline during this query() call \u2014 main loop, Task subagents, sidechains, and internal calls such as compaction and Workflow agents. Cumulative across turns in streaming-input sessions: each result carries the running total so far, so read the latest result rather than summing across results. Internal helper calls outside the query pipeline (e.g. the permission classifier, token-count probes) are excluded; crash/startup-error results may carry zeroed usage, a resumed or forked session continues from the totals its transcript saved, when it has them (so the first result already carries the earlier turns), and a mid-session /clear resets the running total. The correct field for token/cost accounting; treat it as an estimate, not a billing statement.",
  MA =
    "@internal Per-model usage and cost of the calls this process counted since it wrote its previous result (since it started, for its first), keyed and shaped like modelUsage and covering the same calls. Sum it over a conversation's results instead of subtracting modelUsage totals: within a conversation each call is stated on at most one result, whatever a resume or a kill does to modelUsage. Calls that finish after a result (a background subagent, a late title call) are stated on the next result, and a /clear's own result states what was counted before it. Nothing is carried from one process to the next, so what a process counted after its last result is stated nowhere. That includes the finished calls of a turn in flight when the process is shut down or killed, even where another process carries the turn on and writes its result. A result whose write fails loses its usage too (result_index shows the gap). A Workflow agent that runs as a cloud session of its own is counted here, as in modelUsage, and that session's own results state it too. costBasis, canonicalModel and provider are the latest request's. A model with nothing counted is left out; {} means nothing was counted. Set by a stream-json or --sdk-url run on the results it numbers as it writes them; a result relayed from another process keeps what that process set. Not set on error results numbered by hand (a start-up failure, an error that escapes the run), by --output-format json and text runs, or by older versions. Absent is not {}.",
  xA =
    "@internal Running totals of the subagents the Agent tool started this session; see SDKSubagentStats.",
  DA =
    "@internal How many times a safety system has stopped one of this session's model calls made through the query pipeline (main loop, subagents, forked skills, compaction and other internal calls), as a running total since the session started in this process; two sessions in one process keep separate counts. Counted: a response that ends on stop_reason refusal, whether Claude Code then shows it, retries it or re-sends it to another model; a refusal that the API itself answered on a fallback model; output that the API's content filter stopped for good (the stop ends the call); and, where the build can recognise it (public builds cannot), a server-side safety monitor's block (api_error safety_monitor_blocked). It counts these events, not calls: one call can add a refusal answered on a fallback model and then that model's own refusal. 0 means that none of these was seen; a kind of stop that this version does not know is not counted. Never sum across results. It is never saved, so a resumed session starts at 0 again, and a mid-session /clear zeroes it: over a stored log that spans a restart, a resume or a /clear, any result above 0 means a stop happened, and a later 0 does not cancel it. Present, 0 included, on every result that carries a turn's measured totals. Absent on the zeroed results that stand in for a crashed, cut or never-started turn, on Remote Control's results and from older producers, where it says nothing: absent is not 0. A call still running when a result is written (a background subagent's) shows on the next result; a result held back while background subagents finished carries the count as of when it is written to the stream, never less than it was built with. Not counted inside the pipeline: a stop of the API's content filter that Claude Code answers by streaming the request again (so 0 does not rule one out), an organization's data-loss-prevention denial (api_error dlp_request_denied), a block by a cloud provider's own guardrail, an advisor's refusal inside a reply that ends normally. Not counted at all: model calls outside the query pipeline (e.g. the permission classifier, token-count probes) and work in other processes.",
  LA =
    "User-initiated sends still waiting in the command queue when this result was produced. Greater than 0 means at least one more user turn (and result) follows without further input, barring cancellation; 0 means none is pending, or the session is ending (end_session or a shutdown latched mid-turn discards the backlog). Queued sends may coalesce into fewer turns, so this counts pending sends, not remaining results. System-generated queue entries are not counted. Absent on fatal startup results and on surfaces without a command queue.",
  UA =
    "Cumulative estimated cost in USD for this query() call, covering the same query-pipeline calls as modelUsage and sharing its lifecycle: cumulative across turns in streaming-input sessions \u2014 each result carries the running total so far, so read the latest result rather than summing across results. Crash/startup-error results may carry zeroed values, a resumed or forked session continues from the total its transcript saved, when it has one (so the first result already carries the earlier turns; maxBudgetUsd counts only the spend since this query() call started or last /clear), and a mid-session /clear resets the running total. An estimate, not a billing statement.",
  VA =
    "Delivery sequence of this result within the run: how many results the run numbered before this one, starting at 0, in the order the process writes them. A result held back while background work finishes is numbered when it is finally written, not when its text was produced; a result whose write fails still consumes its number, so a gap in a stream-json sequence means a result was lost. Distinct from num_turns, which counts model round-trips within one turn. Numbered by the process that hosts the run (`claude -p`, stream-json): a local client relaying a cloud session passes the cloud session's numbering through and its own locally built error results carry none; the in-process engine surface does not number yet. Absent from older producers.",
  jA =
    "@internal The host of a multi-tenant worker shut the worker down while this turn ran. The shutdown was the first thing to abort the turn, and the turn is left for the session's next worker. The other frames of the ending, and terminal_reason, are the same as for a Stop from a client. Read this member to tell the two apart. A success result can have it, when the shutdown falls in a Stop hook. A result without it can also be the result of a shutdown. A shutdown that makes the turn write no interrupt marker does not set it, and older producers never set it.",
  LF = p(() =>
    u({
      phase: B(["setup", "run"]).describe(
        "@internal 'setup' when the session process never started, 'run' when it exited."
      ),
      exit_code: v().int().nullable().optional(),
      signal: o().nullable().optional()
    }).describe(
      "@internal How a self-hosted runner's session process ended, on the result the runner synthesizes for it."
    )
  ),
  UF = p(() =>
    B([
      "org_pin_api_key_conflict",
      "provider_not_allowed",
      "org_verify_failed",
      "org_pin_mismatch",
      "managed_settings_invalid",
      "remote_settings_required_unavailable",
      "gateway_signin_required",
      "gateway_access_denied",
      "proxy_invalid",
      "temp_dir_unusable",
      "cwd_unavailable",
      "shell_tool_missing",
      "session_held_by_background",
      "worktree_resume_refused",
      "worktree_unverified",
      "cli_version_too_old",
      "bypass_root",
      "org_config_required_unavailable",
      "org_config_refused"
    ]).describe(
      "Why Claude Code refused to start, so a host can offer the fix instead of a retry. org_pin_api_key_conflict: managed settings pin a first-party or Cloud gateway sign-in, and an Anthropic API key or auth token is configured instead. provider_not_allowed: managed settings list the API providers this machine may use (allowedProviders), and the session is set up for one that is not listed. org_verify_failed: the sign-in's organization could not be verified against the pin (network, or a revoked token). org_pin_mismatch: the sign-in belongs to an organization the pin does not allow. managed_settings_invalid: managed policy settings could not be read, the pin names no organization, or managed model settings (deniedModels, or an availableModels list matched exactly) block the default model and leave no allowed model to use instead. remote_settings_required_unavailable: managed settings the organization requires could not be loaded. gateway_signin_required: the Cloud gateway ended this sign-in. gateway_access_denied: the Cloud gateway refused managed settings for this account. proxy_invalid: a proxy setting is not a complete URL. temp_dir_unusable: the per-user temp directory is unsafe or could not be created. cwd_unavailable: the working directory was deleted, moved or cannot be read. shell_tool_missing: Windows has no shell tool: Git Bash is missing, and PowerShell is missing or turned off by CLAUDE_CODE_USE_POWERSHELL_TOOL. session_held_by_background: the conversation to resume or continue is running as a background session. worktree_resume_refused: the resume was refused because the session's worktree failed its safety checks or the resume was launched from inside it; errors says whether a re-run continues without the worktree. worktree_unverified: the session's worktree could not be verified right now; retrying may succeed. cli_version_too_old: this Claude Code version is below the minimum Anthropic requires. bypass_root: bypass permissions mode was requested while running as root. org_config_required_unavailable: the organization requires its policy limits and managed settings before a session starts, and they could not be loaded (network, proxy, or an Anthropic error); retrying may succeed. org_config_refused: the organization requires its policy limits and managed settings, and Anthropic refused them for this sign-in (expired or revoked session, or the organization does not allow Claude Code for this account); signing in again or an admin's change is the fix, not a retry."
    )
  ),
  VF = p(() =>
    u({
      type: A("result"),
      subtype: A("success"),
      duration_ms: v().int(),
      duration_api_ms: v().int(),
      ttft_ms: v().int().optional(),
      ttft_stream_ms: v().int().optional(),
      time_to_request_ms: v().int().optional(),
      time_to_request_phases_ms: me(o(), v().int())
        .optional()
        .describe(
          "@internal How time_to_request_ms was spent, in integer ms per phase, summing to it exactly: system_prompt, resume_other (settling, before the turn's own prompt, tool calls that an earlier run left open or the session's client handed over, see turn_start_resume_kind; excluding four parts of it that have keys of their own: resume_store_confirm, writing a handed-over turn's lines to the transcript and waiting for the store to confirm them; resume_staged_files_wait, that turn's wait for files its client is still staging; resume_connector_wait, an orphaned permission's wait for its tool's MCP server to connect; turn_start_tool_run, the calls' permission checks, a person's time at a prompt included, and their runs, which are work the user asked for, not preparation; older producers report these five as one key, turn_start_resume), process_user_input (excluding four parts of it that have keys of their own: input_images, input_attachments, input_command, input_hooks), transcript_persist, tool_pool_refresh, system_prompt_rebuild (a second assembly of the system prompt, run when the tool pool re-read after the message was handled differs from the turn-start pool; older producers report it inside system_prompt), init_message, engine_pickup, memory_recall_wait, memory_context_wait, message_prep, model_config_wait, autocompact, query_setup, auto_mode_context_wait (the wait at dispatch for the auto-mode context, on a request that started one), model_gates, tool_schema_build, message_normalization, client_creation, request_build, then at most one of redrive_reactive_compact, redrive_fallback_model, redrive_non_streaming and redrive_other (present when the first model request of the turn never began streaming, or was answered without streaming, so time_to_request_ms runs to the send time of a later request: the time between the two sends, named for the reason; after a reply without streaming it includes that reply and any tool calls), and other (the remainder no phase covers). A phase that did not run on the turn is absent; other is always present. Present where time_to_request_ms is, on CLAUDE_CODE_REMOTE sessions and hosts that set CLAUDE_CODE_EMIT_STARTUP_TIMING; absent elsewhere and from older producers."
        ),
      turn_start_resume_kind: B(Jy)
        .optional()
        .describe(
          "@internal What the turn was given to settle before its own prompt (the resume_ phases and turn_start_tool_run in time_to_request_phases_ms say how long that took): orphaned_permission (a permission answer whose pending request was lost, as when a worker restarts, so the tool call is settled with that answer), turn_handoff (a turn in progress that the session's client handed over), deferred_tool_use (a call a PreToolUse hook deferred), or none (resume_other is still reported, at about 0). A turn given more than one reports the first in that order. Present where time_to_request_phases_ms is."
        ),
      handoff_intake_phases_ms: me(o(), v().int())
        .optional()
        .describe(
          "@internal On a turn that the session's client handed over (turn_start_resume_kind is turn_handoff), how long its turn_handoff control request waited from its arrival on the session server's SSE stream (--sdk-url) until the input loop read it, in integer ms on the monotonic clock, split into parts that frame_intake_phases_ms explains: startup_wait, control_requests_ahead and user_frames_ahead, each absent when 0, and before_read (the rest), always present. The values sum to the wait. Present only on results that carry turn_start_resume_kind. Absent on a claude-code-server tenant, when the host had handled too much since the arrival to say what the request waited behind, and from older producers."
        ),
      process_turn_index: v()
        .int()
        .optional()
        .describe(
          "@internal Number of earlier turns of this CLI process that sent a main-conversation model request: 0 is the process's first turn to reach the model, not the conversation's first. Turns stopped or failed after sending count but carry no value, so values can skip. Where one process hosts several sessions, each has its own count, from 0 each time the process starts hosting it. Present where time_to_request_phases_ms is."
        ),
      time_to_request_cpu_ms: v()
        .int()
        .optional()
        .describe(
          "@internal CPU time (user plus system) the CLI process used from turn start until it sent the turn's first main-conversation model request. Normally that is the time_to_request_ms window; if that request was abandoned for a new call (not an ordinary retry), time_to_request_ms runs on to the new one and this does not. Near time_to_request_ms, the window was mostly computing; near 0, mostly waiting. It adds up all threads, so it can exceed the window, and leaves out child processes, such as a command a tool runs. Unrelated work counts, such as the request that names the session (usually in its first turn). On a virtual machine, time the host spends restoring memory can count as CPU time, so a high value alone does not mean JavaScript work. Present where time_to_request_phases_ms is, unless the runtime reports no resource usage or the process hosts other sessions too."
        ),
      time_to_request_loop_lag_ms: v()
        .int()
        .optional()
        .describe(
          "@internal The longest single stall of the session's thread between turn start and the turn's first main-conversation model request, measured as how late a 50 ms timer fired: the real stall can be up to 50 ms longer, so one under 50 ms can read 0, and a few ms is timer noise. JavaScript ran without a break, or the thread waited inside a blocking call (a synchronous file read or child process), or the whole process was paused; time_to_request_cpu_ms below this value means one of the last two, though on a virtual machine a pause while the host restores memory can look like CPU time. Any work on the thread counts: the request that names the session (usually in its first turn), or another session's where several share the thread. Only the first two minutes are measured. Present where time_to_request_phases_ms is."
        ),
      time_to_request_major_faults: v()
        .int()
        .optional()
        .describe(
          "@internal Major page faults (waits for memory to be read from disk) by the process in the time_to_request_cpu_ms window; Windows also counts faults needing no disk read. On a virtual machine, memory the host restores is not counted: the machine never sees those faults. Present where time_to_request_cpu_ms is."
        ),
      process_rss_mib_turn_start: v()
        .int()
        .optional()
        .describe(
          "@internal Resident memory of the CLI process at turn start, in whole MiB, as its kernel counts it (VmRSS in /proc/self/status). From the process's second turn on, it shows what stayed resident through the idle time since the turn before. Child processes, such as a command a tool runs or an MCP server, are left out. On a virtual machine it is the guest kernel's count, not what the host holds for the machine. Sent only by a worker that Anthropic hosts (never by a self-hosted runner, a BYOC environment, a session that Claude Desktop starts or a local run), and only with telemetry on. On such a worker it is present, always with process_rss_mib_result, where process_turn_index is, on Linux (not WSL), unless /proc/self/status cannot be read or lacks VmRSS, or the process hosts other sessions too."
        ),
      process_anon_mib_turn_start: v()
        .int()
        .optional()
        .describe(
          "@internal The anonymous part of process_rss_mib_turn_start (RssAnon): memory with no file behind it, such as heaps, stacks and code the JavaScript engine compiles while running. Mapped files, such as the executable, are left out. Present where process_rss_mib_turn_start is, if the kernel gives it."
        ),
      process_rss_mib_result: v()
        .int()
        .optional()
        .describe(
          "@internal As process_rss_mib_turn_start, read again after the turn, just before this result is built: the level the turn leaves behind."
        ),
      process_anon_mib_result: v()
        .int()
        .optional()
        .describe(
          "@internal The anonymous part of process_rss_mib_result; see process_anon_mib_turn_start. Present where process_rss_mib_result is, if the kernel gives it."
        ),
      process_peak_rss_mib: v()
        .int()
        .optional()
        .describe(
          "@internal The most memory the process has had resident from its start until this result (VmHWM), in whole MiB. It is not the peak of this turn alone: a later turn repeats an earlier peak unless it went higher. Present where process_rss_mib_result is, if the kernel gives it."
        ),
      process_cpu_ms_between_turns: v()
        .int()
        .optional()
        .describe(
          "@internal CPU time (user plus system, all threads, without child processes) the CLI process used from the end of its previous turn to this turn's start: mostly what it costs while no turn runs. A turn ends after its last frame and its turn-end hooks. Work it left running in the background counts here, as do this turn's steps ahead of turn start, such as re-reading the tool list. To get CPU time per second, add these up over many results and divide by the sum of their process_wall_ms_between_turns, which always comes with it. Present where process_cpu_ms_turn is, from the process's second turn of any kind on (process_turn_index can still be 0), unless the previous turn was abandoned midway and so never ended."
        ),
      process_wall_ms_between_turns: v()
        .int()
        .optional()
        .describe(
          "@internal The time that passed in the process_cpu_ms_between_turns stretch, by a clock that never runs backward. Time while the process is stopped counts; time while its virtual machine is paused may not."
        ),
      process_cpu_ms_turn: v()
        .int()
        .optional()
        .describe(
          "@internal CPU time, counted as in process_cpu_ms_between_turns, from this turn's start until just before this result is built, so what the turn does after that is in neither stretch. The stretch includes the waits for the model and for tools. It always comes with process_wall_ms_turn. Sent only by the workers named under process_rss_mib_turn_start. On them it is present where process_turn_index is, unless the runtime reports no resource usage or the process hosts other sessions too."
        ),
      process_wall_ms_turn: v()
        .int()
        .optional()
        .describe(
          "@internal The time that passed in the process_cpu_ms_turn stretch, by the same clock as process_wall_ms_between_turns."
        ),
      input_attachments_detail: u({
        slowest_producer: o().optional(),
        slowest_producer_ms: v().int().optional(),
        cpu_ms: v().int().optional(),
        major_faults: v().int().optional(),
        changed_files_reread: v().int().optional(),
        touch_compare: u({
          same: v().int().optional(),
          differs: v().int().optional(),
          via_outputs_link: v().int().optional(),
          partial_view: v().int().optional(),
          already_compared: v().int().optional(),
          link_on_path: v().int().optional(),
          leaf_link: v().int().optional(),
          nlink: v().int().optional(),
          not_regular: v().int().optional(),
          oversize: v().int().optional(),
          enoent: v().int().optional(),
          other: v().int().optional()
        }).optional()
      })
        .optional()
        .describe(
          "@internal What the input_attachments phase of time_to_request_phases_ms did on the turn, to tell a wait inside one attachment producer from a process that was busy. The producers are the calls of maybe() in getAttachments; their labels are a closed list, and a producer's time includes the computing of the others that run beside it. slowest_producer is the label of the one that took longest from its start to its result, among those that began within the phase, and slowest_producer_ms is that time; a background agent's pass that begins within the phase is timed with the turn's own (a new process's first turn has none), and its re-reads are not counted. Where slowest_producer_ms is well above cpu_ms that producer most likely waited (on a file, the network or a child process); a time_to_request_loop_lag_ms near slowest_producer_ms says instead that the thread itself stood still about that long (a blocking call, or a paused process). Where it is not well above cpu_ms the label tells little. cpu_ms and major_faults are time_to_request_cpu_ms's and time_to_request_major_faults's counters over this phase alone and are read the same way: cpu_ms far below the phase's time means the process was not computing; at or above it means computing, without saying whose. Where cpu_ms is absent, the phase's own time is what there is to compare slowest_producer_ms with. changed_files_reread is how many files the changed_files producer set out to read again in full because their modification time was later than the one recorded when the conversation last wrote or edited them (0 when it read none again, whether or not any file was a candidate; absent when the conversation's record of files was empty or the producer did not run). Present on turns where the input_attachments phase started, unless nothing of it is known. cpu_ms and major_faults are absent wherever time_to_request_cpu_ms is absent, and when the turn's first model request went out before the phase ended. touch_compare counts how the changed_files producer's compares ended in the main thread's pass (a subagent's are not counted). A compare checks a touched file against what the conversation last saw (its size, then its bytes), before deciding whether to read it again. same: the text had not changed, so it was not read again. differs: it had, so it was read again. partial_view and already_compared: the file was not compared (the conversation has seen only part of it or an older copy, or it was compared once already since the conversation last read or wrote it) and was read again. The rest are why a compare declined and the file was read again: link_on_path (the file could not be shown to be the one its path names: on Linux a symbolic link on the way, or a landing through the outputs link that the read check did not judge; or the file swapped or removed meanwhile), leaf_link (the open met a symbolic link: at the file, or on macOS anywhere on the way), nlink (the file has a second hard link), not_regular, oversize, enoent (the file was gone) and other (anything else, errors included). via_outputs_link counts those of same and differs that were reached through the hosted container's outputs link, from /mnt/user-data/outputs to /mnt/attach/outputs. Whole numbers; a zero count is left out, and touch_compare is absent when nothing was counted."
        ),
      resume_store_confirm_detail: u({
        write_ms: v().int(),
        ahead_ms: v().int(),
        post_ms: v().int(),
        other_ms: v().int(),
        posts: v().int(),
        failed_posts: v().int(),
        rows_ahead: v().int(),
        rows: v().int()
      })
        .optional()
        .describe(
          "@internal How the resume_store_confirm phase of time_to_request_phases_ms was spent. Present where that phase is, in a session whose transcript goes to a hosted store: on the result of a handed-off turn whose lines were confirmed and that went on to a model request. A wait that ends its turn (the lines not stored, or the turn stopped meanwhile) is therefore not in the measure. The four _ms values sum to that phase exactly. write_ms: the transcript write, until the carried lines are in the queue of the lane that uploads transcript rows (POST /worker/internal-events, one POST out at a time); a POST that is out during the write is counted in posts and rows, but that part of its time is in write_ms only. The other three split the wait for that lane to empty. ahead_ms: a POST was out that held only rows queued before the hand-off's write began, one already out at that moment included. post_ms: any other POST was out, timed by the client from before the body is encoded to the response, each retry included. other_ms: no POST was out (a backoff between retries, picking and sizing the next batch, a busy event loop), plus rounding, any POST still out when the wait was cut short, and the time of POSTs after the 64th. posts: POST attempts that ended between the start of the write and the end of the wait; failed_posts: those that did not go through. rows_ahead: rows the lane had accepted and the store had not yet confirmed when the write began, queued or in a POST already out; rows written earlier but kept back for a compaction's summary count from when they are queued. rows: rows queued since then that a POST delivered, the carried lines among them."
        ),
      user_message_uuid: o().optional(),
      user_message_uuids: T(o()).optional(),
      resume_reason: o().optional(),
      local_command: o().optional(),
      request_sent_wall_ms: v().optional(),
      first_request_input_tokens: v()
        .int()
        .optional()
        .describe(
          "@internal Input tokens of the model call whose send time is request_sent_wall_ms: input_tokens + cache_read_input_tokens + cache_creation_input_tokens from that call's message_start. Lets a consumer group turn latency by prompt size. Present only with request_sent_wall_ms, and only when the sum is above zero; absent from older producers."
        ),
      user_message_server_received_wall_ms: v()
        .optional()
        .describe(
          "@internal The server_received_wall_ms of the user message that user_message_uuid names, copied unchanged, so the session server can measure from its own receipt to request_sent_wall_ms (two machines' clocks) without keeping the receipt time. Present only with request_sent_wall_ms, and only when that message carried a positive finite number there; absent from older producers."
        ),
      first_content_frame_ms: v().int().optional(),
      first_stream_post_ms: v().int().optional(),
      first_stream_post_ack_ms: v().int().optional(),
      first_stream_post_queue_wait_ms: v().int().optional(),
      first_stream_post_queued_behind: B($r).optional(),
      first_stream_post_wall_ms: v().optional(),
      frame_received_wall_ms: v()
        .optional()
        .describe(
          "@internal Date.now() (epoch ms) when the triggering send's frame arrived on a session reading its input from the session server's SSE stream (--sdk-url), before the input loop read it. With frame_enqueued_wall_ms and turn_started_wall_ms it splits the stretch between the server's persist and request_sent_wall_ms into transit, the input loop's handling of the frame, its wait on the command queue, and the turn's own work. Present only together with request_sent_wall_ms, and only when the transport recorded the receipt; absent on a local stdin host and from older producers."
        ),
      frame_enqueued_wall_ms: v()
        .optional()
        .describe(
          "@internal Date.now() (epoch ms) when the input loop put the triggering send's frame on the command queue. Present exactly when frame_received_wall_ms is."
        ),
      turn_started_wall_ms: v()
        .optional()
        .describe(
          "@internal Date.now() (epoch ms) when the turn's clock started: the anchor duration_ms, ttft_ms, ttft_stream_ms, time_to_request_ms, first_content_frame_ms, first_stream_post_ms and first_stream_post_ack_ms are measured from. Present exactly when frame_received_wall_ms is."
        ),
      frame_intake_phases_ms: me(o(), v().int())
        .optional()
        .describe(
          "@internal How the triggering send's frame spent the time from frame_received_wall_ms to frame_enqueued_wall_ms, in integer ms per step: before_read (until the input loop read the frame; a frame received more than once counts from the earliest receipt no earlier copy already took), and, carved out of before_read where the loop could tell them apart, startup_wait (the part before the input loop existed, the worker still starting), control_requests_ahead (the part the loop spent handling control requests before it read the frame) and user_frames_ahead (the part it spent on earlier user frames, each from its read until the loop moved on, at its delivery or its parking), so that before_read keeps only the rest (frames handled without being noted, and everything when no split could be made); then dedup, flag_settle, receive_hook, attachments, admission_wait (held behind a pending model switch, a pending MCP server-set change, start-up work the worker still owed its first turn, or an earlier held frame), admit_check (the host's decision whether to queue the frame, when it had to be awaited), and other (the rest). Steps that did not run are absent; before_read and other are always present. The values sum to frame_enqueued_wall_ms minus frame_received_wall_ms, unless other or before_read came out negative and was set to 0. Present exactly when frame_received_wall_ms is, except from older producers."
        ),
      turn_start_phases_ms: me(o(), v().int())
        .optional()
        .describe(
          "@internal How the time from frame_enqueued_wall_ms to turn_started_wall_ms was spent, in integer ms per step of the host's work through its message queue. Each step is where the host was at the time, which for part of the stretch may be an earlier message's turn. The steps: idle (the host was not working through its queue), earlier_turn (an earlier turn still running, including its work after its result), after_turn (the host's work after an earlier turn ended and before it took the next message: recording the outcome, writing the transcript and acknowledgements, and releasing the queue; also its handling of a crash), background_wait (waiting on background tasks before looking at the queue again), entry_joins (other waits when the host starts on its queue, before it may take a message), sdk_mcp_update (the claude -p host updating its SDK MCP servers when it starts on its queue), loop_top (reloading plugins that changed, at the start of each pass over the queue), session_start_wait (waiting for the plugins' first session.start hook, and taking the message off the queue), first_command (the claude -p host's waits for its plugin registry and a Projects mount before the first message it takes each time it starts on its queue), mcp_prewait (waiting for MCP servers still connecting, before that same first message), repo_wait (a claude-code-server session waiting for its repository before a turn), turn_joins (before every turn: waiting for a Projects mount and for SDK or newly added MCP servers), tool_pool (building the turn's tools), commit (marking the message taken and setting up its turn), after_arm (waiting for a cleared permission prompt's record to be written, and the host's other work once the turn is set up), turn_gate (work the host requires before every turn), turn_open (the host's turn-start hook and other turn setup), engine_setup (getting the engine for the turn; on the claude -p host's first turn, building its session), tool_reread (re-reading tools, MCP clients and settings for the turn), cwd (switching to the turn's working directory), and other (the rest: rounding, and the wall clock running ahead of the monotonic one). Values are rounded so that they add up: each is within 1 ms of its step's time, a step that comes out as 0 is absent, and other is always present. The values sum to turn_started_wall_ms minus frame_enqueued_wall_ms, except that they can exceed it, usually by 1 ms from rounding and by more if the wall clock stepped back. Present only when frame_received_wall_ms is, and absent from older producers."
        ),
      turn_start_control_requests_ms: v()
        .int()
        .optional()
        .describe(
          "@internal Of the time from frame_enqueued_wall_ms to turn_started_wall_ms, the integer ms in which the claude -p host's message reader was held by control requests (such as mcp_set_servers or set_permission_mode) instead of reading the next message; for a request handled in the background, only its start counts. The host can keep working toward the turn meanwhile, so this overlaps turn_start_phases_ms and is not part of its sum. Absent when 0. A claude-code-server tenant does not time control requests, so its results never have this field."
        ),
      first_text_post_ms: v().int().optional(),
      first_text_post_queue_wait_ms: v().int().optional(),
      first_text_post_queued_behind: B($r).optional(),
      first_text_post_wall_ms: v().optional(),
      time_to_request_from_spawn_ms: v().int().optional(),
      warm_spare_claimed: M().optional(),
      flag_fetch_kick: o()
        .optional()
        .describe(
          "@internal One of FLAG_FETCH_KICKS, a string here so that list can change: whether this process started its start-up feature-flag fetch before the wait for it, or why not: the same value as system:init's startup_timing.flag_fetch_kick. started_in_init_* and started_after_init_*: it did, inside init() or right after. not_asked_warm: the flag cache was warm and nothing asked for an early start. settings_pending_*: settings that could change the fetch were still to be applied. launch_excluded: not a launch that starts it early. not_eligible: interactive, or no wait is budgeted. An _empty or _warm ending is the flag cache at that moment. Present only where time_to_request_from_spawn_ms is, and only when start-up judged it."
        ),
      time_origin_ms: v().optional(),
      is_error: M(),
      api_error_status: v().int().nullable().optional(),
      api_error_code: o()
        .optional()
        .describe(
          "@internal The api_error_code of the API error that ended the turn (see SDKAssistantMessage.api_error_code): the server's error.details.error_code when it is an identifier. Absent when the turn did not end on an API error or the response carried no code."
        ),
      api_error_origin: B(["first_party"])
        .optional()
        .catch(void 0)
        .describe(
          "@internal The api_error_origin of the API error that ended the turn (see SDKAssistantMessage.api_error_origin): first_party when Anthropic's own API sent the response. Absent when the turn did not end on an API error or the origin is anything else; treat an unknown value as absent."
        ),
      api_error: pn().shape.api_error.describe(
        "@internal The api_error of the API error that ended the turn (see SDKAssistantMessage.api_error). Absent when the turn did not end on an API error or the error has no typed kind; treat an unknown value as absent."
      ),
      num_turns: v().int(),
      result: o(),
      stop_reason: o().nullable(),
      total_cost_usd: v().describe(UA),
      usage: vA(),
      modelUsage: me(o(), Ge()).describe(PA),
      model_usage_since_last_result: me(o(), Ge()).optional().describe(MA),
      subagent_stats: IA().optional().describe(xA),
      safety_stops: v().int().nonnegative().optional().describe(DA),
      permission_denials: T(OA()),
      queued_turn_count: v().int().optional().describe(LA),
      structured_output: oe().optional(),
      deferred_tool_use: DF().optional(),
      terminal_reason: NA().optional(),
      interrupted_by_shutdown: A(!0).optional().describe(jA),
      result_index: v().int().nonnegative().optional().describe(VA),
      fast_mode_state: $t().optional(),
      fast_mode_disabled_reason: Xt().optional(),
      origin: po().optional(),
      uuid: m(),
      session_id: o()
    })
  ),
  jF = p(() =>
    u({
      type: A("result"),
      subtype: B([
        "error_during_execution",
        "error_max_turns",
        "error_max_budget_usd",
        "error_max_structured_output_retries"
      ]),
      duration_ms: v().int(),
      duration_api_ms: v().int(),
      is_error: M(),
      num_turns: v().int(),
      stop_reason: o().nullable(),
      total_cost_usd: v().describe(UA),
      usage: vA(),
      modelUsage: me(o(), Ge()).describe(PA),
      model_usage_since_last_result: me(o(), Ge()).optional().describe(MA),
      subagent_stats: IA().optional().describe(xA),
      safety_stops: v().int().nonnegative().optional().describe(DA),
      permission_denials: T(OA()),
      queued_turn_count: v().int().optional().describe(LA),
      errors: T(o()),
      runner_exit: LF()
        .optional()
        .describe(
          "@internal Set by the self-hosted runner on the result it synthesizes when the session process fails to start or exits abnormally (src/self-hosted-runner/failureResult.ts buildFailureEvents)."
        ),
      startup_failure_reason: UF()
        .optional()
        .describe(
          "Set on the zeroed error_during_execution result a stream-json run writes before exiting on a known startup failure; errors carries the same text as stderr. Failures that used to end with stderr alone write that result only when the host sets CLAUDE_CODE_STARTUP_FAILURE_RESULTS. Absent on every other result, on startup failures without a known cause, and from older producers."
        ),
      user_message_uuid: o()
        .optional()
        .describe(
          "Client uuid of the user message that triggered this turn (submitMessage options.uuid), echoed back so a consumer can link this error result to the send it answers \u2014 the same join key the success variant echoes, carried alone (error turns have no request_sent_wall_ms to report). A delivery-failure result from the remote-session client echoes the failed send's queue key, which is client-minted when the host sent no uuid of its own. A synthetic/scheduled (meta) turn's own uuid is echoed only when the host vouches it is the client event's own (delivered content such as a Slack owner ping or a Slack-bot observation); a meta turn that folded queued user messages in mid-turn, vouched or not, echoes the LAST of them. Absent on turns that neither had a client uuid nor folded a user message in, on session-scoped failures with no single triggering send (a crashed worker's zeroed result), and from older producers."
        ),
      user_message_uuids: T(o())
        .optional()
        .describe(
          "Client uuids of every user message whose prompt this turn consumed, in consumption order \u2014 all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any queued user message folded into the running turn between tool rounds, once taken off the queue \u2014 so a consumer that sent any of them can bind this result to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries; can be longer than the list on the turn's first reply frame. Present when a headless turn that ran echoes user_message_uuid; absent on delivery-failure and zeroed results and from older producers (fall back to user_message_uuid)."
        ),
      resume_reason: o()
        .optional()
        .describe(
          "Why this turn continued one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, \u2026), else 'interrupted_turn'. Present on such a headless turn's result, success or error, with or without an echo (a turn whose opening user prompt could not be vouched for still carries the reason); absent on every other turn (also one that goes on from the answer to any other permission prompt), on the Remote Control bridge's per-turn synthetic results, and from older producers."
        ),
      terminal_reason: NA().optional(),
      interrupted_by_shutdown: A(!0).optional().describe(jA),
      result_index: v().int().nonnegative().optional().describe(VA),
      fast_mode_state: $t().optional(),
      fast_mode_disabled_reason: Xt().optional(),
      origin: po().optional(),
      uuid: m(),
      session_id: o()
    })
  ),
  qF = p(() =>
    $e([VF(), jF()]).describe(
      `The outcome of a turn. The CLI emits exactly one result message per turn, after that turn's assistant, user and stream_event messages; treat it as the turn-complete signal (informational system messages such as task notifications, session state changes or prompt suggestions may still follow it). subtype "success" carries the final assistant text in result \u2014 or, with is_error true, the error text when the turn ended on an API error; the error subtypes say why the turn stopped early. In single-prompt (non-streaming-input) mode the process exits after the turn.`
    )
  ),
  mn = p(() =>
    u({
      file: o().optional().describe("Path to the settings file that failed to parse or validate."),
      path: o().describe(
        "Dot-notation path to the field with the error, or empty string for whole-file errors."
      ),
      message: o().describe("Human-readable error message.")
    }).describe(
      "A settings file parse or validation error. When a settings.json file fails to parse (invalid JSON, JSON comments, schema mismatch), the file is skipped and any rules it contained \u2014 including permission allow/deny lists \u2014 are not applied."
    )
  ),
  mo =
    "The plugin's version as declared in its plugin.json manifest, emitted verbatim (plugin-author-controlled \u2014 validate before trusting). Omitted when the manifest declares no version.";
function qA() {
  return u({
    id: o(),
    view_url: o(),
    device: Gr("status", [
      u({ status: A("bound"), device_id: o(), display_name: o().optional() }),
      u({ status: A("unbound"), reason: o(), message: o() })
    ]),
    directory_sync: u({
      state: B(["off", "seeding", "armed", "stopped"]),
      reason: o().optional(),
      message: o().optional(),
      first_upload: o().optional(),
      synced_files: v().int().nonnegative().optional(),
      other_window: M().optional(),
      muted: M().optional(),
      started_from_upload: M().optional(),
      direction: B(["two_way", "upload_only"])
        .optional()
        .catch(void 0),
      file_mode: B(["container_sync", "device_tools", "unspecified"]),
      file_mode_source: B(["stored"])
    }),
    client_version: A(1),
    not_applied: T(u({ name: o(), kind: B(["lost", "kept", "preference"]) })).optional(),
    host: u({
      handle: o(),
      working_dir: o(),
      platform: o(),
      cli_version: o().optional()
    }).optional(),
    serving: u({
      state: B(["on", "off", "pending", "revoked"]).catch("off"),
      reason: o()
        .optional()
        .catch(void 0),
      policy: B(["parity", "interim"]).catch("interim"),
      channel: B(["session", "bridge_only"]).catch("bridge_only")
    }).optional(),
    connection: B(["connecting", "live", "reconnecting"])
      .optional()
      .catch(void 0),
    calls: u({
      live: T(
        u({
          call_id: o(),
          tool: o(),
          state: B(["running", "asked"]).catch("running"),
          since: v(),
          ask_id: o().optional(),
          lapses_at: v().optional()
        })
      ),
      recent: T(
        u({
          call_id: o(),
          tool: o(),
          ended: B(["completed", "denied", "withdrawn", "refused", "failed"]).catch("failed"),
          code: o().optional(),
          at: v()
        })
      )
    }).optional(),
    notices: T(u({ key: o(), text: o() }))
      .optional()
      .catch(void 0)
  });
}
var GF = p(() =>
    u({
      type: A("system"),
      subtype: A("init"),
      agents: T(o()).optional(),
      apiKeySource: ZH(),
      startup_timing: me(o(), oe())
        .optional()
        .describe(
          "@internal Cold-start telemetry for hosted (CCR) sessions: named startup phases and resume-hydration counters (StartupTiming in src/utils/startupTiming.ts). Absent elsewhere."
        ),
      betas: T(o()).optional(),
      claude_code_version: o(),
      cwd: o(),
      tools: T(o()),
      mcp_servers: T(
        u({
          name: o(),
          status: o(),
          source: o()
            .optional()
            .describe(
              "Where the server definition came from \u2014 same values as McpServerStatus.source (sdk | plugin | a config scope). Absent on CLIs that predate the field."
            )
        })
      ),
      model: o(),
      permissionMode: de(),
      slash_commands: T(o()),
      terminal_slash_commands: T(o())
        .optional()
        .describe(
          "Subset of slash_commands whose UX is bound to the local terminal (e.g. exit, statusline). Phone/remote UIs should hide these from command menus; desktop surfaces may keep them. Present only when non-empty; absent on CLIs that predate the field, and on sessions where no advertised command carries the tag."
        ),
      output_style: o(),
      skills: T(o()),
      plugins: T(
        u({
          name: o(),
          path: o(),
          source: o()
            .optional()
            .describe(
              '@internal Plugin source identifier in "name\\@marketplace" format. Sentinels: "name\\@inline" for --plugin-dir, "name\\@skills-dir" for .claude/skills plugins, "name\\@synced" for plugins synced from claude.ai, "name\\@builtin" for built-in plugins.'
            ),
          version: o().optional().describe(mo)
        })
      ),
      plugin_errors: T(
        u({
          plugin: o(),
          type: o(),
          message: o(),
          path: o()
            .optional()
            .describe(
              "Present only when a --plugin-dir, SDK `plugins` or synced directory entry did not load at all: the path of that entry, resolved against the cwd (for a directory, the value its `plugins[]` row would have carried; for a .zip, the archive; a --plugin-url entry carries none). `plugin` is then the positional `inline[N]` / `synced[N]` tag, so a host that mounts several directories pairs the error to its own by this path."
            )
        })
      )
        .optional()
        .describe(
          "Plugin load-time errors. A plugin that did not load (an unmet dependency, a --plugin-dir entry that failed) is absent from `plugins[]`; a plugin that loaded without one of its components keeps its row and gets an entry here too. `plugin` is `name@marketplace`, or the positional `inline[N]` / `synced[N]` tag for a directory entry that failed before it had a name; `type` is a category from an open set (path-not-found, generic-error, manifest-validation-error, dependency-unsatisfied, hook-load-failed, \u2026) \u2014 treat a value you do not recognize as a generic failure; `message` is display text. The key is omitted when there are no errors; CI can fail on `(plugin_errors?.length ?? 0) > 0`. A session whose frames are persisted server-side (a Remote Control worker) always omits this key \u2014 plugin diagnostics stay in the local log there, so an omitted key does not assert a clean load."
        ),
      plugin_warnings: T(u({ plugin: o(), type: o(), message: o() }))
        .optional()
        .describe(
          "@internal Plugin authoring feedback (e.g., a default folder shadowed by a manifest key). When `plugin` matches an entry in `plugins[]`, that plugin loaded and the warning is advisory; warnings with a synthetic `plugin` source (no matching `plugins[]` entry, e.g. workspace-level suppression notices) describe content that did NOT load. The key is omitted when there are no warnings. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 plugin diagnostics stay in the local log, so an omitted key there does NOT assert a clean load."
        ),
      mcp_server_errors: T(u({ name: o(), type: o(), message: o() }))
        .optional()
        .describe(
          "@internal MCP server config entries from --mcp-config that failed validation and were skipped (e.g. a `url` entry with no `type`). Affected servers are absent from `mcp_servers[]`. `type` is a stable category from an open set \u2014 currently unknown_type, url_missing_type, invalid_config, reserved_name, or (Remote Control child only) bridge_carrier_foreign_entry, bridge_carrier_not_http, bridge_carrier_url_mismatch, bridge_carrier_no_ingress_origin, bridge_carrier_no_session_id; treat values you do not recognize as a generic skip. The key is omitted when there are no errors; CI can fail on `(mcp_server_errors?.length ?? 0) > 0`. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted \u2014 the skipped-entry detail stays in the local log, so an omitted key there does NOT assert every entry validated."
        ),
      fast_mode_state: $t().optional(),
      fast_mode_disabled_reason: Xt().optional(),
      footer_indicator: Ao()
        .optional()
        .describe(
          `@internal The terminal's configured "\u25C6 <text>" footer pill \u2014 see SDKFooterIndicator. Absent when nothing is configured.`
        ),
      effort: B(["low", "medium", "high", "xhigh", "max"])
        .nullable()
        .optional()
        .describe(
          "The effort level the session will send on its next request \u2014 after env overrides, session state, org caps and model-support downgrades; the same value get_settings reports as applied.effort. null when no effort parameter will be sent (a model without effort, CLAUDE_CODE_EFFORT_LEVEL=unset, or an internal numeric budget). Present on Remote Control bridge init frames (terminal- and Desktop/VS Code-hosted sessions); absent on hosts that do not publish it and on CLIs that predate the field. Re-emitted inits carry the current value \u2014 the newest frame wins."
        ),
      per_turn_effort_active: M()
        .optional()
        .describe(
          "@internal Whether per-turn effort is active for this frame's `model`. true: an effort change keeps the prompt cache, because the effort is sent inside the conversation, at the turn where it changes. false: the effort is sent only as the top-level parameter, so a change rewrites the cached prefix. Mid-session the CLI reports only a change to false (system/per_turn_effort_changed), and true comes only from an init. After a fresh process, or after the conversation's refusals are cleared (for example by /clear or a compaction), a true is provisional: a refusal on any later request sends system/per_turn_effort_changed before the retry, so a host keeps listening for it all session. Absent means unknown. Sent by the stream-json (Agent SDK) host."
        ),
      view_mode: B(["focus", "default"])
        .optional()
        .describe(
          "Whether the session's transcript is in focus view ('focus': the model is told the user sees only its final message per turn, so clients may collapse each turn to the prompt and the final response; 'default' otherwise). Toggled by /focus, including over Remote Control. Present on Remote Control bridge init frames and on the per-turn init of headless stream-json runs (`claude rc` workers, -p, the SDK's subprocess transport); absent on hosts that do not publish it (the in-process engine) and on CLIs that predate the field. Re-emitted inits carry the current value \u2014 the newest frame wins."
        ),
      capabilities: T(o())
        .optional()
        .describe(
          "Protocol capabilities this CLI supports, so SDK consumers can feature-detect instead of version-sniffing. Open set \u2014 ignore unknown values; check each capability for exactly the behavior you use. 'interrupt_receipt_v1' = the interrupt control_response success payload carries still_queued (uuids of async user messages that survive the interrupt). 'interrupt_cancel_queued_v1' = the interrupt control_request honors cancel_queued:true (queued and pending-dispatch commands are cancelled alongside the abort, listed on the response's cancelled field; still_queued is then empty \u2014 including any uuid that was mid-fold at the interrupt instant, since this request also aborts and the fold never delivers it \u2014 except that a client driving a hosted session lists there what it can no longer recall: a send already in flight to that session, or the first prompt the session was created with). 'queued_notifications' = the CLI accepts inbound queued_notification stream messages and drains them via ReadNotifications (the cloud session backend reads this from the persisted init event to decide whether it may send them). Absent on older CLIs."
        ),
      analytics_disabled: M()
        .optional()
        .describe(
          "@internal True when the CLI has analytics/telemetry disabled (privacy level, DO_NOT_TRACK, or 3P provider). IDE clients use this to hide per-message thumbs feedback UI since the rating event would be a no-op."
        ),
      product_feedback_disabled: M()
        .optional()
        .describe(
          "@internal True when the org's allow_product_feedback policy is false (ZDR/HIPAA). IDE clients use this to hide feedback surfaces (thumbs, session survey) whose events the CLI would drop at the proxy boundary anyway."
        ),
      memory_paths: u({ auto: o().optional(), team: o().optional() })
        .optional()
        .describe(
          "@internal Absolute directory paths for the auto-memory and team-memory stores. Lets SDK renderers classify Read/Write/Edit tool calls on these paths as memory operations without re-implementing CLI path detection."
        ),
      scratchpad_path: o()
        .optional()
        .describe(
          "@internal Absolute path of this session's scratchpad directory, for clients that read files from the session. Omitted when the scratchpad is disabled, and from the redacted init sent over the Remote Control bridge and by the hosted worker."
        ),
      original_cwd: o()
        .optional()
        .describe(
          "@internal Absolute path of the folder the session's file permission checks are anchored at, for clients that read files from the session. Unlike cwd it does not follow the shell: it moves only on /cd, on entering or leaving a worktree, and on a session restore. Omitted on the lanes that redact system/init's local paths: the init sent over the Remote Control bridge and by the claude-code-server tenant worker. Omitted too in a session that has no directory, where cwd is the empty string, and, on every lane, for an organization that is under HIPAA or whose policy the session fetches but does not hold."
        ),
      additional_directories: T(o())
        .optional()
        .describe(
          "@internal Absolute paths of the folders added to the session (--add-dir, the SDK additionalDirectories option, settings, a grant or a host's request made mid-session), in no particular order; an empty array when there are none. Re-read for every init message. Left out: a folder that only a settings file the repository delivers adds (.claude/settings.json, and .claude/settings.local.json unless git is known not to track it), so that a branch cannot widen what a client fetches; and an entry not stored as an absolute path. Entries are not all symlink-resolved, and one can be the symlinked spelling of the start folder. It grants nothing: the CLI's own check decides every read. Absent means not told, not none: omitted on the lanes that redact system/init's local paths and for an organization that is under HIPAA or whose policy the session fetches but does not hold, like original_cwd, and by a host that has not wired it. A session that has no directory still sends it."
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal This cloud worker's life (CLAUDE_CODE_WORKER_EPOCH): a new number each time the session's worker is started. A claude --cloud client that latched an acknowledged epoch (remote_tools_announce) re-registers only when this differs. Emitted on workers where the account's remote-tools gate (tengu_violin_wood) is on, and by every claude-code-server worker whatever that gate reads; absent outside cloud workers and on CLIs that predate the field."
        ),
      powershell_path: o()
        .nullable()
        .optional()
        .describe(
          "@internal Windows only: the absolute path of the PowerShell binary this session runs PowerShell commands with (PowerShell 7 when installed, including Microsoft Store installs, else Windows PowerShell 5.1), or null when none was found. Lets a desktop host open its own terminal with the same shell instead of re-implementing the detection. Present on stream-json (Agent SDK) init frames; absent on other platforms, wherever the init ambient is redacted (the Remote Control bridge), and on CLIs that predate the field."
        ),
      cloud_session: qA()
        .optional()
        .describe(
          "@internal Only on init frames written by the headless stream-json client of a cloud-hosted session (agent loop in the cloud container; this machine may be bound to it as a device): a snapshot per frame, absent in every other mode; no user, assistant or result frame precedes the first such init (informational system frames may; so may a worker's result that no init preceded, after all that was held ahead of it; on a re-attach so may frames of a turn already in progress, other clients' prompts, and the echo of this host's own prompt when the session already had it or it joins a turn in progress). `id` is the cloud session id, always in its `session_\u2026` spelling (the producer normalizes the service's `cse_\u2026` spelling of the same session); hosts store it and pass it back verbatim to re-attach. The frame-level `session_id` is instead the cloud worker's id, a uuidv5 of the session id in its `cse_` form: the same for the life of the cloud session across worker restarts and re-attaches until a /clear in the session, and passed through by the client unchanged. When `device.status` is `unbound`, `reason` is one of the client's unbound-reason keys and `message` its phrase: one line, at most 200 characters, no ANSI or trailing newline, worded to follow `Laptop tools unavailable: `. `directory_sync`: see docs/cloud-session-block.md. `not_applied`, when present, lists what the host passed that this session does not apply \u2014 `name` is a flag as `--flag`, a key inside --settings / --managed-settings as `settings.<key>` / `managed-settings.<key>`, or a field of the opening initialize as `initialize.<field>` (at most 40, lost first, each one line of about 64 characters at most); `kind` says what it costs: `lost` (the session does without something this invocation asked for \u2014 the informational warning names these), `kept` (an attach: the existing session keeps what it was created with) or `preference` (a display or host preference nobody would miss \u2014 the informational notice names these two), so a host may show them itself once or never; absent when nothing was left unapplied. `host`, when present, is what this machine announces as to the session: `handle` is the name the model addresses it by (and a client shows), `working_dir` the absolute directory served calls run in (that machine's separators), `platform` its platform word, `cli_version` its Claude Code version; each one line of at most 200 characters; present once this machine has built an announce for the session (bound, with something or an explicit nothing to serve), absent otherwise and on clients that predate it. `serving`, when present, says whether this machine serves its tools (Bash, Read, Write, Edit) to the session over the session's channel: `state` is `pending` while bound and about to announce, `on` once the session holds this machine's tools, `off` when it serves nothing, `revoked` when it stopped mid-session; `reason` (present when `state` is not `on` and the cause is known) is one of the client's serving-off keys \u2014 `not_bound` (see `device.reason`), `external_build`, `windows`, `muted` (Anthropic's emergency switch turned serving off; it comes back when the switch does), `switch_off`, `launched_from_home`, `channel_off`, `egress`, `policy_org` (the organization does not allow remote sessions), `flag_off`, `flag_stale`, `announce_refused`, `announce_unverified`, `superseded` \u2014 an open set: render an unrecognized value as a generic not-serving state; `policy` is the serving policy in effect (`parity`, or the stricter `interim` fallback); `channel` is `session`, or `bridge_only` when the session channel is switched off on this machine and served calls (if any) ride only the legacy device bridge, whose state this block does not describe. Absent on clients that predate it: feature-detect the key. `connection`, when present, is this client's stream to the session: `connecting` before it first connects, `live` while it is up, `reconnecting` while it is lost and being re-dialled (this machine is offline to the session meanwhile). `calls`, when present (once this machine has served a call this attach), is what it serves right now and how its last calls ended, by id and tool name only \u2014 never a call's input or output: `live` lists, oldest first, each call admitted here and not yet ended, `state` `running` while this machine executes it or `asked` while it waits on the session's approval (`ask_id` names the question; `since` is when it entered that state and `lapses_at` about when the session gives an unanswered question up, both epoch milliseconds on this machine's clock \u2014 the session's own timer decides); `recent` lists, newest last, at most 20 calls that ended here, `ended` being `completed`, `denied` (the session said no), `withdrawn` (the session took the question back unanswered \u2014 its patience ran out or the turn moved on), `refused` or `failed`, with `code` the result's disposition, refusal or failure word when it has one, and `at` when. `notices`, when present, is what this machine's serving has told the person during this attach that a host should show, at most 8: `key` is the notice's stable name (an open set \u2014 `device-mcp-consent`: this machine has MCP servers a cloud session could use and none are offered until the person allows it; `device-mcp-reconsent`: a server it offers changed the tools it lists and is withheld until re-approved, or this machine's record of what its servers list could not be read and none are offered \u2014 `text` says which; `device-mcp-policy`: a deny list in this machine's Claude Code settings lists remote-devices, so none of its MCP servers are offered; `device-mcp-dropped`; `served-hooks-not-run`; `served-hook-errors`; `served-bash-launched-from-home`; `served-tools-muted` / `served-tools-unmuted`; `announce_unverified`) and `text` its one line (at most 200 characters, no ANSI or newline) \u2014 this machine's own words with names from its own configuration, to be shown as plain text; written only by a serve-only helper (`--attach-serve`) and absent when nothing was said. `calls`, `connection` and `notices` are pushed between inits on `cloud_session_delta` frames. `client_version` rises only on a breaking change to this block \u2014 warn and continue on a higher value, never refuse; `not_applied[].kind`, `serving.state`, `connection`, `calls[].state` / `ended` and reason keys may gain values without it changing, so treat unrecognized values neutrally (an unrecognized `serving.state` as not serving \u2014 this schema itself parses an unrecognized `serving.state` as `off`, `policy` as `interim`, `channel` as `bridge_only`)."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "Session metadata the CLI emits at the start of each turn, normally ahead of every other message of that turn: session_id, model, working directory, tools, MCP servers, slash commands, permission mode, and the capabilities list for feature detection."
    )
  ),
  BF = p(() =>
    u({
      type: A("stream_event"),
      event: zF(),
      parent_tool_use_id: o().nullable(),
      uuid: m(),
      session_id: o(),
      ttft_ms: v().int().optional(),
      thinking_display: o()
        .optional()
        .describe(
          "@internal The thinking.display Claude Code put in the API request body for the response this event belongs to. If anything rewrites the request on its way to the API, this value still states what Claude Code sent, not what the API received. Two responses of one turn can differ. Set on `message_start`, on a thinking block's `content_block_start` and on `thinking_delta` events when the body had a display; absent on every other event, on Remote Control (interactive terminal) sessions and from older producers. An event that the API did not send as it stands can lack the key. The key states which display the text was requested with, and nothing about how to show it. An absent key states nothing: neither which display was requested, nor that none was."
        ),
      api_message_id: o()
        .optional()
        .describe(
          "@internal The API's id (`msg_\u2026`) of the response this event belongs to: `event.message.id` on its `message_start`, `message.id` on its assistant messages. Not a message `uuid`. Set on every event from a response's `message_start` to its `message_stop`, so that a consumer that missed the `message_start` can still tell responses apart. Two responses can share an id, as when a `message_start` is replayed; the key does not tell those apart. Absent on pings, when the `message_start` had no id or an empty one, on Remote Control (interactive terminal) sessions and from older producers. The events that Claude Code produces itself to close a response cut short carry it too. Events that a plugin produced or rewrote, and those that Claude Code builds in their place or to close them, can lack it. An absent key states nothing about which response the event belongs to."
        ),
      abandoned_blocks: u({
        api_message_id: o().describe(
          "The API's id (`msg_\u2026`) of the response that was cut short: `event.message.id` on its `message_start`, `message.id` on its assistant messages. Not a message `uuid`. Should two responses share an id, the one meant is the one this `message_stop` closes."
        ),
        from_block_index: v()
          .int()
          .nonnegative()
          .describe(
            "Blocks of the response at this index and above have no assistant message and never will. It is an `event.index` as on the response's `content_block_*` events, not a count of assistant messages. 0 means the whole response. Can be higher than every index the consumer has seen, and then there is nothing to remove."
          )
      })
        .optional()
        .describe(
          "@internal Set on a `message_stop` that Claude Code produced itself, after it stopped reading the response that `message_stop` closes because the API's stream failed, stalled or ended early. That response's content blocks at index `from_block_index` and above have no assistant message and will never get one, so a consumer that drew or stored them from stream events, and holds no assistant message for them, can remove them, even a block that has had its `content_block_stop`. Nothing is stated about lower blocks: some may have no assistant message, and what follows may repeat or replace them. What follows can be, among others, a retry (a new `message_start`), the same request without streaming (assistant messages under another id, with no `message_start` before them), an assistant message that reports the error, or nothing. A plugin can add content blocks of its own to a response, and those do get assistant messages under the same id, emitted before this event. Absent on every other `message_stop` (the API's own, one produced for a response that had arrived whole, one where Claude Code cannot be sure), on Remote Control (interactive terminal) sessions and from older producers. An absent key states nothing: a block with no assistant message yet may still get one."
        ),
      text_runs_joined: A(!0)
        .optional()
        .describe(
          "@internal Set on the `message_start` of a response when CLAUDE_CODE_WEBSEARCH_CITATIONS is on in a non-interactive session. Each run of adjacent text blocks of that response gets one assistant message with one text block, which holds the joined text. Each entry of its `citations`, except a `web_search_result_location`, has `span_start` and `span_end`: the place of the cited block in the joined text, in Unicode code points, end exclusive. The `content_block_*` events still show each block of the run by its own index. A response that came without streaming has no `message_start`, and it is joined too."
        ),
      user_message_uuid: o()
        .optional()
        .describe(
          "Client uuid of the user message this turn is answering (submitMessage options.uuid), stamped on a non-ping stream event each time that send changes: the turn's FIRST non-ping stream event (normally the frame that triggers the turn's initial ack), and, for a turn started by a synthetic (meta) prompt, the first non-ping stream event after each queued user message folded in mid-turn takes the echo over (see SDKAssistantMessage.user_message_uuid for the rule) \u2014 so a consumer can bind the reply stream to the send it answers without waiting for the result. A turn started by a typed prompt stamps only its first non-ping stream event; independently, its first complete assistant message is stamped as well (see SDKAssistantMessage.user_message_uuid), so the same uuid may appear on both. Absent on every other stream event of the turn, on turns that neither had a client uuid nor folded a user message in, and from older producers."
        ),
      user_message_uuids: T(o())
        .optional()
        .describe(
          "Client uuids of every user message whose prompt this turn has consumed so far, in consumption order \u2014 all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any user message folded into the turn before this frame \u2014 so a consumer that sent any of them can bind this reply to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries. Present exactly when user_message_uuid is, on the same frames; absent from older producers (fall back to user_message_uuid)."
        ),
      resume_reason: o()
        .optional()
        .describe(
          "Why this frame's turn continues one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, \u2026), else 'interrupted_turn'. Stamped on the same reply frames as user_message_uuid (which on such a turn names the interrupted turn's own last user prompt), so a consumer can tell its first reply from the interrupted attempt's. Absent on every other turn (also one that goes on from the answer to any other permission prompt), on thinking_tokens frames, and from older producers."
        )
    }).describe(
      "An incremental streaming event for the assistant message being generated, emitted only when partial messages are requested (--include-partial-messages). The complete assistant message still follows as its own message."
    )
  ),
  KF = p(() =>
    u({
      type: A("system"),
      subtype: A("compact_boundary"),
      compact_metadata: u({
        trigger: B(["manual", "auto"]),
        pre_tokens: v().int(),
        post_tokens: v().int().optional(),
        cumulative_dropped_tokens: v()
          .int()
          .optional()
          .describe(
            "@internal Running total of context tokens compaction has removed so far, across this and every earlier compaction. " +
              "Each contribution is approximately pre_tokens \u2212 post_tokens."
          ),
        duration_ms: v().int().optional(),
        user_context: o()
          .optional()
          .describe('@internal User-provided focus text for manual "summarize from here".'),
        messages_summarized: v()
          .int()
          .optional()
          .describe("@internal Count of messages the compaction summarized."),
        precomputed: M()
          .optional()
          .describe(
            "@internal The summary was generated in the background at the autocompact threshold and swapped in when prompt-too-long fired; duration_ms measures user-wait from that point."
          ),
        pre_compact_discovered_tools: T(o())
          .optional()
          .describe(
            "@internal Deferred-tool names discovered before this compaction. extractDiscoveredToolNames reads this back on the next turn so the tool-schema filter keeps including them after the tool_reference-carrying messages were summarized away."
          ),
        pre_compact_artifact_read_versions: T(u({ slug: o(), ver: o() }))
          .optional()
          .describe(
            "@internal The artifact versions the conversation held before this compaction (slug is the artifact id, ver the version read or published), most recently changed first; empty when it held none. A resumed session replays these so it can update those artifacts without reading them again."
          ),
        preserved_segment: u({ head_uuid: m(), anchor_uuid: m(), tail_uuid: m() })
          .optional()
          .describe(
            "Relink info for messagesToKeep. Loaders splice the preserved segment at anchor_uuid (summary for suffix-preserving, boundary for prefix-preserving partial compact) so resume includes preserved content. Unset when compaction summarizes everything (no messagesToKeep)."
          ),
        preserved_messages: u({
          anchor_uuid: m(),
          uuids: T(m()),
          all_uuids: T(m())
            .optional()
            .describe(
              "@internal Unfiltered messagesToKeep UUIDs. uuids is the on-disk subset (messages recordTranscript writes); all_uuids is the in-memory superset including non-loggable messages an in-process surface still holds for the next turn's API input. Absent from older producers."
            )
        })
          .optional()
          .describe(
            "Ordered messagesToKeep UUIDs. Supersedes preserved_segment \u2014 " +
              "readers look up each UUID directly and relink uuids[i] to uuids[i-1] (uuids[0] to anchor_uuid) instead of walking the parentUuid chain. Unset when compaction summarizes everything."
          )
      }),
      logical_parent_uuid: m()
        .nullable()
        .optional()
        .describe(
          "@internal uuid of the last pre-compact message \u2014 the backpointer " +
            "forkSession follows across the compaction break. Distinct from the session-file chain parent (which is the post-compact summary). Absent from older producers."
        ),
      uuid: m(),
      session_id: o(),
      historical: M()
        .optional()
        .describe(
          "@internal Replayed history rather than a live message (stamped by the Remote Control bridge when it flushes history to the session server)."
        )
    })
  ),
  HF = p(() =>
    u({
      type: A("system"),
      subtype: A("status"),
      status: CF(),
      permissionMode: de().optional(),
      compact_result: B(["success", "failed"]).optional(),
      compact_error: o().optional(),
      compact_output_chars: v()
        .int()
        .optional()
        .describe(
          "@internal On the 'compacting' statuses of an automatic compaction (absent on a typed /compact): characters of the summary streamed so far (text and tool-input deltas, not thinking). Returns to 0 at each new attempt at the summary (a request retried inside an attempt adds to what the dropped try streamed), and stays 0 while waiting for a summary written in the background. A rising count shows that the summary is being written; a still one proves nothing, and it is not a share of the final length, which is not known in advance."
        ),
      uuid: m(),
      session_id: o()
    })
  ),
  _o = p(() =>
    u({
      type: A("system"),
      subtype: A("post_turn_summary"),
      summarizes_uuid: o(),
      status_category: o(),
      status_detail: o(),
      needs_action: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Background post-turn summary emitted after each assistant turn. summarizes_uuid points to the assistant message this summarizes."
    )
  ),
  go = p(() =>
    u({
      type: A("system"),
      subtype: A("task_summary"),
      detail: o().nullable(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Mid-turn progress line from the debounced classifier. Mirrors external_metadata.task_summary so non-CCR consumers (desktop LocalSessionManager) see the same live phrase. detail is null on the idle clear."
    )
  ),
  fo = p(() =>
    u({
      type: A("system"),
      subtype: A("session_metadata"),
      metadata: u({
        artifacts: T(
          u({
            url: o(),
            title: o().optional(),
            favicon: o().optional(),
            kind: A("frame"),
            updated_at: o()
          })
        )
          .nullable()
          .optional()
      }),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal The same external_metadata patch a cloud worker sends the session server, for the keys a local host needs: today `artifacts` (the session's published-artifact list, whole list on each change, null once empty). Lets an SDK host keep the per-session summary a cloud session gets, without reading transcript rows."
    )
  ),
  FF = p(() =>
    u({
      type: A("system"),
      subtype: A("informational"),
      content: o(),
      level: B(["info", "notice", "suggestion", "warning"]).describe(
        "Render level. 'info' shows only in transcript mode; 'notice' renders in inactive gray; 'suggestion' and 'warning' are more prominent."
      ),
      tool_use_id: o().optional().describe("Dedupes progress messages for the same tool use."),
      prevent_continuation: M()
        .optional()
        .describe(
          "When true, execution stops after this message (e.g. a Stop hook denied continuation)."
        ),
      tag: o()
        .optional()
        .describe(
          "Opaque feature tag on a line a host may treat specially; absent on ordinary lines. Hosts ignore values they do not know."
        ),
      prompt_submit_outcome: u({
        kind: B(eA)
          .optional()
          .catch(void 0),
        no_verdict_kind: B(tA)
          .optional()
          .catch(void 0)
          .describe(
            "Sent with kind 'no_verdict', and says why: 'remote_run_failed' (the hook runs on another machine, and the run failed or gave no usable answer), 'remote_run_timed_out' (the wait for that run timed out; the hook may never have been sent), 'interrupted' (the turn was aborted during that wait), 'remote_runner_refused' (Claude Code does not send this hook to that machine; a retry does not help), 'unsupported_in_cloud_session' (a cloud session cannot run this type of hook), 'output_distrusted' (Claude Code could not prove that it read all of the hook's output), 'callback_timed_out' (a callback hook did not answer in time), 'hook_failed' and 'hook_timed_out' (for this hook a failure blocks), 'hooks_never_ran' (an internal fault: the hooks did not run over the submitted text), 'personal_config_refused' (the session restricts personal config, and part of the person's own settings did not load or is off), 'rewrite_unplaceable' (a plugin's code module changed the prompt's text, and Claude Code has no place to put the change)."
          ),
        prompt_kept: M(),
        reason: o().optional()
      })
        .optional()
        .catch(void 0)
        .describe(
          "@internal Present on the line that ends a submitted prompt before a model call. It says how the prompt ended, so a host can write its own message or count endings and does not match `content`. kind: 'blocked_by_hook' (a hook answered with a block), 'stopped_by_hook' (a hook answered continue:false), 'dropped_by_hook' (a plugin's code module dropped the prompt), 'not_passed_on' (a plugin's code module answered and did not pass the prompt on), 'no_verdict' (no hook gave a verdict, and Claude Code ended the prompt itself). prompt_kept: true when the prompt stays in the conversation, where the model reads it on the next turn. Do not infer it from kind. reason: the hook's text as Claude Code got it, with nothing added here; a model writes it for a prompt or agent hook. It is never sent with no_verdict. It is absent when Claude Code got no text, and for a plugin's code module that blocks on the UserPromptSubmit hook event. ANSI codes are removed, control and invisible characters are replaced, line feeds stay, and long text is cut. It is untrusted and can quote the prompt, so render it as plain text. A cloud session can run the hook on another machine: its tool container, where any program can write reason, or the person's own machine. reason is then what that machine sent, for a block and for a stop. The person's own machine puts a label before the stderr of an exit 2, or before 'No stderr output' when there is none. Either machine makes the block itself when it could not read all of the hook's output, and the person's own machine can do so when its timeout fires. Each reads 'blocked_by_hook', with that machine's sentence as reason. Claude Code's own block for an SDK host that reconnected before its hook answered reads the same way, with Claude Code's sentence as reason. New values can appear: treat an unknown value as absent, and ignore reason beside an unknown kind. A slash command that runs as a fork does not send this key when a hook ends it. A follow-up that a hook blocks while a turn runs carries this key too, so read it as the end of a turn only when the next result has num_turns 0."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "Generic text banner emitted by the loop \u2014 non-error status lines, hook feedback (e.g. a UserPromptSubmit hook's block reason), slash-command output. Hosts render `content` as plaintext at the given level."
    )
  ),
  C8 = p(() =>
    u({
      type: A("system"),
      subtype: A("permission_retry"),
      content: o(),
      commands: T(o()).describe("Display names of the commands that were allowed."),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when tool execution retries after a permission-mode change allowed previously-denied commands. REPL renders a 'retrying with <commands>' banner. From internal SystemMessage 'permission_retry'."
    )
  ),
  O8 = p(() =>
    u({
      type: A("system"),
      subtype: A("stop_hook_summary"),
      hook_count: v().int(),
      hook_infos: T(
        u({ command: o(), prompt_text: o().optional(), duration_ms: v().int().optional() })
      ),
      hook_errors: T(o()),
      hook_additional_context: T(o())
        .optional()
        .describe(
          "Non-error feedback from hookSpecificOutput.additionalContext \u2014 kept separate from hook_errors so the sanctioned feedback channel is not labeled an error. Absent in sessions persisted before this field existed."
        ),
      prevented_continuation: M(),
      stop_reason: o().optional(),
      has_output: M(),
      level: B(["info", "notice", "suggestion", "warning"]),
      tool_use_id: o().optional(),
      hook_label: o().optional(),
      total_duration_ms: v().int().optional(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Summary of Stop/SubagentStop hook execution at turn end \u2014 which hooks ran, their output, and whether any prevented continuation. From internal SystemMessage 'stop_hook_summary'."
    )
  ),
  N8 = p(() =>
    u({
      type: A("system"),
      subtype: A("memory_saved"),
      written_paths: T(o()),
      team_count: v().int().optional(),
      verb: o().optional().describe('Renders as "<verb> N memories". Defaults to "Saved".'),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Confirmation that the memory subsystem wrote to the listed paths. REPL renders a '<verb> N memories' banner. From internal SystemMessage 'memory_saved'."
    )
  ),
  I8 = p(() =>
    u({ type: A("system"), subtype: A("agents_killed"), uuid: m(), session_id: o() }).describe(
      "@internal Emitted when background agents are terminated (e.g. on interrupt). REPL renders an 'agents killed' banner. From internal SystemMessage 'agents_killed'."
    )
  ),
  WF = p(() =>
    u({
      type: A("system"),
      subtype: A("instruction_size_warning"),
      total_chars: v()
        .int()
        .describe(
          "Combined length, in characters, of the instruction files in the session prompt: CLAUDE.md files, rules files and the files they import. Always over total_limit_chars."
        ),
      total_limit_chars: v()
        .int()
        .describe("The recommended limit for total_chars on the turn's model, in characters."),
      file_count: v()
        .int()
        .describe(
          "Number of files counted in total_chars. When it is 1, word the warning for a single file rather than a total."
        ),
      largest_chars: v()
        .int()
        .optional()
        .describe(
          "Length of the largest file, in characters. Present only when the warning should mention it: there are several files and this one by itself is over total_limit_chars."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal The session's instruction files add up to more than the recommended limit. Numbers only: the host words the warning in the person's language. Sent to Claude Desktop's Code tab alone, at most once per process, on a conversation's first turn after system/init; never stored in the transcript. Safe to ignore: a host that does not recognize this subtype shows nothing."
    )
  ),
  P8 = p(() =>
    u({
      type: A("system"),
      subtype: A("away_summary"),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Summary of what happened while the user was away (background tasks completed, notifications accumulated). From internal SystemMessage 'away_summary'."
    )
  ),
  M8 = p(() =>
    u({
      type: A("system"),
      subtype: A("thinking"),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Rendered thinking content (the text itself, not the running token estimate \u2014 that is SDKThinkingTokensMessage). From internal SystemMessage 'thinking'."
    )
  ),
  bo = p(() =>
    u({ type: A("transcript_mirror"), filePath: o(), entries: T(oe()) }).describe(
      "@internal Emitted after each successful local transcript write. The parent peels these off the stdout stream and batches them to the SessionStore adapter. Not exposed to public SDK consumers."
    )
  ),
  YF = p(() =>
    u({
      type: A("system"),
      subtype: A("mirror_error"),
      error: o(),
      key: u({ projectKey: o(), sessionId: o(), subpath: o().optional() }),
      uuid: m(),
      session_id: o()
    }).describe(
      "Emitted when SessionStore.append() rejects or times out for a transcript-mirror batch after bounded retry (3 attempts with short backoff; timeouts are not retried). The batch is then dropped; this surfaces the failure so consumers are not silent on data loss."
    )
  ),
  $F = p(() =>
    u({
      type: A("system"),
      subtype: A("api_retry"),
      attempt: v().int(),
      max_retries: v().int(),
      retry_delay_ms: v().int(),
      error_status: v().int().nullable(),
      error: uo(),
      no_response: u({ waited_ms: v().int(), retry_wait_ms: v().int() })
        .optional()
        .describe(
          "Present only when the API sent no response headers within the first-byte window (CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS): waited_ms is how long the failed attempt waited for headers, retry_wait_ms how long the retry will wait for them. For this cause max_retries is its own cap (normally one retry), not the session budget."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "Emitted when an API request fails with a retryable error and will be retried after a delay. error_status is null for connection errors (e.g. timeouts) that had no HTTP response."
    )
  ),
  XF = p(() =>
    u({
      type: A("system"),
      subtype: A("control_request_progress"),
      request_id: o().describe(
        "request_id of the in-flight control_request this progress belongs to."
      ),
      status: B(["started", "api_retry"]),
      attempt: v().int().optional(),
      max_retries: v().int().optional(),
      retry_delay_ms: v().int().optional(),
      error_status: v().int().nullable().optional(),
      uuid: m(),
      session_id: o()
    }).describe(
      "Progress for a long-running client-originated control_request (currently only side_question), correlated by request_id. status 'started' means the worker accepted the request and launched the work; 'api_retry' carries the same retry counters as SDKAPIRetryMessage and is present only for that status."
    )
  ),
  QF = p(() =>
    u({
      type: A("system"),
      subtype: A("model_refusal_fallback"),
      trigger: A("refusal"),
      direction: B(["retry", "revert", "sticky"]),
      scope: B(["session", "local"])
        .optional()
        .describe(
          "'session': the main thread fell back and the session model is swapped. 'local': a subagent / side-question (/btw) / background fork fell back \u2014 only that response came from the fallback model and the session model is unchanged. Absent from older CLIs (treat as 'session')."
        ),
      original_model: o(),
      fallback_model: o(),
      request_id: o().nullable(),
      api_refusal_category: o()
        .nullable()
        .optional()
        .describe(
          "The refusal category ('cyber', 'bio', \u2026): stop_details.category from the refused API response (client lane), or the fallback block's server-gated trigger.category (server lane). Open string \u2014 new categories ship on the wire ahead of schema updates. null when neither source carried a category (normal, not an error). Absent when emitted by an older CLI."
        ),
      saw_cyber_refusal: A(!0)
        .optional()
        .describe(
          "@internal Present when ANY hop of this banner's multi-hop episode was a cyber refusal \u2014 not only the origin hop that api_refusal_category describes (the banner keeps first-hop category semantics for display). Re-arm evidence for the CLI's cyber-exclusion header on session restore; never rendered, not part of the public SDK contract. Absent on cyber-free episodes and when emitted by an older CLI."
        ),
      api_refusal_explanation: o()
        .nullable()
        .optional()
        .describe(
          "stop_details.explanation from the refused API response (client lane only \u2014 the server-lane trigger carries no explanation). Unstable human prose \u2014 display only, never parse. null/absent when the response carried none, and always null on server-lane banners."
        ),
      retracted_message_uuids: T(o())
        .optional()
        .describe(
          "Wire uuids of the messages this fallback retracted \u2014 the refused partial as the consumer received it (one uuid per normalized SDK message; multi-block messages carry per-block derived uuids) plus any tombstoned tool_results. Emitted AFTER the retraction, so this is a resolution-time eviction signal: remove these messages from transcript state on receipt. Eviction is idempotent \u2014 unknown or already-removed uuids are a no-op. Absent when emitted by an older CLI."
        ),
      refused_user_message_uuid: o()
        .nullable()
        .optional()
        .describe(
          "UUID of the user message the refused request was for \u2014 the rewind target and composer prefill for edit-and-retry. This is the message's own uuid as delivered on the replay ack (not a per-block normalized uuid). null when the refused turn was not human-authored (e.g. a background task notification or auto-continuation \u2014 nothing to edit-and-retry) or otherwise cannot be identified; absent from older CLIs."
        ),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      'Emitted when the primary model ends the stream with stop_reason "refusal" and the turn is retried once on a fallback model (direction: "retry"). When `scope` is "session" (or absent \u2014 older CLIs), the swap is made persistent for the session; when `scope` is "local", only that subagent/side-question response came from the fallback model and the session model is unchanged. "revert" and "sticky" are retained in the enum for SDK-consumer compat and are no longer emitted.'
    )
  ),
  JF = p(() =>
    u({
      type: A("system"),
      subtype: A("model_refusal_no_fallback"),
      original_model: o(),
      request_id: o().nullable(),
      api_refusal_category: o().nullable().optional(),
      api_refusal_explanation: o().nullable().optional(),
      refused_user_message_uuid: o().nullable().optional(),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      'Emitted when the model ends the stream with stop_reason "refusal" and no retry runs: no fallback model is configured, or per-category routing declined the retry (the mapped fallback target is unresolvable, or CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL is explicitly disabled and the refusal category has no fallback map entry). The structured counterpart to detecting stop_reason "refusal" on the assistant error frame. Not emitted when the retry ran or the user declined the retry dialog (model_refusal_fallback covers the retry case). Absent from older CLIs.'
    )
  ),
  x8 = p(() =>
    u({
      type: A("system"),
      subtype: A("model_fallback"),
      trigger: B([
        "model_not_found",
        "permission_denied",
        "overloaded",
        "server_error",
        "last_resort",
        "model_blocked"
      ]),
      original_model: o(),
      fallback_model: o(),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      '@internal Emitted when the current turn is switched to the configured fallback model because the primary model failed (trigger "model_not_found": model retired/unknown; "permission_denied": org lacks access; "overloaded": repeated 529s; "server_error": retryable 5xx pivot; "last_resort": non-retryable error on the primary; "model_blocked": primary disabled by the per-model kill switch). Turn-scoped \u2014 the primary is re-tried on the next user turn. Not yet in the public SDKMessage union.'
    )
  ),
  D8 = p(() =>
    u({
      type: A("system"),
      subtype: A("model_consent_fallback"),
      choice: B(["consent", "switch_default", "cancelled"]).describe(
        "The consent-prompt answer (or no-dialog collapse) that produced the swap. 'consent' appears here only when the gate could not honor it (e.g. usage credits did not end up provisioned \u2014 the loop never enables billing from a bare wire reply)."
      ),
      original_model: o(),
      original_model_name: o()
        .optional()
        .describe(
          `The name the CLI's usage-credit copy uses for original_model ("Fable 5"), for a host that renders its own notice; "Fable" when absent.`
        ),
      fallback_model: o(),
      persisted_as_default: M().describe(
        "True when the decline also rewrote the saved default model (explicit switch_default with the consent-gated model as the saved default)."
      ),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when a pre-send model consent gate swaps the session off the requested model (consent declined, dismissed, or given without the required entitlement ending up provisioned). Currently emitted by the Fable 5 usage-credit gate (`fable_overage_consent_prompt`). Session-scoped \u2014 the swap persists for the session, and additionally as the saved default when persisted_as_default is true. Absence of this message after the consent dialog resolves means the session stayed on the requested model. Not yet in the public SDKMessage union."
    )
  ),
  L8 = p(() =>
    u({
      type: A("system"),
      subtype: A("file_snapshot"),
      content: o(),
      snapshot_files: T(
        u({
          key: o().describe("Identifier for the file type (e.g. 'plan', 'todo')."),
          path: o().describe("Original file path (for debugging)."),
          content: o()
        })
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Snapshot of session files (plan, todo) captured for rewind. From internal SystemMessage 'file_snapshot'."
    )
  ),
  U8 = p(() =>
    u({
      type: A("system"),
      subtype: A("scheduled_task_fire"),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when a scheduled task (cron) fires. content is the render text. From internal SystemMessage 'scheduled_task_fire'."
    )
  ),
  ZF = p(() =>
    u({
      type: A("system"),
      subtype: A("peer_message_hold"),
      state: B(["held", "released", "dropped"]).describe(
        "'held' when the receive-side policy parks the message instead of queueing it (once per message per hold cause \u2014 a re-announcement under a different cause emits again); then at most one of 'released' (the policy now accepts it: it enters the queue \u2014 its command_lifecycle 'queued' and, when it drains, its user replay echo follow under message_uuid) or 'dropped' (it will never reach the model in this session; see outcome)."
      ),
      message_uuid: o()
        .optional()
        .describe(
          "The parked command's uuid \u2014 the value its later command_lifecycle frames and user replay echo carry. For lane 'bridge'/'stdin' it is the id the host (or its bridge) supplied on the inbound message; for lane 'socket' it was chosen by the SENDING session, so a host must correlate it only within peer_message_hold / peer replay frames, never against its own prompts' lifecycle."
        ),
      lane: B(["bridge", "stdin", "socket"]).describe(
        "Which ingress delivered it: the Remote Control bridge, the host's own stdin stream, or the local cross-session socket."
      ),
      from: o().describe(
        "The sender's address as the envelope will show it (the cross-session-message `from`) \u2014 an address-shaped token with control and invisible code points scrubbed; empty when the sender supplied none or an unshaped one. Sender-asserted on the socket lane: a label, not an identity proof."
      ),
      from_name: o()
        .optional()
        .describe(
          "The sender's display name when it supplied one, normalized and scrubbed the same way. A claim, like `from`."
        ),
      cause: B([
        "explicit-setting",
        "managed-setting",
        "repo-setting",
        "invalid-setting",
        "bypass-default",
        "mode-unknown",
        "mode-mismatch",
        "no-mode-asserted"
      ])
        .optional()
        .describe(
          "state 'held' only: why the policy parked it. 'mode-mismatch' / 'no-mode-asserted' are the permission-mode parity holds (the sender runs in a different permission class, or asserted none while this session bypasses permissions); the *-setting causes are a standing crossSessionInbound:'hold'."
        ),
      outcome: B(["expired", "refused", "dropped", "discarded"])
        .optional()
        .describe(
          "state 'dropped' only: 'expired' \u2014 no one approved it before the approval deadline (a headless host has no approval surface, so every parity hold ends this way unless the mode changes first); 'refused' \u2014 the policy turned to refuse while it waited; 'dropped' \u2014 released or approved but the ingress guard (rate limit, duplicate, queue cap) discarded it; 'discarded' \u2014 the session ended with it still parked."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal A cross-session (peer) message this session's receive-side policy HELD rather than queued, and how that hold resolved. Lets a host show the human that a message arrived but has not reached the model (and may never) instead of nothing at all; the sending session is told separately over its own transport where one exists. Informational only \u2014 there is no host-side approval through this frame. Emitted on the stdout stream in -p/SDK sessions."
    )
  ),
  V8 = p(() =>
    u({
      type: A("system"),
      subtype: A("turn_duration"),
      duration_ms: v().int(),
      budget_tokens: v()
        .int()
        .optional()
        .describe("Output tokens spent this turn toward the token budget."),
      budget_limit: v().int().optional().describe("Turn token-budget ceiling."),
      budget_nudges: v().int().optional().describe("Budget-nudge count this turn."),
      message_count: v()
        .int()
        .optional()
        .describe(
          "In-memory message count at turn end; used by resume-consistency telemetry to detect write\u2192load round-trip drift."
        ),
      pending_background_agent_count: v()
        .int()
        .optional()
        .describe("Background Agent-tool runs still in flight when the turn finished."),
      pending_workflow_count: v()
        .int()
        .optional()
        .describe("Workflow-tool runs still in flight when the turn finished."),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Per-turn wall-clock duration plus budget and pending-background-work counts. REPL renders the 'Done in Ns' / 'Waiting for N agents' line. From internal SystemMessage 'turn_duration'."
    )
  ),
  j8 = p(() =>
    u({
      type: A("system"),
      subtype: A("api_error"),
      error: u({
        message: o(),
        status: v().int().optional(),
        request_id: o().optional(),
        formatted: o().describe("Human-readable display string for the error."),
        connection: u({ code: o(), message: o(), is_ssl_error: M() })
          .nullable()
          .describe("errno/SSL code extracted from the cause chain; null when absent."),
        is_network_down: M(),
        rate_limits: u({ resets_at: v().int().optional(), rate_limit_type: o().optional() })
          .nullable()
          .describe("Quota-429 headers surfaced by the retry banner; null when not a quota 429.")
      }).describe(
        "Plain-data snapshot of the APIError \u2014 the class instance cannot cross the wire."
      ),
      retry_in_ms: v().int(),
      retry_attempt: v().int(),
      max_retries: v().int(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Retryable-API-error frame carrying the plain-data error snapshot and retry counters. REPL renders the retry banner from this. Wire twin is SDKAPIRetryMessage ('api_retry'). From internal SystemMessage 'api_error'."
    )
  );
var eW = p(() =>
    u({
      type: A("system"),
      subtype: A("local_command_output"),
      content: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "Output from a local slash command (e.g. /voice, /usage). Displayed as assistant-style text in the transcript."
    )
  ),
  tW = p(() =>
    u({
      type: A("system"),
      subtype: A("hook_started"),
      hook_id: o(),
      hook_name: o(),
      hook_event: o(),
      uuid: m(),
      session_id: o()
    })
  ),
  sW = p(() =>
    u({
      type: A("system"),
      subtype: A("hook_progress"),
      hook_id: o(),
      hook_name: o(),
      hook_event: o(),
      stdout: o(),
      stderr: o(),
      output: o(),
      uuid: m(),
      session_id: o()
    })
  ),
  nW = p(() =>
    u({
      type: A("system"),
      subtype: A("hook_response"),
      hook_id: o(),
      hook_name: o(),
      hook_event: o(),
      output: o(),
      stdout: o(),
      stderr: o(),
      exit_code: v().int().optional(),
      outcome: B(["success", "error", "cancelled"]),
      uuid: m(),
      session_id: o()
    })
  ),
  rW = p(() =>
    u({
      type: A("system"),
      subtype: A("plugin_install"),
      status: B(["started", "installed", "failed", "completed"]),
      name: o().optional(),
      error: o().optional(),
      uuid: m(),
      session_id: o()
    }).describe(
      "Headless plugin installation progress (CLAUDE_CODE_SYNC_PLUGIN_INSTALL). started/completed bracket the whole install; installed/failed carry a per-marketplace name."
    )
  ),
  oW = p(() =>
    u({
      type: A("tool_progress"),
      tool_use_id: o(),
      tool_name: o(),
      parent_tool_use_id: o().nullable(),
      elapsed_time_seconds: v().int(),
      task_id: o().optional(),
      uuid: m(),
      session_id: o(),
      heartbeat: M().optional(),
      subagent_type: o().optional(),
      subagent_retry: u({
        agent_id: o(),
        attempt: v().int(),
        max_retries: v().int(),
        retry_delay_ms: v().int(),
        error_status: v().int().nullable(),
        error_category: o()
      }).optional()
    })
  ),
  aW = p(() =>
    u({
      type: A("auth_status"),
      isAuthenticating: M(),
      output: T(o()),
      error: o().optional(),
      uuid: m(),
      session_id: o()
    })
  ),
  iW = p(() =>
    u({
      type: A("system"),
      subtype: A("files_persisted"),
      files: T(u({ filename: o(), file_id: o() })),
      failed: T(u({ filename: o(), error: o() })),
      processed_at: o(),
      uuid: m(),
      session_id: o()
    })
  ),
  Eo =
    "True for tasks that are not activity (every skip_transcript task, plus every live-update watcher, requested or auto-started); hosts should exclude them from activity indicators.",
  GA =
    "@internal True for a run of a resumed subagent (local_agent) that the tool call which resumed it waits for, as SendMessage does when background tasks are disabled; its task_started, if one is sent, names that call in tool_use_id. The run has ended by the time that call returns or throws, even when the wait is aborted. Its report goes into that call's result, so expect no follow-up turn when it ends. A later resume that nothing waits for starts a new run without the field.",
  BA =
    "task_id of the subagent (local_agent) task whose agent launched this subagent, shell, monitor or workflow task. Absent when the launcher is the main thread, has no task_id of its own (a teammate, an agent inside a workflow), or is no longer tracked. A resumed subagent keeps its original parent. The parent may be a foreground or already-ended task, so treat an unknown id as no parent.",
  Yt =
    "Id of one run of the task: equal on every task_* event, background_tasks_changed entry and saved notification (its origin.runId) of that run. A resumed task keeps its task_id and gets a new one. The run ids of one task sort, by plain string comparison, in the order the runs opened; a frame that names a run sorting before the one a reader shows is late. Nothing else about the format is promised. Absent for a task this process did not register, and from CLIs that predate it.",
  lW = p(() =>
    u({
      type: A("system"),
      subtype: A("task_notification"),
      task_id: o(),
      run_id: o().optional().describe(Yt),
      tool_use_id: o().optional(),
      status: B(["completed", "failed", "stopped"]),
      reason: B(["worker_restart"])
        .optional()
        .describe(
          "Machine-readable cause, set only when the task did not end through an ordinary completion, failure, or stop. 'worker_restart': the worker process restarted and the resumed process found the task orphaned (always with status 'stopped')."
        ),
      output_file: o(),
      summary: o(),
      usage: u({
        total_tokens: v().int(),
        tool_uses: v().int(),
        duration_ms: v().int()
      }).optional(),
      resource_links: T(kA())
        .optional()
        .describe(
          "CLI-owned: for a backgrounded MCP task (task_type mcp_task) that completed, the `resource_link` content blocks of its final result \u2014 the files it returned by reference \u2014 collected from the raw result before the CLI renders it as the text the model reads. A backgrounded task's tool_result is the placeholder text and its real result arrives as this notification, so this is where a host learns which files that tool call produced; join to the originating call via tool_use_id. Same fields and caps as tool_use_result.resourceLinks (at most 50 links, 64 KiB serialized), absent when the result had none or the task is any other type. Never populated from the server's _meta."
        ),
      handback: B(aYr)
        .optional()
        .describe(
          "@internal Present on a 'completed' notification of a subagent that reports through the SubagentHandback tool: how its report reached its caller, with the values and meaning of `handback` on AgentToolCompletedOutput. Left out when the subagent failed, was stopped, is waiting on agents it started, or is waiting on its own background work with nothing delivered yet; for such a subagent, `summary` is then not a report. When present, `summary` holds harness notes written for the model. Any notification can be followed by a later one for the same task_id when the agent is resumed or finishes its wait; the later one replaces what the earlier one showed."
        ),
      handback_report: lYr()
        .optional()
        .describe(
          "@internal The report a 'send' or 'flagged' hand-back delivered, the same shape as `handbackReport` on AgentToolCompletedOutput: when present, render it instead of `summary`, with its `warning`, if it has one, above its `text`. Absent for 'withheld'; if it is absent for another value too, show `summary`."
        ),
      skip_transcript: M().optional(),
      ambient: M().optional().describe(Eo),
      uuid: m(),
      session_id: o()
    })
  ),
  dW = p(() =>
    u({
      type: A("system"),
      subtype: A("task_started"),
      task_id: o(),
      run_id: o().optional().describe(Yt),
      tool_use_id: o().optional(),
      description: o(),
      subagent_type: o().optional().describe("Subagent type for Task tool subagents."),
      is_backgrounded: M()
        .optional()
        .describe(
          "Whether the task was registered in the background (true) or in the foreground with the spawning tool call blocking on it (false). A resumed subagent is always registered in the background. A later move to the background arrives as task_updated patch.is_backgrounded. Set for local_agent and local_bash tasks."
        ),
      awaited: M().optional().describe(GA),
      spawn_depth: v()
        .int()
        .optional()
        .describe(
          "Nesting depth of a spawned subagent (local_agent) task: 1 for a top-level spawn, N+1 when spawned from inside a depth-N agent. Not set on other tasks."
        ),
      parent_task_id: o().optional().describe(BA),
      task_type: o().optional(),
      workflow_name: o()
        .optional()
        .describe(
          "meta.name from the workflow script (e.g. 'spec'). Only set when task_type is 'local_workflow'."
        ),
      prompt: o().optional(),
      skip_transcript: M()
        .optional()
        .describe(
          "Ambient/housekeeping task. Consumers should hide this from the inline transcript; it may still appear in a tasks panel."
        ),
      ambient: M().optional().describe(Eo),
      uuid: m(),
      session_id: o()
    })
  ),
  cW = p(() =>
    u({
      type: A("system"),
      subtype: A("task_updated"),
      task_id: o(),
      run_id: o().optional().describe(Yt),
      patch: u({
        status: B(["pending", "running", "completed", "failed", "killed", "paused"]).optional(),
        description: o().optional(),
        end_time: v().int().optional(),
        total_paused_ms: v().int().optional(),
        error: o().optional(),
        is_backgrounded: M().optional()
      }).describe(
        "Wire-safe subset of TaskState fields that changed. Excludes abortController, messages, result. Clients merge into their local task map."
      ),
      uuid: m(),
      session_id: o()
    })
  ),
  hW = p(() =>
    u({
      type: A("system"),
      subtype: A("background_tasks_changed"),
      tasks: T(
        u({
          task_id: o(),
          run_id: o().optional().describe(Yt),
          task_type: o(),
          subagent_type: o()
            .optional()
            .describe(
              `Agent type of a local_agent task, such as "general-purpose" or a custom agent's name; "main-session" for a backgrounded main session. Not set on other tasks.`
            ),
          description: o(),
          parent_task_id: o().optional().describe(BA),
          ambient: M().optional().describe(Eo),
          awaited: M().optional().describe(GA)
        })
      ).describe(
        "Every live background task after the change. REPLACE semantics: swap your set for this payload."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "The full set of live background tasks, emitted whenever membership changes (start, completion, kill, a foreground agent being backgrounded) or an entry's `ambient` flag or `parent_task_id` changes. A level signal, unlike the task_started/task_notification edge bookends: consumers that only need 'is background work running' should replace their set with each payload rather than pairing edges, so a missed bookend cannot wedge a stale running indicator. Ordering relative to the bookends for the same transition is unspecified (in practice a task that starts in the background joins the level before its task_started, and a finishing task leaves it after its task_updated and task_notification), so do not correlate it with the edge stream. The level is per-process: nothing is emitted at startup, so consumers must reset to the empty set whenever the session's CLI process (re)starts and let the next membership change repopulate it. A host that re-initializes an already-running process (a repeated `initialize` control request, e.g. after reconnecting) is sent a snapshot of the current set right behind the success response to that request, even when it is empty, so it need not wait for a change; CLIs that predate this send nothing there."
    )
  ),
  uW = p(() =>
    u({
      type: A("system"),
      subtype: A("feedback_draft_queued"),
      draft_id: o().describe(
        "UUID of the on-disk draft file under ~/.claude/feedback/drafts/ \u2014 the identity for discard and submit."
      ),
      draft_type: B(["bug", "idea", "missing_capability"]),
      title: o().describe("Sanitized one-line summary from the SendFeedback tool call."),
      details_preview: o().describe(
        "First ~200 chars of the sanitized details, for the host UI's three-line card preview. The full draft stays on disk and is read when the user opens the review form."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted by the SendFeedback tool after it writes a local draft to ~/.claude/feedback/drafts/, so a connected host UI can surface a review card without polling the filesystem. Carries only the card's display fields; nothing is sent anywhere without the user's explicit action on the review form."
    )
  ),
  pW = p(() =>
    u({
      type: A("system"),
      subtype: A("session_state_changed"),
      state: B(["idle", "running", "requires_action"]),
      uuid: m(),
      session_id: o()
    }).describe(
      "Mirrors notifySessionStateChanged. 'idle' fires after heldBackResult flushes and the bg-agent do-while exits \u2014 authoritative turn-over signal."
    )
  ),
  mW = p(() =>
    u({
      type: A("system"),
      subtype: A("session_title_changed"),
      title: o().describe(
        "The session's current name. Control, bidirectional and zero-width characters are replaced with single spaces, the ends are trimmed, and the name is at most 200 Unicode code points. When another session already has the name, a suffix can make it unique."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal The session's name, for a host that shows it, such as an IDE editor tab. A headless (print mode) session sends it at startup when the session already has a name, and again after each change to the name (not an AI-generated title), including a rename the host itself sent with `rename_session`. A name that another process writes to the transcript arrives when this process next reads the end of its transcript: after about 32 KB of its own transcript writes, or at a compaction. A cleared name is not sent. The same name can arrive more than once, for example when it is set again, so a host should treat a repeated name as no change. The frame can arrive before the system/init message that first names its session_id, for example at startup or after /clear. A host that learns the session id from system/init can hold the name until then."
    )
  ),
  _W = p(() =>
    u({
      type: A("system"),
      subtype: A("worker_shutting_down"),
      reason: o().describe(
        "Short snake_case reason set by the host CLI (not user input), e.g. 'host_exit', 'remote_control_disabled'."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "Emitted by the bridge on opt-in graceful worker teardown (only when the teardown caller supplied a reason), before the heartbeat stops, so remote clients can show why the worker went away instead of waiting for heartbeat timeout. Absence is NOT a dead-host signal: handoffs (/update, /teleport, respawn), auto-disable, mode transitions, and internal fatal-error paths emit nothing by design. A dead host (battery, OOM, kill -9) never reaches teardown and never sends this either. NOTE: this event lands in the durable per-session event stream \u2014 a session that is later resumed may carry historical instances mid-stream. Clients MUST treat it as a live-tail signal only (honored when no further activity follows), not a one-shot session-lifetime fact."
    )
  ),
  gW = p(() =>
    u({
      type: A("system"),
      subtype: A("turn_handoff_available"),
      v: A(1),
      tools: T(o()),
      worker_epoch: v(),
      uuid: m(),
      session_id: o(),
      staged_files: A(!0)
        .optional()
        .describe(
          "@internal Present, and true, when this worker starts a handed-off turn's calls only after every stage_file control request it received earlier has finished or failed, or a wait limit has passed; a worker that omits it may start them while files are still downloading. Exception: a request with filestore_path set (a synced file) is not waited for, so a call that names that file may start before it is synced."
        ),
      no_query_first: A(!0)
        .optional()
        .describe(
          "@internal True when user messages with shouldQuery false that reach this worker before a turn_handoff request are appended, and acknowledged, before the handed-off turn produces any output. Exception: a request that continues a turn whose leading lines an earlier request appended; that turn goes first. A worker that omits it may run the turn first."
        ),
      shared_message_id: A(!0)
        .optional()
        .describe(
          "@internal True when this worker accepts a turn_handoff request in which an assistant message repeats the message id of the assistant message before it, as the messages member of that request describes. A worker that omits it refuses such a request (invalid_handoff), so a client gives each message an id of its own there."
        ),
      relay_marker: A(!0)
        .optional()
        .describe(
          "@internal Present, and true, only when this worker uses the relay_marker member of a turn_handoff request; a client sends that member to no other worker."
        ),
      home_files: A(!0)
        .optional()
        .describe(
          "@internal Present, and true, only on a worker that takes a stage_file control request whose mount_path is /uploads/.home/<path> as a file for /home/claude/<path>: it writes the file there, answers ok with a noop (already_present, path_occupied, refused_name, home_files_off, unchecked_announcement, resent_announcement) and writes nothing, or answers an error. Any other worker treats that path as an ordinary upload."
        ),
      file_names: A(!0)
        .optional()
        .describe(
          "@internal Present, and true, only when this worker uses the file_names member of a turn_handoff request; a client sends that member to no other worker."
        ),
      carried_writes: A(!0)
        .optional()
        .describe(
          `@internal Present, and true, only on a worker that writes the files of the Write calls a turn_handoff request brings already answered, where their paths are under /home/claude. Before it appends a turn that has calls to run, it writes each such call's content to its path, replacing nothing. If it cannot write them all, it appends and runs nothing: the request is refused with an error that starts "invalid_handoff: carried_writes_", or it is accepted and the turn ends in a result with num_turns 0. Any other worker writes no file for these calls.`
        ),
      hydrates_carried_lines: A(!0)
        .optional()
        .describe(
          `@internal Present, and true, only on a worker that rebuilt the conversation from the session's stored transcript before it read any request, and would not have started without it. A client may send this worker again a turn_handoff request that an earlier worker accepted, if the request names no calls (tool_use_ids empty), is not stopped, and its messages hold no tool call. A request whose turn had not ended when an earlier worker with this key stopped is left unacknowledged, so the session service sends it to this worker by itself; a second request for the same turn is answered "duplicate" while the first waits or runs. The worker appends only the messages of the turn that its conversation lacks and, once the store has confirmed every message of the turn, sends the turn's last message back as an assistant event (the echo); a turn it already holds whole is echoed on the same condition. The request can still be accepted, or refused ("invalid_handoff:"), with no echo, and the turn may then not be stored. That happens, for example, when the conversation has moved on past the part of the turn it holds, when a rewind has removed the turn, when a compaction has summarised part of it (or all of it, if the compaction was this worker's own), when a Stop clears the queue first, or when the store does not confirm the messages. A request sent again waits again for messages not yet confirmed. When a delivery finds that the store refused a message of the turn, it sends no echo and removes the turn from the conversation, and the same request sent again to that worker gets no echo. If another row has followed the turn, the turn stays, also with no echo. Exception: after 512 later refused rows the worker forgets a refusal and reads the message as confirmed. Confirmed means that the store answered the upload with success. A turn that an earlier worker's compaction summarised whole is appended a second time. The key promises nothing for a turn that holds a tool call, or whose first message is stored with no answer but with another row behind it (a hook's output, say): the worker may already have continued such a turn itself when it started. A worker without the key may have started with none of the turn's messages.`
        )
    }).describe(
      "@internal Emitted once by a cloud worker that accepts the turn_handoff control request, after it registers, carrying what it wrote to external_metadata.turn_handoff: the version, the tools whose calls it would accept, the worker life (worker_epoch) announcing it, whether handed-off calls wait for files still being staged (staged_files), whether user messages that make no model call are appended before a handed-off turn (no_query_first), whether two assistant messages of a turn may share a message id (shared_message_id), and relay_marker, home_files, file_names, carried_writes and hydrates_carried_lines when set. Lets a session client learn the capability from the event stream instead of reading worker state. Durable in the stream: a reader keeps the entry with the newest worker_epoch it has seen and ignores older ones; a worker life that does not accept turn_handoff emits nothing (its registration writes turn_handoff: null)."
    )
  ),
  fW = p(() =>
    u({
      type: A("system"),
      subtype: A("ui_invalidate"),
      event: A("ui.render").describe(
        "@internal The render event whose version moved; the engine versions `ui.render` as one event, so no component or instance is named."
      ),
      prompts_screened: A(!0)
        .optional()
        .describe(
          "@internal Present while a mod may change what is recorded of a typed line (a hook on `prompt.submit`, `command.run`, `session.append` or, for a line sent to the session, `session.receive`; mods not yet known; or an organization policy that lists a plugin or cannot be read): what the `prompts_screened_v1` capability says on `system/init`, said as soon as a plugin load or reload makes it so. Absent says nothing: the next `system/init` does."
        ),
      instances: T(
        u({
          surface: o().describe("@internal The surface that drew the instance."),
          component: o().describe("@internal The component of the instance."),
          instance_id: o().describe(
            "@internal The engine's requestId of the instance, as the ui_render that drew it named it."
          )
        })
      )
        .optional()
        .describe(
          "@internal Present when a plugin wrote state (`$.state.set`) that these instances read while they were drawn, or a `Client` drawn in them failed and its plugin heard it (`ui.fault`), and nothing else moved: only they are stale, and the surface may re-ask them alone. Absent, every mounted instance may be stale, as before. A surface that ignores the field re-asks everything and stays correct."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      '@internal Fire-and-forget push from the hooks engine when a plugin called `$.ui.invalidate("ui.render")` or a plugin loaded or reloaded: every tree a remote surface drew through ui_render may be stale. The surface re-asks each mounted instance; the engine dedups the evaluations. Bumps from one plugin fold to at most one per 100 ms. With `instances`, a state write or a `Client` that failed made only those stale.'
    )
  ),
  bW = p(() =>
    u({
      type: A("system"),
      subtype: A("ui_log"),
      plugin: o().describe(
        "@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable)."
      ),
      text: o().describe(
        "@internal The line the plugin gave: be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Fire-and-forget push from a headless session for one `$.ui.log(text)` line: what the REPL appends to its transcript as a dim notice under the plugin's name. Not sent to the model. Lines are not counted across the session: a plugin's lines are the plugin's to write, however long the session runs; ones logged before the stream opened are delivered first, in order."
    )
  ),
  EW = p(() =>
    u({
      type: A("system"),
      subtype: A("ui_toast"),
      plugin: o().describe(
        "@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable)."
      ),
      text: o().describe(
        "@internal The line the plugin gave: be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."
      ),
      timeout_ms: v()
        .int()
        .describe(
          "@internal How long the REPL would keep it on the notification bar: the plugin's `timeoutMs`, or the engine's default (4000)."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Fire-and-forget push from a headless session for one `$.ui.toast(text)`: what the REPL shows on the notification bar under the prompt for a few seconds, under the plugin's name. Be ready for a plugin's toasts at no fixed rate; nothing counts how many a plugin has shown."
    )
  ),
  SW = p(() =>
    u({
      type: A("system"),
      subtype: A("ui_status"),
      plugin: o().describe(
        "@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable). One status line per plugin."
      ),
      text: o()
        .nullable()
        .describe(
          "@internal The plugin's pinned line, replacing its previous one; null removes it. Be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Fire-and-forget push from a headless session for one `$.ui.status(text)`: the line the REPL pins under the prompt beside the engine's own notices until the plugin's next call replaces or clears it."
    )
  ),
  TW = /^[A-Za-z0-9_-]{1,64}$/,
  pe = p(() =>
    o()
      .regex(TW)
      .describe(
        "@internal A pane's id as the plugin opened it (`$.ui.open({ id })`): 1 to 64 of letters, digits, `_`, `-`. What a ui_render for `Pane` carries as `instance_id`."
      )
  ),
  wW = p(() =>
    u({
      id: pe(),
      title: o().describe(
        "@internal The pane's tab label: the `title` its latest open gave, else its id. Plugin-authored text the engine bounded and freed of control characters: draw it as a text node, never as markup."
      ),
      plugin: o().describe(
        "@internal The registry name of the plugin that opened it, as the engine knows it; a `$.ui.scroll` or `$.ui.focus` of the pane is that plugin's alone."
      ),
      close_on_escape: A(!0)
        .optional()
        .describe(
          "@internal Escape while the pane holds the keyboard, or at an idle empty composer, closes it as the person's close does (send ui_close); absent, Escape only returns the keyboard."
        ),
      hold_toasts: A(!0)
        .optional()
        .describe(
          "@internal The surface holds its transient toasts while this pane is the one shown, and shows them once it closes."
        ),
      rows: v()
        .int()
        .optional()
        .describe(
          "@internal The body rows its content asked for while seated inline; a request the person's own sizing overrides."
        ),
      columns: v()
        .int()
        .optional()
        .describe(
          "@internal The body columns its content asked for while docked; a request the person's own sizing overrides."
        )
    }).describe(
      "@internal One placed pane as the engine holds it (plugins/functionHooks/panes/): which, its tab, its opener, and the manners and size its latest open asked for."
    )
  ),
  So = p(() =>
    u({
      panes: T(wW()).describe(
        "@internal The placed open panes in open order (an open appends, a close removes); a pane waiting unplaced is not listed. The surface draws one container for them: tabs when several, the shown one visible."
      ),
      shown_id: pe()
        .nullable()
        .describe(
          "@internal The pane the surface shows: the last opened or focused, never displacing one the person holds; null with none open."
        ),
      focused_id: pe()
        .nullable()
        .describe(
          "@internal The pane the person gave the keyboard (ui_pane_focus); null while the composer has it."
        ),
      focus_requested_id: pe()
        .nullable()
        .describe(
          "@internal A standing `$.ui.open({ focus: true })` the surface has yet to judge: honour it (focus the pane, send ui_pane_focus with its id) only while the composer is empty and idle and no dialog is up, else refuse it (ui_pane_focus with null)."
        )
    }).describe(
      "@internal The session's panes as a remote surface draws them: what ui_panes answers and the ui_panes push carries."
    )
  ),
  yW = p(() =>
    So()
      .extend({ type: A("system"), subtype: A("ui_panes"), uuid: m(), session_id: o() })
      .describe(
        "@internal Fire-and-forget push from a headless session whenever the pane roster a remote surface draws changes: a plugin opened, retitled or closed a pane, the person showed, focused or closed one, a placing client attached. Deduplicated: an unchanged roster is not pushed. A pane opened before the stream armed produces none; read the roster with ui_panes on mount."
      )
  ),
  AW = p(() =>
    u({
      type: A("system"),
      subtype: A("ui_scroll"),
      client_id: o().describe("@internal The client drawing the site, as it attached."),
      component: B(["Pane", "AbovePrompt"]).describe(
        "@internal Which site: a pane's body or the band."
      ),
      instance_id: o().describe("@internal The pane's id, or `above-prompt` for the band."),
      offset: v()
        .int()
        .describe(
          "@internal The first content row the window is to show, 0 at the top, clamped to the tree as the surface last reported it."
        ),
      follow_end: M()
        .optional()
        .describe(
          "@internal True: keep the window on the tree's last rows through the draws to come, until the person or a plugin next moves it."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Fire-and-forget push when a plugin's `$.ui.scroll` (through the `ui.scroll` chain) moved the window of a site a remote surface draws: the surface scrolls the site's body there. The person's own scrolls (ui_scroll requests) are never pushed back."
    )
  ),
  RW = p(() =>
    u({
      type: A("system"),
      subtype: A("ui_focus"),
      client_id: o().describe("@internal The client drawing the site, as it attached."),
      component: B(["Pane", "AbovePrompt"]).describe(
        "@internal Which site: a pane's body or the band."
      ),
      instance_id: o().describe("@internal The pane's id, or `above-prompt` for the band."),
      plugin: o().describe("@internal Whose element takes the ring: its `press.plugin`."),
      key: o().describe("@internal The element's `props.key`, as ui.press names it."),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Fire-and-forget push when a plugin's `$.ui.focus` (through the `ui.focus` chain) moved the focus ring of a site a remote surface draws onto one of its Buttons, Inputs or Selects: the surface focuses that element if it still draws it. The person's own moves (ui_focus requests) are never pushed back."
    )
  ),
  vW = p(() =>
    u({
      type: A("system"),
      subtype: A("commands_changed"),
      commands: T(Wt()),
      uuid: m(),
      session_id: o()
    }).describe(
      "Fire-and-forget push of the full slash-command list after a mid-session change (e.g. skills discovered dynamically as the agent works in a subdirectory). Clients should REPLACE their cached command list with this payload; supportedCommands() tracks the latest push, so a re-fetch returns the same fresh list."
    )
  ),
  kW = p(() =>
    u({
      type: A("system"),
      subtype: A("notification"),
      key: o(),
      text: o(),
      priority: B(["low", "medium", "high", "immediate"]),
      color: o().optional(),
      timeout_ms: v().int().optional(),
      uuid: m(),
      session_id: o()
    }).describe(
      "Loop-side text notification. Mirrors the interactive REPL notification queue (key/priority/timeout). JSX notifications are not emitted on this channel."
    )
  ),
  zW = p(() =>
    u({
      type: A("system"),
      subtype: A("task_progress"),
      task_id: o(),
      run_id: o().optional().describe(Yt),
      tool_use_id: o().optional(),
      description: o(),
      subagent_type: o().optional().describe("Subagent type for Task tool subagents."),
      usage: u({ total_tokens: v().int(), tool_uses: v().int(), duration_ms: v().int() }),
      last_tool_name: o().optional(),
      summary: o()
        .optional()
        .describe(
          "A one-line status for the task's row. For a local_agent task it is the model-generated progress summary (only when the agentProgressSummaries option is on); for a backgrounded mcp_task it is the MCP server's own bounded status message, emitted once per change without any option. Render it when present regardless of task type."
        ),
      uuid: m(),
      session_id: o()
    })
  ),
  CW = p(() =>
    u({
      type: A("system"),
      subtype: A("thinking_tokens"),
      estimated_tokens: v().int(),
      estimated_tokens_delta: v().int(),
      user_message_uuid: o()
        .optional()
        .describe(
          "Client uuid of the user message that triggered this turn (submitMessage options.uuid), stamped on every thinking_tokens frame of a headless (stream-json / Agent SDK) turn so a consumer can attribute thinking progress to the send it answers before any reply frame arrives. On a synthetic/scheduled (meta) turn it names the last user message folded into the turn so far once one has been, else the turn's own uuid when the host vouches it is the client event's own (delivered content such as a Slack owner ping). Absent on turns that neither had a client uuid nor folded a user message in, on Remote Control (interactive terminal) sessions, and from older producers."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "Live thinking-token estimate, digested from thinking_delta.estimated_tokens during the redacted-thinking phase (where the API otherwise streams only pings). estimated_tokens is the running total for the current thinking block; estimated_tokens_delta is the increment carried by this frame. Approximate progress for spinners/pills, not the authoritative billed output_tokens."
    )
  ),
  OW = p(() =>
    u({
      type: A("tool_use_summary"),
      summary: o(),
      preceding_tool_use_ids: T(o()),
      uuid: m(),
      session_id: o(),
      timestamp: o()
        .optional()
        .describe(
          "@internal ISO timestamp when the summary was created on the originating process. From internal ToolUseSummaryMessage.timestamp."
        )
    })
  ),
  NW = p(() =>
    u({
      type: A("system"),
      subtype: A("memory_recall"),
      mode: B(["select", "synthesize"]).describe(
        "How memories were surfaced: 'select' returns full file bodies chosen by the parallel selector; 'synthesize' returns a Sonnet-authored paragraph distilled from many tiny memories."
      ),
      memories: T(
        u({
          path: o().describe(
            "Absolute path to the memory file, a synthesis sentinel of the form `<synthesis:DIR>` when mode is 'synthesize', or an https URL when scope is 'organization'."
          ),
          scope: B(["personal", "team", "organization"]),
          content: o()
            .optional()
            .describe(
              "The surfaced memory body. Always present for 'synthesize' mode and 'organization' scope (neither has an on-disk path to lazy-load from); absent for file-backed 'select' entries (renderers lazy-load from path)."
            )
        })
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      'Emitted when the memory recall supervisor surfaces relevant memories into the turn. Mirrors the CLI relevant_memories attachment so SDK renderers can show "Recalled from memory" inline.'
    )
  ),
  IW = p(() =>
    u({
      type: A("system"),
      subtype: A("elicitation_complete"),
      mcp_server_name: o(),
      elicitation_id: o(),
      uuid: m(),
      session_id: o()
    }).describe("Emitted when an MCP server confirms that a URL-mode elicitation is complete.")
  ),
  PW = p(() =>
    u({
      type: A("system"),
      subtype: A("permission_denied"),
      tool_name: o(),
      tool_use_id: o(),
      agent_id: o()
        .optional()
        .describe(
          "Subagent ID when the denied tool call originated inside a subagent. Mirrors can_use_tool for host-side routing."
        ),
      decision_reason_type: o()
        .optional()
        .describe(
          "Discriminator from PermissionDecisionReason (e.g. 'classifier', 'asyncAgent', 'mode', 'rule')."
        ),
      decision_reason_code: B(Zir)
        .optional()
        .describe(
          "@internal A closed-set code for a reason a host can act on, beside decision_reason_type (whose values are unchanged): 'outside_reads_blocked' (permissions.blockReadsOutsideWorkingDirectories refused the path), 'memory_paused' (memory is paused for the session), 'classifier_transcript_too_long' (the auto-mode classifier's transcript exceeded its context window). Absent for every other reason; new values are additive."
        ),
      decision_reason: o()
        .optional()
        .describe("Human-readable reason from the deciding component, when available."),
      message: o().describe("The rejection message returned to the model in the tool_result."),
      uuid: m(),
      session_id: o()
    }).describe(
      "Emitted when a tool call is auto-denied without an interactive permission prompt (e.g. auto-mode classifier, dontAsk mode, headless-agent auto-deny, or a deny rule). With a permission prompt surface (stdio/SDK canUseTool), the 'ask' path surfaces via a can_use_tool control_request and this event covers the 'deny' short-circuit. Without one (bare -p / SDK query() with no canUseTool), 'ask' decisions are terminal, so this event also covers those implicit denials. Best-effort advisory: in rare races a denial can book without a frame or a frame can lack a booking twin \u2014 result.permission_denials is the authoritative record. Denials that resolve before canUseTool runs \u2014 PreToolUse hook denies, deny-rule overrides of hook allow/ask decisions, and file-tool calls (Read, Edit, Write) refused by a path-scoped deny rule \u2014 are not covered here, and neither is the MCP --permission-prompt-tool surface (the prompt tool is the host there)."
    )
  ),
  MW = p(() =>
    u({
      type: A("system"),
      subtype: A("permission_check_status"),
      tool_use_id: o(),
      agent_id: o()
        .optional()
        .describe(
          "Subagent ID when the tool call originated inside a subagent, as on permission_denied."
        ),
      status: B(["checking", "done"]).describe(
        "'checking': the call has waited about four seconds on its check and is still waiting. 'done': that wait is over."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal A tool call has been waiting on its automatic permission check (the auto-mode classifier) for longer than usual. It lets a host say that the step is being checked, where it would otherwise show a silent pause that looks like a running tool. Most checks answer within about four seconds and send nothing. The wait can include the rest of the model's streaming reply, or a dialog the host is showing about the check: prefer those indicators. Every 'checking' is followed by a 'done' for the same tool_use_id. 'done' does not say whether the call was allowed: the tool's result, permission_denied or a can_use_tool request does. One call can send more than one pair. Display-only and best-effort: a frame can be lost, so also stop showing it at any other frame for this tool_use_id or at the end of the turn. Emitted on the output stream of -p/SDK sessions."
    )
  ),
  xW = p(() =>
    u({ type: A("prompt_suggestion"), suggestion: o(), uuid: m(), session_id: o() }).describe(
      "Predicted next user prompt, emitted after each turn when promptSuggestions is enabled."
    )
  ),
  q8 = p(() =>
    u({
      type: A("attachment"),
      attachment: oe().describe(
        "Internal Attachment discriminated union (at-mentioned files, IDE selections, pasted images, structured output, deferred tool-use). Wire shape pending a dedicated SDKAttachment schema."
      ),
      timestamp: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when the engine yields an AttachmentMessage into the turn stream. Carries user-attached content (at-mentioned files, IDE selections, pasted media) and loop-attached data (structured output, deferred tool-use payloads). SDKResultMessage.structured_output and .deferred_tool_use are derived from these frames. From internal QueryEvent 'attachment'."
    )
  ),
  G8 = p(() =>
    u({
      type: A("tombstone"),
      message: oe().describe(
        "The internal Message being tombstoned. Wire shape pending a dedicated schema."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when a previously-yielded message is superseded or removed from the transcript (e.g., streaming\u2192non-streaming fallback removes a partial orphan). Consumers that render or persist the stream should remove the referenced message. From internal QueryEvent 'tombstone'."
    )
  ),
  DW = p(() =>
    u({
      type: A("conversation_reset"),
      new_conversation_id: m(),
      uuid: m(),
      session_id: o(),
      trigger: B(["clear", "plan_mode_exit", "fresh_session", "onboarding"])
        .optional()
        .describe(
          "What discarded the conversation: 'clear' is the /clear command (or its /reset and /new aliases), 'plan_mode_exit' is leaving plan mode with the clear-context option, 'fresh_session' is a flow that starts a fresh session to implement an approved plan, 'onboarding' is an onboarding flow re-run inside an existing session. Informational: a consumer should reset on every conversation_reset frame whatever this says, and treat an absent (older emitter) or unrecognized value as an unspecified reset."
        ),
      user_message_uuid: o()
        .optional()
        .describe(
          "Only with trigger 'clear': the uuid of the user message whose /clear was executed (the client's own uuid for that message when it came from a Remote Control or stream-json client, otherwise the uuid the CLI assigned to the typed command). Lets a consumer match this frame to a /clear message it has already seen, wiping once whichever arrives first, instead of relying on arrival order. Absent for the other triggers, when that uuid is not a canonical UUID, and from older emitters."
        ),
      timestamp: o()
        .optional()
        .describe(
          'When the reset happened, as an ISO 8601 string in UTC read from the clock of the process that performed it. Meant for display, such as the time on a "conversation cleared" row, not for ordering frames. Absent from older emitters; a consumer can fall back to the time it received the frame.'
        )
    }).describe(
      "Emitted by /clear, plan-mode exit, fresh-session, and onboarding flows. The surface should mount a fresh transcript under new_conversation_id and reset any cached session title. From internal QueryEvent 'conversation_reset'."
    )
  ),
  B8 = p(() =>
    u({
      type: A("api_metrics"),
      event: Gr("type", [
        u({ type: A("start"), ttft_ms: v().int(), id: o().optional(), message_id: o().optional() }),
        u({ type: A("end"), output_tokens: v().int(), id: o().optional() }),
        u({ type: A("content_block_start"), id: o().optional() }),
        u({ type: A("thinking_progress"), estimated_tokens_delta: v().int(), id: o().optional() }),
        u({ type: A("thinking_signature"), chars: v().int(), id: o().optional() })
      ]).describe(
        "Per-API-call OTPS/TTFT lifecycle event. Optional id correlates parallel subagent start/end; serial callers omit it."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when a subagent's API call reports TTFT or output_tokens for OTPS (output-tokens-per-second) metering. From internal QueryEvent 'api_metrics' (ApiMetricsLifecycleEvent)."
    )
  ),
  K8 = p(() =>
    u({
      type: A("os_notification"),
      message: o(),
      notification_type: o(),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when a tool (PushNotificationTool, the Computer Use wrapper) or turn-end cleanup requests a native OS notification. The surface dispatches to its platform notification channel (iTerm2/Kitty/Ghostty/bell in the terminal; native IPC for desktop/IDE). From internal QueryEvent 'os_notification'."
    )
  ),
  H8 = p(() =>
    u({
      type: A("apply_flag_settings"),
      settings: me(o(), oe()).describe(
        "Shallow-merge flag-settings patch \u2014 same shape as SDKControlApplyFlagSettingsRequest.settings."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Output-direction counterpart to SDKControlApplyFlagSettingsRequest. Emitted when slash commands that toggle flag settings request a batched write that the surface applies to its AppState. From internal QueryEvent 'apply_flag_settings'."
    )
  ),
  LW = p(() =>
    u({
      type: A("command_lifecycle"),
      command_uuid: o().describe(
        "The queued command's uuid \u2014 the client-supplied uuid on the inbound message. Commands enqueued without a uuid (e.g. the one-shot `-p \"prompt\"` string path) emit no lifecycle events. Renamed from Engine 'uuid' to avoid collision with the universal message uuid field."
      ),
      state: B(["queued", "started", "completed", "cancelled", "discarded", "refused"]),
      wakeup_source: B(["loop_wakeup", "schedule_wakeup"])
        .optional()
        .describe(
          "Only on 'started', and only when the command being started is a scheduler fire. `loop_wakeup`: a ScheduleWakeup (dynamic /loop) wakeup has fired; `scheduled_for` gives the time it was set for. `schedule_wakeup`: any other scheduled-task fire, such as a CronCreate job or the notice for scheduled tasks that were missed. The values match the UserPromptSubmit hook's `source`. A fire removed from the queue without being started (for example by an interrupt with cancel_queued, or by end_session) gets only its terminal state, without this key. Advertised by the `lifecycle_wakeup_source_v1` capability on system/init."
        ),
      scheduled_for: v()
        .optional()
        .describe(
          "Only beside `loop_wakeup`: the time, in epoch milliseconds, that the fired wakeup was set for; when a ScheduleWakeup call armed it, this equals the `scheduledFor` in that call's result. The fire itself can come earlier or later than that time. A host that keeps an idle session alive for a wakeup should stop waiting only when this equals the time it is waiting for: while this fire sat in the queue, a turn may have armed a newer wakeup, which is still pending. A fire that never starts (its prompt could not be prepared, the input had closed, or it was removed from the queue) sends no such frame, so the host also needs a time limit of its own past this time."
        ),
      ran_ahead: A(!0)
        .optional()
        .describe(
          "@internal Only on a repeated 'queued' frame, written only to the VS Code panel: the plugin hooks of this `immediate` command, typed during a turn, have run and answered ahead of its turn. The command is still queued, and its own turn prints the answer."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Fate of a queued command (slash command or queued user prompt). 'queued' when the inbound message enters the command queue; 'started' when it drains into a turn; then exactly one terminal state: 'completed' \u2014 the turn that consumed it ended cleanly; 'cancelled' \u2014 removed by cancel_async_message (the host's own, or \u2014 with Remote Control enabled (remote_control) \u2014 a remote client withdrawing a prompt that a remote client queued: such a uuid was never sent by the host, so there is nothing to resend and the frame is informational), swept by an interrupt with cancel_queued:true, caught by a pending cancel just before dispatch, or consumed into a turn that was aborted (interrupt) or died on a hard failure (model_error, prompt_too_long, ...) \u2014 cancelled-over-completed is deliberate dup-over-loss for exactly-once resenders, so a fold answered earlier in a failed turn may be re-sent (a per-fold ledger refinement is tracked separately) \u2014 but resenders must not blindly resend on 'cancelled': user-requested removals arrive as the same state, so correlate against your own cancel_async_message responses AND against any interrupt receipt's `cancelled` list (interrupt_cancel_queued_v1) and resend only cancels neither source accounts for; 'discarded' \u2014 the session ended (end_session) with the command still queued, or with a peer message still held by the receive-side policy (not preceded by 'queued' then); 'refused' \u2014 declined by the session's receive-side policy before entering the queue (outright, or after being held): not preceded by 'queued', and it will not run in this session. Known gap: folds consumed by turns ending via max_turns / hook_stopped / tool_deferred / background_requested report 'completed' even though their content may only be answered on continuation/resume. A prompt sent with requeue_if_interrupted_within_ms that an interrupt puts back reports 'queued' again (after its 'started', if that was reported), then goes on as any queued prompt does. 'completed' means the consuming turn ended, not that the result frame was delivered. Ordering relative to the result frame is per-path: a command that starts a fresh turn emits 'completed' AFTER that turn's result frame (later still when the result is held back for background tasks); a command folded into an already-in-flight turn emits 'completed' BEFORE that turn's result frame. Not a strict pairing: a terminal state may arrive for a command_uuid that never emitted 'started' (control-request ACKs, duplicate deliveries); internally-enqueued commands (cron triggers, teammate shutdown prompts, deferred-turn resume) mint a fresh uuid at enqueue and emit started/terminal without 'queued'; a turn that fails by throwing can leave 'started' without a terminal state; and a peer message the queue's own admission guard drops after acceptance (rate limit, duplicate collapse, loop guard, queued-peer cap) currently leaves 'queued' without a terminal state \u2014 on process exit a wrapper should synthesize 'discarded' for uuids it has not seen reach a terminal state. The exactly-one-terminal guarantee is per worker process, not per uuid lifetime: after CCR redelivery a 'discarded' uuid legitimately re-emits queued\u2192\u2026\u2192terminal on the next worker. Emitted on the stdout stream in -p/SDK sessions; remote transports (mobile/desktop bridge) receive the equivalent signal via delivery ACKs instead. A host driving a cloud-hosted session through the headless `--cloud` client also receives 'cancelled' (and only that state) after its interrupt with cancel_queued:true, synthesized from the session's receipt: for a uuid the host sent and did not cancel itself it means the cloud session dropped that command \u2014 it will not run; do not resend it; the frames follow the interrupt's success response, are not ordered against the interrupted turn's result, and unknown uuids (another client's prompt) may appear. From internal QueryEvent 'command_lifecycle'."
    )
  ),
  Z5o = p(() =>
    u({
      type: A("system"),
      subtype: A("code_change_published"),
      provider: o().describe(
        "Forge classification derived from the URL's shape: 'github', 'github-enterprise', 'gitlab', or 'bitbucket' for pull/merge requests, 'gerrit' for a change on a googlesource.com Gerrit host, and other values for other review systems in internal builds. A naming hint, not host trust \u2014 an unrecognized host with a PR-shaped path classifies as 'github-enterprise'. Open set; treat an unknown value as a valid provider you don't recognize, never as an error."
      ),
      url: o().describe(
        "Web URL of the published change, as printed in the command output. Unverified \u2014 do not route authenticated requests to this host without your own validation."
      ),
      repo: o().describe(
        "Repository path from the URL (owner/name on GitHub; may carry more segments on GitLab). Shape-validated (forge path segments only; exactly owner/name except on GitLab) but not verified against any forge \u2014 on GitLab a leading segment can be a nested group, so never interpret it as a host."
      ),
      identifier: o().describe(
        "Provider-native change identifier \u2014 the PR/MR (or other change) number as a string."
      ),
      action: B([
        "created",
        "edited",
        "merged",
        "commented",
        "closed",
        "reopened",
        "ready",
        "draft",
        "auto-merge-enabled",
        "auto-merge-disabled",
        "pushed",
        "checked-out",
        "started"
      ])
        .optional()
        .describe(
          "What the session did that produced this announcement: the flag-aware gh pr verb it ran ('created', 'closed', 'auto-merge-enabled', \u2026), 'pushed' for a push to a branch that has a PR (or a push that opened or updated a Gerrit change), 'checked-out' for gh pr checkout, or 'started' for the open change on the branch the session's working directory was on when a Claude Desktop session started or resumed (sent once, at the first initialize) \u2014 always sent by current producers, absent only from older ones."
        ),
      branch: o()
        .optional()
        .describe(
          "The session's working branch when it produced the change. Sent for providers whose changes have no head branch of their own ('gerrit'), so a host can place the change on that checkout, and with 'created' on any provider: the branch the create was opened from (its --head / --source-branch flag, else the working branch), so a host can show the new change before its own forge lookup answers. Absent otherwise."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal A code change from this session went out for review (a pull/merge request, or another provider's change in internal builds). Fires when the harness sees the change published or links the session to a PR \u2014 on creation, and also when the session contributes to an existing one (gh pr edit/close/ready, gh pr checkout, a push to a branch that has an open PR) \u2014 so bind on every event, not just the first; re-emission for the same URL is possible and idempotent. Provenance: values are scraped from the command's captured output (the last PR-shaped URL printed) or a gh pr view lookup. Captured output is not only the forge CLI's own text \u2014 hook output or files printed by the same command can contribute \u2014 so treat the fields as a binding hint: display them, but verify against the forge with your own credential-scoped lookup before routing authenticated requests or trusting the host. Best-effort, not exhaustive: a crash before the link, gh printing no URL to a piped capture (gh pr merge), or an unrecognized forge means no event \u2014 keep your provider-API lookup as the source of truth and treat this as the trigger."
    )
  ),
  e6o = p(() =>
    u({
      type: A("system"),
      subtype: A("vcs_state_changed"),
      kind: B(["commit", "push", "merge", "rebase"]).describe(
        "What class of mutation was observed. New kinds may be added \u2014 treat an unrecognized kind exactly like a recognized one (something changed, go look)."
      ),
      cwd: o().describe(
        "The directory the shell was in when the command finished (so an inner cd is reflected; a git -C target is not) \u2014 a hint about where to look, never proof of what moved: confirm against the repository itself."
      ),
      branch: o()
        .optional()
        .describe(
          "The branch a commit landed on (from the commit summary line git prints per commit) or a push updated (from the ref-update line git prints per pushed ref, e.g. `HEAD -> other`). Commit and push events carry it; a command that pushed several branches emits one push event per branch. A best-effort hint: absent whenever attribution is uncertain (a push whose output was redirected still emits, with no branch; a push that also updated a ref whose name could not be carried emits a nameless event beside the named ones), and never a required key."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal A harness-observed shell command mutated repository state (git commit/cherry-pick, push, merge, rebase \u2014 dry runs excluded). A cache-invalidation signal with a deliberately minimal payload: beyond classification it carries the branch acted on and the directory the shell finished in, both hints about where to look, so consumers still re-read state (head, PR status) from the repository instead of decoding the event. Derived from the same detection as the tool result's structured gitOperation data, so the two agree on what happened; only a push's `branch` is attributed more strictly here (from the push's own output section) than in that data. A compound command can emit more than one kind (a merge and a rebase in one command collapse to the latter), and a push of several branches emits one push event per branch; coalesce freely. Best-effort, not exhaustive: only foreground mutations run through the Bash/PowerShell tools are observed \u2014 a backgrounded command whose confirming output had not printed at capture time emits nothing. A foreground push whose ref lines were redirected or silenced still emits, on the invoking command's zero exit code alone (so a compound that swallows a failed push's code also emits; the event is a prompt to look, never a claim)."
    )
  ),
  UW = p(() =>
    u({
      type: A("system"),
      subtype: A("dev_intent"),
      kind: B(dYr).describe(
        "What kind of development the evidence shows. 'ios_app' from the conversation (in the main thread or a subagent): Claude ran one of Apple's tools for an iOS SDK, an iOS destination or the Simulator (xcodebuild, xcrun or swift for an iOS SDK, destination or target, simctl, devicectl), wrote iOS source into a Swift or Objective-C file (import UIKit, an import of a UIKit header, or an .iOS platform in a package manifest), or wrote or read build settings that name an iOS SDK or target iPhone or iPad; no Swift edit is needed for these. A command counts only where the shell would run it, so one that is quoted, in a here-document or in a comment does not. Weaker evidence (an iOS deployment target, any other TARGETED_DEVICE_FAMILY setting, iOS source written into another kind of file, an iOS tool named inside a quoted script) counts only beside a .swift file that Claude wrote or edited. A macOS-only app or server-side Swift package never qualifies. 'ios_app' from the project scan: the session's git repository has an Xcode project, at its root or in its ios/, iosApp/, macos/ or apple/ folder, whose build settings name an iOS SDK or target iPhone or iPad. 'android_app' from the conversation: Claude wrote or edited a .kt, .kts or .java file and something it wrote, read, or ran is Android-specific (a manifest, the Android Gradle plugin, an android.* import, adb, a Gradle variant task such as assembleDebug, the emulator), so a Kotlin server or a multiplatform module with no Android target never qualifies. 'android_app' from the project scan: the session's git repository has an AndroidManifest.xml, or the Android Gradle plugin in a build script or version catalog, at its root or in its android/ folder. More kinds will be added; ignore a kind you do not recognize."
      ),
      trigger: B(sA)
        .optional()
        .describe(
          "The evidence the detection fired on, for a host's own analytics. From the conversation, it is the first platform-specific evidence seen, whichever order it and a file edit the rule required arrived in; an 'ios_app' detection with no Swift edit names the first evidence that is enough alone. 'ios_app': 'uikit_import' (import UIKit or .iOS( in text Claude wrote), 'xcode_project' (iOS build settings written, or seen in a tool result such as a pbxproj or xcconfig read), 'ios_command' (an iOS SDK, an iOS destination or target, or the Simulator's tools, in a command Claude ran). 'android_app': 'android_import' (import android. in text Claude wrote), 'android_manifest' (a manifest path or body written, or seen in a tool result), 'gradle_plugin' (the Android Gradle plugin written, or seen in a tool result), 'android_command' (adb, the emulator, sdkmanager, avdmanager, react-native run-android or a Gradle variant task). The edit values 'swift_edit', 'kotlin_edit' and 'java_edit' are reserved for rules that need no other evidence; no rule sends them yet. 'project_scan', for any kind: a scan of the session's git repository. The CLI scans when the process starts and sends the result. After each conversation_reset, it sends the latest scan's result again. A conversation whose scan did not find every kind scans again, uncached, when its first message arrives, so a kind that scan missed can come after that message. A client that needs to tell project evidence from conversation evidence checks for 'project_scan'. More values will be added; ignore one you do not recognize. Absent from CLI versions that predate the field, which send only conversation evidence."
        ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal The conversation, or the git repository it runs in, shows a known kind of development work, for hosts that key tooling on it (Claude Code Desktop opens its iOS Simulator entry point on ios_app). Sent with trigger as its only other payload. Per conversation per process, each kind is sent at most once from conversation evidence and at most once from the project scan. Conversation evidence is sent when it first completes, or at startup when a resumed conversation already has it. Project evidence comes from a CLI process in print mode (-p), which is how the Agent SDK and Claude Code Desktop start it. It is sent at startup, after each conversation_reset, and at the first message of a conversation whose earlier scan did not find every kind. Either can arrive before system/init. A rewind or compaction never retracts it and only a conversation_reset starts over. Treat each kind as a sticky fact about the conversation: a client that needs only the kind can ignore repeats, and one that needs to know what set it off reads trigger."
    )
  ),
  VW = p(() =>
    u({
      type: A("system"),
      subtype: A("turn_preempted"),
      reason: o().describe(
        "Why the turn was stopped. 'rapid_followup': the user's next message arrived before the running turn showed any output. More reasons may be added; treat an unknown one the same way."
      ),
      preempted_by_uuid: o().describe(
        "The client-supplied uuid of the queued user message the turn was stopped for. It runs next, together with any messages queued behind it."
      ),
      preempted_message_uuids: T(o()).describe(
        "The client-supplied uuids of the user messages the stopped turn was running (uuid-less members omitted; may be empty)."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal The CLI itself stopped the running turn so a user's rapid follow-up message is answered at once, exactly as a priority 'now' message would have (running shell commands are backgrounded, not killed). Sent at the moment of the stop, so it precedes the stopped turn's result frame (terminal_reason aborted_streaming or aborted_tools) and its members' 'cancelled' command_lifecycle frames (it can also precede the follow-up's own 'queued' command_lifecycle frame): a host renders that turn as superseded by the follow-up rather than as interrupted, does not resend its messages, and treats only preempted_by_uuid as picked up. At most one per burst: the turn the follow-up starts is never preempted this way. Emitted on the stdout stream in -p/SDK sessions only, and only to a consumer that declared rapidFollowupPreempt on its initialize request, while the feature's rollout flag is on: without both, the turn is not stopped at all. Explicit 'now' and 'later' priorities never produce it."
    )
  ),
  jW = p(() =>
    u({
      type: A("system"),
      subtype: A("per_turn_effort_changed"),
      per_turn_effort_active: M().describe(
        "Always false: a change to true is reported only by system/init."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      `@internal The conversation stopped sending effort per turn, because the server refused its per-turn effort message or a role:"system" message. From the retried request on, an effort change rewrites the cached prefix, for every model, until a later system/init says otherwise. Sent once, when the conversation first turns per-turn effort off, before the retried request's output, on the output stream of -p/SDK sessions; sent again only if the server refuses again after the conversation's refusals are cleared (for example by /clear or a compaction). It can repeat a false the host already holds. Pairs with system/init's per_turn_effort_active.`
    )
  ),
  qW = p(() =>
    u({
      type: A("system"),
      subtype: A("file_attachments_missing"),
      message_uuid: o().describe(
        "The uuid of the inbound user message whose file_attachments named the files."
      ),
      sent_count: v()
        .int()
        .describe("How many well-formed file_attachments entries that message had."),
      missing: T(
        u({
          file_uuid: o().describe("The file_uuid of the message's file_attachments entry."),
          reason: o().describe(
            "Why, as a short code. 'download': it could not be downloaded. 'too_large': the file is over the size a session accepts, so sending it again cannot help. 'not_found': the files route answered 404 or 410: the file is most likely deleted, or is not this session's to read, so sending it again rarely helps. 'write': it was downloaded and could not be saved. 'no_token': the session had no credential to download with. 'not_finished': the step that fetches a message's files was cut short or threw, so all its files are listed, though some may have been saved. 'count_cap': the message named more files than a session fetches, and this one was over the limit. More codes may be added; read an unknown one as 'did not arrive'."
          )
        })
      ).describe("The files Claude was told did not arrive, each once. Never empty."),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Some files a user message sent by reference (file_attachments) did not arrive where Claude can read them, and Claude was told so in that message's text or in a later note; the turn runs on without them. A host can use it to tell the person who sent them; a session with Remote Control on also sends it to its Remote Control clients itself. Sent once the message is queued, or later when a download or a save that runs beside its turn fails, or both; only for a message that reached the session through Claude Code Remote or over Remote Control, never for input a local host writes; whenever Claude is told, and for the same files. Queued counts as told: a message that a Stop then clears from the queue, or that a UserPromptSubmit hook then blocks, still sends it, though Claude never reads that message. Nothing is sent when every file arrives, when the message is refused or has no uuid (over Remote Control, one not in UUID form counts as none), for another session's message that was first held for approval, when the only files lost are those over the count limit, or for a picture that reached Claude inside the message and whose saved copy alone was lost; on claude-code-server the same holds for a text file whose copy was to be written late, at a use of the tool container. A file whose entry carries a sha256 (another session's transfer) is reported to Claude by name instead, and is listed here only under 'not_finished'. Each event states the whole list for its message: a save lost after the message was queued, or a delivery to a new worker, states it again, so keep the last one per message_uuid. If its files all arrive that time nothing is sent, and the earlier event stands. One exception: a worker that takes over a turn already begun, or is sent again a message that its transcript already holds, may fetch and save the message's files again, except pictures and files with a sha256. Its event lists only those it could not fetch or save, so it can leave out a picture an earlier event listed, and can list a file the earlier worker did save."
    )
  ),
  GW = p(() =>
    u({
      type: A("system"),
      subtype: A("cloud_session_delta"),
      seq: v()
        .int()
        .positive()
        .describe(
          "Rises by one with each of these frames this client writes (1 for the first); never reset by an init. A reader keeps the highest it has applied and drops a lower one."
        ),
      changed: T(o()).describe(
        'The top-level keys of `cloud_session` whose value differs from the last block this client wrote (on an init or one of these frames), e.g. ["serving"] or ["calls", "connection"]; never empty. A hint for what to redraw: the block below is complete either way.'
      ),
      cloud_session: qA().describe(
        "The whole block exactly as the next init would carry it (see SDKSystemMessage.cloud_session): replace the held copy, do not merge."
      ),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Written by the headless stream-json client of a cloud-hosted session (the same client that puts `cloud_session` on its init frames), and by nothing else: the session's status changed between two inits \u2014 for instance this machine's serving word or its reason, its stream to the session (`connection`), a call it serves starting, waiting on the session's approval or ending (`calls`), a serving notice said (`notices`). Only after the first init \u2014 except from a serve-only helper (`--attach-serve`), whose stream to the session carries no init: it writes these from the start, its first (`seq` 1) listing every key of the block in `changed`, so a host that has read no init takes that frame's block as its first snapshot. At most a few per second (changes within a quarter second are written as one frame carrying the latest block); none when nothing differs. An init is always a complete snapshot, so a host that (re)attaches resynchronises from the first init it reads and applies these on top. Display-only; ignore it if you do not draw session status."
    )
  ),
  F8 = p(() =>
    u({
      type: A("set_expanded_view"),
      expanded_view: B(["none", "tasks", "teammates"]),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Hint to expand a side panel. Enum is a superset of AppState.expandedView for back-compat; do not narrow."
    )
  ),
  To = p(() =>
    u({
      type: A("active_goal"),
      value: u({
        condition: o(),
        iterations: v().int(),
        set_at: v().int(),
        tokens_at_start: v().int(),
        last_reason: o().optional()
      }).nullable(),
      uuid: m(),
      session_id: o()
    }).describe(
      "Emitted when the user's /goal Stop hook reports met (clears) or not-yet-met (bumps iterations + last_reason). Any surface with a goal indicator re-renders from this. value is null when the goal is cleared. From internal QueryEvent 'active_goal'."
    )
  ),
  wo = p(() =>
    u({
      type: A("autocompact_state"),
      value: u({
        enabled: M().describe(
          "Whether auto-compact is enabled on the worker (autoCompactEnabled setting + DISABLE_AUTO_COMPACT / DISABLE_COMPACT env; DISABLE_COMPACT also disables manual /compact)."
        ),
        effective_window: v()
          .int()
          .describe(
            "The worker's resolved auto-compact window in tokens \u2014 resolveAutoCompactWindow output clamped to the model window, honoring /autocompact, CLAUDE_CODE_AUTO_COMPACT_WINDOW, clientdata and experiment overrides."
          ),
        threshold: v()
          .int()
          .describe(
            "The token count where threshold-triggered compaction fires on the worker \u2014 effective_window minus the summary buffer, lowered further by CLAUDE_AUTOCOMPACT_PCT_OVERRIDE when set."
          ),
        enforced: M().describe(
          "Whether threshold-triggered compaction will actually fire at `threshold`. False when the worker defers to the API's prompt-too-long (reactive mode) or context collapse owns headroom \u2014 clients then show % of window used instead of a countdown to a compaction that won't happen."
        ),
        source: B([
          "env",
          "settings",
          "clientdata",
          "experiment",
          "model-default",
          "unknown-model",
          "auto"
        ]).describe("Which input decided the window (resolveAutoCompactWindow precedence order).")
      }),
      uuid: m(),
      session_id: o()
    }).describe(
      `@internal Worker-resolved auto-compact state, emitted by CCR workers at boot, whenever the resolved state changes (/autocompact, model switch, settings change), re-checked at each turn start, and re-emitted after a conversation reset. Thin clients adopt it so the "% until auto-compact" indicator counts down to the worker's real compaction trigger instead of re-resolving against client-local state. Turn-scoped divergence is accepted: a turn running under a skill/command frontmatter model override compacts against that model's window while the frame keeps the resting model's (the local indicator shares this limitation). From sessionState.onAutocompactInputsChanged.`
    )
  ),
  W8 = p(() =>
    u({
      type: A("set_in_progress_tool_use_ids"),
      op: u({ action: B(["add", "remove"]), ids: T(o()) }),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when tool execution adds/removes tool_use ids from the mid-execution set (after permission grant, before result). Surfaces use this to show which tools are running. From internal QueryEvent 'set_in_progress_tool_use_ids'."
    )
  ),
  Y8 = p(() =>
    u({
      type: A("hint_clears"),
      ids: T(o()),
      content_by_id: me(o(), o()),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when the server-side context-hint reject path reports cleared tool_use ids after a retry/fallback. The surface re-runs clearToolResultsById on its message list so subsequent turns match the API's view. From internal QueryEvent 'hint_clears'."
    )
  ),
  $8 = p(() =>
    u({ type: A("open_message_selector"), uuid: m(), session_id: o() }).describe(
      "@internal Emitted by /rewind to open the message-selector overlay. Fire-and-forget \u2014 the user's selection returns through a separate channel. From internal QueryEvent 'open_message_selector'."
    )
  ),
  X8 = p(() =>
    u({
      type: A("compact_progress"),
      event: Gr("type", [
        u({
          type: A("hooks_start"),
          hook_type: B(["pre_compact", "post_compact", "session_start"])
        }),
        u({ type: A("compact_start"), hint_text: o().nullable().optional() }),
        u({ type: A("compact_end") })
      ]).describe("In-progress compaction lifecycle event."),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted while compaction is running (hook phase, compact start, compact end). Distinct from system/compact_boundary, which reports the post-compaction transcript boundary after completion. From internal QueryEvent 'compact_progress' (CompactEvent Delta-track arm)."
    )
  ),
  Q8 = p(() =>
    u({
      type: A("stream_mode"),
      mode: B(["tool-input", "tool-use", "requesting", "responding", "thinking"]),
      uuid: m(),
      session_id: o()
    }).describe(
      "@internal Emitted when the engine's spinner phase changes during compaction. From internal QueryEvent 'stream_mode' (CompactEvent Delta-track arm)."
    )
  ),
  J8 = p(() =>
    Gr("op", [
      u({ type: A("response_length"), op: A("add"), delta: v().int(), uuid: m(), session_id: o() }),
      u({ type: A("response_length"), op: A("reset"), uuid: m(), session_id: o() })
    ]).describe(
      "@internal Emitted to drive the streaming-output character counter in the spinner ('add' accumulates, 'reset' zeroes on compaction-boundary swap). From internal QueryEvent 'response_length' (Delta-track)."
    )
  ),
  Z8 = p(() =>
    Gr("phase", [
      u({
        type: A("refusal_continuation"),
        phase: A("begin"),
        salvage_text: o(),
        uuid: m(),
        session_id: o()
      }),
      u({ type: A("refusal_continuation"), phase: A("end"), uuid: m(), session_id: o() })
    ]).describe(
      "@internal Emitted when a silent refusal-continuation retry begins ('begin' with salvage_text to keep visible in the streaming preview) or ends ('end'). From internal QueryEvent 'refusal_continuation'."
    )
  ),
  e4 = p(() =>
    u({
      sessionId: o().describe("Unique session identifier (UUID)."),
      summary: o().describe(
        "Display title for the session: custom title, auto-generated summary, or first prompt."
      ),
      lastModified: v().int().describe("Last modified time in integer milliseconds since epoch."),
      fileSize: v()
        .int()
        .optional()
        .describe("File size in bytes. Only populated for local JSONL storage."),
      customTitle: o().optional().describe("User-set session title via /rename."),
      firstPrompt: o().optional().describe("First meaningful user prompt in the session."),
      gitBranch: o().optional().describe("Git branch at the end of the session."),
      cwd: o().optional().describe("Working directory for the session."),
      tag: o().optional().describe("User-set session tag."),
      createdAt: v()
        .int()
        .optional()
        .describe(
          "Creation time in integer milliseconds since epoch, extracted from the first entry's timestamp."
        )
    }).describe("Session metadata returned by listSessions and getSessionInfo.")
  ),
  yo = p(() =>
    $e([
      pn(),
      un(),
      NF(),
      qF(),
      GF(),
      BF(),
      KF(),
      HF(),
      $F(),
      XF(),
      QF(),
      JF(),
      eW(),
      tW(),
      sW(),
      nW(),
      rW(),
      oW(),
      aW(),
      lW(),
      dW(),
      cW(),
      zW(),
      hW(),
      CW(),
      pW(),
      _W(),
      vW(),
      kW(),
      iW(),
      OW(),
      NW(),
      xF(),
      IW(),
      PW(),
      xW(),
      YF(),
      FF(),
      DW(),
      LW(),
      Z5o(),
      e6o(),
      uW(),
      fW(),
      bW(),
      EW(),
      SW(),
      GW(),
      UW(),
      mW(),
      gW(),
      VW(),
      ZF(),
      jW(),
      MW(),
      yW(),
      AW(),
      RW(),
      WF(),
      qW()
    ]).describe(
      "Every conversational and informational message the CLI emits on its output stream, discriminated by type (and subtype for system/result messages). Consumers should ignore types and subtypes they do not recognize: the set grows over time."
    )
  ),
  $t = p(() =>
    B(["off", "cooldown", "on"]).describe(
      "Fast mode state: off, in cooldown after rate limit, or actively enabled."
    )
  ),
  Xt = p(() =>
    B([
      "free",
      "preference",
      "extra_usage_disabled",
      "network_error",
      "unknown",
      "not_first_party",
      "disabled_by_env",
      "model_not_allowed",
      "sdk_opt_in_required",
      "pending"
    ]).describe(
      "Why fast mode can't serve right now. Absent when nothing blocks it (a request may still choose standard speed). A paused-after-rate-limit run is not here; it rides fast_mode_state as 'cooldown'."
    )
  ),
  Ao = p(() =>
    u({
      text: o().describe(
        "The label to show \u2014 already sanitized to a single line of plain text and capped at 6 columns, exactly as the terminal footer renders it after its \u25C6 glyph."
      )
    }).describe(
      '@internal The session indicator (the CLAUDE_CODE_FOOTER_INDICATOR environment variable, else the footer_indicator_<text> capability of the main model, else bootstrap client_data.footer_indicator) that the terminal renders as a "\u25C6 <text>" pill in the prompt footer \u2014 an opaque status note operators set per cohort (e.g. to prove a test config reached the session). Carried on `system/init` and the `initialize` response so a host UI (Claude Desktop, IDE webviews) can render the same pill. Absent when nothing is configured; hosts should then render nothing. The client_data source is read from the CLI\'s cached bootstrap data, so a label configured there after that cache was last written first appears on a later `system/init`.'
    )
  );
var ZA = p(() =>
    oe().describe(
      "A JSON-RPC 2.0 message as defined by the Model Context Protocol (request, notification, or response object)."
    )
  ),
  BW = p(() =>
    u({
      matcher: o().optional(),
      hookCallbackIds: T(o()).describe(
        "Opaque ids chosen by the client, one per hook function it registered for this matcher. When the hook fires the CLI sends a hook_callback control request carrying one of these ids as callback_id; the client maps it back to its function."
      ),
      timeout: v().optional()
    }).describe("Configuration for matching and routing hook callbacks.")
  ),
  Frr = p(() =>
    u({
      subtype: A("initialize"),
      hooks: me(EA(), T(BW())).optional(),
      sdkMcpServers: T(o()).optional(),
      sdkMcpServerConfigs: me(o(), io().omit({ type: !0, name: !0 }))
        .optional()
        .describe(
          "Settings for the SDK-hosted MCP servers named in sdkMcpServers, keyed by server name. Sent as a separate field so a CLI that predates it ignores it; entries whose name is not in sdkMcpServers, and values that do not match this shape, are ignored rather than rejected. timeout, disableAutoBackground and connectorId apply when the server is first registered; tools (the per-tool permission policy) adds its ask and deny rules on every initialize that names the server. An initialize never removes a rule; mcp_set_servers replaces them."
        ),
      sdkMcpServerManifests: me(
        o(),
        u({
          initializeResult: me(o(), oe()).describe(
            "The server's verbatim JSON-RPC `initialize` result object (protocolVersion, capabilities, serverInfo, instructions, ...), exactly as the in-process server produced it when the host initialized it with no client capabilities \u2014 not re-serialized or schema-parsed by the host."
          ),
          toolsListResult: me(o(), oe())
            .optional()
            .describe(
              "The server's verbatim JSON-RPC `tools/list` result object. Omit when the initialize result does not advertise the tools capability, when the listing is paginated (nextCursor present), or when it could not be captured \u2014 the CLI then lists over the control channel as before."
            )
        })
      )
        .optional()
        .describe(
          "Optional, keyed by sdk server name (each key should also appear in sdkMcpServers; other keys are ignored). Unlike sdkMcpServerConfigs \u2014 host-declared settings the CLI keeps for the server's lifetime, same shape inline on mcp_set_servers \u2014 this is a one-shot cache of the servers' own handshake output: sent on initialize only, consumed by the connect that follows it, never retained. MCP handshake results the host already obtained from its in-process servers by delivering initialize + notifications/initialized (+ tools/list) to them itself before writing this request. For each such server the CLI answers its own MCP client's initialize and first tools/list from these results and skips the notifications/initialized round trip, so registering N in-process servers costs no mcp_message control round trips before the first turn; tools/call and everything after the handshake still flow as mcp_message exactly as before. The host MUST keep answering mcp_message for every server as if this field were absent: a CLI that predates the field ignores it and performs the full per-server handshake over the control channel, and a newer CLI does the same for any server whose entry is missing or malformed, whose initializeResult.protocolVersion differs from the MCP protocol version the CLI's client requests, or that the CLI had already connected. Entries apply only to the connect that follows this initialize; they are never retained for later reconnects. Over a remote session transport the CLI uses the field only when sdkMcpServerManifestsOrigin is set (see that field); a host on the CLI's own stream-json stdio transport needs no marker. sdk_mcp_manifests_parked in the response reports what became of each entry. Absent (older hosts, the Python SDK, browser clients): unchanged behaviour."
        ),
      sdkMcpServerManifestsOrigin: B(["host_per_send"])
        .optional()
        .describe(
          "The host's statement that it composed this request's sdkMcpServerManifests for this very send, from its servers' current state. Needed only by a host that reaches the CLI over a remote session transport, where an unmarked sdkMcpServerManifests is not used (a recorded registration could be handed to a later worker). The CLI also refuses a marked manifest whose session-stream frame is more than five minutes old, so capture the manifests when writing the request, not earlier; and it may still decline them when remote manifests are switched off in that CLI, or on any session where the session service has not told the CLI in the last five minutes that only the account owning the session can send events to it. sdk_mcp_manifests_parked in the response says what became of each entry. A value this CLI does not know counts as no marker. A host on the CLI's own stream-json stdio transport may omit this field; a host writing to the stdin of a remote-session worker cannot use manifests at all."
        ),
      jsonSchema: me(o(), oe()).optional(),
      systemPrompt: T(o()).optional(),
      appendSystemPrompt: o().optional(),
      systemPromptSnapshot: M()
        .optional()
        .describe(
          "Record the conversation's system prompt once and reuse it verbatim on every later request and resume. Omitted or true (the default): the prompt is rendered on the first request, systemPrompt or appendSystemPrompt included, and the record is sent as-is afterwards \u2014 even when a later launch passes different text \u2014 until compaction. false: never record; the prompt is rendered fresh every request. No effect where system-prompt recording is not yet enabled."
        ),
      planModeInstructions: o()
        .optional()
        .describe(
          "Custom workflow body for the plan-mode system reminder. Replaces the default code-implementation phases; the CLI still wraps it with the read-only enforcement preamble and the ExitPlanMode protocol footer."
        ),
      appendSubagentSystemPrompt: o()
        .optional()
        .describe(
          "@internal Additional system prompt appended to every Task-tool subagent (and propagated to nested subagents). Gated by CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT."
        ),
      toolAliases: me(o(), o())
        .optional()
        .describe(
          "Map of tool-name aliases applied before name resolution. When the model emits a tool_use whose name is a key in this map, the tool execution path resolves the mapped name instead. Single-hop (no chains). See Options.toolAliases."
        ),
      codeRunningMcpTools: me(o(), T(o()))
        .optional()
        .describe(
          "@internal MCP tools that run code the model writes, keyed by server name as registered, each with its tool names. In auto mode no allow rule, skill, hook or plugin approves a call to one on its own: the classifier judges it, unless set_mcp_permission_mode_override pins its server to default. Declaring any also stops every PermissionRequest hook allow from changing the permission mode (its setMode update is dropped). Give names without the mcp__ prefix: a server or tool name that starts with mcp__ is skipped as malformed. Read from the first initialize only; its response lists what was declared in code_running_mcp_tools_applied. See Options.codeRunningMcpTools."
        ),
      excludeDynamicSections: M()
        .optional()
        .describe(
          "When true, omit per-user dynamic sections (working directory, auto-memory path) from the cached system prompt and re-inject them as the first user message. Lets cross-user prompt caching hit on a static system prompt prefix. Tradeoff: the model sees this context slightly later in the prompt, so steering on the working directory and memory location is marginally less authoritative. Has no effect when a custom (non-preset) system prompt is in use."
        ),
      agents: me(o(), RA()).optional(),
      title: o()
        .optional()
        .describe(
          "Custom session title. When provided, the session uses this title and skips automatic title generation. Has no effect on the persisted title when resuming an existing session."
        ),
      skills: T(o())
        .optional()
        .describe(
          'When provided, only skills whose names match an entry are loaded into the main session system prompt, matching the exact canonical name (e.g. "my-plugin:my-skill") or a ":name" suffix of it. Display names and aliases do not match. Omit to load every discovered skill. Applies to the main session only; subagents use AgentDefinition.skills, which additionally resolves display names and aliases.'
        ),
      webSearchIsolationExemptMcpServers: T(o())
        .optional()
        .describe(
          "@internal Additional MCP server names exempt from the web search / connector isolation latch. Unioned with the built-in infra-server list."
        ),
      promptSuggestions: M().optional(),
      agentProgressSummaries: M().optional(),
      forwardSubagentText: M().optional(),
      supportedDialogKinds: T(o())
        .optional()
        .describe(
          "Dialog kinds (request_user_dialog `dialog_kind` values) this consumer's onUserDialog can actually render. The CLI treats ABSENCE as 'cannot display' and fails closed: without the kind declared here, a dialog-gated flow degrades to its no-dialog behavior (for 'refusal_fallback_prompt', the classic refusal error) instead of parking a dialog the consumer may mishandle. First-attached-client-wins on multi-client sessions; later initializes do not change it."
        ),
      rendersChromeSetupOffer: M()
        .optional()
        .describe(
          "@internal A client capability: this consumer renders the OfferChromeSetup tool's permission request as a Claude in Chrome setup card and answers it with updatedInput.outcome 'connected' or 'not_now'. It lets that tool join the tool list once a Claude in Chrome tool call has reported the browser extension is not connected and the session's experiment flag is on. On, never off: a later initialize may be another client's; absence leaves it as it was. Kept across worker restarts."
        ),
      perTaskStopAffordance: M()
        .optional()
        .describe(
          "Declares that this consumer renders a per-task stop control wired to the `stop_task` control request, so the user can stop an individual background task. When declared, an interrupt on an open-input (interactive stream-json) session spares running background agents/workflows (Stop only aborts the turn). Closed-input exception: a one-shot run (string prompt / -p closes stdin) still kills hold-back tasks at the held-result release regardless of the declaration \u2014 with stdin closed, a stop_task control could never be delivered, so the fail-closed kill stands. ABSENCE also fails closed: the interrupt kills background tasks, since the user would otherwise have no way to stop a runaway one. First-attached-client-wins on multi-client sessions; later initializes do not change it."
        ),
      forwardNestedSubagentToolCalls: M()
        .optional()
        .describe(
          "@internal Asks Claude Code to also send the tool_use and tool_result messages of sub-agents that other sub-agents start, and of skills a sub-agent forks, each with `parent_tool_use_id` set to the call that started it. That call is itself a tool_use in the messages of the parent sub-agent, so a consumer can place every sub-agent under the one that started it and list its tool calls. Their text and thinking stay unsent unless `forwardSubagentText` is set, which already sends all of it. ABSENCE sends none of them, as before. First-attached-client-wins on multi-client sessions; later initializes do not change it."
        ),
      rapidFollowupPreempt: M()
        .optional()
        .describe(
          "@internal Declares that this consumer renders the `system/turn_preempted` frame and expects Claude Code to stop a turn on its own: when a person's follow-up message arrives while the running turn has shown nothing yet, the turn is stopped as an interrupt would stop it (its messages get `command_lifecycle` 'cancelled' and its result is an aborted one) and the follow-up runs next, announced by `turn_preempted`. Honored only while the rollout flag is on. ABSENCE fails closed: the follow-up waits its turn exactly as before, because a consumer that does not know the frame would see a message it never withdrew reported cancelled. Messages arriving over the Remote Control bridge never stop a turn, whatever was declared here. First-attached-client-wins on multi-client sessions; later initializes do not change it."
        ),
      plugins: T(irt())
        .optional()
        .describe(
          "Plugins to load for the session, in the same shape as the SDK `plugins` option: the stdin form of one --plugin-dir flag per entry (--plugin-dir-no-mcp when skipMcpDiscovery is set), so the launch command line does not grow with the plugin count. Loaded only by a CLI launched with --await-initialize, which reads this request during startup before any plugin work. Without that flag, on a repeated initialize, or over a remote session transport the field loads nothing; plugins_applied in the response reports whether the listed plugins are in fact loaded."
        ),
      workspaceTrust: u({
        accepted: M().describe(
          "Only send true after showing the user a trust dialog for `directory` \u2014 the same attestation set_cwd carries as trust_accepted."
        ),
        directory: o().describe(
          "Absolute path of the directory the user accepted, as it exists on the machine the CLI runs on. Honored only when it resolves to the trust key of the session working directory (the canonical git root when inside a repository, so a repository root and its linked worktrees agree); a network or obfuscated spelling, a path that is not a directory here, or one that resolves elsewhere records nothing. The grant covers that whole repository, exactly as the terminal trust dialog and set_cwd do, so a host whose folder sits inside a repository should name the repository root in its dialog."
        )
      })
        .optional()
        .describe(
          "@internal Host attestation that the user explicitly accepted a trust dialog for the session's working directory before launching it \u2014 the launch-time twin of set_cwd's trust_accepted/trusted_directory, for hosts whose dialog runs before the CLI is spawned and possibly on another machine than the ~/.claude.json this process reads (Claude Desktop's Code tab over SSH or WSL). Honored once, on the session's first initialize from the process that owns the CLI's stdin: the CLI records the working directory as trusted in the same store the interactive trust dialog writes (the home directory is trusted for the session only and never persisted), so the persisted-trust gates read the same answer they do in a checkout the user trusted at a terminal \u2014 project permission rules and hooks re-derive in the running process, the open-change announcement that follows this initialize already sees it, and readers evaluated at launch (project .mcp.json approval, project plugins, agent-frontmatter hooks and MCP servers) see it from the next launch on. A re-sent initialize, one arriving over a remote session transport, or one sent to a parked spare (--await-claim; send workspace_trust with claim_session instead) records nothing. workspace_trust_recorded in the response reports the outcome."
        ),
      attachServeRequest: u({ workId: o(), environmentId: o() })
        .optional()
        .describe(
          "@internal Claude Desktop's serve-only helper launch (`--attach-serve`) only: the tool-use work item the helper was started for and the served folder's environment id, exactly as the host polled them. Read from the opening `initialize` on the helper's own stdin and nowhere else; the helper signs its link to the session over both. Every other launch ignores it."
        )
    }).describe("Initializes the SDK session with hooks, MCP servers, and agent configuration.")
  ),
  KW = p(() =>
    u({
      minTimeBeforeFeedbackMs: v(),
      minTimeBetweenFeedbackMs: v(),
      minTimeBetweenGlobalFeedbackMs: v(),
      minUserTurnsBeforeFeedback: v(),
      minUserTurnsBetweenFeedback: v(),
      hideThanksAfterMs: v(),
      onForModels: T(o()),
      probability: v(),
      lastSurveyShownTime: v().nullable()
    }).describe(
      "@internal Session feedback-survey configuration for host UIs (VS Code webview, Claude Desktop) that run the survey trigger logic themselves: the same GrowthBook-driven pacing/probability values the terminal survey uses, plus the cross-surface last-shown time the host can't read. Survey responses are proxied back as tengu_feedback_survey_event log_event notifications."
    )
  ),
  HW = p(() =>
    u({
      transcript_allowed: M().describe(
        "Whether the box may send this sign-in's session transcript, and so may open: true for Pro and Max only. Read at session start."
      ),
      logs_followup: M()
        .optional()
        .describe(
          "Whether this CLI logs the followup_* survey events a host sends it. Absent means no: it would log them with no event type, so the host must not send them."
        ),
      every_rating: M().describe(
        "Whether VS Code opens this box in place of its own, which follows Bad only and is sent with submit_feedback. Never true unless transcript_allowed is, nor for a desktop session. VS Code keeps its own box where reports are saved on the user's computer rather than sent."
      )
    }).describe(
      "@internal For the session survey's follow-up box that opens after every rating: an optional note, sent with the session transcript by submit_survey_feedback. Its presence also says the CLI answers that request."
    )
  ),
  FW = p(() =>
    u({
      kind: B(["post", "bundle", "share", "disabled"]).describe(
        "How a submit_feedback report from this session is handled: 'post' sends it to Anthropic; 'bundle' writes it, redacted, to a zip on this machine for the user to pass on (a third-party provider or gateway, or no Anthropic credentials) and the response carries its path; 'share' is the internal-build upload; 'disabled' refuses it for a static cause (an environment variable or the nonessential-traffic setting). An org-policy refusal is not reported here: it is read late and can flip, and the per-turn system/init product_feedback_disabled carries it."
      )
    }).describe(
      "@internal The resolved feedback mode (getFeedbackMode) for host UIs that offer a feedback dialog, so they can say up front that a report is refused or saved on this machine, instead of learning either only after the user has written and sent it."
    )
  ),
  WW = p(() =>
    u({
      commands: T(Wt()),
      agents: T(co()),
      output_style: o(),
      available_output_styles: T(o()),
      user_output_styles_dir: o()
        .optional()
        .describe(
          "@internal Absolute path of the user-level output-styles directory this CLI lists styles from: the output-styles folder of the config home as the CLI resolves it after the settings env blocks are applied, so a CLAUDE_CONFIG_DIR set in user or managed settings is honored. A host that writes a user-level style file writes it here; absent on older CLIs, where the host falls back to its own reading of CLAUDE_CONFIG_DIR."
        ),
      models: T(hn()),
      unavailable_models: T(hn())
        .optional()
        .describe(
          "@internal Models the account can see but not select (disabled: true, reason folded into description \u2014 e.g. a model the org's Zero Data Retention setting excludes). Disjoint from `models`, which stays selectable-only so consumers without disabled rendering are unaffected. Populated only for allowlisted 1P hosts that render these rows (currently the VS Code extension \u2014 UNAVAILABLE_MODELS_HOST_ENTRYPOINTS); empty for every other consumer. Omitted when empty."
        ),
      account: AA(),
      current_model: o()
        .optional()
        .describe(
          "@internal The CLI's active model at connect time. Remote Control clients (web/mobile) sync their model dropdown TO this value on connect instead of sending set_model with their own default \u2014 without it, connecting from a phone silently switches the terminal's model (CC-2659)."
        ),
      current_permission_mode: de()
        .optional()
        .describe(
          "@internal The CLI's active permission mode at connect time, for the same connect-time sync as current_model."
        ),
      inbound_read_receipts: M()
        .optional()
        .describe(
          "@internal Remote Control hosts only: true when this host reports a client message read when it leaves the command queue for a turn \u2014 the message's `processing` delivery status \u2014 and finished when the turn ends (`processed`). Absent (an older CLI, or a host that acks at receipt): a delivery status means the host received the message, not that it read it. Read per initialize; the kill switch can turn it off for a session already answered."
        ),
      session_state: B(["idle", "running", "requires_action"])
        .optional()
        .describe(
          "@internal Session state at connect time (same values as the session_state_changed message). Lets a host that attaches to an already-running CLI tell whether a turn is in progress without having seen the transition. Absent (older CLI) \u2192 unknown."
        ),
      hooks_applied: M()
        .optional()
        .describe(
          "Whether the `hooks` this initialize carried were registered: true on a session's first initialize, and on a repeated initialize from the process that owns the CLI's stdin (its set replaces the one registered earlier); false when a repeated initialize's hooks were ignored (a client joining a remote session another client configured). Absent when the request carried no hooks, and on CLIs that predate the field \u2014 those ignored `hooks` on every repeated initialize."
        ),
      code_running_mcp_tools_applied: me(o(), T(o()))
        .optional()
        .describe(
          "@internal The MCP tools the first initialize's codeRunningMcpTools declared, keyed by server name with tool names as sent, each once. Names are not checked against the registered servers, so a misspelled one is listed but covers nothing. Malformed entries, and servers left with no tool, are omitted. Absent when that initialize carried no codeRunningMcpTools, on a repeated initialize, and on older CLIs: treat a tool as declared only when it is listed here."
        ),
      plugins_applied: M()
        .optional()
        .describe(
          "Whether every plugin this initialize listed is loaded: true when each one is among the plugins the process loaded at launch (from `plugins` under --await-initialize, or from --plugin-dir), so a re-sent initialize naming the launch set also reads true; false otherwise. The `plugins` field never loads anything after launch. Absent when the request listed no plugins, and on CLIs that predate the field (those never read `plugins`)."
        ),
      host_worded_asks: M()
        .optional()
        .describe(
          "@internal Desktop host only: true when this session reads permissionDisplay on a PreToolUse hook's ask (coreSchemas.ts HookPermissionDisplaySchema) and sends its asks to the host as can_use_tool requests. Absent otherwise. Send permissionDisplay only when this is true, and check each can_use_tool request for the words: the CLI may send an ask without them."
        ),
      workspace_trust_recorded: M()
        .optional()
        .describe(
          "@internal Outcome of this initialize's `workspaceTrust` attestation: true when the attested directory resolved to the session working directory's trust key and that key is now persisted as trusted (or already was); false when nothing durable was recorded \u2014 the directory was a network or obfuscated spelling, is not a directory on this machine, resolved to another key, the grant could not be written durably, or the working directory is the home directory (trusted for this session only); false too, whatever is already persisted, when the directory, the working directory or that key carries an invisible or format character (refused as set_cwd refuses such a spelling). Absent when the request carried no accepted attestation, on a repeated or remote-transport initialize, on a parked spare's initialize (--await-claim), and on CLIs that predate the field."
        ),
      sdk_mcp_manifests_parked: me(
        o(),
        B(["parked", "already_connected", "protocol_version_mismatch", "malformed", "not_honoured"])
      )
        .optional()
        .describe(
          "What became of each entry of this initialize's sdkMcpServerManifests, keyed by sdk server name, for the entries whose name is in sdkMcpServers. 'parked': kept for the connect that follows this reply, which answers the server's MCP initialize and first tools/list from it (a later failure to replay shows up as live mcp_message frames, as when no entry was sent). 'already_connected': this CLI already had a live client for the server. 'protocol_version_mismatch': initializeResult.protocolVersion is not the version this CLI's client requests. 'malformed': the entry is not of the documented shape, reported whether or not manifests were honoured (every name in sdkMcpServers gets this when the field itself is not an object); or an honoured entry is past the limits this CLI sets on a live answer. 'not_honoured': the CLI did not use the entry: manifests or remote manifests are switched off in this CLI, the session service has not told this remote-session worker in the last five minutes that only the account owning the session can send events to it, or the request reached such a worker other than over its session stream (nothing for the host to change in any of these cases); or this CLI had read as many tool lists as it allows in a minute (send it again later); or it came over the session stream without sdkMcpServerManifestsOrigin or on a frame too old to trust (the host's to fix). Absent when the request carried no sdkMcpServerManifests or named no sdkMcpServers, and on CLIs that predate the field."
        ),
      permission_mode_from_default_fallback: M()
        .optional()
        .describe(
          '@internal True when current_permission_mode is auto because no settings source configured a mode and the gated auto default applied. IDE hosts only; drives the one-time "auto mode is now the default" disclosure.'
        ),
      auto_default_nudge: de()
        .optional()
        .describe(
          "@internal The user-settings defaultMode the one-shot auto-default nudge should offer to replace with auto. IDE hosts only; absent when the user isn't eligible."
        ),
      pid: v().optional().describe("@internal CLI process PID for tmux socket isolation"),
      claude_code_version: o()
        .optional()
        .describe(
          "Claude Code version of the process that runs this session's turns (the same value its system/init carries). Absent on CLIs that predate the field, and when the responder is not that process and does not know its version."
        ),
      fast_mode_state: $t().optional(),
      fast_mode_disabled_reason: Xt().optional(),
      footer_indicator: Ao()
        .optional()
        .describe(
          `@internal The terminal's configured "\u25C6 <text>" footer pill at connect time \u2014 see SDKFooterIndicator. Absent when nothing is configured.`
        ),
      feedback_survey_config: KW()
        .optional()
        .describe(
          "@internal Present only when the feedback-survey surface is enabled for this host (GrowthBook gate, privacy level, and org policy all allow it). Absent means the host must not show the survey."
        ),
      survey_followup_box: HW()
        .optional()
        .describe(
          "@internal Sent to each session a VS Code or desktop host starts itself (not a nested child session), even when feedback_survey_config is absent. Absent on CLIs without submit_survey_feedback."
        ),
      feedback_mode: FW()
        .optional()
        .describe(
          "@internal How this session handles a submit_feedback report (see SDKFeedbackMode), read once at init like the other host gates here; the org-policy half of 'disabled' stays on the per-turn system/init product_feedback_disabled boolean. Absent on an older CLI, and when the only refusal is the org policy \u2192 the host behaves as it does without the field."
        ),
      analytics_disabled: M()
        .optional()
        .describe(
          "@internal True when the CLI has analytics/telemetry disabled for this session (privacy level, DISABLE_TELEMETRY / DO_NOT_TRACK from any settings tier, third-party provider, gateway) \u2014 the same verdict the system/init message carries. IDE hosts fold it into the gate for their own direct telemetry. Absent (older CLI) \u2192 unknown."
        ),
      remote_control_auto_enable: M()
        .optional()
        .describe(
          "@internal Whether the CLI resolver says Remote Control should auto-enable at session start (explicit setting \u2192 policy default \u2192 GB rollout), so IDE hosts can mirror TUI behavior. Absent (older CLI) \u2192 treat as false."
        ),
      remote_control_auto_on_by_default: M()
        .optional()
        .describe(
          "@internal True when remote_control_auto_enable is true because of the org/GB default rather than an explicit remoteControlAtStartup setting \u2014 mirrors replBridgeAutoOnByDefault so IDE hosts can render the same disclosure notice."
        ),
      remote_control_auto_connect_default: M()
        .optional()
        .describe(
          '@internal The org/GB auto-connect default alone (getCcrAutoConnectDefault, under the same remote-environment guard as remote_control_auto_enable), with every explicit copy of remoteControlAtStartup left out. IDE hosts show it for their toggle only once they have seen the settings key cleared while the session runs (/config "default" clears the legacy ~/.claude.json copy in the same step); at rest they show remote_control_auto_enable. Absent (older CLI) \u2192 hosts keep their previous display behavior.'
        ),
      claude_in_chrome_at_startup: M()
        .optional()
        .describe(
          `@internal Whether an IDE host that connects Claude in Chrome itself should connect it when the session starts. True when the "Enabled by default" setting (claudeInChromeDefaultEnabled) is on, this session did not connect the server itself, and the gates the terminal applies to the setting at startup pass (claudeInChromeDefaultForHost). Sent only to a host that owns the session's startup (isVscodeHostOwnedStartupSession). Absent (older CLI, other hosts) \u2192 treat as false.`
        ),
      remote_control_available: M()
        .optional()
        .describe(
          "@internal Whether Remote Control can be offered at all in this deployment (isRemoteControlDeploymentAvailable: not hard-disabled by managed settings, not nested in a remote environment, first-party provider). Only host-lifetime-stable conditions; transient ones (auth state, the GrowthBook rollout gate, the async org-compliance verdict) are deliberately excluded since hosts latch this from one initialize response \u2014 see the helper docstring. Lets IDE hosts hide their Remote Control affordance where it can never work. Absent (older CLI) \u2192 treat as available."
        ),
      ide_rc_auto_enable_gate: M()
        .optional()
        .describe(
          "@internal IDE-side rollout kill-switch for RC auto-enable (tengu_ide_rc_auto_enable), independent of remote_control_auto_enable. Carried on the init response (not experimentGates) because the host reads it at init time, before the first-prompt-triggered gate refresh. Absent (older CLI) \u2192 treat as false."
        ),
      capabilities: T(o())
        .optional()
        .describe(
          "@internal Members of system/init.capabilities that are already settled at connect time, said here so a host need not wait for the first turn to read them. The same literals under the same conditions; a subset, so a member missing here may still arrive on init. Absent when there is none to say, and on older CLIs."
        )
    }).describe(
      "Response from session initialization with available commands, models, and account info."
    )
  ),
  zo = p(() =>
    u({
      subtype: A("interrupt"),
      reason: o()
        .optional()
        .describe(
          "@internal Why the turn was interrupted, forwarded to the turn's AbortSignal.reason. Tool implementations branch on it to distinguish a user-driven cancel (which suppresses error output) from other aborts. Known values: `interrupt` (user Esc/Ctrl+C), `user-cancel`, `remote-cancel`, `consumer-error`, `workflow-abort`, `stalled`, `recovery-timeout`. Open set \u2014 consumers must treat unknown values as a generic abort."
        ),
      cancel_queued: M()
        .optional()
        .describe(
          "When true, the interrupt also cancels every uuid-stamped main-thread command still in the queue or already dequeued for the imminent turn but not yet reachable by the abort (the first-command prewait window) \u2014 the same set the response would otherwise list under `still_queued`. Each is closed with a terminal 'cancelled' lifecycle and listed on the response's `cancelled` field. `still_queued` is then empty, except that a client driving a hosted session lists there what it can no longer recall (a send already in flight to that session, or the first prompt the session was created with) and, when the session's own sweep then cancels one of those or a send it had already delivered, follows up with a command_lifecycle 'cancelled' frame for it. (The isFoldInFlight guard cancel_async_message uses does not apply here: this request also aborts the running turn, so a fold-in-flight uuid is never delivered and is swept with the rest. A fold-in-flight uuid's queued_command attachment may already appear in the aborted turn's transcript if the abort landed after the fold's attachment yield \u2014 pre-existing leave-queued semantics; it never runs as its own turn.) Uuid-less commands (task notifications) still in the queue are also dequeued but cannot be listed; a uuid-less command already in the prewait window is unreachable by either cancel leg \u2014 the first-command prewait latch covers it (this request latches exactly like a plain interrupt; see still_queued): its turn starts aborted. When false or absent, queued commands survive the interrupt and are listed under `still_queued` \u2014 the interrupt_receipt_v1 contract is unchanged. A Stop-means-stop-everything client (a remote UI's Stop button) sets this true so one round-trip halts the session; a wrapper that wants per-uuid control leaves it false and follows up with cancel_async_message. Advertised by the `interrupt_cancel_queued_v1` capability on system/init; older CLIs ignore the field and behave as if false."
        ),
      send_now: M()
        .optional()
        .describe(
          "@internal True when the request is a client's Send now on a message that is waiting, not its Stop: it asks that the waiting messages reach the model now, as the terminal's send-now key does. It is not a Stop: it makes no later turn start aborted, cancels nothing that is queued, and ends no background task, subscription or other thing outside the running turn that a Stop ends. What it does depends on what the CLI holds when it reads the request, and the response's send_now says which. Without message_uuid every waiting user message counts, which may be another than the one pressed. With no user message waiting at the CLI it does nothing: a message the running turn has already taken in, or was started for, is being answered. With one waiting that is not in the queue yet (received and still being admitted, or already taken for the next turn), that the running turn is taking in at that moment, or with no turn under way, it also does nothing: the message runs when its place comes. With a person's message in the queue behind a turn under way, the CLI chooses how that turn makes way: it moves what the turn waits on to the background so that the turn takes the message in (and, if that fails, stops the turn later as a priority 'now' message does, without a marker), or it aborts that turn at once as a plain interrupt does (running tools are ended, the interruption marker is written, the result is an error_during_execution); what was queued ahead of the message still runs before it. Either way a sender learns that the turn has ended from the turn's result, not from this response. The message must already be at the CLI, or the request finds nothing waiting: a sender that still holds it delivers it first, or sends it with priority 'now', or sends a plain interrupt instead. Only the boolean true counts, and with cancel_queued:true the request is a Stop. Advertised by interrupt_send_now_v1 on system/init; a CLI without it handles the request as a plain interrupt."
        ),
      message_uuid: o()
        .optional()
        .describe(
          "@internal Read only beside send_now:true: the uuid of the user message that Send now was pressed on, in the very form in which that message reached the CLI (a session service may deliver it in lower case): it is compared as an exact string, as cancel_async_message compares. With it only that message counts as waiting. If the running turn has already taken it in or was started for it, or the CLI does not know it or does not count it as a person's, the request does nothing and answers 'nothing_waiting', whatever else waits. Once the request acts, it acts as without the name: everything queued decides between the move to the background and the abort, and goes along with the named message. An empty string is read as no name, and so is a null, which this schema does not admit but an encoder may write; any other value that is no string names nothing."
        ),
      for_user_message_uuids: T(o())
        .optional()
        .describe(
          "@internal One to eight uuids (case ignored) of user messages whose turn this Stop is for; any other value is read as absent. The current turn is the latest one dequeued for a client's message (it may be over, or not yet started), with every turn started and message taken in since. A Stop that names one of its messages is handled as a plain interrupt (if latched, see still_queued, only for pending work that it names or that answers no client's message), and so is any Stop while the CLI knows of no current turn. Other Stops do nothing and get turn: 'spared', except a few that name queued work (sparesCurrentTurn). Always include the message that opened the turn (user_message_uuid on its first frames, before any re-run): after a restart the CLI knows no other. A turn handed over by turn_handoff has no name: any Stop may stop it, so send a plain one. The uuids are only compared: never stored, logged, sent back or shown to the model. Not read beside cancel_queued:true or send_now:true, nor by older CLIs, which answer without turn."
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker life (system/init's worker_epoch) that this interrupt is for, as a JSON number. Written only on an interrupt that a service sends by itself and that must not outlive the worker it was meant for. Never written on a person's Stop, not even as a null or a 0 for 'unset': a Stop must hold across a restart. Read by a claude-code-server tenant alone, before every other member and whatever they say. A worker of another life takes none of an interrupt's steps (it still counts as a person's presence, as every interrupt does), marks the request processed, so that no later worker is served it, and answers with a stale_worker_epoch error; take the new number from the next system/init, not from the error's text. Any other value that is present (a null, a 0, a fraction, a string such as '7') is refused the same way with an invalid_worker_epoch error, never read as absent. Both errors carry the token as error_code and list no still_queued: they are no receipt. The worker of the stated life, every other host that handles an interrupt, and an older tenant handle the request as if the member were absent, and no capability says which a worker is; a client that relays its host's Stop to a hosted session drops the member."
        )
    }).describe("Interrupts the currently running conversation turn.")
  ),
  YW = p(() =>
    u({
      still_queued: T(o()).describe(
        'Uuids of async user messages that survive this interrupt: commands still in the queue, plus any batch already dequeued for the imminent turn but not yet reachable by the abort. An interrupt \u2014 plain or cancel_queued:true \u2014 that lands during the FIRST-command prewait window (before the first turn of the session has armed a controller) is additionally LATCHED, scoped to the user-intent work pending at that instant \u2014 the batch already dequeued and parked for the imminent turn, plus the user-intent main-thread commands then in the queue (the work this list enumerates): the first turn to arm that carries any of that doomed work starts already aborted, exactly once, so the listed prewait batch is delivered into an immediately-aborted turn, its frames and result flowing through the normal abort path, instead of running to completion. A turn carrying none of it arms live and leaves the latch waiting: a system delivery turn (for example a replayed host event), or a prompt enqueued after the interrupt \u2014 post-interrupt work is never coalesced with the doomed work and never dies to the latch, so the Stop kills exactly what this receipt listed. The latch is released when the doomed work is retired without arming: if a parked prewait batch is entirely cancelled, the latch is released even when other queued commands remain (those arm and run normally); with nothing parked, it is released once none of the doomed commands remains queued \u2014 work enqueued after the interrupt neither holds it up nor is aborted by it. Survivors that ride any later turn run normally. These WILL run (subject to that latch) unless cancelled first (or unless the request set cancel_queued:true, in which case every uuid-stamped survivor this process holds is removed, emitted a terminal `cancelled` synchronously, and listed under `cancelled` instead \u2014 leaving here only what a client driving a hosted session can no longer recall: a send already in flight to that session, or the first prompt the session was created with; a send that client still holds on its own machine behind a send gate (it waits there until that session is ready to take it) has not gone out, so it is withdrawn and listed under `cancelled` like a queued one, and cancel_async_message can withdraw it too, while a plain interrupt leaves it held and lists it here). Cancellation granularity: uuids still in the queue are individually cancellable via cancel_async_message (the re-run of an interrupted turn that also answers for other client messages only if this interrupt was for it; see the response to that request); once a batch is dequeued and coalesced into one turn, cancelling a NON-representative member uuid is a no-op (its content still runs), while cancelling the batch-representative uuid drops the WHOLE coalesced batch \u2014 in both cases the cancel response reports cancelled:false because the message was no longer in the queue. Coverage caveats: only uuid-STAMPED messages appear (a message enqueued without a uuid still runs but is never listed, so [] does not mean "nothing will run"); only main-thread messages are listed (subagent-addressed messages are out of scope); and the list may include internally-enqueued uuids the client never sent (cron triggers, auto-resume continuations) \u2014 ignore unknown uuids rather than treating them as an error. Ordering: on a clean interrupt this receipt is written before the interrupted turn result; a turn that crashes during interrupt handling emits its error result on a direct-write path that may precede the receipt. Snapshot is taken synchronously with abort processing \u2014 probing the queue after the interrupted result instead always loses the race against the drain loop, which starts the next queued turn immediately.'
      ),
      put_back: T(o())
        .optional()
        .describe(
          "@internal Present only when not empty, and only from a CLI that advertises interrupt_requeue_taken_v1: those uuids under still_queued that an interrupt, this one or an earlier one, put back in the queue after a turn had taken them in (SDKUserMessage.requeue_if_interrupted_within_ms) and that are still in the queue. One already taken off the queue for its turn is listed under still_queued only. One interrupt puts back at most one. Each runs in a turn of its own, ahead of the other uuids listed unless one of those has a higher priority."
        ),
      send_now: B(["stopped", "delivering", "nothing_waiting"])
        .optional()
        .describe(
          "@internal Present only when a CLI that advertises interrupt_send_now_v1 itself answers a send_now (a client that relays to a hosted session answers without it). 'nothing_waiting': no user message waited (with message_uuid, the named one did not), and nothing was done. 'delivering': one waits and this request stopped no turn, for one of these reasons: no turn is under way and the message runs when its place comes; the message is not in the queue yet, or the running turn is just taking it in; the CLI is moving what the turn waits on to the background, and may still stop the turn later if that fails; the turn is already being stopped; or the process is on its way out, and the message will not run in it. 'stopped': the running turn was aborted for what waits, and its result follows."
        ),
      turn: B(["stopped", "idle", "spared"])
        .optional()
        .describe(
          "@internal Present only when the answering CLI read the request's for_user_message_uuids. 'stopped': handled; the turn under way was aborted, or the interrupt was latched for pending work. 'idle': handled; no turn was under way and it latched for nothing. 'spared': it named no message of the current turn, so nothing was done. A named message listed in still_queued still waits, whatever the value."
        ),
      cancelled: T(o())
        .optional()
        .describe(
          "Present only when the request set cancel_queued:true \u2014 uuids of main-thread commands cancelled by this interrupt: every survivor that would otherwise have appeared under `still_queued`, including any uuid that was mid-fold at the interrupt instant (this request also aborts, so the fold never delivers it). Each listed uuid has been removed (queue-resident) or marked cancel-pending (the first-command prewait window, closed by the drain loop's backstop) and emits a terminal 'cancelled' lifecycle synchronously at the first such interrupt (a repeat interrupt over the same parked batch re-lists the uuid idempotently without re-emitting); none will run. Where one of them is the re-run of an interrupted turn that also answered for other client messages whose re-sent copies had been set aside for it, those messages' uuids are listed behind the commands' too: they were in no queue and never under `still_queued`, each has its terminal 'cancelled' lifecycle, and a repeat interrupt does not list them again. Same coverage caveats as `still_queued` (uuid-stamped main-thread only; internally-enqueued uuids may appear). Advertised by the `interrupt_cancel_queued_v1` capability."
        )
    }).describe(
      "Result of an interrupt operation. Advertised by the interrupt_receipt_v1 capability on system/init; older CLIs send an empty success response with no still_queued field."
    )
  ),
  Co = p(() =>
    u({
      subtype: A("can_use_tool"),
      tool_name: o(),
      mcp_server: Ke().optional(),
      input: me(o(), oe()),
      permission_suggestions: T(Ft()).optional(),
      blocked_path: o().optional(),
      decision_reason: o()
        .optional()
        .describe(
          `Human-readable reason the ask escalated, for the consent line of the host's dialog. For decision_reason_type "subcommandResults" (compound bash), this is the NESTED safety check's warning text \u2014 the wrapper itself has no text \u2014 preferring a check that requires manual approval (classifier_approvable false); treat it with the same display/policy care as a "safetyCheck" reason. May carry ANSI escapes; sanitize before rendering.`
        ),
      decision_reason_type: B(DTt)
        .optional()
        .describe(
          `Structured discriminator for why auto-mode escalated. Lets SDK hosts make policy (e.g. auto-deny safetyCheck) without parsing decision_reason text. For compound bash commands this is "subcommandResults" even when a safetyCheck is nested inside \u2014 check classifier_approvable for that case, and see decision_reason: for this variant it carries the nested safety check's warning text.`
        ),
      decision_reason_code: B([...Zir, "org_ask_ceiling"])
        .optional()
        .describe(
          "@internal A closed-set code for a reason a host can act on, beside decision_reason_type (whose values are unchanged, so type-keyed host policy decides as before): 'outside_reads_blocked', 'memory_paused', 'classifier_transcript_too_long', 'org_ask_ceiling' (the MCP tool's ceiling, toolPermissions, is 'ask', and an ask rule or the ceiling itself raised the ask: type 'rule' or 'other'). Absent for every other reason; new values are additive."
        ),
      decision_reason_rule_source: o()
        .optional()
        .describe(
          "@internal With decision_reason_type 'rule': the source of the rule in the decision reason (a PermissionRuleSource word). It names the first rule that matched, not the strongest, and says nothing of what that rule hides. For the host's logs: a host should not decide by it."
        ),
      decision_reason_hook_event: B(["PreToolUse", "tool.check"])
        .optional()
        .describe(
          "@internal With decision_reason_type 'hook': the event of the hook that asked. 'PreToolUse': the terminal's dialog names the hook 'PreToolUse:' followed by tool_name. 'tool.check': it names it 'tool.check'. A host can write the same, as plain text. Absent for any other hook. For display only: never answer or hide a prompt because of it."
        ),
      decision_reason_hook_source: o()
        .optional()
        .describe(
          "@internal With decision_reason_type 'hook': where the hook that asked comes from: 'plugin:<name>', 'plugin', 'skill:<name>', 'skill', or 'settings' for any other hook, such as one the SDK host registered. This CLI sends and passes on no other shape. It is absent when the CLI does not know it, when several plugins' check hooks asked together, or when the name is not 1 to 64 ASCII letters, digits, '.', '_' and '-' that start with a letter or digit. When several hooks ask on one call it is absent, or names the one whose reason decision_reason carries. The name is chosen by the plugin's or skill's author: joined words can spell a message, and it can look like a domain. Set it apart as a name, in quotation marks or in brackets as the terminal's label does. Show it in plain text, not through Markdown or an autolinker, and never as your own words. Untrusted, for display only: check and escape it, never put it in a URL, and never answer or hide a prompt because of it."
        ),
      decision_reason_hook_plugin_id: o()
        .optional()
        .describe(
          "@internal With decision_reason_type 'hook', for one plugin's hook: the plugin's id: its name, an at sign, then its marketplace, each a name as in decision_reason_hook_source. It can look like an e-mail address. The marketplace is a real one or a reserved word for how the plugin was loaded, such as 'synced' (delivered from claude.ai: on for the person's account, or attached to the session by its configuration), 'inline' (--plugin-dir), 'skills-dir' (.claude/skills/) or 'builtin'. Same care as decision_reason_hook_source; either may be sent without the other."
        ),
      server_policy_ask_only: M()
        .optional()
        .describe(
          "@internal Sent with decision_reason_type 'rule', and for an MCP tool's ask that has none. true = when the frame was built, nothing asked for a person on this call but the default prompt for a tool that no rule allows and, at most, a tool policy that the host itself pushed (permission_policy 'always_ask'): no other ask rule that the permission check applies to the call, no hook's or plugin's ask, no PermissionRequest hook, no organization ceiling, no plan-mode floor, no safety check, no ask or veto on a standing grant of the tool's own, no auto-mode classifier active for the call. false = something else did, or may have. It says nothing of WHY the host pushed that policy, which only the host knows; nothing of whose server the tool is (see mcp_server), so a host answers only for a tool that it holds a person's grant for; and nothing of what changes after the frame is sent. Absent on other reason types, on another tool's ask without a reason type, wherever a request is listed, mirrored or passed on again (pending_permission_requests), and from older versions."
        ),
      classifier_approvable: M()
        .optional()
        .describe(
          "Set when a safetyCheck is present anywhere in the decision reason (including nested inside subcommandResults for compound bash). false = at least one safety check requires manual approval (e.g. Windows path bypass, dangerous rm); true = all safety checks MAY be classifier-approved (e.g. sensitive-file paths). Absent when no safetyCheck is involved."
        ),
      suppress_always_allow_rule: M()
        .optional()
        .describe(
          `True when the dialog must not offer the persistent "don't ask again" row for this ask: accepting it would write a whole-tool allow rule broader than the ask's own verb (PermissionAskDecision.suppressAlwaysAllowRule). Hosts rendering approve options should omit any persistent-rule affordance when set.`
        ),
      default_to_no: M()
        .optional()
        .describe(
          "True when the ask must not be approvable by a single stray keystroke (PermissionAskDecision.defaultToNo): a terminal-style prompt opens on its decline option and takes no digit shortcut. Hosts rendering approve options should not pre-select approve when set."
        ),
      matched_ask_rule: u({ source: o(), tool_name: o(), rule_content: o().optional() })
        .optional()
        .describe(
          "Set when a user-configured ask RULE (permissions.ask) forced this prompt but the ask carries the tool's own decision_reason \u2014 the ask-rule substitution keeps the richer tool-minted ask, so the rule rides here instead of decision_reason_type 'rule'. Hosts making policy on decision_reason_type (e.g. auto-deny safetyCheck) or running host-side auto-approval should treat asks carrying this field as rule-forced: the user's stated intent is a human prompt. Values are producer-authored but render-unsafe like decision_reason; sanitize before display."
        ),
      title: o().optional(),
      display_name: o().optional(),
      tool_use_id: o(),
      agent_id: o().optional(),
      plugin: o()
        .optional()
        .describe(
          "@internal The plugin whose `$` call (`$.ui.ask`, `$.tool.call`, `$.agent.spawn`) started the run this ask belongs to, by the name it is loaded under: who the terminal's dialog says the ask is from. The engine's word, which no plugin sets. Empty on a run resumed from an agent a plugin steered, whose name was not kept (the terminal says `from a plugin`). Absent for the model's own calls. Untrusted text; escape before display."
        ),
      description: o().optional(),
      requires_user_interaction: M()
        .optional()
        .describe(
          "True when one-tap Approve/Deny must not be offered: the tool's approval card IS the user-interaction surface (Tool.requiresUserInteraction(): the user responds on the card itself), OR the pending ask is localDisplayOnly (its consent disclosure cannot ride this wire and only the local dialog renders it), OR the auto-mode classifier blocked the call and it was handed to a person (decision_reason_type 'classifier' on a person-only ask), which no stored grant or automatic approval may answer, OR the MCP server's name spells a claude.ai connector's key and the server came from neither claude.ai nor whoever launched the session, so a grant keyed on the tool name must not answer it, OR the SDK host worded the ask (title and description are its consent copy, which a push cannot carry whole). In each case the user has to open the session to answer."
        ),
      server_prompt: o()
        .optional()
        .describe(
          "@internal A marker the session service puts on an ask it worded itself, naming which of its prompts this is (an open set). Nothing on this frame proves who wrote it: the marker is the service's word only on a stream served by the service, which removes the key from anything a session's own container wrote; anywhere else it is a claim. A host keeps showing the tool name and input whatever it says."
        ),
      computer_folder: u({ path: o(), computer_name: o() })
        .optional()
        .describe(
          "@internal Beside server_prompt, and as trustworthy as it is: a folder on one of the person's computers and that computer's name. Untrusted text; escape before display."
        ),
      provenance_prompt_line: B(["one_at_a_time", "all_at_once"])
        .optional()
        .describe(
          "@internal Only on the URL prompt that WebFetch raises mid-call, when the session's web-fetch proxy refuses an address. Says whether the session's line of such prompts was on for this call. 'one_at_a_time' = on: the call took a turn in the line, so no other prompt of that line was up when this one was raised. 'all_at_once' = off: the call joined no line, and its prompt was raised without waiting. For the host's logs: nothing in the CLI decides by it, and a host should not either."
        ),
      tool_kind: B(["browser"])
        .optional()
        .describe(
          "@internal Structured tool category so SDK hosts can route to a specialized permission UI without name-matching tool_name. 'browser' = a Claude-in-Chrome MCP tool under any of its registered server names: the mcp__claude-in-chrome__* extension server, the mcp__Claude_in_Chrome__* Cowork desktop server, the Claude Desktop pane under mcp__Claude_Preview__* / mcp__Claude_Browser__* (both pane names are live during its rename rollout), or the mcp__remote-devices__* spellings bridged through Claude Code Remote (the bridged forms of the current names; the retiring Claude_Preview name has no bridged form). Open for future kinds."
        )
    }).describe("Requests permission to use a tool with the given input.")
  ),
  Oo = p(() =>
    u({
      subtype: A("set_permission_mode"),
      mode: de(),
      ultraplan: M().optional().describe("@internal CCR ultraplan session marker."),
      from_settings: M()
        .optional()
        .describe(
          "@internal The mode is the default of the creating person's settings, not a choice of the launch."
        )
    }).describe("Sets the permission mode for tool execution handling.")
  ),
  $W = p(() =>
    u({
      mode: de()
        .optional()
        .describe(
          "The permission mode now in effect. Headless CLIs echo it; other hosts may acknowledge with an empty object."
        )
    }).describe("Success payload answering set_permission_mode.")
  ),
  No = p(() =>
    u({
      subtype: A("set_model"),
      model: o()
        .nullable()
        .optional()
        .describe(
          "Model to switch to. Omitted, null, or 'default' resets to the session default model."
        ),
      system_prompt: o()
        .min(1)
        .optional()
        .describe(
          "@internal Replaces the custom system prompt (the --system-prompt / initialize systemPrompt slot). The session keeps sending the system prompt it has recorded, so the new text is first sent after the next compaction; under systemPromptSnapshot: false it is sent from the next turn on. The tool definitions already sent do not change. Applied only when the model request is accepted; must be non-empty (there is no revert-to-built-in form); re-send the current model for a prompt-only update; sending the text already in effect changes nothing. The CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE per-turn read, where configured, still wins. Transports that do not implement it, and older builds, ack success without applying it."
        ),
      only_if_model_is_current: M()
        .optional()
        .describe(
          "@internal When true, the request does not change the model. `model` must name a model: if it is absent, null, empty or 'default', the request fails with error_code 'invalid_request'. `system_prompt` is required: without it the request fails the same way. If `model` names the session's model, the request succeeds, and `system_prompt` replaces the custom system prompt as that member describes. The request makes no server check of the model, runs no PreModelSwitch hook, and sends no model report to the host. For a model id that this build knows, two names are one model if they resolve to one model id: an alias resolves to the id that it stands for, every dated id of a version resolves to the undated id, and a [1m] tag is ignored. An id that a behaves_as mapping points at another model is a different model. If the session's model is another model, the request fails with error_code 'model_not_current' and changes nothing. The request also fails that way while the session's records of its model disagree. A fallback that changes the session's model can cause that state until its turn ends, or longer. A session whose model setting is 'opusplan', 'opusplan[1m]' or 'haiku' runs a different model in plan mode. For such a session the request always fails with 'model_not_current'. A value that is not a boolean fails with 'invalid_request'. `claude -p` and a claude-code-server worker implement this member. Remote Control refuses every value but false. A build without this member ignores it and applies the request as a plain set_model."
        )
    }).describe("Sets the model to use for subsequent conversation turns.")
  ),
  XW = p(() =>
    u({
      model: o()
        .optional()
        .describe(
          "@internal The model the session's next turn runs as of this answer, spelled as system/init's `model`: an alias becomes the id it stands for, where external_metadata.model keeps an alias as sent. A family alias can also step down to an older version. Under opusplan or haiku in plan mode it names the model the setting runs outside plan mode, not the model a plan-mode turn sends to the API. A refusal fallback in a running turn, before or after this answer, can move the next turn to another model. `claude -p` writes it on its stream-json control channel, a Remote Control server-mode child's included, and so does a claude-code-server tenant. claude -p's Remote Control bridge lane and interactive Remote Control leave it out."
        )
    }).describe(
      "Success payload answering set_model. Hosts other than `claude -p` acknowledge with no payload."
    )
  ),
  Io = p(() =>
    u({
      subtype: A("set_max_thinking_tokens"),
      max_thinking_tokens: v().int().nullable().optional(),
      thinking_display: B(srt).nullable().optional()
    }).describe(
      "Sets the maximum number of thinking tokens for extended thinking. When max_thinking_tokens is null, thinking resets to the session default: any mid-session budget override is cleared (back to the spawn-time budget, if one was set), and thinking stays off for sessions that have it disabled. When max_thinking_tokens is omitted, the budget is left as it is, so a request that only changes thinking_display can leave the field out. thinking_display optionally sets the thinking display mode for the rest of the session: a value replaces the session display mode, null clears that override so Claude Code's default display handling applies again, and when omitted the display mode from session start (--thinking-display) is kept. 'highlights' returns one short title per stretch of thinking instead of a prose summary. The API accepts it only from Claude Code sessions that Anthropic hosts; if the API rejects it, the session sends 'omitted' (no thinking text) in its place from then on. A request for 'highlights' gets an error reply after such a rejection, when experimental betas are off (CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS or organization policy), on a Claude 3 model (except on Microsoft Foundry), or on Amazon Bedrock (Mantle included), Google Vertex AI or a Claude apps gateway (API provider \"gateway\") with a model released before Claude Opus 4.7. The error names which of these it was; the display stays as it was, and max_thinking_tokens still applies when the request has it."
    )
  ),
  Po = p(() =>
    u({
      subtype: A("rename_session"),
      title: o(),
      source: B(["remote", "host"])
        .optional()
        .describe(
          "Who chose the title: 'remote' (the default) for a rename made on claude.ai and relayed to this process, 'host' for one the user made in the hosting application (an IDE), which the CLI counts as a user rename."
        ),
      session_id: o()
        .optional()
        .describe(
          "The session the title is for. When given and this process has since moved to another session (/clear, an in-session resume), the request is refused instead of naming the new session."
        )
    }).describe("Sets the user-facing title for the current session.")
  ),
  Mo = p(() =>
    u({ subtype: A("set_color"), color: o() }).describe(
      'Sets the session accent color. Accepts an agent color name or "default" to reset.'
    )
  ),
  xo = p(() =>
    u({
      subtype: A("mcp_status"),
      liveReply: M()
        .optional()
        .describe(
          "When true and the CLI writes to the session through CCR (a cloud session's worker, or a Remote Control worker), the success reply is published only to the clients attached at that moment, as a control_response marked live_only: true on the session's unsequenced event stream, and is not stored with the session's events; on a cloud session's worker its rows embed each server's configuration (URLs, headers, OAuth settings). Set it only if your client reads control_response frames from that stream; a reply sent while its stream is down is lost and the request must be sent again, and a reply over the live size limit comes back as a live error instead. Error replies other than that size-limit error, and every reply from hosts that do not send live replies (stdio hosts, and CLIs older than this field), are ordinary stored replies, so a client that sets it must accept either."
        )
    }).describe("Requests the current status of all MCP server connections.")
  ),
  QW = p(() =>
    u({ mcpServers: T(lo()) }).describe(
      "Response containing the current status of all MCP server connections."
    )
  ),
  Do = p(() =>
    u({ subtype: A("file_suggestions"), query: o() }).describe(
      "Requests at-mention file autocomplete suggestions for a partial path prefix. Returns the same fuzzy-matched results the TUI shows."
    )
  ),
  JW = p(() =>
    u({
      suggestions: T(
        u({
          path: o().describe(
            "Relative to `cwd`, or absolute (e.g. files under the Claude config directory). A directory ends with a path separator."
          ),
          score: v().optional()
        })
      ),
      cwd: o()
        .optional()
        .describe(
          "Absolute directory the relative suggestion paths are relative to: the working directory the file index was built for, which can lag the current one briefly after a directory change. Omitted by older CLIs and on transports that withhold local paths; resolve against the system/init cwd then."
        )
    }).describe(
      "Response containing fuzzy-ranked file path suggestions (capped at the same limit as the TUI typeahead)."
    )
  ),
  Lo = p(() =>
    u({
      subtype: A("get_context_usage"),
      detail: B(["summary", "full"])
        .optional()
        .describe(
          "'full' counts each category with the token-count API; 'summary' answers from the last response's usage and local estimates without the per-category token-count calls. Defaults to 'full'."
        )
    }).describe("Requests a breakdown of current context window usage by category.")
  ),
  Uo = p(() =>
    u({ subtype: A("get_session_cost") }).describe(
      "Requests the formatted session cost summary (the same text /usage prints in non-interactive mode). Used by the thin-client /usage dialog to show the remote container cost instead of the local $0.00."
    )
  ),
  ZW = p(() => u({ text: o() }).describe("Formatted session cost text, ANSI-stripped.")),
  Vo = p(() =>
    u({ subtype: A("list_models") }).describe(
      "Requests the worker's selectable model catalog. Fulfills the caps.modelCatalog capability: in a remote thin-client session the worker's provider, settings cascade, and enforcement policy decide which models the session can run, so the thin client must ask rather than read its own getModelOptions()."
    )
  ),
  eY = p(() =>
    u({ models: T(hn()) }).describe(
      "The worker's model options serialized via toModelInfos() \u2014 the same ModelInfo shape the initialize response carries. Includes disabled rows (visible but not selectable) so the thin-client picker renders them greyed-out like the local one."
    )
  ),
  jo = p(() =>
    u({
      subtype: A("get_usage"),
      skip_behaviors: M()
        .optional()
        .describe(
          "Skip the scan of local transcripts that produces the response's behaviors section (it is null in the answer). For callers that need only the plan rate limits, such as a usage meter; the scan reads every transcript touched in the last seven days."
        )
    }).describe(
      "Requests the structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization when available. Experimental \u2014 the response shape may change."
    )
  ),
  Qt = p(() =>
    u({
      utilization: v().nullable().describe("Percentage of the window used, 0-100."),
      resets_at: o().nullable().describe("ISO 8601 timestamp when the window resets.")
    })
  ),
  _n = p(() =>
    u({
      name: o(),
      pct: v().describe("Share of the weighted local usage attributed to this item, 0-100.")
    })
  ),
  KA = p(() =>
    u({
      request_count: v().describe("API requests found in local transcripts for this window."),
      session_count: v().describe("Distinct sessions observed in this window."),
      behaviors: T(
        u({
          key: B([
            "cache_miss",
            "long_context",
            "subagent_heavy",
            "high_parallel",
            "cron",
            "max_effort",
            "workflow",
            "always_on_context",
            "large_tool_results"
          ]),
          pct: v().describe(
            "Share of the weighted local usage attributed to this behavior, 0-100."
          ),
          count: v().describe("Requests in this window exhibiting the behavior.")
        })
      ).describe(
        "Behavioral characteristics of local usage. Categories overlap \u2014 this is not a partition, so percentages do not sum to 100."
      ),
      recommendations: T(
        u({
          key: o().describe(
            "The behavior key, or 'agent', 'skill', 'plugin' or 'mcp_server' for a named source."
          ),
          pct: v().describe("Share of the weighted local usage this touches, 0-100."),
          title: o().describe("What to do, verb first."),
          detail: o().optional().describe("A few words: what the scan saw, or the command to run.")
        })
      )
        .optional()
        .describe(
          "One recommended change per notable behavior or source, largest share first, worded for display."
        ),
      fix: u({
        keys: T(o()).describe("The recommendations it covers."),
        messages: T(o()).describe(
          "User messages to send for the person, one each and in order, at priority 'later' so a running turn cannot reorder them: any /effort commands first, then one prompt for the rest, which goes with client_composed set."
        )
      })
        .optional()
        .describe(
          'What one "fix" action does. Absent when nothing can be fixed in the session that answered.'
        ),
      agents: T(_n()),
      skills: T(_n()),
      plugins: T(_n()),
      mcp_servers: T(_n())
    })
  ),
  tY = p(() =>
    u({
      session: u({
        total_cost_usd: v(),
        total_api_duration_ms: v().int(),
        total_duration_ms: v().int(),
        total_lines_added: v().int(),
        total_lines_removed: v().int(),
        model_usage: me(o(), Ge())
      }).describe("Cost and usage accumulated by the current session."),
      subscription_type: o()
        .nullable()
        .describe(
          "Claude.ai subscription type ('pro', 'max', 'team', 'enterprise') or null for API key / 3P provider sessions."
        ),
      rate_limits_available: M().describe(
        "False when plan rate limits do not apply (API key, Bedrock, Vertex, or missing profile scope) \u2014 rate_limits will be null."
      ),
      rate_limits: u({
        five_hour: Qt().nullable().optional(),
        seven_day: Qt().nullable().optional(),
        seven_day_oauth_apps: Qt().nullable().optional(),
        seven_day_opus: Qt().nullable().optional(),
        seven_day_sonnet: Qt().nullable().optional(),
        model_scoped: T(
          u({
            display_name: o().describe(
              "Server-supplied label for the model bucket (e.g. 'Fable')."
            ),
            utilization: v().nullable(),
            resets_at: o().nullable()
          })
        )
          .optional()
          .describe(
            "Per-model weekly windows from the server limits[] array, filtered by the overage-included-models allowlist. Additive: absent when nothing is known about them (an answer served from cached data, or rows the allowlist hides); an empty array means the endpoint itself answered and listed no per-model weekly window at all for this account, before the allowlist was applied."
          ),
        extra_usage: u({
          is_enabled: M(),
          monthly_limit: v().nullable(),
          used_credits: v().nullable(),
          utilization: v().nullable(),
          currency: o().nullable().optional()
        })
          .nullable()
          .optional()
      })
        .nullable()
        .describe(
          "Plan rate-limit utilization windows from the claude.ai usage endpoint, or null when unavailable."
        ),
      behaviors: u({ day: KA().describe("Last 24 hours."), week: KA().describe("Last 7 days.") })
        .nullable()
        .describe(
          "What's contributing to limits usage, from a scan of local transcripts on this machine (the same data the /usage dialog renders): behavioral characteristics plus per-skill/agent/plugin/MCP-server attribution. Approximate, excludes other devices and claude.ai. Null for non-claude.ai-subscriber sessions (mirrors the dialog) or when the scan fails."
        )
    }).describe(
      "Structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization. Experimental \u2014 the shape may change."
    )
  ),
  qo = p(() =>
    u({ subtype: A("get_status") }).describe(
      "@internal Requests the rows of the terminal's /status screen (version, session, account, provider, model, servers, settings), every value already rendered as text, for a host that shows them with its own widgets."
    )
  ),
  sY = p(() =>
    u({
      label: o()
        .optional()
        .describe("The row's name; absent for a row that is a sentence on its own."),
      value: o().describe("The row's value as the terminal shows it.")
    })
  ),
  nY = p(() =>
    u({
      sections: T(u({ title: o(), rows: T(sY()) })).describe(
        "The /status screen's sections in its order, each with the rows it shows."
      )
    }).describe("@internal The terminal's /status rows as text.")
  ),
  Go = p(() =>
    u({ subtype: A("export_conversation") }).describe(
      "@internal Requests the conversation as the plain text the terminal's /export writes, with the file name that command would offer, for a host that copies or saves it with its own widgets."
    )
  ),
  rY = p(() =>
    u({
      text: o().describe("The whole conversation as plain text, as /export renders it."),
      default_filename: o().describe(
        "The file name /export would offer: the time and the first prompt, ending in .txt."
      )
    }).describe("@internal The conversation text /export would write.")
  ),
  Bo = p(() =>
    u({
      status: A("unavailable"),
      reason: B([
        "started_by_session",
        "provider",
        "evaluation_run",
        "nonessential_traffic",
        "policy",
        "policy_unverified",
        "not_signed_in",
        "sign_in_expired",
        "not_found",
        "forbidden",
        "temporarily_unavailable",
        "failed"
      ])
        .optional()
        .catch(void 0)
        .describe(
          "Why nothing was read, so that a host can choose its own wording. temporarily_unavailable means that asking again may work. Unknown codes degrade to undefined at parse time, so codes can be added without a version bump; a host reads undefined as failed."
        ),
      message: o().describe(
        "A fixed sentence of the CLI's own for a person. Never the text of an error or of a response."
      )
    }).describe("@internal A cloud-session read that returned nothing, and why.")
  ),
  Ko = p(() =>
    u({
      subtype: A("list_cloud_sessions"),
      user_initiated: M()
        .optional()
        .describe(
          "True when a person asked for the list now. Absent or false for a background reload."
        )
    }).describe(
      "@internal Requests the signed-in account's cloud sessions, read by the CLI with its own sign-in. Answered only for the program that started the CLI on the same machine, over its stdin; refused on any other connection."
    )
  ),
  oY = p(() =>
    Gr("status", [
      u({
        status: A("ok"),
        sessions: T(
          u({
            id: o().describe("The session id, starting with `session_`."),
            title: o().describe("Empty when the session has no title. Text from the service."),
            updated_at: o().describe("Time of the last change, as the service wrote it."),
            status: B(["running", "idle", "requires_action", "archived", "pending", "failed"])
              .optional()
              .catch(void 0)
              .describe(
                "Unknown values degrade to undefined at parse time; a host reads undefined as idle."
              ),
            environment_kind: B(["bridge", "anthropic_cloud", "byoc", "snap"])
              .optional()
              .catch(void 0)
              .describe("Where the session runs. bridge is a Remote Control session."),
            repository: u({ owner: o(), name: o() })
              .optional()
              .describe("The GitHub repository of the session's first git source."),
            branch: o()
              .optional()
              .describe(
                "The branch the session works on. Text from the service: check it before it goes to git."
              )
          })
        ),
        truncated: M().describe("True when the service has more sessions than this page.")
      }),
      Bo()
    ]).describe("@internal The account's cloud sessions, or why they were not read.")
  ),
  Ho = p(() =>
    u({
      subtype: A("get_cloud_session"),
      session_id: o().describe("A session id from list_cloud_sessions.")
    }).describe(
      "@internal Requests the title, branch and environment kind of one cloud session that the service serves to the signed-in account. Refused where list_cloud_sessions is."
    )
  ),
  aY = p(() =>
    Gr("status", [
      u({
        status: A("ok"),
        title: o()
          .optional()
          .describe("Absent when the session has no title. Text from the service."),
        branch: o()
          .optional()
          .describe(
            "The branch the session works on. Text from the service: check it before it goes to git."
          ),
        environment_kind: B(["bridge", "anthropic_cloud", "byoc", "snap"])
          .optional()
          .catch(void 0)
          .describe("Where the session runs. bridge is a Remote Control session.")
      }),
      Bo()
    ]).describe("@internal One cloud session, or why it was not read.")
  ),
  Fo = p(() =>
    u({
      subtype: A("get_cloud_session_transcript"),
      session_id: o().describe("A session id from list_cloud_sessions."),
      cursor: o()
        .optional()
        .describe("The next_cursor of the page before. Absent for the first page.")
    }).describe(
      "@internal Requests one page of the stored transcript of a cloud session that the signed-in account owns. Refused where list_cloud_sessions is."
    )
  ),
  iY = p(() =>
    Gr("status", [
      u({
        status: A("ok"),
        entries: T(me(o(), oe())).describe(
          "Transcript entries as the service stored them, oldest first. Session content: the CLI does not check it."
        ),
        next_cursor: o()
          .optional()
          .describe("Present when a later page exists: send it as cursor to get that page.")
      }),
      Bo()
    ]).describe("@internal One page of a cloud session's transcript, or why it was not read.")
  ),
  Wo = p(() =>
    u({ subtype: A("get_memory_dialog") }).describe(
      "@internal Requests the rows and toggle states of the session's /memory dialog, for a host that draws the dialog with its own widgets and opens the files and folders itself. Clears the session's memory-file cache first, as the terminal /memory does."
    )
  ),
  lY = p(() =>
    u({
      kind: B(["user", "project", "project-alt", "local", "other"]).describe(
        "The user instructions file, the project instructions file (./CLAUDE.md), the alternate project file (./.claude/CLAUDE.md), the local file (./CLAUDE.local.md), or any other loaded instruction file. Only the user and project rows are listed while missing (exists false), so a host may create exactly those two."
      ),
      path: o().describe("Absolute path on the session filesystem."),
      label: o().describe("The row label as the terminal dialog shows it."),
      description: o().describe("The row's secondary text; may be empty."),
      exists: M()
    })
  ),
  dY = p(() =>
    u({
      kind: B(["auto", "team", "agent"]).describe(
        "The auto-memory folder, the team memory folder, or one agent's memory folder."
      ),
      path: o().describe("Absolute directory path on the session filesystem; may not exist yet."),
      label: o(),
      description: o()
    })
  ),
  cY = p(() =>
    u({
      name: o().describe(
        "The memory's path relative to the auto-memory folder ('MEMORY.md' for the index), as the CLI's memory scan names it."
      ),
      path: o().describe(
        "Absolute path on the session filesystem, inside the auto-memory folder reported in folders."
      ),
      description: o()
        .nullable()
        .describe("The memory's frontmatter description; null when it has none."),
      type: B(["user", "feedback", "project", "reference"])
        .nullable()
        .describe("The memory's frontmatter type; null when absent or not one of the CLI's types."),
      modified_ms: v().describe(
        "When the memory was last modified, in epoch milliseconds: the frontmatter 'modified' stamp when it parses, else the file's mtime."
      )
    })
  ),
  hY = p(() =>
    u({
      files: T(lY()),
      folders: T(dY()).describe("Empty when the terminal dialog would show no folder rows."),
      memories: T(cY())
        .optional()
        .describe(
          "The saved memories in the auto-memory folder, as the CLI's own memory scan lists them (the same listing the memory recall uses, so it follows the CLI's storage and visibility rules): the MEMORY.md index first when it exists on disk, then the memories ordered by file modification time, newest first (modified_ms may carry a frontmatter stamp instead), capped at the scan's limit of 200. Present exactly when folders is non-empty; absent while auto-memory is off, and absent from a CLI that predates this field."
        ),
      auto_memory: u({
        enabled: M().describe(
          "Whether auto-memory is on for every session: on in settings and not turned off by an environment variable, a launch flag, safe mode or the per-model switch."
        ),
        toggleable: M().describe(
          "False where the terminal dialog ignores the toggle (safe mode, or the per-model kill switch)."
        ),
        status: o().describe("The state text beside 'Auto-memory:' in the terminal dialog.")
      }),
      auto_dream: u({
        shown: M().describe("Whether the terminal dialog shows the Auto-dream row."),
        enabled: M(),
        toggleable: M().describe(
          "False while auto-memory is off for every session or held off for this session, or, when off, in a session a tool call or a background runner started."
        ),
        status: o().describe("The state text beside 'Auto-dream:'."),
        detail: o().describe("The dimmed detail ('running', 'never', 'last ran \u2026'), or empty.")
      })
    }).describe(
      "@internal The session's /memory dialog: file rows, folder rows, and the two toggle rows, in dialog order. Org (synced project memory) rows are not included."
    )
  ),
  Yo = p(() =>
    u({ subtype: A("get_skills_dialog") }).describe(
      "@internal Requests the rows of the terminal's /skills menu, for a host that draws the menu with its own widgets: each skill with its source, its token estimate, its effective state, and what locks it. Read-only; a host writes a state through the CLI's edit-skill-overrides subcommand."
    )
  ),
  uY = p(() =>
    u({
      name: o().describe(
        "The skill's full name (the settings key; 'server:skill' for an MCP skill)."
      ),
      display_name: o().describe("The name the menu shows, as the slash-command list names it."),
      description: o(),
      source: o().describe(
        "The source label the menu shows ('user', 'project', 'plugin', 'built-in', \u2026)."
      ),
      tokens: v().describe(
        "The menu's token estimate for the skill's listing in the system prompt, for the active model."
      ),
      state: B(["on", "name-only", "user-invocable-only", "off"]).describe(
        "The effective state (the locked value, else the local setting, else the project or user setting, else 'on')."
      ),
      locked_by: B(["author", "plugin", "policy", "flag", "reserved-name"])
        .optional()
        .describe(
          "Present when a local setting cannot change the state: the skill disables model invocation itself, it comes from a plugin, a managed or flag setting names it, or settings cannot store an entry under its name (reserved-name: a skill named __proto__; rename it to configure it). When one of several skills sharing a name is locked, every row of that name carries the lock, as the menu treats the name."
        ),
      advertised: M().describe(
        "Whether the session lists the skill as a slash command (a skill that is off, or not user-invocable, is not): a host joins a row to its command only when true."
      ),
      handles: u({
        unqualified_name: o().optional(),
        aliases: T(o()).optional(),
        bare_name_reserved: M().optional()
      }).describe(
        "The other names the settings files may hold the skill's state under (its unqualified name, its aliases), as the menu resolves them; a host sends these back with an edit of a skill only the session loaded, so the edit reads the same entries."
      )
    })
  ),
  pY = p(() =>
    u({
      skills: T(uY()).describe("The menu's rows, in its default order (by source, then name).")
    }).describe("@internal The terminal's /skills menu as rows.")
  ),
  $o = p(() =>
    u({ subtype: A("get_chrome_dialog") }).describe(
      "@internal Requests the state the terminal's /chrome dialog shows (Claude in Chrome: whether it is allowed, the extension's install and connection state, the enabled-by-default setting, and the pages its rows open), for a host that draws the dialog with its own widgets. Read-only; a host writes the setting through the CLI's edit-chrome-settings subcommand."
    )
  ),
  mY = p(() =>
    u({
      allowed: M().describe(
        "Whether Claude in Chrome may be used at all (the organization policy allows the browser extension)."
      ),
      subscriber: M().describe(
        "Whether the account is a claude.ai subscription, which Claude in Chrome requires."
      ),
      wsl: M().describe(
        "Whether the session runs under WSL, where Claude in Chrome is not supported."
      ),
      installed: M().describe("Whether the Chrome extension was detected on this machine."),
      connected: M().describe("Whether the session's Claude in Chrome server is connected."),
      paired_browser: o()
        .optional()
        .describe("The paired browser's name, when connected and paired."),
      enabled_by_default: M().describe(
        'The "Enabled by default" setting (claudeInChromeDefaultEnabled in the global config).'
      ),
      at_startup: M()
        .optional()
        .describe(
          '@internal The same answer as claude_in_chrome_at_startup, computed when asked. Any host can read it; a host uses it to decide whether to connect open sessions when "Enabled by default" is turned on. Absent (older CLI) \u2192 treat as false.'
        ),
      urls: u({
        install: o().describe("The page that installs the extension."),
        reconnect: o().describe("The page that reconnects the extension."),
        permissions: o().describe("The extension's site permissions page.")
      }).describe("The pages the terminal dialog's rows open, so a host holds no copy of them.")
    }).describe("@internal The terminal's /chrome dialog state.")
  ),
  Xo = p(() =>
    u({ subtype: A("get_chrome_browsers") }).describe(
      "@internal Requests the browsers connected to the session's Claude in Chrome server, as the terminal's /chrome browser picker lists them. Fails when the server is not connected."
    )
  ),
  _Y = p(() =>
    u({
      browsers: T(
        u({
          device_id: o(),
          name: o(),
          os_platform: o().optional(),
          current: M().describe("Whether this is the browser Chrome actions use now.")
        })
      )
    }).describe("@internal The connected browsers.")
  ),
  Qo = p(() =>
    u({
      subtype: A("select_chrome_browser"),
      device_id: o().describe("The browser to use for Chrome actions, from get_chrome_browsers.")
    }).describe(
      "@internal Switches the session's Claude in Chrome server to the given browser, as the terminal's picker does. Fails when the server is not connected."
    )
  ),
  gY = p(() =>
    u({ name: o().optional().describe("The chosen browser's name, when known.") }).describe(
      "@internal The browser is now in use."
    )
  ),
  Jo = p(() =>
    u({ subtype: A("get_sandbox_dialog") }).describe(
      "@internal Requests the state the terminal's /sandbox dialog shows, for a host that draws the dialog with its own widgets: platform support, the policy lock, the mode and its choices, the unsandboxed-fallback override, the dependency check, the excluded commands and the configured restrictions. Read-only; a host writes through the CLI's edit-sandbox-settings subcommand."
    )
  ),
  fY = p(() =>
    u({
      supported: M().describe(
        "Whether sandboxing can be configured on this platform (macOS, Linux, WSL2, or Windows where enabled) and the enterprise enabledPlatforms setting includes it."
      ),
      unsupported_reason: B(["wsl1", "platform", "excluded_platform"])
        .optional()
        .describe(
          "Why not, when supported is false: WSL1; another unsupported platform; or a platform the enabledPlatforms setting leaves out."
        ),
      locked: M().describe(
        "Whether a higher-priority settings source sets the sandbox settings, so the mode cannot be changed locally."
      ),
      overrides_locked: M().describe(
        "Whether the unsandboxed-fallback override cannot be changed from the project: set by policy (locked, or unsandboxed commands forbidden), or held closed (allowUnsandboxedCommands: false) by a --settings file or user settings."
      ),
      enabled: M().describe(
        "Whether sandboxing is running in this session: on in the settings, and the sandbox started."
      ),
      enabled_in_settings: M().describe("Whether the settings files turn sandboxing on."),
      unavailable_reason: o()
        .optional()
        .describe(
          "Why the sandbox cannot run although the settings turn it on (a missing dependency, an unsupported platform), when that is so; absent when it runs, or when it is off in the settings. When absent while enabled is false and enabled_in_settings true, the sandbox failed to start in this session."
        ),
      mode: B(["auto-allow", "regular", "disabled"]).describe(
        "The terminal picker's current row, from the settings: sandboxed commands auto-allowed, sandboxed with regular permissions, or no sandbox."
      ),
      auto_allow_available: M().describe(
        "Whether the auto-allow mode is offered on this platform."
      ),
      no_sandbox_allowed: M().describe(
        'False when sandboxing is forced on, so the "No sandbox" choice is not offered.'
      ),
      unsandboxed_fallback: M().describe(
        "Whether a command that fails under the sandbox may be retried outside it."
      ),
      dependencies: u({
        errors: T(o()).describe("Missing required dependencies; the sandbox cannot run with any."),
        warnings: T(o()).describe(
          "Missing optional dependencies; the sandbox runs with less isolation."
        )
      }).describe(
        "The sandbox runtime's dependency check, as the terminal's Dependencies tab lists it."
      ),
      excluded_commands: T(o()).describe(
        "Command patterns excluded from the sandbox (the excludedCommands setting)."
      ),
      restrictions: u({
        fs_deny_read: T(o()),
        fs_allow_read: T(o()).describe(
          "Paths re-allowed for reading (filesystem.allowRead), as enforced: while managed settings mandate the sandbox, or managed or --settings deny reads, project settings contribute none; under filesystem.allowManagedReadPathsOnly, managed settings only."
        ),
        fs_allow_write: T(o()).describe(
          "Extra writable paths (filesystem.allowWrite), as enforced: while managed settings mandate the sandbox, project settings contribute none."
        ),
        fs_deny_write: T(o()),
        network_allowed_domains: T(o()),
        network_denied_domains: T(o()),
        network_managed: M().describe("Whether the network allow list is managed by policy."),
        unix_sockets: T(o()).describe(
          "Unix socket paths allowed (allowUnixSockets), as enforced: while managed settings mandate the sandbox, from managed, --settings and user settings only."
        ),
        allow_all_unix_sockets: M().describe(
          "Whether every Unix socket is allowed (allowAllUnixSockets, as enforced), so socket blocking is off and a missing socket-filter dependency costs nothing; the terminal shows its socket warning only when this is false."
        ),
        ignored_glob_patterns: T(o()).describe(
          "Patterns the Linux sandbox ignores (globs it does not support)."
        )
      }).describe(
        "The restrictions configured in the sandbox settings (the settings' filesystem, network and socket lists, not the runtime's built-in defaults), as the settings files merge them; the grant fields (fs_allow_read, fs_allow_write, unix_sockets, allow_all_unix_sockets) as enforced."
      )
    }).describe(
      "@internal The session's /sandbox dialog state, for a host on the same machine (the sandbox governs the commands Claude runs there)."
    )
  ),
  Zo = p(() =>
    u({ subtype: A("get_binary_version") }).describe(
      "Requests the responder's CLI binary version. Used by /version in --remote mode so the thin client can show both its own and the remote container's version."
    )
  ),
  bY = p(() => u({ version: o(), buildTime: o().optional() })),
  EY = p(() =>
    u({
      id: B(uYr)
        .optional()
        .describe(
          "Which row this is. Stable where the English name is not: match a particular row on this. Absent from a CLI that predates it. A later CLI may add values: treat an unknown value as absent."
        ),
      name: o(),
      tokens: v().int(),
      color: o(),
      isDeferred: M().optional(),
      kind: B($rr).describe(
        "What the row is, the same classification the /context result's context_usage rows carry: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve; 'deferred' rows are out-of-window tool schemas. Classify on this, never on the English name."
      )
    })
  ),
  SY = p(() =>
    u({
      color: o(),
      isFilled: M(),
      categoryName: o(),
      tokens: v().int(),
      percentage: v(),
      squareFullness: v()
    })
  ),
  TY = p(() =>
    u({
      categories: T(EY()),
      totalTokens: v().int(),
      maxTokens: v().int(),
      rawMaxTokens: v().int(),
      percentage: v(),
      gridRows: T(T(SY())),
      model: o(),
      memoryFiles: T(u({ path: o(), type: o(), tokens: v().int() })),
      mcpTools: T(u({ name: o(), serverName: o(), tokens: v().int(), isLoaded: M().optional() })),
      mcpInstructions: T(
        u({
          serverName: o().describe(
            "Server name, as mcp_status reports it and mcp_toggle takes it (not normalized, unlike mcpTools[].serverName)."
          ),
          tokens: v().int()
        })
      )
        .optional()
        .describe(
          "The 'mcp_instructions' row by server. Only the row's total is counted: each server's share of it is estimated from the length of its text. Present only where the CLI answers on its own stdio and no server stores or forwards the reply."
        ),
      deferredBuiltinTools: T(u({ name: o(), tokens: v().int(), isLoaded: M() })).optional(),
      systemTools: T(u({ name: o(), tokens: v().int() })).optional(),
      systemPromptSections: T(u({ name: o(), tokens: v().int() })).optional(),
      agents: T(
        u({
          agentType: o(),
          source: o(),
          pluginId: o()
            .optional()
            .describe(
              "Id of the providing plugin (its name and marketplace), when there is one. Present only where the CLI answers on its own stdio and no server stores or forwards the reply."
            ),
          path: o()
            .optional()
            .describe(
              "Absolute path of the agent's file on the machine the CLI runs on, which over SSH or WSL is not the host's. Present only where the CLI answers on its own stdio and no server stores or forwards the reply: absent on cloud, self-hosted runner and Remote Control connections, and for an agent with no file."
            ),
          tokens: v().int()
        })
      ),
      slashCommands: u({
        totalCommands: v().int(),
        includedCommands: v().int(),
        tokens: v().int()
      }).optional(),
      skills: u({
        totalSkills: v().int(),
        includedSkills: v().int(),
        tokens: v().int(),
        skillFrontmatter: T(
          u({
            name: o(),
            source: o(),
            pluginName: o()
              .optional()
              .describe(
                "Name of the providing plugin, when there is one. Not unique across marketplaces: pluginId is."
              ),
            pluginId: o()
              .optional()
              .describe(
                "Id of the providing plugin (its name and marketplace), when there is one. Present only where the CLI answers on its own stdio and no server stores or forwards the reply."
              ),
            path: o()
              .optional()
              .describe(
                "Absolute path of the skill's file on the machine the CLI runs on, which over SSH or WSL is not the host's. Present only where the CLI answers on its own stdio and no server stores or forwards the reply: absent on cloud, self-hosted runner and Remote Control connections, and for a skill with no file."
              ),
            tokens: v().int()
          })
        )
      }).optional(),
      autoCompactThreshold: v().int().optional(),
      isAutoCompactEnabled: M(),
      messageBreakdown: u({
        toolCallTokens: v().int(),
        toolResultTokens: v().int(),
        attachmentTokens: v().int(),
        assistantMessageTokens: v().int(),
        userMessageTokens: v().int(),
        redirectedContextTokens: v().int(),
        unattributedTokens: v().int(),
        toolCallsByType: T(u({ name: o(), callTokens: v().int(), resultTokens: v().int() })),
        attachmentsByType: T(u({ name: o(), tokens: v().int() }))
      }).optional(),
      apiUsage: u({
        input_tokens: v().int(),
        output_tokens: v().int(),
        cache_creation_input_tokens: v().int(),
        cache_read_input_tokens: v().int()
      }).nullable()
    }).describe(
      "Breakdown of current context window usage by category (system prompt, tools, messages, etc.)."
    )
  ),
  Urr = p(() =>
    u({
      subtype: A("mcp_call"),
      tool: o().describe(
        "Fully-qualified MCP tool name, e.g. mcp__server__tool_name. Plugin-hosted servers are ordinary MCP servers here \u2014 e.g. mcp__plugin_documents_docs__doc_export (server names are normalized: non-[a-zA-Z0-9_-] becomes _)."
      ),
      arguments: me(o(), oe())
        .optional()
        .describe(
          `Tool arguments. When input_files/output_files are declared, any string VALUE that exactly equals "{{in:NAME}}" or "{{out:NAME}}" (whole string, not a substring) is replaced with the worker-chosen absolute path of that named staged file before the call; a token naming no declared file fails the request with staging error_code=tool_error, and every declared output's "{{out:NAME}}" token must appear in arguments (the substituted path is the only way the tool learns where to write, so an unreferenced output fails the request before the tool runs). With no files declared \u2014 including expires_at/timeout_ms-only staged calls \u2014 passed through unchanged.`
        ),
      expires_at: o()
        .optional()
        .describe(
          "RFC3339 deadline, REQUIRED when output_files are declared (a stale buffered drain must not overwrite rows written since). Sending expires_at routes the call through the staging engine, same as timeout_ms \u2014 the response gains a staging result. UNDELIVERED requests buffer durably and drain after reattach; a drain past this instant is dropped with staging error_code=expired instead of executing stale. Once delivered to a live worker the request is acked immediately and never redelivered \u2014 a worker killed mid-run surfaces as a missing response (apply your own deadline), not a later drain. An unparseable value is treated as already expired (fail closed)."
        ),
      timeout_ms: v()
        .optional()
        .describe(
          "Tool-execution timeout (staging and collection have their own transport timeouts). Clamped to [1000, 600000]; default 120000. Sending timeout_ms routes the call through the staging engine \u2014 so it is always enforced when present and the response carries a staging result; omit it for a plain call. Staged calls are POSIX-worker-only: on a Windows worker any staged-field call fails with a typed staging refusal."
        ),
      result_not_for_model: M()
        .optional()
        .describe(
          "The caller hands the result to a program (a host that renders it, a script), not to a model, and bounds it itself. content is then the server's own content blocks as MCP defines them (the MCP SDK drops members it does not define), not what a model turn would be handed: no image is resized or put in the Messages API's shape, nothing is saved under tool-results, no embedded resource is flattened, and text blocks beside structuredContent stay. They are untrusted third-party data: any mimeType, images neither re-encoded nor bounded in pixels, each block's annotations and _meta unfiltered. The size check that protects a model's context is skipped too: no count_tokens request (which uploads the result), no truncation, no note in place of the content. Instead a result over 10485760 characters (content with its base64, structuredContent and _meta together) fails though the tool ran: a plain call answers the error subtype, a staged call staging.error_code tool_error with the text in detail, before its outputs are collected. A legacy toolResult still comes back as a string. Does not route the call through the staging engine. Absent or false: as before. Honoured only for a host on this process's own pipes, not over a remote transport nor on a lane that redacts what it persists. Feature-detected as `mcp_call_result_not_for_model_v1` in system/init.capabilities and in the initialize response's capabilities; where it is not said, and by a CLI without it, the member is ignored."
        ),
      input_files: T(
        u({
          name: o()
            .regex(/^[A-Za-z0-9_-]{1,64}$/)
            .describe(
              'Handle referenced from arguments as "{{in:NAME}}". Unique within the request.'
            ),
          lane_path: o().describe(
            "Synced-file lane row to stage, e.g. /working/.cowork/originals/a.docx. A missing row fails with staging error_code=input_missing; the etag actually staged is echoed back in staging.inputs_used."
          )
        })
      )
        .max(64)
        .optional()
        .describe(
          "Declaring input_files or output_files makes this a STAGED call: rows are fetched from the synced-file lane into a private per-request temp dir the WORKER chooses (random, per-UID \u2014 the caller never sees or computes paths; it references files via tokens in arguments), the tool runs, and declared outputs are written back as lane rows (durable-at-ack PUT). The response then carries a `staging` result the caller switches on."
        ),
      output_files: T(
        u({
          name: o()
            .regex(/^[A-Za-z0-9_-]{1,64}$/)
            .describe(
              'Handle referenced from arguments as "{{out:NAME}}" \u2014 the tool is told (via the substituted path) where to write; the worker collects from exactly that path. Unique within the request.'
            ),
          lane_path: o().describe(
            "Synced-file lane row to write, e.g. /working/report.cd. Unique within the request (two outputs on one row would self-conflict under CAS). Outputs over the 25 MiB lane cap fail with staging error_code=output_too_large."
          ),
          if_match: o()
            .min(1)
            .optional()
            .describe(
              "Opaque lane etag the output row must still carry for the write to land (CAS). Omitted = unconditional last-writer-wins (an empty string is rejected, not treated as unconditional). A row that moved since fails that output with staging error_code=output_conflict and the requested bytes are not written. Redelivery of a completed CAS write re-runs and conflicts with its own prior write \u2014 treat output_conflict on a retry as possible-prior-success and reconcile by etag."
            )
        })
      )
        .max(64)
        .optional()
    }).describe(
      "Invokes an MCP tool via the subprocess MCP client without a model turn. No permission check (control channel is trusted, same as other " +
        'subtypes). SDK-type MCP servers (config.type === "sdk") are rejected \u2014 ' +
        "they are caller-provided, so the caller can invoke them directly without the subprocess round-trip. Result content passes through the same processing as model-turn MCP calls, unless result_not_for_model is set. Session expiry is not retried automatically; callers can mcp_reconnect and retry. UrlElicitationRequired (-32042) tries Elicitation hooks; if no hook " +
        "resolves, the call errors with the URL in the message \u2014 open it " +
        "out-of-band, then retry mcp_call. " +
        'STAGED calls (input_files/output_files declared) additionally stage lane rows in/out around the call \u2014 see the input_files describe. Staged failures come back as a success-subtype response whose staging field carries a typed error_code; subtype:error is emitted only when the call could not be attempted at all (server not connected, kill switch, dispatch failure) and means nothing ran. A target server that is not yet connected is brought up on demand: dispatch runs the deferred plugin/MCP startup resolution (the work a first model turn would have done) and waits up to 30s \u2014 shortened by expires_at when that is sooner \u2014 for the server to connect before answering "MCP server not connected", so a dispatch that races plugin startup (e.g. after an idle-wake reattach) succeeds instead of failing until a turn runs. Standard RPC semantics: a redelivered request_id supersedes the in-flight run (it is aborted and its response suppressed \u2014 exactly one response per request_id); conversion is idempotent, so re-running is safe. Cancellable via control_cancel_request.'
    )
  ),
  wY = p(() =>
    u({
      content: oe(),
      structuredContent: me(o(), oe()).optional(),
      _meta: me(o(), oe())
        .optional()
        .describe(
          "The result's own `_meta`, minus the server's keys under the CLI-reserved `com.anthropic/` prefix. Absent when nothing is left. The `_meta` of a block inside `content` is not filtered."
        ),
      staging: $e([
        u({
          ok: A(!0),
          outputs: T(
            u({
              lane_path: o(),
              etag: o().describe("Opaque lane etag returned by the durable-at-ack PUT."),
              bytes: v().int()
            })
          ),
          inputs_used: T(u({ lane_path: o(), etag: o() })).describe(
            "Lane etag each staged input actually carried."
          )
        }),
        u({
          ok: A(!1),
          error_code: B([
            "expired",
            "input_missing",
            "output_too_large",
            "output_conflict",
            "timeout",
            "tool_error"
          ]),
          detail: o().describe(
            "Plain-text detail for the requesting client. May carry user-document content (tool output, lane paths) \u2014 surface it to the user where helpful, but do not log it verbatim or feed it to analytics."
          ),
          retryable: M()
            .optional()
            .describe(
              "Present when the failure class is known (lane transport verdict, CAS rejection): true = safe to re-drive with the same request_id, false = deterministic. Absent = unknown; treat as non-retryable and switch on error_code."
            )
        })
      ])
        .optional()
        .describe(
          "Present exactly when the request used any staged-call field (input_files, output_files, expires_at, timeout_ms) \u2014 such calls run through the staging engine even with no files, so expires_at is always honored. The error_code set is a stable cross-repo contract \u2014 extend it, never rename or repurpose members. A failure makes no guarantee about partial effects: earlier outputs may already have landed; retry with the same request_id is safe for outputs without if_match (unconditional PUTs re-land the same bytes), while if_match outputs surface output_conflict against their own prior write \u2014 reconcile by etag. On staged failures the tool may never have run, so content/structuredContent may be absent."
        )
    }).describe(
      "MCP tool result \u2014 the content array, structuredContent, and _meta " +
        "from CallToolResult. Unless the request set result_not_for_model, content passes through the same processing as model-turn MCP calls (large results may be truncated or redirected to a file). Caller interprets. Staged calls additionally carry a `staging` result."
    )
  ),
  ea = p(() =>
    u({ subtype: A("rewind_files"), user_message_id: o(), dry_run: M().optional() }).describe(
      "Rewinds file changes made since a specific user message."
    )
  ),
  yY = p(() =>
    u({
      canRewind: M(),
      error: o().optional(),
      filesChanged: T(o()).optional(),
      insertions: v().int().optional(),
      deletions: v().int().optional(),
      skippedLinks: v().optional().describe(ho)
    }).describe("Result of a rewindFiles operation.")
  ),
  ta = p(() =>
    u({ subtype: A("cancel_async_message"), message_uuid: o() }).describe(
      "Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution. Also a no-op, on a worker that recognises held messages, for the queued re-run of an interrupted turn while that re-run also answers for other client messages, which cancelling it would close though nobody withdrew them; see the response."
    )
  ),
  AY = p(() =>
    u({ cancelled: M() }).describe(
      "Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued), or that the request was declined: the uuid is that of the re-run of an interrupted turn which has still to end and also answers for other client messages. The re-run then goes on, and its result names the message. It is not declined once an interrupt that was for that re-run (one without for_user_message_uuids, or one that names a message that the re-run carries; not a send_now, and not the interrupt that a session service sends by itself when a computer is linked) has listed the uuid under still_queued: the re-run is then cancelled, and those other messages with it, each with a terminal cancelled lifecycle."
    )
  );
var t6o = p(() =>
    Gr("kind", [
      u({ kind: A("workspace_root") }),
      u({ kind: A("diff_root") }),
      u({ kind: A("repo"), repo: o().describe("A repository, as owner/name.") }),
      u({
        kind: A("as_written").describe(
          'For a path copied from one of Claude\'s replies, which may be relative to the cwd of an earlier moment or to the root of the repository, or may lack its leading directories. Send it only to a session whose newest system/init lists the capability read_file_as_written_v1, and send the text without a line suffix (`:12`, `#L12`) or URL scheme. The session tries the text against the live cwd, the git root above that and its working directories. If no file is there, it looks below them for a file whose path ends in the text, among the paths its file state has held: those the file tools of the main conversation have read or written since the process started, or in the transcript it started from, and what a host has seeded or staged. A file that only a sub-agent touched is not among them, nor one that only a shell command touched, unless the command did nothing but print single files plainly (`cat f`, `head f`, `sed -n 1,9p f` and the like, or a lone `grep` that matches), with no pipe or redirect. It reads a file only when exactly one fits or, of several that fit a directory, exactly one is among those paths. The response\'s `absPath` names the file read. Show that path: the file can be a namesake of the one meant. A text that is `~` or starts with `~/`, a text that fits no file or several, a file found in none of the folders of `within`, and a look-up that could not be finished are refused. From such a session a refusal is final for the `within` it was asked with: asking again with a directory of the client\'s own choosing would turn "two files fit" into "the first one wins". A CLI that has `anchor` but predates this kind refuses it.'
        ),
        within: T(o()).describe(
          "The folders the client will show a file from: 1 to 512 absolute, normalized paths of at most 4,096 characters, such as the `cwd` that system/init gave. Required: without it, or with one entry that is unfit, the request is refused. The look-up is the same whatever they are. The one file it settles on is read and named only if its path is one of them or lies below one, by its spelling alone (no symbolic link followed, no case folded; `/` holds nothing); else the request is refused as any other. So they can only narrow what is answered."
        )
      })
    ]).describe(
      "@internal How read_file finds the file a relative path names: a directory to resolve it against, or a look-up of the one file the text can mean (as_written)."
    )
  ),
  sa = p(() =>
    u({
      subtype: A("read_file"),
      path: o(),
      max_bytes: v().optional(),
      encoding: B(["utf-8", "base64"])
        .optional()
        .describe(
          "How to encode the bytes in `contents`. Defaults to utf-8 (lossy for binary); pass 'base64' to read images."
        ),
      anchor: t6o()
        .optional()
        .describe(
          "@internal How to find the file `path` names, instead of resolving it against the live cwd, which a `cd` in the shell moves. workspace_root, diff_root and repo each name a directory the session looks up on each request; as_written names none, and has its contract in its own description. workspace_root is the root list_directory lists from. diff_root is the repository get_workspace_diff diffs, so a path taken from that diff opens the file the diff shows. It is refused in a session whose diff follows the shell's cwd between several repositories; a client that knows the repository should send `repo`. repo is the checkout the session declares for that repository or, failing that, diff_root when its origin remote ends in that owner/name. With those three, `path` must stay inside that directory as spelled (the check follows no symlink). Whatever the anchor, the read is gated as any other read_file is. A path that is `~`, starts with `~/` or leaves that directory, or an anchor the session cannot resolve or does not serve, is refused with the error `read denied: <path>`. Leave the field out when there is no anchor: null is refused. A CLI that predates this field ignores it and reads against the live cwd; the response's `anchor` tells the two apart."
        )
    }).describe(
      "Read a file from the session filesystem for the remote sidebar viewer. Path is resolved against cwd by default and gated by the same read-permission rules as the Read tool."
    )
  ),
  RY = p(() =>
    u({
      contents: o(),
      absPath: o(),
      truncated: M().optional(),
      encoding: A("base64")
        .optional()
        .describe(
          "Set when the request asked for base64. Absent means utf-8 \u2014 including when an older CLI ignored the request's encoding field."
        ),
      anchor: B(["workspace_root", "diff_root", "repo", "as_written"])
        .optional()
        .describe(
          "@internal The kind of the request's `anchor`, set when the file was found by it. Absent when the request sent no anchor, or when an older CLI ignored it and read against the live cwd."
        )
    }).describe("File contents for the remote sidebar viewer.")
  ),
  na = p(() =>
    u({
      subtype: A("list_directory"),
      path: o().describe(
        'Directory to list, relative to the workspace root: the project root of the session, which is the directory the session was started in or, for a worker started ahead of its session, claimed for. A `cd` in the shell, entering a worktree, or a set_cwd after the first turn does not move it. "" or "." lists the root itself. "/" is the only separator and 1024 UTF-16 code units the most. Absolute, drive, UNC and ".." paths are refused as invalid_path, and so is a path with a backslash: a name that contains one cannot be listed. Some other names are refused as unsupported_name, for example one that ends in a dot or a space.'
      )
    }).describe(
      '@internal List the direct children (names and kinds) of one directory below the workspace root of a remote session on Linux (every cloud session; a self-hosted runner on Linux). One level per request, no file contents. No symlink is followed: a path through or to a symlink is refused. A directory that a Read deny rule or a Read ask rule covers is refused, and such children are left out: the request cannot ask anyone. A directory whose every child is left out answers an empty listing, as an empty directory does. A refusal is the control error `list denied: <code>`, with code one of invalid_path, unsupported_name, symlink_in_path (a symlink at the workspace root or below it), path_not_canonical (a symlink above it, or a directory of the path was moved or removed while it was read; after either of these two codes the same request can succeed when it is sent again, if the tree changed), read_rule, not_found, not_a_directory, os_permission_denied, workspace_moved (the session works in a worktree or another directory now; this can last until the worker is restarted), unexpected_error. A rule for the whole Read tool refuses every listing as read_rule. Any other error text means the request was not served at all: the unsupported-subtype error below, `not_claimed` from a worker that is started but not yet claimed for a session, or the refusal of a client in between that does not know the request. Any other session, and a remote session on macOS, on Windows or under WSL, refuses the request as an unsupported subtype, as an older CLI does (the wording differs between a headless session and the Remote Control bridge). A remote session on Linux answers the same way while the request is switched off remotely; the switch is read for each request, so that answer can change within a session. To open a listed entry, send read_file the listed path, "/" and the entry name (the name alone when the listed path is ""), with `anchor` workspace_root. A response without `anchor` comes from a CLI that predates it, which read that relative path against the live cwd (a `cd` in the shell moves it), so it may be another file; for such a CLI, send an absolute path: the `cwd` of the first system/init message of the session, then the listed path, then the entry name. When the `absPath` of the listing starts with "/", that `absPath`, then "/", then the entry name is such a path too. Every later system/init carries the live cwd, not the root. A session whose system/init carries an empty `cwd` names no root to build that path from.'
    )
  ),
  vY = p(() =>
    u({
      absPath: o().describe(
        'The directory that was listed, as an absolute path: the workspace root, then the request path, so "" gives the root itself. A `cd` in the shell does not move it. Exception: a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker) gets the request path as it was sent, which is never absolute. An older CLI that answers list_directory leaves the field out: the path is then built as the request text says, from the `cwd` of the first system/init message and the request path.'
      ),
      entries: T(
        u({
          name: o(),
          isDirectory: M().describe(
            "False for a symlink, whatever it points to: a symlink is a leaf of the tree and cannot be listed. False for a special entry too."
          ),
          isSymlink: M()
            .optional()
            .describe("Present and true only for a symlink. The target is never read or returned."),
          isSpecial: M()
            .optional()
            .describe(
              "Present and true only for an entry that is not a file, a directory or a symlink: a FIFO, a socket or a device. read_file does not open it. The kind is the one the directory records: for a name that something is mounted over, that is the kind of what lies underneath."
            )
        })
      ),
      truncated: M().describe(
        "True when entries were left out for their number. The listing is cut at the cap of 5000 entries for one response, after the sort by name, so the ones kept are the first in that order. In a directory with more than 50000 children the rest is dropped before the sort and before the Read rules hide any, so fewer than 5000 entries can come with it. False when no entry is returned, whatever the number of children: a listing of nothing but hidden children is the listing of an empty directory."
      )
    }).describe(
      "@internal The direct children of the requested directory, sorted by name with plain string comparison (uppercase before lowercase), not by locale."
    )
  ),
  kY = p(() =>
    u({
      oldStart: v().int(),
      oldLines: v().int(),
      newStart: v().int(),
      newLines: v().int(),
      lines: T(o())
    }).describe("@internal One unified-diff hunk of the get_workspace_diff response.")
  ),
  ra = p(() =>
    u({ subtype: A("get_workspace_diff") }).describe(
      "@internal Requests the workspace git diff for the thin-client /diff dialog. The worker resolves one base ref for both stats and hunks (the merge-base with the base branch the session names, else the default branch, when HEAD is on another branch with commits beyond it, so committed and uncommitted changes show together, uncommitted rows first; otherwise working tree vs HEAD) and applies the standard caps (5s git timeout, 50 files, 1MB/file)."
    )
  ),
  zY = p(() =>
    u({
      diff: u({
        stats: u({ filesCount: v().int(), linesAdded: v().int(), linesRemoved: v().int() }),
        perFileStats: T(
          u({
            path: o(),
            added: v().int(),
            removed: v().int(),
            isBinary: M(),
            isUntracked: M(),
            status: B(["added", "modified", "removed", "renamed", "copied"])
              .optional()
              .describe(
                "How the file changed, in the same comparison as this row's added and removed counts: added, removed, renamed, copied, or modified (anything else, mode changes included). A move git's rename detection misses, such as one to a file not yet added to git, arrives as removed plus added. Absent from Claude Code versions that predate it, and on the rare reply whose git status lines don't line up with its counts; treat an unknown or absent value as modified."
              ),
            previousPath: o()
              .optional()
              .describe(
                "Renamed and copied rows: the old path as plain text, for display only. Absent, with newPath, when either name holds a character the CLI's path display refuses (controls, bidi and format characters, default-ignorables, non-ASCII spaces, U+FFFD) or could be read as another path (a backslash, a drive prefix or leading slash, a '..' part, ' => ')."
              ),
            newPath: o()
              .optional()
              .describe(
                "The path as plain text where it differs from path: the new path of a renamed or copied row (whose path is git's rename form), or the name of a row git quoted (a name with non-ASCII or special characters); for display only, never to join to a directory. Absent otherwise, and for the names previousPath lists."
              )
          })
        ),
        hunks: T(u({ path: o(), hunks: T(kY()) })).describe(
          "Diff text by path. A perFileStats row can have no entry here and be in neither skippedLarge nor restricted; it keeps its stats. Such rows include: a binary or untracked file; a symlink in the base commit; a submodule; a file under a git filter or working-tree-encoding; an index entry marked skip-worktree or assume-unchanged whose file on disk is not what the entry holds; and a file whose path on disk cannot be proven to be the one git listed, which is one reached through a link or junction, or, on a volume blind to letter case or Unicode form (macOS and Windows by default), one whose name or folder is spelled otherwise on disk than in git's index."
        ),
        skippedLarge: T(o()).describe(
          "Paths whose diff text exceeded the per-file or aggregate size cap, so they have stats but no hunks."
        ),
        restricted: T(o()).describe(
          "Paths whose hunk content was withheld by the diff surface's content-provenance gate: read-permission rules (same gate as read_file) plus this surface's stricter file-identity checks (symlink and hardlinked worktree files are refused here even where read_file serves them; so is a path that git diff lists as changed but that git holds in neither the diff's base commit nor the index). Stats remain visible."
        ),
        source: $e([
          u({ kind: A("working-tree") }),
          u({ kind: A("branch"), baseBranch: o(), baseRef: o() })
        ])
      }).nullable()
    }).describe(
      "@internal Workspace git diff for the thin-client /diff dialog. diff is null when the workspace is not a git repo or is in a transient git state (merge/rebase/cherry-pick). Paths in skippedLarge carry no hunks entry at all \u2014 membership alone marks them as too large. An entirely empty hunks array with non-empty perFileStats is not by itself a failure signal: it is the normal shape when all changes are untracked (stats only \u2014 git diff emits no hunks for untracked files) or every file was withheld, and can also occur when the hunks fetch transiently failed and only stats are available."
    )
  ),
  oa = p(() =>
    u({ subtype: A("get_plan") }).describe(
      "@internal Read the session's current plan-mode plan. Unlike read_file, the caller does not need to know the plan file's path \u2014 the worker resolves its own plan slug. Never creates a plan slug or file."
    )
  ),
  CY = p(() =>
    u({
      exists: M(),
      content: o().optional().describe("Plan markdown. Present iff exists is true."),
      path: o()
        .optional()
        .describe(
          "Absolute plan-file path on the session filesystem. Present when exists is true, except on connections that persist frames server-side (the local bridge-worker lane omits it; the plan content still ships)."
        )
    }).describe("@internal The current plan, or exists:false when none has been written.")
  ),
  aa = p(() =>
    u({ subtype: A("seed_read_state"), path: o(), mtime: v() }).describe(
      "Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path."
    )
  ),
  ia = p(() =>
    u({
      subtype: A("hook_callback"),
      callback_id: o(),
      input: lqe(),
      tool_use_id: o().optional(),
      issued_at: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Epoch milliseconds on the sender's clock when this request was issued \u2014 informational only: a device client judges staleness by how long the delivery waited on the session service's clock (the age its stream stamps on the event) against deadline_ms, never by this value against its own clock, and answers a stale delivery fail-safe (a guard answers 'retry') rather than leaving it unanswered. Optional and additive on the public hook_callback wire; hosts that do not know it ignore it."
        ),
      deadline_ms: v()
        .int()
        .positive()
        .optional()
        .describe(
          "@internal How long after issued_at, in milliseconds, the sender waits before proceeding without an answer. Lets a device client skip or stop work whose answer can no longer be heard. Absent = no deadline known. Optional and additive on the public hook_callback wire."
        )
    }).describe("Delivers a hook callback with its input data.")
  ),
  eR = "[A-Za-z0-9][A-Za-z0-9._-]{0,63}",
  tR = "[A-Za-z]{1,64}",
  _e = new RegExp(`^${eR}$`),
  sR = new RegExp(`^${tR}$`),
  ko = new RegExp(`^${eR}/${tR}/\\d{1,4}$`),
  la = /^[0-9a-f]{64}$/,
  n6o = /^[A-Za-z0-9+/]*={0,2}$/,
  OY = /^[^\p{Cc}\p{Cf}\u2028\u2029]+$/u,
  HA = 4096,
  NY = p(() =>
    u({
      id: o()
        .regex(ko)
        .describe(
          `@internal "<instance_id>/<event>/<index>", index being the entry's position within that event's forwarded list at capture. The schema checks the shape only; matching the instance_id prefix to the request is the receiver's job. Echoed back verbatim as hook_callback.callback_id; never reused for a different hook within one instance.`
        ),
      event: o()
        .regex(sR)
        .describe(
          "@internal Hook event name. A plain string rather than the HookEvent enum so an older worker tolerates an event it does not know: it ignores that entry instead of rejecting the whole registration."
        ),
      matcher: o()
        .max(512)
        .optional()
        .describe(
          "@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all."
        ),
      kind: B(["command", "http"]).describe(
        "@internal Hook kind on the device. prompt, agent and mcp_tool hooks are never forwarded; a new kind is a deliberate schema change."
      ),
      timeout_s: v()
        .positive()
        .max(600)
        .optional()
        .describe(
          "@internal The hook's own timeout in seconds, when configured; the worker derives its deadline from it."
        ),
      source: B(["user", "local", "flag"]).describe(
        "@internal Settings source on the device: user settings, the checkout's settings.local.json, or a --settings file."
      ),
      has_condition: M()
        .optional()
        .describe(
          "@internal The entry carries an if-condition, evaluated on the device; the condition text never leaves it."
        ),
      target_pinned: M()
        .optional()
        .describe(
          "@internal The device digested the hook's script at start-up and re-verifies those bytes before each run; the digest itself is not sent."
        ),
      author_opt_in: M()
        .optional()
        .describe(
          "@internal Runs at the hook author's explicit request (cloud: 'device' in its settings entry): it starts in the project folder, and its command may not be pinned to a script the session cannot change."
        )
    }).describe(
      "@internal One forwarded device hook: identity and routing data only \u2014 never a command line, URL, path, header or condition text."
    )
  ),
  IY = p(() =>
    u({
      template: o()
        .regex(_e)
        .describe("@internal Built-in template id, looked up in the worker's own table."),
      digest: o()
        .regex(la)
        .describe(
          "@internal Lowercase hex sha256 of the template script version enabled on the device; the worker installs the template only when this equals its table's digest."
        ),
      event: o().regex(sR).describe("@internal Hook event name, as for inventory entries."),
      matcher: o()
        .max(512)
        .optional()
        .describe(
          "@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all."
        ),
      timeout_s: v()
        .positive()
        .max(600)
        .optional()
        .describe("@internal Timeout in seconds, when configured.")
    }).describe(
      "@internal A vetted template the device has enabled, to run IN the container. Carries nothing executable: the worker derives the file and the command line from its own table."
    )
  ),
  PY = p(() =>
    u({
      after_edit: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal PostToolUse / PostToolUseFailure hooks whose matcher can only match file-writing tools. The worker never forwards after-edit events for those tools (the device copy of the file is stale or absent), so such a hook could never fire and is not sent."
        ),
      kind_unsupported: v()
        .int()
        .nonnegative()
        .optional()
        .describe("@internal Hooks of a kind that is never forwarded: prompt, agent, mcp_tool."),
      plugin: v()
        .int()
        .nonnegative()
        .optional()
        .describe("@internal Hooks contributed by plugins, which this version does not forward."),
      managed: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Hooks from managed (policy) settings, which this version does not forward."
        ),
      other: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Every other hook not sent: on an event that is not forwarded, a duplicate of one already listed, or beyond a cap."
        )
    }).describe(
      "@internal Counts of this device's hooks that were not forwarded, for the session line. Each such hook is counted in exactly one field, the first that applies in this order: plugin or managed (by its source); other, when its event is not forwarded at all; kind_unsupported; after_edit; other again for anything else, such as a duplicate or an entry beyond a cap. Absent fields mean zero."
    )
  ),
  Brr = p(() =>
    u({
      subtype: A("register_device_hooks"),
      instance_id: o()
        .regex(_e)
        .describe(
          "@internal Minted once per device client process and stable across its reconnects and re-registrations; the owner key in the worker's store and the first segment of every hook id."
        ),
      display_name: o()
        .min(1)
        .max(64)
        .regex(OY)
        .optional()
        .describe(
          "@internal What the session line calls the device: no control, format or line-separator characters (receivers still sanitize before display); the worker falls back to instance_id when absent."
        ),
      lease_s: v()
        .int()
        .min(60)
        .max(3600)
        .optional()
        .describe(
          "@internal Requested lease in seconds (default 600); the worker caps it and returns the effective expiry. Re-send the request to renew; a repeat from the same instance replaces its entries."
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker life the device believes it addresses; a mismatch is answered with a stale_worker_epoch error."
        ),
      hooks: T(NY())
        .max(128)
        .describe(
          "@internal The forwarded inventory. An empty array together with an empty templates array unregisters this instance; both keys are required so an omission is a parse error, not an unregister."
        ),
      templates: T(IY())
        .max(8)
        .describe("@internal Vetted templates enabled on the device, to run in the container."),
      held: PY()
        .optional()
        .describe(
          "@internal How many of its hooks the device did not forward and why; informational, absent = none reported."
        )
    }).describe(
      "@internal Registers this device's hooks with the worker \u2014 unrelated to device registration or bind. Sent by a claude --cloud device client after it attaches to a cloud session (never as an initial event of the create): names, by opaque id, which of the user's own hooks the worker should ask this device to run over hook_callback, and which vetted templates to run in the container. The worker rejects requests over 64 KiB with invalid_registration. Error replies use the standard error response with a message that starts with a code token and a colon: hook_forwarding_disabled (off for this session; not retryable, nothing stored), hook_forwarding_not_ready (retry after a short backoff), invalid_registration, or stale_worker_epoch (re-read the worker epoch and re-send). A worker that predates the request answers with the usual unsupported-subtype error."
    )
  ),
  FA = p(() =>
    u({
      template: o().regex(_e),
      status: B([
        "installed",
        "awaiting_upload",
        "interpreter_unavailable",
        "install_failed",
        "unknown_template",
        "version_mismatch",
        "event_not_allowed",
        "disabled"
      ])
    }).describe("@internal Outcome for one requested template.")
  ),
  WA = String.raw`(?!\.\.?(?:\/|$))[^/\\\p{Cc}\p{Cf}\u2028\u2029]+`,
  YA = new RegExp(`^\\/(?:${WA}(?:\\/${WA})*\\/?)?$`, "u"),
  $A = p(() => ({
    project_dir: o()
      .max(HA)
      .regex(YA)
      .describe(
        "@internal The container's project root, for path translation on the device: absolute, no '.' or '..' segments, no backslash, no control or format characters. Untrusted by the device all the same, which must containment-check every translated path."
      ),
    cwd: o()
      .max(HA)
      .regex(YA)
      .describe(
        "@internal The container's working directory at registration time, same shape as project_dir; may differ from it."
      ),
    worker_epoch: v().int().min(1).describe("@internal The worker life that answered.")
  })),
  ZEt = p(() =>
    Gr("status", [
      u({
        status: A("registered"),
        ...$A(),
        lease_s: v()
          .int()
          .min(1)
          .max(3600)
          .describe("@internal Effective lease in seconds after capping."),
        lease_expires_at: vH().describe(
          "@internal ISO 8601 UTC instant the lease expires (no offset), as Date.prototype.toISOString renders it."
        ),
        accepted: v()
          .int()
          .nonnegative()
          .describe("@internal Forwarded entries installed as callbacks."),
        ignored: v()
          .int()
          .nonnegative()
          .describe(
            "@internal Entries not installed: event not forwarded by this worker, unknown kind, malformed, or duplicate id."
          ),
        ignored_ids: T(o().regex(ko))
          .max(128)
          .optional()
          .describe("@internal Ids of the ignored entries."),
        templates: T(FA()).max(8).describe("@internal One row per requested template."),
        replaced_owner: o()
          .regex(_e)
          .optional()
          .describe(
            "@internal instance_id of a different device client this registration displaced, if any."
          ),
        away_since: vH()
          .optional()
          .describe(
            "@internal Present when THIS instance was being skipped as away (two forwarded runs went unanswered in a row) until this registration cleared it: the ISO 8601 UTC instant the worker stopped asking it. Absent for a first registration, a device that was never away, and a registration that displaces a different device."
          )
      }),
      u({
        status: A("unregistered"),
        ...$A(),
        ignored_ids: T(o().regex(ko))
          .max(128)
          .optional()
          .describe("@internal Ids of the ignored entries."),
        templates: T(FA()).max(8).optional().describe("@internal One row per requested template.")
      })
    ]).describe(
      "@internal Success payload answering register_device_hooks: 'registered' while this instance holds entries and a lease; 'unregistered' when an empty inventory removed them, or when nothing it sent could be held (every entry ignored, no template stored or installed) \u2014 then ignored_ids and templates say why."
    )
  ),
  jrr = p(() =>
    u({
      subtype: A("upload_device_hook_template"),
      template: o().regex(_e).describe("@internal Built-in template id."),
      digest: o()
        .regex(la)
        .describe(
          "@internal Lowercase hex sha256 of the decoded content; must be one of the worker's own table digests for this template."
        ),
      content_base64: o()
        .max(360000)
        .regex(n6o)
        .describe(
          "@internal The template script bytes, base64; decoded size must not exceed the template's cap (at most 256 KiB)."
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker epoch the sender believes it is talking to; a mismatch is refused so the device starts over against the new worker."
        )
    }).describe(
      "@internal Sent by a claude --cloud device client BEFORE register_device_hooks for each vetted template it wants run in the container; a register that arrives first reports awaiting_upload and the device registers again after uploading. The worker keeps the bytes for its own life only after hashing them against its own table; nothing executable is taken from the wire. Idempotent. Errors: hook_forwarding_disabled | hook_forwarding_not_ready (retryable) | stale_worker_epoch | invalid_upload | template_refused: unknown_template, version_mismatch, too_large or digest_mismatch."
    )
  ),
  MY = p(() =>
    u({
      template: o().regex(_e),
      digest: o().regex(la),
      status: B(["stored", "already_stored"])
    }).describe("@internal Success payload answering upload_device_hook_template.")
  ),
  Wrr = p(() =>
    u({
      subtype: A("remote_tools_announce"),
      instance_id: o()
        .regex(_e)
        .describe(
          "@internal Minted once per client process, stable across reconnects and re-announces: the owner key on the worker, which addresses its remote_tool_call requests to it. Same alphabet as register_device_hooks.instance_id."
        ),
      worker_epoch: v()
        .int()
        .min(1)
        .optional()
        .describe(
          "@internal The worker life the client believes it addresses; a mismatch is answered with a stale_worker_epoch error."
        ),
      host: me(o(), oe()).describe(
        "@internal The machine's description in the remote-tool protocol's HostDescription shape (name, kind, platform, working_dir, project_sync, limits, claude_code_version, epoch \u2014 epoch is required on this channel); parsed by that protocol, not here."
      ),
      tools: T(me(o(), oe()))
        .max(16)
        .describe(
          "@internal The native tools the machine serves, one entry each: {name (Bash, Read, Write, Edit), refused_input_fields, protocol_versions, description?, input_schema?} in the remote-tool protocol's AnnouncedTool shape. Entries are validated one by one by that protocol (a bad one is reported back in ignored_tools, the rest stand), so they are not typed here."
        ),
      passthrough: T(me(o(), oe()))
        .max(1024)
        .describe(
          "@internal The machine's own MCP tools ('<server>__<tool>'), one entry each: {name, local_name, description?, input_schema, annotations?, hints?} in the protocol's AnnouncedPassthrough shape, validated one by one like tools (an entry the worker cannot present as announced, or one beyond the most it keeps, is reported back in ignored_tools; a list longer than 1024 entries is an invalid announce); a worker that adopts them presents them to the model and forwards their calls to the machine over this channel."
        ),
      plumbing: T(o().min(1).max(64))
        .max(8)
        .describe(
          "@internal Plumbing tools the machine answers over remote_plumbing_call for the session's own machinery; never model-facing."
        )
    }).describe(
      "@internal Sent by a claude --cloud client that serves tools for this session: which machine it is and which tools it serves, replacing the device-bridge tools/list announcement. Re-sent on reconnect, on worker init and when what it serves changes; all three lists empty withdraws the machine (the keys are required so an omission is a parse error, not a withdrawal) \u2014 and from an instance the worker has not heard of, says the machine serves nothing. A first-party cloud worker acts on it only when the session service stamped the event as coming from a verified device of the account (device_attestation_status VERIFIED_BY_GATE or better); an announce below that floor is dropped unanswered. Errors (message starts with the code and a colon): remote_tools_disabled, remote_tools_not_ready (retryable), stale_worker_epoch, invalid_announce."
    )
  ),
  xY = p(() =>
    u({
      status: B(["announced", "withdrawn"]),
      worker_epoch: v().int().min(1).optional(),
      protocol_version: v()
        .int()
        .positive()
        .nullable()
        .describe(
          "@internal The wire version the worker will speak with this machine, or null when they have none in common: the machine stays listed and nothing is forwarded to it."
        ),
      passthrough_adopted: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Present on acknowledgements from a worker that adopts the machine's MCP tools over this channel: how many it kept from this announce (0 when it kept none \u2014 none carried, or none it could present; those are named in ignored_tools). Absent from a worker that does not adopt them (an older one, or one with adoption switched off) and while the worker cannot read the organisation's policy yet (passthrough_declined 'pending'); then the worker has taken none of these tools, and a machine connected to the device bridge keeps serving its MCP tools over it. Also absent from the reply to an announce marked 'still_here', and to one marked 'sleeping' when the worker reads that mark (any other worker answers it as an ordinary announce); such an announce changes nothing the worker took before."
        ),
      passthrough_declined: B(["policy", "pending", "unavailable"])
        .optional()
        .describe(
          "@internal Why the worker adopted none of the machine's MCP tools this announce carried. 'policy': the organisation's MCP server policy blocks the device bridge's server (or, in a session without one, an address it could have), the session is in safe mode, or the session has no such server and the worker cannot work out the address that server would have (for example, outside a CCR session); passthrough_adopted is 0, and the machine need not re-announce those tools. 'pending': the organisation's managed settings are still loading, so the tools wait for the machine's next announce; passthrough_adopted is absent, and a machine connected to the device bridge keeps serving its MCP tools over it meanwhile. 'unavailable': sent only by older workers, which adopted none when the session had no server for the device bridge; passthrough_adopted is 0, and the machine need not re-announce those tools. Absent otherwise."
        ),
      ignored_tools: T(o())
        .optional()
        .describe(
          "@internal Announced entries the worker did not adopt, at most 32 named: an unknown native name, a malformed or duplicate entry, or an MCP tool beyond the most it keeps, whose name it could not present as announced, whose name the session service keeps for itself, or whose input schema the API cannot take."
        ),
      worker_capabilities: T(o())
        .max(32)
        .optional()
        .describe(
          "@internal Optional protocol features this worker reads, named only to a machine whose announce lists the matching host capability: 'still_here' \u2014 an announce marked 'still_here' is noted and nothing is taken from it. Absent from a worker that reads none of what the machine listed; the machine then sends none."
        )
    }).describe("@internal Success payload answering remote_tools_announce.")
  ),
  nR = p(() =>
    yt({
      content: T(oe()),
      isError: M().optional(),
      structuredContent: me(o(), oe()).optional(),
      _meta: me(o(), oe()).optional()
    })
  ),
  da = p(() =>
    u({
      subtype: A("remote_tool_call"),
      instance_id: o()
        .regex(_e)
        .describe(
          "@internal The announcement this call is addressed to (remote_tools_announce.instance_id). A client that did not announce under this id stays silent: another attached client may own it."
        ),
      host: o()
        .max(64)
        .describe("@internal The machine's announced name; informational twin of instance_id."),
      name: o().min(1).max(256).describe("@internal The announced tool to run."),
      input: me(o(), oe()).describe(
        "@internal The tool's own input, without the machine argument and without the envelope; {} for an outcome query."
      ),
      envelope: me(o(), oe()).describe(
        "@internal The remote-tool protocol's request envelope, exactly what rides under the reserved arguments key on the device bridge: a call (call id = tool_use id, the session's permission mode, expiry, and on a second leg the session's answer to the machine's question) or an outcome query by its op. call_id is the serving side's run-at-most-once key across legs, redeliveries and queries; request_id is per leg. Parsed strictly by that protocol on the client."
      ),
      tool_use_id: o(),
      issued_at: v()
        .int()
        .nonnegative()
        .describe(
          "@internal Epoch milliseconds on the sender's clock \u2014 kept on the wire but informational only: the serving client judges lateness by how long the delivery waited on the session service's clock (the age its stream stamps on the event) against deadline_ms, never by issued_at on its own clock, and answers a late or undatable leg refused 'stale' \u2014 nothing runs \u2014 instead of leaving it unanswered. A durable catch-up into a fresh client still never runs an old call; the age check refuses it."
        ),
      deadline_ms: v()
        .int()
        .positive()
        .describe(
          "@internal How long after issued_at the worker waits for the answer before proceeding without it."
        )
    }).describe(
      "@internal One leg of a tool call this session forwards to the attached machine that announced it serves the tool: the first leg, the approval leg (envelope.approval), a detached decline, or an outcome query (envelope.op = 'outcome_of'). Answered with a control_response whose success payload is the served CallToolResult; cancelled with control_cancel_request. An error-shaped control_response is not an answer (an older attached client error-replies subtypes it does not know); the worker keeps waiting."
    )
  ),
  DY = p(() =>
    u({
      result: nR().describe(
        "@internal The served CallToolResult for this leg, verbatim as the machine's serving code produced it; structuredContent['anthropic/remoteToolExecution'] is the remote-tool protocol's ResultEnvelope (completed, refused, failed, needs_approval, acknowledged, in_progress), parsed by the worker with that protocol."
      )
    }).describe(
      "@internal Success payload answering remote_tool_call: the result under one fixed key, never spread at the top level."
    )
  ),
  ca = p(() =>
    u({
      subtype: A("remote_plumbing_call"),
      instance_id: o()
        .regex(_e)
        .describe(
          "@internal The announcement this call is addressed to; a client that did not announce under this id stays silent."
        ),
      host: o().max(64).describe("@internal The machine's announced name; informational."),
      name: o().min(1).max(64).describe("@internal An announced plumbing tool."),
      args: me(o(), oe()).describe(
        "@internal The plumbing tool's arguments; no envelope rides with them."
      ),
      issued_at: v().int().nonnegative(),
      deadline_ms: v().int().positive()
    }).describe(
      "@internal One call of a plumbing tool on the attached machine, made by this session's own machinery rather than the model: no envelope and no tool_use id. Answered with a control_response whose success payload carries that tool's CallToolResult; cancelled with control_cancel_request."
    )
  ),
  LY = p(() =>
    u({
      result: nR().describe("@internal The plumbing tool's CallToolResult, verbatim.")
    }).describe("@internal Success payload answering remote_plumbing_call.")
  ),
  ha = p(() =>
    u({
      subtype: A("remote_tools_probe"),
      instance_id: o()
        .regex(_e)
        .describe("@internal The announcement being probed; other clients stay silent."),
      issued_at: v().int().nonnegative(),
      deadline_ms: v().int().positive()
    }).describe(
      "@internal The worker's liveness check for an announced machine, sent only inside a live turn after minutes without hearing from it; a miss within deadline_ms marks the machine offline until it announces again or answers anything."
    )
  ),
  UY = p(() =>
    u({
      result: u({
        epoch: o().describe(
          "@internal The machine's current serving epoch (its announced host.epoch)."
        )
      })
    }).describe("@internal Success payload answering remote_tools_probe.")
  ),
  Grr = p(() =>
    u({
      subtype: A("remote_tools_reannounce"),
      worker_epoch: v()
        .int()
        .min(1)
        .describe(
          "@internal The asking worker's life, as the worker states it. A client ignores an ask below the newest worker epoch it has heard and never addresses its announce by this value: the announce goes to the epoch last heard, and the worker's stale_worker_epoch answer teaches the client the current one."
        ),
      deadline_ms: v()
        .int()
        .positive()
        .describe(
          "@internal How long the worker waits for an announcement; a client that receives the request later than this after the session service stored it does nothing."
        )
    }).describe(
      "@internal A replacement worker asks the attached client that serves this session's tools to announce it, when a call names a machine its roster lacks. Not addressed to an instance: the worker knows none. A client that serves the machine announces, overriding once what it believes the worker already holds; it honours one ask per epoch, another only when the announce that one made failed or went unanswered, and at most one per ten seconds, and does nothing for an ask it cannot date or read, or whose sender it would refuse a tool call from. Any other client, and a client that predates the request, does nothing or error-replies, and the worker reads no reply: it withdraws the request with control_cancel_request when its wait ends."
    )
  ),
  dqe = p(() =>
    u({
      subtype: A("turn_handoff"),
      messages: T($e([un(), pn()]))
        .min(1)
        .max(200)
        .describe(
          "@internal The turn so far, in conversation order: the user's message, any [assistant, tool_result] rounds already answered elsewhere, and last an assistant message (thinking blocks with their signatures, text, and the tool_use blocks to run). Every message carries a uuid, kept as the transcript line's; none of the messages, and none of the tool_use ids they hold, may already be in the conversation \u2014 the turn is appended once, whole, never merged with lines already there (except as tool_use_ids describes for a turn that runs nothing). No two assistant messages share a message id, among these or with the conversation, with one exception, for a worker whose turn_handoff entry has shared_message_id: an assistant message that holds tool_use blocks only may repeat the id of the assistant message before it where every message between them, at least one, holds only tool_result blocks for that earlier message's calls. The two are then sent to the model as one message, its calls followed by their results, so a client does this only for calls of one Messages API response that it ran one after another. A request that names calls to run is refused (invalid_handoff) unless its first message is a user message, not empty and not a tool_result."
        ),
      tool_use_ids: T(o())
        .max(16)
        .describe(
          "@internal The tool_use blocks of the last message to run, each of a tool named in the turn_handoff entry of the worker external_metadata; all run in one batch, then the model continues once. May be empty, and then nothing runs and no model turn follows: with every call the turn carries answered within it (the last message holding none), the worker appends the turn as history and, once the lines are stored, echoes the last assistant message that holds a call; with stopped, the user stopped the turn before its calls ran. In both cases, when a leading part of the turn is already in the conversation from an earlier delivery, only the rest is appended; where its first assistant message repeats the id of the last one already there, as messages allows, the two are sent to the model as one message."
        ),
      stopped: A(!0)
        .optional()
        .describe(
          "@internal Only true, and only with an empty tool_use_ids: the user stopped this turn while its last message, an assistant message holding calls that have not run, was being handed over. The worker appends the turn, closes those calls and marks the turn exactly as when a turn of its own is stopped before a call runs, and ends it with the result a stopped turn ends with; when an earlier delivery already appended the turn, the calls are closed in place."
        ),
      relay_marker: u({
        type: A("system"),
        subtype: A("upgrade_relay_marker"),
        uuid: o(),
        content: o()
      })
        .optional()
        .describe(
          "@internal The system line that starts the prompt-cache relay for this conversation: uuid is the line's uuid, and content is the marker, a JSON string whose anchor_line_uuid is the uuid of the first of messages; other fields of the line are ignored. Only a worker that advertises relay_marker: true in turn_handoff_available uses it, on a request that names calls to run, or on a history request (no calls named, not stopped) if the session holds none of its messages yet. It is never a reason to refuse the turn: when the member is not such a line, or the worker does not use the marker, the request is answered as without it."
        ),
      memory_context: u({ uuid: o(), version: o().nullable(), content: o().nullable() })
        .optional()
        .describe(
          "@internal The snapshot of the user's claude.ai memory that the client showed its model with the turn's user message. Used on a request that names calls to run, or on a history request (no calls named, not stopped) if the session holds none of its messages yet: the worker writes it ahead of the first of messages, with uuid as the line's uuid, as a cowork_memory_context attachment line like those it writes for snapshots it fetches itself, and then adds no copy of that version. version and content are both strings for a snapshot, both null to withdraw an earlier one. The member is never a reason to refuse the request: one that is malformed, that has a version without content or the reverse, or whose uuid is also that of one of messages, of relay_marker or of a line the session's transcript holds, is ignored, and the turn goes on without the line."
        ),
      message_client_platform: o()
        .optional()
        .describe(
          "@internal The `anthropic-client-platform` value of the app a person sent the first of messages from. Left out when no person sent that message, as in a scheduled run. When it names one of the Remote Control apps (isRemoteControlAppPlatform) and that message is not one from another session, the worker marks the message as sent by a person, as it marks a user message that arrives with that value, so the turn counts as started by a person for the calls it runs and for those the model makes afterwards, and the turn the worker runs carries that value as its client platform, as a turn for such a user message does (per-turn telemetry, and tools that read which app the person is on). The member is never a reason to refuse the request: without it, or with any other value, the message is appended unmarked and the turn carries no platform."
        ),
      file_names: T(u({ file_uuid: o(), name: o() }))
        .max(16)
        .optional()
        .describe(
          "@internal Files a person attached to the conversation, each with the name the client showed its model for it, the most wanted first; at most 16. file_uuid is that of a file_attachments entry on a user message sent to this worker before the request. Only a worker that advertises file_names: true in turn_handoff_available uses the member, only on a request that names calls to run, and only when those calls run in the session's home directory: before they run, it copies each listed file it has downloaded into that directory, under that name, until a limit on time or on total size is reached, taking first the names that occur in the calls' own input. It replaces nothing then, skips a name it refuses or that the list holds twice, and, within one request, skips the further names of a file once it has found or placed one of them. If a person later sends another file under a name it placed, it puts that file's bytes in the copy's place, or removes the copy if it cannot, and only while the copy is still the file it placed, unchanged. The member is never a reason to refuse the request: a malformed one (a longer list included) is ignored whole, and the calls run whatever became of the copies."
        )
    }).describe(
      '@internal Sent by the session client to a worker that advertises turn_handoff in its external_metadata: hand over a turn whose final assistant message holds tool calls that have not run. The worker answers at once \u2014 success {status: "accepted"} (validated and queued; the messages are appended at the start of the turn that runs the calls, the last one echoed back as an assistant event before any call runs; a request that runs nothing (see tool_use_ids) for the same turn as one still queued to run replaces it), success {status: "duplicate"} (every named call is already taken by an earlier delivery or answered; nothing runs \u2014 taken, not necessarily ran; or, for a turn that runs nothing, its calls are already answered by other lines, or the same turn is already pending in that shape or running), or an error whose message starts with its code and a colon: turn_handoff_disabled, invalid_handoff, unsupported_tool, unknown_tool, recovered_by_restart (this worker restarted after the turn was appended and its recovery set the turn\'s unrun calls aside; this request will not run or close them), expired (the request names calls to run and the session service has held it for over 30 minutes, by the created_at of the frame that delivered it: the service hands a request that no worker answered to every later worker of the session; nothing is appended or taken, and a request that runs nothing is never refused for its age). Accepted calls get the permission evaluation of the worker (rules, the permission mode, can_use_tool to the client); their tool_result messages and the model continuation follow on the event stream as in any turn.'
    )
  ),
  VY = p(() =>
    u({
      status: B(["accepted", "duplicate"]),
      tool_use_ids: T(o())
        .optional()
        .describe("@internal The calls queued to run (status accepted).")
    }).describe("@internal Success payload answering turn_handoff.")
  ),
  ua = p(() =>
    u({ subtype: A("mcp_message"), server_name: o(), message: ZA() }).describe(
      "Carries one MCP JSON-RPC message for an SDK-hosted MCP server (one named in initialize.sdkMcpServers or added later with mcp_set_servers). Flows in both directions: the CLI sends it to the client to reach the in-process server, and the client sends it to the CLI to deliver that server's own messages. When the client answers, the success response carries the server's JSON-RPC reply under mcp_response; the CLI acknowledges a client-sent one with an empty success."
    )
  ),
  jY = p(() =>
    u({
      mcp_response: ZA()
        .optional()
        .describe(
          "The JSON-RPC response the SDK-hosted server produced for the delivered message (for a JSON-RPC notification, a response with an empty result). Present when the client answers a CLI-sent mcp_message; absent when the CLI acknowledges a client-sent one."
        )
    }).describe("Success payload answering an mcp_message request.")
  ),
  pa = p(() =>
    u({ subtype: A("mcp_set_servers"), servers: me(o(), cn()) }).describe(
      "Replaces the set of dynamically managed MCP servers."
    )
  ),
  qY = p(() =>
    u({ added: T(o()), removed: T(o()), errors: me(o(), o()) }).describe(
      "Result of replacing the set of dynamically managed MCP servers."
    )
  ),
  ma = p(() =>
    u({
      subtype: A("reload_plugins"),
      hold_on_cache_impact: M()
        .optional()
        .describe(
          "When true, the reload is not applied if applying it would change the session's tool list while the conversation's prompt cache depends on that list (the same check the interactive /reload-plugins makes before it asks for --force): the response then carries held: true and cache_impact, and the session keeps its current plugins. Default false: apply unconditionally."
        ),
      add_plugins: T(irt())
        .optional()
        .describe(
          "Plugins for the reload to load as well, in the same shape as the SDK `plugins` option: each entry joins the session as one more --plugin-dir would (--plugin-dir-no-mcp when skipMcpDiscovery is set). Plugins already loaded stay; nothing is removed. A held or failed reload adds none of them. Refused for a malformed list or a path that is not absolute, when managed settings set disableSideloadFlags, on a connection whose frames persist server-side (any Remote Control or cloud worker), in a cloud-hosted session, and when a running sandbox cannot keep shell commands out of the folders (always on Windows)."
        )
    }).describe("Reloads plugins from disk and returns the refreshed session components.")
  ),
  GY = p(() =>
    u({
      commands: T(Wt()),
      agents: T(co()),
      plugins: T(
        u({ name: o(), path: o(), source: o().optional(), version: o().optional().describe(mo) })
      ),
      mcpServers: T(lo()),
      error_count: v().int(),
      held: M()
        .optional()
        .describe(
          "Present only when the request asked to hold on cache impact and this CLI ran the check. True: the reload was not applied, the lists above describe the session as it still is, and cache_impact says what applying would change. False: the check found no impact and the reload was applied. Absent: the request did not ask, or the CLI predates the option and applied the reload unchecked."
        ),
      cache_impact: u({
        mcp_servers_added: T(o()),
        mcp_servers_removed: T(o()),
        lsp_tool_change: B(["adds", "may-add", "removes", "may-remove"]).nullable()
      })
        .optional()
        .describe(
          "What applying the held reload would change in the session's tool list: plugin MCP servers it would register or drop (scoped plugin:<plugin>:<server> names, plugin-authored \u2014 validate before showing) and whether it would add or remove the LSP tool (the may- forms mean the preview could not fully see the pending plugin set). Present only with held: true."
        )
    }).describe("Refreshed commands, agents, plugins, and MCP server status after reload.")
  ),
  _a = p(() =>
    u({ subtype: A("reload_skills") }).describe(
      "Reloads skills from disk and returns the refreshed skill list."
    )
  ),
  BY = p(() => u({ skills: T(Wt()) }).describe("Refreshed skill commands after reload.")),
  ga = p(() =>
    u({ subtype: A("reload_output_styles") }).describe(
      "Re-reads the output-style directories from disk (a style file written mid-session is otherwise invisible until the next session) and returns the refreshed style names. Also drops the shared markdown-file scan cache, so agents, skills and routines re-read their directories on their next use."
    )
  ),
  KY = p(() =>
    u({ available_output_styles: T(o()) }).describe(
      "Refreshed output style names after reload, built-in and custom, in the order the initialize response lists them."
    )
  ),
  fa = p(() =>
    u({
      subtype: A("register_repo_root"),
      directory: o(),
      reload_claude_md: M().optional(),
      reload_plugins: M().optional(),
      reload_skills: M().optional()
    }).describe(
      "Add a directory as a working-directory root and optionally reload CLAUDE.md, skills, and plugins. The directory must resolve to a strict subdirectory of cwd, or of a directory passed at launch via --add-dir / the SDK additionalDirectories option. A directory that is already a registered working directory (including a duplicate of an earlier request) is denied with an error; the registration pipeline and DirectoryAdded hooks do not re-run."
    )
  ),
  HY = p(() =>
    u({
      directory: o().describe(
        "The registered root. A resolved absolute path \u2014 except on connections that persist frames server-side (the local bridge-worker lane echoes the request directory verbatim; the registration is still keyed on the resolved path locally)."
      )
    }).describe("Success payload answering register_repo_root.")
  ),
  ba = p(() =>
    u({
      subtype: A("set_cwd"),
      path: o().describe(
        "Target directory. Tilde-expanded and realpath-canonicalized by the CLI, exactly like an interactive /cd argument."
      ),
      trust_accepted: M()
        .optional()
        .describe(
          "Host attestation that the user explicitly accepted a trust dialog for this directory. Only send true after showing one \u2014 the CLI records the directory as trusted (the same latch /cd's own prompt writes) before relocating. Requires trusted_directory."
        ),
      trusted_directory: o()
        .optional()
        .describe(
          "Required whenever trust_accepted is true: the exact directory string from the needs_trust response being answered. This pins the attestation to the canonical path the user was shown \u2014 if the raw path canonicalizes differently by the time the re-send arrives (e.g. a symlink component changed during the dialog), nothing is latched and a fresh needs_trust carries the new canonical directory."
        )
    }).describe(
      "@internal Moves the session to a new working directory \u2014 the headless twin of /cd, for SDK hosts like Claude Desktop. Runs the same validation, Cd(...) permission rules, and relocation path as the interactive command, with the trust prompt delegated to the host via the needs_trust response arm. Before the first turn the move re-anchors start-of-session state (the first request is built as for a start in the new directory, no move notice); after a turn the prefix is preserved and the move arrives as an appended notice. SessionStart hooks are never re-run by set_cwd (those of the launch directory already ran and their output stays in the session); a host that starts the process before its directory is known should use --await-claim and claim_session, which run them in the bound directory instead. Rejected while a turn is in flight."
    )
  ),
  FY = p(() =>
    Gr("status", [
      u({
        status: A("ok"),
        cwd: o().describe("Canonical (realpath) working directory the session now runs in."),
        changed: M().describe(
          "False when the target already was the working directory \u2014 a successful no-op with no side effects."
        ),
        transcript_relocated: M().describe(
          "True when the transcript lives in the project slot derived from cwd (the normal case, and the no-op case). False only on the documented edge where the move completed but the transcript move failed AND the rollback chdir failed \u2014 a cwd-derived resume lookup will then miss the session."
        )
      }),
      u({
        status: A("needs_trust"),
        trust_root: o()
          .optional()
          .describe(
            "Present when `directory` sits inside a git repository whose canonical root differs from it (a subdirectory or a linked worktree). Accepting trust grants that whole repository \u2014 every subdirectory and linked worktree of the root \u2014 so the trust dialog should name this root alongside `directory`. Informational only: the attestation echo still pins `trusted_directory` to `directory`. Vetted by the same visible-glyph rule as `directory`; a canonical root that fails it is omitted rather than carried."
          ),
        directory: o().describe(
          "Canonical target directory. Nothing changed; show a trust dialog for exactly this string and, on accept, re-send with trust_accepted: true and trusted_directory echoing it verbatim. Safe to render verbatim in the dialog, by construction: every character is a visible, space-distinguishable glyph. Targets whose canonical path contains control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points are rejected (reason: unsafe_path) before this arm can carry them."
        )
      }),
      u({
        status: A("rejected"),
        reason: B([
          "not_found",
          "not_a_directory",
          "blocked_by_rule",
          "busy",
          "unsafe_path"
        ]).describe(
          "unsafe_path: the target's canonical path contains characters that do not render as visible, space-distinguishable glyphs \u2014 control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points; rejected fail-closed before the trust round-trip, and the offending path is never echoed back."
        ),
        message: o().describe("Human-readable, ANSI-free explanation.")
      })
    ]).describe(
      "@internal Result of a set_cwd request. Every non-ok outcome leaves the working directory unchanged \u2014 but trust may already have been durably recorded when the request carried a valid attestation (a busy rejection or relocation failure after the latch does not unlatch it; the consent was for the directory, not the attempt). Internal failures (e.g. the transcript move failed and was rolled back) arrive as a control_response error instead."
    )
  ),
  zrr = p(() =>
    u({
      subtype: A("claim_session"),
      cwd: o().describe(
        "The session's working directory. Tilde-expanded and realpath-canonicalized; treated exactly like the cwd a process is spawned in (no trust prompt, no Cd(...) rule check) \u2014 the host chose it, as it chooses a spawn cwd."
      ),
      env: me(o(), o())
        .optional()
        .describe(
          "Per-session environment additions. Only keys on the claim allow-list are accepted (keys the process has already consumed \u2014 config dir, base URL, proxy/TLS, provider, telemetry, entrypoint \u2014 must be part of the spare's spawn env); any other key rejects the claim and leaves the spare parked."
        ),
      additional_directories: T(o())
        .optional()
        .describe("Extra directories the session may access, as --add-dir."),
      permission_mode: o()
        .optional()
        .describe(
          "Session permission mode, as --permission-mode. Part of the claim (not a follow-up set_permission_mode) so that a mode the process cannot take \u2014 bypassPermissions on a spare spawned without --allow-dangerously-skip-permissions, a mode this build does not know, one the claimed directory's settings disable \u2014 refuses or fails the claim instead of letting the first turn run under the spare's mode."
        ),
      system_prompt: T(o()).optional().describe("As initialize.systemPrompt."),
      append_system_prompt: o().optional().describe("As initialize.appendSystemPrompt."),
      agents: me(o(), oe()).optional().describe("As initialize.agents."),
      title: o().optional().describe("As initialize.title."),
      sdk_mcp_servers: T(o())
        .optional()
        .describe(
          "The session's final set of in-process SDK MCP server names. Diffed against the set registered while parked: new names are connected, missing ones disconnected. Omitted: the parked set stays."
        ),
      include_initialize: M()
        .optional()
        .describe(
          "When true the ok response also carries the payload an initialize response would (commands, agents, models, account \u2026) computed for the claimed directory, for hosts that render them."
        ),
      workspace_trust: u({ accepted: M(), directory: o() })
        .optional()
        .describe(
          "As initialize.workspaceTrust, for a claimed spare: the host's attestation that the user accepted a trust dialog for the session's folder, judged against the claimed cwd once the spare has moved there, by the same rule (honored only from the process that owns the CLI's stdin, and only when `directory` resolves to that folder's trust key). A spare's own initialize arrives in its parking directory and records nothing, so a host that attests sends it here. workspace_trust_recorded in the response (and in the returned initialize payload) reports the outcome."
        )
    }).describe(
      "@internal Binds a parked spare (a process started with --await-claim in a neutral directory with the host-level options) to its session: relocates it to cwd as if it had been spawned there, applies the per-session prompt options and in-process MCP server set, starts the SessionStart hooks, and registers the session. Model, thinking budget and flag-settings overlays are not claim fields: send set_model / set_max_thinking_tokens / apply_flag_settings right behind the claim; the control loop applies them in order before it reads the first message. A set_model that arrives before the first message is applied the way --model is at start-up: it writes no /model entries to the transcript and makes no extra API call to confirm a model id the local checks accept. Accepted once, only on a parked spare, only before any turn. A request that fails validation is refused before anything is touched and leaves the spare parked; a failure after that point leaves the spare unusable (discard it)."
    )
  ),
  WY = p(() =>
    u({
      status: A("ok"),
      cwd: o()
        .optional()
        .describe(
          "Canonical working directory the session now runs in (omitted when the canonical path carries invisible or non-printing characters, which are never echoed)."
        ),
      session_id: o(),
      parked_ms: v().optional().describe("How long the spare was parked before this claim."),
      sdk_mcp_settled: M().describe(
        "Whether the in-process SDK MCP handshakes registered while parked had completed when the claim arrived (false: the first turn still waits for them)."
      ),
      initialize: me(o(), oe())
        .optional()
        .describe(
          "Present when include_initialize was true: the initialize-shaped payload for the claimed session."
        ),
      workspace_trust_recorded: M()
        .optional()
        .describe(
          "As initialize's workspace_trust_recorded: present when the claim came from the process that owns the CLI's stdin and carried workspace_trust with accepted true and an absolute directory; true when the claimed folder is now recorded as trusted (or already was), false when the attestation was not honored."
        )
    }).describe(
      "@internal Result of a successful claim_session. Failures arrive as a control_response error whose message starts with a reason token (not_a_spare, already_claimed, busy, turn_started, env_key_not_claimable:<KEY>, cwd_not_found, cwd_not_a_directory, \u2026); the spare stays parked after any of them."
    )
  ),
  Ea = p(() =>
    u({ subtype: A("mcp_reconnect"), serverName: o() }).describe(
      "Reconnects a disconnected or failed MCP server."
    )
  ),
  Sa = p(() =>
    u({ subtype: A("mcp_toggle"), serverName: o(), enabled: M() }).describe(
      "Enables or disables an MCP server."
    )
  ),
  Ta = p(() =>
    u({
      subtype: A("mcp_read_resource"),
      serverName: o().describe("Server name, as mcp_status reports it (not normalized)."),
      uri: o().describe(
        "The resource to read. Must use the ui:// scheme; any other URI is refused."
      )
    }).describe(
      'Reads one MCP Apps (SEP-1865) UI resource \u2014 a `ui://` URI, typically the `_meta.ui.resourceUri` a tool declares \u2014 from a connected MCP server the CLI itself dialed, with `resources/read`, for a host that renders it. Read-only and no model turn. The reply is untrusted third-party content (HTML): render it sandboxed. SDK-type MCP servers (config.type === "sdk") are rejected \u2014 they are caller-provided, so the caller can read them directly. Errors name the cause: a non-ui:// URI, an unknown server, a server that managed policy blocks, that is disabled or that the project has not approved (the refusals mcp_reconnect gives), a server that is not connected (failed, pending or needs-auth: send mcp_reconnect; a connected server, or one still listed from the discovery cache, is read through the same connect path a tool call takes), a response over the size limit, or the server\'s own resources/read error. Refused on a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker) and by the client of a cloud-hosted session. Advertised as `mcp_read_resource_v1` in system/init.capabilities.'
    )
  ),
  YY = p(() =>
    u({
      contents: T(
        u({
          uri: o(),
          mimeType: o().optional(),
          text: o().optional(),
          blob: o().optional().describe("Base64, for a binary item."),
          _meta: me(o(), oe())
            .optional()
            .describe(
              "The content item's own `_meta` as the server sent it (MCP Apps puts the resource's `ui.csp` and `ui.permissions` here), minus keys under the CLI-reserved `com.anthropic/` prefix."
            )
        })
      )
    }).describe("The server's resources/read result for an mcp_read_resource request.")
  ),
  wa = p(() =>
    u({
      subtype: A("set_mcp_permission_mode_override"),
      serverName: o(),
      mode: de().nullable(),
      askForTools: T(u({ name: o().regex(Avn) }))
        .max(Nqt)
        .nullish()
        .describe(
          "@internal With mode 'default': tools of this server, named without the mcp__<server>__ prefix (a name sent with it is stored without it; the 64-character limit applies to the name as sent), that must ask even where the tool would otherwise allow itself (today only Claude in Chrome's safe permissionless tools, e.g. tabs_context_mcp). Held beside the pin: a clear, an 'auto' pin, or a pin sent without this member (or with null or an empty list) removes the list, silently. A list of the wrong shape is refused and changes nothing."
        )
    }).describe(
      "@internal Pin (or clear, with mode:null) an MCP server's per-tool permission-mode override. Tighten-only over this channel: only 'default', 'auto', or null are accepted (clampControlChannelOverride); any other mode is rejected without changing state. The override substitutes for the session mode at every per-tool engine decision (effectiveModeForTool) \u2014 and only when the session mode would already auto-allow \u2014 so e.g. a server can be held at 'default' or routed through the auto-mode classifier under global bypassPermissions."
    )
  ),
  XA = () => o().regex(/^[A-Za-z0-9-]{1,64}$/),
  Krr = p(() =>
    u({
      subtype: A("set_chrome_browser_hints"),
      preferredDeviceId: XA().nullable().optional(),
      localDeviceIds: T(XA()).max(32),
      hostPlatform: B(["darwin", "win32", "linux"]).optional()
    }).describe(
      "@internal The host's view of which Claude in Chrome browser this session should use when several are connected to the account: `preferredDeviceId` is the browser its user picked last on that computer, `localDeviceIds` the relay device ids it knows to be running on that computer right now, `hostPlatform` that computer's OS (for the weaker same-OS label). Session memory only, never persisted; the built-in claude-in-chrome server reads them as its persisted pick and its on-this-computer set, so it defaults to that browser instead of asking. Hints only: nothing is selected unless it is in the live relay roster, and an empty list clears them."
    )
  ),
  Vrr = p(() =>
    u({ subtype: A("set_prompt_suggestions_paused"), paused: M() }).describe(
      "@internal Pauses (true) or un-pauses (false) the session's prompt suggestions at runtime, for a host whose composer is not on screen: while paused, no turn end starts a suggestion, and the first turn end after paused is set back to false does. The state is one boolean in this CLI process, on top of the initialize request's promptSuggestions option and the user's own setting, neither of which it changes: a respawned or resumed session starts unpaused, so the host must send it again, and with two clients attached one client's pause applies to both. Acknowledged with an empty success; a CLI build where this is not yet enabled acknowledges and keeps generating, and an older CLI answers an unknown-subtype error."
    )
  ),
  ya = p(() => u({ subtype: A("stop_task"), task_id: o() }).describe("Stops a running task.")),
  Aa = p(() =>
    u({
      subtype: A("background_tasks"),
      tool_use_id: o()
        .optional()
        .describe(
          "When set, backgrounds only the task whose originating tool_use block has this id. When omitted, backgrounds all foreground tasks (Ctrl+B semantics)."
        )
    }).describe(
      'Backgrounds in-flight foreground tasks (Bash commands and subagents). With tool_use_id, targets the single task started by that tool_use block; without it, backgrounds all foreground tasks \u2014 the control-request equivalent of pressing Ctrl+B in the terminal. Each blocking tool call returns immediately with a "running in the background" tool_result and the turn continues; the task keeps running and emits a task_notification when it settles.'
    )
  ),
  $Y = p(() =>
    u({
      backgrounded: M()
        .optional()
        .describe(
          "Present only when the request named a tool_use_id: whether a matching foreground task was found and backgrounded. Empty object when all foreground tasks were backgrounded."
        )
    }).describe("Success payload answering background_tasks.")
  ),
  Ra = p(() =>
    u({
      subtype: A("get_task_output"),
      task_id: o().describe(
        "A shell or Monitor task of this session, running or ended: the task_id from task_started or background_tasks_changed."
      )
    }).describe(
      "Reads the end of one background shell or Monitor task's output: at most the last 8 KiB the command wrote, the same tail the terminal's /tasks detail view reads. Read-only and no model turn; a host polls it while the task runs, and can read it once more after the task ends. The output is whatever the command printed, escape sequences included: render it as plain text. Refused for a task_id that is neither a shell or Monitor task of this session nor shaped like one (an ended task's id whose file is gone reads as empty), and on a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker)."
    )
  ),
  XY = p(() =>
    u({
      output: o().describe(
        "The end of the output, decoded as UTF-8; empty when the command has written nothing yet."
      ),
      total_bytes: v().describe("The size of the whole output in bytes."),
      truncated: M().describe(
        "Whether output holds only the end of a longer output (the last 8 KiB)."
      )
    }).describe("Success payload answering get_task_output.")
  ),
  va = p(() =>
    u({ subtype: A("apply_flag_settings"), settings: me(o(), oe()) }).describe(
      "Merges the provided settings into the flag settings layer, updating the active configuration."
    )
  ),
  ka = p(() =>
    u({ subtype: A("get_settings") }).describe(
      "Returns the effective merged settings and the raw per-source settings."
    )
  ),
  za = p(() =>
    u({
      subtype: A("update_settings"),
      source: B(["localSettings", "userSettings"]).describe(
        "Which settings file to write: the project's local settings file, where /config's writes land, or the user's settings file, which takes effortLevel only."
      ),
      settings: me(o(), oe())
    }).describe(
      "Writes settings through the CLI's own writer. For localSettings, merges the given keys into the project's local settings file (canonical store root, gitignore upkeep, hardened write) and live-applies them \u2014 the same path /config uses; allowlist: outputStyle. For userSettings, takes effortLevel only and saves it as the default for the session's current model, under modelSettings as /effort saves it ('max' is session-only and is not written; the running session's level is not set here \u2014 send apply_flag_settings for that). Unlike apply_flag_settings, which only touches the session-scoped flag layer. Each file feeds hook and permission-rule loading, so each allowed key is a security decision. String values only (key deletion is not supported); refused on remote transports and in sessions whose --setting-sources exclude the target source."
    )
  ),
  QY = p(() =>
    u({
      effective: me(o(), oe()),
      sources: T(
        u({
          source: B([
            "userSettings",
            "projectSettings",
            "localSettings",
            "flagSettings",
            "policySettings"
          ]),
          settings: me(o(), oe())
        })
      ).describe("Ordered low-to-high priority \u2014 later entries override earlier ones."),
      applied: u({
        model: o(),
        effort: B(["low", "medium", "high", "xhigh", "max"]).nullable(),
        advisor: o()
          .nullable()
          .optional()
          .describe(
            "Advisor model that will be attached to API requests, after enablement, allowlist, and pairing validation. Null when none will be attached; absent on workers that predate the field."
          ),
        ultracode: M()
          .optional()
          .describe(
            "Whether ultracode (standing dynamic-workflow orchestration, at any effort level) is active for the session. Set per session via the `ultracode` settings key (--settings or apply_flag_settings)."
          ),
        ultracodeRequested: M()
          .optional()
          .describe(
            "Whether ultracode is requested for the session (the `ultracode` settings key or /effort ultracode), whether or not it can take effect (see `ultracodeAvailable`). `ultracode` reports whether it is in effect."
          ),
        ultracodeAvailable: M()
          .optional()
          .describe(
            "Whether ultracode can be turned on for the session: dynamic workflows are enabled and the model supports it. Hosts should offer an Ultracode control only while this is true."
          )
      })
        .optional()
        .describe(
          "Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API."
        ),
      errors: T(mn())
        .optional()
        .describe(
          "Settings parse and validation errors. When non-empty, the listed files were skipped during the merge above \u2014 their settings are not reflected in `effective` or `sources`."
        ),
      remote_control_policy_lock_reason: o()
        .optional()
        .describe(
          "@internal Why org policy or managed settings lock `remoteControlAtStartup`; absent when allowed. Fails closed while the policy is unverified."
        )
    }).describe("Effective merged settings plus raw per-source settings in merge order.")
  ),
  Ca = p(() =>
    u({ subtype: A("get_hooks_listing") }).describe(
      "Returns the hooks listing the CLI's read-only /hooks menu renders: settings-file, session, and plugin hooks grouped by event and matcher, with display-ready strings (control characters revealed) and the policy and safe-mode state the menu banners on. A snapshot at request time; hosts re-request when their surface opens."
    )
  ),
  JY = p(() =>
    u({
      events: T(
        u({
          name: o().describe("Hook event name."),
          summary: o().describe("One-line summary, as the /hooks event list shows."),
          supportsMatcher: M().describe("Whether hooks on this event can carry a matcher."),
          hookCount: v().describe("Number of listed hooks.")
        })
      ).describe(
        "Events that have at least one listed hook, in the /hooks menu\u2019s lifecycle order."
      ),
      hooks: T(
        u({
          event: o(),
          matcher: o().describe(
            "Matcher with control characters revealed; '' when the entry has none."
          ),
          source: o().describe("Raw source name (userSettings, sessionHook, pluginHook, \u2026)."),
          sourceLabel: o().describe("User-facing source description."),
          pluginName: o().optional(),
          type: o().describe("Hook type (command, prompt, agent, http, mcp_tool, \u2026)."),
          displayText: o().describe(
            "List-row label: statusMessage when set, else the identity text; one line, control characters revealed."
          ),
          commandText: o().describe(
            "Identity text \u2014 the literal command/prompt/URL that runs, control characters revealed."
          ),
          contentLabel: o().describe("Label for commandText (Command, Prompt, URL, \u2026)."),
          condition: o().optional().describe("If-condition, revealed, when set."),
          timeout: v().optional().describe("Timeout in seconds."),
          statusMessage: o().optional(),
          runsOnce: M().optional(),
          runsInBackground: M().optional(),
          disabled: A(!0)
            .optional()
            .describe(
              "True when the session's mode or policy keeps this hook from running (the policy block and safeMode/bareMode say why); absent on rows that run."
            ),
          editable: u({ matcher: o(), config: me(o(), oe()), headersRedacted: A(!0).optional() })
            .optional()
            .describe(
              "The entry as stored (raw matcher, '' when none, and raw hook object; no display escaping) for a host's edit form and as the target it names to `claude edit-hook`. Only on rows from a settings file this session reads and may write. HTTP header values are blanked (headersRedacted); a replace that sends no headers keeps the stored ones."
            )
        })
      ).describe(
        "One row per listed hook: events in lifecycle order, matchers in the menu\u2019s priority order."
      ),
      eventCatalog: T(u({ name: o(), summary: o(), supportsMatcher: M() })).describe(
        "Every hook event in lifecycle order (name, the /hooks summary, whether its hooks take a matcher), for an add-hook form."
      ),
      policy: u({
        disabledByPolicy: M().describe("Managed disableAllHooks \u2014 nothing runs at all."),
        managedOnly: M().describe(
          "Managed allowManagedHooksOnly \u2014 non-managed hooks are blocked and managed hooks are intentionally not listed."
        ),
        pluginOnly: M().describe("Managed strictPluginOnlyCustomization locks the hooks surface."),
        allDisabled: M().describe("Effective disableAllHooks, whatever source set it."),
        policyHookCount: v().describe(
          "Hooks configured in managed settings (they run even under a non-managed disableAllHooks)."
        ),
        policyUnreadable: A(!0)
          .optional()
          .describe(
            "Present when a managed settings source exists but could not be read: what the organization configured is unknown, so edit_hook refuses every edit (fail-closed) and a host locks its editing controls, as it does under the three locks above."
          )
      }),
      safeMode: u({
        managedHooksStillApply: M(),
        exitHint: o().describe("How to leave safe mode, per its activation source.")
      })
        .optional()
        .describe("Present only when the session runs under --safe-mode."),
      bareMode: u({ exitHint: o().describe("How to leave bare mode, per its activation source.") })
        .optional()
        .describe(
          "Present only under --bare / CLAUDE_CODE_SIMPLE with the hooks surface gated off: settings-file, flag, policy, and plugin hooks never fire there; session hooks still run."
        ),
      errors: T(mn())
        .optional()
        .describe(
          "Settings files skipped by the merge \u2014 their hooks are neither listed nor running."
        )
    }).describe("The hooks listing the CLI's /hooks menu renders, with display-ready strings.")
  ),
  Oa = p(() =>
    u({ subtype: A("list_permission_rules") }).describe(
      "Requests the session's live permission rules and workspace directories \u2014 the same data /permissions lists in the terminal: rules from settings files plus session-only approvals, slash-command grants, and --allowedTools flag rules, each with its source."
    )
  ),
  ZY = p(() =>
    u({ prefix: o(), emphasis: o().optional(), suffix: o().optional() }).describe(
      `The CLI's plain-language reading of a rule (e.g. "Any Bash command starting with npm run"), split into parts so hosts can render the rule-derived fragment the way the terminal does (bold). prefix and suffix are fixed words; emphasis is rule content \u2014 apply display hygiene (invisible-character escaping) before rendering it.`
    )
  ),
  e1 = p(() =>
    u({
      behavior: B(["allow", "deny", "ask"]),
      source: B([
        "userSettings",
        "projectSettings",
        "localSettings",
        "flagSettings",
        "policySettings",
        "cliArg",
        "command",
        "session",
        "toolsNarrowing",
        "mcpServerPolicy",
        "hostCredential"
      ]).describe(
        "Where the rule comes from. Mirrors PermissionRuleSource (permissionRuleLookup.ts PERMISSION_RULE_SOURCES); the parity test in test/cli/headlessControl/listPermissionRules.test.ts keeps the two aligned."
      ),
      rule: o().describe(
        "The stored rule string VERBATIM, exactly as the session holds it. Two stored spellings that parse identically each get their own entry. Can carry invisible or control characters by design \u2014 escape at display."
      ),
      description: ZY()
        .optional()
        .describe(
          "Plain-language reading of the rule; absent where the terminal shows no subtitle either."
        ),
      editability: B(["persistent", "session", "readonly"]).describe(
        "Where the rule lives: 'persistent' (userSettings/projectSettings/localSettings \u2014 saved in a settings file), 'session' (cliArg/session \u2014 in memory only, for the rest of this session), or 'readonly' (policySettings/flagSettings/command and every other source \u2014 the set the terminal's /permissions treats as read-only). Informational for hosts; this request never changes rules."
      ),
      notInEffect: M()
        .optional()
        .describe(
          "Present (true) when enterprise managed settings pin allowManagedPermissionRulesOnly and this rule, read from a non-policy settings file, is ignored by the session. Such rows are readonly."
        )
    }).describe("One permission rule with its provenance and where it lives.")
  ),
  t1 = p(() =>
    u({
      path: o(),
      source: o().describe(
        "Where the directory grant came from: a settings source (e.g. 'localSettings'), 'cliArg' (--add-dir), or 'session' (/add-dir, IDE workspace folders)."
      )
    }).describe("One additional working directory in the permission scope.")
  ),
  s1 = p(() =>
    u({
      rules: T(e1()),
      workspaceDirectories: T(t1()),
      originalCwd: o().describe("The session's original working directory."),
      managedOnly: M().describe(
        "True when enterprise managed settings pin allowManagedPermissionRulesOnly: the session applies policy rules only, and rules from other settings files appear with notInEffect set."
      ),
      errors: T(mn())
        .optional()
        .describe(
          "Settings parse and validation errors, as get_settings reports them. When non-empty, the listed files were skipped \u2014 their rules are not in the session and not listed above."
        )
    }).describe("The session's live permission rules state, as list_permission_rules reports it.")
  ),
  n1 = p(() => u({ state: s1() }).describe("Success payload of list_permission_rules.")),
  Na = p(() =>
    u({
      subtype: A("elicitation"),
      mcp_server_name: o(),
      message: o(),
      mode: B(["form", "url"]).optional(),
      url: o().optional(),
      elicitation_id: o().optional(),
      requested_schema: me(o(), oe()).optional(),
      property_order: T(o())
        .optional()
        .describe(
          `requested_schema.properties' top-level keys in the order the MCP server listed them; absent for URL mode and when the schema has no properties object. For a host whose transport keeps no JSON object key order (a protobuf Struct, say). Names that look like array indices ("0", "1", \u2026) come first, in JavaScript's object key order.`
        ),
      title: o()
        .optional()
        .describe(
          "Permission-display title from the MCP server's _meta['anthropic/permissionDisplay']. Mirrors can_use_tool.title so SDK consumers can render elicitation-driven permission prompts with structured headers instead of parsing `message`."
        ),
      display_name: o()
        .optional()
        .describe(
          "Short tool/server label from _meta['anthropic/permissionDisplay'].displayName. Mirrors can_use_tool.display_name."
        ),
      description: o()
        .optional()
        .describe(
          "Permission-display subtitle from _meta['anthropic/permissionDisplay'].description. Mirrors can_use_tool.description."
        )
    }).describe("Requests the SDK consumer to handle an MCP elicitation (user input request).")
  ),
  r6o = p(() =>
    u({ action: B(["accept", "decline", "cancel"]), content: me(o(), oe()).optional() }).describe(
      "Response from the SDK consumer for an elicitation request."
    )
  ),
  Pa = p(() =>
    u({
      subtype: A("request_user_dialog"),
      dialog_kind: o().describe(
        'Identifier for the dialog the host should render. Open string union \u2014 new kinds may be added without bumping the protocol. A kind is only sent in sessions where some attached client declared it in initialize.supportedDialogKinds (declare exactly the kinds you can render); on multi-client transports the request still reaches every attached client. A host that receives a kind it did not declare must not answer it (an error-subtype response is discarded and the dialog stays pending) \u2014 never with {behavior: "cancelled"}, which is a real settlement treated as the user dismissing the dialog. An unanswered dialog is cancelled by the CLI after its dialog deadline; the CLI may send one that has no deadline, which stays up until it is answered or the CLI withdraws it with a control_cancel_request.'
      ),
      payload: me(o(), oe()).describe(
        "Dialog-specific data passed to the host renderer. Shape is defined per dialog_kind; the protocol transports it opaquely."
      ),
      tool_use_id: o().optional()
    }).describe(
      "Requests the SDK consumer to render a tool-driven blocking dialog and return the user choice. Used by tools that previously rendered Ink JSX via setToolJSX with an onDone callback."
    )
  ),
  Qbn = p(() =>
    u({
      behavior: B(["completed", "cancelled"]),
      result: oe()
        .optional()
        .describe(
          "Dialog-specific result payload. Opaque to the protocol; the caller and dialog renderer agree on the shape per dialog_kind."
        )
    }).describe("Response from the SDK consumer for a request_user_dialog request.")
  ),
  Ma = p(() =>
    u({
      subtype: A("submit_feedback"),
      description: o(),
      surface: B(["cli", "ccd", "ccr", "ide", "sdk", "cowork"])
        .optional()
        .describe(
          "Where the feedback flow was initiated. Stamped into the POST body and tengu_bug_report_* analytics so the triage pipeline can distinguish CCD/CCR/IDE/Cowork reports from terminal reports landing in the same claude_cli_feedback table. Defaults to 'sdk'."
        ),
      draft_id: o()
        .optional()
        .describe(
          "UUID of a local SendFeedback draft under ~/.claude/feedback/drafts/. When set, the handler reads the stored draft, rebuilds the description via buildDraftDescription() (so the upload matches the consent form the user reviewed; the cwd is neither uploaded nor named on the form's consent line \u2014 it never uploads as metadata, though a transcript attachment, separately consented, still carries real paths), bundles the draft's own transcript per attach_transcript, and deletes the draft file on success. The caller's description/type/title/area override the stored draft when provided (user edits on the review form)."
        ),
      type: B(["bug", "idea", "missing_capability"]).optional(),
      title: o().optional(),
      area: o().optional(),
      attach_transcript: M()
        .optional()
        .describe(
          "Whether to bundle the draft's source-session transcript with the upload. Only meaningful alongside draft_id \u2014 the non-draft path always bundles the current session (unchanged). Defaults to true."
        ),
      save_locally: M()
        .optional()
        .describe(
          "The host told the user this report is saved on this machine and nothing is sent (feedback_mode 'bundle' when it read the mode). Honored even if the mode has since become 'post' or 'share' (a mid-session sign-in): the report is bundled, never sent; a mode of 'disabled' still refuses it. Ignored with draft_id."
        )
    }).describe(
      "@internal Submits a /feedback report (description + current session transcript + sanitized error log) to api.anthropic.com/api/claude_cli_feedback using the CLI's auth and redaction. Runs the same getFeedbackUnavailableReason() policy checks as the terminal /feedback command \u2014 when feedback is disabled (org policy, env kill-switch) or cannot be sent (3P provider, no Anthropic credentials) the response carries unavailable_reason instead of an error. When the server refuses the submission for the organization or the report's content, the response carries both unavailable_reason and failure_reason. A request carrying save_locally gets the terminal's local save instead: the report is written to a redacted zip on this machine and the response carries bundle_path, nothing sent \u2014 except where feedback is disabled, which still refuses."
    )
  ),
  QA = p(() =>
    u({
      feedback_id: o().nullable(),
      unavailable_reason: o()
        .optional()
        .describe(
          "Human-readable reason feedback cannot be sent. Set when /feedback is unavailable in this session (no submission was attempted), or when the server refused the submission for the organization or the report's content (failure_reason is also set)."
        ),
      is_zdr_org: M().optional(),
      failure_reason: o().optional(),
      status_code: v().int().optional(),
      ccshare_url: o()
        .optional()
        .describe(
          "Internal share URL for the conversation. Only set in internal builds, when the upload succeeded or was handed to the host machine to finish (the page then appears once the person confirms the upload there); absent otherwise."
        ),
      bundle_path: o()
        .optional()
        .describe(
          "In 'bundle' feedback mode (SDKFeedbackMode): the absolute path of the redacted zip the report was written to on this machine, instead of being sent; feedback_id is then the bundle id. Absent in every other mode."
        )
    }).describe(
      "@internal Result of a submit_feedback request. feedback_id is set on success (a sent report, or a bundle written to bundle_path); otherwise unavailable_reason, failure_reason or both explain why."
    )
  ),
  qrr = p(() =>
    u({
      subtype: A("submit_survey_feedback"),
      description: o().describe(
        "The note the person typed in the follow-up box after rating the session. May be empty: the person pressed Send without typing."
      ),
      appearance_id: o().describe(
        "The survey appearance's id, the appearance_id of its tengu_feedback_survey_event rows, so the report joins back to the rating."
      ),
      survey_response: B(["bad", "fine", "good"]),
      survey_type: B(["session", "post_compact", "memory", "long_context"]).describe(
        "The survey's type; the session survey is 'session'."
      ),
      surface: B(["cli", "ccd", "ccr", "ide", "sdk", "cowork"])
        .optional()
        .describe("Where the survey was shown. Defaults to 'sdk'.")
    }).describe(
      "@internal Sends the session survey's follow-up box: the report submit_feedback sends (note, session transcript, error log), joined to the survey appearance. Answered like submit_feedback, after its availability checks and the CLI's own plan check: a sign-in that survey_followup_box.transcript_allowed would be false for gets unavailable_reason and nothing is sent. An older CLI answers that the subtype is unsupported."
    )
  ),
  xa = p(() =>
    u({
      subtype: A("remote_control_work_secret"),
      session_id: o().describe("The attached claude.ai session whose worker token needs renewing.")
    }).describe(
      "@internal Request from the CLI subprocess to the SDK host for the session's re-dispatched work secret, sent when a bridge attached with `remote_control {work_secret}` needs a fresh worker token (before expiry, or during auth recovery). The host re-queues the session on its bridge environment and answers with the secret its next work poll delivers, or null when it has none yet \u2014 the CLI asks again on its own retry cadence."
    )
  ),
  o6o = p(() =>
    u({ work_secret: o().nullable() }).describe(
      "@internal The re-dispatched base64url work secret for the requested session, or null when the host has none available yet."
    )
  ),
  Da = p(() =>
    u({ subtype: A("oauth_token_refresh") }).describe(
      "@internal Request from the CLI subprocess to the SDK host for a fresh OAuth access token after a 401 with no local refresh token."
    )
  ),
  Zbn = p(() =>
    u({
      accessToken: o().nullable(),
      reason: B(p8o)
        .optional()
        .catch(void 0)
        .describe(
          "Why the host returned no token (only meaningful when accessToken is null). Absent from hosts that do not say. Null, unknown or malformed values degrade to undefined at parse time (the enum carries `.catch`), so a reason can never cost a delivered token and values can be added without a version bump."
        )
    }).describe(
      "@internal Fresh OAuth access token returned by the SDK host getOAuthToken callback, or null when the host has no token available."
    )
  ),
  La = p(() =>
    u({ subtype: A("host_auth_token_refresh") }).describe(
      "@internal Request from the CLI subprocess to the SDK host for a fresh provider credential after a 401 or an AWS / Google Cloud credential failure when the host owns the credential (Cowork 3P)."
    )
  ),
  s6o = p(() =>
    u({ authToken: o().nullable(), materialUnchanged: M().optional() }).describe(
      "@internal Fresh provider bearer token returned by the SDK host getHostAuthToken callback, or null if the credential was refreshed out-of-band. materialUnchanged is only consulted when authToken is null (out-of-band delivery) \u2014 true tells the CLI to fast-fail instead of backing off. A local AWS / Google Cloud credential-chain failure in the CLI is capped at two retries whatever the reply."
    )
  ),
  Yrr = p(() =>
    u({
      subtype: A("message_rated"),
      messageUuid: o().describe("UUID of the assistant message being rated."),
      sentiment: B(["positive", "negative"]).describe(
        "User rating: positive (thumbs up) or negative (thumbs down)."
      ),
      surface: B(["tool_use", "assistant_text"])
        .optional()
        .describe(
          "Which in-conversation surface the rating came from. If omitted, logged as tool_use."
        ),
      cleared: M()
        .optional()
        .describe(
          "True when the caller is un-rating a message (clicking the same control a second time)."
        )
    }).describe(
      "@internal Records a per-message thumbs up/down rating. Logs tengu_message_rated with the same shape as the in-conversation rating controls so Desktop / IDE callers can surface their own native thumbs UI."
    )
  ),
  r1 = p(() => u({}).describe("@internal Empty response for message_rated.")),
  eSn = p(() =>
    B([
      "AskUserQuestion",
      "UserMessage",
      "AssistantMessage",
      "ToolUse",
      "ToolResult",
      "ToolGroup",
      "ToolProgress",
      "CommandOutput",
      "Spinner",
      "TurnDuration",
      "InfoNotice",
      "SessionMode",
      "PromptHint",
      "AbovePrompt",
      "Pane"
    ]).describe(
      "@internal A component a plugin may draw through `ui.render`: one name per render site of the hooks engine (src/plugins/functionHooks/types/render/render-component.ts)."
    )
  ),
  Ro = p(() =>
    $e([o(), gA(() => rR())]).describe(
      "@internal One child of a render element: a string inside Text (or Box, where the engine wraps it in a Text), or a nested element."
    )
  ),
  JA = p(() =>
    me(o(), $e([o(), v(), M()])).describe(
      "@internal Style overrides the surface applies while the pointer is over the nearest keyed Box above the element, or over any member of the hover group `scope` names (a string of the drawing plugin's; two plugins never share a group): a Box's `borderStyle`, `borderColor`, `borderDimColor`, `backgroundColor`, `display` (\"flex\", revealing a Box drawn \"none\") and the offsets of a placed Box; a Text's or a Button label's colors and styles. Plain data the engine validated; nothing that moves a sibling."
    )
  ),
  vo = p(() =>
    u({ plugin: o(), handle: v().int() }).describe(
      "@internal Where the element's handler lives: the plugin whose hook drew it and the handle its environment keeps the closure under, stamped by the engine as the tree left that hook. What a ui_press, ui_input or ui_select names the element by; a redraw that changed anything hands out new handles."
    )
  ),
  rR = p(() =>
    $e([
      u({
        type: B(["Box", "Text", "div", "span", "b"]),
        props: me(o(), $e([o(), v(), M()]))
          .optional()
          .describe(
            '@internal Layout props on Box (`key` makes it a hover scope; `position` "absolute" with integer `top`/`left`/`right`/`bottom` cell offsets places it over its surroundings, out of the flow), color and style props on Text (with `size`, `weight`, `mono` and `tabular`, which each surface draws its own way; `bold` is true for a `semibold` or `bold` weight, and a `bold: true` with no weight also carries `weight: "semibold"`), spacing on Box in cells (on `desktop` and `mobile` also a step name, `xs` to `xl`), a `style` declaration string on div/span/b; the allowlisted subset the engine validated before the tree crossed.'
          ),
        hover: JA().optional(),
        group: u({ plugin: o() })
          .optional()
          .describe(
            "@internal Whose hover group `hover.scope` names: the plugin whose hook drew the element; present only with a `scope`."
          ),
        part: u({ plugin: o() })
          .optional()
          .describe(
            "@internal Whose part of the drawing starts at this Box or Text: set by the engine on each ui.render hook's returned root, so a surface can tell one mod's drawing from another's. A hook's own mark is kept, another plugin's at most as often as next(e) handed it, and an engine node (core's drawing) carries none. A hook above may change what a part holds, so the mark does not prove who wrote it."
          ),
        children: T(gA(() => Ro())).optional()
      }),
      u({
        type: A("Button"),
        props: u({
          key: o(),
          label: o(),
          hotkey: o().optional(),
          action: o().optional(),
          plain: A(!0).optional(),
          dimColor: M().optional(),
          variant: B(["primary", "secondary"]).optional(),
          role: B(["dismiss"]).optional(),
          autoFocus: A(!0).optional()
        }).describe(
          "@internal A button: `label` its text, `key` its address (what `ui.press` carries as `element`). `hotkey` (one digit or lowercase letter) presses it while the plugin's site holds the keyboard; `action` names an engine keybinding action whose chord presses it from the prompt; `plain` draws it without chrome (`hotkey: label`, or the label alone); `dimColor` dims the label at rest; `variant` `primary` marks the main action of several, drawn as the surface draws the one to press, while `secondary` and absent are the default look (carried as the plugin wrote it, never filled in; `plain` wins over it); `role` `dismiss` marks the Button that closes its site, a drawing hint only (the terminal draws it as without; a desktop its native close control, the label its accessible name; carried as written, never filled in); `autoFocus` starts the site's focus ring here. A press is a ui_press naming `press.plugin` and `press.handle`. `children`, when present and not empty, are drawn in the label's place, all of them one pressable: strings and Text elements only; `label` then names the control, and is what a surface that draws no children draws."
        ),
        press: vo(),
        hover: JA().optional(),
        children: T(gA(() => Ro())).optional()
      }),
      u({
        type: A("Input"),
        props: u({
          key: o(),
          label: o().optional(),
          placeholder: o().optional(),
          value: o().optional(),
          submitLabel: o().optional(),
          rows: v().int().min(1).optional(),
          autoFocus: A(!0).optional()
        }).describe(
          "@internal A text field: `label` before it, `placeholder` dim while empty, `value` the text it holds when drawn, `submitLabel` what Enter does, `autoFocus` as a Button's. Absent `rows`, or at 1, one line; from 2 a field of several lines drawn that many rows tall, its lines joined by `\\n` in `value` and in every ui_input, where Enter still submits and Shift+Enter types the newline. The surface keeps the text the person types; each change is a ui_input of kind `change`, Enter one of kind `submit`, naming `press.plugin` and `press.handle`; no children."
        ),
        press: vo()
      }),
      u({
        type: A("Select"),
        props: u({
          key: o(),
          label: o().optional(),
          options: T(u({ value: o(), label: o().optional() })),
          value: o().optional(),
          autoFocus: A(!0).optional()
        }).describe(
          "@internal A one-of-several picker: `options` in the order drawn (at least one, values unique, each drawn as its `label`, else its `value`), `value` the one selected when drawn, `label` before it, `autoFocus` as a Button's. A pick is a ui_select carrying the option's `value` and naming `press.plugin` and `press.handle`; no children."
        ),
        press: vo()
      }),
      u({
        type: A("Link"),
        props: u({ href: o(), label: o().optional() }).describe(
          "@internal A hyperlink: `href` is https (or http://localhost), bounded and free of control characters as the engine validated it; the children are the text drawn (absent them the label, absent both the URL). A remote surface draws an anchor that opens outside the app."
        ),
        children: T(gA(() => Ro())).optional()
      }),
      u({
        type: A("Code"),
        props: u({
          source: o(),
          language: o().optional(),
          path: o().optional(),
          startLine: v().int().optional(),
          format: B(["source", "diff"]).optional(),
          wrap: B(["wrap", "truncate-end"]).optional()
        }).describe(
          '@internal Source code the surface draws with its own highlighter: `language` a highlight.js id or alias, else inferred from `path` (never read); `startLine` numbers a line gutter; under `format: "diff"` `source` is unified-diff hunks the engine checked parse; `wrap` is `wrap` (the default) or `truncate-end`, which cuts long lines with an ellipsis. `source` is bounded and free of control characters as the engine validated it; no children.'
        )
      }),
      u({
        type: A("Markdown"),
        props: u({
          key: o().optional(),
          text: o(),
          dimColor: M().optional(),
          pressableLinks: T(o()).optional()
        }).describe(
          "@internal A block of markdown the surface draws as it draws an assistant reply (its own renderer, links, tables, code fences), dim when `dimColor`; `text` is bounded and free of control characters as the engine validated it; no children. A link whose URL scheme is not https, http or file is drawn as text, never clickable (the plugin must not choose the URL handler a click reaches). With `press` the plugin answers its links: a plain click on one (any, or one `pressableLinks` names) is a ui_press carrying `href`, and the surface does not open it; `key` is then present, the address `ui.press` carries as `element`."
        ),
        press: u({ plugin: o(), handle: v().int() }).optional()
      }),
      u({
        type: A("Client"),
        props: u({
          key: o(),
          module: o(),
          props: oe().optional(),
          width: $e([v(), o()]).optional(),
          height: $e([v(), o()]).optional(),
          flexGrow: v().optional()
        }).describe(
          "@internal A region one of the plugin's surface modules draws locally: `module` is that module's path under the plugin's folder (`hooks/board.tsx`, what ui_client_module lists it by), `key` addresses the instance (what `ui.message` carries as `element`), `props` is plain data the engine bounded, `width`/`height`/`flexGrow` size it as a Box. `client.plugin` says whose surface module. Carried as data: a surface without a surface-module runtime draws nothing for it; no children."
        ),
        client: u({ plugin: o() })
      }),
      u({
        type: A("Svg"),
        props: u({
          source: o(),
          alt: o(),
          width: v().optional(),
          height: v().optional(),
          isInteractive: M().optional()
        }).describe(
          "@internal A vector leaf of the desktop and mobile surfaces: `source` is SVG markup the surface draws in an isolated box (the desktop an image, or a sandboxed frame when `isInteractive`; the mobile app a sandboxed web view), `alt` what it says. Bounded by the engine (128 KiB of source, 4096 px) before it crossed; no children."
        )
      }),
      u({
        type: A("engine"),
        ref: v()
          .int()
          .describe(
            "@internal Which drawing of the engine-owned component sits here: 0 draws the original props; any other ref names the props the ui_render response carries."
          )
      })
    ]).describe(
      "@internal A plain-data tree a `ui.render` hook returned, as the hooks engine validated it: Box, Text, div, span or b with children, a Button, Input or Select leaf carrying the `press` that names its handler, a Link with its text, a Code leaf, a Markdown leaf, a Client leaf (a surface-module region, carried as data; never on mobile), an Svg leaf (desktop and mobile; never the terminal), or an engine node the surface draws itself (src/plugins/functionHooks/types/element/render-element.ts)."
    )
  );
var oR = p(() =>
    u({ seq: v().int(), t0: v() }).describe(
      "@internal Timing marks a benchmarking client attaches to a ui_render request; the response echoes them unchanged so the client can join its own marks to the CLI debug log lines keyed `instance_id#seq`."
    )
  ),
  aR = p(() =>
    u({
      columns: v().int().positive(),
      rows: v().int().positive(),
      isFullscreen: M()
        .optional()
        .describe(
          "@internal Whether this surface docks a pane beside the transcript, so a pane a plugin opens unasked is a sidebar and not a takeover; the hooks read it as `e.viewport.isFullscreen`. Leave it out until the surface can say (absent is unknown, not false); a surface with no dock at all says false. A change re-runs the hooked sites as a change of columns does."
        )
    }).describe(
      "@internal The size of the pane the surface draws the component in, in character cells of the surface's monospace font (its width and height over the code font's advance and line height), and whether its layout docks a pane; the hooks reached see it as `e.viewport` (src/plugins/functionHooks/types/render/render-viewport)."
    )
  ),
  o1 = p(() =>
    u({ first: v().int().nonnegative(), last: v().int().nonnegative(), of: v().int().positive() })
      .refine((e) => e.first <= e.last && e.last < e.of)
      .describe(
        "@internal The part of a transcript message the asking surface has in its viewport: units `first` to `last` (inclusive, `first <= last < of`) of the message's whole extent `of`, in whatever the surface lays out with (lines, pixels), counted from the message's start. The hooks reached see it as `e.props.onScreen`."
      )
  ),
  K = p(() =>
    B(["desktop", "mobile", "vscode"]).describe(
      "@internal A surface that draws over the wire: `desktop` (Claude Code Desktop), `mobile` (the Claude mobile app) or `vscode` (Claude Code for VS Code). What the client declared, a rendering fact and not a trust signal."
    )
  ),
  iR = p(() =>
    B(["terminal", "desktop", "mobile", "vscode"]).describe(
      "@internal Where the engine draws: the terminal (Ink) or a remote surface (src/plugins/functionHooks/types/render/render-surface)."
    )
  ),
  a1 = /^[A-Za-z0-9._-]{1,64}$/,
  D = p(() =>
    o()
      .regex(a1)
      .describe(
        "@internal The asking client's id on the session's roster of attached surfaces: 1 to 64 of letters, digits, `.`, `_`, `-`. Two phones are two ids on one surface; a client that never attaches is the engine's `<surface>:default`, which no wire id can spell."
      )
  ),
  Xrr = p(() =>
    u({
      subtype: A("ui_attach"),
      surface: K(),
      client_id: D(),
      viewport: aR().optional(),
      answers: T(gA(() => nSn()))
        .max(w1)
        .optional()
        .describe(
          "@internal The engine's requests this client answers on a plugin's behalf: `ui_copy` (its clipboard), `ui_prompt_read` / `ui_prompt_fill` / `ui_prompt_suggest` (its composer), `ui_read_selection` (what the person has selected in its page). The engine sends each only to a client that named it; a client that never names any (or names `[]`) is never asked, so `$.ui.copy` to its surface answers `no-clipboard`, the prompt calls the empty box / false and `$.ui.selection` nothing, as before. On a repeated ui_attach a given list (including `[]`) replaces the earlier one and an absent field keeps it: send `[]` to stop answering."
        )
    }).describe(
      "@internal A remote surface joins the session: the engine adds the client to its roster of attached surfaces and raises `session.attach` for it (`$.session.surfaces()` then lists the surface). Idempotent per client_id. A client that never sends it is attached by its first ui_render, under `<surface>:default`; every client still attached detaches when the session ends."
    )
  ),
  i1 = p(() =>
    u({
      surfaces: T(iR()).describe(
        "@internal The surfaces the session draws on after the attach, each once: `terminal` first when bound, then the remote surfaces in attach order."
      )
    }).describe("@internal The roster of surfaces after a ui_attach.")
  ),
  Jrr = p(() =>
    u({ subtype: A("ui_detach"), client_id: D() }).describe(
      "@internal A remote surface leaves the session: the engine drops the client from its roster and raises `session.detach` with reason `detach`. A client_id not on the roster changes nothing."
    )
  ),
  l1 = p(() =>
    u({
      detached: M().describe("@internal Whether the client_id was on the roster."),
      surfaces: T(iR()).describe("@internal The surfaces the session draws on after the detach.")
    }).describe("@internal The roster of surfaces after a ui_detach.")
  ),
  tSn = p(() =>
    u({
      subtype: A("ui_render"),
      surface: K().describe(
        "@internal The surface asking: `desktop` (Claude Code Desktop), `mobile` (the Claude mobile app) or `vscode` (Claude Code for VS Code); the hooks reached see it as `e.surface` and answer from that surface's element table."
      ),
      client_id: D()
        .optional()
        .describe(
          "@internal The asking client, as its ui_attach named it. The ask puts it on the roster when it is not there: the id given, else `<surface>:default`."
        ),
      component: eSn(),
      instance_id: o().describe(
        "@internal The engine's requestId for this instance: the tool_use_id of a tool row or dialog, the message id of a message, the uuid of a command's output row (its twin's), 'session-mode' for the session chip. Two drawings of one component are two instances."
      ),
      props: me(o(), oe()).describe(
        "@internal The component's plain-data props as the asking surface holds them; the `ui.render` site rule validates their shape per component. `output` on a ToolUse is capped at 64 KB before the chain sees it."
      ),
      viewport: aR().optional(),
      on_screen: o1()
        .nullable()
        .optional()
        .describe(
          "@internal What of this instance the asking surface's viewport shows now, for a transcript message (UserMessage, AssistantMessage, ToolUse, ToolResult, ToolGroup, CommandOutput, TurnDuration, InfoNotice): the extent, or null while the surface draws it outside its viewport. The engine hands it to the hooks as `e.props.onScreen` for this surface's ask alone (a rewrite of it is refused) and never carries one surface's report to another; leave it out when the surface does not track visibility, and ask again, coalesced to the surface's frame, when it changes, so the hooks re-run for the messages crossing the viewport's edges."
        ),
      content_rows: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal For a `Pane` or `AbovePrompt` ask: the rows the instance's whole tree lays out to as the surface last drew it (the window itself rides `props.scroll`), so a plugin's `$.ui.scroll` to `end` knows the last offset. Leave it out before the first layout."
        ),
      keyed: T(gA(() => cR()))
        .max(hR)
        .optional()
        .describe(
          "@internal For a `Pane` or `AbovePrompt` ask: where the keyed elements of the tree last drawn sit, so a plugin's `$.ui.scroll({ to: { key } })` lands; without it that call is denied."
        ),
      bench: oR().optional()
    }).describe(
      '@internal Ask the hooks engine to draw one component instance for a remote surface: runs the `ui.render` chain (every plugin hooked on it, then core) with the surface asked and answers the tree plus the props core was handed. A session with no hooks module loaded answers `{tree: {type: "engine", ref: 0}, hooked: false}` without running anything. Re-ask every mounted instance on each `ui_invalidate` system message, and an instance whose `on_screen` changed.'
    )
  ),
  lR = p(() =>
    u({
      tree: rR(),
      props: me(o(), oe()).describe(
        "@internal What to draw the first engine node with: the chain's rewrite of the props, or the input's own. Props under any later engine node do not cross (the ledger holding them is process-local)."
      ),
      rewritten: M().describe("@internal True when `props` is not the object the request carried."),
      hooked: M().describe(
        "@internal Whether any loaded plugin hooks `ui.render` for this component; false means the surface may stop asking for it until the next ui_invalidate."
      ),
      client_modules: me(o(), o())
        .optional()
        .describe(
          "@internal For each plugin whose `Client` nodes the tree carries, the hash of its surface modules as ui_client_module serves them; the surface loads a plugin's modules once per hash and remounts its Clients when it changes. A plugin absent here has no surface module loaded: its Clients draw a fault line."
        ),
      drawn_by: T(o())
        .optional()
        .describe(
          "@internal The plugins something of `tree` or `props` may be owed to, by the name each is loaded under, in chain order: those whose `ui.render` hook ran for this ask and did more than hand on (told one by one for the vscode surface; elsewhere neighbours that share the sandbox are told together), or every plugin hooked on the instance where that is not known. Plugins the binary carries are left out, so an empty list says the drawing is Claude Code's own. The engine's word, which no hook can set: what a surface marks a drawing with. Absent from a CLI that predates the field: whose the drawing is, is then not known."
        ),
      bench: oR().optional()
    }).describe(
      "@internal What one remote-surface evaluation of `ui.render` produced, plus whether a plugin is hooked on the component at all."
    )
  ),
  XKt = p(() =>
    u({
      subtype: A("ui_press"),
      plugin: o().describe(
        "@internal The plugin whose hook drew the pressed element, as the tree carried it."
      ),
      handle: v()
        .int()
        .describe(
          "@internal The handle the element carried (`press.handle`), naming the onPress closure held in that plugin's environment."
        ),
      key: o()
        .optional()
        .describe(
          "@internal The element's own key as the tree carried it. When sent and not empty, a handle held under another key answers `{handled: false}` and nothing runs: the page's tree is not this process's."
        ),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the press came from, as the ui_render that drew the element named it; absent means `desktop`. The `ui.press` hooks reached see it as `e.surface`."
        ),
      href: o()
        .max(2048)
        .optional()
        .describe(
          "@internal For a press on a link inside a `Markdown` element that carries a `press` (its plugin answers its links): the link's target as the tree's text wrote it, one `pressableLinks` names when that list is present. The `ui.press` hooks reached see it as `e.link.href`. Absent for a Button; a Markdown handle without it runs nothing."
        ),
      client_id: D()
        .optional()
        .describe(
          "@internal The pressing client, as its ui_attach named it; optional, and the press runs the same with or without it."
        ),
      press_id: o()
        .regex(/^[A-Za-z0-9._-]{1,64}$/)
        .optional()
        .catch(void 0)
        .describe(
          "@internal The host's own id for this one press: 1 to 64 ASCII letters, digits, '.', '_' and '-'. A `$.prompt.fill` that the pressed element's own handler makes names it back as `answers_press` on the ui_prompt_fill. A value of any other shape is dropped as if absent and the press runs the same. Send `client_id` with it: the id is named back to that client alone, and the id of a press that carries no `client_id` is named back to no client. No hook and no handler is shown it. A CLI that predates the field ignores it."
        ),
      render: tSn()
        .omit({ subtype: !0 })
        .optional()
        .catch(void 0)
        .describe(
          "@internal The body of a ui_render request, without `subtype`, for the site that holds the pressed element: the answer carries that drawing as `drawn`, so the page need not ask for it. One object, bounded as a ui_render request is. A value that does not read as one is dropped as if absent and the press runs the same. A CLI that predates the field ignores it."
        )
    }).describe(
      "@internal A press on an element a plugin drew for a remote surface: a Button, or a link inside a Markdown whose plugin answers its links (with `href`). Runs the `ui.press` chain with the element's closure at the bottom. A CLI whose engine has no press site answers `{handled: false}`."
    )
  ),
  d1 = p(() =>
    u({
      handled: M().describe(
        "@internal False when the engine has no press site, the handle named no held element, or it named one held under another key than the request sent; nothing ran, and the tree the surface holds is stale: it asks ui_render again."
      ),
      element: o()
        .optional()
        .describe("@internal The element whose handler the press reached, when one did."),
      drawn: lR()
        .optional()
        .describe(
          "@internal What a ui_render request with the press's `render` would have answered as the handler settled, through the same `ui.render` chain and with fresh handles. Absent when the press carried no `render` or one that does not read, when it was not handled, when the client it names is no longer attached, when a redraw of that instance was pushed during each of three draws, and when the draw was refused or failed: the page asks ui_render as before. The pushes do not change: a write the engine holds back to pace redraws, or made after this answer, is told by its ui_invalidate, and the page asks again."
        )
    }).describe("@internal Whether a ui_press reached a handler, and which.")
  ),
  Y = 256,
  gn = 16384,
  Ua = p(() =>
    u({
      plugin: o()
        .max(Y)
        .describe(
          "@internal Whose surface module the Client runs, as the node carried it (`client.plugin`)."
        ),
      component: eSn(),
      instance_id: o()
        .max(Y)
        .describe(
          "@internal The engine's requestId of the instance the Client was drawn in: what the ui_render that carried it named."
        ),
      client: o().max(Y).describe("@internal The Client node's own `key`."),
      module: o()
        .max(Y)
        .describe(
          "@internal The Client node's `module`: which of the plugin's surface modules runs there, its path under the plugin's folder."
        )
    }).describe(
      "@internal Where a Client node a remote surface drew sits: what a ui_client_press, ui_message or ui_client_fault names before anything runs."
    )
  ),
  Qrr = p(() =>
    u({
      subtype: A("ui_client_module"),
      plugin: o().describe(
        "@internal The plugin whose surface modules the surface wants, as a Client node and `client_modules` named it."
      )
    }).describe(
      "@internal Ask for a plugin's surface modules as a desktop `Client` frame loads them: every file the host read when the hooks module loaded (only those: the paths its `Client`s name by literal), compiled to JavaScript, its own imports rewritten to import-map keys, each module's entry and component, and the hash ui_render announced. Errors when the plugin is not loaded or loaded no surface module."
    )
  ),
  c1 = p(() =>
    u({
      plugin: o(),
      hash: o().describe(
        "@internal sha256 over the keyed files and limits, hex: what `client_modules` carries for the plugin while this text and these bounds are served."
      ),
      modules: T(
        u({
          module: o().describe(
            "@internal The module's path under the plugin's folder, POSIX-separated (`hooks/board.tsx`): what a Client node's `module` carries."
          ),
          entry: o().describe(
            "@internal The entry file's import-map key (`surface:///<path under the plugin>`): what the frame imports for a Client naming this module, once the runtime is in."
          ),
          component: o().describe(
            "@internal Which export of the entry draws: `default` when it has one, else its one PascalCase export; settled by the host at load."
          )
        })
      ).describe(
        "@internal One per surface module the plugin's Clients name, in the order the host read them."
      ),
      runtime: o().describe(
        "@internal The runtime module's key (`claude:surface-runtime`): exports `h` and `Fragment`, the JSX factory the plugin's files are compiled against, and `install(host, limits)`, the surface driver the terminal runs the same modules with. The frame sets `globalThis.h`/`Fragment` from it and installs before importing an entry."
      ),
      limits: u({
        nodes: v().int(),
        depth: v().int(),
        chars: v().int(),
        values: v().int(),
        dataDepth: v().int()
      }).describe(
        "@internal The bounds `install` takes: a tree of at most `nodes` elements `depth` deep serializing to `chars` characters, each props payload at most `values` values `dataDepth` deep; the terminal's own."
      ),
      files: T(u({ key: o(), source: o() })).describe(
        "@internal Every file of every module, each once: the runtime first, then each entry and what it links: its key and its JavaScript, own imports keyed. Each module's files are bounded by the hooks-module limits (1 MiB a file, 8 MiB in all, 512 files) before they loaded."
      )
    }).describe("@internal A plugin's surface modules as the desktop frame links them.")
  ),
  JKt = p(() =>
    Ua()
      .extend({
        subtype: A("ui_client_press"),
        element: o()
          .max(Y)
          .describe(
            "@internal The pressed element's own `key` inside the Client's tree; the hooks reached see `e.element`."
          ),
        event: Gr("type", [
          u({ type: A("press") }),
          u({ type: A("input"), kind: B(["change", "submit"]), value: o().max(gn) }),
          u({ type: A("select"), value: o().max(gn) })
        ]).describe(
          "@internal What happened: a Button pressed, an Input changed or submitted with its text, a Select picked with its value."
        )
      })
      .describe(
        "@internal A press, input or pick on a Button, Input or Select a surface module drew inside a `Client` the desktop drew: runs the `ui.press`, `ui.input` or `ui.select` chain over every hooked plugin with `surface: \"desktop\"`. The element's closure lives in the surface's frame, so the answer says whether the chain reached it and with what argument, and the surface runs it. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`."
      )
  ),
  h1 = p(() =>
    u({
      handled: M().describe(
        "@internal False when the engine has no such Client drawn; nothing ran."
      ),
      reached: me(o(), oe())
        .optional()
        .describe(
          "@internal The chain's argument as it reached the element's own handler (`plugin`, `element`, `component`, `requestId`, `surface`, and `kind`/`value` for an input or pick, as hooks above left them): the surface runs the frame's closure with it. Absent when a hook withheld the press; the closure does not run."
        )
    }).describe(
      "@internal Whether a ui_client_press found its Client, and what reached the bottom of the chain."
    )
  ),
  QKt = p(() =>
    Ua()
      .extend({
        subtype: A("ui_message"),
        data: oe().describe(
          "@internal What the instance posted (`surface.post(data)`): plain JSON, bounded as a Client post is (2000 values, depth 32, 100 000 characters); the hooks reached see `e.data`."
        )
      })
      .describe(
        '@internal A post from a `Client` instance the desktop drew: runs the owning plugin\'s `ui.message` chain alone (origin `client`) with `surface: "desktop"`. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`; data past the bounds errors.'
      )
  ),
  u1 = p(() =>
    u({
      handled: M().describe(
        "@internal False when the engine has no such Client drawn; nothing ran."
      ),
      props: oe()
        .optional()
        .describe(
          "@internal The instance's next props when a hook answered `{ props }`: the surface hands them to the frame, local state kept; absent leaves them."
        )
    }).describe("@internal What the owning plugin's ui.message hooks answered a Client's post.")
  ),
  p1 = 200,
  ZKt = p(() =>
    Ua()
      .extend({
        subtype: A("ui_client_fault"),
        phase: B(["load", "render", "run"]).describe(
          "@internal When the Client failed: `load` is before the module ran (its frame refused, the module not fetched, a throw at mount); `render` is a throw while drawing, an undrawable tree, or a render that never answered; `run` is a listener, timer or held closure, a loop, a flood. The hooks reached see it as `e.phase`."
        ),
        reason: o()
          .max(p1)
          .describe(
            "@internal Why, in the surface's words: one line of at most 200 characters, control characters and line separators sent as spaces; empty for a failure that gave no message. Untrusted text (it may quote what the plugin's module threw): to show or log, never to act on. The hooks reached see it as `e.reason`, scrubbed again and with the plugin's name and the module's taken off its front, and never empty: one with nothing in it reads `the module failed without a message`."
          )
      })
      .describe(
        '@internal A `Client` the desktop drew failed in its frame: runs the owning plugin\'s `ui.fault` chain alone with `surface: "desktop"`, so the plugin can draw another view. The address is the five flat fields ui_client_press and ui_message carry, and no `surface`. One request per fault line the surface draws; an instance started again that fails again is told again. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`. A CLI that predates the request answers the error "Unsupported control request subtype: ui_client_fault".'
      )
  ),
  m1 = p(() =>
    u({
      handled: M().describe(
        "@internal False when the engine has no such Client drawn; nothing ran. True once the owning plugin's hooks have run, whether or not it has any."
      )
    }).describe(
      "@internal Whether a ui_client_fault found its Client and reached the owning plugin's ui.fault hooks."
    )
  ),
  eVt = p(() =>
    u({
      subtype: A("ui_input"),
      plugin: o()
        .max(Y)
        .describe(
          "@internal The plugin whose hook drew the Input, as its `press.plugin` carried it."
        ),
      handle: v()
        .int()
        .describe(
          "@internal The handle the Input carried (`press.handle`), naming the onInput and onSubmit closures held in that plugin's environment."
        ),
      kind: B(["change", "submit"]).describe(
        "@internal Which of the two: `change` on an edit of the field, `submit` on Enter. The `ui.input` hooks reached see it as `e.kind`."
      ),
      value: o()
        .max(gn)
        .describe(
          "@internal The field's whole text as the surface holds it now; the hooks reached see it as `e.value` and may rewrite it before the closure."
        ),
      key: o()
        .optional()
        .describe(
          "@internal The Input's own `key`, as the tree carried it (the engine puts no length on a key): with `component` and `instance_id`, a handle a redraw just retired, or one held under another key (a tree another process drew), is re-resolved to the one Input that plugin holds under this key there, so typing across a re-render is not lost."
        ),
      component: eSn()
        .optional()
        .describe(
          "@internal The render site the Input was drawn in, as the ui_render that drew it named it; pairs with `key` for the re-resolve."
        ),
      instance_id: o()
        .max(Y)
        .optional()
        .describe(
          "@internal The instance the Input was drawn in (the ui_render's `instance_id`): with `key` and `component`, names the one field among several instances that draw the same key (one per transcript row). Without it a retired handle re-resolves only when a single instance holds the key."
        ),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the field is on, as the ui_render that drew it named it; absent means `desktop`. The `ui.input` hooks reached see it as `e.surface`."
        ),
      client_id: D()
        .optional()
        .describe(
          "@internal The typing client, as its ui_attach named it; optional, and the input runs the same with or without it."
        )
    }).describe(
      "@internal A change of, or Enter in, an `Input` a plugin drew for a remote surface: runs the `ui.input` chain over every hooked plugin with the element's own onInput (kind `change`) or onSubmit (kind `submit`) closure at the bottom, one at a time per plugin so typing arrives in order. A handle no Input is held under answers `{handled: false}` and nothing runs. No model turn unless the plugin asks for one."
    )
  ),
  _1 = p(() =>
    u({
      handled: M().describe(
        "@internal False when no Input is held under that plugin and handle (a redraw retired it and `key`/`component`/`instance_id` did not re-resolve it, or the plugin unloaded); nothing ran."
      ),
      element: o()
        .optional()
        .describe(
          "@internal The `key` of the Input whose handler the input reached, when one did."
        ),
      value: o()
        .optional()
        .describe("@internal The text the handler received: the value as the hooks above left it.")
    }).describe("@internal Whether a ui_input reached a handler, which, and with what text.")
  ),
  tVt = p(() =>
    u({
      subtype: A("ui_select"),
      plugin: o()
        .max(Y)
        .describe(
          "@internal The plugin whose hook drew the Select, as its `press.plugin` carried it."
        ),
      handle: v()
        .int()
        .describe(
          "@internal The handle the Select carried (`press.handle`), naming the onSelect closure held in that plugin's environment."
        ),
      value: o()
        .max(gn)
        .describe(
          "@internal The picked option's `value`, one of the Select's `options` as the tree last drew them (any other value answers `handled: false` and runs nothing); the hooks reached see it as `e.value` and may rewrite it before the closure."
        ),
      key: o()
        .optional()
        .describe(
          "@internal The Select's own `key`, as the tree carried it: with `component` and `instance_id`, a handle a redraw just retired, or one held under another key (a tree another process drew), is re-resolved to the one Select that plugin holds under this key there."
        ),
      component: eSn()
        .optional()
        .describe(
          "@internal The render site the Select was drawn in, as the ui_render that drew it named it; pairs with `key` for the re-resolve."
        ),
      instance_id: o()
        .max(Y)
        .optional()
        .describe(
          "@internal The instance the Select was drawn in (the ui_render's `instance_id`): with `key` and `component`, names the one picker among several instances that draw the same key."
        ),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the picker is on, as the ui_render that drew it named it; absent means `desktop`. The `ui.select` hooks reached see it as `e.surface`."
        ),
      client_id: D()
        .optional()
        .describe(
          "@internal The picking client, as its ui_attach named it; optional, and the pick runs the same with or without it."
        )
    }).describe(
      "@internal A pick in a `Select` a plugin drew for a remote surface: runs the `ui.select` chain over every hooked plugin with the element's own onSelect closure at the bottom, one at a time per plugin. A handle no Select is held under answers `{handled: false}` and nothing runs. No model turn unless the plugin asks for one."
    )
  ),
  g1 = p(() =>
    u({
      handled: M().describe(
        "@internal False when no Select is held under that plugin and handle (a redraw retired it and `key`/`component`/`instance_id` did not re-resolve it, or the plugin unloaded), or `value` is none of its options as drawn; nothing ran."
      ),
      element: o()
        .optional()
        .describe(
          "@internal The `key` of the Select whose handler the pick reached, when one did."
        ),
      value: o()
        .optional()
        .describe(
          "@internal What the handler received: the option's value as the hooks above left it."
        )
    }).describe("@internal Whether a ui_select reached a handler, which, and with what value.")
  ),
  dR = p(() =>
    B(["Pane", "AbovePrompt"]).describe(
      "@internal A scrolling, focusable site a remote surface draws for the hooks engine: a pane's body (`instance_id` the pane's id) or the band above the composer (`instance_id` `above-prompt`)."
    )
  ),
  cR = p(() =>
    u({
      plugin: o().max(Y),
      key: o().max(Y),
      top: v().int().nonnegative(),
      bottom: v().int().nonnegative()
    }).describe(
      "@internal Where an element a plugin drew under `key` (a keyed Box, a Button, Input or Select) sits in the site's content as the surface laid it out: its first row and the row past its last, in the rows `offset` counts. What lets that plugin's `$.ui.scroll({ to: { key } })` land."
    )
  ),
  hR = 512,
  nVt = p(() =>
    u({ subtype: A("ui_panes"), client_id: D().optional() }).describe(
      "@internal Ask for the pane roster as the engine holds it now: what a surface that places panes reads on mount, before any ui_panes push (a pane opened before the stream armed pushes nothing)."
    )
  ),
  rVt = p(() =>
    u({
      subtype: A("ui_pane_show"),
      id: pe().describe(
        "@internal The pane the person picked (a click on its tab): shown at once, the keyboard following if a pane held it. An id not open changes nothing."
      ),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the panes are on; absent means `desktop`. Names the default client when `client_id` is not given."
        ),
      client_id: D().optional()
    }).describe(
      "@internal The person chose which open pane the surface shows; answers the roster's `shown_id` afterwards. A ui_panes push follows when it changed."
    )
  ),
  f1 = p(() =>
    u({ shown_id: pe().nullable() }).describe("@internal The pane shown after a ui_pane_show.")
  ),
  oVt = p(() =>
    u({
      subtype: A("ui_pane_focus"),
      id: pe()
        .nullable()
        .describe(
          "@internal The pane the person gave the keyboard (a click into its body, honouring a focus request), or null when the keyboard went back to the composer (Escape, a click there, a refused focus request). Settles a standing focus request either way."
        ),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the panes are on; absent means `desktop`. Names the default client when `client_id` is not given."
        ),
      client_id: D().optional()
    }).describe(
      "@internal The keyboard moved between the composer and a pane on a remote surface; answers the roster's `focused_id` afterwards, and the pane's Pane site then holds the keyboard for `$.ui.focus`. A ui_panes push follows when it changed."
    )
  ),
  b1 = p(() =>
    u({ focused_id: pe().nullable() }).describe(
      "@internal The pane holding the keyboard after a ui_pane_focus."
    )
  ),
  sVt = p(() =>
    u({
      subtype: A("ui_close"),
      id: pe().describe(
        "@internal The pane the person closed (its close control, or Escape under `close_on_escape`)."
      ),
      client_id: D().optional()
    }).describe(
      "@internal The person's close of a pane on a remote surface: runs the `ui.close` chain with origin `person` (a hook may keep the pane open) and answers whether it closed. The surface removes the pane only on `closed: true`; the ui_panes push that follows drops it too."
    )
  ),
  E1 = p(() =>
    u({
      closed: M().describe(
        "@internal True when no pane has that id after the call: it closed, or none had it (no chain ran). False when a `ui.close` hook kept it open, or a close of it was already being decided (the ui_panes push says how that one ended)."
      )
    }).describe("@internal Whether a ui_close closed the pane.")
  ),
  iVt = p(() =>
    u({
      subtype: A("ui_scroll"),
      component: dR(),
      instance_id: o().max(Y),
      offset: v()
        .int()
        .nonnegative()
        .describe(
          "@internal The first content row the window shows after the move, 0 at the top, in rows of the surface's monospace line height."
        ),
      by: v()
        .int()
        .describe(
          "@internal The rows the move covered, signed, negative toward the top; what the `ui.scroll` hooks see as `e.by`."
        ),
      body_rows: v().int().nonnegative().describe("@internal The rows the window shows at once."),
      content_rows: v()
        .int()
        .nonnegative()
        .describe(
          "@internal The rows the site's whole tree lays out to; the last offset is `content_rows - body_rows`."
        ),
      pointer: u({ column: v().int(), row: v().int() })
        .optional()
        .describe(
          "@internal The body cell the wheel or trackpad was over, 0/0 at the body's top left; absent for scroll keys and the scrollbar."
        ),
      keyed: T(cR()).max(hR).optional(),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the site is on; absent means `desktop`. Names the default client when `client_id` is not given, so the site is that client's."
        ),
      client_id: D().optional()
    }).describe(
      "@internal The person scrolled a site a remote surface draws (a pane's body, the band): the engine records the layout reported and raises `ui.scroll` with origin `person` for a move of `by` rows onto `offset` (clamped to the layout; while the site follows its end, a move down is `by` rows from that end instead; and `by` rows over the engine's own window when `offset` is the last report's offset moved by `by` and the engine did not land that last report where it said); a hook may rewrite or deny it, and the answer carries the offset the surface should show. Send it throttled to the surface's frame; reports arriving while one is in flight for the instance are folded (`by` summed) into one that follows and answered alike, in order."
    )
  ),
  S1 = p(() =>
    u({
      moved: M().describe(
        "@internal False when the chain denied the move (a plugin's own scroll landed meanwhile and stays), or the instance is no open pane nor the band (`deny: 'no such site'`; nothing recorded)."
      ),
      offset: v()
        .int()
        .describe(
          "@internal The offset the engine holds for the window now, which the surface should show: when allowed, the reported offset clamped to the layout (`by` rows over the engine's own window for a move down from a followed end or a move from the row of a report it had not landed, or a hook's rewrite); the offset the engine held before the move when denied; a plugin's offset when its move landed meanwhile; the reported offset as sent for `no such site`."
        ),
      deny: o().optional().describe("@internal Why the move was denied, when it was."),
      follow_end: M()
        .optional()
        .describe(
          "@internal Present when the site still follows its end after this report (a plugin's followed `end` move that no move took the window off: a wheel landing on the end, a denied wheel): keep the body pinned to the bottom as it grows, as after a ui_scroll push with follow_end."
        )
    }).describe("@internal Where a ui_scroll left the window.")
  ),
  uR = p(() =>
    u({ plugin: o().max(Y), key: o().max(Y) }).describe(
      "@internal A Button, Input or Select a plugin drew, by its `press.plugin` and `props.key`."
    )
  ),
  aVt = p(() =>
    u({
      subtype: A("ui_focus"),
      component: dR(),
      instance_id: o().max(Y),
      is_held: M().describe(
        "@internal Whether the site holds the keyboard now (DOM focus is inside its container)."
      ),
      element: uR()
        .nullable()
        .optional()
        .describe(
          "@internal The element that took the focus ring: one the site draws, or null for the container itself; absent reports `is_held` alone and moves nothing."
        ),
      by: B(["person", "auto"])
        .default("person")
        .describe(
          "@internal Who moved it: the person (Tab, a click), or an `autoFocus` element taking the ring as the site mounted (`auto`, raised as that plugin's move)."
        ),
      surface: K()
        .default("desktop")
        .describe(
          "@internal The surface the site is on; absent means `desktop`. Names the default client when `client_id` is not given."
        ),
      client_id: D().optional()
    }).describe(
      "@internal The keyboard moved in a site a remote surface draws: the engine records the hold and raises `ui.focus` for the element (origin `person`, or the element's plugin under `auto`); a hook may redirect it, which the answer then carries for the surface to follow."
    )
  ),
  T1 = p(() =>
    u({
      moved: M().describe("@internal False when the chain denied the move."),
      element: uR()
        .nullable()
        .describe(
          "@internal The element holding the ring as the engine records it now: the reported one, a hook's redirect the surface should focus, or null on the container."
        ),
      deny: o().optional().describe("@internal Why the move was denied, when it was.")
    }).describe("@internal Where a ui_focus left the ring.")
  ),
  pR = ["ui_copy", "ui_prompt_read", "ui_prompt_fill", "ui_prompt_suggest", "ui_read_selection"],
  w1 = pR.length,
  nSn = p(() =>
    B(pR).describe(
      "@internal A request the engine may send a remote client on a plugin's behalf, which the client says it answers when it attaches."
    )
  ),
  Jt = 1e6,
  Va = p(() =>
    u({
      subtype: A("ui_copy"),
      surface: K(),
      client_id: D(),
      plugin: o().describe("@internal Whose `$.ui.copy` it is, for the app to show or log."),
      text: o()
        .max(Jt)
        .describe(
          "@internal What the person pastes afterwards, verbatim, as the `ui.copy` hooks left it."
        )
    }).describe(
      "@internal Agent-originated: a plugin's `$.ui.copy({ text, surface })` naming a remote surface reached the bottom of the `ui.copy` chain; the app writes `text` to its clipboard and answers `{copied}`. `client_id` is the first client attached on that surface that answers `ui_copy`. Sent only to a client whose ui_attach named `ui_copy` under `answers`; unanswered within 5 s, or an unparsable answer, resolves the plugin `{isCopied: false, reason: 'no-clipboard'}`; an error-shaped reply is another client's refusal and does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."
    )
  ),
  i6o = p(() =>
    u({
      copied: M().describe("@internal Whether the app wrote the text to its clipboard.")
    }).describe("@internal The answer to ui_copy.")
  ),
  ja = p(() =>
    u({ subtype: A("ui_prompt_read"), surface: K(), client_id: D() }).describe(
      "@internal Agent-originated: `prompt.read` reached its core in a headless session (a plugin's `$.prompt.read`, or the read that completes a `$.prompt.fill`); the app answers its composer's draft and cursor. Sent only to a client whose ui_attach named `ui_prompt_read`; unanswered within 5 s, or unparsable, resolves the empty box; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."
    )
  ),
  a6o = p(() =>
    u({
      text: o().describe("@internal The composer's whole draft."),
      cursor: v()
        .int()
        .nonnegative()
        .describe(
          "@internal The caret as a code-unit offset into `text` (0..text.length); the end when the app does not track one."
        )
    }).describe("@internal The answer to ui_prompt_read: the composer as it stands.")
  ),
  mR = p(() =>
    Ue({
      start: v()
        .int()
        .nonnegative()
        .describe("@internal Where the run starts, in UTF-16 code units into this frame's `text`."),
      end: v()
        .int()
        .describe("@internal Where the run ends, exclusive: past `start`, at most `text.length`."),
      color: o().optional().describe("@internal The text color."),
      backgroundColor: o().optional().describe("@internal The color behind the text."),
      dimColor: M().optional().describe("@internal Drawn dim."),
      bold: M().optional().describe("@internal Drawn bold."),
      italic: M().optional().describe("@internal Drawn italic."),
      underline: M().optional().describe("@internal Underlined."),
      strikethrough: M().optional().describe("@internal Struck through.")
    }).describe(
      "@internal One painted run over the text a ui_prompt_fill carries, normalized by the engine: clamped to the text, grapheme-aligned, never empty."
    )
  ),
  qa = p(() =>
    u({
      subtype: A("ui_prompt_fill"),
      surface: K(),
      client_id: D(),
      text: o()
        .max(Jt)
        .describe("@internal The text to place, as the `prompt.fill` hooks left it."),
      mode: B(["replace", "append", "insert"]).describe(
        "@internal Where it goes: `replace` the whole draft, `append` after it, `insert` at the caret. The caret ends after the placed text unless `cursor` names where."
      ),
      decorations: T(mR())
        .optional()
        .describe(
          "@internal Runs to paint over `text`, disjoint and ascending by `start`; the app paints them as given, with no range logic of its own. Omitted when there are none, never empty."
        ),
      cursor: v()
        .int()
        .nonnegative()
        .optional()
        .describe(
          "@internal Where the caret stands after the write instead of after the placed text: a UTF-16 offset into the whole draft the composer then holds, whatever `mode` placed the text. The app clamps it to the end of its draft, and moves one inside a character to the start of that character. Omitted when the fill names none."
        ),
      answers_press: o()
        .optional()
        .describe(
          "@internal The `press_id` of the press whose own handler's call made this `$.prompt.fill`, awaited by that handler or not: the engine's word, which no plugin's argument and no `prompt.fill` hook can set, change or remove. Sent only to the client whose `client_id` the press carried. Absent in every other case: a fill from a hook, a timer no press's handler set, a field or a pick; a fill from code another plugin's call reached; a fill whose text or placement a `prompt.fill` hook changed; a press whose argument a hook changed before its handler ran; a press that carried no `press_id`, or one and no `client_id`; and an answered press, once a newer press of the same plugin that carried an id is answered too. It speaks for this one write, not for the draft the text lands in. The engine checks neither the age of the id nor how often it is named: that is the host's."
        )
    }).describe(
      "@internal Agent-originated: `prompt.fill` reached its core in a headless session (a plugin's `$.prompt.fill`); the app places the text in its composer as the person's draft and answers `{filled}` (false while a dialog holds the keys or the composer is unavailable). Sent only to a client whose ui_attach named `ui_prompt_fill`; unanswered within 5 s, or unparsable, resolves `{isFilled: false}`; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."
    )
  ),
  l6o = p(() =>
    u({ filled: M().describe("@internal Whether the composer now holds the text.") }).describe(
      "@internal The answer to ui_prompt_fill."
    )
  ),
  Ga = p(() =>
    u({
      subtype: A("ui_prompt_suggest"),
      surface: K(),
      client_id: D(),
      text: o()
        .max(Jt)
        .describe(
          "@internal The suggestion to show dim in the empty composer for Tab to take, as the `prompt.suggest` hooks left it."
        )
    }).describe(
      "@internal Agent-originated: `prompt.suggest` reached its core in a headless session (a plugin's `$.prompt.suggest`, or the engine's own guess after a turn); the app shows the text as a placeholder the person accepts with Tab and answers `{shown}` (false while the composer holds text or a turn runs). Sent only to a client whose ui_attach named `ui_prompt_suggest`; unanswered within 5 s, or unparsable, resolves `{isShown: false}`; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."
    )
  ),
  d6o = p(() =>
    u({ shown: M().describe("@internal Whether the composer now shows the suggestion.") }).describe(
      "@internal The answer to ui_prompt_suggest."
    )
  ),
  Ba = p(() =>
    u({ subtype: A("ui_read_selection"), surface: K(), client_id: D() }).describe(
      "@internal Agent-originated: `ui.selection` reached its core in a headless session (a plugin's `$.ui.selection`); the app answers what the person has selected in its page, and keeps answering a selection its own click or key took down for as long as it sees fit (the terminal keeps one until the person's next prompt or command has run). A selection lies in one page, so every attached client whose ui_attach named `ui_read_selection` under `answers` is sent the ask at once, each under its own `client_id` and request id: the first selection to arrive that is not empty is what the plugin reads (of two windows that both hold one, the first to answer wins), an answer that arrives after that is dropped, and when every client answers nothing or stays silent the plugin reads nothing at the one bound. Sent only over the pipes of the host that spawned the process, never over the remote transport nor on a lane whose frames a service persists: the selection is the person's own text. Unanswered by all within 5 s, or unparsable, resolves the plugin `undefined`, as nothing selected does; an error-shaped reply does not settle it."
    )
  ),
  c6o = p(() =>
    u({
      text: o()
        .optional()
        .describe(
          "@internal The selected text as the person sees it: what a copy would put on the clipboard. Left out, or empty, when nothing is selected."
        ),
      instance_id: o()
        .optional()
        .describe(
          "@internal The transcript row the whole selection lies in, by the `instance_id` that row was drawn under (the engine's requestId for it). Left out when the selection spans several rows or lies outside the transcript; ignored without `text`."
        )
    }).describe(
      "@internal The answer to ui_read_selection: the selection, or an empty object for nothing selected."
    )
  ),
  y1 = 32,
  A1 = p(() =>
    u({
      key: o().min(1).max(y1),
      ctrl: A(!0).optional(),
      shift: A(!0).optional(),
      meta: A(!0).optional()
    }).describe(
      "@internal The one key that made an edit, in a `Client`'s `onKey` spelling: a special key's name (`backspace`, `left`, `return`) or the character typed (`space` for a space), each modifier present only when held. The `prompt.edit` hooks reached see it as `e.key`, as for the same key in the terminal."
    )
  ),
  lVt = p(() =>
    u({
      subtype: A("ui_prompt_edit"),
      text: o()
        .max(Jt)
        .describe("@internal The Composer's whole draft after the edit, as the surface holds it."),
      cursor: v()
        .int()
        .nonnegative()
        .describe(
          "@internal The caret after the edit, in UTF-16 code units into `text`; one past the end is clamped to it."
        ),
      key: A1()
        .optional()
        .describe(
          "@internal The one key that made the edit; absent for a paste, a drop, or text that came with no single key."
        ),
      by: B(["person", "app"])
        .default("person")
        .describe(
          "@internal Who changed the box: the person's own edit (`person`, raised as `prompt.edit`), or the app itself when it was not the person typing (`app`: a submit emptied it, a fill landed, a history recall, a draft restore), which the engine adopts as the box before the next edit without raising anything, answering the box with no runs. `app` carries no key."
        ),
      surface: K()
        .default("desktop")
        .describe("@internal The surface the Composer is on; absent means `desktop`."),
      client_id: D()
        .optional()
        .describe(
          "@internal The editing client, as its ui_attach named it; absent names the surface's default client."
        )
    }).describe(
      "@internal An edit in a remote surface's own Composer: the engine raises `prompt.edit` (origin `composer`) over the box before it (the box this client sent last, or the rewrite answered to it when the edit follows from that), as the terminal's editor does for a key, and answers what the Composer is to show. One dispatch per client at a time; of the edits that arrive meanwhile only the newest is raised, the older ones answering `superseded`, and an edit folded that way carries no key. A chain that fails answers the request's own box."
    )
  ),
  R1 = p(() =>
    u({
      text: o().describe(
        "@internal The draft the Composer is to show: the request's own, or a hook's rewrite of it."
      ),
      cursor: v().int().describe("@internal The caret in `text`, clamped into it."),
      decorations: T(mR())
        .optional()
        .describe(
          "@internal The runs to paint over `text`, disjoint and ascending; absent when none paint."
        ),
      superseded: A(!0)
        .optional()
        .describe(
          "@internal Present when a newer edit from the same client came in first: this one was never raised, and its own box is echoed with no runs."
        )
    }).describe("@internal What a ui_prompt_edit's `prompt.edit` chain answered for the Composer.")
  ),
  dVt = p(() =>
    u({
      subtype: A("ui_prompt_autocomplete"),
      text: o().max(Jt).describe("@internal The Composer's whole draft, as the surface holds it."),
      cursor: v()
        .int()
        .nonnegative()
        .describe(
          "@internal The caret, in UTF-16 code units into `text`; one past the end is clamped to it."
        ),
      surface: K()
        .default("desktop")
        .describe("@internal The surface the Composer is on; absent means `desktop`."),
      client_id: D()
        .optional()
        .describe(
          "@internal The asking client, as its ui_attach named it; absent names the surface's default client."
        )
    }).describe(
      "@internal A remote surface's own Composer asks what the plugins add to its autocomplete list: the engine raises `prompt.autocomplete` for the token that ends at the caret (the run of characters that are not whitespace), as the terminal's composer does while the person types, and answers the rows for the surface to draw beneath its own. With no token at the caret nothing is raised and no row is answered. One dispatch per client at a time; of the asks that arrive meanwhile only the newest is raised next, and every ask a newer one overtook answers `superseded` with no row. A chain that fails answers no row."
    )
  ),
  v1 = p(() =>
    u({
      suggestions: T(
        u({
          text: o().describe(
            "@internal What taking the row writes over the token, the caret after it; never empty."
          ),
          label: o().optional().describe("@internal What the row shows; absent, the `text`."),
          description: o().optional().describe("@internal The dim line beside the label.")
        })
      ).describe(
        "@internal The rows the `prompt.autocomplete` hooks answered, in the order to draw them beneath the surface's own."
      ),
      start: v()
        .int()
        .optional()
        .describe(
          "@internal Where the token begins in `text`: a taken row replaces `text` from here to the caret. Absent when no token ends at the caret."
        ),
      superseded: A(!0)
        .optional()
        .describe(
          "@internal Present when a newer ask from the same client overtook this one: it carries no row."
        )
    }).describe("@internal What a ui_prompt_autocomplete answers the Composer.")
  ),
  d4 = p(() =>
    $e([
      Co(),
      ia(),
      ua(),
      Da(),
      La(),
      Na(),
      Pa(),
      da(),
      ca(),
      ha(),
      Grr(),
      xa(),
      Va(),
      ja(),
      qa(),
      Ga(),
      Ba()
    ]).describe(
      "Control requests the agent loop originates and needs a reply to \u2014 the loop\u2192client RPC slice of SDKControlRequestInner. The remaining members are client\u2192loop commands (set/get/mcp/auth/etc)."
    )
  ),
  c4 = p(() =>
    $e([
      zo(),
      Frr(),
      Oo(),
      No(),
      Io(),
      Po(),
      Mo(),
      xo(),
      Lo(),
      Uo(),
      Vo(),
      jo(),
      Wo(),
      Yo(),
      $o(),
      Xo(),
      Qo(),
      Jo(),
      qo(),
      Go(),
      Ko(),
      Ho(),
      Fo(),
      Zo(),
      Urr(),
      Do(),
      ea(),
      ta(),
      sa(),
      na(),
      ra(),
      oa(),
      aa(),
      pa(),
      fa(),
      ma(),
      _a(),
      ga(),
      Ea(),
      Sa(),
      wa(),
      Krr(),
      Vrr(),
      ba(),
      zrr(),
      Brr(),
      jrr(),
      Yrr(),
      ya(),
      Aa(),
      Ra(),
      va(),
      ka(),
      Ca(),
      za(),
      Ma(),
      qrr(),
      Wrr(),
      dqe(),
      Xrr(),
      Jrr(),
      tSn(),
      XKt(),
      Qrr(),
      JKt(),
      QKt(),
      ZKt(),
      Oa(),
      Ta(),
      eVt(),
      tVt(),
      nVt(),
      rVt(),
      oVt(),
      sVt(),
      iVt(),
      aVt(),
      lVt(),
      dVt()
    ]).describe(
      "Control requests a client sends to drive the loop \u2014 the client\u2192loop command slice of SDKControlRequestInner. The remaining members are loop\u2192client RPCs that block on a reply (see AgentOriginatedControlRequest)."
    )
  ),
  k1 = p(() =>
    $e([
      zo(),
      Co(),
      Frr(),
      Oo(),
      No(),
      Io(),
      Po(),
      Mo(),
      xo(),
      Lo(),
      Uo(),
      Vo(),
      jo(),
      Wo(),
      Yo(),
      $o(),
      Xo(),
      Qo(),
      Jo(),
      qo(),
      Go(),
      Ko(),
      Ho(),
      Fo(),
      Zo(),
      Urr(),
      Do(),
      ia(),
      ua(),
      ea(),
      ta(),
      sa(),
      na(),
      ra(),
      oa(),
      aa(),
      pa(),
      fa(),
      ma(),
      _a(),
      ga(),
      Ea(),
      Sa(),
      wa(),
      Krr(),
      Vrr(),
      ba(),
      zrr(),
      Brr(),
      jrr(),
      Yrr(),
      Da(),
      La(),
      ya(),
      Aa(),
      Ra(),
      va(),
      ka(),
      Ca(),
      za(),
      Na(),
      Pa(),
      Ma(),
      qrr(),
      Wrr(),
      da(),
      ca(),
      ha(),
      Grr(),
      Xrr(),
      Jrr(),
      tSn(),
      XKt(),
      Qrr(),
      JKt(),
      QKt(),
      ZKt(),
      xa(),
      dqe(),
      Oa(),
      Ta(),
      eVt(),
      tVt(),
      nVt(),
      rVt(),
      oVt(),
      sVt(),
      iVt(),
      aVt(),
      lVt(),
      dVt(),
      Va(),
      ja(),
      qa(),
      Ga(),
      Ba()
    ])
  );
function g(e, s, n) {
  return { request: e, originator: s, response: n };
}
var h4 = p(() => [
    g(zo(), "client", YW()),
    g(Co(), "agent", bA()),
    g(Frr(), "client", WW()),
    g(Oo(), "client", $W()),
    g(No(), "client", XW()),
    g(Io(), "client", null),
    g(Po(), "client", null),
    g(Mo(), "client", void 0),
    g(xo(), "client", QW()),
    g(Lo(), "client", TY()),
    g(Uo(), "client", ZW()),
    g(Vo(), "client", eY()),
    g(jo(), "client", tY()),
    g(Wo(), "client", hY()),
    g(Yo(), "client", pY()),
    g($o(), "client", mY()),
    g(Xo(), "client", _Y()),
    g(Qo(), "client", gY()),
    g(Jo(), "client", fY()),
    g(qo(), "client", nY()),
    g(Go(), "client", rY()),
    g(Ko(), "client", oY()),
    g(Ho(), "client", aY()),
    g(Fo(), "client", iY()),
    g(Zo(), "client", bY()),
    g(Urr(), "client", wY()),
    g(Do(), "client", JW()),
    g(ia(), "agent", yA()),
    g(ua(), "both", jY()),
    g(ea(), "client", yY()),
    g(ta(), "client", AY()),
    g(sa(), "client", RY()),
    g(na(), "client", vY()),
    g(ra(), "client", zY()),
    g(oa(), "client", CY()),
    g(aa(), "client", null),
    g(pa(), "client", qY()),
    g(fa(), "client", HY()),
    g(ma(), "client", GY()),
    g(_a(), "client", BY()),
    g(ga(), "client", KY()),
    g(Ea(), "client", null),
    g(Sa(), "client", null),
    g(wa(), "client", void 0),
    g(Krr(), "client", null),
    g(Vrr(), "client", null),
    g(ba(), "client", FY()),
    g(zrr(), "client", WY()),
    g(Brr(), "client", ZEt()),
    g(jrr(), "client", MY()),
    g(Yrr(), "client", r1()),
    g(Da(), "agent", Zbn()),
    g(La(), "agent", s6o()),
    g(ya(), "client", null),
    g(Aa(), "client", $Y()),
    g(Ra(), "client", XY()),
    g(va(), "client", null),
    g(ka(), "client", QY()),
    g(Ca(), "client", JY()),
    g(za(), "client", null),
    g(Na(), "agent", r6o()),
    g(Pa(), "agent", Qbn()),
    g(Ma(), "client", QA()),
    g(qrr(), "client", QA()),
    g(Wrr(), "client", xY()),
    g(da(), "agent", DY()),
    g(ca(), "agent", LY()),
    g(ha(), "agent", UY()),
    g(Grr(), "agent", null),
    g(Xrr(), "client", i1()),
    g(Jrr(), "client", l1()),
    g(tSn(), "client", lR()),
    g(XKt(), "client", d1()),
    g(Qrr(), "client", c1()),
    g(JKt(), "client", h1()),
    g(QKt(), "client", u1()),
    g(ZKt(), "client", m1()),
    g(xa(), "agent", o6o()),
    g(dqe(), "client", VY()),
    g(Oa(), "client", n1()),
    g(Ta(), "client", YY()),
    g(eVt(), "client", _1()),
    g(tVt(), "client", g1()),
    g(nVt(), "client", So()),
    g(rVt(), "client", f1()),
    g(oVt(), "client", b1()),
    g(sVt(), "client", E1()),
    g(iVt(), "client", S1()),
    g(aVt(), "client", T1()),
    g(lVt(), "client", R1()),
    g(dVt(), "client", v1()),
    g(Va(), "agent", i6o()),
    g(ja(), "agent", a6o()),
    g(qa(), "agent", l6o()),
    g(Ga(), "agent", d6o()),
    g(Ba(), "agent", c6o())
  ]),
  fn = p(() =>
    u({
      type: A("control_request"),
      request_id: o().describe(
        "Chosen by the sender, unique among its in-flight requests; the control_response (and any control_cancel_request) for this request echoes it."
      ),
      request: k1()
    }).describe(
      "Envelope for a control-protocol request, sent by either side on the same stream as the messages. The receiver normally answers with exactly one control_response carrying the same request_id (a few request types document when no answer is sent), and a requester ignores responses for request_ids it is not waiting on. Each request type's own documentation says which side sends it and what its success response carries."
    )
  ),
  _R = p(() =>
    T(gA(() => fn()))
      .optional()
      .describe(
        'can_use_tool requests this CLI process has issued and not yet resolved, so a client joining an already-initialized session learns about in-flight prompts. Always present (possibly empty) on a success `initialize` response from Claude Code v2.1.268 or later; earlier versions could omit it, so treat absence as an older CLI rather than as "nothing pending". A prompt inherited from a previous worker of the same session can remain answerable without appearing here and without a control_cancel_request; session_state "requires_action" on the same reply signals one the CLI is holding, but not every inherited prompt is signalled.'
      )
  ),
  gR = p(() =>
    T(gA(() => fn()))
      .optional()
      .describe(
        'request_user_dialog requests this CLI process has issued and not yet resolved (sibling of pending_permission_requests, with the same inherited-prompt caveat), so a client joining an already-initialized session can re-arm in-flight dialogs. Always present (possibly empty) on a success `initialize` response from Claude Code v2.1.268 or later; earlier versions could omit it, so treat absence as an older CLI rather than as "nothing pending". Receivers must tolerate the same request_id also arriving as a live or replayed control_request frame and render it once.'
      )
  ),
  z1 = p(() =>
    u({
      subtype: A("success"),
      request_id: o().describe("The request_id of the control_request this answers."),
      response: me(o(), oe())
        .optional()
        .describe(
          "The success payload, shaped as documented for the answered request's subtype; absent or {} for requests that are merely acknowledged."
        ),
      pending_permission_requests: _R(),
      pending_user_dialog_requests: gR()
    }).describe("The request was handled.")
  ),
  C1 = p(() =>
    u({
      subtype: A("error"),
      request_id: o().describe("The request_id of the control_request this answers."),
      error: o().describe("Human-readable failure description."),
      error_code: B(Qy)
        .optional()
        .catch(void 0)
        .describe(
          "@internal Why the request got an error answer, stamped from the state the handler branched on (never parsed from `error`). set_model: invalid_request, catalog_unknown (not shaped like a model id), not_found (the API serves no such model), restricted_by_org, unavailable_for_account, not_offered (a newer Claude Code may offer it), alias_1m_disabled (CLAUDE_CODE_DISABLE_1M_CONTEXT), alias_1m_unsupported, blocked_by_hook (also when the model kept changing while the hooks ran, which a retry may get past), check_failed (the API settled nothing about the model; a retry may pass), check_rejected (the API answered with an error no retry or sign-in clears), credits_required (a 429 whose body carries that error_code, and nothing clears it by itself), rate_limit (any other 429, even a usage-credits refusal that has no such code or that clears by itself), auth_failed (sign in again), model_not_current, verdict_pending (not a refusal: the outcome follows as a system/informational message), internal_error (the switch may or may not have applied). apply_flag_settings: verdict_pending, rarely internal_error. set_permission_mode: invalid_mode, bypass_restricted, bypass_disabled, bypass_not_launched, and for auto auto_mode_settings, auto_mode_circuit_breaker, auto_mode_fast_mode, auto_mode_model or auto_mode_unavailable. remote_control (a failed enable whose cause the bridge reported): remote_control_auth (sign in again), remote_control_terminal, remote_control_ended_elsewhere, remote_control_policy_disabled. get_workspace_diff: workspace_diff_pending (the diff was not ready when the reply was due; ask again shortly, since a diff that finishes in the meantime is returned to the next request that comes within a minute). interrupt (a claude-code-server tenant, by worker_epoch): stale_worker_epoch (it is for another worker life; no turn was stopped), invalid_worker_epoch (it is no whole number of 1 or more; likewise). read_file with the anchor as_written: read_denied (the one refusal, the same for every cause; a plain read_file and the other anchors carry no code). Absent on every other error; new values are additive, so treat an unknown one as absent."
        ),
      model: o()
        .optional()
        .describe(
          "@internal set_model only: the model the session's next turn runs as of this answer, spelled as on the success payload's `model`. A refusal leaves the model as it was, and a restarted cloud worker can already run the requested model: it starts on the host's last pick. One refusal moves it: when the server refuses for good the model that a restarted worker started on, before any turn, the session goes back to the model recorded for it. The fixed 'set_model failed' reply can follow an applied switch, so it names the model too. A refusal fallback in a running turn, before or after this answer, can move the next turn to another model. `claude -p` writes it on its stream-json control channel, unless it cannot read the model. A claude-code-server tenant writes it too, except on its 'still pending' answer. claude -p's Remote Control bridge lane and interactive Remote Control leave it out."
        ),
      pending_permission_requests: _R(),
      pending_user_dialog_requests: gR()
    }).describe(
      "The request failed or was rejected (unknown subtype, invalid arguments, or an error while handling it)."
    )
  ),
  fYr = p(() =>
    u({ type: A("control_response"), response: $e([z1(), C1()]) }).describe(
      "Envelope for the single reply to a control_request, sent by whichever side received the request."
    )
  ),
  cVt = p(() =>
    u({
      type: A("control_cancel_request"),
      request_id: o().describe("The request_id of the control_request being withdrawn.")
    }).describe(
      "Tells the other side that the sender no longer needs the answer to one of its own in-flight control_requests (for example a pending can_use_tool prompt after the turn was interrupted, or one that another client already answered). Either side may send it for a request it originated. The sender stops waiting at once and ignores any control_response that still arrives for that request_id; a receiver that can abort the work does so and may still reply (typically with an error), otherwise it simply completes the request. There is no reply to the cancel itself."
    )
  ),
  fR = p(() =>
    u({ type: A("keep_alive") }).describe(
      "Liveness heartbeat. Either side may send it at any time (the CLI emits it periodically, for example while a long-running control request is in progress); receivers must ignore it. It has no payload. One use is not part of this schema: for startup() and prewarm() of the Agent SDK, which set CLAUDE_CODE_SDK_READS_STARTUP_MARKS, the CLI writes lines of this type with a `startup_mark` field, the name of a start-up checkpoint that it has passed, before the initialize response."
    )
  ),
  O1 = p(() =>
    u({
      type: A("update_environment_variables"),
      variables: me(o(), o()),
      request_id: o().optional()
    }).describe("Updates environment variables at runtime.")
  ),
  N1 = p(() =>
    u({
      type: A("session_notice"),
      uuid: o(),
      notice_class: o().describe(
        'Server-chosen notice class: "peer_notice" | "helper_lifecycle" | "handoff" (open snake_case set; unknown tokens are carried verbatim).'
      ),
      from_session_id: o().describe("Server-verified sender session id."),
      content: o(),
      isSynthetic: A(!0).describe(
        "Server-asserted synthetic stamp \u2014 stripped from inbound copies at CCR ingress and re-stamped only by the notice composer."
      ),
      inbound_origin: A("mcp_session_notice").describe(
        "Server-asserted ingest-path marker, same strip-and-restamp discipline as isSynthetic."
      ),
      session_id: o().optional()
    }).describe(
      "@internal Backend\u2192CLI: a server-composed coordination notice for a sealed helper session, delivered to the model over the Poll event channel as a provenance-attributed <event> envelope (never a user turn, never a synthetic message). The CLI acks processed only when the Poll delivery settles into the transcript; undelivered notices redeliver."
    )
  ),
  I1 = p(() =>
    u({
      type: A("queued_notification"),
      notification: u({
        notification_id: o().describe(
          "Server-assigned stable id \u2014 the dedup key across redeliveries."
        ),
        origin: o().describe(
          'Server-attested source token: "github_webhook" | "trigger_fire" | "mcp_send_message" (open set; unknown values render verbatim).'
        ),
        content: o().describe(
          "Exactly the text that would previously have been injected as a user turn, framing included."
        ),
        priority: B(["now", "next", "later"]),
        queued_at: o().describe("RFC3339 timestamp of when the backend queued it.")
      }),
      uuid: o().optional(),
      session_id: o().optional()
    }).describe(
      "@internal Backend\u2192CLI: a trigger delivery (webhook activity, scheduled trigger, agent message) queued server-side instead of injected as a user turn. The CLI buffers it, nudges the model to call the ReadNotifications tool, and acks the event processed only when drained \u2014 an undrained event redelivers on resume."
    )
  ),
  u4 = p(() =>
    $e([yo(), _o(), go(), fo(), bo(), To(), wo()]).describe(
      "Observational messages the agent loop emits \u2014 fire-and-forget, no reply expected. The remaining StdoutMessage members are control-protocol traffic (requests the loop originates and needs a reply to, responses to client-originated requests, keep-alives). This sub-union is the target for QueryEvent convergence so a Transport-shaped REPL can consume events without filtering control noise."
    )
  ),
  u6o = p(() =>
    $e([yo(), _o(), go(), fo(), bo(), To(), fYr(), fn(), cVt(), fR(), wo()]).describe(
      "Everything the CLI writes to its output stream (stdout in stream-json mode): exactly one StdoutMessage per line, as a single JSON object. Besides the SDKMessage members this includes the control protocol - control requests the CLI originates, control responses to the client's requests, cancellations and keep-alives."
    )
  ),
  p4 = p(() =>
    $e([un(), CA(), fn(), fYr(), cVt(), fR(), O1(), I1(), N1()]).describe(
      "Everything a client may write to the CLI's input stream (stdin in stream-json input mode): exactly one StdinMessage per line, as a single JSON object - user messages that start turns, control requests the client originates, control responses answering the CLI's requests, cancellations and keep-alives. initialize is optional and normally the first line; the first user message initializes with defaults. An initialize that arrives later (e.g. from a client joining the session) is answered with the current state: the one-time session setup (e.g. system prompt, agents, skills, supportedDialogKinds) is not re-applied, but title, sdkMcpServers and agentProgressSummaries are still processed on every initialize, and hooks sent by the process that owns this stream replace the earlier set (see hooks_applied on the response). Closing the stream tells the CLI to finish the current turn and exit."
    )
  );
function P1(e) {
  return [...e.replace(/[\x00-\x1f\x7f-\x9f]/g, "")].slice(0, cM).join("");
}
function Vi(e) {
  return P1(Cn(e.trim())).trim();
}
var Be = "Bash";
var At = "PowerShell";
var T4 = ve({ accepted: !1 }, (e) => {
  e.accepted = !1;
});
export {
  Mbn,
  Q4r,
  wb,
  zEt,
  fI,
  nqe,
  C5o,
  UKt,
  mRe,
  Dbn,
  nE,
  Lue,
  Nue,
  Z4r,
  R5o,
  Crr,
  tbe,
  eYr,
  rqe,
  nrt,
  iM,
  BKt,
  Hbn,
  Lbn,
  rrt,
  aZ,
  Mj,
  jKt,
  KEt,
  x5o,
  Nbn,
  P5o,
  I5o,
  $bn,
  pI,
  oqe,
  Nz,
  M5,
  GS,
  uS,
  Dj,
  Nw,
  $z,
  Rrr,
  O5o,
  Fbn,
  M5o,
  iC,
  $ue,
  D5o,
  Fz,
  Uz,
  GV,
  VEt,
  H5o,
  N$,
  nNe,
  WKt,
  Ubn,
  GKt,
  Fue,
  Hj,
  Lj,
  tYr,
  l_,
  qEt,
  gRe,
  Ux,
  zKt,
  Xoi,
  L5o,
  zS,
  ZU,
  nbe,
  aM,
  rNe,
  Joi,
  xrr,
  N5o,
  Qoi,
  Zoi,
  KKt,
  nYr,
  hRe,
  yRe,
  oy,
  VKt,
  _Re,
  $5o,
  F5o,
  Prr,
  Irr,
  D5,
  _l,
  An,
  lZ,
  ff,
  esi,
  U5o,
  B5o,
  tsi,
  Boe,
  bRe,
  nsi,
  mwi,
  E0,
  mI,
  Wf,
  sqe,
  Ls,
  j5o,
  W5o,
  Bbn,
  G5o,
  z5o,
  K5o,
  jbn,
  Uue,
  V5o,
  q5o,
  rYr,
  H5,
  iqe,
  xPi,
  oYr,
  Orr,
  Mrr,
  YEt,
  sYr,
  Wbn,
  ort,
  iYr,
  Gbn,
  joe,
  Nj,
  XEt,
  rsi,
  Drr,
  fl,
  aqe,
  Vm,
  JEt,
  at,
  zbn,
  Kbn,
  Vbn,
  qbn,
  Ybn,
  Xbn,
  qKt,
  QEt,
  osi,
  dZ,
  qt,
  Y5o,
  ssi,
  srt,
  Hrr,
  Jbn,
  isi,
  Woe,
  k0,
  oNe,
  asi,
  Lrr,
  lsi,
  cZ,
  aYr,
  lYr,
  dYr,
  SRe,
  Nrr,
  YKt,
  X5o,
  lqe,
  J5o,
  irt,
  cYr,
  Q5o,
  $rr,
  uYr,
  Z5o,
  e6o,
  Frr,
  Urr,
  t6o,
  n6o,
  Brr,
  ZEt,
  jrr,
  Wrr,
  Grr,
  dqe,
  zrr,
  Krr,
  Vrr,
  r6o,
  Qbn,
  qrr,
  o6o,
  Zbn,
  s6o,
  Yrr,
  eSn,
  Xrr,
  Jrr,
  tSn,
  XKt,
  Qrr,
  JKt,
  QKt,
  ZKt,
  eVt,
  tVt,
  nVt,
  rVt,
  oVt,
  sVt,
  iVt,
  aVt,
  nSn,
  i6o,
  a6o,
  l6o,
  d6o,
  c6o,
  lVt,
  dVt,
  fYr,
  cVt,
  u6o,
  Vi,
  Be,
  At,
  dsi
};

//# sourceMappingURL=chunk-at88wjsn.js.map
