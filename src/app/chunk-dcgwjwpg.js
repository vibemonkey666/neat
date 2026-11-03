// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { d, E } from "./chunk-fs43t96t.js";
import { F } from "./chunk-wrtp8qz8.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Td, vkt } from "./chunk-exz0w70z.js";
import { _, te, Ms, t } from "./chunk-4kxznmzw.js";
import { I, zr } from "./chunk-a16y5hcz.js";
import { Su } from "./chunk-9z5ybxhe.js";
import { Xo } from "./chunk-928ws1pg.js";
import { Ror, bkt } from "./chunk-qakn3b85.js";
import { Nf, FSt, USt, BSt } from "./chunk-bg15swpd.js";
import { O } from "./chunk-19xvg81r.js";
import { GX, qee } from "./chunk-kjgmmff6.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { jd } from "./chunk-v4kbwz0z.js";
import { woo, Vwe } from "./chunk-cde8bj1c.js";
import { er } from "./chunk-1e5yp9hx.js";
import { pt } from "./chunk-7c3thgax.js";
import { Zzo } from "./chunk-yw4wqxm9.js";
import { azt } from "./chunk-tzrn3e6a.js";
import { xUr } from "./chunk-1ww4jg8j.js";
import { KIn } from "./chunk-03dzxcns.js";
import { XIn } from "./chunk-0vzwbv6j.js";
import { QIn } from "./chunk-dt93rvn7.js";
import { createHash as we } from "crypto";
import { lstat as ie, mkdtemp as Ie, rm as Re, writeFile as se } from "fs/promises";
import { join as G } from "path";
import { spawn as pe } from "child_process";
import { createWriteStream as me } from "fs";
import { rm as _e } from "fs/promises";
import { dirname as Ee, join as re } from "path";
import { createInterface as oe } from "readline";
function ne(n) {
  let e = {
    ...(n.autoOverSettings && { permissions: { defaultMode: "auto" } }),
    ...(n.autoCompact && { autoCompactEnabled: !0 }),
    ...(n.autoModeEnvironment.length > 0 && { autoMode: { environment: n.autoModeEnvironment } })
  };
  return Object.keys(e).length > 0 ? _(e) : void 0;
}
var Se = 10,
  ve = 10,
  Ce = 3600000;
