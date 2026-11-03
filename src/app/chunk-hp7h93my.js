// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, ao, no, dP, rrs, Om, Fxe, TX } from "./chunk-wrtp8qz8.js";
import { Vt } from "./chunk-fs43t96t.js";
import { _, ie, t } from "./chunk-4kxznmzw.js";
import { pie } from "./chunk-jazcqqqr.js";
import { l } from "./chunk-ewvf3tep.js";
import { iW } from "./chunk-qywdxehb.js";
import { HAt, xR } from "./chunk-13nwb0xt.js";
import { que } from "./chunk-bh50mq9d.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { jot } from "./chunk-d54avynm.js";
import { ekt } from "./chunk-rh5ymkjp.js";
import { randomUUID as D } from "crypto";
import { readFileSync as P } from "fs";
import { mkdir as R } from "fs/promises";
import { join as S } from "path";
var x = [
  { min: 0, max: 59 },
  { min: 0, max: 23 },
  { min: 1, max: 31 },
  { min: 1, max: 12 },
  { min: 0, max: 6 }
];
function k(e, s) {
  let { min: o, max: r } = s,
    i = new Set();
  for (let a of e.split(",")) {
    let n = a.match(/^\*(?:\/(\d+))?$/);
    if (n) {
      let c = n[1] ? parseInt(n[1], 10) : 1;
      if (c < 1) return null;
      for (let f = o; f <= r; f += c) i.add(f);
      continue;
    }
    let m = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (m) {
      let c = parseInt(m[1], 10),
        f = parseInt(m[2], 10),
        u = m[3] ? parseInt(m[3], 10) : 1,
        h = o === 0 && r === 6,
        d = h ? 7 : r;
      if (c > f || u < 1 || c < o || f > d) return null;
      for (let g = c; g <= f; g += u) i.add(h && g === 7 ? 0 : g);
      continue;
    }
    if (a.match(/^\d+$/)) {
      let c = parseInt(a, 10);
      if (o === 0 && r === 6 && c === 7) c = 0;
      if (c < o || c > r) return null;
      i.add(c);
      continue;
    }
    return null;
  }
  if (i.size === 0) return null;
  return Array.from(i).sort((a, n) => a - n);
}
function vY(e) {
  let s = e.trim().split(/\s+/);
  if (s.length !== 5) return null;
  let o = [];
  for (let r = 0; r < 5; r++) {
    let i = k(s[r], x[r]);
    if (!i) return null;
    o.push(i);
  }
  return { minute: o[0], hour: o[1], dayOfMonth: o[2], month: o[3], dayOfWeek: o[4] };
}
function F(e) {
  let s = new Date(e.getTime());
  return (s.setMinutes(s.getMinutes()), s.getTime() !== e.getTime());
}
function bBt(e, s, { oneShot: o = !1 } = {}) {
  let r = new Set(e.minute),
    i = new Set(e.hour),
    a = new Set(e.dayOfMonth),
    n = new Set(e.month),
    m = new Set(e.dayOfWeek),
    p = e.dayOfMonth.length === 31,
    c = e.dayOfWeek.length === 7,
    f = (d) =>
      p && c
        ? !0
        : p
          ? m.has(d.getDay())
          : c
            ? a.has(d.getDate())
            : a.has(d.getDate()) || m.has(d.getDay()),
    u = new Date(Math.floor(s.getTime() / 60000) * 60000 + 60000);
  if (Number.isNaN(u.getTime())) return null;
  let h = 527040;
  for (let d = 0; d < h; d++) {
    if (F(u)) {
      if (o && n.has(u.getMonth() + 1) && f(u) && i.has(u.getHours()) && r.has(u.getMinutes()))
        return u;
      u.setTime(u.getTime() + 60000);
      continue;
    }
    let g = u.getMonth() + 1;
    if (!n.has(g)) {
      (u.setMonth(u.getMonth() + 1, 1), u.setHours(0, 0, 0, 0));
      continue;
    }
    if (!f(u)) {
      (u.setDate(u.getDate() + 1), u.setHours(0, 0, 0, 0));
      continue;
    }
    if (!i.has(u.getHours()) || !r.has(u.getMinutes())) {
      if (o) u.setTime(u.getTime() + 60000);
      else if (!i.has(u.getHours())) u.setHours(u.getHours() + 1, 0, 0, 0);
      else u.setMinutes(u.getMinutes() + 1);
      continue;
    }
    return u;
  }
  return null;
}
var b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function w(e, s) {
  return new Date(2000, 0, 1, s, e).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}
