// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { L, q, Eu } from "./chunk-wrtp8qz8.js";
import { f } from "./chunk-brszmkb3.js";
import { _ } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { ar } from "./chunk-r1dvrqha.js";
import { p } from "./chunk-qmkm2x59.js";
import { rc, mH } from "./chunk-ajtyjx88.js";
import { Ir, Ii } from "./chunk-5rw2zfa0.js";
import { Vue, vb, ese } from "./chunk-bh50mq9d.js";
import { lbe } from "./chunk-tv3shk24.js";
import {
  xd,
  Jp,
  K3,
  Yge,
  jke,
  BKn,
  wJe,
  Sxo,
  Ru,
  KKn,
  Lxo,
  nx,
  rPo,
  oPo
} from "./chunk-j0tbz6ra.js";
import { bf } from "./chunk-zjm5ncxc.js";
import { Z, aj } from "./chunk-p27rr8yn.js";
import { o, v, oe, T, u, me, B, A } from "./chunk-0bqrj5ah.js";
import { basename as J } from "path";
var it = { published: "published", comment: "comment" },
  W = 64,
  x = 16,
  st = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
  at = "",
  dt = p(() => {
    let e = u({ v: A(1), rows: me(o(), oe()) }),
      t = u({ v: v().gt(1) }),
      n = u({ stopped: me(o(), oe()) }),
      s = B(it),
      r = o().refine((g) => Kt(g) !== null),
      d = u({
        orphans: T(oe()).transform((g) =>
          g.slice(0, x).flatMap((m) => {
            let c = r.safeParse(m);
            return c.success ? [c.data] : [];
          })
        )
      }),
      a = u({
        trigger_id: r,
        since: o().regex(st),
        events: T(o())
          .max(16)
          .transform((g) =>
            L(g).flatMap((m) => {
              let c = s.safeParse(m);
              return c.success ? [c.data] : [];
            })
          )
          .refine((g) => g.length > 0),
        unreleased: T(oe())
          .catch([])
          .transform((g) =>
            g.slice(0, x).flatMap((m) => {
              let c = r.safeParse(m);
              return c.success ? [c.data] : [];
            })
          )
      }),
      l = u({ at_ms: v().refine(Number.isFinite) });
    return {
      rowsEnvelope: e,
      newerEnvelope: t,
      stopsEnvelope: n,
      orphansEnvelope: d,
      row: a,
      stop: l
    };
  });
