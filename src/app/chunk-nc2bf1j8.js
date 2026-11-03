// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bt, _, ei, t } from "./chunk-4kxznmzw.js";
import { di, Ze } from "./chunk-a16y5hcz.js";
import { V_ } from "./chunk-dc0nzty2.js";
import { De } from "./chunk-2qx8pe6s.js";
import { L, no, gT, iie, Ol } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { Ye, d, E } from "./chunk-fs43t96t.js";
import { X, UI, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Le } from "./chunk-jazcqqqr.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { p } from "./chunk-qmkm2x59.js";
import { KFe, Hcs } from "./chunk-nzn0v5d3.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { yg } from "./chunk-xe386mry.js";
import { w_, i } from "./chunk-cj37hmns.js";
import { u2 } from "./chunk-qmmh8tq2.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Is, Tf } from "./chunk-1e5yp9hx.js";
import { xo, aE } from "./chunk-5rw2zfa0.js";
import { Jn } from "./chunk-d5zj5299.js";
import { IUr, Mze, mU, JK, Hun, WP, Fc, Dze, RHe, e4s, h1t, t4s } from "./chunk-1ww4jg8j.js";
import { Ud } from "./chunk-d54avynm.js";
import { ln, pe } from "./chunk-7c3thgax.js";
import {
  She,
  jne,
  khe,
  kDe,
  The,
  pln,
  yQe,
  CQe,
  ky,
  fGe,
  fQ,
  Rhe,
  lb,
  fjs,
  cUt,
  pQ,
  pjs,
  pGe,
  gjs,
  PQe,
  A0r,
  PDe,
  IDe,
  bjs,
  Sjs,
  uUt,
  M4n,
  D4n,
  fUt,
  wjs,
  x0r,
  Ei
} from "./chunk-6h7ejyet.js";
import { $i, Wn, yH } from "./chunk-ajtyjx88.js";
import { wb, lqe, Grr, Be } from "./chunk-at88wjsn.js";
import { Mo } from "./chunk-r00j5r9s.js";
import { tm, toe, ahn } from "./chunk-h2tyaevk.js";
import {
  Jte,
  Cpt,
  age,
  Rpt,
  _Lt,
  ORr,
  xpt,
  MRr,
  eOs,
  tOs,
  gWn,
  A3,
  vLt,
  Ipt,
  Vnn,
  kOs,
  TOs,
  wWn,
  Opt,
  AOs,
  lGn,
  sKn,
  bne,
  TMr,
  ugt,
  cKn,
  dRo,
  uKn,
  uRo,
  Hke
} from "./chunk-j0tbz6ra.js";
import { pHe, mHe, gHe, Hde } from "./chunk-ssq884a9.js";
import { JG, VJn, YJn, XJn, f9s, m9s } from "./chunk-wany0nxw.js";
import { LQn } from "./chunk-5z6t3gwt.js";
import { qbt, Nye } from "./chunk-gv3j9e36.js";
import { Gm, c2r } from "./chunk-g49hnbqz.js";
import { DL, sTe, I1 } from "./chunk-yyq6mj0n.js";
import { loe } from "./chunk-w89b9cst.js";
import { GPe, D6e, H6e, EUe } from "./chunk-3r796kh5.js";
import { Hxn, t3t, n3t, Gds, zds, T5e, Lxn, Kds, tpr } from "./chunk-9rp40b48.js";
import { ils, tfr, _k } from "./chunk-vmp5rezm.js";
import { D7t } from "./chunk-rjdks4dd.js";
import { Vds, qds, Oat, $xn } from "./chunk-eq8vmbm3.js";
import { Yds, XRt, Xds, pwe } from "./chunk-xteh8x99.js";
import { aOn } from "./chunk-nv99q8hw.js";
import { Jq } from "./chunk-x1n0c69j.js";
import { Lpe, Kwe } from "./chunk-pw1f3tmw.js";
import { fL } from "./chunk-hyekvybh.js";
import { Jd, m7t } from "./chunk-gmwnnpe9.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { pz, C$ } from "./chunk-fcym4pv0.js";
import { gr } from "./chunk-z2vz1f06.js";
import { qe } from "./chunk-0np0053t.js";
import { o, v, T, yt, B } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { _e } from "./chunk-n8wdmnah.js";
var Ko = /^[0-9a-f]{64}$/;
function Jo(e) {
  let { description: n } = e,
    r = e.input;
  if (typeof r !== "object" || r === null) return !1;
  let s = Object.keys(r),
    u = "content_digest" in r ? r.content_digest : void 0;
  return (
    typeof n === "string" &&
    n.length <= pz &&
    C$(n) &&
    s.length === 1 &&
    typeof u === "string" &&
    Ko.test(u)
  );
}
function PRn(e, n) {
  if (!Jo(e)) return "unshowable";
  return n === !1 ? "proves_no_device" : void 0;
}
function Xo() {
  let e = new Map();
  return {
    known(n) {
      let r = Math.max(e.get(n) ?? 0, 1);
      return (e.set(n, r), r);
    },
    next(n) {
      let r = (e.get(n) ?? 0) + 1;
      return (e.set(n, r), r);
    }
  };
}
function Zo() {
  return {
    consentPin: Hcs(),
    generations: Xo(),
    pointedToCommand: { shown: !1 },
    setAsideSessions: new Set(),
    decided: De()
  };
}
var gat = new W(Zo);
import { realpath as or } from "fs/promises";
var Yo = /^[a-z_]{2,}:\[?[^/]*\]?$/;
function Je(e) {
  let r = [
      e.launchDirReal,
      e.launchDir,
      ...(e.sync !== void 0
        ? [e.sync.rootReal, ...(e.sync.root !== void 0 ? [e.sync.root] : [])]
        : []),
      ...e.extraReach
    ].filter((u) => !Yo.test(u)),
    s = r.find((u) => !WP(u));
  if (s !== void 0)
    return (
      t(
        `[deviceHooks] reach: a root that is not an absolute path (${JSON.stringify(s)}) \u2014 everything on this machine counts as in the cloud session's reach`,
        { level: "warn" }
      ),
      [mU]
    );
  return r.map((u) => Fc(u.replace(/\/+$/, "")) || "/");
}
function bn(e, n) {
  return (e.length === 1 && e[0] === mU) || n.some((r) => !WP(r));
}
function Qo(e, n) {
  let r = Je(n);
  return bn(r, e) || e.some((s) => r.some((u) => RHe(u, Fc(s))));
}
function mt(e, n) {
  let r = Je(n);
  return bn(r, e) || e.some((s) => r.some((u) => RHe(Fc(s), u)));
}
function er(e) {
  switch (e.type) {
    case "command":
      return e.args === void 0 ? e.command : [e.command, ...e.args].join(" ");
    case "http":
      return e.url;
    case "prompt":
    case "agent":
      return e.prompt;
    case "mcp_tool":
      return `${e.server}/${e.tool}`;
    case "script":
      return e.file ?? x0r(e.script ?? "");
  }
}
function Ae(e) {
  return ei(er(e), { maxCodeUnits: 200 });
}
async function Rn(e, n, r, s = {}) {
  let u = [
    ...(s.sourceFile !== void 0 ? [s.sourceFile] : []),
    ...(s.pluginRoot !== void 0 ? [s.pluginRoot] : [])
  ];
  for (let C of u) {
    let R = await r.realpath(C).catch(() => null);
    if (R === null || mt([C, R], n) || (C === s.pluginRoot && Qo([C, R], n)))
      return {
        kind: "source_in_reach",
        notice: `"${Ae(e)}" is configured in a place the cloud session can write on this machine (${ei(C, { maxCodeUnits: 200 })}), so it is not run for the cloud session from this machine.`
      };
  }
  if (e.type !== "command") return { kind: "not_command", hookType: e.type };
  let h = Mze(e, {
    home: r.home,
    projectDir: n.projectDir,
    hookCwd: n.projectDirReal,
    defaultShell: r.defaultShell,
    shellPrefix: r.shellPrefix,
    ...(s.pluginRoot !== void 0 && { pluginRoot: s.pluginRoot })
  });
  if (h.kind !== "script")
    return {
      kind: "opaque",
      reason: h.reason,
      notice: `"${Ae(e)}" is not a single script this machine can pin, so it is not run for the cloud session from this machine: it would run whatever it names in the checkout, which the session may have written. Point it at one script outside the checkout (under ~/.claude, say).`
    };
  let w = ei(h.rawPath, { maxCodeUnits: 200 }),
    { located: k, digest: y } = await tr(h.resolvedPath, n, r, s.resolved);
  if (k.realPath === null || y === null || !y.ok)
    return {
      kind: "unverifiable",
      rawPath: w,
      missing: k.realPath === null && k.missing,
      notice: `${w} could not be read and pinned (missing, too large, not a regular file, more than one hard link, or it resolves to a file this machine does not read as a hook script), so its hook is not run for the cloud session from this machine.`
    };
  let I = {
    pinnedTarget: { path: h.resolvedPath, realPath: k.realPath, sha256: y.sha256 },
    bytes: y.bytes,
    rawPath: w,
    interpreter: h.interpreter,
    site: h.site
  };
  if (mt([h.resolvedPath, k.realPath], n))
    return {
      kind: "script_in_reach",
      ...I,
      notice: `"${Ae(e)}" sits where the cloud session can write on this machine (the checkout, the synced directory or a sandbox write inlet), so it is not run for the cloud session from this machine. Move the script outside the checkout (under ~/.claude, say).`
    };
  return { kind: "script_outside_reach", ...I };
}
async function tr(e, n, r, s) {
  let u = s?.get(e);
  if (u) return u;
  let h = (async () => {
    let w = await e4s(e, n, r),
      k = w.realPath === null ? null : await h1t(w.realPath, r);
    return { located: w, digest: k };
  })();
  return (s?.set(e, h), h);
}
function En() {
  return {
    stickyRoots: new Set(),
    pinnedScopes: new Set(),
    pinnedRoots: new Map(),
    syncRoots: new Set(),
    reachBaseline: null,
    commonRoots: null
  };
}
function xn(e) {
  let n = { ...nr(e.launchDir), ...e.deps },
    { memory: r } = e;
  ((r.reachBaseline ??= new Map(Is.map((S) => [S, n.scopeWriteEntries(S)]))),
    (r.commonRoots ??= n.commonWriteRoots()));
  let { reachBaseline: s, commonRoots: u, syncRoots: h, stickyRoots: w } = r,
    k = (S) => {
      (h.add(S),
        n.realpath(S).then(
          (I) => h.add(I),
          () => {}
        ));
    },
    y = async () => {
      let S = n.addedDirectories().flatMap((I) => {
        try {
          return [ut(I, e.launchDir)];
        } catch {
          return [];
        }
      });
      return [...S, ...(await Promise.all(S.map((I) => n.realpath(I).catch(() => I))))];
    };
  return {
    noteSyncRoot: k,
    async current() {
      let S = !1,
        I = (P) =>
          n.realpath(P).then(
            (A) => (WP(A) ? A : P),
            () => ((S = !0), P)
          ),
        C = await I(e.launchDir),
        R = await I(e.projectDir),
        x = null;
      try {
        x = e.syncRoot();
      } catch {
        S = !0;
      }
      if (x !== null) (h.add(x), h.add(await I(x)));
      let K = x === null ? void 0 : { rootReal: await I(x), root: x },
        G = L([
          ...(e.repoRoot !== null ? [e.repoRoot, await I(e.repoRoot)] : []),
          ...h,
          ...(await y())
        ]),
        F = await I(e.configHome);
      if (
        (await fGe({
          stickyRoots: w,
          pinnedScopes: r.pinnedScopes,
          pinnedRoots: r.pinnedRoots,
          baseRoots: [...CQe({ launchDir: e.launchDir, launchDirReal: C }), ...G],
          reachBaseline: s,
          scopeSettingsFile: n.scopeSettingsFile,
          realpath: n.realpath,
          commonRoots: () => u,
          scopeRoots: n.scopeWriteRoots
        }).catch(() => {
          S = !0;
        }),
        S)
      )
        t(
          "cloud session reach: a base root did not resolve (or sync state could not be read); every hook is treated as in reach for this answer",
          { level: "warn" }
        );
      return {
        launchDir: e.launchDir,
        launchDirReal: C,
        configHomeReal: F,
        projectDir: e.projectDir,
        projectDirReal: R,
        ...(K !== void 0 && { sync: K }),
        extraReach: S ? ["/"] : L([...G, ...w])
      };
    }
  };
}
function nr(e) {
  return {
    realpath: Opt().realpath,
    commonWriteRoots: () => kDe(e),
    scopeWriteRoots: (n, r) => The(e, n, r),
    scopeWriteEntries: (n) => {
      let r = khe(n, e),
        s = ln(n);
      if (n === "policySettings" || !s) return r;
      let u = aE(s, n === "flagSettings" ? (gT() ?? iie()) : void 0);
      if (u.errors.some((h) => (h.severity ?? "fatal") === "fatal"))
        return (
          t(
            `cloud session reach: the ${n} settings file could not be read or parsed at attach; its write grants are unknown, so every hook counts as in the session's reach`,
            { level: "warn" }
          ),
          [mU]
        );
      return L([...khe(n, e, u.settings), ...r]);
    },
    scopeSettingsFile: (n) => ln(n) ?? null,
    addedDirectories: () => Ol()
  };
}
function IRn(e) {
  let n = { realpath: or, repoRootOf: V_, consentPath: KFe, configHome: Le, ...e.deps },
    { launchDir: r, memory: s } = e,
    u = null,
    h = () =>
      (u ??= (async () => {
        let w = (R) => n.realpath(R).catch(() => R),
          k = await w(r),
          y = L([r, k].map((R) => n.repoRootOf(R)).filter((R) => R !== null)),
          S = L((await Promise.all(y.map(w))).concat(y)),
          [I = null] = y;
        return {
          tracker: xn({
            launchDir: r,
            projectDir: r,
            repoRoot: I,
            configHome: n.configHome(),
            syncRoot: e.syncRoot,
            memory: s,
            ...(n.tracker !== void 0 && { deps: n.tracker })
          }),
          launchRoots: L([r, k, ...S]),
          repoRoots: S
        };
      })());
  return {
    async judge() {
      try {
        let { tracker: w, launchRoots: k, repoRoots: y } = await h(),
          S = await w.current();
        if (e.syncElsewhere !== !1) return "unknown";
        let I = [...Je(S), ...y];
        if (I.some((K) => K === mU || !WP(K))) return "unknown";
        let C = n.consentPath();
        if (!C.startsWith("/")) return "unknown";
        let R = await uUt(C, I, n.realpath);
        if (R === !1) return "outside";
        if (R === "unresolvable") return "unknown";
        let x = [C, await n.realpath(C).catch(() => C)];
        if (ky(x, k)) return "in_launch_dir";
        return ky(x, [...s.syncRoots]) ? "in_sync_root" : "in_other_root";
      } catch {
        return "unknown";
      }
    }
  };
}
function rr() {
  let e = new Map();
  return {
    reachFor(n) {
      let r = e.get(n);
      if (r !== void 0) return r;
      let s = En();
      return (e.set(n, s), s);
    }
  };
}
var ORn = new W(rr);
import { realpath as Ve } from "fs/promises";
import { isAbsolute as Xi } from "path";
import { dirname as ir } from "path";
var An = { execCommand: dRo, execHttp: sKn },
  sr = `${Rpt}/project-folder-not-given-to-this-hook`,
  ar = [
    ["safe.bareRepository", "explicit"],
    ["core.hooksPath", "/dev/null"],
    ["core.fsmonitor", "false"],
    ["protocol.ext.allow", "never"],
    ["submodule.recurse", "false"],
    ["diff.ignoreSubmodules", "all"],
    ["status.submoduleSummary", "false"],
    ["fetch.recurseSubmodules", "false"],
    ["push.recurseSubmodules", "no"]
  ];
