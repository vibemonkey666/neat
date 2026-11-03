// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { UO, _U, QUo, ZUo, s1r } from "./chunk-bbw420pv.js";
import { De } from "./chunk-2qx8pe6s.js";
import { U, Eu } from "./chunk-wrtp8qz8.js";
import { c, ce, Ka } from "./chunk-acd8w9vv.js";
import { N, Pp } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { p } from "./chunk-qmkm2x59.js";
import { i_, Roe, kf, gn, cr, Sv, jt, k } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { Vg } from "./chunk-a16y5hcz.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { kI } from "./chunk-5rw2zfa0.js";
import { le } from "./chunk-vw9e882a.js";
import { gt, yC } from "./chunk-wr0p4ndg.js";
import { Yd } from "./chunk-ddpw2j06.js";
import { G$t, KWe, _O, Qle, q$t, VWe, li, Lm, jVn, Zle, nDe, qWe, Vgt } from "./chunk-f7aya6cs.js";
import { uu } from "./chunk-wrgxzjpr.js";
import {
  LC,
  GJ,
  WF,
  mne,
  sJe,
  A0s,
  PL,
  Th,
  Uge,
  L2n,
  C0s,
  Bge,
  HOr,
  Bt
} from "./chunk-j0tbz6ra.js";
import { w } from "./chunk-7m7t89vx.js";
import { nD, S6e, vk } from "./chunk-t776tmr7.js";
import { n, Yt, Ta } from "./chunk-h56pfqh7.js";
import { To } from "./chunk-1xqkrp78.js";
import { dL } from "./chunk-b77hptpq.js";
import { Me } from "./chunk-rf7g1m78.js";
import { Bve, g8e, o1, HMt, Tgo, y8e, s1, Rgo, Igo, VIe } from "./chunk-dx5awfq0.js";
import {
  Ypr,
  Xpr,
  cPn,
  gto,
  _xt,
  AW,
  I6,
  bxt,
  yto,
  Fee,
  z5e,
  Fie,
  V5e,
  vto
} from "./chunk-xp7js3cq.js";
import { a6e } from "./chunk-14t3txgj.js";
import { wF } from "./chunk-53jctre9.js";
import { F2 } from "./chunk-vs92m95f.js";
import { e, r } from "./chunk-f790ajz4.js";
import { yae, T3e, qJt, uve, Act } from "./chunk-f7000fnc.js";
import { NBe } from "./chunk-2x8g8t4c.js";
import { de, be, P, ee, y, kt, j } from "./chunk-bq35vvkw.js";
import { LE } from "./chunk-gjv3ente.js";
import { o, v, M, u, B } from "./chunk-0bqrj5ah.js";
import { _e } from "./chunk-n8wdmnah.js";
import { S, vn } from "./chunk-a2y39866.js";
var O3t = "tengu_pewter_summit";
j();
function LR() {
  let [i, s] = y({ ...li() });
  return (
    P(
      () =>
        Zle((d) => {
          s({ ...d });
        }),
      []
    ),
    i
  );
}
var mt = new W(() => ({ messageKeys: new Set(), footerOfferKeys: new Set() }));
function iPn(i) {
  let s = i.rateLimitType;
  return {
    limit_type: s !== void 0 && Object.hasOwn(Qle, s) ? c(s) : void 0,
    tier: c(uve()),
    resets_at: i.resetsAt
  };
}
function Vcs(i, s, d) {
  if (s.resetsAt === void 0) return;
  let m = mt.of(i).messageKeys,
    b = `${s.resetsAt}:${d.shown}`;
  if (m.has(b)) return;
  (m.add(b),
    a("tengu_rate_limit_message_shown", {
      ...iPn(s),
      hint: c(d.kind),
      hint_shown: d.shown,
      wait_live: d.waitLive
    }));
}
function rto(i, s, d) {
  if (s.resetsAt === void 0) return;
  let m = mt.of(i).footerOfferKeys,
    b = `${s.resetsAt}:${d}`;
  if (m.has(b)) return;
  (m.add(b), a("tengu_limit_footer_offer_shown", { ...iPn(s), offer: c(d) }));
}
j();
function M3t(i) {
  return GJ.isEnabled() && (i === void 0 || i.includes("overage"));
}
function ft(i) {
  let s = cr(),
    d = s === "team" || s === "enterprise";
  return M3t(i) && !d && !_t() && Roe(i_()) === null;
}
j();
var Fn = 30000;
function oto(i, s, d) {
  let m = !1,
    b = () => {};
  if (Number.isNaN(i)) return b;
  let _ = () => {
    if (m) return;
    let E = i - Date.now();
    if (E <= 0) {
      d();
      return;
    }
    b = s(_, Math.min(E, Fn));
  };
  return (
    _(),
    () => {
      ((m = !0), b());
    }
  );
}
function UB(i) {
  let d = be(vk)?.setTimeout ?? nD,
    m = ee(() => {
      if (i === null) return S6e;
      return (b) => oto(i, d, b);
    }, [i, d]);
  return kt(m, () => i !== null && Date.now() >= i);
}
var pt = 30000,
  Ee = "quota-auto-resume-cap",
  zpr = "quota-auto-resume-cancelled",
  Kpr = "Automatic continue cancelled \xB7 /rate-limit-options to re-arm";
function bwe() {
  return kt(Tgo, Bve, Bve);
}
var $n = "tengu_functional_llama",
  bt = {
    waiting: "Continuing automatically {when} \xB7 esc to cancel",
    started: "Usage limit reached \xB7 continuing automatically {when} \xB7 esc to cancel",
    rearmed: "Usage limit reached again \xB7 continuing automatically {when} \xB7 esc to cancel",
    credits: "/usage-credits to continue now"
  },
  Nt = 120,
  Dn = p(() =>
    u({
      waiting: o()
        .optional()
        .catch(void 0),
      started: o()
        .optional()
        .catch(void 0),
      rearmed: o()
        .optional()
        .catch(void 0),
      credits: o()
        .optional()
        .catch(void 0)
    })
  );
