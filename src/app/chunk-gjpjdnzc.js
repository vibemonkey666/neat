// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { F, L, U, es, S6, EX, Jf, $Yt, cm } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { R, N, d, E, G, ui, _ie } from "./chunk-fs43t96t.js";
import { X, Nt, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { bt, _, ie, t } from "./chunk-4kxznmzw.js";
import { Bu, rn } from "./chunk-xc1j8sdj.js";
import { We } from "./chunk-pgnjjhxv.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { a, Zs } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Ae, of, jwn } from "./chunk-dvghjmtr.js";
import {
  z9o,
  Yz,
  vli,
  lqt,
  tq,
  K9o,
  eot,
  dqt,
  V9o,
  lTt,
  Wsr,
  zwn,
  Gsr,
  Pli,
  Ili,
  Oli,
  dTt,
  cqt,
  zqe,
  q9o,
  WNe,
  Lu
} from "./chunk-5rw2zfa0.js";
import { Ht } from "./chunk-ddpw2j06.js";
import { gq, Cm, K_ } from "./chunk-7zgz07kc.js";
import {
  y2t,
  _2t,
  sti,
  TVr,
  pd,
  Y2t,
  kc,
  U_,
  ua,
  I_n,
  nA,
  x4o,
  Ng,
  Ln,
  Y7,
  dR,
  Lh,
  N_n,
  $_n,
  Snt,
  eKt,
  il,
  tKt,
  Eue,
  Et,
  uf,
  kj,
  M0e,
  D0e,
  Sv,
  C5,
  J_n,
  znr,
  Knr,
  k
} from "./chunk-ajtyjx88.js";
import { aai, Ks, lai } from "./chunk-znkwh1rm.js";
import { B$ } from "./chunk-x8k0r295.js";
import { Qk } from "./chunk-jwqtbev0.js";
import { DRe } from "./chunk-r1dvrqha.js";
import { f_e } from "./chunk-160x3d5g.js";
import {
  Lwt,
  Ezr,
  EKe,
  h7s,
  y7s,
  Z7n,
  eZn,
  p_e,
  $ce,
  Ehn,
  kzr,
  tZn,
  wtt,
  S2o,
  b7s,
  Tzr,
  Azr,
  S7s,
  Rzr,
  xzr,
  Pzr,
  khn,
  v2o,
  E2o,
  nZn,
  Izr,
  VGt,
  k2o,
  qGt,
  T2o,
  Ozr,
  Fce,
  A2o,
  yCe,
  rZn,
  oZn,
  u0,
  Thn,
  vtt,
  sZn,
  iZn,
  xx,
  f0,
  R2o,
  x2o,
  Dzr,
  Mh,
  wV,
  XGt,
  Hzr,
  l9,
  P2o,
  Lzr,
  I2o,
  Nzr,
  JGt,
  aZn,
  O2o,
  lZn,
  M2o,
  dZn,
  Fzr,
  ktt,
  H2o,
  L2o,
  QGt,
  cZn,
  Chn,
  Ttt,
  Uzr,
  B2o,
  K2o,
  Pw
} from "./chunk-cr7a2cdd.js";
import { _2o } from "./chunk-88c2sbvj.js";
import { c7s } from "./chunk-kpmehc55.js";
import { $Le } from "./chunk-ttxbg7sf.js";
import { N9 } from "./chunk-tmsmfr3r.js";
import { iT } from "./chunk-ffrqb2c4.js";
import { Zes, vt } from "./chunk-dsrz10z8.js";
import { Ds } from "./chunk-tdv74tcm.js";
import { z } from "./chunk-p197ae0z.js";
class mt {
  run = null;
}
var ti = new W(() => new mt());
function yt() {
  return ti.of(U().host);
}
async function r2o() {
  await yt().run?.();
}
function gt(e) {
  let r = yt();
  return (
    (r.run = e),
    () => {
      if (r.run === e) r.run = null;
    }
  );
}
import { statSync as Ei } from "fs";
import { unlink as Ri, writeFile as Pi } from "fs/promises";
function phn() {
  if (Lu()) return c7s();
  if (i.CLAUDE_CODE_OAUTH_TOKEN) return "env_var";
  let e = $Yt("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
  if (e !== void 0) return e;
  if (i.ANTHROPIC_API_KEY) return "env_var";
  return $Yt("CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR") ?? "none";
}
function Be(e, r, n = {}) {
  let o = setInterval(e, r);
  if (n.unref) o.unref?.();
  return { [Symbol.dispose]: () => clearInterval(o) };
}
var ii = 3;
function ri() {
  let e = k("tengu_zippy_gosling", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
function t2o(e) {
  let r = Math.max(Jf(), EX() ?? 0);
  return !f_e() && Date.now() - r > e;
}
function Y7n(e, r, n = {}) {
  let o = 0,
    s = null,
    p = null,
    y = Be(C, r, n);
  function h() {
    if ((s?.(), (s = null), p !== null)) (clearTimeout(p), (p = null));
  }
  function v() {
    ((o = 0), h(), e());
  }
  function C() {
    let S = ri();
    if (!(S > 0 && t2o(S)) || o >= ii) {
      v();
      return;
    }
    (o++,
      (s ??= S6(() => {
        p ??= setTimeout(() => {
          (y[Symbol.dispose](), (y = Be(C, r, n)), v());
        }, 0);
      })));
  }
  return {
    [Symbol.dispose]: () => {
      (y[Symbol.dispose](), h());
    }
  };
}
var ni = [
  ["text/html", "html"],
  ["application/json", "json"],
  ["text/json", "json"],
  ["text/", "text"]
];
function Ge(e) {
  let r = e.toLowerCase();
  return ni.find(([n]) => r.includes(n))?.[1] ?? "other";
}
function mtt(e) {
  if (!e || typeof e !== "object") return !1;
  return N9(e["request-id"]);
}
function KGt(e) {
  if (!e || typeof e !== "object") return {};
  let r = e;
  return { requestIdPresent: mtt(r), responseContentType: Ge(String(r["content-type"] ?? "")) };
}
function mhn(e) {
  let r = e?.response;
  if (!r || typeof r !== "object") return {};
  return KGt(r.headers);
}
function ghn(e) {
  let r = e?.response,
    n = r?.data?.error;
  if (!n || typeof n !== "object") return {};
  let o = typeof n.type === "string" ? n.type : void 0,
    s = n.details?.error_code,
    p =
      typeof s === "string"
        ? s
        : typeof n.error_code === "string"
          ? n.error_code
          : typeof n.code === "string"
            ? n.code
            : void 0,
    y = typeof n.message === "string" ? n.message : void 0,
    h =
      p === void 0 && y !== void 0 && (o === "authentication_error" || o === "permission_error")
        ? oi(y)
        : void 0;
  return {
    serverErrorType: o === void 0 ? void 0 : y7s.includes(o) ? o : "other",
    serverErrorCode: p === void 0 ? void 0 : Z7n.includes(p) ? p : "other",
    ...(h !== void 0 && { serverAuthDenial: h }),
    ...(mtt(r?.headers) && { serverErrorStamped: !0 })
  };
}
function gtt(e) {
  return e.serverErrorStamped === !0 && e.serverErrorType !== "other" ? e.serverErrorType : void 0;
}
function oi(e) {
  if (e.startsWith("Organization access has been revoked")) return "org_access_revoked";
  if (e.startsWith("Workspace access has been revoked")) return "workspace_revoked";
  if (/^OAuth (?:access )?token has been revoked\b/.test(e)) return "token_revoked";
  if (/^OAuth (?:access )?token has expired\b/.test(e)) return "token_expired";
  if (e.startsWith("OAuth access token is invalid") || e.startsWith("Invalid bearer token"))
    return "token_invalid";
  if (e.startsWith("OAuth token application has been deactivated"))
    return "application_deactivated";
  if (e.startsWith("Credential is invalid")) return "credential_invalid";
  return "other";
}
var si = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function a9(e) {
  if (e instanceof Error) return si.test(e.name) ? e.name : "Error";
  return e === null ? "null" : typeof e;
}
class Rt {
  settings = void 0;
  policy = void 0;
  settingsBarrier = void 0;
  policyBarrier = void 0;
  isDefaultCommand = void 0;
  openStartupBlocks = 0;
  policyGate = void 0;
  settingsReader = void 0;
  orgGateShadow = void 0;
  orgGateShadowSettle = void 0;
  orgGateShadowLogged = !1;
  unregisterOrgGateShadowExitFlush = void 0;
  logged = !1;
  unregisterExitFlush = void 0;
}
var ai = new W(() => new Rt());
function Ue(e = performance.now()) {
  return cm() ? void 0 : Math.round(e);
}
function _t(e, r) {
  return e === void 0 || r === void 0 ? void 0 : Math.max(e, r);
}
function Z(e) {
  try {
    let r = es(ai);
    if (r.logged) return;
    ((r.unregisterExitFlush ??= bt(() => Z((n) => $e(n, "exit")))), e(r));
  } catch (r) {
    l(N(r));
  }
}
function JQs(e) {
  Z((r) => {
    r.isDefaultCommand ??= e;
  });
}
function Ne(e) {
  Z((r) => {
    r.policyGate ??= e;
  });
}
function QQs(e) {
  Z((r) => {
    r.settingsReader ??= e;
  });
}
function ZQs(e, r) {
  Z((n) => {
    ((n.orgGateShadow ??= e), (n.orgGateShadowSettle ??= r));
  });
}
var Ke = new Set(["ineligible", "superseded"]);
function A7(e, r) {
  Z((n) => {
    let o = n[e];
    if (o !== void 0 && !Ke.has(o.source)) return;
    ((n[e] = { ...r, settledMs: Ue() }), Ve(n));
  });
}
function htt(e, r, { since: n, supersede: o = !1 } = {}) {
  Z((s) => {
    (Pt(s, e, r, n, o), Ve(s));
  });
}
function hzr(e, { supersede: r = !1 } = {}) {
  let n = performance.now(),
    o = !1;
  return (
    Z((s) => {
      (s.openStartupBlocks++, (o = !0));
    }),
    (s) =>
      Z((p) => {
        if (!o) return;
        ((o = !1), p.openStartupBlocks--, Pt(p, e, s, n, r), Ve(p));
      })
  );
}
function Pt(e, r, n, o, s) {
  let p = r === "settings" ? "settingsBarrier" : "policyBarrier";
  if (e[p] !== void 0 && !s) return;
  let y = performance.now();
  e[p] = {
    result: typeof n === "function" ? n() : n,
    waitMs: o === void 0 ? 0 : Math.round(y - o),
    crossedMs: Ue(y)
  };
}
function hhn() {
  let e = Promise.resolve();
  return (
    Z((r) => {
      let n = me(r.policyGate);
      ((e = Zs(kt, At(r, "exit", n)).catch((o) => {
        l(N(o));
      })),
        wt(r, n, "exit"));
    }),
    e
  );
}
function e7s() {
  Z((e) => $e(e, "first_prompt"));
}
function Ve(e) {
  if (
    e.settings &&
    e.policy &&
    e.settingsBarrier &&
    e.policyBarrier &&
    !Ke.has(e.settings.source) &&
    !Ke.has(e.policy.source) &&
    e.openStartupBlocks === 0
  )
    $e(e, "both_resolved");
}
var kt = "tengu_managed_config_ready",
  di = "tengu_org_config_gate_shadow";
function $e(e, r) {
  let n = me(e.policyGate);
  (a(kt, At(e, r, n)), wt(e, n, r));
}
function wt(e, r, n) {
  if (e.orgGateShadow === void 0 || e.orgGateShadowLogged) return;
  if (n !== "exit" && e.orgGateShadowSettle !== void 0) {
    if (e.unregisterOrgGateShadowExitFlush !== void 0) return;
    ((e.unregisterOrgGateShadowExitFlush = bt(async () => He(e, me(e.policyGate), "exit"))),
      e
        .orgGateShadowSettle()
        .catch(() => {})
        .then(() => He(e, me(e.policyGate), "settled")));
    return;
  }
  He(e, r, n);
}
function He(e, r, n) {
  if (e.orgGateShadow === void 0 || e.orgGateShadowLogged) return;
  ((e.orgGateShadowLogged = !0), e.unregisterOrgGateShadowExitFlush?.());
  try {
    a(di, {
      ...e.orgGateShadow({ settings: e.settings, policy: e.policy, policyGateFields: r }),
      shadow_trigger: c(n)
    });
  } catch (o) {
    l(
      new R(
        `org-config gate: the shadow verdict readers threw (${a9(o)})`,
        "org-config gate: the shadow verdict readers threw"
      )
    );
  }
}
function At(e, r, n) {
  ((e.logged = !0), e.unregisterExitFlush?.());
  let { settings: o, policy: s, settingsBarrier: p, policyBarrier: y } = e;
  return {
    trigger: c(r),
    emitted_ms: Ue(),
    is_default_command: e.isDefaultCommand,
    settled_ms: _t(o?.settledMs, s?.settledMs),
    barrier_crossed_ms: _t(p?.crossedMs, y?.crossedMs),
    ...St("settings", o),
    ...Ct("settings", p),
    ...me(e.settingsReader),
    ...St("policy", s),
    ...Ct("policy", y),
    ...n
  };
}
function me(e) {
  if (e === void 0) return {};
  try {
    return e();
  } catch (r) {
    return (
      l(
        new R(
          `org-config gate: a registered gate-field reader threw (${a9(r)})`,
          "org-config gate: a registered gate-field reader threw"
        )
      ),
      {}
    );
  }
}
function St(e, r) {
  return {
    [`${e}_source`]: r ? c(r.source) : c("pending"),
    [`${e}_had_cache`]: r?.hadCache,
    [`${e}_awaited`]: r?.awaited,
    [`${e}_fetch_ms`]: r?.fetchMs,
    [`${e}_settled_ms`]: r?.settledMs
  };
}
function Ct(e, r) {
  return {
    [`${e}_barrier`]: r ? c(r.result) : c("not_reached"),
    [`${e}_barrier_wait_ms`]: r?.waitMs
  };
}
function yhn(e) {
  let r = new AbortController();
  return { attempt: e(r.signal), abort: () => r.abort() };
}
function yzr({
  first: e,
  send: r,
  isAnswer: n,
  delayMs: o = 3000,
  stillWanted: s = () => !0,
  retryFollows: p = !0
}) {
  return new Promise((y, h) => {
    let v = !1,
      C,
      S = 1,
      A,
      H,
      T = (P) => {
        if (((v = !0), clearTimeout(I), e.abort(), C?.abort(), P.ok))
          y({ result: P.value, hedged: C !== void 0 });
        else h(P.error);
      },
      M = (P) => {
        P.then(
          (O) => w({ ok: !0, value: O }),
          (O) => w({ ok: !1, error: O })
        );
      },
      w = (P) => {
        if (v) return;
        S--;
        let O = S > 0;
        if (P.ok && n(P.value, O)) {
          T(H && !n(P.value, !0) ? H : P);
          return;
        }
        if (O) {
          if (P.ok && n(P.value, !1)) A ??= { value: P.value };
          else if (P.ok && p) H ??= P;
          return;
        }
        T(A && !(P.ok && p) ? { ok: !0, value: A.value } : P);
      },
      I = setTimeout(() => {
        if (v || !s()) return;
        (S++, (C = yhn(r)), M(C.attempt));
      }, o);
    M(e.attempt);
  });
}
class X7n {
  entry = null;
  set(e, r, n = () => !0) {
    this.clear();
    let o = yhn(r),
      s = { key: e, inFlight: o, sentAtMs: Date.now(), failed: !1 };
    (o.attempt.then(
      (p) => {
        s.failed = !n(p);
      },
      () => {
        s.failed = !0;
      }
    ),
      (this.entry = s));
  }
  get pending() {
    return this.entry !== null;
  }
  take(e) {
    let r = this.entry;
    if (((this.entry = null), r === null)) return;
    let n = Math.abs(Date.now() - r.sentAtMs) <= 60000;
    if (!r.failed && n && e(r.key)) return r.inFlight;
    r.inFlight.abort();
    return;
  }
  clear() {
    (this.entry?.inFlight.abort(), (this.entry = null));
  }
}
function _zr({ kind: e, answer: r, account: n }) {
  if (r === void 0) return "no_answer";
  try {
    let { result: o } = eot({
      jws: r.jws,
      kind: e,
      orgUuid: n?.organizationUuid || void 0,
      accountUuid: n?.accountUuid || void 0,
      workspaceUuid: n?.workspaceUuid || void 0,
      unanchoredClaims: "accept",
      bodySha: r.bodySha(),
      nowMs: Date.now(),
      roots: WNe()
    });
    return o === "valid" || o === "unsigned" ? o : "invalid";
  } catch {
    return "invalid";
  }
}
async function Lt({
  kind: e,
  cachePath: r,
  bodySha: n,
  orgUuid: o,
  accountUuid: s,
  workspaceUuid: p,
  gate: y,
  readOrgPin: h,
  onJudged: v
}) {
  try {
    let C = { typ: e, aud: o, sub: s, ws: p },
      [S, A] = await Promise.all([Pli(r), Ili(r, C)]),
      H = Date.now(),
      T = performance.now(),
      M = {
        jws: S?.jws,
        kind: e,
        orgUuid: o,
        accountUuid: s,
        workspaceUuid: p,
        bodySha: n,
        highWaterIat: A,
        nowMs: H,
        roots: WNe()
      },
      w = eot({ ...M, unanchoredClaims: "refuse" }),
      I =
        (w.result === "aud_mismatch" && o === void 0) ||
        (w.result === "sub_mismatch" && s === void 0)
          ? eot({ ...M, unanchoredClaims: "accept" })
          : w,
      P = Math.round((performance.now() - T) * 1000),
      O = li({
        held: { orgUuid: o, accountUuid: s, workspaceUuid: p },
        readOrgPin: h,
        verification: I
      });
    try {
      v(O);
    } catch (Y) {
      t(`signed-cache: telling the loader failed: ${d(Y)}`, { level: "error" });
    }
    let j =
      w.result === "valid" ? w : y === "enforced" && O.trusted && I.result === "valid" ? I : void 0;
    if (j !== void 0) await Oli(r, C, Math.min(j.issuedAt, Math.floor(H / 1000)));
    a("tengu_signed_cache_shadow", {
      cache: c(e),
      result: c(w.result),
      age_s: w.ageSeconds,
      cert_hours_left: w.certHoursLeft,
      verify_micros: P,
      has_org_uuid: o !== void 0,
      has_account_uuid: s !== void 0,
      has_workspace_uuid: p !== void 0,
      ws_unanchored: w.wsUnanchored === !0,
      absence: w.absence === !0,
      states_lifetime: w.statesLifetime === !0,
      stored_copy: c(dTt(O))
    });
  } catch (C) {
    t(`Signed cache: shadow check failed (${e}) - ${d(C)}`);
  }
}
function li({ held: e, readOrgPin: r, verification: n }) {
  try {
    return q9o({ verification: n, held: e, pinnedOrgs: r() });
  } catch (o) {
    return (
      t(`signed-cache: the organization pin could not be read: ${d(o)}`, { level: "error" }),
      { trusted: !1, reason: "org_pin_unknown" }
    );
  }
}
function bzr({
  kind: e,
  cachePath: r,
  bodySha: n,
  readStoredAccount: o,
  gateEnforced: s,
  readOrgPin: p,
  onJudged: y
}) {
  try {
    let h = o();
    Lt({
      kind: e,
      cachePath: r,
      bodySha: n,
      orgUuid: h?.organizationUuid || void 0,
      accountUuid: h?.accountUuid || void 0,
      workspaceUuid: h?.workspaceUuid || void 0,
      gate: s ? "enforced" : "shadow",
      readOrgPin: p,
      onJudged: y
    }).catch(() => {});
  } catch {}
}
function Szr({ kind: e, jws: r, trustedPrincipal: n, gate: o }) {
  try {
    if (r === void 0) return;
    let { result: s } = eot({
      jws: r,
      kind: e,
      orgUuid: n.orgUuid,
      accountUuid: n.accountUuid,
      workspaceUuid: n.workspaceUuid,
      unanchoredClaims: "refuse",
      bodySha: K9o,
      highWaterIat: void 0,
      nowMs: Date.now(),
      roots: WNe()
    });
    if (s !== "aud_mismatch" && s !== "sub_mismatch") return;
    a("tengu_signed_cache_principal_change", {
      cache: c(e),
      differs: c(s === "aud_mismatch" ? "aud" : "sub"),
      stored_copy_gate: c(o)
    });
  } catch (s) {
    t(`signed-cache: live principal check failed: ${d(s)}`);
  }
}
var ci = { "Cache-Control": "no-cache", Pragma: "no-cache" };
function Tt(e) {
  return `${e}${DRe}`;
}
async function je(e) {
  let r = await Ht.get(e.endpoint, {
      headers: {
        "User-Agent": Ds(),
        ...ci,
        ...(e.ifNoneMatch !== void 0 && { "If-None-Match": `"${e.ifNoneMatch}"` }),
        ...e.authHeaders
      },
      timeout: e.timeoutMs,
      maxRedirects: 0,
      adapter: "http",
      validateStatus: e.acceptAny2xx
        ? (y) => (y >= 200 && y < 300) || y === 304
        : (y) => y === 200 || y === 304,
      ...(e.socketPath !== void 0 && { socketPath: e.socketPath }),
      ...(e.signal !== void 0 && { signal: e.signal })
    }).catch((y) => {
      if (Ht.isAxiosError(y) && y.code === "ECONNABORTED" && y.request?.res)
        y.code = "ERR_BAD_RESPONSE";
      throw y;
    }),
    n = r.headers ?? {},
    o = dqt(n),
    s = n[_2t],
    p = TVr(typeof s === "string" ? s : void 0);
  if (r.status === 304)
    return {
      kind: "not_modified",
      signature: o,
      requestIdPresent: mtt(n),
      tunnelCredentialEpoch: p
    };
  return {
    kind: "ok",
    data: r.data,
    signature: o,
    contentType: String(n["content-type"] ?? "").toLowerCase(),
    requestIdPresent: mtt(n),
    tunnelCredentialEpoch: p
  };
}
function Ot(e) {
  if (!Ht.isAxiosError(e)) return;
  let r = e.response?.headers?.[_2t];
  return TVr(typeof r === "string" ? r : void 0);
}
var Mt = new Set([
    "oauth_not_allowed_for_organization",
    "organization_disabled",
    "organization_on_hold",
    "claude_code_key_creator_not_member",
    "ip_not_in_allowed_range"
  ]),
  It = new Set(["oauth_application_deactivated"]),
  pi = new Set(["org_access_revoked", "workspace_revoked", "application_deactivated"]),
  hi = new Set(["token_expired", "token_revoked", "token_invalid", "credential_invalid"]);
function n2o(e, r) {
  if (e !== void 0 && Mt.has(e)) return "organization";
  if (r === "org_access_revoked" || r === "workspace_revoked") return "organization";
  if ((e !== void 0 && It.has(e)) || r === "application_deactivated") return "credential";
  return;
}
var fi = new Set(["restricted_regime_endpoint", "oauth_scope_insufficient"]),
  mi = new Set([
    "known_dead_refresh_token",
    "no_refresh_token",
    "account_on_hold",
    "not_refreshable"
  ]),
  Ft = new Set([
    "lock_timeout",
    "lock_busy",
    "lock_compromised",
    "lock_error",
    "lock_disk_full",
    "refresh_failed"
  ]),
  yi = new Set(["refreshed", "not_needed"]);
function J7n(e) {
  let {
      errorCode: r,
      httpStatus: n,
      serverErrorType: o,
      serverErrorCode: s,
      serverAuthDenial: p,
      authUnavailableReason: y,
      authType: h,
      credentialOrigin: v
    } = e,
    C = h === void 0 || h === "oauth",
    S = C ? e.tokenRefreshOutcome : void 0,
    A = C ? (e.forcedRefreshOutcome ?? e.tokenRefreshOutcome) : void 0;
  if (r === void 0) return "unknown";
  if ((s !== void 0 && (Mt.has(s) || It.has(s))) || (p !== void 0 && pi.has(p))) return "dead";
  if (s !== void 0 && fi.has(s)) return "live";
  if (
    r === "network_error" ||
    r === "timeout" ||
    r === "parse_failed" ||
    r === "spurious_304" ||
    r === "stale_tunnel_credential" ||
    (r === "request_failed" && n === void 0 && e.noResponse === !0)
  )
    return "live";
  if (n === void 0) {
    if (y === "no_oauth_token") return S !== void 0 && Ft.has(S) ? "unknown" : "dead";
    return "unknown";
  }
  if (n >= 500 || n === 429 || o === "rate_limit_error") return "live";
  if (n === 404 || n === 304) return "live";
  if (n === 401) {
    if (v === "proxy") return "unknown";
    if (h === "api_key") return v === "helper_key" ? "unknown" : "dead";
    let H = o === "authentication_error" || (p !== void 0 && hi.has(p));
    if (v === "injected_token" && H)
      switch (e.injectedTokenRecovery) {
        case "none":
          return "dead";
        case "sdk_host_refresh":
        case "runner_rotation":
          return "live";
        case void 0:
          break;
      }
    if (A === void 0) return "unknown";
    if (mi.has(A)) return "dead";
    if (v === "injected_token") return "unknown";
    if (Ft.has(A) || yi.has(A)) return "live";
    return "unknown";
  }
  return "unknown";
}
var gi = new Set(h7s);
function _i(e) {
  return gi.has(e);
}
var vi = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "CERT_HAS_EXPIRED",
    "CERT_NOT_YET_VALID",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "CERT_SIGNATURE_FAILURE",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "HOSTNAME_MISMATCH"
  ]),
  Si = new Set(["ECONNABORTED", "ERR_CANCELED"]);
function Dt(e) {
  if (e === void 0) return;
  if (_i(e)) return e;
  if (vi.has(e)) return "CERT_ERROR";
  if (Si.has(e)) return "ABORTED";
  return;
}
function Mwt(e) {
  let r = e !== null && typeof e === "object" && "cause" in e ? e.cause : void 0;
  return Dt(E(e)) ?? Dt(E(r)) ?? "OTHER";
}
var Ci = new W(() => De());
function xt() {
  return Ci.of(U().host);
}
function wzr() {
  xt().emit();
}
function Bt(e) {
  return xt().subscribe(e);
}
var tt = () => i.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH === !0;
function o2o(e) {
  tt = e;
}
var it = 1e4,
  HRi = it + 2000,
  $t = 5,
  ki = 3600000,
  Gt = [15000, 15000, 30000, 60000, 180000, 600000],
  Kt = 0.2,
  wi = 60000;
function Xe() {
  return k("tengu_shimmying_stardust", !1);
}
var t7s = 60000;
function Ai(e) {
  return e === "load" ? "other" : e;
}
function Wt(e) {
  return e === "accelerated_retry" || e === "api_success_trigger" || e === "api_refusal_trigger";
}
var Li = 30000,
  ytt = 5000,
  kbi = 86400000;
function Tbi(e, r) {
  let n = e || void 0;
  if (!C5()) return n;
  return J_n(n, r ?? (oZn() ? Ti() : be()));
}
function be() {
  if (oZn()) return;
  let e = L2o();
  if (e !== null) {
    let r = Date.now() - e;
    return r >= 0 ? r : void 0;
  }
  try {
    let r = Date.now() - Math.trunc(Ei(xx()).mtimeMs);
    return r >= 0 ? r : void 0;
  } catch {
    return;
  }
}
function Ti() {
  let e = E2o();
  if (e === null) return;
  let r = Date.now() - e;
  return r >= 0 ? r : void 0;
}
var qe = Date.now();
function Ut(e) {
  let r = u0();
  if (!r) return e;
  T2o(e.compliance_taints);
  let n = L([...r.compliance_taints, ...e.compliance_taints.filter((o) => !aai(o))]).slice(0, Lwt);
  if (n.length === r.compliance_taints.length) return r;
  return { ...r, compliance_taints: n };
}
function jt() {
  return Tt(f0() ? "http://localhost" : rn().BASE_API_URL);
}
function rt() {
  return jt();
}
function ye() {
  if (f0()) return "local machine (via claude ssh tunnel)";
  try {
    return new URL(rt()).host;
  } catch {
    return "unknown host";
  }
}
function ne(e) {
  return tq(Ttt(e));
}
function DLe() {
  return Mh() && XGt() === null;
}
function bi() {
  if (f0())
    return { authType: i.CLAUDE_CODE_OAUTH_TOKEN ? "oauth" : "api_key", apiKeyFromHelper: !1 };
  let e = null,
    r = "none";
  try {
    let s = nA({ skipRetrievingKeyFromApiKeyHelper: !0 });
    ((e = s.key), (r = s.source));
  } catch {}
  let n = r === "apiKeyHelper",
    o = Boolean(e) || n;
  if (!o && kc()) return { authType: "wif", apiKeyFromHelper: !1 };
  if (Et() && Ln()?.accessToken) return { authType: "oauth", apiKeyFromHelper: !1 };
  return o
    ? { authType: "api_key", apiKeyFromHelper: n }
    : { authType: "oauth", apiKeyFromHelper: !1 };
}
function Oi(e, r) {
  if (f0()) return "proxy";
  switch (e.authType) {
    case "api_key":
      return e.apiKeyFromHelper ? "helper_key" : "static_key";
    case "oauth":
      return r.sentStoredLogin === void 0
        ? void 0
        : r.sentStoredLogin
          ? "stored_login"
          : "injected_token";
    case "wif":
      return;
  }
}
function Vt() {
  if (f0()) return i.CLAUDE_CODE_OAUTH_TOKEN ? "CLAUDE_CODE_OAUTH_TOKEN" : "none";
  return ua().source;
}
function Fi() {
  if (f0()) return { proxy_in_use: !1, proxy_is_loopback: !1 };
  let e,
    r = !1;
  try {
    ((e = Cm()), (r = e !== void 0 && K_(rt())));
  } catch {
    return { proxy_in_use: !1, proxy_is_loopback: !1 };
  }
  if (e === void 0 || r) return { proxy_in_use: !1, proxy_is_loopback: !1 };
  let n = gq(e);
  return { proxy_in_use: !0, proxy_is_loopback: n !== void 0 && iT(n.hostname) };
}
async function Mi(e, r, n, o, s, p, y, h = $t, { hedge: v = !1, prefetched: C } = {}) {
  let S = null,
    A = (T, M = !1) => qt(e, r, n, o, y, T, M),
    H = !1;
  for (let T = 1; T <= h + 1; T++) {
    let M = C ?? yhn(A);
    if (((C = void 0), v && T === 1)) {
      let I = await yzr({
        first: M,
        send: (P) => A(P, !0),
        isAnswer: (P, O) =>
          P.success ||
          (P.skipRetry === !0 && !(O && P.errorCode === "auth_failed" && P.httpStatus === 401)),
        stillWanted: tt,
        retryFollows: h > 0
      });
      ((S = I.result), (H ||= I.hedged));
    } else S = await M.attempt;
    if (((S.attempts = T), H)) S.hedged = !0;
    if (S.success || S.skipRetry || T > h) return S;
    p(S);
    let w = B$(T);
    if ((t(`Policy limits: Retry ${T}/${h} after ${w}ms`), await X(w, s), s?.aborted)) return S;
  }
  return S;
}
async function qt(e, r, n, o, s, p, y = !1) {
  let h,
    v,
    C = !1,
    S = 0,
    A = M0e(s.recoveries),
    H = f0(),
    T = null,
    M = null,
    w = !1,
    I = null;
  try {
    let P = rt(),
      O = {},
      j = async () => {
        await Lzr(o, n);
        let q = et(),
          V = await kj(lqt() ? {} : { envBearerFallbackFor: P }),
          de = U_();
        if (
          ((I = de !== void 0 && V.headers.Authorization === `Bearer ${de}` ? $ce(de) : null),
          V.error)
        )
          return ((w = !0), (T = null), (M = null), V);
        P2o();
        let ae = l9(),
          se = ae === null ? null : oe(ae);
        return (
          (w = q !== se),
          (T = w ? null : se),
          (M = T !== null && ge(ae) ? Oe(ae) : I !== null && pd() ? Jt(I) : null),
          V
        );
      };
    if (!H) {
      h = await Eue({ credentials: n });
      let q = await j();
      if (q.error)
        return {
          success: !1,
          error: "Authentication required for policy limits",
          errorCode: "auth_failed",
          authUnavailableReason: q.reasonCode,
          tokenRefreshOutcome: h,
          skipRetry: !tKt(h, void 0)
        };
      O = q.headers;
      let V = Ln();
      C = Boolean(
        V?.accessToken && V.refreshToken && O.Authorization === `Bearer ${V.accessToken}`
      );
    }
    let Y = Tbi(e, r),
      K = async () => {
        if ((S++, S > 1)) A = M0e(s.recoveries);
        let q = S === 1 || H ? O : (await j()).headers;
        return je({
          endpoint: P,
          authHeaders: q,
          ifNoneMatch: Y,
          timeoutMs: it,
          socketPath: H,
          signal: p
        });
      },
      D = H
        ? await K()
        : await Sv(K, {
            credentials: n,
            gateToSessionOAuthCredential: !0,
            oauthRefreshLatch: s,
            signal: p,
            onForcedRefreshOutcome: (q) => {
              ((v = { outcome: q }), (s.lastOutcome = q));
            }
          });
    if (D.kind === "not_modified") {
      if (!Y || !e)
        return (
          t("Policy limits: 304 to an unconditional request"),
          {
            success: !1,
            error: "Unexpected 304 Not Modified",
            errorCode: "request_failed",
            httpStatus: 304,
            skipRetry: !0,
            principalKeyAtWire: T,
            askedKeyAtWire: M,
            principalMovedAtWire: w,
            retriedAfter401: S > 1
          }
        );
      if (!D.requestIdPresent && C5())
        return (
          t(
            "Policy limits: 304 without Anthropic's request id \u2014 an intermediary's answer, keeping cached restrictions"
          ),
          {
            success: !1,
            error: "304 from an intermediary (no Anthropic request id)",
            errorCode: "request_failed",
            httpStatus: 304,
            skipRetry: !0,
            requestIdPresent: !1,
            principalKeyAtWire: T,
            askedKeyAtWire: M,
            principalMovedAtWire: w,
            retriedAfter401: S > 1
          }
        );
      if (S === 1 && !y) D0e(s, A);
      return (
        t("Policy limits: Using cached restrictions (304)"),
        {
          success: !0,
          response: null,
          etag: e,
          signature: D.signature,
          requestIdPresent: !0,
          principalKeyAtWire: T,
          askedKeyAtWire: M,
          principalMovedAtWire: w,
          retriedAfter401: S > 1,
          ...(I !== null && S === 1 && { sentEnvBearerDigest: I }),
          ...(D.tunnelCredentialEpoch !== void 0 && {
            tunnelCredentialEpoch: D.tunnelCredentialEpoch
          })
        }
      );
    }
    let ee = Chn(D.data);
    if (!ee.success) {
      let q = Ii(ee.error.issues[0]?.path[0]),
        V = Ge(D.contentType);
      return (
        t(`Policy limits: Invalid response format - field=${q} ct=${V} - ${ee.error.message}`),
        {
          success: !1,
          error: "Invalid policy limits format",
          errorCode: "parse_failed",
          parseErrorField: q,
          parseErrorContentType: V,
          responseContentType: V,
          requestIdPresent: D.requestIdPresent,
          skipRetry: Xe(),
          principalKeyAtWire: T,
          askedKeyAtWire: M,
          principalMovedAtWire: w,
          retriedAfter401: S > 1
        }
      );
    }
    D0e(s, A);
    let J = Ezr(D.data);
    if (J > 0)
      return (
        t(`Policy limits: Fetched with ${J} malformed compliance_taints element(s) dropped`),
        {
          success: !0,
          response: ee.data,
          parseErrorField: "compliance_taints",
          lossyComplianceTaints: !0,
          signature: D.signature,
          principalKeyAtWire: T,
          askedKeyAtWire: M,
          principalMovedAtWire: w,
          retriedAfter401: S > 1,
          ...(I !== null && { sentEnvBearerDigest: I }),
          ...(D.tunnelCredentialEpoch !== void 0 && {
            tunnelCredentialEpoch: D.tunnelCredentialEpoch
          })
        }
      );
    return (
      t("Policy limits: Fetched successfully"),
      {
        success: !0,
        response: ee.data,
        signature: D.signature,
        principalKeyAtWire: T,
        askedKeyAtWire: M,
        principalMovedAtWire: w,
        retriedAfter401: S > 1,
        ...(I !== null && { sentEnvBearerDigest: I }),
        ...(D.tunnelCredentialEpoch !== void 0 && {
          tunnelCredentialEpoch: D.tunnelCredentialEpoch
        })
      }
    );
  } catch (P) {
    let { kind: O, status: j, message: Y } = ui(P),
      K = { ...ghn(P), ...mhn(P) },
      D = v !== void 0 ? v.outcome : C && s.attempted ? s.lastOutcome : void 0,
      ee = Ot(P),
      J = {
        ...(S > 0 && { principalKeyAtWire: T, askedKeyAtWire: M, principalMovedAtWire: w }),
        ...(ee !== void 0 && { tunnelCredentialEpoch: ee })
      };
    switch (
      (t(`Policy limits: fetch failed (${O}${j ? ` ${j}` : ""}) from ${ye()} \u2014 ${Y}`), O)
    ) {
      case "auth":
        return {
          success: !1,
          error: "Not authorized for policy limits",
          errorCode: "auth_failed",
          httpStatus: j,
          tokenRefreshOutcome: h,
          skipRetry: !(j === 401 && C && tKt(h, v)),
          retriedAfter401: S > 1,
          forcedRefreshOutcome: D,
          sentStoredLogin: C,
          ...K,
          ...J
        };
      case "timeout":
        return {
          success: !1,
          error: "Policy limits request timeout",
          errorCode: "timeout",
          errno: Mwt(P),
          retriedAfter401: S > 1,
          ...J
        };
      case "network":
        return {
          success: !1,
          error: "Cannot connect to server",
          errorCode: "network_error",
          errno: Mwt(P),
          retriedAfter401: S > 1,
          ...J
        };
      default:
        return {
          success: !1,
          error: Y,
          errorCode: "request_failed",
          httpStatus: j,
          skipRetry: _ie(j),
          retriedAfter401: S > 1,
          forcedRefreshOutcome: D,
          ...(O === "http" && j === void 0 && { noResponse: !0, errno: Mwt(P) }),
          ...K,
          ...J
        };
    }
  }
}
async function s2o(e, { timeoutMs: r = it } = {}) {
  if (Ae() !== "firstParty" || !of()) return null;
  try {
    let n = await je({
      endpoint: jt(),
      authHeaders: { Authorization: `Bearer ${e}`, "anthropic-beta": Bu },
      timeoutMs: r,
      acceptAny2xx: !0
    });
    if (n.kind === "not_modified")
      return (t("Policy limits (bearer read): 304 to an unconditional request"), null);
    let o = Chn(n.data);
    if (!o.success)
      return (
        t(`Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`),
        null
      );
    return o.data;
  } catch (n) {
    let { kind: o, status: s, message: p } = ui(n);
    return (
      t(`Policy limits (bearer read): fetch failed (${o}${s ? ` ${s}` : ""}) \u2014 ${p}`),
      null
    );
  }
}
function Ii(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults" ? e : "other";
}
function Ye() {
  return {
    has_custom_base_url: jwn(),
    via_unix_socket: f0() !== void 0,
    has_unix_socket: i.ANTHROPIC_UNIX_SOCKET !== void 0,
    has_auth_token: Boolean(U_()),
    has_api_key_helper: Boolean(Ng()),
    api_key_prefix: c(I_n())
  };
}
var Di = [
  "EACCES",
  "EPERM",
  "EROFS",
  "ENOSPC",
  "EDQUOT",
  "ENOENT",
  "ENOTDIR",
  "EISDIR",
  "EMFILE",
  "ENFILE",
  "EBUSY"
];
function Yt(e) {
  return e !== void 0 && Di.includes(e) ? e : "other";
}
function Te(e) {
  return Yt(E(e));
}
function xi(e) {
  let r = "telemetryCode" in e ? e.telemetryCode : void 0;
  return Yt(r === "UnexpectedAbsent" || r === Zes ? "ENOENT" : r);
}
function Qe() {
  return We.state("policy-limits");
}
var Ze = 1048576;
async function i2o(e) {
  if (!z() || e === void 0 || !Mh() || yCe()) return;
  try {
    let r = xzr(),
      n = await e.read([{ key: Qe(), offset: 0, length: Ze + 1 }]);
    if (!n.ok) {
      t(`Policy limits: prime read failed: ${n.error.code}; raw cache read stays`);
      return;
    }
    let o = n.value.items[0];
    if (!o.found) {
      Uzr(e, null);
      return;
    }
    if (o.totalBytes > Ze) {
      t("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return;
    }
    let s = cZn(Buffer.from(o.value).toString("utf-8"));
    Uzr(e, s === null ? null : Hzr(s, Pzr(r)));
  } catch (r) {
    t(`Policy limits: prime failed: ${d(r)}`);
  }
}
class a2o {
  storageV5;
  credentials;
  used = !1;
  constructor(e = {}) {
    ((this.storageV5 = e.storageV5), (this.credentials = e.credentials));
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0) return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0) return "already composed";
    if (this.used) return "already used";
    return ((this.storageV5 = e.storageV5), (this.credentials = e.credentials), "adopted");
  }
  oauthRefreshLatch = { attempted: !1, recoveries: { begun: 0, running: 0 } };
  prefetchSlot = new X7n();
  renewOAuthRefreshLatch() {
    this.oauthRefreshLatch = {
      attempted: !1,
      lastOutcome: this.oauthRefreshLatch.lastOutcome,
      recoveries: { begun: 0, running: 0 }
    };
  }
  prefetch() {
    if (!Mh()) return;
    let e = et();
    if (e === null) return;
    let r = iZn() ? null : XGt(),
      n = r === EKe ? null : r,
      o = n ? ne(n) : void 0,
      { credentials: s, storageV5: p, oauthRefreshLatch: y } = this;
    this.prefetchSlot.set(
      {
        checksum: o,
        generation: this.sessionGeneration,
        diskEpoch: vtt(),
        endpointHost: ye(),
        storageV5: p,
        credentials: s,
        principalKey: e
      },
      (h) => qt(o, C5() ? be() : void 0, s, p, y, h),
      (h) => h.success || h.httpStatus === 404
    );
  }
  poller = null;
  cleanupRegistered = !1;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  loadingTimeoutId = null;
  abortController = new AbortController();
  firstPromptStateLogged = !1;
  cacheWriteFailureLogged = !1;
  sessionGeneration = 0;
  serverConfirmedGeneration = -1;
  verdictPrincipalIdentity = null;
  verdictKey = null;
  verdictPrincipalKind = null;
  askedKey = null;
  cyclesInFlight = 0;
  unsettledCycles = new Set();
  principalCheckOwed = !1;
  unclassifiedRecheckTimer = null;
  stopCredentialWatch = null;
  stopTunnelEpochWatch = null;
  stopRegimeRefusalWatch = null;
  stopKeyApprovalWatch = null;
  regimeRefusalRefetch = null;
  regimeRefusalRefetchStartedAtMs = void 0;
  tunnelEpochSeen = void 0;
  tunnelVerdictEpoch = void 0;
  tunnelRepolledForEpoch = void 0;
  principalCheckQueued = !1;
  signedCacheShadowChecked = !1;
  storedCopyShadow = void 0;
  storedCopyReported = !1;
  storedCopyAtStart = void 0;
  liveAnswer = void 0;
  livePrincipalChecked = !1;
  cacheClearEpoch = 0;
  verdictlessRetry = null;
  verdictlessRetryStep = 0;
  stopNetworkWatch = null;
  verdictlessEpisode = null;
  startupLoadState = "not_started";
  startupLoadClaimed = !1;
  startupLoadGeneration = 0;
  prefetchAdmittedGeneration = -1;
  startupLoadErrorCode;
  startupLoadCredentialState;
  startupLoadOutcomeReason;
  startupLoadHttpStatus;
  startupLoadServerErrorType;
  startupLoadServerErrorCode;
  startupLoadServerAuthDenial;
  startupLoadLastAttempt;
  latestLoad;
  startupAwaitResult = "not_awaited";
  gateSnapshotThisRun;
  coldStartFirstWaitAtMs = void 0;
  coldStartWaitedMs = 0;
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e;
  }
  get coldStartTimedOut() {
    return this.startupAwaitResult === "timed_out";
  }
  async awaitColdStartVerdict() {
    let e = performance.now();
    this.coldStartFirstWaitAtMs ??= e;
    let r = Math.max(0, Math.round(this.coldStartFirstWaitAtMs + ytt - e)),
      n;
    try {
      (await Nt(this.waitForLoad(), r, "policy_limits_cold_await"), (n = "completed"));
    } catch {
      n = "timed_out";
    }
    if (
      ((this.coldStartWaitedMs += performance.now() - e), this.startupAwaitResult !== "timed_out")
    )
      this.recordStartupAwaitResult(n);
    return n;
  }
  get coldStartVerdictWait() {
    return this.coldStartFirstWaitAtMs === void 0
      ? null
      : { waitedMs: this.coldStartWaitedMs, firstAtMs: this.coldStartFirstWaitAtMs };
  }
  async admitPrefetched(e) {
    let r = (n) => (
      t(`Policy limits: host prefetch not admitted (${n})`),
      { admitted: !1, refused: n }
    );
    try {
      if (!Mh()) return r("ineligible");
      if (
        this.startupLoadClaimed ||
        this.cyclesInFlight > 0 ||
        this.serverConfirmedGeneration === this.sessionGeneration
      )
        return r("already_loading");
      if (this.prefetchAdmittedGeneration === this.sessionGeneration) return r("already_admitted");
      let n = l9();
      if (
        n === null ||
        n.kind !== "org" ||
        n.unclassified === !0 ||
        n.descriptor !== `org:${e.orgUuid.toLowerCase()}` ||
        n.bearerDigest === void 0 ||
        n.bearerDigest !== e.bearerDigest
      )
        return r("principal_mismatch");
      let o = ye();
      if (e.endpointHost !== o) return r("endpoint_mismatch");
      let s = Date.now() - e.fetchedAtMs;
      if (!Number.isFinite(e.fetchedAtMs) || s < -t7s || s > t7s) return r("stale");
      let p = Chn(e.data);
      if (!p.success) return r("unparseable");
      if (Ezr(e.data) > 0) return r("lossy_taints");
      let y = p.data,
        h = this.sessionGeneration,
        v = u0() !== null;
      ((this.used = !0),
        (this.prefetchAdmittedGeneration = h),
        Ne(() => this.managedConfigPolicyGateFields()),
        nZn(y),
        this.recordVerdictPrincipal(n));
      let C = vtt(),
        S = await this.saveCachedResponse(y, h, V9o(e.signature), n, "prior_evidence");
      if (this.sessionGeneration !== h) {
        if (
          (A7("policy", { source: "superseded", hadCache: v, awaited: !1 }),
          S !== "stale" && S !== "skipped")
        )
          (await this.deleteCacheFile(), Thn());
        return (this.dropUnconfirmedSessionCache(), r("superseded"));
      }
      if (
        (A7("policy", { source: "cache", hadCache: v, awaited: !1 }), S === "saved" && vtt() === C)
      )
        sZn();
      return (
        t(
          `Policy limits: admitted the host's prefetch as this session's prior-evidence verdict (${Object.keys(y.restrictions).length} restriction(s), ${y.compliance_taints?.length ?? 0} taint(s), persisted=${S})`
        ),
        { admitted: !0 }
      );
    } catch (n) {
      return (l(n), r("error"));
    }
  }
  ensureLoadRequested(e) {
    let r =
      this.startupLoadClaimed &&
      this.startupLoadState === "not_started" &&
      !this.loadingCompletePromise &&
      Mh();
    if (this.startupLoadClaimed && !r) return !1;
    return (this.initializeLoadingPromise(), this.load(e).catch((n) => l(n)), !0);
  }
  stop() {
    if (
      (this.sessionGeneration++,
      (this.latestLoad = void 0),
      (this.gateSnapshotThisRun = void 0),
      this.prefetchSlot.clear(),
      (this.verdictPrincipalIdentity = null),
      (this.verdictPrincipalKind = null),
      (this.verdictKey = null),
      (this.askedKey = null),
      (this.cyclesInFlight = 0),
      (this.principalCheckOwed = !1),
      this.unclassifiedRecheckTimer !== null)
    )
      (clearTimeout(this.unclassifiedRecheckTimer), (this.unclassifiedRecheckTimer = null));
    (this.stopCredentialWatch?.(),
      (this.stopCredentialWatch = null),
      this.stopTunnelEpochWatch?.(),
      (this.stopTunnelEpochWatch = null),
      this.stopRegimeRefusalWatch?.(),
      (this.stopRegimeRefusalWatch = null),
      this.stopKeyApprovalWatch?.(),
      (this.stopKeyApprovalWatch = null),
      (this.regimeRefusalRefetchStartedAtMs = void 0),
      this.renewOAuthRefreshLatch(),
      Thn(),
      QGt(),
      this.stopBackgroundPolling(),
      this.abortController.abort(),
      (this.abortController = new AbortController()),
      khn(null),
      Ozr(null),
      A2o(),
      this.releaseLoadingPromise());
  }
  releaseLoadingPromise() {
    if (
      (this.loadingCompleteResolve?.(),
      (this.loadingCompletePromise = null),
      (this.loadingCompleteResolve = null),
      this.loadingTimeoutId !== null)
    )
      (clearTimeout(this.loadingTimeoutId), (this.loadingTimeoutId = null));
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (Mh())
      this.loadingCompletePromise = new Promise((e) => {
        ((this.loadingCompleteResolve = e),
          (this.loadingTimeoutId = setTimeout(
            (r) => {
              if (this.loadingCompleteResolve === r)
                (t("Policy limits: Loading promise timed out, resolving anyway"),
                  this.loadingCompleteResolve(),
                  (this.loadingCompleteResolve = null));
            },
            Li,
            e
          )));
      });
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise;
  }
  async saveCachedResponse(e, r, n, o, s) {
    if (this.sessionGeneration !== r)
      return (
        t("Policy limits: skipped saving a fetch that outlived the account session"),
        "stale"
      );
    if (yCe()) return "skipped";
    if (!eZn(o))
      return (
        t(
          "Policy limits: no server-attributable principal for this credential; the verdict is used for the session and not persisted"
        ),
        "skipped"
      );
    let p;
    try {
      p = await this.writeStampForSave(e, o, s);
    } catch (h) {
      return (
        this.recordCacheWriteFailure(h instanceof Error ? h.message : "unknown error", Te(h)),
        "failed"
      );
    }
    if (p === null) return "failed";
    let y = ne(e);
    if (z() && this.storageV5 !== void 0) {
      let h, v;
      try {
        let C = await this.storageV5.write(Qe(), _(Ttt(e), null, 2), {
          publishDiscipline: "inPlace",
          mode: 384
        });
        if (C.ok)
          return (
            t(`Policy limits: Saved to ${xx()}`),
            await lTt(xx(), n),
            await this.sealSavedBody(p, y)
          );
        ((h = vt(C.error)), (v = xi(C.error)));
      } catch (C) {
        ((h = d(C)), (v = Te(C)));
      }
      return (QGt(), this.recordCacheWriteFailure(h, v), "failed");
    }
    try {
      let h = xx();
      (await Pi(h, _(Ttt(e), null, 2), { encoding: "utf-8", mode: 384 }),
        t(`Policy limits: Saved to ${h}`),
        await lTt(h, n));
    } catch (h) {
      return (
        QGt(),
        this.recordCacheWriteFailure(h instanceof Error ? h.message : "unknown error", Te(h)),
        "failed"
      );
    }
    return this.sealSavedBody(p, y);
  }
  async sealSavedBody(e, r) {
    try {
      await e.rewrite();
    } catch (n) {
      let o = await wtt(xx());
      if ((ktt(o), o.kind !== "ok" || o.stamp.identity !== e.identity || o.stamp.sha !== r)) {
        if (o.kind !== "ok") {
          let s = await this.readDiskBody();
          if (
            (s.kind === "unreadable" || (s.kind === "body" && s.checksum === r)) &&
            !(await this.removeBodyLeavingStamp())
          ) {
            let y = await wtt(xx());
            if ((ktt(y), y.kind !== "ok")) await e.vouch();
          }
        }
        return (
          this.recordCacheWriteFailure(n instanceof Error ? n.message : "unknown error", Te(n)),
          "failed"
        );
      }
    }
    return (Fzr(r, e.evidence, e.confirmedAt), "saved");
  }
  async readDiskBody() {
    let e = !1,
      r;
    try {
      r = await Qk(ie(), xx(), Ze, (o) => {
        e = o.isFile();
      });
    } catch (o) {
      return { kind: G(o) ? "none" : "unreadable" };
    }
    if (e) return { kind: "unreadable" };
    let n = r === null ? null : cZn(r);
    return n === null ? { kind: "none" } : { kind: "body", checksum: ne(n) };
  }
  async removeBodyLeavingStamp() {
    if ((QGt(), await zwn(xx()), z() && this.storageV5 !== void 0))
      try {
        await this.storageV5.delete(Qe());
      } catch {}
    try {
      return (await Ri(xx()), !0);
    } catch (e) {
      return G(e);
    }
  }
  async removeUnstampedBody() {
    if (yCe()) return;
    let e = await wtt(xx());
    if ((ktt(e), e.kind === "absent")) await this.removeBodyLeavingStamp();
  }
  async removeSupersededLegacyBody(e, r) {
    if (!B2o(e)) return;
    let n = await wtt(xx());
    if ((ktt(n), n.kind !== "absent")) return;
    let o = await this.readDiskBody();
    if (o.kind !== "body" || o.checksum !== r) return;
    (t(
      "Policy limits: removed an unstamped cache this credential cannot restamp after the server superseded it"
    ),
      await this.removeBodyLeavingStamp());
  }
  async writeStampForSave(e, r, n) {
    let o = xx(),
      s = await wtt(o);
    if ((ktt(s), tZn(s)))
      return (
        t(
          `Policy limits: the cache stamp could not be read just now (${s.code}); nothing persisted this cycle`
        ),
        null
      );
    let p = S2o({
      principal: r,
      bodySha: ne(e),
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: kzr(s, dZn()),
      authority: n
    });
    return (
      await Tzr(o, p),
      {
        identity: p.identity,
        evidence: Ehn(p),
        confirmedAt: p.confirmed_at,
        rewrite: () => Tzr(o, p),
        vouch: async () => {
          await Azr(o, p);
        }
      }
    );
  }
  async restampConfirmedCache(e, r, n, o, s, p) {
    if (this.sessionGeneration !== o || !eZn(n) || r === void 0 || H2o() !== r) return;
    let y = this.cacheClearEpoch,
      h = await wtt(xx());
    if ((ktt(h), h.kind !== "absent" && !(h.kind === "ok" && h.stamp.sha === r))) return;
    let v = S2o({
      principal: n,
      bodySha: r,
      confirmedAt: !C5() ? Date.now() : h.kind === "ok" ? h.stamp.confirmed_at : p,
      bodyTaints: e.compliance_taints,
      previous: kzr(h, dZn()),
      authority: s
    });
    if ((await Azr(xx(), v), this.cacheClearEpoch !== y)) {
      await this.deleteCacheFile();
      return;
    }
    if (this.sessionGeneration !== o) return;
    Fzr(r, Ehn(v), v.confirmed_at);
  }
  recordCacheWriteFailure(e, r) {
    if ((t(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged))
      ((this.cacheWriteFailureLogged = !0),
        a("tengu_policy_limits_cache_write_failed", { errno: c(r) }));
  }
  async fetchAndLoad(e, r, n = !1) {
    let o = this.sessionGeneration;
    this.cyclesInFlight++;
    let s = this.runFetchCycle(e, r, n);
    this.unsettledCycles.add(s);
    try {
      return await s;
    } finally {
      (this.unsettledCycles.delete(s), this.endCycle(o));
    }
  }
  async _settleCyclesForTesting() {
    while (this.unsettledCycles.size > 0) await Promise.allSettled([...this.unsettledCycles]);
  }
  endCycle(e) {
    if (this.sessionGeneration !== e) return;
    if ((this.cyclesInFlight--, this.cyclesInFlight === 0 && this.principalCheckOwed))
      ((this.principalCheckOwed = !1), this.onCredentialMayHaveChanged());
  }
  async runFetchCycle(e, r, n) {
    this.used = !0;
    let o = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (o) ((this.startupLoadClaimed = !0), (this.startupLoadGeneration = this.sessionGeneration));
    if ((Ne(() => this.managedConfigPolicyGateFields()), !Mh()))
      return (
        this.prefetchSlot.clear(),
        A7("policy", { source: "ineligible", hadCache: !1, awaited: n }),
        null
      );
    if (o) this.startupLoadState = "in_flight";
    let s = iZn() ? null : XGt(),
      p = s === EKe ? null : s,
      y = s === null ? void 0 : O2o(),
      h = aZn() !== "not_asked",
      v = vtt(),
      C = be(),
      S = Date.now(),
      A = l9(),
      H = A === null ? "" : p_e(A),
      T = !Wt(r);
    if (p && !u0()) qGt(p);
    let M = u0();
    if (
      p &&
      M !== null &&
      this.verdictPrincipalIdentity === null &&
      this.serverConfirmedGeneration !== this.sessionGeneration
    )
      if (ge(A) && lZn() === "match" && M2o() === p_e(A) && ne(M) === ne(p))
        this.recordVerdictPrincipal(A);
      else this.ensureCredentialWatch();
    if (p) A7("policy", { source: "cache", hadCache: !0, awaited: n });
    let w = p ? ne(p) : void 0,
      I = this.cacheClearEpoch;
    if (!this.signedCacheShadowChecked) {
      if (
        ((this.signedCacheShadowChecked = !0),
        (this.storedCopyAtStart = yCe()
          ? "not_read"
          : { enforced: Yz(), gateAnswer: aZn(), hadCopy: p !== null }),
        w !== void 0 && !yCe())
      )
        bzr({
          kind: "policy-limits",
          cachePath: xx(),
          bodySha: w,
          readStoredAccount: uf,
          gateEnforced: h,
          readOrgPin: $Le,
          onJudged: (u) => {
            this.storedCopyShadow = u;
          }
        });
    }
    let P = bi(),
      O = P.authType,
      j = Date.now(),
      Y = this.abortController.signal,
      K = this.sessionGeneration,
      D = Fce(),
      ee = () => {
        let u = Fce();
        return u !== null && u.success && u !== D;
      },
      J = !1,
      q = !1,
      V = (u) => {
        if (((J = !0), !u.success && ee())) return;
        this.recordFetchOutcome(K, I, u, H, T);
      },
      de = () =>
        V({ success: !1, errorCode: "request_failed", httpStatus: null, host: ye(), retrying: !1 });
    if (e === "policy_limits_load" && this.prefetchSlot.pending) {
      let u = await Lh(this.credentials);
      if (u !== "store") Y7();
      if ($_n(u)) await Snt(U().host, this.credentials);
      A = l9();
    }
    let ae = A === null ? null : oe(A),
      se = ye(),
      nt =
        e === "policy_limits_load"
          ? this.prefetchSlot.take(
              (u) =>
                u.checksum === w &&
                u.generation === K &&
                u.diskEpoch === v &&
                u.endpointHost === se &&
                u.storageV5 === this.storageV5 &&
                u.credentials === this.credentials &&
                u.principalKey === ae
            )
          : void 0;
    try {
      let u = await Mi(
        w,
        C,
        this.credentials,
        this.storageV5,
        Y,
        (b) => {
          if (o && this.startupLoadState === "in_flight")
            this.startupLoadLastAttempt = {
              errorCode: b.errorCode ?? "request_failed",
              httpStatus: b.httpStatus ?? void 0,
              serverErrorType: gtt(b),
              serverErrorCode: ze(b),
              serverAuthDenial: Je(b)
            };
          if (Fce()?.success) return;
          this.recordFetchOutcome(
            K,
            I,
            {
              success: !1,
              host: se,
              httpStatus: b.httpStatus ?? null,
              errorCode: b.errorCode ?? "request_failed",
              retrying: !0
            },
            H,
            T
          );
        },
        this.oauthRefreshLatch,
        Wt(r) ? 0 : $t,
        { hedge: n && tt(), prefetched: nt }
      );
      if (this.sessionGeneration !== K || Y.aborted) {
        if (o && this.startupLoadState === "in_flight")
          ((this.startupLoadState = "failed"),
            (this.startupLoadErrorCode = "session_changed"),
            (this.startupLoadCredentialState = void 0),
            (this.startupLoadOutcomeReason = void 0),
            (this.startupLoadHttpStatus = void 0),
            (this.startupLoadServerErrorType = void 0),
            (this.startupLoadServerErrorCode = void 0),
            (this.startupLoadServerAuthDenial = void 0),
            (this.startupLoadLastAttempt = void 0));
        return (
          A7("policy", { source: "superseded", hadCache: p !== null, awaited: n }),
          t("Policy limits: Discarding a fetch that outlived the account session"),
          f(e, "cycle_aborted"),
          u0()
        );
      }
      let le = l9(),
        ue = le === null ? null : oe(le),
        ve = u.principalKeyAtWire === void 0 ? ue : u.principalKeyAtWire,
        Fe = u.success && this.isStaleTunnelCredentialEpoch(u.tunnelCredentialEpoch);
      if (Fe)
        t(
          "Policy limits: this answer came back under an older claude ssh credential epoch than one already seen; not installing it"
        );
      let Q = u.principalMovedAtWire === !0 || ve !== ue;
      if (!Q && u.askedKeyAtWire !== void 0 && u.askedKeyAtWire !== null)
        this.askedKey = u.askedKeyAtWire;
      if (Q)
        (t(
          "Policy limits: the credential changed principal during the fetch; this response is used for the session but not persisted or attributed"
        ),
          (A = null));
      else if (ae !== ue)
        (t(
          "Policy limits: the credential changed principal before the request went out; attributing the response to the principal it authenticated as"
        ),
          (A = le));
      if (vtt() !== v)
        (t("Policy limits: the disk snapshot predates an account-boundary hold; not installable"),
          (p = null));
      let Se = u.success && u.response === null && !p,
        x = u.success && !Se && !Fe;
      if (!x)
        this.observeTunnelCredentialEpoch(
          u.tunnelCredentialEpoch,
          u.success ? "a stale policy answer" : "a refused policy request",
          !1
        );
      let re = Fe
          ? "stale_tunnel_credential"
          : Se
            ? "spurious_304"
            : (u.errorCode ?? "request_failed"),
        Me = x ? void 0 : re,
        ot = Oi(P, u),
        st = ot === "injected_token" ? eKt() : void 0,
        at = {
          errorCode: re,
          httpStatus: u.httpStatus,
          serverErrorType: u.serverErrorType,
          serverErrorCode: u.serverErrorCode,
          serverAuthDenial: u.serverAuthDenial,
          tokenRefreshOutcome: u.tokenRefreshOutcome,
          forcedRefreshOutcome: u.forcedRefreshOutcome,
          authUnavailableReason: u.authUnavailableReason,
          authType: O,
          credentialOrigin: ot,
          injectedTokenRecovery: st,
          noResponse: u.noResponse
        },
        he = J7n(at),
        Ie = x ? void 0 : he,
        dt =
          x || u.serverErrorStamped === !0 || !C5()
            ? Ie
            : J7n({
                ...at,
                serverErrorType: void 0,
                serverErrorCode: void 0,
                serverAuthDenial: u.httpStatus === 401 ? u.serverAuthDenial : void 0
              }),
        lt = znr(
          x
            ? { succeeded: !0, responseKind: u.response === null ? "not_modified" : "body" }
            : {
                succeeded: !1,
                failure:
                  u.authUnavailableReason !== void 0
                    ? "no_credentials"
                    : re === "timeout"
                      ? "timeout"
                      : re === "network_error" || u.noResponse
                        ? "network"
                        : re === "parse_failed"
                          ? "parse"
                          : u.httpStatus !== void 0
                            ? "http"
                            : "other",
                httpStatus: u.httpStatus,
                serverErrorType: u.serverErrorType,
                serverErrorCode: u.serverErrorCode,
                serverAuthDenial: u.serverAuthDenial,
                credentialState: Ie,
                tokenRefreshOutcome: u.tokenRefreshOutcome,
                forcedRefreshOutcome: u.forcedRefreshOutcome,
                errno: u.errno,
                responseContentType: u.responseContentType ?? u.parseErrorContentType,
                requestIdPresent: u.requestIdPresent
              }
        ),
        Ce = Date.now(),
        Xt = lZn(),
        Ee = Yz(),
        Qt = aZn(),
        ct = Ee ? y : zqe(this.storedCopyShadow),
        Zt = cqt({ enforced: Ee, gateAnswer: Qt, hadCopy: p !== null }, this.storedCopyShadow),
        ut = !this.storedCopyReported;
      if (((this.storedCopyReported = !0), (q = x), o))
        ((this.startupLoadState = x ? "succeeded" : "failed"),
          (this.startupLoadErrorCode = Me),
          (this.startupLoadCredentialState = dt),
          (this.startupLoadOutcomeReason = lt),
          (this.startupLoadHttpStatus = x ? void 0 : (u.httpStatus ?? void 0)),
          (this.startupLoadServerErrorType = x ? void 0 : gtt(u)),
          (this.startupLoadServerErrorCode = x ? void 0 : ze(u)),
          (this.startupLoadServerAuthDenial = x ? void 0 : Je(u)),
          (this.startupLoadLastAttempt = void 0));
      if (e === "policy_limits_load" && this.sessionGeneration === K)
        this.latestLoad = x
          ? { succeeded: !0 }
          : {
              succeeded: !1,
              errorCode: Me,
              credentialState: dt,
              httpStatus: u.httpStatus ?? void 0,
              serverErrorType: gtt(u),
              serverErrorCode: ze(u),
              serverAuthDenial: Je(u)
            };
      let Re = { source: x ? "fetch" : "error", hadCache: p !== null, awaited: n, fetchMs: Ce - j };
      if (!x) A7("policy", Re);
      let ke,
        pt = !1;
      if (
        !u.success &&
        (!u.skipRetry || u.errorCode === "parse_failed") &&
        r !== "api_refusal_trigger" &&
        Xe()
      ) {
        ke = this.staleFallbackSource();
        let b = r !== "api_success_trigger";
        if (ke === null) {
          if (((pt = this.armVerdictlessRetry()), b)) this.armNetworkKick();
        } else if (!this.hasLiveVerdict() && b) this.armNetworkKick();
      }
      let pe = x ? (u.response ?? p) : null;
      if (
        ((this.liveAnswer = pe === null ? void 0 : { jws: u.signature, bodySha: () => ne(pe) }),
        x && u.signature !== void 0 && ct !== void 0 && !this.livePrincipalChecked)
      )
        ((this.livePrincipalChecked = !0),
          Szr({
            kind: "policy-limits",
            jws: u.signature,
            trustedPrincipal: ct,
            gate: Ee ? "enforced" : "shadow"
          }));
      if (
        (a("tengu_policy_limits_fetch", {
          duration_ms: Ce - j,
          ms_since_startup: Ce - qe,
          success: x,
          had_cache: p !== null,
          cache_stamp: c(Xt),
          stored_copy: ut ? c(Zt) : void 0,
          stored_copy_gate: ut ? c(Ee ? "enforced" : "shadow") : void 0,
          cache_age_ms: C,
          attempts: u.attempts,
          prefetched: nt !== void 0,
          hedged: u.hedged === !0,
          restrictions_denied_count: pe
            ? F(Object.values(pe.restrictions), (b) => !b.allowed)
            : void 0,
          compliance_taint_count: pe ? (pe.compliance_taints?.length ?? 0) : void 0,
          is_load: e === "policy_limits_load",
          awaited: n,
          auth_type: c(O),
          error_code: ce(Me),
          token_source: c(Vt()),
          credential_road: c(phn()),
          ...Ye(),
          auth_unavailable_reason: ce(u.authUnavailableReason),
          token_refresh_outcome: O === "oauth" ? ce(u.tokenRefreshOutcome) : void 0,
          forced_refresh_outcome: O === "oauth" ? ce(u.forcedRefreshOutcome) : void 0,
          retried_after_401: u.retriedAfter401 ?? !1,
          http_status: u.httpStatus,
          parse_error_field: ce(u.parseErrorField),
          parse_error_content_type: ce(u.parseErrorContentType),
          server_error_type: ce(u.serverErrorType),
          server_error_code: ce(u.serverErrorCode),
          server_auth_denial: ce(u.serverAuthDenial),
          injected_token_recovery: ce(x ? void 0 : st),
          credential_state: ce(Ie),
          outcome_reason: c(lt),
          response_kind: x ? c(u.response === null ? "not_modified" : "body") : void 0,
          request_id_present: u.requestIdPresent,
          response_content_type: ce(u.responseContentType),
          fetch_trigger: c(r),
          verdictless_retry_scheduled: pt,
          error_errno: ce(u.errno),
          ...Fi()
        }),
        !x)
      ) {
        V({
          success: !1,
          host: se,
          httpStatus: u.httpStatus ?? null,
          errorCode: re,
          retrying: !1,
          credentialState: he,
          ...(u.serverErrorCode !== void 0 && { serverErrorCode: u.serverErrorCode })
        });
        let b = ke !== void 0 ? ke : this.staleFallbackSource();
        if (b) {
          t(
            Se
              ? "Policy limits: 304 with no outstanding ETag \u2014 using stale cache"
              : "Policy limits: Using stale cache after fetch failure"
          );
          let fe = Ut(b);
          if ((qGt(fe), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()))
            this.noteUnverifiedCycle(re, !0);
          return (f(e, Se ? "spurious_304" : "stale_cache_used", { credential_state: c(he) }), fe);
        }
        if (
          (u.httpStatus === 404 || u.httpStatus === 304) &&
          u0() === null &&
          !rZn() &&
          !k("tengu_rustling_orbit", !1)
        )
          return (
            t(
              `Policy limits: ${u.httpStatus} with no cache, no restrictions for this session (not persisted)`
            ),
            JGt(),
            k2o(),
            (this.serverConfirmedGeneration = K),
            this.disposeVerdictlessRetryTimer(),
            this.disarmNetworkKick(),
            this.recordVerdictPrincipal(A),
            f(e, u.httpStatus === 404 ? "route_missing_fail_open" : "unsolicited_304_fail_open", {
              credential_state: c(he)
            }),
            EKe
          );
        return (this.noteUnverifiedCycle(re, !1), m(e, re, { credential_state: c(he) }), null);
      }
      let we = u.response;
      if (we === null || we === void 0) {
        if (!p)
          return (de(), A7("policy", { ...Re, source: "error" }), m(e, "unexpected_error"), null);
        t("Policy limits: Cache still valid (304 Not Modified)");
        let b = p,
          fe = p.compliance_taints,
          ht = this.serverConfirmedGeneration === K ? (u0()?.compliance_taints ?? []) : [],
          xe = Ezr(Ttt(p)) > 0;
        if (xe && ht.some((ft) => !fe.includes(ft)))
          ((b = { ...p, compliance_taints: L([...ht, ...fe]).slice(0, Lwt) }),
            t("Policy limits: lossy cached compliance_taints \u2014 kept the session taint set"));
        if (Q) JGt();
        else Nzr();
        if (Q || xe) nZn(b);
        else khn(b);
        if (
          (Izr(Q ? null : (u.sentEnvBearerDigest ?? null)),
          this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch),
          (this.serverConfirmedGeneration = K),
          this.onLiveVerdict(r),
          this.recordVerdictPrincipal(A),
          V({ success: !0, host: se }),
          !yCe() && eZn(A))
        )
          try {
            if (
              (await Wsr(xx(), u.signature), !(await Gsr(xx(), this.cacheClearEpoch !== I)) && !Q)
            )
              await this.restampConfirmedCache(
                b,
                w,
                A,
                K,
                xe ? "prior_evidence" : "confirmed",
                C === void 0 ? 0 : Math.floor(S - C)
              );
          } catch {}
        return (A7("policy", Re), g(e), b);
      }
      let te = we;
      if (u.lossyComplianceTaints) {
        let b = [...(u0()?.compliance_taints ?? []), ...(p?.compliance_taints ?? [])];
        if (b.length > 0)
          ((te = { ...te, compliance_taints: L([...te.compliance_taints, ...b]).slice(0, Lwt) }),
            t("Policy limits: lossy compliance_taints \u2014 kept the known taint set"));
      }
      if (Q) JGt();
      else Nzr();
      if (Q || u.lossyComplianceTaints) nZn(te);
      else khn(te);
      (v2o(Ce),
        Izr(Q ? null : (u.sentEnvBearerDigest ?? null)),
        this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch),
        (this.serverConfirmedGeneration = K),
        this.onLiveVerdict(r),
        this.recordVerdictPrincipal(A),
        V({ success: !0, host: se }));
      let ei = vtt(),
        Le = Q
          ? "stale"
          : await this.saveCachedResponse(
              te,
              K,
              te === we ? u.signature : void 0,
              A,
              u.lossyComplianceTaints ? "prior_evidence" : "confirmed"
            );
      if (
        (A7("policy", Re),
        Le === "skipped" &&
          !eZn(A) &&
          !Q &&
          !yCe() &&
          p !== null &&
          w !== void 0 &&
          lZn() === "legacy" &&
          w !== ne(te))
      )
        await this.removeSupersededLegacyBody(p, w);
      if (this.sessionGeneration !== K) {
        if (Le !== "stale" && Le !== "skipped") {
          let b = await this.deleteCacheFile();
          if ((Thn(), !b))
            t(
              "Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save"
            );
        }
        if ((this.dropUnconfirmedSessionCache(), o && this.startupLoadState === "succeeded"))
          ((this.startupLoadState = "failed"),
            (this.startupLoadErrorCode = "session_changed"),
            (this.startupLoadCredentialState = void 0),
            (this.startupLoadHttpStatus = void 0),
            (this.startupLoadServerErrorType = void 0),
            (this.startupLoadServerErrorCode = void 0),
            (this.startupLoadServerAuthDenial = void 0),
            (this.startupLoadLastAttempt = void 0));
        return (f(e, "cycle_aborted"), u0());
      }
      if (Le === "saved" && vtt() === ei) sZn();
      if (
        (t(
          Object.keys(te.restrictions).length > 0
            ? "Policy limits: Applied new restrictions successfully"
            : "Policy limits: No restrictions (cached empty)"
        ),
        u.lossyComplianceTaints)
      )
        f(e, "lossy_compliance_taints");
      else g(e);
      return te;
    } catch {
      let u = this.sessionGeneration !== K,
        le = q && !J;
      if (le && e === "policy_limits_load" && !u)
        this.latestLoad = {
          succeeded: !1,
          errorCode: void 0,
          credentialState: void 0,
          httpStatus: void 0,
          serverErrorType: void 0,
          serverErrorCode: void 0,
          serverAuthDenial: void 0
        };
      if (o && (this.startupLoadState === "in_flight" || le))
        ((this.startupLoadState = "failed"),
          (this.startupLoadErrorCode = u ? "session_changed" : "unexpected_error"),
          (this.startupLoadCredentialState = void 0),
          (this.startupLoadOutcomeReason = void 0),
          (this.startupLoadHttpStatus = void 0),
          (this.startupLoadServerErrorType = void 0),
          (this.startupLoadServerErrorCode = void 0),
          (this.startupLoadServerAuthDenial = void 0),
          (this.startupLoadLastAttempt = void 0));
      if (
        (A7("policy", { source: u ? "superseded" : "error", hadCache: p !== null, awaited: n }),
        u || Y.aborted)
      )
        return (f(e, "cycle_aborted"), u0());
      if (!J) de();
      let ue = this.staleFallbackSource();
      if (ue) {
        t("Policy limits: Using stale cache after error");
        let ve = Ut(ue);
        if ((qGt(ve), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()))
          this.noteUnverifiedCycle("unexpected_error", !0);
        return (f(e, "stale_cache_used"), ve);
      }
      return (this.noteUnverifiedCycle("unexpected_error", !1), m(e, "unexpected_error"), null);
    }
  }
  hasLiveVerdict() {
    let e = u0();
    return e !== null && e !== EKe && this.serverConfirmedGeneration === this.sessionGeneration;
  }
  armVerdictlessRetry() {
    if (this.verdictlessRetry !== null) return !0;
    let e = this.verdictlessRetryStep,
      r = Gt[e];
    if (r === void 0 || !Mh()) return !1;
    this.verdictlessRetryStep = e + 1;
    let n = Math.round(r * (1 - Kt + 2 * Kt * Math.random())),
      o = this.sessionGeneration;
    t(
      `Policy limits: no verdict \u2014 accelerated retry ${e + 1}/${Gt.length} in ${Math.round(n / 1000)}s`
    );
    let s = Y7n(
      () => {
        if ((s[Symbol.dispose](), this.verdictlessRetry === s)) this.verdictlessRetry = null;
        if (this.sessionGeneration !== o) return;
        if (u0() !== null) return;
        this.poll("accelerated_retry").catch((p) => l(p));
      },
      n,
      { unref: !0 }
    );
    return ((this.verdictlessRetry = s), !0);
  }
  disposeVerdictlessRetryTimer() {
    (this.verdictlessRetry?.[Symbol.dispose](), (this.verdictlessRetry = null));
  }
  armNetworkKick() {
    if (this.stopNetworkWatch !== null) return;
    let e = this.sessionGeneration,
      r = Bt(() => {
        queueMicrotask(() => {
          if (this.stopNetworkWatch !== r) return;
          try {
            this.kickOnNetworkSuccess(e);
          } catch (n) {
            l(n);
          }
        });
      });
    this.stopNetworkWatch = r;
  }
  disarmNetworkKick() {
    (this.stopNetworkWatch?.(), (this.stopNetworkWatch = null));
  }
  kickOnNetworkSuccess(e) {
    if (this.sessionGeneration !== e) {
      this.disarmNetworkKick();
      return;
    }
    if (this.cyclesInFlight > 0) return;
    if ((this.disarmNetworkKick(), !Mh() || this.hasLiveVerdict())) return;
    (t("Policy limits: the API answered a request \u2014 re-fetching the org policy now"),
      this.poll("api_success_trigger").catch((r) => l(r)));
  }
  resetAcceleratedRecovery() {
    (this.disposeVerdictlessRetryTimer(),
      (this.verdictlessRetryStep = 0),
      this.disarmNetworkKick());
  }
  noteUnverifiedCycle(e, r) {
    if (this.verdictlessEpisode === null)
      this.verdictlessEpisode = {
        sinceMs: Date.now(),
        errorCode: e,
        failedCycles: 1,
        staleServed: r
      };
    else this.verdictlessEpisode.failedCycles++;
  }
  onLiveVerdict(e) {
    this.resetAcceleratedRecovery();
    let r = this.verdictlessEpisode;
    if (r === null) return;
    this.verdictlessEpisode = null;
    let n = Date.now(),
      o = Ai(e),
      s = r.errorCode;
    a("tengu_policy_limits_verdict_recovered", {
      ms_since_startup: n - qe,
      ms_verdictless: n - r.sinceMs,
      recovered_by: c(o),
      startup_error_code: c(s),
      attempts_before_recovery: r.failedCycles,
      was_stale_served: r.staleServed,
      fast_retry_enabled: Xe()
    });
  }
  gateSnapshot() {
    return this.policyGateSnapshot();
  }
  policyGateSnapshot() {
    if (this.gateSnapshotThisRun !== void 0) return this.gateSnapshotThisRun;
    let e = wV(),
      r = e === void 0,
      n = e === "custom_base_url" ? wV({ skipBaseUrlCheck: !0 }) === void 0 : r,
      o = Pw() !== null,
      s = r ? be() : void 0,
      p = this.hasLiveVerdict(),
      y = {
        ineligibleReason: e,
        eligible: r,
        eligibleIfBaseUrlGateRemoved: n,
        hasCache: o,
        cacheAgeMs: s,
        liveVerdict: p,
        wouldFailClosed: r && !p && (!o || (f0() === void 0 && (s ?? 1 / 0) > kbi)),
        loadState: this.startupLoadState,
        loadFromEarlierGeneration:
          this.startupLoadClaimed && this.startupLoadGeneration !== this.sessionGeneration,
        loadErrorCode: this.startupLoadErrorCode,
        loadCredentialState: this.startupLoadCredentialState,
        loadOutcomeReason: r ? this.startupLoadOutcomeReason : Knr(N_n(e)),
        loadHttpStatus: this.startupLoadHttpStatus,
        loadLastAttempt: this.startupLoadLastAttempt,
        latestLoad: this.latestLoad,
        loadServerErrorType: this.startupLoadServerErrorType,
        loadServerErrorCode: this.startupLoadServerErrorCode,
        loadServerAuthDenial: this.startupLoadServerAuthDenial,
        awaitResult: this.startupAwaitResult
      };
    return (
      (this.gateSnapshotThisRun = y),
      queueMicrotask(() => {
        this.gateSnapshotThisRun = void 0;
      }),
      y
    );
  }
  signatureFacts() {
    let e = this.storedCopyAtStart;
    return {
      storedCopy: e === void 0 || e === "not_read" ? "not_read" : cqt(e, this.storedCopyShadow),
      liveSigned: _zr({ kind: "policy-limits", answer: this.liveAnswer, account: uf() })
    };
  }
  managedConfigPolicyGateFields() {
    let e = this.policyGateSnapshot(),
      r = Ye();
    return {
      policy_ineligible_reason: ce(e.ineligibleReason),
      policy_eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      policy_cache_age_ms: e.cacheAgeMs,
      policy_would_fail_closed: e.wouldFailClosed,
      policy_live_verdict: e.liveVerdict,
      policy_load_state: c(e.loadState),
      policy_error_code: ce(e.loadErrorCode),
      policy_credential_state: ce(e.loadCredentialState),
      policy_outcome_reason: ce(e.loadOutcomeReason),
      policy_has_auth_token: r.has_auth_token,
      policy_has_api_key_helper: r.has_api_key_helper,
      policy_has_custom_base_url: r.has_custom_base_url,
      policy_api_provider: c(Ae()),
      policy_http_status: e.loadHttpStatus,
      policy_server_error_type: ce(e.loadServerErrorType),
      policy_server_error_code: ce(e.loadServerErrorCode),
      policy_server_auth_denial: ce(e.loadServerAuthDenial)
    };
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = !0;
    let e = this.policyGateSnapshot(),
      r = c(_2o());
    a("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: e.eligible,
      ineligible_reason: ce(e.ineligibleReason),
      eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      has_cache: e.hasCache,
      cache_age_ms: e.cacheAgeMs,
      would_fail_closed: e.wouldFailClosed,
      live_verdict: e.liveVerdict,
      token_source: c(Vt()),
      credential_road: c(phn()),
      ...Ye(),
      ms_since_startup: Date.now() - qe,
      load_state: c(e.loadState),
      startup_fetch_error_code: ce(e.loadErrorCode),
      startup_credential_state: ce(e.loadCredentialState),
      outcome_reason: ce(e.loadOutcomeReason),
      startup_await_result: c(e.awaitResult),
      error_reporting_gate: r
    });
  }
  async load({ startupAwaited: e = !1, singleAttempt: r = !1 } = {}) {
    if (r && this.cyclesInFlight > 0) {
      await Promise.allSettled([...this.unsettledCycles]);
      return;
    }
    return this.loadFor(r ? "accelerated_retry" : "load", e);
  }
  async loadFor(e, r = !1) {
    if (((this.used = !0), this.ensureCredentialWatch(), Mh() && !this.loadingCompletePromise))
      this.loadingCompletePromise = new Promise((o) => {
        this.loadingCompleteResolve = o;
      });
    let n = this.loadingCompleteResolve;
    try {
      if ((await this.fetchAndLoad("policy_limits_load", e, r), Mh()))
        this.startBackgroundPolling();
    } finally {
      if (n) {
        if ((n(), this.loadingCompleteResolve === n)) {
          if (((this.loadingCompleteResolve = null), this.loadingTimeoutId))
            (clearTimeout(this.loadingTimeoutId), (this.loadingTimeoutId = null));
        }
      }
    }
  }
  async refresh({ observedBoundary: e = !1 } = {}) {
    ((this.used = !0), this.stop(), this.ensureCredentialWatch(), this.initializeLoadingPromise());
    let r = Mh();
    if (e) await this.removeUnstampedBody();
    else if (!(await this.deleteCacheFile()))
      t(
        "Policy limits: could not remove the previous account's cache; disk adoption stays suppressed"
      );
    if ((this.dropUnconfirmedSessionCache(), !r)) return;
    (await this.loadFor("login_refresh"), t("Policy limits: Refreshed after auth change"));
  }
  async clearCache() {
    if (
      ((this.used = !0),
      this.stop(),
      (this.verdictlessEpisode = null),
      this.ensureCredentialWatch(),
      !(await this.deleteCacheFile()))
    )
      t(
        "Policy limits: could not remove the previous account's cache; disk adoption stays suppressed"
      );
    this.dropUnconfirmedSessionCache();
  }
  recordFetchOutcome(e, r, n, o, s) {
    if (this.sessionGeneration === e && this.cacheClearEpoch === r) Ozr(n, o, s);
  }
  staleFallbackSource() {
    if (iZn()) return u0();
    return XGt() ?? u0();
  }
  dropUnconfirmedSessionCache() {
    if (u0() !== null && this.serverConfirmedGeneration !== this.sessionGeneration) khn(null);
  }
  async deleteCacheFile() {
    if ((this.cacheClearEpoch++, yCe())) return !1;
    if ((ktt(await wtt(xx())), !(await this.removeBodyLeavingStamp()))) return !1;
    let r = await wtt(xx());
    if (r.kind === "unusable") return !0;
    let n = kzr(r, dZn());
    if (n.seen.length === 0 && !n.incomplete) await S7s(xx());
    else await Azr(xx(), b7s(n));
    return !0;
  }
  recordVerdictPrincipal(e) {
    if (e === null || ge(e)) {
      if (
        ((this.verdictPrincipalIdentity = e === null ? null : p_e(e)),
        (this.verdictPrincipalKind = e === null ? null : e.kind),
        (this.verdictKey = e === null ? null : oe(e)),
        e !== null)
      )
        this.askedKey = null;
    } else this.verdictKey = oe(e);
    (this.ensureCredentialWatch(), this.onCredentialMayHaveChanged());
  }
  isVerdictOfLiveCredential() {
    return this.verdictKey !== null && et() === this.verdictKey;
  }
  ensureCredentialWatch() {
    if (this.stopCredentialWatch === null)
      this.stopCredentialWatch = y2t(this.onCredentialMayHaveChanged);
    if (this.stopTunnelEpochWatch === null)
      this.stopTunnelEpochWatch = sti(this.onTunnelCredentialEpoch);
    if (this.stopRegimeRefusalWatch === null)
      this.stopRegimeRefusalWatch = gt(this.refetchAfterRegimeRefusal);
    if (this.stopKeyApprovalWatch === null)
      this.stopKeyApprovalWatch = x4o(this.onCredentialMayHaveChanged);
  }
  refetchAfterRegimeRefusal = () => {
    if (Ks("hipaa")) return Promise.resolve();
    if (this.regimeRefusalRefetch !== null) return this.regimeRefusalRefetch;
    let e = Date.now(),
      r =
        this.regimeRefusalRefetchStartedAtMs === void 0
          ? void 0
          : e - this.regimeRefusalRefetchStartedAtMs,
      n = r === void 0 || r < 0 || r >= wi;
    if (n)
      ((this.regimeRefusalRefetchStartedAtMs = e),
        t(
          "Policy limits: the API refused a request for an organization policy this session has not loaded \u2014 re-fetching it now"
        ));
    return (
      (this.regimeRefusalRefetch = Pe(
        (n ? this.poll("api_refusal_trigger") : Promise.resolve()).then(() =>
          Promise.allSettled([...this.unsettledCycles])
        ),
        ytt
      )
        .catch((o) => l(o))
        .then(() => {
          this.regimeRefusalRefetch = null;
        })),
      this.regimeRefusalRefetch
    );
  };
  onTunnelCredentialEpoch = (e) => {
    this.observeTunnelCredentialEpoch(e, "a model response", !0);
  };
  observeTunnelCredentialEpoch(e, r, n) {
    if (e === void 0 || f0() === void 0) return;
    let o = this.tunnelEpochSeen !== void 0;
    if (this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e;
    if (this.tunnelVerdictEpoch !== void 0 && e <= this.tunnelVerdictEpoch) return;
    if (!o && this.tunnelVerdictEpoch === void 0) return;
    let s = u0() !== null,
      p = n && this.tunnelRepolledForEpoch !== this.tunnelEpochSeen && this.cyclesInFlight === 0;
    if (!s && !p) return;
    if (
      (t(
        `Policy limits: the claude ssh launcher injects a different credential than the one this policy was fetched with (${r}); ${s ? "withholding client-only keys" : "no verdict held"}${p ? ", re-polling" : ""}`
      ),
      s)
    )
      JGt();
    if (p)
      ((this.tunnelRepolledForEpoch = this.tunnelEpochSeen),
        a("tengu_policy_limits_principal_changed", {
          next_kind: c("none"),
          reason: c("tunnel_credential")
        }),
        this.fetchAndLoad("policy_limits_poll", "credential_change").catch((y) => l(y)));
  }
  settleTunnelCredentialEpoch(e) {
    if (e === void 0 || f0() === void 0) return;
    if (
      ((this.tunnelVerdictEpoch = e), this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen)
    )
      this.tunnelEpochSeen = e;
  }
  isStaleTunnelCredentialEpoch(e) {
    return (
      e !== void 0 && this.tunnelEpochSeen !== void 0 && e < this.tunnelEpochSeen && f0() !== void 0
    );
  }
  onCredentialMayHaveChanged = () => {
    if (this.principalCheckQueued) return;
    ((this.principalCheckQueued = !0),
      queueMicrotask(() => {
        this.checkPrincipal().catch((e) => {
          l(e);
        });
      }));
  };
  async checkPrincipal(e = "credential_change") {
    let r = this.sessionGeneration;
    try {
      if (this.verdictPrincipalIdentity === null && u0() === null && Dzr() !== void 0)
        return "unchanged";
      try {
        await il(this.credentials);
      } catch {}
      if (I2o() && dR() === "store")
        try {
          await Lzr(this.storageV5, this.credentials);
        } catch (v) {
          t(`Policy limits: stored login origin or account record unreadable (${d(v)})`);
        }
    } finally {
      this.principalCheckQueued = !1;
    }
    if (this.sessionGeneration !== r) return "superseded";
    let n = VGt();
    if (n === "replaced" && pd()) return this.askAsHostManagedEnvBearer(e);
    if (n === "replaced" || n === "gone")
      return (
        t(
          "Policy limits: the env bearer the loaded policy was fetched with is no longer the wire credential; reloading as an account change"
        ),
        a("tengu_policy_limits_principal_changed", {
          next_kind: c("none"),
          reason: c("env_bearer")
        }),
        this.refresh({ observedBoundary: !0 }).catch((v) => l(v)),
        "changed"
      );
    let o = l9();
    if (o !== null && !ge(o)) this.scheduleUnclassifiedRecheck();
    if (!ge(o)) {
      if (o !== null && u0() !== null && oe(o) !== this.verdictKey && dR() === "store") {
        if (this.cyclesInFlight > 0) return ((this.principalCheckOwed = !0), "unchanged");
        let v = Oe(o);
        if (v !== this.askedKey)
          return (
            t(
              "Policy limits: the stored login in use is not the one the loaded policy was fetched with, and its account record has not settled; asking the server with it (keyed on the token until the record settles)"
            ),
            this.repollFor(o, v, "unattributed", e)
          );
      }
      if (o === null && n === null && Y2t() && Mh()) return this.askAsHostManagedEnvBearer(e);
      return "unchanged";
    }
    let s = p_e(o),
      p = this.verdictPrincipalKind === "token" && o.kind === "token";
    if (this.verdictPrincipalIdentity !== null && s !== this.verdictPrincipalIdentity && !p) {
      if (vli()) {
        let v = Oe(o),
          C = this.cyclesInFlight > 0;
        if (C && v === this.askedKey) return ((this.principalCheckOwed = !0), "unchanged");
        if (!C && v !== this.askedKey)
          return (
            t(
              `Policy limits: the credential now belongs to a different principal than the loaded policy; ${z9o} keeps the loaded verdict while the new principal's policy is fetched`
            ),
            a("tengu_policy_limits_principal_changed", {
              next_kind: c(o.kind),
              reason: c("identity_kept")
            }),
            (this.askedKey = v),
            this.fetchAcrossBoundaryKeepingVerdict(e).catch((S) => l(S)),
            "changed"
          );
      }
      return (
        t(
          "Policy limits: the credential now belongs to a different principal than the loaded policy; reloading as an account change"
        ),
        a("tengu_policy_limits_principal_changed", { next_kind: c(o.kind), reason: c("identity") }),
        this.refresh({ observedBoundary: !0 }).catch((v) => l(v)),
        "changed"
      );
    }
    if (this.cyclesInFlight > 0) return ((this.principalCheckOwed = !0), "unchanged");
    let y = oe(o),
      h = Oe(o);
    if (h === this.askedKey) return "unchanged";
    if (this.verdictPrincipalIdentity === null) {
      if (u0() === null) {
        if (!Mh() || this.loadingCompleteResolve !== null) return "unchanged";
        return (
          (this.askedKey = h),
          this.releaseLoadingPromise(),
          this.initializeLoadingPromise(),
          this.loadFor(e).catch((v) => l(v)),
          "started"
        );
      }
      return this.repollFor(o, h, "unattributed", e);
    }
    if (y !== this.verdictKey) {
      let v = (o.admitsOnly === !0) !== (this.verdictKey?.endsWith(zt) ?? !1),
        C = v
          ? o.admitsOnly === !0
            ? "snapshot_fallback"
            : "store_restored"
          : o.bearerDigest !== void 0 || p
            ? "bearer"
            : "reclassified";
      return (
        t(
          v
            ? `Policy limits: the login moved between the credential store and the daemon's snapshot of it (${C}); keeping the verdict and re-polling`
            : "Policy limits: a new bearer for the loaded policy (a declared organization's new bearer, one keyed on itself replacing another, a healed store); keeping the verdict and re-polling"
        ),
        this.repollFor(o, h, C, e)
      );
    }
    return "unchanged";
  }
  scheduleUnclassifiedRecheck() {
    if (this.unclassifiedRecheckTimer !== null) return;
    ((this.unclassifiedRecheckTimer = setTimeout(() => {
      ((this.unclassifiedRecheckTimer = null), this.onCredentialMayHaveChanged());
    }, Bi)),
      this.unclassifiedRecheckTimer.unref?.());
  }
  askAsHostManagedEnvBearer(e) {
    if (this.cyclesInFlight > 0) return ((this.principalCheckOwed = !0), "unchanged");
    let r = Jt($ce(U_() ?? ""));
    if (r === this.askedKey) return "unchanged";
    if (u0() !== null)
      return (
        (this.askedKey = r),
        a("tengu_policy_limits_principal_changed", { next_kind: c("none"), reason: c("bearer") }),
        this.fetchAndLoad("policy_limits_poll", e).catch((n) => l(n)),
        "repolled"
      );
    if (this.loadingCompleteResolve !== null) return "unchanged";
    return (
      (this.askedKey = r),
      this.releaseLoadingPromise(),
      this.initializeLoadingPromise(),
      this.loadFor(e).catch((n) => l(n)),
      "started"
    );
  }
  repollFor(e, r, n, o) {
    return (
      (this.askedKey = r),
      a("tengu_policy_limits_principal_changed", { next_kind: c(e.kind), reason: c(n) }),
      this.fetchAndLoad("policy_limits_poll", o).catch((s) => l(s)),
      "repolled"
    );
  }
  async fetchAcrossBoundaryKeepingVerdict(e) {
    let r = this.sessionGeneration,
      n = this.verdictPrincipalIdentity;
    (Thn(),
      QGt(),
      JGt(),
      this.prefetchSlot.clear(),
      this.renewOAuthRefreshLatch(),
      this.cyclesInFlight++);
    try {
      if ((await this.removeUnstampedBody().catch((o) => l(o)), this.sessionGeneration === r))
        await this.fetchAndLoad("policy_limits_poll", e).catch((o) => l(o));
    } finally {
      this.endCycle(r);
    }
    if (this.sessionGeneration !== r || this.verdictPrincipalIdentity !== n) return;
    (t(
      "Policy limits: the new principal's fetch installed nothing; dropping the previous principal's verdict as an account change"
    ),
      await this.refresh({ observedBoundary: !0 }));
  }
  async poll(e = "hourly_poll") {
    if (!Mh()) return;
    let r = u0(),
      n = r ? _(r) : null;
    try {
      if ((await this.checkPrincipal(e)) !== "unchanged") return;
      if (this.cyclesInFlight > 0) return;
      await this.fetchAndLoad("policy_limits_poll", e);
      let o = u0();
      if ((o ? _(o) : null) !== n) t("Policy limits: Changed during background poll");
    } catch {}
  }
  startBackgroundPolling() {
    if (((this.used = !0), this.poller !== null)) return;
    if (!Mh()) return;
    if (((this.poller = Y7n(() => void this.poll(), ki, { unref: !0 })), !this.cleanupRegistered))
      ((this.cleanupRegistered = !0), bt(() => this.stopBackgroundPolling()));
  }
  stopBackgroundPolling() {
    (this.poller?.[Symbol.dispose](), (this.poller = null), this.resetAcceleratedRecovery());
  }
}
class n7s {
  client = void 0;
}
var Abi = new W(() => new n7s());
function _e() {
  return Abi.of(U().host);
}
function B() {
  let e = _e();
  return ((e.client ??= new a2o()), e.client);
}
function l2o(e) {
  let r = _e();
  if (r.client === void 0) {
    r.client = new a2o(e);
    return;
  }
  let n = r.client.adoptStartupServices(e);
  switch (n) {
    case "nothing to adopt":
      t("Policy limits: default client already constructed; start-up composition skipped");
      return;
    case "already used":
      (t(
        "Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store",
        { level: "warn" }
      ),
        a("tengu_policy_limits_late_composition", {}));
      return;
    case "already composed":
      t("Policy limits: default client already composed; later start-up composition skipped");
      return;
    case "adopted":
      t("Policy limits: start-up services adopted by the default client");
      return;
    default:
  }
}
function LRi(e) {
  B().recordStartupAwaitResult(e);
}
async function vzr() {
  let e = performance.now(),
    r;
  try {
    let n = B();
    (n.ensureLoadRequested({ startupAwaited: !0 }), (r = await n.awaitColdStartVerdict()));
  } catch (n) {
    (l(n), (r = "timed_out"));
  }
  return (htt("policy", r, { since: e }), r);
}
function _hn() {
  return B().coldStartTimedOut;
}
function d2o() {
  return B().gateSnapshot();
}
function c2o() {
  return B().coldStartVerdictWait;
}
function vKe() {
  htt("policy", "not_awaited");
  try {
    if (Mh()) B().ensureLoadRequested({ startupAwaited: !1 });
  } catch (e) {
    l(e);
  }
}
async function _tt() {
  let e = performance.now();
  try {
    if (!DLe()) return (vKe(), "skipped");
  } catch (r) {
    return (l(r), htt("policy", "timed_out", { since: e }), "timed_out");
  }
  return vzr();
}
function NRi() {
  return B();
}
async function $Ri() {
  let e = _e().client;
  if (e !== void 0) await e._settleCyclesForTesting();
}
function FRi() {
  (B().stop(), sZn(), (_e().client = void 0), lai(), K2o(), R2o(), x2o());
}
function bhn() {
  B().initializeLoadingPromise();
}
function ze(e) {
  return gtt(e) !== void 0 ? e.serverErrorCode : void 0;
}
function Je(e) {
  return gtt(e) !== void 0 ? e.serverAuthDenial : void 0;
}
function u2o() {
  return B().signatureFacts();
}
function Dy() {
  return B().waitForLoad();
}
function f2o() {
  B().logCacheStateAtFirstPrompt();
}
function URi(e) {
  return B().admitPrefetched(e);
}
function p2o() {
  return _e().client?.isVerdictOfLiveCredential() ?? !1;
}
function Shn(e = {}) {
  return B().load(e);
}
function m2o() {
  B().prefetch();
}
function whn() {
  return B().refresh();
}
function g2o() {
  return B().clearCache();
}
function BRi() {
  B().startBackgroundPolling();
}
function jRi() {
  B().stopBackgroundPolling();
}
function WRi() {
  B().stop();
}
var Bi = Rzr + 1000;
function ge(e) {
  return e !== null && e.unclassified !== !0;
}
var zt = ":admits-only";
function oe(e) {
  let r = p_e(e),
    n = e.bearerDigest === void 0 ? r : `${r}:${e.bearerDigest}`;
  return e.admitsOnly === !0 ? `${n}${zt}` : n;
}
function et() {
  let e = l9();
  return e === null ? null : oe(e);
}
function Jt(e) {
  return `env-bearer:${e}`;
}
function Oe(e) {
  let r = Ln()?.accessToken;
  return `${oe(e)}#${r ? $ce(r) : ""}`;
}
export {
  phn,
  t2o,
  Y7n,
  mtt,
  KGt,
  mhn,
  ghn,
  gtt,
  a9,
  JQs,
  QQs,
  ZQs,
  A7,
  htt,
  hzr,
  hhn,
  e7s,
  yhn,
  yzr,
  X7n,
  _zr,
  bzr,
  Szr,
  n2o,
  J7n,
  Mwt,
  wzr,
  r2o,
  o2o,
  HRi,
  t7s,
  ytt,
  kbi,
  Tbi,
  DLe,
  s2o,
  i2o,
  a2o,
  n7s,
  Abi,
  l2o,
  LRi,
  vzr,
  _hn,
  d2o,
  c2o,
  vKe,
  _tt,
  NRi,
  $Ri,
  FRi,
  bhn,
  u2o,
  Dy,
  f2o,
  URi,
  p2o,
  Shn,
  m2o,
  whn,
  g2o,
  BRi,
  jRi,
  WRi
};

//# sourceMappingURL=chunk-gjpjdnzc.js.map
