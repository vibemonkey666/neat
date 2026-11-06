import {
  fileURLToPath as __sourceFilePath_5a5b5af9c0a4635b,
  URL as __sourceFilePath_5a5b5af9c0a4635b_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { st, _0, k4o, ra, sA, uo, Ar, UV, k, Lz, d5o } from "./chunk-ajtyjx88.js";
import { De } from "./chunk-2qx8pe6s.js";
import { OR, L, U, ci, ye, mrs, hrs, _rs, OB, KSe, dF, hos, Pn } from "./chunk-wrtp8qz8.js";
import { b, c, ce, Ka } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { Po, ie, t } from "./chunk-4kxznmzw.js";
import { va } from "./chunk-a16y5hcz.js";
import { O } from "./chunk-19xvg81r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { Pl } from "./chunk-xe386mry.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Uu } from "./chunk-4nzy53ma.js";
import { ql, _qt, JNe } from "./chunk-5rw2zfa0.js";
import { Is, Ro, Tb } from "./chunk-1e5yp9hx.js";
import { Ny, fh, Wbe } from "./chunk-63a6mqbs.js";
import { gc, Cse, Tv, Bn, dn, Zj, Su } from "./chunk-9z5ybxhe.js";
import { Nr } from "./chunk-928ws1pg.js";
import { ln, pe, pr, ek, tqt, R9o, nTt } from "./chunk-7c3thgax.js";
import { a4t } from "./chunk-tcvjb2c0.js";
import {
  mI,
  Wf,
  Bbn,
  G5o,
  K5o,
  jbn,
  Uue,
  V5o,
  rYr,
  H5,
  iqe,
  oYr,
  Orr,
  at,
  qt,
  Be,
  At
} from "./chunk-at88wjsn.js";
import { rf } from "./chunk-r00j5r9s.js";
import { QZe, Ju } from "./chunk-d5zj5299.js";
import { Lg, Jv, vd, nS, nR } from "./chunk-wany0nxw.js";
import { ag, VD, LXn, Eet } from "./chunk-krgv9fvy.js";
import { e_e, pGr, eJs, vLe, yGo, bgn } from "./chunk-hhgrzgnb.js";
import { Jjr, Sjo, Qjr, Zjr, wJn, _ce, YD, B2e, Pd, hu } from "./chunk-39ayby14.js";
import { ALo, d2s, scn, w$r, P5n, v$r, pBt } from "./chunk-ybr49gcx.js";
import { xce } from "./chunk-crvt0hax.js";
import { sxr, lxr, nMe, yTo, P3, EK, Y0t, n2n, X0t, r2n, MAo, ob, gO } from "./chunk-j0tbz6ra.js";
import { mTs, e$n } from "./chunk-7dgevdgb.js";
import { Yve, Xve } from "./chunk-2kejgqna.js";
import { XT } from "./chunk-2mkstff3.js";
import { gr } from "./chunk-z2vz1f06.js";
import { qe } from "./chunk-0np0053t.js";
import { H } from "./chunk-p8tprgqa.js";
import { z } from "./chunk-p197ae0z.js";
import { relative as Fe, resolve as ge } from "path";
var Le = new W(() => De());
function xe() {
  return Le.of(U().host);
}
var wN = OR(xe);
function Y(e) {
  if (Is.includes(e)) {
    let s = ln(e);
    if (s) {
      let o = Pl(),
        l = o === null ? s : Fe(o, s);
      return l.length < s.length ? l : s;
    }
  }
  return e;
}
function oTs(e, s) {
  let o = [];
  for (let l of e)
    if (l.ruleBehavior === "allow" && _ce(l.ruleValue.toolName, l.ruleValue.ruleContent)) {
      let n = l.ruleValue.ruleContent
        ? `${l.ruleValue.toolName}(${l.ruleValue.ruleContent})`
        : `${l.ruleValue.toolName}(*)`;
      o.push({
        ruleValue: l.ruleValue,
        source: l.source,
        ruleDisplay: n,
        sourceDisplay: Y(l.source)
      });
    }
  for (let l of s) {
    let n = Bn(l);
    if (_ce(n.toolName, n.ruleContent))
      o.push({
        ruleValue: n,
        source: "cliArg",
        ruleDisplay: n.ruleContent ? `${n.toolName}(${n.ruleContent})` : `${n.toolName}(*)`,
        sourceDisplay: "--allowed-tools"
      });
  }
  return o;
}
var qNn = `--allow-dangerously-skip-permissions ignored: ${yGo}`,
  $e = [...Sjo, ...Qjr, ...Zjr];
