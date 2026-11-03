// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { $9r, U, fE, PYe, USe } from "./chunk-wrtp8qz8.js";
import { va } from "./chunk-a16y5hcz.js";
function Ss() {
  return $9r.of(U().host);
}
function j$() {
  return Ss().mergedSettings;
}
function er(e) {
  Ss().invalidateAll(e);
}
function Dwn() {
  return Ss().pluginBase;
}
function lli(e) {
  Ss().setPluginBase(e);
}
function dli() {
  Ss().clearPluginBase();
}
var zj = "claude.ai sync",
  a = {
    advisor: "config",
    agents: "config",
    "auto-mode-setup": "config",
    autocompact: "config",
    brief: "config",
    channel: "config",
    chrome: "config",
    "cloud-plugins": "config",
    color: "config",
    config: "config",
    effort: "config",
    env: "config",
    experiments: "config",
    "extra-usage": "config",
    fast: "config",
    focus: "config",
    goal: "config",
    hooks: "config",
    ide: "config",
    "install-github-app": "config",
    "install-slack-app": "config",
    issue: "config",
    keybindings: "config",
    mcp: "config",
    memory: "config",
    model: "config",
    "output-style": "config",
    passes: "config",
    "pause-memory": "config",
    permissions: "config",
    plan: "config",
    plugin: "config",
    powerup: "config",
    "privacy-settings": "config",
    "pro-trial-expired": "config",
    "rate-limit-options": "config",
    "remote-control": "config",
    "remote-env": "config",
    sandbox: "config",
    "scroll-speed": "config",
    "setup-bedrock": "config",
    "setup-vertex": "config",
    "terminal-setup": "config",
    theme: "config",
    tui: "config",
    upgrade: "config",
    "usage-credits": "config",
    vim: "config",
    voice: "config",
    "web-setup": "config",
    wellbeing: "config",
    "add-dir": "action",
    "ant-trace": "action",
    artifacts: "action",
    background: "action",
    branch: "action",
    btw: "action",
    bug: "action",
    cd: "action",
    clear: "action",
    compact: "action",
    copy: "action",
    "debug-tool-call": "action",
    desktop: "action",
    exit: "action",
    export: "action",
    feedback: "action",
    heapdump: "action",
    "design-consent": "action",
    "design-revoke": "action",
    "design-login": "action",
    login: "action",
    logout: "action",
    "low-priority": "action",
    "limit-reset": "action",
    "claim-credit": "action",
    import: "action",
    "mock-limits": "action",
    "oauth-refresh": "action",
    onboarding: "action",
    "perf-issue": "action",
    radio: "action",
    "reload-plugins": "action",
    "reload-skills": "action",
    rename: "action",
    "reset-limits": "action",
    "settings-review": "config",
    restart: "action",
    update: "action",
    resume: "action",
    "simulate-usage": "action",
    rewind: "action",
    stickers: "action",
    stop: "action",
    teleport: "action",
    thrash: "action",
    context: "info",
    diff: "info",
    help: "info",
    "input-debug": "info",
    mobile: "info",
    recap: "info",
    "release-notes": "info",
    "render-debug": "info",
    session: "info",
    "skill-doctor": "info",
    skills: "info",
    status: "info",
    usage: "info",
    version: "info",
    "__remote-workflow": "agent",
    "workflow-launch-exec": "agent",
    "autofix-pr": "agent",
    autopilot: "agent",
    bugfix: "agent",
    daemon: "agent",
    dashboard: "agent",
    docs: "agent",
    fork: "agent",
    subtask: "agent",
    investigate: "agent",
    schedule: "agent",
    "list-agents": "agent",
    loops: "agent",
    tasks: "agent",
    ultraplan: "agent",
    ultrareview: "agent",
    workflows: "agent"
  };
