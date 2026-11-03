// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-8w2npe9a.js";
import "./chunk-xe386mry.js";
import "./chunk-4kxy1036.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import "./chunk-971jjch9.js";
import "./chunk-c3npf81n.js";
import "./chunk-t6wy6xxv.js";
import "./chunk-x8k0r295.js";
import "./chunk-6xjawpfq.js";
import "./chunk-vbnb89qh.js";
import "./chunk-qywdxehb.js";
import "./chunk-52ssztep.js";
import "./chunk-znkwh1rm.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-95k4nfdh.js";
import "./chunk-qmkm2x59.js";
import "./chunk-dvghjmtr.js";
import "./chunk-at88wjsn.js";
import "./chunk-vw9e882a.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-4nzy53ma.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-arw2bgak.js";
import "./chunk-rhk37je5.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-zem4yd4w.js";
import "./chunk-7zgz07kc.js";
import "./chunk-ajtyjx88.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-rj6gws00.js";
import "./chunk-v19xty83.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-exz0w70z.js";
import "./chunk-qakn3b85.js";
import "./chunk-zf79f62g.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-7svjr0za.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-2shtjvf4.js";
import "./chunk-cr7a2cdd.js";
import "./chunk-crvt0hax.js";
import "./chunk-70kfjmfv.js";
import "./chunk-3ykpnhq2.js";
import { Sre } from "./chunk-fkrhc02x.js";
import "./chunk-qtg4fa3e.js";
import "./chunk-4j8ddsyx.js";
import "./chunk-6jn0brsm.js";
import "./chunk-pzpqyt29.js";
import "./chunk-fcym4pv0.js";
import "./chunk-ttxbg7sf.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var b = {},
  C = {};
