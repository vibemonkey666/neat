// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { j_e, kc, ua, Hw, Ep, tRe, nRe, Et, Poe } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { _t } from "./chunk-ewvf3tep.js";
import { Nc } from "./chunk-4nzy53ma.js";
import { tk, Ae } from "./chunk-dvghjmtr.js";
import { I0 } from "./chunk-znkwh1rm.js";
import { R4e } from "./chunk-v19xty83.js";
import { BYr, For } from "./chunk-r1dvrqha.js";
import { VGt, Fce, C7, on, d9, Sp, Xc, TKe } from "./chunk-cr7a2cdd.js";
import { q1t } from "./chunk-r5xsp8d0.js";
import { p2o } from "./chunk-gjpjdnzc.js";
var kQ = { policy: "allow_remote_sessions" },
  d = "Cloud sessions use your claude.ai login.",
  m = {
    ANTHROPIC_API_KEY: { noun: "key", fetchedTheLoadedAnswer: () => p2o() },
    ANTHROPIC_AUTH_TOKEN: { noun: "token", fetchedTheLoadedAnswer: () => VGt() === "same" }
  };
function rre() {
  let o = Ae();
  if (o !== "firstParty")
    return `Cloud sessions aren't available with ${tk[o]}. They run on Anthropic's infrastructure and require an Anthropic account.`;
  let { policy: e } = kQ,
    { featureLabel: r, verb: c } = C7(e),
    u = Sp(e, r, c);
  if (u === null) return null;
  let l = Xc(e);
  if (l === "org_denied") {
    let n = d9() && I0().length === 0 ? p() : null;
    if (n === null) return u;
    let a = `${r} ${c} ${For([])}.`;
    if (n === "apiKeyHelper") return a;
    let { noun: f, fetchedTheLoadedAnswer: h } = m[n];
    if (!h()) return u;
    return `${a} This session is using ${n}, so Claude Code checked the policy for the organization that ${f} belongs to. ${d}`;
  }
  let t = Fce();
  if (l !== "cache_miss" || t === null || t.success || t.retrying || t.httpStatus === 404) return u;
  let s = BYr(r, c, t);
  if (t.errorCode !== "auth_failed" || t.httpStatus === 403 || TKe(e)) return s;
  if (p() !== null) {
    let n = q1t({ prefix: d, suffix: "to use cloud sessions." });
    return `${s} ${n}`;
  }
  if (t.httpStatus === 401 && !j_e() && Et() && ua().source === "claude.ai" && tRe() === null)
    return `${s} Run \`claude auth login\` (or /login in a local session), then try again.`;
  if (!Hw() && kc() && t.httpStatus === null && R4e() && nRe() && !Ne(!1))
    return `${s} Cloud sessions need a claude.ai sign-in. Run \`claude auth login\` (or /login in a local session), then try again.`;
  return s;
}
function A5n() {
  return Xc(kQ.policy) === "org_denied";
}
function p() {
  if (i.ANTHROPIC_UNIX_SOCKET || Ne(!1) || !Poe() || Et()) return null;
  let { key: o, source: e } = Ep();
  if (e === "ANTHROPIC_API_KEY") return o === i.ANTHROPIC_API_KEY ? e : null;
  if (e === "apiKeyHelper") return e;
  return ua().source === "ANTHROPIC_AUTH_TOKEN" ? "ANTHROPIC_AUTH_TOKEN" : null;
}
function KDe() {
  return !_t() && on("allow_remote_sessions") && on("allow_quick_web_setup");
}
function Whe() {
  return !Nc() && KDe();
}
function Oyt() {
  return `${rn().CLAUDE_AI_ORIGIN}/connect-github`;
}
function y7e(o = "this repository") {
  let e = Oyt(),
    r = Whe()
      ? `Run /web-setup to connect with your GitHub CLI login, or connect on the web at ${e}`
      : `Connect it on the web at ${e}`;
  return `GitHub isn't connected to your Claude account, so ${o} can't be cloned in the cloud. ${r}`;
}
var y = {
    type: "local-jsx",
    name: "web-setup",
    description: "Set up cloud sessions with your GitHub account",
    availability: ["claude-ai"],
    isEnabled: KDe,
    policyGate: kQ,
    get isHidden() {
      return !on("allow_remote_sessions") || !on("allow_quick_web_setup");
    }
  },
  rRi = y;
export { kQ, rre, A5n, KDe, Whe, Oyt, y7e, rRi };

//# sourceMappingURL=chunk-7f6g2yy3.js.map
