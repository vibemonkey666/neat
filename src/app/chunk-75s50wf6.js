// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, TYe, FM, lie, bee, gFe } from "./chunk-wrtp8qz8.js";
import { d, E, J_ } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import {
  xei,
  Uvt,
  gb,
  lni,
  XU,
  Kni,
  K7,
  D4o,
  Y7,
  JU,
  abn,
  Ut,
  lI,
  Re,
  L$,
  FKt
} from "./chunk-ajtyjx88.js";
import { g } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Sr, Ae } from "./chunk-dvghjmtr.js";
import { Sl, dwn, pai, CNe, Kn } from "./chunk-x8k0r295.js";
import { FYs, _U } from "./chunk-bbw420pv.js";
import { FU } from "./chunk-w89b9cst.js";
import { ICr, IP } from "./chunk-j0tbz6ra.js";
import { D1s } from "./chunk-6h7ejyet.js";
import { Ore } from "./chunk-d5zj5299.js";
import { iwt, Ti } from "./chunk-0v8111n2.js";
import { hQs, yQs } from "./chunk-p27rr8yn.js";
import { sFr } from "./chunk-xt7fs806.js";
import { Pce } from "./chunk-crvt0hax.js";
import { GVn, QFs, ZFs } from "./chunk-f7aya6cs.js";
import { g2o } from "./chunk-gjpjdnzc.js";
import { nQs } from "./chunk-6dwr3g2n.js";
import { Lks } from "./chunk-x520c54y.js";
import { pte, Pve } from "./chunk-prmhfqsf.js";
import { gxs } from "./chunk-2mvh88ym.js";
import { cks } from "./chunk-zertz1mj.js";
import { s1 } from "./chunk-dx5awfq0.js";
import { l7t } from "./chunk-5hjs1kac.js";
import { oK } from "./chunk-j559gbrr.js";
import { oMt } from "./chunk-bjpnz5xv.js";
import { z } from "./chunk-p197ae0z.js";
var v = null;
function C(o) {
  return (
    (o.oauthAccount = void 0),
    (o.additionalModelOptionsCache = void 0),
    (o.additionalModelOptionsAnsweredAt = void 0),
    (o.additionalModelCostsCache = void 0),
    (o.modelAccessCache = void 0),
    (o.orgModelDefaultCache = void 0),
    (o.cachedArtifactRoster = void 0),
    (o.artifactRosterDenied = void 0),
    (o.lastSeenOrgDefaultUpdatedAt = void 0),
    (o.clientDataCache = void 0),
    (o.clientDataCacheSlots = void 0),
    (o.autoCompactWindowsCache = void 0),
    (o.cachedUsageUtilization = void 0),
    (o.metricsStatusCache = void 0),
    (o.metricsStatusCacheByPrincipal = void 0),
    (o.githubWebConnectionStatusCache = void 0),
    (o.unusedLimitResetStatusCache = void 0),
    (o.startupPrefetchedAt = void 0),
    o
  );
}
async function amo(o) {
  (await Re((s) => C({ ...s }), o), TYe(void 0));
}
async function NIe({
  clearOnboarding: o = !1,
  preserveInProcessTokens: s = !1,
  preserveNonAnthropicAuth: u = !1,
  storageV5: n,
  preserveQuotaAutoResume: p = !1,
  artifactAccount: a = "signed_out",
  incomingIdentity: M,
  credentials: f
}) {
  let { flushTelemetry: w } = await import("./chunk-87yn4n4k.js");
  if ((await w(), await yQs(a), Ut())) {
    await i7t(n, { preserveQuotaAutoResume: p, artifactAccount: a, incomingIdentity: M });
    return;
  }
  if (!s && Ae() === "firstParty") {
    let r = Kn();
    r.invalidateCache?.();
    let e = await r.readAsync(f),
      c = e?.claudeAiOauth;
    if (c?.refreshToken) await gb(c.refreshToken, c.clientId);
    let m = e?.designOauth;
    if (m?.refreshToken) await gb(m.refreshToken, m.clientId);
    let S = e?.cloudSessionsOauth;
    if (S?.refreshToken) await gb(S.refreshToken, S.clientId);
  }
  if (Ae() === "gateway") {
    let r = Date.now() + 5000;
    for (let m = gFe(); m && Date.now() < r; m = gFe())
      await Pe(
        m.catch(() => {}),
        r - Date.now()
      );
    let e = Kn();
    e.invalidateCache?.();
    let c = (await e.readAsync(f))?.enterpriseGateway;
    if (c) await Kni(c, f);
  }
  if (!s) (i.unset("CLAUDE_CODE_OAUTH_TOKEN"), FM(null));
  (await D4o(n),
    await cks({
      revoke: !s && Ae() === "firstParty" ? ({ refreshToken: r, clientId: e }) => gb(r, e) : void 0
    }),
    abn());
  let h = Kn(),
    O;
  if (u) {
    if (Ae() === "firstParty") {
      h.invalidateCache?.();
      let r = (await h.readAsync(f))?.designOauth;
      if (r?.refreshToken) await gb(r.refreshToken, r.clientId);
    }
    await h
      .mutate((r) => {
        let e = { ...r };
        return (
          delete e.claudeAiOauth,
          delete e.organizationUuid,
          delete e.trustedDeviceToken,
          delete e.trustedDeviceEnrolledAfterRefusalAtMs,
          delete e.enterpriseGateway,
          delete e.designOauth,
          delete e.cloudSessionsOauth,
          e
        );
      }, f)
      .catch((r) => {
        let e = E(r);
        if (e === "EPERM" || e === "ENOENT" || J_(r)) {
          t(`[performLogout] re-login secure-storage prune failed (${e}): ${d(r)}`, {
            level: "error"
          });
          return;
        }
        l(r);
      });
  } else {
    let r = !1,
      e = async () => {
        r = !0;
        let m = (await k(h, f))?.coworkRemoteDevice;
        if ((await h.delete(f), m && Object.keys(m).length > 0)) await P(h, m, f);
      };
    await dwn(e).catch((c) => {
      if (r) throw c;
      return (l(c), pai(e));
    });
  }
  (lie(null),
    bee(null),
    await i7t(n, {
      preserveQuotaAutoResume: p,
      artifactAccount: a,
      incomingIdentity: M,
      credentials: f
    }),
    await Re((r) => {
      let e = { ...r };
      if (o) {
        if (
          ((e.hasCompletedOnboarding = !1),
          (e.subscriptionNoticeCount = 0),
          (e.hasAvailableSubscription = !1),
          e.customApiKeyResponses !== void 0)
        )
          e.customApiKeyResponses = { approved: [], rejected: L$(e).rejected };
        let c = oMt;
        if (e.seenNotifications?.[c] !== void 0) {
          let { [c]: m, ...S } = e.seenNotifications;
          e.seenNotifications = S;
        }
      }
      return (C(e), e);
    }, n),
    await A(),
    TYe(void 0),
    g("oauth_logout"));
}
async function A() {}
async function i7t(
  o,
  {
    preserveQuotaAutoResume: s = !1,
    artifactAccount: u = "signed_out",
    incomingIdentity: n,
    credentials: p
  } = {}
) {
  if ((Y7(), z() && p === void 0)) CNe();
  (FU(),
    FKt(),
    Sr().providerCache.clientDataFetches.clear(),
    XU(),
    Sr().providerCache.modelConfigs.clear(),
    Sr().providerCache.validatedModels.clear(),
    lni(),
    xei(),
    K7(),
    Uvt(null),
    iwt(Ti().gzipRequestBody.blockStore),
    Ore());
  let a = U();
  if (
    (D1s(a.host),
    v?.forgetClaudeCodeKeyHeard(),
    v?.recordServerAccountMemoryWord(void 0),
    gxs(a.host),
    hQs(u, n),
    u !== "same_account")
  ) {
    if ((nQs(a), !(Ut() && u === "signed_out"))) (ICr("account_change"), sFr("account_change"));
  }
  if (
    (oK.of(a.host).clear(),
    JU(),
    IP(a, "account_change"),
    lI(),
    Pve.cache?.clear?.(),
    pte.cache?.clear?.(),
    await l7t(o),
    await g2o(),
    Lks(),
    QFs(),
    ZFs(),
    !s)
  )
    (s1("account_switch"), _U("account_switch"), FYs());
  GVn();
}
async function eAi({ exit: o, setError: s, setInfo: u, storageV5: n, credentials: p }) {
  (u("Signing out\u2026"), Pce({ action: "logout", success: !0, authMethod: "oauth" }));
  try {
    (await NIe({ clearOnboarding: !0, storageV5: n, credentials: p }), o());
  } catch (a) {
    (l(a), s(`Couldn't sign out \u2014 ${a instanceof Error ? a.message : String(a)}`));
  }
}
async function P(o, s, u) {
  let n;
  for (let p = 0; p < 2; p++)
    try {
      let a = await o.mutate(() => ({ coworkRemoteDevice: s }), u);
      if (a.success) return;
      if (
        ((n = Error(
          "logout: the device identity could not be written back after the credential wipe"
        )),
        !a.transient)
      )
        break;
    } catch (a) {
      n = a;
    }
  l(n);
}
async function k(o, s) {
  for (let u = 0; u < 2; u++) {
    let n = await (o.readAsyncStrict?.(s) ?? o.readAsync(s));
    if (n !== Sl) return n;
  }
  l(
    Error(
      "logout: secure storage could not be read, so the device identity is not carried across the wipe"
    )
  );
  return;
}
export { amo, NIe, i7t, eAi };

//# sourceMappingURL=chunk-75s50wf6.js.map
