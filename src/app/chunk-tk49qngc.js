// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, Vt } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { zr, $M } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { gt } from "./chunk-wr0p4ndg.js";
import { NP } from "./chunk-fnsjs1v2.js";
function Tcs(e, n, o) {
  return e !== void 0 &&
    e.prompt !== null &&
    o.stdin &&
    o.stdout &&
    (n.outputFormat === void 0 || n.outputFormat === "text") &&
    n.sdkUrl === void 0 &&
    n.jsonSchema === void 0 &&
    !n.includePartialMessages &&
    !n.replayUserMessages &&
    n.maxTurns === void 0 &&
    n.maxBudgetUsd === void 0 &&
    n.resumeSessionAt === void 0 &&
    n.resumeDropsTurn === void 0 &&
    n.rewindFiles === void 0
    ? { open: e.open, prompt: e.prompt }
    : void 0;
}
var C3t = "Can't open \u2014 this session is running in another terminal",
  c = 60,
  p = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;
function dxt(e) {
  let n = $M(zr(e)).replace(p, "'");
  return `"${gt(n, c)}"`;
}
function hwe({ title: e, holder: n, canFork: o, handoff: s }) {
  let { jobId: i } = n,
    r = e ? dxt(e) : "That session",
    a = i
      ? `Run \`claude attach ${i}\` to open it, or \`claude stop ${i}\` first to resume it here.`
      : "Run `claude agents` to find it and open it, or stop it there first to resume it here.",
    u = o ? " Add --fork-session to branch off a copy instead." : "";
  return `${r} is running in the background${i ? ` (${i})` : ""}.${Ipr(s)} ${a}${u}`;
}
async function Nee(e, n) {
  let o = (await B5e(e)).find((i) => i.kind !== "interactive");
  if (!o) return null;
  let s = o.jobId !== void 0 && NP.test(o.jobId) && (await m(o.jobId, e, n)) ? o.jobId : void 0;
  return { kind: o.kind, jobId: s };
}
async function m(e, n, o) {
  try {
    let { getJobDir: s, readJobState: i } = await import("./chunk-bgfm4egz.js"),
      r = await i(s(e), o),
      a = n.toLowerCase();
    return (
      r !== null && (r.sessionId.toLowerCase() === a || r.resumeSessionId?.toLowerCase() === a)
    );
  } catch (s) {
    if (Vt(s)) t(`[resume] job state unreadable: ${d(s)}`, { level: "warn" });
    else l(s);
    return !1;
  }
}
async function B5e(e, n) {
  let o = n?.rejectUnreadable
      ? await (
          await import("./chunk-w0prrq68.js")
        ).listAllLiveSessions(void 0, { rejectUnreadable: !0 })
      : await import("./chunk-w0prrq68.js").then((r) => r.listAllLiveSessions()).catch(() => []),
    s = e.toLowerCase(),
    i = [];
  for (let r of o) {
    if (r.sessionId?.toLowerCase() !== s || r.pid === process.pid || !r.kind) continue;
    if (r.kind === "interactive" && r.parkedJobId !== void 0) continue;
    i.push({ kind: r.kind, jobId: r.jobId, pid: r.pid });
  }
  return i;
}
function Ipr(e) {
  switch (e?.reason) {
    case void 0:
    case "not_openable":
      return "";
    case "prompt_undelivered":
      return {
        queued: " Your prompt was saved and will be sent to it when you next restart it.",
        unconfirmed: ` Your prompt may not have reached it: ${e.detail}.`,
        failed: ` Your prompt was not sent to it: ${e.detail}.`
      }[e.delivery];
    case "open_failed":
      return e.promptSent
        ? ` Your prompt was sent to it, but it could not be opened here: ${e.detail}.`
        : ` It could not be opened here: ${e.detail}.`;
  }
}
export { Tcs, C3t, dxt, hwe, Nee, B5e, Ipr };

//# sourceMappingURL=chunk-tk49qngc.js.map
