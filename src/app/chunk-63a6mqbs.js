// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { rW } from "./chunk-m25ae09s.js";
import { P9r, I9r, aTn, cCt } from "./chunk-wrtp8qz8.js";
function A(e, o, s, n) {
  var r = e.length,
    i = s + (n ? 1 : -1);
  while (n ? i-- : ++i < r) if (o(e[i], i, e)) return i;
  return -1;
}
var y = A;
function h(e) {
  return e !== e;
}
var R = h;
function g(e, o, s) {
  var n = s - 1,
    r = e.length;
  while (++n < r) if (e[n] === o) return n;
  return -1;
}
var f = g;
function b(e, o, s) {
  return o === o ? f(e, o, s) : y(e, R, s);
}
var O = b;
function E(e, o) {
  var s = e == null ? 0 : e.length;
  return !!s && O(e, o, 0) > -1;
}
var _ = E;
function D(e, o, s) {
  var n = -1,
    r = e == null ? 0 : e.length;
  while (++n < r) if (s(o, e[n])) return !0;
  return !1;
}
var k = D;
function x() {}
var xot = x;
var C = 1 / 0,
  I = !(cCt && 1 / aTn(new cCt([, -0]))[1] == C)
    ? xot
    : function (e) {
        return new cCt(e);
      },
  P = I;
var N = 200;
function T(e, o, s) {
  var n = -1,
    r = _,
    i = e.length,
    u = !0,
    l = [],
    t = l;
  if (s) ((u = !1), (r = k));
  else if (i >= N) {
    var p = o ? null : P(e);
    if (p) return aTn(p);
    ((u = !1), (r = I9r), (t = new P9r()));
  } else t = o ? [] : l;
  e: while (++n < i) {
    var a = e[n],
      c = o ? o(a) : a;
    if (((a = s || a !== 0 ? a : 0), u && c === c)) {
      var m = t.length;
      while (m--) if (t[m] === c) continue e;
      if (o) t.push(c);
      l.push(a);
    } else if (!r(t, c, s)) {
      if (t !== l) t.push(c);
      l.push(a);
    }
  }
  return l;
}
var Lqt = T;
function M(e, o) {
  return e && e.length ? Lqt(e, rW(o, 2)) : [];
}
var ri = M;
var N0 = ["acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan"],
  S = [...N0],
  oT = S,
  gB = "manual";
