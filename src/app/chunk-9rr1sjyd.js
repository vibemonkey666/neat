// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _r, We } from "./chunk-pgnjjhxv.js";
import { G } from "./chunk-fs43t96t.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Dn } from "./chunk-qywdxehb.js";
import { G4t, im, fT } from "./chunk-t0wrcf3t.js";
import { p } from "./chunk-qmkm2x59.js";
import { Q$ } from "./chunk-ak0cmk10.js";
import { Ofn } from "./chunk-r5xsp8d0.js";
import { o, v, T, u, $e, B, A } from "./chunk-0bqrj5ah.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { mkdir as I, readFile as w, stat as y, unlink as j } from "fs/promises";
import { dirname as x, join as E } from "path";
var h = 50,
  fgi = 14400000,
  b = 604800000;
function k(e, r, n) {
  return Ofn() && Boolean(e?.length) && r !== void 0 && ggi(r, n, b);
}
function pgi(e, r) {
  return k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r)
    ? e.projectThreadSessionIds
    : void 0;
}
function mgi(e, r) {
  return k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r)
    ? (e.parkedProjectThreadSessionIds ?? [])
    : [];
}
function M(e, r, n) {
  if (r?.projectThreadResume && (pgi(e, n) !== void 0 || mgi(e, n).length > 0)) return b;
  return fgi;
}
var hki = 900000,
  R = 120000;
function ggi(e, r, n) {
  return r - e <= n && e - r <= R;
}
var $Pt = 64,
  f = p(() => o().max(256).refine(Q$)),
  O = p(() =>
    u({
      sessionId: $e([A(""), f()]),
      environmentId: f(),
      source: B(["standalone", "repl"]),
      pid: v().optional(),
      procStart: o().optional(),
      activeSessionIds: T(f()).max($Pt).optional(),
      activeSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional(),
      projectThreadSessionIds: T(f()).max($Pt).optional(),
      parkedProjectThreadSessionIds: T(f()).max($Pt).optional(),
      parkedProjectThreadSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional(),
      projectThreadSessionIdsPersistedAt: v().int().min(0).max(8640000000000000).optional()
    })
  );
function P(e) {
  return E(im(), fT(e), "bridge-pointer.json");
}
function S(e) {
  let r = fT(e);
  return _r(r) ? We.bridgePointer(r) : null;
}
async function yki(e, r, n) {
  let s = P(e),
    i = z() && n !== void 0 ? S(e) : null;
  if (z() && n !== void 0 && i) {
    let d = await n.write(i, _(r), { mode: 438 & ~process.umask() });
    if (!d.ok) return (t(`[bridge:pointer] write failed: ${vt(d.error)}`, { level: "warn" }), !1);
    return (t(`[bridge:pointer] wrote ${s}`), !0);
  }
  try {
    return (
      await I(x(s), { recursive: !0 }),
      await Dn(s, _(r)),
      t(`[bridge:pointer] wrote ${s}`),
      !0
    );
  } catch (d) {
    return (t(`[bridge:pointer] write failed: ${d}`, { level: "warn" }), !1);
  }
}
function _ki() {
  let e = Promise.resolve();
  return (r) => ((e = e.then(r, r)), e);
}
async function wms(e, r, n) {
  let s = P(e),
    i,
    d,
    g = n ? S(e) : null;
  if (n && g) {
    let l = await n.read([g]);
    if (!l.ok || !l.value.items[0].found) return null;
    ((d = l.value.items[0].mtimeMs), (i = Buffer.from(l.value.items[0].value).toString("utf8")));
  } else
    try {
      ((d = (await y(s)).mtimeMs), (i = await w(s, "utf8")));
    } catch {
      return null;
    }
  let m = O().safeParse(D(i));
  if (!m.success) {
    if (!r?.noClear) (t(`[bridge:pointer] invalid schema, clearing: ${s}`), await vms(e, n));
    return null;
  }
  let c = Date.now(),
    a = Math.max(0, c - d);
  if (!r?.ignoreTtl && a > M(m.data, r, c)) {
    if (!r?.noClear) (t(`[bridge:pointer] stale mtime, clearing: ${s}`), await vms(e, n));
    return null;
  }
  return { ...m.data, ageMs: a };
}
async function bki(e, r, n) {
  let s = await wms(e, n, r);
  if (s) return { pointer: s, dir: e };
  let i = await G4t(e);
  if (i.length <= 1) return null;
  if (i.length > h)
    return (t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`), null);
  let d = fT(e),
    g = i.filter((a) => fT(a) !== d),
    m = await Promise.all(
      g.map(async (a) => {
        let l = await wms(a, void 0, r);
        return l ? { pointer: l, dir: a } : null;
      })
    ),
    c = null;
  for (let a of m) if (a && (!c || a.pointer.ageMs < c.pointer.ageMs)) c = a;
  if (c) t(`[bridge:pointer] fanout found pointer in worktree ${c.dir} (ageMs=${c.pointer.ageMs})`);
  return c;
}
async function vms(e, r) {
  let n = P(e),
    s = r ? S(e) : null;
  if (r && s) {
    let i = await r.delete(s);
    if (i.ok || i.error.code === "NotFound") t(`[bridge:pointer] cleared ${n}`);
    else t(`[bridge:pointer] clear failed: ${vt(i.error)}`, { level: "warn" });
    return;
  }
  try {
    (await j(n), t(`[bridge:pointer] cleared ${n}`));
  } catch (i) {
    if (!G(i)) t(`[bridge:pointer] clear failed: ${i}`, { level: "warn" });
  }
}
function D(e) {
  try {
    return te(e);
  } catch {
    return null;
  }
}
export { fgi, pgi, mgi, hki, ggi, $Pt, yki, _ki, wms, bki, vms };

//# sourceMappingURL=chunk-9rr1sjyd.js.map