function he(i, s) {
  let d = uu(s);
  if (d === void 0) return bt[i];
  if (i === "credits") return gt(d, Nt);
  return d.includes("{when}") ? d : bt[i];
}
function Jn(i) {
  let s = Dn().safeParse(i),
    d = s.success ? s.data : {};
  return {
    waiting: he("waiting", d.waiting),
    started: he("started", d.started),
    rearmed: he("rearmed", d.rearmed),
    credits: he("credits", d.credits)
  };
}
function ne() {
  return Jn(k($n, null));
}
function Ye(i, s) {
  return gt(i.replace("{when}", s), Nt);
}
function Pt(i, s) {
  let d = i.phase === "armed" ? i.resetsAtSeconds : 0,
    m = d * 1000 > s ? yC(d) : void 0;
  return m ? `at ${m}` : "shortly";
}
function yt(i, s) {
  return Ye(ne().started, Pt(i, s));
}
function Et(i, s) {
  return Ye(ne().rearmed, Pt(i, s));
}
var Ae = "Usage limit reached";
function sto(i) {
  let s = yC(i);
  return s ? `${Ae} \xB7 limit resets ${s}` : Ae;
}
function ht(i, s) {
  if (i.phase === "stale")
    return { status: "Your usage limit has reset", next: "Press enter to continue" };
  if (i.phase !== "armed") return null;
  let d = yC(i.resetsAtSeconds),
    m = sto(i.resetsAtSeconds);
  if (s) return { status: m, next: "Continuing shortly \xB7 esc to cancel" };
  let b = Ye(ne().waiting, d ? "at " + d : "when it resets");
  if (b.startsWith(`${Ae} \xB7 `))
    b = b.slice(Ae.length + 3).replace(/^./u, (_) => _.toUpperCase());
  return { status: m, next: b };
}
function wt(i, s, d) {
  return i.phase === "armed" && !s && d;
}
function At() {
  return ft(li().upgradePaths);
}
function Ct() {
  return;
}
function Xe(i) {
  return UB(i.phase === "armed" ? Math.min(i.fireAtMs, i.resetsAtSeconds * 1000) : null);
}
function ito(i) {
  let L = w(36),
    { isLoading: s, transcript: d } = i,
    { addNotification: m, removeNotification: b } = To(),
    { storageV5: _, credentials: E } = Me(),
    A = dL(),
    h = bwe(),
    C = Xe(h),
    T = kt(Zle, At),
    x = kt(Fee, h.phase === "armed" ? z5e : Ct),
    I,
    O;
  if (L[0] !== _)
    ((I = () => {
      Igo(_);
    }),
      (O = [_]),
      (L[0] = _),
      (L[1] = I),
      (L[2] = O));
  else ((I = L[1]), (O = L[2]));
  P(I, O);
  let D;
  if (L[3] !== d)
    ((D = (We, G) => d.apply({ type: "append", messages: [Bt(We, G)] })), (L[3] = d), (L[4] = D));
  else D = L[4];
  let R = D,
    q;
  if (L[5] !== E || L[6] !== _ || L[7] !== A)
    ((q = (Fe, ie) =>
      void wF({ message: Fe, notificationType: ie }, A, { storageV5: _, credentials: E })),
      (L[5] = E),
      (L[6] = _),
      (L[7] = A),
      (L[8] = q));
  else q = L[8];
  let F = q,
    ae,
    ye;
  if (L[9] !== m || L[10] !== R || L[11] !== F || L[12] !== b)
    ((ae = () =>
      HMt((Ke) => {
        switch (Ke) {
          case "armed":
          case "rearmed": {
            (b(Ee), b(zpr));
            return;
          }
          case "taken-over": {
            R(Et(Bve(), Date.now()), "notice");
            return;
          }
          case "cancelled": {
            R(Kpr, "notice");
            return;
          }
          case "auto-armed": {
            R(yt(Bve(), Date.now()), "notice");
            return;
          }
          case "fired-now": {
            (R("Usage limit available again \xB7 continuing now", "notice"),
              F(
                "Usage limit available \u2014 Claude is continuing your task",
                "quota_auto_resume_fired"
              ));
            return;
          }
          case "stale": {
            (R("Usage limit has reset \xB7 press enter to continue", "notice"),
              F("Usage limit reset \u2014 press enter to continue", "quota_auto_resume_stale"));
            return;
          }
          case "disabled": {
            (R(
              `Automatic continue was turned off \xB7 this task will not resume on its own${NBe() ? " (/rate-limit-options to wait anyway)" : ""}`,
              "warning"
            ),
              F(
                "Automatic continue was turned off \u2014 the task will not resume on its own",
                "quota_auto_resume_disabled"
              ));
            return;
          }
          case "horizon-exceeded": {
            (R(
              "Automatic continue stopped \xB7 the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)",
              "warning"
            ),
              F(
                "Automatic continue stopped \u2014 the usage limit now resets more than 24 hours out; the task will not resume on its own",
                "quota_auto_resume_disabled"
              ));
            return;
          }
          case "continuation-dropped": {
            (R(
              "Automatic continue did not run \xB7 the continuation was blocked before it reached the model, so this task did not resume on its own \xB7 send a prompt to continue",
              "warning"
            ),
              F(
                "Automatic continue did not run \u2014 the continuation was blocked before it reached the model; send a prompt to continue",
                "quota_auto_resume_disabled"
              ));
            return;
          }
          case "cap-exhausted": {
            (R(
              "Automatic continue stopped after repeated usage-limit hits \xB7 this task will not resume on its own (/rate-limit-options to try again)",
              "warning"
            ),
              F(
                "Automatic continue stopped after repeated usage-limit hits \u2014 the task will not resume on its own",
                "quota_auto_resume_disabled"
              ),
              m({
                key: Ee,
                kind: "warning",
                text: "Automatic continue stopped after repeated usage-limit hits \xB7 /rate-limit-options to try again",
                color: "warning",
                priority: "high",
                timeoutMs: 20000
              }));
            return;
          }
          default:
        }
      })),
      (ye = [m, b, R, F]),
      (L[9] = m),
      (L[10] = R),
      (L[11] = F),
      (L[12] = b),
      (L[13] = ae),
      (L[14] = ye));
  else ((ae = L[13]), (ye = L[14]));
  P(ae, ye);
  let $e;
  if (L[15] !== R || L[16] !== s || L[17] !== F)
    (($e = () => {
      if (Rgo(Date.now(), s) === "fired")
        (R("Usage limit reset \xB7 continuing automatically", "notice"),
          F("Usage limit reset \u2014 Claude is continuing your task", "quota_auto_resume_fired"));
    }),
      (L[15] = R),
      (L[16] = s),
      (L[17] = F),
      (L[18] = $e));
  else $e = L[18];
  Ta($e, h.phase === "armed" ? pt : null);
  let On;
  if (L[19] !== h || L[20] !== T || L[21] !== C)
    ((On = wt(h, C, T)), (L[19] = h), (L[20] = T), (L[21] = C), (L[22] = On));
  else On = L[22];
  let Je = On,
    He = Je && x !== void 0 && h.phase === "armed" ? h.resetsAtSeconds : null,
    Un,
    Mn;
  if (L[23] !== He)
    ((Mn = () => {
      if (He !== null) Fie("cli_wait_footer");
    }),
      (Un = [He]),
      (L[23] = He),
      (L[24] = Un),
      (L[25] = Mn));
  else ((Un = L[24]), (Mn = L[25]));
  P(Mn, Un);
  let Nn;
  if (L[26] !== h || L[27] !== C) ((Nn = ht(h, C)), (L[26] = h), (L[27] = C), (L[28] = Nn));
  else Nn = L[28];
  let Ge = Nn;
  if (Ge === null) {
    let se;
    if (L[29] === S) {
      let Pn = li().resetsAt;
      se = Pn !== void 0 && g8e(Pn) ? { kind: "declined" } : null;
      L[29] = se;
    } else se = L[29];
    return se;
  }
  let se;
  if (L[30] !== Je || L[31] !== x)
    ((se = Je ? (x !== void 0 ? `${ne().credits} \xB7 ${x}` : ne().credits) : null),
      (L[30] = Je),
      (L[31] = x),
      (L[32] = se));
  else se = L[32];
  let Wn;
  if (L[33] !== Ge || L[34] !== se)
    ((Wn = { kind: "live", ...Ge, credits: se }), (L[33] = Ge), (L[34] = se), (L[35] = Wn));
  else Wn = L[35];
  return Wn;
}
import { randomUUID as qn } from "crypto";
var VFe = ["session", "weekly", "fable", "full"];
function qe(i) {
  if (i.givesBackWeekly) return "fable";
  if (i.type !== null) return i.type;
  let s = i.clears.includes("five_hour"),
    d = i.clears.some((m) => m !== "five_hour");
  return s && !d ? "session" : d && !s ? "weekly" : "full";
}
function Wt(i) {
  return !i.paused && (i.resetsLeft > 0 || i.usableNow);
}
function oe(i, s) {
  return i.clears.some((d) => d === s) || (s === "seven_day" && i.givesBackWeekly);
}
var Yn = {
  five_hour: "session",
  seven_day: "weekly",
  seven_day_overage_included: "fable",
  seven_day_opus: null,
  seven_day_sonnet: null,
  overage: null
};
function Ve(i, s) {
  if (s !== null && Yn[s] === i) return -1;
  if (s === "seven_day" && i === "fable") return VFe.length;
  return VFe.indexOf(i);
}
function X(i) {
  switch (i) {
    case "session":
      return "5-hour reset";
    case "fable":
      return "Fable reset";
    case "full":
      return "full reset";
    case "weekly":
      return "weekly reset";
  }
}
function me(i, s) {
  let d = i === "session" ? "five-hour reset" : X(i);
  return s === 0 ? `no ${d}s` : s === 1 ? `1 ${d}` : `${s} ${d}s`;
}
function qcs(i) {
  return `${i.map(({ kind: s, count: d }) => `${d} ${me(s, 1).replace(/^1 | reset$/g, "")}`).join(", ")} resets`;
}
function Ft(i) {
  return i === "fable" ? "returns what Fable used to your weekly limit" : void 0;
}
function Kt(i) {
  switch (i) {
    case "session":
      return "Session limit reset";
    case "fable":
      return "Fable reset used \xB7 what Fable used is back in your weekly limit";
    case "full":
      return "Limits reset";
    case "weekly":
      return "Weekly limits reset";
  }
}
var Vn = 3,
  nt = 12000,
  zt = 35000,
  Qn = 600000,
  Zn = 20000;
