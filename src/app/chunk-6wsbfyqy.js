// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Xd, Ke, Qe, N } from "./chunk-fs43t96t.js";
import { wn } from "./chunk-wrtp8qz8.js";
import { a } from "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { An, ff, Ls, ort, Be, At } from "./chunk-at88wjsn.js";
import { Vye, $Wr, Q9s } from "./chunk-wany0nxw.js";
import { err, Lw, ioi, K_e, k } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { yn, am, dee, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Oi } from "./chunk-dc0nzty2.js";
import { hs } from "./chunk-wr0p4ndg.js";
import { p } from "./chunk-qmkm2x59.js";
import { eu } from "./chunk-5rw2zfa0.js";
import { i4e, Gbe, Tse, Dvn, UJo, Lot, Bqt, Not } from "./chunk-63a6mqbs.js";
import { $l } from "./chunk-928ws1pg.js";
import { iSn, lM } from "./chunk-t86k189s.js";
import { yR } from "./chunk-r1dvrqha.js";
import { wf } from "./chunk-5z6t3gwt.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { Tce, ae } from "./chunk-ar6ynjt8.js";
import {
  yK,
  O4,
  Knn,
  nje,
  WOe,
  rOs,
  oOs,
  oje,
  SLt,
  bEo,
  wLt,
  zOe,
  zRr,
  xOs,
  VRr,
  ene,
  VWn,
  EXe,
  yge,
  _ge,
  Rk,
  _je,
  k0t,
  Vrn,
  mzn,
  I3,
  K4,
  Tmt,
  Amt,
  nv,
  pMe,
  Rmt,
  M0t,
  eon,
  $A,
  CTo,
  Dl,
  BLs,
  h2n,
  OL,
  DMe,
  Q4
} from "./chunk-j0tbz6ra.js";
import { Z6 } from "./chunk-xcgje7f7.js";
import { KP, KHe, jG } from "./chunk-d5zj5299.js";
import { hJn, RWt, W8, bp } from "./chunk-39ayby14.js";
import { WE } from "./chunk-g9040er0.js";
import { o3n } from "./chunk-14k612dp.js";
import { ns } from "./chunk-g82naabm.js";
import { Ran } from "./chunk-zg0g4fdz.js";
import { j1 } from "./chunk-brsp4twh.js";
import { XL } from "./chunk-67rddvam.js";
import { EG } from "./chunk-ybr49gcx.js";
import { UTe } from "./chunk-s4n2rnah.js";
import { UL } from "./chunk-0sy839zk.js";
import { QMn, ZMn, jhs } from "./chunk-1nnn2mdy.js";
import { wN } from "./chunk-25j20xpc.js";
import { jIt } from "./chunk-gawb97wc.js";
import { HE } from "./chunk-q85nvv4x.js";
import { Ni } from "./chunk-e36t8chg.js";
import { Yze } from "./chunk-86dqgve1.js";
import { sS } from "./chunk-nhj692ya.js";
import { pC, o, M, oe, u, $e, me, B, A } from "./chunk-0bqrj5ah.js";
import { randomUUID as ze } from "crypto";
function s_r(r, e, s) {
  if (i.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {};
  let n = setTimeout(
    (d, m, h) => {
      try {
        OL(
          yK(),
          {
            message: `Claude needs your permission to use ${d}`,
            notificationType: "permission_prompt"
          },
          { storageV5: m, credentials: h }
        ).catch(() => {});
      } catch {}
    },
    Ran,
    r,
    e,
    s
  );
  return (n.unref(), () => clearTimeout(n));
}
var ho = p(() =>
    u({
      tool_name: o().describe("The name of the tool requesting permission"),
      input: me(o(), oe()).describe("The input for the tool"),
      tool_use_id: o().optional().describe("The unique tool use request ID")
    })
  ),
  fe = p(() =>
    B(["user_temporary", "user_permanent", "user_reject"])
      .optional()
      .catch(void 0)
  ),
  he = (r) =>
    u({
      behavior: A("allow"),
      updatedInput: me(o(), oe()).optional(),
      updatedPermissions: nje(r, "SDK host"),
      toolUseID: o().optional(),
      decisionClassification: fe()
    }),
  ye = p(() =>
    u({
      behavior: A("deny"),
      message: o(),
      interrupt: M().optional(),
      toolUseID: o().optional(),
      decisionClassification: fe()
    })
  ),
  q6e = p(() => $e([he("refused"), ye()])),
  De = p(() => $e([he("cut"), ye()]));
function fIt(r) {
  return r === "strict" ? De() : q6e();
}
var o_r = `Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}. ${Knn}`;
function W(r, e, s, n, d) {
  if (n.forRemoteExecution === !0 || Lw(n)) return;
  let m = r && W8(r, e.suppressesAlwaysAllowRule?.(s) === !0 || d ? void 0 : RWt(e, s), ae(n));
  if (m && e.suppressesAllPermissionUpdates?.(s) === !0) {
    let h = K4(m);
    return h.length > 0 ? h : void 0;
  }
  return m && (e.suppressesAlwaysAllowRule?.(s) === !0 || d) ? I3(m, e, ae(n)) : m;
}
function j(r, e, s, n, d, m, h = !1) {
  switch (r.kind) {
    case "launcher": {
      let f = W(e, s, n, d, m);
      if (f?.length)
        (d.setSessionToolPermissionContext((_) => KP(_, f)),
          setImmediate(() => {
            wN.emit();
          }),
          jG(f, d.storageV5).catch(l));
      return { applied: f ?? [], lostTightenings: 0 };
    }
    case "strict":
      return wLt(r, e, {
        vetoed: () => !1,
        strip: (f) => W(f, s, n, d, m) ?? [],
        toolName: $l(s),
        input: n,
        suggested: (f) => h && s.suggestedAllowRule?.(f, n) === !0,
        setContext: d.setSessionToolPermissionContext
      });
  }
}
function ue(r, e) {
  return {
    ...r,
    setSessionToolPermissionContext: (s) =>
      r.setSessionToolPermissionContext((n) => {
        let d = typeof s === "function" ? s(n) : s;
        return xOs(e, n, d);
      })
  };
}
function pIt(r, e, s, n, d, m = s, h = !1, f = !1) {
  let _ = { type: "permissionPromptTool", permissionPromptToolName: s.name, toolResult: e };
  if (e.behavior === "allow") {
    let S = e.updatedPermissions?.findLast((c) => c.type === "setMode")?.mode;
    if (S === "default" || S === "acceptEdits") ort(S);
    switch (r.kind) {
      case "launcher": {
        let { applied: c } = j(r, e.updatedPermissions, m, n, f ? ue(d, m) : d, h),
          P =
            e.updatedInput && Object.keys(e.updatedInput).length > 0
              ? e.updatedInput
              : O4(m.name, n);
        return { ...e, updatedInput: P, decisionReason: _, ...le(r, c) };
      }
      case "strict": {
        let c = rOs(e.updatedInput, n, m),
          P = c === void 0 ? oOs(r, e.updatedInput, n, m) : void 0,
          R = c ?? P?.input;
        if (R === void 0) return oje(m.name, e.toolUseID);
        if (R !== n && bp(ae(d), m, R, "deny") !== null)
          return (P?.onRefused("deny_rule"), oje(m.name, e.toolUseID));
        let { applied: y, lostTightenings: E } = j(
          r,
          e.updatedPermissions,
          m,
          P?.input ?? n,
          f ? ue(d, m) : d,
          h,
          !0
        );
        if (E > 0) return SLt(m.name, e.toolUseID);
        return { ...e, updatedInput: R, decisionReason: _, ...le(r, y) };
      }
    }
  } else if (e.behavior === "deny" && e.interrupt)
    (t(`SDK permission prompt deny+interrupt: tool=${s.name} message=${e.message}`),
      lM(d.abortController).abort());
  return { ...e, decisionReason: _, decideLocation: "ask-path" };
}
function le(r, e) {
  let s = Tmt(e);
  return s === "once" || (s === "session" && r.kind === "launcher") ? { grantScope: s } : {};
}
var Ce = "tengu_cinder_swift";
function r_r() {
  return k(Ce, "off") === "interrupt";
}
function X(r, e) {
  try {
    return r.getToolUseSummary?.(e) ?? r.getActivityDescription?.(e) ?? "";
  } catch (s) {
    return (t(`describeToolUseForPush failed: ${s}`, { level: "error" }), "");
  }
}
function ge(r, e) {
  return Pe(r, e)?.card;
}
function Pe(r, e) {
  if (!r.requiresUserInteraction?.()) return;
  switch (r.name) {
    case ns: {
      let s = Array.isArray(e?.questions) ? e.questions : [],
        n = s[0],
        d = n?.header || n?.question,
        m = s.length > 1 ? ` (+${s.length - 1} more)` : "";
      return { label: "Question", body: d ? d + m : "Tap to answer" };
    }
    case sS:
      return { label: "Plan", body: "Plan ready for review" };
    case Yze:
      return { label: Z6(r.name), body: "" };
    case UTe: {
      let s =
        typeof e?.reason === "string" ? hs(dee(am(e.reason)), 200).replace(/[\s.!?]+$/u, "") : "";
      return {
        label: "Claude in Chrome",
        body: s
          ? `Let Claude use your browser for ${s}? Open this task on your computer.`
          : "Let Claude use your browser? Open this task on your computer.",
        card: {
          title: "Set up Claude in Chrome on your computer",
          description:
            "Claude wants to use your browser through Claude in Chrome. To set it up, open this task in the Claude app on a computer; any answer here skips it."
        }
      };
    }
    default:
      return { label: Z6(r.name), body: "" };
  }
}
function _e(r, e, s, n, d) {
  let m = Tse(d?.decisionReason),
    h = {
      ...(d?.decisionReason && { decision_reason_type: d.decisionReason.type }),
      ...(m && { decision_reason_code: m })
    },
    f = d?.hostDisplay ? { label: d.hostDisplay.displayName, body: "" } : Pe(r, e);
  if (f)
    return {
      tool_name: r.name,
      display_tool_name: f.label,
      action_description: f.body,
      raw_command: void 0,
      tool_use_id: s,
      request_id: "",
      ...(n && { suppressed_request_id: n }),
      input: e,
      ...h
    };
  let _ =
      (r.name === Be || r.name === At) && typeof e.command === "string" ? dee(e.command) : void 0,
    S =
      _ !== void 0
        ? typeof e.description === "string" && e.description && !EG(r) && !wf(e)
          ? dee(e.description)
          : hs(_, yR)
        : dee(X(r, e)),
    c = d?.tapToOpenOnly === !0;
  return {
    tool_name: r.name,
    display_tool_name: Z6(r.name),
    action_description: S,
    raw_command: _,
    tool_use_id: s,
    request_id: c ? "" : n,
    ...(c && n && { suppressed_request_id: n }),
    input: e,
    ...h
  };
}
import { isDeepStrictEqual as Le } from "util";
import { isDeepStrictEqual as Ae } from "util";
var Ne = 3;
function ke(r) {
  let { promise: e, resolve: s } = Promise.withResolvers(),
    { ask: n, tool: d, input: m, toolUseContext: h, toolUseID: f, isWaiting: _ } = r;
  if (
    !k("tengu_drifting_dream", !1) ||
    r.answers.kind !== "launcher" ||
    r.forced ||
    h.hookAskFloor === !0 ||
    n.personOnly === !0 ||
    h.forRemoteExecution === !0 ||
    WE($l(d)) ||
    XL(d) ||
    jIt(n, d, h)
  )
    return { allowed: e, stop: () => {} };
  let S = 0,
    c = (R) => {
      if (!_()) return;
      let y = ae(h);
      if (Ls(eu(d, y), y.servedCall === !0)) return;
      let E = ++S,
        O = Tce(h);
      nv(d, m, { ...h, permissionRound: void 0 }, r.assistantMessage, f)
        .then((w) => {
          if (!_() || E !== S) return;
          if (!Ae(Tce(h), O)) {
            if (R < Ne) c(R + 1);
            return;
          }
          if (w.behavior === "allow" && U(w.decisionReason)) (P(), s(w));
        })
        .catch((w) => {
          if (!Ke(w))
            l(
              Qe(
                N(w),
                "permissionRecheckSignal: hasPermissionsToUseTool failed for a waiting can_use_tool ask"
              )
            );
        });
    },
    P = wN.subscribe(() => c(0));
  if (!Ae(Tce(h), r.askedUnder)) c(0);
  return { allowed: e, stop: P };
}
function U(r) {
  switch (r?.type) {
    case "rule":
      return !0;
    case "mode":
      return r.mode === "default" || r.mode === "acceptEdits" || r.mode === "bypassPermissions";
    case "subcommandResults": {
      let e = [...r.reasons.values()].filter(
        (s) =>
          s.behavior !== "allow" ||
          s.decisionReason?.type !== "other" ||
          s.decisionReason.reason !== Gbe
      );
      return e.length > 0 && e.every((s) => s.behavior === "allow" && U(s.decisionReason));
    }
    default:
      return !1;
  }
}
function Re(r) {
  let e = r.ask.decisionReason;
  if (e === void 0 ? r.tool.mcpInfo === void 0 : e.type !== "rule") return;
  try {
    if (Te(r)) return !1;
  } catch (s) {
    if (!Ke(s)) l(s);
    return !1;
  }
  return He(r);
}
function Uhs(r) {
  return r.subtype === "can_use_tool" ? { ...r, server_policy_ask_only: void 0 } : r;
}
function Te({ tool: r, effectiveInput: e, ask: s, toolUseContext: n, forceDecision: d }) {
  let m = s.decisionReason;
  return (
    r.mcpInfo === void 0 ||
    !(m === void 0 || Rmt(m)) ||
    !be(s, ["decisionReason"]) ||
    d !== void 0 ||
    n.hookAskFloor === !0 ||
    n.forRemoteExecution === !0 ||
    WE($l(r)) ||
    XL(r) ||
    jIt(s, r, n) ||
    r.suppressesAlwaysAllowRule?.(e) === !0 ||
    r.suppressesAllPermissionUpdates?.(e) === !0 ||
    r.ignoresWholeToolAllowRule?.(e) === !0 ||
    n.remoteCall !== void 0 ||
    n.requireCanUseTool === !0 ||
    Vye(n.session, r.name) !== void 0 ||
    r.askInputPreparer !== void 0 ||
    xe(r, n) ||
    M0t(m, r, e, n) ||
    Fe(r, n)
  );
}
async function He(r) {
  try {
    let e = Tce(r.toolUseContext);
    return (await Me(r)) && Le(Tce(r.toolUseContext), e) && !Te(r);
  } catch (e) {
    if (!Ke(e)) l(e);
    return !1;
  }
}
async function Me({ tool: r, effectiveInput: e, toolUseContext: s }) {
  let n = !1,
    d = await CTo(
      {
        ...r,
        checkPermissions: async (m, h) => {
          let f = await r.checkPermissions(m, h);
          return ((n ||= f.behavior === "ask"), f);
        }
      },
      e,
      s
    );
  return !n && (d.behavior === "allow" ? U(d.decisionReason) : d.behavior === "ask" && be(d, []));
}
var qe = ["behavior", "message", "suggestions"];
function be(r, e) {
  return Object.entries(r).every(([s, n]) => n === void 0 || qe.includes(s) || e.includes(s));
}
function Fe(r, e) {
  return (
    Ie().hooksRespawns.size > 0 ||
    Ni("tool.check", { ...j1(r), agentId: e.agentId }, HE("tool.check")) ||
    DMe("PermissionRequest") !== "none" ||
    UL("PermissionRequest") ||
    Q4("PermissionRequest", e.sessionHooksRegistry, Rk(e, "PermissionRequest", e.session.id))
  );
}
function xe(r, e) {
  let s = ae(e);
  return Ls(eu(r, s), s.servedCall === !0);
}
function Bhs(r, e) {
  let s = async (n, d, m, h, f, _) => {
    let S = Tce(m),
      c;
    switch (r.kind) {
      case "launcher":
        c = _ ?? (await nv(n, d, m, h, f));
        break;
      case "strict":
        c = _ ?? (await pMe(n, d, m, h, f, r, void 0));
        break;
    }
    if (c.behavior === "allow") return c;
    if (c.behavior === "deny") {
      if (An() && !m.abortController.signal.aborted) return ff();
      if (!i4e(c)) e.emitPermissionDenied(n.name, f, m.agentId, c);
      return c;
    }
    let P = Re({
        tool: n,
        effectiveInput: c.updatedInput ?? d,
        ask: c,
        toolUseContext: m,
        forceDecision: _
      }),
      R = typeof P === "object" ? await P : P;
    if (m.abortController.signal.aborted)
      return {
        behavior: "deny",
        message: "Tool permission request aborted",
        toolUseID: f,
        decisionReason: Not,
        decideLocation: "ask-path"
      };
    if (An()) return ff();
    if (n.askInputPreparer !== void 0 && !Z.has(c) && m.forRemoteExecution !== !0) {
      let C = await n.askInputPreparer(c.updatedInput ?? d, m, f);
      if (C !== void 0) return We(s, r, C, c, n, d, m, h, f);
    }
    let y = c.updatedInput ?? d,
      E = c.suggestions;
    if (
      n.name === Be &&
      typeof y.command === "string" &&
      E?.length &&
      !E.some((C) => C.destination !== "session")
    )
      E = [...Vrn(y.command), ...E];
    let O = new AbortController(),
      w = m.abortController.signal,
      D = !1,
      ee = () => {
        if (!An()) D = !0;
        O.abort(w.reason);
      };
    w.addEventListener("abort", ee, { once: !0 });
    let I = ze(),
      re = ioi(m.agentContext),
      ne,
      v,
      G = !1,
      ie;
    try {
      let q = (
        c.personOnly === !0 || Z.has(c)
          ? Promise.resolve(void 0)
          : mIt(r, n, f, y, m, E, c, () => G || w.aborted)
      ).then((b) => ({ source: "hook", outcome: b }));
      q.catch(() => {});
      let T = c.decisionReason,
        K = c.localDisplayOnly === !0 || (c.personOnly === !0 && T?.type === "classifier"),
        se = ene(n);
      if (e.promptShown) {
        let b = _e(n, y, f, I, {
          tapToOpenOnly: K || se,
          hostDisplay: c.hostDisplay,
          decisionReason: T
        });
        ((ne = re), e.promptShown(I, b, re, K_e(m.agentContext)));
      }
      let x = Dl(T),
        Se = n.name === Be || n.name === At,
        Ee =
          we.get(c) ||
          (c.metadata && "command" in c.metadata ? c.metadata.command.description : void 0) ||
          (Se && typeof y.command === "string"
            ? typeof y.description === "string" && y.description
              ? dee(y.description)
              : hs(dee(y.command), yR)
            : X(n, y)) ||
          void 0,
        Y = ge(n, y),
        V = EG(n) || (n.name === At && wf(y)) ? void 0 : (Ee ?? Y?.description),
        te =
          zOe(T) ??
          (T?.type === "subcommandResults" && x
            ? (Dl(T, (b) => !b.classifierApprovable && !zRr(b))?.reason ??
              (zRr(x) ? void 0 : x.reason))
            : void 0),
        H = c.hostDisplay,
        J = K ? Oi(yn(te ?? "")) : "",
        de = H
          ? H.description
          : J && V && c.localDisplayOnly !== !0
            ? `${V}
${J}`
            : J || V,
        Oe = WE($l(n)),
        ce = s_r(Z6(n.name), m.storageV5, m.credentials);
      if (H) g("permission_host_worded_ask");
      let F = e
        .request(
          {
            subtype: "can_use_tool",
            tool_name: n.name,
            ...(n.mcpInfo && { mcp_server: o3n(n.mcpInfo) }),
            ...(Y && { title: Y.title }),
            display_name: H?.displayName ?? Z6(n.name),
            input: y,
            ...(H && { title: H.title }),
            ...(de && { description: de }),
            ...(Oe && { tool_kind: "browser" }),
            permission_suggestions: E,
            blocked_path: c.blockedPath,
            decision_reason: te,
            decision_reason_type: T?.type,
            decision_reason_code: Tse(T),
            decision_reason_rule_source: T?.type === "rule" ? T.rule.source : void 0,
            ...(T?.type === "hook" && {
              decision_reason_hook_event: jhs(T.hookName, n.name),
              decision_reason_hook_source: QMn(T.hookSource),
              decision_reason_hook_plugin_id: ZMn(T.hookPluginId)
            }),
            server_policy_ask_only: R,
            ...(c.matchedAskRule && {
              matched_ask_rule: {
                source: c.matchedAskRule.source,
                tool_name: c.matchedAskRule.ruleValue.toolName,
                ...(c.matchedAskRule.ruleValue.ruleContent !== void 0 && {
                  rule_content: c.matchedAskRule.ruleValue.ruleContent
                })
              }
            }),
            classifier_approvable: x ? !Dl(T, (b) => !b.classifierApprovable) : void 0,
            ...((T?.type === "rule" || (T?.type === "other" && T.reason === mzn)) &&
              n.mcpInfo?.effectiveMaxPermission === "ask" && {
                decision_reason_code: "org_ask_ceiling"
              }),
            tool_use_id: f,
            agent_id: m.agentId,
            plugin: err(m) ?? (Lw(m) ? "" : void 0),
            suppress_always_allow_rule:
              c.suppressAlwaysAllowRule ||
              (n.suppressesAlwaysAllowRule?.(y, !k("tengu_valiant_crayon", !1)) === !0 &&
                !(E ?? []).some(
                  (b) =>
                    (b.type === "addRules" || b.type === "replaceRules") &&
                    b.behavior === "allow" &&
                    b.rules.some((z) => z.ruleContent !== void 0)
                )) ||
              void 0,
            default_to_no: c.defaultToNo || void 0,
            provenance_prompt_line: c.provenancePromptLine,
            requires_user_interaction:
              n.requiresUserInteraction?.() || K || se || H !== void 0 || void 0
          },
          O.signal,
          I
        )
        .then((b) => ({ source: "sdk", result: b }));
      if (
        (F.catch(() => {}),
        F.then(
          () => {
            G = !0;
          },
          () => {
            G = !0;
          }
        ),
        e.isPending(I))
      )
        ((v = {
          logContext: {
            tool: n,
            input: y,
            messageId: h.message.id,
            toolUseID: f,
            permissionMode: ae(m).mode,
            agentContext: m.agentContext,
            mcpClients: m.options.mcpClients,
            appliedAllowUpdates: (b) => {
              switch (r.kind) {
                case "launcher":
                  return W(b, n, y, m, c.suppressAlwaysAllowRule === !0);
                case "strict":
                  return;
              }
            }
          },
          shownAtMs: Date.now()
        }),
          BLs(v.logContext, T?.type));
      F.then(ce, ce);
      let L = await Promise.race([q, F]);
      if (L.source === "hook") {
        if (L.outcome) {
          if (An() && !D) await ff();
          if ((O.abort(), v))
            h2n(
              v.logContext,
              {
                kind: "hook",
                behavior: L.outcome.decision.behavior === "allow" ? "allow" : "deny",
                permanent: L.outcome.permanent
              },
              v.shownAtMs
            );
          if (L.outcome.interrupt)
            (t(`Hook interrupt: tool=${n.name} hookMessage=${L.outcome.decision.message}`),
              lM(m.abortController).abort());
          return L.outcome.decision;
        }
        let b = ke({
          answers: r,
          ask: c,
          forced: _ !== void 0,
          askedUnder: S,
          tool: n,
          input: d,
          toolUseContext: m,
          assistantMessage: h,
          toolUseID: f,
          isWaiting: () => e.isPending(I) && !w.aborted
        });
        ie = b.stop;
        let z = await Promise.race([
          F.then(() => {
            return;
          }),
          b.allowed
        ]);
        if (z !== void 0 && e.isPending(I)) {
          if (An() && !D) await ff();
          if ((O.abort(), VWn(m, f), v)) h2n(v.logContext, { kind: "recheck" }, v.shownAtMs);
          return z;
        }
      }
      let pe = L.source === "hook" ? (await F).result : L.result;
      if (v) h2n(v.logContext, { kind: "host_answer", answer: pe }, v.shownAtMs);
      let Q = pIt(r, pe, n, y, m, n, c.suppressAlwaysAllowRule === !0, R !== !0);
      if (
        Q.behavior === "allow" &&
        e.answeredAtHostDialog(I) &&
        m.forRemoteExecution !== !0 &&
        $Wr()
      )
        Q9s(m.session, f, { toolName: n.name, input: Q.updatedInput ?? y });
      return Q;
    } catch (C) {
      if (An() && e.isPending(I)) await ff();
      if (e.interruptedAtStreamClose(I) && r_r()) {
        try {
          (a("tengu_auq_park_interrupted_at_stream_close", { stream_closed: C instanceof Xd }),
            t(
              `Interrupting parked AskUserQuestion toolUseID=${f} at stream close (deny skipped; turn aborts as shutdown)`
            ));
        } catch {}
        throw C;
      }
      let q = bEo(r, C, n.name),
        T = Bqt;
      if (C instanceof pC)
        (t(
          `canUseTool returned a schema-invalid permission result for ${n.name}: ${C.message.slice(0, 2000)}`,
          { level: "error" }
        ),
          (q = `The canUseTool callback returned an invalid permission result. ${o_r}`),
          (T = Lot));
      else if (C instanceof Xd) T = UJo;
      else if (Ke(C) && w.aborted) {
        if (((q = "Tool permission request aborted"), (T = Not), v && !iSn(w)))
          h2n(v.logContext, { kind: "turn_aborted" }, v.shownAtMs);
      }
      return {
        behavior: "deny",
        message: q,
        toolUseID: f,
        decisionReason: T,
        decideLocation: "ask-path"
      };
    } finally {
      (ie?.(), e.promptSettled(I, ne), w.removeEventListener("abort", ee));
    }
  };
  return EXe("callback", s, () => !0);
}
var Z = new WeakSet(),
  we = new WeakMap();
async function We(r, e, s, n, d, m, h, f, _) {
  let S = h.abortController.signal,
    c = () => ({
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: _,
      decisionReason: Not,
      decideLocation: "ask-path"
    });
  if (n.personOnly !== !0) {
    let O;
    try {
      O = await mIt(e, d, _, n.updatedInput ?? m, h, n.suggestions, n, () => S.aborted);
    } catch (w) {
      return S.aborted
        ? c()
        : {
            behavior: "deny",
            message: bEo(e, w, d.name),
            toolUseID: _,
            decisionReason: Bqt,
            decideLocation: "ask-path"
          };
    }
    if (O !== void 0) {
      if (An() && !S.aborted) return ff();
      if (O.interrupt) lM(h.abortController).abort();
      return O.decision;
    }
  }
  let P = await s.prepare();
  if (S.aborted) {
    if (!("error" in P)) P.release();
    return c();
  }
  if ("error" in P)
    return {
      behavior: "deny",
      message: P.error,
      toolUseID: _,
      decisionReason: { type: "other", reason: "files not attached" },
      decideLocation: "ask-path"
    };
  let R = { ...VRr(n, P.input), updatedInput: P.input };
  (Z.add(R), we.set(R, P.description));
  let y;
  try {
    y = await r(d, m, h, f, _, R);
  } catch (O) {
    throw (P.release(), O);
  }
  if (y.behavior !== "allow") return (P.release(), y);
  let E =
    y.updatedInput !== void 0 && Object.keys(y.updatedInput).length > 0 ? y.updatedInput : P.input;
  if (!wn(E.files, P.input.files))
    return (
      P.release(),
      {
        behavior: "deny",
        message: `The approval for ${d.name} changed the files to attach, which cannot be applied. Call it again with the files you want attached.`,
        toolUseID: _,
        decisionReason: { type: "other", reason: "approval changed the files" },
        decideLocation: "ask-path"
      }
    );
  return { ...y, updatedInput: E };
}
async function mIt(r, e, s, n, d, m, h, f) {
  if (d.forRemoteExecution === !0) return;
  let _ = ae(d).mode,
    S = _je(e.name, s, n, d, _, m, d.abortController.signal);
  for await (let c of S)
    if (
      c.permissionRequestResult &&
      (c.permissionRequestResult.behavior === "allow" ||
        c.permissionRequestResult.behavior === "deny")
    ) {
      let P = c.permissionRequestResult;
      if (P.behavior === "allow") {
        let R = P.updatedInput;
        switch (r.kind) {
          case "launcher":
            break;
          case "strict":
            if (!WOe(R, n)) return { decision: oje(e.name, s), interrupt: !1, permanent: !1 };
            R = void 0;
            break;
        }
        if (yge(e, n, R, !0))
          return { decision: _ge(e, "PermissionRequest"), interrupt: !1, permanent: !1 };
        let y = await k0t(e, R, n, (D) => e.validateInput?.(D, { ...d, toolUseId: s }));
        if (y.deny !== void 0) return { decision: y.deny, interrupt: !1, permanent: !1 };
        R = y.input;
        let E = R || n;
        if (R) {
          let D = Amt(
            await $A(
              e,
              E,
              { ...d, toolUseId: s, permissionRound: void 0 },
              { hookUpdatedInput: R }
            ),
            e.name
          );
          if (D)
            return {
              decision:
                D.behavior === "ask"
                  ? {
                      behavior: "deny",
                      message: D.message,
                      decisionReason: D.decisionReason ?? Dvn,
                      decideLocation: "ask-path"
                    }
                  : { ...D, decideLocation: "ask-path" },
              interrupt: !1,
              permanent: !1
            };
        }
        if (h.hostDisplay !== void 0 || eon(e, R)) return;
        let { applied: O, lostTightenings: w } = f()
          ? { applied: [], lostTightenings: 0 }
          : j(
              r,
              P.updatedPermissions && hJn(P.updatedPermissions, ae(d)),
              e,
              n,
              d,
              h.suppressAlwaysAllowRule === !0
            );
        if (w > 0) return;
        return {
          decision: {
            behavior: "allow",
            updatedInput: E,
            userModified: !1,
            decisionReason: { type: "hook", hookName: "PermissionRequest" }
          },
          interrupt: !1,
          permanent: O.some((D) => KHe(D.destination))
        };
      } else
        return {
          decision: {
            behavior: "deny",
            message: P.message || "Permission denied by PermissionRequest hook",
            decisionReason: { type: "hook", hookName: "PermissionRequest" },
            decideLocation: "ask-path"
          },
          interrupt: P.interrupt === !0,
          permanent: !1
        };
    }
  return;
}
export { r_r, q6e, fIt, o_r, pIt, s_r, Uhs, Bhs, mIt };

//# sourceMappingURL=chunk-6wsbfyqy.js.map
