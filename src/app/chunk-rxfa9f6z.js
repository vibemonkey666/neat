// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Mw } from "./chunk-6w4zav00.js";
import { LZn } from "./chunk-jendns25.js";
import { Htt } from "./chunk-zhmcgfde.js";
import { YO } from "./chunk-pjg1157c.js";
import { lh } from "./chunk-q062f8va.js";
import { ph } from "./chunk-7zgz07kc.js";
import { Ce } from "./chunk-a2y39866.js";
var a = Ce(YO());
var c = ph(),
  d = Mw(),
  l = lh(),
  u = YO(),
  S = Htt();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = Ce(lh()),
  MZn =
    ({ logger: e, signingName: n } = {}) =>
    async () => {
      if ((e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n))
        throw new s.TokenProviderError(
          "Please pass 'signingName' to compute environment variable key",
          { logger: e }
        );
      let t = r(n);
      if (!(t in process.env))
        throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, {
          logger: e
        });
      let o = { token: process.env[t] };
      return (a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o);
    };
var i = Ce(lh());
var DZn = (e = {}) =>
  i.memoize(
    i.chain(LZn(e), async () => {
      throw new i.TokenProviderError("Could not load token from any providers", !1);
    }),
    (n) => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 300000,
    (n) => n.expiration !== void 0
  );
export { MZn, DZn };

//# sourceMappingURL=chunk-rxfa9f6z.js.map
