// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bie } from "./chunk-2qx8pe6s.js";
import { dmi } from "./chunk-jgvfzp2r.js";
import { X, Nt } from "./chunk-4hww8411.js";
import { ve } from "./chunk-vk5p9xv3.js";
import {
  lstatSync as C,
  readFileSync as x,
  rmSync as S,
  unlinkSync as b,
  writeFileSync as h
} from "fs";
import { join as c } from "path";
var m = "exit-cause",
  rTn = "session_in_use",
  y = "exit-detail",
  P = 200;
function Kw(e, t) {
  let r = t ?? process.env.CLAUDE_JOB_DIR;
  if (!r) return;
  try {
    h(c(r, m), e);
  } catch {}
}
function aIi(e, t, r) {
  let n = r ?? process.env.CLAUDE_JOB_DIR,
    o = t.trim();
  if (!n || !o) return;
  try {
    h(
      c(n, y),
      `${e}
${o.slice(0, P)}`
    );
  } catch {}
}
function tts(e) {
  return E(c(e, m));
}
function nts(e, t) {
  let r = E(c(e, y));
  if (!r) return;
  let n = r.indexOf(`
`);
  return n !== -1 && r.slice(0, n) === t ? r.slice(n + 1) : void 0;
}
function E(e) {
  try {
    let t = C(e);
    if (!t.isFile() || t.size > 65536) {
      try {
        S(e, { recursive: !0, force: !0 });
      } catch {}
      return;
    }
    let r = x(e, "utf8");
    return (b(e), r);
  } catch {
    return;
  }
}
var hdr = new Set(["EPIPE", "EIO", "ENXIO", "EBADF"]),
  _ = new Set(["EISDIR", "ENOTCONN", "ECONNRESET"]);
function hYt(e) {
  let t =
    e !== null && typeof e === "object" && "code" in e && typeof e.code === "string"
      ? e.code
      : void 0;
  return t !== void 0 && (_.has(t) || hdr.has(t));
}
function ASe(e, t) {
  e.on("error", (r) => {
    if (r.code !== void 0 && hdr.has(r.code)) {
      try {
        e.destroy?.();
      } catch {}
      t?.(r.code);
    }
  });
}
function rts(e) {
  (ASe(process.stdin, (t) => e("stdin", t)),
    ASe(process.stdout, (t) => e("stdout", t)),
    process.stdout.on("error", () => {
      i.markErrored();
    }),
    ASe(process.stderr),
    process.stderr.on("error", () => {
      p.giveUpOnUnflushed();
    }));
}
function ydr(e, t, r) {
  if (e.destroyed || e.writableEnded) return "dropped";
  return e.write(t, r) === !1 ? "backed-up" : "accepted";
}
class a {
  everWritten = !1;
  drainPromise = void 0;
  bytesQueued = 0;
  bytesFlushed = 0;
  notifyFlushProgress = void 0;
  notifyExternallyClocked = void 0;
  externallyClockedPromise = void 0;
  externallyClocked = !1;
  errored = !1;
  flushConfirmedPromise = void 0;
  flushCloseListener = void 0;
  markEverWritten() {
    this.everWritten = !0;
  }
  recordQueued(e) {
    this.bytesQueued += e;
  }
  recordFlushed(e) {
    ((this.bytesFlushed += e), this.notifyFlushProgress?.());
  }
  markErrored() {
    ((this.errored = !0), this.notifyFlushProgress?.());
  }
  outstandingBytes() {
    return process.stdout.destroyed || this.errored ? 0 : this.bytesQueued - this.bytesFlushed;
  }
  endStdoutOnce() {
    if (this.drainPromise === void 0) {
      let e = process.stdout;
      if (e.isTTY || e.destroyed || e.writableEnded || !this.everWritten) return;
      this.drainPromise = new Promise((t) => e.end(t));
    }
    return this.drainPromise;
  }
  fullyFlushed() {
    if (this.flushConfirmedPromise === void 0)
      this.flushConfirmedPromise = new Promise((e) => {
        let t = () => {
          if (this.outstandingBytes() <= 0) ((this.notifyFlushProgress = void 0), e());
        };
        ((this.notifyFlushProgress = t),
          (this.flushCloseListener = t),
          process.stdout.once("close", t),
          t());
      });
    return this.flushConfirmedPromise;
  }
  isExternallyClocked() {
    return this.externallyClocked;
  }
  ensureExternallyClockedPromise() {
    return (this.externallyClockedPromise ??= new Promise((e) => {
      this.notifyExternallyClocked = e;
    }));
  }
  markExternallyClocked() {
    ((this.externallyClocked = !0),
      this.ensureExternallyClockedPromise(),
      this.notifyExternallyClocked?.(),
      (this.notifyExternallyClocked = void 0));
  }
  reset() {
    if (this.flushCloseListener !== void 0)
      process.stdout.removeListener("close", this.flushCloseListener);
    Object.assign(this, new a());
  }
}
var i = new a();
function Ur(e) {
  i.markEverWritten();
  let t = Buffer.byteLength(e);
  if (
    ydr(process.stdout, e, () => {
      i.recordFlushed(t);
    }) !== "dropped"
  )
    i.recordQueued(t);
}
async function yYt(e = 2000, { scaleBudgetToQueue: t = !0 } = {}) {
  let r = i.endStdoutOnce();
  if (r === void 0) return;
  let n = Promise.all([r, i.fullyFlushed()]);
  await Nt(t ? Promise.race([n, D(e)]) : n, t ? x9r(e) : e, "stdout drain timeout (exit)").catch(
    () => {}
  );
}
function nie() {
  i.markExternallyClocked();
}
function ots() {
  return i.isExternallyClocked();
}
function D(e) {
  return i.ensureExternallyClockedPromise().then(() => X(e));
}
var T = 262144,
  k = 30000;
