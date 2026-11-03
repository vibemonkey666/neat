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
var e = Ce(s3()),
  o = Ce(l4()),
  r = Ce(mte());
class t extends e.OTLPExporterBase {
  constructor(p = {}) {
    super(
      r.createOtlpHttpExportDelegate(
        r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", {
          "Content-Type": "application/x-protobuf"
        }),
        o.ProtobufTraceSerializer
      )
    );
  }
}
export { t as OTLPTraceExporter };

//# sourceMappingURL=chunk-tp5t5jbp.js.map
