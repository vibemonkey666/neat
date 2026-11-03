// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Gy, sF, Pxe, ie, Hb, hW, Z$e, tpe, t } from "./chunk-4kxznmzw.js";
import { re, Wc } from "./chunk-a16y5hcz.js";
import { X } from "./chunk-4hww8411.js";
import { p } from "./chunk-qmkm2x59.js";
import { zCt } from "./chunk-qq3ygwcj.js";
import { E } from "./chunk-fs43t96t.js";
import { gk, XH } from "./chunk-h5gbmqm1.js";
import { O } from "./chunk-19xvg81r.js";
import { Wot } from "./chunk-gg53p5cf.js";
import { Mt } from "./chunk-adv24f35.js";
import { Nr, io } from "./chunk-928ws1pg.js";
import { TZo, u6, vr, NH, F4t, yo, f6 } from "./chunk-azq9hjy0.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, v, M, oe, P4e, T, u, Ue, $e, Gr, me, eSe, B, A, gA, Ia } from "./chunk-0bqrj5ah.js";
import { xEn } from "./chunk-527647eb.js";
import { iSe, iZo, eX } from "./chunk-v4kbwz0z.js";
var Ud = [
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
  Ddi = ["clear", "resume", "logout", "prompt_input_exit", "other"],
  U0 = "__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__";
import { posix as zs, win32 as Os } from "path";
var i3r = {
  ".ts": "ts",
  ".tsx": "tsx",
  ".jsx": "jsx",
  ".js": "js",
  ".mjs": "js",
  ".cjs": "js",
  ".mts": "ts",
  ".cts": "ts"
};
var UTt = Object.keys(i3r);
var ZJo = `${UTt.slice(0, -1).join(", ")} or ` + String(UTt.at(-1));
import { isIPv4 as Rn, isIPv6 as Je } from "net";
var Pn = new Set([
    "metadata.google.internal",
    "metadata.goog",
    "metadata",
    "instance-data",
    "instance-data.ec2.internal",
    "ip6-localhost",
    "ip6-loopback",
    "localhost.localdomain",
    "localhost4",
    "localhost4.localdomain4",
    "localhost6",
    "localhost6.localdomain6"
  ]),
  Ze = new Set(["100.100.100.200", "168.63.129.16", "192.0.0.192"]);
function Xe(e, n, s, r) {
  return e === 127 || (e === 169 && n === 254) || e === 0;
}
function Qe(e) {
  let n = e.indexOf("%"),
    r = (n >= 0 ? e.slice(0, n) : e).toLowerCase().split("::");
  if (r.length > 2) return;
  let i = r[0] ? r[0].split(":") : [],
    a = r.length === 2 && r[1] ? r[1].split(":") : [],
    c = r.length === 2 ? a : i,
    l = [],
    d = c.at(-1);
  if (d !== void 0 && d.includes(".")) {
    let _ = d.split(".").map(Number);
    if (_.length !== 4 || _.some((b) => !Number.isInteger(b) || b < 0 || b > 255)) return;
    ((l = _), c.pop());
  }
  let g = (_) => {
      let b = [];
      for (let x of _) {
        if (!/^[0-9a-f]{1,4}$/.test(x)) return;
        let w = parseInt(x, 16);
        b.push(w >> 8, w & 255);
      }
      return b;
    },
    m = g(r.length === 2 ? i : []),
    h = g(c);
  if (m === void 0 || h === void 0) return;
  let f = m.length + h.length + l.length;
  if (f > 16 || (r.length === 1 && f !== 16)) return;
  return [...m, ...Array(16 - f).fill(0), ...h, ...l];
}
function et(e) {
  return ke(e) && e[4] === 0 && e[5] === 1;
}
function ke(e) {
  return e[0] === 0 && e[1] === 100 && e[2] === 255 && e[3] === 155;
}
function Uvn(e) {
  if (!Je(e)) return !1;
  let n = Qe(e);
  if (n === void 0) return !1;
  let r = n.slice(0, 10).every((a) => a === 0) && n[10] === 255 && n[11] === 255,
    i = ke(n) && n.slice(4, 12).every((a) => a === 0);
  return r || i || et(n);
}
function Mn(e) {
  let n = [];
  if (e[0] === 32 && e[1] === 2) n.push(e.slice(2, 6));
  let s = e.slice(0, 10).every((l) => l === 0),
    r = s && e[10] === 255 && e[11] === 255,
    i = s && e[10] === 0 && e[11] === 0,
    a = ke(e) && e.slice(4, 12).every((l) => l === 0),
    c = (e[8] === 0 || e[8] === 2) && e[9] === 0 && e[10] === 94 && e[11] === 254;
  if (r || i || a || c) n.push(e.slice(12, 16));
  return n;
}
function Ase(e) {
  let n = e.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.endsWith(".")) n = n.slice(0, -1);
  if (n === "" || n === "localhost" || n.endsWith(".localhost")) return !0;
  if (Pn.has(n)) return !0;
  if (n.startsWith("instance-data.") && n.endsWith(".compute.internal")) return !0;
  if (Rn(n)) {
    if (Ze.has(n)) return !0;
    let [r = 0, i = 0, a = 0, c = 0] = n.split(".").map(Number);
    return Xe(r, i, a, c);
  }
  if (!Je(n)) return !1;
  let s = Qe(n);
  if (s === void 0) return !0;
  if (et(s)) return !0;
  if (s.every((r) => r === 0)) return !0;
  if (s.slice(0, 15).every((r) => r === 0) && s[15] === 1) return !0;
  if (n === "fd00:ec2::254") return !0;
  if (s[0] === 254 && (s[1] ?? 0) >= 128 && (s[1] ?? 0) <= 191) return !0;
  return Mn(s).some((r) => {
    let [i = 0, a = 0, c = 0, l = 0] = r;
    return Xe(i, a, c, l) || Ze.has(`${i}.${a}.${c}.${l}`);
  });
}
function d4e(e) {
  if (e.href) return e.href;
  let n =
    e.host ??
    (e.hostname &&
      (e.hostname.includes(":") && !e.hostname.startsWith("[") ? `[${e.hostname}]` : e.hostname) +
        (e.port ? `:${e.port}` : ""));
  return e.protocol && n ? `${e.protocol}//${n}` : "";
}
function bfe(e, n) {
  try {
    let s = new URL(e).origin,
      r = new URL(n).origin;
    return s !== "null" && s === r;
  } catch {
    return !1;
  }
}
var tt = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g;
function nt(e) {
  return e.replace(tt, (n) => (n.length === 2 ? n : ""));
}
var ve = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu;
function Zt(e) {
  if (typeof e !== "string") return "";
  return re(ear(e.length > 4096 ? e.slice(0, 4096) : e), 1024);
}
function ear(e) {
  if (typeof e !== "string") return "";
  let n = e;
  for (let s = 0; s < 64; s++) {
    let r = nt(n).replace(ve, "");
    if (r === n) return r;
    n = r;
  }
  return "";
}
function eQo(e) {
  if (typeof e !== "string") return "";
  return (e.length > 4096 ? e.slice(0, 4096) : e)
    .replace(tt, (s) => (s.length === 2 ? s : " "))
    .replace(ve, " ");
}
function Wqt(e) {
  if (e.length > 16384) return null;
  let n = e;
  for (let s = 0; s < 64; s++) {
    let r = nt(n).replace(ve, "");
    if (r === n) return [...r].length <= 8192 ? r : null;
    n = r;
  }
  return null;
}
function Ndi(e) {
  let n = e.slice(0, 3).map((r) => Wqt(r) ?? "[elicitation URL too long to relay]"),
    s =
      e.length > 3
        ? ` \u2026and ${e.length - 3} more \u2014 re-run in the terminal to see all`
        : "";
  return `${n.join(", ")}${s}`;
}
function W(e) {
  return !Array.isArray ? ut(e) === "[object Array]" : Array.isArray(e);
}
var In = 1 / 0;
function Tn(e) {
  if (typeof e == "string") return e;
  let n = e + "";
  return n == "0" && 1 / e == -In ? "-0" : n;
}
function An(e) {
  return e == null ? "" : Tn(e);
}
function q(e) {
  return typeof e === "string";
}
function lt(e) {
  return typeof e === "number";
}
function En(e) {
  return e === !0 || e === !1 || (Un(e) && ut(e) == "[object Boolean]");
}
function ct(e) {
  return typeof e === "object";
}
function Un(e) {
  return ct(e) && e !== null;
}
function L(e) {
  return e !== void 0 && e !== null;
}
function xe(e) {
  return !e.trim().length;
}
function ut(e) {
  return e == null
    ? e === void 0
      ? "[object Undefined]"
      : "[object Null]"
    : Object.prototype.toString.call(e);
}
var zn = "Incorrect 'index' type",
  On = (e) => `Invalid value for key ${e}`,
  Kn = (e) => `Pattern length exceeds max of ${e}.`,
  Ln = (e) => `Missing ${e} property in key`,
  Hn = (e) => `Property 'weight' in key '${e}' must be a positive integer`,
  st = Object.prototype.hasOwnProperty;
