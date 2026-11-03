import {
  fileURLToPath as __filePath_a2baf80e3d222917,
  URL as __filePath_a2baf80e3d222917_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wn, ye, J, Pn, uF } from "./chunk-wrtp8qz8.js";
import { R, d } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { ss, se } from "./chunk-ewvf3tep.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { xt } from "./chunk-qakn3b85.js";
import { _7e, Jdn, co, Qzs, jl, bw } from "./chunk-ybr49gcx.js";
import { k2t, Otr, Wn } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { p } from "./chunk-qmkm2x59.js";
import { cX, __, b_ } from "./chunk-4nzy53ma.js";
import { Xo } from "./chunk-928ws1pg.js";
import { OWt, GY } from "./chunk-gmxe4kpt.js";
import { ir, xK, cu, Io } from "./chunk-j0tbz6ra.js";
import { Dre } from "./chunk-d5zj5299.js";
import { oh } from "./chunk-q7wmjzj5.js";
import { UD } from "./chunk-14k612dp.js";
import { pU } from "./chunk-e0ax8qma.js";
import { ms } from "./chunk-tbj8hqy2.js";
import { b4 } from "./chunk-apca454z.js";
import { Cbo, Fr } from "./chunk-w1mqqc2v.js";
import { Tme } from "./chunk-syntvyhn.js";
import { hD, lu } from "./chunk-egk1yzkg.js";
import { QTr, ZTr, dK } from "./chunk-f786enhh.js";
import { kG, ire, I$r } from "./chunk-q26wna10.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { m2 } from "./chunk-njpzwa1b.js";
import { Ac } from "./chunk-mapzg9k3.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { join as V } from "path";
function J8e() {
  if (J())
    throw Error(
      "Cannot use the MCP needs-auth cache file in a diskless session: only a storage backend can hold the cache"
    );
  return V(Le(), "mcp-needs-auth-cache.json");
}
function qDt() {
  return We.state("mcp-needs-auth-cache");
}
function Q8e(e) {
  if (Dre(e)) return Promise.resolve({});
  let n = xt();
  if (!n.authCacheRead)
    n.authCacheRead =
      z() && e !== void 0
        ? q(e)
        : hn()
            .read(J8e())
            .then((r) => te(r))
            .catch(() => ({}));
  return n.authCacheRead;
}
async function q(e) {
  try {
    let n = await e.read([qDt()]);
    if (!n.ok) return {};
    let r = n.value.items[0];
    if (!r.found) return {};
    return te(Buffer.from(r.value).toString("utf8"));
  } catch {
    return {};
  }
}
function YDt() {
  xt().authCacheRead = null;
}
function hOe(e) {
  if (((xt().authCacheRead = null), z() && e !== void 0)) {
    e.delete(qDt())
      .then((n) => {
        if (!n.ok) t(`mcp needs-auth cache delete failed: ${vt(n.error)}`, { level: "error" });
      })
      .catch(() => {});
    return;
  }
  if (J()) return;
  hn()
    .delete(J8e())
    .catch(() => {});
}
var O = "the user can reconnect it in their claude.ai connector settings",
  d1 = {
    notConnected(e) {
      return Otr()
        ? `MCP server "${e}" needs to be connected in claude.ai`
        : `MCP server "${e}" needs to be connected in claude.ai (run /mcp to connect it)`;
    },
    signInAgain(e) {
      if (kG(e)) return I$r;
      let n = `MCP server "${e}" needs you to sign in again`;
      return b_() ? `${n} (${O})` : k2t() ? n : `${n} (run /mcp to re-authenticate)`;
    },
    helperRejected(e) {
      let n = `MCP server "${e}" rejected the credential from its headersHelper`;
      return k2t()
        ? `${n} (check the helper, then start a new task or chat)`
        : `${n} (check the helper and run /mcp to reconnect, or to authenticate if the server also uses OAuth)`;
    },
    headerRejected(e) {
      let n = `MCP server "${e}" rejected the Authorization header in its config`;
      return k2t()
        ? `${n} (update it, then start a new task or chat)`
        : `${n} (update it, then run /mcp to reconnect)`;
    },
    dialNeedsAuth(e) {
      if (kG(e)) return ire("needs_auth");
      return `MCP server "${e}" needs authentication`;
    },
    dialNotConnected(e, n) {
      if (kG(e)) return ire("failed");
      return `MCP server "${e}" is not connected${n}`;
    },
    sessionCredentialRejected(e, n) {
      if (kG(e)) return I$r;
      return `MCP server "${e}" rejected the session credential (HTTP ${n})`;
    },
    stepUp(e, n) {
      if (kG(e)) return I$r;
      let r = jl(n ?? "", void 0, "none"),
        a = `MCP server "${e}" needs additional permissions (scope: "${r}")`;
      return b_() ? `${a} \u2014 ${O}` : `${a} \u2014 run /mcp to re-authenticate`;
    }
  };
