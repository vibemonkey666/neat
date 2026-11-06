import {
  fileURLToPath as __sourceFilePath_6178e1e9e3a14bdc,
  URL as __sourceFilePath_6178e1e9e3a14bdc_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uie } from "./chunk-6bbdndfe.js";
import { Ne } from "./chunk-2qx8pe6s.js";
import { L, U } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import { c } from "./chunk-acd8w9vv.js";
import { R, Bq, kW, N, d, E, Er, G, Vt } from "./chunk-fs43t96t.js";
import { X, Nt, Pe } from "./chunk-4hww8411.js";
import { In } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import { Tu, ecr, tJr, Le, kss } from "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import { Ja, Ad } from "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import { S_ } from "./chunk-cj37hmns.js";
import { wSe } from "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-afxq0vrk.js";
import { Y0, X4e, FH, fT } from "./chunk-t0wrcf3t.js";
import { wFt, _f, FT } from "./chunk-zg0g4fdz.js";
import { p } from "./chunk-qmkm2x59.js";
import { Boe, fl } from "./chunk-at88wjsn.js";
import { We } from "./chunk-pgnjjhxv.js";
import "./chunk-vw9e882a.js";
import "./chunk-zjm5ncxc.js";
import "./chunk-qywdxehb.js";
import { hn } from "./chunk-wr0p4ndg.js";
import "./chunk-0szbzt7f.js";
import "./chunk-fmf16p94.js";
import "./chunk-1enm1nhw.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f, fo } from "./chunk-brszmkb3.js";
import "./chunk-arw2bgak.js";
import "./chunk-4kxy1036.js";
import { No } from "./chunk-8r2m7vfp.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-4nzy53ma.js";
import "./chunk-6xjawpfq.js";
import "./chunk-cjnzngfc.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import { uar, Got, zot, ZTt } from "./chunk-928ws1pg.js";
import { $ot } from "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-yhnvfh6c.js";
import { ur } from "./chunk-t86k189s.js";
import { cBn, mft, gft, Tbo } from "./chunk-j8djan8g.js";
import { dsr, wbe, JV } from "./chunk-vbnb89qh.js";
import { JIn } from "./chunk-1mbkjwnq.js";
import "./chunk-nehh276t.js";
import { AA, thr, i9t } from "./chunk-dt93rvn7.js";
import "./chunk-myhnqda3.js";
import "./chunk-6ctzjrkt.js";
import { OEe } from "./chunk-c9bdtm0y.js";
import "./chunk-arcvz535.js";
import { qAe } from "./chunk-stzrz9z3.js";
import "./chunk-hy8pzezr.js";
import { xai } from "./chunk-38g9s4wc.js";
import "./chunk-ya7n419k.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { ac } from "./chunk-refybwsn.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import { Alr, wfi } from "./chunk-c57c64b0.js";
import { Ce } from "./chunk-a2y39866.js";
var Me = 500,
  we = 1048576;
