// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ZXo } from "./chunk-5rw2zfa0.js";
import { Xkt, HNe, sfe } from "./chunk-7c3thgax.js";
function $Le() {
  if (!Xkt()) throw Error("the MDM settings have not been read yet");
  if (sfe()) throw Error("an admin-owned settings document could not be read");
  if (ZXo() !== void 0) throw Error("the managed-settings path was overridden");
  let e = HNe()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [e] : e;
}
export { $Le };

//# sourceMappingURL=chunk-ttxbg7sf.js.map
