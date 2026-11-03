import {
  fileURLToPath as __filePath_03ca1b907554edaa,
  URL as __filePath_03ca1b907554edaa_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { N, d, E, Vt } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { F } from "./chunk-wrtp8qz8.js";
import { Jfe, i } from "./chunk-cj37hmns.js";
import { _, am, t } from "./chunk-4kxznmzw.js";
import { re, Or } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { g, m } from "./chunk-brszmkb3.js";
import { Hu } from "./chunk-dvghjmtr.js";
import { cB, Yj, TH, oot } from "./chunk-5rw2zfa0.js";
import { cC } from "./chunk-928ws1pg.js";
import { Q$ } from "./chunk-ak0cmk10.js";
import { V0 } from "./chunk-8w2npe9a.js";
import { er } from "./chunk-1e5yp9hx.js";
import { T8o, Mai, vbe, O8o, ofe, kbe, ZE, Gp, Xm, kb, hM } from "./chunk-7c3thgax.js";
import { Dw, hEt } from "./chunk-ajtyjx88.js";
import { V5 } from "./chunk-znkwh1rm.js";
import { Kn } from "./chunk-x8k0r295.js";
import { Sx } from "./chunk-nyp7c93y.js";
import { GX, KPe, qee } from "./chunk-kjgmmff6.js";
import { Vwe } from "./chunk-cde8bj1c.js";
import { _m } from "./chunk-0hjcje8e.js";
import { xu } from "./chunk-zvsmc5fn.js";
import { c_e } from "./chunk-yw4wqxm9.js";
import { _he, nln, She, jne, cY } from "./chunk-6h7ejyet.js";
import { Ett, R7 } from "./chunk-cr7a2cdd.js";
import { Gm, Mtt } from "./chunk-g49hnbqz.js";
import { hoo } from "./chunk-dxz4d5b1.js";
import { boo, Soo } from "./chunk-3k5jtphb.js";
import { _ms } from "./chunk-5gx8aqe4.js";
import { Kj } from "./chunk-qzh3w7y7.js";
import { lstat as Je, stat as je } from "fs/promises";
import { join as ze } from "path";
import { randomUUID as Re } from "crypto";
var de = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
  ke = 2500,
  oe = 3000,
  ye = 1024,
  Ie = 320,
  Y = /^cse_[A-Za-z0-9_]{1,124}$/,
  Ae = /^env_[A-Za-z0-9_-]{1,124}$/,
  Oe = new Set(
    [
      ...Vwe,
      ...KPe,
      ...Ue([...O8o, ...TH, "CLAUDE_BRIDGE_OAUTH_TOKEN"]),
      ...Yj.filter((e) => e !== "ANTHROPIC_BASE_URL"),
      "CLAUDE_BRIDGE_BASE_URL",
      "CLAUDE_BRIDGE_SESSION_INGRESS_URL",
      "CLAUDE_REMOTE_TOOLS_BRIDGE_URL",
      "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
      "CLAUDE_CODE_ACCOUNT_UUID",
      "CLAUDE_CODE_ORGANIZATION_UUID",
      "CLAUDE_CODE_USER_EMAIL",
      "CLAUDE_CODE_ENVIRONMENT_KIND",
      "CLAUDE_CODE_SESSION_KIND",
      "CLAUDE_BG_SESSION_PERMISSION_RULES",
      "CLAUDE_JOB_DIR"
    ].map((e) => ofe(e))
  ),
  le = new Set([...oot, "CLAUDE_CODE_HOST_CREDS_FILE"]),
  Ce = new Set([
    ...le,
    "ANTHROPIC_FEDERATION_RULE_ID",
    "ANTHROPIC_ORGANIZATION_ID",
    "ANTHROPIC_PROFILE",
    "ANTHROPIC_CONFIG_DIR"
  ]),
  be = new Set([
    ...cB.filter((e) => e.startsWith("CLAUDE_CODE_USE_")),
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"
  ]);
function De(e, { unattendedGrant: o, withoutShellSecrets: a, testVm: T }) {
  let p = T8o() ? Mai() : void 0;
  if (p === void 0) throw ue();
  let R = ofe(p),
    I = ofe(de),
    c = { ...e };
  for (let [y, k] of Object.entries(c)) {
    let v = ofe(y);
    if (le.has(v) && fe(v, k, e)) throw ce();
    if (Oe.has(v) || v === R || v === I || v.endsWith("_FILE_DESCRIPTOR")) delete c[y];
  }
  if ((qee(c), GX(c), (c[p] = "1"), a)) {
    let y = new Set(Jfe(i));
    for (let k of kbe(c)) if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(k) && y.has(k))) delete c[k];
    (delete c.SSH_AGENT_PID, Object.assign(c, vbe(c).respelled));
  }
  if (o !== void 0) c[de] = o;
  return c;
}
function Le({ workId: e, environmentId: o }, a) {
  let T = Y.test(e) && Ae.test(o);
  if (!T)
    t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return (
    _({
      type: "control_request",
      request_id: a,
      request: {
        subtype: "initialize",
        ...(T && { attachServeRequest: { workId: e, environmentId: o } })
      }
    }) +
    `
`
  );
}
function te(e) {
  if (!T8o()) return ue();
  for (let [a, T] of Object.entries(e)) {
    let p = ofe(a);
    if (fe(p, T, e))
      return (
        t(`[tool-host] no helper: ${p} says this process signs in or sends its traffic elsewhere`, {
          level: "error"
        }),
        ce()
      );
  }
  let o = _m();
  if (o)
    return (
      t(`[tool-host] ${o}`, { level: "error" }),
      Error("tool host helper: the process wrapper is not usable")
    );
  return;
}
function ae(
  e,
  {
    env: o,
    unattendedGrant: a,
    withoutShellSecrets: T,
    testVm: p,
    selfInvocation: R = () => xu({ pinToCurrentBinary: !0 }),
    spawn: I = V0,
    after: c = xe,
    killTree: y = Dw
  }
) {
  let k = te(o);
  if (k !== void 0) throw k;
  if (!Y.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let v = R(),
    h = I(
      v.cmd,
      [
        ...v.prefixArgs,
        "--attach-serve",
        e.sessionId,
        "--input-format",
        "stream-json",
        "--output-format",
        "stream-json"
      ],
      {
        cwd: e.folder,
        env: De(o, {
          unattendedGrant: a,
          withoutShellSecrets: T,
          ...(p !== void 0 && { testVm: p })
        }),
        extendEnv: !1,
        stdio: ["pipe", "pipe", "pipe"],
        windowsHide: !0,
        toolCgroupClass: "agent"
      }
    ),
    { promise: b, resolve: U } = Promise.withResolvers(),
    w = !1,
    P = Buffer.alloc(0);
  function D(H, f) {
    if (w) return;
    w = !0;
    let S = K(am(Or(P.toString("utf8"))));
    U({ code: H, signal: f, stderrFirstLine: S === "" ? void 0 : re(S, Ie) });
  }
  try {
    (h.on("exit", D),
      h.on("error", (H) => {
        if ((t(`[tool-host] helper process error: ${K(d(H))}`), !w))
          (D(null, null), q(h, "SIGKILL"));
      }));
    for (let H of [h.stdin, h.stdout, h.stderr]) H?.on("error", () => {});
    if (
      (h.stdout?.on("data", () => {}),
      h.stderr?.on("data", (H) => {
        let f = ye - P.length;
        if (f > 0) {
          let S = typeof H === "string" ? Buffer.from(H) : H;
          P = Buffer.concat([P, S.subarray(0, f)]);
        }
      }),
      h.pid === void 0 || h.stdin === null)
    )
      D(null, null);
    else h.stdin.write(Le(e, Re()));
  } catch (H) {
    throw (q(h, "SIGKILL"), H);
  }
  let M;
  return {
    pid: h.pid,
    exited: b,
    stop(H) {
      if (w) return Promise.resolve();
      return (
        (M ??= new Promise((f) => {
          t(`[tool-host] stopping helper (${H})`);
          let S = O() === "windows";
          try {
            h.stdin?.end();
          } catch {}
          if (!S) q(h, "SIGTERM");
          let V = c(ke, () => {
              if (S && h.pid !== void 0) y(h.pid).catch(() => {});
              else q(h, "SIGKILL");
            }),
            L = c(oe, f);
          b.then(() => {
            (V(), L(), f());
          });
        })),
        M
      );
    }
  };
}
function K(e) {
  return e.replace(
    /(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g,
    "<id>"
  );
}
function fe(e, o, a) {
  if (!o) return !1;
  if (be.has(e)) return Ne(o);
  return (
    Ce.has(e) ||
    (e === "ANTHROPIC_BASE_URL" && !Ve(o, a)) ||
    (e.startsWith("CLAUDE_LOCAL_OAUTH_") && !pe(o))
  );
}
function ue() {
  return Error("tool host helper: this build cannot hold a helper to the stored login");
}
function ce() {
  return Error("tool host helper: this process signs in or sends its traffic elsewhere");
}
function Ue(e) {
  return e.flatMap((o) => [o, `INPUT_${o}`]);
}
function Ve(e, o) {
  if (Hu(e)) return !0;
  return Ne(o.USE_LOCAL_OAUTH) && pe(e);
}
function pe(e) {
  try {
    return ["localhost", "127.0.0.1", "[::1]"].includes(new URL(e).hostname);
  } catch {
    return !1;
  }
}
function xe(e, o) {
  let a = setTimeout(o, e);
  return (a.unref(), () => clearTimeout(a));
}
function q(e, o) {
  try {
    e.kill(o);
  } catch (a) {
    t(`[tool-host] ${o} not delivered: ${K(d(a))}`);
  }
}
var Me = 4,
  _e = 30000,
  ne = 600000,
  ge = 3,
  me = 10,
  We = 3,
  Fe = 2500,
  Be = 5000,
  Ge = 30000,
  $e = 64,
  Ke = 128;
function Te(e) {
  let o = e.now ?? Date.now,
    a = new Map(),
    T = new Set(),
    p = new Map(),
    R = 0,
    I = new Set(),
    c = new Map(),
    y = new Map(),
    k = [],
    { NEGATIVE_INFINITY: v, NEGATIVE_INFINITY: h } = Number;
  async function b(n, r) {
    if (r.signal.aborted) return "unsettled";
    let s = Ee(n, r);
    if (s === void 0)
      return (t("[tool-host] item or environment id unusable; item left"), "unsettled");
    if (a.has(s) || [...I].some((G) => G.workId === s)) return (w(r, s), "handled");
    if (T.has(s)) return "unsettled";
    let u = typeof n.data === "object" && n.data !== null && "id" in n.data ? n.data.id : void 0,
      C = typeof u === "string" && Y.test(u) ? cC(u) : void 0;
    if (typeof u !== "string" || C === void 0 || C === cC(s))
      return (t("[tool-host] session id unusable; item stopped"), J(a, s, !0), w(r, s), "handled");
    let z = U(u);
    if (z !== void 0) return P(r, s, u, z);
    if (o() < R) return "unsettled";
    T.add(s);
    try {
      await e.api.acknowledgeWork(r.environmentId, s, r.environmentSecret, c_e(s));
    } catch (G) {
      if (D(G, s) !== "give_up") return "unsettled";
      let ee = se(G);
      return P(r, s, u, "start_failed", ee === 404 || ee === 409 || ee === 410);
    } finally {
      T.delete(s);
    }
    p.delete(s);
    let A = r.signal.aborted ? "start_failed" : U(u);
    if (A !== void 0) return P(r, s, u, A);
    J(a, s, !0);
    let Q = o(),
      j;
    try {
      j = e.spawnHelper({
        sessionId: u,
        workId: s,
        environmentId: r.environmentId,
        folder: e.folder
      });
    } catch (G) {
      return (
        t(`[tool-host] helper not started: ${K(d(G))}`, { level: "error" }),
        L(u),
        P(r, s, u, "start_failed")
      );
    }
    let W = c.get(u);
    if (W !== void 0)
      ((W.stoppedHere = !0),
        x("supersede", async () => {
          (await W.handle.stop("superseded"), H(W));
        }));
    let B = {
      sessionId: u,
      workId: s,
      startedAt: Q,
      handle: j,
      stoppedHere: !1,
      startedTimer: void 0
    };
    return (
      (B.startedTimer = setTimeout(V, _e, B)),
      B.startedTimer.unref?.(),
      I.add(B),
      c.set(u, B),
      S(),
      x("exit", async () => M(B, await j.exited)),
      w(r, s),
      x("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)),
      f({ kind: "started" }),
      "handled"
    );
  }
  function U(n) {
    if (!ie(e.switches.gateOn)) return "gate_off";
    if (!ie(e.switches.servingOn) || o() - h < ne) return "serving_off";
    if (!ie(e.switches.folderServed)) return "not_served";
    let r = o() - ne,
      s = y.get(n) ?? [];
    if (F(s, (C) => C > r) >= ge || F(k, (C) => C > r) >= me) return "at_capacity";
    let u = c.has(n) ? 1 : 0;
    return I.size - u >= Me ? "at_capacity" : void 0;
  }
  function w(n, r) {
    x("stop", () => e.api.stopWork(n.environmentId, r, n.environmentSecret, !0, c_e(r)));
  }
  function P(n, r, s, u, C = !1) {
    if ((J(a, r, !0), !C)) (Z(s, r, u), f({ kind: "refused", code: u }));
    return (w(n, r), m("bridge_tool_host_work", C ? "withdrawn" : u), "handled");
  }
  function D(n, r) {
    let s = se(n);
    if ((t(`[tool-host] acknowledge failed (${s ?? "no response"})`), s === 429))
      R = o() + Math.min(boo(n) ?? Be, Ge);
    let u = (p.get(r) ?? 0) + 1;
    if (Soo(n) || u >= We) return (p.delete(r), "give_up");
    return (J(p, r, u), "retry");
  }
  function M(n, r) {
    let s = o() - n.startedAt,
      u = !n.stoppedHere && r.code !== 0,
      C = u && r.code === Kj,
      z = C && o() - v < ne;
    if (C) v = o();
    let A = !u ? void 0 : z ? "serving_off" : s < _e ? "start_failed" : "helper_exited";
    if (A === "start_failed") L(n.sessionId);
    if (A === "serving_off") h = o();
    if (A === "start_failed" || A === "serving_off") V(n, A);
    if ((H(n), A !== void 0)) Z(n.sessionId, n.workId, A);
    f({ kind: "ended", code: A, stoppedHere: n.stoppedHere });
    let Q = r.signal ?? `exit code ${r.code ?? "none"}`,
      j = A === void 0 ? "" : `, reported as ${A}`,
      W = u && r.stderrFirstLine !== void 0 ? `: ${r.stderrFirstLine}` : "";
    e.logger.logVerbose(
      `Tool helper for a cloud session ended (pid ${n.handle.pid ?? "none"}, ${Q}, after ${Math.round(s / 1000)}s${j}${W})`
    );
  }
  function H(n) {
    V(n);
    let r = I.delete(n);
    if (c.get(n.sessionId) === n) c.delete(n.sessionId);
    if (r) S();
  }
  function f(n) {
    x("event", () => e.onEvent?.(n));
  }
  function S() {
    x("live count report", () => e.onLiveCountChange(I.size));
  }
  function V(n, r) {
    if (n.startedTimer === void 0) return;
    if ((clearTimeout(n.startedTimer), (n.startedTimer = void 0), r === void 0))
      g("bridge_tool_host_work");
    else m("bridge_tool_host_work", r);
  }
  function L(n) {
    let r = o();
    k = k.concat(r).slice(-me);
    let s = y.get(n) ?? [];
    (y.delete(n), J(y, n, s.concat(r).slice(-ge)));
  }
  function Z(n, r, s) {
    x("report", () => e.api.refuseToolHost?.(n, r, s, AbortSignal.timeout(Fe)));
  }
  return {
    async handle(n, r) {
      try {
        return await b(n, r);
      } catch (s) {
        (m("bridge_tool_host_work", "handler_threw"),
          t(`[tool-host] handling a request failed unexpectedly (${Se(s)})`, { level: "error" }));
        try {
          let u = Ee(n, r);
          if (u !== void 0) return (J(a, u, !0), w(r, u), "handled");
        } catch {}
        return "unsettled";
      }
    },
    async sweep(n) {
      let r = n === "shutdown" ? "helper_exited" : "gate_off";
      await Promise.allSettled(
        [...I].map(async (s) => {
          if (!s.stoppedHere) Z(s.sessionId, s.workId, r);
          ((s.stoppedHere = !0), await s.handle.stop(n), H(s));
        })
      );
    },
    liveCount: () => I.size
  };
}
function Ee(e, o) {
  let a = e.id;
  return typeof a === "string" && a.length <= Ke && Q$(a) && Q$(o.environmentId) ? a : void 0;
}
function x(e, o) {
  (async () => {
    try {
      await o();
    } catch (a) {
      t(`[tool-host] ${e} failed (${Se(a)})`);
    }
  })();
}
function Se(e) {
  let o = se(e);
  if (o !== void 0) return `status ${o}`;
  return e instanceof Error ? e.name : "unknown";
}
function ie(e) {
  try {
    return e();
  } catch (o) {
    return (
      t(`[tool-host] a switch could not be read, taken as off: ${K(d(o))}`, { level: "error" }),
      !1
    );
  }
}
function J(e, o, a) {
  e.set(o, a);
  for (let T of e.keys()) {
    if (e.size <= $e) break;
    e.delete(T);
  }
}
function se(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number"
    ? e.status
    : void 0;
}
function he() {
  if (
    (er(),
    Xm().settings.disableRemoteControl === !0 ||
      hM("disableRemoteControl").some((e) => e === !0) ||
      Gp().some((e) => e.disableRemoteControl === !0))
  )
    return !0;
  return [...kb(), ...ZE("flagSettings"), ...ZE("userSettings")].some((e) => {
    if (e.path === "") return !0;
    if (e.statusOnly) return !1;
    return e.severity !== "warning" || e.path === "disableRemoteControl";
  });
}
var qe = { macos: "darwin", linux: "linux", windows: "win32" };
async function Xe(e) {
  let o = e.gate();
  if (o === !1) return { kind: "withdraw", blocker: "gate_off" };
  let a = e.localDeviceFlag();
  if (a === !1) return { kind: "withdraw", blocker: "flag_off" };
  let T = qe[e.platform()];
  if (T === void 0) return { kind: "withdraw", blocker: "platform" };
  let p = await e.offReason();
  if (p !== void 0 && p !== "unknown") return { kind: "withdraw", blocker: p };
  if (!(await e.signsInFromStoredLogin())) return { kind: "withdraw", blocker: "not_stored_login" };
  let R = await e.gitEntry();
  if (R === "other") return { kind: "withdraw", blocker: "not_git_checkout" };
  if (await e.inExcludedRepository()) return { kind: "withdraw", blocker: "excluded_repository" };
  if (o === "unknown" || a === "unknown") return { kind: "unknown", waitingOn: "feature_flags" };
  if (p === "unknown") return { kind: "unknown", waitingOn: "policy" };
  return {
    kind: "advertise",
    advert: {
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_03ca1b907554edaa(
          new __filePath_03ca1b907554edaa_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      platform: T
    },
    ...(R === "absent" && { withoutGit: !0 })
  };
}
function whr(e, o, a = _ms) {
  return {
    gate: a,
    localDeviceFlag: () => (Mtt() ? !1 : Gm() || "unknown"),
    platform: O,
    offReason: async () => {
      let T = cY(e);
      if (T === "profile_dirs_unread" || T === "profile_dirs_unreadable")
        (await _he(), (T = cY(e)));
      if (T !== void 0) return T;
      let { servedToolsUnavailableReason: p } = await import("./chunk-d6yrb8bq.js"),
        R = p();
      return R === "policy_org" && !R7() ? "unknown" : R;
    },
    signsInFromStoredLogin: () => Ye(o),
    gitEntry: () => Ze(e),
    inExcludedRepository: () => hoo(e)
  };
}
async function Ye(e) {
  if (Sx() !== void 0 || !hEt()) return !1;
  let o = await Kn().readAsync(e);
  return Boolean(o?.claudeAiOauth?.refreshToken);
}
async function Ze(e) {
  try {
    let o = await Je(ze(e, ".git"));
    return o.isDirectory() || o.isFile() ? "root" : "other";
  } catch (o) {
    if (E(o) === "ENOENT")
      return (
        await je(e).catch((p) => {
          if (!Vt(p)) l(N(p));
          return;
        })
      )?.isDirectory()
        ? "absent"
        : "other";
    if (!Vt(o)) l(N(o));
    return "other";
  }
}
var Qe = 3000,
  eo = 120000,
  oo = { feature_flags: "flags_unloaded", policy: "policy_unloaded", failed_read: "error" },
  we = 1e4,
  He = 60000;
async function foo({
  dir: e,
  credentials: o,
  log: a,
  checks: T = whr(e, o),
  signals: p = [jne, V5, Ett, nln],
  refuse: R,
  onVerdict: I
}) {
  let c = { kind: "unknown", waitingOn: "feature_flags" },
    y = "gate_off",
    k = !1,
    v,
    h = Number.NEGATIVE_INFINITY,
    b,
    U = performance.now(),
    w;
  function P(f) {
    if (f.kind !== "unknown") return ((U = void 0), clearTimeout(w), (w = void 0), f);
    U ??= performance.now();
    let S = eo - (performance.now() - U);
    if (S <= 0) return { kind: "withdraw", blocker: oo[f.waitingOn] };
    if (w === void 0)
      ((w = setTimeout(() => {
        ((w = void 0), D());
      }, S)),
        w.unref?.());
    return f;
  }
  async function D() {
    try {
      let f;
      try {
        f = await Xe(T);
        let L = f.kind === "advertise" ? R?.() : void 0;
        if (L !== void 0) f = { kind: "withdraw", blocker: L };
      } catch (L) {
        (l(N(L)), (f = { kind: "unknown", waitingOn: "failed_read" }));
      }
      if (k) return;
      let S = P(f);
      if (((c = S), I?.(S), S.kind === "unknown")) return;
      let V =
        S.kind === "advertise"
          ? S.withoutGit
            ? "advertised_without_git"
            : "advertised"
          : S.blocker;
      if (V !== y)
        ((y = V),
          a(
            `cloud sessions may use this folder: ${S.kind === "advertise" ? (S.withoutGit ? "yes (not the top folder of a git repository)" : "yes") : `no (${S.blocker})`}`
          ));
    } catch (f) {
      l(N(f));
    }
  }
  function M() {
    if (v !== void 0) {
      v();
      return;
    }
    if (k || b !== void 0) return;
    if (c.kind === "unknown") {
      D();
      return;
    }
    let f = Date.now() - h,
      S = f >= 0 && f < He ? Math.max(we, He - f) : we;
    ((b = setTimeout(() => {
      ((b = void 0), (h = Date.now()), D());
    }, S)),
      b.unref?.());
  }
  await D();
  let H = p.map((f) => f(M));
  if (c.kind === "unknown" && c.waitingOn === "feature_flags") {
    let f = new AbortController();
    ((v = () => {
      D().then(() => {
        if (c.kind !== "unknown") f.abort();
      });
    }),
      await X(Qe, f.signal),
      (v = void 0));
  }
  return {
    getToolHostAdvert: () =>
      c.kind === "advertise" ? { kind: "advertise", advert: c.advert } : { kind: c.kind },
    stop: () => {
      k = !0;
      for (let f of H) f();
      (clearTimeout(b), (b = void 0), clearTimeout(w), (w = void 0));
    }
  };
}
function AOn(e) {
  return (
    e.kind === "withdraw" &&
    (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted")
  );
}
function poo({ dir: e, checks: o, isOfferingFolder: a, hasAccessToken: T }) {
  function p() {
    return cY(e, { ignoringMute: !0 });
  }
  return {
    gateOn: () => o.gate() === !0 && o.localDeviceFlag() === !0 && !She(),
    servingOn: () => {
      if (!T() || !a() || vhr() !== void 0) return !1;
      let R = p();
      if (R !== void 0 && R !== "launched_from_home") return !1;
      return !he();
    },
    folderServed: () => p() !== "launched_from_home"
  };
}
function vhr(e = ve()) {
  let o = te(e);
  if (o === void 0) return;
  return o.message.includes("signs in or sends its traffic elsewhere")
    ? "other_sign_in"
    : "no_helper";
}
function moo(e, o) {
  return Te({ ...e, spawnHelper: (a) => ae(a, { env: ve(), ...o }) });
}
async function goo(e) {
  try {
    await Pe(e.sweep("shutdown"), oe);
  } catch (o) {
    l(N(o));
  }
}
function ve() {
  return process.env;
}
export { whr, foo, AOn, poo, vhr, moo, goo };

//# sourceMappingURL=chunk-8s2ew1st.js.map
