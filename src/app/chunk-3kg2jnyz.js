// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ykr, Kyo, ECs } from "./chunk-xkhy2efq.js";
import { R, N, d } from "./chunk-fs43t96t.js";
import { te } from "./chunk-4kxznmzw.js";
import { se } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { fo } from "./chunk-brszmkb3.js";
import { Kn } from "./chunk-x8k0r295.js";
import { ho, PN } from "./chunk-tbj8hqy2.js";
import { oa } from "./chunk-7zgz07kc.js";
import { AN } from "./chunk-tpjq0nvg.js";
import { bOe } from "./chunk-bw100rmb.js";
import { Js } from "./chunk-6jn0brsm.js";
import { randomBytes as C } from "crypto";
import { createServer as x } from "http";
import { parse as _ } from "url";
var b = 300000,
  E = 30000,
  T = 60;
function xJt(r) {
  try {
    let t = new URL(r);
    return (
      (t.pathname = t.pathname.replace(/\/+$/, "")),
      (t.host = t.host.toLowerCase()),
      t.toString()
    );
  } catch {
    return r.replace(/\/+$/, "");
  }
}
async function NHn(r) {
  let n = (await Kn().readAsync())?.mcpXaaIdp?.[xJt(r)];
  if (!n) return;
  if (n.expiresAt - Date.now() <= T * 1000) return;
  return n.idToken;
}
async function P(r, t, e) {
  await Kn().mutate((n) => ({
    ...n,
    mcpXaaIdp: { ...n.mcpXaaIdp, [xJt(r)]: { idToken: t, expiresAt: e } }
  }));
}
async function gTi(r, t) {
  let e = A(t),
    n = e ? e * 1000 : Date.now() + 3600000;
  return (await P(r, t, n), n);
}
async function aSr(r) {
  let t = xJt(r);
  try {
    await Kn().mutate((e) => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let n = { ...e.mcpXaaIdp };
      return (delete n[t], { ...e, mcpXaaIdp: n });
    });
  } catch (e) {
    se("xaa", `clearIdpIdToken(${ho(t)}) failed: ${d(e)}`);
  }
}
async function hTi(r, t) {
  try {
    return await Kn().mutate((e) => ({
      ...e,
      mcpXaaIdpConfig: { ...e.mcpXaaIdpConfig, [xJt(r)]: { clientSecret: t } }
    }));
  } catch (e) {
    return { success: !1, warning: d(e) };
  }
}
async function lSr(r) {
  return (await Kn().readAsync())?.mcpXaaIdpConfig?.[xJt(r)]?.clientSecret;
}
async function yTi(r) {
  let t = xJt(r);
  try {
    await Kn().mutate((e) => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let n = { ...e.mcpXaaIdpConfig };
      return (delete n[t], { ...e, mcpXaaIdpConfig: n });
    });
  } catch (e) {
    se("xaa", `clearIdpClientSecret(${ho(t)}) failed: ${d(e)}`);
  }
}
function k(r, t) {
  return fetch(r, { ...t, ...oa({ url: String(r) }), signal: AbortSignal.timeout(E) }).catch((e) =>
    PN(e, r)
  );
}
async function $Hn(r) {
  let t = r.endsWith("/") ? r : r + "/";
  if (!URL.canParse(".well-known/openid-configuration", t))
    throw new R(
      `XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${ho(r)}`,
      "XAA IdP: OIDC discovery failed: issuer is not a valid URL"
    );
  let e = new URL(".well-known/openid-configuration", t),
    n = await k(e, { headers: { Accept: "application/json" } });
  if (!n.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${n.status} at ${ho(e.href)}`);
  let o;
  try {
    o = await n.json();
  } catch {
    throw Error(
      `XAA IdP: OIDC discovery returned non-JSON at ${ho(e.href)} (captive portal or proxy?)`
    );
  }
  let i = Ykr.safeParse(o);
  if (!i.success) throw Error(`XAA IdP: invalid OIDC metadata: ${i.error.message}`);
  if (!URL.canParse(i.data.token_endpoint) || new URL(i.data.token_endpoint).protocol !== "https:")
    throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${ho(i.data.token_endpoint)}`);
  return i.data;
}
function A(r) {
  let t = r.split(".");
  if (t.length !== 3) return;
  try {
    let e = te(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}
function v(r, t, e, n) {
  let o = null,
    i = null,
    l = null,
    m = () => {
      if ((o?.removeAllListeners(), o?.on("error", () => {}), o?.close(), (o = null), i))
        (clearTimeout(i), (i = null));
      if (e && l) (e.removeEventListener("abort", l), (l = null));
    };
  return new Promise((f, g) => {
    let p = !1,
      h = (a) => {
        if (p) return;
        ((p = !0), m(), f(a));
      },
      c = (a) => {
        if (p) return;
        ((p = !0), m(), g(a));
      };
    if (e) {
      if (((l = () => c(Error("XAA IdP: login cancelled"))), e.aborted)) {
        l();
        return;
      }
      e.addEventListener("abort", l, { once: !0 });
    }
    ((o = x((a, s) => {
      let u = _(a.url || "", !0);
      if (u.pathname !== "/callback") {
        (s.writeHead(404), s.end());
        return;
      }
      let y = u.query.code,
        S = u.query.state,
        I = u.query.error;
      if (I) {
        let w = u.query.error_description;
        (s.writeHead(400, { "Content-Type": "text/html" }),
          s.end(
            AN({
              ok: !1,
              heading: "Sign-in failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${I}: ${w ?? ""}`
            })
          ),
          c(Error(`XAA IdP: ${I}${w ? ` \u2014 ${w}` : ""}`)));
        return;
      }
      if (S !== t) {
        (s.writeHead(400, { "Content-Type": "text/html" }),
          s.end(
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
        (s.writeHead(400, { "Content-Type": "text/html" }),
          s.end(
            AN({
              ok: !1,
              heading: "Sign-in failed",
              message: "No authorization code received. Close this tab and try again."
            })
          ),
          c(Error("XAA IdP: callback missing code")));
        return;
      }
      (s.writeHead(200, { "Content-Type": "text/html" }),
        s.end(
          AN({
            ok: !0,
            heading: "Sign-in complete",
            message: "You can close this tab and return to Claude Code."
          })
        ),
        h(y));
    })),
      o.on("error", (a) => {
        if (a.code === "EADDRINUSE") {
          let s = O() === "windows" ? `netstat -ano | findstr :${r}` : `lsof -ti:${r} -sTCP:LISTEN`;
          c(
            Error(`XAA IdP: callback port ${r} is already in use. Run \`${s}\` to find the holder.`)
          );
        } else c(Error(`XAA IdP: callback server failed: ${a.message}`));
      }),
      o.listen(r, "127.0.0.1", () => {
        try {
          n();
        } catch (a) {
          c(N(a));
        }
      }),
      o.unref(),
      (i = setTimeout((a) => a(Error("XAA IdP: login timed out")), b, c)),
      i.unref());
  });
}
async function _co(r) {
  return fo("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: e } = r,
      n = await NHn(t);
    if (n) return (se("xaa", `Using cached id_token for ${ho(t)}`), n);
    se("xaa", `No cached id_token for ${ho(t)}; starting OIDC login`);
    let o = await $Hn(t),
      i = r.callbackPort ?? (await bOe()),
      l = `http://localhost:${i}/callback`,
      m = C(32).toString("base64url"),
      f = { client_id: e, ...(r.idpClientSecret && { client_secret: r.idpClientSecret }) },
      { authorizationUrl: g, codeVerifier: p } = await Kyo(t, {
        metadata: o,
        clientInformation: f,
        redirectUrl: l,
        scope: "openid",
        state: m
      }),
      h = await v(i, m, r.abortSignal, () => {
        if ((r.onAuthorizationUrl(g.toString()), !r.skipBrowserOpen))
          (se("xaa", "Opening browser to IdP authorization endpoint"), Js(g.toString()));
      }),
      c = await ECs(t, {
        metadata: o,
        clientInformation: f,
        authorizationCode: h,
        codeVerifier: p,
        redirectUri: l,
        fetchFn: k
      });
    if (!c.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let a = A(c.id_token),
      s = a ? a * 1000 : Date.now() + (c.expires_in ?? 3600) * 1000;
    try {
      (await P(t, c.id_token, s),
        se("xaa", `Cached id_token for ${ho(t)} (expires ${new Date(s).toISOString()})`));
    } catch (u) {
      se("xaa", `id_token cache write failed: ${d(u)}`);
    }
    return c.id_token;
  });
}
export { xJt, NHn, gTi, aSr, hTi, lSr, yTi, $Hn, _co };

//# sourceMappingURL=chunk-3kg2jnyz.js.map
