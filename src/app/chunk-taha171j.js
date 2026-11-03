// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N } from "./chunk-fs43t96t.js";
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { nt, U, q, ye, J } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Ii } from "./chunk-5rw2zfa0.js";
import { iSt } from "./chunk-vn4qkmxw.js";
import { i } from "./chunk-cj37hmns.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { mue, Bf, rbn, Lc, Nn, xKt, Iue, k } from "./chunk-ajtyjx88.js";
import { Td, Qc } from "./chunk-exz0w70z.js";
import { fl, Vm } from "./chunk-at88wjsn.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { mu } from "./chunk-64ygy579.js";
import { VKr } from "./chunk-d65ze5ng.js";
import { Ade } from "./chunk-tsf65jkw.js";
import {
  fGt,
  Dgn,
  J8,
  dwt,
  pGt,
  s_e,
  kLe,
  mGt,
  g7n,
  rCe,
  BGo,
  jGo,
  xGr,
  Si
} from "./chunk-crvt0hax.js";
import { Zet } from "./chunk-70kfjmfv.js";
import { DS } from "./chunk-y609bddh.js";
import { $n } from "./chunk-ya7n419k.js";
import { Ce } from "./chunk-a2y39866.js";
function pcn() {
  try {
    return iSt();
  } catch (n) {
    return (l(N(n)), !0);
  }
}
function rt() {
  try {
    return Ie().loadedModules.some((n) => !DS(n) && n.hooks("command.run"));
  } catch (n) {
    return (l(N(n)), !0);
  }
}
function Nyt(n) {
  try {
    return (
      Ade() ||
      rt() ||
      Ie().loadedModules.some(
        (e) =>
          !DS(e) &&
          (e.hooks("prompt.submit") ||
            (e.hooks("session.append") &&
              !(
                n === "queue-record" &&
                mu(e) &&
                VKr(e.matcherFor("session.append"), "door", "queue")
              )))
      )
    );
  } catch (e) {
    return (l(N(e)), !0);
  }
}
function fx(n) {
  return Nyt(n) || pcn();
}
var c = Ce(fl(), 1),
  At = Ce(Vm(), 1);