function r9t(n) {
  return n.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var he = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP"
};
function ye(n, e, i, r, o) {
  let l = he[n] ?? n,
    s = e.file_path ?? e.filePath ?? e.pattern ?? e.command?.slice(0, 60) ?? e.url ?? e.query ?? "";
  if (s) return `${l} ${s}`;
  return l;
}
function Ae(n, e, i, r, o) {
  let l;
  try {
    l = te(n);
  } catch {
    return [];
  }
  if (!l || typeof l !== "object") return [];
  let s = l,
    p = [],
    S = Date.now();
  switch (s.type) {
    case "assistant": {
      let A = s.message;
      if (!A) break;
      let h = A.content;
      if (!Array.isArray(h)) break;
      for (let R of h) {
        if (!R || typeof R !== "object") continue;
        let y = R;
        if (y.type === "tool_use") {
          let M = y.name ?? "Tool",
            w = y.input ?? {},
            P = ye(M, w, r, p, o);
          if (P !== void 0) p.push({ type: "tool_start", summary: P, timestamp: S });
          i(`[bridge:activity] sessionId=${e} tool_use name=${M} ${De(w)}`);
        } else if (y.type === "text") {
          let M = y.text ?? "";
          if (M.length > 0)
            (p.push({ type: "text", summary: M.slice(0, 80), timestamp: S }),
              i(`[bridge:activity] sessionId=${e} text "${M.slice(0, 100)}"`));
        }
      }
      break;
    }
    case "result": {
      let A = s.subtype;
      if (A === "success")
        (p.push({ type: "result", summary: "Session completed", timestamp: S }),
          i(`[bridge:activity] sessionId=${e} result subtype=success`));
      else if (A) {
        let R = s.errors?.[0] ?? `Error: ${A}`;
        (p.push({ type: "error", summary: R, timestamp: S }),
          i(`[bridge:activity] sessionId=${e} result subtype=${A} error="${R}"`));
      } else i(`[bridge:activity] sessionId=${e} result subtype=undefined`);
      break;
    }
    default:
      break;
  }
  return p;
}
function be(n) {
  if (n.parent_tool_use_id != null || n.isSynthetic || n.isReplay) return;
  let i = n.message?.content,
    r;
  if (typeof i === "string") r = i;
  else if (Array.isArray(i)) {
    for (let o of i)
      if (o && typeof o === "object" && o.type === "text") {
        r = o.text;
        break;
      }
  }
  return ((r = r?.trim()), r ? r : void 0);
}
function De(n) {
  let e = [];
  for (let [i, r] of Object.entries(n)) {
    if (typeof r === "string") e.push(`${i}="${r.slice(0, 100)}"`);
    if (e.length >= 3) break;
  }
  return e.join(" ");
}
function Cro(n) {
  return {
    spawn(e, i) {
      let r = r9t(e.sessionId),
        o;
      if (n.debugFile) {
        let u = n.debugFile.lastIndexOf(".");
        if (u > 0) o = `${n.debugFile.slice(0, u)}-${r}${n.debugFile.slice(u)}`;
        else o = `${n.debugFile}-${r}`;
      } else if (n.verbose) o = re(jd(), `bridge-session-${r}.log`);
      let l = XIn({
          roles: e.roles,
          modePinned: n.permissionMode !== void 0,
          settings: () => (er(), pt())
        }),
        { autoDefault: s, autoOverSettings: p, artifact: S, machineSettings: A } = l,
        h = null,
        R;
      if (n.debugFile)
        ((R = re(Ee(n.debugFile), `bridge-transcript-${r}.jsonl`)),
          (h = me(R, { flags: "a" })),
          h.on("error", (u) => {
            (n.onDebug(`[bridge:session] Transcript write error: ${u.message}`), (h = null));
          }),
          n.onDebug(`[bridge:session] Transcript log: ${R}`));
      let y = [
          ...n.scriptArgs,
          "--print",
          "--sdk-url",
          e.sdkUrl,
          "--session-id",
          e.sessionId,
          "--input-format",
          "stream-json",
          "--output-format",
          "stream-json",
          "--replay-user-messages",
          `--resume=${e.sdkUrl}`,
          ...(n.verbose ? ["--verbose"] : []),
          ...(o ? ["--debug-file", o] : []),
          ...(n.permissionMode ? ["--permission-mode", n.permissionMode] : []),
          ...(n.chrome === void 0 ? [] : [n.chrome ? "--chrome" : "--no-chrome"])
        ],
        M = y.length,
        w = e.serverConfig,
        P = w?.autoModeEnvironment ?? [],
        x = ne({ autoOverSettings: p, autoCompact: l.autoCompact, autoModeEnvironment: P });
      if (x !== void 0) y.push(`--settings=${x}`);
      let ge = y.length,
        L = w?.mcpConfig;
      if (L) y.push(`--mcp-config=${L.path}`);
      if (w?.appendSystemPrompt) y.push(`--append-system-prompt-file=${w.appendSystemPrompt.path}`);
      if (w) y.push(...w.extraArgs);
      let W = y.length - ge;
      y.push(...e.modelArgs);
      let K = w?.dir,
        B = () => {
          let u = K;
          return (
            (K = void 0),
            u ? _e(u, { recursive: !0, force: !0 }).catch(() => {}) : Promise.resolve()
          );
        },
        Y = n.ownerIdentity,
        V = {
          CLAUDE_CODE_OAUTH_TOKEN: void 0,
          CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
          CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: void 0,
          CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT: void 0,
          CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.accessToken,
          CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: Y?.accountUuid,
          CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: Y?.organizationUuid,
          CLAUDE_CODE_BRIDGE_SOURCE_DIR: e.sourceDir,
          CLAUDE_CODE_BRIDGE_MCP_CARRIER: w ? "1" : void 0,
          CLAUDE_CODE_BRIDGE_PROMPT_SHA256: w?.appendSystemPrompt?.sha256,
          CLAUDE_CODE_WORKER_EPOCH: String(e.workerEpoch),
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN: e.workerEpoch > 1 ? "1" : void 0,
          CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS:
            e.workerEpoch > 1 && e.boundResumedTurn ? String(Ce) : void 0,
          CLAUDE_CODE_RESUME_FROM_SESSION: void 0,
          CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: void 0,
          CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR: void 0,
          CLAUDE_BG_AUTH_SNAPSHOT_PATH: void 0,
          CLAUDE_CODE_ACCOUNT_UUID: void 0,
          CLAUDE_CODE_ORGANIZATION_UUID: void 0,
          CLAUDE_CODE_USER_EMAIL: void 0,
          CCR_SESSION_ACCOUNT_EMAIL: void 0,
          SESSION_INGRESS_URL: L ? L.ingressUrl : void 0,
          CLAUDE_CODE_EXIT_AFTER_STOP_DELAY:
            e.idleExitAfterMs > 0 ? String(e.idleExitAfterMs) : void 0
        },
        T = {
          ...n.env,
          ...Object.fromEntries(Vwe.map((u) => [u, void 0])),
          ...Object.fromEntries(woo.map((u) => [u, n.env[u]])),
          ...V
        },
        J = new Set([...Vwe, ...Object.keys(V)]);
      for (let u of Object.keys(T)) if (!J.has(u) && J.has(u.toUpperCase())) delete T[u];
      if ((qee(T), GX(T), s)) T.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT = "1";
      if (S) T.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT = "1";
      if (A) T.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS = "1";
      if (l.projectsEntrypoint) T.CLAUDE_CODE_BRIDGE_CHILD_PROJECTS_ENTRYPOINT = "1";
      if (
        (n.onDebug(
          `[bridge:session] Spawning sessionId=${e.sessionId} sdkUrl=${e.sdkUrl} accessToken=${e.accessToken ? "present" : "MISSING"}`
        ),
        n.onDebug(
          `[bridge:session] Child args: ${y.slice(0, M).join(" ")}${x !== void 0 ? ` (+settings: auto=${p}, facts=${P.length})` : ""}${W > 0 ? ` (+${W} server-config args, mcpConfig=${L ? "present" : "unset"}, appendPrompt=${w?.appendSystemPrompt ? "present" : "unset"})` : ""}${e.modelArgs.length > 0 ? ` (+${e.modelArgs.length} model args)` : ""}`
        ),
        o)
      )
        n.onDebug(`[bridge:session] Debug log: ${o}`);
      let v;
      try {
        v = pe(n.execPath, y, { cwd: i, stdio: ["pipe", "pipe", "pipe"], env: T, windowsHide: !0 });
      } catch (u) {
        throw (B(), u);
      }
      n.onDebug(`[bridge:session] sessionId=${e.sessionId} pid=${v.pid}`);
      let k = [],
        ue = void 0,
        X = null,
        N = [],
        q = !1,
        z = !1,
        Z = !1;
      if (v.stderr)
        oe({ input: v.stderr }).on("line", (C) => {
          if (C.startsWith(azt)) {
            let U = zr(C.slice(azt.length));
            if (n.onChildWarning) n.onChildWarning(e.sessionId, U);
            else
              process.stderr.write(
                azt +
                  U +
                  `
`
              );
            return;
          }
          if (n.verbose)
            process.stderr.write(
              C +
                `
`
            );
          if (N.length >= ve) N.shift();
          N.push(C);
        });
      if (v.stdout)
        oe({ input: v.stdout }).on("line", (C) => {
          if (h)
            h.write(
              C +
                `
`
            );
          if ((n.onDebug(`[bridge:ws] sessionId=${e.sessionId} <<< ${Zzo(C)}`), n.verbose))
            process.stderr.write(
              C +
                `
`
            );
          let U = Ae(C, e.sessionId, n.onDebug, k, ue);
          for (let D of U) {
            if (k.length >= Se) k.shift();
            (k.push(D), (X = D), n.onActivity?.(e.sessionId, D), e.onActivity?.(D));
          }
          if (!Z && e.onFirstUserMessage) {
            let D;
            try {
              D = te(C);
            } catch {}
            if (D && typeof D === "object") {
              let Q = D;
              if (Q.type === "user") {
                let ee = be(Q);
                if (ee) ((Z = !0), e.onFirstUserMessage(ee));
              }
            }
          }
        });
      let fe = new Promise((u) => {
          (v.on("close", (C, U) => {
            if (h) (h.end(), (h = null));
            let D;
            if (U === "SIGTERM" || U === "SIGINT" || (z && C !== 0))
              (n.onDebug(
                `[bridge:session] sessionId=${e.sessionId} interrupted signal=${U} exit_code=${C} pid=${v.pid}`
              ),
                (D = "interrupted"));
            else if (C === 0)
              ((D = e.idleExitAfterMs > 0 ? "idle" : "completed"),
                n.onDebug(
                  `[bridge:session] sessionId=${e.sessionId} ${D} exit_code=0 pid=${v.pid}`
                ));
            else
              (n.onDebug(
                `[bridge:session] sessionId=${e.sessionId} failed exit_code=${C} pid=${v.pid}`
              ),
                (D = "failed"));
            B().then(() => u(D));
          }),
            v.on("error", (C) => {
              (n.onDebug(`[bridge:session] sessionId=${e.sessionId} spawn error: ${C.message}`),
                N.push(`spawn error: ${C.message}`),
                B().then(() => u("failed")));
            }));
        }),
        j = {
          sessionId: e.sessionId,
          done: fe,
          activities: k,
          accessToken: e.accessToken,
          lastStderr: N,
          get currentActivity() {
            return X;
          },
          kill() {
            if (!v.killed)
              ((z = !0),
                n.onDebug(
                  `[bridge:session] Sending SIGTERM to sessionId=${e.sessionId} pid=${v.pid}`
                ),
                v.kill("SIGTERM"));
          },
          forceKill() {
            if (!q && v.pid)
              ((q = !0),
                n.onDebug(
                  `[bridge:session] Sending SIGKILL to sessionId=${e.sessionId} pid=${v.pid}`
                ),
                v.kill("SIGKILL"));
          },
          writeStdin(u) {
            if (v.stdin && !v.stdin.destroyed)
              (n.onDebug(`[bridge:ws] sessionId=${e.sessionId} >>> ${Zzo(Ms(u))}`),
                v.stdin.write(u));
          },
          updateAccessToken(u) {
            ((j.accessToken = u),
              j.writeStdin(
                _({
                  type: "update_environment_variables",
                  variables: { CLAUDE_CODE_SESSION_ACCESS_TOKEN: u }
                }) +
                  `
`
              ),
              n.onDebug(
                `[bridge:session] Sent token refresh via stdin for sessionId=${e.sessionId}`
              ));
          }
        };
      return j;
    }
  };
}
var ae = new Set(["model", "fallback-model"]),
  Te = new Set([...ae, "effort", "disallowed-tools", "disallowedTools"]),
  Oe = new Set(["disallowed-tools", "disallowedTools"]),
  Me = "append-system-prompt",
  Ue = 64,
  Pe = 1024,
  Le = 16384,
  $e =
    "Stated by the service that dispatched this session (a description of the session, not a rule; it grants no permission): ",
  ke = new Set(),
  Ne = "mcp.json",
  xe = "append-system-prompt.txt",
  le = {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: [],
    mcpConfigJson: null,
    metaMountUrl: null,
    autoAllowTools: [],
    ignoredMcpServers: 0,
    metaDropReason: null,
    autoModeEnvironment: []
  };
