// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ru, S6, zTn, J } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { N, E, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Le } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { _, te } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Uu, qfe, eF, Q0 } from "./chunk-4nzy53ma.js";
import { p } from "./chunk-qmkm2x59.js";
import { k, Wn } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Y } from "./chunk-arw2bgak.js";
import { Dn } from "./chunk-qywdxehb.js";
import { Ap } from "./chunk-v4kbwz0z.js";
import { We } from "./chunk-pgnjjhxv.js";
import { JE, kd } from "./chunk-bh50mq9d.js";
import {
  wPs,
  JHt,
  EL,
  Y9e,
  vPs,
  EPs,
  _vo,
  X9e,
  J9e,
  OCr,
  Tjn,
  S3,
  MCr,
  DCr,
  Yme,
  Xme,
  Q9e,
  QHt,
  DOe,
  w3,
  hK,
  Jme,
  HCr,
  LCr,
  NCr,
  kPs,
  ZHt,
  Ajn,
  $Cr,
  bvo,
  Cjn,
  _nn,
  eLt,
  TPs,
  APs,
  B1e,
  j1e,
  FCr,
  tLt,
  pRr,
  Lnn,
  Nnn,
  mRr,
  gRr,
  Spt,
  $nn,
  Fnn,
  Qjn,
  hRr,
  qte,
  Zjn,
  eWn,
  CIs,
  BEe,
  tWn,
  PIs,
  IIs,
  OIs,
  DIs,
  LIs,
  yRr,
  _Rr,
  $F,
  sG,
  gp,
  RP,
  zin,
  R1,
  XPo
} from "./chunk-j0tbz6ra.js";
import { Gre } from "./chunk-wany0nxw.js";
import { d1s } from "./chunk-6h7ejyet.js";
import { t0, Gjr, uSt, Iet, u7, L2e, B8, j8, pSt, J1, Det, n0, kWt } from "./chunk-p56qmwgb.js";
import { n_, op, N0o, b6n, tVs, nVs, sze, IQ, $7e, PO, aze } from "./chunk-xt7fs806.js";
import { Ldn } from "./chunk-783pymr7.js";
import { t2o } from "./chunk-gjpjdnzc.js";
import { Dwt, Q7n } from "./chunk-160x3d5g.js";
import { Aho, gZt, SAs } from "./chunk-t1nrhefk.js";
import { Ca, j5s } from "./chunk-87f056s4.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { o, v, kM, oe, T, yt } from "./chunk-0bqrj5ah.js";
import { y_ } from "./chunk-hc5j8sxy.js";
import {
  lstat as tn,
  lutimes as At,
  mkdir as Ft,
  readdir as $n,
  readFile as Pt,
  rename as Kn,
  rm as re,
  rmdir as Gn,
  stat as Fe,
  writeFile as Nt
} from "fs/promises";
import { basename as q, join as B, relative as qn, sep as Ot } from "path";
var In = 10,
  kt = In * 60000,
  St = 4,
  gt = "tengu_claudeai_skills_sync_interval_minutes",
  pt = 5,
  wt = 1440,
  ht = "tengu_claudeai_skills_sync_shared_round",
  Mt = "tengu_claudeai_skills_sync_idle_intervals",
  Ln = 4,
  Rt = 4,
  vt = 3600000,
  Dt = 30000,
  bt = 60000,
  En = 180000,
  Ee = 45000;
