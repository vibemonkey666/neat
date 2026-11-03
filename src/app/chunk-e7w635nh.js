// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { qe, rbe } from "./chunk-0np0053t.js";
import { Bd, Ue } from "./chunk-0bqrj5ah.js";
function jWr(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6;
}
var XWt = {
    first: 5,
    permissionRequestRenames: 6,
    readAllowLarge: 7,
    editOriginalFile: 8,
    containerSearchTools: 9,
    managedHookCall: 10,
    keptBackgroundCommands: 11,
    readCallsByToolUseId: 12,
    repoRulesReadHere: 13,
    repoRulesOnRenders: 14,
    repoRulesOnUploads: 15
  },
  r = Math.max(...Object.values(XWt)),
  d = { [qe]: { [rbe]: XWt.readAllowLarge } };
var qmn = { version: r, min_version: jWr(void 0, r) },
  Ymn = { version: qmn.version, min_version: 1 },
  JWt = p(() =>
    Ue({ version: Bd().min(1), min_version: Bd().min(1) }).refine(
      ({ version: e, min_version: n }) => n <= e
    )
  );
function SQn(e) {
  return JWt().safeParse(e).data;
}
function wQn(e, n) {
  if (n.version < e.min_version) return { kind: "peer_too_old" };
  return e.version < n.min_version
    ? { kind: "self_too_old" }
    : { kind: "agreed", version: Math.min(e.version, n.version) };
}
export { jWr, XWt, qmn, Ymn, JWt, SQn, wQn };

//# sourceMappingURL=chunk-e7w635nh.js.map
