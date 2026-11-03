// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { i } from "./chunk-cj37hmns.js";
import { Dp, lo, bO } from "./chunk-fnsjs1v2.js";
var s = "--inherit-permission-mode";
function t(e) {
  return e === s || e.startsWith(`${s}=`);
}
class m {
  mode;
}
var u = new W(() => new m());
function f() {
  return u.of(U().host);
}
function Fgs({ inheritPermissionModeCli: e, resolvedMode: n, storageV5: r }) {
  if (!e) return;
  ((f().mode = n), bO("--permission-mode", [s], n, void 0, r).catch((o) => l(o)));
}
async function Ugs(e) {
  let n = f(),
    r = n.mode;
  if (r === void 0) return;
  let o = i.CLAUDE_JOB_DIR;
  if (!o || i.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let d = await lo(o, e);
  if (!d?.respawnFlags) return;
  if (!d.respawnFlags.some(t)) {
    n.mode = void 0;
    return;
  }
  (await bO("--permission-mode", [s], r, void 0, e, void 0, (p) => p.some(t)), Dp(o));
  let a = await lo(o, e);
  if (a?.respawnFlags && !a.respawnFlags.some(t)) n.mode = void 0;
}
export { Fgs, Ugs };

//# sourceMappingURL=chunk-mfqw0a96.js.map
