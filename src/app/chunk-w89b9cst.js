import {
  fileURLToPath as __sourceFilePath_a3291c1012c3440b,
  URL as __sourceFilePath_a3291c1012c3440b_URL
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
import { De } from "./chunk-2qx8pe6s.js";
import { U, ye } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { g, m } from "./chunk-brszmkb3.js";
import { roi, Hz, $i, Nx, kn, k, cS, N4r } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { jy, Cp, _, t } from "./chunk-4kxznmzw.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { z$e } from "./chunk-19xvg81r.js";
import { Mt } from "./chunk-adv24f35.js";
import { Fn } from "./chunk-dvghjmtr.js";
import { Kn } from "./chunk-x8k0r295.js";
import { U7s, s2r, i2r } from "./chunk-tzrn3e6a.js";
import { Ptt } from "./chunk-csks5ccj.js";
import { gr } from "./chunk-z2vz1f06.js";
import { Ds } from "./chunk-tdv74tcm.js";
import { hostname as j } from "os";
var a = "tengu_sessions_elevated_auth_enforcement",
  u = "require_trusted_devices",
  O = "tengu_sessions_elevated_auth_disable_proactive_enrollment",
  z = 300000,
  K = 86400000;
class P {
  storedTokenRead = void 0;
  lastEnrollAttemptAtMs = 0;
  automaticEnrollmentNoticePending = !1;
  automaticEnrollmentNoticeRaised = De();
  signInEnrollmentsInFlight = 0;
}
var v = new W(() => new P()),
  Ihn =
    "This computer was enrolled as a trusted device for your account (you will also get an email). If you did not expect this, review your devices in claude.ai settings.";
function Wzr() {
  let e = v.of(U().host),
    n = e.automaticEnrollmentNoticePending;
  return ((e.automaticEnrollmentNoticePending = !1), n);
}
function X2o(e) {
  return v.of(U().host).automaticEnrollmentNoticeRaised.subscribe(e);
}
function J2o() {
  if (Wzr())
    process.stderr.write(`${Ihn}
`);
}
var Wwt =
  "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function h_e() {
  return k(O, !1);
}
function N() {
  return import.meta.require(
    __sourceFilePath_a3291c1012c3440b(
      new __sourceFilePath_a3291c1012c3440b_URL("./chunk-g6pqvqm7.js", import.meta.url)
    )
  );
}
function E() {
  return import.meta.require(
    __sourceFilePath_a3291c1012c3440b(
      new __sourceFilePath_a3291c1012c3440b_URL("./chunk-b0q88bjg.js", import.meta.url)
    )
  );
}
function f9() {
  if (!k(a, !1)) return !1;
  return E().isPolicyAllowed(u);
}
function bCe() {
  if (!k(a, !1)) return !1;
  return E().isPolicyEnforced(u);
}
function Q2o() {
  if (!gr(a, { safe: !0 })) return !1;
  let e = E();
  return e.isPolicyEnforcedOrHintedByRefusedCache(u) || e.isPolicyVerdictAbsent();
}
function KRi() {
  return i.CLAUDE_CODE_REMOTE === !0 && !i.CLAUDE_TRUSTED_DEVICE_TOKEN && bCe();
}
var b =
    "not reachable with this tool from a cloud session: that session requires a trusted device, and this cloud session has none to show",
  Gzr = `${b}. Tell your user it was not sent; do not look for another tool to send it with`,
  Y = /^(?:cse|session)_[0-9A-Za-z_-]{1,128}$/;
function VRi(e, n) {
  let r = `Nothing was sent: Remote Control session '${e}' is`;
  return n === void 0 || !Y.test(n.sessionId)
    ? `${r} ${Gzr}.`
    : `${r} ${b}. This target may be reachable with ${n.sendTool}, the session service's own tool, if your user has allowed this cloud session to reach that computer; that session's id there is "${n.sessionId}". A tool of that name on any other server is not it.`;
}
function SCe() {
  if (!gr("tengu_bridge_attestation_enforce", { safe: !0 })) return s2r;
  if (!gr(a, { safe: !0 }) || !E().isPolicyEnforcedOrHintedByRefusedCache(u)) return s2r;
  return J();
}
var Z = "VERIFIED_KEYLESS_DEVICE",
  F = "tengu_bridge_attestation_enforce_config";
