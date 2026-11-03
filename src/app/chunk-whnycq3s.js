// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { ye } from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { jH } from "./chunk-a16y5hcz.js";
import { pt } from "./chunk-7c3thgax.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Ut, k } from "./chunk-ajtyjx88.js";
import { mSr } from "./chunk-6pvjd6r3.js";
import { N_ } from "./chunk-d5zj5299.js";
import { AD, ZR, Oe } from "./chunk-j0tbz6ra.js";
function kct() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (is(e)) return !1;
  if (Ne(e)) return !0;
  if (ye()) return !1;
  if (pt()?.awaySummaryEnabled === !1) return !1;
  return !0;
}
function y() {
  let e = i.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return k("tengu_harbor_moth", !1);
}
function BJt(e, a) {
  if (!a.onMetadataChanged) return;
  if (Ut() || !mSr() || !y()) return;
  if (e.startedForTurnEnd) return;
  ((e.startedForTurnEnd = !0), S(e, a));
}
function Dco(e) {
  e.reset();
}
async function S(e, a) {
  e.inFlight?.abort();
  let r = new AbortController();
  e.inFlight = r;
  let n = await jJt(r.signal);
  if (r.signal.aborted) return;
  if (n.kind !== "ok") {
    if (n.kind !== "no-turn") m("ccr_recap_generate", n.kind);
    return;
  }
  if (a.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if ((a.notifyMetadataChanged({ recap: n.text }), n.capped)) f("ccr_recap_generate", "capped");
  else g("ccr_recap_generate");
}
var h =
    "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.",
  p = 400;
async function jJt(e, a) {
  let r = AD();
  if (!r && a) {
    if (e.aborted) return { kind: "aborted" };
    try {
      r = await a();
    } catch (o) {
      return (t(`[awaySummary] fallback params rebuild failed: ${o}`), { kind: "failed" });
    }
    if (e.aborted) return { kind: "aborted" };
  }
  if (!r) return (t("[awaySummary] no CacheSafeParams saved, skipping"), { kind: "no-turn" });
  let n = new AbortController();
  e.addEventListener("abort", () => n.abort(), { once: !0 });
  try {
    let { messages: o } = await ZR({
      promptMessages: [Oe({ content: h })],
      cacheSafeParams: r,
      overrides: { abortController: n },
      canUseTool: async () => ({
        behavior: "deny",
        message: "Away summary cannot use tools",
        decisionReason: { type: "other", reason: "away_summary" }
      }),
      querySource: "away_summary",
      forkLabel: "away_summary",
      maxTurns: 1,
      skipCacheWrite: !0,
      skipTranscript: !0
    });
    if (e.aborted) return { kind: "aborted" };
    let u = o.find((c) => c.type === "assistant" && c.isApiErrorMessage);
    if (u) return { kind: "api-error", text: l([u], !0) };
    let s = l(o, !1),
      d = s.length > p;
    if (d) {
      let c = jH(s, p);
      (t(`[awaySummary] recap capped from ${s.length} to ${c.length} chars`), (s = c));
    }
    return s ? { kind: "ok", text: s, capped: d } : { kind: "failed" };
  } catch (o) {
    if (e.aborted) return { kind: "aborted" };
    return (t(`[awaySummary] generation failed: ${o}`), { kind: "failed" });
  }
}
function l(e, a) {
  return N_(
    e
      .flatMap((r) =>
        r.type === "assistant" && (a || !r.isApiErrorMessage) ? r.message.content : []
      )
      .filter((r) => r.type === "text")
      .map((r) => ("text" in r ? r.text : ""))
      .join("")
  ).trim();
}
export { kct, BJt, Dco, jJt };

//# sourceMappingURL=chunk-whnycq3s.js.map
