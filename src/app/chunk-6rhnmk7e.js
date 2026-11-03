import {
  fileURLToPath as __filePath_1d9d0b0ed1291cfe,
  URL as __filePath_1d9d0b0ed1291cfe_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { se } from "./chunk-ewvf3tep.js";
import { io, jc } from "./chunk-928ws1pg.js";
import { wi, FTt } from "./chunk-d54avynm.js";
import { $w } from "./chunk-5rw2zfa0.js";
import { Tk, ir, Ul, Wb, nMs, Jsn, cu, Io } from "./chunk-j0tbz6ra.js";
import { xT } from "./chunk-w1mqqc2v.js";
import { Kus, Rwe, JPn, zxt, v8t } from "./chunk-tpd7zezt.js";
import { jB } from "./chunk-a6g4mbkc.js";
import { i1e, Wae, hJ } from "./chunk-syntvyhn.js";
import { jb } from "./chunk-f786enhh.js";
import { RCe } from "./chunk-5b88xb0z.js";
import { Yi } from "./chunk-yvs3tmdx.js";
function f() {
  return import.meta
    .require(
      __filePath_1d9d0b0ed1291cfe(
        new __filePath_1d9d0b0ed1291cfe_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule();
}
function v(n) {
  ((Yi(n.client).onclose = void 0),
    f()
      .clearServerCache(n.name, n.config)
      .catch(() => {}));
}
function x(n, t, i) {
  return {
    tools: jB(n.tools, (e) => e.name?.startsWith(i)),
    commands: jB(n.commands, (e) => Wb(e, t)),
    resources: Tk(n.resources, t),
    resourceTemplates: Tk(n.resourceTemplates, t)
  };
}
class Alt {
  #e;
  constructor(n) {
    this.#e = n;
  }
  static over(n) {
    return new Alt(RCe(n.getState, n.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(n) {
    this.#e.set((t) => Kus(t, n));
  }
  async clearNeedsAuth(n) {
    let t = this.get().clients.find((e) => e.name === n);
    if (t?.type !== "needs-auth") return;
    let i = await f().peekSettledConnection(n, t.config);
    if (i?.type !== "connected") return;
    this.#e.set((e) => ({ ...e, clients: e.clients.map((s) => (s === t ? Wae(i, t.config) : s)) }));
  }
  adoptServer(n, t, i) {
    let e = "adopted";
    return (
      this.#e.set((s) => {
        if (i?.asked === !0) return Rwe({ mcp: s }, n, t).mcp;
        let r = s.clients.find((c) => c.name === n);
        if (((e = _(r, t) ?? "adopted"), r === void 0)) return s;
        if (e !== "adopted") return w(s, r, e);
        return Rwe({ mcp: s }, n, H(r, t), { appendIfAbsent: !1 }).mcp;
      }),
      e
    );
  }
  markReconnectDiscarded(n, t) {
    this.#e.set((i) => {
      let e = i.clients.find((s) => s.name === n);
      if (e === void 0 || ir(n, e.config) !== ir(n, t)) return i;
      if (Io(n)) return w(i, e, "disabled");
      if (cu(n, e.config) !== null) return w(i, e, "policy-blocked");
      if (e.type !== "connected") return i;
      return {
        ...i,
        clients: i.clients.map((s) =>
          s === e
            ? {
                name: n,
                type: "failed",
                config: e.config,
                error: "Its connection was closed while signing in again"
              }
            : s
        ),
        ...D(i, n)
      };
    });
  }
  swapServerTools(n, t, i) {
    let e = !1;
    return (
      this.#e.set((s) => {
        let r = v8t(
          s.clients.find((l) => l.name === n),
          t,
          i
        );
        if (r === void 0)
          return (
            se(n, "A re-queried tool list was not applied: another server holds the name"),
            s
          );
        let c = JPn({ mcp: s }, n, r);
        return ((e = c.mcp !== s), c.mcp);
      }),
      e
    );
  }
  setSuppressedClaudeAiConnectors(n) {
    this.#e.set((t) =>
      Jsn(t.suppressedClaudeAiConnectors ?? [], n) ? t : { ...t, suppressedClaudeAiConnectors: n }
    );
  }
  setReservedNameRefusals(n) {
    this.#e.set((t) => {
      let i = t.reservedNameRefusals ?? [];
      return i.length === n.length &&
        i.every((s, r) => s.scope === n[r]?.scope && s.name === n[r]?.name)
        ? t
        : { ...t, reservedNameRefusals: n };
    });
  }
  addPendingServers(n) {
    this.#e.set((t) => {
      let i = O(t, n);
      if (i.length === 0) return t;
      return { ...t, clients: [...t.clients, ...i] };
    });
  }
  reconcileConfiguredServers(n, t, i) {
    this.#e.set((e) => {
      let { stale: s, ...r } = nMs(e, n, t);
      i(s);
      let c = O(r, n);
      if (c.length === 0 && s.length === 0) {
        if (e.clientsInitialized) return e;
        return { ...e, clientsInitialized: !0 };
      }
      return { ...e, ...r, clientsInitialized: !0, clients: [...r.clients, ...c] };
    });
  }
  applyIdentityBoundary(n, t) {
    let i = [...n, ...t];
    if (i.length === 0) return;
    this.#e.set((e) => {
      let s = i.map((c) => [c, io(c)]),
        r = (c) => s.some(([l, u]) => jc(c, l, u));
      return {
        ...e,
        clients: e.clients.flatMap((c) =>
          t.has(c.name)
            ? []
            : n.has(c.name)
              ? [{ name: c.name, type: "pending", config: c.config }]
              : [c]
        ),
        tools: jB(e.tools, r),
        commands: jB(e.commands, (c) => i.some((l) => Wb(c, l))),
        resources: Tk(e.resources, i),
        resourceTemplates: Tk(e.resourceTemplates, i)
      };
    });
  }
  applyQueuedUpdates(n, t) {
    this.#e.set((i) => {
      let e = i;
      for (let s of n) {
        if (s.epoch !== t.currentEpoch && xT(s.config)) {
          if (s.type === "connected") f().detachAndCloseConnection(s);
          continue;
        }
        let r = e.clients.find((d) => d.name === s.name),
          c = W(r, s),
          l = c === "stands" && r !== void 0 ? K(r, s) : s,
          {
            tools: u,
            commands: S,
            resources: m,
            resourceTemplates: A,
            replaceOnly: g,
            epoch: G,
            asked: J,
            superseded: I,
            ...U
          } = l,
          o = U,
          h = o.type === "disabled" || o.type === "failed",
          b = h ? (u ?? []) : u,
          T = h ? (S ?? []) : S,
          C = h ? (m ?? []) : m,
          y = h ? (A ?? []) : A,
          M = io(o.name),
          p = e.clients.findIndex((d) => d.name === o.name),
          a = p !== -1 ? e.clients[p] : void 0,
          Q = o.type === "connected" && a?.type === "connected" && a.client === o.client,
          R = wi(o) && cu(o.name, o.config) === "managed-policy";
        if (o.type !== "disabled" && !Q && Io(o.name) && !(R && a?.type !== "disabled")) {
          if (R) t.onDoorDenied(o.name);
          if (o.type === "connected") v(o);
          if (
            (t.onOrphanedDisable(o.name),
            a && a.type !== "disabled" && (a.type !== "connected" || !wi(o)))
          )
            e = {
              ...e,
              clients: e.clients.map((d) =>
                d.name === o.name
                  ? {
                      name: o.name,
                      type: "disabled",
                      config: c === "elsewhere" ? d.config : o.config
                    }
                  : d
              ),
              ...x(e, o.name, M)
            };
          continue;
        }
        if (c === "elsewhere" && a !== void 0) {
          if (o.type !== "disabled") {
            if (o.type === "connected") v(o);
            se(o.name, `A late ${o.type} result was dropped: another server holds the name`);
            continue;
          }
          if (a.type === "connected") v(a);
          o = { name: o.name, type: "disabled", config: a.config };
        }
        let k = wi(o) ? cu(o.name, o.config) : null;
        if (k) {
          t.onDoorDenied(o.name);
          let d = o.config;
          if (o.type === "connected") Yi(o.client).onclose = void 0;
          else if (a?.type === "connected") ((Yi(a.client).onclose = void 0), (d = a.config));
          if (
            (f()
              .clearServerCache(o.name, d)
              .catch(() => {}),
            p === -1)
          )
            continue;
          e = {
            ...e,
            clients: e.clients.map((P) =>
              P.name === o.name
                ? { name: o.name, type: "failed", config: o.config, ...jb(k, o.name, o.config) }
                : P
            ),
            ...x(e, o.name, M)
          };
          continue;
        }
        if (
          g &&
          p !== -1 &&
          (e.clients[p]?.type === "needs-auth" || e.clients[p]?.type === "disabled")
        ) {
          if (o.type === "connected")
            ((Yi(o.client).onclose = void 0),
              f()
                .clearServerCache(o.name, o.config)
                .catch(() => {}));
          continue;
        }
        if (p === -1 && (g || (c === "nowhere" && !I))) {
          if (o.type === "connected")
            ((Yi(o.client).onclose = void 0),
              f()
                .clearServerCache(o.name, o.config)
                .catch(() => {}));
          if (!g)
            (t.onOrphanedDisable(o.name),
              se(o.name, `A late ${o.type} result was dropped: no row holds the name`));
          continue;
        }
        if (g && Ul() && p !== -1 && ir(o.name, e.clients[p].config) !== ir(o.name, o.config)) {
          if (o.type === "connected") f().detachAndCloseConnection(o);
          continue;
        }
        if (p !== -1 && !FTt(e.clients[p], o)) {
          if (c === "asked") e = L(e, o);
          continue;
        }
        let j = p === -1 ? [...e.clients, o] : e.clients.map((d) => (d.name === o.name ? o : d)),
          B = b === void 0 ? e.tools : [...jB(e.tools, (d) => d.name?.startsWith(M)), ...b],
          E = T === void 0 ? e.commands : [...jB(e.commands, (d) => Wb(d, o.name)), ...T],
          F =
            C === void 0
              ? e.resources
              : C.length > 0
                ? { ...e.resources, [o.name]: C }
                : Tk(e.resources, o.name),
          z =
            y === void 0
              ? e.resourceTemplates
              : y.length > 0
                ? { ...e.resourceTemplates, [o.name]: y }
                : Tk(e.resourceTemplates, o.name);
        e = { ...e, clients: j, tools: B, commands: E, resources: F, resourceTemplates: z };
      }
      return e;
    });
  }
}
function O(n, t) {
  let i = new Set(n.clients.map((e) => e.name));
  return Object.entries(t)
    .filter(([e]) => !i.has(e))
    .map(([e, s]) => ({ name: e, type: Io(e) ? "disabled" : "pending", config: s }));
}
function qmr(n, t) {
  return n.mcpInfo?.serverName === void 0 ? Wb(n, t) : n.mcpInfo.serverName === t;
}
function D(n, t) {
  let i = io(t);
  return {
    tools: jB(n.tools, (e) => jc(e, t, i)),
    commands: jB(n.commands, (e) => qmr(e, t)),
    resources: Tk(n.resources, t),
    resourceTemplates: Tk(n.resourceTemplates, t)
  };
}
function W(n, t) {
  if (t.asked === !0) return "asked";
  if (n === void 0) return "nowhere";
  return ir(t.name, n.config) === ir(t.name, t.config) ? "stands" : "elsewhere";
}
function K(n, t) {
  let i = { name: t.name, config: n.config };
  return {
    ...zxt(t, n.config),
    ...(t.tools !== void 0 && { tools: hJ(i, t.tools) }),
    ...(t.commands !== void 0 && { commands: i1e(i, t.commands) })
  };
}
function L(n, t) {
  let i = n.clients.find((m) => m.name === t.name);
  if (i === void 0 || ir(t.name, i.config) !== ir(t.name, t.config)) return n;
  let e = zxt(i, t.config);
  if (e === i) return n;
  let s = { name: t.name, config: t.config },
    r = io(t.name),
    [c, l] = $w(n.tools, (m) => jc(m, t.name, r)),
    [u, S] = $w(n.commands, (m) => qmr(m, t.name));
  return {
    ...n,
    clients: n.clients.map((m) => (m === i ? e : m)),
    tools: [...l, ...hJ(s, c)],
    commands: [...S, ...i1e(s, u)]
  };
}
function _(n, t) {
  let { name: i } = t.client;
  if (n === void 0) return "no-row";
  if (ir(i, n.config) !== ir(i, t.client.config)) return "another-server";
  if (Io(i)) return "disabled";
  if (cu(i, n.config) !== null) return "policy-blocked";
  return;
}
function w(n, t, i) {
  if (i !== "disabled" && i !== "policy-blocked") return n;
  let { name: e, config: s } = t,
    r = i === "policy-blocked" ? cu(e, s) : null;
  if (r === null && t.type === "disabled") return n;
  let c =
    r === null
      ? { name: e, type: "disabled", config: s }
      : { name: e, type: "failed", config: s, ...jb(r, e, s) };
  return { ...n, clients: n.clients.map((l) => (l === t ? c : l)), ...D(n, e) };
}
function H(n, t) {
  let i = { name: n.name, config: n.config };
  return {
    ...t,
    client: zxt(t.client, n.config),
    tools: hJ(i, t.tools),
    commands: i1e(i, t.commands)
  };
}
export { Alt, qmr };

//# sourceMappingURL=chunk-6rhnmk7e.js.map
