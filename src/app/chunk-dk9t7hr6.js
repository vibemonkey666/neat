// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N } from "./chunk-fs43t96t.js";
import { g, f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Re, uI, ue } from "./chunk-ajtyjx88.js";
function yMt() {
  try {
    return !1;
  } catch (e) {
    return (l(N(e)), !1);
  }
}
var r = 20,
  a = r + 1,
  Zks = 10,
  _ = 1209600000,
  zmo = [
    { text: "Showing fewer prompt suggestions" },
    { text: " \xB7 use one to bring them back", dim: !0 }
  ];
function aEr() {
  let e = ue();
  if (s(e) < r) return !1;
  if (i.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === !0) return !1;
  if (yMt()) return !1;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return !1;
  return !0;
}
function O7t(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, !1);
    return;
  }
  if (!n || s(ue()) >= r) return;
  if ((n.unusedInARow++, n.unusedInARow >= r)) ((n.unusedInARow = 0), Re(S, o));
}
function eTs(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, !0);
}
function Kmo(e) {
  if (!p(ue()) || !aEr()) return !1;
  return (
    Re((o) => (p(o) ? { ...o, promptSuggestionUnusedStreak: a } : o), e),
    g("prompt_suggestion_back_off_notice"),
    !0
  );
}
function m(e, o) {
  let n = s(ue());
  if (n === 0) return;
  if (!aEr()) {
    Re(d, e);
    return;
  }
  let c = { was_notice_claimed: n === a, via_config_toggle: o };
  uI(d, e)
    .then((u) => {
      if (u) g("prompt_suggestion_back_off_end", c);
      else f("prompt_suggestion_back_off_end", "reset_unconfirmed", c);
    })
    .catch((u) =>
      t(`Prompt suggestion back-off: could not log the end event: ${u}`, { level: "error" })
    );
}
function d(e) {
  return s(e) === 0 ? e : { ...e, promptSuggestionUnusedStreak: 0 };
}
function S(e) {
  return s(e) >= r ? e : { ...e, promptSuggestionUnusedStreak: r };
}
function p(e) {
  let o = s(e);
  return o >= r && o !== a;
}
function s(e) {
  let o = e.promptSuggestionUnusedStreak;
  return typeof o === "number" && Number.isFinite(o) ? o : 0;
}
export { yMt, Zks, zmo, aEr, O7t, eTs, Kmo };

//# sourceMappingURL=chunk-dk9t7hr6.js.map