function R9r() {
  return i.outstandingBytes();
}
function x9r(e = 2000) {
  return Math.min(k, Math.max(e, Math.ceil((R9r() * 1000) / T)));
}
var v = 1048576,
  w = 1e4,
  A = bie((e) => e());
class f {
  unflushed = { length: 0, since: 0 };
  droppedCount = 0;
  droppedTotal = 0;
  write(e, t) {
    let r = this.unflushed;
    if (t && r.length >= v && (this.droppedCount > 0 || Date.now() - r.since >= w)) {
      (this.droppedCount++, this.droppedTotal++);
      return;
    }
    let n = "writing",
      o = () => {
        let d = n === "unflushed";
        if (((n = "flushed"), d)) ((r.length -= e.length), this.reportDropped());
      };
    if (A(() => ydr(process.stderr, e, o)) === "backed-up" && n === "writing") {
      if (((n = "unflushed"), r.length === 0)) r.since = Date.now();
      r.length += e.length;
    }
  }
  giveUpOnUnflushed() {
    ((this.unflushed = { length: 0, since: 0 }), this.reportDropped());
  }
  getDroppedTotal() {
    return this.droppedTotal;
  }
  reset() {
    Object.assign(this, new f());
  }
  reportDropped() {
    if (this.droppedCount > 0 && this.unflushed.length < v) {
      let e = this.droppedCount;
      ((this.droppedCount = 0),
        this.write(
          `[stderr messages dropped before this line: ${e}. Whatever reads this stderr had not caught up for over 10 s and 1 MiB of output.]
`,
          !1
        ));
    }
  }
}
var p = ve(new f(), (e) => e.reset());
function E2(e, { mayDrop: t = !1 } = {}) {
  p.write(e, t);
}
function sts() {
  return p.getDroppedTotal();
}
function fit(e) {
  if ((console.error(e), !dmi())) Kw("exit_with_error");
  process.exit(1);
}
function oTn(e, t) {
  let r = e;
  if (r.readableEnded || r.destroyed) return Promise.resolve(!1);
  return new Promise((n) => {
    let o = (u) => {
        (clearTimeout(l), e.off("end", s), e.off("close", s), e.off("data", d), n(u));
      },
      s = () => o(!1),
      d = () => {
        if ((clearTimeout(l), r.readableEnded || r.destroyed)) o(!1);
      },
      l = setTimeout(o, t, !0);
    (e.once("end", s), e.once("close", s), e.once("data", d));
  });
}
async function* sTn(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"),
    r = !1,
    n = null,
    o = () => {
      ((r = !0), n?.());
    };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!r) {
      let d = s.next();
      d.catch(() => {});
      let l = new Promise((g) => {
          n = () => g(t);
        }),
        u = await Promise.race([d, l]);
      if (((n = null), u === t || u.done)) return;
      yield String(u.value);
    }
  } finally {
    (e.off("close", o), s.return?.().catch(() => {}));
  }
}
export {
  rTn,
  Kw,
  aIi,
  tts,
  nts,
  hdr,
  hYt,
  ASe,
  rts,
  ydr,
  Ur,
  yYt,
  nie,
  ots,
  R9r,
  x9r,
  E2,
  sts,
  fit,
  oTn,
  sTn
};

//# sourceMappingURL=chunk-45h8cn90.js.map
