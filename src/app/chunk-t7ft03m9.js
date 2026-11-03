// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ye, mT, oAn, OB, v6, dF, X_ } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { Qv } from "./chunk-5z6t3gwt.js";
import { Rt, tn } from "./chunk-wany0nxw.js";
import { ql, Xx } from "./chunk-5rw2zfa0.js";
import { wt, Tj } from "./chunk-ajtyjx88.js";
import { $j, cor } from "./chunk-jwqtbev0.js";
import { uM, fc } from "./chunk-vchq4g74.js";
import { ht, eH } from "./chunk-gdcb8skc.js";
import { _s } from "./chunk-hk4fpv24.js";
import { NS, w1o, Uk, fet } from "./chunk-1fnv3zry.js";
import { Ma } from "./chunk-znr3gw2p.js";
import { Vv, Ycn, Xcn } from "./chunk-bydv9c9r.js";
import { xce } from "./chunk-crvt0hax.js";
import { KEe, O4, JEe, $pt, $Wn, HJ, ob } from "./chunk-j0tbz6ra.js";
import { ns } from "./chunk-g82naabm.js";
import { Yu } from "./chunk-yyq6mj0n.js";
import { wFr } from "./chunk-7yq9w6fa.js";
import { XT } from "./chunk-2mkstff3.js";
import { ec } from "./chunk-nhj692ya.js";
import { Mn } from "./chunk-8gjxvrgz.js";
import { o, M, T, u, Ue, B } from "./chunk-0bqrj5ah.js";
function E(r, e, n) {
  e.update(r, (s) => ({
    ...s,
    awaitingPlanApproval: n !== null,
    pendingPlanApproval: n ? { requestId: n.requestId, answered: !1 } : void 0
  }));
}
function Vvs(r, e, n, s) {
  let l = n.get(r);
  if (!l || !Yu(l) || !l.awaitingPlanApproval) return null;
  switch (Ycn(l.pendingPlanApproval, e)) {
    case "mismatch":
      return (
        t(
          `[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(l.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`,
          { level: "warn" }
        ),
        f("plan_approval", "request_binding_mismatch"),
        E(r, n, null),
        Xcn(e)
      );
    case "unbound":
      f("plan_approval", "verdict_unbound");
      break;
    case "bound":
      g("plan_approval");
      break;
    case "already_answered":
      return null;
  }
  if (!e.approved) return (E(r, n, null), e);
  let h = H(e.permissionMode);
  return (
    n.update(r, (m) => ({
      ...m,
      awaitingPlanApproval: !1,
      pendingPlanApproval: void 0,
      permissionMode: h,
      planHeldAfterSpawn: !1
    })),
    wFr(l.identity.teamName, l.identity.agentName, h, s),
    e
  );
}
function H(r) {
  let e = ql(Xx(r ?? "default"));
  if (e === "bypassPermissions" && XT()) return "default";
  if (e === "auto" && !ob()) return "default";
  return e;
}
function b0n({
  recipientName: r,
  leaderMode: e,
  leaderAutoPickedByLevel: n,
  proactivityLevel: s,
  tasks: l
}) {
  let d = Object.values(l).some((m) => R(m, r)) ? e : HJ(e, s, n),
    h = ql(d);
  return h === "plan" ? "default" : h;
}
function qvs(r, e) {
  return Object.values(e).some(
    (n) =>
      Yu(n) &&
      n.status === "running" &&
      n.identity.agentName === r &&
      n.identity.planModeRequired &&
      !n.planHeldAfterSpawn
  );
}
function R(r, e) {
  return (
    Yu(r) &&
    r.status === "running" &&
    r.identity.agentName === e &&
    r.paneTeardown === void 0 &&
    r.identity.resumableAgentId !== void 0
  );
}
class I extends Error {
  constructor(r) {
    super(r);
    this.name = "PlanPreconditionError";
  }
}
function S0n(r) {
  if (!r || Tj() !== "default") return "";
  return `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${ht} tool (pass a \`name\`) to parallelize the work.`;
}
var j = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use ${ns} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${ns} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${ns} first, then use exit plan mode tool after clarifying the approach.
`,
  q = `Use this tool when you are in plan mode and your plan is ready for the user to approve.