function Lt(e) {
  if (e.omit.includes("CLAUDE_CODE_SHELL_PREFIX")) return;
  let n = e.base.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
  return n !== void 0 && n.startsWith("/") ? n : void 0;
}
async function Tn(
  { hook: e, event: n, input: r, timeoutMs: s, env: u, startDirectory: h },
  w,
  k,
  y
) {
  if (y.aborted)
    return e.type === "http"
      ? { kind: "http", ok: !1, body: "", aborted: !0 }
      : { kind: "command", stdout: "", stderr: "", status: 1, aborted: !0 };
  let S = _(r);
  if (e.type === "http")
    try {
      return { kind: "http", ...(await k.execHttp({ ...e, timeout: void 0 }, n, S, y, s, _Lt(u))) };
    } catch (R) {
      return { kind: "http", ok: !1, body: "", error: R instanceof Error ? R.message : String(R) };
    }
  let { signal: I, cleanup: C } = Ts(y, { timeoutMs: s });
  try {
    return {
      kind: "command",
      ...(await k.execCommand({
        hook: { ...e, timeout: Math.ceil(s / 1000) + 30 },
        hookEvent: n,
        jsonInput: S,
        envContext: fQ(r),
        project:
          h === void 0
            ? { originalCwd: w.launchDir, projectRoot: w.projectRoot }
            : { originalCwd: h, projectRoot: sr },
        cwd: h ?? r.cwd,
        startsOutsideProject: h !== void 0,
        signal: I,
        envBase: u.base,
        envOmit: u.omit,
        shellPrefix: Lt(u),
        envExtra: {
          ...u.extra,
          CLAUDE_CODE_CLOUD_SESSION_ID: w.cloudSessionId,
          ...u2(void 0, ar),
          ...(h !== void 0 && { GIT_CEILING_DIRECTORIES: ir(h) })
        }
      }))
    };
  } catch (R) {
    return {
      kind: "command",
      stdout: "",
      stderr: R instanceof Error ? R.message : String(R),
      status: 1,
      spawnFailed: !0
    };
  } finally {
    C();
  }
}
function Te(e, n) {
  return ei(e, { maxCodeUnits: 400 }) || n;
}
function Fe(e, n, r = {}) {
  let s = "async" in r ? {} : r;
  if (e !== "PreToolUse") return { ...s, decision: "block", reason: n };
  let u = "hookSpecificOutput" in s ? s.hookSpecificOutput : void 0,
    h = u?.hookEventName === "PreToolUse" ? u.additionalContext : void 0;
  return {
    ...s,
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: n,
      ...(h !== void 0 && { additionalContext: h })
    }
  };
}
function In(e, n) {
  let r = lr(e, n);
  if (r.answer === null) return r;
  let { answer: s } = Rhe(r.answer, n.event);
  if (r.exitClass === "2" && r.blocked && !cUt(s) && e.kind === "command") {
    let u = Fe(n.event, `[${n.label}]: ${e.stderr || "No stderr output"}`, s);
    return { ...r, answer: Rhe(u, n.event).answer, exitClass: "2", blocked: !0 };
  }
  return { ...r, answer: s, blocked: lb(s) };
}
function lr(e, { event: n, label: r, timedOut: s, timeoutMs: u, timeoutFailsClosed: h = !1 }) {
  if (e.aborted && !s) return { answer: null, exitClass: "cancelled", blocked: !1 };
  if (e.aborted) {
    let x = Math.round(u / 1000),
      K = `[${r}]: timed out after ${x}s on the attached machine`;
    if (h && (n === "PreToolUse" || n === "UserPromptSubmit" || n === "UserPromptExpansion"))
      return { answer: Fe(n, K, Ipt(n, K) ?? {}), exitClass: "timeout", blocked: !0 };
    return {
      answer: {},
      exitClass: "timeout",
      localWarning: `[${r}]: timed out after ${x}s \u2014 output discarded; raise the hook's "timeout" to allow more time`,
      blocked: !1
    };
  }
  if (e.kind === "http") {
    if (e.error !== void 0 || !e.ok) {
      let G = Te(e.error ?? `HTTP ${e.statusCode ?? "request failed"}`, "request failed"),
        F =
          e.error !== void 0
            ? "the request to it could not be made from this machine"
            : `it answered HTTP ${e.statusCode ?? "with an error"}`,
        P = Cn(n, `[${r}]: not run \u2014 ${F}; retry`);
      return { answer: P, exitClass: "other", localWarning: `[${r}]: ${G}`, blocked: lb(P) };
    }
    let { json: x, validationError: K } = cKn(e.body);
    if (K !== void 0 || x === void 0)
      return {
        answer: {},
        exitClass: "other",
        localWarning: `[${r}]: ${Te(K ?? "", "no JSON in the response")}`,
        blocked: !1
      };
    return { answer: x, exitClass: "0", blocked: lb(x) };
  }
  if (e.spawnFailed) {
    let x = Cn(n, `[${r}]: not run \u2014 it could not be started on this machine; retry`);
    return {
      answer: x,
      exitClass: "spawn_failed",
      localWarning: `[${r}]: ${Te(e.stderr, "failed to start")}`,
      blocked: lb(x)
    };
  }
  let w =
    e.status === 2 &&
    uKn({
      hookEvent: n,
      stdout: e.stdout,
      stderr: e.stderr,
      stdioIncomplete: e.stdioIncomplete,
      stdioClosedWithoutEnd: e.stdioClosedWithoutEnd
    });
  if (e.status === 2 && (e.stdioIncomplete === !0 || e.stdioClosedWithoutEnd === !0)) {
    let x = Ipt(n, `[${r}]: ${e.stderr || "No stderr output"}`);
    if (x !== void 0) return { answer: x, exitClass: "2", blocked: !0 };
  }
  let k = n !== "Stop" && n !== "SubagentStop" && n !== "StopFailure";
  if (TMr(e.stdout)) {
    if (e.status === 2 && !w && k)
      return {
        answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`),
        exitClass: "2",
        blocked: !0
      };
    return e.status === 0
      ? { answer: {}, exitClass: "0", blocked: !1 }
      : {
          answer: {},
          exitClass: e.status === 2 ? "2" : "other",
          localWarning: `[${r}]: announced async, then failed with status code ${e.status}: ${Te(e.stderr, "No stderr output")}`,
          blocked: !1
        };
  }
  let { json: y, plainText: S, validationError: I } = bne(e.stdout),
    C = Vnn(e, n, y),
    R = vLt(e, n, e.stdout, C, (x) => bne(x).json);
  if (R !== void 0) {
    let x = `[${r}]: output incomplete \u2014 its stdio was cut before end-of-stream on this machine; retry`,
      K = A3.has(n) ? Fe(n, x, Ipt(n, x) ?? {}) : {};
    return {
      answer: K,
      exitClass: "0",
      localWarning: `[${r}]: ${Te(R, "stdio incomplete")}`,
      blocked: lb(K)
    };
  }
  if (I !== void 0 && e.status !== 2)
    return {
      answer: {},
      exitClass: e.status === 0 ? "0" : "other",
      localWarning: `[${r}]: ${Te(ugt(I, e.status, e.stderr), "hook JSON output failed validation")}`,
      blocked: !1
    };
  if (C !== void 0) {
    if ("async" in C)
      return e.status === 2 && !w && k
        ? {
            answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`),
            exitClass: "2",
            blocked: !0
          }
        : e.status === 0
          ? { answer: {}, exitClass: "0", blocked: !1 }
          : {
              answer: {},
              exitClass: e.status === 2 ? "2" : "other",
              localWarning: `[${r}]: announced async, then failed with status code ${e.status}: ${Te(e.stderr, "No stderr output")}`,
              blocked: !1
            };
    let x = C;
    if (e.status === 2 && !cUt(x))
      return {
        answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`, x),
        exitClass: "2",
        blocked: !0
      };
    return {
      answer: x,
      exitClass: e.status === 0 ? "0" : e.status === 2 ? "2" : "other",
      blocked: lb(x)
    };
  }
  if (e.status === 0) {
    let x = (S ?? "").trim();
    return (n === "UserPromptSubmit" || n === "UserPromptExpansion") && x !== ""
      ? {
          answer: { hookSpecificOutput: { hookEventName: n, additionalContext: x } },
          exitClass: "0",
          blocked: !1
        }
      : { answer: {}, exitClass: "0", blocked: !1 };
  }
  if (e.status === 2) {
    if (w)
      return {
        answer: {},
        exitClass: "2",
        localWarning: `[${r}]: the hook script appears to be missing (${Te(e.stderr, "no such file")})`,
        blocked: !1
      };
    return {
      answer: Fe(n, `[${r}]: ${e.stderr || "No stderr output"}`),
      exitClass: "2",
      blocked: !0
    };
  }
  return {
    answer: {},
    exitClass: "other",
    localWarning: `[${r}]: failed with non-blocking status code ${e.status}: ${Te(e.stderr, "No stderr output")}`,
    blocked: !1
  };
}
function Cn(e, n) {
  return e === "PreToolUse"
    ? {
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "deny",
          permissionDecisionReason: n
        }
      }
    : {};
}
var dr = { isAnsweredOn: () => H6e(), isAnsweredOff: () => EUe({ cloudClient: !0 }) !== void 0 };
function Pn(e = dr) {
  let n = !1;
  return () => {
    if (e.isAnsweredOff()) return "answered_off";
    return ((n ||= e.isAnsweredOn()), n ? "answered_on" : "unanswered");
  };
}
import { devNull as cr } from "os";
import {
  basename as wt,
  delimiter as Dn,
  dirname as ur,
  isAbsolute as Wt,
  resolve as _t
} from "path";
var fr = 30000,
  hr = 8,
  jt = 64,
  pr = 1048576,
  Ft = 2000,
  On = 1000,
  mr = 256,
  dt = 256,
  kr = 64,
  wr = 8,
  $n = 256,
  _r = cr,
  vr = 'started in an empty folder \xB7 mark it "cloud": "device" if it needs the project',
  Bn = /^[A-Za-z0-9_.:-]{1,128}$/,
  yr = /^[a-z]{1,16}$/,
  Sr =
    "Not running your hooks for the cloud session: the service could not vouch for the sender of its hook requests under your organization's trusted-device policy. The session goes on without them.";
function br(e) {
  return e.deadlineMs !== void 0 && (e.ageMs === void 0 || e.ageMs > e.deadlineMs + fr);
}
function Re(e) {
  return Bn.test(e) ? e : ei(e, { maxCodeUnits: 64 });
}
function ge(e, n, r) {
  return e === "PreToolUse"
    ? {
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "deny",
          permissionDecisionReason: `[${n}]: ${r}`
        }
      }
    : {};
}
function Hn(e, n, r) {
  return n.rawPath === r ? e : wWn(e, n.site, r);
}
function Nn(e, n) {
  if (typeof e !== "string" || n === null || !e.startsWith("/")) return !1;
  if (e.trim() !== e || /^\/(?:proc|dev|net|network)(?:\/|$)/i.test(e)) return !1;
  if (
    e
      .split("/")
      .slice(1)
      .some((s) => s === "" || s === "." || s === "..")
  )
    return !1;
  return !Hun(e, Hxn(n.containerProjectDir));
}
var vt = Gds;
function Rr(e, n) {
  if (vt(e)) return !0;
  let r = n3t(e),
    s = r[0] === "tool_calls" ? 2 : 0;
  if (r[s] !== "tool_response") return !1;
  let u = r.slice(0, s + 1).reduce((h, w) => (xe(h) ? h[w] : void 0), n);
  for (let h of r.slice(s + 1)) {
    if (Array.isArray(u)) return !1;
    u = xe(u) ? u[h] : void 0;
  }
  return !0;
}
function Er(e, n, r) {
  let s = n3t(e),
    u = s[0] === "tool_calls",
    h = u ? s.slice(2) : s;
  if (h[0] === "tool_response") return !0;
  if (h[0] !== "tool_input" || h.length !== 2 || !xe(n)) return !1;
  let w = n.tool_calls,
    k = u ? (xe(w) ? w[s[1] ?? ""] : void 0) : n,
    y = xe(k) ? k.tool_name : void 0,
    S = typeof y === "string" ? Lxn(y, r) : void 0;
  return S !== void 0 && h[1] === S;
}
var xr = /^[A-Za-z][A-Za-z0-9_-]{0,40}$/,
  gt = Symbol("deviceHooks.disconnect"),
  Mn = Symbol("deviceHooks.deadline");
function Cr(e) {
  let n = [e.session_id, e.agent_id, e.prompt_id];
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") n.push(e.tool_use_id);
  return (
    n.every((r) => r === void 0 || (Bn.test(r) && !r.includes(".."))) &&
    (e.permission_mode === void 0 || xr.test(e.permission_mode)) &&
    (e.effort === void 0 || yr.test(e.effort.level)) &&
    (e.agent_type === void 0 || ei(e.agent_type, { maxCodeUnits: 64 }) === e.agent_type)
  );
}
function Vn(e, n) {
  if (e.type === "http")
    try {
      return new URL(e.url).host || "http hook";
    } catch {
      return "http hook";
    }
  let r = n?.kind === "script" ? wt(n.rawPath) : wt(e.command.trim().split(/\s+/)[0] ?? "");
  return ei(r, { maxCodeUnits: 64 }) || "hook";
}
function Gn(e, n, r) {
  if (r.wireLabel === "basename") return n;
  if (e.type === "http")
    try {
      return ei(new URL(e.url).origin, { maxCodeUnits: 200 });
    } catch {
      return n;
    }
  return ei(e.command, { maxCodeUnits: 200 });
}
function Ar(e, n) {
  let r = { ...e, transcript_path: n };
  return "agent_transcript_path" in r ? { ...r, agent_transcript_path: n } : r;
}
function xe(e) {
  return typeof e === "object" && e !== null;
}
function Ut(e, n) {
  return n3t(n).reduce((r, s) => (xe(r) ? r[s] : void 0), e);
}
function Tr(e, n) {
  let r = [],
    s = (w, k, y, S) => {
      if (r.length > dt || S > wr) return;
      if (typeof k === "string") {
        if (y && k !== "" && !Wt(k)) r.push(w);
        return;
      }
      if (Array.isArray(k)) {
        k.forEach((I, C) => s(`${w}/${C}`, I, y, S + 1));
        return;
      }
      if (xe(k)) {
        let I = Object.keys(k).some(T5e);
        for (let [C, R] of Object.entries(k)) s(`${w}/${t3t(C)}`, R, (y && !I) || T5e(C), S + 1);
      }
    },
    u = (w, k, y) => {
      if (!xe(y)) return;
      let S = typeof k === "string" ? Lxn(k, n) : void 0;
      for (let [I, C] of Object.entries(y)) s(`${w}/tool_input/${t3t(I)}`, C, I === S || T5e(I), 1);
    },
    h = (w, k) => {
      if (!xe(k) || Array.isArray(k)) return;
      let y = (S, I, C) => {
        if (
          (vt(S) || zds(S) || T5e(I)) &&
          typeof C === "string" &&
          C !== "" &&
          !Wt(C) &&
          C.length <= 4096 &&
          !/\p{Cc}/u.test(C)
        )
          r.push(S);
      };
      for (let [S, I] of Object.entries(k)) {
        let C = `${w}/tool_response/${t3t(S)}`;
        if ((y(C, S, I), xe(I) && !Array.isArray(I)))
          for (let [R, x] of Object.entries(I)) y(`${C}/${t3t(R)}`, R, x);
      }
    };
  if ("tool_input" in e) u("", "tool_name" in e ? e.tool_name : void 0, e.tool_input);
  if ("tool_response" in e) h("", e.tool_response);
  if ("tool_calls" in e && Array.isArray(e.tool_calls))
    e.tool_calls.forEach((w, k) => {
      if (xe(w)) {
        if ((u(`/tool_calls/${k}`, w.tool_name, w.tool_input), "tool_response" in w))
          h(`/tool_calls/${k}`, w.tool_response);
      }
    });
  return r;
}
async function kt(e, n) {
  let r = e,
    s = [];
  for (;;) {
    if (s.length > kr) return null;
    try {
      let u = await n.realpath(r);
      return s.length === 0 ? u : _t(u, ...s);
    } catch (u) {
      if (E(u) !== "ENOENT") return null;
      let h = await n
          .lstat(r)
          .then((k) => k.isSymbolicLink())
          .catch(() => !1),
        w = ur(r);
      if (h || w === r) return null;
      (s.unshift(wt(r)), (r = w));
    }
  }
}
async function Ln(e, n, r, s) {
  let u = (w) => w !== null && (JK(w, r.real) || JK(w, r.dir));
  return (
    await Promise.all(
      e.map(async (w) => {
        let k = Ut(n, w);
        if (typeof k !== "string" || k === "") return null;
        let y = Wt(k) ? k : _t(n.cwd, k);
        return u(await kt(y, s)) ? null : w;
      })
    )
  ).filter((w) => w !== null);
}
function Ir(e) {
  let n = 0,
    r = [],
    s = () => {
      n -= 1;
      let u = r.shift();
      if (u !== void 0) ((n += 1), u.grant());
    };
  return {
    acquire(u, h) {
      if (h.aborted) return Promise.resolve(null);
      if (n < hr) return ((n += 1), Promise.resolve(Fn(s)));
      if (u <= 0) return Promise.resolve(null);
      return new Promise((w) => {
        let k = !1,
          y = (R) => {
            if (k) {
              if (R !== null) R();
              return;
            }
            ((k = !0), C.clear(), h.removeEventListener("abort", I));
            let x = r.indexOf(S);
            if (x !== -1) r.splice(x, 1);
            w(R);
          },
          S = { grant: () => y(Fn(s)), refuse: () => y(null) },
          I = () => y(null),
          C = e.setTimer(() => y(null), u);
        (h.addEventListener("abort", I, { once: !0 }), r.push(S));
      });
    },
    refuseAll() {
      for (let u of r.splice(0)) u.refuse();
    }
  };
}
function Fn(e) {
  let n = !1;
  return () => {
    if (n) return;
    ((n = !0), e());
  };
}
function zn(e) {
  let n = new Map(),
    r = new Map(),
    s = Ir(e),
    u = (D, H, z) => {
      let j =
        H.local.hook.timeout !== void 0 && H.local.hook.timeout > 0
          ? H.local.hook.timeout * 1000
          : e.defaultTimeoutMs(pQ(H.local.event) ? H.local.event : "Stop");
      return (D.deadlineMs ?? 2 * j + 2 * Ft) - (e.now() - z) - Ft / 2;
    },
    h = new Set(),
    w = new Map(),
    { repinned: k, everInReach: y, answered: S, withdrawn: I } = e.memory,
    C = Number.NEGATIVE_INFINITY,
    R = (D) => {
      if (D.size > mr) {
        let H = D.keys().next().value;
        if (H !== void 0) D.delete(H);
      }
    },
    x = (D, H, z) => {
      (S.delete(D), S.set(D, { callbackId: H, answer: z }), R(S));
    },
    K = (D) => {
      (I.delete(D), I.add(D), R(I));
    },
    G = (D, H, z) => {
      if (h.has(D)) return;
      (h.add(D), e.onLine(H, z));
    },
    F = (D, H) => {
      let z = e.now();
      if (z - (w.get(D) ?? Number.NEGATIVE_INFINITY) < 60000) return;
      (w.set(D, z), e.onLine(H, "warning"));
    },
    P = (D, H, z) =>
      e.telemetry({
        outcome: D.outcome,
        event: D.event ?? null,
        kind: D.kind ?? null,
        exitClass: D.exitClass ?? null,
        translatedPaths: D.translatedPaths ?? 0,
        replay: D.replay ?? !1,
        blocked: D.blocked ?? !1,
        staged: D.staged ?? !1,
        projectFrame: D.projectFrame ?? !1,
        repinned: D.repinned ?? !1,
        waitedMs: D.waitedMs ?? 0,
        durationMs: Math.max(0, e.now() - H),
        attestation: z
      }),
    A = async (D, H, z, j, te, Q) => {
      let N = D.local.pinnedTarget,
        U = (ie) => ge(te, j.wire, ie);
      if (N === void 0) {
        if (z !== null && z.kind === "script") {
          let ie = await kt(z.resolvedPath, e.pin);
          if (ie === null)
            return (
              G(
                `unvouched:unjudgeable:${D.wire.id}`,
                `Not running ${j.local} for the cloud session: its file cannot be found or judged on this machine.`,
                "warning"
              ),
              {
                kind: "refuse",
                answer: U(`not run \u2014 its file cannot be found or judged on ${Q.displayName}`),
                outcome: "pin_unreadable"
              }
            );
          let de =
            y.has(D.wire.id) ||
            ky([z.resolvedPath, ie], [...Q.cloudWritableRoots, ...e.extraWritableRoots()]);
          if (de) y.add(D.wire.id);
          if (de && D.local.cloudOptIn !== !0)
            return (
              G(
                `reach:${D.wire.id}`,
                `Not running ${j.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`,
                "info"
              ),
              {
                kind: "refuse",
                answer: U(
                  `not run \u2014 its file now sits where the cloud session can write on ${Q.displayName} and it is not marked cloud: "device"`
                ),
                outcome: "in_reach_refused"
              }
            );
          if (de)
            return (
              G(
                `unvouched:in_reach:${D.wire.id}`,
                `Not running ${j.local} for the cloud session: it could not be pinned when this session started and now sits where the session can write; review the file, then restart claude --cloud to offer it again.`,
                "warning"
              ),
              {
                kind: "refuse",
                answer: U(
                  `not run \u2014 its file could not be pinned on ${Q.displayName} and sits where the cloud session can write; review it there`
                ),
                outcome: "in_reach_refused"
              }
            );
        }
        return {
          kind: "run",
          hook: z !== null && z.kind === "script" ? Hn(H, z, z.resolvedPath) : H,
          staged: null,
          repinned: !1
        };
      }
      let ee = k.get(D.wire.id) ?? N.sha256,
        Z = await kOs({ ...N, sha256: ee }, e.pin),
        V =
          y.has(D.wire.id) ||
          ky(
            [N.path, N.realPath, ...(Z.realPath !== void 0 ? [Z.realPath] : [])],
            [...Q.cloudWritableRoots, ...e.extraWritableRoots()]
          );
      if (V) y.add(D.wire.id);
      if (V && D.local.cloudOptIn !== !0)
        return (
          G(
            `reach:${D.wire.id}`,
            `Not running ${j.local} for the cloud session: its file now sits where the session can write on this machine, and it is not marked cloud: "device".`,
            "info"
          ),
          {
            kind: "refuse",
            answer: U(
              `not run \u2014 its file now sits where the cloud session can write on ${Q.displayName} and it is not marked cloud: "device"; move it under ~/.claude or mark the entry`
            ),
            outcome: "in_reach_refused"
          }
        );
      let J,
        re = ee,
        ne = k.has(D.wire.id);
      if (Z.ok) J = Z.bytes;
      else if (Z.reason === "changed" && !V && Q.repinChangedScripts)
        (k.set(D.wire.id, Z.current.sha256),
          (ne = !0),
          (J = Z.current.bytes),
          (re = Z.current.sha256),
          G(
            `repin:${D.wire.id}:${Z.current.sha256}`,
            `${j.local} changed on this machine since it was registered; the cloud session's runs use the current version.`,
            "info"
          ));
      else if (Z.reason === "changed" && !V) {
        let ie = Q.inventory.forwarded.some(
          (de) => de.wire.event === "PreToolUse" && de.local.pinnedTarget?.path === N.path
        );
        return (
          G(
            `changed:${N.path}${ie ? ":guard" : ""}`,
            `${j.local} changed since it was registered for this cloud session, so it won't run.${ie ? " Matching tool calls are blocked." : ""} If you edited it, restart claude --cloud. If not, check the file.`,
            "warning"
          ),
          {
            kind: "refuse",
            answer: U(
              `not run \u2014 its file changed on ${Q.displayName} since it was registered; it runs again once that machine re-registers it`
            ),
            outcome: "pin_changed"
          }
        );
      } else if (Z.reason === "changed")
        return (
          G(
            `pin:changed:${D.wire.id}`,
            `Not running ${j.local} for the cloud session: its file changed while the session could write to it on this machine \u2014 review the file before trusting it again.`,
            "warning"
          ),
          {
            kind: "refuse",
            answer: U(
              `not run \u2014 its file changed on ${Q.displayName} while the cloud session could write to it; review the file there before trusting it again`
            ),
            outcome: "pin_refused"
          }
        );
      else if (Z.reason === "multiply_linked" || Z.reason === "relocated") {
        let ie =
          Z.reason === "multiply_linked"
            ? "it now has more than one hard link"
            : "its path now leads to a different file than the one registered";
        return (
          G(
            `pin:${Z.reason}:${D.wire.id}`,
            `Not running ${j.local} for the cloud session: ${ie} on this machine \u2014 look at the file; if you re-linked or moved it yourself, relaunch claude --cloud here to register it again.`,
            "warning"
          ),
          {
            kind: "refuse",
            answer: U(`not run \u2014 ${ie} on ${Q.displayName}; review it there`),
            outcome: "pin_refused"
          }
        );
      } else {
        let ie = Z.reason.replace("_", " ");
        return (
          G(
            `pin:${Z.reason}:${D.wire.id}`,
            `Not running ${j.local} for the cloud session: the file it runs can no longer be read on this machine (${ie}).`,
            "warning"
          ),
          {
            kind: "refuse",
            answer: U(
              `not run \u2014 its file on ${Q.displayName} can no longer be read (${ie}); it runs again once that machine re-registers it`
            ),
            outcome: V ? "pin_refused" : "pin_unreadable"
          }
        );
      }
      if (z?.kind !== "script" || z.resolvedPath !== N.path)
        return (
          G(
            `pin:parse:${D.wire.id}`,
            `Not running ${j.local} for the cloud session: its command no longer reads as the script that was registered.`,
            "warning"
          ),
          {
            kind: "refuse",
            answer: U(
              `not run \u2014 its command on ${Q.displayName} no longer names the script that was registered`
            ),
            outcome: "pin_refused"
          }
        );
      if (!(Q.stageVerifiedBytes === "always" || (Q.stageVerifiedBytes === "in_reach" && V)))
        return { kind: "run", hook: Hn(H, z, N.path), staged: null, repinned: ne };
      try {
        let ie = await e.staging.stage(re, J, wt(N.path));
        return { kind: "run", hook: wWn(H, z.site, ie.path), staged: ie, repinned: ne };
      } catch {
        return (
          G(
            `stage:${D.wire.id}`,
            `Not running ${j.local} for the cloud session: couldn't save a private copy of it.${te === "PreToolUse" ? " Matching tool calls are blocked." : ""} If the cloud session can write your temporary folder, set CLAUDE_CODE_TMPDIR to a folder it can't write to and restart claude --cloud.`,
            "warning"
          ),
          {
            kind: "refuse",
            answer: U(
              `not run \u2014 ${Q.displayName} couldn't save a private copy of it. If this session can write the temporary folder on that machine, set CLAUDE_CODE_TMPDIR there to a folder it can't write to and restart claude --cloud.`
            ),
            outcome: "staging_failed"
          }
        );
      }
    },
    M = async (D, H, z, j, te) => {
      let Q = z.local.event;
      if (!pQ(Q)) return { answer: {}, telemetry: { outcome: "event_mismatch" } };
      let N = z.local.hook;
      if (N.type !== "command" && N.type !== "http") {
        let se = ge(
          Q,
          `hook on ${H.displayName}`,
          "not run \u2014 it is not a kind of hook that machine can run for a cloud session; retry"
        );
        return {
          answer: se,
          telemetry: { event: Q, outcome: "unsupported_kind", blocked: lb(se) }
        };
      }
      let U = { event: Q, kind: N.type },
        ee = N.type === "command" ? e.parseTarget(N) : null,
        Z = Vn(N, ee),
        V = { local: Z, wire: Gn(N, Z, H) };
      if (br(D)) {
        G(
          "stale",
          'A hook request from the cloud session arrived already past its deadline (this machine was asleep, offline, or its stream was running behind). A guard answered "retry"; anything else had no opinion.',
          "warning"
        );
        let se = ge(
          Q,
          V.wire,
          `not run \u2014 the request reached ${H.displayName} already past its deadline (that machine was asleep or its stream ran behind); retry`
        );
        return { answer: se, telemetry: { ...U, outcome: "stale", blocked: lb(se) } };
      }
      let J = 0;
      try {
        let se = _(D.input);
        J = typeof se === "string" ? Buffer.byteLength(se, "utf8") : 0;
      } catch {
        J = 0;
      }
      if (J > pr) {
        let se = Un(z, H, e, "too_large");
        return { answer: se, telemetry: { ...U, outcome: "input_too_large", blocked: lb(se) } };
      }
      let re = lqe().safeParse(D.input);
      if (!re.success || !Cr(re.data)) {
        let se = ge(
          Q,
          V.wire,
          `not run \u2014 the event could not be read on ${H.displayName}; retry`
        );
        return { answer: se, telemetry: { ...U, outcome: "invalid_input", blocked: lb(se) } };
      }
      if (re.data.hook_event_name !== Q) {
        let se = ge(
          Q,
          V.wire,
          `not run \u2014 the event does not match the hook it names on ${H.displayName}; retry`
        );
        return { answer: se, telemetry: { ...U, outcome: "event_name_mismatch", blocked: lb(se) } };
      }
      if (H.roots === null) {
        let se = ge(
          Q,
          V.wire,
          `not run \u2014 ${H.displayName} does not know this session's directories yet; retry`
        );
        return { answer: se, telemetry: { ...U, outcome: "no_roots", blocked: lb(se) } };
      }
      if (!e.trustAccepted()) {
        let se = ge(
          Q,
          V.wire,
          `not run \u2014 its folder is no longer marked trusted on ${H.displayName}`
        );
        return { answer: se, telemetry: { ...U, outcome: "untrusted", blocked: lb(se) } };
      }
      let ne = e.toolAliases?.();
      if (!Hke(re.data, z.local.matcher, ne))
        return { answer: {}, telemetry: { ...U, outcome: "event_mismatch" } };
      let ae = Kds(re.data, H.roots, { cloudSessionId: H.cloudSessionId }, ne),
        ie = ae.input,
        de = Object.keys(ie.cloud_session.original.paths),
        oe = de.length,
        q = { dir: H.frame.launchDir, real: H.launchDirReal },
        Y = async (se) => {
          let me = (ke) => JK(ke, q.real) || JK(ke, q.dir);
          try {
            return me(await e.pin.realpath(se)) ? "inside" : "unjudgeable";
          } catch (ke) {
            if (E(ke) !== "ENOENT") return "unjudgeable";
            let Me = await kt(se, e.pin);
            return Me !== null && me(Me) ? "missing" : "unjudgeable";
          }
        },
        le = await Y(ie.cwd);
      if (le !== "inside")
        (e.debug(
          `[deviceHooks] ${Re(D.requestId)}: translated cwd is ${le === "missing" ? "not an existing directory" : "not judgeable as a directory inside the launch directory"}; running from the launch directory`
        ),
          (ie = { ...ie, cwd: q.dir }));
      let ue = Tr(ie, ne),
        ye = [...de.filter((se) => Rr(se, ie)), ...ue],
        Se = ye.length > dt ? ye : await Ln(ye, ie, q, e.pin),
        he = (ae.untranslated.includes("/cwd") || le === "unjudgeable") && ue.length > 0,
        tt = ae.untranslated.flatMap((se) => {
          let me = Ut(re.data, se);
          return vt(se) && !Er(se, re.data, ne) && typeof me === "string" && Nn(me, H.roots)
            ? [{ pointer: se, value: me }]
            : [];
        }),
        Ge = async (se) => {
          if (se.length > dt) return { waived: [], namingFilesHere: se.map((ke) => ke.pointer) };
          let me = await Promise.all(
            se.map(async ({ pointer: ke, value: Me }) => {
              let Ee = await kt(Me, e.pin),
                be = Ee !== null && (JK(Ee, q.real) || JK(Ee, q.dir)),
                Ke =
                  Ee !== null &&
                  !be &&
                  (await e.pin.realpath(Me).then(
                    () => !1,
                    (Ht) => E(Ht) === "ENOENT"
                  ));
              return { pointer: ke, waived: be || Ke };
            })
          );
          return {
            waived: me.filter((ke) => ke.waived).map((ke) => ke.pointer),
            namingFilesHere: me.filter((ke) => !ke.waived).map((ke) => ke.pointer)
          };
        },
        ze = await Ge(tt),
        $t = ze.namingFilesHere,
        qo = H.denyUnjudgeablePaths ? [] : ze.waived,
        hn = [
          ...ae.untranslated.filter((se) => vt(se) && !qo.includes(se)),
          ...(he ? ["/cwd"] : []),
          ...Se
        ];
      if (hn.length > 0) {
        let se =
          !he &&
          Se.length === 0 &&
          $t.length === 0 &&
          ye.length <= dt &&
          hn.every((me) => Nn(Ut(re.data, me), H.roots));
        if (!(se && H.runWithUntranslatedPaths)) {
          G(
            `untranslated:${z.wire.id}:${se ? "container" : "unjudgeable"}`,
            se
              ? `Skipped ${V.local} for the cloud session: the file it would look at exists only in the cloud, not in the synced project on this machine.`
              : `Not running ${V.local} for the cloud session: the event names a path this machine could not map to its own files.`,
            "info"
          );
          let me =
            !se || H.denyUnjudgeablePaths
              ? ge(
                  Q,
                  V.wire,
                  se
                    ? "not run \u2014 the event names a file that exists only in the cloud, so this machine could not judge it"
                    : "not run \u2014 the event names a path this machine could not map to its own files; retry with a plain path inside the project"
                )
              : {};
          return {
            answer: me,
            telemetry: {
              ...U,
              outcome: "untranslated_skipped",
              translatedPaths: oe,
              blocked: lb(me)
            }
          };
        }
      }
      let He = Ar(ie, await e.emptyTranscriptPath().catch(() => _r));
      if (N.if) {
        let se;
        try {
          se = await e.evaluateCondition(N.if, He);
        } catch {
          se = null;
        }
        if (se === null) {
          let me = ge(
            Q,
            V.wire,
            "not run \u2014 its condition could not be evaluated on this machine; retry"
          );
          return {
            answer: me,
            telemetry: { ...U, outcome: "condition_error", translatedPaths: oe, blocked: lb(me) }
          };
        }
        if (!se)
          return {
            answer: {},
            telemetry: { ...U, outcome: "condition_false", translatedPaths: oe }
          };
      }
      let we =
        N.type === "command"
          ? await A(z, N, ee, V, Q, H)
          : { kind: "run", hook: N, staged: null, repinned: !1 };
      if (we.kind === "refuse")
        return {
          answer: we.answer,
          telemetry: { ...U, outcome: we.outcome, translatedPaths: oe, blocked: lb(we.answer) }
        };
      let Ne = null;
      try {
        if (te.aborted) return { answer: null, telemetry: { ...U, outcome: "cancelled" } };
        let se = N.timeout !== void 0 && N.timeout > 0 ? N.timeout * 1000 : e.defaultTimeoutMs(Q),
          me = () => (D.deadlineMs !== void 0 ? D.deadlineMs - (e.now() - j) - Ft : se),
          ke = me(),
          Me = e.now(),
          Ee = await s.acquire(ke, te),
          be = Math.max(0, e.now() - Me),
          Ke = Ee !== null && me() < On;
        if (Ke && Ee !== null) (Ee(), (Ee = null));
        if (Ee === null) {
          if (te.aborted)
            return { answer: null, telemetry: { ...U, outcome: "cancelled", waitedMs: be } };
          if (!Ke && e.now() - C >= 60000)
            ((C = e.now()),
              e.onLine(
                'The cloud session is asking for more hooks at once than this machine can run in time; some were answered "retry" (guards) or with no opinion.',
                "warning"
              ));
          let nt = ge(
            Q,
            V.wire,
            Ke
              ? `not run \u2014 too little time was left before the cloud session stops waiting for ${H.displayName}; retry`
              : `not run \u2014 ${H.displayName} is running too many hooks for the cloud session at once; retry`
          );
          return {
            answer: nt,
            telemetry: {
              ...U,
              outcome: Ke ? "too_late" : "no_slot",
              translatedPaths: oe,
              blocked: lb(nt),
              waitedMs: be
            }
          };
        }
        let Ht = Ee;
        try {
          if (te.aborted)
            return { answer: null, telemetry: { ...U, outcome: "cancelled", waitedMs: be } };
          let nt = He.cwd === q.dir ? "inside" : await Y(He.cwd),
            Nt = He;
          if (nt !== "inside") Nt = { ...He, cwd: q.dir };
          let pn =
              (nt === "unjudgeable" && ue.length > 0) ||
              (ye.length <= dt && (await Ln(ye, Nt, q, e.pin)).length > 0),
            Bo = !pn && tt.length > 0 && (await Ge(tt)).namingFilesHere.length > 0;
          if (pn || Bo) {
            let fe = ge(
              Q,
              V.wire,
              `not run \u2014 a path the event names moved outside the project on ${H.displayName} while it waited; retry`
            );
            return {
              answer: fe,
              telemetry: {
                ...U,
                outcome: "untranslated_skipped",
                translatedPaths: oe,
                blocked: lb(fe),
                waitedMs: be
              }
            };
          }
          if (te.aborted)
            return { answer: null, telemetry: { ...U, outcome: "cancelled", waitedMs: be } };
          let Mt = Math.min(se, me());
          if (me() < On) {
            let fe = ge(
              Q,
              V.wire,
              `not run \u2014 too little time was left before the cloud session stops waiting for ${H.displayName}; retry`
            );
            return {
              answer: fe,
              telemetry: {
                ...U,
                outcome: "too_late",
                translatedPaths: oe,
                blocked: lb(fe),
                waitedMs: be
              }
            };
          }
          let ot = e.hostEnv(),
            mn = [
              H.frame.launchDir,
              H.launchDirReal,
              ...H.cloudWritableRoots,
              ...e.extraWritableRoots()
            ],
            gn = (fe) => fe !== mU && !WP(fe),
            pt =
              O() === "windows" && mn.some(gn)
                ? [mU]
                : mn.filter((fe) => !gn(fe)).map((fe) => (fe === mU ? fe : Fc(_t(fe)))),
            rt = await e.childEnvironment(pt, ot),
            Vo = (fe) => pt.some((Oe) => RHe(Fc(_t(fe)), Oe)) || (O() === "windows" && Hr(fe, pt)),
            kn = $r(ot.CLAUDE_CODE_SHELL_PREFIX ?? "", {
              home: ot.HOME,
              launchDir: H.frame.launchDir
            }),
            wn = await Promise.all(
              kn.map((fe) =>
                e.placePath(fe).then((Oe) => (Oe === "unreadable" ? qn : Oe === "absent" ? fe : Oe))
              )
            ),
            it =
              (wn.includes(qn) || [...kn, ...wn].some(Vo)) &&
              !rt.omit.includes("CLAUDE_CODE_SHELL_PREFIX")
                ? {
                    ...rt,
                    omit: [...rt.omit, "CLAUDE_CODE_SHELL_PREFIX"],
                    extra: xo(rt.extra, "CLAUDE_CODE_SHELL_PREFIX")
                  }
                : rt;
          if (
            ot.CLAUDE_CODE_SHELL_PREFIX?.trim() &&
            we.hook.type === "command" &&
            we.hook.args === void 0 &&
            Lt(it) === void 0
          )
            G(
              "prefix-unwrapped",
              'Hooks marked cloud: "device" run for the cloud session WITHOUT your CLAUDE_CODE_SHELL_PREFIX here: this machine cannot vouch for that wrapper (it is not an absolute path outside what the session can write).',
              "warning"
            );
          let _n = it.extra.PATH,
            st = _n === void 0 || _n === "" ? { ...it, extra: { ...it.extra, PATH: Rpt } } : it,
            Go = new Set((st.extra.PATH ?? "").split(Dn)),
            at = (ot.PATH ?? "").split(Dn).filter((fe) => fe !== "" && !Go.has(fe));
          if (st.omit.length > 0)
            e.debug(`[deviceHooks] ${Re(D.requestId)}: not passing on ${st.omit.join(", ")}`);
          if (at.length > 0)
            G(
              "search-path-trimmed",
              `Hooks the cloud session forwards here run without ${at.length} PATH entr${at.length === 1 ? "y" : "ies"} the session can write to or that cannot be resolved on this machine (${at
                .slice(0, 3)
                .map((fe) => Jn(fe))
                .join(
                  ", "
                )}${at.length > 3 ? ", \u2026" : ""}); a tool installed only there is "not found" for them.`,
              "debug"
            );
          let lt =
            we.hook.type !== "command"
              ? void 0
              : we.hook.args !== void 0
                ? we.hook.command.includes("/")
                  ? void 0
                  : we.hook.command
                : ee?.kind === "script" && ee.interpreter !== null
                  ? ee.interpreter
                  : void 0;
          if (lt !== void 0) {
            if ((await e.resolveProgram(lt, st.extra.PATH ?? "", pt)) === "in_reach") {
              G(
                `program:${lt}`,
                `Not running hooks through ${lt} for the cloud session: on this machine that name leads to a file the session can write.`,
                "warning"
              );
              let Oe = ge(
                Q,
                V.wire,
                `not run \u2014 ${lt} on ${H.displayName} leads to a file the cloud session can write`
              );
              return {
                answer: Oe,
                telemetry: {
                  ...U,
                  outcome: "in_reach_refused",
                  translatedPaths: oe,
                  blocked: lb(Oe),
                  waitedMs: be
                }
              };
            }
          }
          if (
            we.hook.type === "command" &&
            z.local.cloudOptIn !== !0 &&
            H.unmarkedStartFolder === "private"
          ) {
            if (((Ne = await e.staging.runDirectory().catch(() => null)), Ne === null)) {
              G(
                `run-folder:${z.wire.id}`,
                `Not running ${V.local} for the cloud session: this machine has no private folder to start it in.`,
                "warning"
              );
              let fe = ge(
                Q,
                V.wire,
                `not run \u2014 ${H.displayName} has no private folder to start it in`
              );
              return {
                answer: fe,
                telemetry: {
                  ...U,
                  outcome: "staging_failed",
                  translatedPaths: oe,
                  blocked: lb(fe),
                  waitedMs: be
                }
              };
            }
          }
          let zo = e.now(),
            vn = await e.run(
              {
                hook: we.hook,
                event: Q,
                input: Nt,
                timeoutMs: Mt,
                env: st,
                ...(Ne !== null && { startDirectory: Ne.path })
              },
              H.frame,
              te
            ),
            yn = vn.aborted === !0 && !te.aborted,
            ve =
              yn && Mt < se
                ? {
                    answer: ge(
                      Q,
                      V.wire,
                      `not run to completion \u2014 too little time was left before the cloud session stops waiting for ${H.displayName}; retry`
                    ),
                    exitClass: "timeout",
                    blocked: Q === "PreToolUse",
                    localWarning: void 0
                  }
                : In(vn, {
                    event: Q,
                    label: V.wire,
                    timedOut: yn,
                    timeoutMs: Mt,
                    timeoutFailsClosed: H.timeoutFailsClosed
                  }),
            Sn = e.now() - zo;
          if (ve.localWarning !== void 0)
            F(
              `${z.wire.id}:${ve.exitClass}`,
              `cloud \u25B8 ${Q} \u25B8 ${ve.localWarning}${Ne !== null && ve.exitClass === "other" ? ` \xB7 ${vr}` : ""}`
            );
          else if (ve.answer !== null && ve.blocked)
            e.onLine(
              `cloud \u25B8 ${Q}${jn(He)} \u25B8 ${V.local} \u25B8 ${fjs(ve.answer) ? "asked" : "blocked"} (${Sn} ms)`,
              "info"
            );
          else if (ve.answer !== null && Dr(ve.answer))
            e.onLine(
              `cloud \u25B8 ${Q}${jn(He)} \u25B8 ${V.local} \u25B8 added context (${Sn} ms)`,
              "debug"
            );
          return {
            answer: ve.answer,
            telemetry: {
              ...U,
              outcome:
                ve.answer === null
                  ? "cancelled"
                  : ve.exitClass === "spawn_failed" ||
                      (ve.exitClass === "other" && ve.localWarning !== void 0)
                    ? "run_error"
                    : "answered",
              exitClass: ve.exitClass,
              translatedPaths: oe,
              blocked: ve.blocked,
              staged: we.staged !== null,
              projectFrame: we.hook.type === "command" && Ne === null,
              repinned: we.repinned,
              waitedMs: be
            }
          };
        } finally {
          Ht();
        }
      } finally {
        await Promise.all([we.staged?.release(), Ne?.release()]);
      }
    };
  return {
    async serve(D, H) {
      let z = e.now();
      if (H === null) return { kind: "silent", reason: "no_state" };
      if (D.requestId.length > $n || D.callbackId.length > $n)
        return (P({ outcome: "not_mine" }, z, void 0), { kind: "silent", reason: "not_mine" });
      let j = pwe(D.callbackId),
        te = j?.instanceId,
        Q = te !== void 0 && H.retiredInstanceIds.has(te);
      if (!Q && te !== H.instanceId)
        return (P({ outcome: "not_mine" }, z, void 0), { kind: "silent", reason: "not_mine" });
      let N = e.judgeSender(D.attestationStatus),
        U = (oe, q) => P(oe, q, N?.attestation);
      if (N?.heldBack === !0)
        return (
          e.debug(
            `[deviceHooks] ${Re(D.requestId)}: held back for its sender (attestation ${N.attestation.status}) \u2014 no opinion, nothing run`
          ),
          G("unattested", Sr, "warning"),
          U({ outcome: "unattested" }, z),
          { kind: "answer", answer: {} }
        );
      if (e.isMuted?.() === !0)
        return (
          e.debug(
            `[deviceHooks] ${Re(D.requestId)}: serving is switched off (emergency switch) \u2014 no opinion`
          ),
          U({ outcome: "muted" }, z),
          { kind: "answer", answer: {} }
        );
      if (I.has(D.requestId))
        return (
          e.debug(`[deviceHooks] ${Re(D.requestId)}: withdrawn earlier \u2014 staying silent`),
          U({ outcome: "withdrawn_replay", replay: !0 }, z),
          { kind: "silent", reason: "withdrawn" }
        );
      let ee = S.get(D.requestId);
      if (ee !== void 0 && ee.callbackId === D.callbackId)
        return (
          e.debug(`[deviceHooks] ${Re(D.requestId)}: replay \u2014 resending the earlier answer`),
          U({ outcome: "cached", replay: !0 }, z),
          { kind: "answer", answer: ee.answer }
        );
      if (ee !== void 0) {
        let oe = ge(
          j?.event === "PreToolUse" ? "PreToolUse" : "Stop",
          `hook on ${H.displayName}`,
          "not run \u2014 its request id was already used for another hook; retry"
        );
        return (
          U({ outcome: "replay_mismatch", blocked: lb(oe) }, z),
          { kind: "answer", answer: oe }
        );
      }
      if (n.has(D.requestId)) return { kind: "silent", reason: "running" };
      let Z = Q ? void 0 : H.inventory.forwarded.find((oe) => oe.wire.id === D.callbackId);
      if (Z === void 0) {
        e.debug(
          `[deviceHooks] ${Re(D.requestId)}: ${Q ? "retired instance" : "not in the current inventory"} \u2014 ${j?.event === "PreToolUse" ? "holding the guard" : "no opinion"}`
        );
        let oe = ge(
          j?.event === "PreToolUse" ? "PreToolUse" : "Stop",
          `hook on ${H.displayName}`,
          "not run \u2014 it belongs to a registration that machine has since replaced; retry"
        );
        return (U({ outcome: "unknown_id", blocked: lb(oe) }, z), { kind: "answer", answer: oe });
      }
      if (n.size >= jt) {
        e.debug(`[deviceHooks] ${Re(D.requestId)}: too many requests in hand \u2014 refusing`);
        let oe = Un(Z, H, e);
        return (U({ outcome: "overloaded", blocked: lb(oe) }, z), { kind: "answer", answer: oe });
      }
      let V = Pr(Z, D.input, e.defaultShell()),
        J = V === null ? void 0 : r.get(V.key);
      if (J !== void 0 && J.requestId !== D.requestId) {
        let oe = new AbortController();
        n.set(D.requestId, oe);
        let q = null;
        try {
          q = await new Promise((Y) => {
            let le = e.setTimer(() => Y("too_late"), Math.max(0, u(D, Z, z)));
            (oe.signal.addEventListener(
              "abort",
              () => {
                (le.clear(), Y(null));
              },
              { once: !0 }
            ),
              J.answer.then((ue) => {
                (le.clear(), Y(ue));
              }));
          });
        } finally {
          n.delete(D.requestId);
        }
        if (oe.signal.aborted) {
          if (oe.signal.reason !== gt) K(D.requestId);
          return (
            U({ outcome: "cancelled", blocked: !1 }, z),
            { kind: "silent", reason: "cancelled" }
          );
        }
        if (q === "too_late") {
          let Y = ge(
            pQ(Z.local.event) ? Z.local.event : "Stop",
            `hook on ${H.displayName}`,
            `not run \u2014 ${H.displayName} could not decide it before the cloud session stops waiting; retry`
          );
          return (
            x(D.requestId, D.callbackId, Y),
            U({ outcome: "too_late", blocked: lb(Y) }, z),
            { kind: "answer", answer: Y }
          );
        }
        if (q !== null)
          return (
            x(D.requestId, D.callbackId, q),
            e.debug(
              `[deviceHooks] ${Re(D.requestId)}: the same hook and invocation as ${Re(J.requestId)} \u2014 answered from its run`
            ),
            U({ outcome: "same_invocation", blocked: lb(q) }, z),
            { kind: "answer", answer: q }
          );
      }
      let re = () => {};
      if (V !== null) {
        let oe = new Promise((q) => {
          re = q;
        });
        (r.delete(V.key), r.set(V.key, { requestId: D.requestId, answer: oe }), R(r));
      }
      let ne = null,
        ae = new AbortController();
      n.set(D.requestId, ae);
      let ie = !1,
        de = M(D, H, Z, z, ae.signal).catch((oe) => {
          e.logError(oe);
          let q = ge(
            pQ(Z.local.event) ? Z.local.event : "Stop",
            `hook on ${H.displayName}`,
            "not run \u2014 an internal error while deciding it; retry"
          );
          return { answer: q, telemetry: { outcome: "decide_error", blocked: lb(q) } };
        });
      de.finally(() => {
        ie = !0;
      });
      try {
        let { answer: oe, telemetry: q } = await new Promise((ue) => {
          let ye = u(D, Z, z),
            Se = e.setTimer(
              () => {
                if (ae.signal.aborted) {
                  ue({ answer: null, telemetry: { outcome: "cancelled", blocked: !1 } });
                  return;
                }
                ae.abort(Mn);
                let he = ge(
                  pQ(Z.local.event) ? Z.local.event : "Stop",
                  `hook on ${H.displayName}`,
                  `not run \u2014 ${H.displayName} could not decide it before the cloud session stops waiting; retry`
                );
                ue({ answer: he, telemetry: { outcome: "too_late", blocked: lb(he) } });
              },
              Math.max(0, ye)
            );
          de.then((he) => {
            (Se.clear(), ue(he));
          });
        });
        if (ae.signal.reason !== Mn && (oe === null || ae.signal.aborted)) {
          if (ae.signal.reason !== gt) K(D.requestId);
          else if (oe !== null) x(D.requestId, D.callbackId, oe);
          return (
            e.debug(`[deviceHooks] ${Re(D.requestId)}: ${Z.wire.id} withdrawn \u2014 nothing sent`),
            U({ ...q, outcome: "cancelled" }, z),
            { kind: "silent", reason: "cancelled" }
          );
        }
        let le = oe ?? {};
        return (
          (ne = le),
          x(D.requestId, D.callbackId, le),
          e.debug(`[deviceHooks] ${Re(D.requestId)}: ${Z.wire.id} \u2192 ${q.outcome}`),
          U(q, z),
          { kind: "answer", answer: le }
        );
      } finally {
        if ((re(ne), V !== null && r.get(V.key)?.requestId === D.requestId)) r.delete(V.key);
        if (ie) n.delete(D.requestId);
        else de.finally(() => n.delete(D.requestId));
      }
    },
    cancel(D, H = "worker") {
      let z = n.get(D);
      if (z === void 0) return !1;
      if (H === "worker") (K(D), z.abort());
      else z.abort(gt);
      return !0;
    },
    cancelAll() {
      let D = n.size;
      for (let H of n.values()) H.abort(gt);
      return (s.refuseAll(), D);
    },
    inFlight: () => n.size
  };
}
function Pr(e, n, r) {
  if (typeof n !== "object" || n === null) return null;
  let s = e.local.hook,
    u =
      s.type === "command"
        ? `command\x00${s.shell ?? r}\x00${s.command}\x00${_(s.args ?? null)}\x00${s.if ?? ""}`
        : s.type === "http"
          ? `http\x00${s.url}\x00${s.if ?? ""}`
          : null;
  if (u === null) return null;
  let h =
    "tool_use_id" in n && typeof n.tool_use_id === "string"
      ? `tool\x00${n.tool_use_id}`
      : `input\x00${et(_(n))}`;
  return { key: `${e.local.event}\x00${h}\x00${u}` };
}
function Un(e, n, r, s = "in_hand") {
  let u = e.local.hook;
  if (e.local.event !== "PreToolUse" || (u.type !== "command" && u.type !== "http")) return {};
  let h = null;
  try {
    h = u.type === "command" ? r.parseTarget(u) : null;
  } catch {}
  let w = Vn(u, h);
  return ge(
    "PreToolUse",
    Gn(u, w, n),
    s === "too_large"
      ? `not run \u2014 the event was too large to judge on ${n.displayName}; retry with less`
      : `not run \u2014 ${n.displayName} has too many hook requests from the cloud session in hand at once; retry`
  );
}
function jn(e) {
  return "tool_name" in e && typeof e.tool_name === "string"
    ? `:${ei(e.tool_name, { maxCodeUnits: 48 })}`
    : "";
}
function Dr(e) {
  if (lb(e) || "async" in e) return !1;
  let n = e.hookSpecificOutput;
  return (
    e.systemMessage !== void 0 ||
    (n !== void 0 && "additionalContext" in n && n.additionalContext !== void 0)
  );
}
function Kn(e) {
  return tpr[e] * 1000;
}
var Or =
    /^(?:PATH|CDPATH|PYTHONPATH|PYTHONHOME|NODE_PATH|RUBYLIB|PERL5LIB|PERLLIB|GEM_PATH|GEM_HOME|CLASSPATH|LD_LIBRARY_PATH|DYLD_\w+)$/,
  qn = "\x00unplaceable";
