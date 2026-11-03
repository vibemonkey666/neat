// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Pe } from "./chunk-4hww8411.js";
import { t } from "./chunk-4kxznmzw.js";
import { _t } from "./chunk-ewvf3tep.js";
import { HCe, Lh, il, oRe, gn, rA, O5, Jk } from "./chunk-ajtyjx88.js";
import { Sx } from "./chunk-nyp7c93y.js";
import { JL, SAe } from "./chunk-r5xsp8d0.js";
async function jyo(d) {
  let r = rA();
  if (r?.accountUuid)
    return { accountUuid: r.accountUuid, organizationUuid: r.organizationUuid || void 0 };
  if (!SAe() || _t()) return;
  let c = d(),
    o = c === void 0 ? void 0 : await gDt(c);
  if (o === void 0)
    t(
      "[bridge:owner-pin] daemon owner not declared: no bootstrap stamp, and the daemon credential is absent or was not attributed by the server in time \u2014 spawned sessions run the unverified inbox path",
      { level: "warn" }
    );
  return o;
}
var F = 1000,
  S = 300000,
  _ = 15000,
  R = 4,
  V = 1e4,
  H = 3000;
async function Wyo(d) {
  return Sx() === void 0 && JL() && (await Lh(d)) === "store";
}
async function vCs(d) {
  return (await Gyo(d)).pin;
}
async function Gyo({ getAccessToken: d, storageV5: r, credentials: c, presetOwner: o }) {
  let O = d();
  if (O === void 0) return { pin: void 0, reason: "no_token" };
  if (!SAe() || _t()) return { pin: void 0, reason: "disabled" };
  if (o === void 0 && !(await Wyo(c))) return { pin: void 0, reason: "not_store_login" };
  let k = await Jk(r),
    i,
    s = O,
    u = !1;
  if (o !== void 0) {
    i = { accountUuid: o.accountUuid, organizationUuid: o.organizationUuid || void 0 };
    let n = (await A(O)) ? "unknown" : await B(O);
    if (n === "foreign") return { pin: void 0, reason: "not_owner" };
    if (n === "unknown" && !a(k)) return { pin: void 0, reason: "unresolved" };
  } else {
    if (!k?.accountUuid) return { pin: void 0, reason: "no_identity" };
    i = { accountUuid: k.accountUuid, organizationUuid: k.organizationUuid || void 0 };
  }
  let D = o === void 0 ? rA() : void 0;
  if (D !== void 0 && !v(D) && !(await z()))
    return (
      t(
        "[bridge:owner-pin] identity sources disagree and the credential could not be validated \u2014 session runs unpinned"
      ),
      { pin: void 0, reason: "unresolved" }
    );
  let f,
    l,
    C = 0,
    P = "unchanged",
    g = 0,
    w,
    p,
    h,
    E = R;
  function a(n) {
    return (
      n !== void 0 &&
      Boolean(n.accountUuid) &&
      n.accountUuid === i.accountUuid &&
      (!n.organizationUuid || !i.organizationUuid || n.organizationUuid === i.organizationUuid)
    );
  }
  function v(n) {
    if (!a(n)) return !1;
    return (
      (i = {
        accountUuid: i.accountUuid,
        organizationUuid: i.organizationUuid ?? (n.organizationUuid || void 0)
      }),
      (u = !0),
      !0
    );
  }
  async function z() {
    let n = await gDt(s);
    if (n === void 0) return !1;
    return ((i = n), (u = !0), !0);
  }
  async function B(n) {
    let e = await gDt(n);
    if (e === void 0) return "unknown";
    if (!a(e)) return "foreign";
    return (
      (i = {
        accountUuid: i.accountUuid,
        organizationUuid: i.organizationUuid ?? e.organizationUuid
      }),
      (s = n),
      (u = !0),
      "owner"
    );
  }
  async function A(n) {
    let e = await il(c).catch(() => null);
    return e?.accessToken === n && e.expiresAt !== null && e.expiresAt <= Date.now();
  }
  function x() {
    if (!u && o !== void 0) return !0;
    if (!u) {
      let e = rA();
      if (e !== void 0 && !v(e)) return !0;
    }
    let n = gn();
    return Boolean(n?.accountUuid) && !a(n);
  }
  function T(n) {
    if (((C = Date.now() + n), (E = R), n > 0)) ((P = "unchanged"), (g = Date.now() + V));
  }
  function m(n) {
    if (((C = Date.now() + _), n === "inconclusive")) ((P = n), (g = Date.now() + V));
    if (w === void 0 || h !== void 0 || E === 0) return n;
    return (
      E--,
      (h = setTimeout(() => {
        h = void 0;
        try {
          if (x()) w?.();
        } catch {}
      }, _)),
      n
    );
  }
  async function N(n) {
    if (l !== void 0) await l;
    let e = void 0;
    if (!u && o !== void 0) {
      if (
        ((e = await oRe(r, c).catch(() => {
          return;
        })),
        e === void 0)
      )
        return m("inconclusive");
      let y = (await A(e.accessToken)) ? "unknown" : await B(e.accessToken);
      if (y === "foreign") return (T(0), "changed");
      if (y === "unknown") return m(a(e) ? "unchanged" : "inconclusive");
    } else if (!u) {
      let y = rA();
      if (!(y !== void 0 && v(y)) && !(await z())) return m("inconclusive");
    }
    if (
      ((e ??= await oRe(r, c).catch(() => {
        return;
      })),
      !e?.accountUuid)
    )
      return m(n ? "inconclusive" : "unchanged");
    let b = a(e);
    if (e.accessToken === s) return (T(b ? _ : S), "unchanged");
    let U = (await A(e.accessToken)) ? void 0 : await gDt(e.accessToken);
    if (U === void 0) return m("inconclusive");
    if (a(U))
      return (
        t(
          "[bridge:owner-pin] the server attributes the rotated credential to the owner \u2014 re-baselining"
        ),
        (i = {
          accountUuid: i.accountUuid,
          organizationUuid: i.organizationUuid ?? U.organizationUuid
        }),
        (s = e.accessToken),
        T(b ? _ : S),
        "unchanged"
      );
    return (T(0), "changed");
  }
  let I = {
    identityLooksChanged: x,
    confirmChanged(n) {
      if (n?.fresh) {
        g = 0;
        let e = f;
        if (e !== void 0) return e.then(() => I.confirmChanged({ fresh: !0 }));
      } else if (f === void 0 && Date.now() < g) return Promise.resolve(P);
      return (
        (f ??= N(n?.fresh === !0).finally(() => {
          f = void 0;
        })),
        f
      );
    },
    noteAcceptedToken(n) {
      let e = n !== s;
      if (((s = n), (g = 0), !e || l !== void 0 || !SAe())) return;
      l = Jk(r)
        .then(async (b) => {
          if (!b?.accountUuid || a(b)) return;
          let U = await z();
          t(
            U
              ? "[bridge:owner-pin] request accepted while the identity file names another account \u2014 re-pinned to the tenant the server attributes the credential to"
              : "[bridge:owner-pin] request accepted while the identity file names another account, but the credential could not be attributed \u2014 keeping the pinned owner"
          );
        })
        .finally(() => {
          l = void 0;
        });
    },
    ownerToken: () => s,
    ownerVerified: () => u,
    subscribe(n) {
      w = n;
      let e = O5(() => {
        try {
          if (Date.now() < C || !x()) return;
        } catch {
          return;
        }
        (clearTimeout(p),
          (p = setTimeout(() => {
            ((p = void 0), w?.());
          }, F)));
      });
      return () => {
        ((w = void 0), clearTimeout(p), (p = void 0), clearTimeout(h), (h = void 0), e());
      };
    }
  };
  return { pin: I };
}
async function gDt(d) {
  let r = await Pe(
    HCe(d).catch(() => {
      return;
    }),
    H
  );
  return r?.account_uuid
    ? { accountUuid: r.account_uuid, organizationUuid: r.organization_uuid || void 0 }
    : void 0;
}
export { jyo, Wyo, vCs, Gyo, gDt };

//# sourceMappingURL=chunk-fec3fags.js.map