- Pass the whole plan as \`plan\`, in Markdown. This session has no plan file, so do not write the plan to a file.
- The user sees the plan on an approval card and approves or declines it. Do NOT ask "Is this plan okay?" or "Should I proceed?" in any other way: that is what this tool does.
- If they approve, plan mode ends and you carry out the plan as approved.
- If they decline, you stay in plan mode: find out what they want changed, revise the plan, and call this tool again.
`;
var G = p(() =>
    u({
      tool: B(["Bash"]).describe("The tool this prompt applies to"),
      prompt: o().describe(
        'Semantic description of the action, e.g. "run tests", "install dependencies"'
      )
    })
  ),
  D = p(() =>
    Ue({ allowedPrompts: T(G()).optional().describe("Deprecated: no longer used.") }).passthrough()
  ),
  V = {
    type: "object",
    properties: {
      plan: { type: "string", description: "The whole plan, in Markdown, as the user will see it" }
    },
    required: ["plan"],
    additionalProperties: !1
  },
  z = 32768,
  $e = p(() =>
    D().extend({
      plan: o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),
      planFilePath: o().optional().describe("The plan file path (injected by normalizeToolInput)")
    })
  ),
  W = p(() =>
    u({
      plan: o().nullable().describe("The plan that was presented to the user"),
      isAgent: M(),
      filePath: o().optional().describe("The file path where the plan was saved"),
      hasTaskTool: M()
        .optional()
        .describe("Whether the Agent tool is available in the current context"),
      planWasEdited: M()
        .optional()
        .describe(
          "True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"
        ),
      awaitingLeaderApproval: M()
        .optional()
        .describe("When true, the teammate has sent a plan approval request to the team leader"),
      requestId: o().optional().describe("Unique identifier for the plan approval request")
    })
  );
