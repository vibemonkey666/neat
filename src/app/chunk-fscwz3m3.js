// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Bc } from "./chunk-ajtyjx88.js";
import { ve } from "./chunk-vk5p9xv3.js";
var aco = Object.freeze({ isKept: !0, isDenied: !1, context: Object.freeze([]) });
function m() {
  let o = Bc();
  return {
    setPromptMentionRunner: o.set,
    runPromptMention: (r) => {
      let e = o.get();
      return e ? e(r) : r.read(r.raised, "unhooked").then(() => aco);
    }
  };
}
var t = ve(m(), (o) => o.setPromptMentionRunner(null));
var Fgi = t.runPromptMention;
var Ugi = t.setPromptMentionRunner;
export { aco, Fgi, Ugi };

//# sourceMappingURL=chunk-fscwz3m3.js.map
