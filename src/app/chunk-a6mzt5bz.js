// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import { l } from "./chunk-ewvf3tep.js";
import { iMo, aMo, lMo } from "./chunk-6h7ejyet.js";
function qve(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return {
      ...(iMo(o) && { only_refused_by: b("windows_profile_on_mount_without_drive") }),
      ...(aMo(o) && { on_volume_mounted_twice: !0 }),
      ...(lMo(o) && { mount_source_unread: !0 })
    };
  } catch (r) {
    return (l(N(r)), {});
  }
}
export { qve };

//# sourceMappingURL=chunk-a6mzt5bz.js.map
