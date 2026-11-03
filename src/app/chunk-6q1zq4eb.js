// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L } from "./chunk-wrtp8qz8.js";
import { Gu } from "./chunk-h5gbmqm1.js";
import { wSe } from "./chunk-xc1j8sdj.js";
import { jo } from "./chunk-4kxznmzw.js";
import { di } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { os } from "./chunk-jtb5bzvb.js";
import { Cvn, t2 } from "./chunk-63a6mqbs.js";
import { Be, At } from "./chunk-at88wjsn.js";
import { y$, VP, HY, mi, q1, LY, JHe, Lre, ZL, QHe, l7, het } from "./chunk-gv3j9e36.js";
import { Ll } from "./chunk-wany0nxw.js";
import { BOe, QDs, NN, wmt, Dl } from "./chunk-j0tbz6ra.js";
import { vo, oet, set, l1o, d1o, iV } from "./chunk-d5zj5299.js";
import { Hze, Lze, _1t, b1t, qL } from "./chunk-1ww4jg8j.js";
import { d$ } from "./chunk-frrn501g.js";
import { jMt } from "./chunk-eeak1s5f.js";
import { gr } from "./chunk-z2vz1f06.js";
import { wo } from "./chunk-rnxkk435.js";
var Z = "tengu_violin_lining";
function WPe() {
  return gr(Z, { safe: !0 });
}
async function _9t(e) {
  if (!WPe()) return q1(e);
  let n = await HY(e);
  if (n === VP && e.trim() !== "")
    return { kind: "too-complex", reason: "the parser gave up on the command" };
  return n === null ? { kind: "simple", commands: [], bareAssignmentNames: [] } : LY(e, n);
}
import { homedir as k } from "os";
import { basename as X, isAbsolute as P, join as Y, resolve as D } from "path";
var q = 16,
  F = 64,
  J = "tengu_nifty_pine";
function v(e) {
  return het(e) || e === "PWD" || e === "OLDPWD";
}
function B(e) {
  return !/^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i.test(e) && v(e);
}
var Q = new Set(["export", "declare", "typeset", "readonly", "local", "unset"]),
  ee = new Set([...Lre, ...JHe, ...ZL, ...QHe, ...l7, "xargs", "parallel"]),
  H = [_1t, Hze, Lze],
  ne = "tengu_toasty_hammock";
function W(e) {
  return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}