class pt {
  constructor(e) {
    ((this._keys = []), (this._keyMap = {}));
    let n = 0;
    (e.forEach((s) => {
      let r = dt(s);
      (this._keys.push(r), (this._keyMap[r.id] = r), (n += r.weight));
    }),
      this._keys.forEach((s) => {
        s.weight /= n;
      }));
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function dt(e) {
  let n = null,
    s = null,
    r = null,
    i = 1,
    a = null;
  if (q(e) || W(e)) ((r = e), (n = ot(e)), (s = Ce(e)));
  else {
    if (!st.call(e, "name")) throw Error(Ln("name"));
    let c = e.name;
    if (((r = c), st.call(e, "weight"))) {
      if (((i = e.weight), i <= 0)) throw Error(Hn(c));
    }
    ((n = ot(c)), (s = Ce(c)), (a = e.getFn));
  }
  return { path: n, id: s, weight: i, src: r, getFn: a };
}
function ot(e) {
  return W(e) ? e : e.split(".");
}
function Ce(e) {
  return W(e) ? e.join(".") : e;
}
function Nn(e, n) {
  let s = [],
    r = !1,
    i = (a, c, l) => {
      if (!L(a)) return;
      if (!c[l]) s.push(a);
      else {
        let d = c[l],
          g = a[d];
        if (!L(g)) return;
        if (l === c.length - 1 && (q(g) || lt(g) || En(g))) s.push(An(g));
        else if (W(g)) {
          r = !0;
          for (let m = 0, h = g.length; m < h; m += 1) i(g[m], c, l + 1);
        } else if (c.length) i(g, c, l + 1);
      }
    };
  return (i(e, q(n) ? n.split(".") : n, 0), r ? s : s[0]);
}
var jn = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  Fn = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (e, n) => (e.score === n.score ? (e.idx < n.idx ? -1 : 1) : e.score < n.score ? -1 : 1)
  },
  Gn = { location: 0, threshold: 0.6, distance: 100 },
  $n = {
    useExtendedSearch: !1,
    getFn: Nn,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1
  },
  y = { ...Fn, ...jn, ...Gn, ...$n },
  Bn = /[^ ]+/g;
function qn(e = 1, n = 3) {
  let s = new Map(),
    r = Math.pow(10, n);
  return {
    get(i) {
      let a = i.match(Bn).length;
      if (s.has(a)) return s.get(a);
      let c = 1 / Math.pow(a, 0.5 * e),
        l = parseFloat(Math.round(c * r) / r);
      return (s.set(a, l), l);
    },
    clear() {
      s.clear();
    }
  };
}
class he {
  constructor({ getFn: e = y.getFn, fieldNormWeight: n = y.fieldNormWeight } = {}) {
    ((this.norm = qn(n, 3)), (this.getFn = e), (this.isCreated = !1), this.setIndexRecords());
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    ((this.keys = e),
      (this._keysMap = {}),
      e.forEach((n, s) => {
        this._keysMap[n.id] = s;
      }));
  }
  create() {
    if (this.isCreated || !this.docs.length) return;
    if (((this.isCreated = !0), q(this.docs[0])))
      this.docs.forEach((e, n) => {
        this._addString(e, n);
      });
    else
      this.docs.forEach((e, n) => {
        this._addObject(e, n);
      });
    this.norm.clear();
  }
  add(e) {
    let n = this.size();
    if (q(e)) this._addString(e, n);
    else this._addObject(e, n);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let n = e, s = this.size(); n < s; n += 1) this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(e, n) {
    return e[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, n) {
    if (!L(e) || xe(e)) return;
    let s = { v: e, i: n, n: this.norm.get(e) };
    this.records.push(s);
  }
  _addObject(e, n) {
    let s = { i: n, $: {} };
    (this.keys.forEach((r, i) => {
      let a = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
      if (!L(a)) return;
      if (W(a)) {
        let c = [],
          l = [{ nestedArrIndex: -1, value: a }];
        while (l.length) {
          let { nestedArrIndex: d, value: g } = l.pop();
          if (!L(g)) continue;
          if (q(g) && !xe(g)) {
            let m = { v: g, i: d, n: this.norm.get(g) };
            c.push(m);
          } else if (W(g))
            g.forEach((m, h) => {
              l.push({ nestedArrIndex: h, value: m });
            });
        }
        s.$[i] = c;
      } else if (q(a) && !xe(a)) {
        let c = { v: a, n: this.norm.get(a) };
        s.$[i] = c;
      }
    }),
      this.records.push(s));
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function gt(e, n, { getFn: s = y.getFn, fieldNormWeight: r = y.fieldNormWeight } = {}) {
  let i = new he({ getFn: s, fieldNormWeight: r });
  return (i.setKeys(e.map(dt)), i.setSources(n), i.create(), i);
}
function Wn(e, { getFn: n = y.getFn, fieldNormWeight: s = y.fieldNormWeight } = {}) {
  let { keys: r, records: i } = e,
    a = new he({ getFn: n, fieldNormWeight: s });
  return (a.setKeys(r), a.setIndexRecords(i), a);
}
function de(
  e,
  {
    errors: n = 0,
    currentLocation: s = 0,
    expectedLocation: r = 0,
    distance: i = y.distance,
    ignoreLocation: a = y.ignoreLocation
  } = {}
) {
  let c = n / e.length;
  if (a) return c;
  let l = Math.abs(r - s);
  if (!i) return l ? 1 : c;
  return c + l / i;
}
function Yn(e = [], n = y.minMatchCharLength) {
  let s = [],
    r = -1,
    i = -1,
    a = 0;
  for (let c = e.length; a < c; a += 1) {
    let l = e[a];
    if (l && r === -1) r = a;
    else if (!l && r !== -1) {
      if (((i = a - 1), i - r + 1 >= n)) s.push([r, i]);
      r = -1;
    }
  }
  if (e[a - 1] && a - r >= n) s.push([r, a - 1]);
  return s;
}
var te = 32;
function Vn(
  e,
  n,
  s,
  {
    location: r = y.location,
    distance: i = y.distance,
    threshold: a = y.threshold,
    findAllMatches: c = y.findAllMatches,
    minMatchCharLength: l = y.minMatchCharLength,
    includeMatches: d = y.includeMatches,
    ignoreLocation: g = y.ignoreLocation
  } = {}
) {
  if (n.length > te) throw Error(Kn(te));
  let m = n.length,
    h = e.length,
    f = Math.max(0, Math.min(r, h)),
    _ = a,
    b = f,
    x = l > 1 || d,
    w = x ? Array(h) : [],
    U;
  while ((U = e.indexOf(n, b)) > -1) {
    let C = de(n, { currentLocation: U, expectedLocation: f, distance: i, ignoreLocation: g });
    if (((_ = Math.min(C, _)), (b = U + m), x)) {
      let k = 0;
      while (k < m) ((w[U + k] = 1), (k += 1));
    }
  }
  b = -1;
  let D = [],
    V = 1,
    se = m + h,
    pe = 1 << (m - 1);
  for (let C = 0; C < m; C += 1) {
    let k = 0,
      R = se;
    while (k < R) {
      if (
        de(n, {
          errors: C,
          currentLocation: f + R,
          expectedLocation: f,
          distance: i,
          ignoreLocation: g
        }) <= _
      )
        k = R;
      else se = R;
      R = Math.floor((se - k) / 2 + k);
    }
    se = R;
    let Z = Math.max(1, f - R + 1),
      j = c ? h : Math.min(f + R, h) + m,
      z = Array(j + 2);
    z[j + 1] = (1 << C) - 1;
    for (let P = j; P >= Z; P -= 1) {
      let F = P - 1,
        K = s[e.charAt(F)];
      if (x) w[F] = +!!K;
      if (((z[P] = ((z[P + 1] << 1) | 1) & K), C)) z[P] |= ((D[P + 1] | D[P]) << 1) | 1 | D[P + 1];
      if (z[P] & pe) {
        if (
          ((V = de(n, {
            errors: C,
            currentLocation: F,
            expectedLocation: f,
            distance: i,
            ignoreLocation: g
          })),
          V <= _)
        ) {
          if (((_ = V), (b = F), b <= f)) break;
          Z = Math.max(1, 2 * f - b);
        }
      }
    }
    if (
      de(n, {
        errors: C + 1,
        currentLocation: f,
        expectedLocation: f,
        distance: i,
        ignoreLocation: g
      }) > _
    )
      break;
    D = z;
  }
  let S = { isMatch: b >= 0, score: Math.max(0.001, V) };
  if (x) {
    let C = Yn(w, l);
    if (!C.length) S.isMatch = !1;
    else if (d) S.indices = C;
  }
  return S;
}
function Zn(e) {
  let n = {};
  for (let s = 0, r = e.length; s < r; s += 1) {
    let i = e.charAt(s);
    n[i] = (n[i] || 0) | (1 << (r - s - 1));
  }
  return n;
}
class Ie {
  constructor(
    e,
    {
      location: n = y.location,
      threshold: s = y.threshold,
      distance: r = y.distance,
      includeMatches: i = y.includeMatches,
      findAllMatches: a = y.findAllMatches,
      minMatchCharLength: c = y.minMatchCharLength,
      isCaseSensitive: l = y.isCaseSensitive,
      ignoreLocation: d = y.ignoreLocation
    } = {}
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: s,
        distance: r,
        includeMatches: i,
        findAllMatches: a,
        minMatchCharLength: c,
        isCaseSensitive: l,
        ignoreLocation: d
      }),
      (this.pattern = l ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    let g = (h, f) => {
        this.chunks.push({ pattern: h, alphabet: Zn(h), startIndex: f });
      },
      m = this.pattern.length;
    if (m > te) {
      let h = 0,
        f = m % te,
        _ = m - f;
      while (h < _) (g(this.pattern.substr(h, te), h), (h += te));
      if (f) {
        let b = m - te;
        g(this.pattern.substr(b), b);
      }
    } else g(this.pattern, 0);
  }
  searchIn(e) {
    let { isCaseSensitive: n, includeMatches: s } = this.options;
    if (!n) e = e.toLowerCase();
    if (this.pattern === e) {
      let _ = { isMatch: !0, score: 0 };
      if (s) _.indices = [[0, e.length - 1]];
      return _;
    }
    let {
        location: r,
        distance: i,
        threshold: a,
        findAllMatches: c,
        minMatchCharLength: l,
        ignoreLocation: d
      } = this.options,
      g = [],
      m = 0,
      h = !1;
    this.chunks.forEach(({ pattern: _, alphabet: b, startIndex: x }) => {
      let {
        isMatch: w,
        score: U,
        indices: D
      } = Vn(e, _, b, {
        location: r + x,
        distance: i,
        threshold: a,
        findAllMatches: c,
        minMatchCharLength: l,
        includeMatches: s,
        ignoreLocation: d
      });
      if (w) h = !0;
      if (((m += U), w && D)) g = [...g, ...D];
    });
    let f = { isMatch: h, score: h ? m / this.chunks.length : 1 };
    if (h && s) f.indices = g;
    return f;
  }
}
class Y {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return rt(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return rt(e, this.singleRegex);
  }
  search() {}
}
function rt(e, n) {
  let s = e.match(n);
  return s ? s[1] : null;
}
class mt extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    let n = e === this.pattern;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class ht extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    let s = e.indexOf(this.pattern) === -1;
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class ft extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    let n = e.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class _t extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    let n = !e.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class yt extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    let n = e.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1]
    };
  }
}
class bt extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    let n = !e.endsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Te extends Y {
  constructor(
    e,
    {
      location: n = y.location,
      threshold: s = y.threshold,
      distance: r = y.distance,
      includeMatches: i = y.includeMatches,
      findAllMatches: a = y.findAllMatches,
      minMatchCharLength: c = y.minMatchCharLength,
      isCaseSensitive: l = y.isCaseSensitive,
      ignoreLocation: d = y.ignoreLocation
    } = {}
  ) {
    super(e);
    this._bitapSearch = new Ie(e, {
      location: n,
      threshold: s,
      distance: r,
      includeMatches: i,
      findAllMatches: a,
      minMatchCharLength: c,
      isCaseSensitive: l,
      ignoreLocation: d
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class Ae extends Y {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let n = 0,
      s,
      r = [],
      i = this.pattern.length;
    while ((s = e.indexOf(this.pattern, n)) > -1) ((n = s + i), r.push([s, n - 1]));
    let a = !!r.length;
    return { isMatch: a, score: a ? 0 : 1, indices: r };
  }
}
var we = [mt, Ae, ft, _t, bt, yt, ht, Te],
  it = we.length,
  Xn = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  Jn = "|";
function Qn(e, n = {}) {
  return e.split(Jn).map((s) => {
    let r = s
        .trim()
        .split(Xn)
        .filter((a) => a && !!a.trim()),
      i = [];
    for (let a = 0, c = r.length; a < c; a += 1) {
      let l = r[a],
        d = !1,
        g = -1;
      while (!d && ++g < it) {
        let m = we[g],
          h = m.isMultiMatch(l);
        if (h) (i.push(new m(h, n)), (d = !0));
      }
      if (d) continue;
      g = -1;
      while (++g < it) {
        let m = we[g],
          h = m.isSingleMatch(l);
        if (h) {
          i.push(new m(h, n));
          break;
        }
      }
    }
    return i;
  });
}
var es = new Set([Te.type, Ae.type]);
class St {
  constructor(
    e,
    {
      isCaseSensitive: n = y.isCaseSensitive,
      includeMatches: s = y.includeMatches,
      minMatchCharLength: r = y.minMatchCharLength,
      ignoreLocation: i = y.ignoreLocation,
      findAllMatches: a = y.findAllMatches,
      location: c = y.location,
      threshold: l = y.threshold,
      distance: d = y.distance
    } = {}
  ) {
    ((this.query = null),
      (this.options = {
        isCaseSensitive: n,
        includeMatches: s,
        minMatchCharLength: r,
        findAllMatches: a,
        ignoreLocation: i,
        location: c,
        threshold: l,
        distance: d
      }),
      (this.pattern = n ? e : e.toLowerCase()),
      (this.query = Qn(this.pattern, this.options)));
  }
  static condition(e, n) {
    return n.useExtendedSearch;
  }
  searchIn(e) {
    let n = this.query;
    if (!n) return { isMatch: !1, score: 1 };
    let { includeMatches: s, isCaseSensitive: r } = this.options;
    e = r ? e : e.toLowerCase();
    let i = 0,
      a = [],
      c = 0;
    for (let l = 0, d = n.length; l < d; l += 1) {
      let g = n[l];
      ((a.length = 0), (i = 0));
      for (let m = 0, h = g.length; m < h; m += 1) {
        let f = g[m],
          { isMatch: _, indices: b, score: x } = f.search(e);
        if (_) {
          if (((i += 1), (c += x), s)) {
            let w = f.constructor.type;
            if (es.has(w)) a = [...a, ...b];
            else a.push(b);
          }
        } else {
          ((c = 0), (i = 0), (a.length = 0));
          break;
        }
      }
      if (i) {
        let m = { isMatch: !0, score: c / i };
        if (s) m.indices = a;
        return m;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
var Re = [];
function ts(...e) {
  Re.push(...e);
}
function Pe(e, n) {
  for (let s = 0, r = Re.length; s < r; s += 1) {
    let i = Re[s];
    if (i.condition(e, n)) return new i(e, n);
  }
  return new Ie(e, n);
}
var ge = { AND: "$and", OR: "$or" },
  Me = { PATH: "$path", PATTERN: "$val" },
  De = (e) => !!(e[ge.AND] || e[ge.OR]),
  ns = (e) => !!e[Me.PATH],
  ss = (e) => !W(e) && ct(e) && !De(e),
  at = (e) => ({ [ge.AND]: Object.keys(e).map((n) => ({ [n]: e[n] })) });
function kt(e, n, { auto: s = !0 } = {}) {
  let r = (i) => {
    let a = Object.keys(i),
      c = ns(i);
    if (!c && a.length > 1 && !De(i)) return r(at(i));
    if (ss(i)) {
      let d = c ? i[Me.PATH] : a[0],
        g = c ? i[Me.PATTERN] : i[d];
      if (!q(g)) throw Error(On(d));
      let m = { keyId: Ce(d), pattern: g };
      if (s) m.searcher = Pe(g, n);
      return m;
    }
    let l = { children: [], operator: a[0] };
    return (
      a.forEach((d) => {
        let g = i[d];
        if (W(g))
          g.forEach((m) => {
            l.children.push(r(m));
          });
      }),
      l
    );
  };
  if (!De(e)) e = at(e);
  return r(e);
}
function os(e, { ignoreFieldNorm: n = y.ignoreFieldNorm }) {
  e.forEach((s) => {
    let r = 1;
    (s.matches.forEach(({ key: i, norm: a, score: c }) => {
      let l = i ? i.weight : null;
      r *= Math.pow(c === 0 && l ? Number.EPSILON : c, (l || 1) * (n ? 1 : a));
    }),
      (s.score = r));
  });
}
function rs(e, n) {
  let s = e.matches;
  if (((n.matches = []), !L(s))) return;
  s.forEach((r) => {
    if (!L(r.indices) || !r.indices.length) return;
    let { indices: i, value: a } = r,
      c = { indices: i, value: a };
    if (r.key) c.key = r.key.src;
    if (r.idx > -1) c.refIndex = r.idx;
    n.matches.push(c);
  });
}
function is(e, n) {
  n.score = e.score;
}
function as(e, n, { includeMatches: s = y.includeMatches, includeScore: r = y.includeScore } = {}) {
  let i = [];
  if (s) i.push(rs);
  if (r) i.push(is);
  return e.map((a) => {
    let { idx: c } = a,
      l = { item: n[c], refIndex: c };
    if (i.length)
      i.forEach((d) => {
        d(a, l);
      });
    return l;
  });
}
class zbe {
  constructor(e, n = {}, s) {
    ((this.options = { ...y, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new pt(this.options.keys)),
      this.setCollection(e, s));
  }
  setCollection(e, n) {
    if (((this._docs = e), n && !(n instanceof he))) throw Error(zn);
    this._myIndex =
      n ||
      gt(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }
  add(e) {
    if (!L(e)) return;
    (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    let n = [];
    for (let s = 0, r = this._docs.length; s < r; s += 1) {
      let i = this._docs[s];
      if (e(i, s)) (this.removeAt(s), (s -= 1), (r -= 1), n.push(i));
    }
    return n;
  }
  removeAt(e) {
    (this._docs.splice(e, 1), this._myIndex.removeAt(e));
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: n = -1 } = {}) {
    let {
        includeMatches: s,
        includeScore: r,
        shouldSort: i,
        sortFn: a,
        ignoreFieldNorm: c
      } = this.options,
      l = q(e)
        ? q(this._docs[0])
          ? this._searchStringList(e)
          : this._searchObjectList(e)
        : this._searchLogical(e);
    if ((os(l, { ignoreFieldNorm: c }), i)) l.sort(a);
    if (lt(n) && n > -1) l = l.slice(0, n);
    return as(l, this._docs, { includeMatches: s, includeScore: r });
  }
  _searchStringList(e) {
    let n = Pe(e, this.options),
      { records: s } = this._myIndex,
      r = [];
    return (
      s.forEach(({ v: i, i: a, n: c }) => {
        if (!L(i)) return;
        let { isMatch: l, score: d, indices: g } = n.searchIn(i);
        if (l) r.push({ item: i, idx: a, matches: [{ score: d, value: i, norm: c, indices: g }] });
      }),
      r
    );
  }
  _searchLogical(e) {
    let n = kt(e, this.options),
      s = (c, l, d) => {
        if (!c.children) {
          let { keyId: m, searcher: h } = c,
            f = this._findMatches({
              key: this._keyStore.get(m),
              value: this._myIndex.getValueForItemAtKeyId(l, m),
              searcher: h
            });
          if (f && f.length) return [{ idx: d, item: l, matches: f }];
          return [];
        }
        let g = [];
        for (let m = 0, h = c.children.length; m < h; m += 1) {
          let f = c.children[m],
            _ = s(f, l, d);
          if (_.length) g.push(..._);
          else if (c.operator === ge.AND) return [];
        }
        return g;
      },
      r = this._myIndex.records,
      i = {},
      a = [];
    return (
      r.forEach(({ $: c, i: l }) => {
        if (L(c)) {
          let d = s(n, c, l);
          if (d.length) {
            if (!i[l]) ((i[l] = { idx: l, item: c, matches: [] }), a.push(i[l]));
            d.forEach(({ matches: g }) => {
              i[l].matches.push(...g);
            });
          }
        }
      }),
      a
    );
  }
  _searchObjectList(e) {
    let n = Pe(e, this.options),
      { keys: s, records: r } = this._myIndex,
      i = [];
    return (
      r.forEach(({ $: a, i: c }) => {
        if (!L(a)) return;
        let l = [];
        if (
          (s.forEach((d, g) => {
            l.push(...this._findMatches({ key: d, value: a[g], searcher: n }));
          }),
          l.length)
        )
          i.push({ idx: c, item: a, matches: l });
      }),
      i
    );
  }
  _findMatches({ key: e, value: n, searcher: s }) {
    if (!L(n)) return [];
    let r = [];
    if (W(n))
      n.forEach(({ v: i, i: a, n: c }) => {
        if (!L(i)) return;
        let { isMatch: l, score: d, indices: g } = s.searchIn(i);
        if (l) r.push({ score: d, key: e, value: i, idx: a, norm: c, indices: g });
      });
    else {
      let { v: i, n: a } = n,
        { isMatch: c, score: l, indices: d } = s.searchIn(i);
      if (c) r.push({ score: l, key: e, value: i, norm: a, indices: d });
    }
    return r;
  }
}
zbe.version = "7.0.0";
zbe.createIndex = gt;
zbe.parseIndex = Wn;
zbe.config = y;
zbe.parseQuery = kt;
ts(St);
var e3r = /[:_-]/g,
  ls = 10;
class t3r {
  items;
  fuse;
  lastSearch = null;
  constructor(e) {
    ((this.items = e.map((n) => {
      let { name: s, displayName: r } = n,
        i = s.split(e3r).filter(Boolean),
        a = r !== s ? r.split(e3r).filter(Boolean) : [],
        c = new Set();
      for (let l of (n.description ?? "").toLowerCase().split(/\s+/))
        if (/[^a-z0-9]/.test(l)) {
          c.add(l.replace(/[^a-z0-9]/g, ""));
          for (let d of l.split(/[^a-z0-9]+/)) c.add(d);
        } else c.add(l);
      return (
        c.delete(""),
        {
          partKey: i.length > 1 ? i : void 0,
          displayPartKey: a.length > 1 ? a : void 0,
          commandName: s,
          displayName: r,
          candidate: n,
          aliasKey: n.aliases,
          descriptionWords: [...c].sort()
        }
      );
    })),
      (this.fuse = new zbe(this.items, {
        includeScore: !0,
        threshold: 0.3,
        location: 0,
        distance: 100,
        keys: [
          { name: "commandName", weight: 3 },
          { name: "displayName", weight: 2 },
          { name: "partKey", weight: 2 },
          { name: "aliasKey", weight: 2 },
          { name: "displayPartKey", weight: 1 }
        ]
      })));
  }
  search(e, n) {
    let { getScoreBoost: s, filter: r } = n ?? {},
      i = e.trim().toLowerCase(),
      a = this.lastSearch?.query === i ? this.lastSearch.rows : void 0;
    if (!a) {
      a = this.fuse
        .search(i)
        .map((d) => ({
          item: d.item,
          bucket: Math.floor((d.score ?? 0) * 10),
          descriptionHits: 0
        }));
      let l = i.replace(/[^a-z0-9]/g, "");
      if (l !== "") {
        let d = new Set(a.map((g) => g.item));
        for (let g of this.items) {
          if (d.has(g)) continue;
          let m = g.descriptionWords,
            h = 0,
            f = m.length;
          while (h < f) {
            let b = (h + f) >>> 1,
              x = m[b];
            if (x !== void 0 && x < l) h = b + 1;
            else f = b;
          }
          let _ = 0;
          while (m[h + _]?.startsWith(l)) _++;
          if (_ > 0) a.push({ item: g, bucket: ls, descriptionHits: _ });
        }
      }
      this.lastSearch = { query: i, rows: a };
    }
    if (r) a = a.filter((l) => r(l.item.candidate));
    let c = a.map((l) => {
      let d = l.item.commandName.toLowerCase(),
        g = l.item.displayName.toLowerCase(),
        m = l.item.aliasKey?.map((D) => D.toLowerCase()) ?? [],
        h = d === i || g === i,
        f = m.includes(i),
        _ = Math.min(d.startsWith(i) ? d.length : 1 / 0, g.startsWith(i) ? g.length : 1 / 0),
        b = m.find((D) => D.startsWith(i)),
        x = b ? b.length : 1 / 0,
        w = s ? s(l.item.candidate) : 0,
        U = [h ? 0 : 1, f ? 0 : 1, _, x, l.bucket, -l.descriptionHits, -w];
      return { candidate: l.item.candidate, rankKey: U };
    });
    return (
      c.sort((l, d) => {
        for (let g = 0; g < l.rankKey.length; g++) {
          let m = l.rankKey[g] ?? 0,
            h = d.rankKey[g] ?? 0;
          if (m < h) return -1;
          if (m > h) return 1;
        }
        return 0;
      }),
      c.map(({ candidate: l }) => l)
    );
  }
}
function Wg() {
  if (typeof setImmediate === "function") return new Promise((e) => setImmediate(e));
  if (typeof MessageChannel === "function")
    return new Promise((e) => {
      let n = new MessageChannel();
      ((n.port1.onmessage = () => {
        (n.port1.close(), e());
      }),
        n.port2.postMessage(null));
    });
  return X(0);
}
var vt = 16,
  wt = 8,
  cs = 6,
  Rt = 4,
  Pt = 8,
  Dt = 3,
  It = 1,
  us = 100,
  Ee = 64,
  Lvn = 4;
class Nvn {
  paths = [];
  lowerPaths = [];
  charBits = new Int32Array(0);
  pathLens = new Uint16Array(0);
  nameStarts = new Uint16Array(0);
  nameCharBits = new Int32Array(0);
  topLevelCache = null;
  matchPositions = new Int32Array(Ee);
  nameMatchPositions = new Int32Array(Ee);
  readyCount = 0;
  buildGen = 0;
  loadFromFileList(e) {
    let n = new Set(),
      s = [];
    for (let r of e) if (r.length > 0 && !n.has(r)) (n.add(r), s.push(r));
    this.buildIndex(s);
  }
  loadFromFileListAsync(e) {
    let n = () => {},
      s = new Promise((i) => {
        n = i;
      }),
      r = this.buildAsync(e, n);
    return { queryable: s, done: r };
  }
  async buildAsync(e, n) {
    let s = ++this.buildGen,
      r = new Set(),
      i = [],
      a = performance.now();
    for (let l = 0; l < e.length; l++) {
      let d = e[l];
      if (d.length > 0 && !r.has(d)) (r.add(d), i.push(d));
      if ((l & 255) === 255 && performance.now() - a > Lvn) {
        if ((await Wg(), this.buildGen !== s)) return (n(), !1);
        a = performance.now();
      }
    }
    (this.resetArrays(i), (a = performance.now()));
    let c = !0;
    for (let l = 0; l < i.length; l++)
      if ((this.indexPath(l), (l & 255) === 255 && performance.now() - a > Lvn)) {
        if (((this.readyCount = l + 1), c)) (n(), (c = !1));
        if ((await Wg(), this.buildGen !== s)) return !1;
        a = performance.now();
      }
    return ((this.readyCount = i.length), n(), !0);
  }
  buildIndex(e) {
    (this.buildGen++, this.resetArrays(e));
    for (let n = 0; n < e.length; n++) this.indexPath(n);
    this.readyCount = e.length;
  }
  resetArrays(e) {
    let n = e.length;
    ((this.paths = e),
      (this.lowerPaths = Array(n)),
      (this.charBits = new Int32Array(n)),
      (this.pathLens = new Uint16Array(n)),
      (this.nameStarts = new Uint16Array(n)),
      (this.nameCharBits = new Int32Array(n)),
      (this.readyCount = 0),
      (this.topLevelCache = fs(e, us)));
  }
  indexPath(e) {
    let n = this.paths[e].toLowerCase();
    this.lowerPaths[e] = n;
    let s = n.length;
    this.pathLens[e] = s;
    let r = 0,
      i = 0,
      a = 0;
    for (let c = 0; c < s; c++) {
      let l = n.charCodeAt(c);
      if (l >= 97 && l <= 122) ((r |= 1 << (l - 97)), (a |= 1 << (l - 97)));
      else if ((l === 47 || l === 92) && c < s - 1) ((i = c + 1), (a = 0));
    }
    ((this.charBits[e] = r),
      (this.nameStarts[e] = s === this.paths[e].length ? i : 0),
      (this.nameCharBits[e] = a));
  }
  search(e, n) {
    if (n <= 0) return [];
    if (e.length === 0) {
      if (this.topLevelCache)
        return this.topLevelCache
          .slice(0, n)
          .map(({ path: S, score: C }) => ({ path: S, score: C, positions: [] }));
      return [];
    }
    let s = e !== e.toLowerCase(),
      r = s ? e : e.toLowerCase(),
      i = Math.min(r.length, Ee),
      a = Array(i),
      c = 0;
    for (let S = 0; S < i; S++) {
      let C = r.charAt(S);
      a[S] = C;
      let k = C.charCodeAt(0);
      if (k >= 97 && k <= 122) c |= 1 << (k - 97);
    }
    let l = i * (vt + wt) + Pt + 32,
      d = [],
      g = -1 / 0,
      { paths: m, lowerPaths: h, charBits: f, pathLens: _, readyCount: b } = this,
      { nameStarts: x, nameCharBits: w } = this,
      U = this.matchPositions,
      D = this.nameMatchPositions;
    e: for (let S = 0; S < b; S++) {
      if ((f[S] & c) !== c) continue;
      let C = s ? m[S] : h[S],
        k = C.indexOf(a[0]);
      if (k === -1) continue;
      U[0] = k;
      let R = 0,
        Z = 0,
        j = k;
      for (let I = 1; I < i; I++) {
        if (((k = C.indexOf(a[I], j + 1)), k === -1)) continue e;
        U[I] = k;
        let J = k - j - 1;
        if (J === 0) Z += Rt;
        else R += Dt + J * It;
        j = k;
      }
      let z = x[S],
        ee = R > 0 && U[0] < z && (w[S] & c) === c ? ps(C, a, z, D) : -1 / 0;
      if (d.length === n && l + Math.max(Z - R, ee) <= g) continue;
      let P = m[S],
        F = _[S],
        K = Z - R + xt(P, U, i),
        be = 0;
      if (ee !== -1 / 0) {
        let I = ee + xt(P, D, i);
        if (I >= K) ((K = I), (be = z));
      }
      if (((K += i * vt + Math.max(0, 32 - (F >> 2))), d.length < n)) {
        if ((d.push({ pathIndex: S, fuzzScore: K, scanFrom: be }), d.length === n))
          (d.sort((I, J) => I.fuzzScore - J.fuzzScore), (g = d[0].fuzzScore));
      } else if (K > g) {
        let I = 0,
          J = d.length;
        while (I < J) {
          let Se = (I + J) >> 1;
          if (d[Se].fuzzScore < K) I = Se + 1;
          else J = Se;
        }
        (d.splice(I, 0, { pathIndex: S, fuzzScore: K, scanFrom: be }),
          d.shift(),
          (g = d[0].fuzzScore));
      }
    }
    d.sort((S, C) => C.fuzzScore - S.fuzzScore);
    let V = d.length,
      se = Math.max(V, 1),
      pe = Array(V);
    for (let S = 0; S < V; S++) {
      let C = d[S].pathIndex,
        k = m[C],
        R = h[C],
        Z = s ? k : R,
        j = Array(i),
        z = d[S].scanFrom;
      for (let F = 0; F < i; F++) {
        let K = Z.indexOf(a[F], z);
        ((j[F] = K), (z = K + 1));
      }
      if (!s && R.length !== k.length) hs(k, j);
      let ee = S / se,
        P = k.includes("test") ? Math.min(ee * 1.05, 1) : ee;
      pe[S] = { path: k, score: P, positions: j };
    }
    return pe;
  }
}
function ps(e, n, s, r) {
  let i = 0,
    a = s - 1;
  for (let c = 0; c < n.length; c++) {
    let l = e.indexOf(n[c], a + 1);
    if (l === -1) return -1 / 0;
    r[c] = l;
    let d = l - a - 1;
    if (c > 0) i += d === 0 ? Rt : -(Dt + d * It);
    a = l;
  }
  return i;
}
function xt(e, n, s) {
  let r = Ct(e, n[0], !0);
  for (let i = 1; i < s; i++) r += Ct(e, n[i], !1);
  return r;
}
function Ct(e, n, s) {
  if (n === 0) return s ? Pt : 0;
  let r = e.charCodeAt(n - 1);
  if (ds(r)) return wt;
  if (gs(r) && ms(e.charCodeAt(n))) return cs;
  return 0;
}
function ds(e) {
  return e === 47 || e === 92 || e === 45 || e === 95 || e === 46 || e === 32;
}
function gs(e) {
  return e >= 97 && e <= 122;
}
function ms(e) {
  return e >= 65 && e <= 90;
}
function hs(e, n) {
  let s = 0,
    r = 0,
    i = 0;
  while (i < n.length && s < e.length) {
    let a = e.codePointAt(s),
      c = a > 65535 ? 2 : 1,
      l = String.fromCodePoint(a).toLowerCase().length;
    while (i < n.length && n[i] < r + l) ((n[i] = s), i++);
    ((s += c), (r += l));
  }
}
function fs(e, n) {
  let s = new Set();
  for (let i of e) {
    let a = i.length;
    for (let l = 0; l < i.length; l++) {
      let d = i.charCodeAt(l);
      if (d === 47 || d === 92) {
        a = l;
        break;
      }
    }
    let c = i.slice(0, a);
    if (c.length > 0) {
      if ((s.add(c), s.size >= n)) break;
    }
  }
  let r = Array.from(s);
  return (
    r.sort((i, a) => {
      let c = i.length - a.length;
      if (c !== 0) return c;
      return i < a ? -1 : i > a ? 1 : 0;
    }),
    r.slice(0, n).map((i) => ({ path: i, score: 0, positions: [] }))
  );
}
var n3r = [
    "You've hit your",
    "You've reached your",
    "You're out of usage credits",
    "Your org is out of usage \xB7 add funds to continue",
    "Your org is out of usage \xB7 contact your admin",
    "Your seat type doesn't include usage credits",
    "Your seat type doesn't include usage",
    "Your usage allocation has been disabled by your admin",
    "Your group's usage limit is set to $0",
    "Fable 5 requires usage credits",
    "You're out of extra usage",
    "Your seat type doesn't include extra usage"
  ],
  WJo = [/^(?:Fable|Haiku|Mythos|Opus|Sonnet)(?: [^\u00B7\n]{1,40})? requires usage credits\./];
function Hdi(e) {
  return n3r.some((n) => e.startsWith(n)) || WJo.some((n) => n.test(e));
}
var GJo = ["This service is disabled for your org"],
  zJo = ["You've used", "You're close to"],
  KJo = [
    "You're now using usage credits",
    "You're now using your usage allocation",
    "Now using your usage allocation",
    "Now using usage credits",
    "You're now using extra usage",
    "Now using extra usage"
  ];
class $ot extends Error {}
var Tt = ["bash", "powershell"];
var ue = p(() =>
    o()
      .optional()
      .describe(
        'Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.'
      )
  ),
  At = p(() =>
    B(["continue", "block"])
      .optional()
      .describe(
        "What a failure of this hook does: it could not start (a missing script or plugin directory), timed out, exited with a code other than 0 or 2, or printed JSON that is invalid or fails validation. 'continue' (default): the failure is reported and the action goes ahead. 'block': the failure counts as exit code 2, so the action the event guards (a tool call, a permission request, a prompt) is blocked. Ignored for async hooks and on Stop, SubagentStop, TaskCompleted and TeammateIdle."
      )
  );
function _s() {
  let e = u({
      type: A("command").describe("Shell command hook type"),
      command: o().describe("Shell command to execute"),
      args: T(o())
        .optional()
        .describe(
          "Argument list for exec form. When present, `command` is resolved as " +
            "an executable and spawned directly with these arguments \u2014 no shell. " +
            "Path placeholders like ${CLAUDE_PLUGIN_ROOT} are substituted per-element as plain strings, so paths with quotes, $, or backticks never reach a shell parser. When absent, `command` runs through a shell (bash on POSIX, PowerShell on Windows without Git Bash)."
        ),
      if: ue(),
      shell: B(Tt)
        .optional()
        .describe(
          "Shell interpreter. 'bash' uses your $SHELL (bash/zsh/sh); 'powershell' uses pwsh. Defaults to bash (powershell on Windows without Git Bash)."
        ),
      timeout: v().positive().optional().describe("Timeout in seconds for this specific command"),
      onFailure: At(),
      statusMessage: o()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: M().optional().describe("If true, hook runs once and is removed after execution"),
      async: M().optional().describe("If true, hook runs in background without blocking"),
      asyncRewake: M()
        .optional()
        .describe(
          "If true, hook runs in background and wakes the model on exit code 2 (blocking error). Implies async."
        ),
      rewakeMessage: o()
        .min(1)
        .optional()
        .describe(
          "@internal Custom prefix for the system-reminder shown to the model when an asyncRewake hook exits with code 2. The hook output is appended after this prefix."
        ),
      rewakeSummary: o()
        .min(1)
        .optional()
        .describe(
          '@internal One-line summary shown to the user in the terminal when an asyncRewake hook exits with code 2. Defaults to "Stop hook feedback".'
        ),
      cloud: B(["device", "skip"])
        .optional()
        .catch("skip")
        .describe(
          "@internal Where this hook may run when a cloud session is driven from this machine. 'device': offer it to the cloud session and run it here even when its script sits where the cloud session can write on this machine or cannot be pinned \u2014 the author accepts that the session may have changed files this hook executes. 'skip': never offer it to cloud sessions. Omit for the default: a command hook whose script could be read and pinned and lies outside everything the cloud session can write here is offered; other command hooks are not. Applies to this entry only: the same hook written in another settings scope keeps its own setting. An unrecognised value reads as 'skip' (the file still loads; the hook stays on this machine)."
        )
    }),
    n = u({
      type: A("prompt").describe("LLM prompt hook type"),
      prompt: o().describe(
        "Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON."
      ),
      if: ue(),
      timeout: v()
        .positive()
        .optional()
        .describe("Timeout in seconds for this specific prompt evaluation"),
      model: o()
        .optional()
        .describe(
          'Model to use for this prompt hook (e.g., "claude-sonnet-5"). If not specified, uses the default small fast model.'
        ),
      continueOnBlock: M()
        .optional()
        .describe(
          `Sets the continue value for the decision:"block" produced when ok is false. Default false (turn ends). Whether continue:true lets the turn proceed depends on the event's decision:"block" semantics. On PostToolUse, the reason is fed back to Claude and the turn continues.`
        ),
      statusMessage: o()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: M().optional().describe("If true, hook runs once and is removed after execution")
    }),
    s = u({
      type: A("mcp_tool").describe("MCP tool hook type"),
      server: o().describe("Name of an already-configured MCP server to invoke"),
      tool: o().describe("Name of the tool on that server to call"),
      input: me(o(), oe())
        .optional()
        .describe(
          'Arguments passed to the MCP tool. String values support ${path} interpolation from the hook input JSON (e.g. "${tool_input.file_path}").'
        ),
      if: ue(),
      timeout: v().positive().optional().describe("Timeout in seconds for this specific tool call"),
      statusMessage: o()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: M().optional().describe("If true, hook runs once and is removed after execution")
    }),
    r = u({
      type: A("http").describe("HTTP hook type"),
      url: o().url().describe("URL to POST the hook input JSON to"),
      if: ue(),
      timeout: v().positive().optional().describe("Timeout in seconds for this specific request"),
      onFailure: At(),
      headers: me(o(), o())
        .optional()
        .describe(
          'Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.'
        ),
      allowedEnvVars: T(o())
        .optional()
        .describe(
          "Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work."
        ),
      statusMessage: o()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: M().optional().describe("If true, hook runs once and is removed after execution"),
      cloud: B(["device", "skip"])
        .optional()
        .catch("skip")
        .describe(
          "@internal Where this hook may run when a cloud session is driven from this machine. 'skip': never offer it to cloud sessions; 'device' or omitted: offered (an HTTP hook has no script to pin). Applies to this entry only. An unrecognised value reads as 'skip' (the file still loads)."
        )
    }),
    i = u({
      type: A("agent").describe("Agentic verifier hook type"),
      prompt: o().describe(
        'Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.'
      ),
      if: ue(),
      timeout: v()
        .positive()
        .optional()
        .describe("Timeout in seconds for agent execution (default 60)"),
      model: o()
        .optional()
        .describe(
          'Model to use for this agent hook (e.g., "claude-sonnet-5"). If not specified, uses Haiku.'
        ),
      statusMessage: o()
        .optional()
        .describe("Custom status message to display in spinner while hook runs"),
      once: M().optional().describe("If true, hook runs once and is removed after execution")
    });
  return {
    BashCommandHookSchema: e,
    PromptHookSchema: n,
    HttpHookSchema: r,
    AgentHookSchema: i,
    McpToolHookSchema: s
  };
}
var $di = 24576,
  Sfe = p(() => {
    let {
      BashCommandHookSchema: e,
      PromptHookSchema: n,
      AgentHookSchema: s,
      HttpHookSchema: r,
      McpToolHookSchema: i
    } = _s();
    return Gr("type", [...[e, n, s, r, i]]);
  }),
  ze = p(() =>
    u({
      matcher: o().optional().describe('String pattern to match (e.g. tool names like "Write")'),
      hooks: T(Sfe()).describe("List of hooks to execute when the matcher matches")
    })
  ),
  lq = p(() => eSe(B(Ud), T(ze())));
function Fdi(e) {
  if (
    /\$(?!\{CLAUDE_(?:PROJECT_DIR|PLUGIN_ROOT|PLUGIN_DATA)\})/.test(e) ||
    e.includes("`") ||
    /%[A-Za-z_][A-Za-z0-9_]*%/.test(e)
  )
    return "Only ${CLAUDE_PROJECT_DIR}, ${CLAUDE_PLUGIN_ROOT} and ${CLAUDE_PLUGIN_DATA} are expanded in `file` (no shell runs); any other $\u2026, backtick or %NAME% is not expanded";
  let n = /^[a-zA-Z]:/.test(e) || e.includes("\\");
  if (O() === "windows" ? /^[\\/](?![\\/])/.test(e) || /^[a-zA-Z]:(?![\\/])/.test(e) : n)
    return O() === "windows"
      ? "`file` is drive-relative on Windows (\\path or C:path); use a drive-absolute path, ~/ or a ${CLAUDE_\u2026} placeholder"
      : "`file` is a Windows path (C:\u2026 or \\\u2026) read on another platform; use ~/, a ${CLAUDE_\u2026} placeholder or a relative path so the hook resolves everywhere";
  if (e.startsWith("~") && e !== "~" && !/^~[\\/]/.test(e))
    return "`file` starting with ~name is not expanded; use an absolute path or ~/";
  if (
    e.trim() === "" ||
    e === "." ||
    e === ".." ||
    e === "~" ||
    /[\\/]$/.test(e) ||
    /[\\/]\.{1,2}$/.test(e) ||
    /^\$\{CLAUDE_(?:PROJECT_DIR|PLUGIN_ROOT|PLUGIN_DATA)\}$/.test(e)
  )
    return "`file` must name a script file, not a directory or an empty path";
  return;
}
function a3r() {
  return new Set(Sfe().options.map((e) => e.shape.type.value));
}
function ys(e, n) {
  if (!e || typeof e !== "object" || Array.isArray(e)) {
    let i = G(e);
    return { problem: `Hook entry must be an object; received ${i}`, received: i, aboutType: !1 };
  }
  let s = e.type;
  if (typeof s !== "string") {
    let i = G(s);
    return {
      problem:
        s === void 0
          ? 'Hook entry has no "type"'
          : `Hook entry "type" must be a string; received ${i}`,
      received: i,
      aboutType: !0
    };
  }
  if (!n.has(s)) {
    let i = Wc(s);
    return { problem: `Unknown hook type "${i}"`, received: i, aboutType: !0 };
  }
  let r = Sfe().safeParse(e);
  if (!r.success)
    return { problem: `Invalid ${s} hook (${Oe(r.error)})`, received: s, aboutType: !1 };
  return;
}
function Oe(e) {
  return e.issues
    .map((n) => (n.path.length > 0 ? `${n.path.join(".")}: ${n.message}` : n.message))
    .join("; ");
}
function wfe(e) {
  if (!e || typeof e !== "object" || Array.isArray(e)) return !1;
  if (!("matcher" in e) && Object.keys(e).some((s) => Ud.includes(s))) return !1;
  let n = e.hooks;
  if (Array.isArray(n)) return n.length > 0;
  return !!n && typeof n === "object" && ("matcher" in e || typeof n.type === "string");
}
function nxe(e, n = 3, { matchersCount: s = !0, unscannedKeys: r = Ut, inHooksList: i = !1 } = {}) {
  if (zt(e)) return !0;
  if (s && wfe(e)) return !0;
  if (n === 0 || !e || typeof e !== "object") return !1;
  if (Array.isArray(e))
    return e.some((a) => nxe(a, n - 1, { matchersCount: s, unscannedKeys: r, inHooksList: i }));
  if (i && typeof e.type === "string") return !1;
  return Object.entries(e).some(
    ([a, c]) =>
      !r.has(a) &&
      nxe(c, n - 1, {
        unscannedKeys: r,
        matchersCount: s && !Ud.includes(a),
        inHooksList: a === "hooks" && Array.isArray(c)
      })
  );
}
function q9(e, n) {
  if (!e || typeof e !== "object" || Array.isArray(e)) return !1;
  return (
    zt(e) ||
    Object.entries(e).some(
      ([s, r]) =>
        s !== "hooks" &&
        !n.has(s) &&
        nxe(r, 3, { unscannedKeys: n, matchersCount: !Ud.includes(s) })
    )
  );
}
var Ut = new Set(),
  Udi = new Set([
    "mcpServers",
    "managedMcpServers",
    "lspServers",
    "pluginConfigs",
    "enabledPlugins",
    "extraKnownMarketplaces",
    "env",
    "skillOverrides",
    "modelSettings"
  ]),
  Gqt = new Set(["metadata", "mcpServers", "lspServers"]),
  tQo = new Set([...Gqt, "experimental"]),
  tar = Ut;
function zt(e) {
  if (!e || typeof e !== "object" || Array.isArray(e)) return !1;
  return Object.entries(e).some(
    ([n, s]) => dq.has(n) && s !== null && s !== void 0 && !(Array.isArray(s) && s.length === 0)
  );
}
function xZ(e) {
  if (wfe(e)) return !0;
  if (Array.isArray(e)) return e.some(xZ);
  if (!e || typeof e !== "object") return !1;
  return Object.entries(e).some(
    ([n, s]) => dq.has(n) && s !== null && s !== void 0 && !(Array.isArray(s) && s.length === 0)
  );
}
var dq = new Set(["PreToolUse", "PermissionRequest"]);
function l3r(e, n) {
  if (!Array.isArray(e)) return { stripped: [], unloadableGuards: [] };
  let s = dq.has(n),
    r = a3r(),
    i = ze(),
    a = [],
    c = [];
  for (let l = e.length - 1; l >= 0; l--) {
    let d = e[l],
      g = (_, b) => {
        if (!s) e.splice(l, 1);
        a.push({
          matcherIndex: l,
          hookIndex: void 0,
          path: `${l}`,
          problem: _,
          received: b,
          aboutType: !1
        });
      };
    if (nxe(d, 3, { matchersCount: !1 })) {
      (s ? a : c).push({
        matcherIndex: l,
        hookIndex: void 0,
        path: `${l}`,
        problem: "holds PreToolUse/PermissionRequest hooks where a matcher was expected",
        received: G(d),
        aboutType: !1
      });
      continue;
    }
    if (!d || typeof d !== "object" || Array.isArray(d)) {
      g(`Hook matcher must be an object; received ${G(d)}`, G(d));
      continue;
    }
    let m = d.hooks;
    if (!Array.isArray(m)) {
      g(`Hook matcher "hooks" must be an array of hook entries; received ${G(m)}`, G(m));
      continue;
    }
    let h = [];
    for (let _ = m.length - 1; _ >= 0; _--) {
      let b = ys(m[_], r);
      if (b !== void 0) {
        if (!s) m.splice(_, 1);
        h.push({ matcherIndex: l, hookIndex: _, path: `${l}.hooks.${_}`, ...b });
      }
    }
    let f = i.safeParse(s ? { ...d, hooks: [] } : d);
    if (!f.success) {
      g(`Invalid hook matcher (${Oe(f.error)})`, "matcher");
      continue;
    }
    a.push(...h);
  }
  return (
    a.reverse(),
    c.reverse(),
    s ? { stripped: [], unloadableGuards: a } : { stripped: a, unloadableGuards: c }
  );
}
class Kbe extends Error {}
var kv =
  "a PreToolUse/PermissionRequest hook that cannot be loaded may be what guards the permissions declared beside it, so nothing it sits in is applied until the entry is fixed or removed";
function Vbe(e) {
  if (wfe(e) || (Array.isArray(e) && e.some(wfe)))
    return {
      notes: [],
      unloadableGuards: [
        `hooks: must be an object mapping event names to matcher arrays; received ${Array.isArray(e) ? "an array of matchers" : "a single matcher"}`
      ]
    };
  if (!e || typeof e !== "object" || Array.isArray(e)) return { notes: [], unloadableGuards: [] };
  let n = e,
    s = new Set(Ud),
    r = [],
    i = [];
  for (let [a, c] of Object.entries(n)) {
    let l = Wc(a);
    if (!s.has(a)) {
      if (nxe(c, 3, { matchersCount: !Array.isArray(c) })) {
        i.push(`hooks.${l}: not a hook event, but it holds PreToolUse/PermissionRequest hooks`);
        continue;
      }
      (delete n[a], r.push(`hooks.${l}: unknown hook event; entry ignored`));
      continue;
    }
    if (!Array.isArray(c)) {
      if ((dq.has(a) && c !== null) || nxe(c, 3, { matchersCount: !1 })) {
        i.push(`hooks.${l}: must be an array of matchers; received ${G(c)}`);
        continue;
      }
      (delete n[a],
        r.push(`hooks.${l}: must be an array of matchers; received ${G(c)}; entry ignored`));
      continue;
    }
    let d = l3r(c, a);
    for (let g of d.stripped) r.push(`hooks.${l}.${g.path}: ${g.problem}; entry ignored`);
    for (let g of d.unloadableGuards) i.push(`hooks.${l}.${g.path}: ${g.problem}`);
  }
  return { notes: r, unloadableGuards: i };
}
function nQo(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e))
    return {
      hooks: void 0,
      invalid: [
        {
          path: "hooks",
          reason: `must be an object mapping hook event names to matcher arrays; received ${G(e)}`
        }
      ],
      unloadableGuards: Array.isArray(e) && e.some(wfe) ? ["hooks"] : []
    };
  if (wfe(e))
    return {
      hooks: void 0,
      invalid: [
        {
          path: "hooks",
          reason:
            "must be an object mapping hook event names to matcher arrays; received a single matcher"
        }
      ],
      unloadableGuards: ["hooks"]
    };
  let n = new Set(Ud),
    s = T(ze()),
    r = Object.entries(e).map(([a, c]) => {
      if (!n.has(a))
        return {
          invalid: {
            path: `hooks.${a}`,
            reason: `unknown hook event. Valid events: ${Ud.join(", ")}`
          }
        };
      let { stripped: l, unloadableGuards: d } = l3r(c, a);
      if (d.length > 0)
        return {
          invalid: {
            path: `hooks.${a}`,
            reason: `${d.map((f) => `${f.path}: ${f.problem}`).join("; ")} \u2014 ${kv}`
          },
          unloadableGuard: !0
        };
      let g = l.map((f) => `${f.path}: ${f.problem}; entry ignored`),
        m = s.safeParse(c);
      if (m.success) {
        let f = g.length > 0 && { invalid: { path: `hooks.${a}`, reason: g.join("; ") } };
        if (f && !m.data.some((_) => _.hooks.length > 0)) return { ...f };
        return { entry: [a, m.data], ...f };
      }
      let h = Array.isArray(c)
        ? [...g, Oe(m.error)].join("; ")
        : `must be an array of matchers; received ${G(c)}`;
      return {
        invalid: { path: `hooks.${a}`, reason: h },
        ...(dq.has(a) && c !== null && !Array.isArray(c) && { unloadableGuard: !0 })
      };
    }),
    i = r.flatMap((a) => (a.entry ? [a.entry] : []));
  return {
    hooks: i.length > 0 ? Object.fromEntries(i) : void 0,
    invalid: r.flatMap((a) => (a.invalid ? [a.invalid] : [])),
    unloadableGuards: r.flatMap((a) => (a.unloadableGuard && a.invalid ? [a.invalid.path] : []))
  };
}
function G(e) {
  if (e === null || e === void 0) return String(e);
  if (Array.isArray(e)) return "an array";
  let n = typeof e;
  return `${n === "object" ? "an" : "a"} ${n}`;
}
function Ot(e) {
  return Nr(`${io(e)}t`) === null;
}
function aq(e) {
  return e in Object.prototype && Ot(e);
}
var r3r =
  "server names may only contain letters, numbers, hyphens and underscores, and may not be constructor, prototype, __proto__, __defineGetter__, __defineSetter__, __lookupGetter__ or __lookupSetter__";
var $vn = p(() =>
    B(["local", "user", "project", "dynamic", "enterprise", "claudeai", "managed", "agent"])
  ),
  VJo = ["enterprise", "managed"];
function Zx(e) {
  return VJo.includes(e);
}
var Yr = p(() => B(["stdio", "sse", "sse-ide", "http", "ws", "sdk"]));
function LTt(e) {
  return e === "sdk" || e === "sse-ide" || e === "ws-ide";
}
var Kt = /^[A-Za-z0-9_-]+$/;
function Ldi(e) {
  return typeof e === "string" && Kt.test(e);
}
var ae = p(() =>
    A("comms")
      .optional()
      .catch(void 0)
  ),
  Q = p(() => v().int().positive()),
  bs = 300000,
  Lt = p(() =>
    v()
      .int()
      .positive()
      .optional()
      .catch(void 0)
      .describe("@internal CCR backend wire hint; folded into timeout at parse.")
  );
function o3r({ request_timeout_ms: e, ...n }) {
  return { ...n, ...(n.timeout === void 0 && e !== void 0 && { timeout: Math.min(e, bs) }) };
}
var Fot = p(() =>
    u({
      type: A("stdio").optional(),
      command: o().min(1, "Command cannot be empty"),
      args: T(o()).default([]),
      env: me(o(), o()).optional(),
      timeout: Q().optional(),
      alwaysLoad: M().optional(),
      bareElicitationCapability: M().optional(),
      role: ae()
    })
  ),
  Ss = p(() => M()),
  Ht = p(() =>
    u({
      clientId: o().optional(),
      callbackPort: v().int().positive().optional(),
      authServerMetadataUrl: o()
        .url()
        .startsWith("https://", { message: "authServerMetadataUrl must use https://" })
        .optional(),
      scopes: o().min(1).optional(),
      xaa: Ss().optional()
    })
  ),
  Ke = p(() =>
    u({ name: o(), permission_policy: B(["always_allow", "always_ask", "always_deny"]).optional() })
  ),
  jqt = p(() =>
    u({
      type: A("sse"),
      url: o(),
      headers: me(o(), o()).optional(),
      headersHelper: o().optional(),
      oauth: Ht().optional(),
      timeout: Q().optional(),
      request_timeout_ms: Lt(),
      tools: T(Ke()).optional(),
      alwaysLoad: M().optional(),
      bareElicitationCapability: M().optional(),
      discoveryCache: M().optional(),
      role: ae(),
      toolPermissions: me(o(), yfe()).optional()
    }).transform(o3r)
  ),
  ks = p(() =>
    u({
      type: A("sse-ide"),
      url: o(),
      ideName: o(),
      ideRunningInWindows: M().optional(),
      timeout: Q().optional(),
      alwaysLoad: M().optional(),
      role: ae()
    })
  ),
  vs = p(() =>
    u({
      type: A("ws-ide"),
      url: o(),
      ideName: o(),
      authToken: o().optional(),
      ideRunningInWindows: M().optional(),
      timeout: Q().optional(),
      alwaysLoad: M().optional(),
      role: ae()
    })
  ),
  NTt = p(() =>
    u({
      type: B(["http", "streamable-http"]).transform(() => "http"),
      url: o(),
      headers: me(o(), o()).optional(),
      headersHelper: o().optional(),
      oauth: Ht().optional(),
      timeout: Q().optional(),
      request_timeout_ms: Lt(),
      tools: T(Ke()).optional(),
      alwaysLoad: M().optional(),
      bareElicitationCapability: M().optional(),
      discoveryCache: M().optional(),
      role: ae(),
      toolPermissions: me(o(), yfe()).optional()
    }).transform(o3r)
  ),
  xs = ["command", "args", "env", "headersHelper"],
  Cs = new Set(["http", "streamable-http", "sse"]),
  ws = /[\p{Cc}\p{Cf}\u2028\u2029]/u,
  Rs = /[\p{Cc}\p{Cf}\u2028\u2029]/gu;
function qJo(e) {
  return /^[A-Za-z0-9_-]+$/.test(e) && !aq(e) && e !== "constructor" && e !== "prototype";
}
function Ps(e) {
  try {
    let n = new URL(e);
    return n.protocol === "https:" && n.hostname !== "";
  } catch {
    return !1;
  }
}
function Nt(e, n = "", s = 0) {
  if (typeof e === "string") return [[n, e, !1]];
  if (s > 4 || e === null || typeof e !== "object") return [];
  return Object.entries(e).flatMap(([r, i]) => {
    let a = r.replace(Rs, (l) => `\\u${l.codePointAt(0).toString(16).padStart(4, "0")}`),
      c = n ? `${n}.${a}` : a;
    return [[c, r, !0], ...Nt(i, c, s + 1)];
  });
}
var YJo = p(() =>
    me(o(), oe())
      .check((e) => {
        let n = (r, i) => {
          e.issues.push({ code: "custom", path: r, message: i, input: e.value });
        };
        for (let r of xs)
          if (Object.hasOwn(e.value, r))
            n(
              [r],
              `"${r}" is not allowed in managed settings: only http/sse URL servers can be delivered this way, and a managed settings document must not name a program to run`
            );
        if (!Cs.has(e.value.type))
          n(["type"], 'managed settings can only deliver "http" or "sse" servers');
        let s = e.value.url;
        if (typeof s === "string" && !Ps(s))
          n(["url"], "managed settings servers must use a valid https:// url");
        for (let [r, i, a] of Nt(e.value))
          if (ws.test(i))
            n(
              r.split("."),
              "contains control or invisible format characters (in a key or a value); a managed settings document must not be able to print escape sequences"
            );
          else if (!a && Wot(i))
            n(
              r.split("."),
              "${VAR} references are not expanded in managed settings; use a literal value (a managed settings document must not read the user's environment)"
            );
      })
      .pipe($e([NTt(), jqt()]))
  ),
  XJo = `"managedMcpServers" must be an object keyed by server name (the .mcp.json mcpServers shape; Claude Desktop's array form of its same-named key is not accepted here: use the server name as the key and "type" instead of "transport"). No managed MCP servers are installed from it until it is fixed.`;
function s3r(e, n) {
  if (e === void 0) return;
  if (e === null || typeof e !== "object" || Array.isArray(e)) {
    n("", XJo);
    return;
  }
  let s = Object.create(null);
  for (let [r, i] of Object.entries(e)) {
    if (!qJo(r)) {
      n("<invalid name>", r3r);
      continue;
    }
    let a = YJo().safeParse(i);
    if (a.success) {
      s[r] = a.data;
      continue;
    }
    let c = a.error.issues[0];
    n(r, c ? [c.path.join("."), c.message].filter(Boolean).join(": ") : "failed validation");
  }
  return s;
}
var Fvn = p(() =>
    u({
      type: A("ws"),
      url: o(),
      headers: me(o(), o()).optional(),
      headersHelper: o().optional(),
      timeout: Q().optional(),
      alwaysLoad: M().optional(),
      bareElicitationCapability: M().optional(),
      role: ae()
    })
  ),
  JJo = p(() =>
    u({
      type: A("sdk"),
      name: o(),
      timeout: Q().optional(),
      alwaysLoad: M().optional(),
      disableAutoBackground: M()
        .optional()
        .catch(void 0),
      tools: T(Ke())
        .optional()
        .catch(void 0),
      connectorId: o()
        .min(1)
        .optional()
        .catch(void 0)
    })
  ),
  yfe = p(() => B(["allow", "ask", "blocked"])),
  QJo = p(() =>
    u({
      type: A("claudeai-proxy"),
      url: o(),
      id: o().regex(Kt),
      displayName: o().optional(),
      iconUrl: o().optional(),
      timeout: Q().optional(),
      alwaysLoad: M().optional(),
      toolPermissions: me(o(), yfe()).optional(),
      stateless: M().optional(),
      cachedInitResponse: me(o(), oe()).nullish(),
      discoverSupport: B(["supported", "legacy", "unknown"])
        .optional()
        .catch(void 0),
      cachedDiscoverResponse: me(o(), oe()).nullish(),
      eligible: M().nullish(),
      ineligibleReason: o().nullish(),
      enterpriseManaged: M().optional()
    })
  ),
  RZ = p(() => $e([Fot(), jqt(), ks(), vs(), NTt(), Fvn(), JJo(), QJo()]));
function $Tt(e) {
  return { serverName: e.name, scope: e.config.scope, pluginSource: e.config.pluginSource };
}
function jh(e) {
  return e?.pluginSource !== void 0;
}
function _fe(e) {
  if (e.type !== "claudeai-proxy") return !1;
  return e.scope === "claudeai" || (e.scope === "dynamic" && !jh(e));
}
var Vr = p(() => u({ mcpServers: me(o(), RZ()) }));
function wi(e) {
  return e.type === "connected" || e.type === "cached";
}
function FTt(e, n) {
  if (n.type !== "cached" || !e) return !0;
  return !(e.type === "connected" || e.type === "disabled" || e.type === "needs-auth");
}
import { homedir as Ms } from "os";
import { resolve as Ds } from "path";
var zqt = /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\/[A-Za-z0-9._-]+$/,
  Is = new Set(["ENOTDIR", "ENAMETOOLONG", "ELOOP"]);
async function qbe(e) {
  let n = e.trim(),
    s = ie(),
    r = n.match(/^([a-zA-Z0-9._-]+@[^:]+:.+?(?:\.git)?)(#(.+))?$/);
  if (r?.[1]) {
    let c = r[1],
      l = r[3];
    return l ? { source: "git", url: c, ref: l } : { source: "git", url: c };
  }
  if (n.startsWith("http://") || n.startsWith("https://")) {
    let c = n.match(/^([^#]+)(#(.+))?$/),
      l = c?.[1] || n,
      d = c?.[3];
    if (l.endsWith(".git") || l.includes("/_git/"))
      return d ? { source: "git", url: l, ref: d } : { source: "git", url: l };
    let g;
    try {
      g = new URL(l);
    } catch (m) {
      return { source: "url", url: l };
    }
    if (yo(g.hostname)) {
      if (g.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/)?.[1] && !u6(l)) {
        let h = l.replace(/(?:[/?#]|%2[Ff]|%3[Ff]|%23)+$/, ""),
          f = h.indexOf("/", h.indexOf("://") + 3),
          _ = f === -1 ? "" : h.slice(f);
        if (/^\/[^/]+\/[^/]+/.test(_)) {
          let b = h.endsWith(".git") ? h : `${h}.git`;
          return d ? { source: "git", url: b, ref: d } : { source: "git", url: b };
        }
      }
    }
    if (Us(g.hostname)) {
      let m = g.pathname.split("/").filter(Boolean),
        h = l.indexOf("/", l.indexOf("://") + 3),
        f = h === -1 ? "" : l.slice(h).replace(/\/+$/, ""),
        _ = m.map((x) => {
          try {
            return decodeURIComponent(x);
          } catch {
            return null;
          }
        });
      if (
        m.length >= 2 &&
        f === `/${m.join("/")}` &&
        !/[\t\n\r]/.test(l) &&
        !u6(l) &&
        _.every((x) => x !== null) &&
        _[0] !== "api" &&
        !_.includes("-")
      ) {
        let x = l.replace(/\/+$/, ""),
          w = x.endsWith(".git") ? x : `${x}.git`;
        return d ? { source: "git", url: w, ref: d } : { source: "git", url: w };
      }
    }
    return { source: "url", url: l };
  }
  let a = !1;
  if (n.startsWith("./") || n.startsWith("../") || n.startsWith("/") || n.startsWith("~") || a) {
    let c = Ds(n.startsWith("~") ? n.replace(/^~/, () => Ms()) : n);
    if (gk(c))
      return {
        error: `${c} is a device-namespace path, which can't be checked for links to a network location. Give it without the \\\\?\\ or \\\\.\\ prefix.`
      };
    if (!XH(c)) {
      let d = zCt(),
        g = await sF(s, c, {
          anchors: d === null ? [c] : [d, c],
          launchAncestry: Pxe(s),
          surfaceNetworkRaw: !0,
          unreadableAncestry: "unverified"
        });
      if (g !== void 0)
        return {
          unreadable: !0,
          error:
            g === Gy
              ? `Can't check ${c} for links to a network location: a folder or link along it can't be examined. Use a directory whose folders can be read, or owner/repo or an https:// URL.`
              : `${c} passes through a link to a network location, or to a link target that can't be checked, so it was not read. Give the link's target itself, or use a local directory, owner/repo or an https:// URL.`
        };
    }
    let l;
    try {
      l = await s.stat(c);
    } catch (d) {
      let g = E(d);
      if (g === "ENOENT") return { error: `Path does not exist: ${c}` };
      return {
        ...(!Is.has(g ?? "") && { unreadable: !0 }),
        error: `Cannot access path: ${c} (${g ?? d})`
      };
    }
    if (l.isFile())
      if (c.endsWith(".json")) return { source: "file", path: c };
      else
        return { error: `File path must point to a .json file (marketplace.json), but got: ${c}` };
    else if (l.isDirectory()) return { source: "directory", path: c };
    else return { error: `Path is neither a file nor a directory: ${c}` };
  }
  if (n.includes("/") && !n.startsWith("@")) {
    if (n.includes(":")) return null;
    let c = n.match(/^([^#@]+)(?:[#@](.+))?$/),
      l = c?.[1] || n,
      d = c?.[2];
    if (!zqt.test(l))
      return {
        error: `'${n}' is not a valid GitHub owner/repo shorthand. For a git repo, use the full https:// clone URL from your host (typically ending in .git \u2014 some hosts like Azure DevOps omit it). For a hosted marketplace.json, use its https:// URL. For a local path, use ./ or an absolute path.`
      };
    return d ? { source: "github", repo: l, ref: d } : { source: "github", repo: l };
  }
  return null;
}
function Kqt(e) {
  if (f6(e) || eX(e)) return null;
  let n = e,
    s = e.indexOf("://");
  if (s !== -1) {
    let i;
    try {
      i = new URL(e);
    } catch {
      i = null;
    }
    let a = e.slice(s + 3).search(/[/?#]/) + s + 3;
    if (
      i === null ||
      !Ts.has(i.protocol) ||
      !(As.has(i.protocol) ? jt(i.hostname) : yo(i.hostname)) ||
      e[a] !== "/"
    )
      return null;
    n = e.slice(a + 1).split(/[?#]/)[0] ?? "";
  } else if (e.includes(":")) {
    let i = e.indexOf(":");
    if (e.slice(0, i).includes("/") || !jt(e.slice(e.indexOf("@") + 1, i))) return null;
    n = e.slice(i + 1).replace(/^\//, "");
  }
  let r = n.replace(/\/$/, "").replace(/\.git$/i, "");
  if (!zqt.test(r) || /\/\.\.?$/.test(r)) return null;
  return r.toLowerCase();
}
var fe = "anthropics";
function BTt(e) {
  return Kqt(e)?.startsWith(`${fe}/`) === !0;
}
var Ts = new Set(["https:", "http:", "git:", "git+https:", "git+http:", "git+ssh:", "ssh:"]),
  As = new Set(["ssh:", "git+ssh:"]);
function jt(e) {
  return yo(e) || F4t(e, "ssh.github.com");
}
var Es = "gitlab.com";
function Us(e) {
  return F4t(e, Es);
}
var Ft = 600;
var jTt = 500,
  d3r = 32;
function Jt() {
  return {
    claudeaiPluginId: o()
      .max(128)
      .optional()
      .catch(void 0),
    archiveSha256: kn()
      .optional()
      .catch(void 0)
  };
}
function Qt() {
  return {
    directoryRepositoryKey: o()
      .max(4096)
      .optional()
      .catch(void 0)
  };
}
function WTt(e) {
  if (!/^https?:\/\/[^/\\]/i.test(e)) return !1;
  try {
    let { protocol: n } = new URL(e);
    return n === "https:" || n === "http:";
  } catch {
    return !1;
  }
}
function en() {
  return {
    npmVersionSpec: o()
      .max(256)
      .optional()
      .catch(void 0),
    npmResolved: o()
      .max(2048)
      .optional()
      .catch(void 0),
    npmIntegrity: o()
      .max(256)
      .optional()
      .catch(void 0),
    npmRegistry: o()
      .max(2048)
      .refine(WTt)
      .optional()
      .catch(void 0)
  };
}
function tn() {
  return {
    sourceCommand: o()
      .max(jTt + 20)
      .optional()
      .catch(void 0)
      .describe(
        "The `command`-source command the user accepted at explicit install/update. The once-per-session background re-resolve only runs while the marketplace entry still declares this exact command; a changed command (or an entry that became command-sourced later) is skipped with a warning until the user runs an explicit update."
      ),
    sourceProducerPath: o()
      .max(4096)
      .refine(Gt, { message: "must be an absolute path" })
      .optional()
      .catch(void 0)
      .describe(
        "The directory a `command`-source plugin was last resolved to (what its command printed). Served in place in link mode and re-copied every session in copy mode, so the sandbox write-denies it; refreshed on every install/update, including no-op updates that resolve to a new location."
      ),
    previousProducerPaths: T(oe())
      .transform((e) =>
        e.filter((n) => typeof n === "string" && n.length <= 4096 && Gt(n)).slice(-d3r)
      )
      .optional()
      .catch(void 0)
      .describe(
        "Producer directories this installation was resolved to before the current one (most recent last, bounded). A concurrent older session may still serve one of them, so the sandbox keeps write-denying them too."
      )
  };
}
function Gt(e) {
  return zs.isAbsolute(e) || Os.isAbsolute(e);
}
var nn = /[^\x20-\x7E]| {4,}/;
function Fe() {
  return o()
    .max(jTt, {
      message: "headersHelper must not be longer than the install consent UI can display"
    })
    .refine((e) => !nn.test(e), {
      message:
        "headersHelper must be printable ASCII (letters, digits, punctuation, single spaces) with no runs of 4 or more spaces"
    });
}
var c4e = "anthropic-plugin-directory",
  sn = ["healthcare"],
  Bvn = new Set(["claude-community", "claude-plugins-community", ...sn]),
  u4e = new Set([
    "claude-code-marketplace",
    "claude-code-plugins",
    "claude-plugins-official",
    "anthropic-marketplace",
    "anthropic-plugins",
    "agent-skills",
    "anthropic-agent-skills",
    "life-sciences",
    "knowledge-work-plugins",
    "claude-for-legal",
    "claude-for-financial-services",
    "financial-services-plugins",
    "first-party-plugins",
    "claude-tag-plugins"
  ]),
  c3r = new Set([c4e, "claude-plugin-directory"]),
  PZ = new Set([...u4e, ...Bvn, ...c3r]);
function jvn(e) {
  let n = e.toLowerCase();
  return u4e.has(n) || sn.includes(n);
}
var Ks = new Set(["knowledge-work-plugins", "first-party-plugins"]);
function d$e(e, n, s) {
  if (s !== void 0) return s;
  if (n.autoUpdate !== void 0) return n.autoUpdate;
  if (n.source?.source === "claudeai") return !0;
  if (n.source?.source === "pluginDirectory") return !0;
  let r = e.toLowerCase();
  return u4e.has(r) && !Ks.has(r);
}
var on = ["marketplace", "plugins", "official"];
function rn() {
  return [...on, "directory", "directories"];
}
var an = "official[^a-z0-9]*(anthropic|claude)|(?:anthropic|claude)[^a-z0-9]*official",
  rQo = new RegExp(an, "i");
function ln(e) {
  return new RegExp(`(?:${an}|^(?:anthropic|claude)[^a-z0-9]*(${e.join("|")}))`, "i");
}
var $t = ln(rn()),
  Ls = ln(on),
  u3r = /[^\u0020-\u007E]/;
function f3r(e) {
  return e.split(/[^a-z0-9]+/i).filter((n) => n !== "");
}
function* oQo(e, n) {
  let s = f3r(e),
    r = "";
  for (let [i, a] of s.entries())
    if (((r += a), yield { joined: r, isWhole: i === s.length - 1 }, r.length > n)) return;
}
function f4e(e) {
  if (PZ.has(e.toLowerCase())) return !1;
  if (Ge(e)) return !0;
  if ($t.test(e)) return !0;
  {
    if ($t.test(e.replace(/^[^a-z0-9]+/i, ""))) return !0;
    if (
      /official(?:anthropic|claude)|(?:anthropic|claude)official/i.test(
        e.replace(/[^a-z0-9]+/gi, "")
      )
    )
      return !0;
    let n = rn(),
      s = new RegExp(`^(?:anthropic|claude)(?:${n.join("|")})s?$`, "i"),
      r = 9 + Math.max(...n.map((i) => i.length)) + 1;
    for (let { joined: i } of oQo(e, r)) if (s.test(i)) return !0;
  }
  return !1;
}
function r6(e) {
  return f4e(e) && !u3r.test(e);
}
function Ge(e) {
  return !PZ.has(e.toLowerCase()) && (u3r.test(e) || Ls.test(e));
}
function Hs(e) {
  let n = e.trim();
  return n.includes(":") && BTt(n);
}
function GTt(e, n) {
  let s = e.toLowerCase();
  if (!PZ.has(s)) return null;
  if (n.source === "github" || (n.source === "git" && n.url)) {
    if (sQo(n)) return null;
    return `The name '${e}' is reserved for official Anthropic marketplaces. Only repositories from 'github.com/${fe}/' can use this name.`;
  }
  return `The name '${e}' is reserved for official Anthropic marketplaces and can only be used with GitHub sources from the '${fe}' organization.`;
}
function sQo(e) {
  if (e.source === "github") {
    let n = e.repo ?? "";
    return !n.includes(":") && BTt(n);
  }
  return e.source === "git" && e.url !== void 0 && Hs(e.url);
}
var N = p(() => o().startsWith("./")),
  ne = p(() => N().endsWith(".json")),
  Bt = p(() => $e([A("."), N()])),
  qt = p(() =>
    $e([
      N()
        .refine((e) => e.endsWith(".mcpb") || e.endsWith(".dxt"), {
          message: "MCPB file path must end with .mcpb or .dxt"
        })
        .describe("Path to MCPB file relative to plugin root"),
      o()
        .url()
        .refine((e) => e.endsWith(".mcpb") || e.endsWith(".dxt"), {
          message: "MCPB URL must end with .mcpb or .dxt"
        })
        .describe("URL to MCPB file")
    ])
  ),
  He = p(() => N().endsWith(".md")),
  Ne = p(() => $e([He(), N()])),
  Be = {
    inline: "--plugin-dir session plugins",
    builtin: "built-in plugins",
    "skills-dir": "plugins auto-loaded from .claude/skills/",
    synced: "plugins synced from your claude.ai account",
    "claude-plugin-test": "plugins loaded by claude plugin test",
    npm: "plugins installed from an npm registry (`<package>@npm`); remove this marketplace and add it again under another name",
    pip: "plugins installed from a Python package index (reserved; not yet available)",
    uv: "plugins installed from a Python package index through uv (reserved; not yet available)",
    cargo: "plugins installed from a Rust crate registry (reserved; not yet available)",
    github:
      "plugins installed straight from a GitHub repository (`<owner>/<repo>@github`; reserved; not yet available)",
    gh: "plugins installed straight from a GitHub repository (reserved; not yet available)"
  },
  $y = "npm",
  cn = ["pip", "uv", "cargo", "github", "gh"];
function iQo(e) {
  return e !== void 0 && cn.includes(e);
}
function Bdi(e) {
  return `Installing plugins from ${e} (\`<package>@${e}\`) is not available yet.`;
}
function SM(e) {
  return Object.hasOwn(Be, e);
}
var Ns = [$y, ...cn];
function p3r(e) {
  return Ns.includes(e.toLowerCase());
}
function js(e, n) {
  let s = e.toLowerCase();
  if (p3r(s) && SM(s))
    n.addIssue({ code: "custom", message: `Marketplace name "${s}" is reserved for ${Be[s]}` });
}
var c$e = "Marketplace name impersonates an official Anthropic/Claude marketplace",
  qe = (e) =>
    o()
      .min(1, "Marketplace must have a name")
      .refine((n) => !n.includes(" "), {
        message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")'
      })
      .refine((n) => !jot.test(n), {
        message: "Marketplace name cannot contain control or bidirectional-formatting characters"
      })
      .refine((n) => !n.includes("/") && !n.includes("\\") && !n.includes("..") && n !== ".", {
        message:
          'Marketplace name cannot contain path separators (/ or \\), ".." sequences, or be "."'
      })
      .refine((n) => !e(n), { message: c$e })
      .superRefine((n, s) => {
        let r = n.toLowerCase();
        if (!SM(r) || p3r(r)) return;
        s.addIssue({ code: "custom", message: `Marketplace name "${r}" is reserved for ${Be[r]}` });
      }),
  aQo = p(() => qe(f4e)),
  Fs = p(() => qe(() => !1));
function un(e) {
  return qe(e).superRefine(js);
}
var ye = p(() =>
    o()
      .min(1, "Plugin name cannot be empty")
      .refine((e) => !e.includes(" "), {
        message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
      })
      .refine((e) => !jot.test(e), {
        message: "Plugin name cannot contain control or bidirectional-formatting characters"
      })
  ),
  We = p(() =>
    u({
      name: o()
        .min(1, "Author name cannot be empty")
        .describe("Display name of the plugin author or organization"),
      email: o().optional().describe("Contact email for support or feedback"),
      url: o().optional().describe("Website, GitHub profile, or organization URL")
    })
  ),
  Gs = p(() =>
    u({
      $schema: o()
        .optional()
        .describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
      name: ye().describe(
        "Unique identifier for the plugin, used for namespacing (prefer kebab-case)"
      ),
      displayName: o()
        .optional()
        .describe(
          'Human-readable name shown in UI (e.g., "GitHub Utils"). Falls back to `name` when omitted. Unlike `name`, may contain spaces and any casing; not used for namespacing or lookup.'
        ),
      version: o()
        .optional()
        .describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
      description: o()
        .optional()
        .describe("Brief, user-facing explanation of what the plugin provides"),
      author: We().optional().describe("Information about the plugin creator or maintainer"),
      homepage: o().url().optional().describe("Plugin homepage or documentation URL"),
      repository: o().optional().describe("Source code repository URL"),
      license: o().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
      keywords: T(o()).optional().describe("Tags for plugin discovery and categorization"),
      defaultEnabled: M()
        .optional()
        .describe(
          "Whether the plugin starts enabled when the user has no explicit enabled/disabled setting for it (default: true). Explicit enabledPlugins values always win, and a plugin required by an enabled dependent is enabled regardless of this value."
        ),
      dependencies: T(Ko())
        .optional()
        .describe(
          `Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.`
        ),
      metadata: Ia((e) => (H(e) ? e : void 0), me(o(), oe()).optional()).describe(
        "Free-form metadata for the plugin author's own use (e.g. entitlement or catalog fields). Preserved on the parsed manifest but not read by Claude Code."
      )
    })
  ),
  $s = 1,
  nar = p(() =>
    u({
      $schema: o()
        .optional()
        .catch(void 0)
        .describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
      description: o()
        .optional()
        .describe("Brief, user-facing explanation of what these hooks provide"),
      hooks: gA(() => lq())
        .optional()
        .describe(
          "The hooks provided by the plugin, in the same format as the one used for settings"
        ),
      modules: T(o())
        .max($s, {
          message:
            "hooks.json `modules` names one hooks module per plugin; a second entry is refused"
        })
        .optional()
        .describe(
          `The hooks module: one path, relative to this hooks.json, of a module exporting register(on). The module, and every file it imports from the plugin, is named like code (${ZJo}; a file named otherwise is not loaded) and is an ES module whatever its suffix. What it hooks and calls is read from its source before it loads; \`claude plugin validate\` shows the result.`
        ),
      surface: P4e({
        error:
          'hooks.json `surface` is gone: name the module in the Client element, `Client({ module: "./board.tsx", key })`, a path relative to the file that builds it'
      }).optional()
    }).refine((e) => e.hooks !== void 0 || (e.modules?.length ?? 0) > 0, {
      message:
        "hooks.json must have `hooks` (the hook matchers) or `modules` (hooks modules), or both"
    })
  ),
  Bs = p(() =>
    u({
      hooks: $e([
        ne().describe(
          "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"
        ),
        gA(() => lq()).describe(
          "Additional hooks (in addition to those in hooks/hooks.json, if it exists)"
        ),
        T(
          $e([
            ne().describe(
              "Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"
            ),
            gA(() => lq()).describe(
              "Additional hooks (in addition to those in hooks/hooks.json, if it exists)"
            )
          ])
        )
      ])
    })
  ),
  lQo = p(() =>
    u({
      source: Ne().optional().describe("Path to command markdown file, relative to plugin root"),
      content: o().optional().describe("Inline markdown content for the command"),
      description: o().optional().describe("Command description override"),
      argumentHint: o().optional().describe('Hint for command arguments (e.g., "[file]")'),
      model: o().optional().describe("Default model for this command"),
      allowedTools: T(o()).optional().describe("Tools allowed when command runs")
    }).refine((e) => (e.source && !e.content) || (!e.source && e.content), {
      message:
        'Command must have either "source" (file path) or "content" (inline markdown), but not both'
    })
  ),
  qs = p(() =>
    u({
      commands: $e([
        Ne().describe(
          "Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded \u2014 list its files here if you want both."
        ),
        T(
          Ne().describe(
            "Path to a command file or skill directory, relative to the plugin root. When set, the commands/ directory is not auto-loaded \u2014 list its files here if you want both."
          )
        ).describe(
          "List of command file or skill directory paths. When set, the commands/ directory is not auto-loaded."
        ),
        me(o(), lQo()).describe(
          'Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" \u2192 "/plugin:about")'
        )
      ])
    })
  ),
  Ws = p(() =>
    u({
      agents: $e([
        He().describe(
          "Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded \u2014 list its files here if you want both."
        ),
        T(
          He().describe(
            "Path to an agent file, relative to the plugin root. When set, the agents/ directory is not auto-loaded \u2014 list its files here if you want both."
          )
        ).describe("List of agent file paths. When set, the agents/ directory is not auto-loaded.")
      ])
    })
  ),
  Ys = p(() =>
    u({
      skills: $e([
        Bt().describe(
          'Path to a skill directory, relative to the plugin root ("." / "./" denote the plugin root itself). Loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring a specific subdirectory replaces the skills/ scan).'
        ),
        T(
          Bt().describe(
            'Path to a skill directory, relative to the plugin root ("." / "./" denote the plugin root itself).'
          )
        ).describe(
          "List of skill directory paths, loaded in addition to the skills/ directory (except: for a marketplace entry whose source resolves to the marketplace root, declaring specific subdirectories replaces the skills/ scan)."
        )
      ])
    })
  ),
  m3r = p(() => $e([o(), T(o())])),
  pn = p(() =>
    u({
      outputStyles: $e([
        N().describe(
          "Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded \u2014 list its files here if you want both."
        ),
        T(
          N().describe(
            "Path to an output-styles directory or file, relative to the plugin root. When set, the output-styles/ directory is not auto-loaded \u2014 list its files here if you want both."
          )
        ).describe(
          "List of output-style directory or file paths. When set, the output-styles/ directory is not auto-loaded."
        )
      ])
    })
  ),
  Vs = p(() =>
    o()
      .max(64)
      .regex(/^[a-z][a-z0-9_-]*$/, "must match ^[a-z][a-z0-9_-]*$")
  ),
  Zs = 16,
  Xs = p(() =>
    u({
      id: Vs(),
      remote: o()
        .max(256)
        .regex(
          /^(npm:[@a-z0-9/._-]+(@[a-z0-9._+-]+)?|github:[\w.-]+\/[\w.-]+@[\w./-]+#.+\.js)$/,
          "must be npm:<pkg>[@ver] or github:<owner>/<repo>@<ref>#<path>.js"
        )
        .optional(),
      integrity: o()
        .max(512)
        .regex(
          /^sha(256|384|512)-[A-Za-z0-9+/=]+$/,
          "must be SRI form: sha256-, sha384-, or sha512-<base64>"
        )
        .optional()
    }).strict()
  ),
  Js = p(() => u({ syntaxHighlighting: u({ hljsLanguages: T(Xs()).max(Zs) }).strict() })),
  dn = p(() =>
    u({
      themes: $e([
        N().describe(
          "Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded \u2014 list its files here if you want both."
        ),
        T(
          N().describe(
            "Path to a themes directory or file, relative to the plugin root. When set, the themes/ directory is not auto-loaded \u2014 list its files here if you want both."
          )
        ).describe(
          "List of theme directory or file paths. When set, the themes/ directory is not auto-loaded."
        )
      ])
    })
  ),
  Qs = p(() =>
    u({
      workflows: $e([
        N().describe(
          "Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded \u2014 list its files here if you want both."
        ),
        T(
          N().describe(
            "Path to a workflows directory or .js file, relative to the plugin root. When set, the workflows/ directory is not auto-loaded \u2014 list its files here if you want both."
          )
        ).describe(
          "List of workflow directory or .js file paths. When set, the workflows/ directory is not auto-loaded."
        )
      ]).optional()
    })
  ),
  Wt = p(() => o().min(1)),
  eo = p(() =>
    o()
      .min(2)
      .refine((e) => e.startsWith("."), {
        message: 'File extensions must start with dot (e.g., ".ts", not "ts")'
      })
  ),
  to = p(() =>
    u({
      mcpServers: $e([
        ne().describe(
          "MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)"
        ),
        qt().describe("Path or URL to MCPB file containing MCP server configuration"),
        me(o(), RZ()).describe("MCP server configurations keyed by server name"),
        T(
          $e([
            ne().describe("Path to MCP servers configuration file"),
            qt().describe("Path or URL to MCPB file"),
            me(o(), RZ()).describe("Inline MCP server configurations")
          ])
        ).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)")
      ])
    })
  ),
  gn = p(() =>
    u({
      type: B(["string", "number", "boolean", "directory", "file"]).describe(
        "Type of the configuration value"
      ),
      title: o().describe("Human-readable label shown in the config dialog"),
      description: o().describe("Help text shown beneath the field in the config dialog"),
      required: M().optional().describe("If true, validation fails when this field is empty"),
      default: $e([o(), v(), M(), T(o())])
        .optional()
        .describe("Default value used when the user provides nothing"),
      multiple: M().optional().describe("For string type: allow an array of strings"),
      sensitive: M()
        .optional()
        .describe(
          "If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json"
        ),
      min: v().optional().describe("Minimum value (number type only)"),
      max: v().optional().describe("Maximum value (number type only)"),
      options: T(
        o()
          .min(1, "An option cannot be empty")
          .max(64, "An option can be at most 64 characters")
          .refine((e) => ear(e) === e, {
            message:
              "An option cannot contain control, invisible or bidirectional-formatting characters"
          })
          .refine((e) => e.trim() === e, { message: "An option cannot start or end with a space" })
      )
        .min(1, "options needs at least one value")
        .refine((e) => new Set(e.map((n) => n.toLowerCase())).size === e.length, {
          message: "options cannot repeat a value (in any letter case)"
        })
        .readonly()
        .optional()
        .describe(
          "For string type: the only values the field takes. /config shows the field as a picker over them, and a stored value outside them counts as unset"
        )
    })
      .strict()
      .superRefine((e, n) => {
        if (e.options === void 0) return;
        if (e.type !== "string" || e.multiple === !0 || e.sensitive === !0) {
          n.addIssue({
            code: "custom",
            path: ["options"],
            message:
              'options is only for a field of type "string" that is neither multiple nor sensitive'
          });
          return;
        }
        if (e.default === void 0) {
          if (e.required !== !0)
            n.addIssue({
              code: "custom",
              path: ["default"],
              message: "a field with options needs a default among them, or required: true"
            });
          return;
        }
        if (typeof e.default !== "string" || !e.options.includes(e.default))
          n.addIssue({
            code: "custom",
            path: ["default"],
            message: `default must be one of the options: ${e.options.join(", ")}`
          });
      })
  ),
  no = p(() =>
    u({
      userConfig: me(
        o().regex(
          /^[A-Za-z_]\w*$/,
          "Option keys must be valid identifiers (letters, digits, underscore; no leading digit) \u2014 they become CLAUDE_PLUGIN_OPTION_<KEY> env vars in hooks"
        ),
        gn()
      )
        .optional()
        .describe(
          "User-configurable values this plugin needs. Prompted at enable time. Non-sensitive values saved to settings.json; sensitive values to secure storage. Available as ${user_config.KEY} in MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. Keep sensitive value counts small."
        )
    })
  ),
  so = p(() =>
    u({
      channels: T(
        u({
          server: o()
            .min(1)
            .describe(
              "Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers."
            ),
          displayName: o()
            .optional()
            .describe(
              'Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.'
            ),
          userConfig: me(o(), gn())
            .optional()
            .describe(
              "Fields to prompt the user for when enabling this plugin in assistant mode. Saved values are substituted into ${user_config.KEY} references in the mcpServers env."
            )
        }).strict()
      ).describe(
        "Channels this plugin provides. Each entry declares an MCP server as a message channel and optionally specifies user configuration to prompt for at enable time."
      )
    })
  ),
  Wvn = p(() =>
    Ue({
      command: o()
        .min(1)
        .refine(
          (e) => {
            if (e.includes(" ") && !e.startsWith("/")) return !1;
            return !0;
          },
          { message: "Command should not contain spaces. Use args array for arguments." }
        )
        .describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
      args: T(Wt()).optional().describe("Command-line arguments to pass to the server"),
      extensionToLanguage: me(eo(), Wt())
        .refine((e) => Object.keys(e).length > 0, {
          message: "extensionToLanguage must have at least one mapping"
        })
        .describe(
          "Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping."
        ),
      transport: B(["stdio", "socket"])
        .default("stdio")
        .describe("Communication transport mechanism"),
      env: me(o(), o())
        .optional()
        .describe("Environment variables to set when starting the server"),
      initializationOptions: oe()
        .optional()
        .describe("Initialization options passed to the server during initialization"),
      settings: oe()
        .optional()
        .describe("Settings passed to the server via workspace/didChangeConfiguration"),
      workspaceFolder: o().optional().describe("Workspace folder path to use for the server"),
      startupTimeout: v()
        .int()
        .positive()
        .optional()
        .describe("Maximum time to wait for server startup (milliseconds)"),
      shutdownTimeout: v()
        .int()
        .positive()
        .optional()
        .describe("Maximum time to wait for graceful shutdown (milliseconds)"),
      requestTimeout: v()
        .int()
        .positive()
        .max(2147483647)
        .optional()
        .describe(
          "Maximum time to wait for the server to answer a request (milliseconds). Defaults to 60000."
        ),
      restartOnCrash: M().optional().describe("Whether to restart the server if it crashes"),
      maxRestarts: v()
        .int()
        .nonnegative()
        .optional()
        .describe("Maximum number of restart attempts before giving up"),
      diagnostics: M()
        .optional()
        .describe(
          "Whether to push publishDiagnostics into the agent context after edits. Set to false to keep LSP navigation (goToDefinition, hover, etc.) but suppress automatic diagnostic injection. Defaults to true."
        )
    })
  ),
  oo = p(() =>
    Ue({
      name: o()
        .min(1)
        .describe(
          "Identifier for this monitor, unique within the plugin. Used to dedupe so re-arming (plugin reload, repeat skill invoke) does not spawn duplicates."
        ),
      command: o()
        .min(1)
        .describe(
          'Shell command to run as a persistent background monitor. Each stdout line is delivered to the model as a <task_notification> event; the process runs for the session lifetime. ${CLAUDE_PLUGIN_ROOT}, ${CLAUDE_PLUGIN_DATA}, ${CLAUDE_PROJECT_DIR}, ${user_config.*}, and ${ENV_VAR} are substituted. Runs in the session cwd (the named --project-config-root when a host set one) \u2014 prefix with `cd "${CLAUDE_PLUGIN_ROOT}" && ` if the script needs its own directory.'
        ),
      description: o()
        .min(1)
        .describe(
          "Short human-readable description of what is being monitored (shown in task panel and notification summary)."
        ),
      when: $e([
        A("always"),
        o()
          .startsWith("on-skill-invoke:")
          .refine((e) => e.length > 16, { message: "on-skill-invoke: must specify a skill name" })
      ])
        .default("always")
        .describe(
          'Arm trigger. "always" arms at session start and on plugin reload. "on-skill-invoke:<skill>" arms the first time that skill is dispatched (via Skill tool or slash command).'
        )
    })
  ),
  dQo = p(() =>
    T(oo()).refine((e) => new Set(e.map((n) => n.name)).size === e.length, {
      message: "Monitor names must be unique within a plugin"
    })
  ),
  mn = p(() =>
    u({
      monitors: $e([
        ne().describe(
          "Path to a JSON file containing the monitors array, relative to the plugin root"
        ),
        dQo()
      ]).describe(
        "Background watch scripts the host arms as persistent Monitor tasks (unsandboxed, same trust tier as hooks) so plugins need not instruct the model to arm them. When omitted, monitors/monitors.json at the plugin root is loaded if present."
      )
    })
  ),
  ro = p(() =>
    u({
      lspServers: $e([
        ne().describe("Path to .lsp.json configuration file relative to plugin root"),
        me(o(), Wvn()).describe("LSP server configurations keyed by server name"),
        T(
          $e([
            ne().describe("Path to LSP configuration file"),
            me(o(), Wvn()).describe("Inline LSP server configurations")
          ])
        ).describe("Array of LSP server configurations (paths or inline definitions)")
      ])
    })
  ),
  ao = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/,
  lo = /^[a-z0-9][a-z0-9-._]*$/,
  co = /^@[a-z0-9][a-z0-9-._]*\/\*$/;
function rxe(e) {
  return !e.includes("..") && !e.includes("//") && (ao.test(e) || lo.test(e));
}
var hn = p(() =>
    o()
      .refine(
        (e) => !e.includes("..") && !e.includes("//"),
        "Package name cannot contain path traversal patterns"
      )
      .refine((e) => rxe(e), "Invalid npm package name format")
  ),
  zTt = /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9_-])?$/,
  cQo = /^[0-9a-f]{64}$/,
  Vqt = 16,
  g3r = 64,
  B0 = 1048576,
  uo = p(() => u({ sha256: o().regex(cQo) }));
function qqt(e) {
  let n = me(o(), oe()).safeParse(e);
  if (!n.success) return;
  let s = Object.create(null),
    r = 0;
  for (let [i, a] of Object.entries(n.data)) {
    if (r >= g3r) break;
    let c = uo().safeParse(a);
    if (zTt.test(i) && c.success) ((s[i] = c.data), r++);
  }
  return r > 0 ? s : void 0;
}
var po = p(() =>
    u({
      binaries: oe()
        .transform(qqt)
        .describe(
          "sha256-pinned files to fetch into bin/ at install time, keyed by basename (target triple encoded in the name)"
        )
    })
  ),
  go = p(() =>
    u({
      settings: me(o(), oe())
        .optional()
        .describe(
          "Settings to merge into the user settings while this plugin is enabled. Only the documented allowlisted keys are applied."
        )
    })
  ),
  mo = p(() =>
    u({
      types: N()
        .refine((e) => e.endsWith(".d.ts"), {
          message: "types must name a TypeScript declaration file ending in '.d.ts'"
        })
        .refine((e) => !e.split(/[\\/]/).includes(".."), {
          message: "types must stay inside the plugin directory (no '..' segment)"
        })
        .optional()
        .describe(
          "Path to the plugin's type contract, relative to the plugin root and starting with ./: a self-contained .d.ts (no import, export-from, require or reference) that exports the types of the noun the plugin's hooks module adds in engine.create at its top level and declares the noun in a `declare module 'claude-code' { interface EngineInterface { ... } }` block, nothing else. A mod that lists this plugin under dependencies gets the contract laid at .claude-plugin/types/<plugin>/index.d.ts each time the engine loads it from a folder the person owns, so it types against the noun with nothing copied; claude plugin validate checks the file."
        )
    })
  ),
  ho = p(() =>
    u({
      experimental: Ia(
        (e) => (H(e) ? e : void 0),
        u({
          ...dn().partial().shape,
          ...Js().partial().shape,
          ...mn().partial().shape,
          ...pn().partial().shape,
          evals: m3r()
            .optional()
            .describe(
              "Directory of eval cases for the plugin evaluation harness, relative to the plugin root (default: evals/). A list is accepted; its first entry is the case directory."
            )
        })
          .passthrough()
          .optional()
          .describe(
            "Components whose manifest shape may change without a deprecation cycle. Move a key out of here once it is promoted to stable."
          )
      )
    })
  );
var IZ = p(() =>
    u({
      ...Gs().shape,
      ...Bs().partial().shape,
      ...qs().partial().shape,
      ...Ws().partial().shape,
      ...Ys().partial().shape,
      ...pn().partial().shape,
      ...dn().partial().shape,
      ...Qs().shape,
      ...so().partial().shape,
      ...to().partial().shape,
      ...ro().partial().shape,
      ...mn().partial().shape,
      ...go().partial().shape,
      ...mo().partial().shape,
      ...no().partial().shape,
      ...po().partial().shape,
      ...ho().partial().shape
    })
  ),
  jdi = new Set([
    "url",
    "github",
    "git",
    "npm",
    "file",
    "directory",
    "skills-dir",
    "hostPattern",
    "pathPattern",
    "settings"
  ]);
function Gvn(e) {
  try {
    return (new RegExp(e), !0);
  } catch {
    return !1;
  }
}
function zvn(e) {
  return u6(e) || hW(e);
}
var h3r = "ssh.github.com";
function _e(e) {
  return yo(e) || NH(e) === h3r;
}
function y3r(e) {
  if (zvn(e)) return null;
  let n = tpe(e),
    s = n?.host,
    i = (
      /^[A-Za-z][A-Za-z0-9+.-]*:\/\//.test(e.trimStart())
        ? n?.path.replace(/[?#][\s\S]*$/, "")
        : n?.path
    )?.replace(/^\/+/, "");
  if (!s || !i || !_e(s)) return null;
  let a = fQo(i),
    c = a.split("/");
  if (c.length !== 2 || !c[0] || !c[1]) return null;
  return a;
}
var uQo = /^[A-Za-z0-9._-]+$/;
function rar(e) {
  return uQo.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function Kvn(e) {
  if (!e.endsWith("/*")) return null;
  let n = e.slice(0, -2);
  return rar(n) ? n : null;
}
function fQo(e) {
  let n = e;
  try {
    n = decodeURIComponent(e);
  } catch {}
  let s = fn(n);
  return _n(s);
}
function fn(e) {
  let n = [];
  for (let s of e.split("/")) {
    if (s === ".") continue;
    if (s === "..") {
      n.pop();
      continue;
    }
    n.push(s);
  }
  return n.filter((s) => s !== "").join("/");
}
function _n(e) {
  let n = e.length;
  for (;;) {
    let s = n;
    while (s > 0 && e.charCodeAt(s - 1) === 47) s--;
    if (s >= 4 && e.startsWith(".git", s - 4)) s -= 4;
    if (s === n) return n === e.length ? e : e.slice(0, n);
    n = s;
  }
}
function Yt(e) {
  let n = iSe(e);
  return n === h3r ? vr : n;
}
function Vvn(e, n) {
  if (e.includes("://"))
    try {
      let r = iZo(e);
      if (r === null) return e;
      ((r.hostname = Yt(r.hostname)),
        (r.username = ""),
        (r.password = ""),
        (r.search = ""),
        (r.hash = ""));
      try {
        r.pathname = decodeURIComponent(r.pathname);
      } catch {}
      let i = fn(r.pathname);
      return ((r.pathname = n?.stripDotGit ? _n(i) : i), r.toString());
    } catch {
      return e;
    }
  let s = tpe(e);
  return s ? `${Yt(s.host)}:${s.path}` : e;
}
var fo = new Set(["http:", "https:", "git:", "git+http:", "git+https:"]);
function _3r(e) {
  if (f6(e)) return e;
  if (e.includes("://"))
    try {
      let r = new URL(e);
      if (((r.hostname = iSe(r.hostname)), fo.has(r.protocol) || yo(r.hostname)))
        ((r.username = ""), (r.password = ""));
      return r.toString();
    } catch {
      return e;
    }
  let n = xEn(e);
  if (!n) return e;
  let s = n.host.toLowerCase().replace(/\.+$/, "");
  return yo(s) ? `${vr}:${n.path}` : `${n.user}@${s}:${n.path}`;
}
function Wdi(e) {
  if (e.includes("://")) {
    if (zvn(e)) return !1;
    let a = tpe(e)?.host;
    if (a !== void 0 && _e(a) && Vvn(e, { stripDotGit: !0 }).includes("*")) return !0;
    let c = Z$e(e)?.hostname;
    if (!c || !_e(c)) return !1;
    let l = _3r(e);
    try {
      let d = new URL(l);
      return d.hostname.includes("*") || d.pathname.includes("*");
    } catch {
      return l.includes("*");
    }
  }
  let n = tpe(e),
    s = n?.host,
    r = n?.path;
  if (!s || r === void 0 || !_e(s)) return !1;
  let i = r;
  try {
    i = decodeURIComponent(r);
  } catch {}
  return i.includes("*");
}
function yn(e) {
  return Gr("source", [
    u({
      source: A("url"),
      url: o().url().describe("Direct URL to marketplace.json file"),
      headers: me(o(), o()).optional().describe("Custom HTTP headers (e.g., for authentication)"),
      headersHelper: Fe()
        .optional()
        .describe(
          "Command that prints a JSON object of HTTP headers (e.g. a short-lived auth token). Its output overrides `headers` and, like `headers`, is inherited by same-origin archive downloads from this marketplace. Runs from a fixed directory (the Claude config home, never the session's), so give a bare command found via PATH or an absolute path; it is re-run on later refreshes of this marketplace."
        )
    }),
    u({
      source: A("github"),
      repo: o().describe(
        'GitHub repository in owner/repo format. ONLY in the managed-settings policy lists (strictKnownMarketplaces / blockedMarketplaces) the owner-wildcard form "owner/*" matches every repository under exactly that owner. Everywhere else (marketplace add, extraKnownMarketplaces, known_marketplaces.json) the value ' +
          "must name a single repository \u2014 a wildcard is taken literally and fails to clone."
      ),
      ref: o()
        .optional()
        .describe(
          'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'
        ),
      path: o()
        .optional()
        .describe(
          "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"
        ),
      sparsePaths: T(o())
        .optional()
        .describe(
          'Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.'
        ),
      skipLfs: M()
        .optional()
        .describe(
          "Has no effect; accepted so existing settings keep working. Claude Code's own git never downloads Git LFS content: LFS-tracked files in the marketplace repository are checked out as pointer files whether or not this is set, and adding or updating the marketplace says how many were. To fetch their content, run `git lfs pull` in the marketplace's checkout under ~/.claude/plugins/marketplaces/."
        )
    }),
    u({
      source: A("git"),
      url: o().describe("Full git repository URL"),
      ref: o()
        .optional()
        .describe(
          'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'
        ),
      path: o()
        .optional()
        .describe(
          "Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)"
        ),
      sparsePaths: T(o())
        .optional()
        .describe(
          'Directories to include via git sparse-checkout (cone mode). Use for monorepos where the marketplace lives in a subdirectory. Example: [".claude-plugin", "plugins"]. If omitted, the full repository is cloned.'
        ),
      skipLfs: M()
        .optional()
        .describe(
          "Has no effect; accepted so existing settings keep working. Claude Code's own git never downloads Git LFS content: LFS-tracked files in the marketplace repository are checked out as pointer files whether or not this is set, and adding or updating the marketplace says how many were. To fetch their content, run `git lfs pull` in the marketplace's checkout under ~/.claude/plugins/marketplaces/."
        )
    }),
    u({
      source: A("npm"),
      package: hn()
        .or(o().regex(co, "Invalid npm package name format"))
        .describe(
          'npm package containing marketplace.json (e.g. "@acme/claude-marketplace"). In strictKnownMarketplaces / blockedMarketplaces an entry also governs plugins installed straight from the npm marketplace (`<package>@npm`): an exact package name matches that package, and "@acme/*" matches every package under the scope.'
        ),
      version: o()
        .optional()
        .describe(
          'Version or range to fetch (e.g. "1.4.0", "^1.4"); defaults to the latest dist-tag'
        ),
      registry: o()
        .url()
        .refine(WTt, "Registry must be an http(s) URL")
        .optional()
        .describe(
          `Registry URL. When adding a marketplace: a one-off registry override (otherwise your npm configuration decides). In a policy entry: the origin and path prefix the package's RESOLVED tarball URL must fall under (e.g. "https://npm.example.com/api/npm/internal/"); under allowManagedPermissionRulesOnly, an npm marketplace keeps plugin allowed-tools only when both the entry and the registration pin this same registry.`
        )
    }),
    u({ source: A("file"), path: o().describe("Local file path to marketplace.json") }),
    u({
      source: A("directory"),
      path: o().describe("Local directory containing .claude-plugin/marketplace.json")
    }),
    u({ source: A("skills-dir") }).describe(
      "Policy-list sentinel for the ~/.claude/skills/ auto-load (@skills-dir plugins). In strictKnownMarketplaces: opt the scan back IN (by default any allowlist blocks it). In blockedMarketplaces: turn the scan OFF without otherwise restricting marketplaces. Only meaningful in those two managed-settings lists (areLocalPluginDirsAllowedByPolicy); known_marketplaces.json / marketplace add etc. ignore it."
    ),
    u({
      source: A("hostPattern"),
      hostPattern: o().describe(
        'Regex pattern to match the host/domain extracted from any marketplace source type. For github sources, matches against github.com. For git sources (SSH or HTTPS), extracts the hostname from the URL. Use in strictKnownMarketplaces to allow all marketplaces from a specific host (e.g., "^github\\.mycompany\\.com$").'
      )
    }),
    u({
      source: A("pathPattern"),
      pathPattern: o().describe(
        'Regex pattern matched against the .path field of file and directory sources. Use in strictKnownMarketplaces to allow filesystem-based marketplaces alongside hostPattern restrictions for network sources. Use ".*" to allow all filesystem paths, or a narrower pattern (e.g., "^/opt/approved/") to restrict to specific directories.'
      )
    }),
    u({
      source: A("settings"),
      name: e
        ? Fs().describe(
            "Marketplace name, as stored in known_marketplaces.json. A reserved name is refused per entry at load (revalidateReservedNameEntry); a look-alike name is judged when that marketplace's own catalog is parsed (catalogNameSchemaFor)."
          )
        : aQo()
            .refine((n) => !PZ.has(n.toLowerCase()), {
              message:
                "Reserved marketplace names cannot be used with settings sources. validateOfficialNameSource only accepts github/git sources from anthropics/* for these names; a settings source would be rejected after loadAndCacheMarketplace has already written to disk with cleanupNeeded=false."
            })
            .describe(
              "Marketplace name. Must match the extraKnownMarketplaces key (enforced); the synthetic manifest is written under this name. Same validation " +
                "as PluginMarketplaceSchema plus reserved-name rejection \u2014 " +
                "validateOfficialNameSource runs after the disk write, too late to clean up."
            ),
      plugins: T(Co()).describe("Plugin entries declared inline in settings.json"),
      owner: We().optional()
    }).describe(
      "Inline marketplace manifest defined directly in settings.json. The reconciler writes a synthetic marketplace.json to the cache; diffMarketplaces detects edits via isEqual on the stored source (the plugins array is inside this object, so edits surface as sourceChanged)."
    )
  ]);
}
var KTt = p(() => yn(!1));
function Uot(e) {
  let n = { refused: !1 },
    s = _o(e, n);
  return n.refused ? null : s;
}
function _o(e, n) {
  switch (e.source) {
    case "url": {
      let { headers: s, headersHelper: r, ...i } = e;
      return { ...i, url: le(i.url, n) };
    }
    case "git":
      return { ...e, url: le(e.url, n) };
    case "npm":
      return e.registry === void 0 ? e : { ...e, registry: le(e.registry, n) };
    case "settings":
      return {
        ...e,
        plugins: e.plugins.map((s) => {
          let { headers: r, headersHelper: i, ...a } = s;
          if (typeof a.source === "object" && "url" in a.source)
            return { ...a, source: { ...a.source, url: le(a.source.url, n) } };
          if (typeof a.source === "object" && a.source.source === "command")
            return ((n.refused = !0), a);
          if (typeof a.source === "object" && a.source.source === "npm") {
            let { registry: c } = a.source;
            return {
              ...a,
              source: {
                ...a.source,
                package: le(a.source.package, n, !0),
                ...(c !== void 0 && { registry: le(c, n) })
              }
            };
          }
          return a;
        })
      };
    default:
      return e;
  }
}
function le(e, n, s = !1) {
  if (u6(e)) return Le(e, n, s);
  let r;
  try {
    r = new URL(e);
  } catch {
    return Le(e, n, s);
  }
  if (r.host === "") return Le(e, n, s);
  if (bo(e, r)) return ((n.refused = !0), e);
  if (!vo.has(r.protocol)) {
    let i = e.indexOf("#"),
      a = i === -1 ? e : e.slice(0, i),
      c = i === -1 ? "" : e.slice(i);
    if (a.includes("?") || !So.test(c)) return ((n.refused = !0), e);
    if (r.password === "") return e;
    return ((r.password = ""), r.toString());
  }
  if (r.search !== "" || r.hash !== "") return ((n.refused = !0), e);
  if (r.username === "" && r.password === "") return e;
  return ((r.username = ""), (r.password = ""), r.toString());
}
function bo(e, n) {
  let s = e.replace(/^[\x00-\x20]+|[\x00-\x20]+$/g, "").replace(/[\t\n\r]/g, ""),
    r = TZo.has(n.protocol.slice(0, -1)),
    i = s.slice(s.indexOf(":") + 1).replace(r ? /^[/\\]+/ : /^\/\//, ""),
    a = i.search(r ? /[/\\?#]/ : /[/?#]/),
    c = a === -1 ? "" : i.slice(a),
    l = c.search(/[?#]/),
    d = l === -1 ? c : c.slice(0, l);
  if (d === "") return n.pathname !== "/" && n.pathname !== "";
  return d !== n.pathname;
}
function Le(e, n, s) {
  let r = e.replace(/[\t\n\r]/g, "");
  if (r.includes("?")) return ((n.refused = !0), e);
  let i =
    s &&
    (/^@[^@:?#\\%]+$/.test(r) || /^(?:npm:)?(?:@[^@:/\\?#%]+\/)?[^@:/\\?#%]+@[^@:/\\?#]*$/.test(r));
  if (r.includes("@") && !Vt.test(r) && !i) n.refused = !0;
  let a = s && ko.test(r);
  if (r.includes("#") && !Vt.test(r) && !a) n.refused = !0;
  return e;
}
var Ye = String.raw`[\w./+-]`,
  So = new RegExp(`^(?:#${Ye}*)?$`),
  Vt = new RegExp(
    String.raw`^(?:(?:git\+)?ssh:\/\/)?[^@:/\\?#%]+@[^@:/\\?#]+:[^@?#]*(?:#${Ye}*)?$`
  ),
  ko = new RegExp(
    String.raw`^(?:(?:github|gitlab|bitbucket):)?[^@:/\\?#%]+(?:\/[^@:/\\?#%]+)+(?:#${Ye}*)?$`
  ),
  vo = new Set(["http:", "https:", "git+http:", "git+https:"]);
function b3r(e) {
  if (u6(e.tarballUrl)) return null;
  let n;
  try {
    n = new URL(e.tarballUrl);
  } catch {
    return null;
  }
  if (n.protocol !== "http:" && n.protocol !== "https:") return null;
  if (n.username === "" && n.password === "" && n.search === "" && n.hash === "") return e;
  return (
    (n.username = ""),
    (n.password = ""),
    (n.search = ""),
    (n.hash = ""),
    { packageName: e.packageName, tarballUrl: n.toString() }
  );
}
var bn = p(() => yn(!0));
function Sn() {
  return bn();
}
var pQo = p(() => {
    let e = Sn();
    return Gr("source", [
      u({ source: A("pluginDirectory") }).describe(
        "@internal Policy-list sentinel for the built-in Directory marketplace. In strictKnownMarketplaces: allow it (by default any allowlist blocks it). In blockedMarketplaces: block it without otherwise restricting marketplaces. Only meaningful in those two managed-settings lists; it cannot be added or declared anywhere else."
      ),
      ...e.options
    ]);
  }),
  S3r = p(() => Sn()),
  oar = p(() =>
    o()
      .length(40)
      .regex(/^[a-f0-9]{40}$/, "Must be a full 40-character lowercase git commit SHA")
  ),
  kn = p(() => o().regex(/^[0-9a-fA-F]{64}$/, "Must be a 64-character hex SHA-256 digest")),
  w3r =
    "Archive URLs must use https:// and must not point at a loopback, link-local, or cloud-metadata host";
function v3r(e) {
  try {
    let n = new URL(e);
    return n.protocol === "https:" && !Ase(n.hostname);
  } catch {
    return !1;
  }
}
var xo = p(() =>
    u({
      source: A("archive"),
      url: o()
        .url()
        .refine(v3r, { message: w3r })
        .describe(
          "HTTPS URL of a zip archive containing the plugin. The plugin root (the directory holding .claude-plugin/) may be at the top of the archive " +
            "or nested one directory deep \u2014 a single wrapping directory is stripped."
        ),
      sha256: kn()
        .optional()
        .describe(
          "SHA-256 digest of the archive. When set, every download is verified against it and the install is refused on mismatch. It also serves as the version identity when neither plugin.json nor the marketplace entry declares a `version`. Recommended. Note the update signal is the version string (plugin.json " +
            "version, else the entry version, else this digest) \u2014 changing only the digest " +
            "while a version is declared does not trigger an update."
        )
    }).describe(
      "Plugin distributed as a zip archive fetched over HTTPS \u2014 for hosting on any " +
        "static file server or artifact repository (S3, GitLab, nginx) with no git or npm on the client. Authentication: the entry's own `headers` / `headersHelper` (bound to this URL), overlaid on the enclosing url-source marketplace's headers (static or `headersHelper`-minted) when the archive shares its origin."
    )
  ),
  vn = p(() =>
    $e([
      Ia((e) => (e === "." ? "./" : e), N()).describe(
        "Path to the plugin root, relative to the marketplace root (the directory containing .claude-plugin/, not .claude-plugin/ itself)"
      ),
      u({
        source: A("npm"),
        package: hn()
          .or(
            o().refine(
              (e) =>
                /^(?:file|https?|git(?:\+https?|\+ssh)?|ssh|github|gitlab|bitbucket):/i.test(e) ||
                !e.includes(".."),
              'Package reference cannot contain ".." path segments'
            )
          )
          .describe(
            "Package name (or url, or local path, or anything else that can be passed to `npm` as a package)"
          ),
        version: o()
          .optional()
          .describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
        registry: o()
          .url()
          .refine(WTt, "Registry must be an http(s) URL")
          .optional()
          .describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)")
      }).describe("NPM package as plugin source"),
      u({
        source: A("url"),
        url: o().describe("Full git repository URL (https:// or git@)"),
        ref: o()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'
          ),
        sha: oar().optional().describe("Specific commit SHA to use")
      }),
      u({
        source: A("github"),
        repo: o().describe("GitHub repository in owner/repo format"),
        ref: o()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'
          ),
        sha: oar().optional().describe("Specific commit SHA to use")
      }),
      u({
        source: A("git-subdir"),
        url: o().describe("Git repository: GitHub owner/repo shorthand, https://, or git@ URL"),
        path: o()
          .min(1)
          .describe(
            'Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). ' +
              "Checked out sparsely \u2014 over https or ssh as a partial clone (--filter=tree:0) \u2014 to minimize bandwidth for monorepos."
          ),
        ref: o()
          .optional()
          .describe(
            'Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'
          ),
        sha: oar().optional().describe("Specific commit SHA to use")
      }).describe(
        "Plugin located in a subdirectory of a larger repository (monorepo). Only the specified subdirectory is materialized; the rest of the repo is not downloaded."
      ),
      xo(),
      u({
        source: A("command"),
        command: o()
          .min(1)
          .max(jTt, {
            message: "command must not be longer than the install consent UI can display"
          })
          .refine((e) => !nn.test(e), {
            message:
              "command must be printable ASCII (letters, digits, punctuation, single spaces) with no runs of 4 or more spaces"
          })
          .describe(
            "Shell command that prints the absolute path of the plugin directory on stdout (exactly one line) and exits 0. It must leave a complete plugin in that directory before exiting; the directory is copied into the plugin cache, so the printed path may change between runs (it is re-resolved on every install and update, and once per session in the background). Runs through the platform shell (sh on macOS/Linux, cmd.exe on Windows) from the user's home directory with Claude Code's subprocess environment."
          ),
        timeout: v()
          .int()
          .positive()
          .max(Ft)
          .optional()
          .describe("Seconds to wait for the command before giving up (default: 60)"),
        mode: B(["copy", "link"])
          .optional()
          .describe(
            "copy (default): the printed directory is copied into the plugin cache and content-hashed, so it may be deleted afterwards. link: the cache entry links to the printed directory " +
              "in place (no copy, no size limit; macOS/Linux) \u2014 for large exports; the directory must then stay " +
              "valid while Claude Code runs, and a different printed path is what signals new content."
          )
      }).describe(
        "Plugin directory produced by a locally installed tool (e.g. an IDE that renders its plugin for the currently selected SDK). Claude Code runs the command, copies the directory it prints, and re-runs it in the background at startup to pick up changes."
      ),
      u({ source: A("unsupported"), error: o().optional() }).describe(
        "Placeholder for source types this Claude Code version does not recognize, or a known type whose fields failed validation (then `error` " +
          "holds the reason). Never authored by hand \u2014 PluginMarketplaceSchema rewrites " +
          "unparseable sources to this so the entry remains in marketplace.plugins (detectDelistedPlugins must not see it as removed). Install attempts fail at cachePlugin with an actionable message."
      )
    ])
  ),
  Co = p(() =>
    u({
      name: ye().describe("Plugin name as it appears in the target repository"),
      source: vn().describe(
        "Where to fetch the plugin from. Must be a remote source \u2014 relative " +
          "paths have no marketplace repository to resolve against. Under allowManagedPermissionRulesOnly, a settings marketplace keeps its plugins' allowed-tools only when every npm entry here pins a `registry` on a bare package name; unpinned, the package resolves through the member's own npm config, and a non-bare spelling (an `npm:` alias, a `name@range`, a URL or git spec) packs as an " +
          "exotic spec the pin does not bind \u2014 either way the marketplace " +
          "vouches no tool grants."
      ),
      description: o().optional(),
      version: o().optional(),
      strict: M().optional(),
      headers: me(o(), o())
        .optional()
        .describe("HTTP headers sent when downloading this entry's `archive` source."),
      headersHelper: Fe()
        .optional()
        .describe(
          "Command that prints a JSON object of HTTP headers for downloading this entry's `archive` source. Runs only when a user explicitly installs or updates this plugin. Unlike a catalog entry, an entry written here does not need `strict: false`: it is declared in a settings file, which has no manifest fields to inline. A declaration in project settings is not operator-authored, so request-routing and client-identity header names are still filtered there. Use an absolute path."
        )
    })
      .refine((e) => typeof e.source !== "string", {
        message:
          'Plugins in a settings-sourced marketplace must use remote sources (github, git-subdir, npm, url, archive, command). Relative-path sources like "./foo" have no marketplace repository to resolve against.'
      })
      .refine((e) => typeof e.source === "string" || e.source.source !== "unsupported", {
        message:
          "source.source: 'unsupported' is a parse-time placeholder and cannot be authored. Use a remote source (github, git-subdir, npm, url, archive, command)."
      })
  );
function Bot(e) {
  return typeof e === "string" && e.startsWith("./");
}
function Am(e) {
  return e.source === "file" || e.source === "directory";
}
var E3r = p(() =>
    u({
      cli: T(o().max(64))
        .max(10)
        .optional()
        .describe(
          'First command tokens (e.g. ["stripe"]) \u2014 exact match against commands run this session.'
        ),
      hosts: T(o().max(128))
        .max(20)
        .optional()
        .describe(
          'Hostnames (e.g. ["api.stripe.com"]) \u2014 exact, case-insensitive match against ' +
            "hostnames seen in https?:// URLs in bash commands run this session. Bare hostname only: lowercase, no scheme, no port, no path."
        ),
      filesRead: T(o().max(256))
        .max(10)
        .optional()
        .describe(
          'Glob patterns (e.g. ["**/*.tf"]) \u2014 the plugin is relevant when a file Claude has read ' +
            "this session matches any pattern. Matched against read-file paths, forward-slash normalized, case-insensitive."
        ),
      manifestDeps: T(u({ file: o().max(256), pattern: o().max(256) }))
        .max(10)
        .optional()
        .describe(
          "Dependency declared in a package manifest. Each {file, pattern} is a pair of RegExp sources: " +
            "`file` matches the manifest filename (package.json, go.mod, requirements.txt, \u2026); " +
            "`pattern` matches the dependency declaration inside that file. Evaluated against files read this session."
        ),
      cwd: T(o().max(256))
        .max(10)
        .optional()
        .describe(
          'Glob patterns (e.g. ["Engine/Source/Runtime/Renderer/**"]) \u2014 the plugin is relevant when the ' +
            `session's working directory is at or under a directory matching the pattern. Matched against the cwd both relative to the enclosing git repo root and as an absolute path, forward-slash normalized, case-insensitive. A bare directory (no glob characters) means "cwd is at or under this directory". Known at session start, so this signal can surface a suggestion before the first turn.`
        )
    })
  ),
  k3r = p(() =>
    u({
      topic: o()
        .max(64)
        .optional()
        .describe(
          'What the user is working with when this plugin is relevant \u2014 fills "Working with {topic}?". ' +
            'Often the product name (e.g. "Stripe"); use a domain (e.g. "design") when the plugin name does not read naturally as a topic. Defaults to the plugin name with each hyphen-segment capitalized.'
        ),
      signals: E3r().optional().describe("Matchers that determine when the plugin is relevant.")
    })
  ),
  sar = p(() =>
    IZ()
      .partial()
      .extend({
        name: ye().describe("Unique identifier matching the plugin name"),
        source: vn().describe("Where to fetch the plugin from"),
        headers: me(o(), o())
          .optional()
          .describe(
            "Custom HTTP headers for fetching this plugin's archive; overrides the marketplace's"
          ),
        headersHelper: Fe()
          .optional()
          .describe(
            "Command that prints a JSON object of HTTP headers for fetching this plugin's archive (e.g. a short-lived auth token); overrides this entry's `headers` and the marketplace's. Runs only when the user installs or updates this plugin, never during catalog browse. An entry that sets it must be `strict: false` with its manifest inlined here, so consent is informed from the entry alone before the command runs."
          ),
        category: o()
          .optional()
          .describe('Category for organizing plugins (e.g., "productivity", "development")'),
        tags: T(o()).optional().describe("Tags for searchability and discovery"),
        strict: M()
          .optional()
          .default(!0)
          .describe(
            "Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest."
          ),
        relevance: Ia((e) => (H(e) ? e : void 0), k3r().optional()).describe(
          `Declares when this plugin is relevant to the user's work. Consumed by the spinner tip ("Working with {topic}?"), session-start auto-suggest, and marketplace browse ranking.`
        )
      })
  ),
  wo = p(() => u({ name: ye() }));
function Ro(e) {
  let n = sar();
  return e.flatMap((s, r) => {
    let i = n.safeParse(s);
    if (i.success) {
      let l = i.data.source;
      if (typeof l === "object" && l.source === "unsupported" && l.error !== void 0)
        return [{ ...i.data, source: { source: "unsupported" } }];
      return [i.data];
    }
    let a = wo().safeParse(s).data?.name,
      c = i.error.issues.map((l) => `${l.path.join(".")}: ${l.message}`).join(", ");
    if (a) {
      t(`Stubbing unparseable marketplace plugin entry (${a}): ${c}`, { level: "warn" });
      let l = A3r(H(s) ? s.source : void 0)
        ? Eo
        : mQo(s)
          ? void 0
          : (Mo(i.error.issues) ?? T3r(i.error.issues));
      return [{ name: a, source: { source: "unsupported", ...(l && { error: l }) }, strict: !0 }];
    }
    return (
      t(`Dropping unparseable marketplace plugin entry (index ${r}): ${c}`, { level: "warn" }),
      []
    );
  });
}
var Po = new Set(["npm", "url", "github", "git-subdir", "archive", "command", "unsupported"]);
function mQo(e) {
  if (!e || typeof e !== "object") return !1;
  let n = e.source;
  if (!n || typeof n !== "object") return !1;
  let s = n.source;
  return typeof s === "string" && !Po.has(s);
}
function Mo(e) {
  let n = e.find((r) => r.path.length === 1 && r.path[0] === "source");
  if (!n || n.code !== "invalid_union") return;
  let s = n.errors.find(
    (r) =>
      !r.some((i) => i.path.length === 0 || (i.code === "invalid_value" && i.path[0] === "source"))
  );
  if (!s || s.length === 0) return;
  return T3r(s.map((r) => ({ ...r, path: ["source", ...r.path] })));
}
var Do = /^[A-Za-z0-9_$.-]{1,40}$/;
function p4e(e) {
  return Do.test(e) ? e : "<key>";
}
var Io = 3,
  To = 160;
function T3r(e) {
  let n = e.slice(0, Io).map((r) => {
      let i = r.path
          .map(String)
          .map((c) => p4e(c))
          .join("."),
        a =
          r.code === "unrecognized_keys"
            ? `Unrecognized ${r.keys.length === 1 ? "field" : "fields"}: ${r.keys.map(p4e).join(", ")}`
            : Mt(r.message, To);
      return i ? `${i}: ${a}` : a;
    }),
    s = e.length - n.length;
  return s > 0 ? `${n.join(", ")} (+${s} more)` : n.join(", ");
}
var Ao = /^[A-Za-z0-9][-A-Za-z0-9._]*$/,
  Eo =
    'Bare source names resolve under metadata.pluginRoot, which this marketplace does not set (or sets to a path outside the marketplace root). Use a "./relative/path" source, or set metadata.pluginRoot to allow bare names.';
function A3r(e) {
  return typeof e === "string" && Ao.test(e) && !e.includes("..");
}
function gQo(e) {
  if (typeof e !== "string" || e === "" || e.startsWith("/") || e.includes("\\") || e.includes(":"))
    return;
  let n = e.replace(/^\.\//, "").replace(/\/+$/, "");
  if (n === "" || n === ".") return ".";
  if (n.split("/").some((s) => s === "" || s === "." || s === "..")) return;
  return n;
}
function hQo(e, n) {
  if (n === void 0 || !H(e) || !A3r(e.source)) return e;
  let s = n === "." ? `./${e.source}` : `./${n}/${e.source}`;
  return { ...e, source: s };
}
function Yqt(e) {
  if (!H(e) || !Array.isArray(e.plugins)) return e;
  let n = H(e.metadata) ? gQo(e.metadata.pluginRoot) : void 0;
  if (n === void 0) return e;
  return { ...e, plugins: e.plugins.map((s) => hQo(s, n)) };
}
var m4e = p(() =>
    u({
      $schema: o()
        .optional()
        .describe("JSON Schema reference for editor autocomplete/validation; ignored at load time"),
      name: un(f4e),
      version: o().optional().describe("Marketplace manifest version"),
      description: o().optional().describe("Human-readable description of this marketplace"),
      owner: We().describe("Marketplace maintainer or curator information"),
      plugins: T(oe())
        .transform(Ro)
        .describe("Collection of available plugins in this marketplace"),
      forceRemoveDeletedPlugins: M()
        .optional()
        .describe(
          "When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users"
        ),
      metadata: u({
        pluginRoot: o()
          .optional()
          .describe(
            'Base directory for bare plugin source names, relative to the marketplace root (e.g. "./plugins" resolves "source": "formatter" as ./plugins/formatter). Sources that already start with "./" are unaffected.'
          ),
        version: o().optional().describe("Marketplace version"),
        description: o().optional().describe("Marketplace description")
      })
        .optional()
        .describe("Optional marketplace metadata"),
      allowCrossMarketplaceDependenciesOn: T(o())
        .optional()
        .describe(
          "Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies \u2014 no transitive trust."
        ),
      renames: me(o(), o().nullable())
        .optional()
        .catch(void 0)
        .describe(
          "Append-only map of old plugin name \u2192 current name (or null when removed). The loader follows this on plugin-not-found and migrates user settings to the new name."
        )
    })
  ),
  qvn = p(() => Ia(Yqt, m4e()));
function C3r(e) {
  return f4e(e) && !Ge(e);
}
function yQo(e) {
  if (e !== void 0 && C3r(e)) {
    let n = e.toLowerCase();
    return un((s) => (s.toLowerCase() === n ? Ge(s) : f4e(s)));
  }
  return m4e().shape.name;
}
function R3r(e) {
  if (e !== void 0 && C3r(e)) return Ia(Yqt, m4e().extend({ name: yQo(e) }));
  return qvn();
}
var je = "[A-Za-z0-9][-A-Za-z0-9._]*",
  Uo = new RegExp(`^${je}$`);
function K$(e) {
  return Uo.test(e);
}
var zo = new RegExp(`^${je}@${je}$`),
  Xt = `@${$y}`;
function Ybe(e) {
  return e.endsWith(Xt) && rxe(e.slice(0, -Xt.length));
}
var eP = p(() =>
    o().refine((e) => zo.test(e) || Ybe(e), "Plugin ID must be in format: plugin@marketplace")
  ),
  Xqt = new RegExp(`[@:\\s/\\\\${Hb}]`, "u"),
  Gdi = new RegExp(`[${Hb}]`, "u"),
  jot = /[\p{Cc}\u200E\u200F\u202A-\u202E\u2066-\u2069]/u,
  Oo = /^[A-Za-z0-9][-A-Za-z0-9._]*(@[A-Za-z0-9][-A-Za-z0-9._]*)?(@\^[^@]*)?$/,
  Ko = p(() =>
    $e([
      o()
        .regex(Oo, "Dependency must be a plugin name, optionally qualified with @marketplace")
        .transform((e) => e.replace(/@\^[^@]*$/, "")),
      u({
        name: o()
          .min(1)
          .regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/),
        marketplace: o()
          .min(1)
          .regex(/^[A-Za-z0-9][-A-Za-z0-9._]*$/)
          .optional()
      })
        .loose()
        .transform((e) => (e.marketplace ? `${e.name}@${e.marketplace}` : e.name))
    ])
  ),
  Lo = p(() =>
    u({
      version: o().describe("Currently installed version"),
      installedAt: o().describe("ISO 8601 timestamp of installation"),
      lastUpdated: o().optional().describe("ISO 8601 timestamp of last update"),
      installPath: o().describe("Absolute path to the installed plugin directory"),
      gitCommitSha: o()
        .optional()
        .describe("Git commit SHA for git-based plugins (for version tracking)"),
      resolvedVersion: o()
        .optional()
        .describe(
          "Tag-derived semver this install resolved to (when fetched via a version constraint). Used by verifyAndDemote in preference to manifest.version, since the upstream may have forgotten to bump plugin.json."
        ),
      auto: M()
        .optional()
        .describe(
          "True when this plugin was pulled in as a dependency rather than installed explicitly. Auto-installed plugins are eligible for removal by the orphan sweep when nothing depends on them. Absent = manual (preserves pre-flag installs)."
        ),
      ...Jt(),
      ...Qt(),
      ...tn(),
      ...en()
    })
  ),
  Yvn = p(() =>
    u({
      version: A(1).describe("Schema version 1"),
      plugins: me(eP(), Lo()).describe("Map of plugin IDs to their installation metadata")
    })
  ),
  Ho = p(() => B(["managed", "user", "project", "local"])),
  xn = p(() =>
    u({
      scope: Ho().describe("Installation scope"),
      projectPath: o().optional().describe("Project path (required for project/local scopes)"),
      installPath: o().describe("Absolute path to the versioned plugin directory"),
      version: o().optional().describe("Currently installed version"),
      installedAt: o().optional().describe("ISO 8601 timestamp of installation"),
      lastUpdated: o().optional().describe("ISO 8601 timestamp of last update"),
      gitCommitSha: o().optional().describe("Git commit SHA for git-based plugins"),
      resolvedVersion: o().optional().describe("Tag-derived semver this install resolved to"),
      auto: M()
        .optional()
        .describe("True when pulled in as a dependency. Eligible for orphan sweep."),
      ...Jt(),
      ...Qt(),
      ...tn(),
      ...en()
    })
  ),
  Pi = p(() =>
    u({
      version: A(2).describe("Schema version 2"),
      plugins: me(eP(), T(xn())).describe("Map of plugin IDs to arrays of installation entries")
    })
  ),
  No = p(() => u({ version: A(2), plugins: me(o(), oe()) }));
function iar(e) {
  No().parse(e);
  let n = {},
    s = Object.create(null),
    r = Object.create(null),
    i,
    a,
    c = e.plugins;
  for (let [l, d] of Object.entries(c)) {
    let g = eP().safeParse(l);
    if (!g.success) {
      ((s[l] = d), (i ??= g.error));
      continue;
    }
    let m = T(xn()).safeParse(d);
    if (m.success) n[l] = m.data;
    else ((r[l] = d), (i ??= m.error), (a ??= m.error));
  }
  return {
    file: { version: 2, plugins: n },
    setAside: s,
    keptRaw: r,
    firstError: i,
    firstUnparseableError: a
  };
}
var jo = p(() =>
    u({
      source: bn().describe("Where to fetch the marketplace from"),
      installLocation: o().describe("Local cache path where marketplace manifest is stored"),
      lastUpdated: o().describe("ISO 8601 timestamp of last marketplace refresh"),
      autoUpdate: M()
        .optional()
        .describe(
          "Whether to automatically update this marketplace and its installed plugins on startup"
        )
    })
  ),
  VTt = p(() => me(o(), jo())),
  vfe = "claudeai-",
  qTt = ["org", "default", "account"];
export {
  Ud,
  Ddi,
  U0,
  zbe,
  e3r,
  t3r,
  Wg,
  Lvn,
  Nvn,
  n3r,
  WJo,
  Hdi,
  GJo,
  zJo,
  KJo,
  $ot,
  aq,
  r3r,
  $vn,
  VJo,
  Zx,
  LTt,
  Ldi,
  o3r,
  Fot,
  jqt,
  NTt,
  qJo,
  YJo,
  XJo,
  s3r,
  Fvn,
  JJo,
  yfe,
  QJo,
  RZ,
  $Tt,
  jh,
  _fe,
  wi,
  FTt,
  i3r,
  UTt,
  ZJo,
  Uvn,
  Ase,
  d4e,
  bfe,
  Zt,
  ear,
  eQo,
  Wqt,
  Ndi,
  $di,
  Sfe,
  lq,
  Fdi,
  a3r,
  wfe,
  nxe,
  q9,
  Udi,
  Gqt,
  tQo,
  tar,
  xZ,
  dq,
  l3r,
  Kbe,
  kv,
  Vbe,
  nQo,
  zqt,
  qbe,
  Kqt,
  BTt,
  jTt,
  d3r,
  WTt,
  c4e,
  Bvn,
  u4e,
  c3r,
  PZ,
  jvn,
  d$e,
  rQo,
  u3r,
  f3r,
  oQo,
  f4e,
  r6,
  GTt,
  sQo,
  $y,
  iQo,
  Bdi,
  SM,
  p3r,
  c$e,
  aQo,
  nar,
  lQo,
  m3r,
  Wvn,
  dQo,
  rxe,
  zTt,
  cQo,
  Vqt,
  g3r,
  B0,
  qqt,
  IZ,
  jdi,
  Gvn,
  zvn,
  h3r,
  y3r,
  uQo,
  rar,
  Kvn,
  fQo,
  Vvn,
  _3r,
  Wdi,
  KTt,
  Uot,
  b3r,
  pQo,
  S3r,
  oar,
  w3r,
  v3r,
  Bot,
  Am,
  E3r,
  k3r,
  sar,
  mQo,
  p4e,
  T3r,
  A3r,
  gQo,
  hQo,
  Yqt,
  m4e,
  qvn,
  C3r,
  yQo,
  R3r,
  K$,
  Ybe,
  eP,
  Xqt,
  Gdi,
  jot,
  Yvn,
  iar,
  VTt,
  vfe,
  qTt
};

//# sourceMappingURL=chunk-d54avynm.js.map
