// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { pu } from "./chunk-dggktcda.js";
import { Edo } from "./chunk-grs0nvea.js";
import { jm } from "./chunk-m83s757k.js";
import { Wi } from "./chunk-b6tgsycv.js";
import { c0 } from "./chunk-ctvsv6p4.js";
function kbr() {
  return [{ type: "text", text: Edo() }];
}
function zki() {
  Wi({
    name: c0,
    description: `Reference for writing a ${pu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
    menuDescription: "Load the reference for writing Workflow tool scripts",
    userInvocable: !0,
    isEnabled: () => jm(),
    async getPromptForCommand() {
      return kbr();
    }
  });
}
export { kbr, zki };

//# sourceMappingURL=chunk-qj5tfadd.js.map