var k = 20,
  G = new Set([
    "mcp_invalid_oauth_token",
    "mcp_unauthorized_after_token_refresh",
    "mcp_oauth_token_refresh_failed",
    "mcp_oauth_no_refresh_token"
  ]);
class L {
  connections = new Map();
  toolLists = new Ac({ max: k });
  resourceLists = new Ac({ max: k });
  resourceTemplateLists = new Ac({ max: k });
  commandLists = new Ac({ max: k });
  reauthInFlight = new Map();
  settledCachedDialFailures = new Map();
  refusedCachedRows = new Set();
  lapsedCcrSignIns = new Set();
  liveClients = new Set();
  noteCcrDialAnswer(e, n) {
    if (n.status === 401 && G.has(n.headers.get("X-Mcp-Error-Code") ?? ""))
      this.lapsedCcrSignIns.add(e);
    else this.lapsedCcrSignIns.delete(e);
  }
  forgetListings() {
    (this.toolLists.clear(),
      this.resourceLists.clear(),
      this.resourceTemplateLists.clear(),
      this.commandLists.clear());
  }
}
function Eo() {
  let e = xt();
  if (e.connectionCache === null)
    ((e.connectionCache = new L()),
      m2(e.connectionCache.connections),
      m2(e.connectionCache.settledCachedDialFailures),
      m2(e.connectionCache.refusedCachedRows),
      m2(e.connectionCache.lapsedCcrSignIns));
  return e.connectionCache;
}
function iBn(e, n, r, a) {
  function h(...s) {
    let l = n(...s);
    return D(r(), l, () => {
      let m = a(
        () => e(...s),
        () => r().get(l) === m,
        s
      );
      return m;
    });
  }
  let c = {
    get: (s) => r().get(s),
    set(s, l) {
      return (r().set(s, l), c);
    },
    has: (s) => r().has(s),
    delete: (s) => r().delete(s),
    clear: () => r().clear()
  };
  return Object.assign(h, { cache: c });
}
function gOe(e, n, r) {
  function a(...c) {
    return D(r(), n(...c), () => e(...c));
  }
  return Object.assign(a, {
    cache: {
      get: (c) => r().peek(c),
      set: (c, s) => void r().set(c, s),
      has: (c) => r().has(c),
      delete: (c) => r().delete(c),
      clear: () => r().clear(),
      size: () => r().size
    }
  });
}
function D(e, n, r) {
  let a = e.get(n);
  if (a !== void 0) return a;
  let h = r();
  return (e.set(n, h), h);
}
var X = "tengu_eager_raccoon",
  Y = p(() => u({})),
  Z = new W(() => new Map());
