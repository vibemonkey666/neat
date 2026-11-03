// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { L, ke } from "./chunk-wrtp8qz8.js";
import { R } from "./chunk-fs43t96t.js";
import { _ } from "./chunk-4kxznmzw.js";
import { I, Or, Ft } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { aRe, Nn } from "./chunk-ajtyjx88.js";
import { Pr } from "./chunk-rf7g1m78.js";
import { w } from "./chunk-7m7t89vx.js";
import { he } from "./chunk-95k4nfdh.js";
import { a } from "./chunk-4cgvah10.js";
import { gg } from "./chunk-5rw2zfa0.js";
import { le } from "./chunk-vw9e882a.js";
import { Tv, sEn, Bn, dn } from "./chunk-9z5ybxhe.js";
import { Nr } from "./chunk-928ws1pg.js";
import { Y9 } from "./chunk-8r2m7vfp.js";
import { os } from "./chunk-jtb5bzvb.js";
import { A$e, Oi } from "./chunk-dc0nzty2.js";
import { vu, gt, LH, _B, Var } from "./chunk-wr0p4ndg.js";
import { fn, rt, s, n, ts, Ta, Ys } from "./chunk-h56pfqh7.js";
import { pY } from "./chunk-6h7ejyet.js";
import { K, Gn, qo } from "./chunk-61vn6n52.js";
import { Te } from "./chunk-pbpv20s6.js";
import { To } from "./chunk-1xqkrp78.js";
import { Jn, pXn } from "./chunk-d5zj5299.js";
import { RA, kMt } from "./chunk-25j20xpc.js";
import { Dl } from "./chunk-j0tbz6ra.js";
import { PIo, pan } from "./chunk-4h2t9wzn.js";
import { V } from "./chunk-j32s98r9.js";
import { ka } from "./chunk-rv488r12.js";
import { an } from "./chunk-kk8f9f8q.js";
import { xs, Je } from "./chunk-fgf47p3n.js";
import { Ee } from "./chunk-xzcese97.js";
import { hE } from "./chunk-bf8qkzmg.js";
import { Ba } from "./chunk-7y9rpkcp.js";
import { gxt } from "./chunk-2vbdj34c.js";
import { mE } from "./chunk-mnrc938a.js";
import { tmr } from "./chunk-0zs22p6a.js";
import { a6e } from "./chunk-14t3txgj.js";
import { PW } from "./chunk-jwhvhjej.js";
import { Tl } from "./chunk-ga7dw895.js";
import { Wd } from "./chunk-358y3whe.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { tv } from "./chunk-tnj7z4dw.js";
import { J2 } from "./chunk-20f936eh.js";
import { vbo } from "./chunk-b2bgm8b9.js";
import { de, P, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { x7, nc, Iw, ah, C$, Rtt, _Ce, CKe, Phn, ya, US, jzr, mz, _a } from "./chunk-fcym4pv0.js";
import { qe } from "./chunk-0np0053t.js";
import { cqe, Tsi, Asi, h6o } from "./chunk-bwbrda44.js";
import { $u } from "./chunk-0bqrj5ah.js";
import { cSe } from "./chunk-2bsye2b3.js";
import { S, vn } from "./chunk-a2y39866.js";
function hn(t) {
  return pXn(t);
}
function ki(t) {
  let o = [];
  for (let i of t) {
    if (i === null || typeof i !== "object") continue;
    if (i.type !== "addRules") {
      o.push(i);
      continue;
    }
    if (!Array.isArray(i.rules)) continue;
    let c = i.rules.filter(
      (f) =>
        f !== null &&
        typeof f === "object" &&
        typeof f.toolName === "string" &&
        (f.ruleContent === void 0 || typeof f.ruleContent === "string") &&
        (f.ruleContent === void 0
          ? nt(f.toolName)
          : hn({ toolName: f.toolName, ruleContent: f.ruleContent }))
    );
    if (c.length > 0) o.push({ ...i, rules: c });
  }
  return o;
}
var DFe = 8,
  iPe = 64,
  _at = 160,
  Ri = new Set(["localSettings", "session"]);
function go(t, o, i, c = Ri) {
  let f = ki(t).filter((d) => {
      if (!o.has(d.type)) return !1;
      if (
        (d.type === "addRules" || d.type === "replaceRules" || d.type === "removeRules") &&
        d.behavior !== "allow"
      )
        return !1;
      return d.destination !== void 0 && c.has(d.destination);
    }),
    u = [];
  for (let d of f) {
    if (d.type !== "addRules") {
      if (d.type === "addDirectories") {
        if (!Array.isArray(d.directories)) continue;
        let m = d.directories.filter(
          (x) => typeof x === "string" && x.trim() !== "" && le(x) > 0 && _Ce(x)
        );
        if (m.length === 0) continue;
        u.push({ ...d, directories: m });
        continue;
      }
      u.push(d);
      continue;
    }
    if (d.rules === void 0) continue;
    let b = d.rules.filter((m) =>
        _Ce(
          dn({
            toolName: m.toolName,
            ...(m.ruleContent !== void 0 && { ruleContent: m.ruleContent })
          })
        )
      ),
      k = i === void 0 ? b : b.filter(i);
    if (k.length > 0) u.push({ ...d, rules: k });
  }
  return u;
}
var cfr = new Set(["addRules", "addDirectories"]),
  yls = new Set(["addRules"]);
function wi(t) {
  return t.trim() !== t || t === "" || x7(t) || Oi(t) !== t || /[\t\n]/.test(t) || le(t) === 0;
}
function nt(t) {
  if (t === cqe) return !1;
  if (wi(t)) return !1;
  let o = Bn(dn({ toolName: t }));
  if (o.toolName !== t || o.ruleContent !== void 0) return !1;
  if (Tv(t)) return !1;
  let i = Nr(t);
  if (i !== null && !i.toolName) return !1;
  return !0;
}
function ho(t) {
  if (typeof t !== "string" || t.trim() === "" || le(t) === 0 || !_Ce(t)) return null;
  return Asi(t);
}
function yn(t) {
  switch (t.length) {
    case 0:
      return "";
    case 1:
      return e(n, { bold: !0, children: t[0] });
    case 2:
      return r(n, {
        children: [e(n, { bold: !0, children: t[0] }), " and ", e(n, { bold: !0, children: t[1] })]
      });
    default:
      return r(n, {
        children: [
          e(n, { bold: !0, children: t.slice(0, -1).join(", ") }),
          ", and",
          " ",
          e(n, { bold: !0, children: t.slice(-1)[0] })
        ]
      });
  }
}
function u5e(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return e(n, { bold: !0, children: t[0] });
  if (t.length === 2)
    return r(n, {
      children: [e(n, { bold: !0, children: t[0] }), " and ", e(n, { bold: !0, children: t[1] })]
    });
  return r(n, {
    children: [
      t
        .slice(0, -1)
        .map((o, i) => r(n, { children: [e(n, { bold: !0, children: o }), ",", " "] }, i)),
      "and ",
      e(n, { bold: !0, children: t.at(-1) })
    ]
  });
}
function v6t(t) {
  return sEn((t?.replace(/\/\*\*$/, "") || "").replace(/^\.\//, "").replace(/^\/\//, "/"));
}
function bn(t) {
  if (!t) return "";
  return t.endsWith(":*") || t.endsWith(" *") ? t.slice(0, -2) : t;
}
function E6t(t, o, i) {
  if (t.toolName === o) {
    let c = bn(t.ruleContent);
    if (!c) return !1;
    return Boolean(i ? i(c) : c);
  }
  if (t.toolName === qe) return Boolean(v6t(t.ruleContent));
  return !1;
}
function Pie(t) {
  return t !== void 0 && Oi(t) === t && !/[\t\n\u2028\u2029]/.test(t) && !x7(t) ? Tsi(t) : void 0;
}
function mF(t) {
  return jzr(t);
}
function ufr(t, o, i, c) {
  if (!Array.isArray(t)) return null;
  if (t.length > iPe) return null;
  if (t.some((g) => g === null || typeof g !== "object")) return null;
  let f = t.filter((g) => g.type === "addRules").flatMap((g) => g.rules || []),
    u = t
      .filter((g) => g.type === "addDirectories")
      .flatMap((g) => (Array.isArray(g.directories) ? g.directories : []));
  if (
    f.some(
      (g) =>
        g === null ||
        typeof g !== "object" ||
        typeof g.toolName !== "string" ||
        (g.ruleContent !== void 0 && typeof g.ruleContent !== "string")
    )
  )
    return null;
  if (f.length + u.length > DFe) return null;
  let d = f.filter((g) => g.toolName === qe),
    b = f.filter((g) => g.toolName === o);
  if (u.some((g) => typeof g !== "string" || g.trim() === "" || le(g) === 0 || !_Ce(g)))
    return null;
  let k = L(u),
    m = L(d.flatMap((g) => (g.ruleContent && v6t(g.ruleContent) ? g.ruleContent : [])));
  if (m.some((g) => !_Ce(g))) return null;
  let x = L(
    b.flatMap((g) => {
      if (!g.ruleContent) return [];
      return bn(g.ruleContent) ? [g.ruleContent] : [];
    })
  );
  if (x.some((g) => !_Ce(g))) return null;
  let M = CKe(x, (g) => {
      let E = bn(g) || g;
      return mF(i ? i(E) : E);
    }),
    N = CKe([...m, ...k], (g) => (m.includes(g) ? mF(v6t(g)) : mF(g))),
    h = N.slice(0, m.length),
    D = N.slice(m.length);
  if (le([...M, ...h, ...D].join(" and ")) > _at) return null;
  let O = k.length > 0,
    U = h.length > 0,
    F = M.length > 0;
  if (U && !O && !F)
    return r(n, { children: ["Yes, allow reading from ", u5e(h), " from this project"] });
  if (O && !U && !F)
    return r(n, { children: ["Yes, and always allow access to ", u5e(D), " from this project"] });
  if (F && !O && !U)
    return r(n, {
      children: [
        "Yes, and don't ask again for ",
        yn(M),
        " commands",
        " ",
        c === void 0
          ? r(Q, { children: ["in", " ", e(n, { bold: !0, children: Jn(ke()) })] })
          : r(Q, { children: ["on ", e(n, { bold: !0, children: c })] })
      ]
    });
  if ((O || U) && !F) {
    let g = [...D, ...h];
    return r(n, { children: ["Yes, and always allow access to ", u5e(g), " from this project"] });
  }
  if ((O || U) && F) {
    let g = [...D, ...h];
    if (g.length === 1 && M.length === 1)
      return r(n, {
        children: ["Yes, and allow access to ", u5e(g), " and", " ", yn(M), " commands"]
      });
    return r(n, { children: ["Yes, and allow ", u5e(g), " access and", " ", yn(M), " commands"] });
  }
  return null;
}
var xe = Symbol("ConsentRow mint token");
class fe {
  #e = !0;
  node;
  applies;
  constructor(t, o, i) {
    if (t !== xe) throw Error("ConsentRow may only be constructed by the consentRows factories");
    ((this.node = o), (this.applies = i), Object.freeze(this));
  }
  static is(t) {
    return typeof t === "object" && t !== null && #e in t;
  }
}
var bk = fe.is,
  _ls = p(() => $u(bk));
function ot(t) {
  if (t.length > iPe) return null;
  let o = [];
  for (let i of t) {
    let c;
    try {
      c = pY().safeParse(i);
    } catch {
      return null;
    }
    if (!c.success) return null;
    o.push(c.data);
  }
  return h6o(o);
}
function eL(t, o) {
  if (!Array.isArray(t)) return null;
  let i;
  try {
    i = t.length;
  } catch {
    return null;
  }
  if (typeof i !== "number" || !Number.isSafeInteger(i) || i < 0 || i > iPe) return null;
  let c = 0,
    f = [];
  for (let m = 0; m < i; m++)
    try {
      let x = t[m],
        M = x !== null && typeof x === "object" ? { ...x } : x,
        N = !1;
      if (M !== null && typeof M === "object") {
        let h = M;
        for (let D of ["rules", "directories"]) {
          let T = h[D];
          if (!Array.isArray(T)) continue;
          let O = T.length;
          if (typeof O !== "number" || !Number.isSafeInteger(O) || O < 0) {
            N = !0;
            break;
          }
          if (((c += O), c > iPe * DFe)) return null;
          let U = [];
          for (let F = 0; F < O; F++) U.push(T[F]);
          h[D] = U;
        }
      }
      if (N) continue;
      f.push(M);
    } catch {}
  let u = [];
  for (let m of f) {
    let x;
    try {
      x = pY().safeParse(m);
    } catch {
      continue;
    }
    if (x.success) u.push(x.data);
  }
  if (u.length === 0) return null;
  let d = go(u, o.displayedTypes, o.labelPredicate, o.displayedDestinations);
  if (d.length === 0) return null;
  let b = h6o(d),
    k = o.renderLabel(b);
  if (k == null || typeof k === "boolean" || k === "") return null;
  return new fe(xe, k, b);
}
var xi = {
  default: "default (ask each time)",
  acceptEdits: "accept edits (auto-approve file edits and common file commands)",
  auto: "auto (no routine prompts; a reviewer model screens actions)",
  dontAsk: "don't ask (auto-deny anything that would prompt)",
  plan: "plan mode (research and propose changes without making them)",
  bypassPermissions: "BYPASS PERMISSIONS (no further prompts)"
};
function aPe(t, o) {
  if (t === "bypassPermissions" && o?.isBypassPermissionsModeAvailable === !1) return null;
  let i = ot([{ type: "setMode", destination: "session", mode: t }]);
  if (i === null) throw Error("setModeRow: schema rejected a designed setMode update");
  if (o?.labelVariant === "plan-keep-context") {
    let c =
      t === "acceptEdits"
        ? "Yes, auto-accept edits"
        : t === "default"
          ? "Yes, manually approve edits"
          : null;
    if (c !== null) return new fe(xe, e(n, { children: c }), i);
  }
  return new fe(
    xe,
    r(n, {
      children: ["Yes, and switch to ", e(n, { bold: !0, children: xi[t] }), " for this session"]
    }),
    i
  );
}
function GRn(t) {
  if (!Array.isArray(t)) return null;
  let o;
  try {
    o = t.length;
  } catch {
    return null;
  }
  if (typeof o !== "number" || !Number.isSafeInteger(o) || o < 0 || o > iPe) return null;
  let i = [];
  for (let d = 0; d < o; d++)
    try {
      let b = t[d],
        k = ho(b);
      if (k !== null) i.push(k);
    } catch {}
  let c = L(i);
  if (c.length === 0) return null;
  if (c.length > DFe) return null;
  let f = mz(c, (d) => jzr(d));
  if (le(f.join(", ")) > _at) return null;
  let u = ot([{ type: "addDirectories", destination: "session", directories: c }]);
  if (u === null) return null;
  return new fe(
    xe,
    r(n, {
      children: [
        "Yes, and always allow access to ",
        e(n, { bold: !0, children: f.join(", ") }),
        " for this session"
      ]
    }),
    u
  );
}
function ffr(t, o, i) {
  if (typeof t !== "string" || Pie(t) !== t) return null;
  if (typeof o !== "string") return null;
  let c = o.trim();
  if (c === "" || Pie(c) !== c) return null;
  if (c === "*") {
    if (!nt(i)) return null;
    let u = ot([
      {
        type: "addRules",
        rules: [{ toolName: i }],
        behavior: "allow",
        destination: "localSettings"
      }
    ]);
    if (u === null) return null;
    return new fe(xe, `Yes, and don\u2019t ask again for any ${i} command`, u);
  }
  if (!nt(i) || !hn({ toolName: i, ruleContent: c })) return null;
  let f = ot([
    {
      type: "addRules",
      rules: [{ toolName: i, ruleContent: c }],
      behavior: "allow",
      destination: "localSettings"
    }
  ]);
  if (f === null) return null;
  return new fe(xe, `Yes, and don\u2019t ask again for: ${c}`, f);
}
var tZr = {
    workflow: "Yes, and switch to auto mode",
    "exit-plan-resume": "Yes, and use auto mode"
  },
  Si = (() => {
    let t = ot([]);
    if (t === null) throw Error("NO_DISPLAYED_UPDATES: empty intake rejected");
    return t;
  })();
function zRn(t) {
  return new fe(xe, tZr[t], Si);
}
function pfr(t, ...o) {
  let i = [t, ...o];
  for (let u of i)
    if (!bk(u)) throw Error("combineRows accepts only constructor-produced ConsentRows");
  let c = i.flatMap((u) => [...u.applies]);
  if (c.length > iPe) throw Error("combineRows: combined updates exceed the display intake cap");
  let f = ot(c);
  if (f === null) throw Error("combineRows: schema rejected already-minted updates");
  return new fe(
    xe,
    e(n, { children: i.map((u, d) => r(n, { children: [d > 0 ? "; " : "", u.node] }, d)) }),
    f
  );
}
function Hi(t) {
  let c = w(4),
    { multiline: o, children: i } = t;
  if (rt()) {
    let f;
    if (c[0] !== i)
      ((f = e(s, { "aria-role": "blockquote", children: i })), (c[0] = i), (c[1] = f));
    else f = c[1];
    return f;
  }
  if (!o) {
    return i;
  }
  let f;
  if (c[2] !== i)
    ((f = e(s, {
      borderStyle: "single",
      borderLeft: !0,
      borderRight: !1,
      borderTop: !1,
      borderBottom: !1,
      borderDimColor: !0,
      paddingLeft: 1,
      children: i
    })),
      (c[2] = i),
      (c[3] = f));
  else f = c[3];
  return f;
}
j();
j();
function _i(X) {
  return X + 1;
}
function Lt(t) {
  let u = w(18),
    { permissionResult: o } = t,
    i =
      o?.behavior === "ask"
        ? (o.denialLimitFallback?.deadlineEpochMs ?? o.autoDenyWindow?.deadlineEpochMs)
        : void 0,
    c = rt(),
    f = fn(),
    d;
  if (u[0] !== f) ((d = f.now()), (u[0] = f), (u[1] = d));
  else d = u[1];
  let b;
  if (u[2] === S) ((b = Date.now()), (u[2] = b));
  else b = u[2];
  let k;
  if (u[3] !== d) ((k = { clockAt: d, epochAt: b }), (u[3] = d), (u[4] = k));
  else k = u[4];
  let m = k,
    x;
  if (u[5] !== m.clockAt || u[6] !== m.epochAt || u[7] !== f)
    ((x = () => m.epochAt + (f.now() - m.clockAt)),
      (u[5] = m.clockAt),
      (u[6] = m.epochAt),
      (u[7] = f),
      (u[8] = x));
  else x = u[8];
  let M = x,
    [, N] = y(0),
    h;
  if (u[9] === S) ((h = () => N(_i)), (u[9] = h));
  else h = u[9];
  if ((Ta(h, i !== void 0 && !c ? 1000 : null), i === void 0)) {
    return null;
  }
  if (c) {
    let D = Math.max(0, i - M());
    let T;
    if (u[10] !== D) {
      let O = Math.round(D / 60000);
      let U = Math.max(1, Math.round(D / 1000));
      T = D >= 60000 ? `about ${O} ${I(O, "minute")}` : `about ${U} ${I(U, "second")}`;
      ((u[10] = D), (u[11] = T));
    } else T = u[11];
    let F = T;
    const g = `${gg} Claude Code will automatically deny this request in ${F}, to avoid blocking progress on an unattended session`;
    let E;
    if (u[12] !== g)
      ((E = e(s, { marginBottom: 1, children: e(n, { color: "warning", children: g }) })),
        (u[12] = g),
        (u[13] = E));
    else E = u[13];
    return E;
  }
  let Y = Math.max(0, i - M()),
    re = Math.floor(Y / 60000),
    B = Math.floor((Y % 60000) / 1000);
  const T = String(B);
  let g;
  if (u[14] !== T) ((g = T.padStart(2, "0")), (u[14] = T), (u[15] = g));
  else g = u[15];
  let H = `${re}:${g}`;
  const E = `${gg} Claude Code will automatically deny this request in ${H}, to avoid blocking progress on an unattended session`;
  let q;
  if (u[16] !== E)
    ((q = e(s, { marginBottom: 1, children: e(n, { color: "warning", children: E }) })),
      (u[16] = E),
      (u[17] = q));
  else q = u[17];
  return q;
}
function $i(Ze) {
  return Ze.toolPermissionContext.mode;
}
function Yi(uo, Qe) {
  return e(Hi, { multiline: Iw(uo), children: Qe });
}
var k6t = 7;
function Ni(t) {
  if (t?.startsWith("plugin")) return "plugin hooks.json";
  if (t?.startsWith("skill")) return "SKILL.md";
  return "settings.json";
}
function jt(t) {
  if (t?.type === "rule" && t.rule.ruleBehavior === "ask") return t.rule;
  if (t?.type === "subcommandResults") {
    for (let o of t.reasons.values())
      if (o.behavior === "ask") {
        let i = jt(o.decisionReason);
        if (i) return i;
      }
  }
  return;
}
function Se(t, o, i) {
  if (!t) return null;
  let c = (f) => ya(f).text;
  if (t.type === "classifier") {
    if (t.classifier === "auto-mode")
      return {
        reasonString: `Auto mode classifier requires confirmation for this ${o}.
${c(t.reason)}`,
        configString: void 0,
        themeColor: "error"
      };
    return {
      reasonString: `Classifier ${he.bold(c(t.classifier))} requires confirmation for this ${o}.
${c(t.reason)}`,
      configString: void 0
    };
  }
  if (t.type === "subcommandResults") {
    let f = jt(t);
    if (f) return Se({ type: "rule", rule: f }, o, i);
    for (let u of t.reasons.values())
      if (u.behavior === "ask" || u.behavior === "passthrough") {
        let d = Se(u.decisionReason, o, i);
        if (d) return d;
      }
  }
  switch (t.type) {
    case "rule": {
      let f = he.bold(c(dn(t.rule.ruleValue)));
      if (i === "auto" && t.rule.ruleBehavior === "ask" && t.rule.source !== "policySettings")
        return {
          reasonString: `Ask rule ${f} overrides auto mode for this ${o}.`,
          configString: "/permissions to let auto mode decide"
        };
      return {
        reasonString: `Permission rule ${f} requires confirmation for this ${o}.`,
        configString: t.rule.source === "policySettings" ? void 0 : "/permissions to update rules"
      };
    }
    case "hook": {
      let f = t.reason
          ? `:
${c(t.reason)}`
          : ".",
        u = t.hookSource ? ` ${he.dim(`[${c(t.hookSource)}]`)}` : "";
      return {
        reasonString: `Hook ${he.bold(c(t.hookName))} requires confirmation for this ${o}${f}${u}`,
        configString: `${Ni(t.hookSource)} to update hooks`
      };
    }
    case "safetyCheck":
    case "other":
      return { reasonString: c(t.reason), configString: void 0 };
    case "workingDir":
      return { reasonString: c(t.reason), configString: "/permissions to update rules" };
    case "sandboxOverride": {
      let f = t.replaces;
      if (f === void 0) return null;
      let u = Se(f.decisionReason, o, i);
      if (u !== null) return { ...u, configString: void 0 };
      return f.message === void 0 ? null : { reasonString: c(f.message), configString: void 0 };
    }
    default:
      return null;
  }
}
function Sk(t) {
  let N = w(30),
    { permissionResult: o, toolType: i, rowBudget: c, rowColumns: f } = t,
    u = K($i),
    d = o?.behavior === "ask" ? o.denialLimitFallback?.disclosure : void 0,
    b = Se(o?.decisionReason, i, u),
    k = d !== void 0 && d !== o?.decisionReason ? Se(d, i, u) : null,
    m = Te().columns,
    x = d !== void 0 || c !== void 0 || o?.decisionReason?.type === "sandboxOverride",
    M = f !== void 0 ? Math.max(1, f) : Math.max(20, m - 8),
    h;
  if (N[0] !== x || N[1] !== M || N[2] !== f)
    ((h = (D, T) => {
      if (!x) {
        return D;
      }
      let O = T;
      let F = vu(D, M, { trim: !0, hard: !0 })
        .split(
          `
`
        )
        .map((U) => gt(U, M));
      if (F.length <= O) {
        return F.join(`
`);
      }
      let g = Math.max(1, O - 1);
      let E = `\u2026 (+${F.length - g} more lines)`;
      return [...F.slice(0, g), f === void 0 ? E : gt(E, M)].join(`
`);
    }),
      (N[0] = x),
      (N[1] = M),
      (N[2] = f),
      (N[3] = h));
  else h = N[3];
  let Y = h,
    re = o?.behavior === "ask" ? o.matchedAskRule : void 0,
    B =
      re !== void 0 && jt(o?.decisionReason) === void 0
        ? Se({ type: "rule", rule: re }, i, u)
        : null,
    H;
  if (N[4] !== x || N[5] !== M)
    ((H = (q) => {
      if (q === void 0 || !x) {
        return 0;
      }
      return (
        Ft(
          vu(q, M, { trim: !0, hard: !0 }),
          `
`
        ) + 1
      );
    }),
      (N[4] = x),
      (N[5] = M),
      (N[6] = H));
  else H = N[6];
  let X = H,
    v =
      k && c !== void 0
        ? [
            gt(Or(k.reasonString), M),
            ...k.reasonString
              .split(
                `
`
              )
              .slice(1)
          ].join(`
`)
        : k?.reasonString,
    G = { consent: X(b?.reasonString), streak: X(v), askRule: X(B?.reasonString) },
    W;
  if (N[7] !== c)
    ((W =
      c === void 0 ? { consent: 4, streak: 4, askRule: 4 } : { consent: 2, streak: 3, askRule: 2 }),
      (N[7] = c),
      (N[8] = W));
  else W = N[8];
  let ie = W,
    se = Math.min(12, Math.max(k6t, c ?? 12)),
    z = {
      consent: Math.min(G.consent, ie.consent),
      streak: Math.min(G.streak, ie.streak),
      askRule: Math.min(G.askRule, ie.askRule)
    },
    Z = se - (z.consent + z.streak + z.askRule);
  for (const ye of c === void 0
    ? ["consent", "streak", "askRule"]
    : ["streak", "consent", "askRule"]) {
    if (Z <= 0) {
      break;
    }
    let De = Math.min(G[ye] - z[ye], Z);
    ((z[ye] = z[ye] + De), (Z = Z - De));
  }
  let be = b !== null && b !== void 0 ? Y(b.reasonString, z.consent) : void 0,
    ae = v !== void 0 ? Y(v, z.streak) : void 0,
    J = B ? Y(B.reasonString, z.askRule) : void 0,
    Xe;
  if (N[9] !== o) ((Xe = e(Lt, { permissionResult: o })), (N[9] = o), (N[10] = Xe));
  else Xe = N[10];
  let Re = Xe;
  if (!b && !B && !k) {
    return Re;
  }
  let Ae =
      b?.themeColor ?? (o?.decisionReason?.type === "hook" && u === "auto" ? "warning" : void 0),
    st = Yi,
    ne;
  if (N[11] !== be || N[12] !== b || N[13] !== Ae)
    ((ne =
      b &&
      st(
        be ?? b.reasonString,
        Ae
          ? e(n, { color: Ae, children: be ?? b.reasonString })
          : e(n, { children: e(ts, { children: be ?? b.reasonString }) })
      )),
      (N[11] = be),
      (N[12] = b),
      (N[13] = Ae),
      (N[14] = ne));
  else ne = N[14];
  let ze;
  if (N[15] !== b)
    ((ze = b?.configString && e(n, { dimColor: !0, children: b.configString })),
      (N[15] = b),
      (N[16] = ze));
  else ze = N[16];
  let Dt;
  if (N[17] !== B || N[18] !== J || N[19] !== b?.configString)
    ((Dt =
      B &&
      r(Q, {
        children: [
          st(J ?? B.reasonString, e(n, { children: e(ts, { children: J ?? B.reasonString }) })),
          B.configString &&
            B.configString !== b?.configString &&
            e(n, { dimColor: !0, children: B.configString })
        ]
      })),
      (N[17] = B),
      (N[18] = J),
      (N[19] = b?.configString),
      (N[20] = Dt));
  else Dt = N[20];
  let Et;
  if (N[21] !== ae || N[22] !== k)
    ((Et =
      k &&
      st(
        ae ?? k.reasonString,
        k.themeColor
          ? e(n, { color: k.themeColor, children: ae ?? k.reasonString })
          : e(n, { children: e(ts, { children: ae ?? k.reasonString }) })
      )),
      (N[21] = ae),
      (N[22] = k),
      (N[23] = Et));
  else Et = N[23];
  let Ie;
  if (N[24] !== Re || N[25] !== ne || N[26] !== ze || N[27] !== Dt || N[28] !== Et)
    ((Ie = r(s, { marginBottom: 1, flexDirection: "column", children: [ne, ze, Dt, Et, Re] })),
      (N[24] = Re),
      (N[25] = ne),
      (N[26] = ze),
      (N[27] = Dt),
      (N[28] = Et),
      (N[29] = Ie));
  else Ie = N[29];
  return Ie;
}
j();
function Qi(T) {
  return T.toolPermissionContext;
}
var KRn = "\xB7 workflows run best with it on";
function T6t(t) {
  let f = w(10),
    o = K(Qi),
    i = Gn(),
    { addNotification: c } = To(),
    u;
  if (f[0] !== o)
    ((u = (o.mode === "default" || o.mode === "acceptEdits") && J2(o)), (f[0] = o), (f[1] = u));
  else u = f[1];
  let d = u,
    b = t?.type === "workflow-agent" && d,
    k;
  if (f[2] !== c || f[3] !== i || f[4] !== o)
    ((k = (m) => {
      let x = m === void 0 ? "workflow_permission_prompt" : m;
      if (
        !RA(
          "auto",
          o,
          (M) =>
            i((N) => {
              let h = M(N.toolPermissionContext);
              if (h === N.toolPermissionContext) {
                return N;
              }
              return { ...N, toolPermissionContext: h };
            }),
          x
        ).ok
      ) {
        return (
          c({
            key: "workflow-auto-mode-unavailable",
            kind: "warning",
            text: kMt(),
            color: "warning",
            priority: "high"
          }),
          !1
        );
      }
      return !0;
    }),
      (f[2] = c),
      (f[3] = i),
      (f[4] = o),
      (f[5] = k));
  else k = f[5];
  let D = k,
    m;
  if (f[6] !== d || f[7] !== D || f[8] !== b)
    ((m = { offered: b, canOfferAutoMode: d, enableAutoMode: D }),
      (f[6] = d),
      (f[7] = D),
      (f[8] = b),
      (f[9] = m));
  else m = f[9];
  return m;
}
j();
function bs(ne) {
  return { ...ne, attribution: { ...ne.attribution, escapeCount: ne.attribution.escapeCount + 1 } };
}
function A6t(t) {
  return t === "yes" ? "accept" : t === "no" ? "reject" : void 0;
}
function lPe(t) {
  let Y = w(35),
    { feedbackTypeOf: o, toolName: i, isMcp: c, initialFocusedType: f } = t,
    u = Gn(),
    d = rt(),
    [b, k] = y(""),
    [m, x] = y(""),
    [M, N] = y(!1),
    [h, D] = y(!1),
    [T, O] = y(!1),
    [U, F] = y(!1),
    [g, E] = y(void 0),
    re;
  if (Y[0] !== o || Y[1] !== g || Y[2] !== f)
    ((re = g === void 0 ? f : o(g)), (Y[0] = o), (Y[1] = g), (Y[2] = f), (Y[3] = re));
  else re = Y[3];
  let B = re,
    H;
  if (Y[4] !== M || Y[5] !== o || Y[6] !== c || Y[7] !== h || Y[8] !== i)
    ((H = (q) => {
      let X = o(q);
      let v = { toolName: i, isMcp: c };
      if (X === "accept") {
        if (M) (N(!1), a("tengu_accept_feedback_mode_collapsed", v));
        else (N(!0), O(!0), a("tengu_accept_feedback_mode_entered", v));
      } else if (X === "reject") {
        if (h) (D(!1), a("tengu_reject_feedback_mode_collapsed", v));
        else (D(!0), F(!0), a("tengu_reject_feedback_mode_entered", v));
      }
    }),
      (Y[4] = M),
      (Y[5] = o),
      (Y[6] = c),
      (Y[7] = h),
      (Y[8] = i),
      (Y[9] = H));
  else H = Y[9];
  let G = H,
    W;
  if (Y[10] !== b || Y[11] !== M || Y[12] !== o || Y[13] !== m || Y[14] !== h)
    ((W = (ie) => {
      let se = o(ie);
      if (se !== "accept" && M && !b.trim()) N(!1);
      if (se !== "reject" && h && !m.trim()) D(!1);
      E(ie);
    }),
      (Y[10] = b),
      (Y[11] = M),
      (Y[12] = o),
      (Y[13] = m),
      (Y[14] = h),
      (Y[15] = W));
  else W = Y[15];
  let z = W,
    Z;
  if (Y[16] !== T || Y[17] !== c || Y[18] !== U || Y[19] !== i)
    ((Z = (ye, De) => {
      a(ye === "accept" ? "tengu_accept_submitted" : "tengu_reject_submitted", {
        toolName: i,
        isMcp: c,
        has_instructions: !!De,
        instructions_length: De?.length ?? 0,
        entered_feedback_mode: ye === "accept" ? T : U
      });
    }),
      (Y[16] = T),
      (Y[17] = c),
      (Y[18] = U),
      (Y[19] = i),
      (Y[20] = Z));
  else Z = Y[20];
  let be = Z,
    ae;
  if (Y[21] !== u)
    ((ae = () => {
      (a("tengu_permission_request_escape", {}), u(bs));
    }),
      (Y[21] = u),
      (Y[22] = ae));
  else ae = Y[22];
  let J = ae,
    Xe = !d && ((B === "accept" && !M) || (B === "reject" && !h)),
    Re;
  if (Y[23] !== Xe)
    ((Re = Xe && e(V, { chord: "tab", action: "amend" })), (Y[23] = Xe), (Y[24] = Re));
  else Re = Y[24];
  let Ae = Re,
    st;
  if (
    Y[25] !== b ||
    Y[26] !== M ||
    Y[27] !== z ||
    Y[28] !== G ||
    Y[29] !== Ae ||
    Y[30] !== J ||
    Y[31] !== be ||
    Y[32] !== m ||
    Y[33] !== h
  )
    ((st = {
      acceptFeedback: b,
      rejectFeedback: m,
      setAcceptFeedback: k,
      setRejectFeedback: x,
      acceptInputMode: M,
      rejectInputMode: h,
      handleInputModeToggle: G,
      handleFocus: z,
      logSubmitted: be,
      logEscape: J,
      hintNode: Ae
    }),
      (Y[25] = b),
      (Y[26] = M),
      (Y[27] = z),
      (Y[28] = G),
      (Y[29] = Ae),
      (Y[30] = J),
      (Y[31] = be),
      (Y[32] = m),
      (Y[33] = h),
      (Y[34] = st));
  else st = Y[34];
  return st;
}
function ws(m) {
  return m.notifications.current?.key === "kill-agents-confirm";
}
var Xo = { keyCase: "lower" };
function HFe(t) {
  let u = w(6),
    o = ka("chat:killAgents", "Chat", "ctrl+x ctrl+k"),
    i = qo(ws);
  if (
    !((t?.type === "subagent" || t?.type === "workflow-agent") && t.stoppableByKillAgents === !0) ||
    o === ""
  ) {
    return null;
  }
  const f = i === !0 ? "again to stop background agents" : "twice to stop background agents";
  let d;
  if (u[0] !== o || u[1] !== f)
    ((d = e(V, { chord: o, action: f, format: Xo, terse: !0 })),
      (u[0] = o),
      (u[1] = f),
      (u[2] = d));
  else d = u[2];
  let b = d,
    k;
  if (u[3] !== i || u[4] !== b)
    ((k = i === !0 ? e(n, { color: "text", children: b }) : b), (u[3] = i), (u[4] = b), (u[5] = k));
  else k = u[5];
  return k;
}
j();
var wr = { accept: "tell Claude what to do next", reject: "tell Claude what to do differently" };
function Mee({
  options: t,
  onSelect: o,
  onCancel: i,
  question: c = "Do you want to proceed?",
  toolAnalyticsContext: f,
  defaultFocusValue: u,
  hideIndexes: d,
  requestSource: b
}) {
  let [k, m] = y(u);
  P(() => {
    m(void 0);
  }, []);
  let x = de((v) => t.find((G) => G.value === v)?.feedbackConfig?.type, [t]),
    {
      acceptFeedback: M,
      rejectFeedback: N,
      setAcceptFeedback: h,
      setRejectFeedback: D,
      acceptInputMode: T,
      rejectInputMode: O,
      handleInputModeToggle: U,
      handleFocus: F,
      logSubmitted: g,
      logEscape: E,
      hintNode: Y
    } = lPe({ feedbackTypeOf: x, toolName: f?.toolName, isMcp: f?.isMcp ?? !1 }),
    re = HFe(b),
    B = ee(
      () =>
        t.map((v) => {
          let { value: G, label: W, feedbackConfig: ie } = v;
          if (!ie) return { label: W, value: G, description: v.description };
          let { type: se, placeholder: z } = ie,
            Z = se === "accept" ? T : O,
            ye = se === "accept" ? h : D,
            De = wr[se];
          if (Z)
            return {
              type: "input",
              label: W,
              value: G,
              placeholder: z ?? De,
              onChange: ye,
              allowEmptySubmitToCancel: !0
            };
          return { label: W, value: G, description: v.description };
        }),
      [t, T, O]
    ),
    H = de(
      (v) => {
        let G = t.find((z) => z.value === v);
        if (!G) return;
        let W = G.feedbackConfig,
          ie,
          se = "";
        if (W) {
          if (((se = (W.type === "accept" ? M : N).trim()), se)) ie = se;
        }
        if (o(v, ie) === !1) return !1;
        if (W) g(W.type, se);
      },
      [t, M, N, o, g]
    ),
    q = ee(() => {
      let v = t.find(
          (W) =>
            (W.feedbackConfig?.type === "accept" && T) || (W.feedbackConfig?.type === "reject" && O)
        ),
        G = {};
      for (let W of t) if (W.keybinding) G[W.keybinding] = () => (v ? U(v.value) : H(W.value));
      return G;
    }, [t, T, O, U, H]);
  an(q, { context: "Confirmation" });
  let X = de(() => {
    if (i?.() === !1) return;
    E();
  }, [i, E]);
  return r(s, {
    flexDirection: "column",
    children: [
      typeof c === "string" ? e(n, { children: c }) : c,
      e(Je, {
        selectedValue: xs,
        options: B,
        defaultFocusValue: k,
        hideIndexes: d,
        inlineDescriptions: !0,
        onChange: H,
        onCancel: X,
        onFocus: F,
        onInputModeToggle: U
      }),
      e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          wrap: re ? "truncate" : void 0,
          children: r(Ee, { children: [e(V, { chord: "escape", action: "cancel" }), Y, re] })
        })
      })
    ]
  });
}
j();
function Qs(t) {
  let { style: G } = t;
  return G === "value";
}
function Js(t) {
  let { style: W } = t;
  return W !== "value";
}
function ea(t, ie) {
  let { text: se, style: z } = t;
  return e(n, { bold: z === "question", children: se }, ie);
}
function ta(t, Z) {
  let { text: ye } = t;
  return e(n, { dimColor: !0, children: ye }, `value-${Z}`);
}
var Ve = 12,
  zt = 60,
  eo = Ve * zt,
  to = 4,
  js =
    /^(?:replacing|source|into|type|artifact)(?: \d+)?: https?:\/\/[^\s/]+\/(?:[^\s/]+\/)*(?:artifact|frame)\/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[A-Za-z0-9_-]{22})\/?$/;
