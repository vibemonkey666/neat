// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { Ae } from "./chunk-dvghjmtr.js";
var u = 10,
  cBr = 50,
  iAe = /^(?:session|cse)_[A-Za-z0-9_-]+$/;
function O(e) {
  let r = (e.title ?? "").trim();
  return r !== "" && !f(r);
}
function f(e) {
  return e.includes("__CBU_POOLED__") || e === "__warming__" || e.startsWith("ditto:");
}
async function pRi(e) {
  if (Ae() !== "firstParty") return [];
  try {
    await import("./chunk-7r611cmj.js");
    let {
        axiosGetWithRetry: r,
        prepareApiRequest: o,
        getOAuthRequestHeaders: S
      } = await import("./chunk-4rmjyh0d.js"),
      { getOauthConfig: R } = await import("./chunk-6rwcr2s6.js"),
      { accessToken: C } = await o(e?.credentials),
      b = (e?.statuses ?? []).map((c) => `&statuses=${c}`).join(""),
      m = `${R().BASE_API_URL}/v1/code/sessions?limit=100${b}`,
      w = {
        ...S(C),
        ...(e?.requestReason && { "anthropic-client-request-reason": e.requestReason })
      },
      g = new Set(),
      n = [],
      h = 0,
      s = null,
      a = 0;
    for (; a < u; a++) {
      let c = s ? `${m}&cursor=${encodeURIComponent(s)}` : m,
        i;
      try {
        i = await r(c, { headers: w, timeout: 15000 });
      } catch (t) {
        if (e?.throwOnError) throw t;
        let { logForDebugging: y } = await import("./chunk-9expqymv.js");
        y(`[ccr:list] page ${a} failed (${n.length} rows so far): ${d(t)}`);
        break;
      }
      h += i.data.data.length;
      for (let t of i.data.data) {
        if (g.has(t.id)) continue;
        if (
          (g.add(t.id),
          t.status !== "archived" &&
            (e?.includeBridgeKind || t.environment_kind !== "bridge") &&
            iAe.test(t.id) &&
            (e?.includeBridgeKind && t.environment_kind === "bridge"
              ? !f((t.title ?? "").trim())
              : O(t)) &&
            (e?.accept?.(t) ?? !0))
        )
          n.push(t);
      }
      s = i.data.next_cursor ?? null;
      let l = i.data.data.at(-1),
        _ = l ? Date.parse(l.last_event_at ?? l.created_at) : Number.NaN;
      if (
        !s ||
        (!e?.exhaustive && n.length >= cBr) ||
        (e?.stopWhenOlderThan !== void 0 && !Number.isNaN(_) && _ < e.stopWhenOlderThan)
      )
        break;
    }
    let { logForDebugging: v } = await import("./chunk-9expqymv.js"),
      p = a >= u && s !== null;
    if (e?.status) ((e.status.truncated = p), (e.status.moreRemain = Boolean(s)));
    return (
      v(
        `[ccr:list]: ${h} fetched, ${n.length} after archive/bridge/husk${e?.accept ? "/accept" : ""} filter${p ? ` (TRUNCATED: ${u}-page budget exhausted with more remaining)` : ""}`
      ),
      n
    );
  } catch (r) {
    if (e?.throwOnError) throw r;
    let { logForDebugging: o } = await import("./chunk-9expqymv.js");
    o(`[ccr:list] failed: ${d(r)}`);
  }
  return [];
}
export { cBr, iAe, pRi };

//# sourceMappingURL=chunk-b9bd511t.js.map