function I(e, s) {
  let o = new Date();
  return (
    o.setUTCHours(s, e, 0, 0),
    o.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" })
  );
}
function hx(e, s) {
  let o = s?.utc ?? !1,
    r = e.trim().split(/\s+/);
  if (r.length !== 5) return e;
  let [i, a, n, m, p] = r;
  if (a === "*" && n === "*" && m === "*" && p === "*") {
    if (i === "*") return "Every minute";
    let d = i.match(/^\*\/(\d+)$/);
    if (d) {
      let g = parseInt(d[1], 10);
      return g === 1 ? "Every minute" : `Every ${g} minutes`;
    }
  }
  if (i.match(/^\d+$/) && a === "*" && n === "*" && m === "*" && p === "*") {
    let d = parseInt(i, 10);
    if (d === 0) return "Every hour";
    return `Every hour at :${d.toString().padStart(2, "0")}`;
  }
  let c = a.match(/^\*\/(\d+)$/);
  if (i.match(/^\d+$/) && c && n === "*" && m === "*" && p === "*") {
    let d = parseInt(c[1], 10),
      g = parseInt(i, 10),
      y = g === 0 ? "" : ` at :${g.toString().padStart(2, "0")}`;
    return d === 1 ? `Every hour${y}` : `Every ${d} hours${y}`;
  }
  if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) return e;
  let f = parseInt(i, 10),
    u = parseInt(a, 10),
    h = o ? I : w;
  if (n === "*" && m === "*" && p === "*") return `Every day at ${h(f, u)}`;
  if (n === "*" && m === "*" && p.match(/^\d$/)) {
    let d = parseInt(p, 10) % 7,
      g;
    if (o) {
      let y = new Date(),
        T = (d - y.getUTCDay() + 7) % 7;
      (y.setUTCDate(y.getUTCDate() + T), y.setUTCHours(u, f, 0, 0), (g = b[y.getDay()]));
    } else g = b[d];
    if (g) return `Every ${g} at ${h(f, u)}`;
  }
  if (n === "*" && m === "*" && p === "1-5") return `Weekdays at ${h(f, u)}`;
  return e;
}
function rze(e) {
  let s = e.trim();
  if (s === "") return { error: "required" };
  let o = s.match(/^(\d+)\s*([smhd])$/i);
  if (o) {
    let r = parseInt(o[1], 10),
      i = o[2].toLowerCase();
    if (r < 1) return { error: "interval must be at least 1" };
    let a;
    switch (i) {
      case "s":
        return { error: "minimum interval is 1 minute" };
      case "m":
        if (r > 59) return { error: "minute interval must be 1\u201359 (use hours instead)" };
        a = r === 1 ? "* * * * *" : `*/${r} * * * *`;
        break;
      case "h":
        if (r > 23) return { error: "hour interval must be 1\u201323 (use days instead)" };
        a = r === 1 ? "0 * * * *" : `0 */${r} * * *`;
        break;
      case "d":
        if (r === 1) {
          a = "0 0 * * *";
          break;
        }
        if (r > 28) return { error: "day interval must be 1\u201328 (use a cron expression)" };
        a = `0 0 */${r} * *`;
        break;
      default:
        return { error: "unknown interval unit" };
    }
    return { cron: a, human: hx(a) };
  }
  if (vY(s) !== null) return { cron: s, human: hx(s) };
  return { error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)" };
}
var C = 256;
var eHe = (e) => typeof e === "string" && e !== "" && e.length <= C && !jot.test(e);
var l6n = 300000,
  E = /^\*\/\d+ \* \* \* \*$/,
  v = S(".claude", "scheduled_tasks.json");
