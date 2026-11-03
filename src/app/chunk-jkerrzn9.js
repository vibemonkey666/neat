// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { o_o } from "./chunk-dnprf49a.js";
import { t } from "./chunk-4kxznmzw.js";
import { zi } from "./chunk-ynkasage.js";
function wTi(e) {
  let r = zi(),
    d = r.lastSentPreferredDeviceId,
    i =
      r.browserHints !== void 0 &&
      r.browserHints.preferredDeviceId === void 0 &&
      d !== void 0 &&
      e.preferredDeviceId === d;
  ((r.lastSentPreferredDeviceId = e.preferredDeviceId),
    (r.browserHints =
      e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0
        ? void 0
        : i
          ? { ...e, preferredDeviceId: void 0 }
          : e),
    t(
      `[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`
    ));
  let n = r.bridgeBinding;
  if (
    n &&
    e.preferredDeviceId !== void 0 &&
    e.preferredDeviceId !== d &&
    n.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId
  )
    o_o(n.socketClient);
}
function Sco(e) {
  let r = zi(),
    d = r.browserHints;
  if (!d || d.preferredDeviceId === void 0 || d.preferredDeviceId === e) return;
  r.browserHints = { ...d, preferredDeviceId: void 0 };
}
function wco(e) {
  return zi().browserHints?.preferredDeviceId ?? e();
}
function vco() {
  let e = zi().browserHints;
  if (!e) return;
  return new Map(e.localDeviceIds.map((r) => [r, "live"]));
}
function Eco() {
  return zi().browserHints?.hostPlatform;
}
export { wTi, Sco, wco, vco, Eco };

//# sourceMappingURL=chunk-jkerrzn9.js.map
