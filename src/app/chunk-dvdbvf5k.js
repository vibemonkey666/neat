// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Tz, Az, i_, dh, cg, Hx } from "./chunk-ajtyjx88.js";
function n() {
  let e = i_();
  if (e === "opus" && Tz() && !Hx(dh()))
    return { alias: "opus[1m]", name: "Opus 1M", multiplier: 5 };
  else if (e === "sonnet" && Az() && !Hx(cg()))
    return { alias: "sonnet[1m]", name: "Sonnet 1M", multiplier: 5 };
  return null;
}
function dve(e) {
  let t = n();
  if (!t) return null;
  switch (e) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null;
  }
}
var EJt = "No messages to compact",
  MHn = "Compaction failed \xB7 conversation could not be reduced below the context limit",
  DHn = "Compaction failed \xB7 attached media exceeds size limits",
  kJt = "Error during compaction: ";
export { dve, EJt, MHn, DHn, kJt };

//# sourceMappingURL=chunk-dvdbvf5k.js.map