function zws(e) {
  Z().durable.registrySink = e;
}
function Kws() {
  Z().durable.registryPublished = at;
}
function AIe() {
  if (!i.CLAUDE_CODE_REMOTE) return;
  let e = Z(),
    { durable: t } = e;
  if (t.registrySink === null) return;
  let n = {},
    s = [],
    r = new Set();
  for (let c of t.pendingRestoredRows.values()) {
    let h = t.rows.get(c.slug);
    if (h === void 0 && !t.unwatchedSlugs.has(c.slug)) {
      s.push(c);
      continue;
    }
    for (let S of [c.triggerId, ...(c.unreleased ?? [])]) if (S !== h?.triggerId) r.add(S);
  }
  for (let c of [...t.rows.values(), ...s].slice(0, W))
    n[c.slug] = {
      trigger_id: c.triggerId,
      since: c.since,
      events: [...c.events],
      ...(c.unreleased !== void 0 && c.unreleased.length > 0 && { unreleased: [...c.unreleased] })
    };
  let d = {},
    a = [...e.commentMonitorIntent.bySlug.entries()]
      .filter(([, c]) => c.state === "stopped")
      .sort(([, c], [, h]) => h.writtenAtMs - c.writtenAtMs)
      .slice(0, W);
  for (let [c, h] of a) d[c] = { at_ms: h.writtenAtMs };
  let l = L([...t.orphanTriggers, ...r]).slice(0, x),
    g =
      t.rows.size + s.length === 0 && a.length === 0 && l.length === 0
        ? null
        : { v: 1, rows: n, stopped: d, ...(l.length > 0 && { orphans: l }) },
    m = _(g);
  if (m === t.registryPublished) return;
  ((t.registryPublished = m), t.registrySink({ artifact_durable_watches: g }));
}
function Vws(e) {
  if (e === void 0 || e === null) return null;
  let t = dt(),
    n = 0,
    s = [],
    r = t.rowsEnvelope.safeParse(e);
  if (r.success)
    for (let [m, c] of U(r.data.rows)) {
      let h = t.row.safeParse(c);
      if (!ar.test(m) || !h.success) {
        n++;
        continue;
      }
      s.push({
        slug: m,
        triggerId: h.data.trigger_id,
        since: h.data.since,
        events: h.data.events,
        ...(h.data.unreleased.length > 0 && { unreleased: h.data.unreleased })
      });
    }
  let d = new Map(),
    a = t.stopsEnvelope.safeParse(e);
  if (a.success)
    for (let [m, c] of U(a.data.stopped)) {
      if (!ar.test(m)) {
        n++;
        continue;
      }
      let h = t.stop.safeParse(c);
      if ((d.set(m, h.success ? h.data.at_ms : Date.now()), !h.success)) n++;
    }
  if (!r.success || !a.success)
    f(
      "artifact_durable_subscribe",
      a.success && t.newerEnvelope.safeParse(e).success
        ? "registry_newer_version"
        : "registry_invalid"
    );
  else if (n > 0) f("artifact_durable_subscribe", "registry_entry_invalid");
  let l = t.orphansEnvelope.safeParse(e),
    g = l.success ? l.data.orphans : [];
  return { rows: s, stopped: d, orphans: g };
}
function U(e) {
  return Object.keys(e)
    .slice(0, W)
    .map((n) => [n, e[n]]);
}
function ome(e) {
  let { live: t } = Z(),
    n = t.supervisors.get(e);
  return (
    (n !== void 0 && !n.stopped && n.autoReactWiring !== void 0) || t.inFlightWiredIntent.has(e)
  );
}
var C = "\x00unwritten",
  H = 256,
  K = 32,
  D = 64,
  ct = p(() => {
    let e = v().refine(Number.isFinite),
      t = u({
        state: B(["armed", "stopped"]),
        writtenAtMs: e,
        title: o().min(1).max(H).optional(),
        holder: o()
          .optional()
          .transform((s) => (s === void 0 ? void 0 : "bg")),
        holderPid: v()
          .int()
          .positive()
          .optional()
          .catch(void 0),
        holderProcStart: o()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        holderProcStartFt: o()
          .min(1)
          .max(64)
          .optional()
          .catch(void 0),
        holderJob: o()
          .regex(/^[0-9a-f]{8}$/)
          .optional()
          .catch(void 0),
        holderPidSpace: o()
          .min(1)
          .max(160)
          .optional()
          .catch(void 0)
      }),
      n = u({
        type: A("artifact-comment-monitor"),
        v: A(1),
        sessionId: o(),
        artifacts: me(o(), oe()),
        crossLineMerged: A(!0)
          .optional()
          .catch(void 0),
        tailTorn: A(!0)
          .optional()
          .catch(void 0)
      });
    return { record: t, envelope: n };
  });
