// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { sGs, uGs } from "./chunk-6h7ejyet.js";
import { Hie } from "./chunk-pgs8pdm2.js";
function oRt({ sessionId: t, getAccessToken: s, fetchSession: i, initial: e, createOrigin: d }) {
  if (!Hie()) return;
  let n = !1,
    r = (o) => sGs(o, n);
  return uGs({ ...(e && { initial: e.then(r) }), read: () => i(t, { accessToken: s() }).then(r) });
}
export { oRt };

//# sourceMappingURL=chunk-31h8fs6m.js.map
