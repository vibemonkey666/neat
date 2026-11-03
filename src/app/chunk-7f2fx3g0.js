// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qf } from "./chunk-cj37hmns.js";
import { WQo } from "./chunk-7zgz07kc.js";
function hBo(s, e, o) {
  let n = WQo(s, o);
  if (!n) return;
  let { tls: r, ...t } = e ?? {},
    d = e?.proxy === void 0 && e?.unix === void 0 ? t : e;
  return (i) => n.fetch(i, d);
}
function A9n(s, e, o) {
  let n = e.proxy === void 0 && o?.() ? hBo("ccr", e, void 0) : void 0;
  return n ? n(s) : fetch(s, e);
}
export { hBo, A9n };

//# sourceMappingURL=chunk-7f2fx3g0.js.map
