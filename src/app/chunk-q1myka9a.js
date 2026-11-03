// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U, Eu } from "./chunk-wrtp8qz8.js";
import { _ } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
var Xmn = `# Reporting outcomes

Report what actually happened, not what you intended. When you say something is done, sent, saved, fixed, or verified, that claim must rest on a result you observed in this session \u2014 tool output, the file as it now reads, the page as it now loads \u2014 not on what the step should have produced. If you did not check, say you did not check. If any step failed, was skipped, or came back different from what you expected, say so in the first sentence of your report, before anything else, even when the rest of the work succeeded. Never quietly work around a failure in a way that makes it look resolved; a problem the user can see is recoverable, one your summary hides is not. When you stop before the task is complete, your first line says so plainly and names what is left. Do not describe partial work as done, and do not let a summary read as more certain than the evidence behind it.`;
var jet = "x-anthropic-billing-header:";
function fXs(e) {
  let t = e.text;
  return typeof t === "string" && t.startsWith(jet);
}
function ZG(e) {
  let t = e.text;
  return typeof t === "string" && (t.startsWith(jet) || t === Xmn);
}
function i0(e) {
  let t = Bun.hash(_(e));
  return typeof t === "bigint" ? Number(t & 0xffffffffn) : t;
}
var k = new Set([
  "type",
  "text",
  "thinking",
  "id",
  "tool_use_id",
  "name",
  "input",
  "source",
  "content",
  "cache_control"
]);
function u(e, t) {
  if (typeof e === "string") {
    t.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return;
  }
  switch (e.type) {
    case "text":
    case "image":
    case "document":
    case "search_result":
    case "thinking":
    case "redacted_thinking":
    case "tool_use":
    case "tool_result":
    case "tool_reference":
    case "server_tool_use":
    case "web_search_tool_result":
    case "web_fetch_tool_result":
    case "advisor_tool_result":
    case "code_execution_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "mcp_tool_listing":
    case "container_upload":
    case "compaction":
    case "fallback":
    case "browser_state":
      break;
    default: {
      let n = e;
      break;
    }
  }
  if ((t.push(e.type), "text" in e && typeof e.text === "string"))
    t.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") t.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") t.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") t.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") t.push("n", e.name);
  if ("input" in e && e.input !== void 0) t.push("p", _(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let n = e.source;
    if ((t.push("m", String(n.type ?? ""), String(n.media_type ?? "")), typeof n.data === "string"))
      t.push(String(n.data.length));
  }
  let s = "content" in e ? e.content : void 0;
  if (Array.isArray(s)) {
    t.push("[", String(s.length));
    for (let n of s) u(n, t);
    t.push("]");
  } else if (typeof s === "string") t.push("c", String(s.length), s.slice(0, 32), s.slice(-32));
  for (let [n, r] of Object.entries(e)) {
    if (k.has(n) || r === void 0) continue;
    let o = typeof r === "string" ? r : _(r);
    t.push(n, o.length > 256 ? `len:${o.length}` : o);
  }
}
var Wet = -1;
function pXs(e) {
  return e.map((t) => {
    if ((t.type === "api_system" || t.type === "user") && t.ephemeral) return Wet;
    let s = [t.message.role];
    if (t.type === "api_system" && t.outputConfig !== void 0) {
      let o = t.outputConfig.timing;
      s.push(`oc:${t.outputConfig.effort ?? ""}${o ? `:${o.now}` : ""}`);
    }
    let n = t.message.content;
    if (Array.isArray(n)) {
      s.push(String(n.length));
      for (let o of n) u(o, s);
    } else u(n, s);
    let r = Bun.hash(s.join("|"));
    return typeof r === "bigint" ? Number(r & 0xffffffffn) : r;
  });
}
var oj = 300000,
  JA = 3600000;
function vQn(e) {
  if ((e?.cache_creation?.ephemeral_5m_input_tokens ?? 0) > 0) return "5m";
  return (e?.cache_creation?.ephemeral_1h_input_tokens ?? 0) > 0 ? "1h" : void 0;
}
var sj = "main";
function HWo(e, t) {
  return !t && (e.startsWith("repl_main_thread") || e === "sdk" || e === "compact");
}
var y = 2000,
  x = 200,
  g = { "5m": oj, "1h": JA };
