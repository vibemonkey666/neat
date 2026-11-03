// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { s3, l4, mte } from "./chunk-jgm16knw.js";
import "./chunk-xdj94kdv.js";
import { Ce } from "./chunk-a2y39866.js";
var t = Ce(s3()),
  e = Ce(l4()),
  o = Ce(mte());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(
      o.createOtlpHttpExportDelegate(
        o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", { "Content-Type": "application/json" }),
        e.JsonLogsSerializer
      )
    );
  }
}
export { r as OTLPLogExporter };

//# sourceMappingURL=chunk-e3bdw48v.js.map
