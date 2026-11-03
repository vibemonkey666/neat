// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, q, J } from "./chunk-wrtp8qz8.js";
import { R, d, E, Fs, J_, I2, tg } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { S2, l } from "./chunk-ewvf3tep.js";
import { zSt } from "./chunk-h6j5xbav.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { _, te, ie, t } from "./chunk-4kxznmzw.js";
import { Le, Oit } from "./chunk-jazcqqqr.js";
import { re, Nb, Or } from "./chunk-a16y5hcz.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { _r, We, PAt } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { gi } from "./chunk-7svjr0za.js";
import { rkt, sy, bo } from "./chunk-9zd34fgb.js";
import { XK } from "./chunk-xq3dwnzp.js";
import { vl, zg } from "./chunk-6xjawpfq.js";
import { Ma } from "./chunk-znr3gw2p.js";
import { dir } from "./chunk-5rw2zfa0.js";
import { i } from "./chunk-cj37hmns.js";
import { Bx, oc } from "./chunk-vchq4g74.js";
import { Ya, cNe, ckt } from "./chunk-jwqtbev0.js";
import { n_t } from "./chunk-m99mv31n.js";
import { x8 } from "./chunk-ywy052ac.js";
import { Mn, Bkt } from "./chunk-8gjxvrgz.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, M, oe, T, u, yt, Gr, me, B, A } from "./chunk-0bqrj5ah.js";
import { hg, la } from "./chunk-8fp2d2p3.js";
import { Zm, vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { join as Pe } from "path";
var mt = new Set(["to", "summary", "message", "notify_when_idle"]),
  we = "antml:",
  pe = "</summary>",
  De = '<parameter name="message">',
  Fe = `<${we}parameter name="message">`,
  gt = new RegExp(
    `<(?:${we})?parameter\\b|</(?:${we})?(?:parameter|invoke|function_calls|message)>`
  );
function EFr(e) {
  let n = Ne(e);
  return n !== void 0 && n.unrepaired === void 0 ? n.split : void 0;
}
function Ne(e) {
  if (!H(e)) return;
  let { message: n, summary: r } = e;
  if (
    typeof e.to !== "string" ||
    (n !== void 0 && n !== null) ||
    typeof r !== "string" ||
    !Object.keys(e).every((c) => mt.has(c))
  )
    return;
  let s = r.indexOf(pe);
  while (s !== -1) {
    let c = s + pe.length;
    while (c < r.length && /\s/.test(r.charAt(c))) c++;
    let y = r.startsWith(Fe, c) ? "namespaced" : r.startsWith(De, c) ? "bare" : void 0;
    if (y !== void 0) {
      let a = y === "namespaced" ? Fe : De,
        h = r.slice(c + a.length).trimEnd();
      if (h.trim().length === 0) return;
      return {
        split: { summary: r.slice(0, s).trim(), message: h, openerForm: y },
        unrepaired: gt.test(h) ? "markup" : kt(h) ? "json" : void 0
      };
    }
    s = r.indexOf(pe, s + pe.length);
  }
  return;
}
function L6n(e, { applySplit: n = !0 } = {}) {
  if (!H(e)) return null;
  let { message: r, summary: s } = e,
    c = [],
    y = Ne(e),
    a = y?.unrepaired === void 0 ? y?.split : void 0;
  if (a !== void 0 && n)
    ((r = a.message), (s = a.summary), c.push(`split_slipped_summary_${a.openerForm}`));
  if (typeof r === "string" && (typeof s !== "string" || s.trim().length === 0)) {
    let b = Or(r.trim()).trim();
    if (b.length > 0) ((s = b), c.push("derive_summary"));
  }
  if (typeof s === "string" && s.length > Bkt)
    ((s = re(s, Bkt - 1) + "\u2026"), c.push("truncate_summary"));
  let [h] = c,
    k =
      y?.unrepaired !== void 0
        ? `split_slipped_summary_${y.split.openerForm}_unrepaired_${y.unrepaired}`
        : a !== void 0 && !n
          ? `split_slipped_summary_${a.openerForm}_detect_only`
          : h;
  if (k === void 0) return null;
  return { input: { ...e, ...(r !== void 0 && { message: r }), summary: s }, shapeClass: k };
}
function kt(e) {
  let n = e.trim();
  if (!n.startsWith("{") && !n.startsWith("[")) return !1;
  try {
    let r = te(n);
    return typeof r === "object" && r !== null;
  } catch {
    return !1;
  }
}
var j = ve(new Map(), (e) => e.clear()),
  ht = 64,
  bt = p(() => u({ type: B(["shutdown_approved", "shutdown_rejected"]), requestId: o() }));
function HVs(e, n) {
  if ((j.set(e, n), j.size > ht)) j.delete(j.keys().next().value ?? e);
}
function LVs(e, n) {
  return n !== void 0 && j.get(e) === n;
}
function NVs(e) {
  j.delete(e);
}
function Ce(e) {
  if (j.size === 0) return;
  for (let n of e) {
    let r = n?.text;
    if (typeof r !== "string" || !r.includes('"shutdown_')) continue;
    let s = bt().safeParse(ot(r));
    if (s.success) j.delete(s.data.requestId);
  }
}
function Te(e) {
  let n = xt(e);
  return Tt(`\x00k${PAt(n)}`, { at: "store", key: n });
}
function $Vs(e, n, r) {
  if (typeof e === "string") return n(e);
  let s = r(e.key);
  return s === void 0 ? void 0 : Te(s);
}
var ge = new Map(),
  wt = new FinalizationRegistry((e) => {
    if (ge.get(e)?.deref() === void 0) ge.delete(e);
  });
function Tt(e, n) {
  let r = ge.get(e)?.deref();
  if (r !== void 0) return r;
  let s = Object.freeze({ ...n, toString: () => e });
  return (ge.set(e, new WeakRef(s)), wt.register(s, e), s);
}
function xt(e) {
  return Object.freeze(
    Object.fromEntries(
      Object.entries(e)
        .filter(([, n]) => n !== void 0)
        .map(([n, r]) => [n, Array.isArray(r) ? Object.freeze([...r]) : r])
    )
  );
}
function O() {
  return Ma().mailbox.ledger;
}
function lNo(e, n) {
  let r = bo(e);
  return Object.values(n ?? {}).find((s) => bo(s.name) === r);
}
function _t(e, n) {
  if (n.isPaneTeammate) return !1;
  if (!Object.values(n.roster ?? {}).some((a) => a.tmuxPaneId === "leader")) return !1;
  let s = bo(e);
  if (s === Ya || s === cNe || s === ckt) return !0;
  let y = lNo(e, n.roster);
  return y?.tmuxPaneId === "in-process" || y?.tmuxPaneId === "leader";
}
function qTe(e, n, r) {
  let s = O(),
    c = new Set(),
    y = new Map();
  for (let a of e)
    if (a.msg_id !== void 0 && !c.has(a.msg_id) && s.wrote(n, a) && a.msg_id !== void 0)
      (c.add(a.msg_id), y.set(a, "verified"));
    else y.set(a, _t(a.from, r) ? "forged" : "unverifiable");
  return y;
}
import { readdir as ye, readFile as Ue, unlink as _e, writeFile as G } from "fs/promises";
import { join as ae } from "path";
function RVs(e) {
  if (Ma().taskList.leaderTeamName === e) return;
  ((Ma().taskList.leaderTeamName = e), U());
}
function xVs(e) {
  return Ma().taskList.updated.subscribe(e);
}
function U() {
  try {
    Ma().taskList.updated.emit();
  } catch {}
}
var VTe = p(() => B(["pending", "in_progress", "completed"])),
  Ke = p(() =>
    u({
      id: o(),
      subject: o(),
      description: o(),
      activeForm: o().optional(),
      owner: o().optional(),
      status: VTe(),
      blocks: T(o()),
      blockedBy: T(o()),
      metadata: me(o(), oe()).optional()
    })
  ),
  oNo = ".highwatermark",
  qe = 16,
  Mt = new Set(["ELOOP", "EISDIR", "ENXIO"]);
function He(e) {
  return (
    e.code === "AlreadyExists" ||
    (e.code === "Failed" && e.telemetryCode !== void 0 && Mt.has(e.telemetryCode))
  );
}
var ke = { retries: { retries: 30, minTimeout: 5, maxTimeout: 100 }, onCompromised: (e) => l(e) };
function Qe(e) {
  return ae(dU(e), oNo);
}
async function Y(e, n) {
  return (await Ge(e, n)) ?? 0;
}
async function Ge(e, n) {
  if (n) {
    let s = await n.read([We.taskListHighWaterMark(OO(e))]);
    if (!s.ok) return null;
    let c = s.value.items[0];
    if (!c?.found) return 0;
    let y = parseInt(Buffer.from(c.value).toString("utf8").trim(), 10);
    return isNaN(y) ? null : y;
  }
  let r = Qe(e);
  try {
    let s = (await Ue(r, "utf8")).trim(),
      c = parseInt(s, 10);
    return isNaN(c) ? null : c;
  } catch (s) {
    return E(s) === "ENOENT" ? 0 : null;
  }
}
async function Z(e, n, r) {
  if (r) {
    let c = await r.write(We.taskListHighWaterMark(OO(e)), String(n), {
      publishDiscipline: "inPlace"
    });
    if (!c.ok) {
      let y = I2(Zm(c.error));
      throw Object.assign(
        new R(
          `[Tasks] high-water mark write failed: ${c.error.code}`,
          "tasks high-water mark v5 write failed"
        ),
        y === void 0 ? {} : { code: y }
      );
    }
    return;
  }
  let s = Qe(e);
  await G(s, String(n), { encoding: "utf8" });
}
async function Et(e, n, r) {
  try {
    if (n > (await Y(e, r))) await Z(e, n, r);
  } catch (s) {
    t(`[Tasks] could not record skipped task id ${n}: ${d(s)}`);
  }
}
function IO() {
  if (i.CLAUDE_CODE_ENABLE_TASKS === !1) return !1;
  return !0;
}
async function PVs(e, n) {
  let r = dU(e),
    s;
  try {
    s = await V(e, n);
    let c = [];
    if (n) {
      let a = await Se(n, e);
      if (a === null) return !1;
      if (((c = a.filter((h) => !h.startsWith("."))), c.length > 0)) {
        let h = await n.read(c.map((k) => L(e, k)));
        if (!h.ok)
          return (t(`[Tasks] Failed to read task list ${e} before a reset: ${h.error.code}`), !1);
        if (h.value.items.length !== c.length) return !1;
        for (let [k, b] of h.value.items.entries()) {
          if (!b.found) continue;
          let w = he(c[k], Buffer.from(b.value).toString("utf8"));
          if (w === null) continue;
          if (w.status !== "completed") return !1;
        }
      }
    } else if ((await jL(e)).some((h) => h.status !== "completed")) return !1;
    let y = n ? Me(c) : await Ye(e);
    if (y > 0) {
      let a = await Y(e, n);
      if (y > a) await Z(e, y, n);
    }
    if (n) for (let a of c) await n.delete(We.task(OO(e), a));
    else {
      let a;
      try {
        a = await ye(r);
      } catch {
        a = [];
      }
      for (let h of a)
        if (h.endsWith(".json") && !h.startsWith(".")) {
          let k = ae(r, h);
          try {
            await _e(k);
          } catch {}
        }
    }
    return (U(), !0);
  } finally {
    await zg(s, "[Tasks] resetTaskList");
  }
}
function Nk() {
  if (i.CLAUDE_CODE_TASK_LIST_ID) return i.CLAUDE_CODE_TASK_LIST_ID;
  let e = Bx();
  if (e) return e.teamName;
  return oc() || Ma().taskList.leaderTeamName || q();
}
function OO(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function dU(e) {
  return ae(Le(), "tasks", OO(e));
}
function D(e, n) {
  return ae(dU(e), `${OO(n)}.json`);
}
function L(e, n) {
  return We.task(OO(e), OO(n));
}
async function Se(e, n) {
  let r = { namespace: "task", listId: OO(n) },
    s = [],
    c = await la(
      (y) => e.listEntries(r, { cursor: y, skipKeyStats: !0 }),
      (y) => {
        for (let a of y)
          if (a.kind === "key" && a.key.namespace === "task" && "taskId" in a.key)
            s.push(a.key.taskId);
      }
    );
  switch (c.status) {
    case "done":
      return s;
    case "error":
      return (t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null);
    case "capped":
      return (
        t(`[Tasks] Listing task list ${n} exceeded ${hg} pages; treating the listing as failed`),
        null
      );
  }
}
async function Xe(e, n) {
  let r = { namespace: "task", listId: OO(n) },
    s = [],
    c;
  try {
    c = await la(
      (a) => e.listEntries(r, { cursor: a, includeValue: !0 }),
      (a) => {
        for (let h of a) {
          if (h.kind !== "key" || h.key.namespace !== "task" || !("taskId" in h.key)) continue;
          let k = h.key.taskId;
          if (h.value instanceof Uint8Array && k === OO(k))
            s.push(he(k, Buffer.from(h.value).toString("utf8")));
          else s.push(TY(n, k, e));
        }
      }
    );
  } finally {
    await Promise.allSettled(s);
  }
  switch (c.status) {
    case "done":
      break;
    case "error":
      return (t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null);
    case "capped":
      return (
        t(`[Tasks] Listing task list ${n} exceeded ${hg} pages; treating the listing as failed`),
        null
      );
  }
  return (await Promise.all(s))
    .filter((a) => a !== null)
    .sort((a, h) => Number(a.id) - Number(h.id));
}
async function IVs(e, n) {
  if (z() && n !== void 0) return Xe(n, e);
  return jL(e);
}
async function zcn(e, n) {
  let r = dU(e);
  try {
    if (z() && n !== void 0) {
      await n.ensureScope({ namespace: "task", listId: OO(e) });
      return;
    }
    await ie().mkdir(r);
  } catch {}
}
function Me(e) {
  let n = 0;
  for (let r of e) {
    let s = parseInt(r, 10);
    if (!isNaN(s) && s > n) n = s;
  }
  return n;
}
async function Ye(e, n) {
  if (n) {
    let y = await Se(n, e);
    if (y === null)
      throw new R("[Tasks] Could not list the task list to determine its highest task id");
    return Me(y);
  }
  let r = dU(e),
    s;
  try {
    s = await ye(r);
  } catch {
    return 0;
  }
  let c = 0;
  for (let y of s) {
    if (!y.endsWith(".json")) continue;
    let a = parseInt(y.replace(".json", ""), 10);
    if (!isNaN(a) && a > c) c = a;
  }
  return c;
}
async function vFr(e, n) {
  let [r, s] = await Promise.all([Ye(e, n), Y(e, n)]);
  return Math.max(r, s);
}
async function OVs(e, n, r) {
  let s;
  try {
    s = await V(e, r);
    let c = await vFr(e, r),
      y = String(c + 1);
    if (r)
      for (let a = 1; ; a++) {
        let h = { id: y, ...n },
          k = await r.write(L(e, y), _(h, null, 2), { precondition: { type: "ifAbsent" } });
        if (k.ok) break;
        if (!He(k.error))
          throw new R(
            `[Tasks] Failed to create task ${y}: ${k.error.code}`,
            "[Tasks] v5 task create write failed"
          );
        let b = k.error.code === "Failed" ? k.error.telemetryCode : void 0;
        if (
          (t(
            `[Tasks] createTask: task id ${y} is held by an entry the listing did not report (${b ?? k.error.code}); taking the next id`
          ),
          await Et(e, Number(y), r),
          a >= qe)
        )
          throw new R(
            `[Tasks] Failed to create a task: could not claim a free task id after ${qe} attempts; last tried ${D(e, y)}, which exists and could not be claimed \u2014 the task listing may have failed, or the entry is not a task file`,
            "[Tasks] v5 task create gave up: no free task id"
          );
        y = String(Number(y) + 1);
      }
    else {
      let a = { id: y, ...n },
        h = D(e, y);
      await G(h, _(a, null, 2), { encoding: "utf8" });
    }
    return (U(), y);
  } finally {
    await zg(s, "[Tasks] createTask");
  }
}
function he(e, n) {
  try {
    let r = te(n),
      s = Ke().safeParse(r);
    if (!s.success)
      return (t(`[Tasks] Task ${e} failed schema validation: ${s.error.message}`), null);
    return s.data;
  } catch (r) {
    if ((t(`[Tasks] Failed to read task ${e}: ${d(r)}`), !(r instanceof SyntaxError))) l(r);
    return null;
  }
}
async function Ze(e, n, r) {
  let s = await e.read([L(n, r)]);
  if (!s.ok) return (t(`[Tasks] Failed to read task ${r}: ${s.error.code}`), null);
  let c = s.value.items[0];
  if (!c.found) return null;
  return he(r, Buffer.from(c.value).toString("utf8"));
}
async function sNo(e, n, r, s, { wholeOrNothing: c = !1 } = {}) {
  let y,
    a = 0,
    h = [],
    k = async () => {
      let b = 0;
      for (let w of h) {
        let x;
        try {
          if (s) {
            let S = await s.delete(L(e, w));
            x = S.ok ? void 0 : S.error.code;
          } else await _e(D(e, w));
        } catch (S) {
          let v = E(S);
          x = v === "ENOENT" ? void 0 : (v ?? d(S));
        }
        if (x !== void 0) (b++, t(`[Tasks] restoreTaskList: task ${w} not taken back: ${x}`));
      }
      return b;
    };
  try {
    if (((y = await V(e, s)), (await vFr(e, s)) > 0)) return { restored: !1, written: a };
    for (let b of n) {
      if (s) {
        let w = await s.write(L(e, b.id), _(b, null, 2), { precondition: { type: "ifAbsent" } });
        if (w.ok) (a++, h.push(b.id));
        else t(`[Tasks] restoreTaskList: task ${b.id} not written: ${w.error.code}`);
        continue;
      }
      try {
        (await G(D(e, b.id), _(b, null, 2), { encoding: "utf8", flag: "wx" }), a++, h.push(b.id));
      } catch (w) {
        t(`[Tasks] restoreTaskList: task ${b.id} not written: ${E(w) ?? "unknown"}`);
      }
    }
    if (c && a < n.length) {
      let b = await k();
      return { restored: !1, written: 0, refused: n.length - a, ...(b > 0 && { left: b }) };
    }
    await Z(e, r, s);
  } catch (b) {
    if (c) await k();
    throw b;
  } finally {
    await zg(y, "[Tasks] restoreTaskList");
  }
  return (U(), { restored: !0, written: a });
}
async function MVs(e, n, r) {
  let s;
  try {
    s = await V(e, r);
    let c = !1;
    if (r) {
      let a = await r.write(L(e, n.id), _(n, null, 2), { precondition: { type: "ifAbsent" } });
      if (!a.ok && !He(a.error))
        throw new R(
          `[Tasks] Failed to write task ${n.id}: ${a.error.code}`,
          "[Tasks] v5 task write under id failed"
        );
      c = a.ok;
    } else
      try {
        (await G(D(e, n.id), _(n, null, 2), { encoding: "utf8", flag: "wx" }), (c = !0));
      } catch (a) {
        if (E(a) !== "EEXIST") throw a;
      }
    let y = Number(n.id);
    if (Number.isSafeInteger(y) && y > (await Y(e, r))) await Z(e, y, r);
    if (c) U();
    return c;
  } finally {
    await zg(s, "[Tasks] writeTaskUnderId");
  }
}
async function H6n(e, n, r) {
  let s;
  try {
    if (((s = await V(e, r)), n <= (await Y(e, r)))) return !1;
    return (await Z(e, n, r), !0);
  } finally {
    await zg(s, "[Tasks] raiseTaskIdMark");
  }
}
async function TY(e, n, r) {
  if (r) return Ze(r, e, n);
  let s = D(e, n);
  try {
    let c = await Ue(s, "utf8"),
      y = te(c),
      a = Ke().safeParse(y);
    if (!a.success)
      return (t(`[Tasks] Task ${n} failed schema validation: ${a.error.message}`), null);
    return a.data;
  } catch (c) {
    if (E(c) === "ENOENT") return null;
    if (
      (t(`[Tasks] Failed to read task ${n}: ${d(c)}`, { level: "error" }),
      !(c instanceof SyntaxError) && !tg(c) && !J_(c))
    )
      l(c);
    return null;
  }
}
async function Je(e, n, r, s) {
  if (s) return et(s, e, n, r);
  let c = await TY(e, n);
  if (!c) return null;
  let y = { ...c, ...r, id: n },
    a = D(e, n);
  return (await G(a, _(y, null, 2), { encoding: "utf8" }), U(), y);
}
var Rt = 5,
  Pt = n_t(50);
async function xe(e, n, r, s) {
  let c = L(n, r);
  for (let y = 1; ; y++) {
    let a = await e.update(c, (k) => {
      let b = k === void 0 ? null : he(r, Buffer.from(k.value).toString("utf8")),
        w = s(b);
      return "write" in w
        ? { write: _(w.write, null, 2), result: w.result }
        : { skip: !0, result: w.result };
    });
    if (a.ok) {
      if (a.value.written) U();
      return a.value.result;
    }
    if (!(a.error.code === "Unavailable" && a.error.telemetryCode === "LockSuspect") || y >= Rt)
      throw (
        t(
          `[Tasks] update of task ${r} failed after ${y} attempt(s): ${a.error.code}${"telemetryCode" in a.error && a.error.telemetryCode ? ` (${a.error.telemetryCode})` : ""}`
        ),
        new R(
          `[Tasks] Failed to update task ${r}: ${a.error.code}`,
          "[Tasks] v5 task update write failed"
        )
      );
    await (a.error.retryAfterMs !== void 0 ? X(a.error.retryAfterMs) : Pt(y));
  }
}
function Ve(e, n, r) {
  return { ...e, ...n, id: r };
}
async function et(e, n, r, s) {
  return (
    (await xe(e, n, r, (y) => {
      if (!y) return { result: null };
      let a = Ve(y, s, r);
      return { write: a, result: a };
    })) ?? null
  );
}
async function Zhe(e, n, r, s) {
  let c = D(e, n);
  if (s) {
    if (!(await Ze(s, e, n))) return null;
    let h;
    try {
      return ((h = await tt(e, n)), await et(s, e, n, r));
    } finally {
      await zg(h, "[Tasks] updateTask");
    }
  }
  if (!(await TY(e, n))) return null;
  let a;
  try {
    return ((a = await vl(c, ke)), await Je(e, n, r));
  } finally {
    await zg(a, "[Tasks] updateTask");
  }
}
async function DBt(e, n, r) {
  let s = D(e, n);
  try {
    let c = parseInt(n, 10);
    if (!isNaN(c)) {
      let a = await Y(e, r);
      if (c > a) await Z(e, c, r);
    }
    if (r) {
      let a = await r.delete(L(e, n));
      if (!a.ok) return (t(`[Tasks] Failed to delete task ${n}: ${a.error.code}`), !1);
      if (!a.value.existed) return !1;
    } else
      try {
        await _e(s);
      } catch (a) {
        if (E(a) === "ENOENT") return !1;
        throw a;
      }
    let y = await jL(e, r);
    for (let a of y) {
      let h = a.blocks.filter((b) => b !== n),
        k = a.blockedBy.filter((b) => b !== n);
      if (h.length !== a.blocks.length || k.length !== a.blockedBy.length)
        await Zhe(e, a.id, { blocks: h, blockedBy: k }, r);
    }
    return (U(), !0);
  } catch {
    return !1;
  }
}
async function jL(e, n) {
  if (n) return (await Xe(n, e)) ?? [];
  let r = dU(e),
    s;
  try {
    s = await ye(r);
  } catch {
    return [];
  }
  let c = s.filter((a) => a.endsWith(".json")).map((a) => a.replace(".json", ""));
  return (await Promise.all(c.map((a) => TY(e, a))))
    .filter((a) => a !== null)
    .sort((a, h) => Number(a.id) - Number(h.id));
}
function iNo(e) {
  return /^[1-9]\d*$/.test(e);
}
async function aNo(e, n) {
  let r;
  if (n) r = await Se(n, e);
  else
    try {
      r = (await ye(dU(e))).filter((h) => h.endsWith(".json")).map((h) => h.replace(".json", ""));
    } catch (h) {
      r = E(h) === "ENOENT" ? [] : null;
    }
  if (r === null) return null;
  let s = r.filter(iNo).sort((h, k) => Number(h) - Number(k)),
    c = await Promise.all(s.map((h) => TY(e, h, n))),
    y = await Ge(e, n);
  if (y === null) return null;
  let a = c.filter((h, k) => h?.id === s[k]);
  return { tasks: a.length === s.length ? a : null, highestId: Math.max(y, Me(r)) };
}
function HBt(e, n) {
  let r = { ...e };
  for (let [s, c] of Object.entries(n))
    if (c === null) delete r[s];
    else r[s] = c;
  return r;
}
async function LBt(e, n, r, s) {
  let [c, y] = await Promise.all([TY(e, n, s), TY(e, r, s)]);
  if (!c || !y) return !1;
  if (!c.blocks.includes(r)) await Zhe(e, n, { blocks: [...c.blocks, r] }, s);
  if (!y.blockedBy.includes(n)) await Zhe(e, r, { blockedBy: [...y.blockedBy, n] }, s);
  return !0;
}
async function At(e, n) {
  await zcn(e, n);
  let r = ae(dU(e), ".lock");
  try {
    (await ie().mkdir(dU(e)), await G(r, "", { flag: "wx" }));
  } catch {}
  return r;
}
async function V(e, n) {
  if (J()) return nt(OO(e));
  let r = await At(e, n);
  return vl(r, ke);
}
function tt(e, n) {
  if (J()) return nt(`${OO(e)}/${OO(n)}`);
  let r = D(e, n);
  return vl(`${r}.v5-lock-anchor`, { lockfilePath: `${r}.lock`, realpath: !1, ...ke });
}
function nt(e) {
  return new Promise((n) => {
    Ma().taskList.locks.run(e, () => new Promise((r) => n(async () => r())));
  });
}
async function DVs(e, n, r, s = {}, c) {
  let y = D(e, n);
  if (!(await TY(e, n, c))) return { success: !1, reason: "task_not_found" };
  if (s.checkAgentBusy) return $t(e, n, r, c);
  let h;
  try {
    if (((h = c ? await tt(e, n) : await vl(y, ke)), c)) {
      let v = await xe(c, e, n, (P) => je(P, n, r, void 0));
      if (v !== "needs_open_blockers") return v ?? { success: !1, reason: "task_not_found" };
      let N = await jL(e, c),
        be = new Set(N.filter((P) => P.status !== "completed").map((P) => P.id)),
        Q = await xe(c, e, n, (P) => je(P, n, r, be));
      return Q === void 0 || Q === "needs_open_blockers"
        ? { success: !1, reason: "task_not_found" }
        : Q;
    }
    let k = await TY(e, n, c);
    if (!k) return { success: !1, reason: "task_not_found" };
    if (k.owner && k.owner !== r) return { success: !1, reason: "already_claimed", task: k };
    if (k.status === "completed") return { success: !1, reason: "already_resolved", task: k };
    let b = await jL(e, c),
      w = new Set(b.filter((v) => v.status !== "completed").map((v) => v.id)),
      x = k.blockedBy.filter((v) => w.has(v));
    if (x.length > 0) return { success: !1, reason: "blocked", task: k, blockedByTasks: x };
    return { success: !0, task: await Je(e, n, { owner: r }, c) };
  } catch (k) {
    return (
      t(`[Tasks] Failed to claim task ${n}: ${d(k)}`),
      l(k),
      { success: !1, reason: "task_not_found" }
    );
  } finally {
    await zg(h, "[Tasks] claimTask");
  }
}
function je(e, n, r, s) {
  if (!e) return { result: { success: !1, reason: "task_not_found" } };
  if (e.owner && e.owner !== r)
    return { result: { success: !1, reason: "already_claimed", task: e } };
  if (e.status === "completed")
    return { result: { success: !1, reason: "already_resolved", task: e } };
  if (e.blockedBy.length > 0) {
    if (!s) return { result: "needs_open_blockers" };
    let y = e.blockedBy.filter((a) => s.has(a));
    if (y.length > 0)
      return { result: { success: !1, reason: "blocked", task: e, blockedByTasks: y } };
  }
  let c = Ve(e, { owner: r }, n);
  return { write: c, result: { success: !0, task: c } };
}
async function $t(e, n, r, s) {
  let c;
  try {
    c = await V(e, s);
    let y = await jL(e, s),
      a = y.find((x) => x.id === n);
    if (!a) return { success: !1, reason: "task_not_found" };
    if (a.owner && a.owner !== r) return { success: !1, reason: "already_claimed", task: a };
    if (a.status === "completed") return { success: !1, reason: "already_resolved", task: a };
    let h = new Set(y.filter((x) => x.status !== "completed").map((x) => x.id)),
      k = a.blockedBy.filter((x) => h.has(x));
    if (k.length > 0) return { success: !1, reason: "blocked", task: a, blockedByTasks: k };
    let b = y.filter((x) => x.status !== "completed" && x.owner === r && x.id !== n);
    if (b.length > 0)
      return { success: !1, reason: "agent_busy", task: a, busyWithTasks: b.map((x) => x.id) };
    return { success: !0, task: await Zhe(e, n, { owner: r }, s) };
  } catch (y) {
    return (
      t(`[Tasks] Failed to claim task ${n} with busy check: ${d(y)}`),
      l(y),
      { success: !1, reason: "task_not_found" }
    );
  } finally {
    await zg(c, "[Tasks] claimTaskWithBusyCheck");
  }
}
async function Qyt(e, n, r, s, c) {
  let a = (await jL(e, c)).filter(
    (b) => b.status !== "completed" && (b.owner === n || b.owner === r)
  );
  for (let b of a) await Zhe(e, b.id, { owner: void 0, status: "pending" }, c);
  if (a.length > 0) t(`[Tasks] Unassigned ${a.length} task(s) from ${r}`);
  let k = `${r} ${s === "terminated" ? "was terminated" : "has shut down"}.`;
  if (a.length > 0) {
    let b = a.map((w) => `#${w.id} "${w.subject}"`).join(", ");
    k += ` ${a.length} task(s) were unassigned: ${b}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: a.map((b) => ({ id: b.id, subject: b.subject })),
    notificationMessage: k
  };
}
var ee = { retries: { retries: 10, minTimeout: 5, maxTimeout: 100 }, onCompromised: (e) => l(e) },
  st = p(() =>
    yt({
      type: o().optional(),
      from: o(),
      text: o(),
      timestamp: o(),
      read: M().optional(),
      color: o().optional(),
      summary: o().optional(),
      from_plugin: o().optional()
    })
  );
function it(e, n) {
  if (e === null || typeof e !== "object" || Array.isArray(e))
    return `entry is ${e === null ? "null" : Array.isArray(e) ? "an array" : typeof e}`;
  return n
    .map((r) => {
      let s = r.path[0],
        c = typeof s === "string" ? s : String(s),
        y = e[c],
        a = y === void 0 ? (c in e ? "undefined" : "missing") : y === null ? "null" : typeof y;
      return `${c}:${r.code}:${a}`;
    })
    .join(", ");
}
var at = 100,
  It = 2048;
function zt(e, n) {
  try {
    let r = _(n);
    return `${e}\x00${r.length}:${r.slice(0, It)}`;
  } catch {
    return `${e}\x00(unserializable)`;
  }
}
function Ot(e, n, r) {
  let s = Ma().mailbox.reportedDroppedEntries;
  if (s.size >= at) return !1;
  let c = zt(e, n);
  if (s.has(c)) return !1;
  s.add(c);
  let y = `[TeammateMailbox] dropped schema-invalid inbox entry (${r})`;
  if (n === null || typeof n !== "object" || Array.isArray(n))
    return (l(new R(y, "TeammateMailbox: dropped inbox entry that is not an object")), !0);
  let a = n.text;
  if (a === void 0) l(new R(y, "TeammateMailbox: dropped inbox entry with missing text"));
  else if (a === null) l(new R(y, "TeammateMailbox: dropped inbox entry with null text"));
  else if (typeof a !== "string")
    l(new R(y, "TeammateMailbox: dropped inbox entry with non-string text"));
  else l(new R(y, "TeammateMailbox: dropped inbox entry failing schema validation"));
  return !0;
}
function Dt(e, n) {
  let r = Ma().mailbox.reportedDroppedEntries;
  if (r.size >= at) return;
  let s = `${e}\x00(not-an-array)`;
  if (r.has(s)) return;
  (r.add(s),
    l(
      new R(
        `[TeammateMailbox] inbox file top level is ${n === null ? "null" : typeof n}, expected an array`,
        "TeammateMailbox: inbox file is not an array"
      )
    ));
}
function Ae(e, n) {
  if (!Array.isArray(e)) return (Dt(n, e), { valid: [], droppedCount: 1 });
  let r = [],
    s = 0;
  for (let c of e) {
    let y = st().safeParse(c);
    if (y.success) r.push(c);
    else {
      s++;
      let a = it(c, y.error.issues);
      if (Ot(n, c, a))
        t(`[TeammateMailbox] dropping schema-invalid inbox entry (${a})`, { level: "warn" });
    }
  }
  return { valid: r, droppedCount: s };
}
async function cRi() {
  await Promise.all(Array.from(Ma().mailbox.pendingPrunes.values()));
}
function Ft(e, n, r) {
  let s = Ma().mailbox.pendingPrunes;
  if (s.has(e)) return;
  let c = ibi(e, n, r).finally(() => {
    s.delete(e);
  });
  s.set(e, c);
}
function le(e, n, r) {
  if (e !== void 0 || !J()) return !1;
  return (
    t(
      `[TeammateMailbox] ${n}: nothing read or written for "${r}": this session has no disk, and the inbox cannot go to a store (tengu_hover_rest is off, no store was handed in, or the agent or team name is not a valid store key)`
    ),
    !0
  );
}
async function ibi(e, n, r) {
  if (z() && n !== void 0 && r !== void 0) {
    try {
      let y = await se(
        n,
        r,
        e,
        (a) =>
          a.droppedCount === 0
            ? { skip: !0, result: 0 }
            : { messages: a.messages, result: a.droppedCount },
        !1
      );
      if (y) t(`[TeammateMailbox] pruned ${y} schema-invalid entr${y === 1 ? "y" : "ies"} at ${e}`);
    } catch (y) {
      t(`[TeammateMailbox] invalid-entry prune skipped: ${y}`);
    }
    return;
  }
  if (J()) return;
  let s = `${e}.lock`,
    c;
  try {
    c = await vl(e, { lockfilePath: s, ...ee });
    let y = await hn().read(e),
      { valid: a, droppedCount: h } = Ae(te(y), e);
    if (h === 0) {
      K(e, a, a);
      return;
    }
    (await hn().atomicWrite(e, _(a, null, 2)),
      K(e, a, a),
      t(`[TeammateMailbox] pruned ${h} schema-invalid entr${h === 1 ? "y" : "ies"} at ${e}`));
  } catch (y) {
    t(`[TeammateMailbox] invalid-entry prune skipped: ${y}`);
  } finally {
    await zg(c, "[TeammateMailbox] pruneInvalidMailboxEntries");
  }
}
function PG(e, n) {
  let r = n || oc() || "default",
    s = OO(r),
    c = OO(e),
    y = Pe(Oit(), s, "inboxes"),
    a = Pe(y, `${c}.json`);
  return (t(`[TeammateMailbox] getInboxPath: agent=${e}, team=${r}, fullPath=${a}`), a);
}
async function Nt(e) {
  let n = e || oc() || "default",
    r = OO(n),
    s = Pe(Oit(), r, "inboxes");
  (await hn().mkdir(s), t(`[TeammateMailbox] Ensured inbox directory: ${s}`));
}
function ne(e, n) {
  let r = OO(n || oc() || "default"),
    s = OO(e);
  return _r(r) && _r(s) ? We.mailbox(r, s) : void 0;
}
function Bt(e, n, r) {
  return J() ? Te(e) : PG(n, r);
}
function Ct(e, n, r) {
  let s;
  try {
    s = te(e);
  } catch {
    return { messages: [], droppedCount: 0, corrupt: !0 };
  }
  let { valid: c, droppedCount: y } = Ae(s, n);
  if (r) {
    for (let a of c) if (a.type === void 0) a.type = "message";
  }
  return { messages: c, droppedCount: y, corrupt: !1 };
}
async function se(e, n, r, s, c = !0) {
  let y,
    a = await e.updateText(
      n,
      (h) => {
        let k = h === void 0 ? { messages: [], droppedCount: 0 } : Ct(h.value, r, c),
          b = s({ messages: k.messages, droppedCount: k.droppedCount, found: h !== void 0 });
        return (
          (y = { read: k.messages, remaining: "skip" in b ? k.messages : b.messages }),
          "skip" in b
            ? { skip: !0, result: b.result }
            : { write: _(b.messages, null, 2), result: b.result }
        );
      },
      { mode: 438 & ~process.umask() }
    );
  if (!a.ok)
    throw (
      t(`[TeammateMailbox] inbox update failed: ${vt(a.error)}`, { level: "error" }),
      Error("teammate inbox storage update failed")
    );
  if (y !== void 0) K(r, y.read, y.remaining);
  return a.value.result;
}
function K(e, n, r) {
  let s = new Set(r),
    c = new Set();
  for (let a of n) if (!s.has(a) && a.msg_id !== void 0) c.add(a.msg_id);
  let y = new Set();
  for (let a of r) if (a.msg_id !== void 0 && !c.has(a.msg_id)) y.add(a.msg_id);
  O().retain(e, y);
}
async function G7e(e, n, r, s) {
  let c = z() && r !== void 0 ? ne(e, n) : void 0;
  if (le(c, "readMailbox", e)) return [];
  let y = PG(e, n);
  t(`[TeammateMailbox] readMailbox: path=${y}`);
  try {
    let a;
    if (z() && r !== void 0 && c !== void 0) {
      let b = await r.readText([c]);
      if (!b.ok)
        throw (
          t(`[TeammateMailbox] readMailbox: inbox read failed: ${vt(b.error)}`),
          Error("teammate inbox storage read failed")
        );
      if (!b.value.items[0].found)
        return (t("[TeammateMailbox] readMailbox: file does not exist"), []);
      a = b.value.items[0].value;
    } else a = await hn().read(y);
    let { valid: h, droppedCount: k } = Ae(te(a), y);
    if (k > 0) Ft(y, r, c);
    for (let b of h) if (b.type === void 0) b.type = "message";
    return (
      t(
        `[TeammateMailbox] readMailbox: read ${h.length} message(s)` +
          (k > 0 ? `, dropped ${k} invalid` : "")
      ),
      h
    );
  } catch (a) {
    if (E(a) === "ENOENT") return (t("[TeammateMailbox] readMailbox: file does not exist"), []);
    if (a instanceof SyntaxError)
      return (t(`[TeammateMailbox] readMailbox: unparseable inbox, treating as empty: ${a}`), []);
    if (s?.throwOnUnknownReadError) throw a;
    return (t(`Failed to read inbox for ${e}: ${a}`), l(a), []);
  }
}
async function z7e(e, n, r) {
  let s = await G7e(e, n, r),
    c = s.filter((y) => !y.read);
  return (
    t(`[TeammateMailbox] readUnreadMessages: ${c.length} unread of ${s.length} total`),
    Ce(c),
    c
  );
}
async function Vv(e, n, r, s) {
  let c = st().safeParse(n);
  if (!c.success) {
    let b = it(n, c.error.issues);
    (t(`[TeammateMailbox] writeToMailbox: refusing schema-invalid message for ${e} (${b})`, {
      level: "warn"
    }),
      l(
        typeof n.text !== "string"
          ? new R(
              `[TeammateMailbox] refused mailbox write (${b})`,
              "TeammateMailbox: refused mailbox write with non-string text"
            )
          : new R(
              `[TeammateMailbox] refused mailbox write (${b})`,
              "TeammateMailbox: refused mailbox write failing schema validation"
            )
      ));
    return;
  }
  let y = z() && s !== void 0 ? ne(e, r) : void 0;
  if (z() && s !== void 0 && y !== void 0) {
    let b = { ...n, ...x8(), type: "message", read: !1 },
      w = Bt(y, e, r);
    try {
      return (
        await se(s, y, w, (x) => (O().record(w, b), { messages: [...x.messages, b], result: !0 })),
        t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`),
        b.msg_id
      );
    } catch (x) {
      (t(`Failed to write to inbox for ${e}: ${x}`, { level: "error" }), l(x));
      return;
    }
  }
  if (J()) {
    t(
      `[TeammateMailbox] writeToMailbox: nothing written for "${e}": this session has no disk, and the message cannot go to a store (tengu_hover_rest is off, no store was handed in, or the recipient's name is empty)`,
      { level: "error" }
    );
    return;
  }
  try {
    await Nt(r);
  } catch (b) {
    t(`[TeammateMailbox] writeToMailbox: failed to ensure inbox dir: ${b}`, { level: "error" });
    return;
  }
  let a = PG(e, r),
    h = `${a}.lock`;
  t(`[TeammateMailbox] writeToMailbox: recipient=${e}, from=${n.from}, path=${a}`);
  try {
    (await hn().writeExclusive(a, "[]"),
      t("[TeammateMailbox] writeToMailbox: created new inbox file"));
  } catch (b) {
    if (E(b) !== "EEXIST") {
      if (
        (t(`[TeammateMailbox] writeToMailbox: failed to create inbox file: ${b}`, {
          level: "error"
        }),
        !Fs(b))
      )
        l(b);
      return;
    }
  }
  let k;
  try {
    k = await vl(a, { lockfilePath: h, ...ee });
    let b = await G7e(e, r),
      w = { ...n, ...x8(), type: "message", read: !1 };
    (b.push(w), O().record(a, w));
    try {
      await hn().atomicWrite(a, _(b, null, 2));
    } catch (x) {
      throw (O().retire(a, w.msg_id === void 0 ? [] : [w.msg_id]), x);
    }
    return (t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), w.msg_id);
  } catch (b) {
    if ((t(`Failed to write to inbox for ${e}: ${b}`, { level: "error" }), !Fs(b))) l(b);
    return;
  } finally {
    await zg(k, `[TeammateMailbox] writeToMailbox(${e})`);
  }
}
function qt(e, n) {
  let r = e.findIndex(
    (c) => !c.read && c.from === n.from && c.timestamp === n.timestamp && c.text === n.text
  );
  return { messages: (r === -1 ? e : e.toSpliced(r, 1)).filter((c) => !c.read), found: r !== -1 };
}
async function kFr(e, n, r, s) {
  let c = z() && s !== void 0 ? ne(e, n) : void 0;
  if (le(c, "markSingleMessageAsRead", e)) return;
  let y = PG(e, n);
  if (
    (t(
      `[TeammateMailbox] markSingleMessageAsRead called: agentName=${e}, teamName=${n}, target=${r.from}@${r.timestamp}, path=${y}`
    ),
    z() && s !== void 0 && c !== void 0)
  ) {
    try {
      let k = await se(s, c, y, (b) => {
        if (!b.found) return { skip: !0, result: "absent" };
        let w = qt(b.messages, r);
        return { messages: w.messages, result: w.found };
      });
      t(
        k === "absent"
          ? `[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${y}`
          : `[TeammateMailbox] markSingleMessageAsRead: dropped target (${k ? "found" : "not found"}) at ${y}`
      );
    } catch (k) {
      (t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${k}`), l(k));
    }
    return;
  }
  let a = `${y}.lock`,
    h;
  try {
    h = await vl(y, { lockfilePath: a, ...ee });
    let k = await G7e(e, n),
      b = [...k],
      w = k.findIndex(
        (S) => !S.read && S.from === r.from && S.timestamp === r.timestamp && S.text === r.text
      );
    if (w !== -1) k.splice(w, 1);
    let x = k.filter((S) => !S.read);
    (await hn().atomicWrite(y, _(x, null, 2)),
      K(y, b, x),
      t(
        `[TeammateMailbox] markSingleMessageAsRead: dropped target (${w === -1 ? "not found" : "found"}); ${x.length} remain at ${y}`
      ));
  } catch (k) {
    if (E(k) === "ENOENT") {
      (O().forget(y), t(`[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${y}`));
      return;
    }
    (t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${k}`), l(k));
  } finally {
    await zg(h, "[TeammateMailbox] markSingleMessageAsRead");
  }
}
var cHe = 5;
function cU(e) {
  return `${e.from}|${e.timestamp}|${e.text}`;
}
async function uHe(e, n, r, s) {
  let c = z() && s !== void 0 ? ne(e, n) : void 0;
  if (le(c, "markMessagesAsRead", e)) return !1;
  let y = PG(e, n);
  if (
    (t(`[TeammateMailbox] markMessagesAsRead called: agentName=${e}, teamName=${n}, path=${y}`),
    z() && s !== void 0 && c !== void 0)
  ) {
    let k = r === void 0 ? null : new Set(r.map(cU));
    try {
      let b = await se(s, c, y, (w) => {
        if (!w.found || w.messages.length === 0) return { skip: !0, result: null };
        let x = w.messages.filter((S) => !S.read && k !== null && !k.has(cU(S)));
        return { messages: x, result: { pruned: w.messages.length - x.length, remain: x.length } };
      });
      return (
        t(
          b
            ? `[TeammateMailbox] markMessagesAsRead: pruned ${b.pruned} delivered message(s), ${b.remain} remain at ${y}`
            : "[TeammateMailbox] markMessagesAsRead: no messages to mark"
        ),
        !0
      );
    } catch (b) {
      return (t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${b}`), l(b), !1);
    }
  }
  let a = `${y}.lock`,
    h;
  try {
    (t("[TeammateMailbox] markMessagesAsRead: acquiring lock..."),
      (h = await vl(y, { lockfilePath: a, ...ee })),
      t("[TeammateMailbox] markMessagesAsRead: lock acquired"));
    let k = await G7e(e, n, void 0, { throwOnUnknownReadError: !0 });
    if (
      (t(`[TeammateMailbox] markMessagesAsRead: read ${k.length} messages after lock`),
      k.length === 0)
    )
      return (K(y, k, k), t("[TeammateMailbox] markMessagesAsRead: no messages to mark"), !0);
    let b = F(k, (S) => !S.read);
    t(`[TeammateMailbox] markMessagesAsRead: ${b} unread of ${k.length} total`);
    let w = r === void 0 ? null : new Set(r.map(cU)),
      x = k.filter((S) => !S.read && w !== null && !w.has(cU(S)));
    return (
      await hn().atomicWrite(y, _(x, null, 2)),
      K(y, k, x),
      t(
        `[TeammateMailbox] markMessagesAsRead: pruned ${k.length - x.length} delivered message(s), ${x.length} remain at ${y}`
      ),
      !0
    );
  } catch (k) {
    if (E(k) === "ENOENT")
      return (
        O().forget(y),
        t(`[TeammateMailbox] markMessagesAsRead: file does not exist at ${y}`),
        !0
      );
    return (t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${k}`), l(k), !1);
  } finally {
    await zg(h, "[TeammateMailbox] markMessagesAsRead");
  }
}
async function N6n(e, n, r) {
  let s = z() && r !== void 0 ? ne(e, n) : void 0;
  if (le(s, "clearMailbox", e)) return;
  let c = PG(e, n);
  if (z() && r !== void 0 && s !== void 0) {
    try {
      if (
        await se(r, s, c, (k) =>
          k.found ? { messages: [], result: !0 } : { skip: !0, result: !1 }
        )
      )
        t(`[TeammateMailbox] Cleared inbox for ${e}`);
    } catch (h) {
      (t(`Failed to clear inbox for ${e}: ${h}`), l(h));
    }
    return;
  }
  let y = `${c}.lock`,
    a;
  try {
    ((a = await vl(c, { lockfilePath: y, ...ee })),
      await hn().atomicWrite(c, "[]"),
      O().forget(c),
      t(`[TeammateMailbox] Cleared inbox for ${e}`));
  } catch (h) {
    if (E(h) === "ENOENT") {
      O().forget(c);
      return;
    }
    (t(`Failed to clear inbox for ${e}: ${h}`), l(h));
  } finally {
    await zg(a, "[TeammateMailbox] clearMailbox");
  }
}
function Kcn(e) {
  let n = XK(e.color) ? ` color="${e.color}"` : "",
    r = Dde(e.summary),
    s = r ? ` summary="${gi(r)}"` : "",
    c = Rh(e.from, ME) || dv,
    y = e.provenance === "forged" ? ' verified="false"' : "",
    a = rkt(e.text);
  if (a !== e.text)
    for (let h = 0; h < 4; h++) {
      let k = rkt(DQ(a, e.from));
      if (k === a) break;
      a = k;
    }
  return `<${S2} teammate_id="${gi(c)}"${n}${s}${y}>
${a}
</${S2}>`;
}
function fze(e, n) {
  let s = cbi(e).map((c) =>
    Kcn(n.recipientIsLead || c.provenance === "forged" ? c : { ...c, text: GBt(c.text, c.from) })
  ).join(`

`);
  return n.recipientIsLead ? zSt(s, { midTurn: !1 }) : s;
}
var eye = p(() =>
    u({
      type: A("idle_notification"),
      from: o(),
      timestamp: o(),
      idleReason: B(["available", "interrupted", "failed"]).optional(),
      summary: o().optional(),
      completedTaskId: o().optional(),
      completedStatus: B(["resolved", "blocked", "failed"]).optional(),
      failureReason: o().optional(),
      result: o().optional()
    })
  ),
  dNo = 200,
  FVs = 200;
function Dde(e) {
  let n = e ? Or(e).trim() : "";
  return tye(n, FVs);
}
function Vcn(e) {
  let n = e ? Or(e).trim() : "";
  return fU(re(n, dNo));
}
var K7e = 40000;
function YK(e, n) {
  if (!e) return "";
  let r = fU(e),
    s = re(r, n);
  if (s.length >= r.length) return r;
  return `${fU(s)}
[truncated for display]`;
}
var AY = 4000,
  UVs = 16000;
function abi(e, n = !0) {
  let r = e ? pt(e) : "";
  if (!r) return "";
  let s = re(r, AY);
  if (s.length >= r.length) return s;
  let c = fU(s);
  return n
    ? `${c}
[result truncated \u2014 ask the agent for the rest via ${Mn}]`
    : `${c}
[result truncated]`;
}
var ut = 200,
  uU = FVs * 2 + 16,
  ME = 256,
  ue = 256,
  $e = 4,
  NBt = AY + ut + uU + dNo + 3 * ME + 1024;
function de(e, n) {
  if (typeof e === "string") return tye(e, ue);
  if (e === null || typeof e !== "object") return e;
  if (n <= 0) return null;
  if (Array.isArray(e)) return e.map((s) => de(s, n - 1));
  let r = [];
  for (let [s, c] of Object.entries(e)) r.push([tye(s, ue), de(c, n - 1)]);
  return Object.fromEntries(r);
}
function $6n(e, n) {
  let r = fU(e);
  if (re(r, AY + ut).length >= r.length) return r;
  let c = fU(re(r, AY));
  return n
    ? `${c}
[result truncated \u2014 ask the agent for the rest via ${Mn}]`
    : `${c}
[result truncated]`;
}
var dt = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/,
  cNo = "[invalid timestamp]",
  F6n = "[invalid id]",
  qcn = "[display sanitized; the agent reads the raw frame]",
  dv = "[unknown sender]",
  jt = /^perm-[0-9]{1,20}-[0-9a-z]{1,12}$/,
  Lt = /^(?:shutdown|plan_approval)-[0-9]{1,20}@[^@\n]{1,300}(?:@[^@\n]{1,300})?$/u,
  Ut = 320;
function Kt(e) {
  return !e.includes(`
`) &&
    !e.includes("\r") &&
    fU(e) === e &&
    [...e].length <= Ut &&
    (jt.test(e) || Lt.test(e))
    ? e
    : F6n;
}
var Wt =
  /^(%[0-9]{1,10}|[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12})$/;
function Ht(e) {
  return Wt.test(e) ? e : F6n;
}
var Qt = { tmux: !0, iterm2: !0, "in-process": !0 };
function Gt(e) {
  return Object.hasOwn(Qt, e) ? e : F6n;
}
function lt(e, n, r) {
  let s =
      typeof n.result === "string" && n.result
        ? $6n(n.result, n.idleReason !== "failed")
        : n.result,
    c = typeof n.summary === "string" && n.summary ? tye(n.summary, uU) : n.summary,
    y =
      typeof n.failureReason === "string" && n.failureReason
        ? Vcn(n.failureReason)
        : n.failureReason,
    a = typeof n.from === "string" && n.from ? Rh(n.from, ME) : n.from,
    h = typeof r === "string" ? Rh(r, ME) || dv : void 0,
    k = h !== void 0 && typeof a === "string" && a !== h ? h : a,
    b = typeof n.timestamp === "string" && dt.test(n.timestamp) ? n.timestamp : cNo,
    w =
      typeof n.completedTaskId === "string" && n.completedTaskId
        ? Rh(n.completedTaskId, ME)
        : n.completedTaskId,
    x = te(e),
    S = x !== null && typeof x === "object" && !Array.isArray(x) ? x : { ...n },
    v = new Set(Object.keys(eye().shape)),
    N = [];
  for (let [I, C] of Object.entries(S)) {
    if (v.has(I)) {
      N.push([I, C]);
      continue;
    }
    let ce = tye(I, ue);
    if (v.has(ce)) continue;
    N.push([ce, de(C, $e)]);
  }
  let be = Object.fromEntries(N),
    Q = { result: s, summary: c, failureReason: y, from: k, timestamp: b, completedTaskId: w },
    P = { ...n, ...Q },
    W = _({ ...be, ...Q });
  if (W.length > NBt) W = _(P);
  let Ie = !1;
  while (W.length > NBt) {
    let I,
      C = 0;
    for (let ze of ["result", "summary", "failureReason"]) {
      let fe = P[ze];
      if (typeof fe === "string" && fe) {
        let Oe = _(fe).length;
        if (Oe > C) ((I = { key: ze, value: fe }), (C = Oe));
      }
    }
    if (!I) break;
    let ce = [...I.value].length;
    ((Ie ||= I.key === "result"),
      (P = { ...P, [I.key]: fU(re(I.value, Math.floor(ce / 2))) }),
      (W = _(P)));
  }
  if (Ie && P.result) {
    let I = {
        ...P,
        result: `${P.result}
[result truncated]`
      },
      C = _(I);
    if (C.length <= NBt) ((P = I), (W = C));
  }
  return W === e ? { text: e, idle: n } : { text: W, idle: P };
}
function ct(e, n) {
  let r = fU(e),
    s = re(r, n);
  if (s.length >= r.length) return r;
  return `${fU(s)}
[truncated]`;
}
var Xt = 1024,
  Yt = 2048,
  lbi = new Map([
    [
      "plan_approval_request",
      {
        from: { kind: "envelope-pinned-id" },
        timestamp: { kind: "timestamp" },
        planFilePath: { kind: "id" },
        planContent: { kind: "body", bound: K7e },
        requestId: { kind: "request-id" }
      }
    ],
    [
      "plan_approval_response",
      {
        requestId: { kind: "request-id" },
        approved: { kind: "generic" },
        feedback: { kind: "body", bound: AY },
        timestamp: { kind: "timestamp" },
        permissionMode: { kind: "generic" }
      }
    ],
    [
      "shutdown_request",
      {
        requestId: { kind: "request-id" },
        from: { kind: "envelope-pinned-id" },
        reason: { kind: "body", bound: uU },
        timestamp: { kind: "timestamp" }
      }
    ],
    [
      "shutdown_approved",
      {
        requestId: { kind: "request-id" },
        from: { kind: "envelope-pinned-id" },
        timestamp: { kind: "timestamp" },
        paneId: { kind: "pane-id" },
        backendType: { kind: "backend-type" }
      }
    ],
    [
      "shutdown_rejected",
      {
        requestId: { kind: "request-id" },
        from: { kind: "envelope-pinned-id" },
        reason: { kind: "body", bound: uU },
        timestamp: { kind: "timestamp" }
      }
    ],
    [
      "task_assignment",
      {
        taskId: { kind: "id" },
        subject: { kind: "line" },
        description: { kind: "body", bound: AY },
        assignedBy: { kind: "envelope-pinned-id" },
        timestamp: { kind: "timestamp" }
      }
    ],
    [
      "task_completed",
      {
        from: { kind: "envelope-pinned-id" },
        taskId: { kind: "id" },
        taskSubject: { kind: "line" },
        timestamp: { kind: "timestamp" }
      }
    ],
    ["teammate_terminated", { message: { kind: "body", bound: AY } }],
    [
      "idle_notification",
      {
        from: { kind: "envelope-pinned-id" },
        timestamp: { kind: "timestamp" },
        idleReason: { kind: "generic" },
        summary: { kind: "line" },
        completedTaskId: { kind: "id" },
        completedStatus: { kind: "generic" },
        failureReason: { kind: "body", bound: dNo },
        result: { kind: "body", bound: AY }
      }
    ]
  ]);
function U6n(e, n) {
  if (!ft.test(e)) return null;
  let r;
  try {
    r = te(e);
  } catch {
    return null;
  }
  if (!H(r)) return null;
  let s = r,
    c = s.type,
    y = typeof c === "string" ? lbi.get(c) : void 0;
  if (!y) return null;
  let a = new Set(Object.keys(y)),
    h = [],
    k = 0;
  for (let [w, x] of Object.entries(s)) {
    if (w === "type") {
      h.push([w, c]);
      continue;
    }
    if (a.has(w)) {
      h.push([w, Zt(y[w], x, n)]);
      continue;
    }
    let S = tye(w, ue);
    if (S === "type" || a.has(S)) continue;
    let v = de(x, $e),
      N = _(v).length + S.length;
    if (k + N > Yt) continue;
    ((k += N), h.push([S, v]));
  }
  let b = _(Object.fromEntries(h));
  return b === e ? null : b;
}
function Zt(e, n, r) {
  if (e.kind === "generic") {
    let s = typeof n === "string" ? tye(n, ue) : de(n, $e);
    if (s !== null && typeof s === "object" && _(s).length > Xt) return null;
    return s;
  }
  if (typeof n !== "string")
    switch (e.kind) {
      case "envelope-pinned-id":
        return (typeof r === "string" ? Rh(r, ME) || dv : void 0) ?? F6n;
      case "id":
      case "request-id":
      case "pane-id":
      case "backend-type":
        return F6n;
      case "timestamp":
        return cNo;
      case "line":
      case "body":
        return "";
    }
  switch (e.kind) {
    case "id":
      return Rh(n, ME);
    case "request-id":
      return Kt(n);
    case "pane-id":
      return Ht(n);
    case "backend-type":
      return Gt(n);
    case "envelope-pinned-id": {
      let s = Rh(n, ME),
        c = typeof r === "string" ? Rh(r, ME) || dv : void 0;
      return c !== void 0 && s !== c ? c : s;
    }
    case "timestamp":
      return dt.test(n) ? n : cNo;
    case "line":
      return Rh(n, uU);
    case "body":
      return ct(n, e.bound);
  }
}
function dbi(e, n) {
  let r = Date.parse(e.timestamp);
  return Number.isNaN(r) ? Number.NEGATIVE_INFINITY : Math.min(r, n);
}
function cbi(e) {
  if (Ee.has(e)) return e;
  let n = e.slice(),
    r = [],
    s = Date.now();
  for (let a = 0; a < n.length; a++) {
    let h = FBt(n[a].text);
    if (!h) {
      let w = U6n(n[a].text, n[a].from);
      if (w !== null) n[a] = { ...n[a], text: w };
      continue;
    }
    let k = lt(n[a].text, h, n[a].from);
    if (k.text !== n[a].text) n[a] = { ...n[a], text: k.text };
    let b = k.idle;
    if (typeof b.result === "string" && b.result) r.push({ index: a, recency: dbi(b, s), idle: b });
  }
  r.sort((a, h) => h.recency - a.recency || h.index - a.index);
  let c = UVs,
    y = 0;
  for (let { index: a, idle: h } of r) {
    let k = n[a];
    if (k.text.length <= c) {
      c -= k.text.length;
      continue;
    }
    let b = h.idleReason === "failed" ? "" : `; ask the agent for it via ${Mn}`,
      w = {
        type: "idle_notification",
        from: h.from,
        timestamp: h.timestamp,
        idleReason: h.idleReason,
        summary: h.summary,
        completedTaskId: h.completedTaskId,
        completedStatus: h.completedStatus,
        failureReason: h.failureReason
      },
      x = _({
        ...w,
        result: `[result truncated \u2014 this drain's results exceeded ${UVs} characters${b}]`
      });
    if (x.length > c) x = _({ ...w, result: "[result truncated]" });
    if (x.length >= k.text.length) {
      c = Math.max(0, c - k.text.length);
      continue;
    }
    if (((c = Math.max(0, c - x.length)), x !== k.text)) (y++, (n[a] = { ...k, text: x }));
  }
  if (y > 0 && !rt.has(e)) (rt.add(e), f("swarm_idle_result_delivery", "budget_truncated"));
  if (n.every((a, h) => a === e[h])) return (Ee.add(e), e);
  return (Ee.add(n), n);
}
var rt = new WeakSet(),
  Ee = new WeakSet();
function $Bt(e, n) {
  let r = abi(n?.result, n?.senderReachable ?? n?.idleReason !== "failed") || void 0;
  return {
    type: "idle_notification",
    from: e,
    timestamp: new Date().toISOString(),
    idleReason: n?.idleReason,
    summary: n?.summary ? fU(n.summary) : void 0,
    completedTaskId: n?.completedTaskId,
    completedStatus: n?.completedStatus,
    failureReason: Vcn(n?.failureReason ? fU(n.failureReason) : void 0) || void 0,
    result: r
  };
}
function Zyt(e, n, r) {
  if (e.result === void 0) return;
  if (r === void 0) m("swarm_idle_result_delivery", "mailbox_write_failed");
  else if (n !== void 0 && e.result === pt(n)) g("swarm_idle_result_delivery");
  else f("swarm_idle_result_delivery", "per_frame_truncated");
}
var Jt =
    /[\u0000-\u0008\u000B-\u001F\u007F-\u009F\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u,
  Vt = new RegExp(Jt.source, "gu"),
  Re = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu,
  en = 8,
  tn = 7,
  nn = 16,
  rn = 4;
function sn(e) {
  let n = (e.match(Re) ?? []).length,
    r = [...e].length - n,
    s = Math.max(nn, Math.ceil(r / rn));
  return e
    .split(
      `
`
    )
    .map((c) => {
      let y = (c.match(Re) ?? []).length,
        a = Math.max(en, Math.ceil(([...c].length - y) / tn)),
        h = 0;
      return c.replace(Re, (k) => (h++ < a && s-- > 0 ? k : ""));
    }).join(`
`);
}
function fU(e) {
  return sn(Nb(e).replace(Vt, ""));
}
function tye(e, n) {
  let r = fU(e),
    s = re(r, n);
  return s.length >= r.length ? s : fU(s);
}
function Rh(e, n) {
  return tye(e, n).replace(/\s+/g, " ").trim();
}
var ft = /^\s*\{/;
function DQ(e, n) {
  let r = ft.test(e) ? FBt(e) : null;
  if (r) return lt(e, r, n).text;
  return U6n(e, n) ?? e;
}
function pt(e) {
  return fU(e.trim());
}
function FBt(e) {
  try {
    let n = eye().safeParse(te(e));
    return n.success ? n.data : null;
  } catch {}
  return null;
}
var BVs = p(() => u({ tool_use_id: o(), tool_name: o(), input_digest: o() })),
  ubi = p(() =>
    Gr("subtype", [
      u({
        type: A("permission_response"),
        request_id: o().min(1),
        subtype: A("success"),
        tool_use_id: o().optional(),
        approved_request: BVs().optional(),
        response: u({
          updated_input: me(o(), oe()).optional(),
          permission_updates: T(oe()).optional()
        }).optional()
      }),
      u({
        type: A("permission_response"),
        request_id: o().min(1),
        subtype: A("error"),
        tool_use_id: o().optional(),
        approved_request: BVs().optional(),
        error: o()
      })
    ])
  );
function uNo(e) {
  return {
    type: "permission_request",
    request_id: e.request_id,
    agent_id: e.agent_id,
    tool_name: e.tool_name,
    tool_use_id: e.tool_use_id,
    description: e.description,
    input: e.input,
    permission_suggestions: e.permission_suggestions || []
  };
}
function fNo(e) {
  if (e.subtype === "error")
    return {
      type: "permission_response",
      request_id: e.request_id,
      subtype: "error",
      tool_use_id: e.tool_use_id,
      approved_request: e.approved_request,
      error: e.error || "Permission denied"
    };
  return {
    type: "permission_response",
    request_id: e.request_id,
    subtype: "success",
    tool_use_id: e.tool_use_id,
    approved_request: e.approved_request,
    response: { updated_input: e.updated_input, permission_updates: e.permission_updates }
  };
}
function TFr(e) {
  try {
    let n = te(e);
    if (n && n.type === "permission_request") return n;
  } catch {}
  return null;
}
function UBt(e) {
  let n;
  try {
    n = te(e);
  } catch {
    return null;
  }
  if (n === null || typeof n !== "object" || !("type" in n) || n.type !== "permission_response")
    return null;
  let r = ubi().safeParse(n);
  if (r.success) return r.data;
  return (
    t(
      `[TeammateMailbox] Dropping malformed permission_response frame: ${r.error.issues.map((s) => `${s.path.join(".")}: ${s.message}`).join("; ")}`,
      { level: "warn" }
    ),
    null
  );
}
function pNo(e) {
  return {
    type: "sandbox_permission_request",
    requestId: e.requestId,
    workerId: e.workerId,
    workerName: e.workerName,
    workerColor: e.workerColor,
    hostPattern: { host: e.host },
    createdAt: Date.now()
  };
}
function mNo(e) {
  return {
    type: "sandbox_permission_response",
    requestId: e.requestId,
    host: e.host,
    allow: e.allow,
    timestamp: new Date().toISOString()
  };
}
function AFr(e) {
  try {
    let n = te(e);
    if (n && n.type === "sandbox_permission_request") return n;
  } catch {}
  return null;
}
function CFr(e) {
  try {
    let n = te(e);
    if (n && n.type === "sandbox_permission_response") return n;
  } catch {}
  return null;
}
var RFr = p(() =>
    u({
      type: A("plan_approval_request"),
      from: o(),
      timestamp: o(),
      planFilePath: o(),
      planContent: o(),
      requestId: o()
    })
  ),
  xFr = p(() =>
    u({
      type: A("plan_approval_response"),
      requestId: o(),
      approved: M(),
      feedback: o().optional(),
      timestamp: o(),
      permissionMode: dir().optional()
    })
  ),
  PFr = p(() =>
    u({
      type: A("shutdown_request"),
      requestId: o(),
      from: o(),
      reason: o().optional(),
      timestamp: o()
    })
  ),
  BBt = p(() =>
    u({
      type: A("shutdown_approved"),
      requestId: o(),
      from: o(),
      timestamp: o(),
      paneId: o().optional(),
      backendType: o().optional()
    })
  ),
  gNo = p(() =>
    u({ type: A("shutdown_rejected"), requestId: o(), from: o(), reason: o(), timestamp: o() })
  );
function hNo(e) {
  return {
    type: "shutdown_request",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: new Date().toISOString()
  };
}
function yNo(e) {
  return {
    type: "shutdown_approved",
    requestId: e.requestId,
    from: e.from,
    timestamp: new Date().toISOString(),
    paneId: e.paneId,
    backendType: e.backendType
  };
}
function _No(e) {
  return {
    type: "shutdown_rejected",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: new Date().toISOString()
  };
}
function e_t(e) {
  try {
    let n = PFr().safeParse(te(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
function B6n(e) {
  try {
    let n = RFr().safeParse(te(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
function fHe(e) {
  try {
    let n = BBt().safeParse(te(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
var fbi = !0;
function Ycn(e, n) {
  if (!e) return fbi ? "unbound" : "mismatch";
  if (e.answered) return "already_answered";
  return e.requestId === n.requestId ? "bound" : "mismatch";
}
function Xcn(e) {
  return {
    type: "plan_approval_response",
    requestId: e.requestId,
    approved: !1,
    feedback:
      "The team lead's verdict was for a different request, not this plan. Call ExitPlanMode again to resubmit it for approval.",
    timestamp: e.timestamp
  };
}
function Jcn(e) {
  try {
    let n = xFr().safeParse(te(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}
var on = p(() =>
  u({
    type: A("task_assignment"),
    taskId: o(),
    subject: o(),
    description: o(),
    assignedBy: o(),
    timestamp: o()
  })
);
function bNo(e) {
  return MO(on(), e);
}
var jBt = p(() =>
    u({
      type: A("task_completed"),
      from: o().optional(),
      taskId: o(),
      taskSubject: o().optional(),
      timestamp: o().optional()
    })
  ),
  IFr = p(() => u({ type: A("teammate_terminated"), message: o() }));
function MO(e, n) {
  try {
    let r = e.strict().safeParse(te(n));
    if (r.success) return r.data;
  } catch {}
  return null;
}
function WBt(e) {
  return e.filter((n) => {
    let r = n;
    if (!H(r)) return !1;
    if (r.provenance === "forged") return !0;
    if (r.summary !== void 0 && typeof r.summary !== "string") return !0;
    if (Dde(r.summary)) return !0;
    if (typeof r.text !== "string") return !0;
    return !MO(BBt(), r.text);
  });
}
function SNo(e) {
  try {
    let n = te(e);
    return !!n && n.type === "team_permission_update";
  } catch {
    return !1;
  }
}
function Qcn(e) {
  try {
    let n = te(e);
    return !!n && n.type === "mode_set_request";
  } catch {
    return !1;
  }
}
var wNo =
  "Teammate prompt must not be a mailbox protocol frame (permission/mode/plan/shutdown JSON) \u2014 pass plain-text instructions";
function i$(e) {
  try {
    let n = te(e);
    if (!n || typeof n !== "object" || !("type" in n)) return !1;
    let r = n.type;
    return (
      r === "permission_request" ||
      r === "permission_response" ||
      r === "sandbox_permission_request" ||
      r === "sandbox_permission_response" ||
      r === "shutdown_request" ||
      r === "shutdown_response" ||
      r === "shutdown_approved" ||
      r === "team_permission_update" ||
      r === "mode_set_request" ||
      r === "plan_approval_request" ||
      r === "plan_approval_response"
    );
  } catch {
    return !1;
  }
}
function Zcn(e) {
  let n = e.feedback ? ct(e.feedback, AY) : "";
  if (e.approved)
    return n ? `[Plan Approved] ${n}` : "[Plan Approved] You can now proceed with implementation";
  return `[Plan Rejected] ${n || "Please revise your plan"}`;
}
var an = /^shutdown-[0-9]{1,20}@[\w.-]{1,64}$/,
  un = "<requestId of the shutdown request>";
function pbi(e) {
  let n = an.test(e),
    r = _({ to: Ya, message: { type: "shutdown_response", request_id: n ? e : un, approve: !0 } });
  return `To approve it, call ${Mn} with exactly this input, where "message" is a JSON object rather than a string${n ? "" : " and request_id is the request's requestId value, copied verbatim"}: ${r}. Approving ends your process; a plain-text acknowledgment does not shut you down. To decline, for example because you're mid-task, send the same input with "approve": false and a "reason".`;
}
function GBt(e, n) {
  if (n !== Ya || !e.includes('"shutdown_request"')) return e;
  let r = e_t(e);
  return r
    ? `${e}

This is a shutdown request. ${pbi(r.requestId)}`
    : e;
}
function vNo(e) {
  return !i$(e) || fHe(e) !== null || e_t(e) !== null || B6n(e) !== null;
}
async function eun(e, n, r, s) {
  let c = z() && s !== void 0 ? ne(e, r) : void 0;
  if (le(c, "markMessagesAsReadByPredicate", e)) return !1;
  let y = PG(e, r);
  if (z() && s !== void 0 && c !== void 0)
    try {
      return (
        await se(s, c, y, (k) =>
          !k.found || k.messages.length === 0
            ? { skip: !0, result: void 0 }
            : { messages: k.messages.filter((b) => !b.read && !n(b)), result: void 0 }
        ),
        !0
      );
    } catch (k) {
      return (l(k), !1);
    }
  let a = `${y}.lock`,
    h;
  try {
    h = await vl(y, { lockfilePath: a, ...ee });
    let k = await G7e(e, r, void 0, { throwOnUnknownReadError: !0 });
    if (k.length === 0) return (K(y, k, k), !0);
    let b = k.filter((w) => !w.read && !n(w));
    return (await hn().atomicWrite(y, _(b, null, 2)), K(y, k, b), !0);
  } catch (k) {
    if (E(k) === "ENOENT") return (O().forget(y), !0);
    return (l(k), !1);
  } finally {
    await zg(h, "[TeammateMailbox] markMessagesAsReadByPredicate");
  }
}
function j6n(e) {
  return (
    e.type === "user" &&
    e.isMeta !== !0 &&
    e.turnCompanion !== !0 &&
    (typeof e.message.content === "string" ||
      !e.message.content.some((n) => n.type === "tool_result"))
  );
}
function ENo(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (!r) continue;
    if (j6n(r)) break;
    if (r.type !== "assistant") continue;
    for (let s of r.message.content)
      if (
        s.type === "tool_use" &&
        s.name === Mn &&
        typeof s.input === "object" &&
        s.input !== null &&
        "to" in s.input &&
        typeof s.input.to === "string" &&
        s.input.to !== "*" &&
        s.input.to !== Ya &&
        s.input.to !== sy
      ) {
        let c = "message" in s.input ? s.input.message : void 0,
          y =
            "summary" in s.input && typeof s.input.summary === "string" ? s.input.summary : void 0,
          a = EFr(s.input);
        if (a !== void 0)
          return `[to ${Dde(s.input.to)}] ${Dde(a.summary.length > 0 ? a.summary : a.message.trim())}`;
        if (typeof c === "string")
          return `[to ${Dde(s.input.to)}] ${Dde(y !== void 0 ? y : re(c, 80))}`;
      }
  }
  return;
}
export {
  RVs,
  xVs,
  VTe,
  oNo,
  IO,
  PVs,
  Nk,
  OO,
  dU,
  IVs,
  zcn,
  vFr,
  OVs,
  sNo,
  MVs,
  H6n,
  TY,
  Zhe,
  DBt,
  jL,
  iNo,
  aNo,
  HBt,
  LBt,
  DVs,
  Qyt,
  EFr,
  L6n,
  HVs,
  LVs,
  NVs,
  $Vs,
  lNo,
  qTe,
  cRi,
  ibi,
  PG,
  G7e,
  z7e,
  Vv,
  kFr,
  cHe,
  cU,
  uHe,
  N6n,
  Kcn,
  fze,
  eye,
  dNo,
  FVs,
  Dde,
  Vcn,
  K7e,
  YK,
  AY,
  UVs,
  abi,
  uU,
  ME,
  NBt,
  $6n,
  cNo,
  F6n,
  qcn,
  dv,
  lbi,
  U6n,
  dbi,
  cbi,
  $Bt,
  Zyt,
  fU,
  tye,
  Rh,
  DQ,
  FBt,
  BVs,
  ubi,
  uNo,
  fNo,
  TFr,
  UBt,
  pNo,
  mNo,
  AFr,
  CFr,
  RFr,
  xFr,
  PFr,
  BBt,
  gNo,
  hNo,
  yNo,
  _No,
  e_t,
  B6n,
  fHe,
  fbi,
  Ycn,
  Xcn,
  Jcn,
  bNo,
  jBt,
  IFr,
  MO,
  WBt,
  SNo,
  Qcn,
  wNo,
  i$,
  Zcn,
  pbi,
  GBt,
  vNo,
  eun,
  j6n,
  ENo
};

//# sourceMappingURL=chunk-bydv9c9r.js.map
