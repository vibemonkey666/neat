// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { On } from "./chunk-5rw2zfa0.js";
import { Am } from "./chunk-d54avynm.js";
import { lV, xet } from "./chunk-p56qmwgb.js";
import { eje, Bv, Rd, I_, BA } from "./chunk-j0tbz6ra.js";
function d(e) {
  return e !== void 0 && Am(e)
    ? {
        kind: "unresolved",
        reason: "Its marketplace is a folder whose catalog could not be read, or lists it no more."
      }
    : { kind: "copy" };
}
async function IJr(e, o) {
  let [r, l] = await Promise.all([BA(e, o), Rd(o)]),
    n = l[On(e).marketplace ?? ""]?.source;
  if (r === null) return d(n);
  let { source: t } = r.entry,
    c = eje(t, n);
  if (typeof t !== "string" || !c) return { kind: "copy" };
  let i = I_(r.marketplaceInstallLocation) === void 0 ? "workspace" : "system",
    a = await lV(e, r.marketplaceInstallLocation, t, l, Bv(), o, i);
  return a.kind === "ok"
    ? { kind: "folder", path: a.entryPath }
    : { kind: "unresolved", reason: xet(a, r.marketplaceInstallLocation, t).message };
}
export { IJr };

//# sourceMappingURL=chunk-0gzc2q7a.js.map
