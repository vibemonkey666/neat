import {
  fileURLToPath as __filePath_e81493e31de4032f,
  URL as __filePath_e81493e31de4032f_URL
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
import { wn, L, es, tt, ke, SYe, cm } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { Ye, R, d, E } from "./chunk-fs43t96t.js";
import { Yn, dl, wA, T6 } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { mo } from "./chunk-ak0cmk10.js";
import { Pt, Pl, fe } from "./chunk-xe386mry.js";
import { Kg, _, te, ie, Hb, udr, dit, t } from "./chunk-4kxznmzw.js";
import { di, Ft } from "./chunk-a16y5hcz.js";
import { kq, Cxe, ees, i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { zp, Ww, F4e, W7o, G7o, K7o, hr, Pb, C4t, eZo, It, Z9, wu, rP } from "./chunk-dc0nzty2.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { plr } from "./chunk-13nwb0xt.js";
import { Ko, _n, q_, Rs } from "./chunk-cjnzngfc.js";
import { fSe, wst, G4e, yxe, RR, u2, ckn, Est, kZo, Jar, it, ct } from "./chunk-qmmh8tq2.js";
import { Gg, $Z, dAt, mEn, l4t, aT } from "./chunk-tcvjb2c0.js";
import { gd } from "./chunk-adv24f35.js";
import {
  R8,
  bye,
  gU,
  H4s,
  pfn,
  TFo,
  AFo,
  RFo,
  mfn,
  yBr,
  xFo,
  h8n,
  G_t,
  _Ze,
  z_t
} from "./chunk-5bpsfngr.js";
import { Vvt, Mtr, zn, g0, Dtr, Hqo, Ki, _ti, Ha, k } from "./chunk-ajtyjx88.js";
import { $w } from "./chunk-5rw2zfa0.js";
import { Pi } from "./chunk-bh50mq9d.js";
import { H4e, v7o } from "./chunk-5y69fhjv.js";
import { Mo } from "./chunk-r00j5r9s.js";
import { zk, Sz } from "./chunk-pbffp8rf.js";
import { pyt } from "./chunk-7jgmpv5v.js";
import { K1 } from "./chunk-d5zj5299.js";
import { OBo } from "./chunk-m5rm7nsm.js";
import { lwt, $Go } from "./chunk-971jjch9.js";
import { cs } from "./chunk-eacq4pgt.js";
import { ITe } from "./chunk-d24cd7f5.js";
import { vc } from "./chunk-5ns6j8e0.js";
import { e7 } from "./chunk-6pv3pyvv.js";
import { sep as xn } from "path";
function ot(e) {
  let n = new Map();
  if (!e) return n;
  try {
    let r = te(e);
    if (r && typeof r === "object") {
      for (let [o, s] of Object.entries(r)) if (typeof s === "string") n.set(o, s);
    }
  } catch (r) {
    t(`[repo-checkouts] Failed to parse env map: ${d(r)}`, { level: "error" });
  }
  return n;
}
function iDe() {
  if (cm()) return new Map();
  let e = mo().repoCheckouts;
  if (e.checkouts) return e.checkouts;
  let n = i.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!n) {
    let r = Pl();
    return ((e.checkouts = new Map(r === null ? [] : [["", r]])), e.checkouts);
  }
  if (((e.checkouts = ot(n)), Gg())) e.checkouts = In(e.checkouts);
  return e.checkouts;
}
function man(e) {
  if (!Gg()) return e;
  let n = dAt();
  if (!l4t(e, n) || F4e(e, n)) return null;
  let r = T6(e);
  return r !== null && l4t(r, mEn(n)) ? r : null;
}
function In(e) {
  let n = dAt(),
    r = new Map([...e].filter(([, o]) => l4t(o, n)));
  if (r.size < e.size)
    t(
      `[repo-checkouts] ignored ${e.size - r.size} declared checkout(s) whose path is not absolute or lies on another host`,
      { level: "warn" }
    );
  return r;
}
function pqn() {
  return i.CLAUDE_CODE_REPO_CHECKOUTS ? iDe() : new Map();
}
function st() {
  let e = mo().repoCheckouts;
  if (e.baseRefs) return e.baseRefs;
  return ((e.baseRefs = ot(i.CLAUDE_CODE_BASE_REFS)), e.baseRefs);
}
function rLr(e) {
  for (let [n, r] of iDe()) if (e === r || e.startsWith(r + xn)) return n;
  return;
}
async function IUs(e) {
  mo().repoCheckouts.onMetadataChanged = e;
  for (let [, n] of iDe()) {
    let r = man(n);
    if (r !== null) await W7o(r);
  }
  G7o(() => void GIo());
}
async function GIo() {
  let e = iDe();
  if (e.size === 0) return;
  let n = {};
  for (let [o, s] of e) {
    let a = man(s);
    if (a === null) continue;
    let u = await K7o(a);
    if (u !== void 0) n[o] = u;
  }
  let r = mo().repoCheckouts;
  if (wn(n, r.lastEmittedBranches)) return;
  ((r.lastEmittedBranches = n), r.onMetadataChanged?.({ current_branches: n }));
}
class at {
  liveProcessesByAgentId = new Map();
  stopPendingAgentIds = new Set();
  everRegisteredTaskIds = new Set();
  loopsByTaskId = new Map();
  pendingEscalationsByTaskId = new Map();
  inFlightProcessSweeps = new Set();
  dispose() {
    for (let e of this.pendingEscalationsByTaskId.values()) for (let n of e.timers) clearTimeout(n);
    (this.pendingEscalationsByTaskId.clear(),
      this.inFlightProcessSweeps.clear(),
      this.loopsByTaskId.clear(),
      this.everRegisteredTaskIds.clear(),
      this.liveProcessesByAgentId.clear(),
      this.stopPendingAgentIds.clear());
  }
}
var vn = new W(() => new at());
function P1() {
  return es(vn);
}
function uqn(e) {
  return P1().everRegisteredTaskIds.has(e);
}
function sht(e, n, r = {}) {
  let { everRegisteredTaskIds: o, loopsByTaskId: s } = P1();
  o.add(e);
  let a = s.get(e);
  if (a) (s.delete(e), xe(a));
  let u = {
    killController: n,
    agentControllersByAgentId: new Map(),
    settleCallbacks: [],
    settleRequiresEmptyAgentAssociations: r.settleRequiresEmptyAgentAssociations ?? !1,
    chainSettled: !1
  };
  return (
    s.set(e, u),
    () => {
      if (s.get(e) !== u) return;
      if (
        ((u.chainSettled = !0),
        u.settleRequiresEmptyAgentAssociations && u.agentControllersByAgentId.size > 0)
      )
        return;
      (s.delete(e), xe(u));
    }
  );
}
function xe(e) {
  for (let n of e.settleCallbacks)
    try {
      n();
    } catch (r) {
      l(r);
    }
}
function AE(e) {
  return !P1().loopsByTaskId.has(e);
}
function jJe(e) {
  return P1().loopsByTaskId.get(e);
}
function sFt(e, n) {
  let r = P1().loopsByTaskId.get(e);
  if (!r) {
    try {
      n();
    } catch (o) {
      l(o);
    }
    return;
  }
  r.settleCallbacks.push(n);
}
function xUs(e) {
  return P1().loopsByTaskId.get(e)?.killController;
}
function fqn(e, n, r) {
  P1().loopsByTaskId.get(e)?.agentControllersByAgentId.set(n, r);
}
function PUs(e, n) {
  let { loopsByTaskId: r } = P1(),
    o = r.get(e);
  if (!o) return;
  if (
    (o.agentControllersByAgentId.delete(n),
    o.chainSettled &&
      o.settleRequiresEmptyAgentAssociations &&
      o.agentControllersByAgentId.size === 0)
  )
    (r.delete(e), xe(o));
}
function QWe(e) {
  let n = P1().loopsByTaskId.get(e);
  return n ? [...n.agentControllersByAgentId.keys()] : [];
}
function iht(e) {
  let n = P1().loopsByTaskId.get(e);
  if (!n) return [];
  let r = [];
  for (let o of n.agentControllersByAgentId.values()) if (o && !o.signal.aborted) r.push(o);
  return r;
}
import { resolve as Pn } from "path";
function mqn(e) {
  let n = {};
  for (let s of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let a = RR(e, s);
    if (a !== void 0) n[s] = a;
  }
  let r = RR(e, "GIT_CONFIG_COUNT"),
    o = Number(r);
  if (r === void 0 || !Number.isInteger(o) || o <= 0) return { env: n, count: void 0 };
  n.GIT_CONFIG_COUNT = r;
  for (let s = 0; s < o; s++) {
    let a = RR(e, `GIT_CONFIG_KEY_${s}`);
    if (a === void 0) break;
    n[`GIT_CONFIG_KEY_${s}`] = a;
    let u = RR(e, `GIT_CONFIG_VALUE_${s}`);
    if (u !== void 0) n[`GIT_CONFIG_VALUE_${s}`] = u;
  }
  return { env: n, count: r };
}
var Cn =
  /^http\.(?:.*\.)?(?:ssl(?:cainfo|capath|verify|version|cipherlist|backend|try)|schannel(?:checkrevoke|usesslcainfo)|pinnedpubkey|proxysslcainfo)$/i;
function On() {
  let { env: e, count: n } = mqn(e7()),
    r = [];
  for (let o = 0; o < Number(n ?? 0); o++) {
    let s = e[`GIT_CONFIG_KEY_${o}`],
      a = e[`GIT_CONFIG_VALUE_${o}`];
    if (s === void 0) break;
    if (a !== void 0 && Cn.test(s)) r.push([s, a]);
  }
  return r.length === 0 ? {} : Ko(u2(void 0, r), (o) => o !== void 0);
}
function iFt(e, n) {
  return H4s(e, { ...On(), ...n });
}
async function aht(
  e,
  n,
  r = {},
  {
    timeout: o,
    abortSignal: s,
    withoutControllingTerminal: a,
    waitForExitAfterKill: u,
    maxBuffer: h,
    stripFinalNewline: p,
    programs: S,
    input: y,
    lazyFetch: b,
    fetchesFrom: T,
    ownConfigAsJudged: w,
    afterEachRead: A,
    repository: x
  } = {}
) {
  let C = T === void 0 ? void 0 : Mn(T);
  if (C === null)
    return ue(
      "remote_name_not_plain",
      "the remote's name must begin with a letter or a digit and contain only letters, digits, '.', '_' and '-'"
    );
  let v = [...n],
    I = w?.map(([U, D]) => [U, D]);
  if (C !== void 0 && !Fn(v, C))
    throw new R(
      `materializeWorkTree: with fetchesFrom, the arguments must be -c pairs if any, then fetch or ls-remote, then options, then --end-of-options, then that remote's name. Each option must carry its value after '=' (--depth=1), begin with --no-, or be one of ${[...ft].join(", ")}. A fetch needs --no-recurse-submodules. No option may begin with --rec.`,
      "partial-clone lane called with fetchesFrom and a command that is not in the form it requires"
    );
  let M = x ?? gU(e),
    B = S === void 0 ? void 0 : Nn(S),
    G = { value: !1 },
    F = await h8n(e, { envPins: r, pin: M, ...Oe(B, A, G) });
  if (G.value) return ue("repository_moved_between_reads", gt);
  if (!F.ok) return ue(F.reason, mfn(F));
  if (s?.aborted) return ue("aborted", pt);
  return mt(
    ct,
    e,
    v,
    r,
    F.entries,
    {
      timeout: o,
      abortSignal: s,
      withoutControllingTerminal: a,
      waitForExitAfterKill: u,
      maxBuffer: h,
      stripFinalNewline: p,
      repository: M
    },
    {
      programs: B,
      input: y,
      lazyFetch: b,
      fetchesFrom: C,
      ownConfigAsJudged: I,
      ...(A !== void 0 && { afterEachRead: A })
    }
  );
}
function gqn(e, n, r = {}, o = {}) {
  let s = n[lt(n)];
  if (s === void 0 || !Bn.has(s))
    throw new R(
      `gitInOwnWorkTree runs reads only, not git ${s ?? "(no subcommand)"}`,
      "gitInOwnWorkTree called with a non-read git subcommand"
    );
  return mt(it, e, n, r, null, o);
}
function lt(e) {
  return e.findIndex((n, r) => !n.startsWith("-") && (r === 0 || e[r - 1] !== "-c"));
}
var Bn = new Set(["diff", "format-patch", "log", "show"]),
  dt = ["https", "ssh"];
function oLr(e) {
  return dt.includes(ve(e));
}
function ve(e) {
  let n = /^[A-Za-z0-9][A-Za-z0-9+.-]*(?=::)/.exec(e)?.[0];
  if (n !== void 0) return n;
  let r = /^([a-z][a-z0-9+.-]*):\/\//i.exec(e)?.[1];
  if (r !== void 0) return r === "git+ssh" || r === "ssh+git" ? "ssh" : r;
  let o = e.indexOf(":"),
    s = e.indexOf("/");
  return o === -1 || (s !== -1 && s < o) || (O() === "windows" && /^[A-Za-z]:[\\/]/.test(e))
    ? "file"
    : "ssh";
}
var Ln = /^fatal: transport '([A-Za-z][A-Za-z0-9+.-]{0,31})' not allowed$/m;
function Mn(e) {
  return /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(e) ? e : null;
}
var ft = new Set(["--stdin", "--negotiate-only", "--refs", "--heads", "--quiet"]);
function Fn(e, n) {
  let r = lt(e),
    o = e.indexOf("--end-of-options"),
    s = e.slice(r + 1, o);
  return (
    e.slice(0, r).every((a, u) => u % 2 === 1 || a === "-c") &&
    ["fetch", "ls-remote"].includes(e[r] ?? "") &&
    o > r &&
    s.every((a) => /^--no-[a-z]|^--[a-z][a-z-]*=/.test(a) || ft.has(a)) &&
    (e[r] === "ls-remote" || s.includes("--no-recurse-submodules")) &&
    !s.some((a) => a.startsWith("--rec")) &&
    e[o + 1] === n
  );
}
var Dn = { stdout: "", stderr: "", code: 1 },
  pt = "the operation was cancelled before it started",
  gt = "the repository's git directories changed while Claude Code read its git config";
function ue(e, n) {
  return {
    stdout: "",
    stderr: `git was not run: ${n}.
`,
    code: 1,
    lane: { kind: "not_started", why: e }
  };
}
function Nn(e) {
  return {
    base: e.base,
    buildInvocation: (n, r) => {
      let o = e.buildInvocation([...n], { dir: r.dir, env: { ...r.env } }),
        s = { file: o.file, args: [...o.args], cwd: o.cwd, env: { ...o.env } };
      if (!ees(s.file) || yxe(s.file, [], s.env) === null)
        throw new R(
          "programs.buildInvocation must return an absolute path to a file named git",
          "partial-clone lane called with programs whose file is not an absolute path to git"
        );
      if (
        ![[], ["-C", r.dir], ["-C", Pn(r.dir)]].some((a) => wn(s.args, [...a, ...n])) ||
        Object.keys(r.env).some((a) =>
          Object.hasOwn(s.env, a) ? s.env[a] !== r.env[a] : !/^(?:OLD)?PWD$/i.test(a)
        ) ||
        Object.keys(s.env).some((a) => !Object.hasOwn(r.env, a))
      )
        throw new R(
          "programs.buildInvocation must return the environment it was handed, less at most PWD and OLDPWD, and the arguments it was handed, with nothing before them but -C and the directory it was handed; it changed the environment or the arguments",
          "partial-clone lane called with programs that do not keep the environment and arguments handed to them"
        );
      return s;
    }
  };
}
function Ce(e, n, r, o) {
  return e === void 0
    ? { file: n(), args: [...r], cwd: o.dir, env: o.env }
    : e.buildInvocation(r, o);
}
function Oe(e, n, r) {
  let o = Gn(e),
    s = o.run ?? xFo;
  return n === void 0
    ? o
    : {
        ...o,
        run: async (a, u) => {
          if (r.value) return { code: 1, stdout: "", stderr: "" };
          let h = await s(a, u);
          if (!(await n())) r.value = !0;
          return h;
        }
      };
}
function Gn(e) {
  return e === void 0
    ? {}
    : {
        base: e.base,
        run: (n, { cwd: r, env: o, extendEnv: s, ...a }) =>
          H4e(e.buildInvocation(n, { dir: r, env: o }), { ...a, stdin: "ignore" })
      };
}
async function mt(
  e,
  n,
  r,
  o,
  s,
  { repository: a, ...u },
  {
    programs: h,
    input: p,
    lazyFetch: S,
    fetchesFrom: y,
    ownConfigAsJudged: b,
    afterEachRead: T
  } = {}
) {
  let w = p === void 0 ? { stdin: "ignore" } : { input: p },
    x =
      y === void 0
        ? await (() => {
            let D = Ce(h, It, r, {
              dir: n,
              env: Rs(
                { ...o, ...St(s === null ? [] : ht([], s, [])) },
                { repository: a, base: h?.base, userLocale: !0 }
              )
            });
            return e(D.file, D.args, {
              ...u,
              cwd: D.cwd,
              env: D.env,
              ...(h !== void 0 && { extendEnv: !1 }),
              ...w
            });
          })()
        : Dn;
  if (x.code === 0) return { ...x, lane: { kind: "first_attempt_succeeded" } };
  let C = () => (y === void 0 ? { ...x, lane: { kind: "first_attempt_cut" } } : ue("aborted", pt));
  if (
    x.timedOut ||
    x.maxBufferExceeded ||
    u.abortSignal?.aborted ||
    (u.withoutControllingTerminal === !0 && Kg())
  )
    return C();
  let v = a ?? gU(hr(n) ?? n),
    I = await $n(n, o, {
      repoFiltersOff: s !== null,
      repository: v,
      programs: h,
      lazyFetch: S,
      fetchesFrom: y,
      ownConfigAsJudged: b,
      afterEachRead: T
    });
  if (s !== null && u.abortSignal?.aborted) return C();
  if (!I.retry)
    return {
      ...(I.forgone === void 0
        ? x
        : Ie(
            x,
            y === void 0
              ? `No lazy fetch from the promisor remote was attempted: ${I.forgone}.`
              : `The remote ${y} was not contacted: ${I.forgone}.`
          )),
      lane: { kind: "forgone", why: I.why }
    };
  t(
    y === void 0
      ? `[git] ${n} is a partial clone: retrying with ${S === "off" ? `lazy fetch off, over ${I.transports.join(" or ")}` : "a constrained lazy fetch"}`
      : `[git] ${n}: contacting the remote ${y}, over ${I.transports.join(" or ")}`
  );
  let M = Ce(h, () => I.git, r, {
      dir: n,
      env: Rs({ ...o, ...I.env }, { base: I.operatorEnv, repository: v })
    }),
    B = {
      ...(await e(M.file, M.args, { ...u, cwd: M.cwd, env: M.env, extendEnv: !1, ...w })),
      lane: { kind: "retried" }
    };
  if (B.code === 0) return B;
  let G = I.promisorUrl === void 0 ? void 0 : gd(udr(dit(I.promisorUrl)), Hn),
    F = B,
    U = Ln.exec(B.stderr)?.[1];
  if (U !== void 0 && !I.transports.includes(U)) {
    let D = I.transports.join(" or ");
    F = Ie(
      F,
      y === void 0
        ? `Nothing was fetched: a partial clone's lazy fetch runs over ${D} only, and the promisor remote the repository's own config names, ${G ?? "one it does not spell out"}, is reached over ${U}${I.promisorUrl !== void 0 && I.transports.includes(ve(I.promisorUrl)) ? ", not the transport that URL spells \u2014 a url.<base>.insteadOf rule in your git configuration, or a second promisor URL in the repository's, would account for that" : ""}.`
        : `The remote ${y} was not contacted: this command runs over ${D} only, and the URL the repository's own config gives it, ${G ?? "one it does not spell out"}, is reached over ${U}${I.promisorUrl !== void 0 && I.transports.includes(ve(I.promisorUrl)) ? `, not the transport that URL spells. A url.<base>.insteadOf rule, or a remote.${y}.url, in your own git configuration would account for that` : ""}.`
    );
  }
  if (I.userUnscopedExtraHeader)
    F = Ie(
      F,
      y === void 0
        ? `The lazy fetch did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config names as its promisor remote, here ${G ?? "one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`
        : `The command did not send your unscoped http.extraHeader: it would go to whichever host the repository's own config gives for the remote ${y}, here ${G ?? "one it does not spell out"}. Only if you recognize and trust that host, scope the header to it (http.<that url>.extraHeader); otherwise leave it as it is.`
    );
  return { ...F, stderrOfGitAlone: B.stderr };
}
var Un =
    /^(?:http\..*|url\..*\.(?:insteadof|pushinsteadof)|remote\..*\.(?:proxy|proxyauthmethod|uploadpack|receivepack|vcs)|credential\..*|core\.(?:sshcommand|askpass|gitproxy|alternaterefscommand|alternaterefsprefixes)|protocol\..*|fetch\.bundleuri|transfer\.bundleuri|bundle\..*|gpg\..*|ssh\..*)$/s,
  Wn =
    /^(?:http\.(?:postbuffer|version|lowspeedlimit|lowspeedtime|maxrequests|minsessions|maxrequestbuffer)|protocol\.version)$/s,
  Hn = { head: 70, tail: 20 };
function Ie(e, n) {
  let r = e.stderr.replace(/\n*$/, "");
  return {
    ...e,
    stderr: `${r}${
      r === ""
        ? ""
        : `
`
    }${n}
`
  };
}
function ht(e, n, r) {
  return [
    ["credential.helper", ""],
    ...e,
    ["http.extraheader", ""],
    ["core.protectNTFS", "true"],
    ["core.protectHFS", "true"],
    ...r,
    ...AFo(TFo(n.map(([o]) => o)))
  ];
}
function St(e, n) {
  return e.length === 0 ? {} : Ko(u2(n, e), (r) => r !== void 0);
}
async function $n(
  e,
  n,
  {
    repoFiltersOff: r,
    repository: o,
    programs: s,
    lazyFetch: a,
    fetchesFrom: u,
    ownConfigAsJudged: h,
    afterEachRead: p
  }
) {
  let S = { value: !1 },
    y = { retry: !1, why: "repository_moved_between_reads", forgone: gt },
    b = u ?? (await qn(e, o, s));
  if (u === void 0 && p !== void 0 && !(await p())) return y;
  if (b === null || b === void 0)
    return { retry: !1, why: b === null ? "no_promisor_remote" : "promisor_remote_unread" };
  let T = Vn(s?.base ?? e7()),
    w = s === void 0 ? kq("git", T.PATH ?? "") : "";
  if (w === null)
    return {
      retry: !1,
      why: "no_git_on_absolute_path",
      forgone:
        "no git executable is on an absolute PATH entry of the environment Claude Code was launched with"
    };
  let A = process.env,
    x = RR(A, "GIT_NO_LAZY_FETCH") ?? RR(T, "GIT_NO_LAZY_FETCH");
  if (
    [A, T].some((P) => {
      let z = RR(P, "GIT_NO_LAZY_FETCH");
      return z !== void 0 && Ne(z);
    })
  )
    return {
      retry: !1,
      why: "lazy_fetch_switched_off",
      forgone:
        u === void 0
          ? "GIT_NO_LAZY_FETCH is set"
          : "GIT_NO_LAZY_FETCH is set, which switches this command off too"
    };
  let C = [A, T].reduce((P, z) => {
    let ee = RR(z, "GIT_ALLOW_PROTOCOL")?.split(":");
    return ee === void 0 ? P : P.filter((ae) => ee.includes(ae));
  }, dt);
  if (C.length === 0)
    return {
      retry: !1,
      why: "no_transport_admitted",
      forgone: "GIT_ALLOW_PROTOCOL admits neither https nor ssh"
    };
  let v = mqn(T),
    I = await yt(
      e,
      [
        "--get-regexp",
        u === void 0
          ? "^remote\\..*\\.(uploadpack|vcs)$"
          : `^(remote\\..*\\.(uploadpack|vcs)|remotes\\.${di(u)})$`
      ],
      o,
      v.env,
      T,
      s
    );
  if (p !== void 0 && !(await p())) return y;
  if (!(I.exitCode === 1 && I.error === void 0 && !I.timedOut && !I.maxBufferExceeded)) {
    if (u !== void 0 && I.stdout.split("\x00").some((P) => P.startsWith("remotes."))) return ut(u);
    return {
      retry: !1,
      why: I.code === 0 ? "remote_names_a_program" : "remote_programs_unread",
      forgone:
        I.code === 0
          ? "a remote names an upload-pack or vcs program"
          : "git's configuration could not be read for a remote's upload-pack or vcs program"
    };
  }
  let B = await h8n(e, { envPins: n, pin: o, ...Oe(s, p, S) });
  if (S.value) return y;
  if (!B.ok) return { retry: !1, why: B.reason, forgone: mfn(B) };
  if (h !== void 0 && ![h, [...h, ...h]].some((P) => wn(B.entries, P)))
    return {
      retry: !1,
      why: "config_changed_after_checks",
      forgone: "the repository's git config changed after Claude Code checked it"
    };
  let G = B.entries.find(([P]) => {
    let z = pfn(P);
    return Un.test(z) && !Wn.test(z);
  });
  if (G !== void 0)
    return {
      retry: !1,
      why: "repository_steers_the_fetch",
      forgone: `the repository's own git config sets ${yBr(G[0])} (${RFo})`
    };
  if (u !== void 0 && B.entries.some(([P]) => pfn(P) === pfn(`remotes.${u}`))) return ut(u);
  let F = u === void 0 ? void 0 : jn(B.entries, u);
  if (F === null)
    return {
      retry: !1,
      why: "named_remote_without_url",
      forgone: `the repository's own git config must set remote.${u}.url, and to no empty value`
    };
  let U = await G_t(
    e,
    "^(credential\\.(.*\\.)?helper|core\\.sshcommand|ssh\\.variant|http\\.extraheader)$",
    { envPins: { ...n, ...v.env }, base: T, repository: o, buildInvocation: s?.buildInvocation }
  );
  if (p !== void 0 && !(await p())) return y;
  if (U === null)
    return {
      retry: !1,
      why: "user_config_unread",
      forgone: "your own git configuration could not be read"
    };
  let [D, me] = $w(U, ([P]) => P === "core.sshcommand"),
    [se, N] = $w(me, ([P]) => P === "ssh.variant"),
    [q, K] = $w(N, ([P]) => P === "http.extraheader"),
    H = RR(T, "GIT_SSH_VARIANT"),
    j = se.at(-1)?.[1],
    Z = H ?? j,
    Q = Jar(H === void 0 && j !== void 0 ? { ...T, GIT_SSH_VARIANT: j } : T, D.at(-1)?.[1]),
    Y = await h8n(e, { envPins: n, pin: o, ...Oe(s, p, S) });
  if (S.value) return y;
  if (!Y.ok || !wn(Y.entries, B.entries))
    return {
      retry: !1,
      why: Y.ok ? "config_changed_during_vet" : Y.reason,
      forgone: "the repository's git config changed while it was being vetted"
    };
  return {
    retry: !0,
    operatorEnv: T,
    git: w,
    transports: C,
    env: {
      GIT_NO_LAZY_FETCH: a === "off" || u !== void 0 ? "1" : (x ?? "0"),
      GIT_ALLOW_PROTOCOL: C.join(":"),
      GIT_SSH_COMMAND: ckn(Est(), Q.command),
      GIT_SSH_VARIANT: kZo(Z, Q.command),
      GIT_ASKPASS: n.GIT_ASKPASS ?? RR(T, "GIT_ASKPASS") ?? "",
      SSH_ASKPASS: n.SSH_ASKPASS ?? RR(T, "SSH_ASKPASS") ?? "",
      ...v.env,
      ...St(ht(K, r ? Y.entries : [], [["core.alternateRefsCommand", ":"]]), v.count)
    },
    userUnscopedExtraHeader: q.length > 0,
    promisorUrl: F ?? Y.entries.findLast(([P]) => P === `remote.${b}.url`)?.[1] ?? void 0
  };
}
function ut(e) {
  return {
    retry: !1,
    why: "named_remote_is_a_group",
    forgone: `git's configuration sets remotes.${e}, which makes that name a group of remotes`
  };
}
function jn(e, n) {
  let r = e.filter(([o]) => o === `remote.${n}.url`).map(([, o]) => o);
  return r.every((o) => o !== null && o !== "") ? (r[0] ?? null) : null;
}
var Kn = /^remote\.(.*)\.(promisor|partialclonefilter)$/s;
async function qn(e, n, r) {
  let o = await zIo(e, n, r);
  return o === null || o === void 0 ? o : (o.extension ?? o.remotes[0] ?? null);
}
async function zIo(e, n = gU(e), r) {
  let o = await yt(
    e,
    ["--get-regexp", "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$"],
    n,
    {},
    r?.base,
    r
  );
  if (o.code !== 0) return o.exitCode === 1 ? null : void 0;
  let s = null,
    a = [];
  for (let u of o.stdout.split("\x00")) {
    let h = u.indexOf(`
`),
      p = h === -1 ? u : u.slice(0, h),
      S = h === -1 ? "true" : u.slice(h + 1);
    if (p === "extensions.partialclone") {
      s = S === "" ? s : S;
      continue;
    }
    let [, y, b] = Kn.exec(p) ?? [];
    if (
      y !== void 0 &&
      !a.includes(y) &&
      (b === "partialclonefilter" || !["false", "no", "off", "0", ""].includes(S.toLowerCase()))
    )
      a.push(y);
  }
  return { extension: s, remotes: a };
}
function yt(e, n, r, o, s, a) {
  let u = Ce(a, It, [..._n, "config", "--includes", "--null", ...n], {
    dir: e,
    env: Rs(o, { base: s, repository: r })
  });
  return ct(u.file, u.args, {
    cwd: u.cwd,
    env: u.env,
    ...(s !== void 0 && { extendEnv: !1 }),
    timeout: 5000,
    preserveOutputOnError: !1,
    stdin: "ignore"
  });
}
function Vn(e) {
  let n = { ...e },
    r = O() === "windows";
  for (let o of Object.keys(n)) if (o === "PATH" || (r && o.toUpperCase() === "PATH")) delete n[o];
  return ((n.PATH = Cxe(Pi(e, "PATH") ?? "")), n);
}
var oTe = { GIT_REFERENCE_BACKEND: "files" };
var VJe = [],
  Xn = new Set(),
  fFt = { messages: VJe, inProgressToolUseIDs: Xn };
function wLr(e, n, r) {
  let o = e[n] ?? fFt,
    s = o.inProgressToolUseIDs,
    a;
  switch (r.action) {
    case "add": {
      a = new Set(s);
      for (let u of r.ids) a.add(u);
      break;
    }
    case "remove": {
      a = new Set(s);
      for (let u of r.ids) a.delete(u);
      if (a.size === s.size) return e;
      break;
    }
    case "clear":
      if (s.size === 0) return e;
      a = new Set();
      break;
    default:
      return e;
  }
  return { ...e, [n]: { ...o, inProgressToolUseIDs: a } };
}
import { sep as bt } from "path";
function aDe(e, n) {
  let r = n.endsWith(bt) ? n : n + bt;
  if (O() === "windows") return e.toLowerCase().startsWith(r.toLowerCase());
  return e.startsWith(r);
}
function One(e, n) {
  if (O() === "windows") return e.toLowerCase() === n.toLowerCase() || aDe(e, n);
  return e === n || aDe(e, n);
}
function Zn(e) {
  return e.startsWith("/") ? "/" : "\\";
}
function Q3(e, n, r) {
  let o = r ? e.toLowerCase() : e,
    s = r ? n.toLowerCase() : n;
  if (o === s) return !0;
  let a = Zn(s),
    u = s.endsWith(a) ? s : s + a;
  return o.startsWith(u);
}
class DL extends Error {
  subtype;
  constructor(e, n) {
    super(
      `control_request '${e}' got no response after ${n / 1000}s \u2014 the worker may still apply it`
    );
    this.subtype = e;
  }
}
class sTe extends Error {
  subtype;
  constructor(e) {
    super("Request was not delivered to the cloud session");
    this.subtype = e;
  }
}
function I1(e) {
  if (e instanceof Ye) return "aborted";
  if (e instanceof DL) return "timeout";
  if (e instanceof sTe) return "not_delivered";
  if (
    e instanceof Error &&
    (e.message.endsWith("Disconnected") || e.message.endsWith("Connection to remote lost"))
  )
    return "disconnected";
  if (
    e instanceof Error &&
    (e.message.endsWith("not connected") || e.message.includes("Cannot send:"))
  )
    return "not_connected";
  return "server_error";
}
async function OUs(e, n) {
  try {
    let r = await n();
    return (g(e), r);
  } catch (r) {
    if (r instanceof Ye) f(e, "aborted");
    else m(e, I1(r));
    throw r;
  }
}
function MUs(e) {
  if (e.subtype === "error" && typeof e.error === "string") return Error(e.error);
  let n =
    e.subtype === "error"
      ? "non-string error"
      : `subtype ${typeof e.subtype === "string" ? "unrecognized" : typeof e.subtype}`;
  return Error(`Malformed control_response from worker (${n})`);
}
function Yu(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}
function DUs(e) {
  let n = "";
  for (let r of Object.values(e)) if (Yu(r)) n += `${r.id}:${r.status};`;
  return n;
}
function KIo(e) {
  return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== void 0;
}
function sLr(e) {
  if (!KIo(e)) return !1;
  return (e.currentWorkAbortController?.abort(), !0);
}
function iLr(e) {
  return e.awaitingPlanApproval || e.pendingUserMessages.length > 0;
}
var aLr = 50;
function WJe(e, n) {
  if (e === void 0 || e.length === 0) return [n];
  if (e.length >= aLr) {
    let r = e.slice(-(aLr - 1));
    return (r.push(n), r);
  }
  return [...e, n];
}
function HUs(e, n) {
  let r =
    e === void 0 || e.every((o) => o.uuid !== n.uuid) ? e : e.filter((o) => o.uuid !== n.uuid);
  return WJe(r, n);
}
var Jn = {
    tryConsume() {
      return !0;
    },
    msUntilNextCall() {
      return 0;
    },
    refillsPerHour() {
      return 0;
    }
  },
  Z3 = {
    register() {},
    update() {},
    updateTranscript() {},
    getTranscript() {
      return;
    },
    remove() {},
    evictTerminal() {},
    applyOffsetsAndEvict() {},
    get() {
      return;
    },
    all() {
      return {};
    },
    getWebSearchBudget() {
      return Jn;
    },
    resetWebSearchBudget() {},
    takeConcurrencySlot() {
      return () => {};
    },
    getConcurrentSubagents() {
      return 0;
    }
  };
function V(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
var lLr = {
  local_agent: "subagent",
  local_workflow: "workflow",
  local_bash: "shell",
  monitor_mcp: "monitor",
  monitor_ws: "monitor",
  mcp_task: "MCP task",
  in_process_teammate: "teammate",
  dream: "dream",
  auto_mode_scan: "auto-mode scan",
  local_memory_import: "memory import",
  remote_agent: "cloud session"
};
function lDe(e) {
  return lLr[e] ?? e;
}
function Df(e) {
  return e.type === "local_agent" && "isObserver" in e && e.isObserver === !0;
}
function aFt(e, n, r, o) {
  if (o !== void 0 && "agentId" in e && typeof e.agentId === "string" && o(e.agentId)) return !1;
  let s = new Set(),
    a = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (a && !s.has(a)) {
    if (a === n) return !0;
    if (o?.(a)) return !1;
    s.add(a);
    let u = r[a];
    a =
      u !== void 0 &&
      u.type === "local_agent" &&
      !("forkWorker" in u && u.forkWorker === !0) &&
      "parentAgentId" in u &&
      typeof u.parentAgentId === "string"
        ? u.parentAgentId
        : void 0;
  }
  return !1;
}
function dLr(e, n) {
  let r;
  switch (e.type) {
    case "local_agent":
      r = e.parentAgentId;
      break;
    case "local_workflow":
      r = e.spawnerAgentId;
      break;
    case "local_bash":
    case "monitor_mcp":
    case "monitor_ws":
      r = e.agentId;
      break;
    default:
      return;
  }
  if (r === void 0) return;
  let o = V(n, r);
  return o?.type === "local_agent" && !Df(o) ? o.id : void 0;
}
function FK(e) {
  if (e.type === "local_agent") return !Df(e);
  return e.type === "local_workflow";
}
function vy(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  return !VIo(e);
}
function VIo(e) {
  return "isBackgrounded" in e && e.isBackgrounded === !1;
}
function cLr(e) {
  return e.type === "local_agent" && e.awaitedByCaller === !0;
}
function hqn(e) {
  return e.type === "mcp_task" && e.parked === !0;
}
function lht(e) {
  return e.type === "mcp_task" && e.holdCapped === !0;
}
function uLr(e) {
  return hqn(e) || lht(e);
}
function dht(e) {
  return (
    (e.type === "local_bash" && e.kind === "monitor") ||
    e.type === "monitor_mcp" ||
    (e.type === "monitor_ws" && e.ambient !== !0)
  );
}
function LUs(e) {
  return (
    e.type === "local_bash" &&
    e.isBackgrounded === !0 &&
    e.kind !== "monitor" &&
    e.agentId === void 0
  );
}
function Qn(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && e.frameLive?.explicit !== !0;
}
function dDe(e) {
  return Qn(e);
}
function lQ(e) {
  return e.skipTranscript === !0 || (e.type === "monitor_ws" && e.ambient === !0);
}
function lFt(e) {
  return e.type === "local_agent" ? e.agentType : void 0;
}
function ahe(e) {
  return e.type === "in_process_teammate" && e.isIdle && !iLr(e);
}
function dFt(e) {
  switch (e.type) {
    case "local_agent":
      return e.abortController?.signal.aborted === !0;
    case "in_process_teammate":
      return e.currentWorkAbortController?.signal.aborted === !0;
    default:
      return !1;
  }
}
function fLr(e) {
  return e?.type === "local_workflow";
}
var GJe = new Set(["local_agent", "in_process_teammate", "local_workflow", "dream"]);
import { access as Jr, lstat as on, readFile as Qr, realpath as sn } from "fs/promises";
import {
  basename as ze,
  dirname as qe,
  isAbsolute as an,
  join as ce,
  relative as eo,
  sep as to,
  win32 as no
} from "path";
var NUs = "/dev/null",
  gan = { GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_NOSYSTEM: "1" };
import { createHash as Yt } from "crypto";
import { lstat as De, open as qt, readlink as wr } from "fs/promises";
import { sep as ye } from "path";
function _t(e, n) {
  let r = e?.eol;
  return (
    Tt(e?.text) ??
    Tt(e?.crlf) ??
    (r === "lf" || r === "crlf"
      ? "always"
      : n?.toLowerCase() === "input" || le(n) === !0
        ? "if-text"
        : "never")
  );
}
function Tt(e) {
  switch (e) {
    case "set":
    case "input":
      return "always";
    case "unset":
      return "never";
    case "auto":
      return "if-text";
    default:
      return null;
  }
}
function le(e) {
  switch (e?.toLowerCase()) {
    case "true":
    case "yes":
    case "on":
      return !0;
    case "false":
    case "no":
    case "off":
    case "":
      return !1;
    default: {
      let n = /^\s*[+-]?(?:0x([0-9a-f]+)|(\d+))[kmg]?$/i.exec(e ?? "");
      return n === null ? null : /[^0]/.test(n[1] ?? n[2]);
    }
  }
}
var wt = 13,
  Pe = 10;
function kt(e) {
  let n = 0,
    r = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s === wt) {
      if (e[o + 1] !== Pe) return !0;
      o++;
    } else if (s === 0) return !0;
    else if (s === Pe) continue;
    else if (s === 127 || (s < 32 && s !== 8 && s !== 9 && s !== 12 && s !== 27)) r++;
    else n++;
  }
  if (e.at(-1) === 26) r--;
  return n >> 7 < r;
}
function er(e) {
  let n = e.indexOf(`\r
`);
  if (n === -1) return null;
  let r = Buffer.allocUnsafe(e.length - 1);
  e.copy(r, 0, 0, n);
  let o = n;
  for (let s = n; s < e.length; s++) if (e[s] !== wt || e[s + 1] !== Pe) r[o++] = e[s];
  return r.subarray(0, o);
}
function Et(e, n, r) {
  if (
    n === "never" ||
    (n === "if-text" &&
      (kt(e) ||
        (r !== void 0 &&
          r.includes(`\r
`) &&
          !kt(r))))
  )
    return null;
  return er(e);
}
function At(e) {
  let n = e.split("\x00");
  if (n.pop() !== "" || n.length % 3 !== 0) return null;
  let r = new Map();
  for (let o = 0; o < n.length; o += 3) {
    let s = n[o],
      a = r.get(s);
    if (a === void 0) ((a = Object.create(null)), r.set(s, a));
    a[n[o + 1]] = n[o + 2];
  }
  return r;
}
import { createHash as Ot } from "crypto";
var tr = 1e6,
  Bt = 67108864,
  nr = 1024,
  he = { sha1: 20, sha256: 32 },
  Rt = 8388608,
  Le = 12,
  rr = 8,
  or = 20,
  sr = 24,
  ir = 36,
  Be = 40,
  ar = 32768,
  ur = 16384,
  Me = 4095,
  xt = 16384,
  vt = 8192,
  lr = new Map([
    [33188, "file"],
    [33261, "executable"],
    [40960, "symlink"],
    [57344, "gitlink"]
  ]),
  dr = [0, 1, 2, 3],
  X = 8,
  cr = Buffer.alloc(0),
  fr = 47,
  Ct = 46;
