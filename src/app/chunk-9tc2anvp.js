// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { R, d } from "./chunk-fs43t96t.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { L } from "./chunk-wrtp8qz8.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f, fo } from "./chunk-brszmkb3.js";
import { jy, Cp, t } from "./chunk-4kxznmzw.js";
import { tI } from "./chunk-g49hnbqz.js";
import { _he, Lht } from "./chunk-6h7ejyet.js";
import { OZt, $ut, A8e, KBe, HAs, fFn, Fut } from "./chunk-fz5q3feg.js";
import { Zho, eyo } from "./chunk-e0pm2dx9.js";
import { Vve } from "./chunk-hq9m7vnk.js";
import { qve } from "./chunk-a6mzt5bz.js";
var zBe = "creg_",
  w = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function l1(e) {
  if (!Kt(e)) throw new R(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}
function P(e, n, i, r) {
  let s = Buffer.alloc(w.length + 48 + 8),
    o = 0;
  return (
    (o += w.copy(s, o)),
    (o += l1(e).copy(s, o)),
    (o += l1(n).copy(s, o)),
    (o += l1(i).copy(s, o)),
    s.writeBigUInt64BE(BigInt(r), o),
    s
  );
}
async function S(e, n, i, r) {
  let s = Date.now(),
    o = await r.sign(P(e, n, i, s));
  return {
    deviceUUID: i,
    kid: zBe + i,
    signature: o.toString("base64"),
    issuedAt: new Date(s).toISOString(),
    signedOver: { orgUuid: e, accountUuid: n, issuedAtMs: s }
  };
}
var A = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"),
  E = "00000000-0000-0000-0000-000000000000";
function T({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  expectedCurrentDeviceUuid: r,
  newDeviceUuid: s,
  issuedAtMs: o
}) {
  let u = Buffer.alloc(A.length + 80 + 8),
    l = 0;
  return (
    (l += A.copy(u, l)),
    (l += l1(e).copy(u, l)),
    (l += l1(n).copy(u, l)),
    (l += l1(i).copy(u, l)),
    (l += l1(r ?? E).copy(u, l)),
    (l += l1(s).copy(u, l)),
    u.writeBigUInt64BE(BigInt(o), l),
    u
  );
}
async function Yho({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  deviceUUID: r,
  key: s,
  now: o = Date.now
}) {
  let u = o(),
    l = await s.sign(
      T({
        orgUuid: e,
        accountUuid: n,
        sessionUuid: i,
        expectedCurrentDeviceUuid: void 0,
        newDeviceUuid: r,
        issuedAtMs: u
      })
    );
  return {
    deviceUUID: r,
    kid: zBe + r,
    signature: l.toString("base64"),
    issuedAt: new Date(u).toISOString()
  };
}
var H = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"),
  O = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"),
  x = /^[a-z0-9_.]{1,48}$/,
  F = 8;
function N(e) {
  return Buffer.concat([H, ...b(e), U(e.issuedAtMs)]);
}
function Skr(e) {
  let n = L(e).sort();
  return e.length >= 1 &&
    e.length <= F &&
    e.every((i) => x.test(i)) &&
    n.length === e.length &&
    n.every((i, r) => i === e[r])
    ? n
    : void 0;
}
function M(e, n) {
  if (Skr(n) === void 0)
    throw new R(
      "deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .",
      "deviceBind: malformed link capabilities"
    );
  return Buffer.concat([
    O,
    ...b(e),
    _(n.length),
    ...n.flatMap((i) => {
      let r = Buffer.from(i, "ascii");
      return [_(r.length), r];
    }),
    U(e.issuedAtMs)
  ]);
}
async function Xho({
  orgUuid: e,
  accountUuid: n,
  sessionUuid: i,
  deviceUUID: r,
  request: s,
  capabilities: o,
  key: u,
  now: l = Date.now
}) {
  let h = l(),
    p = { orgUuid: e, accountUuid: n, sessionUuid: i, deviceUuid: r, request: s, issuedAtMs: h },
    m = await u.sign(o === void 0 ? N(p) : M(p, o));
  return {
    deviceUUID: r,
    kid: zBe + r,
    signature: m.toString("base64"),
    issuedAt: new Date(h).toISOString()
  };
}
var C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");
function K(e, n) {
  let i = Buffer.from(n, "utf8");
  if (i.length === 0 || i.length > 65535)
    throw new R(
      "deviceBind: tool-host resume nonce must be 1 to 65535 bytes",
      "deviceBind: malformed resume nonce"
    );
  return Buffer.concat([C, ...b(e), _(i.length), i, U(e.issuedAtMs)]);
}
async function Jho({ deviceUUID: e, nonce: n, key: i, now: r = Date.now, ...s }) {
  let o = r(),
    u = await i.sign(K({ ...s, deviceUuid: e, issuedAtMs: o }, n));
  return {
    deviceUUID: e,
    kid: zBe + e,
    signature: u.toString("base64"),
    issuedAt: new Date(o).toISOString()
  };
}
async function q() {
  return (await I()).ok;
}
async function I() {
  let { trustedDeviceTokenForBind: e } = await import("./chunk-yad5vxrm.js");
  return e(void 0);
}
async function PZt(e) {
  if (e.launchedFromHome === void 0) await _he();
  if ((e.launchedFromHome ?? Lht)()) return Cp("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? Vve)();
  } catch {
    n = !1;
  }
  if (!n) return Cp("egress");
  let i = Zho({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : eyo(e.credentials))
  });
  if (i.status === "missing") return Cp("account");
  if (i.status === "mismatch") return Cp("account_mismatch");
  return (await (e.hasDeviceProof ?? q)().catch(() => !1))
    ? jy({ accountUuid: i.accountUuid, source: i.source })
    : Cp("no_device_proof");
}
async function kAi(e) {
  let n = e.isEnabled ?? tI;
  try {
    if (!(await n())) return Cp("gate");
  } catch (m) {
    return Cp(y("gate", m));
  }
  let i = "no_device_proof",
    r = await PZt({
      ...e,
      hasDeviceProof:
        e.hasDeviceProof ??
        (async () => {
          let m = await I();
          if (!m.ok && m.error !== "not_given") i = m.error;
          return m.ok;
        })
    });
  if (!r.ok) {
    let m = V(r.error);
    return r.error === "no_device_proof" ? Cp(i) : m;
  }
  a("tengu_device_bind_account", { source: c(r.value.source) });
  let { accountUuid: s } = r.value,
    o = e.displayName ?? Fut(),
    u = !1,
    l = async (m) => {
      try {
        return jy(await OZt(s, o, e.credentials, { relearn: m }));
      } catch (v) {
        if (!(v instanceof KBe) || e.confirmReenroll === void 0 || u) return Cp(y("register", v));
        return (
          (u = !0),
          (await j(e.confirmReenroll)) ? h(v.refusedPublicKey) : Cp(y("register", v))
        );
      }
    },
    h = async (m) => {
      try {
        return jy(await fo("device_reenroll", () => HAs(s, o, m, e.credentials), W));
      } catch (v) {
        return Cp(y("register", v));
      }
    },
    p = async (m) => {
      let v = await l(m);
      if (!v.ok) return v;
      let { deviceUUID: D, key: k } = v.value;
      return jy({
        deviceUUID: D,
        held: { accountUuid: s, rowPk: D, key: k },
        sign: async () => {
          try {
            let B = await S(e.orgUuid, s, D, k);
            return (g("device_bind"), B);
          } catch (B) {
            y("sign", B);
            return;
          }
        },
        reregister: async () => (
          await fFn(s, e.credentials).catch((B) => {
            t(
              `[deviceBind] could not forget the cached device id: ${B instanceof Error ? B.message : String(B)}`
            );
          }),
          p(!0)
        )
      });
    };
  return p(!1);
}
function b({ orgUuid: e, accountUuid: n, sessionUuid: i, deviceUuid: r, request: s }) {
  let o = Buffer.from(s.workId, "utf8"),
    u = Buffer.from(s.environmentId, "utf8");
  if (o.length === 0 || u.length === 0 || o.length > 65535 || u.length > 65535)
    throw new R(
      "deviceBind: tool-host link request ids must be 1 to 65535 bytes",
      "deviceBind: malformed link request"
    );
  return [l1(e), l1(n), l1(i), l1(r), _(o.length), o, _(u.length), u];
}
function _(e) {
  let n = Buffer.alloc(2);
  return (n.writeUInt16BE(e), n);
}
function U(e) {
  let n = Buffer.alloc(8);
  return (n.writeBigUInt64BE(BigInt(e)), n);
}
function V(e) {
  return (a("tengu_device_bind_skipped", { reason: c(e), ...qve(e) }), Cp(e));
}
async function j(e) {
  try {
    let n = await e();
    return (a("tengu_device_reenroll", { confirmed: n, prompt_failed: !1 }), n);
  } catch (n) {
    return (
      t(`[deviceBind] could not ask whether to register this machine again: ${d(n)}`),
      a("tengu_device_reenroll", { confirmed: !1, prompt_failed: !0 }),
      !1
    );
  }
}
function W(e) {
  return (e instanceof R && e.errorClass) || "unexpected_error";
}
function y(e, n) {
  return (
    a("tengu_device_bind_failed", {
      phase: c(e),
      limit_reached: n instanceof $ut,
      registration_unavailable: n instanceof A8e,
      revoked: n instanceof KBe
    }),
    f("device_bind", (n instanceof R && n.errorClass) || e),
    t(`[deviceBind] continuing unbound: ${n instanceof Error ? n.message : String(n)}`),
    n instanceof $ut
      ? "limit_reached"
      : n instanceof A8e
        ? "registration_unavailable"
        : n instanceof KBe
          ? "device_revoked"
          : n instanceof R && n.errorClass === "no_keychain"
            ? "no_keychain"
            : e
  );
}
export { zBe, l1, Yho, Skr, Xho, Jho, PZt, kAi };

//# sourceMappingURL=chunk-9tc2anvp.js.map