function Q() {
  return __() && cX() && oh() && !OWt() && Wn(X, !1);
}
function VDt(e, n) {
  return Q() && Eo().lapsedCcrSignIns.has(ir(e, n));
}
function U(e, n, r) {
  let a = co(e),
    h = `The "${a}" connector is installed, but its sign-in has stopped working, so its tools are unavailable. Call this tool only when the user's request needs this connector (even if they didn't name it explicitly). It tries the connection again. If the connector still needs a sign-in, the call fails, and the user may be shown a prompt to sign in again. Then tell them in one short sentence that ${a} needs them to sign in again, carry on with whatever does not need it, and do not call this tool again until they send another message. If the call fails for another reason, tell them that ${a} is not available right now. If the connection succeeds, the connector's tools become available. Do not ask the user for authorization codes, tokens, or URLs.`;
  return {
    name: Xo(e, _7e),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: _7e,
      serverType: n.type ?? "stdio",
      source: UD(e, n),
      isAuthStub: !0,
      serverId: pU(n),
      serverIdStamp: Tme(e, n)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    backgrounding: "never",
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Check the sign-in of ${e}`,
    async description() {
      return h;
    },
    async prompt() {
      return h;
    },
    get inputSchema() {
      return Y();
    },
    async checkPermissions(c) {
      return { behavior: "allow", updatedInput: c };
    },
    async call(c, s) {
      let l = Z.of(s.session.host),
        m = uF();
      if (l.get(e) === m)
        throw new R(
          `The "${a}" connector was already tried in this turn.`,
          "Connector sign-in tool called twice in one turn"
        );
      l.set(e, m);
      let f = r(),
        g = await f.peekSettledConnection(e, n);
      if (g !== void 0 && (g.type !== "connected" || g.discoveryAuthFailure))
        await f.clearServerCache(e, n);
      let C = Promise.withResolvers();
      try {
        let b = await f.ensureConnectedClient(
            { name: e, type: "cached", config: n, capabilities: {}, cacheSavedAt: 0 },
            {
              context: "MCP sign-in check",
              signal: s.abortController.signal,
              toolUseId: s.toolUseId,
              toolUseIdWithListingsUntil: C.promise
            }
          ),
          w = await f.fetchToolsForClient(b, s.storageV5);
        if (b.discoveryAuthFailure)
          throw Object.assign(new R(d1.dialNeedsAuth(a), "MCP server needs authentication"), {
            mcpErrorSource: "user_auth"
          });
        if (f.getToolsListErrorForResult(w) !== void 0)
          throw new R(
            `The "${a}" connector connected, but its tools could not be listed.`,
            "Connector connected but its tools could not be listed"
          );
        return {
          data: {
            message: `The "${a}" connector is connected again. Its tools are being added and should be available shortly.`
          }
        };
      } finally {
        C.resolve();
      }
    },
    mapToolResultToToolResultBlockParam(c, s) {
      return { tool_use_id: s, type: "tool_result", content: c.message };
    }
  };
}
function F() {
  return import.meta.require(
    __filePath_a2baf80e3d222917(
      new __filePath_a2baf80e3d222917_URL("./chunk-43z4gqzg.js", import.meta.url)
    )
  );
}
function S() {
  return F().mcpAuthModule();
}
function P() {
  return F().mcpClientModule();
}
var ee = p(() => u({})),
  oe = p(() =>
    u({
      callback_url: o().describe(
        "The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=..."
      )
    })
  );
function ne() {
  return i.isSSH() || i.CLAUDE_CODE_REMOTE || Pn();
}
var re = new W(() => new Map()),
  ie = 180000;
function ae(e) {
  try {
    let n = new URL(e).searchParams.get("redirect_uri");
    if (n) return n;
  } catch {}
  return "http://localhost:<port>/callback";
}
function c1(e, n) {
  if (ye()) return VDt(e, n) ? [U(e, n, P)] : [];
  let r = hD(e, n, { detail: "origin" });
  return [ce(e, n, r), le(e, n)];
}
function j(e) {
  let n = e !== void 0 ? GY(e) : OWt();
  return "available automatically";
}
function H(e) {
  return "The server's tools should now be available.";
}
function ce(e, n, r) {
  let a = n.type ?? "stdio",
    h = r && r !== a ? `${a} at ${Qzs(r, 256)}` : a,
    c =
      `The "${co(e)}" MCP server (${h}) is installed but requires authentication. ` +
      "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " +
      `Once the user completes authorization in their browser, the server's real tools will become ${j()}.`;
  return {
    name: Xo(e, _7e),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: _7e,
      serverType: a,
      source: UD(e, n),
      ...(n.pluginSource !== void 0 && { pluginSource: n.pluginSource }),
      isAuthStub: !0,
      serverId: pU(n),
      serverIdStamp: Tme(e, n)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Authenticate ${e} MCP server`,
    async description() {
      return c;
    },
    async prompt() {
      return c;
    },
    get inputSchema() {
      return ee();
    },
    async checkPermissions(s) {
      return { behavior: "allow", updatedInput: s };
    },
    async call(s, l) {
      let m = cu(e, n);
      if (m === "managed-policy")
        return {
          data: {
            status: "error",
            message: dK(
              e,
              m,
              n,
              `${QTr(e)}. Only an organization admin can change this; do not retry or ask the user to enable it.`
            )
          }
        };
      if (Io(e))
        return {
          data: {
            status: "error",
            message: `MCP server ${co(e)} is disabled. Ask the user to enable it in /mcp before authenticating.`
          }
        };
      if (m === "project-approval")
        return {
          data: {
            status: "error",
            message: `${ZTr(e)}. Ask the user to approve it; do not retry until they have.`
          }
        };
      let f = b4(e, n);
      if (f.kind === "claudeai-proxy")
        return {
          data: {
            status: "unsupported",
            message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${co(e)}" to authenticate.`
          }
        };
      if (f.kind === "unsupported-transport")
        return {
          data: {
            status: "unsupported",
            message: `Server "${co(e)}" uses ${a} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`
          }
        };
      if (f.kind === "anthropic-hosted")
        return { data: { status: "unsupported", message: jl(f.message, 1024, "none") } };
      let g = re.of(l.session.host),
        C = g.get(e);
      if (
        C !== void 0 &&
        C.flow === S().getActiveOAuthPromise(e) &&
        C.receivesPastedCallbacks() &&
        wn(C.config, f.config) &&
        C.accountToken !== void 0 &&
        C.accountToken === Cbo() &&
        C.identityEpoch === Fr() &&
        Date.now() - C.startedAt < ie
      )
        return x({
          serverName: e,
          config: n,
          authUrlPromise: C.authUrl,
          oauthPromise: C.flow,
          reused: !0,
          tools: l.options.tools
        });
      let b,
        w = new Promise((y) => {
          b = y;
        }),
        T,
        M = S().performMCPOAuthFlow(e, f.config, (y) => b?.(y), void 0, {
          skipBrowserOpen: !0,
          onWaitingForCallback: (y) => {
            T = y;
          }
        });
      S().setActiveOAuthPromise(e, M);
      let I = {
        flow: M,
        authUrl: w,
        receivesPastedCallbacks: () => T !== void 0 && S().getOAuthCallbackSubmitter(e) === T,
        config: f.config,
        accountToken: Cbo(),
        identityEpoch: Fr(),
        startedAt: Date.now()
      };
      (g.set(e, I),
        M.catch(() => {}).finally(() => {
          if (g.get(e) === I) g.delete(e);
        }));
      let v = I.identityEpoch;
      return (
        M.then(async () => {
          if (Fr() !== v) {
            se(e, "OAuth completed after an identity change; discarding without reconnecting");
            return;
          }
          if ((hOe(l.storageV5), Io(e) || xK(e, n))) {
            se(
              e,
              "OAuth completed but the server is now disabled or policy-blocked; not reconnecting"
            );
            return;
          }
          let y = await P().reconnectMcpServerImpl(e, n, l.storageV5, l.credentials);
          if (Fr() !== v) {
            se(e, "OAuth completed after an identity change; discarding the stale reconnect");
            return;
          }
          let B = l.getMcp().clients.some((A) => A.name === e),
            _ = l.session.mcpSessionWiring.connections();
          if (!B || _ === void 0 || Io(e) || xK(e, n)) {
            (se(
              e,
              "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection"
            ),
              P()
                .clearServerCache(e, n)
                .catch((A) => se(e, `Orphan-connection cleanup failed: ${ms(A, n)}`)),
              _?.markReconnectDiscarded(e, n));
            return;
          }
          let E = _.adoptServer(e, y);
          if (E !== "adopted") {
            (se(e, `Sign-in finished, but its connection was not adopted (${E}); discarding it`),
              P()
                .clearServerCache(e, n)
                .catch((A) => se(e, `Orphan-connection cleanup failed: ${ms(A, n)}`)));
            return;
          }
          se(e, `OAuth complete, reconnected with ${y.tools.length} tool(s)`);
        }).catch((y) => {
          ss(e, `OAuth flow failed after tool-triggered start: ${bw(lu(e, n, d(y)))}`);
        }),
        x({
          serverName: e,
          config: n,
          authUrlPromise: w,
          oauthPromise: M,
          reused: !1,
          tools: l.options.tools
        })
      );
    },
    mapToolResultToToolResultBlockParam(s, l) {
      return { tool_use_id: l, type: "tool_result", content: s.message };
    }
  };
}
async function x({
  serverName: e,
  config: n,
  authUrlPromise: r,
  oauthPromise: a,
  reused: h,
  tools: c
}) {
  let s = h
    ? `A sign-in for ${co(e)} that started earlier is still in progress, so the link below is that sign-in's link, not a new one. If the user says the sign-in page showed an error before they could approve access, ask them to run /mcp and sign in there instead.

`
    : "";
  try {
    let l = await Promise.race([r, a.then(() => null)]);
    if (l) {
      let m = Xo(e, Jdn),
        f = ae(l),
        g = ne()
          ? `

This session is remote, so after authorizing the browser will try to load \`${f}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${m}\` with that URL as \`callback_url\`.`
          : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${m}\` with it.`;
      return {
        data: {
          status: "auth_url",
          authUrl: l,
          message: `${s}Ask the user to open this URL in their browser to authorize the ${co(e)} MCP server:

${l}

Once they complete the flow, the server's tools will become ${j(c)}.${g}`
        }
      };
    }
    return {
      data: {
        status: "auth_url",
        message: `Authentication completed silently for ${co(e)}. ${H(c)}`
      }
    };
  } catch (l) {
    let m = jl(lu(e, n, d(l)));
    return {
      data: {
        status: "error",
        message: `Failed to start OAuth flow for ${co(e)}: ${m}. Ask the user to run /mcp and authenticate manually.`
      }
    };
  }
}
function le(e, n) {
  let r = Xo(e, _7e),
    a =
      `Complete an in-progress OAuth flow for the "${co(e)}" MCP server by submitting the callback URL. Call \`${r}\` first to start the flow and get the authorization URL. ` +
      "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " +
      "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: Xo(e, Jdn),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: Jdn,
      serverType: n.type ?? "stdio",
      source: UD(e, n),
      ...(n.pluginSource !== void 0 && { pluginSource: n.pluginSource }),
      isAuthStub: !0,
      serverId: pU(n),
      serverIdStamp: Tme(e, n)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - complete authentication (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Complete authentication for ${e} MCP server`,
    async description() {
      return a;
    },
    async prompt() {
      return a;
    },
    get inputSchema() {
      return oe();
    },
    async checkPermissions(h) {
      return { behavior: "allow", updatedInput: h };
    },
    async call(h, c) {
      let { callback_url: s } = h,
        l = S().getOAuthCallbackSubmitter(e);
      if (!l)
        return {
          data: {
            status: "error",
            message: `No OAuth flow is in progress for ${co(e)}. Call \`${r}\` first, then retry with the callback URL.`
          }
        };
      let m = !1;
      try {
        let g = new URL(s);
        m = g.searchParams.has("code") || g.searchParams.has("error");
      } catch {}
      if (!m)
        return {
          data: {
            status: "error",
            message:
              "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string."
          }
        };
      let f = S().getActiveOAuthPromise(e);
      if (!l(s))
        return {
          data: {
            status: "error",
            message: `That callback URL belongs to a different sign-in attempt for ${co(e)} (its state does not match the flow in progress), or carries no authorization code. The current flow is still waiting: ask the user for the URL from the page this sign-in opened, then retry.`
          }
        };
      try {
        return (
          await f,
          {
            data: {
              status: "success",
              message: `Authentication complete for ${co(e)}. ${H(c.options.tools)}`
            }
          }
        );
      } catch (g) {
        if (g instanceof S().AuthenticationCancelledError)
          return {
            data: {
              status: "error",
              message: `The OAuth flow for ${co(e)} was cancelled (a newer attempt may have superseded it). Call \`${r}\` again to restart.`
            }
          };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${co(e)}: ${jl(lu(e, n, d(g)))}`
          }
        };
      }
    },
    mapToolResultToToolResultBlockParam(h, c) {
      return { tool_use_id: c, type: "tool_result", content: h.message };
    }
  };
}
export { d1, Eo, iBn, gOe, VDt, J8e, qDt, Q8e, YDt, hOe, c1 };

//# sourceMappingURL=chunk-wnhb5g9c.js.map
