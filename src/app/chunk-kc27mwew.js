// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, J } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { te } from "./chunk-4kxznmzw.js";
import { i, Zn } from "./chunk-cj37hmns.js";
import { Ko } from "./chunk-cjnzngfc.js";
var l = [
    "runner_prep_total_ms",
    "runner_prep_git_proxy_config_ms",
    "runner_prep_reset_remote_ms",
    "runner_prep_outcome_branch_ms",
    "runner_prep_repo_settings_ms",
    "runner_prep_config_seed_ms",
    "runner_prep_remote_refetch_ms"
  ],
  h = {
    prewarm_vda_outcome: !0,
    prewarm_stat_outcome: !0,
    prewarm_idx_outcome: !0,
    prefetch_phase: !0,
    prefetch_phase_reason: !0
  },
  f = /^[a-z0-9_]{1,32}$/,
  _ = 604800,
  d = {
    prewarm_vda_elapsed_s: _,
    prewarm_stat_elapsed_s: _,
    prefetch_runs: 1e4,
    prefetch_ok: 1e4,
    prefetch_last_ok_age_s: _,
    prefetch_last_duration_s: _,
    prefetch_midx: 1e4,
    git_have_age_s: _,
    git_pack_count: 1e4,
    standby_idle_s: _,
    healthz_claim_visible_ms: 600000
  },
  k = 3600000,
  S = 600000,
  g = new Set(l);
