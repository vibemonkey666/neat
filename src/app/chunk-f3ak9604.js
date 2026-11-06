import {
  fileURLToPath as __sourceFilePath_ed67c72fc84f3a55,
  URL as __sourceFilePath_ed67c72fc84f3a55_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { R, Rr, d } from "./chunk-fs43t96t.js";
import { F, L, U, ISe, mFe, jM } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, IR, t } from "./chunk-4kxznmzw.js";
import { Pv } from "./chunk-jazcqqqr.js";
import { _t } from "./chunk-ewvf3tep.js";
import { i } from "./chunk-cj37hmns.js";
import { Pt, fe } from "./chunk-xe386mry.js";
import { Xz, ffe, ql, Xx, bqt, rd } from "./chunk-5rw2zfa0.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { oT } from "./chunk-63a6mqbs.js";
import { CZ, zir, Rot, a$e, Tvn } from "./chunk-dmtyt8s1.js";
import { Zt, ear } from "./chunk-d54avynm.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { pe, pt, Un, $9, rTt, Mwn, oTt } from "./chunk-7c3thgax.js";
import { RBe, iJ, u4 } from "./chunk-rjdks4dd.js";
import { Ll } from "./chunk-wany0nxw.js";
import {
  vj,
  pue,
  wt,
  Yo,
  oI,
  IV,
  D_e,
  ZO,
  eM,
  OV,
  I$,
  Xr,
  k0e,
  fd,
  h0,
  A_n,
  mnt,
  nf,
  XVe,
  Hz,
  jp,
  k,
  uRe,
  LKt,
  dI,
  Re,
  ue,
  Znt,
  L$,
  La,
  tNe
} from "./chunk-ajtyjx88.js";
import { s5s, ijt, Tre, f9n, p9n } from "./chunk-bbw420pv.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { Xre, E7 } from "./chunk-hhgrzgnb.js";
import { js, r5 } from "./chunk-96sx3c3k.js";
import { TGo, Tgn, jm, CGo, o_e, a7n } from "./chunk-m83s757k.js";
import { ppn, Pbt, BHe, V9n, n6s, r6s } from "./chunk-d5zj5299.js";
import { QTe } from "./chunk-frrn501g.js";
import { eU, fQe } from "./chunk-6h7ejyet.js";
import { pj, b_e, gz } from "./chunk-g49hnbqz.js";
import { WIe } from "./chunk-25j20xpc.js";
import { mr } from "./chunk-spwjh8kb.js";
import { LKe } from "./chunk-gq77tz5k.js";
import {
  hje,
  Rrn,
  aGn,
  LMs,
  gDs,
  oon,
  Szn,
  fne,
  UJ,
  rv,
  RL,
  AS,
  sb,
  Hge,
  Ple,
  AP,
  BJ,
  jF,
  QXe,
  o2n,
  s2n,
  kke,
  XIr,
  ZIr,
  TK,
  lgt,
  jNs
} from "./chunk-j0tbz6ra.js";
import { ig, MTe } from "./chunk-mpcygg5e.js";
import { _s } from "./chunk-hk4fpv24.js";
import { Da } from "./chunk-6b3j8amt.js";
import { qgt, NHr } from "./chunk-39xmt821.js";
import { uKe, $Gr, Fgn } from "./chunk-fh50nzzj.js";
import { Ryt } from "./chunk-t5b6h5a5.js";
import { tV, GP, nbt, Xde, Jde, EUo } from "./chunk-r5xsp8d0.js";
import { Qhe, m6n } from "./chunk-6eew75md.js";
import { CE } from "./chunk-b9vagsrs.js";
import { eTs } from "./chunk-dk9t7hr6.js";
import { uD } from "./chunk-sdv7wcwv.js";
import { s$n, i$n } from "./chunk-dx5awfq0.js";
import { PBe } from "./chunk-9d4hz6n9.js";
import { Gmo } from "./chunk-z7t7hcja.js";
import { $7n, Rzo, xzo } from "./chunk-r9tbg51t.js";
import { inn } from "./chunk-jmmfaswt.js";
import { CBe, R7t, DNn, HNn, LNn } from "./chunk-rbxjs1s5.js";
import { a8e, oEr, x7t, P7t } from "./chunk-1w30mhyz.js";
import { sEr } from "./chunk-7k6w7b54.js";
import { Vmo, NNn } from "./chunk-wjr82d4q.js";
import { UNn } from "./chunk-phm34nsk.js";
import { Nve } from "./chunk-wcf33wwb.js";
import { GIe, $v, xA, af, YW, _go, bgo, pme, Rae } from "./chunk-5jf37pks.js";
import { J7t } from "./chunk-2x8g8t4c.js";
import { P_e, lue } from "./chunk-mg0tfavz.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { Z5 } from "./chunk-ya7n419k.js";
import { _ui } from "./chunk-2bsye2b3.js";
import { z } from "./chunk-p197ae0z.js";
function po(n) {
  return mr("themes") && Boolean(uD(n)) ? `${n} (disabled in safe mode)` : n;
}
var eEr = (n) => ({
  id: "theme",
  label: "Theme",
  value: po(n.themeSetting),
  type: "managedEnum",
  options: a$e,
  optionsHint: "For custom themes, use /theme.",
  onChange: n.setTheme
});
function le(n, s) {
  return kke() ? s : n;
}
function tEr(n) {
  switch (n) {
    case "terminal_bell":
      return "bell";
    case "iterm2_with_bell":
      return "iterm2+bell";
    case "notifications_disabled":
      return "none";
    default:
      return n;
  }
}
var Ge = ["never", "60s", "5m", "10m"],
  $e = ["default", "60s", "5m", "10m", "never"],
  Be = ["default", ...bqt];
function nEr() {
  return {
    ...!1,
    askUserQuestionTimeout: rTt(),
    dialogExpiry: Mwn(),
    crossSessionInbound: Ve("crossSessionInbound")?.value,
    modelProposedGoals: oTt(),
    enableArtifact: uKe().enabled
  };
}
function Ve(n) {
  return $9(n).find((s) => Qt(s.source));
}
function ke(n) {
  let s = Ve(n)?.source;
  return s !== void 0 && s !== "userSettings";
}
function mo(n) {
  return (
    n === "model" ||
    n === "fast" ||
    n === "thinking" ||
    n === "useAutoModeDuringPlan" ||
    n === "autoCompact" ||
    n === "idleCompaction" ||
    n === "autoContinueAtUsageLimit" ||
    n === "precomputeCompactionEnabled" ||
    n === "checkpoints" ||
    n === "outputStyle" ||
    n === "defaultView"
  );
}
function k7t() {
  let n = ue(),
    s = pt();
  return {
    ...n,
    theme: s.theme ?? K(n, "theme"),
    editorMode: s.editorMode ?? K(n, "editorMode"),
    verbose: s.verbose ?? K(n, "verbose"),
    preferredNotifChannel: s.preferredNotifChannel ?? K(n, "preferredNotifChannel"),
    autoCompactEnabled: s.autoCompactEnabled ?? K(n, "autoCompactEnabled"),
    autoScrollEnabled: s.autoScrollEnabled ?? K(n, "autoScrollEnabled"),
    fileCheckpointingEnabled: s.fileCheckpointingEnabled ?? K(n, "fileCheckpointingEnabled"),
    showTurnDuration: s.showTurnDuration ?? K(n, "showTurnDuration"),
    showMessageTimestamps: s.showMessageTimestamps ?? K(n, "showMessageTimestamps"),
    terminalProgressBarEnabled: s.terminalProgressBarEnabled ?? K(n, "terminalProgressBarEnabled"),
    todoFeatureEnabled: s.todoFeatureEnabled ?? K(n, "todoFeatureEnabled"),
    teammateMode: s.teammateMode ?? K(n, "teammateMode"),
    remoteControlAtStartup: Znt(),
    autoUploadSessions: s.autoUploadSessions ?? LKt("autoUploadSessions", n.autoUploadSessions),
    inputNeededNotifEnabled: s.inputNeededNotifEnabled ?? K(n, "inputNeededNotifEnabled"),
    agentPushNotifEnabled: s.agentPushNotifEnabled ?? K(n, "agentPushNotifEnabled")
  };
}
function K(n, s) {
  return uRe(s, n[s]) ?? dI[s];
}
function So() {
  let n = k0e();
  return [
    "default",
    ...Z5.filter((s) => (n || !s.includes("fable")) && !_go(s) && !bgo(s) && Xr(s))
  ];
}
var bo = new Map([
  ["jp", "ja"],
  ["kr", "ko"],
  ["cn", "zh"],
  ["tw", "zh-Hant"]
]);
function ho(n) {
  let s = Zt(n).trim();
  if (!s || s.toLowerCase() === "default") return "default";
  if (s.length <= 3) {
    let r = s.toLowerCase(),
      u = bo.get(r) ?? r;
    try {
      let p = _ui().of(u);
      if (p && p !== u) return p;
    } catch {}
  }
  return s
    .split(/\s+/)
    .map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase())
    .join(" ");
}
var de = () => {},
  We = {
    setGlobalConfig: de,
    setSettingsData: de,
    setPlanAutoModeOffAtLaunch: de,
    changeLog: { record: de, clear: de, toggle: de }
  };
