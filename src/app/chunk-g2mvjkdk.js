// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Ps } from "./chunk-5b88xb0z.js";
var Qer = Object.freeze({
  open: Object.freeze([]),
  unplaced: Object.freeze([]),
  asked: Object.freeze([]),
  shownId: null,
  focusedId: null,
  focusRequest: null,
  placements: 0,
  closing: Object.freeze([])
});
var lqo = () => ({
  values: Ps(new Map()),
  readers: new Map(),
  readersOf: new Map(),
  mounted: new Map(),
  folds: {
    steady: { stale: new Set(), lastAt: Number.NEGATIVE_INFINITY, pending: void 0 },
    live: { stale: new Set(), lastAt: Number.NEGATIVE_INFINITY, pending: void 0 }
  },
  staleListeners: new Set(),
  faultRuns: new Map(),
  bumps: 0,
  versionFloor: 0
});
var dqo = () => ({ pending: void 0, pausedAt: void 0 });
function s() {
  return {
    pluginLoad: void 0,
    pluginLoadArm: void 0,
    pluginLoadCacheOnly: void 0,
    pluginLoadCacheOnlyArm: void 0,
    pluginLoadMarks: new WeakMap(),
    commands: void 0,
    skills: void 0,
    skillsV5: void 0,
    agents: void 0,
    handedIn: void 0,
    outputStyles: void 0,
    workflows: void 0,
    hookRegistration: void 0,
    organizationAsk: {
      isHeld: !1,
      isWaited: !1,
      isTold: !1,
      startHooksWait: void 0,
      isBoundSpent: !1,
      hasHeld: !1,
      isCommandHeld: !1,
      heldReresolve: null,
      isMarketplaceHeld: !1,
      asking: null,
      answerWait: null
    },
    admissionText: null,
    isJudgedAgainTold: !1,
    hookModulesAwaitTrust: !1,
    hookRegistrationInFlight: void 0,
    hookRegistrationsInFlight: new Set(),
    hooksLoadAtStartup: void 0,
    hookRegistrationOwed: !1,
    hooksUnknownCause: void 0,
    hookRegistrationRanBlind: !1,
    pluginsWithHooks: new Set(),
    folderReadAt: new Map(),
    hookRegistrationEpoch: 0,
    hookSwapEpoch: 0,
    hooksModulesSwitchRead: void 0,
    hooksModulesSwitchFollowing: void 0,
    hooksModulesSwitchRereading: void 0,
    hooksModulesWakeBound: "ahead",
    organizationsStatusLoad: void 0,
    unlatchedAbsentManagedIds: new Set(),
    hooksLeftOutByName: [],
    hooksLeftOutByNameChanged: De(),
    hookRegistrationEnded: De(),
    hookRegistrationArgs: void 0,
    hookHotReloadUnsubscribe: void 0,
    hooksModulesSwitchUnwatch: void 0,
    hookHotReloadSettingsSnapshot: void 0,
    hookHotReloadTierSnapshot: void 0,
    hooksRespawns: new Set(),
    loadedModules: [],
    moduleSeats: new Map(),
    notices: Ps(new Map()),
    openCalls: new Map(),
    withheldCalls: new Set(),
    withheldWatches: new Map(),
    spawnProvenance: new Map(),
    unnamedSteered: new Set(),
    registeredAgents: new Map(),
    renderVersions: Ps(new Map()),
    panes: Ps(Qer),
    pluginState: lqo(),
    toastClock: dqo(),
    hoverGroups: Ps(new Map()),
    scrollSites: new Map(),
    focusSites: new Map(),
    focusSiteDraws: De(),
    mountedRasters: new Map(),
    mountedImages: new Map(),
    rasterAdmission: void 0,
    uiLogSink: null,
    pendingUiLog: [],
    armedMonitorKeys: new Set(),
    hooksPassedBy: new Map(),
    marketplaces: new Map(),
    marketplaceRefreshesInFlight: new Map(),
    marketplaceHelperMemo: new Map(),
    addDirMarketplacesMemo: void 0,
    headlessInstallPass: void 0,
    installedPluginsMigrated: !1,
    installedPluginsFile: null,
    installedPluginsEpoch: 0,
    recordSpellingsCounted: !1,
    recordSpellingFallbackReported: !1,
    installedPluginsSnapshot: null,
    optionValues: new Map(),
    flaggedPlugins: null,
    orphanedVersionGlobExclusions: null,
    recentActivity: [],
    pluginActivityFeatures: new Map(),
    autoUpdateListener: null,
    commandSourceReresolve: null,
    pendingAutoUpdateNotification: null,
    ownInUseMarkerPaths: new Set(),
    ownInUseMarkerHandles: new Map(),
    commandProducerDirsDenied: new Set(),
    commandProducerDirsScannedAt: 0,
    commandProducerDirsComparable: null,
    commandProducerDirsNeedCanonicalCandidate: !1,
    commandProducerDirsWslProviderUndeterminable: !1,
    commandProducerDirsChanged: De(),
    denyJoinedPluginRoot: void 0,
    sandboxBringUp: void 0,
    inUseMarkerCleanup: void 0,
    vouchedManagedPluginIds: new Set(),
    hintedPluginIds: new Set(),
    seenHintPluginIds: new Set(),
    gitAvailable: void 0,
    operatorDeclaredMemo: void 0,
    marketplaceResolutionNoticesLogged: new Set(),
    marketplaceAdmissionVerdicts: new Map(),
    hiddenRegistryEntries: { raw: new Map(), v5: new Map() },
    releasedRegistryEntries: { raw: new Set(), v5: new Set() },
    cacheRootComparableMemo: void 0,
    provenLocalRoots: new Map(),
    wslProviderOfPluginsRootMemo: void 0,
    inlinePluginRootsComparableMemo: void 0
  };
}
class n {
  registry = s();
}
var a = new W(() => new n());
function r() {
  return a.of(U().host);
}
function Ie() {
  return r().registry;
}
function bei(e) {
  return Ie().registeredAgents.has(e);
}
function Zer() {
  return Ie().pluginLoadCacheOnly;
}
function etr() {
  Ie().commands = void 0;
}
function nVr() {
  let e = Ie();
  ((e.skills = void 0), (e.skillsV5 = void 0));
}
function Ivt() {
  Ie().agents = void 0;
}
function ttr() {
  Ie().outputStyles = void 0;
}
function $yn() {
  Ie().workflows = void 0;
}
export { Qer, lqo, dqo, Ie, bei, Zer, etr, nVr, Ivt, ttr, $yn };

//# sourceMappingURL=chunk-g2mvjkdk.js.map
