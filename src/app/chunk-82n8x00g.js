import {
  fileURLToPath as __sourceFilePath_8560ea0df42687bb,
  URL as __sourceFilePath_8560ea0df42687bb_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { gdr } from "./chunk-a16y5hcz.js";
import { q, Eu, ao, SW, Bdr, ios, Om, TX } from "./chunk-wrtp8qz8.js";
import { Qe, kW, N, E } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { bt, _, ie, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Y0, Q4e, $st, JS } from "./chunk-t0wrcf3t.js";
import { gqe, JE, Vue, que } from "./chunk-bh50mq9d.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { qi } from "./chunk-rh5ymkjp.js";
import { hx, tHe, d6n, Ecn, S0o, X$r, c6n, WTe, WKs, w8, Tcn, Wyt, GKs } from "./chunk-hp7h93my.js";
import { CR, a2 } from "./chunk-dc0nzty2.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { o, v, u } from "./chunk-0bqrj5ah.js";
import { _e, Y4t } from "./chunk-n8wdmnah.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { join as Ke } from "path";
import { mkdir as Me, readFile as ze, unlink as Pe, writeFile as ue } from "fs/promises";
import { dirname as We, join as xe } from "path";
import { appendFile as je, mkdir as Ae, readFile as De } from "fs/promises";
import { join as Ie } from "path";
var Ne = [
    "**/.claude/scheduled_tasks.lock",
    "**/.claude/scheduled_tasks.json",
    "**/.claude/routines/.state/",
    "**/.claude/worktrees/",
    "**/.claude/checkpoints/",
    "**/.claude/mailbox/",
    "**/.claude/agent-registry.json",
    "**/.claude/agent-memory-local",
    "**/.claude/first-run",
    "**/.claude/assistant-daemon-state.json"
  ],
  Fe = "# claude-code-runtime";
async function Ee(n) {
  if (!qi().claim(`claude_runtime_exclude_ensured:${n}`)) return;
  try {
    let s = await CR(n);
    if (!s) return;
    let i = (await a2(s)) ?? s,
      y = Ie(i, "info", "exclude"),
      S = "";
    try {
      if (((S = await De(y, "utf-8")), S.includes(Fe))) return;
    } catch (I) {
      if (E(I) !== "ENOENT") throw I;
      await Ae(Ie(i, "info")).catch((H) => {
        if (E(H) !== "EEXIST") throw H;
      });
    }
    let k =
        S &&
        !S.endsWith(`
`)
          ? `
`
          : "",
      d = [Fe, ...Ne, ""].join(`
`);
    await je(y, k + d);
  } catch (s) {
    t(`ensureClaudeRuntimeFilesExcluded: ${s}`);
  }
}
var qe = xe(".claude", "scheduled_tasks.lock"),
  He = p(() => u({ sessionId: o(), pid: v(), procStart: o().optional(), acquiredAt: v() }));
function X(n) {
  return xe(n ?? ao(), qe);
}
async function Le(n) {
  let s;
  try {
    s = await ze(X(n), "utf8");
  } catch {
    return;
  }
  let i = He().safeParse(ot(s, !1));
  return i.success ? i.data : void 0;
}
async function be(n, s) {
  let i = X(s),
    y = _(n);
  try {
    return (await ue(i, y, { flag: "wx" }), !0);
  } catch (S) {
    let k = E(S);
    if (k === "EEXIST") return !1;
    if (k === "ENOENT") {
      await Me(We(i), { recursive: !0 });
      try {
        return (await ue(i, y, { flag: "wx" }), !0);
      } catch (d) {
        if (E(d) === "EEXIST") return !1;
        throw d;
      }
    }
    throw S;
  }
}
function le(n, s) {
  (n.unregisterCleanup?.(),
    (n.unregisterCleanup = bt(async () => {
      await W(n, s);
    })));
}
async function fe(n, s) {
  let i = s?.dir;
  if (d6n(i)) return !1;
  await Ee(i ?? ao());
  let y = s?.lockIdentity ?? q(),
    S = { sessionId: y, pid: process.pid, procStart: que(), acquiredAt: Date.now() };
  if (await be(S, i))
    return (
      (n.lastBlockedBy = void 0),
      le(n, s),
      t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`),
      !0
    );
  let k = await Le(i);
  if (k?.sessionId === y) {
    if (k.pid !== process.pid) (await ue(X(i), _(S)), le(n, s));
    return !0;
  }
  if (k && Xa(k.pid) && (await JE(k.pid, k.procStart))) {
    if (n.lastBlockedBy !== k.sessionId)
      ((n.lastBlockedBy = k.sessionId),
        t(`[ScheduledTasks] scheduler lock held by session ${k.sessionId} (PID ${k.pid})`));
    return !1;
  }
  if (k) t(`[ScheduledTasks] recovering stale scheduler lock from PID ${k.pid}`);
  if ((await Pe(X(i)).catch(() => {}), await be(S, i)))
    return ((n.lastBlockedBy = void 0), le(n, s), !0);
  return !1;
}
async function W(n, s) {
  n.reset();
  let i = s?.dir;
  try {
    i ??= ao();
  } catch {
    return;
  }
  let y = s?.lockIdentity ?? q(),
    S = await Le(i);
  if (!S || S.sessionId !== y) return;
  try {
    (await Pe(X(i)), t("[ScheduledTasks] released scheduler lock"));
  } catch {}
}
class ke {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    (this.unregisterCleanup?.(), (this.unregisterCleanup = void 0), (this.lastBlockedBy = void 0));
  }
}
var Be = import.meta.require(
    __sourceFilePath_8560ea0df42687bb(
      new __sourceFilePath_8560ea0df42687bb_URL("./chunk-za6vxpwh.js", import.meta.url)
    )
  ),
  Je = 1000,
  Ue = 300,
  Ge = 5000;
function Xe(n, s, i) {
  if (i === 0) return !1;
  return Boolean(n.recurring && !n.permanent && s - n.createdAt >= i);
}
async function Ve(n, s, i) {
  let y = JS(i),
    S = ie(),
    k = new Set(),
    d = new Set();
  for (let { createdBySessionId: I } of n) if (I !== void 0 && I !== s) d.add(I);
  if (
    (await Promise.all(
      Array.from(d, async (I) => {
        if (Y0(I) === null) return;
        if (
          await S.lstat(Ke(y, `${I}.jsonl`)).then(
            (K) => K.isFile(),
            (K) => {
              let O = E(K);
              if (O !== "ENOENT" && O !== "ENOTDIR")
                t(
                  `[ScheduledTasks] could not look for a transcript of task creator ${I} (${O}); treating it as not found`
                );
              return !1;
            }
          )
        )
          k.add(I);
      })
    ),
    k.size < d.size)
  )
    t(
      `[ScheduledTasks] found no transcript in ${y} for ${d.size - k.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`
    );
  return k;
}
var Q = ve(new Set(), (n) => n.clear());
function Y(n, s) {
  return `${n ?? ""}\x00${s}`;
}
function n7r(n) {
  let {
      onFire: s,
      isLoading: i,
      assistantMode: y = !1,
      onFireTask: S,
      onMissed: k,
      dir: d,
      lockIdentity: I,
      getJitterConfig: H,
      isKilled: K,
      filter: O,
      getExtraTasks: Z,
      leaseFileTasks: ee = () => !0
    } = n,
    D = d || I ? { dir: d, lockIdentity: I } : void 0,
    M = new ke(),
    V = d !== void 0 ? I : q(),
    re = new Set(),
    te = null,
    ne = [],
    oe = [],
    F = new Map(),
    he = new Set(),
    J = new Set(),
    A = null,
    U = null,
    j = null,
    z = null,
    B = !1,
    L = !1,
    me = new Set(),
    pe = "",
    se = new Map();
  function Re(r, c) {
    if (!Xa(r)) return (se.delete(r), !0);
    if (c === void 0) return !1;
    let w = Date.now(),
      T = se.get(r);
    if (!T || w - T.at >= 60000) ((T = { at: w, token: gqe(r) }), se.set(r, T));
    return T.token !== void 0 && T.token !== c;
  }
  function ge(r) {
    return Q4e(r, $st());
  }
  function Oe(r) {
    if (r.createdInProject !== void 0) return ge(r.createdInProject) === pe;
    return r.createdBySessionId !== void 0 && me.has(r.createdBySessionId);
  }
  function Se(r) {
    if (r.createdBySessionId === void 0) return L;
    if (r.createdBySessionId === V) return !0;
    if (
      re.has(r.createdBySessionId) &&
      r.createdByPid === process.pid &&
      (r.createdByProcStart === void 0
        ? r.createdAt >= performance.timeOrigin
        : r.createdByProcStart === Vue.token)
    )
      return !0;
    return L && Oe(r) && (r.createdByPid === void 0 || Re(r.createdByPid, r.createdByProcStart));
  }
  function ae(r) {
    if (r.length === 0) return;
    WTe(
      r.map((c) => c.id),
      d
    ).catch((c) => t(`[ScheduledTasks] failed to remove tasks: ${c}`));
  }
  async function ye(r) {
    let c = S0o(d) ? [] : await Ecn(d),
      w = Z
        ? await Z().catch((h) => {
            if (qi().claim("cron_extra_tasks_load_bad"))
              m("routine_register_trigger", "extra_tasks_load_failed");
            return (t(`[ScheduledTasks] getExtraTasks failed: ${h}`), []);
          })
        : [],
      T = d ?? ao(),
      P = await Ve(
        c.filter((h) => h.createdInProject === void 0),
        V,
        T
      );
    if (B) return;
    if (((ne = c), (oe = w), (me = P), (pe = ge(T)), !r)) return;
    let e = !1;
    for (let h of c)
      if (V !== void 0 && h.createdBySessionId === V && h.createdByPid !== process.pid)
        ((h.createdByPid = process.pid), (h.createdByProcStart = que()), (e = !0));
    if (e) await c6n(c, d).catch((h) => t(`[ScheduledTasks] failed to refresh task pids: ${h}`));
    let R = Date.now(),
      C = GKs(c, R).filter(
        (h) => !h.recurring && !he.has(h.id) && !Q.has(Y(d, h.id)) && (!O || O(h)) && Se(h)
      );
    if (C.length > 0) {
      for (let b of C) (he.add(b.id), F.set(b.id, 1 / 0));
      a("tengu_scheduled_task_missed", { count: C.length, taskIds: Y4t(C.map((b) => b.id)) });
      let h = new Set();
      try {
        if (k) {
          h = new Set(k(C, ae) ?? []);
          for (let b of h) Q.add(Y(d, b));
        } else s(mur(C));
      } catch (b) {
        (t(
          `[ScheduledTasks] could not surface ${C.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`,
          { level: "error" }
        ),
          l(
            $e(
              b,
              "handler for missed scheduled tasks threw (message not reported: it may contain user text)"
            )
          ));
        return;
      }
      (ae(C.filter((b) => !h.has(b.id))),
        t(
          `[ScheduledTasks] surfaced ${C.length - h.size} missed one-shot task(s), kept back ${h.size}`
        ));
    }
  }
  function de() {
    if (K?.()) return;
    if (L && !ee()) ((L = !1), W(M, D));
    if (i() && !y) return;
    let r = Date.now(),
      c = new Set(),
      w = [],
      T = H?.() ?? w8;
    function P(e, R) {
      if (O && !O(e)) return;
      if ((c.add(e.id), J.has(e.id))) return;
      if (!R && Q.has(Y(d, e.id))) return;
      let C = F.get(e.id);
      if (C === void 0) {
        let x = Wyt(e, T);
        if (x === null)
          m("cron_task_fire", "next_fire_unresolvable", { recurring: e.recurring ?? !1 });
        ((C = x ?? 1 / 0),
          F.set(e.id, C),
          t(
            `[ScheduledTasks] scheduled ${e.id} for ${C === 1 / 0 ? "never" : new Date(C).toISOString()}`
          ));
      }
      if (r < C) return;
      t(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`);
      let h = e.id.startsWith("routine:") ? cn(e.id) : _e(e.id);
      a("tengu_scheduled_task_fire", {
        recurring: e.recurring ?? !1,
        taskId: h,
        autonomousLoopDefault: Be.isLoopDefaultSentinel(e.prompt)
      });
      let b = { recurring: e.recurring ?? !1, permanent: e.permanent ?? !1 },
        we = !1;
      try {
        if (S) we = S(e, () => ae([e])) === !0;
        else s(e.prompt);
        g("cron_task_fire", b);
      } catch (x) {
        let G = !R && !e.recurring;
        if (G) F.set(e.id, 1 / 0);
        if (
          (t(
            G
              ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session`
              : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`,
            { level: "error" }
          ),
          m("cron_task_fire", "handler_threw", b),
          l(
            $e(
              x,
              "scheduled task fire handler threw (message not reported: it may contain user text)"
            )
          ),
          G)
        )
          return;
      }
      let Ce = Xe(e, r, T.recurringMaxAgeMs);
      if (Ce) {
        let x = Math.floor((r - e.createdAt) / 1000 / 60 / 60);
        (t(
          `[ScheduledTasks] recurring task ${e.id} aged out (${x}h since creation), deleting after final fire`
        ),
          a("tengu_scheduled_task_expired", { taskId: h, ageHours: x }));
      }
      if (e.recurring && !Ce) {
        let x = Tcn(e.cron, r, e.id, T);
        if (x === null) f("cron_task_fire", "reschedule_unresolvable");
        let G = x ?? 1 / 0;
        if ((F.set(e.id, G), !R)) w.push(e.id);
      } else if (R) (TX([e.id]), F.delete(e.id));
      else if (we) (Q.add(Y(d, e.id)), F.set(e.id, 1 / 0));
      else
        (J.add(e.id),
          F.set(e.id, 1 / 0),
          WTe([e.id], d)
            .catch((x) => t(`[ScheduledTasks] failed to remove task ${e.id}: ${x}`))
            .finally(() => J.delete(e.id)));
    }
    for (let e of ne) if (Se(e)) P(e, !1);
    if (w.length > 0) {
      for (let e of w) J.add(e);
      WKs(w, r, d)
        .catch((e) => t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`))
        .finally(() => {
          for (let e of w) J.delete(e);
        });
    }
    if (d === void 0)
      for (let e of Om().slice()) {
        P(e, !0);
        let R = F.get(e.id);
        e.nextFireAt = R === 1 / 0 ? void 0 : R;
      }
    for (let e of oe) P(e, !0);
    if (c.size === 0) {
      F.clear();
      return;
    }
    for (let e of F.keys()) if (!c.has(e)) F.delete(e);
  }
  async function ce() {
    if (B) return;
    (A?.(), (A = null));
    let { default: r } = await import("./chunk-xgkc7nd1.js");
    if (B) return;
    if (((L = ee() ? await fe(M, D).catch(() => !1) : !1), B)) {
      if (L) ((L = !1), W(M, D));
      return;
    }
    if (!L)
      ((j = setInterval(() => {
        if (!ee()) return;
        fe(M, D)
          .then((w) => {
            if (B) {
              if (w) W(M, D);
              return;
            }
            if (w) {
              if (((L = !0), j)) (clearInterval(j), (j = null));
            }
          })
          .catch((w) => t(String(w), { level: "error" }));
      }, Ge)),
        j.unref?.());
    ye(!0).then(de);
    let c = tHe(d);
    ((z = Te(() =>
      r.watch(c, {
        persistent: !1,
        ignoreInitial: !0,
        awaitWriteFinish: { stabilityThreshold: Ue },
        ignorePermissionErrors: !0
      })
    )),
      (U = setInterval(de, Je)),
      U.unref?.());
  }
  function Te(r) {
    let c = r();
    c.on("error", (T) => t(`[ScheduledTasks] watcher error: ${T}`, { level: "warn" }));
    let w = () => {
      if (B || z !== c) return;
      ((z = Te(r)),
        z.once("ready", () => void ye(!1)),
        c
          .close()
          .catch((T) => t(`[ScheduledTasks] watcher close failed: ${T}`, { level: "warn" })));
    };
    return (
      c.on("add", w),
      c.on("change", w),
      c.on("unlink", () => {
        if (!B) {
          ne = [];
          let T = new Set(oe.map((P) => P.id));
          if (d === void 0) for (let P of Om()) T.add(P.id);
          for (let P of F.keys()) if (!T.has(P)) F.delete(P);
        }
      }),
      c
    );
  }
  return {
    start() {
      if (((B = !1), A?.(), (A = null), d !== void 0)) {
        (t(`[ScheduledTasks] scheduler start() \u2014 dir=${d}, hasTasks=${X$r(d)}`), ce());
        return;
      }
      if (
        (t(`[ScheduledTasks] scheduler start() \u2014 enabled=${Bdr()}, hasTasks=${X$r()}`),
        re.add(q()),
        (te ??= Eu((r) => {
          re.add(r);
        })),
        !Bdr() && (y || Z !== void 0 || X$r()))
      )
        SW(!0);
      if (Bdr()) {
        ce();
        return;
      }
      A = ios(() => void ce());
    },
    stop() {
      if (((B = !0), A?.(), (A = null), te?.(), (te = null), U)) (clearInterval(U), (U = null));
      if (j) (clearInterval(j), (j = null));
      if ((z?.close(), (z = null), L)) ((L = !1), W(M, D));
    },
    getNextFireTime() {
      let r = 1 / 0;
      for (let c of F.values()) if (c < r) r = c;
      return r === 1 / 0 ? null : r;
    },
    checkNow() {
      de();
    }
  };
}
function mur(n) {
  let s = n.length > 1,
    i = `The following one-shot scheduled task${s ? "s were" : " was"} missed while Claude was not running. ${s ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${s ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${s ? "each one" : "it"} now. Only execute if the user confirms.`,
    y = n.map(
      (S) => `${`[${hx(S.cron)}, created ${new Date(S.createdAt).toLocaleString()}]`}
${gdr(S.prompt)}`
    );
  return `${i}

${y.join(`

`)}`;
}
function $e(n, s) {
  let i = () =>
    Qe(
      Error("scheduled task handler threw (message not reported: it may contain user text)", {
        cause: n
      }),
      s
    );
  try {
    let y = Qe(N(n), s);
    return kW(y) === s ? y : i();
  } catch {
    return i();
  }
}
export { n7r, mur };

//# sourceMappingURL=chunk-82n8x00g.js.map
