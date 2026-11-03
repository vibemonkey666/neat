// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { l } from "./chunk-ewvf3tep.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { SVr, VU, Ctr, wVr, Tqo, h2t } from "./chunk-ajtyjx88.js";
import { c4t, cAt, T4e, FZ } from "./chunk-v19xty83.js";
import { Pce } from "./chunk-crvt0hax.js";
import { Js } from "./chunk-6jn0brsm.js";
import { createServer as I } from "http";
var P = 200;
class _ {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  codeReceived = !1;
  constructor(e = "/callback") {
    ((this.localServer = I()), (this.callbackPath = e));
  }
  async start(e) {
    return new Promise((r, i) => {
      (this.localServer.once("error", (o) => {
        (m("oauth_callback_listener", "oauth_callback_server_start_failed"),
          i(Error(`Failed to start OAuth callback server: ${o.message}`, { cause: o })));
      }),
        this.localServer.listen(e ?? 0, "127.0.0.1", () => {
          let o = this.localServer.address();
          ((this.port = o.port), r(this.port));
        }));
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, r) {
    return new Promise((i, o) => {
      ((this.promiseResolver = i),
        (this.promiseRejecter = o),
        (this.expectedState = e),
        this.startLocalListener(r));
    });
  }
  handleSuccessRedirect(e, r) {
    if (!this.pendingResponse) return;
    if (r) {
      (r(this.pendingResponse, e),
        (this.pendingResponse = null),
        a("tengu_oauth_automatic_redirect", { custom_handler: !0 }));
      return;
    }
    let i = VU(e) ? rn().CLAUDEAI_SUCCESS_URL : rn().CONSOLE_SUCCESS_URL;
    (this.pendingResponse.writeHead(302, { Location: i }),
      this.pendingResponse.end(),
      (this.pendingResponse = null),
      a("tengu_oauth_automatic_redirect", {}));
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let e = rn().CLAUDEAI_SUCCESS_URL;
    (this.pendingResponse.writeHead(302, { Location: e }),
      this.pendingResponse.end(),
      (this.pendingResponse = null),
      a("tengu_oauth_automatic_redirect_error", {}));
  }
  startLocalListener(e) {
    (this.localServer.on("request", this.handleRedirect.bind(this)),
      this.localServer.on("error", this.handleError.bind(this)),
      e());
  }
  handleRedirect(e, r) {
    let i = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (i.pathname !== this.callbackPath) {
      (r.writeHead(404), r.end());
      return;
    }
    let o = i.searchParams.get("code") ?? void 0,
      n = i.searchParams.get("state") ?? void 0,
      s = i.searchParams.get("error") ?? void 0;
    if (!o && s && c4t()) {
      this.respondToErrorCallback({
        error: s,
        errorDescription: i.searchParams.get("error_description") ?? void 0,
        errorUri: i.searchParams.get("error_uri") ?? void 0,
        state: n,
        res: r
      });
      return;
    }
    this.validateAndRespond(o, n, r);
  }
  validateAndRespond(e, r, i) {
    if (r === this.expectedState && this.answerIfCodeReceived(i)) return;
    if (!e) {
      (m("oauth_callback_listener", "oauth_callback_no_code"),
        i.writeHead(400),
        i.end("Authorization code not found"),
        this.reject(Error("No authorization code received")));
      return;
    }
    if (this.rejectOnStateMismatch(r, i)) return;
    ((this.codeReceived = !0),
      (this.pendingResponse = i),
      g("oauth_callback_listener"),
      this.resolve(e));
  }
  respondToErrorCallback({ error: e, errorDescription: r, errorUri: i, state: o, res: n }) {
    if (this.rejectOnStateMismatch(o, n)) return;
    if (this.answerIfCodeReceived(n)) return;
    let s = r === cAt;
    (m(
      "oauth_callback_listener",
      s ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error"
    ),
      n.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }),
      n.end(
        s
          ? "Your account is on hold. You can close this window."
          : "Sign-in was canceled or failed. You can close this window."
      ),
      this.reject(new FZ(w(e), r === void 0 ? void 0 : w(r), s ? T4e(i) : void 0)));
  }
  answerIfCodeReceived(e) {
    if (!this.codeReceived) return !1;
    return (
      e.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }),
      e.end("Sign-in is already finishing. You can close this window."),
      !0
    );
  }
  rejectOnStateMismatch(e, r) {
    if (e === this.expectedState) return !1;
    return (
      m("oauth_callback_listener", "oauth_callback_state_mismatch"),
      r.writeHead(400),
      r.end("Invalid state parameter"),
      this.reject(Error("Invalid state parameter")),
      !0
    );
  }
  handleError(e) {
    (m("oauth_callback_listener", "oauth_callback_server_error"),
      l(e),
      this.close(),
      this.reject(e));
  }
  resolve(e) {
    if (this.promiseResolver)
      (this.promiseResolver(e), (this.promiseResolver = null), (this.promiseRejecter = null));
  }
  reject(e) {
    if (this.promiseRejecter)
      (this.promiseRejecter(e), (this.promiseResolver = null), (this.promiseRejecter = null));
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer) (this.localServer.removeAllListeners(), this.localServer.close());
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function w(e) {
  return re(e.replace(/[\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]/gu, ""), P);
}
import { createHash as T, randomBytes as k } from "crypto";
function A(e) {
  return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
function L() {
  return A(k(32));
}
function O(e) {
  let r = T("sha256");
  return (r.update(e), A(r.digest()));
}
function U() {
  return A(k(32));
}
class c7n extends Error {
  constructor(e) {
    super("Couldn't start the local listener that receives the browser sign-in. Try again.", {
      cause: e
    });
    this.name = "CallbackListenerUnavailableError";
  }
}
var u7n =
    "The browser can't return the sign-in to Claude Code automatically. After you sign in, paste the code shown.",
  f7n = "Paste code here > ";
class E$ {
  codeVerifier;
  authCodeListener = null;
  manualAuthCodeResolver = null;
  authorizationCodeReceived = !1;
  constructor() {
    this.codeVerifier = L();
  }
  async startOAuthFlow(e, r) {
    this.authorizationCodeReceived = !1;
    let i = null;
    this.authCodeListener = new _();
    try {
      i = await this.authCodeListener.start();
    } catch (c) {
      ((this.authCodeListener = null),
        t(`OAuth callback listener could not start: ${d(c)}`, { level: "error" }));
      let u = c instanceof Error ? E(c.cause) : void 0;
      if (!r?.onCallbackListenerUnavailable || u === "EMFILE" || u === "ENFILE") throw new c7n(c);
      r.onCallbackListenerUnavailable();
    }
    let o = O(this.codeVerifier),
      n = U(),
      s = {
        codeChallenge: o,
        state: n,
        port: i ?? 0,
        loginWithClaudeAi: r?.loginWithClaudeAi,
        inferenceOnly: r?.inferenceOnly,
        orgUUID: r?.orgUUID,
        loginHint: r?.loginHint,
        loginMethod: r?.loginMethod,
        oauthClient: r?.oauthClient,
        alsoRequestScope: r?.settingsOnlyGrant?.scope
      },
      v = wVr({ ...s, isManual: !0 }),
      C = i === null ? void 0 : wVr({ ...s, isManual: !1 }),
      y = await this.waitForAuthorizationCode(n, async () => {
        if (C === void 0) await e(v);
        else if (r?.skipBrowserOpen) await e(v, C);
        else (await e(v), await Js(C));
      }),
      h = this.authCodeListener?.hasPendingResponse() ?? !1;
    a("tengu_oauth_auth_code_received", { automatic: h });
    try {
      let c = await Tqo(y, {
        state: n,
        codeVerifier: this.codeVerifier,
        port: s.port,
        useManualRedirect: !h,
        expiresIn: r?.expiresIn,
        clientId: r?.oauthClient?.clientId
      });
      if (h) {
        let p = Ctr(c.scope),
          R = r?.settingsOnlyGrant,
          b = R && p.includes(R.scope) && !VU(p) ? R.successRedirectUrl : r?.successRedirectUrl;
        if (b)
          this.authCodeListener?.handleSuccessRedirect(p, (S) => {
            (S.writeHead(302, { Location: b }), S.end());
          });
        else this.authCodeListener?.handleSuccessRedirect(p);
      }
      let u = r?.skipProfileFetch ? null : await h2t(c.access_token);
      if (i === null) f("oauth_login", "callback_listener_unavailable");
      else g("oauth_login");
      return this.formatTokens(c, {
        subscriptionType: u?.subscriptionType ?? null,
        unconfirmedPlan: u?.originStamped !== !0,
        rateLimitTier: u?.rateLimitTier ?? null,
        profile: u?.rawProfile,
        clientId: r?.oauthClient?.clientId
      });
    } catch (c) {
      if ((m("oauth_login", "oauth_login_failed"), h)) this.authCodeListener?.handleErrorRedirect();
      if (!r?.inferenceOnly && !r?.oauthClient)
        Pce({ action: "login", success: !1, authMethod: "oauth", error: c });
      throw c;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, r) {
    return new Promise((i, o) => {
      if (((this.manualAuthCodeResolver = i), !this.authCodeListener)) {
        r().catch((n) => {
          ((this.manualAuthCodeResolver = null), o(n));
        });
        return;
      }
      this.authCodeListener
        .waitForAuthorization(e, r)
        .then((n) => {
          ((this.manualAuthCodeResolver = null), (this.authorizationCodeReceived = !0), i(n));
        })
        .catch((n) => {
          ((this.manualAuthCodeResolver = null), o(n));
        });
    });
  }
  handleManualAuthCodeInput(e) {
    if (this.manualAuthCodeResolver)
      ((this.authorizationCodeReceived = !0),
        this.manualAuthCodeResolver(e.authorizationCode),
        (this.manualAuthCodeResolver = null),
        this.authCodeListener?.close());
  }
  formatTokens(
    e,
    { subscriptionType: r, unconfirmedPlan: i, rateLimitTier: o, profile: n, clientId: s }
  ) {
    return {
      accessToken: e.access_token,
      refreshToken: e.refresh_token,
      expiresAt: Date.now() + e.expires_in * 1000,
      refreshTokenExpiresAt: SVr(e.refresh_token_expires_in, !0),
      scopes: Ctr(e.scope),
      subscriptionType: r,
      ...(r !== null && { subscriptionTypeSource: i ? "profile" : "sign_in" }),
      rateLimitTier: o,
      profile: n,
      clientId: s,
      tokenAccount: e.account
        ? {
            uuid: e.account.uuid,
            emailAddress: e.account.email_address,
            organizationUuid: e.organization?.uuid,
            organizationName: e.organization?.name,
            workspaceId: e.workspace?.id,
            workspaceName: e.workspace?.name
          }
        : void 0
    };
  }
  hasReceivedAuthorizationCode() {
    return this.authorizationCodeReceived;
  }
  cleanup() {
    (this.authCodeListener?.close(), (this.manualAuthCodeResolver = null));
  }
}
export { c7n, u7n, f7n, E$ };

//# sourceMappingURL=chunk-4j8ddsyx.js.map
