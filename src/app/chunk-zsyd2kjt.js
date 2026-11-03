// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { N, d, NB } from "./chunk-fs43t96t.js";
import { q, ke } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { g2 } from "./chunk-4nzy53ma.js";
import { tr } from "./chunk-xe386mry.js";
import { pt } from "./chunk-7c3thgax.js";
import { Ha, k, jf, ba, WV } from "./chunk-ajtyjx88.js";
import { at, qt } from "./chunk-at88wjsn.js";
import { F3, ZR, LNt, Oe, Bt, _Vn } from "./chunk-j0tbz6ra.js";
import { nXn, r7, oV } from "./chunk-d5zj5299.js";
import { Uf, GU, ZKe } from "./chunk-zqbn04bq.js";
import { Lg } from "./chunk-wany0nxw.js";
import { Zb } from "./chunk-zjm5ncxc.js";
import { HOn, LOn, Rhr, xhr, Phr, NPt, Ihr } from "./chunk-7xfqdpcc.js";
import { Edt, Dgs, sIt, Hgs } from "./chunk-1vw5s89k.js";
import { NT, Kb } from "./chunk-eacq4pgt.js";
import { ww, Nm, gu } from "./chunk-1wbxh4p6.js";
function K() {
  return k("tengu_onyx_plover", null);
}
function u9t() {
  let e = K();
  return e?.enabled === !0 || e?.available === !0;
}
function adt() {
  if (!u9t()) return !1;
  let e = pt().autoDreamEnabled;
  if (e !== void 0) return e;
  return K()?.enabled === !0;
}
class Z {
  runner = null;
}
var B = new W(() => new Z());
var le =
    "## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",
  de = `### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;
function Q(e, r, o, y = !1, p = !1, s = !1) {
  return `# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${ZKe}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${
  y
    ? `
${le}
`
    : ""
}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${Uf}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${p ? ` The ${ww} / ${Nm} / ${gu} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.` : ""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${Uf}\` so it stays under ${GU} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${de}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${
    o
      ? `

## Additional context

${o}`
      : ""
  }`;
}
var ue = 30;
function Y(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "dream";
}
function ee(e, r) {
  let o = NT("dream"),
    y = {
      ...Kb(o, "dream", "dreaming"),
      type: "dream",
      status: "running",
      skipTranscript: !0,
      phase: "starting",
      sessionsReviewing: r.sessionsReviewing,
      filesTouched: [],
      turns: [],
      abortController: r.abortController,
      priorMtime: r.priorMtime,
      ...(r.storageV5 !== void 0 && { storageV5: r.storageV5 })
    };
  return (e.register(y), o);
}
function te(e, r, o, y) {
  y.update(e, (p) => {
    let s = new Set(p.filesTouched),
      i = o.filter((n) => !s.has(n) && s.add(n));
    if (r.text === "" && r.toolUseCount === 0 && i.length === 0) return p;
    return {
      ...p,
      phase: i.length > 0 ? "updating" : p.phase,
      filesTouched: i.length > 0 ? [...p.filesTouched, ...i] : p.filesTouched,
      turns: p.turns.slice(-(ue - 1)).concat(r)
    };
  });
}
function re(e, r) {
  (r.update(e, (o) => ({
    ...o,
    status: "completed",
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  })),
    g("task_dream"),
    Ha(e, "completed", { skipTranscript: !0, ambient: !0 }));
}
function oe(e, r) {
  (r.update(e, (o) => ({
    ...o,
    status: "failed",
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  })),
    m("task_dream", "task_dream_failed"),
    Ha(e, "failed", { skipTranscript: !0, ambient: !0 }));
}
var w = null,
  ce = 600000,
  pe = new RegExp(`^\\s*(?:${xhr})\\b`, "i"),
  se = { minHours: 24, minSessions: 5 };