async function b9t(e, n, t, r) {
  let s = t.behavior === "ask" && Dl(t.decisionReason, t2) !== void 0;
  if (e.name === Be) {
    if (typeof n.command !== "string") return "uncertain";
    let o = await se(n.command, r, s);
    return o === "none" && t.behavior === "ask" && Dl(t.decisionReason, Cvn) !== void 0
      ? "uncertain"
      : o;
  }
  if (e.name !== At) return "none";
  if (s) return "settings";
  return t.behavior === "ask" && b(t) ? "uncertain" : "none";
}
async function S9t(e, n, t, r = !1) {
  if ((e.name !== Be && e.name !== At) || !Kee(n, "file") || !(await _hr(e, n, t))) return !1;
  let s = n.command;
  return !(r && e.name === Be && typeof s === "string" && (await ooo(s)));
}
async function _hr(e, n, t) {
  try {
    let r = n.command;
    return e.name === At && typeof r === "string" ? !jMt(r, await BOe(r)) : !e.isReadOnly(n, t);
  } catch (r) {
    return (
      l(
        Error("a served shell line's read-only check threw; the line counts as not read-only", {
          cause: r
        })
      ),
      !0
    );
  }
}
function roo() {
  return {
    paths: [...b1t(), ...d$().flatMap((e) => H.map((n) => Y(e, n)))],
    globalConfigNames: wSe.map((e) => `.claude${e}.json`)
  };
}
var C = {
    simctl: ["launch", "terminate", "uninstall", "get_app_container", "appinfo", "privacy"],
    open: ["-b"],
    defaults: ["read", "read-type", "write", "delete"]
  },
  G = String.raw`(?:[a-z][a-z0-9_-]*\.){2,}claude`,
  te = new RegExp(`^${G}$`, "i"),
  re = /[|`\\(]|\$[{_]|\$BASH|<<|\bfunction\b/;
async function ooo(e) {
  if (re.test(e)) return !1;
  try {
    let n = await _9t(e);
    if (n.kind !== "simple" || n.bareAssignmentNames.some(v)) return !1;
    let t = [],
      r = e.replace(
        new RegExp(String.raw`(^|\s)(${G})(?=$|[\s;&])`, "gi"),
        (i, d, c) => (t.push(c), `${d}APPID`)
      ),
      s = [],
      o = 0;
    for (let { argv: i, envVars: d, redirects: c } of n.commands) {
      if (
        d.some((g) => v(g.name)) ||
        c.some(
          ({ op: g, target: _ }) => _ !== "/dev/null" && !(g === ">&" && (_ === "1" || _ === "2"))
        )
      )
        return !1;
      let f = i[0],
        m =
          f === "simctl"
            ? 0
            : (f === "xcrun" || f === "/usr/bin/xcrun") && i[1] === "simctl"
              ? 1
              : void 0,
        S = m === void 0 ? void 0 : i[m + 1],
        E = m !== void 0 && S !== void 0 && C.simctl.includes(S) ? m + 1 : void 0,
        p =
          (f === "defaults" || f === "/usr/bin/defaults") &&
          i[1] !== void 0 &&
          C.defaults.includes(i[1]),
        a = f === "open" || f === "/usr/bin/open";
      if (m === void 0 && !p && !a && f !== void 0 && f !== "sleep") return !1;
      for (let [g, _] of i.entries()) {
        if (!te.test(_)) continue;
        s.push(_);
        let y = i[g - 1];
        if ((E !== void 0 && g > E) || (p && g === 2) || (a && y !== void 0 && C.open.includes(y)))
          o += 1;
      }
    }
    return (
      t.length > 0 &&
      o === s.length &&
      t.toSorted().join(" ") === s.toSorted().join(" ") &&
      !Kee({ command: r }, "file")
    );
  } catch (n) {
    return (
      l(
        Error(
          "reading a served shell line's app identifiers threw; the line counts as naming settings",
          { cause: n }
        )
      ),
      !1
    );
  }
}
function Kee(e, n) {
  let t = e.command;
  if (typeof t !== "string") return !0;
  let { files: r, dirs: s } = set(),
    o = n !== "file_or_folder",
    i = n === "own_file",
    d = s.flatMap((a) => [a, os(a)]),
    c = roo(),
    f = o ? c.paths : [],
    m = [
      ...(i ? [] : [...l1o(), "managed-settings"]),
      ...(o ? c.globalConfigNames : [...oet, ...d]),
      ...[...(i ? [] : r), ...f].flatMap((a) => [a, os(a)])
    ],
    S = d1o(),
    E = o ? [...(i ? [] : oet), ...H] : r.map((a) => X(a)).filter((a) => a.includes("."));
  return ["", "/"].some((a) => {
    let g = A(t, a);
    if (m.some((h) => g.includes(A(h, a)))) return !0;
    let _ = S.some((h) => new RegExp(`${di(A(h, a))}(?![a-z0-9_])`).test(g)),
      y = E.some((h) => new RegExp(`(?<![a-z0-9_])${di(A(h, a))}(?![a-z0-9_])`).test(g));
    if (!o) return _ || y;
    return (
      (y && (_ || d.some((h) => g.includes(A(h, a))))) ||
      (i ? [] : [...S, ...d]).some((h) =>
        new RegExp(
          `${di(A(h, a))}(?![a-z0-9_-])(?=((?:/+(?:\\.(?![a-z0-9_.-]))?)*))\\1(?!\\.?[a-z0-9_-])`
        ).test(g)
      )
    );
  });
}
function A(e, n) {
  return vo(e.normalize("NFKC")).replace(/['"`]/g, "").replaceAll("\\", n);
}
function b(e) {
  let n = e.decisionReason;
  if (n?.type === "subcommandResults") {
    for (let t of n.reasons.values()) if (t.behavior === "ask" && b(t)) return !0;
    return !1;
  }
  if (n === void 0) return e.blockedPath === void 0;
  if (n.type === "sandboxOverride") return n.replaces !== void 0 && b(n.replaces);
  if (n.type === "safetyCheck" && !t2(n)) return Cvn(n) || e.blockedPath === void 0;
  return n.type === "other";
}
async function se(e, n, t = !1) {
  let r = await _9t(e);
  if (r.kind !== "simple") return "uncertain";
  let s = r.bareAssignmentNames.some(v),
    o = [n],
    i = !0,
    d = !1,
    c = !1,
    f = !0,
    m = 0,
    S = r.hasLoop !== !1 && gr(ne, { safe: !0 });
  for (let E of r.commands) {
    let { simple: p, wrapperWords: a, pathSpelled: g, doubt: _ } = V(E);
    if (_ || ie(p) || d) s = !0;
    let y = U(p, o);
    if (y !== void 0 && S) s = !0;
    if (y === "unknown") i = !1;
    else if (y !== void 0) {
      if (((o = y), p.argv.slice(1).some(K))) i = !1;
    }
    if (y !== void 0 && !j(p)) ((i = !1), (d = !0));
    let h = QDs(p);
    if (h.writesUnseen) s = !0;
    if (!h.known && y === void 0 && p.argv.length > 0) f = !1;
    let R = (u) => (P(u) || u.startsWith("~") ? [n] : o),
      T = [
        ...a,
        ...(h.known && !g ? [] : p.argv.slice(1)),
        ...p.envVars.map((u) => u.value)
      ].flatMap((u) => z(u));
    if (!h.known && y === void 0 && p.argv.length > 0 && o.some((u) => w9t(".", u))) s = !0;
    if (!i && T.some((u) => u !== "" && !P(u) && !u.startsWith("~") && w9t(u, D(n, ".claude"))))
      s = !0;
    for (let u of [...T, ...h.landings]) if (u !== "" && R(u).some((w) => w9t(u, w))) s = !0;
    for (let u of h.written) {
      if ((m++, m > F)) return "uncertain";
      if (mi(u) || (R(u) === o && !i)) s = !0;
      for (let w of R(u)) {
        let x = I(u, w);
        if (x === "settings") return "settings";
        if (x === "uncertain") s = !0;
      }
    }
    for (let u of h.copySources) {
      if ((m++, m > F)) return "uncertain";
      if (R(u).some((w) => I(u, w) === "settings")) c = !0;
      else if (R(u).some((w) => ae(u, w))) s = !0;
    }
  }
  if (s || (t && !(c && f))) return "uncertain";
  return "none";
}
var N = new Set(["HOME", "CDPATH", "PWD", "OLDPWD"]),
  oe = /^-[^-]*[CD]|^--chd/;
