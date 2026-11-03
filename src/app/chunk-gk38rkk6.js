// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Hte } from "./chunk-1bh1hcpt.js";
import { Zut, SDt, F8e, Cte, nUn } from "./chunk-dnprf49a.js";
import { q } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { Ye } from "./chunk-fs43t96t.js";
import { Jl, X, Nt } from "./chunk-4hww8411.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { te } from "./chunk-4kxznmzw.js";
import { Ze } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { Rt } from "./chunk-wany0nxw.js";
import { b_ } from "./chunk-4nzy53ma.js";
import { Ls, Vi } from "./chunk-at88wjsn.js";
import { eu, CH } from "./chunk-5rw2zfa0.js";
import { $0e, wv, k } from "./chunk-ajtyjx88.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { zi } from "./chunk-ynkasage.js";
import { Xb } from "./chunk-wdvpwq3x.js";
import { upt, tne, KWn, zN } from "./chunk-j0tbz6ra.js";
import { WE } from "./chunk-g9040er0.js";
import { jD, OG } from "./chunk-36ftx0qt.js";
import { ld } from "./chunk-53nx6xac.js";
import { f1, h9e, SAr, Mft, EHt, i1n, FRs } from "./chunk-9c9qtnk1.js";
import { kCs } from "./chunk-xhm2xm8d.js";
import { CCs, RCs } from "./chunk-j4n8akhp.js";
import { n_o, aen } from "./chunk-s1m39qcs.js";
import { eUn } from "./chunk-98t1ehjk.js";
import { y9e } from "./chunk-ra80mpyg.js";
import { d1n } from "./chunk-e0nmwvd2.js";
import { g1 } from "./chunk-qce1rsft.js";
import { za } from "./chunk-j4601ec1.js";
import { H } from "./chunk-p8tprgqa.js";
function x(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return;
  }
  if (o.host === "") return;
  return `${o.protocol}//${f1(o.host)}`;
}
function oe(e, o) {
  let t = x(e),
    i = x(o);
  return t === void 0 || i === void 0 || t !== i;
}
function F(e, o) {
  let t = zi().lastExecutedTabUrlByScope.get(e);
  if (t === void 0) return;
  return oe(t, o) ? { from: t, to: o } : void 0;
}
function B(e, o) {
  zi().lastExecutedTabUrlByScope.set(e, o);
}
var re =
  "Browser extension is not connected. The user's app may now be showing a card that sets up a browser for Claude. In one or two short sentences, tell them that you need a browser for this, and that they can set up the Claude desktop app or Claude in Chrome in the card below. Give no links or other installation steps, and stop until they reply.";
async function N(
  e,
  { agentId: o, messages: t, options: { messageClientPlatform: i, refreshTools: r, tools: s } }
) {
  let [d, ...b] = e.content ?? [];
  if (!(
    d?.type === "text" &&
    b.length === 0 &&
    eUn(d.text) &&
    o === void 0 &&
    nr() &&
    b_() &&
    (i === "web_claude_ai" || i === "desktop_app") &&
    $0e(t) &&
    !zi().bridgeBinding?.context.getPersistedDeviceId?.() &&
    k("tengu_memoized_owl", !1) &&
    !(r?.() ?? s).some((a) => WE(a.name) && !a.name.startsWith(jD)) &&
    (await RCs())
  ))
    return e;
  return (g("chrome_setup_card_answer"), { content: [{ type: "text", text: re }] });
}
var Q = 200;
function D(e, o) {
  let t = zi().resolvedHostByToolUseId;
  if (t.size >= Q) t.clear();
  t.set(e, o);
}
function ne(e, o) {
  let t = zi().resolvedUrlByToolUseId;
  if (t.size >= Q) t.clear();
  t.set(e, o);
}
function J() {
  let { key: e, fromHost: o } = n_o();
  if (o) return { sessionId: e };
  let t = q();
  return { sessionId: t };
}
function DAi(e, o) {
  zi().bridgeBinding = { context: e, socketClient: o };
}
function j(e, o) {
  let t = jD.slice(0, -2),
    i = `${jD}*`;
  for (let r of Object.values(e.alwaysAllowRules))
    for (let s of r ?? []) {
      let d = s.replace(/\(\*?\)$/, "");
      if (d === o || d === t || d === i) return !0;
    }
  return !1;
}
var se = new Set([
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "resize_window",
    "shortcuts_list",
    "list_connected_browsers"
  ]),
  ie = new Set(["switch_browser", "select_browser"]),
  le = {
    tab_missing:
      "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
    batch_multiple_tabs:
      "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
    batch_after_navigate:
      "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch:
      "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item:
      "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch."
  };
