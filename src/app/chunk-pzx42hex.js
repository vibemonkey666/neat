// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { dko, MMs, F3, ZR, Sy, Oe } from "./chunk-j0tbz6ra.js";
import { Bf, Ut, k } from "./chunk-ajtyjx88.js";
import { F, ye } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import { i } from "./chunk-cj37hmns.js";
import { Ms } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { pt } from "./chunk-7c3thgax.js";
import { e9n } from "./chunk-bbw420pv.js";
import { fc } from "./chunk-vchq4g74.js";
import { li } from "./chunk-f7aya6cs.js";
import { _s } from "./chunk-hk4fpv24.js";
import { _o, Pg, ad, Rl, Dp, lo } from "./chunk-fnsjs1v2.js";
import { yMt, Zks, aEr } from "./chunk-dk9t7hr6.js";
import { Vee } from "./chunk-cbf3f420.js";
import { _e } from "./chunk-n8wdmnah.js";
var T = /\p{Script=Han}/u,
  A =
    /[\p{Script=Hiragana}\p{Script=Katakana}\u30fc\uff70\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u,
  R = /\p{Script=Hangul}/u,
  x = /[\p{L}\p{N}]/u;
function y(e) {
  let { han: n, phonetic: t, hangul: o } = w(e);
  return n + t + o;
}
function E(e) {
  let n = e.trim();
  if (n === "") return 0;
  let t = 0;
  for (let o of n.split(/\s+/)) {
    let { han: s, phonetic: r, hangul: u, other: d } = w(o);
    t += s === 0 && r === 0 ? 1 : (d + u > 0 ? 1 : 0) + s / 2 + r / 4;
  }
  return Math.ceil(t);
}
function w(e) {
  let n = 0,
    t = 0,
    o = 0,
    s = 0;
  for (let r of e)
    if (T.test(r)) n++;
    else if (A.test(r)) t++;
    else if (R.test(r)) o++;
    else if (x.test(r)) s++;
  return { han: n, phonetic: t, hangul: o, other: s };
}
function kUe(e) {
  return e.status === "shown" || e.status === "accepted";
}
function EOn(e) {
  return e.status === "empty" ? null : e.text;
}
function kOn() {
  let e = i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e === !1) return (a("tengu_prompt_suggestion_init", { enabled: !1, source: b("env") }), !1);
  if (e === !0) return (a("tengu_prompt_suggestion_init", { enabled: !0, source: b("env") }), !0);
  if (!k("tengu_chomp_inflection", !1))
    return (a("tengu_prompt_suggestion_init", { enabled: !1, source: b("growthbook") }), !1);
  if (ye())
    return (a("tengu_prompt_suggestion_init", { enabled: !1, source: b("non_interactive") }), !1);
  if (_s() && fc())
    return (a("tengu_prompt_suggestion_init", { enabled: !1, source: b("swarm_teammate") }), !1);
  let n = pt()?.promptSuggestionEnabled !== !1;
  return (a("tengu_prompt_suggestion_init", { enabled: n, source: b("setting") }), n);
}
function TOn() {
  let e = i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e !== void 0) return e;
  return pt()?.promptSuggestionEnabled !== !1;
}
function L(e, n) {
  if (!e.promptSuggestionEnabled) return "disabled";
  if (e.pendingWorkerRequest || e.pendingSandboxRequest) return "pending_permission";
  if (
    e.mcp.clients.some(
      (t) => t.type === "connected" && (t.transportErrorState?.pendingElicitations ?? 0) > 0
    )
  )
    return "elicitation_active";
  if (e.toolPermissionContext.mode === "plan") return "plan_mode";
  {
    let { status: t, overageInUse: o } = li(),
      s = t === "allowed_warning" && i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0;
    if (t !== "allowed" && !s) return "rate_limit";
    if ((n ?? o === !0) && e9n()) return "usage_credits";
  }
  return null;
}
async function doo(e, n, t, o, s, r) {
  if (e.signal.aborted) return (cL("aborted", s), null);
  if (F(n, (S) => S.type === "assistant") < 2) return (cL("early_conversation", s), null);
  let d = Sy(n);
  if (d?.isApiErrorMessage) return (cL("last_response_error", s), null);
  let p = t(),
    f = L(p, o.toolUseContext.queryTracking?.billedToUsageCredits);
  if (f) return (cL(f, s), null);
  let _ = O(d);
  if (_) return (cL("cache_cold", s, { cacheColdBy: _ }), null);
  if (r && aEr()) {
    let S = r.eligibleTurns % Zks === 0;
    if ((r.eligibleTurns++, !S)) return (cL("unused_streak", s), null);
  }
  let { suggestion: h, generationRequestId: P } = await q(e, o);
  if (e.signal.aborted) return (cL("aborted", s), null);
  if (!h) return (cL("empty", s), null);
  if (U(h, s)) return null;
  return { suggestion: h, generationRequestId: P };
}
async function ims(e, n) {
  if (!e.querySource?.startsWith("repl_main_thread")) return;
  let t = Vee(),
    o = Ut(),
    s = o && n?.tempo === "blocked" && !n.block;
  if (o ? t !== "focused" && !s : t === "blurred") {
    cL(o ? "bg_unattached" : "unfocused", "cli");
    return;
  }
  let r = e.toolUseContext.session.promptSuggestion,
    u = new AbortController();
  r.abortController = u;
  let d = F3(e);
  try {
    let p = await doo(u, e.messages, e.toolUseContext.getAppState, d, "cli", s ? void 0 : r);
    if (!p) return;
    if (yMt() && Bf(e.toolUseContext.agentContext)) {
      cL("plugin_owns", "cli");
      return;
    }
    let f = !1,
      { isShown: _ } = await MMs({
        text: p.suggestion,
        origin: { kind: "suggestion" },
        signal: u.signal,
        place: (h) => {
          if (u.signal.aborted) return { isShown: !1 };
          if (((f = !0), s)) v(h, n?.needs, e.toolUseContext.storageV5).catch(Rl);
          return dko(h, p.generationRequestId);
        }
      });
    if (u.signal.aborted) {
      cL("aborted", "cli");
      return;
    }
    if (!_ && f) cL("timing", "cli");
  } catch (p) {
    if (p instanceof Error && (p.name === "AbortError" || p.name === "APIUserAbortError")) {
      cL("aborted", "cli");
      return;
    }
    (m("prompt_suggestion_generate", "api_error"), l(N(p)));
  } finally {
    if (r.abortController === u) r.abortController = null;
  }
}
async function v(e, n, t) {
  if (Ms(e) !== e) return;
  let o = _o(Pg());
  Dp(o);
  let s = await lo(o, t);
  if (s?.tempo !== "blocked" || s.needs !== n || s.suggestedReply === e) return;
  await ad(o, { ...s, suggestedReply: e }, t);
}
var C = 1e4;
function O(e) {
  if (!e) return null;
  let n = e.message.usage,
    t = (n.input_tokens ?? 0) + (n.output_tokens ?? 0);
  if (t > C) return "uncached";
  let o = n.cache_creation_input_tokens ?? 0;
  if (t + o <= C) return null;
  return k("tengu_chomp_thaw", !1) ? null : "cache_write";
}
var I = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed \u2192 "run the tests"
After code written \u2192 "try it out"
Claude offers options \u2192 suggest the one the user would likely pick, based on conversation
Claude asks to continue \u2192 "yes" or "go ahead"
Task complete, obvious follow-up \u2192 "commit this" or "push it"
After error or misunderstanding \u2192 silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate \u2014 including any sensitive topic (security incidents, credentials, harm, private data). Even when the user is doing legitimate security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.`;
async function M(e, n, t) {
  let o = async () => ({
      behavior: "deny",
      message: "No tools needed for suggestion",
      decisionReason: { type: "other", reason: "suggestion only" }
    }),
    s = await ZR({
      promptMessages: [Oe({ content: e })],
      cacheSafeParams: t,
      canUseTool: o,
      querySource: "prompt_suggestion",
      forkLabel: "prompt_suggestion",
      overrides: { abortController: n },
      skipTranscript: !0,
      skipCacheWrite: !0
    }),
    r = s.messages.find((p) => p.type === "assistant"),
    u = r?.type === "assistant" ? (r.requestId ?? null) : null,
    d = [];
  for (let p of s.messages) {
    if (p.type !== "assistant" || p.isApiErrorMessage) continue;
    let f = p.message.content.find((_) => _.type === "text");
    if (f?.type === "text") d.push(f.text);
  }
  return { candidates: d, generationRequestId: u };
}
function W(e) {
  return e
    .trim()
    .replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, (n, t, o) =>
      o.includes(`</${t.toLowerCase()}>`) || o.includes(`</${t.toUpperCase()}>`) ? n : o
    )
    .replace(
      /^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|output|result|\u63D0\u6848|\u56DE\u7B54|\u8FD4\u4FE1|\u5FDC\u7B54|\u51FA\u529B|\u7D50\u679C|\u5EFA\u8BAE|\u56DE\u590D|\u7B54\u6848|\u8F93\u51FA|\u7ED3\u679C|\uC81C\uC548|\uB2F5\uBCC0|\uC751\uB2F5|\uCD9C\uB825|\uACB0\uACFC)\s*[:\uFF1A]\s*/i,
      ""
    )
    .trim();
}
async function q(e, n) {
  let { candidates: t, generationRequestId: o } = await M(I, e, n);
  for (let s of t) {
    let r = W(s);
    if (r) return (g("prompt_suggestion_generate"), { suggestion: r, generationRequestId: o });
  }
  return (g("prompt_suggestion_generate"), { suggestion: null, generationRequestId: o });
}
function U(e, n) {
  if (!e) return (cL("empty", n), !0);
  let t = e.toLowerCase(),
    o = E(e),
    s = [
      [
        "done",
        () =>
          t === "done" ||
          /^\P{L}*(\u5B8C\u4E86(\u3057\u307E\u3057\u305F)?|\u5B8C\u6210\u4E86?|\uC644\uB8CC\uB428?)\P{L}*$/u.test(
            e
          )
      ],
      [
        "meta_text",
        () =>
          t === "nothing found" ||
          t === "nothing found." ||
          t.startsWith("nothing to suggest") ||
          t.startsWith("no suggestion") ||
          /\bsilence is\b|\bstay(s|ing)? silent\b/.test(t) ||
          /^\W*silence\W*$/.test(t) ||
          /^\P{L}*(\u6C88\u9ED9|\u6C89\u9ED8|\u9759\u9ED8|\uCE68\uBB35|\u63D0\u6848(\u306A\u3057|\u306F\u3042\u308A\u307E\u305B\u3093)|\u7279\u306B(\u306A\u3057|\u3042\u308A\u307E\u305B\u3093)|[\u65E0\u6CA1\u6C92]\u6709?\u5EFA[\u8BAE\u8B70]|(\uC81C\uC548|\uD574\uB2F9)\s*\uC5C6\uC74C)\P{L}*$/u.test(
            e
          )
      ],
      [
        "meta_wrapped",
        () =>
          /^(\(.*\)|\[.*\]|\uFF08.*\uFF09|\uFF3B.*\uFF3D|\u3010.*\u3011|\u3014.*\u3015)$/.test(e)
      ],
      [
        "error_message",
        () =>
          t.startsWith("api error:") ||
          t.startsWith("prompt is too long") ||
          t.startsWith("request timed out") ||
          t.startsWith("invalid api key") ||
          t.startsWith("image was too large")
      ],
      ["prefixed_label", () => /^\w+:\s/.test(e)],
      [
        "too_few_words",
        () => {
          if (o >= 2) return !1;
          if (e.startsWith("/")) return !1;
          let r = y(e);
          if (r > 0) return r < 2;
          return !new Set([
            "yes",
            "yeah",
            "yep",
            "yea",
            "yup",
            "sure",
            "ok",
            "okay",
            "push",
            "commit",
            "deploy",
            "stop",
            "continue",
            "check",
            "exit",
            "quit",
            "no"
          ]).has(t);
        }
      ],
      ["too_many_words", () => o > 12],
      ["too_long", () => e.length >= 100],
      ["multiple_sentences", () => /[.!?]\s+[A-Z]|[\u3002\uFF01\uFF1F]\s*[\p{L}\p{N}]/u.test(e)],
      ["has_formatting", () => /[\n*]|\*\*/.test(e)],
      [
        "evaluative",
        () =>
          /thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(
            t
          ) ||
          /^\P{L}*(\u3042\u308A\u304C\u3068\u3046(\u3054\u3056\u3044\u307E\u3059|\u3054\u3056\u3044\u307E\u3057\u305F)?|\u52A9\u304B\u308A\u307E\u3057\u305F|[\u8C22\u8B1D][\u8C22\u8B1D][\u4F60\u60A8]?|\u611F\u8C22[\u4F60\u60A8]?|\u611F\u8B1D\u3057\u307E\u3059|\uAC10\uC0AC\uD569\uB2C8\uB2E4|\uACE0\uB9C8\uC6CC\uC694?)(\P{L}|\u7684|$)/u.test(
            e
          ) ||
          /(\u826F\u3055\u305D\u3046|\u3088\u3055\u305D\u3046|\u3044\u3044\u3067\u3059\u306D|\u770B\u8D77\u6765\u4E0D\u9519|\u592A\u597D\u4E86|\u5B8C\u74A7|\u5B8C\u7F8E|\uC88B\uB124\uC694)(\u3067\u3059|\u3067\u3059\u306D|\u3060\u306D)?\P{L}*$/u.test(
            e
          )
      ],
      [
        "claude_voice",
        () =>
          /^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly|\u8BA9\u6211(?!\u4EEC)|\u6211\u6765|\u6211\u4F1A|\u6211\u5C06)/i.test(
            e
          )
      ]
    ];
  for (let [r, u] of s) if (u()) return (cL(r, n), !0);
  return !1;
}
function ams(e, n, t, o) {
  let s = Math.round((n.length / (e.length || 1)) * 100) / 100,
    r = n.toLowerCase() === e.toLowerCase(),
    u = Math.max(0, Date.now() - t);
  a("tengu_prompt_suggestion", {
    source: b("sdk"),
    outcome: b(r ? "accepted" : "ignored"),
    prompt_id: b("user_intent"),
    ...(o && { generationRequestId: _e(o) }),
    ...(r && { timeToAcceptMs: u }),
    ...(!r && { timeToIgnoreMs: u }),
    similarity: s
  });
}
function cL(e, n, t) {
  a("tengu_prompt_suggestion", {
    ...(n && { source: c(n) }),
    outcome: b("suppressed"),
    reason: c(e),
    ...(t?.cacheColdBy && { cacheColdBy: c(t.cacheColdBy) }),
    prompt_id: b("user_intent")
  });
}
export { kUe, EOn, kOn, TOn, doo, ims, ams, cL };

//# sourceMappingURL=chunk-pzx42hex.js.map
