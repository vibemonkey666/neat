// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, Nxe } from "./chunk-wrtp8qz8.js";
import { OLe, Ewt, hKe, kwt, Twt } from "./chunk-p27rr8yn.js";
import { _U } from "./chunk-bbw420pv.js";
import { j9n } from "./chunk-d5zj5299.js";
import { W4, xXe, E0t, EMe, NK, D_ } from "./chunk-j0tbz6ra.js";
import { OZe } from "./chunk-b6tgsycv.js";
import { s1 } from "./chunk-dx5awfq0.js";
import { fxn } from "./chunk-72jty5mk.js";
import { Jwe } from "./chunk-5atvhy8m.js";
import { Q2e } from "./chunk-2a5hfwr3.js";
function L6t(e, o, t, i) {
  (s1("conversation_reset"),
    _U("conversation_reset"),
    D_(NK),
    kwt(),
    hKe(),
    OLe(),
    Twt(),
    Ewt(),
    OZe());
  let r = q();
  for (let s of Q2e(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  (t(),
    xXe(),
    e.markConversationRemote?.(),
    j9n(e.readFileState),
    W4(e.memorySelector),
    Nxe(),
    EMe(o),
    fxn(
      i,
      r,
      o.map((s) => s.uuid)
    ),
    e.applyMessageOp({ type: "replace-all", messages: E0t(o) }),
    Jwe(!0));
}
export { L6t };

//# sourceMappingURL=chunk-ccdartzh.js.map
