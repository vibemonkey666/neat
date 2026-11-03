// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { U, Wr } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { AB } from "./chunk-ewvf3tep.js";
import { Fn } from "./chunk-dvghjmtr.js";
var d = "cli";
class r {
  bundledSkills = [];
  bundledSkillKillSwitchSurvivors = new Set();
  bundledSkillSessionResetHooks = [];
  bundledSkillsInitialized = !1;
  shippedTablesFillFailed = !1;
  bundledSkillFilesElsewhere = void 0;
  commandsOffHere = void 0;
  attachedFolderSkills = void 0;
  builtinToolsServedByMcp = void 0;
  builtinCommandTable = void 0;
  builtinCommandNames = void 0;
  shippedCommandNames = void 0;
  loadedCommands = new Map();
  skillToolCommands = new Map();
  slashCommandToolSkills = new Map();
  skillIndex = new Map();
  reservedSpellingsByLoadedResult = new WeakMap();
  loadedResultsMissingTrustedNames = new WeakSet();
  skillDirCommands = new Map();
  dynamicSkillStates = new Map();
  dynamicSkillStateKey = () => d;
  dynamicSkillsLoaded = De();
  skillsChanged = De();
  isAnnouncingFreshLoad = !1;
  shadowedBundledSkills = void 0;
  fallbackShadowTelemetryLogged = new Set();
  skillContentIntern = new Map();
  skillFiles = new WeakMap();
  builtinPlugins = new Map();
  builtinPluginsInitialized = !1;
  builtinPluginFailures = new Map();
  builtinPluginWiredSkills = new WeakMap();
  bundledWorkflows = [];
  markdownFiles = new Map();
  markdownScansGivenUp = 0;
  agentDefinitions = new Map();
  projectAgentsElsewhere = [];
  namesNotShown = new Set();
  realSkillRootByCommand = new WeakMap();
  projectOutputStylesElsewhere = [];
  outputStyleDirStyles = new Map();
  allOutputStyles = new Map();
  routines = new Map();
  routineCronTasks = new Map();
  allWorkflows = new Map();
  reservedSpellingsFor(e, t) {
    let n = this.reservedSpellingsByLoadedResult.get(e);
    if (n) return n;
    let l = t();
    return (this.reservedSpellingsByLoadedResult.set(e, l), l);
  }
  refusedReservedSkillNames() {
    return Array.from(
      this.dynamicSkillStates.get(this.dynamicSkillStateKey())?.refusedReservedNames.values() ?? []
    );
  }
  markLoadedResultMissingTrustedNames(e) {
    this.loadedResultsMissingTrustedNames.add(e);
  }
  loadedResultIsMissingTrustedNames(e) {
    return this.loadedResultsMissingTrustedNames.has(e);
  }
  clearLoadCaches() {
    (this.invalidateCommands(),
      this.skillDirCommands.clear(),
      this.markdownFiles.clear(),
      this.agentDefinitions.clear(),
      this.outputStyleDirStyles.clear(),
      this.allOutputStyles.clear(),
      this.routines.clear(),
      this.routineCronTasks.clear(),
      this.allWorkflows.clear(),
      this.namesNotShown.clear());
  }
  invalidateCommands() {
    ((this.builtinCommandTable = void 0),
      (this.builtinCommandNames = void 0),
      (this.shippedCommandNames = void 0),
      this.loadedCommands.clear(),
      this.skillToolCommands.clear(),
      this.slashCommandToolSkills.clear(),
      this.skillIndex.clear());
  }
  invalidateSkillDirs() {
    this.skillDirCommands.clear();
    let e = this.dynamicSkillStates.get(this.dynamicSkillStateKey());
    if (e) (e.conditionalSkills.clear(), e.activatedConditionalSkillNames.clear());
  }
  evictDynamicSkillState(e) {
    this.dynamicSkillStates.delete(e);
    let t = `${e}:`;
    for (let n of [...this.skillDirCommands.keys()])
      if (n.startsWith(t)) this.skillDirCommands.delete(n);
  }
}
function Koe(e, t, n) {
  let l = e.get(t);
  if (l !== void 0) return l;
  let s = n();
  return (e.set(t, s), s);
}
function Voe(e) {
  return e ?? "\x00";
}
var m = new W(() => new r());
function br() {
  return m.of(U().host);
}
function a() {
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return !1;
  return !Fn();
}
function Rsi() {
  return i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !i.CLAUDE_CODE_BYOC_ENABLE_DATADOG;
}
function o() {
  return i.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0;
}
function sSn() {
  return !AB() && !o();
}
function c_() {
  return AB() || a() || Wr() !== null || o();
}
function nor() {
  return a() || Wr() !== null || o();
}
function zoe() {
  return i.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL;
}
function N5() {
  if (zoe()) return !1;
  return AB();
}
export { Rsi, sSn, c_, nor, zoe, N5, Koe, Voe, br };

//# sourceMappingURL=chunk-wejdb0zs.js.map
