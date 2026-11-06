import {
  fileURLToPath as __sourceFilePath_4b94b3900dea1788,
  URL as __sourceFilePath_4b94b3900dea1788_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _, te, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { De } from "./chunk-2qx8pe6s.js";
import { F } from "./chunk-wrtp8qz8.js";
import { b } from "./chunk-acd8w9vv.js";
import { Ye, Ke, R, N, d, G } from "./chunk-fs43t96t.js";
import { Le } from "./chunk-jazcqqqr.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { l } from "./chunk-ewvf3tep.js";
import { We } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { os } from "./chunk-jtb5bzvb.js";
import { HN, WN } from "./chunk-j0tbz6ra.js";
import { rz } from "./chunk-5z6t3gwt.js";
import { jO, rWo, Lmn, HSt, AWr, cWo, aQn, lQn, dQn, Ll } from "./chunk-wany0nxw.js";
import { Ir, xo, $w } from "./chunk-5rw2zfa0.js";
import { Yk, rM, wv } from "./chunk-ajtyjx88.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { er } from "./chunk-1e5yp9hx.js";
import { jc, pA, Xo } from "./chunk-928ws1pg.js";
import { ONe } from "./chunk-7c3thgax.js";
import { iS } from "./chunk-0v8111n2.js";
import { ld } from "./chunk-53nx6xac.js";
import { VW } from "./chunk-rjdks4dd.js";
import { phr, h9t } from "./chunk-pn6xnm1s.js";
import { Ove, Wvr, Gvr, bBe } from "./chunk-qy6y62kt.js";
import { mEe, dtn } from "./chunk-e2yfqzm0.js";
import { aae } from "./chunk-3nrh7z4g.js";
import { KR } from "./chunk-1t7vm9a1.js";
import { g1 } from "./chunk-qce1rsft.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { g_e } from "./chunk-fcym4pv0.js";
import { uq, rAt, PQo } from "./chunk-errevp3y.js";
import { o, T, u, B, A } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
import { hostname as Pt } from "os";
import { dirname as Mt, join as wt } from "path";
var Be = 1e4,
  Ue = 3,
  Ve = 60000;
class M extends Error {
  unavailable;
  name = "PassthroughMcpUnavailableError";
  constructor(e, n, i) {
    super(n, i);
    this.unavailable = e;
  }
}
function das(e) {
  let n = e.ops ?? ze(),
    i = e.dialLatch ?? dtn(),
    m = Object.keys(e.configs),
    s = new Map(),
    c = new Map(),
    v = new WeakSet(),
    C = De(),
    y = Date.now(),
    g,
    P = !1,
    k = () => {},
    I = new Promise((r) => {
      k = r;
    }),
    O,
    ne = Date.now(),
    D = () => g !== void 0;
  function U() {
    if (P) return;
    if (((P = !0), O !== void 0)) (clearTimeout(O), (O = void 0));
    let r = [...c.values()],
      a = (f) => F(r, (h) => h === f);
    (k({
      configured: m.length,
      connected: a("connected"),
      cached: a("cached"),
      failed: a("failed"),
      needsAuth: a("needs-auth"),
      disabled: a("disabled"),
      blocked: a("blocked"),
      excluded: a("excluded"),
      unreported: m.length - c.size,
      settleMs: Date.now() - y
    }),
      oe([...s].filter(([, f]) => f.handle.type === "cached").map(([f]) => f)));
  }
  async function oe(r) {
    let a = async (S) => {
        X();
        let w = s.get(S);
        if (w && !D()) (await se(S, w).catch(() => {}), X());
      },
      f = (S) => n.dialConcurrency(e.configs[S]),
      h = r.filter((S) => s.has(S));
    await Promise.all(
      $w(h, (S) => f(S).kind === "local")
        .filter((S) => S.length > 0)
        .map((S) => iS(S, a, { concurrency: f(S[0]).limit }))
    );
  }
  function W() {
    try {
      C.emit();
    } catch (r) {
      l(r);
    }
  }
  function x(r, a) {
    let f = s.get(r);
    if (f) s.set(r, { ...f, ...a });
  }
  function Oe(r, a) {
    let f = s.get(r.name),
      h = pe(r.name, a);
    if (
      (s.set(r.name, {
        handle: r,
        tools: h,
        dialing: f?.dialing,
        listing: void 0,
        consecutiveDialFailures: 0,
        everConnected: f?.everConnected === !0 || r.type === "connected"
      }),
      r.type === "connected")
    ) {
      if (h.length === 0) x(r.name, { listing: q(r.name, r) });
      ie(r.name, r);
    } else if (P) oe([r.name]);
    if (f !== void 0 || P) W();
  }
  function ie(r, a) {
    let f = s.get(r);
    if (!f || D()) return;
    if (f.handle !== a) (x(r, { handle: a, everConnected: !0 }), x(r, { listing: q(r, a) }), W());
    if (!v.has(a) && a.capabilities?.tools?.listChanged)
      (v.add(a),
        n.onToolListChanged(a, async () => {
          await q(r, a);
        }));
  }
  function q(r, a) {
    let f = !1;
    return n
      .refreshTools(
        a,
        (h, S) => {
          if (s.get(r)?.handle === a && !D())
            (x(r, { tools: pe(r, S), listing: void 0 }), (f = !0), W());
        },
        e.storageV5
      )
      .then(
        () => f,
        (h) => (
          t(`[deviceBridge] passthrough MCP tools refresh failed for ${r}: ${N(h).message}`),
          !1
        )
      );
  }
  function H(r, a) {
    let f = s.get(r);
    if (!f || D()) return;
    (s.delete(r),
      n.dispose(r, f.handle.config),
      n.cleanup([f.handle]),
      t(`[deviceBridge] passthrough MCP server ${r} left the pool (${a})`),
      W());
  }
  function X() {
    let r = Date.now();
    if (r - ne >= Ve) ((ne = r), n.refreshPolicy());
    for (let [a, f] of s)
      if (!n.allowedByPolicy(a, f.handle.config)) H(a, "denied by managed policy");
  }
  function se(r, a) {
    if (a.dialing) return a.dialing;
    if (i.shouldSkip(r))
      return Promise.reject(
        new M("server", "MCP server failed to connect recently; not retrying yet")
      );
    let f = n.ensureConnected(a.handle).then(
      (h) => {
        if ((ae(r, f), i.recordSuccess(r), D() || !s.has(r)))
          throw (
            n.cleanup([h]),
            new M("server", "MCP server is no longer offered by this machine")
          );
        return (x(r, { consecutiveDialFailures: 0 }), ie(r, h), h);
      },
      (h) => {
        if ((ae(r, f), Y(h))) throw (H(r, "needs authentication"), h);
        i.recordFailure(r);
        let S = s.get(r),
          w = (S?.consecutiveDialFailures ?? 0) + 1;
        if ((x(r, { consecutiveDialFailures: w }), w >= Ue && S?.everConnected !== !0))
          H(r, "repeated dial failures");
        else if (s.has(r)) n.dispose(r, a.handle.config);
        throw h;
      }
    );
    return (x(r, { dialing: f }), f);
  }
  function ae(r, a) {
    if (s.get(r)?.dialing === a) x(r, { dialing: void 0 });
  }
  async function Ne(r, { signal: a, deadline: f }) {
    let h = s.get(r)?.listing;
    while (h !== void 0) {
      let S = await mEe(h, {
          signal: a,
          timeoutMs: Math.max(0, f - Date.now()),
          serverName: r,
          context: "device tool call"
        }).catch((E) => {
          if (Ke(E)) throw E;
          throw new M("server", "MCP server connected too late for this call", { cause: E });
        }),
        w = s.get(r);
      if (S || w?.listing === void 0) return;
      if (w.listing !== h) {
        h = w.listing;
        continue;
      }
      if (w.handle.type === "connected") x(r, { listing: q(r, w.handle) });
      throw new M("server", "MCP server did not list its tools");
    }
  }
  async function xe(r, { signal: a, timeoutMs: f }) {
    let h = s.get(r);
    if (D() || !h) throw new M("server", "MCP server is not available on this machine");
    try {
      return await mEe(se(r, h), {
        signal: a,
        timeoutMs: f,
        serverName: r,
        context: "device tool call"
      });
    } catch (S) {
      if (Ke(S) || S instanceof M) throw S;
      if (Y(S)) throw ue(S);
      throw (
        t(`[deviceBridge] passthrough MCP dial failed for ${r}: ${N(S).message}`),
        new M("server", "MCP server could not be reached for this call", { cause: S })
      );
    }
  }
  function ce(r, a) {
    X();
    let f = s.get(r);
    if (!f || D()) throw new M("server", "MCP server is not available on this machine");
    let h = f.tools.find((S) => le(S) === a);
    if (!h) throw new M("tool", "MCP tool is not offered by this machine");
    if (h.mcpInfo?.effectiveMaxPermission === "blocked")
      throw new M("tool", "MCP tool is blocked on this machine by the organization");
  }
  async function ke(r, a, { signal: f, deadline: h }) {
    ce(r, a);
    let S = await xe(r, { signal: f, timeoutMs: Math.max(0, h - Date.now()) });
    if ((await Ne(r, { signal: f, deadline: h }), ce(r, a), s.get(r)?.handle !== S))
      throw new M("server", "MCP server was reconnected during this call; retry");
    if (h - Date.now() <= 0) throw new M("server", "MCP server connected too late for this call");
    return S;
  }
  async function Ie(r, a, f, { signal: h, deadline: S, imageLimits: w }) {
    let E = Ts(h, { timeoutMs: Math.max(0, S - Date.now()), refTimer: !0 }),
      K = (L) =>
        h.aborted
          ? new Ye(`MCP tool call on '${r}' aborted`)
          : E.signal.aborted
            ? new R(
                `MCP server "${r}" did not answer the call within its deadline`,
                "MCP passthrough call deadline"
              )
            : L;
    try {
      let L = await n.callTool(a, f, { signal: E.signal, imageLimits: w }).catch((V) => {
        throw K(V);
      });
      if (L.isError)
        throw "urlElicitationDeclined" in L
          ? new M(
              "tool",
              "MCP tool needs a consent step in a browser on this machine, which a served call cannot show"
            )
          : K(
              new R(
                "MCP tool call on this machine ended without a result",
                "MCP passthrough call ended without a result"
              )
            );
      return L;
    } finally {
      E.cleanup();
    }
  }
  function He(r, a) {
    if (!Y(a)) return a;
    return (H(r, "needs authentication"), ue(a));
  }
  function je({ client: r, tools: a }) {
    if (D() || c.get(r.name) === "dropped") {
      n.cleanup([r]);
      return;
    }
    if (!Object.hasOwn(e.configs, r.name)) return;
    switch (r.type) {
      case "connected":
      case "cached":
        (c.set(r.name, r.type), Oe(r, a));
        break;
      case "failed":
        (c.set(r.name, r.type), H(r.name, "failed"));
        break;
      case "needs-auth":
        (c.set(r.name, r.type), H(r.name, "needs authentication"));
        break;
      case "disabled":
        (c.set(r.name, r.type), H(r.name, "disabled"));
        break;
      case "pending":
        break;
      default:
    }
    if (c.size >= m.length) U();
  }
  n.policySettled()
    .then(() => {
      if (D()) return;
      O = setTimeout(U, e.settleTimeoutMs ?? Be);
      let r = Ko(e.configs, (a, f) => {
        if (c.get(f) === "dropped") return !1;
        if (n.needsLocalPrompts(a)) return (c.set(f, "excluded"), !1);
        let h = n.allowedByPolicy(f, a);
        if (!h) c.set(f, "blocked");
        return h;
      });
      return n.discover(je, r, e.storageV5);
    })
    .catch((r) => {
      t(`[deviceBridge] passthrough MCP discovery failed: ${N(r).message}`);
    })
    .finally(() => {
      (U(), de((r) => D() || c.get(r) === "dropped"));
    });
  function de(r = () => !0) {
    for (let a of m.filter(r)) n.dispose(a, e.configs[a]);
  }
  return {
    settled: I,
    servers() {
      return (
        X(),
        m.flatMap((r) => {
          let a = s.get(r);
          return a
            ? [{ name: r, scope: a.handle.config.scope, tools: a.tools, status: a.handle.type }]
            : [];
        })
      );
    },
    subscribe: C.subscribe,
    async callTool(r, a, { signal: f, timeout: h, imageLimits: S }) {
      let w = Date.now() + h,
        E = async (K) => {
          let L = await ke(r, a.name, { signal: f, deadline: w });
          try {
            return await Ie(r, L, a, { signal: f, deadline: w, imageLimits: S });
          } catch (V) {
            let Fe = a.name;
            if (
              K &&
              V instanceof rM &&
              (!V.mayHaveRun || s.get(r)?.tools.find(($e) => le($e) === Fe)?.readOnlyHint === !0)
            )
              return E(!1);
            throw He(r, V);
          }
        };
      return E(!0);
    },
    toolTimeoutMs: (r) => n.toolTimeoutMs(e.configs[r]),
    dropServer(r) {
      if (D() || !Object.hasOwn(e.configs, r)) return;
      if ((c.set(r, "dropped"), s.has(r))) H(r, "dropped by the caller");
      else n.dispose(r, e.configs[r]);
      if (c.size >= m.length) U();
    },
    stop() {
      return (
        (g ??= (async () => {
          if (O !== void 0) (clearTimeout(O), (O = void 0));
          C.clear();
          let r = [...s.values()].map((a) => a.handle);
          (s.clear(), U(), de(), await n.cleanup(r));
        })()),
        g
      );
    }
  };
}
function ze() {
  let e = import.meta
    .require(
      __sourceFilePath_4b94b3900dea1788(
        new __sourceFilePath_4b94b3900dea1788_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule();
  return {
    policySettled: () =>
      Promise.all([KR(), ONe()]).then(() => {
        return;
      }),
    discover: (n, i, m) => e.getMcpToolsCommandsAndResources(n, i, m),
    ensureConnected: (n) => e.ensureConnectedClient(n),
    onToolListChanged: (n, i) => e.onMcpToolListChanged(n, i),
    refreshTools: aae,
    callTool: (n, i, { signal: m, imageLimits: s }) =>
      e.callMCPTool({
        client: n,
        tool: i.name,
        args: i.arguments ?? {},
        meta: i._meta,
        signal: m,
        imageLimits: s,
        hasResultSizeAnnotation: !0,
        storageV5: void 0,
        credentials: void 0
      }),
    cleanup: (n) => e.cleanupConnectedMcpClients(n),
    dispose: (n, i) => e.disposeServerConnectionDetached(n, i),
    refreshPolicy: er,
    allowedByPolicy: WN,
    needsLocalPrompts: (n) => e.isFirstPartyDesignServerConfig(n),
    dialConcurrency: (n) =>
      e.isLocalMcpServer(n)
        ? { kind: "local", limit: e.getMcpServerConnectionBatchSize() }
        : { kind: "remote", limit: e.getRemoteMcpServerConnectionBatchSize() },
    toolTimeoutMs: (n) => e.getMcpToolTimeoutMs(n)
  };
}
function le(e) {
  return e.mcpInfo?.toolName ?? e.name;
}
function Y(e) {
  return (
    e instanceof Yk ||
    (e !== null &&
      typeof e === "object" &&
      "mcpErrorSource" in e &&
      e.mcpErrorSource === "user_auth")
  );
}
function ue(e) {
  return new M("server", "MCP server needs authentication on this machine", { cause: e });
}
function pe(e, n) {
  return n.filter((i) => i.mcpInfo !== void 0 && jc(i, e));
}
var fe = rWo,
  J = Lmn;
class j extends R {
  verdict;
  constructor(e, n, i) {
    super(n, i, e.code);
    this.verdict = e;
    this.name = "PassthroughCallError";
  }
}
function cas(e, n) {
  return (
    e?.onToolVerdict?.({ kind: "refused", code: "not_served" }, n.message),
    { result: !1, message: n.message, errorCode: 1 }
  );
}
function uas(e, n, i) {
  let m = new j({ kind: "refused", code: "not_served" }, n, i);
  throw (e?.onToolVerdict?.(m.verdict, m.message), m);
}
function fas(e, n, i, m) {
  let s = new Set(m.values()),
    c = J.filter((v) => !s.has(v));
  return async (v, C) => {
    if (C.remoteCall === void 0) throw new j({ kind: "refused", code: "invalid_request" }, me, me);
    let y = e.toolTimeoutMs(n),
      { onToolVerdict: g } = C.remoteCall,
      P = await e
        .callTool(
          n,
          { name: i, arguments: xo(v, c) },
          {
            signal: C.abortController.signal,
            timeout: y,
            imageLimits: { ...ld(C.options.mainLoopModel), allowWebp: !1 }
          }
        )
        .catch((k) => {
          let I = Ge(k, n);
          if (I instanceof j) g?.(I.verdict, I.message);
          throw I;
        });
    return {
      data: P.content,
      ...((P._meta || P.structuredContent) && {
        mcpMeta: {
          ...(P._meta && { _meta: g1(P._meta) }),
          ...(P.structuredContent && { structuredContent: P.structuredContent })
        }
      })
    };
  };
}
var me = "MCP passthrough tools run only for a remote tool call; the call did not run";
function Ge(e, n) {
  if (Ke(e) || e instanceof j) return e;
  if (e instanceof wv)
    return new wv(
      `MCP server "${n}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`,
      "MCP passthrough tool returned an error",
      e.mcpMeta
    );
  if (Xe(e))
    return new j(
      { kind: "refused", code: "not_served" },
      `MCP server "${n}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`,
      "MCP passthrough call needs URL consent on this machine"
    );
  if (e instanceof M)
    return new j(
      { kind: "refused", code: "not_served" },
      `MCP server "${n}" on this machine: ${e.message}; the call did not run`,
      e.message
    );
  return (
    t(`[deviceBridge] passthrough MCP call on ${n} failed: ${N(e).message}`),
    new j(
      { kind: "failed", code: "tool_error" },
      `MCP server "${n}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`,
      "MCP tool call failed on this machine"
    )
  );
}
var qe = -32042;
function Xe(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === qe;
}
var Je = cWo;
var Qe = aQn - 262144,
  Ze = AWr,
  et = 65536,
  tt = 256,
  nt = 512,
  ot = {
    enterprise: 0,
    managed: 1,
    local: 2,
    user: 3,
    dynamic: 4,
    project: 5,
    claudeai: 6,
    agent: 7
  },
  Se = new Set(["enterprise", "managed"]);
async function pas(e, n) {
  let i = ye(e),
    m = await Promise.all(i.map((y) => Promise.all(y.tools.map((g) => ct(y.name, g, n.target))))),
    s = rt(i, m, n.configured),
    {
      tools: c,
      dropped: v,
      byServer: C
    } = i.reduce(
      (y, g, P) => {
        let k = we(g.scope) ? { reason: "enterprise_scope" } : s.server(g);
        return (m[P] ?? []).reduce((I, O) => it(I, O, k, s, n), y);
      },
      { announced: new Set(), bytes: 0, tools: [], dropped: [], byServer: new Map() }
    );
  return { tools: c, dropped: v, byServer: C };
}
function rt(e, n, i) {
  let m = ye([...e, ...i.filter((g) => !e.some((P) => P.name === g.name))]),
    s = new Set(m.filter((g) => Se.has(g.scope)).map((g) => g.name)),
    c = [...s].map((g) => `${uq(pA(g))}_`),
    v = (g, P) => !s.has(g) && c.some((k) => `${P}_`.startsWith(k)),
    C = he(m.map((g) => [uq(pA(g.name)), { server: g.name, admin: s.has(g.name) }])),
    y = he(
      n
        .flat()
        .map((g) => [uq(g.name), { server: g.server, admin: s.has(g.server), rawName: g.rawName }])
    );
  return {
    server: (g) =>
      PQo(g.name) || rAt(g.name) || v(g.name, uq(pA(g.name)))
        ? { reason: "collision" }
        : ge(C.get(uq(pA(g.name))) ?? [], g.name, (P) => P.server === g.name),
    tool: (g) =>
      Gvr(g.name)
        ? { reason: "service_reserved" }
        : !bBe(g.name) || PQo(g.name) || rAt(g.name) || v(g.server, uq(g.name))
          ? { reason: "collision" }
          : ge(
              y.get(uq(g.name)) ?? [],
              g.server,
              (P) => P.server === g.server && P.rawName === g.rawName
            )
  };
}
function ge(e, n, i) {
  let m = e.find((s) => s.admin) ?? (e.length === 1 ? e[0] : void 0);
  if (m === void 0)
    return { reason: "alias_collision", contenders: e.map((s) => s.server).filter((s) => s !== n) };
  return i(m) ? void 0 : { reason: "collision" };
}
function he(e) {
  return e.reduce((n, [i, m]) => {
    let s = n.get(i) ?? [];
    if (!s.some((c) => c.server === m.server)) n.set(i, [...s, m]);
    return n;
  }, new Map());
}
function it(e, n, i, m, { isDenied: s, serve: c }) {
  let v =
    i ??
    m.tool(n) ??
    (n.tool.mcpInfo?.effectiveMaxPermission === "blocked"
      ? { reason: "permission_ceiling" }
      : s(n.tool)
        ? { reason: "deny_rule" }
        : st(n, e));
  if ("reason" in v) return (e.dropped.push({ server: n.server, tool: n.rawName, ...v }), e);
  (e.announced.add(n.name),
    (e.bytes += v.bytes),
    e.tools.push(c({ ...n, definition: v.definition, wireArguments: v.wireArguments })));
  let C = e.byServer.get(n.server);
  if (C === void 0) ((C = []), e.byServer.set(n.server, C));
  return (C.push(v.definition), e);
}
function st({ name: e, definition: n, wireArguments: i }, { announced: m, bytes: s }) {
  if (i === "reserved_argument") return { reason: "reserved_argument" };
  if (e.length > Je) return { reason: "name_length" };
  if (m.has(e)) return { reason: "collision" };
  if (n === void 0) return { reason: "definition_error" };
  let c = Buffer.byteLength(_(n));
  if (c > et) return { reason: "definition_size" };
  if (!HSt(n.inputSchema, dQn)) return { reason: "schema_depth" };
  if (s + c > Qe) return { reason: "announce_budget" };
  if (m.size >= Ze) return { reason: "announce_count" };
  return { definition: n, bytes: c, wireArguments: i };
}
function ye(e) {
  return e
    .map((n, i) => ({ server: n, index: i, rank: at(n.scope) }))
    .sort((n, i) => n.rank - i.rank || n.index - i.index)
    .map((n) => n.server);
}
function at(e) {
  return ot[e] ?? Number.MAX_SAFE_INTEGER;
}
async function ct(e, n, i) {
  let m = n.mcpInfo?.toolName ?? n.name,
    s = dt(e, m),
    c = pt(n.inputJSONSchema),
    v = c === "reserved_argument" ? h9t() : c;
  try {
    return {
      server: e,
      rawName: m,
      name: s,
      tool: n,
      definition: await ft(s, n, i, v),
      wireArguments: c
    };
  } catch (C) {
    return (
      t(`[deviceBridge] passthrough cannot describe '${s}': ${N(C).message}`, { level: "error" }),
      { server: e, rawName: m, name: s, tool: n, definition: void 0, wireArguments: c }
    );
  }
}
function dt(e, n) {
  return Xo(e, n).slice(5);
}
function ve(e) {
  return `${e}_arg`;
}
var lt = new Set([
    "$schema",
    "$comment",
    "type",
    "title",
    "description",
    "properties",
    "required",
    "additionalProperties",
    "unevaluatedProperties",
    "$defs",
    "definitions",
    "default",
    "examples",
    "minProperties",
    "maxProperties"
  ]),
  ut = new Set([
    "$ref",
    "$dynamicRef",
    "$recursiveRef",
    "$anchor",
    "$dynamicAnchor",
    "$recursiveAnchor",
    "$id"
  ]);
function pt(e) {
  let n = e?.properties,
    i = e?.required,
    m = new Set([
      ...(typeof n === "object" && n !== null ? Object.keys(n) : []),
      ...(Array.isArray(i) ? i.filter((y) => typeof y === "string") : [])
    ]),
    s = J,
    c = fe;
  if (c.some((y) => m.has(ve(y)))) return "reserved_argument";
  let v = s.filter((y) => m.has(y));
  if (v.length === 0) return h9t();
  if (
    v.some((y) => !c.includes(y)) ||
    e === void 0 ||
    !Pe(e.type) ||
    Object.keys(e).some((y) => !lt.has(y)) ||
    mt(e) ||
    v.some(
      (y) => typeof n === "object" && n !== null && Object.hasOwn(n, y) && !Me(Reflect.get(n, y))
    )
  )
    return "reserved_argument";
  let C = new Map(v.map((y) => [ve(y), y]));
  return [...C.keys()].some((y) => s.includes(y)) ? "reserved_argument" : C;
}
function mt(e) {
  let n = (i, m) => {
    if (m > dQn) return !0;
    if (Array.isArray(i)) return i.some((s) => n(s, m + 1));
    if (typeof i !== "object" || i === null) return !1;
    return Object.entries(i).some(([s, c]) => ut.has(s) || n(c, m + 1));
  };
  return n(e, 0);
}
async function ft(e, n, i, m) {
  let s = await n.description(
      {},
      { isNonInteractiveSession: !1, toolPermissionContext: Ll(), tools: [] }
    ),
    c = yt(n),
    v = HN();
  return {
    name: e,
    description: s.length <= Math.min(v, lQn) ? s : Q(s, Math.min(v, lQn - Ce.length)),
    inputSchema: gt(n, m),
    ...(c && { annotations: c }),
    _meta: Ct(n, i)
  };
}
var Ce = "\u2026 [truncated]";
function Q(e, n) {
  return e.length > n ? re(e, n) + Ce : e;
}
function gt(e, n) {
  let i = e.inputJSONSchema;
  if (i === void 0 || !Pe(i.type)) return { type: "object", properties: {} };
  let m =
    typeof i.properties === "object" && i.properties !== null && !Array.isArray(i.properties)
      ? St(i.properties)
      : {};
  return ht({ ...i, type: "object", properties: m }, n);
}
function ht(e, n) {
  if (n.size === 0) return e;
  let i = new Map([...n].map(([c, v]) => [v, c])),
    m = Ir(
      jO(e.properties, (c, v) => i.get(v) ?? v),
      (c, v) => {
        let C = n.get(v);
        return C === void 0 ? c : { ...c, description: vt(C, c) };
      }
    ),
    s = Array.isArray(e.required) ? e.required.map((c) => i.get(c) ?? c) : void 0;
  return { ...e, properties: m, ...(s && { required: s }) };
}
function vt(e, n) {
  let i = Reflect.get(n, "description"),
    m = `(The tool's own "${e}" parameter, passed under this name.)`;
  return typeof i === "string" && i !== "" ? `${i} ${m}` : m;
}
function Pe(e) {
  return e === void 0 || e === "object" || (Array.isArray(e) && e.includes("object"));
}
function St(e) {
  return Object.fromEntries(
    Object.entries(e).flatMap(([n, i]) => (Me(i) ? [[n, i === !0 ? {} : i]] : []))
  );
}
function Me(e) {
  return e === !0 || (typeof e === "object" && e !== null && !Array.isArray(e));
}
function yt(e) {
  let n = e.mcpInfo?.title,
    i = {
      ...(n !== void 0 && { title: Q(n, tt) }),
      ...(e.readOnlyHint !== void 0 && { readOnlyHint: e.readOnlyHint }),
      ...(e.isDestructive?.({}) === !0 && { destructiveHint: !0 }),
      ...(e.isOpenWorld?.({}) === !0 && { openWorldHint: !0 })
    };
  return Object.keys(i).length > 0 ? i : void 0;
}
function Ct(e, n) {
  let { inventory: i, ...m } = n,
    s = { v: Wvr, tool: e.name, target: m };
  return {
    [Ove]: s,
    ...(e.searchHint !== void 0 && { [rz.searchHint]: Q(e.searchHint, nt) }),
    ...(e.alwaysLoad === !0 && { [rz.alwaysLoad]: !0 }),
    ...(e.persistenceThresholdCeiling !== void 0 && {
      [rz.maxResultSizeChars]: e.maxResultSizeChars
    }),
    ...(e.requiresUserInteraction?.() === !0 && { [rz.requiresUserInteraction]: !0 })
  };
}
var mas = b("mcp_passthrough");
function we(e) {
  return Se.has(e);
}
var Z = !1;
function gas(e) {
  return !we(e) && (Z || e !== "project");
}
var Te = 1;
function _e() {
  return [
    phr ? "each-call-asked" : "local-rules-decide",
    Z ? "project-servers" : "no-project-servers"
  ].join("+");
}
var Tt = p(() =>
    u({
      version: A(Te),
      choice: B(["accepted", "declined"]),
      terms: o(),
      decidedAt: o(),
      hostname: o()
    })
  ),
  be = "device-mcp-consent",
  Ae = "device-mcp-consent-not-now",
  Ee = 1;
function bCn() {
  return `delete ${os(_t())} to be asked again`;
}
function SCn() {
  return `delete ${os(bt())} to be asked sooner`;
}
function ee(e) {
  return wt(Le(), "state", `${e}.json`);
}
function _t() {
  return ee(be);
}
function bt() {
  return ee(Ae);
}
async function F5t(e) {
  let n;
  try {
    n = await e.readText();
  } catch (i) {
    return (t(`device-mcp consent: store unreadable (${d(i)})`, { level: "warn" }), "unreadable");
  }
  if (n === void 0) return "unset";
  try {
    let i = Tt().safeParse(te(n));
    return i.success &&
      VW(i.data.hostname) === VW(e.hostname()) &&
      (i.data.choice === "declined" || i.data.terms === _e())
      ? i.data.choice
      : "unset";
  } catch {
    return "unset";
  }
}
async function wCn(e) {
  let n = await F5t(e);
  return n === "unreadable" ? "unset" : n;
}
async function vCn(e, n) {
  try {
    return (
      await n.writeText(
        _(
          {
            version: Te,
            choice: e,
            terms: _e(),
            decidedAt: n.now().toISOString(),
            hostname: VW(n.hostname())
          },
          null,
          2
        ) +
          `
`
      ),
      !0
    );
  } catch (i) {
    return (t(`device-mcp consent: answer not saved (${d(i)})`, { level: "warn" }), !1);
  }
}
var At = p(() => u({ version: A(Ee), servers: T(o()), decidedAt: o(), hostname: o() }));
async function rat(e) {
  let n;
  try {
    n = await e.readText();
  } catch (i) {
    return (t(`device-mcp not-now: store unreadable (${d(i)})`, { level: "warn" }), []);
  }
  if (n === void 0) return [];
  try {
    let i = At().safeParse(te(n));
    return i.success && VW(i.data.hostname) === VW(e.hostname()) ? i.data.servers : [];
  } catch {
    return [];
  }
}
async function ECn(e, n) {
  try {
    return (
      await n.writeText(
        _(
          { version: Ee, servers: e, decidedAt: n.now().toISOString(), hostname: VW(n.hostname()) },
          null,
          2
        ) +
          `
`
      ),
      !0
    );
  } catch (i) {
    return (t(`device-mcp not-now: not saved (${d(i)})`, { level: "warn" }), !1);
  }
}
async function kCn(e) {
  try {
    await e.removeText();
  } catch (n) {
    t(`device-mcp not-now: not cleared (${d(n)})`, { level: "warn" });
  }
}
function oat(e, n) {
  if (e.length === 0) return !1;
  let i = new Set(e);
  return n.every((m) => i.has(m));
}
function Re(e, n) {
  let i = z() && n !== void 0 ? n : void 0,
    m = We.state(e),
    s = ee(e);
  return {
    readText: async () => {
      if (i) {
        let c = await i.readText([m]);
        if (!c.ok) throw Error("device-mcp state read failed");
        let v = c.value.items[0];
        return v.found ? v.value : void 0;
      }
      try {
        return await hn().read(s);
      } catch (c) {
        if (G(c)) return;
        throw c;
      }
    },
    writeText: async (c) => {
      if (i) {
        if (!(await i.write(m, c, { mode: 384 })).ok) throw Error("device-mcp state write failed");
        return;
      }
      (await hn().mkdir(Mt(s), 448), await hn().atomicWrite(s, c, 384));
    },
    removeText: async () => {
      if (i) {
        if (!(await i.delete(m)).ok) throw Error("device-mcp state delete failed");
        return;
      }
      try {
        await hn().delete(s);
      } catch (c) {
        if (!G(c)) throw c;
      }
    },
    now: () => new Date(),
    hostname: Pt
  };
}
function swe(e) {
  return Re(be, e);
}
function gpe(e) {
  return Re(Ae, e);
}
function C6(e) {
  return g_e(e);
}
export {
  das,
  cas,
  uas,
  fas,
  pas,
  mas,
  gas,
  bCn,
  SCn,
  F5t,
  wCn,
  vCn,
  rat,
  ECn,
  kCn,
  oat,
  swe,
  gpe,
  C6
};

//# sourceMappingURL=chunk-ycrnnn2z.js.map
