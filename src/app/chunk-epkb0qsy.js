// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { bt, t } from "./chunk-4kxznmzw.js";
import { yHs, yzn, _zn, _Hs } from "./chunk-j0tbz6ra.js";
import { IZt } from "./chunk-fz5q3feg.js";
import { ras, nwe } from "./chunk-akv19aq7.js";
import { sho, iho } from "./chunk-dezjyrb9.js";
import { dzt } from "./chunk-g49hnbqz.js";
import { H5t } from "./chunk-avkpceps.js";
import { Jq } from "./chunk-x1n0c69j.js";
import { _me } from "./chunk-e0pm2dx9.js";
import { Vve } from "./chunk-hq9m7vnk.js";
async function NQr(e) {
  let i = e.session.then(
    (r) => ({ read: !0, session: r }),
    (r) => ({ read: !1, error: r })
  );
  if (!(await (e.isEnabled ?? dzt)().catch(() => !1))) return { status: "disabled" };
  let o = await i;
  if (!o.read) return B("session_unreadable", o.error);
  if (o.session.archived) return { status: "disabled" };
  if (o.session.boundDeviceId === void 0) {
    let r = await (e.readUnboundCreateReason ?? ((A) => sho(A, yHs, iho(e.storageV5))))(
      e.sessionId
    ).catch(() => {
      return;
    });
    return (
      a("tengu_device_bind_attach", { outcome: b("session_unbound"), created_here: r !== void 0 }),
      r === void 0 ? { status: "not_applicable" } : { status: "created_unbound", reason: r }
    );
  }
  let s;
  try {
    s = (e.isEgressAllowed ?? Vve)();
  } catch {
    s = !1;
  }
  if (!s) return y("egress");
  let n = await (e.getAccount?.() ?? _me(e.credentials));
  if (n.status === "missing") return y("account");
  if (n.status === "mismatch") return y("account_mismatch");
  let l = await (e.loadLocalDevice?.(n.accountUuid) ?? IZt(n.accountUuid, e.credentials)).then(
    (r) => ({ read: !0, held: r }),
    (r) => ({ read: !1, error: r })
  );
  if (!l.read) return B("local_device_unreadable", l.error);
  if (l.held === void 0) return y("no_device_here");
  let v = l.held.rowPk.toLowerCase();
  if (v !== o.session.boundDeviceId.toLowerCase()) return y("other_device");
  let { toolHostLink: h } = o.session;
  return (
    a("tengu_device_bind_attach", { outcome: b("bound"), tool_host_link: c(h) }),
    g("device_bind_attach"),
    { status: "bound", deviceId: v, held: l.held, toolHostLink: h }
  );
}
function $Qr(e) {
  return {
    archived: e.session_status === "archived",
    boundDeviceId: e.bound_device_uuid,
    toolHostLink: ras(e.tool_host_status, e.device_bind_posture)
  };
}
async function nEi(e, { isEnabled: i = dzt, isEgressAllowed: o = Vve } = {}) {
  if ((e.catch(() => {}), !(await i().catch(() => !1)))) return;
  let { archived: s, boundDeviceId: n } = await e;
  if (s) return;
  try {
    return o() ? n : void 0;
  } catch {
    return;
  }
}
function FQr(e) {
  return e.then(
    (i) => i.status === "bound",
    () => !1
  );
}
function UQr(e) {
  return e.then(
    (i) => (i.status === "bound" ? i.deviceId : void 0),
    () => {
      return;
    }
  );
}
function BQr(e) {
  return e.then(
    (i) => (i.status === "bound" ? i.held : void 0),
    () => {
      return;
    }
  );
}
function k({ viewerOnly: e, binding: i }) {
  return !e && i.status === "bound" && nwe(i.toolHostLink)
    ? { owner: !0, deviceId: i.deviceId }
    : { owner: !1 };
}
async function dur(e, i) {
  try {
    let o = await i();
    return (
      o.session_status !== "archived" &&
      typeof o.bound_device_uuid === "string" &&
      o.bound_device_uuid.toLowerCase() === e.toLowerCase()
    );
  } catch (o) {
    t(`[attachBinding] re-reading the session's binding failed (keeping it): ${d(o)}`);
    return;
  }
}
async function rEi({
  sessionId: e,
  binding: i,
  deviceBridge: o,
  onNotice: s,
  repositoryTrust: n,
  readSession: l
}) {
  return (await import("./chunk-d6yrb8bq.js")).servedToolsAttachOptions({
    owner: i.then(
      (v) => {
        let h = k({ viewerOnly: !1, binding: v });
        return () => h;
      },
      () => () => ({ owner: !1 })
    ),
    cloudClient: !0,
    ...(o && { deviceBridge: o }),
    ...(s && { onNotice: s }),
    ...(n && { repositoryTrust: n }),
    stillBound: () =>
      i.then(
        (v) => (v.status === "bound" ? dur(v.deviceId, l) : void 0),
        () => {
          return;
        }
      ),
    plumbing: (await import("./chunk-f6gwzv77.js")).servedSessionPlumbing(e)
  });
}
var jQr =
  "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";