import { createHash as qt } from "crypto";
var Lt = 61440;
function Ot() {
  return Math.min(
    i.CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH ?? Lt,
    i.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0,
    i.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0,
    i.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0
  );
}
function xO(n) {
  let e = Ot();
  if (n.length <= e) return { content: n, truncated: !1 };
  let s = `

[TRUNCATED - Content exceeds ${e >= 1024 ? `${Math.floor(e / 1024)}KB` : `${e} character`} limit]`;
  if (s.length >= e) return { content: n.slice(0, e), truncated: !0 };
  return { content: n.slice(0, e - s.length) + s, truncated: !0 };
}
function w() {
  return i.OTEL_LOG_USER_PROMPTS;
}
class ot {
  seenHashes = new Set();
  lastReportedMessage = new Map();
  emittedUserPromptForSessionId = void 0;
}
var it = new nt(() => new ot());
function K2s() {
  let n = it.of(U());
  (n.seenHashes.clear(), n.lastReportedMessage.clear());
}
function UP() {
  if (!(i.ENABLE_BETA_TRACING_DETAILED && Boolean(process.env.BETA_TRACING_ENDPOINT) && !J()))
    return !1;
  return ye() || k("tengu_trace_lantern", !1);
}
function G(n) {
  return qt("sha256").update(n).digest("hex").slice(0, 12);
}
function Bt(n) {
  return `sp_${G(n)}`;
}
function st(n) {
  let e = _(n.message.content);
  return `msg_${G(e)}`;
}
function V(n) {
  return (
    /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/.exec(n.trim())?.[1]?.trim() || null
  );
}
function Y(n, e) {
  let r = [],
    s = [];
  for (let o of n) {
    if (o.type === "api_system") {
      s.push(o.message.content);
      continue;
    }
    let a = o.message.content;
    if (typeof a === "string") {
      let u = V(a);
      if (u) s.push(u);
      else if (e)
        r.push(`[USER]
${a}`);
    } else if (Array.isArray(a)) {
      for (let u of a)
        if (u.type === "text") {
          let h = V(u.text);
          if (h) s.push(h);
          else if (e)
            r.push(`[USER]
${u.text}`);
        } else if (u.type === "tool_result") {
          if (typeof u.content === "string") {
            let h = V(u.content);
            if (h) s.push(h);
            else if (e)
              r.push(`[TOOL RESULT: ${u.tool_use_id}]
${u.content}`);
          } else if (e)
            r.push(`[TOOL RESULT: ${u.tool_use_id}]
${_(u.content)}`);
        }
    }
  }
  return { contextParts: r, systemReminders: s };
}
function Ut(n, e) {
  let { systemReminders: r } = Y(n, !1);
  return { contextParts: [e], systemReminders: r.map(() => e) };
}
function Nt(n, e, r) {
  let s = g7n(
    n.map((o) => o.message),
    r,
    e.map((o) => o.message)
  );
  return n.map((o, a) => (s[a] === o.message ? o : { ...o, message: s[a] }));
}
var Dt = () => kLe(U().host);
function X(n, e) {
  if (!UP() || !w()) return;
  let { content: r, truncated: s } = xO(`[USER PROMPT]
${s_e(() => kLe(U().host), void 0, e)}`);
  n.setAttributes({
    new_context: r,
    ...(s && { new_context_truncated: !0, new_context_original_length: e.length })
  });
}
function at(n, e, r, s, o) {
  if (!UP()) return;
  let a = it.of(U()),
    u = (f) =>
      r !== void 0 && s === void 0
        ? { withheld: "account_memory_text_not_identified" }
        : pGt(s ?? Dt, e?.querySource, f),
    h = (f) => {
      let p = u((g) => mGt(f, g));
      return "withheld" in p ? dwt(p.withheld) : p.value;
    };
  if (e?.systemPrompt) {
    let { systemPrompt: f } = e,
      p = Bt(f),
      g,
      m = () => (g ??= u((d) => mGt(f, d)));
    if ((n.setAttribute("system_prompt_hash", p), w())) {
      let d = m();
      n.setAttribute(
        "system_prompt_preview",
        "withheld" in d ? dwt(d.withheld) : d.value.slice(0, 500)
      );
    }
    n.setAttribute("system_prompt_length", e.systemPrompt.length);
    let b = w() ? m() : void 0;
    if (b !== void 0 && "value" in b && !a.seenHashes.has(p)) {
      a.seenHashes.add(p);
      let { content: d, truncated: S } = xO(b.value);
      Si(
        "system_prompt",
        {
          system_prompt_hash: p,
          system_prompt: d,
          system_prompt_length: String(e.systemPrompt.length),
          ...(S && { system_prompt_truncated: "true" })
        },
        o
      );
    }
  }
  if (e?.userSystemPrompt && w()) {
    let f = q();
    if (a.emittedUserPromptForSessionId !== f) {
      a.emittedUserPromptForSessionId = f;
      let { content: p, truncated: g } = xO(h(e.userSystemPrompt));
      n.setAttributes({
        user_system_prompt: p,
        ...(g && {
          user_system_prompt_truncated: !0,
          user_system_prompt_original_length: e.userSystemPrompt.length
        })
      });
    }
  }
  if (e?.tools)
    try {
      let p = te(e.tools).map((g) => {
        let m = _(g),
          b = G(m);
        return { name: typeof g.name === "string" ? g.name : "unknown", hash: b, json: m };
      });
      (n.setAttribute("tools", _(p.map(({ name: g, hash: m }) => ({ name: g, hash: m })))),
        n.setAttribute("tools_count", p.length));
      for (let { name: g, hash: m, json: b } of p)
        if (!a.seenHashes.has(`tool_${m}`)) {
          a.seenHashes.add(`tool_${m}`);
          let { content: d, truncated: S } = xO(b);
          Si(
            "tool",
            { tool_name: Nn(g), tool_hash: m, tool: d, ...(S && { tool_truncated: "true" }) },
            o
          );
        }
    } catch {
      n.setAttribute("tools_parse_error", !0);
    }
  if (r && r.length > 0 && e?.querySource) {
    let f = e.querySource,
      p = a.lastReportedMessage.get(f),
      g = 0;
    if (p) {
      let S = r[p.index];
      if (S && st(S) === p.hash) g = p.index + 1;
    }
    let m = r.slice(g).filter((S) => S.type === "user" || S.type === "api_system");
    if (m.length > 0) {
      let S = w(),
        E = S ? u((M) => Y(Nt(m, r, M), !0)) : { value: Y(m, !1) },
        { contextParts: et, systemReminders: H } =
          "withheld" in E ? Ut(m, dwt(E.withheld)) : E.value;
      if ((n.setAttribute("new_context_message_count", m.length), H.length > 0))
        n.setAttribute("system_reminders_count", H.length);
      if (et.length > 0 && S) {
        let M = et.join(`

---

`),
          { content: z, truncated: j } = xO(M);
        n.setAttributes({
          new_context: z,
          ...(j && { new_context_truncated: !0, new_context_original_length: M.length })
        });
      }
      if (H.length > 0 && S) {
        let M = H.join(`

---

`),
          { content: z, truncated: j } = xO(M);
        n.setAttributes({
          system_reminders: z,
          ...(j && { system_reminders_truncated: !0, system_reminders_original_length: M.length })
        });
      }
    }
    let b = r.length - 1,
      d = r[b];
    if (d) a.lastReportedMessage.set(f, { index: b, hash: st(d) });
  }
}
function ut(n, e) {
  if (!UP() || !w() || !e) return;
  let r = (s) => s_e(e.accountMemoryKeys, e.querySource, s);
  if (e.modelOutput !== void 0) {
    let { content: s, truncated: o } = xO(r(e.modelOutput));
    if (((n["response.model_output"] = s), o))
      ((n["response.model_output_truncated"] = !0),
        (n["response.model_output_original_length"] = e.modelOutput.length));
  }
}
function ct(n, e, r, s = !1) {
  if (!UP() || !Lc()) return;
  let { content: o, truncated: a } = xO(`[TOOL INPUT: ${e}]
${s ? J8(r) : r}`);
  n.setAttributes({
    tool_input: o,
    ...(a && { tool_input_truncated: !0, tool_input_original_length: r.length })
  });
}
function pt(n, e, r, s = !1) {
  if (!UP() || !xKt()) return;
  let { content: o, truncated: a } = xO(`[TOOL RESULT: ${e}]
${s ? J8(r) : r}`);
  if (((n.new_context = o), a))
    ((n.new_context_truncated = !0), (n.new_context_original_length = r.length));
}
class dt {
  recorder = null;
}
var $t = new W(() => new dt());
function A() {
  return $t.of(U().host).recorder;
}
function V2s() {
  let n = i.CLAUDE_CODE_PERFETTO_TRACE;
  t(`[Perfetto] initializePerfettoTracing called, env value: ${n}`);
}
function XGe() {
  return A() !== null;
}
function U5n(n, e, r) {
  let s = A();
  if (!s) return;
  s.registerAgent(n, e, r);
}
function JGe(n) {
  let e = A();
  if (!e) return;
  e.unregisterAgent(n);
}
function ft(n) {
  let e = A();
  if (!e) return "";
  return e.startLLMRequestSpan(n);
}
function gt(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endLLMRequestSpan(n, e);
}
function lt(n, e) {
  let r = A();
  if (!r) return "";
  return r.startToolSpan(n, e);
}
function mt(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endToolSpan(n, e);
}
function ht(n) {
  let e = A();
  if (!e) return "";
  return e.startUserInputSpan(n);
}
function _t(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endUserInputSpan(n, e);
}
function St(n, e, r) {
  let s = A();
  if (!s) return;
  s.emitInstant(n, e, r);
}
function Tt(n) {
  let e = A();
  if (!e) return "";
  return e.startInteractionSpan(n);
}
function bt(n) {
  let e = A();
  if (!e || !n) return;
  e.endInteractionSpan(n);
}
var v = new WeakMap(),
  I = c.createContextKey("cc.interaction_state"),
  L = c.createContextKey("cc.tool_state"),
  B = c.createContextKey("cc.blocked_state"),
  Z = c.createContextKey("cc.execution_state"),
  Et = c.createContextKey("cc.subagent_state"),
  It = c.createContextKey("cc.turn_trace_contexts");