function Co(n) {
  return ((Da.orgMemoryWritesRowSeen ||= n), Da.orgMemoryWritesRowSeen);
}
function yo(n) {
  return ((Da.orgMemoryReadRowSeen ||= n), Da.orgMemoryReadRowSeen);
}
function wo(n) {
  return ((Da.remoteHomeSettingsRowSeen ||= n), Da.remoteHomeSettingsRowSeen);
}
function Vks() {
  return !1;
}
var Bmo = {
    unsupported:
      "Could not turn this on: forwarding settings to cloud sessions is not available in this version",
    flag_off:
      "Could not turn this on: forwarding settings to cloud sessions is not enabled for you right now"
  },
  jmo = "Could not save this to the config file, so nothing changed.";
function i8e(n) {
  let {
    globalConfig: s,
    settingsData: r,
    themeSetting: u,
    currentOutputStyle: p,
    currentLanguage: m,
    externalIncludesApproved: S,
    thinkingEnabled: y,
    verbose: C,
    mainLoopModel: O,
    currentModel: w,
    isFastMode: D,
    promptSuggestionEnabled: A,
    awaySummaryEnabled: Q,
    showDefaultViewPicker: ne,
    pushTogglesVisible: te,
    crossSessionInboxRowVisible: oe,
    isConnectedToIde: V,
    inAppSelection: ie,
    tabsStandIn: se,
    isFileCheckpointingAvailable: q,
    workflowsToggleable: J,
    workflowSizeGuidelineToggleable: Ze,
    autoContinueAtUsageLimitToggleable: eo,
    artifactToggleable: oo,
    remoteToolServingOn: no,
    launchDirectoryKeys: Uo,
    shouldShowExternalIncludesToggle: to,
    autoUpdaterDisabledReason: io,
    modelSwitchHooks: H,
    setAppState: Y,
    setTheme: so,
    setGlobalConfig: v,
    setSettingsData: T,
    setPlanAutoModeOffAtLaunch: ro,
    changeLog: N,
    storageV5: G,
    promptSuggestionRun: ao,
    mayBeAuthoredByNonOwner: lo
  } = n;
  function x(e) {
    return z() && G !== void 0 ? Un("userSettings", e, void 0, G) : Un("userSettings", e);
  }
  function me(e) {
    return z() && G !== void 0 ? Un("localSettings", e, void 0, G) : Un("localSettings", e);
  }
  function j(e, o) {
    if (z() && G !== void 0) r5(e, o, G);
    else r5(e, o);
  }
  function B(e) {
    if (z() && G !== void 0) Re(e, G);
    else Re(e);
  }
  async function Te(e, o) {
    a("tengu_config_model_changed", { from_model: wt(O), to_model: wt(e) });
    let h = Rae(e),
      E = e === null ? I$(fd(), "switch") : null;
    if (E !== null) return { error: new Rr(E, "default model blocked by managed settings") };
    let M = "";
    if (H) {
      let { session: Z, readState: we } = H;
      if (UJ(Z) || RL.of(Z).pending > 0) {
        let go = ++H.latestPick.current,
          ae = await AS(Z, () => xA(Z, we, e, "command"));
        if (go !== H.latestPick.current) return;
        if (ae.decision !== "proceed")
          return (
            f("model_switch", "blocked_by_hook"),
            {
              error: new Rr(
                YW(
                  e,
                  ae.decision === "ask"
                    ? `${ae.reason ?? "confirmation required"} (run /model to confirm)`
                    : ae.reason,
                  ae.messages
                ),
                "model switch blocked by a PreModelSwitch hook"
              )
            }
          );
        if (ae.messages.length > 0) M = ` \xB7 ${ae.messages.map(af).join(" \xB7 ")}`;
      }
      rv(Z, we(), e, "command");
    }
    if (o !== void 0) E7(o, pme(e), void 0, G);
    if ((ISe(), Yo())) OV();
    let P = !1,
      I = !1;
    (Y(
      (Z) => (
        (P = !!Z.fastMode),
        (I = Yo() ? ZO(e, Z.fastMode) : P),
        {
          ...Z,
          mainLoopModel: e,
          mainLoopModelForSession: null,
          ...(o !== void 0 && { sessionEffort: Xre(o) }),
          ...(I !== P && { fastMode: I })
        }
      )
    ),
      eM(P, I));
    let X = GIe(P, I, e);
    N.record(
      "model",
      h0(e) + X + M + (h ? " \xB7 this session only \u2014 /model to set up" : ""),
      { moveToEnd: !0 }
    );
    let ye = h ? void 0 : await x({ model: e ?? void 0 }),
      re = X + M;
    if (ye?.error) return { error: ye.error, ...(re && { messageSuffix: re }) };
    if (re) return { messageSuffix: re };
  }
  function Oe(e) {
    (j("verbose", e),
      v((o) => ({ ...o, verbose: e })),
      Y((o) => ({ ...o, verbose: e })),
      N.toggle("verbose", e));
  }
  function he(e) {
    (j("preferredNotifChannel", e), v((o) => ({ ...o, preferredNotifChannel: e })));
  }
  function Ae(e) {
    (j("inputNeededNotifEnabled", e),
      v((o) => ({ ...o, inputNeededNotifEnabled: e })),
      Gmo(),
      a("tengu_push_notif_pref_changed", { key: b("inputNeededNotifEnabled"), value: e }));
  }
  function Pe(e) {
    (j("agentPushNotifEnabled", e),
      v((o) => ({ ...o, agentPushNotifEnabled: e })),
      Gmo(),
      a("tengu_push_notif_pref_changed", { key: b("agentPushNotifEnabled"), value: e }));
  }
  let Fe = NHr(s.workflowSizeGuideline, o_e());
  function xe(e) {
    if (e !== "false") {
      let l = nbt();
      if (l !== null) return { error: new R(l, "Remote Control setting locked by org policy") };
    }
    if (e === "default")
      (j("remoteControlAtStartup", void 0),
        B((l) => {
          if (l.remoteControlAtStartup === void 0) return l;
          let h = { ...l };
          return (delete h.remoteControlAtStartup, h);
        }),
        v((l) => ({ ...l, remoteControlAtStartup: void 0 })));
    else {
      let l = e === "true";
      (j("remoteControlAtStartup", l), v((h) => ({ ...h, remoteControlAtStartup: l })));
    }
    let o = Jde();
    Y((l) => EUo(l, o));
    return;
  }
  function uo() {
    let e = nbt();
    if (e !== null)
      return {
        id: "remoteControl",
        label: "Enable Remote Control for all sessions",
        value: "disabled",
        lock: { reason: e, source: tV() ? "managed" : "policy", writableWhileLocked: ["false"] },
        options: ["true", "false", "default"],
        type: "managedEnum",
        onChange(o) {
          if (o !== "false")
            return { error: new R(e, "Remote Control setting locked by org policy") };
          return xe(o);
        }
      };
    return {
      id: "remoteControl",
      label: "Enable Remote Control for all sessions",
      value: s.remoteControlAtStartup === void 0 ? "default" : String(s.remoteControlAtStartup),
      options: ["true", "false", "default"],
      type: "enum",
      onChange: xe
    };
  }
  let Le = pme(w),
    Se = A_n(Le),
    Ce = [
      ...(CE()
        ? [
            {
              id: "defaultToAgentsView",
              label: "Open agents view by default",
              value: s.defaultToAgentsView ?? !1,
              type: "boolean",
              onChange(e) {
                (B((o) => ({ ...o, defaultToAgentsView: e })),
                  v((o) => ({ ...o, defaultToAgentsView: e })));
              }
            }
          ]
        : []),
      ...(PBe()
        ? [
            {
              id: "leftArrowOpensAgents",
              label: `${Xz} opens agents`,
              value: s.leftArrowOpensAgents ?? !0,
              type: "boolean",
              onChange(e) {
                (B((o) => ({ ...o, leftArrowOpensAgents: e })),
                  v((o) => ({ ...o, leftArrowOpensAgents: e })));
              }
            }
          ]
        : [])
    ],
    fo = se ? Ce.filter((e) => e.id !== "leftArrowOpensAgents") : Ce,
    De = {
      id: "notifChannel",
      label: "Local notifications",
      value: s.preferredNotifChannel,
      options: [...CZ],
      type: "enum",
      onChange: he
    },
    Ne = te
      ? [
          ...(m6n()
            ? [
                {
                  id: "inputNeededNotifEnabled",
                  label: "Push when actions required",
                  value: s.inputNeededNotifEnabled ?? !1,
                  type: "boolean",
                  onChange: Ae
                }
              ]
            : []),
          {
            id: "agentPushNotifEnabled",
            label: "Push when Claude decides",
            value: s.agentPushNotifEnabled ?? !1,
            type: "boolean",
            onChange: Pe
          }
        ]
      : [],
    Ue = js("idleCompaction", !0).source,
    co = Ue === "userSettings" || (Ue === "default" && Qt("userSettings")),
    He = [
      {
        id: "autoCompact",
        label: "Auto-compact",
        value: s.autoCompactEnabled,
        type: "boolean",
        onChange(e) {
          (j("autoCompactEnabled", e),
            v((o) => ({ ...o, autoCompactEnabled: e })),
            a("tengu_auto_compact_setting_changed", { enabled: e }));
        }
      },
      ...(gDs() && co
        ? [
            {
              id: "idleCompaction",
              label: "Idle compaction",
              value: r?.idleCompaction ?? !0,
              type: "boolean",
              async onChange(e) {
                T((l) => ({ ...l, idleCompaction: e }));
                let o = await x({ idleCompaction: e });
                if (o?.error) {
                  let l = Ryt();
                  return (T((h) => ({ ...h, idleCompaction: l })), { error: o.error });
                }
                (a("tengu_idle_compaction_setting_changed", { enabled: e }),
                  N.toggle("idleCompaction", e));
              }
            }
          ]
        : []),
      ...(eo
        ? [
            {
              id: "autoContinueAtUsageLimit",
              label: "Continue automatically at usage limit",
              value: r?.autoContinueAtUsageLimit ?? !0,
              type: "boolean",
              consentGated: !0,
              async onChange(e) {
                T((l) => ({ ...l, autoContinueAtUsageLimit: e }));
                let o = await x({ autoContinueAtUsageLimit: e });
                if (o?.error) {
                  let l = s$n();
                  return (T((h) => ({ ...h, autoContinueAtUsageLimit: l })), { error: o.error });
                }
                a("tengu_quota_auto_resume_setting_changed", { enabled: e });
              }
            }
          ]
        : []),
      ...(wo(gz(pj()) || s.remoteHomeSettingsMode === "forward")
        ? [
            {
              id: "remoteHomeSettings",
              label: "Use this machine's settings in cloud sessions",
              value: s.remoteHomeSettingsMode === "forward" && oon() && (pj() || !QTe()),
              isDefaultValue: !zir.some((e) => e === s.remoteHomeSettingsMode),
              consentGated: !0,
              canWithdraw: () => QTe() && s.remoteHomeSettingsMode !== "keep_local",
              grantBlocker: b_e(!0) ?? void 0,
              type: "boolean",
              onChange(e) {
                if (e)
                  return {
                    error: new Rr(
                      "Turn this on from the /config panel, which shows what will be sent"
                    )
                  };
                let o = "keep_local",
                  l = s.remoteHomeSettingsMode;
                return (
                  v((h) => ({ ...h, remoteHomeSettingsMode: o })),
                  Szn(o, z() ? G : void 0).then((h) => {
                    switch (h) {
                      case "written":
                        return;
                      case "unconfirmed":
                        return {
                          messageSuffix:
                            " (could not confirm it was written to the config file; check /config after restarting Claude Code)"
                        };
                      case "not_stored":
                        return (
                          v((E) => ({ ...E, remoteHomeSettingsMode: ue().remoteHomeSettingsMode })),
                          { error: new Rr(jmo) }
                        );
                      case "refused":
                        return (
                          v((E) => ({ ...E, remoteHomeSettingsMode: l })),
                          {
                            error: new Rr(
                              "Cloud settings forwarding is not available right now; nothing was changed"
                            )
                          }
                        );
                    }
                  })
                );
              }
            }
          ]
        : []),
      ...[],
      ...(DNn(no)
        ? [
            {
              id: "unattendedServing",
              label: "Unattended commands from cloud sessions on this computer",
              value: CBe[iJ()],
              options: [CBe.declined, CBe.accepted],
              type: "enum",
              pickToCommit: !0,
              consentGated: !0,
              canWithdraw: HNn,
              ...(u4() && {
                lock: { reason: R7t(), source: "managed", writableWhileLocked: [CBe.declined] }
              }),
              onChange(e) {
                return LNn(e === CBe.accepted ? "accepted" : "declined").then((o) => {
                  if (o === "forbidden") return { error: new Rr(R7t()) };
                  if ((v((l) => ({ ...l })), o === "not_saved"))
                    return { error: new Rr("The answer could not be saved; nothing was changed") };
                  return;
                });
              }
            }
          ]
        : []),
      ...(p9n()
        ? [
            {
              id: "switchModelsOnFlag",
              label: s5s,
              value: ko(r?.switchModelsOnFlag),
              options: [Tre.switchAutomatically, Tre.askEachTime],
              type: "enum",
              pickToCommit: !0,
              coerce(e) {
                let o = e.trim().toLowerCase();
                if (
                  ["true", "1", "on", "yes"].includes(o) ||
                  o === Tre.switchAutomatically.toLowerCase()
                )
                  return Tre.switchAutomatically;
                if (["false", "0", "off", "no"].includes(o) || o === Tre.askEachTime.toLowerCase())
                  return Tre.askEachTime;
                return;
              },
              onChange(e) {
                let o = e === Tre.switchAutomatically;
                return (
                  T((l) => ({ ...l, switchModelsOnFlag: o })),
                  f9n(o, "config", z() ? G : void 0).then(({ error: l }) =>
                    l ? { error: l } : void 0
                  )
                );
              }
            }
          ]
        : []),
      ...[],
      {
        id: "tips",
        label: "Show tips",
        value: r?.spinnerTipsEnabled ?? !0,
        type: "boolean",
        onChange(e) {
          (me({ spinnerTipsEnabled: e }),
            T((o) => ({ ...o, spinnerTipsEnabled: e })),
            a("tengu_tips_setting_changed", { enabled: e }));
        }
      },
      ...(Vmo()
        ? [
            {
              id: "feedbackDrafts",
              label: "Claude-drafted feedback",
              value: r?.feedbackDrafts ?? "notify",
              options: ["notify", "quiet", "off"],
              type: "enum",
              onChange(e) {
                let o = e;
                (NNn(o, { storageV5: G, via: "config" }), T((l) => ({ ...l, feedbackDrafts: o })));
              }
            }
          ]
        : []),
      {
        id: "reduceMotion",
        label: "Reduce motion",
        value: r?.prefersReducedMotion ?? !1,
        type: "boolean",
        onChange(e) {
          (me({ prefersReducedMotion: e }),
            T((o) => ({ ...o, prefersReducedMotion: e })),
            Y((o) => ({ ...o, settings: { ...o.settings, prefersReducedMotion: e } })),
            a("tengu_reduce_motion_setting_changed", { enabled: e }));
        }
      },
      {
        id: "thinking",
        label: "Thinking mode",
        value: mnt(Le, y),
        type: "boolean",
        ...(Se !== void 0 && {
          lock: {
            reason: Se,
            source: "managed",
            reasonShipsOffBox: !0,
            writableWhileLocked: ["true", "1", "on", "yes"]
          }
        }),
        onChange(e) {
          if (!e && Se !== void 0)
            return { error: new Rr(Se, "Thinking can't be turned off for this model") };
          (Y((o) => ({ ...o, thinkingEnabled: e })),
            x({ alwaysThinkingEnabled: e ? void 0 : !1 }),
            a("tengu_thinking_toggled", { enabled: e }),
            g("thinking_toggle"));
        }
      },
      ...(Yo() && oI()
        ? [
            {
              id: "fast",
              label: `Fast mode (${IV()})`,
              value: !!D,
              type: "boolean",
              async onChange(e) {
                let o = (l, h, E) => {
                  if (h) {
                    let P = !1;
                    if (
                      (Y((I) => {
                        let X = Nve(I);
                        return ((P = X !== void 0 && X !== l), I);
                      }),
                      P)
                    )
                      return {
                        error: new Rr(
                          "Fast mode was not enabled: the model changed while PreModelSwitch hooks ran; try again",
                          "fast mode promotion stale after hooks"
                        )
                      };
                  }
                  (OV(), x({ fastMode: !0 }));
                  let M;
                  if (
                    (Y((P) => {
                      let I = Nve(P),
                        X = I !== void 0 && (!h || I === l);
                      if (X && H) rv(H.session, P, I, "command");
                      return (
                        (M = X ? I : void 0),
                        {
                          ...P,
                          ...(X && { mainLoopModel: I, mainLoopModelForSession: null }),
                          fastMode: !0
                        }
                      );
                    }),
                    M !== void 0)
                  )
                    N.record("model", M ?? D_e());
                  return (N.record("Fast mode", "ON"), E ? { messageSuffix: E } : void 0);
                };
                if (e && H && (UJ(H.session) || RL.of(H.session).pending > 0)) {
                  let { session: l, readState: h } = H,
                    E = ++H.latestFastPick.current;
                  return AS(l, async () => {
                    let M = Nve(h());
                    if (M === void 0 || !UJ(l)) {
                      if (E !== H.latestFastPick.current) return;
                      return o(void 0, !1, "");
                    }
                    let P = await xA(l, h, M, "command");
                    if (E !== H.latestFastPick.current) return;
                    if (P.decision !== "proceed")
                      return (
                        f("model_switch", "blocked_by_hook"),
                        {
                          error: new Rr(
                            YW(
                              M,
                              P.decision === "ask"
                                ? `${P.reason ?? "confirmation required"} (run /model to switch, then enable fast mode)`
                                : P.reason,
                              P.messages
                            ),
                            "model switch blocked by a PreModelSwitch hook"
                          )
                        }
                      );
                    return o(
                      M,
                      !0,
                      P.messages.length > 0 ? ` \xB7 ${P.messages.map(af).join(" \xB7 ")}` : ""
                    );
                  });
                }
                if (e) return o(void 0, !1, "");
                else {
                  let l = () => {
                    (OV(),
                      x({ fastMode: void 0 }),
                      Y((h) => ({ ...h, fastMode: !1 })),
                      N.record("Fast mode", "OFF"));
                  };
                  if (H && RL.of(H.session).pending > 0) await AS(H.session, async () => l());
                  else l();
                }
              }
            }
          ]
        : []),
      ...(k("tengu_chomp_inflection", !1)
        ? [
            {
              id: "promptSuggestionEnabled",
              label: "Prompt suggestions",
              value: A,
              type: "boolean",
              onChange(e) {
                if (
                  (Y((o) => ({ ...o, promptSuggestionEnabled: e })),
                  x({ promptSuggestionEnabled: e ? void 0 : !1 }),
                  e && !A)
                )
                  eTs(z() ? G : void 0, ao);
              }
            }
          ]
        : []),
      {
        id: "recap",
        label: "Session recap",
        value: Q,
        type: "boolean",
        onChange(e) {
          (Y((o) => ({ ...o, awaySummaryEnabled: e })),
            x({ awaySummaryEnabled: e ? void 0 : !1 }),
            T((o) => ({ ...o, awaySummaryEnabled: e ? void 0 : !1 })));
        }
      },
      ...(q
        ? [
            {
              id: "checkpoints",
              label: "Rewind code (checkpoints)",
              value: s.fileCheckpointingEnabled,
              type: "boolean",
              onChange(e) {
                (j("fileCheckpointingEnabled", e),
                  v((o) => ({ ...o, fileCheckpointingEnabled: e })),
                  a("tengu_file_history_snapshots_setting_changed", { enabled: e }));
              }
            }
          ]
        : []),
      ...(yo(n6s())
        ? [
            {
              id: "orgMemoryRead",
              label: "Synced project memory (this directory; applies next session)",
              value: La().orgMemoryRead ?? !0,
              type: "boolean",
              onChange(e) {
                (r6s(e, G), v((o) => ({ ...o })));
              }
            }
          ]
        : []),
      ...(Co(!ppn() && (Pbt() || La().orgMemoryWrites === !0))
        ? [
            {
              id: "orgMemoryWrites",
              label:
                La().orgMemoryRead === !1
                  ? "Synced project memory writes (enable reads first)"
                  : "Synced project memory writes (this directory; applies next session)",
              value: BHe(),
              canWithdraw: () => La().orgMemoryWrites === !0,
              type: "boolean",
              consentGated: !0,
              onChange(e) {
                let o = e && !BHe() && La().orgMemoryWrites === !0;
                (V9n(o ? !1 : e, G), v((l) => ({ ...l })));
              }
            }
          ]
        : []),
      ...(J
        ? [
            {
              id: "workflows",
              label: "Dynamic workflows",
              value: r?.disableWorkflows === !0 ? !1 : (r?.enableWorkflows ?? CGo()),
              type: "boolean",
              onChange(e) {
                let o = e === CGo() ? void 0 : e;
                (x({ enableWorkflows: o, disableWorkflows: void 0 }),
                  T((l) => ({ ...l, enableWorkflows: o, disableWorkflows: void 0 })),
                  N.record("workflows", e ? "on" : "off"));
              }
            },
            {
              id: "workflowKeywordTriggerEnabled",
              label: "Ultracode keyword trigger",
              value: r?.workflowKeywordTriggerEnabled ?? !0,
              type: "boolean",
              onChange(e) {
                let o = e ? void 0 : !1;
                (x({ workflowKeywordTriggerEnabled: o }),
                  T((l) => ({ ...l, workflowKeywordTriggerEnabled: o })),
                  N.record("ultracodeKeywordTrigger", e ? "on" : "off"));
              }
            }
          ]
        : []),
      ...(Ze && (J || jm())
        ? [
            {
              id: "workflowSizeGuideline",
              label: "Dynamic workflow size",
              value: Fe.size,
              isDefaultValue: Fe.isDefault,
              options: [...TGo],
              type: "enum",
              onChange(e) {
                let o = Tgn(e) ?? "unrestricted";
                (B((l) => {
                  if (l.workflowSizeGuideline === o) return l;
                  return { ...l, workflowSizeGuideline: o };
                }),
                  v((l) => ({ ...l, workflowSizeGuideline: o })),
                  N.record("workflowSizeGuideline", o));
              }
            }
          ]
        : []),
      ...(oo
        ? [
            {
              id: "artifacts",
              label: "Artifacts",
              value: r?.enableArtifact ?? $Gr(),
              type: "boolean",
              async onChange(e) {
                let o = e === $Gr() ? void 0 : e;
                T((h) => ({ ...h, enableArtifact: e }));
                let l = await x({ enableArtifact: o, disableArtifact: void 0 });
                if (l?.error)
                  return (T((h) => ({ ...h, enableArtifact: uKe().enabled })), { error: l.error });
                N.record("artifacts", e ? "on" : "off");
              }
            }
          ]
        : []),
      {
        id: "verbose",
        label: le("Verbose output", "Verbose"),
        value: C,
        type: "boolean",
        onChange: Oe
      },
      {
        id: "progressBar",
        label: "Terminal progress bar",
        value: s.terminalProgressBarEnabled,
        type: "boolean",
        onChange(e) {
          (j("terminalProgressBarEnabled", e),
            v((o) => ({ ...o, terminalProgressBarEnabled: e })),
            a("tengu_terminal_progress_bar_setting_changed", { enabled: e }));
        }
      },
      ...(k("tengu_terminal_sidebar", !1)
        ? [
            {
              id: "showStatusInTerminalTab",
              label: "Show status in terminal tab",
              value: s.showStatusInTerminalTab ?? !1,
              type: "boolean",
              onChange(e) {
                (B((o) => ({ ...o, showStatusInTerminalTab: e })),
                  v((o) => ({ ...o, showStatusInTerminalTab: e })),
                  a("tengu_terminal_tab_status_setting_changed", { enabled: e }));
              }
            }
          ]
        : []),
      {
        id: "turnDuration",
        label: "Show turn duration",
        value: s.showTurnDuration,
        type: "boolean",
        onChange(e) {
          (j("showTurnDuration", e),
            v((o) => ({ ...o, showTurnDuration: e })),
            a("tengu_show_turn_duration_setting_changed", { enabled: e }));
        }
      },
      ...(k("tengu_sepia_moth", !1)
        ? [
            {
              id: "precomputeCompactionEnabled",
              label: "Precompute compaction",
              value: r?.precomputeCompactionEnabled ?? !0,
              type: "boolean",
              onChange(e) {
                (x({ precomputeCompactionEnabled: e }),
                  T((o) => ({ ...o, precomputeCompactionEnabled: e })),
                  a("tengu_precompute_compaction_setting_changed", { enabled: e }));
              }
            }
          ]
        : []),
      ...(k("tengu_silk_hinge", !1)
        ? [
            {
              id: "timestamps",
              label: "Show message timestamps",
              value: s.showMessageTimestamps,
              type: "boolean",
              onChange(e) {
                (j("showMessageTimestamps", e),
                  v((o) => ({ ...o, showMessageTimestamps: e })),
                  Y((o) => ({ ...o, showMessageTimestamps: e })),
                  a("tengu_show_message_timestamps_setting_changed", { enabled: e }));
              }
            }
          ]
        : []),
      {
        id: "timeFormat",
        label: "Time format",
        value: sEr(r?.timeFormat ?? "auto"),
        options: [...Rot],
        type: "enum",
        pickToCommit: !0,
        onChange(e) {
          let o = Rot.find((l) => l === e);
          if (!o) return;
          (x({ timeFormat: o }),
            T((l) => ({ ...l, timeFormat: o })),
            N.record("timeFormat", o),
            a("tengu_time_format_setting_changed", { value: c(o) }));
        }
      },
      {
        id: "permissionMode",
        label: "Default permission mode",
        value: r?.permissions?.defaultMode || "default",
        options: (() => {
          let e = ["default", "plan"],
            o = oT,
            l = ["bypassPermissions"];
          return [...e, ...o.filter((h) => !e.includes(h) && !l.includes(h))];
        })(),
        type: "enum",
        async onChange(e) {
          let o = Xx(e),
            l = ffe(o) ? ql(o) : o,
            h = r?.permissions?.defaultMode;
          (T((M) => ({ ...M, permissions: { ...M?.permissions, defaultMode: l } })),
            N.record("permissionMode", e));
          let E = await x({ permissions: { defaultMode: l } });
          if (E.error)
            return (
              T((M) => ({ ...M, permissions: { ...M?.permissions, defaultMode: h } })),
              N.clear("permissionMode"),
              t(`Failed to update default permission mode setting: ${E.error.message}`, {
                level: "error"
              }),
              { error: E.error }
            );
        }
      },
      {
        id: "worktreeBaseRef",
        label: "Worktree base ref",
        value: r?.worktree?.baseRef ?? "fresh",
        options: ["fresh", "head"],
        type: "enum",
        async onChange(e) {
          let o = e,
            l = r?.worktree?.baseRef;
          (T((E) => ({ ...E, worktree: { ...E?.worktree, baseRef: o } })),
            N.record("worktreeBaseRef", o));
          let h = await x({ worktree: { baseRef: o } });
          if (h.error)
            return (
              T((E) => ({ ...E, worktree: { ...E?.worktree, baseRef: l } })),
              N.clear("worktreeBaseRef"),
              t(`Failed to update worktree.baseRef in user settings: ${h.error.message}`, {
                level: "error"
              }),
              { error: h.error }
            );
        }
      },
      {
        id: "useAutoModeDuringPlan",
        label: "Use auto mode during plan",
        value: r?.useAutoModeDuringPlan ?? !0,
        type: "boolean",
        async onChange(e) {
          (T((l) => ({ ...l, useAutoModeDuringPlan: e })),
            N.record("Use auto mode during plan", e));
          let { error: o } = await x({ useAutoModeDuringPlan: e });
          if (o) return { error: o };
          (ro(!e),
            Y((l) => {
              let h = WIe(l.toolPermissionContext);
              if (h === l.toolPermissionContext) return l;
              return { ...l, toolPermissionContext: h };
            }));
        }
      },
      {
        id: "gitignore",
        label: "Respect .gitignore in file picker",
        value: s.respectGitignore ?? dI.respectGitignore,
        type: "boolean",
        onChange(e) {
          (B((o) => ({ ...o, respectGitignore: e })),
            v((o) => ({ ...o, respectGitignore: e })),
            a("tengu_respect_gitignore_setting_changed", { enabled: e }));
        }
      },
      {
        id: "copyFullResponse",
        label: "Skip the /copy picker",
        value: s.copyFullResponse ?? dI.copyFullResponse,
        type: "boolean",
        onChange(e) {
          (B((o) => ({ ...o, copyFullResponse: e })), v((o) => ({ ...o, copyFullResponse: e })));
        }
      },
      ...(ie
        ? [
            {
              id: "copyOnSelect",
              label: "Copy on select",
              value: s.copyOnSelect ?? !0,
              type: "boolean",
              onChange(e) {
                (B((o) => ({ ...o, copyOnSelect: e })), v((o) => ({ ...o, copyOnSelect: e })));
              }
            },
            {
              id: "autoScroll",
              label: le("Auto-scroll", "Auto-scroll output"),
              value: s.autoScrollEnabled,
              type: "boolean",
              onChange(e) {
                (j("autoScrollEnabled", e), v((o) => ({ ...o, autoScrollEnabled: e })));
              }
            }
          ]
        : []),
      ...(kke() && !se
        ? CE() || PBe()
          ? [
              {
                id: "agentsView",
                label: "Agents view",
                value:
                  (PBe() && (s.leftArrowOpensAgents ?? !0)) ||
                  (CE() && (s.defaultToAgentsView ?? !1))
                    ? "on"
                    : "off",
                type: "managedEnum",
                onChange() {}
              }
            ]
          : []
        : fo),
      ...[],
      io
        ? {
            id: "autoUpdatesChannel",
            label: "Auto-update channel",
            value: "disabled",
            type: "managedEnum",
            onChange() {}
          }
        : {
            id: "autoUpdatesChannel",
            label: "Auto-update channel",
            value: _o(r?.autoUpdatesChannel),
            type: "managedEnum",
            onChange() {}
          },
      eEr({ themeSetting: u, setTheme: so }),
      ...(kke()
        ? [
            {
              id: "notifChannel",
              label: "Notifications",
              value: tEr(s.preferredNotifChannel),
              type: "managedEnum",
              options: [...CZ],
              onChange: he
            }
          ]
        : [De, ...Ne]),
      {
        id: "outputStyle",
        label: "Output style",
        value: mr("outputStyles") && !Object.hasOwn(BJ, p) ? `${p} (disabled in safe mode)` : p,
        type: "managedEnum",
        options: Object.keys(BJ),
        optionsHint: "For custom styles, open /config.",
        async onChange(e) {
          if (lo) {
            let l = await jF(fe(), G);
            if (!QXe(l[e])) return { error: new Rr(o2n) };
          }
          if (e === p) return { messageSuffix: " (already the current style)" };
          if (!Qt("localSettings")) return { error: new Rr(s2n) };
          T((l) => ({ ...l, outputStyle: e }));
          let o = await me({ outputStyle: e });
          if (o?.error) return { error: o.error };
          jM("output_style");
        }
      },
      ...(ne
        ? [
            {
              id: "defaultView",
              label: "Default view",
              value: r?.defaultView === void 0 ? "default" : String(r.defaultView),
              options: ["transcript", "chat", "default"],
              type: "enum",
              onChange(e) {
                let o = e === "default" ? void 0 : e;
                (me({ defaultView: o }), T((h) => ({ ...h, defaultView: o })));
                let l = o === "chat";
                (mFe(l),
                  Y((h) => {
                    if (h.isBriefOnly === l) return h;
                    return { ...h, isBriefOnly: l };
                  }),
                  N.record("Default view", e),
                  a("tengu_default_view_setting_changed", { value: c(o ?? "unset") }));
              }
            }
          ]
        : []),
      {
        id: "language",
        label: "Language",
        value: m ?? "Default (English)",
        type: "managedEnum",
        coerce: ho,
        optionsHint: "Any language name or ISO code (e.g. 'ja'); use 'default' for English.",
        async onChange(e) {
          let o = e.toLowerCase() === "default" ? void 0 : e;
          T((h) => ({ ...h, language: o }));
          let l = await x({ language: o });
          if (l?.error) return { error: l.error };
        }
      },
      {
        id: "editor",
        label: "Editor mode",
        value: s.editorMode === "emacs" ? "normal" : s.editorMode || "normal",
        options: ["normal", "vim"],
        type: "enum",
        onChange(e) {
          let o = e;
          (j("editorMode", o),
            v((l) => ({ ...l, editorMode: o })),
            a("tengu_editor_mode_changed", { mode: c(o), source: b("config_panel") }));
        }
      },
      ...(ke("askUserQuestionTimeout")
        ? []
        : [
            {
              id: "askUserQuestionTimeout",
              label: "Question auto-continue timeout",
              consentGated: !0,
              value: r?.askUserQuestionTimeout ?? rTt() ?? "never",
              options: [...Ge],
              type: "enum",
              async onChange(e) {
                let o = Ge.find((E) => E === e);
                if (!o) return;
                let l = r.askUserQuestionTimeout;
                T((E) => ({ ...E, askUserQuestionTimeout: o }));
                let h = await x({ askUserQuestionTimeout: o });
                if (h?.error)
                  return (T((E) => ({ ...E, askUserQuestionTimeout: l })), { error: h.error });
                a("tengu_ask_user_question_timeout_changed", {
                  value: c(o),
                  source: b("config_panel")
                });
              }
            }
          ]),
      ...(UNn()
        ? [
            {
              id: "modelProposedGoals",
              label: "Claude-proposed goals",
              value: r?.modelProposedGoals ?? oTt(),
              options: [...Tvn],
              type: "enum",
              consentGated: !0,
              async onChange(e) {
                let o = Tvn.find((h) => h === e);
                if (!o) return;
                T((h) => ({ ...h, modelProposedGoals: o }));
                let l = await x({ modelProposedGoals: o });
                if (l?.error) return { error: l.error };
                a("tengu_model_proposed_goals_changed", { value: c(o), source: b("config_panel") });
              }
            }
          ]
        : []),
      {
        id: "externalEditorContext",
        label: le("Show last response in external editor", "Show responses in IDE"),
        value: s.externalEditorContext ?? !1,
        type: "boolean",
        onChange(e) {
          (B((o) => ({ ...o, externalEditorContext: e })),
            v((o) => ({ ...o, externalEditorContext: e })),
            a("tengu_external_editor_context_changed", { enabled: e }));
        }
      },
      {
        id: "prStatus",
        label: le("Show PR status footer", "Show PR status"),
        value: s.prStatusFooterEnabled ?? !0,
        type: "boolean",
        onChange(e) {
          (B((o) => {
            if (o.prStatusFooterEnabled === e) return o;
            return { ...o, prStatusFooterEnabled: e };
          }),
            v((o) => ({ ...o, prStatusFooterEnabled: e })),
            a("tengu_pr_status_footer_setting_changed", { enabled: e }));
        }
      },
      {
        id: "model",
        label: "Model",
        value: w === null ? "Default (recommended)" : IR(w),
        type: "managedEnum",
        options: So(),
        optionsHint: "For a specific model ID, use /model.",
        onChange(e) {
          let o = e === "default" ? null : e;
          if (Rae(o))
            return (
              f("model_fable_consent", "config_shorthand_blocked"),
              { error: new Rr("needs usage-credits consent \u2014 run /model first") }
            );
          return Te(o);
        }
      },
      ...(V
        ? [
            {
              id: "diffTool",
              label: "Diff tool",
              value: s.diffTool ?? "auto",
              options: ["terminal", "auto"],
              type: "enum",
              onChange(e) {
                let o = e;
                (B((l) => ({ ...l, diffTool: o })),
                  v((l) => ({ ...l, diffTool: o })),
                  a("tengu_diff_tool_changed", { tool: c(o), source: b("config_panel") }));
              }
            }
          ]
        : []),
      ...(!TK()
        ? [
            {
              id: "autoConnectIde",
              label: "Auto-connect to IDE (external terminal)",
              value: s.autoConnectIde ?? !1,
              type: "boolean",
              onChange(e) {
                (B((o) => ({ ...o, autoConnectIde: e })),
                  v((o) => ({ ...o, autoConnectIde: e })),
                  a("tengu_auto_connect_ide_changed", { enabled: e, source: b("config_panel") }));
              }
            }
          ]
        : []),
      ...(TK()
        ? [
            {
              id: "autoInstallIdeExtension",
              label: "Auto-install IDE extension",
              value: s.autoInstallIdeExtension ?? !0,
              type: "boolean",
              onChange(e) {
                (B((o) => ({ ...o, autoInstallIdeExtension: e })),
                  v((o) => ({ ...o, autoInstallIdeExtension: e })),
                  a("tengu_auto_install_ide_extension_changed", {
                    enabled: e,
                    source: b("config_panel")
                  }));
              }
            }
          ]
        : []),
      {
        id: "chrome",
        label: le("Claude in Chrome enabled by default", "Claude in Chrome"),
        ...(k("tengu_joyful_parasol", !0) !== !1 && { consentGated: !0 }),
        value: s.claudeInChromeDefaultEnabled ?? !1,
        type: "boolean",
        onChange(e) {
          (B((o) => ({ ...o, claudeInChromeDefaultEnabled: e })),
            v((o) => ({ ...o, claudeInChromeDefaultEnabled: e })),
            a("tengu_claude_in_chrome_setting_changed", { enabled: e }));
        }
      },
      ...(_s()
        ? (() => {
            let e = Rzo();
            return [
              {
                id: "teammateMode",
                label: e ? `Teammate mode [overridden: ${e}]` : "Teammate mode",
                value: s.teammateMode ?? $7n,
                options: ["auto", "tmux", "iterm2", "in-process"],
                type: "enum",
                onChange(l) {
                  if (l !== "auto" && l !== "tmux" && l !== "iterm2" && l !== "in-process") return;
                  (xzo(l),
                    inn(),
                    j("teammateMode", l),
                    v((h) => ({ ...h, teammateMode: l })),
                    a("tengu_teammate_mode_changed", { mode: c(l) }));
                }
              }
            ];
          })()
        : []),
      ...(GP() || tV() ? [uo()] : []),
      ...(ke("dialogExpiry")
        ? []
        : [
            {
              id: "dialogExpiry",
              label: "Dialog expiry",
              consentGated: !0,
              value: r.dialogExpiry ?? "default",
              options: [...$e],
              type: "enum",
              async onChange(e) {
                let o = $e.find((M) => M === e);
                if (!o) return;
                let l = o === "default" ? void 0 : o,
                  h = r.dialogExpiry;
                T((M) => ({ ...M, dialogExpiry: l }));
                let E = await x({ dialogExpiry: l });
                if (E?.error) return (T((M) => ({ ...M, dialogExpiry: h })), { error: E.error });
                a("tengu_dialog_expiry_changed", { value: c(o), source: b("config_panel") });
              }
            }
          ]),
      ...(oe && !ke("crossSessionInbound")
        ? [
            {
              id: "crossSessionInbound",
              label: "Messages from your other sessions",
              consentGated: !0,
              pickToCommit: !0,
              value: r.crossSessionInbound ?? "default",
              options: [...Be],
              type: "enum",
              async onChange(e) {
                let o = Be.find((M) => M === e);
                if (!o) return;
                let l = o === "default" ? void 0 : o,
                  h = r.crossSessionInbound;
                T((M) => ({ ...M, crossSessionInbound: l }));
                let E = await x({ crossSessionInbound: l });
                if (E?.error)
                  return (T((M) => ({ ...M, crossSessionInbound: h })), { error: E.error });
                a("tengu_cross_session_inbound_changed", {
                  value: c(o),
                  source: b("config_panel")
                });
              }
            }
          ]
        : []),
      ...[],
      ...(GP(), []),
      ...[],
      ...(to
        ? [
            {
              id: "showExternalIncludesDialog",
              label: le("External CLAUDE.md includes", "External CLAUDE.md files"),
              value: S ? "true" : "false",
              type: "managedEnum",
              onChange() {}
            }
          ]
        : []),
      ...(i.ANTHROPIC_API_KEY && !Pv()
        ? [
            {
              id: "apiKey",
              consentGated: !0,
              label: "Use custom API key: ",
              labelBoldSuffix: pue(i.ANTHROPIC_API_KEY),
              searchText: "Use custom API key",
              value: Boolean(
                i.ANTHROPIC_API_KEY && L$(s).approved.includes(pue(i.ANTHROPIC_API_KEY))
              ),
              type: "boolean",
              onChange(e) {
                (B((o) => {
                  if (!i.ANTHROPIC_API_KEY) return o;
                  let { approved: l, rejected: h } = L$(o),
                    E = pue(i.ANTHROPIC_API_KEY),
                    M = l.filter((I) => I !== E),
                    P = h.filter((I) => I !== E);
                  return {
                    ...o,
                    customApiKeyResponses: e
                      ? { approved: [...M, E], rejected: P }
                      : { approved: M, rejected: [...P, E] }
                  };
                }),
                  vj(),
                  v(k7t()));
              }
            }
          ]
        : [])
    ];
  return {
    settings: Pt() ? He.filter((e) => !mo(e.id)) : He,
    dialogFieldRows: [...Ce, De, ...Ne],
    helpers: {
      onChangeMainModelConfig: Te,
      onChangeVerbose: Oe,
      changeNotifChannel: he,
      changeInputNeededNotif: Ae,
      changeAgentPushNotif: Pe
    }
  };
}
function ko(n) {
  if (n !== void 0) return n ? Tre.switchAutomatically : Tre.askEachTime;
  return Eo() ? Tre.notAskedYet : Tre.switchAutomatically;
}
function Eo() {
  if (XVe(ijt)) return k(ijt, !1) === !0;
  if (!jp()) return !1;
  return Hz()[ijt] === !0;
}
function _o(n) {
  return n === "rc" ? "slow" : (n ?? "latest");
}
function T7t(n) {
  let s = n.trim();
  if (!s || !s.includes("=")) return null;
  let r = s.split(/\s+/);
  if (F(r, (p) => p.includes("=")) === 1) {
    let p = s.indexOf("="),
      m = s.slice(0, p);
    if (!m || /\s/.test(m)) return null;
    return [{ key: m, raw: s.slice(p + 1) }];
  }
  let u = [];
  for (let p of r) {
    let m = p.indexOf("=");
    if (m <= 0) return null;
    u.push({ key: p.slice(0, m), raw: p.slice(m + 1) });
  }
  return u;
}
function ze(n, s) {
  let r = n.toLowerCase(),
    u = s.filter((p) => p.id.toLowerCase() === r);
  return s.find((p) => p.id === n) ?? (u.length === 1 ? u[0] : void 0);
}
var vo = new Map([
  ["agentsView", "/config (Agents view row)"],
  ["autoUpdatesChannel", "/channel"],
  ["showExternalIncludesDialog", "/config (External CLAUDE.md row)"]
]);
function Ee(n, s) {
  return (
    n.lock !== void 0 &&
    !n.lock.writableWhileLocked?.some((r) => r.toLowerCase() === s.toLowerCase())
  );
}
async function pMt(n, s, r) {
  let u = ce(s, r);
  await RBe().catch(() => {
    return;
  });
  let p = je(i8e(u).settings, s);
  if (
    n.some(({ key: y, raw: C }) => {
      let O = ze(y, p);
      return O !== void 0 && O.lock?.source !== "managed" && Ee(O, C);
    })
  )
    (await Xde().catch(() => {}), (p = je(i8e(ce(s, r)).settings, s)));
  let S = [];
  for (let { key: y, raw: C } of n) S.push(await Ro(y, C, p));
  return S;
}
async function Ro(n, s, r) {
  let u = ze(n, r);
  if ((a("tengu_config_shorthand", { key_hash: cn(n), matched: u !== void 0 }), !u)) {
    let m = r.filter((S) => S.id.toLowerCase() === n.toLowerCase());
    return {
      ok: !1,
      kind: "refusal",
      message:
        m.length > 1
          ? `${Zt(n)} matches ${m.map((S) => Zt(S.id)).join(" and ")}; type one exactly.`
          : `${Zt(n)} isn't a /config setting. Run /config to see what's available.`
    };
  }
  let p = ("labelBoldSuffix" in u ? u.searchText : void 0) ?? u.label;
  if (Ee(u, s))
    return {
      ok: !1,
      kind: u.lock?.reason === qe || u.lock?.reasonShipsOffBox ? "refusal" : "locked",
      message: `Couldn't save ${p}: ${u.lock?.reason}`
    };
  if (u.consentGated) {
    let m = a8e(s) === !1,
      S = (u.type === "boolean" && m) || (u.lock !== void 0 && !Ee(u, s)),
      y = u.value === !0 || u.canWithdraw?.() === !0;
    if (S && !y) return { ok: !0, kind: "refusal", message: `${n} is already off.` };
    if (!(S && y))
      return {
        ok: !1,
        kind: "refusal",
        message: `${p} can't be enabled with key=value \u2014 open /config to change it from the panel.`
      };
  }
  switch (u.type) {
    case "boolean": {
      let m = a8e(s);
      if (m === void 0)
        return { ok: !1, kind: "refusal", message: `${p} takes true or false, not "${Zt(s)}".` };
      let S = await u.onChange(m);
      if (S?.error) {
        if (S.error instanceof Rr)
          return {
            ok: !1,
            kind: "refusal",
            message: `${p}: ${S.error.message}${S?.messageSuffix ?? ""}`
          };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${p}: ${S.error.message}${S?.messageSuffix ?? ""}`
        };
      }
      return {
        ok: !0,
        kind: "refusal",
        message: `Set ${p} to ${m ? "true" : "false"}${S?.messageSuffix ?? ""}`
      };
    }
    case "enum":
    case "managedEnum": {
      let m = u.coerce;
      if (!u.options && !m)
        return {
          ok: !1,
          kind: "refusal",
          message: `${p} can't be set with key=value \u2014 use ${vo.get(u.id) ?? "/config"}.`
        };
      let S = m ? m(s) : u.options?.find((C) => C.toLowerCase() === s.toLowerCase());
      if (S === void 0) {
        let C = u.type === "managedEnum" && u.optionsHint ? ` ${u.optionsHint}` : "";
        return {
          ok: !1,
          kind: "refusal",
          message: u.options
            ? `${p} takes one of: ${u.options.join(", ")}.${C}`
            : `${p} doesn't accept "${Zt(s)}".${C}`
        };
      }
      let y = await u.onChange(S);
      if (y?.error) {
        if (y.error instanceof Rr)
          return {
            ok: !1,
            kind: "refusal",
            message: `${p}: ${y.error.message}${y?.messageSuffix ?? ""}`
          };
        return {
          ok: !1,
          kind: "save-failure",
          message: `Couldn't save ${p}: ${y.error.message}${y?.messageSuffix ?? ""}`
        };
      }
      return { ok: !0, kind: "refusal", message: `Set ${p} to ${Zt(S)}${y?.messageSuffix ?? ""}` };
    }
  }
}
function mMt(n, s) {
  if (!s) return n.message;
  switch (n.kind) {
    case "save-failure":
      return Je;
    case "locked":
      return "Couldn't save this setting: a trusted policy owns it (detail withheld on this connection).";
    case "refusal":
      return n.message;
  }
}
function A7t(n) {
  return _e(i8e(ce(n)).settings, n)
    .flatMap((r) => {
      if (r.consentGated) return [];
      let u =
        r.type === "boolean"
          ? "true|false"
          : r.options
            ? r.options.join("|")
            : r.type === "managedEnum" && r.coerce
              ? "<value>"
              : null;
      return u ? [`  ${r.id}=${u}`] : [];
    })
    .sort().join(`
`);
}
function lAi(n, s) {
  let r = Mo.of(U().host).lookup(),
    u = s.indexOf("=");
  if (u === -1) {
    let y = s.toLowerCase();
    return r
      .filter((C) => C.id.toLowerCase().startsWith(y))
      .sort((C, O) => C.id.localeCompare(O.id))
      .map((C) => ({
        value: `${C.id}=`,
        description: C.options?.slice(0, 4).join(" | ") ?? C.hint,
        isFinal: !1,
        appendSpace: !1
      }));
  }
  let p = s.slice(0, u),
    m = s.slice(u + 1).toLowerCase(),
    S = r.find((y) => y.id.toLowerCase() === p.toLowerCase());
  if (!S?.options) return [];
  return S.options
    .filter((y) => y.toLowerCase().startsWith(m))
    .map((y) => ({ value: `${S.id}=${y}`, isFinal: !0 }));
}
class Ye {
  keys = void 0;
  remoteWorkspace = !1;
  lookup() {
    if (this.remoteWorkspace !== Pt())
      ((this.remoteWorkspace = !this.remoteWorkspace), (this.keys = void 0));
    return ((this.keys ??= To()), this.keys);
  }
}
var Mo = new W(() => new Ye());
function To() {
  let n = {
      getAppState: () => ({
        thinkingEnabled: !1,
        verbose: !1,
        mainLoopModel: null,
        mainLoopModelForSession: null,
        fastMode: !1,
        promptSuggestionEnabled: !1,
        awaySummaryEnabled: !1,
        toolPermissionContext: Ll()
      }),
      setAppState: () => {},
      options: { mcpClients: [] }
    },
    { settings: s } = i8e(ce(n));
  return s.flatMap((r) => {
    if (r.consentGated) return [];
    let u =
      r.type === "boolean" ? ["true", "false"] : "options" in r && r.options ? r.options : void 0;
    if (u || (r.type === "managedEnum" && r.coerce))
      return [{ id: r.id, options: u, hint: r.type === "managedEnum" ? r.optionsHint : void 0 }];
    return [];
  });
}
function ce(n, s) {
  let r = n.getAppState(),
    u = { ...pt(), ...nEr(), autoContinueAtUsageLimit: J7t() ?? !0 },
    p = k7t(),
    m = js("disableWorkflows", !1),
    S = js("enableWorkflows", !1),
    y =
      a7n() &&
      (m.value !== !0 || m.source === "userSettings") &&
      (S.source === "default" || S.source === "userSettings"),
    C = !qgt(),
    O = i$n(),
    w = Fgn(),
    D = import.meta
      .require(
        __sourceFilePath_ed67c72fc84f3a55(
          new __sourceFilePath_ed67c72fc84f3a55_URL("./chunk-r91z6px2.js", import.meta.url)
        )
      )
      .isBriefEntitled();
  return {
    globalConfig: p,
    settingsData: u,
    storageV5: n.storageV5,
    mayBeAuthoredByNonOwner: eU(n),
    themeSetting: p.theme,
    currentOutputStyle: u?.outputStyle || AP,
    currentLanguage: u?.language,
    externalIncludesApproved: !1,
    thinkingEnabled: r.thinkingEnabled,
    verbose: r.verbose,
    mainLoopModel: r.mainLoopModel,
    currentModel: fne(r),
    isFastMode: Yo() ? r.fastMode : !1,
    promptSuggestionEnabled: r.promptSuggestionEnabled,
    awaySummaryEnabled: r.awaySummaryEnabled,
    showDefaultViewPicker: D,
    pushTogglesVisible: Qhe() && !_t() && nf(),
    crossSessionInboxRowVisible: !1,
    isConnectedToIde: lgt(n.options.mcpClients),
    inAppSelection: !0,
    tabsStandIn: !1,
    isFileCheckpointingAvailable: !i.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING,
    workflowsToggleable: y,
    workflowSizeGuidelineToggleable: C,
    autoContinueAtUsageLimitToggleable: O,
    artifactToggleable: w,
    remoteToolServingOn: fQe(),
    launchDirectoryKeys: null,
    shouldShowExternalIncludesToggle: !1,
    autoUpdaterDisabledReason: tNe(),
    promptSuggestionRun: n.session?.promptSuggestion,
    modelSwitchHooks: n.session
      ? {
          session: n.session,
          readState: () => n.getAppState(),
          latestPick: { current: 0 },
          latestFastPick: { current: 0 }
        }
      : null,
    setAppState: (A) => n.setAppState(A),
    setTheme:
      s?.setTheme ??
      ((A) => (z() && n.storageV5 !== void 0 ? r5("theme", A, n.storageV5) : r5("theme", A))),
    ...We
  };
}
var qe =
    "a plugin's settings can't be changed over Remote Control or from a relayed message \u2014 open /config in the session itself",
  Oo = "Set by your organization's managed settings (pluginConfigs)",
  Ao = "Set by --settings for this session (pluginConfigs)";