function rt(i) {
  if (!qJt(i) || i.rateLimitType === void 0 || i.resetsAt === void 0) return null;
  return { rateLimitType: i.rateLimitType, wallResetsAt: i.resetsAt, accountEpoch: Lm() };
}
function fe(i, s) {
  return (
    s.rateLimitType === i.rateLimitType && s.resetsAt === i.wallResetsAt && i.accountEpoch === Lm()
  );
}
function Z(i) {
  let s = I6();
  return s.phase === "answered" && fe(s.wall, i) ? s.status : void 0;
}
function it(i) {
  let s = I6();
  return s.phase === "failed" && fe(s.wall, i);
}
function H() {
  return Date.now();
}
function Xt(i, s, d, m) {
  if (i.final) return !1;
  let b = m - i.answeredAtMs,
    _ = (h) => b < 0 || b >= h;
  if (qt(s, m) !== void 0) return !1;
  let E = _xt(i.status?.cooldownUntil ?? null),
    A = b < 0 || (b >= Zn && (E === void 0 || m >= Math.min(E, i.answeredAtMs + 150000)));
  switch (d) {
    case "wall":
      return _(Qn);
    case "command":
      return A;
    case "dialog":
      return A && (i.status === null || ir(s));
  }
}
function Re(i, s, d) {
  let m = new Map();
  for (let b of i.grants) {
    if (!Wt(b)) continue;
    let _ = qe(b),
      E = m.get(_) ?? { kind: _, grants: [], resetsLeft: 0, target: void 0 };
    (m.set(_, E), E.grants.push(b), (E.resetsLeft += b.resetsLeft));
    let A = _xt(b.endsAt) ?? null;
    if (
      E.target === void 0 &&
      b.usableNow &&
      (A === null || A > d) &&
      (s === null || (oe(b, s) && !Qt(b, i)))
    )
      E.target = { grant: b, endsAtMs: A };
  }
  return [...m.values()].sort((b, _) => Ve(b.kind, s) - Ve(_.kind, s));
}
function qFe(i, s = Date.now()) {
  let d = Z(i);
  if (
    !qJt(i) ||
    d === void 0 ||
    d === null ||
    i.rateLimitType === void 0 ||
    i.resetsAt === void 0 ||
    i.resetsAt * 1000 <= s ||
    UO() ||
    !mne()
  )
    return [];
  let m = i.rateLimitType,
    b = xe(d),
    _ = [];
  for (let E of Re(d, m, s))
    if (E.target !== void 0)
      _.push({
        origin: "wall",
        kind: E.kind,
        grant: E.target.grant,
        resetsLeft: Math.max(1, E.resetsLeft),
        totalResetsLeft: Math.max(1, b),
        weeklyResetsAt: d.weeklyResetsAt,
        endsAtMs: E.target.endsAtMs,
        rateLimitType: m
      });
  return _;
}
function qt(i, s = Date.now()) {
  return qFe(i, s)[0];
}
function er(i, s = Date.now()) {
  let d = Z(i);
  if (d === void 0 || d === null || i.rateLimitType === void 0) return [];
  return Vt(d, i.rateLimitType, s);
}
function Vt(i, s, d) {
  let m = [];
  for (let b of Re(i, s, d)) {
    let _ = b.grants[0];
    if (b.target !== void 0 || b.resetsLeft === 0 || !_) continue;
    let E =
        s !== null && !b.grants.some((h) => oe(h, s)) ? `doesn't refill your ${Se(s)}` : nr(_, i),
      A = X(b.kind);
    m.push({
      kind: b.kind,
      resetsLeft: b.resetsLeft,
      reason: E,
      text: `${A.charAt(0).toUpperCase()}${A.slice(1)} \xB7 ${E}`
    });
  }
  return m;
}
function tr(i, s) {
  if (i.unavailableReason !== null) return i.unavailableReason;
  if (s.cooldownUntil !== null) return "cooldown";
  for (let d of i.blocking)
    switch (d) {
      case "five_hour":
        return "blocked_five_hour";
      case "seven_day":
        return "blocked_seven_day";
      case "seven_day_opus":
        return "blocked_opus";
      case "seven_day_sonnet":
        return "blocked_sonnet";
      case "seven_day_overage_included":
      case "seven_day_cowork":
      case "seven_day_omelette":
      case "seven_day_oauth_apps":
        break;
    }
  if (i.blocking.length > 0) return "blocked_other";
  if (
    s.atLimit &&
    !s.exhausted.some((d) => i.clears.includes(d) || (d === "seven_day" && i.givesBackWeekly))
  )
    return "cannot_clear";
  return i.useRequiresLimit ? "needs_limit" : "unavailable";
}
function nr(i, s) {
  switch (tr(i, s)) {
    case "cooldown":
      return "try again in a minute";
    case "blocked_five_hour":
      return `can't be used while you're at your ${VWe("five_hour")}`;
    case "blocked_seven_day":
      return i.givesBackWeekly ? bn : `can't be used while you're at your ${VWe("seven_day")}`;
    case "blocked_opus":
      return `can't be used while you're at your ${VWe("seven_day_opus")}`;
    case "blocked_sonnet":
      return `can't be used while you're at your ${q$t()}`;
    case "blocked_other":
      return "can't be used while you're at another limit it doesn't refill";
    case "cannot_clear":
      return "doesn't refill the limit you've reached";
    case "needs_limit":
      return "usable once you reach a limit it refills";
    case "unavailable":
      return "can't be used right now";
  }
}
function hxt(i) {
  let s = PL(),
    d = Th(s.label, Nie(i));
  return i.kind === "fable" && i.origin === "wall" && i.rateLimitType === "seven_day"
    ? `${d} \xB7 ${s.fableAtWeeklySuffix}`
    : d;
}
function xe(i) {
  return i.grants.reduce((s, d) => s + d.resetsLeft, 0);
}
function Qt(i, s) {
  return (
    !i.useRequiresLimit &&
    !s.exhausted.some((d) => i.clears.includes(d) || (d === "seven_day" && i.givesBackWeekly))
  );
}
function rr(i, s) {
  if (!Qt(i, s)) return null;
  let d = null;
  for (let b of Ypr) {
    let _ = i.percentUsed[b];
    if (i.clears.includes(b) && _ !== void 0 && (d === null || _ > d.percentUsed))
      d = { claimType: b, percentUsed: _ };
  }
  if (d === null) return { kind: "unnumbered", percentUsedMax: null };
  let m = at(d.claimType);
  if (m === null || d.percentUsed >= 100)
    return { kind: "unnumbered", percentUsedMax: d.percentUsed };
  return {
    kind: "numbered",
    percentLeft: 100 - d.percentUsed,
    claimType: d.claimType,
    limitName: m,
    percentUsedMax: d.percentUsed
  };
}
function Se(i) {
  return i === "seven_day_sonnet" ? q$t() : VWe(i);
}
function at(i) {
  switch (i) {
    case "five_hour":
    case "seven_day":
    case "seven_day_opus":
    case "seven_day_overage_included":
    case "seven_day_sonnet":
      return Se(i);
    case "seven_day_cowork":
    case "seven_day_omelette":
    case "seven_day_oauth_apps":
      return null;
  }
}
function ato(i) {
  if (i.origin === "wall" || i.earlyUse === null) return;
  let s = PL();
  switch (i.earlyUse.kind) {
    case "numbered":
      return Th(s.earlyLine, Nie(i));
    case "unnumbered":
      return Th(s.earlyNoNumberLine, Nie(i));
  }
}
function Swe() {
  let i = AW();
  return (
    i.claiming || (i.unsettledClaimGrantId !== null && i.unsettledClaimEpoch === Lm() && rn(i))
  );
}
function D3t(i, s = Date.now()) {
  return qt(i, s) !== void 0;
}
function YFe(i, s = Date.now()) {
  let d = Z(i);
  if (
    !qJt(i) ||
    d === void 0 ||
    d === null ||
    !d.eligible ||
    d.grants.length === 0 ||
    d.grants.some((m) => m.resetsLeft > 0 || m.usableNow) ||
    i.resetsAt === void 0 ||
    i.resetsAt * 1000 <= s ||
    !mne()
  )
    return;
  return Th(PL().spentLine, { left: 0 });
}
function Ycs(i, s = Date.now()) {
  return Xpr(Z(i), s) !== void 0;
}
function ir(i) {
  let s = Z(i);
  return (
    s !== void 0 &&
    s !== null &&
    s.eligible &&
    !s.grants.some((d) => d.usableNow) &&
    s.grants.some((d) => d.resetsLeft > 0)
  );
}
function Nie(i) {
  return {
    kind: X(i.kind),
    left: i.resetsLeft,
    kindResets: me(i.kind, i.resetsLeft),
    date: Zt(i.grant.endsAt),
    deadline: Ce(i.grant.endsAt),
    week: Ce(i.weeklyResetsAt),
    limits: ar(i.grant),
    returns: Ft(i.kind),
    done: Kt(i.kind),
    ...(i.origin === "anytime" &&
      i.earlyUse?.kind === "numbered" && {
        percent: i.earlyUse.percentLeft,
        limit: i.earlyUse.limitName
      })
  };
}
function ar(i) {
  let s = new Set();
  if (i.givesBackWeekly) s.add("Fable");
  for (let b of i.clears)
    switch (b) {
      case "five_hour":
        s.add("session");
        break;
      case "seven_day":
        s.add("weekly");
        break;
      case "seven_day_overage_included":
        s.add(i.givesBackWeekly ? "Fable" : "weekly");
        break;
      case "seven_day_opus":
        s.add(Vg(VWe(b), " limit"));
        break;
      case "seven_day_sonnet":
        s.add(Vg(q$t(), " limit"));
        break;
      case "seven_day_cowork":
      case "seven_day_omelette":
      case "seven_day_oauth_apps":
        break;
    }
  let d = [...s],
    m = d.pop();
  if (m === void 0) return "limits";
  return d.length === 0 ? `${m} limit` : `${d.join(", ")} and ${m} limits`;
}
function Zt(i) {
  let s = _xt(i);
  return s === void 0 ? void 0 : LE(Math.floor(s / 1000), !1, !1, !0);
}
function Ce(i) {
  let s = _xt(i);
  return s === void 0 ? void 0 : LE(Math.floor(s / 1000), !1, !0, !0);
}
function en() {
  return mne() || vto(k(V5e, null));
}
function Xcs(i, s) {
  if (!en() || !qJt(i)) return;
  tn(i, s, "cli_menu");
}
function Jcs(i) {
  let s = li();
  if (!mne() || s.rateLimitType !== "seven_day_overage_included" || !qJt(s)) return;
  tn(s, i, "cli_credits_required");
}
function tn(i, s, d) {
  let m = AW();
  if ((xr(m), (m.continuableWallResetsAt = i.resetsAt ?? null), m.unsettledClaimEpoch !== Lm()))
    J(m);
  Q(i, s, "wall", d);
}
function Q(i, s, d, m) {
  if (d === "wall" ? !en() : !mne()) return Promise.resolve();
  let b = rt(i);
  if (b === null) return Promise.resolve();
  let _ = AW();
  if (m !== void 0) _.wallSurface = { wall: b, surface: m };
  let E = _.state,
    A = 0,
    h = null;
  if (E.phase !== "idle" && fe(E.wall, i))
    switch (E.phase) {
      case "answered":
        if (!Xt(E, i, d, H())) return Promise.resolve();
        h = E;
        break;
      case "asking":
        return _.pendingAsk ?? Promise.resolve();
      case "failed":
        if (d === "wall" && E.failures >= Vn) return Promise.resolve();
        A = E.failures;
    }
  bxt({ phase: "asking", wall: b });
  let C = o1(),
    T =
      m ??
      (_.wallSurface !== null && fe(_.wallSurface.wall, i) ? _.wallSurface.surface : "cli_menu"),
    x = Pe(cPn(s, { surface: T }), nt)
      .then((L) => {
        if (
          ($t({ wall: b, failures: A, previous: h, result: L ?? { kind: "failed" }, autoArmed: C }),
          L !== void 0 && L.kind === "answered" && L.status?.ineligibleReason !== "unavailable")
        )
          nn(_, L.status, s);
      })
      .catch((L) => {
        l(N(L));
        try {
          $t({ wall: b, failures: A, previous: h, result: { kind: "failed" }, autoArmed: C });
        } catch (I) {
          l(N(I));
        }
      })
      .finally(() => {
        if (_.pendingAsk === x) _.pendingAsk = null;
      });
  return ((_.pendingAsk = x), x);
}
function $t({ wall: i, failures: s, previous: d, result: m, autoArmed: b }) {
  let _ = I6();
  if (
    _.phase !== "asking" ||
    _.wall.rateLimitType !== i.rateLimitType ||
    _.wall.wallResetsAt !== i.wallResetsAt ||
    _.wall.accountEpoch !== i.accountEpoch
  )
    return;
  let E = m.kind === "answered" ? m.status : null,
    A = m.kind === "failed" || E?.ineligibleReason === "unavailable";
  if (A && d !== null) bxt({ ...d, answeredAtMs: H() });
  else if (A) bxt({ phase: "failed", wall: i, failures: s + 1 });
  else {
    let I = m.kind === "no_profile_scope" || m.kind === "not_authorized";
    bxt(
      I
        ? { phase: "answered", wall: i, status: E, answeredAtMs: H(), final: I }
        : { phase: "answered", wall: i, status: E, answeredAtMs: H() }
    );
  }
  if (!mne()) return;
  let h = sJe();
  if (
    (a("tengu_cedar_ember_asked", {
      outcome: c(an(m)),
      at_wall: !0,
      attempt: s + 1,
      eligible: E?.eligible ?? !1,
      ineligible_reason: ce(E?.ineligibleReason),
      limit_type: c(i.rateLimitType),
      config_version: h
    }),
    A || E === null || !E.eligible)
  )
    return;
  let C = AW(),
    T = `${i.accountEpoch}:${i.rateLimitType}:${i.wallResetsAt}:${E.eligible}:${E.nextGrantId}`;
  if (C.wallRecordKey === T) return;
  C.wallRecordKey = T;
  let x = Re(E, i.rateLimitType, H()).filter((I) => I.target !== void 0),
    L = x[0]?.target?.grant;
  a("tengu_cedar_ember_wall", {
    eligible: E.eligible,
    at_limit: E.atLimit,
    usable: L !== void 0,
    grant_id: _e(L?.id ?? E.nextGrantId),
    kind: ce(L && qe(L)),
    kinds_offered: Ka(x.map((I) => I.kind)),
    resets_left: L?.resetsLeft ?? 0,
    resets_left_total: xe(E),
    grants: E.grants.length,
    limit_type: c(i.rateLimitType),
    limit_types: Ka(E.exhausted),
    tier: c(uve()),
    auto_armed: b,
    low_priority_active: UO(),
    config_version: h,
    surface: ce(E.eventProps?.surface),
    server_tier: ce(E.eventProps?.tier),
    tenure_bucket: ce(E.eventProps?.tenureBucket),
    billing_path: ce(E.eventProps?.billingPath),
    billing_period: ce(E.eventProps?.billingPeriod),
    extra_usage_state: ce(E.eventProps?.extraUsageState)
  });
}
function nn(i, s, d) {
  if (i.unsettledClaimGrantId === null) return;
  if (i.unsettledClaimEpoch !== Lm()) {
    J(i);
    return;
  }
  if (s?.grants.some((m) => m.id === i.unsettledClaimGrantId && m.usableNow)) return;
  if ((K(d), s !== null && !Ie(s))) J(i);
}
var sr = 600000;
function rn(i) {
  return i.unsettledClaimAtMs !== null && H() - i.unsettledClaimAtMs < sr;
}
function an(i) {
  return i.kind === "answered" ? (i.status === null ? "absent" : "block") : i.kind;
}
function st(i, s) {
  return i.unsettledClaimGrantId === s && i.unsettledClaimEpoch === Lm() && rn(i);
}
function J(i) {
  ((i.unsettledClaimGrantId = null),
    (i.unsettledClaimRequestId = null),
    (i.unsettledClaimEpoch = null),
    (i.unsettledClaimAtMs = null));
}
function sn(i, s, d, m) {
  if (i.unsettledClaimRequestId !== d) i.unsettledClaimAtMs = H();
  ((i.unsettledClaimGrantId = s), (i.unsettledClaimRequestId = d), (i.unsettledClaimEpoch = m));
}
function on(i, s) {
  return st(i, s) && i.unsettledClaimRequestId !== null ? i.unsettledClaimRequestId : qn();
}
function H3t(i, s) {
  let d = qFe(i),
    [m] = d;
  if (m === void 0 || i.resetsAt === void 0) return;
  let b = `${m.rateLimitType}:${i.resetsAt}:${d.map((E) => E.grant.id).join(",")}`,
    _ = AW();
  if (_.shownOfferKey === b) return;
  ((_.shownOfferKey = b),
    a("tengu_cedar_ember_shown", {
      surface: c(s),
      grant_id: _e(m.grant.id),
      kind: c(m.kind),
      kinds_offered: Ka(d.map((E) => E.kind)),
      resets_left: m.grant.resetsLeft,
      resets_left_total: m.totalResetsLeft,
      limit_type: c(m.rateLimitType),
      config_version: sJe()
    }));
}
function aPn(i, s) {
  let d = I6();
  if (it(i) || (d.phase === "answered" && fe(d.wall, i) && Xt(d, i, "dialog", H())))
    Q(i, s, "dialog");
}
async function yxt(i, s, d) {
  try {
    return await or(i, s, d);
  } catch (m) {
    return (l(N(m)), { kind: "answer", result: { outcome: "unavailable", text: XFe } });
  }
}
async function un(i, s) {
  let m = AW().pendingAsk !== null;
  if ((await Q(li(), s, i), m && it(li()))) await Q(li(), s, i);
}
async function or(i, s, d) {
  if (AW().claiming) return { kind: "answer", result: { outcome: "unavailable", text: An } };
  if (li().status !== "rejected" && yae() && mne()) {
    if (UO()) return { kind: "answer", result: { outcome: "not_offered", text: Er } };
    return ur(i, s, d);
  }
  await un(i, s);
  let b = li(),
    _ = qFe(b);
  if (_.length === 0) {
    let E = Z(b);
    if (E !== void 0 && E !== null && (Ie(E) || mn(E, b))) K(s);
    return { kind: "answer", result: cn(b) };
  }
  return ln(i, _, er(b), d);
}
function ln(i, s, d, m) {
  let [b, ..._] = s,
    E = m !== void 0 ? s.find((C) => C.kind === m) : b !== void 0 && _.length === 0 ? b : void 0;
  if (E !== void 0) return (Vpr(i, E), { kind: "confirm", offer: E });
  if (m === void 0) return { kind: "choose", offers: s, unusable: d };
  let A = d.find((C) => C.kind === m);
  return {
    kind: "answer",
    result: {
      outcome: "not_offered",
      text: `${A === void 0 ? Th(PL().noKindLine, { kind: X(m) }) : A.reason.startsWith("can't be used") ? `Your ${X(m)} ${A.reason}` : `Your ${X(m)} can't be used right now \xB7 ${A.reason}`} \xB7 you can use ${dn(s.map((C) => C.kind))}`
    }
  };
}
function dn(i) {
  let s = i.map((m) => `a ${X(m)}`),
    d = s.pop();
  return d === void 0 ? "nothing here" : s.length === 0 ? d : `${s.join(", ")} or ${d}`;
}
function Vpr(i, s) {
  a("tengu_cedar_ember_selected", {
    entry: c(i),
    grant_id: _e(s.grant.id),
    kind: c(s.kind),
    resets_left: s.grant.resetsLeft,
    resets_left_total: s.totalResetsLeft,
    limit_type: ce(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: ke(s),
    auto_armed: o1(),
    config_version: sJe()
  });
}
async function ur(i, s, d) {
  let m = AW(),
    b = await Pe(cPn(s, { read: "cedar_ember" }), nt),
    _ = b?.kind === "answered" ? b.status : null,
    E = b === void 0 || b.kind === "failed" || _?.ineligibleReason === "unavailable";
  if (
    (a("tengu_cedar_ember_asked", {
      outcome: c(an(b ?? { kind: "failed" })),
      at_wall: !1,
      asker: c(i),
      eligible: _?.eligible ?? !1,
      ineligible_reason: ce(_?.ineligibleReason),
      at_limit: _?.atLimit ?? !1,
      grants: _?.grants.length ?? 0,
      grant_id: _e(_?.nextGrantId ?? null),
      config_version: sJe()
    }),
    E)
  )
    return {
      kind: "answer",
      result: { outcome: "unavailable", text: Swe() ? Th(PL().unconfirmedAnytimeLine, {}) : XFe }
    };
  if ((nn(m, _, s), _ === null)) return { kind: "answer", result: Dt(_) };
  let A = H(),
    h = lr(_, A);
  if (h.length === 0) return { kind: "answer", result: Dt(_) };
  return ln(i, h, Vt(_, null, A), d);
}
function lr(i, s) {
  let d = xe(i),
    m = [];
  for (let b of Re(i, null, s))
    if (b.target !== void 0)
      m.push({
        origin: "anytime",
        kind: b.kind,
        grant: b.target.grant,
        resetsLeft: Math.max(1, b.resetsLeft),
        totalResetsLeft: Math.max(1, d),
        weeklyResetsAt: i.weeklyResetsAt,
        endsAtMs: b.target.endsAtMs,
        earlyUse: rr(b.target.grant, i),
        atLimit: i.atLimit
      });
  return m;
}
function Dt(i) {
  if (i === null || !i.eligible || i.grants.length === 0)
    return { outcome: "not_offered", text: `${Le} \xB7 ${pn}` };
  let s = i.grants.filter((_) => _.resetsLeft > 0),
    d = { left: xe(i), date: Zt(s[0]?.endsAt ?? null) };
  if (s.length === 0) return { outcome: "spent", text: Th(PL().spentLine, d) };
  let m =
      s
        .flatMap((_) => _.blocking)
        .map(at)
        .find((_) => _ !== null) ?? null,
    b =
      m !== null
        ? _n(m)
        : s.every((_) => _.paused)
          ? `${Ze} \xB7 it is paused`
          : Ie(i)
            ? `${Ze} \xB7 try again in a minute`
            : s.every((_) => _.useRequiresLimit)
              ? yr
              : `${Ze} \xB7 try again later`;
  return { outcome: "not_offered", text: Th(`${b} \xB7 {resets} left \xB7 use by {date}`, d) };
}
function cn(i) {
  let s = YFe(i);
  if (s !== void 0) return { outcome: "spent", text: s };
  if (it(i)) return { outcome: "unavailable", text: Swe() ? Th(PL().unconfirmedLine, {}) : XFe };
  let d = Z(i);
  if (d !== void 0 && d !== null && mn(d, i)) return { outcome: "not_offered", text: gr };
  return { outcome: "not_offered", text: fn(dr(i), i) };
}
function mn(i, s) {
  let d = s.rateLimitType;
  return (
    d !== void 0 &&
    !i.exhausted.some((m) => m === d) &&
    i.grants.some((m) => m.usableNow && !m.paused && oe(m, d))
  );
}
function Ie(i) {
  let s = _xt(i.cooldownUntil);
  return s !== void 0 && s > H();
}
function dr(i) {
  let s = Z(i);
  if (s === void 0 || s === null || i.rateLimitType === void 0) return Le;
  let d = i.rateLimitType,
    m = s.grants.filter((_) => _.resetsLeft > 0);
  if (m.length === 0) return Le;
  if (!m.some((_) => oe(_, d))) return `${pr} ${Se(d)}`;
  if (d === "seven_day" && m.every((_) => _.givesBackWeekly && _.blocking.includes("seven_day")))
    return `Your Fable reset can't be used right now \xB7 ${bn}`;
  let b =
    m
      .filter((_) => oe(_, d))
      .flatMap((_) => _.blocking)
      .map(at)
      .find((_) => _ !== null) ?? null;
  if (b !== null) return _n(b);
  if (m.every((_) => _.paused)) return `${Qe} \xB7 it is paused`;
  if (Ie(s)) return `${Qe} \xB7 try again in a minute`;
  return Qe;
}
function fn(i, s) {
  let d = LC(s) ? LE(s.resetsAt) : void 0;
  return d !== void 0 ? `${i} \xB7 this limit resets ${d}` : `${i} \xB7 ${pn}`;
}
function lto(i, s) {
  a("tengu_cedar_ember_confirmed", {
    confirmed: !1,
    entry: c(i),
    grant_id: _e(s.grant.id),
    kind: c(s.kind),
    limit_type: ce(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: ke(s),
    percent_used_max: et(s),
    config_version: sJe()
  });
  let d = PL();
  return {
    outcome: "kept",
    text: Th(s.grant.useRequiresLimit ? d.keptLine : d.keptAnytimeLine, Nie(s))
  };
}
function dto(i, s) {
  let [d, ...m] = s;
  if (d === void 0) return { outcome: "kept", text: Le };
  let b = m.reduce(
    (_, E) => (E.endsAtMs !== null && (_.endsAtMs === null || E.endsAtMs < _.endsAtMs) ? E : _),
    d
  );
  return (
    a("tengu_cedar_ember_confirmed", {
      confirmed: !1,
      chose_none: !0,
      entry: c(i),
      kinds_offered: Ka(s.map((_) => _.kind)),
      limit_type: ce(b.origin === "wall" ? b.rateLimitType : void 0),
      at_limit: b.origin === "wall" || b.atLimit,
      config_version: sJe()
    }),
    { outcome: "kept", text: Th(PL().keptChoiceLine, Nie(b)) }
  );
}
async function cto(i, s, d) {
  let m = AW();
  if (m.claiming) return { outcome: "unavailable", text: An };
  m.claiming = !0;
  try {
    return d.origin === "wall" || rt(li()) !== null ? await mr(i, s, d) : await fr(i, s, d);
  } catch (b) {
    l(N(b));
    let _ = PL();
    return {
      outcome: "unavailable",
      text: Th(d.origin === "wall" ? _.unconfirmedLine : _.unconfirmedAnytimeLine, {})
    };
  } finally {
    m.claiming = !1;
  }
}
async function mr(i, s, d) {
  let m = AW(),
    b = PL(),
    _ = sJe(),
    E = d.grant.id;
  await un(i, s);
  let A = li(),
    h = rt(A),
    C = qFe(A),
    T = C.find((R) => R.kind === d.kind);
  if (
    (a("tengu_cedar_ember_confirmed", {
      confirmed: !0,
      entry: c(i),
      grant_id: _e(E),
      kind: c(d.kind),
      limit_type: ce(A.rateLimitType),
      still_offered: T !== void 0 && T.grant.id === E,
      at_limit: !0,
      early_use: !1,
      config_version: _
    }),
    h === null || C.length === 0)
  )
    return cn(A);
  if (T === void 0)
    return {
      outcome: "not_offered",
      text: `${Th(_r, { kind: X(d.kind) })} \xB7 you can use ${dn(C.map((R) => R.kind))}`
    };
  if (T.grant.id !== E) return { outcome: "not_offered", text: wr };
  let x = Date.now(),
    L = st(m, E),
    I = on(m, E),
    O = (await Pe(gto(s, E, I), zt)) ?? {
      result: "error",
      reason: null,
      resetsLeft: null,
      cleared: [],
      weeklyResetsAt: null
    };
  switch (
    (a("tengu_cedar_ember_result", {
      result: c(O.result),
      reason: ce(O.reason),
      entry: c(i),
      grant_id: _e(E),
      kind: c(T.kind),
      resets_left: O.resetsLeft ?? void 0,
      cleared: Ka(O.cleared),
      limit_type: c(h.rateLimitType),
      at_limit: !0,
      early_use: !1,
      latency_ms: Date.now() - x,
      config_version: _
    }),
    O.result)
  ) {
    case "reset":
    case "not_limited":
    case "cooldown":
    case "already_used":
    case "ineligible":
      g("cedar_ember");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      f("cedar_ember", O.result);
      break;
  }
  let D = T.resetsLeft - T.grant.resetsLeft,
    We = O.resetsLeft ?? (O.result === "already_used" ? 0 : Math.max(0, T.grant.resetsLeft - 1)),
    G = {
      ...Nie(T),
      left: D + We,
      kindResets: me(T.kind, D + We),
      week: Ce(O.weeklyResetsAt ?? T.weeklyResetsAt)
    };
  switch (O.result) {
    case "reset": {
      (J(m), yto());
      let R = [h.rateLimitType, ...Te(O.cleared).filter((ie) => ie !== h.rateLimitType)];
      if (!T.grant.clears.some((ie) => ie === h.rateLimitType)) {
        nDe(R);
        let ie = H();
        await Pe(
          Vgt(s, void 0).catch(($e) => {
            l(N($e));
          }),
          nt
        );
        let F = jVn() > ie,
          ae = li(),
          ye = F && LC(ae),
          Ke = ye && ae.rateLimitType === h.rateLimitType;
        if (
          (a("tengu_cedar_ember_give_back", {
            outcome: c(Ke ? "binds" : ye ? "elsewhere" : F ? "lifted" : "unread"),
            entry: c(i),
            grant_id: _e(E),
            config_version: _
          }),
          Ke)
        )
          return (
            ue(h),
            Q(ae, s, i),
            {
              outcome: "reset",
              text: Th(br, { ...G, limit: Se(h.rateLimitType), date: LE(ae.resetsAt, !1, !0, !0) })
            }
          );
        R = F ? [] : R;
      }
      let q = Ht(m, h);
      Gt(m, h, R, i, q);
      let Fe = Th(b.successLine, G);
      return { outcome: "reset", text: q ? Fe : Jt(Fe) };
    }
    case "not_limited": {
      J(m);
      let R = Ht(m, h);
      Gt(m, h, [h.rateLimitType], i, R);
      let q = L ? Cr : Ar;
      return { outcome: "reset", text: R ? q : Jt(q) };
    }
    case "cooldown": {
      if (!L) J(m);
      return (K(s), { outcome: "unavailable", text: L ? hn : kr });
    }
    case "already_used": {
      if (L) return (J(m), ue(h), K(s), { outcome: "spent", text: wn });
      if (T.totalResetsLeft - T.grant.resetsLeft > 0)
        return (ue(h), Q(li(), s, i), K(s), { outcome: "spent", text: Th(`${ve} \xB7 ${yn}`, G) });
      return (Rr(h, E), K(s), { outcome: "spent", text: Th(ve, G) });
    }
    case "ineligible": {
      if ((ue(h), Q(li(), s, i), L)) return (J(m), K(s), { outcome: "not_offered", text: tt });
      return { outcome: "not_offered", text: fn(En, A) };
    }
    case "auth_error":
      return { outcome: "unavailable", text: Cn };
    case "rate_limited":
      return { outcome: "unavailable", text: Th(L ? b.unconfirmedLine : b.unavailableLine, G) };
    case "unavailable":
    case "error": {
      sn(m, E, I, h.accountEpoch);
      let R = Te(O.cleared);
      if (R.length > 0) {
        if ((nDe(R), R.includes(h.rateLimitType))) K(s);
      }
      return (
        ue(h),
        Q(li(), s, i),
        { outcome: "unavailable", text: Th(L ? b.stillUnconfirmedLine : b.unconfirmedLine, G) }
      );
    }
  }
}
function et(i) {
  return i.origin === "anytime" ? (i.earlyUse?.percentUsedMax ?? void 0) : void 0;
}
function ke(i) {
  return i.origin === "anytime" && i.earlyUse !== null;
}
async function fr(i, s, d) {
  let m = AW(),
    b = PL(),
    _ = sJe(),
    E = d.grant.id,
    A = Lm();
  a("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: c(i),
    grant_id: _e(E),
    kind: c(d.kind),
    at_limit: d.atLimit,
    early_use: ke(d),
    percent_used_max: et(d),
    config_version: _
  });
  let h = Date.now(),
    C = st(m, E),
    T = on(m, E),
    x = (await Pe(gto(s, E, T), zt)) ?? {
      result: "error",
      reason: null,
      resetsLeft: null,
      cleared: [],
      weeklyResetsAt: null
    };
  switch (
    (a("tengu_cedar_ember_result", {
      result: c(x.result),
      reason: ce(x.reason),
      entry: c(i),
      grant_id: _e(E),
      kind: c(d.kind),
      resets_left: x.resetsLeft ?? void 0,
      cleared: Ka(x.cleared),
      at_limit: d.atLimit,
      early_use: ke(d),
      percent_used_max: et(d),
      latency_ms: Date.now() - h,
      config_version: _
    }),
    x.result)
  ) {
    case "reset":
    case "not_limited":
    case "cooldown":
    case "already_used":
    case "ineligible":
      g("cedar_ember");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      f("cedar_ember", x.result);
      break;
  }
  let L = d.resetsLeft - d.grant.resetsLeft,
    I = x.resetsLeft ?? (x.result === "already_used" ? 0 : Math.max(0, d.grant.resetsLeft - 1)),
    O = {
      ...Nie(d),
      left: L + I,
      kindResets: me(d.kind, L + I),
      week: Ce(x.weeklyResetsAt ?? d.weeklyResetsAt)
    };
  switch (x.result) {
    case "reset": {
      (J(m), yto());
      let D = Te(x.cleared);
      if (D.length > 0) nDe(D);
      return (K(s), { outcome: "reset", text: Th(b.successLine, O) });
    }
    case "not_limited":
      if ((J(m), C)) return (K(s), { outcome: "not_offered", text: tt });
      return { outcome: "not_offered", text: hr };
    case "cooldown":
      if (!C) J(m);
      return (K(s), { outcome: "unavailable", text: C ? hn : Lr });
    case "already_used":
      if (C) return (J(m), K(s), { outcome: "spent", text: wn });
      return {
        outcome: "spent",
        text: Th(d.totalResetsLeft - d.grant.resetsLeft > 0 ? `${ve} \xB7 ${yn}` : ve, O)
      };
    case "ineligible":
      if (C) return (J(m), K(s), { outcome: "not_offered", text: tt });
      return { outcome: "not_offered", text: En };
    case "auth_error":
      return { outcome: "unavailable", text: Cn };
    case "rate_limited":
      return {
        outcome: "unavailable",
        text: Th(C ? b.unconfirmedAnytimeLine : b.unavailableLine, O)
      };
    case "unavailable":
    case "error": {
      sn(m, E, T, A);
      let D = Te(x.cleared);
      if (D.length > 0) nDe(D);
      if (D.length > 0 || C) K(s);
      return {
        outcome: "unavailable",
        text: Th(C ? b.stillUnconfirmedLine : b.unconfirmedAnytimeLine, O)
      };
    }
  }
}
var Le = "No reset to use",
  pn = "you're not at a usage limit right now",
  Qe = "Your reset can't be used for this limit right now",
  pr = "None of your resets refill your",
  bn = "no Fable usage this week to give back",
  br = "{Kind} used \xB7 you're still at your {limit} until {date} \xB7 {kindResets} left",
  _r = "Your {kind} is no longer on offer \xB7 nothing was used",
  gr = `This limit may have lifted already \xB7 checking your limits now \xB7 run /${WF} again in a moment to use your reset anyway`,
  yr = `You have a reset saved for when you reach a usage limit \xB7 run /${WF} when you do`,
  Ze = "Your reset can't be used right now",
  Er = `Resets can't be used while you continue at lower priority \xB7 run /${WF} after that ends`,
  hr = "Your reset only works at a usage limit, and you're not at one now \xB7 nothing was used";
function _n(i) {
  return `Your reset doesn't refill your ${i}, so it can't be used until that resets`;
}
var XFe = "Couldn't check for a reset right now \xB7 try again in a moment",
  G5e = "Checking for a reset\u2026",
  ve = "That reset was already used \xB7 nothing changed just now \xB7 {kindResets} left",
  yn = `run /${WF} again to use one`,
  En = "This reset isn't available any more \xB7 nothing was used",
  wr = `A different reset is on offer now \xB7 nothing was used \xB7 run /${WF} again to see it`,
  Ar = "Your limit had already reset on its own \xB7 nothing was used",
  Cr = "Your limits are clear",
  kr =
    "Another reset was just started on your account \xB7 checking your limits now \xB7 if you're still at the limit in a minute, try again",
  hn =
    "Your earlier reset may still be going through \xB7 checking your limits now \xB7 try again in a minute if they aren't refilled",
  Lr =
    "Another reset was just started on your account \xB7 this one wasn't used \xB7 try again in a minute",
  wn = "Your earlier reset went through after all \xB7 checking your limits now",
  tt =
    "This reset isn't available any more \xB7 your earlier try may have gone through \xB7 checking your limits now",
  vr = "send a message to continue",
  An = "Your limits are already being reset \xB7 one moment",
  Cn = "Couldn't reset your limits with this login \xB7 run /login, then try again";
function Jt(i) {
  return `${i} \xB7 ${vr}`;
}
function Ht(i, s) {
  let d = A0s() && i.continuableWallResetsAt === s.wallResetsAt;
  return ((i.continuableWallResetsAt = null), d);
}
function Te(i) {
  let s = [];
  for (let d of i)
    switch (d) {
      case "five_hour":
      case "seven_day":
      case "seven_day_overage_included":
      case "seven_day_opus":
      case "seven_day_sonnet":
        s.push(d);
        break;
      case "seven_day_cowork":
      case "seven_day_omelette":
      case "seven_day_oauth_apps":
        break;
    }
  return s;
}
function Gt(i, s, d, m, b) {
  let _ = [
    () => s1("cedar_ember"),
    () => {
      _U("reset");
    },
    () => Tr(d),
    () => {
      (ue(s), (i.wallRecordKey = null), (i.shownOfferKey = null));
    },
    () => {
      if (b) Act();
    },
    () => i.events.emit({ type: "reset", entry: m })
  ];
  for (let E of _)
    try {
      E();
    } catch (A) {
      l(N(A));
    }
}
function Tr(i) {
  if (i.length > 0) nDe(i);
  let s = li();
  if (s.status !== "rejected" || s.rateLimitType === void 0 || !i.includes(s.rateLimitType)) return;
  qWe({ ...s, status: "allowed", rateLimitType: void 0, resetsAt: void 0 });
}
function K(i) {
  if (o1()) {
    y8e();
    return;
  }
  Vgt(i, void 0).catch((s) => {
    l(N(s));
  });
}
function ue(i) {
  let s = I6();
  if (
    s.phase !== "idle" &&
    s.wall.wallResetsAt === i.wallResetsAt &&
    s.wall.rateLimitType === i.rateLimitType
  )
    bxt({ phase: "idle" });
}
function Rr(i, s) {
  let d = I6();
  if (
    d.phase !== "answered" ||
    d.wall.wallResetsAt !== i.wallResetsAt ||
    d.wall.rateLimitType !== i.rateLimitType ||
    d.status === null
  )
    return;
  bxt({
    ...d,
    answeredAtMs: H(),
    status: {
      ...d.status,
      nextGrantId: d.status.nextGrantId === s ? null : d.status.nextGrantId,
      grants: d.status.grants.map((m) => (m.id === s ? { ...m, resetsLeft: 0, usableNow: !1 } : m))
    }
  });
}
function xr(i) {
  if (i.sessionSwitchSubscribed) return;
  ((i.sessionSwitchSubscribed = !0),
    Eu((s, d) => {
      if (VIe(d)) i.continuableWallResetsAt = null;
    }));
}
var Sr = "juniper_tide",
  Ir = 25000,
  Or = p(() =>
    u({
      surface: B(["claude_ai", "claude_code_cli", "unknown"]).catch("unknown"),
      tier: B(["claude_pro", "claude_max_5x", "claude_max_20x", "unknown"]).catch("unknown"),
      tenure_bucket: B(["under_14", "14-29", "30-89", "90-364", "365+", "unknown"]).catch(
        "unknown"
      ),
      billing_path: B(["stripe", "apple", "google_play", "other", "unknown"]).catch("unknown"),
      billing_period: B(["monthly", "annual", "unknown"]).catch("unknown"),
      extra_usage_state: B(["not_configured", "disabled", "enabled", "unknown"]).catch("unknown")
    })
  ),
  Ur = p(() =>
    u({
      eligible: M(),
      ineligible_reason: B([
        "tier",
        "tenure",
        "surface",
        "mobile",
        "cli_version",
        "not_at_wall",
        "weekly_limit",
        "no_weekly_limit",
        "other_experiment",
        "extra_usage",
        "unavailable",
        "unknown"
      ])
        .catch("unknown")
        .nullable()
        .optional(),
      in_experiment: M().optional(),
      arm: B(["control", "reset"]).nullable().optional().catch(null),
      available: M().optional(),
      next_available_at: o().nullable().optional().catch(null),
      weekly_resets_at: o().nullable().optional().catch(null),
      resets_per_week: v()
        .optional()
        .catch(void 0),
      event_props: Or().nullable().optional().catch(null)
    })
  ),
  Mr = p(() =>
    u({
      result: B(["reset", "already_used", "not_limited", "ineligible", "unavailable"]).catch(
        "unavailable"
      ),
      next_available_at: o().nullable().optional().catch(null),
      weekly_resets_at: o().nullable().optional().catch(null)
    })
  );
function Nr(i) {
  if (i === void 0 || i === null) return null;
  let s = Ur().safeParse(i);
  if (!s.success)
    return (t(`[juniper-tide] ignoring a malformed status block: ${s.error.message}`), null);
  let d = s.data,
    m = d.event_props;
  return {
    eligible: d.eligible,
    ineligibleReason: d.ineligible_reason ?? null,
    inExperiment: d.in_experiment ?? !1,
    arm: d.arm ?? null,
    available: d.available ?? !1,
    nextAvailableAt: d.next_available_at ?? null,
    weeklyResetsAt: d.weekly_resets_at ?? null,
    resetsPerWeek: d.resets_per_week ?? 1,
    eventProps: m
      ? {
          surface: m.surface,
          tier: m.tier,
          tenureBucket: m.tenure_bucket,
          billingPath: m.billing_path,
          billingPeriod: m.billing_period,
          extraUsageState: m.extra_usage_state
        }
      : null
  };
}
async function kn(i) {
  try {
    if (!kf()) return { kind: "no_profile_scope" };
    let s = await _O(i, { read: "at_wall" });
    if (!KWe(s))
      return (
        t("[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)", {
          level: "warn"
        }),
        { kind: "failed" }
      );
    return { kind: "answered", status: Nr(s?.juniper_tide) };
  } catch (s) {
    if ((t(`[juniper-tide] status fetch failed: ${N(s).message}`, { level: "warn" }), G$t(s)))
      return { kind: "answered", status: null };
    return { kind: "failed" };
  }
}
async function Ln(i) {
  let s = gn()?.organizationUuid;
  if (!s)
    return (
      t("[juniper-tide] no OAuth organization; cannot claim"),
      { result: "auth_error", nextAvailableAt: null }
    );
  try {
    let d = await Sv(
      () =>
        jt.post(
          `/api/organizations/${s}/reset_rate_limits`,
          { program: Sr },
          {
            auth: "async",
            headers: { "Content-Type": "application/json" },
            timeout: Ir,
            refreshOAuth: !0,
            credentials: i
          }
        ),
      { credentials: i }
    );
    if (!d.ok)
      return (
        t(`[juniper-tide] claim not sent: ${d.reason === "no-auth" ? d.detail : d.reason}`, {
          level: "warn"
        }),
        { result: d.reason === "no-auth" ? "auth_error" : "error", nextAvailableAt: null }
      );
    let m = Mr().safeParse(d.data);
    if (!m.success)
      return (
        t(`[juniper-tide] unreadable claim response: ${m.error.message}`, { level: "error" }),
        l(Error("[juniper-tide] unreadable claim response")),
        { result: "error", nextAvailableAt: null }
      );
    return { result: m.data.result, nextAvailableAt: m.data.next_available_at ?? null };
  } catch (d) {
    if (Pp(d)) t(`[juniper-tide] claim failed: ${N(d).message}`, { level: "warn" });
    else l(N(d));
    if (Yd(d))
      switch (d.response?.status) {
        case 429:
          return { result: "rate_limited", nextAvailableAt: null };
        case 401:
        case 403:
          return { result: "auth_error", nextAvailableAt: null };
        default:
          break;
      }
    return { result: "error", nextAvailableAt: null };
  }
}
function Pr() {
  return {
    state: { phase: "idle" },
    shownWallResetsAt: null,
    pendingAsk: null,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimWallResetsAt: null,
    sessionSwitchSubscribed: !1,
    changed: De(),
    events: De()
  };
}
var Wr = new W(Pr);
function Y() {
  return Wr.of(U().host);
}
function OX() {
  return Y().state;
}
function re(i) {
  let s = Y();
  ((s.state = i), s.changed.emit());
}
function $ie(i) {
  return Y().changed.subscribe(i);
}
function uto(i) {
  return Y().events.subscribe(i);
}
var Fr = 3,
  Kr = 12000,
  $r = 35000;
function lt(i, s) {
  return s.resetsAt === i.wallResetsAt && i.accountEpoch === Lm();
}
function Ue(i) {
  let s = OX();
  return s.phase === "answered" && lt(s, i) ? s.status : void 0;
}
function ot(i) {
  let s = OX();
  return s.phase === "failed" && lt(s, i);
}
function MX(i, s = Date.now()) {
  let d = Ue(i);
  return (
    T3e(i) &&
    d !== void 0 &&
    d !== null &&
    d.arm === "reset" &&
    d.available &&
    i.resetsAt !== void 0 &&
    i.resetsAt * 1000 > s &&
    !UO() &&
    Uge()
  );
}
function JFe(i, s = Date.now()) {
  let d = Ue(i);
  if (
    !T3e(i) ||
    d === void 0 ||
    d === null ||
    d.arm !== "reset" ||
    d.available ||
    d.nextAvailableAt === null ||
    i.resetsAt === void 0 ||
    i.resetsAt * 1000 <= s ||
    !Uge()
  )
    return;
  return HOr(Bge().spentLine, ut(d.nextAvailableAt));
}
function ut(i) {
  if (i === null) return;
  let s = Date.parse(i);
  return Number.isFinite(s) ? LE(Math.floor(s / 1000), !1, !0, !0) : void 0;
}
function Qcs(i, s) {
  if (!Uge() || !T3e(i)) return;
  let d = Y();
  (Yr(d), (d.continuableWallResetsAt = i.resetsAt ?? null), Oe(i, s, "wall"));
}
function Oe(i, s, d) {
  if (!Uge() || !T3e(i)) return Promise.resolve();
  let m = i.resetsAt;
  if (m === void 0) return Promise.resolve();
  let b = Y(),
    _ = Lm(),
    E = b.state,
    A = 0;
  if (E.phase !== "idle" && lt(E, i))
    switch (E.phase) {
      case "answered":
        return Promise.resolve();
      case "asking":
        return b.pendingAsk ?? Promise.resolve();
      case "failed":
        if (d === "wall" && E.failures >= Fr) return Promise.resolve();
        A = E.failures;
    }
  re({ phase: "asking", wallResetsAt: m, accountEpoch: _ });
  let h = o1(),
    C = Pe(kn(s), Kr)
      .then((T) => {
        Tn({
          wallResetsAt: m,
          accountEpoch: _,
          failures: A,
          result: T ?? { kind: "failed" },
          autoArmed: h
        });
      })
      .catch((T) => {
        l(N(T));
        try {
          Tn({
            wallResetsAt: m,
            accountEpoch: _,
            failures: A,
            result: { kind: "failed" },
            autoArmed: h
          });
        } catch (x) {
          l(N(x));
        }
      })
      .finally(() => {
        if (b.pendingAsk === C) b.pendingAsk = null;
      });
  return ((b.pendingAsk = C), C);
}
function Tn({ wallResetsAt: i, accountEpoch: s, failures: d, result: m, autoArmed: b }) {
  let _ = OX();
  if (_.phase !== "asking" || _.wallResetsAt !== i || _.accountEpoch !== s) return;
  let E = m.kind === "answered" ? m.status : null;
  if (m.kind === "failed")
    re({ phase: "failed", wallResetsAt: i, accountEpoch: s, failures: d + 1 });
  else re({ phase: "answered", wallResetsAt: i, accountEpoch: s, status: E });
  if (
    (a("tengu_juniper_tide_asked", {
      outcome: c(m.kind === "answered" ? (E === null ? "absent" : "block") : m.kind),
      attempt: d + 1,
      eligible: E?.eligible ?? !1,
      ineligible_reason: ce(E?.ineligibleReason) ?? void 0,
      config_version: L2n()
    }),
    E === null || !E.eligible)
  )
    return;
  a("tengu_juniper_tide_wall", {
    in_experiment: E.inExperiment,
    arm: ce(E.arm) ?? void 0,
    available: E.available,
    tier: c(uve()),
    auto_armed: b,
    low_priority_active: UO(),
    config_version: L2n(),
    surface: ce(E.eventProps?.surface) ?? void 0,
    server_tier: ce(E.eventProps?.tier) ?? void 0,
    tenure_bucket: ce(E.eventProps?.tenureBucket) ?? void 0,
    billing_path: ce(E.eventProps?.billingPath) ?? void 0,
    billing_period: ce(E.eventProps?.billingPeriod) ?? void 0,
    extra_usage_state: ce(E.eventProps?.extraUsageState) ?? void 0
  });
}
function L3t(i, s) {
  let d = i.resetsAt ?? null,
    m = Y();
  if (d === null || m.shownWallResetsAt === d) return;
  m.shownWallResetsAt = d;
  let b = Ue(i);
  a("tengu_juniper_tide_shown", {
    arm: ce(b?.arm) ?? void 0,
    surface: c(s),
    config_version: L2n()
  });
}
function fto(i, s) {
  if (ot(i)) Oe(i, s, "dialog");
}
async function nlt(i, s) {
  try {
    return await Dr(i, s);
  } catch (d) {
    return (l(N(d)), { outcome: "unavailable", text: Bge().unavailableLine });
  }
}
async function Dr(i, s) {
  let d = Y(),
    m = Bge();
  if (Ue(li()) === void 0) {
    let C = d.pendingAsk !== null;
    if ((await Oe(li(), s, i), C && ot(li()))) await Oe(li(), s, i);
  }
  let b = li();
  if (!MX(b) || b.resetsAt === void 0) {
    let C = JFe(b);
    if (C !== void 0) return { outcome: "spent", text: C };
    return ot(b)
      ? { outcome: "unavailable", text: m.unavailableLine }
      : { outcome: "not_offered", text: Rn };
  }
  if (d.claiming) return { outcome: "unavailable", text: Jr };
  let _ = b.resetsAt,
    E = L2n();
  a("tengu_juniper_tide_selected", { entry: c(i), auto_armed: o1(), config_version: E });
  let A = Date.now(),
    h;
  d.claiming = !0;
  try {
    h = (await Pe(Ln(s), $r)) ?? { result: "error", nextAvailableAt: null };
  } finally {
    d.claiming = !1;
  }
  switch (
    (a("tengu_juniper_tide_result", {
      result: c(h.result),
      entry: c(i),
      latency_ms: Date.now() - A,
      config_version: E
    }),
    h.result)
  ) {
    case "reset":
    case "not_limited":
    case "already_used":
    case "ineligible":
      g("juniper_tide");
      break;
    case "unavailable":
    case "rate_limited":
    case "auth_error":
    case "error":
      f("juniper_tide", h.result);
      break;
  }
  switch (h.result) {
    case "reset":
    case "not_limited": {
      d.unsettledClaimWallResetsAt = null;
      let C = C0s() && d.continuableWallResetsAt === _;
      ((d.continuableWallResetsAt = null), Gr(d, _, i, C));
      let T = HOr(m.successLine, h.result === "reset" ? ut(h.nextAvailableAt) : void 0);
      return { outcome: "reset", text: C ? T : `${T} \xB7 send a message to continue` };
    }
    case "already_used": {
      if ((Br(_, h.nextAvailableAt), d.unsettledClaimWallResetsAt === _))
        ((d.unsettledClaimWallResetsAt = null), zr(s));
      return { outcome: "spent", text: HOr(m.spentLine, ut(h.nextAvailableAt)) };
    }
    case "ineligible":
      return (Xr(_), { outcome: "not_offered", text: Rn });
    case "auth_error":
      return { outcome: "unavailable", text: Hr };
    case "unavailable":
    case "rate_limited":
    case "error":
      if (h.result === "error") d.unsettledClaimWallResetsAt = _;
      return { outcome: "unavailable", text: m.unavailableLine };
  }
}
var Rn = "A session-limit reset isn't available right now.",
  Jr = "Your session limit is already being reset \xB7 one moment",
  Hr = "Couldn't reset your session limit with this login \xB7 run /login, then try again";
function Gr(i, s, d, m) {
  let b = [
    () => s1("juniper_tide"),
    () => {
      _U("reset");
    },
    () => jr(s),
    () => {
      let _ = OX();
      if (_.phase !== "idle" && _.wallResetsAt === s) re({ phase: "idle" });
    },
    () => {
      if (m) Act();
    },
    () => i.events.emit({ type: "reset", entry: d })
  ];
  for (let _ of b)
    try {
      _();
    } catch (E) {
      l(N(E));
    }
}
function jr(i) {
  nDe(["five_hour"]);
  let s = li();
  if (s.status !== "rejected" || s.rateLimitType !== "five_hour" || s.resetsAt !== i) return;
  qWe({ ...s, status: "allowed", rateLimitType: void 0, resetsAt: void 0 });
}
function zr(i) {
  if (o1()) {
    y8e();
    return;
  }
  Vgt(i, void 0).catch((s) => {
    l(N(s));
  });
}
function Br(i, s) {
  let d = OX();
  if (d.phase !== "answered" || d.wallResetsAt !== i || d.status === null) return;
  re({
    ...d,
    status: { ...d.status, available: !1, nextAvailableAt: s ?? d.status.nextAvailableAt }
  });
}
function Xr(i) {
  let s = OX();
  if (s.phase !== "answered" || s.wallResetsAt !== i || s.status === null) return;
  re({ ...s, status: { ...s.status, eligible: !1, available: !1 } });
}
function Yr(i) {
  if (i.sessionSwitchSubscribed) return;
  ((i.sessionSwitchSubscribed = !0),
    Eu((s, d) => {
      if (VIe(d)) i.continuableWallResetsAt = null;
    }));
}
var lPn = "session running",
  N3t = "session waiting for a prompt",
  qr = "session waiting",
  pe = " \xB7 ",
  Vr = /^[0-9a-f]{8}$/,
  xn = 20;
function pto(i) {
  let s = i
    .split(kI)
    .map((b) => b.trim())
    .filter(Boolean);
  if (s.length === 0) return;
  let [d, ...m] = s;
  return m.length === 0 ? d : `${d} ${kI} ${m.join(pe)}`;
}
function dPn(i) {
  if (!i.startsWith(lPn) && !i.startsWith(N3t)) return null;
  if (
    i.includes(`
`)
  )
    return null;
  let s = i.split(pe),
    d = s[0];
  if (d !== lPn && d !== N3t) return null;
  let m = s.findLastIndex((C) => Vr.test(C)),
    b = m === -1 ? void 0 : s[m],
    _ = m === -1 ? s.length : m,
    E = s.slice(1, _),
    A = E.length > 0 ? E.join(pe) : void 0,
    h = m === -1 ? [] : s.slice(m + 1);
  return { state: d, name: A, id: b, chips: h };
}
function mto(i, s, d = !0) {
  let m = (_) => le(qpr(_)),
    b = { ...i, chips: [...i.chips] };
  if (m(b) <= s) return b;
  if (b.state === N3t) {
    if (((b = { ...b, state: qr }), m(b) <= s)) return b;
  }
  if (b.id !== void 0 && b.name !== void 0 && d) {
    if (((b = { ...b, id: void 0 }), m(b) <= s)) return b;
  }
  if (b.name !== void 0) {
    let _ = m({ ...b, name: void 0 }),
      E = s - _ - le(pe),
      A = le(b.name),
      h = A > xn ? Math.max(E, xn) : E;
    if (h >= 1 && h < A) b = { ...b, name: gt(b.name, h) };
  }
  return b;
}
function qpr(i) {
  return [i.state, ...(i.name ? [i.name] : []), ...(i.id ? [i.id] : []), ...i.chips].join(pe);
}
function ti(i) {
  let { index: q } = i;
  return q !== -1;
}
var Sn = [ZUo, s1r, QUo].map((i) => ({ url: i, marker: `learn more: ${i}` }));
function _we(i) {
  let _ = w(33),
    { children: s, color: d, bold: m } = i,
    b = a6e(),
    E,
    A,
    h,
    C,
    T,
    x;
  if (_[0] !== m || _[1] !== s || _[2] !== d || _[3] !== b) {
    x = vn;
    We: {
      let L;
      if (_[10] !== s)
        ((L = (I) => {
          let { url: O, marker: D } = I;
          return { url: O, marker: D, index: s.indexOf(D) };
        }),
          (_[10] = s),
          (_[11] = L));
      else L = _[11];
      A = Sn.map(L).find(ti);
      if (!b || A === void 0) {
        let I;
        if (_[12] !== m || _[13] !== s || _[14] !== d)
          ((I = e(F2, { color: d, bold: m, children: s })),
            (_[12] = m),
            (_[13] = s),
            (_[14] = d),
            (_[15] = I));
        else I = _[15];
        x = I;
        break We;
      }
      E = n;
      h = d;
      C = m;
      T = s.slice(0, A.index);
    }
    ((_[0] = m),
      (_[1] = s),
      (_[2] = d),
      (_[3] = b),
      (_[4] = E),
      (_[5] = A),
      (_[6] = h),
      (_[7] = C),
      (_[8] = T),
      (_[9] = x));
  } else ((E = _[4]), (A = _[5]), (h = _[6]), (C = _[7]), (T = _[8]), (x = _[9]));
  if (x !== vn) return x;
  let L;
  if (_[16] !== m || _[17] !== d)
    ((L = e(n, { color: d, bold: m, underline: !0, children: "learn more" })),
      (_[16] = m),
      (_[17] = d),
      (_[18] = L));
  else L = _[18];
  let I;
  if (_[19] !== A.url || _[20] !== L)
    ((I = e(Yt, { url: A.url, children: L })), (_[19] = A.url), (_[20] = L), (_[21] = I));
  else I = _[21];
  let G;
  if (_[22] !== s || _[23] !== A.index || _[24] !== A.marker.length)
    ((G = s.slice(A.index + A.marker.length)),
      (_[22] = s),
      (_[23] = A.index),
      (_[24] = A.marker.length),
      (_[25] = G));
  else G = _[25];
  let R;
  if (_[26] !== E || _[27] !== h || _[28] !== C || _[29] !== T || _[30] !== I || _[31] !== G)
    ((R = r(E, { color: h, bold: C, children: [T, I, G] })),
      (_[26] = E),
      (_[27] = h),
      (_[28] = C),
      (_[29] = T),
      (_[30] = I),
      (_[31] = G),
      (_[32] = R));
  else R = _[32];
  return R;
}
export {
  _we,
  O3t,
  LR,
  iPn,
  Vcs,
  rto,
  M3t,
  oto,
  UB,
  zpr,
  Kpr,
  bwe,
  sto,
  ito,
  VFe,
  qcs,
  qFe,
  hxt,
  ato,
  Swe,
  D3t,
  YFe,
  Ycs,
  Nie,
  Xcs,
  Jcs,
  H3t,
  aPn,
  yxt,
  Vpr,
  lto,
  dto,
  cto,
  XFe,
  G5e,
  OX,
  $ie,
  uto,
  MX,
  JFe,
  Qcs,
  L3t,
  fto,
  nlt,
  lPn,
  N3t,
  pto,
  dPn,
  mto,
  qpr
};

//# sourceMappingURL=chunk-k3pw66x1.js.map