function cli(e) {
  if (e.type === "prompt") return "skill";
  return a[e.name] ?? "action";
}
function Isr(e) {
  if (e.type !== "prompt") return "builtin";
  if (e.loadedFrom === "syncedSkills") return "synced";
  switch (e.source) {
    case "builtin":
      return "builtin";
    case "bundled":
      return "bundled";
    case "mcp":
    case "memoryStore":
      return "remote";
    case "plugin":
      return "plugin";
    case "userSettings":
      return "user";
    case "projectSettings":
    case "localSettings":
      return "project";
    case "policySettings":
      return "managed";
    case "flagSettings":
      return "flag";
  }
}
var Is = ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
function nT(e) {
  switch (e) {
    case "userSettings":
      return "user";
    case "projectSettings":
      return "project";
    case "localSettings":
      return "project, gitignored";
    case "flagSettings":
      return "cli flag";
    case "policySettings":
      return "managed";
  }
}
function Hwn(e) {
  switch (e) {
    case "userSettings":
      return "User";
    case "projectSettings":
      return "Project";
    case "localSettings":
      return "Local";
    case "flagSettings":
      return "Flag";
    case "policySettings":
      return "Managed";
    case "plugin":
      return "Plugin";
    case "built-in":
      return "Built-in";
    case "mcp":
      return "MCP";
    case "memoryStore":
      return "Memory store";
    case "syncedSkills":
      return zj;
  }
}
function lA(e) {
  switch (e) {
    case "userSettings":
      return "user settings";
    case "projectSettings":
      return "shared project settings";
    case "localSettings":
      return "project local settings";
    case "flagSettings":
      return "command line arguments";
    case "policySettings":
      return "enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
    case "toolsNarrowing":
      return "CLI tool narrowing";
    case "mcpServerPolicy":
      return "MCP server policy";
    case "hostCredential":
      return "cloud-session credential guard";
  }
}
function M9o(e) {
  return va(lA(e));
}
function D9o(e) {
  if (e === "") return [];
  let n = e.split(",").map((o) => o.trim()),
    t = [];
  for (let o of n) {
    let i = r.find(([s]) => s === o);
    if (!i) {
      let s = r.map(([c]) => c).join(", ");
      throw Error(`Invalid setting source: ${o}. Valid options are: ${s}`);
    }
    t.push(i[1]);
  }
  return t;
}
function g(e) {
  let n = r.filter(([, t]) => e.includes(t)).map(([t]) => t);
  return n.length === r.length ? void 0 : n.join(",");
}
function Cbe() {
  if (fE()) return;
  return g(USe());
}
function H9o() {
  let e = Cbe();
  return e === void 0 ? [] : [`--setting-sources=${e}`];
}
function Ro() {
  let e = PYe(),
    n = Ss();
  if (n.enabledSources?.allowed === e) return n.enabledSources.result;
  let t = new Set(e);
  (t.add("flagSettings"), t.add("policySettings"));
  let o = Is.filter((i) => t.has(i));
  return ((n.enabledSources = { allowed: e, result: o }), o);
}
function Qt(e) {
  return Ro().includes(e);
}
var Tb = ["userSettings", "projectSettings", "localSettings"],
  vI = ["projectSettings", "localSettings"],
  Tf = new Set(vI),
  u = { userSettings: "user", projectSettings: "project", localSettings: "local" },
  r = Tb.map((e) => [u[e], e]),
  fse = ["localSettings", "projectSettings", "userSettings"],
  Lwn = "--settings (inline JSON)";
var YPi = ["auto", "bypassPermissions"],
  W5r = "organizationFreeFormSettings";
export {
  Ss,
  j$,
  er,
  Dwn,
  lli,
  dli,
  zj,
  cli,
  Isr,
  Is,
  nT,
  Hwn,
  lA,
  M9o,
  D9o,
  Cbe,
  H9o,
  Ro,
  Qt,
  Tb,
  vI,
  Tf,
  fse,
  Lwn,
  YPi,
  W5r
};

//# sourceMappingURL=chunk-1e5yp9hx.js.map
