// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L } from "./chunk-wrtp8qz8.js";
import { Hh } from "./chunk-ajtyjx88.js";
import { I } from "./chunk-a16y5hcz.js";
import { le } from "./chunk-vw9e882a.js";
import { yr, l2 } from "./chunk-wr0p4ndg.js";
import { Bh } from "./chunk-5rw2zfa0.js";
import { zj } from "./chunk-1e5yp9hx.js";
import { ije, DN, lge, Hpt, wLs, eOr, tOr } from "./chunk-j0tbz6ra.js";
import { o7t, sks } from "./chunk-3yt8akt1.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { jY } from "./chunk-39ayby14.js";
import { n8e } from "./chunk-ta9cgaw3.js";
import { En } from "./chunk-errevp3y.js";
function fte(n, s) {
  return n + " ".repeat(Math.max(0, s - le(n)));
}
function n1(n, s) {
  return " ".repeat(Math.max(0, s - le(n))) + n;
}
function r7t(n) {
  let s = n.map((o) => ({
    context: o.listingTokens === null ? "-" : l2(o.listingTokens),
    week: o.weekTokens === null ? "-" : yr(o.weekTokens),
    lastUsed:
      o.daysSinceUse === null
        ? "never"
        : o.daysSinceUse === 0
          ? "today"
          : `${o.daysSinceUse} ${I(o.daysSinceUse, "day")}`
  }));
  return {
    cells: s,
    widths: {
      name: Math.max(5, ...n.map((o) => le(o.name))),
      source: Math.max(6, ...n.map((o) => le(o.source))),
      context: Math.max(7, ...s.map((o) => le(o.context))),
      week: Math.max(9, ...s.map((o) => le(o.week))),
      uses: Math.max(4, ...n.map((o) => le(String(o.usageCount))))
    }
  };
}
class hBe extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", { cause: s });
    this.featureErrorCode = n;
  }
}
function aut(n) {
  return {
    commands: n.options.commands,
    mcpCommands: n.getMcp().commands,
    mcpClients: n.getMcp().clients,
    agentId: n.agentId,
    mainLoopModel: n.options.mainLoopModel,
    permissionMode: ae(n).mode,
    storageV5: n.storageV5
  };
}
async function aNn(n) {
  let s = n8e();
  s.catch(() => {});
  let o = o7t(),
    c = o.allowed
      ? sks(n.storageV5).catch((e) => {
          throw new hBe("scan_failed", e);
        })
      : Promise.resolve(new Map());
  c.catch(() => {});
  let { included: k } = await tOr(n.mcpCommands, n.agentId, n.storageV5).catch((e) => {
      throw new hBe("skill_set_failed", e);
    }),
    S = Hh({ permissionMode: n.permissionMode, mainLoopModel: n.mainLoopModel }),
    y = eOr(k, S, n.mainLoopModel),
    p = await c,
    r = [],
    l = lge([...n.commands]),
    w = new Set(l.map((e) => e.name)),
    M = new Set(n.commands.filter((e) => Hpt(e) && !w.has(e.name)).map((e) => e.name)),
    m = new Map();
  for (let e of l) {
    let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
    if (t > 0) {
      let i = e.name.slice(t + 1);
      m.set(i, (m.get(i) ?? 0) + 1);
    }
  }
  for (let e of l) {
    if (e.type !== "prompt") continue;
    if (e.source === "bundled" || e.source === "builtin" || e.source === "policySettings") continue;
    if (e.source === "mcp" && e.loadedFrom !== "mcp") continue;
    let t = e.name.lastIndexOf(":"),
      i = t > 0 ? e.name.slice(t + 1) : void 0,
      u =
        i !== void 0 && e.loadedFrom !== "syncedSkills" && M.has(i) && m.get(i) === 1 ? i : void 0,
      f = wLs(e.name, u ?? ije(e));
    r.push({
      name: e.pluginInfo ? Bh(e.name) : e.name,
      source: e.pluginInfo
        ? jY(e.pluginInfo.repository)
          ? zj
          : Bh(e.pluginInfo.pluginManifest.name)
        : e.loadedFrom === "syncedSkills"
          ? zj
          : e.source,
      owner:
        e.source === "plugin"
          ? "plugin"
          : e.source === "mcp"
            ? "mcp"
            : e.loadedFrom === "syncedSkills"
              ? "synced"
              : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(DN(e)) ?? (u ? p.get(u) : void 0) ?? null
    });
  }
  r.sort((e, t) => (t.daysSinceUse ?? 1 / 0) - (e.daysSinceUse ?? 1 / 0));
  let a = r.filter((e) => e.usageCount === 0 && e.listingTokens !== null),
    h = a.filter((e) => e.owner === "settings"),
    b = a.filter((e) => e.owner === "synced"),
    x = new Set(
      r.filter((e) => e.usageCount > 0 && e.pluginKey !== void 0).map((e) => e.pluginKey)
    ),
    C = a.filter((e) => e.owner === "plugin" && (e.pluginKey === void 0 || !x.has(e.pluginKey))),
    d = (e) => {
      let t = e.name.indexOf(":");
      return t > 0 ? e.name.slice(0, t) : void 0;
    },
    T = new Set(
      r
        .filter((e) => e.owner === "mcp" && e.usageCount > 0)
        .map(d)
        .filter((e) => e !== void 0)
    ),
    g = a.filter((e) => {
      if (e.owner !== "mcp") return !1;
      let t = d(e);
      return t === void 0 || !T.has(t);
    }),
    P = L(g.map(d).filter((e) => e !== void 0)).map((e) =>
      Bh(n.mcpClients.find((t) => En(t.name) === e)?.name ?? e)
    );
  return {
    rows: r,
    unusedOwned: h,
    unusedFromPlugins: C,
    unusedFromMcp: g,
    unusedSynced: b,
    unusedMcpServers: P,
    disusedPlugins: await s,
    weekTokensNote: o.allowed ? null : o.reason
  };
}
export { fte, n1, r7t, hBe, aut, aNn };

//# sourceMappingURL=chunk-qh2k3g2z.js.map