function WQr(e, i = {}) {
  let o = { status: "disabled" },
    s = (u, p) => t(`[remote-tools] ${u}: ${p}`),
    n = [],
    l = (u) => {
      let p = n ?? [];
      ((n = void 0),
        p.forEach(([_, D]) => {
          try {
            u(_, D);
          } catch {
            s(_, D);
          }
        }));
    },
    v = i.onNotice ?? s,
    h = !1,
    r,
    A,
    S = e
      .catch((u) => (t(`[deviceBind] attach binding failed unexpectedly: ${d(u)}`), o))
      .then(async (u) => {
        if (u.status !== "bound" || nwe(u.toolHostLink)) return u;
        if (h) return o;
        let p = i.loadHoldSettings
          ? await i.loadHoldSettings()
          : (await import("./chunk-75086jy2.js")).holdSettingsBesideAHelper;
        if (h) return o;
        return (
          (r = p((_, D) => (n ? void n.push([_, D]) : v(_, D)))),
          (A = bt(async () => r?.end())),
          l(v),
          u
        );
      });
  return (
    S.then(
      () => {
        if (r !== void 0) g("attach_settings_held_beside_helper");
      },
      (u) => {
        (m("attach_settings_held_beside_helper", "hold_failed"),
          l(s),
          t(
            `[deviceBind] attach could not hold the settings beside the session's helper: ${d(u)}`
          ));
      }
    ).catch(() => {}),
    {
      binding: S.catch(() => o),
      kept: S.then(
        () => !0,
        () => !1
      ),
      end: () => {
        ((h = !0), A?.(), r?.end());
      }
    }
  );
}
function GQr(e) {
  let i = e.binding.catch(
      (n) => (t(`[deviceBind] attach binding failed unexpectedly: ${d(n)}`), { status: "disabled" })
    ),
    o = !1,
    s;
  return (
    i
      .then((n) => {
        if (o || n.status !== "bound" || !nwe(n.toolHostLink)) return;
        s = (e.startRegistration ?? H5t)({
          sessionId: e.sessionId,
          getAccessToken: e.getAccessToken,
          orgUuid: e.orgUuid,
          getDeviceId: () => n.deviceId,
          cloudClient: e.cloudClient,
          storageV5: e.storageV5,
          ...(e.dirSync !== void 0 && { dirSync: e.dirSync }),
          ...(e.folderRelation !== void 0 && { folderRelation: e.folderRelation }),
          ...(e.onNotice && { onNotice: e.onNotice }),
          ...(e.servedSettingsChanged && { servedSettingsChanged: e.servedSettingsChanged }),
          ...(e.deviceMcpQuestion && { deviceMcpQuestion: e.deviceMcpQuestion })
        });
      })
      .catch((n) => {
        t(`[deviceBind] attach could not start the device registration: ${d(n)}`);
      }),
    {
      announceSettled: (n) => s?.announceSettled(n),
      serving: i.then(() => s?.serving),
      notice: i.then((n) =>
        n.status === "unbound"
          ? { text: _zn(n.reason), toast: !0 }
          : n.status === "created_unbound"
            ? { text: yzn(n.reason), toast: !0 }
            : n.status === "bound" && e.toolServingOn && !nwe(n.toolHostLink)
              ? _Hs(n.toolHostLink)
              : void 0
      ),
      stop: async () => {
        ((o = !0), await s?.stop());
      },
      heldServedCall: (n) => s?.heldServedCall(n) ?? Jq
    }
  );
}
function y(e) {
  return (
    a("tengu_device_bind_attach", { outcome: c(e) }),
    f("device_bind_attach", e),
    { status: "unbound", reason: e }
  );
}
function B(e, i) {
  if ((a("tengu_device_bind_attach", { outcome: c(e) }), e === "session_unreadable"))
    f("device_bind_attach", e);
  else m("device_bind_attach", e);
  return (
    t(`[deviceBind] attach could not check the session's binding (${e}): ${d(i)}`),
    { status: "unbound", reason: e }
  );
}
export { NQr, $Qr, nEi, FQr, UQr, BQr, dur, rEi, jQr, WQr, GQr };

//# sourceMappingURL=chunk-epkb0qsy.js.map
