// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Hh } from "./chunk-ajtyjx88.js";
import { CP, Y4, jOr, Z4, tx } from "./chunk-j0tbz6ra.js";
import { ae } from "./chunk-ar6ynjt8.js";
async function vJt({ toolUseContext: e, forkContextMessages: o, mainThreadAgentDefinition: t }) {
  let { systemPrompt: s, userContext: m, systemContext: r } = jOr() ?? (await i(e, t));
  return {
    systemPrompt: s,
    userContext: m,
    systemContext: r,
    toolUseContext: e,
    forkContextMessages: o,
    advisorModel: e.getAdvisorSetting()
  };
}
async function i(e, o) {
  let [t, s, m] = await Promise.all([
    e.renderedSystemPrompt ?? n(e, o),
    tx(e.session, e.storageV5, e.credentials),
    Z4(e.session, e.options.cacheBreakerPhrase)
  ]);
  return { systemPrompt: t, userContext: s, systemContext: m };
}
async function n(e, o) {
  let t = ae(e),
    s = await CP(
      e.options.tools,
      Hh({ permissionMode: t.mode, mainLoopModel: e.options.mainLoopModel })
    );
  return Y4({
    mainThreadAgentDefinition: o,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt
  });
}
export { vJt };

//# sourceMappingURL=chunk-cey46yeg.js.map
