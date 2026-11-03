// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xYe, LSe } from "./chunk-wrtp8qz8.js";
import { X } from "./chunk-4hww8411.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { s2 } from "./chunk-tcvjb2c0.js";
import { LZ, aAt, Pse, i4t } from "./chunk-nrysaqwk.js";
import { Y } from "./chunk-arw2bgak.js";
var Tio = [250, 500, 500, 750, 1000];
function g() {
  return i.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse;
}
function C(r) {
  return (
    i.CLAUDE_CODE_REMOTE &&
    !i.CLAUDE_CODE_SESSION_ACCESS_TOKEN &&
    !i.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR &&
    r.some((e) => e === "--sdk-url" || e.startsWith("--sdk-url=")) &&
    !s2()
  );
}
var I = 250,
  w = 50;
function d() {
  return i4t(LZ, "OAuth token").token !== null || i4t(aAt, "API key").token !== null;
}
async function Shs(r, { delaysMs: e = Tio, siblingGraceMs: o = I, siblingStepMs: f = w } = {}) {
  if (!C(r)) return;
  let l = performance.now(),
    S = e.reduce((s, k) => s + k, 0),
    E = g(),
    { token: a, miss: _ } = i4t(E, "session ingress token"),
    n = 0;
  while (!a && n < e.length) {
    let s = e[n];
    (t(
      `[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${s}ms (${n + 1}/${e.length})`,
      { level: "warn" }
    ),
      await X(s),
      n++,
      ({ token: a, miss: _ } = i4t(E, "session ingress token")));
  }
  if (!a) {
    Y("error", "cli_worker_lifecycle_claim_token_wait", {
      attempts: n,
      recovered: !1,
      last_miss: _ ?? "other",
      waited_ms: Math.round(performance.now() - l)
    });
    return;
  }
  let u = n > 0 ? Math.max(S - (performance.now() - l), o) : o,
    p = performance.now(),
    c = 0,
    m = d();
  while (!m && performance.now() - p < u) (await X(f), c++, (m = d()));
  if (n > 0 || c > 0)
    Y("info", "cli_worker_lifecycle_claim_token_wait", {
      attempts: n,
      recovered: !0,
      sibling_attempts: c,
      sibling_present: m,
      waited_ms: Math.round(performance.now() - l)
    });
}
function whs() {
  let r = !!i.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (xYe() !== null) return { recovered: !1, diag: { fd_env_set: r } };
  let { token: e, miss: o } = i4t(g(), "session ingress token");
  if (!e) return { recovered: !1, diag: { fd_env_set: r, last_miss: o ?? "other" } };
  return (
    LSe(e),
    t("Session ingress token re-read from well-known file"),
    { recovered: !0, diag: { fd_env_set: r } }
  );
}
export { Tio, Shs, whs };

//# sourceMappingURL=chunk-qk3nwdye.js.map
