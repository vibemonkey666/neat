// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { ye, Pn } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
var e = {
    type: "local-jsx",
    name: "goal",
    description: "Set a goal Claude checks before stopping",
    argumentHint: "[<condition> | clear]",
    immediate: !0
  },
  o = {
    type: "local",
    name: "goal",
    supportsNonInteractive: !0,
    thinClientDispatch: "post-text",
    description: "Set a goal \u2014 keep working until the condition is met",
    get isHidden() {
      return !ye();
    },
    isEnabled: () => ye() || Pn(),
    load: () => import("./chunk-dhgk980f.js")
  },
  n = e;
export { n as default, o as goalNonInteractive };

//# sourceMappingURL=chunk-gz2xf6vs.js.map
