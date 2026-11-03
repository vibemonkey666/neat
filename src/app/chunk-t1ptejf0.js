// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { isAbsolute as n, relative as o, sep as s } from "path";
function Up(r, i, e) {
  let t = o(r, i);
  if (t === "") return e;
  return t !== ".." && !t.startsWith(`..${s}`) && !n(t);
}
export { Up };

//# sourceMappingURL=chunk-t1ptejf0.js.map
