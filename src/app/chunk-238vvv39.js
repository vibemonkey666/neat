import {
  fileURLToPath as __sourceFilePath_3288d914b4d32f7a,
  URL as __sourceFilePath_3288d914b4d32f7a_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { yv, p0e } from "./chunk-ajtyjx88.js";
import { pe } from "./chunk-7c3thgax.js";
import { oy } from "./chunk-at88wjsn.js";
import { Ce } from "./chunk-a2y39866.js";
var o = Ce(oy(), 1);
var s = new Set(["update", "install", "doctor"]);
function u({
  currentVersion: e,
  requiredMinimumVersion: r,
  requiredMaximumVersion: n,
  topLevelCommand: a
}) {
  if (!r && !n) return null;
  if (a !== void 0 && s.has(a)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i)
      t(`requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`, {
        level: "error"
      });
    else if (!yv(e, i))
      return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i)
      t(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
        level: "error"
      });
    else if (!p0e(e, i))
      return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}
function bQs(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = pe("policySettings");
    return u({
      currentVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_3288d914b4d32f7a(
          new __sourceFilePath_3288d914b4d32f7a_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      requiredMinimumVersion: n?.requiredMinimumVersion,
      requiredMaximumVersion: n?.requiredMaximumVersion,
      topLevelCommand: r?.name()
    });
  } catch (r) {
    return (l(r), null);
  }
}
function SQs() {
  try {
    let e = pe("policySettings");
    return u({
      currentVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_3288d914b4d32f7a(
          new __sourceFilePath_3288d914b4d32f7a_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0
    });
  } catch (e) {
    return (l(e), null);
  }
}
export { bQs, SQs };

//# sourceMappingURL=chunk-238vvv39.js.map
