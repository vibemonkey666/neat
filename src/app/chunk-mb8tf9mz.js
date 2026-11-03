// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { Eq, Kst } from "./chunk-4nzy53ma.js";
import { wbt } from "./chunk-nahqyybs.js";
import { p } from "./chunk-qmkm2x59.js";
import { dkt, mor, fqe } from "./chunk-jwqtbev0.js";
import { _x } from "./chunk-7faha9cq.js";
import { Lrr } from "./chunk-at88wjsn.js";
import { W_e, N0e, HVe, q4o, Y4o, Lnr, Ant } from "./chunk-ajtyjx88.js";
import { o, T, u, $e, A } from "./chunk-0bqrj5ah.js";
var G = p(() => T($e([o(), T($e([u({ type: A("text"), text: o() }), u({ type: o() })]))]))),
  x = 1000;
function kBr(e) {
  if (e == null) return { texts: [] };
  if (Array.isArray(e)) {
    let s = e.length;
    for (let d = 0; d < e.length && s <= x; d++) {
      let l = e[d];
      if (Array.isArray(l)) s += l.length;
    }
    if (s > x) return { texts: [], problem: "too_many_items" };
  }
  let n = G().safeParse(e);
  if (!n.success) return { texts: [], problem: "malformed" };
  let r = !1,
    i = n.data
      .map((s) => {
        if (typeof s === "string") return s;
        let d = [];
        for (let l of s)
          if (l.type === "text" && "text" in l && typeof l.text === "string") d.push(l.text);
          else r = !0;
        return d.join(`
`);
      })
      .filter((s) => s.trim() !== "");
  return r ? { texts: i, problem: "non_text_ignored" } : { texts: i };
}
var F = 100;
function bYs(e) {
  if (e == null) return { texts: [] };
  if (!Array.isArray(e)) return { texts: [], problem: "malformed_inline_pastes" };
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (typeof i !== "string") return { texts: [], problem: "malformed_inline_pastes" };
    if (i.trim() === "") continue;
    if (n.length === F) return { texts: n, problem: "inline_pastes_cut" };
    n.push(i);
  }
  return { texts: n };
}
var P = new Set(["ios", "android", "web_claude_ai", "desktop_app"]);
function h(e) {
  return P.has(e) || !1;
}
function mAe(e) {
  return e !== void 0 && P.has(e);
}
function W8n(e) {
  return e === "claude_code_cli" || e === "claude_code_vscode";
}
function JFo(e, n) {
  if (n) return;
  return W8n(e) ? { kind: "human" } : void 0;
}
var L = new Set([
    "scheduled_trigger",
    "force_run_trigger",
    "github_webhook_trigger",
    "fire_routine",
    "pr_steward"
  ]),
  j = new Set(["trigger_fire"]);
function QFo(e) {
  return e !== void 0 && j.has(e);
}
var Q_t = "session_inbox",
  b = new Set(["github_webhook", "pr_steward", "signal_subscription"]);
function SYs(e) {
  return e !== void 0 && (b.has(e) || e === Q_t);
}
var H = "projects-relay";
function ZFo({ relayMessageIds: e, isSynthetic: n }) {
  return e !== void 0 || n !== !0;
}
var K = "triggerFireReason";
function wYs(e, n) {
  if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") return e;
  let r = vfn(n);
  return r === void 0 ? e : { ...e, fireReason: r };
}
function I(e) {
  if (QFo(e)) return { kind: "task-notification", subkind: "scheduled-trigger" };
  if (e === Q_t) return { kind: "task-notification", subkind: "session-inbox" };
  return { kind: "task-notification" };
}
var W = new Set(["scheduled_trigger", "force_run_trigger", "fire_routine"]);
function vfn(e) {
  return k(e, K);
}
function Efn(e, n, r, i) {
  if (e === "now") return e;
  let s = r !== void 0 && V.has(r) && (r !== "trigger_fire" || i !== void 0);
  return (n && W.has(n)) || s ? "later" : e;
}
var B = new Set(["claude-in-slack", "claude_in_slack"]),
  M = new Set([N0e]),
  w = "claude-in-teams",
  TBr = "email_human",
  z = "email_turn_text",
  Y = ["sender_only", "sender_reply"];
function kfn(e) {
  if (e.inbound_origin !== TBr) return;
  let n = k(e, z);
  return Y.find((r) => r === n);
}
function G8n(e) {
  return e === Ant;
}
function Tfn(e) {
  return e === Ant || e === HVe;
}
function Q(e) {
  if (e === Ant || e === HVe) return !0;
  return e !== void 0 && e.startsWith("hearth");
}
var V = new Set(["trigger_fire", "plugin_fire"]),
  X = "receiver_grouping_id";
