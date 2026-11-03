// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, ke, ly, oN, X_ } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { br } from "./chunk-wejdb0zs.js";
import { a } from "./chunk-4cgvah10.js";
import { wr } from "./chunk-jazcqqqr.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { mr } from "./chunk-spwjh8kb.js";
import { tu, G_ } from "./chunk-5rw2zfa0.js";
import { Tai } from "./chunk-vbnb89qh.js";
import { tLe } from "./chunk-p56qmwgb.js";
import {
  bpt,
  SXe,
  XWn,
  bxr,
  YEo,
  pje,
  JWn,
  UMs,
  Tge,
  kje,
  NC,
  sG,
  WTo,
  j3,
  Hd,
  HRo,
  r$s,
  sv,
  Uke,
  Xsn,
  txo
} from "./chunk-j0tbz6ra.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { fce, pce, oh } from "./chunk-q7wmjzj5.js";
import { ze } from "./chunk-1ww4jg8j.js";
import { tze } from "./chunk-5qtb3hv4.js";
import { nme, OSr } from "./chunk-jtzfpbna.js";
import { Iy } from "./chunk-nsr849np.js";
function W(n, e) {
  if (e.pluginSource !== void 0 && G_(e.pluginSource) === tu) return !0;
  let c = nme(n, X_());
  if (c === void 0) return !1;
  return c.kind === "server" || OSr(e.pluginSource, c);
}
function tme() {
  return wr() ? W : void 0;
}
var v = (n) =>
  Object.entries(n ?? {})
    .filter(([, e]) => e.pluginSource !== void 0)
    .map(([e]) => e);