class vt {
  lastSequence = 0;
}
var Ht = new W(() => new vt());
function ULo() {
  let n =
    process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if (Ne(n)) return !0;
  if (is(n)) return !1;
  return !1;
}
function TG() {
  return ULo() || UP();
}
function Tde() {
  return !1;
}
function B5n(n, e) {
  return;
}
function hBt(n, e) {
  n.setStatus(F(e));
}
function xt(n, e) {
  if (!e) return;
  (n.setAttribute("tool_use_id", e), n.setAttribute("gen_ai.tool.call.id", e));
}
function Ft(n) {
  switch (n) {
    case "bedrock":
    case "mantle":
      return "aws.bedrock";
    case "vertex":
      return "gcp.vertex_ai";
    case "firstParty":
    case "anthropicAws":
    case "anthropicGoogleCloud":
    case "foundry":
    case "gateway":
      return "anthropic";
  }
}
function px() {
  return Zet();
}
function Wt() {
  let n = {},
    e = q();
  if (O.test(e)) n["session.id"] = e;
  let r = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (r !== void 0 && O.test(r)) n["ccr.session.id"] = r;
  return n;
}
function Rt() {
  return { ...(px() ? Wt() : fGt()), "gen_ai.provider.name": Ft(Ae()) };
}
var Kt = new Set(["rpc.service", "mcp_tool"]),
  O = /^[A-Za-z0-9_.-]{1,64}$/,
  yt = {
    [Qc]: /^[a-z][a-z0-9_]{0,39}$/,
    [Td]: /^[A-Za-z][A-Za-z0-9_]{0,39}$/,
    playwright: /^browser_[a-z_]{1,40}$/
  };
