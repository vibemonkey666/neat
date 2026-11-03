// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bNn } from "./chunk-ysc095aj.js";
import { b7t } from "./chunk-5eszd53b.js";
import { l4 } from "./chunk-jgm16knw.js";
import "./chunk-xdj94kdv.js";
import { x } from "./chunk-a2y39866.js";
var u = x(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  i.OTLPMetricExporter = void 0;
  var o = bNn(),
    e = b7t(),
    c = l4();
  class p extends o.OTLPMetricExporterBase {
    constructor(t) {
      super(
        e.createOtlpGrpcExportDelegate(
          e.convertLegacyOtlpGrpcOptions(t ?? {}, "METRICS"),
          c.ProtobufMetricsSerializer,
          "MetricsExportService",
          "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"
        ),
        t
      );
    }
  }
  i.OTLPMetricExporter = p;
});
var _ = x(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  r.OTLPMetricExporter = void 0;
  var l = u();
  Object.defineProperty(r, "OTLPMetricExporter", {
    enumerable: !0,
    get: function () {
      return l.OTLPMetricExporter;
    }
  });
});
export default _();

//# sourceMappingURL=chunk-v74e52zr.js.map
