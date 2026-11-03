// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c, Hn } from "./chunk-acd8w9vv.js";
import { ar } from "./chunk-r1dvrqha.js";
import { g } from "./chunk-brszmkb3.js";
import { Soe } from "./chunk-5b88xb0z.js";
var k = /^\d{1,12}-[0-9a-f]{1,32}$/;
function UMt(e) {
  return ar.test(e) ? Hn(e) : b("nonconforming");
}
function p(e) {
  return k.test(e) ? Hn(e) : b("nonconforming");
}
var h = { startedSeen: [], completedSeen: [], startedPublishes: {}, invokeT0: null },
  JTs = Soe("workshopTelemetry", h);
function QTs(e) {
  e.set((t) => ({ ...t, invokeT0: performance.now() }));
}
function ZTs(e) {
  if (e === void 0 || e.invokeT0 === null) return e;
  return { ...e, invokeT0: null };
}
function S(e, t) {
  if (e.startedSeen.includes(t)) return e;
  return { ...e, startedSeen: [...e.startedSeen, t] };
}
function f(e, t) {
  if (e.completedSeen.includes(t)) return e;
  return { ...e, completedSeen: [...e.completedSeen, t] };
}
function eAs(e, t, l, i, o, d) {
  if (
    (g("workshop_turn", {
      artifact_slug: UMt(t),
      artifact_version: p(l),
      decisions_total: o,
      decisions_resolved: d,
      state: c(i)
    }),
    i !== "started")
  )
    return;
  let s = !0;
  if ((e.set((n) => ((s = n.startedSeen.includes(t)), S(n, t))), !s))
    g("workshop_build_started", { artifact_slug: UMt(t) });
}
function qgo(e, t, l, i, o, d) {
  let s;
  e.set((a) => {
    let r = a;
    if (r.invokeT0 !== null) r = { ...r, invokeT0: null };
    if (i === "started") r = S(r, t);
    if (o.n > 0) r = f(r, t);
    else if (i === "started" && !r.completedSeen.includes(t)) {
      let m = (r.startedPublishes[t] ?? 0) + 1;
      if (((r = { ...r, startedPublishes: { ...r.startedPublishes, [t]: m } }), m >= 2))
        r = f(r, t);
    }
    return ((s = { prev: a, next: r }), r);
  });
  let { prev: n, next: u } = s;
  if (n.invokeT0 !== null && d)
    g("workshop_first_page", {
      invoke_to_publish_ms: Math.round(performance.now() - n.invokeT0),
      first_publish_state: c(i)
    });
  if (!n.startedSeen.includes(t) && u.startedSeen.includes(t))
    g("workshop_build_started", { artifact_slug: UMt(t) });
  if (!n.completedSeen.includes(t) && u.completedSeen.includes(t)) {
    let a = o.n > 0 ? "structural" : "post_kickoff_republish";
    g("workshop_build_completed", {
      artifact_slug: UMt(t),
      artifact_version: p(l),
      source: c(a),
      deliverables_n: o.n,
      deliverables_pr: o.pr,
      deliverables_artifact: o.artifact,
      deliverables_other: o.other
    });
  }
}
export { UMt, JTs, QTs, ZTs, eAs, qgo };

//# sourceMappingURL=chunk-njg1cdnf.js.map
