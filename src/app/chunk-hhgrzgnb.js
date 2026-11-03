// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { nt, U, ly, $c, vTn, T2, ETn, aie, PYe, qdr } from "./chunk-wrtp8qz8.js";
import { ce } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import { p } from "./chunk-qmkm2x59.js";
import { aa, Vj, fB, Xx, AI, Cb } from "./chunk-5rw2zfa0.js";
import { a } from "./chunk-4cgvah10.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { i } from "./chunk-cj37hmns.js";
import { Qm } from "./chunk-4nzy53ma.js";
import { Ny, fh } from "./chunk-63a6mqbs.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { tr, ll } from "./chunk-xe386mry.js";
import { Is, Ro, Qt, Tf } from "./chunk-1e5yp9hx.js";
import { Vai, ln, ZE, pe, KRe, Gp, pt, Kx, kb, cse, Un, Yrt } from "./chunk-7c3thgax.js";
import { xl, mS, sTt, Ae, Od, eq } from "./chunk-dvghjmtr.js";
import {
  H7,
  fVr,
  Pei,
  Ptr,
  gVe,
  Gqo,
  Xr,
  U2t,
  qE,
  tqr,
  wVe,
  f4o,
  fd,
  Xe,
  ug,
  $t,
  EVe,
  y0,
  A0e,
  QCe,
  cEt,
  gn,
  I0e,
  Ut,
  kn,
  k,
  Re,
  ue,
  nd,
  E5o
} from "./chunk-ajtyjx88.js";
import { Ks, uai } from "./chunk-znkwh1rm.js";
import { jm } from "./chunk-m83s757k.js";
import { lKe } from "./chunk-5bd63sq9.js";
import { X7s } from "./chunk-wdgmsxyg.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { Ot, Tc, H0 } from "./chunk-ya7n419k.js";
import { o, oe, me } from "./chunk-0bqrj5ah.js";
import { resolve as Oe } from "path";
var Se = new nt(() => ({ layers: [] }));
function W() {
  return Se.peek(U())?.layers ?? [];
}
function JSt(e, n, r) {
  let s = A(A(e.autoCompactOffer, n), r);
  if (typeof s !== "object" || s === null || typeof s.eligibleLoggedAt !== "number") return;
  let { escCount: f, resolved: d } = s,
    u = typeof d === "object" && d !== null,
    { choice: E, tokens: m } = u ? d : {};
  return {
    eligibleLoggedAt: s.eligibleLoggedAt,
    isAnswered: u,
    ...(typeof f === "number" && Number.isInteger(f) && f > 0 && { escCount: f }),
    ...((E === "accept" || E === "keep") &&
      typeof m === "number" && { resolved: { choice: E, tokens: m } })
  };
}
function uGr(e, n, r, s) {
  if (JSt(e, n, r) !== void 0) return e;
  let f = A(e.autoCompactOffer, n);
  return {
    ...e,
    autoCompactOffer: {
      ...e.autoCompactOffer,
      [n]: { ...f, [r]: { ...A(f, r), eligibleLoggedAt: s } }
    }
  };
}
function QXs(e, n, r) {
  let s = JSt(e, n, r);
  return q(e, n, r, { escCount: (s?.escCount ?? 0) + 1 });
}
function ZXs(e, n, r, s) {
  return q(e, n, r, { resolved: s });
}
function q(e, n, r, s) {
  let f = A(e.autoCompactOffer, n),
    d = A(f, r),
    u = JSt(e, n, r);
  if (u === void 0 || u.isAnswered || !d) return e;
  return { ...e, autoCompactOffer: { ...e.autoCompactOffer, [n]: { ...f, [r]: { ...d, ...s } } } };
}
function A(e, n) {
  return typeof e === "object" && e !== null && Object.hasOwn(e, n) ? e[n] : void 0;
}
function Z(e, n, r) {
  let s = JSt(e, n, r);
  return s !== void 0 && (s.isAnswered || (s.escCount ?? 0) > 0);
}
function e_e(e, n, r) {
  switch (e) {
    case "ask":
      return n.isAutoModeAvailable ? "auto" : "default";
    case "default": {
      if (n.isAutoModeAvailable) return "auto";
      let s = r ?? "default";
      if (s === "auto" || (s === "bypassPermissions" && !n.isBypassPermissionsModeAvailable))
        return "default";
      return s;
    }
    case "proactive":
      if (n.isBypassPermissionsModeAvailable) return "bypassPermissions";
      return n.isAutoModeAvailable ? "auto" : "acceptEdits";
  }
}
function G(e, n) {
  if (n === "auto" || (e === "proactive" && n === "acceptEdits")) return n;
  return;
}
function fGr(e) {
  return az(e) ?? sKe(e);
}
function ne() {
  let { value: e, source: n } = kn("tengu_auto_mode_config", {});
  if (e?.enabled !== "disabled") return !1;
  return n === "override" || n === "payload";
}
function pGr(e) {
  let { cli: n, env: r, settings: s, agentFrontmatter: f } = e,
    d = Ny(n.permissionMode),
    u = Ny(n.inheritPermissionMode),
    E = n.dangerouslySkipPermissions,
    m = f?.permissionMode,
    S = Boolean(E || d || m);
  if (Ne(r.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let g = E || (d && d !== "default") || (u && u !== "default") || (m && m !== "default"),
      _ =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: g ? _ : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
      autoDefaultWithheldForPendingVerdict: !1,
      levelPickHeldForPendingVerdict: void 0,
      autoStartWithheldForHipaaTaint: !1
    };
  }
  let v = s.permissions?.disableBypassPermissionsMode === "disable",
    y = ne() || !1,
    C = !y && !J(s),
    c = [],
    h,
    O = u
      ? te(
          u,
          y,
          "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)"
        )
      : void 0,
    x = u ? (O?.mode ?? Xx(u)) : void 0;
  if (E)
    if (bgn("bypassPermissions")) ((h = QSt), c.push("default"));
    else c.push("bypassPermissions");
  if (d) {
    let g = te(
      d,
      y,
      "auto mode killswitch active (override- or payload-served) \u2014 falling back to default"
    );
    if (g) {
      if (g.unconsented) h = QSt;
      c.push(g.mode);
    }
  }
  if (m)
    if (m === "auto" && y)
      t("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", {
        level: "warn"
      });
    else if (x && fB(m, x) === void 0)
      (t(
        `agent frontmatter permissionMode "${m}" ignored \u2014 it would widen the agent view's inherited mode (effective "${x}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`,
        { level: "warn" }
      ),
        a("tengu_agent_frontmatter_mode_widening_carry_ignored", {}));
    else c.push(m);
  if (Qm()) {
    let g = !VQn()
      ? void 0
      : z()
          .map((_) => Ny(pe(_)?.permissions?.defaultMode))
          .find((_) => _ != null);
    if (g != null && Ne(r.CLAUDE_CODE_REMOTE) && !V(g)) {
      if (
        (t(
          `settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
          { level: "warn" }
        ),
        c.length === 0)
      )
        (a("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: cn(g) }), c.push("default"));
    } else if (g === "bypassPermissions") {
      if (E || n.allowDangerouslySkipPermissions)
        if (bgn("bypassPermissions")) {
          if (c.length === 0)
            ((h = QSt),
              process.stderr.write(`\u26A0 ${h}
`));
          c.push("default");
        } else c.push(g);
      else if (c.length === 0)
        ((h =
          'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it'),
          t(
            'settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting',
            { level: "warn" }
          ),
          a("tengu_settings_bypass_unconsented_noninteractive_ignored", {}),
          process.stderr.write(`\u26A0 ${h}
`),
          c.push("default"));
    } else if (g === "auto")
      if (!y) c.push(g);
      else
        t(
          'settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active',
          { level: "warn" }
        );
    else if (g != null) c.push(g);
  } else if (s.permissions?.defaultMode) {
    let g = Ny(s.permissions.defaultMode);
    if (Ne(r.CLAUDE_CODE_REMOTE) && !V(g))
      (t(
        `settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
        { level: "warn" }
      ),
        a("tengu_ccr_unsupported_default_mode_ignored", { mode_hash: cn(g) }));
    else if (g === "bypassPermissions")
      if (!T("bypassPermissions")) {
        if (
          (t(
            'settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)',
            { level: "warn" }
          ),
          a("tengu_settings_bypass_mode_untrusted_source_ignored", {}),
          !u)
        )
          c.push("default");
      } else if (bgn("bypassPermissions")) {
        if (c.length === 0) h = QSt;
        c.push("default");
      } else c.push(g);
    else if (g !== "auto")
      if (x && !T(g) && fB(g, x) === void 0)
        (t(
          `settings defaultMode "${g}" ignored \u2014 it would widen the agent view's inherited mode (effective "${x}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`,
          { level: "warn" }
        ),
          a("tengu_settings_mode_widening_carry_ignored", {}));
      else c.push(g);
    else if (!T("auto"))
      (t(
        'settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)',
        { level: "warn" }
      ),
        a("tengu_settings_auto_mode_untrusted_source_ignored", {}));
    else if (y)
      t(
        "auto mode killswitch active (override- or payload-served) \u2014 falling back to default",
        { level: "warn" }
      );
    else if (Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && J(s))
      t(
        'settings defaultMode "auto" ignored \u2014 disableAutoMode is set and this is an unattended Remote Control machine session',
        { level: "warn" }
      );
    else c.push("auto");
  }
  if (u) {
    let g = O;
    if (g) {
      if (g.unconsented && c.length === 0) h = QSt;
      c.push(g.mode);
    }
  }
  let M;
  for (let g of c) {
    if (g === "bypassPermissions" && v) {
      (t("bypassPermissions mode is disabled by settings", { level: "warn" }),
        (h = "Bypass permissions mode was disabled by settings"));
      continue;
    }
    M = { mode: g, notification: h };
    break;
  }
  let L = !1,
    P = !1,
    H,
    F = !1;
  if (!M) {
    let g =
        C &&
        ((!Ne(r.CLAUDE_CODE_REMOTE) &&
          VQn() &&
          (!n.isNonInteractiveSession || Qm() || k("tengu_moss_anchor", !1))) ||
          Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT)),
      _ = "default";
    if (g) {
      let w = mGr(),
        D = Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT);
      if (w === void 0 || (w === "pending" && D)) ((_ = "auto"), (L = !0));
      else if (w === "taint") ((h ??= ye), (F = !0));
      else if (w === "pending") P = !0;
    }
    M = { mode: _, notification: h };
  }
  let j = M.mode,
    Q = !1;
  if (e.proactivityLevel && e.proactivityLevel !== "default" && !S) {
    let g = e_e(
        e.proactivityLevel,
        { isAutoModeAvailable: C, isBypassPermissionsModeAvailable: !1 },
        j
      ),
      _ = G(e.proactivityLevel, g),
      w = vLe(e.proactivityLevel, g, j),
      D = w === "pending" && Ne(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) ? void 0 : w;
    if (_ !== void 0 && D === "taint") ((M.notification ??= ie(_)), (F = !0));
    else if (D === "pending") ((P = !0), (H = _));
    ((M = { mode: D === void 0 ? g : "default", notification: M.notification }),
      (L = !1),
      (Q = !0));
  }
  return {
    mode: M.mode,
    notification: M.notification,
    fromAutoFallback: L,
    baselineMode: j,
    decidedByProactivityLevel: Q,
    modeSuppliedOnInvocation: S,
    autoDefaultWithheldForPendingVerdict: P,
    levelPickHeldForPendingVerdict: H,
    autoStartWithheldForHipaaTaint: F
  };
}
var re = { auto: "Auto mode", acceptEdits: "Accept edits" },
  ye = ie("auto");