function tHe(e) {
  return S(e ?? ao(), v);
}
function d6n(e) {
  return e === void 0 && no() !== null;
}
async function Ecn(e) {
  if (d6n(e)) return [];
  let s = ie(),
    o;
  try {
    o = await s.readFile(tHe(e), { encoding: "utf-8" });
  } catch (n) {
    if (Vt(n)) return [];
    return (l(n), []);
  }
  let r = ot(o, !1);
  if (!r || typeof r !== "object") return [];
  let i = r;
  if (!Array.isArray(i.tasks)) return [];
  let a = [];
  for (let n of i.tasks) {
    if (
      !n ||
      typeof n.id !== "string" ||
      typeof n.cron !== "string" ||
      typeof n.prompt !== "string" ||
      typeof n.createdAt !== "number"
    ) {
      t(`[ScheduledTasks] skipping malformed task: ${_(n)}`);
      continue;
    }
    if (!vY(n.cron)) {
      t(`[ScheduledTasks] skipping task ${n.id} with invalid cron '${n.cron}'`);
      continue;
    }
    if (n.plugin !== void 0 && !eHe(n.plugin)) {
      t(`[ScheduledTasks] skipping task ${n.id}: its plugin name fails the rule for a stored name`);
      continue;
    }
    a.push({
      id: n.id,
      cron: n.cron,
      prompt: n.prompt,
      createdAt: n.createdAt,
      ...(typeof n.lastFiredAt === "number" && { lastFiredAt: n.lastFiredAt }),
      ...(n.recurring && { recurring: !0 }),
      ...(n.permanent && { permanent: !0 }),
      ...(typeof n.createdBySessionId === "string" && { createdBySessionId: n.createdBySessionId }),
      ...(typeof n.createdByPid === "number" && { createdByPid: n.createdByPid }),
      ...(typeof n.createdByProcStart === "string" && { createdByProcStart: n.createdByProcStart }),
      ...(typeof n.createdInProject === "string" && { createdInProject: n.createdInProject }),
      ...(typeof n.plugin === "string" && { plugin: n.plugin })
    });
  }
  return a;
}
function S0o(e) {
  return dP() || rrs(e ?? ao());
}
function X$r(e) {
  if (d6n(e)) return !1;
  if (S0o(e)) return !1;
  let s;
  try {
    s = P(tHe(e), "utf-8");
  } catch {
    return !1;
  }
  let o = ot(s, !1);
  if (!o || typeof o !== "object") return !1;
  let r = o.tasks;
  return Array.isArray(r) && r.length > 0;
}
async function c6n(e, s) {
  if (d6n(s))
    throw Error(
      "Durable scheduled tasks are unavailable in a session started with --project-config-root"
    );
  let o = s ?? ao(),
    r = !pie(S(o, ".claude"));
  if (r) await HAt(o, S(o, ".claude"));
  await R(S(o, ".claude"), { recursive: !0 });
  let i = { tasks: e.map(({ durable: a, ...n }) => n) };
  await xR(
    tHe(o),
    _(i, null, 2) +
      `
`,
    { encoding: "utf-8", allowSymlink: !r, checkParentDir: r, stagingDir: S(o, ".claude", iW) }
  );
}
async function jyt(e, s, o, r, i, a = Date.now(), n) {
  let m = ekt(n),
    p = D().slice(0, 8),
    c = {
      id: p,
      cron: e,
      prompt: s,
      createdAt: a,
      ...(o && { recurring: !0 }),
      ...(m !== void 0 && { plugin: m })
    };
  if (!r) return (Fxe({ ...c, ...(i && { agentId: i }) }), p);
  let f = await Ecn();
  return (
    f.push({
      ...c,
      createdBySessionId: q(),
      createdByPid: process.pid,
      createdByProcStart: que(),
      createdInProject: ao()
    }),
    await c6n(f),
    p
  );
}
async function WTe(e, s) {
  if (e.length === 0) return;
  if (s === void 0 && TX(e) === e.length) return;
  let o = new Set(e),
    r = await Ecn(s),
    i = r.filter((a) => !o.has(a.id));
  if (i.length === r.length) return;
  await c6n(i, s);
}
async function WKs(e, s, o) {
  if (e.length === 0) return;
  let r = new Set(e),
    i = await Ecn(o),
    a = !1;
  for (let n of i) if (r.has(n.id)) ((n.lastFiredAt = s), (a = !0));
  if (!a) return;
  await c6n(i, o);
}
async function xde(e) {
  let s = await Ecn(e);
  if (e !== void 0) return s;
  let o = Om().map((r) => ({ ...r, durable: !1 }));
  return [...s, ...o];
}
function kcn(e, s, o) {
  let r = vY(e);
  if (!r) return null;
  let i = bBt(r, new Date(s), o);
  return i ? i.getTime() : null;
}
var w8 = {
  recurringFrac: 0.5,
  recurringCapMs: 1800000,
  oneShotMaxMs: 90000,
  oneShotFloorMs: 0,
  oneShotMinuteMod: 30,
  recurringMaxAgeMs: 604800000,
  cacheLeadMs: 15000
};
function M(e) {
  let s = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(s) ? s : 0;
}
function Tcn(e, s, o, r = w8) {
  let i = kcn(e, s);
  if (i === null) return null;
  let a = kcn(e, i);
  if (a === null) return i;
  let n = a - i;
  if (E.test(e) && r.cacheLeadMs > 0 && r.cacheLeadMs < n && n >= l6n && n - r.cacheLeadMs < l6n)
    return s + n - r.cacheLeadMs;
  let m = Math.min(M(o) * r.recurringFrac * n, r.recurringCapMs);
  return i + m;
}
function w0o(e, s, o, r = w8) {
  let i = kcn(e, s, { oneShot: !0 });
  if (i === null) return null;
  if (new Date(i).getMinutes() % r.oneShotMinuteMod !== 0) return i;
  let a = r.oneShotFloorMs + M(o) * (r.oneShotMaxMs - r.oneShotFloorMs);
  return Math.max(i - a, s);
}
function Wyt(e, s) {
  return e.recurring
    ? Tcn(e.cron, e.lastFiredAt ?? e.createdAt, e.id, s)
    : w0o(e.cron, e.createdAt, e.id, s);
}
function Gyt(e) {
  return new Date(Math.round(e / 60000) * 60000);
}
function GKs(e, s) {
  return e.filter((o) => {
    let r = kcn(o.cron, o.createdAt, { oneShot: !o.recurring });
    return r !== null && r < s;
  });
}
export {
  vY,
  bBt,
  hx,
  rze,
  eHe,
  l6n,
  tHe,
  d6n,
  Ecn,
  S0o,
  X$r,
  c6n,
  jyt,
  WTe,
  WKs,
  xde,
  kcn,
  w8,
  Tcn,
  w0o,
  Wyt,
  Gyt,
  GKs
};

//# sourceMappingURL=chunk-hp7h93my.js.map
