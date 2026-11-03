// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { X, Nt } from "./chunk-4hww8411.js";
import { g, f } from "./chunk-brszmkb3.js";
import { rC, sRe } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { Z } from "./chunk-p27rr8yn.js";
import { Mtn, OSo, _xs, DAr, CEe, MSo, qae } from "./chunk-2nwr73hs.js";
var Rhi = 1500,
  xhi = 86400000,
  Phi = 14400000;
function HAi() {
  return Mtn() !== void 0;
}
function iUn() {
  let r = DAr();
  if (r !== void 0) return { capabilities: r.roster.capabilities, source: r.source };
  return { capabilities: void 0, source: Mtn() === void 0 ? "cold_no_identity" : "cold" };
}
function a_o() {
  return iUn().capabilities === void 0;
}
function LAi(r = Rhi) {
  let e = Z();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !a_o()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(),
    n = e.accountEpoch;
  return (
    (e.rosterWait = Nt(e.rosterHeard, r, "artifact-roster")
      .then(
        (a) => {
          g("artifact_roster_wait", { wait_ms: Date.now() - o, heard: a, cold: a_o() });
        },
        () => {
          f("artifact_roster_wait", "timeout", { wait_ms: Date.now() - o, cold: a_o() });
        }
      )
      .catch((a) => {
        t(`Artifact roster wait: recording its outcome failed: ${d(a)}`);
      })
      .finally(() => {
        if (e.accountEpoch === n) e.rosterWaitOver = !0;
      })),
    e.rosterWait
  );
}
async function NAi(r) {
  let e = Date.now() + r;
  for (;;) {
    let o = Z(),
      n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return !0;
    let a = new AbortController(),
      i = await Promise.race([
        n.then(
          () => !0,
          () => !0
        ),
        X(Math.max(0, e - Date.now()), a.signal, { unref: !0 }).then(() => !1)
      ]);
    if ((a.abort(), !i)) return !1;
    if (Z().rosterHeard === n) return !0;
  }
}
function $Ai(r = Date.now()) {
  let e = OSo();
  if (e === void 0) return !1;
  let o = r - e.fetchedAt;
  return o >= 0 && o < xhi;
}
function FAi(r = Date.now()) {
  let e = _xs();
  if (e === void 0) return !1;
  let o = r - e.deniedAt;
  return o >= 0 && o < Phi && sRe() === e.tokenExpiresAt && !rC(e.tokenExpiresAt, r);
}
function l_o(r) {
  let e = Z(),
    o;
  return (
    (e.rosterHeard = new Promise((n) => {
      o = n;
    })),
    R(e, r, o)
  );
}
async function R(r, e, o) {
  try {
    let n = r.accountEpoch,
      a = sRe(),
      i = Date.now(),
      s = await qae({ ...e, recoverOAuth401: !0 }),
      l = Date.now() - i;
    if ("err" in s) {
      (f("artifact_roster_refresh", s.cause, {
        duration_ms: l,
        ...(s.status !== void 0 && { status: s.status })
      }),
        t(`Artifact roster refresh failed (${s.cause}): ${s.err}`));
      let c = sRe(),
        { cause: A, status: u } = s;
      if (
        (o(!1),
        A === "http_4xx" && (u === 403 || (u === 401 && c !== a)) && c !== null && Z() === r)
      )
        await MSo(r, n, e.storageV5, (h) => ({
          artifactRosterDenied: { ...h, status: u, deniedAt: Date.now(), tokenExpiresAt: c }
        }));
      return !1;
    }
    g("artifact_roster_refresh", { duration_ms: l, schema_frozen: r.frozenAssets !== void 0 });
    let { adopted: p, persisted: m } = CEe({
      session: r,
      epoch: n,
      roster: s,
      storageV5: e.storageV5
    });
    if (p) (o(!0), await m);
    return !0;
  } catch (n) {
    return (t(`Artifact roster refresh: ${d(n)}`), !1);
  } finally {
    o(!1);
  }
}
export { Rhi, xhi, Phi, HAi, iUn, a_o, LAi, NAi, $Ai, FAi, l_o };

//# sourceMappingURL=chunk-7dave9w0.js.map
