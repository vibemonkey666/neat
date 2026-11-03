import {
  fileURLToPath as __filePath_cc62c54807df61dd,
  URL as __filePath_cc62c54807df61dd_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function Jwt(n) {
  let e = !1,
    r,
    t = {
      addDir: [],
      pluginDir: [],
      pluginDirNoMcp: [],
      settings: void 0,
      managedSettings: void 0,
      mcpConfig: [],
      strictMcpConfig: !1,
      restricted: !1
    },
    g = [],
    d = {
      "--cwd": (i) => {
        r = i;
      },
      "--settings": (i) => {
        t.settings = i;
      },
      "--managed-settings": (i) => {
        t.managedSettings = i;
      },
      "--setting-sources": () => {},
      "--add-dir": (i) => t.addDir.push(i),
      "--plugin-dir": (i) => t.pluginDir.push(i),
      "--plugin-dir-no-mcp": (i) => t.pluginDirNoMcp.push(i),
      "--mcp-config": (i) => t.mcpConfig.push(i)
    };
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (s === "agents" && !e) {
      e = !0;
      continue;
    }
    if (s === "--strict-mcp-config") {
      t.strictMcpConfig = !0;
      continue;
    }
    if (s === "--restricted") {
      t.restricted = !0;
      continue;
    }
    let o = s.indexOf("="),
      l = o === -1 ? s : s.slice(0, o),
      a = Object.hasOwn(d, l) ? d[l] : void 0;
    if (a) {
      if (o !== -1) a(s.slice(o + 1));
      else if (i + 1 < n.length) a(n[++i]);
      else g.push(s);
      continue;
    }
    g.push(s);
  }
  return { hasAgentsPositional: e, cwdFilter: r, config: t, rest: g };
}
function DKo(n) {
  let e = n.trim();
  return e === "~" || e.startsWith("~/");
}
function Qwt(n, e) {
  let r = (t, g) => (t === "" || (g && t.trimStart().startsWith("{")) ? t : e(t));
  return {
    settings: n.settings === void 0 ? void 0 : r(n.settings, !0),
    managedSettings: n.managedSettings,
    pluginDir: n.pluginDir.map((t) => r(t, !1)),
    pluginDirNoMcp: n.pluginDirNoMcp.map((t) => r(t, !1)),
    addDir: n.addDir.map((t) => (DKo(t) ? t : r(t, !1))),
    mcpConfig: n.mcpConfig.map((t) => r(t, !0)),
    strictMcpConfig: n.strictMcpConfig,
    restricted: n.restricted,
    settingSources: n.settingSources
  };
}
function Zce(n) {
  return [
    ...(n.settings ? ["--settings", n.settings] : []),
    ...(n.managedSettings ? ["--managed-settings", n.managedSettings] : []),
    ...n.pluginDir.flatMap((e) => ["--plugin-dir", e]),
    ...n.pluginDirNoMcp.flatMap((e) => ["--plugin-dir-no-mcp", e]),
    ...n.addDir.flatMap((e) => ["--add-dir", e]),
    ...n.mcpConfig.flatMap((e) => ["--mcp-config", e]),
    ...(n.settingSources !== void 0 ? [`--setting-sources=${n.settingSources}`] : []),
    ...(n.strictMcpConfig ? ["--strict-mcp-config"] : []),
    ...(n.restricted ? ["--restricted"] : [])
  ];
}
function rZs(n) {
  let e = 0;
  while (
    n[e] === "--dangerously-skip-permissions" ||
    n[e] === "--allow-dangerously-skip-permissions"
  )
    e++;
  return n[e] === "daemon" ? n.slice(e + 1) : null;
}
function l5(
  n = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.310",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-23T17:43:32Z",
    GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
    HOOKS_WORKER_URL: __filePath_cc62c54807df61dd(
      new __filePath_cc62c54807df61dd_URL(
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        import.meta.url
      )
    ),
    DD_SOURCEMAP_GROUP: "default"
  }.BUILD_REF_NAME
) {
  return "";
}
function $Zn() {
  return {
    version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_cc62c54807df61dd(new __filePath_cc62c54807df61dd_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}${l5()}`,
    buildTime: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_cc62c54807df61dd(
        new __filePath_cc62c54807df61dd_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.BUILD_TIME
  };
}
export { Jwt, DKo, Qwt, Zce, rZs, l5, $Zn };

//# sourceMappingURL=chunk-pfc5159p.js.map
