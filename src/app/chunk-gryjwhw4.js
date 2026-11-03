// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N } from "./chunk-fs43t96t.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ch, Mjs } from "./chunk-6h7ejyet.js";
function HZr() {
  let t,
    o = !1,
    r = () => {
      if (Ch())
        ((o = !0),
          import("./chunk-tma1z7vf.js")
            .then(({ createRemoteToolHostsRuntime: e }) => {
              t = e();
            })
            .catch((e) => {
              (l(N(e)), (o = !1));
            }));
    },
    i = void 0;
  if (
    (Mjs({
      get remote() {
        if (!o) r();
        return t;
      },
      ...(i !== void 0 && { loopbackDev: i })
    }),
    Ch())
  )
    r();
}
export { HZr };

//# sourceMappingURL=chunk-gryjwhw4.js.map
