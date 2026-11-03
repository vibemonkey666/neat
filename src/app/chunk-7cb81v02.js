// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vzn, LTo } from "./chunk-j0tbz6ra.js";
import { randomUUID as n } from "crypto";
function $Be(t) {
  let e = LTo(t, vzn(t, t));
  return e === null ? t : [...t, r(e)];
}
var Wgo = (t) => r(LTo(t, vzn(t, t)) ?? { type: "session_cron_carry", tasks: [] }),
  r = (t) => ({
    attachment: t,
    type: "attachment",
    uuid: n(),
    timestamp: new Date().toISOString()
  });
export { $Be, Wgo };

//# sourceMappingURL=chunk-7cb81v02.js.map
