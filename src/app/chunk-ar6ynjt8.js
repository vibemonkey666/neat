// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L } from "./chunk-wrtp8qz8.js";
import { CH } from "./chunk-5rw2zfa0.js";
import { Bn, dn } from "./chunk-9z5ybxhe.js";
import { ed, r7n, mJs } from "./chunk-hhgrzgnb.js";
import { Ls } from "./chunk-at88wjsn.js";
import { Cj } from "./chunk-ajtyjx88.js";
import { ur } from "./chunk-t86k189s.js";
import { XT } from "./chunk-2mkstff3.js";
function d(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: L([...(e.alwaysAllowRules.command || []), ...o])
    }
  };
}
function u(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: L([...(e.alwaysDenyRules.command || []), ...o])
    }
  };
}
function IQn(e, o, n, r) {
  if (
    !r?.replaceCommandRules &&
    !r?.replaceDenyRules &&
    r?.frozenCommandDenies === void 0 &&
    o.length === 0 &&
    n.length === 0
  )
    return e;
  return () => {
    let s = e(),
      t =
        s.toolPermissionContext.pollEventDeliveryGuard === !0
          ? s.toolPermissionContext
          : r?.replaceCommandRules
            ? {
                ...s.toolPermissionContext,
                alwaysAllowRules: { ...s.toolPermissionContext.alwaysAllowRules, command: o }
              }
            : d(s.toolPermissionContext, o),
      i = r?.replaceDenyRules
        ? {
            ...t,
            alwaysDenyRules: {
              ...t.alwaysDenyRules,
              command: [...n, ...(t.turnDisallowedTools ?? [])]
            }
          }
        : r?.frozenCommandDenies !== void 0
          ? {
              ...t,
              alwaysDenyRules: {
                ...t.alwaysDenyRules,
                command: L([...r.frozenCommandDenies, ...(t.alwaysDenyRules.command ?? []), ...n])
              }
            }
          : u(t, n);
    return { ...s, toolPermissionContext: i };
  };
}
function ign(e) {
  return (e.denyMatchNames ?? []).filter((o) => o.includes(":"));
}
function kXs(e, o) {
  let n;
  return e.map((r) => {
    if (r.loadedFrom !== "mcp") return r;
    let s = ign(r);
    if (s.length === 0) return r;
    n ??= new Set([...o.map((a) => a.name), ...e.map((a) => a.name)]);
    let t = s.filter((a) => a !== r.name && n.has(a)),
      i = r.reservedLabels ?? [];
    if (t.length === i.length && t.every((a, l) => a === i[l])) return r;
    return { ...r, reservedLabels: t.length === 0 ? void 0 : t };
  });
}
var Ao = "Skill",
  fV = "skill__";
function eKe(e) {
  return fV + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}