function ie(e) {
  return `${re[e]} isn't the default for your organization \xB7 Shift+Tab to switch`;
}
function eJs(e) {
  return `${re[e]} didn't start: your organization's policy hasn't loaded \xB7 Shift+Tab to switch`;
}
function vLe(e, n, r) {
  let s = G(e, n);
  if (s === void 0 || s === r) return;
  return mGr();
}
function mGr() {
  let e = uai();
  if (Ks("hipaa") || e === "unobtainable_seen_hipaa") return "taint";
  return e === "pending" ? "pending" : void 0;
}
function tJs(e) {
  let n =
    e.cli.fallbackModel ??
    (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (n === void 0) return;
  return ve(n, Xr);
}
function mGo(e) {
  return e
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n !== "");
}
function ve(e, n) {
  let r = typeof e === "string" ? mGo(e) : e,
    s = new Set(),
    f = [];
  for (let d of r) {
    let u = typeof d === "string" ? d.trim() : "";
    if (u === "") continue;
    let E = $t(u === "default" ? fd() : u);
    if (s.has(E)) continue;
    if (!n(E)) continue;
    if ((s.add(E), f.push(E), f.length === he)) break;
  }
  return f.length > 0 ? f : void 0;
}
var he = 3;
function be(e) {
  switch (e) {
    case "userSettings":
      return "user_settings";
    case "projectSettings":
      return "project_settings";
    case "localSettings":
      return "local_settings";
    case "flagSettings":
      return "flag_settings";
    case "policySettings":
      return "policy_settings";
    case null:
      return "settings";
  }
}
function _e(e) {
  switch (e) {
    case "env":
    case "user_settings":
    case "project_settings":
    case "local_settings":
    case "flag_settings":
    case "policy_settings":
    case "settings":
    case "agent_frontmatter":
    case "routine_frontmatter":
      return !0;
    default:
      return !1;
  }
}
function Me(e, n, r) {
  if (H7()) {
    let y = Gqo();
    if (
      y !== null &&
      !n &&
      PYe().includes("userSettings") &&
      new Date(y).getTime() > new Date(ue().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()
    )
      Re(
        (c) => (c.lastSeenOrgDefaultUpdatedAt === y ? c : { ...c, lastSeenOrgDefaultUpdatedAt: y }),
        r
      );
    if (wVe() === null) return e;
    let C = e ? Kx("model") : null;
    if (C === "policySettings" || C === "flagSettings") return e;
    return;
  }
  let s = gVe();
  if (!s || tqr() === null) return e;
  let f = e ? Kx("model") : null;
  if (f === "policySettings" || f === "flagSettings") return e;
  let d = PYe().includes("userSettings"),
    u = ue().lastSeenOrgDefaultUpdatedAt,
    E = new Date(s.updated_at).getTime() > new Date(u ?? 0).getTime(),
    m = E && !n && d,
    S = () =>
      Re(
        (y) =>
          y.lastSeenOrgDefaultUpdatedAt === s.updated_at
            ? y
            : { ...y, lastSeenOrgDefaultUpdatedAt: s.updated_at },
        r
      );
  if (s.override_user_selection) {
    if (m) S();
    return;
  }
  if (n) return e;
  let v = d ? pe("userSettings")?.model : void 0;
  if (E && v) {
    if (
      (Un("userSettings", { model: void 0 }, void 0, r).then((y) => {
        if (!y.error) S();
      }),
      f === "userSettings")
    )
      return;
  } else if (m) S();
  return e;
}
function gGo(e, n) {
  let { cli: r, env: s, settings: f, agentFrontmatter: d } = e,
    u = r.model === "default" ? fd() : r.model,
    E = u,
    m = null;
  if (u) m = r.model === "default" ? "cli_default" : "cli";
  let S = d?.model,
    v;
  if (!u && S && S !== "inherit")
    ((v = S),
      (u = $t(S)),
      (E = S),
      (m = d?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter"));
  let y = !1,
    C,
    c = u;
  if (c === void 0) {
    if (s.ANTHROPIC_MODEL) ((c = s.ANTHROPIC_MODEL), (m = "env"));
    else if (
      ((c = Me(f.model || void 0, r.isNonInteractiveSession === !0, n) || void 0), c !== void 0)
    )
      m = be(Kx("model"));
    E = c;
  }
  let h;
  if (c && !Xr(c)) {
    let L = v !== void 0 && !y ? v : c,
      P = y ? null : qE(L);
    if (P !== null) {
      if (((h = L), (c = P), u !== void 0)) u = P;
    } else {
      if (!(L.trim().toLowerCase() === "default" || f4o(L)) && !y) h = L;
      ((c = void 0), (E = void 0), (m = null), (u = void 0));
    }
  }
  let O;
  if (c && U2t(c, _e(m) ? "persisted" : "explicit"))
    ((O = c), (c = void 0), (E = void 0), (m = null), (u = void 0));
  let x = c || null,
    M = $t(x ?? fd());
  return {
    effectiveModel: u,
    initialMainLoopModel: x,
    resolvedInitialModel: M,
    rawModelRequest: E || null,
    restrictedModel: h,
    unservedModelSpelling: O,
    settingLayer: m,
    modelWithoutStartupOverride: C
  };
}
function nJs(e) {
  let n = e.cli.systemPrompt,
    r = e.cli.appendSystemPrompt,
    s = Vai();
  if (s)
    r = r
      ? `${r}

${s}`
      : s;
  return { systemPrompt: n, appendSystemPrompt: r };
}
function VQn() {
  return k("tengu_harbor_willow", !0) || E5o()?.meadow_lantern === !0;
}
var Le = Is.filter((e) => !Tf.has(e)).toReversed(),
  Ce = ["acceptEdits", "plan", "default", "auto"];
function V(e) {
  return Ce.includes(e);
}
function z() {
  return Le.filter(Qt);
}
function T(e) {
  return z().some((n) => pe(n)?.permissions?.defaultMode === e);
}
function J(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function aGt(e) {
  return !J(e) && !ne();
}
function xe(e) {
  return (
    z()
      .map((r) => Ny(pe(r)?.permissions?.defaultMode))
      .find((r) => r != null) === "plan" && Ny(e.permissions?.defaultMode) !== "plan"
  );
}
function hGo() {
  let e = Is.filter(Qt)
    .map((n) => ({
      source: n,
      mode: (
        n === "policySettings"
          ? cse().length > 0 ||
            kb().some((r) => r.userWritable === !0 && r.path === "") ||
            (aie() && KRe()) ||
            (AI() !== !1 && !Cb())
          : ZE(n).some((r) => r.severity !== "warning")
      )
        ? "unreadable"
        : pe(n)?.permissions?.defaultMode
    }))
    .findLast(({ source: n, mode: r }) => r !== void 0 && (r !== "auto" || !Tf.has(n)));
  return e === void 0 || e.mode === "auto"
    ? void 0
    : e.mode === "unreadable"
      ? "settings_unreadable"
      : "stored_default";
}
function qQn({ settings: e, scrubbed: n, typedLevel: r, carriedMode: s }) {
  let f = r !== void 0 && r !== "default";
  return {
    autoSeedable: aGt(e) && !n,
    storedDefaultBar: hGo(),
    otherChoiceTyped: f || (s !== void 0 && s !== "auto"),
    carriedPlanHolds: s === "plan" && !f,
    trustedPlanDisplaced: xe(e)
  };
}
function Pe(e) {
  let n = Ny(e.permissions?.defaultMode);
  if (n == null || !V(n)) return;
  if (n !== "auto") return n;
  return T("auto") && aGt(e) ? "auto" : void 0;
}
function YQn({
  gateOn: e,
  permissionModeTyped: n,
  dangerouslySkipPermissions: r,
  scrubbed: s,
  settings: f,
  effort: d
}) {
  let u = !n && !r && !s,
    E = u ? Pe(f) : void 0;
  return {
    considered: e && u,
    settingsDefaultModePresent: f.permissions?.defaultMode != null,
    settingsDefault: E,
    permissionMode: e ? E : void 0,
    effort: e ? d : void 0
  };
}
function rJs({ sentMode: e, repositorySettings: n }) {
  if (e === "auto") return;
  if (e !== void 0) return e;
  let r = Y(n?.permissions?.defaultMode);
  return r !== void 0 && r !== "auto" && V(r) ? r : "default";
}
function oJs({ seed: e, settingsMode: n, sentMode: r, startsIn: s }) {
  if (
    !e.considered ||
    !e.settingsDefaultModePresent ||
    e.permissionMode !== void 0 ||
    n === void 0 ||
    (r !== void 0 && Y(n) === r)
  )
    return null;
  let f =
    Y(n) === "auto"
      ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)"
      : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${n}) \u2014 ${f}${s !== void 0 ? `; the session starts in ${s} mode` : ""}`,
    level: "info"
  };
}
function Y(e) {
  return e === void 0 ? void 0 : fh(e);
}
var yGo =
    'bypass in a background worker needs consent recorded in your user settings \u2014 add "skipDangerousModePermissionPrompt": true to ~/.claude/settings.json (accepting the interactive disclaimer writes the same key, but that dialog is skipped while consent already exists in .claude/settings.local.json or via --settings, which does not count here)',
  QSt = `Permission mode downgraded to default: ${yGo}`;
function bgn(e) {
  if (!Ut()) return !1;
  if (e === "bypassPermissions") return !Yrt() && !ue().bypassPermissionsModeAccepted;
  return !1;
}
function te(e, n, r) {
  let s = Xx(e);
  if (bgn(s)) return { mode: "default", unconsented: !0 };
  if (s === "auto" && n) {
    t(r, { level: "warn" });
    return;
  }
  return { mode: s };
}
function XY(e, n) {
  return ug($t(e)) === ug($t(n));
}
var we = "tengu_loggia_passage";
function B() {
  return k(we, !1);
}
function sJs({ sent: e, turnEffort: n, hookEffortValue: r }) {
  if (e === void 0) return { carry: null, withheld: "none_sent" };
  if (r !== void 0) return { carry: null, withheld: "hook" };
  if (n !== void 0) return { carry: null, withheld: "turn_layer" };
  return B() ? { carry: null, withheld: "killed" } : { carry: e };
}
function Sgn(e) {
  return {
    refused_effort_level: ce(e.carry),
    refused_effort_withheld: ce(e.carry === null ? e.withheld : void 0)
  };
}
function _Go({
  refusedEffort: e,
  fallbackModel: n,
  heldBySession: r,
  loopOverride: s,
  loopEffort: f
}) {
  if (r) return { latchEffort: e.carry ?? void 0, loopEffort: void 0 };
  let d = e.carry ?? bGo(s, f);
  return { latchEffort: void 0, loopEffort: d === void 0 ? void 0 : { model: n, level: d } };
}
function bGo(e, n) {
  return n !== void 0 && n.model === e ? n.level : void 0;
}
function se() {
  return T2()?.carriedEffort !== void 0;
}
function R(e) {
  let n = T2(),
    r = $c();
  if (n?.carriedEffort === void 0 || r == null || B()) return;
  try {
    return XY(r, n.fallbackModel) && XY(e, n.fallbackModel) ? n.carriedEffort : void 0;
  } catch (s) {
    l(N(s));
    return;
  }
}
function XQn({ loopEffort: e, continuesMainConversation: n }, r) {
  if (e !== void 0) return B() ? null : e;
  return (n ? R(r) : void 0) ?? null;
}
function iJs({ carried: e, withIt: n, withoutIt: r, isSavedSetAside: s }) {
  if (n === r) return n === e ? "moot" : "no_effect";
  if (n !== e) return "clamped";
  return s ? "applied_over_saved" : "applied";
}
function JQn() {
  ETn("effort_change");
}
function aJs(e) {
  let n = T2();
  if (n !== void 0 && !XY(e, n.fallbackModel)) ETn("model_change");
}
function lJs() {
  let e = T2();
  if (e?.carriedEffort === void 0) return;
  let n = $c();
  if (B()) ETn("kill_switch");
  else if (n == null || !XY(n, e.fallbackModel)) ETn("model_change");
}
function t_e() {
  return i.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? k("tengu_proud_clover", !1);
}
function Tw(e) {
  if (qdr(e)) return !1;
  let n = A0e(e, "effort");
  if (n !== void 0) return n;
  let r = Xe(e),
    s = sTt("effort", r);
  if (s !== void 0) return s;
  let f = fVr(e, r);
  if (f !== void 0) return f.length > 0;
  if (
    r.includes("claude-3-") ||
    r === "claude-opus-4-0" ||
    r === "claude-opus-4-1" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-haiku-4-5"
  )
    return !1;
  if (i.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (mS(r, "effort", e) || r === "claude-mythos-5") return !0;
  return eq(Od(e));
}
function Cce(e) {
  if (qdr(e)) return !1;
  let n = A0e(e, "max_effort");
  if (n !== void 0) return n;
  let r = Xe(e),
    s = le("max_effort", e, r);
  if (s !== void 0) return s;
  let f = fVr(e, r);
  if (f !== void 0) return f.includes("max");
  if (
    r.includes("claude-3-") ||
    r === "claude-opus-4-0" ||
    r === "claude-opus-4-1" ||
    r === "claude-opus-4-5" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-haiku-4-5"
  )
    return !1;
  if (mS(r, "max_effort", e) || r === "claude-mythos-5") return !0;
  return eq(Od(e));
}
function ZSt(e) {
  if (qdr(e)) return !1;
  let n = A0e(e, "xhigh_effort");
  if (n !== void 0) return n;
  let r = Xe(e),
    s = le("xhigh_effort", e, r);
  if (s !== void 0) return s;
  let f = fVr(e, r);
  if (f !== void 0) return f.includes("xhigh");
  if (
    r.includes("claude-3-") ||
    r === "claude-opus-4-0" ||
    r === "claude-opus-4-1" ||
    r === "claude-opus-4-5" ||
    r === "claude-opus-4-6" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-sonnet-4-6" ||
    r === "claude-haiku-4-5"
  )
    return !1;
  if (mS(r, "xhigh_effort", e) || r === "claude-mythos-5") return !0;
  return eq(Od(e));
}
function le(e, n, r) {
  if (sTt("effort", r) === !1) return !1;
  let s = sTt(e, r);
  if (s === void 0) return;
  return s && Tw(n);
}
function De(e) {
  return ZSt(e);
}
function tH(e) {
  return jm() && (e === void 0 || De(e));
}
function Bm(e, n) {
  return e === !0 && tH(n);
}
function QQn(e, n, r) {
  if (n.sessionEffort?.kind === "level") {
    let s = n.sessionEffort.value;
    return !(r === s || (typeof r === "string" && Aw(r) && w7(r, e) === s));
  }
  return hV(e, ed(n)) !== hV(e, r);
}
function ZQn(e, n, r) {
  if (r.sessionEffort?.kind === "level" || typeof n !== "string") return !1;
  let s = Cw(e, ed(r, e)),
    f = Cw(e, ed(r, e, { withHold: !1 }), { carriedEffort: null });
  return l0(n) === s && s !== f;
}
function Aw(e) {
  return aa.includes(e);
}
function b(e) {
  return aa.indexOf(e);
}
var ewt = "high";
function gGr(e) {
  return Aw(e) && b(e) > b(ewt);
}
function hGr(e) {
  let n = Xe(e);
  return mS(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}
function ae(e) {
  let n = [...Gp(), ...Ro().map((f) => pe(f)), ...W()],
    r = n.some((f) =>
      Object.values(f?.modelSettings ?? {}).some((d) => d?.maxEffortLevel !== void 0)
    )
      ? gV(e)
      : void 0,
    s = null;
  for (let f of n) {
    if (!f) continue;
    let d;
    if (r !== void 0)
      for (let [u, E] of Object.entries(f.modelSettings ?? {})) {
        let m = E?.maxEffortLevel;
        if (m !== void 0 && (d === void 0 || b(m) < b(d)) && gV(u) === r) d = m;
      }
    if (((d ??= f.maxEffortLevel), d !== void 0 && d !== "max" && (s === null || b(d) < b(s))))
      s = d;
  }
  return s;
}
function wgn(e) {
  let n = ae(e),
    r = null,
    s = Ae();
  if (s === "firstParty" || s === "gateway") {
    let d = Xe(y0(e.trim().toLowerCase()), { identity: !0 }),
      u = QCe().find(
        (E) => Xe(y0(E.apiName.trim().toLowerCase()), { identity: !0 }) === d
      )?.maxEffortLevel;
    r = u != null && Aw(u) ? u : null;
  }
  let f = r === null ? n : n === null ? r : b(n) < b(r) ? n : r;
  return f === "max" ? null : f;
}
function oKe(e) {
  if (Ae() !== "firstParty") return null;
  let n = cEt();
  if (n === null) return null;
  let r = n.default_effort_level;
  if (r == null || !Aw(r)) return null;
  let s = Xe(y0(e.trim().toLowerCase()), { identity: !0 });
  return Xe(y0(n.name.trim().toLowerCase()), { identity: !0 }) === s ? r : null;
}
function yGr(e) {
  return cEt()?.override_user_effort === !0 && oKe(e) !== null;
}
function _Gr(e, n) {
  let r = wgn(n);
  return r === null || b(e) <= b(r);
}
function n_e(e) {
  return aa.filter((n) => _Gr(n, e));
}
function w7(e, n) {
  let r = wgn(n);
  return r !== null && b(e) > b(r) ? r : e;
}
function K(e, n) {
  if (n === "xhigh") return ZSt(e);
  if (n === "max") return Cce(e);
  return !0;
}
function dJs(e, n, r) {
  let s = n_e(e).filter((f) => f !== "max" && K(e, f));
  return r === 1 ? s.find((f) => b(f) > b(n)) : s.findLast((f) => b(f) < b(n));
}
function cJs(e) {
  let n = wgn(e);
  return n !== null && aa.some((r) => b(r) > b(n) && K(e, r));
}
function uJs(e, n) {
  if (typeof e !== "string" || !Aw(e)) return null;
  let r = wgn(n);
  if (r === null || b(e) <= b(r)) return null;
  let s = Cw(n, e) ?? r;
  return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}
var ge = { med: "medium" },
  Ee = { ultracode: "xhigh" };
function r_e(e) {
  if (typeof e !== "string") return;
  let n = e.trim().toLowerCase();
  return Object.hasOwn(Ee, n) ? n : void 0;
}
function sKe(e) {
  let n = r_e(e);
  return n === void 0 ? void 0 : Ee[n];
}
function JY(e) {
  return String(e);
}
function l0(e) {
  let n = e.trim().toLowerCase(),
    r = ge[n] ?? n;
  return Aw(r) ? r : void 0;
}
function twt(e) {
  let n = l0(e);
  if (n !== void 0) return { level: n, warning: void 0 };
  let r = r_e(e);
  if (r !== void 0) return { level: r, warning: void 0 };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${aa.join(", ")}.`
  };
}
function az(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && de(e)) return e;
  let n = String(e).toLowerCase(),
    r = ge[n] ?? n;
  if (Aw(r)) return r;
  let s = parseInt(n, 10);
  if (!isNaN(s) && de(s)) return s;
  return;
}
function tCe(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}
function nwt(e) {
  return pt().ultracode === !0 || r_e(e) === "ultracode";
}
function QA() {
  let e = i.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto" ? null : az(e);
}
var e7n = Object.freeze({ kind: "inherit" }),
  ke = Object.freeze({ kind: "default" });
