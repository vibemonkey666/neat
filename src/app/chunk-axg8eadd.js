// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { XO } from "./chunk-xnwrf1mq.js";
import { HZn, w_e } from "./chunk-v2fp4zzc.js";
import "./chunk-kr9k5jph.js";
import { hKo } from "./chunk-acfkxky7.js";
import { tC } from "./chunk-ge85xgmw.js";
import { Mw } from "./chunk-6w4zav00.js";
import "./chunk-2x7y5aqr.js";
import { lh } from "./chunk-q062f8va.js";
import "./chunk-3b5xdkhc.js";
import "./chunk-ge5t5c4x.js";
import { Ce } from "./chunk-a2y39866.js";
var x = Ce(lh()),
  O = (...e) => {
    let r = -1,
      i = Object.assign(
        async (t) => {
          let o = await P(...e)(t);
          if (!o.expiration && r !== -1) o.expiration = new Date(Date.now() + r);
          return o;
        },
        {
          expireAfter(t) {
            if (t < 300000)
              throw Error(
                "@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes."
              );
            return ((r = t), i);
          }
        }
      );
    return i;
  },
  P =
    (...e) =>
    async (r) => {
      if (e.length === 0) throw new x.ProviderError("No providers in chain", { tryNextLink: !1 });
      let n;
      for (let i of e)
        try {
          return await i(r);
        } catch (t) {
          if (((n = t), t?.tryNextLink)) continue;
          throw t;
        }
      throw n;
    };
var R = (e) => HZn(e);
var F = (e = {}) => hKo({ ...e });
var v = (e = {}) => w_e({ ...e });
var E = Ce(tC()),
  T = Ce(XO());
var h = Ce(Mw()),
  S = Ce(lh()),
  k = "us-east-1",
  A = (e, r, n) => {
    let i;
    return async (t = {}) => {
      let { callerClientConfig: o } = t,
        w = e.clientConfig?.profile ?? o?.profile,
        c = e.logger ?? o?.logger;
      c?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
      let f = {
        ...e.params,
        RoleSessionName: e.params.RoleSessionName ?? "aws-sdk-js-" + Date.now()
      };
      if (f?.SerialNumber) {
        if (!e.mfaCodeProvider)
          throw new S.CredentialsProviderError(
            "Temporary credential requires multi-factor authentication, but no MFA code callback was provided.",
            { tryNextLink: !1, logger: c }
          );
        f.TokenCode = await e.mfaCodeProvider(f?.SerialNumber);
      }
      let { AssumeRoleCommand: I, STSClient: N } = await import("./chunk-xxe913ne.js");
      if (!i) {
        let u = typeof r === "function" ? r() : void 0,
          s = [
            e.masterCredentials,
            e.clientConfig?.credentials,
            void o?.credentials,
            o?.credentialDefaultProvider?.(),
            u
          ],
          l = "STS client default credentials";
        if (s[0]) l = "options.masterCredentials";
        else if (s[1]) l = "options.clientConfig.credentials";
        else if (s[2])
          throw (
            (l = "caller client's credentials"),
            Error("fromTemporaryCredentials recursion in callerClientConfig.credentials")
          );
        else if (s[3]) l = "caller client's credentialDefaultProvider";
        else if (s[4]) l = "AWS SDK default credentials";
        let d = [e.clientConfig?.region, o?.region, await n?.({ profile: w }), k],
          m = "default partition's default region";
        if (d[0]) m = "options.clientConfig.region";
        else if (d[1]) m = "caller client's region";
        else if (d[2]) m = "file or env region";
        let C = [y(e.clientConfig?.requestHandler), y(o?.requestHandler)],
          g = "STS default requestHandler";
        if (C[0]) g = "options.clientConfig.requestHandler";
        else if (C[1]) g = "caller client's requestHandler";
        (c?.debug?.(
          `@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${m}=${await h.normalizeProvider(p(d))()}, ${l}, ${g}.`
        ),
          (i = new N({
            userAgentAppId: o?.userAgentAppId,
            ...e.clientConfig,
            credentials: p(s),
            logger: c,
            profile: w,
            region: p(d),
            requestHandler: p(C)
          })));
      }
      if (e.clientPlugins) for (let u of e.clientPlugins) i.middlewareStack.use(u);
      let { Credentials: a } = await i.send(new I(f));
      if (!a || !a.AccessKeyId || !a.SecretAccessKey)
        throw new S.CredentialsProviderError(
          `Invalid response from STS.assumeRole call with role ${f.RoleArn}`,
          { logger: c }
        );
      return {
        accessKeyId: a.AccessKeyId,
        secretAccessKey: a.SecretAccessKey,
        sessionToken: a.SessionToken,
        expiration: a.Expiration,
        credentialScope: a.CredentialScope
      };
    };
  },
  y = (e) => (e?.metadata?.handlerProtocol === "h2" ? void 0 : e),
  p = (e) => {
    for (let r of e) if (r !== void 0) return r;
  };
var M = (e) =>
  A(e, v, async ({ profile: r = process.env.AWS_PROFILE }) =>
    T.loadConfig(
      {
        environmentVariableSelector: (n) => n.AWS_REGION,
        configFileSelector: (n) => n.region,
        default: () => {
          return;
        }
      },
      { ...E.NODE_REGION_CONFIG_FILE_OPTIONS, profile: r }
    )()
  );
export {
  O as createCredentialChain,
  R as fromEnv,
  F as fromIni,
  v as fromNodeProviderChain,
  M as fromTemporaryCredentials
};

//# sourceMappingURL=chunk-axg8eadd.js.map
