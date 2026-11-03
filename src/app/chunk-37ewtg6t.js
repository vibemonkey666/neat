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
var u = x(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  s.OTLPLogExporter = void 0;
  var e = b7t(),
    t = l4(),
    o = s3();
  class p extends o.OTLPExporterBase {
    constructor(L = {}) {
      super(
        e.createOtlpGrpcExportDelegate(
          e.convertLegacyOtlpGrpcOptions(L, "LOGS"),
          t.ProtobufLogsSerializer,
          "LogsExportService",
          "/opentelemetry.proto.collector.logs.v1.LogsService/Export"
        )
      );
    }
  }
  s.OTLPLogExporter = p;
});
var n = x(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  r.OTLPLogExporter = void 0;
  var i = u();
  Object.defineProperty(r, "OTLPLogExporter", {
    enumerable: !0,
    get: function () {
      return i.OTLPLogExporter;
    }
  });
});
export default n();

//# sourceMappingURL=chunk-37ewtg6t.js.map
