// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xEe, KSo, VSo, qSo } from "./chunk-2nwr73hs.js";
import { xco } from "./chunk-vaw9tryj.js";
import { Vgo } from "./chunk-7cs9rhng.js";
import { UTs } from "./chunk-gnqwtd1z.js";
function uSr(t) {
  t((e) => (e.ultrareviewOverageConfirmed ? e : { ...e, ultrareviewOverageConfirmed: !0 }));
}
function s(t) {
  return (e) => t((o) => ({ ...o, pendingMemoryUpdates: [...o.pendingMemoryUpdates, e] }));
}
function n(t) {
  t((e) => (e.prResolvedThisSession ? e : { ...e, prResolvedThisSession: !0 }));
}
function qHn(t) {
  let e = (o) =>
    t((r) => {
      let i = typeof o === "function" ? o(r.toolPermissionContext) : o;
      return r.toolPermissionContext === i ? r : { ...r, toolPermissionContext: i };
    });
  return { setToolPermissionContext: e, setSessionToolPermissionContext: e };
}
function bct(t, e) {
  return {
    markPrResolvedThisSession: () => n(e),
    isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed,
    markUltrareviewOverageConfirmed: () => uSr(e),
    getAdvisorSetting: () => t().advisorModel,
    getMcp: () => t().mcp,
    getProactivityLevel: () => t().proactivityLevel,
    getWebBrowser: () => t().webBrowser,
    ...qHn(e),
    setWebBrowserSlice: Vgo(e),
    setArtifactReadVersion: KSo(e),
    getArtifactReadObservation: xEe(t),
    artifactRegistries: xco(t, e),
    setArtifactContractTarget: VSo(e),
    getArtifactContractTarget: qSo(t),
    enqueuePendingMemoryUpdate: s(e),
    agentLifecycle: UTs(t, e)
  };
}
export { uSr, qHn, bct };

//# sourceMappingURL=chunk-tyq990zt.js.map