function ce(e, o) {
  let t = [];
  if (e === "browser_batch") {
    if (!Array.isArray(o.actions)) return { kind: "deny", code: "batch_malformed_item" };
    for (let s of o.actions) {
      if (!H(s) || typeof s.name !== "string" || s.name === "browser_batch")
        return { kind: "deny", code: "batch_malformed_item" };
      t.push({ name: s.name, input: H(s.input) ? s.input : {} });
    }
  } else t.push({ name: e, input: o });
  let i = new Set(),
    r = !1;
  for (let s of t) {
    if (s.name === "navigate") {
      r = !0;
      continue;
    }
    if (ie.has(s.name)) {
      if (t.length > 1) return { kind: "deny", code: "batch_browser_switch" };
      continue;
    }
    if (se.has(s.name)) continue;
    if (r) return { kind: "deny", code: "batch_after_navigate" };
    if (typeof s.input.tabId !== "number") return { kind: "deny", code: "tab_missing" };
    i.add(s.input.tabId);
  }
  if (i.size === 0) return { kind: "none" };
  if (i.size > 1) return { kind: "deny", code: "batch_multiple_tabs" };
  return { kind: "tab", tabId: [...i][0] };
}
var Z = 5000,
  de = 2500,
  ue = new Set([
    "connect_timeout",
    "no_browser_selected_timeout",
    "browser_selected_late_timeout",
    "answer_timeout"
  ]);