function Bs(t, o) {
  if (le(t) <= o) return t;
  let i = _B(t, Math.floor(o / 2));
  return i + LH(t, o - le(i));
}
function no(t, o) {
  let i = Math.max(1, o),
    c = [
      ...(t.question === void 0 ? [] : [{ text: t.question, style: "question" }]),
      ...t.lines.map((d) => ({ text: d, style: "line" })),
      ...t.values.map((d) => ({ text: d, style: "value" }))
    ],
    f = -1,
    u = c.flatMap(({ text: d, style: b }) => {
      let k = d.replace(/\r\n|[\r\n\u2028\u2029]/g, " "),
        m = b === "value" ? (f += 1) : void 0;
      return b === "value" && !js.test(k)
        ? [{ text: Bs(k, i), style: b, value: m }]
        : vu(b === "value" ? k : d, i, { trim: !0, hard: !0 })
            .split(
              `
`
            )
            .map((x) => ({ text: gt(x, i), style: b, ...(m !== void 0 && { value: m }) }));
    });
  return {
    rows: u,
    gutter:
      t.values.length > 0 ||
      t.lines.length > 0 ||
      u.length > c.length ||
      c.some(({ text: d }) => Iw(d))
  };
}
function Zt(t) {
  let i = w(31),
    { card: o } = t;
  if (o.rows.length === 0) {
    return null;
  }
  let c, f, u, d, b, k, m, x, M, N;
  if (i[0] !== o.gutter || i[1] !== o.rows) {
    let h = o.rows.filter(Qs);
    let D = o.rows.filter(Js);
    let T = o.rows.length <= Ve;
    let O = h;
    if (!T) {
      let U = Ve - 3;
      let F = 0;
      while (F < h.length) {
        let g = h[F].value;
        let E = F;
        while (E < h.length && h[E].value === g) E = E + 1;
        if (E > U) {
          break;
        }
        F = E;
      }
      O = h.slice(0, F);
    }
    d = h.length - O.length;
    let Y = Ve - 1 - O.length - (d > 0 ? 1 : 0);
    let re = T ? D : D.slice(0, Math.max(1, Y));
    let B = D.length - re.length;
    u = s;
    N = "column";
    f = Hi;
    M = o.gutter;
    c = s;
    b = "column";
    k = re.map(ea);
    if (i[12] !== B)
      ((m = B > 0 && r(n, { dimColor: !0, children: ["\u2026 (+", B, " more lines)"] })),
        (i[12] = B),
        (i[13] = m));
    else m = i[13];
    x = O.map(ta);
    ((i[0] = o.gutter),
      (i[1] = o.rows),
      (i[2] = c),
      (i[3] = f),
      (i[4] = u),
      (i[5] = d),
      (i[6] = b),
      (i[7] = k),
      (i[8] = m),
      (i[9] = x),
      (i[10] = M),
      (i[11] = N));
  } else
    ((c = i[2]),
      (f = i[3]),
      (u = i[4]),
      (d = i[5]),
      (b = i[6]),
      (k = i[7]),
      (m = i[8]),
      (x = i[9]),
      (M = i[10]),
      (N = i[11]));
  let H;
  if (i[14] !== d)
    ((H = d > 0 && r(n, { dimColor: !0, children: ["\u2026 (+", d, " more lines)"] })),
      (i[14] = d),
      (i[15] = H));
  else H = i[15];
  let q;
  if (i[16] !== c || i[17] !== b || i[18] !== k || i[19] !== m || i[20] !== x || i[21] !== H)
    ((q = r(c, { flexDirection: b, children: [k, m, x, H] })),
      (i[16] = c),
      (i[17] = b),
      (i[18] = k),
      (i[19] = m),
      (i[20] = x),
      (i[21] = H),
      (i[22] = q));
  else q = i[22];
  let X;
  if (i[23] !== f || i[24] !== M || i[25] !== q)
    ((X = e(f, { multiline: M, children: q })), (i[23] = f), (i[24] = M), (i[25] = q), (i[26] = X));
  else X = i[26];
  let v;
  if (i[27] !== u || i[28] !== N || i[29] !== X)
    ((v = e(u, { flexDirection: N, children: X })),
      (i[27] = u),
      (i[28] = N),
      (i[29] = X),
      (i[30] = v));
  else v = i[30];
  return v;
}
j();
var We = 200000,
  oo = We,
  na = 1e4,
  oa = 1000,
  ra = 200000;