function eUo(e) {
  return k(e, X);
}
function k(e, n) {
  let r = e[n];
  return typeof r === "string" ? r : void 0;
}
var q = "activity_observation";
function tUo(e) {
  return k(e, q);
}
function D() {
  return Eq();
}
function J() {
  return Kst();
}
function Z(e, n) {
  return e !== void 0 && B.has(e) && n === q4o && D();
}
function ee(e, n) {
  return e === w && n === Y4o && J();
}
function vye(e, n) {
  return Z(e, n) || ee(e, n);
}
function R(e, n) {
  return (n === void 0 && e !== void 0 && h(e)) || vye(e, n);
}
function z8n(e, n, r) {
  return e ? e.kind === "human" : R(n, r);
}
function vYs(e, n, r, i) {
  if (e) return e.kind === "human";
  if (!n) return !0;
  return R(r, i) || JFo(r, i) !== void 0;
}
function W1t(e, n, r = !1) {
  let i;
  try {
    i = xZe(e);
  } catch {
    return !1;
  }
  if (!i || G1t(i.content)) return !1;
  let { clientPlatform: s, inboundOrigin: d } = i;
  if (d !== void 0) return n === "bridge" ? vye(s, d) : Z_t(d, r);
  return R(s, void 0) || (n === "remote-worker" && W8n(s));
}
function Z_t(e, n = !1, r = !1) {
  return e === q4o || e === Y4o || e === Lnr || (n && e === Ant) || (r && e === TBr);
}
function K8n({
  isRelayHuman: e,
  isSynthetic: n,
  ccrTurnId: r,
  isProjectsUser: i = !1,
  emailSenderTurn: s
}) {
  if (!e) return {};
  return {
    ...(!n && { verifiedSlackHumanTurn: !0 }),
    ...(!n && i && { projectsUserTurn: !0 }),
    ...(!n && s !== void 0 && { emailSenderTurn: s }),
    ...(r !== void 0 && { ccrTurnId: r })
  };
}
function Afn(e, n, r, i, s, d, l) {
  let m = G1t(e);
  if (m)
    return {
      kind: "peer",
      from: m,
      inbound_origin: r,
      ...(l !== void 0 && { plugin: l }),
      ...fqe(e)
    };
  if (r === Q_t) return I(r);
  if (r && b.has(r)) return I(r);
  let _ = Q(r);
  if (!_ && r === void 0 && n && h(n)) return { kind: "human" };
  if (!_ && vye(n, r)) return { kind: "human" };
  if (!_ && n && L.has(n)) return I(r);
  if (r === W_e && i) return { kind: "task-notification", subkind: "peer-send-message" };
  t(
    `[bridge] demoting unwrapped inbound message to peer origin: client_platform=${n || "(absent)"}`,
    { level: "warn" }
  );
  let y = !n
    ? "absent"
    : n.startsWith("claude_code")
      ? "claude_code"
      : B.has(n)
        ? r === N0e && D()
          ? "slack_bot_observation"
          : "slack_relay"
        : n === w
          ? "teams_relay"
          : "other";
  return (
    a("tengu_bridge_ingress_demoted", { platform_class: c(y) }),
    {
      kind: "peer",
      from: "unknown",
      inbound_origin: r,
      ...fqe(e),
      ...(d !== void 0 && r !== void 0 && M.has(r) && { activityObservation: d })
    }
  );
}
function CZe(e, n, r) {
  if (e && e.kind !== "peer" && e.kind !== "slack-ping") return e;
  if (n && L.has(n)) return I(r);
  if (n && h(n)) return { kind: "human" };
  return;
}
function nUo(e, n, r, i, s, d = !1, l = !1, m, _ = !1) {
  let y = G1t(e);
  if (y)
    return {
      kind: "peer",
      from: y,
      inbound_origin: r,
      ...fqe(e),
      ...(m !== void 0 && { plugin: m })
    };
  if (r && !M.has(r)) {
    if (r === Ant)
      if (d) g("bridge_projects_human_origin");
      else f("bridge_projects_human_origin", "disabled_by_flag");
    if (Z_t(r, d, _)) return { kind: "human" };
    if (r === HVe && l) return { kind: "task-notification", subkind: H };
    if (r === W_e && i) return { kind: "task-notification", subkind: "peer-send-message" };
    return I(r);
  }
  if (W8n(n)) return { kind: "human" };
  if (n?.startsWith("claude_code")) return;
  return Afn(e, n, r, i, void 0, s, m);
}
function RZe(e) {
  return e.verifiedSlackHumanTurn === !0 && e.priority !== "now";
}
function EYs(e, n) {
  if (e === "now") return e;
  return n ? "later" : e;
}
function gAe(e) {
  let i = e.trimStart(),
    s = !1;
  while (i.startsWith("<system-reminder>")) {
    let l = i.indexOf("</system-reminder>");
    if (l < 0) break;
    ((i = i.slice(l + 18).trimStart()), (s = !0));
  }
  let d = (s ? i : e).trimEnd();
  while (d.endsWith("</system-reminder>")) {
    let l = d.lastIndexOf(`
`);
    if (!(l < 0 ? d : d.slice(l + 1)).startsWith("<system-reminder>")) break;
    ((d = (l < 0 ? "" : d.slice(0, l)).trimEnd()), (s = !0));
  }
  if (!s) return e;
  return d === "" ? e : d;
}
function rUo(e) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i.type !== "text") continue;
    let s = gAe(i.text);
    if (s === i.text) continue;
    ((n ??= [...e]), (n[r] = { ...i, text: s }));
  }
  return n ?? e;
}
function xZe(e) {
  if (e.type !== "user") return;
  let n = "pasted_content" in e ? e.pasted_content : void 0,
    r = "inline_pastes" in e ? e.inline_pastes : void 0,
    i = _x(e).length > 0 || kBr(n).texts.length > 0,
    s = e.message?.content;
  if (!s && !i) return;
  if (Array.isArray(s) && s.length === 0 && !i) return;
  let d = "uuid" in e && typeof e.uuid === "string" ? e.uuid : void 0,
    l = k(e, "client_platform"),
    m = k(e, "inbound_origin"),
    _ = "wake_envelope" in e ? e.wake_envelope : void 0,
    y = eUo(e),
    E = tUo(e),
    U = dkt("from_plugin" in e ? e.from_plugin : void 0),
    v,
    S = Array.isArray(s) ? oUo(rUo(ne(s))) : gAe(s ?? "");
  if (Array.isArray(S) && S.length === 0 && !i) return;
  return {
    content: S,
    uuid: d,
    clientPlatform: l,
    inboundOrigin: m,
    wakeEnvelope: _,
    receiverGroupingId: y,
    slackOrigin: v,
    activityObservation: E,
    pastedContent: n,
    inlinePastes: r,
    fromPlugin: U
  };
}
function G1t(e) {
  if (typeof e !== "string") return;
  return e.match(mor)?.[1];
}
function hAe(e) {
  if (typeof e === "string") return G1t(e) !== void 0;
  if (!Array.isArray(e)) return !1;
  return e.some(
    (n) =>
      typeof n === "object" &&
      n !== null &&
      "type" in n &&
      n.type === "text" &&
      "text" in n &&
      typeof n.text === "string" &&
      G1t(n.text) !== void 0
  );
}
function oUo(e) {
  if (!e.some(N)) return e;
  return e.filter((n) => !N(n));
}
function N(e) {
  if (e.type !== "text") return !1;
  return typeof e.text !== "string" || e.text.trim() === "";
}
function ne(e) {
  if (!e.some(O)) return e;
  return e.map((n) => {
    if (!O(n)) return n;
    let r = n.source,
      i = typeof r.mediaType === "string" && r.mediaType ? r.mediaType : wbt(n.source.data);
    return { ...n, source: { type: "base64", media_type: i, data: n.source.data } };
  });
}
function O(e) {
  if (e.type !== "image" || e.source?.type !== "base64") return !1;
  return !e.source.media_type;
}
function pAe(e, n) {
  let r = e.onCommandLifecycle;
  e.onCommandLifecycle = (...i) => {
    (r?.(...i), n(...i));
  };
}
function j8n(e, n) {
  return n || Lrr(e) ? "cancelled" : "completed";
}
export {
  pAe,
  j8n,
  kBr,
  bYs,
  mAe,
  W8n,
  JFo,
  QFo,
  Q_t,
  SYs,
  ZFo,
  wYs,
  vfn,
  Efn,
  TBr,
  kfn,
  G8n,
  Tfn,
  eUo,
  tUo,
  vye,
  z8n,
  vYs,
  W1t,
  Z_t,
  K8n,
  Afn,
  CZe,
  nUo,
  RZe,
  EYs,
  gAe,
  rUo,
  xZe,
  G1t,
  hAe,
  oUo
};

//# sourceMappingURL=chunk-mb8tf9mz.js.map
