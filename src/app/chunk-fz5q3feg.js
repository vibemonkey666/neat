// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { R, d, E } from "./chunk-fs43t96t.js";
import { Bu } from "./chunk-xc1j8sdj.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { J } from "./chunk-wrtp8qz8.js";
import { _, te, ie, t } from "./chunk-4kxznmzw.js";
import { yi, re } from "./chunk-a16y5hcz.js";
import { O, z$e } from "./chunk-19xvg81r.js";
import { p } from "./chunk-qmkm2x59.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Os, Dn } from "./chunk-qywdxehb.js";
import { vl, zg } from "./chunk-6xjawpfq.js";
import { g_ } from "./chunk-8w2npe9a.js";
import { it } from "./chunk-qmmh8tq2.js";
import { jt } from "./chunk-ajtyjx88.js";
import { Sl, o8o, Kn } from "./chunk-x8k0r295.js";
import { JV } from "./chunk-vbnb89qh.js";
import { M3n } from "./chunk-1ww4jg8j.js";
import { Vve } from "./chunk-hq9m7vnk.js";
import { o, oe, yt, me } from "./chunk-0bqrj5ah.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { hostname as De } from "os";
import {
  createPrivateKey as ye,
  createPublicKey as le,
  generateKeyPairSync as ue,
  sign as fe
} from "crypto";
import { randomBytes as q } from "crypto";
import { chmod as X } from "fs/promises";
import { dirname as F, join as Q } from "path";
var G = p(() => yt({ privateKeyPkcs8B64: o(), rowPk: o().optional() })),
  Z = p(() => yt({ keys: me(o(), oe()) }));
function u(e, r) {
  let n = e?.keys[r];
  if (n === void 0) return;
  let i = G().safeParse(n);
  return i.success ? i.data : void 0;
}
var K = Symbol("deviceKeyStore.NO_KEYCHAIN");
function v(e) {
  return e === Sl || e === K;
}
var I = "Claude Code-device-keys",
  b = 2000,
  U = 4032,
  ee = 44,
  ne = new Set([37, 50]);