function Tr(t) {
  return typeof t === "string" && t.length <= 256;
}
var St = 80,
  ia = new Set(["channel_id", "channel"]),
  sa = new Set(["ts", "thread_ts"]),
  aa = /^\d{10}\.\d{6}$/,
  la = /\b\d{4}\b/,
  da = /\d{1,2}:\d{2}/;
function Fe(t, o, i, c) {
  return le(t) + 2 + le(o) + (i === void 0 ? 0 : le(i) + 3) <= Math.min(St, c - 2);
}
var ca = 64;
function io(t, o, i = 0, c = { remaining: na, unitsRemaining: We }) {
  if (typeof t === "string") {
    if (t.length + 2 > c.unitsRemaining) throw Error("value exceeds the units display budget");
    let f = _(t);
    if (((c.unitsRemaining -= f.length), c.unitsRemaining < 0))
      throw Error("value exceeds the units display budget");
    return f;
  }
  if (t === null || typeof t === "number" || typeof t === "boolean") {
    let f = String(t);
    if (((c.unitsRemaining -= f.length), c.unitsRemaining < 0))
      throw Error("value exceeds the units display budget");
    return f;
  }
  if (i >= ca) throw Error("value exceeds the display depth bound");
  if (Array.isArray(t)) {
    if (t.length === 0) return "[]";
    let f = t.length;
    if (typeof f !== "number" || !Number.isSafeInteger(f) || f < 0)
      throw Error("value exceeds the element display budget");
    if (((c.remaining -= f), c.remaining < 0))
      throw Error("value exceeds the element display budget");
    let u = [];
    for (let k = 0; k < f; k++) u.push(io(t[k], o + 1, i + 1, c));
    if (
      u.every(
        (k) =>
          !k.includes(`
`)
      )
    ) {
      let k = `[${u.join(", ")}]`;
      if (le(k) <= St) return k;
    }
    let d = "  ".repeat(o + 1),
      b = "  ".repeat(o);
    return `[
${u.map((k) => d + k).join(`,
`)}
${b}]`;
  }
  if (typeof t === "object") {
    let f = Object.entries(t);
    if (f.length === 0) return "{}";
    if (((c.remaining -= f.length), c.remaining < 0))
      throw Error("value exceeds the element display budget");
    for (let [m] of f) {
      if (m.length > ra) throw Error("nested key exceeds the display bound");
      if (m.length > c.unitsRemaining) throw Error("keys exceed the units display budget");
      if (ah(m) !== m) throw Error("nested key display would drop code points");
      c.unitsRemaining -= m.length;
    }
    let u = Phn(f.map(([m]) => m));
    for (let [m] of f) {
      let x = u.get(m) ?? m;
      if (x.length > m.length) {
        if (((c.unitsRemaining -= x.length - m.length), c.unitsRemaining < 0))
          throw Error("keys exceed the units display budget");
      }
    }
    let d = f.map(([m, x]) => `${u.get(m) ?? m}: ${io(x, o + 1, i + 1, c)}`);
    if (
      d.every(
        (m) =>
          !m.includes(`
`)
      )
    ) {
      let m = `{ ${d.join(", ")} }`;
      if (le(m) <= St) return m;
    }
    let b = "  ".repeat(o + 1),
      k = "  ".repeat(o);
    return `{
${d.map((m) => b + m).join(`,
`)}
${k}}`;
  }
  if (typeof t === "bigint") throw Error("bigint value cannot be rendered");
  return "undefined";
}
var Er =
  /^(\d{4})-(\d{2})-(\d{2})[Tt ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,9})?)?(?:[Zz]|[+-]\d{2}:?\d{2})?$/;
