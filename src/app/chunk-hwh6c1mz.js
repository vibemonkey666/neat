// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ge, bn, Go, lr, sc, pM, uh, qd } from "./chunk-522pfw8k.js";
var m = sc({ command: ge(), args: lr(ge()).optional(), env: uh(ge(), ge()).optional() }),
  b = sc({ name: ge(), email: ge().email().optional(), url: ge().url().optional() }),
  y = sc({ type: ge(), url: ge().url() }),
  h = m.partial(),
  _ = m.extend({ platform_overrides: uh(ge(), h).optional() }),
  x = sc({ type: qd(["python", "node", "binary"]), entry_point: ge(), mcp_config: _ }),
  M = sc({
    claude_desktop: ge().optional(),
    platforms: lr(qd(["darwin", "win32", "linux"])).optional(),
    runtimes: sc({ python: ge().optional(), node: ge().optional() }).optional()
  }).passthrough(),
  O = sc({ name: ge(), description: ge().optional() }),
  S = sc({ name: ge(), description: ge().optional(), arguments: lr(ge()).optional(), text: ge() }),
  v = sc({
    type: qd(["string", "number", "boolean", "directory", "file"]),
    title: ge(),
    description: ge(),
    required: Go().optional(),
    default: pM([ge(), bn(), Go(), lr(ge())]).optional(),
    multiple: Go().optional(),
    sensitive: Go().optional(),
    min: bn().optional(),
    max: bn().optional()
  }),
  A = uh(ge(), pM([ge(), bn(), Go(), lr(ge())])),
  k = sc({
    $schema: ge().optional(),
    dxt_version: ge().optional().describe("@deprecated Use manifest_version instead"),
    manifest_version: ge().optional(),
    name: ge(),
    display_name: ge().optional(),
    version: ge(),
    description: ge(),
    long_description: ge().optional(),
    author: b,
    repository: y.optional(),
    homepage: ge().url().optional(),
    documentation: ge().url().optional(),
    support: ge().url().optional(),
    icon: ge().optional(),
    screenshots: lr(ge()).optional(),
    server: x,
    tools: lr(O).optional(),
    tools_generated: Go().optional(),
    prompts: lr(S).optional(),
    prompts_generated: Go().optional(),
    keywords: lr(ge()).optional(),
    license: ge().optional(),
    privacy_policies: lr(ge()).optional(),
    compatibility: M.optional(),
    user_config: uh(ge(), v).optional()
  }).refine((t) => !!(t.dxt_version || t.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
  }),
  w = sc({
    status: qd(["signed", "unsigned", "self-signed"]),
    publisher: ge().optional(),
    issuer: ge().optional(),
    valid_from: ge().optional(),
    valid_to: ge().optional(),
    fingerprint: ge().optional()
  });
function z(t, i) {
  if (typeof t === "string") {
    let n = t;
    for (let [e, r] of Object.entries(i)) {
      let o = new RegExp(`\\$\\{${e}\\}`, "g");
      if (n.match(o))
        if (Array.isArray(r))
          console.warn(`Cannot replace ${e} with array value in string context: "${t}"`, {
            key: e,
            replacement: r
          });
        else n = n.replace(o, r);
    }
    return n;
  } else if (Array.isArray(t)) {
    let n = [];
    for (let e of t)
      if (typeof e === "string" && e.match(/^\$\{user_config\.[^}]+\}$/)) {
        let r = e.match(/^\$\{([^}]+)\}$/)?.[1];
        if (r && i[r]) {
          let o = i[r];
          if (Array.isArray(o)) n.push(...o);
          else n.push(o);
        } else n.push(e);
      } else n.push(z(e, i));
    return n;
  } else if (t && typeof t === "object") {
    let n = {};
    for (let [e, r] of Object.entries(t)) n[e] = z(r, i);
    return n;
  }
  return t;
}
async function R(t) {
  let {
      manifest: i,
      extensionPath: n,
      systemDirs: e,
      userConfig: r,
      pathSeparator: o,
      logger: d
    } = t,
    c = i.server?.mcp_config;
  if (!c) return;
  let s = { ...c };
  if (c.platform_overrides) {
    if ("linux" in c.platform_overrides) {
      let p = c.platform_overrides.linux;
      ((s.command = p.command || s.command), (s.args = p.args || s.args), (s.env = p.env || s.env));
    }
  }
  if (j({ manifest: i, userConfig: r })) {
    d?.warn(`Extension ${i.name} has missing required configuration, skipping MCP config`);
    return;
  }
  let l = { __dirname: n, pathSeparator: o, "/": o, ...e },
    f = {};
  if (i.user_config) {
    for (let [p, a] of Object.entries(i.user_config)) if (a.default !== void 0) f[p] = a.default;
  }
  if (r) Object.assign(f, r);
  for (let [p, a] of Object.entries(f)) {
    let g = `user_config.${p}`;
    if (Array.isArray(a)) l[g] = a.map(String);
    else if (typeof a === "boolean") l[g] = a ? "true" : "false";
    else l[g] = String(a);
  }
  return ((s = z(s, l)), s);
}
function u(t) {
  return t === void 0 || t === null || t === "";
}
function j({ manifest: t, userConfig: i }) {
  if (!t.user_config) return !1;
  let n = i || {};
  for (let [e, r] of Object.entries(t.user_config))
    if (r.required) {
      let o = n[e];
      if (u(o) || (Array.isArray(o) && (o.length === 0 || o.some(u)))) return !0;
    }
  return !1;
}
export { k as McpbManifestSchema, R as getMcpConfigForManifest };

//# sourceMappingURL=chunk-hwh6c1mz.js.map
