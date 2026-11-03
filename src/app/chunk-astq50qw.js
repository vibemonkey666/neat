// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { m } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { mo } from "./chunk-ak0cmk10.js";
import {
  fGr,
  tH,
  Bm,
  QQn,
  ZQn,
  Aw,
  w7,
  r_e,
  sKe,
  twt,
  az,
  QA,
  Xre,
  rwt,
  t7n,
  Rce,
  ed,
  Cw,
  Egn,
  dGt
} from "./chunk-hhgrzgnb.js";
import { CBr } from "./chunk-r5xsp8d0.js";
function zme(e, r) {
  let o = Cw(e, r);
  return typeof o === "string" ? o : null;
}
function ljn(e, { model: r, getAppState: o, setAppState: s }) {
  if (!CBr())
    return (
      m("bridge_flag_settings", "disabled"),
      { ok: !1, error: "apply_flag_settings: effort changes over Remote Control are turned off" }
    );
  let f,
    n,
    d = !1;
  if ("effortLevel" in e && !ZQn(r, e.effortLevel, o())) {
    if (((d = !0), e.effortLevel != null)) {
      let u = az(e.effortLevel) ?? sKe(e.effortLevel);
      if (typeof u !== "string" || !Aw(u))
        return (
          m("bridge_flag_settings", "invalid_effort_level"),
          { ok: !1, error: "apply_flag_settings: unrecognized effortLevel" }
        );
      ((f = u), (n = w7(u, r)));
    }
    let p = QA();
    if (p !== void 0 && n !== p)
      return (
        m("bridge_flag_settings", "env_override"),
        {
          ok: !1,
          error: "apply_flag_settings: CLAUDE_CODE_EFFORT_LEVEL overrides effort for this session"
        }
      );
  }
  let c = r_e(e.effortLevel) === "ultracode",
    a = "ultracode" in e ? e.ultracode === !0 : void 0;
  if ((a === !0 || (a === void 0 && c)) && !tH(r))
    return (
      m("bridge_flag_settings", "ultracode_unavailable"),
      {
        ok: !1,
        error: `apply_flag_settings: ultracode is not available for this session (${tH() ? `${r} does not support it` : "dynamic workflows are off"})`
      }
    );
  s((p) => {
    let u = d && !c && QQn(r, p, f),
      i = p;
    if (d) {
      let g = rwt(n);
      if (!Rce(i.sessionEffort, g)) i = { ...i, sessionEffort: g };
    }
    if (a === void 0) {
      if (c) {
        if (!i.ultracode) i = { ...i, ultracode: !0 };
      } else if (u && i.ultracode) i = { ...i, ultracode: !1 };
    } else if ((i.ultracode ?? !1) !== a) i = { ...i, ultracode: a };
    return i;
  });
  let l = o();
  return (
    t(
      `[bridge] apply_flag_settings applied effort=${ed(l) ?? "auto"} ultracode=${l.ultracode === !0}`
    ),
    { ok: !0 }
  );
}
function ePs(e, { getAppState: r, setAppState: o, latch: s }) {
  let f = twt(e.trim()).level,
    n = f === void 0 ? void 0 : fGr(f);
  if (n === void 0) return { ok: !1, error: "unrecognized effort" };
  let d = r_e(f) === "ultracode",
    c = !d && s.seedSetUltracode;
  return (
    (s.seedSetUltracode = d),
    o((a) => {
      let l = a;
      if (!Rce(a.sessionEffort, Xre(n))) l = { ...l, sessionEffort: Xre(n) };
      if (d && !l.ultracode) l = { ...l, ultracode: !0 };
      else if (c && l.ultracode) l = { ...l, ultracode: !1 };
      return l;
    }),
    t(`[bridge] effort seeded effort=${ed(r()) ?? "auto"} ultracode=${r().ultracode === !0}`),
    { ok: !0 }
  );
}
function Zft({ level: e, ultracodeActive: r, requestId: o }) {
  let s = E();
  if (!s || !CBr()) return;
  let f = mo(),
    n = {};
  if (e !== void 0) {
    if (((f.lastKnownEffort = e), f.lastReportedEffort !== e))
      ((f.lastReportedEffort = e), (n.effort_level = e));
  }
  if (r !== void 0) {
    if (((f.lastKnownUltracodeActive = r), f.lastReportedUltracodeActive !== r))
      ((f.lastReportedUltracodeActive = r), (n.is_ultracode_active = r || null));
  }
  if (o !== void 0) ((f.lastKnownEffortRequestId = o), (n.effort_request_id = o));
  if (Object.keys(n).length > 0) s.reportMetadata(n);
}
function Zae(e, r) {
  if (!E()) return;
  let o = Egn(e, ed(r, e) ?? dGt(e));
  Zft({ level: o === void 0 ? null : zme(e, o), ultracodeActive: Bm(r.ultracode, e) });
}
function djn(e) {
  Zft({ requestId: t7n(e) });
}
function E() {
  let e = mo(),
    r = e.replHandle ?? e.sdkHostedHandle;
  return r && !r.outboundOnly ? r : null;
}
function tPs() {
  let e = mo();
  ((e.lastReportedEffort = void 0),
    (e.lastReportedUltracodeActive = void 0),
    Zft({
      level: e.lastKnownEffort,
      ultracodeActive: e.lastKnownUltracodeActive,
      requestId: e.lastKnownEffortRequestId
    }));
}
export { zme, ljn, ePs, Zft, Zae, djn, tPs };

//# sourceMappingURL=chunk-astq50qw.js.map