function Mr(t) {
  let o = t.trim(),
    i = o.match(Er);
  if (!i) return null;
  let c = Number(i[1] ?? ""),
    f = Number(i[2] ?? ""),
    u = Number(i[3] ?? ""),
    d = Number(i[4] ?? ""),
    b = Number(i[5] ?? ""),
    k = i[6] === void 0 ? 0 : Number(i[6]);
  if (c < 100) return null;
  let m = new Date(Date.UTC(c, f, 0)).getUTCDate();
  if (f < 1 || f > 12 || u < 1 || u > m) return null;
  if (d > 24 || b > 59 || k > 59 || (d === 24 && (b > 0 || k > 0))) return null;
  let x = Date.parse(o);
  if (Number.isNaN(x)) return null;
  if (!/(?:[Zz]|[+-]\d{2}:?\d{2})$/.test(o)) {
    let h = new Date(Date.UTC(c, f - 1, u, d, b)),
      D = new Date(x);
    if (
      D.getFullYear() !== h.getUTCFullYear() ||
      D.getMonth() !== h.getUTCMonth() ||
      D.getDate() !== h.getUTCDate() ||
      D.getHours() !== h.getUTCHours() ||
      D.getMinutes() !== h.getUTCMinutes()
    )
      return null;
  }
  let N = Date.UTC(c, f - 1, u, d, b, k);
  if (Math.abs(x - N) > 50400000) return null;
  return new Date(x).toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}
