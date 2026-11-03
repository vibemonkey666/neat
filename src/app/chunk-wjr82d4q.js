// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { i } from "./chunk-cj37hmns.js";
import { qfe, g2 } from "./chunk-4nzy53ma.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { a } from "./chunk-4cgvah10.js";
import { Un, hM } from "./chunk-7c3thgax.js";
import { k } from "./chunk-ajtyjx88.js";
import { kre } from "./chunk-bbw420pv.js";
import { z } from "./chunk-p197ae0z.js";
function M7t() {
  return hM("feedbackDrafts")[0] ?? "notify";
}
function Vmo() {
  if (kre() !== null) return !1;
  if (qfe()) return !1;
  if (g2()) return !1;
  if (Ae() !== "firstParty") return !1;
  let e = i.CLAUDE_CODE_SEND_FEEDBACK;
  if (e === !1) return !1;
  if (e === !0) return k("tengu_juniper_relay", !1);
  return k("tengu_juniper_relay", !1);
}
function c4() {
  return M7t() !== "off" && Vmo();
}
function NNn(e, { storageV5: t, via: r }) {
  let n =
    z() && t !== void 0
      ? Un("userSettings", { feedbackDrafts: e }, void 0, t)
      : Un("userSettings", { feedbackDrafts: e });
  return (a("tengu_feedback_drafts_setting_changed", { value: c(e), via: c(r) }), n);
}
export { M7t, Vmo, c4, NNn };

//# sourceMappingURL=chunk-wjr82d4q.js.map
