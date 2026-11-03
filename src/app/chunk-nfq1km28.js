import {
  fileURLToPath as __filePath_6e0589ab00427545,
  URL as __filePath_6e0589ab00427545_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { X } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { U } from "./chunk-wrtp8qz8.js";
import { Kse, ies } from "./chunk-xc1j8sdj.js";
import { Cn } from "./chunk-4kxznmzw.js";
import { Ur } from "./chunk-45h8cn90.js";
import { I } from "./chunk-a16y5hcz.js";
import { he } from "./chunk-95k4nfdh.js";
import { aVe, w2t, yue, tl, J7 } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { jr, zt, da } from "./chunk-brszmkb3.js";
import { Pwn } from "./chunk-7c3thgax.js";
import { dUo } from "./chunk-r5xsp8d0.js";
import { s, n, yUe } from "./chunk-h56pfqh7.js";
import { Oo } from "./chunk-0evsancd.js";
import { Z_ } from "./chunk-db3bnzed.js";
import { cXe, YIs, uWn } from "./chunk-j0tbz6ra.js";
import { S7n, w7n } from "./chunk-fh50nzzj.js";
import { LLo, O$r } from "./chunk-j9t13sne.js";
import { opt } from "./chunk-wr09hc4c.js";
import { MC } from "./chunk-draaxner.js";
import { zve } from "./chunk-zv0be35s.js";
import { Kie } from "./chunk-5htn7psj.js";
import { Vie } from "./chunk-qmgw1yjr.js";
import { j6 } from "./chunk-vf73g5pg.js";
import { e, r } from "./chunk-f790ajz4.js";
import { bdt } from "./chunk-he7sp1nh.js";
import { cwd as A } from "process";
import { stripVTControlCharacters as P } from "util";
import { createInterface as E } from "readline";
function Bxt(c, d = process.stdin) {
  let t = () => {},
    f = new Promise((p) => {
      t = p;
    }),
    l = E({ input: d, output: process.stdout });
  return (
    l.question(`${c} [y/N] `, (p) => {
      let _ = p.trim().toLowerCase();
      (t(_ === "y" || _ === "yes"), l.close());
    }),
    l.once("close", () => t(!1)),
    f
  );
}
function GEi() {
  return yUe({ ...MC(!1), patchConsole: !1 });
}
function R(c) {
  return { ok: !0, days: ies, seconds: Kse };
}
async function zEi(c, d) {
  a("tengu_setup_token_command", {});
  let t = R(d?.expiresInDays);
  if (!t.ok) {
    (c.unmount(),
      process.stderr.write(`${t.message}
`),
      await zt("cli_setup_token", t.errorCode),
      await Oo(1));
    return;
  }
  let f = J7(!0);
  if (!f.valid)
    (c.unmount(),
      process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`),
      await zt("cli_setup_token", "force_login_method_refused"),
      await Oo(1));
  let l = aVe("firstParty");
  if (l !== void 0)
    (c.unmount(),
      process.stderr.write(`${l}
setup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.
`),
      await zt("cli_setup_token", "provider_not_allowed"),
      await Oo(1));
  let p = !tl(),
    { ConsoleOAuthFlow: _ } = await import("./chunk-sn0kxdha.js"),
    g = U(),
    h = !1;
  if (
    (await new Promise((y) => {
      c.render(
        e(Z_, {
          session: g,
          onChangeAppState: (k) => Kie(k, g),
          children: r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(Vie, {}),
              p &&
                r(s, {
                  flexDirection: "column",
                  children: [
                    e(n, {
                      color: "warning",
                      children:
                        "Warning: You already have authentication configured via environment variable or API key helper."
                    }),
                    e(n, {
                      color: "warning",
                      children:
                        "The setup-token command will create a new OAuth token which you can use instead."
                    })
                  ]
                }),
              r(s, {
                paddingLeft: 1,
                flexDirection: "column",
                gap: 1,
                children: [
                  r(n, {
                    bold: !0,
                    children: [
                      "This will guide you through long-lived (",
                      t.days === 365 ? "1-year" : `${t.days}-day`,
                      ") auth token setup for your Claude account. Claude subscription required."
                    ]
                  }),
                  e(_, {
                    onDone: () => {
                      y();
                    },
                    onAccountOnHold: () => {
                      ((h = !0), y());
                    },
                    mode: "setup-token",
                    expiresIn: t.seconds,
                    urlOutdent: 1
                  })
                ]
              })
            ]
          })
        })
      );
    }),
    c.unmount(),
    h)
  ) {
    (await zt("cli_setup_token", "account_on_hold"), await Oo(1));
    return;
  }
  (await jr("cli_setup_token"), await Oo(0));
}
async function KEi(c) {
  a("tengu_doctor_command", {});
  let d;
  try {
    let t = await opt({ probeKeychain: !0, storageV5: c }),
      f = j6(),
      l = [
        "Claude Code doctor",
        "",
        `Running: ${t.installationType} (${t.version})`,
        ...({
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_6e0589ab00427545(
            new __filePath_6e0589ab00427545_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.GIT_SHA
          ? [
              `Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_6e0589ab00427545(new __filePath_6e0589ab00427545_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.GIT_SHA.slice(0, 12)}`
            ]
          : []),
        "Platform: linux-x64",
        ...(t.packageManager ? [`Package manager: ${u(t.packageManager)}`] : []),
        `Path: ${u(t.installationPath)}`,
        ...(t.invokedBinary !== t.installationPath ? [`Invoked: ${u(t.invokedBinary)}`] : []),
        `Config install method: ${u(t.configInstallMethod)}`,
        `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : u(t.ripgrepStatus.systemPath || "system")})`,
        `Auto-updates: ${t.packageManager ? "Managed by package manager" : u(t.autoUpdates)}`,
        `Auto-update channel: ${f === "rc" ? "slow" : f}`,
        `Last update attempt: ${b(t.lastUpdateResult)}`
      ],
      p = cXe();
    if (p) l.push(`Managed settings (remote): ${u(uWn(p))}`);
    else if (YIs())
      l.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    {
      let { waitForPolicyLimitsToLoad: o, POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: m } =
          await import("./chunk-g6pqvqm7.js"),
        { getLastFetchOutcome: w } = await import("./chunk-b0q88bjg.js"),
        v = !1,
        S = o().then(() => {
          v = !0;
        }),
        T = Date.now() + m;
      while (!v && w() === null && Date.now() < T) await Promise.race([S, X(200)]);
    }
    let _ = l.push("Organization policy: \u2026") - 1,
      { statusNotices: g, invalidEntries: h } = bdt(zve().errors);
    if (h.length > 0) {
      l.push("", he.yellow("Invalid settings"));
      for (let o of h) {
        let m = [o.file, o.path].flatMap((w) => (w ? [u(w)] : [])).join(" \u203A ");
        l.push(
          `- ${m ? `${m}: ` : ""}${u(o.message)}${
            o.suggestion
              ? `
  Suggested fix: ${u(o.suggestion)}`
              : ""
          }`
        );
      }
    }
    if (g.length > 0) {
      l.push("");
      for (let o of g) l.push(`- ${u(o.message)}`);
    }
    let y = Pwn();
    if (y.length > 0) {
      l.push("");
      for (let [o, m] of y)
        l.push(`- ${o}
  ${m}`);
    }
    let k = [
      { name: "BASH_MAX_OUTPUT_LENGTH", default: O$r, upperLimit: LLo },
      { name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS", ...yue("claude-opus-4-6") }
    ]
      .map((o) => ({ name: o.name, ...w2t(o.name, process.env[o.name], o.default, o.upperLimit) }))
      .filter((o) => o.status !== "valid");
    if (k.length > 0) {
      l.push("", he.yellow("Environment variables"));
      for (let o of k) l.push(`- ${o.name}: ${u(o.message ?? o.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      l.push("", he.yellow("Multiple installations found"));
      for (let o of t.multipleInstallations) l.push(`- ${u(`${o.type} at ${o.path}`)}`);
    }
    try {
      let o = await dUo();
      if ((l.push("", "Remote Control"), o.inRemoteSession))
        l.push(
          "Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead."
        );
      else {
        l.push(
          u(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app")
        );
        for (let m of o.checks.filter((w) => !w.ok))
          l.push(u(`- ${m.label}${m.detail ? ` (${m.detail})` : ""}`));
      }
    } catch {
      await da("cli_doctor", "bridge_info_unavailable");
    }
    if (((l[_] = `Organization policy: ${u(w7n(S7n()))}`), t.warnings.length > 0)) {
      l.push("", he.yellow(`${t.warnings.length} ${I(t.warnings.length, "warning")} found`));
      for (let o of t.warnings) l.push(`- ${u(o.issue)}`, `  Fix: ${u(o.fix)}`);
    } else l.push("", "No installation issues found.");
    (l.push(
      "",
      "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."
    ),
      Ur(
        l.join(`
`) +
          `
`
      ),
      (d = {
        warnings: t.warnings.length,
        settings_errors: h.length,
        env_var_issues: k.length,
        multiple_installs: t.multipleInstallations.length > 1,
        ripgrep_working: t.ripgrepStatus.working
      }));
  } catch (t) {
    throw (await zt("cli_doctor", "diagnostic_failed"), t);
  }
  (await jr("cli_doctor", d), await Oo(0));
}
function u(c) {
  return Cn(P(c)).replaceAll("`", "");
}
function b(c) {
  if (!c) return "none recorded";
  let d = u(c.timestamp.slice(0, 10));
  switch (c.outcome) {
    case "success":
      return c.version_to ? `success \u2192 ${u(c.version_to)} (${d})` : `success (${d})`;
    case "failed":
      return `failed (${u(c.status)}) \u2014 ${d}`;
  }
}
async function VEi(c, d, t) {
  if (i.DISABLE_UPDATES)
    (process.stdout
      .write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`),
      process.exit(0));
  let { awaitPolicyLimitsColdStart: f } = await import("./chunk-g6pqvqm7.js");
  await f();
  let { setup: l } = await import("./chunk-qm69bb07.js");
  await l(A(), "default", !1, !1, void 0, !1, void 0, void 0, void 0, t);
  let { install: p } = await import("./chunk-yb1jz8tw.js");
  await new Promise((_) => {
    let g = [];
    if (c) g.push(c);
    if (d.force) g.push("--force");
    p.call(
      async (h) => {
        if (h.includes("failed")) await zt("cli_install", "cli_install_failed");
        else await jr("cli_install");
        (await Oo(h.includes("failed") ? 1 : 0), _());
      },
      { storageV5: t },
      g
    );
  });
}
export { Bxt, GEi, zEi, KEi, VEi };

//# sourceMappingURL=chunk-nfq1km28.js.map
