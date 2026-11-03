// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ye, J } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { Ukn, Wlr, rn } from "./chunk-xc1j8sdj.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { d0 } from "./chunk-t6wy6xxv.js";
import { Kn } from "./chunk-x8k0r295.js";
import { Ks } from "./chunk-znkwh1rm.js";
import { koe, gb, rC, N7, noi } from "./chunk-ajtyjx88.js";
import { i6 } from "./chunk-v19xty83.js";
import { d9, j2o } from "./chunk-cr7a2cdd.js";
import { uGt, d7n } from "./chunk-qtg4fa3e.js";
import { E$ } from "./chunk-4j8ddsyx.js";
import { Js } from "./chunk-6jn0brsm.js";
import { createInterface as L } from "readline";
var U = ".cloud_sessions_oauth_refresh.lock",
  z = 300000;
async function F(e) {
  try {
    return (await Kn().readAsync(e))?.cloudSessionsOauth ?? null;
  } catch (s) {
    return (
      t(`Failed to read the cloud-sessions OAuth tokens: ${d(s)}`, { level: "error" }),
      "unreadable"
    );
  }
}
function N(e) {
  try {
    let s = Kn().read()?.cloudSessionsOauth;
    return s !== void 0 && s.organizationUuid === e && Boolean(s.accessToken);
  } catch (s) {
    return (t(`Failed to read the cloud-sessions OAuth tokens: ${d(s)}`, { level: "error" }), !1);
  }
}
async function x(e, s) {
  try {
    let k = !1,
      u = await Kn().mutate((r) => {
        if (s?.onlyIf && !s.onlyIf(r.cloudSessionsOauth)) return ((k = !0), r);
        return { ...r, cloudSessionsOauth: e };
      });
    return k ? { ...u, raced: !0 } : u;
  } catch (k) {
    return (
      t(`Failed to save the cloud-sessions OAuth tokens: ${d(k)}`, { level: "error" }),
      { success: !1, warning: "Failed to save the cloud-sessions OAuth tokens" }
    );
  }
}
async function v(e) {
  try {
    await Kn().mutate((s) => {
      if (!s.cloudSessionsOauth || !e(s.cloudSessionsOauth)) return s;
      let k = { ...s };
      return (delete k.cloudSessionsOauth, k);
    });
  } catch (s) {
    t(`Failed to clear the cloud-sessions OAuth tokens: ${d(s)}`, { level: "error" });
  }
}
async function O() {
  let e = Kn();
  return (e.invalidateCache?.(), (await e.readAsync())?.cloudSessionsOauth ?? null);
}
async function R({ organizationUuid: e, refusedAccessToken: s, credentials: k }) {
  let u = await F(k);
  if (u === "unreadable")
    return { ok: !1, reason: "refresh_failed", detail: "the credential store could not be read" };
  if (!u?.accessToken || u.organizationUuid !== e) return { ok: !1, reason: "needs_sign_in" };
  if (!rC(u.expiresAt) && u.accessToken !== s) return { ok: !0, accessToken: u.accessToken };
  if (J())
    return (
      m("oauth_token_refresh", "cloud_sessions_oauth_refresh_diskless"),
      { ok: !1, reason: "needs_sign_in" }
    );
  try {
    return await d7n(U, async (r) => {
      let o = await O();
      if (!o?.accessToken || o.organizationUuid !== e) return { ok: !1, reason: "needs_sign_in" };
      if (!rC(o.expiresAt) && o.accessToken !== s) return { ok: !0, accessToken: o.accessToken };
      if (!o.refreshToken || !Array.isArray(o.scopes) || o.scopes.length === 0) {
        let n = o.refreshToken;
        return (await v((c) => c.refreshToken === n), { ok: !1, reason: "needs_sign_in" });
      }
      if (r.isCompromised())
        return (
          f("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised"),
          {
            ok: !1,
            reason: "refresh_failed",
            detail: "another Claude Code process is renewing it right now"
          }
        );
      let a = o.refreshToken;
      try {
        let n = await koe(a, { clientId: o.clientId, scopes: o.scopes, skipProfileFetch: !0 });
        if (!n.refreshToken || !n.expiresAt) {
          if (n.refreshToken && n.refreshToken !== a) await gb(n.refreshToken, o.clientId);
          return {
            ok: !1,
            reason: "refresh_failed",
            detail: "the server's reply had no refresh token or expiry"
          };
        }
        if (!n.scopes.includes(Ukn))
          return (
            await gb(n.refreshToken, o.clientId),
            await v((h) => h.refreshToken === a),
            {
              ok: !1,
              reason: "needs_sign_in",
              detail: "refresh response missing the sessions scope"
            }
          );
        let c = await x(
          {
            accessToken: n.accessToken,
            refreshToken: n.refreshToken,
            expiresAt: n.expiresAt,
            scopes: n.scopes.filter((h) => Wlr.some((p) => p === h)),
            clientId: o.clientId,
            organizationUuid: o.organizationUuid
          },
          { onlyIf: (h) => h?.refreshToken === a }
        );
        if (c.raced) {
          await gb(n.refreshToken, o.clientId);
          let h = await O();
          return h?.accessToken && h.organizationUuid === e && !rC(h.expiresAt)
            ? { ok: !0, accessToken: h.accessToken }
            : { ok: !1, reason: "needs_sign_in" };
        }
        if (!c.success)
          t(
            "Cloud-sessions OAuth refresh succeeded but the new token could not be saved; using it for this session only.",
            { level: "error" }
          );
        return { ok: !0, accessToken: n.accessToken };
      } catch (n) {
        if (r.isCompromised()) {
          let c = await O();
          if (c?.accessToken && c.organizationUuid === e && !rC(c.expiresAt))
            return { ok: !0, accessToken: c.accessToken };
          if (!N7(n)) f("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "refresh_failed",
            detail: "another Claude Code process is renewing it right now"
          };
        }
        if (N7(n))
          return (
            await v((c) => c.refreshToken === a),
            { ok: !1, reason: "needs_sign_in", detail: "cloud-sessions authorization expired" }
          );
        return (
          t(`Cloud-sessions OAuth refresh failed: ${d(n)}`, { level: "error" }),
          { ok: !1, reason: "refresh_failed", detail: "the renewal request failed" }
        );
      }
    });
  } catch (r) {
    if (r instanceof uGt) f("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_contention");
    else (l(r), m("oauth_token_refresh", "cloud_sessions_oauth_refresh_lock_error"));
    return { ok: !1, reason: "refresh_failed", detail: "the renewal could not run; wait a moment" };
  }
}
function D() {
  return !ye() && i.CLAUDE_CODE_REMOTE !== !0;
}
var M = "Paste code here if prompted > ";
function H(e, { expectedState: s, onCode: k, onCancel: u }) {
  if (!e.input.isTTY || !e.output.isTTY) return;
  d0();
  let r = !1,
    o = !1,
    a = L({ input: e.input, output: e.output, prompt: M });
  return (
    a.on("SIGINT", () => u()),
    a.on("close", () => {
      if (!r) u();
    }),
    a.on("line", (n) => {
      let c = n.trim();
      if (!c) {
        a.prompt();
        return;
      }
      let [h, p] = c.split("#");
      if (!h || !p) {
        (e.output.write(`Invalid code. Please make sure the full code was copied.
`),
          a.prompt());
        return;
      }
      if (s !== void 0 && p !== s) {
        (e.output
          .write(`That code is not from this sign-in. Paste the code shown after opening the address above.
`),
          a.prompt());
        return;
      }
      ((o = !0), k({ authorizationCode: h, state: p }));
    }),
    a.prompt(),
    {
      close: () => {
        if (r) return;
        if (((r = !0), !o))
          e.output.write(`
`);
        a.close();
      }
    }
  );
}
async function B({
  organizationUuid: e,
  onBrowserOpening: s,
  terminal: k = { input: process.stdin, output: process.stdout }
}) {
  let u = rn().CLIENT_ID,
    r = i6()?.accountEmail,
    o = new E$(),
    a = !1,
    n = !1,
    c = !1,
    h,
    p,
    S,
    y = !1,
    I = () => {},
    b = new Promise((C, A) => {
      I = A;
    });
  b.catch(() => {});
  try {
    let C = o.startOAuthFlow(
      async (T, E) => {
        (s?.(T),
          (p = H(k, {
            expectedState: Y(T),
            onCode: (P) => o.handleManualAuthCodeInput(P),
            onCancel: () => {
              if (y) return;
              ((n = !0), (c = !0), I(Error("cloud-sessions sign-in cancelled")));
            }
          })),
          await Js(E ?? T));
      },
      {
        loginWithClaudeAi: !1,
        oauthClient: { clientId: u, scopes: Wlr },
        orgUUID: e,
        loginHint: r,
        skipBrowserOpen: !0,
        successRedirectUrl: rn().CLAUDEAI_SUCCESS_URL
      }
    );
    (C.then((T) => {
      if (c && T.refreshToken) gb(T.refreshToken, u);
    }).catch(() => {}),
      (h = setTimeout(() => {
        ((a = !0), (c = !0), I(Error("cloud-sessions sign-in timed out")));
      }, z)));
    let A = await Promise.race([C, b]);
    ((y = !0), p?.close());
    let _ = await G(A, u, e, r);
    if (!_.ok) return (m("cloud_sessions_console_sign_in", _.reason), _);
    S = _.slot;
    let w = await O();
    if (w?.refreshToken && w.refreshToken !== _.slot.refreshToken)
      await gb(w.refreshToken, w.clientId);
    if (!(await x(_.slot)).success)
      return (
        await gb(_.slot.refreshToken, u),
        m("cloud_sessions_console_sign_in", "save_failed"),
        {
          ok: !1,
          reason: "save_failed",
          message: "Could not save the cloud-sessions credential to secure storage. Try again."
        }
      );
    return (
      (S = void 0),
      g("cloud_sessions_console_sign_in"),
      { ok: !0, accessToken: _.slot.accessToken }
    );
  } catch (C) {
    if (((y = !0), (c = !0), S !== void 0)) await gb(S.refreshToken, S.clientId);
    if (a)
      return (
        m("cloud_sessions_console_sign_in", "timed_out"),
        {
          ok: !1,
          reason: "timed_out",
          message: "The browser sign-in for cloud sessions timed out after 5 minutes. Try again."
        }
      );
    if (n)
      return (
        f("cloud_sessions_console_sign_in", "cancelled"),
        { ok: !1, reason: "cancelled", message: "The sign-in for cloud sessions was cancelled." }
      );
    return (
      t(`Cloud-sessions sign-in failed: ${d(C)}`, { level: "error" }),
      m("cloud_sessions_console_sign_in", "failed"),
      {
        ok: !1,
        reason: "failed",
        message: "The browser sign-in for cloud sessions failed. Try again."
      }
    );
  } finally {
    if (h !== void 0) clearTimeout(h);
    (p?.close(), o.cleanup());
  }
}
function Y(e) {
  try {
    return new URL(e).searchParams.get("state") ?? void 0;
  } catch {
    return;
  }
}
async function G(e, s, k, u) {
  let r = async () => {
    if (e.refreshToken) await gb(e.refreshToken, s);
  };
  if (!e.scopes.includes(Ukn))
    return (
      await r(),
      {
        ok: !1,
        reason: "scope_not_granted",
        message:
          "Your Console organization doesn't allow cloud sessions from Claude Code, so the sign-in didn't grant that permission. Cloud sessions stay unavailable with this sign-in."
      }
    );
  let o = e.tokenAccount?.organizationUuid ?? e.profile?.organization.uuid;
  if (o === void 0)
    return (
      await r(),
      {
        ok: !1,
        reason: "invalid",
        message:
          "The sign-in didn't say which organization it was for, so it can't be used. Try again."
      }
    );
  if (o.toLowerCase() !== k.toLowerCase())
    return (
      await r(),
      {
        ok: !1,
        reason: "other_organization",
        message:
          "The sign-in was for a different organization than your Console sign-in. Sign in again and choose the same organization."
      }
    );
  if (u !== void 0) {
    let a = (e.tokenAccount?.emailAddress || e.profile?.account.email)?.trim() || void 0;
    if (a === void 0)
      return (
        await r(),
        {
          ok: !1,
          reason: "invalid",
          message:
            "The sign-in didn't say which account it was for, so it can't be used. Try again."
        }
      );
    if (a.trim().toLowerCase() !== u.trim().toLowerCase())
      return (
        await r(),
        {
          ok: !1,
          reason: "other_account",
          message: `The sign-in was for ${a}, but your Console sign-in is ${u}. Sign in again as ${u}.`
        }
      );
  }
  if (!e.refreshToken || !e.expiresAt)
    return (
      await r(),
      {
        ok: !1,
        reason: "invalid",
        message:
          "The sign-in came back without a refresh token or an expiry, so it could not be stored. Try again."
      }
    );
  return {
    ok: !0,
    slot: {
      accessToken: e.accessToken,
      refreshToken: e.refreshToken,
      expiresAt: e.expiresAt,
      scopes: e.scopes.filter((a) => Wlr.some((n) => n === a)),
      clientId: s,
      organizationUuid: k
    }
  };
}
function V() {
  if (!d9() || j2o()) return "unknown";
  return Ks("ldr") ? "ldr" : "not_ldr";
}
noi({ organizationLabel: V, hasStored: N, canSignInHere: D, getValid: R, signIn: B });

//# sourceMappingURL=chunk-3ykpnhq2.js.map