function A(e) {
  try {
    let r = Z().safeParse(te(e));
    return r.success ? r.data : void 0;
  } catch {
    return;
  }
}
var x = Promise.resolve();
async function L(e, r) {
  let n = x,
    i = Promise.withResolvers();
  x = i.promise;
  try {
    await n;
    let s = F(e());
    await ie().mkdir(s);
    let a = await vl(Q(s, ".device-keys"), {
      realpath: !1,
      retries: { retries: 10, minTimeout: 100, maxTimeout: 1000 },
      stale: 15000,
      onCompromised: (c) => t(`[deviceKeyStore] write lock compromised: ${d(c)}`, { level: "warn" })
    });
    try {
      return await r();
    } finally {
      await zg(a, "[deviceKeyStore] write lock");
    }
  } finally {
    i.resolve();
  }
}
function se(e) {
  return {
    name: "file",
    async read() {
      let r = e(),
        n;
      try {
        n = await ie().readFile(r, { encoding: "utf8" });
      } catch (a) {
        let c = E(a);
        if (c === "ENOENT") return null;
        return (t(`[deviceKeyStore] file read failed: ${c ?? "unknown"}`, { level: "warn" }), Sl);
      }
      if (!n.trim()) return null;
      let i = A(n);
      if (i) return i;
      let s = `${r}.corrupt-${Date.now()}-${process.pid}-${q(3).toString("hex")}`;
      try {
        await Os(r, s);
      } catch (a) {
        return (
          t(
            `[deviceKeyStore] device-key file is not a device-key document and could not be set aside: ${E(a) ?? "unknown"}`,
            { level: "warn" }
          ),
          Sl
        );
      }
      return (
        t(
          `[deviceKeyStore] device-key file was not a device-key document; set aside as ${s} and starting fresh`,
          { level: "warn" }
        ),
        f("device_key_store", "corrupt_quarantined"),
        null
      );
    },
    async write(r) {
      let n = e();
      try {
        return (await ie().mkdir(F(n)), await Dn(n, _(r), 384), await X(n, 384), !0);
      } catch (i) {
        return (
          t(`[deviceKeyStore] file write failed: ${E(i) ?? "unknown"}`, { level: "warn" }),
          !1
        );
      }
    },
    withWriteLock(r) {
      return L(e, r);
    }
  };
}
function ae(e) {
  return {
    name: "keychain",
    async read() {
      let { stdout: r, code: n } = await it(
        "security",
        ["find-generic-password", "-a", JV(), "-w", "-s", I],
        { useCwd: !1, preserveOutputOnError: !1, timeout: b }
      );
      if (n === ee) return null;
      if (ne.has(n))
        return (
          t(
            `[deviceKeyStore] this account has no login keychain (security exited ${n}); it holds no device key`
          ),
          K
        );
      if (n !== 0)
        return (
          t(`[deviceKeyStore] keychain read failed: security exited ${n}`, { level: "warn" }),
          Sl
        );
      let i = r.trim();
      if (!i) return null;
      let s = A(i);
      if (!s)
        return (
          t("[deviceKeyStore] keychain item is not a device-key document", { level: "warn" }),
          Sl
        );
      return s;
    },
    async write(r) {
      let n = JV(),
        i = Buffer.from(_(r), "utf8").toString("hex"),
        s = `add-generic-password -U -a "${n}" -s "${I}" -X "${i}"
`;
      try {
        return (
          (s.length <= U
            ? await g_("security", ["-i"], {
                input: s,
                stdio: ["pipe", "pipe", "pipe"],
                reject: !1,
                timeout: b
              })
            : await g_("security", ["add-generic-password", "-U", "-a", n, "-s", I, "-X", i], {
                stdio: ["ignore", "pipe", "pipe"],
                reject: !1,
                timeout: b
              })
          ).exitCode === 0
        );
      } catch {
        return !1;
      }
    },
    withWriteLock(r) {
      return L(e, r);
    }
  };
}
var de = se(M3n),
  Xe = ae(M3n),
  ce = {
    name: "diskless",
    read: async () => Sl,
    write: async () => !1,
    withWriteLock: async () => {
      throw Error("This hosted session (claude-code-server) keeps no device key on its machine");
    }
  },
  B;
