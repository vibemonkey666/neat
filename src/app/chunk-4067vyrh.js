// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q } from "./chunk-wrtp8qz8.js";
import { _r, We } from "./chunk-pgnjjhxv.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Np, $8 } from "./chunk-zjm5ncxc.js";
import { z } from "./chunk-p197ae0z.js";
import { mkdir as g, readdir as k, readFile as h, writeFile as y } from "fs/promises";
import { basename as S, dirname as u, join as p } from "path";
function P(r) {
  return p(m(), `${r}.json`);
}
function m() {
  let r = $8();
  return p(r, q(), "workflows");
}
function BW(r) {
  let a = $8();
  return p(a, q(), "subagents", "workflows", r);
}
function ESr() {
  let r = $8();
  return u(r) === Np() ? S(r) : void 0;
}
function W(r, a, n) {
  return We.sidecar(r, a, ["workflows", `${n}.json`]);
}
async function tws(r, a, n) {
  try {
    let i = { runId: r, timestamp: new Date().toISOString(), ...a },
      l = P(r),
      s = z() && n ? ESr() : void 0,
      o = q();
    if (
      (await g(u(l), { recursive: !0, mode: 448 }), z() && n && s !== void 0 && _r(`${r}.json`))
    ) {
      let e = await n.write(W(s, o, r), _(i), { publishDiscipline: "inPlace", mode: 384 });
      if (!e.ok) t(`Failed to write workflow snapshot ${r}: ${e.error.code}`);
      return;
    }
    await y(l, _(i), { encoding: "utf8", mode: 384 });
  } catch (i) {
    t(`Failed to write workflow snapshot ${r}: ${i instanceof Error ? i.message : i}`);
  }
}
function d(r, a) {
  let n = r.runId ?? a;
  return {
    runId: n,
    taskId: r.taskId ?? n,
    timestamp: r.timestamp ?? new Date(0).toISOString(),
    script: r.script ?? "",
    scriptPath: r.scriptPath,
    args: r.args,
    result: r.result,
    agentCount: r.agentCount ?? 0,
    logs: r.logs ?? [],
    durationMs: r.durationMs ?? 0,
    error: r.error,
    summary: typeof r.summary === "string" ? r.summary : void 0,
    workflowName: typeof r.workflowName === "string" ? r.workflowName : void 0,
    title: r.title,
    status: r.status ?? (r.error ? "failed" : "completed"),
    startTime: r.startTime ?? (Date.parse(r.timestamp ?? "") || 0),
    phases: r.phases,
    defaultModel: r.defaultModel,
    workflowProgress: r.workflowProgress ?? [],
    totalTokens: r.totalTokens ?? 0,
    totalToolCalls: r.totalToolCalls ?? 0
  };
}
async function luo(r) {
  let a = r ? ESr() : void 0;
  if (r && a !== void 0) return j(r, a);
  let n = m(),
    i;
  try {
    i = await k(n);
  } catch {
    return [];
  }
  let l = (
    await Promise.all(
      i
        .filter((s) => s.endsWith(".json"))
        .map(async (s) => {
          try {
            let o = await h(p(n, s), "utf8"),
              e = te(o);
            return d(e, s.replace(/\.json$/, ""));
          } catch (o) {
            return (
              t(`Failed to parse workflow snapshot ${s}: ${o instanceof Error ? o.message : o}`),
              null
            );
          }
        })
    )
  ).filter((s) => s !== null);
  return (l.sort((s, o) => o.startTime - s.startTime), l);
}
async function j(r, a) {
  let n = { namespace: "sidecar", projectKey: a, sessionId: q(), relPath: ["workflows"] },
    i = [],
    l;
  do {
    let o = await r.listEntries(n, l === void 0 ? void 0 : { cursor: l });
    if (!o.ok) return (t(`Failed to list workflow snapshots: ${o.error.code}`), []);
    for (let e of o.value.items) {
      if (e.kind !== "key" || e.key.namespace !== "sidecar") continue;
      if ((e.key.relPath.at(-1) ?? "").endsWith(".json")) i.push(e.key);
    }
    l = o.value.cursor;
  } while (l !== void 0);
  let s = (
    await Promise.all(
      i.map(async (o) => {
        let e = o.relPath.at(-1) ?? "";
        try {
          let f = await r.read([o]);
          if (!f.ok) return (t(`Failed to parse workflow snapshot ${e}: ${f.error.code}`), null);
          let c = f.value.items[0];
          if (!c?.found)
            return (
              t(`Failed to parse workflow snapshot ${e}: deleted between list and read`),
              null
            );
          let w = te(Buffer.from(c.value).toString("utf8"));
          return d(w, e.replace(/\.json$/, ""));
        } catch (f) {
          return (
            t(`Failed to parse workflow snapshot ${e}: ${f instanceof Error ? f.message : f}`),
            null
          );
        }
      })
    )
  ).filter((o) => o !== null);
  return (s.sort((o, e) => e.startTime - o.startTime), s);
}
export { BW, ESr, tws, luo };

//# sourceMappingURL=chunk-4067vyrh.js.map
