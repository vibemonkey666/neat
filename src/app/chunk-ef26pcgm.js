// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { kVe, TVe, Cs } from "./chunk-ajtyjx88.js";
import { pe, pr } from "./chunk-7c3thgax.js";
import { dEn, MZ, est } from "./chunk-7zgz07kc.js";
function zUe() {
  let e = TVe("proxyAuthHelper", (pr() || {}).proxyAuthHelper),
    r = MZ() !== e;
  if (
    (dEn({
      helper: e,
      fromProjectOrLocal:
        pe("projectSettings")?.proxyAuthHelper === e ||
        pe("localSettings")?.proxyAuthHelper === e ||
        kVe("proxyAuthHelper"),
      trustAccepted: Cs
    }),
    r)
  )
    est();
}
export { zUe };

//# sourceMappingURL=chunk-ef26pcgm.js.map