var ks = [200, 800];
class Je {
  send;
  pending = [];
  pendingEntries = 0;
  pendingBytes = 0;
  flushPromise = null;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  backoffMs;
  constructor(e, s) {
    this.send = e;
    let {
      sendTimeoutMs: r = 60000,
      onError: n,
      maxPendingEntries: i = Me,
      maxPendingBytes: m = we,
      backoffMs: l = ks
    } = s ?? {};
    ((this.sendTimeoutMs = r),
      (this.onError = n),
      (this.maxPendingEntries = i),
      (this.maxPendingBytes = m),
      (this.backoffMs = l));
  }
  enqueue(e, s) {
    let r = _(s).length;
    if (
      (this.pending.push({ filePath: e, entries: s, bytes: r }),
      (this.pendingEntries += s.length),
      (this.pendingBytes += r),
      this.pendingEntries > this.maxPendingEntries || this.pendingBytes > this.maxPendingBytes)
    )
      ((this.flushPromise = this.drain()), this.flushPromise.catch(() => {}));
  }
  async flush() {
    let e = this.drain();
    if (((this.flushPromise = e), await e, this.flushPromise === e)) this.flushPromise = null;
  }
  async drain() {
    let e = this.flushPromise,
      s = this.pending.splice(0);
    if (((this.pendingEntries = 0), (this.pendingBytes = 0), e)) await e;
    if (s.length === 0) return;
    await this.doFlush(s);
  }
  async doFlush(e) {
    let s = new Map();
    for (let r of e) {
      let n = s.get(r.filePath);
      if (n) n.push(...r.entries);
      else s.set(r.filePath, r.entries.slice());
    }
    for (let [r, n] of s) await this.sendWithRetry(r, n);
  }
  async sendWithRetry(e, s) {
    let r = this.backoffMs.length + 1,
      n = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${e}`,
      i,
      m = 1;
    for (; m <= r; m++)
      try {
        (await Nt(this.send(e, s), this.sendTimeoutMs, n), (i = void 0));
        break;
      } catch (l) {
        if (((i = N(l)), i.message === n)) break;
        let h = this.backoffMs[m - 1];
        if (h === void 0) break;
        await X(h);
      }
    if (i) {
      t(`[TranscriptMirrorBatcher] flush failed for ${e} after ${m} attempt(s): ${i}`, {
        level: "error"
      });
      try {
        this.onError?.(e, i);
      } catch (l) {
        t(`[TranscriptMirrorBatcher] onError callback threw: ${l}`, { level: "error" });
      }
    }
  }
}
var Et;
(function (e) {
  e.Completable = "McpCompletable";
})(Et || (Et = {}));
import { randomUUID as As } from "crypto";
import { join as Rt } from "path";
class Tt {
  debugFilePath = void 0;
  initPromise = null;
  logStem = null;
}
var xs = new W(() => new Tt());
function Pt() {
  return xs.of(U().host);
}
function Mt(e) {
  if (e.initPromise) return e.initPromise;
  if (!tJr("DEBUG_CLAUDE_AGENT_SDK"))
    return ((e.debugFilePath = null), (e.initPromise = Promise.resolve()), e.initPromise);
  let s = Rt(Le(), "debug");
  return (
    (e.logStem = `sdk-${As()}`),
    (e.debugFilePath = Rt(s, `${e.logStem}.txt`)),
    process.stderr.write(`SDK debug logs: ${e.debugFilePath}
`),
    (e.initPromise = hn()
      .mkdir(s)
      .catch(() => {})),
    e.initPromise
  );
}
function js(e) {
  return e.logStem === null ? null : { namespace: "log", sessionId: e.logStem, channel: "debug" };
}
function It() {
  let e = Pt();
  return (Mt(e), e.debugFilePath ?? null);
}
function x(e, s) {
  let r = Pt();
  if (r.debugFilePath === null) return;
  let i = `${new Date().toISOString()} ${e}
`;
  Mt(r).then(() => {
    if (s !== void 0) {
      let m = js(r);
      if (m !== null) s.append(m, [{ data: i }]).catch(() => {});
      return;
    }
    if (r.debugFilePath)
      hn()
        .append(r.debugFilePath, i)
        .catch(() => {});
  });
}
var Wo = p(() =>
  u({ session_id: o(), ws_url: o(), work_dir: o().optional(), session_key: o().optional() })
);
import { execFile as hr } from "child_process";
import { randomUUID as gr } from "crypto";
import { mkdir as at, mkdtemp as Ua, readFile as Sr, rm as yr, writeFile as es } from "fs/promises";
import { createRequire as wr } from "module";
import { homedir as lt, tmpdir as br } from "os";
import {
  dirname as Jt,
  isAbsolute as _r,
  join as A,
  posix as kr,
  resolve as dt,
  sep as vr,
  win32 as Cr
} from "path";
import { fileURLToPath as Rr } from "url";
import { spawn as Ks } from "child_process";
import { existsSync as qs } from "fs";
import { createInterface as Hs } from "readline";
import { StringDecoder as zs } from "string_decoder";
function Us(e) {
  let s = e.trim();
  return s.startsWith("{") && s.endsWith("}");
}
var Ls = new Set([
    "filesystem.denyRead",
    "filesystem.denyWrite",
    "network.deniedDomains",
    "credentials.files",
    "credentials.envVars"
  ]),
  $s = new Set(["ripgrep", "network.tlsTerminate"]),
  Ns = new Set(["__proto__", "constructor", "prototype"]),
  Fs = ["httpProxyPort", "socksProxyPort"];
function Dt(e, s, r = "") {
  let n = mn(e) ? { ...e } : {};
  for (let [i, m] of Object.entries(s)) {
    if (Ns.has(i) || m === void 0) continue;
    let l = r ? `${r}.${i}` : i,
      h = Object.hasOwn(n, i) ? n[i] : void 0;
    if (Ls.has(l) && Array.isArray(h) && Array.isArray(m)) n[i] = L([...h, ...m]);
    else if (mn(h) && mn(m) && !$s.has(l)) n[i] = Dt(h, m, l);
    else n[i] = m;
  }
  return n;
}
function Ot(e, s) {
  let r = { ...e };
  if (!s) return r;
  let n = r.settings;
  if (n && !Us(n))
    throw Error(
      "Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead."
    );
  let i = {};
  if (n)
    try {
      i = te(n);
    } catch {}
  let m = Dt(i.sandbox, s),
    l = s.credentials?.files,
    h = s.filesystem !== void 0 || (Array.isArray(l) && l.some((C) => mn(C) && C.mode === "deny")),
    S = m.filesystem;
  if (h && s.filesystem?.disabled === void 0 && mn(S) && S.disabled === !0) delete S.disabled;
  let y = s.network,
    w =
      y?.allowedDomains !== void 0 ||
      (y?.deniedDomains?.length ?? 0) > 0 ||
      y?.strictAllowlist === !0,
    b = m.network;
  if (w && mn(b)) {
    for (let C of Fs) if (y?.[C] === void 0 && b[C] !== void 0) delete b[C];
  }
  if (s.enabled === !0 && m.failIfUnavailable === void 0) m.failIfUnavailable = !0;
  return ((r.settings = _({ ...i, sandbox: m })), r);
}
var Bs = 2000,
  Ye = 2048,
  jt = "sdk-exit-after-stderr-drained",
  Gs = 200;
function Ze(e) {
  return e === "exit" ? jt : e;
}
class Ut {
  #e = new Set();
  #t = !1;
  #s = () => this.killAll();
  track(e) {
    if ((this.#e.add(e), !this.#t)) ((this.#t = !0), process.on("exit", this.#s));
  }
  untrack(e) {
    this.#e.delete(e);
  }
  isTracking(e) {
    return this.#e.has(e);
  }
  get size() {
    return this.#e.size;
  }
  killAll() {
    for (let e of this.#e) if (!e.killed) e.kill("SIGTERM");
  }
  reset() {
    (process.off("exit", this.#s), (this.#t = !1), this.#e.clear());
  }
}
var Ie = new Ut(),
  Ws = /[(),\u0000-\u001f\u007f-\u009f]/;
function Vs(e) {
  if (typeof e !== "string" || e.trim() === "")
    throw Error("Skill names must be non-empty strings.");
  if (!Ad(e))
    throw new R(
      `Invalid skill name ${_(e)}: the name contains an unpaired surrogate, which cannot survive the UTF-8 encoding of the CLI invocation; no skill discovered from the filesystem can have such a name.`,
      "skill name with unpaired surrogate rejected"
    );
  if (e !== e.trim())
    throw new R(
      `Invalid skill name ${_(e)}: leading or trailing whitespace is not allowed \u2014 the Skill tool trims the invoked name, so a padded rule can never match. Remove the padding.`,
      "skill name with surrounding whitespace rejected"
    );
  if (Ws.test(e))
    throw new R(
      `Invalid skill name ${_(e)}: parentheses, commas, and control characters are not allowed in skill names. Skill names match the skill's directory name (or 'plugin:skill' for plugin-qualified skills); rename the skill if its directory name contains these characters.`,
      "invalid skill name rejected"
    );
  if (e === "*") throw Error("Invalid skill name '*': use skills: 'all' to enable every skill.");
  if (e.endsWith(":*") || e.endsWith(" *"))
    throw new R(
      `Invalid skill name ${_(e)}: wildcard-suffix names are not allowed; list each skill by its exact name.`,
      "wildcard-suffix skill name rejected"
    );
  if (e.startsWith("/"))
    throw new R(
      `Invalid skill name ${_(e)}: skill names may not start with '/'. Skills are invoked as slash commands, but the skills option takes the skill's canonical name \u2014 the directory name, or 'plugin:skill'.`,
      "skill name with leading slash rejected"
    );
  if (e.includes("\\\\"))
    throw new R(
      `Invalid skill name ${_(e)}: consecutive backslashes are not allowed \u2014 the permission-rule parser collapses escaped backslashes, so the rule would name a different skill. Rename the skill.`,
      "skill name with consecutive backslashes rejected"
    );
  if (e.endsWith("\\"))
    throw new R(
      `Invalid skill name ${_(e)}: names may not end with an unpaired backslash.`,
      "skill name with unpaired trailing backslash rejected"
    );
  return e;
}
class tt {
  options;
  process;
  processStdin;
  processStdout;
  ready = !1;
  abortController;
  exitError;
  exitEventDelivered = !1;
  stderrTail = "";
  exitListeners = [];
  abortHandler;
  forwardedAbort = ur();
  pendingWrites = [];
  pendingEndInput = !1;
  spawnResolve;
  spawnReject;
  spawnPromise;
  constructor(e) {
    this.options = e;
    if (((this.abortController = e.abortController || ur()), e.deferSpawn))
      ((this.spawnPromise = new Promise((s, r) => {
        ((this.spawnResolve = s), (this.spawnReject = r));
      })),
        this.spawnPromise.catch(() => {}));
    else this.initialize();
  }
  spawn() {
    try {
      this.initialize();
    } catch (s) {
      throw (this.spawnAbort(N(s)), s);
    }
    let e = this.pendingWrites;
    if (((this.pendingWrites = []), this.spawnResolve))
      (this.spawnResolve(), (this.spawnResolve = void 0), (this.spawnReject = void 0));
    for (let s of e) this.write(s);
    if (this.pendingEndInput) ((this.pendingEndInput = !1), this.processStdin?.end());
  }
  spawnAbort(e) {
    if (this.spawnReject)
      (this.spawnReject(e),
        (this.spawnReject = void 0),
        (this.spawnResolve = void 0),
        (this.pendingWrites = []));
  }
  updateEnv(e) {
    if (this.options.env) Object.assign(this.options.env, e);
    else this.options.env = { ...e };
  }
  updateResume(e) {
    this.options.resume = e;
  }
  getDefaultExecutable() {
    return S_() ? "bun" : "node";
  }
  spawnLocalProcess(e) {
    let { command: s, args: r, cwd: n, env: i, signal: m } = e,
      l = Ks(s, r, { cwd: n, stdio: ["pipe", "pipe", "pipe"], signal: m, env: i, windowsHide: !0 });
    if (l.pid !== void 0 && this.options.onProcessSpawned)
      try {
        this.options.onProcessSpawned(l.pid);
      } catch (P) {
        x(`onProcessSpawned threw: ${d(P)}`);
      }
    let h = new zs("utf8"),
      S = !1,
      y = !1,
      w = !1,
      b,
      C = Ne(i.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== void 0;
    (l.stderr.on("data", (P) => {
      if (w) return;
      let D = h.write(P);
      if (((this.stderrTail += D), this.stderrTail.length > 2 * Ye))
        this.stderrTail = Ja(Boe(this.stderrTail), Ye);
      if (C) (x(D), this.options.stderr?.(D));
    }),
      l.stderr.on("error", (P) => {
        x(`[ProcessTransport] stderr read failed: ${P.code ?? P.message}`);
      }));
    let T = () => {
      if (w) return;
      if (((w = !0), b)) clearTimeout(b);
      l.emit(jt, l.exitCode, l.signalCode);
      let P = l.stderr;
      if (Ys(P)) P.unref();
      else P.destroy();
    };
    return (
      l.stderr.once("close", () => {
        if (((this.stderrTail += h.end()), (S = !0), y)) T();
      }),
      l.once("exit", () => {
        if (((y = !0), (this.ready = !1), S)) T();
        else b = setTimeout(T, Gs);
      }),
      {
        stdin: l.stdin,
        stdout: l.stdout,
        get killed() {
          return l.killed;
        },
        get exitCode() {
          return l.exitCode;
        },
        get signalCode() {
          return l.signalCode;
        },
        kill: l.kill.bind(l),
        on: (P, D) => l.on(Ze(P), D),
        once: (P, D) => l.once(Ze(P), D),
        off: (P, D) => l.off(Ze(P), D)
      }
    );
  }
  initialize() {
    try {
      let {
          additionalDirectories: e = [],
          projectConfigRoot: s,
          agent: r,
          betas: n,
          cwd: i,
          executable: m = this.getDefaultExecutable(),
          executableArgs: l = [],
          extraArgs: h = {},
          pathToClaudeCodeExecutable: S,
          env: y = { ...process.env },
          thinkingConfig: w,
          maxTurns: b,
          maxBudgetUsd: C,
          taskBudget: T,
          model: v,
          fallbackModel: P,
          jsonSchema: D,
          permissionMode: q,
          allowDangerouslySkipPermissions: H,
          permissionPromptToolName: Q,
          permissionPrompts: B,
          continueConversation: _e,
          resume: ke,
          settingSources: se,
          skills: re,
          disallowedTools: ve = [],
          tools: ce,
          mcpServers: ue,
          strictMcpConfig: je,
          canUseTool: Ue,
          includePartialMessages: J,
          plugins: pe,
          pluginsViaInitialize: $e,
          sandbox: Ee
        } = this.options,
        { allowedTools: Y = [] } = this.options;
      if (re !== void 0) {
        let M = re === "all" ? ["Skill"] : re.map((j) => `Skill(${Vs(j)})`),
          K = new Set(Y);
        Y = [...Y, ...M.filter((j) => !K.has(j))];
      }
      let k = ["--output-format", "stream-json", "--verbose", "--input-format", "stream-json"];
      if (w) {
        switch (w.type) {
          case "enabled":
            if (w.budgetTokens === void 0) k.push("--thinking=adaptive");
            else k.push(AA("--max-thinking-tokens", w.budgetTokens));
            break;
          case "disabled":
            k.push("--thinking=disabled");
            break;
          case "adaptive":
            k.push("--thinking=adaptive");
            break;
        }
        if (w.type !== "disabled" && w.display) k.push(AA("--thinking-display", w.display));
      }
      if (this.options.effort) k.push(AA("--effort", this.options.effort));
      if (b) k.push(AA("--max-turns", b));
      if (C !== void 0) k.push(AA("--max-budget-usd", C));
      if (T) k.push(AA("--task-budget", T.total));
      if (v) k.push(AA("--model", v));
      if (r) k.push(AA("--agent", r));
      if (n && n.length > 0) k.push(AA("--betas", n.join(",")));
      if (D) k.push(AA("--json-schema", _(D)));
      if (this.options.debugFile) k.push(AA("--debug-file", this.options.debugFile));
      else if (this.options.debug) k.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let M = It();
        if (M) k.push(AA("--debug-file", M));
      }
      if (Ue) {
        if (Q)
          throw Error(
            "canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other."
          );
        k.push("--permission-prompt-tool=stdio");
      } else if (Q) k.push(AA("--permission-prompt-tool", Q));
      if (B) k.push(AA("--permission-prompts", B));
      if (_e) k.push("--continue");
      if (ke) k.push(AA("--resume", ke));
      if (Y.length > 0) k.push(AA("--allowedTools", Y.join(",")));
      if (ve.length > 0) k.push(AA("--disallowedTools", ve.join(",")));
      if (ce !== void 0)
        if (Array.isArray(ce)) k.push(AA("--tools", ce.join(",")));
        else k.push("--tools=default");
      if (ue && Object.keys(ue).length > 0) k.push(...thr("--mcp-config", _({ mcpServers: ue })));
      if (se !== void 0) k.push(AA("--setting-sources", se.join(",")));
      if (je) k.push("--strict-mcp-config");
      if (q) k.push(AA("--permission-mode", q));
      if (H) k.push("--allow-dangerously-skip-permissions");
      if (P) {
        if (v && P === v)
          throw Error(
            "Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option."
          );
        k.push(AA("--fallback-model", P));
      }
      if (this.options.includeHookEvents) k.push("--include-hook-events");
      if (J) k.push("--include-partial-messages");
      if (this.options.sessionMirror) k.push("--session-mirror");
      if (s !== void 0) k.push(AA("--project-config-root", s));
      for (let M of e) k.push(AA("--add-dir", M));
      if ($e) k.push("--await-initialize");
      else if (pe && pe.length > 0)
        for (let M of pe)
          if (M.type === "local")
            k.push(
              M.skipMcpDiscovery ? AA("--plugin-dir-no-mcp", M.path) : AA("--plugin-dir", M.path)
            );
          else throw Error(`Unsupported plugin type: ${M.type}`);
      if (this.options.forkSession) k.push("--fork-session");
      if (this.options.resumeSessionAt)
        k.push(AA("--resume-session-at", this.options.resumeSessionAt));
      if (this.options.resumeDropsTurn !== void 0)
        k.push(AA("--resume-drops-turn", this.options.resumeDropsTurn));
      if (this.options.sessionId) k.push(AA("--session-id", this.options.sessionId));
      if (this.options.persistSession === !1) k.push("--no-session-persistence");
      if (this.options.managedSettings)
        k.push(...thr("--managed-settings", this.options.managedSettings));
      let Z = { ...(h ?? {}) };
      if (this.options.settings) Z.settings = this.options.settings;
      let Fe = Ot(Z, Ee);
      for (let [M, K] of Object.entries(Fe))
        if (K === null) k.push(`--${M}`);
        else i9t(k, M, K);
      if (!y.CLAUDE_CODE_ENTRYPOINT) y.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if ((delete y.NODE_OPTIONS, Ne(y.DEBUG_CLAUDE_AGENT_SDK))) y.DEBUG = "1";
      else delete y.DEBUG;
      let ne = Qs(S),
        fe = ne ? S : m,
        me = ne ? [...l, ...k] : [...l, S, ...k],
        Re = { command: fe, args: me, cwd: i, env: y, signal: this.forwardedAbort.signal };
      if (this.options.spawnClaudeCodeProcess)
        (x(`Spawning Claude Code (custom): ${fe} ${me.join(" ")}`),
          (this.process = this.options.spawnClaudeCodeProcess(Re)));
      else
        (x(`Spawning Claude Code: ${fe} ${me.join(" ")}`),
          (this.process = this.spawnLocalProcess(Re)));
      if (
        ((this.processStdin = this.process.stdin),
        (this.processStdout = this.process.stdout),
        this.processStdin.on("error", (M) => {
          (x(`[ProcessTransport] stdin write failed (child likely exited): ${M.code ?? M.message}`),
            (this.ready = !1));
        }),
        Ie.track(this.process),
        (this.abortHandler = () => this.close()),
        this.abortController.signal.addEventListener("abort", this.abortHandler),
        this.abortController.signal.aborted)
      )
        this.close();
      let ee = this.process;
      (ee.on("error", (M) => {
        this.ready = !1;
        let K = M,
          j = K.syscall !== void 0 ? K.syscall.startsWith("spawn") : Vt(M);
        if (j && !ee.killed) Ie.untrack(ee);
        if (this.abortController.signal.aborted)
          ((this.exitError = De()),
            Bq(M, {
              telemetryMessage: "Claude Code process aborted by user",
              errorClass: "aborted"
            }));
        else if (j && Vt(M)) {
          let { message: oe, telemetryMessage: Ke, errorClass: qe } = Xs(S, ne),
            he = { telemetryMessage: `${Ke}${et(M)}`, errorClass: qe, code: Er(M) };
          ((this.exitError = Bq(ReferenceError(oe), he)), Bq(M, he), x(this.exitError.message));
        } else {
          let oe = {
            telemetryMessage: j
              ? `Failed to spawn Claude Code process${et(M)}`
              : `Claude Code process error${et(M)}`,
            errorClass: j ? "spawn_failed" : "process_error",
            code: Er(M)
          };
          ((this.exitError = Bq(
            Error(`Failed to spawn Claude Code process: ${Boe(M.message)}`),
            oe
          )),
            Bq(M, oe),
            x(this.exitError.message));
        }
      }),
        ee.on("exit", (M, K) => {
          if (
            ((this.exitEventDelivered = !0), (this.ready = !1), this.abortController.signal.aborted)
          )
            this.exitError = De();
          else {
            let j = this.getProcessExitError(M, K);
            if (j) ((this.exitError = j), x(j.message));
          }
        }),
        (this.ready = !this.abortController.signal.aborted));
    } catch (e) {
      throw ((this.ready = !1), e);
    }
  }
  getProcessExitError(e, s) {
    if (e !== 0 && e !== null) {
      let r = Number.isInteger(e) ? e : void 0;
      return Bq(Error(`Claude Code process exited with code ${e}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process exited with code ${r ?? "unknown"}`,
        errorClass: "process_exited_nonzero",
        exitCode: r
      });
    } else if (s) {
      let r = /^SIG[A-Z0-9]{1,8}$/.test(s) ? s : "unknown";
      return Bq(Error(`Claude Code process terminated by signal ${s}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process terminated by signal ${r}`,
        errorClass: "process_killed_by_signal",
        signal: r
      });
    }
    return;
  }
  formatStderrTail() {
    let e = Ja(Boe(this.stderrTail), Ye).trim();
    return e ? `. stderr: ${e}` : "";
  }
  write(e) {
    if (this.abortController.signal.aborted) throw At();
    if (this.spawnResolve) {
      this.pendingWrites.push(e);
      return;
    }
    if (!this.ready || !this.processStdin) throw Error("ProcessTransport is not ready for writing");
    if (this.processStdin.writableEnded) {
      x("[ProcessTransport] Dropping write to ended stdin stream");
      return;
    }
    if (this.process?.killed || this.process?.exitCode !== null)
      throw Error("Cannot write to terminated process");
    if (this.exitError)
      throw Bq(Error(`Cannot write to process that exited with error: ${this.exitError.message}`), {
        telemetryMessage: `Cannot write to process that exited with error: ${kW(this.exitError) ?? "untagged exit error"}`,
        errorClass: xt(this.exitError, "errorClass"),
        code: Er(this.exitError),
        exitCode: Js(this.exitError),
        signal: xt(this.exitError, "signal")
      });
    x(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
    try {
      if (!this.processStdin.write(e)) x("[ProcessTransport] Write buffer full, data queued");
    } catch (s) {
      throw ((this.ready = !1), Error(`Failed to write to process stdin: ${d(s)}`));
    }
  }
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (
      (this.spawnAbort(
        this.abortController.signal.aborted ? De() : Error("Query closed before spawn")
      ),
      this.processStdin)
    )
      (this.processStdin.end(), (this.processStdin = void 0));
    if (this.abortHandler)
      (this.abortController.signal.removeEventListener("abort", this.abortHandler),
        (this.abortHandler = void 0));
    let e = this.process?.exitCode ?? null,
      s = this.process?.signalCode ?? null,
      r = !this.exitEventDelivered && ((e !== null && e >= 0) || s !== null),
      n;
    if (r) {
      if (
        ((this.exitEventDelivered = !0),
        (n = this.abortController.signal.aborted ? De() : this.getProcessExitError(e, s)),
        n && !this.exitError)
      )
        this.exitError = n;
    }
    let i = this.exitListeners;
    this.exitListeners = [];
    for (let { callback: h, handler: S } of i)
      if ((this.process?.off("exit", S), r))
        try {
          h(n);
        } catch (y) {
          x(`[ProcessTransport] onExit callback threw during close(): ${d(y)}`);
        }
    let m = () => {
        if (this.abortController.signal.aborted)
          this.forwardedAbort.abort(this.abortController.signal.reason);
      },
      l = this.process;
    if (l && !l.killed && l.exitCode === null && l.signalCode == null)
      (setTimeout(
        (h, S) => {
          if (h.exitCode !== null || h.signalCode != null) {
            S();
            return;
          }
          (h.kill("SIGTERM"),
            setTimeout(
              (y) => {
                if (y.exitCode === null) y.kill("SIGKILL");
              },
              5000,
              h
            ).unref(),
            S());
        },
        Bs,
        l,
        m
      ).unref(),
        l.once("exit", () => Ie.untrack(l)));
    else if (l) (Ie.untrack(l), m());
    this.ready = !1;
  }
  isReady() {
    return this.ready;
  }
  async *readMessages() {
    if (this.spawnPromise) (await this.spawnPromise, (this.spawnPromise = void 0));
    if (!this.processStdout) throw Error("ProcessTransport output stream not available");
    if (this.exitError) throw this.exitError;
    let e = Hs({ input: this.processStdout }),
      s = this.process
        ? (() => {
            let r = this.process,
              n = () => e.close();
            return (r.on("error", n), () => r.off("error", n));
          })()
        : void 0;
    if (this.exitError) e.close();
    try {
      for await (let r of e)
        if (r.trim()) {
          let n;
          try {
            n = te(r);
          } catch (i) {
            x(`Non-JSON stdout: ${r}`);
            continue;
          }
          yield n;
        }
      if (this.exitError) throw this.exitError;
      await this.waitForExit();
    } finally {
      (s?.(), e.close());
    }
  }
  endInput() {
    if (this.spawnResolve) {
      this.pendingEndInput = !0;
      return;
    }
    if (this.processStdin) this.processStdin.end();
  }
  onExit(e) {
    if (!this.process) return () => {};
    let s = (r, n) => {
      let i = this.getProcessExitError(r, n);
      e(i);
    };
    return (
      this.process.on("exit", s),
      this.exitListeners.push({ callback: e, handler: s }),
      () => {
        if (this.process) this.process.off("exit", s);
        let r = this.exitListeners.findIndex((n) => n.handler === s);
        if (r !== -1) this.exitListeners.splice(r, 1);
      }
    );
  }
  async waitForExit() {
    if (this.exitError) throw this.exitError;
    if (
      !this.process ||
      this.process.exitCode === 0 ||
      (this.process.killed && this.exitEventDelivered)
    )
      return;
    return new Promise((e, s) => {
      let r = (i, m) => {
        if (this.abortController.signal.aborted) {
          s(At());
          return;
        }
        let l = this.getProcessExitError(i, m);
        if (l) s(l);
        else e();
      };
      this.process.once("exit", r);
      let n = (i) => {
        (this.process.off("exit", r), s(i));
      };
      (this.process.once("error", n),
        this.process.once("exit", () => {
          this.process.off("error", n);
        }));
    });
  }
}
function Qs(e) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some((r) => e.endsWith(r));
}
function Xs(e, s) {
  let r = s ? "native binary" : "executable",
    n = Boe(e);
  if (qs(e))
    return {
      message: s
        ? `Claude Code native binary at ${n} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.`
        : `Claude Code executable at ${n} exists but failed to launch.`,
      telemetryMessage: `Claude Code ${r} exists at the configured path but failed to launch`,
      errorClass: "executable_launch_failed"
    };
  return {
    message: s
      ? `Claude Code native binary not found at ${n}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.`
      : `Claude Code executable not found at ${n}. Is options.pathToClaudeCodeExecutable set?`,
    telemetryMessage: `Claude Code ${r} not found at the configured path`,
    errorClass: "executable_not_found"
  };
}
function et(e) {
  let s = Er(e);
  return s === void 0 ? "" : ` (${s})`;
}
function De() {
  return Bq(new $ot("Claude Code process aborted by user"), {
    telemetryMessage: "Claude Code process aborted by user",
    errorClass: "aborted"
  });
}
function At() {
  return Bq(new $ot("Operation aborted"), {
    telemetryMessage: "Operation aborted",
    errorClass: "aborted"
  });
}
function xt(e, s) {
  let r = Object.hasOwn(e, s) ? Reflect.get(e, s) : void 0;
  return typeof r === "string" ? r : void 0;
}
function Js(e) {
  let s = Object.hasOwn(e, "exitCode") ? Reflect.get(e, "exitCode") : void 0;
  return typeof s === "number" ? s : void 0;
}
function Ys(e) {
  return typeof Reflect.get(e, "unref") === "function";
}
import { existsSync as Zs } from "fs";
var ae = "@anthropic-ai/claude-agent-sdk";
function er() {
  let e = typeof process.report?.getReport === "function" ? process.report.getReport() : null;
  return e != null && e.header?.glibcVersionRuntime === void 0;
}
function Lt(e, s = {}) {
  let r = s.platform ?? "linux",
    n = s.arch ?? "x64",
    i = s.exists ?? Zs,
    m = s.preferMusl ?? er(),
    l = process.env.SDK_NATIVE_BIN ?? "claude",
    h = r === "win32" ? ".exe" : "",
    y = (
      r === "android"
        ? [`${ae}-linux-${n}-android`]
        : r === "linux"
          ? m
            ? [`${ae}-linux-${n}-musl`, `${ae}-linux-${n}`]
            : [`${ae}-linux-${n}`, `${ae}-linux-${n}-musl`]
          : [`${ae}-${r}-${n}`]
    ).map((w) => `${w}/${l}${h}`);
  for (let w of y)
    try {
      let b = e(w);
      if (i(b)) return b;
    } catch {}
  return null;
}
function $t({ supportedDialogKinds: e, onUserDialog: s }) {
  if (e !== void 0 && e.length > 0 && !s)
    throw Error(
      "supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds."
    );
}
var Ft = 250,
  Oe = "sdk-manifest-capture:",
  le = Symbol("suppressControlResponse");
