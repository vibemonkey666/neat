// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function El(e, t) {
  return { code: "InvalidArgument", argument: e, ...(t !== void 0 && { reason: t }) };
}
function Qkn(e = "unknown", t) {
  return {
    code: "Unavailable",
    failureClass: e,
    ...(t?.key !== void 0 && { key: t.key }),
    ...(t?.retryAfterMs !== void 0 && { retryAfterMs: t.retryAfterMs }),
    ...(t?.telemetryCode !== void 0 && { telemetryCode: t.telemetryCode })
  };
}
var Zkn = "OtherNames";
var eTn = "LeafMoved",
  Mpi = "HardeningUnavailable",
  Jes = "RemoteLink",
  Dpi = "AsideStranded";
var A9r = "Unsupported";
function aCt(e) {
  return Oxe(e) && e.code === "Failed" && e.telemetryCode === A9r;
}
var n = "ByteViewUnsupported";
function mYt(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n;
}
var r = "StoreFenced";
function Qes(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r;
}
var Hpi = "SourceNotRegular",
  Lpi = "SourceTooLarge",
  Npi = "SourceShared",
  $pi = "SourceOutside";
var o = new Set([
  "InvalidArgument",
  "NotFound",
  "AlreadyExists",
  "PreconditionFailed",
  "LeaseHeld",
  "Unavailable",
  "Failed",
  "ScopeNotFound"
]);
function Oxe(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "code" in e &&
    typeof e.code === "string" &&
    o.has(e.code)
  );
}
var Zes = "AbsentParent";
function cit(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === Zes;
}
function Zm(e) {
  if (cit(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}
var Fpi = "TooLarge";
function vt(e) {
  return (
    e.code +
    ("failureClass" in e ? ` ${e.failureClass}` : "") +
    ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") +
    ("cause" in e && e.cause ? `: ${i(e.cause)}` : "")
  );
}
function i(e) {
  return e instanceof Error ? e.message : String(e);
}
export {
  El,
  Qkn,
  Zkn,
  eTn,
  Mpi,
  Jes,
  Dpi,
  A9r,
  aCt,
  mYt,
  Qes,
  Hpi,
  Lpi,
  Npi,
  $pi,
  Oxe,
  Zes,
  cit,
  Zm,
  Fpi,
  vt
};

//# sourceMappingURL=chunk-dsrz10z8.js.map
