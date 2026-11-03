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
import { wr } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { XQo, JQo, mci } from "./chunk-nrysaqwk.js";
import { uci } from "./chunk-gvf25gp4.js";
async function LGt(e, r = {}) {
  try {
    if (!wr()) {
      if (!i.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await XQo(e);
      (await JQo(e), await mci(e));
    }
    await uci(e);
  } catch (o) {
    t(`Descriptor credential prime failed (non-fatal): ${d(o)}`, { level: "error" });
  }
}
export { LGt };

//# sourceMappingURL=chunk-x00h1pmd.js.map
