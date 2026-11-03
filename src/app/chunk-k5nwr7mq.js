// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { E, Er, tw } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { ws } from "./chunk-v4kbwz0z.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { closeSync as N, constants as m, fstatSync as v, openSync as R, writeSync as A } from "fs";
import { isatty as F } from "tty";
var Q = 4194304,
  L = 25,
  I = Buffer.from("\x1B[0m"),
  d = new WeakMap(),
  b = ve(new Set(), (e) => e.clear());
function Kco(e = 1) {
  if (!(e === 1 ? process.stdout.isTTY : F(e))) return { reason: "not_a_tty" };
  let n;
  switch (O()) {
    case "linux":
    case "wsl":
      n = `/proc/self/fd/${e}`;
      break;
    case "macos": {
      let i = Y(e);
      if (i === void 0) return { reason: "ttyname_unavailable" };
      n = i;
      break;
    }
    default:
      return { reason: "unsupported_platform" };
  }
  let o;
  try {
    o = R(n, m.O_WRONLY | m.O_NONBLOCK | m.O_NOCTTY | ws);
  } catch (i) {
    return { reason: "open_failed", errno: E(i) };
  }
  let r = { reason: "not_same_tty" };
  try {
    let i = v(o),
      u = v(e);
    if (i.rdev === u.rdev && i.ino === u.ino) return { fd: o };
  } catch (i) {
    r = { reason: "fstat_failed", errno: E(i) };
  }
  try {
    N(o);
  } catch {}
  return r;
}
function S(e, n, o) {
  if (
    (a("tengu_nonblocking_stdout", {
      result: c(e),
      reason: n === void 0 ? void 0 : c(n),
      errno: o
    }),
    e === "installed")
  )
    g("terminal_nonblocking_stdout");
  else if (n !== "not_a_tty" && n !== "unsupported_platform")
    f("terminal_nonblocking_stdout", n ?? "write_failed", o === void 0 ? void 0 : { errno: o });
}
function Y(e) {
  try {
    return Bun.ant.ttyName(e) ?? void 0;
  } catch {
    return;
  }
}
function GSs(e, n = Kco) {
  let o = d.get(process.stdout);
  if (o?.installedWrite !== void 0) return ((o.onEpisodeEnd = e), w(o));
  let r = n();
  if (r.fd === void 0) {
    if (
      (t(`nonBlockingStdout: not installed (${r.reason}${r.errno ? `, ${r.errno}` : ""})`),
      !b.has(r.reason))
    )
      (b.add(r.reason), S("skipped", r.reason, tw(r.errno)));
    return null;
  }
  let i = {
      fd: r.fd,
      originalWrite: process.stdout.write,
      installedWrite: void 0,
      queue: [],
      queuedBytes: 0,
      dropping: !1,
      timer: void 0,
      retryMs: 0,
      episode: { startedMs: 0, peakQueuedBytes: 0, droppedBytes: 0 },
      onEpisodeEnd: e,
      onExit: () => y(i)
    },
    u = (s, p, M) => {
      let _ = typeof p === "string" ? p : void 0,
        q = typeof p === "function" ? p : M;
      if (i.installedWrite === void 0) return i.originalWrite.call(process.stdout, s, _, q);
      return (C(i, typeof s === "string" ? Buffer.from(s, _) : Buffer.from(s)), q?.(), !0);
    };
  return (
    (i.installedWrite = u),
    (process.stdout.write = u),
    d.set(process.stdout, i),
    process.on("exit", i.onExit),
    t("nonBlockingStdout: active"),
    S("installed"),
    w(i)
  );
}
function w(e) {
  return {
    flush: () => y(e),
    restore: () => h(e),
    isActive: () => e.installedWrite !== void 0,
    queuedBytes: () => e.queuedBytes
  };
}
function zSs({ envOverride: e, isAnt: n, remoteFlag: o }) {
  return e ?? (n || o());
}
function aLn() {
  return d.get(process.stdout)?.installedWrite !== void 0;
}
function lLn() {
  let e = d.get(process.stdout);
  if (e?.installedWrite !== void 0) h(e);
}
function dLn() {
  let e = d.get(process.stdout);
  if (e?.installedWrite !== void 0) y(e);
}
function W(e, n) {
  try {
    return A(e, n);
  } catch (o) {
    if (E(o) === "EAGAIN") return 0;
    throw o;
  }
}
function C(e, n) {
  if (n.length === 0) return;
  if (e.queue.length === 0) {
    let o;
    try {
      o = W(e.fd, n);
    } catch (r) {
      (k(e, r), process.stdout.write(n));
      return;
    }
    if (o === n.length) return;
    ((e.episode = { startedMs: performance.now(), peakQueuedBytes: 0, droppedBytes: 0 }),
      B(e, n.subarray(o)),
      x(e, o > 0));
    return;
  }
  if (e.dropping) {
    e.episode.droppedBytes += n.length;
    return;
  }
  if (e.queuedBytes + n.length > Q) {
    ((e.episode.droppedBytes += e.queuedBytes + n.length),
      (e.queue = []),
      (e.queuedBytes = 0),
      (e.dropping = !0),
      t(
        `nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`,
        { level: "warn" }
      ),
      B(e, I));
    return;
  }
  B(e, n);
}
function B(e, n) {
  if ((e.queue.push(n), (e.queuedBytes += n.length), e.queuedBytes > e.episode.peakQueuedBytes))
    e.episode.peakQueuedBytes = e.queuedBytes;
}
function x(e, n) {
  ((e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), L)),
    (e.timer = setTimeout(D, e.retryMs, e)),
    e.timer.unref());
}
function D(e) {
  e.timer = void 0;
  let n = !1;
  try {
    while (e.queue.length > 0) {
      if (n && e.queue.length > 1) e.queue = [Buffer.concat(e.queue, e.queuedBytes)];
      let o = e.queue[0],
        r = W(e.fd, o);
      if (r === 0) {
        x(e, n);
        return;
      }
      if (((n = !0), (e.queuedBytes -= r), r < o.length)) e.queue[0] = o.subarray(r);
      else e.queue.shift();
    }
  } catch (o) {
    k(e, o);
    return;
  }
  T(e, "drain");
}
function T(e, n) {
  ((e.dropping = !1), (e.retryMs = 0));
  try {
    e.onEpisodeEnd({
      durationMs: Math.round(performance.now() - e.episode.startedMs),
      peakQueuedBytes: e.episode.peakQueuedBytes,
      droppedBytes: e.episode.droppedBytes,
      endedBy: n
    });
  } catch (o) {
    l(o);
  }
}
function y(e) {
  if (e.timer !== void 0) (clearTimeout(e.timer), (e.timer = void 0));
  if (e.queue.length === 0) return;
  let n = e.queue;
  ((e.queue = []), (e.queuedBytes = 0));
  try {
    for (let o of n) e.originalWrite.call(process.stdout, o);
  } catch (o) {
    k(e, o);
    return;
  }
  T(e, "flush");
}
function k(e, n) {
  (t(`nonBlockingStdout: uninstalling (${n})`),
    (e.queue = []),
    (e.queuedBytes = 0),
    h(e),
    S("abandoned", void 0, Er(n)));
}
function h(e) {
  if (e.installedWrite === void 0) return;
  if (process.stdout.write === e.installedWrite) process.stdout.write = e.originalWrite;
  ((e.installedWrite = void 0), d.delete(process.stdout), process.off("exit", e.onExit));
  try {
    N(e.fd);
  } catch {}
  y(e);
}
export { Kco, GSs, zSs, aLn, lLn, dLn };

//# sourceMappingURL=chunk-k5nwr7mq.js.map
