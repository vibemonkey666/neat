// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { L } from "./chunk-wrtp8qz8.js";
import { I } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { he } from "./chunk-95k4nfdh.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { eo } from "./chunk-bxamkenk.js";
import { Bh } from "./chunk-5rw2zfa0.js";
import { fte, n1, r7t, hBe, aut, aNn } from "./chunk-qh2k3g2z.js";
function k(r) {
  if (r.length === 0) return he.dim("  (no skills loaded)");
  let { cells: t, widths: e } = r7t(r),
    o = he.dim(
      `  ${fte("skill", e.name)}  ${fte("source", e.source)}  ${n1("context", e.context)}  ${n1("7d tokens", e.week)}  ${n1("uses", e.uses + 1)}  last used`
    ),
    a = r.map((i, h) => {
      let u = t[h],
        c = `  ${fte(i.name, e.name)}  ${he.dim(fte(i.source, e.source))}  ${n1(u.context, e.context)}  ${n1(u.week, e.week)}  ${n1(String(i.usageCount), e.uses)}\xD7  ${u.lastUsed}`;
      return i.usageCount === 0 ? he.yellow(c) : c;
    }).join(`
`);
  return `${o}
${a}`;
}
async function y(r) {
  let {
      rows: t,
      unusedOwned: e,
      unusedSynced: o,
      unusedFromPlugins: a,
      unusedFromMcp: i,
      unusedMcpServers: h,
      disusedPlugins: u,
      weekTokensNote: c
    } = await aNn(aut(r)),
    s = [];
  if ((s.push(he.bold("Skills loaded this session")), s.push(""), s.push(k(t)), t.length > 0))
    (s.push(""),
      s.push(
        he.dim(
          "  context = this skill's one-line listing in the system prompt, included every turn"
        )
      ),
      s.push(
        he.dim(
          "  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)"
        )
      ),
      s.push(
        he.dim(
          c === null
            ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine"
            : `  7d tokens: ${c}`
        )
      ));
  if ((s.push(""), e.length > 0))
    s.push(
      he.yellow(
        `${e.length} ${I(e.length, "skill")} loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`
      )
    );
  if (o.length > 0)
    s.push(
      he.yellow(
        `${o.length} ${I(o.length, "skill")} synced from claude.ai loaded but never invoked. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`
      )
    );
  if (a.length > 0) {
    let n = L(a.map((p) => (p.pluginKey === void 0 ? p.source : Bh(p.pluginKey))));
    s.push(
      he.yellow(
        `${a.length} plugin ${I(a.length, "skill")} loaded but never invoked, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`
      )
    );
  }
  if (i.length > 0) {
    let n = h.length > 0 ? `, from ${h.join(", ")}` : "",
      p = h.length <= 1;
    s.push(
      he.yellow(
        `${i.length} MCP ${I(i.length, "skill")} loaded but never invoked${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${p ? "that server" : "those servers"} off in /mcp also removes ${p ? "its" : "their"} tools.`
      )
    );
  }
  if (t.length > 0 && t.every((n) => n.usageCount > 0))
    s.push(he.green("All loaded skills have been used at least once."));
  if (u.length > 0) {
    (s.push(""), s.push(he.bold("Plugins not used recently")), s.push(""));
    for (let n of u)
      s.push(`  ${he.yellow(Bh(n.name))}  ${he.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    (s.push(""), s.push(he.dim("  Manage these in /plugin")));
  }
  if (t.length === 0) f("cli_skill_doctor", "no_user_skills");
  else if (c !== null) f("cli_skill_doctor", "scan_policy_denied");
  else g("cli_skill_doctor");
  return s.join(`
`);
}
var nmo = async (r, t) => {
  if (eo(t.session))
    return { type: "text", value: "Skill usage reports are not available on this connection." };
  try {
    let e = await y(t);
    if (eo(t.session))
      return { type: "text", value: "Skill usage reports are not available on this connection." };
    return { type: "text", value: e };
  } catch (e) {
    let o = e instanceof hBe ? e.cause : e;
    if (
      (l(o),
      m("cli_skill_doctor", e instanceof hBe ? e.featureErrorCode : "render_failed"),
      eo(t.session))
    )
      return { type: "text", value: "Couldn't compute skill usage.", outcome: { kind: "failed" } };
    return {
      type: "text",
      value: `Couldn't compute skill usage. Run with --debug for details. (${d(o)})`,
      outcome: { kind: "failed" }
    };
  }
};
export { nmo };

//# sourceMappingURL=chunk-7k95knd7.js.map