function Y(e) {
  if (
    e.holderPid === void 0 ||
    e.holderJob === void 0 ||
    e.holderPidSpace === void 0 ||
    (e.holderProcStart === void 0 && e.holderProcStartFt === void 0)
  )
    return {};
  return {
    holderPid: e.holderPid,
    holderJob: e.holderJob,
    ...(e.holderProcStart !== void 0 && { holderProcStart: e.holderProcStart }),
    ...(e.holderProcStartFt !== void 0 && { holderProcStartFt: e.holderProcStartFt }),
    holderPidSpace: e.holderPidSpace
  };
}
function Q() {
  let e = Vue.token;
  if (e === void 0) return (vb(), {});
  let t = mH();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(J(t))) return {};
  let { procStart: n, procStartFt: s } = ese(e);
  return Y({
    holderPid: process.pid,
    holderJob: J(t),
    holderProcStart: n,
    holderProcStartFt: s,
    holderPidSpace: lbe().slice(0, 160)
  });
}
function ifo() {
  return vb();
}
function qLn(e, t) {
  let n = ct(),
    s = n.envelope.safeParse(e);
  if (!s.success) return (f("artifact_live_subscribe", "comment_monitor_intent_invalid"), null);
  if (s.data.sessionId !== q())
    return (f("artifact_live_subscribe", "comment_monitor_intent_foreign"), null);
  if (s.data.crossLineMerged === !0) t?.onLossy?.();
  let r = s.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map(),
    a = 0,
    l = 0,
    g = 0;
  for (let [m, c] of Object.entries(s.data.artifacts)) {
    if (l++ >= 2 * D) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(c);
    if (!ar.test(m)) {
      (a++, t?.onLossy?.());
      continue;
    }
    if (!h.success) {
      if ((a++, t?.onLossy?.(), typeof c === "object" && c !== null && c.state === "stopped"))
        d.set(m, { state: "stopped", writtenAtMs: Date.now() });
      continue;
    }
    if (r && h.data.state === "armed" && h.data.holder === void 0) {
      (d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(h.data.title !== void 0 && { title: h.data.title })
      }),
        t?.onTornStop?.(m));
      continue;
    }
    if (h.data.state === "armed" && g++ >= D) {
      t?.onLossy?.();
      continue;
    }
    let { state: S, writtenAtMs: w, title: y, holder: b } = h.data;
    d.set(m, {
      state: S,
      writtenAtMs: w,
      ...(y !== void 0 && { title: y }),
      ...(b !== void 0 && { holder: b, ...(r ? {} : Y(h.data)) })
    });
  }
  if (a > 0) f("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function EQt(e) {
  let t = k(e.storageV5),
    n = new Map([...(t.pendingRestore ?? []), ...t.bySlug]);
  t.pendingRestore = null;
  let { excludeSlug: s } = e;
  if (s !== void 0) n.delete(s);
  return (M(), n);
}
function YLn() {
  return Z().commentMonitorIntent.tornStops;
}
function afo() {
  return Z().commentMonitorIntent.storageV5;
}
function tJ(e) {
  k(e?.storageV5);
}
function qws(e, t) {
  if (e === void 0 && !aj()) return;
  let n = Z().commentMonitorIntent;
  ((n.earlySeed = e), (n.adoptPendingFor = q()), k(t?.storageV5));
}
function Yws(e, t) {
  let n = k(t?.storageV5);
  if (Z().durable.stopLatches.isStopped(e)) return;
  let s = t?.title,
    r = s !== void 0 && s.length >= 1 && s.length <= H,
    d = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let a = Date.now(),
    l = rc() ? { holder: "bg", ...Q() } : void 0;
  if (
    (n.bySlug.set(e, {
      state: "armed",
      writtenAtMs: a,
      ...(r ? { title: s } : d !== void 0 && { title: d }),
      ...l
    }),
    et(n, e),
    M(),
    l !== void 0 && l.holderPid === void 0)
  )
    lt(e, a);
}
function lt(e, t) {
  vb()
    .then(() => {
      if (!aj() || !rc()) return;
      let n = Z().commentMonitorIntent,
        s = n.bySlug.get(e);
      if (
        n.sid !== q() ||
        s?.state !== "armed" ||
        s.holder !== "bg" ||
        s.holderPid !== void 0 ||
        s.writtenAtMs !== t
      )
        return;
      let r = Q();
      if (r.holderPid === void 0) return;
      (n.bySlug.set(e, { ...s, ...r }), M());
    })
    .catch(() => {
      return;
    });
}
function Uct(e, t) {
  let n = k(t?.storageV5),
    s = n.bySlug.get(e);
  (n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...(s?.title !== void 0 && { title: s.title })
  }),
    M({ durableNow: !0 }));
  for (let [r, d] of n.parked) {
    let a = d.line[e];
    if (a?.state === "armed")
      ((d.line[e] = {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...(a.title !== void 0 && { title: a.title })
      }),
        R(r, d.path, d.line, { durableNow: !0 }));
  }
}
function Xws(e, t) {
  return k(t?.storageV5).bySlug.get(e)?.state;
}
function M3e(e, t) {
  let n = k(t?.storageV5),
    s = !1,
    r = new Set(typeof e === "string" ? [e] : e),
    d = Date.now();
  for (let a of r) {
    if (((s = n.bySlug.delete(a) || s), n.forgottenAt.delete(a), n.forgottenAt.size >= mt)) {
      let l = n.forgottenAt.keys().next().value;
      if (l !== void 0) n.forgottenAt.delete(l);
    }
    n.forgottenAt.set(a, d);
  }
  if (s) M({ durableNow: !0 });
  for (let [a, l] of n.parked) {
    let g = !1;
    for (let m of r)
      if (l.traveling?.has(m) && l.line[m]?.state === "armed")
        (delete l.line[m], l.traveling.delete(m), (g = !0));
    if (g) {
      if (
        (R(a, l.path, l.line, { durableNow: !0 }),
        !Object.values(l.line).some((m) => m.state === "armed"))
      )
        n.parked.delete(a);
    }
  }
}
function XLn(e, t) {
  let n = k(t?.storageV5),
    { stopLatches: s } = Z().durable;
  for (let [r, d] of e) {
    if (s.wasClearedByRewatch(r)) continue;
    let a = n.bySlug.get(r);
    if (a === void 0 || a.state === "armed" || a.writtenAtMs <= d)
      n.bySlug.set(r, {
        state: "stopped",
        writtenAtMs: d,
        ...(a?.title !== void 0 && { title: a.title })
      });
    s.reaffirmStop(r);
  }
  M();
}
function Jws(e) {
  let t = k(e?.storageV5),
    { yieldedSlugs: n } = Z().wakes,
    s = Date.now(),
    r = !1;
  for (let [d, a] of t.bySlug)
    if (a.state === "armed" && !n.has(d))
      (t.bySlug.set(d, {
        state: "stopped",
        writtenAtMs: s,
        ...(a.title !== void 0 && { title: a.title })
      }),
        (r = !0));
  if (r) M({ durableNow: !0 });
  for (let [d, a] of t.parked) {
    let l = !1;
    for (let [g, m] of Object.entries(a.line))
      if (m.state === "armed")
        ((a.line[g] = {
          state: "stopped",
          writtenAtMs: s,
          ...(m.title !== void 0 && { title: m.title })
        }),
          (l = !0));
    if (l) R(d, a.path, a.line, { durableNow: !0 });
  }
}
function ut(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "fork":
    case "remote_attach":
      return !0;
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return !1;
  }
}
function ft() {
  let e = Z().commentMonitorIntent,
    t = e.sid;
  if (t === null || t === q()) {
    e.leftWith = null;
    return;
  }
  let n = new Set();
  for (let [s, r] of e.bySlug) if (r.state === "armed" && ome(s)) n.add(s);
  e.leftWith = {
    sid: t,
    traveling: n,
    unwritten: !e.onFile && !wJe(t) && e.adoptPendingFor !== t,
    inWindow: e.adoptPendingFor === t
  };
}
function P() {
  let e = Z().commentMonitorIntent;
  if (!wJe(q())) return;
  for (let [t, n] of e.parked) {
    if (n.traveling === void 0 || t === q()) continue;
    let s = !1;
    for (let r of n.traveling) if (n.line[r]?.state === "armed") (delete n.line[r], (s = !0));
    if (((n.traveling = void 0), s)) R(t, n.path, n.line);
    if (!Object.values(n.line).some((r) => r.state === "armed")) e.parked.delete(t);
  }
}
function O(e, t) {
  if (wJe(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1;
  }
  return e.adoptPendingFor === t || xd() !== null;
}
function X(e, t, n, s, r) {
  if (t === null) return;
  let d = Z().commentMonitorIntent,
    a = { path: t, line: tt(e, n) };
  (d.pendingLines.set(e, a),
    BKn(N),
    (d.writeChain = d.writeChain.then(async () => {
      if ((await Ru().catch(() => {}), d.pendingLines.get(e) !== a)) return;
      if (d.exitStamped) return;
      if ((d.pendingLines.delete(e), !s && K3() === r)) return;
      if (e === d.sid) {
        ((d.lastWritten = C), M());
        return;
      }
      R(e, t, n);
    })),
    (d.writeChain = d.writeChain.catch(() => {})));
}
var mt = 1024;
function tt(e, t) {
  let n = Z().commentMonitorIntent,
    s = n.parked.get(e);
  if (s?.unwritten === !0) {
    let { traveling: r } = s;
    return r === void 0 ? t : Ii(t, (d, a) => d.state === "armed" && r.has(a));
  }
  if (s?.leftInWindow === !0)
    return V(n, { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: t }).artifacts;
  return t;
}
function R(e, t, n, s) {
  if (t === null) return;
  let r = Z().commentMonitorIntent,
    { storageV5: d } = r,
    a = tt(e, { ...n }),
    l = { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: a };
  r.owedLines.delete(e);
  let g = { path: t, line: a };
  if ((r.pendingLines.set(e, g), BKn(N), s?.durableNow === !0)) KKn(l, t, I(l));
  r.writeChain = r.writeChain
    .then(async () => {
      if ((await Ru().catch(() => {}), r.exitStamped)) return;
      if (e === r.sid) {
        if (r.pendingLines.get(e) === g) r.pendingLines.delete(e);
        ((r.lastWritten = C), M());
        return;
      }
      if (
        (await nx(t, l, d, { onlyIfExists: !0, tornTailEntry: I(l) }), r.pendingLines.get(e) === g)
      )
        r.pendingLines.delete(e);
    })
    .catch(() => {
      if (r.pendingLines.get(e) !== g) {
        f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
        return;
      }
      if ((r.pendingLines.delete(e), r.owedLines.size >= 2 * K)) {
        let m = r.owedLines.keys().next().value;
        if (m !== void 0) r.owedLines.delete(m);
      }
      (r.owedLines.set(e, { path: t, line: a }),
        f("artifact_live_subscribe", "comment_monitor_intent_write_failed"));
    });
}
function lfo(e, t) {
  et(k(t?.storageV5), e);
}
function et(e, t) {
  let n = !1;
  for (let [s, r] of e.parked) {
    if (s === q() || r.line[t]?.state !== "armed") continue;
    ((r.traveling ??= new Set()).add(t), (n = !0));
  }
  if (n) P();
}
function G(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let n = !1;
  for (let [s, { path: r, line: d }] of t) {
    if (s === e.sid) {
      ((e.lastWritten = C), (n = !0));
      continue;
    }
    if (e.pendingLines.has(s)) continue;
    let a = e.parked.get(s);
    R(s, a?.path ?? r, a?.line ?? d);
  }
  if (n) M();
}
function k(e) {
  let t = Z().commentMonitorIntent;
  if (e !== void 0) t.storageV5 = e;
  let n = q(),
    s = !1,
    r = !1;
  if (t.sid !== n) {
    let a = t.leftWith !== null && t.leftWith.sid === t.sid ? t.leftWith : null,
      l = (S) => (a !== null ? a.traveling.has(S) : ome(S));
    t.leftWith = null;
    let g = E(t),
      m = new Set(),
      c = 0;
    for (let [S, w] of t.bySlug) {
      if (w.state !== "armed") continue;
      if (l(S)) m.add(S);
      else (t.bySlug.delete(S), c++);
    }
    let { stopLatches: h } = Z().durable;
    for (let [S, w] of Object.entries(t.parked.get(n)?.line ?? {})) {
      let y = t.forgottenAt.get(S);
      if (w.state === "armed" && y !== void 0 && w.writtenAtMs <= y && !ome(S)) {
        r = !0;
        continue;
      }
      let b = F(t.bySlug.get(S), w);
      if (b.state === "armed" && h.isStopped(S))
        b = {
          state: "stopped",
          writtenAtMs: Date.now(),
          ...(b.title !== void 0 && { title: b.title })
        };
      if ((t.bySlug.set(S, b), b.state === "stopped")) h.confirmStop(S);
    }
    t.parked.delete(n);
    for (let S of [t.owedLines.get(n), t.pendingLines.get(n)])
      for (let [w, y] of Object.entries(S?.line ?? {})) {
        if (y.state !== "stopped") continue;
        let b = F(t.bySlug.get(w), y);
        if ((t.bySlug.set(w, b), b.state === "stopped")) h.confirmStop(w);
      }
    if (t.sid !== null && (c > 0 || m.size > 0)) {
      t.parked.set(t.sid, {
        path: t.transcriptPath,
        line: g,
        ...(m.size > 0 && { traveling: m }),
        ...(a?.unwritten === !0 && { unwritten: !0 }),
        ...(a?.inWindow === !0 && { leftInWindow: !0 })
      });
      while (t.parked.size > K) {
        let [S, w] = t.parked.entries().next().value;
        t.parked.delete(S);
        let y = Date.now();
        R(
          S,
          w.path,
          Object.fromEntries(
            Object.entries(w.line).flatMap(([b, z]) =>
              z.state !== "armed"
                ? [[b, z]]
                : w.traveling?.has(b)
                  ? []
                  : [
                      [
                        b,
                        {
                          state: "stopped",
                          writtenAtMs: y,
                          ...(z.title !== void 0 && { title: z.title })
                        }
                      ]
                    ]
            )
          )
        );
      }
    }
    if (t.sid !== null && t.wroteCurrentLine)
      X(t.sid, t.transcriptPath, g, t.lastWritten === C, t.failureSeqAtWrite);
    else if (t.sid !== null && a?.inWindow === !0 && rt(t, g))
      X(t.sid, t.transcriptPath, g, !0, t.failureSeqAtWrite);
    if (
      (P(),
      (s = [...t.bySlug.values()].some((S) => S.state === "armed")),
      (t.sid = n),
      t.adoptPendingFor !== n)
    )
      t.adoptPendingFor = null;
    ((t.lastWritten = r ? C : null),
      (t.wroteCurrentLine = !1),
      (t.pendingRestore = null),
      (t.transcriptPath = null),
      t.tornStops.clear(),
      (t.onFile = !1));
  }
  if (!t.onFile && wJe(n)) t.onFile = !0;
  if (((t.transcriptPath = O(t, n) ? bf() : Jp(n)), t.unsubscribeMaterialized === void 0))
    t.unsubscribeMaterialized = Sxo(() => {
      if (t.sid !== null && wJe(t.sid)) t.onFile = !0;
      P();
    });
  if (t.unsubscribeSwitch === void 0)
    ((t.unregisterExitDrain = jke(() => (G(t), t.writeChain))),
      BKn(N),
      (t.unsubscribeSwitch = Eu((a, l) => {
        if (l === "cd" && t.sid === a) t.transcriptPath = Jp(a);
        if (ut(l)) ft();
        if (l === "clear") queueMicrotask(M);
      })));
  let d = t.earlySeed ?? oPo();
  if (((t.earlySeed = void 0), d !== void 0)) {
    let a = !1,
      l = qLn(d, {
        onLossy: () => {
          a = !0;
        },
        onTornStop: (g) => {
          t.tornStops.add(g);
        }
      });
    if (l !== null) {
      if (d.tailTorn === !0) Lxo(t.transcriptPath ?? void 0);
      let { stopLatches: g } = Z().durable,
        m = new Map();
      for (let [c, h] of l) {
        let S = t.forgottenAt.get(c);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !ome(c)) {
          a = !0;
          continue;
        }
        let w = t.bySlug.get(c);
        if (t.tornStops.has(c) && w?.state === "armed" && ome(c)) {
          (t.tornStops.delete(c), m.set(c, w), (a = !0));
          continue;
        }
        let y = F(w, h);
        if ((t.bySlug.set(c, y), m.set(c, y), y.state === "stopped")) g.confirmStop(c);
      }
      if (((t.pendingRestore = m), !a && t.lastWritten === null))
        ((t.lastWritten = j(Object.fromEntries(l))), (t.failureSeqAtWrite = K3()));
      else if (a && t.lastWritten === null) t.lastWritten = C;
      AIe();
    }
  }
  if ((G(t), s || r)) M();
  return t;
}
function F(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}
function E(e) {
  return Object.fromEntries(
    [...e.bySlug.entries()]
      .sort(
        ([, t], [, n]) =>
          Number(n.state === "stopped") - Number(t.state === "stopped") ||
          n.writtenAtMs - t.writtenAtMs
      )
      .slice(0, D)
  );
}
function nt() {
  let { commentMonitorIntent: e, wakes: t } = Z();
  if (
    !e.wroteCurrentLine ||
    e.sid !== q() ||
    [...e.bySlug.keys()].some((n) => t.yieldedSlugs.has(n))
  )
    return;
  return { type: "artifact-comment-monitor", v: 1, sessionId: q(), artifacts: E(e) };
}
function N() {
  let e = Z().commentMonitorIntent,
    t = q(),
    n,
    s = () => rt(e, E(e)),
    r = !e.exitStamped && e.sid === t;
  if (r && wJe(t)) {
    if (e.wroteCurrentLine || s() || e.owedLines.has(t) || e.pendingLines.has(t))
      (P(), (e.wroteCurrentLine = !0), Yge(nt));
  } else if (r && O(e, t) && e.transcriptPath !== null && s()) {
    let a = V(e, { type: "artifact-comment-monitor", v: 1, sessionId: t, artifacts: E(e) });
    n = { path: e.transcriptPath, entry: a, tornTailEntry: I(a) };
    for (let l of [e.owedLines, e.pendingLines]) if (l.get(t)?.path === n.path) l.delete(t);
  }
  e.exitStamped = !0;
  let d = [...e.owedLines, ...e.pendingLines].map(([a, { path: l, line: g }]) => {
    let m = { type: "artifact-comment-monitor", v: 1, sessionId: a, artifacts: g };
    return { path: l, entry: m, tornTailEntry: I(m) };
  });
  return n === void 0 ? d : [...d, n];
}
function I(e) {
  let t = Date.now();
  return {
    ...e,
    artifacts: Ir(e.artifacts, (n) =>
      n.state === "armed" && n.holder === void 0
        ? { state: "stopped", writtenAtMs: t, ...(n.title !== void 0 && { title: n.title }) }
        : n
    )
  };
}
function V(e, t) {
  let n = q(),
    s = new Set();
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let a of d.traveling ?? []) if (d.line[a]?.state === "armed") s.add(a);
  }
  if (s.size === 0) return t;
  return { ...t, artifacts: Ii(t.artifacts, (r, d) => r.state === "armed" && s.has(d)) };
}
function rt(e, t) {
  return e.lastWritten !== j(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}
function j(e) {
  return _(
    Object.entries(e)
      .map(([t, n]) => [
        t,
        n.state,
        n.writtenAtMs,
        n.title ?? null,
        n.holder ?? null,
        n.holderPid ?? null,
        n.holderProcStart ?? n.holderProcStartFt ?? null,
        n.holderJob ?? null,
        n.holderPidSpace ?? null
      ])
      .sort()
  );
}
function M(e) {
  let t = k();
  (P(), AIe());
  let n = E(t),
    s = j(n);
  if (s === t.lastWritten && K3() === t.failureSeqAtWrite) return;
  if (((t.failureSeqAtWrite = K3()), t.lastWritten === null && t.bySlug.size === 0)) {
    t.lastWritten = s;
    return;
  }
  let r = { type: "artifact-comment-monitor", v: 1, sessionId: q(), artifacts: n };
  if (O(t, q())) {
    if (((t.lastWritten = C), e?.durableNow === !0 && t.transcriptPath !== null)) {
      let d = V(t, r);
      KKn(d, t.transcriptPath, I(d));
    }
    return;
  }
  if (((t.lastWritten = s), (t.wroteCurrentLine = !0), Yge(nt), e?.durableNow === !0)) KKn(r);
  rPo(r, t.storageV5).catch(() => {
    if (t.lastWritten === s) t.lastWritten = C;
    f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
export {
  zws,
  Kws,
  AIe,
  Vws,
  ome,
  ifo,
  qLn,
  EQt,
  YLn,
  afo,
  tJ,
  qws,
  Yws,
  Uct,
  Xws,
  M3e,
  XLn,
  Jws,
  lfo
};

//# sourceMappingURL=chunk-46ty1j5h.js.map
