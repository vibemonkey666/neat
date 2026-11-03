// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { Ye } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Oh } from "./chunk-yw4wqxm9.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Na } from "./chunk-ddpw2j06.js";
import { l } from "./chunk-ewvf3tep.js";
import { i } from "./chunk-cj37hmns.js";
import { Tqe, al } from "./chunk-r1dvrqha.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { ehn, Z } from "./chunk-p27rr8yn.js";
import { fK, SJ, _D, _3, qR, du } from "./chunk-1vdj04pp.js";
import { Oy } from "./chunk-6dwr3g2n.js";
import { Mce } from "./chunk-khq9hq2s.js";
import { nft } from "./chunk-3fa21dzg.js";
import { Q8 } from "./chunk-fh50nzzj.js";
import { $uo } from "./chunk-pb6nspqf.js";
import { dEs } from "./chunk-34151x92.js";
import { aIe, MDn } from "./chunk-m7rzwy2r.js";
import { i1 } from "./chunk-4jv79ccn.js";
import { Yc } from "./chunk-9v1g0mex.js";
function U_r() {
  return Q8()
    ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${nft(!0)}`
    : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one).";
}
function mlo() {
  return nr() && !_D();
}
var A = { ok: !1, reason: "relay-unavailable", status: 0, route: "relay", fromFrame: !1 };
function p(t) {
  return `Couldn't confirm the delete (the cloud relay failed: ${t}) \u2014 it may have gone through; check with action "list" before telling the user or trying again.`;
}
var R = 65536,
  w = 1000,
  S = 1e4;
function C(t) {
  return typeof t === "string" ? t.trim() : "";
}
function y(t, o, n) {
  return {
    source: t.source === "tool" ? b("tool") : b("dialog"),
    route: n === "relay" ? b("relay") : b("direct"),
    ...(t.sessionMinted !== void 0 && { session_minted: t.sessionMinted }),
    ...(t.ageSeconds !== void 0 && { age_s: t.ageSeconds }),
    ...(t.sinceUpdateSeconds !== void 0 && { since_update_s: t.sinceUpdateSeconds }),
    ...(o && { retried: !0 })
  };
}
async function IDn(t, o, n) {
  let u = () =>
      mlo()
        ? Promise.resolve(A)
        : du.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, {
            refreshOAuth: !0,
            headers: Yc(),
            timeout: 15000,
            maxContentLength: R,
            signal: n.signal,
            credentials: o
          }),
    e,
    c = !1;
  try {
    if (
      ((e = await u()),
      e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503))
    ) {
      let a = e.response.headers?.["retry-after"],
        s = Math.min(Oh(typeof a === "string" ? a : void 0) ?? w, S);
      (await X(s, n.signal, { abortError: () => new Ye() }), (c = !0), (e = await u()));
    }
  } catch (a) {
    if (Na(a) || a instanceof Ye || n.signal?.aborted) throw a;
    let s = qR(a);
    return (
      m("artifact_delete", "request_error", y(n, c, s ? "relay" : "direct")),
      {
        err: s ? p("no answer") : "Couldn't delete the Artifact (network error)",
        reason: "request_error"
      }
    );
  }
  let r = y(n, c, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served")
      return (
        m("artifact_delete", e.reason.replace(/-/g, "_"), { ...r, status: e.status }),
        { err: U_r(), reason: "unavailable" }
      );
    return (
      m("artifact_delete", e.reason, r),
      {
        err: e.reason === "no-auth" ? Oy(e.detail) : `Artifact delete unavailable: ${e.reason}`,
        reason: "unavailable"
      }
    );
  }
  if (!e.fromFrame && (e.status < 200 || e.status >= 300))
    return (
      m("artifact_delete", "relay_error", { ...r, status: e.status }),
      { err: p(`HTTP ${e.status}`), reason: "http_failed", status: e.status }
    );
  if (e.status === 404) {
    if (!SJ(e.data))
      return (
        m("artifact_delete", "not_found_foreign", { ...r, status: 404 }),
        {
          err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
          reason: "http_failed",
          status: 404
        }
      );
    return (f("artifact_delete", "not_found", r), { err: null, alreadyGone: !0 });
  }
  if (e.status === 403) {
    let a = C(e.data);
    if (/^not owner\b/.test(a))
      return (
        f("artifact_delete", "not_owner", r),
        { err: "Only the Artifact's owner can delete it.", reason: "not_owner", status: 403 }
      );
    if (a.startsWith(fK))
      return (
        m("artifact_delete", "ccr_credential_refused", r),
        { err: U_r(), reason: "unavailable", status: 403 }
      );
  }
  if (e.status < 200 || e.status >= 300)
    return (
      m("artifact_delete", "http_failed", { ...r, status: e.status }),
      {
        err:
          e.status >= 500
            ? `Couldn't confirm the delete (HTTP ${e.status}) \u2014 the Artifact may already be unreachable; retry once.`
            : `Couldn't delete the Artifact (HTTP ${e.status})`,
        reason: "http_failed",
        status: e.status
      }
    );
  if (e.status !== 204 || (e.route === "relay" && !_3(e)))
    return (
      m("artifact_delete", "ok_foreign", { ...r, status: e.status }),
      {
        err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
        reason: "http_failed",
        status: e.status
      }
    );
  return (g("artifact_delete", r), { err: null, alreadyGone: !1 });
}
function F(t, o) {
  let n = Object.keys(t.frameUrls),
    u = n.filter((h) => al(t.frameUrls[h].url) !== o),
    e = t.artifactRefs?.filter((h) => h.slug !== o),
    c = (e?.length ?? 0) !== (t.artifactRefs?.length ?? 0),
    r = t.artifactReadVersions !== void 0 && o in t.artifactReadVersions,
    a = t.artifactReadObservers !== void 0 && o in t.artifactReadObservers;
  if (u.length === n.length && !c && !r && !a) return t;
  let { [o]: s, ...d } = t.artifactReadVersions ?? {},
    { [o]: D, ..._ } = t.artifactReadObservers ?? {};
  return {
    ...t,
    frameUrls: Object.fromEntries(u.map((h) => [h, t.frameUrls[h]])),
    ...(c && { artifactRefs: e }),
    ...(r && { artifactReadVersions: d }),
    ...(a && { artifactReadObservers: _ })
  };
}
function LUe(t, o) {
  let n;
  if (
    (o.updateAppState((s) => {
      let d = F(s, t);
      return ((n = d === s ? void 0 : d.frameUrls), d);
    }),
    n !== void 0)
  )
    i1(n);
  let {
    shareStatus: u,
    createdFromType: e,
    deferredSurface: c,
    remoteControlSkippedSlugs: r,
    coordinatorEditors: a
  } = Z();
  for (let [s, d] of u.filePathToSlug) if (d === t) Mce(s);
  for (let [s, d] of e) if (d.slug === t) e.delete(s);
  if (
    (c.delete(t),
    r.delete(t),
    ehn(t, "page_gone"),
    a.delete(t),
    $uo(t, o.context),
    Z().liveDocWatch.stop?.(t),
    dEs(t),
    i.CLAUDE_CODE_REMOTE || aIe(t) !== void 0)
  )
    MDn({ slug: t, context: o.context }).catch(l);
}
function glo(t) {
  return `<${Tqe} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`;
}
export { U_r, mlo, IDn, LUe, glo };

//# sourceMappingURL=chunk-twf5mfyf.js.map