function Po(n, s, r) {
  return P_e(n).options?.[s] ?? r;
}
function Fo(n, s) {
  let r = (u) => {
    let p = pe(u)?.pluginConfigs;
    return lue(n).some((m) => p?.[m]?.options?.[s] !== void 0);
  };
  if (r("policySettings")) return Oo;
  return r("flagSettings") ? Ao : void 0;
}
async function xo(n, s, r, u) {
  let p = ig(n),
    m = typeof r === "object" ? [...r] : r,
    S = `${p}\x00${s}`,
    y = ge.has(S) ? ge.get(S) : pe("userSettings")?.pluginConfigs?.[p]?.options?.[s];
  if (_(y) === _(m)) return;
  ge.set(S, m);
  let C = await Un(
    "userSettings",
    { pluginConfigs: { [p]: { options: { [s]: m } } } },
    void 0,
    u
  ).finally(() => {
    if (ge.get(S) === m) ge.delete(S);
  });
  if (C.error) return { error: C.error };
  return (MTe(), Io(n, s));
}
var ge = new Map();
async function Io(n, s) {
  let r = ig(n),
    u = Ie().loadedModules.find((S) => S.name === n.name);
  if (u !== void 0 && u.args.pluginStorageId !== r)
    return { messageSuffix: " \xB7 saved; /reload-plugins applies it" };
  let p = await jNs();
  ZIr(p);
  let m = p.find((S) => S.name === n.name);
  if (m !== void 0 && m.kind !== "reloaded") {
    let S = m.kind === "refused" ? m.result.refused : m.kind === "held" ? m.reason : d(m.error);
    return (
      t(`/config ${n.name}.${s}: saved; ${S}`),
      { messageSuffix: " \xB7 saved, but the plugin did not reload; /reload-plugins applies it" }
    );
  }
}
function rEr(n, s = {}) {
  let r = [];
  for (let u of n) {
    if (u.enabled === !1) continue;
    let p = u.manifest.userConfig ?? {},
      m = ig(u),
      S = Zt(u.name),
      C = n.some((O) => O !== u && O.enabled !== !1 && Zt(O.name).toLowerCase() === S.toLowerCase())
        ? m
        : u.name;
    for (let [O, w] of Object.entries(p)) {
      if (w.sensitive === !0 || w.multiple === !0) continue;
      let D = `${C}.${O}`,
        A = Fo(m, O) ?? s.refusal,
        Q = A === void 0 ? void 0 : { reason: A, source: "managed" },
        ne = Zt(w.title),
        te = Zt(w.description),
        oe = {
          id: D,
          label: ne,
          searchText: `${ne} ${u.name} ${te}`,
          ...(Q !== void 0 && { lock: Q })
        },
        V = s.shown?.get(D) ?? Po(m, O, w.default),
        ie = async (q) => {
          if (Q !== void 0) return { error: new Rr(Q.reason) };
          s.onShown?.(D, q);
          let J = await xo(u, O, q, s.storageV5);
          if (J?.error && V !== void 0) s.onShown?.(D, V);
          return J;
        };
      if (w.type === "boolean") {
        r.push({
          ...oe,
          value: oEr(V),
          type: "boolean",
          provided: { plugin: S, pluginId: m, description: te, kind: "boolean" },
          onChange: ie
        });
        continue;
      }
      if (w.type === "string" && w.options !== void 0) {
        let q = L(w.options.map(Zt)).filter((J) => J !== "");
        r.push({
          ...oe,
          value: V === void 0 ? "" : String(V),
          options: q,
          type: "enum",
          pickToCommit: !0,
          provided: { plugin: S, pluginId: m, description: te, kind: "choice" },
          onChange: ie
        });
        continue;
      }
      let se = w.type === "number";
      r.push({
        ...oe,
        value: V === void 0 ? "" : String(V),
        type: "managedEnum",
        coerce: (q) => {
          if (!se) return q;
          let J = P7t(q, w);
          return J === void 0 ? void 0 : String(J);
        },
        optionsHint: se ? x7t(w) : void 0,
        provided: { plugin: S, pluginId: m, description: te, kind: se ? "number" : "text" },
        onChange: (q) => ie(se ? Number(q) : q)
      });
    }
  }
  return r;
}
function C7t(n) {
  let s = String(n.value);
  return n.provided !== void 0 && n.type !== "boolean" ? ear(rd(s.replace(/[\t\n\r]/g, " "))) : s;
}
function _e(n, s) {
  let r = s.getAppState().plugins?.enabled ?? [];
  return [...n, ...rEr(r, { storageV5: s.storageV5, ...(eU(s) && { refusal: qe }) })];
}
function je(n, s) {
  let r = eU(s) ? { kind: "bridge" } : aGn;
  return _e(n, s).map((u) => PNn(u, r));
}
function ve(n) {
  let s = n.provided,
    r =
      n.type === "boolean"
        ? "boolean"
        : (s?.kind ??
          (n.type === "enum"
            ? "choice"
            : n.coerce !== void 0
              ? "text"
              : n.options !== void 0
                ? "choice"
                : "text")),
    u = n.type === "boolean" ? void 0 : (n.options ?? void 0),
    p = r === "number" && typeof n.value === "string" ? Number(n.value) : Number.NaN,
    m = typeof n.value === "string" && n.value.trim() !== "" && Number.isFinite(p) ? p : n.value;
  return {
    row: {
      key: n.id,
      label: n.label,
      ...(s !== void 0 && { description: s.description }),
      kind: r,
      value: m,
      ...(r === "choice" && u !== void 0 && { options: u }),
      provider: s === void 0 ? LKe : hje(s.pluginId),
      isLocked: n.lock !== void 0
    },
    ...(n.lock !== void 0 && { lockReason: n.lock.reason })
  };
}
async function Qe(n, s) {
  let r = ("labelBoldSuffix" in n ? n.searchText : void 0) ?? n.label;
  if (n.consentGated) {
    if (!(n.type === "boolean" && s === !1 && (n.value === !0 || n.canWithdraw?.() === !0)))
      return n.type === "boolean" && s === !1
        ? void 0
        : `${r} can only be turned on from the /config panel.`;
  }
  let u = async (p) => {
    let m = await p;
    return m?.error ? `${m.error.message}${m.messageSuffix ?? ""}` : void 0;
  };
  switch (n.type) {
    case "boolean":
      return typeof s === "boolean" ? u(n.onChange(s)) : `${r} takes true or false.`;
    case "enum":
    case "managedEnum": {
      let p = n.type === "managedEnum" ? n.coerce : void 0;
      if (!n.options && !p) return `${r} can only be changed from the /config panel.`;
      let m = typeof s === "string" ? s : String(s),
        S = p ? p(m) : n.options?.find((y) => y.toLowerCase() === m.toLowerCase());
      if (S === void 0) {
        let y = n.type === "managedEnum" && n.optionsHint ? ` ${n.optionsHint}` : "";
        return n.options
          ? `${r} takes one of: ${n.options.join(", ")}.`
          : `${r} doesn't accept "${Zt(m)}".${y}`;
      }
      return u(n.onChange(S));
    }
  }
}
function Lo(n) {
  return { ...ve(n), write: (s) => Qe(n, s) };
}
function dAi(n) {
  return _e(i8e(ce(n)).settings, n).map(Lo);
}
function Do(n, s) {
  if (n.type === "boolean") return typeof s === "boolean" ? s : void 0;
  if (typeof s === "number") return String(s);
  return typeof s === "string" ? s : void 0;
}
function Me(n, s, r, u = aGn, p) {
  let { row: m } = ve(n),
    S = m.kind === "number" && typeof s === "string" ? Number(s) : s,
    C =
      m.kind === "choice" && typeof S === "string" && !(m.options ?? []).includes(S)
        ? { ...m, kind: "text", options: void 0 }
        : m,
    O,
    w = !1;
  return LMs({
    row: C,
    value: S,
    origin: u,
    signal: p,
    write: async (D) => {
      if (p?.aborted) return `${C.label}: the change was cancelled`;
      let A = Do(n, D);
      if (A === void 0) return `${C.label}: a ${C.kind} row cannot hold that value`;
      let Q = n.type === "managedEnum" ? n.coerce : void 0,
        ne = _(D) !== _(S),
        oe =
          ne &&
          m.kind === "choice" &&
          Q === void 0 &&
          typeof A === "string" &&
          !(m.options ?? []).includes(A)
            ? void 0
            : ne && Q !== void 0 && typeof A === "string"
              ? Q(A)
              : A;
      if (oe === void 0) {
        let ie = n.type === "managedEnum" && n.optionsHint ? ` ${n.optionsHint}` : "";
        return `${C.label} doesn't accept "${Zt(String(D))}".${ie}`;
      }
      O = r(oe);
      let V = await O;
      return (
        (w = V?.error !== void 0),
        V?.error ? `${V.error.message}${V.messageSuffix ?? ""}` : void 0
      );
    }
  }).then((D) => {
    if (D.deny === void 0 || w) return O;
    let A = Zt(D.deny);
    return {
      error: p?.aborted
        ? new R(A, "config.set withdrawn before it was written")
        : new R(A, "config.set denied by a hook")
    };
  });
}
function PNn(n, s = aGn) {
  let r = n.onChange;
  return { ...n, onChange: (p) => (Rrn() ? Me(n, p, r, s) : r(p)) };
}
function BIe(n, s, r, u) {
  return n !== void 0 && Rrn() ? Me(n, s, r, aGn, u) : r(s);
}
var Je = "Couldn't save this setting (detail withheld on this connection).";
function Xe(n, s) {
  return s() ? Je : n;
}
var No = "The model changed while a plugin's hook was deciding; pick again";
async function INn(n, s, r, u, p = {}) {
  let m = Rrn() ? i8e(ce(r)).settings.find((w) => w.id === n) : void 0;
  if (m === void 0) {
    let w = await u();
    return w?.error === void 0 ? { written: s } : { refusal: Ke(n, w) };
  }
  let S = {},
    y = async (w) => {
      if (p.isSuperseded?.()) return ee("a later pick replaced this one");
      if (w !== s && p.refuseRewrite !== void 0)
        return ee(
          p.refuseRewrite === !0
            ? "a plugin's hook changed the value; this command writes only what was picked (use /config)"
            : p.refuseRewrite
        );
      let D =
        w === s
          ? await Promise.resolve()
              .then(u)
              .catch((A) => ((S.thrown = { error: A }), ee("the write failed")))
          : await Qe(m, w).then((A) => (A === void 0 ? void 0 : ee(A)));
      if (D?.error === void 0) S.written = w;
      return D;
    },
    C = await Me(m, s, (w) => (S.outcome ??= y(w)), eU(r) ? { kind: "bridge" } : aGn);
  if (S.thrown !== void 0) throw S.thrown.error;
  if (S.written !== void 0) return { written: S.written };
  let O = ("labelBoldSuffix" in m ? m.searchText : void 0) ?? m.label;
  if (C?.error !== void 0) return { refusal: Ke(O, C) };
  return { refusal: `Couldn't save ${O}: a plugin's hook answered without writing` };
}
function Ke(n, s) {
  return `Couldn't save ${n}: ${s.error?.message ?? ""}${s.messageSuffix ?? ""}`;
}
function ee(n) {
  return { error: new R(n, "a row commit from a command was not written") };
}
async function ABe(n, s, r, u) {
  let p = n ?? "default",
    m = "",
    S,
    y,
    C = await INn(
      "model",
      p,
      s,
      async () => {
        if (u.hasModelMoved?.()) return ((S = No), ee(S));
        let w = await r();
        if (typeof w === "string") {
          m = w;
          return;
        }
        if ("unsaved" in w) return ((y = w.unsaved), ee("the default was not saved"));
        return ((S = w.refused), ee(w.refused));
      },
      { isSuperseded: u.isSuperseded }
    );
  if (S !== void 0) return { text: S, isRefusal: !0, isOwnRefusal: !0 };
  if (y !== void 0) return { text: y, isRefusal: !1 };
  if ("refusal" in C) return { text: Xe(C.refusal, u.persistsOffBox), isRefusal: !0 };
  if (C.written === p) return { text: m, isRefusal: !1 };
  let O = C.written === "default" ? null : String(C.written);
  return { text: `${Hge}${sb($v(O))}${Ple}`, isRefusal: !1, rewrittenTo: O };
}
var jIe = Symbol("fast toggle not applied");
async function gMt(n, s, r, u) {
  let p = {},
    m = await INn(
      "fast",
      n,
      s,
      async () => {
        let S = await r();
        if (((p.isDone = !0), S === jIe)) return ee("nothing was applied");
        return ((p.refusal = S), S === void 0 ? void 0 : ee(S));
      },
      { refuseRewrite: !0 }
    );
  if (p.isDone) return p.refusal;
  return "refusal" in m ? Xe(m.refusal, u) : void 0;
}
async function Wmo(n) {
  let s = new Map();
  return (
    await Promise.all(
      n.map(async (r) => {
        let { row: u } = ve(r),
          p = await XIr(u);
        if (p === void 0) s.set(r.id, { label: u.label, hidden: !0 });
        else if (p !== u) s.set(r.id, { label: Zt(p.label), hidden: !1 });
      })
    ),
    s
  );
}
var cAi = { isHooked: () => Rrn(), savedModelPickReply: ABe, savedFastModeToggle: gMt };
export {
  eEr,
  tEr,
  nEr,
  k7t,
  Vks,
  Bmo,
  jmo,
  i8e,
  T7t,
  pMt,
  mMt,
  A7t,
  lAi,
  rEr,
  C7t,
  dAi,
  PNn,
  BIe,
  INn,
  ABe,
  jIe,
  gMt,
  Wmo,
  cAi
};

//# sourceMappingURL=chunk-f3ak9604.js.map
