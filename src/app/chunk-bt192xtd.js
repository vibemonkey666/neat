// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ye } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { g, f } from "./chunk-brszmkb3.js";
import { O3 } from "./chunk-j0tbz6ra.js";
import { Z } from "./chunk-p27rr8yn.js";
import { Hme, zSo } from "./chunk-2nwr73hs.js";
import { kIe } from "./chunk-pb6nspqf.js";
import { o3 } from "./chunk-7nmtb4b4.js";
var u = 32;
function Puo(n) {
  if (
    n.publishContext !== "subagent" ||
    n.context.agentId === void 0 ||
    n.context.teammateContext !== void 0
  )
    return null;
  let { publishContext: e } = Hme({ agentId: void 0, isNonInteractiveSession: ye() });
  return o3(e) ? e : null;
}
function NSr(n, e) {
  let t = Z().live.pendingSubagentArms,
    s = t.get(n) ?? [],
    i = s.findIndex((o) => o.slug === e.slug);
  if (i === -1) s.push(e);
  else s[i] = e;
  (t.delete(n), t.set(n, s));
  let r = 0;
  for (let o of t.values()) r += o.length;
  while (r > u) {
    let [o, a] = t.entries().next().value;
    if ((a.shift(), a.length === 0)) t.delete(o);
    (r--, f("artifact_live_subscribe", "subagent_arm_evicted"));
  }
}
function l(n) {
  let e = Z().live.pendingSubagentArms,
    t = e.get(n) ?? [];
  return (e.delete(n), t);
}
var d = 256;
function m(n) {
  let e = Z().live.finishedSubagentAdopters;
  (e.delete(n), e.add(n));
  while (e.size > d) e.delete(e.values().next().value);
}
function FTi(n) {
  let { agentId: e, context: t } = n;
  m(e);
  let s = l(e);
  if (s.length === 0) return;
  let { publishContext: i } = Hme({
    agentId: t.agentId,
    agentType: t.agentContext?.agentType,
    isNonInteractiveSession: t.options.isNonInteractiveSession
  });
  if (i === "subagent" && t.agentId !== void 0) {
    let o =
      O3(t.agentId, t.taskRegistry) === t.agentId ||
      !Z().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of s)
      if (o) NSr(t.agentId, a);
      else f("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!o3(i)) return;
  let r = { ...t, abortController: new AbortController() };
  for (let o of s)
    kIe({
      ...o,
      publishContext: i,
      getKnownVer: zSo(t.getArtifactReadObservation, o.slug),
      context: r,
      adoptedPublish: !0,
      announceArmlessEnd: !0
    }).catch(() => {});
  g("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: s.length,
    publish_context: c(i)
  });
}
export { Puo, NSr, FTi };

//# sourceMappingURL=chunk-bt192xtd.js.map