async function Lt(e, n, r) {
  if (r.aborted) return { refused: "aborted" };
  let o = e.length - he[n];
  if (o < Le || e.toString("latin1", 0, 4) !== "DIRC") return { refused: "malformed" };
  let s = e.readUInt32BE(4);
  if (s !== 2 && s !== 3 && s !== 4) return { refused: "unsupported" };
  let a = e.readUInt32BE(8);
  if (a > tr) return { refused: "too-large" };
  let u = e.subarray(0, o);
  if (!Fe(e, o, e.length) && !(await _r(u, n)).equals(e.subarray(o)))
    return { refused: "wrong-checksum" };
  if (r.aborted) return { refused: "aborted" };
  let h = [],
    p = [],
    S = [],
    y = Le,
    b = 0;
  while (h.length < a) {
    if (h.length % nr === 0) await Mt();
    if (r.aborted) return { refused: "aborted" };
    p.push(y);
    let w = pr(u, y, s, he[n], h.at(-1)?.pathBytes ?? cr);
    if (typeof w === "string") return { refused: w };
    if (((b += w.entry.pathBytes.length), b > Bt)) return { refused: "too-large" };
    (h.push(w.entry), S.push(w.kept), (y = w.next));
  }
  let T = Tr(u, y) ?? kr(u, y, p, S, n);
  if (T !== null) return { refused: T };
  return h.every((w, A) => yr(w.pathBytes) && (A === 0 || br(h[A - 1], w)))
    ? { entries: h }
    : { refused: "malformed" };
}
function pr(e, n, r, o, s) {
  let a = n + Be + o;
  if (a + 4 > e.length) return "malformed";
  let u = e.readUInt16BE(a),
    h = (u & ur) !== 0,
    p = h ? e.readUInt16BE(a + 2) : 0;
  if ((p & ~(xt | vt)) !== 0 || (h && (r === 2 || p === 0))) return "unsupported";
  let S = lr.get(e.readUInt32BE(n + sr));
  if (S === void 0 || Fe(e, n + Be, a)) return "unsupported";
  let y = a + (h ? 4 : 2),
    b = u & Me,
    T = r === 4 ? mr(e, y, s) : gr(e, n, y, b);
  if (typeof T === "string") return T;
  if (Math.min(T.pathBytes.length, Me) !== b) return "malformed";
  return {
    entry: {
      pathBytes: T.pathBytes,
      kind: S,
      id: e.toString("hex", n + Be, a),
      stage: dr[(u >> 12) & 3],
      isSkipWorktree: (p & xt) !== 0,
      isIntentToAdd: (p & vt) !== 0,
      stat: {
        changedSeconds: e.readUInt32BE(n),
        modifiedSeconds: e.readUInt32BE(n + rr),
        inode: e.readUInt32BE(n + or),
        size: e.readUInt32BE(n + ir),
        isAssumedUnchanged: (u & ar) !== 0
      }
    },
    next: T.next,
    kept: T.kept ?? 0
  };
}
function gr(e, n, r, o) {
  let s = o < Me ? r + o : e.indexOf(0, r);
  if (s === -1) return "malformed";
  let a = n + ((s - n + 8) & -8);
  return a <= e.length && Fe(e, s, a) ? { pathBytes: e.subarray(r, s), next: a } : "malformed";
}
function mr(e, n, r) {
  let o = Sr(e, n, r.length),
    s = o === null ? -1 : e.indexOf(0, o.next);
  if (o === null || s === -1) return "malformed";
  let a = r.length - o.value;
  if (a + s - o.next > Bt) return "too-large";
  return {
    pathBytes: Buffer.concat([r.subarray(0, a), e.subarray(o.next, s)]),
    next: s + 1,
    kept: a
  };
}
function Sr(e, n, r) {
  let o = -1;
  for (let s = n; s < e.length; s++) {
    if (((o = (o + 1) * 128 + (e[s] & 127)), o > r)) return null;
    if ((e[s] & 128) === 0) return { value: o, next: s + 1 };
  }
  return null;
}
function yr(e) {
  let n = 0;
  for (let r = 0; r <= e.length; r++)
    if (r === e.length || e[r] === fr) {
      let o = r - n;
      if (o === 0 || (e[n] === Ct && (o === 1 || (o === 2 && e[n + 1] === Ct)))) return !1;
      n = r + 1;
    } else if (e[r] === 0) return !1;
  return !0;
}
function br(e, n) {
  let r = Buffer.compare(e.pathBytes, n.pathBytes);
  return r < 0 || (r === 0 && e.stage < n.stage);
}
function Tr(e, n) {
  let r = n;
  while (r < e.length) {
    if (r + X > e.length) return "malformed";
    if (e[r] < 65 || e[r] > 90) return "unsupported";
    r += X + e.readUInt32BE(r + 4);
  }
  return r === e.length ? null : "malformed";
}
function kr(e, n, r, o, s) {
  let a = he[s],
    u = (v) => {
      let I = e.length - X - 4 - v;
      return (
        I >= Le && e.toString("latin1", I, I + 4) === "EOIE" && e.readUInt32BE(I + 4) === 4 + v
      );
    },
    h = Object.values(he).some((v) => v !== a && u(v)),
    p = u(a);
  if (h) return "unsupported";
  let S = [];
  for (let v = n; v < e.length;) {
    let I = e.readUInt32BE(v + 4);
    (S.push({ name: e.toString("latin1", v, v + 4), at: v, size: I }), (v += X + I));
  }
  let y = S.at(-1),
    b = e.length - X - 4 - a;
  if (p) {
    if (y?.at !== b || y.name !== "EOIE") return "unsupported";
    let v = Ot(s);
    for (let M of S.slice(0, -1)) v.update(e.subarray(M.at, M.at + X));
    let I = b + X;
    if (e.readUInt32BE(I) !== n || !v.digest().equals(e.subarray(I + 4, I + 4 + a)))
      return "unsupported";
  }
  let T = S.filter((v) => v.name === "IEOT");
  if (T.length === 0) return null;
  if (!p || T.length > 1) return "unsupported";
  let { at: w, size: A } = T[0],
    x = w + X;
  if (A < 4 || (A - 4) % 8 !== 0 || e.readUInt32BE(x) !== 1) return "unsupported";
  let C = 0;
  for (let v = x + 4; v < x + A; v += 8) {
    if (e.readUInt32BE(v) !== r[C] || (o[C] ?? 0) > 0) return "unsupported";
    C += e.readUInt32BE(v + 4);
  }
  return C === r.length ? null : "unsupported";
}
function Fe(e, n, r) {
  for (let o = n; o < r; o++) if (e[o] !== 0) return !1;
  return !0;
}
async function _r(e, n) {
  let r = Ot(n);
  for (let o = 0; o < e.length; o += Rt) (r.update(e.subarray(o, o + Rt)), await Mt());
  return r.digest();
}
function Mt() {
  return new Promise((e) => setImmediate(e));
}
var Er = 268435456,
  Ar = 100663296,
  Vt = 1e7,
  Xt = 67108864,
  ne = 500,
  Rr = 40000000,
  xr = 200000000,
  Ir = 2000000,
  Dt = 32,
  vr = 5000000,
  Nt = 256,
  Cr = 1048576,
  Or = 8000,
  Ge = 33188,
  Ue = 33261,
  We = 40960,
  He = 57344,
  Gt = 61440,
  $e = { file: Ge, executable: Ue, symlink: We, gitlink: He },
  Pr =
    "^(core\\.(autocrlf|filemode|symlinks|trustctime|checkstat|quotepath|sparsecheckout)|sparse\\.expectfilesoutsideofpatterns|extensions\\.objectformat)$";
