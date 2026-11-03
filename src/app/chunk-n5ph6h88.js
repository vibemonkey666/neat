// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, ci } from "./chunk-wrtp8qz8.js";
import { Pl } from "./chunk-xe386mry.js";
import { J7o, p8r } from "./chunk-dc0nzty2.js";
import { l } from "./chunk-ewvf3tep.js";
import { dsi } from "./chunk-at88wjsn.js";
async function tzr(r) {
  let e = L([ci(), Pl()]).filter((t) => t !== null);
  for (let t of e)
    try {
      let o = await J7o(r, t);
      if (o !== void 0) {
        let i = await dsi(t, o.gitRoot, r);
        if (typeof i === "string") p8r(i, o.gitRoot, o.canonicalRoot);
      }
    } catch (o) {
      l(o);
    }
}
export { tzr };

//# sourceMappingURL=chunk-n5ph6h88.js.map
