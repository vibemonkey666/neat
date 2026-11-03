// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vi, q } from "./chunk-wrtp8qz8.js";
import { Ke, Rr, d } from "./chunk-fs43t96t.js";
import { Nt, Pe } from "./chunk-4hww8411.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { An, rsi, Y5o, srt, k0 } from "./chunk-at88wjsn.js";
import { fh, Wbe } from "./chunk-63a6mqbs.js";
import { XAt } from "./chunk-ewvf3tep.js";
import { W_e, Hy, Tue } from "./chunk-ajtyjx88.js";
import { Mt } from "./chunk-adv24f35.js";
import { mo } from "./chunk-ak0cmk10.js";
import { ap } from "./chunk-m18k9mtt.js";
import { ULe, dKo } from "./chunk-wdgmsxyg.js";
import { bm, $tt, yz, hj } from "./chunk-3hjc969z.js";
import { Zt } from "./chunk-d54avynm.js";
import { o, v, T, u, B, A } from "./chunk-0bqrj5ah.js";
var Qzr = 32;
function jce(e) {
  if (!Array.isArray(e)) return [];
  return e.filter((n) => typeof n === "string" && n.length > 0 && n.length <= 64).slice(0, 32);
}
import { randomUUID as L } from "crypto";
var Vzr = 8000;
async function pe({ verdict: e, deadlineMs: n, respond: r, inform: s }) {
  let l = (h) => {
      if (Array.isArray(h)) s(h.filter((U) => typeof U === "string").map(Zt));
    },
    I = e.then((h) => h ?? { ok: !0 }),
    D;
  try {
    D = await Pe(I, n);
  } catch (h) {
    return (
      t(`set_model verdict rejected: ${d(h)}`, { level: "error" }),
      r({ subtype: "error", error: "set_model failed", error_code: "internal_error" })
    );
  }
  if (D === void 0)
    return (
      I.then(
        (h) =>
          l(
            h.ok
              ? [
                  ...(Array.isArray(h.notices) ? h.notices : []),
                  "The pending model switch was applied"
                ]
              : le(h.error)
          ),
        (h) => {
          (t(`set_model verdict rejected after the deadline reply: ${d(h)}`, { level: "error" }),
            l(["The pending model switch failed"]));
        }
      ),
      r({
        subtype: "error",
        error:
          "This model switch is still pending (an earlier model change, a check with the API or a PreModelSwitch hook has not finished); it will apply when that completes unless it is refused",
        error_code: "verdict_pending"
      })
    );
  let S = typeof D.model === "string" ? Zt(D.model) : void 0;
  if (D.ok) {
    if (D.notices) l(D.notices);
    return r(
      S === void 0 ? { subtype: "success" } : { subtype: "success", response: { model: S } }
    );
  }
  let b = D.code,
    C = Y5o.find((h) => h === b);
  return r({
    subtype: "error",
    error: le(D.error).map(Zt).join(`
`),
    ...(C !== void 0 && { error_code: C }),
    ...(S !== void 0 && { model: S })
  });
}
function le(e) {
  return typeof e === "string"
    ? e.split(`
`)
    : [""];
}
var V = "live_only",
  Oe = "The reply is too large to be sent without storing it";
function bZn(e, n) {
  return { ...yz(e, n), [V]: !0 };
}
function Lhn(e) {
  return e.type === "control_response" && e[V] === !0;
}
function M7s(e) {
  if (!(V in e)) return e;
  let { [V]: n, ...r } = e;
  return r;
}
function D7s(e, n) {
  if (!Lhn(e) || Buffer.byteLength(_(e)) <= n) return e;
  let r = e.response;
  return {
    type: "control_response",
    [V]: !0,
    ...(typeof e.uuid === "string" && { uuid: e.uuid }),
    response: { subtype: "error", request_id: r?.request_id, error: Oe }
  };
}
function qzr(e) {
  if (e == null || e === "") return { valid: !0, toolUseId: void 0 };
  if (typeof e === "string") return { valid: !0, toolUseId: e };
  return { valid: !1 };
}
var Yzr = "Background tasks are disabled in this session.",
  Xzr = "background_tasks: tool_use_id must be a string";
