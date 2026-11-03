// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { Ye, Qe, N, d } from "./chunk-fs43t96t.js";
import { Ky, X, Pe } from "./chunk-4hww8411.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { QMn, ZMn, Whs } from "./chunk-1nnn2mdy.js";
import { p } from "./chunk-qmkm2x59.js";
import { zw, Tq, fX, ju, S2, Zst, eit, l } from "./chunk-ewvf3tep.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { pY, IGe, KK } from "./chunk-6h7ejyet.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { vWr } from "./chunk-wany0nxw.js";
import { ebn, fKt, pKt, XE, oC, xEt, BVe, lRe, vYo } from "./chunk-ajtyjx88.js";
import { Ht } from "./chunk-ddpw2j06.js";
import { oa } from "./chunk-7zgz07kc.js";
import { pLe, Qye, Zye } from "./chunk-h6j5xbav.js";
import { nle, O$t } from "./chunk-j0tbz6ra.js";
import { Yct } from "./chunk-xcgje7f7.js";
import { dzt, zm } from "./chunk-g49hnbqz.js";
import { bbt } from "./chunk-wfjw07k3.js";
import { DL, sTe, OUs, MUs } from "./chunk-yyq6mj0n.js";
import { wCe } from "./chunk-tzrn3e6a.js";
import { f9, Ow, Uce, FU, Bce } from "./chunk-w89b9cst.js";
import { Mio } from "./chunk-wybpgt3b.js";
import { Lce, i9, chn } from "./chunk-njnxaswh.js";
import { xX } from "./chunk-d4k7zqtk.js";
import { m5e, lxn } from "./chunk-02nkpkdr.js";
import { pwe } from "./chunk-xteh8x99.js";
import { kPt, Zfs } from "./chunk-f175dfq1.js";
import { fL } from "./chunk-hyekvybh.js";
import { lAs } from "./chunk-fdxhgrmx.js";
import { U9e } from "./chunk-gfqayeek.js";
import { OEe } from "./chunk-c9bdtm0y.js";
import { gK } from "./chunk-9kh63k93.js";
import { o, v, M, oe, T, u, yt, me, B, A } from "./chunk-0bqrj5ah.js";
import { Ds, py } from "./chunk-tdv74tcm.js";
import { randomUUID as De } from "crypto";
var de = p(() => {
  let e = me(o(), oe()),
    n = yt({ type: A("text"), text: o() }),
    s = new Map(),
    i = {
      text: n,
      tool_use: yt({ type: A("tool_use"), id: o(), name: o(), input: e }),
      thinking: yt({ type: A("thinking"), thinking: o(), signature: o().optional() }),
      redacted_thinking: yt({ type: A("redacted_thinking"), data: o() }),
      server_tool_use: yt({ type: A("server_tool_use"), id: o(), name: o(), input: e }),
      mcp_tool_use: yt({ type: A("mcp_tool_use"), id: o(), name: o(), server_name: o(), input: e })
    };
  for (let [S, h] of Object.entries(i)) s.set(S, h);
  let r = v().finite();
  return {
    text: n,
    assistantByType: s,
    usage: yt({
      input_tokens: r,
      output_tokens: r,
      cache_creation_input_tokens: r.nullish(),
      cache_read_input_tokens: r.nullish(),
      iterations: T(yt({})).nullish()
    }),
    generic: yt({ type: o() }),
    toolResultLike: yt({ type: o(), tool_use_id: o() }),
    toolResult: yt({ type: A("tool_result"), tool_use_id: o(), is_error: M().optional() })
  };
});
function q(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var pe = 256,
  gt = "[truncated: too deep]";
function Oe(e) {
  let n = [];
  if (typeof e === "object" && e !== null) n.push({ value: e, depth: 1 });
  while (n.length > 0) {
    let { value: s, depth: i } = n.pop();
    if (i > pe) return !0;
    for (let r of Object.values(s))
      if (typeof r === "object" && r !== null) n.push({ value: r, depth: i + 1 });
  }
  return !1;
}
function _t(e) {
  let n = 0,
    s = [{ value: e, depth: 1 }];
  while (s.length > 0) {
    let { value: i, depth: r } = s.pop(),
      S = Array.isArray(i) ? i : q(i) ? i : null;
    if (S === null) continue;
    for (let h of Object.keys(S)) {
      let y = Reflect.get(S, h);
      if (typeof y !== "object" || y === null) continue;
      if (r + 1 > pe) (Reflect.set(S, h, gt), n++);
      else s.push({ value: y, depth: r + 1 });
    }
  }
  return n;
}
function he(e) {
  return q(e) && typeof e.type === "string" ? e.type : null;
}
function St(e) {
  let n = he(e);
  if (n !== null) return n;
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function vt(e) {
  let n = he(e);
  if (n === null) return !1;
  let s = de();
  return (
    s.assistantByType.get(n) ?? (n.endsWith("_tool_result") ? s.toolResultLike : s.generic)
  ).safeParse(e).success;
}
function Rt(e) {
  let n = e.content;
  if (n === void 0 || typeof n === "string") return !0;
  if (Array.isArray(n)) {
    let s = n.filter((i) => {
      let r = he(i);
      if (r === null) return !1;
      return r === "text" ? de().text.safeParse(i).success : de().generic.safeParse(i).success;
    });
    if (s.length !== n.length) e.content = s;
    return !0;
  }
  if (!q(n)) return ((e.content = String(n)), !0);
  try {
    return ((e.content = _(n)), !0);
  } catch {
    return !1;
  }
}
function wt(e) {
  let n = he(e);
  if (n === null || !q(e)) return !1;
  let s = de();
  if (n === "text") return s.text.safeParse(e).success;
  if (n === "tool_result") {
    if (!s.toolResult.safeParse(e).success) return !1;
    return Rt(e);
  }
  return s.generic.safeParse(e).success;
}
function D(e, n, s) {
  t(`[wireFrameShape] ${e} frame ${typeof n === "string" ? n : "(no uuid)"}: ${s}`, {
    level: "error"
  });
}
function Ie(e, n, s, i) {
  let r = [],
    S = e.filter((h) => {
      try {
        if (n(h)) return !0;
      } catch (y) {
        return (r.push(`unreadable block (${d(y)})`), !1);
      }
      return (r.push(St(h)), !1);
    });
  if (r.length === 0) return e;
  return (D(s, i, `dropped ${r.length} malformed content block(s): ${r.join(", ")}`), S);
}
function kt(e) {
  let n;
  if (typeof e.uuid === "string" && e.uuid !== "") n = e.uuid;
  else
    (D("assistant", e.uuid, "minted a uuid \u2014 original was not a non-empty string"),
      (n = De()),
      (e.uuid = n));
  let s = e.message;
  if (!q(s)) return (D("assistant", e.uuid, "dropped \u2014 message is not an object"), !1);
  if (s.id !== void 0 && typeof s.id !== "string")
    ((s.id = typeof s.id === "number" && Number.isFinite(s.id) ? String(s.id) : e.uuid),
      D("assistant", e.uuid, "coerced a non-string message.id"));
  if (typeof s.content === "string") s.content = [{ type: "text", text: s.content }];
  let i = s.content;
  if (!Array.isArray(i))
    return (D("assistant", e.uuid, "dropped \u2014 message.content is not an array"), !1);
  let r = Ie(i, vt, "assistant", e.uuid);
  if (r.length === 0 && i.length > 0)
    return (D("assistant", e.uuid, "dropped \u2014 no valid content blocks remain"), !1);
  if (r !== i) s.content = r;
  return (bt(s, n), !0);
}
function bt(e, n) {
  let s = [];
  if (e.model !== void 0 && typeof e.model !== "string") (delete e.model, s.push("model"));
  if (e.stop_reason !== void 0 && e.stop_reason !== null && typeof e.stop_reason !== "string")
    ((e.stop_reason = null), s.push("stop_reason"));
  if (e.usage !== void 0 && !de().usage.safeParse(e.usage).success)
    (delete e.usage, s.push("usage"));
  if (s.length > 0) D("assistant", n, `removed malformed envelope field(s): ${s.join(", ")}`);
}
function Ct(e) {
  if (e.uuid !== void 0 && (typeof e.uuid !== "string" || e.uuid === ""))
    (D("user", e.uuid, "minted a uuid \u2014 original was not a non-empty string"),
      (e.uuid = De()));
  let n = e.message;
  if (!q(n)) return (D("user", e.uuid, "dropped \u2014 message is not an object"), !1);
  let s = n.content;
  if (typeof s === "string") return !0;
  if (!Array.isArray(s))
    return (D("user", e.uuid, "dropped \u2014 message.content is neither string nor array"), !1);
  let i = Ie(s, wt, "user", e.uuid);
  if (i.length === 0 && s.length > 0)
    return (D("user", e.uuid, "dropped \u2014 no valid content blocks remain"), !1);
  if (i !== s) n.content = i;
  return !0;
}
function we(e) {
  if (!q(e)) return !1;
  switch (e.type) {
    case "message_start":
      return q(e.message) && typeof e.message.id === "string";
    case "content_block_start": {
      let n = e.content_block;
      if (!q(n) || typeof n.type !== "string") return !1;
      switch (n.type) {
        case "tool_use":
        case "server_tool_use":
          return typeof n.id === "string" && typeof n.name === "string";
        case "text":
          return typeof n.text === "string";
        case "thinking":
          return typeof n.thinking === "string";
        default:
          return !0;
      }
    }
    case "content_block_delta": {
      let n = e.delta;
      if (!q(n)) return !1;
      switch (n.type) {
        case "text_delta":
          return typeof n.text === "string";
        case "input_json_delta":
          return typeof n.partial_json === "string";
        case "signature_delta":
          return typeof n.signature === "string";
        case "thinking_delta":
          return typeof n.thinking === "string";
        default:
          return !0;
      }
    }
    default:
      return !0;
  }
}
function IFe(e) {
  if (!q(e)) return !0;
  try {
    let n = !0;
    try {
      let i = _t(e);
      if (i > 0)
        D(
          typeof e.type === "string" ? e.type : "unknown",
          e.uuid,
          `replaced ${i} subtree(s) nested deeper than ${pe} levels with a marker`
        );
    } catch {
      n = !1;
    }
    let s;
    switch (e.type) {
      case "assistant":
        s = kt(e);
        break;
      case "user":
        s = Ct(e);
        break;
      case "stream_event":
        if (((s = we(e.event)), !s))
          D("stream_event", e.uuid, "dropped \u2014 inner event is malformed");
        break;
      default:
        s = !0;
        break;
    }
    if (s && !n && Oe(e))
      return (
        D(
          typeof e.type === "string" ? e.type : "unknown",
          e.uuid,
          `dropped \u2014 nested deeper than ${pe} levels`
        ),
        !1
      );
    return s;
  } catch (n) {
    return (
      D(
        typeof e.type === "string" ? e.type : "unknown",
        e.uuid,
        `dropped \u2014 conformance threw: ${d(n)}`
      ),
      !1
    );
  }
}
var Et = [
    "blocked_path",
    "decision_reason",
    "decision_reason_type",
    "decision_reason_code",
    "decision_reason_rule_source",
    "title",
    "display_name",
    "description",
    "agent_id",
    "tool_kind",
    "server_prompt",
    "provenance_prompt_line"
  ],
  Tt = [
    ["decision_reason_hook_event", Whs],
    ["decision_reason_hook_source", QMn],
    ["decision_reason_hook_plugin_id", ZMn]
  ],
  Mt = [
    "classifier_approvable",
    "suppress_always_allow_rule",
    "default_to_no",
    "requires_user_interaction",
    "server_policy_ask_only"
  ];
function lwe(e) {
  return (
    typeof e.agent_id === "string" &&
    e.agent_id !== "" &&
    !IGe(String(e.tool_name)) &&
    !KK(String(e.tool_name))
  );
}
function $Rn(e) {
  if (!q(e)) return !1;
  try {
    if (
      typeof e.tool_name !== "string" ||
      typeof e.tool_use_id !== "string" ||
      !q(e.input) ||
      Oe(e)
    )
      return (
        t(
          "[wireFrameShape] can_use_tool request dropped \u2014 tool_name/tool_use_id not strings, input not an object, or nested too deep",
          { level: "error" }
        ),
        !1
      );
    let n = [];
    for (let s of Et) if (e[s] !== void 0 && typeof e[s] !== "string") (delete e[s], n.push(s));
    for (let [s, i] of Tt) if (e[s] !== void 0 && i(e[s]) === void 0) (delete e[s], n.push(s));
    for (let s of Mt) if (e[s] !== void 0 && typeof e[s] !== "boolean") (delete e[s], n.push(s));
    if (e.permission_suggestions !== void 0) {
      let s = e.permission_suggestions,
        i = Array.isArray(s) ? s.filter((r) => pY().safeParse(r).success) : [];
      if (!Array.isArray(s) || i.length !== s.length)
        if (
          (n.push(
            `permission_suggestions (${Array.isArray(s) ? `${s.length - i.length} of ${s.length} entries` : "not an array"})`
          ),
          i.length > 0)
        )
          e.permission_suggestions = i;
        else delete e.permission_suggestions;
    }
    if (e.matched_ask_rule !== void 0) {
      let s = e.matched_ask_rule;
      if (
        !q(s) ||
        typeof s.source !== "string" ||
        typeof s.tool_name !== "string" ||
        (s.rule_content !== void 0 && typeof s.rule_content !== "string")
      )
        (delete e.matched_ask_rule, n.push("matched_ask_rule"));
    }
    if (e.mcp_server !== void 0) {
      let s = e.mcp_server;
      if (!q(s) || typeof s.name !== "string" || typeof s.source !== "string")
        (delete e.mcp_server, n.push("mcp_server"));
    }
    if (e.computer_folder !== void 0) {
      let s = e.computer_folder;
      if (!q(s) || typeof s.path !== "string" || typeof s.computer_name !== "string")
        (delete e.computer_folder, n.push("computer_folder"));
    }
    if (n.length > 0)
      t(
        `[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${n.join(", ")}`,
        { level: "error" }
      );
    return !0;
  } catch (n) {
    return (
      t(`[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${d(n)}`, {
        level: "error"
      }),
      !1
    );
  }
}
function RRt(e) {
  let n = "tool_use_id" in e ? e.tool_use_id : void 0;
  return {
    behavior: "deny",
    message: "Malformed permission request from worker",
    ...(typeof n === "string" && { toolUseID: n })
  };
}
function FRn(e) {
  let n = e.worker_epoch;
  return typeof n === "number" && Number.isSafeInteger(n) && n > 0 ? n : void 0;
}
var Pt = 2000,
  qt = 1e4,
  Fe = 2000,
  ils = Fe,
  At = "Sending this machine's settings \u2014 Esc cancels the message\u2026",
  Dt = (e) => `Still sending this machine's settings (${Math.round(e / 1000)} s)\u2026`,
  Ot =
    "That message was not sent; this machine's settings are still on their way to the cloud session, and your next message waits for them too.",
  It =
    "you stopped waiting for this machine's settings to reach the cloud session; they are still uploading, and a message sent now waits for them again",
  Ut = "withdrawn before it was sent",
  Ft = `this machine's settings were not sent (see above); send it again to run it ${lAs}`,
  Nt =
    "this machine's settings may not have reached the cloud session (see above); send it again to run it anyway";
function Ne(
  e,
  {
    retire: n,
    noticeAfterMs: s = Pt,
    progressEveryMs: i = qt,
    typedAheadGraceMs: r = Fe,
    now: S = Date.now
  }
) {
  let h = (E) => e.failureAnsweredAtMs !== void 0 && E - e.failureAnsweredAtMs >= r,
    y = e.outcome();
  if (y !== void 0 && (fe(y) === void 0 || h(S()))) {
    if (fe(y) !== void 0)
      ge(be(y) === "hold_unsure" ? "ungated_after_timeout" : "ungated_after_failure");
    return null;
  }
  let w = !1,
    R = 0,
    k,
    b = !1;
  e.completion.then(
    (E) => {
      if (fe(E) !== void 0) e.failureAnsweredAtMs ??= S();
    },
    () => {}
  );
  let C = (E, W, I, Q, ie) => {
      let Y = E === void 0 ? void 0 : fe(E);
      if (Y !== void 0 && (W || !h(I)))
        return (
          (e.failureAnsweredAtMs ??= S()),
          (w = !0),
          ge(
            Q
              ? "came_back_at_exit"
              : W
                ? "came_back_waited"
                : S() - (e.settledAtMs() ?? S()) < r
                  ? "came_back_early"
                  : "came_back_late"
          ),
          Y
        );
      (ge(Ue(E, w ? "resent" : "unasked")), n());
      return;
    },
    O = async (E) => {
      let W = S();
      await X(s, E);
      for (let I = !1; !E.aborted; I = !0)
        (e.status.publish(I ? Dt(S() - W) : At, "progress"), await X(i, E));
    },
    L = () => {
      if (((R += 1), k === void 0)) {
        let E = new AbortController();
        ((k = E),
          e.completion.then(
            () => E.abort(),
            () => E.abort()
          ),
          O(E.signal));
      }
      return () => {
        if (((R -= 1), R === 0 && e.outcome() === void 0)) (k?.abort(), (k = void 0));
      };
    },
    ye = (E) => {
      let W = E.then((I) => (I ? L() : void 0));
      return () => void W.then((I) => I?.());
    };
  return async (E) => {
    let { released: W, withdrawn: I, exiting: Q, final: ie, decided: Y } = E,
      J = S(),
      ee = e.outcome();
    if (ee !== void 0) {
      let j = C(ee, !1, J, !1, !1);
      if (j !== void 0) se(0, "upload_failed", !1);
      return j;
    }
    let Z = void 0,
      G = Z !== void 0,
      z = () => S() - J,
      ae = e.completion.then(
        (j) => ({ settled: j }),
        () => ({ settled: void 0 })
      ),
      ne = Z === void 0 ? L() : ye(Z.passed),
      U = await Promise.race([
        ae,
        W.then(() => "released"),
        I.then(() => "withdrawn"),
        Y.then(() => "decided")
      ]);
    ne();
    let P = U === "released" && Q();
    if (P) {
      if (
        ((U = await Promise.race([ae, I.then(() => "withdrawn"), Y.then(() => "decided")])),
        typeof U === "object" && !ie())
      ) {
        (se(z(), "upload_settled", G), ge(Ue(U.settled, "handover")), n());
        return;
      }
    }
    if (U === "decided") {
      se(z(), "decided", G);
      return;
    }
    if (U === "released") {
      if (!b && !G)
        ((b = !0),
          setTimeout(() => {
            b = !1;
          }, 0),
          e.status.publish(Ot, "info"));
      return (se(z(), "released", G), { go: !1, reason: It });
    }
    if (U === "withdrawn") return (se(z(), "withdrawn", G), { go: !1, reason: Ut });
    let H = C(U.settled, !0, J, P, G);
    return (se(z(), H === void 0 ? "upload_settled" : "upload_failed", G), H);
  };
}
function be(e) {
  if (e.kind !== "uploaded") return "go";
  switch (e.outcome) {
    case "failed":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
      return "hold_failed";
    case "deadline":
      return "hold_unsure";
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "raced":
    case "not_forwarded_at_create":
    case "aborted":
      return "go";
  }
}
function fe(e) {
  switch (be(e)) {
    case "go":
      return;
    case "hold_failed":
      return { go: !1, reason: Ft };
    case "hold_unsure":
      return { go: !1, reason: Nt };
  }
}
function Ue(e, n) {
  if (e === void 0) return "upload_rejected";
  switch (be(e)) {
    case "go":
      return "went";
    case "hold_failed":
      return `ran_without_settings_${n}`;
    case "hold_unsure":
      return `ran_unsure_${n}`;
  }
}
function ge(e) {
  if (e === "went") g("ccr_home_seed_first_message");
  else if (e === "upload_rejected") m("ccr_home_seed_first_message", e);
  else f("ccr_home_seed_first_message", e);
}
function se(e, n, s) {
  a("tengu_home_seed_first_send_wait", { held_ms: e, release: c(n), ...{} });
}
import { randomUUID as tt } from "crypto";
import { isDeepStrictEqual as dn } from "util";
var tfr = 300000;
function $e(e, n) {
  if (n !== void 0) return n;
  return e === "side_question" ? 600000 : 75000;
}
import { appendFile as $t } from "fs/promises";
function x(e, n, s) {
  return;
}
var xt = p(() =>
  u({
    send_now: B(["stopped", "delivering", "nothing_waiting"])
      .optional()
      .catch(void 0)
  })
);
function nfr(e) {
  return Array.isArray(e.capabilities) && e.capabilities.includes(Mio);
}
async function als(e, n) {
  try {
    let s = await e({
      subtype: "interrupt",
      send_now: !0,
      ...(n !== void 0 && { message_uuid: n })
    });
    return fL("interrupt", xt(), s ?? {})?.send_now ?? "stopped";
  } catch (s) {
    return (t(`[thin-client] send-now request failed: ${d(s)}`, { level: "error" }), "failed");
  }
}
var He = ["can_use_tool", "request_user_dialog", "hook_callback", ...OEe],
  xe = [
    "elicitation",
    "mcp_message",
    "oauth_token_refresh",
    "host_auth_token_refresh",
    "remote_control_work_secret"
  ];
import { randomUUID as _e } from "crypto";
var Lt = new RegExp(`<${fX}[\\s>]`, "i"),
  Wt = new RegExp(`</${fX}>`, "i");
function Kt(e) {
  return Lt.test(e) && Wt.test(e);
}
var rfr = new Set(["user", "env_manager_log"]),
  jt = new Map([
    ["thinking_tokens", ["estimated_tokens", "estimated_tokens_delta", "user_message_uuid"]],
    ["post_turn_summary", ["summarizes_uuid", "status_category", "status_detail", "needs_action"]],
    ["task_summary", ["detail"]],
    ["commands_changed", ["commands"]]
  ]);
function We(e) {
  let n = e.subtype;
  if (e.type !== "system" || typeof n !== "string") return null;
  let s = jt.get(n);
  if (!s) return null;
  let i = { type: "system", subtype: n, uuid: e.uuid, session_id: e.session_id };
  for (let r of s) if (r in e) i[r] = e[r];
  return i;
}
var Ke = 500;
function Le(e) {
  if (
    e.startsWith("<bash-stdout") ||
    e.startsWith("<bash-stderr") ||
    e.startsWith("<local-command-stdout") ||
    e.startsWith("<local-command-stderr") ||
    e.startsWith(Zst) ||
    e.startsWith(`<${S2} `) ||
    e.startsWith(`<${S2}>`)
  )
    return !0;
  if (Zye(e)) return !0;
  if (
    (e.startsWith(nle) || e.startsWith(pLe)) &&
    e.startsWith(
      "<",
      e.indexOf(`
`) + 1
    )
  )
    return !0;
  let n = Qye.find((s) => e.startsWith(s));
  if (n !== void 0 && e.startsWith("<", n.length)) return !0;
  if (Kt(e)) return !0;
  return (
    e.includes("<bash-input>") ||
    e.includes(`<${zw}>`) ||
    e.includes("<user-memory-input>") ||
    e.includes(`<${ju}`) ||
    e.includes("<mcp-resource-update") ||
    e.includes("<mcp-polling-update") ||
    e.includes(`<${eit}>`) ||
    e.includes(`<${Tq}>`)
  );
}
function OFe(e) {
  if (e.tool_use_result !== void 0) return !0;
  let n = e.message?.content;
  if (typeof n === "string") return Le(n);
  return (
    Array.isArray(n) &&
    n.some(
      (s) =>
        typeof s === "object" &&
        s !== null &&
        "type" in s &&
        (s.type === "tool_result" ||
          (s.type === "text" && "text" in s && typeof s.text === "string" && Le(s.text)))
    )
  );
}
function xRt(e) {
  let n = e.message?.content;
  return (
    Array.isArray(n) &&
    !n.every(
      (s) =>
        typeof s === "object" && s !== null && (s.type !== "text" || typeof s.text === "string")
    )
  );
}
function K7r(e) {
  return OFe(e) || xRt(e);
}
function V7r(e) {
  if (K7r(e)) return !0;
  let n = e.message?.content;
  return (
    typeof n === "string"
      ? [n]
      : Array.isArray(n)
        ? n.flatMap((i) =>
            typeof i === "object" && i !== null && i.type === "text" && typeof i.text === "string"
              ? [i.text]
              : []
          )
        : []
  ).some(Vt);
}
function Vt(e) {
  let n = e.indexOf(`
`);
  return (
    (n === -1 || n === e.length - 1) &&
    (e.startsWith(nle) || e.startsWith(pLe) || Qye.some((s) => e.startsWith(s.trimEnd())))
  );
}
var Ve = null,
  Ge = 30000,
  le = 5,
  Se = 5000,
  Gt = 30000,
  ze = 30000,
  zt = 30000,
  Bt = new Set([401, 403, 404]),
  Ce = 4096,
  Yt = {
    verified: "verified",
    verified_by_gate: "verified",
    verified_keyless_device: "verified",
    service_vouched: "verified",
    absent: "unverified",
    invalid: "unverified"
  };
function re(e) {
  return String(e)
    .slice(0, 64)
    .replace(/[^\x20-\x7e]/g, "?");
}
function Xt(e) {
  if (typeof e !== "string") return "unknown";
  let n = e.startsWith("DEVICE_ATTESTATION_STATUS_") ? e.slice(26).toLowerCase() : e;
  return Yt[n] ?? "unknown";
}
var Qt = 2000;
function Be(e, n, s) {
  let i = typeof e.created_at === "string" ? Date.parse(e.created_at) : NaN;
  if (Number.isNaN(i)) return { replayed: !0 };
  return { sentAt: i, replayed: i < n + Qt, ...(s !== void 0 && { ageMs: et(s, i) - i }) };
}
function Jt(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0,
    s = typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0,
    i = e.device_attestation_status;
  if (!(s === "hook_callback" || OEe.some((y) => y === s))) return {};
  let S = e.payload.remote_tool_gate,
    h = S === void 0 || S === null ? void 0 : S === "caller_reauthored" ? "present" : "other";
  return {
    ...(i !== void 0 &&
      i !== null && { attestationStatus: wCe(typeof i === "string" ? i.toUpperCase() : i) }),
    ...(h !== void 0 && { modeStamp: h })
  };
}
function et(e, n) {
  let s = Date.now(),
    i = performance.now(),
    r = e.serviceMs + Math.max(s - e.wallMs, i - e.monotonicMs);
  if (n > r) return ((e.serviceMs = n), (e.wallMs = s), (e.monotonicMs = i), n);
  return r;
}
var Zt = bbt("ccr_worker", void 0),
  en = "remote_tool_result_too_large",
  tn = p(() => u({ error: u({ type: A("session_not_active") }) })),
  nn = "tool_host_ended";
function Ee(e) {
  return typeof e === "object" && e !== null && "type" in e && typeof e.type === "string";
}
class Me {
  sessionId;
  orgUuid;
  getAccessToken;
  callbacks;
  onAuth401;
  state = "idle";
  abortController = null;
  reconnectAttempts = 0;
  reconnectTimer = null;
  livenessTimer = null;
  driftTimer = null;
  closedCause = null;
  lastDriftCheck = 0;
  lastHealthyAt;
  downSince;
  driftRedial = !1;
  dialsSinceUp = 0;
  lastSequenceNum = 0;
  issuedRequestIds = new Set();
  liveOnlyRequestIds = new Set();
  ownRequestUuids = new Map();
  trustedDeviceToken;
  trackedSends;
  servesSession;
  rediallingPastBudget = !1;
  connectedSince = 0;
  resumed = !1;
  serviceClock = void 0;
  eventSigner;
  controlOnly;
  admitProjectPersonMessages;
  withholdTrustedDeviceToken;
  constructor(
    e,
    n,
    s,
    i,
    r,
    S,
    {
      trackSends: h = !1,
      keepRedialling: y,
      eventSigner: w,
      controlOnly: R = !1,
      admitProjectPersonMessages: k = !1,
      withholdTrustedDeviceToken: b = !1
    } = {}
  ) {
    this.sessionId = e;
    this.orgUuid = n;
    this.getAccessToken = s;
    this.callbacks = i;
    this.onAuth401 = r;
    if (S !== void 0 && S > 0) this.lastSequenceNum = S;
    ((this.trackedSends = h ? new Set() : null),
      (this.servesSession = y ?? (() => !1)),
      (this.eventSigner = w),
      (this.controlOnly = R),
      (this.admitProjectPersonMessages = k),
      (this.withholdTrustedDeviceToken = b));
  }
  get keepRedialling() {
    try {
      return this.servesSession();
    } catch {
      return !1;
    }
  }
  serviceTimeMs() {
    return this.serviceClock === void 0 ? void 0 : et(this.serviceClock, 0);
  }
  sendsInFlight() {
    let e = [...(this.trackedSends ?? [])];
    return { count: e.length, settled: Promise.allSettled(e).then(() => {}) };
  }
  async flushSends(e) {
    let { count: n, settled: s } = this.sendsInFlight();
    if (n > 0) await Pe(s, e);
  }
  async connect() {
    if (this.state === "connecting" || this.state === "connected") {
      t("[SessionsV2Client] Already connecting/connected");
      return;
    }
    if (this.closedCause === "deliberate") {
      t("[SessionsV2Client] Ignoring connect() \u2014 deliberately closed");
      return;
    }
    ((this.state = "connecting"),
      (this.closedCause = null),
      this.dialsSinceUp++,
      (this.connectedSince = Date.now()),
      (this.resumed = this.lastSequenceNum > 0));
    let e = new URL(`${rn().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events/stream`);
    if (this.lastSequenceNum > 0)
      e.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.controlOnly) e.searchParams.set("control_only", "1");
    let n = new AbortController();
    this.abortController = n;
    let s;
    try {
      s = await this.authHeaders();
    } catch (r) {
      if (this.abortController !== n) return;
      (t(`[SessionsV2Client] Could not build the stream's credentials: ${d(r)}`, {
        level: "error"
      }),
        (this.abortController = null),
        this.handleStreamEnd());
      return;
    }
    let i = { ...s, Accept: "text/event-stream" };
    if (n.signal.aborted || this.abortController !== n) return;
    if (this.lastSequenceNum > 0) i["Last-Event-ID"] = String(this.lastSequenceNum);
    (t(`[SessionsV2Client] Connecting to ${e.href} (from_sequence_num=${this.lastSequenceNum})`),
      this.readStream(e, i, n));
  }
  loadTrustedDeviceToken() {
    if (this.withholdTrustedDeviceToken) return Promise.resolve("");
    let e = void 0,
      n = () => {
        if (this.trustedDeviceToken === e) this.trustedDeviceToken = void 0;
      },
      s = (async () => {
        try {
          let i = (await Ow()) ?? "";
          if (!i) n();
          return i;
        } catch (i) {
          return (
            n(),
            t(
              `[SessionsV2Client] trusted-device token unavailable, sending no td-v1 header: ${d(i)}`
            ),
            ""
          );
        }
      })();
    return ((e = s), s);
  }
  rereadTrustedDeviceToken() {
    if (((this.trustedDeviceToken = void 0), zm())) FU();
  }
  async recoverTrustedDeviceToken(e, n) {
    try {
      if (this.withholdTrustedDeviceToken) return !1;
      if (!(await dzt())) return !1;
      if (!chn(e)) return (Uce("[SessionsV2Client]", e), this.rereadTrustedDeviceToken(), !1);
      let s = await Bce(n || void 0);
      if (!s) return !1;
      return ((this.trustedDeviceToken = Promise.resolve(s)), !0);
    } catch (s) {
      return (t(`[SessionsV2Client] trusted-device re-enrollment failed: ${d(s)}`), !1);
    }
  }
  async postEvents(e, n, s, i = zt) {
    let r = await Zt(
      e,
      { method: "POST", headers: s, body: _(n), signal: AbortSignal.timeout(i), ...oa({ url: e }) },
      (w) => fetch(e, w)
    );
    if (r.ok) {
      let R = (await r.json()).results?.[0],
        k = R ? parseInt(String(R.sequence_num), 10) : NaN;
      return { ok: !0, sequence_num: isNaN(k) ? 0 : k };
    }
    let S,
      h = !1,
      y = r.status === 413;
    if (r.status === 403 && zm()) {
      let w = await Ze(r);
      S = w.reason === "untrusted_device" ? w.about : void 0;
    } else if (r.status === 409) h = await on(r);
    else if (r.status === 400) y = sn(await qe(r));
    else await gK(r);
    return {
      ok: !1,
      status: r.status,
      refusal: S,
      inactive: h,
      tooLarge: y,
      sentDeviceToken: s["X-Trusted-Device-Token"]
    };
  }
  async readStream(e, n, s) {
    let i,
      r = !1,
      S = setTimeout(() => {
        ((r = !0), s.abort());
      }, ze);
    try {
      i = await fetch(e.href, {
        method: "GET",
        headers: n,
        signal: s.signal,
        ...oa({ url: e.href })
      });
    } catch (k) {
      if ((clearTimeout(S), this.abortController !== s)) return;
      if (r) {
        (t(`[SessionsV2Client] Connect timed out after ${ze}ms, reconnecting`, { level: "error" }),
          f("remote_connect", "remote_connect_timeout"),
          this.handleStreamEnd());
        return;
      }
      if (s.signal.aborted) return;
      if (
        (t(`[SessionsV2Client] Connect error: ${d(k)}`, { level: "error" }),
        f("remote_connect", "remote_connect_request_failed"),
        this.callbacks.onError?.(N(k)),
        this.abortController !== s)
      )
        return;
      this.handleStreamEnd();
      return;
    }
    if (!i.ok || !i.body) {
      t(`[SessionsV2Client] HTTP ${i.status} on SSE connect`, { level: "error" });
      let k = i.status === 403 ? await Ze(i) : void 0;
      if (k === void 0) await gK(i);
      let b = k?.reason;
      if ((clearTimeout(S), this.abortController !== s)) return;
      if (i.status === 401 && this.onAuth401) {
        (t("[SessionsV2Client] 401 on SSE connect \u2014 refreshing"),
          m("remote_connect", "remote_connect_auth_401"));
        let C = await this.onAuth401(Je(n) ?? this.getAccessToken()).catch(() => !1);
        if (this.abortController !== s) return;
        if (!C && this.reconnectAttempts >= le && this.keepRedialling) {
          (m("remote_connect", "remote_connect_reconnect_exhausted"),
            (this.state = "closed"),
            (this.closedCause = "exhausted"),
            this.callbacks.onClose?.());
          return;
        }
        this.handleStreamEnd();
        return;
      }
      if (k?.reason === "untrusted_device") {
        let C = await this.recoverTrustedDeviceToken(k.about, n["X-Trusted-Device-Token"]);
        if (this.abortController !== s) return;
        if (C) {
          (t("[SessionsV2Client] untrusted_device on SSE connect \u2014 re-enrolled, reconnecting"),
            f("remote_connect", "remote_connect_untrusted_device"),
            this.handleStreamEnd());
          return;
        }
      }
      if (Bt.has(i.status)) {
        (m(
          "remote_connect",
          k?.reason === "untrusted_device" && k.about.kind === "unrecognized"
            ? "remote_connect_unknown_sub_reason"
            : "remote_connect_permanent_failure",
          Xe(n)
        ),
          (this.state = "closed"),
          (this.closedCause = "permanentHttp"),
          this.callbacks.onClose?.(b));
        return;
      }
      (f("remote_connect", "remote_connect_http_error"), this.handleStreamEnd());
      return;
    }
    if ((clearTimeout(S), this.abortController !== s)) {
      i.body.cancel().catch(() => {});
      return;
    }
    let h = Date.parse(i.headers.get("date") ?? "");
    if (Number.isNaN(h))
      ((this.serviceClock = void 0),
        t(
          "[SessionsV2Client] The stream answered without a Date header: frames on it cannot be dated against the service clock",
          { level: "warn" }
        ));
    else
      ((this.connectedSince = h),
        (this.serviceClock = { serviceMs: h, wallMs: Date.now(), monotonicMs: performance.now() }));
    ((this.state = "connected"), (this.reconnectAttempts = 0), (this.rediallingPastBudget = !1));
    let y = {
      gapMs: this.downSince === void 0 ? 0 : Date.now() - this.downSince,
      driftRedial: this.driftRedial
    };
    if (this.downSince !== void 0)
      a("tengu_remote_stream_regained", {
        gap_ms: y.gapMs,
        attempts: this.dialsSinceUp,
        drift_redial: y.driftRedial,
        keeps_redialling: this.keepRedialling
      });
    ((this.downSince = void 0),
      (this.driftRedial = !1),
      (this.dialsSinceUp = 0),
      this.resetLivenessTimer(),
      this.startDriftWatch(),
      t("[SessionsV2Client] Connected"),
      g("remote_connect", Xe(n)),
      this.callbacks.onConnected?.(y));
    let w = i.body.getReader(),
      R = new U9e();
    try {
      while (!0) {
        let { done: k, value: b } = await w.read();
        if (this.abortController !== s) return;
        if (k) break;
        for (let C of R.push(b)) {
          if (this.abortController !== s) return;
          if ((this.resetLivenessTimer(), C.event && C.data))
            this.handleFrame(C.event, C.id, C.data);
        }
      }
    } catch (k) {
      if (s.signal.aborted) return;
      (t(`[SessionsV2Client] Stream read error: ${d(k)}`, { level: "error" }),
        f("remote_connect", "remote_connect_stream_error"));
    } finally {
      w.releaseLock();
    }
    if (!s.signal.aborted) (t("[SessionsV2Client] Stream ended"), this.handleStreamEnd());
  }
  handleFrame(e, n, s) {
    let i;
    try {
      i = te(s);
    } catch (r) {
      (l(
        Qe(
          Error(`[SessionsV2Client] Failed to parse ${e} frame: ${d(r)}`),
          "SessionsV2Client: failed to parse event frame"
        )
      ),
        f("remote_connect", "remote_connect_frame_parse_failed"));
      return;
    }
    switch (e) {
      case "client_event": {
        let r = i,
          S = parseInt(n ?? String(r.sequence_num), 10);
        if (!isNaN(S) && S > this.lastSequenceNum) this.lastSequenceNum = S;
        if (!Ee(r.payload)) {
          t(
            `[SessionsV2Client] Dropping client_event with no payload.type (event_type=${r.event_type})`
          );
          return;
        }
        if (r.payload.type === "control_response") {
          let { response: h } = r.payload;
          if (!h || typeof h !== "object" || typeof h.request_id !== "string") {
            t(`[SessionsV2Client] Dropping malformed control_response from source=${r.source}`, {
              level: "warn"
            });
            return;
          }
        }
        if (r.payload.type === "user") {
          if (
            r.source !== "worker" &&
            OFe(r.payload) &&
            !(
              this.admitProjectPersonMessages &&
              Ve !== null &&
              Ve.isProjectPersonEvent(r.payload, r.source)
            )
          ) {
            t(
              `[SessionsV2Client] Dropping worker-output-shaped user frame from source=${r.source} \u2014 only the worker produces tool results and execution output`,
              { level: "warn" }
            );
            return;
          }
          if (xRt(r.payload)) {
            t(
              `[SessionsV2Client] Dropping user frame with malformed content from source=${r.source}`,
              { level: "warn" }
            );
            return;
          }
        }
        if (r.source !== "worker") {
          if (r.payload.type === "control_response") {
            if (this.issuedRequestIds.has(r.payload.response.request_id)) {
              t(
                `[SessionsV2Client] Dropping control_response for this client's request_id from source=${r.source} \u2014 only the worker may answer our RPCs`,
                { level: "warn" }
              );
              return;
            }
            if (
              r.payload.response.pending_user_dialog_requests ||
              r.payload.response.pending_permission_requests
            ) {
              t(
                `[SessionsV2Client] Stripping prompt-redelivery fields from control_response with source=${r.source}`
              );
              let {
                pending_user_dialog_requests: h,
                pending_permission_requests: y,
                ...w
              } = r.payload.response;
              this.deliver(
                { ...r.payload, response: w },
                {
                  source: r.source,
                  ...(!isNaN(S) && { sequenceNum: S }),
                  ...Be(r, this.connectedSince, this.serviceClock),
                  ...(this.resumed && { resumed: !0 })
                }
              );
              return;
            }
          } else if (!rfr.has(r.payload.type)) {
            if (
              r.payload.type === "control_request" &&
              typeof r.payload.request_id === "string" &&
              this.issuedRequestIds.has(r.payload.request_id)
            ) {
              let h = "uuid" in r.payload ? r.payload.uuid : void 0;
              if (typeof h !== "string" || h !== this.ownRequestUuids.get(r.payload.request_id)) {
                t(
                  `[SessionsV2Client] A copy of own request ${re(r.payload.request_id)} from source=${re(r.source)} under another event uuid \u2014 ignored`
                );
                return;
              }
              let y = Xt(r.device_attestation_status);
              if (
                (t(
                  `[SessionsV2Client] Own request ${re(r.payload.request_id)} echoed from source=${re(r.source)}: device proof ${re(r.device_attestation_status)} (${y})`
                ),
                y === "unverified")
              )
                this.rereadTrustedDeviceToken();
              this.callbacks.onOwnRequestEchoed?.(r.payload.request_id, y);
              return;
            }
            t(`[SessionsV2Client] Dropping ${r.payload.type} from source=${r.source}`);
            return;
          }
        } else if (r.payload.type === "control_response")
          (this.issuedRequestIds.delete(r.payload.response.request_id),
            this.liveOnlyRequestIds.delete(r.payload.response.request_id),
            this.ownRequestUuids.delete(r.payload.response.request_id));
        this.deliver(r.payload, {
          source: r.source,
          ...(!isNaN(S) && { sequenceNum: S }),
          ...Be(r, this.connectedSince, this.serviceClock),
          ...(this.resumed && { resumed: !0 }),
          ...(r.source === "worker" && Jt(r))
        });
        return;
      }
      case "ephemeral_event": {
        let r = i;
        if (r?.event_type === nn) {
          let h = typeof r.payload === "object" && r.payload !== null ? r.payload : {},
            { work_id: y, reason: w } = h;
          try {
            this.callbacks.onToolHostEnded?.({
              workId: typeof y === "string" ? y : void 0,
              reason: typeof w === "string" ? w : void 0
            });
          } catch (R) {
            t(`[SessionsV2Client] tool_host_ended handler threw: ${d(R)}`, { level: "error" });
          }
          return;
        }
        let S = r.payload;
        if (Ee(r.payload)) {
          if (
            r.payload.type === "control_response" &&
            typeof r.payload.response?.request_id === "string" &&
            this.liveOnlyRequestIds.delete(r.payload.response.request_id)
          ) {
            (this.issuedRequestIds.delete(r.payload.response.request_id),
              this.ownRequestUuids.delete(r.payload.response.request_id));
            let {
              pending_user_dialog_requests: y,
              pending_permission_requests: w,
              ...R
            } = r.payload.response;
            this.deliver({ ...r.payload, response: R }, { source: "worker" });
            return;
          }
          let h = We(S);
          if (h && Ee(h)) {
            this.deliver(h, {});
            return;
          }
          if (r.payload.type !== "stream_event") {
            t(`[SessionsV2Client] Dropping ${r.payload.type} on ephemeral channel`);
            return;
          }
          if (!we(r.payload.event)) {
            t("[SessionsV2Client] Dropping malformed stream_event on ephemeral channel", {
              level: "warn"
            });
            return;
          }
          this.deliver(r.payload, {});
        }
        return;
      }
      case "catch_up_truncated":
        (t("[SessionsV2Client] catch_up_truncated \u2014 transcript gap"),
          f("remote_connect", "remote_catch_up_truncated"),
          this.callbacks.onCatchUpTruncated?.());
        return;
      case "session_update": {
        let r = i?.connection_status;
        if (typeof r === "string")
          try {
            this.callbacks.onWorkerConnectionStatus?.(r);
          } catch (S) {
            t(`[SessionsV2Client] worker connection status handler threw: ${d(S)}`, {
              level: "error"
            });
          }
        else t("[SessionsV2Client] Ignoring session_update frame");
        return;
      }
      case "security_update": {
        let r = i?.security_tier;
        if (
          (t(
            `[SessionsV2Client] security_update: tier ${typeof r === "string" ? re(r) : typeof r}`
          ),
          r === "elevated")
        )
          try {
            this.callbacks.onSecurityTierRaised?.();
          } catch (S) {
            t(`[SessionsV2Client] security tier handler threw: ${d(S)}`, { level: "error" });
          }
        return;
      }
      case "delivery_update":
        t(`[SessionsV2Client] Ignoring ${e} frame`);
        return;
      default:
        t(`[SessionsV2Client] Unknown SSE event type '${e}'`, { level: "warn" });
        return;
    }
  }
  deliver(e, n) {
    if (!fKt((s) => this.callbacks.onMessage(s, n), e, "SessionsV2Client"))
      f("remote_connect", "remote_connect_frame_handler_threw");
  }
  handleStreamEnd() {
    if (
      (this.markDown(), this.clearLivenessTimer(), this.clearDriftWatch(), this.state === "closed")
    )
      return;
    this.abortController = null;
    let e = this.reconnectAttempts >= le;
    if (e && !this.keepRedialling) {
      (t(`[SessionsV2Client] Reconnect budget exhausted (${le}), closing`),
        m("remote_connect", "remote_connect_reconnect_exhausted"),
        (this.state = "closed"),
        (this.closedCause = "exhausted"),
        this.callbacks.onClose?.());
      return;
    }
    if (!e) this.reconnectAttempts++;
    else if (!this.rediallingPastBudget)
      ((this.rediallingPastBudget = !0),
        f("remote_connect", "remote_connect_redialling_past_budget"));
    this.state = "idle";
    let n = e ? Ge : Ky({ attempt: this.reconnectAttempts, baseMs: lxn, capMs: Ge });
    if (
      (t(
        `[SessionsV2Client] Reconnecting in ${n}ms (attempt ${this.reconnectAttempts}/${this.keepRedialling ? "\u221E" : le}, from_sequence_num=${this.lastSequenceNum})`
      ),
      (this.reconnectTimer = setTimeout(() => {
        if (((this.reconnectTimer = null), this.state === "closed")) return;
        this.connect();
      }, n)),
      !e)
    )
      this.callbacks.onReconnecting?.();
  }
  onLivenessTimeout = () => {
    ((this.livenessTimer = null),
      t("[SessionsV2Client] Liveness timeout, reconnecting", { level: "warn" }));
    try {
      let e = Date.now();
      this.callbacks.onStreamSilent?.({
        suspended: e - this.lastDriftCheck > Se * 2 || e - (this.lastHealthyAt ?? e) > m5e + Se * 2
      });
    } catch (e) {
      let n = e instanceof Error ? e : Error("not an Error");
      l(n);
    }
    (this.abortController?.abort(), (this.abortController = null), this.handleStreamEnd());
  };
  markDown() {
    let e = Date.now();
    this.downSince ??=
      this.lastHealthyAt !== void 0 && e - this.lastHealthyAt >= Gt ? this.lastHealthyAt : e;
  }
  resetLivenessTimer() {
    ((this.lastHealthyAt = Date.now()),
      this.clearLivenessTimer(),
      (this.livenessTimer = setTimeout(this.onLivenessTimeout, m5e)));
  }
  clearLivenessTimer() {
    if (this.livenessTimer) (clearTimeout(this.livenessTimer), (this.livenessTimer = null));
  }
  startDriftWatch() {
    (this.clearDriftWatch(),
      (this.lastDriftCheck = Date.now()),
      (this.driftTimer = setInterval(() => {
        let e = Date.now(),
          n = e - this.lastDriftCheck;
        if (((this.lastDriftCheck = e), n > Se * 2 && this.state === "connected"))
          (t(`[SessionsV2Client] Wall-clock drift ${n}ms \u2014 reconnecting after suspend`),
            this.reconnectAfterSuspend());
      }, Se)),
      this.driftTimer.unref?.());
  }
  clearDriftWatch() {
    if (this.driftTimer) (clearInterval(this.driftTimer), (this.driftTimer = null));
  }
  sendEvent(e) {
    return this.trackSend(
      this.postEvent(e).then((n) =>
        n.outcome === "accepted" ? { sequence_num: n.sequence_num } : null
      )
    );
  }
  trackSend(e) {
    if (this.trackedSends !== null) {
      let n = this.trackedSends;
      n.add(e);
      let s = () => {
        n.delete(e);
      };
      e.then(s, s);
    }
    return e;
  }
  async postEvent(e, n = {}) {
    if (this.state === "closed")
      return (
        t("[SessionsV2Client] Cannot send: closed", { level: "warn" }),
        m("remote_send_event", "remote_send_event_closed"),
        { outcome: "failed", cause: "closed" }
      );
    let s = `${rn().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events`;
    try {
      let i = performance.now(),
        r = await ebn(this.eventSigner, this.sessionId, e),
        S = performance.now(),
        h = { session_id: this.sessionId, events: [r] },
        y = await this.authHeaders(),
        w = await this.postEvents(s, h, y, n.timeoutMs);
      if (!w.ok && w.status === 401 && this.onAuth401) {
        if (
          (t("[SessionsV2Client] 401 on POST \u2014 refreshing + retry"),
          await this.onAuth401(Je(y) ?? this.getAccessToken()))
        )
          w = await this.postEvents(s, h, await this.authHeaders(), n.timeoutMs);
      }
      let R = !1;
      if (
        !w.ok &&
        w.refusal !== void 0 &&
        (await this.recoverTrustedDeviceToken(w.refusal, w.sentDeviceToken))
      ) {
        t("[SessionsV2Client] untrusted_device on POST \u2014 re-enrolled, retrying");
        let k = await this.authHeaders();
        ((w = await this.postEvents(s, h, k, n.timeoutMs)), (R = !0));
      }
      if (!w.ok) {
        if (
          (t(
            `[SessionsV2Client] POST /events returned ${w.status}${w.inactive ? " (session not active)" : ""}${w.tooLarge ? " (too large)" : ""}`,
            { level: "warn" }
          ),
          w.inactive)
        )
          return (
            f("remote_send_event", "remote_send_event_session_inactive"),
            { outcome: "session_inactive" }
          );
        return (
          m(
            "remote_send_event",
            w.tooLarge
              ? "remote_send_event_too_large"
              : w.refusal?.kind === "signature_wanted"
                ? "remote_send_event_signature_wanted"
                : w.refusal?.kind === "unrecognized"
                  ? "remote_send_event_unknown_sub_reason"
                  : "remote_send_event_http_error"
          ),
          {
            outcome: "failed",
            cause: "http",
            status: w.status,
            ...(w.tooLarge && { tooLarge: !0 })
          }
        );
      }
      if (R) f("remote_send_event", "remote_send_event_untrusted_device");
      else g("remote_send_event");
      return {
        outcome: "accepted",
        sequence_num: w.sequence_num,
        signMs: Math.round(S - i),
        postMs: Math.round(performance.now() - S)
      };
    } catch (i) {
      return (
        t(`[SessionsV2Client] POST /events failed: ${d(i)}`, { level: "warn" }),
        m("remote_send_event", "remote_send_event_request_failed"),
        { outcome: "failed", cause: an(i) ? "timeout" : "network" }
      );
    }
  }
  sendControlResponse(e, n = _e(), s = {}) {
    return (
      t("[SessionsV2Client] Sending control_response"),
      this.trackSend(this.postEvent({ ...e, uuid: n }, s))
    );
  }
  sendControlRequest(e, n) {
    return this.postControlRequest(e, n)?.requestId ?? null;
  }
  postControlRequest(e, n) {
    if (this.state === "closed")
      return (t("[SessionsV2Client] Cannot send control_request: closed", { level: "warn" }), null);
    let s = _e();
    if (
      (this.issuedRequestIds.add(s),
      (e.subtype === "mcp_authenticate" || e.subtype === "mcp_status") && e.liveReply === !0)
    )
      this.liveOnlyRequestIds.add(s);
    if (this.issuedRequestIds.size > Ke) {
      t(
        "[SessionsV2Client] issuedRequestIds overflow \u2014 evicting oldest unanswered request_id",
        { level: "warn" }
      );
      let S = this.issuedRequestIds.values().next().value;
      if (S !== void 0)
        (this.issuedRequestIds.delete(S),
          this.liveOnlyRequestIds.delete(S),
          this.ownRequestUuids.delete(S));
    }
    let i = { type: "control_request", request_id: s, request: e, uuid: _e() };
    (this.ownRequestUuids.set(s, i.uuid),
      t(`[SessionsV2Client] Sending control_request: ${e.subtype}`));
    let r = this.trackSend(
      this.postEvent(i).then((S) => {
        if (S.outcome === "session_inactive" || (S.outcome === "failed" && S.cause === "http"))
          n?.(s);
        return S;
      })
    );
    return { requestId: s, posted: r };
  }
  sendControlCancelRequest(e) {
    if (this.state === "closed") return;
    (t(`[SessionsV2Client] Sending control_cancel_request: ${e}`),
      this.sendEvent({ type: "control_cancel_request", request_id: e, uuid: _e() }));
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    if (
      (t("[SessionsV2Client] Closing"),
      (this.state = "closed"),
      (this.closedCause = "deliberate"),
      this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.reconnectTimer)
    )
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.abortController?.abort(), (this.abortController = null));
  }
  reconnect() {
    if (this.closedCause === "deliberate") {
      t("[SessionsV2Client] Ignoring reconnect() \u2014 deliberately closed");
      return;
    }
    if (
      (t("[SessionsV2Client] Force reconnect"),
      this.markDown(),
      (this.reconnectAttempts = 0),
      this.clearLivenessTimer(),
      this.clearDriftWatch(),
      this.reconnectTimer)
    )
      (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.abortController?.abort(),
      (this.abortController = null),
      (this.state = "idle"),
      this.connect());
  }
  reconnectAfterSuspend() {
    if (this.state === "closed" || (this.driftRedial && this.state === "connecting")) return;
    ((this.driftRedial = !0), this.reconnect());
  }
  isRevivable() {
    return this.closedCause === "exhausted";
  }
  reviveAfterExhaustion() {
    if (
      !(
        this.keepRedialling &&
        this.state === "idle" &&
        this.reconnectAttempts >= le &&
        this.reconnectTimer !== null
      ) &&
      this.closedCause !== "exhausted"
    )
      return !1;
    return (f("remote_connect", "remote_connect_revived_by_user_send"), this.reconnect(), !0);
  }
  async authHeaders() {
    let e = await (this.trustedDeviceToken ??= this.loadTrustedDeviceToken());
    return {
      Authorization: `${Te}${this.getAccessToken()}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": py(),
      "x-organization-uuid": this.orgUuid,
      "User-Agent": Ds(),
      ...(e && { "X-Trusted-Device-Token": e })
    };
  }
}
var Te = "Bearer ";
function Xe(e) {
  return {
    trusted_device_token_sent: e["X-Trusted-Device-Token"] !== void 0,
    device_identity_flag_on: zm()
  };
}
function Je(e) {
  let n = e.Authorization;
  return n?.startsWith(Te) ? n.slice(Te.length) : void 0;
}
async function Ze(e) {
  let n = await qe(e),
    s = i9(n);
  return s !== void 0
    ? { reason: "untrusted_device", about: s }
    : { reason: Lce(n) === "session_stale_relogin" ? "session_stale_relogin" : void 0 };
}
function sn(e) {
  return e !== void 0 && _(e).includes(en);
}
async function on(e) {
  return tn().safeParse(await qe(e)).success;
}
async function qe(e) {
  let n = e.body?.getReader();
  if (!n) return;
  try {
    let s = new Uint8Array(Ce),
      i = 0;
    for (;;) {
      let { done: r, value: S } = await n.read();
      if (r || !S) break;
      let h = Math.min(S.length, Ce - i);
      if ((s.set(S.subarray(0, h), i), (i += h), i >= Ce)) break;
    }
    return te(new TextDecoder().decode(s.subarray(0, i)));
  } catch {
    return;
  } finally {
    n.cancel().catch(() => {});
  }
}
function an(e) {
  return e instanceof Error && e.name === "TimeoutError";
}
var lt = 1000,
  ln = 8,
  ofr = 200;
var un = {
  can_use_tool: p(() =>
    u({
      request_id: o(),
      request: yt({
        subtype: A("can_use_tool"),
        tool_name: o(),
        input: me(o(), oe()),
        tool_use_id: o()
      })
    })
  ),
  request_user_dialog: p(() =>
    u({
      request_id: o(),
      request: yt({ subtype: A("request_user_dialog"), dialog_kind: o(), payload: me(o(), oe()) })
    })
  )
};
function q7r(e, n) {
  let s = un[n]().safeParse(e);
  if (!s.success) return null;
  return { type: "control_request", request_id: s.data.request_id, request: s.data.request };
}
var cn = p(() => u({ subtype: A("success"), response: u({ toolName: o() }) }));
function ut(e) {
  return cn().safeParse(e).data?.response.toolName;
}
function Y7r(e, n) {
  return typeof n === "string" && Yct(ut(e), n);
}
function nt(e, n) {
  try {
    return dn(e, n);
  } catch {
    return !1;
  }
}
function V(e, n) {
  if ((e.add(n), e.size > lt)) {
    let s = e.values().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function Ae(e, n, s, i = ofr) {
  if ((e.set(n, s), e.size > i)) {
    let r = e.keys().next().value;
    if (r !== void 0) e.delete(r);
  }
}
var lls = ["can_use_tool", "request_user_dialog"],
  pn = 30000,
  hn = 16;
function _k(e) {
  return e.length > 80
    ? `${e.slice(0, 80).replace(/[^\x20-\x7e]/g, "?")}\u2026(+${e.length - 80})`
    : e.replace(/[^\x20-\x7e]/g, "?");
}
var ue = 256,
  fn = 3,
  mn = 750,
  gn = 35000;
function ce(e) {
  if (e.withheld) return "withheld";
  if (e.status === 429) return "http_429";
  if (e.status !== void 0) return "http_4xx";
  return e.cause ?? "unknown";
}
function _n(e) {
  return e === "http_429" || e === "server" || e === "timeout" || e === "network";
}
var ct = { timeout: "the service took too long to answer", network: "the connection failed" };
function dls(e) {
  let n = ce(e);
  return n === "timeout" || n === "network" ? ct[n] : void 0;
}
var l5e = "cancelled",
  b6t = "withdrawn",
  st = { outcome: "failed", cause: "closed" },
  Sn = 1500,
  pt = [1000, 5000, 15000, 45000],
  ot = pt.length,
  vn = 120000;
function URn(e, n) {
  switch (e) {
    case "permission":
      return "A permission answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "dialog":
      return "A dialog answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
    case "hook":
      return n === "overtaken"
        ? "A hook's decision from this machine did not reach the cloud session before it stopped waiting for it: if the hook's deadline passed the tool call it was judging may have run without it; if the turn was interrupted, nothing ran."
        : "A hook's decision from this machine could not be delivered to the cloud session, which waits for it until the hook's deadline and then proceeds without it. Interrupt the session if that tool call must not run.";
    case "tool":
      return n === "overtaken"
        ? "The result of work this machine did for the cloud session (such as a command it ran) did not reach the session before it stopped waiting for it."
        : "The result of work this machine did for the cloud session (such as a command it ran) could not be delivered; the session waits for it until its deadline and then carries on without it.";
  }
}
class d5e {
  config;
  callbacks;
  client = null;
  pendingPermissionRequests = new Map();
  undeliveredResponses = new Map();
  undeliveredHookIds = new Set();
  hookGiveUpsTold = new Set();
  pendingDialogRequests = new Set();
  pendingForwardedHooks = new Set();
  settledForwardedHookIds = new Set();
  workerSeenThisConnection = !1;
  replayedRefusalsAnswered = 0;
  seedRequestsArmed = !1;
  securityTierRaiseSeen = !1;
  pendingServedRequests = new Map();
  settledServedRequestIds = new Set();
  errorShapedControlResponseIds = new Set();
  seenControlResponseIds = new Set();
  seenSuccessToolNames = new Map();
  retiredPermissionRequestIds = new Set();
  reinstatablePermissionRequests = new Map();
  reinstatableDialogIds = new Set();
  pendingControlRequests = new Map();
  workerStarting = !1;
  pendingModelSwitchIds = new Set();
  sendGates = new Set();
  heldSends = new Set();
  withholdableHeldTold = !1;
  chainedSends = 0;
  lifetime = new AbortController();
  serving = !1;
  firstSendReleased = !1;
  exitFlushRequested = !1;
  withheldPromptInFlight = null;
  sentAMessage = !1;
  sendsNow;
  connections = 0;
  newestOwnMessageSequence = null;
  lastHeld = { issued: Promise.resolve(), posted: Promise.resolve() };
  pendingInterrupt = null;
  constructor(e, n) {
    this.config = e;
    this.callbacks = n;
    if (
      ((this.sendsNow = e.seedWorkerSendsNow),
      e.homeSeed !== void 0 && e.homeSeedHoldsFirstSend !== !1)
    )
      this.gateSendsOnSettings(e.homeSeed);
    if (e.withheldInitialPrompt !== void 0) {
      let s = e.withheldInitialPrompt;
      queueMicrotask(() => void this.sendWithheldInitialPrompt(s));
    }
  }
  connect() {
    t(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    let e = {
      onMessage: (n, s) => this.handleMessage(n, s),
      onConnected: (n) => {
        (t("[RemoteSessionManager] Connected"), (this.replayedRefusalsAnswered = 0));
        for (let s of this.undeliveredResponses.values())
          if (((s.failures = 0), s.giveUpOnSettle === "undelivered")) s.giveUpOnSettle = null;
        if (
          (this.resendUndeliveredResponses(),
          (this.workerSeenThisConnection = !1),
          this.securityTierRaiseSeen)
        )
          try {
            this.config.rebindEventSigner?.();
          } catch (s) {
            t(`[RemoteSessionManager] rebindEventSigner threw: ${d(s)}`, { level: "error" });
          }
        if (
          (this.callbacks.onConnected?.(n),
          !this.seedRequestsArmed && !this.lifetime.signal.aborted)
        ) {
          this.seedRequestsArmed = !0;
          let s = this.pendingPermissionRequests.size,
            i = (this.config.seedSubagentRequests ?? []).map((S) =>
              fKt((h) => this.handleControlRequest(h, {}), S, "RemoteSessionManager, attach seed")
            );
          if (i.length > 0 && !i.includes(!0))
            m("remote_permission_seed_adoption", "handler_threw");
          else if (i.includes(!1)) f("remote_permission_seed_adoption", "handler_threw");
          else if (i.length > 0) g("remote_permission_seed_adoption");
          let r = this.pendingPermissionRequests.size - s;
          if (r > 0)
            a("tengu_remote_subagent_requests_adopted", {
              count: r,
              subagents_asking_at_a_turn_end: this.config.seedAskersPastATurn?.length ?? 0
            });
        }
      },
      onClose: (n) => {
        if ((t("[RemoteSessionManager] Disconnected"), this.client?.isRevivable()))
          this.giveUpUndeliveredResponses();
        else this.dropUndeliveredResponses();
        (this.endWorkerStart(), this.callbacks.onDisconnected?.(n));
      },
      onReconnecting: () => {
        ((this.workerSeenThisConnection = !1),
          t("[RemoteSessionManager] Reconnecting"),
          this.callbacks.onReconnecting?.());
      },
      onStreamSilent: (n) => this.callbacks.onStreamSilent?.(n),
      onOwnRequestEchoed: (n, s) => {
        let i = this.pendingControlRequests.get(n);
        if (i?.onEchoed)
          (this.pendingControlRequests.set(n, { ...i, onEchoed: void 0 }), i.onEchoed(s));
      },
      onWorkerConnectionStatus: (n) => {
        if (
          (t(
            `[RemoteSessionManager] The service reports the worker ${n === "connected" || n === "disconnected" ? n : "in an unknown state"}`
          ),
          n === "connected")
        )
          (this.noteWorkerLive(), this.callbacks.onWorkerConnectionStatus?.(n));
        else if (n === "disconnected") {
          if (this.workerSeenThisConnection) this.endWorkerStart();
          ((this.workerSeenThisConnection = !1),
            this.callbacks.onWorkerGone?.(),
            this.callbacks.onWorkerConnectionStatus?.(n));
        }
      },
      onSecurityTierRaised: () => {
        this.securityTierRaiseSeen = !0;
      },
      onToolHostEnded: (n) => {
        (t(
          "[RemoteSessionManager] The service ended this session's connection to a computer serving its tools"
        ),
          this.callbacks.onToolHostEnded?.(n));
      },
      ...{},
      onCatchUpTruncated: () => {
        (t("[RemoteSessionManager] Catch-up truncated"), this.callbacks.onCatchUpTruncated?.());
      },
      onError: (n) => {
        (t(`[RemoteSessionManager] Stream error: ${n.message}`, { level: "error" }),
          this.callbacks.onError?.(n));
      }
    };
    ((this.client = new Me(
      this.config.sessionId,
      this.config.orgUuid,
      this.config.getAccessToken,
      e,
      this.config.onAuth401,
      this.config.initialSequenceNum,
      {
        trackSends: this.config.trackSendsInFlight === !0,
        controlOnly: this.config.controlOnly === !0,
        admitProjectPersonMessages: this.config.admitProjectPersonMessages === !0,
        keepRedialling: () => this.config.keepStreamRedialling === !0 || this.serving,
        withholdTrustedDeviceToken: this.config.consoleProfileBearer === !0,
        ...this.signedOpts({})
      }
    )),
      this.client.connect());
  }
  handleMessage(e, n = {}) {
    if ((x("in", e, n), n.source === "worker" && n.replayed !== !0)) this.noteWorkerLive();
    if (n.source === "worker" && e.type === "system" && e.subtype === "init")
      this.sendsNow = nfr(e);
    if (e.type === "control_request") {
      this.handleControlRequest(e, n);
      return;
    }
    if (e.type === "control_cancel_request") {
      let { request_id: s } = e;
      (this.reinstatablePermissionRequests.delete(s), this.reinstatableDialogIds.delete(s));
      let i = this.undeliveredResponses.get(s);
      if (i?.kind === "hook" || i?.kind === "tool") this.giveUp(i, "overtaken");
      else if (i) this.dropKept(i);
      else if (
        this.config.keepUndeliveredResponses === !0 &&
        this.settledForwardedHookIds.has(s) &&
        !this.hookGiveUpsTold.has(s)
      )
        (V(this.hookGiveUpsTold, s),
          m("remote_control_response", "overtaken"),
          this.callbacks.onResponseUndelivered?.(s, "hook", "overtaken"));
      if (this.pendingForwardedHooks.delete(s)) {
        (t(`[RemoteSessionManager] Forwarded hook request cancelled by the worker: ${_k(s)}`),
          this.callbacks.onForwardedHookCancelled?.(s, "worker"));
        return;
      }
      if (this.retireServedRequest(s, "worker")) return;
      if (this.pendingDialogRequests.delete(s)) {
        (t(`[RemoteSessionManager] User dialog request cancelled: ${s}`),
          this.callbacks.onUserDialogCancelled?.(s));
        return;
      }
      let r = this.pendingPermissionRequests.get(s);
      if (!r) {
        t(
          `[RemoteSessionManager] control_cancel_request for unknown request ${s} \u2014 nothing pending, ignoring`
        );
        return;
      }
      (t(`[RemoteSessionManager] Permission request cancelled: ${s}`),
        this.retirePermissionRequest(s),
        this.callbacks.onPermissionCancelled?.(s, r.tool_use_id));
      return;
    }
    if (e.type === "system" && e.subtype === "control_request_progress") {
      if (this.pendingControlRequests.has(e.request_id)) this.endWorkerStart();
      let s = this.pendingControlRequests.get(e.request_id);
      if (!s) {
        t(
          `[RemoteSessionManager] control_request_progress for unknown request ${e.request_id} \u2014 ignoring`
        );
        return;
      }
      clearTimeout(s.timer);
      let i = setTimeout(
        this.onControlRequestTimeout,
        s.timeoutMs,
        e.request_id,
        s.subtype,
        s.timeoutMs
      );
      (this.pendingControlRequests.set(e.request_id, { ...s, timer: i }), s.onProgress?.(e));
      return;
    }
    if (e.type === "control_response") {
      let { request_id: s } = e.response,
        i = this.config.ignoreErrorShapedDialogReplies === !0 && e.response.subtype === "error",
        r = ut(e.response),
        S = this.seenSuccessToolNames.get(s) ?? [],
        h = this.pendingPermissionRequests.get(s),
        y = h !== void 0 && Yct(r, h.tool_name);
      if (i) V(this.errorShapedControlResponseIds, s);
      else if (r !== void 0 && S.length < ln && !y) Ae(this.seenSuccessToolNames, s, [...S, r], lt);
      else if (!y) this.recordSeenControlResponseId(s);
      let w = this.undeliveredResponses.get(s);
      if (w !== void 0 && "uuid" in e && e.uuid === w.uuid && w.giveUpOnSettle !== "overtaken")
        if ((this.dropKept(w), w.failures > 0)) f("remote_control_response", "recovered");
        else g("remote_control_response");
      this.pendingModelSwitchIds.delete(s);
      let R = this.pendingControlRequests.get(s);
      if (R)
        if (
          (this.pendingControlRequests.delete(s),
          clearTimeout(R.timer),
          R.removeAbortListener?.(),
          this.endWorkerStart(),
          e.response.subtype === "success")
        )
          R.resolve(e.response.response);
        else R.reject(MUs(e.response));
      else {
        let k = this.pendingPermissionRequests.get(s);
        if (k) {
          if (y) {
            t(
              `[RemoteSessionManager] Permission response ${s} has mismatched toolName \u2014 worker will drop it, keeping prompt`
            );
            return;
          }
          (this.retirePermissionRequest(s),
            t(
              `[RemoteSessionManager] Permission request ${s} answered elsewhere \u2014 dismissing`
            ),
            this.callbacks.onPermissionCancelled?.(s, k.tool_use_id));
        } else if (this.pendingDialogRequests.has(s))
          if (i)
            t(
              `[RemoteSessionManager] User dialog request ${s} got an error-shaped reply elsewhere \u2014 worker still waiting, keeping it`
            );
          else
            (this.pendingDialogRequests.delete(s),
              t(
                `[RemoteSessionManager] User dialog request ${s} answered elsewhere \u2014 dismissing`
              ),
              this.callbacks.onUserDialogCancelled?.(s));
        else if (this.pendingForwardedHooks.has(s))
          t(
            `[RemoteSessionManager] Ignoring a peer control_response (${e.response.subtype}) for forwarded hook request ${_k(s)} \u2014 still answering it here`
          );
        else if (!this.settledServedRequestIds.has(s))
          t(
            `[RemoteSessionManager] Unmatched control_response ${s} (${e.response.subtype})${e.response.subtype === "error" ? `: ${e.response.error}` : ""}`
          );
      }
      if (this.config.rearmRedeliveredPermissionRequests === !0)
        this.rearmRedelivered(
          e.response.pending_permission_requests,
          "can_use_tool",
          this.pendingPermissionRequests
        );
      this.rearmRedelivered(
        e.response.pending_user_dialog_requests,
        "request_user_dialog",
        this.pendingDialogRequests
      );
      return;
    }
    if (
      this.config.keepOwnModelSwitchBreadcrumb !== !0 &&
      this.pendingModelSwitchIds.size > 0 &&
      e.type === "user" &&
      "isReplay" in e &&
      e.isReplay === !0 &&
      typeof e.message?.content === "string" &&
      e.message.content.startsWith(O$t)
    ) {
      let [s] = this.pendingModelSwitchIds;
      (this.pendingModelSwitchIds.delete(s),
        t("[RemoteSessionManager] Dropped own set_model breadcrumb echo"));
      return;
    }
    if (e.type === "result") {
      if (
        this.sentAMessage ||
        this.config.homeSeedHoldsFirstSend !== !1 ||
        this.config.initialPromptUuid !== void 0
      )
        this.config.homeSeed?.afterFirstReply(this.lifetime.signal);
      let s = [...this.pendingPermissionRequests],
        r = this.config.subagentRequestsOutliveTheTurn === !0 ? s.filter(([, S]) => !lwe(S)) : s;
      for (let [S, h] of r)
        (t(
          `[RemoteSessionManager] Turn ended with permission request ${S} unresolved \u2014 dismissing`
        ),
          this.callbacks.onPermissionCancelled?.(S, h.tool_use_id),
          this.retirePermissionRequest(S),
          Ae(this.reinstatablePermissionRequests, S, h));
      if (s.length > 0 && n.replayed !== !0) {
        let S = F(s, ([, h]) => lwe(h));
        a("tengu_remote_turn_ended_with_open_permission_requests", {
          from_main_thread: s.length - S,
          from_subagents: S,
          kept_open: s.length - r.length
        });
      }
      for (let S of this.pendingDialogRequests)
        (t(
          `[RemoteSessionManager] Turn ended with user dialog request ${S} unresolved \u2014 dismissing`
        ),
          this.callbacks.onUserDialogCancelled?.(S),
          V(this.reinstatableDialogIds, S));
      this.pendingDialogRequests.clear();
    }
    this.callbacks.onMessage(e, n);
  }
  retirePermissionRequest(e) {
    (this.pendingPermissionRequests.delete(e), this.retiredPermissionRequestIds.add(e));
  }
  rearmRedelivered(e, n, s) {
    if (!Array.isArray(e)) return;
    e.slice(0, ofr).forEach((i) => {
      let r = q7r(i, n);
      if (r === null) return;
      let S = this.seenSuccessToolNames.get(r.request_id),
        { request: h } = r;
      if (
        this.seenControlResponseIds.has(r.request_id) ||
        (n === "can_use_tool" && this.errorShapedControlResponseIds.has(r.request_id)) ||
        (S !== void 0 && !(h.subtype === "can_use_tool" && S.every((R) => Yct(R, h.tool_name))))
      ) {
        t(
          `[RemoteSessionManager] Redelivered ${n} ${_k(r.request_id)} already answered \u2014 skipping`
        );
        return;
      }
      let y = !1;
      if (n === "can_use_tool" && this.retiredPermissionRequestIds.has(r.request_id)) {
        let R = this.reinstatablePermissionRequests.get(r.request_id);
        if (R === void 0) {
          t(
            `[RemoteSessionManager] Redelivered can_use_tool ${_k(r.request_id)} already retired here \u2014 skipping`
          );
          return;
        }
        if ((this.reinstatablePermissionRequests.delete(r.request_id), !nt(R, r.request))) {
          (m("remote_permission_request", "redelivered_mismatch"),
            t(
              `[RemoteSessionManager] Redelivered can_use_tool ${_k(r.request_id)} differs from the request first shown under that id \u2014 not arming it`,
              { level: "warn" }
            ));
          return;
        }
        (this.retiredPermissionRequestIds.delete(r.request_id), (y = !0));
      } else if (n === "request_user_dialog") y = this.reinstatableDialogIds.has(r.request_id);
      let w = s.has(r.request_id);
      if ((this.handleControlRequest(r, {}, { reinstated: y }), !w && s.has(r.request_id)))
        (this.reinstatableDialogIds.delete(r.request_id),
          g(n === "can_use_tool" ? "remote_permission_redelivery" : "remote_dialog_redelivery"));
    });
  }
  recordSeenControlResponseId(e) {
    V(this.seenControlResponseIds, e);
  }
  recordSettledForwardedHookId(e) {
    V(this.settledForwardedHookIds, e);
  }
  handleControlRequest(e, { ageMs: n, attestationStatus: s, modeStamp: i, replayed: r }, S) {
    let { request_id: h, request: y } = e,
      w = { replayed: r, ageMs: n },
      R = typeof y === "object" && y !== null && Object.hasOwn(y, "subtype") ? y.subtype : void 0,
      k = vWr(R, He);
    if (k !== void 0) {
      let b = xe.find((C) => C === R);
      if (
        (this.refuseControlRequest(
          h,
          b !== void 0
            ? `${b}, which another client answers,`
            : `a control request of a kind no client of this build handles (${k.length} characters, sha12 ${k.hash}${k.variantOfListed ? ", a variant of a listed kind" : ""})`,
          w
        ),
        b === void 0)
      )
        this.callbacks.onControlRequestRefused?.(k);
      return;
    }
    if (typeof h !== "string") {
      this.refuseControlRequest(h, `${y.subtype} with an id that is not a string`, w);
      return;
    }
    if (y.subtype === "can_use_tool") {
      t(`[RemoteSessionManager] Permission request for tool: ${y.tool_name}`);
      let b = this.pendingPermissionRequests.get(h);
      if (b !== void 0) {
        if (nt(b, y))
          t(
            `[RemoteSessionManager] Duplicate permission request ${_k(String(h))} \u2014 already pending, skipping`
          );
        else
          (m("remote_permission_request", "redelivered_mismatch"),
            t(
              `[RemoteSessionManager] Permission request ${_k(String(h))} redelivered with a different body (${_k(String(y.tool_name))}) \u2014 keeping the one first shown (${_k(b.tool_name)})`,
              { level: "warn" }
            ));
        return;
      }
      if (this.retiredPermissionRequestIds.has(h)) {
        if (this.config.seedSubagentRequests?.some((L) => L.request_id === h) !== !0)
          m("remote_permission_request", "retired_id_rearmed");
        t(
          `[RemoteSessionManager] Permission request ${_k(String(h))} arrived again after it was retired here \u2014 not arming it`,
          { level: "warn" }
        );
        return;
      }
      let C = y;
      try {
        C = structuredClone(y);
      } catch {
        C = y;
      }
      (this.pendingPermissionRequests.set(h, C),
        this.callbacks.onPermissionRequest(y, h, S, r === !0));
      return;
    }
    if (y.subtype === "request_user_dialog") {
      if (this.pendingDialogRequests.has(h)) {
        t(
          `[RemoteSessionManager] Duplicate user dialog request ${h} \u2014 already pending, skipping`
        );
        return;
      }
      (t(`[RemoteSessionManager] User dialog request: ${y.dialog_kind}`),
        this.pendingDialogRequests.add(h),
        this.callbacks.onUserDialogRequest(y, h, S));
      return;
    }
    if (y.subtype === "hook_callback" && yn(y)) {
      let b = this.callbacks.onForwardedHookCallback;
      if (!b) {
        t(
          `[RemoteSessionManager] Forwarded hook_callback ${_k(h)} \u2014 not serving device hooks here, leaving it unanswered`
        );
        return;
      }
      if (h.length > ue || y.callback_id.length > ue) {
        t(
          `[RemoteSessionManager] Forwarded hook_callback ${_k(h)} \u2014 an id longer than ${ue} characters, leaving it unanswered`
        );
        return;
      }
      let C = {
          requestId: h,
          callbackId: y.callback_id,
          input: y.input,
          ...(typeof y.issued_at === "number" && { issuedAt: y.issued_at }),
          ...(typeof y.deadline_ms === "number" && { deadlineMs: y.deadline_ms }),
          ageMs: n,
          ...(s !== void 0 && { attestationStatus: s })
        },
        O = this.callbacks.onUndeliveredHookReplayed;
      if (O && this.undeliveredHookIds.delete(h)) {
        (this.hookGiveUpsTold.delete(h), this.pendingForwardedHooks.add(h), O(C));
        return;
      }
      if (this.settledForwardedHookIds.has(h) || this.pendingForwardedHooks.has(h)) {
        t(
          `[RemoteSessionManager] Forwarded hook_callback ${_k(h)} already answered or in hand \u2014 skipping`
        );
        return;
      }
      (this.pendingForwardedHooks.add(h), b(C));
      return;
    }
    if (Rn(y)) {
      let b = this.callbacks.onServedChannelRequest;
      if (!b) {
        t(
          `[RemoteSessionManager] ${y.subtype} ${_k(h)} \u2014 not serving tools here, leaving it unanswered`
        );
        return;
      }
      if (h.length > ue) {
        t(
          `[RemoteSessionManager] ${y.subtype} ${_k(h)} \u2014 an id longer than ${ue} characters, leaving it unanswered`
        );
        return;
      }
      if (this.settledServedRequestIds.has(h) || this.pendingServedRequests.has(h)) {
        t(
          `[RemoteSessionManager] ${y.subtype} ${_k(h)} already answered or in hand \u2014 skipping`
        );
        return;
      }
      let C = new AbortController();
      (this.pendingServedRequests.set(h, { abort: C, subtype: y.subtype }),
        b({
          requestId: h,
          subtype: y.subtype,
          request: y,
          signal: C.signal,
          ageMs: n,
          ...(s !== void 0 && { attestationStatus: s }),
          ...(i !== void 0 && { modeStamp: i })
        }));
      return;
    }
    this.refuseControlRequest(h, `${y.subtype} in a shape this client has no handler for`, w);
  }
  refuseControlRequest(e, n, { replayed: s, ageMs: i }) {
    let r = s === !0 && (i === void 0 || i > pn || this.replayedRefusalsAnswered >= hn);
    if (this.config.controlOnly === !0 || typeof e !== "string" || r) {
      t(
        `[RemoteSessionManager] ${n}${typeof e === "string" ? ` ${_k(e)}` : ""} \u2014 leaving it unanswered`
      );
      return;
    }
    if (s === !0) this.replayedRefusalsAnswered++;
    (t(`[RemoteSessionManager] ${n} ${_k(e)} \u2014 answering that it is not supported`),
      this.sendResponse(
        { type: "control_response", response: { subtype: "error", request_id: e, error: xX } },
        null
      ));
  }
  signedOpts(e) {
    return {
      ...(e ?? {}),
      ...(this.config.eventSigner && { eventSigner: this.config.eventSigner })
    };
  }
  async sendMessage(e, n, s) {
    return this.send(e, n, (i, r) => lRe(this.config.sessionId, i, this.signedOpts(r)), !1, s);
  }
  async sendMessageVia(e, n, s) {
    return this.send(e, n, s, !0);
  }
  async send(e, n, s, i, r) {
    (t(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`),
      this.reviveStreamForUserSend(),
      x("out", { kind: "sendMessage", content: e, opts: n }));
    let S = this.currentSendGates(),
      h = !i && S.length === 0 && this.chainedSends === 0,
      y = null,
      w = s,
      R;
    try {
      R = await (h ? w(e, n) : this.sendBehindGates(S, e, n, w, r));
    } catch (k) {
      throw (
        t(`[RemoteSessionManager] Send to session ${this.config.sessionId} threw: ${d(k)}`, {
          level: "error"
        }),
        m("remote_send_message", "remote_send_message_threw"),
        k
      );
    }
    if (!R.ok && R.withheld)
      (t(`[RemoteSessionManager] Message withheld by a send gate: ${R.reason}`),
        f(
          "remote_send_message",
          R.reason === l5e
            ? "remote_send_message_cancelled"
            : R.reason === b6t
              ? "remote_send_message_withdrawn"
              : "remote_send_message_withheld"
        ));
    else if (!R.ok)
      (t(
        `[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}: ${R.reason}`,
        { level: "error" }
      ),
        m("remote_send_message", "remote_send_message_failed"));
    else (g("remote_send_message"), (this.sentAMessage = !0));
    return R;
  }
  addSendGate(e, n = {}) {
    let s = { gate: e, onRelease: n.onRelease ?? "send", onExit: n.onExit ?? "as_release" };
    return (
      this.sendGates.add(s),
      () => {
        this.sendGates.delete(s);
      }
    );
  }
  gateSendsOnSettings(e) {
    let n = () => {},
      s = Ne(e, {
        retire: () => n(),
        noticeAfterMs: this.config.homeSeedWaitNoticeMs,
        typedAheadGraceMs: this.config.homeSeedTypedAheadGraceMs
      });
    if (s === null) return;
    n = this.addSendGate(
      (i) => (
        i.released.then(() => {
          if (!i.exiting()) this.firstSendReleased = !0;
        }),
        s(i)
      ),
      { onRelease: "withhold", onExit: "await" }
    );
  }
  async sendWithheldInitialPrompt(e) {
    if (e.sent) return;
    e.sent = !0;
    let n = Date.now(),
      s = this.config.withheldPromptBackoffMs ?? mn,
      i = 0,
      r,
      S = async (C, O) => {
        ((i += 1), (r ??= Date.now()));
        let L = await lRe(this.config.sessionId, C, this.signedOpts(O));
        if (
          L.ok ||
          i >= fn ||
          !_n(ce(L)) ||
          this.firstSendReleased ||
          Date.now() - r > (this.config.withheldPromptRetryWindowMs ?? gn)
        )
          return L;
        if (
          (await X(s * i, this.lifetime.signal), this.exitFlushRequested && !this.firstSendReleased)
        )
          return ((i += 1), lRe(this.config.sessionId, C, this.signedOpts(O)));
        return this.lifetime.signal.aborted || this.firstSendReleased ? L : S(C, O);
      },
      h = this.send(e.content, { uuid: e.uuid }, S, !0, 0).catch((C) => ({ ok: !1, reason: d(C) }));
    this.withheldPromptInFlight = h.then(
      () => {
        return;
      },
      () => {
        return;
      }
    );
    let y = await h;
    this.withheldPromptInFlight = null;
    let w = this.lifetime.signal.aborted && !y.ok;
    if (
      (a("tengu_home_seed_prompt_resequenced", {
        success: y.ok,
        withheld_for: c(
          e.followsPermissionMode
            ? "signed_send"
            : e.heldOnlyForToolsCheck
              ? "tools_check"
              : this.config.homeSeed !== void 0
                ? "home_seed"
                : "other"
        ),
        attempts: i,
        reason: c(y.ok ? "ok" : w ? "aborted" : ce(y)),
        duration_ms: Date.now() - n
      }),
      y.ok)
    )
      ((e.sent = !0), this.callbacks.onWithheldPromptSent?.());
    if (w || y.ok) return;
    let R = ce(y),
      k = R === "timeout" || R === "network" || R === "unknown",
      b;
    switch (R) {
      case "withheld":
      case "not_first_party":
        b = y.reason;
        break;
      case "http_429":
        b = "the service is busy";
        break;
      case "http_4xx":
        b = y.advice ?? `the service refused it, HTTP ${String(y.status)}`;
        break;
      case "server":
        b = "the service had an error";
        break;
      case "timeout":
      case "network":
        b = ct[R];
        break;
      case "unknown":
        b = y.advice ?? "";
        break;
    }
    if (this.callbacks.onWithheldPromptFailed) this.callbacks.onWithheldPromptFailed(b, k);
    else {
      let C = b === "" ? "" : `: ${b.replace(/\.+$/, "")}`;
      this.config.homeSeed?.status.publish(
        k
          ? `Your first message may not have reached the cloud session${C}. If Claude doesn't respond to it soon, send it again`
          : `Couldn't send your first message${C}`,
        "warning"
      );
    }
  }
  currentSendGates() {
    return [...[], ...this.sendGates];
  }
  async sendBehindGates(e, n, s, i, r) {
    this.chainedSends++;
    let S = !1,
      h = !1,
      y = !1,
      w = () => {},
      R = new Promise((P) => {
        w = P;
      }),
      k = (P, H) => {
        ((S = P), (h = H), (y = !0), w(), this.tellWithholdableHeld());
      },
      b = () => {},
      C = new Promise((P) => {
        b = P;
      }),
      O = () => {},
      L = new Promise((P) => {
        O = P;
      }),
      ye = {
        messageUuid: s?.uuid,
        ...(r !== void 0 && { submittedAtMs: r }),
        released: R,
        withdrawn: C,
        exiting: () => S,
        final: () => h,
        decided: L
      },
      E = () => {},
      W = new Promise((P) => {
        E = P;
      }),
      I = this.lastHeld,
      Q = () => {},
      ie = !1,
      Y = !1,
      J = e.map(() => {
        return;
      }),
      ee = new Set(e),
      Z = e.map((P, H) =>
        kn(P.gate, ye).then((j) => ((J[H] = j), ee.delete(P), this.tellWithholdableHeld(), j))
      ),
      G = new Promise((P) => {
        for (let H of Z)
          H.then((j) => {
            if (j !== void 0) P(j);
          });
      }),
      z = Promise.race([
        Promise.all(Z).then(ve),
        G,
        R.then(
          () =>
            ve(J) ??
            dt(ee, S) ??
            Promise.all(Z.filter((P, H) => S && e[H]?.onExit === "await")).then(ve)
        ),
        C.then(() => at(!0))
      ]),
      ae = () => {
        ((y = !0), O(), this.tellWithholdableHeld());
      };
    z.then(ae, ae);
    let ne = z
        .then((P) => Promise.race([I.posted, R.then(() => I.issued)]).then(() => P))
        .then((P) => {
          let H = P ?? at(ie);
          if ((Q(), (Y = !0), E(), H !== void 0)) return it(H);
          return (this.reviveStreamForUserSend(), i(n, s));
        }),
      U = {
        messageUuid: s?.uuid,
        release: k,
        issuedYet: () => Y,
        settledYet: () => y,
        withheldOnRelease: () => ve(J) !== void 0 || dt(ee, !1) !== void 0,
        withdraw: () => {
          ((ie = !0), Q(), b());
        },
        issued: W,
        posted: ne
      };
    return (
      (this.lastHeld = {
        issued: W,
        posted: ne.then(
          () => {
            return;
          },
          () => {
            return;
          }
        )
      }),
      this.heldSends.add(U),
      (Q = () => {
        (this.heldSends.delete(U), this.tellWithholdableHeld());
      }),
      X(0, this.lifetime.signal).then(() => this.tellWithholdableHeld()),
      ne.then(
        () => this.leaveChain(U, E),
        () => this.leaveChain(U, E)
      ),
      z.then((P) => (P === void 0 ? ne : it(P)))
    );
  }
  withdrawHeldSend(e) {
    let n = [...this.heldSends].filter((s) => s.messageUuid === e && !s.issuedYet());
    return (n.forEach((s) => s.withdraw()), n.length > 0);
  }
  heldSendUuids() {
    return [...this.heldSends].flatMap((e) =>
      e.messageUuid !== void 0 && !e.issuedYet() ? [e.messageUuid] : []
    );
  }
  leaveChain(e, n) {
    (this.chainedSends--, this.heldSends.delete(e), this.tellWithholdableHeld(), n());
  }
  hasWithholdableHeldSend() {
    return this.withholdableHeldSends().length > 0;
  }
  countWithholdableHeldSends() {
    return this.withholdableHeldSends().length;
  }
  cancelHeldSends() {
    let e = this.withholdableHeldSends();
    return (e.forEach((n) => n.release(!1, !1)), e.length);
  }
  withholdableHeldSends() {
    return [...this.heldSends].filter(
      (e) => !e.issuedYet() && !e.settledYet() && e.withheldOnRelease()
    );
  }
  tellWithholdableHeld() {
    let e = this.hasWithholdableHeldSend();
    if (e === this.withholdableHeldTold) return;
    this.withholdableHeldTold = e;
    try {
      this.callbacks.onWithholdableHeldChanged?.(e);
    } catch (n) {
      l(Error(`[RemoteSessionManager] onWithholdableHeldChanged listener failed: ${d(n)}`));
    }
  }
  async releaseHeldSends(e = Sn, { exiting: n = !1, final: s = !1, keepWithheld: i = !1 } = {}) {
    if (n) this.exitFlushRequested = !0;
    let r = [...this.heldSends].filter((h) => !(i && h.withheldOnRelease()));
    r.forEach((h) => h.release(n, s));
    let S = r.map(() => ({ kind: "waiting" }));
    return (
      await Pe(
        Promise.allSettled([
          ...r.map((h, y) =>
            h.posted.then(
              (w) => {
                S[y] = Cn(w);
              },
              () => {
                S[y] = { kind: "unconfirmed" };
              }
            )
          ),
          ...(this.withheldPromptInFlight ? [this.withheldPromptInFlight] : [])
        ]),
        e
      ),
      r.forEach((h, y) => {
        if (S[y]?.kind !== "waiting") return;
        if (h.issuedYet()) S[y] = { kind: "unconfirmed" };
        else if (s) (h.withdraw(), (S[y] = { kind: "unsent" }));
      }),
      {
        unsent: F(S, (h) => h.kind === "unsent"),
        refused: S.flatMap((h) => (h.kind === "refused" ? [h.reason] : [])),
        unconfirmed: F(S, (h) => h.kind === "unconfirmed"),
        stillHeld: F(S, (h) => h.kind === "waiting")
      }
    );
  }
  async sendBashCommand(e, n) {
    (t(`[RemoteSessionManager] Sending bash_command to session ${this.config.sessionId}`),
      this.reviveStreamForUserSend());
    let s = await vYo(this.config.sessionId, e, this.signedOpts(n));
    if (!s.ok)
      (t(
        `[RemoteSessionManager] Failed to send bash_command to session ${this.config.sessionId}: ${s.reason}`,
        { level: "error" }
      ),
        m("remote_send_bash", "remote_send_bash_failed"));
    else g("remote_send_bash");
    return s;
  }
  reviveStreamForUserSend() {
    if (this.client?.reviveAfterExhaustion()) return (this.callbacks.onReconnecting?.(), !0);
    return !1;
  }
  sendResponse(e, n, s, i) {
    let r = this.client;
    if (!r) return;
    let S = performance.now(),
      h =
        i === void 0
          ? void 0
          : (k) => {
              try {
                i(k, Math.round(performance.now() - S));
              } catch (b) {
                t(
                  `[RemoteSessionManager] An answer's post listener threw; the answer's fate is unchanged: ${d(b)}`,
                  { level: "warn" }
                );
              }
              return k;
            };
    if (n === null || this.config.keepUndeliveredResponses !== !0) {
      let k = r.sendControlResponse(e, void 0, rt(n));
      h === void 0 || k.then(h);
      return;
    }
    let y = e.response.request_id,
      R = this.undeliveredResponses.get(y) ?? {
        response: e,
        kind: n,
        uuid: tt(),
        failures: 0,
        inFlight: !1,
        giveUpOnSettle: null,
        timer: null,
        told: !1
      };
    if (((R.response = e), s !== void 0)) R.request = s;
    (this.undeliveredResponses.set(y, R), this.postKeptResponse(r, R, h));
  }
  postKeptResponse(e, n, s) {
    n.inFlight = !0;
    let i = e.sendControlResponse(n.response, n.uuid, rt(n.kind));
    (s === void 0 ? i : i.then(s)).then(
      (r) => this.settleResponsePost(n, r),
      (r) => {
        (t(`[RemoteSessionManager] Posting an answer threw: ${d(r)}`, { level: "warn" }),
          this.settleResponsePost(n, { outcome: "failed", cause: "network" }));
      }
    );
  }
  settleResponsePost(e, n) {
    e.inFlight = !1;
    let s = e.response.response.request_id;
    if (this.undeliveredResponses.get(s) !== e) return;
    if (n.outcome === "accepted") {
      if (e.giveUpOnSettle === "overtaken") {
        this.giveUp(e, "overtaken");
        return;
      }
      if ((this.dropKept(e), e.standIn)) return;
      if (e.failures > 0 || e.giveUpOnSettle !== null) f("remote_control_response", "recovered");
      else g("remote_control_response");
      return;
    }
    if (e.giveUpOnSettle !== null) {
      this.giveUp(e, e.giveUpOnSettle);
      return;
    }
    if (
      n.outcome === "session_inactive" ||
      (n.outcome === "failed" && n.cause === "http" && n.status === 404)
    ) {
      (this.dropKept(e),
        t(
          `[RemoteSessionManager] Answer for ${_k(s)} has no session to go to (${n.outcome === "failed" && n.cause === "http" ? `http ${n.status}` : "session not active"}); dropped`
        ),
        f("remote_control_response", "session_gone"));
      return;
    }
    if (n.outcome === "failed" && n.cause === "closed") {
      if (!this.client?.isRevivable()) this.giveUp(e);
      return;
    }
    if (
      n.outcome === "failed" &&
      n.cause === "http" &&
      n.status < 500 &&
      n.status !== 408 &&
      n.status !== 429
    ) {
      if (this.postRefusalStandIn(e, n)) return;
      (t(
        `[RemoteSessionManager] Answer for ${_k(s)} was refused by the service (http ${n.status}); not re-sending`,
        { level: "warn" }
      ),
        this.giveUp(e, "undelivered", "refused"));
      return;
    }
    if (!this.client?.isConnected()) {
      t(
        `[RemoteSessionManager] Answer for ${_k(s)} did not reach the session while the stream is down; it goes again at reconnect`
      );
      return;
    }
    if (((e.failures += 1), e.failures > ot)) {
      (t(
        `[RemoteSessionManager] Answer for ${_k(s)} could not be delivered after ${e.failures} attempts; giving up`,
        { level: "warn" }
      ),
        this.giveUp(e));
      return;
    }
    if (e.failures === 1) f("remote_control_response", "resend");
    this.scheduleResponseResend(e);
  }
  postRefusalStandIn(e, n) {
    let s = this.client,
      i = e.response.response;
    if (
      e.kind !== "tool" ||
      e.standIn ||
      s === null ||
      i.subtype !== "success" ||
      n.status === 401 ||
      n.status === 403
    )
      return !1;
    let r = Buffer.byteLength(_(i.response), "utf8");
    return (
      t(
        `[RemoteSessionManager] Answer for ${_k(i.request_id)} was refused by the service (http ${n.status}${n.tooLarge ? `, too large: this machine's configured limit is ${kPt()} bytes, so the service's is lower` : ""}, ${r} bytes); sending an error in its place`,
        { level: "warn" }
      ),
      f("remote_control_response", n.tooLarge ? "refused_too_large" : "refused_stand_in"),
      (e.response = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: i.request_id,
          response: {
            result: Zfs({
              answer: i.response,
              bytes: r,
              status: n.status,
              tooLarge: n.tooLarge === !0
            })
          }
        }
      }),
      (e.uuid = tt()),
      (e.standIn = !0),
      (e.failures = 0),
      x("out", e.response),
      this.postKeptResponse(s, e),
      !0
    );
  }
  dropKept(e) {
    (this.clearResendTimer(e), this.undeliveredResponses.delete(e.response.response.request_id));
  }
  giveUp(e, n = "undelivered", s = n) {
    let i = e.response.response.request_id;
    if (e.inFlight) {
      if (e.giveUpOnSettle !== "overtaken") e.giveUpOnSettle = n;
      return;
    }
    if ((this.dropKept(e), e.kind === "hook")) V(this.hookGiveUpsTold, i);
    if (n === "undelivered" && (e.kind === "dialog" || e.kind === "permission"))
      if ((this.seenControlResponseIds.delete(i), e.kind === "permission")) {
        if (e.request !== void 0) Ae(this.reinstatablePermissionRequests, i, e.request);
      } else V(this.reinstatableDialogIds, i);
    if (n === "undelivered" && e.kind === "hook" && s !== "refused") V(this.undeliveredHookIds, i);
    if ((m("remote_control_response", s), e.told)) return;
    ((e.told = !0), this.callbacks.onResponseUndelivered?.(i, e.kind, n));
  }
  scheduleResponseResend(e) {
    this.clearResendTimer(e);
    let n = pt[Math.min(e.failures, ot) - 1] ?? 45000;
    e.timer = setTimeout(this.resendOnTimer, n, e.response.response.request_id);
  }
  resendOnTimer = (e) => {
    let n = this.undeliveredResponses.get(e),
      s = this.client;
    if (!n || !s) return;
    if (((n.timer = null), !n.inFlight)) (x("out", n.response), this.postKeptResponse(s, n));
  };
  clearResendTimer(e) {
    if (e.timer !== null) (clearTimeout(e.timer), (e.timer = null));
  }
  resendUndeliveredResponses() {
    let e = this.client;
    if (!e) return;
    for (let n of this.undeliveredResponses.values())
      if ((this.clearResendTimer(n), !n.inFlight))
        (x("out", n.response), this.postKeptResponse(e, n));
  }
  giveUpUndeliveredResponses() {
    for (let e of [...this.undeliveredResponses.values()]) this.giveUp(e);
  }
  giveUpKeptServedResults() {
    for (let e of [...this.undeliveredResponses.values()])
      if (e.kind === "tool") ((e.inFlight = !1), this.giveUp(e, e.giveUpOnSettle ?? "undelivered"));
  }
  dropUndeliveredResponses() {
    for (let e of [...this.undeliveredResponses.values()]) {
      if (e.giveUpOnSettle === "overtaken") {
        ((e.inFlight = !1), this.giveUp(e, "overtaken"));
        continue;
      }
      (this.dropKept(e), f("remote_control_response", "session_gone"));
    }
  }
  respondToPermissionRequest(e, n) {
    let s = this.pendingPermissionRequests.get(e);
    if (!s) {
      (l(Error(`[RemoteSessionManager] No pending permission request with ID: ${e}`)),
        m("remote_permission_respond", "remote_permission_respond_no_pending"));
      return;
    }
    (this.retirePermissionRequest(e),
      this.recordSeenControlResponseId(e),
      this.reviveStreamForUserSend());
    let i = this.config.nameRepositoryTrustAnswers === !0 && IGe(s.tool_name),
      r = !1,
      S = this.config.pinComputerFolderAllow?.() === !0 && KK(s.tool_name),
      h =
        (i || S) && n.behavior === "allow"
          ? {
              behavior: "allow",
              updatedInput: s.input,
              ...(n.toolUseID !== void 0 && { toolUseID: n.toolUseID })
            }
          : n,
      y = pKt(
        e,
        h,
        this.config.nameToolOnPermissionAllow === !0 || i || r ? s.tool_name : void 0,
        i && n.behavior === "deny" && n.decisionClassification === "user_reject"
      );
    (t(`[RemoteSessionManager] Sending permission response: ${n.behavior}`),
      x("out", y),
      this.sendResponse(y, "permission", s),
      g("remote_permission_respond"));
  }
  respondToUserDialogRequest(e, n) {
    if (!this.pendingDialogRequests.delete(e)) {
      (l(Error(`[RemoteSessionManager] No pending user dialog request with ID: ${e}`)),
        m("remote_dialog_respond", "remote_dialog_respond_no_pending"));
      return;
    }
    (this.recordSeenControlResponseId(e), this.reviveStreamForUserSend());
    let s = {
      type: "control_response",
      response: { subtype: "success", request_id: e, response: n }
    };
    (t(`[RemoteSessionManager] Sending user dialog response: ${n.behavior}`),
      x("out", s),
      this.sendResponse(s, "dialog"),
      g("remote_dialog_respond"));
  }
  releaseForwardedHook(e) {
    if ((this.pendingForwardedHooks.delete(e), this.settledForwardedHookIds.has(e)))
      V(this.hookGiveUpsTold, e);
  }
  respondToForwardedHook(e, n) {
    if (!this.pendingForwardedHooks.delete(e))
      return (
        t(
          `[RemoteSessionManager] Forwarded hook request ${_k(e)} is no longer pending \u2014 answer not sent`
        ),
        !1
      );
    if (!this.client) return !1;
    (this.recordSeenControlResponseId(e),
      this.recordSettledForwardedHookId(e),
      this.reviveStreamForUserSend());
    let i = {
      type: "control_response",
      response: { subtype: "success", request_id: e, response: n }
    };
    return (x("out", i), this.sendResponse(i, "hook"), !0);
  }
  respondToServedChannelRequest(e, n, s) {
    let i = this.pendingServedRequests.get(e);
    if (!i)
      return (
        t(
          `[RemoteSessionManager] served request ${_k(e)} is no longer pending \u2014 result not sent`
        ),
        !1
      );
    if ((this.pendingServedRequests.delete(e), !this.client)) return !1;
    (this.recordSeenControlResponseId(e),
      V(this.settledServedRequestIds, e),
      this.reviveStreamForUserSend());
    let S = {
      type: "control_response",
      response: { subtype: "success", request_id: e, response: wn(n) }
    };
    return (
      x("out", S),
      this.sendResponse(S, i.subtype === "remote_tools_probe" ? null : "tool", void 0, s),
      !0
    );
  }
  releaseServedChannelRequest(e) {
    this.pendingServedRequests.delete(e);
  }
  countServedToolCallsInHand() {
    return F(
      [...this.pendingServedRequests.values()],
      ({ subtype: e }) => e === "remote_tool_call"
    );
  }
  retireServedRequest(e, n) {
    let s = this.pendingServedRequests.get(e);
    if (!s) return !1;
    return (
      this.pendingServedRequests.delete(e),
      t(
        `[RemoteSessionManager] served request ${_k(e)} ${n === "worker" ? "cancelled by the worker" : "dropped with the stream"}`
      ),
      s.abort.abort(),
      this.callbacks.onServedChannelRequestCancelled?.(e, n),
      !0
    );
  }
  isConnected() {
    return this.client?.isConnected() ?? !1;
  }
  noteWorkerLive() {
    if (this.workerSeenThisConnection) return;
    ((this.workerSeenThisConnection = !0), this.callbacks.onWorkerLive?.());
  }
  markServing(e) {
    this.serving = e;
  }
  workerLive() {
    return this.isConnected() && this.workerSeenThisConnection;
  }
  sendsInFlight() {
    return this.client?.sendsInFlight() ?? { count: 0, settled: Promise.resolve() };
  }
  flushSends(e) {
    return this.client?.flushSends(e) ?? Promise.resolve();
  }
  cancelSession() {
    (t("[RemoteSessionManager] Sending interrupt signal"),
      (this.firstSendReleased = !0),
      this.reviveStreamForUserSend());
    let e = () => {
      (x("out", { kind: "control_request", subtype: "interrupt" }),
        this.client?.sendControlRequest({ subtype: "interrupt" }));
    };
    if (this.heldSends.size === 0) {
      e();
      return;
    }
    let n = () => {
      if (this.pendingInterrupt === n) ((this.pendingInterrupt = null), e());
    };
    ((this.pendingInterrupt = n), this.releaseHeldSends().then(n, n));
  }
  sendControlRequest(e, n) {
    return this.postControlRequest(e, n).response;
  }
  postControlRequest(e, n) {
    let { promise: s, resolve: i } = Promise.withResolvers(),
      r = async () => {
        let h = null;
        try {
          if (n?.signal?.aborted) throw new Ye();
          if (!n?.background) this.reviveStreamForUserSend();
          if (
            (x("out", { kind: "control_request", ...e }),
            (h = this.client?.postControlRequest(e, this.onControlRequestPostFailed) ?? null),
            h === null)
          )
            throw Error("[RemoteSessionManager] Cannot send: not connected");
        } finally {
          if (h === null) i(st);
        }
        return (h.posted.then(i, () => i(st)), this.awaitControlResponse(h.requestId, e, n));
      },
      S = n?.answerExpected === !1 ? r() : OUs("remote_control_rpc", r);
    return { posted: s, response: S };
  }
  awaitControlResponse(e, n, s) {
    if (n.subtype === "set_model") this.pendingModelSwitchIds.add(e);
    let i = $e(n.subtype, s?.timeoutMs),
      r = this.workerStarting ? s?.awaitWorkerStart : void 0,
      S = r ? Math.max(tfr, i) : i;
    return new Promise((h, y) => {
      let w = setTimeout(this.onControlRequestTimeout, S, e, n.subtype, S),
        R = s?.signal,
        k = R ? () => this.cancelControlRequest(e) : void 0;
      if (R && k) R.addEventListener("abort", k, { once: !0 });
      if (
        (this.pendingControlRequests.set(e, {
          resolve: (b) => h(b),
          reject: y,
          timer: w,
          timeoutMs: i,
          subtype: n.subtype,
          onProgress: s?.onProgress,
          removeAbortListener: R && k ? () => R.removeEventListener("abort", k) : void 0,
          ...(s?.background && { background: !0 }),
          ...(s?.onEchoed && { onEchoed: s.onEchoed }),
          ...(r && { awaitingWorker: r })
        }),
        r)
      )
        (t(
          `[RemoteSessionManager] control_request ${e} (${n.subtype}) waits for the worker; its ${i / 1000}s limit starts when that wait ends`
        ),
          this.tellAwaitingWorker(r, !0));
    });
  }
  workerSendsNow() {
    return this.sendsNow;
  }
  serviceTimeMs() {
    return this.client?.serviceTimeMs();
  }
  hasPostedMessage() {
    return this.sentAMessage;
  }
  isOnFirstConnection() {
    return this.connections === 1;
  }
  beginWorkerStart() {
    this.workerStarting = !0;
  }
  endWorkerStart() {
    if (!this.workerStarting) return;
    this.workerStarting = !1;
    let e = [];
    for (let [n, s] of this.pendingControlRequests) {
      if (s.awaitingWorker === void 0) continue;
      clearTimeout(s.timer);
      let i = setTimeout(this.onControlRequestTimeout, s.timeoutMs, n, s.subtype, s.timeoutMs);
      (this.pendingControlRequests.set(n, { ...s, timer: i, awaitingWorker: void 0 }),
        e.push(s.awaitingWorker));
    }
    t(
      `[RemoteSessionManager] The wait for the worker ended; ${e.length} waiting control request(s) start their own limit`
    );
    for (let n of e) this.tellAwaitingWorker(n, !1);
  }
  tellAwaitingWorker(e, n) {
    try {
      e.onChange(n);
    } catch (s) {
      l(s);
    }
  }
  onControlRequestPostFailed = (e) => {
    this.pendingModelSwitchIds.delete(e);
    let n = this.pendingControlRequests.get(e);
    if (!n) return;
    (this.pendingControlRequests.delete(e),
      clearTimeout(n.timer),
      n.removeAbortListener?.(),
      t(
        `[RemoteSessionManager] control_request ${e} (${n.subtype}) was not delivered \u2014 failing it`,
        { level: "warn" }
      ),
      n.reject(new sTe(n.subtype)));
  };
  onControlRequestTimeout = (e, n, s) => {
    this.pendingModelSwitchIds.delete(e);
    let i = this.pendingControlRequests.get(e);
    if (!i) return;
    if (
      (this.pendingControlRequests.delete(e),
      i.removeAbortListener?.(),
      i.awaitingWorker !== void 0)
    )
      this.endWorkerStart();
    i.reject(new DL(n, s));
  };
  cancelControlRequest(e) {
    let n = this.pendingControlRequests.get(e);
    if (!n) return;
    if (!n.background) this.reviveStreamForUserSend();
    (this.pendingControlRequests.delete(e),
      this.pendingModelSwitchIds.delete(e),
      clearTimeout(n.timer),
      t(`[RemoteSessionManager] Cancelling control request ${e} (${n.subtype})`),
      x("out", { kind: "control_cancel_request", requestId: e }),
      this.client?.sendControlCancelRequest(e),
      n.reject(new Ye()));
  }
  getSessionId() {
    return this.config.sessionId;
  }
  disconnect() {
    t("[RemoteSessionManager] Disconnecting");
    let e = this.config.withheldInitialPrompt;
    if (e !== void 0 && this.withheldPromptInFlight !== null && !this.firstSendReleased)
      e.sent = !1;
    (this.lifetime.abort(), this.pendingInterrupt?.(), this.client?.close(), (this.client = null));
    for (let n of [...this.undeliveredResponses.values()])
      if ((this.clearResendTimer(n), n.giveUpOnSettle !== null))
        ((n.inFlight = !1), this.giveUp(n, n.giveUpOnSettle));
    (this.undeliveredResponses.clear(),
      this.undeliveredHookIds.clear(),
      this.hookGiveUpsTold.clear(),
      this.pendingPermissionRequests.clear(),
      this.pendingDialogRequests.clear());
    for (let n of this.pendingForwardedHooks)
      this.callbacks.onForwardedHookCancelled?.(n, "disconnected");
    this.pendingForwardedHooks.clear();
    for (let n of [...this.pendingServedRequests.keys()])
      this.retireServedRequest(n, "disconnected");
    ((this.workerSeenThisConnection = !1), (this.workerStarting = !1));
    for (let n of this.pendingControlRequests.values())
      (clearTimeout(n.timer),
        n.removeAbortListener?.(),
        n.reject(Error("[RemoteSessionManager] Disconnected")));
    (this.pendingControlRequests.clear(), this.pendingModelSwitchIds.clear());
  }
  reconnect() {
    (t("[RemoteSessionManager] Reconnecting SSE stream"), this.client?.reconnect());
  }
  reconnectAfterSuspend() {
    this.client?.reconnectAfterSuspend();
  }
}
function yn(e) {
  return (
    typeof e.callback_id === "string" &&
    (typeof e.issued_at === "number" ||
      typeof e.deadline_ms === "number" ||
      pwe(e.callback_id) !== null)
  );
}
function Rn(e) {
  return OEe.includes(e.subtype);
}
function rt(e) {
  return e === "tool" ? { timeoutMs: vn } : {};
}
function wn(e) {
  let n = Buffer.byteLength(_(e), "utf8"),
    s = kPt();
  if (n <= s) return e;
  return {
    result: {
      content: [
        {
          type: "text",
          text: `(the result was too large to return: ${n} bytes, over the ${s}-byte limit)`
        }
      ],
      isError: !0
    }
  };
}
function kn(e, n) {
  let s = (i) => {
    t(`[RemoteSessionManager] send gate failed, message goes anyway: ${d(i)}`, { level: "warn" });
    return;
  };
  try {
    return e(n).then((i) => (bn(i) ? i : void 0), s);
  } catch (i) {
    return Promise.resolve(s(i));
  }
}
function bn(e) {
  return typeof e === "object" && e !== null && e.go === !1 && typeof e.reason === "string";
}
function ve(e) {
  return e.find((n) => n !== void 0);
}
function it(e) {
  return { ok: !1, reason: e.reason, withheld: !0 };
}
function Cn(e) {
  if (e.ok) return { kind: "sent" };
  switch (ce(e)) {
    case "withheld":
      return e.reason === l5e || e.reason === b6t
        ? { kind: "unsent" }
        : { kind: "refused", reason: e.reason };
    case "http_4xx":
    case "http_429":
    case "not_first_party":
      return { kind: "refused", reason: e.reason };
    case "server":
    case "timeout":
    case "network":
    case "unknown":
      return { kind: "unconfirmed" };
  }
}
function at(e) {
  return e ? { go: !1, reason: b6t } : void 0;
}
function dt(e, n) {
  return [...e].some(({ onRelease: s, onExit: i }) => s === "withhold" && !(n && i === "await"))
    ? { go: !1, reason: l5e }
    : void 0;
}
var S6t = 100,
  cls = 500;
