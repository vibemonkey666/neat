// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ZTs } from "./chunk-njg1cdnf.js";
import { Kgo } from "./chunk-7cs9rhng.js";
import {
  C$n,
  R$n,
  x$n,
  rZt,
  oZt,
  sZt,
  iZt,
  P$n,
  I$n,
  O$n,
  M$n,
  D$n,
  H$n,
  Aut
} from "./chunk-wvspnf75.js";
var o = Object.freeze({}),
  i = Object.freeze({}),
  E$n = {
    bagelActive: void 0,
    bagelUrl: void 0,
    bagelPanelVisible: void 0,
    computerUseMcpState: void 0,
    denialTracking: void 0,
    activeGoal: void 0,
    remoteAutocompactState: void 0,
    queuedGoalOrigin: void 0,
    frameOpenFailedPath: null,
    frameOpenFailedSeen: !1,
    artifactWatchApproved: !1,
    artifactDbWriteApproved: !1,
    artifactDbWriteHumanApproved: !1,
    artifactDbReadConsentSlugs: R$n,
    artifactDbReadHumanConsentSlugs: x$n,
    artifactReadConsentSlugs: rZt,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: P$n,
    artifactAssetUploadHumanConsentSlugs: I$n,
    artifactAssetReadConsentSlugs: oZt,
    artifactAssetReadHumanConsentSlugs: sZt,
    artifactOutsideOrgConsentSlugs: iZt,
    artifactHandlersReadConsentSlugs: O$n,
    artifactHandlersReadHumanConsentSlugs: M$n,
    artifactHandlersWriteConsentSlugs: D$n,
    artifactHandlersWriteHumanConsentSlugs: H$n,
    artifactRoomJoinConsentSlugs: Aut,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: C$n,
    prResolvedThisSession: !1,
    ultrareviewOverageConfirmed: !1,
    artifactReadVersions: o,
    artifactReadObservers: i
  },
  s = {
    artifactReadConsentSlugs: rZt,
    artifactAssetReadConsentSlugs: oZt,
    artifactAssetReadHumanConsentSlugs: sZt,
    artifactOutsideOrgConsentSlugs: iZt
  },
  _ = Object.keys(s);
function k$n(e) {
  return _.every((t) => e[t] === s[t]) ? e : { ...e, ...s };
}
var T = Object.keys(E$n);
function T$n(e) {
  let t = e.webBrowser,
    r = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0,
    n = ZTs(e.workshopTelemetry),
    S =
      Object.keys(e.artifactReadVersions ?? {}).length === 0 &&
      Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (
    r &&
    n === e.workshopTelemetry &&
    S &&
    T.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === E$n[a])
  )
    return e;
  return {
    ...e,
    ...E$n,
    ...(n !== e.workshopTelemetry && { workshopTelemetry: n }),
    webBrowser: r ? t : { ...Kgo(), cleanupRegistered: t.cleanupRegistered }
  };
}
function A$n(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun)
    return (Bun.WebView.closeAll(), !0);
  return !1;
}
export { E$n, k$n, T$n, A$n };

//# sourceMappingURL=chunk-3bmk6ayz.js.map
