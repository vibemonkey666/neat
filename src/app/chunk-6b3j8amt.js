// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { Ps } from "./chunk-5b88xb0z.js";
import { ve } from "./chunk-vk5p9xv3.js";
var t = {
  notice: null,
  shownLoggedForDraftId: null,
  promptedCount: 0,
  sessionDraftCount: 0,
  seededFromDisk: !1,
  seedStarted: !1,
  toolCallCount: 0
};
class n {
  autoDenyPresence = De();
  mainLoopBusy = Ps({ busy: !1 });
  blockingToolProgress = Ps({ active: !1 });
  dialogHostUnmounted = Ps({ unmounted: !1 });
  onScreenBlockingDialog = Ps({ surfaceMounted: !1, kind: null });
  headerGauge = Ps({ mounts: 0 });
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = De();
  feedbackNotice = Ps(t);
  clawdEntranceTaken = !1;
  startupUpdateSummary = void 0;
  experimentEnrollmentsUnseen = void 0;
  orgMemoryWritesRowSeen = !1;
  orgMemoryReadRowSeen = !1;
  remoteHomeSettingsRowSeen = !1;
  configRowsSeen = new Set();
  configRowNotices = new Map();
}
var Da = ve(new n(), (o) => {
  (o.configRowsSeen.clear(),
    o.configRowNotices.clear(),
    o.mainLoopBusy.setState((e) => (e.busy ? { busy: !1 } : e)),
    o.headerGauge.setState((e) => (e.mounts === 0 ? e : { mounts: 0 })));
});
export { Da };

//# sourceMappingURL=chunk-6b3j8amt.js.map
