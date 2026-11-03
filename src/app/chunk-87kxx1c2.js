// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Cn } from "./chunk-4kxznmzw.js";
import { at } from "./chunk-at88wjsn.js";
import { VL, ze } from "./chunk-1ww4jg8j.js";
import { qe } from "./chunk-0np0053t.js";
import { stripVTControlCharacters as i } from "util";
function XHt(t, e = 3) {
  let r = t.map((s) => Cn(i(s)).trim()),
    o = r.slice(0, e).join(", "),
    n = r.length - e;
  return n > 0 ? `${o} (${n} more)` : o;
}
function TCr(t = Number.POSITIVE_INFINITY) {
  try {
    if (!ze.isSandboxingEnabled()) return;
    let e = ze.getDeniesDroppedForAnotherHost();
    if (e.length === 0) return;
    let r = `The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${qe} rule or an ${at} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;
    return {
      issue: `Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${XHt(e, t)}`,
      fix: e.some((o) => o.endsWith(" from policySettings"))
        ? `${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.`
        : r
    };
  } catch (e) {
    VL(e, "deniesOnAnotherHostNotDescribed");
    return;
  }
}
function gvo() {
  let t = TCr(3);
  if (t)
    process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`);
}
export { XHt, TCr, gvo };

//# sourceMappingURL=chunk-87kxx1c2.js.map
