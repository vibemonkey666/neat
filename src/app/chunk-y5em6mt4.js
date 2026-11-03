// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { fn } from "./chunk-h56pfqh7.js";
import { _6e } from "./chunk-rwaeax2b.js";
import { de, y, j } from "./chunk-bq35vvkw.js";
j();
function u(o, n, r) {
  return o.isWindowActivation || i(n, r);
}
function aw() {
  let o = fn(),
    [n] = y(() => o.now());
  return de(
    (r) => {
      let e = o.now();
      if (!u(r, n, e)) return !1;
      let c = r.isWindowActivation ? b("window_activation") : b("mount_settle");
      return (
        t(
          `Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${e - n}ms after mount`})`
        ),
        a("tengu_select_stray_click_dropped", { reason: c }),
        r.dropAsStray(),
        !0
      );
    },
    [o, n]
  );
}
function nPt() {
  let o = fn(),
    [n] = y(() => o.now());
  return de(() => i(n, o.now()), [o, n]);
}
function i(o, n) {
  return n - o < _6e;
}
export { aw, nPt };

//# sourceMappingURL=chunk-y5em6mt4.js.map
