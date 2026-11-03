// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { es } from "./chunk-wrtp8qz8.js";
import { d, G } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { Nfi } from "./chunk-4nzy53ma.js";
import { p } from "./chunk-qmkm2x59.js";
import { os } from "./chunk-jtb5bzvb.js";
import { _I, pe, Gp, ife } from "./chunk-7c3thgax.js";
import { Xmo } from "./chunk-jkhyqma9.js";
import { g_e } from "./chunk-fcym4pv0.js";
import { o, u, B, A } from "./chunk-0bqrj5ah.js";
import { homedir as U, hostname as S } from "os";
import { dirname as y, join as P } from "path";
function VW(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var $Nn = 1,
  FNn = "unattended-serving:v1:auto-arm-classifier",
  D = "unattended-serving-consent.json",
  T = p(() =>
    u({
      version: A($Nn),
      choice: B(["accepted", "declined"]),
      terms: o(),
      decidedAt: o(),
      hostname: o()
    })
  );
function g() {
  return P(U(), ".claude", "state", D);
}
function _Mt(e = S()) {
  return g_e(VW(e));
}
function lEr() {
  return `change it in /config, or delete ${os(g())} to be asked again`;
}
function h() {
  return {
    readText: async () => {
      try {
        return await hn().read(g());
      } catch (e) {
        if (G(e)) return;
        throw e;
      }
    },
    writeText: async (e) => {
      let n = g();
      (await hn().mkdir(y(n), 448), await hn().atomicWrite(n, e, 384));
    },
    now: () => new Date(),
    hostname: S
  };
}
async function RBe(e) {
  let n = e === void 0 ? i() : void 0,
    r = Date.now(),
    a = n?.writes,
    { choice: s, unreadable: v, staleYes: f } = await E(e ?? h()),
    l = n !== void 0 && _I() && (await Xmo(Nfi())),
    m = l && (await fEr({ start: !0 })).confined;
  if (n !== void 0 && a === n.writes && (n.view === void 0 || !c(n) || r >= n.view.readAt)) {
    if (
      ((n.view = {
        choice: s,
        readAt: r,
        unreadable: v,
        staleYes: f === !0,
        hostAllows: m,
        grantOutsideSandbox: l && !m
      }),
      c(n))
    )
      n.staleUnresolved = !1;
  }
  return s;
}
async function E(e) {
  let n;
  try {
    n = await e.readText();
  } catch (r) {
    return (
      t(`unattended-serving consent: store unreadable (${d(r)})`, { level: "warn" }),
      { choice: "unset", unreadable: !0 }
    );
  }
  if (n === void 0) return { choice: "unset", unreadable: !1 };
  try {
    let r = T().safeParse(te(n));
    if (!r.success) return { choice: "unset", unreadable: !0 };
    let a =
      r.data.choice === "declined" ||
      (VW(r.data.hostname) === VW(e.hostname()) && r.data.terms === FNn);
    return {
      choice: a ? r.data.choice : "unset",
      unreadable: !1,
      staleYes: !a && r.data.choice === "accepted"
    };
  } catch {
    return { choice: "unset", unreadable: !0 };
  }
}
async function xBe(e, n) {
  if (e === "accepted" && u4())
    return (
      t(
        "unattended-serving consent: a Yes while settings turn unattended serving off is not stored",
        { level: "warn" }
      ),
      !1
    );
  let r = n === void 0 ? i() : void 0,
    a = n ?? h();
  try {
    if (
      (await a.writeText(
        _(
          {
            version: $Nn,
            choice: e,
            terms: FNn,
            decidedAt: a.now().toISOString(),
            hostname: VW(a.hostname())
          },
          null,
          2
        ) +
          `
`
      ),
      r !== void 0)
    )
      ((r.writes += 1),
        (r.view = {
          choice: e,
          readAt: Date.now(),
          unreadable: !1,
          staleYes: !1,
          hostAllows: r.view?.hostAllows === !0,
          grantOutsideSandbox: r.view?.grantOutsideSandbox === !0
        }),
        (r.staleUnresolved = !1));
    return !0;
  } catch (s) {
    return (t(`unattended-serving consent: answer not saved (${d(s)})`, { level: "warn" }), !1);
  }
}
var N = 3000,
  M = new W(() => ({
    view: void 0,
    refresh: void 0,
    refreshStartedAt: void 0,
    abandoned: void 0,
    staleUnresolved: !1,
    writes: 0
  }));
function i() {
  return es(M);
}
function iJ() {
  let e = i();
  if (!c(e)) x(e);
  return e.view?.choice ?? "unset";
}
function c(e, n = Date.now()) {
  if (e.view === void 0) return !1;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}
function gut(e = Date.now()) {
  return c(i(), e);
}
var b = 1500;
async function bMt(e) {
  let n = i();
  if (c(n)) return;
  let r = x(n),
    a,
    s,
    v =
      e?.aborted === !0
        ? Promise.resolve("gave_up")
        : new Promise((f) => {
            ((a = setTimeout((l) => l("gave_up"), b, f)),
              (s = () => f("gave_up")),
              e?.addEventListener("abort", s, { once: !0 }));
          });
  if ((await Promise.race([r, v]), clearTimeout(a), s !== void 0))
    e?.removeEventListener("abort", s);
  if (!c(n)) ((n.staleUnresolved = !0), w(n, r));
}
function w(e, n) {
  if (e.refresh !== n || e.abandoned !== void 0) return !1;
  return (
    (e.refresh = void 0),
    (e.refreshStartedAt = void 0),
    (e.abandoned = n),
    n.finally(() => {
      if (e.abandoned === n) e.abandoned = void 0;
    }),
    !0
  );
}
function x(e) {
  if (e.refresh !== void 0) {
    if (
      (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= b) ||
      !w(e, e.refresh)
    )
      return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let n = RBe()
    .catch(() => {
      return;
    })
    .finally(() => {
      if (e.refresh === n) ((e.refresh = void 0), (e.refreshStartedAt = void 0));
    });
  return ((e.refresh = n), n);
}
function dEr() {
  return iJ() === "accepted";
}
function u4() {
  return cEr() !== void 0;
}
function cEr() {
  let e = (n) => n?.remoteTools?.allowUnattendedServing === !1;
  return Gp().some(e) || ife().some(e) || e(pe("policySettings"))
    ? "managed"
    : e(pe("userSettings"))
      ? "user"
      : void 0;
}
function D7t() {
  iJ();
}
function uEr() {
  let { view: e } = i();
  return e?.unreadable === !0 || e?.staleYes === !0;
}
function qmo() {
  return i().view?.unreadable === !0;
}
async function fEr({ start: e }) {
  try {
    let {
      classifyDeviceSandboxPosture: n,
      ensureDeviceSandboxPosture: r,
      readDeviceSandboxSnapshot: a
    } = await import("./chunk-yspwdm66.js");
    return e ? await r() : n(a(), { requireStarted: !1 });
  } catch (n) {
    return (
      t(
        `unattended-serving consent: command sandbox could not be asked, taken as not confining (${d(n)})`,
        { level: "warn" }
      ),
      { confined: !1, reason: "sandbox_failed_to_start" }
    );
  }
}
function O() {
  return i().view?.hostAllows === !0;
}
function Ymo() {
  let e = i();
  return !e.staleUnresolved && e.view?.grantOutsideSandbox === !0;
}
function C(e, n) {
  return n && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}
function d8e() {
  try {
    let e = i();
    return !u4() && !e.staleUnresolved && C(e, e.view?.hostAllows === !0);
  } catch {
    return !1;
  }
}
function SMt(e) {
  try {
    let n = dEr(),
      r = i();
    return u4() || r.staleUnresolved || (!n && !C(r, e ?? O()));
  } catch (n) {
    return (
      t(`unattended-serving consent: read failed, call treated as unconsented (${d(n)})`, {
        level: "warn"
      }),
      !0
    );
  }
}
export {
  VW,
  $Nn,
  FNn,
  _Mt,
  lEr,
  RBe,
  xBe,
  iJ,
  gut,
  bMt,
  dEr,
  u4,
  cEr,
  D7t,
  uEr,
  qmo,
  fEr,
  Ymo,
  d8e,
  SMt
};

//# sourceMappingURL=chunk-rjdks4dd.js.map
