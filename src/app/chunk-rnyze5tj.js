import {
  fileURLToPath as __sourceFilePath_ea1f056ca984040d,
  URL as __sourceFilePath_ea1f056ca984040d_URL
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
import { wn, Wr, bee, FSe, $rs, J, zSe } from "./chunk-wrtp8qz8.js";
import { Pp } from "./chunk-fs43t96t.js";
import { i } from "./chunk-cj37hmns.js";
import { Bu, rn } from "./chunk-xc1j8sdj.js";
import { IR, lee, t } from "./chunk-4kxznmzw.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { kH, B9o, Sr, Ae, Bwn } from "./chunk-dvghjmtr.js";
import { Lu } from "./chunk-5rw2zfa0.js";
import { Uu, cX } from "./chunk-4nzy53ma.js";
import {
  b9,
  EVr,
  Iti,
  _Ve,
  st,
  eqr,
  _b,
  Sm,
  XU,
  E5,
  K7,
  kc,
  Hw,
  Ln,
  Et,
  kf,
  Ent,
  Sv,
  XYo,
  W4r,
  G4r,
  Boi,
  HKt,
  joi,
  Re,
  ue,
  _5o,
  FKt,
  S5o,
  w5o,
  v5o,
  k5o
} from "./chunk-ajtyjx88.js";
import { ljt } from "./chunk-bbw420pv.js";
import { JXs } from "./chunk-cn4azb2f.js";
import { dGr } from "./chunk-hshhqqgx.js";
import { PKe, vCe } from "./chunk-3k9fdhf3.js";
import { fPs } from "./chunk-c7qyd6px.js";
import { Hwt } from "./chunk-kpmehc55.js";
import { ge, bn, Go, pc, lr, Tt, uh } from "./chunk-522pfw8k.js";
import { $n } from "./chunk-ya7n419k.js";
import { et } from "./chunk-c9re0p40.js";
import { Ds } from "./chunk-tdv74tcm.js";
var nt = p(() =>
  Tt({
    client_data: uh(pc()).nullish(),
    additional_model_options: lr(
      Tt({ model: ge(), name: ge(), description: ge(), disabled_reason: ge().nullish() }).transform(
        ({ model: e, name: o, description: n, disabled_reason: h }) => {
          let s = kH($n(e)),
            u = s ? Sm(e) : null,
            _ = n;
          if (s && u && h == null) {
            let y = n ? (n.startsWith(u) ? n : `${u} \xB7 ${n}`) : u,
              d = Iti(e);
            _ = d && !Et() && !y.includes("per Mtok") ? `${y} \xB7 ${d}` : y;
          }
          return {
            value: e,
            label: h != null ? `${o} (disabled)` : o,
            description: h ? (_ ? `${_} \xB7 ${h}` : h) : _,
            ...(h != null && { disabled: !0 })
          };
        }
      )
    ).nullish(),
    additional_model_costs: uh(
      Tt({
        input_tokens: bn(),
        output_tokens: bn(),
        prompt_cache_write_tokens: bn(),
        prompt_cache_write_1h_tokens: bn().nullish(),
        prompt_cache_read_tokens: bn(),
        web_search_requests: bn().nullish()
      }).transform((e) => ({
        inputTokens: e.input_tokens,
        outputTokens: e.output_tokens,
        promptCacheWriteTokens: e.prompt_cache_write_tokens,
        ...(e.prompt_cache_write_1h_tokens != null && {
          promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens
        }),
        promptCacheReadTokens: e.prompt_cache_read_tokens,
        webSearchRequests: e.web_search_requests ?? 0.01
      }))
    ).nullish(),
    model_access: lr(
      Tt({ api_name: ge(), entitled: Go(), max_effort_level: ge().nullish() }).transform(
        ({ api_name: e, entitled: o, max_effort_level: n }) => ({
          apiName: e,
          entitled: o,
          ...(n != null && { maxEffortLevel: n })
        })
      )
    ).nullish(),
    org_model_default: Tt({
      name: ge(),
      updated_at: ge(),
      data_source: ge(),
      override_user_selection: Go(),
      default_effort_level: ge().nullish(),
      override_user_effort: Go().nullish()
    }).nullish(),
    oauth_account: Tt({
      account_uuid: ge().nullish(),
      account_email: ge().nullish(),
      organization_uuid: ge().nullish(),
      organization_name: ge().nullish(),
      organization_type: ge().nullish(),
      organization_rate_limit_tier: ge().nullish(),
      user_rate_limit_tier: ge().nullish(),
      seat_tier: ge().nullish()
    })
      .passthrough()
      .nullish(),
    auto_compact_windows: uh(ge(), pc()).nullish(),
    narrowed: Go().nullish()
  })
);
function I(e = st()) {
  return {
    entrypoint: (Sr().fetchesClientData && cX() ? zSe() : void 0) ?? Uu(),
    model: $n(e),
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __sourceFilePath_ea1f056ca984040d(
        new __sourceFilePath_ea1f056ca984040d_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    organizationUuid: ue().oauthAccount?.organizationUuid ?? null
  };
}
function rt(e) {
  let o = $n(e),
    n = st();
  if (o === $n(n)) return !0;
  let h = eqr({ permissionMode: "plan", mainLoopModel: n }).model;
  if (o === $n(h)) return !0;
  return [n, h].some((s) => {
    let u = JXs(s);
    return u !== void 0 && o === $n(u);
  });
}
function at() {
  _5o((e) => {
    try {
      return G4r(I(e !== void 0 && rt(e) ? void 0 : e));
    } catch (o) {
      return (l(o), W4r);
    }
  });
}
at();
function T() {
  return Bwn();
}
function vCr() {
  try {
    (S5o(() => {
      try {
        return T();
      } catch (e) {
        return (l(e), !0);
      }
    }),
      w5o(() => {
        try {
          return T();
        } catch (e) {
          return (l(e), !1);
        }
      }),
      v5o((e, o) => {
        try {
          return fPs(e, o);
        } catch (n) {
          return (l(n), e);
        }
      }),
      k5o(() => {
        try {
          if (!T()) return null;
          let e = I();
          return { entrypoint: e.entrypoint ?? null, model: e.model, org: e.organizationUuid };
        } catch (e) {
          return (l(e), null);
        }
      }));
  } catch (e) {
    l(e);
  }
}
function it(e) {
  return {
    params: { entrypoint: e.entrypoint, model: e.model },
    userAgent: `claude-code/${e.ccVersion}`
  };
}
function X(e, o) {
  if (!e || !o) return e;
  if (o.account_uuid != null && o.account_uuid !== e.accountUuid) return e;
  let n = {
    organizationType: o.organization_type ?? null,
    organizationRateLimitTier: o.organization_rate_limit_tier ?? null,
    userRateLimitTier: o.user_rate_limit_tier ?? null,
    seatTier: o.seat_tier ?? null
  };
  if (o.account_email != null) n.emailAddress = o.account_email;
  if (o.organization_uuid != null) n.organizationUuid = o.organization_uuid;
  if (o.organization_name != null) n.organizationName = o.organization_name;
  return { ...e, ...n };
}
function lt(e) {
  if (!e?.account_uuid) return;
  bee({
    accountUuid: e.account_uuid,
    emailAddress: J() ? void 0 : (e.account_email ?? void 0),
    organizationUuid: e.organization_uuid ?? void 0
  });
}
function z(e) {
  let o = e.oauth_account;
  return e.narrowed !== !0 && o?.account_uuid && o.organization_type
    ? EVr.get(o.organization_type)
    : void 0;
}
function ut(e, o, n) {
  if (!n) dGr(o, z(e));
  if (o !== null && o !== Ent()) return;
  let h = e.oauth_account,
    s = z(e);
  $rs(
    o === null
      ? null
      : {
          bearerSha256: o,
          answeredAtMs: Date.now(),
          named:
            h?.organization_uuid && s !== void 0
              ? { organizationUuid: h.organization_uuid, subscriptionType: s }
              : null
        }
  );
}
async function dt(e, o) {
  if (Ae() === "gateway") {
    if (!i.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY)
      return (
        t(
          "[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)"
        ),
        {
          response: { additional_model_options: [] },
          viaScopelessOAuth: !1,
          oauthBearerSha256: null,
          wasEndpointMovedAtSend: !1
        }
      );
    let c = await pt(o);
    return (
      c && {
        response: c,
        viaScopelessOAuth: !1,
        oauthBearerSha256: null,
        wasEndpointMovedAtSend: !1
      }
    );
  }
  if (_t()) return (t("[Bootstrap] Skipped: Nonessential traffic disabled"), null);
  if (Ae() !== "firstParty") return (t("[Bootstrap] Skipped: 3P provider"), null);
  let { params: n, userAgent: h } = it(e),
    s = async (c, r) => {
      t("[Bootstrap] Fetching");
      let A = await Ht.get(`${c}/api/claude_cli/bootstrap`, {
          headers: { "Content-Type": "application/json", "User-Agent": h, ...ljt(), ...r },
          params: n,
          timeout: 5000,
          ...(Lu() && { proxy: !1, maxRedirects: 0, adapter: "http" })
        }),
        C = nt().safeParse(A.data);
      if (!C.success)
        return (
          t(`[Bootstrap] Response failed validation: ${C.error.message}`),
          f("api_bootstrap_fetch", "parse_failed"),
          null
        );
      return (t("[Bootstrap] Fetch ok"), C.data);
    },
    u = Hw();
  if (!u && kc())
    try {
      let [c, r] = await Promise.all([vCe(), PKe()]);
      if (c !== null) {
        let A = await s(i.ANTHROPIC_BASE_URL || r?.baseURL || rn().BASE_API_URL, {
          ...r?.extraHeaders,
          Authorization: `Bearer ${await c.getToken()}`,
          "anthropic-beta": Bu
        });
        return (
          A && {
            response: A,
            viaScopelessOAuth: !1,
            oauthBearerSha256: null,
            wasEndpointMovedAtSend: !1
          }
        );
      }
    } catch (c) {
      return (
        t(
          `[Bootstrap] WIF fetch failed: ${Ht.isAxiosError(c) ? (c.response?.status ?? c.code) : c instanceof Error ? c.constructor.name : "unknown"}`
        ),
        f("api_bootstrap_fetch", "wif_unavailable"),
        null
      );
    }
  let _ = b9(u);
  if (!Ln()?.accessToken && !_)
    return (t("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null);
  if (i.ANTHROPIC_UNIX_SOCKET)
    return (
      t("[Bootstrap] Skipped: unix-socket-proxied session"),
      f("api_bootstrap_fetch", "unix_socket_skip"),
      null
    );
  let d = !1,
    S = null,
    b = !1;
  try {
    let c = await Sv(
      async () => {
        let r = Ln()?.accessToken,
          A = kf(),
          C;
        if (r && (A || !_))
          ((d = !A && !_),
            (S = et(r)),
            (C = { Authorization: `Bearer ${r}`, "anthropic-beta": Bu }));
        else if (_) ((d = !1), (S = null), (C = { "x-api-key": _ }));
        else return (t("[Bootstrap] No auth available on retry, aborting"), null);
        return ((b = Lu() && Hwt()), s(rn().BASE_API_URL, C));
      },
      { gateToSessionOAuthCredential: J(), credentials: o }
    );
    return (
      c && { response: c, viaScopelessOAuth: d, oauthBearerSha256: S, wasEndpointMovedAtSend: b }
    );
  } catch (c) {
    let r = Ht.isAxiosError(c) ? c.response?.status : void 0;
    if (d && r === 403)
      return (
        t("[Bootstrap] Skipped: 403 for OAuth token without profile scope"),
        f("api_bootstrap_fetch", "no_profile_scope_403"),
        null
      );
    throw (
      t(
        `[Bootstrap] Fetch failed: ${Ht.isAxiosError(c) ? (c.response?.status ?? c.code) : "unknown"}`
      ),
      m("api_bootstrap_fetch", "request_failed"),
      c
    );
  }
}
function avo() {
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  return Boolean(b9(Hw())) || (Boolean(Ln()?.accessToken) && kf());
}
async function qme(e, o) {
  await $hi(e, o);
}
async function $hi(e, o, { keepRenderCaches: n = !1, renderedClientData: h } = {}) {
  vCr();
  try {
    let s = Ae() === "firstParty";
    if (!s) (XU(), K7());
    let u = I(),
      _ = FSe(),
      y = await dt(u, o);
    if (!y) return !1;
    let { response: d, viaScopelessOAuth: S, oauthBearerSha256: b, wasEndpointMovedAtSend: c } = y;
    if (_ !== FSe())
      return (
        t("[Bootstrap] Discarding response fetched under a superseded credential"),
        f("api_bootstrap_fetch", "superseded_credential"),
        !1
      );
    g("api_bootstrap_fetch", Lu() ? { bearer_plan_named: z(d) !== void 0 } : void 0);
    let r = ue(),
      A = d.narrowed ?? S,
      C = A && d.additional_model_options == null,
      P = A && d.additional_model_costs == null,
      k = A && d.model_access == null,
      U = A && d.org_model_default == null,
      F = A && d.auto_compact_windows == null,
      O = d.client_data ?? null,
      D = C ? (r.additionalModelOptionsCache ?? []) : (d.additional_model_options ?? []),
      L = P ? (r.additionalModelCostsCache ?? {}) : (d.additional_model_costs ?? {}),
      x = k ? (r.modelAccessCache ?? []) : (d.model_access ?? []),
      N = F ? (r.autoCompactWindowsCache ?? null) : (d.auto_compact_windows ?? null);
    lt(d.oauth_account);
    let Q = FSe();
    ut(d, b, c);
    let E = X(r.oauthAccount, d.oauth_account),
      G = d.org_model_default
        ? { ...d.org_model_default, ...(E?.organizationUuid && { orgUuid: E.organizationUuid }) }
        : U
          ? (r.orgModelDefaultCache ?? null)
          : null,
      M = G4r({ ...u, organizationUuid: E?.organizationUuid ?? u.organizationUuid }),
      H = r.clientDataCacheSlots?.[M],
      B = HKt(H) ? H : void 0,
      W = B !== void 0,
      Z = wn(E, r.oauthAccount),
      j = s && B !== void 0 && Date.now() - B.at > Boi,
      K = s && (B === void 0 || !wn(B.data ?? null, O)),
      v = s && (h !== void 0 ? !wn(h, O) : K);
    a("tengu_client_data_cache_key", {
      slot_hit: W,
      slot_changed: v,
      legacy_fallback: !W && r.clientDataCache != null,
      slot_stale: j
    });
    let Y = s,
      q = typeof r.additionalModelOptionsAnsweredAt === "number",
      tt =
        C ||
        (Y
          ? Array.isArray(r.additionalModelOptionsCache) &&
            q &&
            wn(r.additionalModelOptionsCache, D)
          : !q && wn(r.additionalModelOptionsCache ?? [], D));
    if (
      !K &&
      !v &&
      !j &&
      tt &&
      wn(r.additionalModelCostsCache ?? {}, L) &&
      wn(r.modelAccessCache ?? [], x) &&
      wn(r.orgModelDefaultCache ?? null, G) &&
      (!s || wn(r.autoCompactWindowsCache ?? null, N)) &&
      Z
    ) {
      if ((t("[Bootstrap] Cache unchanged, skipping write"), FKt(M), !k)) B9o();
      return !0;
    }
    t("[Bootstrap] Cache updated, persisting to disk");
    let V = !1;
    if (
      (await Re((w) => {
        if (Q !== FSe()) return ((V = !0), w);
        let R = X(w.oauthAccount, d.oauth_account),
          ot = G4r({ ...u, organizationUuid: R?.organizationUuid ?? null });
        return {
          ...w,
          clientDataCacheSlots: s
            ? joi(w.clientDataCacheSlots, ot, {
                data: O,
                at: Date.now(),
                entrypoint: u.entrypoint ?? null,
                model: u.model,
                org: R?.organizationUuid ?? null
              })
            : w.clientDataCacheSlots,
          ...(C
            ? {}
            : {
                additionalModelOptionsCache: D,
                additionalModelOptionsAnsweredAt: Y ? Date.now() : void 0
              }),
          ...(P ? {} : { additionalModelCostsCache: L }),
          ...(k ? {} : { modelAccessCache: x }),
          ...(U ? {} : { orgModelDefaultCache: G }),
          autoCompactWindowsCache: s && !F ? N : (w.autoCompactWindowsCache ?? null),
          oauthAccount: R
        };
      }, e),
      FKt(M),
      V)
    )
      return !1;
    if (!k) B9o();
    if (v && !n) (XU(), K7());
    return !0;
  } catch (s) {
    if (Pp(s)) t(`[Bootstrap] fetchBootstrapData failed: ${s}`, { level: "error" });
    else l(s);
    return !1;
  } finally {
    XYo();
  }
}
var ct = p(() =>
  Tt({ data: lr(Tt({ id: ge(), display_name: ge().nullish(), description: ge().nullish() })) })
);
async function pt(e) {
  await E5(e);
  let o = Wr();
  if (!o) return null;
  try {
    let n = await Ht.get(`${o.url}/v1/models`, {
        headers: {
          Authorization: `Bearer ${o.jwt}`,
          "anthropic-version": "2023-06-01",
          "User-Agent": Ds()
        },
        params: { limit: 1000 },
        timeout: 5000
      }),
      h = ct().safeParse(n.data);
    if (!h.success)
      return (t(`[Bootstrap] Gateway /v1/models failed validation: ${h.error.message}`), null);
    let s = h.data.data
      .filter((u) => /(claude|anthropic)/i.test(u.id))
      .filter((u) => {
        let _ = kH(u.id);
        return _ === null || _Ve(_b(_.firstParty));
      })
      .map((u) => ({
        value: u.id,
        label: IR(u.display_name ?? "") || IR(u.id),
        description: lee(u.description ?? "")
      }));
    return (
      t(`[Bootstrap] Gateway /v1/models \u2192 ${s.length} custom options`),
      { additional_model_options: s }
    );
  } catch (n) {
    return (
      t(
        `[Bootstrap] Gateway /v1/models fetch failed: ${Ht.isAxiosError(n) ? (n.response?.status ?? n.code) : "unknown"}`
      ),
      null
    );
  }
}
export { vCr, avo, qme, $hi };

//# sourceMappingURL=chunk-rnyze5tj.js.map