async function E() {
  let { exitWithError: e } = await import("./chunk-ym7q3en9.js"),
    { getSettingsWithErrors: o } = await import("./chunk-pc5tq34f.js");
  if (o().settings.disableRemoteControl === !0) e(`Error: ${Sre}`);
  let [{ hasStoredOAuthToken: t }, { BRIDGE_LOGIN_ERROR: r }, { getBridgeAuthDebugInfo: i }] =
    await Promise.all([
      import("./chunk-8amfvyqf.js"),
      import("./chunk-say2smmv.js"),
      import("./chunk-rzasmdfc.js")
    ]);
  if (!t()) e(r + i());
  return b;
}
async function _(e) {
  let {
      getBridgeDisabledDiagnosis: o,
      getBridgeAuthDebugInfo: t,
      ensurePolicyLimitsLoadedForDiagnostic: r
    } = await import("./chunk-rzasmdfc.js"),
    { checkBridgeMinVersion: i } = await import("./chunk-b67wfa2b.js"),
    { exitWithError: n } = await import("./chunk-ym7q3en9.js"),
    { logOrgPolicyDeniedAsync: s } = await import("./chunk-1k8kmtza.js"),
    a = await o();
  if (a) {
    if (a.orgPolicyDenied) await s("allow_remote_control", "cli_flag");
    (await m(a.code), n(`Error: ${a.reason}` + t()));
  }
  let c = i();
  if (c) (await m("version_floor"), n(c));
  let { policyDeniedReason: u } = await import("./chunk-b0q88bjg.js");
  await r();
  let d = u(
    "allow_remote_control",
    "Remote Control",
    "is",
    "Remote Control is disabled by your organization's policy."
  );
  if (d !== null)
    (await s("allow_remote_control", "cli_flag"), await m("policy_denied"), n(`Error: ${d}`));
  return C;
}
async function m(e) {
  let [{ logFeatureBadAsync: o }, { flushAnalyticsBeforeExit: t }] = await Promise.all([
    import("./chunk-twf9jcbt.js"),
    import("./chunk-x22rxf9f.js")
  ]);
  (await o("remote_control_entry", e), await t());
}
async function D(e, o, t, r) {
  let [
    { preflightTrustedDeviceBlocking: i, sayHeldAutomaticEnrollmentNoticeOnStderr: n },
    { shutdown1PEventLogging: s },
    { shutdownDatadog: a },
    { sleep: c },
    { exitWithError: u },
    { bridgeMain: d },
    { initializeGrowthBook: g },
    { logForDebugging: f },
    { logFeatureBadAsync: y },
    { claudeTempDir: w },
    { errorMessage: R },
    { logError: h }
  ] = await Promise.all([
    import("./chunk-yad5vxrm.js"),
    import("./chunk-q3ks4p86.js"),
    import("./chunk-95xq10gb.js"),
    import("./chunk-v9a7hq3d.js"),
    import("./chunk-ym7q3en9.js"),
    import("./chunk-142mjqaf.js"),
    import("./chunk-4m15ar7w.js"),
    import("./chunk-9expqymv.js"),
    import("./chunk-twf9jcbt.js"),
    import("./chunk-t5m2yapx.js"),
    import("./chunk-6zj7zk76.js"),
    import("./chunk-sk2pgwv9.js")
  ]);
  try {
    w();
  } catch (l) {
    (h(l), await m("temp_dir_unusable"), u(R(l)));
  }
  g().catch((l) => {
    f(
      `[remote-control] GrowthBook init failed (${l instanceof Error ? l.name : typeof l}); feature gates keep serving the disk cache`,
      { level: "error" }
    );
  });
  let p = await i(r);
  if ((n(), p))
    (await y("remote_control_entry", "trusted_device_unenrolled"),
      await Promise.race([Promise.all([s(), a()]), c(500, void 0, { unref: !0 })]).catch(() => {}),
      u(`Error: ${p}`));
  await d(o, t, r);
}
async function B(e, o, t) {
  let r = await E(),
    i = await _(r);
  await D(i, e, o, t);
}
var O = new Map([
  ["verbose", () => !0],
  ["debug", () => !0],
  ["debugToStderr", () => !0],
  ["debugFile", () => !0],
  ["axScreenReader", () => !0],
  ["workload", () => !0],
  ["sessionId", () => !0],
  ["name", () => !0],
  ["remoteControlSessionNamePrefix", () => !0],
  ["pluginDir", () => !0],
  ["pluginDirNoMcp", () => !0],
  ["pluginUrl", () => !0],
  ["addDir", () => !0],
  ["ide", () => !0],
  ["chrome", (e) => e === !0],
  ["model", () => !0],
  ["effort", () => !0],
  ["fallbackModel", () => !0],
  ["betas", () => !0],
  ["thinking", () => !0],
  ["thinkingDisplay", () => !0],
  ["maxThinkingTokens", () => !0],
  ["autocompact", () => !0],
  ["allowedTools", () => !0],
  ["dangerouslySkipPermissions", () => !0],
  ["allowDangerouslySkipPermissions", () => !0],
  ["enableAutoMode", () => !0],
  ["bare", () => !0]
]);
function v(e) {
  return e.filter(({ key: o, value: t }) => !O.get(o)?.(t)).map(({ flag: o }) => o);
}
function P(e) {
  let o = e.map((n) => `\`${n}\``).join(", "),
    [t, r] = e.length === 1 ? ["it", "is"] : ["them", "are"],
    i = e.includes("--permission-mode")
      ? " Set the permission mode with `claude remote-control --permission-mode <mode>`."
      : "";
  return (
    `Error: ${o} before \`remote-control\` ${r} not carried over to the sessions Remote Control starts, so Remote Control refuses to start rather than drop ${t} \u2014 remove ${t}, and give Remote Control's own options after the verb (see \`claude remote-control --help\`).` +
    i
  );
}
export {
  B as enterRemoteControl,
  _ as refuseRemoteControlIneligible,
  E as refuseRemoteControlLocally,
  P as rootOptionsRefusedMessage,
  v as rootOptionsRemoteControlRefuses,
  D as startRemoteControl
};

//# sourceMappingURL=chunk-pkryw51j.js.map
