// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ye } from "./chunk-fs43t96t.js";
import { si } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { Z } from "./chunk-p27rr8yn.js";
import { KGo, ett, fKe } from "./chunk-fh50nzzj.js";
import { Ct, lCe, jGr, e9, EGt, x7n, rH } from "./chunk-khq9hq2s.js";
import { Lft } from "./chunk-v3dqhn7m.js";
var h = 1000;
async function tp(e, r, t, n) {
  if (!!r.toolUseId && lCe(Ct(e.slug), r.toolUseId)) return;
  let { signal: o } = r.abortController;
  if (o.aborted) throw new Ye("artifact permission check aborted");
  let l = fKe(),
    f = n?.readBack !== !0,
    w = f && (!l || KGo(e)),
    b = l ? ett(e, o) : void 0;
  if (w && k(e.slug) !== void 0) {
    if ((await b, o.aborted)) throw new Ye("artifact permission check aborted");
    if (S(e.slug, r.toolUseId)) return;
  }
  let d = n?.readBack === !0 ? `${e.slug}?readback` : e.slug,
    c = C(d),
    a = c ?? g(d, e, r, n),
    [s] = await Promise.all([c !== void 0 ? P(c, o) : a.read, b]);
  if (s === void 0) {
    if (o.aborted) throw new Ye("artifact permission check aborted");
    let u = C(d);
    if (u !== void 0 && u !== c) ((a = u), (s = await P(u, o)));
  }
  if (s === void 0) {
    if (f && S(e.slug, r.toolUseId)) return;
    ((a = g(d, e, r, n)), (s = await a.read));
  }
  EGt(e.slug, s, {
    consumedByCheck: !0,
    toolUseId: r.toolUseId,
    issuedAt: a.issuedAt,
    probeId: a.id,
    debugLabel: t
  });
}
async function x0n(e, r, t) {
  let n = Date.now(),
    o = await Lft(e, r.abortController.signal, r.credentials);
  EGt(e.slug, o, { consumedByCheck: !1, toolUseId: r.toolUseId, issuedAt: n, debugLabel: t });
}
function A(e) {
  let r = Date.now(),
    t = Math.min(i.CLAUDE_CODE_ARTIFACT_SHARE_PROBE_REUSE_MS ?? h, h);
  return r >= e && r - e < t && !rH(e);
}
function k(e) {
  let r = Ct(e);
  return r?.lastProbeAt !== void 0 && r.lastProbeIssuedAt !== void 0 && A(r.lastProbeIssuedAt)
    ? r
    : void 0;
}
function m(e, r) {
  let { checkProbesInFlight: t } = Z().shareStatus;
  if (t.get(e) === r) t.delete(e);
}
function g(e, r, t, n) {
  let o = {
    id: Symbol("share probe"),
    issuedAt: Date.now(),
    read: Lft(r, t.abortController.signal, t.credentials, n)
  };
  return (
    o.read.then(
      () => m(e, o),
      () => m(e, o)
    ),
    Z().shareStatus.checkProbesInFlight.set(e, o),
    o
  );
}
function S(e, r) {
  let t = k(e);
  if (t === void 0) return !1;
  if (r !== void 0) e9(e, { ...t, ...jGr(t, r, !0) });
  return (x7n(t, !1, !0), !0);
}
function C(e) {
  let r = Z().shareStatus.checkProbesInFlight.get(e);
  return r !== void 0 && A(r.issuedAt) ? r : void 0;
}
async function P(e, r) {
  try {
    return await si(e.read, r, () => new Ye("artifact permission check aborted"));
  } catch (t) {
    if (r.aborted) throw t;
    return;
  }
}
export { tp, x0n };

//# sourceMappingURL=chunk-th8ddxwf.js.map