function Kt(e, s, r) {
  for (let n of r) {
    let i = n === "tools" ? zot(s) : void 0;
    t(
      i
        ? `[Query] MCP server '${e}': ${ZTt(i)}`
        : `[Query] MCP server '${e}': ignoring malformed ${n} in its config`
    );
  }
}
class Ae {
  transport;
  isSingleUserTurn;
  canUseTool;
  hooks;
  abortController;
  jsonSchema;
  initConfig;
  onElicitation;
  getOAuthToken;
  getHostAuthToken;
  onUserDialog;
  verbatimPrompts;
  runEndCeilingMs;
  pendingControlResponses = new Map();
  unmatchedControlResponses = new Map();
  static UNMATCHED_CONTROL_RESPONSES_MAX = 1024;
  cleanupPerformed = !1;
  cleanupCause;
  sdkMessages;
  inputStream = new FT();
  initialization;
  cancelControllers = new Map();
  hookCallbacks = new Map();
  nextCallbackId = 0;
  initHooksPayload;
  sdkMcpServers = new Map();
  initializeWritten;
  initializeHasBeenWritten = !1;
  markInitializeWritten;
  writingFirstInitialize = !1;
  stopSdkMcpManifestCapture;
  sdkMcpToolsChangedDuringCapture = new Set();
  pendingMcpResponses = new Map();
  runEndedResolve;
  runEnded = !1;
  resultReceived = !1;
  startupMark;
  runEndCeilingTimer;
  sessionState;
  lastErrorResultText;
  errorTextBeforeModelLessTurns;
  modelLessTurnEnded = !1;
  latestCommands;
  frameObserver;
  transcriptMirrorBatcher;
  cleanupCallbacks = [];
  cleanupPromise;
  setIsSingleUserTurn(e) {
    this.isSingleUserTurn = e;
  }
  setTranscriptMirrorBatcher(e) {
    this.transcriptMirrorBatcher = e;
  }
  reportMirrorError(e, s) {
    let r = {
      type: "system",
      subtype: "mirror_error",
      error: s,
      key: e,
      uuid: uie(),
      session_id: e.sessionId
    };
    this.inputStream.enqueue(r);
  }
  addCleanupCallback(e) {
    if (this.cleanupPerformed) e();
    else this.cleanupCallbacks.push(e);
  }
  isClosed() {
    return this.cleanupPerformed;
  }
  hasBidirectionalNeeds() {
    return (
      this.sdkMcpServers.size > 0 ||
      (this.hooks !== void 0 && Object.keys(this.hooks).length > 0) ||
      this.canUseTool !== void 0 ||
      this.onElicitation !== void 0 ||
      this.onUserDialog !== void 0 ||
      this.getOAuthToken !== void 0 ||
      this.getHostAuthToken !== void 0 ||
      this.workSecretAnswerer !== void 0
    );
  }
  remoteControlCallGeneration = 0;
  uiHost;
  workSecretAnswerer;
  constructor(e, s, r, n, i, m = new Map(), l, h, S, y, w, b, C = !1, T = wFt) {
    this.transport = e;
    this.isSingleUserTurn = s;
    this.canUseTool = r;
    this.hooks = n;
    this.abortController = i;
    this.jsonSchema = l;
    this.initConfig = h;
    this.onElicitation = S;
    this.getOAuthToken = y;
    this.getHostAuthToken = w;
    this.onUserDialog = b;
    this.verbatimPrompts = C;
    this.runEndCeilingMs = T;
    for (let [v, P] of m) this.connectSdkMcpServer(v, P);
    ((this.sdkMessages = this.readSdkMessages()),
      this.readMessages(),
      (this.initializeWritten = new Promise((v) => {
        this.markInitializeWritten = () => {
          ((this.initializeHasBeenWritten = !0), v());
        };
      })),
      (this.initialization = this.initialize({ first: !0 })),
      this.initialization.catch(() => {}));
  }
  setError(e) {
    this.inputStream.error(e);
  }
  setFrameObserver(e) {
    this.frameObserver = e;
  }
  dropUnreadHookProgress(e) {
    this.inputStream.dropNewestQueued(
      (s) => s.type === "system" && s.subtype === "hook_progress" && s.hook_id === e
    );
  }
  async stopTask(e) {
    await this.request({ subtype: "stop_task", task_id: e });
  }
  async backgroundTasks(e) {
    return (
      (await this.request({ subtype: "background_tasks", tool_use_id: e })).response.backgrounded ??
      !0
    );
  }
  close() {
    this.cleanup();
  }
  cleanup(e) {
    if ((this.clearRunEndCeiling(), this.cleanupPromise)) return this.cleanupPromise;
    return (
      (this.cleanupPerformed = !0),
      (this.cleanupCause = e),
      this.stopSdkMcpManifestCapture?.(),
      (this.cleanupPromise = this.performCleanup(e)),
      this.cleanupPromise
    );
  }
  async performCleanup(e) {
    for (let s of this.cleanupCallbacks)
      try {
        s();
      } catch {}
    if (((this.cleanupCallbacks = []), this.transcriptMirrorBatcher))
      try {
        await this.transcriptMirrorBatcher.flush();
      } catch {}
    try {
      for (let s of this.cancelControllers.values()) s.abort();
      (this.cancelControllers.clear(), this.transport.close());
    } catch (s) {
      t(`[Query.cleanup] transport.close() failed: ${d(s)}`, { level: "error" });
    }
    try {
      let s = e ?? st();
      for (let { reject: r } of this.pendingControlResponses.values()) r(s);
      (this.pendingControlResponses.clear(), this.unmatchedControlResponses.clear());
      for (let { reject: r } of this.pendingMcpResponses.values()) r(s);
      (this.pendingMcpResponses.clear(), this.hookCallbacks.clear());
      for (let { transport: r } of this.sdkMcpServers.values()) r.close().catch(() => {});
      if ((this.sdkMcpServers.clear(), e)) this.inputStream.error(e);
      else this.inputStream.done();
    } catch (s) {}
    if (this.transport.waitForExit) {
      let s = new AbortController();
      try {
        await Promise.race([this.transport.waitForExit(), X(2000, s.signal)]);
      } catch {
      } finally {
        s.abort();
      }
    }
  }
  next(...[e]) {
    return this.sdkMessages.next(...[e]);
  }
  async return(e) {
    return (await this.cleanup(), this.sdkMessages.return(e));
  }
  async throw(e) {
    return (await this.cleanup(), this.sdkMessages.throw(e));
  }
  [Symbol.asyncIterator]() {
    return this.sdkMessages;
  }
  async [Symbol.asyncDispose]() {
    await this.cleanup();
  }
  async readMessages() {
    try {
      for await (let e of this.transport.readMessages()) {
        if (e.type === "control_response") {
          let s = this.pendingControlResponses.get(e.response.request_id);
          if (s) s.handler(e.response);
          else {
            if (this.unmatchedControlResponses.size >= Ae.UNMATCHED_CONTROL_RESPONSES_MAX) {
              let r = this.unmatchedControlResponses.keys().next().value;
              if (r !== void 0) this.unmatchedControlResponses.delete(r);
            }
            this.unmatchedControlResponses.set(e.response.request_id, e.response);
          }
          continue;
        } else if (e.type === "control_request") {
          this.handleControlRequest(e);
          continue;
        } else if (e.type === "control_cancel_request") {
          this.handleControlCancelRequest(e);
          continue;
        } else if (e.type === "keep_alive") {
          if (Alr in e) {
            let s = e[Alr];
            if (typeof s === "string" && s.length <= wfi)
              this.startupMark = { mark: s, atMs: Date.now() };
          }
          continue;
        } else if (e.type === "transcript_mirror") {
          this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
          continue;
        }
        if (e.type === "system" && e.subtype === "commands_changed" && Array.isArray(e.commands))
          this.latestCommands = e.commands;
        if (
          e.type === "system" &&
          (e.subtype === "post_turn_summary" ||
            e.subtype === "task_summary" ||
            e.subtype === "session_metadata")
        ) {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "active_goal") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "autocompact_state") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "result") {
          if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
          let s = e.is_error
            ? e.subtype === "success"
              ? e.result
              : e.errors
                  .map((r) => r.trim())
                  .filter(Boolean)
                  .join("; ")
            : void 0;
          if (
            ((this.lastErrorResultText = s || void 0),
            (this.modelLessTurnEnded =
              e.subtype === "success" && !e.is_error && e.num_turns === 0 && e.result === ""),
            !this.modelLessTurnEnded)
          )
            this.errorTextBeforeModelLessTurns = this.lastErrorResultText;
          if (
            ((this.resultReceived = !0),
            this.sessionState === void 0 ||
              this.sessionState === "idle" ||
              !this.hasBidirectionalNeeds())
          )
            this.endRun();
          else this.armRunEndCeiling();
        } else if (e.type === "system" && e.subtype === "session_state_changed") {
          if (((this.sessionState = e.state), e.state === "idle")) {
            if (this.resultReceived) this.endRun();
          } else if (!(this.isSingleUserTurn && this.runEnded)) {
            if (((this.runEnded = !1), e.state === "requires_action")) this.clearRunEndCeiling();
            else if (this.resultReceived) this.armRunEndCeiling();
          }
          if ("sdk_host_only" in e && e.sdk_host_only === !0) continue;
        } else {
          if (((this.lastErrorResultText = void 0), e.type === "system" && e.subtype === "init"))
            this.modelLessTurnEnded = !1;
          else if (e.type !== "system" || e.subtype === "compact_boundary")
            ((this.errorTextBeforeModelLessTurns = void 0), (this.modelLessTurnEnded = !1));
          if (
            (e.type === "assistant" || e.type === "stream_event") &&
            e.parent_tool_use_id === null &&
            !(this.isSingleUserTurn && this.runEnded)
          )
            ((this.runEnded = !1), this.clearRunEndCeiling());
        }
        try {
          this.frameObserver?.(e);
        } catch (s) {
          t(`[Query.readMessages] The frame observer threw: ${d(s)}`, { level: "error" });
        }
        this.inputStream.enqueue(e);
      }
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      (this.inputStream.done(), this.cleanup());
    } catch (e) {
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      let s =
        this.lastErrorResultText ??
        (this.modelLessTurnEnded ? this.errorTextBeforeModelLessTurns : void 0);
      if (s !== void 0 && !(e instanceof $ot) && e?.name !== "SSEHttpError") {
        let r = Bq(Error(`Claude Code returned an error result: ${s}`), {
          telemetryMessage: "Claude Code returned an error result",
          errorClass: "error_result"
        });
        (t(`[Query.readMessages] Replacing exit error with result text. Original: ${d(e)}`),
          this.inputStream.error(r),
          this.cleanup(r));
        return;
      }
      (this.inputStream.error(e), this.cleanup(e));
    }
  }
  async handleControlRequest(e) {
    if (this.cleanupPerformed) {
      t(
        `[Query.handleControlRequest] Request ${e.request_id} (${e.request.subtype}) arrived after close \u2014 skipping`
      );
      return;
    }
    if (this.cancelControllers.has(e.request_id)) {
      t(
        `[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`
      );
      return;
    }
    let s = new AbortController();
    this.cancelControllers.set(e.request_id, s);
    try {
      let r;
      try {
        let n = await this.processControlRequest(e, s.signal);
        if (this.cleanupPerformed) return;
        if (n === le) return;
        let i = {
          type: "control_response",
          response: { subtype: "success", request_id: e.request_id, response: n }
        };
        r =
          _(i) +
          `
`;
      } catch (n) {
        if (this.cleanupPerformed) return;
        let i = {
          type: "control_response",
          response: { subtype: "error", request_id: e.request_id, error: d(n) }
        };
        r =
          _(i) +
          `
`;
      }
      try {
        await Promise.resolve(this.transport.write(r));
      } catch (n) {
        t(`[Query.handleControlRequest] Response write failed: ${d(n)}`, { level: "error" });
      }
    } finally {
      if (this.cancelControllers.get(e.request_id) === s)
        this.cancelControllers.delete(e.request_id);
    }
  }
  handleControlCancelRequest(e) {
    let s = this.cancelControllers.get(e.request_id);
    if (s) (s.abort(), this.cancelControllers.delete(e.request_id));
  }
  async processControlRequest(e, s) {
    if (OEe.some((r) => r === e.request.subtype))
      return (
        t(
          `[Query.processControlRequest] ${e.request.subtype} ${e.request_id} is for the machine serving this session's tools \u2014 leaving it unanswered`
        ),
        le
      );
    if (e.request.subtype === "can_use_tool") {
      if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
      let r = e.request.computer_folder,
        n = await this.canUseTool(e.request.tool_name, e.request.input, {
          signal: s,
          suggestions: e.request.permission_suggestions,
          blockedPath: e.request.blocked_path,
          ...(e.request.mcp_server && {
            mcpServer: { name: e.request.mcp_server.name, source: e.request.mcp_server.source }
          }),
          decisionReason: e.request.decision_reason,
          ...(typeof e.request.decision_reason_type === "string" && {
            decisionReasonType: e.request.decision_reason_type
          }),
          ...(typeof e.request.decision_reason_code === "string" && {
            decisionReasonCode: e.request.decision_reason_code
          }),
          ...(typeof e.request.server_policy_ask_only === "boolean" && {
            serverPolicyAskOnly: e.request.server_policy_ask_only
          }),
          title: e.request.title,
          displayName: e.request.display_name,
          description: e.request.description,
          defaultToNo: e.request.default_to_no,
          suppressAlwaysAllowRule: e.request.suppress_always_allow_rule,
          toolUseID: e.request.tool_use_id,
          agentID: e.request.agent_id,
          ...(typeof e.request.plugin === "string" && { plugin: e.request.plugin }),
          requestId: e.request_id,
          ...(typeof e.request.requires_user_interaction === "boolean" && {
            requiresUserInteraction: e.request.requires_user_interaction
          }),
          ...(typeof e.request.server_prompt === "string" && {
            serverPrompt: e.request.server_prompt
          }),
          ...(typeof r === "object" &&
            r !== null &&
            "path" in r &&
            typeof r.path === "string" &&
            "computer_name" in r &&
            typeof r.computer_name === "string" && {
              computerFolder: { path: r.path, computer_name: r.computer_name }
            }),
          ...(e.request.matched_ask_rule && {
            matchedAskRule: {
              source: e.request.matched_ask_rule.source,
              toolName: e.request.matched_ask_rule.tool_name,
              ...(e.request.matched_ask_rule.rule_content !== void 0 && {
                ruleContent: e.request.matched_ask_rule.rule_content
              })
            }
          })
        });
      if (n === null) return le;
      return { ...n, toolUseID: e.request.tool_use_id };
    } else if (e.request.subtype === "hook_callback")
      return await this.handleHookCallbacks(
        e.request.callback_id,
        e.request.input,
        e.request.tool_use_id,
        s
      );
    else if (e.request.subtype === "mcp_message") {
      let r = e.request,
        n = this.sdkMcpServers.get(r.server_name)?.transport;
      if (!n) throw Error(`SDK MCP server not found: ${r.server_name}`);
      if (cBn(r.message))
        return { mcp_response: await this.handleMcpControlRequest(r.server_name, r, n) };
      else {
        if (n.onmessage) n.onmessage(r.message);
        return { mcp_response: { jsonrpc: "2.0", result: {}, id: 0 } };
      }
    } else if (e.request.subtype === "elicitation") {
      let r = e.request;
      if (this.onElicitation) {
        let n = await this.onElicitation(
          {
            serverName: r.mcp_server_name,
            message: r.message,
            mode: r.mode,
            url: r.url,
            elicitationId: r.elicitation_id,
            requestedSchema: r.requested_schema,
            title: r.title,
            displayName: r.display_name,
            description: r.description
          },
          { signal: s, requestId: e.request_id }
        );
        if (n === null) return le;
        return n;
      }
      return { action: "decline" };
    } else if (e.request.subtype === "request_user_dialog") {
      if (this.onUserDialog) {
        let r = await this.onUserDialog(
          {
            dialogKind: e.request.dialog_kind,
            payload: e.request.payload,
            toolUseID: e.request.tool_use_id
          },
          { signal: s, requestId: e.request_id }
        );
        if (r === null) return le;
        return r;
      }
      return (
        t(
          `[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`
        ),
        a("tengu_request_user_dialog_response_ignored", { shape: c("auto_cancel") }),
        le
      );
    } else if (e.request.subtype === "oauth_token_refresh") {
      if (!this.getOAuthToken) throw Error("getOAuthToken callback is not provided.");
      let r,
        n =
          (await this.getOAuthToken({
            signal: s,
            onDecline: (i) => {
              if (xai(i)) r = i;
            }
          })) ?? null;
      return n === null && r !== void 0 ? { accessToken: n, reason: r } : { accessToken: n };
    } else if (e.request.subtype === "host_auth_token_refresh") {
      if (!this.getHostAuthToken) throw Error("getHostAuthToken callback is not provided.");
      let r = (await this.getHostAuthToken({ signal: s })) ?? null;
      return typeof r === "string" || r === null ? { authToken: r } : r;
    } else if (e.request.subtype === "remote_control_work_secret") {
      let r = this.workSecretAnswerer;
      if (!r) throw Error("refreshWorkSecret callback is not provided.");
      if (!qt(r.sessionId, e.request.session_id))
        throw Error("remote_control_work_secret names a session this host did not attach.");
      return { work_secret: (await r.refresh(r.sessionId, { signal: s })) || null };
    }
    if (e.request.subtype === "ui_copy" && this.uiHost?.copy) {
      let { subtype: r, ...n } = e.request;
      return this.uiHost.copy(n, { signal: s });
    }
    if (e.request.subtype === "ui_prompt_read" && this.uiHost?.promptRead) {
      let { subtype: r, ...n } = e.request;
      return this.uiHost.promptRead(n, { signal: s });
    }
    if (e.request.subtype === "ui_prompt_fill" && this.uiHost?.promptFill) {
      let { subtype: r, ...n } = e.request;
      return this.uiHost.promptFill(n, { signal: s });
    }
    if (e.request.subtype === "ui_prompt_suggest" && this.uiHost?.promptSuggest) {
      let { subtype: r, ...n } = e.request;
      return this.uiHost.promptSuggest(n, { signal: s });
    }
    if (e.request.subtype === "ui_read_selection" && this.uiHost?.readSelection) {
      let { subtype: r, ...n } = e.request;
      return this.uiHost.readSelection(n, { signal: s });
    }
    throw Error("Unsupported control request subtype: " + e.request.subtype);
  }
  async *readSdkMessages() {
    try {
      for await (let e of this.inputStream) (this.transport.markDelivered?.(e), yield e);
    } finally {
      await this.cleanup();
    }
  }
  async initialize({ first: e } = { first: !1 }) {
    if (!e && !this.initializeHasBeenWritten) await this.initializeWritten;
    let s, r;
    try {
      if (e && this.initConfig?.captureSdkMcpManifests === !0 && this.sdkMcpServers.size > 0) {
        s = await this.captureSdkMcpServerManifests();
        for (let l of this.sdkMcpToolsChangedDuringCapture) {
          let h = s !== void 0 && Object.hasOwn(s, l) ? s[l] : void 0;
          if (h?.toolsListResult !== void 0) s[l] = { initializeResult: h.initializeResult };
        }
      }
      this.sdkMcpToolsChangedDuringCapture.clear();
      let m = this.buildInitializeRequest(s);
      if (this.cleanupPerformed)
        throw this.cleanupCause ?? Error("Query closed before initialize was sent");
      this.writingFirstInitialize = e;
      try {
        r = this.request(m);
      } finally {
        this.writingFirstInitialize = !1;
      }
    } finally {
      if (e) this.markInitializeWritten();
    }
    let i = (await r).response;
    if (
      this.initConfig?.plugins !== void 0 &&
      this.initConfig.plugins.length > 0 &&
      i.plugins_applied !== !0
    )
      t(
        `[Query.initialize] Claude Code reported plugins_applied=${String(i.plugins_applied)} for ${this.initConfig.plugins.length} plugins sent with pluginDelivery 'initialize'; the process is running with the plugins it was launched with.`,
        { level: "warn" }
      );
    return i;
  }
  buildInitializeRequest(e) {
    if (this.hooks && !this.initHooksPayload) {
      this.initHooksPayload = {};
      for (let [m, l] of Object.entries(this.hooks))
        if (l.length > 0)
          this.initHooksPayload[m] = l.map((h) => {
            let S = [];
            for (let y of h.hooks) {
              let w = `hook_${this.nextCallbackId++}`;
              (this.hookCallbacks.set(w, y), S.push(w));
            }
            return { matcher: h.matcher, hookCallbackIds: S, timeout: h.timeout };
          });
    }
    let s = this.sdkMcpServers.size > 0 ? Array.from(this.sdkMcpServers.keys()) : void 0,
      r = Array.from(this.sdkMcpServers).flatMap(([m, { settings: l }]) =>
        Object.keys(l).length > 0 ? [[m, l]] : []
      ),
      n = r.length > 0 ? Object.fromEntries(r) : void 0;
    return {
      subtype: "initialize",
      hooks: this.initHooksPayload,
      sdkMcpServers: s,
      sdkMcpServerConfigs: n,
      sdkMcpServerManifests: e,
      jsonSchema: this.jsonSchema,
      systemPrompt:
        typeof this.initConfig?.systemPrompt === "string"
          ? [this.initConfig.systemPrompt]
          : this.initConfig?.systemPrompt,
      appendSystemPrompt: this.initConfig?.appendSystemPrompt,
      planModeInstructions: this.initConfig?.planModeInstructions,
      systemPromptSnapshot: this.initConfig?.systemPromptSnapshot,
      appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
      toolAliases: this.initConfig?.toolAliases,
      codeRunningMcpTools: this.initConfig?.codeRunningMcpTools,
      excludeDynamicSections: this.initConfig?.excludeDynamicSections,
      agents: this.initConfig?.agents,
      title: this.initConfig?.title,
      skills: Array.isArray(this.initConfig?.skills) ? this.initConfig.skills : void 0,
      webSearchIsolationExemptMcpServers: this.initConfig?.webSearchIsolationExemptMcpServers,
      promptSuggestions: this.initConfig?.promptSuggestions,
      agentProgressSummaries: this.initConfig?.agentProgressSummaries,
      forwardSubagentText: this.initConfig?.forwardSubagentText,
      supportedDialogKinds: this.initConfig?.supportedDialogKinds,
      perTaskStopAffordance: this.initConfig?.perTaskStopAffordance,
      rapidFollowupPreempt: this.initConfig?.rapidFollowupPreempt,
      forwardNestedSubagentToolCalls: this.initConfig?.forwardNestedSubagentToolCalls,
      workspaceTrust: this.initConfig?.workspaceTrust,
      plugins: this.initConfig?.plugins
    };
  }
  async captureSdkMcpServerManifests() {
    let e = performance.now(),
      s = new Map(),
      r = !1,
      n = async (b, C) => {
        try {
          if ((await this.sdkMcpServers.get(b)?.connection, r)) return;
          let T = await this.handleMcpControlRequest(
            b,
            {
              server_name: b,
              message: {
                jsonrpc: "2.0",
                id: Oe + "initialize",
                method: "initialize",
                params: {
                  protocolVersion: qAe,
                  capabilities: mft,
                  clientInfo: {
                    ...gft,
                    version:
                      {
                        ISSUES_EXPLAINER:
                          "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.310",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-23T17:43:32Z",
                        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
                        HOOKS_WORKER_URL: __sourceFilePath_6178e1e9e3a14bdc(
                          new __sourceFilePath_6178e1e9e3a14bdc_URL(
                            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                            import.meta.url
                          )
                        ),
                        DD_SOURCEMAP_GROUP: "default"
                      }.VERSION ?? "unknown"
                  }
                }
              }
            },
            C
          );
          if (r) return;
          if (!("result" in T)) {
            t(
              `[Query.captureSdkMcpServerManifests] '${b}' answered initialize with an error; leaving it to the CLI: ${_(T)}`,
              { level: "warn" }
            );
            return;
          }
          let v = T.result;
          C.onmessage?.({ jsonrpc: "2.0", method: "notifications/initialized" });
          let P = v.capabilities,
            D =
              typeof P === "object" &&
              P !== null &&
              "tools" in P &&
              P.tools !== void 0 &&
              P.tools !== null,
            q;
          if (D) {
            let B = await this.handleMcpControlRequest(
              b,
              {
                server_name: b,
                message: { jsonrpc: "2.0", id: Oe + "tools-list", method: "tools/list" }
              },
              C
            );
            if (r) return;
            if (!("result" in B)) {
              t(
                `[Query.captureSdkMcpServerManifests] '${b}' answered tools/list with an error; leaving it to the CLI: ${_(B)}`,
                { level: "warn" }
              );
              return;
            }
            if (B.result.nextCursor === void 0) q = B.result;
          }
          let Q = te(
            _(q === void 0 ? { initializeResult: v } : { initializeResult: v, toolsListResult: q })
          );
          s.set(b, { transport: C, manifest: Q });
        } catch (T) {
          if (!r)
            t(
              `[Query.captureSdkMcpServerManifests] '${b}': ${T}; the CLI will handshake it over the control channel`,
              { level: "warn" }
            );
        }
      },
      i = Array.from(this.sdkMcpServers, ([b, { transport: C }]) => n(b, C)),
      m = Promise.all(i).then(() => "settled"),
      l = new Promise((b) => {
        this.stopSdkMcpManifestCapture = () => b("closed");
      }),
      h = await Pe(Promise.race([m, l]), Ft);
    ((r = !0), (this.stopSdkMcpManifestCapture = void 0));
    let S = Math.round(performance.now() - e),
      y = { servers: i.length, captured: s.size, elapsed_ms: S };
    if (h === "closed") {
      f("sdk_mcp_manifest_capture", "closed", y);
      return;
    }
    if (h === void 0)
      (t(
        `[Query.captureSdkMcpServerManifests] ${s.size}/${i.length} in-process MCP servers captured within ${Ft} ms; the rest will handshake over the control channel`,
        { level: "warn" }
      ),
        f("sdk_mcp_manifest_capture", "deadline", y));
    else if (s.size < i.length) f("sdk_mcp_manifest_capture", "partial", y);
    else g("sdk_mcp_manifest_capture", y);
    if (s.size === 0) return;
    let w = Object.fromEntries(
      Array.from(this.sdkMcpServers).flatMap(([b, C]) => {
        let T = s.get(b);
        return T !== void 0 && T.transport === C.transport ? [[b, T.manifest]] : [];
      })
    );
    if (Object.keys(w).length === 0) return;
    return (
      t(
        `[Query.captureSdkMcpServerManifests] manifests for [${Object.keys(w).join(", ")}] captured in ${S} ms`
      ),
      w
    );
  }
  async interrupt(e) {
    return fo("sdk_interrupt", async () => {
      let s = await this.request({
          subtype: "interrupt",
          ...(e?.cancelQueued === !0 && { cancel_queued: !0 })
        }),
        r = s.response?.still_queued;
      if (!Array.isArray(r)) return;
      let n = s.response?.cancelled;
      return {
        still_queued: r.filter((i) => typeof i === "string"),
        ...(Array.isArray(n) && { cancelled: n.filter((i) => typeof i === "string") })
      };
    });
  }
  async setPermissionMode(e) {
    await this.request({ subtype: "set_permission_mode", mode: e });
  }
  startupMarkReached() {
    let e = this.startupMark;
    return e && { mark: e.mark, ageMs: Math.max(0, Math.round(Date.now() - e.atMs)) };
  }
  setUiHost(e) {
    this.uiHost = e;
  }
  async setMcpPermissionModeOverride(e, s) {
    return (
      (await this.request({ subtype: "set_mcp_permission_mode_override", serverName: e, mode: s }))
        .response ?? {}
    );
  }
  async setChromeBrowserHints(e) {
    await this.request({ subtype: "set_chrome_browser_hints", ...e });
  }
  async setPromptSuggestionsPaused(e) {
    await this.request({ subtype: "set_prompt_suggestions_paused", paused: e });
  }
  awaitControlResponse(e) {
    return (
      this.transport.expectControlResponse?.(e),
      new Promise((s, r) => {
        let n = (m) => {
          if (m.subtype === "success") {
            let { pending_permission_requests: l, pending_user_dialog_requests: h, ...S } = m;
            s(S);
          } else r(new R(m.error, "awaitControlResponse: CLI error verdict"));
          if (m.pending_permission_requests || m.pending_user_dialog_requests)
            t("[Query] Ignoring prompt-redelivery fields on awaitControlResponse response");
        };
        if (this.cleanupPerformed) {
          r(st());
          return;
        }
        let i = this.unmatchedControlResponses.get(e);
        if (i) {
          (this.unmatchedControlResponses.delete(e), n(i));
          return;
        }
        this.pendingControlResponses.set(e, {
          handler: (m) => {
            (this.pendingControlResponses.delete(e), n(m));
          },
          reject: r
        });
      })
    );
  }
  async setModel(e) {
    await this.request({ subtype: "set_model", model: e });
  }
  async setMaxThinkingTokens(e, s) {
    await this.request({
      subtype: "set_max_thinking_tokens",
      max_thinking_tokens: e,
      thinking_display: s
    });
  }
  async applyFlagSettings(e) {
    return fo("sdk_apply_flag_settings", async () => {
      await this.request({ subtype: "apply_flag_settings", settings: e });
    });
  }
  async getSettings() {
    return (await this.request({ subtype: "get_settings" })).response;
  }
  async getHooksListing() {
    return (await this.request({ subtype: "get_hooks_listing" })).response;
  }
  async getTaskOutput(e) {
    return (await this.request({ subtype: "get_task_output", task_id: e })).response;
  }
  async listPermissionRules() {
    return (await this.request({ subtype: "list_permission_rules" })).response;
  }
  async updateSettings(e, s) {
    return fo("sdk_update_settings", async () => {
      await this.request({ subtype: "update_settings", source: e, settings: s });
    });
  }
  async rewindFiles(e, s) {
    return fo(
      "sdk_rewind_files",
      async () =>
        (await this.request({ subtype: "rewind_files", user_message_id: e, dry_run: s?.dryRun }))
          .response
    );
  }
  async cancelAsyncMessage(e) {
    return (await this.request({ subtype: "cancel_async_message", message_uuid: e })).response
      .cancelled;
  }
  async seedReadState(e, s) {
    await this.request({ subtype: "seed_read_state", path: e, mtime: s });
  }
  async setCwd(e, s) {
    return fo(
      "sdk_set_cwd",
      async () =>
        (
          await this.request({
            subtype: "set_cwd",
            path: e,
            ...(s?.trustAccepted !== void 0 && { trust_accepted: s.trustAccepted }),
            ...(s?.trustedDirectory !== void 0 && { trusted_directory: s.trustedDirectory })
          })
        ).response
    );
  }
  async claimSession(e) {
    let s = fo(
        "sdk_claim_session",
        async () =>
          (
            await this.request({
              subtype: "claim_session",
              ...e,
              include_initialize: e.include_initialize ?? !0
            })
          ).response
      ),
      r = this.initialization;
    return (
      (this.initialization = s.then(
        async (n) => {
          if (n?.initialize === void 0) return r;
          let i = n.initialize,
            m = await r.then(
              (y) => ({
                hooks_applied: y.hooks_applied,
                plugins_applied: y.plugins_applied,
                code_running_mcp_tools_applied: y.code_running_mcp_tools_applied
              }),
              () => ({
                hooks_applied: void 0,
                plugins_applied: void 0,
                code_running_mcp_tools_applied: void 0
              })
            ),
            l = i.hooks_applied ?? m.hooks_applied,
            h = i.plugins_applied ?? m.plugins_applied,
            S = i.code_running_mcp_tools_applied ?? m.code_running_mcp_tools_applied;
          return {
            ...i,
            ...(l !== void 0 && { hooks_applied: l }),
            ...(h !== void 0 && { plugins_applied: h }),
            ...(S !== void 0 && { code_running_mcp_tools_applied: S })
          };
        },
        () => r
      )),
      this.initialization.catch(() => {}),
      s
    );
  }
  async enableRemoteControl(e, s, r) {
    let n = ++this.remoteControlCallGeneration,
      i = this.workSecretAnswerer,
      m = r?.reattachSessionId || (r?.workSecret === void 0 ? void 0 : sr(r.workSecret)),
      l =
        e && r?.workSecret !== void 0 && r.refreshWorkSecret && m !== void 0
          ? { sessionId: m, refresh: r.refreshWorkSecret }
          : void 0;
    this.workSecretAnswerer = l;
    let h;
    try {
      h = (
        await this.request({
          subtype: "remote_control",
          enabled: e,
          ...(s !== void 0 && { name: s }),
          reattach_session_id: r?.reattachSessionId,
          keep_session_on_exit: r?.keepSessionOnExit,
          work_secret: r?.workSecret
        })
      ).response;
    } catch (S) {
      if (n === this.remoteControlCallGeneration) this.workSecretAnswerer = void 0;
      throw S;
    }
    if (e && n === this.remoteControlCallGeneration) {
      let S = h.bridge_session_id,
        y = [l, i];
      this.workSecretAnswerer =
        typeof S === "string" ? y.find((w) => w !== void 0 && qt(w.sessionId, S)) : void 0;
    }
    return h;
  }
  async submitFeedback(e, s) {
    return (
      await this.request({
        subtype: "submit_feedback",
        description: e,
        surface: s?.surface,
        draft_id: s?.draft_id,
        type: s?.type,
        title: s?.title,
        area: s?.area,
        attach_transcript: s?.attach_transcript,
        save_locally: s?.save_locally
      })
    ).response;
  }
  async submitSurveyFeedback(e) {
    return (await this.request({ subtype: "submit_survey_feedback", ...e })).response;
  }
  async renameSession(e, s) {
    await this.request({ subtype: "rename_session", title: e, source: "host", session_id: s });
  }
  async generateSessionTitle(e, s) {
    return fo(
      "sdk_session_title_generate",
      async () =>
        (
          await this.request({
            subtype: "generate_session_title",
            description: e,
            persist: s?.persist
          })
        ).response.title
    );
  }
  async askSideQuestion(e, s) {
    return fo(
      "sdk_side_question",
      async () => {
        let n = (
          await this.request(
            {
              subtype: "side_question",
              question: e,
              ...(s?.history?.length && { history: [...s.history] })
            },
            s
          )
        ).response;
        return n.response === null
          ? null
          : {
              response: n.response,
              synthetic: n.synthetic ?? !1,
              ...(n.refusal_fallback && {
                refusalFallback: {
                  originalModel: n.refusal_fallback.original_model,
                  fallbackModel: n.refusal_fallback.fallback_model,
                  content: n.refusal_fallback.content
                }
              })
            };
      },
      () => (s?.signal?.aborted ? "cancelled" : "error")
    );
  }
  async launchUltrareview(e, s) {
    return (
      await this.request({ subtype: "ultrareview_launch", args: e, confirm: s?.confirm ?? !1 })
    ).response;
  }
  async messageRated(e) {
    await this.request({
      subtype: "message_rated",
      messageUuid: e.messageUuid,
      sentiment: e.sentiment,
      surface: e.surface,
      cleared: e.cleared ?? !1
    });
  }
  processPendingPermissionRequests(e) {
    for (let s of e)
      if (s.request.subtype === "can_use_tool")
        this.handleControlRequest({
          ...s,
          request: { ...s.request, server_policy_ask_only: void 0 }
        }).catch(() => {});
  }
  processPendingUserDialogRequests(e) {
    for (let s of e)
      if (s.request.subtype === "request_user_dialog") this.handleControlRequest(s).catch(() => {});
  }
  request(e, s) {
    let r = s?.signal;
    if (r?.aborted) return Promise.reject(N(r.reason ?? "Control request aborted"));
    if (this.cleanupPerformed) return Promise.reject(st());
    let n = Math.random().toString(36).substring(2, 15);
    this.transport.expectControlResponse?.(n);
    let i = { request_id: n, type: "control_request", request: e },
      m = e.subtype === "initialize";
    return new Promise((l, h) => {
      let S,
        y = !1,
        w = (v) => {
          (this.pendingControlResponses.delete(n), S?.(), l(v));
        },
        b = (v) => {
          (this.pendingControlResponses.delete(n), S?.(), h(v));
        };
      if (r) {
        let v = () => {
          if ((b(N(r.reason ?? "Control request aborted")), !y)) return;
          try {
            Promise.resolve(
              this.transport.write(
                _({ type: "control_cancel_request", request_id: n }) +
                  `
`
              )
            ).catch(() => {});
          } catch {}
        };
        (r.addEventListener("abort", v, { once: !0 }),
          (S = () => {
            r.removeEventListener("abort", v);
          }));
      }
      this.pendingControlResponses.set(n, {
        handler: (v) => {
          if (v.subtype === "success") w(v);
          else
            b(
              Bq(Error(v.error), {
                telemetryMessage: `Claude Code control request failed (${e.subtype})`,
                errorClass: "control_request_failed",
                errorCode:
                  typeof v.error_code === "string" && tr.test(v.error_code) ? v.error_code : void 0
              })
            );
          if (!m && (v.pending_permission_requests || v.pending_user_dialog_requests))
            t(
              `[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${e.subtype})`
            );
          else {
            if (v.pending_permission_requests)
              this.processPendingPermissionRequests(v.pending_permission_requests);
            if (v.pending_user_dialog_requests)
              this.processPendingUserDialogRequests(v.pending_user_dialog_requests);
          }
        },
        reject: b
      });
      let C =
          _(i) +
          `
`,
        T = () => {
          if (r?.aborted) return;
          return ((y = !0), this.transport.write(C));
        };
      try {
        (this.initializeHasBeenWritten || this.writingFirstInitialize
          ? Promise.resolve(T())
          : this.initializeWritten.then(T)
        ).catch(b);
      } catch (v) {
        b(v);
      }
    });
  }
  initializationResult() {
    return this.initialization;
  }
  writeAfterInitialize(e) {
    if (this.initializeHasBeenWritten) return Promise.resolve(this.transport.write(e));
    return this.initializeWritten.then(() => this.transport.write(e));
  }
  reinitialize() {
    return fo("sdk_reinitialize", () => this.initialize({ first: !1 }));
  }
  async supportedCommands() {
    let { commands: e } = await this.initialization;
    return this.latestCommands ?? e;
  }
  async supportedModels() {
    return (await this.initialization).models;
  }
  async supportedAgents() {
    return (await this.initialization).agents;
  }
  async reconnectMcpServer(e) {
    await this.request({ subtype: "mcp_reconnect", serverName: e });
  }
  async toggleMcpServer(e, s) {
    return fo("sdk_mcp_toggle_server", async () => {
      await this.request({ subtype: "mcp_toggle", serverName: e, enabled: s });
    });
  }
  async readMcpResource(e, s) {
    return (await this.request({ subtype: "mcp_read_resource", serverName: e, uri: s })).response;
  }
  async enableChannel(e) {
    return fo("sdk_mcp_enable_channel", async () => {
      await this.request({ subtype: "channel_enable", serverName: e });
    });
  }
  async mcpAuthenticate(e, s) {
    return (await this.request({ subtype: "mcp_authenticate", serverName: e, redirectUri: s }))
      .response;
  }
  async mcpClearAuth(e) {
    return (await this.request({ subtype: "mcp_clear_auth", serverName: e })).response;
  }
  async mcpSubmitOAuthCallbackUrl(e, s) {
    return (
      await this.request({ subtype: "mcp_oauth_callback_url", serverName: e, callbackUrl: s })
    ).response;
  }
  async claudeAuthenticate(e) {
    return (await this.request({ subtype: "claude_authenticate", loginWithClaudeAi: e })).response;
  }
  async claudeOAuthCallback(e, s) {
    return (
      await this.request({ subtype: "claude_oauth_callback", authorizationCode: e, state: s })
    ).response;
  }
  async claudeOAuthWaitForCompletion() {
    return (await this.request({ subtype: "claude_oauth_wait_for_completion" })).response;
  }
  async mcpServerStatus() {
    return (await this.request({ subtype: "mcp_status" })).response.mcpServers;
  }
  async getContextUsage(e) {
    return (await this.request({ subtype: "get_context_usage", ...e })).response;
  }
  async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET(e) {
    return (
      await this.request({ subtype: "get_usage", ...(e?.skipBehaviors && { skip_behaviors: !0 }) })
    ).response;
  }
  async getMemoryDialog() {
    return (await this.request({ subtype: "get_memory_dialog" })).response;
  }
  async getSkillsDialog() {
    return (await this.request({ subtype: "get_skills_dialog" })).response;
  }
  async getStatus() {
    return (await this.request({ subtype: "get_status" })).response;
  }
  async exportConversation() {
    return (await this.request({ subtype: "export_conversation" })).response;
  }
  async readCloudSessions(e, s) {
    return (await this.request(e, s)).response;
  }
  async getChromeDialog() {
    return (await this.request({ subtype: "get_chrome_dialog" })).response;
  }
  async getChromeBrowsers() {
    return (await this.request({ subtype: "get_chrome_browsers" })).response;
  }
  async selectChromeBrowser(e) {
    return (await this.request({ subtype: "select_chrome_browser", device_id: e })).response;
  }
  async getSandboxDialog() {
    return (await this.request({ subtype: "get_sandbox_dialog" })).response;
  }
  async readFile(e, s) {
    try {
      return (
        await this.request({
          subtype: "read_file",
          path: e,
          max_bytes: s?.maxBytes,
          encoding: s?.encoding
        })
      ).response;
    } catch {
      return null;
    }
  }
  async getPlan() {
    return (await this.request({ subtype: "get_plan" })).response;
  }
  async reloadPlugins(e) {
    return fo(
      "sdk_reload_plugins",
      async () =>
        (
          await this.request({
            subtype: "reload_plugins",
            ...(e?.holdOnCacheImpact && { hold_on_cache_impact: !0 }),
            ...(e?.addPlugins && e.addPlugins.length > 0 && { add_plugins: e.addPlugins })
          })
        ).response
    );
  }
  async reloadSkills() {
    return fo(
      "sdk_reload_skills",
      async () => (await this.request({ subtype: "reload_skills" })).response
    );
  }
  async reloadOutputStyles() {
    return fo(
      "sdk_reload_output_styles",
      async () => (await this.request({ subtype: "reload_output_styles" })).response
    );
  }
  async setMcpServers(e) {
    return fo("sdk_mcp_set_servers", async () => {
      let s = {},
        r = {};
      for (let [h, S] of Object.entries(e))
        if (S.type === "sdk" && "instance" in S) s[h] = S;
        else r[h] = S;
      let n = new Set(this.sdkMcpServers.keys()),
        i = new Set(Object.keys(s));
      for (let h of n) if (!i.has(h)) await this.disconnectSdkMcpServer(h);
      for (let [h, S] of Object.entries(s)) {
        let y = this.sdkMcpServers.get(h);
        if (!y) {
          this.connectSdkMcpServer(h, S);
          continue;
        }
        let { settings: w, ignored: b } = Got(S);
        if (
          (Kt(h, S, b),
          w.timeout !== y.settings.timeout ||
            w.disableAutoBackground !== y.settings.disableAutoBackground ||
            w.connectorId !== y.settings.connectorId)
        )
          t(
            `[Query.setMcpServers] MCP server '${h}' is already registered, so the different timeout, disableAutoBackground or connectorId passed to setMcpServers is ignored; remove and re-add the server to change it`
          );
        if (w.tools !== void 0 && !uar(w.tools, y.settings.tools))
          (t(
            w.tools.length === 0
              ? `[Query.setMcpServers] MCP server '${h}': per-tool policy cleared`
              : `[Query.setMcpServers] MCP server '${h}': per-tool policy replaced (${w.tools.length} ${w.tools.length === 1 ? "entry" : "entries"})`
          ),
            (y.settings = { ...y.settings, tools: w.tools }));
      }
      let m = {};
      for (let h of Object.keys(s))
        m[h] = { type: "sdk", name: h, ...this.sdkMcpServers.get(h)?.settings };
      return (await this.request({ subtype: "mcp_set_servers", servers: { ...r, ...m } })).response;
    });
  }
  async accountInfo() {
    return (await this.initialization).account;
  }
  async streamInput(e) {
    t("[Query.streamInput] Starting to process input stream");
    try {
      if (!this.initializeHasBeenWritten) await this.initializeWritten;
      let s = 0;
      for await (let r of e) {
        if (
          (s++,
          t(`[Query.streamInput] Processing message ${s}: ${r.type}`),
          this.abortController?.signal.aborted)
        )
          break;
        ((this.runEnded = !1),
          (this.resultReceived = !1),
          this.clearRunEndCeiling(),
          await Promise.resolve(
            this.transport.write(
              _(this.verbatimPrompts ? { ...r, client_composed: !0 } : r) +
                `
`
            )
          ));
      }
      if (
        (t(`[Query.streamInput] Finished processing ${s} messages from input stream`),
        s > 0 && this.hasBidirectionalNeeds())
      )
        (t("[Query.streamInput] Has bidirectional needs, waiting for the run to end"),
          await this.waitForRunEnd());
      (t("[Query] Calling transport.endInput() to close stdin to CLI process"),
        this.transport.endInput());
    } catch (s) {
      if (!(s instanceof $ot)) throw s;
    }
  }
  endRun() {
    if (this.runEnded) return;
    if (
      ((this.runEnded = !0),
      this.clearRunEndCeiling(),
      this.runEndedResolve?.(),
      this.isSingleUserTurn)
    )
      (t("[Query.readMessages] Run ended for single-turn query, closing stdin"),
        this.transport.endInput());
  }
  armRunEndCeiling() {
    if (
      (this.clearRunEndCeiling(),
      this.runEnded || this.cleanupPerformed || this.runEndCeilingMs <= 0)
    )
      return;
    ((this.runEndCeilingTimer = setTimeout(
      () => {
        (t(
          `[Query.readMessages] No 'idle' ${this.runEndCeilingMs}ms after the last result, ending the run`
        ),
          this.endRun());
      },
      Math.min(this.runEndCeilingMs, ac)
    )),
      this.runEndCeilingTimer.unref?.());
  }
  clearRunEndCeiling() {
    (clearTimeout(this.runEndCeilingTimer), (this.runEndCeilingTimer = void 0));
  }
  waitForRunEnd() {
    if (this.runEnded)
      return (
        t("[Query.waitForRunEnd] Run already ended, returning immediately"),
        Promise.resolve()
      );
    return new Promise((e) => {
      let s = this.abortController?.signal;
      if (this.cleanupPerformed || s?.aborted) {
        e();
        return;
      }
      let r = () => e();
      (s?.addEventListener("abort", r, { once: !0 }),
        this.addCleanupCallback(() => {
          (s?.removeEventListener("abort", r), e());
        }),
        (this.runEndedResolve = () => {
          (s?.removeEventListener("abort", r), e());
        }));
    });
  }
  handleHookCallbacks(e, s, r, n) {
    let i = this.hookCallbacks.get(e);
    if (!i) throw Error(`No hook callback found for ID: ${e}`);
    return i(s, r, { signal: n });
  }
  connectSdkMcpServer(e, s) {
    let r = new Tbo((l) => this.sendMcpServerMessageToCli(e, l)),
      n = s.instance.connect(r).catch((l) => {
        if (this.sdkMcpServers.get(e)?.transport === r) this.sdkMcpServers.delete(e);
        t(`[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${l}`, {
          level: "error"
        });
      }),
      { settings: i, ignored: m } = Got(s);
    (Kt(e, s, m), this.sdkMcpServers.set(e, { transport: r, settings: i, connection: n }));
  }
  async disconnectSdkMcpServer(e) {
    let s = this.sdkMcpServers.get(e);
    if (s) {
      let r = `${e}:${Oe}`;
      for (let [n, i] of this.pendingMcpResponses)
        if (n.startsWith(r))
          (this.pendingMcpResponses.delete(n),
            i.reject(Error("MCP server was removed during the manifest capture")));
      if ((await s.transport.close(), this.sdkMcpServers.get(e) === s))
        this.sdkMcpServers.delete(e);
    }
  }
  sendMcpServerMessageToCli(e, s) {
    if ("id" in s && s.id !== null && s.id !== void 0) {
      let n = `${e}:${s.id}`,
        i = this.pendingMcpResponses.get(n);
      if (i) {
        (i.resolve(s), this.pendingMcpResponses.delete(n));
        return;
      }
      if (typeof s.id === "string" && s.id.startsWith(Oe)) {
        t(
          `[Query.sendMcpServerMessageToCli] Dropping late manifest-capture reply from '${e}' (${s.id})`
        );
        return;
      }
    }
    let r = {
      type: "control_request",
      request_id: uie(),
      request: { subtype: "mcp_message", server_name: e, message: s }
    };
    if (!this.initializeHasBeenWritten && JIn(s)) this.sdkMcpToolsChangedDuringCapture.add(e);
    this.writeAfterInitialize(
      _(r) +
        `
`
    ).catch((n) => {
      t(`[Query.sendMcpServerMessageToCli] Transport write failed: ${n}`, { level: "error" });
    });
  }
  handleMcpControlRequest(e, s, r) {
    let n = "id" in s.message ? s.message.id : null,
      i = `${e}:${n}`;
    return new Promise((m, l) => {
      let h = () => {
          this.pendingMcpResponses.delete(i);
        },
        S = (w) => {
          (h(), m(w));
        },
        y = (w) => {
          (h(), l(w));
        };
      if ((this.pendingMcpResponses.set(i, { resolve: S, reject: y }), r.onmessage))
        r.onmessage(s.message);
      else {
        (h(), l(Error("No message handler registered")));
        return;
      }
    });
  }
}
function st() {
  return Error("Query closed before response received");
}
var tr = /^[a-z][a-z0-9_]{0,63}$/;
function qt(e, s) {
  if (e === s) return !0;
  let r = e.slice(e.lastIndexOf("_") + 1),
    n = s.slice(s.lastIndexOf("_") + 1);
  return r.length >= 4 && r === n;
}
function sr(e) {
  try {
    let s = te(Buffer.from(e, "base64url").toString("utf8"));
    if (
      typeof s !== "object" ||
      s === null ||
      !("session_ingress_token" in s) ||
      typeof s.session_ingress_token !== "string"
    )
      return;
    let r = s.session_ingress_token,
      i = (r.startsWith("sk-ant-si-") ? r.slice(10) : r).split(".");
    if (i.length !== 3 || !i[1]) return;
    let m = te(Buffer.from(i[1], "base64url").toString("utf8"));
    return typeof m === "object" &&
      m !== null &&
      "session_id" in m &&
      typeof m.session_id === "string" &&
      m.session_id
      ? m.session_id
      : void 0;
  } catch {
    return;
  }
}
var xe = Ce(fl(), 1);
var Ht = 60000,
  nr = _f,
  ha = Ht + nr;
