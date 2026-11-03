// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z } from "./chunk-p27rr8yn.js";
import { randomUUID as s } from "crypto";
var m = 256;
function W0n(e = s(), t) {
  if (t !== void 0) {
    let o = Z().laneNoticeSlugs;
    (o.set(e, t), r(o));
  }
  return e;
}
function WEs(e) {
  return Z().laneNoticeSlugs.get(e);
}
function GEs(e, t, o) {
  let n = Z(),
    i = Date.now();
  if (e !== void 0) (n.commentReads.set(e, { slug: t, ownWordsOnly: o }), r(n.commentReads));
  if (
    (n.commentReadAtBySlug.delete(t),
    n.commentReadAtBySlug.set(t, i),
    r(n.commentReadAtBySlug) || !o)
  )
    n.lastOthersCommentReadAt = i;
}
function zEs(e) {
  return Z().commentReads.get(e);
}
function G0n(e, t) {
  for (let [o, n] of Z().commentReadAtBySlug)
    if (o !== e && !(Number.isFinite(t) && n < t)) return !0;
  return !1;
}
function z0n() {
  return Z().lastOthersCommentReadAt;
}
function r(e) {
  if (e.size <= m) return !1;
  let t = e.keys().next().value;
  if (t !== void 0) e.delete(t);
  return !0;
}
export { W0n, WEs, GEs, zEs, G0n, z0n };

//# sourceMappingURL=chunk-ajn1cnw7.js.map
