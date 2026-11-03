// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { R } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { So } from "./chunk-wrtp8qz8.js";
import { _ } from "./chunk-4kxznmzw.js";
import { Ja } from "./chunk-a16y5hcz.js";
import { xI } from "./chunk-dc0nzty2.js";
import { W } from "./chunk-jgvfzp2r.js";
import { O } from "./chunk-19xvg81r.js";
import { p } from "./chunk-qmkm2x59.js";
import { b2t } from "./chunk-ajtyjx88.js";
import { Be } from "./chunk-at88wjsn.js";
import { P3 } from "./chunk-j0tbz6ra.js";
import { mQr } from "./chunk-vnvpyk5w.js";
import { k5t } from "./chunk-9ydxdv5d.js";
import { o, v, oe, T, u, Ue, $e, me, B, A } from "./chunk-0bqrj5ah.js";
import { oW, clr, gSe, eee } from "./chunk-4zb0cwjd.js";
import { readdir as St, readFile as dt } from "fs/promises";
var Dcr = "RunMonitorCommand",
  bt = "refuse_under_other_rules",
  ut = "monitor_input",
  Rt =
    "this environment read no permission settings when it started, so it can't tell which rules apply and runs no monitor. Retrying won't help.",
  gt =
    "this environment was started with a permission rule that can't be fully applied to a monitor, so it runs none, whatever the command. Retrying won't help.",
  yt = 600000,
  Mt = 4,
  Et = 2000,
  Tt = 1e5,
  xt = 64,
  vt = 1024,
  at = 33554432,
  Ot = 250,
  At = 500,
  It = 1500,
  kt = 5,
  Lt = p(() =>
    Ue({
      command: o().min(1).max(Tt).refine(xI, "command contains control characters"),
      timeout_ms: v().int().min(1000),
      deny_rules: T(o().max(vt)).max(xt).default([]),
      [ut]: me(o(), oe()).optional(),
      [bt]: A(!0)
    })
  ),
  ne = p(() =>
    Ue({
      monitor_event: $e([
        Ue({ started: A(!0) }),
        Ue({ lines: o(), suppressed: v().int().positive().optional() })
      ])
    })
  ),
  re = p(() =>
    u({
      ended: B(["exited", "deadline", "too_much_output", "call_ended"]),
      exitCode: v(),
      finalLines: o().optional(),
      suppressed: v().int().positive().optional(),
      stderrTail: o().optional()
    })
  );