import { copyFile as or, readFile as ir, rm as Bt, writeFile as Gt } from "fs/promises";
import { homedir as zt } from "os";
import { join as rt } from "path";
function Wt(e) {
  return {
    globalConfig: rt(e || zt(), ".claude.json"),
    userSettings: rt(e || rt(zt(), ".claude"), "settings.json")
  };
}
function nt(e, s, r, n) {
  return e !== void 0 && s === r ? { backend: e, key: n } : void 0;
}
async function de(e, s, r, n) {
  if (n) return ar(n, e, s, r);
  try {
    if (r) await Gt(s, r(await ir(e)), { mode: 384 });
    else await or(e, s);
  } catch (i) {
    if (E(i) === void 0) throw i;
    if (!G(i))
      (await Bt(s, { force: !0 }).catch(() => {}),
        t(`sessionStore resume: skipping ${e} (${E(i)})`));
  }
}
async function ar({ backend: e, key: s }, r, n, i) {
  let m = await e.read([s]);
  if (!m.ok) {
    if (m.error.code === "InvalidArgument")
      throw new R(
        `sessionStore resume: invalid v5 key for ${r}: ${m.error.argument}${m.error.reason ? ` (${m.error.reason})` : ""}`,
        "sessionStore resume: invalid v5 key (InvalidArgument from backend read)"
      );
    t(`sessionStore resume: skipping ${r} (${m.error.code})`);
    return;
  }
  let l = m.value.items[0];
  if (!l?.found) return;
  let h = Buffer.from(l.value);
  try {
    await Gt(n, i ? i(h) : h, { mode: 384 });
  } catch (S) {
    if (E(S) === void 0) throw S;
    if (!G(S))
      (await Bt(n, { force: !0 }).catch(() => {}),
        t(`sessionStore resume: skipping ${r} (${E(S)})`));
  }
}
function lr(e, s) {
  if (e === "bypassPermissions")
    return "canUseTool will not be invoked: permissionMode 'bypassPermissions' auto-approves every tool call (except explicit deny rules) before the callback is consulted. To gate every tool call, use a PreToolUse hook instead.";
  let r = s.filter((n) => n.length > 0 && !n.includes("("));
  if (r.length === 0) return;
  return `canUseTool will not be invoked for: ${r.join(", ")}. Bare allowedTools entries auto-approve the whole tool before the callback is consulted. To gate every tool call, use a PreToolUse hook; or remove the bare names from allowedTools so they fall through to canUseTool. Allow rules from settings files can also shadow the callback but are not visible here.`;
}
function Qt(e, s, r) {
  if (!e) return;
  let n = lr(s, r);
  if (n === void 0) return;
  process.emitWarning(n, { code: "CLAUDE_SDK_CAN_USE_TOOL_SHADOWED" });
}
import { realpathSync as dr } from "fs";
import { isAbsolute as cr, relative as pr, resolve as fr, sep as mr } from "path";
function Xt(e) {
  let s = fr(e ?? "."),
    r;
  try {
    r = dr(s);
  } catch {
    r = s;
  }
  return In(r);
}
function be(e, s) {
  let r = Xt(e);
  if (s === void 0) return fT(r);
  return (s.CLAUDE_CONFIG_DIR ? kss(s.CLAUDE_CODE_PROJECT_DIR_NAME) : void 0) ?? FH(r);
}
function ot(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "agent_metadata";
}
function it(e, s) {
  let r = pr(s, e),
    n = r.split(mr);
  if (n[0] === ".." || cr(r)) return null;
  if (n.length < 2) return null;
  let i = n[0],
    m = n[1];
  if (n.length === 2 && m.endsWith(".jsonl"))
    return { projectKey: i, sessionId: m.replace(/\.jsonl$/, "") };
  if (n.length >= 4) {
    let l = n.slice(2),
      h = l.length - 1;
    return (
      (l[h] = l.at(-1).replace(/\.jsonl$/, "")),
      { projectKey: i, sessionId: m, subpath: l.join("/") }
    );
  }
  return null;
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
var Tr = ["enabledPlugins", "extraKnownMarketplaces", "additionalMarketplaces"];
function Yt(e) {
  let s;
  try {
    s = te(No(e.toString("utf8")));
  } catch {
    return e;
  }
  if (!Zt(s)) return e;
  let r = !1;
  for (let i of Tr) if (Object.hasOwn(s, i)) (delete s[i], (r = !0));
  let n = s.env;
  if (Zt(n) && Object.hasOwn(n, "CLAUDE_CONFIG_DIR")) (delete n.CLAUDE_CONFIG_DIR, (r = !0));
  return r ? _(s) : e;
}
function Zt(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
async function Pr(e, s) {
  if (!e) return;
  let r = e;
  try {
    let n = te(e);
    if (n?.claudeAiOauth?.refreshToken) (delete n.claudeAiOauth.refreshToken, (r = _(n)));
  } catch {}
  await es(s, r, { mode: 384 });
}
function Mr() {
  return Promise.resolve(void 0);
}
async function Ir(e, s, r, n, i = 60000, m) {
  if (!Y0(s)) return;
  let l = be(r, n),
    h = await Nt(
      e.load({ projectKey: l, sessionId: s }),
      i,
      `SessionStore.load() timed out after ${i}ms for session ${s}`
    );
  if (!h || h.length === 0) return;
  let S = A(br(), `claude-resume-${gr()}`);
  try {
    let y = A(S, "projects", l);
    await at(y, { recursive: !0, mode: 448 });
    let w = A(y, `${s}.jsonl`);
    await X4e(w, h);
    let b = n?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      C = b ?? A(lt(), ".claude"),
      T;
    try {
      T = await Sr(A(C, ".credentials.json"), "utf-8");
    } catch (H) {
      if (!G(H)) throw H;
    }
    if (!b && !(n ?? process.env).ANTHROPIC_API_KEY && !(n ?? process.env).CLAUDE_CODE_OAUTH_TOKEN)
      T = (await Mr()) ?? T;
    await Pr(T, A(S, ".credentials.json"));
    let v = Wt(ecr("CLAUDE_CONFIG_DIR")),
      P = b || lt(),
      D = A(P, ".claude.json");
    (await de(D, A(S, ".claude.json"), void 0, nt(m, D, v.globalConfig, We.globalConfig())),
      await de(A(C, ".config.json"), A(S, ".config.json")));
    for (let H of wSe) if (H) await de(A(P, `.claude${H}.json`), A(S, `.claude${H}.json`));
    let q = A(C, "settings.json");
    if (
      (await de(q, A(S, "settings.json"), Yt, nt(m, q, v.userSettings, We.userSettings())),
      await de(A(C, "cowork_settings.json"), A(S, "cowork_settings.json"), Yt),
      e.listSubkeys)
    )
      await Dr(e, { projectKey: l, sessionId: s }, A(y, s), i);
    return S;
  } catch (y) {
    throw (await rs(S), y);
  }
}
async function Dr(e, s, r, n) {
  let i = await Nt(
    e.listSubkeys({ projectKey: s.projectKey, sessionId: s.sessionId }),
    n,
    `SessionStore.listSubkeys() timed out after ${n}ms for session ${s.sessionId}`
  );
  for (let m of i) {
    let l = dt(r, m + ".jsonl");
    if (!m || _r(m) || m.split(/[\\/]/).includes("..") || !l.startsWith(r + vr)) {
      t(`[SessionStore] skipping unsafe subpath from listSubkeys: ${m}`, { level: "warn" });
      continue;
    }
    let h = await Nt(
      e.load({ projectKey: s.projectKey, sessionId: s.sessionId, subpath: m }),
      n,
      `SessionStore.load() timed out after ${n}ms for session ${s.sessionId} subpath ${m}`
    );
    if (!h || h.length === 0) continue;
    let S = [],
      y = [];
    for (let w of h)
      if (ot(w)) S.push(w);
      else y.push(w);
    if (y.length > 0) (await at(Jt(l), { recursive: !0 }), await X4e(l, y));
    if (S.length > 0) {
      let w = S.at(-1),
        b = dt(r, m + ".meta.json");
      await at(Jt(b), { recursive: !0 });
      let { type: C, ...T } = w;
      await es(b, _(T), { mode: 384 });
    }
  }
}
function Or(e) {
  let s =
    e?.accepted === !0 &&
    (typeof e.directory !== "string" || !(kr.isAbsolute(e.directory) || Cr.isAbsolute(e.directory)))
      ? void 0
      : e;
  if (e !== void 0 && s === void 0)
    t(
      "workspaceTrust ignored: accepted requires an absolute directory, as it exists where Claude Code runs",
      { level: "warn" }
    );
  return s;
}
function ts(e, s) {
  let { isSingleUserTurn: r, resumeConfigDir: n, deferSpawn: i, readsStartupMarks: m } = s,
    {
      systemPrompt: l,
      settings: h,
      managedSettings: S,
      settingSources: y,
      sandbox: w,
      ...b
    } = e ?? {},
    C,
    T,
    v,
    P;
  if (l === void 0) C = "";
  else if (typeof l === "string") C = l;
  else if (Array.isArray(l)) C = l;
  else if (l.type === "custom") ((C = l.prompt), (P = l.snapshot));
  else if (l.type === "preset") ((T = l.append), (v = l.excludeDynamicSections), (P = l.snapshot));
  process.env.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
  let {
      abortController: D = ur(),
      additionalDirectories: q = [],
      projectConfigRoot: H,
      agent: Q,
      agents: B,
      allowedTools: _e = [],
      betas: ke,
      canUseTool: se,
      continue: re,
      cwd: ve,
      debug: ce,
      debugFile: ue,
      disallowedTools: je = [],
      tools: Ue,
      env: J,
      executable: pe = S_() ? "bun" : "node",
      executableArgs: $e = [],
      extraArgs: Ee = {},
      fallbackModel: Y,
      enableFileCheckpointing: k,
      toolConfig: Z,
      forkSession: Fe,
      hooks: ne,
      includeHookEvents: fe,
      includePartialMessages: me,
      forwardSubagentText: Re,
      verbatimPrompts: ee = !1,
      onElicitation: M,
      onUserDialog: K,
      supportedDialogKinds: j,
      perTaskStopAffordance: oe,
      rapidFollowupPreempt: Ke,
      workspaceTrust: qe,
      persistSession: he,
      sessionStore: V,
      sessionStoreFlush: ns,
      thinking: ge,
      effort: os,
      maxThinkingTokens: He,
      maxTurns: is,
      maxBudgetUsd: as,
      taskBudget: ls,
      mcpServers: ct,
      model: ds,
      outputFormat: ut,
      permissionMode: cs,
      allowDangerouslySkipPermissions: us = !1,
      permissionPromptToolName: ps,
      permissionPrompts: fs,
      plugins: Te,
      pluginDelivery: ze = "argv",
      getOAuthToken: pt,
      getHostAuthToken: ft,
      workload: mt,
      resume: ht,
      resumeSessionAt: ms,
      resumeDropsTurn: hs,
      sessionId: gs,
      skills: gt,
      stderr: Ss,
      strictMcpConfig: ys
    } = b,
    St = cs;
  if (V && he === !1)
    throw Error(
      "sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring."
    );
  $t({ supportedDialogKinds: j, onUserDialog: K });
  let ws = Or(qe);
  if (V && re && !ht && !V.listSessions)
    throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
  if (V && k)
    throw Error(
      "enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume)."
    );
  if (V && b.spawnClaudeCodeProcess)
    t(
      "sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.",
      { level: "warn" }
    );
  if ((Qt(!!se, St ?? "default", _e), ze !== "argv" && ze !== "initialize"))
    throw Error("Invalid pluginDelivery. Expected 'argv' or 'initialize'.");
  let yt = ze === "initialize" && Te !== void 0 && Te.length > 0,
    Be = b.pathToClaudeCodeExecutable;
  if (!Be) {
    let O = Rr(import.meta.url),
      F = wr(O),
      z = Lt((ie) => F.resolve(ie));
    if (!z)
      throw Error(
        "Native CLI binary for linux-x64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable."
      );
    Be = z;
  }
  let wt = ut?.type === "json_schema" ? ut.schema : void 0,
    I = J ? { ...J } : { ...process.env };
  if (!I.CLAUDE_CODE_ENTRYPOINT) I.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (!I.CLAUDE_AGENT_SDK_VERSION)
    I.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
  if (k) I.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (!Object.keys(I).some((O) => O.toUpperCase() === "CLAUDE_CODE_SDK_READS_SESSION_STATE"))
    I.CLAUDE_CODE_SDK_READS_SESSION_STATE = "1";
  if (m && !Object.keys(I).some((O) => O.toUpperCase() === "CLAUDE_CODE_SDK_READS_STARTUP_MARKS"))
    I.CLAUDE_CODE_SDK_READS_STARTUP_MARKS = "1";
  let Ge = Tu(I.CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS),
    bs = Number.isFinite(Ge) && Ge >= 0 ? Ge : wFt;
  if (pt) I.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (ft) I.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
  if (Z?.askUserQuestion?.previewFormat)
    I.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = Z.askUserQuestion.previewFormat;
  for (let [O, F] of [
    [Z?.askUserQuestion?.extendedQuestions, "CLAUDE_CODE_QUESTION_EXTENDED"],
    [Z?.askUserQuestion?.optionalDescriptions, "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS"],
    [!1, "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES"]
  ])
    if (O) I[F] = "1";
    else if (!J) {
      for (let z of Object.keys(I)) if (z.toUpperCase() === F) delete I[z];
    }
  let Ve = {};
  if ((xe.propagation.inject(xe.context.active(), Ve), "traceparent" in Ve)) {
    for (let O of ["TRACEPARENT", "TRACESTATE"]) if (!(O in (J ?? {}))) delete I[O];
  }
  for (let [O, F] of Object.entries(Ve)) {
    let z = O.toUpperCase();
    if (!(z in (J ?? {}))) I[z] = F;
  }
  let bt = {},
    _t = new Map();
  if (ct)
    for (let [O, F] of Object.entries(ct))
      if (F.type === "sdk" && F.instance) _t.set(O, F);
      else bt[O] = F;
  let Se;
  if (ge)
    switch (ge.type) {
      case "adaptive":
        Se = { type: "adaptive", display: ge.display };
        break;
      case "enabled":
        Se = { type: "enabled", budgetTokens: ge.budgetTokens, display: ge.display };
        break;
      case "disabled":
        Se = { type: "disabled" };
        break;
    }
  else if (He !== void 0)
    Se = He === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: He };
  if (n) I.CLAUDE_CONFIG_DIR = n;
  let kt = new tt({
      abortController: D,
      additionalDirectories: q,
      projectConfigRoot: H,
      agent: Q,
      betas: ke,
      cwd: ve,
      debug: ce,
      debugFile: ue,
      executable: pe,
      executableArgs: $e,
      extraArgs: mt ? { ...Ee, workload: mt } : Ee,
      pathToClaudeCodeExecutable: Be,
      env: I,
      forkSession: Fe,
      stderr: Ss,
      thinkingConfig: Se,
      effort: os,
      maxTurns: is,
      maxBudgetUsd: as,
      taskBudget: ls,
      model: ds,
      fallbackModel: Y,
      jsonSchema: wt,
      permissionMode: St,
      allowDangerouslySkipPermissions: us,
      permissionPromptToolName: ps,
      permissionPrompts: fs,
      continueConversation: V ? void 0 : re,
      resume: ht,
      resumeSessionAt: ms,
      resumeDropsTurn: hs,
      sessionId: gs,
      settings: typeof h === "object" ? _(h) : h,
      managedSettings: S ? _(S) : void 0,
      settingSources: y,
      skills: gt,
      allowedTools: _e,
      disallowedTools: je,
      tools: Ue,
      mcpServers: bt,
      strictMcpConfig: ys,
      canUseTool: !!se,
      hooks: !!ne,
      includeHookEvents: fe,
      includePartialMessages: me,
      persistSession: he,
      sessionMirror: !!V,
      plugins: Te,
      pluginsViaInitialize: yt,
      sandbox: w,
      spawnClaudeCodeProcess: b.spawnClaudeCodeProcess,
      onProcessSpawned: e?.onProcessSpawned,
      deferSpawn: i
    }),
    _s = {
      systemPrompt: C,
      appendSystemPrompt: T,
      planModeInstructions: b.planModeInstructions,
      systemPromptSnapshot: P,
      appendSubagentSystemPrompt: b.appendSubagentSystemPrompt,
      toolAliases: b.toolAliases,
      codeRunningMcpTools: b.codeRunningMcpTools,
      excludeDynamicSections: v,
      agents: B,
      title: b.title,
      skills: gt,
      webSearchIsolationExemptMcpServers: b.webSearchIsolationExemptMcpServers,
      promptSuggestions: b.promptSuggestions,
      agentProgressSummaries: b.agentProgressSummaries,
      forwardSubagentText: Re,
      supportedDialogKinds: j,
      perTaskStopAffordance: oe,
      rapidFollowupPreempt: Ke,
      forwardNestedSubagentToolCalls: e?.forwardNestedSubagentToolCalls,
      workspaceTrust: ws,
      plugins: yt ? Te : void 0,
      captureSdkMcpManifests: !tJr("CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS")
    },
    Qe = new Ae(kt, r, se, ne, D, _t, wt, _s, M, pt, ft, K, ee, bs);
  if (V) {
    let O = () => A(I.CLAUDE_CONFIG_DIR ?? A(lt(), ".claude"), "projects"),
      F = ns === "eager",
      z = new Je(
        async (ie, Xe) => {
          let ye = it(ie, O());
          if (ye) await V.append(ye, Xe);
          else
            t(
              `[SessionStore] dropping mirror frame: filePath ${ie} is not under ${O()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`,
              { level: "warn" }
            );
        },
        {
          onError: (ie, Xe) => {
            let ye = it(ie, O());
            if (ye) Qe.reportMirrorError(ye, Xe.message);
          },
          maxPendingEntries: F ? 0 : Me,
          maxPendingBytes: F ? 0 : we
        }
      );
    Qe.setTranscriptMirrorBatcher(z);
  }
  return {
    queryInstance: Qe,
    transport: kt,
    abortController: D,
    processEnv: I,
    verbatimPrompts: ee
  };
}
function ss(e, s, r, n) {
  if (typeof s === "string")
    e.writeAfterInitialize(
      _({
        type: "user",
        session_id: "",
        message: { role: "user", content: [{ type: "text", text: s }] },
        parent_tool_use_id: null,
        ...(n && { client_composed: !0 })
      }) +
        `
`
    ).catch((i) => r.abort(i));
  else e.streamInput(s).catch((i) => r.abort(i));
}
var Ar = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function rs(e) {
  for (let s = 0; ; s++)
    try {
      return await yr(e, { recursive: !0, force: !0 });
    } catch (r) {
      if (s >= 4 || !Ar.has(E(r) ?? "")) return;
      await X((s + 1) * 100);
    }
}
function xr(e, s) {
  e.waitForExit()
    .catch(() => {})
    .finally(() => rs(s));
}
function jr({ prompt: e, options: s }) {
  if ((s?.resume || s?.continue) && s?.sessionStore) return Ur(e, s);
  let {
    queryInstance: r,
    abortController: n,
    verbatimPrompts: i
  } = ts(s, { isSingleUserTurn: typeof e === "string" });
  return (ss(r, e, n, i), r);
}
function Ur(e, s) {
  let {
      queryInstance: r,
      transport: n,
      abortController: i,
      processEnv: m,
      verbatimPrompts: l
    } = ts({ ...s }, { isSingleUserTurn: typeof e === "string", deferSpawn: !0 }),
    h = dt(s.cwd ?? "."),
    S = s.sessionStore,
    y = s.loadTimeoutMs ?? 60000,
    w = s.resume;
  return (
    (async () => {
      if (!w)
        w = (
          await Nt(
            S.listSessions(be(h, s.env)),
            y,
            `SessionStore.listSessions() timed out after ${y}ms`
          )
        )
          .slice()
          .sort((T, v) => v.mtime - T.mtime)[0]?.sessionId;
      if (!w) return;
      return Ir(S, w, h, s.env, s.loadTimeoutMs);
    })()
      .then((C) => {
        if (C) {
          n.updateResume(w);
          let T = { CLAUDE_CONFIG_DIR: C };
          (n.updateEnv(T), (m.CLAUDE_CONFIG_DIR = C), r.addCleanupCallback(() => xr(n, C)));
        }
        if (!r.isClosed()) n.spawn();
      })
      .catch((C) => {
        let T = N(C);
        (n.spawnAbort(T), r.setError(T));
      }),
    ss(r, e, i, l),
    r
  );
}
export { jr as query };

//# sourceMappingURL=chunk-sr1bpqdt.js.map