function $r(e, { home: n, launchDir: r }) {
  let s = [],
    u = "",
    h = "",
    w = null,
    k = () => {
      if (u !== "") s.push({ raw: u, text: h });
      ((u = ""), (h = ""));
    };
  for (let R of e.trim())
    if (w !== null)
      if (((u += R), R === w)) w = null;
      else h += R;
    else if (R === '"' || R === "'") ((w = R), (u += R));
    else if (R === " " || R === "\t") k();
    else ((u += R), (h += R));
  k();
  let y = O() === "windows",
    S = (R) => (y ? /[\\/]/.test(R) : R.includes("/")),
    I = (R) => (y ? /^(?:[A-Za-z]:[\\/]|[\\/])/.test(R) : R.startsWith("/")),
    C = (R) => y && /^[A-Za-z]:(?![\\/])/.test(R);
  return s.flatMap(({ raw: R, text: x }) => {
    if (y && R.replace(/'[^']*'|"[^"]*"/g, "").includes("\\")) return [r];
    let K = x.replace(/^\$(?:HOME\b|\{HOME\})/, ""),
      G = R.replace(/'[^']*'/g, "").replace(/^"?\$\{HOME\}/, "");
    if (/[`$;|&<>]/.test(K) || /[*?[{]/.test(G)) return [r];
    let F = x.match(/^(--?[\w-]+|[A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (F) {
      let A = F[2],
        M = Or.test(y ? F[1].toUpperCase() : F[1]),
        D = C(A) ? [r] : I(A) ? [A] : S(A) ? [`${r}/${A}`] : [],
        z = (
          y && !M
            ? A.split(":").reduce((j, te) => {
                let Q = j.at(-1);
                if (Q !== void 0 && /^[A-Za-z]$/.test(Q)) j[j.length - 1] = `${Q}:${te}`;
                else j.push(te);
                return j;
              }, [])
            : A.split(":")
        ).flatMap((j) =>
          j === ""
            ? M || A.includes(":")
              ? [r]
              : []
            : C(j)
              ? [r]
              : I(j)
                ? [j]
                : S(j) || M || j === "." || j === ".."
                  ? [`${r}/${j}`]
                  : []
        );
      return L([...D, ...z]);
    }
    let P = x;
    if (n !== void 0 && n !== "") {
      if (R === "~" || R.startsWith("~/")) P = n + x.slice(1);
      else if (/^"?\$\{HOME\}(?=[/"]|$)/.test(R) && (x === "${HOME}" || x.startsWith("${HOME}/")))
        P = n + x.slice(7);
      else if (/^"?\$HOME(?=[/"]|$)/.test(R) && (x === "$HOME" || x.startsWith("$HOME/")))
        P = n + x.slice(5);
    }
    if (C(P)) return [r];
    if (I(P)) return [P];
    return S(P) ? [`${r}/${P}`] : [];
  });
}
function Hr(e, n) {
  return n.some((r) => RHe(Fc(e), r));
}
import { posix as ht } from "path";
import { posix as Xr } from "path";
var eo = new Set([
    "env",
    "nice",
    "nohup",
    "exec",
    "time",
    "caffeinate",
    "builtin",
    "command",
    "xargs",
    "sudo",
    "doas",
    "runuser",
    "coproc",
    "timeout",
    "gtimeout",
    "flock",
    "arch",
    "setsid",
    "stdbuf",
    "unbuffer",
    "chronic",
    "busybox",
    "strace",
    "ltrace",
    "entr"
  ]),
  Vt = new Set(["-w", "--wait", "--timeout", "-E", "--conflict-exit-code"]),
  Nr = {
    nice: new Set(["-n", "--adjustment"]),
    timeout: new Set(["-s", "--signal", "-k", "--kill-after"]),
    gtimeout: new Set(["-s", "--signal", "-k", "--kill-after"]),
    sudo: new Set([
      "-u",
      "-g",
      "-C",
      "-D",
      "-h",
      "-p",
      "-R",
      "-T",
      "-U",
      "--user",
      "--group",
      "--host",
      "--prompt",
      "--close-from",
      "--chdir",
      "--role",
      "--type",
      "--other-user"
    ]),
    doas: new Set(["-u", "-C"]),
    runuser: new Set([
      "-u",
      "-g",
      "-G",
      "--user",
      "--group",
      "--supp-group",
      "-w",
      "--whitelist-environment"
    ]),
    xargs: new Set([
      "-n",
      "-P",
      "-I",
      "-L",
      "-s",
      "-d",
      "-E",
      "-a",
      "--arg-file",
      "--max-args",
      "--max-procs",
      "--delimiter"
    ]),
    env: new Set(["-u", "-C", "-P", "--unset", "--chdir"]),
    caffeinate: new Set(["-t", "-w"]),
    exec: new Set(["-a"]),
    flock: new Set([...Vt, "-c", "--command"]),
    arch: new Set(["-arch", "-e", "-d"]),
    stdbuf: new Set(["-i", "-o", "-e", "--input", "--output", "--error"]),
    strace: new Set(["-e", "-o", "-p", "-s", "-P", "-E", "-u", "-a", "-X"]),
    ltrace: new Set(["-e", "-o", "-p", "-s", "-n", "-u", "-a", "-F"]),
    ionice: new Set([
      "-c",
      "--class",
      "-n",
      "--classdata",
      "-p",
      "--pid",
      "-P",
      "--pgid",
      "-u",
      "--uid"
    ]),
    chrt: new Set(["-T", "--sched-runtime", "-P", "--sched-period", "-D", "--sched-deadline"]),
    "xvfb-run": new Set([
      "-n",
      "--server-num",
      "-s",
      "--server-args",
      "-f",
      "--auth-file",
      "-e",
      "--error-file",
      "-w",
      "--wait",
      "-p",
      "--xauth-protocol"
    ])
  },
  Mr = { timeout: 1, gtimeout: 1, flock: 1, chrt: 1, taskset: 1 };
function Gt(e) {
  return (
    /^(?:\/|\$(?!\{?(?:CURDIR|PWD)\b)(?:[A-Za-z_][A-Za-z0-9_]*|\{[A-Za-z_][A-Za-z0-9_]*\})\/)/.test(
      e.text
    ) || /^~(?:[A-Za-z_][A-Za-z0-9._-]*)?\//.test(Ue(e.raw))
  );
}
var St = {
    anchored: Gt,
    takesNext: (e, n) =>
      e(n) ||
      (!n.startsWith("--") &&
        Array.from(n).findIndex((r, s) => s > 0 && e("-" + r)) === n.length - 1),
    alsoLaunchers: new Set(["ionice", "chrt", "taskset", "xvfb-run"]),
    alsoValued: { sudo: new Set(["-r", "-t"]) },
    runuserIsSu: !0
  },
  to = [
    {
      anchored: (e) => e.text.startsWith("/"),
      takesNext: (e, n) =>
        !n.includes("=") && (e(n) || (/^-[a-zA-Z]{2,}$/.test(n) && e("-" + n.at(-1)))),
      alsoLaunchers: new Set(),
      alsoValued: {},
      runuserIsSu: !1
    },
    St,
    {
      ...St,
      alsoValued: {
        ...St.alsoValued,
        time: new Set(["-f", "--format", "-o", "--output"]),
        strace: new Set(["-I", "-b"]),
        xargs: new Set(["-J"])
      }
    },
    { ...St, stepsPastVariable: !0 }
  ];
function oo(e) {
  return eo.has(e) || to.some((n) => n.alsoLaunchers.has(e));
}
function Lr(e) {
  let n = Array(e.length + 1).fill(!1);
  for (let r = e.length - 1; r >= 0; r -= 1) {
    let s = e[r].text;
    n[r] = s !== "--" && (/^(?:-[flmpPT]*u|--user(?:=|$))/.test(s) || n[r + 1]);
  }
  return n;
}
var ro = new Set(["then", "do", "else", "elif", "if", "while", "until", "!"]),
  Fr = new Set(["fi", "done", "esac", "}", "]]"]),
  Wr = new Set(["time", "coproc", "function", "fi", "done", "esac"]),
  Ur = new Set(["coproc", "function"]),
  jr = /^[A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?\+?=/,
  Xn = 6,
  qt = " \t",
  qr = ` 	
;&|()<>`,
  We = String.fromCharCode(96),
  Br = /(?:^|[^\\])(?:\\\\)*\\\n/,
  Vr = /(?:^|[^\\])(?:\\\\)*\\$/;
function Bt(e, n) {
  let r = n;
  while (
    e[r] === "\\" &&
    e[r + 1] ===
      `
`
  )
    r += 2;
  return r;
}
function Ue(e) {
  if (!e.includes("\\\n")) return e;
  let n = [],
    r = 0,
    s = -1;
  for (let u = 0; u < e.length; u += 1) {
    let h = e[u];
    if (h === "\\") {
      if (s === -1) s = u;
      continue;
    }
    if (
      h ===
        `
` &&
      s !== -1 &&
      (u - s) % 2 === 1
    )
      (n.push(e.slice(r, u - 1)), (r = u + 1));
    s = -1;
  }
  return (n.push(e.slice(r)), n.join(""));
}
function Gr(e) {
  if (!e.includes("\\")) return e;
  let n = "",
    r = 0;
  for (let s = 0; s < e.length; s += 1) {
    if (e[s] !== "\\") continue;
    let u = e[s + 1];
    if (
      u === "$" ||
      u === We ||
      u === "\\" ||
      u ===
        `
`
    )
      ((n += e.slice(r, s)),
        (r =
          u ===
          `
`
            ? s + 2
            : s + 1),
        (s += 1));
  }
  return r === 0 ? e : n + e.slice(r);
}
var Zn = /[ \t\n|]/,
  Yn = /@P\}/,
  zr = /\$'[^']*\\|"[^"]*\\/;
function Rt(e, n = {}) {
  let r = new Xe(e, n.make === !0, n.quotedBackslashKept !== !1),
    s = r.tokens("eof", 0),
    u = [];
  for (let h of [s, ...r.bodies]) Kr(h, n, u);
  return { commands: u, unreadable: r.unreadable };
}
function io(e, n = {}) {
  let r = new Xe(e, !1, n.quotedBackslashKept !== !1);
  return (r.tokens("eof", 0), r.comments);
}
function Kr(e, n, r) {
  let s = 0,
    u = 0,
    h = !1,
    w = !1,
    k = 0,
    y = 0;
  while (s < e.length) {
    let S = e[s];
    if (h) {
      if (
        S.kind === "op" &&
        S.op ===
          `
`
      ) {
        s += 1;
        continue;
      }
      if (S.kind === "word" && S.word.text === "esac" && !S.word.quoted) {
        ((u -= 1), (h = !1), (s += 1));
        continue;
      }
      while (s < e.length) {
        let A = e[s];
        if (
          (A.kind === "op" && A.op === ")") ||
          (A.kind === "word" && A.word.text === "esac" && !A.word.quoted)
        )
          break;
        s += 1;
      }
      if (e[s]?.kind === "op") s += 1;
      ((h = !1), (w = !1));
      continue;
    }
    if (S.kind === "op") {
      if (u > 0 && /^;[;&]|^;;&$/.test(S.op)) h = !0;
      if (S.op === "(" || S.op === "{") {
        if (((y += 1), w && k === 0)) k = y;
      } else if (S.op === ")" || S.op === "}") {
        if (y === k) k = 0;
        y = Math.max(0, y - 1);
      }
      if (S.op === "|" || S.op === "|&") w = !0;
      else if (
        S.op !==
          `
` &&
        S.op !== "(" &&
        S.op !== "{"
      )
        w = !1;
      s += 1;
      continue;
    }
    let I = [],
      C = [],
      R;
    while (s < e.length && e[s].kind !== "op") {
      let A = e[s];
      if (A.kind === "word") I.push(A.word);
      else if (A.kind === "redirect") C.push({ op: A.op, target: A.word });
      else if (A.kind === "heredoc" && A.body !== null) R = (R ?? "") + A.body;
      s += 1;
    }
    let x = w || k > 0;
    w = !1;
    let [K, ...G] = so(I, n),
      F =
        K ??
        (C.length > 0 || R !== void 0
          ? { program: { text: ":", quoted: !1, raw: ":" }, args: [], assignments: [] }
          : void 0);
    if (F === void 0) continue;
    let P = F.program.text;
    if (!F.program.quoted) {
      if (P === "case") {
        u += 1;
        let A = e[s];
        if (A?.kind === "op" && A.op === ")" && F.args.some((M) => M.text === "in")) s += 1;
        else h = !0;
        continue;
      }
      if (P === "esac") {
        u = Math.max(0, u - 1);
        continue;
      }
      if (P === "[[") {
        if (!I.some((A) => A.text === "]]" && !A.quoted)) {
          while (s < e.length) {
            let A = e[s];
            if (
              (A.kind === "word" && A.word.text === "]]") ||
              (A.kind === "op" &&
                A.op ===
                  `
`)
            )
              break;
            s += 1;
          }
          if (e[s]?.kind === "word") s += 1;
        }
        continue;
      }
      if (Fr.has(P)) {
        if (C.length > 0 || R !== void 0)
          r.push({
            program: { text: ":", quoted: !1, raw: ":" },
            args: [],
            assignments: [],
            redirects: C,
            piped: x,
            ...(R !== void 0 && { heredoc: R })
          });
        continue;
      }
    }
    for (let A of [F, ...G])
      r.push({ ...A, redirects: C, piped: x, ...(R !== void 0 && { heredoc: R }) });
  }
}
function Jr(e, n, r) {
  let s = [],
    u,
    h = !1,
    w,
    k = 0;
  for (;;) {
    while (k < e.length) {
      let x = e[k];
      if (jr.test(Ue(x.raw))) s.push(x);
      else if (!(!x.quoted && ro.has(x.text))) break;
      k += 1;
    }
    let y = e[k];
    if (y === void 0)
      return s.length > 0
        ? { program: { text: ":", quoted: !1, raw: ":" }, args: [], assignments: s }
        : void 0;
    if (n.make && !y.quoted && /^[@+-]+./.test(y.text)) {
      let x = y.text.replace(/^[@+-]+/, "");
      y = { ...y, text: x, raw: x };
    }
    let S = y.text.slice(y.text.lastIndexOf("/") + 1).toLowerCase();
    if (
      !(eo.has(S) || r.alsoLaunchers.has(S)) ||
      /[ \t]/.test(y.text) ||
      (y.text.includes("/") && !r.anchored(y))
    ) {
      if (r.stepsPastVariable === !0 && h && y.text.startsWith("$") && e[k + 1] !== void 0) {
        ((w ??= { k, kept: s.length }), s.push(y), (k += 1));
        continue;
      }
      let x = y.text.startsWith("$") && !/^\$\((?:\u2026|\(\u2026\))\)/.test(y.text);
      if (w !== void 0 && (y.text.startsWith("-") || (!x && (y.quoted || y.expands === !0))))
        return { program: e[w.k], args: e.slice(w.k + 1), assignments: s.slice(0, w.kept) };
      return { program: y, args: e.slice(k + 1), assignments: s };
    }
    if (S === "command") {
      let x = !1;
      for (let K = k + 1; e[K]?.text.startsWith("-") === !0; K += 1) x ||= qbt(e[K].text);
      if (x) return { program: y, args: e.slice(k + 1), assignments: s };
    }
    if (S === "runuser" && r.runuserIsSu) {
      if (((u ??= Lr(e)), !u[k + 1])) return { program: y, args: e.slice(k + 1), assignments: s };
    }
    if (S === "busybox") {
      (s.push(y), (k += 1));
      continue;
    }
    (s.push(y), (h = !0), (w = void 0), (k += 1));
    let I = Mr[S] ?? 0,
      C = (x) => (Nr[S]?.has(x) ?? !1) || (r.alsoValued[S]?.has(x) ?? !1),
      R = !1;
    while (k < e.length) {
      let x = e[k].text;
      if (!R && x === "--") {
        (s.push(e[k]), (R = !0), (k += 1));
        continue;
      }
      if (!R && S === "env" && x === "-") {
        (s.push({ ...e[k], text: "-i" }), (k += 1));
        continue;
      }
      if (!R && x.startsWith("-") && x !== "-") {
        let K = r.takesNext(C, x);
        if ((s.push(e[k]), K && e[k + 1] !== void 0)) s.push(e[k + 1]);
        k += K ? 2 : 1;
        continue;
      }
      if (I > 0 && (S !== "chrt" || /^\d+$/.test(x))) {
        (s.push(e[k]), (I -= 1), (k += 1));
        continue;
      }
      break;
    }
  }
}
function so(e, n) {
  return to
    .flatMap((r) => {
      let s = Jr(e, n, r);
      return s === void 0 ? [] : [s];
    })
    .filter(
      (r, s, u) =>
        u.findIndex((h) => h.program.raw === r.program.raw && h.args.length === r.args.length) === s
    );
}
function zt(e) {
  return so(e, {});
}
class Xe {
  text;
  make;
  quotedBackslashKept;
  pos = 0;
  unreadable = null;
  bodies = [];
  comments = [];
  pending = [];
  lineIndex = null;
  strippedLineIndex = null;
  constructor(e, n, r) {
    this.text = e;
    this.make = n;
    this.quotedBackslashKept = r;
  }
  fail(e) {
    this.unreadable ??= e;
  }
  pastContinuations(e, n = !1) {
    for (;;) {
      let r = Bt(this.text, e);
      if (r !== e) e = r;
      else if (n && e < this.text.length && qt.includes(this.text[e])) e += 1;
      else return e;
    }
  }
  tooDeep(e) {
    if (e < Xn) return !1;
    this.fail("command substitutions nested too deeply");
    let n = 1;
    while (this.pos < this.text.length && n > 0) {
      let r = this.text[this.pos];
      if (r === "(") n += 1;
      else if (r === ")") n -= 1;
      this.pos += 1;
    }
    return !0;
  }
  tokens(e, n) {
    let r = this.text,
      s = r.length,
      u = [],
      h = this.pending,
      w = 0,
      k = 0,
      y = !1,
      S = !1,
      I = !0,
      C = !1;
    while (this.pos < s) {
      let R = r[this.pos];
      if (qt.includes(R)) {
        this.pos += 1;
        continue;
      }
      if (
        R ===
        `
`
      ) {
        if (((this.pos += 1), h.length > 0)) this.readHeredocBodies(h.splice(0), n);
        if (e === "array") continue;
        (u.push({
          kind: "op",
          op: `
`
        }),
          (I = !0));
        continue;
      }
      if (
        R === "\\" &&
        r[this.pos + 1] ===
          `
`
      ) {
        this.pos += 2;
        continue;
      }
      if (R === "#") {
        let D = r.indexOf(
            `
`,
            this.pos
          ),
          H = D === -1 ? s : D;
        (this.comments.push([this.pos, H]), (this.pos = H));
        continue;
      }
      if (e === "array") {
        if (R === ")") return ((this.pos += 1), u);
        if (";&|<>".includes(R) || R === "(") {
          (this.fail("an array assignment holds something other than words"), (this.pos += 1));
          continue;
        }
        u.push({ kind: "word", word: this.readWord(n) });
        continue;
      }
      let x = this.pastContinuations(this.pos + 1),
        K = R + (r[x] ?? ""),
        G = this.pastContinuations(x + 1);
      if (K === ";;" && r[G] === "&") {
        (u.push({ kind: "op", op: ";;&" }), (this.pos = G + 1), (S = k > 0), (I = !0));
        continue;
      }
      if (K === "&&" || K === "||" || K === ";;" || K === ";&" || K === "|&") {
        if (
          (u.push({ kind: "op", op: K }), (this.pos = x + 1), (K === ";;" || K === ";&") && k > 0)
        )
          S = !0;
        I = !0;
        continue;
      }
      if (K === "((" && I) {
        let D = x + 1,
          H = Qn(r, D);
        if (H !== -1) {
          (this.collectExpansions(r.slice(D, H - 2), n), (this.pos = H), (I = !1));
          continue;
        }
      }
      if (R === "(") {
        if (((this.pos += 1), S)) continue;
        ((w += 1), u.push({ kind: "op", op: "(" }), (I = !0));
        continue;
      }
      if (R === ")") {
        if (((this.pos += 1), S)) {
          (u.push({ kind: "op", op: ")" }), (S = !1), (I = !0));
          continue;
        }
        if (w > 0) {
          ((w -= 1), u.push({ kind: "op", op: ")" }), (I = !0));
          continue;
        }
        if (e === "paren") return u;
        (this.fail("a closing parenthesis that closes nothing"), u.push({ kind: "op", op: ")" }));
        continue;
      }
      if (R === "&" && r[x] === ">") {
        if (
          ((this.pos = r[G] === ">" ? G + 1 : x + 1),
          (this.pos = this.pastContinuations(this.pos, !0)),
          this.pos < s &&
            !`
;&|()`.includes(r[this.pos]))
        )
          u.push({ kind: "redirect", op: "&>", word: this.readWord(n) });
        I = !1;
        continue;
      }
      if (R === ";" || R === "&" || R === "|") {
        (u.push({ kind: "op", op: R }), (this.pos += 1), (I = !0));
        continue;
      }
      if (R === "<" || R === ">") {
        if (r[x] === "(") {
          (u.push({ kind: "word", word: this.readWord(n) }), (I = !1));
          continue;
        }
        let D = x,
          H = K,
          z = H === "<<" ? this.pastContinuations(D + 1) : D;
        if (H === "<<" && r[z] !== "<") {
          this.pos = z;
          let te = !1;
          if (r[this.pos] === "-") {
            if (z !== D + 1)
              this.fail('a heredoc "-" that only a joined line continuation puts next to the <<');
            ((te = !0), (this.pos = this.pastContinuations(this.pos + 1)));
          }
          this.pos = this.pastContinuations(this.pos, !0);
          let Q = this.readWord(n, !0);
          if (Q.raw !== "") {
            if (zr.test(Ue(Q.raw)))
              this.fail("a heredoc delimiter this reading cannot spell as the shell does");
            if (Q.text === "" && !Q.quoted) this.fail("a heredoc delimiter that reads as empty");
            let N = { kind: "heredoc", body: null };
            (u.push(N),
              (I = !1),
              h.push({ token: N, delimiter: Q.text, strip: te, expand: !Q.quoted }));
          }
          continue;
        }
        let j = H === "<<" ? "<<<" : [">>", ">&", "<&", ">|", "<>"].includes(H) ? H : R;
        if (
          ((this.pos = j === "<<<" ? z + 1 : j.length === 2 ? D + 1 : this.pos + 1),
          (this.pos = this.pastContinuations(this.pos, !0)),
          this.pos < s &&
            !`
;&|()`.includes(r[this.pos]))
        )
          u.push({ kind: "redirect", op: j, word: this.readWord(n) });
        I = !1;
        continue;
      }
      if (R === "{" || R === "}") {
        let D = this.pastContinuations(this.pos + 1),
          H =
            D >= s ||
            (
              qt +
              `
;&|()<>`
            ).includes(r[D]);
        if (H && I) {
          (u.push({ kind: "op", op: R }), (this.pos += 1), (I = !0));
          continue;
        }
        if (H && R === "{") this.fail("a { that may open a group or may be an argument");
      }
      let F = /^[A-Za-z_][A-Za-z0-9_]*\+?=\(/.exec(r.slice(this.pos, this.pos + 256));
      if (F !== null) {
        let D = this.pos;
        if (((this.pos += F[0].length), !this.tooDeep(n + 1))) this.tokens("array", n + 1);
        let H = r.slice(D, this.pos);
        (u.push({ kind: "word", word: { text: H, quoted: !1, raw: H } }), (I = !1));
        continue;
      }
      let P = this.readWord(n);
      if (P.raw === "") {
        this.pos += 1;
        continue;
      }
      if (/^[0-9]+$/.test(Ue(P.raw)) && (r[this.pos] === "<" || r[this.pos] === ">")) continue;
      if ((u.push({ kind: "word", word: P }), !P.quoted)) {
        if (I && P.text === "case") y = !0;
        else if (y && P.text === "in") ((y = !1), (k += 1), (S = !0));
        else if (P.text === "esac" && k > 0 && (I || S)) ((k -= 1), (S = !1));
      }
      let A = I,
        M = C;
      ((C = A && !P.quoted && Ur.has(P.text)),
        (I = M || (A && !P.quoted && (ro.has(P.text) || Wr.has(P.text)))));
    }
    if (e === "eof") h.splice(0);
    if (k > 0 || S) this.fail("a case statement that is never closed");
    if (e !== "eof")
      this.fail(
        e === "array"
          ? "an array assignment that is never closed"
          : "a $( or ( that is never closed"
      );
    return u;
  }
  readWord(e, n = !1) {
    let r = this.text,
      s = r.length,
      u = this.pos,
      h = "",
      w = !1,
      k = !1;
    while (this.pos < s) {
      let S = r[this.pos];
      if (S === "'") {
        w = !0;
        let I = r.indexOf("'", this.pos + 1);
        if (I === -1) {
          (this.fail("a single quote that is never closed"),
            (h += r.slice(this.pos + 1)),
            (this.pos = s));
          break;
        }
        ((h += r.slice(this.pos + 1, I)), (this.pos = I + 1));
        continue;
      }
      if (S === "$" && r[this.pos + 1] === "'") {
        w = !0;
        {
          let I = r.indexOf("'", this.pos + 2);
          if (r.slice(this.pos + 2, I === -1 ? s : I).includes("\\")) k = !0;
        }
        this.pos += 2;
        while (this.pos < s && r[this.pos] !== "'")
          if (r[this.pos] === "\\" && this.pos + 1 < s) ((h += r[this.pos + 1]), (this.pos += 2));
          else ((h += r[this.pos]), (this.pos += 1));
        if (this.pos >= s) {
          this.fail("a $' quote that is never closed");
          break;
        }
        this.pos += 1;
        continue;
      }
      if (S === '"' || (S === "$" && r[this.pos + 1] === '"')) {
        ((w = !0), (this.pos += S === "$" ? 2 : 1));
        while (this.pos < s && r[this.pos] !== '"') {
          let I = r[this.pos];
          if (I === "\\" && this.pos + 1 < s) {
            let C = r[this.pos + 1];
            ((h +=
              C ===
              `
`
                ? ""
                : C === "$" || C === We || C === '"' || C === "\\"
                  ? C
                  : this.quotedBackslashKept
                    ? I + C
                    : C),
              (this.pos += 2));
          } else if (!n && I === "$" && r[this.pastContinuations(this.pos + 1)] === "(")
            h += this.readDollarParen(e, this.pastContinuations(this.pos + 1));
          else if (!n && I === We) h += this.readBackticks(e);
          else if (I === "$" && r[this.pastContinuations(this.pos + 1)] === "{")
            ((h += this.readParameterExpansion(e, this.pastContinuations(this.pos + 1))), (k = !0));
          else {
            if (I === "$") k = !0;
            ((h += I), (this.pos += 1));
          }
        }
        if (this.pos >= s) {
          this.fail("a double quote that is never closed");
          break;
        }
        this.pos += 1;
        continue;
      }
      if (S === "\\" && this.pos + 1 < s) {
        if (
          r[this.pos + 1] !==
          `
`
        )
          ((h += r[this.pos + 1]), (w = !0));
        this.pos += 2;
        continue;
      }
      if (S === "$" && r[this.pastContinuations(this.pos + 1)] === "{") {
        ((h += this.readParameterExpansion(e, this.pastContinuations(this.pos + 1))), (k = !0));
        continue;
      }
      if (!n && S === "$" && r[this.pastContinuations(this.pos + 1)] !== "(") k = !0;
      if (!n && S === "$" && r[this.pastContinuations(this.pos + 1)] === "(") {
        ((h += this.readDollarParen(e, this.pastContinuations(this.pos + 1))), (w = !0), (k = !0));
        continue;
      }
      if (!n && S === We) {
        ((h += this.readBackticks(e)), (w = !0), (k = !0));
        continue;
      }
      if (!n && (S === "<" || S === ">") && r[this.pastContinuations(this.pos + 1)] === "(") {
        if (((this.pos = this.pastContinuations(this.pos + 1) + 1), !this.tooDeep(e + 1)))
          this.bodies.push(this.tokens("paren", e + 1));
        ((h += S + "(\u2026)"), (w = !0));
        continue;
      }
      if (qr.includes(S)) break;
      ((h += S), (this.pos += 1));
    }
    let y = r.slice(u, this.pos);
    if (/\{[^{}'"]*(?:,|\.\.)[^{}'"]*\}/.test(y.replace(/'[^']*'|"[^"]*"/g, ""))) k = !0;
    return { text: h, quoted: w, raw: y, ...(k && { expands: k }) };
  }
  readParameterExpansion(e, n = this.pos + 1) {
    let r = this.text,
      s = r.length;
    this.pos = n + 1;
    let u = (y) => Zn.test(r[this.pastContinuations(y)] ?? "");
    if (u(this.pos)) this.fail("a ${ \u2026; } command substitution");
    let h = 1,
      w = !1;
    while (this.pos < s && h > 0) {
      let y = r[this.pos];
      if (y === "\\") this.pos += 2;
      else if (y === '"') ((w = !w), (this.pos += 1));
      else if (y === "'" && !w) {
        let S = r.indexOf("'", this.pos + 1),
          I = S === -1 ? s : S;
        (this.collectExpansions(r.slice(this.pos + 1, I), e), (this.pos = S === -1 ? s : S + 1));
      } else if (y === "'") this.pos += 1;
      else if (y === "$" && r[this.pastContinuations(this.pos + 1)] === "(")
        this.readDollarParen(e, this.pastContinuations(this.pos + 1));
      else if (y === We) this.readBackticks(e);
      else if (y === "$" && r[this.pastContinuations(this.pos + 1)] === "{") {
        if (((h += 1), (this.pos = this.pastContinuations(this.pos + 1) + 1), u(this.pos)))
          this.fail("a ${ \u2026; } command substitution");
      } else {
        if (y === "}" && !w) h -= 1;
        this.pos += 1;
      }
    }
    if (h > 0) this.fail("a ${ that is never closed");
    let k = Ue(r.slice(n, this.pos));
    if (Yn.test(k)) this.fail("a ${ \u2026@P } expansion");
    return "$" + k;
  }
  readDollarParen(e, n = this.pos + 1) {
    let r = this.text;
    if (r[n + 1] === "(") {
      let h = Qn(r, n + 2);
      if (h !== -1)
        return (this.collectExpansions(r.slice(n + 2, h - 2), e), (this.pos = h), "$((\u2026))");
    }
    if (((this.pos = n + 1), this.tooDeep(e + 1))) return "$(\u2026)";
    let s = this.pos,
      u = this.tokens("paren", e + 1);
    if (this.make) {
      let h = u[0];
      if (h?.kind === "word" && /^(?:shell|eval|call)$/.test(h.word.text))
        return (this.bodies.push(u.slice(1)), "$(\u2026)");
      return "$(" + this.text.slice(s, Math.max(s, this.pos - 1)) + ")";
    }
    return (this.bodies.push(u), "$(\u2026)");
  }
  readBackticks(e) {
    let n = this.text,
      r = n.length,
      s = this.pos + 1;
    while (s < r && n[s] !== We) s += n[s] === "\\" ? 2 : 1;
    if (s >= r) this.fail("a backtick that is never closed");
    let u = new Xe(
      n.slice(this.pos + 1, Math.min(s, r)).replace(/\\([$\x60\\])/g, "$1"),
      this.make,
      this.quotedBackslashKept
    );
    if (e + 1 > Xn) this.fail("command substitutions nested too deeply");
    else if ((this.bodies.push(u.tokens("eof", e + 1), ...u.bodies), u.unreadable !== null))
      this.fail(u.unreadable);
    return ((this.pos = Math.min(s + 1, r)), "$(\u2026)");
  }
  collectExpansions(e, n) {
    if (Yn.test(Ue(e))) this.fail("a ${ \u2026@P } expansion");
    let r = 0;
    while (r < e.length) {
      let s = e[r],
        u = s === "$" ? Bt(e, r + 1) : r + 1;
      if (s === "$" && e[u] === "(") {
        let h = new Xe(e.slice(r), this.make, this.quotedBackslashKept);
        if ((h.readDollarParen(n, u - r), this.bodies.push(...h.bodies), h.unreadable !== null))
          this.fail(h.unreadable);
        r += Math.max(h.pos, 1);
        continue;
      }
      if (s === "$" && e[u] === "{") {
        if (Zn.test(e[Bt(e, u + 1)] ?? "")) this.fail("a ${ \u2026; } command substitution");
      }
      if (s === "\\") r += 2;
      else if (s === We) {
        let h = new Xe(e.slice(r), this.make, this.quotedBackslashKept);
        if ((h.readBackticks(n), this.bodies.push(...h.bodies), h.unreadable !== null))
          this.fail(h.unreadable);
        r += Math.max(h.pos, 1);
      } else r += 1;
    }
  }
  readHeredocBodies(e, n) {
    for (let r of e) {
      let s = this.findLine(r.delimiter, this.pos, r.strip),
        u =
          s === -1
            ? -1
            : this.text.indexOf(
                `
`,
                s
              );
      if (r.expand && s !== -1 && this.unreadable === null && Br.test(this.text.slice(this.pos, s)))
        ({ at: s, lineEnd: u } = this.findJoinedLine(r.delimiter, this.pos, r.strip));
      if (s === -1) {
        this.fail("a heredoc is never terminated");
        break;
      }
      let h = this.text.slice(this.pos, s);
      if (r.expand) this.collectExpansions(Ue(h), n);
      ((r.token.body = r.expand ? Gr(h) : h), (this.pos = u === -1 ? this.text.length : u + 1));
    }
  }
  findJoinedLine(e, n, r) {
    let s = this.text,
      u = n;
    while (u <= s.length) {
      let h = "",
        w = u,
        k = -1;
      for (;;) {
        k = s.indexOf(
          `
`,
          w
        );
        let y = s.slice(w, k === -1 ? s.length : k),
          S = k !== -1 && Vr.test(y);
        if (((h += S ? y.slice(0, -1) : y), !S)) break;
        w = k + 1;
      }
      if ((r ? h.replace(/^\t+/, "") : h) === e) return { at: u, lineEnd: k };
      if (k === -1) return { at: -1, lineEnd: -1 };
      u = k + 1;
    }
    return { at: -1, lineEnd: -1 };
  }
  findLine(e, n, r) {
    if (this.lineIndex === null) {
      let w = new Map(),
        k = new Map(),
        y = 0;
      for (let S of this.text.split(`
`)) {
        let I = (C, R) => {
          let x = C.get(R);
          if (x === void 0) C.set(R, [y]);
          else x.push(y);
        };
        (I(w, S), I(k, S.replace(/^\t+/, "")), (y += S.length + 1));
      }
      ((this.lineIndex = w), (this.strippedLineIndex = k));
    }
    let s = (r ? this.strippedLineIndex : this.lineIndex).get(e);
    if (s === void 0) return -1;
    let u = 0,
      h = s.length;
    while (u < h) {
      let w = (u + h) >> 1;
      if (s[w] < n) u = w + 1;
      else h = w;
    }
    return u < s.length ? s[u] : -1;
  }
}
function Qn(e, n) {
  let r = Math.min(e.length, n + 4096),
    s = n,
    u = 0;
  while (s < r) {
    let h = e[s];
    if (h === "'" || h === '"') {
      let w = e.indexOf(h, s + 1);
      s = w === -1 ? r : w + 1;
      continue;
    }
    if (h === "(") u += 1;
    else if (h === ")") {
      if (u === 0) return e[s + 1] === ")" ? s + 2 : -1;
      u -= 1;
    }
    s += 1;
  }
  return -1;
}
var Zr = new Set([
    "DEVELOPER_DIR",
    "MAKEFILES",
    "MAKEFLAGS",
    "GNUMAKEFLAGS",
    "AWKPATH",
    "AWKLIBPATH",
    "GOFLAGS",
    "RUSTFLAGS",
    "GIT_EDITOR",
    "GIT_SEQUENCE_EDITOR",
    "GIT_EXTERNAL_DIFF",
    "GIT_PROXY_COMMAND",
    "SUDO_ASKPASS",
    "ZDOTDIR",
    "CDPATH",
    "GCONV_PATH",
    "NLSPATH",
    "DOTNET_STARTUP_HOOKS",
    "npm_config_node_options",
    "NPM_CONFIG_NODE_OPTIONS",
    "LESSOPEN",
    "LESSCLOSE",
    "MANPAGER",
    "MAVEN_OPTS",
    "GRADLE_OPTS",
    "OPENSSL_ENGINES",
    "SHELLOPTS",
    "BASHOPTS",
    "PS4",
    "PROMPT_COMMAND",
    "GIT_SSH_COMMAND",
    "GIT_SSH",
    "GIT_EXEC_PATH",
    "GIT_ASKPASS",
    "SSH_ASKPASS",
    "GIT_PAGER",
    "PAGER",
    "EDITOR",
    "VISUAL",
    "BROWSER",
    "PYTHONWARNINGS",
    "PYTHONBREAKPOINT",
    "PERL5DB",
    "NODE_REPL_EXTERNAL_MODULE",
    "JAVA_TOOL_OPTIONS",
    "_JAVA_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "NODE_OPTIONS",
    "NODE_COMPILE_CACHE",
    "PYTHONSTARTUP",
    "PYTHONHOME",
    "PYTHONUSERBASE",
    "BASH_ENV",
    "ENV",
    "PERL5OPT",
    "RUBYOPT",
    "GEM_HOME",
    "RUBYGEMS_GEMDEPS",
    "BUNDLE_GEMFILE",
    "OPENSSL_CONF",
    "OPENSSL_MODULES",
    "DYLD_INSERT_LIBRARIES",
    "LD_PRELOAD",
    "LD_AUDIT"
  ]),
  Yr = /^(?:DYLD_|LD_|BASH_FUNC_|GIT_CONFIG_|LUA_C?PATH)/,
  Qr =
    /^(?:GH_BROWSER|RSYNC_RSH|CVS_RSH|SOPS_GPG_EXEC|PERL5SHELL|RUBYSHELL|JAVACMD|CLOUDSDK_PYTHON|UV_PYTHON|RUSTC_WRAPPER|RUSTC_WORKSPACE_WRAPPER|npm_config_script_shell|NPM_CONFIG_SCRIPT_SHELL|R_(?:PROFILE|ENVIRON)(?:_USER)?|TAR_OPTIONS|BUN_OPTIONS|TF_CLI_ARGS\w*|CARGO_ALIAS_\w+|[A-Z0-9][A-Z0-9_]*_(?:EXTERNAL_DIFF|PAGER|EDITOR))$/,
  ti =
    /^(?![\/~$-])(?:[^\s]*\/[^\s]*|[^\s\/]+\.(?:sh|bash|zsh|fish|py|rb|pl|js|mjs|cjs|ts|php|lua|R|r|ps1|awk|tcl|exs?|jl))$/;
function ni(e) {
  return Zr.has(e) || Yr.test(e);
}
function po(e) {
  return (e.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) ?? []).map((n) => n.replace(/["']/g, ""));
}
function oi(e, n) {
  let r = e.replace(/\/+$/, "");
  if (!r.startsWith("/") || r === "") return [];
  let s = n !== "" && n !== "/" && (r === n || r.startsWith(`${n}/`)) ? r.slice(n.length) : null,
    u = s === "" ? "/" : s;
  return s === null
    ? [r]
    : [r, `~${u}`, `$HOME${u}`, `$HOME"${u}`, `\${HOME}${u}`, `\${HOME}"${u}`];
}
var ri =
    /(?:^|[\s"'=(`:;&|<>])\.\.?\/|\bprocess\.cwd\(\)|\bos\.getcwd\(\)|\bPath\.cwd\(\)|\bDir\.pwd\b|\bgit\b[^\n]{0,12}\brev-parse\b[^\n]{0,6}--show-toplevel\b/im,
  ii = /\$PWD\b|\$\{PWD\b|\$\(pwd(?:[ \t]+-[LP])?\)|`pwd`/im,
  si = /^(?:bash|sh|zsh|dash|ash|(?:pd|lo|o|m|r)?ksh[0-9]*|rbash|fish|csh|tcsh|yash|posh|[oy]sh)$/i,
  $e = new Set([
    "bash",
    "sh",
    "zsh",
    "dash",
    "ash",
    "ksh",
    "mksh",
    "rbash",
    "fish",
    "csh",
    "tcsh",
    "pwsh",
    "yash",
    "posh",
    "osh",
    "ysh",
    "pdksh",
    "loksh",
    "oksh"
  ]),
  Yt = new Set([
    "python",
    "pypy",
    "node",
    "nodejs",
    "ruby",
    "perl",
    "php",
    "lua",
    "tsx",
    "ts-node",
    "bb",
    "awk",
    "gawk",
    "osascript",
    "expect",
    "tclsh",
    "wish",
    "rscript",
    "irb",
    "erb",
    "nawk",
    "mawk",
    "sed",
    "gsed",
    "m4"
  ]),
  ai = {
    julia: /\.jl$/,
    elixir: /\.exs?$/,
    groovy: /\.groovy$/,
    racket: /\.rkt$/,
    guile: /\.scm$/,
    sbcl: /\.(?:lisp|cl)$/
  },
  li = new Set([
    "bmake",
    "pmake",
    "gnumake",
    "make",
    "gmake",
    "ninja",
    "nix-build",
    "nix-instantiate",
    "nix-env",
    "ctest",
    "meson",
    "cmake",
    "bazel",
    "bazelisk",
    "npm",
    "npx",
    "pnpm",
    "yarn",
    "bun",
    "bunx",
    "lint-staged",
    "npm-run-all",
    "run-p",
    "run-s",
    "turbo",
    "nx",
    "lerna",
    "lefthook",
    "gulp",
    "grunt",
    "eslint",
    "prettier",
    "jest",
    "vitest",
    "mocha",
    "ava",
    "playwright",
    "cypress",
    "webpack",
    "rollup",
    "vite",
    "babel",
    "postcss",
    "tailwindcss",
    "next",
    "tsc",
    "commitlint",
    "stylelint",
    "uv",
    "pip",
    "pip3",
    "poetry",
    "pipenv",
    "hatch",
    "pdm",
    "rye",
    "pytest",
    "tox",
    "nox",
    "pylint",
    "flake8",
    "mypy",
    "pre-commit",
    "cargo",
    "rake",
    "bundle",
    "rspec",
    "rubocop",
    "rails",
    "composer",
    "phpunit",
    "phpstan",
    "psalm",
    "gradle",
    "gradlew",
    "mvn",
    "mvnw",
    "scons",
    "ant",
    "hg",
    "sbt",
    "lein",
    "clj",
    "clojure",
    "stack",
    "cabal",
    "mix",
    "dotnet",
    "msbuild",
    "swift",
    "xcodebuild",
    "pod",
    "fastlane",
    "just",
    "task",
    "terraform",
    "tofu",
    "terragrunt",
    "snakemake",
    "vagrant",
    "docker-compose",
    "podman-compose",
    "devbox",
    "mise",
    "asdf"
  ]),
  ao = /^--(?:version|help)$/,
  ci = {
    go: new Set(["generate", "run", "test", "build", "install", "get", "vet", "tool"]),
    deno: new Set(["task", "test", "bench", "lint", "fmt", "check"]),
    docker: new Set(["compose", "build", "buildx"]),
    podman: new Set(["compose", "build"]),
    nix: new Set([
      "develop",
      "run",
      "build",
      "shell",
      "flake",
      "eval",
      "profile",
      "bundle",
      "print-dev-env",
      "fmt",
      "repl"
    ]),
    node: new Set(["--run", "--test"])
  },
  lo = {
    python: new Set(["-W", "-X", "--check-hash-based-pycs"]),
    pypy: new Set(["-W", "-X"]),
    node: new Set([
      "-e",
      "--eval",
      "-p",
      "--print",
      "-r",
      "--require",
      "--import",
      "--loader",
      "--experimental-loader",
      "-C",
      "--conditions",
      "--input-type",
      "--title"
    ]),
    ruby: new Set(["-e", "-r", "--require", "-I", "-C", "-E", "-F"]),
    perl: new Set(["-e", "-E", "-M", "-m", "-I"]),
    php: new Set([
      "-r",
      "-d",
      "--define",
      "-c",
      "--php-ini",
      "-B",
      "-R",
      "-F",
      "-E",
      "-z",
      "--zend-extension",
      "-f",
      "--file"
    ]),
    osascript: new Set(["-l", "-s"]),
    lua: new Set(["-e", "-l"]),
    tsx: new Set(["-e", "--eval", "-r", "--require", "--import", "--tsconfig"]),
    "ts-node": new Set([
      "-e",
      "--eval",
      "-r",
      "--require",
      "-P",
      "--project",
      "-O",
      "--compilerOptions"
    ])
  };
function nn(e, n) {
  switch (e) {
    case "node":
    case "nodejs":
    case "tsx":
    case "ts-node":
      return /^(?:-e|--eval|-p|--print)$/.test(n) || /^-[a-zA-Z]*[ep]$/.test(n);
    case "python":
    case "pypy":
      return /^-[bBdEhiIOPqRsSuvVx]*[cm]/.test(n);
    case "perl":
      return /^-[acfgnpsStTuUwWXl0-9]*[eE]$/.test(n);
    case "ruby":
      return /^-[acdhlnpsSUvwy]*e$/.test(n);
    case "php":
      return /^-[aeHilmnqsvw]*[rRBE]$/.test(n);
    case "lua":
    case "bb":
    case "osascript":
    case "rscript":
    case "erb":
      return n === "-e";
    default:
      return !1;
  }
}
var ui = /\bimport\b|__import__|\bexec\b/;
function Et(e) {
  let n = e.text;
  return n.slice(n.lastIndexOf("/") + 1).toLowerCase();
}
function fi(e) {
  return e.replace(/^(python|pypy|perl|ruby|php|lua|node|nodejs|ksh|tclsh|wish)[0-9.]+t?$/, "$1");
}
function hi(e) {
  return $e.has(e) || Yt.has(e) || IUr.test(e);
}
function mo(e) {
  return /^[\/~$]|^[<>]\(/.test(e.text) && !/^~[+-]/.test(e.text);
}
function Ce(e) {
  return e !== void 0 && e.text !== "" && !mo(e) && !e.text.startsWith("-");
}
function Tt(
  { program: e, args: n, assignments: r, redirects: s, heredoc: u, piped: h },
  w,
  k = { roots: [], home: "", fromPayload: !1, quotedBackslashKept: !0 }
) {
  let R = r.findIndex((N) => Et(N) === "flock"),
    x = R === -1 ? void 0 : bi(r, R),
    K = [
      ...r.filter((N, U) => U !== x?.at),
      ...(/^(?:export|declare|typeset|local|readonly)$/.test(e.text) ? n : [])
    ],
    G = fo(K, k.shell === "zsh");
  if (G !== void 0 && k.standing === void 0) return G;
  let F = r.find((N) => ct(N, k));
  if (F !== void 0) return "it names " + F.text;
  let P = Si(r, w, [e, ...n]);
  if (P !== void 0 && (k.standing === void 0 || ko.has(P))) return Ct(P, k);
  let A = e.text === ":" ? r.findIndex((N) => /^(?:sudo|doas)$/.test(Et(N))) : -1;
  if (
    A !== -1 &&
    r.some((N, U) => U > A && (Nye(N.text, "si") || N.text === "--shell" || N.text === "--login"))
  )
    return Ct(en.sudo, k);
  if (x !== void 0) {
    let N = _o(x.text, { redirects: s, heredoc: u, piped: h }, w, k);
    if (N !== void 0 && k.standing === void 0) return N;
  }
  if (e.text === "setenv" || (e.text === "set" && /^-[a-zA-Z]*x/.test(n[0]?.text ?? ""))) {
    let N = e.text === "setenv" ? 0 : 1,
      U = n[N],
      ee = fo(
        U === void 0
          ? []
          : [
              {
                ...U,
                text:
                  U.text +
                  "=" +
                  n
                    .slice(N + 1)
                    .map((Z) => Z.text)
                    .join(":")
              }
            ]
      );
    if (ee !== void 0) return ee;
  }
  if (e.text === "unset" && n.some((N) => N.text.startsWith("GIT_CONFIG")))
    return "it unsets a GIT_CONFIG variable";
  if (e.text === "unset" && n.some((N) => N.text === "PATH")) return "it unsets PATH";
  if (e.expands && !/^\$/.test(e.text))
    return "it runs a command whose name is built by an expansion";
  if (/^\$\(\u2026\)/.test(e.text))
    return "it runs a command held in a variable or produced by another command";
  if (/^\$/.test(e.text)) {
    if (ct(e, k)) return "it names " + e.text;
    let N = /^\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?\//.exec(e.text)?.[1];
    if (N !== void 0 && k.relativeNames?.has(N) === !0) return "it runs a file by a relative path";
    if (/^\$[({](?:CURDIR|PWD)[)}]/.test(e.text)) return "it uses its working directory";
    let U = e.text.replace(/^\$\{[^}]*\}|^\$\([^)]*\)|^\$[A-Za-z_][A-Za-z0-9_]*/, "");
    if (U !== e.text && /^[^\/~$].*\//.test(U)) return "it runs a file by a relative path";
    let ee =
      k.make === !0 && /^(?:\$[({][A-Za-z_]+[)}])*\$[({]MAKE[)}]$/.test(e.text)
        ? "make"
        : /:-([^}]+)\}$/.exec(e.text)?.[1];
    if (ee === void 0) {
      if (k.fromPayload)
        return "it runs a command held in a variable or produced by another command";
      let Z = n.find((J) => !J.text.startsWith("-"));
      if (Z !== void 0 && Ce(Z) && (Z.text.includes("/") || /\.[A-Za-z0-9]{1,5}$/.test(Z.text)))
        return "it runs a file by a relative path";
      if (!/^\/(?:.*\/)?[^\/$]+$/.test(U)) return;
      let V = Et(e);
      if (oo(V) && V !== "runuser")
        return Gt(e) && !/[ \t]/.test(e.text)
          ? void 0
          : Kt([{ text: V, quoted: !1, raw: V }, ...n], h, w, k, !0);
    } else e = { ...e, text: ee };
  }
  if (e.quoted && /[ \t]/.test(e.text) && !e.text.includes("/")) {
    w.push(e.text);
    return;
  }
  let M = fi(Et(e)),
    D = [e, ...n, ...s.map((N) => N.target)].find((N) => ct(N, k));
  if (D !== void 0) return "it names " + D.text;
  if (e.text.includes("/") && !mo(e) && !e.text.endsWith("/"))
    return "it runs a file by a relative path";
  if (k.standing === void 0 && /(?:^|[^$])\{[-+]?\d*[.\/#%+]{0,4}\}/.test(e.text))
    return "it runs a file by a relative path";
  if (M === "for" || M === "select")
    return n
      .slice(n.findIndex((U) => U.text === "in") + 1)
      .some((U) => Ce(U) && /[\/*?[]/.test(U.text))
      ? "it loops over files by a relative name"
      : void 0;
  if (M === "source" || e.text === ".") {
    let N = n[0]?.text === "--" ? n[1] : n[0];
    if (N !== void 0 && je(N)) {
      if (u !== void 0 && N.text !== "<(\u2026)") {
        w.push(u);
        return;
      }
      return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
    }
    return Ce(N) ? "it sources a file by a relative name" : void 0;
  }
  let H = Ri(M, n);
  if (H === "reads_input") return Ct(en[M], k);
  if (H !== void 0) {
    if (H !== "held") for (let N of H.lines ?? []) w.push(N);
    return H === "held" || H.held
      ? "it runs " + M + " with a command or file this machine cannot verify"
      : (H.words ?? []).map((N) => Kt(N, h, w, k)).find((N) => N !== void 0);
  }
  if (li.has(M) || co(M, n) !== void 0)
    return M !== "hg" && n.length > 0 && n.every((N) => ao.test(N.text))
      ? void 0
      : "it runs a project tool, such as make or npm";
  let z = M === "rscript" ? Qe(M, n) : void 0;
  if (
    mi.has(M) &&
    !(
      M === "rscript" &&
      (typeof z === "object" ? n.slice(0, n.indexOf(z)) : n).some((N) => N.text === "--vanilla")
    )
  )
    return "it runs " + M;
  if ($e.has(M) || Yt.has(M) || (e.text === ":" && x === void 0)) {
    let N = $e.has(M),
      U = e.text !== ":" && (N ? _i(M, n) : vi(M, n));
    if (!U) {
      for (let { op: Z, target: V } of s) {
        if ((Z === "<" || Z === "<>") && (Ce(V) || je(V)))
          return e.text === ":"
            ? "it reads a compound command's input from a file in the launch directory"
            : "it runs a script by a relative name";
        if (Z === "<<<" && $e.has(M)) {
          if (/^\$/.test(V.text.trim()))
            return "it runs a command held in a variable or produced by another command";
          w.push(V.text);
        }
      }
      if (u !== void 0 && $e.has(M)) w.push(u);
    }
    let ee = N && !U && u === void 0 && !s.some((Z) => /^<(?!>)/.test(Z.op) || Z.op === "<>");
    if (
      !U &&
      e.text !== ":" &&
      (h || ee || (!$e.has(M) && (u !== void 0 || s.some((Z) => Z.op === "<<<"))))
    )
      return M === "python" || M === "pypy"
        ? ho(n)
        : "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
  }
  if ($e.has(M)) return gi(M, n, w, k, { redirects: s, heredoc: u, piped: h });
  if (M === "python" || M === "pypy") {
    let N = ho(n);
    if (N !== void 0) return N;
  } else if (M === "perl") {
    if (
      n.some((N, U) => {
        let ee = /^-[acnpsTtwWX]*(?:I([\s\S]*)|[Mm]lib(?:=([\s\S]*)|(\s[\s\S]*))?)$/.exec(N.text);
        return (
          ee !== null &&
          (ee[1] !== void 0
            ? ft(At(n, ee[1], U), k)
            : ee[3] !== void 0
              ? ee[3].trim() !== ""
              : (ee[2] ?? "")
                  .split(",")
                  .some((Z) => Z !== "" && ft({ value: Z, tildeLiteral: !0 }, k)))
        );
      })
    )
      return "it runs perl with -I or the lib pragma";
  } else if (M === "ruby") {
    let N = Qe("ruby", n),
      U = typeof N === "object" && n.includes(N) ? n.slice(0, n.indexOf(N)) : n;
    if (
      U.some((ee, Z) => {
        let V = /^-[acdlnpsvwy]*I(.*)$/.exec(ee.text);
        if (V !== null)
          return At(U, V[1], Z)
            .value.split(":")
            .some(
              (ne, ae, ie) =>
                (ne !== "" || ie.length === 1) && ft({ value: ne, tildeLiteral: !1 }, k)
            );
        let J = /^(?:-[acdlnpsvwy]*r|--require=?)([\s\S]*)$/.exec(ee.text);
        if (J === null) return !1;
        let { value: re } = At(U, J[1], Z);
        return (
          /^\.\.?\//.test(re) ||
          /^bundler(?:\/+setup(?:\.rb)?)?$/i.test(re) ||
          ct({ text: re, quoted: !1, raw: re }, k)
        );
      })
    )
      return "it runs ruby with -I or -r";
  } else if (M === "node" || M === "nodejs" || M === "tsx" || M === "ts-node") {
    if (
      n.some(
        (ee, Z) =>
          /^(?:-r|--require|--import|--(?:experimental-)?loader)(?:=|$)/.test(ee.text) &&
          !/^(?:\/|node:)/.test(
            ee.text.includes("=") ? (ee.text.split("=")[1] ?? "") : (n[Z + 1]?.text ?? "")
          )
      )
    )
      return "it runs node with --require, --import or --loader";
    let N = n.findIndex((ee) => /^(?:-e|--eval|-p|--print|-pe|-ep)$/.test(ee.text)),
      U =
        N !== -1
          ? n[N + 1]?.text
          : n
              .find((ee) => /^--(?:eval|print)=/.test(ee.text))
              ?.text.replace(/^--(?:eval|print)=/, "");
    if (U !== void 0 && Ai(U))
      return "it runs node code that loads a module by a bare or relative name";
  } else if (M === "lua") {
    if (n.some((N) => /^-l/.test(N.text))) return "it runs lua with -l";
  } else if (M === "php") {
    let N = Pi(n, k);
    if (N !== void 0) return N;
  }
  if (Yt.has(M) || (hi(M) && !$e.has(M))) {
    let N = Qe(M, n);
    if (N === "unknown_option")
      return "it runs an interpreter with an option this version does not know";
    if (N !== void 0 && je(N) && M !== "python" && M !== "pypy")
      return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
    if (N !== void 0 && (N.text === "{}" || Ce(N))) return "it runs a script by a relative name";
    return;
  }
  if (
    /^(?:emacs|vim?|nvim|gvim|view|ex)$/.test(M) &&
    n.some((N, U) => {
      let ee = /^(?:--?script|--load|-l|-S|-u)(?:=([\s\S]*))?$/.exec(N.text),
        Z = ee === null ? void 0 : (ee[1] ?? n[U + 1]?.text ?? "-");
      return (
        Z !== void 0 &&
        !(N.text === "-u" && /^(?:NONE|NORC|DEFAULTS)$/.test(Z)) &&
        (Z.startsWith("-") ? N.text === "-S" : !/^[\/~$]/.test(Z))
      );
    })
  )
    return "it runs a script by a relative name";
  let te = ai[M];
  if (te !== void 0) {
    if (n.some((N) => N.text === "{}" || (!N.text.startsWith("-") && te.test(N.text) && Ce(N))))
      return "it runs a script by a relative name";
    if (
      n.every((N) => N.text.startsWith("-")) &&
      (h || u !== void 0 || s.some((N) => N.op.startsWith("<")))
    )
      return "it runs a shell or interpreter whose program arrives on a pipe, a heredoc or a file descriptor";
  }
  let Q =
    M === "dart"
      ? (n[0]?.text === "run" ? n.slice(1) : n).find((N) => !N.text.startsWith("-"))
      : void 0;
  if (Q !== void 0 && Q.text.endsWith(".dart") && Ce(Q))
    return "it runs a script by a relative name";
  if (M === "git") return Ti(n, r, w);
  if (M === "java") {
    let N = n.findIndex((Z) => Z.text === "-jar"),
      U = n.findIndex((Z) => /^(?:-cp|-classpath|--class-path)$/.test(Z.text)),
      ee =
        U === -1
          ? n.find((Z) => Z.text.startsWith("--class-path="))?.text.slice(13)
          : n[U + 1]?.text;
    if (N !== -1) return Ce(n[N + 1]) ? "it runs a file by a relative path" : void 0;
    return n.length > 0 && n.every((Z) => ao.test(Z.text))
      ? void 0
      : ee !== void 0 && ee.split(":").every((Z) => Ie(Z))
        ? void 0
        : "it runs java with the working directory on its class path";
  }
  if (M === "eval") {
    w.push((n[0]?.text === "--" ? n.slice(1) : n).map((N) => N.text).join(" "));
    return;
  }
  if (M === "nix-shell" || M === "nix") {
    let N = n.findIndex((U) => /^(?:--run|--command|-c)$/.test(U.text));
    if (N !== -1 && n[N + 1] !== void 0)
      w.push(
        n
          .slice(N + 1)
          .map((U) => U.text)
          .join(" ")
      );
    return co(M, n) !== void 0 || M === "nix-shell"
      ? "it runs a project tool, such as make or npm"
      : void 0;
  }
  if (M === "trap") {
    let N = n[0]?.text === "--" ? n.slice(1) : n;
    if (N.length >= 2 && !/^-[lp]$/.test(N[0].text) && N[0].text !== "-") w.push(N[0].text);
    return;
  }
  if (M === "alias") {
    for (let N of n) {
      let U = N.text.indexOf("=");
      if (U > 0) w.push(N.text.slice(U + 1));
    }
    return;
  }
  if (M === "enable" || M === "hash") {
    let N = n.findIndex((U) => U.text === (M === "enable" ? "-f" : "-p"));
    return N !== -1 && Ce(n[N + 1]) ? "it runs a file by a relative path" : void 0;
  }
  if (M === "exec" || M === ":") return;
  if (M === "find") {
    let N = [];
    for (let U = 0; U < n.length; U += 1) {
      if (!/^-(?:exec|execdir|ok|okdir)$/.test(n[U].text)) continue;
      let ee = U + 1;
      while (ee < n.length && n[ee].text !== ";" && n[ee].text !== "+") ee += 1;
      let Z = n.slice(U + 1, ee);
      if (Z.length === 0) continue;
      let V = Kt(Z, !1, w, k);
      (N.push(
        Z[0].text === "{}" || zt(Z).some((J) => J.program.text === "{}")
          ? "it runs a file by a relative path"
          : V
      ),
        (U = ee));
    }
    return N.find((U) => U !== void 0);
  }
  return;
}
function co(e, n) {
  let r = ci[e];
  if (r === void 0) return;
  return n.find((s) => r.has(s.text.startsWith("--") ? Ze(s.text, "=") : s.text))?.text;
}
var pi = 4,
  go = "it wraps a command in more than four layers of commands such as find -exec or parallel",
  Qt = "it runs env with -P naming a relative directory",
  en = {
    parallel: "it runs parallel with no command of its own",
    script: "it runs script with no command of its own",
    su: "it runs su with no command",
    runuser: "it runs runuser with no command",
    sudo: "it starts a shell through sudo or doas with no command"
  },
  ko = new Set([go, Qt, ...Object.values(en)]);
function Ct(e, n) {
  if (ko.has(e)) n.standing?.push(e);
  return e;
}
function Kt(e, n, r, s, u = !1) {
  let h = (s.nesting ?? 0) + 1;
  if (h > pi) return Ct(go, s);
  if (e.length === 0) return;
  let w = [
      ...(u ? [] : [{ program: e[0], args: e.slice(1), assignments: [] }]),
      ...zt(e).filter((y) => u || y.args.length !== e.length - 1)
    ],
    k = [];
  for (let y of w) {
    let S = Tt({ ...y, redirects: [], piped: n }, r, { ...s, nesting: h });
    if (S !== void 0 && s.standing === void 0) return S;
    k.push(S);
  }
  return k.find((y) => y !== void 0);
}
var mi = new Set(["bun", "deno", "tsx", "ts-node", "lua", "rscript", "r", "bb"]);
function Ie(e) {
  return /^[\/~$]/.test(e) && !/^~[+-]/.test(e) && e !== "";
}
function At(e, n, r) {
  return n !== ""
    ? { value: n, tildeLiteral: !0 }
    : { value: e[r + 1]?.text ?? "", tildeLiteral: e[r + 1]?.quoted ?? !1 };
}
function ft({ value: e, tildeLiteral: n }, r) {
  return (
    (n && e.startsWith("~")) ||
    !Ie(e) ||
    (r.make === !0 && /^\$[({](?:CURDIR|PWD)[)}]/.test(e)) ||
    ct({ text: e, quoted: !1, raw: e }, r)
  );
}
function je(e) {
  return (
    e !== void 0 &&
    /^(?:\/dev\/(?:stdin|fd\/\d+)|\/proc\/(?:self|\d+)\/fd\/\d+|-|[<>]\(\u2026\))$/.test(e.text)
  );
}
function ct(e, n) {
  if (n.roots.length === 0) return !1;
  let r = e.text;
  if (/^\$(?:HOME|\{HOME\})(?=\/|$)/.test(r)) r = n.home + r.replace(/^\$(?:HOME|\{HOME\})/, "");
  else if (/^~[A-Za-z0-9._-]*(?=\/|$)/.test(r)) r = n.home + r.replace(/^~[A-Za-z0-9._-]*/, "");
  if (!r.startsWith("/")) return !1;
  let s = Xr.normalize(r);
  return n.roots.some((u) => Dze(s, u));
}
function gi(e, n, r, s, u) {
  let w = u.piped || u.heredoc !== void 0 || u.redirects.some((S) => S.op.startsWith("<")),
    k = (S) => (w && !/^\$/.test(S.text.trim()) ? _o(S.text, u, r, s) : yi(S, r)),
    y = !1;
  for (let S = 0; S < n.length; S += 1) {
    let I = n[S],
      C = I.text;
    if (C === "--") {
      let x = n[S + 1];
      if (x === void 0) return;
      return y
        ? k(x)
        : !/^[\/~$]/.test(x.text) || /^~[+-]/.test(x.text)
          ? "it runs a script by a relative name"
          : void 0;
    }
    if (e === "fish") {
      let x = /^(?:-C|--init-command(?:=([\s\S]*))?)$/.exec(C);
      if (x !== null) {
        let K = x[1] !== void 0 ? { ...I, text: x[1] } : n[S + 1],
          G = K === void 0 ? void 0 : k(K);
        if (G !== void 0 && s.standing === void 0) return G;
        S += x[1] !== void 0 ? 0 : 1;
        continue;
      }
    }
    if (wo(e, C) && !C.startsWith("--command=")) {
      if (e === "pwsh" && /^-e/i.test(C)) return "it hands pwsh an encoded command";
      ((y = !0), (S += tn(e, C)));
      continue;
    }
    if (C.startsWith("--command=")) return k({ ...I, text: C.slice(10) });
    if (/^--(?:rcfile|init-file)=/.test(C)) {
      if (!Ie(C.slice(C.indexOf("=") + 1)))
        return "it runs " + e + " with an rc file by a relative name";
      continue;
    }
    let R = tn(e, C);
    if (R > 0) {
      let x = n[S + 1]?.text;
      if (((S += R), /^--(?:rcfile|init-file)$/.test(C) && x !== void 0 && !Ie(x)))
        return "it runs " + e + " with an rc file by a relative name";
      continue;
    }
    if (C.startsWith("-") || C.startsWith("+")) continue;
    if (y) {
      let x = k(I);
      return e === "pwsh" && S + 1 < n.length
        ? (x ??
            k({
              ...I,
              text: n
                .slice(S)
                .map((K) => K.text)
                .join(" ")
            }))
        : x;
    }
    return je(I)
      ? "it runs a shell whose program arrives on a pipe, a heredoc or a file descriptor"
      : Ce(I)
        ? "it runs a script by a relative name"
        : void 0;
  }
  return;
}
var ki = new Set(["bash", "sh", "dash", "ash", "ksh", "mksh", "zsh", "rbash"]);
function tn(e, n) {
  if (/^--(?:rcfile|init-file)$/.test(n)) return 1;
  if (ki.has(e)) {
    let r = /^[-+]([a-zA-Z]+)$/.exec(n);
    if (r === null) return 0;
    if (e === "zsh" || e === "ksh" || e === "mksh")
      return (e === "zsh" ? /o$/ : /[oO]$/).test(r[1]) ? 1 : 0;
    return (r[1].match(/[oO]/g) ?? []).length;
  }
  if (e === "fish")
    return /^(?:[+-]O|\+o|-C|--init-command|-p|--profile|-d|--debug|-D|--debug-stack-frames|-f|--features)$/.test(
      n
    )
      ? 1
      : 0;
  if (e === "pwsh")
    return /^-(?:o|of|outputformat|ex|ep|executionpolicy|wd|workingdirectory|config|configurationname|custompipename|if|inp|inputformat|settings|settingsfile|w|windowstyle|v|version)$/i.test(
      n
    )
      ? 1
      : 0;
  return n === "-o" || n === "+o" || n === "-O" || n === "+O" ? 1 : 0;
}
function wi(e, n) {
  let r = new Set();
  for (let s = 0; s < n.length; s += 1) {
    let u = n[s].text;
    if (u === "--") break;
    if (u.startsWith("-") || u.startsWith("+")) {
      let h = tn(e, u);
      for (let w = 1; w <= h; w += 1) r.add(s + w);
      s += h;
    }
  }
  return r;
}
function _i(e, n) {
  let r = wi(e, n),
    s = n.findIndex((w, k) => !r.has(k) && !/^[-+]./.test(w.text)),
    u = s === -1 ? n : n.slice(0, s);
  if (u.some((w) => wo(e, w.text)))
    return (
      (s !== -1 || u.some((w) => /^--command=./.test(w.text))) &&
      !(e === "pwsh" && n[s]?.text === "-")
    );
  let h = e !== "fish" && e !== "pwsh" && u.some((w) => Nye(w.text, "s"));
  return s !== -1 && !je(n[s]) && !h;
}
function wo(e, n) {
  return e === "pwsh"
    ? /^-(?:c|command|cwa|commandwithargs|e|ec|encodedcommand)$/i.test(n)
    : Nye(n, "c") || /^--command(?:=|$)/.test(n);
}
function vi(e, n) {
  let r = Qe(e, n);
  return (
    n.some((s) => nn(e, s.text)) ||
    (/^(?:[gnm]?awk|g?sed)$/.test(e) && n.some((s) => !s.text.startsWith("-"))) ||
    (typeof r === "object" && !je(r))
  );
}
function yi(e, n) {
  if (/^\$/.test(e.text.trim()))
    return "it hands a shell a command held in a variable or produced by another command";
  n.push(e.text);
  return;
}
function _o(e, n, r, s) {
  let { commands: u, unreadable: h } = Rt(e, {
    make: !1,
    quotedBackslashKept: s.quotedBackslashKept
  });
  if (h !== null) return `it could not be read to the end as shell (${h})`;
  return u
    .map((w) =>
      Tt(
        w.program.text === ":" && w.args.length === 0 && w.redirects.length === 0
          ? w
          : {
              ...w,
              redirects: [...w.redirects, ...n.redirects.filter((k) => k.op.startsWith("<"))],
              heredoc: w.heredoc ?? n.heredoc,
              piped: w.piped || n.piped
            },
        r,
        { ...s, fromPayload: !0 }
      )
    )
    .find((w) => w !== void 0);
}
function Si(e, n, r = []) {
  let s = Array(e.length + 1),
    u = Array(e.length + 1).fill(!1),
    h = Array(e.length + 3).fill(!1);
  for (let C = e.length - 1; C >= 0; C -= 1) {
    let R = e[C].text,
      x = /^(?:-[iv0]*[uCP]|--unset|--chdir)$/.test(R) ? 2 : 1;
    ((h[C] =
      R.startsWith("-") &&
      ((/^-[iv0]*P/.test(R) &&
        !(R.replace(/^-[iv0]*P/, "") || (e[C + 1]?.text ?? "")).split(":").every(Ie)) ||
        h[C + x])),
      (s[C] = /^(?:-S.|--split-string=)/.test(R)
        ? R.replace(/^(?:-S|--split-string=)/, "")
        : s[C + 1]));
    let K = /^-[0oprtx]+a([\s\S]*)$/.exec(R),
      G = /^(?:-a|--arg-file)$/.test(R)
        ? e[C + 1]?.text
        : R.startsWith("--arg-file=")
          ? R.slice(11)
          : R.startsWith("-a") && R.length > 2
            ? R.slice(2)
            : K !== null
              ? K[1] || e[C + 1]?.text
              : void 0;
    u[C] = (G !== void 0 && !Ie(G)) || u[C + 1];
  }
  let w = e.map((C) => C.text.slice(C.text.lastIndexOf("/") + 1).toLowerCase()),
    k = w.indexOf("xargs"),
    y =
      k === -1
        ? []
        : L(
            e.slice(k + 1).flatMap((C, R, x) => {
              let K = /^-[0oprtx]*([IJi])([\s\S]*)$/.exec(C.text);
              if (K === null)
                return /^--replace(?:=|$)/.test(C.text) ? [C.text.split("=")[1] ?? "{}"] : [];
              return K[1] === "i"
                ? [
                    "{}",
                    ...(K[2] === "" ? [] : [K[2]]),
                    ...(K[2].includes("=") ? [C.text.split("=")[1]] : [])
                  ]
                : [K[2] || x[R + 1]?.text].filter((G) => G !== void 0);
            })
          ),
    S = y.length > 64 || r.some((C) => y.some((R) => C.text.includes(R)));
  w.forEach((C, R) => {
    if (C === "env" && s[R + 1] !== void 0) n.push(s[R + 1]);
  });
  let I = w.map((C, R) => {
    if (C === "env") return !e[R].text.startsWith("-") && h[R + 1] ? Qt : void 0;
    if (C !== "xargs") return;
    return S
      ? "it runs what xargs splices into the command from its input"
      : u[R + 1]
        ? "it runs xargs with its arguments read from a file by a relative name"
        : void 0;
  });
  return I.find((C) => C === Qt) ?? I.find((C) => C !== void 0);
}
function bi(e, n) {
  let r = e.slice(n + 1),
    s = r.findIndex((w, k) => !w.text.startsWith("-") && !Vt.has(r[k - 1]?.text ?? "")),
    u = s === -1 ? "" : (r[s + 1]?.text ?? ""),
    h = /^(?:-c|--command)$/.test(u) ? r[s + 2] : void 0;
  if (h !== void 0) return { at: n + s + 3, text: h.text };
  return u.startsWith("--command=") ? { at: n + s + 2, text: u.slice(10) } : void 0;
}
var Jt = new Set([
    "-j",
    "-P",
    "-a",
    "-S",
    "-C",
    "-N",
    "-n",
    "-L",
    "-s",
    "-I",
    "-U",
    "-d",
    "-E",
    "-J",
    "-D",
    "--jobs",
    "--max-procs",
    "--arg-file",
    "--sshlogin",
    "--sshloginfile",
    "--slf",
    "--colsep",
    "--max-replace-args",
    "--max-args",
    "--max-lines",
    "--max-chars",
    "--delimiter",
    "--eof",
    "--halt",
    "--halt-on-error",
    "--joblog",
    "--results",
    "--res",
    "--delay",
    "--timeout",
    "--retries",
    "--tmpdir",
    "--workdir",
    "--wd",
    "--tagstring",
    "--env",
    "--rpl",
    "--load",
    "--memfree",
    "--memsuspend",
    "--nice",
    "--limit",
    "--termseq",
    "--basefile",
    "--bf",
    "--return",
    "--profile",
    "--transferfile",
    "--tf",
    "--block",
    "--blocksize",
    "--block-size",
    "--recstart",
    "--recend",
    "--compress-program",
    "--header",
    "--id",
    "--semaphorename",
    "--semaphoretimeout",
    "--st",
    "--shellquote-ignore"
  ]),
  uo = new Set([
    "-t",
    "-F",
    "-E",
    "--echo",
    "-O",
    "--log-out",
    "-I",
    "--log-in",
    "-B",
    "--log-io",
    "-T",
    "--log-timing",
    "-m",
    "--logging-format",
    "-o",
    "--output-limit"
  ]);
function xt(e, n, r = !1) {
  let s = 0;
  while (s < e.length && e[s].text.startsWith("-")) {
    let u = e[s].text;
    s += n.has(u) || (r && /^-[A-Za-z]{2,}$/.test(u) && n.has("-" + u.at(-1))) ? 2 : 1;
  }
  return e.slice(s);
}
function Ri(e, n) {
  let r = (u) => (u >= 0 && u < n.length ? { words: [n.slice(u)] } : void 0),
    s = (u) =>
      u.filter(
        (h, w) =>
          h.length > 0 &&
          u.findIndex((k) => k.length === h.length && k.every((y, S) => y === h[S])) === w
      );
  switch (e) {
    case "su":
    case "runuser": {
      let u = n.flatMap((k, y) => {
          let S = /^(?:-[flmpPT]*c|--(?:session-)?command(?==|$))=?([\s\S]*)$/.exec(k.text);
          return S === null ? [] : [S[1] !== "" ? S[1] : n[y + 1]?.text];
        }),
        h = n.some((k, y) => {
          let S = /^(?:-[flmpPT]*s|--shell)(?:=?([\s\S]+))?$/.exec(k.text),
            I = S === null ? void 0 : (S[1] ?? n[y + 1]?.text);
          return I !== void 0 && !/^[\/~$]/.test(I);
        });
      if (u.length === 0) {
        if (
          (e === "runuser" && n.some((y) => /^(?:-[flmpPT]*u|--user(?:=|$))/.test(y.text))) ||
          (n.length > 0 && n.every((y) => /^(?:--version|--help|-V|-h)$/.test(y.text)))
        )
          return;
        let k = n.filter(
          (y, S) =>
            !y.text.startsWith("-") &&
            !/^(?:-[flmpPT]*[sgGwu]|--shell|--group|--supp-group|--whitelist-environment|--user)$/.test(
              n[S - 1]?.text ?? ""
            )
        );
        return k.length <= 1
          ? "reads_input"
          : h
            ? "held"
            : { words: [[{ text: "sh", quoted: !1, raw: "sh" }, ...k.slice(1)]] };
      }
      let w = u.filter((k) => k !== void 0);
      return { lines: w, held: w.length < u.length || h };
    }
    case "watch": {
      let u = L(
        [
          /^(?:-n|--interval|-d|--differences|-q|--equexit)$/,
          /^(?:-[a-zA-Z]*[nq]|--interval|--equexit)$/
        ].map((h) => {
          let w = 0;
          while (w < n.length && n[w].text.startsWith("-")) w += h.test(n[w].text) ? 2 : 1;
          return w;
        })
      ).filter((h) => h < n.length);
      return u.length === 0
        ? void 0
        : {
            lines: u.map((h) =>
              n
                .slice(h)
                .map((w) => w.text)
                .join(" ")
            )
          };
    }
    case "script": {
      let u = n.findIndex((y) => /^(?:-[a-zA-Z]*c|--command)$/.test(y.text));
      if (u !== -1) {
        let y = n[u + 1]?.text;
        return y === void 0 ? "held" : { lines: [y] };
      }
      let h = n.filter((y) => !y.text.startsWith("-"));
      if (h.length < 2)
        return n.length > 0 && n.every((y) => /^(?:--version|--help|-V|-h)$/.test(y.text))
          ? void 0
          : "reads_input";
      let w = xt(n, uo),
        k = xt(n, uo, !0);
      if (w.length <= 1 || k.length <= 1) return "reads_input";
      return { words: s([h.slice(1), n.slice(n.indexOf(h[0]) + 1), w.slice(1), k.slice(1)]) };
    }
    case "dotenv":
      return "held";
    case "direnv": {
      if (n[0]?.text !== "exec") return;
      let u = n[1];
      return u === void 0 || !Ie(u.text) ? "held" : r(2);
    }
    case "op": {
      if (n[0]?.text !== "run") return;
      let u = n.findIndex((w) => /^--env-file(?:=|$)/.test(w.text));
      if (u !== -1) {
        let w = n[u].text.includes("=") ? n[u].text.slice(11) : (n[u + 1]?.text ?? "");
        if (!Ie(w)) return "held";
      }
      let h = n.findIndex((w) => w.text === "--");
      return h === -1 ? void 0 : r(h + 1);
    }
    case "hyperfine": {
      let u = [],
        h = /^(?:-p|--prepare|-s|--setup|-c|--cleanup|--conclude)$/,
        w =
          /^(?:-w|--warmup|-r|--runs|-m|--min-runs|-M|--max-runs|-n|--command-name|--export-\w+|--output|--shell|--sort|-u|--time-unit|-D|--parameter-step-size)$/,
        k = [];
      for (let y = 0; y < n.length; y += 1) {
        let S = n[y].text;
        if (h.test(S)) (u.push(n[y + 1]?.text ?? ""), (y += 1));
        else if (/^(?:-L|--parameter-list)$/.test(S))
          (k.push(...(n[y + 2]?.text ?? "").split(",")), (y += 2));
        else if (/^(?:-P|--parameter-scan)$/.test(S)) y += 3;
        else if (w.test(S)) y += 1;
        else if (!S.startsWith("-")) u.push(S);
      }
      return {
        lines: [
          u.join(`
`),
          ...(u.length > 1 ? u : []),
          ...k
        ]
      };
    }
    case "parallel": {
      let u = n.filter((x) => !x.text.startsWith("-") && x.text !== ":::");
      if (u.length === 0) return "reads_input";
      let h = n.findIndex((x) => !x.text.startsWith("-")),
        w = n.slice(h),
        k = w.findIndex((x) => /^::::?\+?$/.test(x.text)),
        y = w.filter((x) => !/^::::?\+?$/.test(x.text)),
        S = xt(n, Jt),
        I = xt(n, Jt, !0);
      if ([S, I].some((x) => x.length === 0 || /^::::\+?$/.test(x[0].text))) return "reads_input";
      let C = new Set(
          n.filter(
            (x, K) => Jt.has(n[K - 1]?.text ?? "") && /^\{[-+]?\d*[.#%+]{0,4}\}$/.test(x.text)
          )
        ),
        R = (x) => {
          let K = x.findIndex((G) => !C.has(G));
          return K === -1 ? [] : x.slice(K);
        };
      return {
        words: s([
          R(u),
          R(y),
          S.filter((x) => !/^::::?\+?$/.test(x.text)),
          I.filter((x) => !/^::::?\+?$/.test(x.text))
        ]),
        lines: k === 0 || [S, I].some((x) => /^:::\+?$/.test(x[0].text)) ? y.map((x) => x.text) : []
      };
    }
    default:
      return;
  }
}
function Qe(e, n) {
  if (e === "deno")
    return n[0]?.text === "run" ? n.slice(1).find((u) => !u.text.startsWith("-")) : void 0;
  if (e === "php") {
    let u = lo.php;
    for (let h = 0; h < n.length; h += 1) {
      let w = n[h].text,
        k = /^(?:-[fF]|--file)(?:=?([\s\S]+))?$/.exec(w);
      if (k !== null) return k[1] !== void 0 ? { ...n[h], text: k[1] } : n[h + 1];
      if (!w.startsWith("-") || w === "-" || w === "--") break;
      if (u.has(w)) h += 1;
    }
  }
  if (/^(?:[gnm]?awk|g?sed)$/.test(e)) {
    let u = e.endsWith("awk"),
      h = u ? /^-[a-zA-Z]*[fE]$/ : /^-[a-zA-Z]*f$/,
      w = u ? /^-[fE]./ : /^-f./;
    for (let k = 0; k < n.length; k += 1) {
      let y = n[k].text;
      if (h.test(y)) return n[k + 1];
      if (w.test(y)) return { ...n[k], text: y.slice(2) };
      if (y.startsWith("--file=")) return { ...n[k], text: y.slice(7) };
    }
    return;
  }
  let r = lo[e] ?? new Set(),
    s = !1;
  for (let u = 0; u < n.length; u += 1) {
    let h = n[u].text;
    if (h === "--") return n[u + 1];
    if (h === "-" || !h.startsWith("-")) return h === "-" ? n[u] : s ? "unknown_option" : n[u];
    if (nn(e, h)) return;
    if (r.has(h)) {
      u += 1;
      continue;
    }
    if ([...r].some((w) => w.length === 2 && h.length > 2 && h.startsWith(w))) continue;
    if (h.startsWith("--") && h.includes("=")) continue;
    if (!xi[e]?.test(h)) s = !0;
  }
  return;
}
var xi = {
    python: /^-[bBdEhiIOPqRsSuvVxE]+$|^--(?:version|help)$/,
    pypy: /^-[bBdEhiIOqRsSuvVx]+$/,
    node: /^--(?:enable-source-maps|no-warnings|no-deprecation|throw-deprecation|trace-warnings|trace-deprecation|pending-deprecation|experimental-strip-types|expose-gc|no-addons|preserve-symlinks|frozen-intrinsics|disallow-code-generation-from-strings|jitless|version|help)$|^-[civ]$/,
    ruby: /^-[acdhlnpsSTUvwWy0]+$|^--[a-z][a-z-]*$/,
    perl: /^-(?:[acfgnpsStTuUvwWX]|l[0-7]*|0[0-7]*|i\S*)+$/,
    osascript: /^-i$/,
    rscript: /^--[a-z][a-z-]*$/,
    php: /^-[aeHilmnqsvw]+$|^--[a-z-]+$/,
    lua: /^-[ivEW]$/,
    tsx: /^--[a-z][a-z0-9-]*$/,
    "ts-node": /^--[a-zA-Z][a-zA-Z0-9-]*$|^-[hvT]$/,
    bb: /^--?[a-z][a-z-]*$/
  },
  Ci = new Set([
    "assert",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "domain",
    "events",
    "fs",
    "http",
    "http2",
    "https",
    "inspector",
    "module",
    "net",
    "os",
    "path",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "repl",
    "stream",
    "string_decoder",
    "sys",
    "timers",
    "tls",
    "trace_events",
    "tty",
    "url",
    "util",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib",
    "test",
    "sqlite"
  ]);
function Ai(e) {
  for (let n of e.matchAll(
    /(?:\brequire\s*(?:\?\.)?\s*\(|\bimport\s*\(|\bimport\s+(?:[\w*{}\s,]+\s+from\s+)?|\bfrom\s+|\bcreateRequire\b[^'"]*)\s*['"]([^'"]+)['"]/g
  )) {
    let r = n[1];
    if (r.startsWith("/") || r.startsWith("node:")) continue;
    if (!Ci.has(Ze(r, "/"))) return !0;
  }
  return /\bcreateRequire\b/.test(e);
}
function fo(e, n = !1) {
  for (let r of e) {
    let s = /^([A-Za-z_][A-Za-z0-9_]*)(?:\[[^\]]*\])?\+?=([\s\S]*)$/.exec(r.text);
    if (s === null) continue;
    let u = s[1],
      h = s[2],
      w = (y) => y === "." || !/^[\/~$]/.test(y) || /^~[+-]|^\$\{?PWD\b|^\$\(/.test(y),
      k = (y) => /^\$/.test(y) && !new RegExp(`^\\$\\{?(?:${u}|HOME|PATH)\\b`).test(y);
    if (yQe.includes(u)) {
      if (h.split(":").some((y) => w(y) || k(y)))
        return `it sets ${u} with the working directory or a relative entry on it`;
    } else if (n && /^(?:path|fpath|manpath|cdpath)$/.test(u)) {
      let y = /^\(([\s\S]*)\)$/.exec(h)?.[1];
      if ((y === void 0 ? [h] : po(y)).some(w))
        return `it sets ${u} with the working directory or a relative entry on it`;
    } else if (u === "PHPRC" || u === "PHP_INI_SCAN_DIR") {
      let y = u === "PHPRC" ? [h] : h.split(":").filter((S) => S !== "");
      if (h !== "" && y.some(w))
        return `it sets ${u} to a php.ini location in the working directory`;
    } else if (ni(u) || /^GIT_CONFIG_(?:COUNT|KEY_\d+|VALUE_\d+|PARAMETERS|GLOBAL|SYSTEM)$/.test(u))
      return `it sets ${u}, which makes a shell, an interpreter or git load what it names`;
    else if (Qr.test(u)) {
      let y = h.split(/[\s=]+/).find((S) => ti.test(S));
      if (y !== void 0)
        return `it sets ${u}, which a tool runs or loads, to a file in the working directory (${y})`;
    }
  }
  return;
}
function Ti(e, n, r) {
  if (
    n.some(
      (s) =>
        /^(?:env|-i|--ignore-environment|-u|--unset)$/.test(
          s.text.slice(s.text.lastIndexOf("/") + 1)
        ) || s.text.startsWith("GIT_CONFIG")
    )
  )
    return "it runs git with the environment that switches its repository hooks off cleared or edited";
  for (let s = 0; s < e.length; s += 1) {
    let u = e[s].text,
      h;
    if (u === "-c" || u === "--config-env") ((s += 1), (h = e[s]?.text));
    else if (u.startsWith("--config-env=")) h = u.slice(13);
    else if (/^-c./.test(u)) h = u.slice(2);
    else if (/^--exec-path=(?![\/~])/.test(u))
      return "it runs git with an exec path in the launch directory (git-* commands come from there)";
    if (h === void 0) {
      if (/^(?:bisect|submodule|rebase)$/.test(u)) {
        let S = e.slice(s + 1),
          I = S.findIndex((C) => /^(?:run|foreach|-x|--exec)$/.test(C.text));
        if (I !== -1 && S[I + 1] !== void 0)
          r.push(
            S.slice(I + 1)
              .map((C) => C.text)
              .join(" ")
          );
        break;
      }
      continue;
    }
    let w = h.indexOf("="),
      k = w === -1 ? h : h.slice(0, w),
      y = w === -1 ? "" : h.slice(w + 1);
    if (/^core\.hookspath$/i.test(k)) {
      if (!/^(?:\/|~\/)/.test(y) || /^~[+-]/.test(y))
        return "it runs git with core.hooksPath set on the command line";
    } else if (/^include(?:if\.[^=]*)?\.path$/i.test(k) && !Ie(y))
      return "it runs git with an include path set on the command line";
    else if (
      y.startsWith("!") ||
      (y.includes("/") && !/^[\/~$]/.test(y)) ||
      /^(?:core\.(?:fsmonitor|sshcommand|askpass|editor|pager|gitproxy)|credential\.helper|diff\.external|gpg\.(?:\w+\.)?program|sequence\.editor|uploadpack\.packobjectshook)$/i.test(
        k
      )
    )
      return `it runs git with ${k} set on the command line to something that runs from the checkout`;
  }
  return;
}
var Ii =
  /^(?:auto_prepend_file|auto_append_file|include_path|extension_dir|(?:zend_)?extension|opcache\.(?:preload|file_cache)|ffi\.preload|phar\.cache_list|sendmail_path|sqlite3\.extension_dir)$/;
function Pi(e, n) {
  let r = Qe("php", e),
    s = typeof r === "object" ? e.indexOf(r) : -1,
    u = e.findIndex((y) => y.text === "--"),
    h =
      typeof r === "object" && s !== -1 && !/^(?:-[fF]|--file)$/.test(e[s - 1]?.text ?? "")
        ? e.slice(0, s)
        : e.filter((y, S) => S !== s && (u === -1 || S < u)),
    w = (y, S) => At(h, y.replace(/^=/, ""), S);
  return h.some((y, S) => {
    let I = /^(?:-[zc]|--zend-extension=?|--php-ini=?)(.*)$/.exec(y.text);
    if (I !== null) return ft(w(I[1], S), n);
    let C = /^(?:-d|--define=?)(.*)$/.exec(y.text);
    if (C === null) return !1;
    let { value: R } = w(C[1], S),
      x = R.indexOf("="),
      K = (x === -1 ? R : R.slice(0, x)).trim(),
      G = x === -1 ? "1" : R.slice(x + 1);
    if (!Ii.test(K)) return !1;
    let F = (P) => ft({ value: P, tildeLiteral: !0 }, n);
    if (K === "include_path") return G.split(":").some(F);
    if (/^(?:zend_)?extension$/.test(K) && !G.includes("/")) return !1;
    return G !== "" && F(G);
  })
    ? "it runs php with -z, -c or a -d setting that loads a file"
    : void 0;
}
function ho(e) {
  let r = Qe("python", e),
    s = e.findIndex((h) => h === r || nn("python", h.text));
  if (
    (s === -1 ? e : e.slice(0, e[s] === r ? s : s + 1)).some((h) =>
      /^-[bBdEhIOPqRsSuvVx]*i/.test(h.text)
    )
  )
    return "it runs python with -i";
  for (let h = 0; h < e.length; h += 1) {
    let w = e[h].text;
    if (w === "-" || je(e[h]))
      return "it runs python with -m, -c or a program on stdin, without -P or -I";
    if (!w.startsWith("-") || w === "--") return;
    if (w.startsWith("--")) {
      if (w === "--version" || w === "--help") return;
      if (w === "--check-hash-based-pycs") h += 1;
      continue;
    }
    for (let k = 1; k < w.length; k += 1) {
      let y = w[k];
      if (y === "I" || y === "P") return;
      if (y === "V" || y === "h") return;
      if (y === "W" || y === "X") {
        if (k === w.length - 1) h += 1;
        break;
      }
      if (y === "m") return "it runs python with -m, -c or a program on stdin, without -P or -I";
      if (y === "c") {
        let S = k < w.length - 1 ? w.slice(k + 1) : (e[h + 1]?.text ?? "");
        return ui.test(S)
          ? "it runs python with -m, -c or a program on stdin, without -P or -I"
          : void 0;
      }
    }
  }
  return "it runs python with -m, -c or a program on stdin, without -P or -I";
}
var Di =
    /^[ \t]*-?(?:s?include|load)[ \t]+(?!=)([^\n]*)$|^[ \t]*\.[ \t]*[ds-]?include[ \t]*("[^\n]*)$|^[ \t]*@(?:include|load)[ \t]*("[^\n]*)$/gm,
  Xt = /^(?:[gbp]|gnu)?(?:make|[gnm]?awk)$/i;
function Zt(e) {
  let n = e.trim().split(/[ \t]+/),
    r = 0;
  if (/(?:^|\/)env$/.test(n[0] ?? "")) {
    r = 1;
    while (r < n.length && (n[r].startsWith("-") || /^[A-Za-z_][A-Za-z0-9_]*=/.test(n[r])))
      r += /^-[A-Za-z]*[PuC]$|^--(?:unset|chdir)$/.test(n[r]) ? 2 : 1;
  }
  let s = n[r] ?? "";
  return s.slice(s.lastIndexOf("/") + 1);
}
var Oi = /\bCLAUDE_PROJECT_DIR\b/i,
  Hi = /^[ \t]*#.*$/gm,
  vo = "bot_protected_tengu_plumed_heron";
function yo(e, n, r, s, u = {}) {
  let w = (e.includes(0) ? Buffer.from(e.filter((A) => A !== 0)) : e).toString("utf8"),
    k = w.indexOf(`
`),
    y = w.startsWith("#!") ? w.slice(2, k === -1 ? void 0 : k) : "",
    S = Zt(y),
    I =
      s !== void 0 && s !== null
        ? /^(?:bash|sh|zsh|dash|ash|ksh|mksh|rbash|fish)$/i.test(s)
        : S === "" || si.test(S) || Xt.test(S),
    C = w.startsWith("#!") ? (k === -1 ? "" : w.slice(k + 1)) : w,
    R = u.quotedBackslashKept !== !1,
    x =
      y +
      `
` +
      (I ? Ni(C, R) : w.replace(Hi, "")),
    K = Fc(x),
    G = L(n)
      .flatMap((A) => oi(A, r))
      .find((A) =>
        new RegExp(`(?<![\\w./~$-])${di(Fc(A))}${A.endsWith("/") ? "" : "(?![\\w.-])"}`).test(K)
      );
  if (G !== void 0) return `it names ${G.replace('"', "")}`;
  if (Oi.test(K)) return "it reads $CLAUDE_PROJECT_DIR";
  if (ri.test(K) || (I && ii.test(K))) return "it uses its working directory";
  let F = (s ?? S).toLowerCase();
  if (
    /^t?csh$/.test(F) &&
    Array.from(C.matchAll(/^[ \t]*set[ \t]+path[ \t]*=[ \t]*\(([^)\n]*)\)/gm)).some((A) =>
      po(A[1]).some((M) => M === "." || !/^[\/~$]/.test(M))
    )
  )
    return "it sets path with the working directory or a relative entry on it";
  let P;
  try {
    let A = { roots: L(n), home: r, fromPayload: !1, shell: F, quotedBackslashKept: R };
    P = (I ? on(C, Xt.test(Zt(y)), A) : void 0) ?? Li(y, A);
  } catch {
    P = "it could not be read as shell";
  }
  if (P !== void 0) return P;
  if (Xt.test(Zt(y)) && Mi(x))
    return "it includes another build file, plugin or awk source by a relative name";
  return;
}
function Ni(e, n) {
  let r = [],
    s = 0;
  for (let [u, h] of io(e, { quotedBackslashKept: n })) (r.push(e.slice(s, u)), (s = h));
  return (r.push(e.slice(s)), r.join(""));
}
function Mi(e) {
  for (let n of e.matchAll(Di)) {
    let r = (n[1] ?? n[2] ?? n[3] ?? "")
      .trim()
      .replace(/^"|"$/g, "")
      .split(/[ \t]+/)
      .filter(Boolean);
    if (r.length === 0 || r.some((s) => !/^(?:\/|~\/|\$\(HOME\)|\$\{HOME\}|"\/|'\/|<)/.test(s)))
      return !0;
  }
  return !1;
}
function Li(e, n) {
  let r = [],
    s = [];
  for (let u of Rt(e, { quotedBackslashKept: n.quotedBackslashKept }).commands)
    Tt(u, r, {
      roots: [],
      home: "",
      fromPayload: !1,
      standing: s,
      quotedBackslashKept: n.quotedBackslashKept
    });
  return s[0] ?? r.map((u) => on(u, !1, { ...n, fromPayload: !0 }, 1)).find((u) => u !== void 0);
}
function on(e, n, r, s = 0) {
  let { commands: u, unreadable: h } = Rt(e, {
      make: n,
      quotedBackslashKept: r.quotedBackslashKept
    }),
    w = [],
    k = new Set(r.relativeNames);
  for (let { program: y, args: S, assignments: I } of u) {
    let C = /^(?:export|declare|typeset|local|readonly)$/.test(y.text) ? [...I, ...S] : I;
    for (let R of C) {
      let x = /^([A-Za-z_][A-Za-z0-9_]*)=([^\/~$][\s\S]*)$/.exec(R.text);
      if (x !== null) k.add(x[1]);
    }
  }
  for (let y of u) {
    let S = Tt(y, w, { ...r, make: n, relativeNames: k });
    if (S !== void 0) return S;
  }
  if (h !== null) return `it could not be read to the end as shell (${h})`;
  for (let y of w) {
    let S =
      s >= 3
        ? "it hands shell code to a shell too many layers deep"
        : on(y, !1, { ...r, fromPayload: !0 }, s + 1);
    if (S !== void 0) return S;
  }
  return;
}
var rn = 128,
  So = jt,
  sn = 8,
  Fi = 512,
  Wi = 600,
  Ui = {
    user: "your user settings",
    local: "this folder's settings.local.json",
    flag: "the --settings file"
  };
function an(e, n, r) {
  let s = n.type === "command" ? `${n.shell ?? r}\x00${n.command}\x00${_(n.args ?? null)}` : n.url;
  return `${e.event}\x00${e.matcher ?? ""}\x00${n.type}\x00${s}\x00${n.if ?? ""}`;
}
function To(e) {
  return e !== void 0 && e > 0 ? Math.min(e, Wi) : void 0;
}
async function It(e, n) {
  try {
    let r = await e.realpath(n);
    return WP(r) ? r : n;
  } catch {
    return n;
  }
}
var ji = { reason: "source_in_sync_root", cause: "the cloud session can change that file" },
  Pt = { reason: "source_in_sync_root", cause: "this machine could not check where that file is" },
  qi = {
    reason: "sync_root_is_config_dir",
    cause: "a directory the cloud session can write on this machine is a Claude config directory"
  };
async function Bi(e, n) {
  let r = n.opts.sync?.rootReal,
    s = e.source === "local" ? void 0 : n.opts.reachMemory;
  if (
    e.settingsFile === null ||
    (!s?.everInReach.has(e.source) && r === void 0 && n.roots.extraReach.length === 0)
  )
    return null;
  let u = e.settingsFile,
    h = e.source === "local" ? n.opts.localSettingsLocation : void 0,
    w = h?.current ?? null;
  if (w === null) {
    let F = await pHe(await mHe(u, n.opts.launchDir), n.opts.launchDir, Hde());
    if (F.verdict !== "local") return Pt;
    try {
      w = [F.spelling, await n.deps.realpath(F.spelling)];
    } catch {
      return Pt;
    }
    if (h !== void 0) ((h.current ??= w), (w = h.current));
  }
  let k = [u, ...w, ...(s?.knownSpellings.get(e.source) ?? [])].map(Fc),
    y = O() === "windows",
    S = y ? /[\\/]/ : "/",
    I = [
      ...(r !== void 0 ? [r] : []),
      ...(n.opts.sync?.root !== void 0 ? [n.opts.sync.root] : []),
      ...n.roots.extraReach
    ].map((F) => (y ? Fc(F).replace(/[\\/]+$/, "") || "/" : Fc(F.replace(/\/+$/, "") || "/")));
  if (I.some((F) => k.some((P) => !JK(P, F) && RHe(P, F)))) return Pt;
  let C = I.filter((F) => k.some((P) => JK(P, F))),
    R = k.flatMap((F) =>
      C.flatMap((P) => (JK(F, P) ? [F === P ? "" : F.slice(P === "/" ? 1 : P.length + 1)] : []))
    );
  if (R.length === 0) return s?.everInReach.has(e.source) ? Pt : null;
  let x = L([n.roots.configHomeReal, n.opts.configHome].map(Fc));
  if (
    C.some(
      (F) => x.some((P) => F === P || RHe(F, P) || RHe(P, F)) || F.split(S).includes(".claude")
    )
  )
    return qi;
  let G = R.every((F) => F.split(S).some((P) => P.startsWith(".")));
  return e.source === "local" && G ? null : ji;
}
function bo(e) {
  return Object.entries(e.hooks).flatMap(([n, r]) =>
    (r ?? []).flatMap((s) =>
      s.hooks.map((u) => ({ source: e, event: n, matcher: s.matcher, hook: u }))
    )
  );
}
function Ro(e, n) {
  let r = e.trim().split(/ +/);
  return n === null ? r.length === 1 : (n === "python3" || n === "python") && r.length === 2;
}
function Vi(e) {
  return Ud.includes(e);
}
var Gi = new Set(["/usr/bin/env", "/bin/env"]);
function zi(e) {
  let n = e.subarray(0, 512).toString("utf8");
  if (!n.startsWith("#!")) return null;
  let r = n.indexOf(`
`),
    s = n
      .slice(2, r === -1 ? void 0 : r)
      .replace(/^[ \t]+|[ \t]+$/g, "")
      .split(/[ \t]+/),
    u = s[0];
  if (u === void 0 || u === "") return null;
  if (s.some((y) => /[^\x21-\x7e]/.test(y))) return "unjudgeable";
  if (!u.startsWith("/") || dn.test(u)) return "unjudgeable";
  let h = eOs;
  if (!Gi.has(Fc(ht.normalize(u)))) return s.slice(1).every(h) ? ht.normalize(u) : "unjudgeable";
  let w = s[1] === "-S" ? s.slice(2) : s.slice(1),
    k = w[0];
  if (k === void 0 || k.startsWith("-") || k.includes("=") || !w.slice(1).every(h))
    return "unjudgeable";
  if (k.startsWith("/")) return dn.test(k) ? "unjudgeable" : ht.normalize(k);
  return /^[\w.+-]+$/.test(k) ? null : "unjudgeable";
}
var dn = /(?:^|\/)\.\.(?:\/|$)/,
  Ki =
    /^\/dev\/(?:null|zero|full|u?random|tty\d*|pts(?:\/.*)?|ptmx|std(?:in|out|err)|fd(?:\/.*)?|dtracehelper|autofs_nowait)$/;
function Io(e) {
  return e === "local";
}
async function Eo(e, n, r = !1, s = !1) {
  if (!pQ(e.event))
    return {
      kind: "held",
      reason: `event_${(Vi(e.event) ? pjs(e.event) : null) ?? "container_internal"}`
    };
  let { hook: u } = e;
  if (u.type !== "command" && u.type !== "http")
    return { kind: "held", reason: "kind_unsupported" };
  let h = Io(e.source.source),
    w = u.cloud === "device" && !h,
    k =
      u.cloud === "device" && h
        ? ' Its "cloud": "device" mark is ignored in settings.local.json.'
        : "",
    y = `"${Ae(u)}" in ${Ui[e.source.source]} does not run for cloud work`,
    S = gjs(e.event, e.matcher);
  if (r)
    return S
      ? { kind: "held", reason: "after_edit" }
      : { kind: "forward", event: e.event, hook: u };
  let { hooksFolderInReach: I } = n,
    C = I || h ? "" : " Check the script, then move it to ~/.claude/hooks.";
  if (S && u.cloud === "skip") return { kind: "held", reason: "after_edit" };
  if (u.cloud === "skip")
    return {
      kind: "held",
      reason: "author_skip",
      notice: `${y}: its entry is marked "cloud": "skip" or a value this version does not know.`
    };
  let R,
    x,
    K,
    G = !1,
    F = !1,
    P = !1,
    A = !1,
    M = !1,
    D,
    H,
    z =
      S && w
        ? `${y}: cloud edits change files in the cloud.${n.opts.inRepository ? " Put the hook in the repository's .claude/settings.json." : ""}`
        : void 0;
  if (u.type === "command") {
    let j = await Rn(u, n.reach, n.deps, { resolved: n.resolved });
    if (
      ((F = j.kind === "opaque" && j.reason === "private_dotdir"),
      (P = j.kind === "opaque" && j.reason === "shell_prefix"),
      (A =
        j.kind === "opaque" &&
        (j.reason === "unsupported_platform" || j.reason === "unsupported_shell")),
      j.kind === "unverifiable")
    )
      ((G = !0),
        (x = {
          kind: "held",
          reason: "unverifiable_target",
          notice: `${y}: ${j.missing ? "its script is missing" : "this machine could not verify its script"}.`,
          ...(j.missing && { cause: "script_missing" })
        }));
    else if (j.kind === "script_in_reach" || j.kind === "script_outside_reach") {
      G = !0;
      let te = j.kind === "script_in_reach";
      if (((R = j.pinnedTarget), te && !w))
        K = {
          kind: "held",
          reason: "in_reach",
          notice: `${y}: the cloud session can change the hook's script.${C}${k}`,
          ...(I && { noRemedy: !0 })
        };
      let Q = Je(n.reach),
        N = [
          ...(j.site.form === "exec" && j.site.slot === "arg0" && u.command.startsWith("/")
            ? [dn.test(u.command) ? "unjudgeable" : ht.normalize(u.command)]
            : []),
          ...(j.interpreter === null ? [zi(j.bytes)].filter((V) => V !== null) : [])
        ],
        U;
      for (let V of N) {
        if (V === "unjudgeable") {
          U = "this machine cannot check the interpreter the hook names";
          break;
        }
        let J = await pHe(await mHe(V, n.opts.launchDir), n.opts.launchDir, Hde()),
          re = J.verdict === "local" ? await n.deps.realpath(J.spelling).catch(() => null) : null;
        if (re === null) {
          U = `its interpreter ${ei(V, { maxCodeUnits: 200 })} could not be located on this machine`;
          break;
        }
        if ([V, re].some((ne) => Q.some((ae) => Dze(ne, ae)))) {
          U = `the cloud session can change its interpreter ${ei(V, { maxCodeUnits: 200 })}`;
          break;
        }
      }
      if (U === void 0 && j.interpreter === null) {
        let V = t4s(j.bytes);
        if (V !== null && (V === "unjudgeable" || (V.kind !== "absolute" && V.kind !== "env")))
          U = "its interpreter may load code the cloud session can change";
      }
      if (U !== void 0 && !te)
        if (w) M = !0;
        else
          K = {
            kind: "held",
            reason: "interpreter_unvouched",
            notice: `${y}: ${U}.${h ? "" : " Use bash, python3 or node from your PATH."}${k}`
          };
      if (((M = M || (te && w)), !te)) {
        let V = yo(
          j.bytes,
          [
            n.reach.launchDir,
            n.reach.launchDirReal,
            ...(n.reach.sync !== void 0
              ? [
                  n.reach.sync.rootReal,
                  ...(n.reach.sync.root !== void 0 ? [n.reach.sync.root] : [])
                ]
              : []),
            ...n.reach.extraReach
          ].filter((J) => !Ki.test(J)),
          n.deps.home,
          j.interpreter,
          { quotedBackslashKept: gr(vo, { safe: !0 }) }
        );
        if (V !== void 0 && !w && K === void 0)
          K = {
            kind: "held",
            reason: "loads_from_reach",
            notice: `${y}: its script may load files the cloud session can change. ${V.replace(/^it /, "The script ")}.${k}`
          };
        else if (V !== void 0 && w) M = !0;
      }
      if (w && n.opts.optInPins !== void 0) {
        let V = `${j.pinnedTarget.realPath}\x00${j.pinnedTarget.sha256}`,
          J = n.opts.optInPins.get(j.pinnedTarget.path);
        if (J === void 0 || (!te && J !== V)) n.opts.optInPins.set(j.pinnedTarget.path, V);
        else if (J !== V)
          ((x = {
            kind: "held",
            reason: "unverifiable_target",
            notice: `${y}: its script changed and the cloud session can write to it. Check the file, then restart claude --cloud.`
          }),
            (R = void 0),
            (M = !1));
      }
      let ee = s ? void 0 : (n.deps.findTemplateByDigest ?? qds)(j.pinnedTarget.sha256),
        Z = w && !S ? void 0 : ee;
      if (
        w &&
        ee !== void 0 &&
        u.args === void 0 &&
        !u.if &&
        !u.async &&
        !u.asyncRewake &&
        !u.once &&
        Ro(u.command, j.interpreter)
      )
        D = ee.template.id;
      if (Z) {
        let { template: V, label: J } = Z,
          re = (n.opts.refusedTemplateIds ?? []).includes(V.id),
          ne = !re && (n.opts.enabledTemplateIds ?? Vds()).includes(V.id);
        if (re)
          z = S
            ? `${V.filename} is an after-edit hook, so it is not forwarded either: it does not run for this cloud session, only in local ones.`
            : void 0;
        else if (!ne)
          z = S
            ? `${V.filename} is not run in the cloud in this version, and as an after-edit hook it is not forwarded either, so it only runs in local sessions.`
            : `${V.filename} is not run in the cloud in this version; it runs on this machine instead.`;
        else if (V.event !== e.event)
          z = `${V.filename} is configured on ${e.event}; the cloud runs it only on ${V.event}, so it runs on this machine instead.`;
        else if (J === "legacy" && !n.opts.allowLegacyTemplateDigests)
          z = `${V.filename} is an older copy of ${V.id}; the cloud will not run it. Update it.`;
        else if (
          u.args !== void 0 ||
          u.if ||
          u.async ||
          u.asyncRewake ||
          u.once ||
          !Ro(u.command, j.interpreter)
        )
          z = `${V.filename} is run in a way the cloud cannot reproduce (arguments, a condition, async or once), so it runs on this machine instead.`;
        else if (
          e.matcher !== void 0 &&
          !PQe(e.matcher) &&
          (!Co(e.matcher) || !pGe.test(e.matcher))
        )
          z = void 0;
        else if (!A0r(e.matcher, V.matcher))
          z = `${V.filename} is configured with the matcher "${ei(e.matcher ?? "", { maxCodeUnits: 200 })}" and the cloud runs it on "${V.matcher}", so it runs on this machine instead.`;
        else {
          let ae = To(u.timeout);
          H = {
            entry: {
              wire: {
                template: V.id,
                digest: j.pinnedTarget.sha256,
                event: e.event,
                ...(!PQe(e.matcher) && { matcher: e.matcher }),
                ...(ae !== void 0 && { timeout_s: ae })
              },
              local: {
                templateId: V.id,
                label: J,
                scriptRealPath: j.pinnedTarget.realPath,
                bytes: j.bytes,
                userMatcher: e.matcher,
                source: e.source.source
              }
            },
            ...(J === "legacy" && {
              legacyNotice: `${V.filename} is an older copy of ${V.id}; the cloud will run that copy. Update it to get fixes.`
            }),
            ...(e.matcher !== void 0 &&
              !PQe(e.matcher) &&
              !A0r(V.matcher, e.matcher) && {
                narrowNotice: `${V.filename} is configured with the matcher "${ei(e.matcher, { maxCodeUnits: 200 })}"; in the cloud it runs on "${V.matcher}" only.`
              })
          };
        }
        if (H === void 0 && S && ne)
          z = `${(z ?? `${V.filename} cannot move to the cloud here.`).replace(/(?:, so|; it) (?:it )?runs on this machine instead\.$/, ".").replace(/\.$/, "")}, and as an after-edit hook it is not forwarded either: it runs in local sessions only.`;
      }
    }
  }
  if (H !== void 0) {
    let j = [H.legacyNotice, H.narrowNotice].filter((te) => te !== void 0).join(" ");
    return {
      kind: "template",
      entry: H.entry,
      event: e.event,
      hook: u,
      ...(j !== "" && { notice: j })
    };
  }
  if (S) return { kind: "held", reason: "after_edit", ...(z !== void 0 && { notice: z }) };
  if (x !== void 0) return x;
  if (e.matcher !== void 0 && !Co(e.matcher)) return { kind: "held", reason: "over_cap" };
  if (e.matcher !== void 0 && !PQe(e.matcher) && !pGe.test(e.matcher))
    return {
      kind: "held",
      reason: "pattern_matcher",
      notice: `"${Ae(u)}" does not run for cloud work: cloud sessions cannot take the pattern matcher "${ei(e.matcher, { maxCodeUnits: 200 })}".${h ? "" : ` List the names to match${lGn.has(e.event) ? `, such as ${Be}|${qe}` : ""}.`}`
    };
  if (K !== void 0) return K;
  if (u.type === "command" && !G) {
    if (!w)
      return {
        kind: "held",
        reason: "unpinned_command",
        notice: P
          ? `${y}: it would run through your CLAUDE_CODE_SHELL_PREFIX, which this machine cannot verify.${e.source.source === "user" ? ' Marked "cloud": "device", it runs on this machine, unverified, when the cloud session asks.' : ""}${k}`
          : F
            ? `${y}: its script is in a dot-folder this machine does not read hooks from.${C}${k}`
            : `${y}: this machine cannot verify what the command runs.${I || A || h ? "" : " Put the command in one script in ~/.claude/hooks."}${k}`,
        ...(P ? { cause: "shell_prefix" } : F && { cause: "dot_folder" }),
        ...((I || A) && { noRemedy: !0 })
      };
    M = !0;
  }
  return {
    kind: "forward",
    event: e.event,
    hook: u,
    ...(R !== void 0 && { pinnedTarget: R }),
    ...(M && { authorOptIn: !0 }),
    ...(w && { cloudDevice: !0 }),
    ...(D !== void 0 && { templateTwinId: D }),
    ...(z !== void 0 && { notice: z })
  };
}
function Co(e) {
  return e.length <= Fi && !/[\p{Cc}\p{Cf}]/u.test(e);
}
function Ao(e) {
  return `${e} is configured more than once; the cloud runs it once.`;
}
function Ji() {
  return {
    forwarded: [],
    templates: [],
    held: [],
    heldCounts: { after_edit: 0, kind_unsupported: 0, plugin: 0, managed: 0, other: 0 },
    notices: []
  };
}
async function Xur(e, n, r) {
  let s = Ji();
  if (e.kind === "none") return s;
  let u = {
      launchDirReal: await It(r, n.launchDir),
      projectDirReal: await It(r, n.projectDir),
      configHomeReal: await It(r, n.configHome),
      extraReach: L(
        (
          await Promise.all(
            [...(n.repoRoot !== void 0 ? [n.repoRoot] : []), ...(n.extraReachRoots ?? [])].map(
              async (A) => {
                let M = await pHe(await mHe(A, n.launchDir), n.launchDir, Hde());
                return M.verdict === "local"
                  ? [A, await It(r, M.spelling)]
                  : M.verdict === "foreign"
                    ? [M.spelling]
                    : [A, ...gHe(M, n.launchDir)];
              }
            )
          )
        ).flat()
      )
    },
    h = {
      launchDir: n.launchDir,
      launchDirReal: u.launchDirReal,
      configHomeReal: u.configHomeReal,
      projectDir: n.projectDir,
      projectDirReal: u.projectDirReal,
      ...(n.sync !== void 0 && { sync: n.sync }),
      extraReach: u.extraReach
    },
    w = {
      opts: n,
      deps: r,
      roots: u,
      reach: h,
      resolved: new Map(),
      hooksFolderInReach: mt([ht.join(r.home, ".claude", "hooks")], h)
    },
    k = (A, M, { cause: D, noRemedy: H } = {}) => {
      if (
        (s.held.push({
          event: A.event,
          ...(A.matcher !== void 0 && { matcher: ei(A.matcher, { maxCodeUnits: 200 }) }),
          source: A.source.source,
          command: Ae(A.hook),
          reason: M,
          ...(D !== void 0 && { cause: D }),
          ...((H || Io(A.source.source) || (M === "after_edit" && !n.inRepository)) && {
            noRemedy: !0
          })
        }),
        M === "after_edit")
      )
        s.heldCounts.after_edit += 1;
      else if (M === "kind_unsupported") s.heldCounts.kind_unsupported += 1;
      else s.heldCounts.other += 1;
    },
    y = new Set(),
    S = (A) => {
      if (A !== void 0 && !y.has(A)) (y.add(A), s.notices.push(A));
    },
    I = (A) => {
      if (y.delete(A)) s.notices = s.notices.filter((M) => M !== A);
    },
    C = new Map(),
    R = new Map(),
    x = new Map(),
    K = new Set(),
    G = new Set(),
    F = new Map();
  if (
    [n.launchDir, n.configHome, n.sync?.rootReal, n.sync?.root, ...(n.extraReachRoots ?? [])].some(
      (A) => A !== void 0 && !WP(A)
    )
  ) {
    S(
      "Hooks stay on this machine: its launch, config or sync directory is not an absolute path this version can place, so none are offered to the cloud session."
    );
    for (let A of e.sources) for (let M of bo(A)) k(M, "unverifiable_target");
    return s;
  }
  for (let A of e.sources) {
    let M = await Bi(A, w),
      D = bo(A);
    if (M !== null && D.length > 0)
      S(
        `Hooks from ${ei(A.settingsFile ?? "", { maxCodeUnits: 200 })} are not offered to the cloud session: ${M.cause}.`
      );
    for (let H of D) {
      let z = await Eo(H, w, M !== null);
      if (M !== null) {
        k(
          H,
          z.kind === "held" &&
            (z.reason.startsWith("event_") ||
              z.reason === "kind_unsupported" ||
              z.reason === "after_edit")
            ? z.reason
            : M.reason,
          { noRemedy: !0 }
        );
        continue;
      }
      if (z.kind === "held") {
        (S(z.notice), k(H, z.reason, z));
        continue;
      }
      let j = z;
      if (j.kind === "template") {
        let { entry: ne } = j,
          ae = an(H, j.hook, r.defaultShell),
          ie = F.get(ne.local.templateId),
          de = R.get(ae),
          oe = ie !== void 0 && (ie.site.matcher ?? "") === (H.matcher ?? ""),
          q = ie !== void 0 ? oe : s.templates.length < sn;
        if (de !== void 0 && q) {
          if ((k(de.site, "duplicate"), K.add(de.index), de.notice !== void 0)) I(de.notice);
          R.delete(ae);
        }
        if (ie !== void 0 && !oe) {
          if (((j = await Eo(H, w, !1, !0)), j.kind === "held")) {
            (k(H, j.reason, j), S(j.notice));
            continue;
          }
        } else if (ie !== void 0) {
          k(ie.site, "duplicate");
          let Y = an(ie.site, ie.hook, r.defaultShell);
          if (Y !== ae) x.delete(Y);
          if (
            (x.set(ae, { index: ie.index, templateId: ne.local.templateId }),
            (s.templates[ie.index] = ne),
            ie.notice !== void 0)
          )
            I(ie.notice);
          (F.set(ne.local.templateId, {
            index: ie.index,
            site: H,
            hook: j.hook,
            ...(j.notice !== void 0 && { notice: j.notice })
          }),
            S(Ao(ne.local.templateId)),
            S(j.notice));
          continue;
        } else if (s.templates.length >= sn) {
          (k(H, "over_cap"),
            S(`Only ${sn} templates can run in the cloud session; the rest stay on this machine.`));
          continue;
        } else {
          (F.set(ne.local.templateId, {
            index: s.templates.length,
            site: H,
            hook: j.hook,
            ...(j.notice !== void 0 && { notice: j.notice })
          }),
            x.set(ae, { index: s.templates.length, templateId: ne.local.templateId }),
            s.templates.push(ne),
            S(j.notice));
          continue;
        }
      }
      if (j.kind !== "forward") continue;
      let te = j,
        Q = To(te.hook.timeout),
        N = {
          wire: {
            id: "",
            event: H.event,
            ...(!PQe(H.matcher) && { matcher: H.matcher }),
            kind: te.hook.type,
            ...(Q !== void 0 && { timeout_s: Q }),
            source: A.source,
            ...(te.hook.if && { has_condition: !0 }),
            ...(te.pinnedTarget !== void 0 && { target_pinned: !0 }),
            ...((te.authorOptIn || (te.cloudDevice && te.hook.type === "command")) && {
              author_opt_in: !0
            })
          },
          local: {
            hook: te.hook,
            matcher: H.matcher,
            event: te.event,
            source: A.source,
            ...(te.pinnedTarget !== void 0 && { pinnedTarget: te.pinnedTarget }),
            ...(te.cloudDevice && { cloudOptIn: !0 }),
            ...(te.templateTwinId !== void 0 && { templateTwinId: te.templateTwinId })
          }
        },
        U = an(H, te.hook, r.defaultShell),
        ee = x.get(U),
        Z = (C.get(H.event) ?? 0) < So,
        V = R.has(U) || (s.forwarded.length < rn && Z);
      if (ee !== void 0 && V) {
        let ne = F.get(ee.templateId);
        if (ne !== void 0 && ne.index === ee.index) {
          if ((k(ne.site, "duplicate"), ne.notice !== void 0)) I(ne.notice);
          (I(Ao(ee.templateId)), F.delete(ee.templateId));
        }
        (G.add(ee.index), x.delete(U));
      }
      let J = R.get(U);
      if (J !== void 0) {
        k(J.site, "duplicate");
        let ne = s.forwarded[J.index].wire.id;
        if (((s.forwarded[J.index] = { ...N, wire: { ...N.wire, id: ne } }), J.notice !== void 0))
          I(J.notice);
        (R.set(U, { index: J.index, site: H, ...(te.notice !== void 0 && { notice: te.notice }) }),
          S(te.notice));
        continue;
      }
      if (s.forwarded.length >= rn) {
        (k(H, "over_cap"),
          S(
            `Only the first ${rn} hooks are offered to the cloud session; the rest stay on this machine.`
          ));
        continue;
      }
      if (!Z) {
        (k(H, "over_cap"),
          S(
            `Only the first ${So} ${H.event} hooks are offered to the cloud session; the rest stay on this machine.`
          ));
        continue;
      }
      let re = C.get(H.event) ?? 0;
      (C.set(H.event, re + 1),
        R.set(U, {
          index: s.forwarded.length,
          site: H,
          ...(te.notice !== void 0 && { notice: te.notice })
        }),
        S(te.notice),
        s.forwarded.push({ ...N, wire: { ...N.wire, id: Xds(n.instanceId, H.event, re) } }));
    }
  }
  ((s.forwarded = s.forwarded.filter((A, M) => !K.has(M))),
    (s.templates = s.templates.filter((A, M) => !G.has(M))));
  let P = new Map(
    s.templates.map((A) => [`${A.wire.template}\x00${A.wire.event}`, A.wire.template])
  );
  return (
    (s.forwarded = s.forwarded.filter((A) => {
      let M = A.local.templateTwinId,
        D = M === void 0 ? void 0 : P.get(`${M}\x00${A.wire.event}`);
      if (M === void 0 || D === void 0 || !A0r(Oat(M)?.matcher ?? "", A.local.matcher ?? "*"))
        return !0;
      return (
        s.held.push({
          event: A.wire.event,
          ...(A.local.matcher !== void 0 && {
            matcher: ei(A.local.matcher, { maxCodeUnits: 200 })
          }),
          source: A.local.source,
          command: Ae(A.local.hook),
          reason: "duplicate"
        }),
        (s.heldCounts.other += 1),
        S(
          `"${Ae(A.local.hook)}" is the same script the cloud already runs as ${D}; it is not also run on this machine.`
        ),
        !1
      );
    })),
    s
  );
}
function Po(e) {
  let n = Lpe(e);
  return n === void 0 ? void 0 : { attestation: n, heldBack: Kwe(n) };
}
function Zi(e) {
  let n = e.forwarded + e.templateNames.length;
  return `${n === 1 ? "One of your hooks" : `${n} of your hooks`} could run for cloud sessions started from this machine \u2014 run /hooks to decide (nothing from this machine runs for them until you do).`;
}
function Jur(e) {
  return e.CLAUDE_CODE_SHELL_PREFIX?.trim() || void 0;
}
var Do = 30000;
function Yi(e, n, r = async (s) => ({ real: await Ve(s), aliased: await MRr(s) })) {
  let s = {
    path: e,
    real: null,
    env: n === void 0 ? void 0 : { ...n },
    locate: () => {
      ((s.retryAt = void 0),
        r(e).then(
          ({ real: u, aliased: h }) => {
            if (((s.real = h ? "unresolvable" : u), h)) s.retryAt = Date.now() + Do;
          },
          (u) => {
            if (((s.real = "unresolvable"), u?.code !== "ENOENT" && u?.code !== "ENOTDIR"))
              s.retryAt = Date.now() + Do;
          }
        ));
    }
  };
  return (s.locate(), s);
}
function Qi(e, n = Date.now()) {
  if (e.retryAt !== void 0 && n >= e.retryAt) e.locate?.();
}
function h6t(e) {
  return (
    (e.legacyConfigFile ??= Yi(w_(), tOs(e, toe()))),
    Qi(e.legacyConfigFile),
    e.legacyConfigFile
  );
}
function Qur(e, n, r = (s) => pe(s)?.env) {
  let s = (h) =>
      e.pinnedScopes.has(h) ||
      (h === "userSettings" && e.everInReach.has("user")) ||
      (h === "flagSettings" && e.everInReach.has("flag")),
    u =
      n.env !== void 0 &&
      typeof n.real === "string" &&
      n.real !== "unresolvable" &&
      Xi(n.path) &&
      !ky([n.path, n.real], [...e.stickyRoots]);
  return Object.assign(
    {},
    u ? n.env : {},
    ...Is.filter((h) => !Tf.has(h) && !s(h)).map((h) => ahn(r(h), h))
  );
}
function Zur(e) {
  return no() ?? e;
}
function efr(e, n) {
  let r = setTimeout(e, n);
  return (r.unref(), { clear: () => clearTimeout(r) });
}
function xRn() {
  if (!(O() !== "windows" && Gm() && c2r() && !i.CLAUDE_CODE_DISABLE_HOOK_FORWARDING)) return !1;
  if (D6e()) {
    if (!$xn()) return !0;
    return (a("tengu_device_hooks_shelved", { side: c("client") }), !1);
  }
  return (a("tengu_device_hooks_kept_back", { flag: c(GPe), own_flags_loaded: $i() }), !1);
}
function es(e) {
  let n = null,
    r = !1,
    s = new Set();
  return {
    state: () => n,
    setState(u) {
      n = r ? null : u;
    },
    async handleForwardedHook(u) {
      if (r) return;
      try {
        let h = await e.servicer.serve(u, n);
        if (r) return;
        if (h.kind === "silent") {
          if (h.reason === "not_mine" || h.reason === "no_state" || h.reason === "withdrawn")
            e.release(u.requestId);
          return;
        }
        e.respond(u.requestId, h.answer);
      } catch (h) {
        if ((e.logError(h), pwe(u.callbackId)?.event === "PreToolUse" && !r))
          try {
            e.respond(u.requestId, {
              hookSpecificOutput: {
                hookEventName: "PreToolUse",
                permissionDecision: "deny",
                permissionDecisionReason:
                  "A hook on your machine could not be run for this call (internal error); retry"
              }
            });
          } catch {}
      }
    },
    handleCancelled(u, h) {
      if (r || !e.servicer.cancel(u, h) || h !== "worker") return;
      for (let w of s) w();
    },
    onStoppedWhileRunning(u) {
      return (s.add(u), () => s.delete(u));
    },
    async dispose() {
      ((r = !0), (n = null), s.clear(), e.servicer.cancelAll(), await e.staging.dispose());
    }
  };
}
function Oo({
  launchDir: e,
  memory: n,
  getTools: r,
  respond: s,
  release: u,
  onLine: h,
  trustAccepted: w = yH,
  isMuted: k
}) {
  let y = () => null,
    S = TOs(AOs(), () => [...(y()?.cloudWritableRoots ?? [e]), ...pln(e)]),
    I = bt(() => S.dispose()),
    C = Zur(e),
    R = C;
  Ve(C).then(
    (A) => {
      R = A;
    },
    () => {}
  );
  let x = { ...Mo() };
  gWn(n, h6t(n).env);
  let K = n.senderFor(e),
    G = () => {
      let A = Mo();
      return Cpt({
        attached: x,
        beforeSettings: tm(),
        ownEnv: Qur(K, h6t(n)),
        childrenSee: (M) => Object.hasOwn(A, M)
      });
    },
    F = zn({
      memory: n.servicerFor(e),
      now: Date.now,
      setTimer: efr,
      trustAccepted: w,
      ...(k && { isMuted: k }),
      judgeSender: Po,
      pin: Opt(),
      staging: S,
      run: (A, M, D) => yg(M.launchDir, () => Tn(A, M, An, D)),
      evaluateCondition: (A, M) => uRo(A, M, r(), M.cwd),
      parseTarget: (A) => {
        let M = G();
        return Mze(A, {
          home: age(M),
          hookCwd: R,
          projectDir: C,
          defaultShell: JG(),
          shellPrefix: Jur(M)
        });
      },
      emptyTranscriptPath: () => S.placeholder("cloud-transcript.jsonl"),
      defaultTimeoutMs: Kn,
      onLine: (A, M) => h({ line: A, level: M }),
      telemetry: (A) => {
        let M = ns(A.outcome);
        if (M === "ok") g("device_hooks_serve");
        else if (M === "sad") f("device_hooks_serve", A.outcome);
        else if (M === "bad") m("device_hooks_serve", A.outcome);
        a("tengu_device_hook_served", {
          event: ce(A.event),
          kind: ce(A.kind),
          outcome: c(A.outcome),
          exit_class: ce(A.exitClass),
          duration_ms: A.durationMs,
          translated_paths: A.translatedPaths,
          replay: A.replay,
          blocked: A.blocked,
          staged: A.staged,
          project_frame: A.projectFrame,
          repinned: A.repinned,
          waited_ms: A.waitedMs,
          ...(A.attestation !== void 0 && {
            attestation_mode: c(A.attestation.mode),
            request_attestation: c(A.attestation.status),
            attestation_verdict: c(A.attestation.verdict)
          })
        });
      },
      debug: (A) => t(A),
      logError: l,
      extraWritableRoots: () => pln(e),
      hostEnv: G,
      childEnvironment: (A, M) => ORr(A, M, Mo()),
      placePath: Jte,
      resolveProgram: xpt,
      defaultShell: () => JG()
    }),
    P = es({
      servicer: F,
      staging: { dispose: () => (I(), S.dispose()) },
      respond: s,
      release: u,
      logError: (A) => {
        (l(A), m("device_hooks_serve", "serve_threw"));
      }
    });
  return ((y = P.state), t("[deviceHooks] device hook session created for this attach"), P);
}
var ts = {
  stageVerifiedBytes: "always",
  unmarkedStartFolder: "private",
  repinChangedScripts: !1,
  wireLabel: "basename",
  denyUnjudgeablePaths: !1,
  runWithUntranslatedPaths: !1,
  timeoutFailsClosed: !1
};
function $o({
  launchDir: e,
  memory: n,
  cloudSessionId: r,
  session: s,
  sendControlRequest: u,
  syncRoot: h,
  servingMuted: w,
  onLine: k,
  storageV5: y
}) {
  let S = Opt().openNoFollow,
    I = Ve(e).catch(() => e),
    C = Zur(e),
    R = V_(e),
    x = R ?? e,
    K = n.senderFor(e),
    G = { ...Mo() };
  gWn(n, h6t(n).env);
  let F = () => {
    let P = Mo();
    return Cpt({
      attached: G,
      beforeSettings: tm(),
      ownEnv: Qur(K, h6t(n)),
      childrenSee: (A) => Object.hasOwn(P, A)
    });
  };
  return wjs({
    memory: K,
    now: Date.now,
    setTimer: efr,
    hookFlags: Pn(),
    capture: () => M4n(D4n()),
    buildInventory: ({
      captured: P,
      instanceId: A,
      syncRoot: M,
      reachRoots: D,
      withoutTemplates: H
    }) => {
      let z = F();
      return Xur(
        P,
        {
          instanceId: A,
          launchDir: e,
          projectDir: C,
          configHome: Le(),
          ...(M !== null && { sync: { rootReal: M.real, root: M.root } }),
          inRepository: R !== null,
          ...(x !== e && { repoRoot: x }),
          extraReachRoots: D,
          allowLegacyTemplateDigests: !0,
          refusedTemplateIds: [...H],
          optInPins: K.optInPins,
          reachMemory: K,
          localSettingsLocation: K.localSettingsLocation
        },
        { realpath: Ve, open: S, home: age(z), defaultShell: JG(), shellPrefix: Jur(z) }
      );
    },
    mintInstanceId: () => Yds(),
    displayName: XRt(),
    cloudSessionId: r,
    launchDir: e,
    launchDirReal: () => I,
    realpath: Ve,
    projectRoot: x,
    syncRoot: async () => {
      let P = h();
      return P === null ? null : { root: P, real: await Ve(P).catch(() => P) };
    },
    servingMuted: w,
    commonWriteRoots: () => kDe(e),
    scopeWriteRoots: (P, A) => The(e, P, A),
    scopeWriteEntries: (P) => khe(P, e),
    scopeSettingsFile: (P) => ln(P) ?? null,
    sendRequest: async (P, { timeoutMs: A, onEchoed: M }) => {
      try {
        return await u(P, { timeoutMs: A, background: !0, ...(M && { onEchoed: M }) });
      } catch (D) {
        let H = I1(D);
        if (H === "timeout" || H === "aborted")
          throw Error("timeout: no answer from the cloud worker in time");
        if (H === "disconnected" || H === "not_connected")
          throw Error("disconnected: the session stream is not connected");
        throw D;
      }
    },
    ensureConsent: Sjs({
      deps: IDe(y),
      pin: n.consentPin,
      onNotAsked: (P) => {
        (a("tengu_device_hooks_consent_notice", {}), k({ line: Zi(P), level: "info" }));
      },
      isStoreInReach: (P) => uUt(PDe(), P, Ve),
      onUntrustedStore: (P) => {
        let A = Jn(PDe());
        k({
          line:
            P === "writable"
              ? `The saved answer about this machine's hooks is ignored here: this cloud session can itself write ${A}. Decide for it in /hooks.`
              : `The saved answer about this machine's hooks is ignored here: ${A} could not be located to check who can write it. Decide for this session in /hooks.`,
          level: "warning"
        });
      }
    }),
    arm: (P) => s.setState(P),
    onLine: k,
    telemetry: (P) => {
      if (P.trigger === "renewal" && P.outcome === "registered") return;
      let A = {
        held_after_edit: P.heldAfterEdit,
        held_kind_unsupported: P.heldByReason.kind_unsupported ?? 0,
        held_event_runs_locally: P.heldByReason.event_runs_locally ?? 0,
        held_event_later: P.heldByReason.event_later ?? 0,
        held_event_low_value: P.heldByReason.event_low_value ?? 0,
        held_event_container_internal: P.heldByReason.event_container_internal ?? 0,
        held_source_in_sync_root: P.heldByReason.source_in_sync_root ?? 0,
        held_sync_root_is_config_dir: P.heldByReason.sync_root_is_config_dir ?? 0,
        held_unverifiable_target: P.heldByReason.unverifiable_target ?? 0,
        held_in_reach: P.heldByReason.in_reach ?? 0,
        held_interpreter_unvouched: P.heldByReason.interpreter_unvouched ?? 0,
        held_loads_from_reach: P.heldByReason.loads_from_reach ?? 0,
        held_unpinned_command: P.heldByReason.unpinned_command ?? 0,
        held_author_skip: P.heldByReason.author_skip ?? 0,
        held_duplicate: P.heldByReason.duplicate ?? 0,
        held_over_cap: P.heldByReason.over_cap ?? 0,
        held_pattern_matcher: P.heldByReason.pattern_matcher ?? 0
      };
      switch (
        (a("tengu_device_hooks_client_register", {
          outcome: c(P.outcome),
          trigger: c(P.trigger),
          forwarded: P.forwarded,
          templates: P.templates,
          ...A,
          held_other: P.heldOther,
          accepted: P.accepted,
          ignored: P.ignored,
          attempt: P.attempt,
          after_flags_unanswered: P.afterFlagsUnanswered
        }),
        P.outcome)
      ) {
        case "registered":
        case "unregistered":
        case "nothing_to_offer":
        case "dormant":
        case "no_consent":
        case "muted":
        case "flag_off":
          g("device_hooks_client_register", { forwarded: P.forwarded });
          break;
        case "not_ready":
        case "stale_epoch":
        case "superseded":
        case "failed":
        case "consent_distrusted":
        case "flag_unanswered":
          f("device_hooks_client_register", P.outcome);
          break;
        default:
          m("device_hooks_client_register", P.outcome);
      }
    },
    lapseTelemetry: (P) => a("tengu_device_hooks_lapse_line", { kind: c(P) }),
    reachPinnedTelemetry: (P) => a("tengu_device_hooks_reach_pinned", { source: c(P) }),
    sourcePinnedTelemetry: (P) =>
      a("tengu_device_hooks_source_pinned", {
        source: c(P.source),
        changed: P.changed,
        appeared: P.appeared,
        vanished: P.vanished
      }),
    servicerDefaults: ts
  });
}
function ns(e) {
  switch (e) {
    case "answered":
    case "event_mismatch":
    case "condition_false":
    case "cancelled":
    case "muted":
      return "ok";
    case "not_mine":
    case "cached":
    case "withdrawn_replay":
    case "same_invocation":
      return null;
    case "unknown_id":
    case "replay_mismatch":
    case "event_name_mismatch":
    case "input_too_large":
    case "overloaded":
    case "stale":
    case "invalid_input":
    case "unsupported_kind":
    case "no_roots":
    case "untrusted":
    case "in_reach_refused":
    case "pin_refused":
    case "pin_changed":
    case "pin_unreadable":
    case "untranslated_skipped":
    case "condition_error":
    case "no_slot":
    case "too_late":
    case "run_error":
    case "unattested":
      return "sad";
    case "staging_failed":
    case "decide_error":
      return "bad";
    default:
      return e;
  }
}
var os = new Set([
  "userSettings",
  "localSettings",
  "flagSettings",
  "projectSettings",
  "policySettings"
]);
function MRn(e) {
  let n = e.createSession ?? Oo,
    r = e.createSender ?? $o,
    s = e.isServingMuted ?? She,
    u = s(),
    h = n({
      launchDir: e.launchDir,
      memory: e.memory,
      getTools: e.getTools,
      respond: (F, P) => e.manager()?.respondToForwardedHook(F, P) ?? !1,
      release: (F) => e.manager()?.releaseForwardedHook(F),
      onLine: e.onLine,
      ...(e.trustAccepted && { trustAccepted: e.trustAccepted }),
      isMuted: () => u
    }),
    w = r({
      launchDir: e.launchDir,
      memory: e.memory,
      cloudSessionId: e.cloudSessionId,
      session: h,
      sendControlRequest: (F, P) => {
        let A = e.manager();
        if (A === null)
          return Promise.reject(Error("[RemoteSessionManager] Cannot send: not connected"));
        return A.sendControlRequest(F, P);
      },
      syncRoot: e.syncRoot,
      servingMuted: u,
      onLine: e.onLine,
      storageV5: e.storageV5
    }),
    k = (e.onServingMuteRecheck ?? jne)(() => {
      try {
        let F = s();
        if (F === u) return;
        if (F) ((u = !0), w.servingMute(!0));
        else (w.servingMute(!1), (u = !1));
      } catch (F) {
        l(F);
      }
    }),
    y = e.registerCleanup(() => w.unregister(fUt)),
    S = e.subscribeSettingsChanges((F) => {
      if (os.has(F)) w.settingsChanged();
    }),
    I = h.onStoppedWhileRunning(() => w.requestRegistration("stopped_while_running")),
    R = (e.subscribeConsent ?? ((F) => bjs(e.memory.consentAnnounced, F)))((F) =>
      w.consentDecided(F)
    ),
    x = (F) => () => {
      try {
        w.requestRegistration(F);
      } catch (P) {
        l(P);
      }
    },
    K = e.memory.noteAttached(e.launchDir),
    G = !1;
  return {
    callbacks: {
      onForwardedHookCallback: (F) => {
        h.handleForwardedHook(F);
        let P = pwe(F.callbackId)?.instanceId,
          { registeredInstanceId: A, instanceId: M } = w.snapshot();
        if (P !== void 0 && (P === A || P === M)) w.activity();
      },
      onForwardedHookCancelled: (F, P) => {
        h.handleCancelled(F, P);
      }
    },
    onStreamConnected: x("connected"),
    onWorkerInit: x("init"),
    onWorkerUp: x("worker_up"),
    onTurnInFlight: () => w.turnInFlight(),
    onTurnEnded: () => w.turnEnded(),
    beforeSend: () => w.ensureRegistered(),
    snapshot: () => w.snapshot(),
    dispose: () => {
      if (G) return;
      ((G = !0), K(), k(), S(), I(), R(), y());
      let F = w.unregister(fUt);
      w.dispose();
      let P = e.registerCleanup(() => F);
      (F.then(P, P), h.dispose());
    }
  };
}
import { randomUUID as vs } from "crypto";
var rs = p(() =>
    yt({
      status: B(["announced", "withdrawn"]),
      passthrough_declined: B(["policy", "pending", "unavailable"])
        .optional()
        .catch(void 0),
      worker_epoch: v()
        .int()
        .positive()
        .max(Number.MAX_SAFE_INTEGER)
        .optional()
        .catch(void 0),
      protocol_version: v()
        .nullable()
        .optional()
        .catch(void 0),
      ignored_tools: T(o())
        .optional()
        .catch(void 0),
      passthrough_adopted: v()
        .int()
        .nonnegative()
        .optional()
        .catch(void 0),
      worker_capabilities: T(o())
        .optional()
        .catch(void 0)
    })
  ),
  is = 15000,
  rPe = "unverified_sender",
  Ot = ["aborted", "no_answer", "post_failed", "post_lost", "replaced", "unreadable_ack"];
function ss(e) {
  if (e instanceof sTe) return { kind: "failed", reason: "post_failed" };
  if (e instanceof DL) return { kind: "failed", reason: "no_answer" };
  if (e instanceof Ye) return { kind: "failed", reason: "aborted" };
  let n = d(e);
  if (n.startsWith("Unsupported control request subtype")) return { kind: "unsupported" };
  if (n.startsWith("remote_tools_disabled:") || n.startsWith("invalid_announce:"))
    return { kind: "refused", reason: n };
  if (n.startsWith("remote_tools_not_ready:")) return { kind: "retry", reason: n };
  if (n.startsWith("stale_worker_epoch")) return { kind: "retry", reason: "stale_worker_epoch" };
  return { kind: "failed", reason: n };
}
async function Ho(e, n, r = {}) {
  D7t();
  let s = new AbortController(),
    u,
    h = (S) => {
      ((u ??= S), s.abort());
    },
    w = "none",
    k = Date.now(),
    y = (S) => {
      if (w !== "none") {
        let I = Date.now(),
          C = w === "waiting" ? I : w.endedAt;
        a("tengu_remote_tools_announce_waited_for_worker", {
          waited_ms: C - k,
          after_wait_ms: I - C,
          outcome: c(S.kind),
          reason: ce(Ot.find((R) => S.kind === "failed" && R === S.reason))
        });
      }
      return S;
    };
  try {
    let { posted: S, response: I } = e.postControlRequest(Dt(n), {
      signal: r.signal ? AbortSignal.any([r.signal, s.signal]) : s.signal,
      ...(r.timeoutMs !== void 0 && { timeoutMs: r.timeoutMs }),
      ...(r.answerExpected === !1
        ? { answerExpected: !1 }
        : {
            awaitWorkerStart: {
              onChange: (x) => {
                w = x ? "waiting" : { endedAt: Date.now() };
              }
            }
          }),
      background: !0,
      onEchoed: (x) => {
        if (x === "unverified") h({ kind: "refused", reason: rPe });
      }
    });
    S.then(({ outcome: x }) =>
      x === "accepted" ? r.replaced?.then(() => "replaced") : "post_lost"
    ).then((x) => {
      if (x !== void 0 && w === "waiting") h({ kind: "failed", reason: x });
    });
    let C = await I,
      R = fL("remote_tools_announce", rs(), C);
    if (R === null) return y({ kind: "failed", reason: "unreadable_ack" });
    return y({
      kind: "announced",
      status: R.status,
      ...(R.passthrough_declined !== void 0 && { passthroughDeclined: R.passthrough_declined }),
      workerEpoch: R.worker_epoch,
      protocolVersion: R.protocol_version,
      ignoredTools: R.ignored_tools ?? [],
      ...(R.passthrough_adopted !== void 0 && { passthroughAdopted: R.passthrough_adopted }),
      ...(R.worker_capabilities !== void 0 && { workerCapabilities: R.worker_capabilities })
    });
  } catch (S) {
    return y((S instanceof Ye ? u : void 0) ?? ss(S));
  }
}
function Dt(e) {
  return {
    subtype: "remote_tools_announce",
    instance_id: e.instance_id,
    ...(e.worker_epoch !== void 0 && { worker_epoch: e.worker_epoch }),
    host: e.host,
    tools: e.tools.map((n) => ({
      ...n,
      refused_input_fields: [...n.refused_input_fields],
      protocol_versions: [...n.protocol_versions]
    })),
    passthrough: [...e.passthrough],
    plumbing: [...e.plumbing]
  };
}
function as(e) {
  return e.slice(0, 200).replace(/[^\x20-\x7e]/g, "?");
}
var ls = 4,
  No = 2000,
  Wo = 1048576;
function ds(e) {
  if (e.passthrough.length === 0 || _(Dt(e)).length <= Wo) return { body: e, trimmed: !1 };
  return { body: { ...e, passthrough: [] }, trimmed: !0 };
}
function cs(e) {
  let { passthroughAdopted: n, ...r } = e;
  return r;
}
var us = 60000,
  fs = 6,
  cn = 3600000,
  Lo = 1000,
  hs = 6,
  ps = 6,
  ms = 60000,
  gs = 5000,
  Fo = 1500;
function Uo(e) {
  let n = (J) =>
      e.backoffMs !== void 0
        ? e.backoffMs[J]
        : J < ls
          ? UI({ baseMs: No, attempt: J, floorMs: (No * 2 ** J) / 2 })
          : void 0,
    r =
      e.setTimer ??
      ((J, re) => {
        let ne = setTimeout(J, re);
        return { clear: () => clearTimeout(ne) };
      }),
    s = !1,
    u = null,
    h = null,
    w = 0,
    k = null,
    y = null,
    S = null,
    I = !1,
    C,
    R = null,
    x = 0,
    K = 0,
    G = [],
    F = !1,
    P = [],
    A = null,
    M = !1,
    D = [],
    H = async (J) => {
      if (z(J) || J === "reconnected") K = 0;
      if (A !== null || e.hostAsleep?.() === !0) {
        h = te(h, J);
        return;
      }
      let re = e.session(),
        ne = e.build();
      if (re === null || ne === void 0 || !e.workerLive()) {
        h = te(h, J);
        return;
      }
      let { body: ae, trimmed: ie } = ds(ne);
      if (ie && !I)
        ((I = !0),
          f("remote_tools_client_announce", "passthrough_over_frame"),
          t(
            `[remoteToolsAnnounce] the announce with this machine's ${ne.passthrough.length} MCP tools is larger than the worker reads (${Wo} chars); announcing without them \u2014 they are not offered to this worker`,
            { level: "warn" }
          ));
      ((h = null), N());
      let { promise: de, resolve: oe } = Promise.withResolvers();
      ((u = { replace: oe, reason: J }), (C = ae));
      let q = F;
      if (((F = !1), J === "returned")) G.push((e.now ?? Date.now)());
      let Y = await Ho(re, ae, {
        ...(e.signal && { signal: e.signal }),
        timeoutMs: is,
        replaced: de
      });
      if (((u = null), Y.kind === "failed" && q)) F = !0;
      if (s) return;
      let le = ie && Y.kind === "announced" ? cs(Y) : Y,
        ue = J === "returned",
        ye = le.kind === "failed" && le.reason === "no_answer",
        Se = le.kind === "refused" && le.reason === rPe;
      K = !ue && (ye || Se) ? K + 1 : 0;
      let he =
        ue && Se
          ? { kind: "failed", reason: rPe }
          : ye && K > 1
            ? { kind: "refused", reason: "no_answer_parked" }
            : Se && K === 1
              ? { kind: "retry", reason: rPe }
              : le;
      (t(`[remoteToolsAnnounce] ${J}: ${he.kind}${"reason" in he ? ` (${as(he.reason)})` : ""}`),
        e.onOutcome?.(he, J));
      let tt = ue || (J === "retry" && M);
      if (((M = ue && he.kind === "retry" && he.reason === "stale_worker_epoch"), tt && !M))
        if (he.kind === "announced") g("rtc_return_announce");
        else if (he.kind === "failed") {
          let ze = he.reason;
          if (ue && (ze === "post_failed" || ze === "post_lost")) G.pop();
          f("rtc_return_announce", [...Ot, rPe].find(($t) => $t === ze) ?? "other");
        } else f("rtc_return_announce", he.kind);
      switch (he.kind) {
        case "announced":
          (Q(), (x = 0));
          break;
        case "refused":
        case "unsupported":
          (Q(),
            (x = 0),
            (R =
              he.kind === "refused" && he.reason === "no_answer_parked" ? "silence" : "refusal"));
          break;
        case "retry":
          if ((he.reason === "stale_worker_epoch" && ++x === 1) || he.reason === rPe) h ??= "retry";
          else ee();
          break;
        case "failed":
          if (!ue) ee();
          break;
      }
      let Ge = h;
      if (Ge !== null) {
        if (((h = null), R === null || j(Ge))) ((R = null), Q(), H(Ge));
      }
    },
    z = (J) => J === "worker_init" || J === "tools_changed" || J === "worker_asked",
    j = (J) => z(J) || (R === "silence" && J === "reconnected"),
    te = (J, re) => (J !== null && z(J) && !z(re) ? J : re),
    Q = () => {
      ((w = 0), k?.clear(), (k = null));
    },
    N = () => {
      (S?.clear(), (S = null), (y = null));
    },
    U = (J, re) => {
      if (y !== null && y.ms <= re) {
        y = { reason: te(y.reason, J), ms: y.ms };
        return;
      }
      let ne = y?.reason ?? null;
      (N(),
        (y = { reason: te(ne, J), ms: re }),
        (S = r(() => {
          let ae = y;
          if (((S = null), (y = null), ae !== null)) V.requestAnnounce(ae.reason);
        }, re)));
    },
    ee = () => {
      let J = k === null ? n(w) : void 0;
      if (J === void 0) return;
      ((w += 1),
        (k = r(() => {
          if (((k = null), !s)) H("retry");
        }, J)));
    },
    Z = async () => {
      let J = e.session(),
        re = C === void 0 ? void 0 : (e.build() ?? C);
      if (J === null || re === void 0 || !e.workerLive()) return;
      await Ho(
        J,
        { ...re, tools: [], passthrough: [], plumbing: [] },
        { signal: AbortSignal.timeout(Fo), timeoutMs: Fo, answerExpected: !1 }
      );
    },
    V = {
      requestAnnounce(J, re) {
        if (s) return;
        if (re?.coalesceMs !== void 0 && re.coalesceMs > 0) {
          U(J, re.coalesceMs);
          return;
        }
        let ne = y === null ? J : te(y.reason, J);
        if ((N(), j(ne))) R = null;
        if (((w = 0), R !== null)) return;
        if (ne === "returned" && !F) {
          let ae = (e.now ?? Date.now)();
          G = G.filter((de) => de <= ae && ae - de < cn);
          let ie = G.at(-1);
          if (G.length >= fs || (ie !== void 0 && ae - ie < us)) {
            f("rtc_return_announce", "rate_limited");
            return;
          }
        }
        if ((k?.clear(), (k = null), u)) {
          if (((h = te(h, ne)), ne === "tools_changed")) u.replace();
          return;
        }
        H(ne);
      },
      outstanding: () =>
        (u !== null && u.reason !== "returned") || (h !== null && h !== "returned"),
      workerLive() {
        if (s || u || h === null || R !== null) return;
        let J = h;
        ((h = null), k?.clear(), (k = null), H(J));
      },
      async withdraw() {
        await V.disposeKeepingWithdraw()();
      },
      disposeKeepingWithdraw() {
        if (s) return () => Promise.resolve();
        return (V.dispose(), wb(Z));
      },
      sayAsleep(J) {
        let re = e.session();
        if (s || re === null || C === void 0 || !e.workerLive()) return null;
        let ne = (e.now ?? Date.now)();
        if (((P = P.filter((oe) => oe <= ne && ne - oe < cn)), F || P.length >= hs))
          return (f("rtc_sleep_notice", F ? "already_said" : "rate_limited"), null);
        ((F = !0), P.push(ne));
        let { posted: ae, response: ie } = re.postControlRequest(
          Dt({
            ...C,
            worker_epoch: J,
            host: { ...C.host, capabilities: [...(C.host.capabilities ?? []), VJn] }
          }),
          { timeoutMs: Lo, answerExpected: !1, background: !0 }
        );
        ie.catch(() => {});
        let de = Pe(
          ae.then(({ outcome: oe }) => {
            if (oe === "accepted") return (g("rtc_sleep_notice"), !0);
            return (f("rtc_sleep_notice", "post_failed"), (F = !1), P.pop(), !1);
          }),
          Lo,
          (oe, q) => r(oe, q).clear
        ).then((oe) => ((A = null), V.workerLive(), oe !== !1));
        return ((A = de), de);
      },
      sayStillHere(J) {
        let re = e.session();
        if (
          s ||
          re === null ||
          C === void 0 ||
          F ||
          A !== null ||
          e.hostAsleep?.() === !0 ||
          !e.workerLive()
        )
          return !1;
        let ne = (e.now ?? Date.now)();
        D = D.filter((oe) => oe <= ne && ne - oe < cn);
        let ae = D.at(-1);
        if (D.length >= ps || (ae !== void 0 && ne - ae < ms)) return !1;
        D.push(ne);
        let { posted: ie, response: de } = re.postControlRequest(
          Dt({
            ...C,
            passthrough: [],
            worker_epoch: J,
            host: { ...C.host, capabilities: [YJn, ...(C.host.capabilities ?? [])] }
          }),
          { timeoutMs: gs, answerExpected: !1, background: !0 }
        );
        return (
          de.catch(() => {}),
          ie.then((oe) => {
            if (oe.outcome === "accepted") {
              g("rtc_still_here");
              return;
            }
            if (!(oe.outcome === "failed" && (oe.cause === "network" || oe.cause === "timeout")))
              D = D.filter((Y) => Y !== ne);
            if (oe.outcome !== "failed" || oe.cause !== "closed")
              f("rtc_still_here", "post_failed");
          }),
          !0
        );
      },
      dispose() {
        ((s = !0), k?.clear(), (k = null), N());
      }
    };
  return V;
}
function jo({ serving: e, manager: n, observer: r }) {
  let s = new Map();
  return {
    onServedChannelRequest: (u) => {
      let h = new AbortController();
      s.set(u.requestId, h);
      let w = { ...u, signal: AbortSignal.any([u.signal, h.signal]) };
      ks(w, e, n, r)
        .catch((k) => {
          (l(k), n()?.releaseServedChannelRequest(u.requestId));
        })
        .finally(() => s.delete(u.requestId));
    },
    onServedChannelRequestCancelled: () => {},
    onControlRequestRefused: (u) => e()?.noteUnlistedKind?.(u),
    abandonInHand: () => {
      for (let [u, h] of s) (h.abort(), n()?.releaseServedChannelRequest(u));
      s.clear();
    }
  };
}
async function ks(e, n, r, s) {
  let u = (R) => {
      (t(`[servedChannel] ${e.subtype} ${_k(e.requestId)} not answered here: ${R}`),
        r()?.releaseServedChannelRequest(e.requestId));
    },
    h = n();
  if (h === null) return u("nothing serving");
  let w = performance.now(),
    k = e.subtype === "remote_tool_call" ? f9s(e.request) : void 0,
    y =
      k?.request.ok === !0 && k.instance_id === h.instanceId
        ? {
            callId: k.request.value.call_id,
            leg:
              k.request.kind === "outcome_query"
                ? "outcome_of"
                : k.request.value.approval === void 0
                  ? 1
                  : 2,
            approval:
              k.request.kind === "outcome_query"
                ? "none"
                : (k.request.value.approval?.decision ?? "none")
          }
        : void 0;
  un(() => {
    if (y !== void 0)
      Jd(
        y.callId,
        "leg received",
        { leg: y.leg, age_ms: e.ageMs === void 0 ? void 0 : Math.round(e.ageMs) },
        m7t(y.leg)
      );
  });
  let S =
    s !== void 0 && k !== void 0 && k.instance_id === h.instanceId
      ? { observer: s, leg: k }
      : void 0;
  un(() => S?.observer.legStarted(S.leg, e.ageMs));
  let I;
  try {
    I = await _s(e, h, k);
  } finally {
    un(() => S?.observer.legAnswered(S.leg, I?.result));
  }
  if (I === void 0) return u("not this client's to answer");
  if (e.signal.aborted) return;
  let C = Math.round(performance.now() - w);
  if (
    r()?.respondToServedChannelRequest(
      e.requestId,
      I,
      y === void 0 ? void 0 : (R, x) => ws(y, C, R, x)
    ) !== !0
  )
    t(
      `[servedChannel] ${e.subtype} ${_k(e.requestId)} answered after it was withdrawn \u2014 result dropped`
    );
}
function ws(e, n, r, s) {
  let u = r.outcome === "accepted" ? r.signMs : void 0,
    h = r.outcome === "accepted" ? r.postMs : void 0;
  if (
    (Jd(
      e.callId,
      "reply posted",
      { leg: e.leg, serve_ms: n, reply_ms: s, sign_ms: u, post_ms: h, post_outcome: r.outcome },
      m7t(e.leg)
    ),
    e.leg === "outcome_of")
  )
    return;
  a("tengu_remote_tool_serve", {
    op: b("reply"),
    call_id: _e(e.callId),
    transport: b("session"),
    second_leg: e.leg === 2,
    approval_decision: c(e.approval),
    serve_ms: n,
    reply_ms: s,
    reply_sign_ms: u,
    reply_post_ms: h,
    reply_accepted: r.outcome === "accepted"
  });
}
function un(e) {
  try {
    e();
  } catch (n) {
    l(n);
  }
}
async function _s(e, n, r) {
  let s = {
    signal: e.signal,
    requestId: e.requestId,
    ageMs: e.ageMs,
    workerEpoch: e.workerEpoch,
    attestationStatus: e.attestationStatus,
    modeStamp: e.modeStamp
  };
  switch (e.subtype) {
    case "remote_tool_call":
      return r === void 0 ? void 0 : n.serveSessionToolCall(r, s);
    case "remote_plumbing_call": {
      let u = m9s(e.request);
      return u === void 0 ? void 0 : n.servePlumbingCall(u, s);
    }
    case "remote_tools_probe":
      return e.request.instance_id === n.instanceId ? n.answerProbe() : void 0;
    case "remote_tools_reannounce":
      return;
  }
}
var fn = (e) => e.tools.length + e.plumbing.length + (e.passthrough?.length ?? 0) === 0,
  ys = 1e4,
  Ss = new Set([
    ...Ot,
    "invalid_announce",
    "no_answer_parked",
    "remote_tools_disabled",
    "remote_tools_not_ready",
    "stale_worker_epoch",
    rPe
  ]);
function bs(e) {
  let n = /^[a-z_]+(?=:|$)/.exec(e)?.[0];
  return n !== void 0 && Ss.has(n) ? n : "other";
}
function Rs(e) {
  if (e.kind === "failed" && e.reason === "replaced") return;
  if (e.kind === "announced") {
    g("remote_tools_client_announce");
    return;
  }
  f(
    "remote_tools_client_announce",
    e.kind === "unsupported" ? "unsupported" : `${e.kind}_${bs(e.reason)}`
  );
}
function y6t(e) {
  let n = `cc-${vs()}`,
    r = null,
    s = !1,
    u = null,
    h = null,
    w = () => {},
    k,
    y,
    S,
    I,
    C,
    R,
    x,
    K,
    G = !1,
    F = !1,
    P = !1,
    A = !1,
    M = !1,
    D = !1,
    H,
    z = new Map(),
    j = Uo({
      hostAsleep: () => D,
      session: e.manager,
      workerLive: () => e.manager()?.workerLive() ?? !1,
      build: () => {
        let q = r?.servedTools?.();
        if (q === void 0) return;
        return ((F = fn(q)), (R = k ?? C), e.buildAnnounce(q, n, k));
      },
      onOutcome: (q, Y) => {
        let le = R;
        C = void 0;
        let ue = Y === "returned" && q.kind === "failed";
        if (q.kind === "announced") {
          if (q.workerEpoch !== void 0) x = Math.max(x ?? 0, q.workerEpoch);
          if (q.workerEpoch !== void 0 && (k === void 0 || q.workerEpoch >= k)) k = q.workerEpoch;
          else if (q.workerEpoch !== k)
            Jd(void 0, "epoch ratchet ignored", { heard: q.workerEpoch, kept: k });
          ((y = q.passthroughDeclined === "pending" ? void 0 : q.workerEpoch),
            (S = void 0),
            (I = void 0),
            (G = !1),
            (P = F),
            (A = q.workerCapabilities?.includes(XJn) === !0));
        } else if (!ue) {
          if (
            ((y = void 0),
            (G =
              q.kind === "failed" ||
              q.kind === "retry" ||
              (q.kind === "refused" && q.reason === "no_answer_parked")),
            q.kind === "refused" && q.reason === "no_answer_parked")
          )
            I = le;
          else if (q.kind === "refused" || q.kind === "unsupported") {
            if (((S = le), q.kind === "refused" && q.reason === rPe && !M))
              ((M = !0), e.onNotice?.("announce_unverified", Ei.announce_unverified(loe())));
          } else if (q.kind === "retry" && q.reason === "stale_worker_epoch")
            ((k = void 0), (x = void 0));
        }
        if (Y !== "returned" || (!ue && q.kind !== "announced")) Rs(q);
        e.onAnnounceOutcome?.(q, Y);
      },
      ...(e.signal && { signal: e.signal }),
      ...e.announcer
    }),
    te = (q) => {
      if (s) {
        q.dispose();
        return;
      }
      if (
        ((r = q),
        Q(),
        (w =
          q.onServedToolsChanged?.((Y) => {
            (Q(),
              N("tools_changed", {
                coalesceMs: Y === void 0 || Y === "adopted" || Y === "redescribed" ? 0 : LQn[Y]
              }));
          }) ?? w),
        u !== null)
      ) {
        let { reason: Y, opts: le } = u;
        ((u = null), N(Y, le));
      }
    },
    Q = () => {
      if (s) return;
      let q = r?.servedTools?.();
      e.manager()?.markServing(q !== void 0 && !fn(q));
    },
    N = (q, Y) => {
      if (r === null) {
        u = { reason: q, ...(Y && { opts: Y }) };
        return;
      }
      if (q === "attached") Q();
      if (q === "worker_asked") {
        ((y = void 0), (S = void 0), (I = void 0), (C = void 0), j.requestAnnounce("worker_asked"));
        return;
      }
      if (q === "returned") {
        if (y === void 0 || P) {
          N("reconnected");
          return;
        }
        j.requestAnnounce("returned");
        return;
      }
      if (
        (q === "reconnected" && y !== void 0) ||
        (q === "attached" && (y !== void 0 || C !== void 0))
      ) {
        t(
          `[servedChannel] ${q}: nothing to announce \u2014 worker epoch ${y ?? C} already has (or is being told) this machine's tools`
        );
        return;
      }
      if (
        q === "worker_init" &&
        Y?.workerEpoch !== void 0 &&
        (Y.workerEpoch === y ||
          Y.workerEpoch === S ||
          Y.workerEpoch === I ||
          Y.workerEpoch === C ||
          (k !== void 0 && Y.workerEpoch < k))
      )
        return;
      if (((y = void 0), q === "reconnected")) I = void 0;
      if (q === "worker_init") {
        if (Y?.workerEpoch !== void 0) x = Math.max(x ?? 0, Y.workerEpoch);
        C = Y?.workerEpoch;
        let le = Y?.workerEpoch === void 0 || k === void 0 || Y.workerEpoch === k;
        if (Y?.workerEpoch !== void 0) k = Y.workerEpoch;
        if (le && j.outstanding()) return;
      } else if (q === "tools_changed") ((S = void 0), (I = void 0));
      j.requestAnnounce(q, { ...(Y?.coalesceMs !== void 0 && { coalesceMs: Y.coalesceMs }) });
    },
    U = (q) => {
      e.manager()?.releaseServedChannelRequest(q.requestId);
      let Y = Grr().safeParse(q.request),
        le = Date.now(),
        ue =
          !Y.success ||
          q.ageMs === void 0 ||
          q.ageMs > Y.data.deadline_ms ||
          Kwe(Lpe(q.attestationStatus)) ||
          (x !== void 0 && Y.data.worker_epoch < x) ||
          (K?.epoch === Y.data.worker_epoch && !G) ||
          (K !== void 0 && le - K.at < ys) ||
          j.outstanding();
      if (!Y.success || ue) {
        t(
          "[servedChannel] remote_tools_reannounce not honoured: unreadable, undated, past its wait, from a sender held back, from an older worker, already answered, rate limited, or an announce is already out"
        );
        return;
      }
      ((K = { epoch: Y.data.worker_epoch, at: le }), (G = !1), N("worker_asked"));
    },
    ee = e.createServingContext({
      sessionId: e.sessionId,
      instanceId: n,
      ...(e.onNotice && { onNotice: e.onNotice })
    }),
    Z =
      ee instanceof Promise
        ? ee.then(te).catch((q) => {
            l(q);
          })
        : Promise.resolve(te(ee)),
    V = () => {},
    J,
    re = () => {
      let q = J?.relaunchIsNext.aborted === !1 ? J.withdraw() : void 0,
        Y = (h ??= (async () => {
          ((s = !0), V());
          for (let Se of z.keys()) e.manager()?.releaseServedChannelRequest(Se);
          z.clear();
          let le = r?.servedTools?.(),
            ue = le === void 0 || fn(le),
            ye = P && F && ue ? Promise.resolve(j.dispose()) : j.withdraw();
          (e.manager()?.markServing(!1), await Z, w(), await ye, r?.dispose(), j.dispose());
        })());
      return q === void 0 ? Y : q.then(() => Y);
    },
    {
      abandonInHand: ne,
      onServedChannelRequest: ae,
      ...ie
    } = jo({ serving: () => (s ? null : r), manager: e.manager, observer: e.onServedCall }),
    de = (q) => (q.subtype === "remote_tools_reannounce" ? U(q) : ae?.(q)),
    oe = {
      instanceId: n,
      callbacks: {
        ...ie,
        onServedChannelRequest: (q) => {
          let Y =
            q.subtype === "remote_tools_reannounce" ? q : { ...q, workerEpoch: q.workerEpoch ?? k };
          if (
            Y.subtype === "remote_tools_probe" &&
            (D || (H !== void 0 && Y.ageMs !== void 0 && Date.now() - Y.ageMs < H))
          )
            (t(
              `[servedChannel] remote_tools_probe ${_k(Y.requestId)} not answered: the host ${D ? "says this computer sleeps" : "had not yet said it woke when it was stored"}`
            ),
              e.manager()?.releaseServedChannelRequest(Y.requestId));
          else if (D && !s)
            (t(
              `[servedChannel] ${Y.subtype} ${_k(Y.requestId)} held until the host says this computer woke`
            ),
              z.set(Y.requestId, { request: Y, at: Date.now() }));
          else de(Y);
        },
        onWorkerLive: () => j.workerLive(),
        onWorkerGone: () => {
          ((y = void 0), r?.workerGone?.());
        }
      },
      requestAnnounce: N,
      sayAsleep: () => ((D = !0), s || y === void 0 || P ? null : j.sayAsleep(y)),
      sayStillHere: () => !s && !D && y !== void 0 && !P && A && j.sayStillHere(y),
      hostWoke: (q) => {
        if (!D) return;
        D = !1;
        let Y = Date.now();
        if (((H = Y), !q)) j.workerLive();
        let le = [...z.values()];
        z.clear();
        for (let { request: ue, at: ye } of le) {
          if (ue.signal.aborted) continue;
          try {
            de({ ...ue, ageMs: ue.ageMs === void 0 ? void 0 : ue.ageMs + (Y - ye) });
          } catch (Se) {
            (l(Se), e.manager()?.releaseServedChannelRequest(ue.requestId));
          }
        }
      },
      heldServedCall: (q) => (s || r === null ? Jq : (r.heldServedCall?.(q) ?? Jq)),
      servedHost: () => (s ? void 0 : r?.servedTools?.()?.host),
      close: re,
      leaveForRestart: (q) => {
        if (J !== void 0) return J.withdraw;
        ne();
        let Y = j.disposeKeepingWithdraw();
        re();
        let le = P && F ? () => Promise.resolve() : Y;
        return ((J = { withdraw: le, relaunchIsNext: q }), le);
      }
    };
  if (
    ((V =
      e.onRevoked?.((q) => {
        (t(`[servedChannel] serving revoked on this machine (${q}) \u2014 closing the channel`),
          ne(),
          e.manager()?.giveUpKeptServedResults(),
          re());
      }) ?? V),
    s)
  )
    V();
  return oe;
}
var Es = [400, 1200],
  xs = 5000,
  z7r =
    "Switch permission modes away and back once to keep this session's mode: it couldn't be saved on the server, so the session may fall back to default after idling.",
  Cs =
    "Switch permission modes away and back once: this session's mode couldn't be saved on the server.",
  As =
    "This session's permission mode couldn't be saved: the server says the session isn't active. Switch modes away and back once it is.";
function Ps(e) {
  return (
    e.outcome === "failed" &&
    (e.cause === "network" || (e.cause === "http" && (e.status >= 500 || e.status === 429)))
  );
}
function DRn({
  manager: e,
  mode: n,
  surface: r,
  sessionId: s,
  superseded: u,
  observedMode: h,
  seededModeReported: w,
  onRefused: k,
  onGaveUp: y,
  onTaken: S,
  linkDown: I
}) {
  let C = (G) => {
      a("tengu_remote_create_permission_mode_push", {
        surface: c(r),
        mode: c(n),
        kind: c(G.kind),
        posted_mode: c(G.postedMode),
        outcome: c(G.outcome),
        ...("cause" in G && { cause: c(G.cause) }),
        ...("status" in G && { status: G.status }),
        ...(G.attempt !== void 0 && { attempt: G.attempt }),
        session_id: _e(s)
      });
    },
    R = () => {
      let G = h?.();
      return u() || (G !== void 0 && G !== n && (G !== "default" || (w?.() ?? !1)));
    },
    x = async (G, F, P = Date.now(), A = 1) => {
      let M = new AbortController(),
        D = e.postControlRequest(
          { subtype: "set_permission_mode", mode: G },
          { answerExpected: !1, background: !0, timeoutMs: tfr, signal: M.signal }
        );
      D.response.catch(() => {});
      let H = await D.posted;
      if ((C({ ...H, kind: F, postedMode: G, attempt: A }), H.outcome === "accepted"))
        return { result: H, response: D.response };
      if ((M.abort(), R()))
        return (
          C({ kind: F, postedMode: G, outcome: "superseded" }),
          { result: H, response: null }
        );
      let z = Es[A - 1];
      if (z !== void 0 && Ps(H) && Date.now() - P < xs) {
        if ((await X(z), !R())) return x(G, F, P, A + 1);
        return (
          C({ kind: F, postedMode: G, outcome: "superseded" }),
          { result: H, response: null }
        );
      }
      if (
        (C({ kind: F, postedMode: G, outcome: "gave_up" }),
        m("remote_create_mode_push", `${F}_gave_up`),
        !(H.outcome === "failed" && H.cause === "closed"))
      )
        y?.(H.outcome === "session_inactive" ? As : F === "push" ? z7r : Cs);
      return { result: H, response: null };
    },
    K = (G) => {
      G.then(
        () => {
          (C({ kind: "push", postedMode: n, outcome: "taken" }),
            S?.(),
            g("remote_create_mode_push"),
            t(`[remote] The session took its create's ${n} permission mode as a live request`));
        },
        (F) => {
          let P = I1(F);
          if (
            (t(
              `[remote] The create's ${n} permission mode push was not taken (${P}): ${ei(d(F), { maxCodeUnits: 200 })}`
            ),
            !(
              P === "server_error" ||
              ((P === "disconnected" || P === "not_connected") && I !== void 0 && !I())
            ))
          ) {
            (C({ kind: "push", postedMode: n, outcome: "unanswered" }),
              f("remote_create_mode_push", "unanswered"));
            return;
          }
          if (
            (C({ kind: "push", postedMode: n, outcome: "refused" }),
            f("remote_create_mode_push", "refused"),
            R() || n === "default")
          )
            return;
          let M = x("default", "converge");
          (M.then(({ response: D }) =>
            D?.catch((H) => {
              t(
                `[remote] The default mode sent after that refusal was not taken either: ${ei(d(H), { maxCodeUnits: 200 })}`
              );
            })
          ),
            k?.(M.then(({ result: D }) => D)));
        }
      );
    };
  return x(n, "push").then(({ result: G, response: F }) => {
    if (F !== null) K(F);
    return G;
  });
}
function sls({ posted: e, mode: n, latch: r, retire: s, now: u = Date.now }) {
  let h = e.then(
    (w) => w.outcome === "accepted",
    () => !1
  );
  return (
    h.then((w) => {
      if (w) s();
      else r.notTakenAtMs ??= u();
    }),
    async ({ submittedAtMs: w }) => {
      let k = w ?? u();
      if (await h) return;
      if (k - (r.notTakenAtMs ?? k) < ils)
        return {
          go: !1,
          reason: `the session's ${n} permission mode couldn't be saved on the server first`
        };
      s();
      return;
    }
  );
}
var Ds = 60000,
  Os = 180000,
  HRn = "Cloud session may be unresponsive. Attempting to reconnect\u2026",
  LRn =
    "Claude is waiting for you to answer its request and will continue with this message once you do.";
function NRn(e) {
  return e ? Os : Ds;
}
class _6t {
  holdsWhileAsked;
  openRequests = new Set();
  watched = null;
  watch(e, n) {
    let r = this.holds();
    if (r) this.clear();
    let s = { onSilent: e, schedule: n, cancel: null };
    if (((this.watched = s), r && this.openRequests.size > 0))
      return (g("remote_response_watch_hold"), !1);
    return (this.start(s), !0);
  }
  clear() {
    (this.watched?.cancel?.(), (this.watched = null));
  }
  requestOpened(e) {
    if ((this.openRequests.add(e), this.holds() && this.watched?.cancel))
      (this.watched.cancel(), (this.watched.cancel = null), g("remote_response_watch_hold"));
  }
  requestClosed(e) {
    if (
      (this.openRequests.delete(e), this.openRequests.size === 0 && this.watched?.cancel === null)
    )
      this.start(this.watched);
  }
  holds() {
    return ((this.holdsWhileAsked ??= aOn()), this.holdsWhileAsked);
  }
  start(e) {
    e.cancel = e.schedule(() => {
      if (this.watched === e) this.watched = null;
      e.onSilent();
    });
  }
}
var $s = "tengu_violin_colophony";
function CRt() {
  try {
    return Wn($s, !1) === !0;
  } catch {
    return !1;
  }
}
export {
  gat,
  Xur,
  Jur,
  h6t,
  Qur,
  Zur,
  efr,
  xRn,
  PRn,
  IRn,
  ORn,
  MRn,
  rPe,
  y6t,
  z7r,
  DRn,
  sls,
  HRn,
  LRn,
  NRn,
  _6t,
  CRt
};

//# sourceMappingURL=chunk-nc2bf1j8.js.map
