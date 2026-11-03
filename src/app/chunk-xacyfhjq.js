// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, ke } from "./chunk-wrtp8qz8.js";
import { F0e, Dz, k, Cs, La, ch } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { Txe, yg, fe } from "./chunk-xe386mry.js";
import { hr, It } from "./chunk-dc0nzty2.js";
import { ct } from "./chunk-qmmh8tq2.js";
var L = [".claude/skills", ".claude/commands"],
  _ = 3,
  y = 100;
function v(n) {
  let e = n.split("/");
  if (e[0] !== ".claude" || e.length < 3) return null;
  switch (e[1]) {
    case "skills":
      if (e.length === 4 && e[3] === "SKILL.md") return { kind: "skill", name: e[2] };
      return null;
    case "commands": {
      let i = e.at(-1);
      if (!i.endsWith(".md")) return null;
      if (/^skill\.md$/i.test(i))
        return e.length < 4 ? null : { kind: "command", name: e.slice(2, -1).join(":") };
      return { kind: "command", name: e.slice(2).join(":").slice(0, -3) };
    }
    default:
      return null;
  }
}
class x {
  inFlight = void 0;
  resolved = void 0;
  get(n) {
    return ((this.inFlight ??= this.scan(n)), this.inFlight);
  }
  teammateAuthorOf(n) {
    return this.resolved?.find((e) => !e.byCurrentUser && e.name === n)?.author || null;
  }
  async scan(n) {
    if (!Cs()) return [];
    let e = Txe(fe(), ke()),
      i = hr(e);
    if (!i) return [];
    let [{ stdout: o, code: m }, s] = await Promise.all([
      ct(
        It(),
        [
          "-c",
          "core.quotePath=false",
          "-c",
          "core.fsmonitor=",
          "-c",
          "core.hooksPath=/dev/null",
          "-c",
          "core.pager=",
          "-c",
          "log.showSignature=false",
          "log",
          "--since=7.days",
          "--diff-filter=A",
          "--name-only",
          "--format=COMMIT%x00%an%x00%ae",
          "--",
          ...L
        ],
        { cwd: i, timeout: 5000 }
      ),
      yg(e, F0e)
    ]);
    if (m !== 0) return [];
    let c = s?.toLowerCase(),
      l = [],
      A = new Set(),
      u = "",
      h = "";
    for (let r of o.split(`
`)) {
      if (r.startsWith("COMMIT\x00")) {
        let f = r.split("\x00");
        ((u = f[1] ?? ""), (h = (f[2] ?? "").toLowerCase()));
        continue;
      }
      if (!r || A.has(r)) continue;
      A.add(r);
      let d = v(r);
      if (d) {
        let f = Boolean(c && h === c);
        l.push({ path: r, author: u, byCurrentUser: f, ...d });
      }
    }
    this.resolved = l;
    let w = La(),
      E = new Set(w.seenTeamArtifactPaths ?? []),
      P = l.some((r) => !r.byCurrentUser && !E.has(r.path)),
      U = new Set(w.loggedAuthoredArtifactPaths ?? []),
      p = l.filter((r) => r.byCurrentUser && !U.has(r.path));
    for (let r of p) a("tengu_skill_authored", { is_skill: r.kind === "skill" });
    try {
      await ch((r) => {
        let d = r.hasUnseenTeamArtifacts === P;
        if (p.length === 0 && d) return r;
        let f = d ? r : { ...r, hasUnseenTeamArtifacts: P };
        if (p.length === 0) return f;
        let j = f.loggedAuthoredArtifactPaths ?? [],
          C = p.map((T) => T.path),
          B = new Set(C),
          F = [...j.filter((T) => !B.has(T)), ...C].slice(-y);
        return { ...f, loggedAuthoredArtifactPaths: F };
      }, n);
    } catch (r) {
      t(`team-artifact eligibility persist failed: ${r}`);
    }
    return l;
  }
}
var b = new nt(() => new x());
function S(n, e) {
  return b.of(n).get(e);
}
function bOt(n, e, i) {
  if (e !== "projectSettings" || !k("tengu_tussock_oriole", !1)) return null;
  return b.of(n).teammateAuthorOf(i);
}
function uws(n, e) {
  if (Dz()) S(n, e).catch(() => {});
  if (!k("tengu_tussock_oriole", !1)) return !1;
  return La().hasUnseenTeamArtifacts === !0;
}
async function fws(n, e) {
  let i = await S(n, e);
  if (i.length === 0) return [];
  let o = new Set(La().seenTeamArtifactPaths ?? []);
  return i.filter((m) => !m.byCurrentUser && !o.has(m.path));
}
async function pws(n, e) {
  let o = (await S(n, e)).filter((s) => !s.byCurrentUser).map((s) => s.path),
    m = new Set(o);
  await ch((s) => {
    let c = s.seenTeamArtifactPaths ?? [],
      l = [...c.filter((u) => !m.has(u)), ...o].slice(-y);
    if (l.length === c.length && l.every((u, h) => u === c[h]) && s.hasUnseenTeamArtifacts === !1)
      return s;
    return { ...s, seenTeamArtifactPaths: l, hasUnseenTeamArtifacts: !1 };
  }, e);
}
function mws(n) {
  let e = { skill: 0, command: 0 };
  for (let i of n) e[i.kind]++;
  (g("tips_team_artifact_show"),
    a("tengu_team_artifact_tip_shown", {
      skill_count: e.skill,
      command_count: e.command,
      overflow_count: Math.max(0, n.length - _)
    }));
}
function SOt(n, e) {
  if (n !== "projectSettings") return {};
  return { via_team_tip: (La().seenTeamArtifactPaths ?? []).some((o) => v(o)?.name === e) };
}
function gws(n) {
  let e = n.filter((c) => !c.byCurrentUser);
  if (e.length === 0) return "";
  let i = e.slice(0, _),
    o = i.map((c) => `/${c.name} (${c.author || "a teammate"})`),
    m = o.length === 1 ? o[0] : `${o.slice(0, -1).join(", ")} and ${o.at(-1)}`,
    s = e.length - i.length;
  return `New from your team: ${m}${s > 0 ? `, plus ${s} more` : ""}`;
}
export { bOt, uws, fws, pws, mws, SOt, gws };

//# sourceMappingURL=chunk-xacyfhjq.js.map
