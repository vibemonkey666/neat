// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { $j } from "./chunk-jwqtbev0.js";
import { Oe } from "./chunk-j0tbz6ra.js";
import { Yu, WJe } from "./chunk-yyq6mj0n.js";
import { fIe } from "./chunk-ck8hzf69.js";
import { cs } from "./chunk-eacq4pgt.js";
function cbr(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (n) => ({ ...n, messages: WJe(n.messages, a) }));
}
function WIt(e, a, s, n) {
  let o = s.get(e);
  if (!o || cs(o.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${o?.status}"`);
    return;
  }
  (s.update(e, (r) => ({
    ...r,
    pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: n }]
  })),
    s.updateTranscript(e, (r) => ({
      ...r,
      messages: WJe(r.messages, Oe({ content: a, origin: n }))
    })));
}
function sdo(e, a) {
  let s = a.get(e);
  if (!Yu(s) || !s.awaitingPlanApproval) return;
  (a.update(e, (n) => ({ ...n, awaitingPlanApproval: !1, pendingPlanApproval: void 0 })),
    WIt(e, "The person moved you out of plan mode. Continue your work.", a, {
      kind: "task-notification"
    }));
}
function ido(e, a, s) {
  let n = fIe($j(a, s), e);
  if (n?.status === "running") n.retryWake?.emit();
}
export { cbr, WIt, sdo, ido };

//# sourceMappingURL=chunk-88y2srrb.js.map
