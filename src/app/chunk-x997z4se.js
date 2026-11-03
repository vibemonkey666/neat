// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { W } from "./chunk-jgvfzp2r.js";
import { Ine, Kin } from "./chunk-njrx31ky.js";
import { i } from "./chunk-cj37hmns.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { R5t, sCn, iCn, Xit } from "./chunk-xzfc5kz5.js";
import { Nxs } from "./chunk-qce1rsft.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { readFileSync as b } from "fs";
import { posix as _ } from "path";
var c = `${Nxs}toolContainerCpu`,
  f = "anthropic/toolContainerCpu",
  R = 1,
  g = 86400000,
  x = 31 * g;
function d(n) {
  return mn(n) && n[c] === R;
}
var a = new W(() => ({}));
function FJr(n, e) {
  if (e !== "tool-container" || !nr() || i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted")
    return;
  let t;
  try {
    t = b("/proc/self/cgroup", "utf8");
  } catch {
    return;
  }
  let r = sCn(t);
  if (r === void 0) return;
  let u = m(0),
    o = iCn(r);
  if (u !== void 0) {
    let s = o === void 0 ? void 0 : _.join(o, "cpuacct.usage"),
      p = s === void 0 ? void 0 : Xit(s);
    ((a.of(n).meter = {
      machineMsAtZero: u.cpuMs - u.daemonCpuMs,
      callsBeingServed: 0,
      atCallsStart: void 0,
      inCallMs: 0,
      inCallCpuMs: 0,
      shell: s === void 0 || p === void 0 ? void 0 : { usageFile: s, msAtZero: p }
    }),
      Ine.enableCounting());
  }
  Kin(o);
}
function Mvi(n) {
  let { meter: e } = a.of(n);
  if (e === void 0) return;
  if (e.callsBeingServed++ === 0) e.atCallsStart = m(e.machineMsAtZero);
  return {
    [Symbol.dispose]() {
      if (--e.callsBeingServed === 0) {
        let t = M(e, m(e.machineMsAtZero));
        ((e.inCallMs = t.ms), (e.inCallCpuMs = t.cpuMs), (e.atCallsStart = void 0));
      }
    }
  };
}
function Dvi(n, e, t) {
  let { meter: r } = a.of(e);
  if (r === void 0 || !d(t)) return n;
  let u = r.shell === void 0 ? void 0 : Xit(r.shell.usageFile),
    o = m(r.machineMsAtZero);
  if (o === void 0) return n;
  let s = M(r, o),
    p = Math.floor(o.cpuMs),
    l = r.shell === void 0 || u === void 0 ? void 0 : Math.floor(u - r.shell.msAtZero),
    C = {
      start_time_unix_ms: Math.floor(performance.timeOrigin),
      up_ms: Math.floor(o.upMs),
      cpu_ms: p,
      daemon_cpu_ms: Math.floor(o.daemonCpuMs),
      in_call_ms: Math.floor(s.ms),
      in_call_cpu_ms: Math.floor(s.cpuMs),
      ...(l !== void 0 && l >= 1 && l <= p && { shell_cpu_ms: l }),
      left_running_programs: Ine.countRunning()
    },
    h = n.isError === !0 ? f : c;
  return { ...n, _meta: { ...n._meta, [h]: C } };
}
function M({ atCallsStart: n, inCallMs: e, inCallCpuMs: t }, r) {
  return n === void 0 || r === void 0
    ? { ms: e, cpuMs: t }
    : { ms: e + r.upMs - n.upMs, cpuMs: t + Math.max(0, r.cpuMs - n.cpuMs) };
}
function m(n) {
  let e = Xit(_.join(R5t, "cpuacct.usage"));
  if (e === void 0) return;
  try {
    let { user: t, system: r } = process.cpuUsage();
    return { cpuMs: Math.max(0, e - n), daemonCpuMs: (t + r) / 1000, upMs: performance.now() };
  } catch {
    return;
  }
}
export { FJr, Mvi, Dvi };

//# sourceMappingURL=chunk-x997z4se.js.map