var mXs = {
  system_prompt_changed: "system prompt changed",
  tools_changed: "tool definitions changed",
  model_changed: "model changed",
  fast_mode_changed: "fast mode toggled",
  cache_scope_or_ttl_changed: "cache scope or TTL changed",
  betas_changed: "beta headers changed",
  effort_changed: "effort changed",
  thinking_mode_changed: "thinking toggled",
  thinking_display_changed: "thinking display changed",
  auto_mode_changed: "auto mode toggled",
  overage_changed: "usage-limit state changed",
  extra_body_changed: "extra request fields changed",
  defer_loading_changed: "deferred tool loading changed",
  messages_rewritten: "earlier messages changed",
  ttl_expired_5m: "idle past the 5m TTL",
  ttl_expired_1h: "idle past the 1h TTL",
  likely_server_side: "prompt unchanged \u2014 likely server-side",
  unknown: "unknown"
};
class h {
  entries = [];
  requests = 0;
  hits = 0;
  misses = 0;
  expectedRebuilds = 0;
  coldStarts = 0;
  cacheReadTokens = 0;
  cacheCreationTokens = 0;
  inputTokens = 0;
  missRecacheTokens = 0;
  lastMissAt = null;
  lastMissAttribution = null;
  missCauses = {};
  pendingAttribution = null;
  dropExpectedAt = null;
  touchedAt = null;
  touch(e) {
    if (this.entries.length > 0) this.touchedAt = Math.max(this.touchedAt ?? 0, e);
  }
  expectDrop(e) {
    this.dropExpectedAt = e;
  }
  attribute(e) {
    this.pendingAttribution = e;
  }
  record(e) {
    let t = this.entries.at(-1) ?? null,
      s = this.dropExpectedAt;
    this.dropExpectedAt = null;
    let n = this.pendingAttribution;
    this.pendingAttribution = null;
    let r = s !== null && t !== null && e.at - Math.max(t.at, this.touchedAt ?? 0) < g[t.ttl],
      o,
      a =
        this.cacheReadTokens + this.cacheCreationTokens > 0 ||
        e.cacheReadTokens + e.cacheCreationTokens > 0;
    if (t === null) o = "cold";
    else if (!a) o = "uncached";
    else if (
      t.cacheReadTokens + t.cacheCreationTokens === 0 &&
      e.cacheReadTokens + e.cacheCreationTokens > 0
    )
      o = "cold";
    else {
      let c = t.inputTokens + t.cacheReadTokens + t.cacheCreationTokens,
        C = e.inputTokens + e.cacheReadTokens + e.cacheCreationTokens,
        m = Math.min(c, C),
        T = m - e.cacheReadTokens;
      o = e.cacheReadTokens < m * 0.95 && T >= y ? (r ? "expected" : "miss") : "hit";
    }
    let d = e.cacheCreationTokens === 0 && t !== null ? t.ttl : e.ttl,
      p =
        o === "miss" && n !== null
          ? { ...e, ttl: d, outcome: o, attribution: n }
          : { ...e, ttl: d, outcome: o };
    if ((this.entries.push(p), this.entries.length > x)) this.entries.shift();
    switch (
      (this.requests++,
      (this.cacheReadTokens += e.cacheReadTokens),
      (this.cacheCreationTokens += e.cacheCreationTokens),
      (this.inputTokens += e.inputTokens),
      o)
    ) {
      case "hit":
        this.hits++;
        break;
      case "miss":
        (this.misses++,
          (this.missRecacheTokens += e.cacheCreationTokens),
          (this.lastMissAt = e.at),
          (this.lastMissAttribution = n));
        for (let c of n?.causes ?? []) this.missCauses[c] = (this.missCauses[c] ?? 0) + 1;
        break;
      case "expected":
        this.expectedRebuilds++;
        break;
      case "cold":
        this.coldStarts++;
        break;
      case "uncached":
        break;
    }
    return p;
  }
  summary(e) {
    let t = this.cacheReadTokens + this.cacheCreationTokens + this.inputTokens,
      s = this.entries.at(-1) ?? null,
      n = g[s?.ttl ?? "5m"],
      r = this.cacheReadTokens + this.cacheCreationTokens > 0,
      o = s !== null && s.cacheReadTokens + s.cacheCreationTokens > 0,
      a = s !== null ? Math.max(s.at, this.touchedAt ?? 0) : 0;
    return {
      requests: this.requests,
      hits: this.hits,
      misses: this.misses,
      expectedRebuilds: this.expectedRebuilds,
      coldStarts: this.coldStarts,
      hitRatio: t > 0 ? this.cacheReadTokens / t : null,
      cacheWriteTokens: this.cacheCreationTokens,
      missRecacheTokens: this.missRecacheTokens,
      lastMissAt: this.lastMissAt,
      lastMissAttribution: this.lastMissAttribution,
      missCauses: { ...this.missCauses },
      lastRequest: s,
      cachingObserved: r,
      lastActivityAt: s !== null ? a : null,
      expiresAt: s !== null && o ? a + n : null,
      warm: s !== null && o && e - a < n
    };
  }
}
class f {
  #e = new Map();
  record(e, t) {
    let s = this.#e.get(e);
    if (s === void 0) ((s = new h()), this.#e.set(e, s));
    return s.record(t);
  }
  expectDrop(e, t) {
    this.#e.get(e)?.expectDrop(t);
  }
  attribute(e, t) {
    this.#e.get(e)?.attribute(t);
  }
  touch(e, t) {
    this.#e.get(e)?.touch(t);
  }
  summary(e, t) {
    return (this.#e.get(e) ?? new h()).summary(t);
  }
  estimateRecacheTokens(e) {
    let t = this.#e.get(e),
      s = t?.entries.at(-1);
    if (!s) return 0;
    if (t?.dropExpectedAt != null) return null;
    return s.inputTokens + s.cacheReadTokens + s.cacheCreationTokens;
  }
  clear(e) {
    if (e === void 0) this.#e.clear();
    else this.#e.delete(e);
  }
}
var LWo = new nt(() => new f());
function i() {
  return LWo.of(U());
}
function gXs(e, t) {
  try {
    return i().record(e, t);
  } catch (s) {
    return (l(s), null);
  }
}
function hXs(e, t) {
  try {
    i().attribute(e, t);
  } catch (s) {
    l(s);
  }
}
function WWr(e, t) {
  try {
    i().touch(e, t);
  } catch (s) {
    l(s);
  }
}
function J2e(e = sj, t = Date.now()) {
  try {
    i().expectDrop(e, t);
  } catch (s) {
    l(s);
  }
}
function h7(e = sj, t = Date.now()) {
  return i().summary(e, t);
}
function GWr(e = sj) {
  return i().estimateRecacheTokens(e);
}
function yXs() {
  return Eu((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    i().clear();
  });
}
export {
  Xmn,
  jet,
  fXs,
  ZG,
  i0,
  Wet,
  pXs,
  oj,
  JA,
  vQn,
  sj,
  HWo,
  mXs,
  LWo,
  gXs,
  hXs,
  WWr,
  J2e,
  h7,
  GWr,
  yXs
};

//# sourceMappingURL=chunk-q1myka9a.js.map