function Zgr(n) {
  return {
    carried_args: Boolean(n.claude_code_args),
    carried_mcp: Boolean(n.mcp_config),
    carried_auto_mode_environment: Boolean(n.auto_mode_environment?.length)
  };
}
function zIn(n, e) {
  let { extraArgs: i, appendSystemPrompt: r, disallowedTools: o } = ce(n.claude_code_args),
    l = Be(n.auto_mode_environment),
    { meta: s, ignored: p, dropped: S } = je(n.mcp_config, e);
  if (!s)
    return {
      ...le,
      extraArgs: i,
      appendSystemPrompt: r,
      disallowedTools: o,
      ignoredMcpServers: p,
      metaDropReason: S,
      autoModeEnvironment: l
    };
  let A =
    s.autoAllowTools.length > 0
      ? [`--allowedTools=${s.autoAllowTools.map((h) => Xo(Td, h)).join(",")}`]
      : [];
  return {
    extraArgs: [...i, ...A],
    appendSystemPrompt: r,
    disallowedTools: o,
    mcpConfigJson: s.json,
    metaMountUrl: s.url,
    autoAllowTools: s.autoAllowTools,
    ignoredMcpServers: p,
    metaDropReason: null,
    autoModeEnvironment: l
  };
}
function Be(n = []) {
  let e = [],
    i = 0;
  for (let o of n) {
    if (
      o.trim().length === 0 ||
      [...o].length > Pe ||
      o === Nf ||
      FSt(o) ||
      USt(o) ||
      BSt(o) !== null ||
      e.length >= Ue
    )
      continue;
    let l = $e + o,
      s = i + _(l).length + 1;
    if (s > Le) continue;
    ((i = s), e.push(l));
  }
  let r = n.length - e.length;
  if (r > 0)
    t(
      `[bridge:server-config] dropped ${r} auto_mode_environment ${I(r, "entry", "entries")} (empty, over the caps, control, invisible or template characters, or the defaults marker)`,
      { level: "warn" }
    );
  return e;
}
function ce(n) {
  if (!n) return { extraArgs: [], appendSystemPrompt: null, disallowedTools: [] };
  let e = {},
    i = null,
    r = [],
    o = 0;
  for (let [p, S] of Object.entries(n))
    if (Te.has(p)) {
      if (((e[p] = S), Oe.has(p) && typeof S === "string")) r.push(...Su([S]));
    } else if (p === Me) i = typeof S === "string" && S ? S : null;
    else o++;
  let l = [],
    s = QIn(l, e, ke, (p) => t(`[bridge:server-config] skipped ${p} claude_code_arg`));
  return (
    t(
      `[bridge:server-config] claude_code_args applied=${s} append_prompt=${i ? "present" : "unset"} disallowed_tools=${r.length} not_allowlisted=${o}`
    ),
    { extraArgs: l, appendSystemPrompt: i, disallowedTools: r }
  );
}
function Dfs(n) {
  let e = n?.model;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function Hfs(n) {
  let e = n?.effort;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function Lfs(n) {
  if (!n) return [];
  let e = Ko(n, (i, r) => ae.has(r));
  return ce(e).extraArgs;
}
function je(n, e) {
  if (!n) return { meta: null, ignored: 0, dropped: null };
  let i = Fe(n.content);
  if (!i) return { meta: null, ignored: 0, dropped: "undecodable" };
  let r = F(Object.keys(i), (A) => A !== Td);
  if (r > 0)
    t(`[bridge:server-config] ignoring ${r} other server(s) in mcp_config (only ${Td} is honored)`);
  let o = i[Td];
  if (o === void 0)
    return (
      t("[bridge:server-config] mcp_config carries no meta entry"),
      { meta: null, ignored: r, dropped: "no_meta_entry" }
    );
  if (
    o === null ||
    typeof o !== "object" ||
    !("type" in o) ||
    o.type !== "http" ||
    !("url" in o) ||
    typeof o.url !== "string"
  )
    return (
      t("[bridge:server-config] meta entry is not http", { level: "warn" }),
      { meta: null, ignored: r, dropped: "not_http" }
    );
  let l = bkt(e.apiBaseUrl);
  if (!l)
    return (
      t("[bridge:server-config] apiBaseUrl is not a trusted ingress origin; dropping meta entry", {
        level: "warn"
      }),
      { meta: null, ignored: r, dropped: "untrusted_origin" }
    );
  let s = Ror(o.url, l, e.sessionId);
  if (!s)
    return (
      t(
        "[bridge:server-config] meta url is not this session's meta proxy route on the bridge origin",
        { level: "warn" }
      ),
      { meta: null, ignored: r, dropped: "route_mismatch" }
    );
  let p = KIn(o);
  if (!p) return { meta: null, ignored: r, dropped: "bad_tools" };
  return {
    meta: { json: _({ mcpServers: { [Td]: vkt(s, e.sessionId) } }), url: s, autoAllowTools: p },
    ignored: r,
    dropped: null
  };
}
function Fe(n) {
  let e;
  try {
    e = te(Buffer.from(n, "base64").toString("utf8"));
  } catch {
    return (t("[bridge:server-config] mcp_config did not decode", { level: "warn" }), null);
  }
  if (
    e === null ||
    typeof e !== "object" ||
    !("mcpServers" in e) ||
    e.mcpServers === null ||
    typeof e.mcpServers !== "object" ||
    Array.isArray(e.mcpServers)
  )
    return (t("[bridge:server-config] mcp_config has no mcpServers", { level: "warn" }), null);
  return e.mcpServers;
}
async function Ge() {
  let {
      autoModeConfigSchema: n,
      getSettingsFilePathForSource: e,
      getSettingsForSource: i
    } = await import("./chunk-pc5tq34f.js"),
    { parseSettingsFileUncached: r } = await import("./chunk-9t8ct243.js"),
    o = n(),
    l = e("userSettings");
  return (l !== void 0 && de(o, r(l).settings)) || de(o, i("policySettings"));
}
function de(n, e) {
  let i = n.safeParse(e?.autoMode);
  return i.success && (i.data?.environment?.length ?? 0) > 0;
}
async function He(n, e) {
  let i =
    n.autoModeEnvironment.length === 0
      ? void 0
      : e.userAutoModeEnvironmentConfigured
        ? n.autoModeEnvironment
        : [Nf, ...n.autoModeEnvironment];
  if (!n.mcpConfigJson && !n.appendSystemPrompt)
    return n.extraArgs.length > 0 || i !== void 0
      ? { extraArgs: n.extraArgs, autoModeEnvironment: i }
      : void 0;
  let r = await We(e.sessionId);
  try {
    let o;
    if (n.mcpConfigJson) {
      let s = G(r, Ne);
      (await se(s, n.mcpConfigJson, { flag: "wx", mode: 384 }),
        (o = { path: s, ingressUrl: e.apiBaseUrl }));
    }
    let l;
    if (n.appendSystemPrompt) {
      let s = G(r, xe),
        p = Buffer.from(n.appendSystemPrompt, "utf8");
      (await se(s, p, { flag: "wx", mode: 384 }),
        (l = { path: s, sha256: we("sha256").update(p).digest("hex") }));
    }
    return {
      extraArgs: n.extraArgs,
      dir: r,
      mcpConfig: o,
      appendSystemPrompt: l,
      autoModeEnvironment: i
    };
  } catch (o) {
    throw (await H(r), o);
  }
}
async function We(n) {
  for (let e = 0; ; e++)
    try {
      let i = await xUr(),
        r = await ie(i);
      if (!r.isDirectory()) throw Error("bridge spawn root is not a directory");
      if (O() !== "windows") {
        if (
          (typeof process.getuid === "function" && r.uid !== process.getuid()) ||
          (r.mode & 63) !== 0
        )
          throw Error("bridge spawn root has unexpected owner or mode");
      }
      let o = await Ie(G(i, `${r9t(n)}-`)),
        l = await ie(i).catch(() => null);
      if (l?.dev !== r.dev || l.ino !== r.ino)
        throw (await H(o), Error("bridge spawn root changed identity during mkdtemp"));
      return o;
    } catch (i) {
      if (e > 0 || E(i) !== "ENOENT") throw i;
    }
}
async function H(n) {
  await Re(n, { recursive: !0, force: !0 }).catch(() => {});
}
async function Nfs(n) {
  if (n?.dir) await H(n.dir);
}
function Rro(n, e) {
  (t(
    `[bridge:server-config] not applied sessionId=${n}: gate_off (tengu_bridge_apply_server_session_config=false)`,
    { level: "warn" }
  ),
    a("tengu_bridge_server_config_rejected", { ...e, reason: b("gate_off") }),
    f("bridge_server_session_config", "gate_off", e));
}
async function $fs(n, e) {
  let i = Zgr(n);
  if (!Object.values(i).some(Boolean)) return;
  if (!e.enabled) {
    Rro(e.sessionId, i);
    return;
  }
  let r = le,
    o,
    l;
  try {
    r = zIn(e.dropAutoModeEnvironment === void 0 ? n : { ...n, auto_mode_environment: void 0 }, e);
    let S =
      r.autoModeEnvironment.length > 0 && e.userAutoModeEnvironmentConfigured === void 0
        ? { ...e, userAutoModeEnvironmentConfigured: await Ge() }
        : e;
    o = await He(r, S);
  } catch (S) {
    l = d(S);
  }
  let s = {
    ...i,
    extra_args: r.extraArgs.length,
    append_prompt: r.appendSystemPrompt !== null,
    meta_mcp: r.mcpConfigJson !== null,
    auto_allow: r.autoAllowTools.length,
    auto_mode_environment: r.autoModeEnvironment.length,
    ...(e.dropAutoModeEnvironment !== void 0 && {
      auto_mode_environment_drop: c(e.dropAutoModeEnvironment)
    }),
    ignored_mcp: r.ignoredMcpServers,
    ...(r.metaDropReason !== null && { meta_drop: c(r.metaDropReason) })
  };
  if (l !== void 0) {
    (t(`[bridge:server-config] not applied sessionId=${e.sessionId}: ${l}`, { level: "warn" }),
      a("tengu_bridge_server_config_rejected", { ...s, reason: b("prepare_failed") }),
      m("bridge_server_session_config", "prepare_failed", s));
    return;
  }
  if (!o) {
    (t(
      `[bridge:server-config] nothing applied sessionId=${e.sessionId}: every carried value was rejected`,
      { level: "warn" }
    ),
      a("tengu_bridge_server_config_rejected", { ...s, reason: b("nothing_applied") }),
      f("bridge_server_session_config", "nothing_applied", s));
    return;
  }
  let p = r.mcpConfigJson ? "present" : r.metaDropReason ? `dropped:${r.metaDropReason}` : "unset";
  if (
    (t(
      `[bridge:server-config] applied sessionId=${e.sessionId} args=${r.extraArgs.length} appendPrompt=${r.appendSystemPrompt ? "present" : "unset"} metaMcp=${p} autoAllow=${r.autoAllowTools.length} autoModeEnvironment=${r.autoModeEnvironment.length}`,
      { level: r.metaDropReason ? "warn" : "debug" }
    ),
    a("tengu_bridge_server_config_applied", s),
    r.metaDropReason !== null)
  )
    f("bridge_server_session_config", "meta_mcp_not_verified", s);
  else if (i.carried_auto_mode_environment && r.autoModeEnvironment.length === 0)
    f(
      "bridge_server_session_config",
      e.dropAutoModeEnvironment === void 0
        ? "auto_mode_environment_dropped"
        : `auto_mode_environment_${e.dropAutoModeEnvironment}`,
      s
    );
  else g("bridge_server_session_config", s);
  return o;
}
export { r9t, Cro, Zgr, zIn, Dfs, Hfs, Lfs, Nfs, Rro, $fs };

//# sourceMappingURL=chunk-dcgwjwpg.js.map
