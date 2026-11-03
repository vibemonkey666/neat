// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  b9,
  hVr,
  wj,
  yqo,
  $vt,
  p2t,
  DCe,
  _tr,
  btr,
  Str,
  m2t,
  M_e,
  zei,
  _v,
  E5,
  X2t,
  dEt,
  ua,
  Ep,
  P_n,
  I_n,
  nA,
  Ln,
  Y7,
  Lh,
  N_n,
  $_n,
  Snt,
  WS,
  eKt,
  tKt,
  Eue,
  Et,
  uf,
  M$,
  oKt,
  M0e,
  D0e,
  C5,
  J_n,
  znr,
  Knr,
  k
} from "./chunk-ajtyjx88.js";
import { De } from "./chunk-2qx8pe6s.js";
import { U, Gc, Wr, LI, Ldr, J } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { d, G, ui, _ie } from "./chunk-fs43t96t.js";
import { X, Nt, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Bu, rn } from "./chunk-xc1j8sdj.js";
import {
  Yz,
  Zrt,
  tq,
  dqt,
  lTt,
  Wsr,
  zwn,
  Gsr,
  cqt,
  zqe,
  Lu,
  Kwn,
  hir,
  Jj,
  bse,
  bdi,
  exe,
  Pir,
  MXo,
  b6r,
  kTt,
  j9,
  Iir,
  S6r,
  DXo,
  TTt,
  Tm,
  $Xo,
  jXo,
  WXo,
  Sse,
  Oir,
  VS,
  w6r,
  Iqt,
  VXo,
  ak,
  bot,
  W9,
  mvn,
  n6,
  Mir,
  gvn,
  Sot,
  Dir,
  yvn,
  Cb,
  Eot,
  ZNe,
  z9,
  RTt
} from "./chunk-5rw2zfa0.js";
import { bt, _, te, t } from "./chunk-4kxznmzw.js";
import { E2 } from "./chunk-45h8cn90.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { We } from "./chunk-pgnjjhxv.js";
import { i } from "./chunk-cj37hmns.js";
import { nYe, OM, d9r, xlr, J4t } from "./chunk-4nzy53ma.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Ht } from "./chunk-ddpw2j06.js";
import { B$ } from "./chunk-x8k0r295.js";
import { Ae, of, jwn } from "./chunk-dvghjmtr.js";
import { er } from "./chunk-1e5yp9hx.js";
import { dC, D5r, Zai, Nqe } from "./chunk-7c3thgax.js";
import { Nre, Ejr, kjr, Tjr } from "./chunk-vn4qkmxw.js";
import { lZ } from "./chunk-at88wjsn.js";
import { i6, n7o, r7o } from "./chunk-v19xty83.js";
import { f0 } from "./chunk-cr7a2cdd.js";
import {
  phn,
  Y7n,
  mtt,
  KGt,
  mhn,
  ghn,
  gtt,
  QQs,
  A7,
  hzr,
  yhn,
  yzr,
  X7n,
  _zr,
  bzr,
  Szr,
  J7n,
  Mwt
} from "./chunk-gjpjdnzc.js";
import { m7n } from "./chunk-crvt0hax.js";
import { Dre, Gi } from "./chunk-d5zj5299.js";
import { Iqs, Oqs } from "./chunk-frrn501g.js";
import { Ws } from "./chunk-f451a1hs.js";
import { cut } from "./chunk-jnpc8m74.js";
import { gLt, sY, ai, ys } from "./chunk-j0tbz6ra.js";
import { ozr, o9, zQs, sR, szr } from "./chunk-h2tyaevk.js";
import { n4s, MUr, C$o, Lun, R$o } from "./chunk-1ww4jg8j.js";
import { EY } from "./chunk-w35wpr7b.js";
import { FT } from "./chunk-zg0g4fdz.js";
import { dKe, Jet, MGo, HGo } from "./chunk-t6wy6xxv.js";
import { dut } from "./chunk-draaxner.js";
import { vks } from "./chunk-1t7vm9a1.js";
import { vhn, Hwt } from "./chunk-kpmehc55.js";
import { $Le } from "./chunk-ttxbg7sf.js";
import { o, oe, u, me } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { vt } from "./chunk-dsrz10z8.js";
import { Ds } from "./chunk-tdv74tcm.js";
import { z } from "./chunk-p197ae0z.js";
import { createHash as gt } from "crypto";
import { hostname as $e } from "os";
import { open as ft, readFile as ht, rm as pt, unlink as mt, writeFile as yt } from "fs/promises";
var ct = "tengu_managed_config_prefetch_off";
function a7t() {
  let e = i.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
  if (e !== void 0) return e;
  if (Ae() !== "firstParty" || (!of() && f0() === void 0)) return !1;
  return !k(ct, !1);
}
var Ie = 5000;
class Me {
  updates = new FT();
  owner;
  constructor(e) {
    this.owner = e;
  }
  supersede(e, n, s) {
    let r = this.owner;
    ((this.owner = s), this.updates.enqueue({ settings: e, baseline: n }), r("superseded"));
  }
  settle(e) {
    (this.updates.done(), this.owner(e));
  }
}
class He {
  replRequester = null;
  requesterWaiters = [];
  noConsentSurface = !1;
  stopsWhenApprovalCannotBeAsked = !1;
  standaloneDialogUnanswered = null;
  rootDrawnDialog = null;
  pendingReview = null;
  registerRequester(e) {
    if (((this.replRequester = e), e && this.requesterWaiters.length > 0)) {
      let n = this.requesterWaiters;
      this.requesterWaiters = [];
      for (let s of n) s(e);
    }
  }
  addWaiter(e) {
    this.requesterWaiters.push(e);
  }
  dropWaiter(e) {
    this.requesterWaiters = this.requesterWaiters.filter((n) => n !== e);
  }
  review(e, n, s) {
    return new Promise((r) => {
      if (this.pendingReview) {
        this.pendingReview.supersede(n, s, r);
        return;
      }
      let y = new Me(r);
      ((this.pendingReview = y), a("tengu_managed_settings_security_dialog_shown", {}));
      let S;
      try {
        S = e(n, s, y.updates);
      } catch {
        S = Promise.resolve("deferred_no_consent_surface");
      }
      S.then(
        (E) => this.close(y, E),
        () => this.close(y, "deferred_no_consent_surface")
      );
    });
  }
  close(e, n) {
    if (((this.pendingReview = null), n === "approved"))
      (a("tengu_managed_settings_security_dialog_accepted", {}),
        g("remote_managed_settings_security_check"));
    else if (n === "rejected") a("tengu_managed_settings_security_dialog_rejected", {});
    e.settle(n);
  }
  startupConsentRelease = null;
  fireStartupConsentRelease() {
    let e = this.startupConsentRelease;
    if (e) ((this.startupConsentRelease = null), e());
  }
  consentNeededRelease = null;
  async fireConsentNeededRelease() {
    let e = this.consentNeededRelease;
    if (e) ((this.consentNeededRelease = null), await e());
  }
  consentHandoffHolds = new Set();
  consentHandoffSignal = De();
  consentHandoffRevealActive = !1;
}
var ut = new W(() => new He());
function L() {
  return ut.of(U().host);
}
function xe() {
  return Ws().pendingStandaloneRender !== null;
}
function dNn() {
  return L().standaloneDialogUnanswered;
}
function lt() {
  return L().rootDrawnDialog;
}
function cNn() {
  let e = Ws().pendingStandaloneRender;
  if (e !== null)
    return e.then(
      () => {},
      () => {}
    );
  return lt();
}
function sMt(e) {
  L().registerRequester(e);
}
function Le(e) {
  let n = L();
  return (
    (n.startupConsentRelease = e),
    () => {
      if (n.startupConsentRelease === e) n.startupConsentRelease = null;
    }
  );
}
function Ovr() {
  let e = L(),
    n = Symbol("consent-handoff-hold");
  if ((e.consentHandoffHolds.add(n), e.consentHandoffHolds.size === 1))
    e.consentHandoffSignal.emit();
  return () => {
    if (e.consentHandoffHolds.delete(n) && e.consentHandoffHolds.size === 0)
      e.consentHandoffSignal.emit();
  };
}
function iMt() {
  return L().consentHandoffHolds.size > 0;
}
function lmo() {
  return L().consentHandoffRevealActive;
}
function mks(e) {
  return L().consentHandoffSignal.subscribe(e);
}
function gks(e) {
  let n = L();
  return (
    (n.consentNeededRelease = e),
    () => {
      if (n.consentNeededRelease === e) n.consentNeededRelease = null;
    }
  );
}
function dmo() {
  ((L().noConsentSurface = !0), DXo());
}
function hks() {
  L().stopsWhenApprovalCannotBeAsked = !0;
}
function Ue() {
  return L().noConsentSurface;
}
async function fe() {
  let e = L(),
    n,
    s = new Promise((y) => {
      ((n = y), e.addWaiter(y));
    }),
    r = await Nt(s, Ie, "managed-settings security dialog requester wait timed out").catch(
      () => null
    );
  if (r === null) e.dropWaiter(n);
  return r;
}
async function Fe(e, n) {
  let s = L(),
    r = Ovr();
  try {
    for (;;) {
      if ((await HGo(), s.replRequester)) return await s.review(s.replRequester, e, n);
      if (!Ws().has(process.stdout) || (await fe()) === null) return "deferred_no_consent_surface";
    }
  } finally {
    r();
  }
}
async function Ke(e, n, s) {
  if (!n || !bse(Jj(n))) return "no_check_needed";
  if (!bdi(e, n)) return "no_check_needed";
  let r = L();
  if (!Gc() || (d9r() && i.CLAUDE_CODE_SESSION_KIND === "bg"))
    return r.noConsentSurface ? "deferred_no_consent_surface" : "deferred_non_interactive";
  let y = e.source === "consented_payload" ? e.settings : e.consentedPayload;
  if (r.replRequester)
    if (r.consentNeededRelease) {
      let w = null;
      try {
        ((w = Ovr()), await r.fireConsentNeededRelease());
        let T = r.replRequester;
        if (T) return ((r.consentHandoffRevealActive = !0), await r.review(T, n, y));
        if (Ws().has(process.stdout)) {
          let A = await fe();
          if (A) return ((r.consentHandoffRevealActive = !0), await r.review(A, n, y));
        }
        return "deferred_no_consent_surface";
      } finally {
        ((r.consentHandoffRevealActive = !1), w?.());
      }
    } else if (Jet()) return Fe(n, y);
    else return r.review(r.replRequester, n, y);
  if (r.noConsentSurface) return "deferred_no_consent_surface";
  let S = Ws();
  if (S.has(process.stdout)) {
    r.fireStartupConsentRelease();
    let w;
    do w = await fe();
    while (w === null && (dKe() || MGo() < Ie));
    if (w) return Jet() ? Fe(n, y) : r.review(w, n, y);
    if (Jet()) return "deferred_no_consent_surface";
  }
  if (
    s === void 0 ||
    r.noConsentSurface ||
    (r.stopsWhenApprovalCannotBeAsked && dut.get().kind === "unavailable")
  ) {
    if (!r.noConsentSurface) r.standaloneDialogUnanswered = "not_asked";
    return "deferred_no_consent_surface";
  }
  a("tengu_managed_settings_security_dialog_shown", {});
  let E = S.has(process.stdout),
    R = s(n, E, y);
  if (!E) S.claimForStandaloneRender(R);
  else {
    let w = R.then(
      () => {},
      () => {}
    );
    ((r.rootDrawnDialog = w),
      w.then(() => {
        if (r.rootDrawnDialog === w) r.rootDrawnDialog = null;
      }));
  }
  let v;
  try {
    ((v = await R), (r.standaloneDialogUnanswered = null));
  } catch (w) {
    throw (
      (r.standaloneDialogUnanswered = "closed_unanswered"),
      m("remote_managed_settings_security_check", "dialog_unavailable"),
      w
    );
  }
  if (
    (a(
      v === "approved"
        ? "tengu_managed_settings_security_dialog_accepted"
        : "tengu_managed_settings_security_dialog_rejected",
      {}
    ),
    v === "approved")
  )
    g("remote_managed_settings_security_check");
  return v;
}
var Mvr = "Managed settings were not approved; exiting without applying them.",
  yks =
    "Your organization's managed settings need your approval, which couldn't be asked for here. Run `claude` in a terminal and approve them, then run this command again.",
  cmo = De();