function y(e) {
  return Object.hasOwn(h, e);
}
function b(e) {
  return Object.hasOwn(d, e);
}
function R(e) {
  return g.has(e);
}
function w(e) {
  return !1;
}
function u(e, t) {
  if (typeof e !== "number" || !Number.isFinite(e)) return;
  let n = Math.round(e);
  return n < 0 ? void 0 : Math.min(n, t);
}
function m(e, t) {
  let n = Object.hasOwn(e, t) ? Reflect.get(e, t) : void 0;
  return typeof n === "object" && n !== null ? n : void 0;
}
function F(e) {
  if (typeof e !== "object" || e === null) return;
  let t = {};
  for (let [s, o] of Object.entries(m(e, "fields") ?? {}))
    if (y(s)) {
      if (typeof o === "string" && f.test(o)) t[s] = o;
    } else if (b(s)) {
      let a = u(o, d[s]);
      if (a !== void 0) t[s] = a;
    }
  let n = {};
  for (let [s, o] of Object.entries(m(e, "phases") ?? {}))
    if (R(s)) {
      let a = u(o, k);
      if (a !== void 0) n[s] = a;
    } else if (w(s)) {
      let a = u(o, S);
      if (a !== void 0) n[s] = a;
    }
  if (Object.keys(t).length === 0 && Object.keys(n).length === 0) return;
  return { fields: t, phases: n };
}
var v = 8192;
function c(e) {
  if (!e || e.length > v) return;
  try {
    return F(te(e));
  } catch {
    return;
  }
}
class p {
  phases = {};
  phaseStarts = {};
  warmSpareClaimed = !1;
  hydratePrefetchSettledAt = void 0;
  resumeHydratePrefetch = void 0;
  resumeHydrateOnDiskBytes = void 0;
  resumeHydrateCcrBytes = void 0;
  resumeHydrateCcrEvents = void 0;
  resumeHydrateDeltaEvents = void 0;
  resumeHydrateDeltaFetchAttempted = void 0;
  resumeHydrateAnchorWalkback = void 0;
  resumeTranscriptScan = void 0;
  pluginFullLoads = 0;
  userContextBuilds = 0;
  sdkMcpDialRuns = 0;
  sdkMcpServersDialed = 0;
  flagFetchKick = void 0;
  flagFetchKickJudgedAtMs = void 0;
  warmWakeEarlyFetch = void 0;
  kickOnWarmCache = void 0;
  hooksInitSource = void 0;
  resumeHooksWaitShadow = void 0;
  pluginsSyncRound = void 0;
  flagFetchWaitedMs = 0;
  hooksInitWaitGivenUp = !1;
  consumed = !1;
  apiRequestSentFromSpawnMs = void 0;
  apiRequestSentFromSpawnConsumed = !1;
  recordPhase(e, t, n) {
    if (this.consumed) return;
    if (e === "skills_load_ms" && this.phases[e] !== void 0) return;
    if (e === "hooks_init_ms" && this.hooksInitWaitGivenUp) return;
    if (((this.phases[e] = Math.round(t)), n !== void 0)) this.phaseStarts[e] = Math.round(n);
  }
  recordHooksInitWait(e, t) {
    (this.recordPhase("hooks_init_ms", e, t), (this.hooksInitWaitGivenUp = !0));
  }
  getRecordedPhase(e) {
    return this.phases[e];
  }
  recordSpawnToExec() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase(
      "spawn_to_exec_ms",
      Date.now() - process.uptime() * 1000 - e,
      e - performance.timeOrigin
    );
  }
  markWarmSpareClaimed() {
    this.warmSpareClaimed = !0;
  }
  markFlagFetchKick(e) {
    ((this.flagFetchKick = e), (this.flagFetchKickJudgedAtMs = Math.round(performance.now())));
  }
  getFlagFetchKick() {
    return this.flagFetchKick;
  }
  markWarmCacheKickAsks(e) {
    ((this.warmWakeEarlyFetch = e),
      (this.kickOnWarmCache = i.CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE));
  }
  markHooksInitSource(e) {
    this.hooksInitSource = e;
  }
  markResumeHooksWaitShadow(e) {
    this.resumeHooksWaitShadow = e;
  }
  markPluginsSyncRound(e, t) {
    this.pluginsSyncRound = { round: e, maySend: t };
  }
  noteFlagFetchWait(e) {
    this.flagFetchWaitedMs += e;
  }
  getFlagFetchWaitedMs() {
    return this.flagFetchWaitedMs;
  }
  noteSdkMcpDial(e) {
    if (e <= 0) return;
    (this.sdkMcpDialRuns++, (this.sdkMcpServersDialed += e));
  }
  notePluginFullLoad() {
    if (this.consumed) return;
    this.pluginFullLoads++;
  }
  noteUserContextBuild() {
    if (this.consumed) return;
    this.userContextBuilds++;
  }
  wasWarmSpareClaimed() {
    return this.warmSpareClaimed;
  }
  markHydratePrefetchSettled() {
    this.hydratePrefetchSettledAt = performance.now();
  }
  markResumeHydratePrefetch(e, t) {
    this.resumeHydratePrefetch =
      e === null
        ? "miss"
        : this.hydratePrefetchSettledAt !== void 0 && this.hydratePrefetchSettledAt < t
          ? "hit"
          : "pending";
  }
  markResumeHydrateDelta(e, t, n, s, o, a) {
    ((this.resumeHydrateOnDiskBytes = e),
      (this.resumeHydrateCcrBytes = t),
      (this.resumeHydrateCcrEvents = n),
      (this.resumeHydrateDeltaEvents = s),
      (this.resumeHydrateDeltaFetchAttempted = o),
      (this.resumeHydrateAnchorWalkback = a));
  }
  markResumeTranscriptScan(e) {
    if (this.resumeTranscriptScan !== void 0) return;
    ((this.resumeTranscriptScan = e),
      this.recordPhase("resume_transcript_scan_ms", e.scanMs, e.scanStartMs));
  }
  recordFirstMessageReadFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase(
      "first_message_read_from_spawn_ms",
      Date.now() - e,
      e - performance.timeOrigin
    );
  }
  recordInputReadyFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("input_ready_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
  }
  consume() {
    if (!i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_EMIT_STARTUP_TIMING) return;
    if (this.consumed || Object.keys(this.phases).length === 0) return;
    this.consumed = !0;
    let e = c(Zn.CCR_RUNNER_STARTUP_TIMING),
      t = !J();
    return {
      ...e?.fields,
      entrypoint: i.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
      warm_spare_claimed: this.warmSpareClaimed,
      resume_hydrate_prefetch: this.resumeHydratePrefetch,
      resume_hydrate_on_disk_bytes: this.resumeHydrateOnDiskBytes,
      resume_hydrate_ccr_bytes: this.resumeHydrateCcrBytes,
      resume_hydrate_ccr_events: this.resumeHydrateCcrEvents,
      resume_hydrate_delta_events: this.resumeHydrateDeltaEvents,
      resume_hydrate_delta_fetch_attempted: this.resumeHydrateDeltaFetchAttempted,
      resume_hydrate_anchor_walkback: this.resumeHydrateAnchorWalkback,
      resume_transcript_bytes: this.resumeTranscriptScan?.bytes,
      resume_transcript_kept_bytes: this.resumeTranscriptScan?.keptBytes,
      resume_transcript_earlier_metadata_bytes: this.resumeTranscriptScan?.earlierMetadataBytes,
      resume_transcript_boundary: this.resumeTranscriptScan?.boundary,
      resume_transcript_tool_copy_chars: this.resumeTranscriptScan?.toolCopyChars,
      prewarm_vda: Zn.CCR_PREWARM_VDA,
      prewarm_stat: Zn.CCR_PREWARM_STAT,
      delta_reset: Zn.CCR_DELTA_RESET,
      prefetch_network: Zn.CCR_PREFETCH_NETWORK,
      plugin_full_loads: this.pluginFullLoads,
      user_context_builds: this.userContextBuilds,
      sdk_mcp_dial_runs: this.sdkMcpDialRuns,
      sdk_mcp_servers_dialed: this.sdkMcpServersDialed,
      flag_fetch_kick: this.flagFetchKick,
      flag_fetch_kick_judged_at_ms: t ? this.flagFetchKickJudgedAtMs : void 0,
      warm_wake_early_fetch: this.warmWakeEarlyFetch,
      kick_on_warm_cache: this.kickOnWarmCache,
      hooks_init_source: this.hooksInitSource,
      resume_hooks_wait_shadow: this.resumeHooksWaitShadow,
      plugins_sync_round: this.pluginsSyncRound?.maySend() ? this.pluginsSyncRound.round : void 0,
      phases: { ...e?.phases, ...(t ? this.phases : this.durations()) },
      ...(t && { time_origin_ms: performance.timeOrigin, phase_start_ms: { ...this.phaseStarts } })
    };
  }
  durations() {
    return Ko(this.phases, (e, t) => t !== "spawn_to_exec_ms" && this.phaseStarts[t] !== 0);
  }
  recordApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnMs !== void 0) return;
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.apiRequestSentFromSpawnMs = Date.now() - e;
  }
  consumeApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnConsumed || this.apiRequestSentFromSpawnMs === void 0) return;
    return (
      (this.apiRequestSentFromSpawnConsumed = !0),
      {
        ms: this.apiRequestSentFromSpawnMs,
        warmSpareClaimed: this.warmSpareClaimed,
        flagFetchKick: this.flagFetchKick,
        timeOriginMs: J() ? void 0 : performance.timeOrigin
      }
    );
  }
}
var Hzo = new W(() => new p());
function r() {
  return Hzo.of(U().host);
}
function Dr(e, t, n) {
  r().recordPhase(e, t, n);
}
function EQs(e, t) {
  r().recordHooksInitWait(e, t);
}
function yKe(e) {
  return r().getRecordedPhase(e);
}
function kQs() {
  r().recordSpawnToExec();
}
function B7n() {
  r().markWarmSpareClaimed();
}
function TQs() {
  r().notePluginFullLoad();
}
function AQs() {
  r().noteUserContextBuild();
}
function CQs() {
  return r().wasWarmSpareClaimed();
}
function RQs(e) {
  r().markFlagFetchKick(e);
}
function xQs() {
  return r().getFlagFetchKick();
}
function PQs(e) {
  r().markWarmCacheKickAsks(e);
}
function IQs(e) {
  r().markHooksInitSource(e);
}
function OQs(e) {
  r().markResumeHooksWaitShadow(e);
}
function MQs(e) {
  r().noteFlagFetchWait(e);
}
function DQs() {
  return r().getFlagFetchWaitedMs();
}
function HQs(e) {
  r().noteSdkMcpDial(e);
}
function LQs() {
  r().markHydratePrefetchSettled();
}
function NQs(e, t) {
  r().markResumeHydratePrefetch(e, t);
}
function $Qs(e) {
  r().markResumeTranscriptScan(e);
}
function FQs(e, t, n, s, o, a) {
  r().markResumeHydrateDelta(e, t, n, s, o, a);
}
function UQs() {
  r().recordFirstMessageReadFromSpawn();
}
function BQs() {
  r().recordInputReadyFromSpawn();
}
function jQs() {
  return r().consume();
}
function WQs() {
  r().recordApiRequestSentFromSpawn();
}
function GQs() {
  return r().consumeApiRequestSentFromSpawn();
}
export {
  Hzo,
  Dr,
  EQs,
  yKe,
  kQs,
  B7n,
  TQs,
  AQs,
  CQs,
  RQs,
  xQs,
  PQs,
  IQs,
  OQs,
  MQs,
  DQs,
  HQs,
  LQs,
  NQs,
  $Qs,
  FQs,
  UQs,
  BQs,
  jQs,
  WQs,
  GQs
};

//# sourceMappingURL=chunk-kc27mwew.js.map
