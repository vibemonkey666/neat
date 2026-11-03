// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { B9, Zz, jg } from "./chunk-5rw2zfa0.js";
import { esn } from "./chunk-j0tbz6ra.js";
import { Fyn } from "./chunk-5b88xb0z.js";
function a(e) {
  let t = "plugin" in e ? e.plugin : "no-plugin",
    n = e.type === "mcpb-needs-config" ? `:${e.serverName}` : "";
  return `${e.type}:${e.source}:${t}${n}`;
}
function Suo(e) {
  return e === "lsp-manager" || e.startsWith("plugin:");
}
function l(e, t) {
  let n = e.filter((i) => Suo(i.source)),
    r = new Set(t.map(u));
  return [...n.filter((i) => !r.has(u(i))), ...t];
}
function u(e) {
  return e.type === "generic-error"
    ? `generic-error:${e.source}:${e.error}`
    : `${e.type}:${e.source}`;
}
function g(e, t) {
  let n = e.filter((i) => i.source.startsWith("plugin:")),
    r = new Set(t.map((i) => `${i.type}:${i.source}`));
  return [...n.filter((i) => !r.has(`${i.type}:${i.source}`)), ...t];
}
class Q6 {
  #n;
  #t;
  constructor(e) {
    ((this.#n = e.getState), (this.#t = e.setState));
  }
  static over(e) {
    return new Q6({ getState: e.getState, setState: Fyn(e.setState) });
  }
  get() {
    return this.#n().plugins;
  }
  #e(e) {
    this.#t((t) => {
      let n = e(t.plugins);
      return n === t.plugins ? t : { ...t, plugins: n };
    });
  }
  addErrors(e) {
    if (e.length === 0) return;
    this.#e((t) => {
      let n = new Set(t.errors.map((s) => a(s))),
        r = e.filter((s) => !n.has(a(s)));
      if (r.length === 0) return t;
      return { ...t, errors: [...t.errors, ...r] };
    });
  }
  removeErrorsOf(e) {
    if (e.length === 0) return;
    let t = e.map((n) => ({ id: n, ...Zz(n) }));
    this.#e((n) => {
      let r = n.errors.filter((s) => {
        let i = Zz(s.source).marketplace;
        return !t.some(
          (o) =>
            jg(s.source, o.id) ||
            ("plugin" in s &&
              s.plugin === o.name &&
              !B9(s.source) &&
              (i === void 0 || i === o.marketplace))
        );
      });
      return r.length === n.errors.length ? n : { ...n, errors: r };
    });
  }
  addWarnings(e) {
    if (e.length === 0) return;
    this.#e((t) => {
      let n = new Set(t.warnings.map((s) => a(s))),
        r = e.filter((s) => !n.has(a(s)));
      if (r.length === 0) return t;
      return { ...t, warnings: [...t.warnings, ...r] };
    });
  }
  markNeedsRefresh(e = "changed") {
    this.#e((t) => {
      if (e === "not-loaded")
        return t.needsRefresh && t.needsRefreshToLoad === !0
          ? t
          : { ...t, needsRefresh: !0, needsRefreshToLoad: !0 };
      return t.needsRefresh ? t : { ...t, needsRefresh: !0 };
    });
  }
  retarget(e) {
    this.#e((t) => {
      let n = t.enabled.findIndex((i) => i.source === e.source && i.path === e.path),
        r = t.enabled[n];
      if (r === void 0) return t;
      let s = esn(r, e);
      if (s === r) return t;
      return { ...t, enabled: t.enabled.with(n, s) };
    });
  }
  setPendingMarketplaces(e) {
    this.#e((t) => ({
      ...t,
      installationStatus: {
        marketplaces: e.map((n) => ({ name: n, status: "pending" })),
        plugins: []
      }
    }));
  }
  setMarketplaceStatus(e, t, n) {
    this.#e((r) => ({
      ...r,
      installationStatus: {
        ...r.installationStatus,
        marketplaces: r.installationStatus.marketplaces.map((s) =>
          s.name === e ? { ...s, status: t, error: n } : s
        )
      }
    }));
  }
  applyRefresh(e) {
    this.#t((t) => ({
      ...t,
      plugins: {
        ...t.plugins,
        enabled: e.enabled,
        disabled: e.disabled,
        commands: e.commands,
        errors: l(t.plugins.errors, e.errors),
        warnings: g(t.plugins.warnings, e.warnings),
        needsRefresh: !1,
        needsRefreshToLoad: void 0
      },
      agentDefinitions: e.agentDefinitions,
      mcp: { ...t.mcp, pluginReconnectKey: t.mcp.pluginReconnectKey + 1 }
    }));
  }
}
export { Suo, Q6 };

//# sourceMappingURL=chunk-dpe93qv6.js.map
