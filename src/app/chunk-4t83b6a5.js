// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { e_e, vLe, mGr } from "./chunk-hhgrzgnb.js";
import { wN, _L } from "./chunk-25j20xpc.js";
import { dHs, vD } from "./chunk-j0tbz6ra.js";
import { Ubs } from "./chunk-dnz9fns2.js";
import { J2, PJt } from "./chunk-20f936eh.js";
function $do(o, e, { trigger: n, offerBypass: s = !0 } = {}) {
  let t = Fdo(o, e, { offerBypass: s });
  return { level: o, currentMode: e.mode, nextMode: t, context: _L(e.mode, t, e, n) };
}
function Fdo(o, e, { offerBypass: n = !0 } = {}) {
  let s = mGr() !== void 0,
    t = e.mode === "plan" ? (e.prePlanMode ?? "plan") : e.mode,
    i = e_e(
      o,
      {
        isAutoModeAvailable: J2(e),
        isBypassPermissionsModeAvailable: n && PJt(e) && (!s || t === "bypassPermissions")
      },
      e.proactivityBaseline?.mode
    ),
    r = e.proactivityBaseline?.mode,
    d = i === "acceptEdits" && r === "acceptEdits" ? r : vD(e) ? void 0 : t;
  return vLe(o, i, d) === void 0 ? i : "default";
}
function Lbs(o, e, n, { offerBypass: s = !0 } = {}) {
  let t;
  if (
    (e((i) => {
      if (i.proactivityLevel === o) return i;
      let r = $do(o, i.toolPermissionContext, { offerBypass: s });
      return (
        (t = {
          from: i.proactivityLevel,
          toMode: r.nextMode,
          modeChanged: r.nextMode !== r.currentMode
        }),
        {
          ...i,
          proactivityLevel: o,
          toolPermissionContext: {
            ...r.context,
            mode: r.nextMode,
            startupModeDecidedByProactivityLevel: void 0
          }
        }
      );
    }),
    t === void 0)
  )
    return;
  if (
    (m(o, n, { source: "sdk_host", from: t.from, toMode: t.toMode }),
    t.modeChanged || dHs(t.from, o))
  )
    setImmediate(() => {
      wN.emit();
    });
}
function m(o, e, { source: n, from: s, toMode: t }) {
  (Ubs(o, e),
    a("tengu_proactivity_cycle", { level: c(o), from: c(s), to_mode: c(t), source: c(n) }),
    g("proactivity_cycle"));
}
export { $do, Fdo, Lbs };

//# sourceMappingURL=chunk-4t83b6a5.js.map
