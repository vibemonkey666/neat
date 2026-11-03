// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { Zo } from "./chunk-13nwb0xt.js";
import { Ec } from "./chunk-1fnv3zry.js";
import { hjt } from "./chunk-m5rm7nsm.js";
import { sep as i } from "path";
function nht(t) {
  if (J()) return null;
  let e = `${hjt()}${i}`,
    n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}
function TUs(t) {
  if (t?.file_path?.startsWith(Ec())) return "Reading Plan";
  if (t?.file_path && nht(t.file_path)) return "Read agent output";
  return "Read";
}
function RIo(t) {
  if (!t?.file_path) return null;
  let e = nht(t.file_path);
  if (e) return e;
  return Zo(t.file_path);
}
export { nht, TUs, RIo };

//# sourceMappingURL=chunk-3syhp75h.js.map
