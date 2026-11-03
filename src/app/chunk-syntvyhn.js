// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { $Tt } from "./chunk-d54avynm.js";
import { UD } from "./chunk-14k612dp.js";
import { Sf } from "./chunk-vn4qkmxw.js";
import { gbe, Fkt } from "./chunk-zf79f62g.js";
import { LD } from "./chunk-783pymr7.js";
import { KOe } from "./chunk-j0tbz6ra.js";
function i1e(e, o) {
  let n = o.map((t) =>
    t.mcpInfo === void 0 ||
    (t.mcpInfo.scope === e.config.scope && t.mcpInfo.pluginSource === e.config.pluginSource)
      ? t
      : { ...t, mcpInfo: $Tt(e) }
  );
  return n.every((t, r) => t === o[r]) ? o : n;
}
function Wae(e, o) {
  return e.config.scope === o.scope && e.config.pluginSource === o.pluginSource
    ? e
    : { ...e, config: o };
}
var S = 128,
  g = /^[a-z0-9._:-]+$/;
function i(e) {
  let o = e?.trim().toLowerCase();
  if (!o || o.length > S || !g.test(o)) return;
  return o;
}
function Tme(e, o) {
  if (o.type !== "http" || UD(e, o) !== "dynamic") return;
  let n = i(gbe(o));
  if (n) return n;
  let p = Fkt.peek(U())?.read?.();
  return i(p?.[e]);
}
var m = (e, o) => ({
  ...o,
  scope: e.config.scope,
  pluginSource: e.config.pluginSource,
  source: UD(e.name, e.config),
  pluginTelemetry: void 0,
  ...(e.config.pluginSource !== void 0 && { pluginTelemetry: LD(e.config.pluginSource, Sf()) }),
  serverIdStamp: Tme(e.name, e.config)
});
function hJ(e, o) {
  let n = KOe(e.name, e.config),
    p = o.map((r) => {
      if (r.mcpInfo === void 0) return r;
      let s =
        n && r.ignoresWholeToolAllowRule?.({}) !== !0
          ? {
              ...r,
              ignoresWholeToolAllowRule() {
                return !0;
              },
              suppressesAlwaysAllowRule() {
                return !0;
              },
              async checkPermissions(u, f) {
                let c = await r.checkPermissions(u, f);
                return c.behavior === "ask" || c.behavior === "passthrough"
                  ? { ...c, suggestions: [] }
                  : c;
              }
            }
          : r;
      return r.mcpInfo.scope === e.config.scope && r.mcpInfo.pluginSource === e.config.pluginSource
        ? s
        : { ...s, mcpInfo: m(e, r.mcpInfo) };
    });
  return p.every((r, s) => r === o[s]) ? o : p;
}
export { Tme, i1e, Wae, hJ };

//# sourceMappingURL=chunk-syntvyhn.js.map