function sfr(e) {
  let n = e?.sequence_num === void 0 ? void 0 : parseInt(String(e.sequence_num), 10);
  return n !== void 0 && !isNaN(n) ? n : void 0;
}
class BRn extends Error {}
var ft = "X-Trusted-Device-Token";
async function ype(e, n, { recoverDeviceProof: s = !1 } = {}) {
  let { accessToken: i, profile: r } = await XE(n),
    S = { sessionUrl: `${rn().BASE_API_URL}/v1/code/sessions/${e}`, headers: await xEt(i, r) };
  if (!s) return S;
  return {
    ...S,
    headersForRenewedDeviceToken: async (h) => ({ ...oC((await XE(n)).accessToken), [ft]: h })
  };
}
function ht(e, n, s, i) {
  return Ht.get(`${e}/events`, {
    headers: n,
    params: s,
    timeout: 15000,
    validateStatus: () => !0,
    maxContentLength: i ?? -1
  }).catch(() => null);
}
async function mt(e, n, s, i) {
  let r = await ht(e.sessionUrl, e.headers, n, i),
    S = e.headersForRenewedDeviceToken;
  if (r?.status === 403 && S !== void 0) {
    let R = !1,
      k = await BVe(
        r,
        e.headers[ft],
        async (b) => {
          let C = await S(b).then(
            (O) => ht(e.sessionUrl, O, n, i),
            () => null
          );
          if (C === null) throw ((R = !0), Error("no answer"));
          return C;
        },
        "cloud_session"
      );
    if (R) return (t(`[${s}] no answer after renewing the device token`), null);
    if (k.status === 403 && f9() && Lce(k.data) === "untrusted_device")
      throw (
        t(`[${s}] HTTP 403 untrusted_device`),
        new BRn("the service does not accept a trusted-device token from this computer")
      );
    r = k;
  }
  if (!r || r.status !== 200) return (t(`[${s}] HTTP ${r?.status ?? "error"}`), null);
  if (r.data === null || typeof r.data !== "object") return (t(`[${s}] non-object 200 body`), null);
  let h = Array.isArray(r.data.data) ? r.data.data : [],
    y = [];
  for (let R = h.length - 1; R >= 0; R--) {
    let k = h[R];
    if (k?.payload)
      y.push({
        payload: k.payload,
        createdAt: k.created_at,
        source: k.source,
        sequenceNum: sfr(k)
      });
  }
  let w = r.data.next_cursor ?? null;
  return {
    events: y,
    firstId: w,
    hasMore: w !== null,
    droppedRows: h.length - y.length,
    newestSequenceNum: sfr(h[0])
  };
}
async function c5e(e, n = S6t, s) {
  let i = await mt(e, { limit: n, sort_order: "desc" }, "fetchLatestEvents");
  if (s?.reportFeatureHealth !== !1)
    if (i === null) m("assistant_history_load", "http_error");
    else g("assistant_history_load");
  return i;
}
async function hat(e, n, s = S6t, i) {
  return mt(e, { limit: s, sort_order: "desc", cursor: n }, "fetchOlderEvents", i);
}
export {
  IFe,
  lwe,
  $Rn,
  RRt,
  FRn,
  ils,
  tfr,
  nfr,
  als,
  rfr,
  OFe,
  xRt,
  K7r,
  V7r,
  ofr,
  q7r,
  Y7r,
  lls,
  _k,
  dls,
  l5e,
  b6t,
  URn,
  d5e,
  S6t,
  cls,
  sfr,
  BRn,
  ype,
  c5e,
  hat
};

//# sourceMappingURL=chunk-vmp5rezm.js.map