function D() {
  if (B) return B;
  if (J()) return ce;
  return de;
}
function P() {
  return ge;
}
var T = ve(new Set(), (e) => e.clear());
function z(e) {
  return e?.inMemory === !0 || (O() === "windows" && o8o());
}
var ge = {
  async load(e, r) {
    let n = await N(e, r, "load"),
      i = n && w(n.stored);
    return n && i ? C(e, n, i, r) : void 0;
  },
  async loadOrCreate(e, r) {
    let n = await N(e, r, "create");
    if (n) {
      let l = w(n.stored);
      if (l) return C(e, n, l, r);
      if (
        (t("[deviceKey] stored device key is unreadable; minting a new one"),
        n.location === "legacy")
      )
        await Y(e, n, r).catch((k) => {
          t(`[deviceKey] could not retire the unreadable device key: ${d(k)}`);
        });
    }
    let i = await ke(e, r),
      s = i && w(i.stored);
    if (i && s)
      return (
        t(
          `[deviceKey] adopting the device key already held in the ${i.location === "item" ? "device-key item" : "credentials store"}`
        ),
        C(e, i, s, r)
      );
    let a = {
        privateKeyPkcs8B64: ue("ec", { namedCurve: "P-256" })
          .privateKey.export({ type: "pkcs8", format: "der" })
          .toString("base64")
      },
      c;
    try {
      c = z(r) ? await pe(e, a, r) : await we(e, a);
    } catch (l) {
      throw l instanceof R
        ? l
        : new R(
            `deviceRegistry: device key could not be persisted (${d(l)})`,
            "deviceRegistry: device key not persisted",
            "key_not_persisted"
          );
    }
    let y = c && w(c.stored);
    if (!c || !y)
      throw new R(
        "deviceRegistry: device key could not be persisted",
        "deviceRegistry: device key not persisted",
        "key_not_persisted"
      );
    return C(e, c, y, r);
  }
};
function we(e, r) {
  let n = D();
  return n.withWriteLock(async () => {
    let i = await n.read();
    if (v(i)) return H(i);
    let s = u(i, e);
    if (s && w(s)) return { location: "item", stored: s };
    if (!(await n.write({ ...i, keys: { ...i?.keys, [e]: r } }))) {
      f("device_key_store", "item_write_failed");
      return;
    }
    let c = await n.read(),
      y = v(c) ? void 0 : u(c, e);
    if (!y) f("device_key_store", "readback_mismatch");
    return y && { location: "item", stored: y };
  });
}
async function pe(e, r, n) {
  await Kn().mutate((s) => {
    if (s.coworkRemoteDevice?.[e]) return s;
    return { ...s, coworkRemoteDevice: { ...s.coworkRemoteDevice, [e]: r } };
  }, n);
  let i = (await Kn().readAsync(n))?.coworkRemoteDevice?.[e];
  return i && { location: "legacy", stored: i };
}
async function N(e, r, n) {
  let i = (await Kn().readAsync(r))?.coworkRemoteDevice?.[e];
  if (z(r)) {
    if (i || r?.inMemory === !0) return i && { location: "legacy", stored: i };
    let c = await D().read(),
      y = v(c) ? void 0 : u(c, e);
    return y && { location: "item", stored: y };
  }
  let s = await D().read();
  if (v(s)) {
    if (i && w(i)) {
      if (s === Sl) f("device_key_store", "item_unreadable_using_legacy");
      return { location: "legacy", stored: i };
    }
    if (s === K && n === "load") return;
    return H(s);
  }
  let a = u(s, e);
  if (a) {
    if (i?.privateKeyPkcs8B64 === a.privateKeyPkcs8B64 && (n === "create" || !T.has(e)))
      await M(e, a.privateKeyPkcs8B64, r);
    return { location: "item", stored: a };
  }
  if (!i) return;
  if (n === "load" && T.has(e)) return { location: "legacy", stored: i };
  return { location: await _e(e, i, r), stored: i };
}
function H(e) {
  if (e === K)
    throw (
      f("device_key_store", "no_keychain"),
      new R(
        "deviceRegistry: this account has no login keychain to hold a device key",
        "deviceRegistry: no login keychain",
        "no_keychain"
      )
    );
  throw (
    f("device_key_store", "item_read_failed"),
    new R(
      "deviceRegistry: the device-key store could not be read",
      "deviceRegistry: device-key store unreadable",
      "key_store_unreadable"
    )
  );
}
async function ke(e, r) {
  if (r?.inMemory !== !0) {
    let i = await D().read();
    if (v(i)) return H(i);
    let s = u(i, e);
    if (s && w(s)) return { location: "item", stored: s };
  }
  let n = Kn();
  for (let i of [{ inaccessibleAs: "failure" }, void 0]) {
    let s = await (n.readAsyncStrict?.(r, i) ?? n.readAsync(r));
    if (s === Sl)
      throw (
        f("device_key_store", "legacy_read_failed"),
        new R(
          "deviceRegistry: the credentials store could not be read for a device key",
          "deviceRegistry: credentials store unreadable",
          "key_store_unreadable"
        )
      );
    let a = s?.coworkRemoteDevice?.[e];
    if (a && w(a)) return { location: "legacy", stored: a };
  }
  return;
}
async function _e(e, r, n) {
  let i,
    s = D();
  try {
    i = await s.withWriteLock(async () => {
      let a = await s.read();
      if (v(a)) return h(e, a === K ? "no_keychain" : "item_read_failed");
      if (u(a, e) === void 0) {
        if (!(await s.write({ ...a, keys: { ...a?.keys, [e]: r } })))
          return h(e, "item_write_failed");
      }
      let c = await s.read(),
        y = v(c) ? void 0 : u(c, e);
      if (y === void 0) return h(e, "readback_mismatch");
      if (y.privateKeyPkcs8B64 !== r.privateKeyPkcs8B64 || y.rowPk !== r.rowPk)
        return h(e, "readback_foreign_key");
      return "item";
    });
  } catch (a) {
    return (
      t(`[deviceKey] could not take the device-key lock to move the device key: ${d(a)}`),
      h(e, "lock_unavailable")
    );
  }
  if (i === "item") await M(e, r.privateKeyPkcs8B64, n);
  return i;
}
function h(e, r) {
  return (
    T.add(e),
    t(`[deviceKey] device key stays in the credentials store for now (${r})`),
    f("device_key_store", r),
    "legacy"
  );
}
async function M(e, r, n) {
  let i = !1;
  try {
    if (
      (
        await Kn().mutate((a) => {
          if (a.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== r) return a;
          i = !0;
          let { [e]: c, ...y } = a.coworkRemoteDevice;
          return { ...a, coworkRemoteDevice: y };
        }, n)
      ).success
    ) {
      if (i)
        (t("[deviceKey] moved the device key out of the credentials store into its own item"),
          g("device_key_store"));
      return;
    }
  } catch (s) {
    t(`[deviceKey] could not clear the legacy device key: ${d(s)}`);
  }
  h(e, "legacy_delete_failed");
}
function w(e) {
  try {
    let r = ye({ key: Buffer.from(e.privateKeyPkcs8B64, "base64"), format: "der", type: "pkcs8" });
    return r.asymmetricKeyType === "ec" && r.asymmetricKeyDetails?.namedCurve === "prime256v1"
      ? r
      : void 0;
  } catch {
    return;
  }
}
function C(e, { location: r, stored: n }, i, s) {
  return {
    rowPk: n.rowPk,
    publicKeySpkiB64: le(i).export({ type: "spki", format: "der" }).toString("base64"),
    sign: async (a) => fe("sha256", a, { key: i, dsaEncoding: "ieee-p1363" }),
    setRowPk: (a) =>
      j(
        e,
        { location: r, stored: n },
        (c) => {
          if (c.rowPk === a) return c;
          if (a === void 0) {
            let { rowPk: y, ...l } = c;
            return l;
          }
          return { ...c, rowPk: a };
        },
        s
      ),
    drop: () => Y(e, { location: r, stored: n }, s)
  };
}
async function j(e, { location: r, stored: n }, i, s) {
  if (r === "legacy") {
    await Kn().mutate((c) => {
      let y = c.coworkRemoteDevice?.[e];
      if (y?.privateKeyPkcs8B64 !== n.privateKeyPkcs8B64) return c;
      let l = i(y);
      if (l === y) return c;
      let { [e]: k, ...S } = c.coworkRemoteDevice ?? {};
      return { ...c, coworkRemoteDevice: l === void 0 ? S : { ...S, [e]: l } };
    }, s);
    return;
  }
  let a = D();
  await a.withWriteLock(async () => {
    let c = await a.read();
    if (v(c))
      throw new R(
        `deviceRegistry: the ${a.name} device-key store could not be read`,
        "deviceRegistry: device-key store unreadable"
      );
    let y = u(c, e);
    if (c === null || y?.privateKeyPkcs8B64 !== n.privateKeyPkcs8B64) return;
    let l = i(y);
    if (l === y) return;
    let { [e]: k, ...S } = c.keys;
    if (!(await a.write({ ...c, keys: l === void 0 ? S : { ...S, [e]: l } })))
      throw new R(
        `deviceRegistry: the ${a.name} device-key store refused the write`,
        "deviceRegistry: device-key store write refused"
      );
  });
}
function Y(e, r, n) {
  return j(
    e,
    r,
    () => {
      return;
    },
    n
  );
}
var Ke = "/api/organizations/:orgUUID/cowork/remote_devices",
  he = "cowork_remote_device_limit_reached",
  Se = "account_session_invalid",
  Pe = "cowork_remote_device_registration_revoked";
