// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Osr, Msr, Nwn, uli, L9o, Bqe, oqt } from "./chunk-va73d26h.js";
import { execFile as d } from "child_process";
class i {
  promise = null;
  start() {
    if (this.promise) return;
    this.promise = Psr();
  }
  reset() {
    this.promise = null;
  }
}
var a = new i();
function c(e) {
  if (!e) return { status: "ok", exitCode: 0, errno: null, signal: null };
  let t = e,
    n = typeof t.signal === "string" && t.signal ? t.signal : null;
  if (typeof t.code === "string")
    return { status: "spawn_error", exitCode: null, errno: t.code, signal: null };
  if (t.killed === !0) return { status: "timeout", exitCode: null, errno: null, signal: n };
  if (n) return { status: "killed", exitCode: null, errno: null, signal: n };
  return {
    status: "exited",
    exitCode: typeof t.code === "number" ? t.code : null,
    errno: null,
    signal: null
  };
}
function R(e, t, n) {
  let s = Date.now();
  return new Promise((o) => {
    try {
      d(
        e,
        t,
        { encoding: "utf-8", timeout: uli, windowsHide: !0, ...(n !== void 0 && { maxBuffer: n }) },
        (u, r) => {
          o({ stdout: r ?? "", ...c(u), durationMs: Date.now() - s });
        }
      );
    } catch (u) {
      let r = u.code;
      o({
        stdout: "",
        status: "spawn_error",
        exitCode: null,
        errno: typeof r === "string" ? r : null,
        signal: null,
        durationMs: Date.now() - s
      });
    }
  });
}
function l(e) {
  return {
    status: e.status,
    exitCode: e.exitCode,
    errno: e.errno,
    signal: e.signal,
    durationMs: e.durationMs
  };
}
function m(e) {
  return e.status === "spawn_error" && e.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER";
}
function Psr() {
  return (async () => {
    if (oqt()) return f(Bqe);
    return {
      plistStdouts: null,
      hklmStdout: null,
      hkcuStdout: null,
      outcomes: { hklm: null, hkcu: null }
    };
  })();
}
async function f(e) {
  let t = (o) => R(e, ["query", o, "/v", Nwn], L9o),
    [n, s] = await Promise.all([t(Osr), t(Msr)]);
  return {
    plistStdouts: null,
    hklmStdout: n.status === "ok" ? n.stdout : null,
    ...(m(n) && { hklmUnreadReason: `the value exceeds ${L9o / 1048576} MiB` }),
    hkcuStdout: s.status === "ok" ? s.stdout : null,
    outcomes: { hklm: l(n), hkcu: l(s) }
  };
}
function I9o() {
  a.start();
}
function O9o() {
  return a.promise;
}
export { Psr, I9o, O9o };

//# sourceMappingURL=chunk-yhnvfh6c.js.map