function se() {
  let e = k(gt, In);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return kt;
  return Math.min(Math.max(e, pt), wt) * 60000;
}
function Cn() {
  return k(ht, !1) === !0;
}
function An() {
  let e = se();
  return Te() > e && t2o(e) && !Dwt();
}
function Te() {
  let e = k(Mt, Ln),
    n = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), Rt) : Ln,
    s = se();
  return Math.max(s, Math.min(s * n, vt));
}
function Fn() {
  return Dt + Math.floor(Math.random() * bt);
}
function Ie(e) {
  let n = se();
  return Math.min(n * 2 ** Math.max(0, e - 1), n * St);
}
function Pn(e) {
  let n = op();
  if (n.resyncTimer) return;
  ((n.resyncRunRound = e), Se(n, e, Ie(n.consecutiveFailedRounds), "resync", !1));
}
function Qe(e) {
  let n = op();
  if (!n.resyncTimer || !n.resyncRunRound) return;
  (clearTimeout(n.resyncTimer), Se(n, n.resyncRunRound, e, "resync", !1));
}
function Nn() {
  let e = op();
  if (e.stopAwaitingActivity) return;
  let n = [S6, Q7n].map((s) =>
    s(() => {
      if ((e.stopAwaitingActivity?.(), e.syncPromise))
        e.syncPromise.catch(() => {}).then(() => Tn(e));
      else Tn(e);
    })
  );
  e.stopAwaitingActivity = () => {
    e.stopAwaitingActivity = null;
    for (let s of n) s();
  };
}
function On() {
  return op().stopAwaitingActivity !== null;
}
function Ve() {
  op().stopAwaitingActivity?.();
}
function Tn(e) {
  try {
    let n = e.resyncArmed;
    if (!e.resyncTimer || !e.resyncRunRound || !n || n.trigger === "wake_settle") return;
    let s = Math.round(Date.now() - n.wallMs - (performance.now() - n.monotonicMs));
    if (s > Ee && e.consecutiveFailedRounds === 0) {
      (clearTimeout(e.resyncTimer), Bn(e, e.resyncRunRound, n.trigger, s, !0));
      return;
    }
    let t = e.consecutiveFailedRounds > 0 ? Ie(e.consecutiveFailedRounds) : 0;
    if (n.wallMs + n.delayMs - Date.now() > t)
      (clearTimeout(e.resyncTimer), Se(e, e.resyncRunRound, t, "resync", !0));
  } catch (n) {
    l(n);
  }
}
function xn() {
  Qe(Ie(op().consecutiveFailedRounds));
}
function Se(e, n, s, t, d) {
  let M = Date.now() + s;
  ((e.resyncArmed = { trigger: t, delayMs: s, wallMs: Date.now(), monotonicMs: performance.now() }),
    (e.resyncTimer = setTimeout(Lt, s, e, n, M, t, d)),
    e.resyncTimer.unref?.());
}
function Lt(e, n, s, t, d) {
  let M = e.resyncTimer,
    w = Math.max(0, Date.now() - s);
  if (w > Ee) {
    Bn(e, n, t, w, !1);
    return;
  }
  n({ trigger: t, tickLateMs: w, ...(d && { woken: d }) })
    .catch(() => {})
    .then(() => {
      if (e.resyncTimer !== M) return;
      Se(e, n, Ie(e.consecutiveFailedRounds), "resync", !1);
    });
}
function Bn(e, n, s, t, d) {
  (Y("info", "skills_sync_resync_skipped_after_sleep", { late_ms: t, woken: d }),
    Se(e, n, En, "wake_settle", d));
  try {
    if (!J())
      a("tengu_skills_sync_resync_skipped", {
        trigger: c(s),
        tick_late_ms: t,
        settle_ms: En,
        woken: d
      });
  } catch (M) {
    l(M);
  }
}
var Et = 60000;
function ue(e) {
  let n = Uu() ?? "none";
  return e ? `${n}${zn}` : n;
}
var zn = ".converted-skills";
async function Hn({
  syncedRoot: e,
  bucket: n,
  root: s,
  trigger: t,
  pinned: d,
  lastGeneration: M,
  holdsPlaceholders: w,
  idle: S,
  convertedSkillsAsPlugins: I
}) {
  let R = !d && Cn() && n === kWt(),
    h = d ? void 0 : Tt(t, R, S);
  if (h === void 0) return { list: !0, shared: R };
  if (R && S) Nn();
  let C = await hRr(s, h);
  if (!C.reuse || !(await B1e(e, n))) return (Ve(), { list: !0, shared: R });
  let y = await $nn(s),
    L = !1;
  if (R) {
    if (y === null || w || !y.listedFor.includes(ue(I))) return (Ve(), { list: !0, shared: R });
    let D = S && On();
    if (S && !D && C.ageMs >= se()) return { list: !0, shared: R };
    L = y.token !== M && t !== "startup";
    let O = D ? Te() : se();
    if (C.ageMs < O) Qe(O - C.ageMs + Fn());
  } else {
    let D = y?.listedFor ?? [];
    if (!(I ? D.includes(ue(!0)) : D.includes(ue(!1)) || !D.some((H) => H.endsWith(zn))))
      return { list: !0, shared: R };
  }
  return (
    Y("info", "skills_sync_round_reused", { age_ms: C.ageMs, within_ms: C.withinMs }),
    { list: !1, generation: y?.token ?? null, reload: L }
  );
}
function Tt(e, n, s) {
  let t = e === "startup" ? gRr() : void 0;
  if (!n || e === "reload") return t;
  if (s) return Te();
  let d = e === "startup" && (!Q0() || (qfe() && eF())) ? Math.min(Et, se()) : se();
  return Math.max(d, t ?? 0);
}
var It = "tengu_jaunty_alpaca";
function Un() {
  return Wn(It, !0) !== !1;
}
var Ct = "tengu_quizzical_wirth";
function Ce() {
  return k(Ct, !0) !== !1;
}
var en = 15,
  xt = Aho + 60000;
