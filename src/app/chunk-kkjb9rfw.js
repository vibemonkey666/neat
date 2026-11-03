// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { g, f } from "./chunk-brszmkb3.js";
import { EL, lne, sG, FN } from "./chunk-j0tbz6ra.js";
import { Oae } from "./chunk-xpkw9eye.js";
async function P8e() {
  (EL(), FN(), lne(), sG.emit());
  try {
    (await Oae.rehome(), g("skill_directory_reload"));
  } catch (r) {
    (t(
      `directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,
      { level: "error" }
    ),
      f("skill_directory_reload", "rehome_failed"));
  }
}
export { P8e };

//# sourceMappingURL=chunk-kkjb9rfw.js.map