async function PSr(n, e) {
  return 0;
}
async function AF(n, e, c, y = {}) {
  let u = y.applyStagedInstalls ?? !0,
    f = oN(),
    { changesLanded: h, holdsSet: k } = f;
  using p = {
    [Symbol.dispose]: () => {
      f.endHoldSetBefore(k);
    }
  };
  let i = Ie().organizationAsk,
    w = u && Iy() !== "unanswered" ? i.heldReresolve : null;
  if (w) ((i.heldReresolve = null), await w().catch(l));
  if ((t("refreshActivePlugins: clearing all plugin caches"), u)) (Tai(), r$s());
  if ((Hd(e, c), u)) UMs();
  let o = await sv(e, c);
  HRo();
  let L = Ie().pluginLoadCacheOnly;
  (await WTo(e), ze.refreshConfig());
  let [S, j, b] = await Promise.all([Tge(e), kje(e), NC(ke(), e)]),
    { enabled: g, disabled: R, errors: B, warnings: N } = o,
    _ = [],
    E = [],
    [T, x] = await Promise.all([
      Promise.all(
        g.map(async (r) => {
          let s = await bpt(r, _, e, { warnings: E });
          return s ? Object.keys(s).length : 0;
        })
      ),
      Promise.all(
        g.map(async (r) => {
          if (r.lspServers) return Object.keys(r.lspServers).length;
          let s = await SXe(r, _, e);
          if (s) r.lspServers = s;
          return s ? Object.keys(s).length : 0;
        })
      )
    ]),
    C = T.reduce((r, s) => r + s, 0),
    I = x.reduce((r, s) => r + s, 0);
  await PSr(g, _);
  let O = [...N, ...E, ...XWn(g)],
    A = [...B, ..._];
  (n.applyRefresh({
    enabled: g,
    disabled: R,
    commands: S,
    errors: A,
    warnings: O,
    agentDefinitions: b
  }),
    JWn(e, c));
  let P = !1;
  try {
    await j3(e, c);
  } catch (r) {
    ((P = !0), l(r), t(`refreshActivePlugins: loadPluginHooks failed: ${d(r)}`));
  }
  if (!P) (await Xsn(g, e).catch(l), f.reloaded(h));
  let D = g.reduce((r, s) => {
      if (!s.hooksConfig) return r;
      return (
        r +
        Object.values(s.hooksConfig).reduce(
          (G, z) => G + (z?.reduce((H, J) => H + J.hooks.length, 0) ?? 0),
          0
        )
      );
    }, 0),
    M = br();
  M.isAnnouncingFreshLoad = L !== void 0 && Ie().pluginLoadCacheOnly === L;
  try {
    sG.emit();
  } finally {
    M.isAnnouncingFreshLoad = !1;
  }
  return (
    t(
      `refreshActivePlugins: ${g.length} enabled, ${S.length} commands, ${j.length} skills, ${b.allAgents.length} agents, ${D} hooks, ${C} MCP, ${I} LSP`
    ),
    {
      enabled_count: F(g, (r) => r.isBuiltin !== !0),
      disabled_count: F(R, (r) => r.isBuiltin !== !0),
      command_count: S.length,
      skill_count: j.length,
      agent_count: b.allAgents.length,
      hook_count: D,
      mcp_count: C,
      lsp_count: I,
      error_count: A.length + (P ? 1 : 0),
      errors: A,
      warnings: O,
      agentDefinitions: b,
      pluginCommands: S
    }
  );
}
async function eJ(n) {
  let e = new Set(n.mcpClients.filter((o) => o.config.pluginSource !== void 0).map((o) => o.name)),
    c,
    y = () => (c ??= Uke(n.storageV5)),
    u = await txo(n.dynamicMcpConfig ?? {}, n.storageV5, y, tme());
  for (let o of v(n.dynamicMcpConfig)) u.add(o);
  let f = [...u].filter((o) => !e.has(o)).sort(),
    h = [...e].filter((o) => !u.has(o)).sort(),
    k = f.length > 0 || h.length > 0,
    p = oh() && pce(n.model) && !fce(n.model),
    i = ly() > 0,
    m = null;
  if (tze() && !p && i && !mr("lspServers")) {
    let o = YEo()
      ? { hasServers: !1, loaderFailed: !1, loaderFailedApplyHealable: !1, derivationFailed: !1 }
      : await K(y, n.storageV5, n.credentials);
    if (!pje()) {
      if (o.hasServers) m = "adds";
      else if (o.loaderFailedApplyHealable) m = "may-add";
    } else if (!o.hasServers && !o.derivationFailed) {
      if (o.loaderFailedApplyHealable) m = "may-remove";
      else if (!o.loaderFailed) m = "removes";
    }
  }
  return {
    mcpServersAdded: f,
    mcpServersRemoved: h,
    toolSearchEnabled: p,
    lspToolChange: m,
    wouldInvalidateCache: (k || m !== null) && !p && i
  };
}
async function K(n, e, c) {
  let { enabled: y, errors: u } = await n(),
    f = !1,
    h = u.some(tLe),
    k = u.some(
      (i) =>
        tLe(i) &&
        !(i.type === "plugin-not-installed" && i.registryReadFailed !== !0) &&
        !(i.type === "marketplace-not-found" && i.registryReadFailed !== !0) &&
        i.type !== "dependency-version-unsatisfied" &&
        !(i.type === "dependency-unsatisfied" && i.reason !== "not-found")
    ),
    p = !1;
  for (let i of y) {
    let m = [];
    try {
      let w = await bxr(i, m, e, c);
      if (w !== void 0 && Object.keys(w).length > 0) f = !0;
    } catch {
      p = !0;
    }
    if (m.length > 0) p = !0;
  }
  return { hasServers: f, loaderFailed: h, loaderFailedApplyHealable: k, derivationFailed: p };
}
function rQt(n, e) {
  a("tengu_reload_plugins_cache_impact", {
    mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
    lsp_changed: n.lspToolChange !== null,
    tool_search_on: n.toolSearchEnabled,
    warned: e.warned,
    forced: e.forced
  });
}
export { tme, PSr, AF, eJ, rQt };

//# sourceMappingURL=chunk-xw0ptzv8.js.map
