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
import { ad, lo, Wa, RE } from "./chunk-fnsjs1v2.js";
import { _ye } from "./chunk-dysx3hgk.js";
async function VHn(r, o) {
  if (!_ye()) return;
  try {
    let e = await lo(r, o);
    if (!e || !Wa(e) || e.state === "stopped" || RE(e)) return;
    await ad(r, { ...e, state: "stopped", updatedAt: new Date().toISOString() }, o);
  } catch (e) {
    t(`stop not recorded on the job's row: ${d(e)}`, { level: "error" });
  }
}
export { VHn };

//# sourceMappingURL=chunk-yfha6bzq.js.map