function so(t, o, i = St) {
  if (t === null || typeof t !== "object" || Array.isArray(t))
    return [
      {
        kind: "inline",
        key: "input",
        text: "(parameters are not an object \u2014 deny unless expected)",
        unrenderable: !0
      }
    ];
  let c = Object.entries(t),
    f = Y9(t);
  if (f !== null)
    return [{ kind: "inline", key: "input", text: f, unrenderable: !0, parseFailureSentinel: !0 }];
  let u = [],
    d = c.length;
  if (d > oa)
    return [
      {
        kind: "inline",
        key: "input",
        text: `(${d} parameters \u2014 too many to show \u2014 deny unless expected)`,
        unrenderable: !0
      }
    ];
  let b = [],
    k = 0,
    m = 0;
  for (let [h, D] of c) {
    if (h.length > We) {
      k += 1;
      continue;
    }
    if ((b.push(h), (m += h.length), typeof D === "string" && D.length <= We)) m += D.length;
  }
  if (m > oo)
    return [
      {
        kind: "inline",
        key: "input",
        text: `(parameters total ${m.toLocaleString()} characters \u2014 too much to show \u2014 deny unless expected)`,
        unrenderable: !0
      }
    ];
  if (k > 0)
    u.push({
      kind: "inline",
      key: "input",
      text: `(${k} parameter ${k === 1 ? "name is" : "names are"} too large to show \u2014 deny unless expected)`,
      unrenderable: !0
    });
  let x = Phn(b),
    M = c.find(([h]) => h === "language")?.[1],
    N = 0;
  for (let [h, D] of c) {
    if (h.length > We) continue;
    let T = x.get(h) ?? h;
    if (ah(h) !== h) {
      N += 1;
      continue;
    }
    if (typeof D === "string") {
      if (D.length > We) {
        let v = `(value of ${D.length.toLocaleString()} characters cannot be shown \u2014 deny unless expected)`;
        if (!Fe(T, v, void 0, i)) u.push({ kind: "block", key: T, text: v, unrenderable: !0 });
        else u.push({ kind: "inline", key: T, text: v, unrenderable: !0 });
        continue;
      }
      let g = nc(D),
        E = ah(g);
      if (A$e.test(E) || E !== g) {
        let v = `(value of ${D.length.toLocaleString()} characters cannot be shown in full \u2014 deny unless expected)`;
        if (!Fe(T, v, void 0, i)) u.push({ kind: "block", key: T, text: v, unrenderable: !0 });
        else u.push({ kind: "inline", key: T, text: v, unrenderable: !0 });
        continue;
      }
      let Y = E.replace(/\t/g, " ");
      if (
        E.includes(`
`) ||
        le(E) > St
      ) {
        let v = h === "code" && Tr(M) ? nc(M) : void 0;
        u.push({ kind: "block", key: T, text: Y, language: v });
        continue;
      }
      let re = _(E),
        B = o?.[h] === "date-time" && la.test(E) && da.test(E),
        q =
          sa.has(h) && aa.test(E)
            ? (Mr(new Date(Number(E) * 1000).toISOString()) ?? void 0)
            : B || Er.test(E)
              ? (Mr(E) ?? void 0)
              : void 0;
      if (!Fe(T, re, q, i)) {
        let v = h === "code" && Tr(M) ? nc(M) : void 0;
        u.push({ kind: "block", key: T, text: Y, annotation: q, language: v });
        continue;
      }
      let X = ia.has(h) ? (vbo(E) ?? void 0) : /^https?:\/\/\S+$/.test(E) && !x7(E) ? E : void 0;
      u.push({ kind: "inline", key: T, text: re, linkUrl: X, annotation: q });
      continue;
    }
    if (D === null || typeof D === "number" || typeof D === "boolean") {
      let g = String(D);
      if (!Fe(T, g, void 0, i)) {
        u.push({ kind: "block", key: T, text: g });
        continue;
      }
      u.push({ kind: "inline", key: T, text: g });
      continue;
    }
    let O,
      U = "",
      F = 0;
    try {
      let g = io(D, 0);
      if (((F = g.length), g.length > We)) {
        let E = `(value of ${g.length.toLocaleString()} formatted characters cannot be shown \u2014 deny unless expected)`;
        if (!Fe(T, E, void 0, i)) u.push({ kind: "block", key: T, text: E, unrenderable: !0 });
        else u.push({ kind: "inline", key: T, text: E, unrenderable: !0 });
        continue;
      }
      ((U = nc(g)), (O = ah(U)));
    } catch {
      if (
        !Fe(
          T,
          "(value too large or too deeply nested to render \u2014 deny unless expected)",
          void 0,
          i
        )
      )
        u.push({
          kind: "block",
          key: T,
          text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
          unrenderable: !0
        });
      else
        u.push({
          kind: "inline",
          key: T,
          text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
          unrenderable: !0
        });
      continue;
    }
    if (((m += F), m > oo))
      return [
        {
          kind: "inline",
          key: "input",
          text: `(parameters total over ${oo.toLocaleString()} rendered characters \u2014 too much to show \u2014 deny unless expected)`,
          unrenderable: !0
        }
      ];
    if (A$e.test(O) || ah(U) !== U) {
      let g = `(value of ${F.toLocaleString()} formatted characters cannot be shown in full \u2014 deny unless expected)`;
      if (!Fe(T, g, void 0, i)) u.push({ kind: "block", key: T, text: g, unrenderable: !0 });
      else u.push({ kind: "inline", key: T, text: g, unrenderable: !0 });
      continue;
    }
    if (
      !O.includes(`
`) &&
      Fe(T, O, void 0, i)
    )
      u.push({ kind: "inline", key: T, text: O });
    else u.push({ kind: "block", key: T, text: O, language: "javascript" });
  }
  if (N > 0)
    u.push({
      kind: "inline",
      key: "input",
      text: `(${N} parameter ${N === 1 ? "name" : "names"} cannot be shown in full \u2014 deny unless expected)`,
      unrenderable: !0
    });
  return u;
}
function ua(t, o) {
  return (
    t.language !== void 0 &&
    o !== null &&
    PIo(t.text, pan(t.language) ?? t.language) &&
    o.supportsLanguage(t.language)
  );
}
function Ar(t) {
  let c = w(38),
    { keyText: o, contentColumns: i } = t,
    f,
    u,
    d,
    b,
    k,
    m,
    x,
    M,
    N,
    h,
    D,
    T,
    O,
    U,
    F,
    g;
  if (c[0] !== i || c[1] !== o) {
    M = vn;
    re: {
      let E = vu(`${o}:`, Math.max(10, i - 2), { hard: !0, trim: !1 });
      let Y = E.indexOf(`
`);
      if (Y === -1) {
        M = e(n, { dimColor: !0, children: E });
        break re;
      }
      d = s;
      m = "column";
      x = e(n, { dimColor: !0, children: E.slice(0, Y) });
      u = s;
      h = 2;
      D = "single";
      T = !0;
      O = !1;
      U = !1;
      F = !1;
      g = !0;
      k = 1;
      f = n;
      b = !0;
      N = vu(E.slice(Y + 1).replace(/\n/g, ""), Math.max(10, i - 4), { hard: !0, trim: !1 });
    }
    ((c[0] = i),
      (c[1] = o),
      (c[2] = f),
      (c[3] = u),
      (c[4] = d),
      (c[5] = b),
      (c[6] = k),
      (c[7] = m),
      (c[8] = x),
      (c[9] = M),
      (c[10] = N),
      (c[11] = h),
      (c[12] = D),
      (c[13] = T),
      (c[14] = O),
      (c[15] = U),
      (c[16] = F),
      (c[17] = g));
  } else
    ((f = c[2]),
      (u = c[3]),
      (d = c[4]),
      (b = c[5]),
      (k = c[6]),
      (m = c[7]),
      (x = c[8]),
      (M = c[9]),
      (N = c[10]),
      (h = c[11]),
      (D = c[12]),
      (T = c[13]),
      (O = c[14]),
      (U = c[15]),
      (F = c[16]),
      (g = c[17]));
  if (M !== vn) return M;
  let B;
  if (c[18] !== f || c[19] !== b || c[20] !== N)
    ((B = e(f, { dimColor: b, children: N })), (c[18] = f), (c[19] = b), (c[20] = N), (c[21] = B));
  else B = c[21];
  let H;
  if (
    c[22] !== u ||
    c[23] !== k ||
    c[24] !== B ||
    c[25] !== h ||
    c[26] !== D ||
    c[27] !== T ||
    c[28] !== O ||
    c[29] !== U ||
    c[30] !== F ||
    c[31] !== g
  )
    ((H = e(u, {
      marginLeft: h,
      borderStyle: D,
      borderLeft: T,
      borderRight: O,
      borderTop: U,
      borderBottom: F,
      borderDimColor: g,
      paddingLeft: k,
      children: B
    })),
      (c[22] = u),
      (c[23] = k),
      (c[24] = B),
      (c[25] = h),
      (c[26] = D),
      (c[27] = T),
      (c[28] = O),
      (c[29] = U),
      (c[30] = F),
      (c[31] = g),
      (c[32] = H));
  else H = c[32];
  let q;
  if (c[33] !== d || c[34] !== m || c[35] !== x || c[36] !== H)
    ((q = r(d, { flexDirection: m, children: [x, H] })),
      (c[33] = d),
      (c[34] = m),
      (c[35] = x),
      (c[36] = H),
      (c[37] = q));
  else q = c[37];
  return q;
}
function ao({ entries: t, contentColumns: o }) {
  let [i] = Pr(),
    f = Wd().syntaxHighlightingDisabled ?? !1,
    u = C(new Map()),
    d = ee(() => {
      let x = f ? null : PW(),
        M = new Map(),
        N = t.map((h) => {
          if (h.kind !== "block") return null;
          let D = `${i}\x00${f}\x00${h.language ?? ""}\x00${h.text}`,
            T = M.get(D) ?? u.current.get(D);
          if (T === void 0)
            T =
              ua(h, x) && h.language !== void 0 && x !== null
                ? x.highlight(h.text, { language: h.language })
                : x7(h.text)
                  ? h.text
                  : tmr(h.text, i);
          return (M.set(D, T), T);
        });
      return ((u.current = M), N);
    }, [t, i, f]),
    b = ee(
      () => d.map((x) => (x === null ? null : vu(x, Math.max(10, o - 4), { hard: !0, trim: !1 }))),
      [d, o]
    ),
    k = a6e(),
    m = t.length === 1 && t[0].kind === "inline" && t[0].parseFailureSentinel === !0 ? t[0] : null;
  if (m !== null) return e(n, { dimColor: !0, children: m.text });
  if (t.length === 0) return null;
  return e(s, {
    flexDirection: "column",
    children: t.map((x, M) =>
      x.kind === "inline"
        ? r(
            n,
            {
              children: [
                r(n, { dimColor: !0, children: [x.key, ": "] }),
                e(ts, { children: x.linkUrl !== void 0 && k ? tv(x.linkUrl, x.text) : x.text }),
                x.annotation !== void 0 &&
                  r(n, { dimColor: !0, children: [" (", x.annotation, ")"] })
              ]
            },
            M
          )
        : r(
            s,
            {
              flexDirection: "column",
              children: [
                e(Ar, { keyText: x.key, contentColumns: o }),
                e(s, {
                  marginLeft: 2,
                  borderStyle: "single",
                  borderLeft: !0,
                  borderRight: !1,
                  borderTop: !1,
                  borderBottom: !1,
                  borderDimColor: !0,
                  paddingLeft: 1,
                  children: e(ts, { children: b[M] ?? x.text })
                }),
                x.annotation !== void 0 &&
                  e(s, {
                    marginLeft: 2,
                    children: r(n, { dimColor: !0, children: ["(", x.annotation, ")"] })
                  })
              ]
            },
            M
          )
    )
  });
}
function Ia(Va) {
  return Va.unrenderable === !0;
}
function Ua(Wa) {
  return C$(Wa);
}
function ja(Ka) {
  return !Ka;
}
function $a(Ga, bi) {
  return Ga + le(bi) + (bi.split(/\r\n|[\r\n\u2028\u2029]/).length - 1) * zt;
}
function _r(t, o, i, c) {
  switch (t) {
    case "yes":
    case "yes-enable-auto-mode":
      return { behavior: "allow", updatedInput: o.input, ...(c && { feedback: c }) };
    case "yes-dont-ask-again": {
      if (i === null || !bk(i)) return { behavior: "allow", updatedInput: o.input };
      return { behavior: "allow", updatedInput: o.input, permissionUpdates: i.applies };
    }
    case "no":
      return { behavior: "deny", ...(c && { feedback: c }) };
  }
}
function Lr(t, o) {
  return eL(
    [
      {
        type: "addRules",
        rules: [{ toolName: t.toolName }],
        behavior: "allow",
        destination: "localSettings"
      }
    ],
    {
      displayedTypes: fa,
      renderLabel: (i) => {
        let c = i.length === 1 ? i[0] : void 0;
        if (
          c === void 0 ||
          c.type !== "addRules" ||
          c.rules.length !== 1 ||
          c.rules[0]?.toolName !== t.toolName ||
          c.rules[0]?.ruleContent !== void 0
        )
          return null;
        let f = String(t.userFacingName);
        if (le(f) >= Rtt || f.includes("\u2026")) return null;
        if (o.cwd.includes("\u2026")) return null;
        let u = Math.max(24, o.maxLabelWidth),
          d = (M) => `Yes, and don't ask again for ${t.userFacingName} commands in ${M}`,
          b = Jn(o.cwd);
        if (le(d(b)) <= u) return d(b);
        if (b !== o.cwd) return null;
        let k = os(o.cwd);
        if (le(d(k)) <= u) return d(k);
        let m = cSe(k),
          x = "";
        for (let M = 0; M < m.length; M++) {
          let N = x + m[M];
          if (le(d(`${N}\u2026`)) > u) break;
          x = N;
        }
        if (x.length > 0) return d(`${x}\u2026`);
        return null;
      }
    }
  );
}
var fa = new Set(["addRules"]);
function co(t) {
  let o = t.permissionResult.decisionReason;
  return (
    Dl(o, (c) => !c.classifierApprovable) !== void 0 || t.isAskCappedByOrg || aRe(t.requestSource)
  );
}
function VRn(t) {
  return t.showAlwaysAllow && !co(t) && nt(t.toolName);
}
var Fr = 2,
  ma = 16,
  ga = 24,
  ha = 80;
