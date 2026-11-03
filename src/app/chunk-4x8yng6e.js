// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Rr } from "./chunk-fs43t96t.js";
var O5t = {
    invalid_path: "sad",
    unsupported_name: "sad",
    symlink_in_path: "sad",
    path_not_canonical: "sad",
    read_rule: "sad",
    not_found: "sad",
    not_a_directory: "sad",
    os_permission_denied: "sad",
    workspace_moved: "bad",
    unexpected_error: "bad"
  },
  t = "list denied: ";
function fF(e, n) {
  return new Rr(`${t}${e}`, n, e);
}
function Zit(e) {
  if (!(e instanceof Rr)) return;
  let n = e.errorClass;
  return n !== void 0 && o(n) && e.message === `${t}${n}` ? n : void 0;
}
function o(e) {
  return Object.hasOwn(O5t, e);
}
export { O5t, fF, Zit };

//# sourceMappingURL=chunk-4x8yng6e.js.map
