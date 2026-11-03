// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { Mc, sQn } from "./chunk-wany0nxw.js";
import { uq } from "./chunk-errevp3y.js";
import { o, oe, u, A } from "./chunk-0bqrj5ah.js";
var Ove = "anthropic/devicePassthrough",
  rhi = ["get_device_info", "device_bash", "list_devices", "sync_files"],
  r = "Claude_Browser__",
  n = 128,
  Wvr = 1,
  _ = p(() => u({ v: A(Wvr), tool: o().min(1).max(n), target: oe().optional() }));
function u7t(t) {
  let e = _().safeParse(t);
  if (!e.success) return;
  let s = sQn(e.data.target);
  return s === void 0 ? void 0 : { v: e.data.v, tool: Mc(e.data.tool, n), target: s };
}
var a = rhi.map(uq),
  c = `${uq(r)}_`;
function i(t) {
  let e = `${uq(t)}_`;
  return a.some((s) => e.startsWith(`${s}_`));
}
var E = new Set([
    "computer_request_access",
    "computer_request_full_control",
    "device_request_folder_access",
    "device_request_delete_permission"
  ]),
  l = "device_bash";
function Gvr(t) {
  let e = t.lastIndexOf("__"),
    s = e === -1 ? t : t.slice(e + 2);
  return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access");
}
function bBe(t) {
  return !i(t) && !`${uq(t)}_`.startsWith(c) && !Gvr(t);
}
export { Ove, rhi, Wvr, u7t, Gvr, bBe };

//# sourceMappingURL=chunk-qy6y62kt.js.map
