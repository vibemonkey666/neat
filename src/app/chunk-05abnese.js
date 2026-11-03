// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ns } from "./chunk-5rw2zfa0.js";
import { Iyn, zk, Oyn } from "./chunk-pbffp8rf.js";
import { Qn } from "./chunk-n35x7axc.js";
var ave = "cc-plugin-you-should-know";
var Bbr = {
  id: "you-should-know-plugin",
  providerAgnostic: !0,
  advertisedCommand: "plugin",
  cooldownSessions: 10,
  maxLifetimeShows: 3,
  content: async (
    o
  ) => `Want a side agent watching your back while Claude works? Turn on You should know:
${Qn("suggestion", o.theme)(`/plugin enable ${ave}@${Ns}`)}`,
  isRelevant: async () =>
    Iyn(ave) && zk(ave)?.defaultEnabled === !1 && Oyn(`${ave}@${Ns}`) === void 0
};
export { ave, Bbr };

//# sourceMappingURL=chunk-05abnese.js.map
