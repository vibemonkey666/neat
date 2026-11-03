// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { jt, k, Re, ue } from "./chunk-ajtyjx88.js";
import { U } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { on } from "./chunk-cr7a2cdd.js";
import { iut, ute, zW } from "./chunk-pwnqr15h.js";
import { t$ } from "./chunk-6h7ejyet.js";
import { ZY } from "./chunk-ctvsv6p4.js";
import { bn, Go, Tt } from "./chunk-522pfw8k.js";
var s = p(() =>
  Tt({ reviews_used: bn(), reviews_limit: bn(), reviews_remaining: bn(), is_overage: Go() })
);
async function _(e) {
  let r = i.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r)
    try {
      let n = s().safeParse(te(r));
      return n.success ? n.data : null;
    } catch (n) {
      return (t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null);
    }
  try {
    let n = await jt.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3000,
      credentials: e
    });
    if (!n.ok) return (f("api_ultrareview_quota", "request_failed"), null);
    let o = s().safeParse(n.data);
    if (!o.success)
      return (
        t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`),
        f("api_ultrareview_quota", "schema_mismatch"),
        null
      );
    return (g("api_ultrareview_quota"), o.data);
  } catch (n) {
    return (
      t(`fetchUltrareviewQuota failed: ${n}`),
      f("api_ultrareview_quota", "request_failed"),
      null
    );
  }
}
class l {
  quota = void 0;
  fetch = void 0;
}
var h = new W(() => new l());
function m() {
  return h.of(U().host);
}
async function Qpo(e) {
  let r = m();
  ((r.fetch ??= _(e)), (r.quota = await r.fetch));
}
function rNn(e) {
  let r = m();
  if (r.quota === void 0) return (Qpo(e), null);
  return r.quota;
}
var S = "tengu_ultrareview_awareness";
function R() {
  return k(S, null) ?? {};
}
function vvr(e) {
  if (!t$()) return !1;
  if (!on("allow_remote_sessions")) return !1;
  return R()[e] === !0;
}
function Zpo() {
  return ue().hasRunUltrareview === !0;
}
function YEs(e) {
  Re((r) => (r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: !0 }), e);
}
function C(e) {
  a("tengu_ultrareview_awareness_shown", { surface: c(e) });
}
function emo(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function XEs(e) {
  if (e !== "ultrareview" && e !== ZY) return "";
  if (!vvr("slash_menu")) return "";
  let r = rNn();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left \xB7 ` : `${n} free /ultrareview \xB7 `;
}
var A = "ultrareview-prose-pointer",
  E = "ultrareview-post-commit",
  b = 5;
function d(e, r, n, o, w) {
  if (!vvr(e)) return null;
  if (Zpo()) return null;
  if (ute(r) >= b) return null;
  if (zW(r) === 0) return null;
  (iut(r, o), C(e));
  let u = rNn(w),
    v = u !== null && u.reviews_remaining > 0 ? ` \u2014 ${emo(u.reviews_remaining)}` : "";
  return n(v);
}
function JEs(e, r) {
  return d(
    "prose_pointer",
    A,
    (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`,
    e,
    r
  );
}
function QEs(e) {
  return d(
    "post_commit",
    E,
    (r) =>
      `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`,
    e,
    void 0
  );
}
export { Qpo, rNn, vvr, Zpo, YEs, emo, XEs, JEs, QEs };

//# sourceMappingURL=chunk-g289c0fr.js.map
