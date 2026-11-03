// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  Hl,
  EUr,
  jQ,
  Dun,
  kUr,
  x3n,
  aZe,
  HO,
  LUr,
  ZK,
  H3n,
  $3n,
  tAe,
  Nze,
  W3n,
  G3n,
  ze
} from "./chunk-1ww4jg8j.js";
import { d } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { p } from "./chunk-qmkm2x59.js";
import { it } from "./chunk-qmmh8tq2.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { wjn } from "./chunk-kngqmjg3.js";
import { HG } from "./chunk-5bfrnkry.js";
import { o, u } from "./chunk-0bqrj5ah.js";
var O = p(() => u({ egress_probe: o().refine((s) => s !== "not-run") }));
async function D(s, b) {
  let { exe: n, prependArgs: h } = HO(),
    a = Math.floor(s),
    c = Date.now(),
    {
      exitCode: _,
      timedOut: S,
      stdout: e,
      stderr: w,
      error: r
    } = await it(
      n,
      [
        ...h,
        "wfp",
        "verify",
        "--target",
        "127.0.0.1:9",
        ...(b ? ["--allow-loopback"] : []),
        "--write-restricted-token"
      ],
      { timeout: a, stdin: "ignore", cwd: HG(), maxBuffer: 1e5 }
    ),
    l = Math.max(0, Date.now() - c),
    k = Math.max(1, Math.round(l / 1000));
  t(
    `[sandbox] starting the sandbox account: ${S ? "stopped at the time limit" : `exit ${_ ?? "none"}`} after ${k}s (limit ${s} ms): ${w || e || r || (_ === void 0 && !S ? "srt-win never ran, or something other than the limit ended it" : "no output")}`
  );
  let C = { duration_ms: l, exit_code: _ ?? -1 };
  if (O().safeParse(ot(e, !1)).success)
    return (g("sandbox_windows_first_start", C), { outcome: "started", seconds: k });
  let i = S ? "timed_out" : "not_started";
  return (f("sandbox_windows_first_start", i, C), { outcome: i, seconds: k });
}
var yxn =
  "Setting up the Windows sandbox. Approve the administrator prompt if Windows shows one. After that, set-up can take a few minutes.";
