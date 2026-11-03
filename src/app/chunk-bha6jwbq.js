// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { XA, Ll } from "./chunk-wany0nxw.js";
import { xo, rk, iot } from "./chunk-5rw2zfa0.js";
import { N0 } from "./chunk-63a6mqbs.js";
import { ej } from "./chunk-39ayby14.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { o, M, oe, T, u, Ue, $e, Cv, me, eSe, B, A } from "./chunk-0bqrj5ah.js";
import { hq } from "./chunk-tezcm8zk.js";
var g = 524288,
  z = {
    mode: "serialized",
    additionalWorkingDirectories: "serialized",
    trustedNetworkDirectories: "serialized",
    alwaysAllowRules: "serialized",
    alwaysDenyRules: "serialized",
    alwaysAskRules: "serialized",
    strippedDangerousRules: "serialized",
    prePlanMode: "serialized",
    modeBeforeRewrite: "serialized",
    restricted: "serialized_as_restriction",
    blockReadsOutsideWorkingDirectories: "serialized_as_restriction",
    bashCommandClamps: "serialized_as_restriction",
    toolAliases: "serialized_as_restriction",
    servedCall: "set_by_deserialize",
    sandboxAutoAllowSuspended: "set_by_deserialize",
    callerClassifiesWebCalls: "not_serialized",
    chromeClassifierFloorEnabled: "not_serialized",
    chromeNavigationClassifierEnabled: "not_serialized",
    chromeClickClassifierEnabled: "not_serialized",
    chromeHostToolAsksEnabled: "not_serialized",
    canAutoClassifierRun: "not_serialized",
    proactivityBaseline: "not_serialized",
    startupModeDecidedByProactivityLevel: "not_serialized",
    isAutoModeAvailable: "not_serialized",
    isBypassPermissionsModeAvailable: "not_serialized",
    shouldAvoidPermissionPrompts: "not_serialized",
    awaitAutomatedChecksBeforeDialog: "not_serialized",
    mcpPermissionModeOverrides: "not_serialized",
    mcpAskForTools: "not_serialized",
    builtInToolsDisabled: "not_serialized",
    toolsKeptByLaunchList: "not_serialized",
    pollEventDeliveryGuard: "not_serialized",
    turnDisallowedTools: "not_serialized",
    toolsHeldUntilAPersonTypes: "not_serialized",
    isRemoteMode: "not_serialized",
    remoteBrowserCardAnswers: "not_serialized"
  },
  _ = {
    restricted: !1,
    blockReadsOutsideWorkingDirectories: !1,
    bashCommandClamps: [],
    toolAliases: {}
  },
  m = Object.keys(_),
  H = Object.entries(z).flatMap(([e, s]) => (s === "serialized" ? [e] : []));
var d = p(() => B(N0)),
  y = p(() => B(ej)),
  a = p(() => o().min(1)),
  n = p(() => eSe(y(), T(o()))),
  ewe = 4096,
  lQr = p(() =>
    o()
      .max(ewe)
      .refine((e) => e.startsWith("/") && !e.includes("\x00"))
  ),
  f = p(() => $e([A(!1), Cv([]), Ue({})])),
  S = p(() =>
    u({
      restricted: M(),
      blockReadsOutsideWorkingDirectories: M(),
      bashCommandClamps: T(T(o())),
      toolAliases: me(a(), a())
    }).catchall(f())
  );
function dQr(e) {
  let s = mn(e) ? e.restrictions : void 0;
  return mn(s) && Object.values(xo(s, m)).some((t) => !f().safeParse(t).success);
}
function c({ $map: e }) {
  return new Set(e.map(([s]) => s)).size === e.length;
}
var R = p(() =>
    Ue({
      mode: d(),
      additionalWorkingDirectories: Ue({ $map: T(Cv([lQr(), Ue({ path: o(), source: y() })])) })
        .refine(c)
        .refine(({ $map: e }) => e.every(([s, { path: t }]) => s === t)),
      trustedNetworkDirectories: Ue({ $map: T(Cv([a(), T(a())])) })
        .refine(c)
        .optional(),
      alwaysAllowRules: n(),
      alwaysDenyRules: n(),
      alwaysAskRules: n(),
      strippedDangerousRules: n().optional(),
      prePlanMode: d().optional(),
      modeBeforeRewrite: d().optional(),
      restrictions: S()
    })
  ),
  D2 = p(() =>
    oe().transform((e, s) => {
      let t = R().safeParse(e),
        r = t.success
          ? Object.entries(mn(e) ? e : {})
              .filter(([i, l]) => i === "__proto__" || iot(l))
              .map(([i]) => ({ path: [i], message: "a key named __proto__" }))
          : t.error.issues;
      return (
        s.issues.push(
          ...r
            .slice(0, 1)
            .map(({ path: i, message: l }) => ({ code: "custom", path: i, message: l, input: e }))
        ),
        t.success && r.length === 0 ? t.data : hq
      );
    })
  );
function H2(e) {
  return e !== void 0 && XA(e) > g;
}
function jis(e) {
  let { restrictions: s, additionalWorkingDirectories: t, trustedNetworkDirectories: r, ...i } = e;
  return {
    ...Ll(),
    ...i,
    additionalWorkingDirectories: new Map(t.$map),
    ...(r && { trustedNetworkDirectories: new Map(r.$map) }),
    ...rk(s, m),
    servedCall: !0,
    sandboxAutoAllowSuspended: !0
  };
}
export { ewe, lQr, dQr, D2, H2, jis };

//# sourceMappingURL=chunk-bha6jwbq.js.map