function J() {
  try {
    let { value: e, source: n } = kn(F, {});
    switch (n) {
      case "payload":
        return Nx() ? C(e, A()) : i2r(e);
      case "disk":
        return C(e, A());
      case "override":
        return C(e, L());
      default:
        return L();
    }
  } catch {
    return A();
  }
}
function L() {
  return $i() && !Nx() ? i2r(Hz()[F] ?? {}) : A();
}
function A() {
  return { enforce: !0, acceptLevel: Z, acceptStatuses: new Set() };
}
function C(e, n) {
  return { ...n, acceptLevel: U7s(i2r(e).acceptLevel, n.acceptLevel) };
}
function Ohn() {
  let e = v.of(U().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let n = Q();
  return ((e.storedTokenRead = n), n);
}
async function Q() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await Kn().readAsync())?.trustedDeviceToken;
}
async function Ow() {
  if (!f9() || roi()) return;
  return Ohn();
}
async function yZn() {
  if (!bCe()) return !1;
  if (await Ohn()) return !1;
  return !0;
}
async function X() {
  if (!(await yZn())) return null;
  if (h_e()) return Wwt;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function Z2o(e) {
  return (await cS(a), await zzr(e), X());
}
function Uce(e, n) {
  t(
    `${e} untrusted_device read as ${n.kind}${"subReason" in n ? ` (sub_reason ${Mt(n.subReason, 64)})` : ""}; not re-enrolling`
  );
}
function FU() {
  v.of(U().host).storedTokenRead = void 0;
}
async function Bce(e, n) {
  if (!f9()) return;
  FU();
  let r = await Ow();
  if (!r || r === e) {
    let o = await Lbi(r),
      h = v.of(U().host);
    if (o !== "none")
      t(
        o === "recent"
          ? "[trusted-device] The refused device token is one an earlier refusal enrolled; not enrolling again"
          : "[trusted-device] The stored time of the last enrollment after a refusal is unusable; not enrolling until a sign-in clears it"
      );
    else if (Date.now() - h.lastEnrollAttemptAtMs >= z)
      ((h.lastEnrollAttemptAtMs = Date.now()),
        await Mhn({ trigger: "server_denied", credentials: n }),
        (r = await Ow()));
  }
  if (!r || r === e) return;
  return (
    t(
      "[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry"
    ),
    r
  );
}
async function Lbi(e) {
  if (!e) return "none";
  let n = await Kn().readAsync(),
    r = n?.trustedDeviceEnrolledAfterRefusalAtMs;
  if (n?.trustedDeviceToken !== e || r === void 0) return "none";
  let o = Date.now();
  if (!Number.isSafeInteger(r) || r <= 0 || r > o) return "unusable";
  return o - r < K ? "recent" : "none";
}
async function tzt(e, n, r) {
  let o = await Bce(e, r);
  if (!o) return;
  return n(o);
}
var ee =
    "the server requires a trusted device, and trusted-device enrollment is not turned on for this session, so this computer was not enrolled. Try again in a few minutes; if it keeps failing, contact your administrator",
  eKo = "session expired for trusted-device check \u2014 run /login to re-authenticate";
function loe(e, n = { justEnrolled: !1 }) {
  if (e?.kind === "signature_wanted") return Ptt;
  if (!f9()) return ee;
  if (h_e()) return Wwt;
  return n.justEnrolled
    ? "this computer was just enrolled as a trusted device, but the server has not accepted it yet. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry"
    : "this computer is not a trusted device for your account yet, and it could not be enrolled automatically right now. Try again in a few minutes. If it keeps failing, sign in again with /login, then retry";
}
async function zzr(e) {
  if (!bCe()) return;
  if ((FU(), !(await yZn()))) return;
  if (h_e()) return;
  (t("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"),
    await Mhn({ lazy: !0, credentials: e }));
}
async function qRi(e) {
  if (!f9()) return Cp("trusted_devices_off");
  if ((FU(), await Ohn())) return jy(void 0);
  if (h_e()) return Cp("enrollment_paused");
  return (
    t("[trusted-device] Not enrolled, enrolling for a device-bound session"),
    await Mhn({ trigger: "device_bind", credentials: e }),
    (await Ow()) ? jy(void 0) : Cp("not_given")
  );
}
function tKo() {
  let { isClaudeAISubscriber: e } = import.meta.require(
    __sourceFilePath_a3291c1012c3440b(
      new __sourceFilePath_a3291c1012c3440b_URL("./chunk-8amfvyqf.js", import.meta.url)
    )
  );
  if (!Fn() || !e()) {
    _Zn();
    return;
  }
  if (h_e()) {
    _Zn();
    return;
  }
  (FU(),
    Kn()
      .mutate((n) =>
        n.trustedDeviceToken || n.trustedDeviceEnrolledAfterRefusalAtMs !== void 0
          ? { ...n, trustedDeviceToken: void 0, trustedDeviceEnrolledAfterRefusalAtMs: void 0 }
          : n
      )
      .catch(() => {}));
}
async function _Zn() {
  let e = Kn();
  if ((await e.readAsync().catch(() => null))?.trustedDeviceEnrolledAfterRefusalAtMs === void 0)
    return;
  await e
    .mutate((r) =>
      r.trustedDeviceEnrolledAfterRefusalAtMs === void 0
        ? r
        : { ...r, trustedDeviceEnrolledAfterRefusalAtMs: void 0 }
    )
    .catch(() => {});
}
function Nbi() {
  return x(k(a, !1));
}
async function YRi() {
  if (i.CLAUDE_CODE_REMOTE === !0) return "no_cloud_container";
  if (!w()) return "no";
  return (
    (await Pe(
      (async () => {
        let n = await cS(a);
        if (!n) return N4r(a) ? "no_gate_off" : "no";
        await N().waitForPolicyLimitsToLoad();
        let r = x(n),
          o = E();
        return r === "no" &&
          w() &&
          !o.isPolicyEnforced(u) &&
          (!o.isPolicyLimitsEligible() ||
            (o.isSessionVerdictFromServerFetch() && !o.isSessionVerdictDisowned()))
          ? "no_not_required"
          : r;
      })(),
      te
    ).catch(() => {
      return;
    })) ?? Nbi()
  );
}
var te = 5000;
function x(e) {
  if (!e || !w() || !E().isPolicyEnforced(u)) return "no";
  return h_e() ? "paused" : "enrolls";
}
function w() {
  let { isClaudeAISubscriber: e } = import.meta.require(
    __sourceFilePath_a3291c1012c3440b(
      new __sourceFilePath_a3291c1012c3440b_URL("./chunk-8amfvyqf.js", import.meta.url)
    )
  );
  return !(
    i.CLAUDE_CODE_REMOTE === !0 ||
    i.DISABLE_LOGIN_COMMAND ||
    !Fn() ||
    !e() ||
    process.env.CLAUDE_TRUSTED_DEVICE_TOKEN ||
    _t()
  );
}
async function Mhn({ trigger: e = "proactive", lazy: n = !1, credentials: r }) {
  let {
      isClaudeAISubscriber: o,
      isConsumerSubscriber: h,
      getClaudeAIOAuthTokens: H,
      checkAndRefreshOAuthTokenIfNeeded: M
    } = import.meta.require(
      __sourceFilePath_a3291c1012c3440b(
        new __sourceFilePath_a3291c1012c3440b_URL("./chunk-8amfvyqf.js", import.meta.url)
      )
    ),
    { loginToHandOn: V } = import.meta.require(
      __sourceFilePath_a3291c1012c3440b(
        new __sourceFilePath_a3291c1012c3440b_URL("./chunk-ays22ch0.js", import.meta.url)
      )
    );
  if (!Fn() || !o()) return;
  if (i.CLAUDE_CODE_REMOTE === !0) {
    t("[trusted-device] In a cloud container, skipping enrollment");
    return;
  }
  let T = v.of(U().host),
    D = e === "proactive" && !n;
  if (D) T.signInEnrollmentsInFlight++;
  try {
    if (!(await cS(a))) {
      t(`[trusted-device] Gate ${a} is off, skipping enrollment`);
      return;
    }
    if (h_e()) {
      t(`[trusted-device] Proactive enrollment disabled via ${O}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      t(
        "[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)"
      );
      return;
    }
    await N().waitForPolicyLimitsToLoad();
    let y = E(),
      I = y.isPolicyEnforced(u),
      B = e === "server_denied" || (e === "device_bind" && h());
    if (!(I || (B && y.isPolicyAllowed(u)))) {
      t(`[trusted-device] Org has not enabled ${u}, skipping enrollment`);
      return;
    }
    let p = { trigger: c(e), org_enforced: I };
    if (_t()) {
      t("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    await M({ credentials: r });
    let R = V(H())?.accessToken;
    if (!R) {
      t("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let G = rn().BASE_API_URL,
      f;
    try {
      f = await Ht.post(
        `${G}/api/auth/trusted_devices`,
        { display_name: `Claude Code on ${j()} \xB7 ${z$e("linux")}` },
        {
          headers: {
            "User-Agent": Ds(),
            Authorization: `Bearer ${R}`,
            "Content-Type": "application/json"
          },
          timeout: 1e4,
          validateStatus: (s) => s < 500
        }
      );
    } catch (s) {
      (t(`[trusted-device] Enrollment request failed: ${d(s)}`),
        m("bridge_trusted_device_enroll", "request_failed", p));
      return;
    }
    if (f.status !== 200 && f.status !== 201) {
      (t(`[trusted-device] Enrollment failed ${f.status}: ${_(f.data).slice(0, 200)}`),
        m("bridge_trusted_device_enroll", "http_error", p));
      return;
    }
    let S = f.data?.device_token;
    if (!S || typeof S !== "string") {
      (t("[trusted-device] Enrollment response missing device_token field"),
        m("bridge_trusted_device_enroll", "missing_token", p));
      return;
    }
    try {
      let s = await Kn().mutate((q) => ({
        ...q,
        trustedDeviceToken: S,
        trustedDeviceEnrolledAfterRefusalAtMs: e === "server_denied" ? Date.now() : void 0
      }));
      if (!s.success) {
        (t(`[trusted-device] Failed to persist token: ${s.warning ?? "unknown"}`),
          m("bridge_trusted_device_enroll", "storage_failed", p));
        return;
      }
      (FU(),
        t(`[trusted-device] Enrolled device_id=${f.data.device_id ?? "unknown"}`),
        g("bridge_trusted_device_enroll", p));
    } catch (s) {
      (t(`[trusted-device] Storage write failed: ${d(s)}`),
        m("bridge_trusted_device_enroll", "storage_failed", p));
      return;
    }
    if (D || T.signInEnrollmentsInFlight > 0) return;
    try {
      if (ye()) {
        if ((t(`[trusted-device] ${Ihn}`), process.stderr.isTTY))
          process.stderr.write(`${Ihn}
`);
      } else ((T.automaticEnrollmentNoticePending = !0), T.automaticEnrollmentNoticeRaised.emit());
    } catch (s) {
      l(s);
    }
  } catch (y) {
    (t(`[trusted-device] Enrollment error: ${d(y)}`),
      m("bridge_trusted_device_enroll", "unexpected_error", { trigger: c(e) }));
  } finally {
    if (D) T.signInEnrollmentsInFlight--;
  }
}
export {
  Ihn,
  Wzr,
  X2o,
  J2o,
  Wwt,
  h_e,
  f9,
  bCe,
  Q2o,
  KRi,
  Gzr,
  VRi,
  SCe,
  Ohn,
  Ow,
  yZn,
  Z2o,
  Uce,
  FU,
  Bce,
  Lbi,
  tzt,
  eKo,
  loe,
  zzr,
  qRi,
  tKo,
  _Zn,
  Nbi,
  YRi,
  Mhn
};

//# sourceMappingURL=chunk-w89b9cst.js.map
