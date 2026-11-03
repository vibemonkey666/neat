// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Jo, ant, VCe, $t } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Qs } from "./chunk-dvghjmtr.js";
import { VFt, UT, uY, s8, vhe, gTe, aln, E1s, mQe, vDe, qFt, A1s } from "./chunk-6h7ejyet.js";
var C = { announcement: void 0, advisorModel: void 0, advisorDeferred: !1, advisorActive: !1 };
function LSs(
  e,
  o,
  {
    querySource: i,
    resumeActive: u,
    configuredRuntimeModel: d,
    runtimeOptionsModel: f,
    carrier: n,
    toolChangesRide: g
  }
) {
  try {
    let r = typeof g === "function" ? g : () => g,
      b = Jo(i),
      v = o.getAdvisorSetting(),
      s = b === "main" ? d : f,
      m = r(f),
      c = qFt(e);
    if (u || b === "auxiliary") {
      let p = n?.advisorHeld ?? tLn(c) ?? _(v, s, d, r(s)),
        h = p.model === void 0 && m && !p.refused ? { model: A(v, s, d), viaToolChange: !0 } : p;
      return H(S(h, m), c, s, d);
    }
    let a = n?.advisorHeld;
    if (a === void 0) {
      if (((a = tLn(c) ?? _(v, s, d, r(s))), n !== void 0)) n.advisorHeld = a;
    } else if (a.model === void 0 && m && !a.refused) {
      let p = A(v, s, d);
      if (p !== void 0) {
        if (((a = { model: p, viaToolChange: !0 }), n !== void 0)) n.advisorHeld = a;
      }
    }
    let F = S(a, m),
      q = a.viaToolChange && !m && a.inFallback !== !0,
      y = x(e, v, s, d, F, q),
      N = a.model === void 0 || c !== void 0 || T(a.model, s, d),
      B = m ? !1 : a.inFallback === !0 || N;
    if (n !== void 0 && a.viaToolChange && (a.inFallback === !0) !== B) {
      let { inFallback: p, ...h } = a;
      n.advisorHeld = B ? { ...h, inFallback: !0 } : h;
    }
    let O =
      y === void 0
        ? c
        : y.available
          ? { available: !0, model: y.model, toolChange: y.toolChange !== void 0, byBase: !1 }
          : {
              available: !1,
              model: y.model,
              toolChange: y.toolChange !== void 0,
              byBase: y.byBase === !0
            };
    return { ...H(F, O, s, d), announcement: y };
  } catch (r) {
    return (l(r), C);
  }
}
function w(e, o, i) {
  return {
    announcement: void 0,
    advisorModel: e,
    advisorDeferred: e !== void 0 && o,
    advisorActive: e !== void 0 && i
  };
}
function H(e, o, i, u) {
  if (e.model === void 0 || !T(e.model, i, u)) return C;
  if (e.viaToolChange) return w(e.model, !0, o?.available === !0);
  if (e.standby && o === void 0) return C;
  if (o !== void 0 && !o.available && o.toolChange && !o.byBase) return C;
  return w(e.model, !1, !0);
}
function S(e, o) {
  return e.viaToolChange && !o ? { ...e, viaToolChange: !1 } : e;
}
function tLn(e) {
  if (e === void 0) return;
  return { model: e.model, viaToolChange: e.toolChange };
}
function _(e, o, i, u) {
  let d = A(e, o, i);
  if (d !== void 0 || !u || e) return { model: d, viaToolChange: u };
  let f = P(o, i);
  return f === void 0
    ? { model: void 0, viaToolChange: !0 }
    : { model: f, viaToolChange: !0, standby: !0 };
}
function P(e, o) {
  if (!Qs() || !UT() || !uY(e)) return;
  let i = s8(),
    u = [...i.filter((d) => !k(d)), ...i.filter((d) => k(d))];
  for (let d of u) {
    let f = A(d, e, o);
    if (f === void 0 || !E1s(e, f)) continue;
    if (ant(f)) return f;
    t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${f}`);
    return;
  }
  return;
}
function k(e) {
  return VCe($t(e));
}
function x(e, o, i, u, d, f = !1) {
  let n = qFt(e),
    g = d ?? tLn(n) ?? { model: A(o, i, u), viaToolChange: !1 },
    r = g.model,
    b = D(e) === "add";
  if (r === void 0 || !T(r, i, u)) {
    let c = g.viaToolChange || f,
      a = UT() && Boolean(o);
    if (n?.available !== !0) {
      if (!c || r === void 0 || n === void 0) return;
      if (n.byBase && !a)
        return { type: "advisor_tool", available: !1, model: r, toolChange: "remove" };
      if (n.toolChange && !n.byBase && a)
        return { type: "advisor_tool", available: !1, model: r, toolChange: "remove", byBase: !0 };
      return;
    }
    if (r === void 0) return { type: "advisor_tool", available: !1 };
    if (!c) return { type: "advisor_tool", available: !1, model: r, byBase: !0 };
    return a
      ? { type: "advisor_tool", available: !1, model: r, toolChange: "remove", byBase: !0 }
      : { type: "advisor_tool", available: !1, model: r, toolChange: "remove" };
  }
  let v = A1s(e);
  if (g.viaToolChange) {
    if (vDe(o, i) === void 0)
      return b || n?.available === !0
        ? { type: "advisor_tool", available: !1, model: r, toolChange: "remove" }
        : void 0;
    if (b && n?.available !== !1)
      return v ? void 0 : { type: "advisor_tool", available: !0, model: r, toolChange: "add" };
    return v
      ? { type: "advisor_tool", available: !0, model: r, abbreviated: !0, toolChange: "add" }
      : { type: "advisor_tool", available: !0, model: r, toolChange: "add" };
  }
  let s = { type: "advisor_tool", available: !0, model: r },
    m = { ...s, abbreviated: !0 };
  if (f) {
    if (vDe(o, i) === void 0)
      return n?.available === !0 || (n !== void 0 && n.byBase) || (n === void 0 && g.standby !== !0)
        ? { type: "advisor_tool", available: !1, model: r, toolChange: "remove" }
        : void 0;
    if (n?.available === !0) return v ? void 0 : s;
    return v ? m : s;
  }
  if (n === void 0) return g.standby ? void 0 : s;
  if (n.available) return v ? void 0 : s;
  if (n.toolChange && !n.byBase) return;
  return v ? m : s;
}
function D(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let i = e[o];
    if (
      i.type === "attachment" &&
      i.attachment.type === "advisor_tool" &&
      i.attachment.toolChange !== void 0
    )
      return i.attachment.toolChange;
  }
  return;
}
function T(e, o, i) {
  return VFt() && vhe(e) && uY(o) && (mQe(o, i) ? gTe(o, e) : aln(o, e));
}
function A(e, o, i) {
  let u = vDe(e, o);
  return u !== void 0 && (mQe(o, i) || aln(o, u)) ? u : void 0;
}
export { LSs, tLn };

//# sourceMappingURL=chunk-z0xq7hyq.js.map
