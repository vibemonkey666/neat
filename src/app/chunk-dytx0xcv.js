// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qe, N } from "./chunk-fs43t96t.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { hb, Ktr, Dx, dnr } from "./chunk-ajtyjx88.js";
import { yr } from "./chunk-wr0p4ndg.js";
import { _c, TS } from "./chunk-j0tbz6ra.js";
var bso = "https://code.claude.com/docs/en/model-config",
  Sso = `${bso}#correct-the-window-for-a-gateway-or-custom-model-id`;
function ugs(o, e) {
  if ((t(`[autocompact] ${o.detail}`, { level: "warn" }), e.interactive)) return o;
  return (e.headless(o.text), null);
}
function fgs(o, e, n) {
  try {
    return u(o, e, n);
  } catch (d) {
    return (l(Qe(N(d), "unknown-model notice failed")), null);
  }
}
function u(o, e, n) {
  let { source: d, window: r } = TS(_c(o, n), e, n);
  if (d !== "unknown-model") return null;
  let m = dnr(o),
    a = i.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (m && a !== void 0 && a > 0) return null;
  let w = r < 1e6,
    s = [];
  if (!Dx() && w) s.push("append [1m] to the model name for 1M");
  if (m) s.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  let c = s.length > 0 ? `; if the model accepts ${w ? "more" : "less"}, ${s.join(", or ")}` : "";
  return {
    model: o,
    window: r,
    text: `Claude Code doesn't recognize the model "${hb(o)}", so it assumes a context window of ${yr(r)} tokens. Update Claude Code, or see ${Sso} to set the window.`,
    detail: `${Ktr(o)} Until then auto-compact keeps this session within ${yr(r)} tokens (the context window it assumes)${c}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.`
  };
}
export { bso, Sso, ugs, fgs };

//# sourceMappingURL=chunk-dytx0xcv.js.map
