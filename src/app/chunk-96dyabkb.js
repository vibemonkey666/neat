// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ke } from "./chunk-fs43t96t.js";
import { nt } from "./chunk-wrtp8qz8.js";
import { Ui } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { i } from "./chunk-cj37hmns.js";
import { Rue } from "./chunk-ajtyjx88.js";
import { vI } from "./chunk-1e5yp9hx.js";
import { iB } from "./chunk-znkwh1rm.js";
import { fLe, qWr } from "./chunk-yv5e7kyr.js";
import { xa, Lp } from "./chunk-d5zj5299.js";
import { Pd, hu, oo, Va } from "./chunk-39ayby14.js";
import { l1t, nZe, __t, w3n, xun } from "./chunk-frrn501g.js";
import { n1e } from "./chunk-pkean76j.js";
import { oSr, hco, sSr, yco } from "./chunk-23vy5pjb.js";
import { ppe } from "./chunk-ma6pmm2f.js";
import { fJ } from "./chunk-w3ssq3dv.js";
import { o, u, Ue, $e, A } from "./chunk-0bqrj5ah.js";
import { normalize as F, sep as E } from "path";
var Y = new Set([
  "canceled",
  "policy_pending",
  "egress_blocked",
  "essential_traffic",
  "unexpected",
  "credential_name",
  ppe,
  ...yco
]);
var Z = new Set(["not_uploaded_here", ...hco]),
  O = new nt(() => ({ last: Promise.resolve(), uploaded: new Set() })),
  y = p(() => Ue({ path: o().min(1).max(n1e) })),
  ee = p(() =>
    $e([u({ ok: A(!0), file_id: o(), name: o() }), u({ ok: A(!1), code: o().max(64) })])
  );
async function Pvi(e, t, n, r, s) {
  let { path: a } = y().parse(e);
  if (s === ppe) return { summary: `not uploaded: ${s}`, output: { ok: !1, code: s } };
  let d = O.of(n),
    c = () => R(a, t, n, r, s),
    m = d.last.then(c, c);
  d.last = m;
  let f = await m;
  if (f.ok) d.uploaded.add(f.file_id);
  return { summary: f.ok ? "uploaded" : `not uploaded: ${f.code}`, output: f };
}
var P = p(() => Ue({ file_id: o().min(1).max(256) })),
  te = p(() => $e([u({ ok: A(!0) }), u({ ok: A(!1), code: o().max(64) })]));
async function Ivi(e, t) {
  let { file_id: n } = P().parse(e);
  if (!O.of(t).uploaded.delete(n))
    return {
      summary: "not deleted: not_uploaded_here",
      output: { ok: !1, code: "not_uploaded_here" }
    };
  let r = await sSr([n]);
  return r === void 0
    ? { summary: "deleted", output: { ok: !0 } }
    : { summary: `not deleted: ${r}`, output: { ok: !1, code: r } };
}
async function R(e, t, n, r, s) {
  if (t.aborted) return { ok: !1, code: "canceled" };
  let a = iB() ? "policy_pending" : fJ();
  if (a !== void 0) return { ok: !1, code: a };
  if (!Rue()) return { ok: !1, code: "no_token" };
  let d = F(e),
    { realDirectory: c } = r;
  try {
    if (!_(d) && (await nZe(d, d, { realDirectory: c })) === "credential_name")
      return { ok: !1, code: "credential_name" };
  } catch {
    return { ok: !1, code: "path_rejected" };
  }
  let m = await JCt(e, n, r, s);
  if (m === void 0) return { ok: !1, code: "path_rejected" };
  let f = await nZe(d, m, { attached: _(d) && _(m), realDirectory: c });
  if (f !== void 0) return { ok: !1, code: f === "credential_name" ? f : "path_rejected" };
  try {
    return await oSr(m, void 0, t);
  } catch (k) {
    if (Ke(k)) return { ok: !1, code: "canceled" };
    return (l(k), { ok: !1, code: "unexpected" });
  }
}
function _(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) && T(e, fLe);
}
async function JCt(e, t, n, r) {
  let s;
  try {
    s = await n.localFileAt(e);
  } catch {
    return;
  }
  let a = F(e);
  return l1t(s) || h(a, s, r) || !(await D(a, s, t, n)) ? void 0 : s;
}
async function D(e, t, n, { realDirectory: r, home: s }) {
  if (await __t(t, r)) return !1;
  if (S(e, t)) return !0;
  let a = n.project?.originalCwd;
  if (a === void 0 || a === "") return !1;
  let d = await r(s);
  if (d === void 0) return !1;
  return d !== a && !T(d, a) && T(t, a);
}
function h(e, t, n) {
  if (n === void 0) return !1;
  if (oo(n, Lp, g(Pd(n), e, t)) || Va(n, Lp, g(hu(n), e, t))) return !0;
  let r = [Ui(e), Ui(t)];
  if (r.some((s) => s.unresolved)) return !0;
  return r.some((s) =>
    s.spellings.some((a) => xa(a, n, "read", "deny") !== null || xa(a, n, "read", "ask") !== null)
  );
}
function $Jr(e) {
  return oo(e, Lp) !== null || Va(e, Lp) !== null;
}
function g(e, t, n) {
  return S(t, n) ? e.filter(x) : e;
}
function x({ source: e }) {
  return !vI.some((t) => t === e);
}
function S(e, t) {
  if (!i.CLAUDE_CODE_REMOTE) return !1;
  let n = w3n();
  return qWr.some((r) => T(t, r)) || (n !== void 0 && xun(e, t, n));
}
function T(e, t) {
  return e.startsWith(t + E);
}
export { Pvi, Ivi, JCt, $Jr };

//# sourceMappingURL=chunk-96dyabkb.js.map