async function DAs(e, r) {
  return (await IZt(e, r))?.rowPk;
}
async function Qho(e, r) {
  let n = await P().load(e, r),
    i = Kt(n?.rowPk)?.toLowerCase();
  return n && i ? { rowPk: i, key: n } : void 0;
}
async function IZt(e, r, n) {
  if (n?.accountUuid === e) return n;
  let i = await Qho(e, r);
  return i && { accountUuid: e, ...i };
}
function Re() {
  return "linux";
}
function Ee(e) {
  return yi(e.trim(), 255) || yi(Fut().trim(), 255);
}
async function OZt(e, r, n, { relearn: i = !1 } = {}) {
  try {
    if (!Vve()) throw new A8e("client egress policy");
    return await Ce(e, r, n, i);
  } catch (s) {
    throw (
      m("device_registry_register", (s instanceof R && s.errorClass) || "unexpected_error"),
      s
    );
  }
}
async function Ce(e, r, n, i) {
  let s = await P().loadOrCreate(e, n);
  if (s.rowPk && !i) return (g("device_registry_register"), { deviceUUID: s.rowPk, key: s });
  let a = await jt
    .post(
      Ke,
      { display_name: Ee(r), platform: Re(), public_key: s.publicKeySpkiB64 },
      {
        auth: "teleport-org",
        headers: { "anthropic-beta": Bu },
        timeout: 1e4,
        validateStatus: () => !0,
        credentials: n
      }
    )
    .catch((k) => {
      throw new R(
        `deviceRegistry: register request failed (${d(k)})`,
        "deviceRegistry: register request failed",
        "request_failed"
      );
    });
  if (!a.ok)
    throw new R(
      `deviceRegistry: register not sent (${a.reason})`,
      "deviceRegistry: register not sent",
      "not_sent"
    );
  if (
    (t(
      `[deviceRegistry] register status=${a.status} request_id=${String(a.response.headers?.["request-id"] ?? "")}`
    ),
    a.status === 400 && a.data?.error?.details?.error_code === he)
  )
    throw new $ut();
  if ((a.status === 403 && a.data?.error?.details?.error_code !== Se) || a.status === 404)
    throw new A8e(`HTTP ${a.status}`);
  let c = a.data?.error?.details?.error_code;
  if (c === Pe || (a.status === 409 && c === void 0)) throw new KBe(s.publicKeySpkiB64);
  let y = Kt(a.data?.id);
  if (a.status !== 201 || y === null)
    throw new R(
      `deviceRegistry: register ${a.status}: ${re(String(_(a.data) ?? ""), 200)}`,
      "deviceRegistry: register HTTP error",
      "http_error"
    );
  if (a.data?.revoked_at !== null && a.data?.revoked_at !== void 0)
    throw new KBe(s.publicKeySpkiB64);
  let l = y.toLowerCase();
  return (
    await s.setRowPk(l).catch((k) => {
      t(`[deviceRegistry] registered device row=${l} but could not cache it: ${d(k)}`);
    }),
    t(`[deviceRegistry] registered device row=${l}`),
    g("device_registry_register"),
    { deviceUUID: l, key: s }
  );
}
class $ut extends R {
  constructor() {
    super(
      "deviceRegistry: account device limit reached",
      "deviceRegistry: account device limit reached",
      "limit_reached"
    );
  }
}
class A8e extends R {
  constructor(e) {
    super(
      `deviceRegistry: device registration unavailable for this account or organization (${e})`,
      "deviceRegistry: device registration unavailable for this account or organization",
      "registration_unavailable"
    );
  }
}
class KBe extends R {
  refusedPublicKey;
  constructor(e) {
    super(
      "deviceRegistry: this machine's device registration was removed from the account",
      "deviceRegistry: device registration revoked",
      "registration_revoked"
    );
    this.refusedPublicKey = e;
  }
}
async function HAs(e, r, n, i) {
  return (await W(e, n, i, 2), OZt(e, r, i, { relearn: !0 }));
}
async function W(e, r, n, i) {
  let s = await P().load(e, n);
  if (s?.publicKeySpkiB64 !== r) return;
  if (i === 0) throw V("it is still stored after being dropped");
  return (
    await s.drop().catch((a) => {
      throw V(d(a));
    }),
    W(e, r, n, i - 1)
  );
}
function V(e) {
  return new R(
    `deviceRegistry: the removed device's key could not be retired (${e})`,
    "deviceRegistry: device key not retired",
    "key_not_retired"
  );
}
async function fFn(e, r) {
  await (await P().load(e, r))?.setRowPk(void 0);
}
function Fut() {
  return `Claude Code on ${De()} \xB7 ${z$e("linux")}`;
}
export { DAs, Qho, IZt, OZt, $ut, A8e, KBe, HAs, fFn, Fut };

//# sourceMappingURL=chunk-fz5q3feg.js.map