function zt(n) {
  if (n.startsWith("mcp__")) {
    let [, e, ...r] = n.split("__"),
      s = e !== void 0 && Object.hasOwn(yt, e) ? yt[e] : void 0;
    return s !== void 0 && s.test(r.join("__")) && O.test(n) ? n : "mcp_other";
  }
  return !n.includes("__") && O.test(n) ? n : "other";
}
function jt(n) {
  let e = mue(n)?.replaceAll(":", ".");
  return e !== void 0 && O.test(e) ? e : void 0;
}
var Vt = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function tt(n, e) {
  let r = e?.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    ...(n !== void 0 && !px() && { error: n }),
    ...(r !== void 0 && Vt.test(r) && { error_class: r })
  };
}
function BLo(n) {
  return `${n.name} (${n.message.length} chars; text not recorded)`;
}
function F(n) {
  return { code: c.SpanStatusCode.ERROR, ...(n && !px() && { message: n }) };
}
function y() {
  return c.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function T() {
  return xGr();
}
function C(n) {
  let e = T().getValue(n);
  return e && !e.ended ? e : void 0;
}
function x(n, e) {
  v.set(e.span, e);
  let r = c.trace.setSpan(e.priorContext, e.span).setValue(n, e);
  if ((rCe.enterWith(r), n === I)) BGo(r);
}
function R(n, e) {
  if (((e.ended = !0), n === I && jGo()?.getValue(n) === e)) BGo(void 0);
  if (T().getValue(n) === e) rCe.enterWith(e.priorContext);
}
function P(n, e = {}) {
  return { ...Rt(), "span.type": n, ...e };
}
function Yt(n) {
  if (!n) return [];
  return n.linked.flatMap(({ traceparent: e }) => {
    let r = kt(e);
    return r ? [{ context: r, attributes: { "link.type": "queued_send" } }] : [];
  });
}
function Mt() {
  return T().getValue(It);
}
function j5n() {
  return Mt()?.contexts;
}
function N$r() {
  let n = Mt();
  if (n) n.contexts = void 0;
}
function Ct(n, e) {
  if (Bf(e)) return;
  let r = e.agentId !== void 0 ? Dgn(e.agentId) : void 0;
  if (r !== void 0) n.setAttribute("agent_id", r);
  let s = e.parentAgentId !== void 0 ? Dgn(e.parentAgentId) : void 0;
  if (s !== void 0) n.setAttribute("parent_agent_id", s);
}
function Q() {
  let n = q();
  return !px() || O.test(n) ? { "gen_ai.conversation.id": n } : {};
}
function D(n) {
  switch (n.agentType) {
    case "main":
      return Q();
    case "subagent": {
      if (n.isMainSession) return Q();
      let e = Dgn(n.agentId);
      return e !== void 0 ? { "gen_ai.conversation.id": e } : {};
    }
    case "teammate":
      return {};
  }
}
function Gt(n, e) {
  let r = XGe() ? Tt(n) : void 0,
    s = T();
  if (!TG()) {
    if (r) {
      let E = c.trace.getActiveSpan() || y().startSpan("dummy");
      return (
        x(I, {
          span: E,
          startTime: performance.now(),
          attributes: { "span.type": "interaction" },
          perfettoSpanId: r,
          priorContext: s
        }),
        E
      );
    }
    return c.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let o = y(),
    a = fx(),
    u = a ? "<REDACTED>" : Pt(n),
    h = ++Ht.of(U().host).lastSequence,
    f = P("interaction", {
      "gen_ai.operation.name": "invoke_agent",
      ...Q(),
      user_prompt: u,
      user_prompt_length: a ? 0 : n.length,
      "interaction.sequence": h
    }),
    p = px() ? e : void 0,
    g = p?.parent ? K.extract(s, { traceparent: p.parent.traceparent }, c.defaultTextMapGetter) : s,
    m =
      g === s && ye() && i.TRACEPARENT
        ? c.propagation.extract(s, { traceparent: i.TRACEPARENT, tracestate: i.TRACESTATE })
        : s,
    b = g !== s ? g : m;
  f["parent.source"] = g !== s ? "event" : m !== s ? "env" : "none";
  let d = Yt(p);
  f.queued_sends = d.length;
  let S = o.startSpan("claude_code.interaction", { attributes: f, links: d }, b);
  if (!px() && !a) X(S, n);
  return (
    x(I, {
      span: S,
      startTime: performance.now(),
      attributes: f,
      perfettoSpanId: r,
      priorContext: s,
      promptHandle: Symbol("interaction prompt"),
      isPromptHeld: a
    }),
    S
  );
}
function Pt(n) {
  return i.OTEL_LOG_USER_PROMPTS && !px() ? s_e(() => kLe(U().host), void 0, n) : "<REDACTED>";
}
function mcn() {
  return C(I)?.promptHandle;
}
function jLo(n, e, r) {
  let s = C(I);
  if (n === void 0 || s?.promptHandle !== n || (s.isPromptHeld !== !0 && r === e)) return;
  if (
    ((s.isPromptHeld = r === void 0),
    s.span.setAttributes({
      user_prompt: r === void 0 ? "<REDACTED>" : Pt(r),
      user_prompt_length: r?.length ?? 0
    }),
    !px())
  )
    X(s.span, r ?? "<REDACTED>");
}
function W5n(n, e, r) {
  let [s, o] = typeof e === "function" ? [void 0, e] : [e, r],
    a = { contexts: s };
  return rCe.with(T().setValue(It, a), () => {
    let u = T();
    Gt(n, s);
    let h = T();
    try {
      return rCe.with(h, o);
    } finally {
      if (T() === h) rCe.enterWith(u);
    }
  });
}
function LTe() {
  let n = C(I);
  if (!n) return;
  if (n.perfettoSpanId) bt(n.perfettoSpanId);
  if (!TG()) {
    R(I, n);
    return;
  }
  let e = Math.max(0, Math.round(performance.now() - n.startTime));
  (n.span.setAttributes({ "interaction.duration_ms": e }), n.span.end(), R(I, n));
}
function $$r(n, e, r, s, o, a, u) {
  let h = XGe() ? ft({ model: n, querySource: a ?? r?.querySource, messageId: void 0 }) : void 0,
    f = T();
  if (!TG()) {
    if (h) {
      let E = c.trace.getActiveSpan() || y().startSpan("dummy");
      return (
        v.set(E, {
          span: E,
          startTime: performance.now(),
          attributes: { model: n },
          perfettoSpanId: h,
          priorContext: f
        }),
        E
      );
    }
    return c.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let p = y(),
    g = T().getValue(L),
    m = px() ? $n(n) : n,
    b = P("llm_request", {
      model: m,
      "gen_ai.system": "anthropic",
      "gen_ai.request.model": m,
      "llm_request.context": g ? "tool" : C(I) ? "interaction" : "standalone",
      speed: o ? "fast" : "normal",
      ...(e && D(e))
    }),
    d = p.startSpan("claude_code.llm_request", { attributes: b }, f);
  if (r?.querySource && !px()) d.setAttribute("query_source", r.querySource);
  let S = jt(a ?? r?.querySource);
  if (S !== void 0) d.setAttribute("query_source_safe", S);
  if (e && !Bf(e)) {
    if ((Ct(d, e), !px())) d.setAttributes(rbn(e));
  }
  if (!px()) at(d, r, s, u, e);
  return (
    v.set(d, {
      span: d,
      startTime: performance.now(),
      attributes: b,
      perfettoSpanId: h,
      priorContext: f
    }),
    d
  );
}
function F$r(n, { attempt: e, clientRequestId: r }) {
  let s = { attempt: e };
  if (r !== void 0) s.client_request_id = r;
  if (n && TG()) n.addEvent("gen_ai.request.attempt", s);
  St("LLM Attempt", "api,attempt", s);
}
var K = new At.W3CTraceContextPropagator();
function kt(n) {
  let e = K.extract(c.ROOT_CONTEXT, { traceparent: n }, c.defaultTextMapGetter);
  return c.trace.getSpanContext(e);
}
function gcn(n, e) {
  if (!n) return;
  let r = v.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let s = Math.max(0, Math.round(performance.now() - r.startTime));
  if (e?.error !== void 0)
    e = { ...e, error: s_e(e.accountMemoryKeys ?? (() => kLe(U().host)), e.querySource, e.error) };
  if (r.perfettoSpanId)
    gt(r.perfettoSpanId, {
      ttftMs: e?.ttftMs,
      ttltMs: s,
      promptTokens: e?.inputTokens,
      outputTokens: e?.outputTokens,
      cacheReadTokens: e?.cacheReadTokens,
      cacheCreationTokens: e?.cacheCreationTokens,
      success: e?.success,
      error: e?.error,
      requestSetupMs: e?.requestSetupMs,
      attemptStartTimes: e?.attemptStartTimes,
      requestId: e?.requestId,
      clientRequestId: e?.clientRequestId
    });
  if (!TG()) return;
  let o = { duration_ms: s };
  if (e) {
    if (e.inputTokens !== void 0) o.input_tokens = e.inputTokens;
    if (e.outputTokens !== void 0) o.output_tokens = e.outputTokens;
    if (e.cacheReadTokens !== void 0) o.cache_read_tokens = e.cacheReadTokens;
    if (e.cacheCreationTokens !== void 0) o.cache_creation_tokens = e.cacheCreationTokens;
    if (e.success !== void 0) o.success = e.success;
    if (e.statusCode !== void 0) o.status_code = e.statusCode;
    if ((Object.assign(o, tt(e.error, e.errorClass)), e.attempt !== void 0)) o.attempt = e.attempt;
    if (e.hasToolCall !== void 0) o["response.has_tool_call"] = e.hasToolCall;
    if (e.requestId !== void 0)
      ((o.request_id = e.requestId), (o["gen_ai.response.id"] = e.requestId));
    if (e.clientRequestId !== void 0) o.client_request_id = e.clientRequestId;
    if (e.ttftMs !== void 0) o.ttft_ms = e.ttftMs;
    if (e.firstContentMs !== void 0) o.first_content_ms = e.firstContentMs;
    if (e.effort !== void 0) o.effort = e.effort;
    if (!px()) ut(o, e);
  }
  if ((r.span.setAttributes(o), e?.stopReason !== void 0))
    (r.span.setAttribute("stop_reason", e.stopReason),
      r.span.setAttribute("gen_ai.response.finish_reasons", [e.stopReason]));
  if (e?.success === !1) r.span.setStatus(F(e.error));
  if (e?.traceresponse) {
    let a = kt(e.traceresponse);
    if (a) r.span.addLink({ context: a, attributes: { "link.type": "parent_of" } });
  }
  r.span.end();
}
function q2s(n, e, r, s, o, a = !1) {
  let u = XGe() ? lt(n, r) : void 0,
    h = T();
  if (!TG()) {
    if (u) {
      let S = c.trace.getActiveSpan() || y().startSpan("dummy");
      return (
        x(L, {
          span: S,
          startTime: performance.now(),
          attributes: { "span.type": "tool", tool_name: n },
          perfettoSpanId: u,
          priorContext: h
        }),
        S
      );
    }
    return c.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let f = y(),
    p = zt(n),
    g = px() ? p : n,
    m = Iue(g),
    b = P("tool", {
      tool_name: g,
      tool_name_safe: p,
      "gen_ai.operation.name": "execute_tool",
      "gen_ai.tool.name": m?.mcpToolName ?? g,
      ...(m && { "anthropic.mcp.server.name": m.serverName }),
      ...(e && D(e)),
      ...r
    }),
    d = f.startSpan("claude_code.tool", { attributes: b }, h);
  if (e && !Bf(e)) {
    if ((Ct(d, e), !px())) d.setAttributes(rbn(e));
  }
  if ((xt(d, o), s && !px())) ct(d, n, s, a);
  return (
    x(L, {
      span: d,
      startTime: performance.now(),
      attributes: b,
      perfettoSpanId: u,
      priorContext: h
    }),
    d
  );
}
function Y2s(n) {
  let e = XGe() ? ht("tool_permission") : void 0,
    r = T();
  if (!TG()) {
    if (e) {
      let u = c.trace.getActiveSpan() || y().startSpan("dummy");
      return (
        x(B, {
          span: u,
          startTime: performance.now(),
          attributes: { "span.type": "tool.blocked_on_user" },
          perfettoSpanId: e,
          priorContext: r
        }),
        u
      );
    }
    return c.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let s = y(),
    o = P("tool.blocked_on_user", D(n)),
    a = s.startSpan("claude_code.tool.blocked_on_user", { attributes: o }, r);
  return (
    x(B, {
      span: a,
      startTime: performance.now(),
      attributes: o,
      perfettoSpanId: e,
      priorContext: r
    }),
    a
  );
}
function X2s(n, e) {
  let r = C(B);
  if (!r) return;
  if (r.perfettoSpanId) _t(r.perfettoSpanId, { decision: n, source: e });
  if (!TG()) {
    R(B, r);
    return;
  }
  let o = { duration_ms: Math.max(0, Math.round(performance.now() - r.startTime)) };
  if (n) o.decision = n;
  if (e) o.source = e;
  (r.span.setAttributes(o), r.span.end(), R(B, r));
}
function J2s(n, e) {
  let r = T();
  if (!TG()) return c.trace.getActiveSpan() || y().startSpan("dummy");
  let s = y(),
    o = P("tool.execution", D(n)),
    a = s.startSpan("claude_code.tool.execution", { attributes: o }, r);
  return (
    xt(a, e),
    x(Z, { span: a, startTime: performance.now(), attributes: o, priorContext: r }),
    a
  );
}
function WLo(n) {
  if (!TG()) return;
  let e = C(Z);
  if (!e) return;
  let s = { duration_ms: Math.max(0, Math.round(performance.now() - e.startTime)) };
  if (n) {
    if (n.success !== void 0) s.success = n.success;
    if (n.success === !1 && !n.interrupted) s["error.type"] = "tool_error";
    Object.assign(s, tt(n.error, n.errorClass));
  }
  if ((e.span.setAttributes(s), n?.success === !1)) e.span.setStatus(F(n.error));
  (e.span.end(), R(Z, e));
}
function QGe(n, e, r, s = !1) {
  let o = n ? v.get(n) : C(L);
  if (!o || o.ended) return;
  if (o.perfettoSpanId) mt(o.perfettoSpanId, { success: !0, resultTokens: r });
  if (!TG()) {
    R(L, o);
    return;
  }
  let u = { duration_ms: Math.max(0, Math.round(performance.now() - o.startTime)) };
  if (e && !0 && !px()) {
    let h = o.attributes.tool_name || "unknown";
    pt(u, h, e, s);
  }
  if (r !== void 0) u.result_tokens = r;
  (o.span.setAttributes(u), o.span.end(), R(L, o));
}
function GLo(n) {
  return TG() && xKt() && !px() && n.isRecording();
}
function Q2s(n) {
  if (typeof n === "string") return n;
  if (!Array.isArray(n)) return "";
  return n.map((e) => (e?.type === "text" ? String(e.text) : `[${String(e?.type ?? "unknown")}]`))
    .join(`
`);
}
function zLo(n, e, r) {
  if (!GLo(n)) return;
  let s = v.get(n);
  if (!s || s.ended) return;
  let o = {};
  for (let [a, u] of Object.entries(r))
    if (typeof u === "string") {
      let { content: h, truncated: f } = xO(u);
      if (((o[a] = h), f)) ((o[`${a}_truncated`] = !0), (o[`${a}_original_length`] = u.length));
    } else o[a] = u;
  s.span.addEvent(e, o);
}
function KLo(n) {
  if (!TG()) return;
  let e = n.spanContext();
  if (!e.traceId || e.traceId === "00000000000000000000000000000000") return;
  let r = c.trace.setSpan(c.context.active(), n),
    s = {};
  return (K.inject(r, s, c.defaultTextMapSetter), s.traceparent);
}
function XDe() {
  if (!TG()) return;
  let n = c.trace.getSpan(T());
  if (!n) return;
  return KLo(n);
}
function Z2s(n) {
  if (!n || !TG()) return;
  let e = T(),
    r = K.extract(e, { traceparent: n }, c.defaultTextMapGetter);
  return r === e ? void 0 : r;
}
function eKs(n, e) {
  return n === void 0 ? e() : rCe.with(n, e);
}
function G5n(n, e) {
  if (!Tde()) return;
  return y().startSpan(
    n,
    {
      attributes: {
        ...Rt(),
        "span.type": e.spanType,
        ...(px() ? Ii(e.attrs ?? {}, (r, s) => Kt.has(s)) : e.attrs),
        ...(!px() && e.contentAttrs)
      }
    },
    T()
  );
}
async function z5n(n, e, r) {
  let s = G5n(n, e);
  if (!s) return r(void 0);
  let o = c.trace.setSpan(T(), s);
  return rCe.with(o, async () => {
    try {
      return await r(s);
    } catch (a) {
      if (!e.isExpectedError?.(a)) {
        let u = a instanceof Error && e.withholdErrorText?.(a) ? BLo(a) : void 0;
        if (a instanceof Error && !px())
          s.recordException(u === void 0 ? a : { name: a.name, message: u });
        hBt(s, u ?? (a instanceof Error ? a.message : String(a)));
      }
      throw a;
    } finally {
      s.end();
    }
  });
}
function tKs(n) {
  if (!Tde()) return;
  let e = T(),
    r = Dgn(n.agentId),
    s = n.parentAgentId !== void 0 ? Dgn(n.parentAgentId) : void 0,
    o = P("subagent.spawn", {
      ...(r !== void 0 && { agent_id: r }),
      agent_type: px() && !n.isBuiltIn ? "custom" : n.agentType,
      ...(s !== void 0 && { parent_agent_id: s })
    }),
    a = y().startSpan("claude_code.subagent.spawn", { attributes: o }, e);
  return (x(Et, { span: a, startTime: performance.now(), attributes: o, priorContext: e }), a);
}
function nKs(n, e) {
  if (!n) return;
  let r = v.get(n);
  if (!r || r.ended) return;
  if (e?.success !== void 0) n.setAttribute("success", e.success);
  if (e?.error) (n.setAttributes(tt(e.error, e.errorClass)), hBt(n, e.error));
  (n.end(), R(Et, r));
}
function wt() {
  return UP() || Tde();
}
function rKs(n, e, r, s, o) {
  if (!wt()) return c.trace.getActiveSpan() || y().startSpan("dummy");
  let a = y(),
    u = T(),
    { content: h } = xO(s),
    f = P("hook", {
      ...D(o),
      hook_event: n,
      hook_name: px() ? n : e,
      num_hooks: r,
      ...(Lc() && !px() && { hook_definitions: h })
    }),
    p = a.startSpan("claude_code.hook", { attributes: f }, u);
  return (v.set(p, { span: p, startTime: performance.now(), attributes: f, priorContext: u }), p);
}
function oKs(n, e) {
  if (!wt()) return;
  let r = v.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let o = { duration_ms: Math.max(0, Math.round(performance.now() - r.startTime)) };
  if (e) {
    if (e.numSuccess !== void 0) o.num_success = e.numSuccess;
    if (e.numBlocking !== void 0) o.num_blocking = e.numBlocking;
    if (e.numNonBlockingError !== void 0) o.num_non_blocking_error = e.numNonBlockingError;
    if (e.numCancelled !== void 0) o.num_cancelled = e.numCancelled;
  }
  if ((r.span.setAttributes(o), e && (e.numNonBlockingError ?? 0) > 0))
    r.span.setStatus(F(`${e.numNonBlockingError} hook(s) failed`));
  r.span.end();
}
export {
  pcn,
  Nyt,
  fx,
  xO,
  K2s,
  UP,
  V2s,
  XGe,
  U5n,
  JGe,
  ULo,
  TG,
  Tde,
  B5n,
  hBt,
  px,
  BLo,
  j5n,
  N$r,
  mcn,
  jLo,
  W5n,
  LTe,
  $$r,
  F$r,
  gcn,
  q2s,
  Y2s,
  X2s,
  J2s,
  WLo,
  QGe,
  GLo,
  Q2s,
  zLo,
  KLo,
  XDe,
  Z2s,
  eKs,
  G5n,
  z5n,
  tKs,
  nKs,
  rKs,
  oKs
};

//# sourceMappingURL=chunk-taha171j.js.map
