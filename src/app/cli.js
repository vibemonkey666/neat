import {
  fileURLToPath as __sourceFilePath_d0b841cb77dc0293,
  URL as __sourceFilePath_d0b841cb77dc0293_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-qq3ygwcj.js";
import { b } from "./chunk-acd8w9vv.js";
import { NZn } from "./chunk-y0p9bb70.js";
import { Jwt, Qwt, Zce, rZs, l5 } from "./chunk-pfc5159p.js";
import { dZs } from "./chunk-0jm1j0e1.js";
import { bcr } from "./chunk-tdv74tcm.js";
import { z } from "./chunk-p197ae0z.js";
function de() {
  try {
    process.cwd();
    return;
  } catch (r) {
    let f = r instanceof Error && "code" in r && typeof r.code === "string" ? r.code : void 0;
    if (f === "ENOENT")
      return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
    return `Can't read the current directory${f ? ` (${f})` : ""}. Start Claude Code from a different directory.`;
  }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
bcr();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  let r = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = r ? `${r} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function me(r) {
  for (let f = 0; f < r.length; f++) {
    let D = r[f];
    if (
      D === "--debug" ||
      D === "-d" ||
      D === "--debug-to-stderr" ||
      D === "-d2e" ||
      D.startsWith("--debug=") ||
      D.startsWith("--debug-file=")
    )
      continue;
    if (D === "--debug-file" && f + 1 < r.length) {
      f++;
      continue;
    }
    return !1;
  }
  return !0;
}
function ue(r) {
  let f = r.indexOf("--");
  return (f === -1 ? r : r.slice(0, f)).includes("--desktop");
}
function je(r) {
  let f,
    D,
    V,
    e,
    x,
    P,
    W = [];
  for (let M = 0; M < r.length; M++) {
    let N = r[M],
      h = N.indexOf("="),
      [B, n] = h > 0 ? [N.slice(0, h), N.slice(h + 1)] : [N, void 0],
      T = n !== void 0 || M + 1 < r.length;
    if (B === "--dangerously-skip-permissions") f = "bypassPermissions";
    else if (B === "--allow-dangerously-skip-permissions") P = !0;
    else if (B === "--permission-mode" && T) f = n ?? r[++M];
    else if (B === "--inherit-permission-mode" && T) D = n ?? r[++M];
    else if (B === "--model" && T) V = n ?? r[++M];
    else if (B === "--effort" && T) e = n ?? r[++M];
    else if (B === "--agent" && T) x = n ?? r[++M];
    else W.push(N);
  }
  let s = f ?? D;
  return {
    dispatchDefaults:
      s || V || e || x || P
        ? {
            permissionMode: s,
            ...(!f && D && { permissionModeInherited: !0 }),
            model: V,
            effort: e,
            agent: x,
            allowBypass: P
          }
        : void 0,
    rest: W
  };
}
async function Ye() {
  if (
    process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== void 0 ||
    process.argv.includes("--session-tunnel")
  ) {
    let { guardRelayTokenDescriptor: t } = import.meta.require(
      __sourceFilePath_d0b841cb77dc0293(
        new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-dset9ats.js", import.meta.url)
      )
    );
    t();
  }
  let r = dZs();
  if (r === "refused") return;
  let f = process.argv[2]?.startsWith("--runner-declares=") ? process.argv.splice(2, 1)[0] : void 0,
    D = NZn(process.argv);
  if (D) (console.error(D), process.exit(1));
  if (process.env.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review") {
    let { guardRunnerReviewTokens: t } = import.meta.require(
      __sourceFilePath_d0b841cb77dc0293(
        new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-d7xnw6q1.js", import.meta.url)
      )
    );
    t();
  }
  let { installCliArgvReader: V } = import.meta.require(
    __sourceFilePath_d0b841cb77dc0293(
      new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-3m102zvb.js", import.meta.url)
    )
  );
  V((t) =>
    import.meta
      .require(
        __sourceFilePath_d0b841cb77dc0293(
          new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-526awc2s.js", import.meta.url)
        )
      )
      .cliFlagWords(t)
  );
  let e = process.argv.slice(2);
  if (
    (e.length === 1 || (e.length === 2 && e[1] === "--verbose")) &&
    (e[0] === "--version" || e[0] === "-v" || e[0] === "-V")
  ) {
    if (
      (console.log(
        `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_d0b841cb77dc0293(new __sourceFilePath_d0b841cb77dc0293_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION} (Claude Code)${l5()}`
      ),
      e.length === 2 &&
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __sourceFilePath_d0b841cb77dc0293(
            new __sourceFilePath_d0b841cb77dc0293_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.GIT_SHA)
    )
      console.log(
        `Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_d0b841cb77dc0293(new __sourceFilePath_d0b841cb77dc0293_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.GIT_SHA}`
      );
    return;
  }
  let x = de();
  if (x) {
    console.error(x);
    let { writeStartupFailureResult: t } = await import("./chunk-jemefars.js"),
      { randomUUID: o } = await import("crypto");
    (await t({ sessionId: o(), message: x, reason: "cwd_unavailable" }), process.exit(1));
  }
  if (f !== void 0) {
    let { adoptRunnerDeclaration: t } = await import("./chunk-h6vpkaz8.js");
    await t(f);
  }
  let { profileCheckpoint: P } = await import("./chunk-3xywv3r3.js");
  P("cli_entry");
  let W = e[0] === "--preload" || e[0] === "--bg-spare",
    s =
      !W && process.env.CLAUDE_CODE_HOVER_REST
        ? (await import("./chunk-n0mjbx2n.js")).pinStorageV5FromEnv()
        : void 0;
  if (!W)
    setTimeout(() => {
      if (process.env.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP)
        import("./chunk-91z6kme6.js").then((t) => t.setJitPolicyAfterStartup());
      else if (typeof Bun < "u") Bun.unsafe.setJITPolicy?.(1);
    }, 1e4).unref();
  if (r !== void 0) {
    let { loadFastPathPolicy: t } = await import("./chunk-r2a214y7.js"),
      o = await t(s);
    if (o) {
      let { exitWithError: E } = await import("./chunk-ym7q3en9.js");
      E(o);
    }
    let { ghStandinMain: i } = await import("./chunk-9db1wvge.js");
    await i(r);
    return;
  }
  if (e[0] === "plugin" && e[1] === "test") {
    let [
        { loadFastPathPolicy: t },
        { pluginTestFormOf: o, pluginTestGatesOf: i, pluginTestRefusal: E },
        { endPluginTest: _ }
      ] = await Promise.all([
        import("./chunk-r2a214y7.js"),
        import("./chunk-cnke90jd.js"),
        import("./chunk-81cfyq5v.js")
      ]),
      l = E(await i({ helperError: await t(s), form: o(e.slice(2)), envPin: s }));
    if (e[2] === "--file" && l !== void 0) {
      let { REPORT_MARK: w } = await import("./chunk-784jstbs.js");
      process.stdout.write(`${w}${JSON.stringify({ file: e[3], results: [], error: l })}
`);
      return;
    }
    if (l !== void 0)
      return (
        process.stderr.write(`claude plugin test: ${l}
`),
        (process.exitCode = 1),
        _(process.exitCode)
      );
    let { pluginTestMain: p } = await import("./chunk-wwcnjtfb.js");
    return ((process.exitCode = await p(e.slice(2))), _(process.exitCode));
  }
  if (process.argv[2] === "--eval-mock-server") {
    P("cli_eval_mock_server_path");
    let { runEvalMockServer: t } = await import("./chunk-3yxqh53f.js");
    try {
      await t(process.argv[3], process.argv[4]);
    } catch (o) {
      (console.error(`--eval-mock-server: ${o instanceof Error ? o.message : String(o)}`),
        (process.exitCode = 1));
    }
    return;
  }
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    P("cli_claude_in_chrome_mcp_path");
    let { runClaudeInChromeMcpServer: t } = await import("./chunk-bnet7s1g.js");
    await t(s);
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    P("cli_chrome_native_host_path");
    let { runChromeNativeHost: t } = await import("./chunk-j4crbqwg.js");
    await t();
    return;
  }
  if (e[0] === "--daemon-worker") {
    let { loadFastPathPolicy: t } = await import("./chunk-r2a214y7.js"),
      o = await t(s);
    if (o)
      process.stderr.write(`${o}
`);
    let { sessionFactsRestored: i } = await import("./chunk-3ht3epe0.js"),
      E = await i(s);
    if (E !== null) {
      let { endsInARowOf: l, workerEndingOf: p } = await import("./chunk-mbyfh6a8.js"),
        w = p(E, l(e[2]));
      (process.stderr.write(w.said), process.exit(w.code));
    }
    let { runDaemonWorker: _ } = await import("./chunk-n10te31e.js");
    await _(e[1], s);
    return;
  }
  if (e[0] === "--bg-pty-host") {
    let { ensureFastPathSettingsLoaded: t } = await import("./chunk-r2a214y7.js");
    try {
      await t(s);
    } catch (i) {
      process.stderr
        .write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${i?.stack ?? String(i)}
`);
    }
    let { runPtyHost: o } = await import("./chunk-7aasgh0z.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "--bg-spare") {
    let { ensureFastPathSettingsLoaded: t } = await import("./chunk-r2a214y7.js");
    await t(void 0);
    let { runBgSpare: o } = await import("./chunk-77e87nxk.js");
    await o(e.slice(1));
    return;
  }
  if (e[0] === "--preload") {
    let { ensureFastPathSettingsLoaded: t } = await import("./chunk-r2a214y7.js");
    await t(void 0);
    let { runPreload: o } = await import("./chunk-rqpj1byv.js");
    await o(e.slice(1));
    return;
  }
  if (
    e[0] === "remote-control" ||
    e[0] === "rc" ||
    e[0] === "remote" ||
    e[0] === "sync" ||
    e[0] === "bridge"
  ) {
    P("cli_bridge_path");
    let { loadFastPathPolicy: t } = await import("./chunk-r2a214y7.js");
    {
      let u = await t(s);
      if (u) {
        let { exitWithError: g } = await import("./chunk-ym7q3en9.js");
        g(u);
      }
    }
    if (e.slice(1).some((u) => u === "--help" || u === "-h")) {
      let { printRemoteControlHelp: u } = await import("./chunk-px7yqetn.js");
      await u();
      return;
    }
    let { sessionFactsRestored: o } = await import("./chunk-3ht3epe0.js"),
      i = await o(s);
    if (i !== null) {
      let { exitWithError: u } = await import("./chunk-ym7q3en9.js");
      u(i.reason);
    }
    let {
        refuseRemoteControlLocally: E,
        refuseRemoteControlIneligible: _,
        startRemoteControl: l
      } = await import("./chunk-pkryw51j.js"),
      p = await E(),
      [{ pinStorageV5: w }, { seedInstallIDs: I }] = await Promise.all([
        import("./chunk-nxmr3nws.js"),
        import("./chunk-ng9bf6hw.js")
      ]),
      C = w(s);
    if (z() && C !== void 0) {
      let [
          { credentialsStoreFor: u },
          { setGrowthBookCredentials: g, setGrowthBookStorageBackend: L },
          { composePolicyLimitsClient: O, primePolicyLimitsCache: G },
          { primeFastPathCredentials: j }
        ] = await Promise.all([
          import("./chunk-f2e9c2ck.js"),
          import("./chunk-4m15ar7w.js"),
          import("./chunk-g6pqvqm7.js"),
          import("./chunk-00syj6tm.js")
        ]),
        U = u(C);
      (g(U), L(C), O({ storageV5: C, credentials: U }), await j(U), await G(C), await I(C));
    }
    let [
      { initSinks: H },
      { initialize1PEventLogging: c },
      { credentialsStoreFor: a },
      { initDefaultDebugLog: d },
      { watchGlobalConfigThroughStorage: y }
    ] = await Promise.all([
      import("./chunk-zcawy9vh.js"),
      import("./chunk-q3ks4p86.js"),
      import("./chunk-f2e9c2ck.js"),
      import("./chunk-9expqymv.js"),
      import("./chunk-ng9bf6hw.js")
    ]);
    H();
    let A = a(C);
    c(C);
    let F = await _(p);
    if (z() && C !== void 0) (d({ storageV5: C }), y(C));
    await l(F, e.slice(1), C, A);
    return;
  }
  {
    let t = rZs(e);
    if (t !== null) {
      P("cli_daemon_path");
      let { ensureFastPathSettingsLoaded: o } = await import("./chunk-r2a214y7.js");
      await o(s);
      let { initializeErrorLogSink: i } = await import("./chunk-2vtyv1rv.js");
      i();
      let { daemonMain: E } = await import("./chunk-7vavdsaz.js");
      await E(t, s);
      return;
    }
  }
  let M = process.env.CLAUDE_CODE_SESSION_KIND === "bg",
    N = e.some(
      (t) =>
        t === "logs" ||
        t === "attach" ||
        t === "stop" ||
        t === "kill" ||
        t === "respawn" ||
        t === "rm"
    )
      ? import.meta
          .require(
            __sourceFilePath_d0b841cb77dc0293(
              new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-526awc2s.js", import.meta.url)
            )
          )
          .backgroundSessionVerbIndex(e, { behindRootOptions: !M })
      : -1,
    h = N === -1 ? [] : e.slice(N),
    B =
      e.includes("--bg") || e.includes("--background")
        ? import.meta
            .require(
              __sourceFilePath_d0b841cb77dc0293(
                new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-526awc2s.js", import.meta.url)
              )
            )
            .hasBackgroundFlag(e)
        : !1;
  if (h.length > 0 || B) {
    if ((P("cli_bg_path"), ue(e)))
      (console.error(
        h.length > 0
          ? `--desktop can't be combined with \`claude ${h[0]}\`.`
          : "--desktop opens the Claude Desktop app and can't run in the background (`--bg`, `--background`, `--routine`)."
      ),
        process.exit(1));
    if (N > 0) {
      let [{ eagerParseCliFlag: a }, { loadSettingsFromFlag: d, loadManagedSettingsFromFlag: y }] =
          await Promise.all([import("./chunk-526awc2s.js"), import("./chunk-pgp6bdc8.js")]),
        A = e.slice(0, N),
        F = a("--settings", A);
      if (F) d(F);
      let u = a("--managed-settings", A);
      if (u) y(u);
    }
    let { loadFastPathPolicy: t } = await import("./chunk-r2a214y7.js"),
      { sessionFactsRestored: o } = await import("./chunk-3ht3epe0.js"),
      i = null,
      E = ["logs", "stop", "kill", "rm"].includes(h[0] ?? "");
    {
      let a = await t(s);
      if (a)
        if (E)
          process.stderr.write(`${a}
`);
        else {
          let { exitWithError: d } = await import("./chunk-ym7q3en9.js");
          d(a);
        }
      if (((i = await o(s)), i !== null && !E)) {
        let { exitWithError: d } = await import("./chunk-ym7q3en9.js");
        d(i.reason);
      }
    }
    let _ = i === null;
    if (i !== null)
      process.stderr.write(`${i.reason}
`);
    let l = await import("./chunk-4kqj0gsv.js");
    if ((await l.ensureFleetGateHydrated({ kickGrowthBook: _ && !E }), !l.isAgentsFleetEnabled())) {
      let a =
        h[0] ??
        e.find(
          (d) =>
            d === "--bg" || d === "--background" || d === "--routine" || d.startsWith("--routine=")
        ) ??
        "--bg";
      return l.fleetGateRejected(a);
    }
    let [
        p,
        { pinStorageV5: w },
        { initDefaultDebugLog: I },
        { seedInstallIDs: C, watchGlobalConfigThroughStorage: H }
      ] = await Promise.all([
        import("./chunk-gzy8x0qm.js"),
        import("./chunk-nxmr3nws.js"),
        import("./chunk-9expqymv.js"),
        import("./chunk-ng9bf6hw.js")
      ]),
      c = w(s);
    if (z() && c !== void 0) {
      (I({ storageV5: c }), H(c));
      let [
          { credentialsStoreFor: a },
          { setGrowthBookCredentials: d, setGrowthBookStorageBackend: y },
          { composePolicyLimitsClient: A, primePolicyLimitsCache: F },
          { primeFastPathCredentials: u }
        ] = await Promise.all([
          import("./chunk-f2e9c2ck.js"),
          import("./chunk-4m15ar7w.js"),
          import("./chunk-g6pqvqm7.js"),
          import("./chunk-00syj6tm.js")
        ]),
        g = a(c);
      (d(g), y(c), A({ storageV5: c, credentials: g }), await u(g), await F(c), await C(c));
    }
    switch (h[0]) {
      case "logs":
      case "attach":
      case "stop":
      case "kill":
      case "respawn":
      case "rm": {
        let [
          { initializeAnalyticsSink: a },
          { initialize1PEventLogging: d, shutdown1PEventLogging: y },
          { shutdownDatadog: A },
          { sleep: F }
        ] = await Promise.all([
          import("./chunk-f5tk9jgz.js"),
          import("./chunk-q3ks4p86.js"),
          import("./chunk-95xq10gb.js"),
          import("./chunk-v9a7hq3d.js")
        ]);
        if (_) (a(), d(c));
        if (h[0] === "logs") await p.logsHandler(h[1], c);
        else if (h[0] === "attach") await p.attachHandler(h[1], c);
        else if (h[0] === "respawn") await p.respawnHandler(h[1], c);
        else if (h[0] === "rm") await p.rmHandler(h[1], c, void 0, _);
        else await p.stopHandler(h[1], c, _);
        return (
          await Promise.race([Promise.all([y(), A()]), F(500, void 0, { unref: !0 })]).catch(
            () => {}
          ),
          process.exit(process.exitCode ?? 0)
        );
      }
      default: {
        let [
          { initializeAnalyticsSink: a },
          { initialize1PEventLogging: d, shutdown1PEventLogging: y },
          { shutdownDatadog: A },
          { logEvent: F },
          { sleep: u }
        ] = await Promise.all([
          import("./chunk-f5tk9jgz.js"),
          import("./chunk-q3ks4p86.js"),
          import("./chunk-95xq10gb.js"),
          import("./chunk-hmdcqdk1.js"),
          import("./chunk-v9a7hq3d.js")
        ]);
        (a(),
          d(c),
          F("tengu_background", { via_flag: !0, via: b("flag") }),
          await p.handleBgFlag(e, c),
          await Promise.race([Promise.all([y(), A()]), u(500, void 0, { unref: !0 })]).catch(
            () => {}
          ),
          process.exit(process.exitCode ?? 0));
      }
    }
    return;
  }
  let n = Jwt(e);
  n.config.restricted ||= ["1", "true", "yes", "on"].includes(
    (process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim()
  );
  let { dispatchDefaults: T, rest: ge } = je(n.rest),
    q = n.hasAgentsPositional && me(ge),
    ee;
  if ((q || ((me(e) || ee !== void 0) && process.stdin.isTTY)) && process.stdout.isTTY) {
    let { startCapturingEarlyInput: t, consumeEarlyInput: o } = await import("./chunk-t3vemenh.js");
    t();
    let [{ startMdmRawRead: i }, { startKeychainPrefetch: E }] = await Promise.all([
      import("./chunk-6fv3z964.js"),
      import("./chunk-8emk8hr6.js")
    ]);
    (i(), E());
    let {
        enableConfigs: _,
        getGlobalConfig: l,
        seedInstallIDs: p
      } = await import("./chunk-ng9bf6hw.js"),
      w = !1,
      I = !1,
      C = !1;
    try {
      (await _(z() ? s?.backend : void 0),
        (I = l().defaultToAgentsView === !0),
        (w = q || (I && ee === void 0)));
    } catch {}
    if (w) {
      if (n.config.settings || n.config.managedSettings) {
        let { loadSettingsFromFlag: g, loadManagedSettingsFromFlag: L } =
          await import("./chunk-pgp6bdc8.js");
        if (n.config.settings) g(n.config.settings);
        if (n.config.managedSettings) L(n.config.managedSettings);
      }
      if (n.config.pluginDir.length > 0 || n.config.pluginDirNoMcp.length > 0) {
        let [{ setInlinePlugins: g, setInlinePluginsNoMcp: L }, { clearPluginCache: O }] =
          await Promise.all([import("./chunk-k19pbtc6.js"), import("./chunk-ks6phceq.js")]);
        (g(n.config.pluginDir), L(n.config.pluginDirNoMcp), O("claude agents --plugin-dir"));
      }
      let { loadFastPathPolicy: H } = await import("./chunk-r2a214y7.js"),
        c = await H(s);
      if (c) {
        let { exitWithError: g } = await import("./chunk-ym7q3en9.js");
        g(c);
      }
      let a;
      if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
        let [
            {
              mergePluginDirs: g,
              PLUGIN_DIRS_ENV_RECOVERY_HINT: L,
              PLUGIN_DIRS_ENV_VAR: O,
              settlePluginDirsEnv: G,
              withoutPluginDirs: j
            },
            { setInlinePlugins: U },
            { clearPluginCache: Q }
          ] = await Promise.all([
            import("./chunk-1ehtghb9.js"),
            import("./chunk-k19pbtc6.js"),
            import("./chunk-ks6phceq.js")
          ]),
          J = j(G(), n.config.pluginDirNoMcp);
        if (J.length > 0)
          ((a = { name: O, hint: L }),
            U(g(n.config.pluginDir, J)),
            Q("claude agents CLAUDE_CODE_PLUGIN_DIRS"));
      }
      {
        let { areSideloadFlagsDisabledByPolicy: g, sideloadFlagsBlockedMessage: L } =
          await import("./chunk-wnvbqmc3.js");
        if (g()) {
          let O = [];
          if (n.config.pluginDir.length > 0) O.push("--plugin-dir");
          if (n.config.pluginDirNoMcp.length > 0) O.push("--plugin-dir-no-mcp");
          if (a) O.push(a.name);
          if (O.length > 0) {
            let { exitWithError: G } = await import("./chunk-ym7q3en9.js");
            G(a ? `${L(O)} ${a.hint}` : L(O));
          }
        }
      }
      let {
        isAgentsFleetEnabled: d,
        ensureFleetGateHydrated: y,
        fleetGateRejected: A,
        consumeAgentViewRelaunchMarker: F
      } = await import("./chunk-4kqj0gsv.js");
      await y({ kickGrowthBook: !1 });
      let u = !1;
      if (w && d() && !u) {
        let { sessionFactsRestored: g } = await import("./chunk-3ht3epe0.js"),
          L = await g(s);
        if (L !== null) {
          let { exitWithError: R } = await import("./chunk-ym7q3en9.js");
          R(L.reason);
        }
        let [
            { applyFleetViewHostWindowsEnv: O },
            { createRoot: G },
            { getBaseRenderOptions: j },
            { resolve: U },
            {
              getRootSession: Q,
              setCliSessionConfigCarried: J,
              setIsInteractive: Ae,
              setRestrictedSession: Re,
              setSessionStartType: De
            },
            { cliCarriesSessionConfig: ye },
            { pinStorageV5: Oe },
            { appliedSettingSourcesFlagValue: ke }
          ] = await Promise.all([
            import("./chunk-kaj9es1e.js"),
            import("./chunk-dfwb86d4.js"),
            import("./chunk-p6kasmjw.js"),
            import("path"),
            import("./chunk-k19pbtc6.js"),
            import("./chunk-9e1vt20d.js"),
            import("./chunk-nxmr3nws.js"),
            import("./chunk-7xafgem9.js")
          ]),
          ie = { ...n.config, settingSources: ke() },
          S = Oe(s),
          Y;
        if (z() && S !== void 0) {
          let [
            { credentialsStoreFor: R },
            { setGrowthBookCredentials: m, setGrowthBookStorageBackend: k },
            { primeFastPathCredentials: K }
          ] = await Promise.all([
            import("./chunk-f2e9c2ck.js"),
            import("./chunk-4m15ar7w.js"),
            import("./chunk-00syj6tm.js")
          ]);
          ((Y = R(S)), m(Y), k(S), await K(Y), await p(S));
        }
        import("./chunk-tgrpwkh0.js").then(({ resolveSetting: R }) => {
          let { value: m } = R("theme", "dark");
          if (m.startsWith("custom:"))
            import("./chunk-qp34g1bf.js").then((k) => k.loadCustomThemes(S));
        });
        let Le = F();
        (Ae(!0), J(ye({ ...ie, ...T })), Re(n.config.restricted), De("agents_view"));
        let oe = () => {};
        process.on("unhandledRejection", oe);
        let re = Promise.resolve(),
          se = () => {},
          ne = new Promise((R) => {
            se = R;
          });
        (setImmediate(async () => {
          if (z() && S !== void 0)
            try {
              let [
                { credentialsStoreFor: m },
                { composePolicyLimitsClient: k, primePolicyLimitsCache: K }
              ] = await Promise.all([import("./chunk-f2e9c2ck.js"), import("./chunk-g6pqvqm7.js")]);
              (k({ storageV5: S, credentials: m(S) }), await K(S));
            } catch (m) {
              import("./chunk-9expqymv.js").then(({ logForDebugging: k }) =>
                k(
                  `Policy limits: start-up composition on the agents path failed: ${m instanceof Error ? m.message : String(m)}`,
                  { level: "warn" }
                )
              );
            }
          re = Promise.all([
            import("./chunk-78yj3qej.js"),
            import("./chunk-2vtyv1rv.js"),
            import("./chunk-f5tk9jgz.js"),
            import("./chunk-q3ks4p86.js"),
            import("./chunk-hmdcqdk1.js"),
            import("./chunk-baxt3xhv.js"),
            import("./chunk-4m15ar7w.js"),
            import("./chunk-3xwr6mrg.js"),
            import("./chunk-ng9bf6hw.js"),
            import("./chunk-dkgpe20k.js"),
            import("./chunk-bt0dt01v.js"),
            import("./chunk-9expqymv.js")
          ])
            .then(
              ([
                { setupGracefulShutdown: m },
                { initializeErrorLogSink: k },
                { initializeAnalyticsSink: K },
                { initialize1PEventLogging: Me },
                { logEvent: Ne },
                { captureTeammateModeSnapshotIfEnabled: Be },
                { initializeGrowthBook: He },
                { initializeTelemetryAfterTrust: xe },
                { checkHasTrustDialogAccepted: pe, watchGlobalConfigThroughStorage: Ge },
                { applyConfigEnvironmentVariables: Ue },
                { setRepoDetectionGuards: Ve },
                { initDefaultDebugLog: We }
              ]) => {
                if (
                  (m({ storageV5: S, credentials: Y }),
                  Ve({ trustProbe: pe }),
                  He().catch(() => {}),
                  k(),
                  K(),
                  Me(S),
                  z() && S !== void 0)
                )
                  (We({ storageV5: S }), Ge(S));
                return (
                  ne.then(() => {
                    if (pe()) (Ue(), xe(S));
                  }),
                  Ne("tengu_fleetview", { defaultToAgentsView: I, relaunch: Le }),
                  Be()
                );
              }
            )
            .finally(() => process.off("unhandledRejection", oe));
          let R = () =>
            void import("./chunk-gbz9zs8v.js").then((m) =>
              m.startBackgroundHousekeeping(Q().host, S)
            );
          Promise.all([import("./chunk-4m15ar7w.js"), import("./chunk-ng9bf6hw.js")]).then(
            ([{ getFeatureValue_CACHED_MAY_BE_STALE: m }, { checkHasTrustDialogAccepted: k }]) => {
              if (m("tengu_noble_wozniak", !0))
                ne.then(() => {
                  if (k()) R();
                });
              else R();
            }
          );
        }),
          o(),
          O());
        let X =
          T?.permissionMode === "bypassPermissions" || T?.allowBypass
            ? await import("./chunk-mq0dwsw0.js")
            : void 0;
        X?.refuseBypassUnderRoot(T);
        let ae = X?.applyBypassPolicyGate(T) ?? T,
          Z = await G(j(!1)),
          { ensureAgentsWorkspaceTrust: Te, agentsTrustDecision: Ie } =
            await import("./chunk-sngkkz5k.js");
        if ((await Te(Z, Ie(), S), se(), X)) await X.ensureAgentsBypassConsent(Z, ae, S);
        let ce = !0;
        try {
          ce = import.meta
            .require(
              __sourceFilePath_d0b841cb77dc0293(
                new __sourceFilePath_d0b841cb77dc0293_URL("./chunk-gg1ytf58.js", import.meta.url)
              )
            )
            .orgConfigGateFlagOnHand(l(), process.env.CLAUDE_INTERNAL_FC_OVERRIDES);
        } catch {}
        if (ce && (await import("./chunk-jat0gzcq.js")).orgConfigGateFlagCouldArm()) {
          let { enforceOrgConfigGateOnLaunchLane: R } = await import("./chunk-3858habw.js");
          await R({
            showBlockedScreen: () =>
              import("./chunk-agmdkh40.js").then(
                (m) => m.showOrgConfigBlockedScreen,
                () => {
                  return;
                }
              ),
            printMessage: async (m) => {
              let { endInkWithError: k } = await import("./chunk-r57z5ye3.js");
              await k(Z, m);
            }
          });
        }
        let le = await import("./chunk-4kqj0gsv.js"),
          Fe = {
            cwdFilter: n.cwdFilter,
            dispatchExtraArgs: Zce(Qwt(ie, U)),
            dispatchDefaults: ae,
            entryChannel: le.isListReturnRelaunch()
              ? "list_return"
              : q
                ? "cli_agents"
                : "default_home",
            storageV5: S,
            credentials: Y
          };
        {
          let { mountFleetViewWithComposerBack: R } = await import("./chunk-ff5zjg24.js");
          await R(Z, Fe);
        }
        await re.catch(() => {});
        let { gracefulShutdown: be } = await import("./chunk-78yj3qej.js");
        await be(0, "other", { suppressResumeHint: !0 });
        return;
      }
      if (q && !u) return A("claude agents");
    }
  }
  if (e[0] === "self-hosted-runner") {
    P("cli_self_hosted_runner_path");
    let t = e[1];
    if (t === "orchestrator") {
      let { selfHostedRunnerOrchestratorMain: i } = await import("./chunk-zseedsx8.js");
      await i(e.slice(2));
      return;
    }
    if (t === "setup") {
      let { selfHostedRunnerSetupMain: i } = await import("./chunk-phx4e89c.js");
      await i(e.slice(2), s);
      return;
    }
    if (t === "doctor") {
      let { selfHostedRunnerDoctorMain: i } = await import("./chunk-9avr57v2.js");
      await i(e.slice(2), s);
      return;
    }
    if (t === "code-sign") {
      let { selfHostedRunnerCodeSignMain: i } = await import("./chunk-tva1cmas.js");
      await i(e.slice(2));
      return;
    }
    if (t === "decode-token") {
      let { selfHostedRunnerDecodeTokenMain: i } = await import("./chunk-th9tgqkt.js");
      await i(e.slice(2));
      return;
    }
    let { selfHostedRunnerMain: o } = await import("./chunk-twczwv3g.js");
    await o(e.slice(1));
    return;
  }
  if (
    (e.includes("--tmux") || e.includes("--tmux=classic")) &&
    (e.includes("-w") || e.includes("--worktree") || e.some((t) => t.startsWith("--worktree=")))
  ) {
    if ((P("cli_tmux_worktree_fast_path"), ue(e)))
      (console.error(
        "--desktop only opens the Claude Desktop app; it can't be combined with `--worktree` or `--tmux`."
      ),
        process.exit(1));
    let { eagerLoadSettings: t } = await import("./chunk-pgp6bdc8.js");
    t();
    let { loadFastPathPolicy: o } = await import("./chunk-r2a214y7.js");
    {
      let _ = await o(s);
      if (_) {
        let { exitWithError: l } = await import("./chunk-ym7q3en9.js");
        l(_);
      }
    }
    let { configureFastPathGlobalAgents: i } = await import("./chunk-wsjvspnq.js");
    i();
    let { isWorktreeModeEnabled: E } = await import("./chunk-5q5hvn78.js");
    if (E()) {
      let [{ execIntoTmuxWorktree: _ }, { pinStorageV5: l }, { initDefaultDebugLog: p }] =
          await Promise.all([
            import("./chunk-xqhvms6c.js"),
            import("./chunk-nxmr3nws.js"),
            import("./chunk-9expqymv.js")
          ]),
        w = l(s),
        I;
      if (z() && w !== void 0) {
        p({ storageV5: w });
        let [
          { credentialsStoreFor: c },
          { setGrowthBookCredentials: a, setGrowthBookStorageBackend: d },
          { primeFastPathCredentials: y }
        ] = await Promise.all([
          import("./chunk-f2e9c2ck.js"),
          import("./chunk-4m15ar7w.js"),
          import("./chunk-00syj6tm.js")
        ]);
        ((I = c(w)), a(I), d(w), await y(I));
        let { seedInstallIDs: A } = await import("./chunk-ng9bf6hw.js");
        await A(w);
      }
      let C = await _(e, w, I);
      if (C.handled) return;
      let { exitWithError: H } = await import("./chunk-ym7q3en9.js");
      H(C.error);
    }
  }
  if (e.length === 1 && (e[0] === "--update" || e[0] === "--upgrade"))
    process.argv = [process.argv[0], process.argv[1], "update"];
  let te = e.indexOf("--");
  if ((te === -1 ? e : e.slice(0, te)).includes("--bare")) process.env.CLAUDE_CODE_SIMPLE = "1";
  let {
    NON_REPL_SUBCOMMANDS: fe,
    isMcpServeInvocation: we,
    isPluginEvalInvocation: he,
    isRemoteControlInvocation: Ee,
    isAgentsJsonInvocation: _e,
    isProjectVerbInvocation: Se
  } = await import("./chunk-y7venc25.js");
  if (
    !fe.has(process.argv[2] ?? "") &&
    !we(process.argv.slice(2)) &&
    !he(process.argv.slice(2)) &&
    !Ee(process.argv.slice(2)) &&
    !_e(process.argv.slice(2)) &&
    !Se(process.argv.slice(2))
  ) {
    let { startCapturingEarlyInput: t } = await import("./chunk-t3vemenh.js");
    t();
  }
  let [{ startMdmRawRead: Ce }, { startKeychainPrefetch: ve }] = await Promise.all([
    import("./chunk-6fv3z964.js"),
    import("./chunk-8emk8hr6.js")
  ]);
  (Ce(),
    ve(),
    P("cli_before_main_import"),
    (await import("./chunk-r669nch4.js")).configureZodForStartup());
  let { main: Pe } = await import("./chunk-kfdf5pq3.js");
  (P("cli_after_main_import"), await Pe(s), P("cli_after_main_complete"));
}
Ye();

//# sourceMappingURL=cli.js.map
