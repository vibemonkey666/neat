import {
  fileURLToPath as __filePath_0589dc45be13a28a,
  URL as __filePath_0589dc45be13a28a_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
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
import { pt } from "./chunk-7c3thgax.js";
import { E9 } from "./chunk-ajtyjx88.js";
import { Ijn } from "./chunk-j0tbz6ra.js";
import { Ll } from "./chunk-wany0nxw.js";
import { zFt, jht } from "./chunk-6h7ejyet.js";
import { kOn } from "./chunk-pzx42hex.js";
import { kct } from "./chunk-whnycq3s.js";
function rae(t = {}) {
  let e = import.meta.require(
      __filePath_0589dc45be13a28a(
        new __filePath_0589dc45be13a28a_URL("./chunk-a2qqhkty.js", import.meta.url)
      )
    ),
    s = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return {
    sessionNoticesPoll: { pendingDeliveryUuids: [] },
    settings: pt(),
    tasks: {},
    transcripts: {},
    runningSubagents: 0,
    agentNameRegistry: new Map(),
    sendMessagePins: {},
    agentTypesInvokedThisSession: new Set(),
    verbose: !1,
    showMessageTimestamps: !1,
    mainLoopModel: null,
    mainLoopModelForSession: null,
    isBriefOnly: !1,
    slackTagConnected: !1,
    briefTranscript: !1,
    replBridgeEnabled: !1,
    replBridgeExplicit: !1,
    replBridgeOutboundOnly: !1,
    replBridgeSessionActive: !1,
    replBridgeSkipNextArchive: !1,
    replBridgeSessionGroupingId: void 0,
    toolPermissionContext: { ...Ll(), mode: s },
    attentionBudget: Ijn,
    proactivityLevel: zFt,
    agent: void 0,
    agentDefinitions: { activeAgents: [], allAgents: [] },
    fileHistory: { snapshots: [], trackedFiles: new Set(), snapshotSequence: 0 },
    attribution: jht(),
    mcp: {
      clientsInitialized: !1,
      clients: [],
      tools: [],
      commands: [],
      resources: {},
      resourceTemplates: {},
      suppressedClaudeAiConnectors: [],
      pluginReconnectKey: 0
    },
    plugins: {
      enabled: [],
      disabled: [],
      commands: [],
      errors: [],
      warnings: [],
      installationStatus: { marketplaces: [], plugins: [] },
      needsRefresh: !1
    },
    todos: {},
    queuedRemoteNotifications: {
      pending: [],
      drainedIds: [],
      nudge: null,
      readsThisTurn: [],
      readsDroppedThisTurn: 0,
      unfinishedReads: [],
      nudgeHeldUntil: { request: 0, cut: 0 }
    },
    prResolvedThisSession: !1,
    frameUrls: {},
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
    ultrareviewOverageConfirmed: !1,
    thinkingEnabled: E9(),
    promptSuggestionEnabled: t.promptSuggestionEnabled ?? kOn(),
    awaySummaryEnabled: kct(),
    displayedMessageContent: {},
    inbox: { messages: [] },
    pendingMemoryUpdates: [],
    pendingWorkerRequest: null,
    pendingSandboxRequest: null,
    promptSuggestion: { status: "empty" },
    taskSummary: null,
    initialMessage: null,
    sessionEffort: { kind: "inherit" },
    settingsEffortTable: { default: void 0, legacyUserEffort: void 0, byModel: {} },
    ultracode: void 0,
    cacheMissAckedAtOutputTokens: -1,
    fastMode: !1,
    storedImagePaths: new Map(),
    imageDescriptions: new Map(),
    classifierApprovals: { approvals: new Map(), checking: new Set() },
    teammateColors: { assignments: new Map(), index: 0 },
    webBrowser: import.meta
      .require(
        __filePath_0589dc45be13a28a(
          new __filePath_0589dc45be13a28a_URL("./chunk-t4f6va07.js", import.meta.url)
        )
      )
      .getDefaultWebBrowserState()
  };
}
export { rae };

//# sourceMappingURL=chunk-c5v3q13y.js.map
