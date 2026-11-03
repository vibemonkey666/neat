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
import { f3s } from "./chunk-vn4qkmxw.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { Ade } from "./chunk-tsf65jkw.js";
import { pcn } from "./chunk-taha171j.js";
import { nye } from "./chunk-80t8235z.js";
import { DS } from "./chunk-y609bddh.js";
function n() {
  try {
    return Ade() && pcn();
  } catch (r) {
    return (l(N(r)), !0);
  }
}
function yL(r) {
  try {
    let o = Ie(),
      e = o.hookRegistrationEpoch !== r.epoch || o.loadedModules !== r.modules;
    return r.wasUnknown || n() || (e && nye() && pcn());
  } catch (o) {
    return (l(N(o)), !0);
  }
}
function r1() {
  let r = Ie();
  return { wasUnknown: n(), epoch: r.hookRegistrationEpoch, modules: r.loadedModules };
}
function c8e({ isRunReached: r }) {
  try {
    return (
      n() ||
      Ie().loadedModules.some(
        (o) =>
          !DS(o) &&
          f3s(o.args.pluginStorageId) &&
          (o.hooks("prompt.submit") || (!r && o.hooks("command.run")))
      )
    );
  } catch (o) {
    return (l(N(o)), !0);
  }
}
export { yL, c8e, r1 };

//# sourceMappingURL=chunk-rntn87dm.js.map