function Xre(e) {
  return { kind: "level", value: e };
}
function rwt(e) {
  return e === void 0 ? ke : Xre(e);
}
function Fe(e) {
  return e === void 0 ? e7n : Xre(e);
}
function fJs(e) {
  return e.kind === "level" ? String(e.value) : null;
}
function t7n(e) {
  return typeof e === "string" && e !== "" && e.length <= X7s ? e : null;
}
function Rce(e, n) {
  return (
    e === n ||
    (e.kind === n.kind && (e.kind !== "level" || (n.kind === "level" && e.value === n.value)))
  );
}
var Te = new Set([
    "claude-3-5-haiku",
    "claude-3-5-sonnet",
    "claude-3-7-sonnet",
    "claude-haiku-4-5",
    "claude-sonnet-4-0",
    "claude-sonnet-4-5",
    "claude-sonnet-4-6",
    "claude-sonnet-5",
    "claude-opus-4-0",
    "claude-opus-4-1",
    "claude-opus-4-5",
    "claude-opus-4-6",
    "claude-opus-4-7",
    "claude-opus-4-8",
    "claude-opus-5",
    "claude-fable-5",
    "claude-fable-5-1",
    "claude-mythos-5",
    "claude-mythos-5-1"
  ]),
  fe = new Map();
