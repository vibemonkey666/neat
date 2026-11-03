// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k } from "./chunk-ajtyjx88.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { i, Zn } from "./chunk-cj37hmns.js";
import { Nc } from "./chunk-4nzy53ma.js";
import { zo } from "./chunk-zf79f62g.js";
import { kii } from "./chunk-exz0w70z.js";
import { Nr } from "./chunk-928ws1pg.js";
import { I7n } from "./chunk-6dwr3g2n.js";
import { l9e } from "./chunk-zdentnfg.js";
import { Rw } from "./chunk-ctvsv6p4.js";
import { o, oe, me } from "./chunk-0bqrj5ah.js";
function SRs() {
  return Zn.CLAUDE_CODE_ARTIFACT_MCP ?? !0;
}
function wRs() {
  return me(o().min(1).max(64), oe())
    .optional()
    .describe(
      `Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${Rw}\` skill for the current contract and per-capability guidance.`
    );
}
function Nbo(s) {
  let a = new Map();
  for (let e of s) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let t = e.mcpInfo.serverName,
      r = a.get(t);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let n = e.mcpInfo.displayName ?? t;
    a.set(t, {
      server: n,
      toolPrefix: Nr(e.name)?.serverName ?? t,
      toolNames: [e.mcpInfo.toolName],
      ...(I7n(n) ? {} : { declarable: !1 })
    });
  }
  return [...a.values()];
}
function $bo(s) {
  let a = `mcp__${zo}__`,
    e = new Set();
  for (let t of s) {
    if (!t.name.startsWith(a)) continue;
    let r = t.name.slice(a.length),
      n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n));
  }
  return [...e];
}
function Fbo() {
  return Nc();
}
function d(s) {
  let a = new Map(),
    e = new Set();
  for (let r of s) {
    let n = r.mcpInfo;
    if (n?.serverType !== "sdk" || Kt(n.serverName) === null) continue;
    let l = a.get(n.serverName);
    if (l !== void 0) {
      l.toolNames.push(n.toolName);
      continue;
    }
    if (e.has(n.serverName)) continue;
    let c = n.serverInfoName ?? "";
    if (c.trim() === "" || Kt(c.trim()) !== null) {
      e.add(n.serverName);
      continue;
    }
    a.set(n.serverName, {
      server: c,
      toolPrefix: n.serverName,
      toolNames: [n.toolName],
      ...(I7n(c) ? {} : { declarable: !1 })
    });
  }
  let t = [...a.values()];
  return {
    named: t.filter((r) => r.declarable !== !1),
    unnamedIds: [...e],
    undeclarable: t.filter((r) => r.declarable === !1)
  };
}
function p() {
  return k("tengu_cobalt_plinth_yew", !1);
}
function Ubo(s, a) {
  let e = Fbo() ? d(s) : null,
    t = l9e(a ?? []);
  if (!t) return { ccrHosted: !1, metaConnector: null, hosted: e };
  let r = i.CLAUDE_CODE_REMOTE === !0,
    n = t.name,
    l = s.find((f) => f.mcpInfo?.serverName === n),
    c = l && Nr(l.name)?.serverName,
    m = c && p() ? { server: kii, toolPrefix: c } : null;
  return { ccrHosted: r, metaConnector: m, hosted: e };
}
function vRs(s, a) {
  let { metaConnector: e, hosted: t } = Ubo(s, a),
    r = [...Nbo(s), ...(t === null ? [] : [...t.named, ...t.undeclarable])];
  return e ? [...r, e] : r;
}
export { SRs, wRs, Nbo, $bo, Fbo, Ubo, vRs };

//# sourceMappingURL=chunk-g46q1g7w.js.map
