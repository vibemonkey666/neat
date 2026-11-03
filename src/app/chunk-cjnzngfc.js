// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { mSe, $fe, kst, rW } from "./chunk-m25ae09s.js";
import { tYe } from "./chunk-f9x3sh8a.js";
import { bYt, O9r, D9r, SYt, yYe, H9r, bYe, L9r, npe } from "./chunk-wrtp8qz8.js";
import { zxe, RC, hie } from "./chunk-h5gbmqm1.js";
var l = L9r(Object.getPrototypeOf, Object),
  gkn = l;
var u = (function () {
    try {
      var e = hie(Object, "defineProperty");
      return (e({}, "", {}), e);
    } catch (r) {}
  })(),
  mkn = u;
function m(e, r, n) {
  if (r == "__proto__" && mkn)
    mkn(e, r, { configurable: !0, enumerable: !0, value: n, writable: !0 });
  else e[r] = n;
}
var Ffe = m;
var R = Object.prototype,
  S = R.hasOwnProperty;
function G(e, r, n) {
  var o = e[r];
  if (!(S.call(e, r) && zxe(o, n)) || (n === void 0 && !(r in e))) Ffe(e, r, n);
}
var Ast = G;
function N(e) {
  var r = [];
  if (e != null) for (var n in Object(e)) r.push(n);
  return r;
}
var c = N;
var A = Object.prototype,
  P = A.hasOwnProperty;
function g(e) {
  if (!RC(e)) return c(e);
  var r = bYe(e),
    n = [];
  for (var o in e) if (!(o == "constructor" && (r || !P.call(e, o)))) n.push(o);
  return n;
}
var I = g;
function C(e) {
  return npe(e) ? H9r(e, !0) : I(e);
}
var K4e = C;
var L = Object.getOwnPropertySymbols,
  y = !L
    ? D9r
    : function (e) {
        var r = [];
        while (e) (bYt(r, SYt(e)), (e = gkn(e)));
        return r;
      },
  D8r = y;
function v(e) {
  return O9r(e, K4e, D8r);
}
var hkn = v;
function x(e, r, n, o) {
  if (!RC(e)) return e;
  r = mSe(r, e);
  var i = -1,
    s = r.length,
    a = s - 1,
    t = e;
  while (t != null && ++i < s) {
    var _ = $fe(r[i]),
      O = n;
    if (_ === "__proto__" || _ === "constructor" || _ === "prototype") return e;
    if (i != a) {
      var f = t[_];
      if (((O = o ? o(f, _, t) : void 0), O === void 0)) O = RC(f) ? f : yYe(r[i + 1]) ? [] : {};
    }
    (Ast(t, _, O), (t = t[_]));
  }
  return e;
}
var T = x;
function w(e, r, n) {
  var o = -1,
    i = r.length,
    s = {};
  while (++o < i) {
    var a = r[o],
      t = kst(e, a);
    if (n(t, a)) T(s, mSe(a, e), t);
  }
  return s;
}
var M8r = w;
function D(e, r) {
  if (e == null) return {};
  var n = tYe(hkn(e), function (o) {
    return [o];
  });
  return (
    (r = rW(r)),
    M8r(e, n, function (o, i) {
      return r(o, i[0]);
    })
  );
}
var Ko = D;
var _n = Object.freeze(["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor="]),
  q_ = "--ignore-submodules=dirty";
