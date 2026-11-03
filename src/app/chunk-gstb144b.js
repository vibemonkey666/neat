// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { et } from "./chunk-c9re0p40.js";
class uOt {
  scriptSha256ById = new Map();
}
function tuo(r, s, i) {
  let n = s.get(uOt).scriptSha256ById.get(r);
  if (n !== void 0) return n;
  let e = Object.values(i.all()).find(
    (t) =>
      t.type === "local_workflow" && t.workflowRunId === r && t.withholdScriptFromSdkEvents === !0
  );
  if (e === void 0) return;
  return e.script === "" ? "" : et(e.script);
}
var nuo =
  "This workflow run hides its script, and this session has not loaded that script, so it cannot resume the run. Start a new run without resumeFromRunId.";
async function QSs(r, s, i, n) {
  let e = tuo(r, s, i);
  if (e === "") return { kind: "refused", reason: nuo };
  if (e !== void 0) return { kind: "hidden", scriptSha256: e };
  let t = await n();
  if ("refusal" in t) return { kind: "refused", reason: t.refusal };
  if (t.hiddenScriptSha256 !== void 0)
    return {
      kind: "refused",
      reason:
        "This workflow run hides its script, and this process has no record of starting it, so it will not resume it. Start a new run without resumeFromRunId."
    };
  if (t.hasUnreadLine === !0)
    return {
      kind: "refused",
      reason: `A line of the journal of workflow run ${r} cannot be read, so this session cannot tell whether the run hides its script and will not resume it. Start a new run without resumeFromRunId; it runs again the agents this run had finished.`
    };
  return { kind: "shared" };
}
export { uOt, tuo, nuo, QSs };

//# sourceMappingURL=chunk-gstb144b.js.map