function N(r) {
  if (r.teammateContext) return r.teammateContext;
  let e = uM();
  return e?.agentId && e.teamName ? e : void 0;
}
var e3 = tn({
  name: ec,
  searchHint: "present plan for approval and start coding (plan mode only)",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Prompts the user to exit plan mode and start coding";
  },
  async prompt() {
    return KEe() ? q : j;
  },
  get inputSchema() {
    return D();
  },
  get inputJSONSchema() {
    return KEe() ? V : void 0;
  },
  get outputSchema() {
    return W();
  },
  userFacingName() {
    return "";
  },
  shouldDefer: !0,
  isEnabled() {
    if (X_().length > 0 && ye()) return !1;
    if (ye() && !JEe(mT())) return !1;
    return !0;
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !1;
  },
  requiresUserInteraction() {
    if (fc()) return !1;
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create(r) {
    return {
      async validateInput(e) {
        let n = r;
        if (
          n.agentContext.agentType === "subagent" &&
          n.agentContext.isBuiltIn === !0 &&
          n.agentContext.subagentName === eH &&
          (N(n) || n.permissions().mode === "plan")
        )
          return {
            result: !1,
            message:
              "A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",
            errorCode: 2
          };
        if (N(n)) return { result: !0 };
        if (KEe() && n.agentId)
          return {
            result: !1,
            message:
              "Only the main conversation can ask for plan approval in this session. Give your plan in your final message.",
            errorCode: 3
          };
        let l = n.permissions().mode;
        if (l !== "plan")
          return (
            a("tengu_exit_plan_mode_called_outside_plan", {
              model: wt(n.mainLoopModel()),
              mode: c(l),
              hasExitedPlanModeInSession: oAn()
            }),
            {
              result: !1,
              message: `You are not in plan mode. To enter plan mode, call the ${Qv} tool first. If your plan was already approved, continue with implementation.`,
              errorCode: 1
            }
          );
        if (KEe()) {
          let d = "plan" in e ? e.plan : void 0;
          if (typeof d !== "string" || d.trim() === "" || Object.keys(e).length > 1)
            return {
              result: !1,
              message:
                "Pass the whole plan as non-empty text in the `plan` argument, and pass no other argument. This session has no plan file to read it from.",
              errorCode: 4
            };
          let h = Buffer.byteLength(_(e));
          if (h > z)
            return {
              result: !1,
              message: `The plan is ${h} bytes as JSON, over the ${z} that the user's approval card can carry. A quote, backslash or line break counts as two bytes, and a non-ASCII character as two to four. Shorten the plan and call this tool again.`,
              errorCode: 5
            };
        }
        return { result: !0 };
      },
      async checkPermissions(e) {
        if (N(r)) return { behavior: "allow", updatedInput: O4(ec, e) };
        return { behavior: "ask", message: "Exit plan mode?", updatedInput: e };
      },
      async call(e, { onProgress: n }) {
        let s = r,
          l = null,
          d = null;
        [l, d] = await Promise.all([import("./chunk-k4tty4ge.js"), import("./chunk-kxx6n2z6.js")]);
        let h = !!s.agentId,
          m = KEe(),
          v = "plan" in e && typeof e.plan === "string" ? e.plan : void 0;
        if (m && v === void 0)
          throw new I(
            "The approval arrived without the plan, so plan mode was not exited. Call this tool again with the whole plan in the `plan` argument."
          );
        let P = Uk(s.agentId);
        if (!m) NS(P);
        let x = v ?? (await fet(s.agentId, s.storageV5));
        if (v !== void 0 && P) (await w1o(P, v, s.storageV5), $pt(s.storageV5));
        let S = N(s),
          k = S ? Object.values(s.tasks() ?? {}).find((i) => R(i, S.agentName)) : void 0,
          L = s.teammateContext !== void 0 && s.permissions().mode === "plan";
        if (L && k === void 0)
          throw new I(
            "This teammate's task could not be found, so plan mode was not exited. Ask the lead to approve your plan."
          );
        let F = L && k?.permissionMode === "plan";
        if (S && (S.planModeRequired || F)) {
          if (!x)
            throw new I(
              `No plan file found at ${P}. Please write your plan to this file before calling ExitPlanMode.`
            );
          let { agentName: i, teamName: w } = S,
            b = cor("plan_approval", $j(i, w || "default")),
            A = {
              type: "plan_approval_request",
              from: i,
              timestamp: new Date().toISOString(),
              planFilePath: P,
              planContent: x,
              requestId: b
            };
          if (
            (await Vv(
              "team-lead",
              { from: i, text: _(A), timestamp: new Date().toISOString() },
              w,
              s.storageV5
            )) === void 0
          )
            throw new I(
              "Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again"
            );
          if (k) E(k.id, s.taskRegistry, { requestId: b });
          else Ma().swarmPermissions.pendingPlanApproval = { requestId: b, answered: !1 };
          return {
            data: { plan: x, isAgent: !0, filePath: P, awaitingLeaderApproval: !0, requestId: b }
          };
        }
        let O = null;
        {
          let i = s.permissions().prePlanMode ?? "default";
          if (i === "auto" && !(d?.canPlanReturnToAutoMode(i) ?? !1)) {
            let w = d?.getAutoModeUnavailableReason() ?? "circuit-breaker";
            ((O = d?.getAutoModeUnavailableNotification(w) ?? "auto mode unavailable"),
              t(
                `[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${i} but plan may not return to it (reason=${w}) \u2014 falling back to default on plan exit`,
                { level: "warn" }
              ));
          }
        }
        if (O)
          n?.({
            type: "notification",
            notification: {
              key: "auto-mode-gate-plan-exit-fallback",
              text: `plan exit \u2192 default \xB7 ${O}`,
              priority: "immediate",
              color: "warning",
              timeoutMs: 1e4
            }
          });
        let C = s.permissions();
        if (C.mode === "plan" && s.teammateContext === void 0) {
          (OB(!0), v6(!0));
          let i = C.prePlanMode ?? "default";
          {
            if (i === "auto" && !(d?.canPlanReturnToAutoMode(i) ?? !1)) i = "default";
            let A = i === "auto",
              y = l?.isAutoModeActive() ?? !1;
            if ((l?.setAutoModeActive(A), y && !A)) dF(!0);
          }
          xce({ from: "plan", to: i, trigger: "exit_plan_mode" }, s.agentContext);
          let w = i === "auto",
            b = C.strippedDangerousRules;
          s.setToolPermissionContext((A) => {
            let y = A;
            if (w) y = d?.stripDangerousPermissionsForAutoMode(y) ?? y;
            else if (b) y = d?.restoreDangerousPermissions(y) ?? y;
            return { ...y, mode: i, prePlanMode: void 0 };
          });
        }
        let U = _s() && s.tools.some((i) => Rt(i, ht)) && !$Wn(Mn, s.tools);
        return {
          data: {
            plan: x,
            isAgent: h,
            filePath: m ? void 0 : P,
            hasTaskTool: U || void 0,
            planWasEdited: (v !== void 0 && !m) || void 0
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam(
    {
      isAgent: r,
      plan: e,
      filePath: n,
      hasTaskTool: s,
      planWasEdited: l,
      awaitingLeaderApproval: d,
      requestId: h
    },
    m
  ) {
    if (d)
      return {
        type: "tool_result",
        content: `Your plan has been submitted to the team lead for approval.

Plan file: ${n}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${h}`,
        tool_use_id: m
      };
    if (r)
      return {
        type: "tool_result",
        content:
          'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
        tool_use_id: m
      };
    if (!e || e.trim() === "")
      return {
        type: "tool_result",
        content: "User has approved exiting plan mode. You can now proceed.",
        tool_use_id: m
      };
    let v = S0n(Boolean(s)),
      P = l ? "Approved Plan (edited by user)" : "Approved Plan";
    return {
      type: "tool_result",
      content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable${
        n === void 0
          ? ""
          : `

Your plan has been saved to: ${n}
You can refer back to it if needed during implementation.`
      }${v}

## ${P}:
${e}`,
      tool_use_id: m
    };
  }
});
export { Vvs, b0n, qvs, S0n, e3 };

//# sourceMappingURL=chunk-t7ft03m9.js.map
