// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-95k4nfdh.js";
import "./chunk-awy6yynp.js";
import { pn } from "./chunk-0evsancd.js";
async function i(r, s) {
  let t = o(r.remote, r.inputPrompt);
  if (t === null)
    return pn(
      "Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin."
    );
  let { runHeadlessCloudPrint: e } = await import("./chunk-6ev3056v.js");
  return e(r, s, { prompt: t, outputFormat: r.outputFormat === "json" ? "json" : "text" });
}
function o(r, s) {
  let t = [r ?? "", typeof s === "string" ? s : ""].filter((e) => e.trim() !== "");
  return t.length === 0
    ? null
    : t.join(`
`);
}
export { i as runHeadlessCloudPrintArm };

//# sourceMappingURL=chunk-k87qsxba.js.map