function Ny(e) {
  return e === "manual" ? "default" : e;
}
function fh(e) {
  let o = Ny(e);
  return S.find((s) => s === o);
}
var Wbe = `Cannot set permission mode: must be one of ${N0.join(", ")}`,
  Nqt = 32,
  Avn = /^[A-Za-z0-9_-]{1,64}$/,
  Pot = {
    dangerousRemoval: {
      bypassImmune: !0,
      classifierRouted: !0,
      autoModeDeny: !0,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    backgroundOperator: {
      bypassImmune: !1,
      classifierRouted: !0,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    suspiciousWindowsPath: {
      bypassImmune: !1,
      classifierRouted: !0,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    isolatePeerMachines: {
      bypassImmune: !0,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    restrictedMode: {
      bypassImmune: !0,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    outsideReadsBlocked: {
      bypassImmune: !0,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    claudeSettingsFile: {
      bypassImmune: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !0,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    internalHardDeny: {
      bypassImmune: !1,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !1,
      localProjectionOnly: !1,
      servedUnplaceable: !0
    },
    unfinishedCheck: {
      bypassImmune: !0,
      classifierRouted: !1,
      autoModeDeny: !1,
      hostPersonOnly: !0,
      localProjectionOnly: !1,
      servedUnplaceable: !1
    },
    ...{},
    ...{}
  };
function sq(e) {
  return d(e).some((o) => Pot[o]?.bypassImmune === !0);
}
function Cvn(e) {
  return d(e).some((o) => Pot[o]?.servedUnplaceable === !0);
}
function d(e) {
  return [...(e.circuitBreaker !== void 0 ? [e.circuitBreaker] : []), ...(e.also ?? [])];
}
function $0(e) {
  return e.circuitBreaker !== void 0 && Pot[e.circuitBreaker]?.classifierRouted === !0;
}
function txe(e) {
  return e.circuitBreaker !== void 0 && Pot[e.circuitBreaker]?.autoModeDeny === !0;
}
function t2(e) {
  return d(e).some((o) => Pot[o]?.hostPersonOnly === !0);
}
function DJo(e) {
  return d(e).some((o) => Pot[o]?.localProjectionOnly === !0);
}
function HJo(e) {
  return e.decideLocation === "pre-ask";
}
function s4e(e, o) {
  return e.behavior !== "allow" && e !== o && !i4e(e);
}
function i4e(e) {
  return e.behavior === "deny" && e.invalidInput === !0;
}
var DTt = [
  "rule",
  "mode",
  "subcommandResults",
  "permissionPromptTool",
  "hook",
  "asyncAgent",
  "sandboxOverride",
  "workingDir",
  "safetyCheck",
  "classifier",
  "other"
];
var Iot = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)",
  Gbe = "Read-only command is allowed",
  Rvn = "Command is read-only and safe to execute",
  xvn = "All pipeline commands are individually allowed, some only by the read-only allowlist",
  Pvn = "Auto mode held this command for the server-side classifier to review",
  Kir = "Auto mode reviews this action before it runs in the cloud environment",
  LJo = "Path is outside allowed working directories",
  Ivn = "--restricted: path outside the working directory",
  PH =
    "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.",
  Vir = "permission check needs a working directory; the session has none",
  Oot = "permission check needs a config or temp path; the session has none",
  $qt = new Map([
    ["python", new Set(["-c"])],
    ["node", new Set(["-e", "--eval", "-p", "--print"])],
    ["nodejs", new Set(["-e", "--eval", "-p", "--print"])],
    ["bun", new Set(["-e", "--eval", "-p", "--print"])],
    ["perl", new Set(["-e", "-E"])],
    ["ruby", new Set(["-e"])],
    ["php", new Set(["-r"])],
    ["bash", new Set(["-c"])],
    ["sh", new Set(["-c"])],
    ["zsh", new Set(["-c"])],
    ["dash", new Set(["-c"])],
    ["ksh", new Set(["-c"])],
    ["lua", new Set(["-e"])],
    ["luajit", new Set(["-e"])],
    ["tsx", new Set(["-e", "--eval", "-p", "--print"])],
    ["deno", new Set(["eval"])],
    ["Rscript", new Set(["-e"])],
    ["julia", new Set(["-e", "-E"])],
    ["osascript", new Set(["-e"])]
  ]);
function F0(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked";
}
function Mot(e, o) {
  return e?.type === "sandboxOverride" && o.blockReadsOutsideWorkingDirectories === !0;
}
function Rb(e) {
  let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  };
}
function iq(e) {
  let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    },
    suggestions: []
  };
}
function Ovn() {
  return {
    behavior: "ask",
    message:
      "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
    decisionReason: {
      type: "safetyCheck",
      reason:
        "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  };
}
var Fqt = "bashCommandClamp: no clamp rule matches this command",
  Mvn = "bashCommandClamp fail-closed: permission check crashed",
  a4e = "Classifier unavailable",
  qir = "Auto mode unavailable \u2014 stopped after repeated responses with no safety verdict",
  Yir = "Auto mode could not evaluate this action and is blocking it for safety",
  Dot =
    "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)",
  Xir =
    "Auto mode classifier transcript exceeded context window; will try to compact the conversation before the next request",
  B = new Set([a4e, qir, Dot, Xir]);
function NJo(e) {
  return B.has(e) ? `Blocked: ${e}` : e;
}
function Jir(e) {
  if (e.reason === a4e || e.reason === qir) return "unavailable";
  return e.noVerdict ? "no_verdict" : "block";
}
var HTt = "Memory is paused for this session; only the user can turn it back on.",
  Qir = "memory access blocked by /pause-memory",
  Zir = ["classifier_transcript_too_long", "outside_reads_blocked", "memory_paused"];
function Tse(e) {
  switch (e?.type) {
    case "classifier":
      return e.noVerdict === !0 && (e.reason === Dot || e.reason === Xir)
        ? "classifier_transcript_too_long"
        : void 0;
    case "other":
    case "safetyCheck":
      switch (e.reason) {
        case Dot:
          return "classifier_transcript_too_long";
        case PH:
          return "outside_reads_blocked";
        case HTt:
        case Qir:
          return "memory_paused";
        default:
          return;
      }
    case "subcommandResults": {
      let o;
      for (let s of e.reasons.values()) {
        let n = Tse(s.decisionReason);
        if (n === "outside_reads_blocked") return n;
        o ??= n;
      }
      return o;
    }
    default:
      return;
  }
}
var q6r = "ask rule on hook-rewritten input",
  Dvn = { type: "asyncAgent", reason: q6r },
  Y6r = {
    type: "asyncAgent",
    reason: "tool requires user interaction; no prompt available in headless mode"
  },
  X6r = "no approval surface in this session; permission request denied automatically",
  $Jo = { type: "asyncAgent", reason: X6r };
function Uqt(e) {
  return {
    ...(e.decisionReason !== void 0 && { decisionReason: e.decisionReason }),
    ...(e.matchedAskRule !== void 0 && { matchedAskRule: e.matchedAskRule })
  };
}
var FJo = {
    type: "other",
    reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool"
  },
  J6r = {
    type: "other",
    reason:
      "This MCP server's name starts like a claude.ai connector's, so --permission-prompt-tool cannot approve its tools. To use them here, the server needs another name."
  },
  Hot = "tool permission stream closed before response received",
  l4e = "canUseTool returned a schema-invalid permission result",
  l$e = "tool permission request failed",
  Hvn = "tool permission request aborted",
  UJo = { type: "other", reason: Hot },
  Lot = { type: "other", reason: l4e },
  Q6r = "permission prompt tool no longer connected",
  BJo = { type: "other", reason: Q6r },
  Z6r = "permission prompt tool is on server remote-browser under its mode floor",
  jJo = { type: "other", reason: Z6r },
  Bqt = { type: "other", reason: l$e },
  Not = { type: "other", reason: Hvn };
export {
  xot,
  Lqt,
  ri,
  N0,
  oT,
  gB,
  Ny,
  fh,
  Wbe,
  Nqt,
  Avn,
  Pot,
  sq,
  Cvn,
  $0,
  txe,
  t2,
  DJo,
  HJo,
  s4e,
  i4e,
  DTt,
  Iot,
  Gbe,
  Rvn,
  xvn,
  Pvn,
  Kir,
  LJo,
  Ivn,
  PH,
  Vir,
  Oot,
  $qt,
  F0,
  Mot,
  Rb,
  iq,
  Ovn,
  Fqt,
  Mvn,
  a4e,
  qir,
  Yir,
  Dot,
  Xir,
  NJo,
  Jir,
  HTt,
  Qir,
  Zir,
  Tse,
  q6r,
  Dvn,
  Y6r,
  X6r,
  $Jo,
  Uqt,
  FJo,
  J6r,
  Hot,
  l4e,
  l$e,
  Hvn,
  UJo,
  Lot,
  Q6r,
  BJo,
  Z6r,
  jJo,
  Bqt,
  Not
};

//# sourceMappingURL=chunk-63a6mqbs.js.map
