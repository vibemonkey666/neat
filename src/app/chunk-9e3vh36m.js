// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Dq } from "./chunk-wrtp8qz8.js";
import { k } from "./chunk-ajtyjx88.js";
import { Q0 } from "./chunk-4nzy53ma.js";
import { vf } from "./chunk-6z6dbjsw.js";
import { Rde, Jhe, $Ks } from "./chunk-dbyrbarz.js";
function Vin() {
  return Q0() && !vf().backgroundDeadlineDisabled;
}
function tIo() {
  return Vin() && k("tengu_cosmic_shore", !0);
}
var o = 600000;
function qin() {
  return Dq() ? Math.max(o, Rde()) : $Ks();
}
function OHr(e) {
  return tIo() ? Yin(e) : void 0;
}
function Yin(e) {
  return Math.min(e ?? qin(), Jhe());
}
function DVn() {
  return Vin()
    ? `Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${qin()} ms, max ${Jhe()} ms).`
    : "Set to true to run this command in the background.";
}
function HVn() {
  return Vin()
    ? ` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${qin()}ms / ${Math.round(qin() / 60000)} minutes, max ${Jhe()}ms / ${Math.round(Jhe() / 3600000)} hours); at that limit it is stopped${vf().backgroundShellsKeptElsewhere ? "" : " and you are notified"}.`
    : "";
}
var bFs = ["user", "classifier", "auto_mode", "hook"];
function nIo(e) {
  let n = e.behavior === "allow" ? e.decisionReason : void 0;
  switch (n?.type) {
    case "permissionPromptTool":
      return "user";
    case "classifier":
      return n.classifier === "auto-mode" && n.classifierAllowed === !0 ? "classifier" : void 0;
    case "mode":
      return n.mode === "auto" && n.denialLimitRun !== !0 && n.scriptCheckDeferred !== !0
        ? "auto_mode"
        : void 0;
    case "hook":
      return "hook";
    default:
      return;
  }
}
export { Vin, tIo, qin, OHr, Yin, DVn, HVn, bFs, nIo };

//# sourceMappingURL=chunk-9e3vh36m.js.map
