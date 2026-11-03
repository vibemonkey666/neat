// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { T_ } from "./chunk-6bbdndfe.js";
import { q } from "./chunk-wrtp8qz8.js";
import { g, m } from "./chunk-brszmkb3.js";
import { re } from "./chunk-a16y5hcz.js";
import { pYt, t } from "./chunk-4kxznmzw.js";
import { ur } from "./chunk-t86k189s.js";
import { $j } from "./chunk-jwqtbev0.js";
import { Jsi } from "./chunk-vchq4g74.js";
import { Rt } from "./chunk-wany0nxw.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { Yu, Tn } from "./chunk-yyq6mj0n.js";
import { IO } from "./chunk-bydv9c9r.js";
import { XGe, U5n } from "./chunk-taha171j.js";
import { WA } from "./chunk-s4n2rnah.js";
import { NT, Kb } from "./chunk-eacq4pgt.js";
var S = 50;
function obr(o) {
  let s = pYt(o, S),
    e = re(s, S);
  return e.length < s.length ? `${e}...` : e;
}
function b(o, s) {
  if (s) return "plan";
  if (o === "plan" || o === "dontAsk") return "default";
  return o;
}
async function Jlo(o, s) {
  let { name: e, teamName: d, prompt: I, color: k, planModeRequired: l, model: w } = o,
    { taskRegistry: A } = s,
    r = $j(e, d),
    c = NT("in_process_teammate"),
    f = o.resumableAgentId ?? T_(e);
  t(`[spawnInProcessTeammate] Spawning ${r} (taskId: ${c})`);
  try {
    let n = ur(),
      a = q(),
      P = {
        agentId: r,
        agentName: e,
        teamName: d,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        resumableAgentId: f
      },
      C = Jsi({
        agentId: r,
        agentName: e,
        teamName: d,
        color: k,
        planModeRequired: l,
        parentSessionId: a,
        hasTaskListTools: IO() && s.rootToolSurface.tools.some((p) => Rt(p, WA)),
        abortController: n
      });
    if (XGe()) U5n(r, e, a);
    let M = o.description || obr(I),
      _ = {
        ...Kb(c, "in_process_teammate", M, s.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: P,
        spawnedWith: o.spawnedWith,
        prompt: o.shownPrompt ?? I,
        model: w,
        abortController: n,
        awaitingPlanApproval: !1,
        permissionMode: o.permissionMode ?? b(ae(s).mode, l),
        isIdle: !1,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: []
      };
    A.register(_);
    let y = s.getAppState(),
      i = y.agentNameRegistry.get(e);
    if (i !== f) {
      let p = i !== void 0 ? y.tasks[i] : void 0,
        T =
          i !== void 0 &&
          (p?.status === "running" ||
            Tn(p) ||
            Object.values(y.tasks).some(
              (u) => Yu(u) && u.status === "running" && u.identity.resumableAgentId === i
            ))
            ? s.agentLifecycle.allocateName(e)
            : e;
      if (T !== e)
        t(
          `[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${T}" instead`
        );
      s.agentLifecycle.registerName(T, f);
    }
    return (
      t(`[spawnInProcessTeammate] Registered ${r} in AppState`),
      g("swarm_in_process_spawn"),
      { ok: !0, agentId: r, identity: P, taskId: c, abortController: n, teammateContext: C }
    );
  } catch (n) {
    let a = n instanceof Error ? n.message : "Unknown error during spawn";
    return (
      t(`[spawnInProcessTeammate] Failed to spawn ${r}: ${a}`),
      m("swarm_in_process_spawn", "spawn_failed"),
      { ok: !1, agentId: r, error: a }
    );
  }
}
export { obr, Jlo };

//# sourceMappingURL=chunk-92nmes7n.js.map
