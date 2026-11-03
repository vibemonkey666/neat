import {
  fileURLToPath as __filePath_38409fce05dd6628,
  URL as __filePath_38409fce05dd6628_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vme, uJ } from "./chunk-0szbzt7f.js";
import { Qpe } from "./chunk-1enm1nhw.js";
import { xEe } from "./chunk-2nwr73hs.js";
import { Qe, N, d } from "./chunk-fs43t96t.js";
import { T_ } from "./chunk-6bbdndfe.js";
import { U, AC, bW } from "./chunk-wrtp8qz8.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { l } from "./chunk-ewvf3tep.js";
import { bt, _, t } from "./chunk-4kxznmzw.js";
import { Sct, wct, hae } from "./chunk-vaw9tryj.js";
import { fe } from "./chunk-xe386mry.js";
import { st, C4r, RKt, Srr, hbn } from "./chunk-ajtyjx88.js";
import { ur, cp, Nl } from "./chunk-t86k189s.js";
import { vf } from "./chunk-6z6dbjsw.js";
import {
  EL,
  aWn,
  tke,
  XOe,
  ble,
  NC,
  hTo,
  nv,
  mp,
  fNt,
  oJe,
  pNt,
  Ld,
  xg,
  YPo,
  pFs
} from "./chunk-j0tbz6ra.js";
import { v8 } from "./chunk-xt7fs806.js";
import { VO } from "./chunk-cr7a2cdd.js";
import { KA, uv } from "./chunk-d5zj5299.js";
import { Rn, rS } from "./chunk-wany0nxw.js";
import { iU } from "./chunk-6h7ejyet.js";
import { Pu } from "./chunk-m5rm7nsm.js";
import { OS } from "./chunk-ybr49gcx.js";
import { Z3 } from "./chunk-yyq6mj0n.js";
import { KOn } from "./chunk-tgw6g4qf.js";
import { Ect } from "./chunk-m3dmd0bf.js";
import { pN } from "./chunk-tqjdehqd.js";
import { Ub, V6 } from "./chunk-pp7zwndm.js";
import { ZT } from "./chunk-3eqwf73w.js";
import { Tie, TFe, AFe, Kit, JYe, qis, yQr } from "./chunk-w6j1j35n.js";
import { CFe } from "./chunk-47t8hb7d.js";
import { odt } from "./chunk-jbnp5314.js";
import { q9t } from "./chunk-h2g7n7ge.js";
import { kut } from "./chunk-gnqwtd1z.js";
import { __e } from "./chunk-m18k9mtt.js";
var ke = 30000;
function Z(u, O, p = ke) {
  if (u === void 0) return { report: void 0, [Symbol.dispose]() {} };
  let D = 0,
    P = 0,
    I = (k, S) => (
      (P = k > P ? k : P + 0.001),
      O({ method: "notifications/progress", params: { progressToken: u, progress: P, message: S } })
    ),
    b = setInterval(() => {
      D += 1;
      let k = (D * p) / 1000;
      I(k, `Running for ${k}s`).catch((S) => {
        t(`MCP server: progress heartbeat not sent: ${d(S)}`);
      });
    }, p);
  return (
    b.unref?.(),
    {
      report: (k) => I(0, k),
      [Symbol.dispose]() {
        clearInterval(b);
      }
    }
  );
}
function we(u) {
  return "closeSSEStream" in u;
}
var YAn = "callerGone";
async function xvi(u, O, p, D, P, I) {
  mp(u);
  let b = Mcr(O, p, U(), "stdio", D, P, I),
    k = new q9t();
  (await b.connect(k), bt(() => b.close()));
}
class Te extends iU {
  #e;
  constructor(u) {
    super();
    this.#e = u;
  }
  get(u) {
    return this.#e.get(u);
  }
}
function Mcr(u, O, p, D, P, I = "raw", b = { kind: "absent" }, k) {
  let S = b.kind === "parsed" ? b.context : void 0,
    ne = ZT(P),
    i = D === "http";
  hbn(p.host, RKt);
  let K = vf();
  if (
    (K.disableBackgroundAgentLaunch(),
    K.disableRemoteAgentIsolation(),
    K.disableBackgroundDeadline(),
    K.disableForkSubagent(),
    i)
  )
    yQr(vf());
  else K.disableBackgroundCompletionNotice();
  if ((pFs(YPo()), EL(), AC())) KOn(P).catch(l);
  if ((v8(), bW())) aWn().catch(l);
  let Ce = uv(KA, void 0, i),
    ve = new iU(),
    te = { activeAgents: [], allAgents: [] },
    ie = i
      ? Promise.resolve()
      : NC(fe(), P)
          .then((e) => {
            te = ble(
              e,
              e.allAgents.filter((a) => {
                if (tke(a)) return !0;
                return (XOe(a, "subagent", "definition"), !1);
              })
            );
          })
          .catch((e) => {
            l(e);
          }),
    w = new Qpe(
      {
        name: "claude/tengu",
        version: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_38409fce05dd6628(
            new __filePath_38409fce05dd6628_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      },
      { capabilities: { tools: { listChanged: !0 } } }
    ),
    ae = ur(),
    H = () => JYe(i);
  if (i) {
    let { toolOutputServerCapabilities: e } = import.meta.require(
        __filePath_38409fce05dd6628(
          new __filePath_38409fce05dd6628_URL("./chunk-92qkqq9m.js", import.meta.url)
        )
      ),
      a = e(H, S);
    if (a !== void 0) {
      if ((w.registerCapabilities(a), !__e())) {
        let { backgroundCommands: c, keepsBackgroundCommandsCapability: x } = import.meta.require(
          __filePath_38409fce05dd6628(
            new __filePath_38409fce05dd6628_URL("./chunk-qgfxx95d.js", import.meta.url)
          )
        );
        w.registerCapabilities(x(c.of(p.host).life));
      }
    }
    if (S !== void 0) {
      let { holdsSafetyAsksCapability: c } = import.meta.require(
        __filePath_38409fce05dd6628(
          new __filePath_38409fce05dd6628_URL("./chunk-b3cvqe28.js", import.meta.url)
        )
      );
      w.registerCapabilities(c());
      let { rendersUnderSessionRulesCapability: x } = import.meta.require(
        __filePath_38409fce05dd6628(
          new __filePath_38409fce05dd6628_URL("./chunk-j2ydj9t5.js", import.meta.url)
        )
      );
      w.registerCapabilities(x());
    }
    let { interfaceVersionCapability: s } = import.meta.require(
      __filePath_38409fce05dd6628(
        new __filePath_38409fce05dd6628_URL("./chunk-r4cbj61x.js", import.meta.url)
      )
    );
    w.registerCapabilities(s());
  }
  let F = null,
    ye = () => {
      if (F === null) return;
      let e = H().map((s) => s.name).join(`
`);
      if (e === F) return;
      let a = F;
      ((F = e),
        w.sendToolListChanged().catch((s) => {
          if (F === e) F = a;
          t(`mcp serve: tools/list_changed not sent: ${d(s)}`);
        }));
    },
    le = !1,
    Ee = VO(() => {
      queueMicrotask(() => {
        if (le) return;
        try {
          ye();
        } catch (e) {
          t(`mcp serve: tool re-list on policy verdict failed: ${d(e)}`, { level: "error" });
        }
      });
    });
  ((w.onclose = () => {
    ((le = !0), Ee(), ae.abort(Nl("shutdown")));
  }),
    w.setRequestHandler(vme, async () => {
      await ie;
      let e = await qis(D, { agentDefinitions: te });
      return (
        (F = e.map((a) => a.name).join(`
`)),
        { tools: e }
      );
    }));
  let Re = { session: p, run: (e) => e(), bind: (e) => e, [Symbol.dispose]: () => {} };
  function Q(e, a, s) {
    let c = cp(ae),
      x = () => c.abort(Nl("remote-cancel"));
    if (e.aborted) x();
    else e.addEventListener("abort", x, { once: !0 });
    let B = new Te(ve),
      Y,
      h = () => {
        if (
          ((Y ??= { ...Tie(), ...(b.kind === "parsed" && { toolPermissionContext: b.context }) }),
          !i)
        )
          return Y;
        return { ...Y, toolPermissionContext: CFe(Y.toolPermissionContext) };
      };
    return {
      toolUseContext: {
        abortController: c,
        messageQueue: xg(),
        session: s,
        agentContext: { agentType: "main", agentId: T_() },
        options: {
          commands: [],
          tools: a,
          toolCatalog: V6,
          mainLoopModel: st(),
          thinkingConfig: { type: "disabled", mechanical: !0 },
          mcpClients: [],
          mcpResources: {},
          isNonInteractiveSession: !0,
          runQuery: pN,
          debug: u,
          verbose: O,
          agentDefinitions: te
        },
        getAppState: h,
        setAppState: () => {},
        markPrResolvedThisSession: () => {},
        isUltrareviewOverageConfirmed: () => !1,
        markUltrareviewOverageConfirmed: () => {},
        getAdvisorSetting: () => h().advisorModel,
        getMcp: () => h().mcp,
        getProactivityLevel: () => h().proactivityLevel,
        getWebBrowser: () => h().webBrowser,
        setToolPermissionContext: () => {},
        setSessionToolPermissionContext: () => {},
        taskRegistry: Z3,
        queuedNotificationsRegistry: Ect,
        sessionHooksRegistry: odt,
        setWebBrowserSlice: () => {},
        setArtifactReadVersion: () => {},
        getArtifactReadObservation: xEe(h),
        artifactRegistries: Sct(),
        setArtifactContractTarget: () => {},
        getArtifactContractTarget: () => ({ targetSlug: void 0, pins: {} }),
        enqueuePendingMemoryUpdate: () => {},
        agentLifecycle: kut,
        teammateColors: wct,
        rootToolSurface: { tools: a, mainLoopModel: st() },
        messages: [],
        turnStartIndex: 0,
        readFileState: Ce,
        dedupUnchangedReads: !1,
        toolState: B,
        toolDecisions: new Map(),
        permissionRelays: hae,
        getFileHistoryState: () => {
          return;
        },
        applyFileHistoryOp: () => {},
        applyAttributionOp: () => {},
        storageV5: P,
        credentials: ne
      },
      toolState: B
    };
  }
  return (
    w.setRequestHandler(
      uJ,
      async (
        { params: { name: e, arguments: a, _meta: s } },
        { signal: c, sendNotification: x, authInfo: B, requestId: Y }
      ) => {
        let { transport: h } = w;
        using Pe = i
          ? import.meta
              .require(
                __filePath_38409fce05dd6628(
                  new __filePath_38409fce05dd6628_URL("./chunk-rqvfd5b6.js", import.meta.url)
                )
              )
              .servingCall(p.host)
          : void 0;
        let z = (r) =>
            i
              ? import.meta
                  .require(
                    __filePath_38409fce05dd6628(
                      new __filePath_38409fce05dd6628_URL("./chunk-rqvfd5b6.js", import.meta.url)
                    )
                  )
                  .withCpuReport(r, p.host, s)
              : r,
          oe = i && h !== void 0 && hbn(p.host, s?.[C4r]),
          ce = () => {
            if (h !== void 0 && we(h)) h.closeSSEStream(Y);
          };
        if (c.aborted) ce();
        else c.addEventListener("abort", ce, { once: !0 });
        if ((await ie, i)) {
          let { refuseCallerInterface: r } = import.meta.require(
              __filePath_38409fce05dd6628(
                new __filePath_38409fce05dd6628_URL("./chunk-r4cbj61x.js", import.meta.url)
              )
            ),
            { bringsToolHostPermissionRequest: y } = import.meta.require(
              __filePath_38409fce05dd6628(
                new __filePath_38409fce05dd6628_URL("./chunk-92qkqq9m.js", import.meta.url)
              )
            ),
            n = y(s) ? void 0 : r(e, s);
          if (n !== void 0) return n;
        }
        if (b.kind === "unreadable") {
          let r = `${e} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
          return (
            t(`MCP server: ${r}`, { level: "error" }),
            { isError: !0, content: [{ type: "text", text: r }] }
          );
        }
        if (i && h !== void 0) {
          let { takeSessionEndHooks: r } = import.meta.require(
            __filePath_38409fce05dd6628(
              new __filePath_38409fce05dd6628_URL("./chunk-kdykeqt8.js", import.meta.url)
            )
          );
          r(s?.[Srr], { session: p, storageV5: P, credentials: ne });
        }
        if (i && e !== (await import("./chunk-dzcp51zn.js")).RUN_MONITOR_COMMAND_CALL) {
          let { bringsToolHostPermissionRequest: r, refusedResult: y } = import.meta.require(
            __filePath_38409fce05dd6628(
              new __filePath_38409fce05dd6628_URL("./chunk-92qkqq9m.js", import.meta.url)
            )
          );
          if (r(s)) {
            let { handleToolHostPermissionRequest: n } = await import("./chunk-6jrjq0k3.js"),
              A = await n({
                name: e,
                args: a,
                meta: s,
                servedTools: H,
                launchPermissionContext: S,
                newCall: () => {
                  let E = Q(TFe.has(e) ? ge(c, B) : c, H(), p);
                  return { toolUseContext: E.toolUseContext, release: () => ee(E.toolState) };
                },
                startHeartbeat: () => Z(s?.progressToken, x),
                callerLogsSharedEvents: oe
              });
            return z(
              A ??
                y({
                  code: "unsupported_protocol",
                  message: `${e} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.`
                })
            );
          }
        }
        let pe = a?.deny_rules;
        using v =
          S === void 0 && !(Array.isArray(pe) && pe.length > 0)
            ? Re
            : (await import("./chunk-p5mbh0qv.js")).ownCallDirectory(p, c);
        if (i) {
          let { countedUnlessRepeated: r, SERVED_FILE_CALLS: y } =
              await import("./chunk-71tjjt9z.js"),
            n = y.get(e);
          if (n) {
            using A = Z(s?.progressToken, x);
            let E,
              C = B?.extra?.[YAn];
            try {
              let { summary: q, output: j } = await r(
                  e,
                  v.bind(() =>
                    n(a, c, {
                      toolUseContext: () => (E ??= Q(c, H(), v.session)).toolUseContext,
                      session: v.session,
                      launchPermissionContext: S,
                      workspaceRoot: k,
                      ...(oe && { callerLogsSharedEvents: !0 }),
                      reportProgress: A.report,
                      callerGone: C instanceof AbortSignal ? C : void 0,
                      meta: s,
                      checkAsServedTool: async (V, o, L) => {
                        let G = Rn(H(), V);
                        if (!G?.isEnabled())
                          return {
                            rejection: `${e} was not run: this server does not serve ${V}.`
                          };
                        let W = rS(G, o);
                        if (!W.success)
                          return {
                            rejection: `${e} was not run: its input is not valid for ${V}: ${W.error.message}`
                          };
                        let { toolUseContext: ue } = (E ??= Q(c, H(), v.session)),
                          se = await G.validateInput?.(W.data, ue);
                        if (se && !se.result)
                          return {
                            rejection: `${e} was not run: ${V} refused its input: ${se.message}`
                          };
                        let me = S && CFe(S),
                          Se =
                            L.length === 0
                              ? me
                              : (await import("./chunk-eejns915.js")).withDenyRulesOfOneCall(me, L);
                        if (L.length > 0 && Se === void 0)
                          return {
                            rejection: `${e} was not run: one of the deny rules sent with it could not be read. Retrying won't help.`
                          };
                        let { checkPlainCall: be } = await import("./chunk-92qkqq9m.js");
                        return be(G, W.data, ue, Se, s);
                      }
                    })
                  )
                ),
                { encodeServedOutput: M } = await import("./chunk-cqcbhhkf.js");
              return z(v.run(() => M(q, j)));
            } catch (q) {
              let { ServedCallError: j } = await import("./chunk-xvv8fqd0.js");
              return z({
                isError: !0,
                content: [{ type: "text", text: d(q) }],
                ...(q instanceof j && q.meta !== void 0 && { _meta: q.meta })
              });
            } finally {
              if (E) ee(E.toolState);
            }
          }
        }
        let J = H(),
          X = i && TFe.has(e),
          de = oe;
        if (i && !X) {
          let { answerToolOutputRequest: r } = await import("./chunk-92qkqq9m.js"),
            y = await v.run(() =>
              r({
                name: e,
                args: a,
                meta: s,
                tools: J,
                launchPermissionContext: S,
                newCall: () => {
                  let n = Q(c, J, v.session);
                  return { toolUseContext: n.toolUseContext, release: () => ee(n.toolState) };
                },
                startHeartbeat: () => Z(s?.progressToken, x)
              })
            );
          if (y !== void 0) return y;
        }
        let T = X ? OS(Ub(), e) : OS(J, e);
        if (!T) throw Error(`Tool ${e} not found`);
        let { toolUseContext: re, toolState: he } = Q(X ? ge(c, B) : c, J, v.session);
        try {
          if (!T.isEnabled()) {
            let o = `Tool ${e} is not enabled`;
            return (
              t(`MCP server: ${o}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: o }] }
            );
          }
          let r = { ...(a ?? {}) },
            y = [];
          if (i) {
            for (let o of AFe) if (o in r) (delete r[o], y.push(o));
          }
          let n = rS(T, r);
          if (!n.success) {
            let o = `Tool ${e} arguments failed schema validation: ${n.error.message}`;
            return (
              t(`MCP server: ${o}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: o }] }
            );
          }
          let A = await v.run(() => T.validateInput?.(n.data, re));
          if (A && !A.result) {
            let o = `Tool ${e} input is invalid: ${A.message}`;
            return (
              t(`MCP server: ${o}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: o }] }
            );
          }
          let E = !1;
          if (i && I === "rendered") {
            let { asksForEditResult: o } = await import("./chunk-tg3nrt9v.js");
            E = o(T.name, s);
          }
          let C = await v.run(async () =>
            (await import("./chunk-92qkqq9m.js")).checkPlainCall(
              T,
              n.data,
              re,
              i && S !== void 0 ? CFe(S) : S,
              s
            )
          );
          if ("rejection" in C)
            return (
              t(`MCP server: ${C.rejection}`, { level: "error" }),
              {
                isError: !0,
                content: [{ type: "text", text: C.rejection }],
                ...(C.meta !== void 0 && { _meta: C.meta })
              }
            );
          using q = Z(s?.progressToken, x);
          let j = await v.run(() =>
              T.call(
                n.data,
                { ...C.toolUseContext, permissionPhase: C.toolUseContext.permissionPhase ?? {} },
                nv,
                Ld({ content: [] }),
                void 0,
                I === "raw" ? { gitDiffRead: !0 } : E ? { smallResultAsked: !0 } : void 0
              )
            ),
            M,
            V = !1;
          if (X) {
            let { encodeUnlistedToolResult: o } = await import("./chunk-cqcbhhkf.js");
            M = v.run(() => o(T, j));
          } else if (I === "rendered") {
            let { renderToolResultForMCP: o, withinAnswerLimit: L } =
                await import("./chunk-e3wp4xc3.js"),
              { answer: G, tooLarge: W } = L(T, await v.run(() => o(T, j, re)));
            ((M = E ? await (await import("./chunk-tg3nrt9v.js")).withEditResult(G, j) : G),
              (V = W));
          }
          if (M === void 0) {
            let o = j.data,
              L =
                typeof o === "object" &&
                o !== null &&
                "backgroundTaskId" in o &&
                typeof o.backgroundTaskId === "string"
                  ? { ...o, backgroundOutputPath: Pu(o.backgroundTaskId) }
                  : o;
            M = { content: [{ type: "text", text: _(L) }] };
          }
          if (y.length > 0) {
            let o = Kit(y),
              L = M.content.at(-1);
            if (L?.type === "text")
              L.text += `
${o}`;
            else M.content.push({ type: "text", text: o });
          }
          if (!de)
            if (V) f(fNt(T.name), "result_too_large");
            else g(fNt(T.name));
          return z(M);
        } catch (r) {
          let n =
            (r instanceof Error ? hTo(r) : [String(r)])
              .filter(Boolean)
              .join(
                `
`
              )
              .trim() || "Error";
          if (oJe(r)) t(`MCP server tool call '${e}' aborted`);
          else {
            let { code: A, isSad: E } = pNt(r);
            if (E) {
              if ((t(`MCP server tool call '${e}' failed: ${n}`, { level: "error" }), !de))
                f(fNt(T.name), A);
            } else {
              let C = N(r);
              (l("telemetryMessage" in C ? C : Qe(C, `mcp server tool '${T.name}' threw`)),
                m(fNt(T.name), A));
            }
          }
          return z({ isError: !0, content: [{ type: "text", text: n }] });
        } finally {
          ee(he);
        }
      }
    ),
    w
  );
}
function ee(u) {}
function ge(u, O) {
  let p = O?.extra?.[YAn];
  return p instanceof AbortSignal ? AbortSignal.any([u, p]) : u;
}
export { YAn, xvi, Mcr };

//# sourceMappingURL=chunk-3fdpcjpk.js.map
