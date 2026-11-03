// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { jQ, HO } from "./chunk-1ww4jg8j.js";
var e = {
  disabled:
    "The Windows Secondary Logon service (seclogon) is disabled; an administrator must set its startup type to Manual (`sc.exe config seclogon start= demand`). The sandbox cannot start without it.",
  missing:
    "The Windows Secondary Logon service (seclogon) is not present on this machine; the sandbox cannot start without it."
};
function wjn(n) {
  return n?.seclogon === "disabled" || n?.seclogon === "missing" ? e[n.seclogon] : void 0;
}
async function vjn() {
  if (O() !== "windows") return;
  let n = await jQ({ srtWin: HO() }).catch((o) => {
    t(`[sandbox] could not read the sandbox status: ${d(o)}`, { level: "error" });
    return;
  });
  return wjn(n?.user);
}
export { wjn, vjn };

//# sourceMappingURL=chunk-kngqmjg3.js.map
