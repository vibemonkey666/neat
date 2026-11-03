// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke } from "./chunk-wrtp8qz8.js";
import { p } from "./chunk-qmkm2x59.js";
import { D2, H2 } from "./chunk-bha6jwbq.js";
import { M2 } from "./chunk-seveay88.js";
import { CFe } from "./chunk-47t8hb7d.js";
import { M, u, Ue, A } from "./chunk-0bqrj5ah.js";
var i = "anthropic/renderUnderSessionRules";
function Hvi() {
  return { experimental: { [i]: { v: 1 } } };
}
var z = p(() => u({ experimental: u({ [i]: u({ v: A(1) }) }) }));
var a = p(() =>
  Ue({
    v: A(1),
    permissionContext: D2(),
    offersHandOff: M(),
    classifiesEveryCall: M(),
    grantsApply: M()
  })
);
function YJr(r, n, t) {
  let e = H2(r) ? void 0 : a().safeParse(r).data;
  if (e === void 0 || n === void 0) return;
  let { mode: s, ...o } = e.permissionContext;
  if (
    !(
      s === "default" ||
      s === "dontAsk" ||
      s === "acceptEdits" ||
      (s === "auto" && e.offersHandOff)
    ) ||
    Object.values(o.alwaysAllowRules).some((l) => l.length > 0) ||
    o.strippedDangerousRules !== void 0 ||
    o.additionalWorkingDirectories.$map.length > 0 ||
    o.trustedNetworkDirectories !== void 0
  )
    return;
  return {
    offersHandOff: e.offersHandOff,
    classifiesEveryCall: e.classifiesEveryCall,
    toolPermissionContext: {
      ...CFe(M2(e.permissionContext, n, ke(), t)),
      ...(!e.grantsApply && { pollEventDeliveryGuard: !0 })
    }
  };
}
export { Hvi, YJr };

//# sourceMappingURL=chunk-17n5qmhn.js.map