function Jzr(e) {
  return {
    mcpInstructions: void 0,
    agents: e.agents.map(({ path: n, pluginId: r, ...s }) => s),
    skills: e.skills && {
      ...e.skills,
      skillFrontmatter: e.skills.skillFrontmatter.map(({ path: n, pluginId: r, ...s }) => s)
    }
  };
}
function szt(e) {
  return Ne().safeParse(e).success;
}
var Ne = p(() =>
    u({
      max_thinking_tokens: v()
        .refine((e) => Number.isInteger(e))
        .nullable()
        .optional(),
      thinking_display: B(srt).nullable().optional()
    })
  ),
  Zzr = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${srt.map((e) => `"${e}"`).join(", ")}, or null`;
var sKo = "display_only";
function e2r(e) {
  return (
    (e.type === "user" || e.type === "assistant" || e.type === "system") &&
    e.historical === !0 &&
    e.display_only === !0
  );
}
function t2r(e) {
  return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}
function Me(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    e.type === "control_response" &&
    "response" in e &&
    e.response != null
  );
}
function Le(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "type" in e &&
    e.type === "control_request" &&
    "request_id" in e &&
    "request" in e &&
    e.request != null
  );
}
function H7s(e) {
  mo().bridgeStateFramesGate = e;
}
function Wce(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) return !1;
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return (
      e.attachment.type === "queued_command" &&
      e.attachment.commandMode === "prompt" &&
      !e.attachment.isMeta &&
      Hy(e.attachment.origin)
    );
  }
  return (
    e.type === "user" ||
    e.type === "assistant" ||
    (e.type === "system" &&
      (e.subtype === "local_command" ||
        e.subtype === "model_consent_fallback" ||
        (e.subtype === "compact_boundary" && (mo().bridgeStateFramesGate?.() ?? !0))))
  );
}
function Nhn(e) {
  return e.type === "user" && !e.isCompactSummary && !rsi(e);
}
function n2r(e) {
  return e.type === "attachment" || (e.type === "system" && e.subtype === "model_consent_fallback");
}
function SZn(e) {
  return (
    e.type === "conversation_reset" ||
    e.type === "stream_event" ||
    (e.type === "system" && e.subtype === "status") ||
    e.subtype === "task_started" ||
    e.subtype === "task_progress" ||
    e.subtype === "task_updated" ||
    e.subtype === "task_notification" ||
    e.subtype === "background_tasks_changed" ||
    e.subtype === "thinking_tokens" ||
    e.subtype === "code_change_published" ||
    e.subtype === "vcs_state_changed" ||
    e.subtype === "file_attachments_missing"
  );
}
function wZn(e) {
  if (!Tue(e)) return;
  let n = e.message.content,
    r;
  if (typeof n === "string") r = n;
  else
    for (let l of n)
      if (l.type === "text") {
        r = l.text;
        break;
      }
  if (!r) return;
  return XAt(r) || void 0;
}
function L7s(e, n, r, s, l, I, D, S) {
  try {
    let b = ULe(te(e));
    if (Me(b)) {
      (t("[bridge:repl] Ingress message type=control_response"), l?.(b));
      return;
    }
    if (Le(b)) {
      (t(`[bridge:repl] Inbound control_request subtype=${b.request.subtype}`), I?.(b));
      return;
    }
    if (
      t2r(b) &&
      b.type === "control_cancel_request" &&
      "request_id" in b &&
      typeof b.request_id === "string"
    ) {
      (t(`[bridge:repl] Inbound control_cancel_request request_id=${b.request_id}`),
        D?.(b.request_id));
      return;
    }
    if (et(b)) {
      let h = Je(b.notification);
      if (h === void 0) {
        if (S)
          (t("[bridge:repl] Ingress message type=queued_notification"),
            S({ type: "queued_notification", notification: b.notification }));
        else t("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
        return;
      }
      (t(
        "[bridge:repl] Ingress queued_notification from another session: delivering as its user frame"
      ),
        (b = h));
    }
    if (!t2r(b)) return;
    let C = "uuid" in b && typeof b.uuid === "string" ? b.uuid : void 0;
    if (C && n.has(C)) {
      t(`[bridge:repl] Ignoring echo: type=${b.type} uuid=${C}`);
      return;
    }
    if (C && r.has(C)) {
      t(`[bridge:repl] Ignoring re-delivered inbound: type=${b.type} uuid=${C}`);
      return;
    }
    if (
      (t(`[bridge:repl] Ingress message type=${b.type}${C ? ` uuid=${C}` : ""}`), b.type === "user")
    ) {
      if ("isReplay" in b && b.isReplay === !0) {
        t(`[bridge:repl] Ignoring replay echo: uuid=${C ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in b && b.parent_tool_use_id != null) {
        t(
          `[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${C}`
        );
        return;
      }
      if (e2r(b)) {
        t(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${C ?? "none"}`);
        return;
      }
      if (C) r.add(C);
      (a("tengu_bridge_message_received", { is_repl: !0 }), g("bridge_message_receive"), s?.(b));
    } else t(`[bridge:repl] Ignoring non-user inbound message: type=${b.type}`);
  } catch (b) {
    (t(`[bridge:repl] Failed to parse ingress message: ${d(b)}`),
      m("bridge_message_receive", "bridge_message_receive_parse_failed"));
  }
}
var Ue = new Set(["effortLevel", "ultracode"]),
  $e = 5,
  Fe = 40,
  Ve = "This session is outbound-only. Enable Remote Control locally to allow inbound control.",
  Be = 8000,
  H = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly",
  iKo = 660000,
  izt = "side_question timed out: the host did not answer in time",
  We = "(No answer available for this side question. Try again, or ask in the main conversation.)";
function aKo(e) {
  return e.response !== null && e.synthetic !== !1 ? { ...e, response: We, synthetic: !0 } : e;
}
var Ge = p(() =>
    u({
      question: o(),
      history: T(u({ question: o(), response: o(), fallback_notice: o().optional() })).optional()
    })
  ),
  je = "This session is shutting down.",
  Ye = new Set([
    "initialize",
    "file_suggestions",
    "read_file",
    "get_workspace_diff",
    "get_context_usage",
    "get_usage",
    "mcp_status"
  ]);
function ge(e, n) {
  if (n instanceof Rr) return Zt(d(n));
  if (Ke(n)) return Zt(d(n));
  return (t(`${e} failed: ${d(n)}`, { level: "error" }), `${e} failed`);
}
function N7s(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) t(`mcp_reconnect failed: ${e.error}`, { level: "error" });
    throw new Rr("Connection failed");
  }
  throw new Rr(`Server status: ${e.type}`);
}
function P(e, n, r, s) {
  Q(
    e,
    n,
    r,
    s.then((l) => ({ subtype: "success", response: l ?? {} }))
  );
}
function fe(e, n) {
  let r = e.request;
  if (r.subtype === "mcp_status") return r.liveReply === !0;
  return r.subtype === "mcp_authenticate" && r.liveReply === !0 && n?.callbackExpected === !0;
}
function Q(e, n, r, s) {
  s.catch((l) => ({ subtype: "error", error: ge(e.request.subtype, l) })).then((l) => {
    let D = {
      ...(l.subtype === "error"
        ? hj(e.request_id, l.error, "error_code" in l ? l.error_code : void 0)
        : fe(e, l.response)
          ? bZn(e.request_id, l.response ?? {})
          : yz(e.request_id, l.response ?? {})),
      session_id: r
    };
    (n(D),
      t(
        `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${l.subtype}`
      ));
  });
}
function _e(e, n) {
  if (n && n.ok === !1)
    return {
      type: "control_response",
      response: { subtype: "error", request_id: e, error: Zt(n.error) }
    };
  return { type: "control_response", response: { subtype: "success", request_id: e } };
}
function $7s(e, n) {
  let {
    transport: r,
    sessionId: s,
    outboundOnly: l,
    getInitializeState: I,
    claudeCodeVersion: D,
    getCommands: S,
    reportsInboundReadReceipts: b,
    getPendingPrompts: C,
    onInterrupt: h,
    onStopTask: U,
    onBackgroundTasks: G,
    onCancelAsyncMessage: N,
    onDialogKindsDeclared: F,
    onClientInitialize: w,
    onSetModel: j,
    onSetMaxThinkingTokens: Ie,
    onSetPermissionMode: Re,
    onApplyFlagSettings: J,
    onRenameSession: Ae,
    onSetColor: Ce,
    onFileSuggestions: ee,
    onReadFile: re,
    onGetWorkspaceDiff: oe,
    onGetContextUsage: ne,
    onMcpAuthenticate: se,
    onMcpOauthCallbackUrl: ie,
    onMcpReconnect: we,
    onMcpSetServers: ae,
    onForkConversation: de,
    hasPendingPrompts: Te,
    onSideQuestion: ue,
    cancellableRequests: Y
  } = n;
  if (!r) {
    t("[bridge:repl] Cannot respond to control_request: transport not configured");
    return;
  }
  let x =
      n.writeFrame ??
      ((i) => {
        r.write(i);
      }),
    y;
  if (An() && !Ye.has(e.request.subtype)) {
    (t(`[bridge] refusing ${e.request.subtype}: this process is exiting`),
      (y = {
        type: "control_response",
        response: { subtype: "error", request_id: e.request_id, error: je }
      }));
    let i = { ...y, session_id: s };
    r.write(i);
    return;
  }
  if (l && e.request.subtype !== "initialize") {
    y = {
      type: "control_response",
      response: { subtype: "error", request_id: e.request_id, error: Ve }
    };
    let i = { ...y, session_id: s };
    (r.write(i),
      t(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`));
    return;
  }
  let M = n.answerSharedControlRequest?.(e.request);
  if (M instanceof Promise) {
    Q(e, x, s, M);
    return;
  }
  if (M !== void 0) {
    let c = {
      ...(M.subtype === "error"
        ? {
            type: "control_response",
            response: { subtype: "error", request_id: e.request_id, error: M.error }
          }
        : fe(e, M.response)
          ? bZn(e.request_id, M.response)
          : {
              type: "control_response",
              response: {
                subtype: "success",
                request_id: e.request_id,
                ...(M.response !== void 0 && { response: M.response })
              }
            }),
      session_id: s
    };
    (r.write(c),
      t(
        `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${M.subtype}`
      ));
    return;
  }
  switch (e.request.subtype) {
    case "initialize": {
      try {
        let R = jce(e.request.supportedDialogKinds);
        if (R.length > 0) F?.(R);
      } catch (R) {
        t(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${d(R)}`);
      }
      let i = [];
      if (!l)
        try {
          i = S?.() ?? [];
        } catch (R) {
          (m("bridge_initialize_commands", "get_commands_threw"),
            t(`[bridge:repl] getCommands failed; acking initialize with commands: []: ${d(R)}`));
        }
      let c = C?.() ?? [],
        k = c.filter((R) => R.request.subtype === "can_use_tool"),
        E = c.filter((R) => R.request.subtype === "request_user_dialog");
      y = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            commands: i,
            agents: [],
            output_style: "normal",
            available_output_styles: ["normal"],
            models: [],
            account: {},
            pid: process.pid,
            ...(D !== void 0 && { claude_code_version: D }),
            ...(!l && b?.() === !0 && { inbound_read_receipts: !0 }),
            ...I?.()
          },
          pending_permission_requests: k,
          pending_user_dialog_requests: E
        }
      };
      try {
        w?.();
      } catch (R) {
        t(`[bridge:repl] onClientInitialize failed; acking initialize anyway: ${d(R)}`);
      }
      break;
    }
    case "set_model": {
      let i = e.request.model;
      if (i != null && typeof i !== "string") {
        (m("model_switch", "invalid_model_type"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "set_model: model must be a string"
            }
          }));
        break;
      }
      let c = e.request.only_if_model_is_current;
      if (c !== void 0 && c !== !1) {
        (m("model_switch", "only_if_model_is_current_unserved"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "set_model: Remote Control does not implement only_if_model_is_current. The request changed nothing."
            }
          }));
        break;
      }
      let k = j?.(e.request.model ?? void 0);
      if (k && "then" in k) {
        pe({
          verdict: k,
          deadlineMs: n.setModelVerdictDeadlineMs ?? Vzr,
          respond: (E) => {
            let xe = {
              ...{ type: "control_response", response: { ...E, request_id: e.request_id } },
              session_id: s
            };
            (x(xe),
              t(
                `[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${E.subtype}`
              ));
          },
          inform: (E) => {
            for (let R of E)
              x({
                type: "system",
                subtype: "informational",
                content: R,
                level: "notice",
                uuid: L(),
                session_id: s
              });
          }
        });
        return;
      }
      if (k && !k.ok)
        y = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: Zt(k.error) }
        };
      else
        y = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id }
        };
      break;
    }
    case "set_max_thinking_tokens": {
      if (!szt(e.request)) {
        y = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: Zzr }
        };
        break;
      }
      let i = Ie?.(e.request.max_thinking_tokens, e.request.thinking_display);
      if (i && "then" in i) {
        let c = e.request_id,
          k = e.request.subtype;
        i.then(
          (E) => _e(c, E),
          (E) => ({
            type: "control_response",
            response: { subtype: "error", request_id: c, error: ge(k, E) }
          })
        ).then((E) => {
          let R = { ...E, session_id: s };
          (x(R),
            t(
              `[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${c} result=${E.response.subtype}`
            ));
        });
        return;
      }
      y = _e(e.request_id, i);
      break;
    }
    case "set_permission_mode": {
      let i = fh(e.request.mode),
        c =
          i === void 0
            ? { ok: !1, error: Wbe }
            : (Re?.(i) ?? {
                ok: !1,
                error:
                  "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
              });
      if (c.ok)
        y = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id }
        };
      else
        y = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: Zt(c.error) }
        };
      break;
    }
    case "rename_session": {
      if (typeof e.request.title !== "string") {
        y = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "rename_session: title must be a string"
          }
        };
        break;
      }
      let c = Ae?.(e.request.title) ?? {
        ok: !1,
        error:
          "rename_session is not supported in this context (onRenameSession callback not registered)"
      };
      if (c.ok)
        y = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id }
        };
      else
        y = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: Zt(c.error) }
        };
      break;
    }
    case "set_color": {
      let i = Ce?.(e.request.color) ?? {
        ok: !1,
        error: "set_color is not supported in this context (onSetColor callback not registered)"
      };
      if (i.ok)
        y = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id }
        };
      else
        y = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: Zt(i.error) }
        };
      break;
    }
    case "file_suggestions": {
      if (!ee) {
        y = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "file_suggestions is not supported in this context (onFileSuggestions callback not registered)"
          }
        };
        break;
      }
      P(
        e,
        x,
        s,
        ee(e.request.query).then((i) => ({ suggestions: i }))
      );
      return;
    }
    case "read_file": {
      if (!re) {
        y = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "read_file is not supported in this context (onReadFile callback not registered)"
          }
        };
        break;
      }
      P(
        e,
        x,
        s,
        re(e.request.path, e.request.max_bytes, e.request.encoding, e.request.anchor).then(
          ((i) => (c) => ({ ...c, absPath: i }))(e.request.path)
        )
      );
      return;
    }
    case "get_workspace_diff": {
      if (!oe) {
        y = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)"
          }
        };
        break;
      }
      let i = new AbortController();
      Q(
        e,
        x,
        s,
        Nt(oe(i.signal), Be, H).then(
          (c) => ({ subtype: "success", response: c }),
          (c) => {
            if ((i.abort(), d(c) === H))
              return { subtype: "error", error: H, error_code: "workspace_diff_pending" };
            throw c;
          }
        )
      );
      return;
    }
    case "get_context_usage": {
      if (!ne) {
        y = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error:
              "get_context_usage is not supported in this context (onGetContextUsage callback not registered)"
          }
        };
        break;
      }
      P(
        e,
        x,
        s,
        ne({ detail: e.request.detail }).then((i) => ({ ...i, memoryFiles: [], ...Jzr(i) }))
      );
      return;
    }
    case "get_usage":
      y = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: "get_usage is not supported in this context"
        }
      };
      break;
    case "mcp_status":
      y = {
        type: "control_response",
        response: { subtype: "success", request_id: e.request_id, response: { mcpServers: [] } }
      };
      break;
    case "mcp_authenticate":
    case "mcp_oauth_callback_url":
    case "mcp_reconnect": {
      let i = e.request,
        { subtype: c, serverName: k } = i,
        E =
          i.subtype === "mcp_authenticate"
            ? se && ((R) => se(R, i.redirectUri))
            : i.subtype === "mcp_oauth_callback_url"
              ? ie && ((R) => ie(R, i.callbackUrl))
              : we;
      if (!E) {
        y = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: `${c} is not supported in this context (callback not registered)`
          }
        };
        break;
      }
      P(e, x, s, E(k));
      return;
    }
    case "interrupt":
      (h?.(),
        (y = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id }
        }));
      break;
    case "apply_flag_settings": {
      let i = Qe(e.request.settings),
        c;
      if (!i.ok) c = i;
      else if (!J)
        (m("bridge_flag_settings", "not_registered"),
          (c = {
            ok: !1,
            error:
              "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)"
          }));
      else c = J(i.settings, e.request_id);
      if (c.ok)
        (g("bridge_flag_settings"),
          (y = {
            type: "control_response",
            response: { subtype: "success", request_id: e.request_id }
          }));
      else
        y = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: c.error }
        };
      break;
    }
    case "mcp_set_servers": {
      let i = e.request.servers,
        c = "hint" in e.request ? e.request.hint : void 0,
        k;
      if (i === void 0 && typeof c === "string")
        (t(
          "[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply"
        ),
          (k = { ok: !0, added: [], removed: [], errors: {}, unknownServerCount: 0 }));
      else if (!ye(i)) k = { ok: !1, error: "mcp_set_servers: servers must be an object" };
      else if (!ae)
        k = {
          ok: !1,
          error:
            "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)"
        };
      else
        try {
          k = ae(i);
        } catch (E) {
          (t(`[bridge:repl] mcp_set_servers handler threw: ${d(E)}`, { level: "error" }),
            (k = { ok: !1, error: "mcp_set_servers failed to apply" }));
        }
      y = k.ok
        ? {
            type: "control_response",
            response: {
              subtype: "success",
              request_id: e.request_id,
              response: {
                added: k.added,
                removed: k.removed,
                errors: He(k.errors, k.unknownServerCount)
              }
            }
          }
        : {
            type: "control_response",
            response: { subtype: "error", request_id: e.request_id, error: Zt(k.error) }
          };
      break;
    }
    case "stop_task": {
      let i = e.request.task_id;
      if (typeof i !== "string") {
        (m("task_stop_user", "invalid_task_id"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task: task_id must be a string"
            }
          }));
        break;
      }
      let c = i;
      if (!U) {
        (m("task_stop_user", "not_supported"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "stop_task is not supported in this context (callback not registered)"
            }
          }));
        break;
      }
      P(e, x, s, U(c));
      return;
    }
    case "background_tasks": {
      let i = qzr(e.request.tool_use_id);
      if (!i.valid) {
        (m("task_local_shell_background_all", "invalid_tool_use_id"),
          (y = {
            type: "control_response",
            response: { subtype: "error", request_id: e.request_id, error: Xzr }
          }));
        break;
      }
      let { toolUseId: c } = i;
      if (!G) {
        (m("task_local_shell_background_all", "not_supported"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "background_tasks is not supported in this context (callback not registered)"
            }
          }));
        break;
      }
      if (ap()) {
        (m("task_local_shell_background_all", "disabled"),
          (y = {
            type: "control_response",
            response: { subtype: "error", request_id: e.request_id, error: Yzr }
          }));
        break;
      }
      P(
        e,
        x,
        s,
        Promise.resolve()
          .then(() => G(c))
          .then((k) => (c === void 0 ? {} : { backgrounded: k }))
      );
      return;
    }
    case "cancel_async_message": {
      let i = e.request.message_uuid;
      if (typeof i !== "string") {
        (m("bridge_cancel_queued_message", "invalid_message_uuid"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error: "cancel_async_message: message_uuid must be a string"
            }
          }));
        break;
      }
      if (!N) {
        (m("bridge_cancel_queued_message", "not_supported"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "cancel_async_message is not supported in this context (callback not registered)"
            }
          }));
        break;
      }
      P(
        e,
        x,
        s,
        Promise.resolve()
          .then(() => N(i))
          .then(
            (c) => {
              if (c) g("bridge_cancel_queued_message");
              else f("bridge_cancel_queued_message", "not_queued");
              return { cancelled: c };
            },
            (c) => {
              throw (m("bridge_cancel_queued_message", "failed"), c);
            }
          )
      );
      return;
    }
    case "side_question": {
      let i = Ge().safeParse(e.request);
      if (!i.success) {
        (m("bridge_side_question", "invalid_request"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "side_question: question must be a string and history an array of {question, response} strings"
            }
          }));
        break;
      }
      if (!ue) {
        (m("bridge_side_question", "not_registered"),
          (y = {
            type: "control_response",
            response: {
              subtype: "error",
              request_id: e.request_id,
              error:
                "side_question is not supported in this context (onSideQuestion callback not registered)"
            }
          }));
        break;
      }
      if (Y?.has(e.request_id)) {
        t(
          `[bridge:repl] side_question request_id=${e.request_id} already in flight \u2014 ignoring duplicate delivery`
        );
        return;
      }
      let c = new AbortController();
      Y?.set(e.request_id, c);
      let k = Promise.resolve().then(() =>
        ue(i.data, {
          signal: c.signal,
          onProgress: (E) => {
            x({
              type: "system",
              subtype: "control_request_progress",
              request_id: e.request_id,
              ...E,
              uuid: L(),
              session_id: s
            });
          }
        })
      );
      P(
        e,
        x,
        s,
        Nt(k, n.sideQuestionDeadlineMs ?? iKo, izt)
          .then(
            (E) => {
              if (E.response === null) f("bridge_side_question", "no_response");
              else if (E.synthetic !== !1) f("bridge_side_question", "synthetic");
              else g("bridge_side_question");
              return aKo(E);
            },
            (E) => {
              if (d(E) === izt)
                throw (c.abort(), m("bridge_side_question", "deadline"), new Rr(izt));
              if (Ke(E)) f("bridge_side_question", "cancelled");
              else m("bridge_side_question", "failed");
              throw E;
            }
          )
          .finally(() => {
            if (Y?.get(e.request_id) === c) Y.delete(e.request_id);
          })
      );
      return;
    }
    case "fork_conversation": {
      if (de) {
        P(e, x, s, de(e.request, { promptPending: Te?.() ?? !1, requestId: e.request_id }));
        return;
      }
      let i = { forked: !1, error: "unsupported", reason: "requires_remote_control_server" };
      y = {
        type: "control_response",
        response: { subtype: "success", request_id: e.request_id, response: i }
      };
      break;
    }
    default:
      y = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: `REPL bridge does not handle control_request subtype: ${Zt(String(e.request.subtype))}`
        }
      };
  }
  let qe = { ...y, session_id: s };
  (r.write(qe),
    t(
      `[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${y.response.subtype}`
    ));
}
function ye(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var ze = "(servers not adopted)";
function He(e, n) {
  if (n <= 0) return e;
  return {
    ...e,
    [ze]: `${n} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`
  };
}
function Qe(e) {
  if (!ye(e))
    return (
      m("bridge_flag_settings", "invalid_shape"),
      { ok: !1, error: "apply_flag_settings: settings must be an object" }
    );
  let n = Object.keys(e).filter((s) => !Ue.has(s));
  if (n.length > 0) {
    m("bridge_flag_settings", "unsupported_key");
    let s = n.slice(0, $e).map((I) => Mt(I, Fe)),
      l = n.length > s.length ? ` (+${n.length - s.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${s.join(", ")}${l} cannot be changed over Remote Control (only effortLevel and ultracode can)`
    };
  }
  let r = {};
  if ("effortLevel" in e) {
    let s = e.effortLevel;
    if (s !== null && typeof s !== "string")
      return (
        m("bridge_flag_settings", "invalid_type"),
        { ok: !1, error: "apply_flag_settings: effortLevel must be a string or null" }
      );
    r.effortLevel = s;
  }
  if ("ultracode" in e) {
    let s = e.ultracode;
    if (typeof s !== "boolean")
      return (
        m("bridge_flag_settings", "invalid_type"),
        { ok: !1, error: "apply_flag_settings: ultracode must be a boolean" }
      );
    r.ultracode = s;
  }
  if (!("effortLevel" in r) && !("ultracode" in r))
    return (
      m("bridge_flag_settings", "nothing_to_apply"),
      {
        ok: !1,
        error:
          "apply_flag_settings: nothing to apply \u2014 only effortLevel and ultracode can be changed over Remote Control"
      }
    );
  return { ok: !0, settings: r };
}
function vZn(e, n) {
  let r = n?.outcome,
    s = r !== void 0 && k0(r.terminal_reason),
    l = {
      type: "result",
      ...(!s && n?.userMessageUuid && { user_message_uuid: n.userMessageUuid }),
      duration_ms: 0,
      duration_api_ms: 0,
      total_cost_usd: 0,
      usage: { ...bm },
      modelUsage: {},
      permission_denials: [],
      session_id: e,
      uuid: L()
    };
  if (r === void 0 || s)
    return { ...l, subtype: "success", is_error: !1, num_turns: 0, result: "", stop_reason: null };
  let I = {
    is_error: r.is_error,
    num_turns: r.num_turns,
    stop_reason: r.stop_reason,
    ...(r.terminal_reason !== void 0 && { terminal_reason: r.terminal_reason })
  };
  if (r.subtype === "success")
    return {
      ...l,
      ...I,
      subtype: "success",
      result: r.is_error && r.structured_output === void 0 ? (r.result ?? "") : "",
      ...(r.api_error_status != null && { api_error_status: r.api_error_status }),
      ...(r.api_error_code !== void 0 && { api_error_code: r.api_error_code }),
      ...(r.api_error_origin !== void 0 && { api_error_origin: r.api_error_origin }),
      ...(r.api_error !== void 0 && { api_error: r.api_error })
    };
  return { ...l, ...I, subtype: r.subtype, errors: [] };
}
function lKo(e, n) {
  return { type: "system", subtype: "worker_shutting_down", reason: n, session_id: e, uuid: L() };
}
var Xe = "PushNotification";
function F7s(e, n) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: L(),
      container: null,
      model: vi,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: { ...bm },
      content: [
        { type: "tool_use", id: L(), name: Xe, input: { message: e, status: "proactive" } }
      ],
      context_management: null
    },
    parent_tool_use_id: null,
    is_meta: !0,
    session_id: n,
    uuid: L()
  };
}
function r2r(e, n) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: L(),
      container: null,
      model: vi,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: { ...bm },
      content: [{ type: "text", text: e, citations: null }],
      context_management: null
    },
    parent_tool_use_id: null,
    session_id: n,
    uuid: L(),
    timestamp: new Date().toISOString()
  };
}
class P7 {
  capacity;
  ring;
  set = new Set();
  writeIdx = 0;
  constructor(e) {
    ((this.capacity = e), (this.ring = Array(e)));
  }
  add(e) {
    if (this.set.has(e)) return;
    let n = this.ring[this.writeIdx];
    if (n !== void 0) this.set.delete(n);
    ((this.ring[this.writeIdx] = e),
      this.set.add(e),
      (this.writeIdx = (this.writeIdx + 1) % this.capacity));
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    (this.set.clear(), this.ring.fill(void 0), (this.writeIdx = 0));
  }
}
var Ze = p(() => u({ notification_id: o().min(1), origin: A(W_e), content: o() }));
function Je(e) {
  let n = Ze().safeParse(e);
  if (!n.success) return;
  return {
    type: "user",
    uuid: n.data.notification_id,
    message: { role: "user", content: n.data.content },
    parent_tool_use_id: null,
    isSynthetic: !0,
    inbound_origin: W_e
  };
}
function et(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}
var tt = [
    "UNSPECIFIED",
    "ABSENT",
    "VERIFIED",
    "VERIFIED_BY_GATE",
    "INVALID",
    "UNCHECKED",
    "VERIFIED_KEYLESS_DEVICE",
    "SERVICE_VOUCHED",
    "SERVER_AUTHORED",
    "SERVER_REPLAYED",
    "TRANSITIVELY_VOUCHED"
  ],
  me = "DEVICE_ATTESTATION_STATUS_",
  rt = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED"];
function wCe(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return rt[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let n = e.startsWith(me) ? e.slice(me.length) : e;
  return tt.find((r) => r === n) ?? "UNSPECIFIED";
}
var W = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
function U7s(e, n) {
  return W.indexOf(e) <= W.indexOf(n) ? e : n;
}
function o2r(e, n) {
  if (e === "SERVICE_VOUCHED") return !0;
  let r = W.findIndex((s) => s === e);
  return r !== -1 && r <= W.indexOf(n);
}
var s2r = { enforce: !1, acceptLevel: "VERIFIED", acceptStatuses: new Set() },
  ot = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"],
  nt = p(() =>
    u({ accept_level: B(W).default("VERIFIED"), accept_statuses: T(B(ot)).default([]) })
  );
function i2r(e) {
  let n = mo().attestation,
    r = nt().safeParse(e);
  if (!r.success && !n.malformedConfigReported) {
    n.malformedConfigReported = !0;
    try {
      (t(
        `[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${r.error.message}`,
        { level: "error" }
      ),
        f("bridge_event_attestation", "malformed_config"));
    } catch (s) {
      t(`[bridge:attestation] malformed-config report threw: ${d(s)}`, { level: "error" });
    }
  }
  return {
    enforce: !0,
    acceptLevel: r.success ? r.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(r.success ? r.data.accept_statuses : [])
  };
}
function B7s(e) {
  try {
    let n = mo().attestation.reportedCloudWorkerCodes;
    if (n.has(e)) return;
    (n.add(e),
      t(`${O(!0)} the attestation policy header could not be read whole (${e})`, {
        level: "error"
      }),
      f("ccr_worker_attestation_policy", e));
  } catch (n) {
    t(`${O(!0)} policy-fault report threw: ${d(n)}`, { level: "error" });
  }
}
function zwt(e) {
  mo().attestation.filterPolicy = e;
}
function $hn(e) {
  mo().attestation.dropNotifier = e;
}
function j7s(e) {
  let n = mo().attestation;
  if (n.dropNotifier === e) n.dropNotifier = void 0;
}
function EZn(e) {
  mo().attestation.senderDropWriter = e;
}
function kZn(e) {
  let n = mo().attestation;
  if (n.senderDropWriter === e) n.senderDropWriter = void 0;
}
var azt = "[remote-io] warning: ";
function a2r({ status: e, payloadType: n, subtype: r, isCloud: s }) {
  let l = s
    ? "The app that sent it doesn't sign its activity. Use an app that does."
    : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return {
    what:
      n === "control_response"
        ? "permission response"
        : n === "control_request"
          ? `remote command (${r})`
          : "message",
    hint:
      s && e === "ABSENT"
        ? "If you sent it, try again or sign in again."
        : s && e === "VERIFIED_BY_GATE"
          ? "If you sent it, signing in again may fix this."
          : e === "ABSENT" || e === "INVALID"
            ? "Re-pair the sending device in Trusted Devices."
            : e === "VERIFIED_BY_GATE" || e === "VERIFIED_KEYLESS_DEVICE"
              ? l
              : e === "TRANSITIVELY_VOUCHED"
                ? "It came from an automated cloud session, not from a person."
                : void 0
  };
}
function lzt(e) {
  let n = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped)
    return `${n} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let { what: r, hint: s } = a2r(e);
  return `${n} ignored a ${r} that arrived without a valid device signature (attestation: ${e.status}).${s ? ` ${s}` : ""}`;
}
function Ott(e) {
  let { what: n, hint: r } = a2r(e);
  return `This ${n} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${r ? ` ${r}` : ""}`;
}
function st(e) {
  if (e.payloadType === "control_request") return;
  return r2r(e.windowCapped ? lzt(e) : Ott(e), q());
}
var it = new Set([
  "set_model",
  "set_permission_mode",
  "interrupt",
  "stop_task",
  "background_tasks",
  "cancel_async_message",
  "set_max_thinking_tokens",
  "rename_session",
  "set_color",
  "mcp_authenticate",
  "mcp_oauth_callback_url",
  "mcp_reconnect",
  "apply_flag_settings",
  "side_question",
  "reload_plugins"
]);
function xKe(e) {
  let n = dKo(e);
  return typeof n === "string" ? n : void 0;
}
function Ee(e) {
  let n = he(e);
  if (n === void 0 || !it.has(n)) return;
  return { subtype: n, requestId: e.payload ? xKe(e.payload) : void 0 };
}
function he(e) {
  let n = e.payload?.request,
    r = typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0;
  return typeof r === "string" ? r : void 0;
}
var at = new Set(["interrupt", "end_session"]),
  dt = 2000,
  z = 200,
  ve = 128,
  ut = 256;
function K(e, n, r) {
  if ((e.delete(r), e.add(r), e.size > n))
    for (let s of e) {
      e.delete(s);
      break;
    }
}
function Fhn(e) {
  let n = mo().attestation;
  return (
    e.length > ve ||
    n.knownInboundRequestIds.has(e) ||
    n.knownOutboundRequestIds.has(e) ||
    n.elicitationOutboundRequestIds.has(e) ||
    n.hostAskOutboundRequestIds.has(e)
  );
}
function W7s(e) {
  let n = mo().attestation;
  return n.knownOutboundRequestIds.has(e) || n.elicitationOutboundRequestIds.has(e);
}
function TZn(e, { automated: n }) {
  let r = mo().attestation;
  if ((K(r.knownOutboundRequestIds, z, e), n)) K(r.automatedOutboundRequestIds, z, e);
}
var lt = 512;
function G7s(e) {
  K(mo().attestation.deviceOutboundRequestIds, lt, e);
}
function z7s(e) {
  K(mo().attestation.elicitationOutboundRequestIds, z, e);
}
function K7s(e) {
  K(mo().attestation.hostAskOutboundRequestIds, z, e);
}
function pt(e) {
  let n = e.payload?.response;
  if (typeof n !== "object" || n === null) return !1;
  let r = xKe(n),
    s = mo().attestation;
  return (
    r !== void 0 &&
    (s.automatedOutboundRequestIds.has(r) ||
      s.deviceOutboundRequestIds.has(r) ||
      s.hostAskOutboundRequestIds.has(r))
  );
}
function ct(e) {
  return e.payload?.inbound_origin === "tool_host_ended_reminder";
}
var _t = 200;
function AZn(e) {
  K(mo().attestation.resolvedPromptRequestIds, _t, e);
}
function gt(e) {
  let n = e.payload?.response;
  if (typeof n !== "object" || n === null) return !1;
  let r = xKe(n);
  return r !== void 0 && mo().attestation.resolvedPromptRequestIds.has(r);
}
var ft = 60000,
  be = 10;
function Se(e, n) {
  let r = mo().attestation;
  if (r.dropNotifier === void 0 && r.senderDropWriter === void 0) return;
  if (r.recentDropEventIds.has(n)) return;
  K(r.recentDropEventIds, ut, n);
  let s =
      e.payloadType === "control_request" ? r.commandDropNoticeWindow : r.messageDropNoticeWindow,
    l = Date.now();
  if (l - s.start >= ft) ((s.start = l), (s.count = 0));
  if ((s.count++, s.count <= be)) ke(e);
  else if (s.count === be + 1)
    ke({
      status: e.status,
      payloadType: e.payloadType,
      ...(e.subtype !== void 0 && { subtype: e.subtype }),
      windowCapped: !0,
      ...(e.isCloud && { isCloud: !0 })
    });
}
function ke(e) {
  let n = mo().attestation;
  if (n.dropNotifier !== void 0)
    try {
      n.dropNotifier(e);
    } catch (r) {
      t(`${O(e.isCloud === !0)} drop notifier threw: ${d(r)}`, { level: "error" });
    }
  if (n.senderDropWriter !== void 0)
    try {
      let r = st(e);
      if (r) n.senderDropWriter(r);
    } catch (r) {
      t(`${O(e.isCloud === !0)} drop sender writer threw: ${d(r)}`, { level: "error" });
    }
}
function l2r(e) {
  let r =
    (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" &&
    e.payload
      ? xKe(e.payload)
      : void 0;
  if (r !== void 0 && r.length <= ve) K(mo().attestation.knownInboundRequestIds, dt, r);
}
function Z(e, n, r) {
  if (n !== "control_request") return;
  if ((l2r(e), Ee(e) !== void 0))
    g(r ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
}
var yt = new Set(["bash_command", "update_environment_variables", "assistant", "system"]);
function mt(e, n, r, s) {
  try {
    let l = mo().attestation,
      I = s ? l.reportedCloudWorkerCodes : l.reportedStrayDropCodes,
      D = r === "control_request" ? "control_request_other" : yt.has(r) ? r : "other_payload_type",
      S = `${n.toLowerCase()}_${D}`;
    if (I.has(S)) return;
    (I.add(S),
      t(
        `${O(s)} DROPPING unverified ${r} event_id=${e.event_id} status=${n} (stray payload class ${S}; counted once per process)`,
        { level: "warn" }
      ),
      m(s ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", S));
  } catch (l) {
    t(`${O(s)} stray-drop report threw: ${d(l)}`, { level: "error" });
  }
}
function O(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}
function Kwt(e, n, { isCloudWorker: r, vouchWithheld: s = !1 }) {
  let l = !r && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e,
    I = !r && l === "TRANSITIVELY_VOUCHED" && o2r("VERIFIED_KEYLESS_DEVICE", n.acceptLevel) && !s;
  return {
    status: l,
    meetsLevel: I || o2r(l, n.acceptLevel),
    configException:
      n.acceptStatuses.has(l) ||
      (l === "TRANSITIVELY_VOUCHED" && n.acceptStatuses.has("UNSPECIFIED"))
  };
}
function De(e, n, r) {
  let s = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    l = s === "user" || s === "control_response",
    I = wCe(e.device_attestation_status),
    D =
      I === "TRANSITIVELY_VOUCHED" &&
      s === "user" &&
      !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== ""),
    {
      status: S,
      meetsLevel: b,
      configException: C
    } = Kwt(I, n, { isCloudWorker: r, vouchWithheld: D }),
    h = `${S.toLowerCase()}_${s}${D ? "_unstamped" : ""}`,
    U = e.payload?.request,
    G =
      r &&
      S === "SERVICE_VOUCHED" &&
      s === "control_request" &&
      (!at.has(he(e) ?? "") || (typeof U === "object" && U !== null && $tt(U)));
  if (b && !G) {
    if (l) g(r ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return (Z(e, s, r), !1);
  }
  if (!n.enforce) {
    if ((Z(e, s, r), S === "UNSPECIFIED")) return !1;
    if (l)
      (t(`${O(r)} accepting unverified ${s} event_id=${e.event_id} status=${S}`, { level: "info" }),
        f(r ? "ccr_worker_event_attestation" : "bridge_event_attestation", h));
    return !1;
  }
  let N = C,
    F = !1;
  if (l) {
    let w = h;
    if (
      (t(
        `${O(r)} ${N ? "accepting (config exception)" : "DROPPING"} unverified ${s} event_id=${e.event_id} status=${S}`,
        { level: N ? "info" : "warn" }
      ),
      N)
    )
      f(r ? "ccr_worker_event_attestation" : "bridge_event_attestation", w);
    else if (s === "control_response" && pt(e))
      ((F = !0),
        t(
          `${O(r)} dropped ${s} event_id=${e.event_id} status=${S} answers an automated outbound request; notice suppressed`,
          { level: "info" }
        ),
        m(r ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${w}_automated_reply`));
    else if (s === "control_response" && gt(e))
      ((F = !0),
        t(
          `${O(r)} dropped ${s} event_id=${e.event_id} status=${S} is a duplicate answer to an already-resolved prompt; notice suppressed`,
          { level: "info" }
        ),
        m(
          r ? "ccr_worker_event_attestation" : "bridge_event_attestation",
          `${w}_resolved_duplicate`
        ));
    else if (r && s === "user" && ct(e))
      ((F = !0),
        t(
          `${O(r)} dropped ${s} event_id=${e.event_id} status=${S} is the service's own linked-computer line; notice suppressed`,
          { level: "info" }
        ),
        m("ccr_worker_event_attestation", `${w}_service_line`));
    else
      ((F = !0),
        m(r ? "ccr_worker_event_attestation" : "bridge_event_attestation", w),
        Se({ status: S, payloadType: s, ...(r && { isCloud: !0 }) }, e.event_id));
  } else if (s === "control_request" && !N) {
    let w = Ee(e);
    if (w) {
      F = !0;
      let j = w.requestId !== void 0 && Fhn(w.requestId) ? void 0 : w.requestId;
      (t(
        `${O(r)} DROPPING unverified control_request subtype=${w.subtype} event_id=${e.event_id} status=${S}${j === void 0 && w.requestId !== void 0 ? " (forged-id refusal suppressed, or the id is too long)" : ""}`,
        { level: "warn" }
      ),
        m(
          r ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation",
          `${S.toLowerCase()}_${w.subtype}`
        ),
        Se(
          {
            status: S,
            payloadType: s,
            subtype: w.subtype,
            requestId: j,
            ...(r && { isCloud: !0 })
          },
          e.event_id
        ));
    }
  }
  if (!N && !F) mt(e, S, s, r);
  if (N) Z(e, s, r);
  return !N;
}
function CZn(e) {
  return De(e, mo().attestation.filterPolicy?.() ?? s2r, !1);
}
function V7s(e, n) {
  if (e.source !== "client") {
    try {
      let r = mo().attestation.reportedCloudWorkerCodes;
      if (!r.has("source_not_client"))
        (r.add("source_not_client"),
          t(
            `${O(!0)} ${n.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`,
            { level: "warn" }
          ),
          m("ccr_worker_stray_event_attestation", "source_not_client"));
    } catch (r) {
      t(`${O(!0)} source-drop report threw: ${d(r)}`, { level: "error" });
    }
    if (!n.enforce) l2r(e);
    return n.enforce;
  }
  return De(e, n, !0);
}
export {
  Vzr,
  bZn,
  Lhn,
  M7s,
  D7s,
  qzr,
  Yzr,
  Xzr,
  Jzr,
  Qzr,
  jce,
  szt,
  Zzr,
  sKo,
  e2r,
  t2r,
  H7s,
  Wce,
  Nhn,
  n2r,
  SZn,
  wZn,
  L7s,
  iKo,
  izt,
  aKo,
  N7s,
  $7s,
  vZn,
  lKo,
  F7s,
  r2r,
  P7,
  wCe,
  U7s,
  o2r,
  s2r,
  i2r,
  B7s,
  zwt,
  $hn,
  j7s,
  EZn,
  kZn,
  azt,
  a2r,
  lzt,
  Ott,
  xKe,
  Fhn,
  W7s,
  TZn,
  G7s,
  z7s,
  K7s,
  AZn,
  l2r,
  Kwt,
  CZn,
  V7s
};

//# sourceMappingURL=chunk-tzrn3e6a.js.map
