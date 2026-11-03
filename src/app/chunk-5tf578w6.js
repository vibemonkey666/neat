// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { Iee } from "./chunk-jgvfzp2r.js";
import { hvn, gfe, Tot, kse, rT } from "./chunk-5rw2zfa0.js";
import { Pm, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { SZ, H5r, G8o, z8o, ili, vsr, K8o, V8o, q8o, ln, Fh, mg, Xm } from "./chunk-7c3thgax.js";
import { Ss, er } from "./chunk-1e5yp9hx.js";
import { z } from "./chunk-p197ae0z.js";
import { basename as D, dirname as _, join as h } from "path";
var b = 3,
  N = 8;
function v() {
  let s = ln("userSettings");
  return s !== void 0 && D(s) === rT.default ? s : void 0;
}
async function Izo(s, e) {
  if (!z()) return;
  let i = e.epoch;
  (await Promise.all([x(s, e), R(s, e), F("managed-settings file tier", () => U(s, e, i))]),
    await F("project/local layers", () => O(s, e, e.epoch)));
}
async function F(s, e) {
  try {
    await e();
  } catch (i) {
    t(`settingsPrime: start-up seed of the ${s} failed: ${d(i)}; the file reads serve`, {
      level: "warn"
    });
  }
}
async function R(s, e) {
  try {
    await q(s, e);
  } catch (i) {
    t(
      `settingsPrime: ownership read-ahead for the local settings root failed: ${d(i)}; the probe runs as today`,
      { level: "warn" }
    );
  }
}
async function x(s, e) {
  try {
    let i = v();
    if (i === void 0) return;
    if (e.parsedFiles.has(i)) {
      t("settingsPrime: user settings already read before start-up; seed skipped");
      return;
    }
    let n = e.epoch,
      r = await H5r(s, i);
    if (r.kind === "absent") {
      if ((Tot(i), e.seedParsedFile(i, "userSettings", kse(), n)))
        t("settingsPrime: user settings absent; seeded as none");
      return;
    }
    if (r.kind !== "seeded") {
      t(`settingsPrime: start-up seed skipped (${vsr(r)}); the file read serves`);
      return;
    }
    if (e.seedParsedFile(i, "userSettings", r.parsed, n))
      t(`settingsPrime: user settings seeded at start-up (${r.size} bytes)`);
  } catch (i) {
    t(`settingsPrime: start-up seed failed: ${d(i)}; the file read serves`, { level: "warn" });
  }
}
class T {
  storageV5;
  store;
  inFlight = null;
  followUpQueued = !1;
  disposed = !1;
  state = { kind: "unprimed" };
  consecutiveThrows = 0;
  runsInState = 0;
  loggedThrowMessages = new Set();
  loggedOwnershipThrowMessages = new Set();
  loggedHostFilesThrowMessages = new Set();
  unsubscribe;
  constructor(s, e) {
    this.storageV5 = s;
    this.store = e;
    ((this.unsubscribe = e.onInvalidate(() => {
      if (!this.disposed) (this.seedAttestedTier(), this.keepUserLayer(), this.schedule());
    })),
      this.seedAttestedTier(),
      this.schedule());
  }
  keepUserLayer() {
    let s = Iee() ? this.store.lastSeededUserLayer : void 0;
    if (s !== void 0) this.store.seedParsedFile(s.path, "userSettings", s.parsed, this.store.epoch);
  }
  seedAttestedTier() {
    try {
      P(this.storageV5, this.store, this.store.epoch);
    } catch (s) {
      this.logThrowOnce(s, this.loggedHostFilesThrowMessages);
    }
  }
  schedule() {
    if (this.inFlight !== null) {
      this.followUpQueued = !0;
      return;
    }
    this.inFlight = this.run().finally(() => {
      if (this.disposed) return;
      if (((this.inFlight = null), this.followUpQueued))
        ((this.followUpQueued = !1), this.schedule());
    });
  }
  async run() {
    let s = I(this.storageV5, this.store).then(
      (e) => (this.loggedOwnershipThrowMessages.clear(), e),
      (e) => {
        if (!this.disposed) this.logThrowOnce(e, this.loggedOwnershipThrowMessages);
        return;
      }
    );
    try {
      let e = this.store.epoch;
      try {
        let r = v();
        if (r !== void 0) {
          if (!(await this.seedFromBackend(r, e))) return;
        }
      } catch (r) {
        if (!this.disposed) this.onThrow(r);
        return;
      }
      let i = await s;
      if (this.disposed) return;
      if (
        (E(this.store, i),
        (await Promise.all([this.seedLogged(e, O), this.seedLogged(e, U)])).includes(!1))
      )
        return;
      this.consecutiveThrows = 0;
      try {
        (Xm(), this.loggedThrowMessages.clear());
      } catch (r) {
        if (!this.disposed) this.logThrowOnce(r);
      }
    } finally {
      await s;
    }
  }
  async seedLogged(s, e) {
    try {
      return await e(this.storageV5, this.store, s);
    } catch (i) {
      if (!this.disposed) this.logThrowOnce(i, this.loggedHostFilesThrowMessages);
      return this.store.epoch === s && !this.disposed;
    }
  }
  async seedFromBackend(s, e) {
    let i = this.state,
      n = await H5r(this.storageV5, s, i.kind === "seeded" ? i : void 0);
    if (this.store.epoch !== e || this.disposed) return !1;
    if (n.kind === "seeded") {
      if (
        (this.store.seedParsedFile(s, "userSettings", n.parsed, e),
        i.kind === "seeded" && i.contentHash === n.contentHash)
      )
        return !0;
    } else if (n.kind === "absent")
      (Tot(s), this.store.seedParsedFile(s, "userSettings", kse(), e));
    return (this.transition(n), !0);
  }
  transition(s) {
    let e = this.state;
    if (
      ((this.state = s),
      e.kind === s.kind && (s.kind !== "failing" || (e.kind === "failing" && e.code === s.code)))
    ) {
      this.runsInState++;
      return;
    }
    if (e.kind === "failing" && s.kind === "seeded")
      t(`settingsPrime: backend read recovered after ${this.runsInState} failing run(s)`);
    switch (((this.runsInState = 1), s.kind)) {
      case "seeded":
        t(`settingsPrime: user settings seeded (${s.size} bytes)`);
        return;
      case "absent":
        t("settingsPrime: user settings absent; served as none");
        return;
      case "oversize":
        t(
          "settingsPrime: user settings not seeded (oversize); the last seed or the raw path serves"
        );
        return;
      case "failing":
        t(
          `settingsPrime: backend read failed: ${s.code}${s.failureClass ? ` (${s.failureClass})` : ""}; the last seed or the raw path serves`,
          { level: "warn" }
        );
        return;
      case "unprimed":
      case "broken":
        return;
    }
  }
  onThrow(s) {
    if (
      (this.consecutiveThrows++,
      (this.state = { kind: "broken" }),
      this.logThrowOnce(s),
      this.consecutiveThrows >= b)
    )
      (t(
        `settingsPrime: disabled after ${b} consecutive failures; the raw path serves from the next reset`,
        { level: "warn" }
      ),
        this.dispose());
  }
  logThrowOnce(s, e = this.loggedThrowMessages) {
    let i = d(s);
    if (e.has(i) || e.size >= N) return;
    (e.add(i), l(s));
  }
  primes(s) {
    return this.storageV5 === s;
  }
  async whenIdle() {
    while (this.inFlight !== null || this.followUpQueued)
      await (this.inFlight ?? Promise.resolve());
  }
  dispose() {
    if (
      ((this.disposed = !0),
      this.unsubscribe(),
      (this.inFlight = null),
      (this.followUpQueued = !1),
      this.store.primer === this)
    )
      ((this.store.primer = void 0),
        this.store.managedFileReads.clear(),
        (this.store.lastSeededUserLayer = void 0));
  }
}
async function Ozo(s, e) {
  if (!z() || s === void 0) return;
  if (e.primer !== void 0) {
    if (!e.primer.primes(s))
      t("settingsPrime: store already primed through another backend; second prime ignored");
    return;
  }
  (hvn(s).catch(l), (e.primer = new T(s, e)), await e.primer.whenIdle());
}
async function rhn(s) {
  let e = Ss(),
    i = e.backendReadResetTail,
    n;
  ((e.backendReadResetTail = new Promise((r) => (n = r))), await i);
  try {
    return await W(s, e);
  } finally {
    n();
  }
}
async function W(s, e) {
  if ((await e.primer?.whenIdle(), e.primer !== void 0)) await R(s, e);
  let i =
    e.primer === void 0
      ? []
      : (await Promise.all([...G(s).map((n) => G8o(e, n)), X(s, e)]))
          .flat()
          .filter((n) => n !== void 0);
  if ((er(i.length > 0 ? { userLayer: "retain" } : void 0), i.length === 0)) return;
  return () => {
    for (let n of i) n();
  };
}
function G(s) {
  let e = v();
  return [...(e === void 0 ? [] : [z8o(s, e)]), ...B(s)];
}
function B(s) {
  let e = [];
  for (let i of ["projectSettings", "localSettings"]) {
    if (i === "projectSettings" && mg()) continue;
    let n = ln(i);
    if (n !== void 0)
      e.push(K8o(s, i, n, i === "projectSettings" ? "project settings" : "local settings"));
    if (i === "localSettings") {
      let r = Fh();
      if (r !== void 0 && r !== n) e.push(K8o(s, i, r, "legacy local settings"));
    }
  }
  return e;
}
async function M(s, e) {
  let i = s.hostFiles;
  if (!i.serves("system")) {
    if (!e.systemSpaceServingLogged)
      ((e.systemSpaceServingLogged = !0),
        t(
          "settingsPrime: the managed-settings file tier is not read ahead (the backend does not serve 'system'); the policy walk reads the host's files itself"
        ));
    return;
  }
  let n = gfe(SZ()),
    r = e.policyWalkCount,
    a = n.map((u) => V8o(s, h(u, "managed-settings.json"), "managed settings", e)),
    [g, c] = await Promise.all([
      Promise.all(n.map((u) => ili(i, h(u, "managed-settings.d")))),
      Promise.all(a.map((u) => u.read()))
    ]),
    o = { listings: [], unlisted: [], layers: [...a], walksAtReadStart: r },
    f = [];
  for (let [u, S] of n.entries()) {
    let p = g[u],
      m = h(S, "managed-settings.d");
    if (p.kind === "failing") {
      (t(
        `settingsPrime: ${m} not listed through the backend (backend listing failed: ${p.code}${p.failureClass ? ` (${p.failureClass})` : ""}); the folder read serves`
      ),
        o.unlisted.push(m));
      continue;
    }
    if (p.names.length === 0) {
      (t(`settingsPrime: ${m} has no drop-ins to read ahead; the folder read confirms`),
        o.unlisted.push(m));
      continue;
    }
    o.listings.push({ dir: m, names: p.names });
    for (let j of p.names) f.push(V8o(s, h(m, j), "managed settings drop-in", e));
  }
  return (
    o.layers.push(...f),
    { ...o, reads: Promise.all(f.map((u) => u.read())).then((u) => [...c, ...u]) }
  );
}
async function O(s, e, i) {
  let n = B(s);
  if (n.length === 0) return !0;
  let r = await Promise.all(n.map((a) => a.read()));
  if (e.epoch !== i) return !1;
  return (Q(e, n, r, i), !0);
}
var L = Object.freeze([]);
function P(s, e, i) {
  if (s.hostFiles.serving("system") !== "absent" || e.systemAttestationContradicted) return;
  let n = gfe(SZ()).map((r) => ({
    dropInDir: h(r, "managed-settings.d"),
    basePath: h(r, "managed-settings.json")
  }));
  if (n.some(({ basePath: r, dropInDir: a }) => e.walkReadManagedFileIn(r, a))) {
    e.systemAttestationContradicted = !0;
    for (let { basePath: r, dropInDir: a } of n)
      (e.clearFolderListing(a, i), e.unseedParsedFile(r, "policySettings", i));
    l(
      Error(
        "settings: a managed-settings file was read from a folder the host attested absent ('system' space); the attestation is ignored for the rest of this process"
      )
    );
    return;
  }
  if (!e.systemSpaceServingLogged)
    ((e.systemSpaceServingLogged = !0),
      t(
        "settingsPrime: the host attests the 'system' space absent, so this machine's policy folder (or the one CLAUDE_CODE_MANAGED_SETTINGS_PATH names) is not read and the session has no managed-settings files"
      ));
  for (let { basePath: r, dropInDir: a } of n)
    if ((e.seedFolderListing(a, L, i), !e.walkRead(r)))
      e.seedParsedFile(r, "policySettings", kse(), i);
  return {
    listings: n.map(({ dropInDir: r }) => ({ dir: r, names: L })),
    layers: n.map(({ basePath: r }) => ({ path: r, parsed: kse() }))
  };
}
async function U(s, e, i) {
  if (P(s, e, i) !== void 0) return e.epoch === i;
  let n = await M(s, e);
  if (n === void 0) return (C(e, i), !0);
  let r = await n.reads;
  if (e.epoch !== i) return !1;
  let { verdicts: a } = H(e, n, i);
  return (A(e, n, r, a, i), !0);
}
function A(s, e, i, n, r) {
  let a = [],
    g = new Set();
  for (let [c, o] of e.layers.entries()) {
    let f = i[c];
    if (f.kind !== "seeded") {
      (t(`settingsPrime: ${o.label} not seeded (${vsr(f)}); the file read serves`),
        s.managedFileReads.delete(o.path),
        s.unseedParsedFile(o.path, o.source, r));
      continue;
    }
    (g.add(o.path),
      s.managedFileReads.set(o.path, { contentHash: f.contentHash, parsed: f.parsed }));
    let u = n.get(_(o.path)),
      S =
        u !== void 0 && u !== "install"
          ? u
          : s.policyInstallVerdict(o.path, f.parsed, e.walksAtReadStart);
    if (S === "raced") {
      (s.dropRetainedLayer(o.path),
        t(
          `settingsPrime: ${o.label} not installed (the walk read different content while this read was in flight); re-verified next generation`
        ));
      continue;
    }
    if (S === "deferred") {
      (t(
        `settingsPrime: ${o.label} changed after this generation's policy walk; it applies from the next reset, as today`
      ),
        a.push({ layer: o, parsed: f.parsed }));
      continue;
    }
    if (s.seedParsedFile(o.path, o.source, f.parsed, r)) a.push({ layer: o, parsed: f.parsed });
  }
  for (let c of [...s.managedFileReads.keys()])
    if (!g.has(c)) (s.managedFileReads.delete(c), s.unseedParsedFile(c, "policySettings", r));
  return a;
}
function C(s, e) {
  for (let i of [...s.managedFileReads.keys()])
    (s.managedFileReads.delete(i), s.unseedParsedFile(i, "policySettings", e));
  for (let i of gfe(SZ())) s.clearFolderListing(h(i, "managed-settings.d"), e);
}
function H(s, e, i) {
  for (let a of e.unlisted) s.clearFolderListing(a, i);
  let n = [],
    r = new Map();
  for (let a of e.listings) {
    let g = s.folderInstallVerdict(a.dir, a.names, e.walksAtReadStart);
    if ((r.set(a.dir, g), g === "raced"))
      (s.clearFolderListing(a.dir, i),
        t(
          `settingsPrime: ${a.dir} listing not installed (a read this generation went by another membership while it was in flight); the walk's membership or its own folder read serves until the next reset`
        ));
    else if (g === "deferred")
      (t(
        `settingsPrime: ${a.dir} membership changed after this generation's policy walk; it applies from the next reset, as today`
      ),
        n.push(a));
    else if (s.seedFolderListing(a.dir, a.names, i)) n.push(a);
  }
  return { kept: n, verdicts: r };
}
function Q(s, e, i, n) {
  for (let [r, a] of e.entries()) {
    let g = i[r],
      c =
        g.kind === "seeded"
          ? g.parsed
          : g.kind === "absent" && a.whenAbsent === "seedAbsence"
            ? kse()
            : void 0;
    if (c !== void 0 && s.walkReadDiffers(a.path, c))
      t(
        `settingsPrime: ${a.label} not installed (the file read already saw different content this generation)`
      );
    else if (g.kind === "seeded") s.seedParsedFile(a.path, a.source, g.parsed, n);
    else if (c !== void 0) (Tot(a.path), s.seedParsedFile(a.path, a.source, c, n));
    else t(`settingsPrime: ${a.label} not seeded (${vsr(g)}); the file read serves`);
  }
}
async function X(s, e) {
  if (!z()) return [];
  let i = e.epoch;
  try {
    let n = P(s, e, i);
    if (n !== void 0)
      return [
        ...n.listings.map(({ dir: c, names: o }) => e.retainFolderListing(c, o)),
        ...n.layers.map(({ path: c, parsed: o }) => e.retainLayer(c, o))
      ];
    let r = await M(s, e);
    if (r === void 0) return (C(e, i), []);
    let a = await r.reads;
    if (e.epoch !== i) return [];
    let g = H(e, r, i);
    return [
      ...g.kept.map(({ dir: c, names: o }) => e.retainFolderListing(c, o)),
      ...A(e, r, a, g.verdicts, i).map(({ layer: c, parsed: o }) => e.retainLayer(c.path, o))
    ];
  } catch (n) {
    return (
      t(`settings: managed settings not re-seeded: ${d(n)}; the file reads serve`, {
        level: "warn"
      }),
      []
    );
  }
}
async function q(s, e) {
  E(e, await I(s, e));
}
async function I(s, e) {
  if (!z()) return;
  if (typeof process.getuid !== "function" && typeof process.geteuid !== "function") return;
  let i = q8o();
  if (i === void 0 || e.localStoreProbes.hasCanonicalRootOwnerUids(i)) return;
  let n = s.hostFiles;
  if (!n.serves("workspace")) {
    t(
      "settingsPrime: ownership of the local settings root not read ahead (the backend does not serve the workspace); the probe runs as today"
    );
    return;
  }
  let [r, a, g] = await Promise.allSettled([
      n.stat(Pm.workspace(i)),
      n.stat(Pm.workspace(h(i, ".git")), { follow: !1 }),
      n.stat(Pm.workspace(h(i, ".claude")), { follow: !1 })
    ]),
    c = y(r),
    o = y(a),
    f = y(g),
    u = J(c, o, f);
  if ("skipped" in u) {
    t(
      `settingsPrime: ownership of the local settings root not read ahead (${u.skipped}); the probe runs as today`
    );
    return;
  }
  return { root: i, uids: u.uids };
}
function E(s, e) {
  if (e !== void 0 && s.localStoreProbes.primeCanonicalRootOwnerUids(e.root, e.uids))
    t("settingsPrime: ownership of the local settings root read ahead through the backend");
}
function y(s) {
  if (s.status === "rejected") throw s.reason;
  return s.value;
}
function J(s, e, i) {
  if (!s.ok) return { skipped: `stat of the root failed: ${k(s.error)}` };
  if (!e.ok) return { skipped: `lstat of .git failed: ${k(e.error)}` };
  if (!i.ok) return { skipped: `lstat of .claude failed: ${k(i.error)}` };
  let n = w(s.value);
  if (n === void 0)
    return {
      skipped: s.value.kind === "absent" ? "the root is absent" : "no owner uid for the root"
    };
  let r = w(e.value);
  if (r === void 0)
    return {
      skipped:
        e.value.kind === "absent"
          ? "no .git entry (left to the probe's per-call throw)"
          : "no owner uid for .git"
    };
  let a = null;
  if (i.value.kind !== "absent") {
    let g = w(i.value);
    if (g === void 0) return { skipped: "no owner uid for .claude" };
    a = g;
  }
  return { uids: { rootUid: n, gitEntryUid: r, claudeEntryUid: a } };
}
function w(s) {
  return s.kind === "absent" ? void 0 : s.uid;
}
function k(s) {
  return s.code === "Failed" ? (s.telemetryCode ?? s.failureClass) : s.code;
}
export { Izo, Ozo, rhn };

//# sourceMappingURL=chunk-5tf578w6.js.map
