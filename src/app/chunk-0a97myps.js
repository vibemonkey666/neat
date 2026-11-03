// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U, ye } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { X, Nt, Pe } from "./chunk-4hww8411.js";
import { Mvt, B_, M4r, YVe, ul, $i, Wnt, Q0e, jp, Ai, kn, k, Ij, gH } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { g, m } from "./chunk-brszmkb3.js";
import { j9, VS, _ot, wse } from "./chunk-5rw2zfa0.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { lfe } from "./chunk-dvghjmtr.js";
import { cx, gdn, XQe, bQ, MNr, hdn, IS } from "./chunk-yx1anek5.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { DQs } from "./chunk-kc27mwew.js";
import { F1, uLo, tre, zGe } from "./chunk-eq25erm1.js";
var H = (o) => Q0e() || Mvt(o);
var qQe = (o) => Mvt(o) && !Q0e();
var v = (o) => o.hasHeld || qQe(o);
var cyt = (o) => M4r.of(o).fetchHold;
function Jne() {
  return cyt(U().host);
}
var z = () => (ye() || v(Jne())) && H(Jne()) && !$i() && kn(B_, cx).source === "fallback";
var LDe = () => jp() && kn(B_, cx).source === "disk" && MNr();
var V = () => v(Jne()) && LDe() && IS();
var A = () => H(Jne()) && LDe() && !IS();
var Y = () => A() && Wnt();
var pdn = () => Ij(kn(B_, cx).source);
function Lhe() {
  try {
    return kn(B_, cx).source === "disabled";
  } catch (o) {
    return (l(o), !1);
  }
}
var n$ = () => tre() && nr() && (!pdn() || Lhe());
function I_i() {
  gdn.isFollowed = !0;
}
function FUt() {
  let o = Ie();
  if (n$() && o.hooksModulesWakeBound === "ahead")
    ((o.hooksModulesWakeBound = "passed"),
      t(
        `the rollout flag (${B_}) is not answered within this wake's wait: the organization's hooks modules load at what the switch reads, a person's wait for the answer`
      ));
}
var R = 60000;
var G =
  "Mods you installed aren't running in this session. Your organization's settings couldn't be read, so it isn't known whether it allows them.";
var D = "the follow of the rollout switch did not end and is given up";
function j(o) {
  return o instanceof Error && o.message === D ? "timeout" : "load_failed";
}
var T =
  "installed mods are off for now: the rollout switch for them reads off; they load again when it reads on, and built-in mods keep running";