function Bt() {
  let e = i.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return e && e > 0 ? e : 5000;
}
function Zms() {
  let e = i.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return e && e > 0 ? e : 30000;
}
function sn() {
  let e = op();
  if (!e.firstListDeferred) {
    let n,
      s = new Promise((t) => {
        n = t;
      });
    e.firstListDeferred = { promise: s, resolve: n };
  }
  return e.firstListDeferred;
}
function YPe(e, n, s) {
  ((op().firstSyncPromise ??= Zn(e, n, s)), Pn((t) => cn(e, n, s, t)));
}
function egs(e, n, s, t) {
  if (
    !i.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC ||
    e.host.launchOptions.isInteractive() ||
    !Zjn(e) ||
    t()
  )
    return !1;
  if ((EL(), !eWn(e) || !Y9e() || EPs())) return !1;
  return (YPe(e, n, s), !0);
}
function tgs(e, n, s) {
  let t = sn();
  return ((op().firstSyncPromise ??= Zn(e, n, s)), t.promise);
}
async function ngs(e, n) {
  let s = Bt() - (performance.now() - n),
    t = await Promise.race([e.then(() => "listed"), X(Math.max(0, s)).then(() => "timed_out")]);
  if (t === "timed_out") a("tengu_skills_sync_wait_timeout", {});
  return t;
}
async function zOn(e, n, s) {
  return (
    aze.of(e).discardInflight(),
    await op().syncPromise?.catch(() => {}),
    cn(e, n, s, { trigger: "reload" })
  );
}
function Zn(e, n, s) {
  let t = op();
  return cn(e, n, s, { trigger: "startup" }).finally(() => {
    t.firstRoundSettled = !0;
  });
}
function rn() {
  let e = op();
  if (!e.firstRoundSettled) e.firstRoundEmitted = !0;
}
function $pe() {
  (rn(), R1(), sG.emit());
}
function Yn(e, n) {
  if (e === null) return;
  if (n !== null && e.token !== n.token) {
    $pe();
    return;
  }
  op().bucketGeneration = e.token;
}
function V() {
  return B(Le(), J1);
}
function Jn(e) {
  return B(V(), e);
}
function Qn(e) {
  return We.userConfigDir("skills", qn(B(Le(), "skills"), e).split(Ot));
}
async function Vn(e) {
  let n = V();
  if (
    (await hK(
      n,
      Le(),
      { event: "skills_sync_root_refused", phase: "prune", rootLabel: J1 },
      { storageV5: e }
    ).catch(() => null)) !== "real"
  )
    return null;
  let t;
  try {
    t = await $n(n, { withFileTypes: !0 });
  } catch {
    return null;
  }
  let d = [],
    M = [],
    w = [];
  for (let S of t) {
    let I = S.isDirectory() && L2e(S.name) ? await j1e(n, S.name) : "unmarked";
    if (I === "marked") d.push(S.name);
    else if (typeof I === "object")
      (w.push(S.name), Y("warn", "skills_sync_bucket_marker_unreadable", { code: I.unreadable }));
    else if (!B8(S.name)) M.push(S.name);
  }
  return { buckets: d, strays: M, unreadable: w };
}
async function et(e, n) {
  let s = 0;
  for (let t of e) if (await Pe(B(V(), t), n)) s++;
  if (s > 0) Y("info", "skills_sync_stray_entry_trashed", { count: s });
  return s;
}
async function zt(e) {
  let n = await Vn(e);
  if (n === null || n.strays.length === 0) return !1;
  return (await et(n.strays, e)) > 0;
}
function Pe(e, n) {
  return Jme({
    dir: e,
    trashRoot: Ne(),
    configHome: Le(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: n
  });
}
async function KOn(e) {
  if (!_vo()) return !1;
  let n = await hK(
    V(),
    Le(),
    { event: "skills_sync_root_refused", phase: "prune", rootLabel: J1 },
    { storageV5: e }
  );
  if (n !== "real" && n !== "absent") return !1;
  let s = null,
    t = n === "real" ? await Vn(e) : null;
  if (t !== null) {
    s = 0;
    for (let M of t.buckets) {
      let w = Jn(M);
      await re(Spt(w), { force: !0 }).catch(() => {});
      let S = await ei(w, e).catch(() => null);
      if (S !== null)
        ((s += S),
          await Gn(w).then(
            () => tLt(V(), M),
            () => {}
          ));
    }
    ((s += await et([...t.strays, ...t.unreadable], e)), await Gn(V()).catch(() => {}));
  }
  Y("info", "skills_sync_pruned_for_closed_gate", { moved: s ?? 0 });
  let d = s !== null && s > 0;
  if (d) (RP(), R1(), sG.emit());
  return d;
}
function Ne() {
  return B(Le(), Det);
}
function Oe(e) {
  return B(e, t0);
}
var jn = new Set(),
  Xn = [],
  Ht = p(() =>
    yt({
      lastUpdated: v().catch(0),
      skills: T(oe()),
      staleDirs: oe().optional(),
      pendingClaims: oe().optional()
    })
  ),
  Ut = p(() =>
    yt({
      name: o(),
      skillId: o().catch(""),
      description: o().catch(""),
      source: o().catch(""),
      updatedAt: o().nullable().catch(null),
      userInvocable: kM().catch(void 0),
      disableModelInvocation: kM().catch(void 0)
    })
  );
function nt(e) {
  return Qn(Oe(e));
}
async function ge(e, n) {
  let s = !n.manifestRead;
  n.manifestRead = !0;
  let t;
  if (e)
    try {
      let R = await e.read([{ key: nt(n.root), offset: 0, length: X9e + 1 }]);
      if (!R.ok) {
        if (s) Y("warn", "skills_sync_manifest_unreadable", { code: "backend_read_failed" });
        return null;
      }
      let h = R.value.items[0];
      if (!h.found) return null;
      if (h.totalBytes > X9e || h.value.byteLength > X9e) {
        if (s) Y("warn", "skills_sync_manifest_unreadable", { code: "parse_or_size" });
        return null;
      }
      t = Buffer.from(h.value).toString("utf8");
    } catch (R) {
      if (s) Y("warn", "skills_sync_manifest_unreadable", { code: E(R) ?? "backend_read_failed" });
      return null;
    }
  else if (((t = await Yme(Oe(n.root), s ? "skills_sync_manifest_unreadable" : null)), t === null))
    return null;
  let d = Xme(t, QHt(), s ? "skills_sync_manifest_unreadable" : null);
  if (d === null) return null;
  let { skills: M, staleDirs: w, pendingClaims: S, ...I } = d;
  return { ...I, skills: S3(Q9e(), M), staleDirs: J9e(w), pendingClaims: J9e(S) };
}
async function nn(e, n, s, t) {
  let d = t.guard.refusedReason();
  if (d !== null) throw LCr(d);
  await rt(s, t.root);
  let M = await ge(s, t);
  if (M === null && n.onlyOverReadable) return;
  let w = OCr(
      S3(Q9e(), e.skills),
      M?.skills,
      (I) => I.skillId,
      n.removedSkillIds,
      S3(Q9e(), n.deferredRows)
    ),
    S = _(
      {
        ...DCr(M, ["lastUpdated", "skills", "staleDirs", "pendingClaims"]),
        ...e,
        skills: w,
        staleDirs: Tjn(e.staleDirs, M?.staleDirs, n.staleDirs),
        pendingClaims: Tjn(e.pendingClaims, M?.pendingClaims, n.pendingClaims)
      },
      null,
      2
    );
  if (s) {
    let I = await s.write(nt(t.root), S, {
      mode: 438 & ~process.umask(),
      publishDiscipline: "atomic"
    });
    if (!I.ok)
      throw (
        Y("error", "skills_sync_manifest_write_failed", { code: I.error.code }),
        Error("skillsSync: manifest write failed")
      );
    return;
  }
  await Dn(Oe(t.root), S);
}
function on(e) {
  return B(e, u7, String(process.pid));
}
function U(e, n) {
  return j8(n, e);
}
async function Kt(e, n, s) {
  try {
    let t = U(e, n);
    if (s) {
      let w = await s.read([{ key: ln(t), offset: 0, length: n_ + 1 }]),
        S = w.ok ? w.value.items[0] : void 0;
      if (!S?.found || S.totalBytes > n_ || S.value.byteLength > n_) return null;
      return Buffer.from(S.value).toString("utf8");
    }
    let d = B(t, "SKILL.md"),
      M = await Fe(d);
    if (!M.isFile() || M.size > n_) return null;
    return await Pt(d, "utf8");
  } catch {
    return null;
  }
}
function ln(e) {
  return Qn(B(e, "SKILL.md"));
}
async function Wt(e, n, s) {
  try {
    let t = U(e, n);
    if (s) return (await s.statMeta(ln(t))).ok;
    return (await Fe(B(t, "SKILL.md"))).isFile();
  } catch {
    return !1;
  }
}
async function Gt(e, n) {
  try {
    if (n) {
      let s = await n.statMeta(ln(e));
      return !s.ok && s.error.code === "NotFound";
    }
    return (await Fe(B(e, "SKILL.md")), !1);
  } catch (s) {
    return G(s) || E(s) === "ENOTDIR";
  }
}
function Yt(e) {
  return {
    skillId: e.id,
    name: e.directory || e.name || e.id,
    description: e.description,
    source: "session-refs",
    updatedAt: null,
    requestedVersion: e.version || void 0
  };
}
function tt(e, n) {
  return { ...e, backingPluginId: n.backingPluginId };
}
var jt = {
  idOf: (e) => e.skillId,
  invalidNameTag: "skills_sync_invalid_name",
  collisionTag: "skills_sync_name_collision"
};
function Xt(e, n, s) {
  return _Rr(n, s, {
    ...jt,
    dirFor: (t) => U(e, t),
    carry: tt,
    ...(Un() && { markCollisionLoser: $t })
  });
}
function $t(e) {
  return { ...e, updatedAt: sze };
}
function qt(e, n, s) {
  let t = zin({
    skillName: e,
    displayName: void 0,
    description: Gre(n.description),
    hasUserSpecifiedDescription: !0,
    markdownContent: "",
    allowedTools: [],
    argumentHint: void 0,
    argumentNames: [],
    whenToUse: void 0,
    version: void 0,
    model: void 0,
    disableModelInvocation: n.disableModelInvocation ?? !1,
    userInvocable: n.userInvocable ?? !0,
    source: "userSettings",
    baseDir: s,
    serverAttribution: Ldn(n.skillId, n.backingPluginId),
    loadedFrom: "syncedSkills",
    hooks: void 0,
    executionContext: void 0,
    agent: void 0,
    paths: void 0,
    effort: void 0,
    shell: void 0,
    skillFile: d1s("was not read: this command was listed before its file was downloaded")
  });
  if (t?.type === "prompt")
    t.getPromptForCommand = async (d, M) => {
      let w = await BEe(e);
      if (w.ok) {
        let R = (await gp(ru(), M.storageV5)).find(
          (h) =>
            h.loadedFrom === "syncedSkills" &&
            $F(h) === $F(t) &&
            h.name === t.name &&
            h.type === "prompt" &&
            h.getPromptForCommand !== t.getPromptForCommand
        );
        if (R && R.type === "prompt")
          return (
            (t.source = R.source),
            (t.skillRoot = R.skillRoot),
            (t.skillFile = R.skillFile),
            (t.contentLength = R.contentLength),
            (t.progressMessage = R.progressMessage),
            (t.userInvocable = R.userInvocable),
            R.getPromptForCommand(d, M)
          );
      }
      let S = w.ok ? "skill not found after download" : w.reason;
      return [
        {
          type: "text",
          text:
            !w.ok && w.withheld
              ? `${tWn(t.name)} Proceed without it.`
              : `Skill ${e} could not be downloaded (${S}). Proceed without it.`
        }
      ];
    };
  return t;
}
function Zt(e, n) {
  return NCr({
    root: () => n,
    configHome: Le,
    rootLabel: J1,
    event: "skills_sync_root_refused",
    storageV5: e
  });
}
var it = $Cr("zip fetch failed"),
  Ae = Ajn("skill archive unusable or landing obstructed");
async function an(
  e,
  {
    round: n,
    credentials: s,
    storageV5: t,
    replacesAttributedCopy: d,
    targetHeldSkillFile: M,
    classifyOccupant: w,
    markTargetDestroyed: S
  },
  I
) {
  let R = n.root,
    h = U(R, e.name),
    C = B(on(R), qn(R, h)),
    y = B(Ap(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (n.guard.refused()) return ZHt;
    if (I !== void 0) await Nt(y, I);
    else {
      if (!d && M && (await w(q(h))) === "inFlight")
        return (Y("info", "skills_sync_target_in_flight_elsewhere"), bvo);
      if (!(await SAs(e.skillId, y, e.requestedVersion, { isBackground: !0, credentials: s })))
        return it;
    }
    if (!(await n.guard.verify())) return ZHt;
    (await re(C, { recursive: !0, force: !0 }),
      await Ft(on(R), { recursive: !0 }),
      await pRr(y, C, { skipEntry: (O) => O.split(/[\\/]/).some((H) => B8(H)) }));
    let L = C,
      D = await $n(C, { withFileTypes: !0 });
    if (!D.some((O) => O.name === "SKILL.md") && D.length === 1 && D[0].isDirectory())
      L = B(C, D[0].name);
    try {
      if (!(await Fe(B(L, "SKILL.md"))).isFile())
        return (Y("warn", "skills_sync_extracted_zip_unusable"), Ae);
    } catch {
      return (Y("warn", "skills_sync_extracted_zip_unusable"), Ae);
    }
    if (await mRr(L)) return (Y("warn", "skills_sync_extracted_zip_unusable"), Ae);
    if (!(await n.guard.verify())) return ZHt;
    if (d) await re(h, { recursive: !0, force: !0 });
    try {
      await Kn(L, h);
    } catch (O) {
      let H = E(O);
      if (d || !Cjn(H)) {
        if (d) S();
        return (Y("warn", "skills_sync_promotion_failed", { code: H ?? "unknown" }), eLt(H));
      }
      let fe = await w(q(h));
      if (fe === "inFlight") return (Y("info", "skills_sync_target_in_flight_elsewhere"), bvo);
      if (fe === "landed") await re(h, { recursive: !0, force: !0 });
      else if (!(await Pe(h, t))) return _nn;
      try {
        await Kn(L, h);
      } catch (pe) {
        S();
        let F = E(pe);
        return (Y("warn", "skills_sync_promotion_failed", { code: F ?? "unknown" }), eLt(F));
      }
    }
    return kPs;
  } finally {
    if (
      (await re(y, { force: !0 }).catch(() => {}),
      !n.guard.refused() &&
        (await hK(
          R,
          Le(),
          { event: "skills_sync_root_refused", phase: "sweep", rootLabel: J1 },
          { checkStagingLeaf: !0, storageV5: t }
        ).catch(() => null)) === "real")
    )
      await re(C, { recursive: !0, force: !0 }).catch(() => {});
  }
}
var Jt = 500;
async function Qt(e, n) {
  try {
    return await an(e, n, void 0);
  } catch {
    return (Y("warn", "skills_sync_extract_retry"), await X(Jt), an(e, n, void 0));
  }
}
async function Vt(e, n) {
  let { fromHostMount: s } = n;
  if (s !== void 0) {
    let t = await an(e, n, s.zip).catch(() => null);
    if (t?.ok) n.markLandedFromHostMount();
    if (t !== null && (t.ok || t.cause !== "extract")) return t;
    N0o(s.kind, { reason: t === null ? "landing_threw" : "zip_unusable" }, n.hostMountMissCounts);
  }
  return Qt(e, n);
}
async function cn(e, n, s, t) {
  let d = op();
  if (d.syncPromise) return d.syncPromise;
  return (
    (d.syncPromise = ni(e, n, s, t).finally(() => {
      d.syncPromise = null;
    })),
    d.syncPromise
  );
}
async function ei(e, n) {
  let s = B(e, t0),
    t,
    d,
    M;
  try {
    ((d = (await y_(s, X9e)).content), (M = te(d)));
  } catch {
    return null;
  }
  let w = Ht().safeParse(M);
  if (w.success) {
    let { lastUpdated: y, skills: L, staleDirs: D, pendingClaims: O, ...H } = w.data;
    t = { ...H, lastUpdated: y, skills: S3(Ut(), L), staleDirs: J9e(D), pendingClaims: J9e(O) };
  } else return null;
  let S = [
      ...t.skills.map((y) => ({ row: y, syntheticListName: null })),
      ...["staleDirs", "pendingClaims"].flatMap((y) =>
        (t[y] ?? []).map((L) => ({
          row: { name: y === "pendingClaims" ? uSt(L).name : L },
          syntheticListName: y,
          entry: L
        }))
      )
    ],
    I = 0,
    R = [],
    h = [],
    C = [];
  for (let y of S) {
    let L = y.row;
    if (y.syntheticListName === "pendingClaims" && (await dn(y.entry))) {
      C.push(y.entry);
      continue;
    }
    try {
      let D = pSt(L.name, e);
      if (await Lnn(D, V())) {
        Y("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await Lnn(D, Ne())) {
        Y("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await Pe(D, n)) I++;
      else if (y.syntheticListName === "staleDirs") h.push(y.entry);
      else if (y.syntheticListName === "pendingClaims") C.push(y.entry);
      else R.push(y.row);
    } catch (D) {
      if (D instanceof Iet) {
        if (y.syntheticListName === "staleDirs") h.push(y.entry);
        else if (y.syntheticListName === "pendingClaims") C.push(y.entry);
        else R.push(y.row);
        continue;
      }
    }
  }
  if (R.length > 0 || h.length > 0 || C.length > 0) {
    let y = _(
      {
        ...t,
        skills: R,
        staleDirs: h.length > 0 ? h : void 0,
        pendingClaims: C.length > 0 ? C : void 0
      },
      null,
      2
    );
    if (y !== d) await Dn(s, y).catch(() => {});
  } else await re(s, { force: !0 }).catch(() => {});
  return I;
}
async function ni(e, n, s, t) {
  let d = Date.now(),
    M = performance.now(),
    w = !1,
    S = !1,
    I = !1,
    R = !1,
    h = () => {
      let F = Date.now() - d;
      return {
        account_opt_in: I,
        idle: R,
        woken: "woken" in t,
        trigger: c(t.trigger),
        ...("tickLateMs" in t && { tick_late_ms: t.tickLateMs }),
        duration_ms: F,
        suspended_ms: Math.max(0, Math.round(F - (performance.now() - M)))
      };
    },
    C = new Map(),
    y = !1,
    L = null,
    D = op(),
    O = !1,
    H = null,
    fe = new Set(),
    pe = !1;
  try {
    if (((I = zTn()), JHt())) I = !0;
    if (!qte(e) || !Y9e()) {
      Y("info", "skills_sync_gate_closed");
      let { placeholders: r, listedOwnerships: u } = op();
      if ((u.clear(), r.size > 0)) (r.clear(), $pe());
      f("skills_sync_round", "gate_closed", h());
      return;
    }
    if (vPs()) {
      (Y("info", "skills_sync_policy_verdict_pending"),
        f("skills_sync_round", "policy_verdict_pending", h()));
      return;
    }
    let F = await n0(s);
    if (F === null) {
      (Y("info", "skills_sync_bucket_unresolved"),
        f("skills_sync_round", "bucket_unresolved", h()));
      return;
    }
    let K = Zt(n, Jn(F));
    L = K;
    let x = K.root;
    R =
      t.trigger === "resync" &&
      !("woken" in t) &&
      D.consecutiveFailedRounds === 0 &&
      !Zjn(e) &&
      An();
    let un = LIs(e);
    if (un !== void 0) await un;
    let me = DIs(e),
      _e = await Hn({
        syncedRoot: V(),
        bucket: F,
        root: x,
        trigger: t.trigger,
        pinned: PO(e),
        lastGeneration: D.bucketGeneration,
        holdsPlaceholders: D.placeholders.size > 0,
        idle: R,
        convertedSkillsAsPlugins: me
      });
    if (!_e.list) {
      if (((D.bucketGeneration = _e.generation), _e.reload)) {
        let r = await ge(n, K);
        if (r) {
          let u = new Set();
          for (let b of r.skills)
            try {
              u.add(q(U(x, b.name)));
            } catch {}
          XPo(u);
        }
        ((H = new Set()), $pe());
      }
      g("skills_sync_round", { ...h(), reused: !0, reloaded: _e.reload });
      return;
    }
    ((pe = !0), Y("info", "skills_sync_starting"));
    let z,
      we = [],
      ot = performance.now();
    if (PO(e)) {
      let [r, u] = await Promise.all([
        aze.of(e).listEntries("skills", { startup: t.trigger === "startup" }),
        i.CLAUDE_CODE_SYNC_SKILLS
          ? gZt({ isBackground: !0, credentials: s, ...(me && { convertedSkillsAsPlugins: !0 }) })
          : null
      ]);
      if (!r.success) z = r;
      else if (((we = r.entries.map(Yt)), u === null)) z = { success: !0, skills: we };
      else if (!u.success) z = u;
      else
        z = {
          success: !0,
          skills: yRr(
            we,
            u.skills,
            (b) => b.skillId,
            (b, A) => ({
              ...tt(b, A),
              userInvocable: A.userInvocable,
              disableModelInvocation: A.disableModelInvocation
            })
          )
        };
    } else
      z = await gZt({
        isBackground: !0,
        credentials: s,
        ...(me && { convertedSkillsAsPlugins: !0 })
      });
    let fn = Math.round(performance.now() - ot);
    if (((O = !z.success && IQ(z)), O))
      (Y("warn", "skills_sync_list_refused"),
        D.listedOwnerships.clear(),
        (z = { success: !0, skills: we }));
    if (!z.success) {
      D.consecutiveFailedRounds++;
      let r = $7e(z),
        u = { ...h(), ...r };
      if (
        (Y("warn", "skills_sync_list_failed", u),
        a("tengu_skills_sync_list_failed", u),
        (z.kind === "timeout" || z.kind === "network" || z.kind === "http") && u.suspended_ms > Ee)
      )
        f("skills_sync_round", "suspended", u);
      else m("skills_sync_round", "list_failed", u);
      return;
    }
    D.consecutiveFailedRounds = O ? D.consecutiveFailedRounds + 1 : 0;
    let he = await j1e(V(), F);
    if (
      he === "unmarked" &&
      (await tn(x).then(
        (r) => r.isDirectory(),
        () => !1
      )) &&
      (await Jme({
        dir: x,
        trashRoot: Ne(),
        configHome: Le(),
        failureEvent: "skills_sync_trash_move_failed",
        storageV5: n
      }).catch(() => !1))
    )
      Y("info", "skills_sync_unmarked_bucket_quarantined");
    if ((await rt(n, x), typeof he === "object"))
      throw (
        Y("warn", "skills_sync_root_refused", {
          phase: "round_head",
          root: DOe(B(J1, F)),
          component: "marker",
          reason: "unverified",
          code: he.unreadable
        }),
        new w3("unverified", { code: he.unreadable })
      );
    (await FCr(V(), F), (y = !0));
    let Me = await Qjn(x);
    if (_e.shared && Me !== null && D.bucketGeneration !== null && Me.token !== D.bucketGeneration)
      $pe();
    await zt(n);
    let ee = await ge(n, K),
      {
        toDownload: ne,
        toRemove: ae,
        carryover: ye,
        liveDirs: xe,
        carryoverOwningLiveDir: at
      } = Xt(x, z.skills, ee?.skills ?? []),
      lt = Nnn(xe),
      Be = async (r) => {
        let u;
        try {
          u = pSt(r, x);
        } catch (A) {
          if (A instanceof Iet) return !1;
          return !0;
        }
        let b = await lt(u);
        if (b === "live") return !0;
        if (b === "indeterminate") return !1;
        return (fe.add(u), Pe(u, n));
      },
      ze = new Set(Array.from(xe, (r) => q(r))),
      ct = XPo(ze);
    if (OIs(ze) + ct > 0) (RP(), rn(), sG.emit());
    H = xe;
    let dt = await Promise.all(ye.map((r) => (at.has(r.skillId) ? Wt(x, r.name, n) : null))),
      He = new Set();
    for (let [r, u] of ye.entries()) {
      let b = dt[r];
      if (b === null) continue;
      if (!b) {
        let P = z.skills.find((j) => j.skillId === u.skillId);
        if (P) (He.add(u.skillId), ne.push({ item: P }));
        continue;
      }
      let A = q(U(x, u.name));
      if (D.placeholders.delete(A))
        (D.pendingDownloads.get(A)?.resolve({ ok: !0 }),
          D.pendingDownloads.delete(A),
          R1(),
          RP(),
          (S = !0),
          Y("info", "skills_sync_materialized_elsewhere"));
    }
    let ut = ye.filter((r) => !He.has(r.skillId)),
      Ue = new Map(ye.filter((r) => He.has(r.skillId)).map((r) => [r.skillId, r])),
      W = new Set(ee?.staleDirs ?? []),
      le = new Set(),
      Z = new Set(),
      Ke = { pid: process.pid, procStart: await kd(process.pid) },
      Ge = [];
    if (ee?.pendingClaims) {
      let r = ee.pendingClaims,
        u = new Set();
      for (let b of r)
        if (await dn(b)) u.add(uSt(b).name);
        else Ge.push(b);
      for (let b of Ge) {
        let { name: A } = uSt(b);
        if (u.has(A) || ze.has(A)) continue;
        (W.add(A), Z.add(b));
      }
    }
    for (let r of W) if (await Be(r)) (W.delete(r), le.add(r));
    if (le.size > 0 || Z.size > 0) S = !0;
    let Re = MCr(
      ee?.skills ?? [],
      [...ye, ...ne.flatMap(({ prev: r }) => r ?? [])],
      (r) => r.skillId,
      (r, u) =>
        r.backingPluginId === u.backingPluginId && (r.updatedAt === sze) === (u.updatedAt === sze)
    );
    if (ne.length === 0 && ae.length === 0) {
      if (S) $pe();
      if ((le.size > 0 || Z.size > 0 || Re.attributionMoved) && ee)
        await nn(
          {
            lastUpdated: ee.lastUpdated,
            skills: Re.rows,
            staleDirs: W.size > 0 ? Array.from(W) : void 0,
            pendingClaims: void 0
          },
          { staleDirs: le, pendingClaims: Z, removedSkillIds: jn, deferredRows: Xn },
          n,
          K
        );
      if (ee) {
        let b = new Date();
        await At(Oe(x), b, b).catch(() => {});
      }
      let r = S ? null : Me;
      (Yn(await Fnn(x, "skills", W.size === 0 && !O && !PO(e), r, ue(me)), r),
        Y("info", "skills_sync_no_changes", {
          duration_ms: Date.now() - d,
          list_ms: fn,
          ...(t.trigger === "startup" && {
            first_message_gate_open_ms: Math.round(performance.now() - M)
          })
        }));
      let u = { ...h(), no_changes: !0 };
      if (O) f("skills_sync_round", "not_entitled", u);
      else g("skills_sync_round", u);
      return;
    }
    let mn = 0;
    for (let { item: r, prev: u } of ne)
      if (!u) {
        let b = U(x, r.name),
          A = qt(q(b), r, b);
        if (A === void 0) continue;
        (PIs(A), mn++, C.set(r.skillId, CIs(q(U(x, r.name)))));
      }
    if (mn > 0) (RP(), rn(), sG.emit());
    let _n = !0;
    try {
      let r = [];
      for (let { item: u } of ne)
        try {
          r.push(Gjr(q(U(x, u.name)), Ke));
        } catch {}
      if (r.length > 0)
        await nn(
          {
            lastUpdated: ee?.lastUpdated ?? 0,
            skills: Re.rows,
            staleDirs: W.size > 0 ? Array.from(W) : void 0,
            pendingClaims: r
          },
          { staleDirs: le, pendingClaims: Z, removedSkillIds: jn, deferredRows: Xn },
          n,
          K
        );
    } catch (r) {
      if (r instanceof w3) throw r;
      ((_n = !1), Y("warn", "skills_sync_pending_claims_write_failed"));
    }
    sn().resolve();
    let ft = Math.round(performance.now() - M);
    if (!_n) {
      if ((m("skills_sync_round", "pending_claims_write_failed", h()), S)) $pe();
      return;
    }
    let ie = [],
      yn = [],
      Ye = [],
      ve = 0,
      kn = 0,
      ce = {},
      Sn = ({ item: r, prev: u }) => (u === void 0 && !Ue.has(r.skillId) ? tVs(r) : void 0),
      gn = ne.flatMap((r) => Sn(r) ?? []),
      pn = new Set(gn),
      je = new Map(),
      wn = (r) => (Y("warn", "skills_sync_host_mount_threw"), l(N(r)), null),
      hn = pn.size > 0 ? nVs(pn, je).catch(wn) : null,
      De = new Set(),
      Mn = new Map();
    (await Promise.all(
      ne.map(
        Ca(en, async ({ item: r }) => {
          Mn.set(r, await Kt(x, r.name, n));
        })
      )
    ),
      await Promise.all(
        ne.map(
          j5s(
            en,
            async (r) => {
              let u = Sn(r);
              if (u === void 0) return;
              let A = await (await hn)?.readZip(u, r.item).catch(wn);
              return A ? { kind: u, zip: A } : void 0;
            },
            async ({ item: r, prev: u }, b) => {
              let A = Mn.get(r) ?? null,
                P = it;
              try {
                P = await Vt(r, {
                  round: K,
                  credentials: s,
                  storageV5: n,
                  classifyOccupant: (j) => ti(j, n, K),
                  markTargetDestroyed: () => {
                    w = !0;
                  },
                  replacesAttributedCopy:
                    (u !== void 0 && (await st(x, u.name, r.name))) || Ue.has(r.skillId),
                  targetHeldSkillFile: Ce() && A !== null,
                  fromHostMount: b,
                  markLandedFromHostMount: () => {
                    De.add(r.skillId);
                  },
                  hostMountMissCounts: je
                });
              } catch {
                ((P = Ae), Y("warn", "skills_sync_extract_failed"));
              }
              if (P.ok) {
                if ((ie.push(r), u && u.name !== r.name)) {
                  if (!(await Be(u.name))) W.add(u.name);
                }
                (IIs(q(U(x, r.name))),
                  R1(),
                  RP(),
                  g("skills_sync_download", { landed_from_mount: De.has(r.skillId) }));
              } else {
                let j = TPs(P.cause);
                if (j === null) (ve++, Y("info", "skills_sync_landing_deferred"));
                else ((ce[j] = (ce[j] ?? 0) + 1), m("skills_sync_download", j));
                let de = u ?? Ue.get(r.skillId);
                if (de && P.cause === "deferred") {
                  if ((Ye.push(de), u && u.name !== r.name)) (W.add(u.name), kn++);
                } else if (de) yn.push(de);
                else
                  try {
                    let Q = U(x, r.name);
                    if (
                      await tn(Q).then(
                        () => !1,
                        (_t) => G(_t)
                      )
                    )
                      Z.add(Gjr(q(Q), Ke));
                  } catch {}
              }
              C.get(r.skillId)?.(P.ok ? { ok: !0 } : { ok: !1, reason: APs(P.cause) });
            }
          )
        )
      ));
    let ke = [];
    await Promise.all(
      ae.map(
        Ca(en, async (r) => {
          if (!(await Be(r.name))) ke.push(r);
        })
      )
    );
    let Xe = new Set(ae.map((r) => r.skillId));
    for (let r of ke) Xe.delete(r.skillId);
    let $e = ie.length > 0 || w || ke.length < ae.length || le.size > 0 || Z.size > 0,
      mt = $e || kn > 0 || Re.attributionMoved;
    if (Xe.size > 0) RP();
    if ($e || S) $pe();
    let be = !1;
    if (mt) {
      let r = [...ut, ...ie, ...yn, ...ke],
        u = new Set();
      for (let P of [...r, ...Ye])
        try {
          u.add(q(U(x, P.name)));
        } catch {}
      for (let P of u) Z.add(Gjr(P, Ke));
      for (let P of Ge) if (u.has(uSt(P).name)) Z.add(P);
      let b = (P, j) =>
        nn(
          { lastUpdated: Date.now(), skills: P, staleDirs: W.size > 0 ? Array.from(W) : void 0 },
          {
            staleDirs: le,
            pendingClaims: Z,
            removedSkillIds: Xe,
            deferredRows: Ye,
            onlyOverReadable: j
          },
          n,
          K
        );
      await b(r, !1);
      let A = ie.length > 0 && Ce() ? 2 : 0;
      for (let P = 0; P < A; P++) {
        await X(D.lostRowsRecheckMs * (1 + Math.random()));
        let j = await ge(n, K),
          de = new Set(j?.skills.map((Q) => Q.skillId));
        if (((be = !ie.every((Q) => de.has(Q.skillId))), !be)) break;
        if (j === null) continue;
        Y("info", "skills_sync_manifest_rows_lost");
        try {
          await b(ie, !0);
        } catch (Q) {
          if (Q instanceof w3) throw Q;
          l(N(Q));
          break;
        }
      }
      if (be) Y("warn", "skills_sync_manifest_rows_unconfirmed");
    }
    let qe = ne.length - ie.length - ve,
      Rn = await hn,
      Ze = {
        downloaded: ie.length - De.size,
        from_mount: De.size,
        mount_eligible: gn.length,
        mount_read_ms: Rn?.spentMs() ?? 0,
        mount_wait_ms: Rn?.waitedMs() ?? 0,
        ...b6n(je)
      };
    Y("info", "skills_sync_complete", {
      ...Ze,
      removed: ae.length,
      duration_ms: Date.now() - d,
      list_ms: fn,
      ...(t.trigger === "startup" && { first_message_gate_open_ms: ft })
    });
    let vn = h();
    a("tengu_skills_sync_success", { ...vn, ...Ze, removed: ae.length, total: z.skills.length });
    let bn = $e || S ? null : Me;
    Yn(
      await Fnn(
        x,
        "skills",
        !O && qe === 0 && ve === 0 && !be && ke.length === 0 && W.size === 0 && !PO(e),
        bn,
        ue(me)
      ),
      bn
    );
    let Je = { ...vn, ...Ze, deferred: ve, removed: ae.length, total: z.skills.length };
    if (qe > 0)
      f("skills_sync_round", "download_failed", {
        ...Je,
        failed: qe,
        download_failed: ce.download_failed ?? 0,
        extract_failed: ce.extract_failed ?? 0,
        root_refused: ce.root_refused ?? 0,
        local_failed: ce.local_failed ?? 0
      });
    else if (O) f("skills_sync_round", "not_entitled", Je);
    else g("skills_sync_round", Je);
  } catch (F) {
    if (S || w) $pe();
    if (F instanceof w3 && y)
      (Y("warn", "skills_sync_late_root_refusal", {
        reason: F.reason,
        duration_ms: Date.now() - d
      }),
        f("skills_sync_round", "root_refused", h()),
        (y = !1));
    else if (F instanceof w3)
      (Y("warn", "skills_sync_root_refused_round", {
        reason: F.reason,
        duration_ms: Date.now() - d
      }),
        f("skills_sync_round", "root_refused", h()));
    else {
      if (!O) D.consecutiveFailedRounds++;
      Y("error", "skills_sync_unexpected_error", { duration_ms: Date.now() - d });
      let K = h();
      (a("tengu_skills_sync_error", K), m("skills_sync_round", "unexpected_error", K));
    }
  } finally {
    if (pe) xn();
    for (let F of C.values()) F({ ok: !1, reason: "skills sync failed" });
    if ((sn().resolve(), H !== null && L !== null))
      await wPs({
        bucketRoot: L.root,
        listedDirs: H,
        removalTriedDirs: fe,
        isSkillFileGone: (F) => Gt(F, n)
      }).catch(() => {
        Y("warn", "skills_sync_hooks_removal_failed");
      });
    if (L === null || L.guard.refused()) y = !1;
    if (y && L !== null) {
      if (
        (await hK(
          L.root,
          Le(),
          { event: "skills_sync_root_refused", phase: "sweep", rootLabel: J1 },
          { checkStagingLeaf: !0, storageV5: n }
        ).catch(() => null)) === "real"
      )
        await re(on(L.root), { recursive: !0, force: !0 }).catch(() => {});
    }
  }
}
async function dn(e) {
  let { ownerPid: n, ownerProcStart: s } = uSt(e);
  return n !== void 0 && n !== process.pid && Xa(n) && (await JE(n, s));
}
async function ti(e, n, s) {
  let t = await ge(n, s);
  if (!t) return "unattributed";
  for (let d of t.skills) if (await st(s.root, d.name, e)) return "landed";
  for (let d of t.pendingClaims ?? [])
    if (uSt(d).name === e && (await dn(d))) {
      if (!Ce()) return "inFlight";
      let M = await tn(B(s.root, e)).then(
        (w) => Math.floor(w.ctimeMs),
        (w) => {
          if (G(w)) return -1 / 0;
          return (Y("warn", "skills_sync_occupant_unreadable", { code: E(w) ?? "unknown" }), 1 / 0);
        }
      );
      if (!(Date.now() - M >= xt)) return "inFlight";
      return (Y("info", "skills_sync_live_claim_timed_out"), "unattributed");
    }
  return "unattributed";
}
async function st(e, n, s) {
  try {
    let t = U(e, n),
      d = U(e, s);
    return q(t) === q(d) || (await Lnn(t, d));
  } catch {
    return !1;
  }
}
function rt(e, n) {
  return HCr({
    root: n,
    trashRoot: Ne(),
    configHome: Le(),
    events: { refused: "skills_sync_root_refused" },
    storageV5: e
  });
}
export { Zms, YPe, egs, tgs, ngs, zOn, $pe, KOn };

//# sourceMappingURL=chunk-tgw6g4qf.js.map
