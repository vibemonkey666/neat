// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { de, P, y, j } from "./chunk-bq35vvkw.js";
j();
function mE(r) {
  let [t, n] = y({ attempts: 0, refused: null }),
    s = de((e) => {
      n((a) => ({ attempts: a.attempts + 1, refused: e }));
    }, []),
    u = de(
      (e) => {
        if (r(e) === !1) return (s(e), !1);
        return !0;
      },
      [r, s]
    );
  return (
    P(() => {
      if (t.refused !== null) n((e) => ({ attempts: e.attempts, refused: null }));
    }, [t.refused]),
    { answer: u, refuse: s, refused: t.refused, attempts: t.attempts }
  );
}
export { mE };

//# sourceMappingURL=chunk-mnrc938a.js.map