async function G(e) {
  let o = Jl.monotonicNow(),
    t = Promise.withResolvers(),
    i = new AbortController(),
    r = O({ onSentToSelectedBrowser: t.resolve }).then((u) => (i.abort(), V(u, e))),
    s = { sent: !1 },
    d = t.promise
      .then(async () => {
        await X(de, i.signal);
        let u = Z - (Jl.monotonicNow() - o),
          a = zi().bridgeBinding?.socketClient;
        if (
          i.signal.aborted ||
          u <= 0 ||
          a?.isConnected() !== !0 ||
          a.hasActiveSelection?.() !== !0
        )
          return;
        s.sent = !0;
        let n = V(await O({ capMs: u }), e);
        if (L(n)) return n;
        if (n.ok || !ue.has(n.failure)) s.callMs = n.callMs;
        return;
      })
      .catch((u) => {
        l(u);
        return;
      }),
    b = await Promise.race([
      r.then(() => {
        return;
      }),
      d
    ]);
  if (b === void 0) {
    let u = await r;
    if (s.sent && !u.ok && u.failure === "answer_timeout")
      return { ...u, failure: "answer_timeout_after_retry", retryCallMs: s.callMs };
    return u;
  }
  return (
    r
      .then((u) => {
        let a = { connect_ms: u.connectMs, call_ms: u.callMs, retry_call_ms: b.callMs },
          n = L(u);
        if (n) {
          if (f1(n.host) !== f1(L(b)?.host ?? ""))
            f("chrome_permission_prompt", "tab_lookup_hosts_differed", a);
          return;
        }
        let _ = u.ok ? "non_web_tab_url" : u.failure;
        if (_ === "answer_timeout") {
          f("chrome_permission_prompt", "tab_lookup_rescued_after_answer_timeout", a);
          return;
        }
        f("chrome_permission_prompt", "tab_lookup_rescued_after_failure", {
          ...a,
          first_lookup_failure: c(_)
        });
      })
      .catch(l),
    b
  );
}
function z(e) {
  return {
    connect_ms: e.connectMs,
    call_ms: e.callMs,
    ...(!e.ok && e.retryCallMs !== void 0 && { retry_call_ms: e.retryCallMs })
  };
}
function L(e) {
  return e.ok ? EHt(e.url) : void 0;
}
function V(e, o) {
  if (!e.ok) return e;
  let { tabs: t, connectMs: i, callMs: r } = e,
    s = t.findIndex((b) => b == null || b.tabId === o),
    d = t[s];
  if (s === -1)
    return {
      ok: !1,
      failure: t.length === 0 ? "empty_tab_list" : "tab_not_listed",
      connectMs: i,
      callMs: r
    };
  if (d == null || typeof d.url !== "string")
    return { ok: !1, failure: "malformed_tab_list", connectMs: i, callMs: r };
  if (d.url === "") return { ok: !1, failure: "tab_url_empty", connectMs: i, callMs: r };
  return { ok: !0, url: d.url, connectMs: i, callMs: r };
}
async function O(e) {
  let o = Jl.monotonicNow(),
    t = {},
    i;
  try {
    let b = zi().bridgeBinding;
    if (!b) return { ok: !1, failure: "binding_missing", connectMs: 0, callMs: 0 };
    let { socketClient: u } = b;
    i = await Nt(
      (async () => {
        if (!(await u.ensureConnected())) return "not_connected";
        if (
          ((t.browserSelected = u.hasActiveSelection?.()),
          (t.startedAt = Jl.monotonicNow()),
          t.browserSelected === !0)
        )
          e?.onSentToSelectedBrowser?.();
        let a = await u.callTool(
          "tabs_context_mcp",
          { createIfEmpty: !1, includePermissionState: !1 },
          { permissionMode: "ask", sessionScope: J() }
        );
        if (!a) return "empty_result";
        if (a.error) return `tool_error_${Zut("tabs_context_mcp", SDt(a.error))}`;
        let n = a.result?.content,
          _ =
            Array.isArray(n) &&
            n[0] &&
            typeof n[0] === "object" &&
            "text" in n[0] &&
            typeof n[0].text === "string"
              ? n[0].text
              : void 0;
        if (!_) return "no_text";
        let C;
        try {
          C = te(_);
        } catch {
          return _.includes("createIfEmpty") ? "no_tab_group" : "not_json";
        }
        let y = C?.availableTabs;
        return Array.isArray(y) ? y : "no_tab_list";
      })().catch((a) => {
        if (t.startedAt === void 0) return "connect_threw";
        if (
          a instanceof Error &&
          (a.name === "SocketConnectionError" || a.name === "ToolCallLostError")
        )
          return "connection_lost";
        if (a instanceof F8e) return "no_extension";
        if (a instanceof Cte) return "extension_disconnected";
        return "call_threw";
      }),
      e?.capMs ?? Z,
      "queryTabUrl bridge call"
    ).catch(() => {
      if (t.startedAt === void 0) return "connect_timeout";
      if (u.hasActiveSelection?.() === !1) return "no_browser_selected_timeout";
      return t.browserSelected === !1 ? "browser_selected_late_timeout" : "answer_timeout";
    });
  } catch {
    i = "other_threw";
  }
  let r = Jl.monotonicNow(),
    s = Math.round((t.startedAt ?? r) - o),
    d = t.startedAt === void 0 ? 0 : Math.round(r - t.startedAt);
  return typeof i === "string"
    ? { ok: !1, failure: i, connectMs: s, callMs: d }
    : { ok: !0, tabs: i, connectMs: s, callMs: d };
}
kCs(async () => {
  let e = await O();
  return e.ok ? e.tabs : void 0;
});
var me = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function W(e) {
  return { type: "text", text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]` };
}
function fe(e) {
  if (!e) return !1;
  let o = Ze(e, ";").trim().toLowerCase();
  return me.has(o === "image/jpg" ? "image/jpeg" : o);
}
async function pe(e, o) {
  let t = ld(o),
    i = [];
  for (let r of e.content ?? [])
    if (r.type === "text") i.push({ type: "text", text: r.text });
    else if (r.type === "image")
      if (fe(r.mimeType))
        try {
          let { block: s } = await Xb({ data: String(r.data), mediaType: r.mimeType, limits: t });
          i.push(s);
        } catch {
          i.push(W("could not be decoded"));
        }
      else i.push(W(`unsupported type ${r.mimeType ?? "unknown"}`));
  return i;
}
function _e(e) {
  if (!Array.isArray(e.actions)) return !1;
  return e.actions.some((o) => {
    if (!H(o) || typeof o.name !== "string") return !0;
    return (
      o.name === "browser_batch" || (Hte.has(o.name) && !tne(o.name, H(o.input) ? o.input : {}))
    );
  });
}
function ee(e) {
  if (!Array.isArray(e.actions)) return [];
  let o = [];
  for (let t of e.actions) {
    if (!H(t)) continue;
    let i = H(t.input) ? t.input : {};
    if (t.name === "browser_batch") {
      let d = ee(i);
      if (d === "unvettable") return d;
      o.push(...d);
      continue;
    }
    if (t.name !== "navigate" || typeof i.url !== "string") continue;
    let r = i.url.trim().toLowerCase();
    if (r === "back" || r === "forward") continue;
    let s = EHt(i.url);
    if (!s) return "unvettable";
    o.push(s.host, i1n(s));
  }
  return o;
}
function Y(e, o) {
  return { source: o, ruleBehavior: "allow", ruleValue: { toolName: OG, ruleContent: e } };
}
function K(e, o, t) {
  let i = y9e(e, o);
  return t ? `Allow Claude in Chrome to ${i} on ${t}?` : `Allow Claude in Chrome to ${i}?`;
}
function be(e, o) {
  return async (t) => {
    let i;
    try {
      i = new URL(t.url);
    } catch {}
    let r = !!i?.host && e.has(f1(i.host)) && !SAr(o, f1(i1n({ url: i.href })));
    if (!r) m("chrome_permission_prompt", "stale_host_mismatch");
    return r;
  };
}
async function he(e, o, t, i, r, s, d) {
  let b = zi().bridgeBinding;
  if (!b)
    throw (
      m("chrome_permission_prompt", "binding_missing"),
      Error("Claude in Chrome bridge is not initialized in this session.")
    );
  if (t.aborted) throw new Ye("Claude in Chrome tool call aborted");
  let u,
    a = new Promise((S, h) => {
      ((u = () => h(new Ye("Claude in Chrome tool call aborted"))),
        t.addEventListener("abort", u, { once: !0 }));
    }),
    n,
    _ = s?.mark("external");
  try {
    n = await Promise.race([nUn(b.context, b.socketClient, e, KWn(o ?? {}), r), a]);
  } finally {
    if ((_?.(), u)) t.removeEventListener("abort", u);
  }
  if (n.isError) {
    let S =
        (n.content ?? []).flatMap((A) => (A.type === "text" ? [A.text] : [])).join(`
`) || `${e} failed`,
      h = n._meta,
      w = h?.toolCallFailureCause,
      v =
        h?.isBridgeTimeout === !0
          ? "bridge_timeout"
          : h?.isFrontLoadBoundExceeded === !0
            ? "front_load_bound_exceeded"
            : w === "connection_lost_mid_call" || w === "connection_lost_before_call"
              ? w
              : void 0,
      M = H(h) ? g1(h) : void 0;
    throw Object.assign(
      new wv(
        S,
        "Claude in Chrome tool returned error",
        M ? { _meta: M } : void 0,
        `chrome_${v ?? Zut(e, S)}`
      ),
      { mcpErrorSource: "other" }
    );
  }
  let C = await pe(await N(n, d), i),
    y = g1(n._meta);
  return { data: C, ...(y && { mcpMeta: { _meta: y } }) };
}
function e_o(e) {
  let o = `${jD}${e}`;
  return {
    checkPermissions: async (r, s) => {
      d1n(s.options?.messageClientPlatform);
      let d = s.toolUseId,
        b = Hte.has(e);
      if (b && tne(e, r)) {
        let p = ae(s);
        if (
          p?.chromeHostToolAsksEnabled !== !1 &&
          p?.mcpAskForTools?.[za]?.includes(e) === !0 &&
          p.shouldAvoidPermissionPrompts !== !0 &&
          p.mode !== "dontAsk"
        )
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            suppressAlwaysAllowRule: !0,
            decisionReason: { type: "other", reason: "Claude in Chrome action" },
            metadata: { command: { name: o, description: K(e, r, void 0) } }
          };
        return { behavior: "allow", updatedInput: r };
      }
      let u = (b && !tne(e, r)) || (e === "browser_batch" && _e(r));
      if (
        e === "navigate" &&
        typeof r.url === "string" &&
        (r.url.trim().toLowerCase() === "back" || r.url.trim().toLowerCase() === "forward")
      )
        return { behavior: "allow", updatedInput: r };
      let a = e === "browser_batch" ? FRs(r) : { input: r, toolName: e },
        n;
      if (a && a.toolName === "navigate" && typeof a.input.url === "string") {
        if (((n = EHt(a.input.url)), !n))
          return (
            m("chrome_permission_prompt", "non_web_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable URL",
                classifierApprovable: !1
              }
            }
          );
      } else if (a && typeof a.input.tabId === "number") {
        let p = await G(a.input.tabId);
        if (!p.ok)
          return (
            m("chrome_permission_prompt", `tab_url_unresolved_${p.failure}`, z(p)),
            {
              behavior: "deny",
              message:
                "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: tab URL unresolved",
                classifierApprovable: !1
              }
            }
          );
        if (((n = EHt(p.url)), !n))
          return (
            m("chrome_permission_prompt", "non_web_tab_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable tab URL",
                classifierApprovable: !1
              }
            }
          );
      }
      let _ = ae(s),
        C = eu(
          s.options?.tools?.find((p) => Rt(p, o)),
          _
        ),
        y = C === "bypassPermissions" || CH(C, _.isBypassPermissionsModeAvailable),
        S =
          _.chromeNavigationClassifierEnabled === !0 &&
          !y &&
          (_.chromeClassifierFloorEnabled === !0 || Ls(C)),
        h,
        w,
        v = () => {
          if (!d) return;
          if (w === void 0) zi().resolvedUrlByToolUseId.delete(d);
          else ne(d, w);
          if (h === void 0) upt(d);
        };
      if (S) {
        let p = ce(e, r);
        if (p.kind === "deny")
          return (
            m("chrome_permission_prompt", p.code),
            v(),
            {
              behavior: "deny",
              message: le[p.code],
              decisionReason: {
                type: "safetyCheck",
                reason: `Claude in Chrome: ${p.code}`,
                classifierApprovable: !1
              }
            }
          );
        if (p.kind === "tab") {
          let R =
              n && a?.toolName !== "navigate" && a?.input.tabId === p.tabId
                ? { ok: !0, url: n.url, connectMs: 0, callMs: 0 }
                : await G(p.tabId),
            U = R.ok ? EHt(R.url) : void 0;
          if (U === void 0)
            return (
              m(
                "chrome_permission_prompt",
                `tab_url_unresolved_${R.ok ? "non_web_tab_url" : R.failure}`,
                z(R)
              ),
              v(),
              {
                behavior: "deny",
                message:
                  "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
                decisionReason: {
                  type: "safetyCheck",
                  reason: "Claude in Chrome: tab URL unresolved",
                  classifierApprovable: !1
                }
              }
            );
          if (((h = F(aen(), U.url)), !(u && _.mode === "plan"))) w = U.url;
        }
      }
      v();
      let M = e === "browser_batch" ? ee(r) : [];
      if (M === "unvettable")
        return (
          m("chrome_permission_prompt", "non_web_url"),
          {
            behavior: "deny",
            message:
              "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: non-web or unparseable URL",
              classifierApprovable: !1
            }
          }
        );
      let A = h9e(_),
        I = [...(n ? [n.host, i1n(n)] : []), ...M].map((p) => Mft(A, p)).find((p) => p !== void 0);
      if (I) return (f("chrome_permission_prompt", "domain_rule_denied"), I);
      let T = !1,
        E;
      if (n) {
        let p = f1(n.host),
          R = A.sourceOf.get(p) ?? "session";
        if (
          ((T = A.allowed.has(p)),
          (E = T ? Y(n.host, R) : void 0),
          T && h === void 0 && _.chromeClassifierFloorEnabled !== !0 && !u)
        ) {
          if (d) D(d, n);
          return {
            behavior: "allow",
            updatedInput: r,
            decisionReason: { type: "rule", rule: Y(n.host, R) }
          };
        }
        if (d && (T || _.chromeClassifierFloorEnabled === !0 || !j(_, o))) D(d, n);
      }
      let P = zi().bridgeBinding;
      if (
        d &&
        P &&
        !y &&
        !(_.chromeClassifierFloorEnabled !== !0 && j(_, o)) &&
        (await CCs(s.abortController.signal))
      )
        return {
          behavior: "deny",
          message: P.context.onToolCallDisconnected(),
          decisionReason: { type: "other", reason: "Claude in Chrome: no browser connected" }
        };
      if (u && _.mode === "plan")
        return {
          behavior: "passthrough",
          message: "Claude in Chrome requires permission.",
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: o, ruleContent: void 0 }],
              behavior: "allow",
              destination: "session"
            }
          ]
        };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: n
          ? T
            ? void 0
            : [
                {
                  type: "addRules",
                  rules: [{ toolName: OG, ruleContent: n.host }],
                  behavior: "allow",
                  destination: "session"
                }
              ]
          : [
              {
                type: "addRules",
                rules: [{ toolName: o, ruleContent: void 0 }],
                behavior: "allow",
                destination: "session"
              }
            ],
        decisionReason: h
          ? {
              type: "safetyCheck",
              reason: "Claude in Chrome: cross-site navigation pending",
              classifierApprovable: !0
            }
          : {
              type: "other",
              reason: n ? `Claude in Chrome action on ${n.host}` : "Claude in Chrome action"
            },
        metadata: {
          command: {
            name: o,
            description: K(e, r, n?.host),
            chrome: n
              ? {
                  ...n,
                  domainAllowed: T,
                  navigation: h,
                  ...(E && {
                    grantRule: E,
                    classifierUnavailable:
                      _.chromeClassifierFloorEnabled === !0 && _.canAutoClassifierRun === !1
                  })
                }
              : void 0
          }
        }
      };
    },
    call: async (r, s, d, b, u, a) => {
      let n = s.toolUseId,
        _ = n ? zi().resolvedHostByToolUseId.get(n) : void 0,
        C = _?.host,
        y = n ? zi().resolvedUrlByToolUseId.get(n) : void 0;
      if (n) (zi().resolvedHostByToolUseId.delete(n), zi().resolvedUrlByToolUseId.delete(n));
      let S = ae(s),
        h = h9e(S),
        w = h.allowed,
        v = [...h.allowedRaw];
      if (C && !w.has(f1(C))) (w.add(f1(C)), v.push(C));
      let M = s.options?.tools?.find((p) => Rt(p, o)),
        A = eu(M, S),
        I =
          A === "bypassPermissions" ||
          (A === "auto" &&
            s.autoModeClassified === !0 &&
            C !== void 0 &&
            h.denied.size === 0 &&
            _?.keepHostPin !== !0),
        T = J(),
        E = I
          ? { permissionMode: "skip_all_permission_checks", sessionScope: T }
          : C
            ? {
                permissionMode: "follow_a_plan",
                allowedDomains: v,
                onPermissionRequest: be(w, h.denied),
                sessionScope: T
              }
            : v.length > 0
              ? { permissionMode: "follow_a_plan", allowedDomains: v, sessionScope: T }
              : { permissionMode: "ask", sessionScope: T },
        P = await he(e, r, s.abortController.signal, s.options.mainLoopModel, E, a?.timing, s);
      if (y !== void 0) B(aen(), y);
      if (C) g("chrome_permission_prompt");
      return P;
    },
    ignoresWholeToolAllowRule: (r) => Hte.has(e) && tne(e, r)
  };
}
export { DAi, e_o };

//# sourceMappingURL=chunk-gk38rkk6.js.map