function Ne(e) {
  switch (e) {
    case "rejected":
      if (process.stderr.isTTY && !ys()) {
        lZ();
        let n = Jet() ? cut(U()).trim() : "";
        sY(
          n === ""
            ? Mvr
            : `${Mvr}

Your message was not sent:
${n}`
        );
      }
      if (!ys()) cmo.emit();
      return (ai(1), !1);
    case "deferred_no_consent_surface":
      return !1;
    case "superseded":
      return !1;
    case "approved":
    case "no_check_needed":
    case "deferred_non_interactive":
      return !0;
  }
}
var Be = p(() => u({ uuid: o(), checksum: o(), settings: me(o(), oe()) }));
var St = 1e4,
  _t = 5,
  Rt = 3600000,
  wt = 30000;
class Ge {
  poller = null;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  fetchSettledPromise = null;
  fetchSettledResolve = null;
  signedCacheShadowChecked = !1;
  storedCopyShadow = void 0;
  storedCopyReported = !1;
  storedCopyAtStart = void 0;
  liveAnswer = void 0;
  livePrincipalChecked = !1;
  backstopReleased = !1;
  refreshesHybridToken = !0;
  prefetch = new X7n();
  oauthRefreshLatch = { attempted: !1, recoveries: { begun: 0, running: 0 } };
  createBarrier(e) {
    ((this.fetchSettledPromise = new Promise((n) => {
      ((this.fetchSettledResolve = n), e?.(n));
    })),
      (this.loadingCompletePromise = new Promise((n) => {
        this.loadingCompleteResolve = n;
      })));
  }
  releaseLoadBarrier() {
    (this.loadingCompleteResolve?.(), (this.loadingCompleteResolve = null));
  }
  releaseBarrier() {
    (this.releaseLoadBarrier(), this.fetchSettledResolve?.(), (this.fetchSettledResolve = null));
  }
  detachBarrier() {
    let e = this.loadingCompleteResolve,
      n = this.fetchSettledResolve;
    if (
      ((this.loadingCompleteResolve = null),
      (this.loadingCompletePromise = null),
      (this.fetchSettledResolve = null),
      (this.fetchSettledPromise = null),
      !e && !n)
    )
      return null;
    return () => {
      (e?.(), n?.());
    };
  }
  startPoller(e) {
    this.poller = e;
  }
  stopPoller() {
    (this.poller?.[Symbol.dispose](), (this.poller = null));
  }
}
var kt = new W(() => new Ge());
function M() {
  return kt.of(U().host);
}
function aMt() {
  Ve();
  let e = M();
  if (e.loadingCompletePromise) return;
  if (sR())
    e.createBarrier((n) => {
      setTimeout(
        (s, r) => {
          if (r.fetchSettledResolve === s) {
            if (xe()) {
              t("Remote settings: Loading promise timeout deferred \u2014 consent dialog pending");
              return;
            }
            (t(
              "Remote settings: Loading promise timed out, resolving anyway (load and fetch barriers)"
            ),
              (r.backstopReleased = !0),
              VXo(),
              r.releaseBarrier());
          }
        },
        wt,
        n,
        e
      );
    });
}
function umo() {}
function fmo(e) {
  if (Wr() || !sR() || !1 || ak() || bot() || Mir() !== void 0) return;
  if (Ln()?.refreshToken && uf() === void 0) return;
  let n = yvn(),
    s = n ? tq(n) : void 0,
    r = M(),
    { oauthRefreshLatch: y } = r;
  r.prefetch.set(
    { checksum: s, epoch: j9(), endpoint: le(), principal: qe() },
    async (S) => ve(C5() ? J_n(s, await R$o(n !== null, await Lun())) : s, !1, e, S, y),
    (S) => S.success
  );
}
function Dvr() {
  let e = M();
  (e.prefetch.clear(),
    (e.oauthRefreshLatch = { attempted: !1, recoveries: { begun: 0, running: 0 } }));
}
function qe() {
  if (Wr()) return "gateway";
  let e = Ln(),
    n = uf(),
    s = X2t();
  return et(
    _([
      Et() && szr(),
      e?.accessToken === void 0
        ? null
        : e.refreshToken
          ? [n?.organizationUuid ?? "", n?.accountUuid ?? "", et(e.accessToken)]
          : et(e.accessToken),
      P_n().fingerprint,
      dEt() ? (i6()?.organizationUuid ?? "") : null,
      s === void 0 ? null : et(s)
    ])
  );
}
function Ct() {
  let e = M$({ ownEntrypoint: !0 });
  if (!d9r()) return e;
  let n = `, ${i.CLAUDE_CODE_ENTRYPOINT ?? "cli"}`,
    s = e.indexOf(n);
  return s === -1 ? e : e.slice(0, s + n.length) + `, ${xlr}` + e.slice(s + n.length);
}
function le() {
  let e = Lu() ? null : Wr();
  if (e) return `${e.url}/managed/settings`;
  return `${rn().BASE_API_URL}/api/claude_code/settings`;
}
function he(e) {
  if (!e) return e;
  return ZNe(e, "remote managed settings").settings ?? {};
}
function Je(e, n) {
  let s = b6r(e),
    r = ZNe(s, n),
    y = s,
    S = Object.keys(y);
  if (!r.settings && S.length > 0 && !S.every((E) => r.removed.includes(E)) && !At(y))
    return (
      t(
        `Remote settings: ruled_empty - no key in the payload could be applied as written (${r.errors.length} rulings); nothing of it applies`
      ),
      {
        ruledEmpty: {
          success: !1,
          error: "No setting in the payload could be applied as written",
          errorKind: "ruled_empty",
          rulings: r.errors,
          skipRetry: !0
        }
      }
    );
  if (r.errors.length > 0)
    t(
      `Remote settings: Payload contains ${r.errors.length} invalid entries; applying the salvaged subset`
    );
  return { settings: s, salvagedSettings: Tt(y, r) };
}
function At(e) {
  let n = Object.keys(e);
  return n.length > 0 && n.every((s) => RTt.some((r) => r === s));
}
function Ye(e, n, s) {
  let r = [
    ...RTt.filter((y) => y in n && !(y in e)),
    ...(s.onlySubstitutes ? s.errors.filter((y) => y.onlySubstitutes).map((y) => y.path) : [])
  ].filter((y) => y in n);
  if (r.length === 0) return e;
  return { ...e, ...Object.fromEntries(r.map((y) => [y, n[y]])) };
}
function Ot(e) {
  let n = ZNe(e, "remote managed settings");
  return Ye(n.settings ?? {}, e, n);
}
function Tt(e, n) {
  let s = n.errors.length > 0 ? (n.settings ?? {}) : void 0;
  return s === void 0 ? void 0 : Ye(s, e, n);
}
async function Pt(e) {
  let n = Mir();
  if (n === void 0) return null;
  if (n === "fail")
    return {
      success: !1,
      error: "mocked fetch failure",
      errorKind: "unknown_error",
      skipRetry: !0
    };
  if (n === "empty")
    return { success: !0, settings: {}, checksum: void 0, consentIdentity: await Re(e) };
  try {
    let s = gvn(),
      r = s !== void 0 ? await ht(s, "utf-8") : n,
      y = te(r);
    if (!y || typeof y !== "object" || Array.isArray(y))
      return {
        success: !1,
        error: "mock JSON parse failed",
        errorKind: "parse_error",
        skipRetry: !0
      };
    let S = Je(y, "mock remote settings");
    if ("ruledEmpty" in S) return S.ruledEmpty;
    return { success: !0, ...S, checksum: "mock", consentIdentity: await Re(e) };
  } catch {
    return {
      success: !1,
      error: "mock JSON parse failed",
      errorKind: "parse_error",
      skipRetry: !0
    };
  }
}
function Hvr() {
  return sR();
}
async function KW() {
  if (Lu()) return;
  let e = M();
  if (e.loadingCompletePromise) await e.loadingCompletePromise;
}
function pmo() {
  let e = M(),
    n = e.storedCopyAtStart;
  return {
    storedCopy: n === void 0 || n === "not_read" ? "not_read" : cqt(n, e.storedCopyShadow),
    liveSigned: _zr({ kind: "managed-settings", answer: e.liveAnswer, account: uf() })
  };
}
async function SN() {
  let e = M();
  if (e.fetchSettledPromise) await e.fetchSettledPromise;
}
zei(SN);
EY.wait = SN;
EY.ask = () => st();
EY.fetches = sR;
function lMt() {
  return M().backstopReleased;
}
function Ive() {
  return mvn(sR());
}
function uNn() {
  return !nYe() && sR() && Dir();
}
function Ve() {
  vks(async () => {
    if (uNn()) await SN();
    else if (Ive()) await KW();
  });
}
async function Ft(e, n) {
  if (Lu()) {
    let S = vhn();
    if (S === null || Hwt())
      return {
        headers: {},
        error:
          S === null
            ? "No credential from the host that launched this session"
            : "The settings endpoint was moved after this session was launched",
        authType: "none"
      };
    let E = le();
    return S.kind === "bearer"
      ? {
          headers: { Authorization: `Bearer ${S.token}`, "anthropic-beta": Bu },
          authType: "oauth",
          credentialOrigin: "injected_token",
          url: E
        }
      : { headers: { "x-api-key": S.key }, authType: "api_key", url: E };
  }
  let s = Wr();
  if (s) {
    let S = LI(s) ? await tt(s, e) : void 0;
    return {
      headers: { Authorization: `Bearer ${s.jwt}` },
      authType: "gateway_jwt",
      consentIdentity: Ze(s, S),
      pinnedFingerprint: S
    };
  }
  if (Et() && szr()) {
    let S = Ln();
    if (S?.accessToken)
      return {
        headers: { Authorization: `Bearer ${S.accessToken}`, "anthropic-beta": Bu },
        authType: "oauth",
        accessToken: S.accessToken,
        ...(await _e(e))
      };
  }
  try {
    let { key: S } = nA({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (S) {
      if (b9(S) === null)
        return (
          t("Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host"),
          {
            headers: {},
            error: "Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host",
            authType: "api_key"
          }
        );
      return { headers: { "x-api-key": S }, authType: "api_key" };
    }
  } catch {}
  let r = X2t();
  if (r !== void 0)
    return {
      headers: { Authorization: `Bearer ${r}` },
      authType: "oauth",
      credentialOrigin: "injected_token"
    };
  if (dEt()) {
    if (n7o())
      return (
        t(
          "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart"
        ),
        {
          headers: {},
          error:
            "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart",
          authType: "profile",
          profileError: !0
        }
      );
    try {
      let { getWIFCredentials: S, getWIFTokenCache: E } = await import("./chunk-gvwzsnkk.js"),
        [R, v] = await Promise.all([E(), S()]);
      if (R !== null) {
        if (!ozr(v?.baseURL)) {
          let T = `Remote settings: profile base URL ${v?.baseURL ?? "(unknown)"} is not the settings endpoint's host; not fetching with the profile credential`;
          return (t(T), { headers: {}, error: T, authType: "profile", profileError: !0 });
        }
        let w = await R.getToken();
        return {
          headers: { ...v?.extraHeaders, Authorization: `Bearer ${w}` },
          authType: "profile",
          accessToken: w,
          profileBearer: !0,
          consentIdentity: Xe()
        };
      }
    } catch (S) {
      let E = `Remote settings: profile credential unavailable: ${d(S)}`;
      t(E, { level: "error" });
      let { isWIFTransientExchangeError: R } = await import("./chunk-gvwzsnkk.js");
      return { headers: {}, error: E, authType: "profile", profileError: !0, retryable: R(S) };
    }
  }
  let y = Ln();
  if (y?.accessToken)
    return {
      headers: { Authorization: `Bearer ${y.accessToken}`, "anthropic-beta": Bu },
      authType: "oauth",
      accessToken: y.accessToken,
      ...(await _e(e))
    };
  return { headers: {}, error: "No authentication available", authType: "none" };
}
async function Dt(e) {
  return (await _e(e)).consentIdentity;
}
async function _e(e) {
  let n = uf(),
    s = await Lh(e),
    r = s === "store" ? "stored_login" : s === "env" || s === "fd" ? "injected_token" : void 0;
  if (s !== "store") return { credentialOrigin: r };
  return {
    credentialOrigin: r,
    consentIdentity: n?.organizationUuid
      ? { organizationUuid: n.organizationUuid, accountUuid: n.accountUuid }
      : void 0
  };
}
function Xe() {
  let e = i6(),
    n = uf();
  return e?.organizationUuid &&
    e.accountEmail &&
    n?.organizationUuid === e.organizationUuid &&
    n.emailAddress === e.accountEmail &&
    n.accountUuid
    ? { organizationUuid: e.organizationUuid, accountUuid: n.accountUuid }
    : void 0;
}
var Qe = "gateway:",
  It = 256;
function Ze(e, n) {
  if (!LI(e) || !n || n === yqo) return;
  let s;
  try {
    s = new URL(e.url);
  } catch {
    return;
  }
  if (s.protocol !== "https:") return;
  let r = `${s.origin}${s.pathname === "/" ? "" : s.pathname}`,
    y = m7n(e) ?? "";
  return {
    organizationUuid: `${Qe}${r}#${n}`,
    accountUuid: y.length > It ? `sha256:${gt("sha256").update(y).digest("hex")}` : y
  };
}
async function tt(e, n) {
  return DCe(wj(new URL(e.url)), n);
}
async function Re(e) {
  let n = Wr();
  if (n)
    return Ze(
      n,
      await tt(n, e).catch(() => {
        return;
      })
    );
  if (Ep({ skipRetrievingKeyFromApiKeyHelper: !0 }).key === null && dEt()) return Xe();
  return Dt(e);
}
async function pe(e, n, s, r) {
  if (!e) return;
  let y = e.organizationUuid.startsWith(Qe) ? await Re(r) : uf();
  if (y?.organizationUuid !== e.organizationUuid || y.accountUuid !== e.accountUuid) {
    t(
      "Remote settings: consent identity no longer matches the fetch identity; not recording org consent"
    );
    return;
  }
  await Oqs(e, n, s);
}
function q(e) {
  if (j9() === e) return !1;
  return (
    t("Remote settings: Cache was reset (login/logout) during this fetch; discarding its result"),
    f("remote_managed_settings_pull", "reset_during_fetch"),
    !0
  );
}
function se(e) {
  return e.httpStatus !== void 0 ? `${e.errorKind}/${e.httpStatus}` : e.errorKind;
}
async function Mt(e, n) {
  let s = await Pt(n.credentials);
  if (s) return s;
  let r = null,
    y = (Wr() && !n.background) || n.singleAttempt ? 0 : (n.maxRetries ?? _t),
    S = a7t(),
    E = S && n.startupAwaited === !0 && !n.background && !Wr(),
    R = S ? n.oauthRefreshLatch : void 0,
    v = (A) => ve(e, !1, n.credentials, A, R, n.hybridOrganizationUuid),
    w = n.prefetched,
    T = !1;
  for (let A = 1; A <= y + 1; A++) {
    let D = w ?? yhn(v);
    if (((w = void 0), E && A === 1)) {
      let I = await yzr({
        first: D,
        send: v,
        isAnswer: (C, h) => C.success || (C.skipRetry === !0 && !(h && C.errorKind === "http_401")),
        stillWanted: a7t,
        retryFollows: y > 0
      });
      ((r = I.result), (T ||= I.hedged));
    } else r = await D.attempt;
    if (((r.attempts = A), T)) r.hedged = !0;
    if (r.success) return r;
    if (r.skipRetry) return r;
    if (A > y) return r;
    let P = B$(A);
    (t(
      `Remote settings: Retry ${A}/${y} after ${P}ms (${se({ errorKind: r.errorKind ?? "unknown_error", ...(r.httpStatus !== void 0 && { httpStatus: r.httpStatus }) })})`
    ),
      await X(P));
  }
  return r;
}
var xt = Date.now();
function ze(e) {
  let n = (() => {
      switch (e.errorKind) {
        case "http_401":
        case "http_403":
          return "auth_failed";
        case "timeout":
          return "timeout";
        case "network_error":
          return "network_error";
        case "parse_error":
        case "ruled_empty":
          return "parse_failed";
        case "http_4xx":
        case "http_5xx":
        case "unknown_error":
        case "gateway_cert_mismatch":
        case "gateway_public_address":
        case "gateway_pin_refused":
        case "gateway_pin_unreadable":
          return "request_failed";
        case "no_auth_available":
        case "profile_credential_error":
        case "api_key_not_sent":
        case void 0:
          return;
      }
    })(),
    s = e.errorKind === "http_401" ? 401 : e.errorKind === "http_403" ? 403 : e.httpStatus,
    r =
      e.authType === "oauth"
        ? "oauth"
        : e.authType === "api_key"
          ? "api_key"
          : e.authType === "profile"
            ? "wif"
            : void 0;
  return J7n({
    errorCode: n,
    httpStatus: s,
    serverErrorType: e.serverErrorType,
    serverErrorCode: e.serverErrorCode,
    serverAuthDenial: e.serverAuthDenial,
    tokenRefreshOutcome: e.tokenRefreshOutcome,
    forcedRefreshOutcome: e.forcedRefreshOutcome,
    authType: r,
    credentialOrigin: e.authType === "api_key" ? "static_key" : e.credentialOrigin,
    injectedTokenRecovery: e.credentialOrigin === "injected_token" ? eKt() : void 0,
    noResponse: e.noResponse
  });
}
async function ve(e, n = !1, s, r, y, S = null) {
  let E = y && M0e(y.recoveries),
    R,
    v = !1,
    w = !1,
    T,
    A,
    D = !1,
    P = {},
    I = (C) => (
      t(
        `Remote settings: Fetch attempt failed (${se({ errorKind: C.errorKind ?? "unknown_error", ...(C.httpStatus !== void 0 && { httpStatus: C.httpStatus }) })})`
      ),
      { ...P, ...C }
    );
  try {
    if (((T = S !== null ? "not_needed" : await Eue({ credentials: s })), S === null)) await E5(s);
    let C = await Ft(s, S);
    if (
      ((R = C.accessToken),
      (v = C.profileBearer === !0),
      (w = C.accessToken !== void 0 && C.credentialOrigin === "stored_login"),
      (A = C.consentIdentity),
      (P = {
        authType: C.authType,
        credentialOrigin: C.credentialOrigin,
        tokenRefreshOutcome: C.authType === "oauth" ? T : void 0
      }),
      C.error)
    )
      return I({
        success: !1,
        error: C.profileError ? C.error : "Authentication required for remote settings",
        errorKind: C.profileError
          ? "profile_credential_error"
          : C.authType === "api_key"
            ? "api_key_not_sent"
            : C.retryable
              ? "network_error"
              : "no_auth_available",
        skipRetry: !C.retryable
      });
    let h = C.url ?? le();
    D = C.url !== void 0;
    let Q = {
        ...C.headers,
        "User-Agent": OM() ? Ct() : Ds(),
        "Cache-Control": "no-cache",
        Pragma: "no-cache"
      },
      F = Lu() || S !== null ? void 0 : e;
    if (F) Q["If-None-Match"] = `"${F}"`;
    let Y = Wr()?.hostVerdict,
      Z =
        M_e(C.pinnedFingerprint, h) ??
        (Y && "verified" in Y && Y.verified && !("vouched" in Y) ? btr(h, Y.network) : void 0),
      H = {
        headers: Q,
        timeout: St,
        ...(Lu() && { proxy: !1 }),
        ...(D && { maxRedirects: 0, adapter: "http" }),
        validateStatus: (B) => B === 200 || B === 204 || B === 304 || B === 404,
        signal: r
      },
      O = await Ht.get(h, { ...H, ...(Z && { httpsAgent: Z }) });
    if ((hVr(O.headers?.["x-cc-gateway-version"]), O.status === 304)) {
      if (!F)
        return (
          t("Remote settings: 304 to an unconditional request"),
          {
            success: !1,
            error: "Unexpected 304 Not Modified",
            errorKind: "unknown_error",
            httpStatus: 304,
            skipRetry: !0,
            ...P,
            ...KGt(O.headers)
          }
        );
      return (
        t("Remote settings: Using cached settings (304)"),
        {
          success: !0,
          settings: null,
          checksum: e,
          signature: dqt(O.headers),
          consentIdentity: A,
          ...P,
          responseKind: "not_modified",
          ...KGt(O.headers)
        }
      );
    }
    if (O.status === 204 || O.status === 404) {
      if (C5() && P.authType !== "gateway_jwt" && !mtt(O.headers))
        return (
          t(
            `Remote settings: ${O.status} without Anthropic's request id \u2014 an intermediary's answer, keeping cached settings`
          ),
          {
            success: !1,
            error: `${O.status} from an intermediary (no Anthropic request id)`,
            errorKind: "http_4xx",
            httpStatus: O.status,
            skipRetry: !0,
            ...P,
            ...KGt(O.headers)
          }
        );
      return (
        t(`Remote settings: No settings found (${O.status})`),
        {
          success: !0,
          settings: {},
          checksum: void 0,
          signature: dqt(O.headers),
          consentIdentity: A,
          ...P,
          responseKind: "none_configured",
          ...KGt(O.headers)
        }
      );
    }
    Tjr(O.data);
    let N = Be().safeParse(O.data);
    if (!N.success)
      return (
        t(`Remote settings: Invalid response format - ${N.error.message}`),
        {
          success: !1,
          error: "Invalid remote settings format",
          errorKind: "parse_error",
          skipRetry: !0,
          ...P,
          ...KGt(O.headers)
        }
      );
    let ee = Je(Lu() ? Kwn(N.data.settings) : N.data.settings, "remote managed settings");
    if ("ruledEmpty" in ee) return { ...ee.ruledEmpty, ...P };
    if (y && N.data.checksum) D0e(y, E);
    return (
      t("Remote settings: Fetched successfully"),
      {
        success: !0,
        ...ee,
        checksum: N.data.checksum,
        isAnsweredEmpty: Object.keys(N.data.settings).length === 0,
        signature: Lu() ? void 0 : dqt(O.headers),
        consentIdentity: A,
        ...P
      }
    );
  } catch (C) {
    let h = d(C?.cause);
    if (d(C).includes($vt))
      return I({
        success: !1,
        error: "Cloud gateway TLS pin is in a symlinked credentials file",
        errorKind: "gateway_pin_refused",
        skipRetry: !0
      });
    if (d(C).includes(p2t))
      return I({
        success: !1,
        error: "Cloud gateway TLS pin could not be read from the credentials file",
        errorKind: "gateway_pin_unreadable"
      });
    if (d(C).includes(Str) || h.includes(Str)) {
      let H = m2t(C);
      return I({
        success: !1,
        error: "Cloud gateway TLS certificate does not match stored pin",
        errorKind: "gateway_cert_mismatch",
        ...(H && { gatewayPinMismatch: H }),
        skipRetry: !0
      });
    }
    if (d(C).includes(_tr) || h.includes(_tr))
      return I({
        success: !1,
        error: "Cloud gateway connection outside the network it was checked on",
        errorKind: "gateway_public_address",
        skipRetry: !0
      });
    let { kind: Q, status: F, message: Y } = ui(C);
    if (F === 404 && S === null) {
      if (
        C5() &&
        P.authType !== "gateway_jwt" &&
        !mtt(Ht.isAxiosError(C) ? C.response?.headers : void 0)
      )
        return I({
          success: !1,
          error: "404 from an intermediary (no Anthropic request id)",
          errorKind: "http_4xx",
          httpStatus: 404,
          skipRetry: !0,
          ...mhn(C)
        });
      return {
        success: !0,
        settings: {},
        checksum: "",
        consentIdentity: A,
        ...P,
        responseKind: "none_configured",
        ...mhn(C)
      };
    }
    let Z = { ...ghn(C), ...mhn(C) };
    switch (Q) {
      case "auth": {
        let H = {
          success: !1,
          error: "Not authorized for remote settings",
          errorKind: F === 401 ? "http_401" : "http_403",
          skipRetry: !0,
          ...Z
        };
        if (r?.aborted) return I(H);
        let O;
        if (F === 401 && R && !n && !y?.attempted) {
          let N = R,
            B = await oKt(y, async () => {
              if (v) {
                if (y) y.attempted = !0;
                let { getWIFTokenCache: K, invalidateWIFToken: x } =
                  await import("./chunk-gvwzsnkk.js");
                return (
                  await x(N),
                  K()
                    .then((ge) => ge?.getToken())
                    .catch(() => {
                      return;
                    })
                );
              }
              return (
                (O = { outcome: void 0 }),
                await WS(N, s, void 0, {
                  onForcedRefreshOutcome: (K) => {
                    if (((O = { outcome: K }), (H.forcedRefreshOutcome = K), y))
                      ((y.attempted = !0), (y.lastOutcome = K));
                  }
                }),
                Ln()?.accessToken
              );
            });
          if (B && B !== R) {
            (I(H), a("tengu_remote_settings_401_force_refresh_retry", {}));
            let K = await ve(e, !0, s, r, y);
            return {
              ...K,
              retriedAfter401: !0,
              forcedRefreshOutcome: K.forcedRefreshOutcome ?? H.forcedRefreshOutcome
            };
          }
        }
        if (F === 401 && w && tKt(T, O)) H.skipRetry = !1;
        if (F === 401 && v && n) r7o(!0);
        if (F === 401 && H.forcedRefreshOutcome === void 0 && y?.attempted)
          H.forcedRefreshOutcome = y.lastOutcome;
        return I(H);
      }
      case "timeout":
        return I({
          success: !1,
          error: "Remote settings request timeout",
          errorKind: "timeout",
          errno: Mwt(C)
        });
      case "network":
        return I({
          success: !1,
          error: "Cannot connect to server",
          errorKind: "network_error",
          errno: Mwt(C)
        });
      default:
        return I({
          success: !1,
          error: Y,
          errorKind:
            F !== void 0 && F >= 500
              ? "http_5xx"
              : F !== void 0 && F >= 400
                ? "http_4xx"
                : "unknown_error",
          ...(F !== void 0 && F >= 300 && { httpStatus: F }),
          ...(Q === "http" && F === void 0 && { noResponse: !0, errno: Mwt(C) }),
          ...Z,
          ...((_ie(F) || (D && F !== void 0 && F >= 300 && F < 400)) && { skipRetry: !0 })
        });
    }
  }
}
var we = Symbol("keep the stored statement"),
  ae = Symbol("the server sent the body now");
async function je(e, n, s, r, y) {
  if (W9()) return;
  let S = _(Zrt() ? kTt(e) : e, null, 2),
    E = MXo(e);
  if (z() && n !== void 0 && !ak()) {
    let R = await n.write(We.state("remote-settings"), S, {
      publishDiscipline: "inPlace",
      mode: 384,
      flush: !0
    });
    if (!R.ok) {
      t(`Remote settings: Failed to save - ${vt(R.error)}`);
      return;
    }
    if ((t("Remote settings: Saved via storage backend"), Sot("cache", S), s !== we))
      await lTt(n6(), s);
    if ((await MUr(y === ae ? void 0 : y), E !== void 0)) {
      let v = await n.write(We.state(exe), E, { publishDiscipline: "inPlace", mode: 384 });
      if (
        (t(
          v.ok
            ? "Remote settings: Saved helper consent via storage backend"
            : `Remote settings: Failed to save helper consent - ${vt(v.error)}`
        ),
        v.ok)
      )
        Sot("helperConsent", E);
    }
    return;
  }
  if (J()) {
    dC("remote_settings", "remote-settings.json");
    return;
  }
  try {
    let R = n6(),
      v = await ft(R, "w", 384);
    try {
      (await v.writeFile(S, { encoding: "utf-8" }), await v.datasync());
    } finally {
      await v.close();
    }
    t(`Remote settings: Saved to ${R}`);
  } catch (R) {
    t(`Remote settings: Failed to save - ${R instanceof Error ? R.message : "unknown error"}`);
    return;
  }
  if (z() && !ak()) Sot("cache", S);
  if (s !== we) await lTt(n6(), s);
  if ((await MUr(y === ae ? void 0 : y), E === void 0)) return;
  try {
    if ((await yt(Pir(), E, { mode: 384 }), z() && !ak())) Sot("helperConsent", E);
  } catch (R) {
    t(`Remote settings: Failed to save helper consent - ${d(R)}`);
  }
}
async function l7t(e) {
  if ((mNn(), o9(), er(), Dvr(), M().detachBarrier()?.(), Dre(e))) return;
  if (Lu()) return;
  let n =
    z() && e !== void 0
      ? await e.delete(We.state(exe)).then((s) => (s.ok ? void 0 : vt(s.error)))
      : await pt(Pir(), { force: !0 }).then(() => {
          return;
        }, d);
  if (n !== void 0) {
    t(`Remote settings: Failed to remove helper consent - ${n}`);
    return;
  }
  if (z() && !ak()) Sot("helperConsent", null);
  if (ak()) return;
  if ((await zwn(n6()), await C$o(), z() && e !== void 0)) {
    if ((await e.delete(We.state("remote-settings"))).ok) Sot("cache", null);
    return;
  }
  try {
    let s = n6();
    await mt(s);
  } catch (s) {
    if (z() && !G(s)) return;
  }
  if (z()) Sot("cache", null);
}
var Ce;
async function be(e = {}) {
  try {
    return await Lt(e);
  } finally {
    let n = () => z9().settings;
    (Zai(n), D5r(n));
  }
}
async function Lt(e) {
  if (!sR())
    return (M().prefetch.clear(), { settings: null, fetchSucceeded: !0, resolution: "ineligible" });
  let n = null,
    s = ak();
  if (s || bot())
    return (
      M().prefetch.clear(),
      t(
        s
          ? `Remote settings: Using override file ${s} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch`
          : "Remote settings: confined evaluation child \u2014 serving the harness-written policy snapshot, no fetch"
      ),
      { settings: Cb(), fetchSucceeded: !0, resolution: "local" }
    );
  if (n === null) zQs();
  let r = yvn(),
    y = Tm(),
    S = jXo(),
    E = WXo(),
    R = r ? tq(r) : void 0,
    v = j9(),
    w = M();
  if (!w.signedCacheShadowChecked) {
    if (
      ((w.signedCacheShadowChecked = !0),
      (w.storedCopyAtStart =
        W9() || Lu() || n !== null
          ? "not_read"
          : { enforced: Yz(), gateAnswer: S, hadCopy: r !== null }),
      r && !Lu() && n === null)
    )
      bzr({
        kind: "managed-settings",
        cachePath: n6(),
        bodySha: Zrt() ? tq(kTt(r)) : tq(r),
        readStoredAccount: uf,
        gateEnforced: S !== "not_asked",
        readOrgPin: $Le,
        onJudged: (A) => {
          w.storedCopyShadow = A;
        }
      });
  }
  if (!e.background && w.prefetch.pending) {
    let A = await Lh(e.credentials);
    if (A !== "store") Y7();
    if ($_n(A)) await Snt(U().host, e.credentials);
  }
  let T = e.background
    ? void 0
    : w.prefetch.take(
        (A) => A.checksum === R && A.epoch === v && A.endpoint === le() && A.principal === qe()
      );
  try {
    let A = Date.now(),
      D = n === null ? await Lun(A) : void 0,
      P = C5() && n === null ? await R$o(r !== null, D, A) : void 0,
      I = C5() ? J_n(R, P) : R,
      C = Date.now(),
      h = await Mt(I, {
        ...e,
        prefetched: T,
        oauthRefreshLatch: e.background ? void 0 : w.oauthRefreshLatch,
        hybridOrganizationUuid: n
      }),
      Q = Date.now() - C;
    if (e.cycleFacts) ((e.cycleFacts.hadCache = r !== null), (e.cycleFacts.fetchMs = Q));
    let F = C + Q;
    if (h.success && h.responseKind !== "not_modified") n4s(F);
    let Y = h.authType === "oauth",
      Z = h.success ? void 0 : ze(h),
      H = znr(
        h.success
          ? { succeeded: !0, responseKind: h.responseKind ?? "body" }
          : {
              succeeded: !1,
              failure:
                h.errorKind === "no_auth_available" || h.errorKind === "api_key_not_sent"
                  ? "no_credentials"
                  : h.errorKind === "profile_credential_error"
                    ? "credential_exchange"
                    : h.errorKind === "timeout"
                      ? "timeout"
                      : h.errorKind === "network_error" ||
                          h.errorKind === "gateway_public_address" ||
                          h.noResponse
                        ? "network"
                        : h.errorKind === "gateway_cert_mismatch" ||
                            h.errorKind === "gateway_pin_refused" ||
                            h.errorKind === "gateway_pin_unreadable"
                          ? "tls"
                          : h.errorKind === "parse_error" || h.errorKind === "ruled_empty"
                            ? "parse"
                            : h.httpStatus !== void 0 ||
                                h.errorKind === "http_401" ||
                                h.errorKind === "http_403"
                              ? "http"
                              : "other",
              httpStatus:
                h.httpStatus ??
                (h.errorKind === "http_401" ? 401 : h.errorKind === "http_403" ? 403 : void 0),
              serverErrorType: h.serverErrorType,
              serverErrorCode: h.serverErrorCode,
              serverAuthDenial: h.serverAuthDenial,
              credentialState: Z,
              tokenRefreshOutcome: h.tokenRefreshOutcome,
              forcedRefreshOutcome: h.forcedRefreshOutcome,
              errno: h.errno,
              responseContentType: h.responseContentType,
              requestIdPresent: h.requestIdPresent,
              exchangeFinal:
                h.errorKind === "profile_credential_error" ? h.skipRetry === !0 : void 0
            }
      );
    if (e.cycleFacts) e.cycleFacts.outcomeReason = H;
    let O = Yz(),
      N = W9()
        ? "not_read"
        : cqt({ enforced: O, gateAnswer: S, hadCopy: r !== null }, w.storedCopyShadow),
      ee = h.success ? h.settings : void 0;
    w.liveAnswer = h.success
      ? {
          jws: h.signature,
          bodySha: () => {
            if (ee !== null && ee !== void 0) return tq(kTt(ee));
            return r !== null && Zrt() ? tq(kTt(r)) : (h.checksum ?? "");
          }
        }
      : void 0;
    let B = !w.storedCopyReported && n === null;
    w.storedCopyReported = !0;
    let K = O ? E : zqe(w.storedCopyShadow);
    if (h.success && h.signature !== void 0 && K !== void 0 && !w.livePrincipalChecked)
      ((w.livePrincipalChecked = !0),
        Szr({
          kind: "managed-settings",
          jws: h.signature,
          trustedPrincipal: K,
          gate: O ? "enforced" : "shadow"
        }));
    if (
      (a("tengu_remote_settings_fetch", {
        duration_ms: Q,
        ms_since_startup: F - xt,
        success: h.success,
        error_kind: ce(h.errorKind),
        http_status: h.httpStatus,
        attempts: h.attempts,
        had_cache: r !== null,
        cache_age_ms: r !== null ? D : void 0,
        stored_copy: B ? c(N) : void 0,
        stored_copy_gate: B ? c(O ? "enforced" : "shadow") : void 0,
        is_load: !e.background,
        awaited: e.startupAwaited === !0,
        auth_type: ce(h.authType),
        token_source: c(ua().source),
        credential_road: c(phn()),
        credential_origin: ce(h.credentialOrigin),
        api_key_prefix: h.authType === "api_key" ? c(I_n()) : void 0,
        has_custom_base_url: jwn(),
        token_refresh_outcome: Y ? ce(h.tokenRefreshOutcome) : void 0,
        forced_refresh_outcome: Y ? ce(h.forcedRefreshOutcome) : void 0,
        retried_after_401: h.retriedAfter401 ?? !1,
        server_error_type: ce(h.serverErrorType),
        server_error_code: ce(h.serverErrorCode),
        server_auth_denial: ce(h.serverAuthDenial),
        injected_token_recovery: ce(
          !h.success && h.credentialOrigin === "injected_token" ? eKt() : void 0
        ),
        credential_state: ce(Z),
        error_errno: ce(h.errno),
        outcome_reason: c(H),
        response_kind: ce(h.success ? (h.responseKind ?? "body") : void 0),
        request_id_present: h.requestIdPresent,
        response_content_type: ce(h.responseContentType),
        prefetched: T !== void 0,
        hedged: h.hedged === !0
      }),
      h.success && h.responseKind === "none_configured")
    )
      Ejr();
    if (q(v)) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
    if (!h.success && h.errorKind === "ruled_empty") {
      if (r) TTt(r);
      if (r !== null && Object.keys(r).length > 0)
        (f("remote_managed_settings_pull", "ruled_empty_kept_previous"),
          t(
            "Remote settings: ruled_empty_kept_previous - the previously accepted settings stay in force"
          ));
      else
        (m("remote_managed_settings_pull", "ruled_empty_nothing_kept"),
          t(
            "Remote settings: ruled_empty_nothing_kept - no previously accepted settings to keep; nothing applied"
          ));
      return {
        settings: r,
        fetchSucceeded: !1,
        failure: {
          errorKind: "ruled_empty",
          message: h.error ?? "ruled empty",
          rulings: h.rulings ?? []
        },
        resolution: "ruled_empty"
      };
    }
    if (!h.success) {
      m("remote_managed_settings_pull", h.errorKind ?? "remote_managed_settings_fetch_failed");
      let j = {
        errorKind: h.errorKind ?? "unknown_error",
        message: h.error ?? "Unknown error",
        ...(h.httpStatus !== void 0 && { httpStatus: h.httpStatus }),
        ...(h.noResponse === !0 && { noResponse: !0 }),
        ...(gtt(h) !== void 0 && {
          serverErrorType: gtt(h),
          ...(h.serverErrorCode !== void 0 && { serverErrorCode: h.serverErrorCode }),
          ...(h.serverAuthDenial !== void 0 && { serverAuthDenial: h.serverAuthDenial })
        }),
        ...((h.errorKind === "http_401" || h.errorKind === "http_403") && {
          credentialState: ze(
            h.serverErrorStamped === !0 || !C5()
              ? h
              : {
                  ...h,
                  serverErrorType: void 0,
                  serverErrorCode: void 0,
                  serverAuthDenial: h.errorKind === "http_401" ? h.serverAuthDenial : void 0
                }
          )
        }),
        ...(h.gatewayPinMismatch && { gatewayPinMismatch: h.gatewayPinMismatch })
      };
      if (r)
        return (
          t(`Remote settings: Using stale cache after fetch failure (${se(j)})`),
          TTt(r),
          { settings: r, fetchSucceeded: !1, failure: j, resolution: "failed" }
        );
      return (
        t(`Remote settings: Fetch failed (${se(j)}) and no cached settings`),
        { settings: null, fetchSucceeded: !1, failure: j, resolution: "failed" }
      );
    }
    if (h.settings === null && r && r === Iir()) {
      if (
        (t("Remote settings: Cache still valid (304 Not Modified)"),
        TTt(r, { verified: !0 }),
        !W9())
      ) {
        await Wsr(n6(), h.signature);
        let j = q(v);
        if (await Gsr(n6(), j)) await C$o();
        else if (!C5()) await MUr();
        if (j) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
      }
      if (!y) {
        if ((await ye(), q(v))) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
        if (r === Iir()) {
          if ((await pe(h.consentIdentity, he(r), e.storageV5, e.credentials), q(v)))
            return { settings: null, fetchSucceeded: !1, resolution: "reset" };
        }
      }
      return (
        g("remote_managed_settings_pull", { status: b("not_modified") }),
        { settings: r, fetchSucceeded: !0, resolution: "applied" }
      );
    }
    let x = h.settings ?? r ?? {};
    if (Object.keys(x).length > 0) {
      let j = h.consentIdentity ? await Iqs(h.consentIdentity, e.storageV5) : null,
        Ee = he(Iir()),
        dt =
          j !== null
            ? { source: "org_record", dangerousSettingsHash: j, consentedPayload: Ee }
            : { source: "consented_payload", settings: Ee },
        Oe = he(x),
        ne = await Ke(dt, Oe, e.showSecurityDialog);
      if (q(v)) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
      if (!Ne(ne)) {
        if (ne === "superseded")
          return (
            t(
              "Remote settings: A newer fetch took over the pending consent review; leaving the decision to it"
            ),
            { settings: r, fetchSucceeded: !0, resolution: "consent_superseded" }
          );
        if (ne === "deferred_no_consent_surface") {
          let re = Ue();
          if (re)
            (t(
              "Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline"
            ),
              f("remote_managed_settings_pull", "consent_deferred_no_surface"));
          else
            (t(
              "Remote settings: No consent surface in this interactive session; keeping the consented baseline"
            ),
              m("remote_managed_settings_pull", "remote_managed_settings_no_consent_surface"));
          return {
            settings: r,
            fetchSucceeded: !1,
            resolution: re ? "deferred" : "no_consent_surface"
          };
        }
        return (
          t("Remote settings: User rejected new settings, using cached settings"),
          { settings: r, fetchSucceeded: !0, resolution: "rejected" }
        );
      }
      if ((TTt(x, { verified: !0, consentDeferred: ne === "deferred_non_interactive" }), !y)) {
        if ((await ye(), q(v))) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
      }
      switch (ne) {
        case "approved":
        case "no_check_needed":
          if ((S6r(x), await pe(h.consentIdentity, Oe, e.storageV5, e.credentials), q(v)))
            return { settings: null, fetchSucceeded: !1, resolution: "reset" };
          let re = Zrt() && h.settings !== null && h.signature !== void 0,
            Te = Zrt() && h.settings === null;
          (await je(
            re || Te ? x : (h.salvagedSettings ?? (h.settings === null ? Ot(x) : x)),
            e.storageV5,
            re || (h.salvagedSettings === void 0 && h.settings !== null)
              ? h.signature
              : Te
                ? (h.signature ?? we)
                : void 0,
            n,
            h.settings !== null || !C5() ? ae : P === void 0 ? 0 : A - P
          ),
            t("Remote settings: Applied new settings successfully"),
            g("remote_managed_settings_pull", { status: b("updated") }));
          break;
        case "deferred_non_interactive":
          (t(
            "Remote settings: Applied for this non-interactive run; consent deferred \u2014 not persisting the disk cache as consented"
          ),
            g("remote_managed_settings_pull", { status: b("applied_consent_deferred") }));
          break;
        case "rejected":
        case "deferred_no_consent_surface":
        case "superseded":
          break;
      }
      return { settings: x, fetchSucceeded: !0, resolution: "applied" };
    }
    if (h.isAnsweredEmpty === !0 && !q(v)) kjr();
    if ((TTt(x, { verified: !0 }), !y)) {
      if ((await ye(), q(v))) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
    }
    if ((S6r(x), await pe(h.consentIdentity, x, e.storageV5, e.credentials), q(v)))
      return { settings: null, fetchSucceeded: !1, resolution: "reset" };
    return (
      await je(h.settings ?? {}, e.storageV5, h.signature, n, ae),
      t("Remote settings: Saved empty sentinel (404 response)"),
      g("remote_managed_settings_pull", { status: b("no_content") }),
      { settings: x, fetchSucceeded: !0, resolution: "none" }
    );
  } catch {
    if (q(v)) return { settings: null, fetchSucceeded: !1, resolution: "reset" };
    m("remote_managed_settings_pull", "remote_managed_settings_unexpected");
    let A = {
      errorKind: "unknown_error",
      message: "Unexpected error while applying remote settings"
    };
    if (r)
      return (
        t("Remote settings: Using stale cache after error"),
        TTt(r),
        { settings: r, fetchSucceeded: !1, failure: A, resolution: "failed" }
      );
    return { settings: null, fetchSucceeded: !1, failure: A, resolution: "failed" };
  }
}
function de(e) {
  if (!sR()) {
    let s = Sse();
    if (s) Oir({ state: "ineligible", reason: s });
    return;
  }
  let n = nt() !== void 0;
  if (e.fetchSucceeded) {
    if (
      (Oir({ state: "ok", hasSettings: e.settings !== null && Object.keys(e.settings).length > 0 }),
      n)
    )
      er();
    return;
  }
  if (e.failure) {
    let r = e.settings !== null && Object.keys(e.settings).length > 0;
    if (
      (Oir(
        r
          ? { state: "stale_cache", failure: e.failure, transportEnvWithheld: !Tm() }
          : {
              state: "failed",
              failure: e.failure,
              ...(r && Nqe().settings !== null && { restrictionsOnly: !0 })
            }
      ),
      n || e.failure.rulings !== void 0)
    )
      er();
  }
}
function nt() {
  let e = VS();
  return e?.state === "failed" || e?.state === "stale_cache" ? e.failure.rulings : void 0;
}
async function r8e(e, n, s) {
  (Iqt(), Ve(), QQs(Ut));
  let r = M(),
    y = sR();
  if (Lu())
    try {
      if (
        (a("tengu_cowork_cloud_launch_credential", { credential_road: c(phn()), asks: y }), hir())
      )
        f("cowork_cloud_launch", "name_on_wsl_kernel", { container_launch: J4t() });
    } catch (D) {
      l(D);
    }
  if (y && !r.loadingCompletePromise) r.createBarrier();
  let S = r.fetchSettledResolve,
    E = j9(),
    R = Cb() !== null;
  if (R && r.loadingCompleteResolve) r.releaseLoadBarrier();
  let v = s?.startupAwaited === !0;
  if (R && !v) A7("settings", { source: "cache", hadCache: R, awaited: v });
  let w = {},
    T = "error",
    A = v ? hzr("settings") : null;
  try {
    let D = await be({ ...s, showSecurityDialog: e, storageV5: n, cycleFacts: w }),
      { settings: P, fetchSucceeded: I } = D;
    if (((T = rt(D)), j9() === E)) de(D);
    if (j9() === E && sR() && !ak() && !bot()) at(e, n, s?.credentials);
    if (P !== null) ue();
    return I;
  } finally {
    if ((ot(S), j9() === E)) w6r();
    if (w.outcomeReason !== void 0) Ce = w.outcomeReason;
    (A7("settings", { source: T, hadCache: R, awaited: v, fetchMs: w.fetchMs }), A?.("completed"));
  }
}
function Ut() {
  let e = Sse(),
    n = sR() ? Ce : Knr(N_n(e));
  return { settings_outcome_reason: ce(n), settings_ineligible_reason: ce(e) };
}
function rt({ resolution: e, settings: n }) {
  switch (e) {
    case "applied":
      return n !== null && Object.keys(n).length > 0 ? "fetch" : "none";
    case "none":
      return "none";
    case "local":
      return "cache";
    case "failed":
    case "ruled_empty":
    case "no_consent_surface":
      return "error";
    case "reset":
    case "consent_superseded":
      return "superseded";
    case "rejected":
      return "rejected";
    case "deferred":
      return "deferred";
    case "ineligible":
      return "ineligible";
  }
}
function ot(e) {
  let n = M();
  if (n.fetchSettledResolve && n.fetchSettledResolve === e) n.releaseBarrier();
}
async function yBe(e, n, s, r) {
  return (await fNn(e, n, s, r)).fetchSucceeded;
}
var Kt = 5000;
async function mmo(e, n, s) {
  let r,
    y = new Promise((R) => {
      r = Le(() => R("consent_pending"));
    }),
    S = hzr("settings", { supersede: !0 }),
    E = fNn(e, n, s, { startupAwaited: !0, callerRecordsBarrier: !0 }).then(
      ({ fetchSucceeded: R }) => (R ? "refreshed" : "failed"),
      (R) => (l(R), "failed")
    );
  try {
    let R = await Pe(Promise.race([E, y]), Kt);
    if ((S(R === void 0 ? "timed_out" : "completed"), R === void 0))
      return (f("remote_managed_settings_startup_await", "deadline_expired"), "timed_out");
    return R;
  } finally {
    (r?.(), S("completed"));
  }
}
async function fNn(e, n, s, r) {
  let y = r?.startupAwaited === !0;
  (mNn(), o9(), Iqt());
  let S = j9(),
    E = M(),
    R = E.detachBarrier();
  if (!sR())
    return (
      E.prefetch.clear(),
      R?.(),
      de({ settings: null, fetchSucceeded: !0, resolution: "ineligible" }),
      A7("settings", { source: "ineligible", hadCache: !1, awaited: y }),
      ue(),
      D5r(() => z9().settings),
      { fetchSucceeded: !0 }
    );
  aMt();
  let v = E.fetchSettledResolve;
  if (R)
    if (E.fetchSettledPromise) E.fetchSettledPromise.then(R);
    else R();
  let w,
    T,
    A = {},
    D = "error",
    P = y && !r?.callerRecordsBarrier ? hzr("settings", { supersede: !0 }) : null;
  try {
    ((T = await be({
      showSecurityDialog: e,
      storageV5: n,
      credentials: s,
      startupAwaited: y,
      cycleFacts: A
    })),
      (D = rt(T)),
      (w = { fetchSucceeded: T.fetchSucceeded, ...(T.failure && { failure: T.failure }) }));
  } finally {
    if ((ot(v), j9() === S)) w6r();
    if (A.outcomeReason !== void 0) Ce = A.outcomeReason;
    (A7("settings", { source: D, hadCache: A.hadCache === !0, awaited: y, fetchMs: A.fetchMs }),
      P?.("completed"));
  }
  if ((t("Remote settings: Refreshed after auth change"), j9() !== S))
    return (t("Remote settings: Refresh superseded by a login/logout reset; not notifying"), w);
  if ((de(T), !ak())) at(e, n, s);
  return (ue(), w);
}
function ue() {
  try {
    ($Xo(), Gi.notifyChange("policySettings"));
  } catch (e) {
    l(e);
  }
}
async function ye() {
  if (J()) return;
  try {
    let [
      { applyConfigEnvironmentVariables: e, applySafeConfigEnvironmentVariables: n },
      { checkHasTrustDialogAccepted: s },
      { captureAdmin3PSteeringSnapshot: r }
    ] = await Promise.all([
      import("./chunk-dkgpe20k.js"),
      import("./chunk-ng9bf6hw.js"),
      import("./chunk-fp5amc0z.js")
    ]);
    if (s()) e();
    else {
      n();
      let [
        { clearProxyCache: y, configureGlobalAgents: S },
        { clearCACertsCache: E, loadExtraCACerts: R },
        { clearMTLSCache: v, loadMTLSClientMaterial: w }
      ] = await Promise.all([
        import("./chunk-pzqns6vt.js"),
        import("./chunk-fxewwx3v.js"),
        import("./chunk-svpk2wbs.js")
      ]);
      (y(), E(), v(), await Promise.all([R(), w()]), S());
    }
    r();
  } catch (e) {
    l(e);
  }
}
function pNn(e) {
  let [n] = Eot(e?.slice(0, 1) ?? []);
  if (!n || !e) return "";
  let s = e.length - 1;
  return ` (${n.path}: ${n.message}${s > 0 ? `, and ${s} more` : ""})`;
}
function ke(e) {
  let { origin: n, pathname: s } = new URL(e);
  return `${n}${s.replace(/\/$/, "")}`;
}
function ie(e) {
  return `Claude Desktop runs Claude Code under your organization's policy from the gateway at ${ke(e)}, but`;
}
function gmo(e) {
  let n = Wr(),
    s = n?.hostVerdict;
  if (!n || !s) return;
  if ("unresolvedReason" in s)
    return `${ie(n.url)} it could not be checked. ${s.unresolvedReason} If this keeps happening, contact your administrator.`;
  if (s.verified) return;
  let r = s.reason ?? "it is not Anthropic-operated or inside your organization's network.";
  if (e)
    return `Your organization requires managed settings, but the gateway at ${ke(n.url)} is not an accepted source for them: ${r} Contact your administrator.`;
  if (s.codeTabRulesUnanswered !== void 0)
    return `${ie(n.url)} Claude Code couldn't ask that gateway whether it has rules for this session (${s.codeTabRulesUnanswered}). Send your message again. This check runs because Claude Code on ${$e()} doesn't take settings from that gateway: ${r}`;
  if (s.hasCodeTabRules)
    return `${ie(n.url)} Claude Code on ${$e()} doesn't take settings from that gateway: ${r}`;
  if (s.hasCodeTabRules === !1) {
    t(
      `[gateway] ${ke(n.url)} is not accepted as a source of managed settings. It says that it has no Code tab rules for this person, so no warning is shown`
    );
    return;
  }
  it(`the gateway at ${n.url} is not an accepted source for them: ${r.replace(/\.\s*$/, "")}`);
  return;
}
function Lvr(e) {
  let n = Wr();
  if (!n || !Ldr(n)) return;
  let s = ie(n.url),
    r = VS(),
    y = r?.state === "failed" || r?.state === "stale_cache" ? r.failure : void 0;
  if (y?.errorKind === "gateway_public_address")
    return `${s} this machine is no longer reaching it from inside your organization's network (it may have left that network or VPN, or the gateway's name now resolves elsewhere), so the policy was not fetched. Reconnect to that network and start again, or contact your administrator.`;
  if (y?.errorKind === "ruled_empty")
    return `${s} none of the settings it served could be applied as written${pNn(y.rulings)}. Ask your administrator to fix them.`;
  if (!e || y) {
    let S = y ? `: ${gLt(y.errorKind, y.httpStatus)}` : "";
    return `${s} the policy could not be loaded from it${S}. Check your network connection, or contact your administrator.`;
  }
  Nvr();
  return;
}
function Nvr() {
  let e = Wr();
  if (!e || !Ldr(e)) return;
  let n = VS();
  if (n?.state === "ok" && !n.hasSettings)
    it(
      `the gateway at ${e.url} has no Claude Code policy for this Desktop session (self-hosted gateway admins: set \`serve_to_desktop: true\` on this user's policy, or change \`cli\` to \`code\` in every policy)`
    );
}
function it(e) {
  let n = `Starting without your organization's managed settings: ${e}.`;
  (t(`Remote settings: ${n}`, { level: "warn" }),
    E2(`${n}
`));
}
var Se =
  "Your organization requires remote managed settings to load, but they could not be loaded.";
async function d7t(e, n) {
  try {
    if (await e()) {
      let S = n();
      return S === void 0 ? { valid: !0 } : { valid: !1, message: `${Se} ${S}` };
    }
  } catch (S) {
    l(S);
  }
  let s = nt();
  if (s !== void 0)
    return {
      valid: !1,
      message: `${Se} None of the settings the server returned could be applied as written${pNn(s)}; ask your administrator to fix them.`
    };
  let r = "claude auth login",
    y = _v()
      ? "You can check your network connection or contact your admin."
      : `Run \`${r}\` to re-authenticate, check your network connection, or contact your administrator.`;
  return { valid: !1, message: `${Se} ${y}` };
}
async function st(e, n, s) {
  if (!sR()) return;
  M().refreshesHybridToken = !0;
  let r = Cb(),
    y = r ? _(r) : null,
    S = Tm(),
    E = Nre.get() === "served",
    R = j9();
  try {
    let v = await be({ background: !0, showSecurityDialog: e, storageV5: n, credentials: s });
    if (j9() !== R) {
      t("Remote settings: Background poll superseded by a login/logout reset; not notifying");
      return;
    }
    if (v.fetchSucceeded || v.failure?.errorKind === "ruled_empty") de(v);
    let w = Cb(),
      A = (w ? _(w) : null) !== y,
      D = !S && Tm(),
      P = Lu() && !E && Nre.get() === "served";
    if (A || D || P)
      (t(
        A
          ? "Remote settings: Changed during background poll"
          : "Remote settings: Confirmed by a background poll"
      ),
        ue());
  } catch {}
}
function at(e, n, s) {
  let r = M();
  if (r.poller !== null) return;
  if (!sR()) return;
  let S = Y7n(() => void st(e, n, s), Rt, { unref: !0 });
  (r.startPoller(S), bt(S));
}
function mNn() {
  M().stopPoller();
}
export {
  a7t,
  dNn,
  cNn,
  sMt,
  Ovr,
  iMt,
  lmo,
  mks,
  gks,
  dmo,
  hks,
  Mvr,
  yks,
  cmo,
  aMt,
  umo,
  fmo,
  Dvr,
  Hvr,
  KW,
  pmo,
  SN,
  lMt,
  Ive,
  uNn,
  l7t,
  r8e,
  yBe,
  mmo,
  fNn,
  pNn,
  gmo,
  Lvr,
  Nvr,
  d7t,
  mNn
};

//# sourceMappingURL=chunk-5hjs1kac.js.map
