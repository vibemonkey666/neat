// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
var Kvr = "[3P telemetry] OTEL diag error:";
class Imo {
  error(r, ...e) {
    if (i.CLAUDE_CODE_OTEL_DIAG_STDERR)
      process.stderr.write(`${Kvr} ${r}
`);
    t(`${Kvr} ${r}`, { level: "error" });
  }
  warn(r, ...e) {
    t(`[3P telemetry] OTEL diag warn: ${r}`, { level: "warn" });
  }
  info(r, ...e) {
    return;
  }
  debug(r, ...e) {
    return;
  }
  verbose(r, ...e) {
    return;
  }
}
export { Kvr, Imo };

//# sourceMappingURL=chunk-qsxtzz8v.js.map
