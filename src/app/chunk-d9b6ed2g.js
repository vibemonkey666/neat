// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ke } from "./chunk-fs43t96t.js";
import { yi } from "./chunk-a16y5hcz.js";
import { f } from "./chunk-brszmkb3.js";
import { ar, wH, rB, Bz, eT, Dkt, Hkt, Zue, f_ } from "./chunk-r1dvrqha.js";
import { Z } from "./chunk-p27rr8yn.js";
import { fCe } from "./chunk-6dwr3g2n.js";
import { DF } from "./chunk-v3dqhn7m.js";
import { u1, pHt, Jg, _1e, vEe } from "./chunk-322wstk9.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { Ts } from "./chunk-s6nf0zf1.js";
var J0n = "__artifactCommentTarget",
  g = 120,
  C = 4000,
  T = 32;
function _(e, t) {
  return `${e}/${t}`;
}
function JQt(e) {
  return _1e(e)
    .replace(/[\n\t]/g, " ")
    .replace(Bz, " ")
    .replace(/\s+/g, " ")
    .replace(/"/g, "'")
    .replace(wH, "'")
    .replace(rB, "'")
    .trim();
}
function A(e, t) {
  let o = JQt(e);
  return Array.from(o).length > t ? `${DF(yi(o, t))}\u2026` : o;
}
function E(e, t, o) {
  let r = e.find((s) => s.id === t),
    n = r?.comments[0];
  if (r === void 0 || n === void 0 || r.commentsDegraded) return;
  let a = eT(A(n.text.replace(f_, " "), g))
    .replace(Zue, " ")
    .replace(Dkt, Hkt)
    .replace(/ {2,}/g, " ")
    .trim();
  if (a === "") return;
  let i = u1(n.account, o),
    c = Jg(n),
    d =
      n.postedByArtifact || c === "unknown"
        ? "unknown"
        : n.role === "assistant"
          ? i
            ? "claude"
            : "unknown"
          : c === "agent"
            ? "unknown"
            : i
              ? "user"
              : "viewer";
  return {
    display: {
      thread_id: t,
      by: d,
      excerpt: a,
      replies: r.comments.length - 1,
      resolved: r.resolved && r.resolvedDegraded !== !0
    },
    ...(d === "viewer" && n.access !== void 0 && { access: n.access })
  };
}
function pvr(e) {
  let t = ae(e);
  return e.toolUseId !== void 0 && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== !0;
}
async function mvr(e, t, o) {
  if (!ar.test(t)) return;
  let r = _(e.slug, t),
    n = Z().commentTargets,
    a = Z().accountEpoch,
    i = n.get(r);
  if (i !== void 0 && o.toolUseId !== void 0 && i.toolUseId === o.toolUseId) return i.target;
  let { signal: c, cleanup: d } = Ts(o.abortController.signal, { timeoutMs: C, refTimer: !0 });
  try {
    let [s, p] = await Promise.all([
      vEe(e, c, o.credentials, "artifact_comment_consent_read", { skipBootProbe: !0 }),
      fCe(o.credentials)
    ]);
    if (s.err !== null) {
      n.delete(r);
      return;
    }
    let m = E(s.threads, t, { account: p?.accountUuid?.toLowerCase(), tokens: pHt() });
    if (m === void 0) {
      (f("artifact_comment_consent_read", "no_opening_comment"), n.delete(r));
      return;
    }
    if (Z().accountEpoch !== a) return;
    (n.delete(r), n.set(r, { target: m, toolUseId: o.toolUseId }));
    while (n.size > T) {
      let u = n.keys().next().value;
      if (u === void 0) break;
      n.delete(u);
    }
    return m;
  } catch (s) {
    if (o.abortController.signal.aborted) throw s;
    f("artifact_comment_consent_read", Ke(s) ? "deadline" : "read_threw");
    return;
  } finally {
    d();
  }
}
function l(e) {
  switch (e) {
    case "owner":
      return "the owner's";
    case "editor":
      return "an editor's";
    case "commenter":
      return "a commenter's";
    case void 0:
      return "a viewer's";
  }
}
function gvr({ display: e, access: t }) {
  switch (e.by) {
    case "user":
      return `your comment "${e.excerpt}"`;
    case "claude":
      return `Claude's comment "${e.excerpt}"`;
    case "viewer":
      return `${l(t)} comment "${e.excerpt}"`;
    case "unknown":
      return `the comment "${e.excerpt}"`;
  }
}
function VEs({ display: e, access: t }) {
  switch (e.by) {
    case "user":
      return "your comment thread";
    case "claude":
      return "Claude's comment thread";
    case "viewer":
      return `${l(t)} comment thread`;
    case "unknown":
      return "a comment thread";
  }
}
function Ppo(e, t) {
  if (t === void 0 && !(J0n in e)) return;
  let { [J0n]: o, ...r } = e;
  return t === void 0 ? r : { ...r, [J0n]: t };
}
export { J0n, JQt, pvr, mvr, gvr, VEs, Ppo };

//# sourceMappingURL=chunk-d9b6ed2g.js.map