async function je(e, n, r, o, s, a = ye === "\\") {
  let u = { repoDir: e, onWindows: a, spawn: n, signal: s, deadline: Date.now() + o },
    h = Ut.get(n);
  if (h === void 0) ((h = Lr(u)), Ut.set(n, h));
  let [p, S] = await Promise.all([h, r.from === "commit" ? Nr(u, r.revision) : new Map()]);
  if (!p || !S) return null;
  let { settings: y, index: b } = p;
  if (r.to === "work-tree") p.workTree ??= Gr(u, y, b).catch(() => null);
  let T = r.to === "index" ? { sides: b.sides, unseen: new Set() } : await p.workTree;
  if (!T) return null;
  let { sides: w, unseen: A } = T,
    x =
      r.from === "index"
        ? new Map(
            [...b.sides, ...Array.from(b.intended).filter(([N]) => !w.has(N))].filter(
              ([N]) => !A.has(N)
            )
          )
        : S,
    C = [];
  for (let [N, q] of w) {
    let K = x.get(N);
    if (K?.mode !== q.mode || K?.id !== q.id || q.bytes !== void 0) C.push(N);
  }
  for (let N of x.keys()) if (!w.has(N)) C.push(N);
  C.sort();
  let v = new Map();
  if (
    (
      await Promise.all(C.map((N) => Jt(u.repoDir, re(N), v, u.onWindows).catch(() => !0)))
    ).includes(!0)
  )
    return null;
  let M = await $r(u, C);
  if (M === null) return null;
  let B = _e(Buffer.alloc(0), y.objectFormat),
    G = [],
    F = [],
    U = { bytes: 0 },
    D = 0,
    me = xr,
    se = 0;
  for (let N = 0; N < C.length; N += ne) {
    let q = C.slice(N, N + ne);
    if ((await new Promise((H) => setImmediate(H)), be(u))) D = ne;
    let K =
      D < ne
        ? await jr(
            u,
            q.flatMap((H) =>
              [x.get(H), w.get(H), b.sides.get(H)].flatMap((j) =>
                j !== void 0 && j.mode !== He && !j.bytes && !j.uncounted && j.id !== B
                  ? [j.id]
                  : []
              )
            ),
            U
          )
        : new Map();
    if (K === null) return null;
    K.set(B, "");
    for (let H of q) {
      let j = M.get(H),
        Z = x.get(H),
        Q = w.get(H),
        Y = b.sides.get(H)?.id ?? "",
        P = zr(
          Q,
          _t(j, y.autocrlf),
          K.get(Y) ?? (Q?.id === Y ? Q.bytes?.toString("latin1") : void 0),
          y.objectFormat
        );
      if (Z?.mode === P?.mode && Z?.id === P?.id) continue;
      let [z, ee] = [Ht(Z, K), Ht(P, K)],
        ae = Xr(H, y.quotesPaths);
      if (
        (G.push(Br(Z, P, ae)),
        D >= ne || z === null || ee === null || $t(Z, z, j?.diff) || $t(P, ee, j?.diff))
      ) {
        F.push(`-	-	${ae}`);
        continue;
      }
      let Ae = Math.min(Rr, me),
        Re = { left: Ae },
        { added: En, removed: An } = Kr(z, ee, Re);
      if (
        (F.push(`${En}	${An}	${ae}`),
        D++,
        (me -= Ae - Math.max(0, Re.left)),
        (se += Ae - Math.max(0, Re.left)),
        se > vr)
      ) {
        if (((se = 0), await new Promise((Rn) => setImmediate(Rn)), be(u))) D = ne;
      }
    }
  }
  return [...G, ...F].join(`
`);
}
function Br(e, n, r) {
  let o = !e ? "A" : !n ? "D" : (e.mode & Gt) !== (n.mode & Gt) ? "T" : "M",
    s = (a) => (a?.mode ?? 0).toString(8).padStart(6, "0");
  return `:${s(e)} ${s(n)} 0000000 0000000 ${o}	${r}`;
}
var Ut = new WeakMap();
async function Lr(e) {
  let n = await Mr(e),
    r = n && (await Fr(e, n.objectFormat));
  return n && r && { settings: n, index: r };
}
function be({ signal: e, deadline: n }) {
  return e?.aborted === !0 || Date.now() > n;
}
function de({ repoDir: e, spawn: n, signal: r, deadline: o }, s, a) {
  return ct(It(), ["--literal-pathspecs", ..._n, ...s], {
    ...n,
    cwd: e,
    timeout: Math.max(1, o - Date.now()),
    abortSignal: r,
    preserveOutputOnError: !1,
    maxBuffer: Ar,
    encoding: "latin1",
    stripFinalNewline: !1,
    ...(a === void 0 ? { stdin: "ignore" } : { input: a })
  });
}
async function Mr(e) {
  let { stdout: n, exitCode: r } = await de(e, ["config", "-z", "--get-regexp", Pr]);
  if (r !== 0 && r !== 1) return null;
  let o = new Map();
  for (let s of n.split("\x00")) {
    let [a = "", u] = s.split(
      `
`,
      2
    );
    o.set(a, u ?? "true");
  }
  return {
    objectFormat: o.get("extensions.objectformat") === "sha256" ? "sha256" : "sha1",
    autocrlf: o.get("core.autocrlf") ?? null,
    trustsExecutableBit: Se(o.get("core.filemode")),
    hasSymlinks: Se(o.get("core.symlinks")),
    trustsChangeTime: Se(o.get("core.trustctime")),
    checksWholeStat: o.get("core.checkstat")?.toLowerCase() !== "minimal",
    quotesPaths: Se(o.get("core.quotepath")),
    looksAtSkippedFilesThatAreThere:
      le(o.get("core.sparsecheckout")) === !0 &&
      le(o.get("sparse.expectfilesoutsideofpatterns")) !== !0
  };
}
function Se(e) {
  return le(e) !== !1;
}
async function Fr({ spawn: e, signal: n }, r) {
  let o = e.env.GIT_INDEX_FILE;
  if (o === void 0) return null;
  let s;
  try {
    s = await qt(o, vc());
  } catch (a) {
    return E(a) === "ENOENT"
      ? { entries: [], sides: new Map(), intended: new Map(), modifiedSeconds: 0 }
      : null;
  }
  try {
    let a = await s.stat(),
      u = await Ww(s, Er, a.size),
      h = u.overLimit ? null : await Lt(u.bytes, r, n ?? new AbortController().signal);
    if (h === null || "refused" in h) return null;
    let p = h.entries.map((y) => ({
      path: y.pathBytes.toString("latin1"),
      entry: y,
      stat: y.stat
    }));
    if (!p.every(({ path: y }) => Zt(y))) return null;
    let S = p
      .filter(({ entry: y }) => y.stage === 0)
      .map(({ path: y, entry: b }) => ({
        isIntended: b.isIntentToAdd,
        row: [y, { mode: $e[b.kind], id: b.id }]
      }));
    return {
      entries: p,
      sides: new Map(S.filter((y) => !y.isIntended).map((y) => y.row)),
      intended: new Map(S.filter((y) => y.isIntended).map((y) => y.row)),
      modifiedSeconds: Math.floor(a.mtimeMs / 1000)
    };
  } catch {
    return null;
  } finally {
    await s.close().catch(() => {
      return;
    });
  }
}
var Dr = /^(?:\.git|git~1)[. ]*(?::|$)/i;
function Zt(e, n = ye === "\\") {
  if (/^\/|\/\/|\/$/.test(e)) return !1;
  if (!/\.\.|\.git|git~1|[\\:]/i.test(e)) return !0;
  let r = e.split(/[/\\]/);
  if (r.some((o) => Dr.test(o))) return !1;
  return n ? !/[:\\]/.test(e) && r.every((o) => K1(o) !== "..") : !e.split("/").includes("..");
}
async function Nr(e, n) {
  let { stdout: r, code: o } = await de(e, ["ls-tree", "-r", "-z", "--full-tree", n]);
  if (o !== 0) return null;
  let s = new Map();
  for (let a of r.split("\x00")) {
    let u = /^(\d{6}) \S+ ([0-9a-f]{40,64})\t(.+)$/s.exec(a);
    if (u) s.set(u[3], { mode: parseInt(u[1], 8), id: u[2] });
  }
  if (![...s.keys()].every((a) => Zt(a))) return null;
  return s;
}
async function Gr(e, n, r) {
  let { repoDir: o } = e,
    s = new Map(),
    a = new Set(),
    u = new Map([["", Promise.resolve(!0)]]),
    h = { bytes: 0 },
    p = [];
  for (let [S, y] of r.entries.entries()) {
    let { path: b, entry: T, stat: w } = y;
    if (
      T.stage === 0 &&
      (w.isAssumedUnchanged || (T.isSkipWorktree && !n.looksAtSkippedFilesThatAreThere))
    )
      s.set(b, { mode: $e[T.kind], id: T.id });
    else if (b !== r.entries[S - 1]?.path) p.push(y);
  }
  for (let S = 0; S < p.length; S += Nt) {
    if (be(e)) return null;
    let y = p.slice(S, S + Nt),
      b = new Map(
        await Promise.all(
          L(y.map(({ path: A }) => re(A))).map(async (A) => [
            A,
            await Qt(o, A, u).catch(() => {
              return;
            })
          ])
        )
      );
    if (e.onWindows && [...b.values()].includes(void 0)) return null;
    let T = await Promise.all(
        y.map(({ path: A }) =>
          b.get(re(A)) === !1
            ? "ENOTDIR"
            : b.get(re(A)) === void 0
              ? "EACCES"
              : De(Te(o, A)).catch(E)
        )
      ),
      w = await Promise.all(
        y.map((A, x) =>
          Ur(A, T[x], { lookup: e, settings: n, indexModifiedSeconds: r.modifiedSeconds, held: h })
        )
      );
    for (let [A, x] of w.entries()) {
      if (x === "cannot-tell") return null;
      if (x === "unseen") a.add(y[A].path);
      else if (x !== null) s.set(y[A].path, x);
    }
  }
  return { sides: s, unseen: a };
}
function Ur({ path: e, entry: n, stat: r }, o, s) {
  let a = { mode: $e[n.kind], id: n.id };
  if (o === void 0 || typeof o === "string") {
    if (o !== "ENOENT" && o !== "ENOTDIR") return "unseen";
    return n.isSkipWorktree ? a : null;
  }
  if (o.isDirectory()) return n.kind === "gitlink" ? a : null;
  if (!o.isFile() && !o.isSymbolicLink()) return null;
  let { settings: u } = s,
    h = o.isSymbolicLink() || (!u.hasSymlinks && n.kind === "symlink"),
    p = u.trustsExecutableBit ? (o.mode & 64) !== 0 : n.kind === "executable",
    S = h ? We : p ? Ue : Ge;
  if (n.stage === 0 && S === a.mode && Hr(r, o, u, s.indexModifiedSeconds)) return a;
  if (o.isSymbolicLink()) return Wt(e, S, a.id, "link", s);
  let y = o.size <= Vt && s.held.bytes + o.size <= Xt ? o.size : 0;
  return ((s.held.bytes += y), Wt(e, S, a.id, y, s));
}
async function Wt(e, n, r, o, { lookup: s, settings: a, held: u }) {
  let h = Te(s.repoDir, e);
  try {
    if (o === "link") {
      let S = await wr(h, { encoding: "buffer" });
      return { mode: n, id: _e(S, a.objectFormat), bytes: S };
    }
    let p = await Wr(h, n, r, s, a, o);
    if (p === null || p === "cannot-tell" || !p.bytes) u.bytes -= o;
    return p;
  } catch (p) {
    u.bytes -= o === "link" ? 0 : o;
    let S = E(p);
    return S === "ENOENT" || S === "ENOTDIR" || S === "ELOOP" ? null : "cannot-tell";
  }
}
async function Wr(e, n, r, o, { objectFormat: s }, a) {
  let u = await qt(e, vc());
  try {
    let h = await u.stat();
    if (!h.isFile()) return null;
    let { size: p } = h;
    if (p > a) {
      let b = Yt(s).update(`blob ${p}\x00`),
        T = Buffer.allocUnsafe(Cr);
      for (let w = 0; w < p;) {
        if (be(o)) return "cannot-tell";
        let { bytesRead: A } = await u.read(T, 0, T.length, w);
        if (A === 0) break;
        (b.update(T.subarray(0, A)), (w += A));
      }
      return { mode: n, id: b.digest("hex"), uncounted: !0 };
    }
    let { bytes: S } = await Ww(u, p, p),
      y = _e(S, s);
    return y === r &&
      !S.includes(`\r
`)
      ? { mode: n, id: y }
      : { mode: n, id: y, bytes: S };
  } finally {
    await u.close().catch(() => {
      return;
    });
  }
}
function Hr(e, n, { trustsChangeTime: r, checksWholeStat: o }, s) {
  return (
    e.size !== 0 &&
    e.size === n.size % 4294967296 &&
    e.modifiedSeconds === Math.floor(n.mtimeMs / 1000) &&
    e.modifiedSeconds < s &&
    (!o ||
      ((!r || e.changedSeconds === Math.floor(n.ctimeMs / 1000)) &&
        (e.inode === 0 || e.inode === n.ino % 4294967296)))
  );
}
function re(e) {
  return e.slice(0, Math.max(0, e.lastIndexOf("/")));
}
function Jt(e, n, r, o) {
  if (n === "") return Promise.resolve(!1);
  let s = r.get(n);
  if (s === void 0)
    ((s = Jt(e, re(n), r, o).then(
      (a) =>
        a ||
        De(Te(e, n)).then(
          (u) => u.isSymbolicLink(),
          (u) => {
            let h = E(u);
            if (h === "ENOENT" || h === "ENOTDIR" || (h === "EACCES" && !o)) return !1;
            throw u;
          }
        )
    )),
      r.set(n, s));
  return s;
}
function Qt(e, n, r) {
  let o = r.get(n);
  if (o === void 0)
    ((o = Qt(e, re(n), r).then(
      (s) =>
        s &&
        De(Te(e, n)).then(
          (a) => a.isDirectory(),
          (a) => {
            let u = E(a);
            if (u === "ENOENT" || u === "ENOTDIR") return !1;
            throw a;
          }
        )
    )),
      r.set(n, o));
  return o;
}
function Te(e, n) {
  return Buffer.byteLength(n) === n.length
    ? e + ye + n
    : Buffer.concat([Buffer.from(e + ye), Buffer.from(n, "latin1")]);
}
async function $r(e, n) {
  if (n.length === 0) return new Map();
  let { stdout: r, code: o } = await de(
    e,
    ["check-attr", "-z", "--stdin", "text", "crlf", "eol", "diff"],
    Buffer.from(n.map((s) => `${s}\x00`).join(""), "latin1")
  );
  return o === 0 ? At(r) : null;
}
async function jr(e, n, r) {
  let o = L(n);
  if (o.length === 0) return new Map();
  let s = await de(
    e,
    ["cat-file", "--batch-check=%(objectname) %(objecttype) %(objectsize)"],
    Buffer.from(
      o
        .map(
          (S) => `${S}
`
        )
        .join("")
    )
  );
  if (s.code !== 0 || / missing$/m.test(s.stdout)) return null;
  let a = s.stdout
      .split(
        `
`
      )
      .flatMap((S) => {
        let y = /^([0-9a-f]{40,64}) blob (\d+)$/.exec(S),
          b = Number(y?.[2]);
        if (!y || b > Vt || r.bytes + b > Xt) return [];
        return ((r.bytes += b), [y[1]]);
      }),
    u = new Map();
  if (a.length === 0) return u;
  let { stdout: h, code: p } = await de(
    e,
    ["cat-file", "--batch"],
    Buffer.from(
      a
        .map(
          (S) => `${S}
`
        )
        .join("")
    )
  );
  if (p !== 0) return null;
  for (let S = 0; S < h.length;) {
    let y = h.indexOf(
        `
`,
        S
      ),
      b = /^([0-9a-f]{40,64}) blob (\d+)$/.exec(h.slice(S, y));
    if (y === -1 || !b) return null;
    let T = y + 1 + Number(b[2]);
    (u.set(b[1], h.slice(y + 1, T)), (S = T + 1));
  }
  return u;
}
function zr(e, n, r, o) {
  if (e?.bytes === void 0 || e.mode === We) return e;
  let s = Et(
    e.bytes,
    n,
    n === "if-text" &&
      r?.includes(`\r
`)
      ? Buffer.from(r, "latin1")
      : void 0
  );
  return s === null ? e : { mode: e.mode, id: _e(s, o), bytes: s };
}
function _e(e, n) {
  return Yt(n).update(`blob ${e.length}\x00`).update(e).digest("hex");
}
function Ht(e, n) {
  if (e === void 0) return "";
  if (e.mode === He)
    return `Subproject commit ${e.id}
`;
  if (e.uncounted) return null;
  return e.bytes?.toString("latin1") ?? n.get(e.id) ?? null;
}
function $t(e, n, r) {
  if ((e?.mode === Ge || e?.mode === Ue) && (r === "set" || r === "unset")) return r === "unset";
  let s = n.indexOf("\x00");
  return s !== -1 && s < Or;
}
function Kr(e, n, r) {
  let [o, s] = qr(e, n),
    a = { added: zt(s), removed: zt(o) };
  if (((r.left -= (a.added + a.removed) * Dt), r.left < 0)) return a;
  let [u, h] = [Kt(o), Kt(s)],
    p = { added: 0, removed: 0 },
    S = [[0, u.length, 0, h.length]];
  for (let y = S.pop(); y !== void 0; y = S.pop()) {
    let [b = 0, T = 0, w = 0, A = 0] = y;
    while (b < T && w < A && u[b] === h[w]) (b++, w++);
    while (b < T && w < A && u[T - 1] === h[A - 1]) (T--, A--);
    let [x, C] = [T - b, A - w];
    if (x === 0 || C === 0) {
      ((p.removed += x), (p.added += C));
      continue;
    }
    let [v, I] = [u.slice(b, T), h.slice(w, A)],
      M = jt(v, I, r, Ir);
    if (M === null) {
      r.left -= (x + C) * Dt;
      let B = r.left < 0 ? [] : Yr(v, I);
      if (B.length > 0) {
        let [G, F] = [b, w];
        for (let [U, D] of B) (S.push([G, b + U, F, w + D]), (G = b + U + 1), (F = w + D + 1));
        S.push([G, T, F, A]);
        continue;
      }
      M = jt(v, I, r, r.left) ?? x + C;
    }
    ((p.added += (M + C - x) / 2), (p.removed += (M - C + x) / 2));
  }
  return p;
}
function jt(e, n, r, o) {
  let s = Math.min(o, r.left),
    a = 0,
    u = Math.min(e.length + n.length, Math.ceil(Math.sqrt(2 * Math.max(0, s)))),
    h = new Int32Array(2 * u + 3),
    p = u + 1;
  for (let S = 0; S <= u && a <= s; S++)
    for (let y = -S; y <= S; y += 2) {
      let [b, T] = [h[p + y - 1], h[p + y + 1]],
        w = y === -S || (y !== S && b < T) ? T : b + 1,
        A = w;
      while (A < e.length && A - y < n.length && e[A] === n[A - y]) A++;
      if (((h[p + y] = A), (a += 1 + A - w), A >= e.length && A - y >= n.length))
        return ((r.left -= a), S);
    }
  return ((r.left -= a), null);
}
function Yr(e, n) {
  let o = new Map();
  for (let [p, S] of n.entries()) o.set(S, o.has(S) ? -1 : p);
  let s = new Map();
  for (let [p, S] of e.entries()) s.set(S, s.has(S) ? -1 : p);
  let a = [],
    u = [];
  for (let [p, S] of s) {
    let y = o.get(p) ?? -1;
    if (S === -1 || y === -1) continue;
    let b = 0,
      T = u.length;
    while (b < T) {
      let w = (b + T) >> 1;
      if (a[u[w]].newAt < y) b = w + 1;
      else T = w;
    }
    (a.push({ oldAt: S, newAt: y, previous: b === 0 ? -1 : u[b - 1] }), (u[b] = a.length - 1));
  }
  let h = [];
  for (let p = u.at(-1) ?? -1; p !== -1; p = a[p].previous) h.push([a[p].oldAt, a[p].newAt]);
  return h.reverse();
}
function qr(e, n) {
  let r = Math.min(e.length, n.length),
    o = 0;
  while (o < r && e.charCodeAt(o) === n.charCodeAt(o)) o++;
  o =
    o === 0
      ? 0
      : e.lastIndexOf(
          `
`,
          o - 1
        ) + 1;
  let s = 0;
  while (s < r - o && e.charCodeAt(e.length - 1 - s) === n.charCodeAt(n.length - 1 - s)) s++;
  let a = e.indexOf(
    `
`,
    e.length - s
  );
  return (
    (s = s === 0 || a === -1 ? 0 : e.length - a - 1),
    [e.slice(o, e.length - s), n.slice(o, n.length - s)]
  );
}
function zt(e) {
  let n =
    e === "" ||
    e.endsWith(`
`)
      ? 0
      : 1;
  for (let r = 0; r < e.length; r++) if (e.charCodeAt(r) === 10) n++;
  return n;
}
function Kt(e) {
  return e === "" ? [] : (e.match(/[^\n]*\n|[^\n]+$/g) ?? []);
}
var Vr = new Map([
  [7, "\\a"],
  [8, "\\b"],
  [9, "\\t"],
  [10, "\\n"],
  [11, "\\v"],
  [12, "\\f"],
  [13, "\\r"],
  [34, '\\"'],
  [92, "\\\\"]
]);
function Xr(e, n) {
  if (!(n ? /[^\x20-\x7e]|["\\]/ : /[^\x20-\x7e\x80-\xff]|["\\]/).test(e))
    return Buffer.from(e, "latin1").toString("utf8");
  let o = Array.from(e, (s) => {
    let a = s.charCodeAt(0);
    return (
      Vr.get(a) ??
      (a < 32 || a === 127 || (n && a >= 128) ? `\\${a.toString(8).padStart(3, "0")}` : s)
    );
  }).join("");
  return `"${Buffer.from(o, "latin1").toString("utf8")}"`;
}
var han = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;
function pLr(e) {
  return han.test(e);
}
var Zr = /\p{Cs}/u;
function iTe(e) {
  return pLr(e) || Zr.test(e);
}
function zJe(e, n) {
  return e.split(/\r?\n/).some(iTe)
    ? `${n} is not shown here because it holds hidden or control characters`
    : e;
}
function YF(e) {
  return iTe(e) ? "a path not shown here because it holds hidden or control characters" : e;
}
var Je = ["--no-optional-locks", "-c", "diff.relative=false", "diff", ...eZo, q_],
  ede = 5000,
  ge = 50,
  ro = 500,
  mLr = 1e6,
  yan = 400,
  J = 500;
