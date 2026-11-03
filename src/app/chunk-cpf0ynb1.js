// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { R, E, G } from "./chunk-fs43t96t.js";
import { U } from "./chunk-wrtp8qz8.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { it } from "./chunk-qmmh8tq2.js";
import { sbe, KV, Ly, T0, kd } from "./chunk-bh50mq9d.js";
import { o8 } from "./chunk-6h7ejyet.js";
import { We } from "./chunk-pgnjjhxv.js";
import { PM, aW } from "./chunk-qywdxehb.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { xu } from "./chunk-zvsmc5fn.js";
import { z } from "./chunk-p197ae0z.js";
async function u3e(e, r = {}) {
  if (!KV(e)) return "eperm";
  try {
    process.kill(e, r.signal ?? "SIGTERM");
  } catch (n) {
    if (E(n) === "EPERM") return "eperm";
    return "exited";
  }
  let o = Date.now() + (r.gracefulMs ?? 2000);
  while (!0) {
    let n = Date.now() >= o;
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    if (await sbe(e)) return "exited";
    if (n) return "timed-out";
    await X(50);
  }
}
import { lstat as l, readFile as u, rename as f, rm as k, unlink as d } from "fs/promises";
import { uptime as y } from "os";
import { join as b } from "path";
var h = "daemon.lock";
function iD() {
  return b(Le(), h);
}
function f3e() {
  return We.state("daemon-lock");
}
function L(e) {
  return e === "EISDIR" || e === "ENXIO";
}
class g {
  logged = !1;
  markLogged() {
    if (this.logged) return !1;
    return ((this.logged = !0), !0);
  }
}
var D = new W(() => new g());
function S() {
  return D.of(U().host);
}
async function I() {
  let e = await l(iD()).catch(() => {
    return;
  });
  return e !== void 0 && e.isSymbolicLink();
}
async function w(e) {
  let r = iD(),
    o = await l(r).catch(() => {
      return;
    });
  if (o === void 0 || o.isFile()) return;
  let n = o.isDirectory()
    ? "directory"
    : o.isFIFO()
      ? "fifo"
      : o.isSocket()
        ? "socket"
        : o.isSymbolicLink()
          ? "symlink"
          : "other non-regular node";
  if (S().markLogged())
    t(`[DaemonLock] ${n} at the lock path (${e}) \u2014 removing it as the legacy path does`, {
      level: "warn"
    });
  await k(r, { recursive: !0, force: !0 }).catch(() => {});
}
var C = 65536;
async function G_s(e, r) {
  if (z() && r !== void 0) {
    let o = () =>
        r.write(f3e(), _(e, null, 2), {
          precondition: { type: "ifAbsent" },
          mode: 438 & ~process.umask()
        }),
      n = await o();
    for (let i of [0, 1]) {
      if (n.ok) return !0;
      if (n.error.code === "AlreadyExists") return !1;
      let a = "telemetryCode" in n.error ? n.error.telemetryCode : void 0;
      if (n.error.code !== "Failed" || !o8(a)) break;
      if (a === "ELOOP") {
        if (await I()) return !1;
        break;
      }
      if (i === 1) break;
      (await w(a), (n = await o()));
    }
    if (n.ok) return !0;
    throw new R(
      `[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`,
      "[DaemonLock] v5 acquire write failed"
    );
  }
  try {
    return (await aW(iD(), _(e, null, 2)), !0);
  } catch (o) {
    if (E(o) === "EEXIST") return !1;
    throw o;
  }
}
async function z_s(e, r) {
  let o = await Y6(r);
  if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) return;
  await wbr({ ...o, bgDisabled: !0 }, r);
}
async function Y6(e) {
  let r;
  if (e) {
    let n = await e.read([f3e()]);
    if (!n.ok) {
      if (!(
        n.error.code === "Failed" &&
        (n.error.telemetryCode === "ENXIO" ||
          n.error.telemetryCode === "EFBIG" ||
          n.error.telemetryCode === "ELOOP" ||
          n.error.telemetryCode === "ENAMETOOLONG")
      ))
        throw new R(
          `[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`,
          "[DaemonLock] v5 lock read failed"
        );
      let s = await e.delete(f3e());
      if (!s.ok && s.error.code === "Failed") {
        let m = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (L(m)) await w(m);
      }
      return null;
    }
    let i = n.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > C) return (await e.delete(f3e()), null);
    r = Buffer.from(i.value).toString("utf8");
    let a = ot(r, !1);
    if (a && typeof a === "object") {
      let c = a;
      if (typeof c.pid === "number" && typeof c.version === "string") return a;
    }
    return null;
  }
  try {
    let n = await l(iD());
    if (!n.isFile() || n.size > 65536)
      return (await k(iD(), { recursive: !0, force: !0 }).catch(() => {}), null);
    r = await u(iD(), "utf8");
  } catch (n) {
    if (G(n)) return null;
    throw n;
  }
  let o = ot(r, !1);
  if (o && typeof o === "object") {
    let n = o;
    if (typeof n.pid === "number" && typeof n.version === "string") return o;
  }
  return null;
}
async function wbr(e, r) {
  if (r) {
    let i = await r.write(f3e(), _(e, null, 2), { mode: 438 & ~process.umask() });
    if (!i.ok) {
      let c = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (c === "LockContended" || c === "LockSuspect") {
        let s = await Y6(r);
        if (s?.pid !== e.pid || s?.startedAt !== e.startedAt) return !1;
        i = await r.write(f3e(), _(e, null, 2), { mode: 438 & ~process.umask() });
      }
      if (!i.ok)
        throw new R(
          `[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`,
          "[DaemonLock] v5 replace write failed"
        );
    }
    let a = await Y6(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt;
  }
  let o = await PM(iD(), _(e, null, 2));
  try {
    await f(o, iD());
  } catch (i) {
    let a = E(i);
    if (a === "EEXIST" || a === "EPERM") {
      await d(iD()).catch(() => {});
      try {
        await f(o, iD());
      } catch (c) {
        await d(o).catch(() => {});
        let s = E(c);
        if (s === "EEXIST" || s === "EPERM") return !1;
        throw c;
      }
    } else throw (await d(o).catch(() => {}), i);
  }
  let n = await Y6(r);
  return n?.pid === e.pid && n?.startedAt === e.startedAt;
}
async function K_s(e) {
  if (e) {
    let r = await e.delete(f3e());
    if (!r.ok)
      throw new R(
        `[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`,
        "[DaemonLock] v5 lock delete failed"
      );
    return;
  }
  try {
    await d(iD());
  } catch (r) {
    if (!G(r)) throw r;
  }
}
async function nHn(e) {
  let r;
  try {
    r = await u(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return !0;
  }
  let o = r.split("\x00");
  return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon");
}
function p(e) {
  return (
    e !== void 0 &&
    (/(^|\/)claude(\.exe)?$|\/claude-code\/cli\.js$|\/claude\/versions\/[^/\s]+$/.test(e) ||
      e === xu().target)
  );
}
async function V_s(e) {
  let r = await Pe(
    u(`/proc/${e}/cmdline`, "utf8").catch(() => {
      return;
    }),
    1000
  );
  if (r !== void 0) {
    let n = r.split("\x00"),
      i = /(^|\/)(node|bun)$/.test(n[0]) ? 1 : 0;
    return (
      n[0] === "claude daemon" ||
      (p(n[i]) &&
        /^daemon\0(run\0|--json-path\0[^\0]+\0--log-file\0[^\0]+\0--origin\0service\0$)/.test(
          n.slice(i + 1).join("\x00")
        ))
    );
  }
  let o = await it("ps", ["-ww", "-o", "args=", "-p", String(e)], { timeout: 1000, useCwd: !1 });
  return p(
    /^(?:(?:\S*\/)?(?:node|bun)\s+)?(\/\S+)\sdaemon\s(?:run(?:\s|$)|--json-path\s\S+\s--log-file\s\S+\s--origin\sservice\s*$)/.exec(
      o.code === 0 ? o.stdout : ""
    )?.[1]
  );
}
var sct = 2,
  vbr = 250;
async function lJt(e, r, o) {
  if (r === void 0) return !0;
  for (let n = 0; n < o; n++) {
    if (n > 0) await X(vbr);
    let i = await kd(e, { skipCache: n > 0 });
    if (i !== void 0) return i === r;
  }
  return !1;
}
var v = 120000;
function x(e, r = Date.now(), o = y()) {
  return e.startedAt < r - o * 1000 - v;
}
async function rHn(e) {
  let r = T0(e);
  if (r !== void 0) {
    let o = await Ly(e.pid, r);
    if (o === !0) return null;
    if (o === !1) return "pid_recycled";
  }
  return x(e) ? "predates_boot" : null;
}
function GIt(e) {
  return T0(e) !== void 0;
}
function q_s() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${iD()}`;
}
async function bE(e = 1, r) {
  let o = await Y6(r);
  if (!o) return null;
  try {
    process.kill(o.pid, 0);
  } catch {
    return null;
  }
  if (!(await nHn(o.pid))) return null;
  if (!(await lJt(o.pid, T0(o), e))) return null;
  return o;
}
async function dJt(e) {
  let r = await bE(1, e).catch(() => null);
  if (!r) return { kind: "none" };
  switch (r.origin) {
    case "service":
      return { kind: "service", lock: r };
    case "foreground":
      return { kind: "foreground", lock: r };
    case "transient":
    case void 0: {
      if (!GIt(r)) return { kind: "not-stopped", pid: r.pid, outcome: "unverified" };
      let o = await u3e(r.pid);
      return o === "exited"
        ? { kind: "stopped", pid: r.pid }
        : { kind: "not-stopped", pid: r.pid, outcome: o };
    }
    default:
      return (r.origin, { kind: "unknown-origin", lock: r });
  }
}
function BUe(e) {
  switch (e.outcome) {
    case "eperm":
      return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
    case "unverified":
      return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
    case "timed-out":
      return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
  }
}
function oHn(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`;
}
async function Y_s(e, r) {
  let o = await bE(1, r).catch(() => null);
  return !!o && o.version !== e;
}
export {
  u3e,
  iD,
  f3e,
  G_s,
  z_s,
  Y6,
  wbr,
  K_s,
  nHn,
  V_s,
  sct,
  vbr,
  lJt,
  rHn,
  GIt,
  q_s,
  bE,
  dJt,
  BUe,
  oHn,
  Y_s
};

//# sourceMappingURL=chunk-cpf0ynb1.js.map
