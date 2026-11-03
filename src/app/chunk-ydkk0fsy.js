// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Bn, dn } from "./chunk-9z5ybxhe.js";
import { xo, XNe } from "./chunk-5rw2zfa0.js";
import { k } from "./chunk-ajtyjx88.js";
import { tTt, Xm, wI } from "./chunk-7c3thgax.js";
import { ze } from "./chunk-1ww4jg8j.js";
import { Wjt, jG } from "./chunk-d5zj5299.js";
import { Y1 } from "./chunk-krgv9fvy.js";
import { Qu, XD, tQn, Mc, lWo, kw } from "./chunk-wany0nxw.js";
import { Lr, yLe } from "./chunk-5z6t3gwt.js";
import { pY, Yne } from "./chunk-6h7ejyet.js";
import { GOe } from "./chunk-j0tbz6ra.js";
import { cOn, gOn } from "./chunk-pn6xnm1s.js";
import { zwe } from "./chunk-00h33g5z.js";
import { Jd } from "./chunk-gmwnnpe9.js";
import { MQ } from "./chunk-j5yprdsd.js";
function m() {
  try {
    return k("tengu_violin_table", !1) === !0;
  } catch {
    return !1;
  }
}
function ips(e) {
  return e.outcome === "needs_approval" ? (e.suggestions ?? []) : [];
}
function Yro(e, n) {
  let [t, ...r] = e;
  if (t === void 0 || r.length > 0 || !zwe(n)) return;
  let { toolName: i, ruleContent: a } = Bn(t);
  return i === n &&
    a !== void 0 &&
    dn({ toolName: n, ruleContent: a }) === t &&
    XNe(a).type !== "exact"
    ? { toolName: n, ruleContent: a }
    : void 0;
}
function lhr() {
  if (!m()) return !1;
  try {
    return (
      Xm().errors.length === 0 && !ze.isSandboxEnabledInSettings() && !ze.isSandboxingEnabled()
    );
  } catch {
    return !1;
  }
}
function p(e, n) {
  let t = Yro(n.offered, n.toolName);
  return lhr() && t !== void 0 && e.toolName === t.toolName && e.ruleContent === t.ruleContent;
}
function aps(e) {
  return e.offeredStandingUpdates.length > 0 && lhr()
    ? [...e.sessionPermissionUpdates, ...e.offeredStandingUpdates]
    : e.sessionPermissionUpdates;
}
var y = 50000,
  h = tQn,
  R = 4,
  E = 45000,
  g = {
    sandbox: "tool_default",
    background: "forbidden",
    pinCwd: !0,
    scrubCredentialEnv: !0,
    maxTimeoutMs: E,
    get additionalDenyRead() {
      return GOe();
    },
    get additionalDenyWrite() {
      return GOe();
    }
  },
  A =
    "Approvals are asked in this session. This machine's rules and hooks still apply. Commands run as they would locally in that folder (sandboxed when its settings sandbox them), foreground only, from the project directory, without credential variables, up to 45 s each.",
  f9t = new Set(["dangerouslyDisableSandbox", ...[]]);
function lps(e = {}) {
  return {
    name: "interim_floor",
    kind: "personal_machine",
    requireEnvelope: !0,
    admission: "device_binding",
    stance: {
      mode: "session",
      honorLocalRules: !0,
      onAsk: "session",
      askOnDestructive: e.askOnDestructive ?? !1,
      unattended: "own_record"
    },
    limits: {
      max_call_ms: y,
      max_command_ms: g.maxTimeoutMs,
      max_request_bytes: h,
      max_in_flight: R
    },
    serves: (t) => Yne.has(t.name) && kw(t).supported,
    constraints: (t, r) => {
      let i = kw(t);
      return cOn(g, i.supported ? i.tighten : void 0);
    },
    refusedInputFields: (t) => {
      let r = kw(t);
      return (r.supported ? (r.refusedInputFields ?? []) : []).filter((a) => !f9t.has(a));
    },
    notes: () => A
  };
}
var ldt = 8,
  dps = 1800000,
  dhr = 300000,
  _ = 256,
  v = 16,
  lOn = 512;
