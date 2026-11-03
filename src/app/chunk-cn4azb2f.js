// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { U, q } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { OCe, hqo, lti, wt, st, bVe, b_n, F_e, Xe, ug, k, Wn, nd, Pbn } from "./chunk-ajtyjx88.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { p } from "./chunk-qmkm2x59.js";
import { Plr } from "./chunk-4nzy53ma.js";
import { mS, U9o, bu } from "./chunk-dvghjmtr.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { ELe } from "./chunk-5bd63sq9.js";
import { Ot, nk, $n, Tc, H0 } from "./chunk-ya7n419k.js";
import { o, T } from "./chunk-0bqrj5ah.js";
var B = "tengu_fennel_godwit";
function KQn(e) {
  if (e === void 0) return !1;
  if (mS(Xe(e), "opus_5_prompt_bundle", e) !== !0) return !1;
  return !k(B, !1);
}
function m(e) {
  return !Plr() && mS(e, "opus_5_5_prompt_bundle") === !0;
}
var I = new Set([
    "turn_updates",
    "bash_output_audience_note",
    "silent_turn_reminder",
    "thinking_display_updates"
  ]),
  v = new Set(["bison_cairn", "larch_cistern"]),
  G = new Set(["silent_turn_reminder", "quizzical_shore"]),
  z = 64,
  H = "tengu_model_capability_from_client_data",
  S = "tengu_model_capability_off_from_client_data";
