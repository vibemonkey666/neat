// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c, ce } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { Rf } from "./chunk-ewvf3tep.js";
import { t } from "./chunk-4kxznmzw.js";
import { Qv } from "./chunk-5z6t3gwt.js";
import { ql } from "./chunk-5rw2zfa0.js";
import { Hy, Wn } from "./chunk-ajtyjx88.js";
import { fh } from "./chunk-63a6mqbs.js";
import { oo } from "./chunk-39ayby14.js";
import { _L } from "./chunk-25j20xpc.js";
import { LK, Ah } from "./chunk-j0tbz6ra.js";
import { e3 } from "./chunk-t7ft03m9.js";
import { ec } from "./chunk-nhj692ya.js";
var R = "tengu_tranquil_fern";
function f() {
  return Wn(R, !0);
}
function tao() {
  return { source: "none", trustedMode: void 0, recordedMode: "absent" };
}
function iys(e) {
  if (e.source !== "none") return "restored";
  return (e.recordedMode === "plan" || e.transcriptOpen === !0) && e.trustedMode !== "plan"
    ? "declined"
    : "none";
}
function g(e) {
  if (e === void 0 || e === null) return "absent";
  return (typeof e === "string" && fh(e)) || "invalid";
}
function P(e) {
  return { ..._L(e.mode, "plan", e), mode: "plan" };
}
function S(e) {
  return { ...e, toolPermissionContext: P(e.toolPermissionContext) };
}
function _(e) {
  return f() && e.mode !== "plan" && e3.isEnabled() && !oo(e, e3);
}
function Igi(e, n, { forkSession: o, transcript: s } = {}) {
  if (((n.recordedMode = g(e?.worker_permission_mode)), n.recordedMode === "invalid"))
    t("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", {
      level: "warn"
    });
  if (n.recordedMode === "plan" && s && f()) n.recordTranscriptState = f_r(s);
  return (r) => {
    if (
      ((n.trustedMode ??= r.toolPermissionContext.mode),
      n.recordedMode !== "plan" || o || !_(r.toolPermissionContext))
    )
      return r;
    return (
      (n.source = "internal"),
      t(
        `[planModeResume] re-entering plan mode from the prior worker's record (was ${r.toolPermissionContext.mode})`
      ),
      S(r)
    );
  };
}
function nao(e, n, { planModeOnResume: o, restored: s, restartedWorker: r }) {
  let i = Boolean(s?.external || s?.internal);
  if (r && !i) return;
  if ((e.enableWorkerPermissionModeRecord(), o !== void 0 && i))
    e.notifyInternalMetadataChanged({ worker_permission_mode: ql(n) });
}
function ays(e, n, o, s) {
  let r =
    s &&
    n.source === "none" &&
    (n.recordedMode === "absent" || n.recordedMode === "invalid") &&
    f() &&
    f_r(e) === "open";
  if (r) n.transcriptOpen = !0;
  o((i) => {
    if (
      ((n.trustedMode ??= i.toolPermissionContext.mode),
      !r || i.toolPermissionContext.mode === "plan" || oo(i.toolPermissionContext, e3))
    )
      return i;
    return (
      (n.source = "transcript"),
      t(
        `[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${i.toolPermissionContext.mode})`
      ),
      S(i)
    );
  });
}
function f_r(e) {
  let n = `<${Rf}>/plan</${Rf}>`,
    o = new Set(),
    s = new Set(),
    r = x(e),
    i = !1,
    d = () => (i ? "none" : "open");
  for (let M = e.length - 1; M >= 0; M--) {
    let l = e[M];
    if (l.type === "attachment") {
      let m = l.attachment.type;
      if (m === "plan_mode" || m === "plan_mode_reentry") return d();
      if (m === "plan_mode_exit") return "exited";
    } else if (l.type === "assistant" && Array.isArray(l.message.content)) {
      let m = l.message.content;
      for (let p = m.length - 1; p >= 0; p--) {
        let u = m[p];
        if (u.type !== "tool_use") continue;
        if (u.name === ec && s.has(u.id) && !o.has(u.id) && !r.has(u.id)) return "exited";
        if (u.name === Qv && s.has(u.id) && (!o.has(u.id) || r.has(u.id))) return d();
      }
    } else if (l.type === "user" && LK(l)) {
      let m = l.message.content;
      if (Array.isArray(m)) {
        for (let p of m)
          if (p.type === "tool_result") (p.is_error || y(l, p.content) ? o : s).add(p.tool_use_id);
      }
    } else if (l.type === "user") {
      if (Ah(l)?.trimStart().startsWith(n)) return d();
      if (l.permissionMode === "plan") return d();
      if (l.permissionMode !== void 0 && !l.isMeta && Hy(l.origin)) i = !0;
    }
  }
  return "none";
}
function x(e) {
  let n = new Set(),
    o = new Set();
  for (let s of e) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let r of s.message.content) {
      if (r.type !== "tool_use") continue;
      if (n.has(r.id)) o.add(r.id);
      else n.add(r.id);
    }
  }
  return o;
}
function y(e, n) {
  let o = e.toolUseResult;
  if (o !== null && typeof o === "object" && o.awaitingLeaderApproval === !0) return !0;
  return typeof n === "string" && n.startsWith("Your plan has been submitted to the team lead");
}
function p_r({ sdkUrl: e, permissionModeSuppliedOnInvocation: n, forkSession: o }) {
  if (!e3.isEnabled() || o) return !1;
  return !!e || n === !1;
}
function rao(e, n, o) {
  let s = tao();
  return (
    ays(e, s, o, p_r(n)),
    oao(s, { lane: n.sdkUrl ? "sdk_url" : "print", hadExternal: !1, hadInternal: !1 }),
    iys(s)
  );
}
function m_r(e, n, { lane: o, forkSession: s, transcript: r }) {
  let i = tao();
  if ((n(Igi(e?.internal, i, { forkSession: s, transcript: r?.messages })), r))
    ays(r.sourceRows, i, n, r.sourceAllowed);
  return (oao(i, { lane: o, hadExternal: !!e?.external, hadInternal: !!e?.internal }), iys(i));
}
function Bki(
  e,
  { storedPermissionMode: n, messages: o, forkSession: s, startupModePinned: r, lane: i }
) {
  let d = tao();
  if (((d.trustedMode = e.mode), (d.recordedMode = g(n)), !r && !s && _(e))) {
    if (d.recordedMode === "plan") {
      if (((d.recordTranscriptState = f_r(o)), d.recordTranscriptState !== "exited"))
        d.source = "stored";
    } else if ((d.recordedMode === "absent" || d.recordedMode === "invalid") && f_r(o) === "open")
      ((d.transcriptOpen = !0), (d.source = "transcript"));
  }
  if ((oao(d, { lane: i, hadExternal: !1, hadInternal: !1 }), d.source === "none")) return;
  return (
    t(`[planModeResume] re-entering plan mode on resume (source: ${d.source}, was ${e.mode})`),
    P(e)
  );
}
function oao(e, { lane: n, hadExternal: o, hadInternal: s }) {
  let r = e.source === "none" ? e.trustedMode : "plan";
  a("tengu_worker_permission_mode_restore", {
    source: c(e.source),
    lane: c(n),
    trusted_mode: ce(e.trustedMode),
    recorded_mode: c(e.recordedMode),
    target_mode: ce(r),
    had_external: o,
    had_internal: s,
    guard_enabled: f(),
    ...(e.recordTranscriptState && { record_transcript_state: c(e.recordTranscriptState) }),
    ...(e.transcriptOpen && { transcript_open: !0 })
  });
}
export { tao, iys, Igi, nao, ays, f_r, p_r, rao, m_r, Bki, oao };

//# sourceMappingURL=chunk-b3gj9f0k.js.map