async function yqn(e, n, r = "auto", o, s) {
  if (o === void 0 && !uFt()) return null;
  if (await dn(n, o, s)) return null;
  if (r === "branch") {
    let S = await en(e, n, !0, o, void 0, s);
    return S === "base-stats-failed" ? null : S;
  }
  let a = await pe("HEAD", n, o, s);
  if (a === null) return Ve(n, o, s);
  if (a.stats.filesCount > J) return { ...a, hunks: new Map(), source: { kind: "working-tree" } };
  if (r === "session")
    return (
      await Promise.all([so(a, o), we(a, n, o, void 0, !0, s)]),
      { ...a, hunks: new Map(), source: { kind: "working-tree" } }
    );
  let u = await we(a, n, o, void 0, !1, s);
  if (r === "branch-point") return oo(e, n, a, o, s);
  if (r === "uncommitted" || a.stats.filesCount > 0)
    return { ...a, hunks: new Map(), source: { kind: "working-tree" } };
  let h = await en(e, n, !1, o, u, s),
    p = { ...a, hunks: new Map(), source: { kind: "working-tree" } };
  if (h === "base-stats-failed") return un(p, o);
  if (h === null || h.stats.filesCount === 0) return p;
  return h;
}
function un(e, n) {
  return n === void 0 || e.stats.filesCount > 0 ? e : null;
}
async function en(e, n, r, o, s, a) {
  let u = await fn(e, n, o, void 0, a);
  if (u.kind === "error") return r ? Ve(n, o, a) : null;
  let h, p;
  if (u.kind !== "merge-base") {
    if (!r) return null;
    ((h = await pe("HEAD", n, o, a)),
      (p =
        u.kind === "head-is-base"
          ? { kind: "branch", baseBranch: u.baseBranch, baseRef: "HEAD" }
          : { kind: "working-tree" }));
  } else
    ((h = await pe(u.mergeBase, n, o, a)),
      (p = { kind: "branch", baseBranch: u.baseBranch, baseRef: u.mergeBase }));
  if (h === null) return u.kind === "merge-base" ? "base-stats-failed" : Ve(n, o, a);
  if (h.stats.filesCount <= J) await we(h, n, o, s, !1, a);
  return { ...h, hunks: new Map(), source: p };
}
async function oo(e, n, r, o, s) {
  let a = { ...r, hunks: new Map(), source: { kind: "working-tree" } },
    u = gn(o ?? ban());
  if (u === null) return a;
  let h = await fn(e, n, o, u, s);
  if (h.kind !== "merge-base") return a;
  let p = await pe(h.mergeBase, n, o, s, J);
  if (p === null) return un(a, o);
  if (p.stats.filesCount === 0) return a;
  let S = { ...p.stats },
    y = new Map();
  for (let [b, T] of r.perFileStats) {
    let w = p.perFileStats.get(b);
    if (!T.isUntracked) {
      let { previousPath: A, newPath: x, ...C } = T;
      y.set(b, w ?? (T.previousPath === void 0 ? T : C));
      continue;
    }
    if ((y.set(b, T), w === void 0)) S.filesCount += 1;
    else ((S.linesAdded -= w.added), (S.linesRemoved -= w.removed));
  }
  for (let [b, T] of p.perFileStats) {
    if (y.size >= ge) break;
    if (!y.has(b)) y.set(b, T);
  }
  return {
    stats: S,
    perFileStats: y,
    hunks: new Map(),
    source: { kind: "branch", baseBranch: h.baseBranch, baseRef: h.mergeBase }
  };
}
async function so(e, n) {
  if (e.perFileStats.size === 0) return;
  let r = n ?? ban(),
    o = SYe();
  await Promise.all(
    Array.from(e.perFileStats, async ([s, a]) => {
      try {
        let u = await on(ce(r, s));
        if (Math.max(u.mtimeMs, u.ctimeMs) < o) a.preSession = !0;
      } catch {}
    })
  );
}
async function we(e, n, r, o, s = !1, a) {
  let u = ge - e.perFileStats.size;
  if (u <= 0) return null;
  let h = o !== void 0 ? o : await ho(u, n, r, s, a);
  if (h)
    for (let [p, S] of h) {
      if (e.perFileStats.has(p)) continue;
      (e.perFileStats.set(p, S), (e.stats.filesCount += 1));
    }
  return h;
}
async function Ve(e, n, r) {
  if (
    (
      await it(It(), ["--no-optional-locks", "rev-parse", "--verify", "--quiet", "HEAD"], {
        timeout: ede,
        preserveOutputOnError: !1,
        abortSignal: e,
        ...oe(n, r),
        cwd: n
      })
    ).exitCode !== 1
  )
    return null;
  let s = {
      stats: { filesCount: 0, linesAdded: 0, linesRemoved: 0 },
      perFileStats: new Map(),
      hunks: new Map(),
      source: { kind: "working-tree" },
      noCommits: !0
    },
    a = await pe("--cached", e, n, r);
  if (a !== null) {
    if (((s.stats = a.stats), (s.perFileStats = a.perFileStats), a.stats.filesCount > J)) return s;
    if (a.stats.filesCount > 0) await io(s, e, n, r);
  }
  return (await we(s, e, n, void 0, !1, r), s);
}
async function io(e, n, r, o) {
  let s = await ln(n, r, o);
  if (s === null) return;
  for (let [a, u] of s.perFileStats) {
    let h = e.perFileStats.get(a);
    if (h === void 0) continue;
    let p = h.isBinary || u.isBinary,
      S = p ? 0 : Math.max(0, h.added + u.added - u.removed);
    ((e.stats.linesAdded += S - h.added),
      e.perFileStats.set(a, {
        ...h,
        added: S,
        removed: 0,
        isBinary: p,
        ...(u.status === "removed" && { status: "removed" })
      }));
  }
}
async function ln(e, n, r) {
  if (Qe(r)) {
    let s = n === void 0 ? null : await je(n, r, { from: "index", to: "work-tree" }, ede, e);
    return s === null ? null : _qn(s, Number.POSITIVE_INFINITY, "within-root");
  }
  let o = await it(It(), [...Je, "--raw", "--numstat"], {
    timeout: ede,
    preserveOutputOnError: !1,
    abortSignal: e,
    ...oe(n, r, { userLocale: !0 }),
    cwd: n
  });
  if (o.code !== 0) return null;
  return _qn(o.stdout, Number.POSITIVE_INFINITY, r === void 0 ? "all" : "within-root");
}
function Qe(e) {
  return e !== void 0 && $Z();
}
async function pe(e, n, r, o, s = ge) {
  if (o === void 0) {
    let { stdout: h, code: p } = await Ee([e, "--shortstat"], n, r, o);
    if (p === 0) {
      let S = bqn(h);
      if (S && S.filesCount > J) return { stats: S, perFileStats: new Map() };
    }
  }
  let a;
  if (Qe(o)) {
    let h =
      r === void 0
        ? null
        : await je(
            r,
            o,
            e === "--cached"
              ? { from: "nothing", to: "index" }
              : { from: "commit", revision: e, to: "work-tree" },
            ede,
            n
          );
    if (h === null) return null;
    a = h;
  } else {
    let { stdout: h, code: p } = await Ee([e, "--raw", "--numstat"], n, r, o);
    if (p !== 0) return null;
    a = h;
  }
  let u = _qn(a, s, o === void 0 ? "all" : "within-root");
  if (o !== void 0 && u.stats.filesCount > J) return { stats: u.stats, perFileStats: new Map() };
  return u;
}
function Ee(e, n, r, o) {
  let s = [...Je, ...e],
    a = { timeout: ede, preserveOutputOnError: !1, abortSignal: n };
  if (r !== void 0) return it(It(), s, { ...a, ...oe(r, o), cwd: r, stdin: "ignore" });
  return gqn(ie().cwd(), s, {}, a);
}
function _an(e) {
  let n = bye(e);
  return n !== null && n.workTree !== null && n.gitDir === ce(n.workTree, ".git") ? n : null;
}
function ao(e) {
  return {
    env: {
      ...Rs(oTe, { base: Mo(), repository: _an(e) ?? { gitDir: R8, workTree: e, commonDir: R8 } }),
      ...gan,
      ...u2(void 0, G4e()),
      [wst]: "1"
    },
    extendEnv: !1,
    gitStartsIn: fSe.filesystemRoot()
  };
}
function uo(e) {
  return {
    env: {
      ...Rs(oTe, { base: Mo(), repository: { gitDir: R8, workTree: e, commonDir: R8 } }),
      ...gan,
      [wst]: "1"
    },
    extendEnv: !1,
    gitStartsIn: fSe.filesystemRoot()
  };
}
function oe(e, n, { userLocale: r } = {}) {
  if (e === void 0) return { env: Rs(void 0, { userLocale: r }) };
  return n ?? uo(e);
}
function cFt(e) {
  if (e.noCommits) return "--cached";
  return e.source.kind === "branch" ? e.source.baseRef : "HEAD";
}
async function $Us(e, n = "HEAD") {
  if (!uFt()) return null;
  if (await dn(e, void 0, void 0)) return null;
  let { stdout: r, code: o } = await Ee([n, "--shortstat"], e, void 0, void 0);
  if (o === 0) {
    let h = bqn(r);
    if (h && h.filesCount > J) return { hunks: new Map(), skippedLarge: new Set() };
  }
  let { stdout: s, code: a } = await Ee([...C4t, n], e, void 0, void 0);
  if (a !== 0) return null;
  let u = qIo(s);
  if (n === "--cached" && u.hunks.size > 0) {
    let h = await ln(e, void 0, void 0);
    if (h === null) return null;
    for (let p of h.perFileStats.keys()) u.hunks.delete(p);
  }
  return u;
}
function KJe() {
  return ie().cwd();
}
function uFt() {
  let e = KJe(),
    n = zp().diffCheckoutIsRepo,
    r = n.get(e);
  if (r !== void 0) return r;
  let o = Pb(e) !== null;
  return (n.set(e, o), o);
}
function ban() {
  let e = KJe();
  return hr(e) ?? e;
}
async function San(e, n) {
  let { stdout: r, code: o } = await it(
    It(),
    ["--no-optional-locks", "rev-parse", "--show-toplevel"],
    {
      timeout: ede,
      preserveOutputOnError: !1,
      abortSignal: e,
      ...(n === void 0 ? { env: Rs() } : ao(n)),
      cwd: n
    }
  );
  if (o !== 0 || r.trim() === "") return null;
  return r.trim();
}
function _qn(e, n = ge, r = "all") {
  let o = e
      .split(
        `
`
      )
      .filter(Boolean),
    s = o.filter((b) => b.startsWith(":")),
    a = o.filter((b) => !b.startsWith(":") && Ft(b, "\t") + 1 >= 3),
    u = s.length > 0 && s.length === a.length,
    h = 0,
    p = 0,
    S = 0,
    y = new Map();
  for (let [b, T] of a.entries()) {
    let w = T.split("\t"),
      A = w.slice(2).join("\t");
    if (r === "within-root" && !gLr(A)) continue;
    S++;
    let x = w[0],
      C = w[1],
      v = x === "-" || C === "-",
      I = v ? 0 : parseInt(x ?? "0", 10) || 0,
      M = v ? 0 : parseInt(C ?? "0", 10) || 0;
    if (((h += I), (p += M), y.size < n)) {
      let B = y.has(A);
      y.set(A, { added: I, removed: M, isBinary: v, isUntracked: !1, ...(u && co(s[b], B)) });
    }
  }
  return { stats: { filesCount: S, linesAdded: h, linesRemoved: p }, perFileStats: y };
}
var lo = { A: "added", D: "removed", R: "renamed", C: "copied" };
function co(e, n) {
  let [r, o, s] = e.split("\t"),
    a = r.slice(r.lastIndexOf(" ") + 1)[0],
    u = lo[a] ?? "modified",
    h = Xe(s ?? o);
  if (n || h === void 0) return { status: u };
  if (s === void 0) return o.startsWith('"') ? { status: u, newPath: h } : { status: u };
  let p = Xe(o);
  return p === void 0 ? { status: u } : { status: u, previousPath: p, newPath: h };
}
function Xe(e) {
  let n = e.startsWith('"') ? cDe(e.slice(1, -1)) : e;
  return !iTe(n) &&
    !hLr.test(n) &&
    !/\\|^[A-Za-z]:| => /.test(n) &&
    !an(n) &&
    n.split("/").every((o) => K1(o) !== "..")
    ? n
    : void 0;
}
function gLr(e) {
  let n = fo(e);
  return (
    n !== null &&
    n.every(
      (r) =>
        !an(r) &&
        !no.isAbsolute(r) &&
        !/^[A-Za-z]:/.test(r) &&
        r.split(/[/\\{}]/).every((o) => K1(o) !== "..")
    )
  );
}
function fo(e) {
  if (e.startsWith('"')) {
    let h = Ke(e);
    if (h === -1) return null;
    let p = cDe(e.slice(1, h)),
      S = e.slice(h + 1);
    if (S === "") return [p];
    let y = S.startsWith(" => ") ? S.slice(4) : null;
    if (y === null) return null;
    if (!y.startsWith('"')) return y.includes('"') || y.includes(" => ") ? null : [p, y];
    return Ke(y) === y.length - 1 ? [p, cDe(y.slice(1, -1))] : null;
  }
  let n = e.indexOf(" => ");
  if (n === -1) return e.includes('"') ? null : [e];
  if (e.indexOf(" => ", n + 1) !== -1) return null;
  let r = e.slice(0, n),
    o = e.slice(n + 4);
  if (r.includes('"')) return null;
  if (o.startsWith('"')) return Ke(o) === o.length - 1 ? [r, cDe(o.slice(1, -1))] : null;
  if (o.includes('"')) return null;
  let s = [r, o],
    a = r.indexOf("{"),
    u = o.indexOf("}");
  if (r.indexOf("{", a + 1) !== -1 || o.indexOf("}", u + 1) !== -1) return null;
  if (a !== -1 && u !== -1) {
    let h = r.slice(0, a),
      p = o.slice(u + 1);
    s.push(`${h}${r.slice(a + 1)}${p}`, `${h}${o.slice(0, u)}${p}`);
  }
  return s;
}
function Ke(e) {
  for (let n = 1; n < e.length; n++)
    if (e[n] === "\\") n++;
    else if (e[n] === '"') return n;
  return -1;
}
var hLr = new RegExp(`[${Hb}\\uFFFD]`, "u");
function cDe(e) {
  let n = [],
    r = Array.from(e);
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    if (s !== "\\") {
      n.push(...Buffer.from(s, "utf8"));
      continue;
    }
    let a = r[o + 1] ?? "",
      u = r.slice(o + 1, o + 4).join("");
    if (/^[0-3][0-7]{2}$/.test(u)) {
      (n.push(parseInt(u, 8)), (o += 3));
      continue;
    }
    let p = { n: 10, t: 9, r: 13, b: 8, a: 7, f: 12, v: 11, '"': 34, "\\": 92 }[a];
    if (p !== void 0) (n.push(p), (o += 1));
    else n.push(92);
  }
  return Buffer.from(n).toString("utf8");
}
function qIo(e) {
  let n = new Map(),
    r = new Set();
  if (!e.trim()) return { hunks: n, skippedLarge: r };
  let o = e.split(/^diff --git /m).filter(Boolean);
  for (let s of o) {
    if (n.size + r.size >= ge) break;
    let a = s.indexOf(`
`),
      u = a === -1 ? s : s.slice(0, a),
      h = u.match(/^a\/(.+) b\/\1$/),
      p = h ?? u.match(/^(?:"a\/((?:[^"\\]|\\.)*)"|a\/(.+?)) (?:"b\/((?:[^"\\]|\\.)*)"|b\/(.+))$/);
    if (!p) continue;
    let S = h
      ? h[1]
      : p[3] !== void 0
        ? cDe(p[3])
        : (p[4] ?? (p[1] !== void 0 ? cDe(p[1]) : (p[2] ?? "")));
    if (s.length > mLr) {
      r.add(S);
      continue;
    }
    let y = s.split(`
`),
      b = [],
      T = null,
      w = 0;
    for (let A = 1; A < y.length; A++) {
      let x = y[A] ?? "",
        C = x.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (C) {
        if (T) b.push(T);
        T = {
          oldStart: parseInt(C[1] ?? "0", 10),
          oldLines: parseInt(C[2] ?? "1", 10),
          newStart: parseInt(C[3] ?? "0", 10),
          newLines: parseInt(C[4] ?? "1", 10),
          lines: []
        };
        continue;
      }
      if (
        T === null &&
        (x.startsWith("index ") ||
          x.startsWith("---") ||
          x.startsWith("+++") ||
          x.startsWith("new file") ||
          x.startsWith("deleted file") ||
          x.startsWith("old mode") ||
          x.startsWith("new mode") ||
          x.startsWith("Binary files"))
      )
        continue;
      if (T && (x.startsWith("+") || x.startsWith("-") || x.startsWith(" ") || x === "")) {
        if (w >= yan) continue;
        (T.lines.push("" + x), w++);
      }
    }
    if (T) b.push(T);
    if (b.length > 0) n.set(S, b);
  }
  return { hunks: n, skippedLarge: r };
}
async function dn(e, n, r) {
  let o = await Z9(n ?? KJe());
  if (!o) return !1;
  let s = [
      "MERGE_HEAD",
      "REBASE_HEAD",
      "CHERRY_PICK_HEAD",
      "REVERT_HEAD",
      "rebase-merge",
      ce("rebase-apply", "rebasing")
    ],
    [a, u, h, p, S, y] = await Promise.all(
      s.map((w) =>
        Jr(ce(o, w))
          .then(() => !0)
          .catch(() => !1)
      )
    ),
    b = S || y;
  if (a || h || p || (u && b)) return !0;
  if (Qe(r)) return !1;
  let T = await z_t(
    o,
    b ? [..._Ze, "REBASE_HEAD"] : _Ze,
    async (w) =>
      (
        await it(It(), ["--no-optional-locks", ...w], {
          timeout: ede,
          preserveOutputOnError: !1,
          abortSignal: e,
          ...oe(n, r),
          cwd: n
        })
      ).exitCode
  );
  return T !== null && T.size > 0;
}
class cn {
  #e = !1;
  #t = !1;
  get baseResolveOkLogged() {
    return this.#e;
  }
  get baseResolveSadLogged() {
    return this.#t;
  }
  markBaseResolveOkLogged() {
    this.#e = !0;
  }
  markBaseResolveSadLogged() {
    this.#t = !0;
  }
}
var po = new W(() => new cn());
async function fn(e, n, r, o, s) {
  let a = po.of(e),
    u = await go(n, r, o, s);
  if (u.kind === "error") {
    if (!a.baseResolveSadLogged) (a.markBaseResolveSadLogged(), f("diff_base_resolve", u.reason));
  } else if (!a.baseResolveOkLogged)
    (a.markBaseResolveOkLogged(), g("diff_base_resolve", { outcome: c(u.kind) }));
  return u;
}
async function go(e, n, r, o) {
  let s = { timeout: ede, abortSignal: e, ...oe(n, o) },
    [a, u] = await Promise.all([wu(n, s), rP(n, s)]);
  if (!a || a === "HEAD") return { kind: "none" };
  let h = r ?? u;
  if (h.startsWith("-") || hLr.test(h) || (r === void 0 && /\.\.|[\s~^:?*[\\]|@\{/.test(h)))
    return { kind: "none" };
  let p = { ...s, preserveOutputOnError: !1, cwd: n };
  if (o !== void 0 && $Z()) {
    let b = await it(
      It(),
      ["--no-optional-locks", "merge-base", "HEAD", `refs/remotes/origin/${h}`],
      p
    );
    if (b.code === 0 && b.stdout.trim()) return tn(b.stdout.trim(), h, p);
  }
  if (a === h) return { kind: "head-is-base", baseBranch: h };
  let S = !1,
    y = await pn(h, async (b) => {
      let T = await it(It(), b, p);
      if (T.exitCode === 1) S = !0;
      return T;
    });
  if (!y) {
    if (S) return { kind: "none" };
    for (let b of [`refs/remotes/origin/${h}`, `refs/heads/${h}`]) {
      let T = await it(It(), ["--no-optional-locks", "show-ref", "--verify", "--quiet", b], p);
      if (T.exitCode === 0 || T.exitCode === void 0)
        return { kind: "error", reason: "merge_base_failed" };
    }
    return { kind: "none" };
  }
  return tn(y, h, p);
}
async function tn(e, n, r) {
  let o = await it(It(), ["--no-optional-locks", "rev-parse", "HEAD"], r);
  if (o.code !== 0) return { kind: "error", reason: "head_rev_parse_failed" };
  if (o.stdout.trim() === e) return { kind: "head-is-base", baseBranch: n };
  return { kind: "merge-base", mergeBase: e, baseBranch: n };
}
async function ho(e, n, r, o = !1, s) {
  let { stdout: a, code: u } = await it(
    It(),
    ["--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name"],
    { timeout: ede, preserveOutputOnError: !1, abortSignal: n, ...oe(r, s), cwd: r }
  );
  if (u !== 0) return null;
  let h = a
    .split(
      `
`
    )
    .filter((w) => w !== "" && (s === void 0 || gLr(w)));
  if (h.length === 0) return null;
  let p = r ?? ban(),
    S = SYe(),
    y = await Promise.all(
      h.slice(0, ro).map(async (w) => {
        try {
          let A = await on(ce(p, w));
          return { filePath: w, preSession: Math.max(A.mtimeMs, A.ctimeMs) < S };
        } catch {
          return { filePath: w, preSession: !1 };
        }
      })
    ),
    b = y.filter((w) => !w.preSession);
  if (o) b.push(...y.filter((w) => w.preSession));
  if (b.length === 0) return null;
  let T = new Map();
  for (let { filePath: w, preSession: A } of b.slice(0, e)) {
    let x = w.startsWith('"') ? Xe(w) : void 0;
    T.set(w, {
      added: 0,
      removed: 0,
      isBinary: !1,
      isUntracked: !0,
      status: "added",
      ...(x !== void 0 && { newPath: x }),
      ...(A && { preSession: A })
    });
  }
  return T;
}
function bqn(e) {
  let n = e.match(
    /(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/
  );
  if (!n) return null;
  return {
    filesCount: parseInt(n[1] ?? "0", 10),
    linesAdded: parseInt(n[2] ?? "0", 10),
    linesRemoved: parseInt(n[3] ?? "0", 10)
  };
}
var So = 3000;
function yLr({ gitDiffRead: e }) {
  if (!e) return !1;
  if (i.CLAUDE_CODE_REMOTE) return !0;
  return aT() && k("tengu_bridge_child_tool_diff", !0);
}
var yo = 65536;
function _Lr(e) {
  return Boolean(i.CLAUDE_CODE_REMOTE) || Buffer.byteLength(e.patch, "utf8") <= yo;
}
async function bLr(e) {
  let n = hr(qe(e));
  if (!n) return null;
  let r = await sn(n).catch(() => null);
  if (r === null) return null;
  let o = await nn(r);
  if (o === null) return null;
  let s = rn(o),
    a = [ke(), ...(i.CLAUDE_CODE_REPO_CHECKOUTS ? iDe().values() : [])],
    u = null;
  for (let T of a) {
    let w = man(T);
    if (w === null) continue;
    let A = await nn(w);
    if (A === null) continue;
    if (A === o) {
      u = A;
      break;
    }
    let x = rn(A);
    if (u === null && x === s) u = x;
  }
  if (u === null) return null;
  let h = { gitDir: u, workTree: r },
    p = eo(n, e).split(to).join("/"),
    S = v7o(),
    { code: y } = await Ze(h, ["--no-optional-locks", "ls-files", "--error-unmatch", "--", p]);
  if (y === 0) {
    let T = await To(h, n),
      { stdout: w, code: A } = await Ze(h, [...Je, ...C4t, T, "--", p], { userLocale: !0 });
    if (A !== 0) return null;
    if (!w) return null;
    return { ...bo(p, w, "modified"), repository: S };
  }
  let b = await ko(p, e);
  if (!b) return null;
  return { ...b, repository: S };
}
function bo(e, n, r) {
  let o = n.split(`
`),
    s = [],
    a = !1,
    u = 0,
    h = 0;
  for (let p of o) {
    if (p.startsWith("@@")) a = !0;
    if (a) {
      if ((s.push(p), p.startsWith("+") && !p.startsWith("+++"))) u++;
      else if (p.startsWith("-") && !p.startsWith("---")) h++;
    }
  }
  return {
    filename: e,
    status: r,
    additions: u,
    deletions: h,
    changes: u + h,
    patch: s.join(`
`)
  };
}
async function pn(e, n) {
  let r = [];
  for (let u of [`origin/${e}`, e]) {
    let { stdout: h, code: p } = await n(["--no-optional-locks", "merge-base", "HEAD", u]);
    if (p === 0 && h.trim()) r.push(h.trim());
  }
  let [o, s] = r;
  if (!o) return null;
  if (!s || o === s) return o;
  let { code: a } = await n(["--no-optional-locks", "merge-base", "--is-ancestor", o, s]);
  return a === 0 ? s : o;
}
async function nn(e) {
  let n = await Z9(e);
  return n === null ? null : sn(n).catch(() => null);
}
function rn(e) {
  let n = qe(e),
    r = qe(n);
  return ze(e) !== ".git" && ze(n) === "worktrees" && ze(r).endsWith(".git") ? r : e;
}
function Ze({ gitDir: e, workTree: n }, r, { userLocale: o } = {}) {
  return ct(It(), [`--git-dir=${e}`, `--work-tree=${n}`, ...r], {
    cwd: n,
    timeout: So,
    env: Rs(void 0, { userLocale: o })
  });
}
function gn(e) {
  let n = rLr(e),
    r = (n !== void 0 ? st().get(n) : void 0) || i.CLAUDE_CODE_BASE_REF;
  if (!r) return;
  return r.startsWith("-") ? null : r;
}
async function To(e, n) {
  let r = gn(n);
  function o(u) {
    return Ze(e, u);
  }
  if (r === void 0) {
    let u = await rP();
    if (u.startsWith("-")) return "HEAD";
    return (await pn(u, o)) ?? "HEAD";
  }
  let { stdout: s, code: a } = await o(["--no-optional-locks", "merge-base", "HEAD", r ?? "HEAD"]);
  if (a === 0 && s.trim()) return s.trim();
  return "HEAD";
}
async function ko(e, n) {
  try {
    if (!(await plr(n, mLr))) return null;
    let o = (await Qr(n, "utf-8")).split(`
`);
    if (o.length > 0 && o.at(-1) === "") o.pop();
    let s = o.length,
      a = o.map((h) => `+${h}`).join(`
`),
      u = `@@ -0,0 +1,${s} @@
${a}`;
    return { filename: e, status: "added", additions: s, deletions: 0, changes: s, patch: u };
  } catch {
    return null;
  }
}
function M1(e) {
  return (
    e.type === "local_agent" &&
    e.status === "completed" &&
    "agentType" in e &&
    e.agentType !== "main-session" &&
    "isBackgrounded" in e &&
    e.isBackgrounded === !0 &&
    !("isObserver" in e && e.isObserver === !0) &&
    !("evictAfter" in e && e.evictAfter === 0) &&
    "chatEngaged" in e &&
    e.chatEngaged === !0 &&
    !("chatPinForfeited" in e && e.chatPinForfeited === !0)
  );
}
function wqn() {
  return (
    !Pt() && zk(ITe)?.isAvailable?.() === !0 && Sz().enabled.some((e) => e.name === ITe) && pyt(ITe)
  );
}
function eGe() {
  return !k("tengu_jazzy_ripple", !1);
}
var _o = 200,
  et = 100,
  mn = "tengu_memoized_turtle",
  hn = 3600;
function SLr() {
  return i.CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION ?? _o;
}
function Sn({ refillsByDefault: e }) {
  let n = i.CLAUDE_CODE_WEB_SEARCH_REFILLS_PER_HOUR;
  if (n !== void 0) return n;
  if (!e) return 0;
  let { getFeatureValue_CACHED_MAY_BE_STALE: r } = import.meta.require(
      __filePath_e81493e31de4032f(
        new __filePath_e81493e31de4032f_URL("./chunk-4m15ar7w.js", import.meta.url)
      )
    ),
    o = r(mn, et),
    s = typeof o === "string" && /^\d+$/.test(o) ? Number(o) : o;
  if (typeof s === "number" && Number.isInteger(s) && s >= 0 && s <= hn) return s;
  return (
    t(
      `WebSearch budget: ignoring the served ${mn} value ${_(o)} (not an integer from 0 to ${hn}); using ${et} refills per hour`,
      { level: "warn" }
    ),
    et
  );
}
var nt = 3600000;
function yn({ refillsByDefault: e, now: n = () => Date.now() }) {
  let r = 0,
    o = 0,
    s = n(),
    a = Sn({ refillsByDefault: e });
  function u() {
    let h = n(),
      p = Sn({ refillsByDefault: e }),
      S = Math.min(p, a);
    a = p;
    let y = Math.max(0, h - s);
    if (((s = h), r === 0)) {
      o = 0;
      return;
    }
    o += y * S;
    let b = Math.floor(o / nt);
    if (b >= r) {
      ((r = 0), (o = 0));
      return;
    }
    ((r -= b), (o -= b * nt));
  }
  return {
    tryConsume() {
      if ((u(), r >= SLr())) return !1;
      return (r++, !0);
    },
    msUntilNextCall() {
      u();
      let h = r - SLr();
      if (h < 0) return 0;
      if (a === 0) return 1 / 0;
      let p = (h + 1) * nt - o;
      return Math.max(1, Math.ceil(p / a));
    },
    refillsPerHour() {
      return a;
    }
  };
}
var pFt = 3000,
  ox = 30000,
  cht = 30000;
function wan(e, n) {
  for (let r of Object.values(e))
    if (
      r.id !== n &&
      (r.type === "in_process_teammate" ||
        (r.type === "local_agent" && r.agentType !== "main-session")) &&
      !cs(r.status) &&
      !r.isIdle
    )
      return !0;
  return !1;
}
function Xh(e, n, { refillWebSearchBudgetByDefault: r = !1 } = {}) {
  let o;
  return {
    register(s) {
      vo(s, n);
    },
    update(s, a) {
      Eo(s, n, a);
    },
    updateTranscript(s, a) {
      n((u) => {
        let h = V(u.transcripts, s) ?? fFt,
          p = a(h);
        if (p === h) return u;
        return { ...u, transcripts: { ...u.transcripts, [s]: p } };
      });
    },
    getTranscript(s) {
      return V(e().transcripts, s);
    },
    remove(s) {
      (zn().taskEvicted.emit(s),
        n((a) => {
          if (!Object.hasOwn(a.tasks, s)) return a;
          let { [s]: u, ...h } = a.tasks,
            p = a.transcripts ?? {},
            { [s]: S, ...y } = p;
          return { ...a, tasks: h, transcripts: s in p ? y : p };
        }));
    },
    evictTerminal(s) {
      Co(s, n);
    },
    applyOffsetsAndEvict(s, a) {
      Oo(n, s, a);
    },
    get(s) {
      return V(e().tasks, s);
    },
    all() {
      return e().tasks;
    },
    getWebSearchBudget() {
      return (o ??= yn({ refillsByDefault: r }));
    },
    resetWebSearchBudget() {
      o = void 0;
    },
    takeConcurrencySlot() {
      n((a) => ({ ...a, runningSubagents: a.runningSubagents + 1 }));
      let s = !1;
      return () => {
        if (s) return;
        ((s = !0),
          n((a) => {
            let u = Math.max(0, a.runningSubagents - 1);
            if (u === a.runningSubagents) return a;
            return { ...a, runningSubagents: u };
          }));
      };
    },
    getConcurrentSubagents() {
      return e().runningSubagents;
    }
  };
}
function Eo(e, n, r) {
  let o = null,
    s = null,
    a = !1;
  using u = _ti();
  if (
    (n((h) => {
      let p = V(h.tasks, e);
      if (!p) return h;
      let S = r(p);
      if (S === p) return h;
      if (((o = Ao(p, S)), (a = Df(S)), !cs(p.status) && cs(S.status)))
        s = {
          status:
            S.status === "completed" ? "completed" : S.status === "failed" ? "failed" : "stopped",
          opts: {
            toolUseId: S.toolUseId,
            summary: S.terminal?.summary ?? S.description,
            failureKind: Mtr(S.terminal),
            outputFile:
              "webFetchSavedFiles" in S && S.webFetchSavedFiles !== void 0
                ? void 0
                : (S.terminal?.output_file ?? S.outputFile),
            usage: S.terminal?.usage,
            resourceLinks: S.terminal?.resource_links,
            handback: S.terminal?.handback,
            handbackReport: S.terminal?.handback_report,
            skipTranscript: S.skipTranscript,
            ambient: lQ(S)
          }
        };
      return { ...h, tasks: { ...h.tasks, [e]: S } };
    }),
    s === null)
  )
    u.release();
  if (o !== null && !a) {
    let h = { type: "system", subtype: "task_updated", task_id: e, run_id: g0(e), patch: o };
    Ki(Vvt(h, s?.opts?.failureKind));
  }
  if (s !== null && !a) Ha(e, s.status, s.opts);
}
function Ao(e, n) {
  let r = {};
  if (n.status !== e.status) r.status = n.status;
  if (n.description !== e.description) r.description = n.description;
  if (n.endTime !== e.endTime) r.end_time = n.endTime;
  if (n.totalPausedMs !== e.totalPausedMs) r.total_paused_ms = n.totalPausedMs;
  let o = "error" in e ? e.error : void 0,
    s = "error" in n ? n.error : void 0;
  if (s !== o && s !== void 0) r.error = s;
  let a = "isBackgrounded" in e ? e.isBackgrounded : void 0,
    u = "isBackgrounded" in n ? n.isBackgrounded : void 0;
  if (u !== a && u !== void 0) r.is_backgrounded = u;
  return Object.keys(r).length > 0 ? r : null;
}
function Ro(e) {
  if (e.type === "local_bash") return "agentId" in e && e.agentId !== void 0 ? !0 : void 0;
  return;
}
function xo(e, n) {
  if (e.type !== "local_agent") return !1;
  for (let r of ["parentAgentId", "ownerAgentId"]) {
    let o = r in e ? e[r] : void 0;
    if (typeof o !== "string" || !Object.hasOwn(n, o)) continue;
    if (n[o].chatPinForfeited === !0) return !0;
  }
  return !1;
}
function Io(e) {
  let n = e.type === "local_agent" && "agentId" in e ? e.agentId : void 0;
  return typeof n === "string" && zn().chatPinForfeitedAgentIds.has(n);
}
function vo(e, n) {
  let o = Hqo(e.id) && !cs(e.status);
  if (o || !zn().runIds.has(e.id)) Dtr(e.id);
  let s = !1,
    a = e,
    u;
  if (
    (n((h) => {
      let p = h.tasks[e.id];
      s = p !== void 0;
      let S =
        p && "retain" in p
          ? {
              ...e,
              retain: p.retain,
              startTime: p.startTime,
              diskLoaded: p.diskLoaded,
              pendingMessages: p.pendingMessages,
              keepaliveReasons: p.keepaliveReasons,
              ownerAgentId: p.ownerAgentId,
              parentAgentId: p.parentAgentId,
              ...(p.spawnDepth !== void 0 && { spawnDepth: p.spawnDepth }),
              ...(p.isObserver !== void 0 && { isObserver: p.isObserver }),
              ...(p.forkedSkillName !== void 0 && { forkedSkillName: p.forkedSkillName }),
              ...(p.chatEngaged !== void 0 && { chatEngaged: p.chatEngaged }),
              ...(p.chatPinForfeited !== void 0 && { chatPinForfeited: p.chatPinForfeited }),
              ...(p.userStopCount !== void 0 && { userStopCount: p.userStopCount }),
              ...(p.handbackRecipient !== void 0 && { handbackRecipient: p.handbackRecipient }),
              ...(p.ownerCanContinueAgents !== void 0 && {
                ownerCanContinueAgents: p.ownerCanContinueAgents
              }),
              ...(p.handbackReport !== void 0 && { handbackReport: p.handbackReport }),
              ...(p.webFetchSavedFiles !== void 0 && { webFetchSavedFiles: p.webFetchSavedFiles }),
              ...(p.spawnedSubagent !== void 0 && { spawnedSubagent: p.spawnedSubagent }),
              ...("progress" in p && p.progress !== void 0 && { progress: p.progress })
            }
          : xo(e, h.tasks) || Io(e)
            ? { ...e, chatPinForfeited: !0 }
            : e;
      return ((a = S), (u = dLr(S, h.tasks)), { ...h, tasks: { ...h.tasks, [e.id]: S } });
    }),
    s && !o)
  )
    return;
  if (Df(e)) return;
  if (lht(e)) return;
  Ki({
    type: "system",
    subtype: "task_started",
    task_id: e.id,
    run_id: g0(e.id),
    owned_by_subagent: Ro(e),
    tool_use_id: e.toolUseId,
    description: e.description,
    subagent_type: lFt(e),
    is_backgrounded: "isBackgrounded" in a ? a.isBackgrounded : void 0,
    ...(cLr(a) && { awaited: !0 }),
    spawn_depth: "spawnDepth" in a ? a.spawnDepth : void 0,
    parent_task_id: u,
    task_type: e.type,
    workflow_name: "workflowName" in e ? e.workflowName : void 0,
    prompt: "prompt" in e ? e.prompt : void 0,
    skip_transcript: e.skipTranscript,
    ...(lQ(e) && { ambient: !0 })
  });
}
function Co(e, n) {
  let r = !1;
  if (
    (n((o) => {
      let s = V(o.tasks, e);
      if (!s) return o;
      if (!cs(s.status)) return o;
      if (!s.notified) return o;
      if ("retain" in s && (s.evictAfter ?? 1 / 0) > Date.now()) return o;
      if ("retain" in s && (s.keepaliveReasons?.size ?? 0) > 0) return o;
      if (s.type === "local_workflow" && ((s.evictAfter ?? 0) > Date.now() || !AE(e))) return o;
      if (s.type === "mcp_task" && (s.endTime ?? 0) + ox > Date.now()) return o;
      r = !0;
      let { [e]: a, ...u } = o.tasks,
        h = o.transcripts ?? {},
        { [e]: p, ...S } = h;
      return { ...o, tasks: u, transcripts: e in h ? S : h };
    }),
    r)
  )
    (t(`evictTerminalTask: evicted task ${e}`), zn().taskEvicted.emit(e));
}
function aTe(e) {
  let n = e.tasks ?? {};
  return Object.values(n).filter((r) => r.status === "running");
}
async function FUs(e) {
  let n = [],
    r = {},
    o = [];
  for (let s of Object.values(e)) {
    if (s.notified)
      switch (s.status) {
        case "completed":
        case "failed":
        case "killed":
          if (M1(s)) continue;
          o.push(s.id);
          continue;
        case "pending":
          continue;
        case "running":
          break;
      }
    if (
      s.status === "running" &&
      s.outputFile !== void 0 &&
      !(s.type === "local_bash" && s.elsewhere)
    ) {
      let a = await OBo(s.id, s.outputOffset);
      if (a.content) r[s.id] = a.newOffset;
    }
  }
  return { attachments: n, updatedTaskOffsets: r, evictedTaskIds: o };
}
function Oo(e, n, r) {
  let o = Object.keys(n);
  if (o.length === 0 && r.length === 0) return;
  let s = [];
  e((a) => {
    let u = !1,
      h = { ...a.tasks };
    for (let S of o) {
      let y = h[S];
      if (y?.status === "running") ((h[S] = { ...y, outputOffset: n[S] }), (u = !0));
    }
    for (let S of r) {
      let y = h[S];
      if (!y || !cs(y.status) || !y.notified) continue;
      if ("retain" in y && (y.evictAfter ?? 1 / 0) > Date.now()) continue;
      if ("retain" in y && (y.keepaliveReasons?.size ?? 0) > 0) continue;
      if (y.type === "local_workflow" && ((y.evictAfter ?? 0) > Date.now() || !AE(S))) continue;
      if (y.type === "mcp_task" && (y.endTime ?? 0) + ox > Date.now()) continue;
      (delete h[S], Hqo(S), s.push(S), (u = !0));
    }
    if (!u) return a;
    let p;
    for (let S of s)
      if (a.transcripts && S in a.transcripts) ((p ??= { ...a.transcripts }), delete p[S]);
    return { ...a, tasks: h, ...(p && { transcripts: p }) };
  });
  for (let a of s) (t(`applyTaskOffsetsAndEvictions: evicted task ${a}`), zn().taskEvicted.emit(a));
}
function Tn(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}
function sx(e) {
  return Tn(e) && e.agentType !== "main-session" && !e.forkWorker;
}
function uht(e) {
  return sx(e) && e.evictAfter !== 0;
}
function YIo(e, n) {
  return Tn(e) && e.status === "running" && !e.isBackgrounded && e.parentAgentId === n;
}
function van(e) {
  return YIo(e, void 0);
}
function UUs(e) {
  return van(e) && e.autoBackgroundArmed === !0 && e.directCall === !0;
}
function ZWe(e, { userInitiated: n = !1 } = {}) {
  if (!Tn(e)) return !1;
  if (n) return !0;
  return e.stoppedByUser !== !0 && (e.status === "running" || e.status === "completed");
}
function vLr(e) {
  return Tn(e) ? (e.userStopCount ?? 0) : 0;
}
function mFt(e, n) {
  if (!Tn(e)) return !1;
  let r = vLr(e);
  return (n ?? e.pendingMessages).some((o) => o.userInitiatedAt === r);
}
var XIo = "kill-unsettled";
function JIo(e) {
  return !1;
}
function uDe(e) {
  let { parkedTeardowns: n, mainThreadContexts: r } = zn();
  r.delete(e);
  let o = n.get(e);
  if (o !== void 0) (n.delete(e), o());
}
function gFt(e, n) {
  let r = n.get(e);
  if (Tn(r) && ix(r).size === 0 && cs(r.status) && r.resuming !== !0 && r.finalizing !== !0) uDe(e);
}
function ix(e) {
  return e.keepaliveReasons ?? new Set();
}
function HL(e, n, r) {
  if (!e) return;
  r.update(e, (o) => {
    if (!Tn(o) || ix(o).has(n)) return o;
    return { ...o, keepaliveReasons: new Set(ix(o)).add(n) };
  });
}
function RD(e, n, r) {
  if (!e) return;
  let o = r.get(e),
    s = Tn(o) && ix(o).has(n);
  if (
    (r.update(e, (a) => {
      if (!Tn(a) || !ix(a).has(n)) return a;
      let u = new Set(ix(a));
      u.delete(n);
      let h = M1(a),
        p = u.size === 0 && cs(a.status) && !a.retain && !h;
      return {
        ...a,
        keepaliveReasons: u,
        ...(u.size === 0 && h && a.quietlyParked === !0 && { quietlyParked: !1 }),
        ...(p && a.evictAfter === void 0 && { evictAfter: Date.now() + ox })
      };
    }),
    s)
  )
    gFt(e, r);
}
function QIo(e) {
  return M1(e) ? void 0 : Date.now() + ox;
}
function rt(e) {
  let n = Yu(e) ? e : void 0,
    r = !n && Tn(e) ? e : void 0;
  return { teammate: n, localAgent: r };
}
function Ean(e, n) {
  return rt(e ? n[e] : void 0);
}
function BUs(e) {
  let { teammate: n, localAgent: r } = rt(e);
  return (n ?? r)?.id ?? tt();
}
function jUs({ viewedTask: e, transcript: n, mainIsBusy: r, mainConversationId: o }) {
  let { teammate: s, localAgent: a } = rt(e),
    u = s ?? a;
  return {
    task: u,
    isMain: !u,
    isTeammate: !!s,
    messages: n.messages,
    inProgressToolUseIDs: n.inProgressToolUseIDs,
    conversationKey: u ? u.id : o,
    isLoading: u ? u.status === "running" && !u.isIdle : r
  };
}
import { isAbsolute as bn, resolve as kn } from "path";
import { pathToFileURL as Po } from "url";
function O1(e) {
  try {
    let n = wA(e),
      r = wA(kn(n));
    if (dl(n) || Yn(r) || lwt(n) || lwt(r)) return null;
    let o = Po(n);
    return o.hostname !== "" || $Go(o.href) ? null : o.href;
  } catch {
    return null;
  }
}
function Sqn(e) {
  let n = /^file:/i.test(e);
  if (!n) {
    if (!(e.startsWith("/") && !Yn(e))) return e;
  }
  let r = n ? e.slice(5) : e;
  if (r.startsWith("//")) {
    if (((r = r.slice(2)), r === "localhost")) r = "/";
    else if (r.startsWith("localhost/")) r = r.slice(9);
  }
  let o = r.search(/[#?]/),
    s = o === -1 ? "" : r.slice(o),
    a = o === -1 ? r : r.slice(0, o);
  if (a === "") return null;
  try {
    a = decodeURIComponent(a);
  } catch {}
  a = Bo(a);
  let u = bn(a) ? a : kn(fe(), a),
    h = O1(u);
  if (h === null) return null;
  let p = h + s;
  return $Go(p) ? null : p;
}
function Bo(e, n = bn) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && n(e.slice(1))) return e.slice(1);
  return e;
}
export {
  P1,
  uqn,
  sht,
  AE,
  jJe,
  sFt,
  xUs,
  fqn,
  PUs,
  QWe,
  iht,
  iDe,
  man,
  pqn,
  rLr,
  IUs,
  GIo,
  mqn,
  iFt,
  aht,
  gqn,
  oLr,
  zIo,
  oTe,
  aDe,
  One,
  Q3,
  DL,
  sTe,
  I1,
  OUs,
  MUs,
  Yu,
  DUs,
  KIo,
  sLr,
  iLr,
  aLr,
  WJe,
  HUs,
  Z3,
  lLr,
  lDe,
  Df,
  aFt,
  dLr,
  FK,
  vy,
  VIo,
  cLr,
  hqn,
  lht,
  uLr,
  dht,
  LUs,
  dDe,
  lQ,
  lFt,
  ahe,
  dFt,
  fLr,
  GJe,
  NUs,
  gan,
  han,
  pLr,
  iTe,
  zJe,
  YF,
  ede,
  mLr,
  yan,
  yqn,
  _an,
  cFt,
  $Us,
  KJe,
  uFt,
  ban,
  San,
  _qn,
  gLr,
  hLr,
  cDe,
  qIo,
  bqn,
  yLr,
  _Lr,
  bLr,
  O1,
  Sqn,
  M1,
  SLr,
  VJe,
  fFt,
  wLr,
  pFt,
  ox,
  cht,
  wan,
  Xh,
  aTe,
  FUs,
  Tn,
  sx,
  uht,
  YIo,
  van,
  UUs,
  ZWe,
  vLr,
  mFt,
  XIo,
  JIo,
  uDe,
  gFt,
  ix,
  HL,
  RD,
  QIo,
  wqn,
  eGe,
  Ean,
  BUs,
  jUs
};

//# sourceMappingURL=chunk-yyq6mj0n.js.map