function S$(e, n, r, l) {
  if (l !== void 0) return l;
  let s = mS(n, e, r);
  if (s !== void 0) return s;
  let d = (I.has(e) && ELe(n)) || (v.has(e) && KQn(r)) || (G.has(e) && m(n)),
    u = Pbn(r);
  if (d) {
    if (u?.data?.[e] !== !1) return !0;
    return (b(S, e, u), !1);
  }
  if (u?.data?.[e] !== !0) return !1;
  return (b(H, e, u), !0);
}
function BXs(e, n, r) {
  let l = U9o(n);
  return [...(hqo(r, n) ?? []), ...l.keys()]
    .findLast((s) => s.startsWith(e) && l.get(s) !== !1)
    ?.slice(e.length);
}
function b(e, n, r) {
  let l = r.model ?? $n(st()),
    s = (Lo().clientDataCapabilityLogged ??= new Map()),
    d = q(),
    u = s.get(d);
  if (u === void 0) {
    if (((u = new Set()), s.set(d, u), s.size > z)) {
      let C = s.keys().next().value;
      if (C !== void 0) s.delete(C);
    }
  }
  let _ = `${e === S ? "-" : ""}${n}:${l}`;
  if (!u.has(_)) (u.add(_), a(e, { capability: c(n), model: wt(l) }));
}
function V(e, n) {
  if (Y() !== e) return !1;
  return S$("per_turn_effort", e, n);
}
function Y() {
  try {
    return Xe(st());
  } catch {
    return null;
  }
}
lti(V);
function jXs(e) {
  return !1;
}
function hgn(e) {
  return Ot(e) === "claude-opus-4-8";
}
function WXs(e) {
  return !1;
}
var j = new Set([
  "claude-opus-4-6",
  "claude-haiku-4-5",
  "claude-opus-4-5",
  "claude-opus-4-1",
  "claude-opus-4-0",
  "claude-sonnet-4-5",
  "claude-sonnet-4-0",
  "claude-3-7-sonnet",
  "claude-3-5-sonnet",
  "claude-3-5-haiku"
]);
function y(e) {
  return j.has(Ot(e));
}
function ygn(e, n) {
  if (n === void 0) return y(e);
  return n.model !== void 0 && y(n.model);
}
function SLe(e) {
  return /-eap($|\[)/i.test(e);
}
var F = "tengu_loggia_roster",
  M = [],
  K = p(() => T(o().trim())),
  h;
function Z() {
  let e = k(F, M),
    n = h;
  if (n !== void 0 && n.raw === e) return n.ids;
  let r = K().safeParse(e);
  if (!r.success)
    t(`GrowthBook: ${F} is not a JSON array of model ids; treating it as empty`, { level: "warn" });
  let l = r.success ? r.data : M;
  return ((h = { raw: e, ids: l }), l);
}
function cGr(e) {
  return Z().some((n) => nk(e, n));
}
function Ace(e) {
  let n = f();
  return OCe() ? n.leanRewriteCompiledOnly(e) : n.leanRewrite(e);
}
function sz(e) {
  return e.leanRewrite ?? Ace(e.model);
}
function O(e) {
  if (e === void 0) return !1;
  let n = Xe(e),
    r = mS(n, "temporal_hare", e);
  if (r === !1) return !1;
  if (OCe()) return r === !0 && iz(e);
  if (!(r === !0 || Pbn(e)?.data?.temporal_hare === !0))
    return b_n(e) && iz(e) && Wn("tengu_temporal_hare", !1) === !0;
  if (!iz(e)) return !1;
  return S$("temporal_hare", n, e);
}
function N(e, n) {
  let r = nd()?.[e];
  return (
    typeof r === "object" &&
    r !== null &&
    Object.entries(r).some(([l, s]) => s === !0 && n.includes(l))
  );
}
function GXs(e) {
  return i.CLAUDE_CODE_BASALT_COVE || N("basalt_cove", e);
}
var x = "tengu_thrifty_sonic";
function J() {
  let e = f();
  return OCe() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment();
}
function A() {
  let e = Yre(st()),
    n = Xe(e),
    r = mS(n, "thrifty_sonic", e);
  if (r === !1) return "none";
  if (ELe(n) || m(n) || nd()?.[x] === !0 || r) return "forced";
  return bVe(e) ? "cohort" : "none";
}
function _gn() {
  if (i.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return i.CLAUDE_CODE_THRIFTY_SONIC;
  switch (J()) {
    case "forced":
      return !0;
    case "none":
      return !1;
    case "cohort":
      return k(x, !1);
  }
}
var L = "tengu_cozy_teapot";
function P(e) {
  return e === "strict" || e === "relaxed" ? e : void 0;
}
function zXs() {
  return i.CLAUDE_CODE_COZY_TEAPOT ?? f().bashFirstSteerVariant();
}
function Q() {
  return P(nd()?.[L]) ?? (m(Xe(Yre(st()))) ? "relaxed" : void 0) ?? P(Wn(L, null)) ?? "strict";
}
var X = "tengu_gorse_plover",
  E = "tengu_willow_tern";
function ee(e, n) {
  return e || nd()?.[n] === !0 || k(n, !1);
}
function KXs() {
  let e = Lo();
  return ((e.bashActFirstEnabled ??= ee(i.CLAUDE_CODE_GORSE_PLOVER, X)), e.bashActFirstEnabled);
}
function VXs(e) {
  return S$("amber_astrolabe", Xe(e), e, i.CLAUDE_CODE_AMBER_ASTROLABE || void 0);
}
function qXs(e) {
  return S$("bison_cairn", Xe(e), e, i.CLAUDE_CODE_BISON_CAIRN);
}
function YXs(e) {
  return S$("larch_cistern", Xe(e), e, i.CLAUDE_CODE_LARCH_CISTERN || void 0);
}
function pGo() {
  let e = nd()?.[E];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let n = f();
    if (!n.unusableWritingOverrideTold)
      ((n.unusableWritingOverrideTold = !0),
        t(`willow_tern: ignoring non-boolean clientData ${E} value of type ${typeof e}`));
  }
  return;
}
function XXs(e) {
  if (i.CLAUDE_CODE_WILLOW_TERN) return !0;
  let n = pGo();
  if (n !== void 0) return n;
  if (e === void 0) return !1;
  let r = Xe(e);
  if (ELe(r)) return !0;
  if (mS(r, "opus_5_prompt_bundle", e) !== !0) return !1;
  return k(E, !1);
}
function wLe() {
  return i.CLAUDE_CODE_SIMPLE;
}
function ne(e) {
  let n = Xe(e),
    r = mS(n, "lean_prompt", e);
  if (r !== void 0) return !r;
  if (SLe(e) || n === "claude-mythos-5") return !1;
  if (
    n.includes("claude-3-") ||
    n.includes("haiku") ||
    n.includes("sonnet") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-opus-4-5" ||
    n === "claude-opus-4-6" ||
    n === "claude-opus-4-7"
  )
    return !0;
  return !bu();
}
function iz(e) {
  let n = f();
  return OCe() ? n.leanPromptCompiledOnly(e) : n.leanPrompt(e);
}
function zO(e) {
  return e.leanPrompt ?? iz(e.model);
}
function R(e) {
  if (!e) return !1;
  if (Ne(i.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !0;
  if (is(i.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !1;
  if (!ne(e)) return !0;
  if (k("tengu_velvet_tide", !1)) return !0;
  return N("simple_system_prompt", Xe(e));
}
var te = "breezy_horizon";
function Yre(e) {
  if (e === void 0) return;
  let n = f();
  return OCe() ? n.modelForPromptCompiledOnly(e) : n.modelForPrompt(e);
}
function JXs(e) {
  let n = f().modelForPrompt;
  return n.cache.has(e) ? n(e) : void 0;
}
function D(e) {
  let n = i.CLAUDE_CODE_BREEZY_HORIZON;
  if (is(n)) return e;
  let r = ug(e),
    l = nd()?.[te],
    s =
      n ??
      (typeof l === "object" && l !== null
        ? Object.entries(l).find(([_]) => _ === r)?.[1]
        : void 0);
  if (s === void 0) return e;
  let d = n !== void 0 ? "env" : "client_data";
  if (typeof s !== "string" || !oe(s))
    return (
      t(`[breezy_horizon] ${d}: ignoring ${String(s)} for ${r}: not a model id`, { level: "warn" }),
      e
    );
  let u = ug(s);
  if (u === r) {
    if (!H0(Tc(s)))
      t(`[breezy_horizon] ${d}: ${s} names ${r} itself, so it maps nothing`, { level: "warn" });
    return e;
  }
  let g = f().promptModelSwapsLogged;
  if (!g.has(e))
    (g.add(e), a("tengu_breezy_horizon", { from_model: wt(r), to_model: wt(u), source: c(d) }));
  return s;
}
function oe(e) {
  return F_e(e) || (!/\s/.test(e) && SLe(e)) || H0(Tc(e));
}
class w {
  bashFirstSessionAssignment = Qr(A);
  bashFirstSessionAssignmentCompiledOnly = Qr(A);
  bashFirstSteerVariant = Qr(Q);
  leanPrompt = Qr(R);
  leanPromptCompiledOnly = Qr(R);
  modelForPrompt = Qr(D);
  modelForPromptCompiledOnly = Qr(D);
  leanRewrite = Qr(O);
  leanRewriteCompiledOnly = Qr(O);
  promptModelSwapsLogged = new Set();
  unusableWritingOverrideTold = !1;
}
var re = new W(() => new w());
function f() {
  return re.of(U().host);
}
export {
  KQn,
  S$,
  BXs,
  jXs,
  hgn,
  WXs,
  ygn,
  SLe,
  cGr,
  Ace,
  sz,
  GXs,
  _gn,
  zXs,
  KXs,
  VXs,
  qXs,
  YXs,
  pGo,
  XXs,
  wLe,
  iz,
  zO,
  Yre,
  JXs
};

//# sourceMappingURL=chunk-cn4azb2f.js.map
