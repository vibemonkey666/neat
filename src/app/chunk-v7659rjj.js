import {
  fileURLToPath as __sourceFilePath_106ec9c49175096c,
  URL as __sourceFilePath_106ec9c49175096c_URL
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
import { L, U, ke, bTn, Nts, vit, UM, OYe, Pn, X_, MYe, $os } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { N, d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { YSe } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { yw, Rsn, INs, pWe, qge, fi, O_, sY, rHr, Xn, ai } from "./chunk-j0tbz6ra.js";
import { wr, wAn } from "./chunk-jazcqqqr.js";
import { i } from "./chunk-cj37hmns.js";
import { bt, t } from "./chunk-4kxznmzw.js";
import { dc } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { O_n, JU, Ut, Ai, k, cS, OKt, Cs, Fg, cI, Fx, Re, ue, p5o } from "./chunk-ajtyjx88.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { Q5 } from "./chunk-7c3thgax.js";
import { Cx } from "./chunk-h2tyaevk.js";
import { sGe } from "./chunk-r2wpxemj.js";
import { mv } from "./chunk-1fnv3zry.js";
import { w } from "./chunk-7m7t89vx.js";
import { zmr } from "./chunk-db3bnzed.js";
import { Kpe, lXt } from "./chunk-655shhf4.js";
import { MC } from "./chunk-draaxner.js";
import { Zie } from "./chunk-b77hptpq.js";
import { s, n, BR } from "./chunk-h56pfqh7.js";
import { $On, ygi, Voo } from "./chunk-6d8swme1.js";
import { dlt, oL } from "./chunk-cde0823w.js";
import { lut } from "./chunk-prmhfqsf.js";
import { APn, kus } from "./chunk-gv4v91yx.js";
import { YI, cMt, Omo } from "./chunk-m59vztgd.js";
import { _Pn } from "./chunk-3rqpqe4q.js";
import { mHn } from "./chunk-v7wg6hva.js";
import { $6e } from "./chunk-zvrxpre6.js";
import { Iut } from "./chunk-zv0be35s.js";
import { eas } from "./chunk-22jrhb52.js";
import { ext } from "./chunk-n6jrm8zn.js";
import { Kie } from "./chunk-5htn7psj.js";
import { e, r } from "./chunk-f790ajz4.js";
import { jSs } from "./chunk-nzvp0yb4.js";
import { V5n } from "./chunk-1jwvas5k.js";
import { de, P, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
import { openSync as Ie, writeSync as Oe } from "fs";
import { homedir as Fe } from "os";
var Ee = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal"
};
function se(o) {
  return;
}
class Z {
  frameDurations = [];
  totalFrames = 0;
  firstRenderTime;
  lastRenderTime;
  record(o) {
    let p = performance.now();
    if (this.firstRenderTime === void 0) this.firstRenderTime = p;
    if (
      ((this.lastRenderTime = p),
      this.totalFrames++,
      this.frameDurations.push(o),
      this.frameDurations.length > 3600)
    )
      this.frameDurations.splice(0, this.frameDurations.length >> 1);
  }
  getMetrics() {
    if (this.totalFrames === 0 || this.firstRenderTime === void 0 || this.lastRenderTime === void 0)
      return;
    let o = this.lastRenderTime - this.firstRenderTime;
    if (o <= 0) return;
    let p = this.totalFrames / (o / 1000),
      u = this.frameDurations.slice().sort((D, M) => M - D),
      x = Math.max(0, Math.ceil(u.length * 0.01) - 1),
      A = u[x],
      b = A > 0 ? 1000 / A : 0;
    return { averageFps: Math.round(p * 100) / 100, low1PctFps: Math.round(b * 100) / 100 };
  }
}
function Ze(ot) {
  return ot(!1);
}
function tt(nt) {
  return nt.execRelaunch();
}
function Ve(it) {
  (it(), import("./chunk-966ypkj5.js").then(tt));
}
function et(at) {
  return { ...at, phase: "save-failed" };
}
function wmi(o) {
  if (i.CLAUBBIT || !Cs()) return;
  (UM(!0), mv(o));
}
function vmi(o) {
  Re(
    (p) => ({
      ...p,
      hasCompletedOnboarding: !0,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_106ec9c49175096c(
          new __sourceFilePath_106ec9c49175096c_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
    }),
    o
  );
}
function Zis(o, p) {
  return async (u) => {
    let x = await APn(o),
      A = Iut();
    if (x.pendingServers.length === 0) return null;
    if (A.length > 0) {
      let b = L(A.flatMap((D) => (D.file ? [dc(D.file)] : []))).join(", ");
      return (
        f("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors"),
        p({
          key: "mcp-approval-skipped",
          text: `skipping .mcp.json server approval (settings errors${b ? ` in ${b}` : ""}) \xB7 run \`claude doctor\` to list them, fix them, then restart`
        }),
        null
      );
    }
    try {
      return await kus(
        x,
        (b) => {
          try {
            let D = Be(b);
            if (D) p(D);
          } catch (D) {
            l(N(D));
          } finally {
            u();
          }
        },
        o
      );
    } catch (b) {
      throw (m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw"), b);
    }
  };
}
function Be(o) {
  if (o.persistFailed)
    return (
      m("mcp_project_approval_dialog", "mcp_approval_persist_failed"),
      {
        key: "mcp-approval-persist-failed",
        text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) \xB7 you will be asked again next startup"
      }
    );
  let p = cI();
  if (bTn().some((u) => u.workspaceKey === p) && !Fg() && Fx({ onIndeterminate: "tracked" }))
    return (
      f("mcp_project_approval_dialog", "mcp_approval_persist_gated"),
      {
        key: "mcp-approval-persist-gated",
        text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) \xB7 to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json"
      }
    );
  return (g("mcp_project_approval_dialog"), null);
}
async function Kvi(o, p) {
  (oL(o, e(n, { color: "error", children: p })), o.unmount(), await Ce(p));
}
async function Ce(o) {
  let { setBgExitCause: p, setBgExitDetail: u } = await import("./chunk-td9swgx9.js");
  (p("exit_with_message"), u("exit_with_message", o));
}
async function Vvi(o, p, u, x) {
  return qcr(o, p, { color: "error", beforeExit: u, unsentPrompt: x });
}
async function qcr(o, p, u) {
  let x = u?.color,
    A = u?.exitCode ?? 1,
    b = x ? e(n, { color: x, children: p }) : e(n, { children: p });
  if (
    (oL(
      o,
      u?.unsentPrompt
        ? r(s, {
            flexDirection: "column",
            children: [
              b,
              e(n, {
                children: `
Your message was not sent:
${u.unsentPrompt}`
              })
            ]
          })
        : b
    ),
    o.unmount(),
    await u?.beforeExit?.(),
    A !== 0)
  )
    await Ce(p);
  let { flushAnalyticsSinks: D } = await import("./chunk-78yj3qej.js");
  await D();
  let { drainRegisteredWriteQueues: M } = await import("./chunk-rtb7qqh9.js"),
    { withTimeout: E } = await import("./chunk-v9a7hq3d.js");
  (await E(M(), 2000, "write queue drain timeout (exitWithMessage)").catch(() => {}),
    process.exit(A));
}
function Yxe(o, p, u) {
  return new Promise((x, A) => {
    dlt(
      o,
      [
        (b) =>
          p((D) => {
            (x(D), b());
          })
      ],
      { session: U(), onChangeAppState: u?.onChangeAppState, marksJobBlocked: !0 }
    ).catch(A);
  });
}
async function SQr(o, p, u, x, A) {
  let b = oL(o, p);
  (p5o(), Voo(u, x, A));
  try {
    if (
      (await Promise.race([
        o.waitUntilExit().then(() => "exited"),
        b.replaced.then(() => "replaced")
      ])) === "replaced"
    )
      return;
  } catch (D) {
    let M = N(D),
      F = (await mHn().catch(() => !1))
        ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)."
        : "";
    if (
      (sY(`Claude Code exited after an unrecoverable interface error (${M.message}).${F}`),
      Ut() || wAn())
    )
      throw D;
    try {
      sGe(M, "unhandled_rejection");
    } catch {}
    await Xn(1, "other");
    return;
  }
  (await rHr.of(u.host).runBeforeInteractiveShutdown(), await Xn(0));
}
var Ue = 2000,
  le = "GB post-onboarding init";
async function qvi(o, p, u, x, A, b, D, M, E, F, R) {
  let _ = {
      onboardingShown: !1,
      onboardingSkippedSignIn: !1,
      mcpApprovalSkipWarning: null,
      claudeInChromeAccepted: !1
    },
    O = (I) => {
      _.mcpApprovalSkipWarning = I;
    };
  if (Ut() || i.CLAUDE_BRIDGE_REATTACH_SESSION) {
    let I = Cs(),
      h = I || (i.CLAUDE_BG_WORKSPACE_TRUSTED === !0 && YSe(ke(), Fe()));
    if (!h)
      t(
        "Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)",
        { level: "warn" }
      );
    let v = [
      () => {
        if (h) UM(!0);
        if ((OKt({ preservePendingExposures: !0 }), Ai().catch((T) => l(N(T))), h))
          (pWe(o),
            import("./chunk-7tmp2zg1.js")
              .then((T) => T.loadHooksModulesHeldForTrust(E, F))
              .catch((T) => l(N(T))));
        return null;
      },
      Zis(E, O),
      () => {
        if (h)
          (Cx(), import("./chunk-qm69bb07.js").then((T) => T.maybePrewarmRecallIndex(o)), mv(E));
        if (($On(o.host), _Pn(), h)) {
          if (!I && !Pn() && !wr()) Te(E, F);
          setImmediate(Kpe, E);
        }
        return null;
      }
    ];
    return (await dlt(p, v, { session: o, storageV5: E }), _);
  }
  if (Ne(!1) || i.IS_DEMO) return (wmi(E), $On(o.host), _Pn(), _);
  return (
    await dlt(
      p,
      Emi(
        {
          session: o,
          permissionMode: u,
          allowDangerouslySkipPermissions: x,
          commands: A,
          claudeInChrome: b,
          devChannels: D,
          offerClaudeInChrome: M,
          storageV5: E,
          credentials: F,
          askCloudDefaultReason: R
        },
        _
      ),
      { session: o, onChangeAppState: Kie, marksJobBlocked: !0, storageV5: E }
    ),
    _
  );
}
function Emi(
  {
    session: o,
    permissionMode: p,
    allowDangerouslySkipPermissions: u,
    commands: x,
    claudeInChrome: A,
    devChannels: b,
    offerClaudeInChrome: D,
    storageV5: M,
    credentials: E,
    askCloudDefaultReason: F
  },
  R
) {
  let _ = ue(),
    O = !1,
    I = !0;
  return [
    (h) => {
      if (
        _.hasCompletedOnboarding &&
        i.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" &&
        i.CLAUDE_CODE_POWERUP_ONBOARDING !== "step"
      )
        return null;
      return (
        (R.onboardingShown = !0),
        import("./chunk-4vaed1dr.js").then(({ Onboarding: v }) =>
          e(v, {
            host: o.host,
            onDone: ({ skippedSignIn: T }) => {
              ((R.onboardingSkippedSignIn = T), vmi(M), h());
            }
          })
        )
      );
    },
    (h) => {
      if (i.CLAUBBIT) return null;
      if (((I = Cs()), I && !$6e())) return null;
      return (
        (O = !0),
        (I ? Promise.resolve(!1) : jSs()).then((v) => {
          if (v) return (OYe(!0), null);
          return import("./chunk-bgevbnb2.js").then(({ TrustDialog: T }) =>
            e(T, { commands: x, onDone: h })
          );
        })
      );
    },
    () => {
      if (i.CLAUBBIT) return null;
      if ((UM(!0), O)) {
        if ((O_("post-trust: re-discover project @skills-dir plugins"), qge(E)))
          fi(M, E).catch(() => {});
      }
      if (
        (import("./chunk-7tmp2zg1.js")
          .then((h) => h.loadHooksModulesHeldForTrust(M, E))
          .catch((h) => l(N(h))),
        OKt({ preservePendingExposures: !0 }),
        _.hasCompletedOnboarding)
      )
        return (Ai().catch((h) => l(N(h))), null);
      return (JU(), ce());
    },
    () => {
      if (i.CLAUBBIT) return null;
      return null;
    },
    (h) =>
      i.CLAUBBIT
        ? null
        : Zis(M, (v) => {
            R.mcpApprovalSkipWarning = v;
          })(h),
    async (h) => {
      if (i.CLAUBBIT || !(await INs(o, M))) return null;
      let v = Rsn(await yw(o, !0, M, E)),
        { ClaudeMdExternalIncludesDialog: T } = await import("./chunk-qw6d595m.js");
      return e(T, { onDone: () => h(), isStandaloneDialog: !0, externalIncludes: v });
    },
    () => {
      if (
        (eas(M),
        se(M),
        Cx(),
        $On(o.host),
        import("./chunk-qm69bb07.js").then((h) => h.maybePrewarmRecallIndex(o)),
        mv(M),
        _Pn(),
        O && !I && !Pn() && !wr())
      )
        Te(M, E);
      if (R.onboardingShown) bt(kmi);
      else setImmediate(Kpe, M);
      return ygi(o.host, _) ? ce() : null;
    },
    async (h) => null,
    async (h) => {
      if (!(await lut(M, E))) return null;
      let { GroveDialog: v } = await import("./chunk-jtse25fy.js");
      return e(v, {
        showIfAlreadyViewed: !1,
        location: R.onboardingShown ? "onboarding" : "policy_update_modal",
        onDone: (T) => {
          if (T !== "escape") {
            h();
            return;
          }
          (a("tengu_grove_policy_exited", {}),
            ai(0),
            (R.onboardingShown = !1),
            (R.claudeInChromeAccepted = !1),
            h("stop"));
        }
      });
    },
    async (h) => {
      if (ext().status !== "not_started") return null;
      let { ProTrialStartScreen: v } = await import("./chunk-m2nc7tvq.js");
      return (
        a("tengu_pro_trial_start_screen_shown", {}),
        e(v, { onDone: () => h(), storageV5: M, credentials: E })
      );
    },
    async (h) => {
      if (!R.onboardingShown) return null;
      let { resolvePowerupDiscoveryArm: v } = await import("./chunk-8sw5ak4e.js");
      if (v() !== "step") return null;
      let { PowerupDiscoveryStep: T } = await import("./chunk-j46arp8p.js");
      return e(T, { onDone: () => h() });
    },
    (h) => {
      let v = O_n();
      if (!v) return null;
      return pe(
        import("./chunk-z27pk3nr.js").then(({ ApproveApiKey: T }) =>
          e(T, { customApiKeyTruncated: v, onDone: () => h() })
        )
      );
    },
    ge("bedrock", M),
    ge("vertex", M),
    async (h) => {
      let v;
      try {
        v = await Omo();
      } catch (B) {
        return (l(B), null);
      }
      let { lines: T, hasHardFailure: G } = v;
      if (T.length === 0) return null;
      return e(De, {
        afterMs: G ? 4000 : 1500,
        onDone: h,
        children: e(s, {
          flexDirection: "column",
          children: T.map((B) => e(n, { color: "warning", children: B }, B))
        })
      });
    },
    (h) => {
      if ((p !== "bypassPermissions" && !u) || Q5()) return null;
      return import("./chunk-h67asfys.js").then(({ BypassPermissionsModeDialog: v }) =>
        e(v, { onAccept: () => h(), storageV5: M })
      );
    },
    ...[],
    async (h) => {
      if (X_().length === 0 && (b?.length ?? 0) === 0) return null;
      if ((await cS("tengu_harbor"), !b || b.length === 0)) return null;
      let [
          { isChannelsOffForSession: v },
          { isChannelsPolicyBlocked: T },
          { getSettingsForSource: G }
        ] = await Promise.all([
          import("./chunk-49a95g1y.js"),
          import("./chunk-dnvhpbqe.js"),
          import("./chunk-pc5tq34f.js")
        ]),
        B = () => {
          let H = b.map((J) => ({ ...J, dev: !0 }));
          (MYe(X_().concat(H)), $os(!0));
        };
      if (v() || Ae() !== "firstParty" || T(G("policySettings"))) return (B(), null);
      let { DevChannelsDialog: Y } = await import("./chunk-ak8n2jbj.js");
      return e(Y, {
        channels: b,
        onAccept: () => {
          (B(), h());
        }
      });
    },
    (h) => {
      if (!A || ue().hasCompletedClaudeInChromeOnboarding) return null;
      return pe(
        import("./chunk-xrast654.js").then(({ ClaudeInChromeOnboarding: v }) =>
          e(v, { onDone: () => h() })
        )
      );
    },
    async (h) => {
      if (!D) return null;
      let { isChromeExtensionInstalled: v } = await import("./chunk-cdfxnvn1.js"),
        T = await Nt(v(), 1500, "chrome extension scan timed out before offer").catch(() => !0),
        G = Boolean(ue().chromeExtension?.pairedDeviceId);
      if (!T && !G)
        return (
          t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)"),
          null
        );
      await Nt(
        Ai().catch(() => {}),
        1500,
        "GrowthBook init timed out before chrome offer"
      ).catch(() => {});
      let B = k("tengu_chrome_auto_enable", !1),
        Y = ue().claudeInChromeDefaultEnabled !== void 0,
        { isChromeServerPolicyDenied: H } = await import("./chunk-qdaab4j6.js"),
        { isClaudeInChromeAllowed: J } = await import("./chunk-cdfxnvn1.js");
      if (H() || !J())
        return (
          t(
            "[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)"
          ),
          null
        );
      if (Y)
        return (
          t(
            "[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)"
          ),
          (R.claudeInChromeAccepted = ue().claudeInChromeDefaultEnabled === !0),
          null
        );
      if (!B)
        return (
          t(
            "[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)"
          ),
          null
        );
      let { ChromeAutoEnableDialog: ie } = await import("./chunk-0jgspmgz.js");
      return e(ie, {
        onDone: (ae) => {
          ((R.claudeInChromeAccepted = ae), h());
        },
        isDontAskMode: p === "dontAsk",
        isAutoMode: p === "auto"
      });
    }
  ];
}
async function kmi() {
  try {
    if (vit() && V5n() === null) {
      await lXt();
      let { flushTelemetry: o } = await import("./chunk-87yn4n4k.js");
      await o();
    }
  } catch (o) {
    t(`[3P telemetry] Export before exit failed: ${d(o)}`, { level: "error" });
  }
}
async function pe(o) {
  let [p, { FullPageNotice: u }] = await Promise.all([o, import("./chunk-7g4fr5db.js")]);
  return p === null ? null : e(u, { children: p });
}
async function ce() {
  let o = Date.now();
  try {
    (await Nt(Ai(), Ue, le), t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`));
  } catch (p) {
    if (
      (t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${p}`, { level: "warn" }),
      !(p instanceof Error && p.message === le))
    )
      l(N(p));
  }
  return null;
}
function De(o) {
  let A = w(4),
    { afterMs: p, onDone: u, children: x } = o,
    b,
    D;
  if (A[0] !== p || A[1] !== u)
    ((b = () => {
      let M = setTimeout(u, p);
      return () => clearTimeout(M);
    }),
      (D = [p, u]),
      (A[0] = p),
      (A[1] = u),
      (A[2] = b),
      (A[3] = D));
  else ((b = A[2]), (D = A[3]));
  return (P(b, D), x);
}
var oe = {
  bedrock: {
    accepted: "tengu_bedrock_upgrade_accepted",
    declined: "tengu_bedrock_upgrade_declined",
    saveFailed: "tengu_bedrock_upgrade_save_failed",
    relaunch: "tengu_bedrock_upgrade_relaunch"
  },
  vertex: {
    accepted: "tengu_vertex_upgrade_accepted",
    declined: "tengu_vertex_upgrade_declined",
    saveFailed: "tengu_vertex_upgrade_save_failed",
    relaunch: "tengu_vertex_upgrade_relaunch"
  }
};
function ge(o, p) {
  let u = oe[o];
  return async (x) => {
    if (Ae() !== o) return null;
    try {
      let [A, { upgradeKey: b }] = await Promise.all([
          o === "bedrock"
            ? import("./chunk-b8kwtwc8.js").then((_) =>
                cMt("bedrock-upgrade", _.findBedrockUpgradeCandidates()).then((O) =>
                  O.map((I) => ({ ...I, toId: I.toBedrockId }))
                )
              )
            : import("./chunk-y963mck0.js").then((_) =>
                cMt("vertex-upgrade", _.findVertexUpgradeCandidates()).then((O) =>
                  O.map((I) => ({ ...I, toId: I.toVertexId }))
                )
              ),
          import("./chunk-fzkq11d8.js")
        ]),
        D = (o === "bedrock" ? ue().bedrockDeclinedUpgrades : ue().vertexDeclinedUpgrades) ?? {},
        M = A.filter((_) => D[_.tier] !== b(_));
      if (M.length === 0) return null;
      let [{ updateSettingsForSource: E }, { ThirdPartyModelUpgradeDialog: F }] = await Promise.all(
        [import("./chunk-pc5tq34f.js"), import("./chunk-qbsw92ja.js")]
      );
      async function R(_, O) {
        let I = c(_.tier);
        if (!O)
          return (
            await Re((T) => {
              let G = o === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
              return { ...T, [G]: { ...T[G], [_.tier]: b(_) } };
            }, p),
            a(u.declined, { tier: I, from_key: c(_.fromKey), to_key: c(_.toKey) }),
            !1
          );
        let h =
            _.tier === "haiku"
              ? {
                  ANTHROPIC_DEFAULT_HAIKU_MODEL: _.toId,
                  ...(_.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
                    ANTHROPIC_SMALL_FAST_MODEL: _.toId
                  })
                }
              : { [_.envVar]: _.toId },
          { error: v } = await E("userSettings", { env: h }, void 0, p);
        if (v) return (a(u.saveFailed, { tier: I }), !1);
        for (let T of Object.keys(h)) process.env[T] = _.toId;
        return (a(u.accepted, { tier: I, from_key: c(_.fromKey), to_key: c(_.toKey) }), !0);
      }
      return e(Pe, { provider: o, pending: M, answer: R, onDone: () => x(), Dialog: F });
    } catch (A) {
      return (l(A), null);
    }
  };
}
function Pe(o) {
  let D = w(27),
    { provider: p, pending: u, answer: x, onDone: A, Dialog: b } = o,
    M;
  if (D[0] === S) ((M = { at: 0, acceptedAny: !1, phase: "asking" }), (D[0] = M));
  else M = D[0];
  let [E, F] = y(M),
    { at: R, acceptedAny: _, phase: O } = E,
    { exit: I } = BR(),
    h = C(null),
    v = u[R],
    T;
  if (D[1] !== u.length)
    ((T = (G) =>
      F((B) => {
        let Y = B.acceptedAny || G;
        if (B.at + 1 < u.length) {
          return { at: B.at + 1, acceptedAny: Y, phase: "asking" };
        }
        return { ...B, acceptedAny: Y, phase: Y ? "relaunching" : "done" };
      })),
      (D[1] = u.length),
      (D[2] = T));
  else T = D[2];
  let H = T,
    J,
    ne;
  if (D[3] !== H || D[4] !== I || D[5] !== A || D[6] !== O || D[7] !== p)
    ((J = () => {
      if (O === "done") {
        A();
        return;
      }
      if (O === "save-failed") {
        let ie = setTimeout(Ze, 2000, H);
        return () => clearTimeout(ie);
      }
      if (O === "relaunching") {
        a(oe[p].relaunch, {});
        let ae = setTimeout(Ve, 250, I);
        return () => clearTimeout(ae);
      }
    }),
      (ne = [O, p, H, A, I]),
      (D[3] = H),
      (D[4] = I),
      (D[5] = A),
      (D[6] = O),
      (D[7] = p),
      (D[8] = J),
      (D[9] = ne));
  else ((J = D[8]), (ne = D[9]));
  if ((P(J, ne), O === "relaunching" && _)) {
    let W;
    if (D[10] === S)
      ((W = e(n, {
        dimColor: !0,
        children: "Restarting Claude Code to apply the new model\u2026"
      })),
        (D[10] = W));
    else W = D[10];
    return W;
  }
  if (v === void 0 || O === "done") {
    return null;
  }
  if (O === "save-failed") {
    const W = YI[v.tier];
    let q;
    if (D[11] !== W)
      ((q = r(n, { color: "error", children: ["Failed to save ", W, " upgrade to settings."] })),
        (D[11] = W),
        (D[12] = q));
    else q = D[12];
    return q;
  }
  const W = YI[v.tier];
  let q;
  if (D[13] !== H || D[14] !== x || D[15] !== R || D[16] !== v || D[17] !== A)
    ((q = (be) => {
      if (h.current === R) {
        return;
      }
      ((h.current = R),
        x(v, be).then(
          (Me) => {
            if (be && !Me) {
              F(et);
              return;
            }
            H(Me);
          },
          (rt) => {
            (l(rt), A());
          }
        ));
    }),
      (D[13] = H),
      (D[14] = x),
      (D[15] = R),
      (D[16] = v),
      (D[17] = A),
      (D[18] = q));
  else q = D[18];
  let xe;
  if (
    D[19] !== b ||
    D[20] !== R ||
    D[21] !== v.fromMarketingName ||
    D[22] !== v.toId ||
    D[23] !== v.toMarketingName ||
    D[24] !== W ||
    D[25] !== q
  )
    ((xe = e(
      b,
      {
        tierLabel: W,
        fromName: v.fromMarketingName,
        toName: v.toMarketingName,
        toProviderId: v.toId,
        onDone: q
      },
      R
    )),
      (D[19] = b),
      (D[20] = R),
      (D[21] = v.fromMarketingName),
      (D[22] = v.toId),
      (D[23] = v.toMarketingName),
      (D[24] = W),
      (D[25] = q),
      (D[26] = xe));
  else xe = D[26];
  return xe;
}
function Yvi(o) {
  let p = 0,
    u = MC(o);
  if (u.stdin) a("tengu_stdin_interactive", {});
  let x = new Z(),
    A = zmr();
  Nts(A);
  let b = i.CLAUDE_CODE_FRAME_TIMING_LOG,
    D = -1,
    M = 0,
    E = Math.max(1, i.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
  if (b)
    try {
      D = Ie(b, "a");
    } catch {}
  return {
    getFpsMetrics: () => x.getMetrics(),
    stats: A,
    renderOptions: {
      ...u,
      onFrame: (F) => {
        if (
          (x.record(F.durationMs), A.observe("frame_duration_ms", F.durationMs), D >= 0 && F.phases)
        ) {
          let R = M++ % E === 0,
            _ =
              JSON.stringify({
                total: F.durationMs,
                at: Date.now(),
                ...F.phases,
                ...(R && { rss: process.memoryUsage.rss(), cpu: process.cpuUsage() })
              }) +
              `
`;
          Oe(D, _);
        }
        if (Zie()) return;
        for (let R of F.flickers) {
          if (R.reason === "resize") continue;
          let _ = Date.now();
          if (_ - p < 1000)
            a("tengu_flicker", {
              desiredHeight: R.desiredHeight,
              actualHeight: R.availableHeight,
              reason: R.reason
            });
          p = _;
        }
      }
    }
  };
}
function Te(o, p) {
  import("./chunk-jy18kfw8.js").then((u) => u.startMemoryWatcher(o, p));
}
export { wmi, vmi, Zis, Kvi, Vvi, qcr, Yxe, SQr, qvi, Emi, kmi, Yvi };

//# sourceMappingURL=chunk-v7659rjj.js.map
