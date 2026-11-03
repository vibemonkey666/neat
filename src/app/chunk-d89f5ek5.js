// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { _Re } from "./chunk-at88wjsn.js";
import { o2 } from "./chunk-7zgz07kc.js";
var i = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function r(o, e) {
  let s = e?.baseURL,
    n = i.test(o),
    t = null;
  if (n && !o2(o)) t = o;
  else if (s != null && !o2(s)) t = s;
  else if (!n && s == null) t = o;
  if (t !== null)
    throw Error(
      `downloads: request (url="${o}"` +
        (s != null ? `, baseURL="${s}"` : "") +
        ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts."
    );
}
var IY = {
  get(o, e) {
    return (r(o, e), _Re(), Ht.get(o, e));
  }
};
export { IY };

//# sourceMappingURL=chunk-d89f5ek5.js.map
