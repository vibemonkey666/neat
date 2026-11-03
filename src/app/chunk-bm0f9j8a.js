// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var n = new WeakMap();
var eVe = (o) => n.get(o);
function _ei(o) {
  let t = Object.values(o ?? {}).flatMap((r) => (r ?? []).flatMap((s) => (s.hooks ?? []).map(eVe))),
    [e] = t;
  return t.every((r) => r === e) ? e : void 0;
}
function i0e(o, t) {
  if (t === void 0) return;
  for (let e of Object.values(o)) for (let r of e ?? []) for (let s of r.hooks ?? []) n.set(s, t);
}
export { eVe, _ei, i0e };

//# sourceMappingURL=chunk-bm0f9j8a.js.map
