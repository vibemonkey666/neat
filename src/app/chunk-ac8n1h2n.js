// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Rp, vTn, J, Il, Pn, jM, zc } from "./chunk-wrtp8qz8.js";
import { N } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { ql, Qli, Xx } from "./chunk-5rw2zfa0.js";
import { l } from "./chunk-ewvf3tep.js";
import { JQn, aJs, Bm, Aw, fJs, Rce } from "./chunk-hhgrzgnb.js";
import { ort } from "./chunk-at88wjsn.js";
import { g0, Ki, snt, QO, Dh, Cti, st, fd, fEt, wue, pEt, Z2t, Cs } from "./chunk-ajtyjx88.js";
import { Yfn, c1r, _bt } from "./chunk-bbw420pv.js";
import { r5 } from "./chunk-96sx3c3k.js";
import { V8n, q8n, bAe, uUo } from "./chunk-r5xsp8d0.js";
import { dIs, aG, YGn, XGn, HJ, vD, TE, lLs, HAo, q2n, Wle, ZJ, rhe } from "./chunk-j0tbz6ra.js";
import { nXs } from "./chunk-wany0nxw.js";
import { ag } from "./chunk-krgv9fvy.js";
import { mQs } from "./chunk-p27rr8yn.js";
import { nDe } from "./chunk-f7aya6cs.js";
import { Cx } from "./chunk-h2tyaevk.js";
import { Df, dLr, vy, cLr, lht, lQ, lFt } from "./chunk-yyq6mj0n.js";
import { pKe, FGr, aCe } from "./chunk-fh50nzzj.js";
import { Xze, kye } from "./chunk-07aq7e5p.js";
import { bO } from "./chunk-fnsjs1v2.js";
import { y8e } from "./chunk-dx5awfq0.js";
import { f4, _L } from "./chunk-25j20xpc.js";
import { uBn } from "./chunk-97te5na4.js";
import { qvr } from "./chunk-m59vztgd.js";
import { kdt } from "./chunk-bw3pf5r1.js";
import { t$n } from "./chunk-p6e9mq3q.js";
import { Zft, Zae } from "./chunk-astq50qw.js";
import { XT } from "./chunk-2mkstff3.js";
import { o, u } from "./chunk-0bqrj5ah.js";
function ano(e) {
  return e !== "requesting" && bAe();
}
function E() {
  return !ZJ() && !Wle();
}
function p8t(e) {
  if (
    e.type === "system" &&
    "subtype" in e &&
    e.subtype === "status" &&
    "compact_error" in e &&
    e.compact_error !== void 0 &&
    !E()
  )
    return { ...e, compact_error: void 0 };
  return e;
}
function Tlt({ status: e, permissionMode: i, compactResult: a, compactError: r }) {
  try {
    if (!ano(e)) return;
    Ki({
      type: "system",
      subtype: "status",
      status: e,
      ...(i !== void 0 && { permissionMode: i }),
      ...(a !== void 0 && { compact_result: a }),
      ...(r !== void 0 && E() && { compact_error: r })
    });
  } catch (d) {
    l(d);
  }
}
function jus(e) {
  try {
    if (!zc() || !uUo()) return;
    if (rhe(e.event)) return;
    Ki({
      type: "stream_event",
      event: e.event,
      parent_tool_use_id: null,
      ...(e.ttftMs !== void 0 && { ttft_ms: e.ttftMs })
    });
  } catch (i) {
    l(i);
  }
}
function Wmr(e, i) {
  let a = Object.keys(e),
    r = Object.keys(i);
  if (a.length !== r.length) return !1;
  for (let d = 0; d < r.length; d++) {
    let M = r[d];
    if (M === void 0 || M !== a[d]) return !1;
    let g = e[M],
      c = i[M];
    if (g === c) continue;
    if (g === void 0 || c === void 0) return !1;
    for (let m of Object.keys(c))
      if (m !== "progress" && (!Object.hasOwn(g, m) || g[m] !== c[m])) return !1;
    for (let m of Object.keys(g)) if (m !== "progress" && !Object.hasOwn(c, m)) return !1;
  }
  return !0;
}
function A() {
  if (J() || !Cs()) return;
  (Cx(), qvr());
}
var x = u({
  status_category: o(),
  status_detail: o(),
  needs_action: o(),
  recent_action: o().optional(),
  description: o().optional(),
  reply: o().optional()
});
function F(e) {
  return (i) => {
    let a = i.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let d = Xx(e.permission_mode);
      if ((ort(d), d === "bypassPermissions" && (XT() || !a.isBypassPermissionsModeAvailable)))
        (t(
          "[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'",
          { level: "warn" }
        ),
          (d = "default"));
      try {
        if (((a = { ..._L(a.mode, d, a), mode: d }), d === "auto")) a = f4(a);
      } catch (M) {
        t(
          `[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${d}': ${N(M).message}`
        );
      }
    }
    let r = x.safeParse(e.post_turn_summary);
    return {
      ...i,
      toolPermissionContext: a,
      ...(typeof e.is_ultraplan_mode === "boolean" && { isUltraplanMode: e.is_ultraplan_mode }),
      ...(r.success && { postTurnSummary: r.data })
    };
  };
}
function R(e) {
  let i = e.session_allow_rules;
  if (!Array.isArray(i)) return (r) => r;
  if (ag()) return (r) => r;
  let a = nXs(i.filter((r) => typeof r === "string" && !r.startsWith("mcp__")));
  if (a.length === 0) return (r) => r;
  return (r) => ({
    ...r,
    toolPermissionContext: {
      ...r.toolPermissionContext,
      alwaysAllowRules: { ...r.toolPermissionContext.alwaysAllowRules, session: a }
    }
  });
}
function Wus(e) {
  return (i) => F(e.external ?? {})(R(e.internal ?? {})(i));
}
function YPn({ newState: e, oldState: i }, a, r, d, M) {
  let g = i.toolPermissionContext.mode,
    c = e.toolPermissionContext.mode,
    m = e.proactivityLevel !== i.proactivityLevel;
  if (g !== c) {
    let n = ql(g),
      s = ql(c);
    if (n !== s) {
      let p = Qli({
          rule: "first-entry",
          prevMode: g,
          newMode: c,
          prevUltraplan: i.isUltraplanMode,
          newUltraplan: e.isUltraplanMode
        }),
        f = p.is_ultraplan_mode;
      if ((r?.notifyMetadataChanged(p), r?.isWorkerPermissionModeRecordEnabled))
        r.notifyInternalMetadataChanged({ worker_permission_mode: s });
      if ((Xze(c, f), !r)) Tlt({ status: null, permissionMode: s });
    }
    (r?.notifyPermissionModeChanged(c), _bt(c));
  } else if (m) r?.notifyProactivityLevelChanged();
  if (g !== c || m) {
    if (
      (bO(
        "--permission-mode",
        ["--inherit-permission-mode"],
        HJ(c, e.proactivityLevel, vD(e.toolPermissionContext)),
        void 0,
        d
      ),
      m)
    )
      bO("--proactivity", [], e.proactivityLevel, void 0, d);
  }
  if (e.toolPermissionContext !== i.toolPermissionContext) mQs();
  if (
    e.toolPermissionContext.isBypassPermissionsModeAvailable !==
      i.toolPermissionContext.isBypassPermissionsModeAvailable &&
    c1r()?.permissionMode
  )
    Yfn({ bypassPermissionsAvailable: e.toolPermissionContext.isBypassPermissionsModeAvailable });
  if (
    e.toolPermissionContext.additionalWorkingDirectories !==
      i.toolPermissionContext.additionalWorkingDirectories &&
    uBn(e.toolPermissionContext)
  )
    import("./chunk-43z4gqzg.js")
      .then((n) => n.mcpClientModule().notifyMcpRootsListChanged())
      .catch((n) => {
        t(`Failed to notify MCP servers of roots change: ${N(n).message}`);
      });
  if (e.tasks !== i.tasks) {
    let n = Wmr(i.tasks, e.tasks);
    if (r) {
      let s = {};
      if (!n) {
        let y = b(e);
        if (!C(b(i), y)) s.running_background_tasks = y;
        if (kdt()) {
          let h = P(e);
          if (!C(P(i), h)) s.running_foreground_agents = h;
        }
      }
      let p = r.resumableOrphanedAgents,
        f = p.filter((y) => !Object.hasOwn(e.tasks, y.task_id));
      if (f.length !== p.length)
        ((r.resumableOrphanedAgents = f), (s.resumable_orphaned_agents = f));
      if (Object.keys(s).length > 0) r.notifyInternalMetadataChanged(s);
    }
    if (!n) {
      let s = k(i),
        p = k(e);
      if (
        s.length !== p.length ||
        p.some(
          (f, y) =>
            f.task_id !== s[y]?.task_id ||
            f.description !== s[y]?.description ||
            f.parent_task_id !== s[y]?.parent_task_id ||
            f.ambient !== s[y]?.ambient ||
            f.awaited !== s[y]?.awaited
        )
      )
        Ki({ type: "system", subtype: "background_tasks_changed", tasks: p });
    }
  }
  let T = i.toolPermissionContext.alwaysAllowRules.session,
    v = e.toolPermissionContext.alwaysAllowRules.session;
  if (T !== v) {
    let n = v?.filter((s) => !s.startsWith("mcp__"));
    r?.notifyInternalMetadataChanged({ session_allow_rules: n?.length ? n : null });
  }
  if (
    e.mainLoopModel !== i.mainLoopModel ||
    e.mainLoopModelForSession !== i.mainLoopModelForSession ||
    e.toolPermissionContext.mode !== i.toolPermissionContext.mode
  ) {
    let n = lLs(a);
    try {
      let s = TE(i),
        p = TE(e);
      if (s !== p) {
        if (
          (nDe(["seven_day_overage_included"]),
          e.mainLoopModel !== i.mainLoopModel ||
            e.mainLoopModelForSession !== i.mainLoopModelForSession)
        )
          dIs(a.host, s, p);
        if (!Pn())
          HAo(a, { fromModel: s, toModel: p, requestedModel: n.requestedModel, source: n.source });
        aJs(p);
      }
    } catch (s) {
      l(N(s));
    }
  }
  if (e.mainLoopModel !== i.mainLoopModel) {
    let n = e.mainLoopModel,
      s = V8n(() => Rp(n)),
      p = st();
    try {
      kye(p);
    } catch (f) {
      l(N(f));
    }
    (Zae(p, e),
      y8e(),
      q2n(a.precompute),
      q8n(d, M, s),
      r?.notifyMetadataChanged({ model: n ?? fd() }),
      bO("--model", ["-m"], n, void 0, d));
  }
  if (e.fotwClaim?.phase === "granted" && i.fotwClaim?.phase !== "granted") y8e();
  if (!Rce(e.sessionEffort, i.sessionEffort) || e.settingsEffortTable !== i.settingsEffortTable)
    vTn({ sessionEffort: e.sessionEffort, settingsEffortTable: e.settingsEffortTable });
  if (!Rce(e.sessionEffort, i.sessionEffort)) {
    JQn();
    let n = r?.ultracodeActivePatch(Bm(e.ultracode, st()));
    (r?.notifyMetadataChanged({ effort_level: fJs(e.sessionEffort), ...n }), Zae(st(), e));
    let s = e.sessionEffort;
    if (s.kind !== "level") bO("--effort", [], null, void 0, d);
    else if (typeof s.value === "string" && Aw(s.value)) bO("--effort", [], s.value, void 0, d);
  }
  if (e.fastMode !== i.fastMode) D(e.fastMode === !0, d);
  if (e.mainLoopModelForSession !== i.mainLoopModelForSession) {
    let n = st();
    try {
      kye(n);
    } catch (s) {
      l(N(s));
    }
    if (
      (Zae(n, e),
      snt() &&
        (e.mainLoopModelForSession === null || e.mainLoopModelForSession === void 0) &&
        i.mainLoopModelForSession !== null &&
        i.mainLoopModelForSession !== void 0 &&
        e.mainLoopModel === i.mainLoopModel)
    )
      (Rp(e.mainLoopModel), r?.notifyMetadataChanged({ model: e.mainLoopModel ?? fd() }));
  }
  if (e.advisorModel !== i.advisorModel) bO("--advisor", [], e.advisorModel ?? null, void 0, d);
  if (r && e.frameUrls !== i.frameUrls) {
    let n = aCe(),
      s = Il() ? FGr() : pKe(),
      p = YGn(e.frameUrls)
        .map(([, f]) => f)
        .filter((f) => (f.mcpPublishedHere === !0 ? s : n));
    if (p.length > 0 || (n && aG(i.frameUrls).length > 0))
      r.notifyMetadataChanged({ artifacts: p.length === 0 ? null : p.map(XGn) });
  }
  if (r && !B(e.activeGoal, i.activeGoal)) {
    let n = e.activeGoal;
    if ((r.notifyActiveGoalChanged(n), n)) {
      let { tokens_at_start: s, ...p } = lno(n);
      r.notifyMetadataChanged({ goal: { ...p, last_reason: p.last_reason ?? null, met: !1 } });
    } else r.notifyMetadataChanged({ goal: null });
  }
  if (
    r &&
    (e.autoCompactWindow !== i.autoCompactWindow ||
      e.mainLoopModel !== i.mainLoopModel ||
      e.mainLoopModelForSession !== i.mainLoopModelForSession ||
      e.settings !== i.settings)
  )
    r.notifyAutocompactInputsChanged();
  if (e.verbose !== i.verbose) r5("verbose", e.verbose, d);
  if (e.settings !== i.settings) {
    try {
      if ((fEt(), wue(), pEt(), Z2t(), e.settings.env !== i.settings.env)) A();
    } catch (n) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${N(n).message}`, {
        level: "error"
      });
    }
    if (e.settings.outputStyle !== i.settings.outputStyle) jM("output_style");
  }
  if (
    e.ultracode !== i.ultracode ||
    e.mainLoopModel !== i.mainLoopModel ||
    e.mainLoopModelForSession !== i.mainLoopModelForSession ||
    e.settings !== i.settings
  ) {
    let n = Bm(e.ultracode, st());
    (r?.notifyUltracodeActive(n), Zft({ ultracodeActive: n }));
  }
}
function I(e, i) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let a = e.agentId !== void 0 ? i[e.agentId] : void 0;
  return a !== void 0 && Df(a);
}
function L(e) {
  return {
    agent_type: e.agentType,
    ...(e.selectedAgent && { is_built_in: e.selectedAgent.source === "built-in" }),
    forked_skill: e.forkedSkillName !== void 0,
    main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === void 0,
    default_launch: e.cwd === void 0 && e.launchedWithDefaults === !0
  };
}
function b(e) {
  return Object.values(e.tasks)
    .filter(
      (i) =>
        vy(i) &&
        !Df(i) &&
        (i.type === "local_bash" ||
          i.type === "monitor_mcp" ||
          i.type === "monitor_ws" ||
          i.type === "local_agent" ||
          i.type === "local_workflow")
    )
    .map((i) => ({
      task_id: i.id,
      task_type: i.type,
      description: i.description,
      ...((i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws") &&
        i.agentId !== void 0 && { owner_agent_id: i.agentId }),
      ...(i.type === "local_bash" && i.kind !== void 0 && { shell_kind: i.kind }),
      ...(i.type === "monitor_ws" && i.ambient && { ambient: !0 }),
      ...(i.type === "local_agent" && { ...L(i), run_id: g0(i.id) }),
      ...(I(i, e.tasks) && { observer_owned: !0 })
    }));
}
function C(e, i) {
  return e.length === i.length && i.every((a, r) => a.task_id === e[r]?.task_id);
}
function P(e) {
  return Object.values(e.tasks).flatMap((i) =>
    i.type === "local_agent" &&
    i.status === "running" &&
    i.isBackgrounded === !1 &&
    i.directCall === !0 &&
    i.toolUseId !== void 0 &&
    i.spawnDepth === 1 &&
    i.parentAgentId === void 0
      ? [
          {
            task_id: i.id,
            task_type: i.type,
            description: i.description,
            tool_use_id: i.toolUseId,
            ...L(i)
          }
        ]
      : []
  );
}
var O = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];
function lno(e) {
  return {
    condition: e.condition,
    iterations: e.iterations,
    set_at: e.setAt,
    tokens_at_start: e.tokensAtStart,
    ...(e.lastReason !== void 0 && { last_reason: e.lastReason })
  };
}
function B(e, i) {
  if (e === i) return !0;
  if (e === void 0 || i === void 0) return !1;
  return O.every((a) => e[a] === i[a]);
}
function k(e) {
  return Object.values(e.tasks)
    .filter((i) => vy(i) && !Df(i) && !lht(i))
    .map((i) => ({
      task_id: i.id,
      run_id: g0(i.id),
      task_type: i.type,
      subagent_type: lFt(i),
      description: i.description,
      parent_task_id: dLr(i, e.tasks),
      ...(lQ(i) && { ambient: !0 }),
      ...(cLr(i) && { awaited: !0 })
    }));
}
function D(e, i) {
  if (!e && (!Dh(st()) || QO(st()) !== null || Cti())) return;
  t$n(e, i);
}
function m8t(e) {
  Ki({ type: "system", subtype: "background_tasks_changed", tasks: k(e) });
}
function Gus(e, i, a) {
  e.settleUltracodeActive(Bm(i, st()), a);
}
export { ano, p8t, Tlt, jus, Wmr, Wus, YPn, lno, m8t, Gus };

//# sourceMappingURL=chunk-ac8n1h2n.js.map
