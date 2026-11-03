// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { is } from "./chunk-2qx8pe6s.js";
var g = /^[A-Za-z0-9][A-Za-z0-9-]*$/,
  a = new Set(["restricted"]),
  Kfs = ["system-prompt-file", "append-system-prompt-file", "append-subagent-system-prompt-file"];
function AA(t, e) {
  return `${t}=${e}`;
}
function thr(t, e) {
  let n = String(e);
  if (n.length > 1 && n.startsWith("-")) return [AA(t, n)];
  return [t, n];
}
function i9t(t, e, n) {
  t.push(...thr(`--${e}`, n));
}
function QIn(t, e, n, o) {
  let i = 0;
  for (let [r, s] of Object.entries(e)) {
    if (!g.test(r)) {
      o("malformed", JSON.stringify(r));
      continue;
    }
    if (n.has(r)) {
      o("blocked", r);
      continue;
    }
    if (a.has(r)) {
      if (!is(String(s))) (t.push(`--${r}`), i++);
      continue;
    }
    if (s !== "") (i9t(t, r, s), i++);
  }
  return i;
}
export { Kfs, AA, thr, i9t, QIn };

//# sourceMappingURL=chunk-dt93rvn7.js.map
