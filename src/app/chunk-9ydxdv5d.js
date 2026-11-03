// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { Qe, N } from "./chunk-fs43t96t.js";
import { _ } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { XWt } from "./chunk-e7w635nh.js";
import { Qu, Mc, nj, Rn, rS } from "./chunk-wany0nxw.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { ra, uo, Ar, Nn, oZ, Jc } from "./chunk-ajtyjx88.js";
import { at, qt, Be } from "./chunk-at88wjsn.js";
import { xo } from "./chunk-5rw2zfa0.js";
import { sq, txe } from "./chunk-63a6mqbs.js";
import { Uor } from "./chunk-r1dvrqha.js";
import { oE } from "./chunk-xt4k95hv.js";
import { qLt, uje, cne, LN, nv, VPr, ED, lG, $A, Dl, oJe, pNt, lHr, Ld } from "./chunk-j0tbz6ra.js";
import { t7 } from "./chunk-m5rm7nsm.js";
import { are } from "./chunk-j9t13sne.js";
import { eCn } from "./chunk-n4mqndb0.js";
import { zit, zcr, Gis, pQr, QAn, zis, gQr, Kis, Vis } from "./chunk-vnvpyk5w.js";
import { A5t, Kcr, hQr } from "./chunk-xdktexnk.js";
import { Gcr, T5t } from "./chunk-eedg8dqe.js";
import { Tie, TFe, AFe, Kit } from "./chunk-w6j1j35n.js";
import { CFe } from "./chunk-47t8hb7d.js";
import { M6e } from "./chunk-00h33g5z.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { qe } from "./chunk-0np0053t.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { en } from "./chunk-rc7xvf0x.js";
import { randomUUID as A } from "crypto";
function O() {
  return oE.CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT === !0;
}
var w = new Set([Be, qe, at, qt, ra, Ar, uo]),
  j = 12582912;
