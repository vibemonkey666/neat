// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Dt, Au, UYe, BYe, d, E } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { iYe } from "./chunk-xc1j8sdj.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { sqt, Sr, Ae, Fn, Ci } from "./chunk-dvghjmtr.js";
import { nbe } from "./chunk-at88wjsn.js";
import { MZ } from "./chunk-7zgz07kc.js";
import { _5, hb, w0e, c_n, Xr, g_n, KCe, $t, U_, V7, QCe, Re } from "./chunk-ajtyjx88.js";
import { Y5, Brt, xNe, zVt, Sbe } from "./chunk-x8k0r295.js";
import { n9n, e2e, zUo } from "./chunk-bbw420pv.js";
import { yGn, IL } from "./chunk-j0tbz6ra.js";
import { qme } from "./chunk-rnyze5tj.js";
import { Z5, Pbe } from "./chunk-ya7n419k.js";
var _ = new Set(["fetch_error", "unknown", "org_level_disabled_until"]);
function b() {
  return Sr().providerCache.validatedModels;
}
async function WEr(e, o) {
  let r = e.trim();
  if (!r) return { valid: !1, error: "Model name cannot be empty" };
  if (!Xr(r, o.skipEntitlementDenyOverlay ? { skipEntitlementDenyOverlay: !0 } : void 0))
    return {
      valid: !1,
      error: `Model '${r}' is not in the list of available models`,
      notAllowed: !0
    };
  if (!o.forceServerProbe) {
    let u = r.toLowerCase();
    if (Z5.includes(u)) return { valid: !0 };
    if (r === i.ANTHROPIC_CUSTOM_MODEL_OPTION) return { valid: !0 };
    if (zUo(r) && KCe()?.picker.options.some((c) => c.model.trim() === r)) return { valid: !0 };
    if (b().has(r)) return { valid: !0 };
  }
  let n = Ae(),
    s = i.ANTHROPIC_BASE_URL,
    a = s && URL.canParse(s) ? new URL(s).hostname : void 0,
    f =
      Ci() ||
      (a !== void 0 &&
        (a === "anthropic.com" ||
          a.endsWith(".anthropic.com") ||
          iYe.some((u) => new URL(u).hostname === a)));
  if (!(n === "gateway" || (n === "firstParty" && !f)) && /[\s\p{Cc}\p{Cf}]/u.test(r))
    return { valid: !1, error: `Model '${r}' not found`, notFound: !0 };
  if (o.serverProbe === !1) return { valid: !0 };
  try {
    return (
      await IL({
        model: r,
        max_tokens: 1,
        maxRetries: 0,
        querySource: "model_validation",
        resendWithoutRefusedContext1m: !0,
        credentials: o.credentials,
        timeout: o.timeout,
        signal: o.signal,
        messages: [
          {
            role: "user",
            content: [{ type: "text", text: "Hi", cache_control: { type: "ephemeral" } }]
          }
        ]
      }),
      b().add(r),
      { valid: !0 }
    );
  } catch (u) {
    return A(u, r);
  }
}
var S = 15000;
async function g(e, o) {
  let r = Sr(),
    n = r.sessionModelDenyReprobe.generation,
    s = new AbortController(),
    a = await Pe(
      WEr(e, {
        forceServerProbe: o.forceServerProbe,
        skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay,
        credentials: o.credentials,
        timeout: o.deadlineMs,
        signal: s.signal
      }),
      o.deadlineMs
    );
  if (a === void 0) return (s.abort(), { probe: void 0, accountChanged: !1 });
  let f = r.sessionModelDenyReprobe.generation !== n;
  if (f) r.providerCache.validatedModels.delete(e.trim());
  return { probe: a, accountChanged: f };
}
async function vgo(e, o, r) {
  if (r === void 0 || o.serverProbe === !1) return WEr(e, o);
  let { probe: n, accountChanged: s } = await g(e, { ...o, deadlineMs: r });
  if (n === void 0 || s) {
    let a = _5("model");
    return {
      valid: !1,
      error: `Couldn't confirm model "${hb(e)}" with the API. ${a ? `Try again, or run ${a} to see available models.` : "Try again."}`,
      retryable: !0
    };
  }
  return n;
}
function X7t(e) {
  let o = e.toLowerCase().trim();
  return Pbe(o);
}
function Ego(e) {
  return X7t(e) || g_n(e) ? $t(e) : e;
}
async function Uve(e, o, r) {
  try {
    if (!Xr(e, { skipEntitlementDenyOverlay: !0 })) return "denied_by_policy";
    let n = Ego(e);
    if (X7t(n)) return "denied_by_policy";
    let s = Sr(),
      { confirmedEntitlementDenies: a, overturnedEntitlementDenies: f } = s.providerCache,
      p = w0e(n),
      u = a.get(p);
    if (u !== void 0 && Date.now() - u < sqt) return "denied_by_server";
    let { probe: c, accountChanged: y } = await g(n, {
      credentials: r,
      deadlineMs: S,
      forceServerProbe: !0,
      skipEntitlementDenyOverlay: !0
    });
    if (c === void 0)
      return (t("[model-access] stale-deny re-probe timed out", { level: "warn" }), "probe_failed");
    if (!c.valid && !c.notFound && !c.permissionDenied) return "probe_failed";
    if (y)
      return (
        t(
          "[model-access] stale-deny re-probe answered after the account changed; recording nothing"
        ),
        c.valid ? "overturned" : "denied_by_server"
      );
    if (!c.valid) {
      let m = Date.now();
      a.set(p, m);
      for (let v of QCe()) if (c_n(v, e)) a.set(w0e(v.apiName), m);
      return "denied_by_server";
    }
    a.delete(p);
    let h = Date.now();
    for (let m of QCe()) if (c_n(m, e)) f.set(w0e(m.apiName), h);
    try {
      await M(e, o);
    } catch (m) {
      if (E(m) !== void 0)
        t(`[model-access] stale-deny eviction failed: ${d(m)}`, { level: "warn" });
      else l(m);
    }
    return (qme(o, r), "overturned");
  } catch (n) {
    return (l(n), "probe_failed");
  }
}
async function M(e, o) {
  await Re((r) => {
    let n = r.modelAccessCache;
    if (!n?.length) return r;
    let s = n.filter((a) => {
      if (
        a == null ||
        typeof a !== "object" ||
        typeof a.apiName !== "string" ||
        typeof a.entitled !== "boolean"
      )
        return !0;
      return !c_n(a, e);
    });
    return s.length === n.length ? r : { ...r, modelAccessCache: s };
  }, o);
}
function A(e, o) {
  if (e instanceof BYe) {
    let n = yGn(o),
      s = n ? `. Try '${n}' instead` : "";
    return {
      valid: !1,
      error: `Model '${o}' not found${s}`,
      notFound: !0,
      ...(xNe(e) && { serverRefusedModel: !0 })
    };
  }
  if (e instanceof Dt) {
    if (e instanceof UYe)
      return {
        valid: !1,
        error: "Authentication failed. Please check your API credentials.",
        authFailed: !0
      };
    if (e instanceof Au)
      return {
        valid: !1,
        error: "Network error. Please check your internet connection.",
        retryable: !0
      };
    let n = e.error;
    if (
      n &&
      typeof n === "object" &&
      "type" in n &&
      n.type === "not_found_error" &&
      "message" in n &&
      typeof n.message === "string" &&
      n.message.includes("model:")
    )
      return { valid: !1, error: `Model '${o}' not found`, notFound: !0, serverRefusedModel: !0 };
    if (Brt(e))
      return {
        valid: !1,
        error: `Model '${o}' isn't available for your account`,
        permissionDenied: !0,
        serverRefusedModel: !0
      };
    let s = n?.error?.details,
      a = e.status === 429 && s?.error_code === "credits_required",
      f = e.headers?.get?.(n9n),
      p = a && !f && !_.has(e.headers?.get?.(e2e) ?? s?.disabled_reason ?? ""),
      u = Sbe(e).replace(/[.!?\u2026]+$/, "");
    if (
      Y5(e) ||
      (e.status === 403 && nbe(e.headers?.get?.("x-amzn-errortype") ?? void 0, e.message))
    )
      return { valid: !1, error: `API error: ${u} \xB7 model not changed`, authFailed: !0 };
    let c =
      R(e.status) ||
      (e.status === 407 && Boolean(MZ())) ||
      (e.status === 403 && (i.CLAUDE_CODE_REMOTE || (Fn() && !U_() && V7())));
    return {
      valid: !1,
      error: `API error: ${u} \xB7 model not changed`,
      ...(c ? { retryable: !0 } : { rejected: !0 }),
      ...(e.status === 429 && { rateLimited: !0 }),
      ...(a && { creditsRequired: !0 }),
      ...(e.status === 400 && zVt(e) && { sessionModeRefused: !0 }),
      ...(e.status === 429 &&
        !a &&
        (f === "five_hour" || f === "seven_day") && { sharedLimitReached: !0 }),
      ...(p && { serverRefusedModel: !0 })
    };
  }
  return {
    valid: !1,
    error: `Unable to validate model: ${e instanceof Error ? e.message : String(e)}`,
    retryable: !0
  };
}
function R(e) {
  return e === void 0 || e === 408 || e === 409 || e === 429 || e >= 500;
}
export { WEr, vgo, X7t, Ego, Uve };

//# sourceMappingURL=chunk-cefq50ab.js.map