class L {
  inFlight = void 0;
  run(s) {
    return (
      (this.inFlight ??= s().finally(() => {
        this.inFlight = void 0;
      })),
      this.inFlight
    );
  }
}
var E = new W(() => new L());
function _xn(s, b = () => {}, n = 1 / 0) {
  return E.of(s).run(() => G(b, n));
}
async function G(s, b) {
  let n = [],
    h = HO(),
    a = $3n(),
    c = await jQ({ srtWin: h }).catch(() => {
      return;
    }),
    _ = c !== void 0 && c.user.provisioned && c.wfp.state !== "absent" && c.wfp.allowLoopback !== a,
    S = wjn(c?.user);
  if (
    S !== void 0 &&
    c?.user.provisioned &&
    c.user.credPresent &&
    x3n(c.user) === void 0 &&
    (c.wfp.state === "installed" || c.wfp.state === "cannot-read") &&
    !_
  ) {
    let e = await ze.checkDependenciesAsync().catch(() => {
      return;
    });
    if (e?.errors.length === 1 && e.errors[0] === S)
      return (
        f("sandbox_windows_install", "secondary_logon_unusable"),
        {
          status: "partial",
          message: `Set-up changed nothing. Run it again once this is fixed: ${S}`
        }
      );
  }
  if (_)
    n.push(
      `The sandbox on this machine was set up with local connections ${a ? "off" : "on"}, and sandbox.network.allowLocalBinding asks for them ${a ? "on" : "off"}: this set-up replaces its network filters.`
    );
  if (a)
    n.push(
      `Local connections are on (sandbox.network.allowLocalBinding). ${EUr} To keep sandboxed commands off local ports, remove that setting and run /sandbox install again.`
    );
  for (let e of n) s(e);
  try {
    let e = await kUr({
      sandboxUser: aZe,
      allowLoopback: a,
      force: _,
      onProfileGrantStart: (i) =>
        s(
          `${i.replace(/\s*Skip with[\s\S]*$/, "")} ${F} This needs no further elevation and can take a few minutes. ${LUr()}`
        ),
      onProfileGrantProgress: s,
      srtWin: h
    });
    if (e.cancelled) {
      if (e.user.provisioned && e.user.credPresent) {
        let i = wjn(e.user);
        if (i === void 0 && tAe().source === "managed" && Nze()) {
          ze.invalidateDependencyCache();
          let y = await N(e.user);
          if ((await ze.checkDependenciesAsync(), y !== null)) return y;
          return (
            g("sandbox_windows_install"),
            {
              status: "ok",
              message:
                "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned \u2014 the sandbox TLS inspection CA is now set up and trusted for the sandbox user." +
                " Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt." +
                v()
            }
          );
        }
        return (
          f("sandbox_windows_install", "uac_cancelled_provisioned"),
          ze.invalidateDependencyCache(),
          await ze.checkDependenciesAsync(),
          {
            status: "cancelled",
            message: `Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process \u2014 run /sandbox to check the current status; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt.${i === void 0 ? "" : ` ${i}`}`
          }
        );
      }
      return (
        f("sandbox_windows_install", "uac_cancelled"),
        {
          status: "cancelled",
          message:
            "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters."
        }
      );
    }
    let w =
        e.user.provisioned &&
        e.user.credPresent &&
        (e.wfp.state === "installed" || e.wfp.state === "cannot-read"),
      r = wjn(e.user),
      l;
    if (w && r === void 0 && !(tAe().source === "managed" && Nze())) {
      await H3n({
        exePath: process.execPath,
        previous: void 0,
        getUserStatus: () => Promise.resolve(e.user)
      });
      let i = Math.min(150000, b - Date.now());
      if (i >= 1e4) l = await D(i, a);
      else (f("sandbox_windows_first_start", "no_time_left"), (l = "no_time_left"));
    }
    if ((ze.invalidateDependencyCache(), await ze.checkDependenciesAsync(), w)) {
      if (r === void 0 && tAe().source === "managed" && Nze()) {
        let T = await N(e.user);
        if (T !== null) return T;
      }
      let i = e.profileGrant?.applied === !0 ? e.profileGrant.result.unprotected : [];
      if (i.length > 0)
        return (
          f("sandbox_windows_install", "profile_exclusion_unprotected"),
          {
            status: "partial",
            message: `WARNING: the sandbox is installed, but ${i.length} credential store(s) that set-up excludes could not be closed, and sandboxed commands CAN READ ${i.length === 1 ? "it" : "them"}: ${i
              .slice(0, 10)
              .map((T) => `${T.path} (${T.reason})`)
              .join(
                "; "
              )}${i.length > 10 ? "; \u2026" : ""}. Only the owner of such a path or an administrator can close it; run /sandbox install again afterwards.${A(e.profileGrant)}${x(a, n)}${v()}${r === void 0 ? "" : ` ${r}`}`
          }
        );
      let y =
        e.wfp.state === "installed"
          ? "Sandbox user and network filters installed"
          : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
      if (r !== void 0)
        return (
          f("sandbox_windows_install", "secondary_logon_unusable"),
          { status: "partial", message: `${y}.${v()}${x(a, n)}${A(e.profileGrant)} ${r}` }
        );
      g("sandbox_windows_install");
      let P = l === void 0 || l === "no_time_left" ? "" : `${l.seconds} ${I(l.seconds, "second")}`,
        R =
          l === void 0
            ? ""
            : {
                started: ` Windows signed in the sandbox user in ${P}.`,
                timed_out: ` The sandbox user had not finished signing in after ${P}. If the sandbox fails to start, restart Claude Code. If it fails again, run /sandbox install again.`,
                not_started:
                  " Claude Code couldn't sign in the sandbox user. It will try again the next time it starts the sandbox, and show the reason if that fails too.",
                no_time_left:
                  " Set-up ran out of time before it could sign in the sandbox user, so the sandbox may fail to start the first time. If it does, restart Claude Code. If it fails again, run /sandbox install again."
              }[l === "no_time_left" ? l : l.outcome];
      if (ze.isSandboxingEnabled())
        return {
          status: "ok",
          message: `${y} and active.${v()}${x(a, n)}${A(e.profileGrant)}${R}`
        };
      return ze.isSandboxEnabledInSettings()
        ? {
            status: "ok",
            message: `${y}. Run /sandbox to check the current status.${v()}${x(a, n)}${A(e.profileGrant)}${R}`
          }
        : {
            status: "ok",
            message: `${y}. Run /sandbox to choose a sandbox mode and turn it on.${v()}${x(a, n)}${A(e.profileGrant)}${R}`
          };
    }
    let k = !e.user.provisioned
      ? "user_not_provisioned"
      : !e.user.credPresent
        ? "cred_not_readable"
        : "wfp_not_installed";
    return (
      f("sandbox_windows_install", k),
      {
        status: "partial",
        message: `Install completed (sandbox user: ${{ user_not_provisioned: "not provisioned", cred_not_readable: "provisioned, credential not readable", wfp_not_installed: "provisioned" }[k]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.`
      }
    );
  } catch (e) {
    ze.invalidateDependencyCache();
    let w = d(e);
    t(`/sandbox install failed: ${w}`, { level: "error" });
    let r = ZK(w, { omitCcRemedy: !0 }).replace(/\.$/, "");
    if (e instanceof Hl && e.code === "install_timeout")
      return (
        f("sandbox_windows_install", "uac_timeout"),
        {
          status: "error",
          message: `The install timed out after 2 minutes: ${r}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine \u2014 run /sandbox to check sandbox status.`
        }
      );
    if (e instanceof Hl && e.code === "profile_grant_blocked_by_session")
      return (
        await ze.checkDependenciesAsync(),
        f("sandbox_windows_install", "profile_grant_blocked"),
        {
          status: "partial",
          message:
            "The sandbox account and network filters are installed, but the read access to your user profile was left as it was: it is changed only while no sandboxed session or command is running on this machine, and one is (another Claude Code window, or this one if it has run a sandboxed command). Close the sessions that use the sandbox, then run `claude sandbox install` in a terminal, or /sandbox install in a new session." +
            x(a, n)
        }
      );
    if (e instanceof Hl && e.code === "profile_operation_in_progress")
      return (
        await ze.checkDependenciesAsync(),
        f("sandbox_windows_install", "profile_operation_in_progress"),
        {
          status: "partial",
          message:
            "The sandbox account and network filters are installed, but the read access to your user profile was left as it was: another sandbox set-up step on this profile is still running (a /sandbox install in another window, or the removal of that access). Wait for it to finish, then run /sandbox install again." +
            x(a, n)
        }
      );
    if (e instanceof Hl && e.code === "profile_grant_failed")
      return (
        await ze.checkDependenciesAsync(),
        f("sandbox_windows_install", "profile_grant_failed"),
        {
          status: "partial",
          message: `The sandbox account and network filters are installed, but your user profile could not be made readable to sandboxed commands: ${r.replace(/\s*No session starts until it is complete[\s\S]*$/, "").replace(/\.$/, "")}. Sandboxed commands will not start until that step completes. Run /sandbox install again to retry.${x(a, n)}`
        }
      );
    if (e instanceof Hl && e.code === "install_config_conflict")
      return (
        f("sandbox_windows_install", "config_conflict"),
        {
          status: "error",
          message:
            "A sandbox network-filter set is already installed with a different configuration: under a different sandbox account name, or with the other setting for local connections (sandbox.network.allowLocalBinding) while its state could not be read. Run /sandbox install again; if it is refused again, close every Claude Code session and run claude sandbox uninstall in a terminal, then run /sandbox install."
        }
      );
    if (/^srt-win (status|wfp|user)[ :]/.test(w))
      return (
        f("sandbox_windows_install", "status_probe_failed"),
        {
          status: "error",
          message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${r}. Run /sandbox to check the current status.`
        }
      );
    return (
      m("sandbox_windows_install", "install_threw"),
      {
        status: "error",
        message: `Couldn't install the sandbox user and network filters: ${r}. Run /sandbox install again to retry.`
      }
    );
  }
}
var F =
  "The sandbox account is one per machine: where other people use this machine, their sandboxed commands can read your profile too.";