function TXs(e) {
  let o = [
    ...(e.aliases ?? []),
    ...(e.shedAliases ?? []),
    ...(e.unqualifiedName != null ? [e.unqualifiedName] : []),
    ...ign(e),
    ...(e.directoryListingName !== void 0 ? [e.directoryListingName] : [])
  ];
  return o.length ? o.map(eKe) : void 0;
}
class f {
  mode;
  autoClassifierActive;
  constructor(e, o) {
    ((this.mode = e), (this.autoClassifierActive = o));
  }
  toJSON() {
    return;
  }
}
function AXs(e) {
  return new f(e, Ls(e));
}
function XWo(e) {
  return e instanceof f && !e.autoClassifierActive;
}
function g(e) {
  if (!XWo(e)) return;
  let o = e.mode;
  switch (o) {
    case "default":
    case "acceptEdits":
    case "dontAsk":
    case "bubble":
      return o;
    case "plan":
    case "bypassPermissions":
      return "default";
    case "auto":
      return;
    default: {
      let n = o;
      return;
    }
  }
}
var R = new Set();
function JWo(e) {
  return dn(Bn(e));
}
function QWr(e) {
  let o = e.remoteBrowserCardAnswers;
  return o !== void 0 && o.list === e.alwaysAllowRules.session ? o.rules : R;
}
function oGt(e, o) {
  let n = o.alwaysAllowRules.session;
  if (e.remoteBrowserCardAnswers === void 0 || n === e.alwaysAllowRules.session) return o;
  let r = QWr(e),
    s = new Set((n ?? []).map(JWo)),
    t = new Set([...r].filter((i) => s.has(i)));
  return {
    ...o,
    remoteBrowserCardAnswers: n === void 0 || t.size === 0 ? void 0 : { rules: t, list: n }
  };
}
var x = {
  allowed_tools: "strip",
  avoid_prompts: "strip",
  permission_mode: "strip",
  working_directory: "strip",
  disallowed_tools: "keep",
  bash_command_clamp: "keep",
  sandbox_auto_allow_suspended: "keep",
  effort: "keep",
  model: "keep",
  max_thinking_tokens: "keep",
  flag_settings: "keep"
};
function A(e) {
  if (!e) return e;
  return e.filter((o) => x[o.kind] === "keep");
}
function agn(e) {
  return {
    ...e,
    abortController: ur(),
    toolUseId: void 0,
    permissionPhase: void 0,
    autoModeClassified: void 0,
    ...!1,
    permissionLayers: A(e.permissionLayers)
  };
}
function QWo(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}
function Ih(e) {
  let o = ae(e);
  return o.mode !== "bypassPermissions" && !CH(o.mode, o.isBypassPermissionsModeAvailable);
}
function pb(e) {
  if (ae(e).mode !== "plan") return !1;
  return sh(e);
}
function KSt(e) {
  return e.getAppState();
}
function sh(e) {
  return !Ih(e) || ae(e).shouldAvoidPermissionPrompts === !0;
}
function h(e) {
  return e === Ao || e.startsWith(`${Ao}(`) || e.startsWith(fV);
}
function S(e) {
  let o = h,
    n = !1,
    r = {},
    s = {};
  for (let [t, i] of Object.entries(e.strippedDangerousRules ?? {}))
    if (i !== void 0) s[t] = [...i];
  for (let [t, i] of Object.entries(e.alwaysAllowRules)) {
    if (i === void 0) continue;
    let a = i.filter((l) => !o(l));
    if (a.length !== i.length) {
      n = !0;
      for (let l of i)
        if (o(l)) {
          let c = (s[t] ??= []);
          if (!c.includes(l)) c.push(l);
        }
    }
    r[t] = a;
  }
  if (!n) return e;
  return oGt(e, { ...e, alwaysAllowRules: r, strippedDangerousRules: s });
}
function Tce(e) {
  return e.getAppState().toolPermissionContext;
}
function ae(e) {
  let o = e.getAppState().toolPermissionContext,
    n = o !== void 0 && o.pollEventDeliveryGuard === !0;
  if (n) o = S(o);
  let r = e.permissionLayers;
  if (!r) return y(e, o);
  let s = r.findLast((t) => t.kind === "working_directory");
  for (let t of r)
    switch (t.kind) {
      case "allowed_tools":
        if (!n) o = d(o, [...t.allowedTools]);
        break;
      case "disallowed_tools":
        o = u(o, [...t.disallowedTools]);
        break;
      case "bash_command_clamp":
        o = { ...o, bashCommandClamps: [...(o.bashCommandClamps ?? []), t.rules] };
        break;
      case "avoid_prompts":
        if (!o.shouldAvoidPermissionPrompts) o = { ...o, shouldAvoidPermissionPrompts: !0 };
        break;
      case "sandbox_auto_allow_suspended":
        if (!o.sandboxAutoAllowSuspended) o = { ...o, sandboxAutoAllowSuspended: !0 };
        break;
      case "permission_mode": {
        if (t.mode === "bypassPermissions" && (XT() || !o.isBypassPermissionsModeAvailable)) break;
        o = { ...o, mode: t.mode };
        break;
      }
      case "working_directory":
        if (t === s && !o.additionalWorkingDirectories.has(t.directory))
          o = {
            ...o,
            additionalWorkingDirectories: new Map([
              ...o.additionalWorkingDirectories,
              [t.directory, { path: t.directory, source: "session" }]
            ])
          };
        break;
      case "effort":
      case "model":
      case "max_thinking_tokens":
      case "flag_settings":
        break;
    }
  return y(e, o);
}
function y(e, o) {
  return w(e, P(e, b(e, o)));
}
function b(e, o) {
  if (
    o === void 0 ||
    o.mode !== "auto" ||
    e.forPromptShellCommand === !0 ||
    e.forRemoteExecution === !0
  )
    return o;
  let n = g(e.permissionModeAtRequest);
  return n === void 0 ? o : m(n, o);
}
function w(e, o) {
  if (e.forPromptShellCommand !== !0 || o === void 0) return o;
  return o.mode === "auto" ? m("default", o) : o;
}
function m(e, o) {
  return { ...o, mode: e, modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode };
}
function P(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let { blockReadsOutsideWorkingDirectories: n, ...r } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? m("default", r) : r;
}
function o_(e) {
  let o;
  if (!e) return o;
  for (let n of e) if (n.kind === "effort") o = n.effort;
  return o;
}
function ih(e) {
  return o_(e.permissionLayers) ?? ed(e.getAppState(), p(e), { withHold: ZWr(e) });
}
function lgn(e, o) {
  return r7n(o, Dc(e))
    ? { effortValue: ih(e), turnEffort: o_(e.permissionLayers) }
    : { effortValue: mJs(e.getAppState(), o), turnEffort: void 0 };
}
function ZWr(e) {
  return e.agentContext === void 0 || Cj(e.agentContext);
}
function dgn(e) {
  return ih(e) === void 0 ? ed(e.getAppState(), p(e), { withHold: !1 }) : void 0;
}
function p(e) {
  let o = e.options?.mainLoopModel;
  for (let n of e.permissionLayers ?? []) if (n.kind === "model") o = n.mainLoopModel;
  return o;
}
function ZAe(e) {
  return e.getAppState().sessionEffort;
}
function Dc(e) {
  return p(e) ?? e.options.mainLoopModel;
}
function Ket(e) {
  let o = e.options.thinkingConfig;
  for (let n of e.permissionLayers ?? [])
    if (n.kind === "max_thinking_tokens") o = C(n.maxThinkingTokens);
  return o;
}
function C(e) {
  return e === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: e };
}
function Vet(e) {
  return e.getAppState().ultracode === !0;
}
function gLe(e, o) {
  if (o.length === 0) return e;
  let n = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    r;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "model") {
      r = a.mainLoopModel;
      break;
    }
  }
  let s;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "max_thinking_tokens") {
      s = C(a.maxThinkingTokens);
      break;
    }
  }
  return {
    ...e,
    permissionLayers: n,
    ...((r !== void 0 || s !== void 0) && {
      options: {
        ...e.options,
        ...(r !== void 0 && { mainLoopModel: r }),
        ...(s !== void 0 && { thinkingConfig: s })
      }
    })
  };
}
export {
  ign,
  kXs,
  Ao,
  fV,
  eKe,
  TXs,
  IQn,
  AXs,
  XWo,
  JWo,
  QWr,
  oGt,
  agn,
  QWo,
  Ih,
  pb,
  KSt,
  sh,
  Tce,
  ae,
  o_,
  ih,
  lgn,
  ZWr,
  dgn,
  ZAe,
  Dc,
  Ket,
  Vet,
  gLe
};

//# sourceMappingURL=chunk-ar6ynjt8.js.map
