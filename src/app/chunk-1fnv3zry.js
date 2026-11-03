// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, q, Eu, ye, Uxe, J, jxe } from "./chunk-wrtp8qz8.js";
import { R, d, E, G, Vt } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Rc, Vp } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Kg, _, Im, ie, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { kl, SX, lCt } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { Rm } from "./chunk-dc0nzty2.js";
import { ur } from "./chunk-t86k189s.js";
import { fe } from "./chunk-xe386mry.js";
import { Y } from "./chunk-arw2bgak.js";
import { i } from "./chunk-cj37hmns.js";
import { uV, Ece } from "./chunk-yv5e7kyr.js";
import { dC, pt } from "./chunk-7c3thgax.js";
import { ec } from "./chunk-nhj692ya.js";
import { gYr, ror, qoe } from "./chunk-6t3m5fvf.js";
import { hg, la } from "./chunk-8fp2d2p3.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { lstat as ae, readdir as le } from "fs/promises";
import { basename as v, dirname as M, join as h, resolve as L, sep as N } from "path";
import * as A from "fs/promises";
function Dpn() {
  let n = i.CLAUDE_CODE_ENVIRONMENT_KIND;
  if (n === "byoc" || n === "anthropic_cloud") return n;
  return null;
}
function EU(n, e) {
  return Boolean(n) && (!e || e === "anthropic_cloud");
}
async function M6s() {
  if (!EU(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)) return;
  try {
    let n = [uV(), Ece()];
    await Promise.all(
      n.map((e) =>
        A.mkdir(e).catch((r) => {
          let s = E(r);
          if (s !== "EEXIST" && s !== "ENOENT")
            Y("warn", "user_data_roots_mkdir_failed", { code: s ?? "unknown" });
        })
      )
    );
  } catch (n) {
    t(`uploads and outputs directories not created: ${d(n)}`, { level: "error" });
  }
}
var ce = 10,
  I = 2000,
  ue = 8,
  de = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  pe = 100;
