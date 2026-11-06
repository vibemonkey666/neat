import {
  fileURLToPath as __sourceFilePath_7a65fe3c09b30192,
  URL as __sourceFilePath_7a65fe3c09b30192_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { i } from "./chunk-cj37hmns.js";
import { _ } from "./chunk-4kxznmzw.js";
import { Y9 } from "./chunk-8r2m7vfp.js";
import { Ln, il, fa } from "./chunk-ajtyjx88.js";
import { mwn } from "./chunk-38g9s4wc.js";
import { Qd } from "./chunk-nwy76t58.js";
import { z } from "./chunk-p197ae0z.js";
var m =
  " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class a extends Error {
  status;
  constructor(t, e) {
    super(e);
    ((this.name = "SelfHostedRunnerApiError"), (this.status = t));
  }
}
var s3e = 8080;
function l() {
  let { getAPIProvider: t } = import.meta.require(
    __sourceFilePath_7a65fe3c09b30192(
      new __sourceFilePath_7a65fe3c09b30192_URL("./chunk-apn1fpkn.js", import.meta.url)
    )
  );
  if (t() !== "firstParty")
    throw new a(
      403,
      "Self-hosted runner management is only available on the first-party Anthropic API provider."
    );
}
var f =
  "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)";
function i3e() {
  let t = i.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return rn().BASE_API_URL;
}
function m_s() {
  return rn().CLAUDE_AI_ORIGIN;
}
async function g(t) {
  l();
  let e = import.meta.require(
    __sourceFilePath_7a65fe3c09b30192(
      new __sourceFilePath_7a65fe3c09b30192_URL("./chunk-4rmjyh0d.js", import.meta.url)
    )
  );
  if (e.isConsoleProfileSessionsCredential()) {
    let s = await e.sessionsApiAccessToken(!0);
    if (!s) throw new a(401, e.cloudSessionsSignInRefusal());
    return s;
  }
  await fa({ credentials: t }).catch(() => {});
  let o = z() && t !== void 0 ? (await il(t))?.accessToken : Ln()?.accessToken;
  if (!o) throw new a(401, f);
  return o;
}
function FUe(t) {
  return { ui: t };
}
async function UUe(t, e, o, s, d) {
  l();
  let u = await g(d);
  if (mwn(u)) throw new a(401, f);
  let n = await Ht.request({
    method: t,
    url: `${i3e()}${e}`,
    data: o,
    headers: {
      Authorization: `Bearer ${u}`,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    timeout: 20000,
    signal: s,
    validateStatus: (r) => r < 500
  }).catch((r) => {
    if (Ht.isAxiosError(r) && !Ht.isCancel(r) && r.response === void 0)
      throw new a(0, `${t} ${e}: ${r.message}`);
    throw r;
  });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? _(n.data),
      c = `HTTP ${n.status} ${t} ${e}: ${r}`;
    if ([401, 403, 404, 409, 429].includes(n.status)) {
      let p = n.status === 401 || n.status === 403 ? m : "";
      throw new a(n.status, c + p);
    }
    throw Error(c);
  }
  return n.data;
}
function VX(t, e) {
  return { tool_use_id: t, type: "tool_result", content: Qd(_(e)) };
}
function n4(t) {
  let e = Y9(t);
  if (e !== null) return e;
  return Object.entries(t)
    .filter(([, o]) => o !== void 0)
    .map(([o, s]) => `${o}=${typeof s === "string" ? s : _(s)}`)
    .join(" ");
}
export { s3e, i3e, m_s, FUe, UUe, VX, n4 };

//# sourceMappingURL=chunk-16mkswz5.js.map