function SGo(e) {
  let n = fe.get(e);
  if (n === void 0) ((n = Te.has(e) || !H0(Tc(e))), fe.set(e, n));
  return n;
}
function Ve() {
  let e = ue();
  if (e.firstStartVersion !== void 0) return [];
  let n = [];
  if (!e.unpinOpus47LaunchEffort) n.push("claude-opus-4-7");
  if (!e.unpinOpus48LaunchEffort) n.push("claude-opus-4-8");
  if (!e.unpinFable5LaunchEffort) {
    n.push("claude-fable-5");
    let r = i.ANTHROPIC_DEFAULT_FABLE_MODEL;
    if (r && !lKe(Xe($t(r), { deterministic: !0, identity: !0 }))) n.push(gV(r));
  }
  return n;
}
function vgn() {
  let e = new Set(),
    n = [];
  for (let r of Ro()) {
    if (r === "flagSettings") {
      let [d, u] = W();
      if (d !== void 0) n.push({ source: "projectSettings", settings: d });
      if (u !== void 0) n.push({ source: "localSettings", settings: u });
    }
    let s = ln(r);
    if (s !== void 0) {
      let d = Oe(s);
      if (e.has(d) && r !== "flagSettings") continue;
      e.add(d);
    }
    let f = pe(r);
    if (f !== void 0 && f !== null) n.push({ source: r, settings: f });
  }
  return n;
}
function lGt() {
  let e = vgn(),
    n = cEt(),
    r = n !== null && yGr(n.name) ? gV(n.name) : void 0,
    s,
    f,
    d = [];
  for (let { source: S, settings: v } of e) {
    let y = v.effortLevel !== void 0;
    if (S === "userSettings") {
      ((s = tCe(v.effortLevel)), d.push({ source: S, setsTopLevel: !1, settings: v }));
      continue;
    }
    if (y) f = { level: tCe(v.effortLevel) };
    d.push({ source: S, setsTopLevel: y, settings: v });
  }
  d.reverse();
  let u = d.map(({ settings: S }) => {
      let v = new Map();
      for (let [y, C] of Object.entries(S.modelSettings ?? {})) {
        let c = C?.effortLevel;
        if (c === void 0) continue;
        let h = gV(y);
        if (y === h || !v.has(h)) v.set(h, c);
      }
      return v;
    }),
    E = new Set();
  if (r !== void 0) E.add(r);
  for (let S of u) for (let v of S.keys()) E.add(v);
  let m = {};
  for (let S of E) {
    if (S === r) m[S] = void 0;
    for (let v = 0; v < d.length; v++) {
      if (S === r && !Ue(d[v].source)) continue;
      let y = u[v].get(S);
      if (y !== void 0) {
        m[S] = tCe(y);
        break;
      }
      if (d[v].setsTopLevel) {
        m[S] = tCe(d[v].settings.effortLevel);
        break;
      }
    }
  }
  if (f !== void 0) s = void 0;
  if (s !== void 0) {
    for (let S of Ve())
      if (!Object.hasOwn(m, S) && !Object.hasOwn(Object.prototype, S)) m[S] = void 0;
  }
  return { default: f?.level, legacyUserEffort: s, byModel: m };
}
function Ue(e) {
  return e === "policySettings" || e === "flagSettings";
}
function n7n(e) {
  if (!yGr(e)) return null;
  return w$(I(bGr(lGt(), e) ?? o7n(e), e));
}
function bGr(e, n) {
  let r = gV(n);
  if (Object.hasOwn(e.byModel, r)) return e.byModel[r];
  if (e.default !== void 0 || e.legacyUserEffort === void 0) return e.default;
  return SGo(r) ? e.legacyUserEffort : void 0;
}
function Be(e) {
  if (e.legacyUserEffort !== void 0) return !1;
  for (let n in e.byModel) return !1;
  return !0;
}
function gV(e) {
  return Ot(Xe(EVe(e), { deterministic: !0, identity: !0 }));
}
function Ie(e, n) {
  return wGo(e, { effortLevel: n }, { effortLevel: n });
}
function wGo(e, n, r) {
  let s = gV(e);
  return Object.hasOwn(Object.prototype, s) ? r : { modelSettings: { [s]: n } };
}
function pJs(e) {
  let n = gn()?.accountUuid;
  return n !== void 0 && Z(ue(), n, e);
}
function ed(e, n, { withHold: r = !0 } = {}) {
  let s = e.sessionEffort ?? e7n;
  switch (s.kind) {
    case "level":
      return s.value;
    case "default":
      return;
    case "inherit": {
      if (e.settingsEffortTable === void 0) return;
      if (Be(e.settingsEffortTable) && !se()) return e.settingsEffortTable.default;
      let f = n ?? $t(e.mainLoopModelForSession ?? e.mainLoopModel ?? fd());
      return r && dGt(f) !== void 0 ? void 0 : bGr(e.settingsEffortTable, f);
    }
  }
}
function r7n(e, n) {
  return gV(e) === gV(n);
}
function mJs(e, n) {
  return ed(vGo(e), n, { withHold: !1 });
}
function vGo(e) {
  return e.sessionEffort?.kind === "level" ? { ...e, sessionEffort: e7n } : e;
}
function owt(e) {
  return e.kind === "level" && typeof e.value === "string" ? e.value : void 0;
}
function Cw(e, n, { turnEffort: r, hookEffortValue: s, carriedEffort: f = R(e) } = {}) {
  if (!Tw(e)) return;
  let d = ae(e) !== null;
  if (s !== void 0) {
    let S = typeof s === "number" && d ? w$(s) : s;
    return I(S, e);
  }
  let u = QA();
  if (u === null && !d) return;
  let E = o7n(e, f),
    m = u ?? (u === null ? E : void 0) ?? r ?? n ?? E;
  if (typeof m === "number" && d) m = w$(m);
  return I(m, e);
}
function Egn(e, n) {
  if (!Tw(e) || QA() !== void 0) return;
  if (typeof n === "string") return w7(n, e);
  if (n === void 0 && oKe(e)) return v7(e);
  return;
}
function I(e, n) {
  let r = e;
  if (typeof r === "string" && Aw(r)) r = w7(r, n);
  if (r === "max" && !Cce(n)) r = "high";
  if (r === "xhigh" && !ZSt(n)) r = "high";
  return r;
}
function v7(e) {
  return w$(I(o7n(e), e));
}
function EGo(e) {
  return Ptr(e, Xe(e));
}
function iKe(e, n, r, s, f) {
  if (!f) return !1;
  let d = ly();
  if (d === 0 || d === s) return !1;
  if (!Tw(r)) return !1;
  if (typeof Cw(r, e) !== "number" && typeof Cw(r, n) !== "number" && EGo(r)) return !1;
  if (Cw(r, e, { carriedEffort: null }) === Cw(r, n)) return !1;
  if (ll() && e !== void 0 && tCe(typeof e === "string" ? w7(e, r) : e) === void 0) return !1;
  return !0;
}
async function He(e, n, r) {
  return Un("userSettings", Ie(n, e), void 0, r);
}
async function E7(e, n, r = !0, s) {
  let f = e !== void 0 ? tCe(e) : void 0;
  if (r && (e === void 0 || f !== void 0) && !tr()) {
    let d = await He(f, n, s);
    if (d.error) return d.error;
  }
  return;
}
function swt(e) {
  let n = { sessionEffort: Fe(fGr(e)), settingsEffortTable: lGt() };
  return (vTn(n), n);
}
function aKe(e, n, r) {
  let s = Cw(e, n, { turnEffort: r });
  return s === void 0 ? void 0 : w$(s);
}
function hV(e, n, r) {
  return aKe(e, n, r) ?? "high";
}
function s_(e, n, r) {
  return Tw(e) ? hV(e, n, r) : void 0;
}
function kgn(e, n, r) {
  if (n === void 0 && r === void 0) return "";
  let s = Cw(e, n, { turnEffort: r });
  if (s === void 0) return "";
  return ` with ${JY(w$(s))} effort`;
}
function de(e) {
  return Number.isInteger(e);
}
function w$(e) {
  if (typeof e === "string") return Aw(e) ? e : "high";
  return "high";
}
function je(e) {
  switch (e) {
    case "low":
      return "Quick, straightforward implementation with minimal overhead";
    case "medium":
      return "Balanced approach with standard implementation and testing";
    case "high":
      return "Comprehensive implementation with extensive testing and documentation";
    case "xhigh":
      return "Deeper reasoning than high, just below maximum (on supported models)";
    case "max":
      return `Maximum capability with deepest reasoning. ${Vj}`;
  }
}
function kGo(e) {
  if (typeof e === "string") {
    let n = je(e);
    if (e === "high" && I0e() && k("tengu_slate_finch", !1))
      return `${n} \xB7 burns fastest \u2014 medium handles most tasks`;
    return n;
  }
  return "Balanced approach with standard implementation and testing";
}
function o7n(e, n) {
  let r = X(e);
  return (r === void 0 ? n : void 0) ?? oKe(e) ?? r ?? Je(e) ?? We(e) ?? Ye(e);
}
function We(e) {
  let n = nd(e)?.default_effort;
  return typeof n === "string" && Aw(n) && K(e, n) ? n : void 0;
}
function dGt(e) {
  let n = R(e);
  return n !== void 0 && X(e) === void 0 ? n : void 0;
}
function gJs(e) {
  return oKe(e) !== null || X(e) !== void 0 || R(e) !== void 0;
}
var Ge = "tengu_witty_wand",
  $e = p(() => me(o(), oe()));