async function Nps(e, n) {
  let t = await _9t(e);
  if (t.kind !== "simple" || t.hasLoop !== !1) return "unparsed";
  let r = t.bareAssignmentNames.some((d) => N.has(d)),
    s = [n],
    o = !1,
    i = [];
  for (let d of t.commands) {
    if (
      d.envVars.some((p) => N.has(p.name)) ||
      d.argv.some((p) => p.includes("=") && N.has(p.split(/\+?=/, 1)[0] ?? ""))
    )
      r = !0;
    let { simple: c, wrapperWords: f } = V(d),
      m = o,
      S = U(c, s);
    if (S === "unknown" || (S !== void 0 && (r || c.argv.slice(1).some(K)))) o = !0;
    if (S !== void 0 && !j(c)) o = !0;
    if (S !== void 0 && S !== "unknown") s = S;
    let E = f.some((p) => oe.test(p));
    for (let p of [
      { list: d.argv, directories: E ? [] : s, mayBeElsewhere: m || E },
      {
        list: [
          ...d.envVars.map((a) => a.value),
          ...d.redirects.filter((a) => a.op !== "<<" && a.op !== "<<<").map((a) => a.target)
        ],
        directories: s,
        mayBeElsewhere: m
      }
    ])
      for (let a of p.list)
        for (let g of z(a))
          i.push({ word: g, directories: p.directories, mayBeElsewhere: p.mayBeElsewhere });
  }
  return i;
}
function z(e) {
  return [
    e,
    ...(e.includes("=") ? [e.slice(e.indexOf("=") + 1)] : []),
    ...(/^-[^-]./.test(e) ? Array.from({ length: e.length - 2 }, (n, t) => e.slice(t + 2)) : [])
  ];
}
function V(e) {
  let [n, ...t] = e.argv;
  if (n === void 0) return { simple: e, wrapperWords: [], pathSpelled: !1, doubt: !1 };
  let r = [y$(n), ...t],
    s = NN(wmt(r)),
    o = r.length - s.length,
    i = o >= 0 && s.every((m, S) => m === r[o + S]),
    d = i ? r.slice(0, o) : r,
    c = i && o === 0 ? n : s[0],
    f = c === void 0 ? void 0 : y$(c);
  return {
    simple: i && o === 0 && n === r[0] ? e : { ...e, argv: s, text: wo(s) },
    wrapperWords: d,
    pathSpelled: n !== r[0] || (c !== void 0 && c !== f) || d.some((m) => m !== y$(m)),
    doubt:
      !i ||
      !W(n) ||
      [...d, ...(c === void 0 ? [] : [c])].some(mi) ||
      d.some(
        (m) =>
          (m.startsWith("-") && m !== "-" && m !== "--") ||
          B(/^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(m)?.[1] ?? "")
      ) ||
      (c !== void 0 && f !== void 0 && (!W(c) || f.startsWith("-") || ee.has(f)))
  };
}
function ie(e) {
  let [n, ...t] = e.argv;
  return (
    e.envVars.some((r) => B(r.name)) ||
    (n !== void 0 &&
      Q.has(n) &&
      t.some((r) => {
        let s = r.split(/\+?=/, 1)[0] ?? "";
        return mi(s) || v(s);
      }))
  );
}
function I(e, n) {
  let t = qL(e, n, Ll(), "write");
  if (t.allowed) return "none";
  if (t.decisionReason?.type === "safetyCheck") {
    if (t2(t.decisionReason)) return "settings";
    return Cvn(t.decisionReason) ? "uncertain" : "none";
  }
  if (t.decisionReason?.type !== "other") return "none";
  return w9t(e, n) ? "settings" : "uncertain";
}
function ae(e, n) {
  let t = qL(e, n, Ll(), "write");
  return !t.allowed && t.decisionReason?.type === "safetyCheck" && Cvn(t.decisionReason);
}
function w9t(e, n) {
  let t = D(n, Gu(O() === "windows" ? e.replaceAll("\\", "/") : e)),
    r = iV(t, [t]);
  return !r.safe && t2(r);
}
function U(e, n) {
  let [t, ...r] = e.argv;
  if (t === "popd") return "unknown";
  if (t !== "cd" && t !== "chdir" && t !== "pushd") return;
  let s = [],
    o = !1;
  for (let f of r) {
    if (!o) {
      if (f === "--") {
        o = !0;
        continue;
      }
      if (f.startsWith("-") && f !== "-") continue;
      o = !0;
    }
    s.push(f);
  }
  let i = s[0];
  if (i === void 0) return t === "pushd" ? "unknown" : M(n, [k()]);
  if (
    s.length > 1 ||
    i === "-" ||
    (t === "pushd" && /^[+-]\d+$/.test(i)) ||
    mi(i) ||
    I(i, n[0] ?? k()) === "uncertain"
  )
    return "unknown";
  let d = Gu(i),
    c = P(d) ? [d] : n.map((f) => D(f, d));
  return M(n, [...c, ...c.flatMap(le)]);
}
function j(e) {
  let [n, ...t] = e.argv;
  if (n !== "cd" && n !== "chdir" && n !== "pushd") return !0;
  if (!gr(J, { safe: !0 })) return !0;
  let r = [],
    s = !1;
  for (let o of t) {
    if (!s) {
      if (o === "--") {
        s = !0;
        continue;
      }
      if (o.startsWith("-") && o !== "-") {
        if (!/^-[qsLP]+$/.test(o)) return !1;
        continue;
      }
      s = !0;
    }
    r.push(o);
  }
  return r.length < 2 && (r[0] === void 0 || !/^[+-]\d+$/.test(r[0]));
}
function K(e) {
  let n = !1;
  for (let t of e.split(/[\\/]/))
    if (t === "..") {
      if (n) return !0;
    } else if (t !== "" && t !== ".") n = !0;
  return !1;
}
function le(e) {
  try {
    return jo(e).filter((n) => n !== e);
  } catch {
    return [];
  }
}
function M(e, n) {
  let t = L([...e, ...n]);
  return t.length > q ? "unknown" : t;
}
export { WPe, _9t, b9t, S9t, _hr, roo, ooo, Kee, Nps, w9t };

//# sourceMappingURL=chunk-6q1zq4eb.js.map