function S() {
  let o = Ie().hooksModulesSwitchRead;
  return o !== void 0 && !LDe() && !n$() && (o.isLoadOwed || o.isOn !== IS());
}
function y() {
  let o = Ie().hooksModulesSwitchRead;
  return o !== void 0 && o.isOn && S() && !IS();
}
function LGe(o, e, s) {
  let r = Ie(),
    { hooksModulesSwitchRead: n, hooksModulesSwitchFollowing: a } = r;
  if (a !== void 0) return a.then(() => (y() ? (LGe(o, e, s) ?? void 0) : void 0)).catch(l);
  if (n === void 0 || !S()) return null;
  let f = IS(),
    c = r.loadedModules.length;
  t(
    `installed plugins' hooks modules ${f ? "load" : "unload"}: the rollout flag (${B_}) reads ${f ? "on" : "off"} in a running session`
  );
  let p = () => {
      r.hooksModulesSwitchRead = { ...(r.hooksModulesSwitchRead ?? n), isOn: !1 };
    },
    h = (f ? Promise.resolve() : Promise.resolve().then(s).then(p, l)).then(o),
    L = () => {
      r.hooksModulesSwitchRead = { ...(r.hooksModulesSwitchRead ?? n), isLoadOwed: !0 };
    };
  h.catch(L);
  let F = Nt(h, R, D)
    .then(
      () => {
        g("plugin_function_hooks_switch_followed", { is_turned_on: f });
      },
      (x) => {
        (L(),
          m("plugin_function_hooks_switch_followed", j(x), { is_turned_on: f }),
          t(
            `installed plugins' hooks modules: the load that follows the rollout flag failed: ${d(x)}`,
            { level: "error" }
          ));
      }
    )
    .then(() => {
      if (!f && r.loadedModules.length < c) e(T);
    })
    .catch(l)
    .finally(() => {
      r.hooksModulesSwitchFollowing = void 0;
    });
  return ((r.hooksModulesSwitchFollowing = F), F);
}
function xTe() {
  let o = Ie().hooksModulesSwitchRead?.isManagedPending === !0;
  try {
    let e = !IS() && kn(B_, cx).source === "payload";
    return o && tre() && nr() && !e;
  } catch (e) {
    return (l(e), o);
  }
}
function w(o, e, s) {
  let r = Ie();
  if (Lhe()) FUt();
  let n = r.hooksModulesWakeBound === "taken",
    a = r.hooksModulesWakeBound === "passed" && n$(),
    u = !(r.hooksModulesWakeBound === "ahead" && n$()) && xTe();
  if (!(
    r.hooksModulesSwitchRead !== void 0 &&
    r.hooksModulesSwitchFollowing === void 0 &&
    (a || u || n)
  ))
    return null;
  if (n && !u) {
    if (((r.hooksModulesWakeBound = "loaded"), r.hooksModulesSwitchRead?.isPersonsOut === !0)) e(G);
    return null;
  }
  let c = Nt(o(), R, "the load at the end of the wake's wait did not end and is given up")
    .then(
      () => {
        let p = r.hooksModulesSwitchRead,
          E = p?.isManagedPending !== !0;
        if (E) r.hooksModulesWakeBound = "loaded";
        if (E && p?.isPersonsOut === !0) e(G);
      },
      (p) => {
        t(
          `the load of an organization's hooks modules at the end of the wake's wait failed: ${d(p)}`,
          { level: "error" }
        );
      }
    )
    .finally(() => {
      r.hooksModulesSwitchFollowing = void 0;
    });
  return (
    (r.hooksModulesSwitchFollowing = c),
    c.then(() => (y() ? (LGe(o, e, s) ?? void 0) : void 0)).catch(l)
  );
}
function O_i(o) {
  let { registry: e } = o,
    s = o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0,
    r = !s && e.hooksModulesWakeBound === "taken",
    n = s && e.hooksModulesWakeBound === "passed" && n$() && Lhe();
  if (r) e.hooksModulesWakeBound = "passed";
  if (n) e.hooksModulesWakeBound = "taken";
}
async function Z() {
  return (
    await Ai().catch(() => {
      return;
    }),
    Y()
      ? Ai().catch(() => {
          return;
        })
      : void 0
  );
}
function P() {
  return n$() ? (i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? uLo) : F1;
}
var q = () => Math.max(0, P() - DQs());
function Q(o) {
  let e = o.timedOut,
    s = !e && $i();
  return e
    ? `no answer within ${P()}ms`
    : s
      ? "the flag payload landed"
      : "the fetch settled with no payload";
}
async function _(o = Ai) {
  let e = await zGe({ initialize: o, budgetMs: q() });
  t(
    `installed plugins' hooks modules held ${Math.round(e.waitMs)}ms for the rollout flag (${B_}): ` +
      Q(e)
  );
}
async function M_i() {
  return pdn() ? void 0 : _();
}
var J = 30000;
function oo(o) {
  return qQe(o) && YVe() ? o.over.promise : Promise.resolve();
}
var b = (o) => Pe(oo(o), J);
async function D_i() {
  await XQe();
  let o = A(),
    e = z() || V(),
    s = (o || e) && !n$(),
    r = o ? Z : Ai;
  if (s) await b(Jne());
  return s ? _(r) : void 0;
}
var eo = {
  override: "from a local override",
  payload: "from GrowthBook (this session's payload)",
  disk: "from GrowthBook (the disk cache of an earlier session)",
  disabled:
    "from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",
  fallback: "from the default (a cold GrowthBook cache, no payload yet)"
};
var W = 60000;
function to(o = Date.now()) {
  let e = Ie(),
    s = e.hooksModulesSwitchRereading;
  if (s !== void 0) return s;
  let r = e.hooksModulesSwitchRead;
  if (!(r !== void 0 && nr() && o - r.askedAt >= W)) return null;
  e.hooksModulesSwitchRead = { ...r, askedAt: o };
  let f = (
    r.askedAt === 0
      ? _()
      : zGe({ initialize: () => gH().then(Ai), budgetMs: F1 }).then(() => {
          return;
        })
  ).finally(() => {
    e.hooksModulesSwitchRereading = void 0;
  });
  return ((e.hooksModulesSwitchRereading = f), f);
}
function C(o, e, s) {
  let r = () => LGe(o, e, s) ?? w(o, e, s),
    n = to();
  return n !== null ? n.catch(l).then(() => (FUt(), r() ?? void 0)) : r();
}
var mdn = 1e4;
function H_i(o) {
  if (!(LDe() && !IS())) return;
  let s = ul(() => {
    if (!$i()) return;
    if ((s(), IS()))
      (t(
        `installed plugins' hooks modules load late: the rollout flag (${B_}) answered on after the load went on over a saved off`
      ),
        o());
  });
}
var YQe = {
  served: "the rollout switch served off",
  saved: "the rollout switch was saved off by an earlier session and is not refreshed yet",
  unanswered:
    "this wake's flag fetch has not answered the rollout switch; they load at a turn start once it reads on",
  unfetched:
    "this wake fetches no rollout switch; an organization's load at once, a person's once the organization's settings have been read",
  unfetchedOut:
    "this wake fetches no rollout switch and the organization's settings could not be read; an organization's load at once, a person's stay out for this wake"
};
function PGs() {
  let o = n$() && IS(),
    e = LDe(),
    s = o && Lhe();
  if (s && Ie().hooksModulesSwitchRead?.isPersonsOut === !0) return YQe.unfetchedOut;
  return s ? YQe.unfetched : o ? YQe.unanswered : e ? YQe.saved : YQe.served;
}
function ro(o, e, s) {
  let r = Ie(),
    n = r.loadedModules.length;
  return Promise.resolve()
    .then(o)
    .then(() => {
      if (r.loadedModules.length < n) e(T);
      s();
    });
}
function L_i() {
  return eo[kn(B_, cx).source];
}
var IGs = [
  "NODE_ENV",
  "DISABLE_GROWTHBOOK",
  "DISABLE_TELEMETRY",
  "DO_NOT_TRACK",
  "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
  "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF",
  "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
  "CLAUDE_CODE_CUSTOM_OAUTH_URL",
  "CLAUDE_INTERNAL_FC_OVERRIDES",
  ...lfe
];
function N_i(o, e, s) {
  let r = C(o, e, s);
  return r === null
    ? null
    : Pe(r, mdn)
        .then(() => {
          return;
        })
        .catch(l);
}
var udn = 180000;
class so {
  busy = !1;
  running = null;
  key = null;
  edgeAt = 0;
  busySince = 0;
  idleWaiters = new Set();
  endWaiters = new Set();
  valveTimer = null;
}
var me = new nt(() => new so());
function M() {
  return me.of(U());
}
function io(o) {
  if (o.valveTimer !== null) (clearTimeout(o.valveTimer), (o.valveTimer = null));
  let e = [...o.idleWaiters];
  (o.idleWaiters.clear(), no(e));
}
function no(o) {
  for (let e of o) queueMicrotask(e);
}
function fdn(o, e = null) {
  let s = M(),
    r = e === null || e === s.key;
  if (o ? s.busy && r : !s.busy || !r) return;
  if (s.busy) (io(s), no([...s.endWaiters]), s.endWaiters.clear());
  ((s.busy = o),
    (s.running = o ? Symbol("foreground turn") : null),
    (s.key = o ? e : null),
    (s.busySince = o ? performance.now() : 0),
    (s.edgeAt = Date.now()));
}
function HGe() {
  return M().busy;
}
function ao(o) {
  let e = M();
  if (e.busy) e.endWaiters.add(o);
  else queueMicrotask(o);
}
function CGs() {
  return M().edgeAt;
}
function RNr(o = performance.now(), e = udn) {
  let s = M();
  return s.busy && o - s.busySince < e;
}
function RGs(o = performance.now(), e = udn) {
  let s = M();
  return s.busy && o - s.busySince >= e;
}
function xGs(o, e, s = udn) {
  if (e.aborted) return () => {};
  let r = M(),
    n = !1,
    a = () => {
      if ((e.removeEventListener("abort", u), !n && !e.aborted)) o();
    },
    u = () => {
      ((n = !0), r.idleWaiters.delete(a), e.removeEventListener("abort", u));
    };
  if (!RNr(performance.now(), s)) return (queueMicrotask(a), u);
  if ((r.idleWaiters.add(a), e.addEventListener("abort", u, { once: !0 }), r.valveTimer === null)) {
    let f = r.busySince + s - performance.now();
    ((r.valveTimer = setTimeout(io, Math.max(0, f), r)), r.valveTimer.unref?.());
  }
  return u;
}
function $_i(o) {
  let e = { isStopped: !1, isWaiting: !1 };
  function s() {
    if (((e.isWaiting = !1), !e.isStopped && S())) o();
  }
  let r = ul(() => {
    if (!e.isWaiting && S()) ((e.isWaiting = !0), ao(s));
  });
  return () => {
    ((e.isStopped = !0), r());
  };
}
function F_i(o, e, s) {
  let r = Ie();
  if (!(
    r.hooksModulesWakeBound === "ahead" &&
    r.hooksModulesSwitchRead !== void 0 &&
    r.hooksModulesSwitchFollowing === void 0 &&
    n$()
  ))
    return null;
  let a = b(Jne())
    .then(() => _())
    .then(
      () => ((r.hooksModulesSwitchFollowing = void 0), FUt(), LGe(o, e, s) ?? w(o, e, s) ?? void 0)
    )
    .catch(l)
    .finally(() => {
      if (r.hooksModulesSwitchFollowing === a) r.hooksModulesSwitchFollowing = void 0;
    });
  return ((r.hooksModulesSwitchFollowing = a), a);
}
function IHo() {
  try {
    return $i() || kn(B_, cx).source === "payload";
  } catch {
    return !1;
  }
}
var xNr = () => hdn() !== k(B_, cx);
function U_i(o) {
  let e = o.registry.hooksModulesSwitchRead;
  if (e?.isManagedPending !== !0) return !1;
  if (!(o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0))
    return (
      t(
        `the load of an organization's hooks modules stays owed: its set ${o.isSetKnown ? "is known" : "is not known yet"}, the load ${o.isLoadFaultless ? "ran" : "did not run faultless"}, ${o.unmet.length} named plugin(s) not found or not loaded`
      ),
      !1
    );
  return (
    (o.registry.hooksModulesSwitchRead = o.isDecided ? { ...e, isManagedPending: !1 } : void 0),
    !0
  );
}
var OHo = "Your organization's mods could not be loaded, so this turn was not run.";
async function lo(o, e, s, r) {
  let n = Ie(),
    a = { isEnded: !1 },
    u = { wake: () => {} },
    f = new Set(),
    c = new AbortController(),
    p = ul(() => u.wake()),
    E = n.hookRegistrationEnded.subscribe(() => u.wake()),
    h = { hasMoved: !1, passesBefore: 0 },
    L = wse(() => {
      ((h.hasMoved = !0), (h.passesBefore = n.hookRegistrationEpoch), u.wake());
    }),
    F = () => h.hasMoved && n.hookRegistrationEpoch === h.passesBefore,
    x = { isPassed: !1 },
    B = { isMet: !1 },
    N = () => !a.isEnded && !x.isPassed && !B.isMet && xTe(),
    uo = X(s, c.signal).then(() => {
      x.isPassed = !0;
    });
  e.then(() => {
    a.isEnded = !0;
  });
  try {
    while (N()) {
      let K = { isOver: !1 },
        po = X(W, c.signal, { unref: !0 }).then(() => {
          K.isOver = !0;
        }),
        co = F(),
        I = Promise.resolve()
          .then(() => o(co))
          .catch(l);
      h.hasMoved = !1;
      while (N() && !K.isOver && !(F() && f.has(I))) {
        let ho = new Promise((O) => {
            u.wake = O;
          }),
          go = [I, n.hooksModulesSwitchFollowing, ...n.hookRegistrationsInFlight]
            .flatMap((O) => (O === void 0 || f.has(O) ? [] : [O]))
            .map((O) => Promise.allSettled([O]).then(() => f.add(O)));
        (await Promise.race([po, uo, e, ho, ...go]),
          (B.isMet = !x.isPassed && f.has(I) && !F() && r()));
      }
    }
    return x.isPassed ? "limit" : B.isMet ? "dead-end" : "released";
  } finally {
    (c.abort(), p(), E(), L());
  }
}
var fo = 300000;
var mo = "Waiting for your organization's mods to load.";
function PNr(o, e) {
  let s = Ie(),
    n = `${_ot() ? "ended" : "under way"} since reset ${j9()}`,
    a = VS() ?? n,
    u = s.organizationsStatusLoad;
  if (!e && u?.standing === a) return u.pass;
  let f = Promise.resolve().then(o),
    c = { standing: a, pass: f },
    p = () => {
      if (s.organizationsStatusLoad === c) s.organizationsStatusLoad = void 0;
    };
  return ((s.organizationsStatusLoad = c), f.then(p, p), f);
}
var INr = "Your organization's policy could not be read, so this session cannot run a turn.";
function B_i(o, e, s, r, n) {
  if (!xTe()) return null;
  let a = { isEnded: !1 },
    u = { end: "released" },
    f = () => Ie().hooksModulesSwitchRead?.isManagedPending === !0,
    c = () => LGe(o, e, s) ?? w(o, e, s);
  return (
    r.then(() => {
      a.isEnded = !0;
    }),
    Promise.resolve()
      .then(() => e(mo))
      .catch(l)
      .then(() => lo((p) => C(p ? () => PNr(o, !1) : o, e, s), r, fo, n))
      .then((p) => {
        u.end = p;
      })
      .catch(l)
      .then(() => (!xTe() && f() ? Pe(ro(s, e, c), mdn) : void 0))
      .catch(l)
      .then(() => {
        let p = u.end === "dead-end";
        if (!xTe()) return { kind: "start" };
        return a.isEnded ? { kind: "ended" } : { kind: "failed", message: p ? INr : OHo };
      })
  );
}
function OGs() {
  let o = Ie();
  if (o.hooksModulesSwitchRead === void 0 && Ee())
    o.hooksModulesSwitchRead = {
      isOn: !1,
      askedAt: 0,
      isLoadOwed: !0,
      isManagedPending: !0,
      isPersonsOut: !1
    };
}
function Ee() {
  try {
    return bQ() === void 0 && n$();
  } catch {
    return !0;
  }
}
export {
  qQe,
  udn,
  fdn,
  HGe,
  CGs,
  RNr,
  RGs,
  xGs,
  cyt,
  Jne,
  LDe,
  pdn,
  Lhe,
  n$,
  I_i,
  FUt,
  LGe,
  xTe,
  O_i,
  M_i,
  D_i,
  mdn,
  H_i,
  YQe,
  PGs,
  L_i,
  IGs,
  N_i,
  $_i,
  F_i,
  IHo,
  xNr,
  U_i,
  OHo,
  PNr,
  INr,
  B_i,
  OGs
};

//# sourceMappingURL=chunk-0a97myps.js.map
