// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { it } from "./chunk-qmmh8tq2.js";
import { xu } from "./chunk-zvsmc5fn.js";
import { homedir as s } from "os";
import { dirname as v, join as r, resolve as C } from "path";
function a() {
  let e = i.SHELL || "",
    n = s(),
    l = r(n, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let o = r(l, "completion.zsh");
    return {
      name: "zsh",
      rcFile: r(n, ".zshrc"),
      cacheFile: o,
      completionLine: `[[ -f "${o}" ]] && source "${o}"`,
      shellFlag: "zsh"
    };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let o = r(l, "completion.bash");
    return {
      name: "bash",
      rcFile: r(n, ".bashrc"),
      cacheFile: o,
      completionLine: `[ -f "${o}" ] && source "${o}"`,
      shellFlag: "bash"
    };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = i.XDG_CONFIG_HOME || r(n, ".config"),
      c = r(l, "completion.fish");
    return {
      name: "fish",
      rcFile: r(o, "fish", "config.fish"),
      cacheFile: c,
      completionLine: `[ -f "${c}" ] && source "${c}"`,
      shellFlag: "fish"
    };
  }
  return null;
}
async function Vno() {
  return;
}
function m(e) {
  let { cmd: n, prefixArgs: l } = xu();
  return it(n, [...l, "completion", e.shellFlag, "--output", e.cacheFile]);
}
export { Vno };

//# sourceMappingURL=chunk-6kwqng9s.js.map