function X(e) {
  let n = k(Ge, {});
  if (typeof n === "string") n = ot(n, !1);
  let r = $e().safeParse(n);
  if (!r.success) return;
  let s = r.data[Ot(Xe(e))],
    f = typeof s === "string" ? s.trim().toLowerCase() : void 0;
  return f !== void 0 && Aw(f) ? f : void 0;
}
function Je(e) {
  let n = Pei(e, Xe(e));
  return n !== void 0 && Aw(n) ? n : void 0;
}
function Ye(e) {
  return xl(Xe(e))?.default_effort ?? "high";
}
export {
  JSt,
  uGr,
  QXs,
  ZXs,
  e_e,
  fGr,
  pGr,
  eJs,
  vLe,
  mGr,
  tJs,
  mGo,
  gGo,
  nJs,
  VQn,
  aGt,
  hGo,
  qQn,
  YQn,
  rJs,
  oJs,
  yGo,
  QSt,
  bgn,
  XY,
  sJs,
  Sgn,
  _Go,
  bGo,
  XQn,
  iJs,
  JQn,
  aJs,
  lJs,
  t_e,
  Tw,
  Cce,
  ZSt,
  tH,
  Bm,
  QQn,
  ZQn,
  Aw,
  ewt,
  gGr,
  hGr,
  wgn,
  oKe,
  yGr,
  _Gr,
  n_e,
  w7,
  dJs,
  cJs,
  uJs,
  r_e,
  sKe,
  JY,
  l0,
  twt,
  az,
  tCe,
  nwt,
  QA,
  e7n,
  Xre,
  rwt,
  fJs,
  t7n,
  Rce,
  SGo,
  vgn,
  lGt,
  n7n,
  bGr,
  gV,
  wGo,
  pJs,
  ed,
  r7n,
  mJs,
  vGo,
  owt,
  Cw,
  Egn,
  v7,
  EGo,
  iKe,
  E7,
  swt,
  aKe,
  hV,
  s_,
  kgn,
  w$,
  kGo,
  o7n,
  dGt,
  gJs
};

//# sourceMappingURL=chunk-hhgrzgnb.js.map
