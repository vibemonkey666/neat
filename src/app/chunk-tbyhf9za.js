// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J, Pn } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { K$e, rn } from "./chunk-xc1j8sdj.js";
import { m, f } from "./chunk-brszmkb3.js";
import { koe, gb, rC, N7 } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Kn } from "./chunk-x8k0r295.js";
import { uGt, d7n } from "./chunk-qtg4fa3e.js";
import { E$ } from "./chunk-4j8ddsyx.js";
async function FIe(r) {
  try {
    return (await Kn().readAsync(r))?.designOauth ?? null;
  } catch (n) {
    return (t(`Failed to read design OAuth tokens: ${d(n)}`, { level: "error" }), null);
  }
}
async function ANn(r, n) {
  try {
    let o = !1,
      s = await Kn().mutate((e) => {
        if (n?.onlyIf && !n.onlyIf(e.designOauth)) return ((o = !0), e);
        return { ...e, designOauth: r };
      });
    return o ? { ...s, raced: !0 } : s;
  } catch (o) {
    return (
      t(`Failed to save design OAuth tokens: ${d(o)}`, { level: "error" }),
      { success: !1, warning: "Failed to save design OAuth tokens" }
    );
  }
}
async function _(r) {
  try {
    await Kn().mutate((n) => {
      if (!n.designOauth) return n;
      if (!r(n.designOauth)) return n;
      let o = { ...n };
      return (delete o.designOauth, o);
    });
  } catch (n) {
    t(`Failed to clear design OAuth tokens: ${d(n)}`, { level: "error" });
  }
}
var w = ".design_oauth_refresh.lock";
async function p() {
  let r = Kn();
  return (r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null);
}
async function Fmo(r) {
  let n = await FIe(r);
  if (!n?.accessToken) return { ok: !1, reason: "needs_design_login" };
  if (!rC(n.expiresAt)) return { ok: !0, accessToken: n.accessToken };
  if (J())
    return (
      m("oauth_token_refresh", "design_oauth_refresh_diskless"),
      { ok: !1, reason: "needs_design_login" }
    );
  try {
    return await d7n(w, async (o) => {
      let s = await p();
      if (!s?.accessToken) return { ok: !1, reason: "needs_design_login" };
      if (!rC(s.expiresAt)) return { ok: !0, accessToken: s.accessToken };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return (await _((c) => c.refreshToken === e), { ok: !1, reason: "needs_design_login" });
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return (await _((c) => c.refreshToken === e), { ok: !1, reason: "needs_design_login" });
      }
      if (o.isCompromised())
        return (
          f("oauth_token_refresh", "design_oauth_refresh_lock_compromised"),
          {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token"
          }
        );
      try {
        let e = await koe(s.refreshToken, {
          clientId: s.clientId,
          scopes: s.scopes,
          skipProfileFetch: !0
        });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken)
            await gb(e.refreshToken, s.clientId);
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry"
          };
        }
        if (!K$e.every((a) => e.scopes.includes(a))) {
          if (e.refreshToken) await gb(e.refreshToken, s.clientId);
          let a = s.refreshToken;
          return (
            await _((k) => k.refreshToken === a),
            {
              ok: !1,
              reason: "needs_design_login",
              detail: "refresh response missing design scopes"
            }
          );
        }
        let c = s.refreshToken,
          u = await ANn(
            {
              accessToken: e.accessToken,
              refreshToken: e.refreshToken,
              expiresAt: e.expiresAt,
              scopes: e.scopes.filter((a) => K$e.some((k) => k === a)),
              clientId: s.clientId
            },
            { onlyIf: (a) => a?.refreshToken === c }
          );
        if (u.raced) {
          await gb(e.refreshToken, s.clientId);
          let a = await p();
          return a?.accessToken && !rC(a.expiresAt)
            ? { ok: !0, accessToken: a.accessToken }
            : { ok: !1, reason: "needs_design_login" };
        }
        if (!u.success)
          t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", {
            level: "error"
          });
        return { ok: !0, accessToken: e.accessToken };
      } catch (e) {
        if (o.isCompromised()) {
          let c = await p();
          if (c?.accessToken && !rC(c.expiresAt)) return { ok: !0, accessToken: c.accessToken };
          if (!N7(e)) f("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token"
          };
        }
        if (N7(e)) {
          let c = s.refreshToken;
          return (
            await _((u) => u.refreshToken === c),
            { ok: !1, reason: "needs_design_login", detail: "design authorization expired" }
          );
        }
        return { ok: !1, reason: "design_refresh_failed", detail: d(e) };
      }
    });
  } catch (o) {
    if (o instanceof uGt) f("oauth_token_refresh", "design_oauth_refresh_lock_contention");
    else (l(o), m("oauth_token_refresh", "design_oauth_refresh_lock_error"));
    return { ok: !1, reason: "design_refresh_failed", detail: d(o) };
  }
}
function CNn() {
  return i.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? rn().DESIGN_CLIENT_ID;
}
function TBe() {
  return !CNn().startsWith("00000000-");
}
async function Qvr(r, n) {
  let o = K$e.filter((s) => !r.scopes.includes(s));
  if (o.length > 0) {
    if (r.refreshToken) await gb(r.refreshToken, n);
    return {
      ok: !1,
      message: `The authorization server did not grant the design scopes (missing: ${o.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`
    };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await gb(r.refreshToken, n);
    return {
      ok: !1,
      message:
        "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential."
    };
  }
  return {
    ok: !0,
    slot: {
      accessToken: r.accessToken,
      refreshToken: r.refreshToken,
      expiresAt: r.expiresAt,
      scopes: r.scopes.filter((s) => K$e.some((e) => e === s)),
      clientId: n
    }
  };
}
function E7t() {
  return i.isSSH() || i.CLAUDE_CODE_REMOTE === !0 || Pn();
}
var D = 300000;
async function RNn(r, n) {
  if (r?.aborted)
    return { ok: !1, reason: "interrupted", message: "Design login was interrupted." };
  if (!TBe())
    return {
      ok: !1,
      reason: "unconfigured",
      message:
        "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
    };
  if (E7t() && !n?.onManualCode)
    return {
      ok: !1,
      reason: "remote",
      message:
        "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually."
    };
  let o = CNn(),
    s = new E$(),
    e = !1,
    c = !1,
    u;
  try {
    let a = n?.onAuthUrl;
    n?.onManualCode?.((g, T) => s.handleManualAuthCodeInput({ authorizationCode: g, state: T }));
    let k = s.startOAuthFlow(
      a
        ? async (g, T) => {
            a(T ?? g, g);
          }
        : async () => {},
      {
        loginWithClaudeAi: !0,
        oauthClient: { clientId: o, scopes: K$e },
        skipProfileFetch: !0,
        successRedirectUrl: rn().CLAUDEAI_SUCCESS_URL,
        ...(a && { skipBrowserOpen: !0 })
      }
    );
    k.then((g) => {
      if (c && g.refreshToken) gb(g.refreshToken, o);
    }).catch(() => {});
    let O = await Promise.race([
        k,
        new Promise((g, T) => {
          ((u = setTimeout(() => {
            ((e = !0), (c = !0), T(Error("design login timed out")));
          }, D)),
            r?.addEventListener(
              "abort",
              () => {
                ((c = !0), T(Error("design login interrupted")));
              },
              { once: !0 }
            ));
        })
      ]),
      h = await Qvr(O, o);
    if (!h.ok) return { ok: !1, reason: "invalid", message: h.message };
    if (r?.aborted)
      return (
        await gb(h.slot.refreshToken, h.slot.clientId),
        { ok: !1, reason: "interrupted", message: "Design login was interrupted." }
      );
    if (!(await ANn(h.slot)).success)
      return (
        await gb(h.slot.refreshToken, h.slot.clientId),
        {
          ok: !1,
          reason: "save_failed",
          message:
            "Could not save the design credential to secure storage. Retry, or run /design-login."
        }
      );
    return { ok: !0, accessToken: h.slot.accessToken };
  } catch (a) {
    if (((c = !0), r?.aborted))
      return { ok: !1, reason: "interrupted", message: "Design login was interrupted." };
    if (e)
      return {
        ok: !1,
        reason: "timed_out",
        message:
          "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow."
      };
    return {
      ok: !1,
      reason: "failed",
      cause: d(a),
      message: `The browser authorization failed (${d(a)}). Run /design-login to retry with the manual flow.`
    };
  } finally {
    if (u !== void 0) clearTimeout(u);
    s.cleanup();
  }
}
export { FIe, ANn, Fmo, CNn, TBe, Qvr, E7t, RNn };

//# sourceMappingURL=chunk-tbyhf9za.js.map