function cps(e, n, t) {
  return n === e.toolName && MQ(n, xo(t, [Lr, yLe])) === MQ(n, e.evaluatedInput);
}
function ups(e) {
  return {
    behavior: "deny",
    message:
      e !== void 0 && e.trim() !== ""
        ? Mc(e)
        : "The person declined this call in the session \u2014 it did not run.",
    decisionReason: { type: "other", reason: gOn },
    decideLocation: "ask-path"
  };
}
async function fps(e, n, t, r) {
  if (n === void 0 || n.length === 0 || !Y1()) return;
  let i = Wjt(
    n.flatMap((o) => {
      let s = pY().safeParse(o),
        [l, ...S] =
          s.success && s.data.type === "addRules" && s.data.behavior === "allow"
            ? s.data.rules
            : [];
      return l !== void 0 && S.length === 0 && (l.ruleContent?.length ?? 0) <= lOn && p(l, r)
        ? [{ type: "addRules", behavior: "allow", destination: "session", rules: [l] }]
        : [];
    })
  );
  if (i.length > 0)
    ((e.offeredStandingUpdates = [...e.offeredStandingUpdates, ...i].slice(-_)),
      Jd(t.callId, "offered standing rule held", { rules: i.length }));
  let a = n.flatMap((o) => {
      let s = pY().safeParse(o);
      return s.success &&
        s.data.type === "addRules" &&
        s.data.behavior === "allow" &&
        s.data.rules.length > 0 &&
        s.data.rules.length <= v &&
        s.data.rules.every(
          (l) => l.toolName.length <= lOn && (l.ruleContent?.length ?? 0) <= lOn && O(l, r)
        )
        ? [s.data]
        : [];
    }),
    d = Wjt(
      a.map((o) =>
        o.destination === "session" || o.destination === "localSettings"
          ? o
          : { ...o, destination: "session" }
      )
    ),
    c = d.filter((o) => o.destination === "session"),
    u = d.filter((o) => o.destination === "localSettings");
  if (
    d.length > 0 &&
    a.some((o) => o.destination !== "session" && o.destination !== "localSettings")
  )
    t.destinationDowngraded = !0;
  let f = tTt() ? u.map((o) => ({ ...o, destination: "session" })) : [];
  if (c.length + f.length > 0)
    e.sessionPermissionUpdates = [...e.sessionPermissionUpdates, ...c, ...f].slice(-_);
  if (u.length > 0) await jG(u);
  if (d.length > 0)
    Jd(t.callId, "standing approval kept", {
      session_rules: c.length,
      local_settings_rules: u.length,
      downgraded: t.destinationDowngraded
    });
}
function O(e, n) {
  let t = n.input.command;
  return (
    e.toolName === n.toolName &&
    typeof t === "string" &&
    e.ruleContent !== void 0 &&
    e.ruleContent === t.trim() &&
    !e.ruleContent.includes("*")
  );
}
function C(e) {
  if (e === "none") return;
  let n = T(wI()),
    t = lWo(e === "full" ? n : { soft_deny: n?.soft_deny, hard_deny: n?.hard_deny });
  return t === void 0 ? void 0 : { auto_mode: t };
}
function T(e) {
  return e;
}
function pps(e) {
  let n = Mc(e.ask.message);
  return {
    envelope: {
      v: Qu,
      outcome: "needs_approval",
      ...(e.facts.envelope && { call_id: e.facts.envelope.call_id }),
      target: e.target,
      ask_id: e.askId,
      tool: e.toolName,
      input: e.ask.input,
      message: n,
      ...(e.ask.decisionReason !== void 0 && { decision_reason: e.ask.decisionReason }),
      ...(e.ask.suggestions.length > 0 && { suggestions: [...e.ask.suggestions] }),
      classifier_eligible: e.ask.classifierEligible,
      prior_answer_ok: e.ask.priorAnswerOk,
      ...(e.notes.length > 0 && { notes: [...e.notes] }),
      ...(e.ask.classifierEligible && C(e.hostRules)),
      elicitation: {
        mode: "form",
        message: n,
        requestedSchema: {
          type: "object",
          properties: {
            decision: {
              type: "string",
              enum: ["allow", "deny"],
              description: `Whether ${e.toolName} may run this call on ${e.target.name}`
            },
            feedback: { type: "string", description: "Optional words for Claude with the decision" }
          },
          required: ["decision"]
        },
        _meta: {
          [XD]: {
            ask_id: e.askId,
            ...(e.facts.envelope && { call_id: e.facts.envelope.call_id }),
            input_fingerprint: e.inputFingerprint,
            classifier_eligible: e.ask.classifierEligible,
            prior_answer_ok: e.ask.priorAnswerOk
          }
        }
      }
    },
    content: [
      {
        type: "text",
        text: `${e.toolName} on ${e.target.name} needs approval in this session before it runs: ${n}`
      }
    ]
  };
}
function mps(e, n, t) {
  return {
    envelope: {
      v: Qu,
      outcome: "acknowledged",
      ...(n.envelope && { call_id: n.envelope.call_id }),
      target: e,
      ask_id: t
    },
    content: [{ type: "text", text: `The refusal was recorded on ${e.name} \u2014 nothing ran.` }]
  };
}
function Hpe() {
  try {
    return k("tengu_violin_fhole", !1) === !0;
  } catch {
    return !1;
  }
}
export { ips, Yro, lhr, aps, f9t, lps, ldt, dps, dhr, lOn, cps, ups, fps, pps, mps, Hpe };

//# sourceMappingURL=chunk-ydkk0fsy.js.map