var oX = Object.freeze([
    "--no-optional-locks",
    "status",
    "--porcelain",
    "--untracked-files=normal",
    "--ignore-submodules=dirty"
  ]),
  elr = Object.freeze({ GIT_LFS_SKIP_SMUDGE: "1" }),
  bxe = "/",
  d = [
    "'alias.remote-none=version'",
    "'alias.remote-none.command=version'",
    "'alias.remote-/.command=version'",
    "'fetch.bundleURI='",
    "'help.autocorrect=0'"
  ],
  p = d.join(" "),
  M = Object.freeze({
    GIT_ALLOW_PROTOCOL: "/",
    GIT_CONFIG_PARAMETERS: p,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...elr
  }),
  b = Object.freeze({ LC_ALL: "C", LANGUAGE: "C" }),
  F = Object.freeze({ GIT_SSH_COMMAND: "false" }),
  tlr = 2000,
  IAt = Object.freeze([
    ..._n,
    "-c",
    "safe.bareRepository=explicit",
    "-c",
    "protocol.file.allow=never"
  ]),
  Cst = [
    "GIT_DIR",
    "GIT_WORK_TREE",
    "GIT_COMMON_DIR",
    "GIT_INDEX_FILE",
    "GIT_CEILING_DIRECTORIES",
    "GIT_DISCOVERY_ACROSS_FILESYSTEM",
    "GIT_OBJECT_DIRECTORY",
    "GIT_ALTERNATE_OBJECT_DIRECTORIES",
    "GIT_SHALLOW_FILE",
    "GIT_NAMESPACE",
    "GIT_IMPLICIT_WORK_TREE",
    "GIT_REFERENCE_BACKEND"
  ],
  QZ = [
    ...Cst,
    "GIT_CONFIG_COUNT",
    "GIT_CONFIG_PARAMETERS",
    "GIT_CONFIG_GLOBAL",
    "GIT_CONFIG_SYSTEM",
    "GIT_CONFIG"
  ],
  h = /^GIT_CONFIG_(KEY|VALUE)_\d+$/,
  Rst = new RegExp(h.source, "i"),
  nlr = /^GIT_(?:SSL|PROXY)_/i,
  K = new Set(QZ);
function Rs(e, r = {}) {
  let n = e?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return B(E({ ...M, ...(r.userLocale !== !0 && b), ...(!n && F) }, e, r));
}
function rlr(e, r = {}) {
  let n = E({ GIT_NO_REPLACE_OBJECTS: "1" }, e, r);
  for (let o of U) if (!(o in n)) n[o] = void 0;
  return n;
}
var U = ["GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH"];
function E(e, r, { base: n = process.env, repository: o }) {
  let i = Y({
      ...e,
      ...(o !== void 0 && { GIT_DIR: o.gitDir, GIT_COMMON_DIR: o.commonDir }),
      ...(o !== void 0 &&
        (o.workTree !== null ? { GIT_WORK_TREE: o.workTree } : { GIT_IMPLICIT_WORK_TREE: "0" })),
      ...r
    }),
    s = {};
  for (let t of QZ) s[t] = void 0;
  let a = new Set(Object.keys(i).map((t) => t.toUpperCase()));
  for (let t of Object.keys(n)) {
    let _ = t.toUpperCase();
    if (K.has(_) || Rst.test(t) || (a.has(_) && !(t in i))) s[t] = void 0;
  }
  return { ...n, ...s, ...i };
}
function Y(e) {
  let r = e.GIT_ALLOW_PROTOCOL;
  if (r === void 0) return { ...e };
  let n = r.split(":").filter((t) => t !== "/");
  if (n.find((t) => !/^[A-Za-z0-9-]*$/.test(t)) !== void 0)
    throw Error('GIT_ALLOW_PROTOCOL may list only transport names made of letters, digits and "-"');
  let i = [
      ...new Set([
        ...d,
        ...n.flatMap((t) => [`'alias.remote-${t}=version'`, `'alias.remote-${t}.command=version'`])
      ])
    ],
    s = e.GIT_CONFIG_PARAMETERS;
  return {
    ...e,
    GIT_CONFIG_PARAMETERS: [...(s === void 0 || s === "" || s === p ? [] : [s]), ...i].join(" ")
  };
}
function B(e) {
  let o = (t) => t,
    i = (t) => t.startsWith("/"),
    s = (t) => {
      if (t === void 0) return;
      let _ = t
        .split(":")
        .map(o)
        .filter((O) => O !== "" && i(O));
      return _.length > 0 ? _.join(":") : "/dev/null";
    },
    a = Object.keys(e).filter((t) => t === "PATH");
  return { ...e, ...Object.fromEntries(a.map((t) => [t, s(e[t])])) };
}
export {
  mkn,
  Ffe,
  Ast,
  M8r,
  gkn,
  D8r,
  K4e,
  hkn,
  Ko,
  _n,
  q_,
  oX,
  elr,
  bxe,
  tlr,
  IAt,
  Cst,
  QZ,
  Rst,
  nlr,
  Rs,
  rlr
};

//# sourceMappingURL=chunk-cjnzngfc.js.map
