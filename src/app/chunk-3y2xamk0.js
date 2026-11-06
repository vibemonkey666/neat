import {
  fileURLToPath as __sourceFilePath_d628137bb33f4729,
  URL as __sourceFilePath_d628137bb33f4729_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qc, Tii } from "./chunk-exz0w70z.js";
import { F } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { mZ } from "./chunk-qakn3b85.js";
import { Bn, dn } from "./chunk-9z5ybxhe.js";
import { io, jc, Xo } from "./chunk-928ws1pg.js";
import { Wb } from "./chunk-j0tbz6ra.js";
import { Ju } from "./chunk-d5zj5299.js";
import { RQr } from "./chunk-10scsk6j.js";
import { ele } from "./chunk-9ewvacsd.js";
import { Fr } from "./chunk-w1mqqc2v.js";
import { dwe } from "./chunk-3e2ws2an.js";
import { Rwe } from "./chunk-tpd7zezt.js";
function C() {
  return import.meta
    .require(
      __sourceFilePath_d628137bb33f4729(
        new __sourceFilePath_d628137bb33f4729_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule();
}
var G = [500, 1500, 4000, 15000, 60000];
function TQr(s) {
  let { getAppState: w, setAppState: h, getDynamicMcpState: U } = s.stores,
    r = null,
    u = Promise.resolve(),
    y = !1,
    p = !1,
    M = 0,
    a = null;
  function j() {
    if (p) return !1;
    if (a !== null) return !0;
    let e = G[M];
    if (e === void 0)
      return (
        t(
          "[bridge:projects] reply mount retries exhausted \u2014 the mount stays as it is until the binding changes",
          { level: "warn" }
        ),
        !1
      );
    return (
      M++,
      (a = setTimeout(() => {
        ((a = null), A("retry"));
      }, e)),
      a.unref(),
      !0
    );
  }
  function R() {
    if (((M = 0), a !== null)) (clearTimeout(a), (a = null));
  }
  function A(e) {
    return (
      (u = u
        .then(() => W(e))
        .catch((o) => {
          t(`[bridge:projects] converge (${e}) threw: ${d(o)}`, { level: "warn" });
        })),
      u
    );
  }
  async function W(e) {
    if (p) return;
    if (e === "binding_changed") R();
    let o = await s.readHearthBinding();
    if (p) return;
    if (!o.read) {
      if (
        (t(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, {
          level: "warn"
        }),
        !r || E(r))
      )
        j();
      return;
    }
    let n = RQr({ hearth: o.assertion }, { apiBaseUrl: s.apiBaseUrl, sessionId: s.sessionId });
    if (!n.binding) {
      if ((R(), r)) {
        t(`[bridge:projects] binding gone (${n.reason}, ${e}) \u2014 dropping the reply mount`);
        let i = r;
        ((r = null), await b(i));
      }
      return;
    }
    if ((S(), r && r.binding.mountUrl === n.binding.mountUrl)) {
      if (E(r)) {
        t(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
        let i = r;
        if (((r = null), await b(i), p)) return;
        await B(n.binding);
        return;
      }
      (P(r, n.binding), (r.binding = n.binding));
      return;
    }
    (t(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`),
      await B(n.binding));
  }
  async function B(e) {
    if (w().mcp.clients.some((i) => i.name === Qc) || Qc in U().configs || T()) {
      (t(`[bridge:projects] reply mount skipped: a server named ${Qc} is already configured`, {
        level: "warn"
      }),
        f("bridge_projects_mcp_mount", "name_taken"));
      return;
    }
    let o = mZ(
        { ...Tii(e.mountUrl, s.sessionId), scope: "dynamic", role: "comms" },
        { getBearerToken: s.getBearerToken }
      ),
      n = { binding: e, config: o, allowRules: [] };
    if (
      ((r = n),
      h((i) =>
        Rwe(i, Qc, { client: { name: Qc, type: "pending", config: o }, tools: [], commands: [] })
      ),
      !y)
    )
      n.allowRules = O(e.autoAllowTools.map((i) => dn({ toolName: Xo(Qc, i) })));
    await N(n);
  }
  async function N(e) {
    let o = Fr(),
      n;
    try {
      n = {
        ...(await C().reconnectMcpServerImpl(Qc, e.config, s.storageV5, s.credentials)),
        attemptEpoch: o
      };
    } catch (c) {
      (t(`[bridge:projects] reply mount connect threw: ${d(c)}`, { level: "warn" }),
        (n = {
          client: { name: Qc, type: "failed", config: e.config, error: "Connection failed" },
          tools: [],
          commands: [],
          attemptEpoch: o
        }));
    }
    if (r !== e) {
      if (n.client.type === "connected") await C().detachAndCloseConnection(n.client);
      return;
    }
    let i = dwe(s.stores, Qc, n);
    if (i !== "applied") {
      (f("bridge_projects_mcp_mount", i), S());
      return;
    }
    if (n.client.type === "connected") (R(), ele(Qc, void 0), g("bridge_projects_mcp_mount"));
    else if (x(n.client))
      if (
        (ele(
          Qc,
          Object.assign(Error("reply mount dial failed"), {
            mcpErrorSource: "downstream_unreachable"
          })
        ),
        j())
      )
        f("bridge_projects_mcp_mount", "settled_failed_retrying");
      else m("bridge_projects_mcp_mount", "settled_failed");
    else
      m(
        "bridge_projects_mcp_mount",
        n.client.type === "failed"
          ? `settled_failed_${(n.client.errorCode ?? "answered").toLowerCase()}`
          : `settled_${n.client.type}`
      );
  }
  function E(e) {
    let o = w().mcp.clients.find((n) => n.name === Qc);
    return o !== void 0 && o.config === e.config && x(o);
  }
  async function b(e) {
    _(e.allowRules);
    let o = w().mcp.clients.find((i) => i.name === Qc);
    if (o && o.config !== e.config) {
      await D(e.config);
      return;
    }
    let n = io(Qc);
    (h((i) => {
      let { [Qc]: c, ...v } = i.mcp.resources,
        { [Qc]: I, ...H } = i.mcp.resourceTemplates;
      return {
        ...i,
        mcp: {
          ...i.mcp,
          clients: i.mcp.clients.filter((l) => l !== o),
          tools: i.mcp.tools.filter((l) => !jc(l, Qc, n)),
          commands: i.mcp.commands.filter((l) => !Wb(l, Qc)),
          resources: v,
          resourceTemplates: H
        }
      };
    }),
      await D(e.config));
  }
  function S() {
    if (!r) return;
    let e = w().mcp.clients.find((n) => n.name === Qc);
    if (e && e.config === r.config && !T()) {
      if (!y) P(r, r.binding);
      return;
    }
    t(
      "[bridge:projects] the reply mount\u2019s name is no longer held by its own row \u2014 retracting its pre-approvals",
      { level: "warn" }
    );
    let o = r;
    ((r = null), b(o));
  }
  function T() {
    return Object.hasOwn(s.sdkHostConfigs(), Qc);
  }
  function L(e) {
    if (!Object.hasOwn(e, Qc)) return;
    if (((y = !0), !r)) return;
    let o = r.allowRules;
    ((r.allowRules = []), _(o));
  }
  function V() {
    ((y = !1), S());
  }
  function P(e, o) {
    if (y) return;
    let n = o.autoAllowTools.map((l) => dn({ toolName: Xo(Qc, l) })),
      i = new Set(n),
      c = new Set(e.allowRules),
      v = e.allowRules.filter((l) => !i.has(l));
    if (v.length > 0) _(v);
    let I = e.allowRules.filter((l) => i.has(l)),
      H = O(n.filter((l) => !c.has(l)));
    e.allowRules = [...I, ...H];
  }
  function k(e) {
    return F(w().toolPermissionContext.alwaysAllowRules.session ?? [], (o) => o === e);
  }
  function O(e) {
    if (p) return [];
    if (e.length === 0) return [];
    let o = new Map(e.map((n) => [n, k(n)]));
    return (
      h((n) => ({
        ...n,
        toolPermissionContext: Ju(n.toolPermissionContext, {
          type: "addRules",
          destination: "session",
          behavior: "allow",
          rules: e.map(Bn)
        })
      })),
      e.filter((n) => k(n) > (o.get(n) ?? 0))
    );
  }
  function _(e) {
    if (e.length === 0) return;
    h((o) => {
      let n = [...(o.toolPermissionContext.alwaysAllowRules.session ?? [])];
      for (let i of e) {
        let c = n.indexOf(i);
        if (c !== -1) n.splice(c, 1);
      }
      return {
        ...o,
        toolPermissionContext: {
          ...o.toolPermissionContext,
          alwaysAllowRules: { ...o.toolPermissionContext.alwaysAllowRules, session: n }
        }
      };
    });
  }
  function D(e) {
    return C()
      .clearServerCache(Qc, e)
      .catch((o) => {
        t(`[bridge:projects] reply mount cleanup failed: ${d(o)}`, { level: "warn" });
      });
  }
  function Y() {
    if (((p = !0), R(), r)) {
      let e = r.allowRules;
      ((r.allowRules = []), _(e));
    }
    return (
      (u = u
        .then(async () => {
          if (!r) return;
          t("[bridge:projects] dropping the reply mount");
          let e = r;
          ((r = null), await b(e));
        })
        .catch((e) => {
          t(`[bridge:projects] drop threw: ${d(e)}`, { level: "warn" });
        })),
      u
    );
  }
  return {
    sync: A,
    drop: Y,
    reassertOwnership: S,
    suspendAllowsForApply: L,
    reassertAfterApply: V,
    current: () => r?.binding ?? null,
    projectFilesDoor: () =>
      r
        ? {
            channelId: r.binding.channelId,
            sessionId: s.sessionId,
            apiBaseUrl: s.apiBaseUrl,
            getBearerToken: s.getBearerToken,
            getWorkerEpoch: s.getWorkerEpoch
          }
        : null
  };
}
function x(s) {
  return s.type === "failed" && !q.has(s.errorCode ?? "");
}
var q = new Set([
  "CLI_OWNED_BEARER_REJECTED",
  "POLICY_BLOCKED",
  "APPROVAL_REQUIRED",
  "DISABLED",
  "IDENTITY_CHANGED",
  "SHUTTING_DOWN"
]);
export { TQr };

//# sourceMappingURL=chunk-3y2xamk0.js.map
