// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { iX } from "./chunk-nqsvrwdr.js";
class t {
  filterPolicy = void 0;
  dropNotifier = void 0;
  senderDropWriter = void 0;
  malformedConfigReported = !1;
  knownInboundRequestIds = new Set();
  knownOutboundRequestIds = new Set();
  automatedOutboundRequestIds = new Set();
  deviceOutboundRequestIds = new Set();
  elicitationOutboundRequestIds = new Set();
  hostAskOutboundRequestIds = new Set();
  resolvedPromptRequestIds = new Set();
  recentDropEventIds = new Set();
  commandDropNoticeWindow = { start: 0, count: 0 };
  messageDropNoticeWindow = { start: 0, count: 0 };
  reportedStrayDropCodes = new Set();
  reportedCloudWorkerCodes = new Set();
  clearWindowsForTesting() {
    (this.knownInboundRequestIds.clear(),
      this.knownOutboundRequestIds.clear(),
      this.automatedOutboundRequestIds.clear(),
      this.deviceOutboundRequestIds.clear(),
      this.elicitationOutboundRequestIds.clear(),
      this.hostAskOutboundRequestIds.clear(),
      this.resolvedPromptRequestIds.clear(),
      this.recentDropEventIds.clear(),
      (this.commandDropNoticeWindow.start = 0),
      (this.commandDropNoticeWindow.count = 0),
      (this.messageDropNoticeWindow.start = 0),
      (this.messageDropNoticeWindow.count = 0));
  }
  resetForTesting() {
    ((this.filterPolicy = void 0),
      (this.dropNotifier = void 0),
      (this.senderDropWriter = void 0),
      (this.malformedConfigReported = !1),
      this.clearWindowsForTesting(),
      this.reportedStrayDropCodes.clear(),
      this.reportedCloudWorkerCodes.clear());
  }
}
class r {
  outboundPeers = new Set();
  outboundPosts = new Set();
  subscriberStarted = !1;
  subscriberStopping = !1;
  liveSocket = null;
  enqueuePeerMessage = null;
  getCurrentMode = null;
  enqueueReceiveNotice = null;
  connectFailureStreak = null;
  outageWakeSent = !1;
  identity = null;
  identityResolved = null;
  identityFailedClosed = null;
}
class o {
  held = new Map();
  settled = [];
  reporter = void 0;
  sessionId = void 0;
  resetForTesting() {
    (this.held.clear(),
      (this.settled.length = 0),
      (this.reporter = void 0),
      (this.sessionId = void 0));
  }
}
class s {
  checkouts = null;
  baseRefs = null;
  onMetadataChanged = null;
  lastEmittedBranches = {};
  reset() {
    ((this.checkouts = null),
      (this.baseRefs = null),
      (this.onMetadataChanged = null),
      (this.lastEmittedBranches = {}));
  }
}
class i {
  attestation = new t();
  replHandle = null;
  sdkHostedHandle = null;
  projectFilesDoor = null;
  supervisedBridgeSession = null;
  peerIdentityKey = null;
  walkCredentialKey = null;
  retiredHandles = new WeakSet();
  lastReportedPermissionMode = void 0;
  lastKnownPermissionMode = void 0;
  lastReportedEffort = void 0;
  lastKnownEffort = void 0;
  lastReportedUltracodeActive = void 0;
  lastKnownUltracodeActive = void 0;
  lastKnownEffortRequestId = void 0;
  lastReportedModel = void 0;
  lastKnownModel = void 0;
  contextUsageMirror = void 0;
  tokenUsageMirror = void 0;
  lastReportedArtifacts = void 0;
  lastKnownArtifacts = void 0;
  artifactsEgressSuppressed = void 0;
  lastReportedCrossSessionInbound = void 0;
  lastKnownCrossSessionInbound = void 0;
  lastKnownPostTurnSummary = void 0;
  remoteEgressSuppressed = null;
  lastRateLimitMirror = void 0;
  dropSenderWriterByHandle = new WeakMap();
  antproto = new r();
  bridgeStateFramesGate = void 0;
  cseShimGate = void 0;
  placeholderWriteChain = Promise.resolve();
  placeholderSweepStarted = !1;
  rcActiveImpressionRecorded = !1;
  verboseRcActive = void 0;
  teleportedSessionIds = new Set();
  nameTagWriteChain = Promise.resolve();
  latestAppliedName = new Map();
  connectTimeName = new Map();
  diagnosticPolicyKick = void 0;
  bearerPlanFetch = void 0;
  remoteControlLockReason = void 0;
  uploadLimitTold = void 0;
  uploadResends = { underWay: 0, lastFailedAtMs: void 0 };
  imageScaleLock = iX();
  historySpoolDir = null;
  historyPrefetchEntries = new Map();
  repoCheckouts = new s();
  inboundReadReceipts = new o();
}
var BZo = new W(() => new i());
function mo() {
  return BZo.of(U().host);
}
function eYe(e) {
  if (!e.startsWith("cse_")) return e;
  return "session_" + e.slice(4);
}
var d = /^[a-zA-Z0-9_-]+$/;
function Fy(e, n) {
  if (!Q$(e)) throw Error(`Invalid ${n}: contains unsafe characters`);
  return e;
}
function Q$(e) {
  return e !== "" && d.test(e);
}
function Tkn(e) {
  return Q$(e) && !e.startsWith("-");
}
function jZo(e) {
  mo().cseShimGate = e;
}
function pf(e) {
  if (!e.startsWith("cse_")) return e;
  let n = mo().cseShimGate;
  if (n && !n()) return e;
  return eYe(e);
}
function BAt(e) {
  return `remote-${e.slice(-8)}`;
}
function Yl(e) {
  if (!e.startsWith("session_")) return e;
  return "cse_" + e.slice(8);
}
function Akn(e, n) {
  return e.startsWith("cse_") ? Yl(n) : pf(n);
}
function rr(e) {
  return e.replace(/^(?:session|cse)_/, "");
}
function m6(e) {
  return (e.startsWith("session_") || e.startsWith("cse_")) && Q$(e) && rr(e) !== "";
}
export { BZo, mo, eYe, Fy, Q$, Tkn, jZo, pf, BAt, Yl, Akn, rr, m6 };

//# sourceMappingURL=chunk-ak0cmk10.js.map
