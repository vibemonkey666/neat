// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { NDt, _bo, YCs } from "./chunk-ktghwym4.js";
import { R, N, d } from "./chunk-fs43t96t.js";
import { te } from "./chunk-4kxznmzw.js";
import { se } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { fo } from "./chunk-brszmkb3.js";
import { Kn } from "./chunk-x8k0r295.js";
import { ho, PN } from "./chunk-tbj8hqy2.js";
import { oa } from "./chunk-7zgz07kc.js";
import { AN } from "./chunk-tpjq0nvg.js";
import { atn, bOe } from "./chunk-bw100rmb.js";
import { Js } from "./chunk-6jn0brsm.js";
import { randomBytes as b } from "crypto";
import { createServer as x } from "http";
import { parse as _ } from "url";
var E = 300000,
  T = 30000,
  v = 60;
function jen(n) {
  try {
    let t = new URL(n);
    return (
      (t.pathname = t.pathname.replace(/\/+$/, "")),
      (t.host = t.host.toLowerCase()),
      t.toString()
    );
  } catch {
    return n.replace(/\/+$/, "");
  }
}
async function AUn(n) {
  let r = (await Kn().readAsync())?.mcpXaaIdp?.[jen(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= v * 1000) return;
  return r.idToken;
}
async function k(n, t, e) {
  await Kn().mutate((r) => ({
    ...r,
    mcpXaaIdp: { ...r.mcpXaaIdp, [jen(n)]: { idToken: t, expiresAt: e } }
  }));
}
async function XAi(n, t) {
  let e = A(t),
    r = e ? e * 1000 : Date.now() + 3600000;
  return (await k(n, t, r), r);
}
async function NTr(n) {
  let t = jen(n);
  try {
    await Kn().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let r = { ...e.mcpXaaIdp };
      return (delete r[t], { ...e, mcpXaaIdp: r });
    });
  } catch (e) {
    se("xaa", `clearIdpIdToken(${ho(t)}) failed: ${d(e)}`);
  }
}
async function JAi(n, t) {
  try {
    return await Kn().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: { ...e.mcpXaaIdpConfig, [jen(n)]: { clientSecret: t } }
    }));
  } catch (e) {
    return { success: !1, warning: d(e) };
  }
}
async function $Tr(n) {
  return (await Kn().readAsync())?.mcpXaaIdpConfig?.[jen(n)]?.clientSecret;
}
async function QAi(n) {
  let t = jen(n);
  try {
    await Kn().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let r = { ...e.mcpXaaIdpConfig };
      return (delete r[t], { ...e, mcpXaaIdpConfig: r });
    });
  } catch (e) {
    se("xaa", `clearIdpClientSecret(${ho(t)}) failed: ${d(e)}`);
  }
}
function P(n, t) {
  return fetch(n, { ...t, ...oa({ url: String(n) }), signal: AbortSignal.timeout(T) }).catch((e) =>
    PN(e, n)
  );
}
async function CUn(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t))
    throw new R(
      `XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${ho(n)}`,
      "XAA IdP: OIDC discovery failed: issuer is not a valid URL"
    );
  let e = new URL(".well-known/openid-configuration", t),
    r = await P(e, { headers: { Accept: "application/json" } });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${ho(e.href)}`);
  let i;
  try {
    i = await r.json();
  } catch {
    throw Error(
      `XAA IdP: OIDC discovery returned non-JSON at ${ho(e.href)} (captive portal or proxy?)`
    );
  }
  let a = NDt.safeParse(i);
  if (!a.success) throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:")
    throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${ho(a.data.token_endpoint)}`);
  return a.data;
}
function A(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = te(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function X(n, t, e, r) {
  let i = null,
    a = null,
    l = null,
    f = () => {
      if ((i?.removeAllListeners(), i?.on("error", () => {}), i?.close(), (i = null), a))
        (clearTimeout(a), (a = null));
      if (e && l) (e.removeEventListener("abort", l), (l = null));
    };
  return new Promise((m, g) => {
    let p = !1,
      I = (s, o) => {
        if (p) return;
        ((p = !0), f(), m({ code: s, iss: o }));
      },
      c = (s) => {
        if (p) return;
        ((p = !0), f(), g(s));
      };
    if (e) {
      if (((l = () => c(Error("XAA IdP: login cancelled"))), e.aborted)) {
        l();
        return;
      }
      e.addEventListener("abort", l, { once: !0 });
    }
    ((i = x((s, o) => {
      let u = _(s.url || "", !0);
      if (u.pathname !== "/callback") {
        (o.writeHead(404), o.end());
        return;
      }
      let y = u.query.code,
        C = u.query.state,
        h = u.query.error,
        S = atn(u.query.iss);
      if (h) {
        let w = u.query.error_description;
        (o.writeHead(400, { "Content-Type": "text/html" }),
          o.end(
            AN({
              ok: !1,
              heading: "Sign-in failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${h}: ${w ?? ""}`
            })
          ),
          c(Error(`XAA IdP: ${h}${w ? ` \u2014 ${w}` : ""}`)));
        return;
      }
      if (C !== t) {
        (o.writeHead(400, { "Content-Type": "text/html" }),
          o.end(
            AN({
              ok: !1,
              heading: "Sign-in failed",
              message: "State mismatch. Close this tab and try again."
            })
          ),
          c(Error("XAA IdP: state mismatch (possible CSRF)")));
        return;
      }
      if (!y) {
        (o.writeHead(400, { "Content-Type": "text/html" }),
          o.end(
            AN({
              ok: !1,
              heading: "Sign-in failed",
              message: "No authorization code received. Close this tab and try again."
            })
          ),
          c(Error("XAA IdP: callback missing code")));
        return;
      }
      (o.writeHead(200, { "Content-Type": "text/html" }),
        o.end(
          AN({
            ok: !0,
            heading: "Sign-in complete",
            message: "You can close this tab and return to Claude Code."
          })
        ),
        I(y, S));
    })),
      i.on("error", (s) => {
        if (s.code === "EADDRINUSE") {
          let o = O() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
          c(
            Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`)
          );
        } else c(Error(`XAA IdP: callback server failed: ${s.message}`));
      }),
      i.listen(n, "127.0.0.1", () => {
        try {
          r();
        } catch (s) {
          c(N(s));
        }
      }),
      i.unref(),
      (a = setTimeout((s) => s(Error("XAA IdP: login timed out")), E, c)),
      a.unref());
  });
}
async function mbo(n) {
  return fo("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: e } = n,
      r = await AUn(t);
    if (r) return (se("xaa", `Using cached id_token for ${ho(t)}`), r);
    se("xaa", `No cached id_token for ${ho(t)}; starting OIDC login`);
    let i = await CUn(t),
      a = n.callbackPort ?? (await bOe()),
      l = `http://localhost:${a}/callback`,
      f = b(32).toString("base64url"),
      m = { client_id: e, ...(n.idpClientSecret && { client_secret: n.idpClientSecret }) },
      { authorizationUrl: g, codeVerifier: p } = await _bo(t, {
        metadata: i,
        clientInformation: m,
        redirectUrl: l,
        scope: "openid",
        state: f
      }),
      I = await X(a, f, n.abortSignal, () => {
        if ((n.onAuthorizationUrl(g.toString()), !n.skipBrowserOpen))
          (se("xaa", "Opening browser to IdP authorization endpoint"), Js(g.toString()));
      }),
      c = await YCs(t, {
        metadata: i,
        clientInformation: m,
        authorizationCode: I.code,
        iss: I.iss,
        codeVerifier: p,
        redirectUri: l,
        fetchFn: P
      });
    if (!c.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let s = A(c.id_token),
      o = s ? s * 1000 : Date.now() + (c.expires_in ?? 3600) * 1000;
    try {
      (await k(t, c.id_token, o),
        se("xaa", `Cached id_token for ${ho(t)} (expires ${new Date(o).toISOString()})`));
    } catch (u) {
      se("xaa", `id_token cache write failed: ${d(u)}`);
    }
    return c.id_token;
  });
}
export { jen, AUn, XAi, NTr, JAi, $Tr, QAi, CUn, mbo };

//# sourceMappingURL=chunk-dcyhhgvc.js.map
