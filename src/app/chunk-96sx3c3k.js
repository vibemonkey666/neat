// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { kbn, uRe, LKt, dI, ue } from "./chunk-ajtyjx88.js";
import { Ro } from "./chunk-1e5yp9hx.js";
import { mg, pe, Un } from "./chunk-7c3thgax.js";
var mCe = [
  "theme",
  "editorMode",
  "verbose",
  "preferredNotifChannel",
  "autoCompactEnabled",
  "autoScrollEnabled",
  "fileCheckpointingEnabled",
  "showTurnDuration",
  "showMessageTimestamps",
  "terminalProgressBarEnabled",
  "todoFeatureEnabled",
  "teammateMode",
  "remoteControlAtStartup",
  "autoUploadSessions",
  "inputNeededNotifEnabled",
  "agentPushNotifEnabled"
];
function js(n, i) {
  let o = Ro(),
    r = o.includes("userSettings") && mg();
  for (let e = o.length - 1; e >= 0; e--) {
    let t = o[e];
    if (t === "projectSettings" && r) continue;
    let s = pe(t)?.[n];
    if (s !== void 0) return { value: s, source: t };
  }
  if (mCe.includes(n)) {
    let e = n,
      t = ue()[e];
    if (t !== void 0 && t !== dI[e]) {
      let s = kbn(e) ? LKt(e, t) : uRe(e, t);
      if (s !== void 0) return { value: s, source: "legacyGlobalConfig" };
    }
  }
  return { value: i, source: "default" };
}
function r5(n, i, o) {
  Un("userSettings", { [n]: i }, void 0, o);
}
export { mCe, js, r5 };

//# sourceMappingURL=chunk-96sx3c3k.js.map
