// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { g } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { JGe } from "./chunk-taha171j.js";
import { Ha } from "./chunk-ajtyjx88.js";
import { jcn } from "./chunk-7yq9w6fa.js";
import { yp } from "./chunk-m5rm7nsm.js";
import { Yu, pFt } from "./chunk-yyq6mj0n.js";
import { cs } from "./chunk-eacq4pgt.js";
var JXt = {
    name: "InProcessTeammateTask",
    type: "in_process_teammate",
    async kill(a, s, i, r, m) {
      let { memberRemoval: l, osTeardown: o } = eHn(a, s, i, m);
      await Promise.all([l, o]);
    }
  },
  k = 1e4;
function eHn(a, s, i, r) {
  let m = !1,
    l = null,
    o = null,
    f,
    u,
    n;
  s.update(a, (e) => {
    if (e.status !== "running") return e;
    return (
      (l = e.identity.teamName),
      (o = e.identity.agentId),
      (f = e.toolUseId),
      (u = e.description),
      (n = e.paneTeardown),
      e.abortController?.abort(),
      (m = !0),
      e.onIdleCallbacks?.forEach((p) => p()),
      {
        ...e,
        status: "killed",
        notified: !0,
        endTime: Date.now(),
        onIdleCallbacks: [],
        pendingUserMessages: [],
        abortController: void 0,
        currentWorkAbortController: void 0,
        paneTeardown: void 0,
        evictAfter: void 0
      }
    );
  });
  let c = n
    ? Nt(n(), k, `pane teardown did not settle within ${k}ms`).then(
        (e) => {
          if (!e)
            t(
              `[killInProcessTeammate] pane teardown for ${a} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`,
              { level: "warn" }
            );
          return e;
        },
        (e) => (
          t(
            `[killInProcessTeammate] pane teardown for ${a} did not complete cleanly: ${d(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`,
            { level: "warn" }
          ),
          !1
        )
      )
    : Promise.resolve(void 0);
  if (m && o)
    i((e) => {
      if (!e.teamContext?.teammates?.[o]) return e;
      let { [o]: p, ...y } = e.teamContext.teammates;
      return { ...e, teamContext: { ...e.teamContext, teammates: y } };
    });
  let T = Promise.resolve();
  if (l && o) T = jcn(l, o, { onlyIfJoinedBefore: Date.now() }, r);
  if (m)
    (yp(a),
      Ha(a, "stopped", { toolUseId: f, summary: u }),
      setTimeout((e, p) => e.evictTerminal(p), pFt, s, a));
  if (o) JGe(o);
  return (g("swarm_in_process_kill"), { killed: m, memberRemoval: T, osTeardown: c });
}
function fIe(a, s) {
  let i;
  for (let r of Object.values(s))
    if (Yu(r) && r.identity.agentId === a) {
      if (r.status === "running") return r;
      if (!i) i = r;
    }
  return i;
}
function ZDn(a, s) {
  let i = fIe(a, s);
  if (i) return { status: "found", task: i };
  let r = Object.values(s)
      .filter(Yu)
      .filter((n) => n.identity.resumableAgentId === a),
    m = r.find((n) => n.status === "running") ?? r[0];
  if (m) return { status: "found", task: m };
  let l = new Map();
  for (let n of Object.values(s)) {
    if (!Yu(n) || n.identity.agentName !== a) continue;
    let c = l.get(n.identity.agentId);
    if (!c || (c.status !== "running" && n.status === "running")) l.set(n.identity.agentId, n);
  }
  let o = [...l.values()],
    f = o.filter((n) => n.status === "running"),
    u = f.length > 0 ? f : o;
  if (u.length === 1) return { status: "found", task: u[0] };
  if (u.length > 1)
    return {
      status: "ambiguous",
      candidates: u.map((n) => n.identity.agentId),
      anyLive: u.some((n) => !cs(n.status))
    };
  return { status: "not_found" };
}
function M_s(a) {
  return oct(a)
    .filter((s) => s.status === "running")
    .map((s) => s.identity.agentId);
}
function oct(a) {
  return Object.values(a).filter(Yu);
}
export { fIe, ZDn, M_s, oct, JXt, eHn };

//# sourceMappingURL=chunk-ck8hzf69.js.map
