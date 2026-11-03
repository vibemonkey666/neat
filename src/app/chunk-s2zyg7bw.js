// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var IKo = "runner-declares";
var Vhn = "diff-finds-nested-repository",
  OKo = "no-repository-checked-out";
function MKo(e) {
  return "--runner-declares=" + e.join(",");
}
async function JRi(e) {
  if (!e.startsWith("--runner-declares=")) return;
  let E = e.slice(18).split(",");
  if (!E.includes("diff-finds-nested-repository")) return;
  let { setRunnerDeclaredNestedRepositoryDiff: t, setRunnerDeclaredNoRepositoryCheckedOut: R } =
    await import("./chunk-k19pbtc6.js");
  if ((t(!0), E.includes("no-repository-checked-out"))) R(!0);
}
export { IKo, Vhn, OKo, MKo, JRi };

//# sourceMappingURL=chunk-s2zyg7bw.js.map
