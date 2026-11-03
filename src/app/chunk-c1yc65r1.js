import {
  fileURLToPath as __filePath_9c2974765ad0f143,
  URL as __filePath_9c2974765ad0f143_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { pa, k, ue } from "./chunk-ajtyjx88.js";
import { Ne, De } from "./chunk-2qx8pe6s.js";
import { U, AYe } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { R, d, E, Er, tw, Lit, Nit, G } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { qf, i } from "./chunk-cj37hmns.js";
import { _, te, Vo, yn, t } from "./chunk-4kxznmzw.js";
import { re, Ja, SX, zr } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { fe } from "./chunk-xe386mry.js";
import { II } from "./chunk-8w2npe9a.js";
import { it } from "./chunk-qmmh8tq2.js";
import { le } from "./chunk-vw9e882a.js";
import { Gw, Lfe, _A } from "./chunk-rhk37je5.js";
import { J4e, Gfe } from "./chunk-t0wrcf3t.js";
import { B4e, vu, cZo, uZo, gt } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { cB, Yj, TH, cfe, mqt, vZ, ko, hqt } from "./chunk-5rw2zfa0.js";
import { SR } from "./chunk-7c3thgax.js";
import { he } from "./chunk-95k4nfdh.js";
import { oy, An } from "./chunk-at88wjsn.js";
import { Kn } from "./chunk-x8k0r295.js";
import { T0 } from "./chunk-bh50mq9d.js";
import { A0 } from "./chunk-tv3shk24.js";
import { bl } from "./chunk-jwqtbev0.js";
import { XJe, JJe, TLr, Qp } from "./chunk-b9vagsrs.js";
import { eC, K7n, nm, _m, A$, Gzo, zzo, ptt, fz } from "./chunk-0hjcje8e.js";
import { xu, Tze, Z7e, E8, r1t } from "./chunk-zvsmc5fn.js";
import { qat, k3t, Xat } from "./chunk-t5yf7jby.js";
import { $P, eh } from "./chunk-6h7ejyet.js";
import { u3e, iD, Y6, sct, lJt, rHn, GIt, bE, BUe } from "./chunk-cpf0ynb1.js";
import { aUr, WT, Uqs, Iun, _$o, RY } from "./chunk-n2fmpv44.js";
import { Yan, Xan } from "./chunk-8w56k4pg.js";
import {
  Oc,
  Lan,
  wht,
  nde,
  Eht,
  OFt,
  eQe,
  Nan,
  tQe,
  nQe,
  AOo,
  Vqn,
  COo,
  aGe,
  oQe,
  qqn,
  Hne,
  _o,
  ad,
  Rl,
  lo,
  HOo
} from "./chunk-fnsjs1v2.js";
import { bh } from "./chunk-ay7ngexr.js";
import { POn, GX, gms, qee, HPt } from "./chunk-kjgmmff6.js";
import { _ht } from "./chunk-9gwe1sht.js";
import { utt, o5 } from "./chunk-h2tyaevk.js";
import { LW, fN } from "./chunk-p5xkyqjg.js";
import { PW } from "./chunk-jwhvhjej.js";
import { $xt, dN } from "./chunk-0bebdad1.js";
import { P4s, U_t } from "./chunk-4sp6n814.js";
import { ne } from "./chunk-39xmt821.js";
import { Qq } from "./chunk-psw7zg7w.js";
import { vS } from "./chunk-g2rqnn1x.js";
import { Qn } from "./chunk-n35x7axc.js";
import { gnn, hnn } from "./chunk-rb0rr2h5.js";
import { yG, Mk } from "./chunk-arcvz535.js";
import { Jye } from "./chunk-b10syt1j.js";
import { s9 } from "./chunk-ny2y84j1.js";
import { $a } from "./chunk-2bsye2b3.js";
import { FZo } from "./chunk-ct112gdr.js";
import { Yse } from "./chunk-19egh6zj.js";
import { Zm } from "./chunk-dsrz10z8.js";
import { Ce } from "./chunk-a2y39866.js";
var je = Ce(oy(), 1);
import { lstat as Mn, readFile as $n, realpath as Bn, rm as tt } from "fs/promises";
import { dirname as rt } from "path";
import { setTimeout as Ve } from "timers/promises";
import {
  access as fr,
  mkdir as pr,
  readFile as mr,
  stat as ct,
  unlink as gr,
  writeFile as hr
} from "fs/promises";
import { homedir as kt } from "os";
import { join as Le } from "path";
var we = "com.anthropic.claude-daemon",
  ke = { useCwd: !1, useToolMemoryCgroup: !1 };
async function F5e() {
  let r = i.XDG_RUNTIME_DIR || `/run/user/${process.getuid()}`;
  try {
    return (await ct(Le(r, "systemd"))).isDirectory();
  } catch {
    return !1;
  }
}
function Leo() {
  if (!qf()) return process.argv[1];
  return Le(s9(), "claude");
}
function ze(r) {
  return r.replace(/[\r\n]/g, " ").replaceAll("%", "%%");
}
function dt(r) {
  let e = ze(r);
  return e.includes(" ") ? `"${e}"` : e;
}
function Ye() {
  let r = i.XDG_CONFIG_HOME || Le(kt(), ".config");
  return Le(r, "systemd", "user", `${we}.service`);
}
async function Ct() {
  return ct(Ye()).then(
    () => !0,
    () => !1
  );
}
async function S3t(r) {
  let { jsonPath: e, logPath: n } = r,
    s = await ptt();
  if (s)
    return {
      ok: !1,
      error: `${s} \u2014 refusing to install a service that would run unwrapped`,
      serviceId: we,
      servicePath: ""
    };
  let h = [...nm(), ...__invocation_9c2974765ad0f143.servicePrefix(Leo())],
    w = i.PATH || "/usr/local/bin:/usr/bin:/bin";
  {
    let p = Ye(),
      S = `${we}.service`;
    try {
      let P = i.XDG_CONFIG_HOME || Le(kt(), ".config");
      (await pr(Le(P, "systemd", "user"), { recursive: !0 }),
        await hr(
          p,
          `[Unit]
Description=Claude Daemon
After=network-online.target
StartLimitIntervalSec=60
StartLimitBurst=10

[Service]
Type=simple
Environment="PATH=${ze(w)}"
ExecStart=${h.map(dt).join(" ")} daemon --json-path ${dt(e)} --log-file ${dt(n)} --origin service
Restart=always
RestartSec=1
StandardOutput=append:${ze(n)}
StandardError=append:${ze(n)}

[Install]
WantedBy=default.target
`,
          "utf8"
        ));
    } catch (P) {
      return { ok: !1, error: d(P), serviceId: we, servicePath: p };
    }
    await it("systemctl", ["--user", "daemon-reload"], ke);
    let {
      code: y,
      stderr: T,
      error: A
    } = await it("systemctl", ["--user", "enable", "--now", S], ke);
    if (y !== 0)
      return { ok: !1, error: T || A || "systemctl enable failed", serviceId: we, servicePath: p };
    return (
      await it("systemctl", ["--user", "restart", S], ke),
      { ok: !0, serviceId: we, servicePath: p }
    );
  }
  return {
    ok: !1,
    error: `service install not available on ${"linux"} \u2014 the daemon runs on demand instead`,
    serviceId: we,
    servicePath: ""
  };
}
async function ixt() {
  {
    let r = Ye(),
      e = `${we}.service`;
    await it("systemctl", ["--user", "disable", "--now", e], ke);
    try {
      await gr(r);
    } catch (n) {
      if (!G(n)) return { ok: !1, error: d(n) };
    }
    return (await it("systemctl", ["--user", "daemon-reload"], ke), { ok: !0 });
  }
  return { ok: !1, error: "service uninstall not available on linux" };
}
async function kpr() {
  return ut("start");
}
async function w3t() {
  return ut("stop");
}
async function Scs() {
  return ut("restart");
}
async function ut(r) {
  if (!1)
    switch (r) {
      case "start":
      case "stop":
      case "restart":
    }
  {
    let {
      code: e,
      stderr: n,
      error: s
    } = await it("systemctl", ["--user", r, `${we}.service`], ke);
    if (e !== 0) return { ok: !1, error: n || s || `systemctl ${r} failed` };
    return { ok: !0 };
  }
  return {
    ok: !1,
    error: `service ${r} not available on ${"linux"} \u2014 the daemon runs on demand instead`
  };
}
async function _r() {
  let r = Ye();
  if (!r) return null;
  let e;
  try {
    let n = await ct(r);
    if (!n.isFile() || n.size > 1048576) return null;
    e = await mr(r, "utf8");
  } catch {
    return null;
  }
  return [...(e.match(/^ExecStart=(.*)$/m)?.[1]?.matchAll(/"([^"]+)"|(\S+)/g) ?? [])].map(
    (n) => n[1] ?? n[2]
  );
}
function Pt(r) {
  return r.replaceAll("%%", "%");
}
async function Tpr() {
  let r = { execPathStale: !1, launcherPrefixDead: !1 },
    e = await _r();
  if (!e) return r;
  let n = e.lastIndexOf("daemon"),
    s = n > 0 ? e[n - 1] : void 0;
  if (!s) return r;
  try {
    await fr(Pt(s));
  } catch {
    r.execPathStale = !0;
  }
  let h = e.slice(0, n - 1).map(Pt);
  for (let w of zzo(h))
    if (!(await Gzo(w))) {
      r.launcherPrefixDead = !0;
      break;
    }
  return r;
}
async function Lee() {
  {
    let {
      code: r,
      stderr: e,
      error: n
    } = await it("systemctl", ["--user", "status", `${we}.service`], ke);
    if (n || e.includes("Failed to connect to bus")) return !1;
    return r === 0 || r === 3;
  }
  return !1;
}
class Tt {
  daemonConfirmedUp = !1;
  ensureInFlight = null;
  lastTransientSpawnAt = null;
  prefixAxis = "idle";
  prefixContractViolationLogged = !1;
  tmuxRgbApplied = !1;
  ownedBeacons = new Map();
  reset() {
    ((this.daemonConfirmedUp = !1),
      (this.ensureInFlight = null),
      (this.lastTransientSpawnAt = null),
      (this.prefixAxis = "idle"),
      (this.prefixContractViolationLogged = !1),
      (this.tmuxRgbApplied = !1),
      this.ownedBeacons.clear());
  }
}
var wr = new W(() => new Tt());
function yF() {
  return wr.of(U().host);
}
import { setTimeout as Gr } from "timers/promises";
import { spawn as pt } from "child_process";
import { constants as Sr } from "fs";
import {
  access as br,
  mkdtemp as yr,
  open as vr,
  readdir as Ar,
  realpath as xr,
  stat as Xe
} from "fs/promises";
import { homedir as Pr, tmpdir as kr } from "os";
import { dirname as Cr, join as qe } from "path";
var Tr = 1e4,
  ft = 250,
  Ze = 120000,
  Rr = 1000,
  Dr = 600000,
  Or = 1e4,
  It = /^(.+)\/Caskroom\/[^/]+\/[^/]+\/claude$/,
  Je = "/node_modules/@anthropic-ai/",
  Ir = 60000;
async function Nt(r) {
  try {
    let e = await Xe(r);
    if (!e.isFile() || e.size >= gnn) return "present";
    return Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < Ir ? "fresh_stub" : "stale_stub";
  } catch (e) {
    return E(e) === "ENOENT" ? "missing" : "present";
  }
}
var Nr = new Set([
  "ENOENT",
  "EACCES",
  "ENOEXEC",
  "EFTYPE",
  "ETXTBSY",
  "EBUSY",
  "EUNKNOWN",
  "EPERM"
]);
async function Apr(r, e, { withoutOAuthTokenEnv: n = !1 } = {}) {
  let s = _m();
  if (s)
    return (
      m("agent_launcher", "invalid_config"),
      { err: new R(s, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured") }
    );
  if (!(await A$()))
    return (
      m("agent_launcher", "launcher_not_runnable"),
      {
        err: new R(
          `${eC}: launcher \`${nm()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`,
          "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable"
        )
      }
    );
  let { wrapper: h, invocation: w } = SR(() => ({ wrapper: nm(), invocation: xu() })),
    { cmd: p, prefixArgs: S, target: y } = w,
    T = [p, ...S, ...r],
    A = Vr({ dropShellOAuthToken: n || (await Fr(e)) });
  if (O() === "windows") {
    if (K7n().platformIgnored) f("agent_launcher", "platform_unsupported");
    let I = await Ot(T, A);
    if (I.ok) return { err: null };
    (t(
      `daemon: WMI spawn failed (${I.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`,
      { level: "warn" }
    ),
      a("tengu_bg_daemon_wmi_fallback", {
        timeout: I.reason === "timeout",
        enoent: I.reason === "enoent",
        no_powershell: I.reason === "no-powershell",
        rc: I.rc
      }));
  }
  let P = O() === "macos" ? await $r() : [],
    L = await yr(qe(kr(), "cc-daemon-")).catch(() => null),
    M = L ? qe(L, "stderr.log") : void 0,
    H = M ? await vr(M, "w").catch(() => null) : null;
  try {
    if (h.length > 0) return { ...(await Lr(r, A, P, H)), stderrPath: M };
    let I = await ve(await Te(P, T), A, H?.fd),
      { err: Y } = I,
      K = E(Y),
      ee = !1,
      V;
    if (K !== void 0 && Nr.has(K) && Be(y)) {
      let v = await Qe(y);
      if (((ee = !v.recovered && v.installInProgressAtEnd), (V = v.waitedMs), v.recovered)) {
        if (O() === "windows") I = (await Ot(T, A)).ok ? { err: null } : await ve(T, A, H?.fd);
        else I = await ve(await Te(P, T), A, H?.fd);
        K = E(I.err);
      }
      if (
        (a("tengu_bg_daemon_spawn_reinstall_wait", {
          waited_ms: v.waitedMs,
          recovered: v.recovered,
          respawn_ok: v.recovered && I.err === null,
          extended: v.extended,
          install_in_progress: v.installInProgressAtEnd,
          errno: Er(Y) ?? b("unknown"),
          ...(v.recovered && I.err !== null && { respawn_errno: Er(I.err) ?? b("unknown") })
        }),
        v.recovered && I.err === null)
      )
        return (
          t(`daemon: ${y} was being reinstalled (exec ${E(Y)}); started it after ${v.waitedMs}ms`),
          { ...I, stderrPath: M, recoveredAfterReinstallWait: !0, reinstallWaitedMs: V }
        );
      t(
        v.recovered
          ? `daemon: ${y} came back after ${v.waitedMs}ms of an npm reinstall but starting it failed again (exec ${E(I.err)})`
          : `daemon: ${y} not runnable after waiting ${v.waitedMs}ms for an npm reinstall (exec ${E(Y)}; install ${v.installInProgressAtEnd ? "still in progress" : v.extended ? "ended" : "not seen"})`
      );
    }
    let Z = { gaveUpOnNpmInstallInProgress: ee, reinstallWaitedMs: V };
    if (K !== "ENOENT" && K !== "EACCES") return { ...I, stderrPath: M, ...Z };
    let ae = new Set([y]),
      u = SR(() => xu({ pinToCurrentBinary: !0 }));
    if (!ae.has(u.target)) {
      (ae.add(u.target),
        a("tengu_bg_daemon_spawn_execpath_fallback", {
          errno_enoent: K === "ENOENT",
          errno_eacces: K === "EACCES"
        }));
      let v = await ve(await Te(P, [u.cmd, ...u.prefixArgs, ...r]), A, H?.fd);
      if (E(v.err) !== "ENOENT") return { ...v, stderrPath: M, ...Z };
    }
    let { link: o, waitedMs: x } = await Lt(u.target);
    if (x > 0) Z.reinstallWaitedMs = (V ?? 0) + x;
    if (o !== null && !ae.has(o)) {
      (ae.add(o),
        a("tengu_bg_daemon_spawn_homebrew_fallback", {
          errno_enoent: K === "ENOENT",
          errno_eacces: K === "EACCES",
          waited_ms: x
        }));
      let v = await ve(await Te(P, [o, ...r]), A, H?.fd);
      if (v.err === null) return { ...v, stderrPath: M, ...Z, recoveredAfterReinstallWait: x > 0 };
    }
    let C = Z7e();
    if (!ae.has(C)) {
      (ae.add(C),
        a("tengu_bg_daemon_spawn_launcher_fallback", {
          errno_enoent: K === "ENOENT",
          errno_eacces: K === "EACCES"
        }));
      let v = await ve(await Te(P, [C, ...r]), A, H?.fd);
      if (E(v.err) !== "ENOENT") return { ...v, stderrPath: M, ...Z };
    }
    let j = await r1t();
    if (
      (a("tengu_bg_daemon_spawn_versions_fallback", { found: j !== null }),
      j !== null && !ae.has(j))
    )
      return { ...(await ve(await Te(P, [j, ...r]), A, H?.fd)), stderrPath: M, ...Z };
    return { err: Y, stderrPath: M, ...Z };
  } finally {
    await H?.close().catch(() => {});
  }
}
async function Lr(r, e, n, s) {
  let h = async (L) => {
      let M = SR(() => E8(L));
      return ve(await Te(n, [M.cmd, ...M.prefixArgs, ...r]), e, s?.fd);
    },
    w = Tze();
  if (await _e(w.cmd, { rejectNpmStub: !0 })) return h(w);
  let p = !1,
    S;
  if (Be(w.cmd)) {
    let L = await Qe(w.cmd);
    if (
      ((S = L.waitedMs),
      a("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: L.waitedMs,
        recovered: L.recovered,
        respawn_ok: L.recovered,
        extended: L.extended,
        install_in_progress: L.installInProgressAtEnd,
        probe: !0
      }),
      L.recovered)
    )
      return { ...(await h(w)), recoveredAfterReinstallWait: !0, reinstallWaitedMs: S };
    p = L.installInProgressAtEnd;
  }
  let y = Tze({ pinToCurrentBinary: !0 });
  if (y.cmd !== w.cmd && (await _e(y.cmd)))
    return (
      a("tengu_bg_daemon_spawn_execpath_fallback", {
        errno_enoent: !1,
        errno_eacces: !1,
        probe: !0
      }),
      { ...(await h(y)), reinstallWaitedMs: S }
    );
  let { link: T, waitedMs: A } = await Lt(y.cmd);
  if (A > 0) S = (S ?? 0) + A;
  if (T !== null && (await _e(T)))
    return (
      a("tengu_bg_daemon_spawn_homebrew_fallback", {
        errno_enoent: !1,
        errno_eacces: !1,
        probe: !0,
        waited_ms: A
      }),
      {
        ...(await h({ cmd: T, prefixArgs: [], target: T })),
        recoveredAfterReinstallWait: A > 0,
        reinstallWaitedMs: S
      }
    );
  let P = await r1t();
  if (
    (a("tengu_bg_daemon_spawn_versions_fallback", { found: P !== null, probe: !0 }),
    P !== null && P !== y.cmd && (await _e(P)))
  )
    return { ...(await h({ cmd: P, prefixArgs: [], target: P })), reinstallWaitedMs: S };
  return (
    m("agent_launcher", "no_runnable_target"),
    {
      err: new R(
        `no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${P ?? y.cmd}`,
        "no runnable claude binary for the configured launcher"
      ),
      gaveUpOnNpmInstallInProgress: p,
      reinstallWaitedMs: S
    }
  );
}
async function _e(r, e = {}) {
  try {
    let n = await Xe(r);
    if (!n.isFile()) return !1;
    if (e.rejectNpmStub && n.size < gnn) return !1;
    return (await br(r, Sr.X_OK), !0);
  } catch {
    return !1;
  }
}
function Be(r) {
  return r.replace(/\\/g, "/").includes(Je);
}
async function Mr(r) {
  let e = It.exec(r)?.[1];
  if (e === void 0) return null;
  let n = qe(e, "bin", "claude"),
    s = await xr(n).catch(() => null);
  return s !== null && s !== r && s.startsWith(`${e}/Caskroom/`) ? n : null;
}
async function Lt(r) {
  for (let e = 0; ; e += ft) {
    let n =
        It.test(r) &&
        (await Xe(`${Cr(r)}.upgrading`).then(
          () => !0,
          () => !1
        )),
      s = await Mr(r);
    if ((n || e > 0) && s !== null && !(await _e(s))) s = null;
    if (s !== null || !n || e >= Or) {
      if (s === null && e > 0) a("tengu_bg_daemon_spawn_homebrew_wait_gave_up", { waited_ms: e });
      return { link: s, waitedMs: e };
    }
    await X(ft);
  }
}
async function Rt(r) {
  let e = r.replace(/\\/g, "/").indexOf(Je);
  if (e === -1) return !1;
  let n = r.slice(0, e + Je.length - 1),
    s = r.slice(e + Je.length).split(/[\\/]/)[0];
  if (!s) return !1;
  let h = `.${s}-`,
    w;
  try {
    w = await Ar(n, { withFileTypes: !0 });
  } catch {
    return !1;
  }
  for (let p of w) {
    if (!p.isDirectory() || !p.name.startsWith(h)) continue;
    try {
      let S = await Xe(qe(n, p.name));
      if (Date.now() - Math.max(S.ctimeMs, S.mtimeMs) < Dr) return !0;
    } catch {}
  }
  return !1;
}
async function Qe(r) {
  let e = Date.now(),
    n = e + Tr;
  while (Date.now() < n)
    if ((await X(ft), await _e(r, { rejectNpmStub: !0 })))
      return { recovered: !0, waitedMs: Date.now() - e, extended: !1, installInProgressAtEnd: !1 };
  let s = await Rt(r);
  if (!s)
    return { recovered: !1, waitedMs: Date.now() - e, extended: !1, installInProgressAtEnd: !1 };
  let h = e + Ze;
  while (Date.now() < h) {
    if ((await X(Rr), await _e(r, { rejectNpmStub: !0 })))
      return { recovered: !0, waitedMs: Date.now() - e, extended: !0, installInProgressAtEnd: s };
    if (!s) break;
    s = await Rt(r);
  }
  return { recovered: !1, waitedMs: Date.now() - e, extended: !0, installInProgressAtEnd: s };
}
async function ve(r, e, n) {
  let s;
  try {
    s = Pr();
  } catch {
    s = void 0;
  }
  let h = await Dt(r, e, n, s);
  if (s !== void 0 && h.err) return Dt(r, e, n, void 0);
  return h;
}
async function Dt(r, e, n, s) {
  let h = null,
    w;
  try {
    let p = pt(r[0], r.slice(1), {
      detached: !0,
      stdio: ["ignore", "ignore", n ?? "ignore"],
      windowsHide: !0,
      env: e,
      ...(s !== void 0 && { cwd: s })
    });
    (II(p.pid),
      p.once("error", (S) => {
        h = S;
      }),
      (w = {
        pid: p.pid,
        exited: new Promise((S) => {
          p.once("exit", (y, T) => S({ code: y, signal: T }));
        })
      }),
      p.unref());
  } catch (p) {
    h = p;
  }
  return (await new Promise((p) => setImmediate(p)), h ? { err: h } : { err: null, child: w });
}
async function $r() {
  let r = process.getuid?.();
  if (r === void 0) return [];
  let e = await new Promise((n) => {
    let s = !1,
      h,
      w = (S) => {
        if (s) return;
        ((s = !0), clearTimeout(p), n(S));
      },
      p = setTimeout(() => {
        (h.kill(), w(!1));
      }, 5000);
    p.unref();
    try {
      h = pt("/bin/launchctl", ["asuser", String(r), "/usr/bin/true"], {
        stdio: "ignore",
        windowsHide: !0
      });
    } catch {
      w(!1);
      return;
    }
    (h.once("error", () => w(!1)), h.once("exit", (S) => w(S === 0)));
  });
  return (
    a("tengu_bg_daemon_macos_aqua_wrap", { has_gui: e }),
    e ? ["/bin/launchctl", "asuser", String(r)] : []
  );
}
async function Te(r, e) {
  if (r.length === 0) return e;
  let n = e[0];
  if (!(await _e(n, { rejectNpmStub: Be(n) }))) return e;
  return [...r, ...e];
}
async function Ot(r, e) {
  let n;
  try {
    n = Br(Ur(r));
  } catch (w) {
    return { ok: !1, reason: d(w) };
  }
  let s = await $P();
  if (!s) return { ok: !1, reason: "no-powershell" };
  let h = Buffer.from(n, "utf16le").toString("base64");
  return new Promise((w) => {
    let p = !1,
      S,
      y = (P) => {
        if (p) return;
        ((p = !0), clearTimeout(A), w(P));
      },
      T = (P) => y({ ok: !1, reason: E(P) === "ENOENT" ? "enoent" : d(P) }),
      A = setTimeout(() => {
        (S.kill(), y({ ok: !1, reason: "timeout" }));
      }, 5000);
    A.unref();
    try {
      S = pt(s, ["-NoProfile", "-NonInteractive", "-EncodedCommand", h], {
        stdio: "ignore",
        windowsHide: !0,
        env: e
      });
    } catch (P) {
      T(P);
      return;
    }
    (S.once("error", T),
      S.once("exit", (P) => {
        if (P === 0) y({ ok: !0 });
        else y({ ok: !1, reason: `Win32_Process.Create rc=${P}`, rc: P ?? void 0 });
      }));
  });
}
function Br(r) {
  return [
    '$ErrorActionPreference = "Stop"',
    '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })',
    "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }",
    `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${Hr(r)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`,
    "exit $r.ReturnValue"
  ].join(`
`);
}
function Ur(r) {
  return r.map(Wr).join(" ");
}
function Wr(r) {
  if (r.length > 0 && !/[\s"]/.test(r)) return r;
  let e = '"',
    n = 0;
  while (n < r.length) {
    let s = 0;
    while (r[n] === "\\") (s++, n++);
    if (n === r.length) e += "\\".repeat(s * 2);
    else if (r[n] === '"') ((e += "\\".repeat(s * 2 + 1) + '"'), n++);
    else ((e += "\\".repeat(s) + r[n]), n++);
  }
  return e + '"';
}
function Hr(r) {
  if (/[\u2018\u2019\u201A\u201B]/.test(r))
    throw Error("unsupported Unicode single-quote in command line");
  return `'${r.replaceAll("'", "''")}'`;
}
async function Fr(r) {
  let e = SR(() => process.env.CLAUDE_CODE_OAUTH_TOKEN);
  if (O() === "macos" || !e) return !1;
  return !!(await Kn().readAsync(r))?.claudeAiOauth?.refreshToken;
}
function Vr(r) {
  return SR(() => jr(r));
}
function jr(r) {
  let e = utt();
  e.INVOCATION_ID = "";
  let n = process.env[eC];
  if (n) e[eC] = n;
  else delete e[eC];
  let s = new Set(
    [
      "CLAUDE_CODE_OAUTH_TOKEN",
      vZ(e),
      AYe() ? vZ({ CLAUDE_CODE_HOST_AUTH_ENV_VAR: _ht() }) : void 0
    ].flatMap((p) => (p === void 0 ? [] : [p.toUpperCase()]))
  );
  for (let p of Object.keys(e)) {
    if (!s.has(p.toUpperCase())) continue;
    let S = process.env[p];
    if (S === void 0) delete e[p];
    else if (!o5(p, S)) e[p] = S;
  }
  (delete e.CLAUDECODE,
    delete e.CLAUDE_CODE_SESSION_ID,
    delete e.CLAUDE_CODE_CHILD_SESSION,
    delete e.CLAUDE_CODE_SESSION_ATTENDED,
    delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED,
    delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION,
    delete e.CLAUDE_CODE_BRIDGE_SESSION_ID,
    delete e.CLAUDE_CODE_HOST_WORKTREE,
    delete e.CLAUDE_CODE_HOST_WORKTREE_FENCE,
    gms(e));
  for (let p of Object.keys(e)) {
    let S = p.toUpperCase();
    if (
      S === "CLAUDE_CODE_PLUGIN_DIRS" ||
      S === "CLAUDE_CODE_ATTRIBUTION_PROJECT" ||
      S === "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS" ||
      S === "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES"
    )
      delete e[p];
  }
  (qee(e),
    HPt(e),
    delete e.CLAUDE_BG_SESSION_PERMISSION_RULES,
    delete e.CLAUDE_BG_MEMORY_TOGGLED_OFF,
    delete e.CLAUDE_BG_AUTO_MEMORY_OFF,
    delete e.CLAUDE_BG_GATEWAY_WITHHELD,
    GX(e));
  let h = new Set(["CLAUDE_BG_AUTH_SNAPSHOT_PATH", ...cfe].map((p) => p.toUpperCase()));
  for (let p of Object.keys(e)) if (h.has(p.toUpperCase())) delete e[p];
  let w = vZ(e);
  if (Ne(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let p of [...TH, ...Yj, ...cB]) delete e[p];
    if ((mqt(e), delete e.ANTHROPIC_CUSTOM_HEADERS, w)) delete e[w];
    (delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST,
      delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR,
      delete e.CLAUDE_CODE_HOST_GATEWAY_LINEAGE);
  }
  if (r.dropShellOAuthToken) {
    for (let p of Object.keys(e)) if (p.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") delete e[p];
  }
  return e;
}
var mt = 120000,
  Mt = 5000,
  $t = 5000;
function ht(r) {
  let e = {
    ...r,
    childExit: null,
    childExitAt: null,
    stderr: null,
    budgetExtended: !1,
    nextLivenessProbeAt: r.spawnIssuedAt + Mt,
    siblingHolderSeen: !1
  };
  return (
    r.child?.exited.then((n) => {
      ((e.childExit = n), (e.childExitAt = Date.now()));
    }),
    e
  );
}
async function Bt(r, e) {
  let n = r.childExit;
  if (!n || r.siblingHolderSeen) return !1;
  if (n.code === 0 && n.signal === null) return !1;
  if (!Be(e)) return !1;
  switch (await Nt(e)) {
    case "missing":
    case "fresh_stub":
      return !0;
    case "stale_stub":
      return !1;
    case "present":
      return (await et(r)).includes(hnn);
  }
}
function Ut(r) {
  if (r.trim().length === 0) return;
  if (r.includes(hnn)) return b("npm_stub");
  if (/current working directory was deleted|uv_cwd|getcwd/i.test(r)) return b("cwd_deleted");
  if (/launchctl|Could not switch to audit session|posix_spawn/.test(r)) return b("launchctl");
  if (/Cannot find module|MODULE_NOT_FOUND|Module not found/.test(r)) return b("module_not_found");
  if (
    /dyld|Segmentation fault|Illegal instruction|Abort trap|Killed: 9|panic|bun has crashed|^error: /im.test(
      r
    )
  )
    return b("runtime");
  if (/^\s*(claude|Claude Code|daemon|bg manager)\b/im.test(r)) return b("claude_error");
  return b("other");
}
async function et(r, e = !1) {
  if (r.stderr === null || e)
    r.stderr = r.stderrPath ? ((await bl(r.stderrPath, 1048576)) ?? "").slice(0, 2000) : "";
  return r.stderr;
}
async function _t(r) {
  let e = r.childExit;
  if (!e || r.siblingHolderSeen) return !1;
  if (!r.budgetExtended) {
    if ((await et(r)).trim().length === 0) return !1;
    if (r.wrapperConfigured && e.code === 0 && e.signal === null) return !1;
  }
  let n = await Wt(r, sct);
  if (n !== !1) return ((r.siblingHolderSeen = n === !0), !1);
  return !0;
}
async function Ue(r, e, n) {
  let s = e;
  while (!0) {
    if (await _t(r)) return !1;
    if (Date.now() >= s) return !1;
    if ((await bh({ proto: Oc, op: "ping" })).ok) return !0;
    if (n && Date.now() >= r.nextLivenessProbeAt) {
      r.nextLivenessProbeAt = Date.now() + Mt;
      let p = await Wt(r, 1);
      if (!r.budgetExtended && p === !0)
        ((r.budgetExtended = !0), (s = Math.max(s, r.spawnIssuedAt + mt)));
      else if (r.budgetExtended && p === !1 && Date.now() >= e) return !1;
    }
    await Gr(100);
  }
}
async function Wt(r, e) {
  let n;
  try {
    n = await bE(e, r.storageV5);
  } catch {
    return null;
  }
  return n !== null && !n.bgDisabled && n.startedAt >= r.spawnIssuedAt - $t;
}
async function Ht(r) {
  let e;
  try {
    e = await Y6(r.storageV5);
  } catch {
    return { lock_at_deadline: b("unreadable") };
  }
  if (!e) return { lock_at_deadline: b("absent") };
  let n = {
    holder_age_ms: Math.max(0, Date.now() - e.startedAt),
    holder_version_skew:
      e.version !==
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
          new __filePath_9c2974765ad0f143_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
  };
  if ((r.child?.pid !== void 0 && e.pid === r.child.pid) || e.startedAt >= r.spawnIssuedAt - $t)
    return { lock_at_deadline: b("self_child"), ...n };
  try {
    process.kill(e.pid, 0);
  } catch (w) {
    if (E(w) !== "EPERM") return { lock_at_deadline: b("other_dead"), ...n };
    return { lock_at_deadline: (await rHn(e)) ? b("other_eperm_stale") : b("other_eperm"), ...n };
  }
  return {
    lock_at_deadline: (await lJt(e.pid, T0(e), 1).catch(() => !1))
      ? b("other_alive")
      : b("other_dead"),
    ...n
  };
}
import { randomBytes as vn } from "crypto";
import { unlink as qt } from "fs/promises";
import { createServer as xn } from "net";
import { StringDecoder as Pn } from "string_decoder";
function WFe(r, e) {
  let n = r.trimStart();
  return (
    vS(n) !== "prompt" ||
    n.startsWith("/") ||
    (e?.tempo === "blocked" && (e.block?.questions.length ?? 0) > 0)
  );
}
function Vat(r) {
  return r.queuedPrompt !== void 0 && WFe(r.queuedPrompt, null) ? void 0 : r.queuedPrompt;
}
function Neo(r, e) {
  return (
    r === e ||
    r.endsWith(`

${e}`)
  );
}
async function Mie(r, e, n, s, h) {
  if (WFe(n, null)) return !1;
  let w = h ? Vat(e) : void 0;
  return ad(
    r,
    {
      ...e,
      queuedPrompt: !w
        ? n
        : Neo(w, n)
          ? w
          : `${w}

${n}`,
      updatedAt: new Date().toISOString()
    },
    s
  ).then(
    () => !0,
    (p) => (Rl(p), !1)
  );
}
var Ft =
  /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
function Vt(r) {
  if (!r.includes("\x1B")) return !1;
  return r.replace(Ft, "").length === 0;
}
var Kr = "\x1B[<",
  Yr = /^(\d+);\d+;\d+[Mm]/,
  Jr = 96;
function jt(r) {
  return r
    .split(Kr)
    .slice(1)
    .some((e) => {
      let n = Yr.exec(e)?.[1];
      return n !== void 0 && (Number(n) & Jr) === 0;
    });
}
var qr = 64,
  Xr =
    /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;
function bcs() {
  let r = "";
  return (e) => {
    let n = r + e;
    if (((r = ""), !n.includes("\x1B"))) return !1;
    let s = n.replace(Ft, "");
    if (s.length === 0) return !0;
    if (s.length <= qr && Xr.test(s)) return ((r = s), !0);
    return !1;
  };
}
import { closeSync as Zr, lstatSync as Qr, openSync as en, readSync as tn } from "fs";
var Gt = 262144,
  rn = 32768,
  nn = 200,
  on = 4096,
  an = 50;
function sn(r) {
  let e = 0,
    n = 0,
    s = 0;
  for (let h of r.split(`
`)) {
    let w = 0;
    while (w < h.length && (h[w] === ">" || h[w] === " ")) {
      if (h[w] === ">") s++;
      w++;
    }
    if (/^ {0,3}(?:=+|-+)\s*$/.test(h)) n++;
    for (let p = w; p < h.length; p++) {
      let S = h[p];
      if (S === "[") e++;
      else if (S === "]" && e > 0) e--;
    }
  }
  return e > 256 || n > 64 || s > 512;
}
var ln = "\x1B[2m",
  Yt = "\x1B[0m",
  dn = 2,
  cn = "dark",
  Kt = ne.pointer,
  un = "  Session is starting \u2014 showing its transcript until it appears. Ctrl+Z to detach";
function fn(r) {
  if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(r)) return r;
  return yn(r)
    .replace(/\t/g, "  ")
    .replace(SX, "")
    .replace(/[\v\f\r]/g, "");
}
var Jt = new RegExp(`(${B4e(";")})`),
  pn = new RegExp(`^${B4e(";")}$`),
  mn = new RegExp(Jt.source, "g");
function gn(r) {
  if (!r.includes("\x1B")) return r;
  let e = "",
    n = 0;
  while (n < r.length) {
    let s = r.indexOf("\x1B", n);
    if (s < 0) {
      e += r.slice(n);
      break;
    }
    e += r.slice(n, s);
    let h = r[s + 1];
    if (h === "[") {
      let w = s + 2;
      while (w < r.length) {
        let p = r.charCodeAt(w);
        if (p >= 64 && p <= 126) {
          let S = r.slice(s, w + 1);
          if (pn.test(S)) e += S;
          w++;
          break;
        }
        if (p < 32 || p > 63) break;
        w++;
      }
      n = w;
    } else if (h === "]" || h === "P" || h === "X" || h === "^" || h === "_") {
      let w = s + 2,
        p = r.length;
      while (w < r.length) {
        if (h === "]" && r.charCodeAt(w) === 7) {
          p = w + 1;
          break;
        }
        if (r.charCodeAt(w) === 27 && r[w + 1] === "\\") {
          p = w + 2;
          break;
        }
        w++;
      }
      n = p;
    } else if (h === void 0) n = r.length;
    else n = s + 2;
  }
  return e;
}
var hn = 128;
function _n(r) {
  let e = r.filter((n) => n !== "").join(";");
  return e === "" || e.length > hn ? "" : `\x1B[${e}m`;
}
function wn(r, e) {
  if (le(r) <= e) return [r];
  let n = [],
    s = "",
    h = 0,
    w = cZo();
  for (let p of r.split(Jt)) {
    if (p === "") continue;
    if (p.charCodeAt(0) === 27) {
      (uZo(p, w), (s += p));
      continue;
    }
    for (let { segment: S } of $a().segment(p)) {
      let y = S.length === 1 && S.charCodeAt(0) < 127 ? 1 : le(S);
      if (h > 0 && h + y > e) (n.push(w.some((T) => T !== "") ? s + Yt : s), (s = _n(w)), (h = 0));
      ((s += S), (h += y));
    }
  }
  return (n.push(s), n);
}
function wt(r, e) {
  return vu(r, e, { hard: !1, trim: !1 })
    .split(
      `
`
    )
    .flatMap((n) => wn(n, e));
}
function En(r) {
  let e;
  try {
    e = Vo(r);
  } catch {
    return [];
  }
  if (typeof e !== "object" || e === null) return [];
  let n = e;
  if ((n.type !== "user" && n.type !== "assistant") || n.isSidechain === !0 || n.isMeta === !0)
    return [];
  let s = n.message?.content;
  if (typeof s === "string") {
    if (n.type === "user") return zt(s);
    let S = s.trim();
    return S === "" ? [] : [{ role: "assistant", text: S }];
  }
  if (!Array.isArray(s)) return [];
  if (n.type === "user") {
    let S = [];
    for (let y of s) {
      let T = y;
      if (T?.type === "text" && typeof T.text === "string") S.push(T.text);
    }
    return zt(
      S.join(`
`)
    );
  }
  let h = [],
    w = [],
    p = () => {
      let S = w
        .join(
          `
`
        )
        .trim();
      if (((w = []), S !== "")) h.push({ role: "assistant", text: S });
    };
  for (let S of s) {
    let y = S;
    if (y?.type === "text" && typeof y.text === "string") w.push(y.text);
    else if (y?.type === "tool_use" && typeof y.name === "string") {
      p();
      let T = "";
      if (typeof y.input === "object" && y.input !== null) {
        for (let A of Object.values(y.input))
          if (typeof A === "string" && A !== "") {
            T = A;
            break;
          }
      }
      h.push({ role: "tool", text: `${Jye(y.name)}(${T})` });
    } else if (y?.type === "thinking" && typeof y.thinking === "string" && y.thinking.trim() !== "")
      (p(), h.push({ role: "thinking", text: y.thinking }));
  }
  return (p(), h);
}
function zt(r) {
  let e = Yse(r).trim();
  if (e === "") return [];
  let n = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(e);
  if (n) e = `! ${n[1].trim()}`;
  else if (FZo.test(e)) return [];
  return [{ role: "user", text: e }];
}
function Sn(r, e) {
  return (
    $xt(),
    gn(
      eh
        .lexer(r)
        .map((n) =>
          dN(n, e, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: PW(),
            linkCap: !1,
            windowed: !1
          })
        )
        .join("")
    ).trim()
  );
}
function bn(r, e, n, s) {
  let h = Math.max(1, e),
    w = s?.colorLevel ?? dn,
    p = s?.theme ?? cn,
    S = (v) => (w > 0 && v !== "" ? ln + v + Yt : v),
    y = (v) => Math.max(1, Math.ceil(le(v) / h)),
    T = "\u2500".repeat(h),
    A = ["", T, Kt, T, un],
    P = A.reduce((v, z) => v + y(z), 0),
    L = n - P;
  if (L < 1) return null;
  let M = Math.min(Math.ceil((L + 1) / 2), nn),
    H = r.split(`
`),
    I = [],
    Y = rn;
  e: for (let v = H.length - 1; v >= 0; v--) {
    let z = En(H[v]);
    for (let J = z.length - 1; J >= 0; J--) {
      if (I.length >= M) break e;
      let Q = z[J];
      if (Q.text.length > Y) {
        if (I.length === 0) {
          let oe = Ja(Q.text, Y),
            se = oe.indexOf(`
`);
          if (se >= 0) oe = oe.slice(se + 1);
          if (oe.trim() !== "") I.unshift({ role: Q.role, text: oe });
        }
        break e;
      }
      ((Y -= Q.text.length), I.unshift(Q));
    }
  }
  if (I.length === 0) return null;
  let K = [],
    ee = h >= 4 ? 2 : 0,
    V = Math.max(1, h - ee),
    Z = he.level;
  he.level = w;
  let ae = performance.now();
  try {
    for (let v of I) {
      if (K.length > 0) K.push({ text: "", dim: !1 });
      let z = fn(v.text);
      switch (v.role) {
        case "tool": {
          let J = gt(`${ko} ${z.replace(/\n/g, " ")}`, h);
          K.push({ text: J, dim: !0 });
          break;
        }
        case "thinking": {
          let J = z.replace(/\s+/g, " ").trim();
          for (let [Q, oe] of wt(J, V).entries()) {
            let se = ee === 0 || oe === "" ? "" : Q === 0 ? `${hqt} ` : "  ";
            K.push({ text: se + he.italic(oe), dim: !0 });
          }
          break;
        }
        case "assistant": {
          let J = z;
          if (z.length <= on && performance.now() - ae < an && !sn(z))
            try {
              J = Sn(z, p);
            } catch {
              J = z;
            }
          let Q = Qn("text", p)(ko);
          for (let [oe, se] of wt(J, V).entries()) {
            let de = ee === 0 || se === "" ? "" : oe === 0 ? `${Q} ` : "  ";
            K.push({ text: de + se, dim: !1 });
          }
          break;
        }
        case "user": {
          let J = Qn("inactive", p)(`${Kt} `),
            Q = Qn("text", p),
            oe = Qn("userMessageBackground", p, "background");
          for (let [se, de] of wt(z, V).entries()) {
            let ie = ee === 0 ? "" : se === 0 ? J : "  ";
            K.push({ text: oe(ie + Q(de)), dim: !1 });
          }
          break;
        }
        default:
          v.role;
      }
    }
  } finally {
    he.level = Z;
  }
  let u = 0,
    o = [];
  for (let v = K.length - 1; v >= 0; v--) {
    let z = K[v],
      J = y(z.text);
    if (u + J > L) break;
    ((u += J), o.unshift(z.dim ? S(z.text) : z.text));
  }
  if (o.length === 0) return null;
  let x = n - u - P,
    C = [];
  for (let v = 0; v < x; v++) C.push("");
  C.push(...o);
  for (let v of A) C.push(S(v));
  let j = C.join(`\r
`);
  if (j.length > 65536 + n * h * 32) j = j.replace(mn, "");
  return fN + j;
}
function Et(r, e, n, s) {
  let h;
  try {
    let w = Qr(r);
    if (!w.isFile() || w.size === 0) return null;
    let p = w.size;
    h = en(r, "r");
    let S = Math.max(0, p - Gt),
      y = Buffer.alloc(Math.min(p, Gt)),
      T = tn(h, y, 0, y.length, S),
      A = y.subarray(0, T).toString("utf8");
    if (S > 0) {
      let P = A.indexOf(`
`);
      if (P < 0) return null;
      A = A.slice(P + 1);
    }
    return bn(A, e, n, s);
  } catch {
    return null;
  } finally {
    if (h !== void 0)
      try {
        Zr(h);
      } catch {}
  }
}
var Fe = 1048576,
  kn = 5000,
  Cn = 12000,
  St = 1000,
  Xt = 500,
  Tn = 6000,
  Rn = 30000;
function Dn() {
  let r = k("tengu_bg_attach_stall_ms", kn);
  if (r === 0) return 0;
  let e = nm().length > 0 ? Cn : 2000;
  return Math.max(e, r);
}
function On(r, e, n, s, h, w) {
  let p = r.dispatch;
  if (r.getPhase().kind !== "running" || e.destroyed || s()) return;
  h.add(p.short);
  let S = lo(_o(p.short), w).catch(() => null);
  (r.kill("SIGTERM"),
    (async () => {
      let y = Date.now() + Tn;
      while (Date.now() < y && !r.record.outcome) await X(100);
      if (!h.has(p.short)) return;
      let T = await lo(_o(p.short), w).catch(() => null),
        A = T?.resumeSessionId ?? p.sessionId,
        P = T?.cwd ?? p.cwd,
        L = Mk(yG(w)),
        M = await Gfe(A, P, T?.linkScanPath, void 0, L),
        H = M.hasMessages;
      if (!H) await J4e(M.path, L);
      if (!h.has(p.short)) return;
      let I = T?.respawnFlags ?? p.respawnFlags,
        Y = (await S)?.tempo === "active";
      await n({
        ...p,
        cwd: P,
        source: "respawn",
        reattachEnv: void 0,
        attachStallRespawns: (p.attachStallRespawns ?? 0) + 1,
        launch: H
          ? {
              mode: "resume",
              sessionId: A,
              transcriptPath: M.path,
              fork: !1,
              flagArgs: Y ? Yan(I) : Xan(I)
            }
          : A !== p.sessionId
            ? { mode: "prompt", args: ["--session-id", A, ...I] }
            : p.launch
      });
    })()
      .catch((y) => l(y))
      .finally(() => h.delete(p.short)));
}
var bt = 1e4,
  In = 2500;
async function wcs(r, e, n, s = () => 0, h = () => !0, w = () => !1, p = new Promise(() => {}), S) {
  let y = RY();
  await Iun();
  let T = await Uqs();
  await qt(y).catch(() => {});
  let A = new Set(),
    P = new Set(),
    L = new Map(),
    M = new Map(),
    H = De(),
    K = {
      handles: r,
      onDispatch: e,
      onNudge: n,
      onShutdown: s,
      ready: h,
      whenReady: p,
      onYield: w,
      addLease: (u, o) => {
        if (M.has(u)) return;
        M.set(u, o);
        let x = Ln(o?.label);
        (a("tengu_daemon_lease", { op: b("open"), label: x }),
          u.once("close", () => {
            (M.delete(u),
              a("tengu_daemon_lease", { op: b("close"), label: x }),
              H.emit({ op: "close", client: o }));
          }),
          H.emit({ op: "open", client: o }));
      },
      listLeases: () => {
        let u = [];
        for (let o of M.values()) if (o) u.push(o);
        return u;
      },
      stallRespawnPending: P,
      settledDispatches: L,
      controlKey: T,
      storageV5: S,
      legacyOpProbe: new tr()
    },
    ee = !1,
    V = xn((u) => {
      if (ee) {
        u.destroy();
        return;
      }
      (u.on("error", () => u.destroy()),
        u.setTimeout(30000, () => u.destroy()),
        A.add(u),
        u.once("close", () => A.delete(u)));
      let o = P4s(u);
      if (o) {
        (a("tengu_daemon_peer_uid_reject", {}),
          u.once("data", () => D(u, { ok: !1, code: "EPEERUID", error: o })));
        return;
      }
      let x = Buffer.alloc(0),
        C = (j) => {
          x = Buffer.concat([x, j]);
          let v = x.indexOf(10);
          if (v < 0) {
            if (x.length > Fe)
              (u.off("data", C),
                D(u, {
                  ok: !1,
                  code: "ETOOLARGE",
                  error: `request exceeds ${Fe >> 20}MB \u2014 shorten the prompt or send in parts`
                }));
            return;
          }
          (u.off("data", C), u.setTimeout(0));
          let z = x.subarray(0, v).toString("utf8"),
            J = x.subarray(v + 1);
          Nn(K, u, z, J).catch((Q) => {
            D(u, { ok: !1, error: d(Q), code: "EUNKNOWN" });
          });
        };
      u.on("data", C);
    }),
    Z = !1;
  V.on("error", (u) => {
    if (Z) {
      t(`bg control server bind: ${WT(d(u))}`, { level: "warn" });
      return;
    }
    l(u);
  });
  let ae = Date.now() + bt;
  for (;;)
    try {
      await new Promise((u, o) => {
        let x = (C) => {
          ((Z = !1), o(C));
        };
        ((Z = !0),
          V.once("error", x),
          V.listen(y, () => {
            ((Z = !1), V.removeListener("error", x), u());
          }));
      });
      break;
    } catch (u) {
      if (E(u) !== "EADDRINUSE" || Date.now() >= ae) throw u;
      (V.removeAllListeners("listening"), await X(100));
    }
  return {
    close: (u) =>
      new Promise((o) => {
        for (let x of A) x.destroy();
        if (u?.skipUnlink) return ((ee = !0), V.unref(), void o());
        V.close(() => {
          if (!u?.skipUnlink) qt(y).catch(() => {});
          o();
        });
      }),
    leaseCount: () => M.size,
    onLeaseChange: H,
    announceExit: (u) => {
      for (let [o, x] of M)
        if (x?.label === oQe)
          o.write(
            _({ op: "lease", closing: u }) +
              `
`
          );
    },
    noteSettledDispatch: (u, o, x) => {
      (L.set(u, { nonce: o, refusal: x }),
        setTimeout(
          (C, j, v) => {
            if (C.get(j)?.nonce === v) C.delete(j);
          },
          Rn,
          L,
          u,
          o
        ).unref());
    }
  };
}
function D(r, e) {
  if (r.destroyed) return;
  r.end(
    _(e) +
      `
`
  );
}
function He(r, e) {
  if (r.destroyed) return;
  if (r.writableLength > Fe) {
    r.destroy();
    return;
  }
  r.write(
    _(e) +
      `
`
  );
}
function Me(r) {
  return !r.record.outcome && !r.isRetiring && !r.isKilling;
}
function Zt(r, e) {
  return r !== void 0 && e === void 0 ? Pe(r, 25) : X(25);
}
async function Qt(r, e, n, s, h, w, p, S) {
  let y = Date.now() + Math.min(p, 30000),
    T = !1,
    A = !1,
    P,
    L,
    M = S?.then(
      (H) => {
        L = H;
      },
      (H) => {
        (l(H), (L = "dropped"));
      }
    );
  while (Date.now() < y) {
    if (n.destroyed) return;
    let H = L === "dup-live" || L === "dropped" || L === "refused" || L === "closed",
      I = r.get(h),
      Y = w !== void 0 && I?.record.nonce !== w ? e.get(h) : void 0;
    if (Y !== void 0 && Y.nonce === w) {
      if (Y.refusal !== void 0) return D(n, { ok: !1, error: Y.refusal, code: "ECWDGONE" });
      return D(n, { ok: !0, op: s, short: h, pid: 0, messagingSock: "", via: "cold" });
    }
    if (I) {
      if (w && I.record.nonce !== w) {
        if (((A = !0), (P = Me(I) ? I : void 0), H)) break;
        if (!P && !T) ((T = !0), (y += Math.min(p, 30000)));
        await Zt(M, L);
        continue;
      }
      return D(n, {
        ok: !0,
        op: s,
        short: h,
        pid: I.record.pid,
        messagingSock: I.record.messagingSock ?? "",
        via: I.via
      });
    }
    if (((P = void 0), H)) break;
    await Zt(M, L);
  }
  if (A) {
    if (P && r.get(h) === P && Me(P))
      return D(n, {
        ok: !0,
        op: s,
        short: h,
        pid: P.record.pid,
        messagingSock: P.record.messagingSock ?? "",
        via: P.via
      });
    return D(n, {
      ok: !1,
      error: "a previous dispatch with this id is still being cleaned up \u2014 retry in a moment",
      code: "ESTALE"
    });
  }
  return D(n, {
    ok: !1,
    error: `${Qp()} didn't acknowledge in time \u2014 retry`,
    code: "ETIMEOUT"
  });
}
class tr {
  fired = new Set();
  markFired(r) {
    if (this.fired.has(r)) return !1;
    return (this.fired.add(r), !0);
  }
}
function er(r, e) {
  if (!r.markFired(e)) return;
  a("tengu_dead_probe_bg_legacy_op", { op: c(e) });
}
async function Nn(r, e, n, s) {
  let {
      handles: h,
      onDispatch: w,
      onNudge: p,
      onShutdown: S,
      ready: y,
      whenReady: T,
      onYield: A,
      addLease: P,
      listLeases: L,
      stallRespawnPending: M,
      settledDispatches: H,
      controlKey: I,
      storageV5: Y,
      legacyOpProbe: K
    } = r,
    ee;
  try {
    ee = te(n);
  } catch {
    return D(e, { ok: !1, error: "bad json", code: "EUNKNOWN" });
  }
  if (ee === null || typeof ee !== "object")
    return D(e, { ok: !1, error: "bad json", code: "EUNKNOWN" });
  let V = ee.op;
  if (V === "ping")
    return D(e, {
      ok: !0,
      op: "ping",
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
          new __filePath_9c2974765ad0f143_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      proto: Oc,
      carriedPromptsFormat: POn
    });
  if (V === "nudge") {
    let o = await p();
    return D(e, {
      ok: !0,
      op: "nudge",
      restarting: o.restarting,
      upgradePending: o.upgradePending,
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
          new __filePath_9c2974765ad0f143_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      processWrapper: fz()
    });
  }
  if (V === "yield") return D(e, { ok: !0, op: "yield", yielding: A() });
  if (V === "lease") {
    let o = aGe().safeParse(ee.client).data;
    (P(e, o ? { ...o, pid: U_t(e) ?? o.pid } : null),
      e.write(
        _({ ok: !0, op: "lease" }) +
          `
`
      ));
    return;
  }
  if (V === "leases") return D(e, { ok: !0, op: "leases", clients: L() });
  if (V === "shutdown") {
    let o = ee.reapWorkers !== !1,
      x = S(o);
    return D(e, { ok: !0, op: "shutdown", reaped: x });
  }
  if (!y() && V === "attach") {
    if ((await Promise.race([T, X(In, void 0, { unref: !0 })]), e.destroyed)) return;
  }
  if (!y())
    return D(e, { ok: !1, error: `${Qp()} starting (adoption in progress)`, code: "ESTARTING" });
  let Z = ee.proto;
  if (typeof Z !== "number" || !Number.isInteger(Z) || Z < Lan || Z > Oc)
    return (
      a("tengu_bg_proto_mismatch", {
        client_proto: typeof Z === "number" ? Z : -1,
        server_proto: Oc
      }),
      D(e, {
        ok: !1,
        error: `proto mismatch (server=${Oc}, client=${Z}) \u2014 ${Qp()} and CLI versions differ; restart claude`,
        code: "EPROTO",
        serverProto: Oc,
        serverVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
            new __filePath_9c2974765ad0f143_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      })
    );
  let ae = COo().safeParse(ee);
  if (!ae.success)
    return D(e, {
      ok: !1,
      error: `malformed request: ${ae.error.issues[0]?.message ?? "invalid"}`,
      code: "EUNKNOWN"
    });
  let u = ae.data;
  switch (u.op) {
    case "ping":
    case "nudge":
    case "yield":
    case "lease":
    case "leases":
    case "shutdown":
      return;
    case "list":
      return D(e, {
        ok: !0,
        op: "list",
        jobs: Array.from(h.values()).map((o) =>
          o.isKilling || o.isRetiring ? { ...o.record, dying: !0 } : o.record
        )
      });
    case "has": {
      let o = h.get(u.short),
        x = M.has(u.short);
      return D(e, {
        ok: !0,
        op: "has",
        alive: (o !== void 0 && Me(o)) || x,
        present: o !== void 0 || x,
        ready: o !== void 0 && !o.isBooting
      });
    }
    case "await-ack":
      return Qt(h, H, e, "await-ack", u.short, u.nonce, u.timeoutMs);
    case "dispatch":
      if (!A0(u.auth, I))
        return D(e, {
          ok: !1,
          error: "dispatch rejected: this client didn't present the daemon control key",
          code: "EAUTH"
        });
      if ((await X(0), e.readableEnded || e.destroyed)) {
        a("tengu_bg_dispatch_stale_drop", {});
        return;
      }
      return Qt(h, H, e, "dispatch", u.d.short, u.d.nonce, u.timeoutMs, w(u.d));
    case "reply": {
      if (!A0(u.auth, I))
        return D(e, {
          ok: !1,
          error:
            u.auth === void 0
              ? "reply rejected: this window didn't present the daemon control key \u2014 it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly"
              : "reply rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH"
        });
      let o = h.get(u.short);
      if (M.has(u.short) && (!o || !Me(o)))
        return D(e, {
          ok: !1,
          error: `worker ${eQe} \u2014 restarting it; retry reply`,
          code: "ERESPAWNING"
        });
      if (!o || o.isRetiring || o.isKilling || o.record.outcome)
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      if (o.isUpgrading)
        return D(e, {
          ok: !1,
          error: `job is restarting on the ${OFt}; retry reply`,
          code: "ERESPAWNING"
        });
      if (
        u.nextTurn === !0 &&
        o.record.cliVersion !==
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
              new __filePath_9c2974765ad0f143_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION
      )
        return D(e, { ok: !1, error: "it runs a different Claude Code build", code: "ESKEW" });
      if (!(await o.reply(u.text, { nextTurn: u.nextTurn === !0 }))) {
        if (
          (o.isBooting || (o.isSpawnPending && o.isReplyQueueOnly)) &&
          !o.isUnverified &&
          !o.record.legacy
        ) {
          let x = "ERESPAWNING";
          if (!o.isBooting && u.nextTurn !== !0) {
            let C = _o(u.short);
            if (
              (WFe(u.text, null) ||
                (await HOo(C, Y)
                  .then((v) =>
                    v === "absent" ? o.dispatch.source === "spare" : v !== null && WFe(u.text, v)
                  )
                  .catch(() => !1))) &&
              !o.isBooting
            )
              x = "ENOREPLY";
          }
          return D(e, { ok: !1, error: "the session is still starting", code: x });
        }
        return D(e, {
          ok: !1,
          error: "job isn't accepting replies \u2014 it may be in a non-interactive state",
          code: "ENOREPLY"
        });
      }
      return D(e, { ok: !0, op: "reply" });
    }
    case "kill": {
      if ((M.delete(u.short), u.evict))
        Hne((x) => {
          delete x.workers[u.short];
        }, Y).catch((x) => l(x));
      let o = h.get(u.short);
      if (!o)
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      if (o.dispatch.launch.mode === "exec" && o.record.outcome)
        return (h.delete(u.short), D(e, { ok: !0, op: "kill" }));
      return (
        o.kill(u.signal ?? "SIGTERM", u.handoff ? "handoff" : "killed"),
        D(e, { ok: !0, op: "kill" })
      );
    }
    case "respawn-stale": {
      er(K, "respawn_stale");
      let o = h.get(u.short);
      if (!o)
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      let x = await o.respawnIfIdleStale();
      return D(e, { ok: !0, op: "respawn-stale", ...x });
    }
    case "resize": {
      let o = h.get(u.short);
      if (!o)
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      if (u.attachId) {
        let x = o.attachers.get(u.attachId);
        if (!x) return D(e, { ok: !0, op: "resize" });
        if (((x.cols = u.cols), (x.rows = u.rows), x.repaint))
          return (x.repaint(), D(e, { ok: !0, op: "resize" }));
      }
      return (o.resize(u.cols, u.rows), D(e, { ok: !0, op: "resize" }));
    }
    case "attach": {
      if (u.auth === void 0)
        t("[bg-attach] legacy client (no control key) \u2014 allowed via peerUid", {
          level: "warn"
        });
      else if (!A0(u.auth, I))
        return D(e, {
          ok: !1,
          error:
            "attach rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
          code: "EAUTH"
        });
      let o = h.get(u.short);
      if (M.has(u.short) && (!o || !Me(o)))
        return D(e, {
          ok: !1,
          error: `worker ${eQe} \u2014 restarting it; retry attach`,
          code: "ERESPAWNING"
        });
      if (!o || o.isKilling || (o.record.outcome && o.dispatch.launch.mode !== "exec"))
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      if (o.isUnverified)
        return D(e, {
          ok: !1,
          error:
            "worker is live but supervisor could not verify its identity \u2014 try restarting the supervisor to re-adopt",
          code: "EUNVERIFIED"
        });
      if (o.isRetiring)
        return D(e, { ok: !1, error: "job is retiring; retry attach", code: "ERESPAWNING" });
      if (o.record.legacy) {
        let N = o.dispatch,
          F = await lo(_o(N.short), Y).catch(() => null),
          me = F?.resumeSessionId ?? N.sessionId,
          ge = F?.cwd ?? N.cwd,
          ye = Mk(yG(Y)),
          Ie = await Gfe(me, ge, F?.linkScanPath, void 0, ye),
          $e = Ie.hasMessages;
        if (!$e) await J4e(Ie.path, ye);
        if (h.get(u.short) !== o || e.destroyed)
          return D(e, { ok: !1, error: "supervisor restarting", code: "ERESPAWNING" });
        if (!o.isKilling)
          (a("tengu_bg_attach_legacy_autorespawn", {}),
            o.kill("SIGTERM"),
            w({
              ...N,
              cwd: ge,
              source: "respawn",
              reattachEnv: void 0,
              launch: $e
                ? {
                    mode: "resume",
                    sessionId: me,
                    transcriptPath: Ie.path,
                    fork: !1,
                    flagArgs:
                      F?.tempo === "active"
                        ? Yan(F?.respawnFlags ?? N.respawnFlags)
                        : Xan(F?.respawnFlags ?? N.respawnFlags)
                  }
                : me !== N.sessionId
                  ? {
                      mode: "prompt",
                      args: ["--session-id", me, ...(F?.respawnFlags ?? N.respawnFlags)]
                    }
                  : N.launch
            }).catch((Ke) => l(Ke)));
        return D(e, {
          ok: !1,
          error: `${Nan} job respawning with worker-owned PTY; retry attach`,
          code: "ERESPAWNING"
        });
      }
      if (o.isUpgrading)
        return D(e, {
          ok: !1,
          error: `job is restarting on the ${OFt}; retry attach`,
          code: "ERESPAWNING"
        });
      if (await o.failIfHostExited("attach"))
        return D(e, {
          ok: !1,
          error: o.dispatch.launch.mode === "exec" ? nQe : tQe,
          code: "EHOSTDEAD"
        });
      if (e.destroyed) return;
      if (M.has(u.short) && (h.get(u.short) !== o || !Me(o)))
        return D(e, {
          ok: !1,
          error: `worker ${eQe} \u2014 restarting it; retry attach`,
          code: "ERESPAWNING"
        });
      if (
        h.get(u.short) !== o ||
        o.isKilling ||
        (o.record.outcome && o.dispatch.launch.mode !== "exec")
      )
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      let x =
          o.liveTranscriptPath !== void 0
            ? o.liveTranscriptPath
            : o.dispatch.launch.mode === "resume"
              ? o.dispatch.launch.transcriptPath
              : void 0,
        C =
          u.holdingFrame !== !0 && o.isBooting && x != null
            ? Et(x, u.cols, u.rows, { colorLevel: u.caps?.colorLevel, theme: u.caps?.systemTheme })
            : null;
      P(e, null);
      let v = o.marksCapable ? vn(16).toString("hex") : void 0;
      if (
        (e.write(
          _({
            ok: !0,
            op: "attach",
            imarkNonce: v,
            decModes: o.decModeSnapshot(),
            via: o.via,
            booting: o.bootingForAttachMetrics,
            tempo: o.record.tempo,
            state: o.record.state,
            cached: C !== null,
            stale: Boolean(
              o.record.cliVersion &&
              o.record.cliVersion !==
                {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.310",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-10-23T17:43:32Z",
                  GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
                  HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
                    new __filePath_9c2974765ad0f143_URL(
                      "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                      import.meta.url
                    )
                  ),
                  DD_SOURCEMAP_GROUP: "default"
                }.VERSION
            ),
            workerCliVersion: o.record.cliVersion
          }) +
            `
`
        ),
        a("tengu_bg_attach", {
          tempo: c(o.record.tempo),
          state: Qq(o.record.state),
          via: c(o.via),
          attachers: o.attachers.size,
          stale: Boolean(
            o.record.cliVersion &&
            o.record.cliVersion !==
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.310",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-23T17:43:32Z",
                GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
                HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
                  new __filePath_9c2974765ad0f143_URL(
                    "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    import.meta.url
                  )
                ),
                DD_SOURCEMAP_GROUP: "default"
              }.VERSION
          )
        }),
        C !== null)
      )
        e.write(_A + Gw + C);
      let z = Gw + Lfe,
        J = 6,
        Q = [],
        oe = 0,
        se = "",
        de = () => {},
        ie,
        Ae = 0,
        Ee = !1,
        Re = Dn(),
        xe = Re === 0 ? 0 : Math.max(1, Math.ceil((Re - Xt) / St)),
        Oe = (N) =>
          wht(
            _A +
              Gw +
              `
  \x1B[2m${N}\x1B[0m
`
          ),
        Se,
        B = !1,
        q = () => {
          if (!B) return;
          if (((B = !1), typeof o.replayInteractiveMarksTo === "function"))
            o.replayInteractiveMarksTo(u.attachId ?? e);
        },
        pe = (N) => {
          if (Q === null) return;
          Se?.();
          let F = Q;
          if (((Q = null), clearTimeout(at), N && !e.destroyed)) for (let me of F) e.write(me);
          if (((B = !0), N && F.length > 0)) q();
        },
        at = setTimeout(() => {
          let N = Q !== null && oe === 0,
            F = N && (u.holdingFrame === !0 || C !== null);
          if (!F) pe(!0);
          if (N && !e.destroyed) {
            if (!F) {
              let ge = o.record.state,
                ye =
                  ge === "starting" || ge === "resuming" || ge === "adopted" || ge === "crashed"
                    ? "Session is starting \u2014 it will appear once ready. Ctrl+Z to detach"
                    : "Waiting for session to redraw\u2026 Ctrl+Z to detach";
              e.write(Oe(ye));
            }
            let me = Date.now();
            ((ie = setInterval(() => {
              let ge = Date.now(),
                ye = ge - me;
              if (((me = ge), ye > St * 3)) Ae = 0;
              if (
                (Ae++,
                xe > 0 &&
                  Ae >= xe &&
                  !o.isKilling &&
                  !o.isRetiring &&
                  !o.isBooting &&
                  o.dispatch.launch.mode !== "exec")
              ) {
                (clearInterval(ie), (ie = void 0), de());
                let $e = o.dispatch.attachStallRespawns ?? 0,
                  Ke = { state: Qq(o.record.state), via: c(o.via), attempt: $e };
                if ($e >= 2) {
                  if (
                    (a("tengu_bg_attach_stall_gave_up", Ke),
                    e.write(
                      Oe("Session keeps stalling at startup.") +
                        nde(
                          Vqn(
                            "ESTALLED",
                            u.caps?.sessionTabs,
                            `Session ${u.short} keeps stalling at startup \u2014 check ${_o(u.short)} for logs.`
                          )
                        )
                    ),
                    !o.isKilling)
                  )
                    o.kill("SIGKILL", "failed", "session keeps stalling at startup");
                  return;
                }
                if (
                  (a("tengu_bg_attach_stall_respawn", Ke),
                  e.write(Oe("Session not responding \u2014 restarting it\u2026")),
                  On(o, e, w, () => Ee, M, Y),
                  !e.destroyed)
                )
                  e.write(nde(Vqn(Eht, u.caps?.sessionTabs, `worker ${eQe}, restarting`)));
                return;
              }
              let Ie = o.attachers.get(be);
              (de(), (de = o.resizeForRepaint(Ie?.cols ?? u.cols, Ie?.rows ?? u.rows)));
            }, St)),
              ie.unref());
          }
        }, Xt),
        vt = () => {
          if (ie) (clearInterval(ie), (ie = void 0));
        },
        st = o.onStream.subscribe((N) => {
          if (e.destroyed) return;
          if (((Ee = !0), Q !== null)) {
            let F = se + N;
            if (F.includes(_A) || F.includes(z)) {
              vt();
              let me = N.includes(_A) || N.includes(z) ? N : F;
              if ((de(), pe(!1), e.writableLength <= Fe))
                (e.write(o.decModeSnapshot().map(LW).join("") + me), q());
              else e.destroy();
              return;
            }
            if ((Q.push(N), (oe += N.length), (se = F.slice(-J)), oe > 65536)) pe(!0);
            return;
          }
          if ((vt(), e.writableLength > Fe)) {
            e.destroy();
            return;
          }
          (e.write(N), q());
        }),
        lt = o.onRepaintDone.subscribe(() => {
          (de(), pe(!0));
        });
      if (O() === "windows") for (let N of o.attachers.values()) N.kick();
      let be = u.attachId ?? e;
      if (
        (o.attachers.set(be, {
          cols: u.cols,
          rows: u.rows,
          caps: u.caps,
          imarkNonce: v,
          deliver: (N) => {
            if (!e.destroyed) e.write(N);
          },
          kick: () => {
            if ((a("tengu_bg_attach_kick", {}), ie)) (clearInterval(ie), (ie = void 0));
            if ((clearTimeout(at), de(), st(), lt(), e.removeAllListeners("data"), !e.destroyed))
              (e.write(nde(Vqn("EKICKED", u.caps?.sessionTabs, AOo))), e.end());
            o.attachers.delete(be);
          }
        }),
        C !== null && x != null)
      ) {
        let N = o.attachers.get(be);
        if (N)
          ((N.repaint = () => {
            if (e.destroyed) return;
            o.resize(N.cols, N.rows);
            let F = Et(x, N.cols, N.rows, {
              colorLevel: u.caps?.colorLevel,
              theme: u.caps?.systemTheme
            });
            e.write(_A + Gw + (F ?? ""));
          }),
            (Se = () => {
              ((N.repaint = void 0), (Se = void 0));
            }));
      }
      (o.noteActivity(), o.seedFocus(!0), o.sendAttacherCaps(u.caps ?? null));
      let Ge;
      if (o.dispatch.launch.mode === "exec") {
        let N = wht(_A + Gw);
        e.write(N);
        for (let F of o.ringSnapshot()) e.write(F);
        if (
          (pe(!1),
          (Ge = () => {
            let F = o.attachers.get(be);
            if (e.destroyed || !F) return;
            let me =
                o.record.outcome === "done"
                  ? "done"
                  : o.record.outcome === "killed"
                    ? "stopped"
                    : "failed",
              ge = wht(`\r
\x1B[2m\u2014 ${me} \xB7 Ctrl+Z to return \u2014\x1B[0m\r
`);
            (e.write(ge),
              (F.repaint = () => {
                if (e.destroyed) return;
                e.write(N);
                for (let ye of o.ringSnapshot()) e.write(ye);
                e.write(ge);
              }));
          }),
          o.record.outcome)
        ) {
          (Ge(),
            e.once("close", () => {
              (clearTimeout(at), st(), lt(), o.attachers.delete(be));
            }));
          return;
        }
      }
      de = o.resizeForRepaint(u.cols, u.rows);
      let cr = o.onSettle.subscribe(() => {
          if (Ge && o.record.outcome !== "killed") return Ge();
          e.end();
        }),
        At = new Pn("utf8"),
        ur = u.caps?.sessionTabs !== void 0,
        xt = (N) => {
          let F = At.write(N);
          if (F.length > 0 && (!Vt(F) || (ur && jt(F)))) o.lastInputAttacher = be;
          o.write(F);
        };
      if (s.length) xt(s);
      (e.on("data", xt),
        e.once("close", () => {
          if (ie) clearInterval(ie);
          if ((de(), pe(!1), st(), cr(), lt(), !o.attachers.delete(be))) return;
          let N = At.end();
          if (N) o.write(N);
          if (o.attachers.size > 0) {
            let F = [...o.attachers.values()].at(-1);
            (o.resizeForRepaint(F.cols, F.rows),
              o.sendAttacherCaps(F.caps ? { ...F.caps, systemTheme: void 0 } : null));
          } else (o.seedFocus(!1), o.sendAttacherCaps(null));
        }));
      return;
    }
    case "ensure-spare":
      return (er(K, "ensure_spare"), D(e, { ok: !0, op: "ensure-spare" }));
    case "permission-response":
      if (!A0(u.auth, I))
        return D(e, {
          ok: !1,
          error: "permission-response rejected: this client didn't present the daemon control key",
          code: "EAUTH"
        });
      return D(e, { ok: !0, op: "permission-response" });
    case "subscribe": {
      let o = h.get(u.short);
      if (!o)
        return D(e, {
          ok: !1,
          error: "job not found \u2014 it may have already exited",
          code: "ENOJOB"
        });
      if (
        (P(e, null),
        He(e, { type: "snapshot", record: o.record, streamTail: o.tail(u.tail ?? 200) }),
        o.record.outcome)
      ) {
        (He(e, { type: "settled", outcome: o.record.outcome }), e.end());
        return;
      }
      let x = [
        o.onStream.subscribe((C) => He(e, { type: "stream", line: C })),
        o.onState.subscribe((C) => He(e, { type: "state", patch: C })),
        o.onSettle.subscribe((C) => {
          (He(e, { type: "settled", outcome: C }), e.end());
        })
      ];
      e.on("close", () => {
        for (let C of x) C();
      });
      return;
    }
    default:
      return D(e, { ok: !1, error: `unknown op: ${u.op}`, code: "EUNKNOWN" });
  }
}
function Ln(r) {
  if (r === void 0) return;
  return ce(qqn.find((e) => e === r)) ?? b("other");
}
var zq = 45000;
async function axt(r) {
  let e = Date.now() + r;
  while (Date.now() < e) {
    if ((await bh({ proto: Oc, op: "ping" })).ok) return !0;
    await Ve(100);
  }
  return !1;
}
async function Cpr(r, e) {
  let n = Date.now() + r,
    s = 0;
  while (!0) {
    let h = n - Date.now();
    if (h <= 0) return null;
    if (await axt(Math.min(h, 1000))) {
      let w = Date.now();
      if (w >= s) {
        s = w + 1000;
        let p = await bE(1, e).catch(() => null);
        if (p?.origin === "service") return p;
        if (p?.origin === "foreground") return null;
      }
      await Ve(100);
    }
  }
}
async function Un(r, e) {
  let n = Date.now(),
    s = !1,
    h,
    w = "restarting",
    p;
  while (Date.now() < n + (s ? 30000 : 1e4)) {
    let S = await bh({ proto: Oc, op: "nudge" });
    if (S.ok && S.op === "nudge") {
      if (((s = !0), (h = S.version), !S.restarting)) {
        if (await Hn(S.version, r, S.processWrapper, S.upgradePending === !0, e)) return "retired";
        let y = _m();
        if (y && !S.processWrapper) return { refuse: y };
        if (!S.processWrapper && fz() !== "" && !(await A$())) return { refuse: yt() };
        sr(S.processWrapper);
        let T =
          S.version !==
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
              new __filePath_9c2974765ad0f143_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION;
        if (Date.now() - n > 200 || T)
          a("tengu_bg_skew_nudge", {
            converged: !0,
            duration_ms: Date.now() - n,
            daemon_version: pa(S.version),
            skewed: T
          });
        return "up";
      }
      ((w = "restarting"), await Ve(100));
      continue;
    }
    if (!S.ok && S.code === "ETIMEOUT") {
      ((s = !0), (w = "etimeout"), await Ve(100));
      continue;
    }
    if (!S.ok && S.code === "ENOCONN") {
      if (!s) {
        let y = await bE(1, e).catch(() => null);
        if (y?.bgDisabled) return "down";
        if (y) s = !0;
      }
      if (((p = tw(S.errno)), !s)) return "down";
      ((w = "enoconn"), await Ve(100));
      continue;
    }
    {
      let y = _m();
      if (y) return { refuse: y };
      if (fz() !== "" && !(await A$())) return { refuse: yt() };
    }
    return "up";
  }
  return (
    a("tengu_bg_skew_nudge", {
      converged: !1,
      restarting: w === "restarting",
      etimeout: w === "etimeout",
      enoconn: w === "enoconn",
      daemon_version: pa(h),
      ...(p && { connect_errno: p })
    }),
    "down"
  );
}
async function x6(r = {}, e) {
  if (O() !== "windows" && aUr())
    return (
      m("daemon_ensure_running", "uid_collapse"),
      { ok: !1, reason: _$o, causeCode: "uid_collapse" }
    );
  return or(r, e, !1);
}
async function or(r, e, n) {
  let s = Date.now(),
    h = await Un(r.forceTransient ?? !1, e);
  if (h === "up") return (nt(n), { ok: !0 });
  if (typeof h === "object") {
    if (r.spawnIntent)
      return (
        m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"),
        m("agent_launcher", "raw_daemon_client_misconfigured"),
        { ok: !1, reason: h.refuse, causeCode: "wrapper" }
      );
    return (nt(n), { ok: !0 });
  }
  let w = Date.now(),
    p = w - s > 40000,
    S = r.standsDownAtExit && h !== "retired",
    y = await ar(),
    T = y ? await Tpr() : { execPathStale: !1, launcherPrefixDead: !1 },
    A = y && (T.execPathStale || T.launcherPrefixDead);
  if (A)
    (a("tengu_bg_daemon_service_stale_exec", { launcher_dead: T.launcherPrefixDead }),
      t(
        T.execPathStale
          ? "daemon service exec path is stale (binary deleted) \u2014 falling back to transient spawn. Run 'claude daemon install' to repair."
          : "daemon service unit starts through a launcher that was deleted or is no longer executable \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.",
        { level: "warn" }
      ));
  let P = !1;
  if (y && !A) {
    if (((P = !0), S && An())) return rr(!0, s);
    r.onStarting?.();
    let B = await nr(e);
    if (B)
      return (
        m("daemon_ensure_running", B.code),
        { ok: !1, reason: B.reason, causeCode: B.causeCode }
      );
    let q = await kpr(),
      pe = await axt(5000);
    if (
      (a("tengu_bg_daemon_install", {
        outcome_ok: pe,
        via_service: !0,
        fresh_install: !1,
        clock_jump: p,
        duration_ms: Date.now() - s,
        platform_darwin: O() === "macos",
        platform_linux: O() === "linux",
        platform_windows: O() === "windows"
      }),
      pe)
    )
      return (nt(n), { ok: !0 });
    (a("tengu_bg_daemon_service_poll_fallthrough", { sr_ok: q.ok }),
      t(
        `daemon service ${Lit} 5s${q.ok ? "" : ` (${q.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`,
        { level: "warn" }
      ));
  }
  if (
    !y &&
    !r.forceTransient &&
    TLr() === "ask" &&
    (await lr()) &&
    !ue().daemonInstallPromptDismissed
  )
    return (
      a("tengu_bg_daemon_cold_start_ask", {}),
      {
        ok: !1,
        askInstall: !0,
        causeCode: "ask",
        reason:
          "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service."
      }
    );
  if (!P) {
    let B = _m();
    if (!(await A$()) && (await bE(1, e).catch(() => null)))
      return (
        m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"),
        m("agent_launcher", "zombie_kill_client_misconfigured"),
        { ok: !1, reason: B ?? yt(), causeCode: "wrapper" }
      );
    if (S && An()) return rr(!1, s);
    r.onStarting?.();
    let q = await nr(e);
    if (q)
      return (
        m("daemon_ensure_running", q.code),
        { ok: !1, reason: q.reason, causeCode: q.causeCode }
      );
  }
  let L = yF(),
    M = L.lastTransientSpawnAt === null ? null : Date.now() - L.lastTransientSpawnAt;
  L.lastTransientSpawnAt = Date.now();
  let H = _({ label: Vn(), cwd: fe(), ...r.spawnedBy, pid: process.pid }),
    I = Date.now(),
    Y = ["daemon", "run", "--origin", "transient", "--spawned-by", H],
    K = () => Apr(Y, void 0, { withoutOAuthTokenEnv: r.withoutOAuthTokenEnv }),
    ee = await K(),
    {
      err: V,
      child: Z,
      recoveredAfterReinstallWait: ae,
      gaveUpOnNpmInstallInProgress: u,
      reinstallWaitedMs: o = 0
    } = ee,
    x = ee.stderrPath;
  if (V) {
    if (x) tt(rt(x), { recursive: !0, force: !0 }).catch(() => {});
    return (
      a("tengu_bg_daemon_spawn_failed", {
        errno_enoent: E(V) === "ENOENT",
        errno_eacces: E(V) === "EACCES",
        errno: Er(V) ?? b("unknown"),
        launcher_configured: nm().length > 0 || _m() !== null
      }),
      m("daemon_ensure_running", "daemon_ensure_spawn_failed"),
      {
        ok: !1,
        reason: u
          ? `Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ze / 60000)} min, ${Er(V) ?? "spawn failed"}) \u2014 try again when the update finishes`
          : `spawn ${Qp()}: ${d(V)}`,
        causeCode: Er(V) ?? "spawn"
      }
    );
  }
  let C = ht({
      spawnIssuedAt: I + o,
      child: Z,
      stderrPath: x,
      wrapperConfigured: nm().length > 0,
      storageV5: e
    }),
    j = await Ue(C, Date.now() + 30000, !1),
    v = Date.now() - w - o > 60000;
  if (!j && v) j = await Ue(C, Date.now() + 5000, !1);
  if (!j && !v) j = await Ue(C, Math.max(Date.now() + (zq - 30000), C.spawnIssuedAt + zq), !0);
  let z = !1,
    J = 0,
    Q = !1;
  if (!j && !v && (await Bt(C, ot()))) {
    let B = await Qe(ot());
    if (
      ((J += B.waitedMs),
      a("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: B.waitedMs,
        recovered: B.recovered,
        extended: B.extended,
        install_in_progress: B.installInProgressAtEnd,
        after_child_exit: !0
      }),
      (Q = !B.recovered && B.installInProgressAtEnd),
      B.recovered)
    ) {
      let q = await K();
      if (q.err === null) {
        if (((z = !0), (J = 0), x)) tt(rt(x), { recursive: !0, force: !0 }).catch(() => {});
        ((x = q.stderrPath),
          (C = ht({
            spawnIssuedAt: Date.now(),
            child: q.child,
            stderrPath: x,
            wrapperConfigured: nm().length > 0,
            storageV5: e
          })),
          t(
            `daemon: ${ot()} was being reinstalled when the first daemon was spawned (it exited at once); restarted it after ${B.waitedMs}ms`
          ),
          (j = await Ue(C, C.spawnIssuedAt + zq, !0)));
      } else if (
        (t(`daemon: respawn after the npm reinstall window failed: ${d(q.err)}`, { level: "warn" }),
        a("tengu_bg_daemon_spawn_failed", {
          errno: Er(q.err) ?? b("unknown"),
          launcher_configured: nm().length > 0 || _m() !== null,
          after_reinstall_wait: !0
        }),
        q.stderrPath)
      )
        tt(rt(q.stderrPath), { recursive: !0, force: !0 }).catch(() => {});
    }
  }
  let oe = C.budgetExtended ? mt : zq,
    se = !j && !v && Date.now() - C.spawnIssuedAt - J > oe + 60000,
    de = !j && (v || se) && !n && !(await _t(C)),
    ie = !1,
    Ae,
    Ee,
    Re;
  if (!j) {
    let B = await et(C, !0);
    if (((Re = Ut(B)), B.length > 0)) {
      ((ie = !0),
        t(
          `daemon: transient spawn stderr:
${B}`,
          { level: "error" }
        ),
        (Ae = [...B.matchAll(/\bE[A-Z]{2,14}\b/g)].find(
          (pe) => !"/\\".includes(B[pe.index - 1] ?? ".")
        )?.[0]));
      let q = B.split(/\r?\n/)
        .map((pe) => zr(yn(pe)))
        .find((pe) => pe.length > 0);
      Ee = q && q.length > 200 ? `${re(q, 200)}\u2026` : q;
    }
  }
  if (x) tt(rt(x), { recursive: !0, force: !0 }).catch(() => {});
  if (
    (a("tengu_bg_daemon_install", {
      outcome_ok: j,
      via_service: !1,
      fresh_install: !1,
      clock_jump: v || p || se,
      duration_ms: Date.now() - s,
      platform_darwin: O() === "macos",
      platform_linux: O() === "linux",
      platform_windows: O() === "windows",
      had_stderr: ie,
      child_exited: C.childExit !== null,
      ...(C.childExit?.code !== void 0 &&
        C.childExit.code !== null && { exit_code: C.childExit.code }),
      ...(C.childExit?.signal && { exit_signal: ce(C.childExit.signal) }),
      ...(C.childExitAt !== null && {
        child_exit_ms: Math.max(0, C.childExitAt - C.spawnIssuedAt)
      }),
      ...(Re && { stderr_class: Re }),
      reinstall_respawn: z,
      budget_extended: C.budgetExtended,
      ...(de && { clock_jump_retry: b("scheduled") }),
      ...(n && { clock_jump_retry: b("retry") }),
      ...(M !== null && { spawn_gap_ms: M }),
      ...(r.spawnedBy !== void 0 && {
        spawned_by: ce(qqn.find((B) => B === r.spawnedBy?.label)) ?? b("other")
      }),
      ...(Ae && { stderr_errno: tw(Ae) }),
      ...(!j && (await Ht(C)))
    }),
    j)
  ) {
    if ((jn(), ae || z)) f("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall");
    else nt(n);
    if (nm().length > 0) {
      let B = await bh({ proto: Oc, op: "nudge" }).catch(() => null);
      sr(B?.ok && B.op === "nudge" ? B.processWrapper : void 0);
    }
    return { ok: !0 };
  }
  if (de)
    return (
      t(
        "daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable \u2014 retrying the whole start once",
        { level: "warn" }
      ),
      or({ ...r, onStarting: void 0, standsDownAtExit: !1 }, e, !0)
    );
  m("daemon_ensure_running", "daemon_ensure_transient_unreachable");
  let xe = Q
      ? ` \u2014 Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ze / 60000)} min); try again when the update finishes`
      : "",
    Oe = nm()[0];
  if (Oe)
    return (
      a("tengu_bg_daemon_spawn_failed", { launcher_configured: !0, failed_stage: b("unknown") }),
      m("agent_launcher", "daemon_never_reachable"),
      {
        ok: !1,
        causeCode: "timeout",
        reason: `launcher \`${Oe}\` ran but Claude Code never started${Ee ? ` \u2014 ${Ee}` : ` (nothing on stderr within ${oe / 1000}s)`}${xe}`
      }
    );
  let Se = C.siblingHolderSeen ? null : C.childExit;
  if (Se) {
    let B = Se.signal ? `signal ${Se.signal}` : `exit code ${Se.code ?? "?"}`;
    return {
      ok: !1,
      causeCode: "exited",
      reason: Ee
        ? `${Qp()} ${Nit} (${B}): ${Ee}${xe}`
        : `${Qp()} ${Nit} (${B}, nothing on stderr) and no other ${Qp()} answered within ${Math.round(Math.min(Date.now() - C.spawnIssuedAt - J, oe) / 1000)}s${xe}`
    };
  }
  return { ok: !1, causeCode: "timeout", reason: `${Qp()} ${Lit} ${oe / 1000}s${xe}` };
}
function rr(r, e) {
  return (
    t("daemon: not started, because this process is exiting"),
    a("tengu_bg_daemon_stood_down_at_exit", { via_service: r, duration_ms: Date.now() - e }),
    f("daemon_ensure_running", "daemon_ensure_stood_down_at_exit"),
    {
      ok: !1,
      stoodDown: !0,
      viaService: r,
      causeCode: "exiting",
      reason: "this process is exiting"
    }
  );
}
function nt(r) {
  if (r) {
    f("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
    return;
  }
  g("daemon_ensure_running");
}
function ot() {
  return xu().target;
}
function Wn(r) {
  if (r.daemonOrigin !== "transient") return !1;
  if (r.daemonVersion === r.clientVersion) return !1;
  if (r.daemonTarget === r.clientTarget) return !1;
  let e = Xat(r.daemonVersion),
    n = Xat(r.clientVersion);
  if (e !== null && n !== null) {
    if (qat(r.daemonVersion) !== qat(r.clientVersion)) return !1;
    return n > e;
  }
  if (k3t(r.daemonVersion) || k3t(r.clientVersion)) return !1;
  return (
    je.valid(r.clientVersion) !== null &&
    je.valid(r.daemonVersion) !== null &&
    je.gt(r.clientVersion, r.daemonVersion)
  );
}
async function Hn(r, e, n, s, h) {
  if (_m() !== null) return !1;
  if (!k("tengu_bg_binary_takeover", !0)) return !1;
  let w =
      r !==
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
          new __filePath_9c2974765ad0f143_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
    p = w && !s,
    S = Fn(n, w);
  if (!p && !S) return !1;
  if (!(await A$())) return !1;
  if (await ar()) return !1;
  if (!e && TLr() === "ask" && (await lr()) && !ue().daemonInstallPromptDismissed) return !1;
  let y = await Bn(ot()).catch(() => null);
  if (!y) return !1;
  let T = Tze().cmd;
  if (!(await _e(T))) {
    let I = Tze({ pinToCurrentBinary: !0 }).cmd;
    if (I === T || !(await _e(I))) return !1;
  }
  let A = await bE(1, h).catch(() => null);
  if (!A) return !1;
  if (!GIt(A))
    return (
      t(`bg: skipping stale-daemon retire \u2014 lock pid ${A.pid} has no procStart identity`),
      !1
    );
  let P = Wn({
      daemonVersion: A.version,
      daemonOrigin: A.origin,
      daemonTarget: A.launchTarget,
      clientVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
          new __filePath_9c2974765ad0f143_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      clientTarget: y
    }),
    L = p && P,
    M =
      S &&
      A.origin === "transient" &&
      !A.processWrapper &&
      (A.version ===
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
            new __filePath_9c2974765ad0f143_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION ||
        (s && P));
  if (!L && !M) return !1;
  let H = await u3e(A.pid);
  if (H === "timed-out") {
    try {
      process.kill(A.pid, "SIGKILL");
    } catch {}
    H = await u3e(A.pid);
  }
  if (H !== "exited") return !1;
  if (M) yF().prefixAxis = "took-over";
  return (
    t(
      L
        ? `bg: ${Qp()} pid ${A.pid} runs ${A.version}; this binary (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(new __filePath_9c2974765ad0f143_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}) is a newer build \u2014 retired the stale ${Qp()} so new sessions use the current binary`
        : `bg: ${Qp()} pid ${A.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped \u2014 retired it so the replacement runs through the configured launcher`,
      { level: "warn" }
    ),
    a("tengu_bg_daemon_binary_takeover", {
      daemon_age_ms: Date.now() - A.startedAt,
      via_prefix: M,
      via_version: L,
      daemon_version: pa(A.version)
    }),
    !0
  );
}
function Fn(r, e) {
  if (fz() === "" || r) return !1;
  let s = yF();
  if (s.prefixAxis === "took-over") {
    if (e) return !1;
    if (!s.prefixContractViolationLogged)
      ((s.prefixContractViolationLogged = !0),
        t(
          `bg: a raw ${Qp()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`,
          { level: "warn" }
        ),
        a("tengu_bg_launcher_replacement_raw", {}));
    return !1;
  }
  if (e) return !0;
  if (s.prefixAxis === "attempted") return !1;
  return ((s.prefixAxis = "attempted"), !0);
}
async function nr(r) {
  let e = await bE(1, r).catch(() => null);
  if (!e) return null;
  if (e.bgDisabled)
    return (
      a("tengu_bg_daemon_bg_disabled_skip", { origin_service: e.origin === "service" }),
      {
        reason:
          "the background service on this machine is running without background sessions \u2014 its control socket failed to start. " +
          "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
        code: "daemon_ensure_bg_disabled",
        causeCode: "bg_disabled"
      }
    );
  if (Date.now() - e.startedAt <= bt + 5000) return null;
  let n = await bh({ proto: Oc, op: "ping" }, { timeoutMs: 1000 }),
    s = {
      started_ago_ms: Date.now() - e.startedAt,
      origin_transient: e.origin === "transient",
      origin_service: e.origin === "service",
      version_skew:
        e.version !==
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_9c2974765ad0f143(
            new __filePath_9c2974765ad0f143_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
    };
  if (n.ok || n.code === "ETIMEOUT")
    return (a("tengu_bg_daemon_zombie_false_positive", { ...s, recheck_etimeout: !n.ok }), null);
  if (!GIt(e))
    return (
      t(
        `bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) \u2014 not signalled`,
        { level: "warn" }
      ),
      {
        reason: `${BUe({ pid: e.pid, outcome: "unverified" })}. If no daemon is running, delete ${iD()}; if pid ${e.pid} is a live process you own, stop it yourself first.`,
        code: "daemon_ensure_zombie_unverified",
        causeCode: "zombie"
      }
    );
  let h = !1;
  try {
    h = await Mn(RY()).then(
      () => !0,
      () => !1
    );
  } catch {}
  if (
    (t(
      `bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`,
      { level: "warn" }
    ),
    (await u3e(e.pid)) === "eperm")
  )
    return {
      reason: `${Qp()} socket missing; could not restart supervisor (EPERM)`,
      code: "daemon_ensure_zombie_kill_failed",
      causeCode: "zombie"
    };
  return (a("tengu_bg_daemon_zombie_restart", { pid: e.pid, ...s, sock_exists: h }), null);
}
async function ar() {
  if (ir() || !(await F5e())) return !1;
  return Lee().catch(() => !1);
}
function ir() {
  return Boolean(process.env.CLAUDE_CONFIG_DIR);
}
async function vcs() {
  return !ir() && Ct();
}
function Vn() {
  let r = process.argv.slice(2);
  if (r[0] === "agents") return "claude agents";
  if (r.includes("--bg")) return "claude --bg";
  return "claude";
}
async function jn() {
  let r = O();
  if (r !== "linux" && r !== "wsl") return;
  let e = await $n("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) return;
  t(
    "logind KillUserProcesses=yes \u2014 SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.",
    { level: "warn" }
  );
}
function yt() {
  return `${eC}: launcher \`${nm()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`;
}
function sr(r) {
  let e = fz();
  if (e === "" || !r) return;
  if (r === e) g("agent_launcher");
  else f("agent_launcher", "served_by_skewed_wrapper");
}
async function lr() {
  return JJe() && (await F5e()) && !process.env.CLAUDE_CONFIG_DIR && XJe();
}
function Rpr(r) {
  return We.daemon(["host-managed", r]);
}
function v3t(r) {
  return (
    (Ne(r?.CLAUDE_CODE_USE_GATEWAY)
      ? `gateway
`
      : "") +
    (Ne(r?.CLAUDE_CODE_HOST_GATEWAY_LINEAGE)
      ? `lineage
`
      : "")
  );
}
function Ecs(r) {
  let e = new Set(r.split(/\r?\n/));
  return { gateway: e.has("gateway"), lineage: e.has("lineage") };
}
var Gn = { namespace: "daemon", relPath: ["host-managed"] };
async function Xxn(r) {
  let e = await r.ensureScope(Gn);
  if (!e.ok) throw dr(Error("host tombstone folder not made", { cause: e.error }), e.error);
}
async function Jxn(r, e, n) {
  let s = await r.write(Rpr(e), n, { publishDiscipline: "inPlace" });
  if (!s.ok) throw dr(Error("host tombstone write failed", { cause: s.error }), s.error);
}
async function E3t(r, e) {
  await r.delete(Rpr(e)).catch(() => {});
}
function dr(r, e) {
  let n = Zm(e);
  return Object.assign(r, n !== void 0 ? { code: n } : {});
}
export {
  yF,
  bcs,
  F5e,
  Leo,
  S3t,
  ixt,
  kpr,
  w3t,
  Scs,
  Tpr,
  Lee,
  Apr,
  WFe,
  Vat,
  Neo,
  Mie,
  wcs,
  zq,
  axt,
  Cpr,
  x6,
  vcs,
  Rpr,
  v3t,
  Ecs,
  Xxn,
  Jxn,
  E3t
};

import * as __invocation_9c2974765ad0f143 from "./__invocation.mjs";

//# sourceMappingURL=chunk-c1yc65r1.js.map
