import {
  fileURLToPath as __sourceFilePath_20c1ba698f081a5f,
  URL as __sourceFilePath_20c1ba698f081a5f_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { X, UI } from "./chunk-4hww8411.js";
import { t } from "./chunk-4kxznmzw.js";
import { se } from "./chunk-ewvf3tep.js";
import { io, jc } from "./chunk-928ws1pg.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { oM } from "./chunk-ajtyjx88.js";
import { xt } from "./chunk-qakn3b85.js";
import { SFs } from "./chunk-nzbb091t.js";
import { VK } from "./chunk-ybr49gcx.js";
import {
  Tk,
  ir,
  Ul,
  Bpt,
  GLt,
  Wb,
  R3,
  dje,
  ADr,
  cu,
  Fle,
  rY,
  Rgt,
  Io,
  ys
} from "./chunk-j0tbz6ra.js";
import { cEe, Fr, rO, xT, hft, EBn, kBn } from "./chunk-w1mqqc2v.js";
import { R6t, Bls } from "./chunk-fbc1ty1s.js";
import { aae } from "./chunk-3nrh7z4g.js";
import { hOe, c1 } from "./chunk-wnhb5g9c.js";
import { Rwe, Vus, JPn, zxt, v8t } from "./chunk-tpd7zezt.js";
import { jB } from "./chunk-a6g4mbkc.js";
import { jCs } from "./chunk-h023rkdg.js";
import { aEe, lEe } from "./chunk-aqr6n7ck.js";
import { DC } from "./chunk-nqahnzma.js";
import { Wae } from "./chunk-syntvyhn.js";
import { jb, LBn } from "./chunk-f786enhh.js";
import { wce, Let, Wre, i8s, PSt, jJn, Vjo, a8s } from "./chunk-stzrz9z3.js";
function G() {
  return import.meta
    .require(
      __sourceFilePath_20c1ba698f081a5f(
        new __sourceFilePath_20c1ba698f081a5f_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule();
}
function oZr(n, e, o, S) {
  if (Object.hasOwn(e, n)) return e[n];
  if (o && !Fle.has(o.scope)) return o;
  return S ? S(n) : (o ?? null);
}
function Mls(n, e) {
  if (!n.clients.some((o) => o.name === e)) return n;
  return {
    ...n,
    clients: n.clients.map((o) =>
      o.name === e ? { name: e, type: "disabled", config: o.config } : o
    ),
    tools: R3(n.tools, e)
  };
}
function gfr(n, e) {
  let o = io(e);
  return {
    tools: n.tools.filter((S) => jc(S, e, o)),
    commands: n.commands.filter((S) => Wb(S, e)),
    resources: n.resources[e],
    resourceTemplates: n.resourceTemplates[e]
  };
}
function f5e(n, e) {
  let o = e.type !== "failed" ? cu(n, e.config) : void 0;
  if (o === "managed-policy") return N(n, e.config, o);
  if (Io(n) && !LBn(e)) return { name: n, type: "disabled", config: e.config };
  return o ? N(n, e.config, o) : void 0;
}
function N(n, e, o) {
  return { name: n, type: "failed", config: e, ...jb(o, n, e) };
}
function oe(n, e) {
  return e.asked || n === void 0 || Wae(e.client, n.config) === e.client ? e : DC(n.config, e);
}
function re(n, e, o) {
  let { incoming: S, result: w, outcome: A } = o;
  if (A === "refused") {
    let M = S.asked ? w.client : zxt(w.client, e.config);
    return M === w.client ? w : { ...w, client: M };
  }
  if (Wae(w.client, e.config) === w.client) return w;
  let C = oe(e, S);
  if (C.client.type === "disabled") return C;
  let v = f5e(n, C.client);
  return v ? { ...C, client: v, tools: [], commands: [] } : C;
}
function dwe(n, e, o) {
  let { getAppState: S, setAppState: w, getDynamicMcpState: A, setDynamicMcpState: C } = n,
    v = () => {
      if (o.client.type === "connected")
        G()
          .detachAndCloseConnection(o.client)
          .catch(() => {});
    },
    M = S().mcp.clients.find((p) => p.name === e),
    i = A().clients.find((p) => p.name === e);
  if (!M && !i) return (v(), "dropped");
  let R = ir(e, o.client.config),
    P = (p) => p !== void 0 && ir(e, p.config) !== R;
  if (P(M) || P(i))
    return (
      t(`[MCP] ${e}: dropping a settlement whose slot config changed mid-flight`),
      v(),
      "dropped"
    );
  if (hft(o.client.config, o.attemptEpoch))
    return (
      t(
        `[MCP] ${e}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`
      ),
      v(),
      "superseded"
    );
  let T = oe(M ?? i, o),
    l = T,
    _ = "applied";
  if (T.client.type !== "disabled") {
    let p = f5e(e, T.client);
    if (p) {
      if ((v(), p.type === "failed"))
        G()
          .dropDiscoveryEntry(e, T.client.config)
          .catch(() => {});
      ((l = { client: p, tools: [], commands: [], resources: [], attemptEpoch: o.attemptEpoch }),
        (_ = "refused"));
    }
  }
  if (
    (w((p) => {
      let E = Rwe(p, e, l, { appendIfAbsent: l.client.config.type !== "sdk" }),
        U = !!l.resources && l.resources.length > 0,
        L = !!l.resourceTemplates && l.resourceTemplates.length > 0;
      return U && L
        ? E
        : {
            ...E,
            mcp: {
              ...E.mcp,
              resources: U ? E.mcp.resources : Tk(E.mcp.resources, e),
              resourceTemplates: L ? E.mcp.resourceTemplates : Tk(E.mcp.resourceTemplates, e)
            }
          };
    }),
    !i)
  )
    return _;
  let c = io(e),
    h = A(),
    H = M === void 0 ? l : re(e, i, { incoming: o, result: l, outcome: _ });
  return (
    C({
      ...h,
      clients: h.clients.map((p) => (p.name === e ? H.client : p)),
      tools: [...h.tools.filter((p) => !jc(p, e, c)), ...H.tools]
    }),
    _
  );
}
function JRn(n) {
  if (!Ul()) return;
  let {
    getAppState: e,
    setAppState: o,
    getDynamicMcpState: S,
    setDynamicMcpState: w,
    storageV5: A,
    credentials: C,
    force: v = !1,
    spareUnchangedFrom: M
  } = n;
  hOe(A);
  let i = G(),
    R = xt();
  if (!i.mcpIdentityChangedSinceLastCheck() && !v) return R.headlessConnectorMountInFlight;
  let P = !v || !Bpt(cEe()),
    T = S(),
    l = [...e().mcp.clients, ...T.clients],
    _ = new Set(),
    c = new Set(),
    h = new Set(),
    H = new Set();
  if (M) {
    for (let s of l) H.add(s.name);
    for (let s of l) if (!M.has(s) || s.type === "pending") H.delete(s.name);
  }
  for (let s of l) {
    if (!xT(s.config) || H.has(s.name)) {
      h.add(ir(s.name, s.config));
      continue;
    }
    if ((i.disposeServerConnectionDetached(s.name, s.config), s.config.scope === "claudeai")) {
      c.add(s.name);
      continue;
    }
    if (s.type !== "disabled") _.add(s.name);
  }
  (i.evictAllMcpMemosOnIdentityChange(h, kBn(l)), VK().clear());
  let p = Object.create(null),
    E = new Set(),
    U = n.getHostOwnedConfigs?.() ?? T.configs;
  for (let s of l) {
    if (!_.has(s.name) || !P) continue;
    let y = p[s.name] ?? oZr(s.name, U, s.config, rY);
    if (!y) {
      E.add(s.name);
      continue;
    }
    let k = (p[s.name] ??= y);
    if (k !== s.config && ir(s.name, k) !== ir(s.name, s.config))
      t(
        `[MCP] ${s.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(U, s.name) ? "host's" : "appState row's"} config and re-dialing it`,
        { level: "warn" }
      );
  }
  let L = new Map(),
    z = Rgt() && P,
    j = Object.create(null);
  for (let [s, y] of Object.entries(p)) {
    if (z && ADr(y)) {
      ((j[s] = y), delete p[s]);
      continue;
    }
    let k = cu(s, y);
    if (k) (L.set(s, N(s, y, k)), delete p[s]);
  }
  let W = [..._, ...c];
  if (W.length > 0) {
    let s = W.map((r) => [r, io(r)]),
      y = (r) => s.some(([x, I]) => jc(r, x, I)),
      k = (r) =>
        c.has(r.name)
          ? []
          : _.has(r.name)
            ? [
                !P || E.has(r.name)
                  ? EBn(r.name, r.config)
                  : (L.get(r.name) ?? {
                      name: r.name,
                      type: "pending",
                      config: p[r.name] ?? j[r.name] ?? r.config
                    })
              ]
            : [r];
    (o((r) => ({
      ...r,
      mcp: {
        ...r.mcp,
        clients: r.mcp.clients.flatMap(k),
        tools: jB(r.mcp.tools, y),
        commands: jB(r.mcp.commands, (x) => W.some((I) => Wb(x, I))),
        resources: Tk(r.mcp.resources, W),
        resourceTemplates: Tk(r.mcp.resourceTemplates, W)
      }
    })),
      w({ ...T, clients: T.clients.flatMap(k), tools: T.tools.filter((r) => !y(r)) }));
  }
  let u, D;
  if (z) {
    let y = Bls(
      {
        getClients: () => e().mcp.clients,
        getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [],
        applyMcpUpdate: (r) => {
          let x = new Set();
          if (
            (o((B) => {
              let Z = r(B.mcp),
                ee = new Set(Z.clients.map((Y) => Y.name));
              return (
                (x = new Set(B.mcp.clients.filter((Y) => !ee.has(Y.name)).map((Y) => Y.name))),
                { ...B, mcp: Z }
              );
            }),
            x.size === 0)
          )
            return;
          let I = S();
          if (!I.clients.some((B) => x.has(B.name))) return;
          let F = [...x].map((B) => [B, io(B)]);
          w({
            ...I,
            clients: I.clients.filter((B) => !x.has(B.name)),
            tools: I.tools.filter((B) => !F.some(([Z, ee]) => jc(B, Z, ee)))
          });
        }
      },
      A,
      C
    );
    (y.settled.catch(() => {}), (D = y.mounted.catch(() => "mounted")));
    let k = y.mounted
      .then(
        () => {},
        (r) => t(`MCP connector refetch after account switch failed: ${d(r)}`, { level: "warn" })
      )
      .finally(() => {
        if (R.headlessConnectorMountInFlight === k) R.headlessConnectorMountInFlight = void 0;
      });
    R.headlessConnectorMountInFlight = u = k;
  }
  if (_.size === 0 || !P) return u;
  let K = (s) => {
      dwe(n, s.client.name, s);
    },
    Q = {
      getClients: () => [...e().mcp.clients, ...S().clients],
      getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: (s) => o((y) => ({ ...y, mcp: s(y.mcp) }))
    },
    J = (s) => {
      i.getMcpToolsCommandsAndResources(K, s, A, C)
        .catch((y) => t(`MCP re-dial after account switch failed: ${d(y)}`, { level: "warn" }))
        .finally(() => {
          R6t(s, Q, A, K).catch((y) =>
            t(`MCP re-dial retry after account switch failed: ${d(y)}`, { level: "warn" })
          );
        });
    };
  if ((J(p), Object.keys(j).length === 0 || !D)) return u;
  let V = Fr(),
    O = D.then((s) => {
      if (s === "superseded" || !rO(V)) return;
      let y = Object.create(null);
      for (let [k, r] of Object.entries(j)) {
        let x = cu(k, r);
        if (x) K({ client: N(k, r, x), tools: [], commands: [], attemptEpoch: V });
        else y[k] = r;
      }
      if (Object.keys(y).length > 0) J(y);
    }).catch((s) =>
      t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${d(s)}`, {
        level: "warn"
      })
    ),
    q = Promise.all([u, O])
      .then(() => {})
      .finally(() => {
        if (R.headlessConnectorMountInFlight === q) R.headlessConnectorMountInFlight = void 0;
      });
  return ((R.headlessConnectorMountInFlight = q), q);
}
function sZr(n, e, o, S) {
  let w = o?.type === "connected" && o.client === n.client,
    A = o !== void 0 && o.type !== "disabled" && ir(n.name, o.config) === ir(n.name, e);
  return !w && (!S || !A);
}
var ie = 5,
  ae = 1000;
function Dls(n) {
  let { getAppState: e, getDynamicMcpState: o, now: S = Date.now } = n,
    w = new WeakSet(),
    A = new WeakMap(),
    C = new WeakMap(),
    v = (M, i, R) => {
      let P = i > 1 ? PSt(i - 1) - R : 0,
        T = [...e().mcp.clients, ...o().clients].some(
          (l) => l.type === "connected" && l.client === M.client
        );
      if (P <= 0 || !T || n.isControlReconnectInFlight(M.name)) return 0;
      try {
        n.onHeldOff?.(i, P);
      } catch (l) {
        t(`MCP reconnect hold-off observer failed for ${M.name}: ${d(l)}`, { level: "warn" });
      }
      return (
        se(
          M.name,
          `${M.config.type} transport closed again soon after it connected: reconnecting in ${P}ms`
        ),
        P
      );
    };
  return (M) => {
    for (let i of M) {
      if (i.type === "connected") C.set(i.client, i);
      if (i.type !== "connected" || w.has(i.client) || !le(i.config)) continue;
      w.add(i.client);
      let R = S(),
        P = (T) => {
          if (ys() || n.isRunEnding()) return;
          i.cleanup().catch(() => {});
          let l = Math.max(0, S() - R),
            _ = l < i8s ? (A.get(i.client) ?? 0) + 1 : 0;
          (async () => {
            let c = v(i, _, l),
              h = n.sleep ?? ce;
            if (c > 0) await h(c);
            let H = () => C.get(i.client) ?? i;
            for (
              let p = 0;
              c > 0 && p < ie && (await G().hasUnsettledDial(H().name, H().config));
              p++
            )
              await h(ae);
            await de(n, H(), T, _, c > 0, (p, E) => A.set(p.client, E));
          })().catch((c) =>
            t(`MCP reconnect after close failed for ${i.name}: ${d(c)}`, { level: "warn" })
          );
        };
      if ((SFs(i, () => P(!1)), aEe(i))) setImmediate(P, !0);
    }
  };
}
function ce(n) {
  return X(n, void 0, { unref: !0 });
}
function le(n) {
  return n.type !== void 0 && n.type !== "stdio" && n.type !== "sdk";
}
async function de(n, e, o, S, w, A) {
  let {
      getAppState: C,
      getDynamicMcpState: v,
      storageV5: M,
      credentials: i,
      isControlReconnectInFlight: R,
      isRunEnding: P,
      onReconnected: T,
      sleep: l = ce,
      random: _ = Math.random
    } = n,
    { name: c, config: h } = e,
    H = Fr(),
    p = () => ys() || P() || (Fr() !== H && xT(h)),
    E = () => C().mcp.clients.find((u) => u.name === c) ?? v().clients.find((u) => u.name === c),
    U = e,
    L = () => E() === U,
    z = (u) => {
      dwe(n, c, u);
    },
    j = G(),
    W = Wre + jJn;
  for (let u = 1; u <= W; u++) {
    let D = u - Wre;
    if (u > 1)
      await l(
        D > 0
          ? UI({ baseMs: Vjo, capMs: a8s, floorMs: Vjo / 2, attempt: D - 1, random: _ })
          : PSt(u - 1)
      );
    if (p() || !L()) return;
    let K = Fr();
    if (D > 0) {
      let F = { name: c, type: "pending", config: h };
      if (f5e(c, F)) {
        z({ client: F, tools: [], commands: [], attemptEpoch: K });
        return;
      }
      if (await j.hasUnsettledDial(c, h)) {
        if (u < W) {
          se(
            c,
            `Background reconnect attempt ${D}/${jJn} skipped: another reconnect to this server is in progress; will try again at the next attempt`
          );
          continue;
        }
        if (!p() && L() && !R(c))
          (se(
            c,
            `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`
          ),
            m("mcp_slow_reconnect", "gave_up", { attempts: u, found_closed: o }));
        return;
      }
      if (p() || !L()) return;
    } else {
      let F = {
        name: c,
        type: "pending",
        config: h,
        reconnectAttempt: u,
        maxReconnectAttempts: Wre
      };
      (z({ client: F, ...gfr(C().mcp, c), attemptEpoch: K }), (U = F));
    }
    if (!L() || R(c)) return;
    se(
      c,
      u === 1
        ? `${h.type} transport ${o ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${Wre})`
        : D > 0
          ? `Background reconnect attempt ${D}/${jJn}`
          : `Reconnect attempt ${u}/${Wre}`
    );
    let Q = w && u === 1 ? await j.peekSettledConnection(c, h) : void 0,
      J = Q?.type === "connected" && !aEe(Q) ? Wae(Q, h) : void 0,
      V = {
        ...(J !== void 0
          ? { client: J, ...gfr(C().mcp, c) }
          : await j
              .reconnectMcpServerImpl(c, h, M, i, { keepConnectionInUse: !0 })
              .catch((F) => ({
                client: { name: c, type: "failed", config: h, error: d(F) },
                tools: [],
                commands: []
              }))),
        attemptEpoch: K
      },
      O = V.client.type === "connected" ? V.client : void 0,
      q = O !== void 0 && lEe(await j.peekSettledConnection(c, h), O),
      s = () => {
        if (O && sZr(O, h, E(), q && !P())) j.detachAndCloseConnection(O).catch(() => {});
      };
    if (p() || !L() || R(c)) {
      s();
      return;
    }
    let y = V.keptConnectionInUse === !0 && O?.toolsListError !== void 0 && f5e(c, O) === void 0;
    if (O && q && !y) {
      if ((A(O, S + u - 1), z(V), E() === O)) {
        if (O === J)
          aae(
            O,
            (F, B) => {
              ne(n, F, B, O.config);
            },
            M
          ).catch((F) =>
            t(`MCP tools refresh over a kept connection failed for ${c}: ${d(F)}`, {
              level: "warn"
            })
          );
        (se(c, `Reconnected (attempt ${u})`),
          g(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", {
            attempts: u,
            found_closed: o,
            young_closes: S
          }),
          T(O));
      }
      return;
    }
    s();
    let k = O && {
        name: c,
        type: "failed",
        config: h,
        error: y ? "Its tools could not be listed" : "Connection closed again while reconnecting"
      },
      r = k ?? V.client,
      x = k ? { ...k, errorCode: "ConnectionClosed" } : r,
      I = GLt(x);
    if (u === Wre || (D > 0 && (!I || u === W))) {
      if (
        (se(
          c,
          D <= 0 && I
            ? `Still failing after ${u} attempts`
            : `Reconnect gave up after ${u} attempts: ${r.type}`
        ),
        z({
          client: r,
          tools: r.type === "needs-auth" ? c1(c, h) : [],
          commands: [],
          attemptEpoch: K
        }),
        E() !== r)
      )
        return;
      if (r.type === "needs-auth") {
        f(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", {
          attempts: u,
          found_closed: o,
          young_closes: S
        });
        return;
      }
      if (D > 0) {
        m("mcp_slow_reconnect", I ? "gave_up" : "not_retryable", { attempts: u, found_closed: o });
        return;
      }
      if (
        (m("mcp_auto_reconnect", "exhausted", {
          attempts: u,
          found_closed: o,
          young_closes: S,
          goes_slow: I
        }),
        !I)
      )
        return;
      ((U = r),
        se(c, `Reconnect attempts spent; retrying in the background, up to ${jJn} more times`));
      continue;
    }
    se(
      c,
      D > 0
        ? `Background reconnect attempt ${D} did not connect (${r.type})`
        : `Reconnect attempt ${u} did not connect (${r.type}); next in ${PSt(u)}ms`
    );
  }
}
var te = new WeakMap();
function Hls(n) {
  return te.get(n);
}
function ne(n, e, o, S) {
  let { setAppState: w, getDynamicMcpState: A, setDynamicMcpState: C } = n,
    v = !1,
    M = !1,
    i;
  w((l) => {
    let _ = l.mcp.clients.find((H) => H.name === e),
      c = v8t(_, o, S);
    if (c === void 0) return ((M = !0), l);
    let h = JPn(l, e, c);
    return ((v = h !== l), (i = v && _ !== void 0 ? { row: _, tools: c } : void 0), h);
  });
  let R = A(),
    P = R.clients.find((l) => l.name === e),
    T = v8t(P, o, S);
  if (T === void 0) M = !0;
  else {
    let l = Vus(R, e, T);
    if (l !== R) (C(l), (v = !0));
  }
  if (i !== void 0)
    if (P?.type === "pending") te.set(i.row, i.tools);
    else te.delete(i.row);
  if (M) se(e, "A re-queried tool list was not applied: another server holds the name");
  return v;
}
function Lls(n) {
  return (e, o, S) => ne(n, e, o, S);
}
function Nls(n) {
  let { getAppState: e, getDynamicMcpState: o } = n.stores,
    S = new WeakSet(),
    w = new WeakMap();
  return (A) => {
    for (let C of A) {
      if (C.type === "connected") w.set(C.client, C);
      if (C.type !== "connected" || S.has(C.client)) continue;
      if ((S.add(C.client), !C.capabilities?.tools?.listChanged)) continue;
      let v = C.name;
      G().onMcpToolListChanged(C, async (M) => {
        se(
          v,
          M === wce
            ? "Synthesized tools refetch after listen-stream reopen (no notification received)"
            : M === Let
              ? "Refreshing tools for a tools/list_changed notification received before this handler was registered"
              : "Received tools/list_changed notification, refreshing tools"
        );
        let i = e().mcp.clients.find((c) => c.name === v) ?? o().clients.find((c) => c.name === v),
          R = w.get(C.client) ?? C,
          P = i !== void 0 && ir(v, i.config) === ir(v, R.config) ? Wae(R, i.config) : R;
        w.set(C.client, P);
        let T = await aae(
          P,
          (c, h) => {
            ne(n.stores, c, h, P.config);
          },
          n.storageV5
        );
        if (T.status === "kept-previous") {
          se(v, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let l = T.newTools.length,
          _ = (c) =>
            a("tengu_mcp_list_changed", {
              mcpServerKeyHash: oM(v),
              type: b("tools"),
              cause: dje(M),
              previousCount: c,
              newCount: l,
              ...jCs(C)
            });
        if (T.previousToolsPromise)
          T.previousToolsPromise.then(
            (c) => _(c.length),
            () => _()
          );
        else _();
      });
    }
  };
}
export { oZr, Mls, gfr, f5e, dwe, JRn, sZr, Dls, Hls, Lls, Nls };

//# sourceMappingURL=chunk-3e2ws2an.js.map