function G(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}
function Ie(e) {
  return !1;
}
function Ve(e) {
  if (e.toolName === At) return "powershell";
  let s = e.ruleContent;
  if (s === void 0 || G(s)) return "bare";
  if (wJn(s, Zjr)) return "cluster";
  if (wJn(s, Qjr)) return "network";
  return "ace";
}
function sTs(e, s = !1) {
  {
    let { APPIFACT_REPL_TOOL_NAME: l } = import.meta.require(
      __sourceFilePath_5a5b5af9c0a4635b(
        new __sourceFilePath_5a5b5af9c0a4635b_URL("./chunk-ttpzppxt.js", import.meta.url)
      )
    );
    if (e.toolName === l) return G(e.ruleContent);
  }
  if (e.toolName !== Be) return !1;
  let o = e.ruleContent;
  if (o === void 0 || G(o) || Ie(o)) return !0;
  return s && wJn(o, $e);
}
function me(e) {
  return e.toolName === Be && e.ruleContent === void 0;
}
function iTs(e) {
  return e.toolName === At && G(e.ruleContent);
}
function dhi() {
  let e = k("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return !1;
  let s = i.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(s);
  return !(e.excludeEntrypoints ?? []).includes(s);
}
function aTs(e, s, o = !1) {
  let l = [];
  for (let n of e)
    if (n.ruleBehavior === "allow" && sTs(n.ruleValue, o))
      l.push({
        ruleValue: n.ruleValue,
        source: n.source,
        ruleDisplay: n.ruleValue.ruleContent
          ? `${n.ruleValue.toolName}(${n.ruleValue.ruleContent})`
          : `${n.ruleValue.toolName}(*)`,
        sourceDisplay: Y(n.source)
      });
  for (let n of s) {
    let u = Bn(n);
    if (sTs(u, o))
      l.push({
        ruleValue: u,
        source: "cliArg",
        ruleDisplay: u.ruleContent ? `${u.toolName}(${u.ruleContent})` : `${u.toolName}(*)`,
        sourceDisplay: "--allowed-tools"
      });
  }
  return l;
}
function lTs(e, s) {
  let o = [];
  for (let l of e)
    if (l.ruleBehavior === "allow" && iTs(l.ruleValue))
      o.push({
        ruleValue: l.ruleValue,
        source: l.source,
        ruleDisplay: `${At}(*)`,
        sourceDisplay: Y(l.source)
      });
  for (let l of s) {
    let n = Bn(l);
    if (iTs(n))
      o.push({
        ruleValue: n,
        source: "cliArg",
        ruleDisplay: `${At}(*)`,
        sourceDisplay: "--allowed-tools"
      });
  }
  return o;
}
function wEr(e) {
  return [];
}
function Ue(e) {
  return Tb.includes(e) || e === "session" || e === "cliArg";
}
function chi(e, s, o = !1) {
  let l = new Map();
  for (let u of s) {
    if (!o && !Ue(u.source)) continue;
    let p = u.source,
      d = l.get(p) || [];
    (d.push(u.ruleValue), l.set(p, d));
  }
  let n = e;
  for (let [u, p] of l)
    n = Ju(n, { type: "removeRules", rules: p, behavior: "allow", destination: u });
  return n;
}
function f4(e) {
  let s = B2e(e.alwaysAllowRules, "allow"),
    o = oTs(s, []);
  if (o.length === 0)
    return e.strippedDangerousRules !== void 0 ? e : { ...e, strippedDangerousRules: {} };
  for (let n of o)
    t(
      `Ignoring dangerous permission ${n.ruleDisplay} from ${n.sourceDisplay} (bypasses classifier)`
    );
  let l = {};
  for (let [n, u] of Object.entries(e.strippedDangerousRules ?? {})) if (u) l[n] = [...u];
  for (let n of o) {
    let u = dn(n.ruleValue),
      p = (l[n.source] ??= []);
    if (!p.includes(u)) p.push(u);
  }
  return { ...chi(e, o, !0), strippedDangerousRules: l };
}
function Zmo(e, s, o = []) {
  let l = { ...e, toolAliases: s };
  if (!k("tengu_sorted_zebra", !1)) return l;
  for (let [n, u] of Object.entries(s ?? {})) {
    if (n.startsWith("mcp__") || !_ce(n, void 0)) continue;
    let p = typeof u === "string" ? Nr(u) : null;
    if (p?.toolName) {
      (Jjr(p.serverName, [p.toolName]), g("auto_mode_tool_alias"));
      continue;
    }
    let d = i.CLAUDE_AGENT_SDK_MCP_NO_PREFIX && typeof u === "string" && u !== "" && p === null;
    if (d && o.length > 0) {
      for (let h of o) Jjr(h, [u]);
      g("auto_mode_tool_alias");
      continue;
    }
    (f("auto_mode_tool_alias", d ? "no_sdk_server" : "target_not_mcp_tool"),
      t(
        `Auto mode: toolAliases maps ${n} to ${typeof u === "string" ? u : `a value of type ${typeof u}`}, ${d ? "and no SDK MCP server is registered that could hold it" : "which is not of the form mcp__<server>__<tool>"}, so an allow rule for that tool still runs its calls without the classifier's check`,
        { level: "warn" }
      ));
  }
  return vEr(l);
}
function ego(e) {
  let s = H(e),
    o = new Map(),
    l = s ? 0 : 1;
  for (let [n, u] of s ? Object.entries(e) : []) {
    if (n === "" || n.startsWith("mcp__") || !Array.isArray(u)) {
      l++;
      continue;
    }
    for (let p of u)
      if (typeof p === "string" && p !== "" && !p.startsWith("mcp__")) {
        Jjr(n, [p]);
        let d = o.get(n) ?? [];
        if (!d.includes(p)) d.push(p);
        o.set(n, d);
      } else l++;
  }
  if (o.size > 0) g("auto_mode_code_running_mcp_tools");
  if (l > 0)
    (f("auto_mode_code_running_mcp_tools", "malformed_entry"),
      t(
        `Auto mode: ignored ${l} malformed ${l === 1 ? "part" : "parts"} of codeRunningMcpTools, which should map each MCP server name to a list of tool names, e.g. {"workspace": ["bash"]}. In auto mode, allow rules and hooks can still approve calls to the tools meant there without the classifier.`,
        { level: "warn" }
      ));
  return Object.fromEntries(o);
}
function vEr(e) {
  return e.strippedDangerousRules === void 0 ? e : f4(e);
}
function Hve(e) {
  let s = e.strippedDangerousRules;
  if (!s) return e;
  let o = e;
  for (let [l, n] of Object.entries(s)) {
    if (!n || n.length === 0) continue;
    let u = l === "command" ? n.filter((p) => !yTo(p)) : [...n];
    if (u.length === 0) continue;
    o = Ju(o, { type: "addRules", rules: u.map(Bn), behavior: "allow", destination: l });
  }
  return { ...o, strippedDangerousRules: void 0 };
}
function tgo(e, s) {
  return {
    ...s,
    mode: e.mode,
    prePlanMode: e.prePlanMode,
    startupModeDecidedByProactivityLevel: e.startupModeDecidedByProactivityLevel,
    alwaysAllowRules: fe(e.alwaysAllowRules, s),
    strippedDangerousRules: e.strippedDangerousRules && fe(e.strippedDangerousRules, s)
  };
}
function fe(e, s) {
  let o = Object.keys(e).reduce(
    (l, n) => {
      let u = s.strippedDangerousRules?.[n] ?? [],
        p = new Set([
          ...(s.alwaysAllowRules[n] ?? []),
          ...(n === "command" ? u.filter((_) => !yTo(_)) : u)
        ]),
        d = e[n] ?? [],
        h = d.filter((_) => p.has(_));
      return ((l.rules[n] = h), (l.dropped ||= h.length !== d.length), l);
    },
    { rules: {}, dropped: !1 }
  );
  return o.dropped ? o.rules : e;
}
function _L(e, s, o, l) {
  if (e === s) return o;
  if (o.startupModeDecidedByProactivityLevel !== void 0)
    o = { ...o, startupModeDecidedByProactivityLevel: void 0 };
  if (
    (iqe(void 0),
    xce({ from: e, to: s, trigger: l }),
    KSe(e, s),
    hos(e, s),
    e === "plan" && s !== "plan")
  )
    OB(!0);
  if (s === "plan" && e !== "plan") return AMt(o);
  let n = e === "auto" || (e === "plan" && Wf()),
    u = s === "auto";
  if (u && !n) {
    if (!ob()) throw Error("Cannot transition to auto mode: gate is not enabled");
    (mI(!0), (o = f4(o)));
  } else if (n && !u) (mI(!1), dF(!0), (o = Hve(o)));
  if (e === "plan" && s !== "plan" && o.prePlanMode) return { ...o, prePlanMode: void 0 };
  return o;
}
async function ngo() {
  return !1;
}
var We = {
  settings: "auto_mode_settings",
  "circuit-breaker": "auto_mode_circuit_breaker",
  "fast-mode": "auto_mode_fast_mode",
  model: "auto_mode_model",
  [Y0t]: "auto_mode_unavailable"
};
function gte(e, s) {
  let o = fh(e);
  if (o === void 0) return { ok: !1, error: Wbe, code: "invalid_mode" };
  if (o === "bypassPermissions") {
    if (s.restricted) return { ok: !1, error: ALo, code: "bypass_restricted" };
    if (XT())
      return {
        ok: !1,
        error:
          "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
        code: "bypass_disabled"
      };
    if (!s.isBypassPermissionsModeAvailable)
      return {
        ok: !1,
        error:
          "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
        code: "bypass_not_launched"
      };
  }
  if (o === "auto" && !ob()) return EEr(gO());
  return { ok: !0, mode: o };
}
function EEr(e) {
  return {
    ok: !1,
    error: e
      ? `Cannot set permission mode to auto: ${Cae(e)}`
      : "Cannot set permission mode to auto",
    code: e ? We[e] : "auto_mode_unavailable"
  };
}
function RA(e, s, o, l) {
  let n = gte(e, s);
  if (!n.ok) return n;
  let u = n.mode,
    p;
  if (
    (o((d) => {
      if (d.mode === u) return d;
      if (d !== s) {
        let _ = gte(u, d);
        if (!_.ok) return ((p = _), d);
      }
      return { ..._L(d.mode, u, d, l), mode: u };
    }),
    p !== void 0)
  )
    return p;
  return (
    setImmediate(() => {
      wN.emit();
    }),
    { ok: !0, mode: u }
  );
}
function rgo(e, s) {
  let o = s.context.mode;
  if (!gte(o, e).ok) return s.context;
  _L(e.mode, o, e);
  let l = s.autoModeActive && ob() && (o === "auto" || (o === "plan" && xEr()));
  if (Wf() !== l) (mI(l), dF(!l));
  return (
    setImmediate(() => {
      wN.emit();
    }),
    s.autoModeActive && !l ? Hve(s.context) : s.context
  );
}
function dTs(e) {
  let s = [],
    o = new Set(),
    l = !1,
    n = [],
    u = [],
    p = k("tengu_tools_exclusion_killswitch", !1);
  for (let d = 0; d < e.length; d++) {
    let h = e[d];
    if (h === void 0) continue;
    if (!h.startsWith(Zj)) {
      s.push(h);
      continue;
    }
    let _ = h.slice(Zj.length);
    if (_ === "") {
      let A = e[d + 1];
      if (A === void 0 || A.startsWith(Zj) || A.startsWith("(")) {
        l = !0;
        continue;
      }
      if ((d++, !p)) n.push(A);
      ((h = Zj + A), (_ = A));
    }
    let E = _.indexOf("(");
    if (E === 0) {
      l = !0;
      continue;
    }
    if (E > 0) {
      if (((_ = _.slice(0, E)), !p)) u.push(h);
    }
    if (!p) o.add(gc(_));
  }
  return { kept: s, excluded: o, bare: l, detached: n, scoped: u };
}
function uhi(e, s) {
  let o = e.join(" ").trim();
  if (w$r(o)) return v$r(s());
  let { kept: n, excluded: u } = dTs(Su(e)),
    p = n.includes("preset:default")
      ? s()
          .map((d) => d.name)
          .concat(n.filter((d) => d !== "preset:default"))
      : n;
  if (u.size === 0) return p;
  return p.filter((d) => !u.has(gc(d)));
}
var Pe = [Be, At, uo, Ar];
function fhi({ baseToolsCli: e, baseToolsIsPreset: s, parsedBaseTools: o, getAllBaseTools: l }) {
  let n = [],
    u = [],
    p = uhi(e, l),
    d = new Set(p.map(gc)),
    h = l(),
    _ = s ? null : h,
    E = _ === null ? v$r(h) : _.map((m) => m.name),
    { excluded: A } = o;
  for (let m of _ ?? l())
    if (m.familyParentToolName !== void 0 && A.has(m.familyParentToolName)) d.delete(m.name);
  for (let m of h)
    if (m.familyParentToolName !== void 0 && d.has(m.familyParentToolName)) d.add(m.name);
  if (Lg.some((m) => d.has(m))) d.add(nS);
  for (let m of A) d.delete(m);
  if (A.has(Be)) for (let m of pBt()) d.delete(m);
  let S = E.filter((m) => !d.has(m));
  for (let m of A) {
    if (E.includes(m)) continue;
    if (nMe.has(m)) {
      t(`--tools exclusion names a removed tool: ${m}`);
      continue;
    }
    if ((S.push(m), Pe.includes(m))) continue;
    (n.push(
      `--tools entry "${Zj}${m}" matches no built-in tool \u2014 check for typos. An MCP tool with exactly that name is still withheld.`
    ),
      u.push(`--tools "${Zj}${m}" matches no tool \xB7 check for typos`));
  }
  for (let m of o.scoped)
    n.push(
      `--tools entry "${m}" names a rule, not a tool; the whole tool is withheld. Write "${Zj}${m.slice(Zj.length, m.indexOf("("))}" to say so.`
    );
  for (let m of o.detached)
    n.push(
      `--tools entry "${Zj} ${m}" was read as "${Zj}${m}" and ${m} is withheld; write it without the space.`
    );
  if (o.bare)
    (n.push(
      `--tools has a "${Zj}" with no tool name after it; write the name right after it, as in "${Zj}Bash".`
    ),
      u.push(`--tools has a "${Zj}" with no tool name \xB7 write "${Zj}Bash"`));
  if (!s) {
    for (let m of [...(O() === "windows" ? [At] : []), uo, Ar])
      if (!d.has(m) && !S.includes(m)) S.push(m);
  }
  return {
    toolsToDisallow: S,
    toolsKept: s || o.kept.includes("preset:default") ? void 0 : d,
    warnings: n,
    securityWarnings: u
  };
}
function je({ processPwd: e, originalCwd: s }) {
  let { resolvedPath: o, isSymlink: l } = Po(ie(), e);
  return l ? o === ge(s) : !1;
}
function ogo({
  permissionModeCli: e,
  inheritPermissionModeCli: s,
  dangerouslySkipPermissions: o,
  allowDangerouslySkipPermissions: l,
  bypassPermissionsBlockedByHost: n,
  agentPermissionMode: u,
  proactivityLevel: p
}) {
  let d = Ny(e),
    h = Ny(s),
    _ = mTs(Boolean(o || l)),
    E = e$n();
  if (rf()) {
    let y = o || (d && d !== "default") || (h && h !== "default") || (u && u !== "default"),
      C =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (y)
      process.stderr.write(`\u26A0 ${C}
`);
    return { mode: "default", notification: y ? C : void 0, modeSuppliedOnInvocation: !0 };
  }
  let S = {
      cli: {
        permissionMode:
          E === !0 && p !== void 0 && d !== void 0 && vLe(p, d, void 0) !== void 0 ? void 0 : d,
        inheritPermissionMode: h,
        dangerouslySkipPermissions: o,
        allowDangerouslySkipPermissions: l,
        bypassPermissionsBlockedByHost: n,
        isNonInteractiveSession: ye()
      },
      env: { ...process.env, CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0 },
      settings: pr() || {},
      agentFrontmatter: u ? { permissionMode: u } : void 0,
      proactivityLevel: E === !1 ? void 0 : p
    },
    m = pGr(S);
  (rYr(m.fromAutoFallback), oYr(m.autoStartWithheldForHipaaTaint));
  let N = !ye() && UV(),
    M = m.autoDefaultWithheldForPendingVerdict;
  iqe(
    !m.modeSuppliedOnInvocation && (N || M)
      ? { mode: m.mode, inputs: S, awaitsGrowthBook: N, awaitsPolicyVerdict: M }
      : void 0
  );
  let D;
  {
    let y = m.decidedByProactivityLevel || (E === !0 && p !== void 0);
    D = {
      proactivityBaseline: { mode: _ ?? m.baselineMode, fromRelaunchHandoff: _ !== void 0 },
      startupModeDecidedByProactivityLevel: y ? p : void 0
    };
  }
  if (m.mode === "auto") mI(!0);
  let R = d ?? h ?? u ?? S.settings.permissions?.defaultMode,
    F = n2n() && m.mode === "default" && (R === void 0 || R === "auto");
  return {
    mode: m.mode,
    notification: m.notification ?? void 0,
    proactivity: D,
    modeSuppliedOnInvocation: m.modeSuppliedOnInvocation
  };
}
function kEr() {
  return i.CLAUDE_CODE_SESSION_KIND !== "bg";
}
function phi(e) {
  return e === "cliArg" && kEr();
}
function TEr() {
  return (
    i.CLAUDE_CHROME_CLASSIFIER_FLOOR ??
    (i.CLAUDE_CODE_REMOTE
      ? gr("tengu_cowork_chrome_automode_default", { safe: !0 })
      : k("tengu_cowork_chrome_automode_default", !1))
  );
}
async function sgo({
  allowedToolsCli: e,
  disallowedToolsCli: s,
  baseToolsCli: o,
  getAllBaseTools: l,
  restricted: n = !1,
  permissionMode: u,
  allowDangerouslySkipPermissions: p,
  addDirs: d,
  bgSessionPermissionRules: h,
  relaunchSessionAddDirs: _,
  storageV5: E
}) {
  let A = [],
    S = [],
    m = null,
    N = u === "bypassPermissions" || p,
    M = Su(e)
      .map((r) => dn(Bn(r)))
      .filter((r) => {
        let P = _qt(Bn(r).toolName);
        if (P)
          return (A.push(`Ignoring --allowedTools rule "${r}": ${P.error}. ${P.suggestion}.`), !1);
        return !0;
      }),
    D = L([...Su(s), ...P3()]),
    R = !!o && o.length > 0 && w$r(o.join(" ").trim()) !== null,
    F =
      o && !R ? dTs(Su(o)) : { kept: [], excluded: new Set(), bare: !1, detached: [], scoped: [] },
    y = F.kept.map(gc).filter((r) => !F.excluded.has(r)),
    C = !!o?.length && !R && y.length === 0,
    ee = (r) => y.includes(r) || M.some((P) => Bn(P).toolName === r);
  (mrs([uo, Ar].some(ee)), hrs(sxr.some(ee)));
  let V = [],
    oe = [],
    q,
    te = new Set();
  if (o && o.length > 0) {
    let r = fhi({ baseToolsCli: o, baseToolsIsPreset: R, parsedBaseTools: F, getAllBaseTools: l });
    (A.push(...r.warnings),
      S.push(...r.securityWarnings),
      (V = r.toolsToDisallow),
      (oe = C ? [] : r.toolsToDisallow),
      (q = r.toolsKept));
  }
  if (n) {
    let r = scn(P5n(l()), d2s(y));
    for (let P of r) te.add(P);
    V = L([...V, ...r]);
  }
  _rs(oe.filter((r) => !te.has(r)));
  let se = new Map(),
    j = i.PWD,
    K = j ? ci() : null;
  if (j && K !== null && j !== K && je({ originalCwd: K, processPwd: j }))
    se.set(j, { path: j, source: "session" });
  let ne = (pr() || {}).permissions?.disableBypassPermissionsMode === "disable",
    Z = p && u !== "bypassPermissions" && !ne && !n && bgn("bypassPermissions");
  if (Z) (a("tengu_bg_allow_bypass_unconsented_ignored", {}), A.push(qNn));
  let _e = (u === "bypassPermissions" || (p && !Z)) && !ne && !n && !0,
    re =
      z() && E !== void 0 && E.hostFiles.serving("workspace") === "host"
        ? { strictPersistedTrust: await d5o(E) }
        : {},
    I = VD(re),
    X = [...D, ...V].map(Bn),
    Me = X.some(me),
    Se =
      X.some((r) => r.toolName === Be) ||
      I.some((r) => r.ruleBehavior === "deny" && r.ruleValue.toolName === Be),
    Te =
      i.CLAUDE_CODE_USE_POWERSHELL_TOOL ||
      Su(o ?? [])
        .map(gc)
        .includes(At) ||
      M.some((r) => Bn(r).toolName === At) ||
      X.some((r) => r.toolName === At) ||
      I.some((r) => r.ruleValue.toolName === At);
  if (O() === "windows" && vd() && Se && !Te) {
    D = [...D, At];
    let r = I.filter((P) => P.ruleBehavior === "deny" && me(P.ruleValue));
    if (Jv() && (Me || r.length > 0) && !r.some((P) => P.source === "policySettings"))
      A.push(
        `Denying ${Be} also turns off the ${At} tool, so Claude has neither. To use ${At}, set CLAUDE_CODE_USE_POWERSHELL_TOOL=1.`
      );
  }
  let ae = [];
  if (!i.CLAUDE_CODE_REMOTE && i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let r = [...aTs(I, M, !0), ...lTs(I, M)];
    if (r.length > 0) {
      let P = r.map((x) => Ve(x.ruleValue)),
        T = !1,
        w = !1;
      a("tengu_ant_overly_broad_bash_detected", {
        count: r.length,
        categories: Ka(L(P)),
        yoloEquivEnabled: T,
        willStrip: ae.length,
        entrypoint: ce(Uu()) ?? b("other"),
        ...!1
      });
    }
  }
  let le = [];
  if (u === "auto") le = oTs(I, M);
  let Q = ag();
  if (Q && M.length > 0)
    A.push(
      `Ignoring --allowedTools ${M.join(", ")}: permission rules are restricted to managed settings (allowManagedPermissionRulesOnly).`
    );
  let v = EK(
      {
        mode: u,
        additionalWorkingDirectories: se,
        alwaysAllowRules: { cliArg: Q ? [] : M, ...(h && { session: Q ? [] : h.allow }) },
        alwaysDenyRules: {
          cliArg: D,
          ...(h && { session: h.deny }),
          ...(V.length > 0 && { toolsNarrowing: V })
        },
        alwaysAskRules: {},
        mcpPermissionModeOverrides: {},
        ...(n && { restricted: n }),
        ...(C && { builtInToolsDisabled: C }),
        ...(q !== void 0 && { toolsKeptByLaunchList: Object.freeze([...q]) }),
        ...(QZe() && { blockReadsOutsideWorkingDirectories: !0 }),
        isBypassPermissionsModeAvailable: _e,
        ...((r) => ({
          isAutoModeAvailable: r,
          canAutoClassifierRun: r,
          chromeClassifierFloorEnabled: TEr(),
          chromeNavigationClassifierEnabled:
            k("tengu_auto_mode_config", {})?.chromeNavigation === !0,
          chromeClickClassifierEnabled:
            k("tengu_auto_mode_config", {})?.classifyChromeClicks === !0 || lxr("browserClicks"),
          chromeHostToolAsksEnabled: k("tengu_cozy_eagle", !0) !== !1
        }))(ob()),
        isRemoteMode: i.CLAUDE_CODE_REMOTE || Pn()
      },
      I
    ),
    ue = l(),
    Ce = new Set([...ue.map((r) => r.name), ...Pe]),
    ve = new Map([
      [Be, "command"],
      [At, "command"],
      [uo, "path"],
      [Ar, "path"],
      ...ue.filter((r) => r.ruleContentField).map((r) => [r.name, r.ruleContentField])
    ]);
  for (let r of [...Pd(v), ...hu(v)]) {
    if (r.source === "toolsNarrowing" || r.source === "session") continue;
    let { toolName: P, ruleContent: T } = r.ruleValue;
    if (nMe.has(P)) {
      t(`Permission ${r.ruleBehavior} rule names a removed tool: ${P}`);
      continue;
    }
    if (Tv(P) || P.includes("_") || Cse(P).length > 0 || Ce.has(P)) {
      let w = ve.get(P);
      if (w && T !== void 0) {
        let x = T.indexOf(":");
        if (x > 0 && T.slice(0, x).trim() === w) {
          let Ne = `Permission ${r.ruleBehavior} rule "${dn(r.ruleValue)}" targets ${w} as a raw string and will not match`,
            ke =
              P === Ar
                ? "."
                : P === uo
                  ? ` \u2014 use ${qe}(${"\u2026"}) to match file-read paths.`
                  : P === qt || P === ra
                    ? ` \u2014 use ${at}(${"\u2026"}) to match file-write paths.`
                    : ` \u2014 use ${P}(${"\u2026"}) for ${P}'s own matcher.`;
          (A.push(Ne + ke),
            S.push(
              `${va(r.ruleBehavior)} rule ${dn(r.ruleValue)} never matches${P === Ar ? "" : ` \xB7 use ${P === uo ? qe : P === qt || P === ra ? at : P}(${"\u2026"})`}`
            ));
        }
      }
      continue;
    }
    (A.push(
      `Permission ${r.ruleBehavior} rule "${dn(r.ruleValue)}" matches no known tool \u2014 check for typos.`
    ),
      S.push(`${va(r.ruleBehavior)} rule ${dn(r.ruleValue)} matches no tool \xB7 check for typos`));
  }
  for (let r of [...YD(v), ...Pd(v), ...hu(v)]) {
    if (r.source === "session" || r.source === "toolsNarrowing") continue;
    if (r.source === "cliArg" && r.ruleBehavior === "allow" && r.ruleValue.toolName === uo)
      continue;
    let { ruleContent: P } = r.ruleValue;
    if (P !== void 0) {
      let w = P.indexOf(":");
      if (
        w > 0 &&
        /^[A-Za-z_][A-Za-z0-9_]*$/.test(P.slice(0, w).trim()) &&
        !/^[A-Za-z]:[\\/]/.test(P.trim())
      )
        continue;
    }
    let T = JNe(dn(r.ruleValue), r.ruleBehavior);
    if (T.valid && T.warning) {
      let w =
        r.source === "cliArg"
          ? r.ruleBehavior === "allow"
            ? "--allowed-tools"
            : "--disallowed-tools"
          : r.source === "flagSettings" && !ln("flagSettings")
            ? "--settings"
            : r.source === "policySettings"
              ? "managed policy settings"
              : Y(r.source);
      if (
        (A.push(`Permission ${r.ruleBehavior} rule (${w}): ${T.warning}`),
        T.securityNotice !== void 0)
      )
        S.push(`${va(r.ruleBehavior)} rule ${T.securityNotice}`);
    }
  }
  let { repoOnly: we } = LXn((r) => {
      try {
        return [ge(ut(r))];
      } catch {
        return [];
      }
    }, E),
    Re = [
      ...Eet(re).map((r) => ({ dir: r, destination: "localSettings" })),
      ...[...(h?.addDirs ?? []), ...(_ ?? [])].map((r) => ({ dir: r, destination: "session" })),
      ...d.map((r) => ({ dir: r, destination: "cliArg" }))
    ],
    Oe = await Promise.all(
      Re.map(async ({ dir: r, destination: P }) => ({ destination: P, result: await Yve(r, v) }))
    ),
    J = new Map(),
    de = [];
  for (let { result: r, destination: P } of Oe)
    if (r.resultType === "success") {
      if (P === "session") de.push(r.absolutePath);
      if (
        ((v = Ju(v, {
          type: "addDirectories",
          directories: [r.absolutePath],
          destination: P === "localSettings" && we.has(r.absolutePath) ? "projectSettings" : P
        })),
        phi(P))
      ) {
        let T = a4t(r.absolutePath);
        if (T.length > 0) {
          J.set(r.absolutePath, T);
          let w = T.filter((x) => x !== r.absolutePath);
          if (w.length > 0) v = Ju(v, { type: "addDirectories", directories: w, destination: P });
        }
      }
    } else if (r.resultType !== "alreadyInWorkingDirectory" && r.resultType !== "pathNotFound")
      A.push(Xve(r));
  if (J.size > 0) v = { ...v, trustedNetworkDirectories: J };
  return {
    toolPermissionContext: v,
    warnings: A,
    securityWarnings: S,
    dangerousPermissions: le,
    overlyBroadBashPermissions: ae,
    ...(Z && { bypassCapabilityNotification: qNn }),
    inheritedSessionDirectories: de
  };
}
function igo(e, s) {
  if (ag()) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      cliArg: [...(e.alwaysAllowRules.cliArg ?? []), ...s]
    }
  };
}
function Cae(e) {
  let s;
  switch (e) {
    case "settings":
      s = "auto mode disabled by settings";
      break;
    case "circuit-breaker":
      s = "auto mode is unavailable for your plan";
      break;
    case "fast-mode":
      s = "auto mode unavailable while fast mode is on \xB7 run /fast off";
      break;
    case "model":
      s = "auto mode unavailable for this model";
      break;
    case Y0t:
      s = "";
      break;
  }
  return s;
}
function kMt() {
  let e = gO();
  return e !== null ? Cae(e) : "auto mode is unavailable right now";
}
function YNn(e, s = {}) {
  let o = Orr();
  if (!o) return e;
  let l = o.awaitsGrowthBook && UV();
  if (l && !o.awaitsPolicyVerdict) return e;
  if (e.mode !== o.mode) return (iqe(void 0), e);
  let n = pGr(o.inputs);
  if (n.autoDefaultWithheldForPendingVerdict) return e;
  let u = l
    ? { mode: n.mode, inputs: o.inputs, awaitsGrowthBook: !0, awaitsPolicyVerdict: !1 }
    : void 0;
  if ((iqe(u), oYr(n.autoStartWithheldForHipaaTaint), n.notification !== void 0))
    s.onNotification?.(n.notification);
  if (
    n.mode === e.mode ||
    (n.mode === "bypassPermissions" && !e.isBypassPermissionsModeAvailable) ||
    (n.mode === "auto" && !ob())
  )
    return e;
  (t(
    `[permission-mode] startup resolved ${e.mode} against ${o.awaitsPolicyVerdict ? "a pending policy verdict" : "an empty GrowthBook cache"}; re-resolved to ${n.mode}`
  ),
    rYr(n.fromAutoFallback));
  let p = {
    ..._L(e.mode, n.mode, e, "startup_reresolve"),
    mode: n.mode,
    ...(o.awaitsPolicyVerdict &&
      n.decidedByProactivityLevel && {
        startupModeDecidedByProactivityLevel: o.inputs.proactivityLevel
      })
  };
  return (iqe(u), p);
}
function AEr() {
  let e = Orr();
  if (!e?.awaitsPolicyVerdict || e.inputs.proactivityLevel === void 0) return;
  let s = pGr(e.inputs).levelPickHeldForPendingVerdict;
  return s === void 0 ? void 0 : eJs(s);
}
function CEr() {
  let e = Orr();
  if (!e?.awaitsPolicyVerdict) return;
  iqe(e.awaitsGrowthBook && UV() ? { ...e, awaitsPolicyVerdict: !1 } : void 0);
}
async function OBe(e, s, o = !1) {
  let l = await Lz("tengu_auto_mode_config", {}),
    n = he(l?.enabled),
    u = r2n();
  if (!Uue()) jbn(n === "disabled");
  let p = st(),
    { supported: d, disableFastModeBreakerFires: h } = k4o({
      model: p,
      fastMode: !!s,
      disableFastMode: !!l?.disableFastMode
    });
  V5o(h ? (s ? "fast-mode" : "model") : null);
  let _ = n2n(),
    E = n !== "disabled" && !u && d && !_,
    A = E,
    S = u && n !== "disabled" && d;
  t(
    `[auto-mode] verifyAutoModeGateAccess: enabledState=${n} disabledBySettings=${u} model=${p} modelSupported=${d} disableFastModeBreakerFires=${h} carouselAvailable=${A} canEnterAuto=${E}`
  );
  let m = K5o();
  if (!E) iqe(void 0);
  let N = (y, C) => {
    if (y.isAutoModeAvailable !== C)
      t(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${y.isAutoModeAvailable} -> ${C}`);
    return y.isAutoModeAvailable === C && y.canAutoClassifierRun === E
      ? y
      : { ...y, isAutoModeAvailable: C, canAutoClassifierRun: E };
  };
  if (E)
    return {
      canEnterAuto: E,
      refusedForSettingsAlone: S,
      updateContext: (y) => {
        if ((CEr(), (y = YNn(y)), iqe(void 0), y.mode === "plan" && !y.prePlanMode)) {
          let C = JNn(y);
          if (C) return N({ ...C, prePlanMode: "default" }, A);
        }
        return N(y, A);
      }
    };
  let M;
  if (u)
    ((M = "settings"), t("auto mode disabled: disableAutoMode in settings", { level: "warn" }));
  else if (n === "disabled")
    ((M = "circuit-breaker"),
      t('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
        level: "warn"
      }));
  else if (s && h && _0(p))
    ((M = "fast-mode"),
      t("auto mode disabled: tengu_auto_mode_config.disableFastMode with the /fast toggle on", {
        level: "warn"
      }));
  else
    ((M = "model"),
      t(`auto mode disabled: model ${st()} does not support auto mode`, { level: "warn" }));
  let D = Cae(M),
    R = (y) => {
      if (
        (t(
          `[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${y.mode} ctx.prePlanMode=${y.prePlanMode} reason=${M}`
        ),
        !yut(y))
      )
        return N(y, !1);
      return REr(y);
    },
    F = yut(e);
  if (!F && !m) return { updateContext: R, canEnterAuto: E, refusedForSettingsAlone: S };
  if (F) {
    let y = o && M === "model" && H5();
    return {
      updateContext: R,
      canEnterAuto: E,
      refusedForSettingsAlone: S,
      notification: y ? void 0 : D
    };
  }
  return {
    updateContext: R,
    canEnterAuto: E,
    refusedForSettingsAlone: S,
    notification: e.isAutoModeAvailable ? D : void 0
  };
}
function TMt() {
  return Uue() || r2n();
}
function Ge() {
  return Ro().findLast((e) => X0t(pe(e) || {}));
}
function ago() {
  return Ro().filter((e) => X0t(pe(e) || {}));
}
function XNn() {
  let e = Ge(),
    s = cTs();
  return {
    autoModeAvailable: ob(),
    autoModeUnavailableReason: ce(gO()),
    autoModeDisabledBySettingsSource: ce(e),
    autoModeDisabledByPolicyOrigin: e === "policySettings" ? ce(ek()) : void 0,
    autoModeDisabledByTrustedPolicy: hut(),
    autoModeEnabledState: c(s.value),
    autoModeEnabledStateSource: c(s.src),
    autoModeCircuitBroken: Uue(),
    defaultModeSetting: ce((pr() || {}).permissions?.defaultMode),
    autoModeFromFallback: H5()
  };
}
function hut() {
  return X0t(pe("policySettings") || {}) && tqt().some(X0t);
}
var Ye = "enabled";
function he(e) {
  if (e === "enabled" || e === "disabled" || e === "opt-in") return e;
  return Ye;
}
function lgo() {
  return cTs().value;
}
function cTs() {
  let s = k("tengu_auto_mode_config", {})?.enabled,
    o = he(s);
  return { value: o, src: s === o ? "gb" : "default" };
}
function dgo(e) {
  let s = e;
  if (e.mode === "bypassPermissions")
    s = Ju(e, { type: "setMode", mode: "default", destination: "session" });
  return { ...s, isBypassPermissionsModeAvailable: !1 };
}
function yut(e) {
  return (
    e.mode === "auto" ||
    (e.mode === "plan" && (e.prePlanMode === "auto" || !!e.strippedDangerousRules))
  );
}
function REr(e) {
  let s = "default";
  {
    let o = e.startupModeDecidedByProactivityLevel;
    if ((e.mode === "auto" || e.prePlanMode === "auto") && o !== void 0) {
      if (nR()) {
        let l = ql(
            e_e(
              o,
              { isAutoModeAvailable: !1, isBypassPermissionsModeAvailable: !1 },
              e.proactivityBaseline?.mode
            )
          ),
          n = vLe(o, l, e.proactivityBaseline?.mode) !== void 0;
        s = l === "plan" || n ? "default" : l;
      }
      e = { ...e, startupModeDecidedByProactivityLevel: void 0 };
    }
  }
  if ((mI(!1), dF(!0), e.mode === "auto"))
    return (
      xce({ from: "auto", to: s, trigger: "auto_gate_denied" }),
      {
        ...Ju(Hve(e), { type: "setMode", mode: s, destination: "session" }),
        isAutoModeAvailable: !1,
        canAutoClassifierRun: !1
      }
    );
  return {
    ...Hve(e),
    prePlanMode: e.prePlanMode === "auto" ? s : e.prePlanMode,
    isAutoModeAvailable: !1,
    canAutoClassifierRun: !1
  };
}
function cgo() {
  return (pr() || {}).permissions?.defaultMode === "auto";
}
function xEr() {
  return ob() && nTt();
}
function be() {
  return Wf() && MAo() && !hut() && !X0t(pe("flagSettings") || {});
}
function PEr(e) {
  return ob() || (e === "auto" && be());
}
function IEr() {
  Bbn(!nTt());
}
function OEr(e) {
  return (IEr(), Ee(e, xEr));
}
function Ae() {
  return (ob() || be()) && (!G5o() || nTt()) && !R9o("useAutoModeDuringPlan");
}
function JNn(e) {
  if (!xEr()) return null;
  return (mI(!0), f4(e));
}
function AMt(e) {
  let s = e.mode;
  if (s === "plan") return e;
  if (s === "auto") {
    if (Ae()) return { ...e, prePlanMode: "auto" };
    return (mI(!1), dF(!0), { ...Hve(e), prePlanMode: "auto" });
  }
  if (s !== "bypassPermissions") {
    let o = JNn(e);
    if (o) return { ...o, prePlanMode: s };
  }
  return (
    t(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${s}`, { level: "info" }),
    { ...e, prePlanMode: s }
  );
}
function ugo(e, s) {
  let o = e;
  if (o.startupModeDecidedByProactivityLevel !== void 0)
    o = { ...o, startupModeDecidedByProactivityLevel: void 0 };
  if (
    o.mode !== "bypassPermissions" &&
    o.isBypassPermissionsModeAvailable &&
    !s.bypassAvailableByFlag
  )
    o = { ...o, isBypassPermissionsModeAvailable: !1 };
  if (o.mode === "plan" && o.prePlanMode !== void 0) {
    let l = WIe({ ...o, prePlanMode: "default" });
    o = Wf() ? l : { ...l, prePlanMode: void 0 };
  }
  return o;
}
function WIe(e) {
  return Ee(e, Ae);
}
function Ee(e, s) {
  if (e.mode === "auto") return f4(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let o = Wf(),
    l = o ? s() : xEr();
  if (l && o) return f4(e);
  if (!l && !o) return e;
  if (l) return (mI(!0), dF(!1), f4(e));
  return (mI(!1), dF(!0), Hve(e));
}
export {
  wN,
  oTs,
  qNn,
  sTs,
  iTs,
  dhi,
  aTs,
  lTs,
  wEr,
  chi,
  f4,
  Zmo,
  ego,
  vEr,
  Hve,
  tgo,
  _L,
  ngo,
  gte,
  EEr,
  RA,
  rgo,
  dTs,
  uhi,
  fhi,
  ogo,
  kEr,
  phi,
  TEr,
  sgo,
  igo,
  Cae,
  kMt,
  YNn,
  AEr,
  CEr,
  OBe,
  TMt,
  ago,
  XNn,
  hut,
  lgo,
  cTs,
  dgo,
  yut,
  REr,
  cgo,
  xEr,
  PEr,
  IEr,
  OEr,
  JNn,
  AMt,
  ugo,
  WIe
};

//# sourceMappingURL=chunk-25j20xpc.js.map
