// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bNn } from "./chunk-ysc095aj.js";
import { l4, mte } from "./chunk-jgm16knw.js";
import "./chunk-xdj94kdv.js";
import { Ce } from "./chunk-a2y39866.js";
var o = Ce(bNn()),
  p = Ce(l4()),
  r = Ce(mte());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(
      r.createOtlpHttpExportDelegate(
        r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", {
          "Content-Type": "application/x-protobuf"
        }),
        p.ProtobufMetricsSerializer
      ),
      e
    );
  }
}
export { t as OTLPMetricExporter };

//# sourceMappingURL=chunk-p02hybsn.js.map
