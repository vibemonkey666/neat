// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uR, k } from "./chunk-ajtyjx88.js";
import { vi } from "./chunk-wrtp8qz8.js";
import { Pe } from "./chunk-4hww8411.js";
import { a } from "./chunk-4cgvah10.js";
import { p } from "./chunk-qmkm2x59.js";
import { Vd } from "./chunk-qakn3b85.js";
import { Qc, wqe } from "./chunk-exz0w70z.js";
import { Xo } from "./chunk-928ws1pg.js";
import { Akt, VV } from "./chunk-r1dvrqha.js";
import { YBe, mDt } from "./chunk-btv59fx5.js";
import { Sy } from "./chunk-j0tbz6ra.js";
import { o, Bd, oe, T, u } from "./chunk-0bqrj5ah.js";
var w = "tengu_rc_thread_reply_gate";
function Ohr() {
  return k(w, !0);
}
var fki = 5000,
  pki = 1000,
  E = wqe([
    "reply",
    "no_reply_needed",
    "post_message",
    "react",
    "update_message",
    "update_status"
  ]).map((e) => Xo(Qc, e)),
  x = Xo(Qc, "no_reply_needed"),
  P = "__no_reply_needed",
  N = "rc_owner",
  h = 4,
  q = p(() =>
    u({
      terminal_tools: T(o().min(1).max(256)).min(1).max(64),
      ask_text: o().trim().min(1).max(4096),
      max_asks_after_person: Bd().min(0).max(h),
      max_asks_after_server_event: Bd().min(0).max(h),
      status_nudge: oe().optional(),
      prompt_reminder: oe().optional()
    })
  );
var Z = p(() =>
    u({
      seconds: Bd().min(1).max(86400),
      visible_tools: T(o().min(1).max(128)).min(1).max(32),
      text: o().trim().min(1).max(2048)
    })
  ),
  Q = p(() => o().trim().min(1).max(2048));
var v = new Set(["max_tokens", "model_context_window_exceeded", "pause_turn", "refusal"]);
function Mhr(e) {
  let t = e.mcp.clients.find((n) => n.name === Qc);
  return t !== void 0 && t.type === "connected" && Vd(t.config);
}
async function mki(e, t, n) {
  if (!Ohr()) return;
  let s = performance.now(),
    d = await Pe(
      e.then(() => !0),
      n
    );
  a("tengu_bridge_projects_mount_wait", {
    waited_ms: Math.round(performance.now() - s),
    settled: d === !0,
    connected: Mhr(t())
  });
}
function Roo(e) {
  let t = uR(e).decider,
    n = t === null ? void 0 : e[t.index];
  if (t === null || n === void 0) return !1;
  return (A(n)?.startsWith(Akt) === !0 || S(n)) && !_(e.slice(t.index + 1), E).answered;
}
function gki(e, t, n) {
  let s = uR(e).decider,
    d = 0,
    r = s;
  while (r !== null) {
    let m = e[r.index];
    if (A(m)?.startsWith(Akt) === !0) d++;
    else if (n.kind !== "policy" || m === void 0 || !VV(m)) break;
    r = uR(e.slice(0, r.index)).decider;
  }
  let i = r === null ? void 0 : e[r.index],
    l = i !== void 0 && (r?.userDriven === !0 || M(i)),
    f = j(n, i, l);
  if (d === 0 && f === 0) return { kind: "skip" };
  let c = [...e.slice(s === null ? 0 : s.index + 1), ...t];
  if (!c.some(R)) return { kind: "skip" };
  let {
    answered: b,
    noReplyOnly: O,
    erroredTerminalTool: y
  } = n.kind === "policy"
    ? _([...e.slice(r === null ? 0 : r.index + 1), ...t], n.policy.terminalTools)
    : _(c, E);
  if (b) return { kind: "answered", noReplyOnly: O, personOpened: l };
  if (
    n.kind === "policy" &&
    (Sy(t)?.isApiErrorMessage === !0 || v.has(c.findLast(R)?.message.stop_reason ?? null))
  )
    return { kind: "skip" };
  let g = y !== void 0 ? "reply_errored" : "silent_turn";
  if (d >= f) return { kind: "still_silent", reason: g, personOpened: l };
  return { kind: "bounce", reason: g, text: `${Akt} ${C(n, y)}`, personOpened: l };
}
function j(e, t, n) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0 && S(t) ? 1 : 0;
    case "policy":
      return n ? e.policy.maxAsksAfterPerson : e.policy.maxAsksAfterServerEvent;
  }
}
function C(e, t) {
  switch (e.kind) {
    case "remote_control":
      return t !== void 0
        ? `Your \`${t}\` call this turn returned an error, so nothing reached the project thread. Call \`${e.toolNames.reply}\` again with what the thread should see, or \`${x}\` if no reply is warranted.`
        : `Your last turn ended without a terminal \`mcp__${Qc}__*\` tool call, so nothing reached the project thread: plain text is not delivered there. Call \`${e.toolNames.reply}\` now with what the thread should see, \`${e.toolNames.status}\` if you dispatched work that reports back later, or \`${x}\` if no reply is warranted.`;
    case "policy":
      return e.policy.askText;
  }
}
function R(e) {
  return e.type === "assistant" && e.message.model !== vi;
}
function A(e) {
  return e?.type === "user" && e.isMeta === !0 && typeof e.message.content === "string"
    ? e.message.content
    : void 0;
}
function S(e) {
  if (M(e)) return !0;
  if (e.type !== "user") return !1;
  let t = e.message.content,
    n = typeof t === "string" ? t : t[0]?.type === "text" ? t[0].text : void 0;
  if (n === void 0) return !1;
  let s = YBe(n);
  return s !== null && mDt(s) && s.data.sender_kind === N;
}
function M(e) {
  return e.type === "attachment"
    ? e.attachment.type === "queued_command" && e.attachment.projectsUserTurn === !0
    : e.type === "user" && e.projectsUserTurn === !0;
}
function _(e, t) {
  let n = new Set();
  for (let r of e) {
    if (r.type !== "user" || !Array.isArray(r.message.content)) continue;
    for (let i of r.message.content)
      if (i.type === "tool_result" && i.is_error === !0) n.add(i.tool_use_id);
  }
  let s = !1,
    d;
  for (let r of e) {
    if (r.type !== "assistant") continue;
    for (let i of r.message.content) {
      if (i.type !== "tool_use" || !t.includes(i.name)) continue;
      if (n.has(i.id)) {
        d = i.name;
        continue;
      }
      if (!i.name.endsWith(P))
        return { answered: !0, noReplyOnly: !1, erroredTerminalTool: void 0 };
      s = !0;
    }
  }
  return { answered: s, noReplyOnly: s, erroredTerminalTool: s ? void 0 : d };
}
export { Ohr, fki, pki, Mhr, mki, Roo, gki };

//# sourceMappingURL=chunk-xn0xgn6s.js.map