function Fvi(e, t) {
  let n = Ucr(e, t);
  return n && { experimental: { [zit]: n } };
}
function Ucr(e, t) {
  if (!O() || t === void 0) return;
  let n = k(e(), t);
  if (!gQr(n.deny_rules)) {
    m("mcp_serve_tool_output", "deny_rules_over_bounds");
    return;
  }
  let o = pQr() ? eCn() : void 0;
  return { ...n, ...(o !== void 0 && { tools: [...n.tools, ...TFe, Gs], tool_host_interface: o }) };
}
function k5t(e) {
  if (!v()) return !1;
  return QAn(mn(e) ? e[zit] : void 0);
}
function v() {
  return O() && pQr();
}
function k(e, t) {
  return Vis({ tools: R(e), denyRules: t.alwaysDenyRules.cliArg ?? [] });
}
async function Uvi({
  name: e,
  args: t,
  meta: n,
  tools: o,
  launchPermissionContext: s,
  newCall: r,
  startHeartbeat: a
}) {
  let u = zis(n);
  if (u.kind === "absent") return;
  let i =
    Kcr(n).kind === "absent"
      ? P(u, e, o, s)
      : p(
          "invalid_request",
          `${e} was not run: a call that carries _meta["${A5t}"] is answered only as a plain call. Call it without asking for its output object.`,
          "carries_asks_key"
        );
  if ("refusal" in i)
    return (f("mcp_serve_tool_output", i.reason, { tool: JAn(e) }), nRt(i.refusal));
  let { toolUseContext: h, release: y } = r();
  try {
    let d = await x(i.tool, t, C(h, CFe(i.launchPermissionContext)), a);
    if (!h.abortController.signal.aborted) {
      let T = JAn(i.tool.name);
      if ("unsent" in d) m("mcp_serve_tool_output", d.unsent, { tool: T });
      else if (d.objection === "crashed_check")
        m("mcp_serve_tool_output", d.objection, { tool: T });
      else if (d.objection !== void 0) f("mcp_serve_tool_output", d.objection, { tool: T });
      else
        g("mcp_serve_tool_output", {
          tool: T,
          answer: c(d.answer),
          safety_ask_skipped: d.wasSafetyAskSkipped === !0,
          ...(d.wasOutputCut && { output_cut: !0 })
        });
    }
    return d.result;
  } finally {
    y();
  }
}
function P(e, t, n, o) {
  if (!O())
    return p(
      "unsupported_protocol",
      `${t} was not run: this server is not set up to return output objects (CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT is not on). Call it without asking for its output object.`
    );
  if (o === void 0)
    return p(
      "unsupported_protocol",
      `${t} was not run: this server holds no permission rules (CLAUDE_CODE_MCP_SERVE_SETTINGS was unset or empty when it started), and it returns output objects only for calls it can judge. Call it without asking for its output object.`,
      "no_launch_rules"
    );
  let { deny_rules: s } = k(n, o);
  if (!gQr(s))
    return p(
      "unsupported_protocol",
      `${t} was not run: this server was launched with more or longer deny rules than it can advertise, so it returns no output objects. Call it without asking for its output object.`,
      "deny_rules_over_bounds"
    );
  if (e.kind === "malformed")
    return p(
      "invalid_request",
      `${t} was not run: _meta["${zit}"] must be exactly { versions, deny_rules_digest }. versions: up to 64 whole numbers. deny_rules_digest: the SHA-256 of JSON.stringify(deny_rules), for the deny_rules this server advertises, as 64 lower-case hex characters.`
    );
  if (e.kind === "no_shared_version")
    return p(
      "unsupported_protocol",
      `${t} was not run: this server returns output objects only in version ${zcr.join(", ")}, and the request lists ${e.versions.join(", ") || "none"}.`
    );
  if (e.denyRulesDigest !== Kis(s))
    return p(
      "unsupported_protocol",
      `${t} was not run: the request's deny_rules_digest is not that of the deny_rules this server advertises. Reconnect and read them again.`,
      "deny_rules_digest_mismatch"
    );
  let r = Rn(n, t);
  if (r === void 0)
    return p("not_served", `${t} was not run: this server has no tool by that name.`);
  return w.has(t)
    ? { tool: r, launchPermissionContext: o }
    : p(
        "not_served",
        `${t} was not run: the tools this server answers with an output object are ${R(n).join(", ") || "none"}. Call it without asking for its output object.`
      );
}
function fQr(e) {
  return w.has(e);
}
function R(e) {
  return e.map((t) => t.name).filter((t) => w.has(t));
}
function JAn(e) {
  return w.has(e) || TFe.has(e) ? Nn(e) : oZ(e);
}
function nRt(e) {
  return nj({
    envelope: { v: Qu, outcome: "refused", target: T5t(), ...e },
    content: Mc(e.message)
  });
}
function p(e, t, n = e) {
  return { refusal: { code: e, message: t }, reason: n };
}
async function x(e, t, n, o) {
  let s = { ...t },
    r = AFe.filter((h) => h in s),
    a = r.length > 0 ? [Kit(r)] : [],
    u = await I(e, xo(s, r), n);
  if ("rejection" in u)
    return {
      result: Git(u.rejection, U(u.objection), a),
      answer: "not_run",
      objection: u.objection
    };
  let i = await Bcr(e, u.input, n, o);
  return {
    ...("failure" in i
      ? { result: Git(i.failure, "ran", a), answer: "tool_failed" }
      : jcr(e, i.data, a)),
    wasSafetyAskSkipped: u.wasSafetyAskSkipped
  };
}
async function I(e, t, n) {
  try {
    if (!e.isEnabled()) return { rejection: `Tool ${e.name} is not enabled` };
    let o = rS(e, t);
    if (!o.success) return { rejection: `InputValidationError: ${LN(e.name, o.error)}` };
    let s = await e.validateInput?.(o.data, n);
    if (s !== void 0 && !s.result)
      return {
        rejection: s.message,
        ...(s.deniedByPermissionRule === !0 && { objection: "deny_rule" })
      };
    let r = await S(e, o.data, n);
    return "rejection" in r ? r : { input: o.data, ...r };
  } catch (o) {
    return (YYe(e, o), { rejection: cne(o) });
  }
}
function C(e, t) {
  let n = { ...Tie(), toolPermissionContext: { ...t, sandboxAutoAllowSuspended: !0 } };
  return { ...e, inputFromAnotherMachine: !0, toolUseId: `toolu_${A()}`, getAppState: () => n };
}
async function S(e, t, n) {
  let o = await $A(e, t, n, { crashIsObjection: !0 }).catch((a) => {
    if (n.abortController.signal.aborted) throw a;
    return (YYe(e, a), "crashed");
  });
  if (o === null) return { wasSafetyAskSkipped: !1 };
  if (o === "crashed" || (o.decisionReason?.type === "other" && o.decisionReason.reason === lG))
    return {
      rejection: `${e.name} was not run: the permission rules could not be evaluated for this call (internal error).`,
      objection: "crashed_check"
    };
  if (o.behavior === "deny") return { rejection: o.message, objection: "deny_rule" };
  if (ED(o))
    return {
      rejection: `${e.name} was not run: a permission rule says to ask a person before a call like this one, and a call that runs in this environment cannot ask. Retrying won't help while that rule is in effect.`,
      objection: "ask_rule"
    };
  let s = Dl(o.decisionReason, txe);
  if (s !== void 0) return { rejection: lHr(VPr(o, s)), objection: "circuit_breaker" };
  let r = Dl(o.decisionReason, sq) !== void 0;
  return !r && Dl(o.decisionReason) !== void 0
    ? { wasSafetyAskSkipped: !0, ask: o }
    : {
        rejection: `${e.name} was not run: ${o.message} A call that runs in this environment cannot put that to a person. Retrying won't help.`,
        objection: r ? "circuit_breaker" : "other_ask"
      };
}
async function Bvi(e, t, n, o, s) {
  if (o === void 0) return { toolUseContext: n };
  let r = { ...C(n, o), inputFromAnotherMachine: n.inputFromAnotherMachine },
    { toolUseId: a } = r,
    u = a === void 0 ? void 0 : { toolUseId: a, opened: qLt(r, a, e.name) },
    i = await S(e, t, { ...r, permissionPhase: void 0, permissionRound: u?.opened }).catch((y) => {
      if (u) uje(r, u.toolUseId, u.opened);
      throw y;
    }),
    h = (u && uje(r, u.toolUseId, u.opened)) ?? {};
  if (!("rejection" in i)) {
    let y = await hQr(s, e, t, r.session, i.ask);
    if (y !== "run" && y !== "as_without_the_key") return y;
    return (
      g(
        "mcp_serve_plain_call",
        y === "run"
          ? { safety_ask_skipped: !1, caller_attested: !0 }
          : { safety_ask_skipped: i.wasSafetyAskSkipped }
      ),
      { toolUseContext: { ...r, permissionPhase: h } }
    );
  }
  if (i.objection === "crashed_check") m("mcp_serve_plain_call", i.objection);
  else f("mcp_serve_plain_call", i.objection);
  return { rejection: i.rejection };
}
function U(e) {
  switch (e) {
    case void 0:
      return "validation_failed";
    case "ask_rule":
    case "circuit_breaker":
    case "other_ask":
      return "ask_refused_no_surface";
    case "deny_rule":
    case "crashed_check":
      return "denied_by_rule";
  }
}
async function Bcr(e, t, n, o, s = nv, r = !1, a = !1) {
  using u = o();
  try {
    return await e.call(t, n, s, Ld({ content: [] }), void 0, {
      gitDiffRead: !0,
      ...(r && { callerLogsSharedEvents: r }),
      ...(a && { smallResultAsked: a })
    });
  } catch (i) {
    return (YYe(e, i), { failure: cne(i) });
  }
}
function YYe(e, t) {
  if (oJe(t) || pNt(t).isSad) return;
  let n = N(t);
  l("telemetryMessage" in n ? n : Qe(n, `mcp server tool '${e.name}' threw`));
}
function jcr(e, t, n, o) {
  try {
    let s = L(e, t, o)
      .map(({ output: r, ...a }) => ({
        ...a,
        result: Gcr(`${e.name} ran. Its output is in this answer's structured content.`, r, !1, n)
      }))
      .find(({ result: r }) => Buffer.byteLength(_(r), "utf8") <= j);
    return s === void 0
      ? b(e, "result_too_large", n)
      : { ...s, answer: "output", ...(E(e, t) && { wasOutputCut: !0 }) };
  } catch (s) {
    return (
      l(Qe(N(s), `mcp server tool '${e.name}' output could not be encoded`)),
      b(e, "result_unbuildable", n)
    );
  }
}
function L(e, t, n) {
  if (e.name !== at || !mn(t)) return [{ output: D(e, t) }];
  let o = { ...t, originalFile: null };
  if (typeof t.originalFile !== "string" || n === void 0) return [{ output: o }];
  if (n.isSubagent) return [{ output: o, originalFileLeftOutReason: "for_subagent" }];
  if (n.sessionVersion < XWt.editOriginalFile)
    return [{ output: o, originalFileLeftOutReason: "older_session" }];
  return Buffer.byteLength(t.originalFile, "utf8") > Gis
    ? [{ output: o, originalFileLeftOutReason: "over_limit" }]
    : [{ output: t }, { output: o, originalFileLeftOutReason: "answer_too_large" }];
}
function D(e, t) {
  if (E(e, t)) {
    let n = t.persistedOutputSize,
      o = typeof n === "number" ? `the command printed ${en(n)}; ` : "",
      s =
        typeof n === "number" && n >= t7
          ? `The first ${en(t7)} of the command's output are`
          : "The command's whole output is",
      r = `(output truncated: ${o}only the start was returned, and a saved copy of this result holds only that start. ${s} in the file ${t.persistedOutputPath}. If the file is gone, run the command again with ${M6e(e.name)}, if that is safe.)
`,
      a = Math.max(are(), Uor) - r.length;
    return { ...t, stdout: `${r}${re(t.stdout, a)}` };
  }
  switch (e.name) {
    case qt:
      return e.stripForStorage?.(t) ?? t;
    case ra:
      return F(t, { original_file: "", updated_file: "" });
    default:
      return t;
  }
}
function E(e, t) {
  return (
    e.name === Be &&
    mn(t) &&
    typeof t.stdout === "string" &&
    Boolean(t.persistedOutputPath) &&
    t.isImage !== !0
  );
}
function F(e, t) {
  return mn(e) ? { ...e, ...t } : e;
}
function b(e, t, n) {
  return {
    result: Wcr(
      `${e.name} ran, but its result could not be sent back. Check what it changed before running it again.`,
      n
    ),
    unsent: t
  };
}
function Wcr(e, t) {
  return nj({
    envelope: {
      v: Qu,
      outcome: "failed",
      target: T5t(),
      code: "internal_error",
      message: e,
      ...(t.length > 0 && { notes: t })
    },
    content: e
  });
}
function Git(e, t, n) {
  let o = Jc(e);
  return nj({
    envelope: {
      v: Qu,
      outcome: "completed",
      target: T5t(),
      is_error: !0,
      content: o,
      disposition: t,
      ...(n.length > 0 && { notes: n })
    },
    content: o
  });
}
export { Fvi, Ucr, k5t, Uvi, fQr, JAn, nRt, Bvi, Bcr, YYe, jcr, Wcr, Git };

//# sourceMappingURL=chunk-9ydxdv5d.js.map