class Q {
  primedListing = null;
  slugMeta = new Map();
  planFileCache = null;
  planFileBackend = null;
  planFileWatches = new Map();
  primeInFlight = null;
  waitCapMs = I;
  stopReleasingOnSwitch = null;
  lastUnwatched = new Map();
  earlyObserved = new Map();
  earlyGeneration = 0;
  lastSnapshottedWorkshopDoc = null;
  snapshotChain = Promise.resolve();
  planFileCacheKeyFor(n) {
    if (this.planFileCache === null) return null;
    let e = L(n);
    if (M(e) !== P()) return null;
    return v(e);
  }
  notePlanFileWritten(n, e) {
    if (this.planFileCache === null) {
      this.noteEarly(n, e);
      return;
    }
    let r = this.planFileCacheKeyFor(n);
    if (r !== null) {
      let s = this.planFileWatches.get(r);
      if (s !== void 0) s.generation++;
      if (
        (this.planFileCache.set(r, e),
        this.primedListing !== null && this.primedListing.dir === P())
      )
        this.primedListing.listing.add(r);
    }
  }
  notePlanFileForgotten(n) {
    if (this.planFileCache === null) {
      this.noteEarly(n, void 0);
      return;
    }
    let e = this.planFileCacheKeyFor(n);
    if (e !== null) {
      let r = this.planFileWatches.get(e);
      if (r !== void 0) {
        (this.dropToUnknown(e, r), this.refreshPlanFile(e, r));
        return;
      }
      this.planFileCache.delete(e);
    }
  }
  resetPlanFileCacheToUnknown() {
    if (this.planFileCache === null) return;
    for (let n of [...this.planFileCache.keys()]) {
      let e = this.planFileWatches.get(n);
      if (e !== void 0) (this.dropToUnknown(n, e), this.refreshPlanFile(n, e));
      else this.planFileCache.delete(n);
    }
  }
  activatePlanFileCache(n) {
    if (
      ((this.planFileCache ??= new Map()), z() && n !== void 0 && this.planFileBackend === null)
    ) {
      ((this.planFileBackend = n),
        (this.stopReleasingOnSwitch = Eu(() => this.releaseStaleWatches())));
      for (let e of new Set(jxe().values())) this.watchSlug(e, !1);
      this.earlyObserved.clear();
    }
  }
  noteEarly(n, e) {
    if (!z()) return;
    let r = L(n);
    if (M(r) !== P()) return;
    if ((this.earlyGeneration++, e === void 0)) this.earlyObserved.delete(v(r));
    else this.earlyObserved.set(v(r), e);
  }
  watchSlug(n, e) {
    this.releaseStaleWatches();
    for (let r of F(n)) this.watchPlanFile(n, r, e);
    this.lastUnwatched.clear();
  }
  releaseStaleWatches() {
    if (this.planFileWatches.size === 0) return;
    let n = new Set(jxe().values());
    for (let [e, r] of this.planFileWatches) if (!n.has(r.slug)) this.stopWatch(e, r);
  }
  watchPlanFile(n, e, r) {
    let s = this.planFileBackend;
    if (
      s === null ||
      this.planFileCache === null ||
      this.planFileWatches.has(e) ||
      !m() ||
      Rm(g(k(e))) !== void 0
    )
      return;
    let o = {
      slug: n,
      generation: 0,
      seededAbsent: !1,
      subscription: void 0,
      refreshing: void 0,
      refreshAgain: !1,
      resubscribed: !1,
      stopped: !1
    };
    this.planFileWatches.set(e, o);
    let a = this.earlyObserved.has(e) ? this.earlyObserved.get(e) : this.lastUnwatched.get(e);
    if ((this.earlyObserved.delete(e), this.lastUnwatched.delete(e), a !== void 0))
      this.planFileCache.set(e, a);
    else if (r && !this.planFileCache.has(e))
      (this.planFileCache.set(e, null), (o.seededAbsent = !0));
    this.subscribePlanFile(s, e, o);
  }
  observePlanFile(n) {
    let e = this.planFileWatches.get(n);
    return { watch: e, generation: e?.generation ?? this.earlyGeneration };
  }
  notePlanFileObserved(n, e, r) {
    let s = this.planFileWatches.get(n);
    if (s !== void 0)
      if (r.watch === s && s.generation === r.generation) this.installPlanFile(n, s, e);
      else this.refreshPlanFile(n, s);
    else if (
      this.planFileBackend === null &&
      z() &&
      r.watch === void 0 &&
      this.earlyGeneration === r.generation
    )
      this.earlyObserved.set(n, e);
  }
  watchAgentPlanFile(n, e) {
    if (this.planFileBackend === null) return;
    let r = this.planFileWatches.get(e);
    if (r !== void 0) {
      (this.planFileWatches.delete(e), this.planFileWatches.set(e, r));
      return;
    }
    let s = new Set(F(n)),
      o = [...this.planFileWatches].filter(([a, u]) => u.slug === n && !s.has(a));
    for (let [a, u] of o.slice(0, Math.max(0, o.length - ue + 1))) {
      let f = this.planFileCache?.get(a);
      if ((this.stopWatch(a, u), typeof f === "string")) this.planFileCache?.set(a, f);
    }
    this.watchPlanFile(n, e, !1);
  }
  async subscribePlanFile(n, e, r) {
    let s = r.generation,
      o;
    try {
      let a = await n.subscribe(
        { target: "key", key: g(k(e)) },
        (u) => this.onPlanFileEvent(e, r, s, u),
        { maxObservationLagMs: I }
      );
      if (a.ok) {
        if (r.stopped) a.value.unsubscribe();
        else
          ((r.subscription = a.value),
            t(
              `plans: watching ${e} through the storage interface (changes trail by at most ${a.value.observationLagMs} ms)`
            ));
        return;
      }
      o = vt(a.error);
    } catch (a) {
      o = String(a);
    }
    if (r.stopped) return;
    if (
      (t(
        `plans: watching ${e} through the storage interface failed (${o}); serving its last read and in-process writes`
      ),
      this.planFileCache?.has(e) !== !0)
    )
      this.refreshPlanFile(e, r);
  }
  onPlanFileEvent(n, e, r, s) {
    if (e.stopped) return;
    if (!s.ok) {
      if (s.error.code === "Unavailable") {
        queueMicrotask(() => void this.refreshPlanFile(n, e));
        return;
      }
      if (((e.subscription = void 0), Kg())) return;
      t(`plans: the watch on ${n} ended: ${vt(s.error)}`);
      let a = this.planFileBackend;
      if (a !== null && !e.resubscribed) ((e.resubscribed = !0), this.subscribePlanFile(a, n, e));
      else this.stopWatch(n, e);
      return;
    }
    let o = s.value;
    if (o.kind === "snapshot" && e.generation === r) {
      if (!("absent" in o)) {
        this.installPlanFile(n, e, Buffer.from(o.value).toString("utf-8"));
        return;
      }
      if (e.seededAbsent && e.generation === 0) {
        this.installPlanFile(n, e, null);
        return;
      }
    }
    queueMicrotask(() => void this.refreshPlanFile(n, e));
  }
  installPlanFile(n, e, r) {
    (e.generation++, this.planFileCache?.set(n, r));
  }
  refreshPlanFile(n, e) {
    if (e.refreshing !== void 0) return ((e.refreshAgain = !0), e.refreshing);
    let r = this.planFileBackend;
    if (r === null) return Promise.resolve();
    let s = async () => {
      await Promise.resolve();
      try {
        do {
          e.refreshAgain = !1;
          let o = e.generation,
            a = await this.readPlanFileForWatch(r, n);
          if (e.stopped) return;
          if (a === void 0) {
            if (e.generation === o) (e.generation++, this.planFileCache?.delete(n));
            continue;
          }
          if (e.generation === o) this.installPlanFile(n, e, a);
          else e.refreshAgain = !0;
        } while (e.refreshAgain && !e.stopped);
      } finally {
        e.refreshing = void 0;
      }
    };
    return ((e.refreshing = s()), e.refreshing);
  }
  async readPlanFileForWatch(n, e) {
    try {
      let r = await n.read([g(k(e))]);
      if (r.ok) {
        let s = r.value.items[0];
        return s?.found ? Buffer.from(s.value).toString("utf-8") : null;
      }
      t(`plans: v5 read of ${e} failed: ${r.error.code}`);
    } catch (r) {
      t(`plans: v5 read of ${e} threw: ${r}`);
    }
    return;
  }
  async settlePlanFile(n) {
    let e = this.planFileWatches.get(n);
    if (e === void 0) return;
    let r =
      e.refreshing ?? (this.planFileCache?.has(n) !== !0 ? this.refreshPlanFile(n, e) : void 0);
    if (r !== void 0 && !(await B(r, this.waitCapMs))) this.giveUpWaiting(n, e);
  }
  dropToUnknown(n, e) {
    if (e.stopped) return;
    (e.generation++, this.planFileCache?.delete(n));
  }
  giveUpWaiting(n, e) {
    if (this.planFileCache?.has(n)) this.dropToUnknown(n, e);
  }
  unwatchSlug(n) {
    for (let [e, r] of this.planFileWatches) if (r.slug === n) this.stopWatch(e, r);
  }
  unwatchAllPlanFiles() {
    this.lastUnwatched.clear();
    for (let [n, e] of this.planFileWatches) {
      let r = this.planFileCache?.get(n);
      if (r !== void 0) this.lastUnwatched.set(n, r);
      this.stopWatch(n, e);
    }
  }
  stopWatch(n, e) {
    ((e.stopped = !0),
      e.subscription?.unsubscribe(),
      (e.subscription = void 0),
      this.planFileWatches.delete(n),
      this.planFileCache?.delete(n));
  }
  commitPlanListing(n, e) {
    let r = new Set(e);
    this.primedListing = { dir: n, listing: r };
    let s = jxe(),
      o = [...this.slugMeta].filter(([, u]) => u.validatedDir !== n),
      a = new Set(o.map(([u]) => u));
    for (let [u, f] of s) if (!a.has(u)) for (let c of F(f)) r.add(c);
    for (let [u, f] of o) {
      let c = s.get(u);
      if (c === void 0) {
        this.slugMeta.delete(u);
        continue;
      }
      if (F(c).some((p) => r.has(p))) {
        if (f.consumed) {
          (t(
            `Plan slug collision for '${c}' in ${n} detected after the plan path was already in use \u2014 keeping the slug (the pre-existing plan file may be overwritten).`,
            { level: "warn" }
          ),
            (f.validatedDir = n));
          continue;
        }
        if ((s.delete(u), this.slugMeta.delete(u), ![...s.values()].includes(c)))
          this.unwatchSlug(c);
        this.getPlanSlug(u, f.seed);
      } else {
        for (let p of F(c)) r.add(p);
        f.validatedDir = n;
      }
    }
  }
  getPlanSlug(n, e) {
    let r = jxe(),
      s = r.get(n);
    if (!s) {
      let o = e ? ror(e) : "",
        a = !0;
      for (let c = 0; c < ce; c++)
        if (
          ((s = o ? `${o}-${qoe()}` : gYr()),
          (a = F(s).some((p) => this.primedListing?.listing.has(p) === !0)),
          !a)
        )
          break;
      let u = !ye() && !Uxe();
      this.slugMeta.set(n, {
        validatedDir: u || this.primedListing === null ? null : this.primedListing.dir,
        consumed: !1,
        seed: e
      });
      let f = !a && this.primedListing !== null && this.primedListing.dir === P();
      if (this.primedListing !== null) for (let c of F(s)) this.primedListing.listing.add(c);
      (r.set(n, s), this.lastUnwatched.clear(), this.watchSlug(s, f));
    }
    return s;
  }
  markPlanPathServed(n) {
    let e = this.slugMeta.get(n);
    if (e) e.consumed = !0;
  }
  exemptSlugFromRevalidation(n, e) {
    if ((this.slugMeta.delete(n), this.primedListing !== null))
      for (let r of F(e)) this.primedListing.listing.add(r);
    this.watchSlug(e, !1);
  }
  clearAllPlanSlugs() {
    (jxe().clear(), this.slugMeta.clear(), this.unwatchAllPlanFiles());
  }
  noteWorkshopDocSnapshotted(n, e) {
    this.lastSnapshottedWorkshopDoc = { sessionId: n, doc: e };
  }
  reset() {
    ((this.primedListing = null),
      this.slugMeta.clear(),
      this.unwatchAllPlanFiles(),
      this.lastUnwatched.clear(),
      this.earlyObserved.clear(),
      (this.primeInFlight = null),
      (this.waitCapMs = I),
      this.stopReleasingOnSwitch?.(),
      (this.stopReleasingOnSwitch = null),
      (this.planFileBackend = null),
      (this.planFileCache = null),
      (this.lastSnapshottedWorkshopDoc = null),
      (this.snapshotChain = Promise.resolve()));
  }
}
var he = new W(() => new Q());
function x() {
  return U().host;
}
function LS() {
  return he.of(x());
}
function w2e(n, e) {
  LS().notePlanFileWritten(n, e);
}
function NS(n) {
  LS().notePlanFileForgotten(n);
}
function Hpn() {
  LS().resetPlanFileCacheToUnknown();
}
async function ge(n) {
  let e = [];
  try {
    let r = await la(
      (s) => n.listEntries({ namespace: "plan" }, { cursor: s, skipKeyStats: !0 }),
      (s) => {
        for (let o of s)
          if (o.kind === "key" && o.key.namespace === "plan") e.push(`${o.key.name}.md`);
      }
    );
    switch (r.status) {
      case "done":
        return e;
      case "error":
        return (t(`primePlanSlugCollisions: v5 list failed: ${r.error.code}`), null);
      case "capped":
        return (
          t(`primePlanSlugCollisions: v5 list exceeded ${hg} pages; leaving the listing unprimed`),
          null
        );
    }
  } catch (r) {
    return (t(`primePlanSlugCollisions: v5 list threw: ${r}`), null);
  }
}
async function me(n, e) {
  let r = await ge(n);
  if (e !== D()) return;
  if (r !== null) (LS().activatePlanFileCache(n), LS().commitPlanListing(e, r));
}
async function B(n, e) {
  let r = ur(),
    s = !1;
  return (
    await Promise.race([
      n
        .catch(() => {})
        .finally(() => {
          ((s = !0), r.abort());
        }),
      X(e, r.signal)
    ]),
    s
  );
}
async function b1o() {
  let n = LS();
  if (n.primeInFlight !== null) await B(n.primeInFlight, n.waitCapMs);
}
async function mv(n) {
  let e = D();
  if (n && e === P()) {
    let r = LS(),
      s = me(n, e);
    r.primeInFlight = s;
    try {
      await s;
    } finally {
      if (r.primeInFlight === s) r.primeInFlight = null;
    }
    return;
  }
  if (J()) {
    LS().commitPlanListing(e, []);
    return;
  }
  try {
    let r = await le(e);
    if (e !== D()) return;
    LS().commitPlanListing(e, r);
  } catch (r) {
    if (!G(r) && !Vt(r)) l(r);
    if (e !== D()) return;
    if (G(r)) LS().commitPlanListing(e, []);
  }
}
function D() {
  if (!ye() && !Uxe()) return P();
  return Ec();
}
function P() {
  return h(Le(), "plans");
}
function g(n) {
  return We.plan(n);
}
function k(n) {
  return n.endsWith(".md") ? n.slice(0, -3) : n;
}
var w = { publishDiscipline: "inPlace" };
async function j(n) {
  if (J()) return w;
  try {
    let e = await ae(h(Ec(), `${n}.md`));
    return { ...w, mode: e.mode & 511 };
  } catch {
    return w;
  }
}
function m() {
  return Ec() === P();
}
function F(n) {
  return [`${n}.md`, `${n}.workshop.md`];
}
function H8(n, e) {
  return LS().getPlanSlug(n ?? q(), e);
}
function DAe(n) {
  return jxe().get(n ?? q());
}
function Z(n) {
  return typeof n === "string" && n.length <= pe && de.test(n) && !lCt.test(n);
}
function V(n, e) {
  let r =
    typeof e === "string" ? _(kl(e.replace(SX, ""), 80)) : `<non-string slug of type ${typeof e}>`;
  t(`${n}: refusing invalid plan slug ${r}`, { level: "error" });
}
function Y1r(n, e) {
  if (!Z(e)) {
    V("setPlanSlug", e);
    return;
  }
  (jxe().set(n, e), LS().exemptSlugFromRevalidation(n, e));
}
function S1o() {
  LS().clearAllPlanSlugs();
}
class ee {
  #e = void 0;
  directory() {
    return ((this.#e ??= this.#n()), this.#e);
  }
  #n() {
    if (J()) return P();
    let e = pt().plansDirectory;
    if (e) {
      let r = fe(),
        s = L(r, e);
      if (Pe(s, r)) return s;
      t(
        `plansDirectory must be within project root, with no backslash in its path off Windows: ${e}`,
        { level: "error" }
      );
    }
    return P();
  }
  reset() {
    this.#e = void 0;
  }
}
var H = new W(() => new ee()),
  Ec = Object.assign(
    function () {
      return H.of(x()).directory();
    },
    {
      cache: {
        clear() {
          H.of(x()).reset();
        }
      }
    }
  );
function Pe(n, e) {
  if (n !== e && !n.startsWith(e + N)) return !1;
  if (Rc(n)) return !1;
  if (Im(ie(), n) !== void 0) return !1;
  let r = Vp(e);
  if (r === null) return !1;
  let s = n;
  for (;;) {
    let o = Vp(s);
    if (o !== null) return o === r || o.startsWith(r + N);
    let a = M(s);
    if (a === s) return !1;
    s = a;
  }
}
async function y(n) {
  let e = Ec();
  if (J()) return e;
  try {
    await hn().mkdir(e);
  } catch (r) {
    t(`Failed to create plans directory ${e}: ${r}`, { level: "error" });
  }
  return e;
}
async function uet(n, e) {
  if (e && m()) {
    let s = `${gYr()}-ultraplan`,
      o = h(await y(e), `${s}.md`),
      a = await e.write(g(s), n, w);
    if (!a.ok)
      throw new R(
        `saveRejectedUltraplan: v5 write failed: ${a.error.code}`,
        "saveRejectedUltraplan: v5 write failed"
      );
    return o;
  }
  if (J())
    throw (
      dC("rejected_ultraplan", Ec()),
      new R("Cannot save the plan: this session does not write to disk")
    );
  let r = h(await y(), `${gYr()}-ultraplan.md`);
  return (await hn().write(r, n), r);
}
async function w1o(n, e, r) {
  try {
    await y(r);
    let s = v(n, ".md"),
      o = r !== void 0 && m() && M(n) === Ec() && Rm(g(s)) === void 0 ? g(s) : void 0;
    if (r !== void 0 && o !== void 0) {
      let a = await r.write(o, e, w);
      if (!a.ok) {
        K(n, a.error.code);
        return;
      }
    } else if (J()) {
      dC("plan_edit", n);
      return;
    } else await hn().write(n, e);
    w2e(n, e);
  } catch (s) {
    K(n, s instanceof Error ? s.message : String(s));
  }
}
function K(n, e) {
  (NS(n), t(`Failed to persist plan to ${n}: ${e}`, { level: "error" }));
}
function Uk(n) {
  let e = q(),
    r = H8(e);
  if ((LS().markPlanPathServed(e), !n)) return h(Ec(), `${r}.md`);
  return h(Ec(), `${r}-agent-${n}.md`);
}
function v2e() {
  let n = H8(q());
  return h(Ec(), `${n}.workshop.md`);
}
async function T(n, e, r) {
  let s = await n.read([g(e)]);
  if (!s.ok) return (t(`${r}: v5 read failed: ${s.error.code}`), null);
  let o = s.value.items[0];
  return o.found ? Buffer.from(o.value).toString("utf-8") : null;
}
async function v1o(n) {
  if (n && m()) return T(n, `${H8(q())}.workshop`, "getPlanWorkshopDoc");
  if (J()) return null;
  let e = v2e();
  try {
    return await ie().readFile(e, { encoding: "utf-8" });
  } catch (r) {
    if (G(r)) return null;
    if (Vt(r)) return (t(`getPlanWorkshopDoc: read failed for ${e}: ${r}`), null);
    return (l(r), null);
  }
}
function yXn() {
  let n = LS().planFileCache;
  if (n !== null && m()) {
    let e = n.get(`${H8(q())}.workshop.md`);
    if (e !== void 0) return e !== null;
  }
  if (J()) return !1;
  try {
    return ie().existsSync(v2e());
  } catch {
    return !1;
  }
}
async function E1o(n) {
  if (n === void 0 || !m()) return yXn();
  let e = `${H8(q())}.workshop`;
  await LS().settlePlanFile(`${e}.md`);
  let r = LS().planFileCache?.get(`${e}.md`);
  if (r !== void 0) return r !== null;
  return (await n.statMeta(g(e))).ok;
}
function L8(n) {
  let e = Uk(n),
    r = LS().planFileCache;
  if (r !== null && m()) {
    if (n) LS().watchAgentPlanFile(H8(q()), v(e));
    let s = r.get(v(e));
    if (s !== void 0) return s;
  }
  return te(e);
}
async function fet(n, e) {
  if (e === void 0 || !m()) return L8(n);
  let r = ne(n);
  await LS().settlePlanFile(r);
  let s = LS().planFileCache?.get(r);
  if (s !== void 0) return s;
  return T(e, k(r), "getPlan");
}
function ne(n) {
  let e = v(Uk(n)),
    r = LS();
  if (n && r.planFileCache !== null) r.watchAgentPlanFile(H8(q()), e);
  return e;
}
async function k1o(n, e) {
  if (e === void 0 || !m()) return L8(n) !== null;
  let r = ne(n);
  await LS().settlePlanFile(r);
  let s = LS().planFileCache?.get(r);
  if (s !== void 0) return s !== null;
  return (await e.statMeta(g(k(r)))).ok;
}
async function T1o(n) {
  let e = Uk();
  if (z() && n !== void 0 && m()) {
    let r = v(e),
      s = LS(),
      o = s.planFileWatches.get(r);
    if (o !== void 0) {
      if (!(await B(s.refreshPlanFile(r, o), s.waitCapMs))) s.giveUpWaiting(r, o);
      let a = s.planFileCache?.get(r);
      if (a !== void 0) return a;
    }
    return T(n, k(r), "readPlanFileFresh");
  }
  return te(e);
}
function te(n) {
  if (J()) return null;
  try {
    return ie().readFileSync(n, { encoding: "utf-8" });
  } catch (e) {
    if (G(e)) return null;
    if (Vt(e)) return (t(`getPlan: read failed for ${n}: ${e}`), null);
    return (l(e), null);
  }
}
function re(n) {
  let e, r;
  for (let s of n.messages) {
    let o = s.slug;
    if (!o || o === e) continue;
    if (Z(o)) e = o;
    else r ??= o;
  }
  if (e === void 0 && r !== void 0) V("getSlugFromLog", r);
  return e;
}
async function se(n, e, r) {
  if (Dpn() === null) return;
  if (r && m()) return Fe(r, n, e).catch(l);
  if (J()) return;
  let s = h(Ec(), `${e}.workshop.md`);
  try {
    await hn().read(s);
    return;
  } catch (a) {
    if (!G(a)) {
      if (Vt(a)) t(`recoverWorkshopDocForResume: read failed for ${s}: ${a}`);
      else l(a);
      return;
    }
  }
  let o = O(n, "workshop");
  if (!o || o.content.length === 0 || o.content.length > Lpn) return;
  try {
    (await y(),
      await hn().write(s, o.content),
      t(`Workshop doc recovered from file snapshot, ${o.content.length} chars`, { level: "info" }));
  } catch (a) {
    if (Vt(a)) {
      t(`Workshop doc recovery write failed for ${s}: ${a}`);
      return;
    }
    l(a);
  } finally {
    NS(s);
  }
}
async function Fe(n, e, r) {
  let s = `${r}.workshop.md`,
    o = g(`${r}.workshop`),
    a = LS().observePlanFile(s),
    u = await n.read([o]);
  if (!u.ok) {
    t(`recoverWorkshopDocForResume: v5 read failed for ${r}: ${u.error.code}`);
    return;
  }
  let f = u.value.items[0];
  if (
    (LS().notePlanFileObserved(s, f?.found ? Buffer.from(f.value).toString("utf-8") : null, a),
    f?.found)
  )
    return;
  let c = O(e, "workshop");
  if (!c || c.content.length === 0 || c.content.length > Lpn) return;
  let p = h(Ec(), s),
    S = !1;
  try {
    await y(n);
    let b = await n.write(o, c.content, w);
    if (!b.ok) {
      t(`Workshop doc recovery write failed for ${r}: ${b.error.code}`);
      return;
    }
    ((S = !0),
      t(`Workshop doc recovered from file snapshot, ${c.content.length} chars`, { level: "info" }));
  } finally {
    if (S) w2e(p, c.content);
    else NS(p);
  }
}
async function tWt(n, e, r) {
  let s = re(n);
  if (!s) return !1;
  let o = e ?? q();
  if ((Y1r(o, s), r && m())) return we(r, n, s).catch((u) => (l(u), !1));
  let a = h(Ec(), `${s}.md`);
  if ((await se(n, s).catch(l), J())) return !1;
  try {
    return (await hn().read(a), !0);
  } catch (u) {
    if (!G(u)) {
      if (Vt(u)) return (t(`copyPlanForResume: read failed for ${a}: ${u}`), !1);
      return (l(u), !1);
    }
    if (Dpn() === null) return !1;
    t(`Plan file missing during resume: ${a}. Attempting recovery.`);
    let f = O(n, "plan"),
      c = null;
    if (f && C(f.content))
      ((c = f.content),
        t(`Plan recovered from file snapshot, ${c.length} chars`, { level: "info" }));
    else if (((c = oe(n)), c))
      t(`Plan recovered from message history, ${c.length} chars`, { level: "info" });
    if (c)
      try {
        return (await y(), await hn().write(a, c), !0);
      } catch (p) {
        if (Vt(p)) return (t(`Plan recovery write failed for ${a}: ${p}`), !1);
        return (l(p), !1);
      } finally {
        NS(a);
      }
    return (
      t("Plan file recovery failed: no file snapshot or plan content found in message history"),
      !1
    );
  }
}
async function ve(n, e) {
  let r = `${e}.workshop.md`,
    s = LS();
  if (s.planFileWatches.has(r)) {
    await s.settlePlanFile(r);
    return;
  }
  if (s.planFileCache?.has(r)) return;
  let o = s.observePlanFile(r),
    a = await n.read([g(`${e}.workshop`)]);
  if (!a.ok) {
    t(`copyPlanForResume: v5 read failed for ${e}.workshop: ${a.error.code}`);
    return;
  }
  let u = a.value.items[0];
  s.notePlanFileObserved(r, u?.found ? Buffer.from(u.value).toString("utf-8") : null, o);
}
async function we(n, e, r) {
  await se(e, r, n).catch(l);
  let s = `${r}.md`,
    o = LS().observePlanFile(s),
    a = await n.read([g(r)]);
  if (!a.ok) return (t(`copyPlanForResume: v5 read failed for ${r}: ${a.error.code}`), !1);
  let u = a.value.items[0];
  if (
    (LS().notePlanFileObserved(s, u?.found ? Buffer.from(u.value).toString("utf-8") : null, o),
    await ve(n, r),
    u?.found)
  )
    return !0;
  if (Dpn() === null) return !1;
  t(`Plan file missing during resume: ${r}. Attempting recovery.`);
  let f = O(e, "plan"),
    c = null;
  if (f && C(f.content))
    ((c = f.content), t(`Plan recovered from file snapshot, ${c.length} chars`, { level: "info" }));
  else if (((c = oe(e)), c))
    t(`Plan recovered from message history, ${c.length} chars`, { level: "info" });
  if (c) {
    let p = h(Ec(), s),
      S = !1;
    try {
      await y(n);
      let b = await n.write(g(r), c, w);
      if (!b.ok) return (t(`Plan recovery write failed for ${r}: ${b.error.code}`), !1);
      return ((S = !0), !0);
    } finally {
      if (S) w2e(p, c);
      else NS(p);
    }
  }
  return (
    t("Plan file recovery failed: no file snapshot or plan content found in message history"),
    !1
  );
}
async function A1o(n, e, r) {
  let s = re(n);
  if (!s) return !1;
  let o = Ec(),
    a = h(o, `${s}.md`),
    u = H8(e),
    f = h(o, `${u}.md`);
  if ((LS().exemptSlugFromRevalidation(e, u), r && m()))
    return ke(r, s, u).catch((c) => (l(c), !1));
  await y();
  try {
    if (!J()) await hn().copy(h(o, `${s}.workshop.md`), h(o, `${u}.workshop.md`));
  } catch (c) {
    if (!G(c))
      if (Vt(c)) t(`copyPlanForFork: workshop sibling copy failed: ${c}`);
      else l(c);
  } finally {
    NS(h(o, `${u}.workshop.md`));
  }
  try {
    if (J()) return !1;
    return (await hn().copy(a, f), !0);
  } catch (c) {
    if (G(c)) return !1;
    if (Vt(c)) return (t(`copyPlanForFork: copy failed for ${a}: ${c}`), !1);
    return (l(c), !1);
  } finally {
    NS(f);
  }
}
async function ke(n, e, r) {
  let s = h(Ec(), `${r}.workshop.md`),
    o;
  try {
    await y(n);
    let f = await n.read([g(`${e}.workshop`)]);
    if (!f.ok) t(`copyPlanForFork: v5 workshop sibling read failed: ${f.error.code}`);
    else if (f.value.items[0].found) {
      let c = f.value.items[0].value,
        p = await n.write(g(`${r}.workshop`), c, await j(`${e}.workshop`));
      if (!p.ok) t(`copyPlanForFork: v5 workshop sibling copy failed: ${p.error.code}`);
      else o = Buffer.from(c).toString("utf-8");
    }
  } finally {
    if (o !== void 0) w2e(s, o);
    else NS(s);
  }
  let a = h(Ec(), `${r}.md`),
    u;
  try {
    let f = await n.read([g(e)]);
    if (!f.ok) return (t(`copyPlanForFork: v5 read failed for ${e}: ${f.error.code}`), !1);
    if (!f.value.items[0].found) return !1;
    let c = f.value.items[0].value,
      p = await n.write(g(r), c, await j(e));
    if (!p.ok) return (t(`copyPlanForFork: v5 write failed for ${r}: ${p.error.code}`), !1);
    return ((u = Buffer.from(c).toString("utf-8")), !0);
  } finally {
    if (u !== void 0) w2e(a, u);
    else NS(a);
  }
}
function oe(n) {
  for (let e = n.messages.length - 1; e >= 0; e--) {
    let r = n.messages[e];
    if (typeof r !== "object" || r === null) continue;
    if (r.type === "assistant") {
      let s = r.message?.content;
      if (Array.isArray(s)) {
        for (let o of s)
          if (typeof o === "object" && o !== null && o.type === "tool_use" && o.name === ec) {
            let a = o.input,
              u = typeof a === "object" && a !== null ? a.plan : void 0;
            if (C(u)) return u;
          }
      }
    }
    if (r.type === "user") {
      let s = r;
      if (C(s.planContent)) return s.planContent;
    }
    if (r.type === "attachment") {
      let s = r;
      if (s.attachment?.type === "plan_file_reference") {
        let o = s.attachment.planContent;
        if (C(o)) return o;
      }
    }
  }
  return null;
}
function O(n, e) {
  let r = [...n.messages, ...(n.fileSnapshots ?? [])];
  for (let s = r.length - 1; s >= 0; s--) {
    let o = r[s];
    if (
      o?.type === "system" &&
      "subtype" in o &&
      o.subtype === "file_snapshot" &&
      "snapshotFiles" in o
    ) {
      let a = o.snapshotFiles;
      if (!Array.isArray(a)) continue;
      let u = a.find(
        (f) =>
          typeof f === "object" &&
          f !== null &&
          f.key === e &&
          typeof f.path === "string" &&
          typeof f.content === "string"
      );
      if (u !== void 0) return u;
    }
  }
  return;
}
var Lpn = 2000000,
  X1r = Lpn;
function C(n) {
  return typeof n === "string" && n.length > 0 && n.length <= X1r;
}
export {
  Dpn,
  EU,
  M6s,
  LS,
  w2e,
  NS,
  Hpn,
  b1o,
  mv,
  H8,
  DAe,
  Y1r,
  S1o,
  Ec,
  uet,
  w1o,
  Uk,
  v2e,
  v1o,
  yXn,
  E1o,
  L8,
  fet,
  k1o,
  T1o,
  tWt,
  A1o,
  Lpn,
  X1r
};

//# sourceMappingURL=chunk-1fnv3zry.js.map