function fe() {
  let e = k("tengu_onyx_plover", null);
  return {
    minHours:
      typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0
        ? e.minHours
        : se.minHours,
    minSessions:
      typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0
        ? e.minSessions
        : se.minSessions
  };
}
function he() {
  if (tr() !== null) return !1;
  if (g2()) return !1;
  if (!jf()) return !1;
  if (r7()) return !1;
  return adt();
}
function ge() {
  return !1;
}
function ops(e) {
  let r = 0,
    o = !1,
    y = new Set();
  B.of(e).runner = async function (s, i) {
    let n = fe(),
      u = ge();
    if (!u && !he()) return;
    let A;
    try {
      A = await Edt(void 0, s.toolUseContext.storageV5);
    } catch (l) {
      t(`[autoDream] readLastConsolidatedAt failed: ${d(l)}`);
      return;
    }
    let O = (Date.now() - A) / 3600000;
    if (!u && O < n.minHours) return;
    let z = Date.now() - r;
    if (!u && z < ce) {
      t(
        `[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(z / 1000)}s ago`
      );
      return;
    }
    r = Date.now();
    let f;
    try {
      f = await Hgs(A, s.toolUseContext.storageV5);
    } catch (l) {
      t(`[autoDream] listSessionsTouchedSince failed: ${d(l)}`);
      return;
    }
    let ae = q();
    if (((f = f.filter((l) => l !== ae)), !u && f.length < n.minSessions)) {
      (t(
        `[autoDream] skip \u2014 ${f.length} sessions since last consolidation, need ${n.minSessions}`
      ),
        a("tengu_auto_dream_skipped", {
          reason: b("sessions"),
          session_count: f.length,
          min_required: n.minSessions
        }));
      return;
    }
    let P = Phr(s.toolUseContext.getAppState().toolPermissionContext, WV());
    if (P !== void 0) {
      if (
        (t(`[autoDream] skip \u2014 ${LOn(P)} would refuse memory writes`),
        a("tengu_auto_dream_skipped", { reason: b("permission_rule") }),
        i !== void 0)
      ) {
        let l = Rhr(e, P, ba());
        if (l !== void 0) i(Bt(l, "warning"));
      }
      return;
    }
    let S;
    if (u) S = A;
    else {
      try {
        S = await Dgs(s.toolUseContext.storageV5);
      } catch (l) {
        t(`[autoDream] lock acquire failed: ${d(l)}`);
        return;
      }
      if (S === null) {
        a("tengu_auto_dream_skipped", { reason: b("lock") });
        return;
      }
    }
    let E = ba(),
      M = void 0,
      h = M === "unplaced" || M === "capped" ? void 0 : M;
    if (h === "newer" || (h !== void 0 && "unreadable" in h)) {
      if (!u) await sIt(S, s.toolUseContext.storageV5);
      if (h !== "newer") {
        if (
          (t(
            `[autoDream] skipped: the memory items could not be read (cause: ${h.unreadable}); the warning above says why and what resumes consolidation`
          ),
          a("tengu_auto_dream_skipped", { reason: b("items_unreadable") }),
          w !== null && i !== void 0 && !y.has(h.unreadable))
        )
          (y.add(h.unreadable), i?.(Bt(await w.unreadableItemsNotice(h.unreadable, E), "warning")));
        return;
      }
      if (
        (t("[autoDream] skip \u2014 newer item record"),
        a("tengu_auto_dream_skipped", { reason: b("record_newer") }),
        w !== null && i !== void 0 && !o)
      )
        ((o = !0), i?.(Bt(w.NEWER_RECORD_NOTICE, "warning")));
      return;
    }
    let F = oV();
    (t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${f.length} sessions to review`),
      a("tengu_auto_dream_fired", {
        hours_since: Math.round(O),
        sessions_since: f.length,
        team_memory_enabled: F
      }));
    let { taskRegistry: x } = s.toolUseContext,
      v = new AbortController(),
      R = ee(x, {
        sessionsReviewing: f.length,
        priorMtime: S,
        abortController: v,
        storageV5: s.toolUseContext.storageV5
      }),
      L = "fork";
    try {
      let l = Zb(ke()),
        G = `

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${f.length}):
${f.map((_) => `- ${_}`).join(`
`)}`,
        we = !1,
        ne = Q(E, l, G, F, nXn(), !1),
        ie = _e(R, x, E),
        H = new Map(),
        j = new Set(),
        X = !1,
        J = !1,
        V = !1,
        C;
      try {
        ((C = await ZR({
          promptMessages: [Oe({ content: ne })],
          cacheSafeParams: F3(s),
          canUseTool: Ihr(E, h !== void 0 ? w?.keptItemsOf(h) : void 0, {
            fork: "dream",
            onWriteAllowed: (_, U) => H.set(U, _)
          }),
          querySource: "auto_dream",
          forkLabel: "auto_dream",
          skipTranscript: !0,
          overrides: { abortController: v },
          onMessage: (_) => {
            if ((ie(_), ye(_, j), _.type === "assistant")) X = _.isApiErrorMessage === !0;
          },
          skipCacheWrite: LNt()
        })),
          (J = !0),
          (V = !v.signal.aborted && !X));
      } finally {
        let _ = new Set([...H].filter(([T]) => !V || !j.has(T)).map(([, T]) => T)),
          U = new Set([...H].filter(([T]) => V && j.has(T)).map(([, T]) => T));
        if (w !== null && M === "capped")
          await w.deferCappedRunWrites({ memoryDir: E, dreamWrote: _, mayHaveWritten: U });
        if (w !== null && h !== void 0) {
          let T = await w.settleDreamItems({
            memoryDir: E,
            before: h,
            dreamWrote: _,
            mayHaveWritten: U
          });
          if (
            (T.skipped || T.failed) &&
            J &&
            !v.signal.aborted &&
            !u &&
            (await w.claimLockGiveBack(E))
          )
            await sIt(S, s.toolUseContext.storageV5);
        }
      }
      ((L = "completion"), re(R, x));
      let D = s.toolUseContext.taskRegistry.get(R),
        me = Y(D) ? D.filesTouched.length : 0;
      if (Y(D) && D.filesTouched.length > 0)
        (i?.({ ..._Vn(D.filesTouched), verb: "Improved" }),
          await HOn(s.toolUseContext, {
            source: "dream",
            summary: `consolidated ${D.filesTouched.length} ${I(D.filesTouched.length, "memory file")}`,
            paths: D.filesTouched
          }));
      (t(
        `[autoDream] completed \u2014 cache: read=${C.totalUsage.cache_read_input_tokens} created=${C.totalUsage.cache_creation_input_tokens}`
      ),
        a("tengu_auto_dream_completed", {
          cache_read: C.totalUsage.cache_read_input_tokens,
          cache_created: C.totalUsage.cache_creation_input_tokens,
          output: C.totalUsage.output_tokens,
          sessions_reviewed: f.length,
          files_touched_count: me,
          team_memory_enabled: F,
          account_memory_line_rendered: !1
        }));
    } catch (l) {
      if (v.signal.aborted) {
        t("[autoDream] aborted by user");
        return;
      }
      if (
        (t(`[autoDream] ${L} failed: ${d(l)}`),
        a("tengu_auto_dream_failed", { phase: c(L), error_class: NB(N(l)) }),
        L === "fork")
      )
        (oe(R, x), await sIt(S, s.toolUseContext.storageV5));
    }
  };
}
function ye(e, r) {
  if (e.type !== "user" || e.toolDenialKind !== void 0 || typeof e.message.content === "string")
    return;
  for (let o of e.message.content)
    if (o.type === "tool_result" && o.is_error === !0) r.add(o.tool_use_id);
}
function _e(e, r, o) {
  return (y) => {
    if (y.type !== "assistant") return;
    let p = "",
      s = 0,
      i = [];
    for (let n of y.message.content)
      if (n.type === "text") p += n.text;
      else if (n.type === "tool_use") {
        if ((s++, n.name === at || n.name === qt)) {
          let u = n.input;
          if (typeof u.file_path === "string") i.push(u.file_path);
        } else if (Lg.includes(n.name)) {
          let u = n.input;
          if (typeof u.command === "string" && pe.test(u.command))
            for (let A of u.command.matchAll(
              /"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g
            ))
              i.push(A[0].replace(/^["']|["']$/g, ""));
        }
      }
    te(
      e,
      { text: p.trim(), toolUseCount: s },
      i.filter((n) => NPt(n, o)),
      r
    );
  };
}
async function sps(e, r) {
  await B.of(e.toolUseContext.session.host).runner?.(e, r);
}
export { u9t, adt, ops, sps };

//# sourceMappingURL=chunk-zsyd2kjt.js.map
