// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b7t } from "./chunk-5eszd53b.js";
import { s3, l4 } from "./chunk-jgm16knw.js";
import "./chunk-xdj94kdv.js";
import { x } from "./chunk-a2y39866.js";
var s = x(function (p) {
  Object.defineProperty(p, "__esModule", { value: !0 });
  p.OTLPTraceExporter = void 0;
  var e = b7t(),
    t = l4(),
    o = s3();
  class c extends o.OTLPExporterBase {
    constructor(u = {}) {
      super(
        e.createOtlpGrpcExportDelegate(
          e.convertLegacyOtlpGrpcOptions(u, "TRACES"),
          t.ProtobufTraceSerializer,
          "TraceExportService",
          "/opentelemetry.proto.collector.trace.v1.TraceService/Export"
        )
      );
    }
  }
  p.OTLPTraceExporter = c;
});
var l = x(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  r.OTLPTraceExporter = void 0;
  var i = s();
  Object.defineProperty(r, "OTLPTraceExporter", {
    enumerable: !0,
    get: function () {
      return i.OTLPTraceExporter;
    }
  });
});
export default l();

//# sourceMappingURL=chunk-5t1va11j.js.map