function Nt({ tryConsume: w, killAfterMs: f, quietGapMs: t, now: r, send: e, onFlood: s }) {
  let n = 0,
    h,
    S = 0,
    g = !1;
  return {
    take: (y) => {
      if (g) return;
      if (w()) {
        if ((e({ lines: y, ...(n > 0 && { suppressed: n }) }), (n = 0), r() - S > t)) h = void 0;
        return;
      }
      if (((n += 1), (S = r()), (h ??= S), S - h > f)) ((g = !0), s());
    },
    unreported: () => n
  };
}
var Pt = new W(() => ({ running: 0 }));
async function zt(w) {
  let f = await St("/proc").catch(() => []),
    t = new Map(),
    r = 0;
  return (
    await Promise.all(
      f
        .filter((e) => /^\d+$/.test(e))
        .map(async (e) => {
          let s = await dt(`/proc/${e}/stat`, "utf8").catch(() => ""),
            n = oW(s);
          if (clr(s) === w && n !== void 0) (t.set(Number(e), n), (r += eee(gSe(s)) ? 0 : 1));
        })
    ),
    { pinned: t, alive: r }
  );
}
async function Ut(w) {
  let f = w.pid;
  if (f <= 1) return;
  let t = async (e) => {
      if (O() !== "linux" && O() !== "wsl")
        try {
          return process.kill(-f, e);
        } catch {
          return !1;
        }
      let { pinned: s, alive: n } = await zt(f),
        h = s.get(f);
      if (h !== void 0 && h !== w.startToken) return !1;
      if (e !== 0) await b2t(s, e);
      return n > 0;
    },
    r = await t("SIGTERM");
  for (let e = Date.now() + It; r && Date.now() < e;) (await X(50), (r = await t(0)));
  for (let e = 0; r && e < kt; e++) r = await t("SIGKILL");
}
async function NJr(w, f, t) {
  let { command: r, timeout_ms: e, deny_rules: s, [ut]: n } = Lt().parse(w),
    h = k5t(t.meta);
  if (n !== void 0 && !h)
    throw Error(
      "RunMonitorCommand was not run: its monitor_input goes with a ToolHost permission request that this server decides, and it brought none, or this server decides none. Retrying won't help."
    );
  if (h && (n === void 0 || s.length > 0))
    throw Error(
      "RunMonitorCommand was not run: a ToolHost permission request goes with the monitor_input it judged, and with no rules of its own. Retrying won't help."
    );
  let S = t.reportProgress;
  if (S === void 0)
    throw Error(
      "RunMonitorCommand was not run: the call sent no progress token, so the command's output would have nowhere to go. Call again with _meta.progressToken set."
    );
  let g = t.launchPermissionContext;
  if (g === void 0)
    throw new R(
      `RunMonitorCommand was not run: ${Rt}`,
      "RunMonitorCommand: read no launch settings"
    );
  let G = P3().filter((d) => mQr([d]).length === 0);
  if (
    n === void 0 &&
    [g.alwaysDenyRules, g.alwaysAskRules]
      .flatMap((d) => Object.values(d).flatMap((c) => c ?? []))
      .some((d) => !s.includes(d) && !G.includes(d))
  )
    throw new R(
      `RunMonitorCommand was not run: ${gt}`,
      "RunMonitorCommand: holds a rule that the call did not bring"
    );
  let y = So(t.session).cwd,
    K = !1,
    lt = t.session.subscribe(() => {
      K ||= So(t.session).cwd !== y;
    }),
    m,
    N,
    q;
  try {
    if (n === void 0) m = await t.checkAsServedTool(Be, { command: r }, s);
    else {
      let { checkMonitorRun: d } = await import("./chunk-6jrjq0k3.js"),
        c = await d({
          name: Dcr,
          meta: t.meta,
          input: n,
          command: r,
          toolUseContext: t.toolUseContext(),
          launchPermissionContext: g
        });
      if (((m = c), "claim" in c)) N = c;
    }
    q = "toolUseContext" in m ? So(m.toolUseContext.session).cwd : y;
  } finally {
    lt();
  }
  if ("rejection" in m && n !== void 0)
    throw new R(m.rejection, "RunMonitorCommand: refused by the ToolHost check");
  if ("rejection" in m)
    throw new R(m.rejection, "RunMonitorCommand: refused by the served Bash check");
  let { session: Y, abortController: P } = m.toolUseContext;
  if (K || So(t.session).cwd !== y)
    throw Error(
      "RunMonitorCommand was not run: another call changed the working directory while this one was being checked. Send it again to have it checked where it would now start."
    );
  let z = Pt.of(Y.host);
  if (z.running >= Mt)
    throw Error(
      "RunMonitorCommand was not run: this environment already runs as many monitors as it allows at once. Stop one first."
    );
  let V = N?.claim();
  if (V === "barred")
    throw Error(
      "RunMonitorCommand was not run: this session was already told that this call had not started, so it can no longer run. Send a new call."
    );
  if (V === "started_before")
    throw Error(
      "RunMonitorCommand was not run again: this very call was already started here once. Check what it did before you send a new call."
    );
  let a = new AbortController();
  ((z.running += 1),
    a.signal.addEventListener(
      "abort",
      () => {
        z.running -= 1;
      },
      { once: !0 }
    ));
  let J = () => P.signal.aborted || t.callerGone?.aborted === !0,
    M = () => a.abort();
  (P.signal.addEventListener("abort", M, { once: !0 }),
    t.callerGone?.addEventListener("abort", M, { once: !0 }));
  let U = (d) => ({
      summary: "stopped with its call",
      output: { ended: "call_ended", exitCode: d }
    }),
    D,
    H;
  try {
    if (J()) return U(-1);
    let [{ exec: d }, c, { logFeatureSad: mt }, E, C] = await Promise.all([
        import("./chunk-xtjz7z1h.js"),
        import("./chunk-eqkj070j.js"),
        import("./chunk-twf9jcbt.js"),
        import("./chunk-hk821svx.js"),
        import("./chunk-my2r5kd4.js")
      ]),
      x = "exited",
      I,
      k = (i) => {
        if (!a.signal.aborted) ((x = i), (I = i === "deadline" ? F.drain() : void 0), a.abort());
      },
      Z = (i) => {
        S(_({ monitor_event: i })).catch(() => {});
      },
      Q = !1,
      tt = () => {
        if (!Q) ((Q = !0), Z({ started: !0 }));
      },
      ct = (i) => {
        (tt(), Z(i));
      },
      pt = C.createTokenBucket(C.BUCKET_CAPACITY, C.TOKEN_REFILL_MS),
      j = Nt({
        tryConsume: () => pt.tryConsume(),
        killAfterMs: E.SUSTAINED_SUPPRESSION_KILL_MS,
        quietGapMs: C.TOKEN_REFILL_MS * 3,
        now: Date.now,
        send: ct,
        onFlood: () => k("too_much_output")
      }),
      F = E.createStreamLineBatcher((i) => {
        if (!a.signal.aborted) j.take(i);
      }),
      et = Math.min(e, yt),
      nt = 0,
      { storageV5: ft, sessionEnvVars: ht, toolUseId: wt } = m.toolUseContext,
      ot = c.shouldUseSandbox({ command: r }),
      rt = c.sandboxPolicyRefusal(ot, r, !1, "bash");
    if (rt !== null)
      throw (
        mt("sandbox_exec", "sandbox_policy_refusal", { tool: b("monitor") }),
        new R(rt, "RunMonitorCommand: refused by the sandbox policy")
      );
    let l = await d(r, a.signal, "bash", {
        session: Y,
        cwd: q,
        storageV5: ft,
        sessionEnvVars: ht,
        sandboxAttributionId: wt,
        preventCwdChanges: !0,
        shouldUseSandbox: ot,
        timeout: et + 60000,
        onStdout: (i) => {
          if (a.signal.aborted) return;
          if (((nt += i.length), nt > at)) {
            k("too_much_output");
            return;
          }
          F.onData(i);
        }
      }),
      it =
        l.pid === void 0
          ? void 0
          : { pid: l.pid, startToken: oW(await dt(`/proc/${l.pid}/stat`, "utf8").catch(() => "")) };
    try {
      let i = l.status === "completed" ? (await l.result).preSpawnError : void 0;
      if (i !== void 0) throw new R(i, "RunMonitorCommand: the shell could not be started");
      if (l.status === "killed") return U(-1);
      (tt(),
        (D = setTimeout(k, et, "deadline")),
        (H = setInterval(
          (_t, Ct) => {
            if (_t.totalBytes > at) Ct("too_much_output");
          },
          Ot,
          l.taskOutput,
          k
        )));
      let L = await l.result;
      if ((clearTimeout(D), clearInterval(H), !a.signal.aborted))
        await Promise.race([l.outputEnded, X(At, a.signal)]);
      if (J()) return U(L.code);
      if (!a.signal.aborted) ((I = F.drain()), a.abort());
      let st = Ja(L.stderr, Et);
      return {
        summary:
          x === "exited"
            ? `exit ${L.code}`
            : x === "deadline"
              ? "stopped at its time limit"
              : "stopped for printing too much",
        output: {
          ended: x,
          exitCode: L.code,
          ...(I !== void 0 && { finalLines: I }),
          ...(j.unreported() > 0 && { suppressed: j.unreported() }),
          ...(st !== "" && { stderrTail: st })
        }
      };
    } finally {
      if ((l.cleanup(), it !== void 0)) await Ut(it);
      (await l.taskOutput.flush(), await l.taskOutput.deleteOutputFile());
    }
  } finally {
    (clearTimeout(D),
      clearInterval(H),
      a.abort(),
      N?.release(),
      P.signal.removeEventListener("abort", M),
      t.callerGone?.removeEventListener("abort", M));
  }
}
export { Dcr, NJr };

//# sourceMappingURL=chunk-y7erc8fz.js.map
