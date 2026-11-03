// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E, G } from "./chunk-fs43t96t.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { Sr } from "./chunk-dvghjmtr.js";
import { Aj, w0 } from "./chunk-ajtyjx88.js";
import { o, v, u, me, A } from "./chunk-0bqrj5ah.js";
import { join as b } from "path";
var cvo = "published-floor.json",
  l = 1,
  h = 32,
  a = 65536,
  F = p(() =>
    u({
      version: A(l),
      sources: me(
        o().min(1).max(64),
        u({
          version: v().int().nonnegative(),
          issuedAt: o().max(64),
          recordedAt: v().int().nonnegative()
        })
      )
    })
  );
function c() {
  return b(w0(), cvo);
}
function s() {
  return Sr().publishedCatalogFloorMarks;
}
async function yjn(e) {
  return (await f(), s().get(e)?.version ?? 0);
}
async function qHt(e, r, i = Date.now()) {
  await f();
  let n = s().get(e);
  if (n !== void 0 && n.version >= r.version) return;
  (s().set(e, { version: r.version, issuedAt: (r.issued_at ?? "").slice(0, 64), recordedAt: i }),
    await C());
}
function f() {
  let e = Sr();
  return ((e.publishedCatalogFloorRead ??= g().then(m)), e.publishedCatalogFloorRead);
}
function m(e) {
  if (e === void 0) return;
  for (let [r, i] of e) {
    let n = s().get(r);
    if (n === void 0 || i.version > n.version) s().set(r, i);
  }
}
async function g() {
  let e;
  try {
    e = await Aj().readRange(c(), 0, a + 1);
  } catch (i) {
    if (!G(i))
      t(
        `[publishedCatalog] floor file read failed: ${E(i) ?? "unknown"}; no persisted version marks this session`
      );
    return;
  }
  let r = e.length > a ? void 0 : F().safeParse(ot(e.toString("utf8"), !1));
  if (!r?.success) {
    t(
      `[publishedCatalog] floor file ${r === void 0 ? "oversized" : "invalid"}; no persisted version marks this session`
    );
    return;
  }
  return new Map(Object.entries(r.data.sources));
}
function C() {
  let e = Sr(),
    r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return ((e.publishedCatalogFloorWrite = r), r);
}
async function d() {
  try {
    m(await g());
    let e = [...s().entries()].sort(([, i], [, n]) => n.recordedAt - i.recordedAt).slice(0, h),
      r = Aj();
    (await r.mkdir(w0()),
      await r.atomicWrite(c(), _({ version: l, sources: Object.fromEntries(e) }), 384));
  } catch (e) {
    t(`[publishedCatalog] floor file write failed: ${E(e) ?? "unknown"}`);
  }
}
export { cvo, yjn, qHt };

//# sourceMappingURL=chunk-ze6ha8yq.js.map
