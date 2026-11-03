// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { t } from "./chunk-4kxznmzw.js";
import { dYo, Int, PKt, I4r, Dz, IKt, pR, kn, k } from "./chunk-ajtyjx88.js";
import { Z4t, ZZo } from "./chunk-4cgvah10.js";
import { jGt } from "./chunk-ya0dkdy0.js";
import { Han } from "./chunk-f88zb2v2.js";
var h = "tengu_log_datadog_events",
  d = "tengu_quizzical_giraffe",
  p = new Set([
    "tengu_started",
    "tengu_oauth_success",
    "tengu_oauth_token_refresh_lock_acquiring",
    "tengu_oauth_token_refresh_starting",
    "tengu_oauth_token_refresh_success",
    "tengu_oauth_token_refresh_failure",
    "tengu_oauth_token_refresh_race_recovered",
    "tengu_oauth_refresh_token_cleared_on_disk",
    "tengu_api_error",
    "tengu_feature_bad",
    "tengu_feature_sad"
  ]);
function m() {
  if (PKt("datadog")) return !1;
  try {
    return k(h, !1);
  } catch {
    return !1;
  }
}
function g(e, n) {
  if (!p.has(e)) return n;
  try {
    let { value: o, source: a } = kn(d, !1),
      r = a === "fallback" || a === "disabled";
    return { ...n, [d]: c(r ? "unset" : o === !0 ? "on" : "off") };
  } catch {
    return n;
  }
}
function _(e) {
  return e || Dz();
}
function E(e, n) {}
function f(e, n, o, a) {
  let r = a();
  if (!_(r)) return;
  let s = g(e, Han(n)),
    i = o !== null ? { ...s, sample_rate: o } : s;
  if (r) jGt(e, Z4t(i));
  (IKt(e, i), E(e, i));
}
var l = !1;
function v(e, n, o) {
  if (l) {
    t(
      `logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`,
      { level: "error" }
    );
    return;
  }
  l = !0;
  try {
    let a = I4r(e);
    if (a === 0) return;
    if (dYo()) {
      f(e, n, a, o);
      return;
    }
    let r = () => {
      l = !0;
      try {
        f(e, n, a, o);
      } finally {
        l = !1;
      }
    };
    Int().then(r, r);
  } finally {
    l = !1;
  }
}
async function y(e, n, o) {
  let a = I4r(e);
  if (a === 0) return;
  if (!dYo()) await Int();
  let r = o();
  if (!_(r)) return;
  let s = g(e, Han(n)),
    i = a !== null ? { ...s, sample_rate: a } : s,
    u = [];
  if (r) u.push(jGt(e, Z4t(i)));
  (u.push(pR(e, i)), E(e, i), await Promise.all(u));
}
function Zee() {
  ZZo(S(m));
}
function S(e) {
  return { logEvent: (n, o) => v(n, o, e), logEventAsync: (n, o) => y(n, o, e) };
}
export { Zee };

//# sourceMappingURL=chunk-9szrjwf3.js.map
