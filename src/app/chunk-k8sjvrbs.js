// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { t } from "./chunk-4kxznmzw.js";
import { Ws } from "./chunk-f451a1hs.js";
import { a } from "./chunk-4cgvah10.js";
import { aLn } from "./chunk-k5nwr7mq.js";
import { i } from "./chunk-cj37hmns.js";
import { Dwt, Q7n } from "./chunk-160x3d5g.js";
var M = 200,
  b = 1000,
  T = 1e4,
  g = 30000,
  _ = 500,
  k = 5000,
  d = 50,
  f = 300000;
function aXt() {
  try {
    let e = process.resourceUsage();
    return {
      cpuTimeMs: (e.userCPUTime + e.systemCPUTime) / 1000,
      majorPageFaults: e.majorPageFault
    };
  } catch (e) {
    return (
      t(
        `[event-loop-stall] process.resourceUsage() failed: ${e instanceof Error ? e.message : String(e)}`,
        { level: "error" }
      ),
      null
    );
  }
}
function E() {
  try {
    let e = process.memoryUsage();
    return {
      rss_mb: Math.round(e.rss / 1024 / 1024),
      heap_used_mb: Math.round(e.heapUsed / 1024 / 1024),
      ext_mb: Math.round(e.external / 1024 / 1024)
    };
  } catch (e) {
    return (
      t(
        `[event-loop-stall] process.memoryUsage() failed: ${e instanceof Error ? e.message : String(e)}`,
        { level: "error" }
      ),
      null
    );
  }
}
function w({ prevWallMs: e, prevMonotonicMs: s, nowWallMs: n, nowMonotonicMs: r, intervalMs: o }) {
  let c = n - e,
    p = r - s,
    m = c - o,
    u = Math.round(p - o),
    S = m - u,
    h = u > _;
  return {
    wallElapsedMs: c,
    wallDriftMs: m,
    monotonicStallMs: u,
    clockJumpMs: S,
    isStall: m > _ || h,
    isMonotonicStall: h,
    likelySleep: m > k
  };
}
function y({
  write: e,
  isMonotonicStall: s,
  prevMonotonicMs: n,
  nowMonotonicMs: r,
  intervalMs: o
}) {
  if (!s || e === void 0 || e.endedMs < n) return { blocked_write: !1 };
  let c = n + o;
  return {
    blocked_write: e.startedMs <= c + d && e.endedMs >= r - d,
    last_write_ms: Math.round(e.endedMs - e.startedMs),
    last_write_bytes: e.bytes
  };
}
function Fki(e, s) {
  let n = R.of(e),
    r = i.CLAUDE_CODE_REMOTE ? b : M,
    o = i.CLAUDE_CODE_REMOTE ? { intervalMs: T, afterQuietMs: g } : void 0;
  if (s === void 0) n.start(r, o);
  else n.start(r, o, s);
}
class v {
  timer = null;
  intervalMs = M;
  activeIntervalMs = M;
  rest = void 0;
  quietMs = 0;
  stopListeningForWork = () => {};
  rssSampleTicks = f / M;
  lastTickMs = 0;
  lastTickMonotonicMs = 0;
  totalStalls = 0;
  totalStallDurationMs = 0;
  totalMonotonicStallMs = 0;
  tickCount = 0;
  lastResourceSample = null;
  sigcontSeen = !1;
  listensForSigcont = !1;
  onSigcont = () => {
    this.sigcontSeen = !0;
  };
  afterTick = (e, s, n, r, o) => {
    let c = this.listensForSigcont ? this.sigcontSeen : void 0;
    if (((this.sigcontSeen = !1), !e.isStall || s === null)) return;
    (t(
      `[event-loop-stall] blocked for ${e.monotonicStallMs}ms monotonic (wall drift ${e.wallDriftMs}ms, clock jump ${e.clockJumpMs}ms, expected ${o}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${e.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${s.blocked_write}` +
        (s.last_write_ms !== void 0
          ? ` last_write=${s.last_write_ms}ms/${s.last_write_bytes}B`
          : "") +
        ` sigcont=${c ?? "n/a"}` +
        (n ? ` cpu=${n.cpu_delta_ms}ms majflt=${n.major_fault_delta}` : "") +
        (r ? ` rss=${r.rss_mb}MB heap=${r.heap_used_mb}MB ext=${r.ext_mb}MB` : ""),
      { level: "warn" }
    ),
      a("tengu_event_loop_stall", {
        stall_duration_ms: e.wallDriftMs,
        expected_interval_ms: o,
        actual_interval_ms: e.wallElapsedMs,
        monotonic_stall_ms: e.monotonicStallMs,
        clock_jump_ms: e.clockJumpMs,
        total_stalls: this.totalStalls,
        cumulative_stall_ms: this.totalStallDurationMs,
        cumulative_monotonic_stall_ms: this.totalMonotonicStallMs,
        likely_sleep: e.likelySleep,
        ...n,
        ...r,
        ...s,
        sigcont: c,
        nonblocking_stdout: aLn()
      }));
  };
  start(e, s, n = { attributeSigcont: !0 }) {
    if (this.timer !== null) return;
    if (((this.activeIntervalMs = e), (this.rest = s), this.openWindow(), n.attributeSigcont))
      ((this.listensForSigcont = !0), process.on("SIGCONT", this.onSigcont));
    if (
      (t(
        `[event-loop-stall] detector started (interval=${e}ms${s ? `, at rest ${s.intervalMs}ms` : ""}, threshold=${_}ms)`
      ),
      s !== void 0)
    )
      this.stopListeningForWork = Q7n(() => {
        if (this.intervalMs === this.activeIntervalMs) this.quietMs = 0;
        else
          try {
            this.tick();
          } catch (r) {
            (l(r), this.openWindow(), this.arm(this.activeIntervalMs));
          }
      });
    this.arm(e);
  }
  stop() {
    if ((this.stopListeningForWork(), this.listensForSigcont))
      (process.off("SIGCONT", this.onSigcont),
        (this.listensForSigcont = !1),
        (this.sigcontSeen = !1));
    if (this.timer !== null) (clearInterval(this.timer), (this.timer = null));
  }
  [Symbol.dispose]() {
    this.stop();
  }
  openWindow() {
    ((this.lastTickMs = Date.now()),
      (this.lastTickMonotonicMs = performance.now()),
      (this.lastResourceSample = aXt()));
  }
  arm(e) {
    if (((this.quietMs = 0), this.timer !== null)) {
      if (this.intervalMs === e) return;
      clearInterval(this.timer);
    }
    ((this.intervalMs = e),
      (this.rssSampleTicks = Math.round(f / e)),
      (this.timer = setInterval(this.tick, e)),
      this.timer.unref());
  }
  tick = () => {
    let e = this.intervalMs,
      s = Date.now(),
      n = performance.now(),
      r = Math.min(e, Math.round(n - this.lastTickMonotonicMs)),
      o = w({
        prevWallMs: this.lastTickMs,
        prevMonotonicMs: this.lastTickMonotonicMs,
        nowWallMs: s,
        nowMonotonicMs: n,
        intervalMs: r
      });
    this.tickCount++;
    let c = aXt(),
      p = Ws().get(process.stdout)?.takeSlowestFrameWrite();
    if (o.isStall) {
      if (
        (this.totalStalls++,
        (this.totalStallDurationMs += Math.max(o.wallDriftMs, 0)),
        o.isMonotonicStall)
      )
        this.totalMonotonicStallMs += o.monotonicStallMs;
      let m = E(),
        u =
          c && this.lastResourceSample
            ? {
                cpu_delta_ms: Math.round(c.cpuTimeMs - this.lastResourceSample.cpuTimeMs),
                major_fault_delta: c.majorPageFaults - this.lastResourceSample.majorPageFaults
              }
            : null,
        S = y({
          write: p,
          isMonotonicStall: o.isMonotonicStall,
          prevMonotonicMs: this.lastTickMonotonicMs,
          nowMonotonicMs: n,
          intervalMs: r
        });
      if ((setImmediate(this.afterTick, o, S, u, m, e), o.likelySleep))
        Ws().get(process.stdout)?.reassertTerminalModes();
    }
    if (!o.isStall) setImmediate(this.afterTick, o, null, null, null, e);
    ((this.lastTickMs = s),
      (this.lastTickMonotonicMs = n),
      (this.lastResourceSample = c),
      this.choosePeriod());
  };
  choosePeriod() {
    if (this.rest === void 0) return;
    if (Dwt()) {
      this.arm(this.activeIntervalMs);
      return;
    }
    if (((this.quietMs += this.intervalMs), this.quietMs >= this.rest.afterQuietMs))
      this.arm(this.rest.intervalMs);
  }
}
var R = new W(() => new v());
export { aXt, Fki };

//# sourceMappingURL=chunk-k8sjvrbs.js.map
