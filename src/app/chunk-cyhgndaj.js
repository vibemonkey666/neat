// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { z1, bre, kZe, cAe, hU, D8n } from "./chunk-mrftwq54.js";
async function F6t(f, r) {
  let [o, l] = await Promise.allSettled([hU(void 0, f, r), D8n(void 0, r)]),
    s = o.status === "rejected" ? d(o.reason) : null,
    i = o.status === "fulfilled" ? o.value : [],
    a = l.status === "fulfilled" ? l.value : [],
    t = [...i, ...a],
    e = cAe(),
    u = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && bre(e.id) && !t.some((n) => z1(n) === e.id))
    t.push({
      kind: "self_hosted_pool",
      pool_id: e.id,
      name: e.id,
      created_at: "",
      alive_runner_count: 0
    });
  if (t.length === 0)
    return {
      availableTargets: [],
      selectedTarget: null,
      selectedTargetSource: null,
      environmentsError: s,
      ignoredUntrustedPool: u
    };
  let c = kZe(i, (n) => n.kind !== "bridge") ?? a[0] ?? t[0],
    g = null;
  if (e.id !== void 0) {
    let n = t.find((m) => z1(m) === e.id);
    if (n) ((c = n), (g = e.source ?? null));
  }
  return {
    availableTargets: t,
    selectedTarget: c,
    selectedTargetSource: g,
    environmentsError: s,
    ignoredUntrustedPool: u
  };
}
export { F6t };

//# sourceMappingURL=chunk-cyhgndaj.js.map
