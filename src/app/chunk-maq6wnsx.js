// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { eF } from "./chunk-4nzy53ma.js";
import { Wze } from "./chunk-f6febadb.js";
import { yu, YE, uR } from "./chunk-ajtyjx88.js";
import { sh } from "./chunk-ar6ynjt8.js";
class t {
  read = null;
  register(s) {
    this.read = s;
  }
  loaded() {
    if (this.read === null) Wze.loadWriters?.();
    return this.read;
  }
}
var gTr = new t();
function OCs(s) {
  gTr.register(s);
}
var uen = { suppressAlwaysAllowRule: !0, personOnly: !0, defaultToNo: !0, localDisplayOnly: !0 };
function fen(s) {
  let { decider: e, scheduledTrigger: i, replacedTurnStart: o } = uR(s.messages),
    r = e === null ? void 0 : s.messages[e.index],
    n = e === null ? o?.bySessionUsersOwnWords === !0 : r !== void 0 && yu(e.origin) && YE(r);
  return sh(s) ||
    (i && !n) ||
    e?.origin?.kind === "channel" ||
    (e?.origin?.kind === "peer" && e.origin.senderTaskId === void 0 && e.origin.selfSent !== !0) ||
    (yu(e?.origin) && !n) ||
    (o?.byHuman === !0 && !o.byHumanHere)
    ? {
        behavior: "deny",
        message:
          "The user's organization requires a person to approve each new artifact, and nobody can be asked here: permission prompts are off or bypassed, or a schedule or a message from outside this session started this turn. Nothing was created or published. Tell the user they can ask for it themselves in a session that shows permission prompts, and don't retry in this turn.",
        decisionReason: {
          type: "safetyCheck",
          reason: "Creating an artifact needs a person to approve it",
          classifierApprovable: !1
        }
      }
    : void 0;
}
function rUn(s) {
  let e = s.toolUseId === void 0 ? void 0 : s.toolDecisions?.get(s.toolUseId)?.source;
  return e === void 0 ? eF() : e === "user_temporary" || e === "user_permanent";
}
export { uen, fen, rUn, gTr, OCs };

//# sourceMappingURL=chunk-maq6wnsx.js.map