function vr(t, o) {
  return t && o.columns >= ha ? Math.max(Fr, Math.min(ma, o.rows - ga)) : Fr;
}
function nZr(t) {
  let d = w(155),
    { payload: o, answer: i, wouldTakeAnswer: c } = t,
    f = C(null),
    u = Te(),
    b;
  if (d[0] !== u.columns)
    ((b = () => Math.max(20, Math.min(40, u.columns - 6))), (d[0] = u.columns), (d[1] = b));
  else b = d[1];
  let [k, m] = y(b),
    x;
  if (d[2] === S)
    ((x = () => {
      if (f.current) {
        let { width: M } = Ys(f.current);
        if (M > 0) m(Math.max(20, M - 2));
      }
    }),
      (d[2] = x));
  else x = d[2];
  let N;
  if (d[3] !== u.columns || d[4] !== u.rows)
    ((N = [u.columns, u.rows]), (d[3] = u.columns), (d[4] = u.rows), (d[5] = N));
  else N = d[5];
  P(x, N);
  let h = Math.min(k, Math.max(20, u.columns - 6)),
    D;
  if (d[6] !== h || d[7] !== o.input || d[8] !== o.isMcp || d[9] !== o.paramFormatHints)
    ((D = o.isMcp ? so(o.input, o.paramFormatHints, h) : null),
      (d[6] = h),
      (d[7] = o.input),
      (d[8] = o.isMcp),
      (d[9] = o.paramFormatHints),
      (d[10] = D));
  else D = d[10];
  let T = D,
    [O] = Pr(),
    U;
  g: {
    if (o.renderedToolUseMessage != null) {
      let F;
      if (d[11] !== o.renderedToolUseMessage)
        ((F = { node: o.renderedToolUseMessage, threw: !1 }),
          (d[11] = o.renderedToolUseMessage),
          (d[12] = F));
      else F = d[12];
      U = F;
      break g;
    }
    ;
    try {
      let E;
      if (d[13] !== o.input || d[14] !== o.toolName || d[15] !== O)
        ((E = gxt(o.toolName, o.input, { theme: O, verbose: !0 })),
          (d[13] = o.input),
          (d[14] = o.toolName),
          (d[15] = O),
          (d[16] = E));
      else E = d[16];
      let Y;
      if (d[17] !== E) ((Y = { node: E, threw: !1 }), (d[17] = E), (d[18] = Y));
      else Y = d[18];
      U = Y;
    } catch (F) {
      let re = F;
      let E;
      if (d[19] !== o.toolName)
        ((E =
          (l(
            new R(
              `Error rendering tool use line for ${o.toolName}: ${re}`,
              "Error rendering tool use line (permission dialog table fallback)"
            )
          ),
          { node: null, threw: !0 })),
          (d[19] = o.toolName),
          (d[20] = E));
      else E = d[20];
      U = E;
    }
  }
  let { node: B, threw: H } = U,
    F;
  if (d[21] !== B) ((F = typeof B === "string" ? US(B) : null), (d[21] = B), (d[22] = F));
  else F = d[22];
  let q = F,
    E;
  if (d[23] !== T || d[24] !== q?.kind || d[25] !== o.toolUseRenderFailed || d[26] !== H)
    ((E = (T?.some(Ia) ?? !1) || o.toolUseRenderFailed === !0 || H || q?.kind === "withheld"),
      (d[23] = T),
      (d[24] = q?.kind),
      (d[25] = o.toolUseRenderFailed),
      (d[26] = H),
      (d[27] = E));
  else E = d[27];
  let X = E,
    Y;
  if (d[28] !== o) ((Y = VRn(o)), (d[28] = o), (d[29] = Y));
  else Y = d[29];
  let v = Y,
    { offered: G, enableAutoMode: W } = T6t(o.requestSource),
    ie;
  if (d[30] === S) ((ie = ke()), (d[30] = ie));
  else ie = d[30];
  let se = ie,
    z;
  if (d[31] !== v || d[32] !== h || d[33] !== X || d[34] !== o)
    ((z = v && !X ? Lr(o, { cwd: se, maxLabelWidth: h - 8 }) : null),
      (d[31] = v),
      (d[32] = h),
      (d[33] = X),
      (d[34] = o),
      (d[35] = z));
  else z = d[35];
  let Z = z,
    ye;
  if (d[36] !== o) ((ye = co(o)), (d[36] = o), (d[37] = ye));
  else ye = d[37];
  let De = ye,
    be;
  if (d[38] !== G || d[39] !== X || d[40] !== De)
    ((be = G && !X && !De ? zRn("workflow") : null),
      (d[38] = G),
      (d[39] = X),
      (d[40] = De),
      (d[41] = be));
  else be = d[41];
  let ae = be,
    J = o.permissionResult.defaultToNo === !0,
    Xe;
  if (d[42] !== Z || d[43] !== i || d[44] !== W || d[45] !== o || d[46] !== c)
    ((Xe = (Re) => {
      let { value: Ae, feedback: st } = Re;
      if (!c()) {
        return !1;
      }
      if (Ae === "yes-enable-auto-mode") W();
      return i(_r(Ae, o, Z, st));
    }),
      (d[42] = Z),
      (d[43] = i),
      (d[44] = W),
      (d[45] = o),
      (d[46] = c),
      (d[47] = Xe));
  else Xe = d[47];
  let ne = mE(Xe),
    ze = ne.answer,
    Re;
  if (d[48] !== ze)
    ((Re = (Dt, Et) => ze({ value: Dt, feedback: Et })), (d[48] = ze), (d[49] = Re));
  else Re = d[49];
  let Ie = Re,
    Ze =
      ne.refused === null ? (J ? "no" : void 0) : ne.refused.value === "yes" && !J ? "yes" : "no",
    uo;
  if (d[50] !== i) ((uo = () => i({ behavior: "cancelled" })), (d[50] = i), (d[51] = uo));
  else uo = d[51];
  let Qe = uo;
  const po = typeof o.description === "string" ? o.description : "";
  let si;
  if (d[52] !== po)
    ((si = po
      .split(
        `
`
      )
      .filter(Ua)
      .join(
        `
`
      )
      .trim()),
      (d[52] = po),
      (d[53] = si));
  else si = d[53];
  let at = si,
    ln;
  fu: {
    if (q === null) {
      ln = B;
      break fu;
    }
    if (q.kind === "withheld") {
      ln = q.marker;
      break fu;
    }
    let lt;
    if (d[54] !== q.text)
      ((lt = _a(q.text).replace(/\s+/g, " ").trim()), (d[54] = q.text), (d[55] = lt));
    else lt = d[55];
    ln = lt;
  }
  let et = ln,
    dt = o.isMcp ? Math.max(10, h - 2) : h;
  const lt = o.roomyDescription === !0;
  let ai;
  if (d[56] !== lt || d[57] !== u) ((ai = vr(lt, u)), (d[56] = lt), (d[57] = u), (d[58] = ai));
  else ai = d[58];
  let fo = ai,
    li;
  if (d[59] !== fo || d[60] !== dt || d[61] !== at)
    ((li = Var(at, dt, fo)), (d[59] = fo), (d[60] = dt), (d[61] = at), (d[62] = li));
  else li = d[62];
  let Ue = li,
    di;
  if (d[63] !== dt || d[64] !== at)
    ((di = Var(at, dt, Number.MAX_SAFE_INTEGER)), (d[63] = dt), (d[64] = at), (d[65] = di));
  else di = d[65];
  let cn = di,
    ct = cn !== Ue,
    [un, Ya] = y(!1),
    mo = ka("app:toggleTranscript", "Global", "ctrl+o"),
    ci;
  if (d[66] === S) ((ci = [{ action: "app:toggleTranscript", run: () => Ya(ja) }]), (d[66] = ci));
  else ci = d[66];
  let qa = ci,
    ui;
  if (d[67] === S)
    ((ui = { label: "Yes", value: "yes", feedbackConfig: { type: "accept" } }), (d[67] = ui));
  else ui = d[67];
  let pi = ui,
    fi;
  if (d[68] === S)
    ((fi = { label: "No", value: "no", feedbackConfig: { type: "reject" } }), (d[68] = fi));
  else fi = d[68];
  let mi = fi,
    At;
  if (d[69] !== Z || d[70] !== ae || d[71] !== J) {
    At = J ? [mi, pi] : [pi];
    if (Z !== null) {
      if (typeof Z.node === "string") {
        let we;
        if (d[73] !== Z.node)
          ((we = { label: Z.node, value: "yes-dont-ask-again" }), (d[73] = Z.node), (d[74] = we));
        else we = d[74];
        At.push(we);
      }
    }
    if (ae !== null) {
      if (typeof ae.node === "string") {
        let we;
        if (d[75] !== ae.node)
          ((we = { label: ae.node, description: KRn, value: "yes-enable-auto-mode" }),
            (d[75] = ae.node),
            (d[76] = we));
        else we = d[76];
        At.push(we);
      }
    }
    if (!J) At.push(mi);
    ((d[69] = Z), (d[70] = ae), (d[71] = J), (d[72] = At));
  } else At = d[72];
  let ut = At,
    we;
  if (d[77] !== o.toolName) ((we = Nn(o.toolName)), (d[77] = o.toolName), (d[78] = we));
  else we = d[78];
  let gi;
  if (d[79] !== o.isMcp || d[80] !== we)
    ((gi = { toolName: we, isMcp: o.isMcp }), (d[79] = o.isMcp), (d[80] = we), (d[81] = gi));
  else gi = d[81];
  let pt = gi,
    pe = o.toolUseRenderFailed === !0 ? void 0 : o.card;
  if (pe !== void 0 && [pe.question, ...pe.lines, ...pe.values].reduce($a, 0) <= eo) {
    let hi =
      o.requestSource === void 0 &&
      !pe.question.includes(`
`) &&
      le(pe.question) <= Math.min(h, u.columns - 2);
    const ft = hi ? void 0 : pe.question;
    let pn;
    if (d[82] !== pe || d[83] !== k || d[84] !== ft || d[85] !== u.columns)
      ((pn = no({ ...pe, question: ft }, Math.min(k, u.columns - 6) - to)),
        (d[82] = pe),
        (d[83] = k),
        (d[84] = ft),
        (d[85] = u.columns),
        (d[86] = pn));
    else pn = d[86];
    let _t = pn;
    const je = hi ? pe.question : o.userFacingName;
    let _e;
    if (d[87] !== _t)
      ((_e = _t.rows.length > 0 && e(Tl, { children: e(Zt, { card: _t }) })),
        (d[87] = _t),
        (d[88] = _e));
    else _e = d[88];
    let Be;
    if (d[89] !== _e)
      ((Be = e(s, { ref: f, width: "100%", flexDirection: "column", children: _e })),
        (d[89] = _e),
        (d[90] = Be));
    else Be = d[90];
    const $e = _t.rows.length === 0 ? 1 : 0;
    let Ne;
    if (
      d[91] !== Qe ||
      d[92] !== Ie ||
      d[93] !== J ||
      d[94] !== ut ||
      d[95] !== o.requestSource ||
      d[96] !== ne.attempts ||
      d[97] !== Ze ||
      d[98] !== pt
    )
      ((Ne = e(
        Mee,
        {
          question: null,
          options: ut,
          defaultFocusValue: Ze,
          hideIndexes: J,
          onSelect: Ie,
          onCancel: Qe,
          toolAnalyticsContext: pt,
          requestSource: o.requestSource
        },
        ne.attempts
      )),
        (d[91] = Qe),
        (d[92] = Ie),
        (d[93] = J),
        (d[94] = ut),
        (d[95] = o.requestSource),
        (d[96] = ne.attempts),
        (d[97] = Ze),
        (d[98] = pt),
        (d[99] = Ne));
    else Ne = d[99];
    let Le;
    if (d[100] !== $e || d[101] !== Ne)
      ((Le = e(s, { paddingX: 1, marginTop: $e, children: Ne })),
        (d[100] = $e),
        (d[101] = Ne),
        (d[102] = Le));
    else Le = d[102];
    let tt;
    if (d[103] !== o.requestSource || d[104] !== je || d[105] !== Be || d[106] !== Le)
      ((tt = r(Ba, {
        title: je,
        innerPaddingX: 0,
        requestSource: o.requestSource,
        children: [Be, Le]
      })),
        (d[103] = o.requestSource),
        (d[104] = je),
        (d[105] = Be),
        (d[106] = Le),
        (d[107] = tt));
    else tt = d[107];
    return tt;
  }
  let ft;
  if (
    d[108] !== Ue ||
    d[109] !== un ||
    d[110] !== ct ||
    d[111] !== mo ||
    d[112] !== cn ||
    d[113] !== T?.length ||
    d[114] !== o.isMcp ||
    d[115] !== o.userFacingName
  )
    ((ft =
      Ue !== "" &&
      r(s, {
        width: "100%",
        flexDirection: "column",
        paddingX: 1,
        marginTop: T?.length === 0 ? 1 : 0,
        marginBottom: o.isMcp ? 1 : 0,
        children: [
          o.isMcp &&
            r(n, {
              italic: !0,
              wrap: "truncate-end",
              children: ["About the ", e(n, { bold: !0, children: o.userFacingName }), " Tool:"]
            }),
          e(s, {
            borderStyle: "single",
            borderLeft: !0,
            borderRight: !1,
            borderTop: !1,
            borderBottom: !1,
            borderDimColor: !0,
            paddingLeft: 1,
            children: e(n, { dimColor: !0, italic: o.isMcp, children: un ? cn : Ue })
          }),
          ct &&
            e(n, {
              dimColor: !0,
              children: e(V, {
                chord: mo,
                action: un ? "collapse description" : "expand description",
                parens: !0,
                format: { keyCase: "lower" }
              })
            })
        ]
      })),
      (d[108] = Ue),
      (d[109] = un),
      (d[110] = ct),
      (d[111] = mo),
      (d[112] = cn),
      (d[113] = T?.length),
      (d[114] = o.isMcp),
      (d[115] = o.userFacingName),
      (d[116] = ft));
  else ft = d[116];
  let mn = ft;
  const pn = o.requestSource;
  let je;
  if (
    d[117] !== Ue ||
    d[118] !== mn ||
    d[119] !== T?.length ||
    d[120] !== o.hasMcpSuffix ||
    d[121] !== o.isMcp ||
    d[122] !== o.userFacingName
  )
    ((je = o.isMcp
      ? r(s, {
          flexDirection: "row",
          paddingX: 1,
          marginBottom: T?.length === 0 && Ue === "" ? 1 : 0,
          children: [
            e(n, {
              wrap: "truncate-end",
              children: r(n, { bold: !0, children: [o.userFacingName, " Tool:"] })
            }),
            o.hasMcpSuffix
              ? e(s, { flexShrink: 0, children: e(n, { dimColor: !0, children: " (MCP)" }) })
              : null
          ]
        })
      : mn),
      (d[117] = Ue),
      (d[118] = mn),
      (d[119] = T?.length),
      (d[120] = o.hasMcpSuffix),
      (d[121] = o.isMcp),
      (d[122] = o.userFacingName),
      (d[123] = je));
  else je = d[123];
  let _e;
  if (
    d[124] !== et ||
    d[125] !== h ||
    d[126] !== T ||
    d[127] !== o.hasMcpSuffix ||
    d[128] !== o.userFacingName
  )
    ((_e =
      (T === null || T.length > 0) &&
      e(Tl, {
        children:
          T !== null
            ? e(ao, { entries: T, contentColumns: h })
            : e(Hi, {
                multiline: typeof et === "string" && Iw(`${o.userFacingName}(${et})`),
                children: r(n, {
                  children: [
                    o.userFacingName,
                    et != null && et !== "" && r(Q, { children: ["(", et, ")"] }),
                    o.hasMcpSuffix ? e(n, { dimColor: !0, children: " (MCP)" }) : ""
                  ]
                })
              })
      })),
      (d[124] = et),
      (d[125] = h),
      (d[126] = T),
      (d[127] = o.hasMcpSuffix),
      (d[128] = o.userFacingName),
      (d[129] = _e));
  else _e = d[129];
  const Be = o.isMcp && mn;
  let $e;
  if (d[130] !== je || d[131] !== _e || d[132] !== Be)
    (($e = r(s, { ref: f, width: "100%", flexDirection: "column", children: [je, _e, Be] })),
      (d[130] = je),
      (d[131] = _e),
      (d[132] = Be),
      (d[133] = $e));
  else $e = d[133];
  let Ne;
  if (d[134] !== o.permissionResult)
    ((Ne = e(Sk, { permissionResult: o.permissionResult, toolType: "tool" })),
      (d[134] = o.permissionResult),
      (d[135] = Ne));
  else Ne = d[135];
  let Le;
  if (
    d[136] !== Qe ||
    d[137] !== Ie ||
    d[138] !== J ||
    d[139] !== ut ||
    d[140] !== o.requestSource ||
    d[141] !== ne.attempts ||
    d[142] !== Ze ||
    d[143] !== pt
  )
    ((Le = e(
      Mee,
      {
        options: ut,
        defaultFocusValue: Ze,
        hideIndexes: J,
        onSelect: Ie,
        onCancel: Qe,
        toolAnalyticsContext: pt,
        requestSource: o.requestSource
      },
      ne.attempts
    )),
      (d[136] = Qe),
      (d[137] = Ie),
      (d[138] = J),
      (d[139] = ut),
      (d[140] = o.requestSource),
      (d[141] = ne.attempts),
      (d[142] = Ze),
      (d[143] = pt),
      (d[144] = Le));
  else Le = d[144];
  let tt;
  if (d[145] !== Ne || d[146] !== Le)
    ((tt = r(s, { flexDirection: "column", paddingX: 1, children: [Ne, Le] })),
      (d[145] = Ne),
      (d[146] = Le),
      (d[147] = tt));
  else tt = d[147];
  let gn;
  if (d[148] !== o.requestSource || d[149] !== $e || d[150] !== tt)
    ((gn = r(Ba, { title: "Tool use", innerPaddingX: 0, requestSource: pn, children: [$e, tt] })),
      (d[148] = o.requestSource),
      (d[149] = $e),
      (d[150] = tt),
      (d[151] = gn));
  else gn = d[151];
  let yi;
  if (d[152] !== ct || d[153] !== gn)
    ((yi = e(hE, { bindings: qa, active: ct, flexDirection: "column", children: gn })),
      (d[152] = ct),
      (d[153] = gn),
      (d[154] = yi));
  else yi = d[154];
  return yi;
}
export {
  Hi,
  DFe,
  iPe,
  _at,
  cfr,
  yls,
  u5e,
  v6t,
  E6t,
  Pie,
  mF,
  ufr,
  bk,
  _ls,
  eL,
  aPe,
  GRn,
  ffr,
  tZr,
  zRn,
  pfr,
  k6t,
  Sk,
  KRn,
  T6t,
  A6t,
  lPe,
  HFe,
  Mee,
  VRn,
  nZr
};

//# sourceMappingURL=chunk-0yh18z2j.js.map
