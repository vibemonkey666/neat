// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ju, eN, Aq, nF, V$e, QS, By } from "./chunk-ewvf3tep.js";
var l_t = "next";
function NQ(e, s, r) {
  let n = !1,
    i;
  return (
    s.update(e, (t) => {
      if (((i = t), t.notified)) return t;
      if (((n = !0), r?.skipStampIfRunning && t.status === "running")) return t;
      return { ...t, notified: !0 };
    }),
    { claimed: n, task: i }
  );
}
var fun = new RegExp(
  `^<${ju}>\\n<${eN}>([^<]+)</${eN}>` +
    [Aq, nF, V$e].map((e) => `(?:\\n<${e}>[^<]*</${e}>)?`).join("") +
    `\\n<${QS}>`
);
function Di({
  taskId: e,
  toolUseId: s,
  taskType: r,
  outputFile: n,
  status: i,
  summary: t,
  body: u,
  trailing: p
}) {
  let d = [
      [eN, e],
      [Aq, s],
      [nF, r],
      [V$e, n],
      [QS, i],
      [By, t]
    ],
    o = `<${ju}>`;
  for (let [a, T] of d)
    if (T)
      o += `
<${a}>${T}</${a}>`;
  return `${o}${u ?? ""}
</${ju}>${p ?? ""}`;
}
export { l_t, NQ, fun, Di };

//# sourceMappingURL=chunk-01qhvw6m.js.map