function A(s) {
  if (s === void 0) return "";
  if (!s.applied)
    return ` Your user profile was not made readable to sandboxed commands (${s.reason.replace(/\.$/, "")}), so they can read nothing in it; run /sandbox install again, as the user who starts sessions, to apply that.`;
  let { profile: b, granted: n, denied: h, notGranted: a } = s.result;
  return ` Sandboxed commands can now read your user profile (${b}) except credential stores: ${n} folders made readable, ${h} excluded${a.length > 0 ? `, ${a.length} left unreadable because their permissions could not be changed` : ""}. That includes package-manager configuration that can hold feed tokens (.npmrc, pip.ini, NuGet.Config, Maven settings.xml, gradle.properties, .gitconfig). ${F} ${LUr()}`;
}
function x(s, b) {
  let n = ze.untilRestart();
  return `${b.map((h) => ` ${h}`).join("")}${n === void 0 ? "" : ` This session started with local connections ${s ? "off" : "on"} and keeps that until it ends, so its sandbox ${n === "refused" ? "cannot run" : "is off"} now. ${n === "refused" ? G3n : W3n}.`}`;
}
async function N(s) {
  let b = await H3n({
    exePath: process.execPath,
    previous: void 0,
    getUserStatus: () => Promise.resolve(s)
  });
  try {
    await Dun({ status: s, srtWin: HO() });
  } catch (n) {
    let h = d(n);
    t(`/sandbox install: managed sandbox CA step failed: ${h}`, { level: "error" });
    let a = ZK(h, { omitCcRemedy: !0, programPermissionAdded: b?.added }).replace(/\.$/, "");
    if (
      n instanceof Hl &&
      (n.code === "trust_ca_failed" || n.code === "spawn_failed" || n.code === "srt_win_timeout")
    )
      return (
        f("sandbox_windows_install", "trust_ca_failed"),
        {
          status: "partial",
          message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${a}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
        }
      );
    return (
      f("sandbox_windows_install", "persistent_ca_failed"),
      {
        status: "partial",
        message: `The sandbox TLS inspection CA couldn't be created: ${a}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.`
      }
    );
  }
  return null;
}
function v() {
  return Nze() && ze.needsRestartForTlsTerminate()
    ? " Restart Claude Code to enable TLS inspection for this session."
    : "";
}
export { yxn, _xn };

//# sourceMappingURL=chunk-hjj4qvg2.js.map
